(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{38:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var c=t(15),r=t.n(c),o=t(6),a=t(3),u=t(1),i=t(0),d=function(e){return Object(i.jsx)("form",{children:Object(i.jsxs)("div",{children:["Filter shown with:",Object(i.jsx)("input",{value:e.search,onChange:e.handleSearchChange})]})})},s=function(e){return Object(i.jsxs)("form",{onSubmit:e.addPerson,children:[Object(i.jsxs)("div",{children:["Name:",Object(i.jsx)("input",{value:e.newName,onChange:e.handleNameChange}),"Phone Number:",Object(i.jsx)("input",{value:e.newNumber,onChange:e.handleNumberChange})]}),Object(i.jsx)("div",{children:Object(i.jsx)("button",{type:"submit",children:"add"})})]})},l=function(e){var n=e.person,t=e.deletePerson;return Object(i.jsxs)("li",{children:[n.name," ",n.number,Object(i.jsx)("button",{onClick:t,children:"Delete"})]})},b=function(e){var n=e.message,t={color:e.notifColor,fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10,width:500};return null===n?null:Object(i.jsx)("div",{style:t,children:n})},h=t(4),j=t.n(h),f="/api/persons",m={getAll:function(){return j.a.get(f).then((function(e){return e.data}))},create:function(e){return j.a.post(f,e).then((function(e){return e.data}))},update:function(e,n){return j.a.put("".concat(f,"/").concat(e),n).then((function(e){return e.data}))},remove:function(e){return j.a.delete("".concat(f,"/").concat(e)).then((function(e){return e.data}))}},O=function(){var e=Object(u.useState)([]),n=Object(a.a)(e,2),t=n[0],c=n[1],r=Object(u.useState)(""),h=Object(a.a)(r,2),j=h[0],f=h[1],O=Object(u.useState)(""),p=Object(a.a)(O,2),x=p[0],v=p[1],g=Object(u.useState)(!1),w=Object(a.a)(g,2),C=w[0],N=w[1],S=Object(u.useState)(""),k=Object(a.a)(S,2),y=k[0],P=k[1],A=Object(u.useState)(null),D=Object(a.a)(A,2),E=D[0],B=D[1],J=Object(u.useState)("black"),L=Object(a.a)(J,2),T=L[0],z=L[1];Object(u.useEffect)((function(){m.getAll().then((function(e){c(e)}))}),[]);var F=C?t:t.filter((function(e){return e.name.toLowerCase().includes("".concat(y).toLowerCase())}));return Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"Phonebook"}),Object(i.jsx)(b,{message:E,notifColor:T}),Object(i.jsx)(d,{search:y,handleSearchChange:function(e){P(e.target.value),N(!1)}}),Object(i.jsx)("h2",{children:"Add New Entry"}),Object(i.jsx)(s,{addPerson:function(e){if(e.preventDefault(),t.map((function(e){return e.name})).indexOf(j)>-1){if(window.confirm("".concat(j," is already in phonebook. Would you like to update their phone number?"))){var n=t.find((function(e){return e.name===j})),r=Object(o.a)(Object(o.a)({},n),{},{number:x});m.update(r.id,r).then((function(e){c(t.map((function(n){return n.id!==r.id?n:e})))}))}}else{var a={name:j,number:x};m.create(a).then((function(e){c(t.concat(e)),f("")})),z("green"),B("".concat(j,"' has been added to phonebook.")),setTimeout((function(){B(null)}),2e3)}},newName:j,handleNameChange:function(e){f(e.target.value)},newNumber:x,handleNumberChange:function(e){v(e.target.value)}}),Object(i.jsx)("h2",{children:"Numbers"}),Object(i.jsx)("ul",{children:F.map((function(e){return Object(i.jsx)(l,{person:e,deletePerson:function(){return function(e){var n=t.find((function(n){return n.id===e}));window.confirm("Do you really want to delete ".concat(n.name,"?"))&&m.remove(e).then((function(){return c(t.filter((function(n){return n.id!==e})))})).catch((function(r){z("red"),B("".concat(n.name," already deleted from phonebook.")),setTimeout((function(){B(null)}),2e3),c(t.filter((function(n){return n.id!==e})))}))}(e.id)}},e.name)}))})]})};t(38);r.a.render(Object(i.jsx)(O,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.e63dc3a7.chunk.js.map