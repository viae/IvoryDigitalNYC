/*! jQuery Migrate v1.2.1 | (c) 2005, 2013 jQuery Foundation, Inc. and other contributors | jquery.org/license */
jQuery.migrateMute===void 0&&(jQuery.migrateMute=!0),function(e,t,n){function r(n){var r=t.console;i[n]||(i[n]=!0,e.migrateWarnings.push(n),r&&r.warn&&!e.migrateMute&&(r.warn("JQMIGRATE: "+n),e.migrateTrace&&r.trace&&r.trace()))}function a(t,a,i,o){if(Object.defineProperty)try{return Object.defineProperty(t,a,{configurable:!0,enumerable:!0,get:function(){return r(o),i},set:function(e){r(o),i=e}}),n}catch(s){}e._definePropertyBroken=!0,t[a]=i}var i={};e.migrateWarnings=[],!e.migrateMute&&t.console&&t.console.log&&t.console.log("JQMIGRATE: Logging is active"),e.migrateTrace===n&&(e.migrateTrace=!0),e.migrateReset=function(){i={},e.migrateWarnings.length=0},"BackCompat"===document.compatMode&&r("jQuery is not compatible with Quirks Mode");var o=e("<input/>",{size:1}).attr("size")&&e.attrFn,s=e.attr,u=e.attrHooks.value&&e.attrHooks.value.get||function(){return null},c=e.attrHooks.value&&e.attrHooks.value.set||function(){return n},l=/^(?:input|button)$/i,d=/^[238]$/,p=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,f=/^(?:checked|selected)$/i;a(e,"attrFn",o||{},"jQuery.attrFn is deprecated"),e.attr=function(t,a,i,u){var c=a.toLowerCase(),g=t&&t.nodeType;return u&&(4>s.length&&r("jQuery.fn.attr( props, pass ) is deprecated"),t&&!d.test(g)&&(o?a in o:e.isFunction(e.fn[a])))?e(t)[a](i):("type"===a&&i!==n&&l.test(t.nodeName)&&t.parentNode&&r("Can't change the 'type' of an input or button in IE 6/7/8"),!e.attrHooks[c]&&p.test(c)&&(e.attrHooks[c]={get:function(t,r){var a,i=e.prop(t,r);return i===!0||"boolean"!=typeof i&&(a=t.getAttributeNode(r))&&a.nodeValue!==!1?r.toLowerCase():n},set:function(t,n,r){var a;return n===!1?e.removeAttr(t,r):(a=e.propFix[r]||r,a in t&&(t[a]=!0),t.setAttribute(r,r.toLowerCase())),r}},f.test(c)&&r("jQuery.fn.attr('"+c+"') may use property instead of attribute")),s.call(e,t,a,i))},e.attrHooks.value={get:function(e,t){var n=(e.nodeName||"").toLowerCase();return"button"===n?u.apply(this,arguments):("input"!==n&&"option"!==n&&r("jQuery.fn.attr('value') no longer gets properties"),t in e?e.value:null)},set:function(e,t){var a=(e.nodeName||"").toLowerCase();return"button"===a?c.apply(this,arguments):("input"!==a&&"option"!==a&&r("jQuery.fn.attr('value', val) no longer sets properties"),e.value=t,n)}};var g,h,v=e.fn.init,m=e.parseJSON,y=/^([^<]*)(<[\w\W]+>)([^>]*)$/;e.fn.init=function(t,n,a){var i;return t&&"string"==typeof t&&!e.isPlainObject(n)&&(i=y.exec(e.trim(t)))&&i[0]&&("<"!==t.charAt(0)&&r("$(html) HTML strings must start with '<' character"),i[3]&&r("$(html) HTML text after last tag is ignored"),"#"===i[0].charAt(0)&&(r("HTML string cannot start with a '#' character"),e.error("JQMIGRATE: Invalid selector string (XSS)")),n&&n.context&&(n=n.context),e.parseHTML)?v.call(this,e.parseHTML(i[2],n,!0),n,a):v.apply(this,arguments)},e.fn.init.prototype=e.fn,e.parseJSON=function(e){return e||null===e?m.apply(this,arguments):(r("jQuery.parseJSON requires a valid JSON string"),null)},e.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||0>e.indexOf("compatible")&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},e.browser||(g=e.uaMatch(navigator.userAgent),h={},g.browser&&(h[g.browser]=!0,h.version=g.version),h.chrome?h.webkit=!0:h.webkit&&(h.safari=!0),e.browser=h),a(e,"browser",e.browser,"jQuery.browser is deprecated"),e.sub=function(){function t(e,n){return new t.fn.init(e,n)}e.extend(!0,t,this),t.superclass=this,t.fn=t.prototype=this(),t.fn.constructor=t,t.sub=this.sub,t.fn.init=function(r,a){return a&&a instanceof e&&!(a instanceof t)&&(a=t(a)),e.fn.init.call(this,r,a,n)},t.fn.init.prototype=t.fn;var n=t(document);return r("jQuery.sub() is deprecated"),t},e.ajaxSetup({converters:{"text json":e.parseJSON}});var b=e.fn.data;e.fn.data=function(t){var a,i,o=this[0];return!o||"events"!==t||1!==arguments.length||(a=e.data(o,t),i=e._data(o,t),a!==n&&a!==i||i===n)?b.apply(this,arguments):(r("Use of jQuery.fn.data('events') is deprecated"),i)};var j=/\/(java|ecma)script/i,w=e.fn.andSelf||e.fn.addBack;e.fn.andSelf=function(){return r("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),w.apply(this,arguments)},e.clean||(e.clean=function(t,a,i,o){a=a||document,a=!a.nodeType&&a[0]||a,a=a.ownerDocument||a,r("jQuery.clean() is deprecated");var s,u,c,l,d=[];if(e.merge(d,e.buildFragment(t,a).childNodes),i)for(c=function(e){return!e.type||j.test(e.type)?o?o.push(e.parentNode?e.parentNode.removeChild(e):e):i.appendChild(e):n},s=0;null!=(u=d[s]);s++)e.nodeName(u,"script")&&c(u)||(i.appendChild(u),u.getElementsByTagName!==n&&(l=e.grep(e.merge([],u.getElementsByTagName("script")),c),d.splice.apply(d,[s+1,0].concat(l)),s+=l.length));return d});var Q=e.event.add,x=e.event.remove,k=e.event.trigger,N=e.fn.toggle,T=e.fn.live,M=e.fn.die,S="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",C=RegExp("\\b(?:"+S+")\\b"),H=/(?:^|\s)hover(\.\S+|)\b/,A=function(t){return"string"!=typeof t||e.event.special.hover?t:(H.test(t)&&r("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),t&&t.replace(H,"mouseenter$1 mouseleave$1"))};e.event.props&&"attrChange"!==e.event.props[0]&&e.event.props.unshift("attrChange","attrName","relatedNode","srcElement"),e.event.dispatch&&a(e.event,"handle",e.event.dispatch,"jQuery.event.handle is undocumented and deprecated"),e.event.add=function(e,t,n,a,i){e!==document&&C.test(t)&&r("AJAX events should be attached to document: "+t),Q.call(this,e,A(t||""),n,a,i)},e.event.remove=function(e,t,n,r,a){x.call(this,e,A(t)||"",n,r,a)},e.fn.error=function(){var e=Array.prototype.slice.call(arguments,0);return r("jQuery.fn.error() is deprecated"),e.splice(0,0,"error"),arguments.length?this.bind.apply(this,e):(this.triggerHandler.apply(this,e),this)},e.fn.toggle=function(t,n){if(!e.isFunction(t)||!e.isFunction(n))return N.apply(this,arguments);r("jQuery.fn.toggle(handler, handler...) is deprecated");var a=arguments,i=t.guid||e.guid++,o=0,s=function(n){var r=(e._data(this,"lastToggle"+t.guid)||0)%o;return e._data(this,"lastToggle"+t.guid,r+1),n.preventDefault(),a[r].apply(this,arguments)||!1};for(s.guid=i;a.length>o;)a[o++].guid=i;return this.click(s)},e.fn.live=function(t,n,a){return r("jQuery.fn.live() is deprecated"),T?T.apply(this,arguments):(e(this.context).on(t,this.selector,n,a),this)},e.fn.die=function(t,n){return r("jQuery.fn.die() is deprecated"),M?M.apply(this,arguments):(e(this.context).off(t,this.selector||"**",n),this)},e.event.trigger=function(e,t,n,a){return n||C.test(e)||r("Global events are undocumented and deprecated"),k.call(this,e,t,n||document,a)},e.each(S.split("|"),function(t,n){e.event.special[n]={setup:function(){var t=this;return t!==document&&(e.event.add(document,n+"."+e.guid,function(){e.event.trigger(n,null,t,!0)}),e._data(this,n,e.guid++)),!1},teardown:function(){return this!==document&&e.event.remove(document,n+"."+e._data(this,n)),!1}}})}(jQuery,window);

/*
* @fileOverview TouchSwipe - jQuery Plugin
* @version 1.6.5
*
* @author Matt Bryson http://www.github.com/mattbryson
* @see https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
* @see http://labs.skinkers.com/touchSwipe/
* @see http://plugins.jquery.com/project/touchSwipe
*
* Copyright (c) 2010 Matt Bryson
* Dual licensed under the MIT or GPL Version 2 licenses.
**/
(function(a){if(typeof define==="function"&&define.amd&&define.amd.jQuery){define(["jquery"],a)}else{a(jQuery)}}(function(e){var o="left",n="right",d="up",v="down",c="in",w="out",l="none",r="auto",k="swipe",s="pinch",x="tap",i="doubletap",b="longtap",A="horizontal",t="vertical",h="all",q=10,f="start",j="move",g="end",p="cancel",a="ontouchstart" in window,y="TouchSwipe";var m={fingers:1,threshold:75,cancelThreshold:null,pinchThreshold:20,maxTimeThreshold:null,fingerReleaseThreshold:250,longTapThreshold:500,doubleTapThreshold:200,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,pinchIn:null,pinchOut:null,pinchStatus:null,click:null,tap:null,doubleTap:null,longTap:null,triggerOnTouchEnd:true,triggerOnTouchLeave:false,allowPageScroll:"auto",fallbackToMouseEvents:true,excludedElements:"label, button, input, select, textarea, a, .noSwipe"};e.fn.swipe=function(D){var C=e(this),B=C.data(y);if(B&&typeof D==="string"){if(B[D]){return B[D].apply(this,Array.prototype.slice.call(arguments,1))}else{e.error("Method "+D+" does not exist on jQuery.swipe")}}else{if(!B&&(typeof D==="object"||!D)){return u.apply(this,arguments)}}return C};e.fn.swipe.defaults=m;e.fn.swipe.phases={PHASE_START:f,PHASE_MOVE:j,PHASE_END:g,PHASE_CANCEL:p};e.fn.swipe.directions={LEFT:o,RIGHT:n,UP:d,DOWN:v,IN:c,OUT:w};e.fn.swipe.pageScroll={NONE:l,HORIZONTAL:A,VERTICAL:t,AUTO:r};e.fn.swipe.fingers={ONE:1,TWO:2,THREE:3,ALL:h};function u(B){if(B&&(B.allowPageScroll===undefined&&(B.swipe!==undefined||B.swipeStatus!==undefined))){B.allowPageScroll=l}if(B.click!==undefined&&B.tap===undefined){B.tap=B.click}if(!B){B={}}B=e.extend({},e.fn.swipe.defaults,B);return this.each(function(){var D=e(this);var C=D.data(y);if(!C){C=new z(this,B);D.data(y,C)}})}function z(a0,aq){var av=(a||!aq.fallbackToMouseEvents),G=av?"touchstart":"mousedown",au=av?"touchmove":"mousemove",R=av?"touchend":"mouseup",P=av?null:"mouseleave",az="touchcancel";var ac=0,aL=null,Y=0,aX=0,aV=0,D=1,am=0,aF=0,J=null;var aN=e(a0);var W="start";var T=0;var aM=null;var Q=0,aY=0,a1=0,aa=0,K=0;var aS=null;try{aN.bind(G,aJ);aN.bind(az,a5)}catch(ag){e.error("events not supported "+G+","+az+" on jQuery.swipe")}this.enable=function(){aN.bind(G,aJ);aN.bind(az,a5);return aN};this.disable=function(){aG();return aN};this.destroy=function(){aG();aN.data(y,null);return aN};this.option=function(a8,a7){if(aq[a8]!==undefined){if(a7===undefined){return aq[a8]}else{aq[a8]=a7}}else{e.error("Option "+a8+" does not exist on jQuery.swipe.options")}return null};function aJ(a9){if(ax()){return}if(e(a9.target).closest(aq.excludedElements,aN).length>0){return}var ba=a9.originalEvent?a9.originalEvent:a9;var a8,a7=a?ba.touches[0]:ba;W=f;if(a){T=ba.touches.length}else{a9.preventDefault()}ac=0;aL=null;aF=null;Y=0;aX=0;aV=0;D=1;am=0;aM=af();J=X();O();if(!a||(T===aq.fingers||aq.fingers===h)||aT()){ae(0,a7);Q=ao();if(T==2){ae(1,ba.touches[1]);aX=aV=ap(aM[0].start,aM[1].start)}if(aq.swipeStatus||aq.pinchStatus){a8=L(ba,W)}}else{a8=false}if(a8===false){W=p;L(ba,W);return a8}else{ak(true)}return null}function aZ(ba){var bd=ba.originalEvent?ba.originalEvent:ba;if(W===g||W===p||ai()){return}var a9,a8=a?bd.touches[0]:bd;var bb=aD(a8);aY=ao();if(a){T=bd.touches.length}W=j;if(T==2){if(aX==0){ae(1,bd.touches[1]);aX=aV=ap(aM[0].start,aM[1].start)}else{aD(bd.touches[1]);aV=ap(aM[0].end,aM[1].end);aF=an(aM[0].end,aM[1].end)}D=a3(aX,aV);am=Math.abs(aX-aV)}if((T===aq.fingers||aq.fingers===h)||!a||aT()){aL=aH(bb.start,bb.end);ah(ba,aL);ac=aO(bb.start,bb.end);Y=aI();aE(aL,ac);if(aq.swipeStatus||aq.pinchStatus){a9=L(bd,W)}if(!aq.triggerOnTouchEnd||aq.triggerOnTouchLeave){var a7=true;if(aq.triggerOnTouchLeave){var bc=aU(this);a7=B(bb.end,bc)}if(!aq.triggerOnTouchEnd&&a7){W=ay(j)}else{if(aq.triggerOnTouchLeave&&!a7){W=ay(g)}}if(W==p||W==g){L(bd,W)}}}else{W=p;L(bd,W)}if(a9===false){W=p;L(bd,W)}}function I(a7){var a8=a7.originalEvent;if(a){if(a8.touches.length>0){C();return true}}if(ai()){T=aa}a7.preventDefault();aY=ao();Y=aI();if(a6()){W=p;L(a8,W)}else{if(aq.triggerOnTouchEnd||(aq.triggerOnTouchEnd==false&&W===j)){W=g;L(a8,W)}else{if(!aq.triggerOnTouchEnd&&a2()){W=g;aB(a8,W,x)}else{if(W===j){W=p;L(a8,W)}}}}ak(false);return null}function a5(){T=0;aY=0;Q=0;aX=0;aV=0;D=1;O();ak(false)}function H(a7){var a8=a7.originalEvent;if(aq.triggerOnTouchLeave){W=ay(g);L(a8,W)}}function aG(){aN.unbind(G,aJ);aN.unbind(az,a5);aN.unbind(au,aZ);aN.unbind(R,I);if(P){aN.unbind(P,H)}ak(false)}function ay(bb){var ba=bb;var a9=aw();var a8=aj();var a7=a6();if(!a9||a7){ba=p}else{if(a8&&bb==j&&(!aq.triggerOnTouchEnd||aq.triggerOnTouchLeave)){ba=g}else{if(!a8&&bb==g&&aq.triggerOnTouchLeave){ba=p}}}return ba}function L(a9,a7){var a8=undefined;if(F()||S()){a8=aB(a9,a7,k)}else{if((M()||aT())&&a8!==false){a8=aB(a9,a7,s)}}if(aC()&&a8!==false){a8=aB(a9,a7,i)}else{if(al()&&a8!==false){a8=aB(a9,a7,b)}else{if(ad()&&a8!==false){a8=aB(a9,a7,x)}}}if(a7===p){a5(a9)}if(a7===g){if(a){if(a9.touches.length==0){a5(a9)}}else{a5(a9)}}return a8}function aB(ba,a7,a9){var a8=undefined;if(a9==k){aN.trigger("swipeStatus",[a7,aL||null,ac||0,Y||0,T]);if(aq.swipeStatus){a8=aq.swipeStatus.call(aN,ba,a7,aL||null,ac||0,Y||0,T);if(a8===false){return false}}if(a7==g&&aR()){aN.trigger("swipe",[aL,ac,Y,T]);if(aq.swipe){a8=aq.swipe.call(aN,ba,aL,ac,Y,T);if(a8===false){return false}}switch(aL){case o:aN.trigger("swipeLeft",[aL,ac,Y,T]);if(aq.swipeLeft){a8=aq.swipeLeft.call(aN,ba,aL,ac,Y,T)}break;case n:aN.trigger("swipeRight",[aL,ac,Y,T]);if(aq.swipeRight){a8=aq.swipeRight.call(aN,ba,aL,ac,Y,T)}break;case d:aN.trigger("swipeUp",[aL,ac,Y,T]);if(aq.swipeUp){a8=aq.swipeUp.call(aN,ba,aL,ac,Y,T)}break;case v:aN.trigger("swipeDown",[aL,ac,Y,T]);if(aq.swipeDown){a8=aq.swipeDown.call(aN,ba,aL,ac,Y,T)}break}}}if(a9==s){aN.trigger("pinchStatus",[a7,aF||null,am||0,Y||0,T,D]);if(aq.pinchStatus){a8=aq.pinchStatus.call(aN,ba,a7,aF||null,am||0,Y||0,T,D);if(a8===false){return false}}if(a7==g&&a4()){switch(aF){case c:aN.trigger("pinchIn",[aF||null,am||0,Y||0,T,D]);if(aq.pinchIn){a8=aq.pinchIn.call(aN,ba,aF||null,am||0,Y||0,T,D)}break;case w:aN.trigger("pinchOut",[aF||null,am||0,Y||0,T,D]);if(aq.pinchOut){a8=aq.pinchOut.call(aN,ba,aF||null,am||0,Y||0,T,D)}break}}}if(a9==x){if(a7===p||a7===g){clearTimeout(aS);if(V()&&!E()){K=ao();aS=setTimeout(e.proxy(function(){K=null;aN.trigger("tap",[ba.target]);if(aq.tap){a8=aq.tap.call(aN,ba,ba.target)}},this),aq.doubleTapThreshold)}else{K=null;aN.trigger("tap",[ba.target]);if(aq.tap){a8=aq.tap.call(aN,ba,ba.target)}}}}else{if(a9==i){if(a7===p||a7===g){clearTimeout(aS);K=null;aN.trigger("doubletap",[ba.target]);if(aq.doubleTap){a8=aq.doubleTap.call(aN,ba,ba.target)}}}else{if(a9==b){if(a7===p||a7===g){clearTimeout(aS);K=null;aN.trigger("longtap",[ba.target]);if(aq.longTap){a8=aq.longTap.call(aN,ba,ba.target)}}}}}return a8}function aj(){var a7=true;if(aq.threshold!==null){a7=ac>=aq.threshold}return a7}function a6(){var a7=false;if(aq.cancelThreshold!==null&&aL!==null){a7=(aP(aL)-ac)>=aq.cancelThreshold}return a7}function ab(){if(aq.pinchThreshold!==null){return am>=aq.pinchThreshold}return true}function aw(){var a7;if(aq.maxTimeThreshold){if(Y>=aq.maxTimeThreshold){a7=false}else{a7=true}}else{a7=true}return a7}function ah(a7,a8){if(aq.allowPageScroll===l||aT()){a7.preventDefault()}else{var a9=aq.allowPageScroll===r;switch(a8){case o:if((aq.swipeLeft&&a9)||(!a9&&aq.allowPageScroll!=A)){a7.preventDefault()}break;case n:if((aq.swipeRight&&a9)||(!a9&&aq.allowPageScroll!=A)){a7.preventDefault()}break;case d:if((aq.swipeUp&&a9)||(!a9&&aq.allowPageScroll!=t)){a7.preventDefault()}break;case v:if((aq.swipeDown&&a9)||(!a9&&aq.allowPageScroll!=t)){a7.preventDefault()}break}}}function a4(){var a8=aK();var a7=U();var a9=ab();return a8&&a7&&a9}function aT(){return !!(aq.pinchStatus||aq.pinchIn||aq.pinchOut)}function M(){return !!(a4()&&aT())}function aR(){var ba=aw();var bc=aj();var a9=aK();var a7=U();var a8=a6();var bb=!a8&&a7&&a9&&bc&&ba;return bb}function S(){return !!(aq.swipe||aq.swipeStatus||aq.swipeLeft||aq.swipeRight||aq.swipeUp||aq.swipeDown)}function F(){return !!(aR()&&S())}function aK(){return((T===aq.fingers||aq.fingers===h)||!a)}function U(){return aM[0].end.x!==0}function a2(){return !!(aq.tap)}function V(){return !!(aq.doubleTap)}function aQ(){return !!(aq.longTap)}function N(){if(K==null){return false}var a7=ao();return(V()&&((a7-K)<=aq.doubleTapThreshold))}function E(){return N()}function at(){return((T===1||!a)&&(isNaN(ac)||ac===0))}function aW(){return((Y>aq.longTapThreshold)&&(ac<q))}function ad(){return !!(at()&&a2())}function aC(){return !!(N()&&V())}function al(){return !!(aW()&&aQ())}function C(){a1=ao();aa=event.touches.length+1}function O(){a1=0;aa=0}function ai(){var a7=false;if(a1){var a8=ao()-a1;if(a8<=aq.fingerReleaseThreshold){a7=true}}return a7}function ax(){return !!(aN.data(y+"_intouch")===true)}function ak(a7){if(a7===true){aN.bind(au,aZ);aN.bind(R,I);if(P){aN.bind(P,H)}}else{aN.unbind(au,aZ,false);aN.unbind(R,I,false);if(P){aN.unbind(P,H,false)}}aN.data(y+"_intouch",a7===true)}function ae(a8,a7){var a9=a7.identifier!==undefined?a7.identifier:0;aM[a8].identifier=a9;aM[a8].start.x=aM[a8].end.x=a7.pageX||a7.clientX;aM[a8].start.y=aM[a8].end.y=a7.pageY||a7.clientY;return aM[a8]}function aD(a7){var a9=a7.identifier!==undefined?a7.identifier:0;var a8=Z(a9);a8.end.x=a7.pageX||a7.clientX;a8.end.y=a7.pageY||a7.clientY;return a8}function Z(a8){for(var a7=0;a7<aM.length;a7++){if(aM[a7].identifier==a8){return aM[a7]}}}function af(){var a7=[];for(var a8=0;a8<=5;a8++){a7.push({start:{x:0,y:0},end:{x:0,y:0},identifier:0})}return a7}function aE(a7,a8){a8=Math.max(a8,aP(a7));J[a7].distance=a8}function aP(a7){if(J[a7]){return J[a7].distance}return undefined}function X(){var a7={};a7[o]=ar(o);a7[n]=ar(n);a7[d]=ar(d);a7[v]=ar(v);return a7}function ar(a7){return{direction:a7,distance:0}}function aI(){return aY-Q}function ap(ba,a9){var a8=Math.abs(ba.x-a9.x);var a7=Math.abs(ba.y-a9.y);return Math.round(Math.sqrt(a8*a8+a7*a7))}function a3(a7,a8){var a9=(a8/a7)*1;return a9.toFixed(2)}function an(){if(D<1){return w}else{return c}}function aO(a8,a7){return Math.round(Math.sqrt(Math.pow(a7.x-a8.x,2)+Math.pow(a7.y-a8.y,2)))}function aA(ba,a8){var a7=ba.x-a8.x;var bc=a8.y-ba.y;var a9=Math.atan2(bc,a7);var bb=Math.round(a9*180/Math.PI);if(bb<0){bb=360-Math.abs(bb)}return bb}function aH(a8,a7){var a9=aA(a8,a7);if((a9<=45)&&(a9>=0)){return o}else{if((a9<=360)&&(a9>=315)){return o}else{if((a9>=135)&&(a9<=225)){return n}else{if((a9>45)&&(a9<135)){return v}else{return d}}}}}function ao(){var a7=new Date();return a7.getTime()}function aU(a7){a7=e(a7);var a9=a7.offset();var a8={left:a9.left,right:a9.left+a7.outerWidth(),top:a9.top,bottom:a9.top+a7.outerHeight()};return a8}function B(a7,a8){return(a7.x>a8.left&&a7.x<a8.right&&a7.y>a8.top&&a7.y<a8.bottom)}}}));

