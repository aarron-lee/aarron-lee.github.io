(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{142:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(147),o=a(157),i=a(156);t.default=function(e){var t=e.pageContext.tags;return r.a.createElement(o.a,null,r.a.createElement(i.a,null,r.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},r.a.createElement("h2",null,"All Tags"),r.a.createElement("div",{style:{backgroundColor:"white",paddingRight:"25px"}},r.a.createElement("ul",{style:{listStyle:"none",margin:"10px",padding:"0"}},t.map(function(e,t){return r.a.createElement("li",{key:t},r.a.createElement(l.a,{to:"tags/"+e},e)," ")}))))))}},147:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),l=a(4),o=a.n(l),i=a(33),c=a.n(i);a.d(t,"a",function(){return c.a});a(150);var s=r.a.createContext({}),u=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},148:function(e,t,a){"use strict";var n=a(7),r=a.n(n),l=a(0),o=a.n(l),i=a(167),c=a.n(i),s=a(168),u=a.n(s),m=(a(34),768),d=function(e){return function(t){function a(){for(var e,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))||this).state={isMobile:!1},e.resizeListener=function(){var t=e.state.isMobile;t&&window.innerWidth>m?e.setState({isMobile:!1}):!t&&window.innerWidth<m&&e.setState({isMobile:!0})},e}r()(a,t);var n=a.prototype;return n.componentDidMount=function(){window.addEventListener("resize",this.resizeListener)},n.componentWillUnmount=function(){window.removeEventListener("resize",this.resizeListener)},n.render=function(){return o.a.createElement(e,Object.assign({isMobile:this.state.isMobile},this.props))},a}(o.a.Component)};a.d(t,"a",function(){return h}),a.d(t,"b",function(){return p});var h={LIGHT:"light",DARK:"dark"},f="currentThemeColor",p=o.a.createContext({theme:h.LIGHT}),v=function(e){function t(t){var a;if((a=e.call(this,t)||this).toggleTheme=function(){window.requestAnimationFrame(function(){return a.setState(function(e){switch(e.currentColor){case h.LIGHT:return window&&window.localStorage&&localStorage.setItem(f,h.DARK),{currentColor:h.DARK};case h.DARK:return window&&window.localStorage&&localStorage.setItem(f,h.LIGHT),{currentColor:h.LIGHT};default:return}})})},"undefined"!=typeof window&&window.localStorage)var n=window.localStorage.getItem(f);return a.state={currentColor:n||h.LIGHT},a}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,a=e.isMobile,n=this.state.currentColor,r=n===h.LIGHT?u.a:c.a;return o.a.createElement(p.Provider,{value:{currentColor:n,themeStyles:r,toggleTheme:this.toggleTheme,isMobile:a}},t)},t}(l.Component);v.defaultProps={children:null};t.c=d(v)},149:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(148),o=function(e){var t=e.children;return r.a.createElement(l.b.Consumer,null,function(e){var a=e.currentColor,n=e.themeStyles,r=e.toggleTheme,l=e.isMobile;return t({themeStyles:n,toggleTheme:r,currentColor:a,isMobile:l})})};o.defaultProps={children:null},t.a=o},150:function(e,t,a){var n;e.exports=(n=a(155))&&n.default||n},154:function(e){e.exports={data:{site:{siteMetadata:{title:"Aarron Lee",description:"Some random thoughts, ideas, and musings"}}}}},155:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),l=a(4),o=a.n(l),i=a(55),c=a(2),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},156:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(170),o=a.n(l),i=a(149),c=function(e){var t=e.children,a=e.className;return r.a.createElement(i.a,null,function(e){var n=e.themeStyles.cardStyles,l=e.isMobile;return r.a.createElement("div",{className:o.a.card+" "+(l?o.a.cardMobile:o.a.cardDesktop)+" "+n+" "+a},t)})};c.defaultProps={children:null,className:""},t.a=c},157:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(154),o=a(147),i=a(158),c=a.n(i),s=function(e){var t=e.children,a=void 0===t?null:t;return r.a.createElement(o.b,{query:"3998338720",data:l},function(e){var t=c.a.get(e,["site","siteMetadata","title"],"default title"),n=c.a.get(e,["site","siteMetadata","description"],"default description");return a({title:t,description:n})})},u=a(159),m=a.n(u),d=a(7),h=a.n(d),f=(a(151),a(152),a(184)),p=a(160),v=a.n(p),E=a(161),g=a.n(E),C="medium",N=function(e){var t=e.isOpen,a=e.closeModal,n=e.contentSize,l=e.children,o=e.className;return r.a.createElement(f.a,null,r.a.createElement("div",{className:g.a.modalBackdrop+" "+(t?g.a.backdropVisible:"")+" "+o,onClick:a},r.a.createElement("div",{className:g.a.modalContent+" "+g.a[n],onClick:function(e){return e.stopPropagation()}},l)))};N.defaultProps={className:"",children:null,contentSize:C,closeModal:v.a,isOpen:!1};var b=N,w=a(162),M=a.n(w),L={LEFT:Symbol("left"),RIGHT:Symbol("right")},y=function(e){var t=e.direction,a=e.isOpen,n=e.closeModal,l=e.children,o=e.className,i=(t===L.LEFT?M.a.modalLeft:M.a.modalRight)+" "+M.a.ModalContent+" "+(a?M.a.ModalContentOpen:"")+" "+o;return r.a.createElement(f.a,null,r.a.createElement("div",{className:M.a.ModalContainer+" "+(a?M.a.ModalOpen:"")},r.a.createElement("div",{className:M.a.ModalCloseArea,onClick:n},r.a.createElement("div",{className:i,onClick:function(e){return e.stopPropagation()}},l))))},S=function(e){var t=e.children,a=e.className;return r.a.createElement(P.Consumer,null,function(e){var n=e.isOpen,l=e.closeModal,o=e.type,i=e.direction,c=e.contentSize;switch(o){case D.SLIDE_IN:return r.a.createElement(y,{direction:i,isOpen:n,closeModal:l,className:a},t);case D.CENTER:return r.a.createElement(b,{isOpen:n,closeModal:l,contentSize:c,className:a},t);default:return r.a.createElement("div",null)}})};S.defaultProps={children:null,className:""};var k=S,T=(a(34),a(74)),I=a.n(T),x=function(e){var t=e.children,a=I()(e,["children"]);return r.a.createElement(P.Consumer,null,function(e){var n=e.closeModal;return"function"==typeof t?t({closeModal:n}):r.a.createElement("button",Object.assign({},a,{onClick:n}),t)})},z=function(e){var t=e.children,a=I()(e,["children"]);return r.a.createElement(P.Consumer,null,function(e){var n=e.openModal;return"function"==typeof t?t({openModal:n}):r.a.createElement("button",Object.assign({},a,{onClick:n}),t)})},O=a(163),R=a.n(O),A=function(e){var t=e.size,a=e.color;return r.a.createElement("svg",{fill:a,width:t+"px",height:t+"px",viewBox:"-7 -1 10 10"},r.a.createElement("g",{transform:"translate(0, 1.000000)"},r.a.createElement("path",{d:"M2.30111111,0.523333333 L1.47666667,-0.301111111 L-2,3.17555556 L-5.47666667,-0.301111111 L-6.30111111,0.523333333 L-2.82444444,4 L-6.30111111,7.47666667 L-5.47666667,8.30111111 L-2,4.82444444 L1.47666667,8.30111111 L2.30111111,7.47666667 L-1.17555556,4 L2.30111111,0.523333333 Z",id:"Shape"})))},B=function(e){var t=e.size,a=e.color,n=e.className,l=I()(e,["size","color","className"]);return r.a.createElement(x,null,function(e){var o=e.closeModal;return r.a.createElement("div",Object.assign({className:R.a.cancelButton+" "+n,onClick:o},l),r.a.createElement(A,{size:t,color:a}))})};B.defaultProps={size:20,className:"",color:"black"};var H=B,P=r.a.createContext(),D={CENTER:Symbol("center"),SLIDE_IN:Symbol("slideIn")},q=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={isOpen:!1},t.setStatus=function(e){return function(){return window.requestAnimationFrame(function(){return t.setState({isOpen:e})})}},t}return h()(t,e),t.prototype.render=function(){var e=this.props,t=e.type,a=e.children,n=e.direction,l=e.contentSize;return r.a.createElement(P.Provider,{value:{isOpen:this.state.isOpen,openModal:this.setStatus(!0),closeModal:this.setStatus(!1),type:t,direction:n,contentSize:l}},a)},t}(n.Component);q.CloseButton=x,q.OpenButton=z,q.Content=k,q.CancelButton=H,q.defaultProps={children:null,type:D.CENTER,direction:L.LEFT,contentSize:C};var G=q,j=(a(164),function(e){var t=e.height,a=void 0===t?30:t,n=e.width,l=void 0===n?30:n,o=e.fill,i=void 0===o?"white":o,c=I()(e,["height","width","fill"]);return r.a.createElement("div",c,r.a.createElement("svg",{fill:i,height:a+"px",width:l+"px",version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 100 100"},r.a.createElement("g",null,r.a.createElement("path",{className:"line line-1",d:"M5 13h90v14H5z"}),r.a.createElement("path",{className:"line line-2",d:"M5 43h90v14H5z"}),r.a.createElement("path",{className:"line line-3",d:"M5 73h90v14H5z"}))))}),F=a(165),K=a.n(F),W=a(166),_=a.n(W),J=a(148),Q=function(e){var t=e.className,a=I()(e,["className"]);return r.a.createElement(J.b.Consumer,null,function(e){var n=e.currentColor,l=e.toggleTheme;return r.a.createElement(K.a,Object.assign({onChange:l,checked:n===J.a.LIGHT,className:t,uncheckedIcon:r.a.createElement("div",{className:_.a.iconStyle},"D"),checkedIcon:r.a.createElement("div",{className:_.a.iconStyle},"L"),onColor:"#000",offColor:"#000"},a))})},U=function(e){var t=e.headerColor;return e.isMobile?r.a.createElement(s,null,function(e){var a=e.title;return r.a.createElement(G,{type:D.SLIDE_IN},r.a.createElement(G.Content,{className:m.a.mobileMenuContainer},r.a.createElement(G.CancelButton,{color:"white"}),r.a.createElement("ul",{className:m.a.mobileMenuItems},r.a.createElement("li",{className:m.a.mobileNavLink},r.a.createElement(o.a,{to:"/",className:m.a.mobileNavLink},"Blog")),r.a.createElement("li",{className:m.a.mobileNavLink},r.a.createElement(o.a,{to:"/about",className:m.a.mobileNavLink},"About")),r.a.createElement("li",{className:m.a.mobileNavLink},r.a.createElement(Q,{onColor:"#282d33",offColor:"#282d33"})))),r.a.createElement("header",{className:m.a.headerContainer+" "+t},r.a.createElement(G.OpenButton,null,function(e){var t=e.openModal;return r.a.createElement(j,{onClick:t,className:m.a.title+" "+m.a.mobileMenuButton})}),r.a.createElement("a",{className:m.a.title,href:"/"},a)))}):r.a.createElement(s,null,function(e){var a=e.title;return r.a.createElement("header",{className:m.a.headerContainer+" "+m.a.headerContainerNonMobile+" "+t},r.a.createElement("div",{className:m.a.buttonsContainer},r.a.createElement(o.a,{to:"/",className:m.a.title},a),r.a.createElement("nav",{className:m.a.nav},r.a.createElement("ul",{className:m.a.navLink},r.a.createElement("li",{className:m.a.navLink},r.a.createElement(o.a,{to:"/",className:m.a.navLink},"Blog")),r.a.createElement("li",{className:m.a.navLink},r.a.createElement(o.a,{to:"/about",className:m.a.navLink},"About"))))),r.a.createElement(Q,{className:m.a.themeSwitch}))})},V=a(149),Z=a(169),X=a.n(Z);t.a=function(e){var t=e.children;return r.a.createElement(J.c,null,r.a.createElement(V.a,null,function(e){var a=e.themeStyles,n=e.isMobile;return r.a.createElement("div",null,r.a.createElement(U,{headerColor:a.headerColor,isMobile:n}),r.a.createElement("div",{className:a.backgroundColor+" "+X.a.contentContainer},r.a.createElement("main",{className:X.a.mainContent},t)))}))}}}]);
//# sourceMappingURL=component---src-templates-all-tags-index-js-c33de6fa313a7b83e56a.js.map