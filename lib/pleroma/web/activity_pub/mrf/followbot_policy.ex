defmodule Pleroma.Web.ActivityPub.MRF.FollowbotPolicy do
  @behaviour Pleroma.Web.ActivityPub.MRF
  alias Pleroma.Activity
  alias Pleroma.Config
  alias Pleroma.User
  alias Pleroma.Web.CommonAPI

  require Logger

  @impl true
  def filter(message) do
    with follower_nickname <- Config.get([:mrf_follow_bot, :follower_nickname]),
         %User{actor_type: "Service"} = follower <-
           User.get_cached_by_nickname(follower_nickname),
         %{"type" => "Create", "object" => %{"type" => "Note"}} <- message do
      try_follow(follower, message)
    else
      nil ->
        Logger.warn(
          "#{__MODULE__} skipped because of missing `:mrf_follow_bot, :follower_nickname` configuration, the :follower_nickname
            account does not exist, or the account is not correctly configured as a bot."
        )

        {:ok, message}

      _ ->
        {:ok, message}
    end
  end

  defp try_follow(follower, message) do
    Task.start(fn ->
      to = Map.get(message, "to", [])
      cc = Map.get(message, "cc", [])
      actor = [message["actor"]]

      Enum.concat([to, cc, actor])
      |> List.flatten()
      |> Enum.uniq()
      |> User.get_all_by_ap_id()
      |> Enum.each(fn user ->
        since_thirty_days_ago = NaiveDateTime.utc_now() |> NaiveDateTime.add(-(86_400 * 30))

        with false <- user.local,
             false <- User.following?(follower, user),
             false <- User.locked?(user),
             false <- (user.bio || "") |> String.downcase() |> String.contains?("nobot"),
             false <-
               Activity.follow_requests_outstanding_since?(follower, user, since_thirty_days_ago) do
          Logger.info(
            "#{__MODULE__}: Follow request from #{follower.nickname} to #{user.nickname}"
          )

          CommonAPI.follow(follower, user)
        end
      end)
    end)

    {:ok, message}
  end

  @impl true
  def describe do
    {:ok, %{}}
  end
end
