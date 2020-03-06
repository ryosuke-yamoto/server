(this["webpackJsonpreact-todo"]=this["webpackJsonpreact-todo"]||[]).push([[0],{26:function(t,n,e){t.exports=e(52)},52:function(t,n,e){"use strict";e.r(n);var o=e(20),a=e.n(o),c=e(0),i=e.n(c),r=e(21),u=e(4),l=(e(6),function(){return i.a.createElement("h1",{className:"title"},"TodoApp")}),d=function(t){var n=t.addTodo,e=t.isEditing,o=t.setIsEditing,a=t.editDone,r=t.createEditTodo,l=Object(c.useState)(""),d=Object(u.a)(l,2),s=d[0],f=d[1],E=Object(c.useState)(""),m=Object(u.a)(E,2),g=m[0],p=m[1];return i.a.createElement("form",{className:"form",onSubmit:e?function(t){t.preventDefault(),r(g),a(g),o(!e),p("")}:function(t){t.preventDefault(),n(s),f("")}},i.a.createElement("input",{className:"input",type:"text",onChange:e?function(t){p(t.target.value)}:function(t){f(t.target.value)},value:e?g:s}),i.a.createElement("button",{className:"addInput",type:"submit"},e?"edit":"add"))},s=e(2),f=e(3);function E(){var t=Object(s.a)(["\n    color: white;\n    background-color: red;\n    border-radius:10px;\n"]);return E=function(){return t},t}function m(){var t=Object(s.a)(["\n    color: white;\n    background-color: #66FF00; \n    margin-right:5px;\n    border-radius:10px;\n"]);return m=function(){return t},t}function g(){var t=Object(s.a)(["\n    \n"]);return g=function(){return t},t}function p(){var t=Object(s.a)(["\n    display: inline-block\n"]);return p=function(){return t},t}function b(){var t=Object(s.a)(["\n    display: inline-block\n"]);return b=function(){return t},t}function v(){var t=Object(s.a)(["\n    display: flex;\n    margin-bottom: 30px;\n    justify-content:space-between;\n    color: red;\n    &:not(:last-child) {\n        margin-bottom: 15px;\n    }\n"]);return v=function(){return t},t}var h=f.a.li(v()),j=f.a.a(b()),O=f.a.a(p()),T=f.a.input(g()),x=f.a.button(m()),y=f.a.button(E()),I=function(t){var n=t.content,e=t.id,o=t.removeTodo,a=t.createEditTodo,c=(t.isEditing,t.setIsEditing,t.allDone),r=t.toggleIsEditting,l=i.a.useState(!1),d=Object(u.a)(l,2),s=d[0],f=d[1],E=s?{textDecorationLine:"line-through"}:null;return i.a.createElement(h,null,i.a.createElement(j,null,i.a.createElement(T,{type:"checkbox",onChange:function(){f(!s),c(!s)}}),i.a.createElement("span",{style:E},"".concat(e,": ").concat(n))),i.a.createElement(O,null,i.a.createElement(x,{onClick:function(){r(),a({},e)}},"edit"),i.a.createElement(y,{onClick:function(){o(e)}},"delete")))};function k(){var t=Object(s.a)(["\n    list-style: none;\n    width:80%;\n    padding: 0px;\n    margin: 0 auto;\n"]);return k=function(){return t},t}var D=f.a.ul(k()),S=function(t){var n=t.todos,e=t.removeTodo,o=t.isEditing,a=t.setIsEditing,c=t.createEditTodo,r=t.toggleIsEditting,u=t.allDone;return i.a.createElement(D,null,n.map((function(t){return console.log(t),i.a.createElement(I,{content:t.content,id:t.id,key:t.id,toggleIsEditting:r,removeTodo:e,createEditTodo:c,isEditing:o,setIsEditing:a,allDone:u})})))};function w(){var t=Object(s.a)(["\nmargin-left: 20px;\n"]);return w=function(){return t},t}var N=function(t){return i.a.createElement(C,null,i.a.createElement("input",{type:"checkbox"}),"\u5168\u3066",t?"\u672a\u5b8c\u4e86":"\u5b8c\u4e86","\u306b\u3059\u308b")},C=f.a.label(w()),F=e(5),J=e.n(F),A=function(){var t=Object(c.useState)([]),n=Object(u.a)(t,2),e=n[0],o=n[1],a=Object(c.useState)({}),s=Object(u.a)(a,2),f=s[0],E=s[1],m=i.a.useState(!1),g=Object(u.a)(m,2),p=g[0],b=g[1];Object(c.useEffect)((function(){J.a.get("http://localhost:3001/todos").then((function(t){o(t.data),console.log(t)}))}),[]);var v=function(t,n){var e={content:t};J.a.put("http://localhost:3001/todos/".concat(n),e).then((function(t){console.log(t.status)}))},h=function(t){e.filter((function(){return!0===t}))},j=function(t){f.content=t,o(e.map((function(t,n){return n===f.id?f.content:t})))},O=Object(r.a)({createEditTodo:v,addTodo:function(t){var n={content:t};J.a.post("http://localhost:3001/todos",n).then((function(t){o(e.concat(t.data))}))},editTodo:f,setEditTodo:E,isEditing:p,setIsEditing:b,editDone:j},"editTodo",f),T={todos:e,removeTodo:function(t){J.a.delete("http://localhost:3001/todos/".concat(t)).then((function(n){204===n.status&&o(e.filter((function(n){return n.id!==t})))})).catch((function(t){console.log(t)}))},createEditTodo:v,isEditing:p,setIsEditing:b,toggleIsEditting:function(){b(!p)},editDone:j,allDone:h};return i.a.createElement("div",{className:"app"},i.a.createElement(l,null),i.a.createElement(d,O),i.a.createElement(N,{allDone:h}),i.a.createElement(S,T))};a.a.render(i.a.createElement(A,null),document.getElementById("root"))},6:function(t,n,e){}},[[26,1,2]]]);
//# sourceMappingURL=main.31323d1d.chunk.js.map