(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{38:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var c=t(15),r=t.n(c),o=t(6),a=t(3),u=t(1),i=t(4),d=t.n(i),s=t(0),l=function(e){return Object(s.jsx)("form",{children:Object(s.jsxs)("div",{children:["Filter shown with:",Object(s.jsx)("input",{value:e.search,onChange:e.handleSearchChange})]})})},b=function(e){return Object(s.jsxs)("form",{onSubmit:e.addPerson,children:[Object(s.jsxs)("div",{children:["Name:",Object(s.jsx)("input",{value:e.newName,onChange:e.handleNameChange}),"Phone Number:",Object(s.jsx)("input",{value:e.newNumber,onChange:e.handleNumberChange})]}),Object(s.jsx)("div",{children:Object(s.jsx)("button",{type:"submit",children:"add"})})]})},h=function(e){var n=e.person,t=e.deletePerson;return Object(s.jsxs)("li",{children:[n.name," ",n.number,Object(s.jsx)("button",{onClick:t,children:"Delete"})]})},j=function(e){var n=e.message,t={color:e.notifColor,fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10,width:500};return null===n?null:Object(s.jsx)("div",{style:t,children:n})},f="/api/persons",m={getAll:function(){return d.a.get(f).then((function(e){return e.data}))},create:function(e){return d.a.post(f,e).then((function(e){return e.data}))},update:function(e,n){return d.a.put("".concat(f,"/").concat(e),n).then((function(e){return e.data}))}},O=function(){var e=Object(u.useState)([]),n=Object(a.a)(e,2),t=n[0],c=n[1],r=Object(u.useState)(""),i=Object(a.a)(r,2),f=i[0],O=i[1],p=Object(u.useState)(""),x=Object(a.a)(p,2),g=x[0],v=x[1],w=Object(u.useState)(!1),C=Object(a.a)(w,2),N=C[0],S=C[1],k=Object(u.useState)(""),y=Object(a.a)(k,2),P=y[0],A=y[1],D=Object(u.useState)(null),E=Object(a.a)(D,2),B=E[0],J=E[1],L=Object(u.useState)("black"),T=Object(a.a)(L,2),z=T[0],F=T[1];Object(u.useEffect)((function(){m.getAll().then((function(e){c(e)}))}),[]);var I=N?t:t.filter((function(e){return e.name.toLowerCase().includes("".concat(P).toLowerCase())}));return Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{children:"Phonebook"}),Object(s.jsx)(j,{message:B,notifColor:z}),Object(s.jsx)(l,{search:P,handleSearchChange:function(e){A(e.target.value),S(!1)}}),Object(s.jsx)("h2",{children:"Add New Entry"}),Object(s.jsx)(b,{addPerson:function(e){if(e.preventDefault(),t.map((function(e){return e.name})).indexOf(f)>-1){if(window.confirm("".concat(f," is already in phonebook. Would you like to update their phone number?"))){var n=t.find((function(e){return e.name===f})),r=Object(o.a)(Object(o.a)({},n),{},{number:g});m.update(r.id,r).then((function(e){c(t.map((function(n){return n.id!==r.id?n:e})))}))}}else{var a={name:f,number:g};m.create(a).then((function(e){c(t.concat(e)),O("")})),F("green"),J("".concat(f,"' has been added to phonebook.")),setTimeout((function(){J(null)}),2e3)}},newName:f,handleNameChange:function(e){O(e.target.value)},newNumber:g,handleNumberChange:function(e){v(e.target.value)}}),Object(s.jsx)("h2",{children:"Numbers"}),Object(s.jsx)("ul",{children:I.map((function(e){return Object(s.jsx)(h,{person:e,deletePerson:function(){return function(e){var n=t.find((function(n){return n.id===e}));window.confirm("Do you really want to delete ".concat(n.name,"?"))&&d.a.delete("http://localhost:3001/persons/".concat(e)).then((function(){return c(t.filter((function(n){return n.id!==e})))})).catch((function(r){F("red"),J("".concat(n.name," already deleted from phonebook.")),setTimeout((function(){J(null)}),2e3),c(t.filter((function(n){return n.id!==e})))}))}(e.id)}},e.name)}))})]})};t(38);r.a.render(Object(s.jsx)(O,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.caa67029.chunk.js.map