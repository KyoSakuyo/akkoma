(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{835:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return ie}));var a,o=n(0),s=n(2),i=(n(9),n(6),n(8)),c=n(1),r=n(3),d=n.n(r),l=n(15),u=n(1059),p=n(760),b=n(758),h=n(34),v=n(106),m=n(252),f=n(7),j=n(1102);var O,g,M,y=Object(f.f)({filter_regex:{id:"home.column_settings.filter_regex",defaultMessage:"Filter out by regular expressions"},settings:{id:"home.settings",defaultMessage:"Column settings"}}),_=Object(f.g)(a=function(e){Object(i.a)(n,e);var t;t=n;function n(){return e.apply(this,arguments)||this}return n.prototype.render=function(){var e=this.props,t=e.settings,n=e.onChange,a=e.intl;return(Object(o.a)("div",{},void 0,Object(o.a)("span",{className:"column-settings__section"},void 0,Object(o.a)(f.b,{id:"home.column_settings.advanced",defaultMessage:"Advanced"})),Object(o.a)("div",{className:"column-settings__row"},void 0,Object(o.a)(j.a,{settings:t,settingPath:["regex","body"],onChange:n,label:a.formatMessage(y.filter_regex)}))))},n}(d.a.PureComponent))||a,C=n(73),k=Object(l.connect)((function(e){return{settings:e.getIn(["settings","direct"])}}),(function(e){return{onChange:function(t,n){e(Object(C.c)(["direct"].concat(t),n))}}}))(_),w=n(765),I=n(10),x=n(32),R=n(65),L=n.n(R),E=n(5),N=n.n(E),S=n(16),D=n.n(S),T=n(21),U=n(155),A=n(265),H=n(767),q=n(776),K=n(214),P=n(41),W=n(102),z=n(301),V=n(18),B=n(14),F=n.n(B);var J=Object(f.f)({more:{id:"status.more",defaultMessage:"More"},open:{id:"conversation.open",defaultMessage:"View conversation"},reply:{id:"status.reply",defaultMessage:"Reply"},markAsRead:{id:"conversation.mark_as_read",defaultMessage:"Mark as read"},delete:{id:"conversation.delete",defaultMessage:"Delete conversation"},muteConversation:{id:"status.mute_conversation",defaultMessage:"Mute conversation"},unmuteConversation:{id:"status.unmute_conversation",defaultMessage:"Unmute conversation"}}),Y=Object(f.g)((M=g=function(e){Object(i.a)(n,e);var t;t=n;function n(){for(var t,n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return t=e.call.apply(e,[this].concat(a))||this,Object(c.a)(Object(s.a)(t),"state",{isExpanded:void 0}),Object(c.a)(Object(s.a)(t),"parseClick",(function(e,n){var a=t.context.router,o=t.props,s=o.lastStatus,i=o.unread,c=o.markRead;if(a&&0===e.button&&!(e.ctrlKey||e.altKey||e.metaKey)){void 0===n&&(i&&c(),n="/statuses/"+s.get("id"));var r=Object(I.default)({},a.history.location.state);r.mastodonBackSteps=(r.mastodonBackSteps||0)+1,a.history.push(n,r),e.preventDefault()}})),Object(c.a)(Object(s.a)(t),"handleEmojiMouseEnter",(function(e){var t=e.target;t.src=t.getAttribute("data-original")})),Object(c.a)(Object(s.a)(t),"handleEmojiMouseLeave",(function(e){var t=e.target;t.src=t.getAttribute("data-static")})),Object(c.a)(Object(s.a)(t),"handleClick",(function(){if(t.context.router){var e=t.props,n=e.lastStatus,a=e.unread,o=e.markRead;a&&o(),t.context.router.history.push("/statuses/"+n.get("id"))}})),Object(c.a)(Object(s.a)(t),"handleMarkAsRead",(function(){t.props.markRead()})),Object(c.a)(Object(s.a)(t),"handleReply",(function(){t.props.reply(t.props.lastStatus,t.context.router.history)})),Object(c.a)(Object(s.a)(t),"handleDelete",(function(){t.props.delete()})),Object(c.a)(Object(s.a)(t),"handleHotkeyMoveUp",(function(){t.props.onMoveUp(t.props.conversationId)})),Object(c.a)(Object(s.a)(t),"handleHotkeyMoveDown",(function(){t.props.onMoveDown(t.props.conversationId)})),Object(c.a)(Object(s.a)(t),"handleConversationMute",(function(){t.props.onMute(t.props.lastStatus)})),Object(c.a)(Object(s.a)(t),"handleShowMore",(function(){t.props.lastStatus.get("spoiler_text")&&t.setExpansion(!t.state.isExpanded)})),Object(c.a)(Object(s.a)(t),"setExpansion",(function(e){t.setState({isExpanded:e})})),Object(c.a)(Object(s.a)(t),"setNamesRef",(function(e){t.namesNode=e})),t}var a=n.prototype;return a._updateEmojis=function(){var e=this.namesNode;if(e&&!V.a)for(var t=e.querySelectorAll(".custom-emoji"),n=0;n<t.length;n++){var a=t[n];a.classList.contains("status-emoji")||(a.classList.add("status-emoji"),a.addEventListener("mouseenter",this.handleEmojiMouseEnter,!1),a.addEventListener("mouseleave",this.handleEmojiMouseLeave,!1))}},a.componentDidMount=function(){this._updateEmojis()},a.componentDidUpdate=function(){this._updateEmojis()},a.render=function(){var e=this.props,t=e.accounts,n=e.lastStatus,a=e.unread,s=e.intl,i=this.state.isExpanded;if(null===n)return null;var c=[{text:s.formatMessage(J.open),action:this.handleClick},null];c.push({text:s.formatMessage(n.get("muted")?J.unmuteConversation:J.muteConversation),action:this.handleConversationMute}),a&&(c.push({text:s.formatMessage(J.markAsRead),action:this.handleMarkAsRead}),c.push(null)),c.push({text:s.formatMessage(J.delete),action:this.handleDelete});var r=t.map((function(e){return Object(o.a)(K.a,{to:"/accounts/"+e.get("id"),href:e.get("url"),title:e.get("acct")},e.get("id"),Object(o.a)("bdi",{},void 0,Object(o.a)("strong",{className:"display-name__html",dangerouslySetInnerHTML:{__html:e.get("display_name_html")}})))})).reduce((function(e,t){return[e,", ",t]})),l={reply:this.handleReply,open:this.handleClick,moveUp:this.handleHotkeyMoveUp,moveDown:this.handleHotkeyMoveDown,toggleHidden:this.handleShowMore},u=null;return n.get("media_attachments").size>0&&(u=Object(o.a)(A.a,{compact:!0,media:n.get("media_attachments")})),Object(o.a)(z.HotKeys,{handlers:l},void 0,Object(o.a)("div",{className:F()("conversation focusable muted",{"conversation--unread":a}),tabIndex:"0"},void 0,Object(o.a)("div",{className:"conversation__avatar",onClick:this.handleClick,role:"presentation"},void 0,Object(o.a)(q.a,{accounts:t,size:48})),Object(o.a)("div",{className:"conversation__content"},void 0,Object(o.a)("div",{className:"conversation__content__info"},void 0,Object(o.a)("div",{className:"conversation__content__relative-time"},void 0,a&&Object(o.a)("span",{className:"conversation__unread"})," ",Object(o.a)(W.default,{timestamp:n.get("created_at")})),d.a.createElement("div",{className:"conversation__content__names",ref:this.setNamesRef},Object(o.a)(f.b,{id:"conversation.with",defaultMessage:"With {names}",values:{names:Object(o.a)("span",{},void 0,r)}}))),Object(o.a)(U.a,{status:n,parseClick:this.parseClick,expanded:i,onExpandedToggle:this.handleShowMore,collapsable:!0,media:u}),Object(o.a)("div",{className:"status__action-bar"},void 0,Object(o.a)(P.a,{className:"status__action-bar-button",title:s.formatMessage(J.reply),icon:"reply",onClick:this.handleReply}),Object(o.a)("div",{className:"status__action-bar-dropdown"},void 0,Object(o.a)(H.a,{status:n,items:c,icon:"ellipsis-h",size:18,direction:"right",title:s.formatMessage(J.more)}))))))},n}(T.a),Object(c.a)(g,"contextTypes",{router:N.a.object}),Object(c.a)(g,"propTypes",{conversationId:N.a.string.isRequired,accounts:D.a.list.isRequired,lastStatus:D.a.map,unread:N.a.bool.isRequired,onMoveUp:N.a.func,onMoveDown:N.a.func,markRead:N.a.func.isRequired,delete:N.a.func.isRequired,intl:N.a.object.isRequired}),O=M))||O,G=n(108),Q=n(20),X=n(45),Z=n(117),$=Object(f.f)({replyConfirm:{id:"confirmations.reply.confirm",defaultMessage:"Reply"},replyMessage:{id:"confirmations.reply.message",defaultMessage:"Replying now will overwrite the message you are currently composing. Are you sure you want to proceed?"}}),ee=Object(f.g)(Object(l.connect)((function(){var e=Object(G.f)();return function(t,n){var a=n.conversationId,o=t.getIn(["conversations","items"]).find((function(e){return e.get("id")===a})),s=o.get("last_status",null);return{accounts:o.get("accounts").map((function(e){return t.getIn(["accounts",e],null)})),unread:o.get("unread"),lastStatus:s&&e(t,{id:s})}}}),(function(e,t){var n=t.intl,a=t.conversationId;return{markRead:function(){e(Object(v.k)(a))},reply:function(t,a){e((function(o,s){0!==s().getIn(["compose","text"]).trim().length?e(Object(X.d)("CONFIRM",{message:n.formatMessage($.replyMessage),confirm:n.formatMessage($.replyConfirm),onConfirm:function(){return e(Object(Q.lb)(t,a))}})):e(Object(Q.lb)(t,a))}))},delete:function(){e(Object(v.i)(a))},onMute:function(t){t.get("muted")?e(Object(Z.j)(t.get("id"))):e(Object(Z.h)(t.get("id")))},onToggleHidden:function(t){t.get("hidden")?e(Object(Z.revealStatus)(t.get("id"))):e(Object(Z.hideStatus)(t.get("id")))}}}))(Y)),te=n(1048);var ne=function(e){Object(i.a)(n,e);var t;t=n;function n(){for(var t,n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return t=e.call.apply(e,[this].concat(a))||this,Object(c.a)(Object(s.a)(t),"getCurrentIndex",(function(e){return t.props.conversations.findIndex((function(t){return t.get("id")===e}))})),Object(c.a)(Object(s.a)(t),"handleMoveUp",(function(e){var n=t.getCurrentIndex(e)-1;t._selectChild(n,!0)})),Object(c.a)(Object(s.a)(t),"handleMoveDown",(function(e){var n=t.getCurrentIndex(e)+1;t._selectChild(n,!1)})),Object(c.a)(Object(s.a)(t),"setRef",(function(e){t.node=e})),Object(c.a)(Object(s.a)(t),"handleLoadOlder",L()((function(){var e=t.props.conversations.last();e&&e.get("last_status")&&t.props.onLoadMore(e.get("last_status"))}),300,{leading:!0})),t}var a=n.prototype;return a._selectChild=function(e,t){var n=this.node.node,a=n.querySelector("article:nth-of-type("+(e+1)+") .focusable");a&&(t&&n.scrollTop>a.offsetTop?a.scrollIntoView(!0):!t&&n.scrollTop+n.clientHeight<a.offsetTop+a.offsetHeight&&a.scrollIntoView(!1),a.focus())},a.render=function(){var e=this,t=this.props,n=t.conversations,a=t.onLoadMore,s=Object(x.default)(t,["conversations","onLoadMore"]);return d.a.createElement(te.a,Object(I.default)({},s,{onLoadMore:a&&this.handleLoadOlder,scrollKey:"direct",ref:this.setRef}),n.map((function(t){return Object(o.a)(ee,{conversationId:t.get("id"),onMoveUp:e.handleMoveUp,onMoveDown:e.handleMoveDown},t.get("id"))})))},n}(T.a);Object(c.a)(ne,"propTypes",{conversations:D.a.list.isRequired,hasMore:N.a.bool,isLoading:N.a.bool,onLoadMore:N.a.func});var ae,oe=Object(l.connect)((function(e){return{conversations:e.getIn(["conversations","items"]),isLoading:e.getIn(["conversations","isLoading"],!0),hasMore:e.getIn(["conversations","hasMore"],!1)}}),(function(e){return{onLoadMore:function(t){return e(Object(v.j)({maxId:t}))}}}))(ne);var se=Object(f.f)({title:{id:"column.direct",defaultMessage:"Direct messages"}}),ie=Object(l.connect)((function(e){return{hasUnread:e.getIn(["timelines","direct","unread"])>0,conversationsMode:e.getIn(["settings","direct","conversations"])}}))(ae=Object(f.g)(ae=function(e){Object(i.a)(n,e);var t;t=n;function n(){for(var t,n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return t=e.call.apply(e,[this].concat(a))||this,Object(c.a)(Object(s.a)(t),"handlePin",(function(){var e=t.props,n=e.columnId,a=e.dispatch;a(n?Object(m.h)(n):Object(m.e)("DIRECT",{}))})),Object(c.a)(Object(s.a)(t),"handleMove",(function(e){var n=t.props,a=n.columnId;(0,n.dispatch)(Object(m.g)(a,e))})),Object(c.a)(Object(s.a)(t),"handleHeaderClick",(function(){t.column.scrollTop()})),Object(c.a)(Object(s.a)(t),"setRef",(function(e){t.column=e})),Object(c.a)(Object(s.a)(t),"handleLoadMoreTimeline",(function(e){t.props.dispatch(Object(h.s)({maxId:e}))})),Object(c.a)(Object(s.a)(t),"handleLoadMoreConversations",(function(e){t.props.dispatch(Object(v.j)({maxId:e}))})),Object(c.a)(Object(s.a)(t),"handleTimelineClick",(function(){t.props.dispatch(Object(C.c)(["direct","conversations"],!1))})),Object(c.a)(Object(s.a)(t),"handleConversationsClick",(function(){t.props.dispatch(Object(C.c)(["direct","conversations"],!0))})),t}var a=n.prototype;return a.componentDidMount=function(){var e=this.props,t=e.dispatch,n=e.conversationsMode;t(Object(v.l)()),t(n?Object(v.j)():Object(h.s)()),this.disconnect=t(Object(w.b)())},a.componentDidUpdate=function(e){var t=this.props,n=t.dispatch,a=t.conversationsMode;e.conversationsMode&&!a?n(Object(h.s)()):!e.conversationsMode&&a&&n(Object(v.j)())},a.componentWillUnmount=function(){this.props.dispatch(Object(v.m)()),this.disconnect&&(this.disconnect(),this.disconnect=null)},a.render=function(){var e,t=this.props,n=t.intl,a=t.hasUnread,s=t.columnId,i=t.multiColumn,c=t.conversationsMode,r=!!s;return e=c?Object(o.a)(oe,{trackScroll:!r,scrollKey:"direct_timeline-"+s,timelineId:"direct",onLoadMore:this.handleLoadMore,emptyMessage:Object(o.a)(f.b,{id:"empty_column.direct",defaultMessage:"You don't have any direct messages yet. When you send or receive one, it will show up here."})}):Object(o.a)(u.a,{trackScroll:!r,scrollKey:"direct_timeline-"+s,timelineId:"direct",onLoadMore:this.handleLoadMoreTimeline,emptyMessage:Object(o.a)(f.b,{id:"empty_column.direct",defaultMessage:"You don't have any direct messages yet. When you send or receive one, it will show up here."})}),d.a.createElement(p.a,{bindToDocument:!i,ref:this.setRef,label:n.formatMessage(se.title)},Object(o.a)(b.a,{icon:"envelope",active:a,title:n.formatMessage(se.title),onPin:this.handlePin,onMove:this.handleMove,onClick:this.handleHeaderClick,pinned:r,multiColumn:i},void 0,Object(o.a)(k,{})),Object(o.a)("div",{className:"notification__filter-bar"},void 0,Object(o.a)("button",{className:c?"active":"",onClick:this.handleConversationsClick},void 0,Object(o.a)(f.b,{id:"direct.conversations_mode",defaultMessage:"Conversations"})),Object(o.a)("button",{className:c?"":"active",onClick:this.handleTimelineClick},void 0,Object(o.a)(f.b,{id:"direct.timeline_mode",defaultMessage:"Timeline"}))),e)},n}(d.a.PureComponent))||ae)||ae}}]);
//# sourceMappingURL=direct_timeline.js.map