(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{1493:function(e,t,r){"undefined"!==typeof window?(window.React=r(0),window.ReactDOM=r(10),window.createReactClass=r(314),r(1495),e.exports=window.AmCharts):e.exports={}},1495:function(e,t){!function(){function e(e){return{}.toString.call(e)}function t(e,t){return{}.hasOwnProperty.call(e,t)}function r(n){switch(e(n)){case"[object Array]":return function(e){for(var t=e.length,n=new Array(t),a=0;a<t;++a)n[a]=r(e[a]);return n}(n);case"[object Object]":return function(e){var n={};for(var a in e)t(e,a)&&(n[a]=r(e[a]));return n}(n);case"[object Date]":return new Date(n.getTime());default:return n}}function n(e){return e!==e}function a(e,t,r){if(t!==r){null==t&&(t=[]),null==r&&(r=[]);for(var n=t.length,a=r.length,o=0;o<n;++o){for(var i=t[o],c=!1,s=0;s<a;++s){var l=r[s];if(i.event===l.event&&i.method===l.method){c=!0;break}}c||e.removeListener(e,i.event,i.method)}}}function o(a,c,s,l){var u=!1;if(s!==l&&t(a,c)){var h=e(s);if(h===e(l))switch(h){case"[object Array]":"groupToPeriods"===c?(a[c]=r(l),u=!0):function(e,t,n){var a=!1;if(t!==n){var i=t.length,c=n.length;i!==c&&(e.length=c,a=!0);for(var s=0;s<c;++s)s<i?o(e,s,t[s],n[s])&&(a=!0):(e[s]=r(n[s]),a=!0)}return a}(a[c],s,l)&&(u=!0);break;case"[object Object]":i(a[c],s,l)&&(u=!0);break;case"[object Date]":s.getTime()!==l.getTime()&&(a[c]=r(l),u=!0);break;case"[object Number]":(function(e,t){return e===t||n(e)&&n(t)})(s,l)||(a[c]=r(l),u=!0);break;default:a[c]=r(l),u=!0}else a[c]=r(l),u=!0}return u}function i(e,n,i){var c=!1;if(n!==i){for(var s in i)t(i,s)&&(t(n,s)?("listeners"===s&&a(e,n[s],i[s]),o(e,s,n[s],i[s])&&(c=!0)):(e[s]=r(i[s]),c=!0));for(var s in n)t(n,s)&&!t(i,s)&&("listeners"===s&&a(e,n[s],[]),delete e[s],c=!0)}return c}var c=0;AmCharts.React=createReactClass({getInitialState:function(){return{id:"__AmCharts_React_"+ ++c+"__",chart:null}},componentDidMount:function(){var e=r(this.props.options),t=AmCharts.makeChart(this.state.id,e,this.props.delay);this.setState({chart:t})},componentDidUpdate:function(e){this.state.chart&&(i(this.state.chart,e.options,this.props.options)&&this.state.chart.validateNow(!0))},componentWillUnmount:function(){this.state.chart&&this.state.chart.clear()},render:function(){return React.createElement("div",{id:this.state.id,className:this.props.className,style:this.props.style})}})}()},1855:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(1476),i=r(1493),c=r.n(i),s=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(c.a.React,{style:{width:"100%",height:"500px"},options:{type:"map",theme:"none",panEventsEnabled:!0,dataProvider:{map:"usaLow",getAreasFromMap:!0},areasSettings:{autoZoom:!1,color:"#CDCDCD",colorSolid:"#5EB7DE",selectedColor:"#5EB7DE",outlineColor:"#666666",rollOverColor:"#88CAE7",rollOverOutlineColor:"#FFFFFF",selectable:!0},listeners:[{event:"clickMapObject"}],export:{enabled:!0}}}))},l=r(3);t.default=function(){return a.a.createElement(o.a,{className:"gx-card",title:a.a.createElement(l.a,{id:"sidebar.map.multiple.areas"})},a.a.createElement(s,null))}}}]);
//# sourceMappingURL=51.8339b89e.chunk.js.map