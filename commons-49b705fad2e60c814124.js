(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"+6XX":function(e,t,n){var o=n("y1pI");e.exports=function(e){return o(this.__data__,e)>-1}},"/9aa":function(e,t,n){var o=n("NykK"),r=n("ExA7");e.exports=function(e){return"symbol"==typeof e||r(e)&&"[object Symbol]"==o(e)}},"1Mdp":function(e,t,n){var o=n("q1tI"),r=o.createElement("svg",{viewBox:"-2 -5 14 20",height:"100%",width:"100%",style:{position:"absolute",top:0}},o.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"})),i=o.createElement("svg",{height:"100%",width:"100%",viewBox:"-2 -5 17 21",style:{position:"absolute",top:0}},o.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}));function a(e){if(7===e.length)return e;for(var t="#",n=1;n<4;n+=1)t+=e[n]+e[n];return t}function l(e,t,n,o,r){return function(e,t,n,o,r){var i=(e-n)/(t-n);if(0===i)return o;if(1===i)return r;for(var a="#",l=1;l<6;l+=2){var s=parseInt(o.substr(l,2),16),c=parseInt(r.substr(l,2),16),u=Math.round((1-i)*s+i*c).toString(16);1===u.length&&(u="0"+u),a+=u}return a}(e,t,n,a(o),a(r))}var s=function(e){function t(t){e.call(this,t);var n=t.height,o=t.width,r=t.checked;this.t=t.handleDiameter||n-2,this.i=Math.max(o-n,o-(n+this.t)/2),this.s=Math.max(0,(n-this.t)/2),this.state={o:r?this.i:this.s},this.n=0,this.h=0,this.e=this.e.bind(this),this.a=this.a.bind(this),this.r=this.r.bind(this),this.c=this.c.bind(this),this.l=this.l.bind(this),this.u=this.u.bind(this),this.f=this.f.bind(this),this.p=this.p.bind(this),this.b=this.b.bind(this),this.g=this.g.bind(this),this.v=this.v.bind(this),this.w=this.w.bind(this)}return e&&(t.__proto__=e),((t.prototype=Object.create(e&&e.prototype)).constructor=t).prototype.componentWillReceiveProps=function(e){this.setState({o:e.checked?this.i:this.s})},t.prototype.k=function(e){this.y.focus(),this.setState({m:e,M:!0,R:Date.now()})},t.prototype.C=function(e){var t=this.state,n=t.m,o=t.o,r=(this.props.checked?this.i:this.s)+e-n;t.T||e===n||this.setState({T:!0});var i=Math.min(this.i,Math.max(this.s,r));i!==o&&this.setState({o:i})},t.prototype.S=function(e){var t=this.state,n=t.o,o=t.T,r=t.R,i=this.props.checked,a=(this.i+this.s)/2,l=Date.now()-r;!o||l<250?this.$(e):i?a<n?this.setState({o:this.i}):this.$(e):n<a?this.setState({o:this.s}):this.$(e),this.setState({T:!1,M:!1}),this.n=Date.now()},t.prototype.e=function(e){e.preventDefault(),"number"==typeof e.button&&0!==e.button||(this.k(e.clientX),window.addEventListener("mousemove",this.a),window.addEventListener("mouseup",this.r))},t.prototype.a=function(e){e.preventDefault(),this.C(e.clientX)},t.prototype.r=function(e){this.S(e),window.removeEventListener("mousemove",this.a),window.removeEventListener("mouseup",this.r)},t.prototype.c=function(e){this.x=null,this.k(e.touches[0].clientX)},t.prototype.l=function(e){this.C(e.touches[0].clientX)},t.prototype.u=function(e){e.preventDefault(),this.S(e)},t.prototype.p=function(e){50<Date.now()-this.n&&(this.$(e),50<Date.now()-this.h&&this.setState({M:!1}))},t.prototype.b=function(){this.h=Date.now()},t.prototype.g=function(){this.setState({M:!0})},t.prototype.v=function(){this.setState({M:!1})},t.prototype.w=function(e){this.y=e},t.prototype.f=function(e){e.preventDefault(),this.y.focus(),this.$(e),this.setState({M:!1})},t.prototype.$=function(e){var t=this.props;(0,t.onChange)(!t.checked,e,t.id)},t.prototype.render=function(){var e=this.props,t=e.checked,n=e.disabled,r=e.className,i=e.offColor,a=e.onColor,s=e.offHandleColor,c=e.onHandleColor,u=e.checkedIcon,d=e.uncheckedIcon,h=e.boxShadow,p=e.activeBoxShadow,f=e.height,m=e.width,v=e.id,y=e.name,b=e["aria-labelledby"],g=e["aria-label"],w=e.tabIndex,C=this.state,S=C.o,E=C.T,k=C.M,x={position:"relative",display:"inline-block",textAlign:"left",opacity:n?.5:1,borderRadius:f/2,WebkitTransition:"opacity 0.25s",MozTransition:"opacity 0.25s",transition:"opacity 0.25s",touchAction:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none",userSelect:"none"},N={height:f,width:m,margin:Math.max(0,(this.t-f)/2),position:"relative",background:l(S,this.i,this.s,i,a),borderRadius:f/2,cursor:n?"default":"pointer",WebkitTransition:E?null:"background 0.25s",MozTransition:E?null:"background 0.25s",transition:E?null:"background 0.25s"},M={height:f,width:Math.min(1.5*f,m-(this.t+f)/2+1),position:"relative",opacity:(S-this.s)/(this.i-this.s),pointerEvents:"none",WebkitTransition:E?null:"opacity 0.25s",MozTransition:E?null:"opacity 0.25s",transition:E?null:"opacity 0.25s"},_={height:f,width:Math.min(1.5*f,m-(this.t+f)/2+1),position:"absolute",opacity:1-(S-this.s)/(this.i-this.s),right:0,top:0,pointerEvents:"none",WebkitTransition:E?null:"opacity 0.25s",MozTransition:E?null:"opacity 0.25s",transition:E?null:"opacity 0.25s"},O={height:this.t,width:this.t,background:l(S,this.i,this.s,s,c),display:"inline-block",cursor:n?"default":"pointer",borderRadius:"50%",position:"absolute",transform:"translateX("+S+"px)",top:Math.max(0,(f-this.t)/2),outline:0,boxShadow:k?p:h,border:0,WebkitTransition:E?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",MozTransition:E?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",transition:E?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s"};return o.createElement("div",{className:r,style:x},o.createElement("div",{className:"react-switch-bg",style:N,onClick:n?null:this.f,onMouseDown:function(e){return e.preventDefault()}},u&&o.createElement("div",{style:M},u),d&&o.createElement("div",{style:_},d)),o.createElement("div",{className:"react-switch-handle",style:O,onClick:function(e){return e.preventDefault()},onMouseDown:n?null:this.e,onTouchStart:n?null:this.c,onTouchMove:n?null:this.l,onTouchEnd:n?null:this.u,onTouchCancel:n?null:this.v}),o.createElement("input",{type:"checkbox",role:"switch",id:v,name:y,checked:t,disabled:n,tabIndex:w,onFocus:this.g,onBlur:this.v,onKeyUp:this.b,onChange:this.p,"aria-labelledby":b,"aria-label":g,style:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",width:1},ref:this.w}))},t}(o.Component);s.defaultProps={disabled:!1,offColor:"#888",onColor:"#080",offHandleColor:"#fff",onHandleColor:"#fff",uncheckedIcon:r,checkedIcon:i,boxShadow:null,activeBoxShadow:"0 0 2px 3px #3bf",height:28,width:56},e.exports=s},"2gN3":function(e,t,n){var o=n("Kz5y")["__core-js_shared__"];e.exports=o},"2pUs":function(e,t,n){e.exports={headerColor:"lightThemeStyles-module--headerColor--30jfX",backgroundColor:"lightThemeStyles-module--backgroundColor--36-jH",cardStyles:"lightThemeStyles-module--cardStyles--2L9qM"}},"3Fdi":function(e,t){var n=Function.prototype.toString;e.exports=function(e){if(null!=e){try{return n.call(e)}catch(t){}try{return e+""}catch(t){}}return""}},"44Ds":function(e,t,n){var o=n("e4Nc");function r(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var o=arguments,r=t?t.apply(this,o):o[0],i=n.cache;if(i.has(r))return i.get(r);var a=e.apply(this,o);return n.cache=i.set(r,a)||i,a};return n.cache=new(r.Cache||o),n}r.Cache=o,e.exports=r},"4kuk":function(e,t,n){var o=n("SfRM"),r=n("Hvzi"),i=n("u8Dt"),a=n("ekgI"),l=n("JSQU");function s(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var o=e[t];this.set(o[0],o[1])}}s.prototype.clear=o,s.prototype.delete=r,s.prototype.get=i,s.prototype.has=a,s.prototype.set=l,e.exports=s},"4uTw":function(e,t,n){var o=n("Z0cm"),r=n("9ggG"),i=n("GNiM"),a=n("dt0z");e.exports=function(e,t){return o(e)?e:r(e,t)?[e]:i(a(e))}},"6M+3":function(e,t,n){e.exports={headerColor:"darkThemeStyles-module--headerColor--r4rx8",backgroundColor:"darkThemeStyles-module--backgroundColor--2n-YJ",cardStyles:"darkThemeStyles-module--cardStyles--36D2i"}},"89RF":function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var o=n("dI71"),r=n("q1tI"),i=n.n(r),a=n("6M+3"),l=n.n(a),s=n("2pUs"),c=n.n(s),u=function(e){return function(t){function n(){for(var e,n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))||this).state={isMobile:!1},e.resizeListener=function(){var t=e.state.isMobile;t&&window.innerWidth>768?e.setState({isMobile:!1}):!t&&window.innerWidth<768&&e.setState({isMobile:!0})},e}Object(o.a)(n,t);var r=n.prototype;return r.componentDidMount=function(){this.resizeListener(),window.addEventListener("resize",this.resizeListener)},r.componentWillUnmount=function(){window.removeEventListener("resize",this.resizeListener)},r.render=function(){return i.a.createElement(e,Object.assign({isMobile:this.state.isMobile},this.props))},n}(i.a.Component)},d={LIGHT:"light",DARK:"dark"},h=i.a.createContext({theme:d.LIGHT}),p=function(e){function t(t){var n;return(n=e.call(this,t)||this).toggleTheme=function(){window.requestAnimationFrame((function(){return n.setState((function(e){switch(e.currentColor){case d.LIGHT:return window&&window.localStorage&&localStorage.setItem("currentThemeColor",d.DARK),window.__initialColor=d.DARK,{currentColor:d.DARK};case d.DARK:return window&&window.localStorage&&localStorage.setItem("currentThemeColor",d.LIGHT),window.__initialColor=d.LIGHT,{currentColor:d.LIGHT};default:return}}))}))},n.state={currentColor:null},n}Object(o.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.setState({currentColor:window&&window.__initialColor})},n.render=function(){var e=this.props,t=e.children,n=e.isMobile,o=this.state.currentColor,r=o===d.LIGHT?c.a:l.a;return i.a.createElement(h.Provider,{value:{currentColor:o,themeStyles:r,toggleTheme:this.toggleTheme,isMobile:n}},i.a.createElement("div",{style:{display:this.state.currentColor?"block":"none"}},t))},t}(r.Component);p.defaultProps={children:null};t.c=u(p)},"9Nap":function(e,t,n){var o=n("/9aa");e.exports=function(e){if("string"==typeof e||o(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}},"9ggG":function(e,t,n){var o=n("Z0cm"),r=n("/9aa"),i=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,a=/^\w*$/;e.exports=function(e,t){if(o(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!r(e))||(a.test(e)||!i.test(e)||null!=t&&e in Object(t))}},A5mB:function(e,t,n){e.exports={navLink:"headerStyles-module--navLink--b0Npd",mobileNavLink:"headerStyles-module--mobileNavLink--3QKVx",navLinks:"headerStyles-module--navLinks--1e-eo",nav:"headerStyles-module--nav--3kbAQ",buttonsContainer:"headerStyles-module--buttonsContainer--2KLLg",title:"headerStyles-module--title--1eNkk",themeSwitch:"headerStyles-module--themeSwitch--33H1Z",mobileMenuItems:"headerStyles-module--mobileMenuItems--2chnY",mobileMenuContainer:"headerStyles-module--mobileMenuContainer--2v6Z6",mobileMenuButton:"headerStyles-module--mobileMenuButton--1U1Xf",headerContainer:"headerStyles-module--headerContainer--3WrSF",headerContainerNonMobile:"headerStyles-module--headerContainerNonMobile--1dBnb"}},AP2z:function(e,t,n){var o=n("nmnc"),r=Object.prototype,i=r.hasOwnProperty,a=r.toString,l=o?o.toStringTag:void 0;e.exports=function(e){var t=i.call(e,l),n=e[l];try{e[l]=void 0;var o=!0}catch(s){}var r=a.call(e);return o&&(t?e[l]=n:delete e[l]),r}},Cwc5:function(e,t,n){var o=n("NKxu"),r=n("Npjl");e.exports=function(e,t){var n=r(e,t);return o(n)?n:void 0}},D4hd:function(e,t,n){e.exports={contentContainer:"pageStyles-module--contentContainer--1z7Bs",mainContent:"pageStyles-module--mainContent--2_Ihi"}},E2jh:function(e,t,n){var o,r=n("2gN3"),i=(o=/[^.]+$/.exec(r&&r.keys&&r.keys.IE_PROTO||""))?"Symbol(src)_1."+o:"";e.exports=function(e){return!!i&&i in e}},EpBk:function(e,t){e.exports=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}},ExA7:function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},GNiM:function(e,t,n){var o=n("I01J"),r=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,i=/\\(\\)?/g,a=o((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(r,(function(e,n,o,r){t.push(o?r.replace(i,"$1"):n||e)})),t}));e.exports=a},GoyQ:function(e,t){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},H8j4:function(e,t,n){var o=n("QkVE");e.exports=function(e,t){var n=o(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this}},Hvzi:function(e,t){e.exports=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}},I01J:function(e,t,n){var o=n("44Ds");e.exports=function(e){var t=o(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}},Ig5L:function(e,t,n){"use strict";var o=n("q1tI"),r=n.n(o),i=n("bYfv"),a=n.n(i),l=n("qGKL"),s=function(e){var t=e.children,n=e.className;return r.a.createElement(l.a,null,(function(e){var o=e.themeStyles.cardStyles,i=e.isMobile;return r.a.createElement("div",{className:a.a.card+" "+(i?a.a.cardMobile:a.a.cardDesktop)+" "+o+" "+n},t)}))};s.defaultProps={children:null,className:""},t.a=s},JHgL:function(e,t,n){var o=n("QkVE");e.exports=function(e){return o(this,e).get(e)}},JSQU:function(e,t,n){var o=n("YESw");e.exports=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=o&&void 0===t?"__lodash_hash_undefined__":t,this}},KMkd:function(e,t){e.exports=function(){this.__data__=[],this.size=0}},KfNM:function(e,t){var n=Object.prototype.toString;e.exports=function(e){return n.call(e)}},Kz5y:function(e,t,n){var o=n("WFqU"),r="object"==typeof self&&self&&self.Object===Object&&self,i=o||r||Function("return this")();e.exports=i},NKxu:function(e,t,n){var o=n("lSCD"),r=n("E2jh"),i=n("GoyQ"),a=n("3Fdi"),l=/^\[object .+?Constructor\]$/,s=Function.prototype,c=Object.prototype,u=s.toString,d=c.hasOwnProperty,h=RegExp("^"+u.call(d).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");e.exports=function(e){return!(!i(e)||r(e))&&(o(e)?h:l).test(a(e))}},Npjl:function(e,t){e.exports=function(e,t){return null==e?void 0:e[t]}},NykK:function(e,t,n){var o=n("nmnc"),r=n("AP2z"),i=n("KfNM"),a=o?o.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":a&&a in Object(e)?r(e):i(e)}},PUSg:function(e,t,n){e.exports={ModalContainer:"slideOutContentStyles-module--ModalContainer--1A0Iq",ModalOpen:"slideOutContentStyles-module--ModalOpen--eycXh",ModalCloseArea:"slideOutContentStyles-module--ModalCloseArea--1kZF7",ModalContent:"slideOutContentStyles-module--ModalContent--3Rm5r",modalLeft:"slideOutContentStyles-module--modalLeft--2aPTQ",modalRight:"slideOutContentStyles-module--modalRight--3Wp9q",ModalContentOpen:"slideOutContentStyles-module--ModalContentOpen--30z23"}},QkVE:function(e,t,n){var o=n("EpBk");e.exports=function(e,t){var n=e.__data__;return o(t)?n["string"==typeof t?"string":"hash"]:n.map}},SfRM:function(e,t,n){var o=n("YESw");e.exports=function(){this.__data__=o?o(null):{},this.size=0}},"U+D3":function(e,t,n){e.exports={iconStyle:"switchStyles-module--iconStyle--u8zJx"}},WFqU:function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(this,n("yLpj"))},Xi7e:function(e,t,n){var o=n("KMkd"),r=n("adU4"),i=n("tMB7"),a=n("+6XX"),l=n("Z8oC");function s(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var o=e[t];this.set(o[0],o[1])}}s.prototype.clear=o,s.prototype.delete=r,s.prototype.get=i,s.prototype.has=a,s.prototype.set=l,e.exports=s},YESw:function(e,t,n){var o=n("Cwc5")(Object,"create");e.exports=o},Z0cm:function(e,t){var n=Array.isArray;e.exports=n},Z8oC:function(e,t,n){var o=n("y1pI");e.exports=function(e,t){var n=this.__data__,r=o(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this}},ZWtO:function(e,t,n){var o=n("4uTw"),r=n("9Nap");e.exports=function(e,t){for(var n=0,i=(t=o(t,e)).length;null!=e&&n<i;)e=e[r(t[n++])];return n&&n==i?e:void 0}},adU4:function(e,t,n){var o=n("y1pI"),r=Array.prototype.splice;e.exports=function(e){var t=this.__data__,n=o(t,e);return!(n<0)&&(n==t.length-1?t.pop():r.call(t,n,1),--this.size,!0)}},bYfv:function(e,t,n){e.exports={card:"cardStyles-module--card--10a1J",cardDesktop:"cardStyles-module--cardDesktop--1x6V5",cardMobile:"cardStyles-module--cardMobile--xv7zN"}},dt0z:function(e,t,n){var o=n("zoYe");e.exports=function(e){return null==e?"":o(e)}},e4Nc:function(e,t,n){var o=n("fGT3"),r=n("k+1r"),i=n("JHgL"),a=n("pSRY"),l=n("H8j4");function s(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var o=e[t];this.set(o[0],o[1])}}s.prototype.clear=o,s.prototype.delete=r,s.prototype.get=i,s.prototype.has=a,s.prototype.set=l,e.exports=s},eUgh:function(e,t){e.exports=function(e,t){for(var n=-1,o=null==e?0:e.length,r=Array(o);++n<o;)r[n]=t(e[n],n,e);return r}},ebwN:function(e,t,n){var o=n("Cwc5")(n("Kz5y"),"Map");e.exports=o},ekgI:function(e,t,n){var o=n("YESw"),r=Object.prototype.hasOwnProperty;e.exports=function(e){var t=this.__data__;return o?void 0!==t[e]:r.call(t,e)}},fGT3:function(e,t,n){var o=n("4kuk"),r=n("Xi7e"),i=n("ebwN");e.exports=function(){this.size=0,this.__data__={hash:new o,map:new(i||r),string:new o}}},"k+1r":function(e,t,n){var o=n("QkVE");e.exports=function(e){var t=o(this,e).delete(e);return this.size-=t?1:0,t}},kPzu:function(e,t,n){e.exports={modalBackdrop:"centerContentStyles-module--modalBackdrop--zadc-",backdropVisible:"centerContentStyles-module--backdropVisible--1N8zn",modalContent:"centerContentStyles-module--modalContent--2lows",small:"centerContentStyles-module--small--3JBnz",medium:"centerContentStyles-module--medium--1OVsR",large:"centerContentStyles-module--large--N8XMm"}},lSCD:function(e,t,n){var o=n("NykK"),r=n("GoyQ");e.exports=function(e){if(!r(e))return!1;var t=o(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t}},ljhN:function(e,t){e.exports=function(e,t){return e===t||e!=e&&t!=t}},mwIZ:function(e,t,n){var o=n("ZWtO");e.exports=function(e,t,n){var r=null==e?void 0:o(e,t);return void 0===r?n:r}},nmnc:function(e,t,n){var o=n("Kz5y").Symbol;e.exports=o},ohBo:function(e,t,n){e.exports=n("1Mdp")},pSRY:function(e,t,n){var o=n("QkVE");e.exports=function(e){return o(this,e).has(e)}},qGKL:function(e,t,n){"use strict";var o=n("q1tI"),r=n.n(o),i=n("89RF"),a=function(e){var t=e.children;return r.a.createElement(i.b.Consumer,null,(function(e){var n=e.currentColor,o=e.themeStyles,r=e.toggleTheme,i=e.isMobile;return t({themeStyles:o,toggleTheme:r,currentColor:n,isMobile:i})}))};a.defaultProps={children:null},t.a=a},sweJ:function(e,t,n){"use strict";var o=n("q1tI"),r=n.n(o),i=n("mwIZ"),a=n.n(i),l=n("Wbzz"),s=function(e){var t=e.children,n=void 0===t?null:t;return r.a.createElement(l.b,{query:"3000541721"},(function(e){var t=a()(e,["site","siteMetadata","title"],"default title"),o=a()(e,["site","siteMetadata","description"],"default description");return n({title:t,description:o})}))},c=n("A5mB"),u=n.n(c),d=n("dI71"),h=n("i8i4"),p=n.n(h),f=n("17x9"),m=n.n(f),v=!("undefined"==typeof window||!window.document||!window.document.createElement),y=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var w=function(e){function t(){return b(this,t),g(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),y(t,[{key:"componentWillUnmount",value:function(){this.defaultNode&&document.body.removeChild(this.defaultNode),this.defaultNode=null}},{key:"render",value:function(){return v?(this.props.node||this.defaultNode||(this.defaultNode=document.createElement("div"),document.body.appendChild(this.defaultNode)),p.a.createPortal(this.props.children,this.props.node||this.defaultNode)):null}}]),t}(r.a.Component);w.propTypes={children:m.a.node.isRequired,node:m.a.any};var C=w,S=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();function E(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function k(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var x=function(e){function t(){return E(this,t),k(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),S(t,[{key:"componentDidMount",value:function(){this.renderPortal()}},{key:"componentDidUpdate",value:function(e){this.renderPortal()}},{key:"componentWillUnmount",value:function(){p.a.unmountComponentAtNode(this.defaultNode||this.props.node),this.defaultNode&&document.body.removeChild(this.defaultNode),this.defaultNode=null,this.portal=null}},{key:"renderPortal",value:function(e){this.props.node||this.defaultNode||(this.defaultNode=document.createElement("div"),document.body.appendChild(this.defaultNode));var t=this.props.children;"function"==typeof this.props.children.type&&(t=r.a.cloneElement(this.props.children)),this.portal=p.a.unstable_renderSubtreeIntoContainer(this,t,this.props.node||this.defaultNode)}},{key:"render",value:function(){return null}}]),t}(r.a.Component),N=x;x.propTypes={children:m.a.node.isRequired,node:m.a.any};var M=p.a.createPortal?C:N,_=n("vN+2"),O=n.n(_),L=n("kPzu"),z=n.n(L),T="medium",j=function(e){var t=e.isOpen,n=e.closeModal,o=e.contentSize,i=e.children,a=e.className;return r.a.createElement(M,null,r.a.createElement("div",{className:z.a.modalBackdrop+" "+(t?z.a.backdropVisible:"")+" "+a,onClick:n},r.a.createElement("div",{className:z.a.modalContent+" "+z.a[o],onClick:function(e){return e.stopPropagation()}},i)))};j.defaultProps={className:"",children:null,contentSize:T,closeModal:O.a,isOpen:!1};var I=j,D=n("PUSg"),P=n.n(D),B={LEFT:Symbol("left"),RIGHT:Symbol("right")},R=function(e){var t=e.direction,n=e.isOpen,o=e.closeModal,i=e.children,a=e.className,l=(t===B.LEFT?P.a.modalLeft:P.a.modalRight)+" "+P.a.ModalContent+" "+(n?P.a.ModalContentOpen:"")+" "+a;return r.a.createElement(M,null,r.a.createElement("div",{className:P.a.ModalContainer+" "+(n?P.a.ModalOpen:"")},r.a.createElement("div",{className:P.a.ModalCloseArea,onClick:o},r.a.createElement("div",{className:l,onClick:function(e){return e.stopPropagation()}},i))))},A=function(e){var t=e.children,n=e.className;return r.a.createElement(Z.Consumer,null,(function(e){var o=e.isOpen,i=e.closeModal,a=e.type,l=e.direction,s=e.contentSize;switch(a){case J.SLIDE_IN:return r.a.createElement(R,{direction:l,isOpen:o,closeModal:i,className:n},t);case J.CENTER:return r.a.createElement(I,{isOpen:o,closeModal:i,contentSize:s,className:n},t);default:return r.a.createElement("div",null)}}))};A.defaultProps={children:null,className:""};var H=A,K=n("zLVn"),G=function(e){var t=e.children,n=Object(K.a)(e,["children"]);return r.a.createElement(Z.Consumer,null,(function(e){var o=e.closeModal;return"function"==typeof t?t({closeModal:o}):r.a.createElement("button",Object.assign({},n,{onClick:o}),t)}))},U=function(e){var t=e.children,n=Object(K.a)(e,["children"]);return r.a.createElement(Z.Consumer,null,(function(e){var o=e.openModal;return"function"==typeof t?t({openModal:o}):r.a.createElement("button",Object.assign({},n,{onClick:o}),t)}))},W=n("ylWG"),F=n.n(W),q=function(e){var t=e.size,n=e.color;return r.a.createElement("svg",{fill:n,width:t+"px",height:t+"px",viewBox:"-7 -1 10 10"},r.a.createElement("g",{transform:"translate(0, 1.000000)"},r.a.createElement("path",{d:"M2.30111111,0.523333333 L1.47666667,-0.301111111 L-2,3.17555556 L-5.47666667,-0.301111111 L-6.30111111,0.523333333 L-2.82444444,4 L-6.30111111,7.47666667 L-5.47666667,8.30111111 L-2,4.82444444 L1.47666667,8.30111111 L2.30111111,7.47666667 L-1.17555556,4 L2.30111111,0.523333333 Z",id:"Shape"})))},X=function(e){var t=e.size,n=e.color,o=e.className,i=Object(K.a)(e,["size","color","className"]);return r.a.createElement(G,null,(function(e){var a=e.closeModal;return r.a.createElement("div",Object.assign({className:F.a.cancelButton+" "+o,onClick:a},i),r.a.createElement(q,{size:t,color:n}))}))};X.defaultProps={size:20,className:"",color:"black"};var $=X,Z=r.a.createContext(),J={CENTER:Symbol("center"),SLIDE_IN:Symbol("slideIn")},Q=function(e){function t(){for(var t,n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))||this).state={isOpen:!1},t.setStatus=function(e){return function(){return window.requestAnimationFrame((function(){return t.setState({isOpen:e})}))}},t}return Object(d.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.type,n=e.children,o=e.direction,i=e.contentSize;return r.a.createElement(Z.Provider,{value:{isOpen:this.state.isOpen,openModal:this.setStatus(!0),closeModal:this.setStatus(!1),type:t,direction:o,contentSize:i}},n)},t}(o.Component);Q.CloseButton=G,Q.OpenButton=U,Q.Content=H,Q.CancelButton=$,Q.defaultProps={children:null,type:J.CENTER,direction:B.LEFT,contentSize:T};var V=Q,Y=function(e){var t=e.height,n=void 0===t?30:t,o=e.width,i=void 0===o?30:o,a=e.fill,l=void 0===a?"white":a,s=Object(K.a)(e,["height","width","fill"]);return r.a.createElement("div",s,r.a.createElement("svg",{fill:l,height:n+"px",width:i+"px",version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 100 100"},r.a.createElement("g",null,r.a.createElement("path",{className:"line line-1",d:"M5 13h90v14H5z"}),r.a.createElement("path",{className:"line line-2",d:"M5 43h90v14H5z"}),r.a.createElement("path",{className:"line line-3",d:"M5 73h90v14H5z"}))))},ee=n("ohBo"),te=n.n(ee),ne=n("U+D3"),oe=n.n(ne),re=n("89RF"),ie=function(e){var t=e.className,n=Object(K.a)(e,["className"]);return r.a.createElement(re.b.Consumer,null,(function(e){var o=e.currentColor,i=e.toggleTheme;return r.a.createElement(te.a,Object.assign({onChange:i,checked:o===re.a.LIGHT,className:t,uncheckedIcon:r.a.createElement("div",{className:oe.a.iconStyle},"D"),checkedIcon:r.a.createElement("div",{className:oe.a.iconStyle},"L"),onColor:"#000",offColor:"#000"},n))}))},ae=function(e){var t=e.headerColor;return e.isMobile?r.a.createElement(s,null,(function(e){var n=e.title;return r.a.createElement(V,{type:J.SLIDE_IN},r.a.createElement(V.Content,{className:u.a.mobileMenuContainer},r.a.createElement(V.CancelButton,{color:"white"}),r.a.createElement("ul",{className:u.a.mobileMenuItems},r.a.createElement("li",{className:u.a.mobileNavLink},r.a.createElement(l.a,{to:"/",className:u.a.mobileNavLink},"Blog")),r.a.createElement("li",{className:u.a.mobileNavLink},r.a.createElement(l.a,{to:"/about/",className:u.a.mobileNavLink},"About")),r.a.createElement("li",{className:u.a.mobileNavLink},r.a.createElement(ie,{onColor:"#282d33",offColor:"#282d33"})))),r.a.createElement("header",{className:u.a.headerContainer+" "+t},r.a.createElement(V.OpenButton,null,(function(e){var t=e.openModal;return r.a.createElement(Y,{onClick:t,className:u.a.title+" "+u.a.mobileMenuButton})})),r.a.createElement("a",{className:u.a.title,href:"/"},n)))})):r.a.createElement(s,null,(function(e){var n=e.title;return r.a.createElement("header",{className:u.a.headerContainer+" "+u.a.headerContainerNonMobile+" "+t},r.a.createElement("div",{className:u.a.buttonsContainer},r.a.createElement(l.a,{to:"/",className:u.a.title},n),r.a.createElement("nav",{className:u.a.nav},r.a.createElement("ul",{className:u.a.navLink},r.a.createElement("li",{className:u.a.navLink},r.a.createElement(l.a,{to:"/",className:u.a.navLink},"Blog")),r.a.createElement("li",{className:u.a.navLink},r.a.createElement(l.a,{to:"/about/",className:u.a.navLink},"About"))))),r.a.createElement(ie,{className:u.a.themeSwitch}))}))},le=n("qGKL"),se=n("D4hd"),ce=n.n(se);t.a=function(e){var t=e.children;return r.a.createElement(re.c,null,r.a.createElement(le.a,null,(function(e){var n=e.themeStyles,o=e.isMobile;return r.a.createElement("div",null,r.a.createElement(ae,{headerColor:n.headerColor,isMobile:o}),r.a.createElement("div",{className:n.backgroundColor+" "+ce.a.contentContainer},r.a.createElement("main",{className:ce.a.mainContent},t)))})))}},tMB7:function(e,t,n){var o=n("y1pI");e.exports=function(e){var t=this.__data__,n=o(t,e);return n<0?void 0:t[n][1]}},u8Dt:function(e,t,n){var o=n("YESw"),r=Object.prototype.hasOwnProperty;e.exports=function(e){var t=this.__data__;if(o){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return r.call(t,e)?t[e]:void 0}},"vN+2":function(e,t){e.exports=function(){}},y1pI:function(e,t,n){var o=n("ljhN");e.exports=function(e,t){for(var n=e.length;n--;)if(o(e[n][0],t))return n;return-1}},ylWG:function(e,t,n){e.exports={cancelButton:"cancelModalButtonStyles-module--cancelButton--3caKn"}},zLVn:function(e,t,n){"use strict";function o(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}n.d(t,"a",(function(){return o}))},zoYe:function(e,t,n){var o=n("nmnc"),r=n("eUgh"),i=n("Z0cm"),a=n("/9aa"),l=o?o.prototype:void 0,s=l?l.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(i(t))return r(t,e)+"";if(a(t))return s?s.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n}}}]);
//# sourceMappingURL=commons-49b705fad2e60c814124.js.map