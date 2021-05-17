(this["webpackJsonpemployeedir-app"]=this["webpackJsonpemployeedir-app"]||[]).push([[0],{10:function(e,t,s){},34:function(e,t,s){},52:function(e,t,s){},54:function(e,t,s){"use strict";s.r(t);var r=s(3),a=s(19),n=s.n(a),c=s(20),o=s(21),i=s(24),l=s(23),u=s(4),h=s(5),j=(s(10),s(0));var d=function(){return Object(j.jsxs)("div",{className:"title",children:[Object(j.jsx)("h1",{children:" Employee Directory"}),Object(j.jsx)("p",{children:"Click on the triangles to filter by cateogry or use the search box to narrow the results."})]})};var m=function(e){var t=e.search,s=e.handleFormSubmit,r=e.handleInputChange;return Object(j.jsx)("form",{children:Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)(d,{}),Object(j.jsxs)("div",{className:"inputContainer",children:[Object(j.jsx)("input",{value:t,onChange:r,name:"search",className:"Category",placeholder:"Search",id:"search"}),Object(j.jsx)(u.a,{className:"caret",icon:h.b,onClick:s})]})]})})};s(34);var b=function(e){return Object(j.jsx)("table",{className:"list-group",children:Object(j.jsxs)("tbody",{children:[Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{scope:"col",children:"Picture"}),Object(j.jsxs)("th",{scope:"col",children:["Name",Object(j.jsx)(u.a,{className:"pointer",icon:h.a,onClick:e.sortByName})]}),Object(j.jsxs)("th",{scope:"col",children:["Phone",Object(j.jsx)(u.a,{className:"pointer",icon:h.a,onClick:e.sortByPhone})]}),Object(j.jsxs)("th",{scope:"col",children:["Email",Object(j.jsx)(u.a,{className:"pointer",icon:h.a,onClick:e.sortByEmail})]}),Object(j.jsxs)("th",{scope:"col",children:["DOB",Object(j.jsx)(u.a,{className:"pointer",icon:h.a,onClick:e.sortByDOB})]})]}),e.results.map((function(t,s){return t.name.first.toLowerCase().includes(e.search)||t.name.last.toLowerCase().includes(e.search)||t.email.toLowerCase().includes(e.search)||t.phone.includes(e.search)||t.dob.date.includes(e.search),Object(j.jsxs)("tr",{className:"table-row",children:[Object(j.jsx)("td",{children:Object(j.jsx)("img",{alt:t.name.first,className:"img-fluid",src:t.picture.thumbnail})}),Object(j.jsxs)("td",{children:[t.name.first," ",t.name.last]}),Object(j.jsx)("td",{children:t.phone}),Object(j.jsx)("td",{children:t.email}),Object(j.jsx)("td",{children:t.dob.date})]},s)}))]})})},p=s(22),O=s.n(p),f=function(){return O.a.get("https://randomuser.me/api/?results=20&nat=us")},x=function(e){Object(i.a)(s,e);var t=Object(l.a)(s);function s(){var e;Object(c.a)(this,s);for(var r=arguments.length,a=new Array(r),n=0;n<r;n++)a[n]=arguments[n];return(e=t.call.apply(t,[this].concat(a))).state={search:"",results:[],sort:"DESC"},e.searchEmployees=function(t){f(t).then((function(t){return e.setState({results:t.data.results})})).catch((function(e){return console.log(e)}))},e.handleFormSubmit=function(t){t.preventDefault(),e.searchEmployees(e.state.search)},e.handleInputChange=function(t){var s=e.state.results.filter((function(e){return e.name.first.toLowerCase().includes(t.target.value.toLowerCase())||e.name.last.toLowerCase().includes(t.target.value.toLowerCase())||e.phone.includes(t.target.value)||e.email.toLowerCase().includes(t.target.value.toLowerCase())}));e.setState({search:t.target.value,results:s})},e.sortByName=function(){var t=e.state.results.sort((function(e,t){return e.name.first>t.name.first?1:-1}));"DESC"===e.state.sort?t.reverse()&&e.setState({sort:"ASC"}):e.setState({sort:"DESC"}),e.setState({results:t})},e.sortByEmail=function(){var t=e.state.results.sort((function(e,t){return e.email>t.email?1:-1}));"DESC"===e.state.sort?t.reverse()&&e.setState({sort:"ASC"}):e.setState({sort:"DESC"}),e.setState({results:t})},e.sortByPhone=function(){var t=e.state.results.sort((function(e,t){return parseInt(e.phone.trim().replace(/-()/),"")-parseInt(t.phone.trim().replace(/-()/),"")?1:-1}));e.setState({results:t})},e.sortByDOB=function(){var t=e.state.results.sort((function(e,t){return e.dob>t.dob?1:-1}));e.setState({results:t})},e}return Object(o.a)(s,[{key:"componentDidMount",value:function(){this.searchEmployees("")}},{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(m,{search:this.state.search,handleFormSubmit:this.handleFormSubmit,handleInputChange:this.handleInputChange}),Object(j.jsx)(b,{search:this.state.search,results:this.state.results,sortByName:this.sortByName,sortByEmail:this.sortByEmail,sortByPhone:this.sortByPhone,sortByDOB:this.sortByDOB})]})}}]),s}(r.Component),y=function(){return Object(j.jsx)(x,{})};s(52),s(53);n.a.render(Object(j.jsx)(y,{}),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.010364f6.chunk.js.map