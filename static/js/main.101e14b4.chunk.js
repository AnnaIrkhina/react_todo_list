(this.webpackJsonpreact_todo_list=this.webpackJsonpreact_todo_list||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(7),r=n.n(c),l=(n(14),n(2)),i=n(8),s=n(1);n(4);var u=function(e){var t=Object(a.useState)(""),n=Object(s.a)(t,2),c=n[0],r=n[1],l=function(){console.log(c),e.onTaskCeate(c),r("")},i=function(t){e.onFilterClicked(t)};return o.a.createElement("div",{class:"container"},o.a.createElement("div",{className:"input-group mb-3"},o.a.createElement("input",{className:"form-control",type:"text",onChange:function(e){return function(e){r(e.target.value),console.log(e.target.value),console.log(e.target.keyCode),13===e.target.keyCode&&l()}(e)},onKeyPress:function(e){return function(e){"Enter"===e.key&&(console.log("enter clicked"),l())}(e)},on:!0,value:c,id:"create_task"}),o.a.createElement("div",{class:"btn-group",role:"group","aria-label":"Basic example"},o.a.createElement("button",{className:"btn btn-outline-secondary",onClick:l,disabled:""===c.trim()},"\u2795")),o.a.createElement("div",{className:"btn-group btn-group-toggle","data-toggle":"buttons"},o.a.createElement("label",{className:"btn btn-outline-secondary active"},o.a.createElement("input",{type:"radio",name:"options",id:"option1",checked:!0,onClick:function(){return i(0)}}),"\ud83d\udc9a\u2764\ufe0f"),o.a.createElement("label",{className:"btn btn-outline-secondary"},o.a.createElement("input",{type:"radio",name:"options",id:"option2",onClick:function(){return i(1)}}),"\u2764\ufe0f"),o.a.createElement("label",{className:"btn btn-outline-secondary"},o.a.createElement("input",{type:"radio",name:"options",id:"option3",onClick:function(){return i(2)}}),"\ud83d\udc9a"))))};var m=function(e){var t=Object(a.useState)({}),n=Object(s.a)(t,2),c=n[0],r=n[1],i=function(e){console.log("OnChange "+e.target.value),r(Object(l.a)(Object(l.a)({},c),{},{name:e.target.value}))},u=function(e){"Enter"===e.key&&m()},m=function(){e.onTaskSave(c),r({})};return o.a.createElement("div",{class:"container"},o.a.createElement("ul",{class:"list-group"},e.toDos.map((function(t){return 0===e.filter||1===e.filter&&!1===t.isDone||2===e.filter&&!0===t.isDone?o.a.createElement("li",{key:t.id,class:"list-group-item"},o.a.createElement("div",{className:"input-group"},c.id===t.id&&!1===t.isDone?o.a.createElement(o.a.Fragment,null,o.a.createElement("input",{class:"form-control",type:"text",autoFocus:"true",value:c.name,onChange:i,onKeyPress:u}),o.a.createElement("div",{class:"btn-group",role:"group","aria-label":"Basic example"},o.a.createElement("button",{class:"btn btn-outline-secondary ",onClick:m,disabled:!c.name.trim()},"\ud83d\udcbe"))):o.a.createElement("span",{class:!1===t.isDone?"form-control":"form-control c",onClick:function(){return r(e=t),void console.log(e);var e}},t.name),o.a.createElement("div",{class:"btn-group",role:"group","aria-label":"Basic example"},o.a.createElement("button",{class:"btn btn-outline-secondary",onClick:function(){return n=t.id,console.log("Done "+n),void e.onTaskDone(n);var n}},t.isDone?"\ud83d\udc9a":"\u2764\ufe0f"),o.a.createElement("button",{class:"btn btn-outline-secondary",onClick:function(){return n=t.id,console.log("Delete "+n),void e.onTaskDelete(n);var n}},"\u274c")))):""}))))};var d=function(e){return o.a.createElement("div",{class:"container c"},o.a.createElement("div",{class:"row"},o.a.createElement("div",{class:"col"},"We need to do: ",e.todoTask),o.a.createElement("div",{className:"col"},"Done: ",e.doneTask),o.a.createElement("div",{className:"col"},"Total: ",e.allTask)))},b=[{id:Math.random(),name:"To Do Home Work",isDone:!1},{id:Math.random(),name:"To Do Exercise",isDone:!0},{id:Math.random(),name:"To call mom",isDone:!1}],g=new Date,p=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][g.getDay()]+" "+(g.getDate()<10?"0"+g.getDate():g.getDate())+" of "+["January","February","March","April","May","June","July","August","September","October","November","December"][g.getMonth()]+", "+g.getFullYear();var f=function(){var e=Object(a.useState)(b),t=Object(s.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(3),g=Object(s.a)(r,2),f=g[0],v=g[1],E=Object(a.useState)(2),k=Object(s.a)(E,2),y=k[0],D=k[1],h=Object(a.useState)(1),O=Object(s.a)(h,2),T=O[0],j=O[1],C=Object(a.useState)(0),S=Object(s.a)(C,2),N=S[0],w=S[1],M=function(e){v(e.length);var t=0,a=0;e.map((function(e){!1===e.isDone?t++:a++})),D(t),j(a),console.log(n),console.log(f,y,t,T,a)};return o.a.createElement("div",{class:"container"},o.a.createElement("h1",{class:"c"},"Todo List for ",p),o.a.createElement(u,{onTaskCeate:function(e){console.log(e);var t=Object(i.a)(n);t.push({id:Math.random(),name:e,isDone:!1}),c(t),console.log(n),M(t)},onFilterClicked:function(e){w(e)}}),o.a.createElement(m,{toDos:n,onTaskDelete:function(e){var t=n.filter((function(t){return t.id!==e}));c(t),console.log(" setToDOS(updatedTodos);"),M(t),console.log(n)},onTaskDone:function(e){var t=n.map((function(t){return t.id===e?Object(l.a)(Object(l.a)({},t),{},{isDone:!t.isDone}):t}));c(t),M(t),console.log(n)},onTaskSave:function(e){n.map((function(t){return t.id===e.id?Object(l.a)({},t.name=e.name):t}))},filter:N}),o.a.createElement(d,{allTask:f,todoTask:y,doneTask:T}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},4:function(e,t,n){},9:function(e,t,n){e.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.101e14b4.chunk.js.map