(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{194:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(197),o=n(205),i=n(204);t.default=function(e){var t=e.pageContext,n=t.posts,a=t.tagName;return r.a.createElement(o.a,null,r.a.createElement(i.a,null,r.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},r.a.createElement("h2",null,"Posts related to ",a),r.a.createElement("div",{style:{backgroundColor:"white",paddingRight:"25px"}},r.a.createElement("ul",{style:{listStyle:"none",margin:"10px",padding:"0"}},n.map(function(e,t){return r.a.createElement("li",{key:t},r.a.createElement(l.a,{to:"/"+e.node.frontmatter.path+"/"},e.node.frontmatter.title," (",e.node.frontmatter.date,")"))}))),r.a.createElement(l.a,{to:"/tags",style:{color:"inherit",margin:"25px 0px"}},"← Browse by tags"))))}},197:function(e,t,n){"use strict";n.d(t,"b",function(){return s});var a=n(0),r=n.n(a),l=n(66),o=n.n(l);n.d(t,"a",function(){return o.a});n(200),n(9).default.enqueue;var i=r.a.createContext({});function c(e){var t=e.staticQueryData,n=e.data,a=e.query,l=e.render,o=n?n.data:t[a]&&t[a].data;return r.a.createElement(r.a.Fragment,null,o&&l(o),!o&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var s=function(e){var t=e.data,n=e.query,a=e.render,l=e.children;return r.a.createElement(i.Consumer,null,function(e){return r.a.createElement(c,{data:t,query:n,render:a||l,staticQueryData:e})})}},198:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(215),o=n.n(l),i=n(216),c=n.n(i);n(18);var s=768,u=function(e){return function(t){var n,a;function l(){for(var e,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))||this).state={isMobile:!1},e.resizeListener=function(){var t=e.state.isMobile;t&&window.innerWidth>s?e.setState({isMobile:!1}):!t&&window.innerWidth<s&&e.setState({isMobile:!0})},e}a=t,(n=l).prototype=Object.create(a.prototype),n.prototype.constructor=n,n.__proto__=a;var o=l.prototype;return o.componentDidMount=function(){this.resizeListener(),window.addEventListener("resize",this.resizeListener)},o.componentWillUnmount=function(){window.removeEventListener("resize",this.resizeListener)},o.render=function(){return r.a.createElement(e,Object.assign({isMobile:this.state.isMobile},this.props))},l}(r.a.Component)};n.d(t,"a",function(){return m}),n.d(t,"b",function(){return f});var m={LIGHT:"light",DARK:"dark"},d="currentThemeColor",f=r.a.createContext({theme:m.LIGHT}),p=function(e){var t,n;function a(t){var n;return(n=e.call(this,t)||this).toggleTheme=function(){window.requestAnimationFrame(function(){return n.setState(function(e){switch(e.currentColor){case m.LIGHT:return window&&window.localStorage&&localStorage.setItem(d,m.DARK),window.__initialColor=m.DARK,{currentColor:m.DARK};case m.DARK:return window&&window.localStorage&&localStorage.setItem(d,m.LIGHT),window.__initialColor=m.LIGHT,{currentColor:m.LIGHT};default:return}})})},n.state={currentColor:null},n}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var l=a.prototype;return l.componentDidMount=function(){this.setState({currentColor:window&&window.__initialColor})},l.render=function(){var e=this.props,t=e.children,n=e.isMobile,a=this.state.currentColor,l=a===m.LIGHT?c.a:o.a;return r.a.createElement(f.Provider,{value:{currentColor:a,themeStyles:l,toggleTheme:this.toggleTheme,isMobile:n}},r.a.createElement("div",{style:{display:this.state.currentColor?"block":"none"}},t))},a}(a.Component);p.defaultProps={children:null};t.c=u(p)},199:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(198),o=function(e){var t=e.children;return r.a.createElement(l.b.Consumer,null,function(e){var n=e.currentColor,a=e.themeStyles,r=e.toggleTheme,l=e.isMobile;return t({themeStyles:a,toggleTheme:r,currentColor:n,isMobile:l})})};o.defaultProps={children:null},t.a=o},200:function(e,t,n){var a;e.exports=(a=n(203))&&a.default||a},202:function(e){e.exports={data:{site:{siteMetadata:{title:"Aarron Lee",description:"Some random thoughts, ideas, and musings"}}}}},203:function(e,t,n){"use strict";n.r(t);n(18);var a=n(0),r=n.n(a),l=n(93);t.default=function(e){var t=e.location,n=e.pageResources;return n?r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json)):null}},204:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(218),o=n.n(l),i=n(199),c=function(e){var t=e.children,n=e.className;return r.a.createElement(i.a,null,function(e){var a=e.themeStyles.cardStyles,l=e.isMobile;return r.a.createElement("div",{className:o.a.card+" "+(l?o.a.cardMobile:o.a.cardDesktop)+" "+a+" "+n},t)})};c.defaultProps={children:null,className:""},t.a=c},205:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(202),o=n(197),i=n(207),c=n.n(i),s=function(e){var t=e.children,n=void 0===t?null:t;return r.a.createElement(o.b,{query:"3998338720",data:l},function(e){var t=c.a.get(e,["site","siteMetadata","title"],"default title"),a=c.a.get(e,["site","siteMetadata","description"],"default description");return n({title:t,description:a})})},u=n(208),m=n.n(u),d=(n(51),n(38),n(241)),f=n(209),p=n.n(f),v=n(210),h=n.n(v),E="medium",g=function(e){var t=e.isOpen,n=e.closeModal,a=e.contentSize,l=e.children,o=e.className;return r.a.createElement(d.a,null,r.a.createElement("div",{className:h.a.modalBackdrop+" "+(t?h.a.backdropVisible:"")+" "+o,onClick:n},r.a.createElement("div",{className:h.a.modalContent+" "+h.a[a],onClick:function(e){return e.stopPropagation()}},l)))};g.defaultProps={className:"",children:null,contentSize:E,closeModal:p.a,isOpen:!1};var C=g,b=n(211),N=n.n(b),y={LEFT:Symbol("left"),RIGHT:Symbol("right")},w=function(e){var t=e.direction,n=e.isOpen,a=e.closeModal,l=e.children,o=e.className,i=(t===y.LEFT?N.a.modalLeft:N.a.modalRight)+" "+N.a.ModalContent+" "+(n?N.a.ModalContentOpen:"")+" "+o;return r.a.createElement(d.a,null,r.a.createElement("div",{className:N.a.ModalContainer+" "+(n?N.a.ModalOpen:"")},r.a.createElement("div",{className:N.a.ModalCloseArea,onClick:a},r.a.createElement("div",{className:i,onClick:function(e){return e.stopPropagation()}},l))))},M=function(e){var t=e.children,n=e.className;return r.a.createElement(_.Consumer,null,function(e){var a=e.isOpen,l=e.closeModal,o=e.type,i=e.direction,c=e.contentSize;switch(o){case j.SLIDE_IN:return r.a.createElement(w,{direction:i,isOpen:a,closeModal:l,className:n},t);case j.CENTER:return r.a.createElement(C,{isOpen:a,closeModal:l,contentSize:c,className:n},t);default:return r.a.createElement("div",null)}})};M.defaultProps={children:null,className:""};var L=M;n(29),n(30),n(13),n(50),n(18);var S=function(e){var t=e.children,n=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["children"]);return r.a.createElement(_.Consumer,null,function(e){var a=e.closeModal;return"function"==typeof t?t({closeModal:a}):r.a.createElement("button",Object.assign({},n,{onClick:a}),t)})};var k=function(e){var t=e.children,n=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["children"]);return r.a.createElement(_.Consumer,null,function(e){var a=e.openModal;return"function"==typeof t?t({openModal:a}):r.a.createElement("button",Object.assign({},n,{onClick:a}),t)})},O=n(212),x=n.n(O);var T=function(e){var t=e.size,n=e.color;return r.a.createElement("svg",{fill:n,width:t+"px",height:t+"px",viewBox:"-7 -1 10 10"},r.a.createElement("g",{transform:"translate(0, 1.000000)"},r.a.createElement("path",{d:"M2.30111111,0.523333333 L1.47666667,-0.301111111 L-2,3.17555556 L-5.47666667,-0.301111111 L-6.30111111,0.523333333 L-2.82444444,4 L-6.30111111,7.47666667 L-5.47666667,8.30111111 L-2,4.82444444 L1.47666667,8.30111111 L2.30111111,7.47666667 L-1.17555556,4 L2.30111111,0.523333333 Z",id:"Shape"})))},z=function(e){var t=e.size,n=e.color,a=e.className,l=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["size","color","className"]);return r.a.createElement(S,null,function(e){var o=e.closeModal;return r.a.createElement("div",Object.assign({className:x.a.cancelButton+" "+a,onClick:o},l),r.a.createElement(T,{size:t,color:n}))})};z.defaultProps={size:20,className:"",color:"black"};var I=z;var _=r.a.createContext(),j={CENTER:Symbol("center"),SLIDE_IN:Symbol("slideIn")},D=function(e){var t,n;function a(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={isOpen:!1},t.setStatus=function(e){return function(){return window.requestAnimationFrame(function(){return t.setState({isOpen:e})})}},t}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){var e=this.props,t=e.type,n=e.children,a=e.direction,l=e.contentSize;return r.a.createElement(_.Provider,{value:{isOpen:this.state.isOpen,openModal:this.setStatus(!0),closeModal:this.setStatus(!1),type:t,direction:a,contentSize:l}},n)},a}(a.Component);D.CloseButton=S,D.OpenButton=k,D.Content=L,D.CancelButton=I,D.defaultProps={children:null,type:j.CENTER,direction:y.LEFT,contentSize:E};var A=D;n(206);var B=function(e){var t=e.height,n=void 0===t?30:t,a=e.width,l=void 0===a?30:a,o=e.fill,i=void 0===o?"white":o,c=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["height","width","fill"]);return r.a.createElement("div",c,r.a.createElement("svg",{fill:i,height:n+"px",width:l+"px",version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 100 100"},r.a.createElement("g",null,r.a.createElement("path",{className:"line line-1",d:"M5 13h90v14H5z"}),r.a.createElement("path",{className:"line line-2",d:"M5 43h90v14H5z"}),r.a.createElement("path",{className:"line line-3",d:"M5 73h90v14H5z"}))))},R=n(213),H=n.n(R),P=n(214),G=n.n(P),q=n(198);var F=function(e){var t=e.className,n=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["className"]);return r.a.createElement(q.b.Consumer,null,function(e){var a=e.currentColor,l=e.toggleTheme;return r.a.createElement(H.a,Object.assign({onChange:l,checked:a===q.a.LIGHT,className:t,uncheckedIcon:r.a.createElement("div",{className:G.a.iconStyle},"D"),checkedIcon:r.a.createElement("div",{className:G.a.iconStyle},"L"),onColor:"#000",offColor:"#000"},n))})},K=function(e){var t=e.headerColor;return e.isMobile?r.a.createElement(s,null,function(e){var n=e.title;return r.a.createElement(A,{type:j.SLIDE_IN},r.a.createElement(A.Content,{className:m.a.mobileMenuContainer},r.a.createElement(A.CancelButton,{color:"white"}),r.a.createElement("ul",{className:m.a.mobileMenuItems},r.a.createElement("li",{className:m.a.mobileNavLink},r.a.createElement(o.a,{to:"/",className:m.a.mobileNavLink},"Blog")),r.a.createElement("li",{className:m.a.mobileNavLink},r.a.createElement(o.a,{to:"/about/",className:m.a.mobileNavLink},"About")),r.a.createElement("li",{className:m.a.mobileNavLink},r.a.createElement(F,{onColor:"#282d33",offColor:"#282d33"})))),r.a.createElement("header",{className:m.a.headerContainer+" "+t},r.a.createElement(A.OpenButton,null,function(e){var t=e.openModal;return r.a.createElement(B,{onClick:t,className:m.a.title+" "+m.a.mobileMenuButton})}),r.a.createElement("a",{className:m.a.title,href:"/"},n)))}):r.a.createElement(s,null,function(e){var n=e.title;return r.a.createElement("header",{className:m.a.headerContainer+" "+m.a.headerContainerNonMobile+" "+t},r.a.createElement("div",{className:m.a.buttonsContainer},r.a.createElement(o.a,{to:"/",className:m.a.title},n),r.a.createElement("nav",{className:m.a.nav},r.a.createElement("ul",{className:m.a.navLink},r.a.createElement("li",{className:m.a.navLink},r.a.createElement(o.a,{to:"/",className:m.a.navLink},"Blog")),r.a.createElement("li",{className:m.a.navLink},r.a.createElement(o.a,{to:"/about/",className:m.a.navLink},"About"))))),r.a.createElement(F,{className:m.a.themeSwitch}))})},Q=n(199),W=n(217),J=n.n(W);t.a=function(e){var t=e.children;return r.a.createElement(q.c,null,r.a.createElement(Q.a,null,function(e){var n=e.themeStyles,a=e.isMobile;return r.a.createElement("div",null,r.a.createElement(K,{headerColor:n.headerColor,isMobile:a}),r.a.createElement("div",{className:n.backgroundColor+" "+J.a.contentContainer},r.a.createElement("main",{className:J.a.mainContent},t)))}))}}}]);
//# sourceMappingURL=component---src-templates-single-tag-index-js-349d2095020ca02e62f2.js.map