(this["webpackJsonpweb-radials"]=this["webpackJsonpweb-radials"]||[]).push([[0],{22:function(t,e,n){},29:function(t,e,n){"use strict";n.r(e);var i,o,a,c,s,l,r,x,h,d,u,y,b,m,v,j=n(0),C=n.n(j),p=n(13),f=n.n(p),O=(n(22),n(2)),V=n(3),g=n(9),w=n(5),P=n(17),S=n(1),z=V.a.div(i||(i=Object(O.a)(["\n  height: ","px;\n  line-height: ","px;\n  width: ","px;\n  text-align: center;\n  background-color: #0099ff;\n  color: #fff;\n  border-radius: 50%;\n  cursor: grab;\n  &:focus {\n    outline: none;\n  }\n"])),22,22,22),k=function(t,e){return Object(S.jsx)(z,Object(w.a)(Object(w.a)({},t),{},{children:e.valueNow}))},M=V.a.div(o||(o=Object(O.a)(["\n  height: ","px;\n  border-radius: 999px;\n  background: ",";\n  border: 1px solid #606060;\n"])),20,(function(t){return 0===t.index?"#005bd9":"#1e217d"})),R=function(t,e){return Object(S.jsx)(M,Object(w.a)(Object(w.a)({},t),{},{index:e.index}))},F=Object(V.a)(P.a)(a||(a=Object(O.a)(["\n  width: ","px;\n\n  @media (max-width: 768px) {\n    width: ","px;\n  }\n"])),200,140),N=V.a.div(c||(c=Object(O.a)(["\n  display: flex;\n  padding: 5px 0px;\n  "," {\n    font-size: ","px;\n  }\n"])),z,(function(t){return t.fontSize})),E=V.a.span(s||(s=Object(O.a)(["\n  text-align: center;\n  line-height: ","px;\n  padding-left: 10px;\n  font-size: 14px;\n\n  @media (max-width: 768px) {\n    font-size: 12px;\n  }\n"])),20),T=function(t){var e=t.value,n=t.label,i=t.onChange,o=t.step,a=t.min,c=t.max,s=t.smallFont,l=void 0!==s&&s,r=Object(j.useCallback)((function(t){null===i||void 0===i||i(t)}),[i]);return Object(S.jsxs)(N,{fontSize:l?9:16,children:[Object(S.jsx)(F,{renderTrack:R,renderThumb:k,value:[e],onChange:r,step:o,min:a,max:c}),Object(S.jsx)(E,{children:n})]})},I=n(7),W=n(8),A=n(4),B=n.n(A),L=function(){function t(e,n,i,o){Object(I.a)(this,t),this.a1=void 0,this.c1=void 0,this.c2=void 0,this.a2=void 0,this.a1=e,this.c1=n,this.c2=i,this.a2=o}return Object(W.a)(t,[{key:"render",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:new B.a(0,0),i=this.a1.rotate(e,void 0,!0).add(n.x,n.y),o=this.c1.rotate(e,void 0,!0).add(n.x,n.y),a=this.c2.rotate(e,void 0,!0).add(n.x,n.y),c=this.a2.rotate(e,void 0,!0).add(n.x,n.y);t.beginPath(),t.moveTo(i.x,i.y),t.bezierCurveTo(o.x,o.y,a.x,a.y,c.x,c.y),t.stroke()}}]),t}(),H=function(t,e){return Math.max(Math.min(t,e),-e)},q=function(){function t(){Object(I.a)(this,t),this.maxCurveSize=400,this.maxControlPointSize=Math.round(1.4*this.maxCurveSize),this.maxCPVelocity=3,this.curveWidth=4,this.numRadials=10,this.skipEveryNthRadial=0,this.numberOfRadialsToSkip=1,this.windowSizeProportion=.7,this.c1x=void 0,this.c1y=void 0,this.c2x=void 0,this.c2y=void 0,this.c1xVelocity=void 0,this.c1yVelocity=void 0,this.c2xVelocity=void 0,this.c2yVelocity=void 0,this.spin=0,this.spinVelocity=.1,this.renderControls=void 0,this.setMaxCurveSize(400),this.c1x=90,this.c1y=130,this.c2x=150,this.c2y=-20,this.c1xVelocity=1,this.c1yVelocity=1.2,this.c2xVelocity=1.4,this.c2yVelocity=1.6,this.renderControls=function(){}}return Object(W.a)(t,[{key:"setNumRadials",value:function(t){this.numRadials=t}},{key:"setMaxCurveSize",value:function(t){this.maxCurveSize=t,this.maxControlPointSize=Math.round(1.4*this.maxCurveSize)}},{key:"setC1x",value:function(t){this.c1x=H(t,this.maxControlPointSize)}},{key:"setC1y",value:function(t){this.c1y=H(t,this.maxControlPointSize)}},{key:"setC2x",value:function(t){this.c2x=H(t,this.maxControlPointSize)}},{key:"setC2y",value:function(t){this.c2y=H(t,this.maxControlPointSize)}},{key:"setC1xVelocity",value:function(t){this.c1xVelocity=H(this.c1xVelocity>=0?t:-t,this.maxCPVelocity)}},{key:"setC1yVelocity",value:function(t){this.c1yVelocity=H(this.c1yVelocity>=0?t:-t,this.maxCPVelocity)}},{key:"setC2xVelocity",value:function(t){this.c2xVelocity=H(this.c2xVelocity>=0?t:-t,this.maxCPVelocity)}},{key:"setC2yVelocity",value:function(t){this.c2yVelocity=H(this.c2yVelocity>=0?t:-t,this.maxCPVelocity)}},{key:"getCurve",value:function(){return new L(new B.a(0,0),new B.a(this.c1x,this.c1y),new B.a(this.c2x,this.c2y),new B.a(this.maxCurveSize,0))}}]),t}(),J=V.a.div(l||(l=Object(O.a)(["\n  position: absolute;\n  color: white;\n  padding-left: 10px;\n  padding-right: 10px;\n  height: 100vh;\n  background: linear-gradient(\n    0.25turn,\n    rgba(0, 0, 0, ","),\n    92%,\n    rgba(0, 0, 0, 0)\n  );\n\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n\n  @media (max-width: 768px) {\n    padding-left: 5px;\n    padding-right: 5px;\n  }\n"])),(function(t){return t.showBackground?.5:0})),D=V.a.div(r||(r=Object(O.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),Z=V.a.div(x||(x=Object(O.a)([""]))),G=V.a.div(h||(h=Object(O.a)(["\n  background-color: #555555;\n  justify-self: center;\n  align-self: center;\n  height: 1px;\n  width: 95%;\n  margin: 8px 0px;\n\n  @media (max-width: 768px) {\n    margin: 4px 0px;\n  }\n"]))),K=V.a.button(d||(d=Object(O.a)(["\n  background-color: #0099ff;\n  border-radius: 5px;\n  color: white;\n  font-size: 20px;\n  margin-top: 10px;\n"]))),Q=V.a.span(u||(u=Object(O.a)(["\n  color: white;\n  font-size: 16px;\n  padding: 16px 0px 4px;\n  font-weight: bold;\n\n  @media (max-width: 768px) {\n    font-size: 14px;\n    padding: 8px 0px 2px;\n  }\n"]))),U=V.a.a(y||(y=Object(O.a)(["\n color: white;\n &:visited { color: whitesmoke; }\n &:hover { color: #06e; }\u200b\n"]))),X=V.a.div(b||(b=Object(O.a)(["\n  font-size: 14px;\n  padding-bottom: 10px;\n"]))),Y=function(t){var e=t.state,n=function(){var t=Object(j.useState)({}),e=Object(g.a)(t,2)[1];return Object(j.useCallback)((function(){return e({})}),[])}();Object(j.useEffect)((function(){e.renderControls=n}),[n,e]);var i=Object(j.useState)(!0),o=Object(g.a)(i,2),a=o[0],c=o[1],s=Object(j.useState)(1),l=Object(g.a)(s,2),r=l[0],x=l[1];return Object(S.jsxs)(J,{showBackground:a,children:[Object(S.jsxs)("div",{children:[Object(S.jsx)(K,{onClick:function(){return c((function(t){return!t}))},children:a?"Hide Controls":"Show Controls"}),a&&Object(S.jsx)(Z,{children:Object(S.jsxs)(D,{children:[Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(Q,{children:"Control Points"}),Object(S.jsx)(T,{value:e.c1x,min:-e.maxControlPointSize,max:e.maxControlPointSize,onChange:e.setC1x.bind(e),label:"CP 1: x Position",smallFont:!0}),Object(S.jsx)(T,{value:e.c1y,min:-e.maxControlPointSize,max:e.maxControlPointSize,onChange:e.setC1y.bind(e),label:"CP 1: y Position",smallFont:!0}),Object(S.jsx)(T,{value:e.c2x,min:-e.maxControlPointSize,max:e.maxControlPointSize,onChange:e.setC2x.bind(e),label:"CP 2: x Position",smallFont:!0}),Object(S.jsx)(T,{value:e.c2y,min:-e.maxControlPointSize,max:e.maxControlPointSize,onChange:e.setC2y.bind(e),label:"CP 2: y Position",smallFont:!0})]}),Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(Q,{children:"Control Point Velocities"}),Object(S.jsx)(T,{value:r,min:0,max:e.maxCPVelocity,onChange:function(t){e.setC1xVelocity(t),e.setC1yVelocity(t),e.setC2xVelocity(t),e.setC2yVelocity(t),x(t)},label:"Set All CP Velocities",step:.01,smallFont:!0}),Object(S.jsx)(G,{}),Object(S.jsx)(T,{value:Math.abs(e.c1xVelocity),min:0,max:e.maxCPVelocity,onChange:e.setC1xVelocity.bind(e),label:"CP 1: x Velocity",step:.01,smallFont:!0}),Object(S.jsx)(T,{value:Math.abs(e.c1yVelocity),min:0,max:e.maxCPVelocity,onChange:e.setC1yVelocity.bind(e),label:"CP 1: y Velocity",step:.01,smallFont:!0}),Object(S.jsx)(T,{value:Math.abs(e.c2xVelocity),min:0,max:e.maxCPVelocity,onChange:e.setC2xVelocity.bind(e),label:"CP 2: x Velocity",step:.01,smallFont:!0}),Object(S.jsx)(T,{value:Math.abs(e.c2yVelocity),min:0,max:e.maxCPVelocity,onChange:e.setC2yVelocity.bind(e),label:"CP 2: y Velocity",step:.01,smallFont:!0})]}),Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(Q,{children:"Radial Properties"}),Object(S.jsx)(T,{value:e.numRadials,min:1,max:75,onChange:e.setNumRadials.bind(e),label:"Num of Radials"}),Object(S.jsx)(T,{value:e.spinVelocity,min:-1,max:1,step:.1,onChange:function(t){return e.spinVelocity=t},smallFont:!0,label:"Spin Velocity"}),Object(S.jsx)(T,{value:e.skipEveryNthRadial,min:0,max:10,onChange:function(t){return e.skipEveryNthRadial=t},label:"Skip every Nth one"}),Object(S.jsx)(T,{value:e.numberOfRadialsToSkip,min:1,max:Math.max(e.skipEveryNthRadial-1,1),onChange:function(t){return e.numberOfRadialsToSkip=t},label:"Num Radials to Skip"})]})]})})]}),a&&Object(S.jsxs)(X,{children:["\xa9",Object(S.jsx)(U,{href:"http://www.zackmfleischman.com",children:"Zack M Fleischman"})]})]})},$=function(t,e,n,i){tt(n,i);var o=new B.a(window.innerWidth/2,window.innerHeight/2);e.clearRect(0,0,t.width,t.height),e.strokeStyle="white",e.lineWidth=n.curveWidth,_(e,n,o);for(var a=n.getCurve(),c=0;c<n.numRadials;++c)if(!(n.skipEveryNthRadial>0&&c%(n.skipEveryNthRadial+1)<=n.numberOfRadialsToSkip-1)){var s=2*Math.PI/n.numRadials*c+n.spin;a.render(e,s,o)}},_=function(t,e,n){t.moveTo(n.x+e.maxCurveSize,n.y),t.arc(n.x,n.y,e.maxCurveSize,0,2*Math.PI),t.stroke()},tt=function(t,e){e&&(t.c1x>=t.maxControlPointSize&&(t.c1xVelocity=-Math.abs(t.c1xVelocity)),t.c1x<=-t.maxControlPointSize&&(t.c1xVelocity=Math.abs(t.c1xVelocity)),t.c1y>=t.maxControlPointSize&&(t.c1yVelocity=-Math.abs(t.c1yVelocity)),t.c1y<=-t.maxControlPointSize&&(t.c1yVelocity=Math.abs(t.c1yVelocity)),t.c2x>=t.maxControlPointSize&&(t.c2xVelocity=-Math.abs(t.c2xVelocity)),t.c2x<=-t.maxControlPointSize&&(t.c2xVelocity=Math.abs(t.c2xVelocity)),t.c2y>=t.maxControlPointSize&&(t.c2yVelocity=-Math.abs(t.c2yVelocity)),t.c2y<=-t.maxControlPointSize&&(t.c2yVelocity=Math.abs(t.c2yVelocity)),t.setC1x(t.c1x+t.c1xVelocity*(e/10)),t.setC1y(t.c1y+t.c1yVelocity*(e/10)),t.setC2x(t.c2x+t.c2xVelocity*(e/10)),t.setC2y(t.c2y+t.c2yVelocity*(e/10)),t.spin=t.spin+t.spinVelocity*e/500%(2*Math.PI),t.renderControls())},et=V.a.canvas(m||(m=Object(O.a)(["\n  position: absolute;\n  height: 100vh;\n  width: 100vw;\n  background-color: #222222;\n  overflow-y: none;\n"]))),nt=function(t){var e=t.state,n=function(t,e){var n=Object(j.useRef)(null),i=Object(j.useCallback)((function(){var t=n.current;if(t){t.width=window.innerWidth,t.height=window.innerHeight;var i=Math.min(t.width,t.height)*e.windowSizeProportion/2;e.setMaxCurveSize(i)}}),[e]);return Object(j.useEffect)((function(){var o,a;return window.addEventListener("resize",i,!1),i(),requestAnimationFrame((function i(c){var s=n.current,l=null===s||void 0===s?void 0:s.getContext("2d");void 0===a&&(a=c);var r=c-a;a=c,s&&l&&t(s,l,e,r),o=requestAnimationFrame(i)})),function(){cancelAnimationFrame(o),window.removeEventListener("resize",i)}}),[t,e,i]),n}($,e);return Object(S.jsx)(et,{id:"radials-canvas",ref:n})},it=V.a.div(v||(v=Object(O.a)(["\n  position: relative;\n"])));var ot=function(){var t=Object(j.useRef)(new q);return Object(S.jsxs)(it,{children:[Object(S.jsx)(nt,{state:t.current}),Object(S.jsx)(Y,{state:t.current})]})},at=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,30)).then((function(e){var n=e.getCLS,i=e.getFID,o=e.getFCP,a=e.getLCP,c=e.getTTFB;n(t),i(t),o(t),a(t),c(t)}))};f.a.render(Object(S.jsx)(C.a.StrictMode,{children:Object(S.jsx)(ot,{})}),document.getElementById("root")),at()}},[[29,1,2]]]);
//# sourceMappingURL=main.b7447c3e.chunk.js.map