(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{1851:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(1476),l=n(15),i=n(16),r=n(19),d=n(17),m=n(55),h=n(18),s=n(1501),u=window.google,p=Object(s.withGoogleMap)(function(e){return o.a.createElement(s.GoogleMap,{ref:e.onMapMounted,onZoomChanged:e.onZoomChanged,defaultCenter:e.center,zoom:e.zoom},o.a.createElement(s.InfoWindow,{defaultPosition:e.center},o.a.createElement("div",{className:"gx-map-content"},e.content)))}),g=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(r.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={zoom:15,content:"Change the zoom level"},n.handleMapMounted=n.handleMapMounted.bind(Object(m.a)(n)),n.handleZoomChanged=n.handleZoomChanged.bind(Object(m.a)(n)),n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"handleMapMounted",value:function(e){this._map=e}},{key:"handleZoomChanged",value:function(){var e=this._map.getZoom();e!==this.state.zoom&&this.setState({zoom:e,content:"Zoom: ".concat(e)})}},{key:"render",value:function(){return o.a.createElement(p,{loadingElement:o.a.createElement("div",{style:{height:"100%"}}),containerElement:o.a.createElement("div",{style:{height:"550px"}}),mapElement:o.a.createElement("div",{style:{height:"100%"}}),onMapMounted:this.handleMapMounted,onZoomChanged:this.handleZoomChanged,center:new u.maps.LatLng(47.646935,-122.303763),zoom:this.state.zoom,content:this.state.content})}}]),t}(a.Component),f=n(3);t.default=function(){return o.a.createElement(c.a,{className:"gx-card",title:o.a.createElement(f.a,{id:"sidebar.map.eventListener"})},o.a.createElement(g,null))}}}]);
//# sourceMappingURL=133.3176e709.chunk.js.map