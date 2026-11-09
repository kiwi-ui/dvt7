import{R as Ue,j as _,r as L,g as rh,u as sh}from"./index-B8fyzEFs.js";const ih="/assets/openin-BraM3TNK.mp4";var Pc={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},ia=Ue.createContext&&Ue.createContext(Pc),oh=["attr","size","title"];function ah(n,t){if(n==null)return{};var e=ch(n,t),r,s;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(s=0;s<o.length;s++)r=o[s],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(n,r)&&(e[r]=n[r])}return e}function ch(n,t){if(n==null)return{};var e={};for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){if(t.indexOf(r)>=0)continue;e[r]=n[r]}return e}function qr(){return qr=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n},qr.apply(this,arguments)}function oa(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(n,s).enumerable})),e.push.apply(e,r)}return e}function Hr(n){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?oa(Object(e),!0).forEach(function(r){lh(n,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):oa(Object(e)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(e,r))})}return n}function lh(n,t,e){return t=uh(t),t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function uh(n){var t=hh(n,"string");return typeof t=="symbol"?t:t+""}function hh(n,t){if(typeof n!="object"||!n)return n;var e=n[Symbol.toPrimitive];if(e!==void 0){var r=e.call(n,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(n)}function Vc(n){return n&&n.map((t,e)=>Ue.createElement(t.tag,Hr({key:e},t.attr),Vc(t.child)))}function Bt(n){return t=>Ue.createElement(dh,qr({attr:Hr({},n.attr)},t),Vc(n.child))}function dh(n){var t=e=>{var{attr:r,size:s,title:o}=n,a=ah(n,oh),l=s||e.size||"1em",h;return e.className&&(h=e.className),n.className&&(h=(h?h+" ":"")+n.className),Ue.createElement("svg",qr({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,r,a,{className:h,style:Hr(Hr({color:n.color||e.color},e.style),n.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),o&&Ue.createElement("title",null,o),n.children)};return ia!==void 0?Ue.createElement(ia.Consumer,null,e=>t(e)):t(Pc)}function fh(n){return Bt({attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M12 19.1642L18.2071 12.9571L16.7929 11.5429L12 16.3358L7.20712 11.5429L5.79291 12.9571L12 19.1642ZM12 13.5143L18.2071 7.30722L16.7929 5.89301L12 10.6859L7.20712 5.89301L5.79291 7.30722L12 13.5143Z"},child:[]}]})(n)}function mh(n){return Bt({attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M1.94607 9.31543C1.42353 9.14125 1.4194 8.86022 1.95682 8.68108L21.043 2.31901C21.5715 2.14285 21.8746 2.43866 21.7265 2.95694L16.2733 22.0432C16.1223 22.5716 15.8177 22.59 15.5944 22.0876L11.9999 14L17.9999 6.00005L9.99992 12L1.94607 9.31543Z"},child:[]}]})(n)}const ph="_scrollLine_1vxxp_15",gh="_hideOnLaptop_1vxxp_31",yh="_coverImg_1vxxp_37",_h="_openingContainer_1vxxp_49",xr={scrollLine:ph,hideOnLaptop:gh,coverImg:yh,openingContainer:_h},vh="/assets/initial-CorLTZBN.png",wh=()=>_.jsxs("section",{className:`py-5 d-flex justify-content-center align-items-center ${xr.coverImg}`,style:{height:"100dvh",position:"relative",zIndex:5},children:[_.jsx("video",{src:ih,autoPlay:!0,muted:!0,playsInline:!0,style:{objectFit:"fill"},className:`position-absolute start-0 w-100 top-0 h-100 ${xr.hideOnLaptop}`}),_.jsx("div",{className:"container position-relative my-5 h-75 mx-auto",style:{zIndex:10},children:_.jsx("div",{className:`rounded-pill h-100 p-2 ${xr.openingContainer} mx-auto`,"data-aos":"flip-right","data-aos-easing":"ease-in-sine","data-aos-duration":"2000",style:{background:"rgba(255, 232, 223, 0.7)"},children:_.jsx("div",{className:"rounded-pill h-100 p-3",style:{background:"rgba(249, 245, 221, 0.2)",backdropFilter:"blur(0.5px)",borderColor:"rgba(91, 20, 21, 0.9)",borderWidth:"6px",borderStyle:"solid",borderSpacing:"2px"},children:_.jsxs("div",{className:"py-5 d-flex flex-column justify-content-center align-items-center h-100 text-center",children:[_.jsx("img",{src:vh,alt:"logo",style:{width:"120px"}}),_.jsx("div",{children:_.jsx("p",{className:"cormorantGaramond fw-bold",style:{letterSpacing:"0.1rem"},children:"THE WEDDING OF"})}),_.jsxs("div",{children:[_.jsx("p",{className:"vidaloka",style:{fontSize:"1.9rem"},children:"Anonim & Anomnin"}),_.jsx("p",{className:"andada text-black-50",children:"31-12-2030"})]}),_.jsx(fh,{className:`mt-4 ${xr.scrollLine}`})]})})})})]});let Eh={data:""},bh=n=>typeof window=="object"?((n?n.querySelector("#_goober"):window._goober)||Object.assign((n||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:n||Eh,Th=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Ih=/\/\*[^]*?\*\/|  +/g,aa=/\n+/g,we=(n,t)=>{let e="",r="",s="";for(let o in n){let a=n[o];o[0]=="@"?o[1]=="i"?e=o+" "+a+";":r+=o[1]=="f"?we(a,o):o+"{"+we(a,o[1]=="k"?"":t)+"}":typeof a=="object"?r+=we(a,t?t.replace(/([^,])+/g,l=>o.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,h=>/&/.test(h)?h.replace(/&/g,l):l?l+" "+h:h)):o):a!=null&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=we.p?we.p(o,a):o+":"+a+";")}return e+(t&&s?t+"{"+s+"}":s)+r},ae={},Nc=n=>{if(typeof n=="object"){let t="";for(let e in n)t+=e+Nc(n[e]);return t}return n},Ah=(n,t,e,r,s)=>{let o=Nc(n),a=ae[o]||(ae[o]=(h=>{let d=0,m=11;for(;d<h.length;)m=101*m+h.charCodeAt(d++)>>>0;return"go"+m})(o));if(!ae[a]){let h=o!==n?n:(d=>{let m,y,b=[{}];for(;m=Th.exec(d.replace(Ih,""));)m[4]?b.shift():m[3]?(y=m[3].replace(aa," ").trim(),b.unshift(b[0][y]=b[0][y]||{})):b[0][m[1]]=m[2].replace(aa," ").trim();return b[0]})(n);ae[a]=we(s?{["@keyframes "+a]:h}:h,e?"":"."+a)}let l=e&&ae.g?ae.g:null;return e&&(ae.g=ae[a]),((h,d,m,y)=>{y?d.data=d.data.replace(y,h):d.data.indexOf(h)===-1&&(d.data=m?h+d.data:d.data+h)})(ae[a],t,r,l),a},xh=(n,t,e)=>n.reduce((r,s,o)=>{let a=t[o];if(a&&a.call){let l=a(e),h=l&&l.props&&l.props.className||/^go/.test(l)&&l;a=h?"."+h:l&&typeof l=="object"?l.props?"":we(l,""):l===!1?"":l}return r+s+(a??"")},"");function cs(n){let t=this||{},e=n.call?n(t.p):n;return Ah(e.unshift?e.raw?xh(e,[].slice.call(arguments,1),t.p):e.reduce((r,s)=>Object.assign(r,s&&s.call?s(t.p):s),{}):e,bh(t.target),t.g,t.o,t.k)}let kc,Zs,ti;cs.bind({g:1});let le=cs.bind({k:1});function Sh(n,t,e,r){we.p=t,kc=n,Zs=e,ti=r}function ke(n,t){let e=this||{};return function(){let r=arguments;function s(o,a){let l=Object.assign({},o),h=l.className||s.className;e.p=Object.assign({theme:Zs&&Zs()},l),e.o=/ *go\d+/.test(h),l.className=cs.apply(e,r)+(h?" "+h:"");let d=n;return n[0]&&(d=l.as||n,delete l.as),ti&&d[0]&&ti(l),kc(d,l)}return t?t(s):s}}var Rh=n=>typeof n=="function",Wr=(n,t)=>Rh(n)?n(t):n,Ch=(()=>{let n=0;return()=>(++n).toString()})(),Dc=(()=>{let n;return()=>{if(n===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");n=!t||t.matches}return n}})(),Ph=20,Ti="default",Mc=(n,t)=>{let{toastLimit:e}=n.settings;switch(t.type){case 0:return{...n,toasts:[t.toast,...n.toasts].slice(0,e)};case 1:return{...n,toasts:n.toasts.map(a=>a.id===t.toast.id?{...a,...t.toast}:a)};case 2:let{toast:r}=t;return Mc(n,{type:n.toasts.find(a=>a.id===r.id)?1:0,toast:r});case 3:let{toastId:s}=t;return{...n,toasts:n.toasts.map(a=>a.id===s||s===void 0?{...a,dismissed:!0,visible:!1}:a)};case 4:return t.toastId===void 0?{...n,toasts:[]}:{...n,toasts:n.toasts.filter(a=>a.id!==t.toastId)};case 5:return{...n,pausedAt:t.time};case 6:let o=t.time-(n.pausedAt||0);return{...n,pausedAt:void 0,toasts:n.toasts.map(a=>({...a,pauseDuration:a.pauseDuration+o}))}}},Mr=[],Oc={toasts:[],pausedAt:void 0,settings:{toastLimit:Ph}},ee={},jc=(n,t=Ti)=>{ee[t]=Mc(ee[t]||Oc,n),Mr.forEach(([e,r])=>{e===t&&r(ee[t])})},Lc=n=>Object.keys(ee).forEach(t=>jc(n,t)),Vh=n=>Object.keys(ee).find(t=>ee[t].toasts.some(e=>e.id===n)),ls=(n=Ti)=>t=>{jc(t,n)},Nh={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},kh=(n={},t=Ti)=>{let[e,r]=L.useState(ee[t]||Oc),s=L.useRef(ee[t]);L.useEffect(()=>(s.current!==ee[t]&&r(ee[t]),Mr.push([t,r]),()=>{let a=Mr.findIndex(([l])=>l===t);a>-1&&Mr.splice(a,1)}),[t]);let o=e.toasts.map(a=>{var l,h,d;return{...n,...n[a.type],...a,removeDelay:a.removeDelay||((l=n[a.type])==null?void 0:l.removeDelay)||n?.removeDelay,duration:a.duration||((h=n[a.type])==null?void 0:h.duration)||n?.duration||Nh[a.type],style:{...n.style,...(d=n[a.type])==null?void 0:d.style,...a.style}}});return{...e,toasts:o}},Dh=(n,t="blank",e)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:n,pauseDuration:0,...e,id:e?.id||Ch()}),cr=n=>(t,e)=>{let r=Dh(t,n,e);return ls(r.toasterId||Vh(r.id))({type:2,toast:r}),r.id},gt=(n,t)=>cr("blank")(n,t);gt.error=cr("error");gt.success=cr("success");gt.loading=cr("loading");gt.custom=cr("custom");gt.dismiss=(n,t)=>{let e={type:3,toastId:n};t?ls(t)(e):Lc(e)};gt.dismissAll=n=>gt.dismiss(void 0,n);gt.remove=(n,t)=>{let e={type:4,toastId:n};t?ls(t)(e):Lc(e)};gt.removeAll=n=>gt.remove(void 0,n);gt.promise=(n,t,e)=>{let r=gt.loading(t.loading,{...e,...e?.loading});return typeof n=="function"&&(n=n()),n.then(s=>{let o=t.success?Wr(t.success,s):void 0;return o?gt.success(o,{id:r,...e,...e?.success}):gt.dismiss(r),s}).catch(s=>{let o=t.error?Wr(t.error,s):void 0;o?gt.error(o,{id:r,...e,...e?.error}):gt.dismiss(r)}),n};var Mh=1e3,Oh=(n,t="default")=>{let{toasts:e,pausedAt:r}=kh(n,t),s=L.useRef(new Map).current,o=L.useCallback((y,b=Mh)=>{if(s.has(y))return;let A=setTimeout(()=>{s.delete(y),a({type:4,toastId:y})},b);s.set(y,A)},[]);L.useEffect(()=>{if(r)return;let y=Date.now(),b=e.map(A=>{if(A.duration===1/0)return;let P=(A.duration||0)+A.pauseDuration-(y-A.createdAt);if(P<0){A.visible&&gt.dismiss(A.id);return}return setTimeout(()=>gt.dismiss(A.id,t),P)});return()=>{b.forEach(A=>A&&clearTimeout(A))}},[e,r,t]);let a=L.useCallback(ls(t),[t]),l=L.useCallback(()=>{a({type:5,time:Date.now()})},[a]),h=L.useCallback((y,b)=>{a({type:1,toast:{id:y,height:b}})},[a]),d=L.useCallback(()=>{r&&a({type:6,time:Date.now()})},[r,a]),m=L.useCallback((y,b)=>{let{reverseOrder:A=!1,gutter:P=8,defaultPosition:N}=b||{},V=e.filter(B=>(B.position||N)===(y.position||N)&&B.height),$=V.findIndex(B=>B.id===y.id),q=V.filter((B,nt)=>nt<$&&B.visible).length;return V.filter(B=>B.visible).slice(...A?[q+1]:[0,q]).reduce((B,nt)=>B+(nt.height||0)+P,0)},[e]);return L.useEffect(()=>{e.forEach(y=>{if(y.dismissed)o(y.id,y.removeDelay);else{let b=s.get(y.id);b&&(clearTimeout(b),s.delete(y.id))}})},[e,o]),{toasts:e,handlers:{updateHeight:h,startPause:l,endPause:d,calculateOffset:m}}},jh=le`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,Lh=le`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Fh=le`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,Bh=ke("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${n=>n.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${jh} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Lh} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${n=>n.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${Fh} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,Uh=le`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,zh=ke("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${n=>n.secondary||"#e0e0e0"};
  border-right-color: ${n=>n.primary||"#616161"};
  animation: ${Uh} 1s linear infinite;
`,$h=le`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,qh=le`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,Hh=ke("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${n=>n.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${$h} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${qh} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${n=>n.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,Wh=ke("div")`
  position: absolute;
`,Gh=ke("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Kh=le`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Qh=ke("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Kh} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Yh=({toast:n})=>{let{icon:t,type:e,iconTheme:r}=n;return t!==void 0?typeof t=="string"?L.createElement(Qh,null,t):t:e==="blank"?null:L.createElement(Gh,null,L.createElement(zh,{...r}),e!=="loading"&&L.createElement(Wh,null,e==="error"?L.createElement(Bh,{...r}):L.createElement(Hh,{...r})))},Xh=n=>`
0% {transform: translate3d(0,${n*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Jh=n=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${n*-150}%,-1px) scale(.6); opacity:0;}
`,Zh="0%{opacity:0;} 100%{opacity:1;}",td="0%{opacity:1;} 100%{opacity:0;}",ed=ke("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,nd=ke("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,rd=(n,t)=>{let e=n.includes("top")?1:-1,[r,s]=Dc()?[Zh,td]:[Xh(e),Jh(e)];return{animation:t?`${le(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${le(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},sd=L.memo(({toast:n,position:t,style:e,children:r})=>{let s=n.height?rd(n.position||t||"top-center",n.visible):{opacity:0},o=L.createElement(Yh,{toast:n}),a=L.createElement(nd,{...n.ariaProps},Wr(n.message,n));return L.createElement(ed,{className:n.className,style:{...s,...e,...n.style}},typeof r=="function"?r({icon:o,message:a}):L.createElement(L.Fragment,null,o,a))});Sh(L.createElement);var id=({id:n,className:t,style:e,onHeightUpdate:r,children:s})=>{let o=L.useCallback(a=>{if(a){let l=()=>{let h=a.getBoundingClientRect().height;r(n,h)};l(),new MutationObserver(l).observe(a,{subtree:!0,childList:!0,characterData:!0})}},[n,r]);return L.createElement("div",{ref:o,className:t,style:e},s)},od=(n,t)=>{let e=n.includes("top"),r=e?{top:0}:{bottom:0},s=n.includes("center")?{justifyContent:"center"}:n.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:Dc()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(e?1:-1)}px)`,...r,...s}},ad=cs`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Sr=16,cd=({reverseOrder:n,position:t="top-center",toastOptions:e,gutter:r,children:s,toasterId:o,containerStyle:a,containerClassName:l})=>{let{toasts:h,handlers:d}=Oh(e,o);return L.createElement("div",{"data-rht-toaster":o||"",style:{position:"fixed",zIndex:9999,top:Sr,left:Sr,right:Sr,bottom:Sr,pointerEvents:"none",...a},className:l,onMouseEnter:d.startPause,onMouseLeave:d.endPause},h.map(m=>{let y=m.position||t,b=d.calculateOffset(m,{reverseOrder:n,gutter:r,defaultPosition:t}),A=od(y,b);return L.createElement(id,{id:m.id,key:m.id,onHeightUpdate:d.updateHeight,className:m.visible?ad:"",style:A},m.type==="custom"?Wr(m.message,m):s?s(m):L.createElement(sd,{toast:m,position:y}))}))},ca=gt;const ld="/assets/terbuang-Ss3-bF2w.mp3",Fc=[ld],Bc=Math.floor(Math.random()*Fc.length);function ud(){return L.useRef(new Audio(Fc[Bc]))}var Or={exports:{}},hd=Or.exports,la;function dd(){return la||(la=1,(function(n,t){(function(e,r){n.exports=r()})(hd,function(){return(function(e){function r(o){if(s[o])return s[o].exports;var a=s[o]={exports:{},id:o,loaded:!1};return e[o].call(a.exports,a,a.exports,r),a.loaded=!0,a.exports}var s={};return r.m=e,r.c=s,r.p="dist/",r(0)})([function(e,r,s){function o(O){return O&&O.__esModule?O:{default:O}}var a=Object.assign||function(O){for(var it=1;it<arguments.length;it++){var jt=arguments[it];for(var Qt in jt)Object.prototype.hasOwnProperty.call(jt,Qt)&&(O[Qt]=jt[Qt])}return O},l=s(1),h=(o(l),s(6)),d=o(h),m=s(7),y=o(m),b=s(8),A=o(b),P=s(9),N=o(P),V=s(10),$=o(V),q=s(11),B=o(q),nt=s(14),lt=o(nt),Y=[],T=!1,p={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},w=function(){var O=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(O&&(T=!0),T)return Y=(0,B.default)(Y,p),(0,$.default)(Y,p.once),Y},I=function(){Y=(0,lt.default)(),w()},v=function(){Y.forEach(function(O,it){O.node.removeAttribute("data-aos"),O.node.removeAttribute("data-aos-easing"),O.node.removeAttribute("data-aos-duration"),O.node.removeAttribute("data-aos-delay")})},E=function(O){return O===!0||O==="mobile"&&N.default.mobile()||O==="phone"&&N.default.phone()||O==="tablet"&&N.default.tablet()||typeof O=="function"&&O()===!0},g=function(O){p=a(p,O),Y=(0,lt.default)();var it=document.all&&!window.atob;return E(p.disable)||it?v():(p.disableMutationObserver||A.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),p.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",p.easing),document.querySelector("body").setAttribute("data-aos-duration",p.duration),document.querySelector("body").setAttribute("data-aos-delay",p.delay),p.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?w(!0):p.startEvent==="load"?window.addEventListener(p.startEvent,function(){w(!0)}):document.addEventListener(p.startEvent,function(){w(!0)}),window.addEventListener("resize",(0,y.default)(w,p.debounceDelay,!0)),window.addEventListener("orientationchange",(0,y.default)(w,p.debounceDelay,!0)),window.addEventListener("scroll",(0,d.default)(function(){(0,$.default)(Y,p.once)},p.throttleDelay)),p.disableMutationObserver||A.default.ready("[data-aos]",I),Y)};e.exports={init:g,refresh:w,refreshHard:I}},function(e,r){},,,,,function(e,r){(function(s){function o(E,g,O){function it(X){var xt=Et,qt=Dt;return Et=Dt=void 0,Yt=X,ut=E.apply(qt,xt)}function jt(X){return Yt=X,ot=setTimeout(zt,g),Xt?it(X):ut}function Qt(X){var xt=X-At,qt=X-Yt,tn=g-xt;return $t?I(tn,Mt-qt):tn}function Ut(X){var xt=X-At,qt=X-Yt;return At===void 0||xt>=g||xt<0||$t&&qt>=Mt}function zt(){var X=v();return Ut(X)?Je(X):void(ot=setTimeout(zt,Qt(X)))}function Je(X){return ot=void 0,Z&&Et?it(X):(Et=Dt=void 0,ut)}function Ze(){ot!==void 0&&clearTimeout(ot),Yt=0,Et=At=Dt=ot=void 0}function fe(){return ot===void 0?ut:Je(v())}function Lt(){var X=v(),xt=Ut(X);if(Et=arguments,Dt=this,At=X,xt){if(ot===void 0)return jt(At);if($t)return ot=setTimeout(zt,g),it(At)}return ot===void 0&&(ot=setTimeout(zt,g)),ut}var Et,Dt,Mt,ut,ot,At,Yt=0,Xt=!1,$t=!1,Z=!0;if(typeof E!="function")throw new TypeError(b);return g=m(g)||0,l(O)&&(Xt=!!O.leading,$t="maxWait"in O,Mt=$t?w(m(O.maxWait)||0,g):Mt,Z="trailing"in O?!!O.trailing:Z),Lt.cancel=Ze,Lt.flush=fe,Lt}function a(E,g,O){var it=!0,jt=!0;if(typeof E!="function")throw new TypeError(b);return l(O)&&(it="leading"in O?!!O.leading:it,jt="trailing"in O?!!O.trailing:jt),o(E,g,{leading:it,maxWait:g,trailing:jt})}function l(E){var g=typeof E>"u"?"undefined":y(E);return!!E&&(g=="object"||g=="function")}function h(E){return!!E&&(typeof E>"u"?"undefined":y(E))=="object"}function d(E){return(typeof E>"u"?"undefined":y(E))=="symbol"||h(E)&&p.call(E)==P}function m(E){if(typeof E=="number")return E;if(d(E))return A;if(l(E)){var g=typeof E.valueOf=="function"?E.valueOf():E;E=l(g)?g+"":g}if(typeof E!="string")return E===0?E:+E;E=E.replace(N,"");var O=$.test(E);return O||q.test(E)?B(E.slice(2),O?2:8):V.test(E)?A:+E}var y=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(E){return typeof E}:function(E){return E&&typeof Symbol=="function"&&E.constructor===Symbol&&E!==Symbol.prototype?"symbol":typeof E},b="Expected a function",A=NaN,P="[object Symbol]",N=/^\s+|\s+$/g,V=/^[-+]0x[0-9a-f]+$/i,$=/^0b[01]+$/i,q=/^0o[0-7]+$/i,B=parseInt,nt=(typeof s>"u"?"undefined":y(s))=="object"&&s&&s.Object===Object&&s,lt=(typeof self>"u"?"undefined":y(self))=="object"&&self&&self.Object===Object&&self,Y=nt||lt||Function("return this")(),T=Object.prototype,p=T.toString,w=Math.max,I=Math.min,v=function(){return Y.Date.now()};e.exports=a}).call(r,(function(){return this})())},function(e,r){(function(s){function o(v,E,g){function O(Z){var X=Lt,xt=Et;return Lt=Et=void 0,At=Z,Mt=v.apply(xt,X)}function it(Z){return At=Z,ut=setTimeout(Ut,E),Yt?O(Z):Mt}function jt(Z){var X=Z-ot,xt=Z-At,qt=E-X;return Xt?w(qt,Dt-xt):qt}function Qt(Z){var X=Z-ot,xt=Z-At;return ot===void 0||X>=E||X<0||Xt&&xt>=Dt}function Ut(){var Z=I();return Qt(Z)?zt(Z):void(ut=setTimeout(Ut,jt(Z)))}function zt(Z){return ut=void 0,$t&&Lt?O(Z):(Lt=Et=void 0,Mt)}function Je(){ut!==void 0&&clearTimeout(ut),At=0,Lt=ot=Et=ut=void 0}function Ze(){return ut===void 0?Mt:zt(I())}function fe(){var Z=I(),X=Qt(Z);if(Lt=arguments,Et=this,ot=Z,X){if(ut===void 0)return it(ot);if(Xt)return ut=setTimeout(Ut,E),O(ot)}return ut===void 0&&(ut=setTimeout(Ut,E)),Mt}var Lt,Et,Dt,Mt,ut,ot,At=0,Yt=!1,Xt=!1,$t=!0;if(typeof v!="function")throw new TypeError(y);return E=d(E)||0,a(g)&&(Yt=!!g.leading,Xt="maxWait"in g,Dt=Xt?p(d(g.maxWait)||0,E):Dt,$t="trailing"in g?!!g.trailing:$t),fe.cancel=Je,fe.flush=Ze,fe}function a(v){var E=typeof v>"u"?"undefined":m(v);return!!v&&(E=="object"||E=="function")}function l(v){return!!v&&(typeof v>"u"?"undefined":m(v))=="object"}function h(v){return(typeof v>"u"?"undefined":m(v))=="symbol"||l(v)&&T.call(v)==A}function d(v){if(typeof v=="number")return v;if(h(v))return b;if(a(v)){var E=typeof v.valueOf=="function"?v.valueOf():v;v=a(E)?E+"":E}if(typeof v!="string")return v===0?v:+v;v=v.replace(P,"");var g=V.test(v);return g||$.test(v)?q(v.slice(2),g?2:8):N.test(v)?b:+v}var m=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(v){return typeof v}:function(v){return v&&typeof Symbol=="function"&&v.constructor===Symbol&&v!==Symbol.prototype?"symbol":typeof v},y="Expected a function",b=NaN,A="[object Symbol]",P=/^\s+|\s+$/g,N=/^[-+]0x[0-9a-f]+$/i,V=/^0b[01]+$/i,$=/^0o[0-7]+$/i,q=parseInt,B=(typeof s>"u"?"undefined":m(s))=="object"&&s&&s.Object===Object&&s,nt=(typeof self>"u"?"undefined":m(self))=="object"&&self&&self.Object===Object&&self,lt=B||nt||Function("return this")(),Y=Object.prototype,T=Y.toString,p=Math.max,w=Math.min,I=function(){return lt.Date.now()};e.exports=o}).call(r,(function(){return this})())},function(e,r){function s(m){var y=void 0,b=void 0;for(y=0;y<m.length;y+=1)if(b=m[y],b.dataset&&b.dataset.aos||b.children&&s(b.children))return!0;return!1}function o(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function a(){return!!o()}function l(m,y){var b=window.document,A=o(),P=new A(h);d=y,P.observe(b.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function h(m){m&&m.forEach(function(y){var b=Array.prototype.slice.call(y.addedNodes),A=Array.prototype.slice.call(y.removedNodes),P=b.concat(A);if(s(P))return d()})}Object.defineProperty(r,"__esModule",{value:!0});var d=function(){};r.default={isSupported:a,ready:l}},function(e,r){function s(b,A){if(!(b instanceof A))throw new TypeError("Cannot call a class as a function")}function o(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(r,"__esModule",{value:!0});var a=(function(){function b(A,P){for(var N=0;N<P.length;N++){var V=P[N];V.enumerable=V.enumerable||!1,V.configurable=!0,"value"in V&&(V.writable=!0),Object.defineProperty(A,V.key,V)}}return function(A,P,N){return P&&b(A.prototype,P),N&&b(A,N),A}})(),l=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,h=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,d=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,m=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,y=(function(){function b(){s(this,b)}return a(b,[{key:"phone",value:function(){var A=o();return!(!l.test(A)&&!h.test(A.substr(0,4)))}},{key:"mobile",value:function(){var A=o();return!(!d.test(A)&&!m.test(A.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),b})();r.default=new y},function(e,r){Object.defineProperty(r,"__esModule",{value:!0});var s=function(a,l,h){var d=a.node.getAttribute("data-aos-once");l>a.position?a.node.classList.add("aos-animate"):typeof d<"u"&&(d==="false"||!h&&d!=="true")&&a.node.classList.remove("aos-animate")},o=function(a,l){var h=window.pageYOffset,d=window.innerHeight;a.forEach(function(m,y){s(m,d+h,l)})};r.default=o},function(e,r,s){function o(d){return d&&d.__esModule?d:{default:d}}Object.defineProperty(r,"__esModule",{value:!0});var a=s(12),l=o(a),h=function(d,m){return d.forEach(function(y,b){y.node.classList.add("aos-init"),y.position=(0,l.default)(y.node,m.offset)}),d};r.default=h},function(e,r,s){function o(d){return d&&d.__esModule?d:{default:d}}Object.defineProperty(r,"__esModule",{value:!0});var a=s(13),l=o(a),h=function(d,m){var y=0,b=0,A=window.innerHeight,P={offset:d.getAttribute("data-aos-offset"),anchor:d.getAttribute("data-aos-anchor"),anchorPlacement:d.getAttribute("data-aos-anchor-placement")};switch(P.offset&&!isNaN(P.offset)&&(b=parseInt(P.offset)),P.anchor&&document.querySelectorAll(P.anchor)&&(d=document.querySelectorAll(P.anchor)[0]),y=(0,l.default)(d).top,P.anchorPlacement){case"top-bottom":break;case"center-bottom":y+=d.offsetHeight/2;break;case"bottom-bottom":y+=d.offsetHeight;break;case"top-center":y+=A/2;break;case"bottom-center":y+=A/2+d.offsetHeight;break;case"center-center":y+=A/2+d.offsetHeight/2;break;case"top-top":y+=A;break;case"bottom-top":y+=d.offsetHeight+A;break;case"center-top":y+=d.offsetHeight/2+A}return P.anchorPlacement||P.offset||isNaN(m)||(b=m),y+b};r.default=h},function(e,r){Object.defineProperty(r,"__esModule",{value:!0});var s=function(o){for(var a=0,l=0;o&&!isNaN(o.offsetLeft)&&!isNaN(o.offsetTop);)a+=o.offsetLeft-(o.tagName!="BODY"?o.scrollLeft:0),l+=o.offsetTop-(o.tagName!="BODY"?o.scrollTop:0),o=o.offsetParent;return{top:l,left:a}};r.default=s},function(e,r){Object.defineProperty(r,"__esModule",{value:!0});var s=function(o){return o=o||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(o,function(a){return{node:a}})};r.default=s}])})})(Or)),Or.exports}var fd=dd();const ua=rh(fd);function md(n){return Bt({attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{id:"Lock"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{d:"M17.44,9.33h-1.1V6.4a4.34,4.34,0,0,0-8.68,0V9.33H6.56a2.5,2.5,0,0,0-2.5,2.5v7.61a2.507,2.507,0,0,0,2.5,2.5H17.44a2.507,2.507,0,0,0,2.5-2.5V11.83A2.5,2.5,0,0,0,17.44,9.33ZM8.66,6.4a3.34,3.34,0,0,1,6.68,0V9.33H8.66ZM18.94,19.44a1.511,1.511,0,0,1-1.5,1.5H6.56a1.511,1.511,0,0,1-1.5-1.5V11.83a1.5,1.5,0,0,1,1.5-1.5H17.44a1.5,1.5,0,0,1,1.5,1.5Z"},child:[]},{tag:"path",attr:{d:"M13,14.95a.984.984,0,0,1-.5.86v1.5a.5.5,0,0,1-1,0v-1.5a.984.984,0,0,1-.5-.86,1,1,0,0,1,2,0Z"},child:[]}]}]}]})(n)}function pd(n){return Bt({attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{id:"Unlock"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{d:"M17.44,9.33h-1.1c0-.97.01-1.95,0-2.92A4.343,4.343,0,0,0,8.36,4.04c-.36.53.51,1.03.87.5a3.365,3.365,0,0,1,5.23-.39c1.04,1.11.88,2.57.88,3.96V9.33H6.56a2.5,2.5,0,0,0-2.5,2.5v7.61a2.507,2.507,0,0,0,2.5,2.5H17.44a2.507,2.507,0,0,0,2.5-2.5V11.83A2.5,2.5,0,0,0,17.44,9.33Zm1.5,10.11a1.511,1.511,0,0,1-1.5,1.5H6.56a1.511,1.511,0,0,1-1.5-1.5V11.83a1.5,1.5,0,0,1,1.5-1.5H17.44a1.5,1.5,0,0,1,1.5,1.5Z"},child:[]},{tag:"path",attr:{d:"M13,14.95a.984.984,0,0,1-.5.86v1.5a.5.5,0,0,1-1,0v-1.5a.984.984,0,0,1-.5-.86,1,1,0,0,1,2,0Z"},child:[]}]}]}]})(n)}const gd="_cover_srg9e_1",yd={cover:gd},_d="/assets/initial-DC1ph_th.webp",vd=({name:n,isPlaying:t,setOpenMainPage:e,setIsPlaying:r,setScrollBehavior:s})=>{const o=a=>{a.preventDefault(),r(!0),setTimeout(()=>{e(!0),s(!0),document.documentElement.requestFullscreen()},1500)};return _.jsx("section",{className:"position-relative text-center cover",style:{height:"100dvh"},children:_.jsxs("div",{className:`${yd.cover} d-flex flex-column justify-content-center align-items-center h-100 textPrime`,children:[_.jsx("img",{src:_d,className:"w-25 mb-4",alt:"initial","data-aos":"fade-up","data-aos-duration":"3000"}),_.jsxs("div",{style:{zIndex:2},children:[_.jsx("p",{className:"cormorantGaramond mb-0 fw-semibold fs-5","data-aos":"zoom-in-down","data-aos-duration":"2000",children:"The Wedding of"}),_.jsx("p",{className:"vidaloka my-3",style:{fontSize:"2rem",letterSpacing:"0.2rem"},"data-aos":"fade-up-right","data-aos-duration":"3000",children:"Anonim & Anonim"})]}),_.jsx("div",{className:"px-5 pb-3 rounded-3 andada",style:{fontSize:"0.72rem",zIndex:2},children:_.jsxs("div",{className:"","data-aos":"fade-zoom-in","data-aos-duration":"3000","data-aos-delay":"1400",children:[_.jsx("p",{className:"mb-0",children:"Kepada yang terhormat"}),_.jsx("p",{className:"mb-0",children:"Bapak/Ibu/Saudara/i"}),_.jsx("p",{className:"my-1 mb-0 mt-1 fs-4 py-4",children:n})]})}),_.jsxs("button",{className:"shadow-lg bgButtonPrime border-0 d-flex flex-row align-items-center gap-2 text-black cormorantG py-1 px-3 text-white",type:"button",onClick:o,style:{zIndex:2,fontSize:"1.1rem"},"data-aos":"fade-up","data-aos-duration":"1800",children:[t?_.jsx(pd,{className:"fw-bold"}):_.jsx(md,{className:"fw-bold"})," ",_.jsx("p",{className:"mb-0",children:"Buka Undangan"})]})]})})},wd="/assets/surah-CidsE2Ta.png",Ed="_bgSurah_sgmri_1",bd="_paddingPhone_sgmri_7",Td="_photoSurah_sgmri_17",Bs={bgSurah:Ed,paddingPhone:bd,photoSurah:Td},Id=()=>_.jsx("section",{style:{zIndex:5,position:"relative"},className:`py-4 ${Bs.bgSurah}`,children:_.jsx("div",{className:`${Bs.paddingPhone}`,children:_.jsxs("div",{className:"d-flex flex-column justify-content-center align-items-center py-4",children:[_.jsx("img",{className:`w-50 rounded-circle mx-auto mb-4 ${Bs.photoSurah}`,"data-aos":"flip-left","data-aos-easing":"ease-out-cubic","data-aos-duration":"2000",src:wd,alt:"",srcset:"",style:{backdropFilter:"blur(0.5px)",borderColor:"rgba(91, 20, 21, 0.9)",borderWidth:"3px",borderStyle:"solid",borderSpacing:"2px"}}),_.jsxs("div",{className:"px-sm-5 text-center textPrime",children:[_.jsx("p",{className:"caudex","data-aos":"zoom-in","data-aos-duration":"2500",children:'"Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir."'}),_.jsx("p",{className:"caudex mb-0 fs-5","data-aos":"fade-up","data-aos-duration":"2900",children:"QS. Ar-Rum Ayat 21"})]})]})})}),Ad="/assets/bride-lAHqQSV5.png",xd="/assets/groom-C2yf9Htw.png",Sd="/assets/dan-DY0kz4ah.png";function ha(n){return Bt({attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7ZM9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12Z",fill:"currentColor"},child:[]},{tag:"path",attr:{d:"M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z",fill:"currentColor"},child:[]},{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M5 1C2.79086 1 1 2.79086 1 5V19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5C23 2.79086 21.2091 1 19 1H5ZM19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z",fill:"currentColor"},child:[]}]})(n)}const Rd=()=>_.jsx("section",{style:{zIndex:5,position:"relative"},className:"py-4 bgCouple",id:"couple",children:_.jsx("div",{className:"container",children:_.jsxs("div",{className:"px-1",children:[_.jsx("p",{className:"bohemeFloral text-center fw-bold w-100 mx-auto textPrime mb-3",style:{fontSize:"3rem"},"data-aos":"fade-up","data-aos-easing":"ease-in","data-aos-duration":"2000",children:"Bride & Groom"}),_.jsxs("div",{className:"d-flex flex-column justify-content-center align-items-center py-4",children:[_.jsxs("div",{className:"bride",children:[_.jsx("img",{className:"w-50",src:Ad,alt:"bride",style:{borderRadius:"4rem 0.6rem 0.6rem 0.6rem ",borderColor:"rgba(91, 20, 21, 0.9)",borderWidth:"3px",borderStyle:"solid",borderSpacing:"2px"},"data-aos":"zoom-in","data-aos-duration":"3000"}),_.jsxs("div",{children:[_.jsx("p",{className:"bohemeFloral mb-0 fw-semibold ps-5 pb-3 textPrime",style:{fontSize:"2.6rem",marginTop:"-1.5rem"},children:"Anom"}),_.jsx("p",{className:"fraunces w-50 mb-0 textPrime",style:{lineHeight:"1",fontSize:"2rem"},children:"Anomnim A ininimnin"}),_.jsxs("div",{className:"pt-3 montserrat fw-semibold",style:{fontSize:"0.87rem"},children:[_.jsx("p",{className:"mb-0","data-aos":"fade-up","data-aos-duration":"3000",children:"Putri ke-21 dari:"}),_.jsx("p",{className:"mb-0","data-aos":"fade-up","data-aos-duration":"3000",children:"Bapak Micky Ahmad"}),_.jsx("p",{"data-aos":"fade-up","data-aos-duration":"3000",children:"& Ibu Hanifah"}),_.jsx("a",{href:"https://www.instagram.com/ikhtiar_r/",target:"__blank",className:"d-flex p-2 rounded-circle justify-content-center align-items-center bgButtonPrime","data-aos":"fade-left","data-aos-duration":"2800",style:{width:"40px",height:"40px"},children:_.jsx(ha,{className:"fs-5 text-white shadow-lg"})})]})]})]}),_.jsx("div",{className:"my-5 text-center bohemeFloral fw-semibold",children:_.jsx("img",{height:50,src:Sd,alt:"&",srcset:"","data-aos":"flip-up","data-aos-duration":"2100"})}),_.jsxs("div",{className:"groom text-end",children:[_.jsx("img",{className:"w-50",src:xd,alt:"bride",style:{borderRadius:"0.6rem 0.6rem 4rem 0.6rem ",borderColor:"rgba(91, 20, 21, 0.9)",borderWidth:"3px",borderStyle:"solid",borderSpacing:"2px"},"data-aos":"zoom-in","data-aos-duration":"2000"}),_.jsxs("div",{className:"",children:[_.jsx("p",{className:"bohemeFloral mb-0 fw-semibold pe-5 pb-3 textPrime",style:{fontSize:"2.6rem",marginTop:"-1.5rem"},children:"Anom"}),_.jsxs("p",{className:"fraunces mb-0 textPrime",style:{lineHeight:"1",fontSize:"2rem"},children:["Anomnim A ",_.jsx("br",{}),"ininimnin"]}),_.jsxs("div",{className:"pt-3 montserrat fw-semibold ",style:{fontSize:"0.87rem"},children:[_.jsx("p",{className:"mb-0","data-aos":"fade-up","data-aos-duration":"3000",children:"Putri ke-21 dari:"}),_.jsx("p",{className:"mb-0","data-aos":"fade-up","data-aos-duration":"3000",children:"Bapak Micky Ahmad"}),_.jsx("p",{"data-aos":"fade-up","data-aos-duration":"3000",children:"& Ibu Hanifah"}),_.jsx("a",{href:"https://www.instagram.com/ikhtiar_r/",target:"__blank",className:"d-flex p-2 rounded-circle justify-content-center align-items-center bgButtonPrime float-end","data-aos":"fade-right","data-aos-duration":"2800",style:{width:"40px",height:"40px"},children:_.jsx(ha,{className:"fs-5 text-white shadow-lg"})})]})]})]})]})]})})}),Cd="_borderStory_1ym1v_1",Pd={borderStory:Cd},Rr=[{id:1,title:"Cahaya Pertama - Pertemuan",content:"Tepat di sekolah itu, dua jiwa asing dipertemukan dalam satu ruang kelas. Dari tatap sederhana dan percakapan kecil, semesta diam-diam merajut benang merah yang menyatukan kami. Hari-hari belajar bersama mendekatkan jarak yang tadinya jauh, hingga tanpa sadar, hati kami mulai saling mengenal. Seperti bintang kecil di langit malam, tampak sederhana dari kejauhan. Namun sinarnya nyata. Pertemuan itu menjadi cahaya pertama dalam kisah panjang yang menunggu."},{id:2,title:"Langkah Awal - Pendekatan",content:"Setelah pertemuan pertama yang menggetarkan, langkah-langkah kecil mulai diambil untuk mendekatkan diri. Setiap senyuman dan sapaan menjadi jembatan yang menghubungkan hati kami. Dalam setiap momen bersama, kami menemukan kenyamanan dan kebahagiaan yang tak terduga. Seperti dua aliran sungai yang bertemu, kami mulai mengalir bersama dalam harmoni yang indah."},{id:3,title:"Melewati Badai - Tantangan",content:"Setiap kisah cinta pasti menghadapi tantangan, dan kami pun tidak terkecuali. Namun, dengan saling percaya dan mendukung, kami mampu melewati badai yang datang. Setiap rintangan menjadi pelajaran berharga yang memperkuat ikatan kami. Seperti pohon yang tumbuh kokoh di tengah angin kencang, cinta kami semakin kuat dan teguh."},{id:4,title:"Menyatu - Komitmen",content:"Setelah melewati berbagai tantangan, kami memutuskan untuk menyatukan hati dalam sebuah komitmen yang tulus. Setiap janji yang diucapkan adalah cermin dari cinta yang mendalam dan kesungguhan hati. Seperti dua bintang yang bersinar bersama di langit malam, kami berjanji untuk selalu mendukung dan mencintai satu sama lain, apapun yang terjadi."},{id:5,title:"Menuju Abadi - Pernikahan",content:"Hari yang dinanti akhirnya tiba, di mana kami mengikat janji suci di hadapan Tuhan dan orang-orang tercinta. Setiap detik dalam momen itu dipenuhi dengan kebahagiaan dan haru yang tak terlukiskan. Seperti dua jiwa yang bersatu dalam harmoni, kami melangkah menuju kehidupan baru sebagai pasangan suami istri, siap menghadapi segala suka dan duka bersama."},{id:6,title:"Kisah Kita - Masa Depan",content:"Dengan cinta yang telah teruji oleh waktu, kami menatap masa depan dengan penuh harapan dan keyakinan. Setiap langkah yang diambil adalah bagian dari perjalanan panjang yang akan kami lalui bersama. Seperti bintang yang terus bersinar di langit malam, cinta kami akan terus tumbuh dan berkembang, menciptakan kisah indah yang tak terlupakan."}];function da(n){return Bt({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"},child:[]}]})(n)}function Vd(n){return Bt({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M17.59 18 19 16.59 14.42 12 19 7.41 17.59 6l-6 6z"},child:[]},{tag:"path",attr:{d:"m11 18 1.41-1.41L7.83 12l4.58-4.59L11 6l-6 6z"},child:[]}]})(n)}function Nd(n){return Bt({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M6.41 6 5 7.41 9.58 12 5 16.59 6.41 18l6-6z"},child:[]},{tag:"path",attr:{d:"m13 6-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z"},child:[]}]})(n)}const kd=()=>{const[n,t]=L.useState(0);return _.jsx("section",{id:"stories",className:" text-white h-100 d-flex justify-content-center align-items-center bgStory position-relative",style:{zIndex:5,position:"relative"},children:_.jsxs("div",{className:`container ${Pd.borderStory} rounded-5 mx-3 px-4 position-relative overflow-x-hidden`,"data-aos":"flip-left","data-aos-duration":"2000",style:{maxHeight:"80vh",overflowY:"auto"},children:[Rr.map((e,r)=>_.jsxs("div",{className:`my-5 pb-5 ${n===r?"":"d-none"}`,children:[_.jsx("h2",{className:"mb-4 text-center",children:e.title}),_.jsx("p",{className:"text-wrap pb-3",style:{textAlign:"justify"},children:e.content})]},e.id)),_.jsxs("div",{className:"position-absolute bottom-0 row w-100 pe-3 pb-5",children:[_.jsx("p",{className:`col-6 ${n===0?"opacity-0 disabled":"blinkingIcon"} `,onClick:()=>t(e=>e===0?0:e-1),children:_.jsx(Vd,{size:30})}),_.jsx("p",{className:`col-6 text-end ${n===Rr.length-1?"opacity-0 disabled":"blinkingIcon"} `,onClick:()=>t(e=>e===Rr.length?Rr.length-1:e+1),children:_.jsx(Nd,{size:30})})]})]})})},Dd=()=>{const[n,t]=L.useState({days:null,hours:null,minutes:null,seconds:null}),[e,r]=L.useState(!1);return L.useEffect(()=>{const s=new Date("2026-09-28T19:00:00");setInterval(()=>{const a=s-new Date,l=Math.floor(a/(1e3*60*60*24)),h=Math.floor(a%(1e3*60*60*24)/(1e3*60*60)),d=Math.floor(a%(1e3*60*60)/(1e3*60)),m=Math.floor(a%(1e3*60)/1e3);if(t({days:l,hours:h,minutes:d,seconds:m}),a<=0)return r(!0)},1e3)},[]),_.jsx("section",{id:"date",className:"border-0 position-relative",children:_.jsx("div",{className:"justify-content-start",children:e?_.jsx("p",{children:"Acara Sudah Selesai"}):_.jsxs("div",{className:"row px-3",children:[_.jsx("div",{className:"col-3","data-aos":"zoom-in-left","data-aos-delay":"800","data-aos-duration":"2600",children:_.jsxs("div",{className:"analogue text-center d-flex align-items-center flex-column rounded-2 shadow-sm",children:[_.jsx("p",{className:" fs-5 pt-1 mb-0",children:n.days}),_.jsx("p",{className:"m-0 pb-1",style:{fontSize:"0.7rem"},children:"Hari"})]})}),_.jsx("div",{className:"col-3","data-aos":"zoom-in-left","data-aos-delay":"500","data-aos-duration":"3000",children:_.jsxs("div",{className:"analogue text-center d-flex align-items-center flex-column rounded-2 shadow-sm",children:[_.jsx("p",{className:" fs-5 pt-1 mb-0",children:n.hours}),_.jsx("p",{className:"m-0 pb-1",style:{fontSize:"0.7rem"},children:"Jam"})]})}),_.jsx("div",{className:"col-3","data-aos":"zoom-in-right","data-aos-delay":"500","data-aos-duration":"3000",children:_.jsxs("div",{className:"analogue text-center d-flex align-items-center flex-column rounded-2 shadow-sm",children:[_.jsx("p",{className:" fs-5 pt-1 mb-0",children:n.minutes}),_.jsx("p",{className:"m-0 pb-1",style:{fontSize:"0.7rem"},children:"Menit"})]})}),_.jsx("div",{className:"col-3","data-aos":"zoom-in-right","data-aos-delay":"800","data-aos-duration":"2600",children:_.jsxs("div",{className:"analogue text-center d-flex align-items-center flex-column rounded-2 shadow-sm",children:[_.jsx("p",{className:" fs-5 pt-1 mb-0",children:n.seconds}),_.jsx("p",{className:"m-0 pb-1",style:{fontSize:"0.7rem"},children:"Detik"})]})})]})})})},Md="_bgReminder_1fvb2_1",Od={bgReminder:Md},jd=()=>_.jsx("section",{className:"position-relative",children:_.jsx("div",{className:`${Od.bgReminder} py-5`,children:_.jsxs("div",{className:"container position-relative text-white my-5",style:{zIndex:10},children:[_.jsx("h2",{className:"text-center bohemeFloral pb-3 fw-bold",style:{fontSize:"2.7rem"},"data-aos":"zoom-in","data-aos-duration":"2500",children:"Save The Date"}),_.jsx(Dd,{})]})})}),Ld="_divider_341ep_9",Fd="_bgButton_341ep_37",Bd="_bg_341ep_37",Ud="_detail_341ep_81",zd="_borderEvents_341ep_89",$d="_openingContainer_341ep_97",Rt={divider:Ld,bgButton:Fd,bg:Bd,detail:Ud,borderEvents:zd,openingContainer:$d},qd=()=>_.jsx("section",{children:_.jsxs("div",{className:"bgStory",children:[_.jsx("div",{className:"py-5 px-4",children:_.jsx("div",{className:`text-center position-relative mx-2 text-white ${Rt.openingContainer} mx-auto`,children:_.jsxs("div",{className:`${Rt.bg} px-4 rounded-pill ${Rt.borderEvents}`,style:{paddingTop:"6rem",paddingBottom:"6rem"},children:[_.jsxs("div",{className:`text-center tetx-white ${Rt.detail} textPrime`,children:[_.jsx("h2",{className:"vidaloka mb-0 fw-medium",style:{fontSize:"2.3rem"},"data-aos":"zoom-in-up","data-aos-duration":"3000",children:"Akad Nikah"}),_.jsx("p",{className:"caudex mb-2","data-aos":"zoom-in-up","data-aos-duration":"3000",children:"Minggu"}),_.jsx("p",{className:"analogue mb-0",style:{fontSize:"2.5rem"},"data-aos":"zoom-in-up","data-aos-duration":"3000",children:"29"}),_.jsx("p",{className:"caudex mb-0","data-aos":"zoom-in-down","data-aos-duration":"2000","data-aos-delay":"1000",children:"Desember 2026"}),_.jsx("p",{className:"caudex mb-0","data-aos":"zoom-in-down","data-aos-duration":"2000","data-aos-delay":"1000",children:"10.00 WIB - Selesai"})]}),_.jsx("div",{className:`${Rt.divider} textPrime d-flex gap-1 text-center mx-4 py-4 justify-content-center align-items-center position-relative`,style:{zIndex:10},"data-aos":"zoom-in","data-aos-duration":"3000","data-aos-delay":"1500","data-aos-easing":"ease-out-cubic",children:_.jsx("span",{children:_.jsx(da,{size:25,className:""})})}),_.jsxs("div",{className:`mb-5 ${Rt.detail} caudex`,children:[_.jsxs("div",{className:`${Rt.detail} textPrime`,children:[_.jsx("h3",{className:"text-center fw-medium",style:{zIndex:10},"data-aos":"zoom-in-up","data-aos-duration":"3000",children:"Sportorium UMY"}),_.jsx("p",{style:{zIndex:10},"data-aos":"zoom-in-up","data-aos-duration":"3000",children:"Jl. Brawijaya Ngebel Tamantirto Kec. Kasihan, Kabupaten Bantul, Daerah Istimewa Yogyakarta"})]}),_.jsx("button",{className:`btn rounded-pill px-4 text-white fw-medium ${Rt.bgButton}`,type:"button","data-aos":"zoom-in-down","data-aos-duration":"3000",children:"Lihat Lokasi"})]})]})})}),_.jsx("div",{className:"py-5 px-4",children:_.jsx("div",{className:`text-center position-relative mx-2 text-white  ${Rt.openingContainer} mx-auto`,children:_.jsxs("div",{className:`${Rt.bg} px-4 rounded-pill ${Rt.borderEvents}`,style:{paddingTop:"6rem",paddingBottom:"6rem"},children:[_.jsxs("div",{className:`text-center tetx-white ${Rt.detail} textPrime`,children:[_.jsx("h2",{className:"vidaloka mb-0 fw-medium",style:{fontSize:"2.3rem"},"data-aos":"zoom-in-up","data-aos-duration":"3000",children:"Resepsi"}),_.jsx("p",{className:"caudex mb-2","data-aos":"zoom-in-up","data-aos-duration":"3000",children:"Senin"}),_.jsx("p",{className:"analogue mb-0",style:{fontSize:"2.5rem"},"data-aos":"zoom-in-up","data-aos-duration":"3000",children:"30"}),_.jsx("p",{className:"caudex mb-0","data-aos":"zoom-in-down","data-aos-duration":"2000","data-aos-delay":"1000",children:"Desember 2026"}),_.jsx("p",{className:"caudex mb-0","data-aos":"zoom-in-down","data-aos-duration":"2000","data-aos-delay":"1000",children:"19.00 WIB - Selesai"})]}),_.jsx("div",{className:`${Rt.divider} textPrime d-flex gap-1 text-center mx-4 py-4 justify-content-center align-items-center position-relative`,style:{zIndex:10},"data-aos":"zoom-in","data-aos-duration":"3000","data-aos-delay":"1500","data-aos-easing":"ease-out-cubic",children:_.jsx("span",{children:_.jsx(da,{size:25,className:""})})}),_.jsxs("div",{className:`mb-5 ${Rt.detail} caudex`,children:[_.jsxs("div",{className:`${Rt.detail} textPrime`,children:[_.jsx("h3",{className:"text-center fw-medium",style:{zIndex:10},"data-aos":"zoom-in-up","data-aos-duration":"3000",children:"Sportorium UMY"}),_.jsx("p",{style:{zIndex:10},"data-aos":"zoom-in-up","data-aos-duration":"3000",children:"Jl. Brawijaya Ngebel Tamantirto Kec. Kasihan, Kabupaten Bantul, Daerah Istimewa Yogyakarta"})]}),_.jsx("button",{className:`btn rounded-pill px-4 text-white fw-medium ${Rt.bgButton}`,type:"button","data-aos":"zoom-in-down","data-aos-duration":"3000",children:"Lihat Lokasi"})]})]})})})]})}),Hd="/assets/1-BVFM46Dr.png",Wd="_bgDark50_u90f1_1",Gd={bgDark50:Wd};function Kd(n){return Bt({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3 645.3 585.4 645.3 512 585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9 717.1 398.5 717.1 512 625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9 47.9 21.4 47.9 47.9a47.84 47.84 0 0 1-47.9 47.9z"},child:[]}]})(n)}function Qd(n){return Bt({attr:{viewBox:"0 0 1024 1024",fill:"currentColor",fillRule:"evenodd"},child:[{tag:"path",attr:{d:"M799.855 166.312c.023.007.043.018.084.059l57.69 57.69c.041.041.052.06.059.084a.118.118 0 0 1 0 .069c-.007.023-.018.042-.059.083L569.926 512l287.703 287.703c.041.04.052.06.059.083a.118.118 0 0 1 0 .07c-.007.022-.018.042-.059.083l-57.69 57.69c-.041.041-.06.052-.084.059a.118.118 0 0 1-.069 0c-.023-.007-.042-.018-.083-.059L512 569.926 224.297 857.629c-.04.041-.06.052-.083.059a.118.118 0 0 1-.07 0c-.022-.007-.042-.018-.083-.059l-57.69-57.69c-.041-.041-.052-.06-.059-.084a.118.118 0 0 1 0-.069c.007-.023.018-.042.059-.083L454.073 512 166.371 224.297c-.041-.04-.052-.06-.059-.083a.118.118 0 0 1 0-.07c.007-.022.018-.042.059-.083l57.69-57.69c.041-.041.06-.052.084-.059a.118.118 0 0 1 .069 0c.023.007.042.018.083.059L512 454.073l287.703-287.702c.04-.041.06-.052.083-.059a.118.118 0 0 1 .07 0Z"},child:[]}]})(n)}const Yd=({isPhotoClicked:n,setisPhotoClicked:t,clickedPhoto:e})=>{const r=()=>{t(!1)};return _.jsx(_.Fragment,{children:n?_.jsxs("div",{className:`${Gd.bgDark50} w-100 vh-100 d-flex justify-content-center  align-items-center top-0 position-fixed`,style:{zIndex:10},children:[_.jsx("img",{src:e,className:"w-75 position-relative",alt:"prewedding"}),_.jsx("button",{className:"bg-transparent trasnlate-middle-y fs-4 trasnlate-middle-x end-0 top-0 position-absolute me-3 mt-3 rounded-circle px-3 pb-1 text-white border-0 fw-bold",onClick:r,style:{zIndex:10},children:_.jsx(Qd,{className:"text-white"})})]}):null})},Xd="/assets/2-C4BKUJmI.png",Jd="/assets/3-CbsOETjV.png",Zd="/assets/4-D-7NpE7G.png",tf="/assets/5-BN7cmMjT.png",Uc="/assets/6-Qc-5JlAd.png",fa=[{id:1,image:Xd},{id:2,image:Jd},{id:3,image:Zd},{id:4,image:tf},{id:5,image:Uc}],ef=({isPhotoClicked:n,setisPhotoClicked:t,clickedPhoto:e,setClickedPhoto:r})=>{const s=o=>{t(!0),r(o.target.src)};return _.jsxs(_.Fragment,{children:[_.jsx(Yd,{isPhotoClicked:n,setisPhotoClicked:t,clickedPhoto:e}),_.jsx("section",{className:"bgGallery py-4",children:_.jsxs("div",{className:"container",children:[_.jsx("p",{className:"text-center bohemeFloral fw-semibold textPrime",style:{fontSize:"2.5rem"},children:"Our Moments"}),_.jsx("div",{className:"row mb-4",children:_.jsx("img",{className:"rounded-4",src:Hd,alt:""})}),_.jsx("div",{className:"row px-2 g-4",children:fa.map((o,a)=>_.jsx("div",{className:` ${a===fa.length-1?"":"col-6"} `,children:_.jsx("img",{className:"w-100 rounded-4",src:o.image,onClick:s,"data-aos":"zoom-in","data-aos-duration":"2700","data-aos-delay":a})},o.id))})]})})]})},nf="/assets/bca-BdVPIplI.png",rf="/assets/dana-pUfsCCrp.png",sf="/assets/mandiri-du4H-EzL.png",of=[{id:1,provider:"BCA",owner:"Anonim",number:"1234567890",img:nf},{id:2,provider:"DANA",owner:"Anonim",number:"0987654321",img:rf},{id:3,provider:"Mandiri",owner:"Anonim",number:"081234567890",img:sf}],af="/assets/code-BnKDyrah.png",cf="_bgGallery_1hhw4_3",lf={bgGallery:cf},uf=()=>{const[n,t]=L.useState(!1),e=()=>{t(!n)};return _.jsx("section",{className:"bgGift",children:_.jsx("div",{className:"container py-5",children:_.jsxs("div",{className:`${lf.bgGallery} bgGallery text-center container rounded-4 p-4 mx-auto`,style:{backgroundSize:"130%"},children:[_.jsxs("div",{children:[_.jsx("p",{className:"vidaloka fs-1","data-aos":"zoom-in-up","data-aos-duration":"3000",children:"Wedding Gift"}),_.jsx("p",{className:"caudex","data-aos":"zoom-in-down","data-aos-duration":"3000",children:"Doa restu Anda merupakan karunia yang sangat berarti bagi kami, dan jika memberi adalah ungkapan tanda kasih, Anda dapat memberi kado secara cashless."}),_.jsx("button",{className:"btn text-white bgButtonPrime rounded-pill px-4 d-flex justify-content-center align-items-center mx-auto",onClick:e,"data-aos":"zoom-in","data-aos-duration":"3000","data-aos-delay":"500",children:_.jsx("span",{children:"Klik Disini"})})]}),n&&_.jsx("div",{children:of.map((r,s)=>_.jsxs("div",{className:"text-center my-4 cards px-3 py-4 rounded-4","data-aos":"zoom-in","data-aos-duration":"2500","data-aos-delay":s*200,children:[_.jsx("div",{className:"d-flex justify-content-end",children:_.jsx("img",{className:"w-25",src:r.img,alt:""})}),_.jsxs("div",{className:"d-flex flex-column py-2 text-start",children:[_.jsx("img",{className:"",style:{width:"30px"},src:af,alt:""}),_.jsx("p",{className:"mb-0",children:r.owner}),_.jsx("p",{children:r.number})]}),_.jsx("button",{role:"button",className:"d-flex flex-row gap-1 justify-content-center btn border border-2 w-50 ms-auto shadow bgButton",children:"copy"})]},s))})]})})})},hf=()=>{};var ma={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zc=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},df=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[e++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[e++],a=n[e++],l=n[e++],h=((s&7)<<18|(o&63)<<12|(a&63)<<6|l&63)-65536;t[r++]=String.fromCharCode(55296+(h>>10)),t[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[e++],a=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return t.join("")},$c={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],a=s+1<n.length,l=a?n[s+1]:0,h=s+2<n.length,d=h?n[s+2]:0,m=o>>2,y=(o&3)<<4|l>>4;let b=(l&15)<<2|d>>6,A=d&63;h||(A=64,a||(b=64)),r.push(e[m],e[y],e[b],e[A])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(zc(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):df(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=e[n.charAt(s++)],l=s<n.length?e[n.charAt(s)]:0;++s;const d=s<n.length?e[n.charAt(s)]:64;++s;const y=s<n.length?e[n.charAt(s)]:64;if(++s,o==null||l==null||d==null||y==null)throw new ff;const b=o<<2|l>>4;if(r.push(b),d!==64){const A=l<<4&240|d>>2;if(r.push(A),y!==64){const P=d<<6&192|y;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class ff extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const mf=function(n){const t=zc(n);return $c.encodeByteArray(t,!0)},Gr=function(n){return mf(n).replace(/\./g,"")},pf=function(n){try{return $c.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yf=()=>gf().__FIREBASE_DEFAULTS__,_f=()=>{if(typeof process>"u"||typeof ma>"u")return;const n=ma.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},vf=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&pf(n[1]);return t&&JSON.parse(t)},Ii=()=>{try{return hf()||yf()||_f()||vf()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},wf=n=>Ii()?.emulatorHosts?.[n],Ef=n=>{const t=wf(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},qc=()=>Ii()?.config;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ai(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Tf(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function If(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Gr(JSON.stringify(e)),Gr(JSON.stringify(a)),""].join(".")}const Wn={};function Af(){const n={prod:[],emulator:[]};for(const t of Object.keys(Wn))Wn[t]?n.emulator.push(t):n.prod.push(t);return n}function xf(n){let t=document.getElementById(n),e=!1;return t||(t=document.createElement("div"),t.setAttribute("id",n),e=!0),{created:e,element:t}}let pa=!1;function Sf(n,t){if(typeof window>"u"||typeof document>"u"||!Ai(window.location.host)||Wn[n]===t||Wn[n]||pa)return;Wn[n]=t;function e(b){return`__firebase__banner__${b}`}const r="__firebase__banner",o=Af().prod.length>0;function a(){const b=document.getElementById(r);b&&b.remove()}function l(b){b.style.display="flex",b.style.background="#7faaf0",b.style.position="fixed",b.style.bottom="5px",b.style.left="5px",b.style.padding=".5em",b.style.borderRadius="5px",b.style.alignItems="center"}function h(b,A){b.setAttribute("width","24"),b.setAttribute("id",A),b.setAttribute("height","24"),b.setAttribute("viewBox","0 0 24 24"),b.setAttribute("fill","none"),b.style.marginLeft="-6px"}function d(){const b=document.createElement("span");return b.style.cursor="pointer",b.style.marginLeft="16px",b.style.fontSize="24px",b.innerHTML=" &times;",b.onclick=()=>{pa=!0,a()},b}function m(b,A){b.setAttribute("id",A),b.innerText="Learn more",b.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",b.setAttribute("target","__blank"),b.style.paddingLeft="5px",b.style.textDecoration="underline"}function y(){const b=xf(r),A=e("text"),P=document.getElementById(A)||document.createElement("span"),N=e("learnmore"),V=document.getElementById(N)||document.createElement("a"),$=e("preprendIcon"),q=document.getElementById($)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(b.created){const B=b.element;l(B),m(V,N);const nt=d();h(q,$),B.append(q,P,V,nt),document.body.appendChild(B)}o?(P.innerText="Preview backend disconnected.",q.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(q.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,P.innerText="Preview backend running in this workspace."),P.setAttribute("id",A)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",y):y()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rf(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Cf(){const n=Ii()?.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Pf(){return!Cf()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Vf(){try{return typeof indexedDB=="object"}catch{return!1}}function Nf(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{t(s.error?.message||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kf="FirebaseError";class _n extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=kf,Object.setPrototypeOf(this,_n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Hc.prototype.create)}}class Hc{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],a=o?Df(o,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new _n(s,l,r)}}function Df(n,t){return n.replace(Mf,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const Mf=/\{\$([^}]+)}/g;function Kr(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const o=n[s],a=t[s];if(ga(o)&&ga(a)){if(!Kr(o,a))return!1}else if(o!==a)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function ga(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(n){return n&&n._delegate?n._delegate:n}class Jn{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fe="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new bf;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){const e=this.normalizeInstanceIdentifier(t?.identifier),r=t?.optional??!1;if(this.isInitialized(e)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:e})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Lf(t))try{this.getOrInitializeService({instanceIdentifier:Fe})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(t=Fe){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Fe){return this.instances.has(t)}getOptions(t=Fe){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);r===l&&a.resolve(s)}return s}onInit(t,e){const r=this.normalizeInstanceIdentifier(e),s=this.onInitCallbacks.get(r)??new Set;s.add(t),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&t(o,r),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const s of r)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:jf(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Fe){return this.component?this.component.multipleInstances?t:Fe:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function jf(n){return n===Fe?void 0:n}function Lf(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Of(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Q;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Q||(Q={}));const Bf={debug:Q.DEBUG,verbose:Q.VERBOSE,info:Q.INFO,warn:Q.WARN,error:Q.ERROR,silent:Q.SILENT},Uf=Q.INFO,zf={[Q.DEBUG]:"log",[Q.VERBOSE]:"log",[Q.INFO]:"info",[Q.WARN]:"warn",[Q.ERROR]:"error"},$f=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=zf[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Wc{constructor(t){this.name=t,this._logLevel=Uf,this._logHandler=$f,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Q))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Bf[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Q.DEBUG,...t),this._logHandler(this,Q.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Q.VERBOSE,...t),this._logHandler(this,Q.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Q.INFO,...t),this._logHandler(this,Q.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Q.WARN,...t),this._logHandler(this,Q.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Q.ERROR,...t),this._logHandler(this,Q.ERROR,...t)}}const qf=(n,t)=>t.some(e=>n instanceof e);let ya,_a;function Hf(){return ya||(ya=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Wf(){return _a||(_a=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Gc=new WeakMap,ei=new WeakMap,Kc=new WeakMap,Us=new WeakMap,xi=new WeakMap;function Gf(n){const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{e(be(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&Gc.set(e,n)}).catch(()=>{}),xi.set(t,n),t}function Kf(n){if(ei.has(n))return;const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{e(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});ei.set(n,t)}let ni={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return ei.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Kc.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return be(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function Qf(n){ni=n(ni)}function Yf(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(zs(this),t,...e);return Kc.set(r,t.sort?t.sort():[t]),be(r)}:Wf().includes(n)?function(...t){return n.apply(zs(this),t),be(Gc.get(this))}:function(...t){return be(n.apply(zs(this),t))}}function Xf(n){return typeof n=="function"?Yf(n):(n instanceof IDBTransaction&&Kf(n),qf(n,Hf())?new Proxy(n,ni):n)}function be(n){if(n instanceof IDBRequest)return Gf(n);if(Us.has(n))return Us.get(n);const t=Xf(n);return t!==n&&(Us.set(n,t),xi.set(t,n)),t}const zs=n=>xi.get(n);function Jf(n,t,{blocked:e,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(n,t),l=be(a);return r&&a.addEventListener("upgradeneeded",h=>{r(be(a.result),h.oldVersion,h.newVersion,be(a.transaction),h)}),e&&a.addEventListener("blocked",h=>e(h.oldVersion,h.newVersion,h)),l.then(h=>{o&&h.addEventListener("close",()=>o()),s&&h.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const Zf=["get","getKey","getAll","getAllKeys","count"],tm=["put","add","delete","clear"],$s=new Map;function va(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if($s.get(t))return $s.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=tm.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Zf.includes(e)))return;const o=async function(a,...l){const h=this.transaction(a,s?"readwrite":"readonly");let d=h.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[e](...l),s&&h.done]))[0]};return $s.set(t,o),o}Qf(n=>({...n,get:(t,e,r)=>va(t,e)||n.get(t,e,r),has:(t,e)=>!!va(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(nm(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function nm(n){return n.getComponent()?.type==="VERSION"}const ri="@firebase/app",wa="0.14.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ue=new Wc("@firebase/app"),rm="@firebase/app-compat",sm="@firebase/analytics-compat",im="@firebase/analytics",om="@firebase/app-check-compat",am="@firebase/app-check",cm="@firebase/auth",lm="@firebase/auth-compat",um="@firebase/database",hm="@firebase/data-connect",dm="@firebase/database-compat",fm="@firebase/functions",mm="@firebase/functions-compat",pm="@firebase/installations",gm="@firebase/installations-compat",ym="@firebase/messaging",_m="@firebase/messaging-compat",vm="@firebase/performance",wm="@firebase/performance-compat",Em="@firebase/remote-config",bm="@firebase/remote-config-compat",Tm="@firebase/storage",Im="@firebase/storage-compat",Am="@firebase/firestore",xm="@firebase/ai",Sm="@firebase/firestore-compat",Rm="firebase",Cm="12.4.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const si="[DEFAULT]",Pm={[ri]:"fire-core",[rm]:"fire-core-compat",[im]:"fire-analytics",[sm]:"fire-analytics-compat",[am]:"fire-app-check",[om]:"fire-app-check-compat",[cm]:"fire-auth",[lm]:"fire-auth-compat",[um]:"fire-rtdb",[hm]:"fire-data-connect",[dm]:"fire-rtdb-compat",[fm]:"fire-fn",[mm]:"fire-fn-compat",[pm]:"fire-iid",[gm]:"fire-iid-compat",[ym]:"fire-fcm",[_m]:"fire-fcm-compat",[vm]:"fire-perf",[wm]:"fire-perf-compat",[Em]:"fire-rc",[bm]:"fire-rc-compat",[Tm]:"fire-gcs",[Im]:"fire-gcs-compat",[Am]:"fire-fst",[Sm]:"fire-fst-compat",[xm]:"fire-vertex","fire-js":"fire-js",[Rm]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qr=new Map,Vm=new Map,ii=new Map;function Ea(n,t){try{n.container.addComponent(t)}catch(e){ue.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function Yr(n){const t=n.name;if(ii.has(t))return ue.debug(`There were multiple attempts to register component ${t}.`),!1;ii.set(t,n);for(const e of Qr.values())Ea(e,n);for(const e of Vm.values())Ea(e,n);return!0}function Nm(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function km(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dm={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Te=new Hc("app","Firebase",Dm);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mm{constructor(t,e,r){this._isDeleted=!1,this._options={...t},this._config={...e},this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Jn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Te.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Om=Cm;function Qc(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r={name:si,automaticDataCollectionEnabled:!0,...t},s=r.name;if(typeof s!="string"||!s)throw Te.create("bad-app-name",{appName:String(s)});if(e||(e=qc()),!e)throw Te.create("no-options");const o=Qr.get(s);if(o){if(Kr(e,o.options)&&Kr(r,o.config))return o;throw Te.create("duplicate-app",{appName:s})}const a=new Ff(s);for(const h of ii.values())a.addComponent(h);const l=new Mm(e,r,a);return Qr.set(s,l),l}function jm(n=si){const t=Qr.get(n);if(!t&&n===si&&qc())return Qc();if(!t)throw Te.create("no-app",{appName:n});return t}function ln(n,t,e){let r=Pm[n]??n;e&&(r+=`-${e}`);const s=r.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${t}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ue.warn(a.join(" "));return}Yr(new Jn(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lm="firebase-heartbeat-database",Fm=1,Zn="firebase-heartbeat-store";let qs=null;function Yc(){return qs||(qs=Jf(Lm,Fm,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(Zn)}catch(e){console.warn(e)}}}}).catch(n=>{throw Te.create("idb-open",{originalErrorMessage:n.message})})),qs}async function Bm(n){try{const e=(await Yc()).transaction(Zn),r=await e.objectStore(Zn).get(Xc(n));return await e.done,r}catch(t){if(t instanceof _n)ue.warn(t.message);else{const e=Te.create("idb-get",{originalErrorMessage:t?.message});ue.warn(e.message)}}}async function ba(n,t){try{const r=(await Yc()).transaction(Zn,"readwrite");await r.objectStore(Zn).put(t,Xc(n)),await r.done}catch(e){if(e instanceof _n)ue.warn(e.message);else{const r=Te.create("idb-set",{originalErrorMessage:e?.message});ue.warn(r.message)}}}function Xc(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Um=1024,zm=30;class $m{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Hm(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ta();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:e}),this._heartbeatsCache.heartbeats.length>zm){const s=Wm(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(t){ue.warn(t)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ta(),{heartbeatsToSend:e,unsentEntries:r}=qm(this._heartbeatsCache.heartbeats),s=Gr(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return ue.warn(t),""}}}function Ta(){return new Date().toISOString().substring(0,10)}function qm(n,t=Um){const e=[];let r=n.slice();for(const s of n){const o=e.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),Ia(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),Ia(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class Hm{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Vf()?Nf().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Bm(this.app);return e?.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return ba(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return ba(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function Ia(n){return Gr(JSON.stringify({version:2,heartbeats:n})).length}function Wm(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let r=1;r<n.length;r++)n[r].date<e&&(e=n[r].date,t=r);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gm(n){Yr(new Jn("platform-logger",t=>new em(t),"PRIVATE")),Yr(new Jn("heartbeat",t=>new $m(t),"PRIVATE")),ln(ri,wa,n),ln(ri,wa,"esm2020"),ln("fire-js","")}Gm("");var Aa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ie,Jc;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(T,p){function w(){}w.prototype=p.prototype,T.F=p.prototype,T.prototype=new w,T.prototype.constructor=T,T.D=function(I,v,E){for(var g=Array(arguments.length-2),O=2;O<arguments.length;O++)g[O-2]=arguments[O];return p.prototype[v].apply(I,g)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(r,e),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,p,w){w||(w=0);const I=Array(16);if(typeof p=="string")for(var v=0;v<16;++v)I[v]=p.charCodeAt(w++)|p.charCodeAt(w++)<<8|p.charCodeAt(w++)<<16|p.charCodeAt(w++)<<24;else for(v=0;v<16;++v)I[v]=p[w++]|p[w++]<<8|p[w++]<<16|p[w++]<<24;p=T.g[0],w=T.g[1],v=T.g[2];let E=T.g[3],g;g=p+(E^w&(v^E))+I[0]+3614090360&4294967295,p=w+(g<<7&4294967295|g>>>25),g=E+(v^p&(w^v))+I[1]+3905402710&4294967295,E=p+(g<<12&4294967295|g>>>20),g=v+(w^E&(p^w))+I[2]+606105819&4294967295,v=E+(g<<17&4294967295|g>>>15),g=w+(p^v&(E^p))+I[3]+3250441966&4294967295,w=v+(g<<22&4294967295|g>>>10),g=p+(E^w&(v^E))+I[4]+4118548399&4294967295,p=w+(g<<7&4294967295|g>>>25),g=E+(v^p&(w^v))+I[5]+1200080426&4294967295,E=p+(g<<12&4294967295|g>>>20),g=v+(w^E&(p^w))+I[6]+2821735955&4294967295,v=E+(g<<17&4294967295|g>>>15),g=w+(p^v&(E^p))+I[7]+4249261313&4294967295,w=v+(g<<22&4294967295|g>>>10),g=p+(E^w&(v^E))+I[8]+1770035416&4294967295,p=w+(g<<7&4294967295|g>>>25),g=E+(v^p&(w^v))+I[9]+2336552879&4294967295,E=p+(g<<12&4294967295|g>>>20),g=v+(w^E&(p^w))+I[10]+4294925233&4294967295,v=E+(g<<17&4294967295|g>>>15),g=w+(p^v&(E^p))+I[11]+2304563134&4294967295,w=v+(g<<22&4294967295|g>>>10),g=p+(E^w&(v^E))+I[12]+1804603682&4294967295,p=w+(g<<7&4294967295|g>>>25),g=E+(v^p&(w^v))+I[13]+4254626195&4294967295,E=p+(g<<12&4294967295|g>>>20),g=v+(w^E&(p^w))+I[14]+2792965006&4294967295,v=E+(g<<17&4294967295|g>>>15),g=w+(p^v&(E^p))+I[15]+1236535329&4294967295,w=v+(g<<22&4294967295|g>>>10),g=p+(v^E&(w^v))+I[1]+4129170786&4294967295,p=w+(g<<5&4294967295|g>>>27),g=E+(w^v&(p^w))+I[6]+3225465664&4294967295,E=p+(g<<9&4294967295|g>>>23),g=v+(p^w&(E^p))+I[11]+643717713&4294967295,v=E+(g<<14&4294967295|g>>>18),g=w+(E^p&(v^E))+I[0]+3921069994&4294967295,w=v+(g<<20&4294967295|g>>>12),g=p+(v^E&(w^v))+I[5]+3593408605&4294967295,p=w+(g<<5&4294967295|g>>>27),g=E+(w^v&(p^w))+I[10]+38016083&4294967295,E=p+(g<<9&4294967295|g>>>23),g=v+(p^w&(E^p))+I[15]+3634488961&4294967295,v=E+(g<<14&4294967295|g>>>18),g=w+(E^p&(v^E))+I[4]+3889429448&4294967295,w=v+(g<<20&4294967295|g>>>12),g=p+(v^E&(w^v))+I[9]+568446438&4294967295,p=w+(g<<5&4294967295|g>>>27),g=E+(w^v&(p^w))+I[14]+3275163606&4294967295,E=p+(g<<9&4294967295|g>>>23),g=v+(p^w&(E^p))+I[3]+4107603335&4294967295,v=E+(g<<14&4294967295|g>>>18),g=w+(E^p&(v^E))+I[8]+1163531501&4294967295,w=v+(g<<20&4294967295|g>>>12),g=p+(v^E&(w^v))+I[13]+2850285829&4294967295,p=w+(g<<5&4294967295|g>>>27),g=E+(w^v&(p^w))+I[2]+4243563512&4294967295,E=p+(g<<9&4294967295|g>>>23),g=v+(p^w&(E^p))+I[7]+1735328473&4294967295,v=E+(g<<14&4294967295|g>>>18),g=w+(E^p&(v^E))+I[12]+2368359562&4294967295,w=v+(g<<20&4294967295|g>>>12),g=p+(w^v^E)+I[5]+4294588738&4294967295,p=w+(g<<4&4294967295|g>>>28),g=E+(p^w^v)+I[8]+2272392833&4294967295,E=p+(g<<11&4294967295|g>>>21),g=v+(E^p^w)+I[11]+1839030562&4294967295,v=E+(g<<16&4294967295|g>>>16),g=w+(v^E^p)+I[14]+4259657740&4294967295,w=v+(g<<23&4294967295|g>>>9),g=p+(w^v^E)+I[1]+2763975236&4294967295,p=w+(g<<4&4294967295|g>>>28),g=E+(p^w^v)+I[4]+1272893353&4294967295,E=p+(g<<11&4294967295|g>>>21),g=v+(E^p^w)+I[7]+4139469664&4294967295,v=E+(g<<16&4294967295|g>>>16),g=w+(v^E^p)+I[10]+3200236656&4294967295,w=v+(g<<23&4294967295|g>>>9),g=p+(w^v^E)+I[13]+681279174&4294967295,p=w+(g<<4&4294967295|g>>>28),g=E+(p^w^v)+I[0]+3936430074&4294967295,E=p+(g<<11&4294967295|g>>>21),g=v+(E^p^w)+I[3]+3572445317&4294967295,v=E+(g<<16&4294967295|g>>>16),g=w+(v^E^p)+I[6]+76029189&4294967295,w=v+(g<<23&4294967295|g>>>9),g=p+(w^v^E)+I[9]+3654602809&4294967295,p=w+(g<<4&4294967295|g>>>28),g=E+(p^w^v)+I[12]+3873151461&4294967295,E=p+(g<<11&4294967295|g>>>21),g=v+(E^p^w)+I[15]+530742520&4294967295,v=E+(g<<16&4294967295|g>>>16),g=w+(v^E^p)+I[2]+3299628645&4294967295,w=v+(g<<23&4294967295|g>>>9),g=p+(v^(w|~E))+I[0]+4096336452&4294967295,p=w+(g<<6&4294967295|g>>>26),g=E+(w^(p|~v))+I[7]+1126891415&4294967295,E=p+(g<<10&4294967295|g>>>22),g=v+(p^(E|~w))+I[14]+2878612391&4294967295,v=E+(g<<15&4294967295|g>>>17),g=w+(E^(v|~p))+I[5]+4237533241&4294967295,w=v+(g<<21&4294967295|g>>>11),g=p+(v^(w|~E))+I[12]+1700485571&4294967295,p=w+(g<<6&4294967295|g>>>26),g=E+(w^(p|~v))+I[3]+2399980690&4294967295,E=p+(g<<10&4294967295|g>>>22),g=v+(p^(E|~w))+I[10]+4293915773&4294967295,v=E+(g<<15&4294967295|g>>>17),g=w+(E^(v|~p))+I[1]+2240044497&4294967295,w=v+(g<<21&4294967295|g>>>11),g=p+(v^(w|~E))+I[8]+1873313359&4294967295,p=w+(g<<6&4294967295|g>>>26),g=E+(w^(p|~v))+I[15]+4264355552&4294967295,E=p+(g<<10&4294967295|g>>>22),g=v+(p^(E|~w))+I[6]+2734768916&4294967295,v=E+(g<<15&4294967295|g>>>17),g=w+(E^(v|~p))+I[13]+1309151649&4294967295,w=v+(g<<21&4294967295|g>>>11),g=p+(v^(w|~E))+I[4]+4149444226&4294967295,p=w+(g<<6&4294967295|g>>>26),g=E+(w^(p|~v))+I[11]+3174756917&4294967295,E=p+(g<<10&4294967295|g>>>22),g=v+(p^(E|~w))+I[2]+718787259&4294967295,v=E+(g<<15&4294967295|g>>>17),g=w+(E^(v|~p))+I[9]+3951481745&4294967295,T.g[0]=T.g[0]+p&4294967295,T.g[1]=T.g[1]+(v+(g<<21&4294967295|g>>>11))&4294967295,T.g[2]=T.g[2]+v&4294967295,T.g[3]=T.g[3]+E&4294967295}r.prototype.v=function(T,p){p===void 0&&(p=T.length);const w=p-this.blockSize,I=this.C;let v=this.h,E=0;for(;E<p;){if(v==0)for(;E<=w;)s(this,T,E),E+=this.blockSize;if(typeof T=="string"){for(;E<p;)if(I[v++]=T.charCodeAt(E++),v==this.blockSize){s(this,I),v=0;break}}else for(;E<p;)if(I[v++]=T[E++],v==this.blockSize){s(this,I),v=0;break}}this.h=v,this.o+=p},r.prototype.A=function(){var T=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);T[0]=128;for(var p=1;p<T.length-8;++p)T[p]=0;p=this.o*8;for(var w=T.length-8;w<T.length;++w)T[w]=p&255,p/=256;for(this.v(T),T=Array(16),p=0,w=0;w<4;++w)for(let I=0;I<32;I+=8)T[p++]=this.g[w]>>>I&255;return T};function o(T,p){var w=l;return Object.prototype.hasOwnProperty.call(w,T)?w[T]:w[T]=p(T)}function a(T,p){this.h=p;const w=[];let I=!0;for(let v=T.length-1;v>=0;v--){const E=T[v]|0;I&&E==p||(w[v]=E,I=!1)}this.g=w}var l={};function h(T){return-128<=T&&T<128?o(T,function(p){return new a([p|0],p<0?-1:0)}):new a([T|0],T<0?-1:0)}function d(T){if(isNaN(T)||!isFinite(T))return y;if(T<0)return V(d(-T));const p=[];let w=1;for(let I=0;T>=w;I++)p[I]=T/w|0,w*=4294967296;return new a(p,0)}function m(T,p){if(T.length==0)throw Error("number format error: empty string");if(p=p||10,p<2||36<p)throw Error("radix out of range: "+p);if(T.charAt(0)=="-")return V(m(T.substring(1),p));if(T.indexOf("-")>=0)throw Error('number format error: interior "-" character');const w=d(Math.pow(p,8));let I=y;for(let E=0;E<T.length;E+=8){var v=Math.min(8,T.length-E);const g=parseInt(T.substring(E,E+v),p);v<8?(v=d(Math.pow(p,v)),I=I.j(v).add(d(g))):(I=I.j(w),I=I.add(d(g)))}return I}var y=h(0),b=h(1),A=h(16777216);n=a.prototype,n.m=function(){if(N(this))return-V(this).m();let T=0,p=1;for(let w=0;w<this.g.length;w++){const I=this.i(w);T+=(I>=0?I:4294967296+I)*p,p*=4294967296}return T},n.toString=function(T){if(T=T||10,T<2||36<T)throw Error("radix out of range: "+T);if(P(this))return"0";if(N(this))return"-"+V(this).toString(T);const p=d(Math.pow(T,6));var w=this;let I="";for(;;){const v=nt(w,p).g;w=$(w,v.j(p));let E=((w.g.length>0?w.g[0]:w.h)>>>0).toString(T);if(w=v,P(w))return E+I;for(;E.length<6;)E="0"+E;I=E+I}},n.i=function(T){return T<0?0:T<this.g.length?this.g[T]:this.h};function P(T){if(T.h!=0)return!1;for(let p=0;p<T.g.length;p++)if(T.g[p]!=0)return!1;return!0}function N(T){return T.h==-1}n.l=function(T){return T=$(this,T),N(T)?-1:P(T)?0:1};function V(T){const p=T.g.length,w=[];for(let I=0;I<p;I++)w[I]=~T.g[I];return new a(w,~T.h).add(b)}n.abs=function(){return N(this)?V(this):this},n.add=function(T){const p=Math.max(this.g.length,T.g.length),w=[];let I=0;for(let v=0;v<=p;v++){let E=I+(this.i(v)&65535)+(T.i(v)&65535),g=(E>>>16)+(this.i(v)>>>16)+(T.i(v)>>>16);I=g>>>16,E&=65535,g&=65535,w[v]=g<<16|E}return new a(w,w[w.length-1]&-2147483648?-1:0)};function $(T,p){return T.add(V(p))}n.j=function(T){if(P(this)||P(T))return y;if(N(this))return N(T)?V(this).j(V(T)):V(V(this).j(T));if(N(T))return V(this.j(V(T)));if(this.l(A)<0&&T.l(A)<0)return d(this.m()*T.m());const p=this.g.length+T.g.length,w=[];for(var I=0;I<2*p;I++)w[I]=0;for(I=0;I<this.g.length;I++)for(let v=0;v<T.g.length;v++){const E=this.i(I)>>>16,g=this.i(I)&65535,O=T.i(v)>>>16,it=T.i(v)&65535;w[2*I+2*v]+=g*it,q(w,2*I+2*v),w[2*I+2*v+1]+=E*it,q(w,2*I+2*v+1),w[2*I+2*v+1]+=g*O,q(w,2*I+2*v+1),w[2*I+2*v+2]+=E*O,q(w,2*I+2*v+2)}for(T=0;T<p;T++)w[T]=w[2*T+1]<<16|w[2*T];for(T=p;T<2*p;T++)w[T]=0;return new a(w,0)};function q(T,p){for(;(T[p]&65535)!=T[p];)T[p+1]+=T[p]>>>16,T[p]&=65535,p++}function B(T,p){this.g=T,this.h=p}function nt(T,p){if(P(p))throw Error("division by zero");if(P(T))return new B(y,y);if(N(T))return p=nt(V(T),p),new B(V(p.g),V(p.h));if(N(p))return p=nt(T,V(p)),new B(V(p.g),p.h);if(T.g.length>30){if(N(T)||N(p))throw Error("slowDivide_ only works with positive integers.");for(var w=b,I=p;I.l(T)<=0;)w=lt(w),I=lt(I);var v=Y(w,1),E=Y(I,1);for(I=Y(I,2),w=Y(w,2);!P(I);){var g=E.add(I);g.l(T)<=0&&(v=v.add(w),E=g),I=Y(I,1),w=Y(w,1)}return p=$(T,v.j(p)),new B(v,p)}for(v=y;T.l(p)>=0;){for(w=Math.max(1,Math.floor(T.m()/p.m())),I=Math.ceil(Math.log(w)/Math.LN2),I=I<=48?1:Math.pow(2,I-48),E=d(w),g=E.j(p);N(g)||g.l(T)>0;)w-=I,E=d(w),g=E.j(p);P(E)&&(E=b),v=v.add(E),T=$(T,g)}return new B(v,T)}n.B=function(T){return nt(this,T).h},n.and=function(T){const p=Math.max(this.g.length,T.g.length),w=[];for(let I=0;I<p;I++)w[I]=this.i(I)&T.i(I);return new a(w,this.h&T.h)},n.or=function(T){const p=Math.max(this.g.length,T.g.length),w=[];for(let I=0;I<p;I++)w[I]=this.i(I)|T.i(I);return new a(w,this.h|T.h)},n.xor=function(T){const p=Math.max(this.g.length,T.g.length),w=[];for(let I=0;I<p;I++)w[I]=this.i(I)^T.i(I);return new a(w,this.h^T.h)};function lt(T){const p=T.g.length+1,w=[];for(let I=0;I<p;I++)w[I]=T.i(I)<<1|T.i(I-1)>>>31;return new a(w,T.h)}function Y(T,p){const w=p>>5;p%=32;const I=T.g.length-w,v=[];for(let E=0;E<I;E++)v[E]=p>0?T.i(E+w)>>>p|T.i(E+w+1)<<32-p:T.i(E+w);return new a(v,T.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Jc=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=m,Ie=a}).apply(typeof Aa<"u"?Aa:typeof self<"u"?self:typeof window<"u"?window:{});var Cr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Zc,zn,tl,jr,oi,el,nl,rl;(function(){var n,t=Object.defineProperty;function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof Cr=="object"&&Cr];for(var c=0;c<i.length;++c){var u=i[c];if(u&&u.Math==Math)return u}throw Error("Cannot find global object")}var r=e(this);function s(i,c){if(c)t:{var u=r;i=i.split(".");for(var f=0;f<i.length-1;f++){var x=i[f];if(!(x in u))break t;u=u[x]}i=i[i.length-1],f=u[i],c=c(f),c!=f&&c!=null&&t(u,i,{configurable:!0,writable:!0,value:c})}}s("Symbol.dispose",function(i){return i||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(i){return i||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(i){return i||function(c){var u=[],f;for(f in c)Object.prototype.hasOwnProperty.call(c,f)&&u.push([f,c[f]]);return u}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(i){var c=typeof i;return c=="object"&&i!=null||c=="function"}function h(i,c,u){return i.call.apply(i.bind,arguments)}function d(i,c,u){return d=h,d.apply(null,arguments)}function m(i,c){var u=Array.prototype.slice.call(arguments,1);return function(){var f=u.slice();return f.push.apply(f,arguments),i.apply(this,f)}}function y(i,c){function u(){}u.prototype=c.prototype,i.Z=c.prototype,i.prototype=new u,i.prototype.constructor=i,i.Ob=function(f,x,S){for(var k=Array(arguments.length-2),H=2;H<arguments.length;H++)k[H-2]=arguments[H];return c.prototype[x].apply(f,k)}}var b=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?i=>i&&AsyncContext.Snapshot.wrap(i):i=>i;function A(i){const c=i.length;if(c>0){const u=Array(c);for(let f=0;f<c;f++)u[f]=i[f];return u}return[]}function P(i,c){for(let f=1;f<arguments.length;f++){const x=arguments[f];var u=typeof x;if(u=u!="object"?u:x?Array.isArray(x)?"array":u:"null",u=="array"||u=="object"&&typeof x.length=="number"){u=i.length||0;const S=x.length||0;i.length=u+S;for(let k=0;k<S;k++)i[u+k]=x[k]}else i.push(x)}}class N{constructor(c,u){this.i=c,this.j=u,this.h=0,this.g=null}get(){let c;return this.h>0?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function V(i){a.setTimeout(()=>{throw i},0)}function $(){var i=T;let c=null;return i.g&&(c=i.g,i.g=i.g.next,i.g||(i.h=null),c.next=null),c}class q{constructor(){this.h=this.g=null}add(c,u){const f=B.get();f.set(c,u),this.h?this.h.next=f:this.g=f,this.h=f}}var B=new N(()=>new nt,i=>i.reset());class nt{constructor(){this.next=this.g=this.h=null}set(c,u){this.h=c,this.g=u,this.next=null}reset(){this.next=this.g=this.h=null}}let lt,Y=!1,T=new q,p=()=>{const i=Promise.resolve(void 0);lt=()=>{i.then(w)}};function w(){for(var i;i=$();){try{i.h.call(i.g)}catch(u){V(u)}var c=B;c.j(i),c.h<100&&(c.h++,i.next=c.g,c.g=i)}Y=!1}function I(){this.u=this.u,this.C=this.C}I.prototype.u=!1,I.prototype.dispose=function(){this.u||(this.u=!0,this.N())},I.prototype[Symbol.dispose]=function(){this.dispose()},I.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function v(i,c){this.type=i,this.g=this.target=c,this.defaultPrevented=!1}v.prototype.h=function(){this.defaultPrevented=!0};var E=(function(){if(!a.addEventListener||!Object.defineProperty)return!1;var i=!1,c=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const u=()=>{};a.addEventListener("test",u,c),a.removeEventListener("test",u,c)}catch{}return i})();function g(i){return/^[\s\xa0]*$/.test(i)}function O(i,c){v.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i&&this.init(i,c)}y(O,v),O.prototype.init=function(i,c){const u=this.type=i.type,f=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;this.target=i.target||i.srcElement,this.g=c,c=i.relatedTarget,c||(u=="mouseover"?c=i.fromElement:u=="mouseout"&&(c=i.toElement)),this.relatedTarget=c,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=i.pointerType,this.state=i.state,this.i=i,i.defaultPrevented&&O.Z.h.call(this)},O.prototype.h=function(){O.Z.h.call(this);const i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var it="closure_listenable_"+(Math.random()*1e6|0),jt=0;function Qt(i,c,u,f,x){this.listener=i,this.proxy=null,this.src=c,this.type=u,this.capture=!!f,this.ha=x,this.key=++jt,this.da=this.fa=!1}function Ut(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function zt(i,c,u){for(const f in i)c.call(u,i[f],f,i)}function Je(i,c){for(const u in i)c.call(void 0,i[u],u,i)}function Ze(i){const c={};for(const u in i)c[u]=i[u];return c}const fe="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Lt(i,c){let u,f;for(let x=1;x<arguments.length;x++){f=arguments[x];for(u in f)i[u]=f[u];for(let S=0;S<fe.length;S++)u=fe[S],Object.prototype.hasOwnProperty.call(f,u)&&(i[u]=f[u])}}function Et(i){this.src=i,this.g={},this.h=0}Et.prototype.add=function(i,c,u,f,x){const S=i.toString();i=this.g[S],i||(i=this.g[S]=[],this.h++);const k=Mt(i,c,f,x);return k>-1?(c=i[k],u||(c.fa=!1)):(c=new Qt(c,this.src,S,!!f,x),c.fa=u,i.push(c)),c};function Dt(i,c){const u=c.type;if(u in i.g){var f=i.g[u],x=Array.prototype.indexOf.call(f,c,void 0),S;(S=x>=0)&&Array.prototype.splice.call(f,x,1),S&&(Ut(c),i.g[u].length==0&&(delete i.g[u],i.h--))}}function Mt(i,c,u,f){for(let x=0;x<i.length;++x){const S=i[x];if(!S.da&&S.listener==c&&S.capture==!!u&&S.ha==f)return x}return-1}var ut="closure_lm_"+(Math.random()*1e6|0),ot={};function At(i,c,u,f,x){if(Array.isArray(c)){for(let S=0;S<c.length;S++)At(i,c[S],u,f,x);return null}return u=lo(u),i&&i[it]?i.J(c,u,l(f)?!!f.capture:!1,x):Yt(i,c,u,!1,f,x)}function Yt(i,c,u,f,x,S){if(!c)throw Error("Invalid event type");const k=l(x)?!!x.capture:!!x;let H=qt(i);if(H||(i[ut]=H=new Et(i)),u=H.add(c,u,f,k,S),u.proxy)return u;if(f=Xt(),u.proxy=f,f.src=i,f.listener=u,i.addEventListener)E||(x=k),x===void 0&&(x=!1),i.addEventListener(c.toString(),f,x);else if(i.attachEvent)i.attachEvent(X(c.toString()),f);else if(i.addListener&&i.removeListener)i.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return u}function Xt(){function i(u){return c.call(i.src,i.listener,u)}const c=xt;return i}function $t(i,c,u,f,x){if(Array.isArray(c))for(var S=0;S<c.length;S++)$t(i,c[S],u,f,x);else f=l(f)?!!f.capture:!!f,u=lo(u),i&&i[it]?(i=i.i,S=String(c).toString(),S in i.g&&(c=i.g[S],u=Mt(c,u,f,x),u>-1&&(Ut(c[u]),Array.prototype.splice.call(c,u,1),c.length==0&&(delete i.g[S],i.h--)))):i&&(i=qt(i))&&(c=i.g[c.toString()],i=-1,c&&(i=Mt(c,u,f,x)),(u=i>-1?c[i]:null)&&Z(u))}function Z(i){if(typeof i!="number"&&i&&!i.da){var c=i.src;if(c&&c[it])Dt(c.i,i);else{var u=i.type,f=i.proxy;c.removeEventListener?c.removeEventListener(u,f,i.capture):c.detachEvent?c.detachEvent(X(u),f):c.addListener&&c.removeListener&&c.removeListener(f),(u=qt(c))?(Dt(u,i),u.h==0&&(u.src=null,c[ut]=null)):Ut(i)}}}function X(i){return i in ot?ot[i]:ot[i]="on"+i}function xt(i,c){if(i.da)i=!0;else{c=new O(c,this);const u=i.listener,f=i.ha||i.src;i.fa&&Z(i),i=u.call(f,c)}return i}function qt(i){return i=i[ut],i instanceof Et?i:null}var tn="__closure_events_fn_"+(Math.random()*1e9>>>0);function lo(i){return typeof i=="function"?i:(i[tn]||(i[tn]=function(c){return i.handleEvent(c)}),i[tn])}function St(){I.call(this),this.i=new Et(this),this.M=this,this.G=null}y(St,I),St.prototype[it]=!0,St.prototype.removeEventListener=function(i,c,u,f){$t(this,i,c,u,f)};function Nt(i,c){var u,f=i.G;if(f)for(u=[];f;f=f.G)u.push(f);if(i=i.M,f=c.type||c,typeof c=="string")c=new v(c,i);else if(c instanceof v)c.target=c.target||i;else{var x=c;c=new v(f,i),Lt(c,x)}x=!0;let S,k;if(u)for(k=u.length-1;k>=0;k--)S=c.g=u[k],x=mr(S,f,!0,c)&&x;if(S=c.g=i,x=mr(S,f,!0,c)&&x,x=mr(S,f,!1,c)&&x,u)for(k=0;k<u.length;k++)S=c.g=u[k],x=mr(S,f,!1,c)&&x}St.prototype.N=function(){if(St.Z.N.call(this),this.i){var i=this.i;for(const c in i.g){const u=i.g[c];for(let f=0;f<u.length;f++)Ut(u[f]);delete i.g[c],i.h--}}this.G=null},St.prototype.J=function(i,c,u,f){return this.i.add(String(i),c,!1,u,f)},St.prototype.K=function(i,c,u,f){return this.i.add(String(i),c,!0,u,f)};function mr(i,c,u,f){if(c=i.i.g[String(c)],!c)return!0;c=c.concat();let x=!0;for(let S=0;S<c.length;++S){const k=c[S];if(k&&!k.da&&k.capture==u){const H=k.listener,pt=k.ha||k.src;k.fa&&Dt(i.i,k),x=H.call(pt,f)!==!1&&x}}return x&&!f.defaultPrevented}function Vu(i,c){if(typeof i!="function")if(i&&typeof i.handleEvent=="function")i=d(i.handleEvent,i);else throw Error("Invalid listener argument");return Number(c)>2147483647?-1:a.setTimeout(i,c||0)}function uo(i){i.g=Vu(()=>{i.g=null,i.i&&(i.i=!1,uo(i))},i.l);const c=i.h;i.h=null,i.m.apply(null,c)}class Nu extends I{constructor(c,u){super(),this.m=c,this.l=u,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:uo(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function In(i){I.call(this),this.h=i,this.g={}}y(In,I);var ho=[];function fo(i){zt(i.g,function(c,u){this.g.hasOwnProperty(u)&&Z(c)},i),i.g={}}In.prototype.N=function(){In.Z.N.call(this),fo(this)},In.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ts=a.JSON.stringify,ku=a.JSON.parse,Du=class{stringify(i){return a.JSON.stringify(i,void 0)}parse(i){return a.JSON.parse(i,void 0)}};function mo(){}function po(){}var An={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Is(){v.call(this,"d")}y(Is,v);function As(){v.call(this,"c")}y(As,v);var De={},go=null;function pr(){return go=go||new St}De.Ia="serverreachability";function yo(i){v.call(this,De.Ia,i)}y(yo,v);function xn(i){const c=pr();Nt(c,new yo(c))}De.STAT_EVENT="statevent";function _o(i,c){v.call(this,De.STAT_EVENT,i),this.stat=c}y(_o,v);function kt(i){const c=pr();Nt(c,new _o(c,i))}De.Ja="timingevent";function vo(i,c){v.call(this,De.Ja,i),this.size=c}y(vo,v);function Sn(i,c){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){i()},c)}function Rn(){this.g=!0}Rn.prototype.ua=function(){this.g=!1};function Mu(i,c,u,f,x,S){i.info(function(){if(i.g)if(S){var k="",H=S.split("&");for(let tt=0;tt<H.length;tt++){var pt=H[tt].split("=");if(pt.length>1){const vt=pt[0];pt=pt[1];const Zt=vt.split("_");k=Zt.length>=2&&Zt[1]=="type"?k+(vt+"="+pt+"&"):k+(vt+"=redacted&")}}}else k=null;else k=S;return"XMLHTTP REQ ("+f+") [attempt "+x+"]: "+c+`
`+u+`
`+k})}function Ou(i,c,u,f,x,S,k){i.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+x+"]: "+c+`
`+u+`
`+S+" "+k})}function en(i,c,u,f){i.info(function(){return"XMLHTTP TEXT ("+c+"): "+Lu(i,u)+(f?" "+f:"")})}function ju(i,c){i.info(function(){return"TIMEOUT: "+c})}Rn.prototype.info=function(){};function Lu(i,c){if(!i.g)return c;if(!c)return null;try{const S=JSON.parse(c);if(S){for(i=0;i<S.length;i++)if(Array.isArray(S[i])){var u=S[i];if(!(u.length<2)){var f=u[1];if(Array.isArray(f)&&!(f.length<1)){var x=f[0];if(x!="noop"&&x!="stop"&&x!="close")for(let k=1;k<f.length;k++)f[k]=""}}}}return Ts(S)}catch{return c}}var gr={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},wo={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Eo;function xs(){}y(xs,mo),xs.prototype.g=function(){return new XMLHttpRequest},Eo=new xs;function Cn(i){return encodeURIComponent(String(i))}function Fu(i){var c=1;i=i.split(":");const u=[];for(;c>0&&i.length;)u.push(i.shift()),c--;return i.length&&u.push(i.join(":")),u}function me(i,c,u,f){this.j=i,this.i=c,this.l=u,this.S=f||1,this.V=new In(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new bo}function bo(){this.i=null,this.g="",this.h=!1}var To={},Ss={};function Rs(i,c,u){i.M=1,i.A=_r(Jt(c)),i.u=u,i.R=!0,Io(i,null)}function Io(i,c){i.F=Date.now(),yr(i),i.B=Jt(i.A);var u=i.B,f=i.S;Array.isArray(f)||(f=[String(f)]),jo(u.i,"t",f),i.C=0,u=i.j.L,i.h=new bo,i.g=ea(i.j,u?c:null,!i.u),i.P>0&&(i.O=new Nu(d(i.Y,i,i.g),i.P)),c=i.V,u=i.g,f=i.ba;var x="readystatechange";Array.isArray(x)||(x&&(ho[0]=x.toString()),x=ho);for(let S=0;S<x.length;S++){const k=At(u,x[S],f||c.handleEvent,!1,c.h||c);if(!k)break;c.g[k.key]=k}c=i.J?Ze(i.J):{},i.u?(i.v||(i.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.B,i.v,i.u,c)):(i.v="GET",i.g.ea(i.B,i.v,null,c)),xn(),Mu(i.i,i.v,i.B,i.l,i.S,i.u)}me.prototype.ba=function(i){i=i.target;const c=this.O;c&&ye(i)==3?c.j():this.Y(i)},me.prototype.Y=function(i){try{if(i==this.g)t:{const H=ye(this.g),pt=this.g.ya(),tt=this.g.ca();if(!(H<3)&&(H!=3||this.g&&(this.h.h||this.g.la()||qo(this.g)))){this.K||H!=4||pt==7||(pt==8||tt<=0?xn(3):xn(2)),Cs(this);var c=this.g.ca();this.X=c;var u=Bu(this);if(this.o=c==200,Ou(this.i,this.v,this.B,this.l,this.S,H,c),this.o){if(this.U&&!this.L){e:{if(this.g){var f,x=this.g;if((f=x.g?x.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!g(f)){var S=f;break e}}S=null}if(i=S)en(this.i,this.l,i,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ps(this,i);else{this.o=!1,this.m=3,kt(12),Me(this),Pn(this);break t}}if(this.R){i=!0;let vt;for(;!this.K&&this.C<u.length;)if(vt=Uu(this,u),vt==Ss){H==4&&(this.m=4,kt(14),i=!1),en(this.i,this.l,null,"[Incomplete Response]");break}else if(vt==To){this.m=4,kt(15),en(this.i,this.l,u,"[Invalid Chunk]"),i=!1;break}else en(this.i,this.l,vt,null),Ps(this,vt);if(Ao(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),H!=4||u.length!=0||this.h.h||(this.m=1,kt(16),i=!1),this.o=this.o&&i,!i)en(this.i,this.l,u,"[Invalid Chunked Response]"),Me(this),Pn(this);else if(u.length>0&&!this.W){this.W=!0;var k=this.j;k.g==this&&k.aa&&!k.P&&(k.j.info("Great, no buffering proxy detected. Bytes received: "+u.length),Ls(k),k.P=!0,kt(11))}}else en(this.i,this.l,u,null),Ps(this,u);H==4&&Me(this),this.o&&!this.K&&(H==4?Xo(this.j,this):(this.o=!1,yr(this)))}else eh(this.g),c==400&&u.indexOf("Unknown SID")>0?(this.m=3,kt(12)):(this.m=0,kt(13)),Me(this),Pn(this)}}}catch{}finally{}};function Bu(i){if(!Ao(i))return i.g.la();const c=qo(i.g);if(c==="")return"";let u="";const f=c.length,x=ye(i.g)==4;if(!i.h.i){if(typeof TextDecoder>"u")return Me(i),Pn(i),"";i.h.i=new a.TextDecoder}for(let S=0;S<f;S++)i.h.h=!0,u+=i.h.i.decode(c[S],{stream:!(x&&S==f-1)});return c.length=0,i.h.g+=u,i.C=0,i.h.g}function Ao(i){return i.g?i.v=="GET"&&i.M!=2&&i.j.Aa:!1}function Uu(i,c){var u=i.C,f=c.indexOf(`
`,u);return f==-1?Ss:(u=Number(c.substring(u,f)),isNaN(u)?To:(f+=1,f+u>c.length?Ss:(c=c.slice(f,f+u),i.C=f+u,c)))}me.prototype.cancel=function(){this.K=!0,Me(this)};function yr(i){i.T=Date.now()+i.H,xo(i,i.H)}function xo(i,c){if(i.D!=null)throw Error("WatchDog timer not null");i.D=Sn(d(i.aa,i),c)}function Cs(i){i.D&&(a.clearTimeout(i.D),i.D=null)}me.prototype.aa=function(){this.D=null;const i=Date.now();i-this.T>=0?(ju(this.i,this.B),this.M!=2&&(xn(),kt(17)),Me(this),this.m=2,Pn(this)):xo(this,this.T-i)};function Pn(i){i.j.I==0||i.K||Xo(i.j,i)}function Me(i){Cs(i);var c=i.O;c&&typeof c.dispose=="function"&&c.dispose(),i.O=null,fo(i.V),i.g&&(c=i.g,i.g=null,c.abort(),c.dispose())}function Ps(i,c){try{var u=i.j;if(u.I!=0&&(u.g==i||Vs(u.h,i))){if(!i.L&&Vs(u.h,i)&&u.I==3){try{var f=u.Ba.g.parse(c)}catch{f=null}if(Array.isArray(f)&&f.length==3){var x=f;if(x[0]==0){t:if(!u.v){if(u.g)if(u.g.F+3e3<i.F)Tr(u),Er(u);else break t;js(u),kt(18)}}else u.xa=x[1],0<u.xa-u.K&&x[2]<37500&&u.F&&u.A==0&&!u.C&&(u.C=Sn(d(u.Va,u),6e3));Co(u.h)<=1&&u.ta&&(u.ta=void 0)}else je(u,11)}else if((i.L||u.g==i)&&Tr(u),!g(c))for(x=u.Ba.g.parse(c),c=0;c<x.length;c++){let tt=x[c];const vt=tt[0];if(!(vt<=u.K))if(u.K=vt,tt=tt[1],u.I==2)if(tt[0]=="c"){u.M=tt[1],u.ba=tt[2];const Zt=tt[3];Zt!=null&&(u.ka=Zt,u.j.info("VER="+u.ka));const Le=tt[4];Le!=null&&(u.za=Le,u.j.info("SVER="+u.za));const _e=tt[5];_e!=null&&typeof _e=="number"&&_e>0&&(f=1.5*_e,u.O=f,u.j.info("backChannelRequestTimeoutMs_="+f)),f=u;const ve=i.g;if(ve){const Ar=ve.g?ve.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ar){var S=f.h;S.g||Ar.indexOf("spdy")==-1&&Ar.indexOf("quic")==-1&&Ar.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(Ns(S,S.h),S.h=null))}if(f.G){const Fs=ve.g?ve.g.getResponseHeader("X-HTTP-Session-Id"):null;Fs&&(f.wa=Fs,rt(f.J,f.G,Fs))}}u.I=3,u.l&&u.l.ra(),u.aa&&(u.T=Date.now()-i.F,u.j.info("Handshake RTT: "+u.T+"ms")),f=u;var k=i;if(f.na=ta(f,f.L?f.ba:null,f.W),k.L){Po(f.h,k);var H=k,pt=f.O;pt&&(H.H=pt),H.D&&(Cs(H),yr(H)),f.g=k}else Qo(f);u.i.length>0&&br(u)}else tt[0]!="stop"&&tt[0]!="close"||je(u,7);else u.I==3&&(tt[0]=="stop"||tt[0]=="close"?tt[0]=="stop"?je(u,7):Os(u):tt[0]!="noop"&&u.l&&u.l.qa(tt),u.A=0)}}xn(4)}catch{}}var zu=class{constructor(i,c){this.g=i,this.map=c}};function So(i){this.l=i||10,a.PerformanceNavigationTiming?(i=a.performance.getEntriesByType("navigation"),i=i.length>0&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Ro(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function Co(i){return i.h?1:i.g?i.g.size:0}function Vs(i,c){return i.h?i.h==c:i.g?i.g.has(c):!1}function Ns(i,c){i.g?i.g.add(c):i.h=c}function Po(i,c){i.h&&i.h==c?i.h=null:i.g&&i.g.has(c)&&i.g.delete(c)}So.prototype.cancel=function(){if(this.i=Vo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function Vo(i){if(i.h!=null)return i.i.concat(i.h.G);if(i.g!=null&&i.g.size!==0){let c=i.i;for(const u of i.g.values())c=c.concat(u.G);return c}return A(i.i)}var No=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function $u(i,c){if(i){i=i.split("&");for(let u=0;u<i.length;u++){const f=i[u].indexOf("=");let x,S=null;f>=0?(x=i[u].substring(0,f),S=i[u].substring(f+1)):x=i[u],c(x,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function pe(i){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let c;i instanceof pe?(this.l=i.l,Vn(this,i.j),this.o=i.o,this.g=i.g,Nn(this,i.u),this.h=i.h,ks(this,Lo(i.i)),this.m=i.m):i&&(c=String(i).match(No))?(this.l=!1,Vn(this,c[1]||"",!0),this.o=kn(c[2]||""),this.g=kn(c[3]||"",!0),Nn(this,c[4]),this.h=kn(c[5]||"",!0),ks(this,c[6]||"",!0),this.m=kn(c[7]||"")):(this.l=!1,this.i=new Mn(null,this.l))}pe.prototype.toString=function(){const i=[];var c=this.j;c&&i.push(Dn(c,ko,!0),":");var u=this.g;return(u||c=="file")&&(i.push("//"),(c=this.o)&&i.push(Dn(c,ko,!0),"@"),i.push(Cn(u).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u=this.u,u!=null&&i.push(":",String(u))),(u=this.h)&&(this.g&&u.charAt(0)!="/"&&i.push("/"),i.push(Dn(u,u.charAt(0)=="/"?Wu:Hu,!0))),(u=this.i.toString())&&i.push("?",u),(u=this.m)&&i.push("#",Dn(u,Ku)),i.join("")},pe.prototype.resolve=function(i){const c=Jt(this);let u=!!i.j;u?Vn(c,i.j):u=!!i.o,u?c.o=i.o:u=!!i.g,u?c.g=i.g:u=i.u!=null;var f=i.h;if(u)Nn(c,i.u);else if(u=!!i.h){if(f.charAt(0)!="/")if(this.g&&!this.h)f="/"+f;else{var x=c.h.lastIndexOf("/");x!=-1&&(f=c.h.slice(0,x+1)+f)}if(x=f,x==".."||x==".")f="";else if(x.indexOf("./")!=-1||x.indexOf("/.")!=-1){f=x.lastIndexOf("/",0)==0,x=x.split("/");const S=[];for(let k=0;k<x.length;){const H=x[k++];H=="."?f&&k==x.length&&S.push(""):H==".."?((S.length>1||S.length==1&&S[0]!="")&&S.pop(),f&&k==x.length&&S.push("")):(S.push(H),f=!0)}f=S.join("/")}else f=x}return u?c.h=f:u=i.i.toString()!=="",u?ks(c,Lo(i.i)):u=!!i.m,u&&(c.m=i.m),c};function Jt(i){return new pe(i)}function Vn(i,c,u){i.j=u?kn(c,!0):c,i.j&&(i.j=i.j.replace(/:$/,""))}function Nn(i,c){if(c){if(c=Number(c),isNaN(c)||c<0)throw Error("Bad port number "+c);i.u=c}else i.u=null}function ks(i,c,u){c instanceof Mn?(i.i=c,Qu(i.i,i.l)):(u||(c=Dn(c,Gu)),i.i=new Mn(c,i.l))}function rt(i,c,u){i.i.set(c,u)}function _r(i){return rt(i,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),i}function kn(i,c){return i?c?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function Dn(i,c,u){return typeof i=="string"?(i=encodeURI(i).replace(c,qu),u&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function qu(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var ko=/[#\/\?@]/g,Hu=/[#\?:]/g,Wu=/[#\?]/g,Gu=/[#\?@]/g,Ku=/#/g;function Mn(i,c){this.h=this.g=null,this.i=i||null,this.j=!!c}function Oe(i){i.g||(i.g=new Map,i.h=0,i.i&&$u(i.i,function(c,u){i.add(decodeURIComponent(c.replace(/\+/g," ")),u)}))}n=Mn.prototype,n.add=function(i,c){Oe(this),this.i=null,i=nn(this,i);let u=this.g.get(i);return u||this.g.set(i,u=[]),u.push(c),this.h+=1,this};function Do(i,c){Oe(i),c=nn(i,c),i.g.has(c)&&(i.i=null,i.h-=i.g.get(c).length,i.g.delete(c))}function Mo(i,c){return Oe(i),c=nn(i,c),i.g.has(c)}n.forEach=function(i,c){Oe(this),this.g.forEach(function(u,f){u.forEach(function(x){i.call(c,x,f,this)},this)},this)};function Oo(i,c){Oe(i);let u=[];if(typeof c=="string")Mo(i,c)&&(u=u.concat(i.g.get(nn(i,c))));else for(i=Array.from(i.g.values()),c=0;c<i.length;c++)u=u.concat(i[c]);return u}n.set=function(i,c){return Oe(this),this.i=null,i=nn(this,i),Mo(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[c]),this.h+=1,this},n.get=function(i,c){return i?(i=Oo(this,i),i.length>0?String(i[0]):c):c};function jo(i,c,u){Do(i,c),u.length>0&&(i.i=null,i.g.set(nn(i,c),A(u)),i.h+=u.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],c=Array.from(this.g.keys());for(let f=0;f<c.length;f++){var u=c[f];const x=Cn(u);u=Oo(this,u);for(let S=0;S<u.length;S++){let k=x;u[S]!==""&&(k+="="+Cn(u[S])),i.push(k)}}return this.i=i.join("&")};function Lo(i){const c=new Mn;return c.i=i.i,i.g&&(c.g=new Map(i.g),c.h=i.h),c}function nn(i,c){return c=String(c),i.j&&(c=c.toLowerCase()),c}function Qu(i,c){c&&!i.j&&(Oe(i),i.i=null,i.g.forEach(function(u,f){const x=f.toLowerCase();f!=x&&(Do(this,f),jo(this,x,u))},i)),i.j=c}function Yu(i,c){const u=new Rn;if(a.Image){const f=new Image;f.onload=m(ge,u,"TestLoadImage: loaded",!0,c,f),f.onerror=m(ge,u,"TestLoadImage: error",!1,c,f),f.onabort=m(ge,u,"TestLoadImage: abort",!1,c,f),f.ontimeout=m(ge,u,"TestLoadImage: timeout",!1,c,f),a.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=i}else c(!1)}function Xu(i,c){const u=new Rn,f=new AbortController,x=setTimeout(()=>{f.abort(),ge(u,"TestPingServer: timeout",!1,c)},1e4);fetch(i,{signal:f.signal}).then(S=>{clearTimeout(x),S.ok?ge(u,"TestPingServer: ok",!0,c):ge(u,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(x),ge(u,"TestPingServer: error",!1,c)})}function ge(i,c,u,f,x){try{x&&(x.onload=null,x.onerror=null,x.onabort=null,x.ontimeout=null),f(u)}catch{}}function Ju(){this.g=new Du}function Ds(i){this.i=i.Sb||null,this.h=i.ab||!1}y(Ds,mo),Ds.prototype.g=function(){return new vr(this.i,this.h)};function vr(i,c){St.call(this),this.H=i,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}y(vr,St),n=vr.prototype,n.open=function(i,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=i,this.D=c,this.readyState=1,jn(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const c={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};i&&(c.body=i),(this.H||a).fetch(new Request(this.D,c)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,On(this)),this.readyState=0},n.Pa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,jn(this)),this.g&&(this.readyState=3,jn(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Fo(this)}else i.text().then(this.Oa.bind(this),this.ga.bind(this))};function Fo(i){i.j.read().then(i.Ma.bind(i)).catch(i.ga.bind(i))}n.Ma=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var c=i.value?i.value:new Uint8Array(0);(c=this.B.decode(c,{stream:!i.done}))&&(this.response=this.responseText+=c)}i.done?On(this):jn(this),this.readyState==3&&Fo(this)}},n.Oa=function(i){this.g&&(this.response=this.responseText=i,On(this))},n.Na=function(i){this.g&&(this.response=i,On(this))},n.ga=function(){this.g&&On(this)};function On(i){i.readyState=4,i.l=null,i.j=null,i.B=null,jn(i)}n.setRequestHeader=function(i,c){this.A.append(i,c)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],c=this.h.entries();for(var u=c.next();!u.done;)u=u.value,i.push(u[0]+": "+u[1]),u=c.next();return i.join(`\r
`)};function jn(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(vr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function Bo(i){let c="";return zt(i,function(u,f){c+=f,c+=":",c+=u,c+=`\r
`}),c}function Ms(i,c,u){t:{for(f in u){var f=!1;break t}f=!0}f||(u=Bo(u),typeof i=="string"?u!=null&&Cn(u):rt(i,c,u))}function ct(i){St.call(this),this.headers=new Map,this.L=i||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}y(ct,St);var Zu=/^https?$/i,th=["POST","PUT"];n=ct.prototype,n.Fa=function(i){this.H=i},n.ea=function(i,c,u,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);c=c?c.toUpperCase():"GET",this.D=i,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Eo.g(),this.g.onreadystatechange=b(d(this.Ca,this));try{this.B=!0,this.g.open(c,String(i),!0),this.B=!1}catch(S){Uo(this,S);return}if(i=u||"",u=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var x in f)u.set(x,f[x]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const S of f.keys())u.set(S,f.get(S));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(u.keys()).find(S=>S.toLowerCase()=="content-type"),x=a.FormData&&i instanceof a.FormData,!(Array.prototype.indexOf.call(th,c,void 0)>=0)||f||x||u.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,k]of u)this.g.setRequestHeader(S,k);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(i),this.v=!1}catch(S){Uo(this,S)}};function Uo(i,c){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=c,i.o=5,zo(i),wr(i)}function zo(i){i.A||(i.A=!0,Nt(i,"complete"),Nt(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=i||7,Nt(this,"complete"),Nt(this,"abort"),wr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),wr(this,!0)),ct.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?$o(this):this.Xa())},n.Xa=function(){$o(this)};function $o(i){if(i.h&&typeof o<"u"){if(i.v&&ye(i)==4)setTimeout(i.Ca.bind(i),0);else if(Nt(i,"readystatechange"),ye(i)==4){i.h=!1;try{const S=i.ca();t:switch(S){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break t;default:c=!1}var u;if(!(u=c)){var f;if(f=S===0){let k=String(i.D).match(No)[1]||null;!k&&a.self&&a.self.location&&(k=a.self.location.protocol.slice(0,-1)),f=!Zu.test(k?k.toLowerCase():"")}u=f}if(u)Nt(i,"complete"),Nt(i,"success");else{i.o=6;try{var x=ye(i)>2?i.g.statusText:""}catch{x=""}i.l=x+" ["+i.ca()+"]",zo(i)}}finally{wr(i)}}}}function wr(i,c){if(i.g){i.m&&(clearTimeout(i.m),i.m=null);const u=i.g;i.g=null,c||Nt(i,"ready");try{u.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function ye(i){return i.g?i.g.readyState:0}n.ca=function(){try{return ye(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(i){if(this.g){var c=this.g.responseText;return i&&c.indexOf(i)==0&&(c=c.substring(i.length)),ku(c)}};function qo(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.F){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function eh(i){const c={};i=(i.g&&ye(i)>=2&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<i.length;f++){if(g(i[f]))continue;var u=Fu(i[f]);const x=u[0];if(u=u[1],typeof u!="string")continue;u=u.trim();const S=c[x]||[];c[x]=S,S.push(u)}Je(c,function(f){return f.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ln(i,c,u){return u&&u.internalChannelParams&&u.internalChannelParams[i]||c}function Ho(i){this.za=0,this.i=[],this.j=new Rn,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Ln("failFast",!1,i),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Ln("baseRetryDelayMs",5e3,i),this.Za=Ln("retryDelaySeedMs",1e4,i),this.Ta=Ln("forwardChannelMaxRetries",2,i),this.va=Ln("forwardChannelRequestTimeoutMs",2e4,i),this.ma=i&&i.xmlHttpFactory||void 0,this.Ua=i&&i.Rb||void 0,this.Aa=i&&i.useFetchStreams||!1,this.O=void 0,this.L=i&&i.supportsCrossDomainXhr||!1,this.M="",this.h=new So(i&&i.concurrentRequestLimit),this.Ba=new Ju,this.S=i&&i.fastHandshake||!1,this.R=i&&i.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=i&&i.Pb||!1,i&&i.ua&&this.j.ua(),i&&i.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&i&&i.detectBufferingProxy||!1,this.ia=void 0,i&&i.longPollingTimeout&&i.longPollingTimeout>0&&(this.ia=i.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Ho.prototype,n.ka=8,n.I=1,n.connect=function(i,c,u,f){kt(0),this.W=i,this.H=c||{},u&&f!==void 0&&(this.H.OSID=u,this.H.OAID=f),this.F=this.X,this.J=ta(this,null,this.W),br(this)};function Os(i){if(Wo(i),i.I==3){var c=i.V++,u=Jt(i.J);if(rt(u,"SID",i.M),rt(u,"RID",c),rt(u,"TYPE","terminate"),Fn(i,u),c=new me(i,i.j,c),c.M=2,c.A=_r(Jt(u)),u=!1,a.navigator&&a.navigator.sendBeacon)try{u=a.navigator.sendBeacon(c.A.toString(),"")}catch{}!u&&a.Image&&(new Image().src=c.A,u=!0),u||(c.g=ea(c.j,null),c.g.ea(c.A)),c.F=Date.now(),yr(c)}Zo(i)}function Er(i){i.g&&(Ls(i),i.g.cancel(),i.g=null)}function Wo(i){Er(i),i.v&&(a.clearTimeout(i.v),i.v=null),Tr(i),i.h.cancel(),i.m&&(typeof i.m=="number"&&a.clearTimeout(i.m),i.m=null)}function br(i){if(!Ro(i.h)&&!i.m){i.m=!0;var c=i.Ea;lt||p(),Y||(lt(),Y=!0),T.add(c,i),i.D=0}}function nh(i,c){return Co(i.h)>=i.h.j-(i.m?1:0)?!1:i.m?(i.i=c.G.concat(i.i),!0):i.I==1||i.I==2||i.D>=(i.Sa?0:i.Ta)?!1:(i.m=Sn(d(i.Ea,i,c),Jo(i,i.D)),i.D++,!0)}n.Ea=function(i){if(this.m)if(this.m=null,this.I==1){if(!i){this.V=Math.floor(Math.random()*1e5),i=this.V++;const x=new me(this,this.j,i);let S=this.o;if(this.U&&(S?(S=Ze(S),Lt(S,this.U)):S=this.U),this.u!==null||this.R||(x.J=S,S=null),this.S)t:{for(var c=0,u=0;u<this.i.length;u++){e:{var f=this.i[u];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break e}f=void 0}if(f===void 0)break;if(c+=f,c>4096){c=u;break t}if(c===4096||u===this.i.length-1){c=u+1;break t}}c=1e3}else c=1e3;c=Ko(this,x,c),u=Jt(this.J),rt(u,"RID",i),rt(u,"CVER",22),this.G&&rt(u,"X-HTTP-Session-Id",this.G),Fn(this,u),S&&(this.R?c="headers="+Cn(Bo(S))+"&"+c:this.u&&Ms(u,this.u,S)),Ns(this.h,x),this.Ra&&rt(u,"TYPE","init"),this.S?(rt(u,"$req",c),rt(u,"SID","null"),x.U=!0,Rs(x,u,null)):Rs(x,u,c),this.I=2}}else this.I==3&&(i?Go(this,i):this.i.length==0||Ro(this.h)||Go(this))};function Go(i,c){var u;c?u=c.l:u=i.V++;const f=Jt(i.J);rt(f,"SID",i.M),rt(f,"RID",u),rt(f,"AID",i.K),Fn(i,f),i.u&&i.o&&Ms(f,i.u,i.o),u=new me(i,i.j,u,i.D+1),i.u===null&&(u.J=i.o),c&&(i.i=c.G.concat(i.i)),c=Ko(i,u,1e3),u.H=Math.round(i.va*.5)+Math.round(i.va*.5*Math.random()),Ns(i.h,u),Rs(u,f,c)}function Fn(i,c){i.H&&zt(i.H,function(u,f){rt(c,f,u)}),i.l&&zt({},function(u,f){rt(c,f,u)})}function Ko(i,c,u){u=Math.min(i.i.length,u);const f=i.l?d(i.l.Ka,i.l,i):null;t:{var x=i.i;let H=-1;for(;;){const pt=["count="+u];H==-1?u>0?(H=x[0].g,pt.push("ofs="+H)):H=0:pt.push("ofs="+H);let tt=!0;for(let vt=0;vt<u;vt++){var S=x[vt].g;const Zt=x[vt].map;if(S-=H,S<0)H=Math.max(0,x[vt].g-100),tt=!1;else try{S="req"+S+"_"||"";try{var k=Zt instanceof Map?Zt:Object.entries(Zt);for(const[Le,_e]of k){let ve=_e;l(_e)&&(ve=Ts(_e)),pt.push(S+Le+"="+encodeURIComponent(ve))}}catch(Le){throw pt.push(S+"type="+encodeURIComponent("_badmap")),Le}}catch{f&&f(Zt)}}if(tt){k=pt.join("&");break t}}k=void 0}return i=i.i.splice(0,u),c.G=i,k}function Qo(i){if(!i.g&&!i.v){i.Y=1;var c=i.Da;lt||p(),Y||(lt(),Y=!0),T.add(c,i),i.A=0}}function js(i){return i.g||i.v||i.A>=3?!1:(i.Y++,i.v=Sn(d(i.Da,i),Jo(i,i.A)),i.A++,!0)}n.Da=function(){if(this.v=null,Yo(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var i=4*this.T;this.j.info("BP detection timer enabled: "+i),this.B=Sn(d(this.Wa,this),i)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,kt(10),Er(this),Yo(this))};function Ls(i){i.B!=null&&(a.clearTimeout(i.B),i.B=null)}function Yo(i){i.g=new me(i,i.j,"rpc",i.Y),i.u===null&&(i.g.J=i.o),i.g.P=0;var c=Jt(i.na);rt(c,"RID","rpc"),rt(c,"SID",i.M),rt(c,"AID",i.K),rt(c,"CI",i.F?"0":"1"),!i.F&&i.ia&&rt(c,"TO",i.ia),rt(c,"TYPE","xmlhttp"),Fn(i,c),i.u&&i.o&&Ms(c,i.u,i.o),i.O&&(i.g.H=i.O);var u=i.g;i=i.ba,u.M=1,u.A=_r(Jt(c)),u.u=null,u.R=!0,Io(u,i)}n.Va=function(){this.C!=null&&(this.C=null,Er(this),js(this),kt(19))};function Tr(i){i.C!=null&&(a.clearTimeout(i.C),i.C=null)}function Xo(i,c){var u=null;if(i.g==c){Tr(i),Ls(i),i.g=null;var f=2}else if(Vs(i.h,c))u=c.G,Po(i.h,c),f=1;else return;if(i.I!=0){if(c.o)if(f==1){u=c.u?c.u.length:0,c=Date.now()-c.F;var x=i.D;f=pr(),Nt(f,new vo(f,u)),br(i)}else Qo(i);else if(x=c.m,x==3||x==0&&c.X>0||!(f==1&&nh(i,c)||f==2&&js(i)))switch(u&&u.length>0&&(c=i.h,c.i=c.i.concat(u)),x){case 1:je(i,5);break;case 4:je(i,10);break;case 3:je(i,6);break;default:je(i,2)}}}function Jo(i,c){let u=i.Qa+Math.floor(Math.random()*i.Za);return i.isActive()||(u*=2),u*c}function je(i,c){if(i.j.info("Error code "+c),c==2){var u=d(i.bb,i),f=i.Ua;const x=!f;f=new pe(f||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Vn(f,"https"),_r(f),x?Yu(f.toString(),u):Xu(f.toString(),u)}else kt(2);i.I=0,i.l&&i.l.pa(c),Zo(i),Wo(i)}n.bb=function(i){i?(this.j.info("Successfully pinged google.com"),kt(2)):(this.j.info("Failed to ping google.com"),kt(1))};function Zo(i){if(i.I=0,i.ja=[],i.l){const c=Vo(i.h);(c.length!=0||i.i.length!=0)&&(P(i.ja,c),P(i.ja,i.i),i.h.i.length=0,A(i.i),i.i.length=0),i.l.oa()}}function ta(i,c,u){var f=u instanceof pe?Jt(u):new pe(u);if(f.g!="")c&&(f.g=c+"."+f.g),Nn(f,f.u);else{var x=a.location;f=x.protocol,c=c?c+"."+x.hostname:x.hostname,x=+x.port;const S=new pe(null);f&&Vn(S,f),c&&(S.g=c),x&&Nn(S,x),u&&(S.h=u),f=S}return u=i.G,c=i.wa,u&&c&&rt(f,u,c),rt(f,"VER",i.ka),Fn(i,f),f}function ea(i,c,u){if(c&&!i.L)throw Error("Can't create secondary domain capable XhrIo object.");return c=i.Aa&&!i.ma?new ct(new Ds({ab:u})):new ct(i.ma),c.Fa(i.L),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function na(){}n=na.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Ir(){}Ir.prototype.g=function(i,c){return new Ft(i,c)};function Ft(i,c){St.call(this),this.g=new Ho(c),this.l=i,this.h=c&&c.messageUrlParams||null,i=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(i?i["X-WebChannel-Content-Type"]=c.messageContentType:i={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.sa&&(i?i["X-WebChannel-Client-Profile"]=c.sa:i={"X-WebChannel-Client-Profile":c.sa}),this.g.U=i,(i=c&&c.Qb)&&!g(i)&&(this.g.u=i),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!g(c)&&(this.g.G=c,i=this.h,i!==null&&c in i&&(i=this.h,c in i&&delete i[c])),this.j=new rn(this)}y(Ft,St),Ft.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Ft.prototype.close=function(){Os(this.g)},Ft.prototype.o=function(i){var c=this.g;if(typeof i=="string"){var u={};u.__data__=i,i=u}else this.v&&(u={},u.__data__=Ts(i),i=u);c.i.push(new zu(c.Ya++,i)),c.I==3&&br(c)},Ft.prototype.N=function(){this.g.l=null,delete this.j,Os(this.g),delete this.g,Ft.Z.N.call(this)};function ra(i){Is.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var c=i.__sm__;if(c){t:{for(const u in c){i=u;break t}i=void 0}(this.i=i)&&(i=this.i,c=c!==null&&i in c?c[i]:void 0),this.data=c}else this.data=i}y(ra,Is);function sa(){As.call(this),this.status=1}y(sa,As);function rn(i){this.g=i}y(rn,na),rn.prototype.ra=function(){Nt(this.g,"a")},rn.prototype.qa=function(i){Nt(this.g,new ra(i))},rn.prototype.pa=function(i){Nt(this.g,new sa)},rn.prototype.oa=function(){Nt(this.g,"b")},Ir.prototype.createWebChannel=Ir.prototype.g,Ft.prototype.send=Ft.prototype.o,Ft.prototype.open=Ft.prototype.m,Ft.prototype.close=Ft.prototype.close,rl=function(){return new Ir},nl=function(){return pr()},el=De,oi={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},gr.NO_ERROR=0,gr.TIMEOUT=8,gr.HTTP_ERROR=6,jr=gr,wo.COMPLETE="complete",tl=wo,po.EventType=An,An.OPEN="a",An.CLOSE="b",An.ERROR="c",An.MESSAGE="d",St.prototype.listen=St.prototype.J,zn=po,ct.prototype.listenOnce=ct.prototype.K,ct.prototype.getLastError=ct.prototype.Ha,ct.prototype.getLastErrorCode=ct.prototype.ya,ct.prototype.getStatus=ct.prototype.ca,ct.prototype.getResponseJson=ct.prototype.La,ct.prototype.getResponseText=ct.prototype.la,ct.prototype.send=ct.prototype.ea,ct.prototype.setWithCredentials=ct.prototype.Fa,Zc=ct}).apply(typeof Cr<"u"?Cr:typeof self<"u"?self:typeof window<"u"?window:{});const xa="@firebase/firestore",Sa="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Pt.UNAUTHENTICATED=new Pt(null),Pt.GOOGLE_CREDENTIALS=new Pt("google-credentials-uid"),Pt.FIRST_PARTY=new Pt("first-party-uid"),Pt.MOCK_USER=new Pt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vn="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const He=new Wc("@firebase/firestore");function sn(){return He.logLevel}function M(n,...t){if(He.logLevel<=Q.DEBUG){const e=t.map(Si);He.debug(`Firestore (${vn}): ${n}`,...e)}}function he(n,...t){if(He.logLevel<=Q.ERROR){const e=t.map(Si);He.error(`Firestore (${vn}): ${n}`,...e)}}function dn(n,...t){if(He.logLevel<=Q.WARN){const e=t.map(Si);He.warn(`Firestore (${vn}): ${n}`,...e)}}function Si(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(e){return JSON.stringify(e)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(n,t,e){let r="Unexpected state";typeof t=="string"?r=t:e=t,sl(n,r,e)}function sl(n,t,e){let r=`FIRESTORE (${vn}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(e!==void 0)try{r+=" CONTEXT: "+JSON.stringify(e)}catch{r+=" CONTEXT: "+e}throw he(r),new Error(r)}function J(n,t,e,r){let s="Unexpected state";typeof e=="string"?s=e:r=e,n||sl(t,s,r)}function z(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class D extends _n{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Km{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Pt.UNAUTHENTICATED)))}shutdown(){}}class Qm{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class Ym{constructor(t){this.t=t,this.currentUser=Pt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){J(this.o===void 0,42304);let r=this.i;const s=h=>this.i!==r?(r=this.i,e(h)):Promise.resolve();let o=new ze;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new ze,t.enqueueRetryable((()=>s(this.currentUser)))};const a=()=>{const h=o;t.enqueueRetryable((async()=>{await h.promise,await s(this.currentUser)}))},l=h=>{M("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((h=>l(h))),setTimeout((()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?l(h):(M("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new ze)}}),0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((r=>this.i!==t?(M("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(J(typeof r.accessToken=="string",31837,{l:r}),new il(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return J(t===null||typeof t=="string",2055,{h:t}),new Pt(t)}}class Xm{constructor(t,e,r){this.P=t,this.T=e,this.I=r,this.type="FirstParty",this.user=Pt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Jm{constructor(t,e,r){this.P=t,this.T=e,this.I=r}getToken(){return Promise.resolve(new Xm(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable((()=>e(Pt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Ra{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Zm{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,km(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){J(this.o===void 0,3512);const r=o=>{o.error!=null&&M("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,M("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable((()=>r(o)))};const s=o=>{M("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((o=>s(o))),setTimeout((()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?s(o):M("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Ra(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((e=>e?(J(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new Ra(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tp(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=tp(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<e&&(r+=t.charAt(s[o]%62))}return r}}function W(n,t){return n<t?-1:n>t?1:0}function ai(n,t){const e=Math.min(n.length,t.length);for(let r=0;r<e;r++){const s=n.charAt(r),o=t.charAt(r);if(s!==o)return Hs(s)===Hs(o)?W(s,o):Hs(s)?1:-1}return W(n.length,t.length)}const ep=55296,np=57343;function Hs(n){const t=n.charCodeAt(0);return t>=ep&&t<=np}function fn(n,t,e){return n.length===t.length&&n.every(((r,s)=>e(r,t[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ca="__name__";class te{constructor(t,e,r){e===void 0?e=0:e>t.length&&F(637,{offset:e,range:t.length}),r===void 0?r=t.length-e:r>t.length-e&&F(1746,{length:r,range:t.length-e}),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return te.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof te?t.forEach((r=>{e.push(r)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const o=te.compareSegments(t.get(s),e.get(s));if(o!==0)return o}return W(t.length,e.length)}static compareSegments(t,e){const r=te.isNumericId(t),s=te.isNumericId(e);return r&&!s?-1:!r&&s?1:r&&s?te.extractNumericId(t).compare(te.extractNumericId(e)):ai(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Ie.fromString(t.substring(4,t.length-2))}}class et extends te{construct(t,e,r){return new et(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new D(R.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter((s=>s.length>0)))}return new et(e)}static emptyPath(){return new et([])}}const rp=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Tt extends te{construct(t,e,r){return new Tt(t,e,r)}static isValidIdentifier(t){return rp.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Tt.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ca}static keyField(){return new Tt([Ca])}static fromServerFormat(t){const e=[];let r="",s=0;const o=()=>{if(r.length===0)throw new D(R.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;s<t.length;){const l=t[s];if(l==="\\"){if(s+1===t.length)throw new D(R.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new D(R.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=h,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(o(),s++)}if(o(),a)throw new D(R.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Tt(e)}static emptyPath(){return new Tt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(t){this.path=t}static fromPath(t){return new j(et.fromString(t))}static fromName(t){return new j(et.fromString(t).popFirst(5))}static empty(){return new j(et.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&et.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return et.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new j(new et(t.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ol(n,t,e){if(!e)throw new D(R.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function sp(n,t,e,r){if(t===!0&&r===!0)throw new D(R.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Pa(n){if(!j.isDocumentKey(n))throw new D(R.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Va(n){if(j.isDocumentKey(n))throw new D(R.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function al(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function us(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=(function(r){return r.constructor?r.constructor.name:null})(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":F(12329,{type:typeof n})}function Gn(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new D(R.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=us(n);throw new D(R.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(n,t){const e={typeString:n};return t&&(e.value=t),e}function lr(n,t){if(!al(n))throw new D(R.INVALID_ARGUMENT,"JSON must be an object");let e;for(const r in t)if(t[r]){const s=t[r].typeString,o="value"in t[r]?{value:t[r].value}:void 0;if(!(r in n)){e=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){e=`JSON field '${r}' must be a ${s}.`;break}if(o!==void 0&&a!==o.value){e=`Expected '${r}' field to equal '${o.value}'`;break}}if(e)throw new D(R.INVALID_ARGUMENT,e);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Na=-62135596800,ka=1e6;class st{static now(){return st.fromMillis(Date.now())}static fromDate(t){return st.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*ka);return new st(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new D(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new D(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<Na)throw new D(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new D(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/ka}_compareTo(t){return this.seconds===t.seconds?W(this.nanoseconds,t.nanoseconds):W(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:st._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(lr(t,st._jsonSchema))return new st(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-Na;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}st._jsonSchemaVersion="firestore/timestamp/1.0",st._jsonSchema={type:mt("string",st._jsonSchemaVersion),seconds:mt("number"),nanoseconds:mt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{static fromTimestamp(t){return new U(t)}static min(){return new U(new st(0,0))}static max(){return new U(new st(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tr=-1;function ip(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=U.fromTimestamp(r===1e9?new st(e+1,0):new st(e,r));return new xe(s,j.empty(),t)}function op(n){return new xe(n.readTime,n.key,tr)}class xe{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new xe(U.min(),j.empty(),tr)}static max(){return new xe(U.max(),j.empty(),tr)}}function ap(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=j.comparator(n.documentKey,t.documentKey),e!==0?e:W(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cp="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class lp{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wn(n){if(n.code!==R.FAILED_PRECONDITION||n.message!==cp)throw n;M("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&F(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new C(((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,s)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof C?e:C.resolve(e)}catch(e){return C.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):C.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):C.reject(e)}static resolve(t){return new C(((e,r)=>{e(t)}))}static reject(t){return new C(((e,r)=>{r(t)}))}static waitFor(t){return new C(((e,r)=>{let s=0,o=0,a=!1;t.forEach((l=>{++s,l.next((()=>{++o,a&&o===s&&e()}),(h=>r(h)))})),a=!0,o===s&&e()}))}static or(t){let e=C.resolve(!1);for(const r of t)e=e.next((s=>s?C.resolve(s):r()));return e}static forEach(t,e){const r=[];return t.forEach(((s,o)=>{r.push(e.call(this,s,o))})),this.waitFor(r)}static mapArray(t,e){return new C(((r,s)=>{const o=t.length,a=new Array(o);let l=0;for(let h=0;h<o;h++){const d=h;e(t[d]).next((m=>{a[d]=m,++l,l===o&&r(a)}),(m=>s(m)))}}))}static doWhile(t,e){return new C(((r,s)=>{const o=()=>{t()===!0?e().next((()=>{o()}),s):r()};o()}))}}function up(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function En(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>e.writeSequenceNumber(r))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}hs.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ci=-1;function ds(n){return n==null}function Xr(n){return n===0&&1/n==-1/0}function hp(n){return typeof n=="number"&&Number.isInteger(n)&&!Xr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cl="";function dp(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=Da(t)),t=fp(n.get(e),t);return Da(t)}function fp(n,t){let e=t;const r=n.length;for(let s=0;s<r;s++){const o=n.charAt(s);switch(o){case"\0":e+="";break;case cl:e+="";break;default:e+=o}}return e}function Da(n){return n+cl+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ma(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Ge(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function ll(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(t,e){this.comparator=t,this.root=e||bt.EMPTY}insert(t,e){return new at(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,bt.BLACK,null,null))}remove(t){return new at(this.comparator,this.root.remove(t,this.comparator).copy(null,null,bt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,r)=>(t(e,r),!1)))}toString(){const t=[];return this.inorderTraversal(((e,r)=>(t.push(`${e}:${r}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Pr(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Pr(this.root,t,this.comparator,!1)}getReverseIterator(){return new Pr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Pr(this.root,t,this.comparator,!0)}}class Pr{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class bt{constructor(t,e,r,s,o){this.key=t,this.value=e,this.color=r??bt.RED,this.left=s??bt.EMPTY,this.right=o??bt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,o){return new bt(t??this.key,e??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const o=r(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,r),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return bt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return bt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,bt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,bt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw F(43730,{key:this.key,value:this.value});if(this.right.isRed())throw F(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw F(27949);return t+(this.isRed()?0:1)}}bt.EMPTY=null,bt.RED=!0,bt.BLACK=!1;bt.EMPTY=new class{constructor(){this.size=0}get key(){throw F(57766)}get value(){throw F(16141)}get color(){throw F(16727)}get left(){throw F(29726)}get right(){throw F(36894)}copy(t,e,r,s,o){return this}insert(t,e,r){return new bt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(t){this.comparator=t,this.data=new at(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,r)=>(t(e),!1)))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Oa(this.data.getIterator())}getIteratorFrom(t){return new Oa(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((r=>{e=e.add(r)})),e}isEqual(t){if(!(t instanceof _t)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new _t(this.comparator);return e.data=t,e}}class Oa{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(t){this.fields=t,t.sort(Tt.comparator)}static empty(){return new Gt([])}unionWith(t){let e=new _t(Tt.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Gt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return fn(this.fields,t.fields,((e,r)=>e.isEqual(r)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(t){this.binaryString=t}static fromBase64String(t){const e=(function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new ul("Invalid base64 string: "+o):o}})(t);return new It(e)}static fromUint8Array(t){const e=(function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o})(t);return new It(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(e){return btoa(e)})(this.binaryString)}toUint8Array(){return(function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return W(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}It.EMPTY_BYTE_STRING=new It("");const mp=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Se(n){if(J(!!n,39018),typeof n=="string"){let t=0;const e=mp.exec(n);if(J(!!e,46558,{timestamp:n}),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:ht(n.seconds),nanos:ht(n.nanos)}}function ht(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Re(n){return typeof n=="string"?It.fromBase64String(n):It.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hl="server_timestamp",dl="__type__",fl="__previous_value__",ml="__local_write_time__";function Pi(n){return(n?.mapValue?.fields||{})[dl]?.stringValue===hl}function fs(n){const t=n.mapValue.fields[fl];return Pi(t)?fs(t):t}function er(n){const t=Se(n.mapValue.fields[ml].timestampValue);return new st(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp{constructor(t,e,r,s,o,a,l,h,d,m){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=h,this.useFetchStreams=d,this.isUsingEmulator=m}}const Jr="(default)";class nr{constructor(t,e){this.projectId=t,this.database=e||Jr}static empty(){return new nr("","")}get isDefaultDatabase(){return this.database===Jr}isEqual(t){return t instanceof nr&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pl="__type__",gp="__max__",Vr={mapValue:{}},gl="__vector__",Zr="value";function Ce(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Pi(n)?4:_p(n)?9007199254740991:yp(n)?10:11:F(28295,{value:n})}function oe(n,t){if(n===t)return!0;const e=Ce(n);if(e!==Ce(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return er(n).isEqual(er(t));case 3:return(function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=Se(s.timestampValue),l=Se(o.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos})(n,t);case 5:return n.stringValue===t.stringValue;case 6:return(function(s,o){return Re(s.bytesValue).isEqual(Re(o.bytesValue))})(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return(function(s,o){return ht(s.geoPointValue.latitude)===ht(o.geoPointValue.latitude)&&ht(s.geoPointValue.longitude)===ht(o.geoPointValue.longitude)})(n,t);case 2:return(function(s,o){if("integerValue"in s&&"integerValue"in o)return ht(s.integerValue)===ht(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const a=ht(s.doubleValue),l=ht(o.doubleValue);return a===l?Xr(a)===Xr(l):isNaN(a)&&isNaN(l)}return!1})(n,t);case 9:return fn(n.arrayValue.values||[],t.arrayValue.values||[],oe);case 10:case 11:return(function(s,o){const a=s.mapValue.fields||{},l=o.mapValue.fields||{};if(Ma(a)!==Ma(l))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(l[h]===void 0||!oe(a[h],l[h])))return!1;return!0})(n,t);default:return F(52216,{left:n})}}function rr(n,t){return(n.values||[]).find((e=>oe(e,t)))!==void 0}function mn(n,t){if(n===t)return 0;const e=Ce(n),r=Ce(t);if(e!==r)return W(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return W(n.booleanValue,t.booleanValue);case 2:return(function(o,a){const l=ht(o.integerValue||o.doubleValue),h=ht(a.integerValue||a.doubleValue);return l<h?-1:l>h?1:l===h?0:isNaN(l)?isNaN(h)?0:-1:1})(n,t);case 3:return ja(n.timestampValue,t.timestampValue);case 4:return ja(er(n),er(t));case 5:return ai(n.stringValue,t.stringValue);case 6:return(function(o,a){const l=Re(o),h=Re(a);return l.compareTo(h)})(n.bytesValue,t.bytesValue);case 7:return(function(o,a){const l=o.split("/"),h=a.split("/");for(let d=0;d<l.length&&d<h.length;d++){const m=W(l[d],h[d]);if(m!==0)return m}return W(l.length,h.length)})(n.referenceValue,t.referenceValue);case 8:return(function(o,a){const l=W(ht(o.latitude),ht(a.latitude));return l!==0?l:W(ht(o.longitude),ht(a.longitude))})(n.geoPointValue,t.geoPointValue);case 9:return La(n.arrayValue,t.arrayValue);case 10:return(function(o,a){const l=o.fields||{},h=a.fields||{},d=l[Zr]?.arrayValue,m=h[Zr]?.arrayValue,y=W(d?.values?.length||0,m?.values?.length||0);return y!==0?y:La(d,m)})(n.mapValue,t.mapValue);case 11:return(function(o,a){if(o===Vr.mapValue&&a===Vr.mapValue)return 0;if(o===Vr.mapValue)return 1;if(a===Vr.mapValue)return-1;const l=o.fields||{},h=Object.keys(l),d=a.fields||{},m=Object.keys(d);h.sort(),m.sort();for(let y=0;y<h.length&&y<m.length;++y){const b=ai(h[y],m[y]);if(b!==0)return b;const A=mn(l[h[y]],d[m[y]]);if(A!==0)return A}return W(h.length,m.length)})(n.mapValue,t.mapValue);default:throw F(23264,{he:e})}}function ja(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return W(n,t);const e=Se(n),r=Se(t),s=W(e.seconds,r.seconds);return s!==0?s:W(e.nanos,r.nanos)}function La(n,t){const e=n.values||[],r=t.values||[];for(let s=0;s<e.length&&s<r.length;++s){const o=mn(e[s],r[s]);if(o)return o}return W(e.length,r.length)}function pn(n){return ci(n)}function ci(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(e){const r=Se(e);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(e){return Re(e).toBase64()})(n.bytesValue):"referenceValue"in n?(function(e){return j.fromName(e).toString()})(n.referenceValue):"geoPointValue"in n?(function(e){return`geo(${e.latitude},${e.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(e){let r="[",s=!0;for(const o of e.values||[])s?s=!1:r+=",",r+=ci(o);return r+"]"})(n.arrayValue):"mapValue"in n?(function(e){const r=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${ci(e.fields[a])}`;return s+"}"})(n.mapValue):F(61005,{value:n})}function Lr(n){switch(Ce(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=fs(n);return t?16+Lr(t):16;case 5:return 2*n.stringValue.length;case 6:return Re(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,o)=>s+Lr(o)),0)})(n.arrayValue);case 10:case 11:return(function(r){let s=0;return Ge(r.fields,((o,a)=>{s+=o.length+Lr(a)})),s})(n.mapValue);default:throw F(13486,{value:n})}}function Fa(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function li(n){return!!n&&"integerValue"in n}function Vi(n){return!!n&&"arrayValue"in n}function Ba(n){return!!n&&"nullValue"in n}function Ua(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Fr(n){return!!n&&"mapValue"in n}function yp(n){return(n?.mapValue?.fields||{})[pl]?.stringValue===gl}function Kn(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const t={mapValue:{fields:{}}};return Ge(n.mapValue.fields,((e,r)=>t.mapValue.fields[e]=Kn(r))),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Kn(n.arrayValue.values[e]);return t}return{...n}}function _p(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===gp}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(t){this.value=t}static empty(){return new Ht({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!Fr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Kn(e)}setAll(t){let e=Tt.emptyPath(),r={},s=[];t.forEach(((a,l)=>{if(!e.isImmediateParentOf(l)){const h=this.getFieldsMap(e);this.applyChanges(h,r,s),r={},s=[],e=l.popLast()}a?r[l.lastSegment()]=Kn(a):s.push(l.lastSegment())}));const o=this.getFieldsMap(e);this.applyChanges(o,r,s)}delete(t){const e=this.field(t.popLast());Fr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return oe(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];Fr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){Ge(e,((s,o)=>t[s]=o));for(const s of r)delete t[s]}clone(){return new Ht(Kn(this.value))}}function yl(n){const t=[];return Ge(n.fields,((e,r)=>{const s=new Tt([e]);if(Fr(r)){const o=yl(r.mapValue).fields;if(o.length===0)t.push(s);else for(const a of o)t.push(s.child(a))}else t.push(s)})),new Gt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(t,e,r,s,o,a,l){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=o,this.data=a,this.documentState=l}static newInvalidDocument(t){return new Vt(t,0,U.min(),U.min(),U.min(),Ht.empty(),0)}static newFoundDocument(t,e,r,s){return new Vt(t,1,e,U.min(),r,s,0)}static newNoDocument(t,e){return new Vt(t,2,e,U.min(),U.min(),Ht.empty(),0)}static newUnknownDocument(t,e){return new Vt(t,3,e,U.min(),U.min(),Ht.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(U.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Ht.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Ht.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=U.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Vt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Vt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(t,e){this.position=t,this.inclusive=e}}function za(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const o=t[s],a=n.position[s];if(o.field.isKeyField()?r=j.comparator(j.fromName(a.referenceValue),e.key):r=mn(a,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function $a(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!oe(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(t,e="asc"){this.field=t,this.dir=e}}function vp(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{}class ft extends _l{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new Ep(t,e,r):e==="array-contains"?new Ip(t,r):e==="in"?new Ap(t,r):e==="not-in"?new xp(t,r):e==="array-contains-any"?new Sp(t,r):new ft(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new bp(t,r):new Tp(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(mn(e,this.value)):e!==null&&Ce(this.value)===Ce(e)&&this.matchesComparison(mn(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return F(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Kt extends _l{constructor(t,e){super(),this.filters=t,this.op=e,this.Pe=null}static create(t,e){return new Kt(t,e)}matches(t){return vl(this)?this.filters.find((e=>!e.matches(t)))===void 0:this.filters.find((e=>e.matches(t)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function vl(n){return n.op==="and"}function wl(n){return wp(n)&&vl(n)}function wp(n){for(const t of n.filters)if(t instanceof Kt)return!1;return!0}function ui(n){if(n instanceof ft)return n.field.canonicalString()+n.op.toString()+pn(n.value);if(wl(n))return n.filters.map((t=>ui(t))).join(",");{const t=n.filters.map((e=>ui(e))).join(",");return`${n.op}(${t})`}}function El(n,t){return n instanceof ft?(function(r,s){return s instanceof ft&&r.op===s.op&&r.field.isEqual(s.field)&&oe(r.value,s.value)})(n,t):n instanceof Kt?(function(r,s){return s instanceof Kt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((o,a,l)=>o&&El(a,s.filters[l])),!0):!1})(n,t):void F(19439)}function bl(n){return n instanceof ft?(function(e){return`${e.field.canonicalString()} ${e.op} ${pn(e.value)}`})(n):n instanceof Kt?(function(e){return e.op.toString()+" {"+e.getFilters().map(bl).join(" ,")+"}"})(n):"Filter"}class Ep extends ft{constructor(t,e,r){super(t,e,r),this.key=j.fromName(r.referenceValue)}matches(t){const e=j.comparator(t.key,this.key);return this.matchesComparison(e)}}class bp extends ft{constructor(t,e){super(t,"in",e),this.keys=Tl("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class Tp extends ft{constructor(t,e){super(t,"not-in",e),this.keys=Tl("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Tl(n,t){return(t.arrayValue?.values||[]).map((e=>j.fromName(e.referenceValue)))}class Ip extends ft{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Vi(e)&&rr(e.arrayValue,this.value)}}class Ap extends ft{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&rr(this.value.arrayValue,e)}}class xp extends ft{constructor(t,e){super(t,"not-in",e)}matches(t){if(rr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!rr(this.value.arrayValue,e)}}class Sp extends ft{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Vi(e)||!e.arrayValue.values)&&e.arrayValue.values.some((r=>rr(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rp{constructor(t,e=null,r=[],s=[],o=null,a=null,l=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=a,this.endAt=l,this.Te=null}}function qa(n,t=null,e=[],r=[],s=null,o=null,a=null){return new Rp(n,t,e,r,s,o,a)}function Ni(n){const t=z(n);if(t.Te===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((r=>ui(r))).join(","),e+="|ob:",e+=t.orderBy.map((r=>(function(o){return o.field.canonicalString()+o.dir})(r))).join(","),ds(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((r=>pn(r))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((r=>pn(r))).join(",")),t.Te=e}return t.Te}function ki(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!vp(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!El(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!$a(n.startAt,t.startAt)&&$a(n.endAt,t.endAt)}function hi(n){return j.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(t,e=null,r=[],s=[],o=null,a="F",l=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=a,this.startAt=l,this.endAt=h,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function Cp(n,t,e,r,s,o,a,l){return new bn(n,t,e,r,s,o,a,l)}function Di(n){return new bn(n)}function Ha(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Il(n){return n.collectionGroup!==null}function Qn(n){const t=z(n);if(t.Ie===null){t.Ie=[];const e=new Set;for(const o of t.explicitOrderBy)t.Ie.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new _t(Tt.comparator);return a.filters.forEach((h=>{h.getFlattenedFilters().forEach((d=>{d.isInequality()&&(l=l.add(d.field))}))})),l})(t).forEach((o=>{e.has(o.canonicalString())||o.isKeyField()||t.Ie.push(new sr(o,r))})),e.has(Tt.keyField().canonicalString())||t.Ie.push(new sr(Tt.keyField(),r))}return t.Ie}function ne(n){const t=z(n);return t.Ee||(t.Ee=Pp(t,Qn(n))),t.Ee}function Pp(n,t){if(n.limitType==="F")return qa(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map((s=>{const o=s.dir==="desc"?"asc":"desc";return new sr(s.field,o)}));const e=n.endAt?new ts(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new ts(n.startAt.position,n.startAt.inclusive):null;return qa(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function di(n,t){const e=n.filters.concat([t]);return new bn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function fi(n,t,e){return new bn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function ms(n,t){return ki(ne(n),ne(t))&&n.limitType===t.limitType}function Al(n){return`${Ni(ne(n))}|lt:${n.limitType}`}function on(n){return`Query(target=${(function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map((s=>bl(s))).join(", ")}]`),ds(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map((s=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(s))).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map((s=>pn(s))).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map((s=>pn(s))).join(",")),`Target(${r})`})(ne(n))}; limitType=${n.limitType})`}function ps(n,t){return t.isFoundDocument()&&(function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):j.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)})(n,t)&&(function(r,s){for(const o of Qn(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0})(n,t)&&(function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0})(n,t)&&(function(r,s){return!(r.startAt&&!(function(a,l,h){const d=za(a,l,h);return a.inclusive?d<=0:d<0})(r.startAt,Qn(r),s)||r.endAt&&!(function(a,l,h){const d=za(a,l,h);return a.inclusive?d>=0:d>0})(r.endAt,Qn(r),s))})(n,t)}function Vp(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function xl(n){return(t,e)=>{let r=!1;for(const s of Qn(n)){const o=Np(s,t,e);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function Np(n,t,e){const r=n.field.isKeyField()?j.comparator(t.key,e.key):(function(o,a,l){const h=a.data.field(o),d=l.data.field(o);return h!==null&&d!==null?mn(h,d):F(42886)})(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return F(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Ge(this.inner,((e,r)=>{for(const[s,o]of r)t(s,o)}))}isEmpty(){return ll(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kp=new at(j.comparator);function de(){return kp}const Sl=new at(j.comparator);function $n(...n){let t=Sl;for(const e of n)t=t.insert(e.key,e);return t}function Rl(n){let t=Sl;return n.forEach(((e,r)=>t=t.insert(e,r.overlayedDocument))),t}function Be(){return Yn()}function Cl(){return Yn()}function Yn(){return new Ke((n=>n.toString()),((n,t)=>n.isEqual(t)))}const Dp=new at(j.comparator),Mp=new _t(j.comparator);function G(...n){let t=Mp;for(const e of n)t=t.add(e);return t}const Op=new _t(W);function jp(){return Op}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mi(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Xr(t)?"-0":t}}function Pl(n){return{integerValue:""+n}}function Lp(n,t){return hp(t)?Pl(t):Mi(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(){this._=void 0}}function Fp(n,t,e){return n instanceof ir?(function(s,o){const a={fields:{[dl]:{stringValue:hl},[ml]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&Pi(o)&&(o=fs(o)),o&&(a.fields[fl]=o),{mapValue:a}})(e,t):n instanceof or?Nl(n,t):n instanceof ar?kl(n,t):(function(s,o){const a=Vl(s,o),l=Wa(a)+Wa(s.Ae);return li(a)&&li(s.Ae)?Pl(l):Mi(s.serializer,l)})(n,t)}function Bp(n,t,e){return n instanceof or?Nl(n,t):n instanceof ar?kl(n,t):e}function Vl(n,t){return n instanceof es?(function(r){return li(r)||(function(o){return!!o&&"doubleValue"in o})(r)})(t)?t:{integerValue:0}:null}class ir extends gs{}class or extends gs{constructor(t){super(),this.elements=t}}function Nl(n,t){const e=Dl(t);for(const r of n.elements)e.some((s=>oe(s,r)))||e.push(r);return{arrayValue:{values:e}}}class ar extends gs{constructor(t){super(),this.elements=t}}function kl(n,t){let e=Dl(t);for(const r of n.elements)e=e.filter((s=>!oe(s,r)));return{arrayValue:{values:e}}}class es extends gs{constructor(t,e){super(),this.serializer=t,this.Ae=e}}function Wa(n){return ht(n.integerValue||n.doubleValue)}function Dl(n){return Vi(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Up{constructor(t,e){this.field=t,this.transform=e}}function zp(n,t){return n.field.isEqual(t.field)&&(function(r,s){return r instanceof or&&s instanceof or||r instanceof ar&&s instanceof ar?fn(r.elements,s.elements,oe):r instanceof es&&s instanceof es?oe(r.Ae,s.Ae):r instanceof ir&&s instanceof ir})(n.transform,t.transform)}class $p{constructor(t,e){this.version=t,this.transformResults=e}}class ce{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new ce}static exists(t){return new ce(void 0,t)}static updateTime(t){return new ce(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Br(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class ys{}function Ml(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new jl(n.key,ce.none()):new ur(n.key,n.data,ce.none());{const e=n.data,r=Ht.empty();let s=new _t(Tt.comparator);for(let o of t.fields)if(!s.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?r.delete(o):r.set(o,a),s=s.add(o)}return new Qe(n.key,r,new Gt(s.toArray()),ce.none())}}function qp(n,t,e){n instanceof ur?(function(s,o,a){const l=s.value.clone(),h=Ka(s.fieldTransforms,o,a.transformResults);l.setAll(h),o.convertToFoundDocument(a.version,l).setHasCommittedMutations()})(n,t,e):n instanceof Qe?(function(s,o,a){if(!Br(s.precondition,o))return void o.convertToUnknownDocument(a.version);const l=Ka(s.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(Ol(s)),h.setAll(l),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()})(n,t,e):(function(s,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()})(0,t,e)}function Xn(n,t,e,r){return n instanceof ur?(function(o,a,l,h){if(!Br(o.precondition,a))return l;const d=o.value.clone(),m=Qa(o.fieldTransforms,h,a);return d.setAll(m),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null})(n,t,e,r):n instanceof Qe?(function(o,a,l,h){if(!Br(o.precondition,a))return l;const d=Qa(o.fieldTransforms,h,a),m=a.data;return m.setAll(Ol(o)),m.setAll(d),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),l===null?null:l.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map((y=>y.field)))})(n,t,e,r):(function(o,a,l){return Br(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l})(n,t,e)}function Hp(n,t){let e=null;for(const r of n.fieldTransforms){const s=t.data.field(r.field),o=Vl(r.transform,s||null);o!=null&&(e===null&&(e=Ht.empty()),e.set(r.field,o))}return e||null}function Ga(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&fn(r,s,((o,a)=>zp(o,a)))})(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class ur extends ys{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Qe extends ys{constructor(t,e,r,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Ol(n){const t=new Map;return n.fieldMask.fields.forEach((e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}})),t}function Ka(n,t,e){const r=new Map;J(n.length===e.length,32656,{Re:e.length,Ve:n.length});for(let s=0;s<e.length;s++){const o=n[s],a=o.transform,l=t.data.field(o.field);r.set(o.field,Bp(a,l,e[s]))}return r}function Qa(n,t,e){const r=new Map;for(const s of n){const o=s.transform,a=e.data.field(s.field);r.set(s.field,Fp(o,a,t))}return r}class jl extends ys{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Wp extends ys{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gp{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&qp(o,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=Xn(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=Xn(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=Cl();return this.mutations.forEach((s=>{const o=t.get(s.key),a=o.overlayedDocument;let l=this.applyToLocalView(a,o.mutatedFields);l=e.has(s.key)?null:l;const h=Ml(a,l);h!==null&&r.set(s.key,h),a.isValidDocument()||a.convertToNoDocument(U.min())})),r}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),G())}isEqual(t){return this.batchId===t.batchId&&fn(this.mutations,t.mutations,((e,r)=>Ga(e,r)))&&fn(this.baseMutations,t.baseMutations,((e,r)=>Ga(e,r)))}}class Oi{constructor(t,e,r,s){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=s}static from(t,e,r){J(t.mutations.length===r.length,58842,{me:t.mutations.length,fe:r.length});let s=(function(){return Dp})();const o=t.mutations;for(let a=0;a<o.length;a++)s=s.insert(o[a].key,r[a].version);return new Oi(t,e,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kp{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qp{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var dt,K;function Yp(n){switch(n){case R.OK:return F(64938);case R.CANCELLED:case R.UNKNOWN:case R.DEADLINE_EXCEEDED:case R.RESOURCE_EXHAUSTED:case R.INTERNAL:case R.UNAVAILABLE:case R.UNAUTHENTICATED:return!1;case R.INVALID_ARGUMENT:case R.NOT_FOUND:case R.ALREADY_EXISTS:case R.PERMISSION_DENIED:case R.FAILED_PRECONDITION:case R.ABORTED:case R.OUT_OF_RANGE:case R.UNIMPLEMENTED:case R.DATA_LOSS:return!0;default:return F(15467,{code:n})}}function Ll(n){if(n===void 0)return he("GRPC error has no .code"),R.UNKNOWN;switch(n){case dt.OK:return R.OK;case dt.CANCELLED:return R.CANCELLED;case dt.UNKNOWN:return R.UNKNOWN;case dt.DEADLINE_EXCEEDED:return R.DEADLINE_EXCEEDED;case dt.RESOURCE_EXHAUSTED:return R.RESOURCE_EXHAUSTED;case dt.INTERNAL:return R.INTERNAL;case dt.UNAVAILABLE:return R.UNAVAILABLE;case dt.UNAUTHENTICATED:return R.UNAUTHENTICATED;case dt.INVALID_ARGUMENT:return R.INVALID_ARGUMENT;case dt.NOT_FOUND:return R.NOT_FOUND;case dt.ALREADY_EXISTS:return R.ALREADY_EXISTS;case dt.PERMISSION_DENIED:return R.PERMISSION_DENIED;case dt.FAILED_PRECONDITION:return R.FAILED_PRECONDITION;case dt.ABORTED:return R.ABORTED;case dt.OUT_OF_RANGE:return R.OUT_OF_RANGE;case dt.UNIMPLEMENTED:return R.UNIMPLEMENTED;case dt.DATA_LOSS:return R.DATA_LOSS;default:return F(39323,{code:n})}}(K=dt||(dt={}))[K.OK=0]="OK",K[K.CANCELLED=1]="CANCELLED",K[K.UNKNOWN=2]="UNKNOWN",K[K.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",K[K.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",K[K.NOT_FOUND=5]="NOT_FOUND",K[K.ALREADY_EXISTS=6]="ALREADY_EXISTS",K[K.PERMISSION_DENIED=7]="PERMISSION_DENIED",K[K.UNAUTHENTICATED=16]="UNAUTHENTICATED",K[K.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",K[K.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",K[K.ABORTED=10]="ABORTED",K[K.OUT_OF_RANGE=11]="OUT_OF_RANGE",K[K.UNIMPLEMENTED=12]="UNIMPLEMENTED",K[K.INTERNAL=13]="INTERNAL",K[K.UNAVAILABLE=14]="UNAVAILABLE",K[K.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xp(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jp=new Ie([4294967295,4294967295],0);function Ya(n){const t=Xp().encode(n),e=new Jc;return e.update(t),new Uint8Array(e.digest())}function Xa(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new Ie([e,r],0),new Ie([s,o],0)]}class ji{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new qn(`Invalid padding: ${e}`);if(r<0)throw new qn(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new qn(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new qn(`Invalid padding when bitmap length is 0: ${e}`);this.ge=8*t.length-e,this.pe=Ie.fromNumber(this.ge)}ye(t,e,r){let s=t.add(e.multiply(Ie.fromNumber(r)));return s.compare(Jp)===1&&(s=new Ie([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const e=Ya(t),[r,s]=Xa(e);for(let o=0;o<this.hashCount;o++){const a=this.ye(r,s,o);if(!this.we(a))return!1}return!0}static create(t,e,r){const s=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new ji(o,s,e);return r.forEach((l=>a.insert(l))),a}insert(t){if(this.ge===0)return;const e=Ya(t),[r,s]=Xa(e);for(let o=0;o<this.hashCount;o++){const a=this.ye(r,s,o);this.Se(a)}}Se(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class qn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(t,e,r,s,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const s=new Map;return s.set(t,hr.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new _s(U.min(),s,new at(W),de(),G())}}class hr{constructor(t,e,r,s,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new hr(r,e,G(),G(),G())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(t,e,r,s){this.be=t,this.removedTargetIds=e,this.key=r,this.De=s}}class Fl{constructor(t,e){this.targetId=t,this.Ce=e}}class Bl{constructor(t,e,r=It.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=s}}class Ja{constructor(){this.ve=0,this.Fe=Za(),this.Me=It.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=G(),e=G(),r=G();return this.Fe.forEach(((s,o)=>{switch(o){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:r=r.add(s);break;default:F(38017,{changeType:o})}})),new hr(this.Me,this.xe,t,e,r)}qe(){this.Oe=!1,this.Fe=Za()}Qe(t,e){this.Oe=!0,this.Fe=this.Fe.insert(t,e)}$e(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}Ue(){this.ve+=1}Ke(){this.ve-=1,J(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class Zp{constructor(t){this.Ge=t,this.ze=new Map,this.je=de(),this.Je=Nr(),this.He=Nr(),this.Ye=new at(W)}Ze(t){for(const e of t.be)t.De&&t.De.isFoundDocument()?this.Xe(e,t.De):this.et(e,t.key,t.De);for(const e of t.removedTargetIds)this.et(e,t.key,t.De)}tt(t){this.forEachTarget(t,(e=>{const r=this.nt(e);switch(t.state){case 0:this.rt(e)&&r.Le(t.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(t.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(e);break;case 3:this.rt(e)&&(r.We(),r.Le(t.resumeToken));break;case 4:this.rt(e)&&(this.it(e),r.Le(t.resumeToken));break;default:F(56790,{state:t.state})}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ze.forEach(((r,s)=>{this.rt(s)&&e(s)}))}st(t){const e=t.targetId,r=t.Ce.count,s=this.ot(e);if(s){const o=s.target;if(hi(o))if(r===0){const a=new j(o.path);this.et(e,a,Vt.newNoDocument(a,U.min()))}else J(r===1,20013,{expectedCount:r});else{const a=this._t(e);if(a!==r){const l=this.ut(t),h=l?this.ct(l,t,a):1;if(h!==0){this.it(e);const d=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(e,d)}}}}}ut(t){const e=t.Ce.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:o=0}=e;let a,l;try{a=Re(r).toUint8Array()}catch(h){if(h instanceof ul)return dn("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{l=new ji(a,s,o)}catch(h){return dn(h instanceof qn?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return l.ge===0?null:l}ct(t,e,r){return e.Ce.count===r-this.Pt(t,e.targetId)?0:2}Pt(t,e){const r=this.Ge.getRemoteKeysForTarget(e);let s=0;return r.forEach((o=>{const a=this.Ge.ht(),l=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(l)||(this.et(e,o,null),s++)})),s}Tt(t){const e=new Map;this.ze.forEach(((o,a)=>{const l=this.ot(a);if(l){if(o.current&&hi(l.target)){const h=new j(l.target.path);this.It(h).has(a)||this.Et(a,h)||this.et(a,h,Vt.newNoDocument(h,t))}o.Be&&(e.set(a,o.ke()),o.qe())}}));let r=G();this.He.forEach(((o,a)=>{let l=!0;a.forEachWhile((h=>{const d=this.ot(h);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)})),l&&(r=r.add(o))})),this.je.forEach(((o,a)=>a.setReadTime(t)));const s=new _s(t,e,this.Ye,this.je,r);return this.je=de(),this.Je=Nr(),this.He=Nr(),this.Ye=new at(W),s}Xe(t,e){if(!this.rt(t))return;const r=this.Et(t,e.key)?2:0;this.nt(t).Qe(e.key,r),this.je=this.je.insert(e.key,e),this.Je=this.Je.insert(e.key,this.It(e.key).add(t)),this.He=this.He.insert(e.key,this.dt(e.key).add(t))}et(t,e,r){if(!this.rt(t))return;const s=this.nt(t);this.Et(t,e)?s.Qe(e,1):s.$e(e),this.He=this.He.insert(e,this.dt(e).delete(t)),this.He=this.He.insert(e,this.dt(e).add(t)),r&&(this.je=this.je.insert(e,r))}removeTarget(t){this.ze.delete(t)}_t(t){const e=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ue(t){this.nt(t).Ue()}nt(t){let e=this.ze.get(t);return e||(e=new Ja,this.ze.set(t,e)),e}dt(t){let e=this.He.get(t);return e||(e=new _t(W),this.He=this.He.insert(t,e)),e}It(t){let e=this.Je.get(t);return e||(e=new _t(W),this.Je=this.Je.insert(t,e)),e}rt(t){const e=this.ot(t)!==null;return e||M("WatchChangeAggregator","Detected inactive target",t),e}ot(t){const e=this.ze.get(t);return e&&e.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new Ja),this.Ge.getRemoteKeysForTarget(t).forEach((e=>{this.et(t,e,null)}))}Et(t,e){return this.Ge.getRemoteKeysForTarget(t).has(e)}}function Nr(){return new at(j.comparator)}function Za(){return new at(j.comparator)}const tg={asc:"ASCENDING",desc:"DESCENDING"},eg={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ng={and:"AND",or:"OR"};class rg{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function mi(n,t){return n.useProto3Json||ds(t)?t:{value:t}}function ns(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Ul(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function sg(n,t){return ns(n,t.toTimestamp())}function re(n){return J(!!n,49232),U.fromTimestamp((function(e){const r=Se(e);return new st(r.seconds,r.nanos)})(n))}function Li(n,t){return pi(n,t).canonicalString()}function pi(n,t){const e=(function(s){return new et(["projects",s.projectId,"databases",s.database])})(n).child("documents");return t===void 0?e:e.child(t)}function zl(n){const t=et.fromString(n);return J(Gl(t),10190,{key:t.toString()}),t}function gi(n,t){return Li(n.databaseId,t.path)}function Ws(n,t){const e=zl(t);if(e.get(1)!==n.databaseId.projectId)throw new D(R.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new D(R.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new j(ql(e))}function $l(n,t){return Li(n.databaseId,t)}function ig(n){const t=zl(n);return t.length===4?et.emptyPath():ql(t)}function yi(n){return new et(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function ql(n){return J(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function tc(n,t,e){return{name:gi(n,t),fields:e.value.mapValue.fields}}function og(n,t){let e;if("targetChange"in t){t.targetChange;const r=(function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:F(39313,{state:d})})(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],o=(function(d,m){return d.useProto3Json?(J(m===void 0||typeof m=="string",58123),It.fromBase64String(m||"")):(J(m===void 0||m instanceof Buffer||m instanceof Uint8Array,16193),It.fromUint8Array(m||new Uint8Array))})(n,t.targetChange.resumeToken),a=t.targetChange.cause,l=a&&(function(d){const m=d.code===void 0?R.UNKNOWN:Ll(d.code);return new D(m,d.message||"")})(a);e=new Bl(r,s,o,l||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=Ws(n,r.document.name),o=re(r.document.updateTime),a=r.document.createTime?re(r.document.createTime):U.min(),l=new Ht({mapValue:{fields:r.document.fields}}),h=Vt.newFoundDocument(s,o,a,l),d=r.targetIds||[],m=r.removedTargetIds||[];e=new Ur(d,m,h.key,h)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=Ws(n,r.document),o=r.readTime?re(r.readTime):U.min(),a=Vt.newNoDocument(s,o),l=r.removedTargetIds||[];e=new Ur([],l,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=Ws(n,r.document),o=r.removedTargetIds||[];e=new Ur([],o,s,null)}else{if(!("filter"in t))return F(11601,{Rt:t});{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:o}=r,a=new Qp(s,o),l=r.targetId;e=new Fl(l,a)}}return e}function ag(n,t){let e;if(t instanceof ur)e={update:tc(n,t.key,t.value)};else if(t instanceof jl)e={delete:gi(n,t.key)};else if(t instanceof Qe)e={update:tc(n,t.key,t.data),updateMask:gg(t.fieldMask)};else{if(!(t instanceof Wp))return F(16599,{Vt:t.type});e={verify:gi(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map((r=>(function(o,a){const l=a.transform;if(l instanceof ir)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof or)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ar)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof es)return{fieldPath:a.field.canonicalString(),increment:l.Ae};throw F(20930,{transform:a.transform})})(0,r)))),t.precondition.isNone||(e.currentDocument=(function(s,o){return o.updateTime!==void 0?{updateTime:sg(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:F(27497)})(n,t.precondition)),e}function cg(n,t){return n&&n.length>0?(J(t!==void 0,14353),n.map((e=>(function(s,o){let a=s.updateTime?re(s.updateTime):re(o);return a.isEqual(U.min())&&(a=re(o)),new $p(a,s.transformResults||[])})(e,t)))):[]}function lg(n,t){return{documents:[$l(n,t.path)]}}function ug(n,t){const e={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=$l(n,s);const o=(function(d){if(d.length!==0)return Wl(Kt.create(d,"and"))})(t.filters);o&&(e.structuredQuery.where=o);const a=(function(d){if(d.length!==0)return d.map((m=>(function(b){return{field:an(b.field),direction:fg(b.dir)}})(m)))})(t.orderBy);a&&(e.structuredQuery.orderBy=a);const l=mi(n,t.limit);return l!==null&&(e.structuredQuery.limit=l),t.startAt&&(e.structuredQuery.startAt=(function(d){return{before:d.inclusive,values:d.position}})(t.startAt)),t.endAt&&(e.structuredQuery.endAt=(function(d){return{before:!d.inclusive,values:d.position}})(t.endAt)),{ft:e,parent:s}}function hg(n){let t=ig(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){J(r===1,65062);const m=e.from[0];m.allDescendants?s=m.collectionId:t=t.child(m.collectionId)}let o=[];e.where&&(o=(function(y){const b=Hl(y);return b instanceof Kt&&wl(b)?b.getFilters():[b]})(e.where));let a=[];e.orderBy&&(a=(function(y){return y.map((b=>(function(P){return new sr(cn(P.field),(function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(P.direction))})(b)))})(e.orderBy));let l=null;e.limit&&(l=(function(y){let b;return b=typeof y=="object"?y.value:y,ds(b)?null:b})(e.limit));let h=null;e.startAt&&(h=(function(y){const b=!!y.before,A=y.values||[];return new ts(A,b)})(e.startAt));let d=null;return e.endAt&&(d=(function(y){const b=!y.before,A=y.values||[];return new ts(A,b)})(e.endAt)),Cp(t,s,a,o,l,"F",h,d)}function dg(n,t){const e=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return F(28987,{purpose:s})}})(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Hl(n){return n.unaryFilter!==void 0?(function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=cn(e.unaryFilter.field);return ft.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=cn(e.unaryFilter.field);return ft.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=cn(e.unaryFilter.field);return ft.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=cn(e.unaryFilter.field);return ft.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return F(61313);default:return F(60726)}})(n):n.fieldFilter!==void 0?(function(e){return ft.create(cn(e.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return F(58110);default:return F(50506)}})(e.fieldFilter.op),e.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(e){return Kt.create(e.compositeFilter.filters.map((r=>Hl(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return F(1026)}})(e.compositeFilter.op))})(n):F(30097,{filter:n})}function fg(n){return tg[n]}function mg(n){return eg[n]}function pg(n){return ng[n]}function an(n){return{fieldPath:n.canonicalString()}}function cn(n){return Tt.fromServerFormat(n.fieldPath)}function Wl(n){return n instanceof ft?(function(e){if(e.op==="=="){if(Ua(e.value))return{unaryFilter:{field:an(e.field),op:"IS_NAN"}};if(Ba(e.value))return{unaryFilter:{field:an(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Ua(e.value))return{unaryFilter:{field:an(e.field),op:"IS_NOT_NAN"}};if(Ba(e.value))return{unaryFilter:{field:an(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:an(e.field),op:mg(e.op),value:e.value}}})(n):n instanceof Kt?(function(e){const r=e.getFilters().map((s=>Wl(s)));return r.length===1?r[0]:{compositeFilter:{op:pg(e.op),filters:r}}})(n):F(54877,{filter:n})}function gg(n){const t=[];return n.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function Gl(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(t,e,r,s,o=U.min(),a=U.min(),l=It.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=h}withSequenceNumber(t){return new Ee(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Ee(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Ee(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Ee(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{constructor(t){this.yt=t}}function _g(n){const t=hg({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?fi(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg{constructor(){this.Cn=new wg}addToCollectionParentIndex(t,e){return this.Cn.add(e),C.resolve()}getCollectionParents(t,e){return C.resolve(this.Cn.getEntries(e))}addFieldIndex(t,e){return C.resolve()}deleteFieldIndex(t,e){return C.resolve()}deleteAllFieldIndexes(t){return C.resolve()}createTargetIndexes(t,e){return C.resolve()}getDocumentsMatchingTarget(t,e){return C.resolve(null)}getIndexType(t,e){return C.resolve(0)}getFieldIndexes(t,e){return C.resolve([])}getNextCollectionGroupToUpdate(t){return C.resolve(null)}getMinOffset(t,e){return C.resolve(xe.min())}getMinOffsetFromCollectionGroup(t,e){return C.resolve(xe.min())}updateCollectionGroup(t,e,r){return C.resolve()}updateIndexEntries(t,e){return C.resolve()}}class wg{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new _t(et.comparator),o=!s.has(r);return this.index[e]=s.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new _t(et.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ec={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Kl=41943040;class Ot{static withCacheSize(t){return new Ot(t,Ot.DEFAULT_COLLECTION_PERCENTILE,Ot.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ot.DEFAULT_COLLECTION_PERCENTILE=10,Ot.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ot.DEFAULT=new Ot(Kl,Ot.DEFAULT_COLLECTION_PERCENTILE,Ot.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ot.DISABLED=new Ot(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(t){this.ar=t}next(){return this.ar+=2,this.ar}static ur(){return new gn(0)}static cr(){return new gn(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nc="LruGarbageCollector",Eg=1048576;function rc([n,t],[e,r]){const s=W(n,e);return s===0?W(t,r):s}class bg{constructor(t){this.Ir=t,this.buffer=new _t(rc),this.Er=0}dr(){return++this.Er}Ar(t){const e=[t,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();rc(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Tg{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(t){M(nc,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){En(e)?M(nc,"Ignoring IndexedDB error during garbage collection: ",e):await wn(e)}await this.Vr(3e5)}))}}class Ig{constructor(t,e){this.mr=t,this.params=e}calculateTargetCount(t,e){return this.mr.gr(t).next((r=>Math.floor(e/100*r)))}nthSequenceNumber(t,e){if(e===0)return C.resolve(hs.ce);const r=new bg(e);return this.mr.forEachTarget(t,(s=>r.Ar(s.sequenceNumber))).next((()=>this.mr.pr(t,(s=>r.Ar(s))))).next((()=>r.maxValue))}removeTargets(t,e,r){return this.mr.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.mr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(M("LruGarbageCollector","Garbage collection skipped; disabled"),C.resolve(ec)):this.getCacheSize(t).next((r=>r<this.params.cacheSizeCollectionThreshold?(M("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ec):this.yr(t,e)))}getCacheSize(t){return this.mr.getCacheSize(t)}yr(t,e){let r,s,o,a,l,h,d;const m=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((y=>(y>this.params.maximumSequenceNumbersToCollect?(M("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${y}`),s=this.params.maximumSequenceNumbersToCollect):s=y,a=Date.now(),this.nthSequenceNumber(t,s)))).next((y=>(r=y,l=Date.now(),this.removeTargets(t,r,e)))).next((y=>(o=y,h=Date.now(),this.removeOrphanedDocuments(t,r)))).next((y=>(d=Date.now(),sn()<=Q.DEBUG&&M("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-m}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${o} targets in `+(h-l)+`ms
	Removed ${y} documents in `+(d-h)+`ms
Total Duration: ${d-m}ms`),C.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:o,documentsRemoved:y}))))}}function Ag(n,t){return new Ig(n,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg{constructor(){this.changes=new Ke((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Vt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?C.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sg{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next((s=>(r=s,this.remoteDocumentCache.getEntry(t,e)))).next((s=>(r!==null&&Xn(r.mutation,s,Gt.empty(),st.now()),s)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((r=>this.getLocalViewOfDocuments(t,r,G()).next((()=>r))))}getLocalViewOfDocuments(t,e,r=G()){const s=Be();return this.populateOverlays(t,s,e).next((()=>this.computeViews(t,e,s,r).next((o=>{let a=$n();return o.forEach(((l,h)=>{a=a.insert(l,h.overlayedDocument)})),a}))))}getOverlayedDocuments(t,e){const r=Be();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,G())))}populateOverlays(t,e,r){const s=[];return r.forEach((o=>{e.has(o)||s.push(o)})),this.documentOverlayCache.getOverlays(t,s).next((o=>{o.forEach(((a,l)=>{e.set(a,l)}))}))}computeViews(t,e,r,s){let o=de();const a=Yn(),l=(function(){return Yn()})();return e.forEach(((h,d)=>{const m=r.get(d.key);s.has(d.key)&&(m===void 0||m.mutation instanceof Qe)?o=o.insert(d.key,d):m!==void 0?(a.set(d.key,m.mutation.getFieldMask()),Xn(m.mutation,d,m.mutation.getFieldMask(),st.now())):a.set(d.key,Gt.empty())})),this.recalculateAndSaveOverlays(t,o).next((h=>(h.forEach(((d,m)=>a.set(d,m))),e.forEach(((d,m)=>l.set(d,new Sg(m,a.get(d)??null)))),l)))}recalculateAndSaveOverlays(t,e){const r=Yn();let s=new at(((a,l)=>a-l)),o=G();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((a=>{for(const l of a)l.keys().forEach((h=>{const d=e.get(h);if(d===null)return;let m=r.get(h)||Gt.empty();m=l.applyToLocalView(d,m),r.set(h,m);const y=(s.get(l.batchId)||G()).add(h);s=s.insert(l.batchId,y)}))})).next((()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const h=l.getNext(),d=h.key,m=h.value,y=Cl();m.forEach((b=>{if(!o.has(b)){const A=Ml(e.get(b),r.get(b));A!==null&&y.set(b,A),o=o.add(b)}})),a.push(this.documentOverlayCache.saveOverlays(t,d,y))}return C.waitFor(a)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((r=>this.recalculateAndSaveOverlays(t,r)))}getDocumentsMatchingQuery(t,e,r,s){return(function(a){return j.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0})(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Il(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next((o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-o.size):C.resolve(Be());let l=tr,h=o;return a.next((d=>C.forEach(d,((m,y)=>(l<y.largestBatchId&&(l=y.largestBatchId),o.get(m)?C.resolve():this.remoteDocumentCache.getEntry(t,m).next((b=>{h=h.insert(m,b)}))))).next((()=>this.populateOverlays(t,d,o))).next((()=>this.computeViews(t,h,d,G()))).next((m=>({batchId:l,changes:Rl(m)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new j(e)).next((r=>{let s=$n();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const o=e.collectionGroup;let a=$n();return this.indexManager.getCollectionParents(t,o).next((l=>C.forEach(l,(h=>{const d=(function(y,b){return new bn(b,null,y.explicitOrderBy.slice(),y.filters.slice(),y.limit,y.limitType,y.startAt,y.endAt)})(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,d,r,s).next((m=>{m.forEach(((y,b)=>{a=a.insert(y,b)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(t,e,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next((a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,s)))).next((a=>{o.forEach(((h,d)=>{const m=d.getKey();a.get(m)===null&&(a=a.insert(m,Vt.newInvalidDocument(m)))}));let l=$n();return a.forEach(((h,d)=>{const m=o.get(h);m!==void 0&&Xn(m.mutation,d,Gt.empty(),st.now()),ps(e,d)&&(l=l.insert(h,d))})),l}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg{constructor(t){this.serializer=t,this.Lr=new Map,this.kr=new Map}getBundleMetadata(t,e){return C.resolve(this.Lr.get(e))}saveBundleMetadata(t,e){return this.Lr.set(e.id,(function(s){return{id:s.id,version:s.version,createTime:re(s.createTime)}})(e)),C.resolve()}getNamedQuery(t,e){return C.resolve(this.kr.get(e))}saveNamedQuery(t,e){return this.kr.set(e.name,(function(s){return{name:s.name,query:_g(s.bundledQuery),readTime:re(s.readTime)}})(e)),C.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(){this.overlays=new at(j.comparator),this.qr=new Map}getOverlay(t,e){return C.resolve(this.overlays.get(e))}getOverlays(t,e){const r=Be();return C.forEach(e,(s=>this.getOverlay(t,s).next((o=>{o!==null&&r.set(s,o)})))).next((()=>r))}saveOverlays(t,e,r){return r.forEach(((s,o)=>{this.St(t,e,o)})),C.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach((o=>this.overlays=this.overlays.remove(o))),this.qr.delete(r)),C.resolve()}getOverlaysForCollection(t,e,r){const s=Be(),o=e.length+1,a=new j(e.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const h=l.getNext().value,d=h.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>r&&s.set(h.getKey(),h)}return C.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let o=new at(((d,m)=>d-m));const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>r){let m=o.get(d.largestBatchId);m===null&&(m=Be(),o=o.insert(d.largestBatchId,m)),m.set(d.getKey(),d)}}const l=Be(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach(((d,m)=>l.set(d,m))),!(l.size()>=s)););return C.resolve(l)}St(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Kp(e,r));let o=this.qr.get(e);o===void 0&&(o=G(),this.qr.set(e,o)),this.qr.set(e,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vg{constructor(){this.sessionToken=It.EMPTY_BYTE_STRING}getSessionToken(t){return C.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,C.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(){this.Qr=new _t(wt.$r),this.Ur=new _t(wt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(t,e){const r=new wt(t,e);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(t,e){t.forEach((r=>this.addReference(r,e)))}removeReference(t,e){this.Gr(new wt(t,e))}zr(t,e){t.forEach((r=>this.removeReference(r,e)))}jr(t){const e=new j(new et([])),r=new wt(e,t),s=new wt(e,t+1),o=[];return this.Ur.forEachInRange([r,s],(a=>{this.Gr(a),o.push(a.key)})),o}Jr(){this.Qr.forEach((t=>this.Gr(t)))}Gr(t){this.Qr=this.Qr.delete(t),this.Ur=this.Ur.delete(t)}Hr(t){const e=new j(new et([])),r=new wt(e,t),s=new wt(e,t+1);let o=G();return this.Ur.forEachInRange([r,s],(a=>{o=o.add(a.key)})),o}containsKey(t){const e=new wt(t,0),r=this.Qr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class wt{constructor(t,e){this.key=t,this.Yr=e}static $r(t,e){return j.comparator(t.key,e.key)||W(t.Yr,e.Yr)}static Kr(t,e){return W(t.Yr,e.Yr)||j.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ng{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.tr=1,this.Zr=new _t(wt.$r)}checkEmpty(t){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const o=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Gp(o,e,r,s);this.mutationQueue.push(a);for(const l of s)this.Zr=this.Zr.add(new wt(l.key,o)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return C.resolve(a)}lookupMutationBatch(t,e){return C.resolve(this.Xr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.ei(r),o=s<0?0:s;return C.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?Ci:this.tr-1)}getAllMutationBatches(t){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new wt(e,0),s=new wt(e,Number.POSITIVE_INFINITY),o=[];return this.Zr.forEachInRange([r,s],(a=>{const l=this.Xr(a.Yr);o.push(l)})),C.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new _t(W);return e.forEach((s=>{const o=new wt(s,0),a=new wt(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([o,a],(l=>{r=r.add(l.Yr)}))})),C.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let o=r;j.isDocumentKey(o)||(o=o.child(""));const a=new wt(new j(o),0);let l=new _t(W);return this.Zr.forEachWhile((h=>{const d=h.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(l=l.add(h.Yr)),!0)}),a),C.resolve(this.ti(l))}ti(t){const e=[];return t.forEach((r=>{const s=this.Xr(r);s!==null&&e.push(s)})),e}removeMutationBatch(t,e){J(this.ni(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return C.forEach(e.mutations,(s=>{const o=new wt(s.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)})).next((()=>{this.Zr=r}))}ir(t){}containsKey(t,e){const r=new wt(e,0),s=this.Zr.firstAfterOrEqual(r);return C.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,C.resolve()}ni(t,e){return this.ei(t)}ei(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Xr(t){const e=this.ei(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{constructor(t){this.ri=t,this.docs=(function(){return new at(j.comparator)})(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),o=s?s.size:0,a=this.ri(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return C.resolve(r?r.document.mutableCopy():Vt.newInvalidDocument(e))}getEntries(t,e){let r=de();return e.forEach((s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():Vt.newInvalidDocument(s))})),C.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let o=de();const a=e.path,l=new j(a.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(l);for(;h.hasNext();){const{key:d,value:{document:m}}=h.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||ap(op(m),r)<=0||(s.has(m.key)||ps(e,m))&&(o=o.insert(m.key,m.mutableCopy()))}return C.resolve(o)}getAllFromCollectionGroup(t,e,r,s){F(9500)}ii(t,e){return C.forEach(this.docs,(r=>e(r)))}newChangeBuffer(t){return new Dg(this)}getSize(t){return C.resolve(this.size)}}class Dg extends xg{constructor(t){super(),this.Nr=t}applyChanges(t){const e=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?e.push(this.Nr.addEntry(t,s)):this.Nr.removeEntry(r)})),C.waitFor(e)}getFromCache(t,e){return this.Nr.getEntry(t,e)}getAllFromCache(t,e){return this.Nr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(t){this.persistence=t,this.si=new Ke((e=>Ni(e)),ki),this.lastRemoteSnapshotVersion=U.min(),this.highestTargetId=0,this.oi=0,this._i=new Fi,this.targetCount=0,this.ai=gn.ur()}forEachTarget(t,e){return this.si.forEach(((r,s)=>e(s))),C.resolve()}getLastRemoteSnapshotVersion(t){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return C.resolve(this.oi)}allocateTargetId(t){return this.highestTargetId=this.ai.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.oi&&(this.oi=e),C.resolve()}Pr(t){this.si.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.ai=new gn(e),this.highestTargetId=e),t.sequenceNumber>this.oi&&(this.oi=t.sequenceNumber)}addTargetData(t,e){return this.Pr(e),this.targetCount+=1,C.resolve()}updateTargetData(t,e){return this.Pr(e),C.resolve()}removeTargetData(t,e){return this.si.delete(e.target),this._i.jr(e.targetId),this.targetCount-=1,C.resolve()}removeTargets(t,e,r){let s=0;const o=[];return this.si.forEach(((a,l)=>{l.sequenceNumber<=e&&r.get(l.targetId)===null&&(this.si.delete(a),o.push(this.removeMatchingKeysForTargetId(t,l.targetId)),s++)})),C.waitFor(o).next((()=>s))}getTargetCount(t){return C.resolve(this.targetCount)}getTargetData(t,e){const r=this.si.get(e)||null;return C.resolve(r)}addMatchingKeys(t,e,r){return this._i.Wr(e,r),C.resolve()}removeMatchingKeys(t,e,r){this._i.zr(e,r);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach((a=>{o.push(s.markPotentiallyOrphaned(t,a))})),C.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this._i.jr(e),C.resolve()}getMatchingKeysForTargetId(t,e){const r=this._i.Hr(e);return C.resolve(r)}containsKey(t,e){return C.resolve(this._i.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(t,e){this.ui={},this.overlays={},this.ci=new hs(0),this.li=!1,this.li=!0,this.hi=new Vg,this.referenceDelegate=t(this),this.Pi=new Mg(this),this.indexManager=new vg,this.remoteDocumentCache=(function(s){return new kg(s)})((r=>this.referenceDelegate.Ti(r))),this.serializer=new yg(e),this.Ii=new Cg(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Pg,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.ui[t.toKey()];return r||(r=new Ng(e,this.referenceDelegate),this.ui[t.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(t,e,r){M("MemoryPersistence","Starting transaction:",t);const s=new Og(this.ci.next());return this.referenceDelegate.Ei(),r(s).next((o=>this.referenceDelegate.di(s).next((()=>o)))).toPromise().then((o=>(s.raiseOnCommittedEvent(),o)))}Ai(t,e){return C.or(Object.values(this.ui).map((r=>()=>r.containsKey(t,e))))}}class Og extends lp{constructor(t){super(),this.currentSequenceNumber=t}}class Bi{constructor(t){this.persistence=t,this.Ri=new Fi,this.Vi=null}static mi(t){return new Bi(t)}get fi(){if(this.Vi)return this.Vi;throw F(60996)}addReference(t,e,r){return this.Ri.addReference(r,e),this.fi.delete(r.toString()),C.resolve()}removeReference(t,e,r){return this.Ri.removeReference(r,e),this.fi.add(r.toString()),C.resolve()}markPotentiallyOrphaned(t,e){return this.fi.add(e.toString()),C.resolve()}removeTarget(t,e){this.Ri.jr(e.targetId).forEach((s=>this.fi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next((s=>{s.forEach((o=>this.fi.add(o.toString())))})).next((()=>r.removeTargetData(t,e)))}Ei(){this.Vi=new Set}di(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.fi,(r=>{const s=j.fromPath(r);return this.gi(t,s).next((o=>{o||e.removeEntry(s,U.min())}))})).next((()=>(this.Vi=null,e.apply(t))))}updateLimboDocument(t,e){return this.gi(t,e).next((r=>{r?this.fi.delete(e.toString()):this.fi.add(e.toString())}))}Ti(t){return 0}gi(t,e){return C.or([()=>C.resolve(this.Ri.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ai(t,e)])}}class rs{constructor(t,e){this.persistence=t,this.pi=new Ke((r=>dp(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=Ag(this,e)}static mi(t,e){return new rs(t,e)}Ei(){}di(t){return C.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}gr(t){const e=this.wr(t);return this.persistence.getTargetCache().getTargetCount(t).next((r=>e.next((s=>r+s))))}wr(t){let e=0;return this.pr(t,(r=>{e++})).next((()=>e))}pr(t,e){return C.forEach(this.pi,((r,s)=>this.br(t,r,s).next((o=>o?C.resolve():e(s)))))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const s=this.persistence.getRemoteDocumentCache(),o=s.newChangeBuffer();return s.ii(t,(a=>this.br(t,a,e).next((l=>{l||(r++,o.removeEntry(a,U.min()))})))).next((()=>o.apply(t))).next((()=>r))}markPotentiallyOrphaned(t,e){return this.pi.set(e,t.currentSequenceNumber),C.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.pi.set(r,t.currentSequenceNumber),C.resolve()}removeReference(t,e,r){return this.pi.set(r,t.currentSequenceNumber),C.resolve()}updateLimboDocument(t,e){return this.pi.set(e,t.currentSequenceNumber),C.resolve()}Ti(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=Lr(t.data.value)),e}br(t,e,r){return C.or([()=>this.persistence.Ai(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.pi.get(e);return C.resolve(s!==void 0&&s>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.Es=r,this.ds=s}static As(t,e){let r=G(),s=G();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new Ui(t,e.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lg{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return Pf()?8:up(Rf())>0?6:4})()}initialize(t,e){this.ps=t,this.indexManager=e,this.Rs=!0}getDocumentsMatchingQuery(t,e,r,s){const o={result:null};return this.ys(t,e).next((a=>{o.result=a})).next((()=>{if(!o.result)return this.ws(t,e,s,r).next((a=>{o.result=a}))})).next((()=>{if(o.result)return;const a=new jg;return this.Ss(t,e,a).next((l=>{if(o.result=l,this.Vs)return this.bs(t,e,a,l.size)}))})).next((()=>o.result))}bs(t,e,r,s){return r.documentReadCount<this.fs?(sn()<=Q.DEBUG&&M("QueryEngine","SDK will not create cache indexes for query:",on(e),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),C.resolve()):(sn()<=Q.DEBUG&&M("QueryEngine","Query:",on(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(sn()<=Q.DEBUG&&M("QueryEngine","The SDK decides to create cache indexes for query:",on(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,ne(e))):C.resolve())}ys(t,e){if(Ha(e))return C.resolve(null);let r=ne(e);return this.indexManager.getIndexType(t,r).next((s=>s===0?null:(e.limit!==null&&s===1&&(e=fi(e,null,"F"),r=ne(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next((o=>{const a=G(...o);return this.ps.getDocuments(t,a).next((l=>this.indexManager.getMinOffset(t,r).next((h=>{const d=this.Ds(e,l);return this.Cs(e,d,a,h.readTime)?this.ys(t,fi(e,null,"F")):this.vs(t,d,e,h)}))))})))))}ws(t,e,r,s){return Ha(e)||s.isEqual(U.min())?C.resolve(null):this.ps.getDocuments(t,r).next((o=>{const a=this.Ds(e,o);return this.Cs(e,a,r,s)?C.resolve(null):(sn()<=Q.DEBUG&&M("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),on(e)),this.vs(t,a,e,ip(s,tr)).next((l=>l)))}))}Ds(t,e){let r=new _t(xl(t));return e.forEach(((s,o)=>{ps(t,o)&&(r=r.add(o))})),r}Cs(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}Ss(t,e,r){return sn()<=Q.DEBUG&&M("QueryEngine","Using full collection scan to execute query:",on(e)),this.ps.getDocumentsMatchingQuery(t,e,xe.min(),r)}vs(t,e,r,s){return this.ps.getDocumentsMatchingQuery(t,r,s).next((o=>(e.forEach((a=>{o=o.insert(a.key,a)})),o)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zi="LocalStore",Fg=3e8;class Bg{constructor(t,e,r,s){this.persistence=t,this.Fs=e,this.serializer=s,this.Ms=new at(W),this.xs=new Ke((o=>Ni(o)),ki),this.Os=new Map,this.Ns=t.getRemoteDocumentCache(),this.Pi=t.getTargetCache(),this.Ii=t.getBundleCache(),this.Bs(r)}Bs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Rg(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Ms)))}}function Ug(n,t,e,r){return new Bg(n,t,e,r)}async function Yl(n,t){const e=z(n);return await e.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next((o=>(s=o,e.Bs(t),e.mutationQueue.getAllMutationBatches(r)))).next((o=>{const a=[],l=[];let h=G();for(const d of s){a.push(d.batchId);for(const m of d.mutations)h=h.add(m.key)}for(const d of o){l.push(d.batchId);for(const m of d.mutations)h=h.add(m.key)}return e.localDocuments.getDocuments(r,h).next((d=>({Ls:d,removedBatchIds:a,addedBatchIds:l})))}))}))}function zg(n,t){const e=z(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=t.batch.keys(),o=e.Ns.newChangeBuffer({trackRemovals:!0});return(function(l,h,d,m){const y=d.batch,b=y.keys();let A=C.resolve();return b.forEach((P=>{A=A.next((()=>m.getEntry(h,P))).next((N=>{const V=d.docVersions.get(P);J(V!==null,48541),N.version.compareTo(V)<0&&(y.applyToRemoteDocument(N,d),N.isValidDocument()&&(N.setReadTime(d.commitVersion),m.addEntry(N)))}))})),A.next((()=>l.mutationQueue.removeMutationBatch(h,y)))})(e,r,t,o).next((()=>o.apply(r))).next((()=>e.mutationQueue.performConsistencyCheck(r))).next((()=>e.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId))).next((()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(l){let h=G();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(h=h.add(l.batch.mutations[d].key));return h})(t)))).next((()=>e.localDocuments.getDocuments(r,s)))}))}function Xl(n){const t=z(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Pi.getLastRemoteSnapshotVersion(e)))}function $g(n,t){const e=z(n),r=t.snapshotVersion;let s=e.Ms;return e.persistence.runTransaction("Apply remote event","readwrite-primary",(o=>{const a=e.Ns.newChangeBuffer({trackRemovals:!0});s=e.Ms;const l=[];t.targetChanges.forEach(((m,y)=>{const b=s.get(y);if(!b)return;l.push(e.Pi.removeMatchingKeys(o,m.removedDocuments,y).next((()=>e.Pi.addMatchingKeys(o,m.addedDocuments,y))));let A=b.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(y)!==null?A=A.withResumeToken(It.EMPTY_BYTE_STRING,U.min()).withLastLimboFreeSnapshotVersion(U.min()):m.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(m.resumeToken,r)),s=s.insert(y,A),(function(N,V,$){return N.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=Fg?!0:$.addedDocuments.size+$.modifiedDocuments.size+$.removedDocuments.size>0})(b,A,m)&&l.push(e.Pi.updateTargetData(o,A))}));let h=de(),d=G();if(t.documentUpdates.forEach((m=>{t.resolvedLimboDocuments.has(m)&&l.push(e.persistence.referenceDelegate.updateLimboDocument(o,m))})),l.push(qg(o,a,t.documentUpdates).next((m=>{h=m.ks,d=m.qs}))),!r.isEqual(U.min())){const m=e.Pi.getLastRemoteSnapshotVersion(o).next((y=>e.Pi.setTargetsMetadata(o,o.currentSequenceNumber,r)));l.push(m)}return C.waitFor(l).next((()=>a.apply(o))).next((()=>e.localDocuments.getLocalViewOfDocuments(o,h,d))).next((()=>h))})).then((o=>(e.Ms=s,o)))}function qg(n,t,e){let r=G(),s=G();return e.forEach((o=>r=r.add(o))),t.getEntries(n,r).next((o=>{let a=de();return e.forEach(((l,h)=>{const d=o.get(l);h.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(l)),h.isNoDocument()&&h.version.isEqual(U.min())?(t.removeEntry(l,h.readTime),a=a.insert(l,h)):!d.isValidDocument()||h.version.compareTo(d.version)>0||h.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(h),a=a.insert(l,h)):M(zi,"Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",h.version)})),{ks:a,qs:s}}))}function Hg(n,t){const e=z(n);return e.persistence.runTransaction("Get next mutation batch","readonly",(r=>(t===void 0&&(t=Ci),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t))))}function Wg(n,t){const e=z(n);return e.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return e.Pi.getTargetData(r,t).next((o=>o?(s=o,C.resolve(s)):e.Pi.allocateTargetId(r).next((a=>(s=new Ee(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.Pi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=e.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.Ms=e.Ms.insert(r.targetId,r),e.xs.set(t,r.targetId)),r}))}async function _i(n,t,e){const r=z(n),s=r.Ms.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,(a=>r.persistence.referenceDelegate.removeTarget(a,s)))}catch(a){if(!En(a))throw a;M(zi,`Failed to update sequence numbers for target ${t}: ${a}`)}r.Ms=r.Ms.remove(t),r.xs.delete(s.target)}function sc(n,t,e){const r=z(n);let s=U.min(),o=G();return r.persistence.runTransaction("Execute query","readwrite",(a=>(function(h,d,m){const y=z(h),b=y.xs.get(m);return b!==void 0?C.resolve(y.Ms.get(b)):y.Pi.getTargetData(d,m)})(r,a,ne(t)).next((l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(a,l.targetId).next((h=>{o=h}))})).next((()=>r.Fs.getDocumentsMatchingQuery(a,t,e?s:U.min(),e?o:G()))).next((l=>(Gg(r,Vp(t),l),{documents:l,Qs:o})))))}function Gg(n,t,e){let r=n.Os.get(t)||U.min();e.forEach(((s,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)})),n.Os.set(t,r)}class ic{constructor(){this.activeTargetIds=jp()}zs(t){this.activeTargetIds=this.activeTargetIds.add(t)}js(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Kg{constructor(){this.Mo=new ic,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.Mo.zs(t),this.xo[t]||"not-current"}updateQueryState(t,e,r){this.xo[t]=e}removeLocalQueryTarget(t){this.Mo.js(t)}isLocalQueryTarget(t){return this.Mo.activeTargetIds.has(t)}clearQueryState(t){delete this.xo[t]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(t){return this.Mo.activeTargetIds.has(t)}start(){return this.Mo=new ic,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{Oo(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oc="ConnectivityMonitor";class ac{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(t){this.qo.push(t)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){M(oc,"Network connectivity changed: AVAILABLE");for(const t of this.qo)t(0)}ko(){M(oc,"Network connectivity changed: UNAVAILABLE");for(const t of this.qo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kr=null;function vi(){return kr===null?kr=(function(){return 268435456+Math.round(2147483648*Math.random())})():kr++,"0x"+kr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gs="RestConnection",Yg={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Xg{get $o(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=e+"://"+t.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===Jr?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(t,e,r,s,o){const a=vi(),l=this.zo(t,e.toUriEncodedString());M(Gs,`Sending RPC '${t}' ${a}:`,l,r);const h={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(h,s,o);const{host:d}=new URL(l),m=Ai(d);return this.Jo(t,l,h,r,m).then((y=>(M(Gs,`Received RPC '${t}' ${a}: `,y),y)),(y=>{throw dn(Gs,`RPC '${t}' ${a} failed with error: `,y,"url: ",l,"request:",r),y}))}Ho(t,e,r,s,o,a){return this.Go(t,e,r,s,o)}jo(t,e,r){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+vn})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((s,o)=>t[o]=s)),r&&r.headers.forEach(((s,o)=>t[o]=s))}zo(t,e){const r=Yg[t];return`${this.Uo}/v1/${e}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jg{constructor(t){this.Yo=t.Yo,this.Zo=t.Zo}Xo(t){this.e_=t}t_(t){this.n_=t}r_(t){this.i_=t}onMessage(t){this.s_=t}close(){this.Zo()}send(t){this.Yo(t)}o_(){this.e_()}__(){this.n_()}a_(t){this.i_(t)}u_(t){this.s_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ct="WebChannelConnection";class Zg extends Xg{constructor(t){super(t),this.c_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,e,r,s,o){const a=vi();return new Promise(((l,h)=>{const d=new Zc;d.setWithCredentials(!0),d.listenOnce(tl.COMPLETE,(()=>{try{switch(d.getLastErrorCode()){case jr.NO_ERROR:const y=d.getResponseJson();M(Ct,`XHR for RPC '${t}' ${a} received:`,JSON.stringify(y)),l(y);break;case jr.TIMEOUT:M(Ct,`RPC '${t}' ${a} timed out`),h(new D(R.DEADLINE_EXCEEDED,"Request time out"));break;case jr.HTTP_ERROR:const b=d.getStatus();if(M(Ct,`RPC '${t}' ${a} failed with status:`,b,"response text:",d.getResponseText()),b>0){let A=d.getResponseJson();Array.isArray(A)&&(A=A[0]);const P=A?.error;if(P&&P.status&&P.message){const N=(function($){const q=$.toLowerCase().replace(/_/g,"-");return Object.values(R).indexOf(q)>=0?q:R.UNKNOWN})(P.status);h(new D(N,P.message))}else h(new D(R.UNKNOWN,"Server responded with status "+d.getStatus()))}else h(new D(R.UNAVAILABLE,"Connection failed."));break;default:F(9055,{l_:t,streamId:a,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{M(Ct,`RPC '${t}' ${a} completed.`)}}));const m=JSON.stringify(s);M(Ct,`RPC '${t}' ${a} sending request:`,s),d.send(e,"POST",m,r,15)}))}T_(t,e,r){const s=vi(),o=[this.Uo,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=rl(),l=nl(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(h.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(h.useFetchStreams=!0),this.jo(h.initMessageHeaders,e,r),h.encodeInitMessageHeaders=!0;const m=o.join("");M(Ct,`Creating RPC '${t}' stream ${s}: ${m}`,h);const y=a.createWebChannel(m,h);this.I_(y);let b=!1,A=!1;const P=new Jg({Yo:V=>{A?M(Ct,`Not sending because RPC '${t}' stream ${s} is closed:`,V):(b||(M(Ct,`Opening RPC '${t}' stream ${s} transport.`),y.open(),b=!0),M(Ct,`RPC '${t}' stream ${s} sending:`,V),y.send(V))},Zo:()=>y.close()}),N=(V,$,q)=>{V.listen($,(B=>{try{q(B)}catch(nt){setTimeout((()=>{throw nt}),0)}}))};return N(y,zn.EventType.OPEN,(()=>{A||(M(Ct,`RPC '${t}' stream ${s} transport opened.`),P.o_())})),N(y,zn.EventType.CLOSE,(()=>{A||(A=!0,M(Ct,`RPC '${t}' stream ${s} transport closed`),P.a_(),this.E_(y))})),N(y,zn.EventType.ERROR,(V=>{A||(A=!0,dn(Ct,`RPC '${t}' stream ${s} transport errored. Name:`,V.name,"Message:",V.message),P.a_(new D(R.UNAVAILABLE,"The operation could not be completed")))})),N(y,zn.EventType.MESSAGE,(V=>{if(!A){const $=V.data[0];J(!!$,16349);const q=$,B=q?.error||q[0]?.error;if(B){M(Ct,`RPC '${t}' stream ${s} received error:`,B);const nt=B.status;let lt=(function(p){const w=dt[p];if(w!==void 0)return Ll(w)})(nt),Y=B.message;lt===void 0&&(lt=R.INTERNAL,Y="Unknown error status: "+nt+" with message "+B.message),A=!0,P.a_(new D(lt,Y)),y.close()}else M(Ct,`RPC '${t}' stream ${s} received:`,$),P.u_($)}})),N(l,el.STAT_EVENT,(V=>{V.stat===oi.PROXY?M(Ct,`RPC '${t}' stream ${s} detected buffering proxy`):V.stat===oi.NOPROXY&&M(Ct,`RPC '${t}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{P.__()}),0),P}terminate(){this.c_.forEach((t=>t.close())),this.c_=[]}I_(t){this.c_.push(t)}E_(t){this.c_=this.c_.filter((e=>e===t))}}function Ks(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vs(n){return new rg(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(t,e,r=1e3,s=1.5,o=6e4){this.Mi=t,this.timerId=e,this.d_=r,this.A_=s,this.R_=o,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(t){this.cancel();const e=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,e-r);s>0&&M("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),t()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cc="PersistentStream";class Zl{constructor(t,e,r,s,o,a,l,h){this.Mi=t,this.S_=r,this.b_=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=h,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Jl(t,e)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(t){this.Q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():e&&e.code===R.RESOURCE_EXHAUSTED?(he(e.toString()),he("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):e&&e.code===R.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.r_(e)}K_(){}auth(){this.state=1;const t=this.W_(this.D_),e=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.D_===e&&this.G_(r,s)}),(r=>{t((()=>{const s=new D(R.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)}))}))}G_(t,e){const r=this.W_(this.D_);this.stream=this.j_(t,e),this.stream.Xo((()=>{r((()=>this.listener.Xo()))})),this.stream.t_((()=>{r((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((s=>{r((()=>this.z_(s)))})),this.stream.onMessage((s=>{r((()=>++this.F_==1?this.J_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(t){return M(cc,`close with error: ${t}`),this.stream=null,this.close(4,t)}W_(t){return e=>{this.Mi.enqueueAndForget((()=>this.D_===t?e():(M(cc,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class ty extends Zl{constructor(t,e,r,s,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}j_(t,e){return this.connection.T_("Listen",t,e)}J_(t){return this.onNext(t)}onNext(t){this.M_.reset();const e=og(this.serializer,t),r=(function(o){if(!("targetChange"in o))return U.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?U.min():a.readTime?re(a.readTime):U.min()})(t);return this.listener.H_(e,r)}Y_(t){const e={};e.database=yi(this.serializer),e.addTarget=(function(o,a){let l;const h=a.target;if(l=hi(h)?{documents:lg(o,h)}:{query:ug(o,h).ft},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=Ul(o,a.resumeToken);const d=mi(o,a.expectedCount);d!==null&&(l.expectedCount=d)}else if(a.snapshotVersion.compareTo(U.min())>0){l.readTime=ns(o,a.snapshotVersion.toTimestamp());const d=mi(o,a.expectedCount);d!==null&&(l.expectedCount=d)}return l})(this.serializer,t);const r=dg(this.serializer,t);r&&(e.labels=r),this.q_(e)}Z_(t){const e={};e.database=yi(this.serializer),e.removeTarget=t,this.q_(e)}}class ey extends Zl{constructor(t,e,r,s,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(t,e){return this.connection.T_("Write",t,e)}J_(t){return J(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,J(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){J(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const e=cg(t.writeResults,t.commitTime),r=re(t.commitTime);return this.listener.na(r,e)}ra(){const t={};t.database=yi(this.serializer),this.q_(t)}ea(t){const e={streamToken:this.lastStreamToken,writes:t.map((r=>ag(this.serializer,r)))};this.q_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{}class ry extends ny{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new D(R.FAILED_PRECONDITION,"The client has already been terminated.")}Go(t,e,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,a])=>this.connection.Go(t,pi(e,r),s,o,a))).catch((o=>{throw o.name==="FirebaseError"?(o.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new D(R.UNKNOWN,o.toString())}))}Ho(t,e,r,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,l])=>this.connection.Ho(t,pi(e,r),s,a,l,o))).catch((a=>{throw a.name==="FirebaseError"?(a.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new D(R.UNKNOWN,a.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class sy{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(he(e),this.aa=!1):M("OnlineStateTracker",e)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const We="RemoteStore";class iy{constructor(t,e,r,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=o,this.Aa.Oo((a=>{r.enqueueAndForget((async()=>{Ye(this)&&(M(We,"Restarting streams for network reachability change."),await(async function(h){const d=z(h);d.Ea.add(4),await dr(d),d.Ra.set("Unknown"),d.Ea.delete(4),await ws(d)})(this))}))})),this.Ra=new sy(r,s)}}async function ws(n){if(Ye(n))for(const t of n.da)await t(!0)}async function dr(n){for(const t of n.da)await t(!1)}function tu(n,t){const e=z(n);e.Ia.has(t.targetId)||(e.Ia.set(t.targetId,t),Wi(e)?Hi(e):Tn(e).O_()&&qi(e,t))}function $i(n,t){const e=z(n),r=Tn(e);e.Ia.delete(t),r.O_()&&eu(e,t),e.Ia.size===0&&(r.O_()?r.L_():Ye(e)&&e.Ra.set("Unknown"))}function qi(n,t){if(n.Va.Ue(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(U.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Tn(n).Y_(t)}function eu(n,t){n.Va.Ue(t),Tn(n).Z_(t)}function Hi(n){n.Va=new Zp({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),At:t=>n.Ia.get(t)||null,ht:()=>n.datastore.serializer.databaseId}),Tn(n).start(),n.Ra.ua()}function Wi(n){return Ye(n)&&!Tn(n).x_()&&n.Ia.size>0}function Ye(n){return z(n).Ea.size===0}function nu(n){n.Va=void 0}async function oy(n){n.Ra.set("Online")}async function ay(n){n.Ia.forEach(((t,e)=>{qi(n,t)}))}async function cy(n,t){nu(n),Wi(n)?(n.Ra.ha(t),Hi(n)):n.Ra.set("Unknown")}async function ly(n,t,e){if(n.Ra.set("Online"),t instanceof Bl&&t.state===2&&t.cause)try{await(async function(s,o){const a=o.cause;for(const l of o.targetIds)s.Ia.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.Ia.delete(l),s.Va.removeTarget(l))})(n,t)}catch(r){M(We,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await ss(n,r)}else if(t instanceof Ur?n.Va.Ze(t):t instanceof Fl?n.Va.st(t):n.Va.tt(t),!e.isEqual(U.min()))try{const r=await Xl(n.localStore);e.compareTo(r)>=0&&await(function(o,a){const l=o.Va.Tt(a);return l.targetChanges.forEach(((h,d)=>{if(h.resumeToken.approximateByteSize()>0){const m=o.Ia.get(d);m&&o.Ia.set(d,m.withResumeToken(h.resumeToken,a))}})),l.targetMismatches.forEach(((h,d)=>{const m=o.Ia.get(h);if(!m)return;o.Ia.set(h,m.withResumeToken(It.EMPTY_BYTE_STRING,m.snapshotVersion)),eu(o,h);const y=new Ee(m.target,h,d,m.sequenceNumber);qi(o,y)})),o.remoteSyncer.applyRemoteEvent(l)})(n,e)}catch(r){M(We,"Failed to raise snapshot:",r),await ss(n,r)}}async function ss(n,t,e){if(!En(t))throw t;n.Ea.add(1),await dr(n),n.Ra.set("Offline"),e||(e=()=>Xl(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{M(We,"Retrying IndexedDB access"),await e(),n.Ea.delete(1),await ws(n)}))}function ru(n,t){return t().catch((e=>ss(n,e,t)))}async function Es(n){const t=z(n),e=Pe(t);let r=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:Ci;for(;uy(t);)try{const s=await Hg(t.localStore,r);if(s===null){t.Ta.length===0&&e.L_();break}r=s.batchId,hy(t,s)}catch(s){await ss(t,s)}su(t)&&iu(t)}function uy(n){return Ye(n)&&n.Ta.length<10}function hy(n,t){n.Ta.push(t);const e=Pe(n);e.O_()&&e.X_&&e.ea(t.mutations)}function su(n){return Ye(n)&&!Pe(n).x_()&&n.Ta.length>0}function iu(n){Pe(n).start()}async function dy(n){Pe(n).ra()}async function fy(n){const t=Pe(n);for(const e of n.Ta)t.ea(e.mutations)}async function my(n,t,e){const r=n.Ta.shift(),s=Oi.from(r,t,e);await ru(n,(()=>n.remoteSyncer.applySuccessfulWrite(s))),await Es(n)}async function py(n,t){t&&Pe(n).X_&&await(async function(r,s){if((function(a){return Yp(a)&&a!==R.ABORTED})(s.code)){const o=r.Ta.shift();Pe(r).B_(),await ru(r,(()=>r.remoteSyncer.rejectFailedWrite(o.batchId,s))),await Es(r)}})(n,t),su(n)&&iu(n)}async function lc(n,t){const e=z(n);e.asyncQueue.verifyOperationInProgress(),M(We,"RemoteStore received new credentials");const r=Ye(e);e.Ea.add(3),await dr(e),r&&e.Ra.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ea.delete(3),await ws(e)}async function gy(n,t){const e=z(n);t?(e.Ea.delete(2),await ws(e)):t||(e.Ea.add(2),await dr(e),e.Ra.set("Unknown"))}function Tn(n){return n.ma||(n.ma=(function(e,r,s){const o=z(e);return o.sa(),new ty(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)})(n.datastore,n.asyncQueue,{Xo:oy.bind(null,n),t_:ay.bind(null,n),r_:cy.bind(null,n),H_:ly.bind(null,n)}),n.da.push((async t=>{t?(n.ma.B_(),Wi(n)?Hi(n):n.Ra.set("Unknown")):(await n.ma.stop(),nu(n))}))),n.ma}function Pe(n){return n.fa||(n.fa=(function(e,r,s){const o=z(e);return o.sa(),new ey(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)})(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:dy.bind(null,n),r_:py.bind(null,n),ta:fy.bind(null,n),na:my.bind(null,n)}),n.da.push((async t=>{t?(n.fa.B_(),await Es(n)):(await n.fa.stop(),n.Ta.length>0&&(M(We,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(t,e,r,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new ze,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,o){const a=Date.now()+r,l=new Gi(t,e,a,s,o);return l.start(r),l}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new D(R.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ki(n,t){if(he("AsyncQueue",`${t}: ${n}`),En(n))return new D(R.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{static emptySet(t){return new un(t.comparator)}constructor(t){this.comparator=t?(e,r)=>t(e,r)||j.comparator(e.key,r.key):(e,r)=>j.comparator(e.key,r.key),this.keyedMap=$n(),this.sortedSet=new at(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,r)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof un)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new un;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(){this.ga=new at(j.comparator)}track(t){const e=t.doc.key,r=this.ga.get(e);r?t.type!==0&&r.type===3?this.ga=this.ga.insert(e,t):t.type===3&&r.type!==1?this.ga=this.ga.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.ga=this.ga.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.ga=this.ga.remove(e):t.type===1&&r.type===2?this.ga=this.ga.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):F(63341,{Rt:t,pa:r}):this.ga=this.ga.insert(e,t)}ya(){const t=[];return this.ga.inorderTraversal(((e,r)=>{t.push(r)})),t}}class yn{constructor(t,e,r,s,o,a,l,h,d){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=h,this.hasCachedResults=d}static fromInitialDocuments(t,e,r,s,o){const a=[];return e.forEach((l=>{a.push({type:0,doc:l})})),new yn(t,e,un.emptySet(e),a,r,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&ms(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==r[s].type||!e[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yy{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((t=>t.Da()))}}class _y{constructor(){this.queries=hc(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(e,r){const s=z(e),o=s.queries;s.queries=hc(),o.forEach(((a,l)=>{for(const h of l.Sa)h.onError(r)}))})(this,new D(R.ABORTED,"Firestore shutting down"))}}function hc(){return new Ke((n=>Al(n)),ms)}async function vy(n,t){const e=z(n);let r=3;const s=t.query;let o=e.queries.get(s);o?!o.ba()&&t.Da()&&(r=2):(o=new yy,r=t.Da()?0:1);try{switch(r){case 0:o.wa=await e.onListen(s,!0);break;case 1:o.wa=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const l=Ki(a,`Initialization of query '${on(t.query)}' failed`);return void t.onError(l)}e.queries.set(s,o),o.Sa.push(t),t.va(e.onlineState),o.wa&&t.Fa(o.wa)&&Qi(e)}async function wy(n,t){const e=z(n),r=t.query;let s=3;const o=e.queries.get(r);if(o){const a=o.Sa.indexOf(t);a>=0&&(o.Sa.splice(a,1),o.Sa.length===0?s=t.Da()?0:1:!o.ba()&&t.Da()&&(s=2))}switch(s){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function Ey(n,t){const e=z(n);let r=!1;for(const s of t){const o=s.query,a=e.queries.get(o);if(a){for(const l of a.Sa)l.Fa(s)&&(r=!0);a.wa=s}}r&&Qi(e)}function by(n,t,e){const r=z(n),s=r.queries.get(t);if(s)for(const o of s.Sa)o.onError(e);r.queries.delete(t)}function Qi(n){n.Ca.forEach((t=>{t.next()}))}var wi,dc;(dc=wi||(wi={})).Ma="default",dc.Cache="cache";class Ty{constructor(t,e,r){this.query=t,this.xa=e,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new yn(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),e=!0):this.La(t,this.onlineState)&&(this.ka(t),e=!0),this.Na=t,e}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let e=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),e=!0),e}La(t,e){if(!t.fromCache||!this.Da())return!0;const r=e!=="Offline";return(!this.options.qa||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Ba(t){if(t.docChanges.length>0)return!0;const e=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}ka(t){t=yn.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==wi.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(t){this.key=t}}class au{constructor(t){this.key=t}}class Iy{constructor(t,e){this.query=t,this.Ya=e,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=G(),this.mutatedKeys=G(),this.eu=xl(t),this.tu=new un(this.eu)}get nu(){return this.Ya}ru(t,e){const r=e?e.iu:new uc,s=e?e.tu:this.tu;let o=e?e.mutatedKeys:this.mutatedKeys,a=s,l=!1;const h=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal(((m,y)=>{const b=s.get(m),A=ps(this.query,y)?y:null,P=!!b&&this.mutatedKeys.has(b.key),N=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let V=!1;b&&A?b.data.isEqual(A.data)?P!==N&&(r.track({type:3,doc:A}),V=!0):this.su(b,A)||(r.track({type:2,doc:A}),V=!0,(h&&this.eu(A,h)>0||d&&this.eu(A,d)<0)&&(l=!0)):!b&&A?(r.track({type:0,doc:A}),V=!0):b&&!A&&(r.track({type:1,doc:b}),V=!0,(h||d)&&(l=!0)),V&&(A?(a=a.add(A),o=N?o.add(m):o.delete(m)):(a=a.delete(m),o=o.delete(m)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),o=o.delete(m.key),r.track({type:1,doc:m})}return{tu:a,iu:r,Cs:l,mutatedKeys:o}}su(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,s){const o=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const a=t.iu.ya();a.sort(((m,y)=>(function(A,P){const N=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return F(20277,{Rt:V})}};return N(A)-N(P)})(m.type,y.type)||this.eu(m.doc,y.doc))),this.ou(r),s=s??!1;const l=e&&!s?this._u():[],h=this.Xa.size===0&&this.current&&!s?1:0,d=h!==this.Za;return this.Za=h,a.length!==0||d?{snapshot:new yn(this.query,t.tu,o,a,t.mutatedKeys,h===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new uc,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(t){return!this.Ya.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach((e=>this.Ya=this.Ya.add(e))),t.modifiedDocuments.forEach((e=>{})),t.removedDocuments.forEach((e=>this.Ya=this.Ya.delete(e))),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Xa;this.Xa=G(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))}));const e=[];return t.forEach((r=>{this.Xa.has(r)||e.push(new au(r))})),this.Xa.forEach((r=>{t.has(r)||e.push(new ou(r))})),e}cu(t){this.Ya=t.Qs,this.Xa=G();const e=this.ru(t.documents);return this.applyChanges(e,!0)}lu(){return yn.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Yi="SyncEngine";class Ay{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class xy{constructor(t){this.key=t,this.hu=!1}}class Sy{constructor(t,e,r,s,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new Ke((l=>Al(l)),ms),this.Iu=new Map,this.Eu=new Set,this.du=new at(j.comparator),this.Au=new Map,this.Ru=new Fi,this.Vu={},this.mu=new Map,this.fu=gn.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Ry(n,t,e=!0){const r=fu(n);let s;const o=r.Tu.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.lu()):s=await cu(r,t,e,!0),s}async function Cy(n,t){const e=fu(n);await cu(e,t,!0,!1)}async function cu(n,t,e,r){const s=await Wg(n.localStore,ne(t)),o=s.targetId,a=n.sharedClientState.addLocalQueryTarget(o,e);let l;return r&&(l=await Py(n,t,o,a==="current",s.resumeToken)),n.isPrimaryClient&&e&&tu(n.remoteStore,s),l}async function Py(n,t,e,r,s){n.pu=(y,b,A)=>(async function(N,V,$,q){let B=V.view.ru($);B.Cs&&(B=await sc(N.localStore,V.query,!1).then((({documents:T})=>V.view.ru(T,B))));const nt=q&&q.targetChanges.get(V.targetId),lt=q&&q.targetMismatches.get(V.targetId)!=null,Y=V.view.applyChanges(B,N.isPrimaryClient,nt,lt);return mc(N,V.targetId,Y.au),Y.snapshot})(n,y,b,A);const o=await sc(n.localStore,t,!0),a=new Iy(t,o.Qs),l=a.ru(o.documents),h=hr.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",s),d=a.applyChanges(l,n.isPrimaryClient,h);mc(n,e,d.au);const m=new Ay(t,e,a);return n.Tu.set(t,m),n.Iu.has(e)?n.Iu.get(e).push(t):n.Iu.set(e,[t]),d.snapshot}async function Vy(n,t,e){const r=z(n),s=r.Tu.get(t),o=r.Iu.get(s.targetId);if(o.length>1)return r.Iu.set(s.targetId,o.filter((a=>!ms(a,t)))),void r.Tu.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await _i(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),e&&$i(r.remoteStore,s.targetId),Ei(r,s.targetId)})).catch(wn)):(Ei(r,s.targetId),await _i(r.localStore,s.targetId,!0))}async function Ny(n,t){const e=z(n),r=e.Tu.get(t),s=e.Iu.get(r.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),$i(e.remoteStore,r.targetId))}async function ky(n,t,e){const r=By(n);try{const s=await(function(a,l){const h=z(a),d=st.now(),m=l.reduce(((A,P)=>A.add(P.key)),G());let y,b;return h.persistence.runTransaction("Locally write mutations","readwrite",(A=>{let P=de(),N=G();return h.Ns.getEntries(A,m).next((V=>{P=V,P.forEach((($,q)=>{q.isValidDocument()||(N=N.add($))}))})).next((()=>h.localDocuments.getOverlayedDocuments(A,P))).next((V=>{y=V;const $=[];for(const q of l){const B=Hp(q,y.get(q.key).overlayedDocument);B!=null&&$.push(new Qe(q.key,B,yl(B.value.mapValue),ce.exists(!0)))}return h.mutationQueue.addMutationBatch(A,d,$,l)})).next((V=>{b=V;const $=V.applyToLocalDocumentSet(y,N);return h.documentOverlayCache.saveOverlays(A,V.batchId,$)}))})).then((()=>({batchId:b.batchId,changes:Rl(y)})))})(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),(function(a,l,h){let d=a.Vu[a.currentUser.toKey()];d||(d=new at(W)),d=d.insert(l,h),a.Vu[a.currentUser.toKey()]=d})(r,s.batchId,e),await fr(r,s.changes),await Es(r.remoteStore)}catch(s){const o=Ki(s,"Failed to persist write");e.reject(o)}}async function lu(n,t){const e=z(n);try{const r=await $g(e.localStore,t);t.targetChanges.forEach(((s,o)=>{const a=e.Au.get(o);a&&(J(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.hu=!0:s.modifiedDocuments.size>0?J(a.hu,14607):s.removedDocuments.size>0&&(J(a.hu,42227),a.hu=!1))})),await fr(e,r,t)}catch(r){await wn(r)}}function fc(n,t,e){const r=z(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.Tu.forEach(((o,a)=>{const l=a.view.va(t);l.snapshot&&s.push(l.snapshot)})),(function(a,l){const h=z(a);h.onlineState=l;let d=!1;h.queries.forEach(((m,y)=>{for(const b of y.Sa)b.va(l)&&(d=!0)})),d&&Qi(h)})(r.eventManager,t),s.length&&r.Pu.H_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Dy(n,t,e){const r=z(n);r.sharedClientState.updateQueryState(t,"rejected",e);const s=r.Au.get(t),o=s&&s.key;if(o){let a=new at(j.comparator);a=a.insert(o,Vt.newNoDocument(o,U.min()));const l=G().add(o),h=new _s(U.min(),new Map,new at(W),a,l);await lu(r,h),r.du=r.du.remove(o),r.Au.delete(t),Xi(r)}else await _i(r.localStore,t,!1).then((()=>Ei(r,t,e))).catch(wn)}async function My(n,t){const e=z(n),r=t.batch.batchId;try{const s=await zg(e.localStore,t);hu(e,r,null),uu(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await fr(e,s)}catch(s){await wn(s)}}async function Oy(n,t,e){const r=z(n);try{const s=await(function(a,l){const h=z(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",(d=>{let m;return h.mutationQueue.lookupMutationBatch(d,l).next((y=>(J(y!==null,37113),m=y.keys(),h.mutationQueue.removeMutationBatch(d,y)))).next((()=>h.mutationQueue.performConsistencyCheck(d))).next((()=>h.documentOverlayCache.removeOverlaysForBatchId(d,m,l))).next((()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,m))).next((()=>h.localDocuments.getDocuments(d,m)))}))})(r.localStore,t);hu(r,t,e),uu(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await fr(r,s)}catch(s){await wn(s)}}function uu(n,t){(n.mu.get(t)||[]).forEach((e=>{e.resolve()})),n.mu.delete(t)}function hu(n,t,e){const r=z(n);let s=r.Vu[r.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),r.Vu[r.currentUser.toKey()]=s}}function Ei(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Iu.get(t))n.Tu.delete(r),e&&n.Pu.yu(r,e);n.Iu.delete(t),n.isPrimaryClient&&n.Ru.jr(t).forEach((r=>{n.Ru.containsKey(r)||du(n,r)}))}function du(n,t){n.Eu.delete(t.path.canonicalString());const e=n.du.get(t);e!==null&&($i(n.remoteStore,e),n.du=n.du.remove(t),n.Au.delete(e),Xi(n))}function mc(n,t,e){for(const r of e)r instanceof ou?(n.Ru.addReference(r.key,t),jy(n,r)):r instanceof au?(M(Yi,"Document no longer in limbo: "+r.key),n.Ru.removeReference(r.key,t),n.Ru.containsKey(r.key)||du(n,r.key)):F(19791,{wu:r})}function jy(n,t){const e=t.key,r=e.path.canonicalString();n.du.get(e)||n.Eu.has(r)||(M(Yi,"New document in limbo: "+e),n.Eu.add(r),Xi(n))}function Xi(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const t=n.Eu.values().next().value;n.Eu.delete(t);const e=new j(et.fromString(t)),r=n.fu.next();n.Au.set(r,new xy(e)),n.du=n.du.insert(e,r),tu(n.remoteStore,new Ee(ne(Di(e.path)),r,"TargetPurposeLimboResolution",hs.ce))}}async function fr(n,t,e){const r=z(n),s=[],o=[],a=[];r.Tu.isEmpty()||(r.Tu.forEach(((l,h)=>{a.push(r.pu(h,t,e).then((d=>{if((d||e)&&r.isPrimaryClient){const m=d?!d.fromCache:e?.targetChanges.get(h.targetId)?.current;r.sharedClientState.updateQueryState(h.targetId,m?"current":"not-current")}if(d){s.push(d);const m=Ui.As(h.targetId,d);o.push(m)}})))})),await Promise.all(a),r.Pu.H_(s),await(async function(h,d){const m=z(h);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",(y=>C.forEach(d,(b=>C.forEach(b.Es,(A=>m.persistence.referenceDelegate.addReference(y,b.targetId,A))).next((()=>C.forEach(b.ds,(A=>m.persistence.referenceDelegate.removeReference(y,b.targetId,A)))))))))}catch(y){if(!En(y))throw y;M(zi,"Failed to update sequence numbers: "+y)}for(const y of d){const b=y.targetId;if(!y.fromCache){const A=m.Ms.get(b),P=A.snapshotVersion,N=A.withLastLimboFreeSnapshotVersion(P);m.Ms=m.Ms.insert(b,N)}}})(r.localStore,o))}async function Ly(n,t){const e=z(n);if(!e.currentUser.isEqual(t)){M(Yi,"User change. New user:",t.toKey());const r=await Yl(e.localStore,t);e.currentUser=t,(function(o,a){o.mu.forEach((l=>{l.forEach((h=>{h.reject(new D(R.CANCELLED,a))}))})),o.mu.clear()})(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await fr(e,r.Ls)}}function Fy(n,t){const e=z(n),r=e.Au.get(t);if(r&&r.hu)return G().add(r.key);{let s=G();const o=e.Iu.get(t);if(!o)return s;for(const a of o){const l=e.Tu.get(a);s=s.unionWith(l.view.nu)}return s}}function fu(n){const t=z(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=lu.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Fy.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Dy.bind(null,t),t.Pu.H_=Ey.bind(null,t.eventManager),t.Pu.yu=by.bind(null,t.eventManager),t}function By(n){const t=z(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=My.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Oy.bind(null,t),t}class is{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=vs(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,e){return null}Mu(t,e){return null}vu(t){return Ug(this.persistence,new Lg,t.initialUser,this.serializer)}Cu(t){return new Ql(Bi.mi,this.serializer)}Du(t){return new Kg}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}is.provider={build:()=>new is};class Uy extends is{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,e){J(this.persistence.referenceDelegate instanceof rs,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Tg(r,t.asyncQueue,e)}Cu(t){const e=this.cacheSizeBytes!==void 0?Ot.withCacheSize(this.cacheSizeBytes):Ot.DEFAULT;return new Ql((r=>rs.mi(r,e)),this.serializer)}}class bi{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>fc(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Ly.bind(null,this.syncEngine),await gy(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return(function(){return new _y})()}createDatastore(t){const e=vs(t.databaseInfo.databaseId),r=(function(o){return new Zg(o)})(t.databaseInfo);return(function(o,a,l,h){return new ry(o,a,l,h)})(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return(function(r,s,o,a,l){return new iy(r,s,o,a,l)})(this.localStore,this.datastore,t.asyncQueue,(e=>fc(this.syncEngine,e,0)),(function(){return ac.v()?new ac:new Qg})())}createSyncEngine(t,e){return(function(s,o,a,l,h,d,m){const y=new Sy(s,o,a,l,h,d);return m&&(y.gu=!0),y})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){await(async function(e){const r=z(e);M(We,"RemoteStore shutting down."),r.Ea.add(5),await dr(r),r.Aa.shutdown(),r.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}bi.provider={build:()=>new bi};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zy{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):he("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,e){setTimeout((()=>{this.muted||t(e)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ve="FirestoreClient";class $y{constructor(t,e,r,s,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=s,this.user=Pt.UNAUTHENTICATED,this.clientId=Ri.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,(async a=>{M(Ve,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(r,(a=>(M(Ve,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ze;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=Ki(e,"Failed to shutdown persistence");t.reject(r)}})),t.promise}}async function Qs(n,t){n.asyncQueue.verifyOperationInProgress(),M(Ve,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener((async s=>{r.isEqual(s)||(await Yl(t.localStore,s),r=s)})),t.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=t}async function pc(n,t){n.asyncQueue.verifyOperationInProgress();const e=await qy(n);M(Ve,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener((r=>lc(t.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,s)=>lc(t.remoteStore,s))),n._onlineComponents=t}async function qy(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){M(Ve,"Using user provided OfflineComponentProvider");try{await Qs(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!(function(s){return s.name==="FirebaseError"?s.code===R.FAILED_PRECONDITION||s.code===R.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(e))throw e;dn("Error using user provided cache. Falling back to memory cache: "+e),await Qs(n,new is)}}else M(Ve,"Using default OfflineComponentProvider"),await Qs(n,new Uy(void 0));return n._offlineComponents}async function mu(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(M(Ve,"Using user provided OnlineComponentProvider"),await pc(n,n._uninitializedComponentsProvider._online)):(M(Ve,"Using default OnlineComponentProvider"),await pc(n,new bi))),n._onlineComponents}function Hy(n){return mu(n).then((t=>t.syncEngine))}async function gc(n){const t=await mu(n),e=t.eventManager;return e.onListen=Ry.bind(null,t.syncEngine),e.onUnlisten=Vy.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Cy.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Ny.bind(null,t.syncEngine),e}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pu(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yc=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gu="firestore.googleapis.com",_c=!0;class vc{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new D(R.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=gu,this.ssl=_c}else this.host=t.host,this.ssl=t.ssl??_c;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Kl;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Eg)throw new D(R.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}sp("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=pu(t.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new D(R.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new D(R.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new D(R.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class bs{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new vc({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new D(R.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new D(R.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new vc(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new Km;switch(r.type){case"firstParty":return new Jm(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new D(R.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(e){const r=yc.get(e);r&&(M("ComponentProvider","Removing Datastore"),yc.delete(e),r.terminate())})(this),Promise.resolve()}}function Wy(n,t,e,r={}){n=Gn(n,bs);const s=Ai(t),o=n._getSettings(),a={...o,emulatorOptions:n._getEmulatorOptions()},l=`${t}:${e}`;s&&(Tf(`https://${l}`),Sf("Firestore",!0)),o.host!==gu&&o.host!==l&&dn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h={...o,host:l,ssl:s,emulatorOptions:r};if(!Kr(h,a)&&(n._setSettings(h),r.mockUserToken)){let d,m;if(typeof r.mockUserToken=="string")d=r.mockUserToken,m=Pt.MOCK_USER;else{d=If(r.mockUserToken,n._app?.options.projectId);const y=r.mockUserToken.sub||r.mockUserToken.user_id;if(!y)throw new D(R.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new Pt(y)}n._authCredentials=new Qm(new il(d,m))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Xe(this.firestore,t,this._query)}}class yt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ae(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new yt(this.firestore,t,this._key)}toJSON(){return{type:yt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,r){if(lr(e,yt._jsonSchema))return new yt(t,r||null,new j(et.fromString(e.referencePath)))}}yt._jsonSchemaVersion="firestore/documentReference/1.0",yt._jsonSchema={type:mt("string",yt._jsonSchemaVersion),referencePath:mt("string")};class Ae extends Xe{constructor(t,e,r){super(t,e,Di(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new yt(this.firestore,null,new j(t))}withConverter(t){return new Ae(this.firestore,t,this._path)}}function Gy(n,t,...e){if(n=qe(n),ol("collection","path",t),n instanceof bs){const r=et.fromString(t,...e);return Va(r),new Ae(n,null,r)}{if(!(n instanceof yt||n instanceof Ae))throw new D(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(et.fromString(t,...e));return Va(r),new Ae(n.firestore,null,r)}}function Ky(n,t,...e){if(n=qe(n),arguments.length===1&&(t=Ri.newId()),ol("doc","path",t),n instanceof bs){const r=et.fromString(t,...e);return Pa(r),new yt(n,null,new j(r))}{if(!(n instanceof yt||n instanceof Ae))throw new D(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(et.fromString(t,...e));return Pa(r),new yt(n.firestore,n instanceof Ae?n.converter:null,new j(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wc="AsyncQueue";class Ec{constructor(t=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Jl(this,"async_queue_retry"),this._c=()=>{const r=Ks();r&&M(wc,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=t;const e=Ks();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const e=Ks();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise((()=>{}));const e=new ze;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Xu.push(t),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(t){if(!En(t))throw t;M(wc,"Operation failed with retryable error: "+t)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(t){const e=this.ac.then((()=>(this.rc=!0,t().catch((r=>{throw this.nc=r,this.rc=!1,he("INTERNAL UNHANDLED ERROR: ",bc(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=e,e}enqueueAfterDelay(t,e,r){this.uc(),this.oc.indexOf(t)>-1&&(e=0);const s=Gi.createAndSchedule(this,t,e,r,(o=>this.hc(o)));return this.tc.push(s),s}uc(){this.nc&&F(47125,{Pc:bc(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const e of this.tc)if(e.timerId===t)return!0;return!1}Ec(t){return this.Tc().then((()=>{this.tc.sort(((e,r)=>e.targetTimeMs-r.targetTimeMs));for(const e of this.tc)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Tc()}))}dc(t){this.oc.push(t)}hc(t){const e=this.tc.indexOf(t);this.tc.splice(e,1)}}function bc(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tc(n){return(function(e,r){if(typeof e!="object"||e===null)return!1;const s=e;for(const o of r)if(o in s&&typeof s[o]=="function")return!0;return!1})(n,["next","error","complete"])}class os extends bs{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=new Ec,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Ec(t),this._firestoreClient=void 0,await t}}}function Qy(n,t){const e=typeof n=="object"?n:jm(),r=typeof n=="string"?n:Jr,s=Nm(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=Ef("firestore");o&&Wy(s,...o)}return s}function yu(n){if(n._terminated)throw new D(R.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Yy(n),n._firestoreClient}function Yy(n){const t=n._freezeSettings(),e=(function(s,o,a,l){return new pp(s,o,a,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,pu(l.experimentalLongPollingOptions),l.useFetchStreams,l.isUsingEmulator)})(n._databaseId,n._app?.options.appId||"",n._persistenceKey,t);n._componentsProvider||t.localCache?._offlineComponentProvider&&t.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),n._firestoreClient=new $y(n._authCredentials,n._appCheckCredentials,n._queue,e,n._componentsProvider&&(function(s){const o=s?._online.build();return{_offline:s?._offline.build(o),_online:o}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Wt(It.fromBase64String(t))}catch(e){throw new D(R.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Wt(It.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Wt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(lr(t,Wt._jsonSchema))return Wt.fromBase64String(t.bytes)}}Wt._jsonSchemaVersion="firestore/bytes/1.0",Wt._jsonSchema={type:mt("string",Wt._jsonSchemaVersion),bytes:mt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new D(R.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Tt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new D(R.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new D(R.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return W(this._lat,t._lat)||W(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:se._jsonSchemaVersion}}static fromJSON(t){if(lr(t,se._jsonSchema))return new se(t.latitude,t.longitude)}}se._jsonSchemaVersion="firestore/geoPoint/1.0",se._jsonSchema={type:mt("string",se._jsonSchemaVersion),latitude:mt("number"),longitude:mt("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(t){this._values=(t||[]).map((e=>e))}toArray(){return this._values.map((t=>t))}isEqual(t){return(function(r,s){if(r.length!==s.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==s[o])return!1;return!0})(this._values,t._values)}toJSON(){return{type:ie._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(lr(t,ie._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((e=>typeof e=="number")))return new ie(t.vectorValues);throw new D(R.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}ie._jsonSchemaVersion="firestore/vectorValue/1.0",ie._jsonSchema={type:mt("string",ie._jsonSchemaVersion),vectorValues:mt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xy=/^__.*__$/;class Jy{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new Qe(t,this.data,this.fieldMask,e,this.fieldTransforms):new ur(t,this.data,e,this.fieldTransforms)}}function _u(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw F(40011,{Ac:n})}}class to{constructor(t,e,r,s,o,a){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.Rc(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(t){return new to({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(t){const e=this.path?.child(t),r=this.Vc({path:e,fc:!1});return r.gc(t),r}yc(t){const e=this.path?.child(t),r=this.Vc({path:e,fc:!1});return r.Rc(),r}wc(t){return this.Vc({path:void 0,fc:!0})}Sc(t){return as(t,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(t){return this.fieldMask.find((e=>t.isPrefixOf(e)))!==void 0||this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))!==void 0}Rc(){if(this.path)for(let t=0;t<this.path.length;t++)this.gc(this.path.get(t))}gc(t){if(t.length===0)throw this.Sc("Document fields must not be empty");if(_u(this.Ac)&&Xy.test(t))throw this.Sc('Document fields cannot begin and end with "__"')}}class Zy{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||vs(t)}Cc(t,e,r,s=!1){return new to({Ac:t,methodName:e,Dc:r,path:Tt.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function vu(n){const t=n._freezeSettings(),e=vs(n._databaseId);return new Zy(n._databaseId,!!t.ignoreUndefinedProperties,e)}function t_(n,t,e,r,s,o={}){const a=n.Cc(o.merge||o.mergeFields?2:0,t,e,s);bu("Data must be an object, but it was:",a,r);const l=wu(r,a);let h,d;if(o.merge)h=new Gt(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){const m=[];for(const y of o.mergeFields){const b=n_(t,y,e);if(!a.contains(b))throw new D(R.INVALID_ARGUMENT,`Field '${b}' is specified in your field mask but missing from your input data.`);s_(m,b)||m.push(b)}h=new Gt(m),d=a.fieldTransforms.filter((y=>h.covers(y.field)))}else h=null,d=a.fieldTransforms;return new Jy(new Ht(l),h,d)}class eo extends Zi{_toFieldTransform(t){return new Up(t.path,new ir)}isEqual(t){return t instanceof eo}}function e_(n,t,e,r=!1){return no(e,n.Cc(r?4:3,t))}function no(n,t){if(Eu(n=qe(n)))return bu("Unsupported field value:",t,n),wu(n,t);if(n instanceof Zi)return(function(r,s){if(!_u(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)})(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.fc&&t.Ac!==4)throw t.Sc("Nested arrays are not supported");return(function(r,s){const o=[];let a=0;for(const l of r){let h=no(l,s.wc(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}})(n,t)}return(function(r,s){if((r=qe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Lp(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=st.fromDate(r);return{timestampValue:ns(s.serializer,o)}}if(r instanceof st){const o=new st(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ns(s.serializer,o)}}if(r instanceof se)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Wt)return{bytesValue:Ul(s.serializer,r._byteString)};if(r instanceof yt){const o=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw s.Sc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Li(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof ie)return(function(a,l){return{mapValue:{fields:{[pl]:{stringValue:gl},[Zr]:{arrayValue:{values:a.toArray().map((d=>{if(typeof d!="number")throw l.Sc("VectorValues must only contain numeric values.");return Mi(l.serializer,d)}))}}}}}})(r,s);throw s.Sc(`Unsupported field value: ${us(r)}`)})(n,t)}function wu(n,t){const e={};return ll(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Ge(n,((r,s)=>{const o=no(s,t.mc(r));o!=null&&(e[r]=o)})),{mapValue:{fields:e}}}function Eu(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof st||n instanceof se||n instanceof Wt||n instanceof yt||n instanceof Zi||n instanceof ie)}function bu(n,t,e){if(!Eu(e)||!al(e)){const r=us(e);throw r==="an object"?t.Sc(n+" a custom object"):t.Sc(n+" "+r)}}function n_(n,t,e){if((t=qe(t))instanceof Ji)return t._internalPath;if(typeof t=="string")return Tu(n,t);throw as("Field path arguments must be of type string or ",n,!1,void 0,e)}const r_=new RegExp("[~\\*/\\[\\]]");function Tu(n,t,e){if(t.search(r_)>=0)throw as(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Ji(...t.split("."))._internalPath}catch{throw as(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function as(n,t,e,r,s){const o=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${t}() called with invalid data`;e&&(l+=" (via `toFirestore()`)"),l+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${s}`),h+=")"),new D(R.INVALID_ARGUMENT,l+n+h)}function s_(n,t){return n.some((e=>e.isEqual(t)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{constructor(t,e,r,s,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new yt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new i_(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(ro("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class i_ extends Iu{data(){return super.data()}}function ro(n,t){return typeof t=="string"?Tu(n,t):t instanceof Ji?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o_(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new D(R.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class so{}class Au extends so{}function a_(n,t,...e){let r=[];t instanceof so&&r.push(t),r=r.concat(e),(function(o){const a=o.filter((h=>h instanceof oo)).length,l=o.filter((h=>h instanceof io)).length;if(a>1||a>0&&l>0)throw new D(R.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)n=s._apply(n);return n}class io extends Au{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new io(t,e,r)}_apply(t){const e=this._parse(t);return xu(t._query,e),new Xe(t.firestore,t.converter,di(t._query,e))}_parse(t){const e=vu(t.firestore);return(function(o,a,l,h,d,m,y){let b;if(d.isKeyField()){if(m==="array-contains"||m==="array-contains-any")throw new D(R.INVALID_ARGUMENT,`Invalid Query. You can't perform '${m}' queries on documentId().`);if(m==="in"||m==="not-in"){Ac(y,m);const P=[];for(const N of y)P.push(Ic(h,o,N));b={arrayValue:{values:P}}}else b=Ic(h,o,y)}else m!=="in"&&m!=="not-in"&&m!=="array-contains-any"||Ac(y,m),b=e_(l,a,y,m==="in"||m==="not-in");return ft.create(d,m,b)})(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}class oo extends so{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new oo(t,e)}_parse(t){const e=this._queryConstraints.map((r=>r._parse(t))).filter((r=>r.getFilters().length>0));return e.length===1?e[0]:Kt.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:((function(s,o){let a=s;const l=o.getFlattenedFilters();for(const h of l)xu(a,h),a=di(a,h)})(t._query,e),new Xe(t.firestore,t.converter,di(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class ao extends Au{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new ao(t,e)}_apply(t){const e=(function(s,o,a){if(s.startAt!==null)throw new D(R.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new D(R.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new sr(o,a)})(t._query,this._field,this._direction);return new Xe(t.firestore,t.converter,(function(s,o){const a=s.explicitOrderBy.concat([o]);return new bn(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)})(t._query,e))}}function c_(n,t="asc"){const e=t,r=ro("orderBy",n);return ao._create(r,e)}function Ic(n,t,e){if(typeof(e=qe(e))=="string"){if(e==="")throw new D(R.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Il(t)&&e.indexOf("/")!==-1)throw new D(R.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(et.fromString(e));if(!j.isDocumentKey(r))throw new D(R.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Fa(n,new j(r))}if(e instanceof yt)return Fa(n,e._key);throw new D(R.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${us(e)}.`)}function Ac(n,t){if(!Array.isArray(n)||n.length===0)throw new D(R.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function xu(n,t){const e=(function(s,o){for(const a of s)for(const l of a.getFlattenedFilters())if(o.indexOf(l.op)>=0)return l.op;return null})(n.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(t.op));if(e!==null)throw e===t.op?new D(R.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new D(R.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class l_{convertValue(t,e="none"){switch(Ce(t)){case 0:return null;case 1:return t.booleanValue;case 2:return ht(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Re(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw F(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return Ge(t,((s,o)=>{r[s]=this.convertValue(o,e)})),r}convertVectorValue(t){const e=t.fields?.[Zr].arrayValue?.values?.map((r=>ht(r.doubleValue)));return new ie(e)}convertGeoPoint(t){return new se(ht(t.latitude),ht(t.longitude))}convertArray(t,e){return(t.values||[]).map((r=>this.convertValue(r,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const r=fs(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(er(t));default:return null}}convertTimestamp(t){const e=Se(t);return new st(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=et.fromString(t);J(Gl(r),9688,{name:t});const s=new nr(r.get(1),r.get(3)),o=new j(r.popFirst(5));return s.isEqual(e)||he(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u_(n,t,e){let r;return r=n?n.toFirestore(t):t,r}class Hn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class $e extends Iu{constructor(t,e,r,s,o,a){super(t,e,r,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new zr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(ro("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new D(R.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=$e._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}$e._jsonSchemaVersion="firestore/documentSnapshot/1.0",$e._jsonSchema={type:mt("string",$e._jsonSchemaVersion),bundleSource:mt("string","DocumentSnapshot"),bundleName:mt("string"),bundle:mt("string")};class zr extends $e{data(t={}){return super.data(t)}}class hn{constructor(t,e,r,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new Hn(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach((r=>{t.call(e,new zr(this._firestore,this._userDataWriter,r.key,r,new Hn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new D(R.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=(function(s,o){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map((l=>{const h=new zr(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Hn(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}}))}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((l=>o||l.type!==3)).map((l=>{const h=new zr(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Hn(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,m=-1;return l.type!==0&&(d=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),m=a.indexOf(l.doc.key)),{type:h_(l.type),doc:h,oldIndex:d,newIndex:m}}))}})(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new D(R.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=hn._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=Ri.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],r=[],s=[];return this.docs.forEach((o=>{o._document!==null&&(e.push(o._document),r.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),s.push(o.ref.path))})),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function h_(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return F(61501,{type:n})}}hn._jsonSchemaVersion="firestore/querySnapshot/1.0",hn._jsonSchema={type:mt("string",hn._jsonSchemaVersion),bundleSource:mt("string","QuerySnapshot"),bundleName:mt("string"),bundle:mt("string")};class Su extends l_{constructor(t){super(),this.firestore=t}convertBytes(t){return new Wt(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new yt(this.firestore,null,e)}}function d_(n,t){const e=Gn(n.firestore,os),r=Ky(n),s=u_(n.converter,t);return m_(e,[t_(vu(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,ce.exists(!1))]).then((()=>r))}function f_(n,...t){n=qe(n);let e={includeMetadataChanges:!1,source:"default"},r=0;typeof t[r]!="object"||Tc(t[r])||(e=t[r++]);const s={includeMetadataChanges:e.includeMetadataChanges,source:e.source};if(Tc(t[r])){const h=t[r];t[r]=h.next?.bind(h),t[r+1]=h.error?.bind(h),t[r+2]=h.complete?.bind(h)}let o,a,l;if(n instanceof yt)a=Gn(n.firestore,os),l=Di(n._key.path),o={next:h=>{t[r]&&t[r](p_(a,n,h))},error:t[r+1],complete:t[r+2]};else{const h=Gn(n,Xe);a=Gn(h.firestore,os),l=h._query;const d=new Su(a);o={next:m=>{t[r]&&t[r](new hn(a,d,h,m))},error:t[r+1],complete:t[r+2]},o_(n._query)}return(function(d,m,y,b){const A=new zy(b),P=new Ty(m,A,y);return d.asyncQueue.enqueueAndForget((async()=>vy(await gc(d),P))),()=>{A.Nu(),d.asyncQueue.enqueueAndForget((async()=>wy(await gc(d),P)))}})(yu(a),l,s,o)}function m_(n,t){return(function(r,s){const o=new ze;return r.asyncQueue.enqueueAndForget((async()=>ky(await Hy(r),s,o))),o.promise})(yu(n),t)}function p_(n,t,e){const r=e.docs.get(t._key),s=new Su(n);return new $e(n,s,t._key,r,new Hn(e.hasPendingWrites,e.fromCache),t.converter)}function g_(){return new eo("serverTimestamp")}(function(t,e=!0){(function(s){vn=s})(Om),Yr(new Jn("firestore",((r,{instanceIdentifier:s,options:o})=>{const a=r.getProvider("app").getImmediate(),l=new os(new Ym(r.getProvider("auth-internal")),new Zm(a,r.getProvider("app-check-internal")),(function(d,m){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new D(R.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new nr(d.options.projectId,m)})(a,s),a);return o={useFetchStreams:e,...o},l._setSettings(o),l}),"PUBLIC").setMultipleInstances(!0)),ln(xa,Sa,t),ln(xa,Sa,"esm2020")})();var y_="firebase",__="12.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ln(y_,__,"app");const v_={apiKey:"AIzaSyCTl2vEmcp3VRvJm4igHk7PfsN4svghHOU",authDomain:"dvt7-79e11.firebaseapp.com",projectId:"dvt7-79e11",storageBucket:"dvt7-79e11.firebasestorage.app",messagingSenderId:"863955747683",appId:"1:863955747683:web:29ac343602cd6c355cc956"},w_=Qc(v_),E_=Qy(w_),Ru=["bg-danger-subtle","bg-warning-subtle","bg-info-subtle","bg-success-subtle"],b_=["text-danger","text-warning","text-info","text-success"],Cu=Gy(E_,"wishes"),T_=async(n,t,e)=>{const r=Math.floor(Math.random()*Ru.length);return await d_(Cu,{created_at:g_(),name:n,message:t,randomIndex:r})},I_=n=>{const t=a_(Cu,c_("created_at","desc"));return f_(t,r=>{const s=r.docs.map(o=>({id:o.id,...o.data()}));n(s)})},Dr=43200,xc=1440,Sc=Symbol.for("constructDateFrom");function Pu(n,t){return typeof n=="function"?n(t):n&&typeof n=="object"&&Sc in n?n[Sc](t):n instanceof Date?new n.constructor(t):new Date(t)}function Ne(n,t){return Pu(n,n)}let A_={};function x_(){return A_}function Rc(n){const t=Ne(n),e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),+n-+e}function co(n,...t){const e=Pu.bind(null,n||t.find(r=>typeof r=="object"));return t.map(e)}function $r(n,t){const e=+Ne(n)-+Ne(t);return e<0?-1:e>0?1:e}function S_(n,t,e){const[r,s]=co(e?.in,n,t),o=r.getFullYear()-s.getFullYear(),a=r.getMonth()-s.getMonth();return o*12+a}function R_(n){return t=>{const r=(n?Math[n]:Math.trunc)(t);return r===0?0:r}}function C_(n,t){return+Ne(n)-+Ne(t)}function P_(n,t){const e=Ne(n);return e.setHours(23,59,59,999),e}function V_(n,t){const e=Ne(n),r=e.getMonth();return e.setFullYear(e.getFullYear(),r+1,0),e.setHours(23,59,59,999),e}function N_(n,t){const e=Ne(n);return+P_(e)==+V_(e)}function k_(n,t,e){const[r,s,o]=co(e?.in,n,n,t),a=$r(s,o),l=Math.abs(S_(s,o));if(l<1)return 0;s.getMonth()===1&&s.getDate()>27&&s.setDate(30),s.setMonth(s.getMonth()-a*l);let h=$r(s,o)===-a;N_(r)&&l===1&&$r(r,o)===1&&(h=!1);const d=a*(l-+h);return d===0?0:d}function D_(n,t,e){const r=C_(n,t)/1e3;return R_(e?.roundingMethod)(r)}const M_={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},O_=(n,t,e)=>{let r;const s=M_[n];return typeof s=="string"?r=s:t===1?r=s.one:r=s.other.replace("{{count}}",t.toString()),e?.addSuffix?e.comparison&&e.comparison>0?"in "+r:r+" ago":r};function Ys(n){return(t={})=>{const e=t.width?String(t.width):n.defaultWidth;return n.formats[e]||n.formats[n.defaultWidth]}}const j_={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},L_={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},F_={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},B_={date:Ys({formats:j_,defaultWidth:"full"}),time:Ys({formats:L_,defaultWidth:"full"}),dateTime:Ys({formats:F_,defaultWidth:"full"})},U_={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},z_=(n,t,e,r)=>U_[n];function Bn(n){return(t,e)=>{const r=e?.context?String(e.context):"standalone";let s;if(r==="formatting"&&n.formattingValues){const a=n.defaultFormattingWidth||n.defaultWidth,l=e?.width?String(e.width):a;s=n.formattingValues[l]||n.formattingValues[a]}else{const a=n.defaultWidth,l=e?.width?String(e.width):n.defaultWidth;s=n.values[l]||n.values[a]}const o=n.argumentCallback?n.argumentCallback(t):t;return s[o]}}const $_={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},q_={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},H_={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},W_={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},G_={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},K_={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Q_=(n,t)=>{const e=Number(n),r=e%100;if(r>20||r<10)switch(r%10){case 1:return e+"st";case 2:return e+"nd";case 3:return e+"rd"}return e+"th"},Y_={ordinalNumber:Q_,era:Bn({values:$_,defaultWidth:"wide"}),quarter:Bn({values:q_,defaultWidth:"wide",argumentCallback:n=>n-1}),month:Bn({values:H_,defaultWidth:"wide"}),day:Bn({values:W_,defaultWidth:"wide"}),dayPeriod:Bn({values:G_,defaultWidth:"wide",formattingValues:K_,defaultFormattingWidth:"wide"})};function Un(n){return(t,e={})=>{const r=e.width,s=r&&n.matchPatterns[r]||n.matchPatterns[n.defaultMatchWidth],o=t.match(s);if(!o)return null;const a=o[0],l=r&&n.parsePatterns[r]||n.parsePatterns[n.defaultParseWidth],h=Array.isArray(l)?J_(l,y=>y.test(a)):X_(l,y=>y.test(a));let d;d=n.valueCallback?n.valueCallback(h):h,d=e.valueCallback?e.valueCallback(d):d;const m=t.slice(a.length);return{value:d,rest:m}}}function X_(n,t){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e)&&t(n[e]))return e}function J_(n,t){for(let e=0;e<n.length;e++)if(t(n[e]))return e}function Z_(n){return(t,e={})=>{const r=t.match(n.matchPattern);if(!r)return null;const s=r[0],o=t.match(n.parsePattern);if(!o)return null;let a=n.valueCallback?n.valueCallback(o[0]):o[0];a=e.valueCallback?e.valueCallback(a):a;const l=t.slice(s.length);return{value:a,rest:l}}}const t0=/^(\d+)(th|st|nd|rd)?/i,e0=/\d+/i,n0={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},r0={any:[/^b/i,/^(a|c)/i]},s0={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},i0={any:[/1/i,/2/i,/3/i,/4/i]},o0={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},a0={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},c0={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},l0={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},u0={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},h0={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},d0={ordinalNumber:Z_({matchPattern:t0,parsePattern:e0,valueCallback:n=>parseInt(n,10)}),era:Un({matchPatterns:n0,defaultMatchWidth:"wide",parsePatterns:r0,defaultParseWidth:"any"}),quarter:Un({matchPatterns:s0,defaultMatchWidth:"wide",parsePatterns:i0,defaultParseWidth:"any",valueCallback:n=>n+1}),month:Un({matchPatterns:o0,defaultMatchWidth:"wide",parsePatterns:a0,defaultParseWidth:"any"}),day:Un({matchPatterns:c0,defaultMatchWidth:"wide",parsePatterns:l0,defaultParseWidth:"any"}),dayPeriod:Un({matchPatterns:u0,defaultMatchWidth:"any",parsePatterns:h0,defaultParseWidth:"any"})},f0={code:"en-US",formatDistance:O_,formatLong:B_,formatRelative:z_,localize:Y_,match:d0,options:{weekStartsOn:0,firstWeekContainsDate:1}};function m0(n,t,e){const r=x_(),s=e?.locale??r.locale??f0,o=2520,a=$r(n,t);if(isNaN(a))throw new RangeError("Invalid time value");const l=Object.assign({},e,{addSuffix:e?.addSuffix,comparison:a}),[h,d]=co(e?.in,...a>0?[t,n]:[n,t]),m=D_(d,h),y=(Rc(d)-Rc(h))/1e3,b=Math.round((m-y)/60);let A;if(b<2)return e?.includeSeconds?m<5?s.formatDistance("lessThanXSeconds",5,l):m<10?s.formatDistance("lessThanXSeconds",10,l):m<20?s.formatDistance("lessThanXSeconds",20,l):m<40?s.formatDistance("halfAMinute",0,l):m<60?s.formatDistance("lessThanXMinutes",1,l):s.formatDistance("xMinutes",1,l):b===0?s.formatDistance("lessThanXMinutes",1,l):s.formatDistance("xMinutes",b,l);if(b<45)return s.formatDistance("xMinutes",b,l);if(b<90)return s.formatDistance("aboutXHours",1,l);if(b<xc){const P=Math.round(b/60);return s.formatDistance("aboutXHours",P,l)}else{if(b<o)return s.formatDistance("xDays",1,l);if(b<Dr){const P=Math.round(b/xc);return s.formatDistance("xDays",P,l)}else if(b<Dr*2)return A=Math.round(b/Dr),s.formatDistance("aboutXMonths",A,l)}if(A=k_(d,h),A<12){const P=Math.round(b/Dr);return s.formatDistance("xMonths",P,l)}else{const P=A%12,N=Math.trunc(A/12);return P<3?s.formatDistance("aboutXYears",N,l):P<9?s.formatDistance("overXYears",N,l):s.formatDistance("almostXYears",N+1,l)}}const p0="https://script.google.com/macros/s/AKfycbzfKZlpXfRgfzTdGMKvzWy3xL_pOXjpStB2PRTZE9CxhX5xBIe0WRzIPpmo_rxEU5xz/exec",g0="_surah_133q8_3",y0="_wish_133q8_11",Cc={surah:g0,wish:y0},_0=()=>{const[n,t]=L.useState(""),[e,r]=L.useState(""),[s,o]=L.useState([]),[a,l]=L.useState(!1),[h,d]=L.useState({timestamp:new Date,name:"",kehadiran:""});L.useEffect(()=>{d(A=>({...A,name:n}));const b=I_(o);return()=>{b()}},[]);const m=b=>{const{name:A,value:P}=b.target;d(N=>({...N,[A]:P}))},y=async b=>{if(b.preventDefault(),l(!0),!n.trim()||!e.trim()){alert("Masih ada yang belum terisi"),l(!1);return}try{const A=new FormData;if(A.append("timestamp",new Date),A.append("name",n.trim()),A.append("kehadiran",h.kehadiran),A.append("message",e.trim()),!(await fetch(p0,{method:"POST",body:A})).ok)throw new Error("Gagal kirim ke Google Sheet");T_(n.trim(),e.trim()),t(""),r(""),d({name:"",kehadiran:""}),ca.success("Wish sent successfully")}catch(A){ca.error(A.message)}finally{l(!1)}};return _.jsx("div",{className:` ${Cc.wish} py-5`,children:_.jsx("div",{className:"container text-center",children:_.jsx("div",{className:"",children:_.jsxs("div",{className:"text-dark",children:[_.jsx("p",{className:"fw-bold mb-2 text-warning2 text-warning2 garlicha","data-aos":"fade-down","data-aos-duration":"2500",style:{fontSize:"2.6rem"},children:"Wishes"}),_.jsx("p",{"data-aos":"fade-up",duration:"3000",children:"Sampaikan harapan terbaik anda untuk mempelai"}),_.jsxs("form",{name:"wishApp",id:"form",className:`${Cc.surah} text-start`,onSubmit:y,children:[_.jsx("div",{className:"mb-3",children:_.jsx("input",{className:"form-control shadow","data-aos":"zoom-in-down","data-aos-duration":"2000",placeholder:"Nama",value:n,onChange:b=>t(b.target.value)})}),_.jsx("div",{className:"mb-3",children:_.jsxs("select",{className:"form-control shadow",name:"kehadiran","data-aos":"zoom-in-down","data-aos-duration":"2000",value:h.kehadiran,onChange:m,children:[_.jsx("option",{value:"",disabled:!0,children:"Bisa hadir?"}),_.jsx("option",{value:"Hadir",children:"Hadir"}),_.jsx("option",{value:"Tidak Hadir",children:"Tidak Hadir"})]})}),_.jsx("div",{className:"mb-3",children:_.jsx("textarea",{className:"form-control shadow","data-aos":"zoom-in-down","data-aos-duration":"2500",placeholder:"Your wish",value:e,onChange:b=>r(b.target.value),style:{minHeight:80}})}),_.jsx("div",{className:"text-end",children:_.jsx("button",{className:"btn bgButtonPrime text-white d-flex flex-row align-items-center my-3 gap-2 ms-auto fw-semibold rounded-pill shadow",disabled:a,type:"submit","data-aos":"zoom-in-down","data-aos-duration":"2400",children:a?_.jsx("span",{className:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"}):_.jsxs("div",{className:"d-flex flex-row align-items-center gap-2",children:[_.jsx(mh,{}),_.jsx("p",{className:"mb-0",children:"Send Wish"})]})})})]}),_.jsx("div",{id:"wishes",className:"border-up border-2 border-dark-subtle pt-3 mt-4 ",children:_.jsx("ul",{className:"w-100 position-relative ps-4",style:{overflowY:"auto",maxHeight:"300px"},children:s.map((b,A)=>{const P=b.created_at?.toDate?.()||new Date,N=m0(P,new Date,{addSuffix:!0}),V=b.randomIndex??0;return _.jsxs("li",{className:"list-unstyled row my-4 w-100 justify-content-center gap-2",children:[_.jsx("div",{className:`${Ru[V]} col-2 d-flex justify-content-center align-items-center rounded-circle`,style:{height:50,width:50},children:_.jsx("p",{className:`${b_[V]} mb-0 fs-5`,children:b.name.charAt(0)})}),_.jsxs("div",{className:"col-8 text-start d-flex flex-column justify-content-center",children:[_.jsxs("div",{className:"d-flex text-start mb-1 flex-column flex-wrap",children:[_.jsx("p",{className:"mb-0 fw-semibold text-break w-75",children:b.name}),_.jsx("p",{className:"mb-0 fw-light",style:{fontSize:"0.7rem"},children:b.created_at?N:"just now"})]}),_.jsx("p",{className:"mb-0 text-break",children:b.message})]})]},A)})})})]})})})})},v0="_fst_1ptjr_3",w0="_bgClosing_1ptjr_11",E0="_imageClosing_1ptjr_25",Xs={fst:v0,bgClosing:w0,imageClosing:E0};function b0(n){return Bt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M260.062 32C138.605 32 40.134 129.701 40.134 250.232c0 41.23 11.532 79.79 31.559 112.687L32 480l121.764-38.682c31.508 17.285 67.745 27.146 106.298 27.146C381.535 468.464 480 370.749 480 250.232 480 129.701 381.535 32 260.062 32zm109.362 301.11c-5.174 12.827-28.574 24.533-38.899 25.072-10.314.547-10.608 7.994-66.84-16.434-56.225-24.434-90.052-83.844-92.719-87.67-2.669-3.812-21.78-31.047-20.749-58.455 1.038-27.413 16.047-40.346 21.404-45.725 5.351-5.387 11.486-6.352 15.232-6.413 4.428-.072 7.296-.132 10.573-.011 3.274.124 8.192-.685 12.45 10.639 4.256 11.323 14.443 39.153 15.746 41.989 1.302 2.839 2.108 6.126.102 9.771-2.012 3.653-3.042 5.935-5.961 9.083-2.935 3.148-6.174 7.042-8.792 9.449-2.92 2.665-5.97 5.572-2.9 11.269 3.068 5.693 13.653 24.356 29.779 39.736 20.725 19.771 38.598 26.329 44.098 29.317 5.515 3.004 8.806 2.67 12.226-.929 3.404-3.599 14.639-15.746 18.596-21.169 3.955-5.438 7.661-4.373 12.742-2.329 5.078 2.052 32.157 16.556 37.673 19.551 5.51 2.989 9.193 4.529 10.51 6.9 1.317 2.38.901 13.531-4.271 26.359z"},child:[]}]})(n)}function Js(n){return Bt({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M381.9 388.2c-6.4 27.4-27.2 42.8-55.1 48-24.5 4.5-44.9 5.6-64.5-10.2-23.9-20.1-24.2-53.4-2.7-74.4 17-16.2 40.9-19.5 76.8-25.8 6-1.1 11.2-2.5 15.6-7.4 6.4-7.2 4.4-4.1 4.4-163.2 0-11.2-5.5-14.3-17-12.3-8.2 1.4-185.7 34.6-185.7 34.6-10.2 2.2-13.4 5.2-13.4 16.7 0 234.7 1.1 223.9-2.5 239.5-4.2 18.2-15.4 31.9-30.2 39.5-16.8 9.3-47.2 13.4-63.4 10.4-43.2-8.1-58.4-58-29.1-86.6 17-16.2 40.9-19.5 76.8-25.8 6-1.1 11.2-2.5 15.6-7.4 10.1-11.5 1.8-256.6 5.2-270.2.8-5.2 3-9.6 7.1-12.9 4.2-3.5 11.8-5.5 13.4-5.5 204-38.2 228.9-43.1 232.4-43.1 11.5-.8 18.1 6 18.1 17.6.2 344.5 1.1 326-1.8 338.5z"},child:[]}]})(n)}const T0=({songIndex:n})=>_.jsx("section",{className:`${Xs.bgClosing} position-relative py-5`,children:_.jsxs("div",{className:"container text-center caudex",children:[_.jsx("div",{className:"",children:_.jsx("img",{className:`rounded-top-circle px-2 ${Xs.imageClosing}`,src:Uc,alt:"","data-aos":"zoom-in","data-aos-duration":"3000"})}),_.jsxs("div",{className:"",children:[_.jsx("p",{className:"mt-5","data-aos":"fade-up","data-aos-duration":"3000",children:"Menjadi sebuah kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dalam hari bahagia ini. Terima kasih atas segala ucapan, doa, dan perhatian yang diberikan."}),_.jsx("p",{className:"vidaloka fs-2","data-aos":"fade-down","data-aos-duration":"3000",children:"Anonim & anonim"})]}),_.jsxs("div",{className:"border-top w-50 mx-auto border-prime border-2 mt-4 pb -5",children:[_.jsx("p",{className:`${Xs.fst} mt-3 mb-3`,"data-aos":"zoom-in","data-aos-duration":"3000",children:"Made With ♥ Divition"}),_.jsxs("div",{className:"d-flex flex-row gap-2 justify-content-center",children:[_.jsx("a",{className:"p-2 bgIcon rounded-circle d-flex align-content-center",href:"https://www.instagram.com/yanggaraa/",children:_.jsx(Kd,{className:"textPrime fs-3"})}),_.jsx("a",{className:"p-2 bgIcon rounded-circle d-flex align-content-center",href:"https://wa.link/0gd2cu",children:_.jsx(b0,{className:"textPrime fs-3"})}),n==0&&_.jsx("a",{className:"p-2 bgIcon rounded-circle d-flex align-content-center",target:"blank",href:"https://www.youtube.com/watch?v=tX73H2FRcK8",children:_.jsx(Js,{className:"textPrime fs-3"})}),n==1&&_.jsx("a",{className:"p-2 bgIcon rounded-circle d-flex align-content-center",target:"blank",href:"https://www.youtube.com/watch?v=Cj7E2YB3pe0",children:_.jsx(Js,{className:"textPrime fs-3"})}),n==2&&_.jsx("a",{className:"p-2 bgIcon rounded-circle d-flex align-content-center",target:"blank",href:"https://www.youtube.com/watch?v=INnehEK0Yec",children:_.jsx(Js,{className:"textPrime fs-3"})})]})]})]})});function I0(n){return Bt({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-6 0a2 2 0 1 0-4 0 2 2 0 0 0 4 0M4 8a4 4 0 0 1 4-4 .5.5 0 0 0 0-1 5 5 0 0 0-5 5 .5.5 0 0 0 1 0m9 0a.5.5 0 1 0-1 0 4 4 0 0 1-4 4 .5.5 0 0 0 0 1 5 5 0 0 0 5-5"},child:[]}]})(n)}const A0=({audioRef:n,isPlaying:t,setIsPlaying:e})=>{const r=L.useRef(0),[s,o]=L.useState(0),a=()=>{const l=n.current;t?l.play():l.pause(),e(h=>!h),console.log(t)};return L.useEffect(()=>{const l=n.current,h=()=>{l.currentTime=0,l.play()};return l.addEventListener("ended",h),()=>{l.removeEventListener("ended",h)}},[]),L.useEffect(()=>{const l=n.current;return t?(l.play(),r.current=setInterval(()=>{o(h=>h+10)},100)):(l.pause(),r.current&&(clearInterval(r.current),r.current)),()=>{r.current&&clearInterval(r.current)}},[t]),_.jsx("div",{className:"text-center text-white me-3 mt-3 music position-absolute top-0 end-0",onClick:a,style:{zIndex:100},children:_.jsx("button",{className:"d-flex align-items-center justify-items-center my-3 mx-1 position-relative bg-transparent rounded-circle border-0","data-aos":"fade-down","data-aos-duration":"2000",style:{width:"50px",height:"50px"},children:_.jsx(I0,{className:"bg-transparent rounded-circle fs-2 textPrime",style:{transform:t?`rotate(${s}deg)`:`rotate(${s})`}})})})};function R0(){const[n,t]=L.useState(!1),[e,r]=L.useState(!1),[s,o]=L.useState(!1),a=ud(),{name:l}=sh(),h=Bc,m=decodeURIComponent(l).replace(/\+/g," ").split(" ").map(N=>N.charAt(0).toUpperCase()+N.slice(1)).join(" ");L.useEffect(()=>{ua.init({once:!1,mirror:!1}),ua.refresh()},[]);const[y,b]=L.useState(),[A,P]=L.useState("");return _.jsxs(_.Fragment,{children:[s?_.jsx(_.Fragment,{children:_.jsxs("section",{className:"position-relative mainPage",style:{height:"100dvh",scrollBehavior:e?"smooth":"auto"},children:[_.jsx(wh,{}),_.jsx(A0,{audioRef:a,isPlaying:n,setIsPlaying:t}),_.jsx(Id,{}),_.jsx(Rd,{}),_.jsx(kd,{}),_.jsx(jd,{}),_.jsx(qd,{}),_.jsx(ef,{isPhotoClicked:y,setisPhotoClicked:b,clickedPhoto:A,setClickedPhoto:P}),_.jsx(uf,{}),_.jsx(_0,{}),_.jsx(T0,{songIndex:h})]})}):_.jsx(_.Fragment,{children:_.jsx(vd,{name:m,isPlaying:n,setOpenMainPage:o,setIsPlaying:t,setScrollBehavior:r})}),_.jsx(cd,{position:"top-center"})]})}export{R0 as default};