/*
    --------------------------------
    Infinite Scroll
    --------------------------------
    + https://github.com/paulirish/infinitescroll
    + version 2.0b2.110713
    + Copyright 2011 Paul Irish & Luke Shumard
    + Licensed under the MIT license
    
    + Documentation: http://infinite-scroll.com/
    
*/
(function (window, $, undefined) {
    $.infinitescroll = function infscr(options, callback, element) {
        this.element = $(element);
        this._create(options, callback);
    };
    $.infinitescroll.defaults = {
        loading: {
            finished: undefined,
            finishedMsg: "<span><em>"+langNoMore+"</em></span>",
            img: '',
            msg: null,
            msgText: "<em>"+langLoadMore+"</em>",
            selector: null,
            speed: 'fast',
            start: undefined
        },
        state: {
            isDuringAjax: false,
            isInvalidPage: false,
            isDestroyed: false,
            isDone: false,
            isPaused: false,
            currPage: 1
        },
        callback: undefined,
        debug: false,
        behavior: undefined,
        binder: $(window),
        nextSelector: "div.navigation a:first",
        navSelector: "div.navigation",
        contentSelector: null,
        extraScrollPx: 150,
        itemSelector: "div.post",
        animate: false,
        pathParse: undefined,
        dataType: 'html',
        appendCallback: true,
        bufferPx: 40,
        errorCallback: function () {},
        infid: 0,
        pixelsFromNavToBottom: undefined,
        path: undefined
    };
    $.infinitescroll.prototype = {
        _binding: function infscr_binding(binding) {
            var instance = this,
                opts = instance.options;
            if ( !! opts.behavior && this['_binding_' + opts.behavior] !== undefined) {
                this['_binding_' + opts.behavior].call(this);
                return;
            }
            if (binding !== 'bind' && binding !== 'unbind') {
                this._debug('Binding value  ' + binding + ' not valid')
                return false;
            }
            if (binding == 'unbind') {
                (this.options.binder).unbind('smartscroll.infscr.' + instance.options.infid);
            } else {
                (this.options.binder)[binding]('smartscroll.infscr.' + instance.options.infid, function () {
                    instance.scroll();
                });
            };
            this._debug('Binding', binding);
        },
        _create: function infscr_create(options, callback) {
            if (!this._validate(options)) {
                return false;
            }
            var opts = this.options = $.extend(true, {}, $.infinitescroll.defaults, options),
                relurl = /(.*?\/\/).*?(\/.*)/,
                path = $(opts.nextSelector).attr('href');
            opts.contentSelector = opts.contentSelector || this.element;
            opts.loading.selector = opts.loading.selector || opts.contentSelector;
            if (!path) {
                this._debug('Navigation selector not found');
                return;
            }
            opts.path = this._determinepath(path);
             opts.loading.msg = $('<div id="infscr-loading"><div class="LoadMore"><span>' + opts.loading.msgText + '<small>&nbsp;</small></span><a href="#">&nbsp;</a></div></div>');
            (new Image()).src = opts.loading.img;
            opts.pixelsFromNavToBottom = $(document).height() - $(opts.navSelector).offset().top;
            opts.loading.start = opts.loading.start || function () {
                $(opts.navSelector).hide();
                opts.loading.msg.appendTo(opts.loading.selector).show(opts.loading.speed, function () {
                    beginAjax(opts);
                });
            };
            opts.loading.finished = opts.loading.finished || function () {
                opts.loading.msg.fadeOut('normal');
            };
            opts.callback = function (instance, data) {
                if ( !! opts.behavior && instance['_callback_' + opts.behavior] !== undefined) {
                    instance['_callback_' + opts.behavior].call($(opts.contentSelector)[0], data);
                }
                if (callback) {
                    callback.call($(opts.contentSelector)[0], data);
                }
            };
            this._setup();
        },
        _debug: function infscr_debug() {
            if (this.options.debug) {
                return window.console && console.log.call(console, arguments);
            }
        },
        _determinepath: function infscr_determinepath(path) {
            var opts = this.options;
            if ( !! opts.behavior && this['_determinepath_' + opts.behavior] !== undefined) {
                this['_determinepath_' + opts.behavior].call(this, path);
                return;
            }
            if ( !! opts.pathParse) {
                this._debug('pathParse manual');
                return opts.pathParse;
            } else if (path.match(/^(.*?)\b2\b(.*?$)/)) {
                path = path.match(/^(.*?)\b2\b(.*?$)/).slice(1);
            } else if (path.match(/^(.*?)2(.*?$)/)) {
                if (path.match(/^(.*?page=)2(\/.*|$)/)) {
                    path = path.match(/^(.*?page=)2(\/.*|$)/).slice(1);
                    return path;
                }
                path = path.match(/^(.*?)2(.*?$)/).slice(1);
            } else {
                if (path.match(/^(.*?page=)1(\/.*|$)/)) {
                    path = path.match(/^(.*?page=)1(\/.*|$)/).slice(1);
                    return path;
                } else {
                    this._debug('Sorry, we couldn\'t parse your Next (Previous Posts) URL. Verify your the css selector points to the correct A tag. If you still get this error: yell, scream, and kindly ask for help at infinite-scroll.com.');
                    opts.state.isInvalidPage = true;
                }
            }
            this._debug('determinePath', path);
            return path;
        },
        _error: function infscr_error(xhr) {
            var opts = this.options;
            if ( !! opts.behavior && this['_error_' + opts.behavior] !== undefined) {
                this['_error_' + opts.behavior].call(this, xhr);
                return;
            }
            if (xhr !== 'destroy' && xhr !== 'end') {
                xhr = 'unknown';
            }
            this._debug('Error', xhr);
            if (xhr == 'end') {
                this._showdonemsg();
            }
            opts.state.isDone = true;
            opts.state.currPage = 1;
            opts.state.isPaused = false;
            this._binding('unbind');
        },
        _loadcallback: function infscr_loadcallback(box, data) {
            var opts = this.options,
                callback = this.options.callback,
                result = (opts.state.isDone) ? 'done' : (!opts.appendCallback) ? 'no-append' : 'append',
                frag;
            if ( !! opts.behavior && this['_loadcallback_' + opts.behavior] !== undefined) {
                this['_loadcallback_' + opts.behavior].call(this, box, data);
                return;
            }
            switch (result) {
            case 'done':
                this._showdonemsg();
                return false;
                break;
            case 'no-append':
                if (opts.dataType == 'html') {
                    data = '<div>' + data + '</div>';
                    data = $(data).find(opts.itemSelector);
                };
                break;
            case 'append':
                var children = box.children();
                if (children.length == 0) {
                    return this._error('end');
                }
                frag = document.createDocumentFragment();
                while (box[0].firstChild) {
                    frag.appendChild(box[0].firstChild);
                }
                this._debug('contentSelector', $(opts.contentSelector)[0])
                $(opts.contentSelector)[0].appendChild(frag);
                data = children.get();
                break;
            }
            opts.loading.finished.call($(opts.contentSelector)[0], opts)
            if (opts.animate) {
                var scrollTo = $(window).scrollTop() + $('#infscr-loading').height() + opts.extraScrollPx + 'px';
                $('html,body').animate({
                    scrollTop: scrollTo
                }, 800, function () {
                    opts.state.isDuringAjax = false;
                });
            }
            if (!opts.animate) opts.state.isDuringAjax = false;
            callback(this, data);
        },
        _nearbottom: function infscr_nearbottom() {
            var opts = this.options,
                pixelsFromWindowBottomToBottom = 0 + $(document).height() - (opts.binder.scrollTop()) - $(window).height();
            if ( !! opts.behavior && this['_nearbottom_' + opts.behavior] !== undefined) {
                this['_nearbottom_' + opts.behavior].call(this);
                return;
            }
            this._debug('math:', pixelsFromWindowBottomToBottom, opts.pixelsFromNavToBottom);
            return (pixelsFromWindowBottomToBottom - opts.bufferPx < opts.pixelsFromNavToBottom);
        },
        _pausing: function infscr_pausing(pause) {
            var opts = this.options;
            if ( !! opts.behavior && this['_pausing_' + opts.behavior] !== undefined) {
                this['_pausing_' + opts.behavior].call(this, pause);
                return;
            }
            if (pause !== 'pause' && pause !== 'resume' && pause !== null) {
                this._debug('Invalid argument. Toggling pause value instead');
            };
            pause = (pause && (pause == 'pause' || pause == 'resume')) ? pause : 'toggle';
            switch (pause) {
            case 'pause':
                opts.state.isPaused = true;
                break;
            case 'resume':
                opts.state.isPaused = false;
                break;
            case 'toggle':
                opts.state.isPaused = !opts.state.isPaused;
                break;
            }
            this._debug('Paused', opts.state.isPaused);
            return false;
        },
        _setup: function infscr_setup() {
            var opts = this.options;
            if ( !! opts.behavior && this['_setup_' + opts.behavior] !== undefined) {
                this['_setup_' + opts.behavior].call(this);
                return;
            }
            this._binding('bind');
            return false;
        },
        _showdonemsg: function infscr_showdonemsg() {
            var opts = this.options;
            if ( !! opts.behavior && this['_showdonemsg_' + opts.behavior] !== undefined) {
                this['_showdonemsg_' + opts.behavior].call(this);
                return;
            }
            opts.loading.msg.find('div').html(opts.loading.finishedMsg).animate({
                opacity: 1
            }, 2000, function () {
                $(this).parent().fadeOut('normal');
            });
            opts.errorCallback.call($(opts.contentSelector)[0], 'done');
        },
        _validate: function infscr_validate(opts) {
            for (var key in opts) {
                if (key.indexOf && key.indexOf('Selector') > -1 && $(opts[key]).length === 0) {
                    this._debug('Your ' + key + ' found no elements.');
                    return false;
                }
                return true;
            }
        },
        bind: function infscr_bind() {
            this._binding('bind');
        },
        destroy: function infscr_destroy() {
            this.options.state.isDestroyed = true;
            return this._error('destroy');
        },
        pause: function infscr_pause() {
            this._pausing('pause');
        },
        resume: function infscr_resume() {
            this._pausing('resume');
        },
        retrieve: function infscr_retrieve(pageNum) {
            var instance = this,
                opts = instance.options,
                path = opts.path,
                box, frag, desturl, method, condition, pageNum = pageNum || null,
                getPage = ( !! pageNum) ? pageNum : opts.state.currPage;
            beginAjax = function infscr_ajax(opts) {
                opts.state.currPage++;
                instance._debug('heading into ajax', path);
                box = $(opts.contentSelector).is('table') ? $('<tbody/>') : $('<div/>');
                desturl = path.join(opts.state.currPage);
                method = (opts.dataType == 'html' || opts.dataType == 'json') ? opts.dataType : 'html+callback';
                if (opts.appendCallback && opts.dataType == 'html') method += '+callback'
                switch (method) {
                case 'html+callback':
                    instance._debug('Using HTML via .load() method');
                    box.load(desturl + ' ' + opts.itemSelector, null, function infscr_ajax_callback(responseText) {
                        instance._loadcallback(box, responseText);
                    });
                    break;
                case 'html':
                case 'json':
                    instance._debug('Using ' + (method.toUpperCase()) + ' via $.ajax() method');
                    $.ajax({
                        url: desturl,
                        dataType: opts.dataType,
                        complete: function infscr_ajax_callback(jqXHR, textStatus) {
                            condition = (typeof (jqXHR.isResolved) !== 'undefined') ? (jqXHR.isResolved()) : (textStatus === "success" || textStatus === "notmodified");
                            (condition) ? instance._loadcallback(box, jqXHR.responseText) : instance._error('end');
                        }
                    });
                    break;
                }
            };
            if ( !! opts.behavior && this['retrieve_' + opts.behavior] !== undefined) {
                this['retrieve_' + opts.behavior].call(this, pageNum);
                return;
            }
            if (opts.state.isDestroyed) {
                this._debug('Instance is destroyed');
                return false;
            };
            opts.state.isDuringAjax = true;
            opts.loading.start.call($(opts.contentSelector)[0], opts);
        },
        scroll: function infscr_scroll() {
            var opts = this.options,
                state = opts.state;
            if ( !! opts.behavior && this['scroll_' + opts.behavior] !== undefined) {
                this['scroll_' + opts.behavior].call(this);
                return;
            }
            if (state.isDuringAjax || state.isInvalidPage || state.isDone || state.isDestroyed || state.isPaused) return;
            if (!this._nearbottom()) return;
            this.retrieve();
        },
        toggle: function infscr_toggle() {
            this._pausing();
        },
        unbind: function infscr_unbind() {
            this._binding('unbind');
        },
        update: function infscr_options(key) {
            if ($.isPlainObject(key)) {
                this.options = $.extend(true, this.options, key);
            }
        }
    }
    $.fn.infinitescroll = function infscr_init(options, callback) {
        var thisCall = typeof options;
        switch (thisCall) {
        case 'string':
            var args = Array.prototype.slice.call(arguments, 1);
            this.each(function () {
                var instance = $.data(this, 'infinitescroll');
                if (!instance) {
                    return false;
                }
                if (!$.isFunction(instance[options]) || options.charAt(0) === "_") {
                    return false;
                }
                instance[options].apply(instance, args);
            });
            break;
        case 'object':
            this.each(function () {

                var instance = $.data(this, 'infinitescroll');
                if (instance) {
                    instance.update(options);
                } else {
                    $.data(this, 'infinitescroll', new $.infinitescroll(options, callback, this));
                }
            });
            break;
        }
        return this;
    };
    var event = $.event,
        scrollTimeout;
    event.special.smartscroll = {
        setup: function () {
            $(this).bind("scroll", event.special.smartscroll.handler);
        },
        teardown: function () {
            $(this).unbind("scroll", event.special.smartscroll.handler);
        },
        handler: function (event, execAsap) {
            var context = this,
                args = arguments;
            event.type = "smartscroll";
            if (scrollTimeout) {
                clearTimeout(scrollTimeout);
            }
            scrollTimeout = setTimeout(function () {
                $.event.handle.apply(context, args);
            }, execAsap === "execAsap" ? 0 : 100);
        }
    };
    $.fn.smartscroll = function (fn) {
        return fn ? this.bind("smartscroll", fn) : this.trigger("smartscroll", ["execAsap"]);
    };
})(window, jQuery);

/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
    def: 'easeOutQuad',
    swing: function (x, t, b, c, d) {
        //alert(jQuery.easing.default);
        return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
    },
    easeInQuad: function (x, t, b, c, d) {
        return c*(t/=d)*t + b;
    },
    easeOutQuad: function (x, t, b, c, d) {
        return -c *(t/=d)*(t-2) + b;
    },
    easeInOutQuad: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t + b;
        return -c/2 * ((--t)*(t-2) - 1) + b;
    },
    easeInCubic: function (x, t, b, c, d) {
        return c*(t/=d)*t*t + b;
    },
    easeOutCubic: function (x, t, b, c, d) {
        return c*((t=t/d-1)*t*t + 1) + b;
    },
    easeInOutCubic: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t*t + b;
        return c/2*((t-=2)*t*t + 2) + b;
    },
    easeInQuart: function (x, t, b, c, d) {
        return c*(t/=d)*t*t*t + b;
    },
    easeOutQuart: function (x, t, b, c, d) {
        return -c * ((t=t/d-1)*t*t*t - 1) + b;
    },
    easeInOutQuart: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
        return -c/2 * ((t-=2)*t*t*t - 2) + b;
    },
    easeInQuint: function (x, t, b, c, d) {
        return c*(t/=d)*t*t*t*t + b;
    },
    easeOutQuint: function (x, t, b, c, d) {
        return c*((t=t/d-1)*t*t*t*t + 1) + b;
    },
    easeInOutQuint: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
        return c/2*((t-=2)*t*t*t*t + 2) + b;
    },
    easeInSine: function (x, t, b, c, d) {
        return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
    },
    easeOutSine: function (x, t, b, c, d) {
        return c * Math.sin(t/d * (Math.PI/2)) + b;
    },
    easeInOutSine: function (x, t, b, c, d) {
        return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
    },
    easeInExpo: function (x, t, b, c, d) {
        return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
    },
    easeOutExpo: function (x, t, b, c, d) {
        return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
    },
    easeInOutExpo: function (x, t, b, c, d) {
        if (t==0) return b;
        if (t==d) return b+c;
        if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
        return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
    },
    easeInCirc: function (x, t, b, c, d) {
        return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
    },
    easeOutCirc: function (x, t, b, c, d) {
        return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
    },
    easeInOutCirc: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
        return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
    },
    easeInElastic: function (x, t, b, c, d) {
        var s=1.70158;var p=0;var a=c;
        if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
        if (a < Math.abs(c)) { a=c; var s=p/4; }
        else var s = p/(2*Math.PI) * Math.asin (c/a);
        return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
    },
    easeOutElastic: function (x, t, b, c, d) {
        var s=1.70158;var p=0;var a=c;
        if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
        if (a < Math.abs(c)) { a=c; var s=p/4; }
        else var s = p/(2*Math.PI) * Math.asin (c/a);
        return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
    },
    easeInOutElastic: function (x, t, b, c, d) {
        var s=1.70158;var p=0;var a=c;
        if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
        if (a < Math.abs(c)) { a=c; var s=p/4; }
        else var s = p/(2*Math.PI) * Math.asin (c/a);
        if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
        return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
    },
    easeInBack: function (x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c*(t/=d)*t*((s+1)*t - s) + b;
    },
    easeOutBack: function (x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
    },
    easeInOutBack: function (x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158; 
        if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
        return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
    },
    easeInBounce: function (x, t, b, c, d) {
        return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
    },
    easeOutBounce: function (x, t, b, c, d) {
        if ((t/=d) < (1/2.75)) {
            return c*(7.5625*t*t) + b;
        } else if (t < (2/2.75)) {
            return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
        } else if (t < (2.5/2.75)) {
            return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
        } else {
            return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
        }
    },
    easeInOutBounce: function (x, t, b, c, d) {
        if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
        return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
    }
});

/**
 * Isotope v1.5.25
 * An exquisite jQuery plugin for magical layouts
 * http://isotope.metafizzy.co
 *
 * Commercial use requires one-time license fee
 * http://metafizzy.co/#licenses
 *
 * Copyright 2012 David DeSandro / Metafizzy
 */
(function(a,b,c){"use strict";var d=a.document,e=a.Modernizr,f=function(a){return a.charAt(0).toUpperCase()+a.slice(1)},g="Moz Webkit O Ms".split(" "),h=function(a){var b=d.documentElement.style,c;if(typeof b[a]=="string")return a;a=f(a);for(var e=0,h=g.length;e<h;e++){c=g[e]+a;if(typeof b[c]=="string")return c}},i=h("transform"),j=h("transitionProperty"),k={csstransforms:function(){return!!i},csstransforms3d:function(){var a=!!h("perspective");if(a){var c=" -o- -moz- -ms- -webkit- -khtml- ".split(" "),d="@media ("+c.join("transform-3d),(")+"modernizr)",e=b("<style>"+d+"{#modernizr{height:3px}}"+"</style>").appendTo("head"),f=b('<div id="modernizr" />').appendTo("html");a=f.height()===3,f.remove(),e.remove()}return a},csstransitions:function(){return!!j}},l;if(e)for(l in k)e.hasOwnProperty(l)||e.addTest(l,k[l]);else{e=a.Modernizr={_version:"1.6ish: miniModernizr for Isotope"};var m=" ",n;for(l in k)n=k[l](),e[l]=n,m+=" "+(n?"":"no-")+l;b("html").addClass(m)}if(e.csstransforms){var o=e.csstransforms3d?{translate:function(a){return"translate3d("+a[0]+"px, "+a[1]+"px, 0) "},scale:function(a){return"scale3d("+a+", "+a+", 1) "}}:{translate:function(a){return"translate("+a[0]+"px, "+a[1]+"px) "},scale:function(a){return"scale("+a+") "}},p=function(a,c,d){var e=b.data(a,"isoTransform")||{},f={},g,h={},j;f[c]=d,b.extend(e,f);for(g in e)j=e[g],h[g]=o[g](j);var k=h.translate||"",l=h.scale||"",m=k+l;b.data(a,"isoTransform",e),a.style[i]=m};b.cssNumber.scale=!0,b.cssHooks.scale={set:function(a,b){p(a,"scale",b)},get:function(a,c){var d=b.data(a,"isoTransform");return d&&d.scale?d.scale:1}},b.fx.step.scale=function(a){b.cssHooks.scale.set(a.elem,a.now+a.unit)},b.cssNumber.translate=!0,b.cssHooks.translate={set:function(a,b){p(a,"translate",b)},get:function(a,c){var d=b.data(a,"isoTransform");return d&&d.translate?d.translate:[0,0]}}}var q,r;e.csstransitions&&(q={WebkitTransitionProperty:"webkitTransitionEnd",MozTransitionProperty:"transitionend",OTransitionProperty:"oTransitionEnd otransitionend",transitionProperty:"transitionend"}[j],r=h("transitionDuration"));var s=b.event,t=b.event.handle?"handle":"dispatch",u;s.special.smartresize={setup:function(){b(this).bind("resize",s.special.smartresize.handler)},teardown:function(){b(this).unbind("resize",s.special.smartresize.handler)},handler:function(a,b){var c=this,d=arguments;a.type="smartresize",u&&clearTimeout(u),u=setTimeout(function(){s[t].apply(c,d)},b==="execAsap"?0:100)}},b.fn.smartresize=function(a){return a?this.bind("smartresize",a):this.trigger("smartresize",["execAsap"])},b.Isotope=function(a,c,d){this.element=b(c),this._create(a),this._init(d)};var v=["width","height"],w=b(a);b.Isotope.settings={resizable:!0,layoutMode:"masonry",containerClass:"isotope",itemClass:"isotope-item",hiddenClass:"isotope-hidden",hiddenStyle:{opacity:0,scale:.001},visibleStyle:{opacity:1,scale:1},containerStyle:{position:"relative",overflow:"hidden"},animationEngine:"best-available",animationOptions:{queue:!1,duration:800},sortBy:"original-order",sortAscending:!0,resizesContainer:!0,transformsEnabled:!0,itemPositionDataEnabled:!1},b.Isotope.prototype={_create:function(a){this.options=b.extend({},b.Isotope.settings,a),this.styleQueue=[],this.elemCount=0;var c=this.element[0].style;this.originalStyle={};var d=v.slice(0);for(var e in this.options.containerStyle)d.push(e);for(var f=0,g=d.length;f<g;f++)e=d[f],this.originalStyle[e]=c[e]||"";this.element.css(this.options.containerStyle),this._updateAnimationEngine(),this._updateUsingTransforms();var h={"original-order":function(a,b){return b.elemCount++,b.elemCount},random:function(){return Math.random()}};this.options.getSortData=b.extend(this.options.getSortData,h),this.reloadItems(),this.offset={left:parseInt(this.element.css("padding-left")||0,10),top:parseInt(this.element.css("padding-top")||0,10)};var i=this;setTimeout(function(){i.element.addClass(i.options.containerClass)},0),this.options.resizable&&w.bind("smartresize.isotope",function(){i.resize()}),this.element.delegate("."+this.options.hiddenClass,"click",function(){return!1})},_getAtoms:function(a){var b=this.options.itemSelector,c=b?a.filter(b).add(a.find(b)):a,d={position:"absolute"};return c=c.filter(function(a,b){return b.nodeType===1}),this.usingTransforms&&(d.left=0,d.top=0),c.css(d).addClass(this.options.itemClass),this.updateSortData(c,!0),c},_init:function(a){this.$filteredAtoms=this._filter(this.$allAtoms),this._sort(),this.reLayout(a)},option:function(a){if(b.isPlainObject(a)){this.options=b.extend(!0,this.options,a);var c;for(var d in a)c="_update"+f(d),this[c]&&this[c]()}},_updateAnimationEngine:function(){var a=this.options.animationEngine.toLowerCase().replace(/[ _\-]/g,""),b;switch(a){case"css":case"none":b=!1;break;case"jquery":b=!0;break;default:b=!e.csstransitions}this.isUsingJQueryAnimation=b,this._updateUsingTransforms()},_updateTransformsEnabled:function(){this._updateUsingTransforms()},_updateUsingTransforms:function(){var a=this.usingTransforms=this.options.transformsEnabled&&e.csstransforms&&e.csstransitions&&!this.isUsingJQueryAnimation;a||(delete this.options.hiddenStyle.scale,delete this.options.visibleStyle.scale),this.getPositionStyles=a?this._translate:this._positionAbs},_filter:function(a){var b=this.options.filter===""?"*":this.options.filter;if(!b)return a;var c=this.options.hiddenClass,d="."+c,e=a.filter(d),f=e;if(b!=="*"){f=e.filter(b);var g=a.not(d).not(b).addClass(c);this.styleQueue.push({$el:g,style:this.options.hiddenStyle})}return this.styleQueue.push({$el:f,style:this.options.visibleStyle}),f.removeClass(c),a.filter(b)},updateSortData:function(a,c){var d=this,e=this.options.getSortData,f,g;a.each(function(){f=b(this),g={};for(var a in e)!c&&a==="original-order"?g[a]=b.data(this,"isotope-sort-data")[a]:g[a]=e[a](f,d);b.data(this,"isotope-sort-data",g)})},_sort:function(){var a=this.options.sortBy,b=this._getSorter,c=this.options.sortAscending?1:-1,d=function(d,e){var f=b(d,a),g=b(e,a);return f===g&&a!=="original-order"&&(f=b(d,"original-order"),g=b(e,"original-order")),(f>g?1:f<g?-1:0)*c};this.$filteredAtoms.sort(d)},_getSorter:function(a,c){return b.data(a,"isotope-sort-data")[c]},_translate:function(a,b){return{translate:[a,b]}},_positionAbs:function(a,b){return{left:a,top:b}},_pushPosition:function(a,b,c){b=Math.round(b+this.offset.left),c=Math.round(c+this.offset.top);var d=this.getPositionStyles(b,c);this.styleQueue.push({$el:a,style:d}),this.options.itemPositionDataEnabled&&a.data("isotope-item-position",{x:b,y:c})},layout:function(a,b){var c=this.options.layoutMode;this["_"+c+"Layout"](a);if(this.options.resizesContainer){var d=this["_"+c+"GetContainerSize"]();this.styleQueue.push({$el:this.element,style:d})}this._processStyleQueue(a,b),this.isLaidOut=!0},_processStyleQueue:function(a,c){var d=this.isLaidOut?this.isUsingJQueryAnimation?"animate":"css":"css",f=this.options.animationOptions,g=this.options.onLayout,h,i,j,k;i=function(a,b){b.$el[d](b.style,f)};if(this._isInserting&&this.isUsingJQueryAnimation)i=function(a,b){h=b.$el.hasClass("no-transition")?"css":d,b.$el[h](b.style,f)};else if(c||g||f.complete){var l=!1,m=[c,g,f.complete],n=this;j=!0,k=function(){if(l)return;var b;for(var c=0,d=m.length;c<d;c++)b=m[c],typeof b=="function"&&b.call(n.element,a,n);l=!0};if(this.isUsingJQueryAnimation&&d==="animate")f.complete=k,j=!1;else if(e.csstransitions){var o=0,p=this.styleQueue[0],s=p&&p.$el,t;while(!s||!s.length){t=this.styleQueue[o++];if(!t)return;s=t.$el}var u=parseFloat(getComputedStyle(s[0])[r]);u>0&&(i=function(a,b){b.$el[d](b.style,f).one(q,k)},j=!1)}}b.each(this.styleQueue,i),j&&k(),this.styleQueue=[]},resize:function(){this["_"+this.options.layoutMode+"ResizeChanged"]()&&this.reLayout()},reLayout:function(a){this["_"+this.options.layoutMode+"Reset"](),this.layout(this.$filteredAtoms,a)},addItems:function(a,b){var c=this._getAtoms(a);this.$allAtoms=this.$allAtoms.add(c),b&&b(c)},insert:function(a,b){this.element.append(a);var c=this;this.addItems(a,function(a){var d=c._filter(a);c._addHideAppended(d),c._sort(),c.reLayout(),c._revealAppended(d,b)})},appended:function(a,b){var c=this;this.addItems(a,function(a){c._addHideAppended(a),c.layout(a),c._revealAppended(a,b)})},_addHideAppended:function(a){this.$filteredAtoms=this.$filteredAtoms.add(a),a.addClass("no-transition"),this._isInserting=!0,this.styleQueue.push({$el:a,style:this.options.hiddenStyle})},_revealAppended:function(a,b){var c=this;setTimeout(function(){a.removeClass("no-transition"),c.styleQueue.push({$el:a,style:c.options.visibleStyle}),c._isInserting=!1,c._processStyleQueue(a,b)},10)},reloadItems:function(){this.$allAtoms=this._getAtoms(this.element.children())},remove:function(a,b){this.$allAtoms=this.$allAtoms.not(a),this.$filteredAtoms=this.$filteredAtoms.not(a);var c=this,d=function(){a.remove(),b&&b.call(c.element)};a.filter(":not(."+this.options.hiddenClass+")").length?(this.styleQueue.push({$el:a,style:this.options.hiddenStyle}),this._sort(),this.reLayout(d)):d()},shuffle:function(a){this.updateSortData(this.$allAtoms),this.options.sortBy="random",this._sort(),this.reLayout(a)},destroy:function(){var a=this.usingTransforms,b=this.options;this.$allAtoms.removeClass(b.hiddenClass+" "+b.itemClass).each(function(){var b=this.style;b.position="",b.top="",b.left="",b.opacity="",a&&(b[i]="")});var c=this.element[0].style;for(var d in this.originalStyle)c[d]=this.originalStyle[d];this.element.unbind(".isotope").undelegate("."+b.hiddenClass,"click").removeClass(b.containerClass).removeData("isotope"),w.unbind(".isotope")},_getSegments:function(a){var b=this.options.layoutMode,c=a?"rowHeight":"columnWidth",d=a?"height":"width",e=a?"rows":"cols",g=this.element[d](),h,i=this.options[b]&&this.options[b][c]||this.$filteredAtoms["outer"+f(d)](!0)||g;h=Math.floor(g/i),h=Math.max(h,1),this[b][e]=h,this[b][c]=i},_checkIfSegmentsChanged:function(a){var b=this.options.layoutMode,c=a?"rows":"cols",d=this[b][c];return this._getSegments(a),this[b][c]!==d},_masonryReset:function(){this.masonry={},this._getSegments();var a=this.masonry.cols;this.masonry.colYs=[];while(a--)this.masonry.colYs.push(0)},_masonryLayout:function(a){var c=this,d=c.masonry;a.each(function(){var a=b(this),e=Math.ceil(a.outerWidth(!0)/d.columnWidth);e=Math.min(e,d.cols);if(e===1)c._masonryPlaceBrick(a,d.colYs);else{var f=d.cols+1-e,g=[],h,i;for(i=0;i<f;i++)h=d.colYs.slice(i,i+e),g[i]=Math.max.apply(Math,h);c._masonryPlaceBrick(a,g)}})},_masonryPlaceBrick:function(a,b){var c=Math.min.apply(Math,b),d=0;for(var e=0,f=b.length;e<f;e++)if(b[e]===c){d=e;break}var g=this.masonry.columnWidth*d,h=c;this._pushPosition(a,g,h);var i=c+a.outerHeight(!0),j=this.masonry.cols+1-f;for(e=0;e<j;e++)this.masonry.colYs[d+e]=i},_masonryGetContainerSize:function(){var a=Math.max.apply(Math,this.masonry.colYs);return{height:a}},_masonryResizeChanged:function(){return this._checkIfSegmentsChanged()},_fitRowsReset:function(){this.fitRows={x:0,y:0,height:0}},_fitRowsLayout:function(a){var c=this,d=this.element.width(),e=this.fitRows;a.each(function(){var a=b(this),f=a.outerWidth(!0),g=a.outerHeight(!0);e.x!==0&&f+e.x>d&&(e.x=0,e.y=e.height),c._pushPosition(a,e.x,e.y),e.height=Math.max(e.y+g,e.height),e.x+=f})},_fitRowsGetContainerSize:function(){return{height:this.fitRows.height}},_fitRowsResizeChanged:function(){return!0},_cellsByRowReset:function(){this.cellsByRow={index:0},this._getSegments(),this._getSegments(!0)},_cellsByRowLayout:function(a){var c=this,d=this.cellsByRow;a.each(function(){var a=b(this),e=d.index%d.cols,f=Math.floor(d.index/d.cols),g=(e+.5)*d.columnWidth-a.outerWidth(!0)/2,h=(f+.5)*d.rowHeight-a.outerHeight(!0)/2;c._pushPosition(a,g,h),d.index++})},_cellsByRowGetContainerSize:function(){return{height:Math.ceil(this.$filteredAtoms.length/this.cellsByRow.cols)*this.cellsByRow.rowHeight+this.offset.top}},_cellsByRowResizeChanged:function(){return this._checkIfSegmentsChanged()},_straightDownReset:function(){this.straightDown={y:0}},_straightDownLayout:function(a){var c=this;a.each(function(a){var d=b(this);c._pushPosition(d,0,c.straightDown.y),c.straightDown.y+=d.outerHeight(!0)})},_straightDownGetContainerSize:function(){return{height:this.straightDown.y}},_straightDownResizeChanged:function(){return!0},_masonryHorizontalReset:function(){this.masonryHorizontal={},this._getSegments(!0);var a=this.masonryHorizontal.rows;this.masonryHorizontal.rowXs=[];while(a--)this.masonryHorizontal.rowXs.push(0)},_masonryHorizontalLayout:function(a){var c=this,d=c.masonryHorizontal;a.each(function(){var a=b(this),e=Math.ceil(a.outerHeight(!0)/d.rowHeight);e=Math.min(e,d.rows);if(e===1)c._masonryHorizontalPlaceBrick(a,d.rowXs);else{var f=d.rows+1-e,g=[],h,i;for(i=0;i<f;i++)h=d.rowXs.slice(i,i+e),g[i]=Math.max.apply(Math,h);c._masonryHorizontalPlaceBrick(a,g)}})},_masonryHorizontalPlaceBrick:function(a,b){var c=Math.min.apply(Math,b),d=0;for(var e=0,f=b.length;e<f;e++)if(b[e]===c){d=e;break}var g=c,h=this.masonryHorizontal.rowHeight*d;this._pushPosition(a,g,h);var i=c+a.outerWidth(!0),j=this.masonryHorizontal.rows+1-f;for(e=0;e<j;e++)this.masonryHorizontal.rowXs[d+e]=i},_masonryHorizontalGetContainerSize:function(){var a=Math.max.apply(Math,this.masonryHorizontal.rowXs);return{width:a}},_masonryHorizontalResizeChanged:function(){return this._checkIfSegmentsChanged(!0)},_fitColumnsReset:function(){this.fitColumns={x:0,y:0,width:0}},_fitColumnsLayout:function(a){var c=this,d=this.element.height(),e=this.fitColumns;a.each(function(){var a=b(this),f=a.outerWidth(!0),g=a.outerHeight(!0);e.y!==0&&g+e.y>d&&(e.x=e.width,e.y=0),c._pushPosition(a,e.x,e.y),e.width=Math.max(e.x+f,e.width),e.y+=g})},_fitColumnsGetContainerSize:function(){return{width:this.fitColumns.width}},_fitColumnsResizeChanged:function(){return!0},_cellsByColumnReset:function(){this.cellsByColumn={index:0},this._getSegments(),this._getSegments(!0)},_cellsByColumnLayout:function(a){var c=this,d=this.cellsByColumn;a.each(function(){var a=b(this),e=Math.floor(d.index/d.rows),f=d.index%d.rows,g=(e+.5)*d.columnWidth-a.outerWidth(!0)/2,h=(f+.5)*d.rowHeight-a.outerHeight(!0)/2;c._pushPosition(a,g,h),d.index++})},_cellsByColumnGetContainerSize:function(){return{width:Math.ceil(this.$filteredAtoms.length/this.cellsByColumn.rows)*this.cellsByColumn.columnWidth}},_cellsByColumnResizeChanged:function(){return this._checkIfSegmentsChanged(!0)},_straightAcrossReset:function(){this.straightAcross={x:0}},_straightAcrossLayout:function(a){var c=this;a.each(function(a){var d=b(this);c._pushPosition(d,c.straightAcross.x,0),c.straightAcross.x+=d.outerWidth(!0)})},_straightAcrossGetContainerSize:function(){return{width:this.straightAcross.x}},_straightAcrossResizeChanged:function(){return!0}},b.fn.imagesLoaded=function(a){function h(){a.call(c,d)}function i(a){var c=a.target;c.src!==f&&b.inArray(c,g)===-1&&(g.push(c),--e<=0&&(setTimeout(h),d.unbind(".imagesLoaded",i)))}var c=this,d=c.find("img").add(c.filter("img")),e=d.length,f="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",g=[];return e||h(),d.bind("load.imagesLoaded error.imagesLoaded",i).each(function(){var a=this.src;this.src=f,this.src=a}),c};var x=function(b){a.console&&a.console.error(b)};b.fn.isotope=function(a,c){if(typeof a=="string"){var d=Array.prototype.slice.call(arguments,1);this.each(function(){var c=b.data(this,"isotope");if(!c){x("cannot call methods on isotope prior to initialization; attempted to call method '"+a+"'");return}if(!b.isFunction(c[a])||a.charAt(0)==="_"){x("no such method '"+a+"' for isotope instance");return}c[a].apply(c,d)})}else this.each(function(){var d=b.data(this,"isotope");d?(d.option(a),d._init(c)):b.data(this,"isotope",new b.Isotope(a,this,c))});return this}})(window,jQuery);

 // ----------------------------------------------------------------------------
 // Vegas – Fullscreen Backgrounds and Slideshows with jQuery.
 // v1.3.3 - released 2013-09-03 13:27
 // Licensed under the MIT license.
 // http://vegas.jaysalvat.com/
 // ----------------------------------------------------------------------------
 // Copyright (C) 2010-2013 Jay Salvat
 // http://jaysalvat.com/
 // ----------------------------------------------------------------------------

