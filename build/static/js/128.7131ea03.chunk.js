(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{1749:function(e,a,t){"use strict";t.r(a);var r=t(15),s=t(16),o=t(19),n=t(17),l=t(18),i=t(0),c=t.n(i),d=t(1486),m=t(1477),p=t(88),u=t(3),w=d.a.Item,f=function(e){function a(){var e,t;Object(r.a)(this,a);for(var s=arguments.length,l=new Array(s),i=0;i<s;i++)l[i]=arguments[i];return(t=Object(o.a)(this,(e=Object(n.a)(a)).call.apply(e,[this].concat(l)))).handleSubmit=function(e){e.preventDefault(),t.props.form.validateFields(function(e,a){e||console.log("Received values of form: ",a)})},t.compareToFirstPassword=function(e,a,r){var s=t.props.form;a&&a!==s.getFieldValue("password")?r("Two passwords that you enter is inconsistent!"):r()},t.validateToNextPassword=function(e,a,r){var s=t.props.form;a&&t.props.confirmDirty&&s.validateFields(["confirm"],{force:!0}),r()},t}return Object(l.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return c.a.createElement("div",{className:"gx-login-container"},c.a.createElement("div",{className:"gx-login-content"},c.a.createElement("div",{className:"gx-login-header"},c.a.createElement("img",{src:t(711),alt:"wieldy",title:"wieldy"})),c.a.createElement("div",{className:"gx-mb-4"},c.a.createElement("h2",null,"Reset Password"),c.a.createElement("p",null,c.a.createElement(u.a,{id:"appModule.enterPasswordReset"}))),c.a.createElement(d.a,{onSubmit:this.handleSubmit,className:"gx-login-form gx-form-row0"},c.a.createElement(w,null,e("password",{rules:[{required:!0,message:"Please input your password!"},{validator:this.validateToNextPassword}]})(c.a.createElement(m.a,{type:"password",placeholder:"New Password"}))),c.a.createElement(w,null,e("confirm",{rules:[{required:!0,message:"Please confirm your password!"},{validator:this.compareToFirstPassword}]})(c.a.createElement(m.a,{placeholder:"Retype New Password",type:"password",onBlur:this.handleConfirmBlur}))),c.a.createElement(w,null,c.a.createElement(p.a,{type:"primary",htmlType:"submit"},c.a.createElement(u.a,{id:"app.userAuth.reset"}))))))}}]),a}(i.Component),h=d.a.create()(f);a.default=h}}]);
//# sourceMappingURL=128.7131ea03.chunk.js.map