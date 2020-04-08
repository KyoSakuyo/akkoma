# Pleroma: A lightweight social networking server
# Copyright © 2017-2020 Pleroma Authors <https://pleroma.social/>
# SPDX-License-Identifier: AGPL-3.0-only

# NOTES
# - Can probably be a generic create validator
# - doesn't embed, will only get the object id
# - object has to be validated first, maybe with some meta info from the surrounding create
defmodule Pleroma.Web.ActivityPub.ObjectValidators.CreateChatMessageValidator do
  use Ecto.Schema

  alias Pleroma.Web.ActivityPub.ObjectValidators.Types

  import Ecto.Changeset

  @primary_key false

  embedded_schema do
    field(:id, Types.ObjectID, primary_key: true)
    field(:actor, Types.ObjectID)
    field(:type, :string)
    field(:to, Types.Recipients, default: [])
    field(:object, Types.ObjectID)
  end

  def cast_and_apply(data) do
    data
    |> cast_data
    |> apply_action(:insert)
  end

  def cast_data(data) do
    cast(%__MODULE__{}, data, __schema__(:fields))
  end
end
