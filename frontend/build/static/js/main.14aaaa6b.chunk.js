(this["webpackJsonpproject-budget-planner"]=this["webpackJsonpproject-budget-planner"]||[]).push([[0],{44:function(e,t,c){},82:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),s=c(19),r=c.n(s),o=(c(54),c(8)),l=c.n(o),i=c(85),j=c(86),u=c(48),d=c(6),b=c(1),m=function(){var e=Object(d.f)(),t=localStorage.getItem("ownername");return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(i.a,{bg:"dark",variant:"dark",children:[Object(b.jsx)(i.a.Brand,{href:"/",children:"Project Budget Planner"}),Object(b.jsx)(j.a,{className:"mr-auto",children:Object(b.jsx)(j.a.Link,{href:"/",children:"Home"})}),Object(b.jsxs)("div",{className:"form-inline",children:[Object(b.jsx)(u.a,{variant:"outline-light",className:"mr-sm-2",children:t||"User"}),Object(b.jsx)(u.a,{variant:"light",onClick:function(){localStorage.removeItem("token"),e.push("/login")},children:"Logout"})]})]})})},h=function(){return Object(b.jsx)(i.a,{className:"justify-content-center",children:Object(b.jsx)("p",{className:"text-center mt-4 mb-4",children:"Copyright \xa9 2021 - Musa Ugurlu"})})},O=c(7),g=function(e){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("span",{children:["Budget: $",e.budget]}),Object(b.jsx)("button",{type:"button",className:"btn btn-primary",onClick:e.handleEditClick,children:"Edit"})]})},p=function(e){var t=Object(n.useState)(e.budget),c=Object(O.a)(t,2),a=c[0],s=c[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("input",{required:"required",type:"number",className:"form-control mr-3",id:"name",value:a,onChange:function(e){return s(e.target.value)}}),Object(b.jsx)("button",{type:"button",className:"btn btn-primary",onClick:function(){return e.handleSaveClick(a)},children:"Save"})]})},x=function(e){var t=e.project,c=e.triggerUpdate,a=Object(n.useState)(!1),s=Object(O.a)(a,2),r=s[0],o=s[1];return Object(b.jsx)("div",{className:"alert alert-secondary p-3 d-flex align-items-center justify-content-between",children:r?Object(b.jsx)(p,{handleSaveClick:function(e){l.a.post("/projects/".concat(t.id,"/setBudget"),{budget:e}).then((function(e){c(),o(!1)})).catch((function(e){c(),o(!1)}))},budget:t.budget}):Object(b.jsx)(g,{handleEditClick:function(){o(!0)},budget:t.budget})})},f=function(e){var t=e.project,c=t.expenses.reduce((function(e,t){return e+t.cost}),0),n=c>t.budget?"alert-danger":"alert-success";return Object(b.jsx)("div",{className:"alert p-4 ".concat(n),children:Object(b.jsxs)("span",{children:["Remaining: $",t.budget-c]})})},v=function(e){var t=e.project.expenses.reduce((function(e,t){return e+t.cost}),0);return Object(b.jsx)("div",{className:"alert alert-primary p-4",children:Object(b.jsxs)("span",{children:["Spent so far: $",t]})})},N=c(10),y=function(e){var t=e.project,c=e.triggerUpdate,a=Object(n.useState)(""),s=Object(O.a)(a,2),r=s[0],o=s[1],i=Object(n.useState)(""),j=Object(O.a)(i,2),u=j[0],d=j[1];return Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n={name:r,cost:parseInt(u)};l.a.post("/projects/".concat(t.id,"/addExpense"),n).then((function(e){c(),N.b.success("\u2714\ufe0f Expense added!")})).catch((function(e){console.log(e)})),o(""),d("")},children:[Object(b.jsxs)("div",{className:"row",children:[Object(b.jsxs)("div",{className:"col-sm col-lg-4",children:[Object(b.jsx)("label",{htmlFor:"name",children:"Name"}),Object(b.jsx)("input",{required:"required",type:"text",className:"form-control",id:"name",value:r,onChange:function(e){return o(e.target.value)}})]}),Object(b.jsxs)("div",{className:"col-sm col-lg-4",children:[Object(b.jsx)("label",{htmlFor:"cost",children:"Cost"}),Object(b.jsx)("input",{required:"required",type:"number",className:"form-control",id:"cost",value:u,onChange:function(e){return d(e.target.value)}})]})]}),Object(b.jsx)("div",{className:"row mt-3",children:Object(b.jsx)("div",{className:"col-sm",children:Object(b.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Save"})})})]})},S=c(24),C=function(e){var t=e.id,c=e.projectId,n=e.name,a=e.cost,s=e.triggerUpdate;return Object(b.jsxs)("li",{className:"list-group-item d-flex justify-content-between align-items-center",children:[n,Object(b.jsxs)("div",{children:[Object(b.jsxs)("span",{className:"badge badge-primary badge-pill mr-3",children:["$",a]}),Object(b.jsx)(S.a,{size:"1.5em",onClick:function(){l.a.post("/projects/".concat(c,"/deleteExpense"),{id:t,name:n,cost:a}).then((function(e){N.b.success("\u2714\ufe0f Expense deleted!"),s()})).catch((function(e){console.log(e),N.b.error("\ud83d\udd25 Expense removal failed!")}))}})]})]})},w=function(e){var t=e.project,c=e.triggerUpdate,a=Object(n.useState)(t.expenses||[]),s=Object(O.a)(a,2),r=s[0],o=s[1];Object(n.useEffect)((function(){o(t.expenses)}),[t.expenses]);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("input",{type:"text",className:"form-control mb-2 mr-sm-2",placeholder:"Type to search...",onChange:function(e){var c=t.expenses.filter((function(t){return t.name.toLowerCase().includes(e.target.value)}));o(c)}}),Object(b.jsx)("ul",{className:"list-group mt-3 mb-3",children:r.map((function(e){return Object(b.jsx)(C,{projectId:t.id,id:e.id,name:e.name,cost:e.cost,triggerUpdate:c},e.id)}))})]})},k=c(84),I=function(){var e=Object(d.g)().projectId,t=Object(n.useState)(),c=Object(O.a)(t,2),a=c[0],s=c[1],r=Object(n.useState)(!0),o=Object(O.a)(r,2),i=o[0],j=o[1];Object(n.useEffect)((function(){i&&l.a.get("/projects/".concat(e)).then((function(e){s(e.data),j(!1)})).catch((function(e){console.log(e),j(!1)}))}),[i]);var u=function(){j(!0)};return i?Object(b.jsx)("div",{children:"Loding..."}):Object(b.jsxs)(k.a,{children:[Object(b.jsxs)("h1",{className:"mt-3",children:[" ",a.name]}),Object(b.jsx)("sub",{children:"Project Budget Planner"}),Object(b.jsxs)("div",{className:"row mt-3",children:[Object(b.jsx)("div",{className:"col-sm",children:Object(b.jsx)(x,{project:a,triggerUpdate:u})}),Object(b.jsx)("div",{className:"col-sm",children:Object(b.jsx)(f,{project:a})}),Object(b.jsx)("div",{className:"col-sm",children:Object(b.jsx)(v,{project:a})})]}),Object(b.jsx)("h3",{className:"mt-3",children:"Expenses"}),Object(b.jsx)("div",{className:"row ",children:Object(b.jsx)("div",{className:"col-sm",children:Object(b.jsx)(w,{project:a,triggerUpdate:u})})}),Object(b.jsx)("h3",{className:"mt-3",children:"Add Expense"}),Object(b.jsx)("div",{className:"row mt-3",children:Object(b.jsx)("div",{className:"col-sm",children:Object(b.jsx)(y,{project:a,triggerUpdate:u})})})]})},L=function(e){var t=e.triggerUpdate,c=Object(n.useState)(""),a=Object(O.a)(c,2),s=a[0],r=a[1],o=Object(n.useState)(""),i=Object(O.a)(o,2),j=i[0],u=i[1];return Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault();var c={name:s,budget:parseFloat(j),expenses:[]};l.a.post("/projects/create",c).then((function(e){t()})).catch((function(e){console.log(e.response)})),r(""),u("")},children:[Object(b.jsxs)("div",{className:"row",children:[Object(b.jsxs)("div",{className:"col-sm col-lg-4",children:[Object(b.jsx)("label",{htmlFor:"name",children:"Name"}),Object(b.jsx)("input",{required:"required",type:"text",className:"form-control",id:"name",value:s,onChange:function(e){return r(e.target.value)}})]}),Object(b.jsxs)("div",{className:"col-sm col-lg-4",children:[Object(b.jsx)("label",{htmlFor:"budget",children:"Budget"}),Object(b.jsx)("input",{required:"required",type:"number",className:"form-control",id:"budget",value:j,onChange:function(e){return u(e.target.value)}})]})]}),Object(b.jsx)("div",{className:"row mt-3",children:Object(b.jsx)("div",{className:"col-sm",children:Object(b.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Save"})})})]})},U=c(18),E=function(e){var t=e.id,c=e.name,n=e.budget,a=e.triggerUpdate;return Object(b.jsxs)("li",{className:"list-group-item d-flex justify-content-between align-items-center",children:[Object(b.jsx)(U.b,{to:"/projects/"+t,children:c}),Object(b.jsxs)("div",{children:[Object(b.jsxs)("span",{className:"badge badge-primary badge-pill mr-3",children:["$",n]}),Object(b.jsx)(S.a,{size:"1.5em",onClick:function(){l.a.post("/projects/".concat(t,"/delete")).then((function(e){a()})).catch((function(e){console.log(e)}))}})]})]})},z=function(){var e=Object(n.useState)([]),t=Object(O.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(c||[]),r=Object(O.a)(s,2),o=r[0],i=r[1],j=Object(n.useState)(!0),u=Object(O.a)(j,2),m=u[0],h=u[1],g=Object(d.f)();Object(n.useEffect)((function(){m&&l()("/projects").then((function(e){a(e.data),i(e.data),h(!1)})).catch((function(e){console.log(e.response),401===e.response.status&&(localStorage.removeItem("token"),N.b.error("Session Expired. Please login again"),g.push("/login")),403===e.response.status&&(N.b.error("\ud83d\udd25 Unauthorized. Please login again"),g.push("/login"))}))}),[m]);var p=function(){console.log("Triggering!!!"),h(!0)};return m?Object(b.jsx)("div",{children:"Loading..."}):Object(b.jsxs)(k.a,{children:[Object(b.jsx)("h1",{children:"My Projects"}),Object(b.jsx)("input",{type:"text",className:"form-control mb-2 mr-sm-2",placeholder:"Type to search...",onChange:function(e){var t=c.filter((function(t){return t.name.toLowerCase().includes(e.target.value)}));i(t)}}),Object(b.jsx)("ul",{className:"list-group mt-3 mb-3",children:null===o||void 0===o?void 0:o.map((function(e){return Object(b.jsx)(E,{id:e.id,name:e.name,budget:e.budget,triggerUpdate:p},e.id)}))}),Object(b.jsx)("br",{}),Object(b.jsx)("h3",{className:"mt-3",children:"Add Project"}),Object(b.jsx)("div",{className:"row mt-3",children:Object(b.jsx)("div",{className:"col-sm",children:Object(b.jsx)(L,{triggerUpdate:p})})})]})},F=c(34),P=c.n(F),q=c(49),B=c(11),A=(c(44),function(){var e=Object(n.useState)(""),t=Object(O.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(""),r=Object(O.a)(s,2),o=r[0],i=r[1],j=Object(d.f)();function m(){return(m=Object(q.a)(P.a.mark((function e(t){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,l.a.post("auth/login",{email:c,password:o},{headers:{Authorization:null}}).then((function(e){localStorage.setItem("token",e.data.token),localStorage.setItem("ownername",e.data.firstName+" "+e.data.lastName),l.a.defaults.headers.common.Authorization="Bearer "+localStorage.getItem("token"),N.b.success("\u2714\ufe0f Successfully logged in!"),j.push("/")})).catch((function(e){N.b.error("\ud83d\udd25 Login failed!",{toastId:1}),localStorage.removeItem("token")}));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(b.jsxs)("div",{className:"Login",children:[Object(b.jsx)("h2",{className:"head",children:"Login"}),Object(b.jsxs)(B.a,{onSubmit:function(e){return m.apply(this,arguments)},children:[Object(b.jsxs)(B.a.Group,{size:"lg",controlId:"email",children:[Object(b.jsx)(B.a.Label,{children:"Email"}),Object(b.jsx)(B.a.Control,{autoFocus:!0,type:"email",value:c,onChange:function(e){return a(e.target.value)}})]}),Object(b.jsxs)(B.a.Group,{size:"lg",controlId:"password",children:[Object(b.jsx)(B.a.Label,{children:"Password"}),Object(b.jsx)(B.a.Control,{type:"password",value:o,onChange:function(e){return i(e.target.value)}})]}),Object(b.jsx)(u.a,{block:!0,size:"lg",type:"submit",disabled:!(c.length>0&&o.length>0),children:"Login"})]}),Object(b.jsxs)("div",{style:{textAlign:"center",marginTop:"15px"},children:["Don't have an account? ",Object(b.jsx)(U.b,{to:"/signup",children:"Sign Up"})]})]})}),T=function(){var e=Object(n.useState)(""),t=Object(O.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(""),r=Object(O.a)(s,2),o=r[0],i=r[1],j=Object(n.useState)(""),m=Object(O.a)(j,2),h=m[0],g=m[1],p=Object(n.useState)(""),x=Object(O.a)(p,2),f=x[0],v=x[1],y=Object(d.f)();return Object(b.jsxs)("div",{className:"Login",children:[Object(b.jsx)("h2",{className:"head",children:"Sign Up"}),Object(b.jsxs)(B.a,{onSubmit:function(e){e.preventDefault(),l.a.post("/owners/register",{firstName:h,lastName:f,email:c,password:o},{headers:{Authorization:null}}).then((function(e){N.b.success("\u2714\ufe0f The user is successfully registered. Please login"),y.push("/login")})).catch((function(e){console.log(e),N.b.error("\ud83d\udd25 Registration failed!")}))},children:[Object(b.jsxs)(B.a.Group,{size:"lg",controlId:"firstName",children:[Object(b.jsx)(B.a.Label,{children:"First Name"}),Object(b.jsx)(B.a.Control,{autoFocus:!0,type:"firstName",value:h,onChange:function(e){return g(e.target.value)}})]}),Object(b.jsxs)(B.a.Group,{size:"lg",controlId:"lastName",children:[Object(b.jsx)(B.a.Label,{children:"Last Name"}),Object(b.jsx)(B.a.Control,{type:"lastName",value:f,onChange:function(e){return v(e.target.value)}})]}),Object(b.jsxs)(B.a.Group,{size:"lg",controlId:"email",children:[Object(b.jsx)(B.a.Label,{children:"Email"}),Object(b.jsx)(B.a.Control,{autoFocus:!0,type:"email",value:c,onChange:function(e){return a(e.target.value)}})]}),Object(b.jsxs)(B.a.Group,{size:"lg",controlId:"password",children:[Object(b.jsx)(B.a.Label,{children:"Password"}),Object(b.jsx)(B.a.Control,{type:"password",value:o,onChange:function(e){return i(e.target.value)}})]}),Object(b.jsx)(u.a,{block:!0,size:"lg",type:"submit",disabled:!(c.length>0&&o.length>0&&h.length>0&&f.length>0),children:"Sign Up"})]}),Object(b.jsxs)("div",{style:{textAlign:"center",marginTop:"15px"},children:["Already have an account? ",Object(b.jsx)(U.b,{to:"/login",children:"Login"})]})]})},G=(c(81),function(){return l.a.defaults.baseURL="http://localhost:8090",localStorage.getItem("token")&&(l.a.defaults.headers.common.Authorization="Bearer "+localStorage.getItem("token")),Object(b.jsxs)(U.a,{children:[Object(b.jsx)(N.a,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,toastId:"1"}),Object(b.jsxs)(d.c,{children:[Object(b.jsx)(d.a,{path:"/login",children:Object(b.jsx)(A,{})}),Object(b.jsx)(d.a,{path:"/signup",component:T}),Object(b.jsxs)(d.a,{path:"/",children:[Object(b.jsx)(m,{}),Object(b.jsx)(d.a,{exact:!0,path:"/",children:Object(b.jsx)(z,{})}),Object(b.jsx)(d.a,{exact:!0,path:"/projects",children:Object(b.jsx)(z,{})}),Object(b.jsx)(d.a,{path:"/projects/:projectId",component:I})]})]}),Object(b.jsx)(h,{})]})});r.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(G,{})}),document.getElementById("root"))}},[[82,1,2]]]);
//# sourceMappingURL=main.14aaaa6b.chunk.js.map