(function(e){function t(a,n){var r={align:"center",valign:"center"};if(e.extend(r,n),0===a.height())return a.load(function(){t(e(this),n)}),void 0;var i,s,g,d=o(),l=d.width,u=d.height,v=a.width(),c=a.height(),p=u/l,f=c/v;p>f?(i=u/f,s=u):(i=l,s=l*f),g={width:i+"px",height:s+"px",top:"auto",bottom:"auto",left:"auto",right:"auto"},isNaN(parseInt(r.valign,10))?"top"==r.valign?g.top=0:"bottom"==r.valign?g.bottom=0:g.top=(u-s)/2:g.top=0-(s-u)/100*parseInt(r.valign,10)+"px",isNaN(parseInt(r.align,10))?"left"==r.align?g.left=0:"right"==r.align?g.right=0:g.left=(l-i)/2:g.left=0-(i-l)/100*parseInt(r.align,10)+"px",a.css(g)}function a(){d.prependTo("body").fadeIn()}function n(){d.fadeOut("fast",function(){e(this).remove()})}function r(){return e("body").css("backgroundImage")?e("body").css("backgroundImage").replace(/url\("?(.*?)"?\)/i,"$1"):void 0}function o(){var e=window,t="inner";return"innerWidth"in window||(e=document.documentElement||document.body,t="client"),{width:e[t+"Width"],height:e[t+"Height"]}}var i,s=e("<img />").addClass("vegas-background"),g=e("<div />").addClass("vegas-overlay"),d=e("<div />").addClass("vegas-loading"),l=e(),u=null,v=[],c=0,p=5e3,f=function(){},h={init:function(o){var i={src:r(),align:"center",valign:"center",fade:0,loading:!0,load:function(){},complete:function(){}};e.extend(i,e.vegas.defaults.background,o),i.loading&&a();var g=s.clone();return g.css({position:"fixed",left:"0px",top:"0px"}).bind("load",function(){g!=l&&(e(window).bind("load resize.vegas",function(){t(g,i)}),l.is("img")?(l.stop(),g.hide().insertAfter(l).fadeIn(i.fade,function(){e(".vegas-background").not(this).remove(),e("body").trigger("vegascomplete",[this,c-1]),i.complete.apply(g,[c-1])})):g.hide().prependTo("body").fadeIn(i.fade,function(){e("body").trigger("vegascomplete",[this,c-1]),i.complete.apply(this,[c-1])}),l=g,t(l,i),i.loading&&n(),e("body").trigger("vegasload",[l.get(0),c-1]),i.load.apply(l.get(0),[c-1]),c&&(e("body").trigger("vegaswalk",[l.get(0),c-1]),i.walk.apply(l.get(0),[c-1])))}).attr("src",i.src),e.vegas},destroy:function(t){return t&&"background"!=t||(e(".vegas-background, .vegas-loading").remove(),e(window).unbind("*.vegas"),l=e()),t&&"overlay"!=t||e(".vegas-overlay").remove(),clearInterval(i),e.vegas},overlay:function(t){var a={src:null,opacity:null};return e.extend(a,e.vegas.defaults.overlay,t),g.remove(),g.css({margin:"0",padding:"0",position:"fixed",left:"0px",top:"0px",width:"100%",height:"100%"}),a.src&&g.css("backgroundImage","url("+a.src+")"),a.opacity&&g.css("opacity",a.opacity),g.prependTo("body"),e.vegas},slideshow:function(t,a){var n={step:c,delay:p,preload:!1,backgrounds:v,walk:f};if(e.extend(n,e.vegas.defaults.slideshow,t),n.backgrounds!=v&&(t.step||(n.step=0),t.walk||(n.walk=function(){}),n.preload&&e.vegas("preload",n.backgrounds)),v=n.backgrounds,p=n.delay,c=n.step,f=n.walk,clearInterval(i),!v.length)return e.vegas;var r=function(){0>c&&(c=v.length-1),(c>=v.length||!v[c-1])&&(c=0);var t=v[c++];t.walk=n.walk,t.fade===void 0&&(t.fade=n.fade),t.fade>n.delay&&(t.fade=n.delay),e.vegas(t)};return r(),a||(u=!1,e("body").trigger("vegasstart",[l.get(0),c-1])),u||(i=setInterval(r,n.delay)),e.vegas},next:function(){var t=c;return c&&(e.vegas("slideshow",{step:c},!0),e("body").trigger("vegasnext",[l.get(0),c-1,t-1])),e.vegas},previous:function(){var t=c;return c&&(e.vegas("slideshow",{step:c-2},!0),e("body").trigger("vegasprevious",[l.get(0),c-1,t-1])),e.vegas},jump:function(t){var a=c;return c&&(e.vegas("slideshow",{step:t},!0),e("body").trigger("vegasjump",[l.get(0),c-1,a-1])),e.vegas},stop:function(){var t=c;return c=0,u=null,clearInterval(i),e("body").trigger("vegasstop",[l.get(0),t-1]),e.vegas},pause:function(){return u=!0,clearInterval(i),e("body").trigger("vegaspause",[l.get(0),c-1]),e.vegas},get:function(e){return null===e||"background"==e?l.get(0):"overlay"==e?g.get(0):"step"==e?c-1:"paused"==e?u:void 0},preload:function(t){var a=[];for(var n in t)if(t[n].src){var r=document.createElement("img");r.src=t[n].src,a.push(r)}return e.vegas}};e.vegas=function(t){return h[t]?h[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?(e.error("Method "+t+" does not exist"),void 0):h.init.apply(this,arguments)},e.vegas.defaults={background:{},slideshow:{},overlay:{}}})(jQuery);

/*
    --------------------------------
    Blur
    --------------------------------
    + https://raw.github.com/jakiestfu/Blur.js-II/master/blur.js
    + Licensed under the MIT license
    + Documentation: https://github.com/jakiestfu/Blur.js-II
    
*/

(function($) {
    $.fn.extend({
        blurjs: function(options) {
            
            this.defaultOptions = {
                customClass: 'blurjs',
                radius: 5,
                persist: false
            };

            function removeBlurs(_obj){
                for(var i in window.blurJSClasses){
                    if(_obj.hasClass(window.blurJSClasses[i])){
                        _obj.removeClass(window.blurJSClasses[i]);
                    }
                }
            }

            function singleSetting(obj, target){
                switch(target){
                    case 'remove':
                        removeBlurs(obj);
                }
            }
            
            function svg(amt) {
                if($('#blurjs-'+amt).length!=0){
                    $('#blurjs-'+amt).remove();
                }
                $('body').append('<svg id="blurjs-'+amt+'"><filter id="blur'+amt+'px"><feGaussianBlur in="SourceGraphic" stdDeviation="'+amt+'"></feGaussianBlur></filter></svg>');
            }

            function css(cssClass, amt) {
                svg(amt);
                return '<style type="text/css">.' + cssClass + '{-ms-filter:blur(' + amt + 'px);-webkit-filter:blur(' + amt + 'px);-moz-filter:blur(' + amt + 'px);-o-filter:blur(' + amt + 'px);filter: url("#blur'+(amt)+'px");filter:progid:DXImageTransform.Microsoft.Blur(pixelradius='+amt+');}.' + cssClass + ' img{filter:progid:DXImageTransform.Microsoft.Blur(pixelradius='+amt+');}</style>';
            }

            if(typeof options=='string'){
                singleSetting($(this), options);
                return;
            }
            
            var settings = $.extend({}, this.defaultOptions, options);
            
            if(typeof window.blurJSClasses=='undefined'){
                window.blurJSClasses=[];
            }
            
            return this.each(function() {
                var $this = $(this),
                    blurredClass = settings.customClass + '-' + settings.radius + '-radius';
                
                window.blurJSClasses.push(blurredClass);
                
                if (!settings.persist && $('head style:contains(' + settings.customClass + ')').length !== 0) {
                    $('head style:contains(' + settings.customClass + ')').remove();
                }
                if ($('head style:contains('+blurredClass+')').length === 0) {
                    var cssData = css(blurredClass, settings.radius);
                    $(cssData).appendTo('head');
                }
                $this.addClass(blurredClass);
            });
        }
    });
    $.extend({
        blurjs: function(action){
            if(action=='reset'){
                for(var i in window.blurJSClasses){
                    $('.'+window.blurJSClasses[i]).removeClass(window.blurJSClasses[i]);
                }
            }
        }
    });
})(jQuery);

/*
 * jQuery FlexSlider v2.2.0
 * Copyright 2012 WooThemes
 * Contributing Author: Tyler Smith
 */(function(e){e.flexslider=function(t,n){var r=e(t);r.vars=e.extend({},e.flexslider.defaults,n);var i=r.vars.namespace,s=window.navigator&&window.navigator.msPointerEnabled&&window.MSGesture,o=("ontouchstart"in window||s||window.DocumentTouch&&document instanceof DocumentTouch)&&r.vars.touch,u="click touchend MSPointerUp",a="",f,l=r.vars.direction==="vertical",c=r.vars.reverse,h=r.vars.itemWidth>0,p=r.vars.animation==="fade",d=r.vars.asNavFor!=="",v={},m=!0;e.data(t,"flexslider",r);v={init:function(){r.animating=!1;r.currentSlide=parseInt(r.vars.startAt?r.vars.startAt:0);isNaN(r.currentSlide)&&(r.currentSlide=0);r.animatingTo=r.currentSlide;r.atEnd=r.currentSlide===0||r.currentSlide===r.last;r.containerSelector=r.vars.selector.substr(0,r.vars.selector.search(" "));r.slides=e(r.vars.selector,r);r.container=e(r.containerSelector,r);r.count=r.slides.length;r.syncExists=e(r.vars.sync).length>0;r.vars.animation==="slide"&&(r.vars.animation="swing");r.prop=l?"top":"marginLeft";r.args={};r.manualPause=!1;r.stopped=!1;r.started=!1;r.startTimeout=null;r.transitions=!r.vars.video&&!p&&r.vars.useCSS&&function(){var e=document.createElement("div"),t=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var n in t)if(e.style[t[n]]!==undefined){r.pfx=t[n].replace("Perspective","").toLowerCase();r.prop="-"+r.pfx+"-transform";return!0}return!1}();r.vars.controlsContainer!==""&&(r.controlsContainer=e(r.vars.controlsContainer).length>0&&e(r.vars.controlsContainer));r.vars.manualControls!==""&&(r.manualControls=e(r.vars.manualControls).length>0&&e(r.vars.manualControls));if(r.vars.randomize){r.slides.sort(function(){return Math.round(Math.random())-.5});r.container.empty().append(r.slides)}r.doMath();r.setup("init");r.vars.controlNav&&v.controlNav.setup();r.vars.directionNav&&v.directionNav.setup();r.vars.keyboard&&(e(r.containerSelector).length===1||r.vars.multipleKeyboard)&&e(document).bind("keyup",function(e){var t=e.keyCode;if(!r.animating&&(t===39||t===37)){var n=t===39?r.getTarget("next"):t===37?r.getTarget("prev"):!1;r.flexAnimate(n,r.vars.pauseOnAction)}});r.vars.mousewheel&&r.bind("mousewheel",function(e,t,n,i){e.preventDefault();var s=t<0?r.getTarget("next"):r.getTarget("prev");r.flexAnimate(s,r.vars.pauseOnAction)});r.vars.pausePlay&&v.pausePlay.setup();r.vars.slideshow&&r.vars.pauseInvisible&&v.pauseInvisible.init();if(r.vars.slideshow){r.vars.pauseOnHover&&r.hover(function(){!r.manualPlay&&!r.manualPause&&r.pause()},function(){!r.manualPause&&!r.manualPlay&&!r.stopped&&r.play()});if(!r.vars.pauseInvisible||!v.pauseInvisible.isHidden())r.vars.initDelay>0?r.startTimeout=setTimeout(r.play,r.vars.initDelay):r.play()}d&&v.asNav.setup();o&&r.vars.touch&&v.touch();(!p||p&&r.vars.smoothHeight)&&e(window).bind("resize orientationchange focus",v.resize);r.find("img").attr("draggable","false");setTimeout(function(){r.vars.start(r)},200)},asNav:{setup:function(){r.asNav=!0;r.animatingTo=Math.floor(r.currentSlide/r.move);r.currentItem=r.currentSlide;r.slides.removeClass(i+"active-slide").eq(r.currentItem).addClass(i+"active-slide");if(!s)r.slides.click(function(t){t.preventDefault();var n=e(this),s=n.index(),o=n.offset().left-e(r).scrollLeft();if(o<=0&&n.hasClass(i+"active-slide"))r.flexAnimate(r.getTarget("prev"),!0);else if(!e(r.vars.asNavFor).data("flexslider").animating&&!n.hasClass(i+"active-slide")){r.direction=r.currentItem<s?"next":"prev";r.flexAnimate(s,r.vars.pauseOnAction,!1,!0,!0)}});else{t._slider=r;r.slides.each(function(){var t=this;t._gesture=new MSGesture;t._gesture.target=t;t.addEventListener("MSPointerDown",function(e){e.preventDefault();e.currentTarget._gesture&&e.currentTarget._gesture.addPointer(e.pointerId)},!1);t.addEventListener("MSGestureTap",function(t){t.preventDefault();var n=e(this),i=n.index();if(!e(r.vars.asNavFor).data("flexslider").animating&&!n.hasClass("active")){r.direction=r.currentItem<i?"next":"prev";r.flexAnimate(i,r.vars.pauseOnAction,!1,!0,!0)}})})}}},controlNav:{setup:function(){r.manualControls?v.controlNav.setupManual():v.controlNav.setupPaging()},setupPaging:function(){var t=r.vars.controlNav==="thumbnails"?"control-thumbs":"control-paging",n=1,s,o;r.controlNavScaffold=e('<ol class="'+i+"control-nav "+i+t+'"></ol>');if(r.pagingCount>1)for(var f=0;f<r.pagingCount;f++){o=r.slides.eq(f);s=r.vars.controlNav==="thumbnails"?'<img src="'+o.attr("data-thumb")+'"/>':"<a>"+n+"</a>";if("thumbnails"===r.vars.controlNav&&!0===r.vars.thumbCaptions){var l=o.attr("data-thumbcaption");""!=l&&undefined!=l&&(s+='<span class="'+i+'caption">'+l+"</span>")}r.controlNavScaffold.append("<li>"+s+"</li>");n++}r.controlsContainer?e(r.controlsContainer).append(r.controlNavScaffold):r.append(r.controlNavScaffold);v.controlNav.set();v.controlNav.active();r.controlNavScaffold.delegate("a, img",u,function(t){t.preventDefault();if(a===""||a===t.type){var n=e(this),s=r.controlNav.index(n);if(!n.hasClass(i+"active")){r.direction=s>r.currentSlide?"next":"prev";r.flexAnimate(s,r.vars.pauseOnAction)}}a===""&&(a=t.type);v.setToClearWatchedEvent()})},setupManual:function(){r.controlNav=r.manualControls;v.controlNav.active();r.controlNav.bind(u,function(t){t.preventDefault();if(a===""||a===t.type){var n=e(this),s=r.controlNav.index(n);if(!n.hasClass(i+"active")){s>r.currentSlide?r.direction="next":r.direction="prev";r.flexAnimate(s,r.vars.pauseOnAction)}}a===""&&(a=t.type);v.setToClearWatchedEvent()})},set:function(){var t=r.vars.controlNav==="thumbnails"?"img":"a";r.controlNav=e("."+i+"control-nav li "+t,r.controlsContainer?r.controlsContainer:r)},active:function(){r.controlNav.removeClass(i+"active").eq(r.animatingTo).addClass(i+"active")},update:function(t,n){r.pagingCount>1&&t==="add"?r.controlNavScaffold.append(e("<li><a>"+r.count+"</a></li>")):r.pagingCount===1?r.controlNavScaffold.find("li").remove():r.controlNav.eq(n).closest("li").remove();v.controlNav.set();r.pagingCount>1&&r.pagingCount!==r.controlNav.length?r.update(n,t):v.controlNav.active()}},directionNav:{setup:function(){var t=e('<ul class="'+i+'direction-nav"><li><a class="'+i+'prev" href="#">'+r.vars.prevText+'</a></li><li><a class="'+i+'next" href="#">'+r.vars.nextText+"</a></li></ul>");if(r.controlsContainer){e(r.controlsContainer).append(t);r.directionNav=e("."+i+"direction-nav li a",r.controlsContainer)}else{r.append(t);r.directionNav=e("."+i+"direction-nav li a",r)}v.directionNav.update();r.directionNav.bind(u,function(t){t.preventDefault();var n;if(a===""||a===t.type){n=e(this).hasClass(i+"next")?r.getTarget("next"):r.getTarget("prev");r.flexAnimate(n,r.vars.pauseOnAction)}a===""&&(a=t.type);v.setToClearWatchedEvent()})},update:function(){var e=i+"disabled";r.pagingCount===1?r.directionNav.addClass(e).attr("tabindex","-1"):r.vars.animationLoop?r.directionNav.removeClass(e).removeAttr("tabindex"):r.animatingTo===0?r.directionNav.removeClass(e).filter("."+i+"prev").addClass(e).attr("tabindex","-1"):r.animatingTo===r.last?r.directionNav.removeClass(e).filter("."+i+"next").addClass(e).attr("tabindex","-1"):r.directionNav.removeClass(e).removeAttr("tabindex")}},pausePlay:{setup:function(){var t=e('<div class="'+i+'pauseplay"><a></a></div>');if(r.controlsContainer){r.controlsContainer.append(t);r.pausePlay=e("."+i+"pauseplay a",r.controlsContainer)}else{r.append(t);r.pausePlay=e("."+i+"pauseplay a",r)}v.pausePlay.update(r.vars.slideshow?i+"pause":i+"play");r.pausePlay.bind(u,function(t){t.preventDefault();if(a===""||a===t.type)if(e(this).hasClass(i+"pause")){r.manualPause=!0;r.manualPlay=!1;r.pause()}else{r.manualPause=!1;r.manualPlay=!0;r.play()}a===""&&(a=t.type);v.setToClearWatchedEvent()})},update:function(e){e==="play"?r.pausePlay.removeClass(i+"pause").addClass(i+"play").html(r.vars.playText):r.pausePlay.removeClass(i+"play").addClass(i+"pause").html(r.vars.pauseText)}},touch:function(){var e,n,i,o,u,a,f=!1,d=0,v=0,m=0;if(!s){t.addEventListener("touchstart",g,!1);function g(s){if(r.animating)s.preventDefault();else if(window.navigator.msPointerEnabled||s.touches.length===1){r.pause();o=l?r.h:r.w;a=Number(new Date);d=s.touches[0].pageX;v=s.touches[0].pageY;i=h&&c&&r.animatingTo===r.last?0:h&&c?r.limit-(r.itemW+r.vars.itemMargin)*r.move*r.animatingTo:h&&r.currentSlide===r.last?r.limit:h?(r.itemW+r.vars.itemMargin)*r.move*r.currentSlide:c?(r.last-r.currentSlide+r.cloneOffset)*o:(r.currentSlide+r.cloneOffset)*o;e=l?v:d;n=l?d:v;t.addEventListener("touchmove",y,!1);t.addEventListener("touchend",b,!1)}}function y(t){d=t.touches[0].pageX;v=t.touches[0].pageY;u=l?e-v:e-d;f=l?Math.abs(u)<Math.abs(d-n):Math.abs(u)<Math.abs(v-n);var s=500;if(!f||Number(new Date)-a>s){t.preventDefault();if(!p&&r.transitions){r.vars.animationLoop||(u/=r.currentSlide===0&&u<0||r.currentSlide===r.last&&u>0?Math.abs(u)/o+2:1);r.setProps(i+u,"setTouch")}}}function b(s){t.removeEventListener("touchmove",y,!1);if(r.animatingTo===r.currentSlide&&!f&&u!==null){var l=c?-u:u,h=l>0?r.getTarget("next"):r.getTarget("prev");r.canAdvance(h)&&(Number(new Date)-a<550&&Math.abs(l)>50||Math.abs(l)>o/2)?r.flexAnimate(h,r.vars.pauseOnAction):p||r.flexAnimate(r.currentSlide,r.vars.pauseOnAction,!0)}t.removeEventListener("touchend",b,!1);e=null;n=null;u=null;i=null}}else{t.style.msTouchAction="none";t._gesture=new MSGesture;t._gesture.target=t;t.addEventListener("MSPointerDown",w,!1);t._slider=r;t.addEventListener("MSGestureChange",E,!1);t.addEventListener("MSGestureEnd",S,!1);function w(e){e.stopPropagation();if(r.animating)e.preventDefault();else{r.pause();t._gesture.addPointer(e.pointerId);m=0;o=l?r.h:r.w;a=Number(new Date);i=h&&c&&r.animatingTo===r.last?0:h&&c?r.limit-(r.itemW+r.vars.itemMargin)*r.move*r.animatingTo:h&&r.currentSlide===r.last?r.limit:h?(r.itemW+r.vars.itemMargin)*r.move*r.currentSlide:c?(r.last-r.currentSlide+r.cloneOffset)*o:(r.currentSlide+r.cloneOffset)*o}}function E(e){e.stopPropagation();var n=e.target._slider;if(!n)return;var r=-e.translationX,s=-e.translationY;m+=l?s:r;u=m;f=l?Math.abs(m)<Math.abs(-r):Math.abs(m)<Math.abs(-s);if(e.detail===e.MSGESTURE_FLAG_INERTIA){setImmediate(function(){t._gesture.stop()});return}if(!f||Number(new Date)-a>500){e.preventDefault();if(!p&&n.transitions){n.vars.animationLoop||(u=m/(n.currentSlide===0&&m<0||n.currentSlide===n.last&&m>0?Math.abs(m)/o+2:1));n.setProps(i+u,"setTouch")}}}function S(t){t.stopPropagation();var r=t.target._slider;if(!r)return;if(r.animatingTo===r.currentSlide&&!f&&u!==null){var s=c?-u:u,l=s>0?r.getTarget("next"):r.getTarget("prev");r.canAdvance(l)&&(Number(new Date)-a<550&&Math.abs(s)>50||Math.abs(s)>o/2)?r.flexAnimate(l,r.vars.pauseOnAction):p||r.flexAnimate(r.currentSlide,r.vars.pauseOnAction,!0)}e=null;n=null;u=null;i=null;m=0}}},resize:function(){if(!r.animating&&r.is(":visible")){h||r.doMath();if(p)v.smoothHeight();else if(h){r.slides.width(r.computedW);r.update(r.pagingCount);r.setProps()}else if(l){r.viewport.height(r.h);r.setProps(r.h,"setTotal")}else{r.vars.smoothHeight&&v.smoothHeight();r.newSlides.width(r.computedW);r.setProps(r.computedW,"setTotal")}}},smoothHeight:function(e){if(!l||p){var t=p?r:r.viewport;e?t.animate({height:r.slides.eq(r.animatingTo).height()},e):t.height(r.slides.eq(r.animatingTo).height())}},sync:function(t){var n=e(r.vars.sync).data("flexslider"),i=r.animatingTo;switch(t){case"animate":n.flexAnimate(i,r.vars.pauseOnAction,!1,!0);break;case"play":!n.playing&&!n.asNav&&n.play();break;case"pause":n.pause()}},pauseInvisible:{visProp:null,init:function(){var e=["webkit","moz","ms","o"];if("hidden"in document)return"hidden";for(var t=0;t<e.length;t++)e[t]+"Hidden"in document&&(v.pauseInvisible.visProp=e[t]+"Hidden");if(v.pauseInvisible.visProp){var n=v.pauseInvisible.visProp.replace(/[H|h]idden/,"")+"visibilitychange";document.addEventListener(n,function(){v.pauseInvisible.isHidden()?r.startTimeout?clearTimeout(r.startTimeout):r.pause():r.started?r.play():r.vars.initDelay>0?setTimeout(r.play,r.vars.initDelay):r.play()})}},isHidden:function(){return document[v.pauseInvisible.visProp]||!1}},setToClearWatchedEvent:function(){clearTimeout(f);f=setTimeout(function(){a=""},3e3)}};r.flexAnimate=function(t,n,s,u,a){!r.vars.animationLoop&&t!==r.currentSlide&&(r.direction=t>r.currentSlide?"next":"prev");d&&r.pagingCount===1&&(r.direction=r.currentItem<t?"next":"prev");if(!r.animating&&(r.canAdvance(t,a)||s)&&r.is(":visible")){if(d&&u){var f=e(r.vars.asNavFor).data("flexslider");r.atEnd=t===0||t===r.count-1;f.flexAnimate(t,!0,!1,!0,a);r.direction=r.currentItem<t?"next":"prev";f.direction=r.direction;if(Math.ceil((t+1)/r.visible)-1===r.currentSlide||t===0){r.currentItem=t;r.slides.removeClass(i+"active-slide").eq(t).addClass(i+"active-slide");return!1}r.currentItem=t;r.slides.removeClass(i+"active-slide").eq(t).addClass(i+"active-slide");t=Math.floor(t/r.visible)}r.animating=!0;r.animatingTo=t;n&&r.pause();r.vars.before(r);r.syncExists&&!a&&v.sync("animate");r.vars.controlNav&&v.controlNav.active();h||r.slides.removeClass(i+"active-slide").eq(t).addClass(i+"active-slide");r.atEnd=t===0||t===r.last;r.vars.directionNav&&v.directionNav.update();if(t===r.last){r.vars.end(r);r.vars.animationLoop||r.pause()}if(!p){var m=l?r.slides.filter(":first").height():r.computedW,g,y,b;if(h){g=r.vars.itemMargin;b=(r.itemW+g)*r.move*r.animatingTo;y=b>r.limit&&r.visible!==1?r.limit:b}else r.currentSlide===0&&t===r.count-1&&r.vars.animationLoop&&r.direction!=="next"?y=c?(r.count+r.cloneOffset)*m:0:r.currentSlide===r.last&&t===0&&r.vars.animationLoop&&r.direction!=="prev"?y=c?0:(r.count+1)*m:y=c?(r.count-1-t+r.cloneOffset)*m:(t+r.cloneOffset)*m;r.setProps(y,"",r.vars.animationSpeed);if(r.transitions){if(!r.vars.animationLoop||!r.atEnd){r.animating=!1;r.currentSlide=r.animatingTo}r.container.unbind("webkitTransitionEnd transitionend");r.container.bind("webkitTransitionEnd transitionend",function(){r.wrapup(m)})}else r.container.animate(r.args,r.vars.animationSpeed,r.vars.easing,function(){r.wrapup(m)})}else if(!o){r.slides.eq(r.currentSlide).css({zIndex:1}).animate({opacity:0},r.vars.animationSpeed,r.vars.easing);r.slides.eq(t).css({zIndex:2}).animate({opacity:1},r.vars.animationSpeed,r.vars.easing,r.wrapup)}else{r.slides.eq(r.currentSlide).css({opacity:0,zIndex:1});r.slides.eq(t).css({opacity:1,zIndex:2});r.wrapup(m)}r.vars.smoothHeight&&v.smoothHeight(r.vars.animationSpeed)}};r.wrapup=function(e){!p&&!h&&(r.currentSlide===0&&r.animatingTo===r.last&&r.vars.animationLoop?r.setProps(e,"jumpEnd"):r.currentSlide===r.last&&r.animatingTo===0&&r.vars.animationLoop&&r.setProps(e,"jumpStart"));r.animating=!1;r.currentSlide=r.animatingTo;r.vars.after(r)};r.animateSlides=function(){!r.animating&&m&&r.flexAnimate(r.getTarget("next"))};r.pause=function(){clearInterval(r.animatedSlides);r.animatedSlides=null;r.playing=!1;r.vars.pausePlay&&v.pausePlay.update("play");r.syncExists&&v.sync("pause")};r.play=function(){r.playing&&clearInterval(r.animatedSlides);r.animatedSlides=r.animatedSlides||setInterval(r.animateSlides,r.vars.slideshowSpeed);r.started=r.playing=!0;r.vars.pausePlay&&v.pausePlay.update("pause");r.syncExists&&v.sync("play")};r.stop=function(){r.pause();r.stopped=!0};r.canAdvance=function(e,t){var n=d?r.pagingCount-1:r.last;return t?!0:d&&r.currentItem===r.count-1&&e===0&&r.direction==="prev"?!0:d&&r.currentItem===0&&e===r.pagingCount-1&&r.direction!=="next"?!1:e===r.currentSlide&&!d?!1:r.vars.animationLoop?!0:r.atEnd&&r.currentSlide===0&&e===n&&r.direction!=="next"?!1:r.atEnd&&r.currentSlide===n&&e===0&&r.direction==="next"?!1:!0};r.getTarget=function(e){r.direction=e;return e==="next"?r.currentSlide===r.last?0:r.currentSlide+1:r.currentSlide===0?r.last:r.currentSlide-1};r.setProps=function(e,t,n){var i=function(){var n=e?e:(r.itemW+r.vars.itemMargin)*r.move*r.animatingTo,i=function(){if(h)return t==="setTouch"?e:c&&r.animatingTo===r.last?0:c?r.limit-(r.itemW+r.vars.itemMargin)*r.move*r.animatingTo:r.animatingTo===r.last?r.limit:n;switch(t){case"setTotal":return c?(r.count-1-r.currentSlide+r.cloneOffset)*e:(r.currentSlide+r.cloneOffset)*e;case"setTouch":return c?e:e;case"jumpEnd":return c?e:r.count*e;case"jumpStart":return c?r.count*e:e;default:return e}}();return i*-1+"px"}();if(r.transitions){i=l?"translate3d(0,"+i+",0)":"translate3d("+i+",0,0)";n=n!==undefined?n/1e3+"s":"0s";r.container.css("-"+r.pfx+"-transition-duration",n)}r.args[r.prop]=i;(r.transitions||n===undefined)&&r.container.css(r.args)};r.setup=function(t){if(!p){var n,s;if(t==="init"){r.viewport=e('<div class="'+i+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(r).append(r.container);r.cloneCount=0;r.cloneOffset=0;if(c){s=e.makeArray(r.slides).reverse();r.slides=e(s);r.container.empty().append(r.slides)}}if(r.vars.animationLoop&&!h){r.cloneCount=2;r.cloneOffset=1;t!=="init"&&r.container.find(".clone").remove();r.container.append(r.slides.first().clone().addClass("clone").attr("aria-hidden","true")).prepend(r.slides.last().clone().addClass("clone").attr("aria-hidden","true"))}r.newSlides=e(r.vars.selector,r);n=c?r.count-1-r.currentSlide+r.cloneOffset:r.currentSlide+r.cloneOffset;if(l&&!h){r.container.height((r.count+r.cloneCount)*200+"%").css("position","absolute").width("100%");setTimeout(function(){r.newSlides.css({display:"block"});r.doMath();r.viewport.height(r.h);r.setProps(n*r.h,"init")},t==="init"?100:0)}else{r.container.width((r.count+r.cloneCount)*200+"%");r.setProps(n*r.computedW,"init");setTimeout(function(){r.doMath();r.newSlides.css({width:r.computedW,"float":"left",display:"block"});r.vars.smoothHeight&&v.smoothHeight()},t==="init"?100:0)}}else{r.slides.css({width:"100%","float":"left",marginRight:"-100%",position:"relative"});t==="init"&&(o?r.slides.css({opacity:0,display:"block",webkitTransition:"opacity "+r.vars.animationSpeed/1e3+"s ease",zIndex:1}).eq(r.currentSlide).css({opacity:1,zIndex:2}):r.slides.css({opacity:0,display:"block",zIndex:1}).eq(r.currentSlide).css({zIndex:2}).animate({opacity:1},r.vars.animationSpeed,r.vars.easing));r.vars.smoothHeight&&v.smoothHeight()}h||r.slides.removeClass(i+"active-slide").eq(r.currentSlide).addClass(i+"active-slide")};r.doMath=function(){var e=r.slides.first(),t=r.vars.itemMargin,n=r.vars.minItems,i=r.vars.maxItems;r.w=r.viewport===undefined?r.width():r.viewport.width();r.h=e.height();r.boxPadding=e.outerWidth()-e.width();if(h){r.itemT=r.vars.itemWidth+t;r.minW=n?n*r.itemT:r.w;r.maxW=i?i*r.itemT-t:r.w;r.itemW=r.minW>r.w?(r.w-t*(n-1))/n:r.maxW<r.w?(r.w-t*(i-1))/i:r.vars.itemWidth>r.w?r.w:r.vars.itemWidth;r.visible=Math.floor(r.w/r.itemW);r.move=r.vars.move>0&&r.vars.move<r.visible?r.vars.move:r.visible;r.pagingCount=Math.ceil((r.count-r.visible)/r.move+1);r.last=r.pagingCount-1;r.limit=r.pagingCount===1?0:r.vars.itemWidth>r.w?r.itemW*(r.count-1)+t*(r.count-1):(r.itemW+t)*r.count-r.w-t}else{r.itemW=r.w;r.pagingCount=r.count;r.last=r.count-1}r.computedW=r.itemW-r.boxPadding};r.update=function(e,t){r.doMath();if(!h){e<r.currentSlide?r.currentSlide+=1:e<=r.currentSlide&&e!==0&&(r.currentSlide-=1);r.animatingTo=r.currentSlide}if(r.vars.controlNav&&!r.manualControls)if(t==="add"&&!h||r.pagingCount>r.controlNav.length)v.controlNav.update("add");else if(t==="remove"&&!h||r.pagingCount<r.controlNav.length){if(h&&r.currentSlide>r.last){r.currentSlide-=1;r.animatingTo-=1}v.controlNav.update("remove",r.last)}r.vars.directionNav&&v.directionNav.update()};r.addSlide=function(t,n){var i=e(t);r.count+=1;r.last=r.count-1;l&&c?n!==undefined?r.slides.eq(r.count-n).after(i):r.container.prepend(i):n!==undefined?r.slides.eq(n).before(i):r.container.append(i);r.update(n,"add");r.slides=e(r.vars.selector+":not(.clone)",r);r.setup();r.vars.added(r)};r.removeSlide=function(t){var n=isNaN(t)?r.slides.index(e(t)):t;r.count-=1;r.last=r.count-1;isNaN(t)?e(t,r.slides).remove():l&&c?r.slides.eq(r.last).remove():r.slides.eq(t).remove();r.doMath();r.update(n,"remove");r.slides=e(r.vars.selector+":not(.clone)",r);r.setup();r.vars.removed(r)};v.init()};e(window).blur(function(e){focused=!1}).focus(function(e){focused=!0});e.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:!1,animationLoop:!0,smoothHeight:!1,startAt:0,slideshow:!0,slideshowSpeed:7e3,animationSpeed:600,initDelay:0,randomize:!1,thumbCaptions:!1,pauseOnAction:!0,pauseOnHover:!1,pauseInvisible:!0,useCSS:!0,touch:!0,video:!1,controlNav:!0,directionNav:!0,prevText:"Previous",nextText:"Next",keyboard:!0,multipleKeyboard:!1,mousewheel:!1,pausePlay:!1,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:1,maxItems:0,move:0,allowOneSlide:!0,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){}};e.fn.flexslider=function(t){t===undefined&&(t={});if(typeof t=="object")return this.each(function(){var n=e(this),r=t.selector?t.selector:".slides > li",i=n.find(r);if(i.length===1&&t.allowOneSlide===!0||i.length===0){i.fadeIn(400);t.start&&t.start(n)}else n.data("flexslider")===undefined&&new e.flexslider(this,t)});var n=e(this).data("flexslider");switch(t){case"play":n.play();break;case"pause":n.pause();break;case"stop":n.stop();break;case"next":n.flexAnimate(n.getTarget("next"),!0);break;case"prev":case"previous":n.flexAnimate(n.getTarget("prev"),!0);break;default:typeof t=="number"&&n.flexAnimate(t,!0)}}})(jQuery);


