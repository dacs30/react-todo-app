(this["webpackJsonpmagic-cards"]=this["webpackJsonpmagic-cards"]||[]).push([[0],{45:function(e,t,a){e.exports=a(58)},50:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(11),c=a.n(o),s=(a(50),a(28)),l=a(29),i=a(38),u=a(35),d=a(36),m=a(37),p=a(81),f=a(83),h=a(89),k=a(84),b=a(86),v=a(90),g=a(87),E=a(85),y=a(33),w=a.n(y),O=Object(p.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)}}}}));function S(){var e=O();return r.a.createElement("div",{className:e.root},r.a.createElement(w.a,{color:"secondary"}))}var j=Object(p.a)((function(e){return{root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.grey}}})),C=function(e){var t=e.tasks,a=e.deleteTask,n=j(),o=r.a.useState([0]),c=Object(m.a)(o,2),s=c[0],l=c[1],i=function(e){return function(){var t=s.indexOf(e),a=Object(d.a)(s);-1===t?a.push(e):a.splice(t,1),l(a)}};return r.a.createElement(f.a,{className:n.root},t.map((function(e){var t="checkbox-list-label-".concat(e);return r.a.createElement(h.a,{key:e,role:void 0,dense:!0,button:!0,onClick:i(e)},r.a.createElement(k.a,null,r.a.createElement(g.a,{edge:"start",checked:-1!==s.indexOf(e),tabIndex:-1,disableRipple:!0,inputProps:{"aria-labelledby":t}})),r.a.createElement(v.a,{id:t,primary:"".concat(e)}),r.a.createElement(b.a,null,r.a.createElement(E.a,{edge:"end","aria-label":"delete",onClick:function(t){return a(e,t)}},r.a.createElement(S,null))))})))},x=a(88),N=function(e){var t=e.handleSubmit,a=e.handleChange,n=e.task;return r.a.createElement("div",null,r.a.createElement("form",{id:"form",onSubmit:t,noValidate:!0,autoComplete:"off"},r.a.createElement(x.a,{id:"standard-basic",placeholder:"Task",color:"secondary",inputProps:{style:{color:"white"}},inputlabelprops:{style:{color:"grey"}},value:n,onChange:a}),r.a.createElement("input",{type:"submit",value:"Add task",style:{margin:"10px"}})))},T=(a(57),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={tasks:[],task:""},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",null,"Todo List"),r.a.createElement(C,{tasks:this.state.tasks,deleteTask:function(t,a){a.preventDefault(),console.log("deleted ".concat(t)),e.setState({tasks:e.state.tasks.filter((function(e){return e!==t}))})}}),r.a.createElement(N,{handleSubmit:function(t){if(t.preventDefault(),console.log(e.state.task),""!==e.state.task){e.state.tasks.push(e.state.task),e.setState({tasks:e.state.tasks}),e.setState({task:""});var a=document.querySelector("#standard-basic");a.value="",a.focus()}},handleChange:function(t){e.setState({task:t.target.value})},value:this.state.task})))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[45,1,2]]]);
//# sourceMappingURL=main.cd3249c2.chunk.js.map