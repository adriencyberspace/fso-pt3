(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{38:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var c=t(15),r=t.n(c),o=t(6),a=t(3),u=t(1),i=t(4),d=t.n(i),s=t(0),l=function(e){return Object(s.jsx)("form",{children:Object(s.jsxs)("div",{children:["Filter shown with:",Object(s.jsx)("input",{value:e.search,onChange:e.handleSearchChange})]})})},b=function(e){return Object(s.jsxs)("form",{onSubmit:e.addPerson,children:[Object(s.jsxs)("div",{children:["Name:",Object(s.jsx)("input",{value:e.newName,onChange:e.handleNameChange}),"Phone Number:",Object(s.jsx)("input",{value:e.newNumber,onChange:e.handleNumberChange})]}),Object(s.jsx)("div",{children:Object(s.jsx)("button",{type:"submit",children:"add"})})]})},h=function(e){var n=e.person,t=e.deletePerson;return Object(s.jsxs)("li",{children:[n.name," ",n.number,Object(s.jsx)("button",{onClick:t,children:"Delete"})]})},j=function(e){var n=e.message,t={color:e.notifColor,fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10,width:500};return null===n?null:Object(s.jsx)("div",{style:t,children:n})},f="/api/persons",m={getAll:function(){return d.a.get(f).then((function(e){return e.data}))},create:function(e){return d.a.post(f,e).then((function(e){return e.data}))},update:function(e,n){return d.a.put("".concat(f,"/").concat(e),n).then((function(e){return e.data}))},remove:function(e){return d.a.delete("".concat(f,"/").concat(e)).then((function(e){return e.data}))}},O=function(){var e=Object(u.useState)([]),n=Object(a.a)(e,2),t=n[0],c=n[1],r=Object(u.useState)(""),i=Object(a.a)(r,2),d=i[0],f=i[1],O=Object(u.useState)(""),p=Object(a.a)(O,2),x=p[0],v=p[1],g=Object(u.useState)(!1),w=Object(a.a)(g,2),C=w[0],N=w[1],S=Object(u.useState)(""),k=Object(a.a)(S,2),y=k[0],P=k[1],A=Object(u.useState)(null),D=Object(a.a)(A,2),E=D[0],B=D[1],J=Object(u.useState)("black"),L=Object(a.a)(J,2),T=L[0],z=L[1];Object(u.useEffect)((function(){m.getAll().then((function(e){c(e)}))}),[]);var F=C?t:t.filter((function(e){return e.name.toLowerCase().includes("".concat(y).toLowerCase())}));return Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{children:"Phonebook"}),Object(s.jsx)(j,{message:E,notifColor:T}),Object(s.jsx)(l,{search:y,handleSearchChange:function(e){P(e.target.value),N(!1)}}),Object(s.jsx)("h2",{children:"Add New Entry"}),Object(s.jsx)(b,{addPerson:function(e){if(e.preventDefault(),t.map((function(e){return e.name})).indexOf(d)>-1){if(window.confirm("".concat(d," is already in phonebook. Would you like to update their phone number?"))){var n=t.find((function(e){return e.name===d})),r=Object(o.a)(Object(o.a)({},n),{},{number:x});m.update(r.id,r).then((function(e){c(t.map((function(n){return n.id!==r.id?n:e})))}))}}else{var a={name:d,number:x};m.create(a).then((function(e){c(t.concat(e)),f("")})),z("green"),B("".concat(d,"' has been added to phonebook.")),setTimeout((function(){B(null)}),2e3)}},newName:d,handleNameChange:function(e){f(e.target.value)},newNumber:x,handleNumberChange:function(e){v(e.target.value)}}),Object(s.jsx)("h2",{children:"Numbers"}),Object(s.jsx)("ul",{children:F.map((function(e){return Object(s.jsx)(h,{person:e,deletePerson:function(){return function(e){var n=t.find((function(n){return n.id===e}));window.confirm("Do you really want to delete ".concat(n.name,"?"))&&m.remove(e).then((function(){return c(t.filter((function(n){return n.id!==e})))})).catch((function(r){z("red"),B("".concat(n.name," already deleted from phonebook.")),setTimeout((function(){B(null)}),2e3),c(t.filter((function(n){return n.id!==e})))}))}(e.id)}},e.name)}))})]})};t(38);r.a.render(Object(s.jsx)(O,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.1e31b6f8.chunk.js.map