(self.webpackChunkabout_me=self.webpackChunkabout_me||[]).push([[691],{993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var u,l,c,s;if(Array.isArray(e)){if((u=e.length)!=a.length)return!1;for(l=u;0!=l--;)if(!i(e[l],a[l]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(s=e.entries();!(l=s.next()).done;)if(!a.has(l.value[0]))return!1;for(s=e.entries();!(l=s.next()).done;)if(!i(l.value[1],a.get(l.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(s=e.entries();!(l=s.next()).done;)if(!a.has(l.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((u=e.length)!=a.length)return!1;for(l=u;0!=l--;)if(e[l]!==a[l])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((u=(c=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(l=u;0!=l--;)if(!Object.prototype.hasOwnProperty.call(a,c[l]))return!1;if(t&&e instanceof Element)return!1;for(l=u;0!=l--;)if(("_owner"!==c[l]&&"__v"!==c[l]&&"__o"!==c[l]||!e.$$typeof)&&!i(e[c[l]],a[c[l]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},839:function(e,t,n){"use strict";var r,o=n(294),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l,c=[];function s(){l=e(c.map((function(e){return e.props}))),f.canUseDOM?t(l):n&&(l=n(l))}var f=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return l},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,c=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){c.push(this),s()},a.componentDidUpdate=function(){s()},a.componentWillUnmount=function(){var e=c.indexOf(this);c.splice(e,1),s()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(f,"canUseDOM",u),f}}},545:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return De}});var r={};n.r(r),n.d(r,{SubtitlePhrase:function(){return p},blue:function(){return T},green:function(){return v},lavender:function(){return g},pink:function(){return b},purple:function(){return y},red:function(){return h},teal:function(){return m},word:function(){return d},yellow:function(){return w}});var o,i,a,u,l=n(721),c=n(294),s="styles-module--phraseContainer--ZdMG-",f="styles-module--spacer--RqAzX",p="styles-module--SubtitlePhrase--hzquA",d="styles-module--word--mghiZ",m="styles-module--teal--Z6WKL",y="styles-module--purple--P6TJ3",h="styles-module--red--IT58O",b="styles-module--pink--0+P-Q",v="styles-module--green--5sQqX",T="styles-module--blue--3ncxt",g="styles-module--lavender--HwkvL",w="styles-module--yellow--YwFhg",E=function(e){function t(){return e.apply(this,arguments)||this}return(0,l.Z)(t,e),t.prototype.render=function(){return c.createElement("div",{className:p},this.props.linkTextMap.map((function(e){return null==e.link?c.createElement("div",{className:d},e.text):c.createElement("div",{className:d},c.createElement("div",{className:r[e.linkStyle]},c.createElement("a",{href:e.link},e.text)))})))},t}(c.PureComponent),k=E,C=function(e){function t(){return e.apply(this,arguments)||this}return(0,l.Z)(t,e),t.prototype.render=function(){var e=this;return c.createElement("div",{className:"styles-module--SubtitleLine--rUtdN"},this.props.linkTextMaps.map((function(t,n){return 0==n?c.createElement("div",null,c.createElement(k,{linkTextMap:t})):n==e.props.linkTextMaps.length-1?c.createElement("div",{className:s},c.createElement("div",{className:f},"○ "),c.createElement(k,{linkTextMap:t})):c.createElement("div",{className:s},c.createElement("div",{className:f},"○"),c.createElement(k,{linkTextMap:t}))})))},t}(c.PureComponent),S=C,A=function(e){function t(){return e.apply(this,arguments)||this}return(0,l.Z)(t,e),t.prototype.render=function(){return c.createElement("div",null,c.createElement(S,{linkTextMaps:[[{text:"email",link:"mailto:hello@jasme.et",linkStyle:"teal"}],[{text:"linkedin",link:"http://www.linkedin.com/in/arorajasmeet",linkStyle:"red"}],[{text:"github",link:"http://www.github.com/jasmeet107",linkStyle:"blue"}],[{text:"500px",link:"https://500px.com/p/jasmeet107?view=photos",linkStyle:"lavender"}]]}))},t}(c.PureComponent),O=A,x=function(e){function t(){return e.apply(this,arguments)||this}return(0,l.Z)(t,e),t.prototype.render=function(){return c.createElement("div",{className:"styles-module--FullPage--cgsXC"},c.createElement("div",{className:"styles-module--container--8QRGP"},c.createElement("div",{className:"styles-module--title--5mvGE"},"jasmeet arora"),c.createElement("div",{className:"styles-module--about--kdlnH"},c.createElement(S,{linkTextMaps:[[{text:"she/her ",link:null}],[{text:"software engineer ",link:"https://www.youtube.com/watch?v=J-qHcIapgfY",linkStyle:"purple"},{text:"at ",link:null,linkStyle:null},{text:"notarize ",link:"https://www.notarize.com/eng/author/jasmeet-arora",linkStyle:"pink"}]]}),c.createElement(S,{linkTextMaps:[[{text:"amateur ",link:null,linkStyle:null},{text:"photographer ",link:"https://www.instagram.com/jasmeet107",linkStyle:"yellow"}],[{text:"pup ",link:"https://www.instagram.com/mr.stanley.k",linkStyle:"green"},{text:"parent ",link:null,linkStyle:null}]]})),c.createElement("div",{className:"styles-module--Contact--hFahD"},c.createElement(O,null))))},t}(c.PureComponent),j=x,P=n(697),N=n.n(P),L=n(839),I=n.n(L),M=n(993),R=n.n(M),_=n(494),q=n.n(_),H="bodyAttributes",D="htmlAttributes",F="titleAttributes",B={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},Y=(Object.keys(B).map((function(e){return B[e]})),"charset"),z="cssText",U="href",Z="http-equiv",K="innerHTML",W="itemprop",G="name",Q="property",V="rel",X="src",J="target",$={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},ee="defaultTitle",te="defer",ne="encodeSpecialCharacters",re="onChangeClientState",oe="titleTemplate",ie=Object.keys($).reduce((function(e,t){return e[$[t]]=t,e}),{}),ae=[B.NOSCRIPT,B.SCRIPT,B.STYLE],ue="data-react-helmet",le="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ce=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},se=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),fe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},pe=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},de=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},me=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},ye=function(e){var t=ge(e,B.TITLE),n=ge(e,oe);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=ge(e,ee);return t||r||void 0},he=function(e){return ge(e,re)||function(){}},be=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return fe({},e,t)}),{})},ve=function(e,t){return t.filter((function(e){return void 0!==e[B.BASE]})).map((function(e){return e[B.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},Te=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&Se("Helmet: "+e+' should be of type "Array". Instead found type "'+le(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var u=i[a],l=u.toLowerCase();-1===t.indexOf(l)||n===V&&"canonical"===e[n].toLowerCase()||l===V&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(u)||u!==K&&u!==z&&u!==W||(n=u)}if(!n||!e[n])return!1;var c=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][c]&&(o[n][c]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var u=i[a],l=q()({},r[u],o[u]);r[u]=l}return e}),[]).reverse()},ge=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},we=(o=Date.now(),function(e){var t=Date.now();t-o>16?(o=t,e(t)):setTimeout((function(){we(e)}),0)}),Ee=function(e){return clearTimeout(e)},ke="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||we:n.g.requestAnimationFrame||we,Ce="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||Ee:n.g.cancelAnimationFrame||Ee,Se=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},Ae=null,Oe=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,u=e.noscriptTags,l=e.onChangeClientState,c=e.scriptTags,s=e.styleTags,f=e.title,p=e.titleAttributes;Pe(B.BODY,r),Pe(B.HTML,o),je(f,p);var d={baseTag:Ne(B.BASE,n),linkTags:Ne(B.LINK,i),metaTags:Ne(B.META,a),noscriptTags:Ne(B.NOSCRIPT,u),scriptTags:Ne(B.SCRIPT,c),styleTags:Ne(B.STYLE,s)},m={},y={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(y[e]=d[e].oldTags)})),t&&t(),l(e,m,y)},xe=function(e){return Array.isArray(e)?e.join(""):e},je=function(e,t){void 0!==e&&document.title!==e&&(document.title=xe(e)),Pe(B.TITLE,t)},Pe=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(ue),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),u=0;u<a.length;u++){var l=a[u],c=t[l]||"";n.getAttribute(l)!==c&&n.setAttribute(l,c),-1===o.indexOf(l)&&o.push(l);var s=i.indexOf(l);-1!==s&&i.splice(s,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);o.length===i.length?n.removeAttribute(ue):n.getAttribute(ue)!==a.join(",")&&n.setAttribute(ue,a.join(","))}},Ne=function(e,t){var n=document.head||document.querySelector(B.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===K)n.innerHTML=t.innerHTML;else if(r===z)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var u=void 0===t[r]?"":t[r];n.setAttribute(r,u)}n.setAttribute(ue,"true"),o.some((function(e,t){return a=t,n.isEqualNode(e)}))?o.splice(a,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},Le=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},Ie=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[$[n]||n]=e[n],t}),t)},Me=function(e,t,n){switch(e){case B.TITLE:return{toComponent:function(){return function(e,t,n){var r,o=((r={key:t})[ue]=!0,r),i=Ie(n,o);return[c.createElement(B.TITLE,i,t)]}(0,t.title,t.titleAttributes)},toString:function(){return function(e,t,n,r){var o=Le(n),i=xe(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+me(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+me(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case H:case D:return{toComponent:function(){return Ie(t)},toString:function(){return Le(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[ue]=!0,r);return Object.keys(t).forEach((function(e){var n=$[e]||e;if(n===K||n===z){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),c.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===K||e===z)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+me(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===ae.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},Re=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,u=e.noscriptTags,l=e.scriptTags,c=e.styleTags,s=e.title,f=void 0===s?"":s,p=e.titleAttributes;return{base:Me(B.BASE,t,r),bodyAttributes:Me(H,n,r),htmlAttributes:Me(D,o,r),link:Me(B.LINK,i,r),meta:Me(B.META,a,r),noscript:Me(B.NOSCRIPT,u,r),script:Me(B.SCRIPT,l,r),style:Me(B.STYLE,c,r),title:Me(B.TITLE,{title:f,titleAttributes:p},r)}},_e=I()((function(e){return{baseTag:ve([U,J],e),bodyAttributes:be(H,e),defer:ge(e,te),encode:ge(e,ne),htmlAttributes:be(D,e),linkTags:Te(B.LINK,[V,U],e),metaTags:Te(B.META,[G,Y,Z,Q,W],e),noscriptTags:Te(B.NOSCRIPT,[K],e),onChangeClientState:he(e),scriptTags:Te(B.SCRIPT,[X,K],e),styleTags:Te(B.STYLE,[z],e),title:ye(e),titleAttributes:be(F,e)}}),(function(e){Ae&&Ce(Ae),e.defer?Ae=ke((function(){Oe(e,(function(){Ae=null}))})):(Oe(e),Ae=null)}),Re)((function(){return null})),qe=(i=_e,u=a=function(e){function t(){return ce(this,t),de(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!R()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case B.SCRIPT:case B.NOSCRIPT:return{innerHTML:t};case B.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return fe({},r,((t={})[n.type]=[].concat(r[n.type]||[],[fe({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case B.TITLE:return fe({},o,((t={})[r.type]=a,t.titleAttributes=fe({},i),t));case B.BODY:return fe({},o,{bodyAttributes:fe({},i)});case B.HTML:return fe({},o,{htmlAttributes:fe({},i)})}return fe({},o,((n={})[r.type]=fe({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=fe({},t);return Object.keys(e).forEach((function(t){var r;n=fe({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return c.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[ie[n]||n]=e[n],t}),t)}(pe(o,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case B.LINK:case B.META:case B.NOSCRIPT:case B.SCRIPT:case B.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=pe(e,["children"]),r=fe({},n);return t&&(r=this.mapChildrenToProps(t,r)),c.createElement(i,r)},se(t,null,[{key:"canUseDOM",set:function(e){i.canUseDOM=e}}]),t}(c.Component),a.propTypes={base:N().object,bodyAttributes:N().object,children:N().oneOfType([N().arrayOf(N().node),N().node]),defaultTitle:N().string,defer:N().bool,encodeSpecialCharacters:N().bool,htmlAttributes:N().object,link:N().arrayOf(N().object),meta:N().arrayOf(N().object),noscript:N().arrayOf(N().object),onChangeClientState:N().func,script:N().arrayOf(N().object),style:N().arrayOf(N().object),title:N().string,titleAttributes:N().object,titleTemplate:N().string},a.defaultProps={defer:!0,encodeSpecialCharacters:!0},a.peek=i.peek,a.rewind=function(){var e=i.rewind();return e||(e=Re({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},u);qe.renderStatic=qe.rewind;var He=function(e){function t(){return e.apply(this,arguments)||this}return(0,l.Z)(t,e),t.prototype.render=function(){return c.createElement(c.Fragment,null,c.createElement(qe,null,c.createElement("title",null,"jasmeet"),c.createElement("meta",{name:"jasmeet"}),c.createElement("link",{rel:"icon",type:"image/png",href:"./images/sass.png",sizes:"16x16"})),c.createElement("div",{className:"styles-module--Index--Rdqce"},c.createElement(j,null)))},t}(c.PureComponent),De=He}}]);
//# sourceMappingURL=component---src-pages-index-tsx-66445ceea0ec7dff155c.js.map