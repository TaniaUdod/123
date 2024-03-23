"use strict";(self.webpackChunkrental_campers=self.webpackChunkrental_campers||[]).push([[980],{3980:function(n,e,t){t.r(e),t.d(e,{default:function(){return L}});var i=t(9439),o=t(2791),r=t(3433),c=t(4942),a=t(1413);var l,p,s,u,x,d,h,f,g,v=t.p+"static/media/sprite.b000031046de9e3866120c938c783a91.svg",m=t(168),b=t(7924),j=b.ZP.form(l||(l=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 360px;\n  & > :nth-child(4) {\n    margin-top: 32px;\n  }\n"]))),Z=b.ZP.label(p||(p=(0,m.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  font-size: 16px;\n  font-weight: 500;\n  color: rgba(16, 24, 40, 0.6);\n\n  svg {\n    position: absolute;\n    width: 18px;\n    height: 20px;\n    left: 18px;\n    top: 42px;\n    fill: none;\n    stroke: #101828;\n  }\n\n  input {\n    padding: 15px;\n    padding-left: 44px;\n    width: 85%;\n    background-color: #f7f7f7;\n    color: #101828;\n    font-size: 16px;\n    font-weight: 400;\n    line-height: 1.25;\n    border-radius: 10px;\n    border: none;\n\n    &::placeholder {\n      color: rgba(16, 24, 40, 0.6);\n    }\n  }\n"]))),y=b.ZP.p(s||(s=(0,m.Z)(["\n  color: #475467;\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 24px;\n  margin-top: 32px;\n  margin-bottom: 14px;\n"]))),w=b.ZP.label(u||(u=(0,m.Z)(["\n  font-size: 20px;\n  font-weight: 600;\n  line-height: 24px;\n  color: #101828;\n\n  hr {\n    background-color: rgba(16, 24, 40, 0.1);\n    display: block;\n    margin: 24px 0;\n    opacity: 0.2;\n  }\n"]))),k=b.ZP.div(x||(x=(0,m.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px 10px;\n"]))),C=b.ZP.div(d||(d=(0,m.Z)(["\n  position: relative;\n  display: flex;\n  height: 95px;\n  align-items: center;\n  justify-content: center;\n  width: calc((100% - 2 * 13px) / 3);\n  border-radius: 10px;\n  border: 1px solid rgba(16, 24, 40, 0.2);\n  cursor: pointer;\n\n  input {\n    width: 100px;\n    height: 80px;\n    padding: 15px;\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n\n    &:checked + div {\n      border: 1px solid #e44848;\n    }\n  }\n"]))),P=b.ZP.div(h||(h=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n  text-align: center;\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 20px;\n  width: 100%;\n  height: 100%;\n  border-radius: 10px;\n  border: 1px solid rgba(16, 24, 40, 0.2);\n"]))),S=b.ZP.button(f||(f=(0,m.Z)(["\n  display: block;\n  width: 173px;\n  padding: 16px 60px;\n  border-radius: 200px;\n  background-color: #e44848;\n  color: #fff;\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 24px;\n  letter-spacing: -0.08px;\n  cursor: pointer;\n  margin-top: 64px;\n  margin-bottom: 24px;\n\n  &:hover {\n    background-color: #d84343;\n  }\n"]))),q=t(3329),z=function(n){var e=n.handleSearch,t=n.filters,l=(0,o.useState)((0,a.Z)({location:"",equipment:[],type:""},t)),p=(0,i.Z)(l,2),s=p[0],u=p[1],x=(0,o.useState)(!1),d=(0,i.Z)(x,2),h=d[0],f=d[1],g=(0,o.useState)(!0),m=(0,i.Z)(g,2),b=m[0],z=m[1],V=["Kyiv","Lviv","Odesa","Poltava","Dnipro","Kharkiv","Sumy"],A=function(n,e){if(u((function(t){return(0,a.Z)((0,a.Z)({},t),{},(0,c.Z)({},n,e))})),"location"===n){var t=V.filter((function(n){return n.startsWith(e.toLowerCase())}));f(!0),0===t.length?z(!1):z(!0)}},L=function(n){var e=n.target,t=e.value,i=e.checked,o=(0,r.Z)(s.equipment);o=i?[].concat((0,r.Z)(o),[t]):o.filter((function(n){return n!==t})),u((function(n){return(0,a.Z)((0,a.Z)({},n),{},{equipment:o})}))};return(0,q.jsxs)(j,{onSubmit:function(n){n.preventDefault(),V.includes(s.location)?e(s):z(!1)},children:[(0,q.jsxs)(Z,{children:["Location",(0,q.jsx)("svg",{children:(0,q.jsx)("use",{href:"".concat(v,"#icon-map-pin")})}),(0,q.jsx)("input",{type:"text",placeholder:"City",value:s.location,onChange:function(n){return A("location",n.target.value)},onBlur:function(){return f(!1)},required:!0}),h&&!b&&(0,q.jsxs)("span",{children:["Please, enter a valid location: ",V.join(", "),"."]})]}),(0,q.jsx)(y,{children:"Filters"}),(0,q.jsxs)(w,{children:["Vehicle equipment",(0,q.jsx)("hr",{}),(0,q.jsx)(k,{children:[{value:"ac",icon:"icon-AC",text:"AC"},{value:"automatic",icon:"icon-automatic",text:"Automatic"},{value:"kitchen",icon:"icon-kitchen",text:"Kitchen"},{value:"tv",icon:"icon-TV",text:"TV"},{value:"shower/wc",icon:"icon-shower",text:"Shower/WC"}].map((function(n){var e=n.value,t=n.icon,i=n.text;return(0,q.jsxs)(C,{children:[(0,q.jsx)("input",{type:"checkbox",name:"equipment",value:e,checked:s.equipment.includes(e),onChange:L}),(0,q.jsxs)(P,{children:[(0,q.jsx)("svg",{width:"32",height:"32",fill:"none",stroke:"currentColor",children:(0,q.jsx)("use",{href:"".concat(v,"#").concat(t)})}),i]})]},e)}))})]}),(0,q.jsxs)(w,{children:["Vehicle type",(0,q.jsx)("hr",{}),(0,q.jsx)(k,{children:[{value:"van",icon:"icon-van",text:"Van"},{value:"fullyIntegrated",icon:"icon-fully-integrated",text:"Fully Integrated"},{value:"alcove",icon:"icon-alcove",text:"Alcove"}].map((function(n){var e=n.value,t=n.icon,i=n.text;return(0,q.jsxs)(C,{children:[(0,q.jsx)("input",{type:"radio",name:"vehicleType",value:e,checked:s.type===e,onChange:function(n){return A("type",n.target.value)}}),(0,q.jsxs)(P,{children:[(0,q.jsx)("svg",{width:"40",height:"28",fill:"none",stroke:"currentColor",children:(0,q.jsx)("use",{href:"".concat(v,"#").concat(t)})}),i]})]},e)}))})]}),(0,q.jsx)(S,{type:"submit",children:"Search"})]})},V=function(){return(0,q.jsx)("div",{children:"CampersList"})},A=b.ZP.div(g||(g=(0,m.Z)(["\n  display: flex;\n  flex-direction: row;\n  gap: 64px;\n  margin-top: 30px;\n"]))),L=function(){var n=(0,o.useState)({}),e=(0,i.Z)(n,2),t=e[0],r=e[1];return(0,q.jsxs)(A,{children:[(0,q.jsx)(z,{handleSearch:function(n){r(n),console.log("Selected Filters:",n)},filters:t}),(0,q.jsx)(V,{filters:t})]})}}}]);
//# sourceMappingURL=980.661624a1.chunk.js.map