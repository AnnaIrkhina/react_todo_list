(this.webpackJsonpreact_todo_list=this.webpackJsonpreact_todo_list||[]).push([[0],{14:function(e,n,t){},15:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(7),c=t.n(r),l=(t(14),t(1)),i=t(8),s=t(2);t(5);var u=function(e){var n=Object(a.useState)(""),t=Object(s.a)(n,2),r=t[0],c=t[1];return o.a.createElement("div",{class:"container"},o.a.createElement("div",{className:"input-group mb-3"},o.a.createElement("input",{class:"form-control",type:"text",onChange:function(e){return c(e.target.value)},on:!0,value:r}),o.a.createElement("div",{class:"btn-group",role:"group","aria-label":"Basic example"},o.a.createElement("button",{className:"btn btn-outline-secondary",onClick:function(){console.log(r),e.onTaskCeate(r),c("")},disabled:""===r.trim()},"\u2795"))))};var m=function(e){var n=Object(a.useState)({}),t=Object(s.a)(n,2),r=t[0],c=t[1],i=function(e){console.log("OnChange "+e.target.value),c(Object(l.a)(Object(l.a)({},r),{},{name:e.target.value}))},u=function(){e.onTaskSave(r),c({})};return o.a.createElement("div",{class:"container"},o.a.createElement("ul",{class:"list-group"},e.toDos.map((function(n){return o.a.createElement("li",{key:n.id,class:"list-group-item"},o.a.createElement("div",{className:"input-group"},r.id===n.id&&!1===n.isDone?o.a.createElement(o.a.Fragment,null,o.a.createElement("input",{class:"form-control",type:"text",value:r.name,onChange:i}),o.a.createElement("div",{class:"btn-group",role:"group","aria-label":"Basic example"},o.a.createElement("button",{class:"btn btn-outline-secondary ",onClick:u,disabled:!r.name.trim()},"\ud83d\udcbe"))):o.a.createElement("span",{class:"form-control","text-decoration":"line-through",onClick:function(){return c(e=n),void console.log(e);var e}},n.name),o.a.createElement("div",{class:"btn-group",role:"group","aria-label":"Basic example"},o.a.createElement("button",{class:"btn btn-outline-secondary",onClick:function(){return t=n.id,console.log("Done "+t),void e.onTaskDone(t);var t}},n.isDone?"\ud83d\udc9a":"\u2764\ufe0f"),o.a.createElement("button",{class:"btn btn-outline-secondary",onClick:function(){return t=n.id,console.log("Delete "+t),void e.onTaskDelete(t);var t}},"\u274c"))))}))))},d=[{id:Math.random(),name:"To Do Home Work",isDone:!1},{id:Math.random(),name:"To Do Exercise",isDone:!0},{id:Math.random(),name:"To call mom",isDone:!1}];var b=function(){var e=Object(a.useState)(d),n=Object(s.a)(e,2),t=n[0],r=n[1];return o.a.createElement("div",{class:"container"},o.a.createElement("h1",null,"Todo List"),o.a.createElement(u,{onTaskCeate:function(e){console.log(e);var n=Object(i.a)(t);n.push({id:Math.random(),name:e,isDone:!1}),r(n)}}),o.a.createElement(m,{toDos:t,onTaskDelete:function(e){var n=t.filter((function(n){return n.id!==e}));r(n)},onTaskDone:function(e){var n=t.map((function(n){return n.id===e?Object(l.a)(Object(l.a)({},n),{},{isDone:!n.isDone}):n}));r(n)},onTaskSave:function(e){t.map((function(n){return n.id===e.id?Object(l.a)({},n.name=e.name):n}))}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},5:function(e,n,t){},9:function(e,n,t){e.exports=t(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.a0d4a8e0.chunk.js.map