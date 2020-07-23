!function(){"use strict";var i={class:"className",contenteditable:"contentEditable",for:"htmlFor",readonly:"readOnly",maxlength:"maxLength",tabindex:"tabIndex",colspan:"colSpan",rowspan:"rowSpan",usemap:"useMap"};function o(t,n){try{return t(n)}catch(t){return n}}var s=document,u=window,f=s.documentElement,l=s.createElement.bind(s),t=l("div"),n=l("table"),e=l("tbody"),r=l("tr"),c=Array.isArray,a=Array.prototype,h=a.concat,d=a.filter,p=a.indexOf,g=a.map,v=a.push,m=a.slice,y=a.some,b=a.splice,_=/^#(?:[\w-]|\\.|[^\x00-\xa0])*$/,x=/^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/,C=/<.+>/,E=/^\w+$/;function w(t,n){return t&&(I(n)||P(n))?x.test(t)?n.getElementsByClassName(t.slice(1)):E.test(t)?n.getElementsByTagName(t):n.querySelectorAll(t):[]}var N=(S.prototype.init=function(t,n){return new S(t,n)},S),T=N.prototype,A=T.init;function S(t,n){if(t){if(t instanceof N)return t;var e=t;if(k(t)){if(e=(n instanceof N?n[0]:n)||s,!(e=_.test(t)?e.getElementById(t.slice(1)):C.test(t)?bt(t):w(t,e)))return}else if(W(t))return this.ready(t);for(!e.nodeType&&e!==u||(e=[e]),this.length=e.length,t=0,n=this.length;t<n;t++)this[t]=e[t]}}(A.fn=A.prototype=T).length=0,T.splice=b,"function"==typeof Symbol&&(T[Symbol.iterator]=a[Symbol.iterator]),T.map=function(e){return A(h.apply([],g.call(this,function(t,n){return e.call(t,n,t)})))},T.slice=function(t,n){return A(m.call(this,t,n))};var L=/-([a-z])/g;function $(t){return t.replace(L,function(t,n){return n.toUpperCase()})}function B(t,n,e){if(e)for(e=t.length;e--&&!1!==n.call(t[e],e,t[e]););else{e=0;for(var r=t.length;e<r&&!1!==n.call(t[e],e,t[e]);e++);}return t}function M(t){for(var n=1;n<arguments.length;n++);if(!(n=arguments.length))return{};if(1===n)return M(A,t);for(var e=1;e<n;e++)for(var r in arguments[e])t[r]=arguments[e][r];return t}function R(t,n){var e=t&&(t.matches||t.webkitMatchesSelector||t.msMatchesSelector);return!!e&&!!n&&e.call(t,n)}function O(t){return!!t&&t===t.window}function I(t){return t&&9===t.nodeType}function P(t){return!!t&&1===t.nodeType}function W(t){return"function"==typeof t}function k(t){return"string"==typeof t}function D(t){return!isNaN(parseFloat(t))&&isFinite(t)}function H(e){return k(e)?function(t,n){return R(n,e)}:W(e)?e:e instanceof N?function(t,n){return e.is(n)}:e?function(t,n){return n===e}:function(){return!1}}function U(t,n){return n?t.filter(n):t}A.each=B,T.each=function(t){return B(this,t)},T.removeProp=function(e){return this.each(function(t,n){delete n[i[e]||e]})},A.extend=M,T.extend=function(t){return M(T,t)},A.guid=1,A.isWindow=O,A.isFunction=W,A.isNumeric=D,A.isArray=c,T.prop=function(e,r){if(e){if(k(e))return e=i[e]||e,arguments.length<2?this[0]&&this[0][e]:this.each(function(t,n){n[e]=r});for(var t in e)this.prop(t,e[t]);return this}},T.get=function(t){return void 0===t?m.call(this):this[(t=Number(t))<0?t+this.length:t]},T.eq=function(t){return A(this.get(t))},T.first=function(){return this.eq(0)},T.last=function(){return this.eq(-1)},T.filter=function(t){var e=H(t);return A(d.call(this,function(t,n){return e.call(t,n,t)}))};var F=/\S+/g;function j(t){return k(t)&&t.match(F)||[]}function q(t,n,e,r){for(var i=[],o=W(n),u=r&&H(r),s=0,c=t.length;s<c;s++)if(o){var a=n(t[s]);a.length&&v.apply(i,a)}else for(a=t[s][n];!(null==a||r&&u(-1,a));)i.push(a),a=e?a[n]:null;return i}function z(t){return 1<t.length?d.call(t,function(t,n,e){return p.call(e,t)===n}):t}function V(t,n,e){if(P(t)){var r=u.getComputedStyle(t,null);return e?r.getPropertyValue(n)||void 0:r[n]||t.style[n]}}function J(t,n){return parseInt(V(t,n),10)||0}T.hasClass=function(n){return!!n&&y.call(this,function(t){return P(t)&&t.classList.contains(n)})},T.removeAttr=function(t){var n=j(t);return this.each(function(t,e){P(e)&&B(n,function(t,n){e.removeAttribute(n)})})},T.attr=function(e,r){if(e){if(k(e)){if(arguments.length<2){if(!this[0]||!P(this[0]))return;var t=this[0].getAttribute(e);return null===t?void 0:t}return void 0===r?this:null===r?this.removeAttr(e):this.each(function(t,n){P(n)&&n.setAttribute(e,r)})}for(t in e)this.attr(t,e[t]);return this}},T.toggleClass=function(t,r){var n=j(t),i=void 0!==r;return this.each(function(t,e){P(e)&&B(n,function(t,n){i?r?e.classList.add(n):e.classList.remove(n):e.classList.toggle(n)})})},T.addClass=function(t){return this.toggleClass(t,!0)},T.removeClass=function(t){return arguments.length?this.toggleClass(t,!1):this.attr("class","")},A.unique=z,T.add=function(t,n){return A(z(this.get().concat(A(t,n).get())))};var Y=/^--/,G={},X=t.style,K=["webkit","moz","ms"];var Q={animationIterationCount:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0};function Z(t,n,e){return void 0===e&&(e=Y.test(t)),e||Q[t]||!D(n)?n:n+"px"}T.css=function(e,r){if(k(e)){var i=Y.test(e);return(o=e,void 0===(t=i)&&(t=Y.test(o)),e=t?o:(G[o]||(n=""+(t=$(o))[0].toUpperCase()+t.slice(1),B(t=(t+" "+K.join(n+" ")+n).split(" "),function(t,n){if(n in X)return G[o]=n,!1})),G[o]),arguments.length<2)?this[0]&&V(this[0],e,i):e?(r=Z(e,r,i),this.each(function(t,n){P(n)&&(i?n.style.setProperty(e,r):n.style[e]=r)})):this}var o,t,n;for(var u in e)this.css(u,e[u]);return this};var tt=/^\s+|\s+$/;function nt(t,n){return t=t.dataset[n]||t.dataset[$(n)],tt.test(t)?t:o(JSON.parse,t)}function et(t,n){var e=t.documentElement;return Math.max(t.body["scroll"+n],e["scroll"+n],t.body["offset"+n],e["offset"+n],e["client"+n])}function rt(t,n){return J(t,"border"+(n?"Left":"Top")+"Width")+J(t,"padding"+(n?"Left":"Top"))+J(t,"padding"+(n?"Right":"Bottom"))+J(t,"border"+(n?"Right":"Bottom")+"Width")}B([!0,!(T.data=function(e,r){if(!e){if(!this[0])return;var t,n={};for(t in this[0].dataset)n[t]=nt(this[0],t);return n}if(k(e))return arguments.length<2?this[0]&&nt(this[0],e):void 0===r?this:this.each(function(t,n){t=r,t=o(JSON.stringify,t),n.dataset[$(e)]=t});for(t in e)this.data(t,e[t]);return this})],function(t,r){B(["Width","Height"],function(n,e){T[(r?"outer":"inner")+e]=function(t){if(this[0])return O(this[0])?r?this[0]["inner"+e]:this[0].document.documentElement["client"+e]:I(this[0])?et(this[0],e):this[0][(r?"offset":"client")+e]+(t&&r?J(this[0],"margin"+(n?"Top":"Left"))+J(this[0],"margin"+(n?"Bottom":"Right")):0)}})}),B(["Width","Height"],function(r,n){var i=n.toLowerCase();T[i]=function(t){if(!this[0])return void 0===t?void 0:this;if(!arguments.length)return O(this[0])?this[0].document.documentElement["client"+n]:I(this[0])?et(this[0],n):this[0].getBoundingClientRect()[i]-rt(this[0],!r);var e=parseInt(t,10);return this.each(function(t,n){P(n)&&(t=V(n,"boxSizing"),n.style[i]=Z(i,e+("border-box"===t?rt(n,!r):0)))})}});var it={};function ot(n,t){return!t||!y.call(t,function(t){return n.indexOf(t)<0})}T.toggle=function(i){return this.each(function(t,n){var e,r;P(n)&&((void 0===i?"none"===V(n,"display"):i)?(n.style.display=n.___cd||"","none"===V(n,"display")&&(t=n.style,n=n.tagName,n=it[n]?it[n]:(e=l(n),s.body.insertBefore(e,null),r=V(e,"display"),s.body.removeChild(e),it[n]="none"!==r?r:"block"),t.display=n)):(n.___cd=V(n,"display"),n.style.display="none"))})},T.hide=function(){return this.toggle(!1)},T.show=function(){return this.toggle(!0)};var ut={focus:"focusin",blur:"focusout"},st={mouseenter:"mouseover",mouseleave:"mouseout"},ct=/^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;function at(t){return[(t=t.split("."))[0],t.slice(1).sort()]}function ft(r,i,o,u,s){var t=r.___ce=r.___ce||{};if(i)t[i]&&(t[i]=t[i].filter(function(t){var n=t[0],e=t[1];if(t=t[2],s&&t.guid!==s.guid||!ot(n,o)||u&&u!==e)return!0;r.removeEventListener(i,t)}));else for(i in t)ft(r,i,o,u,s)}function lt(t){return t.multiple&&t.options?q(d.call(t.options,function(t){return t.selected&&!t.disabled&&!t.parentNode.disabled}),"value"):t.value||""}T.off=function(t,i,o){var u=this;if(void 0===t)this.each(function(t,n){(P(n)||I(n)||O(n))&&ft(n)});else if(k(t))W(i)&&(o=i,i=""),B(j(t),function(t,n){n=(t=at(n))[0];var e=t[1],r=st[n]||ut[n]||n;u.each(function(t,n){(P(n)||I(n)||O(n))&&ft(n,r,e,i,o)})});else for(var n in t)this.off(n,t[n]);return this},T.on=function(t,h,d,p,g){var e=this;if(k(t))return k(h)||(null!=h&&(void 0!==d&&(p=d),d=h),h=""),W(p)||(p=d,d=void 0),p&&B(j(t),function(t,n){n=(t=at(n))[0];var c=t[1],a=st[n]||ut[n]||n,f=n in st,l=n in ut;a&&e.each(function(t,i){var n,e,r,o,u,s;(P(i)||I(i)||O(i))&&((t=function t(n){if(n.target["___i"+n.type])return n.stopImmediatePropagation();if((!n.namespace||ot(c,n.namespace.split(".")))&&(h||!(l&&(n.target!==i||n.___ot===a)||f&&n.relatedTarget&&i.contains(n.relatedTarget)))){var e=i;if(h){for(var r=n.target;!R(r,h);){if(r===i)return;if(!(r=r.parentNode))return}e=r,n.___cd=!0}n.___cd&&Object.defineProperty(n,"currentTarget",{configurable:!0,get:function(){return e}}),Object.defineProperty(n,"data",{configurable:!0,get:function(){return d}}),r=p.call(e,n,n.___td),g&&ft(i,a,c,h,t),!1===r&&(n.preventDefault(),n.stopPropagation())}}).guid=p.guid=p.guid||A.guid++,e=a,r=c,o=h,u=t,(s=(n=i).___ce=n.___ce||{})[e]=s[e]||[],s[e].push([r,o,u]),n.addEventListener(e,u))})}),this;for(var n in t)this.on(n,h,d,t[n],g);return this},T.one=function(t,n,e,r){return this.on(t,n,e,r,!0)},T.ready=function(t){function n(){return setTimeout(t,0,A)}return"loading"!==s.readyState?n():s.addEventListener("DOMContentLoaded",n),this},T.trigger=function(e,t){if(k(e)){var n=(r=at(e))[0],r=r[1],i=st[n]||ut[n]||n;if(!i)return this;var o=ct.test(i)?"MouseEvents":"HTMLEvents";(e=s.createEvent(o)).initEvent(i,!0,!0),e.namespace=r.join("."),e.___ot=n}e.___td=t;var u=e.___ot in ut;return this.each(function(t,n){u&&W(n[e.___ot])&&(n["___i"+e.type]=!0,n[e.___ot](),n["___i"+e.type]=!1),n.dispatchEvent(e)})};var ht=/%20/g,dt=/\r?\n/g,pt=/file|reset|submit|button|image/i,gt=/radio|checkbox/i;T.serialize=function(){var r="";return this.each(function(t,n){B(n.elements||[n],function(t,e){e.disabled||!e.name||"FIELDSET"===e.tagName||pt.test(e.type)||gt.test(e.type)&&!e.checked||void 0!==(t=lt(e))&&B(t=c(t)?t:[t],function(t,n){t=r,n="&"+encodeURIComponent(e.name)+"="+encodeURIComponent(n.replace(dt,"\r\n")).replace(ht,"+"),r=t+n})})}),r.slice(1)},T.val=function(r){return arguments.length?this.each(function(t,n){var e;(t=n.multiple&&n.options)||gt.test(n.type)?(e=c(r)?g.call(r,String):null===r?[]:[String(r)],t?B(n.options,function(t,n){n.selected=0<=e.indexOf(n.value)},!0):n.checked=0<=e.indexOf(n.value)):n.value=null==r?"":r}):this[0]&&lt(this[0])},T.clone=function(){return this.map(function(t,n){return n.cloneNode(!0)})},T.detach=function(t){return U(this,t).each(function(t,n){n.parentNode&&n.parentNode.removeChild(n)}),this};var vt=/^\s*<(\w+)[^>]*>/,mt=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,yt={"*":t,tr:e,td:r,th:r,thead:n,tbody:n,tfoot:n};function bt(t){if(!k(t))return[];if(mt.test(t))return[l(RegExp.$1)];var n=vt.test(t)&&RegExp.$1;return(n=yt[n]||yt["*"]).innerHTML=t,A(n.childNodes).detach().get()}A.parseHTML=bt,T.empty=function(){return this.each(function(t,n){for(;n.firstChild;)n.removeChild(n.firstChild)})},T.html=function(e){return arguments.length?void 0===e?this:this.each(function(t,n){P(n)&&(n.innerHTML=e)}):this[0]&&this[0].innerHTML},T.remove=function(t){return U(this,t).detach().off(),this},T.text=function(e){return void 0===e?this[0]?this[0].textContent:"":this.each(function(t,n){P(n)&&(n.textContent=e)})},T.unwrap=function(){return this.parent().each(function(t,n){"BODY"!==n.tagName&&(t=A(n)).replaceWith(t.children())}),this},T.offset=function(){var t=this[0];if(t)return{top:(t=t.getBoundingClientRect()).top+u.pageYOffset,left:t.left+u.pageXOffset}},T.offsetParent=function(){return this.map(function(t,n){for(t=n.offsetParent;t&&"static"===V(t,"position");)t=t.offsetParent;return t||f})},T.position=function(){var t=this[0];if(t){var n=(r="fixed"===V(t,"position"))?t.getBoundingClientRect():this.offset();if(!r){for(var e=t.ownerDocument,r=t.offsetParent||e.documentElement;(r===e.body||r===e.documentElement)&&"static"===V(r,"position");)r=r.parentNode;r!==t&&P(r)&&(e=A(r).offset(),n.top-=e.top+J(r,"borderTopWidth"),n.left-=e.left+J(r,"borderLeftWidth"))}return{top:n.top-J(t,"marginTop"),left:n.left-J(t,"marginLeft")}}},T.children=function(t){return U(A(z(q(this,function(t){return t.children}))),t)},T.contents=function(){return A(z(q(this,function(t){return"IFRAME"===t.tagName?[t.contentDocument]:"TEMPLATE"===t.tagName?t.content.childNodes:t.childNodes})))},T.find=function(n){return A(z(q(this,function(t){return w(n,t)})))};var _t=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,xt=/^$|^module$|\/(java|ecma)script/i,Ct=["type","src","nonce","noModule"];function Et(t,e,s,c,a,n,r,i){return B(t,function(t,n){B(A(n),function(o,u){B(A(e),function(t,n){var e,i,r=s?n:u;n=s?u:n,r=(t=s?o:t)?r.cloneNode(!0):r,t=!t,a?n.insertBefore(r,c?n.firstChild:null):n.parentNode.insertBefore(r,c?n:n.nextSibling),t&&(e=r,i=n.ownerDocument,(e=A(e)).filter("script").add(e.find("script")).each(function(t,e){var r;xt.test(e.type)&&f.contains(e)&&((r=l("script")).text=e.textContent.replace(_t,""),B(Ct,function(t,n){e[n]&&(r[n]=e[n])}),i.head.insertBefore(r,null),i.head.removeChild(r))}))},i)},r)},n),e}T.after=function(){return Et(arguments,this,!1,!1,!1,!0,!0)},T.append=function(){return Et(arguments,this,!1,!1,!0)},T.appendTo=function(t){return Et(arguments,this,!0,!1,!0)},T.before=function(){return Et(arguments,this,!1,!0)},T.insertAfter=function(t){return Et(arguments,this,!0,!1,!1,!1,!1,!0)},T.insertBefore=function(t){return Et(arguments,this,!0,!0)},T.prepend=function(){return Et(arguments,this,!1,!0,!0,!0,!0)},T.prependTo=function(t){return Et(arguments,this,!0,!0,!0,!1,!1,!0)},T.replaceWith=function(t){return this.before(t).remove()},T.replaceAll=function(t){return A(t).replaceWith(this),this},T.wrapAll=function(t){for(var n=(t=A(t))[0];n.children.length;)n=n.firstElementChild;return this.first().before(t),this.appendTo(n)},T.wrap=function(r){return this.each(function(t,n){var e=A(r)[0];A(n).wrapAll(t?e.cloneNode(!0):e)})},T.wrapInner=function(e){return this.each(function(t,n){(n=(t=A(n)).contents()).length?n.wrapAll(e):t.append(e)})},T.has=function(e){var t=k(e)?function(t,n){return w(e,n).length}:function(t,n){return n.contains(e)};return this.filter(t)},T.is=function(t){var e=H(t);return y.call(this,function(t,n){return e.call(t,n,t)})},T.next=function(t,n,e){return U(A(z(q(this,"nextElementSibling",n,e))),t)},T.nextAll=function(t){return this.next(t,!0)},T.nextUntil=function(t,n){return this.next(n,!0,t)},T.not=function(e){var r=H(e);return this.filter(function(t,n){return(!k(e)||P(n))&&!r.call(n,t,n)})},T.parent=function(t){return U(A(z(q(this,"parentNode"))),t)},T.index=function(t){var n=t?A(t)[0]:this[0];return t=t?this:A(n).parent().children(),p.call(t,n)},T.closest=function(t){var n=this.filter(t);if(n.length)return n;var e=this.parent();return e.length?e.closest(t):n},T.parents=function(t,n){return U(A(z(q(this,"parentElement",!0,n))),t)},T.parentsUntil=function(t,n){return this.parents(n,t)},T.prev=function(t,n,e){return U(A(z(q(this,"previousElementSibling",n,e))),t)},T.prevAll=function(t){return this.prev(t,!0)},T.prevUntil=function(t,n){return this.prev(n,!0,t)},T.siblings=function(t){return U(A(z(q(this,function(t){return A(t).parent().children().not(t)}))),t)},"undefined"!=typeof exports?module.exports=A:u.cash=u.$=A}(),$.fn.isValid=function(){return this[0].checkValidity()};var $root=$("html, body");$.fn.hasAttr=function(t){var n=$(this).attr(t);return void 0!==n&&!1!==n};var ua=navigator.userAgent;function focusable(t){return t.find('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')}ua=ua.toString(),$("body").attr("id",ua);
// Hydrogen / Components / Accordion

var env = "versioned";
var version = "0-0-1";

function accordionTrigger(trigger, accordion) {
    var content = "[data-h2-accordion-content]";
    if ($(trigger).parent(accordion).hasClass("hds-active")) {
        $(trigger).attr("aria-expanded", "false");
        $(trigger).parent(accordion).removeClass("hds-active");
        $(trigger).parent(accordion).find(content).attr("aria-hidden", "true");
    } else {
        $(trigger).attr("aria-expanded", "true");
        $(trigger).parent(accordion).addClass("hds-active");
        $(trigger).parent(accordion).find(content).attr("aria-hidden", "false");
        var siblingContent = $(trigger).siblings(content);
        var focusableItems = focusable(siblingContent);
        var firstFocusableItem = $(focusableItems).first();
        if (focusableItems.length != 0) {
            firstFocusableItem[0].focus();
        }
    }
}

$(document).ready(function () {
    $(document).on("click", "[data-h2-accordion-trigger]", function (e) {
        e.preventDefault();
        if (env == "system") {
            if ($(this).parent("[data-h2-accordion]").hasAttr("data-h2-disabled") == true) {
                // Do nothing.
                // console.log("system, but disabled");
            } else {
                // console.log("system, enabled");
                var accordion = "[data-h2-accordion]";
                accordionTrigger(this, accordion);
            }
        } else if (env == "versioned") {
            if ($(this).parent("[data-h2-accordion-" + version + "]").hasAttr("data-h2-disabled") == true) {
                // Do nothing.
                // console.log("versioned, but disabled");
            } else {
                // console.log("versioned, working properly");
                var accordion = "[data-h2-accordion-" + version + "]";
                accordionTrigger(this, accordion);
            }
        }
    });
});