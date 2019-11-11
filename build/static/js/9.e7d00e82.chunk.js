(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{1597:function(e,a,t){},1598:function(e,a,t){},1599:function(e,a,t){},1767:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(203),s=t(110),c=t(15),i=t(16),o=t(19),m=t(17),u=t(18),p=t(1486),d=t(1476),h=t(1477),g=t(20),b=t(88),E=p.a.Item;var f=function(e){function a(){var e,t;Object(c.a)(this,a);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(n)))).handleSubmit=function(e){e.preventDefault(),t.props.form.validateFields(function(e,a){e||console.log("Received values of form: ",a)})},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){this.props.form.validateFields()}},{key:"render",value:function(){var e,a=this.props.form,t=a.getFieldDecorator,l=a.getFieldsError,r=a.getFieldError,s=a.isFieldTouched,c=s("userName")&&r("userName"),i=s("password")&&r("password");return n.a.createElement(d.a,{className:"gx-card",title:"Basic"},n.a.createElement(p.a,{layout:"inline",onSubmit:this.handleSubmit},n.a.createElement(E,{validateStatus:c?"error":"",help:c||""},t("userName",{rules:[{required:!0,message:"Please input your username!"}]})(n.a.createElement(h.a,{prefix:n.a.createElement(g.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Username"}))),n.a.createElement(E,{validateStatus:i?"error":"",help:i||""},t("password",{rules:[{required:!0,message:"Please input your Password!"}]})(n.a.createElement(h.a,{prefix:n.a.createElement(g.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"Password"}))),n.a.createElement(E,null,n.a.createElement(b.a,{className:"gx-mb-0",type:"primary",htmlType:"submit",disabled:(e=l(),Object.keys(e).some(function(a){return e[a]}))},"Log in"))))}}]),a}(l.Component),v=p.a.create()(f),y=t(25),O=t(181),j=t(1483),k=t(24),w=(t(1597),t(163)),C=p.a.Item,x=function(e){function a(){var e;return Object(c.a)(this,a),(e=Object(o.a)(this,Object(m.a)(a).call(this))).handleSubmit=function(a){a.preventDefault(),e.props.form.validateFields(function(a,t){console.log("values",t),a||(e.props.showAuthLoader(),e.props.userSignIn(t))})},e.state={email:"demo@example.com",password:"demo#123"},e}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator,a=this.props,t=a.showMessage,l=a.loader,r=a.alertMessage;return n.a.createElement(d.a,{className:"gx-card",title:"Horizontal Login Form"},n.a.createElement(p.a,{onSubmit:this.handleSubmit,className:"gx-login-form gx-form-row0"},n.a.createElement(C,null,e("email",{rules:[{required:!0,message:"Please input your email!"}]})(n.a.createElement(h.a,{prefix:n.a.createElement(g.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Email"}))),n.a.createElement(C,null,e("password",{rules:[{required:!0,message:"Please input your Password!"}]})(n.a.createElement(h.a,{prefix:n.a.createElement(g.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"Password"}))),n.a.createElement(C,null,e("remember",{valuePropName:"checked",initialValue:!0})(n.a.createElement(O.a,null,"Remember me")),n.a.createElement("span",{className:"gx-link login-form-forgot"},"Forgot password"),n.a.createElement(b.a,{type:"primary",htmlType:"submit",className:"login-form-button"},"Log in"),"Or ",n.a.createElement("span",{className:"gx-link"},"register now!"))),l&&n.a.createElement("div",{className:"gx-loader-view"},n.a.createElement(w.a,null)),t&&j.a.error(r))}}]),a}(l.Component),S=p.a.create()(x),F=Object(y.b)(function(e){var a=e.auth;return{loader:a.loader,alertMessage:a.alertMessage,showMessage:a.showMessage,authUser:a.authUser}},{userSignIn:k.k,hideMessage:k.a,showAuthLoader:k.c,userFacebookSignIn:k.e,userGoogleSignIn:k.i,userGithubSignIn:k.g,userTwitterSignIn:k.q})(S),N=t(205),P=t(1594),D=t(231),Y=t(1551),M=p.a.Item,R=N.a.Option,T=P.a.Option,q=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}],I=function(e){function a(){var e,t;Object(c.a)(this,a);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(n)))).state={confirmDirty:!1,autoCompleteResult:[]},t.handleSubmit=function(e){e.preventDefault(),t.props.form.validateFieldsAndScroll(function(e,a){e||console.log("Received values of form: ",a)})},t.handleConfirmBlur=function(e){var a=e.target.value;t.setState({confirmDirty:t.state.confirmDirty||!!a})},t.compareToFirstPassword=function(e,a,l){var n=t.props.form;a&&a!==n.getFieldValue("password")?l("Two passwords that you enter is inconsistent!"):l()},t.validateToNextPassword=function(e,a,l){var n=t.props.form;a&&t.state.confirmDirty&&n.validateFields(["confirm"],{force:!0}),l()},t.handleWebsiteChange=function(e){var a;a=e?[".com",".org",".net"].map(function(a){return"".concat(e).concat(a)}):[],t.setState({autoCompleteResult:a})},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator,a=this.state.autoCompleteResult,t={labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}},l={wrapperCol:{xs:{span:24,offset:0},sm:{span:16,offset:8}}},c=e("prefix",{initialValue:"86"})(n.a.createElement(N.a,{style:{width:70}},n.a.createElement(R,{value:"86"},"+86"),n.a.createElement(R,{value:"87"},"+87"))),i=a.map(function(e){return n.a.createElement(T,{key:e},e)});return n.a.createElement(d.a,{className:"gx-card",title:"Registration Form"},n.a.createElement(p.a,{onSubmit:this.handleSubmit},n.a.createElement(M,Object.assign({},t,{label:"E-mail"}),e("email",{rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input your E-mail!"}]})(n.a.createElement(h.a,{id:"email1"}))),n.a.createElement(M,Object.assign({},t,{label:"Password"}),e("password",{rules:[{required:!0,message:"Please input your password!"},{validator:this.validateToNextPassword}]})(n.a.createElement(h.a,{type:"password"}))),n.a.createElement(M,Object.assign({},t,{label:"Confirm Password"}),e("confirm",{rules:[{required:!0,message:"Please confirm your password!"},{validator:this.compareToFirstPassword}]})(n.a.createElement(h.a,{type:"password",onBlur:this.handleConfirmBlur}))),n.a.createElement(M,Object.assign({},t,{label:n.a.createElement("span",null,"Nickname\xa0",n.a.createElement(D.a,{title:"What do you want others to call you?"},n.a.createElement(g.a,{type:"question-circle-o"})))}),e("nickname",{rules:[{required:!0,message:"Please input your nickname!",whitespace:!0}]})(n.a.createElement(h.a,null))),n.a.createElement(M,Object.assign({},t,{label:"Habitual Residence"}),e("residence",{initialValue:["zhejiang","hangzhou","xihu"],rules:[{type:"array",required:!0,message:"Please select your habitual residence!"}]})(n.a.createElement(Y.a,{options:q}))),n.a.createElement(M,Object.assign({},t,{label:"Phone Number"}),e("phone",{rules:[{required:!0,message:"Please input your phone number!"}]})(n.a.createElement(h.a,{addonBefore:c,style:{width:"100%"}}))),n.a.createElement(M,Object.assign({},t,{label:"Website"}),e("website",{rules:[{required:!0,message:"Please input website!"}]})(n.a.createElement(P.a,{dataSource:i,onChange:this.handleWebsiteChange,placeholder:"website"},n.a.createElement(h.a,null)))),n.a.createElement(M,Object.assign({},t,{label:"Captcha",extra:"We must make sure that your are a human."}),n.a.createElement(r.a,null,n.a.createElement(s.a,{span:24,sm:12},e("captcha",{rules:[{required:!0,message:"Please input the captcha you got!"}]})(n.a.createElement(h.a,null))),n.a.createElement(s.a,{span:24,sm:12},n.a.createElement(b.a,null,"Get captcha")))),n.a.createElement(M,l,e("agreement",{valuePropName:"checked"})(n.a.createElement(O.a,null,"I have read the ",n.a.createElement("span",{className:"gx-link"},"agreement")))),n.a.createElement(M,l,n.a.createElement(b.a,{type:"primary",htmlType:"submit"},"Register"))))}}]),a}(l.Component),V=p.a.create()(I),A=p.a.Item,z=function(e){function a(){var e,t;Object(c.a)(this,a);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(n)))).state={expand:!1},t.handleSearch=function(e){e.preventDefault(),t.props.form.validateFields(function(e,a){console.log("Received values of form: ",a)})},t.handleReset=function(){t.props.form.resetFields()},t.toggle=function(){var e=t.state.expand;t.setState({expand:!e})},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"getFields",value:function(){for(var e=this.state.expand?10:6,a=this.props.form.getFieldDecorator,t=[],l=0;l<10;l++)t.push(n.a.createElement(s.a,{lg:8,md:8,sm:12,xs:24,key:l,style:{display:l<e?"block":"none"}},n.a.createElement("div",{className:"gx-form-row0"},n.a.createElement(A,{label:"Field ".concat(l)},a("field-".concat(l))(n.a.createElement(h.a,{placeholder:"placeholder"}))))));return t}},{key:"render",value:function(){return n.a.createElement(d.a,{className:"gx-card",title:"Advanced Search"},n.a.createElement(p.a,{className:"ant-advanced-search-form",onSubmit:this.handleSearch},n.a.createElement(r.a,null,this.getFields(),n.a.createElement(s.a,{span:24,className:"gx-text-right"},n.a.createElement(b.a,{type:"primary",htmlType:"submit"},"Search"),n.a.createElement(b.a,{style:{marginLeft:8},onClick:this.handleReset},"Clear"),n.a.createElement("span",{className:"gx-link gx-btn-link gx-ml-2",onClick:this.toggle},"Collapse ",n.a.createElement(g.a,{type:this.state.expand?"up":"down"}))))))}}]),a}(l.Component),H=p.a.create()(z),L=(t(1598),p.a.Item),B=0,W=function(e){function a(){var e,t;Object(c.a)(this,a);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(n)))).remove=function(e){var a=t.props.form,l=a.getFieldValue("keys");1!==l.length&&a.setFieldsValue({keys:l.filter(function(a){return a!==e})})},t.add=function(){var e=t.props.form,a=e.getFieldValue("keys").concat(B);B++,e.setFieldsValue({keys:a})},t.handleSubmit=function(e){e.preventDefault(),t.props.form.validateFields(function(e,a){e||console.log("Received values of form: ",a)})},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this,a=this.props.form,t=a.getFieldDecorator,l=a.getFieldValue,r={labelCol:{xs:{span:24},sm:{span:4}},wrapperCol:{xs:{span:24},sm:{span:20}}},s={wrapperCol:{xs:{span:24,offset:0},sm:{span:20,offset:4}}};t("keys",{initialValue:[]});var c=l("keys"),i=c.map(function(a,l){return n.a.createElement(L,Object.assign({},0===l?r:s,{label:0===l?"Passengers":"",required:!1,key:a}),t("names[".concat(a,"]"),{validateTrigger:["onChange","onBlur"],rules:[{required:!0,whitespace:!0,message:"Please input passenger's name or delete this field."}]})(n.a.createElement(h.a,{placeholder:"passenger name",style:{width:"60%",marginRight:8}})),c.length>1?n.a.createElement(g.a,{className:"dynamic-delete-button",type:"minus-circle-o",disabled:1===c.length,onClick:function(){return e.remove(a)}}):null)});return n.a.createElement(d.a,{className:"gx-card",title:"Dynamic Form Item"},n.a.createElement(p.a,{onSubmit:this.handleSubmit},i,n.a.createElement(L,s,n.a.createElement(b.a,{type:"dashed",onClick:this.add,style:{width:"60%"}},n.a.createElement(g.a,{type:"plus"})," Add field")),n.a.createElement(L,s,n.a.createElement(b.a,{type:"primary",htmlType:"submit"},"Submit"))))}}]),a}(l.Component),G=p.a.create()(W),U=t(44),J=t(1485),Z=t(700),K=p.a.Item,Q=J.a.MonthPicker,X=J.a.RangePicker,$=function(e){function a(){var e,t;Object(c.a)(this,a);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(n)))).handleSubmit=function(e){e.preventDefault(),t.props.form.validateFields(function(e,a){if(!e){var t=a["range-picker"],l=a["range-time-picker"],n=Object(U.a)({},a,{"date-picker":a["date-picker"].format("YYYY-MM-DD"),"date-time-picker":a["date-time-picker"].format("YYYY-MM-DD HH:mm:ss"),"month-picker":a["month-picker"].format("YYYY-MM"),"range-picker":[t[0].format("YYYY-MM-DD"),t[1].format("YYYY-MM-DD")],"range-time-picker":[l[0].format("YYYY-MM-DD HH:mm:ss"),l[1].format("YYYY-MM-DD HH:mm:ss")],"time-picker":a["time-picker"].format("HH:mm:ss")});console.log("Received values of form: ",n)}})},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator,a={labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}},t={rules:[{type:"object",required:!0,message:"Please select time!"}]},l={rules:[{type:"array",required:!0,message:"Please select time!"}]};return n.a.createElement(d.a,{className:"gx-card",title:"Time Related Controls"},n.a.createElement(p.a,{onSubmit:this.handleSubmit},n.a.createElement(K,Object.assign({},a,{label:"DatePicker"}),e("date-picker",t)(n.a.createElement(J.a,{className:"gx-mb-3 gx-w-100"}))),n.a.createElement(K,Object.assign({},a,{label:"DatePicker[showTime]"}),e("date-time-picker",t)(n.a.createElement(J.a,{className:"gx-mb-3 gx-w-100",showTime:!0,format:"YYYY-MM-DD HH:mm:ss"}))),n.a.createElement(K,Object.assign({},a,{label:"MonthPicker"}),e("month-picker",t)(n.a.createElement(Q,{className:"gx-mb-3 gx-w-100"}))),n.a.createElement(K,Object.assign({},a,{label:"RangePicker"}),e("range-picker",l)(n.a.createElement(X,{className:"gx-mb-3 gx-w-100"}))),n.a.createElement(K,Object.assign({},a,{label:"RangePicker[showTime]"}),e("range-time-picker",l)(n.a.createElement(X,{className:"gx-mb-3 gx-w-100",showTime:!0,format:"YYYY-MM-DD HH:mm:ss"}))),n.a.createElement(K,Object.assign({},a,{label:"TimePicker"}),e("time-picker",t)(n.a.createElement(Z.a,{className:"gx-mb-3 gx-w-100"}))),n.a.createElement(K,{wrapperCol:{xs:{span:24,offset:0},sm:{span:16,offset:8}}},n.a.createElement(b.a,{type:"primary",htmlType:"submit"},"Submit"))))}}]),a}(l.Component),_=p.a.create()($),ee=p.a.Item,ae=N.a.Option,te=function(e){function a(e){var t;Object(c.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).handleNumberChange=function(e){var a=parseInt(e.target.value||0,10);isNaN(a)||("value"in t.props||t.setState({number:a}),t.triggerChange({number:a}))},t.handleCurrencyChange=function(e){"value"in t.props||t.setState({currency:e}),t.triggerChange({currency:e})},t.triggerChange=function(e){var a=t.props.onChange;a&&a(Object.assign({},t.state,e))};var l=e.value||{};return t.state={number:l.number||0,currency:l.currency||"rmb"},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentWillReceiveProps",value:function(e){if("value"in e){var a=e.value;this.setState(a)}}},{key:"render",value:function(){var e=this.props.size,a=this.state;return n.a.createElement("span",null,n.a.createElement(h.a,{type:"text",size:e,value:a.number,onChange:this.handleNumberChange,style:{width:"63%",marginRight:"5%"}}),n.a.createElement(N.a,{value:a.currency,size:e,style:{width:"32%"},onChange:this.handleCurrencyChange},n.a.createElement(ae,{value:"rmb"},"RMB"),n.a.createElement(ae,{value:"dollar"},"Dollar")))}}]),a}(n.a.Component),le=function(e){function a(){var e,t;Object(c.a)(this,a);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(n)))).handleSubmit=function(e){e.preventDefault(),t.props.form.validateFields(function(e,a){e||console.log("Received values of form: ",a)})},t.checkPrice=function(e,a,t){a.number>0?t():t("Price must greater than zero!")},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return n.a.createElement(d.a,{className:"gx-card",title:"Customized Form Controls"},n.a.createElement(p.a,{layout:"inline",onSubmit:this.handleSubmit},n.a.createElement(ee,{label:"Price"},e("price",{initialValue:{number:0,currency:"rmb"},rules:[{validator:this.checkPrice}]})(n.a.createElement(te,null))),n.a.createElement(ee,null,n.a.createElement(b.a,{type:"primary",htmlType:"submit"},"Submit"))))}}]),a}(n.a.Component),ne=p.a.create()(le),re=p.a.Item,se=p.a.create({onFieldsChange:function(e,a){e.onChange(a)},mapPropsToFields:function(e){return{username:p.a.createFormField(Object(U.a)({},e.username,{value:e.username.value}))}},onValuesChange:function(e,a){console.log(a)}})(function(e){var a=e.form.getFieldDecorator;return n.a.createElement(p.a,{layout:"inline"},n.a.createElement(re,{label:"Username"},a("username",{rules:[{required:!0,message:"Username is required!"}]})(n.a.createElement(h.a,null))))}),ce=function(e){function a(){var e,t;Object(c.a)(this,a);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(n)))).state={fields:{username:{value:"benjycui"}}},t.handleFormChange=function(e){t.setState({fields:Object(U.a)({},t.state.fields,e)})},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.state.fields;return n.a.createElement(d.a,{className:"gx-card",title:"Store Form Data"},n.a.createElement(se,Object.assign({},e,{onChange:this.handleFormChange})),n.a.createElement("pre",{className:"language-bash"},JSON.stringify(e,null,2)))}}]),a}(l.Component),ie=t(1552),oe=p.a.Item,me=N.a.Option,ue={labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:18},md:{span:16},lg:{span:12}}},pe=function(){return n.a.createElement(d.a,{className:"gx-card",title:"Customized Validation"},n.a.createElement(p.a,null,n.a.createElement(oe,Object.assign({},ue,{label:"Fail",validateStatus:"error",help:"Should be combination of numbers & alphabets"}),n.a.createElement(h.a,{placeholder:"unavailable choice",id:"error"})),n.a.createElement(oe,Object.assign({},ue,{label:"Warning",validateStatus:"warning"}),n.a.createElement(h.a,{placeholder:"Warning",id:"warning-1"})),n.a.createElement(oe,Object.assign({},ue,{label:"Validating",hasFeedback:!0,validateStatus:"validating",help:"The information is being validated..."}),n.a.createElement(h.a,{placeholder:"I'm the content is being validated",id:"validating"})),n.a.createElement(oe,Object.assign({},ue,{label:"Success",hasFeedback:!0,validateStatus:"success"}),n.a.createElement(h.a,{placeholder:"I'm the content",id:"success"})),n.a.createElement(oe,Object.assign({},ue,{label:"Warning",hasFeedback:!0,validateStatus:"warning"}),n.a.createElement(h.a,{placeholder:"Warning",id:"warning"})),n.a.createElement(oe,Object.assign({},ue,{label:"Fail",hasFeedback:!0,validateStatus:"error",help:"Should be combination of numbers & alphabets"}),n.a.createElement(h.a,{placeholder:"unavailable choice",id:"error-1"})),n.a.createElement(oe,Object.assign({},ue,{label:"Success",hasFeedback:!0,validateStatus:"success"}),n.a.createElement(J.a,{style:{width:"100%"}})),n.a.createElement(oe,Object.assign({},ue,{label:"Warning",hasFeedback:!0,validateStatus:"warning"}),n.a.createElement(Z.a,{style:{width:"100%"}})),n.a.createElement(oe,Object.assign({},ue,{label:"Error",hasFeedback:!0,validateStatus:"error"}),n.a.createElement(N.a,{defaultValue:"1"},n.a.createElement(me,{value:"1"},"Option 1"),n.a.createElement(me,{value:"2"},"Option 2"),n.a.createElement(me,{value:"3"},"Option 3"))),n.a.createElement(oe,Object.assign({},ue,{label:"Validating",hasFeedback:!0,validateStatus:"validating",help:"The information is being validated..."}),n.a.createElement(Y.a,{defaultValue:["1"],options:[]})),n.a.createElement(oe,Object.assign({label:"inline"},ue),n.a.createElement("div",{className:"ant-row gx-form-row0"},n.a.createElement(s.a,{xs:24,sm:11},n.a.createElement(oe,{validateStatus:"error",help:"Please select the correct date"},n.a.createElement(J.a,null))),n.a.createElement(s.a,{xs:24,sm:2},n.a.createElement("span",{style:{display:"inline-block",width:"100%",textAlign:"center"}},"-")),n.a.createElement(s.a,{xs:24,sm:11},n.a.createElement(oe,null,n.a.createElement(J.a,null))))),n.a.createElement(oe,Object.assign({},ue,{label:"Success",hasFeedback:!0,validateStatus:"success"}),n.a.createElement(ie.a,{style:{width:"100%"}}))))},de=p.a.Item,he=N.a.Option,ge=function(e){function a(){var e,t;Object(c.a)(this,a);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(n)))).handleSubmit=function(e){e.preventDefault(),t.props.form.validateFields(function(e,a){e||console.log("Received values of form: ",a)})},t.handleSelectChange=function(e){console.log(e),t.props.form.setFieldsValue({note:"Hi, ".concat("male"===e?"man":"lady","!")})},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return n.a.createElement(d.a,{className:"gx-card",title:"Coordinated Controls"},n.a.createElement(p.a,{onSubmit:this.handleSubmit},n.a.createElement(de,{label:"Note",labelCol:{xs:24,sm:5},wrapperCol:{xs:24,sm:12}},e("note",{rules:[{required:!0,message:"Please input your note!"}]})(n.a.createElement(h.a,null))),n.a.createElement(de,{label:"Gender",labelCol:{xs:24,sm:5},wrapperCol:{xs:24,sm:12}},e("gender",{rules:[{required:!0,message:"Please select your gender!"}]})(n.a.createElement(N.a,{placeholder:"Select a option and change input text above",onChange:this.handleSelectChange},n.a.createElement(he,{value:"male"},"male"),n.a.createElement(he,{value:"female"},"female")))),n.a.createElement(de,{wrapperCol:{xs:24,sm:{span:12,offset:5}}},n.a.createElement(b.a,{type:"primary",htmlType:"submit"},"Submit"))))}}]),a}(l.Component),be=p.a.create()(ge),Ee=t(270),fe=p.a.Item,ve=function(e){function a(){var e;return Object(c.a)(this,a),(e=Object(o.a)(this,Object(m.a)(a).call(this))).handleFormLayoutChange=function(a){e.setState({formLayout:a.target.value})},e.state={formLayout:"horizontal"},e}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.state.formLayout,a="horizontal"===e?{labelCol:{xs:24,sm:6},wrapperCol:{xs:24,sm:14}}:null,t="horizontal"===e?{wrapperCol:{xs:24,sm:{span:14,offset:6}}}:null;return n.a.createElement(d.a,{className:"gx-card",title:"Form Layout"},n.a.createElement(p.a,{layout:e},n.a.createElement(fe,Object.assign({label:"Form Layout"},a),n.a.createElement(Ee.a.Group,{defaultValue:"horizontal",onChange:this.handleFormLayoutChange},n.a.createElement(Ee.a.Button,{value:"horizontal"},"Horizontal"),n.a.createElement(Ee.a.Button,{value:"vertical"},"Vertical"),n.a.createElement(Ee.a.Button,{value:"inline"},"Inline"))),n.a.createElement(fe,Object.assign({label:"Field A"},a),n.a.createElement(h.a,{placeholder:"input placeholder"})),n.a.createElement(fe,Object.assign({label:"Field B"},a),n.a.createElement(h.a,{placeholder:"input placeholder"})),n.a.createElement(fe,t,n.a.createElement(b.a,{type:"primary"},"Submit"))))}}]),a}(l.Component),ye=p.a.Item,Oe={labelCol:{xs:24,sm:6},wrapperCol:{xs:24,sm:14}},je={labelCol:{xs:24,sm:6},wrapperCol:{xs:24,sm:{span:14,offset:6}}},ke=function(e){function a(){var e,t;Object(c.a)(this,a);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(n)))).state={checkNick:!1},t.check=function(){t.props.form.validateFields(function(e){e||console.info("success")})},t.handleChange=function(e){t.setState({checkNick:e.target.checked},function(){t.props.form.validateFields(["nickname"],{force:!0})})},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return n.a.createElement(d.a,{className:"gx-card",title:"Dynamic Rules"},n.a.createElement(p.a,null,n.a.createElement(ye,Object.assign({},Oe,{label:"Name"}),e("username",{rules:[{required:!0,message:"Please input your name"}]})(n.a.createElement(h.a,{placeholder:"Please input your name"}))),n.a.createElement(ye,Object.assign({},Oe,{label:"Nickname"}),e("nickname-1",{rules:[{required:this.state.checkNick,message:"Please input your nickname"}]})(n.a.createElement(h.a,{placeholder:"Please input your nickname"}))),n.a.createElement(ye,je,n.a.createElement(O.a,{value:this.state.checkNick,onChange:this.handleChange},"Nickname is required")),n.a.createElement(ye,je,n.a.createElement(b.a,{type:"primary",onClick:this.check},"Check"))))}}]),a}(l.Component),we=p.a.create()(ke),Ce=t(1509),xe=t(1788),Se=t(1600),Fe=t(1826),Ne=(t(1599),p.a.Item),Pe=N.a.Option,De=Ee.a.Button,Ye=Ee.a.Group,Me=function(e){function a(){var e,t;Object(c.a)(this,a);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(n)))).handleSubmit=function(e){e.preventDefault(),t.props.form.validateFields(function(e,a){e||console.log("Received values of form: ",a)})},t.normFile=function(e){return console.log("Upload event:",e),Array.isArray(e)?e:e&&e.fileList},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator,a={labelCol:{xs:24,sm:6},wrapperCol:{xs:24,sm:14}};return n.a.createElement(d.a,{className:"gx-card",title:"Other Form Controls"},n.a.createElement(p.a,{onSubmit:this.handleSubmit},n.a.createElement(Ne,Object.assign({},a,{label:"Plain Text"}),n.a.createElement("span",{className:"ant-form-text"},"China")),n.a.createElement(Ne,Object.assign({},a,{label:"Select",hasFeedback:!0}),e("select",{rules:[{required:!0,message:"Please select your country!"}]})(n.a.createElement(N.a,{placeholder:"Please select a country"},n.a.createElement(Pe,{value:"china"},"China"),n.a.createElement(Pe,{value:"use"},"U.S.A")))),n.a.createElement(Ne,Object.assign({},a,{label:"Select[multiple]"}),e("select-multiple",{rules:[{required:!0,message:"Please select your favourite colors!",type:"array"}]})(n.a.createElement(N.a,{mode:"multiple",placeholder:"Please select favourite colors"},n.a.createElement(Pe,{value:"red"},"Red"),n.a.createElement(Pe,{value:"green"},"Green"),n.a.createElement(Pe,{value:"blue"},"Blue")))),n.a.createElement(Ne,Object.assign({},a,{label:"InputNumber"}),e("input-number",{initialValue:3})(n.a.createElement(ie.a,{min:1,max:10})),n.a.createElement("span",{className:"ant-form-text"}," machines")),n.a.createElement(Ne,Object.assign({},a,{label:"Switch"}),e("switch",{valuePropName:"checked"})(n.a.createElement(Ce.a,null))),n.a.createElement(Ne,Object.assign({},a,{label:"Slider"}),e("slider")(n.a.createElement(xe.a,{marks:{0:"A",20:"B",40:"C",60:"D",80:"E",100:"F"}}))),n.a.createElement(Ne,Object.assign({},a,{label:"Radio.Group"}),e("radio-group")(n.a.createElement(Ye,null,n.a.createElement(Ee.a,{value:"a"},"item 1"),n.a.createElement(Ee.a,{value:"b"},"item 2"),n.a.createElement(Ee.a,{value:"c"},"item 3")))),n.a.createElement(Ne,Object.assign({},a,{label:"Radio.Button"}),e("radio-button")(n.a.createElement(Ye,null,n.a.createElement(De,{value:"a"},"item 1"),n.a.createElement(De,{value:"b"},"item 2"),n.a.createElement(De,{value:"c"},"item 3")))),n.a.createElement(Ne,Object.assign({},a,{label:"Rate"}),e("rate",{initialValue:3.5})(n.a.createElement(Se.a,null))),n.a.createElement(Ne,Object.assign({},a,{label:"Upload",extra:"longgggggggggggggggggggggggggggggggggg"}),e("upload",{valuePropName:"fileList",getValueFromEvent:this.normFile})(n.a.createElement(Fe.a,{name:"logo",action:"/upload.do",listType:"picture"},n.a.createElement(b.a,null,n.a.createElement(g.a,{type:"upload"})," Click to upload")))),n.a.createElement(Ne,Object.assign({},a,{label:"Dragger"}),n.a.createElement("div",{className:"dropbox"},e("dragger",{valuePropName:"fileList",getValueFromEvent:this.normFile})(n.a.createElement(Fe.a.Dragger,{name:"files",action:"/upload.do"},n.a.createElement("p",{className:"ant-upload-drag-icon"},n.a.createElement(g.a,{type:"inbox"})),n.a.createElement("p",{className:"ant-upload-text"},"Click or drag file to this area to upload"),n.a.createElement("p",{className:"ant-upload-hint"},"Support for a single or bulk upload."))))),n.a.createElement(Ne,{wrapperCol:{xs:24,sm:{span:14,offset:6}}},n.a.createElement(b.a,{type:"primary",htmlType:"submit"},"Submit"))))}}]),a}(l.Component),Re=p.a.create()(Me);a.default=function(){return n.a.createElement(r.a,null,n.a.createElement(s.a,{span:24},n.a.createElement(v,null)),n.a.createElement(s.a,{span:24},n.a.createElement(F,null)),n.a.createElement(s.a,{span:24},n.a.createElement(V,null)),n.a.createElement(s.a,{span:24},n.a.createElement(H,null)),n.a.createElement(s.a,{span:24},n.a.createElement(G,null)),n.a.createElement(s.a,{span:24},n.a.createElement(_,null)),n.a.createElement(s.a,{span:24},n.a.createElement(ne,null)),n.a.createElement(s.a,{span:24},n.a.createElement(ce,null)),n.a.createElement(s.a,{span:24},n.a.createElement(pe,null)),n.a.createElement(s.a,{span:24},n.a.createElement(be,null)),n.a.createElement(s.a,{span:24},n.a.createElement(ve,null)),n.a.createElement(s.a,{span:24},n.a.createElement(we,null)),n.a.createElement(s.a,{span:24},n.a.createElement(Re,null)))}}}]);
//# sourceMappingURL=9.e7d00e82.chunk.js.map