/**
 * Galleria v 1.2.9 2013-01-18
 * http://galleria.io
 *
 * Licensed under the MIT license
 * https://raw.github.com/aino/galleria/master/LICENSE
 *
 */(function(a){var b,c=this,d=c.document,e=a(d),f=a(c),g=Array.prototype,h=1.29,i=!0,j=3e4,k=!1,l=navigator.userAgent.toLowerCase(),m=c.location.hash.replace(/#\//,""),n=function(){},o=function(){return!1},p=function(){var a=3,c=d.createElement("div"),e=c.getElementsByTagName("i");do c.innerHTML="<!--[if gt IE "+ ++a+"]><i></i><![endif]-->";while(e[0]);return a>4?a:b}(),q=function(){return{html:d.documentElement,body:d.body,head:d.getElementsByTagName("head")[0],title:d.title}},r=c.parent!==c.self,s="data ready thumbnail loadstart loadfinish image play pause progress fullscreen_enter fullscreen_exit idle_enter idle_exit rescale lightbox_open lightbox_close lightbox_image",t=function(){var b=[];return a.each(s.split(" "),function(a,c){b.push(c),/_/.test(c)&&b.push(c.replace(/_/g,""))}),b}(),u=function(b){var c;return typeof b!="object"?b:(a.each(b,function(d,e){/^[a-z]+_/.test(d)&&(c="",a.each(d.split("_"),function(a,b){c+=a>0?b.substr(0,1).toUpperCase()+b.substr(1):b}),b[c]=e,delete b[d])}),b)},v=function(b){return a.inArray(b,t)>-1?Galleria[b.toUpperCase()]:b},w={youtube:{reg:/https?:\/\/(?:[a-zA_Z]{2,3}.)?(?:youtube\.com\/watch\?)((?:[\w\d\-\_\=]+&amp;(?:amp;)?)*v(?:&lt;[A-Z]+&gt;)?=([0-9a-zA-Z\-\_]+))/i,embed:function(a){return"http://www.youtube.com/embed/"+a},getThumb:function(b,d,e){e=e||n,a.getJSON(c.location.protocol+"//gdata.youtube.com/feeds/api/videos/"+b+"?v=2&alt=json-in-script&callback=?",function(a){try{d(a.entry.media$group.media$thumbnail[0].url)}catch(b){e()}}).error(e)}},vimeo:{reg:/https?:\/\/(?:www\.)?(vimeo\.com)\/(?:hd#)?([0-9]+)/i,embed:function(a){return"http://player.vimeo.com/video/"+a},getThumb:function(b,c,d){d=d||n,a.getJSON("http://vimeo.com/api/v2/video/"+b+".json?callback=?",function(a){try{c(a[0].thumbnail_medium)}catch(b){d()}}).error(d)}},dailymotion:{reg:/https?:\/\/(?:www\.)?(dailymotion\.com)\/video\/([^_]+)/,embed:function(a){return"http://www.dailymotion.com/embed/video/"+a},getThumb:function(b,c,d){d=d||n,a.getJSON("https://api.dailymotion.com/video/"+b+"?fields=thumbnail_medium_url&callback=?",function(a){try{c(a.thumbnail_medium_url)}catch(b){d()}}).error(d)}}},x=function(a){var b;for(var c in w){b=a&&a.match(w[c].reg);if(b&&b.length)return{id:b[2],provider:c}}return!1},y={support:function(){var a=q().html;return!r&&(a.requestFullscreen||a.mozRequestFullScreen||a.webkitRequestFullScreen)}(),callback:n,enter:function(a,b,c){this.instance=a,this.callback=b||n,c=c||q().html,c.requestFullscreen?c.requestFullscreen():c.mozRequestFullScreen?c.mozRequestFullScreen():c.webkitRequestFullScreen&&c.webkitRequestFullScreen()},exit:function(a){this.callback=a||n,d.exitFullscreen?d.exitFullscreen():d.mozCancelFullScreen?d.mozCancelFullScreen():d.webkitCancelFullScreen&&d.webkitCancelFullScreen()},instance:null,listen:function(){if(!this.support)return;var a=function(){if(!y.instance)return;var a=y.instance._fullscreen;d.fullscreen||d.mozFullScreen||d.webkitIsFullScreen?a._enter(y.callback):a._exit(y.callback)};d.addEventListener("fullscreenchange",a,!1),d.addEventListener("mozfullscreenchange",a,!1),d.addEventListener("webkitfullscreenchange",a,!1)}},z=[],A=[],B=!1,C=!1,D=[],E=function(b){Galleria.theme=b,a.each(D,function(a,b){b._initialized||b._init.call(b)}),D=[]},F=function(){return{clearTimer:function(b){a.each(Galleria.get(),function(){this.clearTimer(b)})},addTimer:function(b){a.each(Galleria.get(),function(){this.addTimer(b)})},array:function(a){return g.slice.call(a,0)},create:function(a,b){b=b||"div";var c=d.createElement(b);return c.className=a,c},removeFromArray:function(b,c){return a.each(b,function(a,d){if(d==c)return b.splice(a,1),!1}),b},getScriptPath:function(b){b=b||a("script:last").attr("src");var c=b.split("/");return c.length==1?"":(c.pop(),c.join("/")+"/")},animate:function(){var b=function(a){var b="transition WebkitTransition MozTransition OTransition".split(" "),d;if(c.opera)return!1;for(d=0;b[d];d++)if(typeof a[b[d]]!="undefined")return b[d];return!1}((d.body||d.documentElement).style),e={MozTransition:"transitionend",OTransition:"oTransitionEnd",WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[b],f={_default:[.25,.1,.25,1],galleria:[.645,.045,.355,1],galleriaIn:[.55,.085,.68,.53],galleriaOut:[.25,.46,.45,.94],ease:[.25,0,.25,1],linear:[.25,.25,.75,.75],"ease-in":[.42,0,1,1],"ease-out":[0,0,.58,1],"ease-in-out":[.42,0,.58,1]},g=function(b,c,d){var e={};d=d||"transition",a.each("webkit moz ms o".split(" "),function(){e["-"+this+"-"+d]=c}),b.css(e)},h=function(a){g(a,"none","transition"),Galleria.WEBKIT&&Galleria.TOUCH&&(g(a,"translate3d(0,0,0)","transform"),a.data("revert")&&(a.css(a.data("revert")),a.data("revert",null)))},i,j,k,l,m,o,p;return function(d,q,r){r=a.extend({duration:400,complete:n,stop:!1},r),d=a(d);if(!r.duration){d.css(q),r.complete.call(d[0]);return}if(!b){d.animate(q,r);return}r.stop&&(d.unbind(e),h(d)),i=!1,a.each(q,function(a,b){p=d.css(a),F.parseValue(p)!=F.parseValue(b)&&(i=!0),d.css(a,p)});if(!i){c.setTimeout(function(){r.complete.call(d[0])},r.duration);return}j=[],k=r.easing in f?f[r.easing]:f._default,l=" "+r.duration+"ms"+" cubic-bezier("+k.join(",")+")",c.setTimeout(function(b,c,d,e){return function(){b.one(c,function(a){return function(){h(a),r.complete.call(a[0])}}(b));if(Galleria.WEBKIT&&Galleria.TOUCH){m={},o=[0,0,0],a.each(["left","top"],function(a,c){c in d&&(o[a]=F.parseValue(d[c])-F.parseValue(b.css(c))+"px",m[c]=d[c],delete d[c])});if(o[0]||o[1])b.data("revert",m),j.push("-webkit-transform"+e),g(b,"translate3d("+o.join(",")+")","transform")}a.each(d,function(a,b){j.push(a+e)}),g(b,j.join(",")),b.css(d)}}(d,e,q,l),2)}}(),removeAlpha:function(a){if(p<9&&a){var b=a.style,c=a.currentStyle,d=c&&c.filter||b.filter||"";/alpha/.test(d)&&(b.filter=d.replace(/alpha\([^)]*\)/i,""))}},forceStyles:function(b,c){b=a(b),b.attr("style")&&b.data("styles",b.attr("style")).removeAttr("style"),b.css(c)},revertStyles:function(){a.each(F.array(arguments),function(b,c){c=a(c),c.removeAttr("style"),c.attr("style",""),c.data("styles")&&c.attr("style",c.data("styles")).data("styles",null)})},moveOut:function(a){F.forceStyles(a,{position:"absolute",left:-1e4})},moveIn:function(){F.revertStyles.apply(F,F.array(arguments))},elem:function(b){return b instanceof a?{$:b,dom:b[0]}:{$:a(b),dom:b}},hide:function(a,b,c){c=c||n;var d=F.elem(a),e=d.$;a=d.dom,e.data("opacity")||e.data("opacity",e.css("opacity"));var f={opacity:0};if(b){var g=p<9&&a?function(){F.removeAlpha(a),a.style.visibility="hidden",c.call(a)}:c;F.animate(a,f,{duration:b,complete:g,stop:!0})}else p<9&&a?(F.removeAlpha(a),a.style.visibility="hidden"):e.css(f)},show:function(a,b,c){c=c||n;var d=F.elem(a),e=d.$;a=d.dom;var f=parseFloat(e.data("opacity"))||1,g={opacity:f};if(b){p<9&&(e.css("opacity",0),a.style.visibility="visible");var h=p<9&&a?function(){g.opacity==1&&F.removeAlpha(a),c.call(a)}:c;F.animate(a,g,{duration:b,complete:h,stop:!0})}else p<9&&g.opacity==1&&a?(F.removeAlpha(a),a.style.visibility="visible"):e.css(g)},optimizeTouch:function(){var b,c,d,e,f={},g=function(b){b.preventDefault(),f=a.extend({},b,!0)},h=function(){this.evt=f},i=function(){this.handler.call(b,this.evt)};return function(f){a(f).bind("touchend",function(f){b=f.target,e=!0;while(b.parentNode&&b!=f.currentTarget&&e)c=a(b).data("events"),d=a(b).data("fakes"),c&&"click"in c?(e=!1,f.preventDefault(),a(b).click(g).click(),c.click.pop(),a.each(c.click,h),a(b).data("fakes",c.click),delete c.click):d&&(e=!1,f.preventDefault(),a.each(d,i)),b=b.parentNode})}}(),wait:function(b){b=a.extend({until:o,success:n,error:function(){Galleria.raise("Could not complete wait function.")},timeout:3e3},b);var d=F.timestamp(),e,f,g=function(){f=F.timestamp(),e=f-d;if(b.until(e))return b.success(),!1;if(typeof b.timeout=="number"&&f>=d+b.timeout)return b.error(),!1;c.setTimeout(g,10)};c.setTimeout(g,10)},toggleQuality:function(a,b){if(p!==7&&p!==8||!a||a.nodeName.toUpperCase()!="IMG")return;typeof b=="undefined"&&(b=a.style.msInterpolationMode==="nearest-neighbor"),a.style.msInterpolationMode=b?"bicubic":"nearest-neighbor"},insertStyleTag:function(b,c){if(c&&a("#"+c).length)return;var e=d.createElement("style");c&&(e.id=c),q().head.appendChild(e);if(e.styleSheet)e.styleSheet.cssText=b;else{var f=d.createTextNode(b);e.appendChild(f)}},loadScript:function(b,c){var d=!1,e=a("<script>").attr({src:b,async:!0}).get(0);e.onload=e.onreadystatechange=function(){!d&&(!this.readyState||this.readyState==="loaded"||this.readyState==="complete")&&(d=!0,e.onload=e.onreadystatechange=null,typeof c=="function"&&c.call(this,this))},q().head.appendChild(e)},parseValue:function(a){if(typeof a=="number")return a;if(typeof a=="string"){var b=a.match(/\-?\d|\./g);return b&&b.constructor===Array?b.join("")*1:0}return 0},timestamp:function(){return(new Date).getTime()},loadCSS:function(c,e,f){var g,h;a("link[rel=stylesheet]").each(function(){if((new RegExp(c)).test(this.href))return g=this,!1}),typeof e=="function"&&(f=e,e=b),f=f||n;if(g)return f.call(g,g),g;h=d.styleSheets.length;if(a("#"+e).length)a("#"+e).attr("href",c),h--;else{g=a("<link>").attr({rel:"stylesheet",href:c,id:e}).get(0);var i=a('link[rel="stylesheet"], style');i.length?i.get(0).parentNode.insertBefore(g,i[0]):q().head.appendChild(g);if(p&&h>=31){Galleria.raise("You have reached the browser stylesheet limit (31)",!0);return}}if(typeof f=="function"){var j=a("<s>").attr("id","galleria-loader").hide().appendTo(q().body);F.wait({until:function(){return j.height()==1},success:function(){j.remove(),f.call(g,g)},error:function(){j.remove(),Galleria.raise("Theme CSS could not load after 20 sec. "+(Galleria.QUIRK?"Your browser is in Quirks Mode, please add a correct doctype.":"Please download the latest theme at http://galleria.io/customer/."),!0)},timeout:5e3})}return g}}}(),G=function(){var b=function(b,c,d,e){var f=this.getOptions("easing"),g=this.getStageWidth(),h={left:g*(b.rewind?-1:1)},i={left:0};d?(h.opacity=0,i.opacity=1):h.opacity=1,a(b.next).css(h),F.animate(b.next,i,{duration:b.speed,complete:function(a){return function(){c(),a.css({left:0})}}(a(b.next).add(b.prev)),queue:!1,easing:f}),e&&(b.rewind=!b.rewind),b.prev&&(h={left:0},i={left:g*(b.rewind?1:-1)},d&&(h.opacity=1,i.opacity=0),a(b.prev).css(h),F.animate(b.prev,i,{duration:b.speed,queue:!1,easing:f,complete:function(){a(this).css("opacity",0)}}))};return{active:!1,init:function(a,b,c){G.effects.hasOwnProperty(a)&&G.effects[a].call(this,b,c)},effects:{fade:function(b,c){a(b.next).css({opacity:0,left:0}),F.animate(b.next,{opacity:1},{duration:b.speed,complete:c}),b.prev&&(a(b.prev).css("opacity",1).show(),F.animate(b.prev,{opacity:0},{duration:b.speed}))},flash:function(b,c){a(b.next).css({opacity:0,left:0}),b.prev?F.animate(b.prev,{opacity:0},{duration:b.speed/2,complete:function(){F.animate(b.next,{opacity:1},{duration:b.speed,complete:c})}}):F.animate(b.next,{opacity:1},{duration:b.speed,complete:c})},pulse:function(b,c){b.prev&&a(b.prev).hide(),a(b.next).css({opacity:0,left:0}).show(),F.animate(b.next,{opacity:1},{duration:b.speed,complete:c})},slide:function(a,c){b.apply(this,F.array(arguments))},fadeslide:function(a,c){b.apply(this,F.array(arguments).concat([!0]))},doorslide:function(a,c){b.apply(this,F.array(arguments).concat([!1,!0]))}}}}();y.listen(),Galleria=function(){var g=this;this._options={},this._playing=!1,this._playtime=5e3,this._active=null,this._queue={length:0},this._data=[],this._dom={},this._thumbnails=[],this._layers=[],this._initialized=!1,this._firstrun=!1,this._stageWidth=0,this._stageHeight=0,this._target=b,this._binds=[],this._id=parseInt(Math.random()*1e4,10);var h="container stage images image-nav image-nav-left image-nav-right info info-text info-title info-description thumbnails thumbnails-list thumbnails-container thumb-nav-left thumb-nav-right loader counter tooltip",i="current total";a.each(h.split(" "),function(a,b){g._dom[b]=F.create("galleria-"+b)}),a.each(i.split(" "),function(a,b){g._dom[b]=F.create("galleria-"+b,"span")});var j=this._keyboard={keys:{UP:38,DOWN:40,LEFT:37,RIGHT:39,RETURN:13,ESCAPE:27,BACKSPACE:8,SPACE:32},map:{},bound:!1,press:function(a){var b=a.keyCode||a.which;b in j.map&&typeof j.map[b]=="function"&&j.map[b].call(g,a)},attach:function(a){var b,c;for(b in a)a.hasOwnProperty(b)&&(c=b.toUpperCase(),c in j.keys?j.map[j.keys[c]]=a[b]:j.map[c]=a[b]);j.bound||(j.bound=!0,e.bind("keydown",j.press))},detach:function(){j.bound=!1,j.map={},e.unbind("keydown",j.press)}},k=this._controls={0:b,1:b,active:0,swap:function(){k.active=k.active?0:1},getActive:function(){return k[k.active]},getNext:function(){return k[1-k.active]}},l=this._carousel={next:g.$("thumb-nav-right"),prev:g.$("thumb-nav-left"),width:0,current:0,max:0,hooks:[],update:function(){var b=0,c=0,d=[0];a.each(g._thumbnails,function(e,f){f.ready&&(b+=f.outerWidth||a(f.container).outerWidth(!0),d[e+1]=b,c=Math.max(c,f.outerHeight||a(f.container).outerHeight(!0)))}),g.$("thumbnails").css({width:b,height:c}),l.max=b,l.hooks=d,l.width=g.$("thumbnails-list").width(),l.setClasses(),g.$("thumbnails-container").toggleClass("galleria-carousel",b>l.width),l.width=g.$("thumbnails-list").width()},bindControls:function(){var a;l.next.bind("click",function(b){b.preventDefault();if(g._options.carouselSteps==="auto"){for(a=l.current;a<l.hooks.length;a++)if(l.hooks[a]-l.hooks[l.current]>l.width){l.set(a-2);break}}else l.set(l.current+g._options.carouselSteps)}),l.prev.bind("click",function(b){b.preventDefault();if(g._options.carouselSteps==="auto")for(a=l.current;a>=0;a--){if(l.hooks[l.current]-l.hooks[a]>l.width){l.set(a+2);break}if(a===0){l.set(0);break}}else l.set(l.current-g._options.carouselSteps)})},set:function(a){a=Math.max(a,0);while(l.hooks[a-1]+l.width>=l.max&&a>=0)a--;l.current=a,l.animate()},getLast:function(a){return(a||l.current)-1},follow:function(a){if(a===0||a===l.hooks.length-2){l.set(a);return}var b=l.current;while(l.hooks[b]-l.hooks[l.current]<l.width&&b<=l.hooks.length)b++;a-1<l.current?l.set(a-1):a+2>b&&l.set(a-b+l.current+2)},setClasses:function(){l.prev.toggleClass("disabled",!l.current),l.next.toggleClass("disabled",l.hooks[l.current]+l.width>=l.max)},animate:function(a){l.setClasses();var b=l.hooks[l.current]*-1;if(isNaN(b))return;F.animate(g.get("thumbnails"),{left:b},{duration:g._options.carouselSpeed,easing:g._options.easing,queue:!1})}},m=this._tooltip={initialized:!1,open:!1,timer:"tooltip"+g._id,swapTimer:"swap"+g._id,init:function(){m.initialized=!0;var a=".galleria-tooltip{padding:3px 8px;max-width:50%;background:#ffe;color:#000;z-index:3;position:absolute;font-size:11px;line-height:1.3;opacity:0;box-shadow:0 0 2px rgba(0,0,0,.4);-moz-box-shadow:0 0 2px rgba(0,0,0,.4);-webkit-box-shadow:0 0 2px rgba(0,0,0,.4);}";F.insertStyleTag(a,"galleria-tooltip"),g.$("tooltip").css({opacity:.8,visibility:"visible",display:"none"})},move:function(a){var b=g.getMousePosition(a).x,c=g.getMousePosition(a).y,d=g.$("tooltip"),e=b,f=c,h=d.outerHeight(!0)+1,i=d.outerWidth(!0),j=h+15,k=g.$("container").width()-i-2,l=g.$("container").height()-h-2;!isNaN(e)&&!isNaN(f)&&(e+=10,f-=h+8,e=Math.max(0,Math.min(k,e)),f=Math.max(0,Math.min(l,f)),c<j&&(f=j),d.css({left:e,top:f}))},bind:function(b,c){if(Galleria.TOUCH)return;m.initialized||m.init();var d=function(){g.$("container").unbind("mousemove",m.move),g.clearTimer(m.timer),g.$("tooltip").stop().animate({opacity:0},200,function(){g.$("tooltip").hide(),g.addTimer(m.swapTimer,function(){m.open=!1},1e3)})},e=function(b,c){m.define(b,c),a(b).hover(function(){g.clearTimer(m.swapTimer),g.$("container").unbind("mousemove",m.move).bind("mousemove",m.move).trigger("mousemove"),m.show(b),g.addTimer(m.timer,function(){g.$("tooltip").stop().show().animate({opacity:1}),m.open=!0},m.open?0:500)},d).click(d)};typeof c=="string"?e(b in g._dom?g.get(b):b,c):a.each(b,function(a,b){e(g.get(a),b)})},show:function(b){b=a(b in g._dom?g.get(b):b);var d=b.data("tt"),e=function(a){c.setTimeout(function(a){return function(){m.move(a)}}(a),10),b.unbind("mouseup",e)};d=typeof d=="function"?d():d;if(!d)return;g.$("tooltip").html(d.replace(/\s/,"&#160;")),b.bind("mouseup",e)},define:function(b,c){if(typeof c!="function"){var d=c;c=function(){return d}}b=a(b in g._dom?g.get(b):b).data("tt",c),m.show(b)}},n=this._fullscreen={scrolled:0,crop:b,active:!1,keymap:g._keyboard.map,parseCallback:function(b,c){return G.active?function(){typeof b=="function"&&b.call(g);var d=g._controls.getActive(),e=g._controls.getNext();g._scaleImage(e),g._scaleImage(d),c&&g._options.trueFullscreen&&a(d.container).add(e.container).trigger("transitionend")}:b},enter:function(a){a=n.parseCallback(a,!0),g._options.trueFullscreen&&y.support?(n.active=!0,F.forceStyles(g.get("container"),{width:"100%",height:"100%"}),g.rescale(),Galleria.MAC?Galleria.WEBKIT?(g.$("container").css("opacity",0).addClass("fullscreen"),c.setTimeout(function(){n.scale(),g.$("container").css("opacity",1)},50)):(g.$("stage").css("opacity",0),c.setTimeout(function(){n.scale(),g.$("stage").css("opacity",1)},4)):g.$("container").addClass("fullscreen"),f.resize(n.scale),y.enter(g,a,g.get("container"))):(n.scrolled=f.scrollTop(),c.scrollTo(0,0),n._enter(a))},_enter:function(e){n.active=!0,r&&(n.iframe=function(){var b,e=d.referrer,f=d.createElement("a"),g=c.location;return f.href=e,f.protocol!=g.protocol||f.hostname!=g.hostname||f.port!=g.port?(Galleria.raise("Parent fullscreen not available. Iframe protocol, domains and ports must match."),!1):(n.pd=c.parent.document,a(n.pd).find("iframe").each(function(){var a=this.contentDocument||this.contentWindow.document;if(a===d)return b=this,!1}),b)}()),F.hide(g.getActiveImage()),r&&n.iframe&&(n.iframe.scrolled=a(c.parent).scrollTop(),c.parent.scrollTo(0,0));var h=g.getData(),i=g._options,j=!g._options.trueFullscreen||!y.support,k={height:"100%",overflow:"hidden",margin:0,padding:0};j&&(g.$("container").addClass("fullscreen"),F.forceStyles(g.get("container"),{position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:1e4}),F.forceStyles(q().html,k),F.forceStyles(q().body,k)),r&&n.iframe&&(F.forceStyles(n.pd.documentElement,k),F.forceStyles(n.pd.body,k),F.forceStyles(n.iframe,a.extend(k,{width:"100%",height:"100%",top:0,left:0,position:"fixed",zIndex:1e4,border:"none"}))),n.keymap=a.extend({},g._keyboard.map),g.attachKeyboard({escape:g.exitFullscreen,right:g.next,left:g.prev}),n.crop=i.imageCrop,i.fullscreenCrop!=b&&(i.imageCrop=i.fullscreenCrop);if(h&&h.big&&h.image!==h.big){var l=new Galleria.Picture,m=l.isCached(h.big),o=g.getIndex(),p=g._thumbnails[o];g.trigger({type:Galleria.LOADSTART,cached:m,rewind:!1,index:o,imageTarget:g.getActiveImage(),thumbTarget:p,galleriaData:h}),l.load(h.big,function(b){g._scaleImage(b,{complete:function(b){g.trigger({type:Galleria.LOADFINISH,cached:m,index:o,rewind:!1,imageTarget:b.image,thumbTarget:p});var c=g._controls.getActive().image;c&&a(c).width(b.image.width).height(b.image.height).attr("style",a(b.image).attr("style")).attr("src",b.image.src)}})})}g.rescale(function(){g.addTimer(!1,function(){j&&F.show(g.getActiveImage()),typeof e=="function"&&e.call(g)},100),g.trigger(Galleria.FULLSCREEN_ENTER)}),j?f.resize(n.scale):F.show(g.getActiveImage())},scale:function(){g.rescale()},exit:function(a){a=n.parseCallback(a),g._options.trueFullscreen&&y.support?y.exit(a):n._exit(a)},_exit:function(a){n.active=!1;var b=!g._options.trueFullscreen||!y.support;g.$("container").removeClass("fullscreen"),b&&(F.hide(g.getActiveImage()),F.revertStyles(g.get("container"),q().html,q().body),c.scrollTo(0,n.scrolled)),r&&n.iframe&&(F.revertStyles(n.pd.documentElement,n.pd.body,n.iframe),n.iframe.scrolled&&c.parent.scrollTo(0,n.iframe.scrolled)),g.detachKeyboard(),g.attachKeyboard(n.keymap),g._options.imageCrop=n.crop;var d=g.getData().big,e=g._controls.getActive().image;!g.getData().iframe&&e&&d&&d==e.src&&c.setTimeout(function(a){return function(){e.src=a}}(g.getData().image),1),g.rescale(function(){g.addTimer(!1,function(){b&&F.show(g.getActiveImage()),typeof a=="function"&&a.call(g),f.trigger("resize")},50),g.trigger(Galleria.FULLSCREEN_EXIT)}),f.unbind("resize",n.scale)}},o=this._idle={trunk:[],bound:!1,active:!1,add:function(b,c,d,e){if(!b)return;o.bound||o.addEvent(),b=a(b),typeof d=="boolean"&&(e=d,d={}),d=d||{};var f={},g;for(g in c)c.hasOwnProperty(g)&&(f[g]=b.css(g));b.data("idle",{from:a.extend(f,d),to:c,complete:!0,busy:!1}),e?b.css(c):o.addTimer(),o.trunk.push(b)},remove:function(b){b=a(b),a.each(o.trunk,function(a,c){c&&c.length&&!c.not(b).length&&(b.css(b.data("idle").from),o.trunk.splice(a,1))}),o.trunk.length||(o.removeEvent(),g.clearTimer(o.timer))},addEvent:function(){o.bound=!0,g.$("container").bind("mousemove click",o.showAll),g._options.idleMode=="hover"&&g.$("container").bind("mouseleave",o.hide)},removeEvent:function(){o.bound=!1,g.$("container").bind("mousemove click",o.showAll),g._options.idleMode=="hover"&&g.$("container").unbind("mouseleave",o.hide)},addTimer:function(){if(g._options.idleMode=="hover")return;g.addTimer("idle",function(){o.hide()},g._options.idleTime)},hide:function(){if(!g._options.idleMode||g.getIndex()===!1||g.getData().iframe)return;g.trigger(Galleria.IDLE_ENTER);var b=o.trunk.length;a.each(o.trunk,function(a,c){var d=c.data("idle");if(!d)return;c.data("idle").complete=!1,F.animate(c,d.to,{duration:g._options.idleSpeed,complete:function(){a==b-1&&(o.active=!1)}})})},showAll:function(){g.clearTimer("idle"),a.each(o.trunk,function(a,b){o.show(b)})},show:function(b){var c=b.data("idle");if(!o.active||!c.busy&&!c.complete)c.busy=!0,g.trigger(Galleria.IDLE_EXIT),g.clearTimer("idle"),F.animate(b,c.from,{duration:g._options.idleSpeed/2,complete:function(){o.active=!0,a(b).data("idle").busy=!1,a(b).data("idle").complete=!0}});o.addTimer()}},s=this._lightbox={width:0,height:0,initialized:!1,active:null,image:null,elems:{},keymap:!1,init:function(){g.trigger(Galleria.LIGHTBOX_OPEN);if(s.initialized)return;s.initialized=!0;var b="overlay box content shadow title info close prevholder prev nextholder next counter image",c={},d=g._options,e="",f="position:absolute;",h="lightbox-",i={overlay:"position:fixed;display:none;opacity:"+d.overlayOpacity+";filter:alpha(opacity="+d.overlayOpacity*100+");top:0;left:0;width:100%;height:100%;background:"+d.overlayBackground+";z-index:99990",box:"position:fixed;display:none;width:400px;height:400px;top:50%;left:50%;margin-top:-200px;margin-left:-200px;z-index:99991",shadow:f+"background:#000;width:100%;height:100%;",content:f+"background-color:#fff;top:10px;left:10px;right:10px;bottom:10px;overflow:hidden",info:f+"bottom:10px;left:10px;right:10px;color:#444;font:11px/13px arial,sans-serif;height:13px",close:f+"top:10px;right:10px;height:20px;width:20px;background:#fff;text-align:center;cursor:pointer;color:#444;font:16px/22px arial,sans-serif;z-index:99999",image:f+"top:10px;left:10px;right:10px;bottom:30px;overflow:hidden;display:block;",prevholder:f+"width:50%;top:0;bottom:40px;cursor:pointer;",nextholder:f+"width:50%;top:0;bottom:40px;right:-1px;cursor:pointer;",prev:f+"top:50%;margin-top:-20px;height:40px;width:30px;background:#fff;left:20px;display:none;text-align:center;color:#000;font:bold 16px/36px arial,sans-serif",next:f+"top:50%;margin-top:-20px;height:40px;width:30px;background:#fff;right:20px;left:auto;display:none;font:bold 16px/36px arial,sans-serif;text-align:center;color:#000",title:"float:left",counter:"float:right;margin-left:8px;"},j=function(b){return b.hover(function(){a(this).css("color","#bbb")},function(){a(this).css("color","#444")})},k={};p&&p>7&&(i.nextholder+="background:#000;filter:alpha(opacity=0);",i.prevholder+="background:#000;filter:alpha(opacity=0);"),a.each(i,function(a,b){e+=".galleria-"+h+a+"{"+b+"}"}),e+=".galleria-"+h+"box.iframe .galleria-"+h+"prevholder,"+".galleria-"+h+"box.iframe .galleria-"+h+"nextholder{"+"width:100px;height:100px;top:50%;margin-top:-70px}",F.insertStyleTag(e,"galleria-lightbox"),a.each(b.split(" "),function(a,b){g.addElement("lightbox-"+b),c[b]=s.elems[b]=g.get("lightbox-"+b)}),s.image=new Galleria.Picture,a.each({box:"shadow content close prevholder nextholder",info:"title counter",content:"info image",prevholder:"prev",nextholder:"next"},function(b,c){var d=[];a.each(c.split(" "),function(a,b){d.push(h+b)}),k[h+b]=d}),g.append(k),a(c.image).append(s.image.container),a(q().body).append(c.overlay,c.box),F.optimizeTouch(c.box),j(a(c.close).bind("click",s.hide).html("&#215;")),a.each(["Prev","Next"],function(b,d){var e=a(c[d.toLowerCase()]).html(/v/.test(d)?"&#8249;&#160;":"&#160;&#8250;"),f=a(c[d.toLowerCase()+"holder"]);f.bind("click",function(){s["show"+d]()});if(p<8||Galleria.TOUCH){e.show();return}f.hover(function(){e.show()},function(a){e.stop().fadeOut(200)})}),a(c.overlay).bind("click",s.hide),Galleria.IPAD&&(g._options.lightboxTransitionSpeed=0)},rescale:function(b){var c=Math.min(f.width()-40,s.width),d=Math.min(f.height()-60,s.height),e=Math.min(c/s.width,d/s.height),h=Math.round(s.width*e)+40,i=Math.round(s.height*e)+60,j={width:h,height:i,"margin-top":Math.ceil(i/2)*-1,"margin-left":Math.ceil(h/2)*-1};b?a(s.elems.box).css(j):a(s.elems.box).animate(j,{duration:g._options.lightboxTransitionSpeed,easing:g._options.easing,complete:function(){var b=s.image,c=g._options.lightboxFadeSpeed;g.trigger({type:Galleria.LIGHTBOX_IMAGE,imageTarget:b.image}),a(b.container).show(),a(b.image).animate({opacity:1},c),F.show(s.elems.info,c)}})},hide:function(){s.image.image=null,f.unbind("resize",s.rescale),a(s.elems.box).hide(),F.hide(s.elems.info),g.detachKeyboard(),g.attachKeyboard(s.keymap),s.keymap=!1,F.hide(s.elems.overlay,200,function(){a(this).hide().css("opacity",g._options.overlayOpacity),g.trigger(Galleria.LIGHTBOX_CLOSE)})},showNext:function(){s.show(g.getNext(s.active))},showPrev:function(){s.show(g.getPrev(s.active))},show:function(b){s.active=b=typeof b=="number"?b:g.getIndex()||0,s.initialized||s.init(),s.keymap||(s.keymap=a.extend({},g._keyboard.map),g.attachKeyboard({escape:s.hide,right:s.showNext,left:s.showPrev})),f.unbind("resize",s.rescale);var d=g.getData(b),e=g.getDataLength(),h=g.getNext(b),i,j,k;F.hide(s.elems.info);try{for(k=g._options.preload;k>0;k--)j=new Galleria.Picture,i=g.getData(h),j.preload("big"in i?i.big:i.image),h=g.getNext(h)}catch(l){}s.image.isIframe=!!d.iframe,a(s.elems.box).toggleClass("iframe",!!d.iframe),s.image.load(d.iframe||d.big||d.image,function(h){if(h.isIframe){var i=a(c).width(),j=a(c).height();if(g._options.maxVideoSize){var k=Math.min(g._options.maxVideoSize/i,g._options.maxVideoSize/j);k<1&&(i*=k,j*=k)}s.width=i,s.height=j}else s.width=h.original.width,s.height=h.original.height;a(h.image).css({width:h.isIframe?"100%":"100.1%",height:h.isIframe?"100%":"100.1%",top:0,zIndex:99998,opacity:0,visibility:"visible"}),s.elems.title.innerHTML=d.title||"",s.elems.counter.innerHTML=b+1+" / "+e,f.resize(s.rescale),s.rescale()}),a(s.elems.overlay).show().css("visibility","visible"),a(s.elems.box).show()}},t=this._timer={trunk:{},add:function(a,b,d,e){a=a||(new Date).getTime(),e=e||!1,this.clear(a);if(e){var f=b;b=function(){f(),t.add(a,b,d)}}this.trunk[a]=c.setTimeout(b,d)},clear:function(a){var b=function(a){c.clearTimeout(this.trunk[a]),delete this.trunk[a]},d;if(!!a&&a in this.trunk)b.call(this,a);else if(typeof a=="undefined")for(d in this.trunk)this.trunk.hasOwnProperty(d)&&b.call(this,d)}};return this},Galleria.prototype={constructor:Galleria,init:function(c,d){var e=this;d=u(d),this._original={target:c,options:d,data:null},this._target=this._dom.target=c.nodeName?c:a(c).get(0),this._original.html=this._target.innerHTML,A.push(this);if(!this._target){Galleria.raise("Target not found",!0);return}return this._options={autoplay:!1,carousel:!0,carouselFollow:!0,carouselSpeed:400,carouselSteps:"auto",clicknext:!1,dailymotion:{foreground:"%23EEEEEE",highlight:"%235BCEC5",background:"%23222222",logo:0,hideInfos:1},dataConfig:function(a){return{}},dataSelector:"img",dataSort:!1,dataSource:this._target,debug:b,dummy:b,easing:"galleria",extend:function(a){},fullscreenCrop:b,fullscreenDoubleTap:!0,fullscreenTransition:b,height:0,idleMode:!0,idleTime:3e3,idleSpeed:200,imageCrop:!1,imageMargin:0,imagePan:!1,imagePanSmoothness:12,imagePosition:"50%",imageTimeout:b,initialTransition:b,keepSource:!1,layerFollow:!0,lightbox:!1,lightboxFadeSpeed:200,lightboxTransitionSpeed:200,linkSourceImages:!0,maxScaleRatio:b,maxVideoSize:b,minScaleRatio:b,overlayOpacity:.85,overlayBackground:"#0b0b0b",pauseOnInteraction:!0,popupLinks:!1,preload:2,queue:!0,responsive:!0,show:0,showInfo:!0,showCounter:!0,showImagenav:!0,swipe:!0,thumbCrop:!0,thumbEventType:"click",thumbFit:!0,thumbMargin:0,thumbQuality:"auto",thumbDisplayOrder:!0,thumbnails:!0,touchTransition:b,transition:"fade",transitionInitial:b,transitionSpeed:400,trueFullscreen:!0,useCanvas:!1,vimeo:{title:0,byline:0,portrait:0,color:"aaaaaa"},wait:5e3,width:"auto",youtube:{modestbranding:1,autohide:1,color:"white",hd:1,rel:0,showinfo:0}},this._options.initialTransition=this._options.initialTransition||this._options.transitionInitial,d&&d.debug===!1&&(i=!1),d&&typeof d.imageTimeout=="number"&&(j=d.imageTimeout),d&&typeof d.dummy=="string"&&(k=d.dummy),a(this._target).children().hide(),Galleria.QUIRK&&Galleria.raise("Your page is in Quirks mode, Galleria may not render correctly. Please validate your HTML and add a correct doctype."),typeof Galleria.theme=="object"?this._init():D.push(this),this},_init:function(){var b=this,e=this._options;if(this._initialized)return Galleria.raise("Init failed: Gallery instance already initialized."),this;this._initialized=!0;if(!Galleria.theme)return Galleria.raise("Init failed: No theme found.",!0),this;a.extend(!0,e,Galleria.theme.defaults,this._original.options,Galleria.configure.options),function(a){if(!("getContext"in a)){a=null;return}C=C||{elem:a,context:a.getContext("2d"),cache:{},length:0}}(d.createElement("canvas")),this.bind(Galleria.DATA,function(){this._original.data=this._data,this.get("total").innerHTML=this.getDataLength();var a=this.$("container");b._options.height<2&&(b._userRatio=b._ratio=b._options.height);var d={width:0,height:0},e=function(){return b.$("stage").height()};F.wait({until:function(){return d=b._getWH(),a.width(d.width).height(d.height),e()&&d.width&&d.height>50},success:function(){b._width=d.width,b._height=d.height,b._ratio=b._ratio||d.height/d.width,Galleria.WEBKIT?c.setTimeout(function(){b._run()},1):b._run()},error:function(){e()?Galleria.raise("Could not extract sufficient width/height of the gallery container. Traced measures: width:"+d.width+"px, height: "+d.height+"px.",!0):Galleria.raise("Could not extract a stage height from the CSS. Traced height: "+e()+"px.",!0)},timeout:typeof this._options.wait=="number"?this._options.wait:!1})}),this.append({"info-text":["info-title","info-description"],info:["info-text"],"image-nav":["image-nav-right","image-nav-left"],stage:["images","loader","counter","image-nav"],"thumbnails-list":["thumbnails"],"thumbnails-container":["thumb-nav-left","thumbnails-list","thumb-nav-right"],container:["stage","thumbnails-container","info","tooltip"]}),F.hide(this.$("counter").append(this.get("current"),d.createTextNode(" / "),this.get("total"))),this.setCounter("&#8211;"),F.hide(b.get("tooltip")),this.$("container").addClass(Galleria.TOUCH?"touch":"notouch"),a.each(new Array(2),function(c){var d=new Galleria.Picture;a(d.container).css({position:"absolute",top:0,left:0}).prepend(b._layers[c]=a(F.create("galleria-layer")).css({position:"absolute",top:0,left:0,right:0,bottom:0,zIndex:2})[0]),b.$("images").append(d.container),b._controls[c]=d}),this.$("images").css({position:"relative",top:0,left:0,width:"100%",height:"100%"}),this.$("thumbnails, thumbnails-list").css({overflow:"hidden",position:"relative"}),this.$("image-nav-right, image-nav-left").bind("click",function(a){e.clicknext&&a.stopPropagation(),e.pauseOnInteraction&&b.pause();var c=/right/.test(this.className)?"next":"prev";b[c]()}),a.each(["info","counter","image-nav"],function(a,c){e["show"+c.substr(0,1).toUpperCase()+c.substr(1).replace(/-/,"")]===!1&&F.moveOut(b.get(c.toLowerCase()))}),this.load(),!e.keepSource&&!p&&(this._target.innerHTML=""),this.get("errors")&&this.appendChild("target","errors"),this.appendChild("target","container");if(e.carousel){var g=0,h=e.show;this.bind(Galleria.THUMBNAIL,function(){this.updateCarousel(),++g==this.getDataLength()&&typeof h=="number"&&h>0&&this._carousel.follow(h)})}return e.responsive&&f.bind("resize",function(){b.isFullscreen()||b.resize()}),e.swipe&&(function(a){var c=[0,0],d=[0,0],e=30,f=100,g=!1,h=0,i,j={start:"touchstart",move:"touchmove",stop:"touchend"},k=function(
a){return a.originalEvent.touches?a.originalEvent.touches[0]:a},l=function(a){if(a.originalEvent.touches&&a.originalEvent.touches.length>1)return;i=k(a),d=[i.pageX,i.pageY],c[0]||(c=d),Math.abs(c[0]-d[0])>10&&a.preventDefault()},m=function(i){a.unbind(j.move,l);if(i.originalEvent.touches&&i.originalEvent.touches.length||g){g=!g;return}F.timestamp()-h<1e3&&Math.abs(c[0]-d[0])>e&&Math.abs(c[1]-d[1])<f&&(i.preventDefault(),b[c[0]>d[0]?"next":"prev"]()),c=d=[0,0]};a.bind(j.start,function(b){if(b.originalEvent.touches&&b.originalEvent.touches.length>1)return;i=k(b),h=F.timestamp(),c=d=[i.pageX,i.pageY],a.bind(j.move,l).one(j.stop,m)})}(b.$("images")),e.fullscreenDoubleTap&&this.$("stage").bind("touchstart",function(){var a,c,d,e,f,g,h=function(a){return a.originalEvent.touches?a.originalEvent.touches[0]:a};return function(i){g=Galleria.utils.timestamp(),c=h(i).pageX,d=h(i).pageY;if(g-a<500&&c-e<20&&d-f<20){b.toggleFullscreen(),i.preventDefault(),b.$("stage").unbind("touchend",arguments.callee);return}a=g,e=c,f=d}}())),F.optimizeTouch(this.get("container")),a.each(Galleria.on.binds,function(c,d){a.inArray(d.hash,b._binds)==-1&&b.bind(d.type,d.callback)}),this},addTimer:function(){return this._timer.add.apply(this._timer,F.array(arguments)),this},clearTimer:function(){return this._timer.clear.apply(this._timer,F.array(arguments)),this},_getWH:function(){var b=this.$("container"),c=this.$("target"),d=this,e={},f;return a.each(["width","height"],function(a,g){d._options[g]&&typeof d._options[g]=="number"?e[g]=d._options[g]:(f=[F.parseValue(b.css(g)),F.parseValue(c.css(g)),b[g](),c[g]()],d["_"+g]||f.splice(f.length,F.parseValue(b.css("min-"+g)),F.parseValue(c.css("min-"+g))),e[g]=Math.max.apply(Math,f))}),d._userRatio&&(e.height=e.width*d._userRatio),e},_createThumbnails:function(b){this.get("total").innerHTML=this.getDataLength();var e,f,g,h,i,j=this,k=this._options,l=b?this._data.length-b.length:0,m=l,n=[],o=0,q=p<8?"http://upload.wikimedia.org/wikipedia/commons/c/c0/Blank.gif":"data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw%3D%3D",r=function(){var a=j.$("thumbnails").find(".active");return a.length?a.find("img").attr("src"):!1}(),s=typeof k.thumbnails=="string"?k.thumbnails.toLowerCase():null,t=function(a){return d.defaultView&&d.defaultView.getComputedStyle?d.defaultView.getComputedStyle(f.container,null)[a]:i.css(a)},u=function(b,c,d){return function(){a(d).append(b),j.trigger({type:Galleria.THUMBNAIL,thumbTarget:b,index:c,galleriaData:j.getData(c)})}},v=function(b){k.pauseOnInteraction&&j.pause();var c=a(b.currentTarget).data("index");j.getIndex()!==c&&j.show(c),b.preventDefault()},x=function(b,c){a(b.container).css("visibility","visible"),j.trigger({type:Galleria.THUMBNAIL,thumbTarget:b.image,index:b.data.order,galleriaData:j.getData(b.data.order)}),typeof c=="function"&&c.call(j,b)},y=function(b,c){b.scale({width:b.data.width,height:b.data.height,crop:k.thumbCrop,margin:k.thumbMargin,canvas:k.useCanvas,complete:function(b){var d=["left","top"],e=["Width","Height"],f,g,h=j.getData(b.index),i=h.thumb.split(":");a.each(e,function(c,e){f=e.toLowerCase(),(k.thumbCrop!==!0||k.thumbCrop===f)&&k.thumbFit&&(g={},g[f]=b[f],a(b.container).css(g),g={},g[d[c]]=0,a(b.image).css(g)),b["outer"+e]=a(b.container)["outer"+e](!0)}),F.toggleQuality(b.image,k.thumbQuality===!0||k.thumbQuality==="auto"&&b.original.width<b.width*3),h.iframe&&i.length==2&&i[0]in w?w[i[0]].getThumb(i[1],function(a){return function(d){a.src=d,x(b,c)}}(b.image)):k.thumbDisplayOrder&&!b.lazy?a.each(n,function(a,b){if(a===o&&b.ready&&!b.displayed){o++,b.displayed=!0,x(b,c);return}}):x(b,c)}})};b||(this._thumbnails=[],this.$("thumbnails").empty());for(;this._data[l];l++)g=this._data[l],e=g.thumb||g.image,k.thumbnails!==!0&&s!="lazy"||!g.thumb&&!g.image?g.iframe||s==="empty"||s==="numbers"?(f={container:F.create("galleria-image"),image:F.create("img","span"),ready:!0},s==="numbers"&&a(f.image).text(l+1),g.iframe&&a(f.image).addClass("iframe"),this.$("thumbnails").append(f.container),c.setTimeout(u(f.image,l,f.container),50+l*20)):f={container:null,image:null}:(f=new Galleria.Picture(l),f.index=l,f.displayed=!1,f.lazy=!1,f.video=!1,this.$("thumbnails").append(f.container),i=a(f.container),i.css("visibility","hidden"),f.data={width:F.parseValue(t("width")),height:F.parseValue(t("height")),order:l,src:e},k.thumbFit&&k.thumbCrop!==!0?i.css({width:"auto",height:"auto"}):i.css({width:f.data.width,height:f.data.height}),h=e.split(":"),h.length==2&&h[0]in w?(f.video=!0,f.ready=!0,f.load(q,{height:f.data.height,width:f.data.height*1.25},y)):s=="lazy"?(i.addClass("lazy"),f.lazy=!0,f.load(q,{height:f.data.height,width:f.data.width})):f.load(e,y),k.preload==="all"&&f.preload(g.image)),a(f.container).add(k.keepSource&&k.linkSourceImages?g.original:null).data("index",l).bind(k.thumbEventType,v).data("thumbload",y),r===e&&a(f.container).addClass("active"),this._thumbnails.push(f);return n=this._thumbnails.slice(m),this},lazyLoad:function(b,c){var d=b.constructor==Array?b:[b],e=this,f=this.$("thumbnails").children().filter(function(){return a(this).data("lazy-src")}),g=0;return a.each(d,function(b,f){if(f>e._thumbnails.length-1)return;var h=e._thumbnails[f],i=h.data,j=i.src.split(":"),k=function(){++g==d.length&&typeof c=="function"&&c.call(e)},l=a(h.container).data("thumbload");h.video?l.call(e,h,k):h.load(i.src,function(a){l.call(e,a,k)})}),this},lazyLoadChunks:function(a,b){var d=this.getDataLength(),e=0,f=0,g=[],h=[],i=this;b=b||0;for(;e<d;e++){h.push(e);if(++f==a||e==d-1)g.push(h),f=0,h=[]}var j=function(a){var d=g.shift();d&&c.setTimeout(function(){i.lazyLoad(d,function(){j(!0)})},b&&a?b:0)};return j(!1),this},_run:function(){var d=this;d._createThumbnails(),F.wait({timeout:1e4,until:function(){return Galleria.OPERA&&d.$("stage").css("display","inline-block"),d._stageWidth=d.$("stage").width(),d._stageHeight=d.$("stage").height(),d._stageWidth&&d._stageHeight>50},success:function(){z.push(d),F.show(d.get("counter")),d._options.carousel&&d._carousel.bindControls(),d._options.autoplay&&(d.pause(),typeof d._options.autoplay=="number"&&(d._playtime=d._options.autoplay),d._playing=!0);if(d._firstrun){d._options.autoplay&&d.trigger(Galleria.PLAY),typeof d._options.show=="number"&&d.show(d._options.show);return}d._firstrun=!0,Galleria.History&&Galleria.History.change(function(a){isNaN(a)?c.history.go(-1):d.show(a,b,!0)}),d.trigger(Galleria.READY),Galleria.theme.init.call(d,d._options),a.each(Galleria.ready.callbacks,function(a,b){typeof b=="function"&&b.call(d,d._options)}),d._options.extend.call(d,d._options),/^[0-9]{1,4}$/.test(m)&&Galleria.History?d.show(m,b,!0):d._data[d._options.show]&&d.show(d._options.show),d._options.autoplay&&d.trigger(Galleria.PLAY)},error:function(){Galleria.raise("Stage width or height is too small to show the gallery. Traced measures: width:"+d._stageWidth+"px, height: "+d._stageHeight+"px.",!0)}})},load:function(b,c,d){var e=this,f=this._options;return this._data=[],this._thumbnails=[],this.$("thumbnails").empty(),typeof c=="function"&&(d=c,c=null),b=b||f.dataSource,c=c||f.dataSelector,d=d||f.dataConfig,/^function Object/.test(b.constructor)&&(b=[b]),b.constructor===Array?this.validate(b)?this._data=b:Galleria.raise("Load failed: JSON Array not valid."):(c+=",.video,.iframe",a(b).find(c).each(function(b,c){c=a(c);var f={},g=c.parent(),h=g.attr("href"),i=g.attr("rel");h&&(c[0].nodeName=="IMG"||c.hasClass("video"))&&x(h)?f.video=h:h&&c.hasClass("iframe")?f.iframe=h:f.image=f.big=h,i&&(f.big=i),a.each("big title description link layer".split(" "),function(a,b){c.data(b)&&(f[b]=c.data(b))}),e._data.push(a.extend({title:c.attr("title")||"",thumb:c.attr("src"),image:c.attr("src"),big:c.attr("src"),description:c.attr("alt")||"",link:c.attr("longdesc"),original:c.get(0)},f,d(c)))})),typeof f.dataSort=="function"?g.sort.call(this._data,f.dataSort):f.dataSort=="random"&&this._data.sort(function(){return Math.round(Math.random())-.5}),this.getDataLength()&&this._parseData().trigger(Galleria.DATA),this},_parseData:function(){var b=this,c;return a.each(this._data,function(d,e){c=b._data[d],"thumb"in e==0&&(c.thumb=e.image),!1 in e&&(c.big=e.image);if("video"in e){var f=x(e.video);if(f){c.iframe=w[f.provider].embed(f.id)+function(){if(typeof b._options[f.provider]=="object"){var c="?",d=[];return a.each(b._options[f.provider],function(a,b){d.push(a+"="+b)}),f.provider=="youtube"&&(d=["wmode=opaque"].concat(d)),c+d.join("&")}return""}(),delete c.video;if(!("thumb"in c)||!c.thumb)c.thumb=f.provider+":"+f.id}}}),this},destroy:function(){return this.$("target").data("galleria",null),this.$("container").unbind("galleria"),this.get("target").innerHTML=this._original.html,this.clearTimer(),F.removeFromArray(A,this),F.removeFromArray(z,this),this},splice:function(){var a=this,b=F.array(arguments);return c.setTimeout(function(){g.splice.apply(a._data,b),a._parseData()._createThumbnails()},2),a},push:function(){var a=this,b=F.array(arguments);return b.length==1&&b[0].constructor==Array&&(b=b[0]),c.setTimeout(function(){g.push.apply(a._data,b),a._parseData()._createThumbnails(b)},2),a},_getActive:function(){return this._controls.getActive()},validate:function(a){return!0},bind:function(a,b){return a=v(a),this.$("container").bind(a,this.proxy(b)),this},unbind:function(a){return a=v(a),this.$("container").unbind(a),this},trigger:function(b){return b=typeof b=="object"?a.extend(b,{scope:this}):{type:v(b),scope:this},this.$("container").trigger(b),this},addIdleState:function(a,b,c,d){return this._idle.add.apply(this._idle,F.array(arguments)),this},removeIdleState:function(a){return this._idle.remove.apply(this._idle,F.array(arguments)),this},enterIdleMode:function(){return this._idle.hide(),this},exitIdleMode:function(){return this._idle.showAll(),this},enterFullscreen:function(a){return this._fullscreen.enter.apply(this,F.array(arguments)),this},exitFullscreen:function(a){return this._fullscreen.exit.apply(this,F.array(arguments)),this},toggleFullscreen:function(a){return this._fullscreen[this.isFullscreen()?"exit":"enter"].apply(this,F.array(arguments)),this},bindTooltip:function(a,b){return this._tooltip.bind.apply(this._tooltip,F.array(arguments)),this},defineTooltip:function(a,b){return this._tooltip.define.apply(this._tooltip,F.array(arguments)),this},refreshTooltip:function(a){return this._tooltip.show.apply(this._tooltip,F.array(arguments)),this},openLightbox:function(){return this._lightbox.show.apply(this._lightbox,F.array(arguments)),this},closeLightbox:function(){return this._lightbox.hide.apply(this._lightbox,F.array(arguments)),this},getActiveImage:function(){return this._getActive().image||b},getActiveThumb:function(){return this._thumbnails[this._active].image||b},getMousePosition:function(a){return{x:a.pageX-this.$("container").offset().left,y:a.pageY-this.$("container").offset().top}},addPan:function(b){if(this._options.imageCrop===!1)return;b=a(b||this.getActiveImage());var c=this,d=b.width()/2,e=b.height()/2,f=parseInt(b.css("left"),10),g=parseInt(b.css("top"),10),h=f||0,i=g||0,j=0,k=0,l=!1,m=F.timestamp(),n=0,o=0,q=function(a,c,d){if(a>0){o=Math.round(Math.max(a*-1,Math.min(0,c)));if(n!==o){n=o;if(p===8)b.parent()["scroll"+d](o*-1);else{var e={};e[d.toLowerCase()]=o,b.css(e)}}}},r=function(a){if(F.timestamp()-m<50)return;l=!0,d=c.getMousePosition(a).x,e=c.getMousePosition(a).y},s=function(a){if(!l)return;j=b.width()-c._stageWidth,k=b.height()-c._stageHeight,f=d/c._stageWidth*j*-1,g=e/c._stageHeight*k*-1,h+=(f-h)/c._options.imagePanSmoothness,i+=(g-i)/c._options.imagePanSmoothness,q(k,i,"Top"),q(j,h,"Left")};return p===8&&(b.parent().scrollTop(i*-1).scrollLeft(h*-1),b.css({top:0,left:0})),this.$("stage").unbind("mousemove",r).bind("mousemove",r),this.addTimer("pan"+c._id,s,50,!0),this},proxy:function(a,b){return typeof a!="function"?n:(b=b||this,function(){return a.apply(b,F.array(arguments))})},removePan:function(){return this.$("stage").unbind("mousemove"),this.clearTimer("pan"+this._id),this},addElement:function(b){var c=this._dom;return a.each(F.array(arguments),function(a,b){c[b]=F.create("galleria-"+b)}),this},attachKeyboard:function(a){return this._keyboard.attach.apply(this._keyboard,F.array(arguments)),this},detachKeyboard:function(){return this._keyboard.detach.apply(this._keyboard,F.array(arguments)),this},appendChild:function(a,b){return this.$(a).append(this.get(b)||b),this},prependChild:function(a,b){return this.$(a).prepend(this.get(b)||b),this},remove:function(a){return this.$(F.array(arguments).join(",")).remove(),this},append:function(a){var b,c;for(b in a)if(a.hasOwnProperty(b))if(a[b].constructor===Array)for(c=0;a[b][c];c++)this.appendChild(b,a[b][c]);else this.appendChild(b,a[b]);return this},_scaleImage:function(b,c){b=b||this._controls.getActive();if(!b)return;var d=this,e,f=function(b){a(b.container).children(":first").css({top:Math.max(0,F.parseValue(b.image.style.top)),left:Math.max(0,F.parseValue(b.image.style.left)),width:F.parseValue(b.image.width),height:F.parseValue(b.image.height)})};return c=a.extend({width:this._stageWidth,height:this._stageHeight,crop:this._options.imageCrop,max:this._options.maxScaleRatio,min:this._options.minScaleRatio,margin:this._options.imageMargin,position:this._options.imagePosition,iframelimit:this._options.maxVideoSize},c),this._options.layerFollow&&this._options.imageCrop!==!0?typeof c.complete=="function"?(e=c.complete,c.complete=function(){e.call(b,b),f(b)}):c.complete=f:a(b.container).children(":first").css({top:0,left:0}),b.scale(c),this},updateCarousel:function(){return this._carousel.update(),this},resize:function(c,d){typeof c=="function"&&(d=c,c=b),c=a.extend({width:0,height:0},c);var e=this,f=this.$("container");return a.each(c,function(a,b){b||(f[a]("auto"),c[a]=e._getWH()[a])}),a.each(c,function(a,b){f[a](b)}),this.rescale(d)},rescale:function(a,c,d){var e=this;typeof a=="function"&&(d=a,a=b);var f=function(){e._stageWidth=a||e.$("stage").width(),e._stageHeight=c||e.$("stage").height(),e._scaleImage(),e._options.carousel&&e.updateCarousel(),e.trigger(Galleria.RESCALE),typeof d=="function"&&d.call(e)};return f.call(e),this},refreshImage:function(){return this._scaleImage(),this._options.imagePan&&this.addPan(),this},show:function(a,b,c){if(this._queue.length>3||a===!1||!this._options.queue&&this._queue.stalled)return;a=Math.max(0,Math.min(parseInt(a,10),this.getDataLength()-1)),b=typeof b!="undefined"?!!b:a<this.getIndex(),c=c||!1;if(!c&&Galleria.History){Galleria.History.set(a.toString());return}return this._active=a,g.push.call(this._queue,{index:a,rewind:b}),this._queue.stalled||this._show(),this},_show:function(){var d=this,e=this._queue[0],f=this.getData(e.index);if(!f)return;var h=f.iframe||(this.isFullscreen()&&"big"in f?f.big:f.image),i=this._controls.getActive(),j=this._controls.getNext(),k=j.isCached(h),l=this._thumbnails[e.index],m=function(){a(j.image).trigger("mouseup")},n=function(b,e,f,h,i){return function(){var j;G.active=!1,F.toggleQuality(e.image,d._options.imageQuality),d._layers[d._controls.active].innerHTML="",a(f.container).css({zIndex:0,opacity:0}).show(),f.isIframe&&a(f.container).find("iframe").remove(),d.$("container").toggleClass("iframe",!!b.iframe),a(e.container).css({zIndex:1,left:0,top:0}).show(),d._controls.swap(),d._options.imagePan&&d.addPan(e.image),(b.link||d._options.lightbox||d._options.clicknext)&&a(e.image).css({cursor:"pointer"}).bind("mouseup",function(a){if(typeof a.which=="number"&&a.which>1)return;if(d._options.clicknext&&!Galleria.TOUCH){d._options.pauseOnInteraction&&d.pause(),d.next();return}if(b.link){d._options.popupLinks?j=c.open(b.link,"_blank"):c.location.href=b.link;return}d._options.lightbox&&d.openLightbox()}),d._playCheck(),d.trigger({type:Galleria.IMAGE,index:h.index,imageTarget:e.image,thumbTarget:i.image,galleriaData:b}),g.shift.call(d._queue),d._queue.stalled=!1,d._queue.length&&d._show()}}(f,j,i,e,l);this._options.carousel&&this._options.carouselFollow&&this._carousel.follow(e.index);if(this._options.preload){var o,p,q=this.getNext(),r;try{for(p=this._options.preload;p>0;p--)o=new Galleria.Picture,r=d.getData(q),o.preload(this.isFullscreen()&&"big"in r?r.big:r.image),q=d.getNext(q)}catch(s){}}F.show(j.container),j.isIframe=!!f.iframe,a(d._thumbnails[e.index].container).addClass("active").siblings(".active").removeClass("active"),d.trigger({type:Galleria.LOADSTART,cached:k,index:e.index,rewind:e.rewind,imageTarget:j.image,thumbTarget:l.image,galleriaData:f}),d._queue.stalled=!0,j.load(h,function(c){var g=a(d._layers[1-d._controls.active]).html(f.layer||"").hide();d._scaleImage(c,{complete:function(c){"image"in i&&F.toggleQuality(i.image,!1),F.toggleQuality(c.image,!1),d.removePan(),d.setInfo(e.index),d.setCounter(e.index),f.layer&&(g.show(),(f.link||d._options.lightbox||d._options.clicknext)&&g.css("cursor","pointer").unbind("mouseup").mouseup(m));var h=d._options.transition;a.each({initial:i.image===null,touch:Galleria.TOUCH,fullscreen:d.isFullscreen()},function(a,c){if(c&&d._options[a+"Transition"]!==b)return h=d._options[a+"Transition"],!1});if(h in G.effects==0)n();else{var j={prev:i.container,next:c.container,rewind:e.rewind,speed:d._options.transitionSpeed||400};G.active=!0,G.init.call(d,h,j,n)}d.trigger({type:Galleria.LOADFINISH,cached:k,index:e.index,rewind:e.rewind,imageTarget:c.image,thumbTarget:d._thumbnails[e.index].image,galleriaData:d.getData(e.index)})}})})},getNext:function(a){return a=typeof a=="number"?a:this.getIndex(),a===this.getDataLength()-1?0:a+1},getPrev:function(a){return a=typeof a=="number"?a:this.getIndex(),a===0?this.getDataLength()-1:a-1},next:function(){return this.getDataLength()>1&&this.show(this.getNext(),!1),this},prev:function(){return this.getDataLength()>1&&this.show(this.getPrev(),!0),this},get:function(a){return a in this._dom?this._dom[a]:null},getData:function(a){return a in this._data?this._data[a]:this._data[this._active]},getDataLength:function(){return this._data.length},getIndex:function(){return typeof this._active=="number"?this._active:!1},getStageHeight:function(){return this._stageHeight},getStageWidth:function(){return this._stageWidth},getOptions:function(a){return typeof a=="undefined"?this._options:this._options[a]},setOptions:function(b,c){return typeof b=="object"?a.extend(this._options,b):this._options[b]=c,this},play:function(a){return this._playing=!0,this._playtime=a||this._playtime,this._playCheck(),this.trigger(Galleria.PLAY),this},pause:function(){return this._playing=!1,this.trigger(Galleria.PAUSE),this},playToggle:function(a){return this._playing?this.pause():this.play(a)},isPlaying:function(){return this._playing},isFullscreen:function(){return this._fullscreen.active},_playCheck:function(){var a=this,b=0,c=20,d=F.timestamp(),e="play"+this._id;if(this._playing){this.clearTimer(e);var f=function(){b=F.timestamp()-d;if(b>=a._playtime&&a._playing){a.clearTimer(e),a.next();return}a._playing&&(a.trigger({type:Galleria.PROGRESS,percent:Math.ceil(b/a._playtime*100),seconds:Math.floor(b/1e3),milliseconds:b}),a.addTimer(e,f,c))};a.addTimer(e,f,c)}},setPlaytime:function(a){return this._playtime=a,this},setIndex:function(a){return this._active=a,this},setCounter:function(a){typeof a=="number"?a++:typeof a=="undefined"&&(a=this.getIndex()+1),this.get("current").innerHTML=a;if(p){var b=this.$("counter"),c=b.css("opacity");parseInt(c,10)===1?F.removeAlpha(b[0]):this.$("counter").css("opacity",c)}return this},setInfo:function(b){var c=this,d=this.getData(b);return a.each(["title","description"],function(a,b){var e=c.$("info-"+b);d[b]?e[d[b].length?"show":"hide"]().html(d[b]):e.empty().hide()}),this},hasInfo:function(a){var b="title description".split(" "),c;for(c=0;b[c];c++)if(!!this.getData(a)[b[c]])return!0;return!1},jQuery:function(b){var c=this,d=[];a.each(b.split(","),function(b,e){e=a.trim(e),c.get(e)&&d.push(e)});var e=a(c.get(d.shift()));return a.each(d,function(a,b){e=e.add(c.get(b))}),e},$:function(a){return this.jQuery.apply(this,F.array(arguments))}},a.each(t,function(a,b){var c=/_/.test(b)?b.replace(/_/g,""):b;Galleria[b.toUpperCase()]="galleria."+c}),a.extend(Galleria,{IE9:p===9,IE8:p===8,IE7:p===7,IE6:p===6,IE:p,WEBKIT:/webkit/.test(l),CHROME:/chrome/.test(l),SAFARI:/safari/.test(l)&&!/chrome/.test(l),QUIRK:p&&d.compatMode&&d.compatMode==="BackCompat",MAC:/mac/.test(navigator.platform.toLowerCase()),OPERA:!!c.opera,IPHONE:/iphone/.test(l),IPAD:/ipad/.test(l),ANDROID:/android/.test(l),TOUCH:"ontouchstart"in d}),Galleria.addTheme=function(b){b.name||Galleria.raise("No theme name specified"),typeof b.defaults!="object"?b.defaults={}:b.defaults=u(b.defaults);var d=!1,e;return typeof b.css=="string"?(a("link").each(function(a,c){e=new RegExp(b.css);if(e.test(c.href))return d=!0,E(b),!1}),d||a("script").each(function(a,f){e=new RegExp("galleria\\."+b.name.toLowerCase()+"\\."),e.test(f.src)&&(d=f.src.replace(/[^\/]*$/,"")+b.css,c.setTimeout(function(){F.loadCSS(d,"galleria-theme",function(){E(b)})},1))}),d||Galleria.raise("No theme CSS loaded")):E(b),b},Galleria.loadTheme=function(b,d){if(a("script").filter(function(){return a(this).attr("src")==b}).length)return;var e=!1,f;return a(c).load(function(){e||(f=c.setTimeout(function(){!e&&!Galleria.theme&&Galleria.raise("Galleria had problems loading theme at "+b+". Please check theme path or load manually.",!0)},2e4))}),Galleria.unloadTheme(),F.loadScript(b,function(){e=!0,c.clearTimeout(f)}),Galleria},Galleria.unloadTheme=function(){return typeof Galleria.theme=="object"&&(a("script").each(function(b,c){(new RegExp("galleria\\."+Galleria.theme.name+"\\.")).test(c.src)&&a(c).remove()}),Galleria.theme=b),Galleria},Galleria.get=function(a){if(!!A[a])return A[a];if(typeof a!="number")return A;Galleria.raise("Gallery index "+a+" not found")},Galleria.configure=function(b,c){var d={};return typeof b=="string"&&c?(d[b]=c,b=d):a.extend(d,b),Galleria.configure.options=d,a.each(Galleria.get(),function(a,b){b.setOptions(d)}),Galleria},Galleria.configure.options={},Galleria.on=function(b,c){if(!b)return;c=c||n;var d=b+c.toString().replace(/\s/g,"")+F.timestamp();return a.each(Galleria.get(),function(a,e){e._binds.push(d),e.bind(b,c)}),Galleria.on.binds.push({type:b,callback:c,hash:d}),Galleria},Galleria.on.binds=[],Galleria.run=function(b,c){return a.isFunction(c)&&(c={extend:c}),a(b||"#galleria").galleria(c),Galleria},Galleria.addTransition=function(a,b){return G.effects[a]=b,Galleria},Galleria.utils=F,Galleria.log=function(){var b=F.array(arguments);if(!("console"in c&&"log"in c.console))return c.alert(b.join("<br>"));try{return c.console.log.apply(c.console,b)}catch(d){a.each(b,function(){c.console.log(this)})}},Galleria.ready=function(b){return typeof b!="function"?Galleria:(a.each(z,function(a,c){b.call(c,c._options)}),Galleria.ready.callbacks.push(b),Galleria)},Galleria.ready.callbacks=[],Galleria.raise=function(b,c){var d=c?"Fatal error":"Error",e=this,f={color:"#fff",position:"absolute",top:0,left:0,zIndex:1e5},g=function(b){var e='<div class="gal-warning" style="padding:4px;margin:0 0 2px;background:#'+(c?"811":"222")+';">'+(c?"<strong>"+d+": </strong>":"")+b+"</div>";a.each(A,function(){var a=this.$("errors"),b=this.$("target");a.length||(b.css("position","relative"),a=this.addElement("errors").appendChild("target","errors").$("errors").css(f)),a.append(e)}),A.length||a("<div>").css(a.extend(f,{position:"fixed"})).append(e).appendTo(q().body)};if(i){g(b);if(c)throw new Error(d+": "+b)}else if(c){if(B)return;B=!0,c=!1,g("Gallery could not load.")}},Galleria.version=h,Galleria.requires=function(a,b){return b=b||"You need to upgrade Galleria to version "+a+" to use one or more components.",Galleria.version<a&&Galleria.raise(b,!0),Galleria},Galleria.Picture=function(b){this.id=b||null,this.image=null,this.container=F.create("galleria-image"),a(this.container).css({overflow:"hidden",position:"relative"}),this.original={width:0,height:0},this.ready=!1,this.isIframe=!1},Galleria.Picture.prototype={cache:{},show:function(){F.show(this.image)},hide:function(){F.moveOut(this.image)},clear:function(){this.image=null},isCached:function(a){return!!this.cache[a]},preload:function(b){a(new Image).load(function(a,b){return function(){b[a]=a}}(b,this.cache)).attr("src",b)},load:function(b,d,e){typeof d=="function"&&(e=d,d=null);if(this.isIframe){var f="if"+(new Date).getTime();return this.image=a("<iframe>",{src:b,frameborder:0,id:f,allowfullscreen:!0,css:{visibility:"hidden"}})[0],a(this.container).find("iframe,img").remove(),this.container.appendChild(this.image),a("#"+f).load(function(b,d){return function(){c.setTimeout(function(){a(b.image).css("visibility","visible"),typeof d=="function"&&d.call(b,b)},10)}}(this,e)),this.container}this.image=new Image,Galleria.IE8&&a(this.image).css("filter","inherit");var g=0,h=!1,i=!1,j=a(this.container),l=a(this.image),m=function(){h?k?a(this).attr("src",k):Galleria.raise("Image not found: "+b):(h=!0,c.setTimeout(function(a,b){return function(){a.attr("src",b+"?"+F.timestamp())}}(a(this),b),50))},n=function(b,e,f){return function(){var g=function(){a(this).unbind("load"),b.original=d||{height:this.height,width:this.width},b.container.appendChild(this),b.cache[f]=f,typeof e=="function"&&c.setTimeout(function(){e.call(b,b)},1)};!this.width||!this.height?c.setTimeout(function(b){return function(){b.width&&b.height?g.call(b):i?Galleria.raise("Could not extract width/height from image: "+b.src+". Traced measures: width:"+b.width+"px, height: "+b.height+"px."):(a(new Image).load(n).attr("src",b.src),i=!0)}}(this),2):g.call(this)}}(this,e,b);return j.find("iframe,img").remove(),l.css("display","block"),F.hide(this.image),a.each("minWidth minHeight maxWidth maxHeight".split(" "),function(a,b){l.css(b,/min/.test(b)?"0":"none")}),l.load(n).error(m).attr("src",b),this.container},scale:function(c){var d=this;c=a.extend({width:0,height:0,min:b,max:b,margin:0,complete:n,position:"center",crop:!1,canvas:!1,iframelimit:b},c);if(this.isIframe){var e=c.width,f=c.height,g,h;if(c.iframelimit){var i=Math.min(c.iframelimit/e,c.iframelimit/f);i<1?(g=e*i,h=f*i,a(this.image).css({top:f/2-h/2,left:e/2-g/2,position:"absolute"})):a(this.image).css({top:0,left:0})}a(this.image).width(g||e).height(h||f).removeAttr("width").removeAttr("height"),a(this.container).width(e).height(f),c.complete.call(d,d);try{this.image.contentWindow&&a(this.image.contentWindow).trigger("resize")}catch(j){}return this.container}if(!this.image)return this.container;var k,l,m=a(d.container),o;return F.wait({until:function(){return k=c.width||m.width()||F.parseValue(m.css("width")),l=c.height||m.height()||F.parseValue(m.css("height")),k&&l},success:function(){var b=(k-c.margin*2)/d.original.width,e=(l-c.margin*2)/d.original.height,f=Math.min(b,e),g=Math.max(b,e),h={"true":g,width:b,height:e,"false":f,landscape:d.original.width>d.original.height?g:f,portrait:d.original.width<d.original.height?g:f},i=h[c.crop.toString()],j="";c.max&&(i=Math.min(c.max,i)),c.min&&(i=Math.max(c.min,i)),a.each(["width","height"],function(b,c){a(d.image)[c](d[c]=d.image[c]=Math.round(d.original[c]*i))}),a(d.container).width(k).height(l),c.canvas&&C&&(C.elem.width=d.width,C.elem.height=d.height,j=d.image.src+":"+d.width+"x"+d.height,d.image.src=C.cache[j]||function(a){C.context.drawImage(d.image,0,0,d.original.width*i,d.original.height*i);try{return o=C.elem.toDataURL(),C.length+=o.length,C.cache[a]=o,o}catch(b){return d.image.src}}(j));var m={},n={},p=function(b,c,e){var f=0;if(/\%/.test(b)){var g=parseInt(b,10)/100,h=d.image[c]||a(d.image)[c]();f=Math.ceil(h*-1*g+e*g)}else f=F.parseValue(b);return f},q={top:{top:0},left:{left:0},right:{left:"100%"},bottom:{top:"100%"}};a.each(c.position.toLowerCase().split(" "),function(a,b){b==="center"&&(b="50%"),m[a?"top":"left"]=b}),a.each(m,function(b,c){q.hasOwnProperty(c)&&a.extend(n,q[c])}),m=m.top?a.extend(m,n):n,m=a.extend({top:"50%",left:"50%"},m),a(d.image).css({position:"absolute",top:p(m.top,"height",l),left:p(m.left,"width",k)}),d.show(),d.ready=!0,c.complete.call(d,d)},error:function(){Galleria.raise("Could not scale image: "+d.image.src)},timeout:1e3}),this}},a.extend(a.easing,{galleria:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b+c:d/2*((b-=2)*b*b+2)+c},galleriaIn:function(a,b,c,d,e){return d*(b/=e)*b+c},galleriaOut:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c}}),a.fn.galleria=function(b){var c=this.selector;return a(this).length?this.each(function(){a.data(this,"galleria")&&(a.data(this,"galleria").destroy(),a(this).find("*").hide()),a.data(this,"galleria",(new Galleria).init(this,b))}):(a(function(){a(c).length?a(c).galleria(b):Galleria.utils.wait({until:function(){return a(c).length},success:function(){a(c).galleria(b)},error:function(){Galleria.raise('Init failed: Galleria could not find the element "'+c+'".')},timeout:5e3})}),this)}})(jQuery);



