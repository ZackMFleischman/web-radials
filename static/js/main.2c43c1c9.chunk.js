(this["webpackJsonpweb-radials"]=this["webpackJsonpweb-radials"]||[]).push([[0],{31:function(e,t,n){},42:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var i,o,a,l,c,r,s,u,h,d,x,b,m,v,y,j,p,C,f,g,O,P,w=n(0),V=n.n(w),S=n(7),k=n.n(S),z=(n(31),n(2)),R=n(3),M=n(17),F=n(15),L=n(4),T=n(24),N=R.a.span(i||(i=Object(z.a)(["\n  text-align: center;\n  line-height: ","px;\n  padding-left: 10px;\n  font-size: 14px;\n\n  @media (max-width: 768px) {\n    font-size: 12px;\n  }\n"])),20),H=n(1),E=200,W=R.a.div(o||(o=Object(z.a)(["\n  height: ","px;\n  line-height: ","px;\n  width: ","px;\n  text-align: center;\n  background-color: #0099ff;\n  color: #fff;\n  border-radius: 50%;\n  cursor: grab;\n  &:focus {\n    outline: none;\n  }\n"])),22,22,22),I=function(e,t){return Object(H.jsx)(W,Object(L.a)(Object(L.a)({},e),{},{children:t.valueNow}))},B=R.a.div(a||(a=Object(z.a)(["\n  height: ","px;\n  border-radius: 999px;\n  background: ",";\n  border: 1px solid #606060;\n"])),20,(function(e){return 0===e.index?"#005bd9":"#1e217d"})),A=function(e,t){return Object(H.jsx)(B,Object(L.a)(Object(L.a)({},e),{},{index:t.index}))},q=Object(R.a)(T.a)(l||(l=Object(z.a)(["\n  width: ","px;\n\n  @media (max-width: 768px) {\n    width: ","px;\n  }\n"])),E,140),D=R.a.div(c||(c=Object(z.a)(["\n  display: flex;\n  padding: 5px 0px;\n  "," {\n    font-size: ","px;\n  }\n"])),W,(function(e){return e.fontSize})),J=function(e){var t=e.value,n=e.label,i=e.onChange,o=e.step,a=e.min,l=e.max,c=e.smallFont,r=void 0!==c&&c,s=Object(w.useCallback)((function(e){null===i||void 0===i||i(e)}),[i]);return Object(H.jsxs)(D,{fontSize:r?9:16,children:[Object(H.jsx)(q,{renderTrack:A,renderThumb:I,value:[t],onChange:s,step:o,min:a,max:l}),Object(H.jsx)(N,{children:n})]})},G=n(12),Y=n(13),Z=n(5),K=n.n(Z),Q=function(){function e(t,n,i,o){Object(G.a)(this,e),this.a1=void 0,this.c1=void 0,this.c2=void 0,this.a2=void 0,this.a1=t,this.c1=n,this.c2=i,this.a2=o}return Object(Y.a)(e,[{key:"render",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:new K.a(0,0),i=arguments.length>3?arguments[3]:void 0,o=arguments.length>4&&void 0!==arguments[4]&&arguments[4],a=this.a1.rotate(t,void 0,!0).add(n.x,n.y),l=this.c1.rotate(t,void 0,!0).add(n.x,n.y),c=this.c2.rotate(t,void 0,!0).add(n.x,n.y),r=this.a2.rotate(t,void 0,!0).add(n.x,n.y);e.strokeStyle=i,e.beginPath(),e.moveTo(a.x,a.y),e.bezierCurveTo(l.x,l.y,c.x,c.y,r.x,r.y),o&&(e.moveTo(a.x,a.y),e.lineTo(l.x,l.y),e.moveTo(c.x,c.y),e.lineTo(r.x,r.y)),e.stroke()}}]),e}(),U=n(14),X=n.n(U),$=function(e,t){return Math.max(Math.min(e,t),-t)},_=function(){function e(){Object(G.a)(this,e),this.maxCurveSize=400,this.maxControlPointSize=Math.round(1.4*this.maxCurveSize),this.maxCPVelocity=3,this.curveWidth=4,this.numRadials=15,this.skipEveryNthRadial=0,this.numberOfRadialsToSkip=1,this.windowSizeProportion=.7,this.c1x=void 0,this.c1y=void 0,this.c2x=void 0,this.c2y=void 0,this.c1xVelocity=void 0,this.c1yVelocity=void 0,this.c2xVelocity=void 0,this.c2yVelocity=void 0,this.spin=0,this.spinVelocity=.1,this.showControlLines=!1,this.colorPalette=void 0,this.colorPaletteSize=1,this.colorHue={value:"white",label:"White"},this.colorLuminosity={value:"normal",label:"Normal"},this.renderControls=void 0,this.setMaxCurveSize(400),this.colorPalette=["white"],this.c1x=90,this.c1y=130,this.c2x=150,this.c2y=-20,this.c1xVelocity=1,this.c1yVelocity=1.2,this.c2xVelocity=1.4,this.c2yVelocity=1.6,this.renderControls=function(){}}return Object(Y.a)(e,[{key:"setNumRadials",value:function(e){this.numRadials=e}},{key:"setMaxCurveSize",value:function(e){this.maxCurveSize=e,this.maxControlPointSize=Math.round(1.4*this.maxCurveSize)}},{key:"setC1x",value:function(e){this.c1x=$(e,this.maxControlPointSize)}},{key:"setC1y",value:function(e){this.c1y=$(e,this.maxControlPointSize)}},{key:"setC2x",value:function(e){this.c2x=$(e,this.maxControlPointSize)}},{key:"setC2y",value:function(e){this.c2y=$(e,this.maxControlPointSize)}},{key:"setC1xVelocity",value:function(e){this.c1xVelocity=$(this.c1xVelocity>=0?e:-e,this.maxCPVelocity)}},{key:"setC1yVelocity",value:function(e){this.c1yVelocity=$(this.c1yVelocity>=0?e:-e,this.maxCPVelocity)}},{key:"setC2xVelocity",value:function(e){this.c2xVelocity=$(this.c2xVelocity>=0?e:-e,this.maxCPVelocity)}},{key:"setC2yVelocity",value:function(e){this.c2yVelocity=$(this.c2yVelocity>=0?e:-e,this.maxCPVelocity)}},{key:"getCurve",value:function(){return new Q(new K.a(0,0),new K.a(this.c1x,this.c1y),new K.a(this.c2x,this.c2y),new K.a(this.maxCurveSize,0))}},{key:"generateColorPalette",value:function(){var e,t,n,i,o;this.colorPalette="white"===(null===(e=this.colorHue)||void 0===e?void 0:e.value)?["white"]:X()({count:this.colorPaletteSize,hue:null!==(t=null===(n=this.colorHue)||void 0===n?void 0:n.value)&&void 0!==t?t:"random",luminosity:"normal"===(null===(i=this.colorLuminosity)||void 0===i?void 0:i.value)||null===(o=this.colorLuminosity)||void 0===o?void 0:o.value}),this.colorPaletteSize=this.colorPalette.length}}]),e}(),ee=n(25),te=n.n(ee),ne=(n(42),R.a.div(r||(r=Object(z.a)(["\n  display: flex;\n"])))),ie=Object(R.a)(N)(s||(s=Object(z.a)(["\n  margin: 5px 0px;\n"]))),oe=function(e){var t=e.defaultChecked,n=e.onChange;return Object(H.jsxs)(ne,{children:[Object(H.jsx)(te.a,{defaultChecked:t,icons:!1,onChange:n}),Object(H.jsx)(ie,{children:"Show Control Lines"})]})},ae=n(26),le=24,ce={control:function(e){return Object(L.a)(Object(L.a)({},e),{},{height:"".concat(le,"px"),minHeight:"".concat(le,"px"),backgroundColor:"#0099ff",border:"none",color:"white"})},option:function(e,t){return Object(L.a)(Object(L.a)({},e),{},{color:t.isSelected?"white":"black"})},indicatorsContainer:function(e){return Object(L.a)(Object(L.a)({},e),{},{padding:0,height:"".concat(le,"px"),minHeight:"".concat(le,"px")})},indicatorSeparator:function(e){return Object(L.a)(Object(L.a)({},e),{},{backgroundColor:"white"})},input:function(e){return Object(L.a)(Object(L.a)({},e),{},{caretColor:"transparent"})},placeholder:function(e){return Object(L.a)(Object(L.a)({},e),{},{paddingTop:2,paddingLeft:5,fontStyle:"italic",color:"white"})},singleValue:function(e){return Object(L.a)(Object(L.a)({},e),{},{paddingTop:2,paddingLeft:5,display:"inline-block",color:"white"})},valueContainer:function(){return{fontSize:"15px",height:"".concat(le,"px"),minHeight:"".concat(le,"px")}},menu:function(e){return Object(L.a)(Object(L.a)({},e),{},{zIndex:9})},menuList:function(e){return Object(L.a)(Object(L.a)({},e),{},{zIndex:9})}},re=Object(R.a)(ae.a)(u||(u=Object(z.a)(["\n  margin-top: 3px;\n  margin-bottom: 5px;\n  width: ","px;\n\n  @media (max-width: 768px) {\n    width: ","px;\n  }\n\n  svg {\n    stroke: white !important;\n    fill: white !important;\n  }\n"])),E,140),se=R.a.div(h||(h=Object(z.a)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n"]))),ue=function(e){var t=e.placeholder,n=e.options,i=e.label,o=e.value,a=e.onChange;return Object(H.jsxs)(se,{children:[Object(H.jsx)(re,{options:n,styles:ce,placeholder:t,value:o,onChange:function(e){return a(e)}}),Object(H.jsx)(N,{children:i})]})},he=R.a.div(d||(d=Object(z.a)(["\n  position: absolute;\n  color: white;\n  padding-left: 10px;\n  padding-right: 10px;\n  height: 100vh;\n  background: linear-gradient(\n    0.25turn,\n    rgba(0, 0, 0, ","),\n    92%,\n    rgba(0, 0, 0, 0)\n  );\n\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n\n  @media (max-width: 768px) {\n    padding-left: 5px;\n    padding-right: 5px;\n  }\n"])),(function(e){return e.showBackground?.5:0})),de=R.a.div(x||(x=Object(z.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),xe=R.a.div(b||(b=Object(z.a)([""]))),be=R.a.div(m||(m=Object(z.a)(["\n  background-color: #555555;\n  justify-self: center;\n  align-self: center;\n  height: 1px;\n  width: 95%;\n  margin: 8px 0px;\n\n  @media (max-width: 768px) {\n    margin: 4px 0px;\n  }\n"]))),me=R.a.button(v||(v=Object(z.a)(["\n  background-color: #0099ff;\n  border-radius: 5px;\n  color: white;\n  font-size: 20px;\n  margin-top: 10px;\n  cursor: pointer;\n"]))),ve=R.a.button(y||(y=Object(z.a)(["\n  background-color: #0099ff;\n  border-radius: 5px;\n  color: white;\n  font-size: 16px;\n  margin-bottom: 5px;\n  cursor: pointer;\n\n  @media (max-width: 768px) {\n    font-size: 14px;\n  }\n"]))),ye=Object(R.a)(ve)(j||(j=Object(z.a)(["\n  margin-top: 5px;\n"]))),je=R.a.span(p||(p=Object(z.a)(["\n  color: white;\n  font-size: 16px;\n  padding: 16px 0px 4px;\n  font-weight: bold;\n\n  @media (max-width: 768px) {\n    font-size: 14px;\n    padding: 8px 0px 2px;\n  }\n"]))),pe=R.a.a(C||(C=Object(z.a)(["\n color: white;\n &:visited { color: whitesmoke; }\n &:hover { color: #06e; }\u200b\n"]))),Ce=R.a.div(f||(f=Object(z.a)(["\n  font-size: 14px;\n  padding-bottom: 10px;\n"]))),fe=R.a.div(g||(g=Object(z.a)(["\n  overflow: auto;\n  padding-right: 10px;\n  height: 100%;\n"]))),ge=function(e){var t=e.state,n=function(){var e=Object(w.useState)({}),t=Object(F.a)(e,2)[1];return Object(w.useCallback)((function(){return t({})}),[])}();Object(w.useEffect)((function(){t.renderControls=n}),[n,t]);var i=Object(w.useState)(!0),o=Object(F.a)(i,2),a=o[0],l=o[1],c=Object(w.useState)(1),r=Object(F.a)(c,2),s=r[0],u=r[1];return Object(H.jsxs)(he,{showBackground:a,children:[Object(H.jsxs)(fe,{children:[Object(H.jsx)(me,{onClick:function(){return l((function(e){return!e}))},children:a?"Hide Controls":"Show Controls"}),a&&Object(H.jsx)(xe,{children:Object(H.jsxs)(de,{children:[Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)(je,{children:"Control Points"}),Object(H.jsx)(J,{value:t.c1x,min:-t.maxControlPointSize,max:t.maxControlPointSize,onChange:t.setC1x.bind(t),label:"CP 1: x Position",smallFont:!0}),Object(H.jsx)(J,{value:t.c1y,min:-t.maxControlPointSize,max:t.maxControlPointSize,onChange:t.setC1y.bind(t),label:"CP 1: y Position",smallFont:!0}),Object(H.jsx)(J,{value:t.c2x,min:-t.maxControlPointSize,max:t.maxControlPointSize,onChange:t.setC2x.bind(t),label:"CP 2: x Position",smallFont:!0}),Object(H.jsx)(J,{value:t.c2y,min:-t.maxControlPointSize,max:t.maxControlPointSize,onChange:t.setC2y.bind(t),label:"CP 2: y Position",smallFont:!0})]}),Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)(je,{children:"Control Point Velocities"}),Object(H.jsx)(J,{value:s,min:0,max:t.maxCPVelocity,onChange:function(e){t.setC1xVelocity(e),t.setC1yVelocity(e),t.setC2xVelocity(e),t.setC2yVelocity(e),u(e)},label:"Set All CP Velocities",step:.01,smallFont:!0}),Object(H.jsx)(be,{}),Object(H.jsx)(J,{value:Math.abs(t.c1xVelocity),min:0,max:t.maxCPVelocity,onChange:t.setC1xVelocity.bind(t),label:"CP 1: x Velocity",step:.01,smallFont:!0}),Object(H.jsx)(J,{value:Math.abs(t.c1yVelocity),min:0,max:t.maxCPVelocity,onChange:t.setC1yVelocity.bind(t),label:"CP 1: y Velocity",step:.01,smallFont:!0}),Object(H.jsx)(J,{value:Math.abs(t.c2xVelocity),min:0,max:t.maxCPVelocity,onChange:t.setC2xVelocity.bind(t),label:"CP 2: x Velocity",step:.01,smallFont:!0}),Object(H.jsx)(J,{value:Math.abs(t.c2yVelocity),min:0,max:t.maxCPVelocity,onChange:t.setC2yVelocity.bind(t),label:"CP 2: y Velocity",step:.01,smallFont:!0})]}),Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)(je,{children:"Colors"}),Object(H.jsx)(ue,{options:[{value:"white",label:"White"},{value:"blue",label:"Blue"},{value:"red",label:"Red"},{value:"green",label:"Green"},{value:"orange",label:"Orange"},{value:"yellow",label:"Yellow"},{value:"purple",label:"Purple"},{value:"pink",label:"Pink"},{value:"monochrome",label:"Monochrome"},{value:"random",label:"Random"}],value:t.colorHue,onChange:function(e){t.colorHue=e,t.generateColorPalette()},placeholder:"Select...",label:"Hue"}),Object(H.jsx)(ue,{options:[{value:"normal",label:"Normal"},{value:"light",label:"Light"},{value:"dark",label:"Dark"},{value:"bright",label:"Bright"},{value:"random",label:"Random"}],value:t.colorLuminosity,onChange:function(e){t.colorLuminosity=e,t.generateColorPalette()},placeholder:"Select...",label:"Luminosity"}),Object(H.jsx)(J,{value:t.colorPaletteSize,min:1,max:t.numRadials,onChange:function(e){if(t.colorPalette.length!==e)if(t.colorPalette.length>e)t.colorPalette=t.colorPalette.slice(0,e);else{var n,i,o,a,l;t.colorPalette=t.colorPalette.slice(0,e);var c=e-t.colorPalette.length;t.colorPalette=[].concat(Object(M.a)(t.colorPalette),Object(M.a)(X()({count:c,hue:"white"===(null===(n=t.colorHue)||void 0===n?void 0:n.value)?"monochrome":null!==(i=null===(o=t.colorHue)||void 0===o?void 0:o.value)&&void 0!==i?i:"random",luminosity:"normal"===(null===(a=t.colorLuminosity)||void 0===a?void 0:a.value)||null===(l=t.colorLuminosity)||void 0===l?void 0:l.value})))}t.colorPaletteSize=e},label:"Num of Colors"}),Object(H.jsx)(ye,{onClick:function(){t.generateColorPalette()},children:"Regenerate Color Palette"})]}),Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)(je,{children:"Radial Properties"}),Object(H.jsx)(J,{value:t.numRadials,min:1,max:75,onChange:function(e){t.setNumRadials(e),e<t.colorPalette.length&&(t.colorPalette=t.colorPalette.slice(0,e),t.colorPaletteSize=e)},label:"Num of Radials"}),Object(H.jsx)(J,{value:t.curveWidth,min:1,max:30,onChange:function(e){return t.curveWidth=e},label:"Radial Thickness"}),Object(H.jsx)(J,{value:t.spinVelocity,min:-1,max:1,step:.1,onChange:function(e){return t.spinVelocity=e},smallFont:!0,label:"Spin Velocity"}),Object(H.jsx)(J,{value:t.skipEveryNthRadial,min:0,max:10,onChange:function(e){return t.skipEveryNthRadial=e},label:"Skip every Nth one"}),Object(H.jsx)(J,{value:t.numberOfRadialsToSkip,min:1,max:Math.max(t.skipEveryNthRadial-1,1),onChange:function(e){return t.numberOfRadialsToSkip=e},label:"Num Radials to Skip"}),Object(H.jsx)(oe,{defaultChecked:t.showControlLines,onChange:function(){return t.showControlLines=!t.showControlLines},label:"Show Control Lines"})]})]})})]}),a&&Object(H.jsxs)(Ce,{children:["\xa9",Object(H.jsx)(pe,{href:"http://www.zackmfleischman.com",children:"Zack M Fleischman"})]})]})},Oe=function(e,t,n,i){we(n,i);var o=new K.a(window.innerWidth/2,window.innerHeight/2);t.clearRect(0,0,e.width,e.height),t.strokeStyle="white",t.lineWidth=n.curveWidth,Pe(t,n,o);for(var a=n.getCurve(),l=0;l<n.numRadials;++l)if(!(n.skipEveryNthRadial>0&&l%(n.skipEveryNthRadial+1)<=n.numberOfRadialsToSkip-1)){var c=2*Math.PI/n.numRadials*l+n.spin;a.render(t,c,o,n.colorPalette[l%n.colorPalette.length],n.showControlLines)}},Pe=function(e,t,n){e.strokeStyle=t.colorPalette[0],e.moveTo(n.x+t.maxCurveSize,n.y),e.arc(n.x,n.y,t.maxCurveSize,0,2*Math.PI),e.stroke()},we=function(e,t){t&&(e.c1x>=e.maxControlPointSize&&(e.c1xVelocity=-Math.abs(e.c1xVelocity)),e.c1x<=-e.maxControlPointSize&&(e.c1xVelocity=Math.abs(e.c1xVelocity)),e.c1y>=e.maxControlPointSize&&(e.c1yVelocity=-Math.abs(e.c1yVelocity)),e.c1y<=-e.maxControlPointSize&&(e.c1yVelocity=Math.abs(e.c1yVelocity)),e.c2x>=e.maxControlPointSize&&(e.c2xVelocity=-Math.abs(e.c2xVelocity)),e.c2x<=-e.maxControlPointSize&&(e.c2xVelocity=Math.abs(e.c2xVelocity)),e.c2y>=e.maxControlPointSize&&(e.c2yVelocity=-Math.abs(e.c2yVelocity)),e.c2y<=-e.maxControlPointSize&&(e.c2yVelocity=Math.abs(e.c2yVelocity)),e.setC1x(e.c1x+e.c1xVelocity*(t/10)),e.setC1y(e.c1y+e.c1yVelocity*(t/10)),e.setC2x(e.c2x+e.c2xVelocity*(t/10)),e.setC2y(e.c2y+e.c2yVelocity*(t/10)),e.spin=e.spin+e.spinVelocity*t/500%(2*Math.PI),e.renderControls())},Ve=R.a.canvas(O||(O=Object(z.a)(["\n  position: absolute;\n  height: 100vh;\n  width: 100vw;\n  background-color: #222222;\n  overflow-y: none;\n"]))),Se=function(e){var t=e.state,n=function(e,t){var n=Object(w.useRef)(null),i=Object(w.useCallback)((function(){var e=n.current;if(e){e.width=window.innerWidth,e.height=window.innerHeight;var i=Math.min(e.width,e.height)*t.windowSizeProportion/2;t.setMaxCurveSize(i)}}),[t]);return Object(w.useEffect)((function(){var o,a;return window.addEventListener("resize",i,!1),i(),requestAnimationFrame((function i(l){var c=n.current,r=null===c||void 0===c?void 0:c.getContext("2d");void 0===a&&(a=l);var s=l-a;a=l,c&&r&&e(c,r,t,s),o=requestAnimationFrame(i)})),function(){cancelAnimationFrame(o),window.removeEventListener("resize",i)}}),[e,t,i]),n}(Oe,t);return Object(H.jsx)(Ve,{id:"radials-canvas",ref:n})},ke=R.a.div(P||(P=Object(z.a)(["\n  position: relative;\n"])));var ze=function(){var e=Object(w.useRef)(new _);return Object(H.jsxs)(ke,{children:[Object(H.jsx)(Se,{state:e.current}),Object(H.jsx)(ge,{state:e.current})]})},Re=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,58)).then((function(t){var n=t.getCLS,i=t.getFID,o=t.getFCP,a=t.getLCP,l=t.getTTFB;n(e),i(e),o(e),a(e),l(e)}))};k.a.render(Object(H.jsx)(V.a.StrictMode,{children:Object(H.jsx)(ze,{})}),document.getElementById("root")),Re()}},[[57,1,2]]]);
//# sourceMappingURL=main.2c43c1c9.chunk.js.map