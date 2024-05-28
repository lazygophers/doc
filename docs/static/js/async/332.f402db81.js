(self.webpackChunkrspress_doc_template=self.webpackChunkrspress_doc_template||[]).push([["332"],{13614:function(e,r,n){"use strict";var t=n("70443"),i=n("16019"),s=n("67294"),d=n("67026"),l=n("58510"),o=n("31618"),c=n("71657"),a=n("90948"),x=n("39990"),h=n("85893");let j=["className","component","padding","size","stickyHeader"],p=e=>{let{classes:r,stickyHeader:n}=e;return(0,l.Z)({root:["root",n&&"stickyHeader"]},x.K,r)},u=(0,a.ZP)("table",{name:"MuiTable",slot:"Root",overridesResolver:(e,r)=>{let{ownerState:n}=e;return[r.root,n.stickyHeader&&r.stickyHeader]}})(({theme:e,ownerState:r})=>(0,i.Z)({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":(0,i.Z)({},e.typography.body2,{padding:e.spacing(2),color:(e.vars||e).palette.text.secondary,textAlign:"left",captionSide:"bottom"})},r.stickyHeader&&{borderCollapse:"separate"})),g="table",Z=s.forwardRef(function(e,r){let n=(0,c.Z)({props:e,name:"MuiTable"}),{className:l,component:a=g,padding:x="normal",size:Z="medium",stickyHeader:b=!1}=n,f=(0,t.Z)(n,j),v=(0,i.Z)({},n,{component:a,padding:x,size:Z,stickyHeader:b}),m=p(v),y=s.useMemo(()=>({padding:x,size:Z,stickyHeader:b}),[x,Z,b]);return(0,h.jsx)(o.Z.Provider,{value:y,children:(0,h.jsx)(u,(0,i.Z)({as:a,role:a===g?null:"table",ref:r,className:(0,d.Z)(m.root,l),ownerState:v},f))})});r.Z=Z},31618:function(e,r,n){"use strict";let t=n("67294").createContext();r.Z=t},44063:function(e,r,n){"use strict";let t=n("67294").createContext();r.Z=t},39990:function(e,r,n){"use strict";n.d(r,{K:function(){return s}});var t=n("1977"),i=n("8027");function s(e){return(0,i.ZP)("MuiTable",e)}(0,t.Z)("MuiTable",["root","stickyHeader"])},58439:function(e,r,n){"use strict";var t=n("16019"),i=n("70443"),s=n("67294"),d=n("67026"),l=n("58510"),o=n("44063"),c=n("71657"),a=n("90948"),x=n("17049"),h=n("85893");let j=["className","component"],p=e=>{let{classes:r}=e;return(0,l.Z)({root:["root"]},x.j,r)},u=(0,a.ZP)("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:(e,r)=>r.root})({display:"table-row-group"}),g={variant:"body"},Z="tbody",b=s.forwardRef(function(e,r){let n=(0,c.Z)({props:e,name:"MuiTableBody"}),{className:s,component:l=Z}=n,a=(0,i.Z)(n,j),x=(0,t.Z)({},n,{component:l}),b=p(x);return(0,h.jsx)(o.Z.Provider,{value:g,children:(0,h.jsx)(u,(0,t.Z)({className:(0,d.Z)(b.root,s),as:l,ref:r,role:l===Z?null:"rowgroup",ownerState:x},a))})});r.Z=b},17049:function(e,r,n){"use strict";n.d(r,{j:function(){return s}});var t=n("1977"),i=n("8027");function s(e){return(0,i.ZP)("MuiTableBody",e)}(0,t.Z)("MuiTableBody",["root"])},98102:function(e,r,n){"use strict";var t=n("70443"),i=n("16019"),s=n("67294"),d=n("67026"),l=n("58510"),o=n("2101"),c=n("98216"),a=n("31618"),x=n("44063"),h=n("71657"),j=n("90948"),p=n("89755"),u=n("85893");let g=["align","className","component","padding","scope","size","sortDirection","variant"],Z=e=>{let{classes:r,variant:n,align:t,padding:i,size:s,stickyHeader:d}=e,o={root:["root",n,d&&"stickyHeader","inherit"!==t&&`align${(0,c.Z)(t)}`,"normal"!==i&&`padding${(0,c.Z)(i)}`,`size${(0,c.Z)(s)}`]};return(0,l.Z)(o,p.U,r)},b=(0,j.ZP)("td",{name:"MuiTableCell",slot:"Root",overridesResolver:(e,r)=>{let{ownerState:n}=e;return[r.root,r[n.variant],r[`size${(0,c.Z)(n.size)}`],"normal"!==n.padding&&r[`padding${(0,c.Z)(n.padding)}`],"inherit"!==n.align&&r[`align${(0,c.Z)(n.align)}`],n.stickyHeader&&r.stickyHeader]}})(({theme:e,ownerState:r})=>(0,i.Z)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:e.vars?`1px solid ${e.vars.palette.TableCell.border}`:`1px solid
    ${"light"===e.palette.mode?(0,o.lighten)((0,o.alpha)(e.palette.divider,1),.88):(0,o.darken)((0,o.alpha)(e.palette.divider,1),.68)}`,textAlign:"left",padding:16},"head"===r.variant&&{color:(e.vars||e).palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},"body"===r.variant&&{color:(e.vars||e).palette.text.primary},"footer"===r.variant&&{color:(e.vars||e).palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},"small"===r.size&&{padding:"6px 16px",[`&.${p.Z.paddingCheckbox}`]:{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}},"checkbox"===r.padding&&{width:48,padding:"0 0 0 4px"},"none"===r.padding&&{padding:0},"left"===r.align&&{textAlign:"left"},"center"===r.align&&{textAlign:"center"},"right"===r.align&&{textAlign:"right",flexDirection:"row-reverse"},"justify"===r.align&&{textAlign:"justify"},r.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:(e.vars||e).palette.background.default})),f=s.forwardRef(function(e,r){let n;let l=(0,h.Z)({props:e,name:"MuiTableCell"}),{align:o="inherit",className:c,component:j,padding:p,scope:f,size:v,sortDirection:m,variant:y}=l,k=(0,t.Z)(l,g),R=s.useContext(a.Z),T=s.useContext(x.Z),w=T&&"head"===T.variant,M=f;"td"===(n=j?j:w?"th":"td")?M=void 0:!M&&w&&(M="col");let C=y||T&&T.variant,H=(0,i.Z)({},l,{align:o,component:n,padding:p||(R&&R.padding?R.padding:"normal"),size:v||(R&&R.size?R.size:"medium"),sortDirection:m,stickyHeader:"head"===C&&R&&R.stickyHeader,variant:C}),P=Z(H),N=null;return m&&(N="asc"===m?"ascending":"descending"),(0,u.jsx)(b,(0,i.Z)({as:n,ref:r,className:(0,d.Z)(P.root,c),"aria-sort":N,scope:M,ownerState:H},k))});r.Z=f},89755:function(e,r,n){"use strict";n.d(r,{U:function(){return s}});var t=n("1977"),i=n("8027");function s(e){return(0,i.ZP)("MuiTableCell",e)}let d=(0,t.Z)("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]);r.Z=d},37858:function(e,r,n){"use strict";var t=n("16019"),i=n("70443"),s=n("67294"),d=n("67026"),l=n("58510"),o=n("44063"),c=n("71657"),a=n("90948"),x=n("72447"),h=n("85893");let j=["className","component"],p=e=>{let{classes:r}=e;return(0,l.Z)({root:["root"]},x.s,r)},u=(0,a.ZP)("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(e,r)=>r.root})({display:"table-header-group"}),g={variant:"head"},Z="thead",b=s.forwardRef(function(e,r){let n=(0,c.Z)({props:e,name:"MuiTableHead"}),{className:s,component:l=Z}=n,a=(0,i.Z)(n,j),x=(0,t.Z)({},n,{component:l}),b=p(x);return(0,h.jsx)(o.Z.Provider,{value:g,children:(0,h.jsx)(u,(0,t.Z)({as:l,className:(0,d.Z)(b.root,s),ref:r,role:l===Z?null:"rowgroup",ownerState:x},a))})});r.Z=b},72447:function(e,r,n){"use strict";n.d(r,{s:function(){return s}});var t=n("1977"),i=n("8027");function s(e){return(0,i.ZP)("MuiTableHead",e)}(0,t.Z)("MuiTableHead",["root"])},75921:function(e,r,n){"use strict";var t=n("16019"),i=n("70443"),s=n("67294"),d=n("67026"),l=n("58510"),o=n("2101"),c=n("44063"),a=n("71657"),x=n("90948"),h=n("34128"),j=n("85893");let p=["className","component","hover","selected"],u=e=>{let{classes:r,selected:n,hover:t,head:i,footer:s}=e;return(0,l.Z)({root:["root",n&&"selected",t&&"hover",i&&"head",s&&"footer"]},h.G,r)},g=(0,x.ZP)("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:(e,r)=>{let{ownerState:n}=e;return[r.root,n.head&&r.head,n.footer&&r.footer]}})(({theme:e})=>({color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,[`&.${h.Z.hover}:hover`]:{backgroundColor:(e.vars||e).palette.action.hover},[`&.${h.Z.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,o.alpha)(e.palette.primary.main,e.palette.action.selectedOpacity),"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:(0,o.alpha)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity)}}})),Z=s.forwardRef(function(e,r){let n=(0,a.Z)({props:e,name:"MuiTableRow"}),{className:l,component:o="tr",hover:x=!1,selected:h=!1}=n,Z=(0,i.Z)(n,p),b=s.useContext(c.Z),f=(0,t.Z)({},n,{component:o,hover:x,selected:h,head:b&&"head"===b.variant,footer:b&&"footer"===b.variant}),v=u(f);return(0,j.jsx)(g,(0,t.Z)({as:o,ref:r,className:(0,d.Z)(v.root,l),role:"tr"===o?null:"row",ownerState:f},Z))});r.Z=Z},34128:function(e,r,n){"use strict";n.d(r,{G:function(){return s}});var t=n("1977"),i=n("8027");function s(e){return(0,i.ZP)("MuiTableRow",e)}let d=(0,t.Z)("MuiTableRow",["root","selected","hover","head","footer"]);r.Z=d},68783:function(e,r,n){"use strict";n.r(r);var t=n("85893"),i=n("50065"),s=n("22179"),d=n("13614"),l=n("58439"),o=n("98102"),c=n("37858"),a=n("75921");let x="add-rpc";function h(e){let r=Object.assign({h1:"h1",a:"a",div:"div",p:"p",h2:"h2",code:"code"},(0,i.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.h1,{id:"",children:[(0,t.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#",children:"#"}),x]}),"\n",(0,t.jsxs)(r.div,{className:"rspress-directive tip",children:[(0,t.jsx)(r.div,{className:"rspress-directive-title",children:"TIP"}),(0,t.jsx)(r.div,{className:"rspress-directive-content",children:(0,t.jsx)(r.p,{children:"\n\u4E3A\u6307\u5B9A Model \u6279\u91CF\u6DFB\u52A0 CURD \u63A5\u53E3"})})]}),"\n",(0,t.jsxs)(r.h2,{id:"\u53C2\u6570\u8BF4\u660E",children:[(0,t.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#\u53C2\u6570\u8BF4\u660E",children:"#"}),"\u53C2\u6570\u8BF4\u660E"]}),"\n",(0,t.jsxs)(d.Z,{sx:{width:"100%"},children:[(0,t.jsx)(c.Z,{children:(0,t.jsxs)(a.Z,{children:[(0,t.jsx)(o.Z,{align:"center",children:"\u53C2\u6570"}),(0,t.jsx)(o.Z,{align:"center",children:"\u7C7B\u578B"}),(0,t.jsx)(o.Z,{align:"center",children:"\u529F\u80FD"}),(0,t.jsx)(o.Z,{align:"center",children:"\u652F\u6301\u7684\u9009\u9879"})]})}),(0,t.jsxs)(l.Z,{children:[(0,t.jsxs)(a.Z,{children:[(0,t.jsxs)(o.Z,{align:"center",children:[(0,t.jsx)(r.code,{children:"-m"})," ",(0,t.jsx)("br",{}),(0,t.jsx)(r.code,{children:"--model"})]}),(0,t.jsxs)(o.Z,{align:"center",children:[(0,t.jsx)(r.code,{children:"string"})," ",(0,t.jsx)(s.Badge,{text:"\u5FC5\u586B",type:"danger"})," "]}),(0,t.jsx)(o.Z,{align:"left",children:(0,t.jsx)(r.p,{children:"Model\uFF0C\u5FC5\u987B\u662F\u5DF2\u5B58\u5728\u4E8E proto \u4E2D\u7684"})}),(0,t.jsx)(o.Z,{align:"left"})]}),(0,t.jsxs)(a.Z,{children:[(0,t.jsxs)(o.Z,{align:"center",children:[(0,t.jsx)(r.code,{children:"-a"})," ",(0,t.jsx)("br",{}),(0,t.jsx)(r.code,{children:"--action"})]}),(0,t.jsxs)(o.Z,{align:"center",children:[(0,t.jsx)(r.code,{children:"string"})," ",(0,t.jsx)(s.Badge,{text:"\u5FC5\u586B",type:"danger"})," "]}),(0,t.jsx)(o.Z,{align:"left",children:(0,t.jsxs)(r.p,{children:["\u9700\u8981\u6DFB\u52A0\u7684\u884C\u4E3A\uFF0C\u591A\u4E2A\u7528\u5206\u53F7\u9694\u5F00",(0,t.jsx)("br",{}),"\n\u5141\u8BB8\u6307\u5B9A\u89D2\u8272\uFF0C\u591A\u4E2A\u89D2\u8272\u7528\u90FD\u597D\u9694\u5F00\uFF0C\u5982 ",(0,t.jsx)(r.code,{children:"add:admin,public"})]})}),(0,t.jsx)(o.Z,{align:"left",children:(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"add"})," -> \u6DFB\u52A0\u3001\u521B\u5EFA ",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(r.code,{children:"set"})," -> \u4FEE\u6539 ",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(r.code,{children:"get"})," -> \u83B7\u53D6\u8BE6\u60C5 ",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(r.code,{children:"list"})," -> \u83B7\u53D6\u5217\u8868 ",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(r.code,{children:"del"})," -> \u5220\u9664 ",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(r.code,{children:"update"})," -> \u66F4\u65B0"]})})]}),(0,t.jsxs)(a.Z,{children:[(0,t.jsx)(o.Z,{align:"center",children:(0,t.jsx)(r.code,{children:"--default-role"})}),(0,t.jsx)(o.Z,{align:"center",children:(0,t.jsx)(r.code,{children:"string"})}),(0,t.jsx)(o.Z,{align:"left",children:(0,t.jsx)(r.p,{children:"\u9ED8\u8BA4\u7684\u89D2\u8272\uFF0C\u53C2\u8003 action \u5F53\u4E2D\u7684\u89D2\u8272"})}),(0,t.jsx)(o.Z,{align:"left"})]}),(0,t.jsxs)(a.Z,{children:[(0,t.jsxs)(o.Z,{align:"center",children:[(0,t.jsx)(r.code,{children:"-t"})," ",(0,t.jsx)("br",{}),(0,t.jsx)(r.code,{children:"--gen-to"})]}),(0,t.jsx)(o.Z,{align:"center",children:(0,t.jsx)(r.code,{children:"string"})}),(0,t.jsx)(o.Z,{align:"left",children:(0,t.jsx)(r.p,{children:"\u751F\u6210\u63A5\u53E3\u5B9E\u73B0\u7684 .go \u6587\u4EF6\u76F8\u5BF9\u8DEF\u5F84"})}),(0,t.jsx)(o.Z,{align:"left"})]}),(0,t.jsxs)(a.Z,{children:[(0,t.jsxs)(o.Z,{align:"center",children:[(0,t.jsx)(r.code,{children:"-l"})," ",(0,t.jsx)("br",{}),(0,t.jsx)(r.code,{children:"--list-option"})]}),(0,t.jsx)(o.Z,{align:"center",children:(0,t.jsx)(r.code,{children:"string"})}),(0,t.jsx)(o.Z,{align:"left",children:(0,t.jsxs)(r.p,{children:["\u9488\u5BF9\u5217\u8868\u63A5\u53E3\u7684\u7B5B\u9009 ",(0,t.jsx)("br",{}),"\n\u591A\u4E2A\u7528\u5206\u53F7\u9694\u5F00\uFF0C\u4F8B\u5982 ",(0,t.jsx)(r.code,{children:"id;name:like"})]})}),(0,t.jsxs)(o.Z,{align:"left",children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"str"}),"/",(0,t.jsx)(r.code,{children:"string"})," ",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(r.code,{children:"like"})," ",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(r.code,{children:"left-like"}),"/",(0,t.jsx)(r.code,{children:"leftLike"}),"/",(0,t.jsx)(r.code,{children:"llike"}),"/",(0,t.jsx)(r.code,{children:"left_like"})," ",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(r.code,{children:"right-like"}),"/",(0,t.jsx)(r.code,{children:"rightLike"}),"/",(0,t.jsx)(r.code,{children:"rlike"}),"/",(0,t.jsx)(r.code,{children:"right_like"})," ",(0,t.jsx)("br",{})]}),(0,t.jsx)("br",{}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"uint"})," ",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(r.code,{children:"u8"}),"/",(0,t.jsx)(r.code,{children:"uint8"})," ",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(r.code,{children:"u16"}),"/",(0,t.jsx)(r.code,{children:"uint16"})," ",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(r.code,{children:"u32"}),"/",(0,t.jsx)(r.code,{children:"uint32"})," ",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(r.code,{children:"u64"}),"/",(0,t.jsx)(r.code,{children:"uint64"})," ",(0,t.jsx)("br",{})]}),(0,t.jsx)("br",{}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"i8"}),"/",(0,t.jsx)(r.code,{children:"int8"})," ",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(r.code,{children:"i16"}),"/",(0,t.jsx)(r.code,{children:"int16"})," ",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(r.code,{children:"i32"}),"/",(0,t.jsx)(r.code,{children:"int32"})," ",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(r.code,{children:"i64"}),"/",(0,t.jsx)(r.code,{children:"int64"})," ",(0,t.jsx)("br",{})]}),(0,t.jsx)("br",{}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"f32"}),"/",(0,t.jsx)(r.code,{children:"float32"})," ",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(r.code,{children:"f64"}),"/",(0,t.jsx)(r.code,{children:"float64"})," ",(0,t.jsx)("br",{})]}),(0,t.jsx)("br",{}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"uints"})," ",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(r.code,{children:"u16s"}),"/",(0,t.jsx)(r.code,{children:"uint16s"})," ",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(r.code,{children:"u32s"}),"/",(0,t.jsx)(r.code,{children:"uint32s"})," ",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(r.code,{children:"u64s"}),"/",(0,t.jsx)(r.code,{children:"uint64s"})," ",(0,t.jsx)("br",{})]}),(0,t.jsx)("br",{}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"i8s"}),"/",(0,t.jsx)(r.code,{children:"int8s"})," ",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(r.code,{children:"i16s"}),"/",(0,t.jsx)(r.code,{children:"int16s"})," ",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(r.code,{children:"i32s"}),"/",(0,t.jsx)(r.code,{children:"int32s"})," ",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(r.code,{children:"i64s"}),"/",(0,t.jsx)(r.code,{children:"int64s"})," ",(0,t.jsx)("br",{})]}),(0,t.jsx)("br",{}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"f32s"}),"/",(0,t.jsx)(r.code,{children:"float32s"})," ",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(r.code,{children:"f64s"}),"/",(0,t.jsx)(r.code,{children:"float64s"})," ",(0,t.jsx)("br",{})]})]})]})]})]})]})}function j(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:r}=Object.assign({},(0,i.ah)(),e.components);return r?(0,t.jsx)(r,Object.assign({},e,{children:(0,t.jsx)(h,e)})):h(e)}r.default=j,j.__RSPRESS_PAGE_META={},j.__RSPRESS_PAGE_META["document%2F%E6%8C%87%E4%BB%A4%E8%AF%B4%E6%98%8E%2Fadd-rpc.mdx"]={toc:[{id:"\u53C2\u6570\u8BF4\u660E",text:"\u53C2\u6570\u8BF4\u660E",depth:2}],title:"add-rpc",frontmatter:{pageType:"doc",title:"add-rpc",sidebar:!0,outline:!0,footer:!0}}}}]);