(this["webpackJsonpweb-radials"]=this["webpackJsonpweb-radials"]||[]).push([[0],{22:function(t,e,i){},29:function(t,e,i){"use strict";i.r(e);var n,o,a,c,l,s,r,x,h,d,u,y,b,m=i(0),v=i.n(m),C=i(13),j=i.n(C),f=(i(22),i(2)),p=i(3),O=i(9),g=i(5),V=i(17),P=i(1),w=p.a.div(n||(n=Object(f.a)(["\n  height: ","px;\n  line-height: ","px;\n  width: ","px;\n  text-align: center;\n  background-color: #0099ff;\n  color: #fff;\n  border-radius: 50%;\n  cursor: grab;\n  &:focus {\n    outline: none;\n  }\n"])),22,22,22),S=function(t,e){return Object(P.jsx)(w,Object(g.a)(Object(g.a)({},t),{},{children:e.valueNow}))},z=p.a.div(o||(o=Object(f.a)(["\n  height: ","px;\n  border-radius: 999px;\n  background: ",";\n  border: 1px solid #606060;\n"])),20,(function(t){return 0===t.index?"#005bd9":"#1e217d"})),k=function(t,e){return Object(P.jsx)(z,Object(g.a)(Object(g.a)({},t),{},{index:e.index}))},M=Object(p.a)(V.a)(a||(a=Object(f.a)(["\n  width: ","px;\n\n  @media (max-width: 768px) {\n    width: ","px;\n  }\n"])),200,140),R=p.a.div(c||(c=Object(f.a)(["\n  display: flex;\n  padding: 5px 0px;\n  "," {\n    font-size: ","px;\n  }\n"])),w,(function(t){return t.fontSize})),F=p.a.span(l||(l=Object(f.a)(["\n  text-align: center;\n  line-height: ","px;\n  padding-left: 10px;\n  font-size: 14px;\n\n  @media (max-width: 768px) {\n    font-size: 12px;\n  }\n"])),20),N=function(t){var e=t.value,i=t.label,n=t.onChange,o=t.step,a=t.min,c=t.max,l=t.smallFont,s=void 0!==l&&l,r=Object(m.useCallback)((function(t){null===n||void 0===n||n(t)}),[n]);return Object(P.jsxs)(R,{fontSize:s?9:16,children:[Object(P.jsx)(M,{renderTrack:k,renderThumb:S,value:[e],onChange:r,step:o,min:a,max:c}),Object(P.jsx)(F,{children:i})]})},E=i(7),T=i(8),W=i(4),A=i.n(W),B=function(){function t(e,i,n,o){Object(E.a)(this,t),this.a1=void 0,this.c1=void 0,this.c2=void 0,this.a2=void 0,this.a1=e,this.c1=i,this.c2=n,this.a2=o}return Object(T.a)(t,[{key:"render",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:new A.a(0,0),n=this.a1.rotate(e,void 0,!0).add(i.x,i.y),o=this.c1.rotate(e,void 0,!0).add(i.x,i.y),a=this.c2.rotate(e,void 0,!0).add(i.x,i.y),c=this.a2.rotate(e,void 0,!0).add(i.x,i.y);t.beginPath(),t.moveTo(n.x,n.y),t.bezierCurveTo(o.x,o.y,a.x,a.y,c.x,c.y),t.stroke()}}]),t}(),I=function(t,e){return Math.max(Math.min(t,e),-e)},L=function(){function t(){Object(E.a)(this,t),this.maxCurveSize=400,this.maxControlPointSize=Math.round(6*this.maxCurveSize/5),this.maxCPVelocity=3,this.curveWidth=4,this.numRadials=10,this.windowSizeProportion=.8,this.c1x=void 0,this.c1y=void 0,this.c2x=void 0,this.c2y=void 0,this.c1xVelocity=void 0,this.c1yVelocity=void 0,this.c2xVelocity=void 0,this.c2yVelocity=void 0,this.skipEveryNthRadial=0,this.numberOfRadialsToSkip=1,this.renderControls=void 0,this.setMaxCurveSize(400),this.c1x=90,this.c1y=130,this.c2x=150,this.c2y=-20,this.c1xVelocity=.4,this.c1yVelocity=.5,this.c2xVelocity=.6,this.c2yVelocity=.7,this.renderControls=function(){}}return Object(T.a)(t,[{key:"setNumRadials",value:function(t){this.numRadials=t}},{key:"setMaxCurveSize",value:function(t){this.maxCurveSize=t,this.maxControlPointSize=Math.round(6*this.maxCurveSize/5)}},{key:"setC1x",value:function(t){this.c1x=I(t,this.maxControlPointSize)}},{key:"setC1y",value:function(t){this.c1y=I(t,this.maxControlPointSize)}},{key:"setC2x",value:function(t){this.c2x=I(t,this.maxControlPointSize)}},{key:"setC2y",value:function(t){this.c2y=I(t,this.maxControlPointSize)}},{key:"setC1xVelocity",value:function(t){this.c1xVelocity=I(this.c1xVelocity>=0?t:-t,this.maxCPVelocity)}},{key:"setC1yVelocity",value:function(t){this.c1yVelocity=I(this.c1yVelocity>=0?t:-t,this.maxCPVelocity)}},{key:"setC2xVelocity",value:function(t){this.c2xVelocity=I(this.c2xVelocity>=0?t:-t,this.maxCPVelocity)}},{key:"setC2yVelocity",value:function(t){this.c2yVelocity=I(this.c2yVelocity>=0?t:-t,this.maxCPVelocity)}},{key:"getCurve",value:function(){return new B(new A.a(0,0),new A.a(this.c1x,this.c1y),new A.a(this.c2x,this.c2y),new A.a(this.maxCurveSize,0))}}]),t}(),H=p.a.div(s||(s=Object(f.a)(["\n  position: absolute;\n  color: white;\n  padding-left: 10px;\n  padding-right: 10px;\n  height: 100vh;\n  background: linear-gradient(\n    0.25turn,\n    rgba(0, 0, 0, ","),\n    92%,\n    rgba(0, 0, 0, 0)\n  );\n\n  @media (max-width: 768px) {\n    padding-left: 5px;\n    padding-right: 5px;\n  }\n"])),(function(t){return t.showBackground?.5:0})),q=p.a.div(r||(r=Object(f.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),J=p.a.div(x||(x=Object(f.a)([""]))),D=p.a.div(h||(h=Object(f.a)(["\n  background-color: grey;\n  height: 1px;\n  width: 100%;\n  margin: 8px 0px;\n\n  @media (max-width: 768px) {\n    margin: 4px 0px;\n  }\n"]))),G=p.a.button(d||(d=Object(f.a)(["\n  background-color: #0099ff;\n  border-radius: 5px;\n  margin-left: 5px;\n  color: white;\n  font-size: 20px;\n"]))),K=p.a.span(u||(u=Object(f.a)(["\n  color: white;\n  font-size: 16px;\n  padding: 16px 0px 4px;\n  font-weight: bold;\n\n  @media (max-width: 768px) {\n    font-size: 14px;\n    padding: 8px 0px 2px;\n  }\n"]))),Q=function(t){var e=t.state,i=function(){var t=Object(m.useState)({}),e=Object(O.a)(t,2)[1];return Object(m.useCallback)((function(){return e({})}),[])}();Object(m.useEffect)((function(){e.renderControls=i}),[i,e]);var n=Object(m.useState)(!0),o=Object(O.a)(n,2),a=o[0],c=o[1],l=Object(m.useState)(.5),s=Object(O.a)(l,2),r=s[0],x=s[1];return Object(P.jsxs)(H,{showBackground:a,children:[Object(P.jsx)("h3",{children:Object(P.jsx)(G,{onClick:function(){return c((function(t){return!t}))},children:a?"Hide Controls":"Show Controls"})}),a&&Object(P.jsx)(J,{children:Object(P.jsxs)(q,{children:[Object(P.jsx)(N,{value:e.numRadials,min:1,max:75,onChange:e.setNumRadials.bind(e),label:"Num of Radials"}),Object(P.jsx)(N,{value:e.skipEveryNthRadial,min:0,max:10,onChange:function(t){return e.skipEveryNthRadial=t},label:"Skip the Nth Radial"}),Object(P.jsx)(N,{value:e.numberOfRadialsToSkip,min:1,max:Math.max(e.skipEveryNthRadial-1,1),onChange:function(t){return e.numberOfRadialsToSkip=t},label:"Num Radials to Skip"}),Object(P.jsx)(K,{children:"Control Points"}),Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(N,{value:e.c1x,min:-e.maxControlPointSize,max:e.maxControlPointSize,onChange:e.setC1x.bind(e),label:"CP 1: x Position",smallFont:!0}),Object(P.jsx)(N,{value:e.c1y,min:-e.maxControlPointSize,max:e.maxControlPointSize,onChange:e.setC1y.bind(e),label:"CP 1: y Position",smallFont:!0}),Object(P.jsx)(N,{value:e.c2x,min:-e.maxControlPointSize,max:e.maxControlPointSize,onChange:e.setC2x.bind(e),label:"CP 2: x Position",smallFont:!0}),Object(P.jsx)(N,{value:e.c2y,min:-e.maxControlPointSize,max:e.maxControlPointSize,onChange:e.setC2y.bind(e),label:"CP 2: y Position",smallFont:!0})]}),Object(P.jsx)(K,{children:"Control Point Velocities"}),Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(N,{value:r,min:0,max:e.maxCPVelocity,onChange:function(t){e.setC1xVelocity(t),e.setC1yVelocity(t),e.setC2xVelocity(t),e.setC2yVelocity(t),x(t)},label:"Set All CP Velocities",step:.01,smallFont:!0}),Object(P.jsx)(D,{}),Object(P.jsx)(N,{value:Math.abs(e.c1xVelocity),min:0,max:e.maxCPVelocity,onChange:e.setC1xVelocity.bind(e),label:"CP 1: x Velocity",step:.01,smallFont:!0}),Object(P.jsx)(N,{value:Math.abs(e.c1yVelocity),min:0,max:e.maxCPVelocity,onChange:e.setC1yVelocity.bind(e),label:"CP 1: y Velocity",step:.01,smallFont:!0}),Object(P.jsx)(N,{value:Math.abs(e.c2xVelocity),min:0,max:e.maxCPVelocity,onChange:e.setC2xVelocity.bind(e),label:"CP 2: x Velocity",step:.01,smallFont:!0}),Object(P.jsx)(N,{value:Math.abs(e.c2yVelocity),min:0,max:e.maxCPVelocity,onChange:e.setC2yVelocity.bind(e),label:"CP 2: y Velocity",step:.01,smallFont:!0})]})]})})]})},U=function(t,e,i,n){Y(i,n);var o=new A.a(window.innerWidth/2,window.innerHeight/2);e.clearRect(0,0,t.width,t.height),e.strokeStyle="white",e.lineWidth=i.curveWidth,X(e,i,o);for(var a=i.getCurve(),c=0;c<i.numRadials;++c)if(!(i.skipEveryNthRadial>0&&c%(i.skipEveryNthRadial+1)<=i.numberOfRadialsToSkip-1)){var l=2*Math.PI/i.numRadials*c;a.render(e,l,o)}},X=function(t,e,i){t.moveTo(i.x+e.maxCurveSize,i.y),t.arc(i.x,i.y,e.maxCurveSize,0,2*Math.PI),t.stroke()},Y=function(t,e){e&&(t.c1x>=t.maxControlPointSize&&(t.c1xVelocity=-Math.abs(t.c1xVelocity)),t.c1x<=-t.maxControlPointSize&&(t.c1xVelocity=Math.abs(t.c1xVelocity)),t.c1y>=t.maxControlPointSize&&(t.c1yVelocity=-Math.abs(t.c1yVelocity)),t.c1y<=-t.maxControlPointSize&&(t.c1yVelocity=Math.abs(t.c1yVelocity)),t.c2x>=t.maxControlPointSize&&(t.c2xVelocity=-Math.abs(t.c2xVelocity)),t.c2x<=-t.maxControlPointSize&&(t.c2xVelocity=Math.abs(t.c2xVelocity)),t.c2y>=t.maxControlPointSize&&(t.c2yVelocity=-Math.abs(t.c2yVelocity)),t.c2y<=-t.maxControlPointSize&&(t.c2yVelocity=Math.abs(t.c2yVelocity)),t.setC1x(t.c1x+t.c1xVelocity*(e/10)),t.setC1y(t.c1y+t.c1yVelocity*(e/10)),t.setC2x(t.c2x+t.c2xVelocity*(e/10)),t.setC2y(t.c2y+t.c2yVelocity*(e/10)),t.renderControls())},Z=p.a.canvas(y||(y=Object(f.a)(["\n  position: absolute;\n  height: 100vh;\n  width: 100vw;\n  background-color: #222222;\n  overflow-y: none;\n"]))),$=function(t){var e=t.state,i=function(t,e){var i=Object(m.useRef)(null),n=Object(m.useCallback)((function(){var t=i.current;if(t){t.width=window.innerWidth,t.height=window.innerHeight;var n=Math.min(t.width,t.height)*e.windowSizeProportion/2;e.setMaxCurveSize(n)}}),[e]);return Object(m.useEffect)((function(){var o,a;return window.addEventListener("resize",n,!1),n(),requestAnimationFrame((function n(c){var l=i.current,s=null===l||void 0===l?void 0:l.getContext("2d");void 0===a&&(a=c);var r=c-a;a=c,l&&s&&t(l,s,e,r),o=requestAnimationFrame(n)})),function(){cancelAnimationFrame(o),window.removeEventListener("resize",n)}}),[t,e,n]),i}(U,e);return Object(P.jsx)(Z,{id:"radials-canvas",ref:i})},_=p.a.div(b||(b=Object(f.a)(["\n  position: relative;\n"])));var tt=function(){var t=Object(m.useRef)(new L);return Object(P.jsxs)(_,{children:[Object(P.jsx)($,{state:t.current}),Object(P.jsx)(Q,{state:t.current})]})},et=function(t){t&&t instanceof Function&&i.e(3).then(i.bind(null,30)).then((function(e){var i=e.getCLS,n=e.getFID,o=e.getFCP,a=e.getLCP,c=e.getTTFB;i(t),n(t),o(t),a(t),c(t)}))};j.a.render(Object(P.jsx)(v.a.StrictMode,{children:Object(P.jsx)(tt,{})}),document.getElementById("root")),et()}},[[29,1,2]]]);
//# sourceMappingURL=main.daf5c871.chunk.js.map