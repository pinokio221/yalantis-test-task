(this.webpackJsonpyalantis=this.webpackJsonpyalantis||[]).push([[0],{10:function(e,t,a){e.exports={wrapper:"Employees_wrapper__qz8fD",alphabet:"Employees_alphabet__3Hg2x",letterBlock:"Employees_letterBlock__E57_9",letter:"Employees_letter__16Ib7",employeeCard:"Employees_employeeCard__6iT-b",activeEmployee:"Employees_activeEmployee__3Hu7O",statusRadio:"Employees_statusRadio__2XYkR"}},13:function(e,t,a){e.exports={wrapper:"Birthday_wrapper__32-vu",monthCard:"Birthday_monthCard__20zeL",monthTitle:"Birthday_monthTitle__3yVNd",birthdaysItems:"Birthday_birthdaysItems__33Jhd",emptyMsg:"Birthday_emptyMsg__2gzFK",birthTitle:"Birthday_birthTitle__1VKj5"}},42:function(e,t,a){},43:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a(18),n=a.n(c),i=(a(42),a(43),a(9)),r=a.n(i),o=a(12),l=a(1),m=function(e){return Object(l.jsx)("div",{className:r.a.wrapper,children:Object(l.jsxs)("div",{className:r.a.headerBlock,children:[Object(l.jsx)(o.b,{to:"/home",activeClassName:r.a.activeLink,children:Object(l.jsx)("div",{className:r.a.btn,children:"Home"})}),Object(l.jsx)(o.b,{to:"/employees",activeClassName:r.a.activeLink,children:Object(l.jsx)("div",{className:r.a.btn,children:"Employees"})}),Object(l.jsx)(o.b,{to:"/settings",activeClassName:r.a.activeLink,children:Object(l.jsx)("div",{className:r.a.btn,children:"Settings"})}),Object(l.jsx)(o.b,{to:"/logout",activeClassName:r.a.activeLink,children:Object(l.jsx)("div",{className:r.a.btn,children:"Logout"})})]})})},d=a(34),p=a.n(d),u=a(25),j=a(17),h="SET-EMPLOYEES",b="TOGGLE-STATUS",y={employees:[],activeEmployees:[]},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(j.a)(Object(j.a)({},e),{},{employees:t.employees});case b:return e.employees.map((function(a){if(a.id===t.item.id)if(a.status=t.status,!0===t.status)e.activeEmployees.push(t.item);else{var s=e.activeEmployees.find((function(e){return e.id===a.id})),c=e.activeEmployees.indexOf(s);c>-1&&e.activeEmployees.splice(c,1)}})),Object(j.a)(Object(j.a)({},e),{},{employees:Object(u.a)(e.employees),activeEmployees:Object(u.a)(e.activeEmployees)});default:return e}},O=a(16),f=a(10),x=a.n(f),_=function(e){var t=e.employees.slice();return e.sortByLastName(t),Object(l.jsx)("div",{className:x.a.alphabet,children:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"].map((function(a){var s=0,c=t.map((function(t){if(a.toLowerCase()===t.lastName[0].toLowerCase())return s+=1,Object(l.jsxs)("div",{className:x.a.employeeCard,children:[Object(l.jsxs)("span",{className:t.status&&x.a.activeEmployee,children:[t.lastName," ",t.firstName]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("input",{className:x.a.statusRadio,type:"radio",value:"active",checked:!0===t.status,onChange:function(){e.toggleEmployeeStatus(t,!0)}}),Object(l.jsx)("label",{for:"active",children:"Active"}),Object(l.jsx)("input",{type:"radio",className:x.a.statusRadio,value:"not-active",checked:!1===t.status,onChange:function(){e.toggleEmployeeStatus(t,!1)}}),Object(l.jsx)("label",{for:"not-active",children:"Not Active"})]})]})}));return Object(l.jsxs)("div",{className:x.a.letterBlock,children:[Object(l.jsx)("span",{className:x.a.letter,children:a}),Object(l.jsx)("div",{children:s<=0?Object(l.jsx)("span",{children:"----"}):c})]})}))})},N=a(13),E=a.n(N),g=function(e){var t=[{id:0,month:"January"},{id:1,month:"February"},{id:2,month:"March"},{id:3,month:"April"},{id:4,month:"May"},{id:5,month:"June"},{id:6,month:"July"},{id:7,month:"August"},{id:8,month:"September"},{id:9,month:"October"},{id:10,month:"November"},{id:11,month:"December"}],a=function(e){return e.map((function(e){var t=new Date(e.dob);return{firstName:e.firstName,lastName:e.lastName,day:t.getUTCDate(),month:t.getUTCMonth(),year:t.getFullYear()}}))}(e.slice()),s=(new Date).getMonth();return t.slice(s).concat(t.slice(0,s)).map((function(e){var t=0,s=a.map((function(a){if(a.month===e.id){t+=1;var s=a.lastName+" "+a.firstName+" \u2014 "+e.month+" "+a.day+", "+a.year;return Object(l.jsx)("span",{children:s})}}));if(t>0)return Object(l.jsxs)("div",{className:E.a.monthCard,children:[Object(l.jsx)("label",{className:E.a.monthTitle,children:e.month}),Object(l.jsx)("div",{className:E.a.birthdaysItems,children:s})]})}))},k=function(e){return e.sortByLastName(e.activeEmployees),Object(l.jsx)("div",{className:E.a.wrapper,children:e.activeEmployees.length<=0?Object(l.jsx)("div",{className:E.a.emptyMsg,children:Object(l.jsx)("label",{children:"Employees List is empty"})}):Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{className:E.a.birthTitle,children:"COMING EMPLOYEES BIRTHDAYS"}),g(e.activeEmployees)]})})},C=Object(O.b)((function(e){return{activeEmployees:e.employeesPage.activeEmployees}}),{setEmployeesThunk:function(e,t){return function(a){a(function(e){return{type:h,employees:e}}(e.map((function(e){var a=t.find((function(t){return t.id===e.id}));return e.status=!!a,e}))))}},toggleEmployeeStatusAC:function(e,t){return{type:b,item:e,status:t}}})((function(e){Object(s.useEffect)((function(){p.a.get("https://yalantis-react-school-api.yalantis.com/api/task0/users").then((function(t){200===t.status&&e.setEmployeesThunk(t.data,e.activeEmployees)}))}),[]);var t=function(e){e.sort((function(e,t){return e.lastName<t.lastName?-1:e.lastName>t.lastName?1:void 0}))},a=Object(O.c)((function(e){return e.employeesPage.employees}));return Object(l.jsxs)("div",{className:x.a.wrapper,children:[Object(l.jsx)(_,{sortByLastName:t,employees:a,toggleEmployeeStatus:function(t,a){e.toggleEmployeeStatusAC(t,a)}}),Object(l.jsx)(k,{sortByLastName:t,activeEmployees:e.activeEmployees})]})})),B=a(3);var L=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(m,{}),Object(l.jsx)(B.b,{exact:!0,path:"/",render:function(){return Object(l.jsx)(B.a,{to:"/home"})}}),Object(l.jsx)(B.b,{path:"/employees",render:function(){return Object(l.jsx)(C,{})}})]})},w=a(11),T=a(35),S=a(24),A=a(36),M={key:"root",storage:a.n(A).a},H=Object(w.b)({employeesPage:Object(S.a)(M,v)}),I=Object(w.d)(H,Object(w.c)(Object(w.a)(T.a))),D=Object(S.b)(I);window.store=I;var J=a(37);n.a.render(Object(l.jsx)(O.a,{store:I,children:Object(l.jsx)(J.a,{loading:null,persistor:D,children:Object(l.jsx)(o.a,{children:Object(l.jsx)(L,{})})})}),document.getElementById("root"))},9:function(e,t,a){e.exports={headerBlock:"Header_headerBlock__1Aa9H",btn:"Header_btn__25p7W",activeLink:"Header_activeLink__21ewl"}}},[[70,1,2]]]);
//# sourceMappingURL=main.c44e23eb.chunk.js.map