(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{23:function(t,e,n){},42:function(t,e,n){},44:function(t,e,n){"use strict";n.r(e);var a=n(2),s=n.n(a),o=n(13),c=n.n(o),i=(n(23),n(14)),l=n(15),r=n(16),h=n(18),u=n(17),d=n(4),b=n.n(d),j=(n(42),n(0)),p=function(t){Object(h.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(t=e.call.apply(e,[this].concat(s))).state={title:"",body:"",posts:[]},t.componentDidMount=function(){t.getBlogPost()},t.getBlogPost=function(){b.a.get("/api").then((function(e){var n=e.data;t.setState({posts:n}),console.log("Data has been received!!")})).catch((function(){alert("Error retrieving data!!!")}))},t.handleChange=function(e){var n=e.target,a=n.name,s=n.value;t.setState(Object(i.a)({},a,s))},t.submit=function(e){e.preventDefault();var n={title:t.state.title,body:t.state.body};b()({url:"http://localhost:3000/api/save",method:"POST",data:n}).then((function(){console.log("Data has been sent to the server"),t.resetUserInputs(),t.getBlogPost()})).catch((function(){}))},t.resetUserInputs=function(){t.setState({title:"",body:""})},t.displayBlogPost=function(t){return t.length?t.map((function(t,e){return Object(j.jsxs)("div",{className:"blog-post__display",children:[Object(j.jsx)("h3",{children:t.title}),Object(j.jsx)("p",{children:t.body})]},e)})):null},t}return Object(r.a)(n,[{key:"render",value:function(){return console.log("State: ",this.state),Object(j.jsxs)("div",{className:"app",children:[Object(j.jsx)("h1",{children:"Welcome to Anirban's MERN Stack App"}),Object(j.jsx)("div",{children:Object(j.jsx)("h3",{children:": Share your thought for the day"})}),Object(j.jsxs)("form",{onSubmit:this.submit,children:[Object(j.jsx)("div",{className:"form-input",children:Object(j.jsx)("input",{type:"text",name:"title",placeholder:"Title",value:this.state.title,onChange:this.handleChange})}),Object(j.jsx)("div",{className:"form-input",children:Object(j.jsx)("textarea",{placeholder:"body",name:"body",cols:"30",rows:"10",value:this.state.body,onChange:this.handleChange})}),Object(j.jsx)("button",{children:"Submit"})]}),Object(j.jsx)("div",{className:"blog-",children:this.displayBlogPost(this.state.posts)})]})}}]),n}(s.a.Component),g=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(e){var n=e.getCLS,a=e.getFID,s=e.getFCP,o=e.getLCP,c=e.getTTFB;n(t),a(t),s(t),o(t),c(t)}))};c.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(p,{})}),document.getElementById("root")),g()}},[[44,1,2]]]);
//# sourceMappingURL=main.06a1d58a.chunk.js.map