/* Tweet.js-Mod
https://github.com/StanScates/Tweet.js-Mod */


(function(e){if(typeof define==="function"&&define.amd)define(["jquery"],e);else e(jQuery)})(function(e){e.fn.tweet=function(t){function i(e,t){if(typeof e==="string"){var n=e;for(var r in t){var i=t[r];n=n.replace(new RegExp("{"+r+"}","g"),i===null?"":i)}return n}else return e(t)}function s(t,n){return function(){var r=[];this.each(function(){r.push(this.replace(t,n))});return e(r)}}function o(e){return e.replace(/</g,"<").replace(/>/g,"^>")}function u(e,t){return e.replace(r,function(e){var n=/^[a-z]+:/i.test(e)?e:"http://"+e;var r=e;for(var i=0;i<t.length;++i){var s=t[i];if(s.url==n&&s.expanded_url){n=s.expanded_url;r=s.display_url;break}}return'<a href="'+o(n)+'">'+o(r)+"</a>"})}function a(e){return Date.parse(e.replace(/^([a-z]{3})( [a-z]{3} \d\d?)(.*)( \d{4})$/i,"$1,$2$4$3"))}function f(e){var t=arguments.length>1?arguments[1]:new Date;var n=parseInt((t.getTime()-e)/1e3,10);var r="";if(n<1){r="just now"}else if(n<60){r=n+" seconds ago"}else if(n<120){r="about a minute ago"}else if(n<45*60){r="about "+parseInt(n/60,10).toString()+" minutes ago"}else if(n<2*60*60){r="about an hour ago"}else if(n<24*60*60){r="about "+parseInt(n/3600,10).toString()+" hours ago"}else if(n<48*60*60){r="about a day ago"}else{r="about "+parseInt(n/86400,10).toString()+" days ago"}return r}function l(e){if(e.match(/^(@([A-Za-z0-9-_]+)) .*/i)){return n.auto_join_text_reply}else if(e.match(r)){return n.auto_join_text_url}else if(e.match(/^((\w+ed)|just) .*/im)){return n.auto_join_text_ed}else if(e.match(/^(\w*ing) .*/i)){return n.auto_join_text_ing}else{return n.auto_join_text_default}}function c(){var t=n.modpath,r=n.fetch===null?n.count:n.fetch,i={include_entities:1};if(n.list){return{host:n.twitter_api_url,url:"/1.1/lists/statuses.json",parameters:e.extend({},i,{list_id:n.list_id,slug:n.list,owner_screen_name:n.username,page:n.page,count:r,include_rts:n.retweets?1:0})}}else if(n.favorites){return{host:n.twitter_api_url,url:"/1.1/favorites/list.json",parameters:e.extend({},i,{list_id:n.list_id,screen_name:n.username,page:n.page,count:r})}}else if(n.query===null&&n.username.length===1){return{host:n.twitter_api_url,url:"/1.1/statuses/user_timeline.json",parameters:e.extend({},i,{screen_name:n.username,page:n.page,count:r,include_rts:n.retweets?1:0})}}else{var s=n.query||"from:"+n.username.join(" OR from:");return{host:n.twitter_search_url,url:"/search.json",parameters:e.extend({},i,{page:n.page,q:s,rpp:r})}}}function h(e,t){if(t){return"user"in e?e.user.profile_image_url_https:h(e,false).replace(/^http:\/\/[a-z0-9]{1,3}\.twimg\.com\//,"https://s3.amazonaws.com/twitter_production/")}else{return e.profile_image_url||e.user.profile_image_url}}function p(t){var r={};r.item=t;r.source=t.source;r.name=t.from_user_name||t.user.name;r.screen_name=t.from_user||t.user.screen_name;r.avatar_size=n.avatar_size;r.avatar_url=h(t,document.location.protocol==="https:");r.retweet=typeof t.retweeted_status!="undefined";r.tweet_time=a(t.created_at);r.join_text=n.join_text=="auto"?l(t.text):n.join_text;r.tweet_id=t.id_str;r.twitter_base="http://"+n.twitter_url+"/";r.user_url=r.twitter_base+r.screen_name;r.tweet_url=r.user_url+"/status/"+r.tweet_id;r.reply_url=r.twitter_base+"intent/tweet?in_reply_to="+r.tweet_id;r.retweet_url=r.twitter_base+"intent/retweet?tweet_id="+r.tweet_id;r.favorite_url=r.twitter_base+"intent/favorite?tweet_id="+r.tweet_id;r.retweeted_screen_name=r.retweet&&t.retweeted_status.user.screen_name;r.tweet_relative_time=f(r.tweet_time);r.entities=t.entities?(t.entities.urls||[]).concat(t.entities.media||[]):[];r.tweet_raw_text=r.retweet?"RT @"+r.retweeted_screen_name+" "+t.retweeted_status.text:t.text;r.tweet_text=e([u(r.tweet_raw_text,r.entities)]).linkUser().linkHash()[0];r.tweet_text_fancy=e([r.tweet_text]).makeHeart()[0];r.user=i('<a class="tweet_user" href="{user_url}">{screen_name}</a>',r);r.join=n.join_text?i(' <span class="tweet_join">{join_text}</span> ',r):" ";r.avatar=r.avatar_size?i('<a class="tweet_avatar" href="{user_url}"><img src="{avatar_url}" height="{avatar_size}" width="{avatar_size}" alt="{screen_name}\'s avatar" title="{screen_name}\'s avatar" border="0"/></a>',r):"";r.time=i('<span class="tweet_time"><a href="{tweet_url}" title="view tweet on twitter">{tweet_relative_time}</a></span>',r);r.text=i('<span class="tweet_text">{tweet_text_fancy}</span>',r);r.reply_action=i('<a class="tweet_action tweet_reply" href="{reply_url}">reply</a>',r);r.retweet_action=i('<a class="tweet_action tweet_retweet" href="{retweet_url}">retweet</a>',r);r.favorite_action=i('<a class="tweet_action tweet_favorite" href="{favorite_url}">favorite</a>',r);return r}var n=e.extend({modpath:"/twitter/",username:null,list_id:null,list:null,favorites:false,query:null,avatar_size:null,count:3,fetch:null,page:1,retweets:true,intro_text:null,outro_text:null,join_text:null,auto_join_text_default:"i said,",auto_join_text_ed:"i",auto_join_text_ing:"i am",auto_join_text_reply:"i replied to",auto_join_text_url:"i was looking at",loading_text:null,refresh_interval:null,twitter_url:"twitter.com",twitter_api_url:"api.twitter.com",twitter_search_url:"search.twitter.com",template:"{avatar}{time}{join}{text}",comparator:function(e,t){return t["tweet_time"]-e["tweet_time"]},filter:function(e){return true}},t);var r=/\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/gi;e.extend({tweet:{t:i}});e.fn.extend({linkUser:s(/(^|[\W])@(\w+)/gi,'$1<span class="at">@</span><a href="http://'+n.twitter_url+'/$2">$2</a>'),linkHash:s(/(?:^| )[\#]+([\w\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u00ff\u0600-\u06ff]+)/gi,' <a href="http://'+n.twitter_search_url+"/search?q=&tag=$1&lang=all"+(n.username&&n.username.length==1&&!n.list?"&from="+n.username.join("%2BOR%2B"):"")+'" class="tweet_hashtag">#$1</a>'),makeHeart:s(/(<)+[3]/gi,"<tt class='heart'>&#x2665;</tt>")});return this.each(function(t,r){var s=e('<ul class="tweet_list">');var o='<p class="tweet_intro">'+n.intro_text+"</p>";var u='<p class="tweet_outro">'+n.outro_text+"</p>";var a=e('<p class="loading">'+n.loading_text+"</p>");if(n.username&&typeof n.username=="string"){n.username=[n.username]}e(r).unbind("tweet:load").bind("tweet:load",function(){if(n.loading_text)e(r).empty().append(a);e.ajax({dataType:"json",type:"post",async:false,url:n.modpath||"/twitter/",data:{request:c()},success:function(t,a){if(t.message){console.log(t.message)}var f=t.response;e(r).empty().append(s);if(n.intro_text)s.before(o);s.empty();if(f.statuses!==undefined){resp=f.statuses}else if(f.results!==undefined){resp=f.results}else{resp=f}var l=e.map(resp,p);l=e.grep(l,n.filter).sort(n.comparator).slice(0,n.count);s.append(e.map(l,function(e){return"<li>"+i(n.template,e)+"</li>"}).join("")).children("li:first").addClass("tweet_first").end().children("li:odd").addClass("tweet_even").end().children("li:even").addClass("tweet_odd");if(n.outro_text)s.after(u);e(r).trigger("loaded").trigger(l?"empty":"full");if(n.refresh_interval){window.setTimeout(function(){e(r).trigger("tweet:load")},1e3*n.refresh_interval)}}})}).trigger("tweet:load")})}})


/* Vimeo Froogaloop 
https://github.com/vimeo/player-api/tree/master/javascript */

var Froogaloop=function(){function e(a){return new e.fn.init(a)}function h(a,c,b){if(!b.contentWindow.postMessage)return!1;var f=b.getAttribute("src").split("?")[0],a=JSON.stringify({method:a,value:c});"//"===f.substr(0,2)&&(f=window.location.protocol+f);b.contentWindow.postMessage(a,f)}function j(a){var c,b;try{c=JSON.parse(a.data),b=c.event||c.method}catch(f){}"ready"==b&&!i&&(i=!0);if(a.origin!=k)return!1;var a=c.value,e=c.data,g=""===g?null:c.player_id;c=g?d[g][b]:d[b];b=[];if(!c)return!1;void 0!==
a&&b.push(a);e&&b.push(e);g&&b.push(g);return 0<b.length?c.apply(null,b):c.call()}function l(a,c,b){b?(d[b]||(d[b]={}),d[b][a]=c):d[a]=c}var d={},i=!1,k="";e.fn=e.prototype={element:null,init:function(a){"string"===typeof a&&(a=document.getElementById(a));this.element=a;a=this.element.getAttribute("src");"//"===a.substr(0,2)&&(a=window.location.protocol+a);for(var a=a.split("/"),c="",b=0,f=a.length;b<f;b++){if(3>b)c+=a[b];else break;2>b&&(c+="/")}k=c;return this},api:function(a,c){if(!this.element||
!a)return!1;var b=this.element,f=""!==b.id?b.id:null,d=!c||!c.constructor||!c.call||!c.apply?c:null,e=c&&c.constructor&&c.call&&c.apply?c:null;e&&l(a,e,f);h(a,d,b);return this},addEvent:function(a,c){if(!this.element)return!1;var b=this.element,d=""!==b.id?b.id:null;l(a,c,d);"ready"!=a?h("addEventListener",a,b):"ready"==a&&i&&c.call(null,d);return this},removeEvent:function(a){if(!this.element)return!1;var c=this.element,b;a:{if((b=""!==c.id?c.id:null)&&d[b]){if(!d[b][a]){b=!1;break a}d[b][a]=null}else{if(!d[a]){b=
!1;break a}d[a]=null}b=!0}"ready"!=a&&b&&h("removeEventListener",a,c)}};e.fn.init.prototype=e.fn;window.addEventListener?window.addEventListener("message",j,!1):window.attachEvent("onmessage",j);return window.Froogaloop=window.$f=e}();



/*
 * ******************************************************************************
 *  jquery.mb.components
 *  file: jquery.mb.YTPlayer.js
 *
 *  Copyright (c) 2001-2013. Matteo Bicocchi (Pupunzi);
 *  Open lab srl, Firenze - Italy
 *  email: matteo@open-lab.com
 *  site:   http://pupunzi.com
 *  blog:   http://pupunzi.open-lab.com
 *  http://open-lab.com
 *
 *  Licences: MIT, GPL
 *  http://www.opensource.org/licenses/mit-license.php
 *  http://www.gnu.org/licenses/gpl.html
 *
 *  last modified: 26/05/13 16.47
 *  *****************************************************************************
 */

/*Browser detection patch*/
(function(){if(!(8>jQuery.fn.jquery.split(".")[1])){jQuery.browser={};jQuery.browser.mozilla=!1;jQuery.browser.webkit=!1;jQuery.browser.opera=!1;jQuery.browser.msie=!1;var a=navigator.userAgent;jQuery.browser.name=navigator.appName;jQuery.browser.fullVersion=""+parseFloat(navigator.appVersion);jQuery.browser.majorVersion=parseInt(navigator.appVersion,10);var c,b;if(-1!=(b=a.indexOf("Opera"))){if(jQuery.browser.opera=!0,jQuery.browser.name="Opera",jQuery.browser.fullVersion=a.substring(b+6),-1!=(b= a.indexOf("Version")))jQuery.browser.fullVersion=a.substring(b+8)}else if(-1!=(b=a.indexOf("MSIE")))jQuery.browser.msie=!0,jQuery.browser.name="Microsoft Internet Explorer",jQuery.browser.fullVersion=a.substring(b+5);else if(-1!=(b=a.indexOf("Chrome")))jQuery.browser.webkit=!0,jQuery.browser.name="Chrome",jQuery.browser.fullVersion=a.substring(b+7);else if(-1!=(b=a.indexOf("Safari"))){if(jQuery.browser.webkit=!0,jQuery.browser.name="Safari",jQuery.browser.fullVersion=a.substring(b+7),-1!=(b=a.indexOf("Version")))jQuery.browser.fullVersion= a.substring(b+8)}else if(-1!=(b=a.indexOf("Firefox")))jQuery.browser.mozilla=!0,jQuery.browser.name="Firefox",jQuery.browser.fullVersion=a.substring(b+8);else if((c=a.lastIndexOf(" ")+1)<(b=a.lastIndexOf("/")))jQuery.browser.name=a.substring(c,b),jQuery.browser.fullVersion=a.substring(b+1),jQuery.browser.name.toLowerCase()==jQuery.browser.name.toUpperCase()&&(jQuery.browser.name=navigator.appName);if(-1!=(a=jQuery.browser.fullVersion.indexOf(";")))jQuery.browser.fullVersion=jQuery.browser.fullVersion.substring(0, a);if(-1!=(a=jQuery.browser.fullVersion.indexOf(" ")))jQuery.browser.fullVersion=jQuery.browser.fullVersion.substring(0,a);jQuery.browser.majorVersion=parseInt(""+jQuery.browser.fullVersion,10);isNaN(jQuery.browser.majorVersion)&&(jQuery.browser.fullVersion=""+parseFloat(navigator.appVersion),jQuery.browser.majorVersion=parseInt(navigator.appVersion,10));jQuery.browser.version=jQuery.browser.majorVersion}})(jQuery);

/*******************************************************************************
 * jQuery.mb.components: jquery.mb.CSSAnimate
 ******************************************************************************/

jQuery.fn.CSSAnimate=function(a,b,k,l,f){return this.each(function(){var c=jQuery(this);if(0!==c.length&&a){"function"==typeof b&&(f=b,b=jQuery.fx.speeds._default);"function"==typeof k&&(f=k,k=0);"function"==typeof l&&(f=l,l="cubic-bezier(0.65,0.03,0.36,0.72)");if("string"==typeof b)for(var j in jQuery.fx.speeds)if(b==j){b=jQuery.fx.speeds[j];break}else b=null;if(jQuery.support.transition){var e="",h="transitionEnd";jQuery.browser.webkit?(e="-webkit-",h="webkitTransitionEnd"):jQuery.browser.mozilla? (e="-moz-",h="transitionend"):jQuery.browser.opera?(e="-o-",h="otransitionend"):jQuery.browser.msie&&(e="-ms-",h="msTransitionEnd");j=[];for(d in a){var g=d;"transform"===g&&(g=e+"transform",a[g]=a[d],delete a[d]);"transform-origin"===g&&(g=e+"transform-origin",a[g]=a[d],delete a[d]);j.push(g);c.css(g)||c.css(g,0)}d=j.join(",");c.css(e+"transition-property",d);c.css(e+"transition-duration",b+"ms");c.css(e+"transition-delay",k+"ms");c.css(e+"transition-timing-function",l);c.css(e+"backface-visibility", "hidden");setTimeout(function(){c.css(a)},0);setTimeout(function(){c.called||!f?c.called=!1:f()},b+20);c.on(h,function(a){c.off(h);c.css(e+"transition","");a.stopPropagation();"function"==typeof f&&(c.called=!0,f());return!1})}else{for(var d in a)"transform"===d&&delete a[d],"transform-origin"===d&&delete a[d],"auto"===a[d]&&delete a[d];if(!f||"string"===typeof f)f="linear";c.animate(a,b,f)}}})}; jQuery.fn.CSSAnimateStop=function(){var a="",b="transitionEnd";jQuery.browser.webkit?(a="-webkit-",b="webkitTransitionEnd"):jQuery.browser.mozilla?(a="-moz-",b="transitionend"):jQuery.browser.opera?(a="-o-",b="otransitionend"):jQuery.browser.msie&&(a="-ms-",b="msTransitionEnd");jQuery(this).css(a+"transition","");jQuery(this).off(b)}; jQuery.support.transition=function(){var a=(document.body||document.documentElement).style;return void 0!==a.transition||void 0!==a.WebkitTransition||void 0!==a.MozTransition||void 0!==a.MsTransition||void 0!==a.OTransition}();

/*
 * Metadata - jQuery plugin for parsing metadata from elements
 * Copyright (c) 2006 John Resig, Yehuda Katz, Jörn Zaefferer, Paul McLanahan
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */

(function(c){c.extend({metadata:{defaults:{type:"class",name:"metadata",cre:/({.*})/,single:"metadata"},setType:function(b,c){this.defaults.type=b;this.defaults.name=c},get:function(b,f){var d=c.extend({},this.defaults,f);d.single.length||(d.single="metadata");var a=c.data(b,d.single);if(a)return a;a="{}";if("class"==d.type){var e=d.cre.exec(b.className);e&&(a=e[1])}else if("elem"==d.type){if(!b.getElementsByTagName)return;e=b.getElementsByTagName(d.name);e.length&&(a=c.trim(e[0].innerHTML))}else void 0!= b.getAttribute&&(e=b.getAttribute(d.name))&&(a=e);0>a.indexOf("{")&&(a="{"+a+"}");a=eval("("+a+")");c.data(b,d.single,a);return a}}});c.fn.metadata=function(b){return c.metadata.get(this[0],b)}})(jQuery);

/***************************************************************************************/
if(typeof ytp != "object")
    ytp ={};

String.prototype.getVideoID=function(){
    var movieURL;
    if(this.substr(0,16)=="http://youtu.be/"){
        movieURL= this.replace("http://youtu.be/","");
    }else if(this.indexOf("http")>-1){
        movieURL = this.match(/[\\?&]v=([^&#]*)/)[1];
    }else{
        movieURL = this
    }
    return movieURL;
};

var isDevice = 'ontouchstart' in window;

function onYouTubePlayerAPIReady() {
    if(ytp.YTAPIReady)
        return;

    ytp.YTAPIReady=true;
    jQuery(document).trigger("YTAPIReady");
}

(function (jQuery) {

    jQuery.mbYTPlayer = {
        name           : "jquery.mb.YTPlayer",
        version        : "2.5.0",
        author         : "Matteo Bicocchi",
        defaults       : {
            containment            : "body",
            ratio                  : "16/9",
            showYTLogo             : false,
            videoURL               : null,
            startAt                : 0,
            autoPlay               : true,
            vol                    : 100,
            addRaster              : false,
            opacity                : 1,
            quality                : "default",
            mute                   : true,
            loop                   : true,
            showControls           : false,
            showAnnotations        : false,
            printUrl               : true,
            stopMovieOnClick       :false,
            onReady                : function (event) {},
            onStateChange          : function (event) {},
            onPlaybackQualityChange: function (event) {},
            onError                : function (event) {}
        },
        //todo: use @font-face instead
        controls       : {
            play  : "<img src='images/player/play.png'>",
            pause : "<img src='images/player/pause.png'>",
            mute  : "<img src='images/player/mute.png'>",
            unmute: "<img src='images/player/unmute.png'>",
            onlyYT: "<img src='images/player/onlyVideo.png'>",
            ytLogo: "<img src='images/player/YTLogo.png'>"
        },
        rasterImg      : "images/player/raster.png",
        rasterImgRetina: "images/player/raster@2x.png",

        buildPlayer: function (options) {

            return this.each(function () {
                var YTPlayer = this;
                var $YTPlayer = jQuery(YTPlayer);

                YTPlayer.loop = 0;
                YTPlayer.opt = {};
                var property = {};
                if (jQuery.metadata) {
                    jQuery.metadata.setType("class");
                    property = $YTPlayer.metadata();
                }

                if (jQuery.isEmptyObject(property))
                    property = $YTPlayer.data("property") && typeof $YTPlayer.data("property") == "string" ? eval('(' + $YTPlayer.data("property") + ')') : $YTPlayer.data("property");

                jQuery.extend(YTPlayer.opt, jQuery.mbYTPlayer.defaults, options, property);


                if (!$YTPlayer.attr("id"))
                    $YTPlayer.attr("id", "id_" + new Date().getTime());

                YTPlayer.opt.id = YTPlayer.id;
                YTPlayer.isAlone = false;

                /*to maintain back compatibility
                 * ***********************************************************/
                if (YTPlayer.opt.isBgndMovie)
                    YTPlayer.opt.containment = "body";

                if (YTPlayer.opt.isBgndMovie && YTPlayer.opt.isBgndMovie.mute != undefined)
                    YTPlayer.opt.mute = YTPlayer.opt.isBgndMovie.mute;

                if (!YTPlayer.opt.videoURL)
                    YTPlayer.opt.videoURL = $YTPlayer.attr("href");

                /************************************************************/

                var playerID = "mbYTP_" + YTPlayer.id;
                var videoID = this.opt.videoURL ? this.opt.videoURL.getVideoID() : $YTPlayer.attr("href") ? $YTPlayer.attr("href").getVideoID() : false;
                YTPlayer.videoID = videoID;


                YTPlayer.opt.showAnnotations = (YTPlayer.opt.showAnnotations) ? '0' : '3';
                var playerVars = { 'autoplay': 0, 'modestbranding': 1, 'controls': 0, 'showinfo': 0, 'rel': 0, 'enablejsapi': 1, 'version': 3, 'playerapiid': playerID, 'origin': '*', 'allowfullscreen': true, 'wmode': "transparent", 'iv_load_policy': YTPlayer.opt.showAnnotations};

                var canPlayHTML5 = false;
                var v = document.createElement('video');
                if (v.canPlayType) {
                    canPlayHTML5 = true;
                }

                if (canPlayHTML5) // && !jQuery.browser.msie
                    jQuery.extend(playerVars, {'html5': 1});

                if(jQuery.browser.msie && jQuery.browser.version < 9 ){
                    this.opt.opacity = 1;
                }

                var playerBox = jQuery("<div/>").attr("id", playerID).addClass("playerBox");
                var overlay = jQuery("<div/>").css({position: "absolute", top: 0, left: 0, width: "100%", height: "100%"}).addClass("YTPOverlay"); //YTPlayer.isBackground ? "fixed" :

                YTPlayer.opt.containment = YTPlayer.opt.containment == "self" ? jQuery(this) : jQuery(YTPlayer.opt.containment);

                YTPlayer.isBackground = YTPlayer.opt.containment.get(0).tagName.toLowerCase() == "body";

                if (isDevice && YTPlayer.isBackground){
                    $YTPlayer.hide();
                    return;
                }

                if (YTPlayer.opt.addRaster) {
                    var retina = (window.retina || window.devicePixelRatio > 1);
                    overlay.addClass(retina ? "raster retina" : "raster");
                }else{
                    overlay.removeClass("raster retina");
                }

                var wrapper = jQuery("<div/>").addClass("mbYTP_wrapper").attr("id", "wrapper_" + playerID);
                wrapper.css({position: "absolute", zIndex: 0, minWidth: "100%", minHeight: "100%",left:0, top:0, overflow: "hidden", opacity: 0});
                playerBox.css({position: "absolute", zIndex: 0, width: "100%", height: "100%", top: 0, left: 0, overflow: "hidden", opacity: this.opt.opacity});
                wrapper.append(playerBox);

                if (YTPlayer.isBackground && ytp.isInit)
                    return;

                YTPlayer.opt.containment.children().each(function () {
                    if (jQuery(this).css("position") == "static")
                        jQuery(this).css("position", "relative");
                });

                if (YTPlayer.isBackground) {
                    jQuery("body").css({position: "relative", minWidth: "100%", minHeight: "100%", zIndex: 1, boxSizing: "border-box"});
                    wrapper.css({position: "fixed", top: 0, left: 0, zIndex: 0});
                    $YTPlayer.hide();
                    YTPlayer.opt.containment.prepend(wrapper);
                } else
                    YTPlayer.opt.containment.prepend(wrapper);

                YTPlayer.wrapper = wrapper;

                playerBox.css({opacity: 1});

                if (!isDevice){
                    playerBox.after(overlay);
                    YTPlayer.overlay = overlay;
                }


                if(!YTPlayer.isBackground){
                    overlay.on("mouseenter",function(){
                        $YTPlayer.find(".mb_YTVPBar").addClass("visible");
                    }).on("mouseleave",function(){
                                $YTPlayer.find(".mb_YTVPBar").removeClass("visible");
                            })
                }

                // add YT API to the header
                //jQuery("#YTAPI").remove();

                if(!ytp.YTAPIReady){
                    var tag = document.createElement('script');
                    tag.src = "http://www.youtube.com/player_api";
                    tag.id = "YTAPI";
                    var firstScriptTag = document.getElementsByTagName('script')[0];
                    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
                }else{
                    setTimeout(function(){
                        jQuery(document).trigger("YTAPIReady");
                    }, 200)
                }

                jQuery(document).on("YTAPIReady", function () {

                    if ((YTPlayer.isBackground && ytp.isInit) || YTPlayer.opt.isInit)
                        return;

                    if(YTPlayer.isBackground && YTPlayer.opt.stopMovieOnClick)
                        jQuery(document).off("mousedown.ytplayer").on("mousedown,.ytplayer",function(e){
                            var target = jQuery(e.target);
                            if(target.is("a") || target.parents().is("a")){
                                $YTPlayer.pauseYTP();
                            }
                        });

                    if (YTPlayer.isBackground)
                        ytp.isInit = true;

                    YTPlayer.opt.isInit = true;

                    YTPlayer.opt.vol = YTPlayer.opt.vol ? YTPlayer.opt.vol : 100;

                    jQuery.mbYTPlayer.getDataFromFeed(YTPlayer.videoID, YTPlayer);

                    jQuery(document).on("getVideoInfo_" + YTPlayer.opt.id, function () {

                        if(isDevice && !YTPlayer.isBackground){
                            new YT.Player(playerID, {
                                height: '100%',
                                width: '100%',
                                videoId: YTPlayer.videoID,
                                events: {
                                    'onReady': function(){
                                        $YTPlayer.optimizeDisplay();
                                        playerBox.css({opacity: 1});
                                        YTPlayer.wrapper.css({opacity: 1});
                                        $YTPlayer.optimizeDisplay();
                                    },
                                    'onStateChange': function(){}
                                }
                            });
                            return;
                        }

                        new YT.Player(playerID, {
                            videoId   : YTPlayer.videoID.toString(),
                            playerVars: playerVars,
                            events    : {
                                'onReady': function (event) {

                                    YTPlayer.player = event.target;
                                    YTPlayer.playerEl = YTPlayer.player.getIframe();
                                    $YTPlayer.optimizeDisplay();

                                    YTPlayer.videoID = videoID;

                                    jQuery(window).on("resize.YTP",function () {
                                        $YTPlayer.optimizeDisplay();
                                    });

                                    if (YTPlayer.opt.showControls)
                                        jQuery(YTPlayer).buildYTPControls();

                                    YTPlayer.player.setPlaybackQuality(YTPlayer.opt.quality);

                                    if (YTPlayer.opt.startAt > 0)
                                        YTPlayer.player.seekTo(parseFloat(YTPlayer.opt.startAt), true);

                                    if (!YTPlayer.opt.autoPlay) {
                                        YTPlayer.checkForStartAt = setInterval(function () {
                                            if (YTPlayer.player.getCurrentTime() >= YTPlayer.opt.startAt) {
                                                clearInterval(YTPlayer.checkForStartAt);
                                                $YTPlayer.pauseYTP();

                                                if (YTPlayer.opt.mute) {
                                                    jQuery(YTPlayer).muteYTPVolume();
                                                }else{
                                                    jQuery(YTPlayer).unmuteYTPVolume();
                                                }
                                            }
                                        }, 1);

                                    } else {
                                        $YTPlayer.playYTP();
                                        YTPlayer.player.setVolume(YTPlayer.opt.vol);

                                        if (YTPlayer.opt.mute) {
                                            jQuery(YTPlayer).muteYTPVolume();
                                        }else{
                                            jQuery(YTPlayer).unmuteYTPVolume();
                                        }
                                    }

                                    if (typeof YTPlayer.opt.onReady == "function")
                                        YTPlayer.opt.onReady($YTPlayer);

                                    jQuery.mbYTPlayer.checkForState(YTPlayer);

                                },

                                'onStateChange'          : function (event) {

                                    /*
                                     -1 (unstarted)
                                     0 (ended)
                                     1 (playing)
                                     2 (paused)
                                     3 (buffering)
                                     5 (video cued).
                                     */

                                    if (typeof event.target.getPlayerState != "function")
                                        return;
                                    var state = event.target.getPlayerState();

                                    var playerBox = jQuery(YTPlayer.playerEl);
                                    var controls = jQuery("#controlBar_" + YTPlayer.id);
                                    playerBox.css({opacity: 1});

                                    var data = YTPlayer.opt;

                                    if (state == 0) {
                                        if (YTPlayer.state == state)
                                            return;

                                        YTPlayer.state = state;
                                        YTPlayer.player.pauseVideo();
                                        var startAt = YTPlayer.opt.startAt ? YTPlayer.opt.startAt : 1;

                                        if (data.loop) {
                                            YTPlayer.wrapper.css({opacity: 0});
                                            YTPlayer.player.seekTo(startAt);
                                            $YTPlayer.playYTP();

                                        } else if (!YTPlayer.isBackground) {
                                            YTPlayer.player.seekTo(startAt, true);
                                            $YTPlayer.playYTP();
                                            setTimeout(function () {
                                                $YTPlayer.pauseYTP();
                                            }, 10);
                                        }

                                        if (!data.loop && YTPlayer.isBackground)
                                            YTPlayer.wrapper.CSSAnimate({opacity: 0}, 2000);
                                        else if (data.loop) {
                                            YTPlayer.wrapper.css({opacity: 0});
                                            YTPlayer.loop++;
                                        }

                                        controls.find(".mb_YTVPPlaypause").html(jQuery.mbYTPlayer.controls.play);
                                        jQuery(YTPlayer).trigger("YTPEnd");
                                    }

                                    if (state == 3) {
                                        if (YTPlayer.state == state)
                                            return;
                                        YTPlayer.state = state;
                                        controls.find(".mb_YTVPPlaypause").html(jQuery.mbYTPlayer.controls.play);
                                        jQuery(YTPlayer).trigger("YTPBuffering");
                                    }

                                    if (state == -1) {
                                        if (YTPlayer.state == state)
                                            return;
                                        YTPlayer.state = state;
                                        jQuery(YTPlayer).trigger("YTPUnstarted");
                                    }

                                    if (state == 1) {
                                        if (YTPlayer.state == state)
                                            return;
                                        YTPlayer.state = state;

                                        if(YTPlayer.opt.mute){
                                            $YTPlayer.muteYTPVolume();
                                            YTPlayer.opt.mute = false;
                                        }

                                        if (YTPlayer.opt.autoPlay && YTPlayer.loop == 0) {
                                            YTPlayer.wrapper.CSSAnimate({opacity: YTPlayer.isAlone ? 1 : YTPlayer.opt.opacity}, 2000);
                                        } else if(! YTPlayer.isBackground) {
                                            YTPlayer.wrapper.css({opacity: YTPlayer.isAlone ? 1 : YTPlayer.opt.opacity});
                                        }else{
                                            setTimeout(function () {
                                                jQuery(YTPlayer.playerEl).CSSAnimate({opacity: 1}, 2000);
                                                YTPlayer.wrapper.CSSAnimate({opacity: YTPlayer.opt.opacity}, 2000);
                                            }, 1000);
                                        }

                                        controls.find(".mb_YTVPPlaypause").html(jQuery.mbYTPlayer.controls.pause);
                                        $YTPlayer.css({background: "transparent"});

                                        jQuery(YTPlayer).trigger("YTPStart");
                                    }

                                    if (state == 2) {
                                        if (YTPlayer.state == state)
                                            return;
                                        YTPlayer.state = state;
                                        controls.find(".mb_YTVPPlaypause").html(jQuery.mbYTPlayer.controls.play);
                                        jQuery(YTPlayer).trigger("YTPPause");
                                    }
                                },
                                'onPlaybackQualityChange': function () {},
                                'onError'                : function (err) {

                                    jQuery(YTPlayer).trigger("YTPError");

                                }
                            }
                        });
                    });
                })
            });
        },

        getDataFromFeed: function (videoID, YTPlayer) {
            //Get video info from FEEDS API
            //todo: add video title and other info

            YTPlayer.videoID = videoID;
            if (!jQuery.browser.msie) { //!(jQuery.browser.msie && jQuery.browser.version<9)

                jQuery.getJSON('http://gdata.youtube.com/feeds/api/videos/' + videoID + '?v=2&alt=jsonc', function (data, status, xhr) {

                    YTPlayer.dataReceived = true;

                    var videoData = data.data;

                    YTPlayer.title = videoData.title;
                    YTPlayer.videoData = videoData;

                    if (YTPlayer.opt.ratio == "auto")
                        if (videoData.aspectRatio && videoData.aspectRatio === "widescreen")
                            YTPlayer.opt.ratio = "16/9";
                        else
                            YTPlayer.opt.ratio = "4/3";

                    if(!YTPlayer.isInit){

                        YTPlayer.isInit = true;

                        if (!YTPlayer.isBackground) {
                            var bgndURL = videoData.thumbnail.hqDefault;
                            jQuery(YTPlayer).css({background: "url(" + bgndURL + ") center center", backgroundSize: "cover"});
                        }

                        jQuery(document).trigger("getVideoInfo_" + YTPlayer.opt.id);
                    }
                    jQuery(YTPlayer).trigger("YTPChanged");
                });

                setTimeout(function(){
                    if(!YTPlayer.dataReceived && !YTPlayer.isInit){
                        YTPlayer.isInit = true;
                        jQuery(document).trigger("getVideoInfo_" + YTPlayer.opt.id);
                    }
                },2500)

            } else {
                YTPlayer.opt.ratio == "auto" ? YTPlayer.opt.ratio = "16/9" : YTPlayer.opt.ratio;

                if(!YTPlayer.isInit){
                    YTPlayer.isInit = true;
                    setTimeout(function(){
                        jQuery(document).trigger("getVideoInfo_" + YTPlayer.opt.id);
                    },100)

                }
                jQuery(YTPlayer).trigger("YTPChanged");
            }
        },

        getVideoID: function(){
            var YTPlayer = this.get(0);
            return YTPlayer.videoID || false ;
        },

        YTPlaylist : function(videos, shuffle, callback){
            var YTPlayer = this.get(0);

            YTPlayer.isPlayList = true;

            if(shuffle)
                videos = jQuery.shuffle(videos);

            if(!YTPlayer.videoID){
                YTPlayer.videos = videos;
                YTPlayer.videoCounter = 0;
                YTPlayer.videoLength = videos.length;

                jQuery(YTPlayer).data("property", videos[0]);
                jQuery(YTPlayer).mb_YTPlayer();
            }

            if(typeof callback == "function")
                jQuery(YTPlayer).on("YTPChanged",function(){
                    callback(YTPlayer);
                });

            jQuery(YTPlayer).on("YTPError", function(){
                setTimeout(function(){
                    jQuery(YTPlayer).trigger("YTPEnd");
                },1000)
            })

            jQuery(YTPlayer).on("YTPEnd", function(){
                YTPlayer.videoCounter++;
                if(YTPlayer.videoCounter>=YTPlayer.videoLength)
                    YTPlayer.videoCounter = 0;

                jQuery(YTPlayer).changeMovie(videos[YTPlayer.videoCounter]);
            });
        },

        playNext: function(){
            var YTPlayer = this.get(0);
            YTPlayer.videoCounter++;
            if(YTPlayer.videoCounter>=YTPlayer.videoLength)
                YTPlayer.videoCounter = 0;

            jQuery(YTPlayer).changeMovie(YTPlayer.videos[YTPlayer.videoCounter]);

        },

        changeMovie: function (opt) {
            var YTPlayer = this.get(0);
            var data = YTPlayer.opt;
            if (opt) {
                jQuery.extend(data, opt);
            }

            YTPlayer.videoID = data.videoURL.getVideoID();

            jQuery(YTPlayer).getPlayer().loadVideoByUrl("http://www.youtube.com/v/" + YTPlayer.videoID, 0);

            if (YTPlayer.opt.mute) {
                jQuery(YTPlayer).muteYTPVolume();
            }else{
                jQuery(YTPlayer).unmuteYTPVolume();
            }

            if (YTPlayer.opt.addRaster) {
                var retina = (window.retina || window.devicePixelRatio > 1);
                YTPlayer.overlay.addClass(retina ? "raster retina" : "raster");
            }else{
                YTPlayer.overlay.removeClass("raster");
                YTPlayer.overlay.removeClass("retina");
            }

            $("#controlBar_" + YTPlayer.id).remove();

            if (YTPlayer.opt.showControls)
                $(YTPlayer).buildYTPControls();
            else
                $("controlBar_" + YTPlayer.id).remove();

            $.mbYTPlayer.getDataFromFeed(YTPlayer.videoID, YTPlayer);

            jQuery(YTPlayer).optimizeDisplay();
            jQuery.mbYTPlayer.checkForState(YTPlayer);

        },

        getPlayer: function () {
            return jQuery(this).get(0).player;
        },

        playerDestroy: function () {
            var YTPlayer = this.get(0);
            ytp.YTAPIReady = false;
            ytp.isInit = false;
            YTPlayer.opt.isInit = false;
            YTPlayer.videoID = null;

            var playerBox = YTPlayer.wrapper;
            playerBox.remove();
            jQuery("#controlBar_" + YTPlayer.id).remove();
        },

        playYTP: function () {
            var YTPlayer = this.get(0);
            var data = YTPlayer.opt;
            var controls = jQuery("#controlBar_" + YTPlayer.id);

            var playBtn = controls.find(".mb_YTVPPlaypause");
            playBtn.html(jQuery.mbYTPlayer.controls.pause);
            YTPlayer.player.playVideo();

            YTPlayer.wrapper.CSSAnimate({opacity: YTPlayer.opt.opacity}, 2000);

        },

        toggleLoops: function () {
            var YTPlayer = this.get(0);
            var data = YTPlayer.opt;
            if (data.loop == 1) {
                data.loop = 0;
            } else {
                if(data.startAt) {
                    YTPlayer.player.seekTo(data.startAt);
                } else {
                    YTPlayer.player.playVideo();
                }
                data.loop = 1;
            }
        },

        stopYTP: function () {
            var YTPlayer = this.get(0);
            var controls = jQuery("#controlBar_" + YTPlayer.id);
            var playBtn = controls.find(".mb_YTVPPlaypause");
            playBtn.html(jQuery.mbYTPlayer.controls.play);
            YTPlayer.player.stopVideo();
        },

        pauseYTP: function () {
            var YTPlayer = this.get(0);
            var data = YTPlayer.opt;
            var controls = jQuery("#controlBar_" + YTPlayer.id);
            var playBtn = controls.find(".mb_YTVPPlaypause");
            playBtn.html(jQuery.mbYTPlayer.controls.play);
            YTPlayer.player.pauseVideo();
        },

        setYTPVolume: function (val) {
            var YTPlayer = this.get(0);
            if (!val && !YTPlayer.opt.vol && player.getVolume() == 0)
                jQuery(YTPlayer).unmuteYTPVolume();
            else if ((!val && YTPlayer.player.getVolume() > 0) || (val && YTPlayer.player.getVolume() == val))
                jQuery(YTPlayer).muteYTPVolume();
            else
                YTPlayer.opt.vol = val;
            YTPlayer.player.setVolume(YTPlayer.opt.vol);
        },

        muteYTPVolume: function () {
            var YTPlayer = this.get(0);
            YTPlayer.opt.vol = YTPlayer.player.getVolume() || 50;
            YTPlayer.player.mute();
            YTPlayer.player.setVolume(0);
            var controls = jQuery("#controlBar_" + YTPlayer.id);
            var muteBtn = controls.find(".mb_YTVPMuteUnmute");
            muteBtn.html(jQuery.mbYTPlayer.controls.unmute);
        },

        unmuteYTPVolume: function () {
            var YTPlayer = this.get(0);

            YTPlayer.player.unMute();
            YTPlayer.player.setVolume(YTPlayer.opt.vol);

            var controls = jQuery("#controlBar_" + YTPlayer.id);
            var muteBtn = controls.find(".mb_YTVPMuteUnmute");
            muteBtn.html(jQuery.mbYTPlayer.controls.mute);
        },

        manageYTPProgress: function () {
            var YTPlayer = this.get(0);
            var data = YTPlayer.opt;
            var controls = jQuery("#controlBar_" + YTPlayer.id);
            var progressBar = controls.find(".mb_YTVPProgress");
            var loadedBar = controls.find(".mb_YTVPLoaded");
            var timeBar = controls.find(".mb_YTVTime");
            var totW = progressBar.outerWidth();

            var currentTime = Math.floor(YTPlayer.player.getCurrentTime());
            var totalTime = Math.floor(YTPlayer.player.getDuration());
            var timeW = (currentTime * totW) / totalTime;
            var startLeft = 0;

            var loadedW = YTPlayer.player.getVideoLoadedFraction() * 100;

            loadedBar.css({left: startLeft, width: loadedW + "%"});
            timeBar.css({left: 0, width: timeW});
            return {totalTime: totalTime, currentTime: currentTime};
        },

        buildYTPControls: function () {
            var YTPlayer = this.get(0);
            var data = YTPlayer.opt;
            var controlBar = jQuery("<span/>").attr("id", "controlBar_" + YTPlayer.id).addClass("mb_YTVPBar").css({whiteSpace: "noWrap", position: YTPlayer.isBackground ? "fixed" : "absolute", zIndex: YTPlayer.isBackground ? 10000 : 1000}).hide();
            var buttonBar = jQuery("<div/>").addClass("buttonBar");
            var playpause = jQuery("<span>" + jQuery.mbYTPlayer.controls.play + "</span>").addClass("mb_YTVPPlaypause").click(function () {
                if (YTPlayer.player.getPlayerState() == 1)
                    jQuery(YTPlayer).pauseYTP();
                else
                    jQuery(YTPlayer).playYTP();
            });

            var MuteUnmute = jQuery("<span>" + jQuery.mbYTPlayer.controls.mute + "</span>").addClass("mb_YTVPMuteUnmute").click(function () {
                if (YTPlayer.player.getVolume()==0) {
                    jQuery(YTPlayer).unmuteYTPVolume();
                } else {
                    jQuery(YTPlayer).muteYTPVolume();
                }
            });

            var idx = jQuery("<span/>").addClass("mb_YTVPTime");

            var viewOnYT = jQuery(jQuery.mbYTPlayer.controls.ytLogo).on("click", function () {window.open(data.videoURL, "viewOnYT")});
            var viewOnlyYT = jQuery(jQuery.mbYTPlayer.controls.onlyYT).on("click",
                    function () {
                        if(!YTPlayer.isAlone){
                            if(YTPlayer.player.getPlayerState() != 1)
                                return;

                            jQuery(YTPlayer.wrapper).css({zIndex: 10000}).CSSAnimate({opacity: 1}, 1000, 0);
                            YTPlayer.isAlone = true;
                        }else{
                            jQuery(YTPlayer.wrapper).CSSAnimate({opacity: YTPlayer.opt.opacity}, 500);
                            jQuery(YTPlayer.wrapper).css({zIndex: -1});
                            YTPlayer.isAlone = false;
                        }
                    });

            var movieUrl = jQuery("<span/>").addClass("mb_YTVPUrl").append(viewOnYT);
            var onlyVideo = jQuery("<span/>").addClass("mb_OnlyYT").append(viewOnlyYT);

            var progressBar = jQuery("<div/>").addClass("mb_YTVPProgress").css("position", "absolute").click(function (e) {
                timeBar.css({width: (e.clientX - timeBar.offset().left)});
                YTPlayer.timeW = e.clientX - timeBar.offset().left;
                controlBar.find(".mb_YTVPLoaded").css({width: 0});
                var totalTime = Math.floor(YTPlayer.player.getDuration());
                YTPlayer.goto = (timeBar.outerWidth() * totalTime) / progressBar.outerWidth();

                YTPlayer.player.seekTo(parseFloat(YTPlayer.goto), true);
                controlBar.find(".mb_YTVPLoaded").css({width: 0});
            });

            var loadedBar = jQuery("<div/>").addClass("mb_YTVPLoaded").css("position", "absolute");
            var timeBar = jQuery("<div/>").addClass("mb_YTVTime").css("position", "absolute");

            progressBar.append(loadedBar).append(timeBar);
            buttonBar.append(playpause).append(MuteUnmute).append(idx);

            if (data.printUrl && data.videoURL.indexOf("http") >= 0)
                buttonBar.append(movieUrl);

            if (YTPlayer.isBackground)
                buttonBar.append(onlyVideo);

            controlBar.append(buttonBar).append(progressBar);

            if (!YTPlayer.isBackground) {
                controlBar.addClass("inlinePlayer");
                YTPlayer.wrapper.before(controlBar);
            } else {
                jQuery("body").after(controlBar);
            }
            controlBar.fadeIn();

            //clearInterval(YTPlayer.getState);
        },

        checkForState:function(YTPlayer){

            var controlBar = jQuery("#controlBar_" + YTPlayer.id);
            var data = YTPlayer.opt;
            var startAt = YTPlayer.opt.startAt ? YTPlayer.opt.startAt : 1;

            YTPlayer.getState = setInterval(function () {
                var prog = jQuery(YTPlayer).manageYTPProgress();

                controlBar.find(".mb_YTVPTime").html(jQuery.mbYTPlayer.formatTime(prog.currentTime) + " / " + jQuery.mbYTPlayer.formatTime(prog.totalTime));
                if (parseFloat(YTPlayer.player.getDuration() - 3) < YTPlayer.player.getCurrentTime() && YTPlayer.player.getPlayerState() == 1) {

                    if(!data.loop){
                        YTPlayer.player.pauseVideo();
                        YTPlayer.wrapper.CSSAnimate({opacity: 0}, 2000,function(){
                            YTPlayer.player.seekTo(startAt);
                        });
                    }else
                        YTPlayer.player.seekTo(startAt);

                    jQuery(YTPlayer).trigger("YTPEnd");
                }
            }, 1);

        },

        formatTime      : function (s) {
            var min = Math.floor(s / 60);
            var sec = Math.floor(s - (60 * min));
            return (min < 9 ? "0" + min : min) + " : " + (sec < 9 ? "0" + sec : sec);
        }
    };

    jQuery.fn.toggleVolume = function () {
        var YTPlayer = this.get(0);
        if (!YTPlayer)
            return;

        if (YTPlayer.player.isMuted()) {
            jQuery(YTPlayer).unmuteYTPVolume();
            return true;
        } else {
            jQuery(YTPlayer).muteYTPVolume();
            return false;
        }
    };

    jQuery.fn.optimizeDisplay = function () {
        var YTPlayer = this.get(0);
        var data = YTPlayer.opt;
        var playerBox = jQuery(YTPlayer.playerEl);
        var win = {};
        var el = !YTPlayer.isBackground ? data.containment : jQuery(window);

        win.width = el.width();
        win.height = el.height();

        var margin = 24;
        var vid = {};
        vid.width = win.width + ((win.width * margin) / 100);
        vid.height = data.ratio == "16/9" ? Math.ceil((9 * win.width) / 16) : Math.ceil((3 * win.width) / 4);
        vid.marginTop = -((vid.height - win.height) / 2);
        vid.marginLeft = -((win.width * (margin / 2)) / 100);

        if (vid.height < win.height) {
            vid.height = win.height + ((win.height * margin) / 100);
            vid.width = data.ratio == "16/9" ? Math.floor((16 * win.height) / 9) : Math.floor((4 * win.height) / 3);
            vid.marginTop = -((win.height * (margin / 2)) / 100);
            vid.marginLeft = -((vid.width - win.width) / 2);
        }
        playerBox.css({width: vid.width, height: vid.height, marginTop: vid.marginTop, marginLeft: vid.marginLeft});
    };

    jQuery.shuffle = function(arr) {
        var newArray = arr.slice();
        var len = newArray.length;
        var i = len;
        while (i--) {
            var p = parseInt(Math.random()*len);
            var t = newArray[i];
            newArray[i] = newArray[p];
            newArray[p] = t;
        }
        return newArray;
    };


    jQuery.fn.mb_YTPlayer = jQuery.mbYTPlayer.buildPlayer;
    jQuery.fn.YTPlaylist = jQuery.mbYTPlayer.YTPlaylist;
    jQuery.fn.playNext = jQuery.mbYTPlayer.playNext;
    jQuery.fn.changeMovie = jQuery.mbYTPlayer.changeMovie;
    jQuery.fn.getVideoID = jQuery.mbYTPlayer.getVideoID;
    jQuery.fn.getPlayer = jQuery.mbYTPlayer.getPlayer;
    jQuery.fn.playerDestroy = jQuery.mbYTPlayer.playerDestroy;
    jQuery.fn.buildYTPControls = jQuery.mbYTPlayer.buildYTPControls;
    jQuery.fn.playYTP = jQuery.mbYTPlayer.playYTP;
    jQuery.fn.toggleLoops = jQuery.mbYTPlayer.toggleLoops;
    jQuery.fn.stopYTP = jQuery.mbYTPlayer.stopYTP;
    jQuery.fn.pauseYTP = jQuery.mbYTPlayer.pauseYTP;
    jQuery.fn.muteYTPVolume = jQuery.mbYTPlayer.muteYTPVolume;
    jQuery.fn.unmuteYTPVolume = jQuery.mbYTPlayer.unmuteYTPVolume;
    jQuery.fn.setYTPVolume = jQuery.mbYTPlayer.setYTPVolume;
    jQuery.fn.manageYTPProgress = jQuery.mbYTPlayer.manageYTPProgress;

})(jQuery);