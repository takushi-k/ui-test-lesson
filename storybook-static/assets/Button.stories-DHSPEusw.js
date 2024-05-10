import{j as d}from"./jsx-runtime-CKrituN3.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";const a=({label:o,primary:m,onClick:c})=>{const p=m?{backgroundColor:"blue",color:"white"}:{backgroundColor:"white",color:"blue"};return d.jsx("button",{style:p,onClick:c,children:o})};try{a.displayName="Button",a.__docgenInfo={description:"",displayName:"Button",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},primary:{defaultValue:null,description:"",name:"primary",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}}}}}catch{}const _={title:"Button",component:a,argTypes:{label:{options:["Primaryボタン","Normalボタン"],control:{type:"select"}}}},r={args:{label:"Primaryボタン2",primary:!0}},e={args:{label:"Normalボタン",primary:!1}};var t,l,n;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    label: "Primaryボタン2",
    primary: true
  }
}`,...(n=(l=r.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};var s,i,u;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    label: "Normalボタン",
    primary: false
  }
}`,...(u=(i=e.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};const f=["Primary","Normal"];export{e as Normal,r as Primary,f as __namedExportsOrder,_ as default};
