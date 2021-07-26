(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={filterLabel:"styles_filterLabel__3D4_s",filterInput:"styles_filterInput__1qcwg"}},14:function(t,e,n){t.exports={contactsList:"styles_contactsList__hhwpG"}},30:function(t,e,n){},31:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),s=n(13),c=n.n(s),i=(n(20),n(12)),o=n(2),l=n(3),u=n(5),m=n(4),b=n(6),d=n.n(b),f=n(14),p=n.n(f),j=n(0),h=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var t=this.props.children;return Object(j.jsx)("ul",{className:p.a.contactsList,children:t})}}]),n}(a.Component),O=n(15),v=n(7),y=n.n(v),x=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:""},t.inputHandler=function(e){t.setState(Object(O.a)({},e.target.name,e.target.value))},t.submitHanlder=function(e){e.preventDefault(),t.props.sendData(t.state),t.formReset()},t.formReset=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=d.a.generate(),e=d.a.generate();return Object(j.jsxs)("form",{onSubmit:this.submitHanlder,children:[Object(j.jsxs)("label",{className:y.a.formLabel,htmlFor:t,children:["Name",Object(j.jsx)("input",{id:t,className:y.a.formInput,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",onChange:this.inputHandler,value:this.state.name,required:!0})]}),Object(j.jsxs)("label",{className:y.a.formLabel,htmlFor:e,children:["Number",Object(j.jsx)("input",{id:e,className:y.a.formInput,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",onChange:this.inputHandler,value:this.state.number,required:!0})]}),Object(j.jsx)("button",{className:y.a.submitBtn,type:"submit",children:"Add Contact"})]})}}]),n}(a.Component),_=n(11),C=n.n(_),g=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var t=d.a.generate(),e=this.props,n=e.onChange,a=e.value;return Object(j.jsxs)("label",{className:C.a.filterLabel,htmlFor:t,children:["Search",Object(j.jsx)("input",{id:t,className:C.a.filterInput,type:"text",name:"filter",value:a,onChange:n})]})}}]),n}(a.Component);g.defaultProps={value:""};var N=g,k=n(9),S=n.n(k),I=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var t=this.props,e=t.contacts,n=t.onClick;return e.map((function(t){return Object(j.jsxs)("li",{className:S.a.listItem,children:[Object(j.jsxs)("p",{className:S.a.itemText,children:[t.name,": ",t.number]}),Object(j.jsx)("button",{className:S.a.deleteBtn,type:"button",onClick:function(){return n(t.id)},children:"Delete"})]},t.id)}))}}]),n}(a.Component),L=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.FilterHandler=function(e){t.setState({filter:e.target.value})},t.addContact=function(e){if(t.state.contacts.map((function(t){return t.name.toLowerCase()})).find((function(t){return t===e.name.toLowerCase()})))return alert("please change name");t.setState((function(t){var n={id:d.a.generate(),name:e.name,number:e.number};return{contacts:[].concat(Object(i.a)(t.contacts),[n])}}))},t.deleteContact=function(e){var n=t.state.contacts.filter((function(t){return t.id!==e}));t.setState({contacts:Object(i.a)(n)})},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){if(localStorage.contacts){var t=JSON.parse(localStorage.getItem("contacts"));this.setState({contacts:t})}}},{key:"componentDidUpdate",value:function(t,e){this.state.contacts!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter,a=this.FilterHandler,r=this.addContact,s=this.deleteContact,c=e.filter((function(t){return t.name.toLowerCase().includes(n.toLowerCase())}));return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(x,{sendData:r}),Object(j.jsx)(N,{onChange:a,value:n}),Object(j.jsx)(h,{children:Object(j.jsx)(I,{contacts:c,onClick:s})})]})}}]),n}(a.Component);n(30);c.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(L,{})}),document.getElementById("root"))},7:function(t,e,n){t.exports={submitBtn:"styles_submitBtn__3sXmb",formLabel:"styles_formLabel__2aFBw",formInput:"styles_formInput__3X9zf"}},9:function(t,e,n){t.exports={listItem:"styles_listItem__1YNtk",itemText:"styles_itemText__3-yIc",deleteBtn:"styles_deleteBtn__2yARZ"}}},[[31,1,2]]]);
//# sourceMappingURL=main.a6f0e573.chunk.js.map