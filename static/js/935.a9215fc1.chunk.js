"use strict";(self.webpackChunkrental_campers=self.webpackChunkrental_campers||[]).push([[935],{9935:function(n,e,i){i.r(e),i.d(e,{default:function(){return yn}});var t=i(9439),r=i(2791),o=i(4420),l=function(n){return n.adverts.adverts},s=function(n){return n.adverts.isLoading},c=function(n){return n.adverts.error},a=i(7234),d=i(3433),p=i(4942),x=i(1413);var h,u,f,g,v,j,m,Z,b,w,y,k,P,C,z,S,q,L,T,A,E,I,V,F,K,B,_,D=i.p+"static/media/sprite.870047835135e08214912d9c769e4c95.svg",N=i(168),O=i(7924),W=O.ZP.form(h||(h=(0,N.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 360px;\n\n  & > :nth-child(4) {\n    margin-top: 32px;\n  }\n"]))),R=O.ZP.label(u||(u=(0,N.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  font-size: 16px;\n  font-weight: 500;\n  color: rgba(16, 24, 40, 0.6);\n\n  svg {\n    position: absolute;\n    width: 18px;\n    height: 20px;\n    left: 18px;\n    top: 45px;\n    fill: none;\n    stroke: #101828;\n  }\n\n  input {\n    padding: 18px;\n    padding-left: 44px;\n    background-color: #f7f7f7;\n    color: #101828;\n    font-family: Inter;\n    font-size: 16px;\n    font-weight: 400;\n    line-height: 1.25;\n    border-radius: 10px;\n    border: none;\n\n    &::placeholder {\n      color: rgba(16, 24, 40, 0.6);\n    }\n  }\n"]))),Y=O.ZP.p(f||(f=(0,N.Z)(["\n  color: #475467;\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 24px;\n  margin-top: 32px;\n  margin-bottom: 14px;\n"]))),G=O.ZP.label(g||(g=(0,N.Z)(["\n  font-size: 20px;\n  font-weight: 600;\n  line-height: 24px;\n  color: #101828;\n\n  hr {\n    background-color: rgba(16, 24, 40, 0.1);\n    display: block;\n    margin: 24px 0;\n    opacity: 0.2;\n  }\n"]))),H=O.ZP.div(v||(v=(0,N.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px 10px;\n"]))),J=O.ZP.div(j||(j=(0,N.Z)(["\n  position: relative;\n  display: flex;\n  height: 95px;\n  align-items: center;\n  justify-content: center;\n  width: calc((100% - 2 * 13px) / 3);\n  border-radius: 10px;\n  border: 1px solid rgba(16, 24, 40, 0.2);\n  cursor: pointer;\n\n  input {\n    width: 100px;\n    height: 80px;\n    padding: 15px;\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n    transition: border 150ms linear;\n\n    &:checked + div {\n      border: 1px solid #e44848;\n    }\n  }\n"]))),M=O.ZP.div(m||(m=(0,N.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n  text-align: center;\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 20px;\n  width: 100%;\n  height: 100%;\n  border-radius: 10px;\n  border: 1px solid rgba(16, 24, 40, 0.2);\n"]))),Q=O.ZP.button(Z||(Z=(0,N.Z)(["\n  display: block;\n  width: 173px;\n  padding: 16px 60px;\n  border-radius: 200px;\n  background-color: #e44848;\n  color: #fff;\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 24px;\n  letter-spacing: -0.08px;\n  cursor: pointer;\n  margin-top: 64px;\n  margin-bottom: 24px;\n  transition: background-color 150ms linear;\n\n  &:hover {\n    background-color: #d84343;\n  }\n"]))),U=i(3329),X=function(n){var e=n.handleSearch,i=n.filters,o=(0,r.useState)((0,x.Z)({location:"",equipment:[],type:""},i)),l=(0,t.Z)(o,2),s=l[0],c=l[1],a=(0,r.useState)(!1),h=(0,t.Z)(a,2),u=h[0],f=h[1],g=(0,r.useState)(!0),v=(0,t.Z)(g,2),j=v[0],m=v[1],Z=["Kyiv","Lviv","Odesa","Poltava","Dnipro","Kharkiv","Sumy"],b=function(n,e){if(c((function(i){return(0,x.Z)((0,x.Z)({},i),{},(0,p.Z)({},n,e))})),"location"===n){var i=Z.filter((function(n){return n.startsWith(e.toLowerCase())}));f(!0),0===i.length?m(!1):m(!0)}},w=function(n){var e=n.target,i=e.value,t=e.checked,r=(0,d.Z)(s.equipment);r=t?[].concat((0,d.Z)(r),[i]):r.filter((function(n){return n!==i})),c((function(n){return(0,x.Z)((0,x.Z)({},n),{},{equipment:r})}))};return(0,U.jsxs)(W,{onSubmit:function(n){n.preventDefault(),Z.includes(s.location)?e(s):m(!1)},children:[(0,U.jsxs)(R,{children:["Location",(0,U.jsx)("svg",{children:(0,U.jsx)("use",{href:"".concat(D,"#icon-map-pin")})}),(0,U.jsx)("input",{type:"text",placeholder:"City",value:s.location,onChange:function(n){return b("location",n.target.value)},onBlur:function(){return f(!1)},required:!0}),u&&!j&&(0,U.jsxs)("span",{children:["Please, enter a valid location: ",Z.join(", "),"."]})]}),(0,U.jsx)(Y,{children:"Filters"}),(0,U.jsxs)(G,{children:["Vehicle equipment",(0,U.jsx)("hr",{}),(0,U.jsx)(H,{children:[{value:"airConditioner",icon:"icon-AC",text:"AC"},{value:"transmission",icon:"icon-automatic",text:"Automatic"},{value:"kitchen",icon:"icon-kitchen",text:"Kitchen"},{value:"tv",icon:"icon-TV",text:"TV"},{value:"shower",icon:"icon-shower",text:"Shower/WC"}].map((function(n){var e=n.value,i=n.icon,t=n.text;return(0,U.jsxs)(J,{children:[(0,U.jsx)("input",{type:"checkbox",name:"equipment",value:e,checked:s.equipment.includes(e),onChange:w}),(0,U.jsxs)(M,{children:[(0,U.jsx)("svg",{width:"32",height:"32",fill:"none",stroke:"currentColor",children:(0,U.jsx)("use",{href:"".concat(D,"#").concat(i)})}),t]})]},e)}))})]}),(0,U.jsxs)(G,{children:["Vehicle type",(0,U.jsx)("hr",{}),(0,U.jsx)(H,{children:[{value:"van",icon:"icon-van",text:"Van"},{value:"fullyIntegrated",icon:"icon-fully-integrated",text:"Fully Integrated"},{value:"alcove",icon:"icon-alcove",text:"Alcove"}].map((function(n){var e=n.value,i=n.icon,t=n.text;return(0,U.jsxs)(J,{children:[(0,U.jsx)("input",{type:"radio",name:"vehicleType",value:e,checked:s.type===e,onChange:function(n){return b("type",n.target.value)}}),(0,U.jsxs)(M,{children:[(0,U.jsx)("svg",{width:"40",height:"28",fill:"none",stroke:"currentColor",children:(0,U.jsx)("use",{href:"".concat(D,"#").concat(i)})}),t]})]},e)}))})]}),(0,U.jsx)(Q,{type:"submit",children:"Search"})]})},$=O.ZP.div(b||(b=(0,N.Z)(["\n  z-index: 10;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  width: 100vw;\n  background-color: rgba(0, 0, 0, 0.4);\n"]))),nn=O.ZP.div(w||(w=(0,N.Z)(["\n  position: relative;\n  z-index: 20;\n  background-color: #ffffff;\n  border-radius: 20px;\n  padding: 40px;\n  display: inline-flex;\n  flex-direction: column;\n  height: 720px;\n  width: 982px;\n  gap: 24px;\n"]))),en=O.ZP.svg(y||(y=(0,N.Z)(["\n  position: absolute;\n  top: 40px;\n  right: 40px;\n  width: 32px;\n  height: 32px;\n  fill: none;\n  stroke: #101828;\n  cursor: pointer;\n"]))),tn=function(n){var e=n.onClose,i=n.children;return(0,r.useEffect)((function(){var n=function(n){"Escape"===n.code&&e()};return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}),[e]),(0,U.jsx)($,{onClick:function(n){n.currentTarget===n.target&&e()},children:(0,U.jsxs)(nn,{children:[(0,U.jsx)(en,{onClick:function(){e()},children:(0,U.jsx)("use",{href:"".concat(D,"#icon-close")})}),i]})})},rn=O.ZP.ul(k||(k=(0,N.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n"]))),on=O.ZP.li(P||(P=(0,N.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 24px;\n  border-radius: 20px;\n  border: 1px solid rgba(16, 24, 40, 0.2);\n  padding: 24px;\n"]))),ln=O.ZP.img(C||(C=(0,N.Z)(["\n  width: 290px;\n  height: 310px;\n  border-radius: 10px;\n\n  object-fit: cover;\n"]))),sn=O.ZP.div(z||(z=(0,N.Z)(["\n  display: flex;\n  width: 526px;\n  flex-direction: column;\n\n  > *:not(:first-child) {\n    margin-bottom: 24px;\n  }\n\n  > :last-child {\n    margin-bottom: 0;\n  }\n"]))),cn=O.ZP.div(S||(S=(0,N.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]))),an=O.ZP.p(q||(q=(0,N.Z)(["\n  font-size: 24px;\n  font-weight: 600;\n  line-height: 30px;\n"]))),dn=O.ZP.div(L||(L=(0,N.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 11px;\n"]))),pn=O.ZP.p(T||(T=(0,N.Z)(["\n  font-size: 24px;\n  font-weight: 600;\n  line-height: 30px;\n"]))),xn=O.ZP.div(A||(A=(0,N.Z)(["\n  display: flex;\n  align-items: flex-start;\n  gap: 16px;\n"]))),hn=O.ZP.p(E||(E=(0,N.Z)(["\n  overflow: hidden;\n  color: #475467;\n  text-overflow: ellipsis;\n  font-size: 16px;\n  line-height: 24px;\n  white-space: nowrap;\n"]))),un=O.ZP.ul(I||(I=(0,N.Z)(["\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n"]))),fn=O.ZP.li(V||(V=(0,N.Z)(["\n  display: flex;\n  padding: 12px 18px;\n  align-items: center;\n  gap: 8px;\n  border-radius: 100px;\n  background: #f2f4f7;\n  color: #101828;\n  text-align: center;\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 20px;\n"]))),gn=O.ZP.button(F||(F=(0,N.Z)(["\n  display: block;\n  padding: 16px 40px;\n  width: 166px;\n  height: 56px;\n  border-radius: 200px;\n  background: #e44848;\n  color: #fff;\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 24px;\n  letter-spacing: -0.08px;\n  transition: background-color 150ms linear;\n\n  &:hover {\n    background-color: #d84343;\n  }\n"]))),vn=function(n){var e=n.adverts,i=(0,r.useState)(!1),o=(0,t.Z)(i,2),l=o[0],s=o[1],c=function(){s(!0)};return(0,U.jsxs)(rn,{children:[e.map((function(n){var e=n._id,i=n.gallery,t=n.name,r=n.price,o=n.rating,l=n.reviews,s=n.location,a=n.description,d=n.adults,p=n.transmission,x=n.engine,h=n.details,u=h.kitchen,f=h.beds,g=h.airConditioner;return(0,U.jsxs)(on,{children:[(0,U.jsx)(ln,{src:i[0],alt:t}),(0,U.jsxs)(sn,{children:[(0,U.jsxs)(cn,{children:[(0,U.jsx)(an,{children:t}),(0,U.jsxs)(dn,{children:[(0,U.jsxs)(pn,{children:["\u20ac",r.toFixed(2)]}),(0,U.jsx)("svg",{width:"24",height:"24",fill:"none",stroke:"currentColor",children:(0,U.jsx)("use",{href:"".concat(D,"#icon-heart")})})]})]}),(0,U.jsxs)(xn,{children:[(0,U.jsxs)("p",{children:[(0,U.jsx)("svg",{width:"16",height:"16",fill:"none",stroke:"currentColor",children:(0,U.jsx)("use",{href:"".concat(D,"#icon-star")})}),o," (",l.length," Reviews)"]}),(0,U.jsxs)("p",{children:[(0,U.jsx)("svg",{width:"16",height:"16",fill:"none",stroke:"currentColor",children:(0,U.jsx)("use",{href:"".concat(D,"#icon-map-pin")})}),s.split(",").reverse().join(", ")]})]}),(0,U.jsx)(hn,{children:a}),(0,U.jsxs)(un,{children:[(0,U.jsxs)(fn,{children:[(0,U.jsx)("svg",{width:"20",height:"20",children:(0,U.jsx)("use",{href:"".concat(D,"#icon-adults")})}),d," adults"]}),(0,U.jsxs)(fn,{style:{textTransform:"capitalize"},children:[(0,U.jsx)("svg",{width:"20",height:"20",fill:"none",stroke:"currentColor",children:(0,U.jsx)("use",{href:"".concat(D,"#icon-automatic")})}),p]}),(0,U.jsxs)(fn,{style:{textTransform:"capitalize"},children:[(0,U.jsx)("svg",{width:"20",height:"20",children:(0,U.jsx)("use",{href:"".concat(D,"#icon-petrol")})}),x]}),u>=1&&(0,U.jsxs)(fn,{children:[(0,U.jsx)("svg",{width:"20",height:"20",fill:"none",stroke:"currentColor",children:(0,U.jsx)("use",{href:"".concat(D,"#icon-kitchen")})}),"Kitchen"]}),(0,U.jsxs)(fn,{children:[(0,U.jsx)("svg",{width:"20",height:"20",fill:"none",stroke:"currentColor",children:(0,U.jsx)("use",{href:"".concat(D,"#icon-beds")})}),f," beds"]}),g>=1&&(0,U.jsxs)(fn,{children:[(0,U.jsx)("svg",{width:"20",height:"20",fill:"none",children:(0,U.jsx)("use",{href:"".concat(D,"#icon-AC")})}),"AC"]})]}),(0,U.jsx)(gn,{onClick:c,children:"Show more"})]})]},e)})),l&&(0,U.jsx)(tn,{isOpen:l,onClose:function(){s(!1)},children:(0,U.jsx)("p",{children:"details"})})]})},jn=i(9258),mn=O.ZP.div(K||(K=(0,N.Z)(["\n  display: flex;\n  flex-direction: row;\n  gap: 64px;\n  margin-top: 30px;\n"]))),Zn=O.ZP.div(B||(B=(0,N.Z)(["\n  width: 888px;\n  display: flex;\n  flex-direction: column;\n  gap: 50px;\n"]))),bn=O.ZP.button(_||(_=(0,N.Z)(["\n  padding: 16px 32px;\n  border-radius: 200px;\n  border: 1px solid rgba(71, 84, 103, 0.2);\n  color: #101828;\n  font-family: Inter;\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 24px;\n  letter-spacing: -0.08px;\n  margin: 0 auto 24px;\n  transition: border 150ms linear;\n\n  &:hover {\n    border: 1px solid var(--Button, #e44848);\n  }\n"]))),wn=i(5667),yn=function(){var n=(0,o.I0)(),e=(0,r.useState)({}),i=(0,t.Z)(e,2),d=i[0],p=i[1],x=(0,r.useState)(1),h=(0,t.Z)(x,2),u=h[0],f=h[1],g=(0,r.useState)(!0),v=(0,t.Z)(g,2),j=v[0],m=v[1],Z=(0,o.v9)(s),b=(0,o.v9)(c),w=(0,o.v9)(l);console.log(w);(0,r.useEffect)((function(){n((0,a.B)({page:u,limit:4})).then((function(){m(4===w.length)}))}),[n,u,w.length]);return(0,U.jsxs)(mn,{children:[Z&&(0,U.jsx)(jn.Z,{}),b&&(0,U.jsxs)("p",{children:["Error: ",b]}),(0,U.jsx)(X,{handleSearch:function(n){p(n),f(1),console.log("Selected Filters:",n)},filters:d}),(0,U.jsxs)(Zn,{children:[(0,U.jsx)(vn,{adverts:w}),j&&!Z&&(0,U.jsx)(bn,{className:"load-more-btn",onClick:function(){f((function(n){return n+1}));wn.NY.scrollTo(0,{duration:1500,smooth:!0})},children:"Load more"})]})]})}}}]);
//# sourceMappingURL=935.a9215fc1.chunk.js.map