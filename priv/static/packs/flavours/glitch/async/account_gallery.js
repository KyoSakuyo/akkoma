(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{859:function(t,e,a){"use strict";a.r(e),a.d(e,"default",(function(){return H}));var n=a(0),o=a(2),c=a(9),i=a(6),s=a(8),r=a(1),l=a(3),d=a.n(l),p=a(15),u=a(16),h=a.n(u),b=a(5),m=a.n(b),f=a(24),O=a(34),g=a(305),j=a(756),v=a(1079),y=a(21),_=a(108),I=a(215),M=a(14),L=a.n(M),w=a(25),R=a(18),C=a(154);var x=function(t){Object(s.a)(a,t);var e;e=a;function a(){for(var e,a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return e=t.call.apply(t,[this].concat(n))||this,Object(r.a)(Object(o.a)(e),"state",{visible:"hide_all"!==R.g&&!e.props.attachment.getIn(["status","sensitive"])||"show_all"===R.g,loaded:!1}),Object(r.a)(Object(o.a)(e),"setCanvasRef",(function(t){e.canvas=t})),Object(r.a)(Object(o.a)(e),"handleImageLoad",(function(){e.setState({loaded:!0})})),Object(r.a)(Object(o.a)(e),"handleMouseEnter",(function(t){e.hoverToPlay()&&t.target.play()})),Object(r.a)(Object(o.a)(e),"handleMouseLeave",(function(t){e.hoverToPlay()&&(t.target.pause(),t.target.currentTime=0)})),Object(r.a)(Object(o.a)(e),"handleClick",(function(t){0!==t.button||t.ctrlKey||t.metaKey||(t.preventDefault(),e.state.visible?e.props.onOpenMedia(e.props.attachment):e.setState({visible:!0}))})),e}var c=a.prototype;return c.componentDidMount=function(){this.props.attachment.get("blurhash")&&this._decode()},c.componentDidUpdate=function(t){t.attachment.get("blurhash")!==this.props.attachment.get("blurhash")&&this.props.attachment.get("blurhash")&&this._decode()},c._decode=function(){var t=this.props.attachment.get("blurhash"),e=Object(I.decode)(t,32,32);if(e){var a=this.canvas.getContext("2d"),n=new ImageData(e,32,32);a.putImageData(n,0,0)}},c.hoverToPlay=function(){return!R.a&&-1!==["gifv","video"].indexOf(this.props.attachment.get("type"))},c.render=function(){var t=this.props,e=t.attachment,a=t.displayWidth,o=this.state,c=o.visible,i=o.loaded,s=Math.floor((a-4)/3)-4+"px",r=s,l=e.get("status"),p=l.get("spoiler_text")||e.get("description"),u="";if("unknown"===e.get("type"));else if("audio"===e.get("type"))u=Object(n.a)("span",{className:"account-gallery__item__icons"},void 0,Object(n.a)(w.a,{id:"music"}));else if("image"===e.get("type")){var h=100*((e.getIn(["meta","focus","x"])||0)/2+.5),b=100*((e.getIn(["meta","focus","y"])||0)/-2+.5);u=Object(n.a)("img",{src:e.get("preview_url"),alt:e.get("description"),title:e.get("description"),style:{objectPosition:h+"% "+b+"%"},onLoad:this.handleImageLoad})}else if(-1!==["gifv","video"].indexOf(e.get("type"))){var m=!Object(C.a)()&&R.a,f="video"===e.get("type")?Object(n.a)(w.a,{id:"play"}):"GIF";u=Object(n.a)("div",{className:L()("media-gallery__gifv",{autoplay:m})},void 0,Object(n.a)("video",{className:"media-gallery__item-gifv-thumbnail","aria-label":e.get("description"),title:e.get("description"),role:"application",src:e.get("url"),onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave,autoPlay:m,loop:!0,muted:!0}),Object(n.a)("span",{className:"media-gallery__gifv__label"},void 0,f))}var O=Object(n.a)("span",{className:"account-gallery__item__icons"},void 0,Object(n.a)(w.a,{id:"eye-slash"}));return(Object(n.a)("div",{className:"account-gallery__item",style:{width:s,height:r}},void 0,Object(n.a)("a",{className:"media-gallery__item-thumbnail",href:l.get("url"),onClick:this.handleClick,title:p,target:"_blank",rel:"noopener noreferrer"},void 0,d.a.createElement("canvas",{width:32,height:32,ref:this.setCanvasRef,className:L()("media-gallery__preview",{"media-gallery__preview--hidden":c&&i})}),c?u:O)))},a}(y.a);Object(r.a)(x,"propTypes",{attachment:h.a.map.isRequired,displayWidth:m.a.number.isRequired,onOpenMedia:m.a.func.isRequired});var S,k,D,T=a(1083),N=a(472),A=a(1078),E=a(1056),q=a(45);function P(t){return function(){var e,a=Object(i.a)(t);if(U()){var n=Object(i.a)(this).constructor;e=Reflect.construct(a,arguments,n)}else e=a.apply(this,arguments);return Object(c.a)(this,e)}}function U(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var W=function(t){Object(s.a)(e,t);P(e);function e(){for(var e,a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return e=t.call.apply(t,[this].concat(n))||this,Object(r.a)(Object(o.a)(e),"handleLoadMore",(function(){e.props.onLoadMore(e.props.maxId)})),e}return e.prototype.render=function(){return Object(n.a)(A.a,{disabled:this.props.disabled,onClick:this.handleLoadMore})},e}(y.a);Object(r.a)(W,"propTypes",{maxId:m.a.string,onLoadMore:m.a.func.isRequired});var H=Object(p.connect)((function(t,e){return{isAccount:!!t.getIn(["accounts",e.params.accountId]),attachments:Object(_.a)(t,e.params.accountId),isLoading:t.getIn(["timelines","account:"+e.params.accountId+":media","isLoading"]),hasMore:t.getIn(["timelines","account:"+e.params.accountId+":media","hasMore"])}}))((D=k=function(t){Object(s.a)(e,t);P(e);function e(){for(var e,a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return e=t.call.apply(t,[this].concat(n))||this,Object(r.a)(Object(o.a)(e),"state",{width:323}),Object(r.a)(Object(o.a)(e),"handleHeaderClick",(function(){e.column.scrollTop()})),Object(r.a)(Object(o.a)(e),"handleScrollToBottom",(function(){e.props.hasMore&&e.handleLoadMore(e.props.attachments.size>0?e.props.attachments.last().getIn(["status","id"]):void 0)})),Object(r.a)(Object(o.a)(e),"handleScroll",(function(t){var a=t.target,n=a.scrollTop;150>a.scrollHeight-n-a.clientHeight&&!e.props.isLoading&&e.handleScrollToBottom()})),Object(r.a)(Object(o.a)(e),"handleLoadMore",(function(t){e.props.dispatch(Object(O.p)(e.props.params.accountId,{maxId:t}))})),Object(r.a)(Object(o.a)(e),"handleLoadOlder",(function(t){t.preventDefault(),e.handleScrollToBottom()})),Object(r.a)(Object(o.a)(e),"shouldUpdateScroll",(function(t,e){var a=e.location;return!(((t||{}).location||{}).state||{}).mastodonModalOpen&&!(a.state&&a.state.mastodonModalOpen)})),Object(r.a)(Object(o.a)(e),"setColumnRef",(function(t){e.column=t})),Object(r.a)(Object(o.a)(e),"handleOpenMedia",(function(t){if("video"===t.get("type"))e.props.dispatch(Object(q.d)("VIDEO",{media:t,status:t.get("status")}));else if("audio"===t.get("type"))e.props.dispatch(Object(q.d)("AUDIO",{media:t,status:t.get("status")}));else{var a=t.getIn(["status","media_attachments"]),n=a.findIndex((function(e){return e.get("id")===t.get("id")}));e.props.dispatch(Object(q.d)("MEDIA",{media:a,index:n,status:t.get("status")}))}})),Object(r.a)(Object(o.a)(e),"handleRef",(function(t){t&&e.setState({width:t.offsetWidth})})),e}var a=e.prototype;return a.componentDidMount=function(){this.props.dispatch(Object(f.F)(this.props.params.accountId)),this.props.dispatch(Object(O.p)(this.props.params.accountId))},a.componentWillReceiveProps=function(t){t.params.accountId!==this.props.params.accountId&&t.params.accountId&&(this.props.dispatch(Object(f.F)(t.params.accountId)),this.props.dispatch(Object(O.p)(this.props.params.accountId)))},a.render=function(){var t=this,e=this.props,a=e.attachments,o=e.isLoading,c=e.hasMore,i=e.isAccount,s=e.multiColumn,r=this.state.width;if(!i)return Object(n.a)(j.a,{},void 0,Object(n.a)(E.a,{}));if(!a&&o)return Object(n.a)(j.a,{},void 0,Object(n.a)(g.a,{}));var l=null;return!c||o&&0===a.size||(l=Object(n.a)(A.a,{visible:!o,onClick:this.handleLoadOlder})),d.a.createElement(j.a,{ref:this.setColumnRef},Object(n.a)(v.a,{onClick:this.handleHeaderClick,multiColumn:s}),Object(n.a)(N.a,{scrollKey:"account_gallery",shouldUpdateScroll:this.shouldUpdateScroll},void 0,Object(n.a)("div",{className:"scrollable scrollable--flex",onScroll:this.handleScroll},void 0,Object(n.a)(T.a,{accountId:this.props.params.accountId}),d.a.createElement("div",{role:"feed",className:"account-gallery__container",ref:this.handleRef},a.map((function(e,o){return null===e?Object(n.a)(W,{maxId:o>0?a.getIn(o-1,"id"):null,onLoadMore:t.handleLoadMore},"more:"+a.getIn(o+1,"id")):Object(n.a)(x,{attachment:e,displayWidth:r,onOpenMedia:t.handleOpenMedia},e.get("id"))})),l),o&&0===a.size&&Object(n.a)("div",{className:"scrollable__append"},void 0,Object(n.a)(g.a,{})))))},e}(y.a),Object(r.a)(k,"propTypes",{params:m.a.object.isRequired,dispatch:m.a.func.isRequired,attachments:h.a.list.isRequired,isLoading:m.a.bool,hasMore:m.a.bool,isAccount:m.a.bool,multiColumn:m.a.bool}),S=D))||S}}]);
//# sourceMappingURL=account_gallery.js.map