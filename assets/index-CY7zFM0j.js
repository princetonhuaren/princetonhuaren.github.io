var m3=Object.defineProperty;var g3=(e,t,r)=>t in e?m3(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var Qn=(e,t,r)=>g3(e,typeof t!="symbol"?t+"":t,r);function z2(e,t){for(var r=0;r<t.length;r++){const a=t[r];if(typeof a!="string"&&!Array.isArray(a)){for(const o in a)if(o!=="default"&&!(o in e)){const s=Object.getOwnPropertyDescriptor(a,o);s&&Object.defineProperty(e,o,s.get?s:{enumerable:!0,get:()=>a[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}})();function Ys(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Eh={exports:{}},ds={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gy;function p3(){if(Gy)return ds;Gy=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function r(a,o,s){var c=null;if(s!==void 0&&(c=""+s),o.key!==void 0&&(c=""+o.key),"key"in o){s={};for(var f in o)f!=="key"&&(s[f]=o[f])}else s=o;return o=s.ref,{$$typeof:e,type:a,key:c,ref:o!==void 0?o:null,props:s}}return ds.Fragment=t,ds.jsx=r,ds.jsxs=r,ds}var qy;function v3(){return qy||(qy=1,Eh.exports=p3()),Eh.exports}var V=v3(),Ah={exports:{}},Je={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wy;function y3(){if(Wy)return Je;Wy=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),s=Symbol.for("react.consumer"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function y(C){return C===null||typeof C!="object"?null:(C=v&&C[v]||C["@@iterator"],typeof C=="function"?C:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,A={};function x(C,F,Q){this.props=C,this.context=F,this.refs=A,this.updater=Q||S}x.prototype.isReactComponent={},x.prototype.setState=function(C,F){if(typeof C!="object"&&typeof C!="function"&&C!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,C,F,"setState")},x.prototype.forceUpdate=function(C){this.updater.enqueueForceUpdate(this,C,"forceUpdate")};function T(){}T.prototype=x.prototype;function R(C,F,Q){this.props=C,this.context=F,this.refs=A,this.updater=Q||S}var O=R.prototype=new T;O.constructor=R,w(O,x.prototype),O.isPureReactComponent=!0;var j=Array.isArray,z={H:null,A:null,T:null,S:null},N=Object.prototype.hasOwnProperty;function _(C,F,Q,M,H,le){return Q=le.ref,{$$typeof:e,type:C,key:F,ref:Q!==void 0?Q:null,props:le}}function J(C,F){return _(C.type,F,void 0,void 0,void 0,C.props)}function $(C){return typeof C=="object"&&C!==null&&C.$$typeof===e}function B(C){var F={"=":"=0",":":"=2"};return"$"+C.replace(/[=:]/g,function(Q){return F[Q]})}var U=/\/+/g;function W(C,F){return typeof C=="object"&&C!==null&&C.key!=null?B(""+C.key):F.toString(36)}function K(){}function Y(C){switch(C.status){case"fulfilled":return C.value;case"rejected":throw C.reason;default:switch(typeof C.status=="string"?C.then(K,K):(C.status="pending",C.then(function(F){C.status==="pending"&&(C.status="fulfilled",C.value=F)},function(F){C.status==="pending"&&(C.status="rejected",C.reason=F)})),C.status){case"fulfilled":return C.value;case"rejected":throw C.reason}}throw C}function G(C,F,Q,M,H){var le=typeof C;(le==="undefined"||le==="boolean")&&(C=null);var oe=!1;if(C===null)oe=!0;else switch(le){case"bigint":case"string":case"number":oe=!0;break;case"object":switch(C.$$typeof){case e:case t:oe=!0;break;case g:return oe=C._init,G(oe(C._payload),F,Q,M,H)}}if(oe)return H=H(C),oe=M===""?"."+W(C,0):M,j(H)?(Q="",oe!=null&&(Q=oe.replace(U,"$&/")+"/"),G(H,F,Q,"",function(me){return me})):H!=null&&($(H)&&(H=J(H,Q+(H.key==null||C&&C.key===H.key?"":(""+H.key).replace(U,"$&/")+"/")+oe)),F.push(H)),1;oe=0;var be=M===""?".":M+":";if(j(C))for(var ue=0;ue<C.length;ue++)M=C[ue],le=be+W(M,ue),oe+=G(M,F,Q,le,H);else if(ue=y(C),typeof ue=="function")for(C=ue.call(C),ue=0;!(M=C.next()).done;)M=M.value,le=be+W(M,ue++),oe+=G(M,F,Q,le,H);else if(le==="object"){if(typeof C.then=="function")return G(Y(C),F,Q,M,H);throw F=String(C),Error("Objects are not valid as a React child (found: "+(F==="[object Object]"?"object with keys {"+Object.keys(C).join(", ")+"}":F)+"). If you meant to render a collection of children, use an array instead.")}return oe}function P(C,F,Q){if(C==null)return C;var M=[],H=0;return G(C,M,"","",function(le){return F.call(Q,le,H++)}),M}function k(C){if(C._status===-1){var F=C._result;F=F(),F.then(function(Q){(C._status===0||C._status===-1)&&(C._status=1,C._result=Q)},function(Q){(C._status===0||C._status===-1)&&(C._status=2,C._result=Q)}),C._status===-1&&(C._status=0,C._result=F)}if(C._status===1)return C._result.default;throw C._result}var I=typeof reportError=="function"?reportError:function(C){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var F=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof C=="object"&&C!==null&&typeof C.message=="string"?String(C.message):String(C),error:C});if(!window.dispatchEvent(F))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",C);return}console.error(C)};function ne(){}return Je.Children={map:P,forEach:function(C,F,Q){P(C,function(){F.apply(this,arguments)},Q)},count:function(C){var F=0;return P(C,function(){F++}),F},toArray:function(C){return P(C,function(F){return F})||[]},only:function(C){if(!$(C))throw Error("React.Children.only expected to receive a single React element child.");return C}},Je.Component=x,Je.Fragment=r,Je.Profiler=o,Je.PureComponent=R,Je.StrictMode=a,Je.Suspense=h,Je.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,Je.act=function(){throw Error("act(...) is not supported in production builds of React.")},Je.cache=function(C){return function(){return C.apply(null,arguments)}},Je.cloneElement=function(C,F,Q){if(C==null)throw Error("The argument must be a React element, but you passed "+C+".");var M=w({},C.props),H=C.key,le=void 0;if(F!=null)for(oe in F.ref!==void 0&&(le=void 0),F.key!==void 0&&(H=""+F.key),F)!N.call(F,oe)||oe==="key"||oe==="__self"||oe==="__source"||oe==="ref"&&F.ref===void 0||(M[oe]=F[oe]);var oe=arguments.length-2;if(oe===1)M.children=Q;else if(1<oe){for(var be=Array(oe),ue=0;ue<oe;ue++)be[ue]=arguments[ue+2];M.children=be}return _(C.type,H,void 0,void 0,le,M)},Je.createContext=function(C){return C={$$typeof:c,_currentValue:C,_currentValue2:C,_threadCount:0,Provider:null,Consumer:null},C.Provider=C,C.Consumer={$$typeof:s,_context:C},C},Je.createElement=function(C,F,Q){var M,H={},le=null;if(F!=null)for(M in F.key!==void 0&&(le=""+F.key),F)N.call(F,M)&&M!=="key"&&M!=="__self"&&M!=="__source"&&(H[M]=F[M]);var oe=arguments.length-2;if(oe===1)H.children=Q;else if(1<oe){for(var be=Array(oe),ue=0;ue<oe;ue++)be[ue]=arguments[ue+2];H.children=be}if(C&&C.defaultProps)for(M in oe=C.defaultProps,oe)H[M]===void 0&&(H[M]=oe[M]);return _(C,le,void 0,void 0,null,H)},Je.createRef=function(){return{current:null}},Je.forwardRef=function(C){return{$$typeof:f,render:C}},Je.isValidElement=$,Je.lazy=function(C){return{$$typeof:g,_payload:{_status:-1,_result:C},_init:k}},Je.memo=function(C,F){return{$$typeof:d,type:C,compare:F===void 0?null:F}},Je.startTransition=function(C){var F=z.T,Q={};z.T=Q;try{var M=C(),H=z.S;H!==null&&H(Q,M),typeof M=="object"&&M!==null&&typeof M.then=="function"&&M.then(ne,I)}catch(le){I(le)}finally{z.T=F}},Je.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},Je.use=function(C){return z.H.use(C)},Je.useActionState=function(C,F,Q){return z.H.useActionState(C,F,Q)},Je.useCallback=function(C,F){return z.H.useCallback(C,F)},Je.useContext=function(C){return z.H.useContext(C)},Je.useDebugValue=function(){},Je.useDeferredValue=function(C,F){return z.H.useDeferredValue(C,F)},Je.useEffect=function(C,F){return z.H.useEffect(C,F)},Je.useId=function(){return z.H.useId()},Je.useImperativeHandle=function(C,F,Q){return z.H.useImperativeHandle(C,F,Q)},Je.useInsertionEffect=function(C,F){return z.H.useInsertionEffect(C,F)},Je.useLayoutEffect=function(C,F){return z.H.useLayoutEffect(C,F)},Je.useMemo=function(C,F){return z.H.useMemo(C,F)},Je.useOptimistic=function(C,F){return z.H.useOptimistic(C,F)},Je.useReducer=function(C,F,Q){return z.H.useReducer(C,F,Q)},Je.useRef=function(C){return z.H.useRef(C)},Je.useState=function(C){return z.H.useState(C)},Je.useSyncExternalStore=function(C,F,Q){return z.H.useSyncExternalStore(C,F,Q)},Je.useTransition=function(){return z.H.useTransition()},Je.version="19.0.0",Je}var Jy;function Bg(){return Jy||(Jy=1,Ah.exports=y3()),Ah.exports}var b=Bg();const ve=Ys(b),ef=z2({__proto__:null,default:ve},[b]);var Th={exports:{}},hs={},Rh={exports:{}},Oh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yy;function b3(){return Yy||(Yy=1,function(e){function t(P,k){var I=P.length;P.push(k);e:for(;0<I;){var ne=I-1>>>1,C=P[ne];if(0<o(C,k))P[ne]=k,P[I]=C,I=ne;else break e}}function r(P){return P.length===0?null:P[0]}function a(P){if(P.length===0)return null;var k=P[0],I=P.pop();if(I!==k){P[0]=I;e:for(var ne=0,C=P.length,F=C>>>1;ne<F;){var Q=2*(ne+1)-1,M=P[Q],H=Q+1,le=P[H];if(0>o(M,I))H<C&&0>o(le,M)?(P[ne]=le,P[H]=I,ne=H):(P[ne]=M,P[Q]=I,ne=Q);else if(H<C&&0>o(le,I))P[ne]=le,P[H]=I,ne=H;else break e}}return k}function o(P,k){var I=P.sortIndex-k.sortIndex;return I!==0?I:P.id-k.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var c=Date,f=c.now();e.unstable_now=function(){return c.now()-f}}var h=[],d=[],g=1,v=null,y=3,S=!1,w=!1,A=!1,x=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;function O(P){for(var k=r(d);k!==null;){if(k.callback===null)a(d);else if(k.startTime<=P)a(d),k.sortIndex=k.expirationTime,t(h,k);else break;k=r(d)}}function j(P){if(A=!1,O(P),!w)if(r(h)!==null)w=!0,Y();else{var k=r(d);k!==null&&G(j,k.startTime-P)}}var z=!1,N=-1,_=5,J=-1;function $(){return!(e.unstable_now()-J<_)}function B(){if(z){var P=e.unstable_now();J=P;var k=!0;try{e:{w=!1,A&&(A=!1,T(N),N=-1),S=!0;var I=y;try{t:{for(O(P),v=r(h);v!==null&&!(v.expirationTime>P&&$());){var ne=v.callback;if(typeof ne=="function"){v.callback=null,y=v.priorityLevel;var C=ne(v.expirationTime<=P);if(P=e.unstable_now(),typeof C=="function"){v.callback=C,O(P),k=!0;break t}v===r(h)&&a(h),O(P)}else a(h);v=r(h)}if(v!==null)k=!0;else{var F=r(d);F!==null&&G(j,F.startTime-P),k=!1}}break e}finally{v=null,y=I,S=!1}k=void 0}}finally{k?U():z=!1}}}var U;if(typeof R=="function")U=function(){R(B)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,K=W.port2;W.port1.onmessage=B,U=function(){K.postMessage(null)}}else U=function(){x(B,0)};function Y(){z||(z=!0,U())}function G(P,k){N=x(function(){P(e.unstable_now())},k)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){w||S||(w=!0,Y())},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return y},e.unstable_getFirstCallbackNode=function(){return r(h)},e.unstable_next=function(P){switch(y){case 1:case 2:case 3:var k=3;break;default:k=y}var I=y;y=k;try{return P()}finally{y=I}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,k){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var I=y;y=P;try{return k()}finally{y=I}},e.unstable_scheduleCallback=function(P,k,I){var ne=e.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?ne+I:ne):I=ne,P){case 1:var C=-1;break;case 2:C=250;break;case 5:C=1073741823;break;case 4:C=1e4;break;default:C=5e3}return C=I+C,P={id:g++,callback:k,priorityLevel:P,startTime:I,expirationTime:C,sortIndex:-1},I>ne?(P.sortIndex=I,t(d,P),r(h)===null&&P===r(d)&&(A?(T(N),N=-1):A=!0,G(j,I-ne))):(P.sortIndex=C,t(h,P),w||S||(w=!0,Y())),P},e.unstable_shouldYield=$,e.unstable_wrapCallback=function(P){var k=y;return function(){var I=y;y=k;try{return P.apply(this,arguments)}finally{y=I}}}}(Oh)),Oh}var Xy;function S3(){return Xy||(Xy=1,Rh.exports=b3()),Rh.exports}var Mh={exports:{}},An={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ky;function C3(){if(Ky)return An;Ky=1;var e=Bg();function t(h){var d="https://react.dev/errors/"+h;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)d+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+h+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var a={d:{f:r,r:function(){throw Error(t(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},o=Symbol.for("react.portal");function s(h,d,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:v==null?null:""+v,children:h,containerInfo:d,implementation:g}}var c=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(h,d){if(h==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return An.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,An.createPortal=function(h,d){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(t(299));return s(h,d,null,g)},An.flushSync=function(h){var d=c.T,g=a.p;try{if(c.T=null,a.p=2,h)return h()}finally{c.T=d,a.p=g,a.d.f()}},An.preconnect=function(h,d){typeof h=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,a.d.C(h,d))},An.prefetchDNS=function(h){typeof h=="string"&&a.d.D(h)},An.preinit=function(h,d){if(typeof h=="string"&&d&&typeof d.as=="string"){var g=d.as,v=f(g,d.crossOrigin),y=typeof d.integrity=="string"?d.integrity:void 0,S=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;g==="style"?a.d.S(h,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:v,integrity:y,fetchPriority:S}):g==="script"&&a.d.X(h,{crossOrigin:v,integrity:y,fetchPriority:S,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},An.preinitModule=function(h,d){if(typeof h=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var g=f(d.as,d.crossOrigin);a.d.M(h,{crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&a.d.M(h)},An.preload=function(h,d){if(typeof h=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var g=d.as,v=f(g,d.crossOrigin);a.d.L(h,g,{crossOrigin:v,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},An.preloadModule=function(h,d){if(typeof h=="string")if(d){var g=f(d.as,d.crossOrigin);a.d.m(h,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else a.d.m(h)},An.requestFormReset=function(h){a.d.r(h)},An.unstable_batchedUpdates=function(h,d){return h(d)},An.useFormState=function(h,d,g){return c.H.useFormState(h,d,g)},An.useFormStatus=function(){return c.H.useHostTransitionStatus()},An.version="19.0.0",An}var Qy;function _2(){if(Qy)return Mh.exports;Qy=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),Mh.exports=C3(),Mh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zy;function w3(){if(Zy)return hs;Zy=1;var e=S3(),t=Bg(),r=_2();function a(n){var i="https://react.dev/errors/"+n;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)i+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}var s=Symbol.for("react.element"),c=Symbol.for("react.transitional.element"),f=Symbol.for("react.portal"),h=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),v=Symbol.for("react.provider"),y=Symbol.for("react.consumer"),S=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),A=Symbol.for("react.suspense"),x=Symbol.for("react.suspense_list"),T=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),O=Symbol.for("react.offscreen"),j=Symbol.for("react.memo_cache_sentinel"),z=Symbol.iterator;function N(n){return n===null||typeof n!="object"?null:(n=z&&n[z]||n["@@iterator"],typeof n=="function"?n:null)}var _=Symbol.for("react.client.reference");function J(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===_?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case h:return"Fragment";case f:return"Portal";case g:return"Profiler";case d:return"StrictMode";case A:return"Suspense";case x:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case S:return(n.displayName||"Context")+".Provider";case y:return(n._context.displayName||"Context")+".Consumer";case w:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case T:return i=n.displayName||null,i!==null?i:J(n.type)||"Memo";case R:i=n._payload,n=n._init;try{return J(n(i))}catch{}}return null}var $=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B=Object.assign,U,W;function K(n){if(U===void 0)try{throw Error()}catch(l){var i=l.stack.trim().match(/\n( *(at )?)/);U=i&&i[1]||"",W=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+U+n+W}var Y=!1;function G(n,i){if(!n||Y)return"";Y=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(i){var he=function(){throw Error()};if(Object.defineProperty(he.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(he,[])}catch(se){var ae=se}Reflect.construct(n,[],he)}else{try{he.call()}catch(se){ae=se}n.call(he.prototype)}}else{try{throw Error()}catch(se){ae=se}(he=n())&&typeof he.catch=="function"&&he.catch(function(){})}}catch(se){if(se&&ae&&typeof se.stack=="string")return[se.stack,ae.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var m=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");m&&m.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var p=u.DetermineComponentFrameRoot(),E=p[0],D=p[1];if(E&&D){var L=E.split(`
`),X=D.split(`
`);for(m=u=0;u<L.length&&!L[u].includes("DetermineComponentFrameRoot");)u++;for(;m<X.length&&!X[m].includes("DetermineComponentFrameRoot");)m++;if(u===L.length||m===X.length)for(u=L.length-1,m=X.length-1;1<=u&&0<=m&&L[u]!==X[m];)m--;for(;1<=u&&0<=m;u--,m--)if(L[u]!==X[m]){if(u!==1||m!==1)do if(u--,m--,0>m||L[u]!==X[m]){var ce=`
`+L[u].replace(" at new "," at ");return n.displayName&&ce.includes("<anonymous>")&&(ce=ce.replace("<anonymous>",n.displayName)),ce}while(1<=u&&0<=m);break}}}finally{Y=!1,Error.prepareStackTrace=l}return(l=n?n.displayName||n.name:"")?K(l):""}function P(n){switch(n.tag){case 26:case 27:case 5:return K(n.type);case 16:return K("Lazy");case 13:return K("Suspense");case 19:return K("SuspenseList");case 0:case 15:return n=G(n.type,!1),n;case 11:return n=G(n.type.render,!1),n;case 1:return n=G(n.type,!0),n;default:return""}}function k(n){try{var i="";do i+=P(n),n=n.return;while(n);return i}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}function I(n){var i=n,l=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(l=i.return),n=i.return;while(n)}return i.tag===3?l:null}function ne(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function C(n){if(I(n)!==n)throw Error(a(188))}function F(n){var i=n.alternate;if(!i){if(i=I(n),i===null)throw Error(a(188));return i!==n?null:n}for(var l=n,u=i;;){var m=l.return;if(m===null)break;var p=m.alternate;if(p===null){if(u=m.return,u!==null){l=u;continue}break}if(m.child===p.child){for(p=m.child;p;){if(p===l)return C(m),n;if(p===u)return C(m),i;p=p.sibling}throw Error(a(188))}if(l.return!==u.return)l=m,u=p;else{for(var E=!1,D=m.child;D;){if(D===l){E=!0,l=m,u=p;break}if(D===u){E=!0,u=m,l=p;break}D=D.sibling}if(!E){for(D=p.child;D;){if(D===l){E=!0,l=p,u=m;break}if(D===u){E=!0,u=p,l=m;break}D=D.sibling}if(!E)throw Error(a(189))}}if(l.alternate!==u)throw Error(a(190))}if(l.tag!==3)throw Error(a(188));return l.stateNode.current===l?n:i}function Q(n){var i=n.tag;if(i===5||i===26||i===27||i===6)return n;for(n=n.child;n!==null;){if(i=Q(n),i!==null)return i;n=n.sibling}return null}var M=Array.isArray,H=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,le={pending:!1,data:null,method:null,action:null},oe=[],be=-1;function ue(n){return{current:n}}function me(n){0>be||(n.current=oe[be],oe[be]=null,be--)}function ge(n,i){be++,oe[be]=n.current,n.current=i}var Pe=ue(null),_e=ue(null),He=ue(null),Xe=ue(null);function Ge(n,i){switch(ge(He,i),ge(_e,n),ge(Pe,null),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)&&(i=i.namespaceURI)?Sy(i):0;break;default:if(n=n===8?i.parentNode:i,i=n.tagName,n=n.namespaceURI)n=Sy(n),i=Cy(n,i);else switch(i){case"svg":i=1;break;case"math":i=2;break;default:i=0}}me(Pe),ge(Pe,i)}function Me(){me(Pe),me(_e),me(He)}function rt(n){n.memoizedState!==null&&ge(Xe,n);var i=Pe.current,l=Cy(i,n.type);i!==l&&(ge(_e,n),ge(Pe,l))}function Ve(n){_e.current===n&&(me(Pe),me(_e)),Xe.current===n&&(me(Xe),ls._currentValue=le)}var Ke=Object.prototype.hasOwnProperty,Et=e.unstable_scheduleCallback,Be=e.unstable_cancelCallback,st=e.unstable_shouldYield,Ce=e.unstable_requestPaint,Te=e.unstable_now,qe=e.unstable_getCurrentPriorityLevel,re=e.unstable_ImmediatePriority,de=e.unstable_UserBlockingPriority,Se=e.unstable_NormalPriority,Ne=e.unstable_LowPriority,Re=e.unstable_IdlePriority,at=e.log,ut=e.unstable_setDisableYieldValue,$e=null,xe=null;function Qe(n){if(xe&&typeof xe.onCommitFiberRoot=="function")try{xe.onCommitFiberRoot($e,n,void 0,(n.current.flags&128)===128)}catch{}}function Fe(n){if(typeof at=="function"&&ut(n),xe&&typeof xe.setStrictMode=="function")try{xe.setStrictMode($e,n)}catch{}}var Ze=Math.clz32?Math.clz32:Ba,It=Math.log,wi=Math.LN2;function Ba(n){return n>>>=0,n===0?32:31-(It(n)/wi|0)|0}var Jr=128,Yr=4194304;function Qt(n){var i=n&42;if(i!==0)return i;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function Wt(n,i){var l=n.pendingLanes;if(l===0)return 0;var u=0,m=n.suspendedLanes,p=n.pingedLanes,E=n.warmLanes;n=n.finishedLanes!==0;var D=l&134217727;return D!==0?(l=D&~m,l!==0?u=Qt(l):(p&=D,p!==0?u=Qt(p):n||(E=D&~E,E!==0&&(u=Qt(E))))):(D=l&~m,D!==0?u=Qt(D):p!==0?u=Qt(p):n||(E=l&~E,E!==0&&(u=Qt(E)))),u===0?0:i!==0&&i!==u&&(i&m)===0&&(m=u&-u,E=i&-i,m>=E||m===32&&(E&4194176)!==0)?i:u}function wn(n,i){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&i)===0}function Vt(n,i){switch(n){case 1:case 2:case 4:case 8:return i+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function On(){var n=Jr;return Jr<<=1,(Jr&4194176)===0&&(Jr=128),n}function ht(){var n=Yr;return Yr<<=1,(Yr&62914560)===0&&(Yr=4194304),n}function ot(n){for(var i=[],l=0;31>l;l++)i.push(n);return i}function Lt(n,i){n.pendingLanes|=i,i!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function lr(n,i,l,u,m,p){var E=n.pendingLanes;n.pendingLanes=l,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=l,n.entangledLanes&=l,n.errorRecoveryDisabledLanes&=l,n.shellSuspendCounter=0;var D=n.entanglements,L=n.expirationTimes,X=n.hiddenUpdates;for(l=E&~l;0<l;){var ce=31-Ze(l),he=1<<ce;D[ce]=0,L[ce]=-1;var ae=X[ce];if(ae!==null)for(X[ce]=null,ce=0;ce<ae.length;ce++){var se=ae[ce];se!==null&&(se.lane&=-536870913)}l&=~he}u!==0&&Xr(n,u,0),p!==0&&m===0&&n.tag!==0&&(n.suspendedLanes|=p&~(E&~i))}function Xr(n,i,l){n.pendingLanes|=i,n.suspendedLanes&=~i;var u=31-Ze(i);n.entangledLanes|=i,n.entanglements[u]=n.entanglements[u]|1073741824|l&4194218}function mt(n,i){var l=n.entangledLanes|=i;for(n=n.entanglements;l;){var u=31-Ze(l),m=1<<u;m&i|n[u]&i&&(n[u]|=i),l&=~m}}function Kr(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function Qr(){var n=H.p;return n!==0?n:(n=window.event,n===void 0?32:Hy(n.type))}function Ct(n,i){var l=H.p;try{return H.p=n,i()}finally{H.p=l}}var vt=Math.random().toString(36).slice(2),yt="__reactFiber$"+vt,bt="__reactProps$"+vt,un="__reactContainer$"+vt,_r="__reactEvents$"+vt,sr="__reactListeners$"+vt,Un="__reactHandles$"+vt,Mn="__reactResources$"+vt,kn="__reactMarker$"+vt;function Gn(n){delete n[yt],delete n[bt],delete n[_r],delete n[sr],delete n[Un]}function Ln(n){var i=n[yt];if(i)return i;for(var l=n.parentNode;l;){if(i=l[un]||l[yt]){if(l=i.alternate,i.child!==null||l!==null&&l.child!==null)for(n=Ey(n);n!==null;){if(l=n[yt])return l;n=Ey(n)}return i}n=l,l=n.parentNode}return null}function ft(n){if(n=n[yt]||n[un]){var i=n.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return n}return null}function Zr(n){var i=n.tag;if(i===5||i===26||i===27||i===6)return n.stateNode;throw Error(a(33))}function ea(n){var i=n[Mn];return i||(i=n[Mn]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function Nt(n){n[kn]=!0}var xi=new Set,co={};function ur(n,i){$r(n,i),$r(n+"Capture",i)}function $r(n,i){for(co[n]=i,n=0;n<i.length;n++)xi.add(i[n])}var vn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fo=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),pa={},cr={};function ho(n){return Ke.call(cr,n)?!0:Ke.call(pa,n)?!1:fo.test(n)?cr[n]=!0:(pa[n]=!0,!1)}function va(n,i,l){if(ho(i))if(l===null)n.removeAttribute(i);else{switch(typeof l){case"undefined":case"function":case"symbol":n.removeAttribute(i);return;case"boolean":var u=i.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){n.removeAttribute(i);return}}n.setAttribute(i,""+l)}}function Nn(n,i,l){if(l===null)n.removeAttribute(i);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(i);return}n.setAttribute(i,""+l)}}function Jt(n,i,l,u){if(u===null)n.removeAttribute(l);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(l);return}n.setAttributeNS(i,l,""+u)}}function an(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function ya(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function fr(n){var i=ya(n)?"checked":"value",l=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),u=""+n[i];if(!n.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var m=l.get,p=l.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return m.call(this)},set:function(E){u=""+E,p.call(this,E)}}),Object.defineProperty(n,i,{enumerable:l.enumerable}),{getValue:function(){return u},setValue:function(E){u=""+E},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Fa(n){n._valueTracker||(n._valueTracker=fr(n))}function Ei(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var l=i.getValue(),u="";return n&&(u=ya(n)?n.checked?"true":"false":n.value),n=u,n!==l?(i.setValue(n),!0):!1}function Ia(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var Ai=/[\n"\\]/g;function xn(n){return n.replace(Ai,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Ti(n,i,l,u,m,p,E,D){n.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?n.type=E:n.removeAttribute("type"),i!=null?E==="number"?(i===0&&n.value===""||n.value!=i)&&(n.value=""+an(i)):n.value!==""+an(i)&&(n.value=""+an(i)):E!=="submit"&&E!=="reset"||n.removeAttribute("value"),i!=null?Va(n,E,an(i)):l!=null?Va(n,E,an(l)):u!=null&&n.removeAttribute("value"),m==null&&p!=null&&(n.defaultChecked=!!p),m!=null&&(n.checked=m&&typeof m!="function"&&typeof m!="symbol"),D!=null&&typeof D!="function"&&typeof D!="symbol"&&typeof D!="boolean"?n.name=""+an(D):n.removeAttribute("name")}function mo(n,i,l,u,m,p,E,D){if(p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(n.type=p),i!=null||l!=null){if(!(p!=="submit"&&p!=="reset"||i!=null))return;l=l!=null?""+an(l):"",i=i!=null?""+an(i):l,D||i===n.value||(n.value=i),n.defaultValue=i}u=u??m,u=typeof u!="function"&&typeof u!="symbol"&&!!u,n.checked=D?n.checked:!!u,n.defaultChecked=!!u,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(n.name=E)}function Va(n,i,l){i==="number"&&Ia(n.ownerDocument)===n||n.defaultValue===""+l||(n.defaultValue=""+l)}function ta(n,i,l,u){if(n=n.options,i){i={};for(var m=0;m<l.length;m++)i["$"+l[m]]=!0;for(l=0;l<n.length;l++)m=i.hasOwnProperty("$"+n[l].value),n[l].selected!==m&&(n[l].selected=m),m&&u&&(n[l].defaultSelected=!0)}else{for(l=""+an(l),i=null,m=0;m<n.length;m++){if(n[m].value===l){n[m].selected=!0,u&&(n[m].defaultSelected=!0);return}i!==null||n[m].disabled||(i=n[m])}i!==null&&(i.selected=!0)}}function go(n,i,l){if(i!=null&&(i=""+an(i),i!==n.value&&(n.value=i),l==null)){n.defaultValue!==i&&(n.defaultValue=i);return}n.defaultValue=l!=null?""+an(l):""}function Ri(n,i,l,u){if(i==null){if(u!=null){if(l!=null)throw Error(a(92));if(M(u)){if(1<u.length)throw Error(a(93));u=u[0]}l=u}l==null&&(l=""),i=l}l=an(i),n.defaultValue=l,u=n.textContent,u===l&&u!==""&&u!==null&&(n.value=u)}function na(n,i){if(i){var l=n.firstChild;if(l&&l===n.lastChild&&l.nodeType===3){l.nodeValue=i;return}}n.textContent=i}var wl=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ua(n,i,l){var u=i.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?u?n.setProperty(i,""):i==="float"?n.cssFloat="":n[i]="":u?n.setProperty(i,l):typeof l!="number"||l===0||wl.has(i)?i==="float"?n.cssFloat=l:n[i]=(""+l).trim():n[i]=l+"px"}function qn(n,i,l){if(i!=null&&typeof i!="object")throw Error(a(62));if(n=n.style,l!=null){for(var u in l)!l.hasOwnProperty(u)||i!=null&&i.hasOwnProperty(u)||(u.indexOf("--")===0?n.setProperty(u,""):u==="float"?n.cssFloat="":n[u]="");for(var m in i)u=i[m],i.hasOwnProperty(m)&&l[m]!==u&&Ua(n,m,u)}else for(var p in i)i.hasOwnProperty(p)&&Ua(n,p,i[p])}function Oi(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var jn=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),po=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function kr(n){return po.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}var dr=null;function hr(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var mr=null,Lr=null;function vo(n){var i=ft(n);if(i&&(n=i.stateNode)){var l=n[bt]||null;e:switch(n=i.stateNode,i.type){case"input":if(Ti(n,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),i=l.name,l.type==="radio"&&i!=null){for(l=n;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+xn(""+i)+'"][type="radio"]'),i=0;i<l.length;i++){var u=l[i];if(u!==n&&u.form===n.form){var m=u[bt]||null;if(!m)throw Error(a(90));Ti(u,m.value,m.defaultValue,m.defaultValue,m.checked,m.defaultChecked,m.type,m.name)}}for(i=0;i<l.length;i++)u=l[i],u.form===n.form&&Ei(u)}break e;case"textarea":go(n,l.value,l.defaultValue);break e;case"select":i=l.value,i!=null&&ta(n,!!l.multiple,i,!1)}}}var Mi=!1;function yo(n,i,l){if(Mi)return n(i,l);Mi=!0;try{var u=n(i);return u}finally{if(Mi=!1,(mr!==null||Lr!==null)&&(Gu(),mr&&(i=mr,n=Lr,Lr=mr=null,vo(i),n)))for(i=0;i<n.length;i++)vo(n[i])}}function we(n,i){var l=n.stateNode;if(l===null)return null;var u=l[bt]||null;if(u===null)return null;l=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(l&&typeof l!="function")throw Error(a(231,i,typeof l));return l}var ke=!1;if(vn)try{var wt={};Object.defineProperty(wt,"passive",{get:function(){ke=!0}}),window.addEventListener("test",wt,wt),window.removeEventListener("test",wt,wt)}catch{ke=!1}var At=null,Dt=null,ba=null;function bo(){if(ba)return ba;var n,i=Dt,l=i.length,u,m="value"in At?At.value:At.textContent,p=m.length;for(n=0;n<l&&i[n]===m[n];n++);var E=l-n;for(u=1;u<=E&&i[l-u]===m[p-u];u++);return ba=m.slice(n,1<u?1-u:void 0)}function Ni(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Sa(){return!0}function zp(){return!1}function Hn(n){function i(l,u,m,p,E){this._reactName=l,this._targetInst=m,this.type=u,this.nativeEvent=p,this.target=E,this.currentTarget=null;for(var D in n)n.hasOwnProperty(D)&&(l=n[D],this[D]=l?l(p):p[D]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Sa:zp,this.isPropagationStopped=zp,this}return B(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Sa)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Sa)},persist:function(){},isPersistent:Sa}),i}var Di={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},du=Hn(Di),xl=B({},Di,{view:0,detail:0}),mx=Hn(xl),Nf,Df,El,hu=B({},xl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zf,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==El&&(El&&n.type==="mousemove"?(Nf=n.screenX-El.screenX,Df=n.screenY-El.screenY):Df=Nf=0,El=n),Nf)},movementY:function(n){return"movementY"in n?n.movementY:Df}}),_p=Hn(hu),gx=B({},hu,{dataTransfer:0}),px=Hn(gx),vx=B({},xl,{relatedTarget:0}),Pf=Hn(vx),yx=B({},Di,{animationName:0,elapsedTime:0,pseudoElement:0}),bx=Hn(yx),Sx=B({},Di,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Cx=Hn(Sx),wx=B({},Di,{data:0}),$p=Hn(wx),xx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ex={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ax={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Tx(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Ax[n])?!!i[n]:!1}function zf(){return Tx}var Rx=B({},xl,{key:function(n){if(n.key){var i=xx[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Ni(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Ex[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zf,charCode:function(n){return n.type==="keypress"?Ni(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ni(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Ox=Hn(Rx),Mx=B({},hu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),kp=Hn(Mx),Nx=B({},xl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zf}),Dx=Hn(Nx),Px=B({},Di,{propertyName:0,elapsedTime:0,pseudoElement:0}),zx=Hn(Px),_x=B({},hu,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),$x=Hn(_x),kx=B({},Di,{newState:0,oldState:0}),Lx=Hn(kx),jx=[9,13,27,32],_f=vn&&"CompositionEvent"in window,Al=null;vn&&"documentMode"in document&&(Al=document.documentMode);var Hx=vn&&"TextEvent"in window&&!Al,Lp=vn&&(!_f||Al&&8<Al&&11>=Al),jp=" ",Hp=!1;function Bp(n,i){switch(n){case"keyup":return jx.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fp(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var So=!1;function Bx(n,i){switch(n){case"compositionend":return Fp(i);case"keypress":return i.which!==32?null:(Hp=!0,jp);case"textInput":return n=i.data,n===jp&&Hp?null:n;default:return null}}function Fx(n,i){if(So)return n==="compositionend"||!_f&&Bp(n,i)?(n=bo(),ba=Dt=At=null,So=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Lp&&i.locale!=="ko"?null:i.data;default:return null}}var Ix={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ip(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!Ix[n.type]:i==="textarea"}function Vp(n,i,l,u){mr?Lr?Lr.push(u):Lr=[u]:mr=u,i=Xu(i,"onChange"),0<i.length&&(l=new du("onChange","change",null,l,u),n.push({event:l,listeners:i}))}var Tl=null,Rl=null;function Vx(n){gy(n,0)}function mu(n){var i=Zr(n);if(Ei(i))return n}function Up(n,i){if(n==="change")return i}var Gp=!1;if(vn){var $f;if(vn){var kf="oninput"in document;if(!kf){var qp=document.createElement("div");qp.setAttribute("oninput","return;"),kf=typeof qp.oninput=="function"}$f=kf}else $f=!1;Gp=$f&&(!document.documentMode||9<document.documentMode)}function Wp(){Tl&&(Tl.detachEvent("onpropertychange",Jp),Rl=Tl=null)}function Jp(n){if(n.propertyName==="value"&&mu(Rl)){var i=[];Vp(i,Rl,n,hr(n)),yo(Vx,i)}}function Ux(n,i,l){n==="focusin"?(Wp(),Tl=i,Rl=l,Tl.attachEvent("onpropertychange",Jp)):n==="focusout"&&Wp()}function Gx(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return mu(Rl)}function qx(n,i){if(n==="click")return mu(i)}function Wx(n,i){if(n==="input"||n==="change")return mu(i)}function Jx(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Wn=typeof Object.is=="function"?Object.is:Jx;function Ol(n,i){if(Wn(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var l=Object.keys(n),u=Object.keys(i);if(l.length!==u.length)return!1;for(u=0;u<l.length;u++){var m=l[u];if(!Ke.call(i,m)||!Wn(n[m],i[m]))return!1}return!0}function Yp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Xp(n,i){var l=Yp(n);n=0;for(var u;l;){if(l.nodeType===3){if(u=n+l.textContent.length,n<=i&&u>=i)return{node:l,offset:i-n};n=u}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Yp(l)}}function Kp(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Kp(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Qp(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var i=Ia(n.document);i instanceof n.HTMLIFrameElement;){try{var l=typeof i.contentWindow.location.href=="string"}catch{l=!1}if(l)n=i.contentWindow;else break;i=Ia(n.document)}return i}function Lf(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function Yx(n,i){var l=Qp(i);i=n.focusedElem;var u=n.selectionRange;if(l!==i&&i&&i.ownerDocument&&Kp(i.ownerDocument.documentElement,i)){if(u!==null&&Lf(i)){if(n=u.start,l=u.end,l===void 0&&(l=n),"selectionStart"in i)i.selectionStart=n,i.selectionEnd=Math.min(l,i.value.length);else if(l=(n=i.ownerDocument||document)&&n.defaultView||window,l.getSelection){l=l.getSelection();var m=i.textContent.length,p=Math.min(u.start,m);u=u.end===void 0?p:Math.min(u.end,m),!l.extend&&p>u&&(m=u,u=p,p=m),m=Xp(i,p);var E=Xp(i,u);m&&E&&(l.rangeCount!==1||l.anchorNode!==m.node||l.anchorOffset!==m.offset||l.focusNode!==E.node||l.focusOffset!==E.offset)&&(n=n.createRange(),n.setStart(m.node,m.offset),l.removeAllRanges(),p>u?(l.addRange(n),l.extend(E.node,E.offset)):(n.setEnd(E.node,E.offset),l.addRange(n)))}}for(n=[],l=i;l=l.parentNode;)l.nodeType===1&&n.push({element:l,left:l.scrollLeft,top:l.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<n.length;i++)l=n[i],l.element.scrollLeft=l.left,l.element.scrollTop=l.top}}var Xx=vn&&"documentMode"in document&&11>=document.documentMode,Co=null,jf=null,Ml=null,Hf=!1;function Zp(n,i,l){var u=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Hf||Co==null||Co!==Ia(u)||(u=Co,"selectionStart"in u&&Lf(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Ml&&Ol(Ml,u)||(Ml=u,u=Xu(jf,"onSelect"),0<u.length&&(i=new du("onSelect","select",null,i,l),n.push({event:i,listeners:u}),i.target=Co)))}function Pi(n,i){var l={};return l[n.toLowerCase()]=i.toLowerCase(),l["Webkit"+n]="webkit"+i,l["Moz"+n]="moz"+i,l}var wo={animationend:Pi("Animation","AnimationEnd"),animationiteration:Pi("Animation","AnimationIteration"),animationstart:Pi("Animation","AnimationStart"),transitionrun:Pi("Transition","TransitionRun"),transitionstart:Pi("Transition","TransitionStart"),transitioncancel:Pi("Transition","TransitionCancel"),transitionend:Pi("Transition","TransitionEnd")},Bf={},e0={};vn&&(e0=document.createElement("div").style,"AnimationEvent"in window||(delete wo.animationend.animation,delete wo.animationiteration.animation,delete wo.animationstart.animation),"TransitionEvent"in window||delete wo.transitionend.transition);function zi(n){if(Bf[n])return Bf[n];if(!wo[n])return n;var i=wo[n],l;for(l in i)if(i.hasOwnProperty(l)&&l in e0)return Bf[n]=i[l];return n}var t0=zi("animationend"),n0=zi("animationiteration"),r0=zi("animationstart"),Kx=zi("transitionrun"),Qx=zi("transitionstart"),Zx=zi("transitioncancel"),a0=zi("transitionend"),i0=new Map,o0="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function jr(n,i){i0.set(n,i),ur(i,[n])}var gr=[],xo=0,Ff=0;function gu(){for(var n=xo,i=Ff=xo=0;i<n;){var l=gr[i];gr[i++]=null;var u=gr[i];gr[i++]=null;var m=gr[i];gr[i++]=null;var p=gr[i];if(gr[i++]=null,u!==null&&m!==null){var E=u.pending;E===null?m.next=m:(m.next=E.next,E.next=m),u.pending=m}p!==0&&l0(l,m,p)}}function pu(n,i,l,u){gr[xo++]=n,gr[xo++]=i,gr[xo++]=l,gr[xo++]=u,Ff|=u,n.lanes|=u,n=n.alternate,n!==null&&(n.lanes|=u)}function If(n,i,l,u){return pu(n,i,l,u),vu(n)}function Ga(n,i){return pu(n,null,null,i),vu(n)}function l0(n,i,l){n.lanes|=l;var u=n.alternate;u!==null&&(u.lanes|=l);for(var m=!1,p=n.return;p!==null;)p.childLanes|=l,u=p.alternate,u!==null&&(u.childLanes|=l),p.tag===22&&(n=p.stateNode,n===null||n._visibility&1||(m=!0)),n=p,p=p.return;m&&i!==null&&n.tag===3&&(p=n.stateNode,m=31-Ze(l),p=p.hiddenUpdates,n=p[m],n===null?p[m]=[i]:n.push(i),i.lane=l|536870912)}function vu(n){if(50<es)throw es=0,Jd=null,Error(a(185));for(var i=n.return;i!==null;)n=i,i=n.return;return n.tag===3?n.stateNode:null}var Eo={},s0=new WeakMap;function pr(n,i){if(typeof n=="object"&&n!==null){var l=s0.get(n);return l!==void 0?l:(i={value:n,source:i,stack:k(i)},s0.set(n,i),i)}return{value:n,source:i,stack:k(i)}}var Ao=[],To=0,yu=null,bu=0,vr=[],yr=0,_i=null,Ca=1,wa="";function $i(n,i){Ao[To++]=bu,Ao[To++]=yu,yu=n,bu=i}function u0(n,i,l){vr[yr++]=Ca,vr[yr++]=wa,vr[yr++]=_i,_i=n;var u=Ca;n=wa;var m=32-Ze(u)-1;u&=~(1<<m),l+=1;var p=32-Ze(i)+m;if(30<p){var E=m-m%5;p=(u&(1<<E)-1).toString(32),u>>=E,m-=E,Ca=1<<32-Ze(i)+m|l<<m|u,wa=p+n}else Ca=1<<p|l<<m|u,wa=n}function Vf(n){n.return!==null&&($i(n,1),u0(n,1,0))}function Uf(n){for(;n===yu;)yu=Ao[--To],Ao[To]=null,bu=Ao[--To],Ao[To]=null;for(;n===_i;)_i=vr[--yr],vr[yr]=null,wa=vr[--yr],vr[yr]=null,Ca=vr[--yr],vr[yr]=null}var Dn=null,yn=null,gt=!1,Hr=null,ra=!1,Gf=Error(a(519));function ki(n){var i=Error(a(418,""));throw Pl(pr(i,n)),Gf}function c0(n){var i=n.stateNode,l=n.type,u=n.memoizedProps;switch(i[yt]=n,i[bt]=u,l){case"dialog":ct("cancel",i),ct("close",i);break;case"iframe":case"object":case"embed":ct("load",i);break;case"video":case"audio":for(l=0;l<ns.length;l++)ct(ns[l],i);break;case"source":ct("error",i);break;case"img":case"image":case"link":ct("error",i),ct("load",i);break;case"details":ct("toggle",i);break;case"input":ct("invalid",i),mo(i,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0),Fa(i);break;case"select":ct("invalid",i);break;case"textarea":ct("invalid",i),Ri(i,u.value,u.defaultValue,u.children),Fa(i)}l=u.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||i.textContent===""+l||u.suppressHydrationWarning===!0||by(i.textContent,l)?(u.popover!=null&&(ct("beforetoggle",i),ct("toggle",i)),u.onScroll!=null&&ct("scroll",i),u.onScrollEnd!=null&&ct("scrollend",i),u.onClick!=null&&(i.onclick=Ku),i=!0):i=!1,i||ki(n)}function f0(n){for(Dn=n.return;Dn;)switch(Dn.tag){case 3:case 27:ra=!0;return;case 5:case 13:ra=!1;return;default:Dn=Dn.return}}function Nl(n){if(n!==Dn)return!1;if(!gt)return f0(n),gt=!0,!1;var i=!1,l;if((l=n.tag!==3&&n.tag!==27)&&((l=n.tag===5)&&(l=n.type,l=!(l!=="form"&&l!=="button")||fh(n.type,n.memoizedProps)),l=!l),l&&(i=!0),i&&yn&&ki(n),f0(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(a(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8)if(l=n.data,l==="/$"){if(i===0){yn=Fr(n.nextSibling);break e}i--}else l!=="$"&&l!=="$!"&&l!=="$?"||i++;n=n.nextSibling}yn=null}}else yn=Dn?Fr(n.stateNode.nextSibling):null;return!0}function Dl(){yn=Dn=null,gt=!1}function Pl(n){Hr===null?Hr=[n]:Hr.push(n)}var zl=Error(a(460)),d0=Error(a(474)),qf={then:function(){}};function h0(n){return n=n.status,n==="fulfilled"||n==="rejected"}function Su(){}function m0(n,i,l){switch(l=n[l],l===void 0?n.push(i):l!==i&&(i.then(Su,Su),i=l),i.status){case"fulfilled":return i.value;case"rejected":throw n=i.reason,n===zl?Error(a(483)):n;default:if(typeof i.status=="string")i.then(Su,Su);else{if(n=Pt,n!==null&&100<n.shellSuspendCounter)throw Error(a(482));n=i,n.status="pending",n.then(function(u){if(i.status==="pending"){var m=i;m.status="fulfilled",m.value=u}},function(u){if(i.status==="pending"){var m=i;m.status="rejected",m.reason=u}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw n=i.reason,n===zl?Error(a(483)):n}throw _l=i,zl}}var _l=null;function g0(){if(_l===null)throw Error(a(459));var n=_l;return _l=null,n}var Ro=null,$l=0;function Cu(n){var i=$l;return $l+=1,Ro===null&&(Ro=[]),m0(Ro,n,i)}function kl(n,i){i=i.props.ref,n.ref=i!==void 0?i:null}function wu(n,i){throw i.$$typeof===s?Error(a(525)):(n=Object.prototype.toString.call(i),Error(a(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n)))}function p0(n){var i=n._init;return i(n._payload)}function v0(n){function i(Z,q){if(n){var te=Z.deletions;te===null?(Z.deletions=[q],Z.flags|=16):te.push(q)}}function l(Z,q){if(!n)return null;for(;q!==null;)i(Z,q),q=q.sibling;return null}function u(Z){for(var q=new Map;Z!==null;)Z.key!==null?q.set(Z.key,Z):q.set(Z.index,Z),Z=Z.sibling;return q}function m(Z,q){return Z=ri(Z,q),Z.index=0,Z.sibling=null,Z}function p(Z,q,te){return Z.index=te,n?(te=Z.alternate,te!==null?(te=te.index,te<q?(Z.flags|=33554434,q):te):(Z.flags|=33554434,q)):(Z.flags|=1048576,q)}function E(Z){return n&&Z.alternate===null&&(Z.flags|=33554434),Z}function D(Z,q,te,fe){return q===null||q.tag!==6?(q=Bd(te,Z.mode,fe),q.return=Z,q):(q=m(q,te),q.return=Z,q)}function L(Z,q,te,fe){var Ae=te.type;return Ae===h?ce(Z,q,te.props.children,fe,te.key):q!==null&&(q.elementType===Ae||typeof Ae=="object"&&Ae!==null&&Ae.$$typeof===R&&p0(Ae)===q.type)?(q=m(q,te.props),kl(q,te),q.return=Z,q):(q=Bu(te.type,te.key,te.props,null,Z.mode,fe),kl(q,te),q.return=Z,q)}function X(Z,q,te,fe){return q===null||q.tag!==4||q.stateNode.containerInfo!==te.containerInfo||q.stateNode.implementation!==te.implementation?(q=Fd(te,Z.mode,fe),q.return=Z,q):(q=m(q,te.children||[]),q.return=Z,q)}function ce(Z,q,te,fe,Ae){return q===null||q.tag!==7?(q=qi(te,Z.mode,fe,Ae),q.return=Z,q):(q=m(q,te),q.return=Z,q)}function he(Z,q,te){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return q=Bd(""+q,Z.mode,te),q.return=Z,q;if(typeof q=="object"&&q!==null){switch(q.$$typeof){case c:return te=Bu(q.type,q.key,q.props,null,Z.mode,te),kl(te,q),te.return=Z,te;case f:return q=Fd(q,Z.mode,te),q.return=Z,q;case R:var fe=q._init;return q=fe(q._payload),he(Z,q,te)}if(M(q)||N(q))return q=qi(q,Z.mode,te,null),q.return=Z,q;if(typeof q.then=="function")return he(Z,Cu(q),te);if(q.$$typeof===S)return he(Z,Lu(Z,q),te);wu(Z,q)}return null}function ae(Z,q,te,fe){var Ae=q!==null?q.key:null;if(typeof te=="string"&&te!==""||typeof te=="number"||typeof te=="bigint")return Ae!==null?null:D(Z,q,""+te,fe);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case c:return te.key===Ae?L(Z,q,te,fe):null;case f:return te.key===Ae?X(Z,q,te,fe):null;case R:return Ae=te._init,te=Ae(te._payload),ae(Z,q,te,fe)}if(M(te)||N(te))return Ae!==null?null:ce(Z,q,te,fe,null);if(typeof te.then=="function")return ae(Z,q,Cu(te),fe);if(te.$$typeof===S)return ae(Z,q,Lu(Z,te),fe);wu(Z,te)}return null}function se(Z,q,te,fe,Ae){if(typeof fe=="string"&&fe!==""||typeof fe=="number"||typeof fe=="bigint")return Z=Z.get(te)||null,D(q,Z,""+fe,Ae);if(typeof fe=="object"&&fe!==null){switch(fe.$$typeof){case c:return Z=Z.get(fe.key===null?te:fe.key)||null,L(q,Z,fe,Ae);case f:return Z=Z.get(fe.key===null?te:fe.key)||null,X(q,Z,fe,Ae);case R:var nt=fe._init;return fe=nt(fe._payload),se(Z,q,te,fe,Ae)}if(M(fe)||N(fe))return Z=Z.get(te)||null,ce(q,Z,fe,Ae,null);if(typeof fe.then=="function")return se(Z,q,te,Cu(fe),Ae);if(fe.$$typeof===S)return se(Z,q,te,Lu(q,fe),Ae);wu(q,fe)}return null}function Oe(Z,q,te,fe){for(var Ae=null,nt=null,De=q,Le=q=0,dn=null;De!==null&&Le<te.length;Le++){De.index>Le?(dn=De,De=null):dn=De.sibling;var pt=ae(Z,De,te[Le],fe);if(pt===null){De===null&&(De=dn);break}n&&De&&pt.alternate===null&&i(Z,De),q=p(pt,q,Le),nt===null?Ae=pt:nt.sibling=pt,nt=pt,De=dn}if(Le===te.length)return l(Z,De),gt&&$i(Z,Le),Ae;if(De===null){for(;Le<te.length;Le++)De=he(Z,te[Le],fe),De!==null&&(q=p(De,q,Le),nt===null?Ae=De:nt.sibling=De,nt=De);return gt&&$i(Z,Le),Ae}for(De=u(De);Le<te.length;Le++)dn=se(De,Z,Le,te[Le],fe),dn!==null&&(n&&dn.alternate!==null&&De.delete(dn.key===null?Le:dn.key),q=p(dn,q,Le),nt===null?Ae=dn:nt.sibling=dn,nt=dn);return n&&De.forEach(function(ci){return i(Z,ci)}),gt&&$i(Z,Le),Ae}function Ue(Z,q,te,fe){if(te==null)throw Error(a(151));for(var Ae=null,nt=null,De=q,Le=q=0,dn=null,pt=te.next();De!==null&&!pt.done;Le++,pt=te.next()){De.index>Le?(dn=De,De=null):dn=De.sibling;var ci=ae(Z,De,pt.value,fe);if(ci===null){De===null&&(De=dn);break}n&&De&&ci.alternate===null&&i(Z,De),q=p(ci,q,Le),nt===null?Ae=ci:nt.sibling=ci,nt=ci,De=dn}if(pt.done)return l(Z,De),gt&&$i(Z,Le),Ae;if(De===null){for(;!pt.done;Le++,pt=te.next())pt=he(Z,pt.value,fe),pt!==null&&(q=p(pt,q,Le),nt===null?Ae=pt:nt.sibling=pt,nt=pt);return gt&&$i(Z,Le),Ae}for(De=u(De);!pt.done;Le++,pt=te.next())pt=se(De,Z,Le,pt.value,fe),pt!==null&&(n&&pt.alternate!==null&&De.delete(pt.key===null?Le:pt.key),q=p(pt,q,Le),nt===null?Ae=pt:nt.sibling=pt,nt=pt);return n&&De.forEach(function(h3){return i(Z,h3)}),gt&&$i(Z,Le),Ae}function qt(Z,q,te,fe){if(typeof te=="object"&&te!==null&&te.type===h&&te.key===null&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case c:e:{for(var Ae=te.key;q!==null;){if(q.key===Ae){if(Ae=te.type,Ae===h){if(q.tag===7){l(Z,q.sibling),fe=m(q,te.props.children),fe.return=Z,Z=fe;break e}}else if(q.elementType===Ae||typeof Ae=="object"&&Ae!==null&&Ae.$$typeof===R&&p0(Ae)===q.type){l(Z,q.sibling),fe=m(q,te.props),kl(fe,te),fe.return=Z,Z=fe;break e}l(Z,q);break}else i(Z,q);q=q.sibling}te.type===h?(fe=qi(te.props.children,Z.mode,fe,te.key),fe.return=Z,Z=fe):(fe=Bu(te.type,te.key,te.props,null,Z.mode,fe),kl(fe,te),fe.return=Z,Z=fe)}return E(Z);case f:e:{for(Ae=te.key;q!==null;){if(q.key===Ae)if(q.tag===4&&q.stateNode.containerInfo===te.containerInfo&&q.stateNode.implementation===te.implementation){l(Z,q.sibling),fe=m(q,te.children||[]),fe.return=Z,Z=fe;break e}else{l(Z,q);break}else i(Z,q);q=q.sibling}fe=Fd(te,Z.mode,fe),fe.return=Z,Z=fe}return E(Z);case R:return Ae=te._init,te=Ae(te._payload),qt(Z,q,te,fe)}if(M(te))return Oe(Z,q,te,fe);if(N(te)){if(Ae=N(te),typeof Ae!="function")throw Error(a(150));return te=Ae.call(te),Ue(Z,q,te,fe)}if(typeof te.then=="function")return qt(Z,q,Cu(te),fe);if(te.$$typeof===S)return qt(Z,q,Lu(Z,te),fe);wu(Z,te)}return typeof te=="string"&&te!==""||typeof te=="number"||typeof te=="bigint"?(te=""+te,q!==null&&q.tag===6?(l(Z,q.sibling),fe=m(q,te),fe.return=Z,Z=fe):(l(Z,q),fe=Bd(te,Z.mode,fe),fe.return=Z,Z=fe),E(Z)):l(Z,q)}return function(Z,q,te,fe){try{$l=0;var Ae=qt(Z,q,te,fe);return Ro=null,Ae}catch(De){if(De===zl)throw De;var nt=wr(29,De,null,Z.mode);return nt.lanes=fe,nt.return=Z,nt}finally{}}}var Li=v0(!0),y0=v0(!1),Oo=ue(null),xu=ue(0);function b0(n,i){n=za,ge(xu,n),ge(Oo,i),za=n|i.baseLanes}function Wf(){ge(xu,za),ge(Oo,Oo.current)}function Jf(){za=xu.current,me(Oo),me(xu)}var br=ue(null),aa=null;function qa(n){var i=n.alternate;ge(on,on.current&1),ge(br,n),aa===null&&(i===null||Oo.current!==null||i.memoizedState!==null)&&(aa=n)}function S0(n){if(n.tag===22){if(ge(on,on.current),ge(br,n),aa===null){var i=n.alternate;i!==null&&i.memoizedState!==null&&(aa=n)}}else Wa()}function Wa(){ge(on,on.current),ge(br,br.current)}function xa(n){me(br),aa===n&&(aa=null),me(on)}var on=ue(0);function Eu(n){for(var i=n;i!==null;){if(i.tag===13){var l=i.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var e6=typeof AbortController<"u"?AbortController:function(){var n=[],i=this.signal={aborted:!1,addEventListener:function(l,u){n.push(u)}};this.abort=function(){i.aborted=!0,n.forEach(function(l){return l()})}},t6=e.unstable_scheduleCallback,n6=e.unstable_NormalPriority,ln={$$typeof:S,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Yf(){return{controller:new e6,data:new Map,refCount:0}}function Ll(n){n.refCount--,n.refCount===0&&t6(n6,function(){n.controller.abort()})}var jl=null,Xf=0,Mo=0,No=null;function r6(n,i){if(jl===null){var l=jl=[];Xf=0,Mo=nh(),No={status:"pending",value:void 0,then:function(u){l.push(u)}}}return Xf++,i.then(C0,C0),i}function C0(){if(--Xf===0&&jl!==null){No!==null&&(No.status="fulfilled");var n=jl;jl=null,Mo=0,No=null;for(var i=0;i<n.length;i++)(0,n[i])()}}function a6(n,i){var l=[],u={status:"pending",value:null,reason:null,then:function(m){l.push(m)}};return n.then(function(){u.status="fulfilled",u.value=i;for(var m=0;m<l.length;m++)(0,l[m])(i)},function(m){for(u.status="rejected",u.reason=m,m=0;m<l.length;m++)(0,l[m])(void 0)}),u}var w0=$.S;$.S=function(n,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&r6(n,i),w0!==null&&w0(n,i)};var ji=ue(null);function Kf(){var n=ji.current;return n!==null?n:Pt.pooledCache}function Au(n,i){i===null?ge(ji,ji.current):ge(ji,i.pool)}function x0(){var n=Kf();return n===null?null:{parent:ln._currentValue,pool:n}}var Ja=0,et=null,Tt=null,Zt=null,Tu=!1,Do=!1,Hi=!1,Ru=0,Hl=0,Po=null,i6=0;function Yt(){throw Error(a(321))}function Qf(n,i){if(i===null)return!1;for(var l=0;l<i.length&&l<n.length;l++)if(!Wn(n[l],i[l]))return!1;return!0}function Zf(n,i,l,u,m,p){return Ja=p,et=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,$.H=n===null||n.memoizedState===null?Bi:Ya,Hi=!1,p=l(u,m),Hi=!1,Do&&(p=A0(i,l,u,m)),E0(n),p}function E0(n){$.H=ia;var i=Tt!==null&&Tt.next!==null;if(Ja=0,Zt=Tt=et=null,Tu=!1,Hl=0,Po=null,i)throw Error(a(300));n===null||cn||(n=n.dependencies,n!==null&&ku(n)&&(cn=!0))}function A0(n,i,l,u){et=n;var m=0;do{if(Do&&(Po=null),Hl=0,Do=!1,25<=m)throw Error(a(301));if(m+=1,Zt=Tt=null,n.updateQueue!=null){var p=n.updateQueue;p.lastEffect=null,p.events=null,p.stores=null,p.memoCache!=null&&(p.memoCache.index=0)}$.H=Fi,p=i(l,u)}while(Do);return p}function o6(){var n=$.H,i=n.useState()[0];return i=typeof i.then=="function"?Bl(i):i,n=n.useState()[0],(Tt!==null?Tt.memoizedState:null)!==n&&(et.flags|=1024),i}function ed(){var n=Ru!==0;return Ru=0,n}function td(n,i,l){i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~l}function nd(n){if(Tu){for(n=n.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}Tu=!1}Ja=0,Zt=Tt=et=null,Do=!1,Hl=Ru=0,Po=null}function Bn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Zt===null?et.memoizedState=Zt=n:Zt=Zt.next=n,Zt}function en(){if(Tt===null){var n=et.alternate;n=n!==null?n.memoizedState:null}else n=Tt.next;var i=Zt===null?et.memoizedState:Zt.next;if(i!==null)Zt=i,Tt=n;else{if(n===null)throw et.alternate===null?Error(a(467)):Error(a(310));Tt=n,n={memoizedState:Tt.memoizedState,baseState:Tt.baseState,baseQueue:Tt.baseQueue,queue:Tt.queue,next:null},Zt===null?et.memoizedState=Zt=n:Zt=Zt.next=n}return Zt}var Ou;Ou=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function Bl(n){var i=Hl;return Hl+=1,Po===null&&(Po=[]),n=m0(Po,n,i),i=et,(Zt===null?i.memoizedState:Zt.next)===null&&(i=i.alternate,$.H=i===null||i.memoizedState===null?Bi:Ya),n}function Mu(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return Bl(n);if(n.$$typeof===S)return En(n)}throw Error(a(438,String(n)))}function rd(n){var i=null,l=et.updateQueue;if(l!==null&&(i=l.memoCache),i==null){var u=et.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(i={data:u.data.map(function(m){return m.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),l===null&&(l=Ou(),et.updateQueue=l),l.memoCache=i,l=i.data[i.index],l===void 0)for(l=i.data[i.index]=Array(n),u=0;u<n;u++)l[u]=j;return i.index++,l}function Ea(n,i){return typeof i=="function"?i(n):i}function Nu(n){var i=en();return ad(i,Tt,n)}function ad(n,i,l){var u=n.queue;if(u===null)throw Error(a(311));u.lastRenderedReducer=l;var m=n.baseQueue,p=u.pending;if(p!==null){if(m!==null){var E=m.next;m.next=p.next,p.next=E}i.baseQueue=m=p,u.pending=null}if(p=n.baseState,m===null)n.memoizedState=p;else{i=m.next;var D=E=null,L=null,X=i,ce=!1;do{var he=X.lane&-536870913;if(he!==X.lane?(dt&he)===he:(Ja&he)===he){var ae=X.revertLane;if(ae===0)L!==null&&(L=L.next={lane:0,revertLane:0,action:X.action,hasEagerState:X.hasEagerState,eagerState:X.eagerState,next:null}),he===Mo&&(ce=!0);else if((Ja&ae)===ae){X=X.next,ae===Mo&&(ce=!0);continue}else he={lane:0,revertLane:X.revertLane,action:X.action,hasEagerState:X.hasEagerState,eagerState:X.eagerState,next:null},L===null?(D=L=he,E=p):L=L.next=he,et.lanes|=ae,ai|=ae;he=X.action,Hi&&l(p,he),p=X.hasEagerState?X.eagerState:l(p,he)}else ae={lane:he,revertLane:X.revertLane,action:X.action,hasEagerState:X.hasEagerState,eagerState:X.eagerState,next:null},L===null?(D=L=ae,E=p):L=L.next=ae,et.lanes|=he,ai|=he;X=X.next}while(X!==null&&X!==i);if(L===null?E=p:L.next=D,!Wn(p,n.memoizedState)&&(cn=!0,ce&&(l=No,l!==null)))throw l;n.memoizedState=p,n.baseState=E,n.baseQueue=L,u.lastRenderedState=p}return m===null&&(u.lanes=0),[n.memoizedState,u.dispatch]}function id(n){var i=en(),l=i.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=n;var u=l.dispatch,m=l.pending,p=i.memoizedState;if(m!==null){l.pending=null;var E=m=m.next;do p=n(p,E.action),E=E.next;while(E!==m);Wn(p,i.memoizedState)||(cn=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),l.lastRenderedState=p}return[p,u]}function T0(n,i,l){var u=et,m=en(),p=gt;if(p){if(l===void 0)throw Error(a(407));l=l()}else l=i();var E=!Wn((Tt||m).memoizedState,l);if(E&&(m.memoizedState=l,cn=!0),m=m.queue,sd(M0.bind(null,u,m,n),[n]),m.getSnapshot!==i||E||Zt!==null&&Zt.memoizedState.tag&1){if(u.flags|=2048,zo(9,O0.bind(null,u,m,l,i),{destroy:void 0},null),Pt===null)throw Error(a(349));p||(Ja&60)!==0||R0(u,i,l)}return l}function R0(n,i,l){n.flags|=16384,n={getSnapshot:i,value:l},i=et.updateQueue,i===null?(i=Ou(),et.updateQueue=i,i.stores=[n]):(l=i.stores,l===null?i.stores=[n]:l.push(n))}function O0(n,i,l,u){i.value=l,i.getSnapshot=u,N0(i)&&D0(n)}function M0(n,i,l){return l(function(){N0(i)&&D0(n)})}function N0(n){var i=n.getSnapshot;n=n.value;try{var l=i();return!Wn(n,l)}catch{return!0}}function D0(n){var i=Ga(n,2);i!==null&&Pn(i,n,2)}function od(n){var i=Bn();if(typeof n=="function"){var l=n;if(n=l(),Hi){Fe(!0);try{l()}finally{Fe(!1)}}}return i.memoizedState=i.baseState=n,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:n},i}function P0(n,i,l,u){return n.baseState=l,ad(n,Tt,typeof u=="function"?u:Ea)}function l6(n,i,l,u,m){if(zu(n))throw Error(a(485));if(n=i.action,n!==null){var p={payload:m,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){p.listeners.push(E)}};$.T!==null?l(!0):p.isTransition=!1,u(p),l=i.pending,l===null?(p.next=i.pending=p,z0(i,p)):(p.next=l.next,i.pending=l.next=p)}}function z0(n,i){var l=i.action,u=i.payload,m=n.state;if(i.isTransition){var p=$.T,E={};$.T=E;try{var D=l(m,u),L=$.S;L!==null&&L(E,D),_0(n,i,D)}catch(X){ld(n,i,X)}finally{$.T=p}}else try{p=l(m,u),_0(n,i,p)}catch(X){ld(n,i,X)}}function _0(n,i,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(u){$0(n,i,u)},function(u){return ld(n,i,u)}):$0(n,i,l)}function $0(n,i,l){i.status="fulfilled",i.value=l,k0(i),n.state=l,i=n.pending,i!==null&&(l=i.next,l===i?n.pending=null:(l=l.next,i.next=l,z0(n,l)))}function ld(n,i,l){var u=n.pending;if(n.pending=null,u!==null){u=u.next;do i.status="rejected",i.reason=l,k0(i),i=i.next;while(i!==u)}n.action=null}function k0(n){n=n.listeners;for(var i=0;i<n.length;i++)(0,n[i])()}function L0(n,i){return i}function j0(n,i){if(gt){var l=Pt.formState;if(l!==null){e:{var u=et;if(gt){if(yn){t:{for(var m=yn,p=ra;m.nodeType!==8;){if(!p){m=null;break t}if(m=Fr(m.nextSibling),m===null){m=null;break t}}p=m.data,m=p==="F!"||p==="F"?m:null}if(m){yn=Fr(m.nextSibling),u=m.data==="F!";break e}}ki(u)}u=!1}u&&(i=l[0])}}return l=Bn(),l.memoizedState=l.baseState=i,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:L0,lastRenderedState:i},l.queue=u,l=nv.bind(null,et,u),u.dispatch=l,u=od(!1),p=hd.bind(null,et,!1,u.queue),u=Bn(),m={state:i,dispatch:null,action:n,pending:null},u.queue=m,l=l6.bind(null,et,m,p,l),m.dispatch=l,u.memoizedState=n,[i,l,!1]}function H0(n){var i=en();return B0(i,Tt,n)}function B0(n,i,l){i=ad(n,i,L0)[0],n=Nu(Ea)[0],i=typeof i=="object"&&i!==null&&typeof i.then=="function"?Bl(i):i;var u=en(),m=u.queue,p=m.dispatch;return l!==u.memoizedState&&(et.flags|=2048,zo(9,s6.bind(null,m,l),{destroy:void 0},null)),[i,p,n]}function s6(n,i){n.action=i}function F0(n){var i=en(),l=Tt;if(l!==null)return B0(i,l,n);en(),i=i.memoizedState,l=en();var u=l.queue.dispatch;return l.memoizedState=n,[i,u,!1]}function zo(n,i,l,u){return n={tag:n,create:i,inst:l,deps:u,next:null},i=et.updateQueue,i===null&&(i=Ou(),et.updateQueue=i),l=i.lastEffect,l===null?i.lastEffect=n.next=n:(u=l.next,l.next=n,n.next=u,i.lastEffect=n),n}function I0(){return en().memoizedState}function Du(n,i,l,u){var m=Bn();et.flags|=n,m.memoizedState=zo(1|i,l,{destroy:void 0},u===void 0?null:u)}function Pu(n,i,l,u){var m=en();u=u===void 0?null:u;var p=m.memoizedState.inst;Tt!==null&&u!==null&&Qf(u,Tt.memoizedState.deps)?m.memoizedState=zo(i,l,p,u):(et.flags|=n,m.memoizedState=zo(1|i,l,p,u))}function V0(n,i){Du(8390656,8,n,i)}function sd(n,i){Pu(2048,8,n,i)}function U0(n,i){return Pu(4,2,n,i)}function G0(n,i){return Pu(4,4,n,i)}function q0(n,i){if(typeof i=="function"){n=n();var l=i(n);return function(){typeof l=="function"?l():i(null)}}if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function W0(n,i,l){l=l!=null?l.concat([n]):null,Pu(4,4,q0.bind(null,i,n),l)}function ud(){}function J0(n,i){var l=en();i=i===void 0?null:i;var u=l.memoizedState;return i!==null&&Qf(i,u[1])?u[0]:(l.memoizedState=[n,i],n)}function Y0(n,i){var l=en();i=i===void 0?null:i;var u=l.memoizedState;if(i!==null&&Qf(i,u[1]))return u[0];if(u=n(),Hi){Fe(!0);try{n()}finally{Fe(!1)}}return l.memoizedState=[u,i],u}function cd(n,i,l){return l===void 0||(Ja&1073741824)!==0?n.memoizedState=i:(n.memoizedState=l,n=Kv(),et.lanes|=n,ai|=n,l)}function X0(n,i,l,u){return Wn(l,i)?l:Oo.current!==null?(n=cd(n,l,u),Wn(n,i)||(cn=!0),n):(Ja&42)===0?(cn=!0,n.memoizedState=l):(n=Kv(),et.lanes|=n,ai|=n,i)}function K0(n,i,l,u,m){var p=H.p;H.p=p!==0&&8>p?p:8;var E=$.T,D={};$.T=D,hd(n,!1,i,l);try{var L=m(),X=$.S;if(X!==null&&X(D,L),L!==null&&typeof L=="object"&&typeof L.then=="function"){var ce=a6(L,u);Fl(n,i,ce,Kn(n))}else Fl(n,i,u,Kn(n))}catch(he){Fl(n,i,{then:function(){},status:"rejected",reason:he},Kn())}finally{H.p=p,$.T=E}}function u6(){}function fd(n,i,l,u){if(n.tag!==5)throw Error(a(476));var m=Q0(n).queue;K0(n,m,i,le,l===null?u6:function(){return Z0(n),l(u)})}function Q0(n){var i=n.memoizedState;if(i!==null)return i;i={memoizedState:le,baseState:le,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:le},next:null};var l={};return i.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:l},next:null},n.memoizedState=i,n=n.alternate,n!==null&&(n.memoizedState=i),i}function Z0(n){var i=Q0(n).next.queue;Fl(n,i,{},Kn())}function dd(){return En(ls)}function ev(){return en().memoizedState}function tv(){return en().memoizedState}function c6(n){for(var i=n.return;i!==null;){switch(i.tag){case 24:case 3:var l=Kn();n=Qa(l);var u=Za(i,n,l);u!==null&&(Pn(u,i,l),Ul(u,i,l)),i={cache:Yf()},n.payload=i;return}i=i.return}}function f6(n,i,l){var u=Kn();l={lane:u,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null},zu(n)?rv(i,l):(l=If(n,i,l,u),l!==null&&(Pn(l,n,u),av(l,i,u)))}function nv(n,i,l){var u=Kn();Fl(n,i,l,u)}function Fl(n,i,l,u){var m={lane:u,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null};if(zu(n))rv(i,m);else{var p=n.alternate;if(n.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var E=i.lastRenderedState,D=p(E,l);if(m.hasEagerState=!0,m.eagerState=D,Wn(D,E))return pu(n,i,m,0),Pt===null&&gu(),!1}catch{}finally{}if(l=If(n,i,m,u),l!==null)return Pn(l,n,u),av(l,i,u),!0}return!1}function hd(n,i,l,u){if(u={lane:2,revertLane:nh(),action:u,hasEagerState:!1,eagerState:null,next:null},zu(n)){if(i)throw Error(a(479))}else i=If(n,l,u,2),i!==null&&Pn(i,n,2)}function zu(n){var i=n.alternate;return n===et||i!==null&&i===et}function rv(n,i){Do=Tu=!0;var l=n.pending;l===null?i.next=i:(i.next=l.next,l.next=i),n.pending=i}function av(n,i,l){if((l&4194176)!==0){var u=i.lanes;u&=n.pendingLanes,l|=u,i.lanes=l,mt(n,l)}}var ia={readContext:En,use:Mu,useCallback:Yt,useContext:Yt,useEffect:Yt,useImperativeHandle:Yt,useLayoutEffect:Yt,useInsertionEffect:Yt,useMemo:Yt,useReducer:Yt,useRef:Yt,useState:Yt,useDebugValue:Yt,useDeferredValue:Yt,useTransition:Yt,useSyncExternalStore:Yt,useId:Yt};ia.useCacheRefresh=Yt,ia.useMemoCache=Yt,ia.useHostTransitionStatus=Yt,ia.useFormState=Yt,ia.useActionState=Yt,ia.useOptimistic=Yt;var Bi={readContext:En,use:Mu,useCallback:function(n,i){return Bn().memoizedState=[n,i===void 0?null:i],n},useContext:En,useEffect:V0,useImperativeHandle:function(n,i,l){l=l!=null?l.concat([n]):null,Du(4194308,4,q0.bind(null,i,n),l)},useLayoutEffect:function(n,i){return Du(4194308,4,n,i)},useInsertionEffect:function(n,i){Du(4,2,n,i)},useMemo:function(n,i){var l=Bn();i=i===void 0?null:i;var u=n();if(Hi){Fe(!0);try{n()}finally{Fe(!1)}}return l.memoizedState=[u,i],u},useReducer:function(n,i,l){var u=Bn();if(l!==void 0){var m=l(i);if(Hi){Fe(!0);try{l(i)}finally{Fe(!1)}}}else m=i;return u.memoizedState=u.baseState=m,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:m},u.queue=n,n=n.dispatch=f6.bind(null,et,n),[u.memoizedState,n]},useRef:function(n){var i=Bn();return n={current:n},i.memoizedState=n},useState:function(n){n=od(n);var i=n.queue,l=nv.bind(null,et,i);return i.dispatch=l,[n.memoizedState,l]},useDebugValue:ud,useDeferredValue:function(n,i){var l=Bn();return cd(l,n,i)},useTransition:function(){var n=od(!1);return n=K0.bind(null,et,n.queue,!0,!1),Bn().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,i,l){var u=et,m=Bn();if(gt){if(l===void 0)throw Error(a(407));l=l()}else{if(l=i(),Pt===null)throw Error(a(349));(dt&60)!==0||R0(u,i,l)}m.memoizedState=l;var p={value:l,getSnapshot:i};return m.queue=p,V0(M0.bind(null,u,p,n),[n]),u.flags|=2048,zo(9,O0.bind(null,u,p,l,i),{destroy:void 0},null),l},useId:function(){var n=Bn(),i=Pt.identifierPrefix;if(gt){var l=wa,u=Ca;l=(u&~(1<<32-Ze(u)-1)).toString(32)+l,i=":"+i+"R"+l,l=Ru++,0<l&&(i+="H"+l.toString(32)),i+=":"}else l=i6++,i=":"+i+"r"+l.toString(32)+":";return n.memoizedState=i},useCacheRefresh:function(){return Bn().memoizedState=c6.bind(null,et)}};Bi.useMemoCache=rd,Bi.useHostTransitionStatus=dd,Bi.useFormState=j0,Bi.useActionState=j0,Bi.useOptimistic=function(n){var i=Bn();i.memoizedState=i.baseState=n;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=l,i=hd.bind(null,et,!0,l),l.dispatch=i,[n,i]};var Ya={readContext:En,use:Mu,useCallback:J0,useContext:En,useEffect:sd,useImperativeHandle:W0,useInsertionEffect:U0,useLayoutEffect:G0,useMemo:Y0,useReducer:Nu,useRef:I0,useState:function(){return Nu(Ea)},useDebugValue:ud,useDeferredValue:function(n,i){var l=en();return X0(l,Tt.memoizedState,n,i)},useTransition:function(){var n=Nu(Ea)[0],i=en().memoizedState;return[typeof n=="boolean"?n:Bl(n),i]},useSyncExternalStore:T0,useId:ev};Ya.useCacheRefresh=tv,Ya.useMemoCache=rd,Ya.useHostTransitionStatus=dd,Ya.useFormState=H0,Ya.useActionState=H0,Ya.useOptimistic=function(n,i){var l=en();return P0(l,Tt,n,i)};var Fi={readContext:En,use:Mu,useCallback:J0,useContext:En,useEffect:sd,useImperativeHandle:W0,useInsertionEffect:U0,useLayoutEffect:G0,useMemo:Y0,useReducer:id,useRef:I0,useState:function(){return id(Ea)},useDebugValue:ud,useDeferredValue:function(n,i){var l=en();return Tt===null?cd(l,n,i):X0(l,Tt.memoizedState,n,i)},useTransition:function(){var n=id(Ea)[0],i=en().memoizedState;return[typeof n=="boolean"?n:Bl(n),i]},useSyncExternalStore:T0,useId:ev};Fi.useCacheRefresh=tv,Fi.useMemoCache=rd,Fi.useHostTransitionStatus=dd,Fi.useFormState=F0,Fi.useActionState=F0,Fi.useOptimistic=function(n,i){var l=en();return Tt!==null?P0(l,Tt,n,i):(l.baseState=n,[n,l.queue.dispatch])};function md(n,i,l,u){i=n.memoizedState,l=l(u,i),l=l==null?i:B({},i,l),n.memoizedState=l,n.lanes===0&&(n.updateQueue.baseState=l)}var gd={isMounted:function(n){return(n=n._reactInternals)?I(n)===n:!1},enqueueSetState:function(n,i,l){n=n._reactInternals;var u=Kn(),m=Qa(u);m.payload=i,l!=null&&(m.callback=l),i=Za(n,m,u),i!==null&&(Pn(i,n,u),Ul(i,n,u))},enqueueReplaceState:function(n,i,l){n=n._reactInternals;var u=Kn(),m=Qa(u);m.tag=1,m.payload=i,l!=null&&(m.callback=l),i=Za(n,m,u),i!==null&&(Pn(i,n,u),Ul(i,n,u))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var l=Kn(),u=Qa(l);u.tag=2,i!=null&&(u.callback=i),i=Za(n,u,l),i!==null&&(Pn(i,n,l),Ul(i,n,l))}};function iv(n,i,l,u,m,p,E){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,p,E):i.prototype&&i.prototype.isPureReactComponent?!Ol(l,u)||!Ol(m,p):!0}function ov(n,i,l,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(l,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(l,u),i.state!==n&&gd.enqueueReplaceState(i,i.state,null)}function Ii(n,i){var l=i;if("ref"in i){l={};for(var u in i)u!=="ref"&&(l[u]=i[u])}if(n=n.defaultProps){l===i&&(l=B({},l));for(var m in n)l[m]===void 0&&(l[m]=n[m])}return l}var _u=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function lv(n){_u(n)}function sv(n){console.error(n)}function uv(n){_u(n)}function $u(n,i){try{var l=n.onUncaughtError;l(i.value,{componentStack:i.stack})}catch(u){setTimeout(function(){throw u})}}function cv(n,i,l){try{var u=n.onCaughtError;u(l.value,{componentStack:l.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(m){setTimeout(function(){throw m})}}function pd(n,i,l){return l=Qa(l),l.tag=3,l.payload={element:null},l.callback=function(){$u(n,i)},l}function fv(n){return n=Qa(n),n.tag=3,n}function dv(n,i,l,u){var m=l.type.getDerivedStateFromError;if(typeof m=="function"){var p=u.value;n.payload=function(){return m(p)},n.callback=function(){cv(i,l,u)}}var E=l.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(n.callback=function(){cv(i,l,u),typeof m!="function"&&(ii===null?ii=new Set([this]):ii.add(this));var D=u.stack;this.componentDidCatch(u.value,{componentStack:D!==null?D:""})})}function d6(n,i,l,u,m){if(l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(i=l.alternate,i!==null&&Vl(i,l,m,!0),l=br.current,l!==null){switch(l.tag){case 13:return aa===null?Kd():l.alternate===null&&Gt===0&&(Gt=3),l.flags&=-257,l.flags|=65536,l.lanes=m,u===qf?l.flags|=16384:(i=l.updateQueue,i===null?l.updateQueue=new Set([u]):i.add(u),Zd(n,u,m)),!1;case 22:return l.flags|=65536,u===qf?l.flags|=16384:(i=l.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([u])},l.updateQueue=i):(l=i.retryQueue,l===null?i.retryQueue=new Set([u]):l.add(u)),Zd(n,u,m)),!1}throw Error(a(435,l.tag))}return Zd(n,u,m),Kd(),!1}if(gt)return i=br.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=m,u!==Gf&&(n=Error(a(422),{cause:u}),Pl(pr(n,l)))):(u!==Gf&&(i=Error(a(423),{cause:u}),Pl(pr(i,l))),n=n.current.alternate,n.flags|=65536,m&=-m,n.lanes|=m,u=pr(u,l),m=pd(n.stateNode,u,m),Dd(n,m),Gt!==4&&(Gt=2)),!1;var p=Error(a(520),{cause:u});if(p=pr(p,l),Ql===null?Ql=[p]:Ql.push(p),Gt!==4&&(Gt=2),i===null)return!0;u=pr(u,l),l=i;do{switch(l.tag){case 3:return l.flags|=65536,n=m&-m,l.lanes|=n,n=pd(l.stateNode,u,n),Dd(l,n),!1;case 1:if(i=l.type,p=l.stateNode,(l.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(ii===null||!ii.has(p))))return l.flags|=65536,m&=-m,l.lanes|=m,m=fv(m),dv(m,n,l,u),Dd(l,m),!1}l=l.return}while(l!==null);return!1}var hv=Error(a(461)),cn=!1;function bn(n,i,l,u){i.child=n===null?y0(i,null,l,u):Li(i,n.child,l,u)}function mv(n,i,l,u,m){l=l.render;var p=i.ref;if("ref"in u){var E={};for(var D in u)D!=="ref"&&(E[D]=u[D])}else E=u;return Ui(i),u=Zf(n,i,l,E,p,m),D=ed(),n!==null&&!cn?(td(n,i,m),Aa(n,i,m)):(gt&&D&&Vf(i),i.flags|=1,bn(n,i,u,m),i.child)}function gv(n,i,l,u,m){if(n===null){var p=l.type;return typeof p=="function"&&!Hd(p)&&p.defaultProps===void 0&&l.compare===null?(i.tag=15,i.type=p,pv(n,i,p,u,m)):(n=Bu(l.type,null,u,i,i.mode,m),n.ref=i.ref,n.return=i,i.child=n)}if(p=n.child,!Ad(n,m)){var E=p.memoizedProps;if(l=l.compare,l=l!==null?l:Ol,l(E,u)&&n.ref===i.ref)return Aa(n,i,m)}return i.flags|=1,n=ri(p,u),n.ref=i.ref,n.return=i,i.child=n}function pv(n,i,l,u,m){if(n!==null){var p=n.memoizedProps;if(Ol(p,u)&&n.ref===i.ref)if(cn=!1,i.pendingProps=u=p,Ad(n,m))(n.flags&131072)!==0&&(cn=!0);else return i.lanes=n.lanes,Aa(n,i,m)}return vd(n,i,l,u,m)}function vv(n,i,l){var u=i.pendingProps,m=u.children,p=(i.stateNode._pendingVisibility&2)!==0,E=n!==null?n.memoizedState:null;if(Il(n,i),u.mode==="hidden"||p){if((i.flags&128)!==0){if(u=E!==null?E.baseLanes|l:l,n!==null){for(m=i.child=n.child,p=0;m!==null;)p=p|m.lanes|m.childLanes,m=m.sibling;i.childLanes=p&~u}else i.childLanes=0,i.child=null;return yv(n,i,u,l)}if((l&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},n!==null&&Au(i,E!==null?E.cachePool:null),E!==null?b0(i,E):Wf(),S0(i);else return i.lanes=i.childLanes=536870912,yv(n,i,E!==null?E.baseLanes|l:l,l)}else E!==null?(Au(i,E.cachePool),b0(i,E),Wa(),i.memoizedState=null):(n!==null&&Au(i,null),Wf(),Wa());return bn(n,i,m,l),i.child}function yv(n,i,l,u){var m=Kf();return m=m===null?null:{parent:ln._currentValue,pool:m},i.memoizedState={baseLanes:l,cachePool:m},n!==null&&Au(i,null),Wf(),S0(i),n!==null&&Vl(n,i,u,!0),null}function Il(n,i){var l=i.ref;if(l===null)n!==null&&n.ref!==null&&(i.flags|=2097664);else{if(typeof l!="function"&&typeof l!="object")throw Error(a(284));(n===null||n.ref!==l)&&(i.flags|=2097664)}}function vd(n,i,l,u,m){return Ui(i),l=Zf(n,i,l,u,void 0,m),u=ed(),n!==null&&!cn?(td(n,i,m),Aa(n,i,m)):(gt&&u&&Vf(i),i.flags|=1,bn(n,i,l,m),i.child)}function bv(n,i,l,u,m,p){return Ui(i),i.updateQueue=null,l=A0(i,u,l,m),E0(n),u=ed(),n!==null&&!cn?(td(n,i,p),Aa(n,i,p)):(gt&&u&&Vf(i),i.flags|=1,bn(n,i,l,p),i.child)}function Sv(n,i,l,u,m){if(Ui(i),i.stateNode===null){var p=Eo,E=l.contextType;typeof E=="object"&&E!==null&&(p=En(E)),p=new l(u,p),i.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,p.updater=gd,i.stateNode=p,p._reactInternals=i,p=i.stateNode,p.props=u,p.state=i.memoizedState,p.refs={},Md(i),E=l.contextType,p.context=typeof E=="object"&&E!==null?En(E):Eo,p.state=i.memoizedState,E=l.getDerivedStateFromProps,typeof E=="function"&&(md(i,l,E,u),p.state=i.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(E=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),E!==p.state&&gd.enqueueReplaceState(p,p.state,null),ql(i,u,p,m),Gl(),p.state=i.memoizedState),typeof p.componentDidMount=="function"&&(i.flags|=4194308),u=!0}else if(n===null){p=i.stateNode;var D=i.memoizedProps,L=Ii(l,D);p.props=L;var X=p.context,ce=l.contextType;E=Eo,typeof ce=="object"&&ce!==null&&(E=En(ce));var he=l.getDerivedStateFromProps;ce=typeof he=="function"||typeof p.getSnapshotBeforeUpdate=="function",D=i.pendingProps!==D,ce||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(D||X!==E)&&ov(i,p,u,E),Ka=!1;var ae=i.memoizedState;p.state=ae,ql(i,u,p,m),Gl(),X=i.memoizedState,D||ae!==X||Ka?(typeof he=="function"&&(md(i,l,he,u),X=i.memoizedState),(L=Ka||iv(i,l,L,u,ae,X,E))?(ce||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(i.flags|=4194308)):(typeof p.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=X),p.props=u,p.state=X,p.context=E,u=L):(typeof p.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{p=i.stateNode,Nd(n,i),E=i.memoizedProps,ce=Ii(l,E),p.props=ce,he=i.pendingProps,ae=p.context,X=l.contextType,L=Eo,typeof X=="object"&&X!==null&&(L=En(X)),D=l.getDerivedStateFromProps,(X=typeof D=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(E!==he||ae!==L)&&ov(i,p,u,L),Ka=!1,ae=i.memoizedState,p.state=ae,ql(i,u,p,m),Gl();var se=i.memoizedState;E!==he||ae!==se||Ka||n!==null&&n.dependencies!==null&&ku(n.dependencies)?(typeof D=="function"&&(md(i,l,D,u),se=i.memoizedState),(ce=Ka||iv(i,l,ce,u,ae,se,L)||n!==null&&n.dependencies!==null&&ku(n.dependencies))?(X||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(u,se,L),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(u,se,L)),typeof p.componentDidUpdate=="function"&&(i.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof p.componentDidUpdate!="function"||E===n.memoizedProps&&ae===n.memoizedState||(i.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||E===n.memoizedProps&&ae===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=se),p.props=u,p.state=se,p.context=L,u=ce):(typeof p.componentDidUpdate!="function"||E===n.memoizedProps&&ae===n.memoizedState||(i.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||E===n.memoizedProps&&ae===n.memoizedState||(i.flags|=1024),u=!1)}return p=u,Il(n,i),u=(i.flags&128)!==0,p||u?(p=i.stateNode,l=u&&typeof l.getDerivedStateFromError!="function"?null:p.render(),i.flags|=1,n!==null&&u?(i.child=Li(i,n.child,null,m),i.child=Li(i,null,l,m)):bn(n,i,l,m),i.memoizedState=p.state,n=i.child):n=Aa(n,i,m),n}function Cv(n,i,l,u){return Dl(),i.flags|=256,bn(n,i,l,u),i.child}var yd={dehydrated:null,treeContext:null,retryLane:0};function bd(n){return{baseLanes:n,cachePool:x0()}}function Sd(n,i,l){return n=n!==null?n.childLanes&~l:0,i&&(n|=xr),n}function wv(n,i,l){var u=i.pendingProps,m=!1,p=(i.flags&128)!==0,E;if((E=p)||(E=n!==null&&n.memoizedState===null?!1:(on.current&2)!==0),E&&(m=!0,i.flags&=-129),E=(i.flags&32)!==0,i.flags&=-33,n===null){if(gt){if(m?qa(i):Wa(),gt){var D=yn,L;if(L=D){e:{for(L=D,D=ra;L.nodeType!==8;){if(!D){D=null;break e}if(L=Fr(L.nextSibling),L===null){D=null;break e}}D=L}D!==null?(i.memoizedState={dehydrated:D,treeContext:_i!==null?{id:Ca,overflow:wa}:null,retryLane:536870912},L=wr(18,null,null,0),L.stateNode=D,L.return=i,i.child=L,Dn=i,yn=null,L=!0):L=!1}L||ki(i)}if(D=i.memoizedState,D!==null&&(D=D.dehydrated,D!==null))return D.data==="$!"?i.lanes=16:i.lanes=536870912,null;xa(i)}return D=u.children,u=u.fallback,m?(Wa(),m=i.mode,D=wd({mode:"hidden",children:D},m),u=qi(u,m,l,null),D.return=i,u.return=i,D.sibling=u,i.child=D,m=i.child,m.memoizedState=bd(l),m.childLanes=Sd(n,E,l),i.memoizedState=yd,u):(qa(i),Cd(i,D))}if(L=n.memoizedState,L!==null&&(D=L.dehydrated,D!==null)){if(p)i.flags&256?(qa(i),i.flags&=-257,i=xd(n,i,l)):i.memoizedState!==null?(Wa(),i.child=n.child,i.flags|=128,i=null):(Wa(),m=u.fallback,D=i.mode,u=wd({mode:"visible",children:u.children},D),m=qi(m,D,l,null),m.flags|=2,u.return=i,m.return=i,u.sibling=m,i.child=u,Li(i,n.child,null,l),u=i.child,u.memoizedState=bd(l),u.childLanes=Sd(n,E,l),i.memoizedState=yd,i=m);else if(qa(i),D.data==="$!"){if(E=D.nextSibling&&D.nextSibling.dataset,E)var X=E.dgst;E=X,u=Error(a(419)),u.stack="",u.digest=E,Pl({value:u,source:null,stack:null}),i=xd(n,i,l)}else if(cn||Vl(n,i,l,!1),E=(l&n.childLanes)!==0,cn||E){if(E=Pt,E!==null){if(u=l&-l,(u&42)!==0)u=1;else switch(u){case 2:u=1;break;case 8:u=4;break;case 32:u=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:u=64;break;case 268435456:u=134217728;break;default:u=0}if(u=(u&(E.suspendedLanes|l))!==0?0:u,u!==0&&u!==L.retryLane)throw L.retryLane=u,Ga(n,u),Pn(E,n,u),hv}D.data==="$?"||Kd(),i=xd(n,i,l)}else D.data==="$?"?(i.flags|=128,i.child=n.child,i=R6.bind(null,n),D._reactRetry=i,i=null):(n=L.treeContext,yn=Fr(D.nextSibling),Dn=i,gt=!0,Hr=null,ra=!1,n!==null&&(vr[yr++]=Ca,vr[yr++]=wa,vr[yr++]=_i,Ca=n.id,wa=n.overflow,_i=i),i=Cd(i,u.children),i.flags|=4096);return i}return m?(Wa(),m=u.fallback,D=i.mode,L=n.child,X=L.sibling,u=ri(L,{mode:"hidden",children:u.children}),u.subtreeFlags=L.subtreeFlags&31457280,X!==null?m=ri(X,m):(m=qi(m,D,l,null),m.flags|=2),m.return=i,u.return=i,u.sibling=m,i.child=u,u=m,m=i.child,D=n.child.memoizedState,D===null?D=bd(l):(L=D.cachePool,L!==null?(X=ln._currentValue,L=L.parent!==X?{parent:X,pool:X}:L):L=x0(),D={baseLanes:D.baseLanes|l,cachePool:L}),m.memoizedState=D,m.childLanes=Sd(n,E,l),i.memoizedState=yd,u):(qa(i),l=n.child,n=l.sibling,l=ri(l,{mode:"visible",children:u.children}),l.return=i,l.sibling=null,n!==null&&(E=i.deletions,E===null?(i.deletions=[n],i.flags|=16):E.push(n)),i.child=l,i.memoizedState=null,l)}function Cd(n,i){return i=wd({mode:"visible",children:i},n.mode),i.return=n,n.child=i}function wd(n,i){return Jv(n,i,0,null)}function xd(n,i,l){return Li(i,n.child,null,l),n=Cd(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function xv(n,i,l){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),Rd(n.return,i,l)}function Ed(n,i,l,u,m){var p=n.memoizedState;p===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:l,tailMode:m}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=u,p.tail=l,p.tailMode=m)}function Ev(n,i,l){var u=i.pendingProps,m=u.revealOrder,p=u.tail;if(bn(n,i,u.children,l),u=on.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&xv(n,l,i);else if(n.tag===19)xv(n,l,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}switch(ge(on,u),m){case"forwards":for(l=i.child,m=null;l!==null;)n=l.alternate,n!==null&&Eu(n)===null&&(m=l),l=l.sibling;l=m,l===null?(m=i.child,i.child=null):(m=l.sibling,l.sibling=null),Ed(i,!1,m,l,p);break;case"backwards":for(l=null,m=i.child,i.child=null;m!==null;){if(n=m.alternate,n!==null&&Eu(n)===null){i.child=m;break}n=m.sibling,m.sibling=l,l=m,m=n}Ed(i,!0,l,null,p);break;case"together":Ed(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Aa(n,i,l){if(n!==null&&(i.dependencies=n.dependencies),ai|=i.lanes,(l&i.childLanes)===0)if(n!==null){if(Vl(n,i,l,!1),(l&i.childLanes)===0)return null}else return null;if(n!==null&&i.child!==n.child)throw Error(a(153));if(i.child!==null){for(n=i.child,l=ri(n,n.pendingProps),i.child=l,l.return=i;n.sibling!==null;)n=n.sibling,l=l.sibling=ri(n,n.pendingProps),l.return=i;l.sibling=null}return i.child}function Ad(n,i){return(n.lanes&i)!==0?!0:(n=n.dependencies,!!(n!==null&&ku(n)))}function h6(n,i,l){switch(i.tag){case 3:Ge(i,i.stateNode.containerInfo),Xa(i,ln,n.memoizedState.cache),Dl();break;case 27:case 5:rt(i);break;case 4:Ge(i,i.stateNode.containerInfo);break;case 10:Xa(i,i.type,i.memoizedProps.value);break;case 13:var u=i.memoizedState;if(u!==null)return u.dehydrated!==null?(qa(i),i.flags|=128,null):(l&i.child.childLanes)!==0?wv(n,i,l):(qa(i),n=Aa(n,i,l),n!==null?n.sibling:null);qa(i);break;case 19:var m=(n.flags&128)!==0;if(u=(l&i.childLanes)!==0,u||(Vl(n,i,l,!1),u=(l&i.childLanes)!==0),m){if(u)return Ev(n,i,l);i.flags|=128}if(m=i.memoizedState,m!==null&&(m.rendering=null,m.tail=null,m.lastEffect=null),ge(on,on.current),u)break;return null;case 22:case 23:return i.lanes=0,vv(n,i,l);case 24:Xa(i,ln,n.memoizedState.cache)}return Aa(n,i,l)}function Av(n,i,l){if(n!==null)if(n.memoizedProps!==i.pendingProps)cn=!0;else{if(!Ad(n,l)&&(i.flags&128)===0)return cn=!1,h6(n,i,l);cn=(n.flags&131072)!==0}else cn=!1,gt&&(i.flags&1048576)!==0&&u0(i,bu,i.index);switch(i.lanes=0,i.tag){case 16:e:{n=i.pendingProps;var u=i.elementType,m=u._init;if(u=m(u._payload),i.type=u,typeof u=="function")Hd(u)?(n=Ii(u,n),i.tag=1,i=Sv(null,i,u,n,l)):(i.tag=0,i=vd(null,i,u,n,l));else{if(u!=null){if(m=u.$$typeof,m===w){i.tag=11,i=mv(null,i,u,n,l);break e}else if(m===T){i.tag=14,i=gv(null,i,u,n,l);break e}}throw i=J(u)||u,Error(a(306,i,""))}}return i;case 0:return vd(n,i,i.type,i.pendingProps,l);case 1:return u=i.type,m=Ii(u,i.pendingProps),Sv(n,i,u,m,l);case 3:e:{if(Ge(i,i.stateNode.containerInfo),n===null)throw Error(a(387));var p=i.pendingProps;m=i.memoizedState,u=m.element,Nd(n,i),ql(i,p,null,l);var E=i.memoizedState;if(p=E.cache,Xa(i,ln,p),p!==m.cache&&Od(i,[ln],l,!0),Gl(),p=E.element,m.isDehydrated)if(m={element:p,isDehydrated:!1,cache:E.cache},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){i=Cv(n,i,p,l);break e}else if(p!==u){u=pr(Error(a(424)),i),Pl(u),i=Cv(n,i,p,l);break e}else for(yn=Fr(i.stateNode.containerInfo.firstChild),Dn=i,gt=!0,Hr=null,ra=!0,l=y0(i,null,p,l),i.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Dl(),p===u){i=Aa(n,i,l);break e}bn(n,i,p,l)}i=i.child}return i;case 26:return Il(n,i),n===null?(l=Oy(i.type,null,i.pendingProps,null))?i.memoizedState=l:gt||(l=i.type,n=i.pendingProps,u=Qu(He.current).createElement(l),u[yt]=i,u[bt]=n,Sn(u,l,n),Nt(u),i.stateNode=u):i.memoizedState=Oy(i.type,n.memoizedProps,i.pendingProps,n.memoizedState),null;case 27:return rt(i),n===null&&gt&&(u=i.stateNode=Ay(i.type,i.pendingProps,He.current),Dn=i,ra=!0,yn=Fr(u.firstChild)),u=i.pendingProps.children,n!==null||gt?bn(n,i,u,l):i.child=Li(i,null,u,l),Il(n,i),i.child;case 5:return n===null&&gt&&((m=u=yn)&&(u=V6(u,i.type,i.pendingProps,ra),u!==null?(i.stateNode=u,Dn=i,yn=Fr(u.firstChild),ra=!1,m=!0):m=!1),m||ki(i)),rt(i),m=i.type,p=i.pendingProps,E=n!==null?n.memoizedProps:null,u=p.children,fh(m,p)?u=null:E!==null&&fh(m,E)&&(i.flags|=32),i.memoizedState!==null&&(m=Zf(n,i,o6,null,null,l),ls._currentValue=m),Il(n,i),bn(n,i,u,l),i.child;case 6:return n===null&&gt&&((n=l=yn)&&(l=U6(l,i.pendingProps,ra),l!==null?(i.stateNode=l,Dn=i,yn=null,n=!0):n=!1),n||ki(i)),null;case 13:return wv(n,i,l);case 4:return Ge(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=Li(i,null,u,l):bn(n,i,u,l),i.child;case 11:return mv(n,i,i.type,i.pendingProps,l);case 7:return bn(n,i,i.pendingProps,l),i.child;case 8:return bn(n,i,i.pendingProps.children,l),i.child;case 12:return bn(n,i,i.pendingProps.children,l),i.child;case 10:return u=i.pendingProps,Xa(i,i.type,u.value),bn(n,i,u.children,l),i.child;case 9:return m=i.type._context,u=i.pendingProps.children,Ui(i),m=En(m),u=u(m),i.flags|=1,bn(n,i,u,l),i.child;case 14:return gv(n,i,i.type,i.pendingProps,l);case 15:return pv(n,i,i.type,i.pendingProps,l);case 19:return Ev(n,i,l);case 22:return vv(n,i,l);case 24:return Ui(i),u=En(ln),n===null?(m=Kf(),m===null&&(m=Pt,p=Yf(),m.pooledCache=p,p.refCount++,p!==null&&(m.pooledCacheLanes|=l),m=p),i.memoizedState={parent:u,cache:m},Md(i),Xa(i,ln,m)):((n.lanes&l)!==0&&(Nd(n,i),ql(i,null,null,l),Gl()),m=n.memoizedState,p=i.memoizedState,m.parent!==u?(m={parent:u,cache:u},i.memoizedState=m,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=m),Xa(i,ln,u)):(u=p.cache,Xa(i,ln,u),u!==m.cache&&Od(i,[ln],l,!0))),bn(n,i,i.pendingProps.children,l),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}var Td=ue(null),Vi=null,Ta=null;function Xa(n,i,l){ge(Td,i._currentValue),i._currentValue=l}function Ra(n){n._currentValue=Td.current,me(Td)}function Rd(n,i,l){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===l)break;n=n.return}}function Od(n,i,l,u){var m=n.child;for(m!==null&&(m.return=n);m!==null;){var p=m.dependencies;if(p!==null){var E=m.child;p=p.firstContext;e:for(;p!==null;){var D=p;p=m;for(var L=0;L<i.length;L++)if(D.context===i[L]){p.lanes|=l,D=p.alternate,D!==null&&(D.lanes|=l),Rd(p.return,l,n),u||(E=null);break e}p=D.next}}else if(m.tag===18){if(E=m.return,E===null)throw Error(a(341));E.lanes|=l,p=E.alternate,p!==null&&(p.lanes|=l),Rd(E,l,n),E=null}else E=m.child;if(E!==null)E.return=m;else for(E=m;E!==null;){if(E===n){E=null;break}if(m=E.sibling,m!==null){m.return=E.return,E=m;break}E=E.return}m=E}}function Vl(n,i,l,u){n=null;for(var m=i,p=!1;m!==null;){if(!p){if((m.flags&524288)!==0)p=!0;else if((m.flags&262144)!==0)break}if(m.tag===10){var E=m.alternate;if(E===null)throw Error(a(387));if(E=E.memoizedProps,E!==null){var D=m.type;Wn(m.pendingProps.value,E.value)||(n!==null?n.push(D):n=[D])}}else if(m===Xe.current){if(E=m.alternate,E===null)throw Error(a(387));E.memoizedState.memoizedState!==m.memoizedState.memoizedState&&(n!==null?n.push(ls):n=[ls])}m=m.return}n!==null&&Od(i,n,l,u),i.flags|=262144}function ku(n){for(n=n.firstContext;n!==null;){if(!Wn(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function Ui(n){Vi=n,Ta=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function En(n){return Tv(Vi,n)}function Lu(n,i){return Vi===null&&Ui(n),Tv(n,i)}function Tv(n,i){var l=i._currentValue;if(i={context:i,memoizedValue:l,next:null},Ta===null){if(n===null)throw Error(a(308));Ta=i,n.dependencies={lanes:0,firstContext:i},n.flags|=524288}else Ta=Ta.next=i;return l}var Ka=!1;function Md(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Nd(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function Qa(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function Za(n,i,l){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(Bt&2)!==0){var m=u.pending;return m===null?i.next=i:(i.next=m.next,m.next=i),u.pending=i,i=vu(n),l0(n,null,l),i}return pu(n,u,i,l),vu(n)}function Ul(n,i,l){if(i=i.updateQueue,i!==null&&(i=i.shared,(l&4194176)!==0)){var u=i.lanes;u&=n.pendingLanes,l|=u,i.lanes=l,mt(n,l)}}function Dd(n,i){var l=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,l===u)){var m=null,p=null;if(l=l.firstBaseUpdate,l!==null){do{var E={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};p===null?m=p=E:p=p.next=E,l=l.next}while(l!==null);p===null?m=p=i:p=p.next=i}else m=p=i;l={baseState:u.baseState,firstBaseUpdate:m,lastBaseUpdate:p,shared:u.shared,callbacks:u.callbacks},n.updateQueue=l;return}n=l.lastBaseUpdate,n===null?l.firstBaseUpdate=i:n.next=i,l.lastBaseUpdate=i}var Pd=!1;function Gl(){if(Pd){var n=No;if(n!==null)throw n}}function ql(n,i,l,u){Pd=!1;var m=n.updateQueue;Ka=!1;var p=m.firstBaseUpdate,E=m.lastBaseUpdate,D=m.shared.pending;if(D!==null){m.shared.pending=null;var L=D,X=L.next;L.next=null,E===null?p=X:E.next=X,E=L;var ce=n.alternate;ce!==null&&(ce=ce.updateQueue,D=ce.lastBaseUpdate,D!==E&&(D===null?ce.firstBaseUpdate=X:D.next=X,ce.lastBaseUpdate=L))}if(p!==null){var he=m.baseState;E=0,ce=X=L=null,D=p;do{var ae=D.lane&-536870913,se=ae!==D.lane;if(se?(dt&ae)===ae:(u&ae)===ae){ae!==0&&ae===Mo&&(Pd=!0),ce!==null&&(ce=ce.next={lane:0,tag:D.tag,payload:D.payload,callback:null,next:null});e:{var Oe=n,Ue=D;ae=i;var qt=l;switch(Ue.tag){case 1:if(Oe=Ue.payload,typeof Oe=="function"){he=Oe.call(qt,he,ae);break e}he=Oe;break e;case 3:Oe.flags=Oe.flags&-65537|128;case 0:if(Oe=Ue.payload,ae=typeof Oe=="function"?Oe.call(qt,he,ae):Oe,ae==null)break e;he=B({},he,ae);break e;case 2:Ka=!0}}ae=D.callback,ae!==null&&(n.flags|=64,se&&(n.flags|=8192),se=m.callbacks,se===null?m.callbacks=[ae]:se.push(ae))}else se={lane:ae,tag:D.tag,payload:D.payload,callback:D.callback,next:null},ce===null?(X=ce=se,L=he):ce=ce.next=se,E|=ae;if(D=D.next,D===null){if(D=m.shared.pending,D===null)break;se=D,D=se.next,se.next=null,m.lastBaseUpdate=se,m.shared.pending=null}}while(!0);ce===null&&(L=he),m.baseState=L,m.firstBaseUpdate=X,m.lastBaseUpdate=ce,p===null&&(m.shared.lanes=0),ai|=E,n.lanes=E,n.memoizedState=he}}function Rv(n,i){if(typeof n!="function")throw Error(a(191,n));n.call(i)}function Ov(n,i){var l=n.callbacks;if(l!==null)for(n.callbacks=null,n=0;n<l.length;n++)Rv(l[n],i)}function Wl(n,i){try{var l=i.updateQueue,u=l!==null?l.lastEffect:null;if(u!==null){var m=u.next;l=m;do{if((l.tag&n)===n){u=void 0;var p=l.create,E=l.inst;u=p(),E.destroy=u}l=l.next}while(l!==m)}}catch(D){Mt(i,i.return,D)}}function ei(n,i,l){try{var u=i.updateQueue,m=u!==null?u.lastEffect:null;if(m!==null){var p=m.next;u=p;do{if((u.tag&n)===n){var E=u.inst,D=E.destroy;if(D!==void 0){E.destroy=void 0,m=i;var L=l;try{D()}catch(X){Mt(m,L,X)}}}u=u.next}while(u!==p)}}catch(X){Mt(i,i.return,X)}}function Mv(n){var i=n.updateQueue;if(i!==null){var l=n.stateNode;try{Ov(i,l)}catch(u){Mt(n,n.return,u)}}}function Nv(n,i,l){l.props=Ii(n.type,n.memoizedProps),l.state=n.memoizedState;try{l.componentWillUnmount()}catch(u){Mt(n,i,u)}}function Gi(n,i){try{var l=n.ref;if(l!==null){var u=n.stateNode;switch(n.tag){case 26:case 27:case 5:var m=u;break;default:m=u}typeof l=="function"?n.refCleanup=l(m):l.current=m}}catch(p){Mt(n,i,p)}}function Jn(n,i){var l=n.ref,u=n.refCleanup;if(l!==null)if(typeof u=="function")try{u()}catch(m){Mt(n,i,m)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(m){Mt(n,i,m)}else l.current=null}function Dv(n){var i=n.type,l=n.memoizedProps,u=n.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":l.autoFocus&&u.focus();break e;case"img":l.src?u.src=l.src:l.srcSet&&(u.srcset=l.srcSet)}}catch(m){Mt(n,n.return,m)}}function Pv(n,i,l){try{var u=n.stateNode;j6(u,n.type,l,i),u[bt]=i}catch(m){Mt(n,n.return,m)}}function zv(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27||n.tag===4}function zd(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||zv(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==27&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function _d(n,i,l){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?l.nodeType===8?l.parentNode.insertBefore(n,i):l.insertBefore(n,i):(l.nodeType===8?(i=l.parentNode,i.insertBefore(n,l)):(i=l,i.appendChild(n)),l=l._reactRootContainer,l!=null||i.onclick!==null||(i.onclick=Ku));else if(u!==4&&u!==27&&(n=n.child,n!==null))for(_d(n,i,l),n=n.sibling;n!==null;)_d(n,i,l),n=n.sibling}function ju(n,i,l){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?l.insertBefore(n,i):l.appendChild(n);else if(u!==4&&u!==27&&(n=n.child,n!==null))for(ju(n,i,l),n=n.sibling;n!==null;)ju(n,i,l),n=n.sibling}var Oa=!1,Ut=!1,$d=!1,_v=typeof WeakSet=="function"?WeakSet:Set,fn=null,$v=!1;function m6(n,i){if(n=n.containerInfo,uh=ac,n=Qp(n),Lf(n)){if("selectionStart"in n)var l={start:n.selectionStart,end:n.selectionEnd};else e:{l=(l=n.ownerDocument)&&l.defaultView||window;var u=l.getSelection&&l.getSelection();if(u&&u.rangeCount!==0){l=u.anchorNode;var m=u.anchorOffset,p=u.focusNode;u=u.focusOffset;try{l.nodeType,p.nodeType}catch{l=null;break e}var E=0,D=-1,L=-1,X=0,ce=0,he=n,ae=null;t:for(;;){for(var se;he!==l||m!==0&&he.nodeType!==3||(D=E+m),he!==p||u!==0&&he.nodeType!==3||(L=E+u),he.nodeType===3&&(E+=he.nodeValue.length),(se=he.firstChild)!==null;)ae=he,he=se;for(;;){if(he===n)break t;if(ae===l&&++X===m&&(D=E),ae===p&&++ce===u&&(L=E),(se=he.nextSibling)!==null)break;he=ae,ae=he.parentNode}he=se}l=D===-1||L===-1?null:{start:D,end:L}}else l=null}l=l||{start:0,end:0}}else l=null;for(ch={focusedElem:n,selectionRange:l},ac=!1,fn=i;fn!==null;)if(i=fn,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,fn=n;else for(;fn!==null;){switch(i=fn,p=i.alternate,n=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((n&1024)!==0&&p!==null){n=void 0,l=i,m=p.memoizedProps,p=p.memoizedState,u=l.stateNode;try{var Oe=Ii(l.type,m,l.elementType===l.type);n=u.getSnapshotBeforeUpdate(Oe,p),u.__reactInternalSnapshotBeforeUpdate=n}catch(Ue){Mt(l,l.return,Ue)}}break;case 3:if((n&1024)!==0){if(n=i.stateNode.containerInfo,l=n.nodeType,l===9)mh(n);else if(l===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":mh(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(a(163))}if(n=i.sibling,n!==null){n.return=i.return,fn=n;break}fn=i.return}return Oe=$v,$v=!1,Oe}function kv(n,i,l){var u=l.flags;switch(l.tag){case 0:case 11:case 15:Na(n,l),u&4&&Wl(5,l);break;case 1:if(Na(n,l),u&4)if(n=l.stateNode,i===null)try{n.componentDidMount()}catch(D){Mt(l,l.return,D)}else{var m=Ii(l.type,i.memoizedProps);i=i.memoizedState;try{n.componentDidUpdate(m,i,n.__reactInternalSnapshotBeforeUpdate)}catch(D){Mt(l,l.return,D)}}u&64&&Mv(l),u&512&&Gi(l,l.return);break;case 3:if(Na(n,l),u&64&&(u=l.updateQueue,u!==null)){if(n=null,l.child!==null)switch(l.child.tag){case 27:case 5:n=l.child.stateNode;break;case 1:n=l.child.stateNode}try{Ov(u,n)}catch(D){Mt(l,l.return,D)}}break;case 26:Na(n,l),u&512&&Gi(l,l.return);break;case 27:case 5:Na(n,l),i===null&&u&4&&Dv(l),u&512&&Gi(l,l.return);break;case 12:Na(n,l);break;case 13:Na(n,l),u&4&&Hv(n,l);break;case 22:if(m=l.memoizedState!==null||Oa,!m){i=i!==null&&i.memoizedState!==null||Ut;var p=Oa,E=Ut;Oa=m,(Ut=i)&&!E?ti(n,l,(l.subtreeFlags&8772)!==0):Na(n,l),Oa=p,Ut=E}u&512&&(l.memoizedProps.mode==="manual"?Gi(l,l.return):Jn(l,l.return));break;default:Na(n,l)}}function Lv(n){var i=n.alternate;i!==null&&(n.alternate=null,Lv(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&Gn(i)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var tn=null,Yn=!1;function Ma(n,i,l){for(l=l.child;l!==null;)jv(n,i,l),l=l.sibling}function jv(n,i,l){if(xe&&typeof xe.onCommitFiberUnmount=="function")try{xe.onCommitFiberUnmount($e,l)}catch{}switch(l.tag){case 26:Ut||Jn(l,i),Ma(n,i,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:Ut||Jn(l,i);var u=tn,m=Yn;for(tn=l.stateNode,Ma(n,i,l),l=l.stateNode,i=l.attributes;i.length;)l.removeAttributeNode(i[0]);Gn(l),tn=u,Yn=m;break;case 5:Ut||Jn(l,i);case 6:m=tn;var p=Yn;if(tn=null,Ma(n,i,l),tn=m,Yn=p,tn!==null)if(Yn)try{n=tn,u=l.stateNode,n.nodeType===8?n.parentNode.removeChild(u):n.removeChild(u)}catch(E){Mt(l,i,E)}else try{tn.removeChild(l.stateNode)}catch(E){Mt(l,i,E)}break;case 18:tn!==null&&(Yn?(i=tn,l=l.stateNode,i.nodeType===8?hh(i.parentNode,l):i.nodeType===1&&hh(i,l),fs(i)):hh(tn,l.stateNode));break;case 4:u=tn,m=Yn,tn=l.stateNode.containerInfo,Yn=!0,Ma(n,i,l),tn=u,Yn=m;break;case 0:case 11:case 14:case 15:Ut||ei(2,l,i),Ut||ei(4,l,i),Ma(n,i,l);break;case 1:Ut||(Jn(l,i),u=l.stateNode,typeof u.componentWillUnmount=="function"&&Nv(l,i,u)),Ma(n,i,l);break;case 21:Ma(n,i,l);break;case 22:Ut||Jn(l,i),Ut=(u=Ut)||l.memoizedState!==null,Ma(n,i,l),Ut=u;break;default:Ma(n,i,l)}}function Hv(n,i){if(i.memoizedState===null&&(n=i.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{fs(n)}catch(l){Mt(i,i.return,l)}}function g6(n){switch(n.tag){case 13:case 19:var i=n.stateNode;return i===null&&(i=n.stateNode=new _v),i;case 22:return n=n.stateNode,i=n._retryCache,i===null&&(i=n._retryCache=new _v),i;default:throw Error(a(435,n.tag))}}function kd(n,i){var l=g6(n);i.forEach(function(u){var m=O6.bind(null,n,u);l.has(u)||(l.add(u),u.then(m,m))})}function Sr(n,i){var l=i.deletions;if(l!==null)for(var u=0;u<l.length;u++){var m=l[u],p=n,E=i,D=E;e:for(;D!==null;){switch(D.tag){case 27:case 5:tn=D.stateNode,Yn=!1;break e;case 3:tn=D.stateNode.containerInfo,Yn=!0;break e;case 4:tn=D.stateNode.containerInfo,Yn=!0;break e}D=D.return}if(tn===null)throw Error(a(160));jv(p,E,m),tn=null,Yn=!1,p=m.alternate,p!==null&&(p.return=null),m.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)Bv(i,n),i=i.sibling}var Br=null;function Bv(n,i){var l=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:Sr(i,n),Cr(n),u&4&&(ei(3,n,n.return),Wl(3,n),ei(5,n,n.return));break;case 1:Sr(i,n),Cr(n),u&512&&(Ut||l===null||Jn(l,l.return)),u&64&&Oa&&(n=n.updateQueue,n!==null&&(u=n.callbacks,u!==null&&(l=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=l===null?u:l.concat(u))));break;case 26:var m=Br;if(Sr(i,n),Cr(n),u&512&&(Ut||l===null||Jn(l,l.return)),u&4){var p=l!==null?l.memoizedState:null;if(u=n.memoizedState,l===null)if(u===null)if(n.stateNode===null){e:{u=n.type,l=n.memoizedProps,m=m.ownerDocument||m;t:switch(u){case"title":p=m.getElementsByTagName("title")[0],(!p||p[kn]||p[yt]||p.namespaceURI==="http://www.w3.org/2000/svg"||p.hasAttribute("itemprop"))&&(p=m.createElement(u),m.head.insertBefore(p,m.querySelector("head > title"))),Sn(p,u,l),p[yt]=n,Nt(p),u=p;break e;case"link":var E=Dy("link","href",m).get(u+(l.href||""));if(E){for(var D=0;D<E.length;D++)if(p=E[D],p.getAttribute("href")===(l.href==null?null:l.href)&&p.getAttribute("rel")===(l.rel==null?null:l.rel)&&p.getAttribute("title")===(l.title==null?null:l.title)&&p.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){E.splice(D,1);break t}}p=m.createElement(u),Sn(p,u,l),m.head.appendChild(p);break;case"meta":if(E=Dy("meta","content",m).get(u+(l.content||""))){for(D=0;D<E.length;D++)if(p=E[D],p.getAttribute("content")===(l.content==null?null:""+l.content)&&p.getAttribute("name")===(l.name==null?null:l.name)&&p.getAttribute("property")===(l.property==null?null:l.property)&&p.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&p.getAttribute("charset")===(l.charSet==null?null:l.charSet)){E.splice(D,1);break t}}p=m.createElement(u),Sn(p,u,l),m.head.appendChild(p);break;default:throw Error(a(468,u))}p[yt]=n,Nt(p),u=p}n.stateNode=u}else Py(m,n.type,n.stateNode);else n.stateNode=Ny(m,u,n.memoizedProps);else p!==u?(p===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):p.count--,u===null?Py(m,n.type,n.stateNode):Ny(m,u,n.memoizedProps)):u===null&&n.stateNode!==null&&Pv(n,n.memoizedProps,l.memoizedProps)}break;case 27:if(u&4&&n.alternate===null){m=n.stateNode,p=n.memoizedProps;try{for(var L=m.firstChild;L;){var X=L.nextSibling,ce=L.nodeName;L[kn]||ce==="HEAD"||ce==="BODY"||ce==="SCRIPT"||ce==="STYLE"||ce==="LINK"&&L.rel.toLowerCase()==="stylesheet"||m.removeChild(L),L=X}for(var he=n.type,ae=m.attributes;ae.length;)m.removeAttributeNode(ae[0]);Sn(m,he,p),m[yt]=n,m[bt]=p}catch(Oe){Mt(n,n.return,Oe)}}case 5:if(Sr(i,n),Cr(n),u&512&&(Ut||l===null||Jn(l,l.return)),n.flags&32){m=n.stateNode;try{na(m,"")}catch(Oe){Mt(n,n.return,Oe)}}u&4&&n.stateNode!=null&&(m=n.memoizedProps,Pv(n,m,l!==null?l.memoizedProps:m)),u&1024&&($d=!0);break;case 6:if(Sr(i,n),Cr(n),u&4){if(n.stateNode===null)throw Error(a(162));u=n.memoizedProps,l=n.stateNode;try{l.nodeValue=u}catch(Oe){Mt(n,n.return,Oe)}}break;case 3:if(tc=null,m=Br,Br=Zu(i.containerInfo),Sr(i,n),Br=m,Cr(n),u&4&&l!==null&&l.memoizedState.isDehydrated)try{fs(i.containerInfo)}catch(Oe){Mt(n,n.return,Oe)}$d&&($d=!1,Fv(n));break;case 4:u=Br,Br=Zu(n.stateNode.containerInfo),Sr(i,n),Cr(n),Br=u;break;case 12:Sr(i,n),Cr(n);break;case 13:Sr(i,n),Cr(n),n.child.flags&8192&&n.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(Gd=Te()),u&4&&(u=n.updateQueue,u!==null&&(n.updateQueue=null,kd(n,u)));break;case 22:if(u&512&&(Ut||l===null||Jn(l,l.return)),L=n.memoizedState!==null,X=l!==null&&l.memoizedState!==null,ce=Oa,he=Ut,Oa=ce||L,Ut=he||X,Sr(i,n),Ut=he,Oa=ce,Cr(n),i=n.stateNode,i._current=n,i._visibility&=-3,i._visibility|=i._pendingVisibility&2,u&8192&&(i._visibility=L?i._visibility&-2:i._visibility|1,L&&(i=Oa||Ut,l===null||X||i||_o(n)),n.memoizedProps===null||n.memoizedProps.mode!=="manual"))e:for(l=null,i=n;;){if(i.tag===5||i.tag===26||i.tag===27){if(l===null){X=l=i;try{if(m=X.stateNode,L)p=m.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none";else{E=X.stateNode,D=X.memoizedProps.style;var se=D!=null&&D.hasOwnProperty("display")?D.display:null;E.style.display=se==null||typeof se=="boolean"?"":(""+se).trim()}}catch(Oe){Mt(X,X.return,Oe)}}}else if(i.tag===6){if(l===null){X=i;try{X.stateNode.nodeValue=L?"":X.memoizedProps}catch(Oe){Mt(X,X.return,Oe)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===n)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break e;for(;i.sibling===null;){if(i.return===null||i.return===n)break e;l===i&&(l=null),i=i.return}l===i&&(l=null),i.sibling.return=i.return,i=i.sibling}u&4&&(u=n.updateQueue,u!==null&&(l=u.retryQueue,l!==null&&(u.retryQueue=null,kd(n,l))));break;case 19:Sr(i,n),Cr(n),u&4&&(u=n.updateQueue,u!==null&&(n.updateQueue=null,kd(n,u)));break;case 21:break;default:Sr(i,n),Cr(n)}}function Cr(n){var i=n.flags;if(i&2){try{if(n.tag!==27){e:{for(var l=n.return;l!==null;){if(zv(l)){var u=l;break e}l=l.return}throw Error(a(160))}switch(u.tag){case 27:var m=u.stateNode,p=zd(n);ju(n,p,m);break;case 5:var E=u.stateNode;u.flags&32&&(na(E,""),u.flags&=-33);var D=zd(n);ju(n,D,E);break;case 3:case 4:var L=u.stateNode.containerInfo,X=zd(n);_d(n,X,L);break;default:throw Error(a(161))}}}catch(ce){Mt(n,n.return,ce)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Fv(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var i=n;Fv(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),n=n.sibling}}function Na(n,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)kv(n,i.alternate,i),i=i.sibling}function _o(n){for(n=n.child;n!==null;){var i=n;switch(i.tag){case 0:case 11:case 14:case 15:ei(4,i,i.return),_o(i);break;case 1:Jn(i,i.return);var l=i.stateNode;typeof l.componentWillUnmount=="function"&&Nv(i,i.return,l),_o(i);break;case 26:case 27:case 5:Jn(i,i.return),_o(i);break;case 22:Jn(i,i.return),i.memoizedState===null&&_o(i);break;default:_o(i)}n=n.sibling}}function ti(n,i,l){for(l=l&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var u=i.alternate,m=n,p=i,E=p.flags;switch(p.tag){case 0:case 11:case 15:ti(m,p,l),Wl(4,p);break;case 1:if(ti(m,p,l),u=p,m=u.stateNode,typeof m.componentDidMount=="function")try{m.componentDidMount()}catch(X){Mt(u,u.return,X)}if(u=p,m=u.updateQueue,m!==null){var D=u.stateNode;try{var L=m.shared.hiddenCallbacks;if(L!==null)for(m.shared.hiddenCallbacks=null,m=0;m<L.length;m++)Rv(L[m],D)}catch(X){Mt(u,u.return,X)}}l&&E&64&&Mv(p),Gi(p,p.return);break;case 26:case 27:case 5:ti(m,p,l),l&&u===null&&E&4&&Dv(p),Gi(p,p.return);break;case 12:ti(m,p,l);break;case 13:ti(m,p,l),l&&E&4&&Hv(m,p);break;case 22:p.memoizedState===null&&ti(m,p,l),Gi(p,p.return);break;default:ti(m,p,l)}i=i.sibling}}function Ld(n,i){var l=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(l=n.memoizedState.cachePool.pool),n=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(n=i.memoizedState.cachePool.pool),n!==l&&(n!=null&&n.refCount++,l!=null&&Ll(l))}function jd(n,i){n=null,i.alternate!==null&&(n=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==n&&(i.refCount++,n!=null&&Ll(n))}function ni(n,i,l,u){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)Iv(n,i,l,u),i=i.sibling}function Iv(n,i,l,u){var m=i.flags;switch(i.tag){case 0:case 11:case 15:ni(n,i,l,u),m&2048&&Wl(9,i);break;case 3:ni(n,i,l,u),m&2048&&(n=null,i.alternate!==null&&(n=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==n&&(i.refCount++,n!=null&&Ll(n)));break;case 12:if(m&2048){ni(n,i,l,u),n=i.stateNode;try{var p=i.memoizedProps,E=p.id,D=p.onPostCommit;typeof D=="function"&&D(E,i.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(L){Mt(i,i.return,L)}}else ni(n,i,l,u);break;case 23:break;case 22:p=i.stateNode,i.memoizedState!==null?p._visibility&4?ni(n,i,l,u):Jl(n,i):p._visibility&4?ni(n,i,l,u):(p._visibility|=4,$o(n,i,l,u,(i.subtreeFlags&10256)!==0)),m&2048&&Ld(i.alternate,i);break;case 24:ni(n,i,l,u),m&2048&&jd(i.alternate,i);break;default:ni(n,i,l,u)}}function $o(n,i,l,u,m){for(m=m&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var p=n,E=i,D=l,L=u,X=E.flags;switch(E.tag){case 0:case 11:case 15:$o(p,E,D,L,m),Wl(8,E);break;case 23:break;case 22:var ce=E.stateNode;E.memoizedState!==null?ce._visibility&4?$o(p,E,D,L,m):Jl(p,E):(ce._visibility|=4,$o(p,E,D,L,m)),m&&X&2048&&Ld(E.alternate,E);break;case 24:$o(p,E,D,L,m),m&&X&2048&&jd(E.alternate,E);break;default:$o(p,E,D,L,m)}i=i.sibling}}function Jl(n,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var l=n,u=i,m=u.flags;switch(u.tag){case 22:Jl(l,u),m&2048&&Ld(u.alternate,u);break;case 24:Jl(l,u),m&2048&&jd(u.alternate,u);break;default:Jl(l,u)}i=i.sibling}}var Yl=8192;function ko(n){if(n.subtreeFlags&Yl)for(n=n.child;n!==null;)Vv(n),n=n.sibling}function Vv(n){switch(n.tag){case 26:ko(n),n.flags&Yl&&n.memoizedState!==null&&r3(Br,n.memoizedState,n.memoizedProps);break;case 5:ko(n);break;case 3:case 4:var i=Br;Br=Zu(n.stateNode.containerInfo),ko(n),Br=i;break;case 22:n.memoizedState===null&&(i=n.alternate,i!==null&&i.memoizedState!==null?(i=Yl,Yl=16777216,ko(n),Yl=i):ko(n));break;default:ko(n)}}function Uv(n){var i=n.alternate;if(i!==null&&(n=i.child,n!==null)){i.child=null;do i=n.sibling,n.sibling=null,n=i;while(n!==null)}}function Xl(n){var i=n.deletions;if((n.flags&16)!==0){if(i!==null)for(var l=0;l<i.length;l++){var u=i[l];fn=u,qv(u,n)}Uv(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Gv(n),n=n.sibling}function Gv(n){switch(n.tag){case 0:case 11:case 15:Xl(n),n.flags&2048&&ei(9,n,n.return);break;case 3:Xl(n);break;case 12:Xl(n);break;case 22:var i=n.stateNode;n.memoizedState!==null&&i._visibility&4&&(n.return===null||n.return.tag!==13)?(i._visibility&=-5,Hu(n)):Xl(n);break;default:Xl(n)}}function Hu(n){var i=n.deletions;if((n.flags&16)!==0){if(i!==null)for(var l=0;l<i.length;l++){var u=i[l];fn=u,qv(u,n)}Uv(n)}for(n=n.child;n!==null;){switch(i=n,i.tag){case 0:case 11:case 15:ei(8,i,i.return),Hu(i);break;case 22:l=i.stateNode,l._visibility&4&&(l._visibility&=-5,Hu(i));break;default:Hu(i)}n=n.sibling}}function qv(n,i){for(;fn!==null;){var l=fn;switch(l.tag){case 0:case 11:case 15:ei(8,l,i);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var u=l.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:Ll(l.memoizedState.cache)}if(u=l.child,u!==null)u.return=l,fn=u;else e:for(l=n;fn!==null;){u=fn;var m=u.sibling,p=u.return;if(Lv(u),u===l){fn=null;break e}if(m!==null){m.return=p,fn=m;break e}fn=p}}}function p6(n,i,l,u){this.tag=n,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wr(n,i,l,u){return new p6(n,i,l,u)}function Hd(n){return n=n.prototype,!(!n||!n.isReactComponent)}function ri(n,i){var l=n.alternate;return l===null?(l=wr(n.tag,i,n.key,n.mode),l.elementType=n.elementType,l.type=n.type,l.stateNode=n.stateNode,l.alternate=n,n.alternate=l):(l.pendingProps=i,l.type=n.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=n.flags&31457280,l.childLanes=n.childLanes,l.lanes=n.lanes,l.child=n.child,l.memoizedProps=n.memoizedProps,l.memoizedState=n.memoizedState,l.updateQueue=n.updateQueue,i=n.dependencies,l.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},l.sibling=n.sibling,l.index=n.index,l.ref=n.ref,l.refCleanup=n.refCleanup,l}function Wv(n,i){n.flags&=31457282;var l=n.alternate;return l===null?(n.childLanes=0,n.lanes=i,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=l.childLanes,n.lanes=l.lanes,n.child=l.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=l.memoizedProps,n.memoizedState=l.memoizedState,n.updateQueue=l.updateQueue,n.type=l.type,i=l.dependencies,n.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),n}function Bu(n,i,l,u,m,p){var E=0;if(u=n,typeof n=="function")Hd(n)&&(E=1);else if(typeof n=="string")E=t3(n,l,Pe.current)?26:n==="html"||n==="head"||n==="body"?27:5;else e:switch(n){case h:return qi(l.children,m,p,i);case d:E=8,m|=24;break;case g:return n=wr(12,l,i,m|2),n.elementType=g,n.lanes=p,n;case A:return n=wr(13,l,i,m),n.elementType=A,n.lanes=p,n;case x:return n=wr(19,l,i,m),n.elementType=x,n.lanes=p,n;case O:return Jv(l,m,p,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case v:case S:E=10;break e;case y:E=9;break e;case w:E=11;break e;case T:E=14;break e;case R:E=16,u=null;break e}E=29,l=Error(a(130,n===null?"null":typeof n,"")),u=null}return i=wr(E,l,i,m),i.elementType=n,i.type=u,i.lanes=p,i}function qi(n,i,l,u){return n=wr(7,n,u,i),n.lanes=l,n}function Jv(n,i,l,u){n=wr(22,n,u,i),n.elementType=O,n.lanes=l;var m={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var p=m._current;if(p===null)throw Error(a(456));if((m._pendingVisibility&2)===0){var E=Ga(p,2);E!==null&&(m._pendingVisibility|=2,Pn(E,p,2))}},attach:function(){var p=m._current;if(p===null)throw Error(a(456));if((m._pendingVisibility&2)!==0){var E=Ga(p,2);E!==null&&(m._pendingVisibility&=-3,Pn(E,p,2))}}};return n.stateNode=m,n}function Bd(n,i,l){return n=wr(6,n,null,i),n.lanes=l,n}function Fd(n,i,l){return i=wr(4,n.children!==null?n.children:[],n.key,i),i.lanes=l,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function Da(n){n.flags|=4}function Yv(n,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!zy(i)){if(i=br.current,i!==null&&((dt&4194176)===dt?aa!==null:(dt&62914560)!==dt&&(dt&536870912)===0||i!==aa))throw _l=qf,d0;n.flags|=8192}}function Fu(n,i){i!==null&&(n.flags|=4),n.flags&16384&&(i=n.tag!==22?ht():536870912,n.lanes|=i,jo|=i)}function Kl(n,i){if(!gt)switch(n.tailMode){case"hidden":i=n.tail;for(var l=null;i!==null;)i.alternate!==null&&(l=i),i=i.sibling;l===null?n.tail=null:l.sibling=null;break;case"collapsed":l=n.tail;for(var u=null;l!==null;)l.alternate!==null&&(u=l),l=l.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function Ht(n){var i=n.alternate!==null&&n.alternate.child===n.child,l=0,u=0;if(i)for(var m=n.child;m!==null;)l|=m.lanes|m.childLanes,u|=m.subtreeFlags&31457280,u|=m.flags&31457280,m.return=n,m=m.sibling;else for(m=n.child;m!==null;)l|=m.lanes|m.childLanes,u|=m.subtreeFlags,u|=m.flags,m.return=n,m=m.sibling;return n.subtreeFlags|=u,n.childLanes=l,i}function v6(n,i,l){var u=i.pendingProps;switch(Uf(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ht(i),null;case 1:return Ht(i),null;case 3:return l=i.stateNode,u=null,n!==null&&(u=n.memoizedState.cache),i.memoizedState.cache!==u&&(i.flags|=2048),Ra(ln),Me(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(n===null||n.child===null)&&(Nl(i)?Da(i):n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Hr!==null&&(Yd(Hr),Hr=null))),Ht(i),null;case 26:return l=i.memoizedState,n===null?(Da(i),l!==null?(Ht(i),Yv(i,l)):(Ht(i),i.flags&=-16777217)):l?l!==n.memoizedState?(Da(i),Ht(i),Yv(i,l)):(Ht(i),i.flags&=-16777217):(n.memoizedProps!==u&&Da(i),Ht(i),i.flags&=-16777217),null;case 27:Ve(i),l=He.current;var m=i.type;if(n!==null&&i.stateNode!=null)n.memoizedProps!==u&&Da(i);else{if(!u){if(i.stateNode===null)throw Error(a(166));return Ht(i),null}n=Pe.current,Nl(i)?c0(i):(n=Ay(m,u,l),i.stateNode=n,Da(i))}return Ht(i),null;case 5:if(Ve(i),l=i.type,n!==null&&i.stateNode!=null)n.memoizedProps!==u&&Da(i);else{if(!u){if(i.stateNode===null)throw Error(a(166));return Ht(i),null}if(n=Pe.current,Nl(i))c0(i);else{switch(m=Qu(He.current),n){case 1:n=m.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:n=m.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":n=m.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":n=m.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":n=m.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof u.is=="string"?m.createElement("select",{is:u.is}):m.createElement("select"),u.multiple?n.multiple=!0:u.size&&(n.size=u.size);break;default:n=typeof u.is=="string"?m.createElement(l,{is:u.is}):m.createElement(l)}}n[yt]=i,n[bt]=u;e:for(m=i.child;m!==null;){if(m.tag===5||m.tag===6)n.appendChild(m.stateNode);else if(m.tag!==4&&m.tag!==27&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===i)break e;for(;m.sibling===null;){if(m.return===null||m.return===i)break e;m=m.return}m.sibling.return=m.return,m=m.sibling}i.stateNode=n;e:switch(Sn(n,l,u),l){case"button":case"input":case"select":case"textarea":n=!!u.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&Da(i)}}return Ht(i),i.flags&=-16777217,null;case 6:if(n&&i.stateNode!=null)n.memoizedProps!==u&&Da(i);else{if(typeof u!="string"&&i.stateNode===null)throw Error(a(166));if(n=He.current,Nl(i)){if(n=i.stateNode,l=i.memoizedProps,u=null,m=Dn,m!==null)switch(m.tag){case 27:case 5:u=m.memoizedProps}n[yt]=i,n=!!(n.nodeValue===l||u!==null&&u.suppressHydrationWarning===!0||by(n.nodeValue,l)),n||ki(i)}else n=Qu(n).createTextNode(u),n[yt]=i,i.stateNode=n}return Ht(i),null;case 13:if(u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(m=Nl(i),u!==null&&u.dehydrated!==null){if(n===null){if(!m)throw Error(a(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(a(317));m[yt]=i}else Dl(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Ht(i),m=!1}else Hr!==null&&(Yd(Hr),Hr=null),m=!0;if(!m)return i.flags&256?(xa(i),i):(xa(i),null)}if(xa(i),(i.flags&128)!==0)return i.lanes=l,i;if(l=u!==null,n=n!==null&&n.memoizedState!==null,l){u=i.child,m=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(m=u.alternate.memoizedState.cachePool.pool);var p=null;u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(p=u.memoizedState.cachePool.pool),p!==m&&(u.flags|=2048)}return l!==n&&l&&(i.child.flags|=8192),Fu(i,i.updateQueue),Ht(i),null;case 4:return Me(),n===null&&oh(i.stateNode.containerInfo),Ht(i),null;case 10:return Ra(i.type),Ht(i),null;case 19:if(me(on),m=i.memoizedState,m===null)return Ht(i),null;if(u=(i.flags&128)!==0,p=m.rendering,p===null)if(u)Kl(m,!1);else{if(Gt!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(p=Eu(n),p!==null){for(i.flags|=128,Kl(m,!1),n=p.updateQueue,i.updateQueue=n,Fu(i,n),i.subtreeFlags=0,n=l,l=i.child;l!==null;)Wv(l,n),l=l.sibling;return ge(on,on.current&1|2),i.child}n=n.sibling}m.tail!==null&&Te()>Iu&&(i.flags|=128,u=!0,Kl(m,!1),i.lanes=4194304)}else{if(!u)if(n=Eu(p),n!==null){if(i.flags|=128,u=!0,n=n.updateQueue,i.updateQueue=n,Fu(i,n),Kl(m,!0),m.tail===null&&m.tailMode==="hidden"&&!p.alternate&&!gt)return Ht(i),null}else 2*Te()-m.renderingStartTime>Iu&&l!==536870912&&(i.flags|=128,u=!0,Kl(m,!1),i.lanes=4194304);m.isBackwards?(p.sibling=i.child,i.child=p):(n=m.last,n!==null?n.sibling=p:i.child=p,m.last=p)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=Te(),i.sibling=null,n=on.current,ge(on,u?n&1|2:n&1),i):(Ht(i),null);case 22:case 23:return xa(i),Jf(),u=i.memoizedState!==null,n!==null?n.memoizedState!==null!==u&&(i.flags|=8192):u&&(i.flags|=8192),u?(l&536870912)!==0&&(i.flags&128)===0&&(Ht(i),i.subtreeFlags&6&&(i.flags|=8192)):Ht(i),l=i.updateQueue,l!==null&&Fu(i,l.retryQueue),l=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(l=n.memoizedState.cachePool.pool),u=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(u=i.memoizedState.cachePool.pool),u!==l&&(i.flags|=2048),n!==null&&me(ji),null;case 24:return l=null,n!==null&&(l=n.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),Ra(ln),Ht(i),null;case 25:return null}throw Error(a(156,i.tag))}function y6(n,i){switch(Uf(i),i.tag){case 1:return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Ra(ln),Me(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 26:case 27:case 5:return Ve(i),null;case 13:if(xa(i),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(a(340));Dl()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return me(on),null;case 4:return Me(),null;case 10:return Ra(i.type),null;case 22:case 23:return xa(i),Jf(),n!==null&&me(ji),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 24:return Ra(ln),null;case 25:return null;default:return null}}function Xv(n,i){switch(Uf(i),i.tag){case 3:Ra(ln),Me();break;case 26:case 27:case 5:Ve(i);break;case 4:Me();break;case 13:xa(i);break;case 19:me(on);break;case 10:Ra(i.type);break;case 22:case 23:xa(i),Jf(),n!==null&&me(ji);break;case 24:Ra(ln)}}var b6={getCacheForType:function(n){var i=En(ln),l=i.data.get(n);return l===void 0&&(l=n(),i.data.set(n,l)),l}},S6=typeof WeakMap=="function"?WeakMap:Map,Bt=0,Pt=null,it=null,dt=0,zt=0,Xn=null,Pa=!1,Lo=!1,Id=!1,za=0,Gt=0,ai=0,Wi=0,Vd=0,xr=0,jo=0,Ql=null,oa=null,Ud=!1,Gd=0,Iu=1/0,Vu=null,ii=null,Uu=!1,Ji=null,Zl=0,qd=0,Wd=null,es=0,Jd=null;function Kn(){if((Bt&2)!==0&&dt!==0)return dt&-dt;if($.T!==null){var n=Mo;return n!==0?n:nh()}return Qr()}function Kv(){xr===0&&(xr=(dt&536870912)===0||gt?On():536870912);var n=br.current;return n!==null&&(n.flags|=32),xr}function Pn(n,i,l){(n===Pt&&zt===2||n.cancelPendingCommit!==null)&&(Ho(n,0),_a(n,dt,xr,!1)),Lt(n,l),((Bt&2)===0||n!==Pt)&&(n===Pt&&((Bt&2)===0&&(Wi|=l),Gt===4&&_a(n,dt,xr,!1)),la(n))}function Qv(n,i,l){if((Bt&6)!==0)throw Error(a(327));var u=!l&&(i&60)===0&&(i&n.expiredLanes)===0||wn(n,i),m=u?x6(n,i):Qd(n,i,!0),p=u;do{if(m===0){Lo&&!u&&_a(n,i,0,!1);break}else if(m===6)_a(n,i,0,!Pa);else{if(l=n.current.alternate,p&&!C6(l)){m=Qd(n,i,!1),p=!1;continue}if(m===2){if(p=i,n.errorRecoveryDisabledLanes&p)var E=0;else E=n.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){i=E;e:{var D=n;m=Ql;var L=D.current.memoizedState.isDehydrated;if(L&&(Ho(D,E).flags|=256),E=Qd(D,E,!1),E!==2){if(Id&&!L){D.errorRecoveryDisabledLanes|=p,Wi|=p,m=4;break e}p=oa,oa=m,p!==null&&Yd(p)}m=E}if(p=!1,m!==2)continue}}if(m===1){Ho(n,0),_a(n,i,0,!0);break}e:{switch(u=n,m){case 0:case 1:throw Error(a(345));case 4:if((i&4194176)===i){_a(u,i,xr,!Pa);break e}break;case 2:oa=null;break;case 3:case 5:break;default:throw Error(a(329))}if(u.finishedWork=l,u.finishedLanes=i,(i&62914560)===i&&(p=Gd+300-Te(),10<p)){if(_a(u,i,xr,!Pa),Wt(u,0)!==0)break e;u.timeoutHandle=wy(Zv.bind(null,u,l,oa,Vu,Ud,i,xr,Wi,jo,Pa,2,-0,0),p);break e}Zv(u,l,oa,Vu,Ud,i,xr,Wi,jo,Pa,0,-0,0)}}break}while(!0);la(n)}function Yd(n){oa===null?oa=n:oa.push.apply(oa,n)}function Zv(n,i,l,u,m,p,E,D,L,X,ce,he,ae){var se=i.subtreeFlags;if((se&8192||(se&16785408)===16785408)&&(os={stylesheets:null,count:0,unsuspend:n3},Vv(i),i=a3(),i!==null)){n.cancelPendingCommit=i(oy.bind(null,n,l,u,m,E,D,L,1,he,ae)),_a(n,p,E,!X);return}oy(n,l,u,m,E,D,L,ce,he,ae)}function C6(n){for(var i=n;;){var l=i.tag;if((l===0||l===11||l===15)&&i.flags&16384&&(l=i.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var u=0;u<l.length;u++){var m=l[u],p=m.getSnapshot;m=m.value;try{if(!Wn(p(),m))return!1}catch{return!1}}if(l=i.child,i.subtreeFlags&16384&&l!==null)l.return=i,i=l;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function _a(n,i,l,u){i&=~Vd,i&=~Wi,n.suspendedLanes|=i,n.pingedLanes&=~i,u&&(n.warmLanes|=i),u=n.expirationTimes;for(var m=i;0<m;){var p=31-Ze(m),E=1<<p;u[p]=-1,m&=~E}l!==0&&Xr(n,l,i)}function Gu(){return(Bt&6)===0?(ts(0),!1):!0}function Xd(){if(it!==null){if(zt===0)var n=it.return;else n=it,Ta=Vi=null,nd(n),Ro=null,$l=0,n=it;for(;n!==null;)Xv(n.alternate,n),n=n.return;it=null}}function Ho(n,i){n.finishedWork=null,n.finishedLanes=0;var l=n.timeoutHandle;l!==-1&&(n.timeoutHandle=-1,B6(l)),l=n.cancelPendingCommit,l!==null&&(n.cancelPendingCommit=null,l()),Xd(),Pt=n,it=l=ri(n.current,null),dt=i,zt=0,Xn=null,Pa=!1,Lo=wn(n,i),Id=!1,jo=xr=Vd=Wi=ai=Gt=0,oa=Ql=null,Ud=!1,(i&8)!==0&&(i|=i&32);var u=n.entangledLanes;if(u!==0)for(n=n.entanglements,u&=i;0<u;){var m=31-Ze(u),p=1<<m;i|=n[m],u&=~p}return za=i,gu(),l}function ey(n,i){et=null,$.H=ia,i===zl?(i=g0(),zt=3):i===d0?(i=g0(),zt=4):zt=i===hv?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,Xn=i,it===null&&(Gt=1,$u(n,pr(i,n.current)))}function ty(){var n=$.H;return $.H=ia,n===null?ia:n}function ny(){var n=$.A;return $.A=b6,n}function Kd(){Gt=4,Pa||(dt&4194176)!==dt&&br.current!==null||(Lo=!0),(ai&134217727)===0&&(Wi&134217727)===0||Pt===null||_a(Pt,dt,xr,!1)}function Qd(n,i,l){var u=Bt;Bt|=2;var m=ty(),p=ny();(Pt!==n||dt!==i)&&(Vu=null,Ho(n,i)),i=!1;var E=Gt;e:do try{if(zt!==0&&it!==null){var D=it,L=Xn;switch(zt){case 8:Xd(),E=6;break e;case 3:case 2:case 6:br.current===null&&(i=!0);var X=zt;if(zt=0,Xn=null,Bo(n,D,L,X),l&&Lo){E=0;break e}break;default:X=zt,zt=0,Xn=null,Bo(n,D,L,X)}}w6(),E=Gt;break}catch(ce){ey(n,ce)}while(!0);return i&&n.shellSuspendCounter++,Ta=Vi=null,Bt=u,$.H=m,$.A=p,it===null&&(Pt=null,dt=0,gu()),E}function w6(){for(;it!==null;)ry(it)}function x6(n,i){var l=Bt;Bt|=2;var u=ty(),m=ny();Pt!==n||dt!==i?(Vu=null,Iu=Te()+500,Ho(n,i)):Lo=wn(n,i);e:do try{if(zt!==0&&it!==null){i=it;var p=Xn;t:switch(zt){case 1:zt=0,Xn=null,Bo(n,i,p,1);break;case 2:if(h0(p)){zt=0,Xn=null,ay(i);break}i=function(){zt===2&&Pt===n&&(zt=7),la(n)},p.then(i,i);break e;case 3:zt=7;break e;case 4:zt=5;break e;case 7:h0(p)?(zt=0,Xn=null,ay(i)):(zt=0,Xn=null,Bo(n,i,p,7));break;case 5:var E=null;switch(it.tag){case 26:E=it.memoizedState;case 5:case 27:var D=it;if(!E||zy(E)){zt=0,Xn=null;var L=D.sibling;if(L!==null)it=L;else{var X=D.return;X!==null?(it=X,qu(X)):it=null}break t}}zt=0,Xn=null,Bo(n,i,p,5);break;case 6:zt=0,Xn=null,Bo(n,i,p,6);break;case 8:Xd(),Gt=6;break e;default:throw Error(a(462))}}E6();break}catch(ce){ey(n,ce)}while(!0);return Ta=Vi=null,$.H=u,$.A=m,Bt=l,it!==null?0:(Pt=null,dt=0,gu(),Gt)}function E6(){for(;it!==null&&!st();)ry(it)}function ry(n){var i=Av(n.alternate,n,za);n.memoizedProps=n.pendingProps,i===null?qu(n):it=i}function ay(n){var i=n,l=i.alternate;switch(i.tag){case 15:case 0:i=bv(l,i,i.pendingProps,i.type,void 0,dt);break;case 11:i=bv(l,i,i.pendingProps,i.type.render,i.ref,dt);break;case 5:nd(i);default:Xv(l,i),i=it=Wv(i,za),i=Av(l,i,za)}n.memoizedProps=n.pendingProps,i===null?qu(n):it=i}function Bo(n,i,l,u){Ta=Vi=null,nd(i),Ro=null,$l=0;var m=i.return;try{if(d6(n,m,i,l,dt)){Gt=1,$u(n,pr(l,n.current)),it=null;return}}catch(p){if(m!==null)throw it=m,p;Gt=1,$u(n,pr(l,n.current)),it=null;return}i.flags&32768?(gt||u===1?n=!0:Lo||(dt&536870912)!==0?n=!1:(Pa=n=!0,(u===2||u===3||u===6)&&(u=br.current,u!==null&&u.tag===13&&(u.flags|=16384))),iy(i,n)):qu(i)}function qu(n){var i=n;do{if((i.flags&32768)!==0){iy(i,Pa);return}n=i.return;var l=v6(i.alternate,i,za);if(l!==null){it=l;return}if(i=i.sibling,i!==null){it=i;return}it=i=n}while(i!==null);Gt===0&&(Gt=5)}function iy(n,i){do{var l=y6(n.alternate,n);if(l!==null){l.flags&=32767,it=l;return}if(l=n.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!i&&(n=n.sibling,n!==null)){it=n;return}it=n=l}while(n!==null);Gt=6,it=null}function oy(n,i,l,u,m,p,E,D,L,X){var ce=$.T,he=H.p;try{H.p=2,$.T=null,A6(n,i,l,u,he,m,p,E,D,L,X)}finally{$.T=ce,H.p=he}}function A6(n,i,l,u,m,p,E,D){do Fo();while(Ji!==null);if((Bt&6)!==0)throw Error(a(327));var L=n.finishedWork;if(u=n.finishedLanes,L===null)return null;if(n.finishedWork=null,n.finishedLanes=0,L===n.current)throw Error(a(177));n.callbackNode=null,n.callbackPriority=0,n.cancelPendingCommit=null;var X=L.lanes|L.childLanes;if(X|=Ff,lr(n,u,X,p,E,D),n===Pt&&(it=Pt=null,dt=0),(L.subtreeFlags&10256)===0&&(L.flags&10256)===0||Uu||(Uu=!0,qd=X,Wd=l,M6(Se,function(){return Fo(),null})),l=(L.flags&15990)!==0,(L.subtreeFlags&15990)!==0||l?(l=$.T,$.T=null,p=H.p,H.p=2,E=Bt,Bt|=4,m6(n,L),Bv(L,n),Yx(ch,n.containerInfo),ac=!!uh,ch=uh=null,n.current=L,kv(n,L.alternate,L),Ce(),Bt=E,H.p=p,$.T=l):n.current=L,Uu?(Uu=!1,Ji=n,Zl=u):ly(n,X),X=n.pendingLanes,X===0&&(ii=null),Qe(L.stateNode),la(n),i!==null)for(m=n.onRecoverableError,L=0;L<i.length;L++)X=i[L],m(X.value,{componentStack:X.stack});return(Zl&3)!==0&&Fo(),X=n.pendingLanes,(u&4194218)!==0&&(X&42)!==0?n===Jd?es++:(es=0,Jd=n):es=0,ts(0),null}function ly(n,i){(n.pooledCacheLanes&=i)===0&&(i=n.pooledCache,i!=null&&(n.pooledCache=null,Ll(i)))}function Fo(){if(Ji!==null){var n=Ji,i=qd;qd=0;var l=Kr(Zl),u=$.T,m=H.p;try{if(H.p=32>l?32:l,$.T=null,Ji===null)var p=!1;else{l=Wd,Wd=null;var E=Ji,D=Zl;if(Ji=null,Zl=0,(Bt&6)!==0)throw Error(a(331));var L=Bt;if(Bt|=4,Gv(E.current),Iv(E,E.current,D,l),Bt=L,ts(0,!1),xe&&typeof xe.onPostCommitFiberRoot=="function")try{xe.onPostCommitFiberRoot($e,E)}catch{}p=!0}return p}finally{H.p=m,$.T=u,ly(n,i)}}return!1}function sy(n,i,l){i=pr(l,i),i=pd(n.stateNode,i,2),n=Za(n,i,2),n!==null&&(Lt(n,2),la(n))}function Mt(n,i,l){if(n.tag===3)sy(n,n,l);else for(;i!==null;){if(i.tag===3){sy(i,n,l);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(ii===null||!ii.has(u))){n=pr(l,n),l=fv(2),u=Za(i,l,2),u!==null&&(dv(l,u,i,n),Lt(u,2),la(u));break}}i=i.return}}function Zd(n,i,l){var u=n.pingCache;if(u===null){u=n.pingCache=new S6;var m=new Set;u.set(i,m)}else m=u.get(i),m===void 0&&(m=new Set,u.set(i,m));m.has(l)||(Id=!0,m.add(l),n=T6.bind(null,n,i,l),i.then(n,n))}function T6(n,i,l){var u=n.pingCache;u!==null&&u.delete(i),n.pingedLanes|=n.suspendedLanes&l,n.warmLanes&=~l,Pt===n&&(dt&l)===l&&(Gt===4||Gt===3&&(dt&62914560)===dt&&300>Te()-Gd?(Bt&2)===0&&Ho(n,0):Vd|=l,jo===dt&&(jo=0)),la(n)}function uy(n,i){i===0&&(i=ht()),n=Ga(n,i),n!==null&&(Lt(n,i),la(n))}function R6(n){var i=n.memoizedState,l=0;i!==null&&(l=i.retryLane),uy(n,l)}function O6(n,i){var l=0;switch(n.tag){case 13:var u=n.stateNode,m=n.memoizedState;m!==null&&(l=m.retryLane);break;case 19:u=n.stateNode;break;case 22:u=n.stateNode._retryCache;break;default:throw Error(a(314))}u!==null&&u.delete(i),uy(n,l)}function M6(n,i){return Et(n,i)}var Wu=null,Io=null,eh=!1,Ju=!1,th=!1,Yi=0;function la(n){n!==Io&&n.next===null&&(Io===null?Wu=Io=n:Io=Io.next=n),Ju=!0,eh||(eh=!0,D6(N6))}function ts(n,i){if(!th&&Ju){th=!0;do for(var l=!1,u=Wu;u!==null;){if(n!==0){var m=u.pendingLanes;if(m===0)var p=0;else{var E=u.suspendedLanes,D=u.pingedLanes;p=(1<<31-Ze(42|n)+1)-1,p&=m&~(E&~D),p=p&201326677?p&201326677|1:p?p|2:0}p!==0&&(l=!0,dy(u,p))}else p=dt,p=Wt(u,u===Pt?p:0),(p&3)===0||wn(u,p)||(l=!0,dy(u,p));u=u.next}while(l);th=!1}}function N6(){Ju=eh=!1;var n=0;Yi!==0&&(H6()&&(n=Yi),Yi=0);for(var i=Te(),l=null,u=Wu;u!==null;){var m=u.next,p=cy(u,i);p===0?(u.next=null,l===null?Wu=m:l.next=m,m===null&&(Io=l)):(l=u,(n!==0||(p&3)!==0)&&(Ju=!0)),u=m}ts(n)}function cy(n,i){for(var l=n.suspendedLanes,u=n.pingedLanes,m=n.expirationTimes,p=n.pendingLanes&-62914561;0<p;){var E=31-Ze(p),D=1<<E,L=m[E];L===-1?((D&l)===0||(D&u)!==0)&&(m[E]=Vt(D,i)):L<=i&&(n.expiredLanes|=D),p&=~D}if(i=Pt,l=dt,l=Wt(n,n===i?l:0),u=n.callbackNode,l===0||n===i&&zt===2||n.cancelPendingCommit!==null)return u!==null&&u!==null&&Be(u),n.callbackNode=null,n.callbackPriority=0;if((l&3)===0||wn(n,l)){if(i=l&-l,i===n.callbackPriority)return i;switch(u!==null&&Be(u),Kr(l)){case 2:case 8:l=de;break;case 32:l=Se;break;case 268435456:l=Re;break;default:l=Se}return u=fy.bind(null,n),l=Et(l,u),n.callbackPriority=i,n.callbackNode=l,i}return u!==null&&u!==null&&Be(u),n.callbackPriority=2,n.callbackNode=null,2}function fy(n,i){var l=n.callbackNode;if(Fo()&&n.callbackNode!==l)return null;var u=dt;return u=Wt(n,n===Pt?u:0),u===0?null:(Qv(n,u,i),cy(n,Te()),n.callbackNode!=null&&n.callbackNode===l?fy.bind(null,n):null)}function dy(n,i){if(Fo())return null;Qv(n,i,!0)}function D6(n){F6(function(){(Bt&6)!==0?Et(re,n):n()})}function nh(){return Yi===0&&(Yi=On()),Yi}function hy(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:kr(""+n)}function my(n,i){var l=i.ownerDocument.createElement("input");return l.name=i.name,l.value=i.value,n.id&&l.setAttribute("form",n.id),i.parentNode.insertBefore(l,i),n=new FormData(n),l.parentNode.removeChild(l),n}function P6(n,i,l,u,m){if(i==="submit"&&l&&l.stateNode===m){var p=hy((m[bt]||null).action),E=u.submitter;E&&(i=(i=E[bt]||null)?hy(i.formAction):E.getAttribute("formAction"),i!==null&&(p=i,E=null));var D=new du("action","action",null,u,m);n.push({event:D,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(Yi!==0){var L=E?my(m,E):new FormData(m);fd(l,{pending:!0,data:L,method:m.method,action:p},null,L)}}else typeof p=="function"&&(D.preventDefault(),L=E?my(m,E):new FormData(m),fd(l,{pending:!0,data:L,method:m.method,action:p},p,L))},currentTarget:m}]})}}for(var rh=0;rh<o0.length;rh++){var ah=o0[rh],z6=ah.toLowerCase(),_6=ah[0].toUpperCase()+ah.slice(1);jr(z6,"on"+_6)}jr(t0,"onAnimationEnd"),jr(n0,"onAnimationIteration"),jr(r0,"onAnimationStart"),jr("dblclick","onDoubleClick"),jr("focusin","onFocus"),jr("focusout","onBlur"),jr(Kx,"onTransitionRun"),jr(Qx,"onTransitionStart"),jr(Zx,"onTransitionCancel"),jr(a0,"onTransitionEnd"),$r("onMouseEnter",["mouseout","mouseover"]),$r("onMouseLeave",["mouseout","mouseover"]),$r("onPointerEnter",["pointerout","pointerover"]),$r("onPointerLeave",["pointerout","pointerover"]),ur("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ur("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ur("onBeforeInput",["compositionend","keypress","textInput","paste"]),ur("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ur("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ur("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ns="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$6=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ns));function gy(n,i){i=(i&4)!==0;for(var l=0;l<n.length;l++){var u=n[l],m=u.event;u=u.listeners;e:{var p=void 0;if(i)for(var E=u.length-1;0<=E;E--){var D=u[E],L=D.instance,X=D.currentTarget;if(D=D.listener,L!==p&&m.isPropagationStopped())break e;p=D,m.currentTarget=X;try{p(m)}catch(ce){_u(ce)}m.currentTarget=null,p=L}else for(E=0;E<u.length;E++){if(D=u[E],L=D.instance,X=D.currentTarget,D=D.listener,L!==p&&m.isPropagationStopped())break e;p=D,m.currentTarget=X;try{p(m)}catch(ce){_u(ce)}m.currentTarget=null,p=L}}}}function ct(n,i){var l=i[_r];l===void 0&&(l=i[_r]=new Set);var u=n+"__bubble";l.has(u)||(py(i,n,2,!1),l.add(u))}function ih(n,i,l){var u=0;i&&(u|=4),py(l,n,u,i)}var Yu="_reactListening"+Math.random().toString(36).slice(2);function oh(n){if(!n[Yu]){n[Yu]=!0,xi.forEach(function(l){l!=="selectionchange"&&($6.has(l)||ih(l,!1,n),ih(l,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Yu]||(i[Yu]=!0,ih("selectionchange",!1,i))}}function py(n,i,l,u){switch(Hy(i)){case 2:var m=l3;break;case 8:m=s3;break;default:m=bh}l=m.bind(null,i,l,n),m=void 0,!ke||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(m=!0),u?m!==void 0?n.addEventListener(i,l,{capture:!0,passive:m}):n.addEventListener(i,l,!0):m!==void 0?n.addEventListener(i,l,{passive:m}):n.addEventListener(i,l,!1)}function lh(n,i,l,u,m){var p=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var E=u.tag;if(E===3||E===4){var D=u.stateNode.containerInfo;if(D===m||D.nodeType===8&&D.parentNode===m)break;if(E===4)for(E=u.return;E!==null;){var L=E.tag;if((L===3||L===4)&&(L=E.stateNode.containerInfo,L===m||L.nodeType===8&&L.parentNode===m))return;E=E.return}for(;D!==null;){if(E=Ln(D),E===null)return;if(L=E.tag,L===5||L===6||L===26||L===27){u=p=E;continue e}D=D.parentNode}}u=u.return}yo(function(){var X=p,ce=hr(l),he=[];e:{var ae=i0.get(n);if(ae!==void 0){var se=du,Oe=n;switch(n){case"keypress":if(Ni(l)===0)break e;case"keydown":case"keyup":se=Ox;break;case"focusin":Oe="focus",se=Pf;break;case"focusout":Oe="blur",se=Pf;break;case"beforeblur":case"afterblur":se=Pf;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":se=_p;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":se=px;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":se=Dx;break;case t0:case n0:case r0:se=bx;break;case a0:se=zx;break;case"scroll":case"scrollend":se=mx;break;case"wheel":se=$x;break;case"copy":case"cut":case"paste":se=Cx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":se=kp;break;case"toggle":case"beforetoggle":se=Lx}var Ue=(i&4)!==0,qt=!Ue&&(n==="scroll"||n==="scrollend"),Z=Ue?ae!==null?ae+"Capture":null:ae;Ue=[];for(var q=X,te;q!==null;){var fe=q;if(te=fe.stateNode,fe=fe.tag,fe!==5&&fe!==26&&fe!==27||te===null||Z===null||(fe=we(q,Z),fe!=null&&Ue.push(rs(q,fe,te))),qt)break;q=q.return}0<Ue.length&&(ae=new se(ae,Oe,null,l,ce),he.push({event:ae,listeners:Ue}))}}if((i&7)===0){e:{if(ae=n==="mouseover"||n==="pointerover",se=n==="mouseout"||n==="pointerout",ae&&l!==dr&&(Oe=l.relatedTarget||l.fromElement)&&(Ln(Oe)||Oe[un]))break e;if((se||ae)&&(ae=ce.window===ce?ce:(ae=ce.ownerDocument)?ae.defaultView||ae.parentWindow:window,se?(Oe=l.relatedTarget||l.toElement,se=X,Oe=Oe?Ln(Oe):null,Oe!==null&&(qt=I(Oe),Ue=Oe.tag,Oe!==qt||Ue!==5&&Ue!==27&&Ue!==6)&&(Oe=null)):(se=null,Oe=X),se!==Oe)){if(Ue=_p,fe="onMouseLeave",Z="onMouseEnter",q="mouse",(n==="pointerout"||n==="pointerover")&&(Ue=kp,fe="onPointerLeave",Z="onPointerEnter",q="pointer"),qt=se==null?ae:Zr(se),te=Oe==null?ae:Zr(Oe),ae=new Ue(fe,q+"leave",se,l,ce),ae.target=qt,ae.relatedTarget=te,fe=null,Ln(ce)===X&&(Ue=new Ue(Z,q+"enter",Oe,l,ce),Ue.target=te,Ue.relatedTarget=qt,fe=Ue),qt=fe,se&&Oe)t:{for(Ue=se,Z=Oe,q=0,te=Ue;te;te=Vo(te))q++;for(te=0,fe=Z;fe;fe=Vo(fe))te++;for(;0<q-te;)Ue=Vo(Ue),q--;for(;0<te-q;)Z=Vo(Z),te--;for(;q--;){if(Ue===Z||Z!==null&&Ue===Z.alternate)break t;Ue=Vo(Ue),Z=Vo(Z)}Ue=null}else Ue=null;se!==null&&vy(he,ae,se,Ue,!1),Oe!==null&&qt!==null&&vy(he,qt,Oe,Ue,!0)}}e:{if(ae=X?Zr(X):window,se=ae.nodeName&&ae.nodeName.toLowerCase(),se==="select"||se==="input"&&ae.type==="file")var Ae=Up;else if(Ip(ae))if(Gp)Ae=Wx;else{Ae=Gx;var nt=Ux}else se=ae.nodeName,!se||se.toLowerCase()!=="input"||ae.type!=="checkbox"&&ae.type!=="radio"?X&&Oi(X.elementType)&&(Ae=Up):Ae=qx;if(Ae&&(Ae=Ae(n,X))){Vp(he,Ae,l,ce);break e}nt&&nt(n,ae,X),n==="focusout"&&X&&ae.type==="number"&&X.memoizedProps.value!=null&&Va(ae,"number",ae.value)}switch(nt=X?Zr(X):window,n){case"focusin":(Ip(nt)||nt.contentEditable==="true")&&(Co=nt,jf=X,Ml=null);break;case"focusout":Ml=jf=Co=null;break;case"mousedown":Hf=!0;break;case"contextmenu":case"mouseup":case"dragend":Hf=!1,Zp(he,l,ce);break;case"selectionchange":if(Xx)break;case"keydown":case"keyup":Zp(he,l,ce)}var De;if(_f)e:{switch(n){case"compositionstart":var Le="onCompositionStart";break e;case"compositionend":Le="onCompositionEnd";break e;case"compositionupdate":Le="onCompositionUpdate";break e}Le=void 0}else So?Bp(n,l)&&(Le="onCompositionEnd"):n==="keydown"&&l.keyCode===229&&(Le="onCompositionStart");Le&&(Lp&&l.locale!=="ko"&&(So||Le!=="onCompositionStart"?Le==="onCompositionEnd"&&So&&(De=bo()):(At=ce,Dt="value"in At?At.value:At.textContent,So=!0)),nt=Xu(X,Le),0<nt.length&&(Le=new $p(Le,n,null,l,ce),he.push({event:Le,listeners:nt}),De?Le.data=De:(De=Fp(l),De!==null&&(Le.data=De)))),(De=Hx?Bx(n,l):Fx(n,l))&&(Le=Xu(X,"onBeforeInput"),0<Le.length&&(nt=new $p("onBeforeInput","beforeinput",null,l,ce),he.push({event:nt,listeners:Le}),nt.data=De)),P6(he,n,X,l,ce)}gy(he,i)})}function rs(n,i,l){return{instance:n,listener:i,currentTarget:l}}function Xu(n,i){for(var l=i+"Capture",u=[];n!==null;){var m=n,p=m.stateNode;m=m.tag,m!==5&&m!==26&&m!==27||p===null||(m=we(n,l),m!=null&&u.unshift(rs(n,m,p)),m=we(n,i),m!=null&&u.push(rs(n,m,p))),n=n.return}return u}function Vo(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function vy(n,i,l,u,m){for(var p=i._reactName,E=[];l!==null&&l!==u;){var D=l,L=D.alternate,X=D.stateNode;if(D=D.tag,L!==null&&L===u)break;D!==5&&D!==26&&D!==27||X===null||(L=X,m?(X=we(l,p),X!=null&&E.unshift(rs(l,X,L))):m||(X=we(l,p),X!=null&&E.push(rs(l,X,L)))),l=l.return}E.length!==0&&n.push({event:i,listeners:E})}var k6=/\r\n?/g,L6=/\u0000|\uFFFD/g;function yy(n){return(typeof n=="string"?n:""+n).replace(k6,`
`).replace(L6,"")}function by(n,i){return i=yy(i),yy(n)===i}function Ku(){}function Rt(n,i,l,u,m,p){switch(l){case"children":typeof u=="string"?i==="body"||i==="textarea"&&u===""||na(n,u):(typeof u=="number"||typeof u=="bigint")&&i!=="body"&&na(n,""+u);break;case"className":Nn(n,"class",u);break;case"tabIndex":Nn(n,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":Nn(n,l,u);break;case"style":qn(n,u,p);break;case"data":if(i!=="object"){Nn(n,"data",u);break}case"src":case"href":if(u===""&&(i!=="a"||l!=="href")){n.removeAttribute(l);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){n.removeAttribute(l);break}u=kr(""+u),n.setAttribute(l,u);break;case"action":case"formAction":if(typeof u=="function"){n.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof p=="function"&&(l==="formAction"?(i!=="input"&&Rt(n,i,"name",m.name,m,null),Rt(n,i,"formEncType",m.formEncType,m,null),Rt(n,i,"formMethod",m.formMethod,m,null),Rt(n,i,"formTarget",m.formTarget,m,null)):(Rt(n,i,"encType",m.encType,m,null),Rt(n,i,"method",m.method,m,null),Rt(n,i,"target",m.target,m,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){n.removeAttribute(l);break}u=kr(""+u),n.setAttribute(l,u);break;case"onClick":u!=null&&(n.onclick=Ku);break;case"onScroll":u!=null&&ct("scroll",n);break;case"onScrollEnd":u!=null&&ct("scrollend",n);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(a(61));if(l=u.__html,l!=null){if(m.children!=null)throw Error(a(60));n.innerHTML=l}}break;case"multiple":n.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":n.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){n.removeAttribute("xlink:href");break}l=kr(""+u),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(l,""+u):n.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(l,""):n.removeAttribute(l);break;case"capture":case"download":u===!0?n.setAttribute(l,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(l,u):n.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?n.setAttribute(l,u):n.removeAttribute(l);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?n.removeAttribute(l):n.setAttribute(l,u);break;case"popover":ct("beforetoggle",n),ct("toggle",n),va(n,"popover",u);break;case"xlinkActuate":Jt(n,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":Jt(n,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":Jt(n,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":Jt(n,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":Jt(n,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":Jt(n,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":Jt(n,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":Jt(n,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":Jt(n,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":va(n,"is",u);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=jn.get(l)||l,va(n,l,u))}}function sh(n,i,l,u,m,p){switch(l){case"style":qn(n,u,p);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(a(61));if(l=u.__html,l!=null){if(m.children!=null)throw Error(a(60));n.innerHTML=l}}break;case"children":typeof u=="string"?na(n,u):(typeof u=="number"||typeof u=="bigint")&&na(n,""+u);break;case"onScroll":u!=null&&ct("scroll",n);break;case"onScrollEnd":u!=null&&ct("scrollend",n);break;case"onClick":u!=null&&(n.onclick=Ku);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!co.hasOwnProperty(l))e:{if(l[0]==="o"&&l[1]==="n"&&(m=l.endsWith("Capture"),i=l.slice(2,m?l.length-7:void 0),p=n[bt]||null,p=p!=null?p[l]:null,typeof p=="function"&&n.removeEventListener(i,p,m),typeof u=="function")){typeof p!="function"&&p!==null&&(l in n?n[l]=null:n.hasAttribute(l)&&n.removeAttribute(l)),n.addEventListener(i,u,m);break e}l in n?n[l]=u:u===!0?n.setAttribute(l,""):va(n,l,u)}}}function Sn(n,i,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ct("error",n),ct("load",n);var u=!1,m=!1,p;for(p in l)if(l.hasOwnProperty(p)){var E=l[p];if(E!=null)switch(p){case"src":u=!0;break;case"srcSet":m=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Rt(n,i,p,E,l,null)}}m&&Rt(n,i,"srcSet",l.srcSet,l,null),u&&Rt(n,i,"src",l.src,l,null);return;case"input":ct("invalid",n);var D=p=E=m=null,L=null,X=null;for(u in l)if(l.hasOwnProperty(u)){var ce=l[u];if(ce!=null)switch(u){case"name":m=ce;break;case"type":E=ce;break;case"checked":L=ce;break;case"defaultChecked":X=ce;break;case"value":p=ce;break;case"defaultValue":D=ce;break;case"children":case"dangerouslySetInnerHTML":if(ce!=null)throw Error(a(137,i));break;default:Rt(n,i,u,ce,l,null)}}mo(n,p,D,L,X,E,m,!1),Fa(n);return;case"select":ct("invalid",n),u=E=p=null;for(m in l)if(l.hasOwnProperty(m)&&(D=l[m],D!=null))switch(m){case"value":p=D;break;case"defaultValue":E=D;break;case"multiple":u=D;default:Rt(n,i,m,D,l,null)}i=p,l=E,n.multiple=!!u,i!=null?ta(n,!!u,i,!1):l!=null&&ta(n,!!u,l,!0);return;case"textarea":ct("invalid",n),p=m=u=null;for(E in l)if(l.hasOwnProperty(E)&&(D=l[E],D!=null))switch(E){case"value":u=D;break;case"defaultValue":m=D;break;case"children":p=D;break;case"dangerouslySetInnerHTML":if(D!=null)throw Error(a(91));break;default:Rt(n,i,E,D,l,null)}Ri(n,u,m,p),Fa(n);return;case"option":for(L in l)if(l.hasOwnProperty(L)&&(u=l[L],u!=null))switch(L){case"selected":n.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:Rt(n,i,L,u,l,null)}return;case"dialog":ct("cancel",n),ct("close",n);break;case"iframe":case"object":ct("load",n);break;case"video":case"audio":for(u=0;u<ns.length;u++)ct(ns[u],n);break;case"image":ct("error",n),ct("load",n);break;case"details":ct("toggle",n);break;case"embed":case"source":case"link":ct("error",n),ct("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(X in l)if(l.hasOwnProperty(X)&&(u=l[X],u!=null))switch(X){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Rt(n,i,X,u,l,null)}return;default:if(Oi(i)){for(ce in l)l.hasOwnProperty(ce)&&(u=l[ce],u!==void 0&&sh(n,i,ce,u,l,void 0));return}}for(D in l)l.hasOwnProperty(D)&&(u=l[D],u!=null&&Rt(n,i,D,u,l,null))}function j6(n,i,l,u){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var m=null,p=null,E=null,D=null,L=null,X=null,ce=null;for(se in l){var he=l[se];if(l.hasOwnProperty(se)&&he!=null)switch(se){case"checked":break;case"value":break;case"defaultValue":L=he;default:u.hasOwnProperty(se)||Rt(n,i,se,null,u,he)}}for(var ae in u){var se=u[ae];if(he=l[ae],u.hasOwnProperty(ae)&&(se!=null||he!=null))switch(ae){case"type":p=se;break;case"name":m=se;break;case"checked":X=se;break;case"defaultChecked":ce=se;break;case"value":E=se;break;case"defaultValue":D=se;break;case"children":case"dangerouslySetInnerHTML":if(se!=null)throw Error(a(137,i));break;default:se!==he&&Rt(n,i,ae,se,u,he)}}Ti(n,E,D,L,X,ce,p,m);return;case"select":se=E=D=ae=null;for(p in l)if(L=l[p],l.hasOwnProperty(p)&&L!=null)switch(p){case"value":break;case"multiple":se=L;default:u.hasOwnProperty(p)||Rt(n,i,p,null,u,L)}for(m in u)if(p=u[m],L=l[m],u.hasOwnProperty(m)&&(p!=null||L!=null))switch(m){case"value":ae=p;break;case"defaultValue":D=p;break;case"multiple":E=p;default:p!==L&&Rt(n,i,m,p,u,L)}i=D,l=E,u=se,ae!=null?ta(n,!!l,ae,!1):!!u!=!!l&&(i!=null?ta(n,!!l,i,!0):ta(n,!!l,l?[]:"",!1));return;case"textarea":se=ae=null;for(D in l)if(m=l[D],l.hasOwnProperty(D)&&m!=null&&!u.hasOwnProperty(D))switch(D){case"value":break;case"children":break;default:Rt(n,i,D,null,u,m)}for(E in u)if(m=u[E],p=l[E],u.hasOwnProperty(E)&&(m!=null||p!=null))switch(E){case"value":ae=m;break;case"defaultValue":se=m;break;case"children":break;case"dangerouslySetInnerHTML":if(m!=null)throw Error(a(91));break;default:m!==p&&Rt(n,i,E,m,u,p)}go(n,ae,se);return;case"option":for(var Oe in l)if(ae=l[Oe],l.hasOwnProperty(Oe)&&ae!=null&&!u.hasOwnProperty(Oe))switch(Oe){case"selected":n.selected=!1;break;default:Rt(n,i,Oe,null,u,ae)}for(L in u)if(ae=u[L],se=l[L],u.hasOwnProperty(L)&&ae!==se&&(ae!=null||se!=null))switch(L){case"selected":n.selected=ae&&typeof ae!="function"&&typeof ae!="symbol";break;default:Rt(n,i,L,ae,u,se)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Ue in l)ae=l[Ue],l.hasOwnProperty(Ue)&&ae!=null&&!u.hasOwnProperty(Ue)&&Rt(n,i,Ue,null,u,ae);for(X in u)if(ae=u[X],se=l[X],u.hasOwnProperty(X)&&ae!==se&&(ae!=null||se!=null))switch(X){case"children":case"dangerouslySetInnerHTML":if(ae!=null)throw Error(a(137,i));break;default:Rt(n,i,X,ae,u,se)}return;default:if(Oi(i)){for(var qt in l)ae=l[qt],l.hasOwnProperty(qt)&&ae!==void 0&&!u.hasOwnProperty(qt)&&sh(n,i,qt,void 0,u,ae);for(ce in u)ae=u[ce],se=l[ce],!u.hasOwnProperty(ce)||ae===se||ae===void 0&&se===void 0||sh(n,i,ce,ae,u,se);return}}for(var Z in l)ae=l[Z],l.hasOwnProperty(Z)&&ae!=null&&!u.hasOwnProperty(Z)&&Rt(n,i,Z,null,u,ae);for(he in u)ae=u[he],se=l[he],!u.hasOwnProperty(he)||ae===se||ae==null&&se==null||Rt(n,i,he,ae,u,se)}var uh=null,ch=null;function Qu(n){return n.nodeType===9?n:n.ownerDocument}function Sy(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Cy(n,i){if(n===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&i==="foreignObject"?0:n}function fh(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var dh=null;function H6(){var n=window.event;return n&&n.type==="popstate"?n===dh?!1:(dh=n,!0):(dh=null,!1)}var wy=typeof setTimeout=="function"?setTimeout:void 0,B6=typeof clearTimeout=="function"?clearTimeout:void 0,xy=typeof Promise=="function"?Promise:void 0,F6=typeof queueMicrotask=="function"?queueMicrotask:typeof xy<"u"?function(n){return xy.resolve(null).then(n).catch(I6)}:wy;function I6(n){setTimeout(function(){throw n})}function hh(n,i){var l=i,u=0;do{var m=l.nextSibling;if(n.removeChild(l),m&&m.nodeType===8)if(l=m.data,l==="/$"){if(u===0){n.removeChild(m),fs(i);return}u--}else l!=="$"&&l!=="$?"&&l!=="$!"||u++;l=m}while(l);fs(i)}function mh(n){var i=n.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var l=i;switch(i=i.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":mh(l),Gn(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}n.removeChild(l)}}function V6(n,i,l,u){for(;n.nodeType===1;){var m=l;if(n.nodeName.toLowerCase()!==i.toLowerCase()){if(!u&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(u){if(!n[kn])switch(i){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(p=n.getAttribute("rel"),p==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(p!==m.rel||n.getAttribute("href")!==(m.href==null?null:m.href)||n.getAttribute("crossorigin")!==(m.crossOrigin==null?null:m.crossOrigin)||n.getAttribute("title")!==(m.title==null?null:m.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(p=n.getAttribute("src"),(p!==(m.src==null?null:m.src)||n.getAttribute("type")!==(m.type==null?null:m.type)||n.getAttribute("crossorigin")!==(m.crossOrigin==null?null:m.crossOrigin))&&p&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(i==="input"&&n.type==="hidden"){var p=m.name==null?null:""+m.name;if(m.type==="hidden"&&n.getAttribute("name")===p)return n}else return n;if(n=Fr(n.nextSibling),n===null)break}return null}function U6(n,i,l){if(i==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!l||(n=Fr(n.nextSibling),n===null))return null;return n}function Fr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return n}function Ey(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var l=n.data;if(l==="$"||l==="$!"||l==="$?"){if(i===0)return n;i--}else l==="/$"&&i++}n=n.previousSibling}return null}function Ay(n,i,l){switch(i=Qu(l),n){case"html":if(n=i.documentElement,!n)throw Error(a(452));return n;case"head":if(n=i.head,!n)throw Error(a(453));return n;case"body":if(n=i.body,!n)throw Error(a(454));return n;default:throw Error(a(451))}}var Er=new Map,Ty=new Set;function Zu(n){return typeof n.getRootNode=="function"?n.getRootNode():n.ownerDocument}var $a=H.d;H.d={f:G6,r:q6,D:W6,C:J6,L:Y6,m:X6,X:Q6,S:K6,M:Z6};function G6(){var n=$a.f(),i=Gu();return n||i}function q6(n){var i=ft(n);i!==null&&i.tag===5&&i.type==="form"?Z0(i):$a.r(n)}var Uo=typeof document>"u"?null:document;function Ry(n,i,l){var u=Uo;if(u&&typeof i=="string"&&i){var m=xn(i);m='link[rel="'+n+'"][href="'+m+'"]',typeof l=="string"&&(m+='[crossorigin="'+l+'"]'),Ty.has(m)||(Ty.add(m),n={rel:n,crossOrigin:l,href:i},u.querySelector(m)===null&&(i=u.createElement("link"),Sn(i,"link",n),Nt(i),u.head.appendChild(i)))}}function W6(n){$a.D(n),Ry("dns-prefetch",n,null)}function J6(n,i){$a.C(n,i),Ry("preconnect",n,i)}function Y6(n,i,l){$a.L(n,i,l);var u=Uo;if(u&&n&&i){var m='link[rel="preload"][as="'+xn(i)+'"]';i==="image"&&l&&l.imageSrcSet?(m+='[imagesrcset="'+xn(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(m+='[imagesizes="'+xn(l.imageSizes)+'"]')):m+='[href="'+xn(n)+'"]';var p=m;switch(i){case"style":p=Go(n);break;case"script":p=qo(n)}Er.has(p)||(n=B({rel:"preload",href:i==="image"&&l&&l.imageSrcSet?void 0:n,as:i},l),Er.set(p,n),u.querySelector(m)!==null||i==="style"&&u.querySelector(as(p))||i==="script"&&u.querySelector(is(p))||(i=u.createElement("link"),Sn(i,"link",n),Nt(i),u.head.appendChild(i)))}}function X6(n,i){$a.m(n,i);var l=Uo;if(l&&n){var u=i&&typeof i.as=="string"?i.as:"script",m='link[rel="modulepreload"][as="'+xn(u)+'"][href="'+xn(n)+'"]',p=m;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":p=qo(n)}if(!Er.has(p)&&(n=B({rel:"modulepreload",href:n},i),Er.set(p,n),l.querySelector(m)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(is(p)))return}u=l.createElement("link"),Sn(u,"link",n),Nt(u),l.head.appendChild(u)}}}function K6(n,i,l){$a.S(n,i,l);var u=Uo;if(u&&n){var m=ea(u).hoistableStyles,p=Go(n);i=i||"default";var E=m.get(p);if(!E){var D={loading:0,preload:null};if(E=u.querySelector(as(p)))D.loading=5;else{n=B({rel:"stylesheet",href:n,"data-precedence":i},l),(l=Er.get(p))&&gh(n,l);var L=E=u.createElement("link");Nt(L),Sn(L,"link",n),L._p=new Promise(function(X,ce){L.onload=X,L.onerror=ce}),L.addEventListener("load",function(){D.loading|=1}),L.addEventListener("error",function(){D.loading|=2}),D.loading|=4,ec(E,i,u)}E={type:"stylesheet",instance:E,count:1,state:D},m.set(p,E)}}}function Q6(n,i){$a.X(n,i);var l=Uo;if(l&&n){var u=ea(l).hoistableScripts,m=qo(n),p=u.get(m);p||(p=l.querySelector(is(m)),p||(n=B({src:n,async:!0},i),(i=Er.get(m))&&ph(n,i),p=l.createElement("script"),Nt(p),Sn(p,"link",n),l.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},u.set(m,p))}}function Z6(n,i){$a.M(n,i);var l=Uo;if(l&&n){var u=ea(l).hoistableScripts,m=qo(n),p=u.get(m);p||(p=l.querySelector(is(m)),p||(n=B({src:n,async:!0,type:"module"},i),(i=Er.get(m))&&ph(n,i),p=l.createElement("script"),Nt(p),Sn(p,"link",n),l.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},u.set(m,p))}}function Oy(n,i,l,u){var m=(m=He.current)?Zu(m):null;if(!m)throw Error(a(446));switch(n){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(i=Go(l.href),l=ea(m).hoistableStyles,u=l.get(i),u||(u={type:"style",instance:null,count:0,state:null},l.set(i,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){n=Go(l.href);var p=ea(m).hoistableStyles,E=p.get(n);if(E||(m=m.ownerDocument||m,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},p.set(n,E),(p=m.querySelector(as(n)))&&!p._p&&(E.instance=p,E.state.loading=5),Er.has(n)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},Er.set(n,l),p||e3(m,n,l,E.state))),i&&u===null)throw Error(a(528,""));return E}if(i&&u!==null)throw Error(a(529,""));return null;case"script":return i=l.async,l=l.src,typeof l=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=qo(l),l=ea(m).hoistableScripts,u=l.get(i),u||(u={type:"script",instance:null,count:0,state:null},l.set(i,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,n))}}function Go(n){return'href="'+xn(n)+'"'}function as(n){return'link[rel="stylesheet"]['+n+"]"}function My(n){return B({},n,{"data-precedence":n.precedence,precedence:null})}function e3(n,i,l,u){n.querySelector('link[rel="preload"][as="style"]['+i+"]")?u.loading=1:(i=n.createElement("link"),u.preload=i,i.addEventListener("load",function(){return u.loading|=1}),i.addEventListener("error",function(){return u.loading|=2}),Sn(i,"link",l),Nt(i),n.head.appendChild(i))}function qo(n){return'[src="'+xn(n)+'"]'}function is(n){return"script[async]"+n}function Ny(n,i,l){if(i.count++,i.instance===null)switch(i.type){case"style":var u=n.querySelector('style[data-href~="'+xn(l.href)+'"]');if(u)return i.instance=u,Nt(u),u;var m=B({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return u=(n.ownerDocument||n).createElement("style"),Nt(u),Sn(u,"style",m),ec(u,l.precedence,n),i.instance=u;case"stylesheet":m=Go(l.href);var p=n.querySelector(as(m));if(p)return i.state.loading|=4,i.instance=p,Nt(p),p;u=My(l),(m=Er.get(m))&&gh(u,m),p=(n.ownerDocument||n).createElement("link"),Nt(p);var E=p;return E._p=new Promise(function(D,L){E.onload=D,E.onerror=L}),Sn(p,"link",u),i.state.loading|=4,ec(p,l.precedence,n),i.instance=p;case"script":return p=qo(l.src),(m=n.querySelector(is(p)))?(i.instance=m,Nt(m),m):(u=l,(m=Er.get(p))&&(u=B({},l),ph(u,m)),n=n.ownerDocument||n,m=n.createElement("script"),Nt(m),Sn(m,"link",u),n.head.appendChild(m),i.instance=m);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(u=i.instance,i.state.loading|=4,ec(u,l.precedence,n));return i.instance}function ec(n,i,l){for(var u=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),m=u.length?u[u.length-1]:null,p=m,E=0;E<u.length;E++){var D=u[E];if(D.dataset.precedence===i)p=D;else if(p!==m)break}p?p.parentNode.insertBefore(n,p.nextSibling):(i=l.nodeType===9?l.head:l,i.insertBefore(n,i.firstChild))}function gh(n,i){n.crossOrigin==null&&(n.crossOrigin=i.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=i.referrerPolicy),n.title==null&&(n.title=i.title)}function ph(n,i){n.crossOrigin==null&&(n.crossOrigin=i.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=i.referrerPolicy),n.integrity==null&&(n.integrity=i.integrity)}var tc=null;function Dy(n,i,l){if(tc===null){var u=new Map,m=tc=new Map;m.set(l,u)}else m=tc,u=m.get(l),u||(u=new Map,m.set(l,u));if(u.has(n))return u;for(u.set(n,null),l=l.getElementsByTagName(n),m=0;m<l.length;m++){var p=l[m];if(!(p[kn]||p[yt]||n==="link"&&p.getAttribute("rel")==="stylesheet")&&p.namespaceURI!=="http://www.w3.org/2000/svg"){var E=p.getAttribute(i)||"";E=n+E;var D=u.get(E);D?D.push(p):u.set(E,[p])}}return u}function Py(n,i,l){n=n.ownerDocument||n,n.head.insertBefore(l,i==="title"?n.querySelector("head > title"):null)}function t3(n,i,l){if(l===1||i.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return n=i.disabled,typeof i.precedence=="string"&&n==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function zy(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}var os=null;function n3(){}function r3(n,i,l){if(os===null)throw Error(a(475));var u=os;if(i.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var m=Go(l.href),p=n.querySelector(as(m));if(p){n=p._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(u.count++,u=nc.bind(u),n.then(u,u)),i.state.loading|=4,i.instance=p,Nt(p);return}p=n.ownerDocument||n,l=My(l),(m=Er.get(m))&&gh(l,m),p=p.createElement("link"),Nt(p);var E=p;E._p=new Promise(function(D,L){E.onload=D,E.onerror=L}),Sn(p,"link",l),i.instance=p}u.stylesheets===null&&(u.stylesheets=new Map),u.stylesheets.set(i,n),(n=i.state.preload)&&(i.state.loading&3)===0&&(u.count++,i=nc.bind(u),n.addEventListener("load",i),n.addEventListener("error",i))}}function a3(){if(os===null)throw Error(a(475));var n=os;return n.stylesheets&&n.count===0&&vh(n,n.stylesheets),0<n.count?function(i){var l=setTimeout(function(){if(n.stylesheets&&vh(n,n.stylesheets),n.unsuspend){var u=n.unsuspend;n.unsuspend=null,u()}},6e4);return n.unsuspend=i,function(){n.unsuspend=null,clearTimeout(l)}}:null}function nc(){if(this.count--,this.count===0){if(this.stylesheets)vh(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var rc=null;function vh(n,i){n.stylesheets=null,n.unsuspend!==null&&(n.count++,rc=new Map,i.forEach(i3,n),rc=null,nc.call(n))}function i3(n,i){if(!(i.state.loading&4)){var l=rc.get(n);if(l)var u=l.get(null);else{l=new Map,rc.set(n,l);for(var m=n.querySelectorAll("link[data-precedence],style[data-precedence]"),p=0;p<m.length;p++){var E=m[p];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(l.set(E.dataset.precedence,E),u=E)}u&&l.set(null,u)}m=i.instance,E=m.getAttribute("data-precedence"),p=l.get(E)||u,p===u&&l.set(null,m),l.set(E,m),this.count++,u=nc.bind(this),m.addEventListener("load",u),m.addEventListener("error",u),p?p.parentNode.insertBefore(m,p.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(m,n.firstChild)),i.state.loading|=4}}var ls={$$typeof:S,Provider:null,Consumer:null,_currentValue:le,_currentValue2:le,_threadCount:0};function o3(n,i,l,u,m,p,E,D){this.tag=1,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ot(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ot(0),this.hiddenUpdates=ot(null),this.identifierPrefix=u,this.onUncaughtError=m,this.onCaughtError=p,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=D,this.incompleteTransitions=new Map}function _y(n,i,l,u,m,p,E,D,L,X,ce,he){return n=new o3(n,i,l,E,D,L,X,he),i=1,p===!0&&(i|=24),p=wr(3,null,null,i),n.current=p,p.stateNode=n,i=Yf(),i.refCount++,n.pooledCache=i,i.refCount++,p.memoizedState={element:u,isDehydrated:l,cache:i},Md(p),n}function $y(n){return n?(n=Eo,n):Eo}function ky(n,i,l,u,m,p){m=$y(m),u.context===null?u.context=m:u.pendingContext=m,u=Qa(i),u.payload={element:l},p=p===void 0?null:p,p!==null&&(u.callback=p),l=Za(n,u,i),l!==null&&(Pn(l,n,i),Ul(l,n,i))}function Ly(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var l=n.retryLane;n.retryLane=l!==0&&l<i?l:i}}function yh(n,i){Ly(n,i),(n=n.alternate)&&Ly(n,i)}function jy(n){if(n.tag===13){var i=Ga(n,67108864);i!==null&&Pn(i,n,67108864),yh(n,67108864)}}var ac=!0;function l3(n,i,l,u){var m=$.T;$.T=null;var p=H.p;try{H.p=2,bh(n,i,l,u)}finally{H.p=p,$.T=m}}function s3(n,i,l,u){var m=$.T;$.T=null;var p=H.p;try{H.p=8,bh(n,i,l,u)}finally{H.p=p,$.T=m}}function bh(n,i,l,u){if(ac){var m=Sh(u);if(m===null)lh(n,i,u,ic,l),By(n,u);else if(c3(m,n,i,l,u))u.stopPropagation();else if(By(n,u),i&4&&-1<u3.indexOf(n)){for(;m!==null;){var p=ft(m);if(p!==null)switch(p.tag){case 3:if(p=p.stateNode,p.current.memoizedState.isDehydrated){var E=Qt(p.pendingLanes);if(E!==0){var D=p;for(D.pendingLanes|=2,D.entangledLanes|=2;E;){var L=1<<31-Ze(E);D.entanglements[1]|=L,E&=~L}la(p),(Bt&6)===0&&(Iu=Te()+500,ts(0))}}break;case 13:D=Ga(p,2),D!==null&&Pn(D,p,2),Gu(),yh(p,2)}if(p=Sh(u),p===null&&lh(n,i,u,ic,l),p===m)break;m=p}m!==null&&u.stopPropagation()}else lh(n,i,u,null,l)}}function Sh(n){return n=hr(n),Ch(n)}var ic=null;function Ch(n){if(ic=null,n=Ln(n),n!==null){var i=I(n);if(i===null)n=null;else{var l=i.tag;if(l===13){if(n=ne(i),n!==null)return n;n=null}else if(l===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null)}}return ic=n,null}function Hy(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(qe()){case re:return 2;case de:return 8;case Se:case Ne:return 32;case Re:return 268435456;default:return 32}default:return 32}}var wh=!1,oi=null,li=null,si=null,ss=new Map,us=new Map,ui=[],u3="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function By(n,i){switch(n){case"focusin":case"focusout":oi=null;break;case"dragenter":case"dragleave":li=null;break;case"mouseover":case"mouseout":si=null;break;case"pointerover":case"pointerout":ss.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":us.delete(i.pointerId)}}function cs(n,i,l,u,m,p){return n===null||n.nativeEvent!==p?(n={blockedOn:i,domEventName:l,eventSystemFlags:u,nativeEvent:p,targetContainers:[m]},i!==null&&(i=ft(i),i!==null&&jy(i)),n):(n.eventSystemFlags|=u,i=n.targetContainers,m!==null&&i.indexOf(m)===-1&&i.push(m),n)}function c3(n,i,l,u,m){switch(i){case"focusin":return oi=cs(oi,n,i,l,u,m),!0;case"dragenter":return li=cs(li,n,i,l,u,m),!0;case"mouseover":return si=cs(si,n,i,l,u,m),!0;case"pointerover":var p=m.pointerId;return ss.set(p,cs(ss.get(p)||null,n,i,l,u,m)),!0;case"gotpointercapture":return p=m.pointerId,us.set(p,cs(us.get(p)||null,n,i,l,u,m)),!0}return!1}function Fy(n){var i=Ln(n.target);if(i!==null){var l=I(i);if(l!==null){if(i=l.tag,i===13){if(i=ne(l),i!==null){n.blockedOn=i,Ct(n.priority,function(){if(l.tag===13){var u=Kn(),m=Ga(l,u);m!==null&&Pn(m,l,u),yh(l,u)}});return}}else if(i===3&&l.stateNode.current.memoizedState.isDehydrated){n.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}n.blockedOn=null}function oc(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var l=Sh(n.nativeEvent);if(l===null){l=n.nativeEvent;var u=new l.constructor(l.type,l);dr=u,l.target.dispatchEvent(u),dr=null}else return i=ft(l),i!==null&&jy(i),n.blockedOn=l,!1;i.shift()}return!0}function Iy(n,i,l){oc(n)&&l.delete(i)}function f3(){wh=!1,oi!==null&&oc(oi)&&(oi=null),li!==null&&oc(li)&&(li=null),si!==null&&oc(si)&&(si=null),ss.forEach(Iy),us.forEach(Iy)}function lc(n,i){n.blockedOn===i&&(n.blockedOn=null,wh||(wh=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,f3)))}var sc=null;function Vy(n){sc!==n&&(sc=n,e.unstable_scheduleCallback(e.unstable_NormalPriority,function(){sc===n&&(sc=null);for(var i=0;i<n.length;i+=3){var l=n[i],u=n[i+1],m=n[i+2];if(typeof u!="function"){if(Ch(u||l)===null)continue;break}var p=ft(l);p!==null&&(n.splice(i,3),i-=3,fd(p,{pending:!0,data:m,method:l.method,action:u},u,m))}}))}function fs(n){function i(L){return lc(L,n)}oi!==null&&lc(oi,n),li!==null&&lc(li,n),si!==null&&lc(si,n),ss.forEach(i),us.forEach(i);for(var l=0;l<ui.length;l++){var u=ui[l];u.blockedOn===n&&(u.blockedOn=null)}for(;0<ui.length&&(l=ui[0],l.blockedOn===null);)Fy(l),l.blockedOn===null&&ui.shift();if(l=(n.ownerDocument||n).$$reactFormReplay,l!=null)for(u=0;u<l.length;u+=3){var m=l[u],p=l[u+1],E=m[bt]||null;if(typeof p=="function")E||Vy(l);else if(E){var D=null;if(p&&p.hasAttribute("formAction")){if(m=p,E=p[bt]||null)D=E.formAction;else if(Ch(m)!==null)continue}else D=E.action;typeof D=="function"?l[u+1]=D:(l.splice(u,3),u-=3),Vy(l)}}}function xh(n){this._internalRoot=n}uc.prototype.render=xh.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(a(409));var l=i.current,u=Kn();ky(l,u,n,i,null,null)},uc.prototype.unmount=xh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;n.tag===0&&Fo(),ky(n.current,2,null,n,null,null),Gu(),i[un]=null}};function uc(n){this._internalRoot=n}uc.prototype.unstable_scheduleHydration=function(n){if(n){var i=Qr();n={blockedOn:null,target:n,priority:i};for(var l=0;l<ui.length&&i!==0&&i<ui[l].priority;l++);ui.splice(l,0,n),l===0&&Fy(n)}};var Uy=t.version;if(Uy!=="19.0.0")throw Error(a(527,Uy,"19.0.0"));H.findDOMNode=function(n){var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(a(188)):(n=Object.keys(n).join(","),Error(a(268,n)));return n=F(i),n=n!==null?Q(n):null,n=n===null?null:n.stateNode,n};var d3={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:$,findFiberByHostInstance:Ln,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cc.isDisabled&&cc.supportsFiber)try{$e=cc.inject(d3),xe=cc}catch{}}return hs.createRoot=function(n,i){if(!o(n))throw Error(a(299));var l=!1,u="",m=lv,p=sv,E=uv,D=null;return i!=null&&(i.unstable_strictMode===!0&&(l=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onUncaughtError!==void 0&&(m=i.onUncaughtError),i.onCaughtError!==void 0&&(p=i.onCaughtError),i.onRecoverableError!==void 0&&(E=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(D=i.unstable_transitionCallbacks)),i=_y(n,1,!1,null,null,l,u,m,p,E,D,null),n[un]=i.current,oh(n.nodeType===8?n.parentNode:n),new xh(i)},hs.hydrateRoot=function(n,i,l){if(!o(n))throw Error(a(299));var u=!1,m="",p=lv,E=sv,D=uv,L=null,X=null;return l!=null&&(l.unstable_strictMode===!0&&(u=!0),l.identifierPrefix!==void 0&&(m=l.identifierPrefix),l.onUncaughtError!==void 0&&(p=l.onUncaughtError),l.onCaughtError!==void 0&&(E=l.onCaughtError),l.onRecoverableError!==void 0&&(D=l.onRecoverableError),l.unstable_transitionCallbacks!==void 0&&(L=l.unstable_transitionCallbacks),l.formState!==void 0&&(X=l.formState)),i=_y(n,1,!0,i,l??null,u,m,p,E,D,L,X),i.context=$y(null),l=i.current,u=Kn(),m=Qa(u),m.callback=null,Za(l,m,u),i.current.lanes=u,Lt(i,u),la(i),n[un]=i.current,oh(n),new uc(i)},hs.version="19.0.0",hs}var e1;function x3(){if(e1)return Th.exports;e1=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),Th.exports=w3(),Th.exports}var E3=x3(),ms={},t1;function A3(){if(t1)return ms;t1=1,Object.defineProperty(ms,"__esModule",{value:!0}),ms.parse=c,ms.serialize=d;const e=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,t=/^[\u0021-\u003A\u003C-\u007E]*$/,r=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,a=/^[\u0020-\u003A\u003D-\u007E]*$/,o=Object.prototype.toString,s=(()=>{const y=function(){};return y.prototype=Object.create(null),y})();function c(y,S){const w=new s,A=y.length;if(A<2)return w;const x=(S==null?void 0:S.decode)||g;let T=0;do{const R=y.indexOf("=",T);if(R===-1)break;const O=y.indexOf(";",T),j=O===-1?A:O;if(R>j){T=y.lastIndexOf(";",R-1)+1;continue}const z=f(y,T,R),N=h(y,R,z),_=y.slice(z,N);if(w[_]===void 0){let J=f(y,R+1,j),$=h(y,j,J);const B=x(y.slice(J,$));w[_]=B}T=j+1}while(T<A);return w}function f(y,S,w){do{const A=y.charCodeAt(S);if(A!==32&&A!==9)return S}while(++S<w);return w}function h(y,S,w){for(;S>w;){const A=y.charCodeAt(--S);if(A!==32&&A!==9)return S+1}return w}function d(y,S,w){const A=(w==null?void 0:w.encode)||encodeURIComponent;if(!e.test(y))throw new TypeError(`argument name is invalid: ${y}`);const x=A(S);if(!t.test(x))throw new TypeError(`argument val is invalid: ${S}`);let T=y+"="+x;if(!w)return T;if(w.maxAge!==void 0){if(!Number.isInteger(w.maxAge))throw new TypeError(`option maxAge is invalid: ${w.maxAge}`);T+="; Max-Age="+w.maxAge}if(w.domain){if(!r.test(w.domain))throw new TypeError(`option domain is invalid: ${w.domain}`);T+="; Domain="+w.domain}if(w.path){if(!a.test(w.path))throw new TypeError(`option path is invalid: ${w.path}`);T+="; Path="+w.path}if(w.expires){if(!v(w.expires)||!Number.isFinite(w.expires.valueOf()))throw new TypeError(`option expires is invalid: ${w.expires}`);T+="; Expires="+w.expires.toUTCString()}if(w.httpOnly&&(T+="; HttpOnly"),w.secure&&(T+="; Secure"),w.partitioned&&(T+="; Partitioned"),w.priority)switch(typeof w.priority=="string"?w.priority.toLowerCase():void 0){case"low":T+="; Priority=Low";break;case"medium":T+="; Priority=Medium";break;case"high":T+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${w.priority}`)}if(w.sameSite)switch(typeof w.sameSite=="string"?w.sameSite.toLowerCase():w.sameSite){case!0:case"strict":T+="; SameSite=Strict";break;case"lax":T+="; SameSite=Lax";break;case"none":T+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${w.sameSite}`)}return T}function g(y){if(y.indexOf("%")===-1)return y;try{return decodeURIComponent(y)}catch{return y}}function v(y){return o.call(y)==="[object Date]"}return ms}A3();/**
 * react-router v7.4.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var n1="popstate";function T3(e={}){function t(o,s){let{pathname:c="/",search:f="",hash:h=""}=ao(o.location.hash.substring(1));return!c.startsWith("/")&&!c.startsWith(".")&&(c="/"+c),bm("",{pathname:c,search:f,hash:h},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function r(o,s){let c=o.document.querySelector("base"),f="";if(c&&c.getAttribute("href")){let h=o.location.href,d=h.indexOf("#");f=d===-1?h:h.slice(0,d)}return f+"#"+(typeof s=="string"?s:_s(s))}function a(o,s){qr(o.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(s)})`)}return O3(t,r,a,e)}function Ft(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function qr(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function R3(){return Math.random().toString(36).substring(2,10)}function r1(e,t){return{usr:e.state,key:e.key,idx:t}}function bm(e,t,r=null,a){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?ao(t):t,state:r,key:t&&t.key||a||R3()}}function _s({pathname:e="/",search:t="",hash:r=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function ao(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substring(r),e=e.substring(0,r));let a=e.indexOf("?");a>=0&&(t.search=e.substring(a),e=e.substring(0,a)),e&&(t.pathname=e)}return t}function O3(e,t,r,a={}){let{window:o=document.defaultView,v5Compat:s=!1}=a,c=o.history,f="POP",h=null,d=g();d==null&&(d=0,c.replaceState({...c.state,idx:d},""));function g(){return(c.state||{idx:null}).idx}function v(){f="POP";let x=g(),T=x==null?null:x-d;d=x,h&&h({action:f,location:A.location,delta:T})}function y(x,T){f="PUSH";let R=bm(A.location,x,T);r&&r(R,x),d=g()+1;let O=r1(R,d),j=A.createHref(R);try{c.pushState(O,"",j)}catch(z){if(z instanceof DOMException&&z.name==="DataCloneError")throw z;o.location.assign(j)}s&&h&&h({action:f,location:A.location,delta:1})}function S(x,T){f="REPLACE";let R=bm(A.location,x,T);r&&r(R,x),d=g();let O=r1(R,d),j=A.createHref(R);c.replaceState(O,"",j),s&&h&&h({action:f,location:A.location,delta:0})}function w(x){let T=o.location.origin!=="null"?o.location.origin:o.location.href,R=typeof x=="string"?x:_s(x);return R=R.replace(/ $/,"%20"),Ft(T,`No window.location.(origin|href) available to create URL for href: ${R}`),new URL(R,T)}let A={get action(){return f},get location(){return e(o,c)},listen(x){if(h)throw new Error("A history only accepts one active listener");return o.addEventListener(n1,v),h=x,()=>{o.removeEventListener(n1,v),h=null}},createHref(x){return t(o,x)},createURL:w,encodeLocation(x){let T=w(x);return{pathname:T.pathname,search:T.search,hash:T.hash}},push:y,replace:S,go(x){return c.go(x)}};return A}function $2(e,t,r="/"){return M3(e,t,r,!1)}function M3(e,t,r,a){let o=typeof t=="string"?ao(t):t,s=ja(o.pathname||"/",r);if(s==null)return null;let c=k2(e);N3(c);let f=null;for(let h=0;f==null&&h<c.length;++h){let d=F3(s);f=H3(c[h],d,a)}return f}function k2(e,t=[],r=[],a=""){let o=(s,c,f)=>{let h={relativePath:f===void 0?s.path||"":f,caseSensitive:s.caseSensitive===!0,childrenIndex:c,route:s};h.relativePath.startsWith("/")&&(Ft(h.relativePath.startsWith(a),`Absolute route path "${h.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),h.relativePath=h.relativePath.slice(a.length));let d=ka([a,h.relativePath]),g=r.concat(h);s.children&&s.children.length>0&&(Ft(s.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${d}".`),k2(s.children,t,g,d)),!(s.path==null&&!s.index)&&t.push({path:d,score:L3(d,s.index),routesMeta:g})};return e.forEach((s,c)=>{var f;if(s.path===""||!((f=s.path)!=null&&f.includes("?")))o(s,c);else for(let h of L2(s.path))o(s,c,h)}),t}function L2(e){let t=e.split("/");if(t.length===0)return[];let[r,...a]=t,o=r.endsWith("?"),s=r.replace(/\?$/,"");if(a.length===0)return o?[s,""]:[s];let c=L2(a.join("/")),f=[];return f.push(...c.map(h=>h===""?s:[s,h].join("/"))),o&&f.push(...c),f.map(h=>e.startsWith("/")&&h===""?"/":h)}function N3(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:j3(t.routesMeta.map(a=>a.childrenIndex),r.routesMeta.map(a=>a.childrenIndex)))}var D3=/^:[\w-]+$/,P3=3,z3=2,_3=1,$3=10,k3=-2,a1=e=>e==="*";function L3(e,t){let r=e.split("/"),a=r.length;return r.some(a1)&&(a+=k3),t&&(a+=z3),r.filter(o=>!a1(o)).reduce((o,s)=>o+(D3.test(s)?P3:s===""?_3:$3),a)}function j3(e,t){return e.length===t.length&&e.slice(0,-1).every((a,o)=>a===t[o])?e[e.length-1]-t[t.length-1]:0}function H3(e,t,r=!1){let{routesMeta:a}=e,o={},s="/",c=[];for(let f=0;f<a.length;++f){let h=a[f],d=f===a.length-1,g=s==="/"?t:t.slice(s.length)||"/",v=Bc({path:h.relativePath,caseSensitive:h.caseSensitive,end:d},g),y=h.route;if(!v&&d&&r&&!a[a.length-1].route.index&&(v=Bc({path:h.relativePath,caseSensitive:h.caseSensitive,end:!1},g)),!v)return null;Object.assign(o,v.params),c.push({params:o,pathname:ka([s,v.pathname]),pathnameBase:G3(ka([s,v.pathnameBase])),route:y}),v.pathnameBase!=="/"&&(s=ka([s,v.pathnameBase]))}return c}function Bc(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,a]=B3(e.path,e.caseSensitive,e.end),o=t.match(r);if(!o)return null;let s=o[0],c=s.replace(/(.)\/+$/,"$1"),f=o.slice(1);return{params:a.reduce((d,{paramName:g,isOptional:v},y)=>{if(g==="*"){let w=f[y]||"";c=s.slice(0,s.length-w.length).replace(/(.)\/+$/,"$1")}const S=f[y];return v&&!S?d[g]=void 0:d[g]=(S||"").replace(/%2F/g,"/"),d},{}),pathname:s,pathnameBase:c,pattern:e}}function B3(e,t=!1,r=!0){qr(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let a=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,f,h)=>(a.push({paramName:f,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(a.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),a]}function F3(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return qr(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function ja(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,a=e.charAt(r);return a&&a!=="/"?null:e.slice(r)||"/"}function I3(e,t="/"){let{pathname:r,search:a="",hash:o=""}=typeof e=="string"?ao(e):e;return{pathname:r?r.startsWith("/")?r:V3(r,t):t,search:q3(a),hash:W3(o)}}function V3(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?r.length>1&&r.pop():o!=="."&&r.push(o)}),r.length>1?r.join("/"):"/"}function Nh(e,t,r,a){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(a)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function U3(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function j2(e){let t=U3(e);return t.map((r,a)=>a===t.length-1?r.pathname:r.pathnameBase)}function H2(e,t,r,a=!1){let o;typeof e=="string"?o=ao(e):(o={...e},Ft(!o.pathname||!o.pathname.includes("?"),Nh("?","pathname","search",o)),Ft(!o.pathname||!o.pathname.includes("#"),Nh("#","pathname","hash",o)),Ft(!o.search||!o.search.includes("#"),Nh("#","search","hash",o)));let s=e===""||o.pathname==="",c=s?"/":o.pathname,f;if(c==null)f=r;else{let v=t.length-1;if(!a&&c.startsWith("..")){let y=c.split("/");for(;y[0]==="..";)y.shift(),v-=1;o.pathname=y.join("/")}f=v>=0?t[v]:"/"}let h=I3(o,f),d=c&&c!=="/"&&c.endsWith("/"),g=(s||c===".")&&r.endsWith("/");return!h.pathname.endsWith("/")&&(d||g)&&(h.pathname+="/"),h}var ka=e=>e.join("/").replace(/\/\/+/g,"/"),G3=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),q3=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,W3=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function J3(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var B2=["POST","PUT","PATCH","DELETE"];new Set(B2);var Y3=["GET",...B2];new Set(Y3);var ml=b.createContext(null);ml.displayName="DataRouter";var tf=b.createContext(null);tf.displayName="DataRouterState";var F2=b.createContext({isTransitioning:!1});F2.displayName="ViewTransition";var X3=b.createContext(new Map);X3.displayName="Fetchers";var K3=b.createContext(null);K3.displayName="Await";var ma=b.createContext(null);ma.displayName="Navigation";var Xs=b.createContext(null);Xs.displayName="Location";var ga=b.createContext({outlet:null,matches:[],isDataRoute:!1});ga.displayName="Route";var Fg=b.createContext(null);Fg.displayName="RouteError";function Q3(e,{relative:t}={}){Ft(Ks(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:a}=b.useContext(ma),{hash:o,pathname:s,search:c}=Qs(e,{relative:t}),f=s;return r!=="/"&&(f=s==="/"?r:ka([r,s])),a.createHref({pathname:f,search:c,hash:o})}function Ks(){return b.useContext(Xs)!=null}function io(){return Ft(Ks(),"useLocation() may be used only in the context of a <Router> component."),b.useContext(Xs).location}var I2="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function V2(e){b.useContext(ma).static||b.useLayoutEffect(e)}function oo(){let{isDataRoute:e}=b.useContext(ga);return e?fE():Z3()}function Z3(){Ft(Ks(),"useNavigate() may be used only in the context of a <Router> component.");let e=b.useContext(ml),{basename:t,navigator:r}=b.useContext(ma),{matches:a}=b.useContext(ga),{pathname:o}=io(),s=JSON.stringify(j2(a)),c=b.useRef(!1);return V2(()=>{c.current=!0}),b.useCallback((h,d={})=>{if(qr(c.current,I2),!c.current)return;if(typeof h=="number"){r.go(h);return}let g=H2(h,JSON.parse(s),o,d.relative==="path");e==null&&t!=="/"&&(g.pathname=g.pathname==="/"?t:ka([t,g.pathname])),(d.replace?r.replace:r.push)(g,d.state,d)},[t,r,s,o,e])}b.createContext(null);function U2(){let{matches:e}=b.useContext(ga),t=e[e.length-1];return t?t.params:{}}function Qs(e,{relative:t}={}){let{matches:r}=b.useContext(ga),{pathname:a}=io(),o=JSON.stringify(j2(r));return b.useMemo(()=>H2(e,JSON.parse(o),a,t==="path"),[e,o,a,t])}function eE(e,t){return G2(e,t)}function G2(e,t,r,a){var R;Ft(Ks(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o,static:s}=b.useContext(ma),{matches:c}=b.useContext(ga),f=c[c.length-1],h=f?f.params:{},d=f?f.pathname:"/",g=f?f.pathnameBase:"/",v=f&&f.route;{let O=v&&v.path||"";q2(d,!v||O.endsWith("*")||O.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${d}" (under <Route path="${O}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${O}"> to <Route path="${O==="/"?"*":`${O}/*`}">.`)}let y=io(),S;if(t){let O=typeof t=="string"?ao(t):t;Ft(g==="/"||((R=O.pathname)==null?void 0:R.startsWith(g)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${O.pathname}" was given in the \`location\` prop.`),S=O}else S=y;let w=S.pathname||"/",A=w;if(g!=="/"){let O=g.replace(/^\//,"").split("/");A="/"+w.replace(/^\//,"").split("/").slice(O.length).join("/")}let x=!s&&r&&r.matches&&r.matches.length>0?r.matches:$2(e,{pathname:A});qr(v||x!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),qr(x==null||x[x.length-1].route.element!==void 0||x[x.length-1].route.Component!==void 0||x[x.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let T=iE(x&&x.map(O=>Object.assign({},O,{params:Object.assign({},h,O.params),pathname:ka([g,o.encodeLocation?o.encodeLocation(O.pathname).pathname:O.pathname]),pathnameBase:O.pathnameBase==="/"?g:ka([g,o.encodeLocation?o.encodeLocation(O.pathnameBase).pathname:O.pathnameBase])})),c,r,a);return t&&T?b.createElement(Xs.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...S},navigationType:"POP"}},T):T}function tE(){let e=cE(),t=J3(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,a="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:a},s={padding:"2px 4px",backgroundColor:a},c=null;return console.error("Error handled by React Router default ErrorBoundary:",e),c=b.createElement(b.Fragment,null,b.createElement("p",null,"💿 Hey developer 👋"),b.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",b.createElement("code",{style:s},"ErrorBoundary")," or"," ",b.createElement("code",{style:s},"errorElement")," prop on your route.")),b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},t),r?b.createElement("pre",{style:o},r):null,c)}var nE=b.createElement(tE,null),rE=class extends b.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?b.createElement(ga.Provider,{value:this.props.routeContext},b.createElement(Fg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function aE({routeContext:e,match:t,children:r}){let a=b.useContext(ml);return a&&a.static&&a.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=t.route.id),b.createElement(ga.Provider,{value:e},r)}function iE(e,t=[],r=null,a=null){if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let o=e,s=r==null?void 0:r.errors;if(s!=null){let h=o.findIndex(d=>d.route.id&&(s==null?void 0:s[d.route.id])!==void 0);Ft(h>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(s).join(",")}`),o=o.slice(0,Math.min(o.length,h+1))}let c=!1,f=-1;if(r)for(let h=0;h<o.length;h++){let d=o[h];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(f=h),d.route.id){let{loaderData:g,errors:v}=r,y=d.route.loader&&!g.hasOwnProperty(d.route.id)&&(!v||v[d.route.id]===void 0);if(d.route.lazy||y){c=!0,f>=0?o=o.slice(0,f+1):o=[o[0]];break}}}return o.reduceRight((h,d,g)=>{let v,y=!1,S=null,w=null;r&&(v=s&&d.route.id?s[d.route.id]:void 0,S=d.route.errorElement||nE,c&&(f<0&&g===0?(q2("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),y=!0,w=null):f===g&&(y=!0,w=d.route.hydrateFallbackElement||null)));let A=t.concat(o.slice(0,g+1)),x=()=>{let T;return v?T=S:y?T=w:d.route.Component?T=b.createElement(d.route.Component,null):d.route.element?T=d.route.element:T=h,b.createElement(aE,{match:d,routeContext:{outlet:h,matches:A,isDataRoute:r!=null},children:T})};return r&&(d.route.ErrorBoundary||d.route.errorElement||g===0)?b.createElement(rE,{location:r.location,revalidation:r.revalidation,component:S,error:v,children:x(),routeContext:{outlet:null,matches:A,isDataRoute:!0}}):x()},null)}function Ig(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function oE(e){let t=b.useContext(ml);return Ft(t,Ig(e)),t}function lE(e){let t=b.useContext(tf);return Ft(t,Ig(e)),t}function sE(e){let t=b.useContext(ga);return Ft(t,Ig(e)),t}function Vg(e){let t=sE(e),r=t.matches[t.matches.length-1];return Ft(r.route.id,`${e} can only be used on routes that contain a unique "id"`),r.route.id}function uE(){return Vg("useRouteId")}function cE(){var a;let e=b.useContext(Fg),t=lE("useRouteError"),r=Vg("useRouteError");return e!==void 0?e:(a=t.errors)==null?void 0:a[r]}function fE(){let{router:e}=oE("useNavigate"),t=Vg("useNavigate"),r=b.useRef(!1);return V2(()=>{r.current=!0}),b.useCallback(async(o,s={})=>{qr(r.current,I2),r.current&&(typeof o=="number"?e.navigate(o):await e.navigate(o,{fromRouteId:t,...s}))},[e,t])}var i1={};function q2(e,t,r){!t&&!i1[e]&&(i1[e]=!0,qr(!1,r))}b.memo(dE);function dE({routes:e,future:t,state:r}){return G2(e,void 0,r,t)}function Or(e){Ft(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function hE({basename:e="/",children:t=null,location:r,navigationType:a="POP",navigator:o,static:s=!1}){Ft(!Ks(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=e.replace(/^\/*/,"/"),f=b.useMemo(()=>({basename:c,navigator:o,static:s,future:{}}),[c,o,s]);typeof r=="string"&&(r=ao(r));let{pathname:h="/",search:d="",hash:g="",state:v=null,key:y="default"}=r,S=b.useMemo(()=>{let w=ja(h,c);return w==null?null:{location:{pathname:w,search:d,hash:g,state:v,key:y},navigationType:a}},[c,h,d,g,v,y,a]);return qr(S!=null,`<Router basename="${c}"> is not able to match the URL "${h}${d}${g}" because it does not start with the basename, so the <Router> won't render anything.`),S==null?null:b.createElement(ma.Provider,{value:f},b.createElement(Xs.Provider,{children:t,value:S}))}function mE({children:e,location:t}){return eE(Sm(e),t)}function Sm(e,t=[]){let r=[];return b.Children.forEach(e,(a,o)=>{if(!b.isValidElement(a))return;let s=[...t,o];if(a.type===b.Fragment){r.push.apply(r,Sm(a.props.children,s));return}Ft(a.type===Or,`[${typeof a.type=="string"?a.type:a.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ft(!a.props.index||!a.props.children,"An index route cannot have child routes.");let c={id:a.props.id||s.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,loader:a.props.loader,action:a.props.action,hydrateFallbackElement:a.props.hydrateFallbackElement,HydrateFallback:a.props.HydrateFallback,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.hasErrorBoundary===!0||a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(c.children=Sm(a.props.children,s)),r.push(c)}),r}var Mc="get",Nc="application/x-www-form-urlencoded";function nf(e){return e!=null&&typeof e.tagName=="string"}function gE(e){return nf(e)&&e.tagName.toLowerCase()==="button"}function pE(e){return nf(e)&&e.tagName.toLowerCase()==="form"}function vE(e){return nf(e)&&e.tagName.toLowerCase()==="input"}function yE(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function bE(e,t){return e.button===0&&(!t||t==="_self")&&!yE(e)}var fc=null;function SE(){if(fc===null)try{new FormData(document.createElement("form"),0),fc=!1}catch{fc=!0}return fc}var CE=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Dh(e){return e!=null&&!CE.has(e)?(qr(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Nc}"`),null):e}function wE(e,t){let r,a,o,s,c;if(pE(e)){let f=e.getAttribute("action");a=f?ja(f,t):null,r=e.getAttribute("method")||Mc,o=Dh(e.getAttribute("enctype"))||Nc,s=new FormData(e)}else if(gE(e)||vE(e)&&(e.type==="submit"||e.type==="image")){let f=e.form;if(f==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let h=e.getAttribute("formaction")||f.getAttribute("action");if(a=h?ja(h,t):null,r=e.getAttribute("formmethod")||f.getAttribute("method")||Mc,o=Dh(e.getAttribute("formenctype"))||Dh(f.getAttribute("enctype"))||Nc,s=new FormData(f,e),!SE()){let{name:d,type:g,value:v}=e;if(g==="image"){let y=d?`${d}.`:"";s.append(`${y}x`,"0"),s.append(`${y}y`,"0")}else d&&s.append(d,v)}}else{if(nf(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=Mc,a=null,o=Nc,c=e}return s&&o==="text/plain"&&(c=s,s=void 0),{action:a,method:r.toLowerCase(),encType:o,formData:s,body:c}}function Ug(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}async function xE(e,t){if(e.id in t)return t[e.id];try{let r=await import(e.module);return t[e.id]=r,r}catch(r){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(r),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function EE(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function AE(e,t,r){let a=await Promise.all(e.map(async o=>{let s=t.routes[o.route.id];if(s){let c=await xE(s,r);return c.links?c.links():[]}return[]}));return ME(a.flat(1).filter(EE).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function o1(e,t,r,a,o,s){let c=(h,d)=>r[d]?h.route.id!==r[d].route.id:!0,f=(h,d)=>{var g;return r[d].pathname!==h.pathname||((g=r[d].route.path)==null?void 0:g.endsWith("*"))&&r[d].params["*"]!==h.params["*"]};return s==="assets"?t.filter((h,d)=>c(h,d)||f(h,d)):s==="data"?t.filter((h,d)=>{var v;let g=a.routes[h.route.id];if(!g||!g.hasLoader)return!1;if(c(h,d)||f(h,d))return!0;if(h.route.shouldRevalidate){let y=h.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((v=r[0])==null?void 0:v.params)||{},nextUrl:new URL(e,window.origin),nextParams:h.params,defaultShouldRevalidate:!0});if(typeof y=="boolean")return y}return!0}):[]}function TE(e,t,{includeHydrateFallback:r}={}){return RE(e.map(a=>{let o=t.routes[a.route.id];if(!o)return[];let s=[o.module];return o.clientActionModule&&(s=s.concat(o.clientActionModule)),o.clientLoaderModule&&(s=s.concat(o.clientLoaderModule)),r&&o.hydrateFallbackModule&&(s=s.concat(o.hydrateFallbackModule)),o.imports&&(s=s.concat(o.imports)),s}).flat(1))}function RE(e){return[...new Set(e)]}function OE(e){let t={},r=Object.keys(e).sort();for(let a of r)t[a]=e[a];return t}function ME(e,t){let r=new Set;return new Set(t),e.reduce((a,o)=>{let s=JSON.stringify(OE(o));return r.has(s)||(r.add(s),a.push({key:s,link:o})),a},[])}function NE(e,t){let r=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return r.pathname==="/"?r.pathname="_root.data":t&&ja(r.pathname,t)==="/"?r.pathname=`${t.replace(/\/$/,"")}/_root.data`:r.pathname=`${r.pathname.replace(/\/$/,"")}.data`,r}function W2(){let e=b.useContext(ml);return Ug(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function DE(){let e=b.useContext(tf);return Ug(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var Gg=b.createContext(void 0);Gg.displayName="FrameworkContext";function J2(){let e=b.useContext(Gg);return Ug(e,"You must render this element inside a <HydratedRouter> element"),e}function PE(e,t){let r=b.useContext(Gg),[a,o]=b.useState(!1),[s,c]=b.useState(!1),{onFocus:f,onBlur:h,onMouseEnter:d,onMouseLeave:g,onTouchStart:v}=t,y=b.useRef(null);b.useEffect(()=>{if(e==="render"&&c(!0),e==="viewport"){let A=T=>{T.forEach(R=>{c(R.isIntersecting)})},x=new IntersectionObserver(A,{threshold:.5});return y.current&&x.observe(y.current),()=>{x.disconnect()}}},[e]),b.useEffect(()=>{if(a){let A=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(A)}}},[a]);let S=()=>{o(!0)},w=()=>{o(!1),c(!1)};return r?e!=="intent"?[s,y,{}]:[s,y,{onFocus:gs(f,S),onBlur:gs(h,w),onMouseEnter:gs(d,S),onMouseLeave:gs(g,w),onTouchStart:gs(v,S)}]:[!1,y,{}]}function gs(e,t){return r=>{e&&e(r),r.defaultPrevented||t(r)}}function zE({page:e,...t}){let{router:r}=W2(),a=b.useMemo(()=>$2(r.routes,e,r.basename),[r.routes,e,r.basename]);return a?b.createElement($E,{page:e,matches:a,...t}):null}function _E(e){let{manifest:t,routeModules:r}=J2(),[a,o]=b.useState([]);return b.useEffect(()=>{let s=!1;return AE(e,t,r).then(c=>{s||o(c)}),()=>{s=!0}},[e,t,r]),a}function $E({page:e,matches:t,...r}){let a=io(),{manifest:o,routeModules:s}=J2(),{basename:c}=W2(),{loaderData:f,matches:h}=DE(),d=b.useMemo(()=>o1(e,t,h,o,a,"data"),[e,t,h,o,a]),g=b.useMemo(()=>o1(e,t,h,o,a,"assets"),[e,t,h,o,a]),v=b.useMemo(()=>{if(e===a.pathname+a.search+a.hash)return[];let w=new Set,A=!1;if(t.forEach(T=>{var O;let R=o.routes[T.route.id];!R||!R.hasLoader||(!d.some(j=>j.route.id===T.route.id)&&T.route.id in f&&((O=s[T.route.id])!=null&&O.shouldRevalidate)||R.hasClientLoader?A=!0:w.add(T.route.id))}),w.size===0)return[];let x=NE(e,c);return A&&w.size>0&&x.searchParams.set("_routes",t.filter(T=>w.has(T.route.id)).map(T=>T.route.id).join(",")),[x.pathname+x.search]},[c,f,a,o,d,t,e,s]),y=b.useMemo(()=>TE(g,o),[g,o]),S=_E(g);return b.createElement(b.Fragment,null,v.map(w=>b.createElement("link",{key:w,rel:"prefetch",as:"fetch",href:w,...r})),y.map(w=>b.createElement("link",{key:w,rel:"modulepreload",href:w,...r})),S.map(({key:w,link:A})=>b.createElement("link",{key:w,...A})))}function kE(...e){return t=>{e.forEach(r=>{typeof r=="function"?r(t):r!=null&&(r.current=t)})}}var Y2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Y2&&(window.__reactRouterVersion="7.4.0")}catch{}function LE({basename:e,children:t,window:r}){let a=b.useRef();a.current==null&&(a.current=T3({window:r,v5Compat:!0}));let o=a.current,[s,c]=b.useState({action:o.action,location:o.location}),f=b.useCallback(h=>{b.startTransition(()=>c(h))},[c]);return b.useLayoutEffect(()=>o.listen(f),[o,f]),b.createElement(hE,{basename:e,children:t,location:s.location,navigationType:s.action,navigator:o})}var X2=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,K2=b.forwardRef(function({onClick:t,discover:r="render",prefetch:a="none",relative:o,reloadDocument:s,replace:c,state:f,target:h,to:d,preventScrollReset:g,viewTransition:v,...y},S){let{basename:w}=b.useContext(ma),A=typeof d=="string"&&X2.test(d),x,T=!1;if(typeof d=="string"&&A&&(x=d,Y2))try{let $=new URL(window.location.href),B=d.startsWith("//")?new URL($.protocol+d):new URL(d),U=ja(B.pathname,w);B.origin===$.origin&&U!=null?d=U+B.search+B.hash:T=!0}catch{qr(!1,`<Link to="${d}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let R=Q3(d,{relative:o}),[O,j,z]=PE(a,y),N=FE(d,{replace:c,state:f,target:h,preventScrollReset:g,relative:o,viewTransition:v});function _($){t&&t($),$.defaultPrevented||N($)}let J=b.createElement("a",{...y,...z,href:x||R,onClick:T||s?t:_,ref:kE(S,j),target:h,"data-discover":!A&&r==="render"?"true":void 0});return O&&!A?b.createElement(b.Fragment,null,J,b.createElement(zE,{page:R})):J});K2.displayName="Link";var jE=b.forwardRef(function({"aria-current":t="page",caseSensitive:r=!1,className:a="",end:o=!1,style:s,to:c,viewTransition:f,children:h,...d},g){let v=Qs(c,{relative:d.relative}),y=io(),S=b.useContext(tf),{navigator:w,basename:A}=b.useContext(ma),x=S!=null&&qE(v)&&f===!0,T=w.encodeLocation?w.encodeLocation(v).pathname:v.pathname,R=y.pathname,O=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;r||(R=R.toLowerCase(),O=O?O.toLowerCase():null,T=T.toLowerCase()),O&&A&&(O=ja(O,A)||O);const j=T!=="/"&&T.endsWith("/")?T.length-1:T.length;let z=R===T||!o&&R.startsWith(T)&&R.charAt(j)==="/",N=O!=null&&(O===T||!o&&O.startsWith(T)&&O.charAt(T.length)==="/"),_={isActive:z,isPending:N,isTransitioning:x},J=z?t:void 0,$;typeof a=="function"?$=a(_):$=[a,z?"active":null,N?"pending":null,x?"transitioning":null].filter(Boolean).join(" ");let B=typeof s=="function"?s(_):s;return b.createElement(K2,{...d,"aria-current":J,className:$,ref:g,style:B,to:c,viewTransition:f},typeof h=="function"?h(_):h)});jE.displayName="NavLink";var HE=b.forwardRef(({discover:e="render",fetcherKey:t,navigate:r,reloadDocument:a,replace:o,state:s,method:c=Mc,action:f,onSubmit:h,relative:d,preventScrollReset:g,viewTransition:v,...y},S)=>{let w=UE(),A=GE(f,{relative:d}),x=c.toLowerCase()==="get"?"get":"post",T=typeof f=="string"&&X2.test(f),R=O=>{if(h&&h(O),O.defaultPrevented)return;O.preventDefault();let j=O.nativeEvent.submitter,z=(j==null?void 0:j.getAttribute("formmethod"))||c;w(j||O.currentTarget,{fetcherKey:t,method:z,navigate:r,replace:o,state:s,relative:d,preventScrollReset:g,viewTransition:v})};return b.createElement("form",{ref:S,method:x,action:A,onSubmit:a?h:R,...y,"data-discover":!T&&e==="render"?"true":void 0})});HE.displayName="Form";function BE(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Q2(e){let t=b.useContext(ml);return Ft(t,BE(e)),t}function FE(e,{target:t,replace:r,state:a,preventScrollReset:o,relative:s,viewTransition:c}={}){let f=oo(),h=io(),d=Qs(e,{relative:s});return b.useCallback(g=>{if(bE(g,t)){g.preventDefault();let v=r!==void 0?r:_s(h)===_s(d);f(e,{replace:v,state:a,preventScrollReset:o,relative:s,viewTransition:c})}},[h,f,d,r,a,t,e,o,s,c])}var IE=0,VE=()=>`__${String(++IE)}__`;function UE(){let{router:e}=Q2("useSubmit"),{basename:t}=b.useContext(ma),r=uE();return b.useCallback(async(a,o={})=>{let{action:s,method:c,encType:f,formData:h,body:d}=wE(a,t);if(o.navigate===!1){let g=o.fetcherKey||VE();await e.fetch(g,r,o.action||s,{preventScrollReset:o.preventScrollReset,formData:h,body:d,formMethod:o.method||c,formEncType:o.encType||f,flushSync:o.flushSync})}else await e.navigate(o.action||s,{preventScrollReset:o.preventScrollReset,formData:h,body:d,formMethod:o.method||c,formEncType:o.encType||f,replace:o.replace,state:o.state,fromRouteId:r,flushSync:o.flushSync,viewTransition:o.viewTransition})},[e,t,r])}function GE(e,{relative:t}={}){let{basename:r}=b.useContext(ma),a=b.useContext(ga);Ft(a,"useFormAction must be used inside a RouteContext");let[o]=a.matches.slice(-1),s={...Qs(e||".",{relative:t})},c=io();if(e==null){s.search=c.search;let f=new URLSearchParams(s.search),h=f.getAll("index");if(h.some(g=>g==="")){f.delete("index"),h.filter(v=>v).forEach(v=>f.append("index",v));let g=f.toString();s.search=g?`?${g}`:""}}return(!e||e===".")&&o.route.index&&(s.search=s.search?s.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(s.pathname=s.pathname==="/"?r:ka([r,s.pathname])),_s(s)}function qE(e,t={}){let r=b.useContext(F2);Ft(r!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=Q2("useViewTransitionState"),o=Qs(e,{relative:t.relative});if(!r.isTransitioning)return!1;let s=ja(r.currentLocation.pathname,a)||r.currentLocation.pathname,c=ja(r.nextLocation.pathname,a)||r.nextLocation.pathname;return Bc(o.pathname,c)!=null||Bc(o.pathname,s)!=null}new TextEncoder;var qg=_2();const Cm=Ys(qg),WE=z2({__proto__:null,default:Cm},[qg]),Z2=b.createContext({});var Ph={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var l1;function JE(){return l1||(l1=1,function(e){(function(){var t={}.hasOwnProperty;function r(){for(var s="",c=0;c<arguments.length;c++){var f=arguments[c];f&&(s=o(s,a(f)))}return s}function a(s){if(typeof s=="string"||typeof s=="number")return s;if(typeof s!="object")return"";if(Array.isArray(s))return r.apply(null,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var c="";for(var f in s)t.call(s,f)&&s[f]&&(c=o(c,f));return c}function o(s,c){return c?s?s+" "+c:s+c:s}e.exports?(r.default=r,e.exports=r):window.classNames=r})()}(Ph)),Ph.exports}var YE=JE();const Ee=Ys(YE),XE={aliceblue:"9ehhb",antiquewhite:"9sgk7",aqua:"1ekf",aquamarine:"4zsno",azure:"9eiv3",beige:"9lhp8",bisque:"9zg04",black:"0",blanchedalmond:"9zhe5",blue:"73",blueviolet:"5e31e",brown:"6g016",burlywood:"8ouiv",cadetblue:"3qba8",chartreuse:"4zshs",chocolate:"87k0u",coral:"9yvyo",cornflowerblue:"3xael",cornsilk:"9zjz0",crimson:"8l4xo",cyan:"1ekf",darkblue:"3v",darkcyan:"rkb",darkgoldenrod:"776yz",darkgray:"6mbhl",darkgreen:"jr4",darkgrey:"6mbhl",darkkhaki:"7ehkb",darkmagenta:"5f91n",darkolivegreen:"3bzfz",darkorange:"9yygw",darkorchid:"5z6x8",darkred:"5f8xs",darksalmon:"9441m",darkseagreen:"5lwgf",darkslateblue:"2th1n",darkslategray:"1ugcv",darkslategrey:"1ugcv",darkturquoise:"14up",darkviolet:"5rw7n",deeppink:"9yavn",deepskyblue:"11xb",dimgray:"442g9",dimgrey:"442g9",dodgerblue:"16xof",firebrick:"6y7tu",floralwhite:"9zkds",forestgreen:"1cisi",fuchsia:"9y70f",gainsboro:"8m8kc",ghostwhite:"9pq0v",goldenrod:"8j4f4",gold:"9zda8",gray:"50i2o",green:"pa8",greenyellow:"6senj",grey:"50i2o",honeydew:"9eiuo",hotpink:"9yrp0",indianred:"80gnw",indigo:"2xcoy",ivory:"9zldc",khaki:"9edu4",lavenderblush:"9ziet",lavender:"90c8q",lawngreen:"4vk74",lemonchiffon:"9zkct",lightblue:"6s73a",lightcoral:"9dtog",lightcyan:"8s1rz",lightgoldenrodyellow:"9sjiq",lightgray:"89jo3",lightgreen:"5nkwg",lightgrey:"89jo3",lightpink:"9z6wx",lightsalmon:"9z2ii",lightseagreen:"19xgq",lightskyblue:"5arju",lightslategray:"4nwk9",lightslategrey:"4nwk9",lightsteelblue:"6wau6",lightyellow:"9zlcw",lime:"1edc",limegreen:"1zcxe",linen:"9shk6",magenta:"9y70f",maroon:"4zsow",mediumaquamarine:"40eju",mediumblue:"5p",mediumorchid:"79qkz",mediumpurple:"5r3rv",mediumseagreen:"2d9ip",mediumslateblue:"4tcku",mediumspringgreen:"1di2",mediumturquoise:"2uabw",mediumvioletred:"7rn9h",midnightblue:"z980",mintcream:"9ljp6",mistyrose:"9zg0x",moccasin:"9zfzp",navajowhite:"9zest",navy:"3k",oldlace:"9wq92",olive:"50hz4",olivedrab:"472ub",orange:"9z3eo",orangered:"9ykg0",orchid:"8iu3a",palegoldenrod:"9bl4a",palegreen:"5yw0o",paleturquoise:"6v4ku",palevioletred:"8k8lv",papayawhip:"9zi6t",peachpuff:"9ze0p",peru:"80oqn",pink:"9z8wb",plum:"8nba5",powderblue:"6wgdi",purple:"4zssg",rebeccapurple:"3zk49",red:"9y6tc",rosybrown:"7cv4f",royalblue:"2jvtt",saddlebrown:"5fmkz",salmon:"9rvci",sandybrown:"9jn1c",seagreen:"1tdnb",seashell:"9zje6",sienna:"6973h",silver:"7ir40",skyblue:"5arjf",slateblue:"45e4t",slategray:"4e100",slategrey:"4e100",snow:"9zke2",springgreen:"1egv",steelblue:"2r1kk",tan:"87yx8",teal:"pds",thistle:"8ggk8",tomato:"9yqfb",turquoise:"2j4r4",violet:"9b10u",wheat:"9ld4j",white:"9zldr",whitesmoke:"9lhpx",yellow:"9zl6o",yellowgreen:"61fzm"},hn=Math.round;function zh(e,t){const r=e.replace(/^[^(]*\((.*)/,"$1").replace(/\).*/,"").match(/\d*\.?\d+%?/g)||[],a=r.map(o=>parseFloat(o));for(let o=0;o<3;o+=1)a[o]=t(a[o]||0,r[o]||"",o);return r[3]?a[3]=r[3].includes("%")?a[3]/100:a[3]:a[3]=1,a}const s1=(e,t,r)=>r===0?e:e/100;function ps(e,t){const r=t||255;return e>r?r:e<0?0:e}let dc=class eS{constructor(t){Qn(this,"isValid",!0);Qn(this,"r",0);Qn(this,"g",0);Qn(this,"b",0);Qn(this,"a",1);Qn(this,"_h");Qn(this,"_s");Qn(this,"_l");Qn(this,"_v");Qn(this,"_max");Qn(this,"_min");Qn(this,"_brightness");function r(a){return a[0]in t&&a[1]in t&&a[2]in t}if(t)if(typeof t=="string"){let o=function(s){return a.startsWith(s)};const a=t.trim();if(/^#?[A-F\d]{3,8}$/i.test(a))this.fromHexString(a);else if(o("rgb"))this.fromRgbString(a);else if(o("hsl"))this.fromHslString(a);else if(o("hsv")||o("hsb"))this.fromHsvString(a);else{const s=XE[a.toLowerCase()];s&&this.fromHexString(parseInt(s,36).toString(16).padStart(6,"0"))}}else if(t instanceof eS)this.r=t.r,this.g=t.g,this.b=t.b,this.a=t.a,this._h=t._h,this._s=t._s,this._l=t._l,this._v=t._v;else if(r("rgb"))this.r=ps(t.r),this.g=ps(t.g),this.b=ps(t.b),this.a=typeof t.a=="number"?ps(t.a,1):1;else if(r("hsl"))this.fromHsl(t);else if(r("hsv"))this.fromHsv(t);else throw new Error("@ant-design/fast-color: unsupported input "+JSON.stringify(t))}setR(t){return this._sc("r",t)}setG(t){return this._sc("g",t)}setB(t){return this._sc("b",t)}setA(t){return this._sc("a",t,1)}setHue(t){const r=this.toHsv();return r.h=t,this._c(r)}getLuminance(){function t(s){const c=s/255;return c<=.03928?c/12.92:Math.pow((c+.055)/1.055,2.4)}const r=t(this.r),a=t(this.g),o=t(this.b);return .2126*r+.7152*a+.0722*o}getHue(){if(typeof this._h>"u"){const t=this.getMax()-this.getMin();t===0?this._h=0:this._h=hn(60*(this.r===this.getMax()?(this.g-this.b)/t+(this.g<this.b?6:0):this.g===this.getMax()?(this.b-this.r)/t+2:(this.r-this.g)/t+4))}return this._h}getSaturation(){if(typeof this._s>"u"){const t=this.getMax()-this.getMin();t===0?this._s=0:this._s=t/this.getMax()}return this._s}getLightness(){return typeof this._l>"u"&&(this._l=(this.getMax()+this.getMin())/510),this._l}getValue(){return typeof this._v>"u"&&(this._v=this.getMax()/255),this._v}getBrightness(){return typeof this._brightness>"u"&&(this._brightness=(this.r*299+this.g*587+this.b*114)/1e3),this._brightness}darken(t=10){const r=this.getHue(),a=this.getSaturation();let o=this.getLightness()-t/100;return o<0&&(o=0),this._c({h:r,s:a,l:o,a:this.a})}lighten(t=10){const r=this.getHue(),a=this.getSaturation();let o=this.getLightness()+t/100;return o>1&&(o=1),this._c({h:r,s:a,l:o,a:this.a})}mix(t,r=50){const a=this._c(t),o=r/100,s=f=>(a[f]-this[f])*o+this[f],c={r:hn(s("r")),g:hn(s("g")),b:hn(s("b")),a:hn(s("a")*100)/100};return this._c(c)}tint(t=10){return this.mix({r:255,g:255,b:255,a:1},t)}shade(t=10){return this.mix({r:0,g:0,b:0,a:1},t)}onBackground(t){const r=this._c(t),a=this.a+r.a*(1-this.a),o=s=>hn((this[s]*this.a+r[s]*r.a*(1-this.a))/a);return this._c({r:o("r"),g:o("g"),b:o("b"),a})}isDark(){return this.getBrightness()<128}isLight(){return this.getBrightness()>=128}equals(t){return this.r===t.r&&this.g===t.g&&this.b===t.b&&this.a===t.a}clone(){return this._c(this)}toHexString(){let t="#";const r=(this.r||0).toString(16);t+=r.length===2?r:"0"+r;const a=(this.g||0).toString(16);t+=a.length===2?a:"0"+a;const o=(this.b||0).toString(16);if(t+=o.length===2?o:"0"+o,typeof this.a=="number"&&this.a>=0&&this.a<1){const s=hn(this.a*255).toString(16);t+=s.length===2?s:"0"+s}return t}toHsl(){return{h:this.getHue(),s:this.getSaturation(),l:this.getLightness(),a:this.a}}toHslString(){const t=this.getHue(),r=hn(this.getSaturation()*100),a=hn(this.getLightness()*100);return this.a!==1?`hsla(${t},${r}%,${a}%,${this.a})`:`hsl(${t},${r}%,${a}%)`}toHsv(){return{h:this.getHue(),s:this.getSaturation(),v:this.getValue(),a:this.a}}toRgb(){return{r:this.r,g:this.g,b:this.b,a:this.a}}toRgbString(){return this.a!==1?`rgba(${this.r},${this.g},${this.b},${this.a})`:`rgb(${this.r},${this.g},${this.b})`}toString(){return this.toRgbString()}_sc(t,r,a){const o=this.clone();return o[t]=ps(r,a),o}_c(t){return new this.constructor(t)}getMax(){return typeof this._max>"u"&&(this._max=Math.max(this.r,this.g,this.b)),this._max}getMin(){return typeof this._min>"u"&&(this._min=Math.min(this.r,this.g,this.b)),this._min}fromHexString(t){const r=t.replace("#","");function a(o,s){return parseInt(r[o]+r[s||o],16)}r.length<6?(this.r=a(0),this.g=a(1),this.b=a(2),this.a=r[3]?a(3)/255:1):(this.r=a(0,1),this.g=a(2,3),this.b=a(4,5),this.a=r[6]?a(6,7)/255:1)}fromHsl({h:t,s:r,l:a,a:o}){if(this._h=t%360,this._s=r,this._l=a,this.a=typeof o=="number"?o:1,r<=0){const y=hn(a*255);this.r=y,this.g=y,this.b=y}let s=0,c=0,f=0;const h=t/60,d=(1-Math.abs(2*a-1))*r,g=d*(1-Math.abs(h%2-1));h>=0&&h<1?(s=d,c=g):h>=1&&h<2?(s=g,c=d):h>=2&&h<3?(c=d,f=g):h>=3&&h<4?(c=g,f=d):h>=4&&h<5?(s=g,f=d):h>=5&&h<6&&(s=d,f=g);const v=a-d/2;this.r=hn((s+v)*255),this.g=hn((c+v)*255),this.b=hn((f+v)*255)}fromHsv({h:t,s:r,v:a,a:o}){this._h=t%360,this._s=r,this._v=a,this.a=typeof o=="number"?o:1;const s=hn(a*255);if(this.r=s,this.g=s,this.b=s,r<=0)return;const c=t/60,f=Math.floor(c),h=c-f,d=hn(a*(1-r)*255),g=hn(a*(1-r*h)*255),v=hn(a*(1-r*(1-h))*255);switch(f){case 0:this.g=v,this.b=d;break;case 1:this.r=g,this.b=d;break;case 2:this.r=d,this.b=v;break;case 3:this.r=d,this.g=g;break;case 4:this.r=v,this.g=d;break;case 5:default:this.g=d,this.b=g;break}}fromHsvString(t){const r=zh(t,s1);this.fromHsv({h:r[0],s:r[1],v:r[2],a:r[3]})}fromHslString(t){const r=zh(t,s1);this.fromHsl({h:r[0],s:r[1],l:r[2],a:r[3]})}fromRgbString(t){const r=zh(t,(a,o)=>o.includes("%")?hn(a/100*255):a);this.r=r[0],this.g=r[1],this.b=r[2],this.a=r[3]}};const hc=2,u1=.16,KE=.05,QE=.05,ZE=.15,tS=5,nS=4,e8=[{index:7,amount:15},{index:6,amount:25},{index:5,amount:30},{index:5,amount:45},{index:5,amount:65},{index:5,amount:85},{index:4,amount:90},{index:3,amount:95},{index:2,amount:97},{index:1,amount:98}];function c1(e,t,r){let a;return Math.round(e.h)>=60&&Math.round(e.h)<=240?a=r?Math.round(e.h)-hc*t:Math.round(e.h)+hc*t:a=r?Math.round(e.h)+hc*t:Math.round(e.h)-hc*t,a<0?a+=360:a>=360&&(a-=360),a}function f1(e,t,r){if(e.h===0&&e.s===0)return e.s;let a;return r?a=e.s-u1*t:t===nS?a=e.s+u1:a=e.s+KE*t,a>1&&(a=1),r&&t===tS&&a>.1&&(a=.1),a<.06&&(a=.06),Math.round(a*100)/100}function d1(e,t,r){let a;return r?a=e.v+QE*t:a=e.v-ZE*t,a=Math.max(0,Math.min(1,a)),Math.round(a*100)/100}function t8(e,t={}){const r=[],a=new dc(e),o=a.toHsv();for(let s=tS;s>0;s-=1){const c=new dc({h:c1(o,s,!0),s:f1(o,s,!0),v:d1(o,s,!0)});r.push(c)}r.push(a);for(let s=1;s<=nS;s+=1){const c=new dc({h:c1(o,s),s:f1(o,s),v:d1(o,s)});r.push(c)}return t.theme==="dark"?e8.map(({index:s,amount:c})=>new dc(t.backgroundColor||"#141414").mix(r[s],c).toHexString()):r.map(s=>s.toHexString())}const wm=["#e6f4ff","#bae0ff","#91caff","#69b1ff","#4096ff","#1677ff","#0958d9","#003eb3","#002c8c","#001d66"];wm.primary=wm[5];function n8(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function r8(e,t){if(!e)return!1;if(e.contains)return e.contains(t);let r=t;for(;r;){if(r===e)return!0;r=r.parentNode}return!1}const h1="data-rc-order",m1="data-rc-priority",a8="rc-util-key",xm=new Map;function rS({mark:e}={}){return e?e.startsWith("data-")?e:`data-${e}`:a8}function Wg(e){return e.attachTo?e.attachTo:document.querySelector("head")||document.body}function i8(e){return e==="queue"?"prependQueue":e?"prepend":"append"}function Jg(e){return Array.from((xm.get(e)||e).children).filter(t=>t.tagName==="STYLE")}function aS(e,t={}){if(!n8())return null;const{csp:r,prepend:a,priority:o=0}=t,s=i8(a),c=s==="prependQueue",f=document.createElement("style");f.setAttribute(h1,s),c&&o&&f.setAttribute(m1,`${o}`),r!=null&&r.nonce&&(f.nonce=r==null?void 0:r.nonce),f.innerHTML=e;const h=Wg(t),{firstChild:d}=h;if(a){if(c){const g=(t.styles||Jg(h)).filter(v=>{if(!["prepend","prependQueue"].includes(v.getAttribute(h1)))return!1;const y=Number(v.getAttribute(m1)||0);return o>=y});if(g.length)return h.insertBefore(f,g[g.length-1].nextSibling),f}h.insertBefore(f,d)}else h.appendChild(f);return f}function o8(e,t={}){let{styles:r}=t;return r||(r=Jg(Wg(t))),r.find(a=>a.getAttribute(rS(t))===e)}function l8(e,t){const r=xm.get(e);if(!r||!r8(document,r)){const a=aS("",t),{parentNode:o}=a;xm.set(e,o),e.removeChild(a)}}function s8(e,t,r={}){var h,d,g;const a=Wg(r),o=Jg(a),s={...r,styles:o};l8(a,s);const c=o8(t,s);if(c)return(h=s.csp)!=null&&h.nonce&&c.nonce!==((d=s.csp)==null?void 0:d.nonce)&&(c.nonce=(g=s.csp)==null?void 0:g.nonce),c.innerHTML!==e&&(c.innerHTML=e),c;const f=aS(e,s);return f.setAttribute(rS(s),t),f}function iS(e){var t;return(t=e==null?void 0:e.getRootNode)==null?void 0:t.call(e)}function u8(e){return iS(e)instanceof ShadowRoot}function c8(e){return u8(e)?iS(e):null}let Em={};const f8=e=>{};function d8(e,t){}function h8(e,t){}function m8(){Em={}}function oS(e,t,r){!t&&!Em[r]&&(e(!1,r),Em[r]=!0)}function rf(e,t){oS(d8,e,t)}function g8(e,t){oS(h8,e,t)}rf.preMessage=f8;rf.resetWarned=m8;rf.noteOnce=g8;function p8(e){return e.replace(/-(.)/g,(t,r)=>r.toUpperCase())}function v8(e,t){rf(e,`[@ant-design/icons] ${t}`)}function g1(e){return typeof e=="object"&&typeof e.name=="string"&&typeof e.theme=="string"&&(typeof e.icon=="object"||typeof e.icon=="function")}function p1(e={}){return Object.keys(e).reduce((t,r)=>{const a=e[r];switch(r){case"class":t.className=a,delete t.class;break;default:delete t[r],t[p8(r)]=a}return t},{})}function Am(e,t,r){return r?ve.createElement(e.tag,{key:t,...p1(e.attrs),...r},(e.children||[]).map((a,o)=>Am(a,`${t}-${e.tag}-${o}`))):ve.createElement(e.tag,{key:t,...p1(e.attrs)},(e.children||[]).map((a,o)=>Am(a,`${t}-${e.tag}-${o}`)))}function lS(e){return t8(e)[0]}function sS(e){return e?Array.isArray(e)?e:[e]:[]}const y8=`
.anticon {
  display: inline-flex;
  align-items: center;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`,b8=e=>{const{csp:t,prefixCls:r,layer:a}=b.useContext(Z2);let o=y8;r&&(o=o.replace(/anticon/g,r)),a&&(o=`@layer ${a} {
${o}
}`),b.useEffect(()=>{const s=e.current,c=c8(s);s8(o,"@ant-design-icons",{prepend:!a,csp:t,attachTo:c})},[])},Rs={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1};function S8({primaryColor:e,secondaryColor:t}){Rs.primaryColor=e,Rs.secondaryColor=t||lS(e),Rs.calculated=!!t}function C8(){return{...Rs}}const gl=e=>{const{icon:t,className:r,onClick:a,style:o,primaryColor:s,secondaryColor:c,...f}=e,h=b.useRef();let d=Rs;if(s&&(d={primaryColor:s,secondaryColor:c||lS(s)}),b8(h),v8(g1(t),`icon should be icon definiton, but got ${t}`),!g1(t))return null;let g=t;return g&&typeof g.icon=="function"&&(g={...g,icon:g.icon(d.primaryColor,d.secondaryColor)}),Am(g.icon,`svg-${g.name}`,{className:r,onClick:a,style:o,"data-icon":g.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true",...f,ref:h})};gl.displayName="IconReact";gl.getTwoToneColors=C8;gl.setTwoToneColors=S8;function uS(e){const[t,r]=sS(e);return gl.setTwoToneColors({primaryColor:t,secondaryColor:r})}function w8(){const e=gl.getTwoToneColors();return e.calculated?[e.primaryColor,e.secondaryColor]:e.primaryColor}function Tm(){return Tm=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},Tm.apply(this,arguments)}uS(wm.primary);const Dr=b.forwardRef((e,t)=>{const{className:r,icon:a,spin:o,rotate:s,tabIndex:c,onClick:f,twoToneColor:h,...d}=e,{prefixCls:g="anticon",rootClassName:v}=b.useContext(Z2),y=Ee(v,g,{[`${g}-${a.name}`]:!!a.name,[`${g}-spin`]:!!o||a.name==="loading"},r);let S=c;S===void 0&&f&&(S=-1);const w=s?{msTransform:`rotate(${s}deg)`,transform:`rotate(${s}deg)`}:void 0,[A,x]=sS(h);return b.createElement("span",Tm({role:"img","aria-label":a.name},d,{ref:t,tabIndex:S,onClick:f,className:y}),b.createElement(gl,{icon:a,primaryColor:A,secondaryColor:x,style:w}))});Dr.displayName="AntdIcon";Dr.getTwoToneColor=w8;Dr.setTwoToneColor=uS;var x8={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"arrow-left",theme:"outlined"};function Rm(){return Rm=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},Rm.apply(this,arguments)}const E8=(e,t)=>b.createElement(Dr,Rm({},e,{ref:t,icon:x8})),cS=b.forwardRef(E8);var A8={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"}}]},name:"arrow-right",theme:"outlined"};function Om(){return Om=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},Om.apply(this,arguments)}const T8=(e,t)=>b.createElement(Dr,Om({},e,{ref:t,icon:A8})),fS=b.forwardRef(T8);var R8={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"bars",theme:"outlined"},O8={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z"}}]},name:"calendar",theme:"outlined"};function Mm(){return Mm=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},Mm.apply(this,arguments)}const M8=(e,t)=>b.createElement(Dr,Mm({},e,{ref:t,icon:O8})),dS=b.forwardRef(M8);var N8={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z"}}]},name:"clock-circle",theme:"outlined"};function Nm(){return Nm=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},Nm.apply(this,arguments)}const D8=(e,t)=>b.createElement(Dr,Nm({},e,{ref:t,icon:N8})),hS=b.forwardRef(D8);var P8={icon:{tag:"svg",attrs:{"fill-rule":"evenodd",viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z"}}]},name:"close-circle",theme:"filled"},z8={icon:{tag:"svg",attrs:{"fill-rule":"evenodd",viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z"}}]},name:"close",theme:"outlined"},_8={icon:{tag:"svg",attrs:{"fill-rule":"evenodd",viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M405 158l-25 3s-112.13 12.26-194.02 78.02h-.96l-1.02.96c-18.37 16.9-26.37 37.67-39 68.04a982.08 982.08 0 00-38 112C83.27 505.87 64 609.87 64 705v8l4 8c29.63 52 82.24 85.12 131 108 48.74 22.88 90.89 35 120 36l19.02.99 9.98-17 35-62c37.13 8.38 79.88 14 129 14 49.12 0 91.87-5.62 129-14l35 62 10.02 17 18.97-1c29.12-.98 71.27-13.11 120-36 48.77-22.87 101.38-56 131.01-108l4-8v-8c0-95.13-19.26-199.13-43-284.98a982.08 982.08 0 00-38-112c-12.63-30.4-20.63-51.14-39-68l-1-1.03h-1.02C756.16 173.26 644 161.01 644 161.01L619 158l-9.02 23s-9.24 23.37-14.97 50.02a643.04 643.04 0 00-83.01-6.01c-17.12 0-46.72 1.12-83 6.01a359.85 359.85 0 00-15.02-50.01zm-44 73.02c1.37 4.48 2.74 8.36 4 12-41.38 10.24-85.51 25.86-126 50.98l34 54.02C356 296.5 475.22 289 512 289c36.74 0 156 7.49 239 59L785 294c-40.49-25.12-84.62-40.74-126-51 1.26-3.62 2.63-7.5 4-12 29.86 6 86.89 19.77 134 57.02-.26.12 12 18.62 23 44.99 11.26 27.13 23.74 63.26 35 104 21.64 78.11 38.63 173.25 40 256.99-20.15 30.75-57.5 58.5-97.02 77.02A311.8 311.8 0 01720 795.98l-16-26.97c9.5-3.52 18.88-7.36 27-11.01 49.26-21.63 76-45 76-45l-42-48s-18 16.52-60 35.02C663.03 718.52 598.87 737 512 737s-151-18.5-193-37c-42-18.49-60-35-60-35l-42 48s26.74 23.36 76 44.99a424.47 424.47 0 0027 11l-16 27.02a311.8 311.8 0 01-78.02-25.03c-39.48-18.5-76.86-46.24-96.96-76.99 1.35-83.74 18.34-178.88 40-257A917.22 917.22 0 01204 333c11-26.36 23.26-44.86 23-44.98 47.11-37.25 104.14-51.01 134-57m39 217.99c-24.74 0-46.62 14.11-60 32-13.38 17.89-20 39.87-20 64s6.62 46.11 20 64c13.38 17.89 35.26 32 60 32 24.74 0 46.62-14.11 60-32 13.38-17.89 20-39.87 20-64s-6.62-46.11-20-64c-13.38-17.89-35.26-32-60-32m224 0c-24.74 0-46.62 14.11-60 32-13.38 17.89-20 39.87-20 64s6.62 46.11 20 64c13.38 17.89 35.26 32 60 32 24.74 0 46.62-14.11 60-32 13.38-17.89 20-39.87 20-64s-6.62-46.11-20-64c-13.38-17.89-35.26-32-60-32m-224 64c1.76 0 4 .64 8 6.01 4 5.35 8 14.72 8 25.99 0 11.26-4 20.64-8 26.01-4 5.35-6.24 5.99-8 5.99-1.76 0-4-.64-8-6.02a44.83 44.83 0 01-8-25.98c0-11.27 4-20.64 8-26.02 4-5.34 6.24-5.98 8-5.98m224 0c1.76 0 4 .64 8 6.01 4 5.35 8 14.72 8 25.99 0 11.26-4 20.64-8 26.01-4 5.35-6.24 5.99-8 5.99-1.76 0-4-.64-8-6.02a44.83 44.83 0 01-8-25.98c0-11.27 4-20.64 8-26.02 4-5.34 6.24-5.98 8-5.98"}}]},name:"discord",theme:"outlined"};function Dm(){return Dm=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},Dm.apply(this,arguments)}const $8=(e,t)=>b.createElement(Dr,Dm({},e,{ref:t,icon:_8})),Yg=b.forwardRef($8);var k8={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"}},{tag:"path",attrs:{d:"M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"}}]},name:"eye-invisible",theme:"outlined"},L8={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"}}]},name:"eye",theme:"outlined"},j8={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"}}]},name:"left",theme:"outlined"},H8={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"}}]},name:"loading",theme:"outlined"},B8={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"}}]},name:"right",theme:"outlined"},mS={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"}}]},name:"search",theme:"outlined"};function Pm(){return Pm=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},Pm.apply(this,arguments)}const F8=(e,t)=>b.createElement(Dr,Pm({},e,{ref:t,icon:mS})),I8=b.forwardRef(F8);var V8={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M824.2 699.9a301.55 301.55 0 00-86.4-60.4C783.1 602.8 812 546.8 812 484c0-110.8-92.4-201.7-203.2-200-109.1 1.7-197 90.6-197 200 0 62.8 29 118.8 74.2 155.5a300.95 300.95 0 00-86.4 60.4C345 754.6 314 826.8 312 903.8a8 8 0 008 8.2h56c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5A226.62 226.62 0 01612 684c60.9 0 118.2 23.7 161.3 66.8C814.5 792 838 846.3 840 904.3c.1 4.3 3.7 7.7 8 7.7h56a8 8 0 008-8.2c-2-77-33-149.2-87.8-203.9zM612 612c-34.2 0-66.4-13.3-90.5-37.5a126.86 126.86 0 01-37.5-91.8c.3-32.8 13.4-64.5 36.3-88 24-24.6 56.1-38.3 90.4-38.7 33.9-.3 66.8 12.9 91 36.6 24.8 24.3 38.4 56.8 38.4 91.4 0 34.2-13.3 66.3-37.5 90.5A127.3 127.3 0 01612 612zM361.5 510.4c-.9-8.7-1.4-17.5-1.4-26.4 0-15.9 1.5-31.4 4.3-46.5.7-3.6-1.2-7.3-4.5-8.8-13.6-6.1-26.1-14.5-36.9-25.1a127.54 127.54 0 01-38.7-95.4c.9-32.1 13.8-62.6 36.3-85.6 24.7-25.3 57.9-39.1 93.2-38.7 31.9.3 62.7 12.6 86 34.4 7.9 7.4 14.7 15.6 20.4 24.4 2 3.1 5.9 4.4 9.3 3.2 17.6-6.1 36.2-10.4 55.3-12.4 5.6-.6 8.8-6.6 6.3-11.6-32.5-64.3-98.9-108.7-175.7-109.9-110.9-1.7-203.3 89.2-203.3 199.9 0 62.8 28.9 118.8 74.2 155.5-31.8 14.7-61.1 35-86.5 60.4-54.8 54.7-85.8 126.9-87.8 204a8 8 0 008 8.2h56.1c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5 29.4-29.4 65.4-49.8 104.7-59.7 3.9-1 6.5-4.7 6-8.7z"}}]},name:"team",theme:"outlined"};function zm(){return zm=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},zm.apply(this,arguments)}const U8=(e,t)=>b.createElement(Dr,zm({},e,{ref:t,icon:V8})),G8=b.forwardRef(U8);var q8={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"}}]},name:"user",theme:"outlined"};function _m(){return _m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},_m.apply(this,arguments)}const W8=(e,t)=>b.createElement(Dr,_m({},e,{ref:t,icon:q8})),J8=b.forwardRef(W8);var Y8={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M690.1 377.4c5.9 0 11.8.2 17.6.5-24.4-128.7-158.3-227.1-319.9-227.1C209 150.8 64 271.4 64 420.2c0 81.1 43.6 154.2 111.9 203.6a21.5 21.5 0 019.1 17.6c0 2.4-.5 4.6-1.1 6.9-5.5 20.3-14.2 52.8-14.6 54.3-.7 2.6-1.7 5.2-1.7 7.9 0 5.9 4.8 10.8 10.8 10.8 2.3 0 4.2-.9 6.2-2l70.9-40.9c5.3-3.1 11-5 17.2-5 3.2 0 6.4.5 9.5 1.4 33.1 9.5 68.8 14.8 105.7 14.8 6 0 11.9-.1 17.8-.4-7.1-21-10.9-43.1-10.9-66 0-135.8 132.2-245.8 295.3-245.8zm-194.3-86.5c23.8 0 43.2 19.3 43.2 43.1s-19.3 43.1-43.2 43.1c-23.8 0-43.2-19.3-43.2-43.1s19.4-43.1 43.2-43.1zm-215.9 86.2c-23.8 0-43.2-19.3-43.2-43.1s19.3-43.1 43.2-43.1 43.2 19.3 43.2 43.1-19.4 43.1-43.2 43.1zm586.8 415.6c56.9-41.2 93.2-102 93.2-169.7 0-124-120.8-224.5-269.9-224.5-149 0-269.9 100.5-269.9 224.5S540.9 847.5 690 847.5c30.8 0 60.6-4.4 88.1-12.3 2.6-.8 5.2-1.2 7.9-1.2 5.2 0 9.9 1.6 14.3 4.1l59.1 34c1.7 1 3.3 1.7 5.2 1.7a9 9 0 006.4-2.6 9 9 0 002.6-6.4c0-2.2-.9-4.4-1.4-6.6-.3-1.2-7.6-28.3-12.2-45.3-.5-1.9-.9-3.8-.9-5.7.1-5.9 3.1-11.2 7.6-14.5zM600.2 587.2c-19.9 0-36-16.1-36-35.9 0-19.8 16.1-35.9 36-35.9s36 16.1 36 35.9c0 19.8-16.2 35.9-36 35.9zm179.9 0c-19.9 0-36-16.1-36-35.9 0-19.8 16.1-35.9 36-35.9s36 16.1 36 35.9a36.08 36.08 0 01-36 35.9z"}}]},name:"wechat",theme:"outlined"};function $m(){return $m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},$m.apply(this,arguments)}const X8=(e,t)=>b.createElement(Dr,$m({},e,{ref:t,icon:Y8})),gS=b.forwardRef(X8);var _h={exports:{}},xt={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v1;function K8(){if(v1)return xt;v1=1;var e=Symbol.for("react.element"),t=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.server_context"),h=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),g=Symbol.for("react.suspense_list"),v=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),S=Symbol.for("react.offscreen"),w;w=Symbol.for("react.module.reference");function A(x){if(typeof x=="object"&&x!==null){var T=x.$$typeof;switch(T){case e:switch(x=x.type,x){case r:case o:case a:case d:case g:return x;default:switch(x=x&&x.$$typeof,x){case f:case c:case h:case y:case v:case s:return x;default:return T}}case t:return T}}}return xt.ContextConsumer=c,xt.ContextProvider=s,xt.Element=e,xt.ForwardRef=h,xt.Fragment=r,xt.Lazy=y,xt.Memo=v,xt.Portal=t,xt.Profiler=o,xt.StrictMode=a,xt.Suspense=d,xt.SuspenseList=g,xt.isAsyncMode=function(){return!1},xt.isConcurrentMode=function(){return!1},xt.isContextConsumer=function(x){return A(x)===c},xt.isContextProvider=function(x){return A(x)===s},xt.isElement=function(x){return typeof x=="object"&&x!==null&&x.$$typeof===e},xt.isForwardRef=function(x){return A(x)===h},xt.isFragment=function(x){return A(x)===r},xt.isLazy=function(x){return A(x)===y},xt.isMemo=function(x){return A(x)===v},xt.isPortal=function(x){return A(x)===t},xt.isProfiler=function(x){return A(x)===o},xt.isStrictMode=function(x){return A(x)===a},xt.isSuspense=function(x){return A(x)===d},xt.isSuspenseList=function(x){return A(x)===g},xt.isValidElementType=function(x){return typeof x=="string"||typeof x=="function"||x===r||x===o||x===a||x===d||x===g||x===S||typeof x=="object"&&x!==null&&(x.$$typeof===y||x.$$typeof===v||x.$$typeof===s||x.$$typeof===c||x.$$typeof===h||x.$$typeof===w||x.getModuleId!==void 0)},xt.typeOf=A,xt}var y1;function Q8(){return y1||(y1=1,_h.exports=K8()),_h.exports}var $h=Q8();function kt(){return kt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)({}).hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},kt.apply(null,arguments)}function je(e){"@babel/helpers - typeof";return je=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},je(e)}var Z8=Symbol.for("react.element"),e5=Symbol.for("react.transitional.element"),t5=Symbol.for("react.fragment");function pS(e){return e&&je(e)==="object"&&(e.$$typeof===Z8||e.$$typeof===e5)&&e.type===t5}function $s(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=[];return ve.Children.forEach(e,function(a){a==null&&!t.keepEmpty||(Array.isArray(a)?r=r.concat($s(a)):pS(a)&&a.props?r=r.concat($s(a.props.children,t)):r.push(a))}),r}var km={},n5=function(t){};function r5(e,t){}function a5(e,t){}function i5(){km={}}function vS(e,t,r){!t&&!km[r]&&(e(!1,r),km[r]=!0)}function ir(e,t){vS(r5,e,t)}function o5(e,t){vS(a5,e,t)}ir.preMessage=n5;ir.resetWarned=i5;ir.noteOnce=o5;function l5(e,t){if(je(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var a=r.call(e,t);if(je(a)!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function yS(e){var t=l5(e,"string");return je(t)=="symbol"?t:t+""}function ee(e,t,r){return(t=yS(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b1(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,a)}return r}function ie(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?b1(Object(r),!0).forEach(function(a){ee(e,a,r[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b1(Object(r)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))})}return e}function ks(e){return e instanceof HTMLElement||e instanceof SVGElement}function s5(e){return e&&je(e)==="object"&&ks(e.nativeElement)?e.nativeElement:ks(e)?e:null}function Dc(e){var t=s5(e);if(t)return t;if(e instanceof ve.Component){var r;return(r=Cm.findDOMNode)===null||r===void 0?void 0:r.call(Cm,e)}return null}function Xg(e,t,r){var a=b.useRef({});return(!("value"in a.current)||r(a.current.condition,t))&&(a.current.value=e(),a.current.condition=t),a.current.value}var u5=Number(b.version.split(".")[0]),Kg=function(t,r){typeof t=="function"?t(r):je(t)==="object"&&t&&"current"in t&&(t.current=r)},lo=function(){for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];var o=r.filter(Boolean);return o.length<=1?o[0]:function(s){r.forEach(function(c){Kg(c,s)})}},af=function(){for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return Xg(function(){return lo.apply(void 0,r)},r,function(o,s){return o.length!==s.length||o.every(function(c,f){return c!==s[f]})})},Zs=function(t){var r,a;if(!t)return!1;if(bS(t)&&u5>=19)return!0;var o=$h.isMemo(t)?t.type.type:t.type;return!(typeof o=="function"&&!((r=o.prototype)!==null&&r!==void 0&&r.render)&&o.$$typeof!==$h.ForwardRef||typeof t=="function"&&!((a=t.prototype)!==null&&a!==void 0&&a.render)&&t.$$typeof!==$h.ForwardRef)};function bS(e){return b.isValidElement(e)&&!pS(e)}var of=function(t){if(t&&bS(t)){var r=t;return r.props.propertyIsEnumerable("ref")?r.props.ref:r.ref}return null},Lm=b.createContext(null);function c5(e){var t=e.children,r=e.onBatchResize,a=b.useRef(0),o=b.useRef([]),s=b.useContext(Lm),c=b.useCallback(function(f,h,d){a.current+=1;var g=a.current;o.current.push({size:f,element:h,data:d}),Promise.resolve().then(function(){g===a.current&&(r==null||r(o.current),o.current=[])}),s==null||s(f,h,d)},[r,s]);return b.createElement(Lm.Provider,{value:c},t)}var SS=function(){if(typeof Map<"u")return Map;function e(t,r){var a=-1;return t.some(function(o,s){return o[0]===r?(a=s,!0):!1}),a}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(r){var a=e(this.__entries__,r),o=this.__entries__[a];return o&&o[1]},t.prototype.set=function(r,a){var o=e(this.__entries__,r);~o?this.__entries__[o][1]=a:this.__entries__.push([r,a])},t.prototype.delete=function(r){var a=this.__entries__,o=e(a,r);~o&&a.splice(o,1)},t.prototype.has=function(r){return!!~e(this.__entries__,r)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(r,a){a===void 0&&(a=null);for(var o=0,s=this.__entries__;o<s.length;o++){var c=s[o];r.call(a,c[1],c[0])}},t}()}(),jm=typeof window<"u"&&typeof document<"u"&&window.document===document,Fc=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),f5=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(Fc):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)}}(),d5=2;function h5(e,t){var r=!1,a=!1,o=0;function s(){r&&(r=!1,e()),a&&f()}function c(){f5(s)}function f(){var h=Date.now();if(r){if(h-o<d5)return;a=!0}else r=!0,a=!1,setTimeout(c,t);o=h}return f}var m5=20,g5=["top","right","bottom","left","width","height","size","weight"],p5=typeof MutationObserver<"u",v5=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=h5(this.refresh.bind(this),m5)}return e.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},e.prototype.removeObserver=function(t){var r=this.observers_,a=r.indexOf(t);~a&&r.splice(a,1),!r.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){var t=this.updateObservers_();t&&this.refresh()},e.prototype.updateObservers_=function(){var t=this.observers_.filter(function(r){return r.gatherActive(),r.hasActive()});return t.forEach(function(r){return r.broadcastActive()}),t.length>0},e.prototype.connect_=function(){!jm||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),p5?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){!jm||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(t){var r=t.propertyName,a=r===void 0?"":r,o=g5.some(function(s){return!!~a.indexOf(s)});o&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),CS=function(e,t){for(var r=0,a=Object.keys(t);r<a.length;r++){var o=a[r];Object.defineProperty(e,o,{value:t[o],enumerable:!1,writable:!1,configurable:!0})}return e},sl=function(e){var t=e&&e.ownerDocument&&e.ownerDocument.defaultView;return t||Fc},wS=lf(0,0,0,0);function Ic(e){return parseFloat(e)||0}function S1(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return t.reduce(function(a,o){var s=e["border-"+o+"-width"];return a+Ic(s)},0)}function y5(e){for(var t=["top","right","bottom","left"],r={},a=0,o=t;a<o.length;a++){var s=o[a],c=e["padding-"+s];r[s]=Ic(c)}return r}function b5(e){var t=e.getBBox();return lf(0,0,t.width,t.height)}function S5(e){var t=e.clientWidth,r=e.clientHeight;if(!t&&!r)return wS;var a=sl(e).getComputedStyle(e),o=y5(a),s=o.left+o.right,c=o.top+o.bottom,f=Ic(a.width),h=Ic(a.height);if(a.boxSizing==="border-box"&&(Math.round(f+s)!==t&&(f-=S1(a,"left","right")+s),Math.round(h+c)!==r&&(h-=S1(a,"top","bottom")+c)),!w5(e)){var d=Math.round(f+s)-t,g=Math.round(h+c)-r;Math.abs(d)!==1&&(f-=d),Math.abs(g)!==1&&(h-=g)}return lf(o.left,o.top,f,h)}var C5=function(){return typeof SVGGraphicsElement<"u"?function(e){return e instanceof sl(e).SVGGraphicsElement}:function(e){return e instanceof sl(e).SVGElement&&typeof e.getBBox=="function"}}();function w5(e){return e===sl(e).document.documentElement}function x5(e){return jm?C5(e)?b5(e):S5(e):wS}function E5(e){var t=e.x,r=e.y,a=e.width,o=e.height,s=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,c=Object.create(s.prototype);return CS(c,{x:t,y:r,width:a,height:o,top:r,right:t+a,bottom:o+r,left:t}),c}function lf(e,t,r,a){return{x:e,y:t,width:r,height:a}}var A5=function(){function e(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=lf(0,0,0,0),this.target=t}return e.prototype.isActive=function(){var t=x5(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},e}(),T5=function(){function e(t,r){var a=E5(r);CS(this,{target:t,contentRect:a})}return e}(),R5=function(){function e(t,r,a){if(this.activeObservations_=[],this.observations_=new SS,typeof t!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=r,this.callbackCtx_=a}return e.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof sl(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var r=this.observations_;r.has(t)||(r.set(t,new A5(t)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof sl(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var r=this.observations_;r.has(t)&&(r.delete(t),r.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach(function(r){r.isActive()&&t.activeObservations_.push(r)})},e.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,r=this.activeObservations_.map(function(a){return new T5(a.target,a.broadcastRect())});this.callback_.call(t,r,t),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),xS=typeof WeakMap<"u"?new WeakMap:new SS,ES=function(){function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var r=v5.getInstance(),a=new R5(t,r,this);xS.set(this,a)}return e}();["observe","unobserve","disconnect"].forEach(function(e){ES.prototype[e]=function(){var t;return(t=xS.get(this))[e].apply(t,arguments)}});var O5=function(){return typeof Fc.ResizeObserver<"u"?Fc.ResizeObserver:ES}(),mi=new Map;function M5(e){e.forEach(function(t){var r,a=t.target;(r=mi.get(a))===null||r===void 0||r.forEach(function(o){return o(a)})})}var AS=new O5(M5);function N5(e,t){mi.has(e)||(mi.set(e,new Set),AS.observe(e)),mi.get(e).add(t)}function D5(e,t){mi.has(e)&&(mi.get(e).delete(t),mi.get(e).size||(AS.unobserve(e),mi.delete(e)))}function gn(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function C1(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,yS(a.key),a)}}function pn(e,t,r){return t&&C1(e.prototype,t),r&&C1(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function Ls(e,t){return Ls=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Ls(e,t)}function yi(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Ls(e,t)}function js(e){return js=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},js(e)}function Qg(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Qg=function(){return!!e})()}function tt(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function P5(e,t){if(t&&(je(t)=="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return tt(e)}function bi(e){var t=Qg();return function(){var r,a=js(e);if(t){var o=js(this).constructor;r=Reflect.construct(a,arguments,o)}else r=a.apply(this,arguments);return P5(this,r)}}var z5=function(e){yi(r,e);var t=bi(r);function r(){return gn(this,r),t.apply(this,arguments)}return pn(r,[{key:"render",value:function(){return this.props.children}}]),r}(b.Component);function _5(e,t){var r=e.children,a=e.disabled,o=b.useRef(null),s=b.useRef(null),c=b.useContext(Lm),f=typeof r=="function",h=f?r(o):r,d=b.useRef({width:-1,height:-1,offsetWidth:-1,offsetHeight:-1}),g=!f&&b.isValidElement(h)&&Zs(h),v=g?of(h):null,y=af(v,o),S=function(){var T;return Dc(o.current)||(o.current&&je(o.current)==="object"?Dc((T=o.current)===null||T===void 0?void 0:T.nativeElement):null)||Dc(s.current)};b.useImperativeHandle(t,function(){return S()});var w=b.useRef(e);w.current=e;var A=b.useCallback(function(x){var T=w.current,R=T.onResize,O=T.data,j=x.getBoundingClientRect(),z=j.width,N=j.height,_=x.offsetWidth,J=x.offsetHeight,$=Math.floor(z),B=Math.floor(N);if(d.current.width!==$||d.current.height!==B||d.current.offsetWidth!==_||d.current.offsetHeight!==J){var U={width:$,height:B,offsetWidth:_,offsetHeight:J};d.current=U;var W=_===Math.round(z)?z:_,K=J===Math.round(N)?N:J,Y=ie(ie({},U),{},{offsetWidth:W,offsetHeight:K});c==null||c(Y,x,O),R&&Promise.resolve().then(function(){R(Y,x)})}},[]);return b.useEffect(function(){var x=S();return x&&!a&&N5(x,A),function(){return D5(x,A)}},[o.current,a]),b.createElement(z5,{ref:s},g?b.cloneElement(h,{ref:y}):h)}var $5=b.forwardRef(_5),k5="rc-observer-key";function L5(e,t){var r=e.children,a=typeof r=="function"?[r]:$s(r);return a.map(function(o,s){var c=(o==null?void 0:o.key)||"".concat(k5,"-").concat(s);return b.createElement($5,kt({},e,{key:c,ref:s===0?t:void 0}),o)})}var sf=b.forwardRef(L5);sf.Collection=c5;function Hm(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,a=Array(t);r<t;r++)a[r]=e[r];return a}function j5(e){if(Array.isArray(e))return Hm(e)}function TS(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Zg(e,t){if(e){if(typeof e=="string")return Hm(e,t);var r={}.toString.call(e).slice(8,-1);return r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set"?Array.from(e):r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Hm(e,t):void 0}}function H5(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ze(e){return j5(e)||TS(e)||Zg(e)||H5()}var RS=function(t){return+setTimeout(t,16)},OS=function(t){return clearTimeout(t)};typeof window<"u"&&"requestAnimationFrame"in window&&(RS=function(t){return window.requestAnimationFrame(t)},OS=function(t){return window.cancelAnimationFrame(t)});var w1=0,ep=new Map;function MS(e){ep.delete(e)}var Wr=function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;w1+=1;var a=w1;function o(s){if(s===0)MS(a),t();else{var c=RS(function(){o(s-1)});ep.set(a,c)}}return o(r),a};Wr.cancel=function(e){var t=ep.get(e);return MS(e),OS(t)};function NS(e){if(Array.isArray(e))return e}function B5(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var a,o,s,c,f=[],h=!0,d=!1;try{if(s=(r=r.call(e)).next,t===0){if(Object(r)!==r)return;h=!1}else for(;!(h=(a=s.call(r)).done)&&(f.push(a.value),f.length!==t);h=!0);}catch(g){d=!0,o=g}finally{try{if(!h&&r.return!=null&&(c=r.return(),Object(c)!==c))return}finally{if(d)throw o}}return f}}function DS(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ye(e,t){return NS(e)||B5(e,t)||Zg(e,t)||DS()}function Hs(e){for(var t=0,r,a=0,o=e.length;o>=4;++a,o-=4)r=e.charCodeAt(a)&255|(e.charCodeAt(++a)&255)<<8|(e.charCodeAt(++a)&255)<<16|(e.charCodeAt(++a)&255)<<24,r=(r&65535)*1540483477+((r>>>16)*59797<<16),r^=r>>>24,t=(r&65535)*1540483477+((r>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(o){case 3:t^=(e.charCodeAt(a+2)&255)<<16;case 2:t^=(e.charCodeAt(a+1)&255)<<8;case 1:t^=e.charCodeAt(a)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}function or(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function F5(e,t){if(!e)return!1;if(e.contains)return e.contains(t);for(var r=t;r;){if(r===e)return!0;r=r.parentNode}return!1}var x1="data-rc-order",E1="data-rc-priority",I5="rc-util-key",Bm=new Map;function PS(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.mark;return t?t.startsWith("data-")?t:"data-".concat(t):I5}function uf(e){if(e.attachTo)return e.attachTo;var t=document.querySelector("head");return t||document.body}function V5(e){return e==="queue"?"prependQueue":e?"prepend":"append"}function tp(e){return Array.from((Bm.get(e)||e).children).filter(function(t){return t.tagName==="STYLE"})}function zS(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!or())return null;var r=t.csp,a=t.prepend,o=t.priority,s=o===void 0?0:o,c=V5(a),f=c==="prependQueue",h=document.createElement("style");h.setAttribute(x1,c),f&&s&&h.setAttribute(E1,"".concat(s)),r!=null&&r.nonce&&(h.nonce=r==null?void 0:r.nonce),h.innerHTML=e;var d=uf(t),g=d.firstChild;if(a){if(f){var v=(t.styles||tp(d)).filter(function(y){if(!["prepend","prependQueue"].includes(y.getAttribute(x1)))return!1;var S=Number(y.getAttribute(E1)||0);return s>=S});if(v.length)return d.insertBefore(h,v[v.length-1].nextSibling),h}d.insertBefore(h,g)}else d.appendChild(h);return h}function _S(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=uf(t);return(t.styles||tp(r)).find(function(a){return a.getAttribute(PS(t))===e})}function Bs(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=_S(e,t);if(r){var a=uf(t);a.removeChild(r)}}function U5(e,t){var r=Bm.get(e);if(!r||!F5(document,r)){var a=zS("",t),o=a.parentNode;Bm.set(e,o),e.removeChild(a)}}function La(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=uf(r),o=tp(a),s=ie(ie({},r),{},{styles:o});U5(a,s);var c=_S(t,s);if(c){var f,h;if((f=s.csp)!==null&&f!==void 0&&f.nonce&&c.nonce!==((h=s.csp)===null||h===void 0?void 0:h.nonce)){var d;c.nonce=(d=s.csp)===null||d===void 0?void 0:d.nonce}return c.innerHTML!==e&&(c.innerHTML=e),c}var g=zS(e,s);return g.setAttribute(PS(s),t),g}function G5(e,t){if(e==null)return{};var r={};for(var a in e)if({}.hasOwnProperty.call(e,a)){if(t.indexOf(a)!==-1)continue;r[a]=e[a]}return r}function Tn(e,t){if(e==null)return{};var r,a,o=G5(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function Fm(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,a=new Set;function o(s,c){var f=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,h=a.has(s);if(ir(!h,"Warning: There may be circular references"),h)return!1;if(s===c)return!0;if(r&&f>1)return!1;a.add(s);var d=f+1;if(Array.isArray(s)){if(!Array.isArray(c)||s.length!==c.length)return!1;for(var g=0;g<s.length;g++)if(!o(s[g],c[g],d))return!1;return!0}if(s&&c&&je(s)==="object"&&je(c)==="object"){var v=Object.keys(s);return v.length!==Object.keys(c).length?!1:v.every(function(y){return o(s[y],c[y],d)})}return!1}return o(e,t)}var q5="%";function Im(e){return e.join(q5)}var W5=function(){function e(t){gn(this,e),ee(this,"instanceId",void 0),ee(this,"cache",new Map),this.instanceId=t}return pn(e,[{key:"get",value:function(r){return this.opGet(Im(r))}},{key:"opGet",value:function(r){return this.cache.get(r)||null}},{key:"update",value:function(r,a){return this.opUpdate(Im(r),a)}},{key:"opUpdate",value:function(r,a){var o=this.cache.get(r),s=a(o);s===null?this.cache.delete(r):this.cache.set(r,s)}}]),e}(),ul="data-token-hash",Ur="data-css-hash",gi="__cssinjs_instance__";function J5(){var e=Math.random().toString(12).slice(2);if(typeof document<"u"&&document.head&&document.body){var t=document.body.querySelectorAll("style[".concat(Ur,"]"))||[],r=document.head.firstChild;Array.from(t).forEach(function(o){o[gi]=o[gi]||e,o[gi]===e&&document.head.insertBefore(o,r)});var a={};Array.from(document.querySelectorAll("style[".concat(Ur,"]"))).forEach(function(o){var s=o.getAttribute(Ur);if(a[s]){if(o[gi]===e){var c;(c=o.parentNode)===null||c===void 0||c.removeChild(o)}}else a[s]=!0})}return new W5(e)}var eu=b.createContext({hashPriority:"low",cache:J5(),defaultCache:!0});function Y5(e,t){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}var np=function(){function e(){gn(this,e),ee(this,"cache",void 0),ee(this,"keys",void 0),ee(this,"cacheCallTimes",void 0),this.cache=new Map,this.keys=[],this.cacheCallTimes=0}return pn(e,[{key:"size",value:function(){return this.keys.length}},{key:"internalGet",value:function(r){var a,o,s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,c={map:this.cache};return r.forEach(function(f){if(!c)c=void 0;else{var h;c=(h=c)===null||h===void 0||(h=h.map)===null||h===void 0?void 0:h.get(f)}}),(a=c)!==null&&a!==void 0&&a.value&&s&&(c.value[1]=this.cacheCallTimes++),(o=c)===null||o===void 0?void 0:o.value}},{key:"get",value:function(r){var a;return(a=this.internalGet(r,!0))===null||a===void 0?void 0:a[0]}},{key:"has",value:function(r){return!!this.internalGet(r)}},{key:"set",value:function(r,a){var o=this;if(!this.has(r)){if(this.size()+1>e.MAX_CACHE_SIZE+e.MAX_CACHE_OFFSET){var s=this.keys.reduce(function(d,g){var v=ye(d,2),y=v[1];return o.internalGet(g)[1]<y?[g,o.internalGet(g)[1]]:d},[this.keys[0],this.cacheCallTimes]),c=ye(s,1),f=c[0];this.delete(f)}this.keys.push(r)}var h=this.cache;r.forEach(function(d,g){if(g===r.length-1)h.set(d,{value:[a,o.cacheCallTimes++]});else{var v=h.get(d);v?v.map||(v.map=new Map):h.set(d,{map:new Map}),h=h.get(d).map}})}},{key:"deleteByPath",value:function(r,a){var o=r.get(a[0]);if(a.length===1){var s;return o.map?r.set(a[0],{map:o.map}):r.delete(a[0]),(s=o.value)===null||s===void 0?void 0:s[0]}var c=this.deleteByPath(o.map,a.slice(1));return(!o.map||o.map.size===0)&&!o.value&&r.delete(a[0]),c}},{key:"delete",value:function(r){if(this.has(r))return this.keys=this.keys.filter(function(a){return!Y5(a,r)}),this.deleteByPath(this.cache,r)}}]),e}();ee(np,"MAX_CACHE_SIZE",20);ee(np,"MAX_CACHE_OFFSET",5);var A1=0,$S=function(){function e(t){gn(this,e),ee(this,"derivatives",void 0),ee(this,"id",void 0),this.derivatives=Array.isArray(t)?t:[t],this.id=A1,t.length===0&&(t.length>0,void 0),A1+=1}return pn(e,[{key:"getDerivativeToken",value:function(r){return this.derivatives.reduce(function(a,o){return o(r,a)},void 0)}}]),e}(),kh=new np;function Vm(e){var t=Array.isArray(e)?e:[e];return kh.has(t)||kh.set(t,new $S(t)),kh.get(t)}var X5=new WeakMap,Lh={};function K5(e,t){for(var r=X5,a=0;a<t.length;a+=1){var o=t[a];r.has(o)||r.set(o,new WeakMap),r=r.get(o)}return r.has(Lh)||r.set(Lh,e()),r.get(Lh)}var T1=new WeakMap;function Os(e){var t=T1.get(e)||"";return t||(Object.keys(e).forEach(function(r){var a=e[r];t+=r,a instanceof $S?t+=a.id:a&&je(a)==="object"?t+=Os(a):t+=a}),t=Hs(t),T1.set(e,t)),t}function R1(e,t){return Hs("".concat(t,"_").concat(Os(e)))}var Um=or();function We(e){return typeof e=="number"?"".concat(e,"px"):e}function Vc(e,t,r){var a,o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},s=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!1;if(s)return e;var c=ie(ie({},o),{},(a={},ee(a,ul,t),ee(a,Ur,r),a)),f=Object.keys(c).map(function(h){var d=c[h];return d?"".concat(h,'="').concat(d,'"'):null}).filter(function(h){return h}).join(" ");return"<style ".concat(f,">").concat(e,"</style>")}var Pc=function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return"--".concat(r?"".concat(r,"-"):"").concat(t).replace(/([a-z0-9])([A-Z])/g,"$1-$2").replace(/([A-Z]+)([A-Z][a-z0-9]+)/g,"$1-$2").replace(/([a-z])([A-Z0-9])/g,"$1-$2").toLowerCase()},Q5=function(t,r,a){return Object.keys(t).length?".".concat(r).concat(a!=null&&a.scope?".".concat(a.scope):"","{").concat(Object.entries(t).map(function(o){var s=ye(o,2),c=s[0],f=s[1];return"".concat(c,":").concat(f,";")}).join(""),"}"):""},kS=function(t,r,a){var o={},s={};return Object.entries(t).forEach(function(c){var f,h,d=ye(c,2),g=d[0],v=d[1];if(a!=null&&(f=a.preserve)!==null&&f!==void 0&&f[g])s[g]=v;else if((typeof v=="string"||typeof v=="number")&&!(a!=null&&(h=a.ignore)!==null&&h!==void 0&&h[g])){var y,S=Pc(g,a==null?void 0:a.prefix);o[S]=typeof v=="number"&&!(a!=null&&(y=a.unitless)!==null&&y!==void 0&&y[g])?"".concat(v,"px"):String(v),s[g]="var(".concat(S,")")}}),[s,Q5(o,r,{scope:a==null?void 0:a.scope})]},O1=or()?b.useLayoutEffect:b.useEffect,Cn=function(t,r){var a=b.useRef(!0);O1(function(){return t(a.current)},r),O1(function(){return a.current=!1,function(){a.current=!0}},[])},M1=function(t,r){Cn(function(a){if(!a)return t()},r)},Z5=ie({},ef),N1=Z5.useInsertionEffect,e4=function(t,r,a){b.useMemo(t,a),Cn(function(){return r(!0)},a)},t4=N1?function(e,t,r){return N1(function(){return e(),t()},r)}:e4,n4=ie({},ef),r4=n4.useInsertionEffect,a4=function(t){var r=[],a=!1;function o(s){a||r.push(s)}return b.useEffect(function(){return a=!1,function(){a=!0,r.length&&r.forEach(function(s){return s()})}},t),o},i4=function(){return function(t){t()}},o4=typeof r4<"u"?a4:i4;function rp(e,t,r,a,o){var s=b.useContext(eu),c=s.cache,f=[e].concat(ze(t)),h=Im(f),d=o4([h]),g=function(w){c.opUpdate(h,function(A){var x=A||[void 0,void 0],T=ye(x,2),R=T[0],O=R===void 0?0:R,j=T[1],z=j,N=z||r(),_=[O,N];return w?w(_):_})};b.useMemo(function(){g()},[h]);var v=c.opGet(h),y=v[1];return t4(function(){o==null||o(y)},function(S){return g(function(w){var A=ye(w,2),x=A[0],T=A[1];return S&&x===0&&(o==null||o(y)),[x+1,T]}),function(){c.opUpdate(h,function(w){var A=w||[],x=ye(A,2),T=x[0],R=T===void 0?0:T,O=x[1],j=R-1;return j===0?(d(function(){(S||!c.opGet(h))&&(a==null||a(O,!1))}),null):[R-1,O]})}},[h]),y}var l4={},s4="css",Ki=new Map;function u4(e){Ki.set(e,(Ki.get(e)||0)+1)}function c4(e,t){if(typeof document<"u"){var r=document.querySelectorAll("style[".concat(ul,'="').concat(e,'"]'));r.forEach(function(a){if(a[gi]===t){var o;(o=a.parentNode)===null||o===void 0||o.removeChild(a)}})}}var f4=0;function d4(e,t){Ki.set(e,(Ki.get(e)||0)-1);var r=Array.from(Ki.keys()),a=r.filter(function(o){var s=Ki.get(o)||0;return s<=0});r.length-a.length>f4&&a.forEach(function(o){c4(o,t),Ki.delete(o)})}var h4=function(t,r,a,o){var s=a.getDerivativeToken(t),c=ie(ie({},s),r);return o&&(c=o(c)),c},LS="token";function m4(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=b.useContext(eu),o=a.cache.instanceId,s=a.container,c=r.salt,f=c===void 0?"":c,h=r.override,d=h===void 0?l4:h,g=r.formatToken,v=r.getComputedToken,y=r.cssVar,S=K5(function(){return Object.assign.apply(Object,[{}].concat(ze(t)))},t),w=Os(S),A=Os(d),x=y?Os(y):"",T=rp(LS,[f,e.id,w,A,x],function(){var R,O=v?v(S,d,e):h4(S,d,e,g),j=ie({},O),z="";if(y){var N=kS(O,y.key,{prefix:y.prefix,ignore:y.ignore,unitless:y.unitless,preserve:y.preserve}),_=ye(N,2);O=_[0],z=_[1]}var J=R1(O,f);O._tokenKey=J,j._tokenKey=R1(j,f);var $=(R=y==null?void 0:y.key)!==null&&R!==void 0?R:J;O._themeKey=$,u4($);var B="".concat(s4,"-").concat(Hs(J));return O._hashId=B,[O,B,j,z,(y==null?void 0:y.key)||""]},function(R){d4(R[0]._themeKey,o)},function(R){var O=ye(R,4),j=O[0],z=O[3];if(y&&z){var N=La(z,Hs("css-variables-".concat(j._themeKey)),{mark:Ur,prepend:"queue",attachTo:s,priority:-999});N[gi]=o,N.setAttribute(ul,j._themeKey)}});return T}var g4=function(t,r,a){var o=ye(t,5),s=o[2],c=o[3],f=o[4],h=a||{},d=h.plain;if(!c)return null;var g=s._tokenKey,v=-999,y={"data-rc-order":"prependQueue","data-rc-priority":"".concat(v)},S=Vc(c,f,g,y,d);return[v,g,S]},p4={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},jS="comm",HS="rule",BS="decl",v4="@import",y4="@namespace",b4="@keyframes",S4="@layer",FS=Math.abs,ap=String.fromCharCode;function IS(e){return e.trim()}function zc(e,t,r){return e.replace(t,r)}function C4(e,t,r){return e.indexOf(t,r)}function al(e,t){return e.charCodeAt(t)|0}function cl(e,t,r){return e.slice(t,r)}function ua(e){return e.length}function w4(e){return e.length}function mc(e,t){return t.push(e),e}var cf=1,fl=1,VS=0,Nr=0,rn=0,pl="";function ip(e,t,r,a,o,s,c,f){return{value:e,root:t,parent:r,type:a,props:o,children:s,line:cf,column:fl,length:c,return:"",siblings:f}}function x4(){return rn}function E4(){return rn=Nr>0?al(pl,--Nr):0,fl--,rn===10&&(fl=1,cf--),rn}function Gr(){return rn=Nr<VS?al(pl,Nr++):0,fl++,rn===10&&(fl=1,cf++),rn}function pi(){return al(pl,Nr)}function _c(){return Nr}function ff(e,t){return cl(pl,e,t)}function Fs(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function A4(e){return cf=fl=1,VS=ua(pl=e),Nr=0,[]}function T4(e){return pl="",e}function jh(e){return IS(ff(Nr-1,Gm(e===91?e+2:e===40?e+1:e)))}function R4(e){for(;(rn=pi())&&rn<33;)Gr();return Fs(e)>2||Fs(rn)>3?"":" "}function O4(e,t){for(;--t&&Gr()&&!(rn<48||rn>102||rn>57&&rn<65||rn>70&&rn<97););return ff(e,_c()+(t<6&&pi()==32&&Gr()==32))}function Gm(e){for(;Gr();)switch(rn){case e:return Nr;case 34:case 39:e!==34&&e!==39&&Gm(rn);break;case 40:e===41&&Gm(e);break;case 92:Gr();break}return Nr}function M4(e,t){for(;Gr()&&e+rn!==57;)if(e+rn===84&&pi()===47)break;return"/*"+ff(t,Nr-1)+"*"+ap(e===47?e:Gr())}function N4(e){for(;!Fs(pi());)Gr();return ff(e,Nr)}function D4(e){return T4($c("",null,null,null,[""],e=A4(e),0,[0],e))}function $c(e,t,r,a,o,s,c,f,h){for(var d=0,g=0,v=c,y=0,S=0,w=0,A=1,x=1,T=1,R=0,O="",j=o,z=s,N=a,_=O;x;)switch(w=R,R=Gr()){case 40:if(w!=108&&al(_,v-1)==58){C4(_+=zc(jh(R),"&","&\f"),"&\f",FS(d?f[d-1]:0))!=-1&&(T=-1);break}case 34:case 39:case 91:_+=jh(R);break;case 9:case 10:case 13:case 32:_+=R4(w);break;case 92:_+=O4(_c()-1,7);continue;case 47:switch(pi()){case 42:case 47:mc(P4(M4(Gr(),_c()),t,r,h),h),(Fs(w||1)==5||Fs(pi()||1)==5)&&ua(_)&&cl(_,-1,void 0)!==" "&&(_+=" ");break;default:_+="/"}break;case 123*A:f[d++]=ua(_)*T;case 125*A:case 59:case 0:switch(R){case 0:case 125:x=0;case 59+g:T==-1&&(_=zc(_,/\f/g,"")),S>0&&(ua(_)-v||A===0&&w===47)&&mc(S>32?P1(_+";",a,r,v-1,h):P1(zc(_," ","")+";",a,r,v-2,h),h);break;case 59:_+=";";default:if(mc(N=D1(_,t,r,d,g,o,f,O,j=[],z=[],v,s),s),R===123)if(g===0)$c(_,t,N,N,j,s,v,f,z);else{switch(y){case 99:if(al(_,3)===110)break;case 108:if(al(_,2)===97)break;default:g=0;case 100:case 109:case 115:}g?$c(e,N,N,a&&mc(D1(e,N,N,0,0,o,f,O,o,j=[],v,z),z),o,z,v,f,a?j:z):$c(_,N,N,N,[""],z,0,f,z)}}d=g=S=0,A=T=1,O=_="",v=c;break;case 58:v=1+ua(_),S=w;default:if(A<1){if(R==123)--A;else if(R==125&&A++==0&&E4()==125)continue}switch(_+=ap(R),R*A){case 38:T=g>0?1:(_+="\f",-1);break;case 44:f[d++]=(ua(_)-1)*T,T=1;break;case 64:pi()===45&&(_+=jh(Gr())),y=pi(),g=v=ua(O=_+=N4(_c())),R++;break;case 45:w===45&&ua(_)==2&&(A=0)}}return s}function D1(e,t,r,a,o,s,c,f,h,d,g,v){for(var y=o-1,S=o===0?s:[""],w=w4(S),A=0,x=0,T=0;A<a;++A)for(var R=0,O=cl(e,y+1,y=FS(x=c[A])),j=e;R<w;++R)(j=IS(x>0?S[R]+" "+O:zc(O,/&\f/g,S[R])))&&(h[T++]=j);return ip(e,t,r,o===0?HS:f,h,d,g,v)}function P4(e,t,r,a){return ip(e,t,r,jS,ap(x4()),cl(e,2,-2),0,a)}function P1(e,t,r,a,o){return ip(e,t,r,BS,cl(e,0,a),cl(e,a+1,-1),a,o)}function qm(e,t){for(var r="",a=0;a<e.length;a++)r+=t(e[a],a,e,t)||"";return r}function z4(e,t,r,a){switch(e.type){case S4:if(e.children.length)break;case v4:case y4:case BS:return e.return=e.return||e.value;case jS:return"";case b4:return e.return=e.value+"{"+qm(e.children,a)+"}";case HS:if(!ua(e.value=e.props.join(",")))return""}return ua(r=qm(e.children,a))?e.return=e.value+"{"+r+"}":""}var z1="data-ant-cssinjs-cache-path",US="_FILE_STYLE__",eo,GS=!0;function _4(){if(!eo&&(eo={},or())){var e=document.createElement("div");e.className=z1,e.style.position="fixed",e.style.visibility="hidden",e.style.top="-9999px",document.body.appendChild(e);var t=getComputedStyle(e).content||"";t=t.replace(/^"/,"").replace(/"$/,""),t.split(";").forEach(function(o){var s=o.split(":"),c=ye(s,2),f=c[0],h=c[1];eo[f]=h});var r=document.querySelector("style[".concat(z1,"]"));if(r){var a;GS=!1,(a=r.parentNode)===null||a===void 0||a.removeChild(r)}document.body.removeChild(e)}}function $4(e){return _4(),!!eo[e]}function k4(e){var t=eo[e],r=null;if(t&&or())if(GS)r=US;else{var a=document.querySelector("style[".concat(Ur,'="').concat(eo[e],'"]'));a?r=a.innerHTML:delete eo[e]}return[r,t]}var L4="_skip_check_",qS="_multi_value_";function kc(e){var t=qm(D4(e),z4);return t.replace(/\{%%%\:[^;];}/g,";")}function j4(e){return je(e)==="object"&&e&&(L4 in e||qS in e)}function _1(e,t,r){if(!t)return e;var a=".".concat(t),o=r==="low"?":where(".concat(a,")"):a,s=e.split(",").map(function(c){var f,h=c.trim().split(/\s+/),d=h[0]||"",g=((f=d.match(/^\w+/))===null||f===void 0?void 0:f[0])||"";return d="".concat(g).concat(o).concat(d.slice(g.length)),[d].concat(ze(h.slice(1))).join(" ")});return s.join(",")}var H4=function e(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{root:!0,parentSelectors:[]},o=a.root,s=a.injectHash,c=a.parentSelectors,f=r.hashId,h=r.layer;r.path;var d=r.hashPriority,g=r.transformers,v=g===void 0?[]:g;r.linters;var y="",S={};function w(T){var R=T.getName(f);if(!S[R]){var O=e(T.style,r,{root:!1,parentSelectors:c}),j=ye(O,1),z=j[0];S[R]="@keyframes ".concat(T.getName(f)).concat(z)}}function A(T){var R=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return T.forEach(function(O){Array.isArray(O)?A(O,R):O&&R.push(O)}),R}var x=A(Array.isArray(t)?t:[t]);return x.forEach(function(T){var R=typeof T=="string"&&!o?{}:T;if(typeof R=="string")y+="".concat(R,`
`);else if(R._keyframe)w(R);else{var O=v.reduce(function(j,z){var N;return(z==null||(N=z.visit)===null||N===void 0?void 0:N.call(z,j))||j},R);Object.keys(O).forEach(function(j){var z=O[j];if(je(z)==="object"&&z&&(j!=="animationName"||!z._keyframe)&&!j4(z)){var N=!1,_=j.trim(),J=!1;(o||s)&&f?_.startsWith("@")?N=!0:_==="&"?_=_1("",f,d):_=_1(j,f,d):o&&!f&&(_==="&"||_==="")&&(_="",J=!0);var $=e(z,r,{root:J,injectHash:N,parentSelectors:[].concat(ze(c),[_])}),B=ye($,2),U=B[0],W=B[1];S=ie(ie({},S),W),y+="".concat(_).concat(U)}else{let G=function(P,k){var I=P.replace(/[A-Z]/g,function(C){return"-".concat(C.toLowerCase())}),ne=k;!p4[P]&&typeof ne=="number"&&ne!==0&&(ne="".concat(ne,"px")),P==="animationName"&&k!==null&&k!==void 0&&k._keyframe&&(w(k),ne=k.getName(f)),y+="".concat(I,":").concat(ne,";")};var K,Y=(K=z==null?void 0:z.value)!==null&&K!==void 0?K:z;je(z)==="object"&&z!==null&&z!==void 0&&z[qS]&&Array.isArray(Y)?Y.forEach(function(P){G(j,P)}):G(j,Y)}})}}),o?h&&(y&&(y="@layer ".concat(h.name," {").concat(y,"}")),h.dependencies&&(S["@layer ".concat(h.name)]=h.dependencies.map(function(T){return"@layer ".concat(T,", ").concat(h.name,";")}).join(`
`))):y="{".concat(y,"}"),[y,S]};function WS(e,t){return Hs("".concat(e.join("%")).concat(t))}function B4(){return null}var JS="style";function Wm(e,t){var r=e.token,a=e.path,o=e.hashId,s=e.layer,c=e.nonce,f=e.clientOnly,h=e.order,d=h===void 0?0:h,g=b.useContext(eu),v=g.autoClear;g.mock;var y=g.defaultCache,S=g.hashPriority,w=g.container,A=g.ssrInline,x=g.transformers,T=g.linters,R=g.cache,O=g.layer,j=r._tokenKey,z=[j];O&&z.push("layer"),z.push.apply(z,ze(a));var N=Um,_=rp(JS,z,function(){var W=z.join("|");if($4(W)){var K=k4(W),Y=ye(K,2),G=Y[0],P=Y[1];if(G)return[G,j,P,{},f,d]}var k=t(),I=H4(k,{hashId:o,hashPriority:S,layer:O?s:void 0,path:a.join("-"),transformers:x,linters:T}),ne=ye(I,2),C=ne[0],F=ne[1],Q=kc(C),M=WS(z,Q);return[Q,j,M,F,f,d]},function(W,K){var Y=ye(W,3),G=Y[2];(K||v)&&Um&&Bs(G,{mark:Ur})},function(W){var K=ye(W,4),Y=K[0];K[1];var G=K[2],P=K[3];if(N&&Y!==US){var k={mark:Ur,prepend:O?!1:"queue",attachTo:w,priority:d},I=typeof c=="function"?c():c;I&&(k.csp={nonce:I});var ne=[],C=[];Object.keys(P).forEach(function(Q){Q.startsWith("@layer")?ne.push(Q):C.push(Q)}),ne.forEach(function(Q){La(kc(P[Q]),"_layer-".concat(Q),ie(ie({},k),{},{prepend:!0}))});var F=La(Y,G,k);F[gi]=R.instanceId,F.setAttribute(ul,j),C.forEach(function(Q){La(kc(P[Q]),"_effect-".concat(Q),k)})}}),J=ye(_,3),$=J[0],B=J[1],U=J[2];return function(W){var K;if(!A||N||!y)K=b.createElement(B4,null);else{var Y;K=b.createElement("style",kt({},(Y={},ee(Y,ul,B),ee(Y,Ur,U),Y),{dangerouslySetInnerHTML:{__html:$}}))}return b.createElement(b.Fragment,null,K,W)}}var F4=function(t,r,a){var o=ye(t,6),s=o[0],c=o[1],f=o[2],h=o[3],d=o[4],g=o[5],v=a||{},y=v.plain;if(d)return null;var S=s,w={"data-rc-order":"prependQueue","data-rc-priority":"".concat(g)};return S=Vc(s,c,f,w,y),h&&Object.keys(h).forEach(function(A){if(!r[A]){r[A]=!0;var x=kc(h[A]),T=Vc(x,c,"_effect-".concat(A),w,y);A.startsWith("@layer")?S=T+S:S+=T}}),[g,f,S]},YS="cssVar",I4=function(t,r){var a=t.key,o=t.prefix,s=t.unitless,c=t.ignore,f=t.token,h=t.scope,d=h===void 0?"":h,g=b.useContext(eu),v=g.cache.instanceId,y=g.container,S=f._tokenKey,w=[].concat(ze(t.path),[a,d,S]),A=rp(YS,w,function(){var x=r(),T=kS(x,a,{prefix:o,unitless:s,ignore:c,scope:d}),R=ye(T,2),O=R[0],j=R[1],z=WS(w,j);return[O,j,z,a]},function(x){var T=ye(x,3),R=T[2];Um&&Bs(R,{mark:Ur})},function(x){var T=ye(x,3),R=T[1],O=T[2];if(R){var j=La(R,O,{mark:Ur,prepend:"queue",attachTo:y,priority:-999});j[gi]=v,j.setAttribute(ul,a)}});return A},V4=function(t,r,a){var o=ye(t,4),s=o[1],c=o[2],f=o[3],h=a||{},d=h.plain;if(!s)return null;var g=-999,v={"data-rc-order":"prependQueue","data-rc-priority":"".concat(g)},y=Vc(s,f,c,v,d);return[g,c,y]},vs;vs={},ee(vs,JS,F4),ee(vs,LS,g4),ee(vs,YS,V4);var Pr=function(){function e(t,r){gn(this,e),ee(this,"name",void 0),ee(this,"style",void 0),ee(this,"_keyframe",!0),this.name=t,this.style=r}return pn(e,[{key:"getName",value:function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return r?"".concat(r,"-").concat(this.name):this.name}}]),e}();function Wo(e){return e.notSplit=!0,e}Wo(["borderTop","borderBottom"]),Wo(["borderTop"]),Wo(["borderBottom"]),Wo(["borderLeft","borderRight"]),Wo(["borderLeft"]),Wo(["borderRight"]);var op=b.createContext({});function U4(e){return NS(e)||TS(e)||Zg(e)||DS()}function fa(e,t){for(var r=e,a=0;a<t.length;a+=1){if(r==null)return;r=r[t[a]]}return r}function XS(e,t,r,a){if(!t.length)return r;var o=U4(t),s=o[0],c=o.slice(1),f;return!e&&typeof s=="number"?f=[]:Array.isArray(e)?f=ze(e):f=ie({},e),a&&r===void 0&&c.length===1?delete f[s][c[0]]:f[s]=XS(f[s],c,r,a),f}function Ir(e,t,r){var a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;return t.length&&a&&r===void 0&&!fa(e,t.slice(0,-1))?e:XS(e,t,r,a)}function G4(e){return je(e)==="object"&&e!==null&&Object.getPrototypeOf(e)===Object.prototype}function $1(e){return Array.isArray(e)?[]:{}}var q4=typeof Reflect>"u"?Object.keys:Reflect.ownKeys;function tl(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var a=$1(t[0]);return t.forEach(function(o){function s(c,f){var h=new Set(f),d=fa(o,c),g=Array.isArray(d);if(g||G4(d)){if(!h.has(d)){h.add(d);var v=fa(a,c);g?a=Ir(a,c,[]):(!v||je(v)!=="object")&&(a=Ir(a,c,$1(d))),q4(d).forEach(function(y){s([].concat(ze(c),[y]),h)})}}else a=Ir(a,c,d)}s([])}),a}function W4(){}const J4=b.createContext({}),KS=()=>{const e=()=>{};return e.deprecated=W4,e},Y4=b.createContext(void 0),Zn="${label} is not a valid ${type}",df={Modal:{okText:"OK",cancelText:"Cancel",justOkText:"OK"},Form:{optional:"(optional)",defaultValidateMessages:{default:"Field validation error for ${label}",required:"Please enter ${label}",enum:"${label} must be one of [${enum}]",whitespace:"${label} cannot be a blank character",date:{format:"${label} date format is invalid",parse:"${label} cannot be converted to a date",invalid:"${label} is an invalid date"},types:{string:Zn,method:Zn,array:Zn,object:Zn,number:Zn,date:Zn,boolean:Zn,integer:Zn,float:Zn,regexp:Zn,email:Zn,url:Zn,hex:Zn},string:{len:"${label} must be ${len} characters",min:"${label} must be at least ${min} characters",max:"${label} must be up to ${max} characters",range:"${label} must be between ${min}-${max} characters"},number:{len:"${label} must be equal to ${len}",min:"${label} must be minimum ${min}",max:"${label} must be maximum ${max}",range:"${label} must be between ${min}-${max}"},array:{len:"Must be ${len} ${label}",min:"At least ${min} ${label}",max:"At most ${max} ${label}",range:"The amount of ${label} must be between ${min}-${max}"},pattern:{mismatch:"${label} does not match the pattern ${pattern}"}}}};Object.assign({},df.Modal);let Lc=[];const k1=()=>Lc.reduce((e,t)=>Object.assign(Object.assign({},e),t),df.Modal);function X4(e){if(e){const t=Object.assign({},e);return Lc.push(t),k1(),()=>{Lc=Lc.filter(r=>r!==t),k1()}}Object.assign({},df.Modal)}const QS=b.createContext(void 0),K4="internalMark",Q4=e=>{const{locale:t={},children:r,_ANT_MARK__:a}=e;b.useEffect(()=>X4(t==null?void 0:t.Modal),[t]);const o=b.useMemo(()=>Object.assign(Object.assign({},t),{exist:!0}),[t]);return b.createElement(QS.Provider,{value:o},r)},ZS={blue:"#1677FF",purple:"#722ED1",cyan:"#13C2C2",green:"#52C41A",magenta:"#EB2F96",pink:"#EB2F96",red:"#F5222D",orange:"#FA8C16",yellow:"#FADB14",volcano:"#FA541C",geekblue:"#2F54EB",gold:"#FAAD14",lime:"#A0D911"},Is=Object.assign(Object.assign({},ZS),{colorPrimary:"#1677ff",colorSuccess:"#52c41a",colorWarning:"#faad14",colorError:"#ff4d4f",colorInfo:"#1677ff",colorLink:"",colorTextBase:"",colorBgBase:"",fontFamily:`-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,fontFamilyCode:"'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",fontSize:14,lineWidth:1,lineType:"solid",motionUnit:.1,motionBase:0,motionEaseOutCirc:"cubic-bezier(0.08, 0.82, 0.17, 1)",motionEaseInOutCirc:"cubic-bezier(0.78, 0.14, 0.15, 0.86)",motionEaseOut:"cubic-bezier(0.215, 0.61, 0.355, 1)",motionEaseInOut:"cubic-bezier(0.645, 0.045, 0.355, 1)",motionEaseOutBack:"cubic-bezier(0.12, 0.4, 0.29, 1.46)",motionEaseInBack:"cubic-bezier(0.71, -0.46, 0.88, 0.6)",motionEaseInQuint:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",motionEaseOutQuint:"cubic-bezier(0.23, 1, 0.32, 1)",borderRadius:6,sizeUnit:4,sizeStep:4,sizePopupArrow:16,controlHeight:32,zIndexBase:0,zIndexPopupBase:1e3,opacityImage:1,wireframe:!1,motion:!0}),mn=Math.round;function Hh(e,t){const r=e.replace(/^[^(]*\((.*)/,"$1").replace(/\).*/,"").match(/\d*\.?\d+%?/g)||[],a=r.map(o=>parseFloat(o));for(let o=0;o<3;o+=1)a[o]=t(a[o]||0,r[o]||"",o);return r[3]?a[3]=r[3].includes("%")?a[3]/100:a[3]:a[3]=1,a}const L1=(e,t,r)=>r===0?e:e/100;function ys(e,t){const r=t||255;return e>r?r:e<0?0:e}class jt{constructor(t){ee(this,"isValid",!0),ee(this,"r",0),ee(this,"g",0),ee(this,"b",0),ee(this,"a",1),ee(this,"_h",void 0),ee(this,"_s",void 0),ee(this,"_l",void 0),ee(this,"_v",void 0),ee(this,"_max",void 0),ee(this,"_min",void 0),ee(this,"_brightness",void 0);function r(a){return a[0]in t&&a[1]in t&&a[2]in t}if(t)if(typeof t=="string"){let o=function(s){return a.startsWith(s)};const a=t.trim();/^#?[A-F\d]{3,8}$/i.test(a)?this.fromHexString(a):o("rgb")?this.fromRgbString(a):o("hsl")?this.fromHslString(a):(o("hsv")||o("hsb"))&&this.fromHsvString(a)}else if(t instanceof jt)this.r=t.r,this.g=t.g,this.b=t.b,this.a=t.a,this._h=t._h,this._s=t._s,this._l=t._l,this._v=t._v;else if(r("rgb"))this.r=ys(t.r),this.g=ys(t.g),this.b=ys(t.b),this.a=typeof t.a=="number"?ys(t.a,1):1;else if(r("hsl"))this.fromHsl(t);else if(r("hsv"))this.fromHsv(t);else throw new Error("@ant-design/fast-color: unsupported input "+JSON.stringify(t))}setR(t){return this._sc("r",t)}setG(t){return this._sc("g",t)}setB(t){return this._sc("b",t)}setA(t){return this._sc("a",t,1)}setHue(t){const r=this.toHsv();return r.h=t,this._c(r)}getLuminance(){function t(s){const c=s/255;return c<=.03928?c/12.92:Math.pow((c+.055)/1.055,2.4)}const r=t(this.r),a=t(this.g),o=t(this.b);return .2126*r+.7152*a+.0722*o}getHue(){if(typeof this._h>"u"){const t=this.getMax()-this.getMin();t===0?this._h=0:this._h=mn(60*(this.r===this.getMax()?(this.g-this.b)/t+(this.g<this.b?6:0):this.g===this.getMax()?(this.b-this.r)/t+2:(this.r-this.g)/t+4))}return this._h}getSaturation(){if(typeof this._s>"u"){const t=this.getMax()-this.getMin();t===0?this._s=0:this._s=t/this.getMax()}return this._s}getLightness(){return typeof this._l>"u"&&(this._l=(this.getMax()+this.getMin())/510),this._l}getValue(){return typeof this._v>"u"&&(this._v=this.getMax()/255),this._v}getBrightness(){return typeof this._brightness>"u"&&(this._brightness=(this.r*299+this.g*587+this.b*114)/1e3),this._brightness}darken(t=10){const r=this.getHue(),a=this.getSaturation();let o=this.getLightness()-t/100;return o<0&&(o=0),this._c({h:r,s:a,l:o,a:this.a})}lighten(t=10){const r=this.getHue(),a=this.getSaturation();let o=this.getLightness()+t/100;return o>1&&(o=1),this._c({h:r,s:a,l:o,a:this.a})}mix(t,r=50){const a=this._c(t),o=r/100,s=f=>(a[f]-this[f])*o+this[f],c={r:mn(s("r")),g:mn(s("g")),b:mn(s("b")),a:mn(s("a")*100)/100};return this._c(c)}tint(t=10){return this.mix({r:255,g:255,b:255,a:1},t)}shade(t=10){return this.mix({r:0,g:0,b:0,a:1},t)}onBackground(t){const r=this._c(t),a=this.a+r.a*(1-this.a),o=s=>mn((this[s]*this.a+r[s]*r.a*(1-this.a))/a);return this._c({r:o("r"),g:o("g"),b:o("b"),a})}isDark(){return this.getBrightness()<128}isLight(){return this.getBrightness()>=128}equals(t){return this.r===t.r&&this.g===t.g&&this.b===t.b&&this.a===t.a}clone(){return this._c(this)}toHexString(){let t="#";const r=(this.r||0).toString(16);t+=r.length===2?r:"0"+r;const a=(this.g||0).toString(16);t+=a.length===2?a:"0"+a;const o=(this.b||0).toString(16);if(t+=o.length===2?o:"0"+o,typeof this.a=="number"&&this.a>=0&&this.a<1){const s=mn(this.a*255).toString(16);t+=s.length===2?s:"0"+s}return t}toHsl(){return{h:this.getHue(),s:this.getSaturation(),l:this.getLightness(),a:this.a}}toHslString(){const t=this.getHue(),r=mn(this.getSaturation()*100),a=mn(this.getLightness()*100);return this.a!==1?`hsla(${t},${r}%,${a}%,${this.a})`:`hsl(${t},${r}%,${a}%)`}toHsv(){return{h:this.getHue(),s:this.getSaturation(),v:this.getValue(),a:this.a}}toRgb(){return{r:this.r,g:this.g,b:this.b,a:this.a}}toRgbString(){return this.a!==1?`rgba(${this.r},${this.g},${this.b},${this.a})`:`rgb(${this.r},${this.g},${this.b})`}toString(){return this.toRgbString()}_sc(t,r,a){const o=this.clone();return o[t]=ys(r,a),o}_c(t){return new this.constructor(t)}getMax(){return typeof this._max>"u"&&(this._max=Math.max(this.r,this.g,this.b)),this._max}getMin(){return typeof this._min>"u"&&(this._min=Math.min(this.r,this.g,this.b)),this._min}fromHexString(t){const r=t.replace("#","");function a(o,s){return parseInt(r[o]+r[s||o],16)}r.length<6?(this.r=a(0),this.g=a(1),this.b=a(2),this.a=r[3]?a(3)/255:1):(this.r=a(0,1),this.g=a(2,3),this.b=a(4,5),this.a=r[6]?a(6,7)/255:1)}fromHsl({h:t,s:r,l:a,a:o}){if(this._h=t%360,this._s=r,this._l=a,this.a=typeof o=="number"?o:1,r<=0){const y=mn(a*255);this.r=y,this.g=y,this.b=y}let s=0,c=0,f=0;const h=t/60,d=(1-Math.abs(2*a-1))*r,g=d*(1-Math.abs(h%2-1));h>=0&&h<1?(s=d,c=g):h>=1&&h<2?(s=g,c=d):h>=2&&h<3?(c=d,f=g):h>=3&&h<4?(c=g,f=d):h>=4&&h<5?(s=g,f=d):h>=5&&h<6&&(s=d,f=g);const v=a-d/2;this.r=mn((s+v)*255),this.g=mn((c+v)*255),this.b=mn((f+v)*255)}fromHsv({h:t,s:r,v:a,a:o}){this._h=t%360,this._s=r,this._v=a,this.a=typeof o=="number"?o:1;const s=mn(a*255);if(this.r=s,this.g=s,this.b=s,r<=0)return;const c=t/60,f=Math.floor(c),h=c-f,d=mn(a*(1-r)*255),g=mn(a*(1-r*h)*255),v=mn(a*(1-r*(1-h))*255);switch(f){case 0:this.g=v,this.b=d;break;case 1:this.r=g,this.b=d;break;case 2:this.r=d,this.b=v;break;case 3:this.r=d,this.g=g;break;case 4:this.r=v,this.g=d;break;case 5:default:this.g=d,this.b=g;break}}fromHsvString(t){const r=Hh(t,L1);this.fromHsv({h:r[0],s:r[1],v:r[2],a:r[3]})}fromHslString(t){const r=Hh(t,L1);this.fromHsl({h:r[0],s:r[1],l:r[2],a:r[3]})}fromRgbString(t){const r=Hh(t,(a,o)=>o.includes("%")?mn(a/100*255):a);this.r=r[0],this.g=r[1],this.b=r[2],this.a=r[3]}}var gc=2,j1=.16,Z4=.05,e9=.05,t9=.15,eC=5,tC=4,n9=[{index:7,amount:15},{index:6,amount:25},{index:5,amount:30},{index:5,amount:45},{index:5,amount:65},{index:5,amount:85},{index:4,amount:90},{index:3,amount:95},{index:2,amount:97},{index:1,amount:98}];function H1(e,t,r){var a;return Math.round(e.h)>=60&&Math.round(e.h)<=240?a=r?Math.round(e.h)-gc*t:Math.round(e.h)+gc*t:a=r?Math.round(e.h)+gc*t:Math.round(e.h)-gc*t,a<0?a+=360:a>=360&&(a-=360),a}function B1(e,t,r){if(e.h===0&&e.s===0)return e.s;var a;return r?a=e.s-j1*t:t===tC?a=e.s+j1:a=e.s+Z4*t,a>1&&(a=1),r&&t===eC&&a>.1&&(a=.1),a<.06&&(a=.06),Math.round(a*100)/100}function F1(e,t,r){var a;return r?a=e.v+e9*t:a=e.v-t9*t,a=Math.max(0,Math.min(1,a)),Math.round(a*100)/100}function Vs(e){for(var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=[],a=new jt(e),o=a.toHsv(),s=eC;s>0;s-=1){var c=new jt({h:H1(o,s,!0),s:B1(o,s,!0),v:F1(o,s,!0)});r.push(c)}r.push(a);for(var f=1;f<=tC;f+=1){var h=new jt({h:H1(o,f),s:B1(o,f),v:F1(o,f)});r.push(h)}return t.theme==="dark"?n9.map(function(d){var g=d.index,v=d.amount;return new jt(t.backgroundColor||"#141414").mix(r[g],v).toHexString()}):r.map(function(d){return d.toHexString()})}var Bh={red:"#F5222D",volcano:"#FA541C",orange:"#FA8C16",gold:"#FAAD14",yellow:"#FADB14",lime:"#A0D911",green:"#52C41A",cyan:"#13C2C2",blue:"#1677FF",geekblue:"#2F54EB",purple:"#722ED1",magenta:"#EB2F96",grey:"#666666"},Jm=["#fff1f0","#ffccc7","#ffa39e","#ff7875","#ff4d4f","#f5222d","#cf1322","#a8071a","#820014","#5c0011"];Jm.primary=Jm[5];var Ym=["#fff2e8","#ffd8bf","#ffbb96","#ff9c6e","#ff7a45","#fa541c","#d4380d","#ad2102","#871400","#610b00"];Ym.primary=Ym[5];var Xm=["#fff7e6","#ffe7ba","#ffd591","#ffc069","#ffa940","#fa8c16","#d46b08","#ad4e00","#873800","#612500"];Xm.primary=Xm[5];var Km=["#fffbe6","#fff1b8","#ffe58f","#ffd666","#ffc53d","#faad14","#d48806","#ad6800","#874d00","#613400"];Km.primary=Km[5];var Qm=["#feffe6","#ffffb8","#fffb8f","#fff566","#ffec3d","#fadb14","#d4b106","#ad8b00","#876800","#614700"];Qm.primary=Qm[5];var Zm=["#fcffe6","#f4ffb8","#eaff8f","#d3f261","#bae637","#a0d911","#7cb305","#5b8c00","#3f6600","#254000"];Zm.primary=Zm[5];var eg=["#f6ffed","#d9f7be","#b7eb8f","#95de64","#73d13d","#52c41a","#389e0d","#237804","#135200","#092b00"];eg.primary=eg[5];var tg=["#e6fffb","#b5f5ec","#87e8de","#5cdbd3","#36cfc9","#13c2c2","#08979c","#006d75","#00474f","#002329"];tg.primary=tg[5];var Uc=["#e6f4ff","#bae0ff","#91caff","#69b1ff","#4096ff","#1677ff","#0958d9","#003eb3","#002c8c","#001d66"];Uc.primary=Uc[5];var ng=["#f0f5ff","#d6e4ff","#adc6ff","#85a5ff","#597ef7","#2f54eb","#1d39c4","#10239e","#061178","#030852"];ng.primary=ng[5];var rg=["#f9f0ff","#efdbff","#d3adf7","#b37feb","#9254de","#722ed1","#531dab","#391085","#22075e","#120338"];rg.primary=rg[5];var ag=["#fff0f6","#ffd6e7","#ffadd2","#ff85c0","#f759ab","#eb2f96","#c41d7f","#9e1068","#780650","#520339"];ag.primary=ag[5];var ig=["#a6a6a6","#999999","#8c8c8c","#808080","#737373","#666666","#404040","#1a1a1a","#000000","#000000"];ig.primary=ig[5];var Fh={red:Jm,volcano:Ym,orange:Xm,gold:Km,yellow:Qm,lime:Zm,green:eg,cyan:tg,blue:Uc,geekblue:ng,purple:rg,magenta:ag,grey:ig};function r9(e,t){let{generateColorPalettes:r,generateNeutralColorPalettes:a}=t;const{colorSuccess:o,colorWarning:s,colorError:c,colorInfo:f,colorPrimary:h,colorBgBase:d,colorTextBase:g}=e,v=r(h),y=r(o),S=r(s),w=r(c),A=r(f),x=a(d,g),T=e.colorLink||e.colorInfo,R=r(T),O=new jt(w[1]).mix(new jt(w[3]),50).toHexString();return Object.assign(Object.assign({},x),{colorPrimaryBg:v[1],colorPrimaryBgHover:v[2],colorPrimaryBorder:v[3],colorPrimaryBorderHover:v[4],colorPrimaryHover:v[5],colorPrimary:v[6],colorPrimaryActive:v[7],colorPrimaryTextHover:v[8],colorPrimaryText:v[9],colorPrimaryTextActive:v[10],colorSuccessBg:y[1],colorSuccessBgHover:y[2],colorSuccessBorder:y[3],colorSuccessBorderHover:y[4],colorSuccessHover:y[4],colorSuccess:y[6],colorSuccessActive:y[7],colorSuccessTextHover:y[8],colorSuccessText:y[9],colorSuccessTextActive:y[10],colorErrorBg:w[1],colorErrorBgHover:w[2],colorErrorBgFilledHover:O,colorErrorBgActive:w[3],colorErrorBorder:w[3],colorErrorBorderHover:w[4],colorErrorHover:w[5],colorError:w[6],colorErrorActive:w[7],colorErrorTextHover:w[8],colorErrorText:w[9],colorErrorTextActive:w[10],colorWarningBg:S[1],colorWarningBgHover:S[2],colorWarningBorder:S[3],colorWarningBorderHover:S[4],colorWarningHover:S[4],colorWarning:S[6],colorWarningActive:S[7],colorWarningTextHover:S[8],colorWarningText:S[9],colorWarningTextActive:S[10],colorInfoBg:A[1],colorInfoBgHover:A[2],colorInfoBorder:A[3],colorInfoBorderHover:A[4],colorInfoHover:A[4],colorInfo:A[6],colorInfoActive:A[7],colorInfoTextHover:A[8],colorInfoText:A[9],colorInfoTextActive:A[10],colorLinkHover:R[4],colorLink:R[6],colorLinkActive:R[7],colorBgMask:new jt("#000").setA(.45).toRgbString(),colorWhite:"#fff"})}const a9=e=>{let t=e,r=e,a=e,o=e;return e<6&&e>=5?t=e+1:e<16&&e>=6?t=e+2:e>=16&&(t=16),e<7&&e>=5?r=4:e<8&&e>=7?r=5:e<14&&e>=8?r=6:e<16&&e>=14?r=7:e>=16&&(r=8),e<6&&e>=2?a=1:e>=6&&(a=2),e>4&&e<8?o=4:e>=8&&(o=6),{borderRadius:e,borderRadiusXS:a,borderRadiusSM:r,borderRadiusLG:t,borderRadiusOuter:o}};function i9(e){const{motionUnit:t,motionBase:r,borderRadius:a,lineWidth:o}=e;return Object.assign({motionDurationFast:`${(r+t).toFixed(1)}s`,motionDurationMid:`${(r+t*2).toFixed(1)}s`,motionDurationSlow:`${(r+t*3).toFixed(1)}s`,lineWidthBold:o+1},a9(a))}const o9=e=>{const{controlHeight:t}=e;return{controlHeightSM:t*.75,controlHeightXS:t*.5,controlHeightLG:t*1.25}};function jc(e){return(e+8)/e}function l9(e){const t=Array.from({length:10}).map((r,a)=>{const o=a-1,s=e*Math.pow(Math.E,o/5),c=a>1?Math.floor(s):Math.ceil(s);return Math.floor(c/2)*2});return t[1]=e,t.map(r=>({size:r,lineHeight:jc(r)}))}const s9=e=>{const t=l9(e),r=t.map(g=>g.size),a=t.map(g=>g.lineHeight),o=r[1],s=r[0],c=r[2],f=a[1],h=a[0],d=a[2];return{fontSizeSM:s,fontSize:o,fontSizeLG:c,fontSizeXL:r[3],fontSizeHeading1:r[6],fontSizeHeading2:r[5],fontSizeHeading3:r[4],fontSizeHeading4:r[3],fontSizeHeading5:r[2],lineHeight:f,lineHeightLG:d,lineHeightSM:h,fontHeight:Math.round(f*o),fontHeightLG:Math.round(d*c),fontHeightSM:Math.round(h*s),lineHeightHeading1:a[6],lineHeightHeading2:a[5],lineHeightHeading3:a[4],lineHeightHeading4:a[3],lineHeightHeading5:a[2]}};function u9(e){const{sizeUnit:t,sizeStep:r}=e;return{sizeXXL:t*(r+8),sizeXL:t*(r+4),sizeLG:t*(r+2),sizeMD:t*(r+1),sizeMS:t*r,size:t*r,sizeSM:t*(r-1),sizeXS:t*(r-2),sizeXXS:t*(r-3)}}const Ar=(e,t)=>new jt(e).setA(t).toRgbString(),bs=(e,t)=>new jt(e).darken(t).toHexString(),c9=e=>{const t=Vs(e);return{1:t[0],2:t[1],3:t[2],4:t[3],5:t[4],6:t[5],7:t[6],8:t[4],9:t[5],10:t[6]}},f9=(e,t)=>{const r=e||"#fff",a=t||"#000";return{colorBgBase:r,colorTextBase:a,colorText:Ar(a,.88),colorTextSecondary:Ar(a,.65),colorTextTertiary:Ar(a,.45),colorTextQuaternary:Ar(a,.25),colorFill:Ar(a,.15),colorFillSecondary:Ar(a,.06),colorFillTertiary:Ar(a,.04),colorFillQuaternary:Ar(a,.02),colorBgSolid:Ar(a,1),colorBgSolidHover:Ar(a,.75),colorBgSolidActive:Ar(a,.95),colorBgLayout:bs(r,4),colorBgContainer:bs(r,0),colorBgElevated:bs(r,0),colorBgSpotlight:Ar(a,.85),colorBgBlur:"transparent",colorBorder:bs(r,15),colorBorderSecondary:bs(r,6)}};function d9(e){Bh.pink=Bh.magenta,Fh.pink=Fh.magenta;const t=Object.keys(ZS).map(r=>{const a=e[r]===Bh[r]?Fh[r]:Vs(e[r]);return Array.from({length:10},()=>1).reduce((o,s,c)=>(o[`${r}-${c+1}`]=a[c],o[`${r}${c+1}`]=a[c],o),{})}).reduce((r,a)=>(r=Object.assign(Object.assign({},r),a),r),{});return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},e),t),r9(e,{generateColorPalettes:c9,generateNeutralColorPalettes:f9})),s9(e.fontSize)),u9(e)),o9(e)),i9(e))}const nC=Vm(d9),og={token:Is,override:{override:Is},hashed:!0},rC=ve.createContext(og),Gc="ant",lp="anticon",h9=["outlined","borderless","filled","underlined"],m9=(e,t)=>t||(e?`${Gc}-${e}`:Gc),Kt=b.createContext({getPrefixCls:m9,iconPrefixCls:lp}),{Consumer:V_}=Kt,I1={};function tu(e){const t=b.useContext(Kt),{getPrefixCls:r,direction:a,getPopupContainer:o}=t,s=t[e];return Object.assign(Object.assign({classNames:I1,styles:I1},s),{getPrefixCls:r,direction:a,getPopupContainer:o})}const g9=`-ant-${Date.now()}-${Math.random()}`;function p9(e,t){const r={},a=(c,f)=>{let h=c.clone();return h=(f==null?void 0:f(h))||h,h.toRgbString()},o=(c,f)=>{const h=new jt(c),d=Vs(h.toRgbString());r[`${f}-color`]=a(h),r[`${f}-color-disabled`]=d[1],r[`${f}-color-hover`]=d[4],r[`${f}-color-active`]=d[6],r[`${f}-color-outline`]=h.clone().setA(.2).toRgbString(),r[`${f}-color-deprecated-bg`]=d[0],r[`${f}-color-deprecated-border`]=d[2]};if(t.primaryColor){o(t.primaryColor,"primary");const c=new jt(t.primaryColor),f=Vs(c.toRgbString());f.forEach((d,g)=>{r[`primary-${g+1}`]=d}),r["primary-color-deprecated-l-35"]=a(c,d=>d.lighten(35)),r["primary-color-deprecated-l-20"]=a(c,d=>d.lighten(20)),r["primary-color-deprecated-t-20"]=a(c,d=>d.tint(20)),r["primary-color-deprecated-t-50"]=a(c,d=>d.tint(50)),r["primary-color-deprecated-f-12"]=a(c,d=>d.setA(d.a*.12));const h=new jt(f[0]);r["primary-color-active-deprecated-f-30"]=a(h,d=>d.setA(d.a*.3)),r["primary-color-active-deprecated-d-02"]=a(h,d=>d.darken(2))}return t.successColor&&o(t.successColor,"success"),t.warningColor&&o(t.warningColor,"warning"),t.errorColor&&o(t.errorColor,"error"),t.infoColor&&o(t.infoColor,"info"),`
  :root {
    ${Object.keys(r).map(c=>`--${e}-${c}: ${r[c]};`).join(`
`)}
  }
  `.trim()}function v9(e,t){const r=p9(e,t);or()&&La(r,`${g9}-dynamic-theme`)}const to=b.createContext(!1),y9=e=>{let{children:t,disabled:r}=e;const a=b.useContext(to);return b.createElement(to.Provider,{value:r??a},t)},dl=b.createContext(void 0),b9=e=>{let{children:t,size:r}=e;const a=b.useContext(dl);return b.createElement(dl.Provider,{value:r||a},t)};function S9(){const e=b.useContext(to),t=b.useContext(dl);return{componentDisabled:e,componentSize:t}}var aC=pn(function e(){gn(this,e)}),iC="CALC_UNIT",C9=new RegExp(iC,"g");function Ih(e){return typeof e=="number"?"".concat(e).concat(iC):e}var w9=function(e){yi(r,e);var t=bi(r);function r(a,o){var s;gn(this,r),s=t.call(this),ee(tt(s),"result",""),ee(tt(s),"unitlessCssVar",void 0),ee(tt(s),"lowPriority",void 0);var c=je(a);return s.unitlessCssVar=o,a instanceof r?s.result="(".concat(a.result,")"):c==="number"?s.result=Ih(a):c==="string"&&(s.result=a),s}return pn(r,[{key:"add",value:function(o){return o instanceof r?this.result="".concat(this.result," + ").concat(o.getResult()):(typeof o=="number"||typeof o=="string")&&(this.result="".concat(this.result," + ").concat(Ih(o))),this.lowPriority=!0,this}},{key:"sub",value:function(o){return o instanceof r?this.result="".concat(this.result," - ").concat(o.getResult()):(typeof o=="number"||typeof o=="string")&&(this.result="".concat(this.result," - ").concat(Ih(o))),this.lowPriority=!0,this}},{key:"mul",value:function(o){return this.lowPriority&&(this.result="(".concat(this.result,")")),o instanceof r?this.result="".concat(this.result," * ").concat(o.getResult(!0)):(typeof o=="number"||typeof o=="string")&&(this.result="".concat(this.result," * ").concat(o)),this.lowPriority=!1,this}},{key:"div",value:function(o){return this.lowPriority&&(this.result="(".concat(this.result,")")),o instanceof r?this.result="".concat(this.result," / ").concat(o.getResult(!0)):(typeof o=="number"||typeof o=="string")&&(this.result="".concat(this.result," / ").concat(o)),this.lowPriority=!1,this}},{key:"getResult",value:function(o){return this.lowPriority||o?"(".concat(this.result,")"):this.result}},{key:"equal",value:function(o){var s=this,c=o||{},f=c.unit,h=!0;return typeof f=="boolean"?h=f:Array.from(this.unitlessCssVar).some(function(d){return s.result.includes(d)})&&(h=!1),this.result=this.result.replace(C9,h?"px":""),typeof this.lowPriority<"u"?"calc(".concat(this.result,")"):this.result}}]),r}(aC),x9=function(e){yi(r,e);var t=bi(r);function r(a){var o;return gn(this,r),o=t.call(this),ee(tt(o),"result",0),a instanceof r?o.result=a.result:typeof a=="number"&&(o.result=a),o}return pn(r,[{key:"add",value:function(o){return o instanceof r?this.result+=o.result:typeof o=="number"&&(this.result+=o),this}},{key:"sub",value:function(o){return o instanceof r?this.result-=o.result:typeof o=="number"&&(this.result-=o),this}},{key:"mul",value:function(o){return o instanceof r?this.result*=o.result:typeof o=="number"&&(this.result*=o),this}},{key:"div",value:function(o){return o instanceof r?this.result/=o.result:typeof o=="number"&&(this.result/=o),this}},{key:"equal",value:function(){return this.result}}]),r}(aC),E9=function(t,r){var a=t==="css"?w9:x9;return function(o){return new a(o,r)}},V1=function(t,r){return"".concat([r,t.replace(/([A-Z]+)([A-Z][a-z]+)/g,"$1-$2").replace(/([a-z])([A-Z])/g,"$1-$2")].filter(Boolean).join("-"))};function zn(e){var t=b.useRef();t.current=e;var r=b.useCallback(function(){for(var a,o=arguments.length,s=new Array(o),c=0;c<o;c++)s[c]=arguments[c];return(a=t.current)===null||a===void 0?void 0:a.call.apply(a,[t].concat(s))},[]);return r}function Us(e){var t=b.useRef(!1),r=b.useState(e),a=ye(r,2),o=a[0],s=a[1];b.useEffect(function(){return t.current=!1,function(){t.current=!0}},[]);function c(f,h){h&&t.current||s(f)}return[o,c]}function Vh(e){return e!==void 0}function hf(e,t){var r=t||{},a=r.defaultValue,o=r.value,s=r.onChange,c=r.postState,f=Us(function(){return Vh(o)?o:Vh(a)?typeof a=="function"?a():a:typeof e=="function"?e():e}),h=ye(f,2),d=h[0],g=h[1],v=o!==void 0?o:d,y=c?c(v):v,S=zn(s),w=Us([v]),A=ye(w,2),x=A[0],T=A[1];M1(function(){var O=x[0];d!==O&&S(d,O)},[x]),M1(function(){Vh(o)||g(o)},[o]);var R=zn(function(O,j){g(O,j),T([v],j)});return[y,R]}function U1(e,t,r,a){var o=ie({},t[e]);if(a!=null&&a.deprecatedTokens){var s=a.deprecatedTokens;s.forEach(function(f){var h=ye(f,2),d=h[0],g=h[1];if(o!=null&&o[d]||o!=null&&o[g]){var v;(v=o[g])!==null&&v!==void 0||(o[g]=o==null?void 0:o[d])}})}var c=ie(ie({},r),o);return Object.keys(c).forEach(function(f){c[f]===t[f]&&delete c[f]}),c}var oC=typeof CSSINJS_STATISTIC<"u",lg=!0;function $n(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];if(!oC)return Object.assign.apply(Object,[{}].concat(t));lg=!1;var a={};return t.forEach(function(o){if(je(o)==="object"){var s=Object.keys(o);s.forEach(function(c){Object.defineProperty(a,c,{configurable:!0,enumerable:!0,get:function(){return o[c]}})})}}),lg=!0,a}var G1={};function A9(){}var T9=function(t){var r,a=t,o=A9;return oC&&typeof Proxy<"u"&&(r=new Set,a=new Proxy(t,{get:function(c,f){if(lg){var h;(h=r)===null||h===void 0||h.add(f)}return c[f]}}),o=function(c,f){var h;G1[c]={global:Array.from(r),component:ie(ie({},(h=G1[c])===null||h===void 0?void 0:h.component),f)}}),{token:a,keys:r,flush:o}};function q1(e,t,r){if(typeof r=="function"){var a;return r($n(t,(a=t[e])!==null&&a!==void 0?a:{}))}return r??{}}function R9(e){return e==="js"?{max:Math.max,min:Math.min}:{max:function(){for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return"max(".concat(a.map(function(s){return We(s)}).join(","),")")},min:function(){for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return"min(".concat(a.map(function(s){return We(s)}).join(","),")")}}}var O9=1e3*60*10,M9=function(){function e(){gn(this,e),ee(this,"map",new Map),ee(this,"objectIDMap",new WeakMap),ee(this,"nextID",0),ee(this,"lastAccessBeat",new Map),ee(this,"accessBeat",0)}return pn(e,[{key:"set",value:function(r,a){this.clear();var o=this.getCompositeKey(r);this.map.set(o,a),this.lastAccessBeat.set(o,Date.now())}},{key:"get",value:function(r){var a=this.getCompositeKey(r),o=this.map.get(a);return this.lastAccessBeat.set(a,Date.now()),this.accessBeat+=1,o}},{key:"getCompositeKey",value:function(r){var a=this,o=r.map(function(s){return s&&je(s)==="object"?"obj_".concat(a.getObjectID(s)):"".concat(je(s),"_").concat(s)});return o.join("|")}},{key:"getObjectID",value:function(r){if(this.objectIDMap.has(r))return this.objectIDMap.get(r);var a=this.nextID;return this.objectIDMap.set(r,a),this.nextID+=1,a}},{key:"clear",value:function(){var r=this;if(this.accessBeat>1e4){var a=Date.now();this.lastAccessBeat.forEach(function(o,s){a-o>O9&&(r.map.delete(s),r.lastAccessBeat.delete(s))}),this.accessBeat=0}}}]),e}(),W1=new M9;function N9(e,t){return ve.useMemo(function(){var r=W1.get(t);if(r)return r;var a=e();return W1.set(t,a),a},t)}var D9=function(){return{}};function P9(e){var t=e.useCSP,r=t===void 0?D9:t,a=e.useToken,o=e.usePrefix,s=e.getResetStyles,c=e.getCommonStyle,f=e.getCompUnitless;function h(y,S,w,A){var x=Array.isArray(y)?y[0]:y;function T(J){return"".concat(String(x)).concat(J.slice(0,1).toUpperCase()).concat(J.slice(1))}var R=(A==null?void 0:A.unitless)||{},O=typeof f=="function"?f(y):{},j=ie(ie({},O),{},ee({},T("zIndexPopup"),!0));Object.keys(R).forEach(function(J){j[T(J)]=R[J]});var z=ie(ie({},A),{},{unitless:j,prefixToken:T}),N=g(y,S,w,z),_=d(x,w,z);return function(J){var $=arguments.length>1&&arguments[1]!==void 0?arguments[1]:J,B=N(J,$),U=ye(B,2),W=U[1],K=_($),Y=ye(K,2),G=Y[0],P=Y[1];return[G,W,P]}}function d(y,S,w){var A=w.unitless,x=w.injectStyle,T=x===void 0?!0:x,R=w.prefixToken,O=w.ignore,j=function(_){var J=_.rootCls,$=_.cssVar,B=$===void 0?{}:$,U=a(),W=U.realToken;return I4({path:[y],prefix:B.prefix,key:B.key,unitless:A,ignore:O,token:W,scope:J},function(){var K=q1(y,W,S),Y=U1(y,W,K,{deprecatedTokens:w==null?void 0:w.deprecatedTokens});return Object.keys(K).forEach(function(G){Y[R(G)]=Y[G],delete Y[G]}),Y}),null},z=function(_){var J=a(),$=J.cssVar;return[function(B){return T&&$?ve.createElement(ve.Fragment,null,ve.createElement(j,{rootCls:_,cssVar:$,component:y}),B):B},$==null?void 0:$.key]};return z}function g(y,S,w){var A=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},x=Array.isArray(y)?y:[y,y],T=ye(x,1),R=T[0],O=x.join("-"),j=e.layer||{name:"antd"};return function(z){var N=arguments.length>1&&arguments[1]!==void 0?arguments[1]:z,_=a(),J=_.theme,$=_.realToken,B=_.hashId,U=_.token,W=_.cssVar,K=o(),Y=K.rootPrefixCls,G=K.iconPrefixCls,P=r(),k=W?"css":"js",I=N9(function(){var H=new Set;return W&&Object.keys(A.unitless||{}).forEach(function(le){H.add(Pc(le,W.prefix)),H.add(Pc(le,V1(R,W.prefix)))}),E9(k,H)},[k,R,W==null?void 0:W.prefix]),ne=R9(k),C=ne.max,F=ne.min,Q={theme:J,token:U,hashId:B,nonce:function(){return P.nonce},clientOnly:A.clientOnly,layer:j,order:A.order||-999};typeof s=="function"&&Wm(ie(ie({},Q),{},{clientOnly:!1,path:["Shared",Y]}),function(){return s(U,{prefix:{rootPrefixCls:Y,iconPrefixCls:G},csp:P})});var M=Wm(ie(ie({},Q),{},{path:[O,z,G]}),function(){if(A.injectStyle===!1)return[];var H=T9(U),le=H.token,oe=H.flush,be=q1(R,$,w),ue=".".concat(z),me=U1(R,$,be,{deprecatedTokens:A.deprecatedTokens});W&&be&&je(be)==="object"&&Object.keys(be).forEach(function(He){be[He]="var(".concat(Pc(He,V1(R,W.prefix)),")")});var ge=$n(le,{componentCls:ue,prefixCls:z,iconCls:".".concat(G),antCls:".".concat(Y),calc:I,max:C,min:F},W?be:me),Pe=S(ge,{hashId:B,prefixCls:z,rootPrefixCls:Y,iconPrefixCls:G});oe(R,me);var _e=typeof c=="function"?c(ge,z,N,A.resetFont):null;return[A.resetStyle===!1?null:_e,Pe]});return[M,B]}}function v(y,S,w){var A=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},x=g(y,S,w,ie({resetStyle:!1,order:-998},A)),T=function(O){var j=O.prefixCls,z=O.rootCls,N=z===void 0?j:z;return x(j,N),null};return T}return{genStyleHooks:h,genSubStyleComponent:v,genComponentStyleHook:g}}const no=["blue","purple","cyan","green","magenta","pink","red","orange","yellow","volcano","geekblue","lime","gold"],z9="5.24.4";function Uh(e){return e>=0&&e<=255}function As(e,t){const{r,g:a,b:o,a:s}=new jt(e).toRgb();if(s<1)return e;const{r:c,g:f,b:h}=new jt(t).toRgb();for(let d=.01;d<=1;d+=.01){const g=Math.round((r-c*(1-d))/d),v=Math.round((a-f*(1-d))/d),y=Math.round((o-h*(1-d))/d);if(Uh(g)&&Uh(v)&&Uh(y))return new jt({r:g,g:v,b:y,a:Math.round(d*100)/100}).toRgbString()}return new jt({r,g:a,b:o,a:1}).toRgbString()}var _9=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(r[a[o]]=e[a[o]]);return r};function lC(e){const{override:t}=e,r=_9(e,["override"]),a=Object.assign({},t);Object.keys(Is).forEach(y=>{delete a[y]});const o=Object.assign(Object.assign({},r),a),s=480,c=576,f=768,h=992,d=1200,g=1600;if(o.motion===!1){const y="0s";o.motionDurationFast=y,o.motionDurationMid=y,o.motionDurationSlow=y}return Object.assign(Object.assign(Object.assign({},o),{colorFillContent:o.colorFillSecondary,colorFillContentHover:o.colorFill,colorFillAlter:o.colorFillQuaternary,colorBgContainerDisabled:o.colorFillTertiary,colorBorderBg:o.colorBgContainer,colorSplit:As(o.colorBorderSecondary,o.colorBgContainer),colorTextPlaceholder:o.colorTextQuaternary,colorTextDisabled:o.colorTextQuaternary,colorTextHeading:o.colorText,colorTextLabel:o.colorTextSecondary,colorTextDescription:o.colorTextTertiary,colorTextLightSolid:o.colorWhite,colorHighlight:o.colorError,colorBgTextHover:o.colorFillSecondary,colorBgTextActive:o.colorFill,colorIcon:o.colorTextTertiary,colorIconHover:o.colorText,colorErrorOutline:As(o.colorErrorBg,o.colorBgContainer),colorWarningOutline:As(o.colorWarningBg,o.colorBgContainer),fontSizeIcon:o.fontSizeSM,lineWidthFocus:o.lineWidth*3,lineWidth:o.lineWidth,controlOutlineWidth:o.lineWidth*2,controlInteractiveSize:o.controlHeight/2,controlItemBgHover:o.colorFillTertiary,controlItemBgActive:o.colorPrimaryBg,controlItemBgActiveHover:o.colorPrimaryBgHover,controlItemBgActiveDisabled:o.colorFill,controlTmpOutline:o.colorFillQuaternary,controlOutline:As(o.colorPrimaryBg,o.colorBgContainer),lineType:o.lineType,borderRadius:o.borderRadius,borderRadiusXS:o.borderRadiusXS,borderRadiusSM:o.borderRadiusSM,borderRadiusLG:o.borderRadiusLG,fontWeightStrong:600,opacityLoading:.65,linkDecoration:"none",linkHoverDecoration:"none",linkFocusDecoration:"none",controlPaddingHorizontal:12,controlPaddingHorizontalSM:8,paddingXXS:o.sizeXXS,paddingXS:o.sizeXS,paddingSM:o.sizeSM,padding:o.size,paddingMD:o.sizeMD,paddingLG:o.sizeLG,paddingXL:o.sizeXL,paddingContentHorizontalLG:o.sizeLG,paddingContentVerticalLG:o.sizeMS,paddingContentHorizontal:o.sizeMS,paddingContentVertical:o.sizeSM,paddingContentHorizontalSM:o.size,paddingContentVerticalSM:o.sizeXS,marginXXS:o.sizeXXS,marginXS:o.sizeXS,marginSM:o.sizeSM,margin:o.size,marginMD:o.sizeMD,marginLG:o.sizeLG,marginXL:o.sizeXL,marginXXL:o.sizeXXL,boxShadow:`
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,boxShadowSecondary:`
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,boxShadowTertiary:`
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,screenXS:s,screenXSMin:s,screenXSMax:c-1,screenSM:c,screenSMMin:c,screenSMMax:f-1,screenMD:f,screenMDMin:f,screenMDMax:h-1,screenLG:h,screenLGMin:h,screenLGMax:d-1,screenXL:d,screenXLMin:d,screenXLMax:g-1,screenXXL:g,screenXXLMin:g,boxShadowPopoverArrow:"2px 2px 5px rgba(0, 0, 0, 0.05)",boxShadowCard:`
      0 1px 2px -2px ${new jt("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new jt("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new jt("rgba(0, 0, 0, 0.09)").toRgbString()}
    `,boxShadowDrawerRight:`
      -6px 0 16px 0 rgba(0, 0, 0, 0.08),
      -3px 0 6px -4px rgba(0, 0, 0, 0.12),
      -9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,boxShadowDrawerLeft:`
      6px 0 16px 0 rgba(0, 0, 0, 0.08),
      3px 0 6px -4px rgba(0, 0, 0, 0.12),
      9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,boxShadowDrawerUp:`
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,boxShadowDrawerDown:`
      0 -6px 16px 0 rgba(0, 0, 0, 0.08),
      0 -3px 6px -4px rgba(0, 0, 0, 0.12),
      0 -9px 28px 8px rgba(0, 0, 0, 0.05)
    `,boxShadowTabsOverflowLeft:"inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)",boxShadowTabsOverflowRight:"inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)",boxShadowTabsOverflowTop:"inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)",boxShadowTabsOverflowBottom:"inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)"}),a)}var J1=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(r[a[o]]=e[a[o]]);return r};const sC={lineHeight:!0,lineHeightSM:!0,lineHeightLG:!0,lineHeightHeading1:!0,lineHeightHeading2:!0,lineHeightHeading3:!0,lineHeightHeading4:!0,lineHeightHeading5:!0,opacityLoading:!0,fontWeightStrong:!0,zIndexPopupBase:!0,zIndexBase:!0,opacityImage:!0},$9={size:!0,sizeSM:!0,sizeLG:!0,sizeMD:!0,sizeXS:!0,sizeXXS:!0,sizeMS:!0,sizeXL:!0,sizeXXL:!0,sizeUnit:!0,sizeStep:!0,motionBase:!0,motionUnit:!0},k9={screenXS:!0,screenXSMin:!0,screenXSMax:!0,screenSM:!0,screenSMMin:!0,screenSMMax:!0,screenMD:!0,screenMDMin:!0,screenMDMax:!0,screenLG:!0,screenLGMin:!0,screenLGMax:!0,screenXL:!0,screenXLMin:!0,screenXLMax:!0,screenXXL:!0,screenXXLMin:!0},uC=(e,t,r)=>{const a=r.getDerivativeToken(e),{override:o}=t,s=J1(t,["override"]);let c=Object.assign(Object.assign({},a),{override:o});return c=lC(c),s&&Object.entries(s).forEach(f=>{let[h,d]=f;const{theme:g}=d,v=J1(d,["theme"]);let y=v;g&&(y=uC(Object.assign(Object.assign({},c),v),{override:v},g)),c[h]=y}),c};function Si(){const{token:e,hashed:t,theme:r,override:a,cssVar:o}=ve.useContext(rC),s=`${z9}-${t||""}`,c=r||nC,[f,h,d]=m4(c,[Is,e],{salt:s,override:a,getComputedToken:uC,formatToken:lC,cssVar:o&&{prefix:o.prefix,key:o.key,unitless:sC,ignore:$9,preserve:k9}});return[c,d,t?h:"",f,o]}const mf=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return{boxSizing:"border-box",margin:0,padding:0,color:e.colorText,fontSize:e.fontSize,lineHeight:e.lineHeight,listStyle:"none",fontFamily:t?"inherit":e.fontFamily}},cC=()=>({display:"inline-flex",alignItems:"center",color:"inherit",fontStyle:"normal",lineHeight:0,textAlign:"center",textTransform:"none",verticalAlign:"-0.125em",textRendering:"optimizeLegibility","-webkit-font-smoothing":"antialiased","-moz-osx-font-smoothing":"grayscale","> *":{lineHeight:1},svg:{display:"inline-block"}}),L9=()=>({"&::before":{display:"table",content:'""'},"&::after":{display:"table",clear:"both",content:'""'}}),j9=e=>({a:{color:e.colorLink,textDecoration:e.linkDecoration,backgroundColor:"transparent",outline:"none",cursor:"pointer",transition:`color ${e.motionDurationSlow}`,"-webkit-text-decoration-skip":"objects","&:hover":{color:e.colorLinkHover},"&:active":{color:e.colorLinkActive},"&:active, &:hover":{textDecoration:e.linkHoverDecoration,outline:0},"&:focus":{textDecoration:e.linkFocusDecoration,outline:0},"&[disabled]":{color:e.colorTextDisabled,cursor:"not-allowed"}}}),H9=(e,t,r,a)=>{const o=`[class^="${t}"], [class*=" ${t}"]`,s=r?`.${r}`:o,c={boxSizing:"border-box","&::before, &::after":{boxSizing:"border-box"}};let f={};return a!==!1&&(f={fontFamily:e.fontFamily,fontSize:e.fontSize}),{[s]:Object.assign(Object.assign(Object.assign({},f),c),{[o]:c})}},B9=(e,t)=>({outline:`${We(e.lineWidthFocus)} solid ${e.colorPrimaryBorder}`,outlineOffset:t??1,transition:"outline-offset 0s, outline 0s"}),F9=(e,t)=>({"&:focus-visible":Object.assign({},B9(e,t))}),fC=e=>({[`.${e}`]:Object.assign(Object.assign({},cC()),{[`.${e} .${e}-icon`]:{display:"block"}})}),{genStyleHooks:Ha,genComponentStyleHook:I9,genSubStyleComponent:sp}=P9({usePrefix:()=>{const{getPrefixCls:e,iconPrefixCls:t}=b.useContext(Kt);return{rootPrefixCls:e(),iconPrefixCls:t}},useToken:()=>{const[e,t,r,a,o]=Si();return{theme:e,realToken:t,hashId:r,token:a,cssVar:o}},useCSP:()=>{const{csp:e}=b.useContext(Kt);return e??{}},getResetStyles:(e,t)=>{var r;const a=j9(e);return[a,{"&":a},fC((r=t==null?void 0:t.prefix.iconPrefixCls)!==null&&r!==void 0?r:lp)]},getCommonStyle:H9,getCompUnitless:()=>sC});function dC(e,t){return no.reduce((r,a)=>{const o=e[`${a}1`],s=e[`${a}3`],c=e[`${a}6`],f=e[`${a}7`];return Object.assign(Object.assign({},r),t(a,{lightColor:o,lightBorderColor:s,darkColor:c,textColor:f}))},{})}const V9=(e,t)=>{const[r,a]=Si();return Wm({token:a,hashId:"",path:["ant-design-icons",e],nonce:()=>t==null?void 0:t.nonce,layer:{name:"antd"}},()=>[fC(e)])},U9=Object.assign({},ef),{useId:Y1}=U9,G9=()=>"",q9=typeof Y1>"u"?G9:Y1;function W9(e,t,r){var a;KS();const o=e||{},s=o.inherit===!1||!t?Object.assign(Object.assign({},og),{hashed:(a=t==null?void 0:t.hashed)!==null&&a!==void 0?a:og.hashed,cssVar:t==null?void 0:t.cssVar}):t,c=q9();return Xg(()=>{var f,h;if(!e)return t;const d=Object.assign({},s.components);Object.keys(e.components||{}).forEach(y=>{d[y]=Object.assign(Object.assign({},d[y]),e.components[y])});const g=`css-var-${c.replace(/:/g,"")}`,v=((f=o.cssVar)!==null&&f!==void 0?f:s.cssVar)&&Object.assign(Object.assign(Object.assign({prefix:r==null?void 0:r.prefixCls},typeof s.cssVar=="object"?s.cssVar:{}),typeof o.cssVar=="object"?o.cssVar:{}),{key:typeof o.cssVar=="object"&&((h=o.cssVar)===null||h===void 0?void 0:h.key)||g});return Object.assign(Object.assign(Object.assign({},s),o),{token:Object.assign(Object.assign({},s.token),o.token),components:d,cssVar:v})},[o,s],(f,h)=>f.some((d,g)=>{const v=h[g];return!Fm(d,v,!0)}))}var J9=["children"],hC=b.createContext({});function Y9(e){var t=e.children,r=Tn(e,J9);return b.createElement(hC.Provider,{value:r},t)}var X9=function(e){yi(r,e);var t=bi(r);function r(){return gn(this,r),t.apply(this,arguments)}return pn(r,[{key:"render",value:function(){return this.props.children}}]),r}(b.Component);function K9(e){var t=b.useReducer(function(f){return f+1},0),r=ye(t,2),a=r[1],o=b.useRef(e),s=zn(function(){return o.current}),c=zn(function(f){o.current=typeof f=="function"?f(o.current):f,a()});return[s,c]}var hi="none",pc="appear",vc="enter",yc="leave",X1="none",Vr="prepare",nl="start",rl="active",up="end",mC="prepared";function K1(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit".concat(e)]="webkit".concat(t),r["Moz".concat(e)]="moz".concat(t),r["ms".concat(e)]="MS".concat(t),r["O".concat(e)]="o".concat(t.toLowerCase()),r}function Q9(e,t){var r={animationend:K1("Animation","AnimationEnd"),transitionend:K1("Transition","TransitionEnd")};return e&&("AnimationEvent"in t||delete r.animationend.animation,"TransitionEvent"in t||delete r.transitionend.transition),r}var Z9=Q9(or(),typeof window<"u"?window:{}),gC={};if(or()){var eA=document.createElement("div");gC=eA.style}var bc={};function pC(e){if(bc[e])return bc[e];var t=Z9[e];if(t)for(var r=Object.keys(t),a=r.length,o=0;o<a;o+=1){var s=r[o];if(Object.prototype.hasOwnProperty.call(t,s)&&s in gC)return bc[e]=t[s],bc[e]}return""}var vC=pC("animationend"),yC=pC("transitionend"),bC=!!(vC&&yC),Q1=vC||"animationend",Z1=yC||"transitionend";function eb(e,t){if(!e)return null;if(je(e)==="object"){var r=t.replace(/-\w/g,function(a){return a[1].toUpperCase()});return e[r]}return"".concat(e,"-").concat(t)}const tA=function(e){var t=b.useRef();function r(o){o&&(o.removeEventListener(Z1,e),o.removeEventListener(Q1,e))}function a(o){t.current&&t.current!==o&&r(t.current),o&&o!==t.current&&(o.addEventListener(Z1,e),o.addEventListener(Q1,e),t.current=o)}return b.useEffect(function(){return function(){r(t.current)}},[]),[a,r]};var SC=or()?b.useLayoutEffect:b.useEffect;const nA=function(){var e=b.useRef(null);function t(){Wr.cancel(e.current)}function r(a){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2;t();var s=Wr(function(){o<=1?a({isCanceled:function(){return s!==e.current}}):r(a,o-1)});e.current=s}return b.useEffect(function(){return function(){t()}},[]),[r,t]};var rA=[Vr,nl,rl,up],aA=[Vr,mC],CC=!1,iA=!0;function wC(e){return e===rl||e===up}const oA=function(e,t,r){var a=Us(X1),o=ye(a,2),s=o[0],c=o[1],f=nA(),h=ye(f,2),d=h[0],g=h[1];function v(){c(Vr,!0)}var y=t?aA:rA;return SC(function(){if(s!==X1&&s!==up){var S=y.indexOf(s),w=y[S+1],A=r(s);A===CC?c(w,!0):w&&d(function(x){function T(){x.isCanceled()||c(w,!0)}A===!0?T():Promise.resolve(A).then(T)})}},[e,s]),b.useEffect(function(){return function(){g()}},[]),[v,s]};function lA(e,t,r,a){var o=a.motionEnter,s=o===void 0?!0:o,c=a.motionAppear,f=c===void 0?!0:c,h=a.motionLeave,d=h===void 0?!0:h,g=a.motionDeadline,v=a.motionLeaveImmediately,y=a.onAppearPrepare,S=a.onEnterPrepare,w=a.onLeavePrepare,A=a.onAppearStart,x=a.onEnterStart,T=a.onLeaveStart,R=a.onAppearActive,O=a.onEnterActive,j=a.onLeaveActive,z=a.onAppearEnd,N=a.onEnterEnd,_=a.onLeaveEnd,J=a.onVisibleChanged,$=Us(),B=ye($,2),U=B[0],W=B[1],K=K9(hi),Y=ye(K,2),G=Y[0],P=Y[1],k=Us(null),I=ye(k,2),ne=I[0],C=I[1],F=G(),Q=b.useRef(!1),M=b.useRef(null);function H(){return r()}var le=b.useRef(!1);function oe(){P(hi),C(null,!0)}var be=zn(function(Be){var st=G();if(st!==hi){var Ce=H();if(!(Be&&!Be.deadline&&Be.target!==Ce)){var Te=le.current,qe;st===pc&&Te?qe=z==null?void 0:z(Ce,Be):st===vc&&Te?qe=N==null?void 0:N(Ce,Be):st===yc&&Te&&(qe=_==null?void 0:_(Ce,Be)),Te&&qe!==!1&&oe()}}}),ue=tA(be),me=ye(ue,1),ge=me[0],Pe=function(st){switch(st){case pc:return ee(ee(ee({},Vr,y),nl,A),rl,R);case vc:return ee(ee(ee({},Vr,S),nl,x),rl,O);case yc:return ee(ee(ee({},Vr,w),nl,T),rl,j);default:return{}}},_e=b.useMemo(function(){return Pe(F)},[F]),He=oA(F,!e,function(Be){if(Be===Vr){var st=_e[Vr];return st?st(H()):CC}if(Me in _e){var Ce;C(((Ce=_e[Me])===null||Ce===void 0?void 0:Ce.call(_e,H(),null))||null)}return Me===rl&&F!==hi&&(ge(H()),g>0&&(clearTimeout(M.current),M.current=setTimeout(function(){be({deadline:!0})},g))),Me===mC&&oe(),iA}),Xe=ye(He,2),Ge=Xe[0],Me=Xe[1],rt=wC(Me);le.current=rt;var Ve=b.useRef(null);SC(function(){if(!(Q.current&&Ve.current===t)){W(t);var Be=Q.current;Q.current=!0;var st;!Be&&t&&f&&(st=pc),Be&&t&&s&&(st=vc),(Be&&!t&&d||!Be&&v&&!t&&d)&&(st=yc);var Ce=Pe(st);st&&(e||Ce[Vr])?(P(st),Ge()):P(hi),Ve.current=t}},[t]),b.useEffect(function(){(F===pc&&!f||F===vc&&!s||F===yc&&!d)&&P(hi)},[f,s,d]),b.useEffect(function(){return function(){Q.current=!1,clearTimeout(M.current)}},[]);var Ke=b.useRef(!1);b.useEffect(function(){U&&(Ke.current=!0),U!==void 0&&F===hi&&((Ke.current||U)&&(J==null||J(U)),Ke.current=!0)},[U,F]);var Et=ne;return _e[Vr]&&Me===nl&&(Et=ie({transition:"none"},Et)),[F,Me,Et,U??t]}function sA(e){var t=e;je(e)==="object"&&(t=e.transitionSupport);function r(o,s){return!!(o.motionName&&t&&s!==!1)}var a=b.forwardRef(function(o,s){var c=o.visible,f=c===void 0?!0:c,h=o.removeOnLeave,d=h===void 0?!0:h,g=o.forceRender,v=o.children,y=o.motionName,S=o.leavedClassName,w=o.eventProps,A=b.useContext(hC),x=A.motion,T=r(o,x),R=b.useRef(),O=b.useRef();function j(){try{return R.current instanceof HTMLElement?R.current:Dc(O.current)}catch{return null}}var z=lA(T,f,j,o),N=ye(z,4),_=N[0],J=N[1],$=N[2],B=N[3],U=b.useRef(B);B&&(U.current=!0);var W=b.useCallback(function(I){R.current=I,Kg(s,I)},[s]),K,Y=ie(ie({},w),{},{visible:f});if(!v)K=null;else if(_===hi)B?K=v(ie({},Y),W):!d&&U.current&&S?K=v(ie(ie({},Y),{},{className:S}),W):g||!d&&!S?K=v(ie(ie({},Y),{},{style:{display:"none"}}),W):K=null;else{var G;J===Vr?G="prepare":wC(J)?G="active":J===nl&&(G="start");var P=eb(y,"".concat(_,"-").concat(G));K=v(ie(ie({},Y),{},{className:Ee(eb(y,_),ee(ee({},P,P&&G),y,typeof y=="string")),style:$}),W)}if(b.isValidElement(K)&&Zs(K)){var k=of(K);k||(K=b.cloneElement(K,{ref:W}))}return b.createElement(X9,{ref:O},K)});return a.displayName="CSSMotion",a}const nu=sA(bC);var sg="add",ug="keep",cg="remove",Gh="removed";function uA(e){var t;return e&&je(e)==="object"&&"key"in e?t=e:t={key:e},ie(ie({},t),{},{key:String(t.key)})}function fg(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return e.map(uA)}function cA(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],r=[],a=0,o=t.length,s=fg(e),c=fg(t);s.forEach(function(d){for(var g=!1,v=a;v<o;v+=1){var y=c[v];if(y.key===d.key){a<v&&(r=r.concat(c.slice(a,v).map(function(S){return ie(ie({},S),{},{status:sg})})),a=v),r.push(ie(ie({},y),{},{status:ug})),a+=1,g=!0;break}}g||r.push(ie(ie({},d),{},{status:cg}))}),a<o&&(r=r.concat(c.slice(a).map(function(d){return ie(ie({},d),{},{status:sg})})));var f={};r.forEach(function(d){var g=d.key;f[g]=(f[g]||0)+1});var h=Object.keys(f).filter(function(d){return f[d]>1});return h.forEach(function(d){r=r.filter(function(g){var v=g.key,y=g.status;return v!==d||y!==cg}),r.forEach(function(g){g.key===d&&(g.status=ug)})}),r}var fA=["component","children","onVisibleChanged","onAllRemoved"],dA=["status"],hA=["eventProps","visible","children","motionName","motionAppear","motionEnter","motionLeave","motionLeaveImmediately","motionDeadline","removeOnLeave","leavedClassName","onAppearPrepare","onAppearStart","onAppearActive","onAppearEnd","onEnterStart","onEnterActive","onEnterEnd","onLeaveStart","onLeaveActive","onLeaveEnd"];function mA(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:nu,r=function(a){yi(s,a);var o=bi(s);function s(){var c;gn(this,s);for(var f=arguments.length,h=new Array(f),d=0;d<f;d++)h[d]=arguments[d];return c=o.call.apply(o,[this].concat(h)),ee(tt(c),"state",{keyEntities:[]}),ee(tt(c),"removeKey",function(g){c.setState(function(v){var y=v.keyEntities.map(function(S){return S.key!==g?S:ie(ie({},S),{},{status:Gh})});return{keyEntities:y}},function(){var v=c.state.keyEntities,y=v.filter(function(S){var w=S.status;return w!==Gh}).length;y===0&&c.props.onAllRemoved&&c.props.onAllRemoved()})}),c}return pn(s,[{key:"render",value:function(){var f=this,h=this.state.keyEntities,d=this.props,g=d.component,v=d.children,y=d.onVisibleChanged;d.onAllRemoved;var S=Tn(d,fA),w=g||b.Fragment,A={};return hA.forEach(function(x){A[x]=S[x],delete S[x]}),delete S.keys,b.createElement(w,S,h.map(function(x,T){var R=x.status,O=Tn(x,dA),j=R===sg||R===ug;return b.createElement(t,kt({},A,{key:O.key,visible:j,eventProps:O,onVisibleChanged:function(N){y==null||y(N,{key:O.key}),N||f.removeKey(O.key)}}),function(z,N){return v(ie(ie({},z),{},{index:T}),N)})}))}}],[{key:"getDerivedStateFromProps",value:function(f,h){var d=f.keys,g=h.keyEntities,v=fg(d),y=cA(g,v);return{keyEntities:y.filter(function(S){var w=g.find(function(A){var x=A.key;return S.key===x});return!(w&&w.status===Gh&&S.status===cg)})}}}]),s}(b.Component);return ee(r,"defaultProps",{component:"div"}),r}mA(bC);function gA(e){const{children:t}=e,[,r]=Si(),{motion:a}=r,o=b.useRef(!1);return o.current=o.current||a===!1,o.current?b.createElement(Y9,{motion:a},t):t}const pA=()=>null;var vA=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(r[a[o]]=e[a[o]]);return r};const yA=["getTargetContainer","getPopupContainer","renderEmpty","input","pagination","form","select","button"];let xC;function bA(){return xC||Gc}function SA(e){return Object.keys(e).some(t=>t.endsWith("Color"))}const CA=e=>{const{prefixCls:t,iconPrefixCls:r,theme:a,holderRender:o}=e;t!==void 0&&(xC=t),a&&SA(a)&&v9(bA(),a)},wA=e=>{const{children:t,csp:r,autoInsertSpaceInButton:a,alert:o,anchor:s,form:c,locale:f,componentSize:h,direction:d,space:g,splitter:v,virtual:y,dropdownMatchSelectWidth:S,popupMatchSelectWidth:w,popupOverflow:A,legacyLocale:x,parentContext:T,iconPrefixCls:R,theme:O,componentDisabled:j,segmented:z,statistic:N,spin:_,calendar:J,carousel:$,cascader:B,collapse:U,typography:W,checkbox:K,descriptions:Y,divider:G,drawer:P,skeleton:k,steps:I,image:ne,layout:C,list:F,mentions:Q,modal:M,progress:H,result:le,slider:oe,breadcrumb:be,menu:ue,pagination:me,input:ge,textArea:Pe,empty:_e,badge:He,radio:Xe,rate:Ge,switch:Me,transfer:rt,avatar:Ve,message:Ke,tag:Et,table:Be,card:st,tabs:Ce,timeline:Te,timePicker:qe,upload:re,notification:de,tree:Se,colorPicker:Ne,datePicker:Re,rangePicker:at,flex:ut,wave:$e,dropdown:xe,warning:Qe,tour:Fe,tooltip:Ze,popover:It,popconfirm:wi,floatButtonGroup:Ba,variant:Jr,inputNumber:Yr,treeSelect:Qt}=e,Wt=b.useCallback((Ct,vt)=>{const{prefixCls:yt}=e;if(vt)return vt;const bt=yt||T.getPrefixCls("");return Ct?`${bt}-${Ct}`:bt},[T.getPrefixCls,e.prefixCls]),wn=R||T.iconPrefixCls||lp,Vt=r||T.csp;V9(wn,Vt);const On=W9(O,T.theme,{prefixCls:Wt("")}),ht={csp:Vt,autoInsertSpaceInButton:a,alert:o,anchor:s,locale:f||x,direction:d,space:g,splitter:v,virtual:y,popupMatchSelectWidth:w??S,popupOverflow:A,getPrefixCls:Wt,iconPrefixCls:wn,theme:On,segmented:z,statistic:N,spin:_,calendar:J,carousel:$,cascader:B,collapse:U,typography:W,checkbox:K,descriptions:Y,divider:G,drawer:P,skeleton:k,steps:I,image:ne,input:ge,textArea:Pe,layout:C,list:F,mentions:Q,modal:M,progress:H,result:le,slider:oe,breadcrumb:be,menu:ue,pagination:me,empty:_e,badge:He,radio:Xe,rate:Ge,switch:Me,transfer:rt,avatar:Ve,message:Ke,tag:Et,table:Be,card:st,tabs:Ce,timeline:Te,timePicker:qe,upload:re,notification:de,tree:Se,colorPicker:Ne,datePicker:Re,rangePicker:at,flex:ut,wave:$e,dropdown:xe,warning:Qe,tour:Fe,tooltip:Ze,popover:It,popconfirm:wi,floatButtonGroup:Ba,variant:Jr,inputNumber:Yr,treeSelect:Qt},ot=Object.assign({},T);Object.keys(ht).forEach(Ct=>{ht[Ct]!==void 0&&(ot[Ct]=ht[Ct])}),yA.forEach(Ct=>{const vt=e[Ct];vt&&(ot[Ct]=vt)}),typeof a<"u"&&(ot.button=Object.assign({autoInsertSpace:a},ot.button));const Lt=Xg(()=>ot,ot,(Ct,vt)=>{const yt=Object.keys(Ct),bt=Object.keys(vt);return yt.length!==bt.length||yt.some(un=>Ct[un]!==vt[un])}),{layer:lr}=b.useContext(eu),Xr=b.useMemo(()=>({prefixCls:wn,csp:Vt,layer:lr?"antd":void 0}),[wn,Vt,lr]);let mt=b.createElement(b.Fragment,null,b.createElement(pA,{dropdownMatchSelectWidth:S}),t);const Kr=b.useMemo(()=>{var Ct,vt,yt,bt;return tl(((Ct=df.Form)===null||Ct===void 0?void 0:Ct.defaultValidateMessages)||{},((yt=(vt=Lt.locale)===null||vt===void 0?void 0:vt.Form)===null||yt===void 0?void 0:yt.defaultValidateMessages)||{},((bt=Lt.form)===null||bt===void 0?void 0:bt.validateMessages)||{},(c==null?void 0:c.validateMessages)||{})},[Lt,c==null?void 0:c.validateMessages]);Object.keys(Kr).length>0&&(mt=b.createElement(Y4.Provider,{value:Kr},mt)),f&&(mt=b.createElement(Q4,{locale:f,_ANT_MARK__:K4},mt)),mt=b.createElement(op.Provider,{value:Xr},mt),h&&(mt=b.createElement(b9,{size:h},mt)),mt=b.createElement(gA,null,mt);const Qr=b.useMemo(()=>{const Ct=On||{},{algorithm:vt,token:yt,components:bt,cssVar:un}=Ct,_r=vA(Ct,["algorithm","token","components","cssVar"]),sr=vt&&(!Array.isArray(vt)||vt.length>0)?Vm(vt):nC,Un={};Object.entries(bt||{}).forEach(kn=>{let[Gn,Ln]=kn;const ft=Object.assign({},Ln);"algorithm"in ft&&(ft.algorithm===!0?ft.theme=sr:(Array.isArray(ft.algorithm)||typeof ft.algorithm=="function")&&(ft.theme=Vm(ft.algorithm)),delete ft.algorithm),Un[Gn]=ft});const Mn=Object.assign(Object.assign({},Is),yt);return Object.assign(Object.assign({},_r),{theme:sr,token:Mn,components:Un,override:Object.assign({override:Mn},Un),cssVar:un})},[On]);return O&&(mt=b.createElement(rC.Provider,{value:Qr},mt)),Lt.warning&&(mt=b.createElement(J4.Provider,{value:Lt.warning},mt)),j!==void 0&&(mt=b.createElement(y9,{disabled:j},mt)),b.createElement(Kt.Provider,{value:Lt},mt)},ru=e=>{const t=b.useContext(Kt),r=b.useContext(QS);return b.createElement(wA,Object.assign({parentContext:t,legacyLocale:r},e))};ru.ConfigContext=Kt;ru.SizeContext=dl;ru.config=CA;ru.useConfig=S9;Object.defineProperty(ru,"SizeContext",{get:()=>dl});function EC(e){var t;return e==null||(t=e.getRootNode)===null||t===void 0?void 0:t.call(e)}function xA(e){return EC(e)instanceof ShadowRoot}function qc(e){return xA(e)?EC(e):null}function EA(e){return e.replace(/-(.)/g,function(t,r){return r.toUpperCase()})}function AA(e,t){ir(e,"[@ant-design/icons] ".concat(t))}function tb(e){return je(e)==="object"&&typeof e.name=="string"&&typeof e.theme=="string"&&(je(e.icon)==="object"||typeof e.icon=="function")}function nb(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Object.keys(e).reduce(function(t,r){var a=e[r];switch(r){case"class":t.className=a,delete t.class;break;default:delete t[r],t[EA(r)]=a}return t},{})}function dg(e,t,r){return r?ve.createElement(e.tag,ie(ie({key:t},nb(e.attrs)),r),(e.children||[]).map(function(a,o){return dg(a,"".concat(t,"-").concat(e.tag,"-").concat(o))})):ve.createElement(e.tag,ie({key:t},nb(e.attrs)),(e.children||[]).map(function(a,o){return dg(a,"".concat(t,"-").concat(e.tag,"-").concat(o))}))}function AC(e){return Vs(e)[0]}function TC(e){return e?Array.isArray(e)?e:[e]:[]}var TA=`
.anticon {
  display: inline-flex;
  align-items: center;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`,RA=function(t){var r=b.useContext(op),a=r.csp,o=r.prefixCls,s=r.layer,c=TA;o&&(c=c.replace(/anticon/g,o)),s&&(c="@layer ".concat(s,` {
`).concat(c,`
}`)),b.useEffect(function(){var f=t.current,h=qc(f);La(c,"@ant-design-icons",{prepend:!s,csp:a,attachTo:h})},[])},OA=["icon","className","onClick","style","primaryColor","secondaryColor"],Ms={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1};function MA(e){var t=e.primaryColor,r=e.secondaryColor;Ms.primaryColor=t,Ms.secondaryColor=r||AC(t),Ms.calculated=!!r}function NA(){return ie({},Ms)}var vl=function(t){var r=t.icon,a=t.className,o=t.onClick,s=t.style,c=t.primaryColor,f=t.secondaryColor,h=Tn(t,OA),d=b.useRef(),g=Ms;if(c&&(g={primaryColor:c,secondaryColor:f||AC(c)}),RA(d),AA(tb(r),"icon should be icon definiton, but got ".concat(r)),!tb(r))return null;var v=r;return v&&typeof v.icon=="function"&&(v=ie(ie({},v),{},{icon:v.icon(g.primaryColor,g.secondaryColor)})),dg(v.icon,"svg-".concat(v.name),ie(ie({className:a,onClick:o,style:s,"data-icon":v.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},h),{},{ref:d}))};vl.displayName="IconReact";vl.getTwoToneColors=NA;vl.setTwoToneColors=MA;function RC(e){var t=TC(e),r=ye(t,2),a=r[0],o=r[1];return vl.setTwoToneColors({primaryColor:a,secondaryColor:o})}function DA(){var e=vl.getTwoToneColors();return e.calculated?[e.primaryColor,e.secondaryColor]:e.primaryColor}var PA=["className","icon","spin","rotate","tabIndex","onClick","twoToneColor"];RC(Uc.primary);var zr=b.forwardRef(function(e,t){var r=e.className,a=e.icon,o=e.spin,s=e.rotate,c=e.tabIndex,f=e.onClick,h=e.twoToneColor,d=Tn(e,PA),g=b.useContext(op),v=g.prefixCls,y=v===void 0?"anticon":v,S=g.rootClassName,w=Ee(S,y,ee(ee({},"".concat(y,"-").concat(a.name),!!a.name),"".concat(y,"-spin"),!!o||a.name==="loading"),r),A=c;A===void 0&&f&&(A=-1);var x=s?{msTransform:"rotate(".concat(s,"deg)"),transform:"rotate(".concat(s,"deg)")}:void 0,T=TC(h),R=ye(T,2),O=R[0],j=R[1];return b.createElement("span",kt({role:"img","aria-label":a.name},d,{ref:t,tabIndex:A,onClick:f,className:w}),b.createElement(vl,{icon:a,primaryColor:O,secondaryColor:j,style:x}))});zr.displayName="AntdIcon";zr.getTwoToneColor=DA;zr.setTwoToneColor=RC;var zA=function(t,r){return b.createElement(zr,kt({},t,{ref:r,icon:P8}))},_A=b.forwardRef(zA),$A=function(t,r){return b.createElement(zr,kt({},t,{ref:r,icon:z8}))},kA=b.forwardRef($A),LA=`accept acceptCharset accessKey action allowFullScreen allowTransparency
    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge
    charSet checked classID className colSpan cols content contentEditable contextMenu
    controls coords crossOrigin data dateTime default defer dir disabled download draggable
    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder
    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity
    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media
    mediaGroup method min minLength multiple muted name noValidate nonce open
    optimum pattern placeholder poster preload radioGroup readOnly rel required
    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected
    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style
    summary tabIndex target title type useMap value width wmode wrap`,jA=`onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`,HA="".concat(LA," ").concat(jA).split(/[\s\n]+/),BA="aria-",FA="data-";function rb(e,t){return e.indexOf(t)===0}function OC(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r;t===!1?r={aria:!0,data:!0,attr:!0}:t===!0?r={aria:!0}:r=ie({},t);var a={};return Object.keys(e).forEach(function(o){(r.aria&&(o==="role"||rb(o,BA))||r.data&&rb(o,FA)||r.attr&&HA.includes(o))&&(a[o]=e[o])}),a}function MC(e){return e&&ve.isValidElement(e)&&e.type===ve.Fragment}const NC=(e,t,r)=>ve.isValidElement(e)?ve.cloneElement(e,typeof r=="function"?r(e.props||{}):r):t;function Gs(e,t){return NC(e,e,t)}const DC=e=>{const[,,,,t]=Si();return t?`${e}-css-var`:""};var IA=function(t,r){return b.createElement(zr,kt({},t,{ref:r,icon:H8}))},VA=b.forwardRef(IA);const PC=ve.createContext(void 0),Xi=100,zC={Modal:Xi,Drawer:Xi,Popover:Xi,Popconfirm:Xi,Tooltip:Xi,Tour:Xi,FloatButton:Xi},UA={SelectLike:50,Dropdown:50,DatePicker:50,Menu:50,ImagePreview:1};function GA(e){return e in zC}const qA=(e,t)=>{const[,r]=Si(),a=ve.useContext(PC),o=GA(e);let s;if(t!==void 0)s=[t,t];else{let c=a??0;o?c+=(a?0:r.zIndexPopupBase)+zC[e]:c+=UA[e],s=[a===void 0?t:c,c]}return s};function _n(){_n=function(){return t};var e,t={},r=Object.prototype,a=r.hasOwnProperty,o=Object.defineProperty||function(P,k,I){P[k]=I.value},s=typeof Symbol=="function"?Symbol:{},c=s.iterator||"@@iterator",f=s.asyncIterator||"@@asyncIterator",h=s.toStringTag||"@@toStringTag";function d(P,k,I){return Object.defineProperty(P,k,{value:I,enumerable:!0,configurable:!0,writable:!0}),P[k]}try{d({},"")}catch{d=function(I,ne,C){return I[ne]=C}}function g(P,k,I,ne){var C=k&&k.prototype instanceof T?k:T,F=Object.create(C.prototype),Q=new Y(ne||[]);return o(F,"_invoke",{value:B(P,I,Q)}),F}function v(P,k,I){try{return{type:"normal",arg:P.call(k,I)}}catch(ne){return{type:"throw",arg:ne}}}t.wrap=g;var y="suspendedStart",S="suspendedYield",w="executing",A="completed",x={};function T(){}function R(){}function O(){}var j={};d(j,c,function(){return this});var z=Object.getPrototypeOf,N=z&&z(z(G([])));N&&N!==r&&a.call(N,c)&&(j=N);var _=O.prototype=T.prototype=Object.create(j);function J(P){["next","throw","return"].forEach(function(k){d(P,k,function(I){return this._invoke(k,I)})})}function $(P,k){function I(C,F,Q,M){var H=v(P[C],P,F);if(H.type!=="throw"){var le=H.arg,oe=le.value;return oe&&je(oe)=="object"&&a.call(oe,"__await")?k.resolve(oe.__await).then(function(be){I("next",be,Q,M)},function(be){I("throw",be,Q,M)}):k.resolve(oe).then(function(be){le.value=be,Q(le)},function(be){return I("throw",be,Q,M)})}M(H.arg)}var ne;o(this,"_invoke",{value:function(F,Q){function M(){return new k(function(H,le){I(F,Q,H,le)})}return ne=ne?ne.then(M,M):M()}})}function B(P,k,I){var ne=y;return function(C,F){if(ne===w)throw Error("Generator is already running");if(ne===A){if(C==="throw")throw F;return{value:e,done:!0}}for(I.method=C,I.arg=F;;){var Q=I.delegate;if(Q){var M=U(Q,I);if(M){if(M===x)continue;return M}}if(I.method==="next")I.sent=I._sent=I.arg;else if(I.method==="throw"){if(ne===y)throw ne=A,I.arg;I.dispatchException(I.arg)}else I.method==="return"&&I.abrupt("return",I.arg);ne=w;var H=v(P,k,I);if(H.type==="normal"){if(ne=I.done?A:S,H.arg===x)continue;return{value:H.arg,done:I.done}}H.type==="throw"&&(ne=A,I.method="throw",I.arg=H.arg)}}}function U(P,k){var I=k.method,ne=P.iterator[I];if(ne===e)return k.delegate=null,I==="throw"&&P.iterator.return&&(k.method="return",k.arg=e,U(P,k),k.method==="throw")||I!=="return"&&(k.method="throw",k.arg=new TypeError("The iterator does not provide a '"+I+"' method")),x;var C=v(ne,P.iterator,k.arg);if(C.type==="throw")return k.method="throw",k.arg=C.arg,k.delegate=null,x;var F=C.arg;return F?F.done?(k[P.resultName]=F.value,k.next=P.nextLoc,k.method!=="return"&&(k.method="next",k.arg=e),k.delegate=null,x):F:(k.method="throw",k.arg=new TypeError("iterator result is not an object"),k.delegate=null,x)}function W(P){var k={tryLoc:P[0]};1 in P&&(k.catchLoc=P[1]),2 in P&&(k.finallyLoc=P[2],k.afterLoc=P[3]),this.tryEntries.push(k)}function K(P){var k=P.completion||{};k.type="normal",delete k.arg,P.completion=k}function Y(P){this.tryEntries=[{tryLoc:"root"}],P.forEach(W,this),this.reset(!0)}function G(P){if(P||P===""){var k=P[c];if(k)return k.call(P);if(typeof P.next=="function")return P;if(!isNaN(P.length)){var I=-1,ne=function C(){for(;++I<P.length;)if(a.call(P,I))return C.value=P[I],C.done=!1,C;return C.value=e,C.done=!0,C};return ne.next=ne}}throw new TypeError(je(P)+" is not iterable")}return R.prototype=O,o(_,"constructor",{value:O,configurable:!0}),o(O,"constructor",{value:R,configurable:!0}),R.displayName=d(O,h,"GeneratorFunction"),t.isGeneratorFunction=function(P){var k=typeof P=="function"&&P.constructor;return!!k&&(k===R||(k.displayName||k.name)==="GeneratorFunction")},t.mark=function(P){return Object.setPrototypeOf?Object.setPrototypeOf(P,O):(P.__proto__=O,d(P,h,"GeneratorFunction")),P.prototype=Object.create(_),P},t.awrap=function(P){return{__await:P}},J($.prototype),d($.prototype,f,function(){return this}),t.AsyncIterator=$,t.async=function(P,k,I,ne,C){C===void 0&&(C=Promise);var F=new $(g(P,k,I,ne),C);return t.isGeneratorFunction(k)?F:F.next().then(function(Q){return Q.done?Q.value:F.next()})},J(_),d(_,h,"Generator"),d(_,c,function(){return this}),d(_,"toString",function(){return"[object Generator]"}),t.keys=function(P){var k=Object(P),I=[];for(var ne in k)I.push(ne);return I.reverse(),function C(){for(;I.length;){var F=I.pop();if(F in k)return C.value=F,C.done=!1,C}return C.done=!0,C}},t.values=G,Y.prototype={constructor:Y,reset:function(k){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(K),!k)for(var I in this)I.charAt(0)==="t"&&a.call(this,I)&&!isNaN(+I.slice(1))&&(this[I]=e)},stop:function(){this.done=!0;var k=this.tryEntries[0].completion;if(k.type==="throw")throw k.arg;return this.rval},dispatchException:function(k){if(this.done)throw k;var I=this;function ne(le,oe){return Q.type="throw",Q.arg=k,I.next=le,oe&&(I.method="next",I.arg=e),!!oe}for(var C=this.tryEntries.length-1;C>=0;--C){var F=this.tryEntries[C],Q=F.completion;if(F.tryLoc==="root")return ne("end");if(F.tryLoc<=this.prev){var M=a.call(F,"catchLoc"),H=a.call(F,"finallyLoc");if(M&&H){if(this.prev<F.catchLoc)return ne(F.catchLoc,!0);if(this.prev<F.finallyLoc)return ne(F.finallyLoc)}else if(M){if(this.prev<F.catchLoc)return ne(F.catchLoc,!0)}else{if(!H)throw Error("try statement without catch or finally");if(this.prev<F.finallyLoc)return ne(F.finallyLoc)}}}},abrupt:function(k,I){for(var ne=this.tryEntries.length-1;ne>=0;--ne){var C=this.tryEntries[ne];if(C.tryLoc<=this.prev&&a.call(C,"finallyLoc")&&this.prev<C.finallyLoc){var F=C;break}}F&&(k==="break"||k==="continue")&&F.tryLoc<=I&&I<=F.finallyLoc&&(F=null);var Q=F?F.completion:{};return Q.type=k,Q.arg=I,F?(this.method="next",this.next=F.finallyLoc,x):this.complete(Q)},complete:function(k,I){if(k.type==="throw")throw k.arg;return k.type==="break"||k.type==="continue"?this.next=k.arg:k.type==="return"?(this.rval=this.arg=k.arg,this.method="return",this.next="end"):k.type==="normal"&&I&&(this.next=I),x},finish:function(k){for(var I=this.tryEntries.length-1;I>=0;--I){var ne=this.tryEntries[I];if(ne.finallyLoc===k)return this.complete(ne.completion,ne.afterLoc),K(ne),x}},catch:function(k){for(var I=this.tryEntries.length-1;I>=0;--I){var ne=this.tryEntries[I];if(ne.tryLoc===k){var C=ne.completion;if(C.type==="throw"){var F=C.arg;K(ne)}return F}}throw Error("illegal catch attempt")},delegateYield:function(k,I,ne){return this.delegate={iterator:G(k),resultName:I,nextLoc:ne},this.method==="next"&&(this.arg=e),x}},t}function ab(e,t,r,a,o,s,c){try{var f=e[s](c),h=f.value}catch(d){return void r(d)}f.done?t(h):Promise.resolve(h).then(a,o)}function so(e){return function(){var t=this,r=arguments;return new Promise(function(a,o){var s=e.apply(t,r);function c(h){ab(s,a,o,c,f,"next",h)}function f(h){ab(s,a,o,c,f,"throw",h)}c(void 0)})}}var au=ie({},WE),WA=au.version,qh=au.render,JA=au.unmountComponentAtNode,gf;try{var YA=Number((WA||"").split(".")[0]);YA>=18&&(gf=au.createRoot)}catch{}function ib(e){var t=au.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;t&&je(t)==="object"&&(t.usingClientEntryPoint=e)}var Wc="__rc_react_root__";function XA(e,t){ib(!0);var r=t[Wc]||gf(t);ib(!1),r.render(e),t[Wc]=r}function KA(e,t){qh==null||qh(e,t)}function QA(e,t){if(gf){XA(e,t);return}KA(e,t)}function ZA(e){return hg.apply(this,arguments)}function hg(){return hg=so(_n().mark(function e(t){return _n().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",Promise.resolve().then(function(){var o;(o=t[Wc])===null||o===void 0||o.unmount(),delete t[Wc]}));case 1:case"end":return a.stop()}},e)})),hg.apply(this,arguments)}function eT(e){JA(e)}function tT(e){return mg.apply(this,arguments)}function mg(){return mg=so(_n().mark(function e(t){return _n().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(gf===void 0){a.next=2;break}return a.abrupt("return",ZA(t));case 2:eT(t);case 3:case"end":return a.stop()}},e)})),mg.apply(this,arguments)}const nT=(e,t)=>(QA(e,t),()=>tT(t));let rT=nT;function aT(){return rT}const iT=(e,t,r)=>r!==void 0?r:`${e}-${t}`;function yl(e,t){var r=Object.assign({},e);return Array.isArray(t)&&t.forEach(function(a){delete r[a]}),r}const _C=function(e){if(!e)return!1;if(e instanceof Element){if(e.offsetParent)return!0;if(e.getBBox){var t=e.getBBox(),r=t.width,a=t.height;if(r||a)return!0}if(e.getBoundingClientRect){var o=e.getBoundingClientRect(),s=o.width,c=o.height;if(s||c)return!0}}return!1},oT=e=>{const{componentCls:t,colorPrimary:r}=e;return{[t]:{position:"absolute",background:"transparent",pointerEvents:"none",boxSizing:"border-box",color:`var(--wave-color, ${r})`,boxShadow:"0 0 0 0 currentcolor",opacity:.2,"&.wave-motion-appear":{transition:[`box-shadow 0.4s ${e.motionEaseOutCirc}`,`opacity 2s ${e.motionEaseOutCirc}`].join(","),"&-active":{boxShadow:"0 0 0 6px currentcolor",opacity:0},"&.wave-quick":{transition:[`box-shadow ${e.motionDurationSlow} ${e.motionEaseInOut}`,`opacity ${e.motionDurationSlow} ${e.motionEaseInOut}`].join(",")}}}}},lT=I9("Wave",e=>[oT(e)]),$C=`${Gc}-wave-target`;function Wh(e){return e&&e!=="#fff"&&e!=="#ffffff"&&e!=="rgb(255, 255, 255)"&&e!=="rgba(255, 255, 255, 1)"&&!/rgba\((?:\d*, ){3}0\)/.test(e)&&e!=="transparent"}function sT(e){const{borderTopColor:t,borderColor:r,backgroundColor:a}=getComputedStyle(e);return Wh(t)?t:Wh(r)?r:Wh(a)?a:null}function Jh(e){return Number.isNaN(e)?0:e}const uT=e=>{const{className:t,target:r,component:a,registerUnmount:o}=e,s=b.useRef(null),c=b.useRef(null);b.useEffect(()=>{c.current=o()},[]);const[f,h]=b.useState(null),[d,g]=b.useState([]),[v,y]=b.useState(0),[S,w]=b.useState(0),[A,x]=b.useState(0),[T,R]=b.useState(0),[O,j]=b.useState(!1),z={left:v,top:S,width:A,height:T,borderRadius:d.map(J=>`${J}px`).join(" ")};f&&(z["--wave-color"]=f);function N(){const J=getComputedStyle(r);h(sT(r));const $=J.position==="static",{borderLeftWidth:B,borderTopWidth:U}=J;y($?r.offsetLeft:Jh(-parseFloat(B))),w($?r.offsetTop:Jh(-parseFloat(U))),x(r.offsetWidth),R(r.offsetHeight);const{borderTopLeftRadius:W,borderTopRightRadius:K,borderBottomLeftRadius:Y,borderBottomRightRadius:G}=J;g([W,K,G,Y].map(P=>Jh(parseFloat(P))))}if(b.useEffect(()=>{if(r){const J=Wr(()=>{N(),j(!0)});let $;return typeof ResizeObserver<"u"&&($=new ResizeObserver(N),$.observe(r)),()=>{Wr.cancel(J),$==null||$.disconnect()}}},[]),!O)return null;const _=(a==="Checkbox"||a==="Radio")&&(r==null?void 0:r.classList.contains($C));return b.createElement(nu,{visible:!0,motionAppear:!0,motionName:"wave-motion",motionDeadline:5e3,onAppearEnd:(J,$)=>{var B,U;if($.deadline||$.propertyName==="opacity"){const W=(B=s.current)===null||B===void 0?void 0:B.parentElement;(U=c.current)===null||U===void 0||U.call(c).then(()=>{W==null||W.remove()})}return!1}},(J,$)=>{let{className:B}=J;return b.createElement("div",{ref:lo(s,$),className:Ee(t,B,{"wave-quick":_}),style:z})})},cT=(e,t)=>{var r;const{component:a}=t;if(a==="Checkbox"&&!(!((r=e.querySelector("input"))===null||r===void 0)&&r.checked))return;const o=document.createElement("div");o.style.position="absolute",o.style.left="0px",o.style.top="0px",e==null||e.insertBefore(o,e==null?void 0:e.firstChild);const s=aT();let c=null;function f(){return c}c=s(b.createElement(uT,Object.assign({},t,{target:e,registerUnmount:f})),o)},fT=(e,t,r)=>{const{wave:a}=b.useContext(Kt),[,o,s]=Si(),c=zn(d=>{const g=e.current;if(a!=null&&a.disabled||!g)return;const v=g.querySelector(`.${$C}`)||g,{showEffect:y}=a||{};(y||cT)(v,{className:t,token:o,component:r,event:d,hashId:s})}),f=b.useRef(null);return d=>{Wr.cancel(f.current),f.current=Wr(()=>{c(d)})}},kC=e=>{const{children:t,disabled:r,component:a}=e,{getPrefixCls:o}=b.useContext(Kt),s=b.useRef(null),c=o("wave"),[,f]=lT(c),h=fT(s,Ee(c,f),a);if(ve.useEffect(()=>{const g=s.current;if(!g||g.nodeType!==1||r)return;const v=y=>{!_C(y.target)||!g.getAttribute||g.getAttribute("disabled")||g.disabled||g.className.includes("disabled")||g.className.includes("-leave")||h(y)};return g.addEventListener("click",v,!0),()=>{g.removeEventListener("click",v,!0)}},[r]),!ve.isValidElement(t))return t??null;const d=Zs(t)?lo(of(t),s):s;return Gs(t,{ref:d})},iu=e=>{const t=ve.useContext(dl);return ve.useMemo(()=>e?typeof e=="string"?e??t:typeof e=="function"?e(t):t:t,[e,t])},LC=b.createContext(null),pf=(e,t)=>{const r=b.useContext(LC),a=b.useMemo(()=>{if(!r)return"";const{compactDirection:o,isFirstItem:s,isLastItem:c}=r,f=o==="vertical"?"-vertical-":"-";return Ee(`${e}-compact${f}item`,{[`${e}-compact${f}first-item`]:s,[`${e}-compact${f}last-item`]:c,[`${e}-compact${f}item-rtl`]:t==="rtl"})},[e,t,r]);return{compactSize:r==null?void 0:r.compactSize,compactDirection:r==null?void 0:r.compactDirection,compactItemClassnames:a}},dT=e=>{const{children:t}=e;return b.createElement(LC.Provider,{value:null},t)};var hT=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(r[a[o]]=e[a[o]]);return r};const jC=b.createContext(void 0),mT=e=>{const{getPrefixCls:t,direction:r}=b.useContext(Kt),{prefixCls:a,size:o,className:s}=e,c=hT(e,["prefixCls","size","className"]),f=t("btn-group",a),[,,h]=Si(),d=b.useMemo(()=>{switch(o){case"large":return"lg";case"small":return"sm";default:return""}},[o]),g=Ee(f,{[`${f}-${d}`]:d,[`${f}-rtl`]:r==="rtl"},s,h);return b.createElement(jC.Provider,{value:o},b.createElement("div",Object.assign({},c,{className:g})))},ob=/^[\u4E00-\u9FA5]{2}$/,gg=ob.test.bind(ob);function lb(e){return typeof e=="string"}function Yh(e){return e==="text"||e==="link"}function gT(e,t){if(e==null)return;const r=t?" ":"";return typeof e!="string"&&typeof e!="number"&&lb(e.type)&&gg(e.props.children)?Gs(e,{children:e.props.children.split("").join(r)}):lb(e)?gg(e)?ve.createElement("span",null,e.split("").join(r)):ve.createElement("span",null,e):MC(e)?ve.createElement("span",null,e):e}function pT(e,t){let r=!1;const a=[];return ve.Children.forEach(e,o=>{const s=typeof o,c=s==="string"||s==="number";if(r&&c){const f=a.length-1,h=a[f];a[f]=`${h}${o}`}else a.push(o);r=c}),ve.Children.map(a,o=>gT(o,t))}["default","primary","danger"].concat(ze(no));const pg=b.forwardRef((e,t)=>{const{className:r,style:a,children:o,prefixCls:s}=e,c=Ee(`${s}-icon`,r);return ve.createElement("span",{ref:t,className:c,style:a},o)}),sb=b.forwardRef((e,t)=>{const{prefixCls:r,className:a,style:o,iconClassName:s}=e,c=Ee(`${r}-loading-icon`,a);return ve.createElement(pg,{prefixCls:r,className:c,style:o,ref:t},ve.createElement(VA,{className:s}))}),Xh=()=>({width:0,opacity:0,transform:"scale(0)"}),Kh=e=>({width:e.scrollWidth,opacity:1,transform:"scale(1)"}),vT=e=>{const{prefixCls:t,loading:r,existIcon:a,className:o,style:s,mount:c}=e,f=!!r;return a?ve.createElement(sb,{prefixCls:t,className:o,style:s}):ve.createElement(nu,{visible:f,motionName:`${t}-loading-icon-motion`,motionAppear:!c,motionEnter:!c,motionLeave:!c,removeOnLeave:!0,onAppearStart:Xh,onAppearActive:Kh,onEnterStart:Xh,onEnterActive:Kh,onLeaveStart:Kh,onLeaveActive:Xh},(h,d)=>{let{className:g,style:v}=h;const y=Object.assign(Object.assign({},s),v);return ve.createElement(sb,{prefixCls:t,className:Ee(o,g),style:y,ref:d})})},ub=(e,t)=>({[`> span, > ${e}`]:{"&:not(:last-child)":{[`&, & > ${e}`]:{"&:not(:disabled)":{borderInlineEndColor:t}}},"&:not(:first-child)":{[`&, & > ${e}`]:{"&:not(:disabled)":{borderInlineStartColor:t}}}}}),yT=e=>{const{componentCls:t,fontSize:r,lineWidth:a,groupBorderColor:o,colorErrorHover:s}=e;return{[`${t}-group`]:[{position:"relative",display:"inline-flex",[`> span, > ${t}`]:{"&:not(:last-child)":{[`&, & > ${t}`]:{borderStartEndRadius:0,borderEndEndRadius:0}},"&:not(:first-child)":{marginInlineStart:e.calc(a).mul(-1).equal(),[`&, & > ${t}`]:{borderStartStartRadius:0,borderEndStartRadius:0}}},[t]:{position:"relative",zIndex:1,"&:hover, &:focus, &:active":{zIndex:2},"&[disabled]":{zIndex:0}},[`${t}-icon-only`]:{fontSize:r}},ub(`${t}-primary`,o),ub(`${t}-danger`,s)]}};var bT=["b"],ST=["v"],Qh=function(t){return Math.round(Number(t||0))},CT=function(t){if(t instanceof jt)return t;if(t&&je(t)==="object"&&"h"in t&&"b"in t){var r=t,a=r.b,o=Tn(r,bT);return ie(ie({},o),{},{v:a})}return typeof t=="string"&&/hsb/.test(t)?t.replace(/hsb/,"hsv"):t},qs=function(e){yi(r,e);var t=bi(r);function r(a){return gn(this,r),t.call(this,CT(a))}return pn(r,[{key:"toHsbString",value:function(){var o=this.toHsb(),s=Qh(o.s*100),c=Qh(o.b*100),f=Qh(o.h),h=o.a,d="hsb(".concat(f,", ").concat(s,"%, ").concat(c,"%)"),g="hsba(".concat(f,", ").concat(s,"%, ").concat(c,"%, ").concat(h.toFixed(h===0?0:2),")");return h===1?d:g}},{key:"toHsb",value:function(){var o=this.toHsv(),s=o.v,c=Tn(o,ST);return ie(ie({},c),{},{b:s,a:this.a})}}]),r}(jt),wT=function(t){return t instanceof qs?t:new qs(t)};wT("#1677ff");const xT=(e,t)=>(e==null?void 0:e.replace(/[^\w/]/g,"").slice(0,t?8:6))||"",ET=(e,t)=>e?xT(e,t):"";let AT=function(){function e(t){gn(this,e);var r;if(this.cleared=!1,t instanceof e){this.metaColor=t.metaColor.clone(),this.colors=(r=t.colors)===null||r===void 0?void 0:r.map(o=>({color:new e(o.color),percent:o.percent})),this.cleared=t.cleared;return}const a=Array.isArray(t);a&&t.length?(this.colors=t.map(o=>{let{color:s,percent:c}=o;return{color:new e(s),percent:c}}),this.metaColor=new qs(this.colors[0].color.metaColor)):this.metaColor=new qs(a?"":t),(!t||a&&!this.colors)&&(this.metaColor=this.metaColor.setA(0),this.cleared=!0)}return pn(e,[{key:"toHsb",value:function(){return this.metaColor.toHsb()}},{key:"toHsbString",value:function(){return this.metaColor.toHsbString()}},{key:"toHex",value:function(){return ET(this.toHexString(),this.metaColor.a<1)}},{key:"toHexString",value:function(){return this.metaColor.toHexString()}},{key:"toRgb",value:function(){return this.metaColor.toRgb()}},{key:"toRgbString",value:function(){return this.metaColor.toRgbString()}},{key:"isGradient",value:function(){return!!this.colors&&!this.cleared}},{key:"getColors",value:function(){return this.colors||[{color:this,percent:0}]}},{key:"toCssString",value:function(){const{colors:r}=this;return r?`linear-gradient(90deg, ${r.map(o=>`${o.color.toRgbString()} ${o.percent}%`).join(", ")})`:this.metaColor.toRgbString()}},{key:"equals",value:function(r){return!r||this.isGradient()!==r.isGradient()?!1:this.isGradient()?this.colors.length===r.colors.length&&this.colors.every((a,o)=>{const s=r.colors[o];return a.percent===s.percent&&a.color.equals(s.color)}):this.toHexString()===r.toHexString()}}])}();var TT=function(t,r){return b.createElement(zr,kt({},t,{ref:r,icon:B8}))},cb=b.forwardRef(TT);const RT=e=>({animationDuration:e,animationFillMode:"both"}),OT=e=>({animationDuration:e,animationFillMode:"both"}),MT=function(e,t,r,a){const s=(arguments.length>4&&arguments[4]!==void 0?arguments[4]:!1)?"&":"";return{[`
      ${s}${e}-enter,
      ${s}${e}-appear
    `]:Object.assign(Object.assign({},RT(a)),{animationPlayState:"paused"}),[`${s}${e}-leave`]:Object.assign(Object.assign({},OT(a)),{animationPlayState:"paused"}),[`
      ${s}${e}-enter${e}-enter-active,
      ${s}${e}-appear${e}-appear-active
    `]:{animationName:t,animationPlayState:"running"},[`${s}${e}-leave${e}-leave-active`]:{animationName:r,animationPlayState:"running",pointerEvents:"none"}}},NT=new Pr("antZoomIn",{"0%":{transform:"scale(0.2)",opacity:0},"100%":{transform:"scale(1)",opacity:1}}),DT=new Pr("antZoomOut",{"0%":{transform:"scale(1)"},"100%":{transform:"scale(0.2)",opacity:0}}),fb=new Pr("antZoomBigIn",{"0%":{transform:"scale(0.8)",opacity:0},"100%":{transform:"scale(1)",opacity:1}}),db=new Pr("antZoomBigOut",{"0%":{transform:"scale(1)"},"100%":{transform:"scale(0.8)",opacity:0}}),PT=new Pr("antZoomUpIn",{"0%":{transform:"scale(0.8)",transformOrigin:"50% 0%",opacity:0},"100%":{transform:"scale(1)",transformOrigin:"50% 0%"}}),zT=new Pr("antZoomUpOut",{"0%":{transform:"scale(1)",transformOrigin:"50% 0%"},"100%":{transform:"scale(0.8)",transformOrigin:"50% 0%",opacity:0}}),_T=new Pr("antZoomLeftIn",{"0%":{transform:"scale(0.8)",transformOrigin:"0% 50%",opacity:0},"100%":{transform:"scale(1)",transformOrigin:"0% 50%"}}),$T=new Pr("antZoomLeftOut",{"0%":{transform:"scale(1)",transformOrigin:"0% 50%"},"100%":{transform:"scale(0.8)",transformOrigin:"0% 50%",opacity:0}}),kT=new Pr("antZoomRightIn",{"0%":{transform:"scale(0.8)",transformOrigin:"100% 50%",opacity:0},"100%":{transform:"scale(1)",transformOrigin:"100% 50%"}}),LT=new Pr("antZoomRightOut",{"0%":{transform:"scale(1)",transformOrigin:"100% 50%"},"100%":{transform:"scale(0.8)",transformOrigin:"100% 50%",opacity:0}}),jT=new Pr("antZoomDownIn",{"0%":{transform:"scale(0.8)",transformOrigin:"50% 100%",opacity:0},"100%":{transform:"scale(1)",transformOrigin:"50% 100%"}}),HT=new Pr("antZoomDownOut",{"0%":{transform:"scale(1)",transformOrigin:"50% 100%"},"100%":{transform:"scale(0.8)",transformOrigin:"50% 100%",opacity:0}}),BT={zoom:{inKeyframes:NT,outKeyframes:DT},"zoom-big":{inKeyframes:fb,outKeyframes:db},"zoom-big-fast":{inKeyframes:fb,outKeyframes:db},"zoom-left":{inKeyframes:_T,outKeyframes:$T},"zoom-right":{inKeyframes:kT,outKeyframes:LT},"zoom-up":{inKeyframes:PT,outKeyframes:zT},"zoom-down":{inKeyframes:jT,outKeyframes:HT}},FT=(e,t)=>{const{antCls:r}=e,a=`${r}-${t}`,{inKeyframes:o,outKeyframes:s}=BT[t];return[MT(a,o,s,e.motionDurationFast),{[`
        ${a}-enter,
        ${a}-appear
      `]:{transform:"scale(0)",opacity:0,animationTimingFunction:e.motionEaseOutCirc,"&-prepare":{transform:"none"}},[`${a}-leave`]:{animationTimingFunction:e.motionEaseInOutCirc}}]},IT=(e,t)=>{const{r,g:a,b:o,a:s}=e.toRgb(),c=new qs(e.toRgbString()).onBackground(t).toHsv();return s<=.5?c.v>.5:r*.299+a*.587+o*.114>192},HC=e=>{const{paddingInline:t,onlyIconSize:r}=e;return $n(e,{buttonPaddingHorizontal:t,buttonPaddingVertical:0,buttonIconOnlyFontSize:r})},BC=e=>{var t,r,a,o,s,c;const f=(t=e.contentFontSize)!==null&&t!==void 0?t:e.fontSize,h=(r=e.contentFontSizeSM)!==null&&r!==void 0?r:e.fontSize,d=(a=e.contentFontSizeLG)!==null&&a!==void 0?a:e.fontSizeLG,g=(o=e.contentLineHeight)!==null&&o!==void 0?o:jc(f),v=(s=e.contentLineHeightSM)!==null&&s!==void 0?s:jc(h),y=(c=e.contentLineHeightLG)!==null&&c!==void 0?c:jc(d),S=IT(new AT(e.colorBgSolid),"#fff")?"#000":"#fff",w=no.reduce((A,x)=>Object.assign(Object.assign({},A),{[`${x}ShadowColor`]:`0 ${We(e.controlOutlineWidth)} 0 ${As(e[`${x}1`],e.colorBgContainer)}`}),{});return Object.assign(Object.assign({},w),{fontWeight:400,defaultShadow:`0 ${e.controlOutlineWidth}px 0 ${e.controlTmpOutline}`,primaryShadow:`0 ${e.controlOutlineWidth}px 0 ${e.controlOutline}`,dangerShadow:`0 ${e.controlOutlineWidth}px 0 ${e.colorErrorOutline}`,primaryColor:e.colorTextLightSolid,dangerColor:e.colorTextLightSolid,borderColorDisabled:e.colorBorder,defaultGhostColor:e.colorBgContainer,ghostBg:"transparent",defaultGhostBorderColor:e.colorBgContainer,paddingInline:e.paddingContentHorizontal-e.lineWidth,paddingInlineLG:e.paddingContentHorizontal-e.lineWidth,paddingInlineSM:8-e.lineWidth,onlyIconSize:"inherit",onlyIconSizeSM:"inherit",onlyIconSizeLG:"inherit",groupBorderColor:e.colorPrimaryHover,linkHoverBg:"transparent",textTextColor:e.colorText,textTextHoverColor:e.colorText,textTextActiveColor:e.colorText,textHoverBg:e.colorFillTertiary,defaultColor:e.colorText,defaultBg:e.colorBgContainer,defaultBorderColor:e.colorBorder,defaultBorderColorDisabled:e.colorBorder,defaultHoverBg:e.colorBgContainer,defaultHoverColor:e.colorPrimaryHover,defaultHoverBorderColor:e.colorPrimaryHover,defaultActiveBg:e.colorBgContainer,defaultActiveColor:e.colorPrimaryActive,defaultActiveBorderColor:e.colorPrimaryActive,solidTextColor:S,contentFontSize:f,contentFontSizeSM:h,contentFontSizeLG:d,contentLineHeight:g,contentLineHeightSM:v,contentLineHeightLG:y,paddingBlock:Math.max((e.controlHeight-f*g)/2-e.lineWidth,0),paddingBlockSM:Math.max((e.controlHeightSM-h*v)/2-e.lineWidth,0),paddingBlockLG:Math.max((e.controlHeightLG-d*y)/2-e.lineWidth,0)})},VT=e=>{const{componentCls:t,iconCls:r,fontWeight:a,opacityLoading:o,motionDurationSlow:s,motionEaseInOut:c,marginXS:f,calc:h}=e;return{[t]:{outline:"none",position:"relative",display:"inline-flex",gap:e.marginXS,alignItems:"center",justifyContent:"center",fontWeight:a,whiteSpace:"nowrap",textAlign:"center",backgroundImage:"none",background:"transparent",border:`${We(e.lineWidth)} ${e.lineType} transparent`,cursor:"pointer",transition:`all ${e.motionDurationMid} ${e.motionEaseInOut}`,userSelect:"none",touchAction:"manipulation",color:e.colorText,"&:disabled > *":{pointerEvents:"none"},[`${t}-icon > svg`]:cC(),"> a":{color:"currentColor"},"&:not(:disabled)":F9(e),[`&${t}-two-chinese-chars::first-letter`]:{letterSpacing:"0.34em"},[`&${t}-two-chinese-chars > *:not(${r})`]:{marginInlineEnd:"-0.34em",letterSpacing:"0.34em"},[`&${t}-icon-only`]:{paddingInline:0,[`&${t}-compact-item`]:{flex:"none"},[`&${t}-round`]:{width:"auto"}},[`&${t}-loading`]:{opacity:o,cursor:"default"},[`${t}-loading-icon`]:{transition:["width","opacity","margin"].map(d=>`${d} ${s} ${c}`).join(",")},[`&:not(${t}-icon-end)`]:{[`${t}-loading-icon-motion`]:{"&-appear-start, &-enter-start":{marginInlineEnd:h(f).mul(-1).equal()},"&-appear-active, &-enter-active":{marginInlineEnd:0},"&-leave-start":{marginInlineEnd:0},"&-leave-active":{marginInlineEnd:h(f).mul(-1).equal()}}},"&-icon-end":{flexDirection:"row-reverse",[`${t}-loading-icon-motion`]:{"&-appear-start, &-enter-start":{marginInlineStart:h(f).mul(-1).equal()},"&-appear-active, &-enter-active":{marginInlineStart:0},"&-leave-start":{marginInlineStart:0},"&-leave-active":{marginInlineStart:h(f).mul(-1).equal()}}}}}},FC=(e,t,r)=>({[`&:not(:disabled):not(${e}-disabled)`]:{"&:hover":t,"&:active":r}}),UT=e=>({minWidth:e.controlHeight,paddingInlineStart:0,paddingInlineEnd:0,borderRadius:"50%"}),GT=e=>({borderRadius:e.controlHeight,paddingInlineStart:e.calc(e.controlHeight).div(2).equal(),paddingInlineEnd:e.calc(e.controlHeight).div(2).equal()}),qT=e=>({cursor:"not-allowed",borderColor:e.borderColorDisabled,color:e.colorTextDisabled,background:e.colorBgContainerDisabled,boxShadow:"none"}),vf=(e,t,r,a,o,s,c,f)=>({[`&${e}-background-ghost`]:Object.assign(Object.assign({color:r||void 0,background:t,borderColor:a||void 0,boxShadow:"none"},FC(e,Object.assign({background:t},c),Object.assign({background:t},f))),{"&:disabled":{cursor:"not-allowed",color:o||void 0,borderColor:s||void 0}})}),WT=e=>({[`&:disabled, &${e.componentCls}-disabled`]:Object.assign({},qT(e))}),JT=e=>({[`&:disabled, &${e.componentCls}-disabled`]:{cursor:"not-allowed",color:e.colorTextDisabled}}),yf=(e,t,r,a)=>{const s=a&&["link","text"].includes(a)?JT:WT;return Object.assign(Object.assign({},s(e)),FC(e.componentCls,t,r))},bf=(e,t,r,a,o)=>({[`&${e.componentCls}-variant-solid`]:Object.assign({color:t,background:r},yf(e,a,o))}),Sf=(e,t,r,a,o)=>({[`&${e.componentCls}-variant-outlined, &${e.componentCls}-variant-dashed`]:Object.assign({borderColor:t,background:r},yf(e,a,o))}),Cf=e=>({[`&${e.componentCls}-variant-dashed`]:{borderStyle:"dashed"}}),wf=(e,t,r,a)=>({[`&${e.componentCls}-variant-filled`]:Object.assign({boxShadow:"none",background:t},yf(e,r,a))}),da=(e,t,r,a,o)=>({[`&${e.componentCls}-variant-${r}`]:Object.assign({color:t,boxShadow:"none"},yf(e,a,o,r))}),YT=e=>{const{componentCls:t}=e;return no.reduce((r,a)=>{const o=e[`${a}6`],s=e[`${a}1`],c=e[`${a}5`],f=e[`${a}2`],h=e[`${a}3`],d=e[`${a}7`];return Object.assign(Object.assign({},r),{[`&${t}-color-${a}`]:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({color:o,boxShadow:e[`${a}ShadowColor`]},bf(e,e.colorTextLightSolid,o,{background:c},{background:d})),Sf(e,o,e.colorBgContainer,{color:c,borderColor:c,background:e.colorBgContainer},{color:d,borderColor:d,background:e.colorBgContainer})),Cf(e)),wf(e,s,{background:f},{background:h})),da(e,o,"link",{color:c},{color:d})),da(e,o,"text",{color:c,background:s},{color:d,background:h}))})},{})},XT=e=>Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({color:e.defaultColor,boxShadow:e.defaultShadow},bf(e,e.solidTextColor,e.colorBgSolid,{color:e.solidTextColor,background:e.colorBgSolidHover},{color:e.solidTextColor,background:e.colorBgSolidActive})),Cf(e)),wf(e,e.colorFillTertiary,{background:e.colorFillSecondary},{background:e.colorFill})),vf(e.componentCls,e.ghostBg,e.defaultGhostColor,e.defaultGhostBorderColor,e.colorTextDisabled,e.colorBorder)),da(e,e.textTextColor,"link",{color:e.colorLinkHover,background:e.linkHoverBg},{color:e.colorLinkActive})),KT=e=>Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({color:e.colorPrimary,boxShadow:e.primaryShadow},Sf(e,e.colorPrimary,e.colorBgContainer,{color:e.colorPrimaryTextHover,borderColor:e.colorPrimaryHover,background:e.colorBgContainer},{color:e.colorPrimaryTextActive,borderColor:e.colorPrimaryActive,background:e.colorBgContainer})),Cf(e)),wf(e,e.colorPrimaryBg,{background:e.colorPrimaryBgHover},{background:e.colorPrimaryBorder})),da(e,e.colorPrimaryText,"text",{color:e.colorPrimaryTextHover,background:e.colorPrimaryBg},{color:e.colorPrimaryTextActive,background:e.colorPrimaryBorder})),da(e,e.colorPrimaryText,"link",{color:e.colorPrimaryTextHover,background:e.linkHoverBg},{color:e.colorPrimaryTextActive})),vf(e.componentCls,e.ghostBg,e.colorPrimary,e.colorPrimary,e.colorTextDisabled,e.colorBorder,{color:e.colorPrimaryHover,borderColor:e.colorPrimaryHover},{color:e.colorPrimaryActive,borderColor:e.colorPrimaryActive})),QT=e=>Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({color:e.colorError,boxShadow:e.dangerShadow},bf(e,e.dangerColor,e.colorError,{background:e.colorErrorHover},{background:e.colorErrorActive})),Sf(e,e.colorError,e.colorBgContainer,{color:e.colorErrorHover,borderColor:e.colorErrorBorderHover},{color:e.colorErrorActive,borderColor:e.colorErrorActive})),Cf(e)),wf(e,e.colorErrorBg,{background:e.colorErrorBgFilledHover},{background:e.colorErrorBgActive})),da(e,e.colorError,"text",{color:e.colorErrorHover,background:e.colorErrorBg},{color:e.colorErrorHover,background:e.colorErrorBgActive})),da(e,e.colorError,"link",{color:e.colorErrorHover},{color:e.colorErrorActive})),vf(e.componentCls,e.ghostBg,e.colorError,e.colorError,e.colorTextDisabled,e.colorBorder,{color:e.colorErrorHover,borderColor:e.colorErrorHover},{color:e.colorErrorActive,borderColor:e.colorErrorActive})),ZT=e=>Object.assign(Object.assign({},da(e,e.colorLink,"link",{color:e.colorLinkHover},{color:e.colorLinkActive})),vf(e.componentCls,e.ghostBg,e.colorInfo,e.colorInfo,e.colorTextDisabled,e.colorBorder,{color:e.colorInfoHover,borderColor:e.colorInfoHover},{color:e.colorInfoActive,borderColor:e.colorInfoActive})),e7=e=>{const{componentCls:t}=e;return Object.assign({[`${t}-color-default`]:XT(e),[`${t}-color-primary`]:KT(e),[`${t}-color-dangerous`]:QT(e),[`${t}-color-link`]:ZT(e)},YT(e))},t7=e=>Object.assign(Object.assign(Object.assign(Object.assign({},Sf(e,e.defaultBorderColor,e.defaultBg,{color:e.defaultHoverColor,borderColor:e.defaultHoverBorderColor,background:e.defaultHoverBg},{color:e.defaultActiveColor,borderColor:e.defaultActiveBorderColor,background:e.defaultActiveBg})),da(e,e.textTextColor,"text",{color:e.textTextHoverColor,background:e.textHoverBg},{color:e.textTextActiveColor,background:e.colorBgTextActive})),bf(e,e.primaryColor,e.colorPrimary,{background:e.colorPrimaryHover,color:e.primaryColor},{background:e.colorPrimaryActive,color:e.primaryColor})),da(e,e.colorLink,"link",{color:e.colorLinkHover,background:e.linkHoverBg},{color:e.colorLinkActive})),cp=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const{componentCls:r,controlHeight:a,fontSize:o,borderRadius:s,buttonPaddingHorizontal:c,iconCls:f,buttonPaddingVertical:h,buttonIconOnlyFontSize:d}=e;return[{[t]:{fontSize:o,height:a,padding:`${We(h)} ${We(c)}`,borderRadius:s,[`&${r}-icon-only`]:{width:a,[f]:{fontSize:d}}}},{[`${r}${r}-circle${t}`]:UT(e)},{[`${r}${r}-round${t}`]:GT(e)}]},n7=e=>{const t=$n(e,{fontSize:e.contentFontSize});return cp(t,e.componentCls)},r7=e=>{const t=$n(e,{controlHeight:e.controlHeightSM,fontSize:e.contentFontSizeSM,padding:e.paddingXS,buttonPaddingHorizontal:e.paddingInlineSM,buttonPaddingVertical:0,borderRadius:e.borderRadiusSM,buttonIconOnlyFontSize:e.onlyIconSizeSM});return cp(t,`${e.componentCls}-sm`)},a7=e=>{const t=$n(e,{controlHeight:e.controlHeightLG,fontSize:e.contentFontSizeLG,buttonPaddingHorizontal:e.paddingInlineLG,buttonPaddingVertical:0,borderRadius:e.borderRadiusLG,buttonIconOnlyFontSize:e.onlyIconSizeLG});return cp(t,`${e.componentCls}-lg`)},i7=e=>{const{componentCls:t}=e;return{[t]:{[`&${t}-block`]:{width:"100%"}}}},o7=Ha("Button",e=>{const t=HC(e);return[VT(t),n7(t),r7(t),a7(t),i7(t),e7(t),t7(t),yT(t)]},BC,{unitless:{fontWeight:!0,contentLineHeight:!0,contentLineHeightSM:!0,contentLineHeightLG:!0}});function l7(e,t,r){const{focusElCls:a,focus:o,borderElCls:s}=r,c=s?"> *":"",f=["hover",o?"focus":null,"active"].filter(Boolean).map(h=>`&:${h} ${c}`).join(",");return{[`&-item:not(${t}-last-item)`]:{marginInlineEnd:e.calc(e.lineWidth).mul(-1).equal()},"&-item":Object.assign(Object.assign({[f]:{zIndex:2}},a?{[`&${a}`]:{zIndex:2}}:{}),{[`&[disabled] ${c}`]:{zIndex:0}})}}function s7(e,t,r){const{borderElCls:a}=r,o=a?`> ${a}`:"";return{[`&-item:not(${t}-first-item):not(${t}-last-item) ${o}`]:{borderRadius:0},[`&-item:not(${t}-last-item)${t}-first-item`]:{[`& ${o}, &${e}-sm ${o}, &${e}-lg ${o}`]:{borderStartEndRadius:0,borderEndEndRadius:0}},[`&-item:not(${t}-first-item)${t}-last-item`]:{[`& ${o}, &${e}-sm ${o}, &${e}-lg ${o}`]:{borderStartStartRadius:0,borderEndStartRadius:0}}}}function IC(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{focus:!0};const{componentCls:r}=e,a=`${r}-compact`;return{[a]:Object.assign(Object.assign({},l7(e,a,t)),s7(r,a,t))}}function u7(e,t){return{[`&-item:not(${t}-last-item)`]:{marginBottom:e.calc(e.lineWidth).mul(-1).equal()},"&-item":{"&:hover,&:focus,&:active":{zIndex:2},"&[disabled]":{zIndex:0}}}}function c7(e,t){return{[`&-item:not(${t}-first-item):not(${t}-last-item)`]:{borderRadius:0},[`&-item${t}-first-item:not(${t}-last-item)`]:{[`&, &${e}-sm, &${e}-lg`]:{borderEndEndRadius:0,borderEndStartRadius:0}},[`&-item${t}-last-item:not(${t}-first-item)`]:{[`&, &${e}-sm, &${e}-lg`]:{borderStartStartRadius:0,borderStartEndRadius:0}}}}function f7(e){const t=`${e.componentCls}-compact-vertical`;return{[t]:Object.assign(Object.assign({},u7(e,t)),c7(e.componentCls,t))}}const d7=e=>{const{componentCls:t,colorPrimaryHover:r,lineWidth:a,calc:o}=e,s=o(a).mul(-1).equal(),c=f=>{const h=`${t}-compact${f?"-vertical":""}-item${t}-primary:not([disabled])`;return{[`${h} + ${h}::before`]:{position:"absolute",top:f?s:0,insetInlineStart:f?0:s,backgroundColor:r,content:'""',width:f?"100%":a,height:f?a:"100%"}}};return Object.assign(Object.assign({},c()),c(!0))},h7=sp(["Button","compact"],e=>{const t=HC(e);return[IC(t),f7(t),d7(t)]},BC);var m7=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(r[a[o]]=e[a[o]]);return r};function g7(e){if(typeof e=="object"&&e){let t=e==null?void 0:e.delay;return t=!Number.isNaN(t)&&typeof t=="number"?t:0,{loading:t<=0,delay:t}}return{loading:!!e,delay:0}}const p7={default:["default","outlined"],primary:["primary","solid"],dashed:["default","dashed"],link:["link","link"],text:["default","text"]},v7=ve.forwardRef((e,t)=>{var r,a;const{loading:o=!1,prefixCls:s,color:c,variant:f,type:h,danger:d=!1,shape:g="default",size:v,styles:y,disabled:S,className:w,rootClassName:A,children:x,icon:T,iconPosition:R="start",ghost:O=!1,block:j=!1,htmlType:z="button",classNames:N,style:_={},autoInsertSpace:J,autoFocus:$}=e,B=m7(e,["loading","prefixCls","color","variant","type","danger","shape","size","styles","disabled","className","rootClassName","children","icon","iconPosition","ghost","block","htmlType","classNames","style","autoInsertSpace","autoFocus"]),U=h||"default",[W,K]=b.useMemo(()=>{if(c&&f)return[c,f];const Qe=p7[U]||[];return d?["danger",Qe[1]]:Qe},[h,c,f,d]),G=W==="danger"?"dangerous":W,{getPrefixCls:P,direction:k,autoInsertSpace:I,className:ne,style:C,classNames:F,styles:Q}=tu("button"),M=(r=J??I)!==null&&r!==void 0?r:!0,H=P("btn",s),[le,oe,be]=o7(H),ue=b.useContext(to),me=S??ue,ge=b.useContext(jC),Pe=b.useMemo(()=>g7(o),[o]),[_e,He]=b.useState(Pe.loading),[Xe,Ge]=b.useState(!1),Me=b.useRef(null),rt=af(t,Me),Ve=b.Children.count(x)===1&&!T&&!Yh(K),Ke=b.useRef(!0);ve.useEffect(()=>(Ke.current=!1,()=>{Ke.current=!0}),[]),b.useEffect(()=>{let Qe=null;Pe.delay>0?Qe=setTimeout(()=>{Qe=null,He(!0)},Pe.delay):He(Pe.loading);function Fe(){Qe&&(clearTimeout(Qe),Qe=null)}return Fe},[Pe]),b.useEffect(()=>{if(!Me.current||!M)return;const Qe=Me.current.textContent||"";Ve&&gg(Qe)?Xe||Ge(!0):Xe&&Ge(!1)}),b.useEffect(()=>{$&&Me.current&&Me.current.focus()},[]);const Et=ve.useCallback(Qe=>{var Fe;if(_e||me){Qe.preventDefault();return}(Fe=e.onClick)===null||Fe===void 0||Fe.call(e,("href"in e,Qe))},[e.onClick,_e,me]),{compactSize:Be,compactItemClassnames:st}=pf(H,k),Ce={large:"lg",small:"sm",middle:void 0},Te=iu(Qe=>{var Fe,Ze;return(Ze=(Fe=v??Be)!==null&&Fe!==void 0?Fe:ge)!==null&&Ze!==void 0?Ze:Qe}),qe=Te&&(a=Ce[Te])!==null&&a!==void 0?a:"",re=_e?"loading":T,de=yl(B,["navigate"]),Se=Ee(H,oe,be,{[`${H}-${g}`]:g!=="default"&&g,[`${H}-${U}`]:U,[`${H}-dangerous`]:d,[`${H}-color-${G}`]:G,[`${H}-variant-${K}`]:K,[`${H}-${qe}`]:qe,[`${H}-icon-only`]:!x&&x!==0&&!!re,[`${H}-background-ghost`]:O&&!Yh(K),[`${H}-loading`]:_e,[`${H}-two-chinese-chars`]:Xe&&M&&!_e,[`${H}-block`]:j,[`${H}-rtl`]:k==="rtl",[`${H}-icon-end`]:R==="end"},st,w,A,ne),Ne=Object.assign(Object.assign({},C),_),Re=Ee(N==null?void 0:N.icon,F.icon),at=Object.assign(Object.assign({},(y==null?void 0:y.icon)||{}),Q.icon||{}),ut=T&&!_e?ve.createElement(pg,{prefixCls:H,className:Re,style:at},T):o&&typeof o=="object"&&o.icon?ve.createElement(pg,{prefixCls:H,className:Re,style:at},o.icon):ve.createElement(vT,{existIcon:!!T,prefixCls:H,loading:_e,mount:Ke.current}),$e=x||x===0?pT(x,Ve&&M):null;if(de.href!==void 0)return le(ve.createElement("a",Object.assign({},de,{className:Ee(Se,{[`${H}-disabled`]:me}),href:me?void 0:de.href,style:Ne,onClick:Et,ref:rt,tabIndex:me?-1:0}),ut,$e));let xe=ve.createElement("button",Object.assign({},B,{type:z,className:Se,style:Ne,onClick:Et,disabled:me,ref:rt}),ut,$e,st&&ve.createElement(h7,{prefixCls:H}));return Yh(K)||(xe=ve.createElement(kC,{component:"Button",disabled:_e},xe)),le(xe)}),fp=v7;fp.Group=mT;fp.__ANT_BUTTON=!0;var VC=b.createContext(null),hb=[];function y7(e,t){var r=b.useState(function(){if(!or())return null;var w=document.createElement("div");return w}),a=ye(r,1),o=a[0],s=b.useRef(!1),c=b.useContext(VC),f=b.useState(hb),h=ye(f,2),d=h[0],g=h[1],v=c||(s.current?void 0:function(w){g(function(A){var x=[w].concat(ze(A));return x})});function y(){o.parentElement||document.body.appendChild(o),s.current=!0}function S(){var w;(w=o.parentElement)===null||w===void 0||w.removeChild(o),s.current=!1}return Cn(function(){return e?c?c(y):y():S(),S},[e]),Cn(function(){d.length&&(d.forEach(function(w){return w()}),g(hb))},[d]),[o,v]}function b7(e){var t="rc-scrollbar-measure-".concat(Math.random().toString(36).substring(7)),r=document.createElement("div");r.id=t;var a=r.style;a.position="absolute",a.left="0",a.top="0",a.width="100px",a.height="100px",a.overflow="scroll";var o,s;if(e){var c=getComputedStyle(e);a.scrollbarColor=c.scrollbarColor,a.scrollbarWidth=c.scrollbarWidth;var f=getComputedStyle(e,"::-webkit-scrollbar"),h=parseInt(f.width,10),d=parseInt(f.height,10);try{var g=h?"width: ".concat(f.width,";"):"",v=d?"height: ".concat(f.height,";"):"";La(`
#`.concat(t,`::-webkit-scrollbar {
`).concat(g,`
`).concat(v,`
}`),t)}catch(w){console.error(w),o=h,s=d}}document.body.appendChild(r);var y=e&&o&&!isNaN(o)?o:r.offsetWidth-r.clientWidth,S=e&&s&&!isNaN(s)?s:r.offsetHeight-r.clientHeight;return document.body.removeChild(r),Bs(t),{width:y,height:S}}function S7(e){return typeof document>"u"||!e||!(e instanceof Element)?{width:0,height:0}:b7(e)}function C7(){return document.body.scrollHeight>(window.innerHeight||document.documentElement.clientHeight)&&window.innerWidth>document.body.offsetWidth}var w7="rc-util-locker-".concat(Date.now()),mb=0;function x7(e){var t=!!e,r=b.useState(function(){return mb+=1,"".concat(w7,"_").concat(mb)}),a=ye(r,1),o=a[0];Cn(function(){if(t){var s=S7(document.body).width,c=C7();La(`
html body {
  overflow-y: hidden;
  `.concat(c?"width: calc(100% - ".concat(s,"px);"):"",`
}`),o)}else Bs(o);return function(){Bs(o)}},[t,o])}var E7=!1;function A7(e){return E7}var gb=function(t){return t===!1?!1:!or()||!t?null:typeof t=="string"?document.querySelector(t):typeof t=="function"?t():t},UC=b.forwardRef(function(e,t){var r=e.open,a=e.autoLock,o=e.getContainer;e.debug;var s=e.autoDestroy,c=s===void 0?!0:s,f=e.children,h=b.useState(r),d=ye(h,2),g=d[0],v=d[1],y=g||r;b.useEffect(function(){(c||r)&&v(r)},[r,c]);var S=b.useState(function(){return gb(o)}),w=ye(S,2),A=w[0],x=w[1];b.useEffect(function(){var U=gb(o);x(U??null)});var T=y7(y&&!A),R=ye(T,2),O=R[0],j=R[1],z=A??O;x7(a&&r&&or()&&(z===O||z===document.body));var N=null;if(f&&Zs(f)&&t){var _=f;N=_.ref}var J=af(N,t);if(!y||!or()||A===void 0)return null;var $=z===!1||A7(),B=f;return t&&(B=b.cloneElement(f,{ref:J})),b.createElement(VC.Provider,{value:j},$?B:qg.createPortal(B,z))});function T7(){var e=ie({},ef);return e.useId}var pb=0,vb=T7();const GC=vb?function(t){var r=vb();return t||r}:function(t){var r=b.useState("ssr-id"),a=ye(r,2),o=a[0],s=a[1];return b.useEffect(function(){var c=pb;pb+=1,s("rc_unique_".concat(c))},[]),t||o};var Zi="RC_FORM_INTERNAL_HOOKS",Ot=function(){ir(!1,"Can not find FormContext. Please make sure you wrap Field under Form.")},hl=b.createContext({getFieldValue:Ot,getFieldsValue:Ot,getFieldError:Ot,getFieldWarning:Ot,getFieldsError:Ot,isFieldsTouched:Ot,isFieldTouched:Ot,isFieldValidating:Ot,isFieldsValidating:Ot,resetFields:Ot,setFields:Ot,setFieldValue:Ot,setFieldsValue:Ot,validateFields:Ot,submit:Ot,getInternalHooks:function(){return Ot(),{dispatch:Ot,initEntityValue:Ot,registerField:Ot,useSubscribe:Ot,setInitialValues:Ot,destroyForm:Ot,setCallbacks:Ot,registerWatch:Ot,getFields:Ot,setValidateMessages:Ot,setPreserve:Ot,getInitialValue:Ot}}}),Jc=b.createContext(null);function vg(e){return e==null?[]:Array.isArray(e)?e:[e]}function R7(e){return e&&!!e._init}function yg(){return{default:"Validation error on field %s",required:"%s is required",enum:"%s must be one of %s",whitespace:"%s cannot be empty",date:{format:"%s date %s is invalid for format %s",parse:"%s date could not be parsed, %s is invalid ",invalid:"%s date %s is invalid"},types:{string:"%s is not a %s",method:"%s is not a %s (function)",array:"%s is not an %s",object:"%s is not an %s",number:"%s is not a %s",date:"%s is not a %s",boolean:"%s is not a %s",integer:"%s is not an %s",float:"%s is not a %s",regexp:"%s is not a valid %s",email:"%s is not a valid %s",url:"%s is not a valid %s",hex:"%s is not a valid %s"},string:{len:"%s must be exactly %s characters",min:"%s must be at least %s characters",max:"%s cannot be longer than %s characters",range:"%s must be between %s and %s characters"},number:{len:"%s must equal %s",min:"%s cannot be less than %s",max:"%s cannot be greater than %s",range:"%s must be between %s and %s"},array:{len:"%s must be exactly %s in length",min:"%s cannot be less than %s in length",max:"%s cannot be greater than %s in length",range:"%s must be between %s and %s in length"},pattern:{mismatch:"%s value %s does not match pattern %s"},clone:function(){var t=JSON.parse(JSON.stringify(this));return t.clone=this.clone,t}}}var bg=yg();function O7(e){try{return Function.toString.call(e).indexOf("[native code]")!==-1}catch{return typeof e=="function"}}function M7(e,t,r){if(Qg())return Reflect.construct.apply(null,arguments);var a=[null];a.push.apply(a,t);var o=new(e.bind.apply(e,a));return r&&Ls(o,r.prototype),o}function Sg(e){var t=typeof Map=="function"?new Map:void 0;return Sg=function(a){if(a===null||!O7(a))return a;if(typeof a!="function")throw new TypeError("Super expression must either be null or a function");if(t!==void 0){if(t.has(a))return t.get(a);t.set(a,o)}function o(){return M7(a,arguments,js(this).constructor)}return o.prototype=Object.create(a.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),Ls(o,a)},Sg(e)}var N7=/%[sdj%]/g,D7=function(){};function Cg(e){if(!e||!e.length)return null;var t={};return e.forEach(function(r){var a=r.field;t[a]=t[a]||[],t[a].push(r)}),t}function rr(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];var o=0,s=r.length;if(typeof e=="function")return e.apply(null,r);if(typeof e=="string"){var c=e.replace(N7,function(f){if(f==="%%")return"%";if(o>=s)return f;switch(f){case"%s":return String(r[o++]);case"%d":return Number(r[o++]);case"%j":try{return JSON.stringify(r[o++])}catch{return"[Circular]"}break;default:return f}});return c}return e}function P7(e){return e==="string"||e==="url"||e==="hex"||e==="email"||e==="date"||e==="pattern"}function sn(e,t){return!!(e==null||t==="array"&&Array.isArray(e)&&!e.length||P7(t)&&typeof e=="string"&&!e)}function z7(e,t,r){var a=[],o=0,s=e.length;function c(f){a.push.apply(a,ze(f||[])),o++,o===s&&r(a)}e.forEach(function(f){t(f,c)})}function yb(e,t,r){var a=0,o=e.length;function s(c){if(c&&c.length){r(c);return}var f=a;a=a+1,f<o?t(e[f],s):r([])}s([])}function _7(e){var t=[];return Object.keys(e).forEach(function(r){t.push.apply(t,ze(e[r]||[]))}),t}var bb=function(e){yi(r,e);var t=bi(r);function r(a,o){var s;return gn(this,r),s=t.call(this,"Async Validation Error"),ee(tt(s),"errors",void 0),ee(tt(s),"fields",void 0),s.errors=a,s.fields=o,s}return pn(r)}(Sg(Error));function $7(e,t,r,a,o){if(t.first){var s=new Promise(function(y,S){var w=function(T){return a(T),T.length?S(new bb(T,Cg(T))):y(o)},A=_7(e);yb(A,r,w)});return s.catch(function(y){return y}),s}var c=t.firstFields===!0?Object.keys(e):t.firstFields||[],f=Object.keys(e),h=f.length,d=0,g=[],v=new Promise(function(y,S){var w=function(x){if(g.push.apply(g,x),d++,d===h)return a(g),g.length?S(new bb(g,Cg(g))):y(o)};f.length||(a(g),y(o)),f.forEach(function(A){var x=e[A];c.indexOf(A)!==-1?yb(x,r,w):z7(x,r,w)})});return v.catch(function(y){return y}),v}function k7(e){return!!(e&&e.message!==void 0)}function L7(e,t){for(var r=e,a=0;a<t.length;a++){if(r==null)return r;r=r[t[a]]}return r}function Sb(e,t){return function(r){var a;return e.fullFields?a=L7(t,e.fullFields):a=t[r.field||e.fullField],k7(r)?(r.field=r.field||e.fullField,r.fieldValue=a,r):{message:typeof r=="function"?r():r,fieldValue:a,field:r.field||e.fullField}}}function Cb(e,t){if(t){for(var r in t)if(t.hasOwnProperty(r)){var a=t[r];je(a)==="object"&&je(e[r])==="object"?e[r]=ie(ie({},e[r]),a):e[r]=a}}return e}var Jo="enum",j7=function(t,r,a,o,s){t[Jo]=Array.isArray(t[Jo])?t[Jo]:[],t[Jo].indexOf(r)===-1&&o.push(rr(s.messages[Jo],t.fullField,t[Jo].join(", ")))},H7=function(t,r,a,o,s){if(t.pattern){if(t.pattern instanceof RegExp)t.pattern.lastIndex=0,t.pattern.test(r)||o.push(rr(s.messages.pattern.mismatch,t.fullField,r,t.pattern));else if(typeof t.pattern=="string"){var c=new RegExp(t.pattern);c.test(r)||o.push(rr(s.messages.pattern.mismatch,t.fullField,r,t.pattern))}}},B7=function(t,r,a,o,s){var c=typeof t.len=="number",f=typeof t.min=="number",h=typeof t.max=="number",d=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,g=r,v=null,y=typeof r=="number",S=typeof r=="string",w=Array.isArray(r);if(y?v="number":S?v="string":w&&(v="array"),!v)return!1;w&&(g=r.length),S&&(g=r.replace(d,"_").length),c?g!==t.len&&o.push(rr(s.messages[v].len,t.fullField,t.len)):f&&!h&&g<t.min?o.push(rr(s.messages[v].min,t.fullField,t.min)):h&&!f&&g>t.max?o.push(rr(s.messages[v].max,t.fullField,t.max)):f&&h&&(g<t.min||g>t.max)&&o.push(rr(s.messages[v].range,t.fullField,t.min,t.max))},qC=function(t,r,a,o,s,c){t.required&&(!a.hasOwnProperty(t.field)||sn(r,c||t.type))&&o.push(rr(s.messages.required,t.fullField))},Sc;const F7=function(){if(Sc)return Sc;var e="[a-fA-F\\d:]",t=function(N){return N&&N.includeBoundaries?"(?:(?<=\\s|^)(?=".concat(e,")|(?<=").concat(e,")(?=\\s|$))"):""},r="(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",a="[a-fA-F\\d]{1,4}",o=["(?:".concat(a,":){7}(?:").concat(a,"|:)"),"(?:".concat(a,":){6}(?:").concat(r,"|:").concat(a,"|:)"),"(?:".concat(a,":){5}(?::").concat(r,"|(?::").concat(a,"){1,2}|:)"),"(?:".concat(a,":){4}(?:(?::").concat(a,"){0,1}:").concat(r,"|(?::").concat(a,"){1,3}|:)"),"(?:".concat(a,":){3}(?:(?::").concat(a,"){0,2}:").concat(r,"|(?::").concat(a,"){1,4}|:)"),"(?:".concat(a,":){2}(?:(?::").concat(a,"){0,3}:").concat(r,"|(?::").concat(a,"){1,5}|:)"),"(?:".concat(a,":){1}(?:(?::").concat(a,"){0,4}:").concat(r,"|(?::").concat(a,"){1,6}|:)"),"(?::(?:(?::".concat(a,"){0,5}:").concat(r,"|(?::").concat(a,"){1,7}|:))")],s="(?:%[0-9a-zA-Z]{1,})?",c="(?:".concat(o.join("|"),")").concat(s),f=new RegExp("(?:^".concat(r,"$)|(?:^").concat(c,"$)")),h=new RegExp("^".concat(r,"$")),d=new RegExp("^".concat(c,"$")),g=function(N){return N&&N.exact?f:new RegExp("(?:".concat(t(N)).concat(r).concat(t(N),")|(?:").concat(t(N)).concat(c).concat(t(N),")"),"g")};g.v4=function(z){return z&&z.exact?h:new RegExp("".concat(t(z)).concat(r).concat(t(z)),"g")},g.v6=function(z){return z&&z.exact?d:new RegExp("".concat(t(z)).concat(c).concat(t(z)),"g")};var v="(?:(?:[a-z]+:)?//)",y="(?:\\S+(?::\\S*)?@)?",S=g.v4().source,w=g.v6().source,A="(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)",x="(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*",T="(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))",R="(?::\\d{2,5})?",O='(?:[/?#][^\\s"]*)?',j="(?:".concat(v,"|www\\.)").concat(y,"(?:localhost|").concat(S,"|").concat(w,"|").concat(A).concat(x).concat(T,")").concat(R).concat(O);return Sc=new RegExp("(?:^".concat(j,"$)"),"i"),Sc};var wb={email:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,hex:/^#?([a-f0-9]{6}|[a-f0-9]{3})$/i},Ts={integer:function(t){return Ts.number(t)&&parseInt(t,10)===t},float:function(t){return Ts.number(t)&&!Ts.integer(t)},array:function(t){return Array.isArray(t)},regexp:function(t){if(t instanceof RegExp)return!0;try{return!!new RegExp(t)}catch{return!1}},date:function(t){return typeof t.getTime=="function"&&typeof t.getMonth=="function"&&typeof t.getYear=="function"&&!isNaN(t.getTime())},number:function(t){return isNaN(t)?!1:typeof t=="number"},object:function(t){return je(t)==="object"&&!Ts.array(t)},method:function(t){return typeof t=="function"},email:function(t){return typeof t=="string"&&t.length<=320&&!!t.match(wb.email)},url:function(t){return typeof t=="string"&&t.length<=2048&&!!t.match(F7())},hex:function(t){return typeof t=="string"&&!!t.match(wb.hex)}},I7=function(t,r,a,o,s){if(t.required&&r===void 0){qC(t,r,a,o,s);return}var c=["integer","float","array","regexp","object","method","email","number","date","url","hex"],f=t.type;c.indexOf(f)>-1?Ts[f](r)||o.push(rr(s.messages.types[f],t.fullField,t.type)):f&&je(r)!==t.type&&o.push(rr(s.messages.types[f],t.fullField,t.type))},V7=function(t,r,a,o,s){(/^\s+$/.test(r)||r==="")&&o.push(rr(s.messages.whitespace,t.fullField))};const lt={required:qC,whitespace:V7,type:I7,range:B7,enum:j7,pattern:H7};var U7=function(t,r,a,o,s){var c=[],f=t.required||!t.required&&o.hasOwnProperty(t.field);if(f){if(sn(r)&&!t.required)return a();lt.required(t,r,o,c,s)}a(c)},G7=function(t,r,a,o,s){var c=[],f=t.required||!t.required&&o.hasOwnProperty(t.field);if(f){if(r==null&&!t.required)return a();lt.required(t,r,o,c,s,"array"),r!=null&&(lt.type(t,r,o,c,s),lt.range(t,r,o,c,s))}a(c)},q7=function(t,r,a,o,s){var c=[],f=t.required||!t.required&&o.hasOwnProperty(t.field);if(f){if(sn(r)&&!t.required)return a();lt.required(t,r,o,c,s),r!==void 0&&lt.type(t,r,o,c,s)}a(c)},W7=function(t,r,a,o,s){var c=[],f=t.required||!t.required&&o.hasOwnProperty(t.field);if(f){if(sn(r,"date")&&!t.required)return a();if(lt.required(t,r,o,c,s),!sn(r,"date")){var h;r instanceof Date?h=r:h=new Date(r),lt.type(t,h,o,c,s),h&&lt.range(t,h.getTime(),o,c,s)}}a(c)},J7="enum",Y7=function(t,r,a,o,s){var c=[],f=t.required||!t.required&&o.hasOwnProperty(t.field);if(f){if(sn(r)&&!t.required)return a();lt.required(t,r,o,c,s),r!==void 0&&lt[J7](t,r,o,c,s)}a(c)},X7=function(t,r,a,o,s){var c=[],f=t.required||!t.required&&o.hasOwnProperty(t.field);if(f){if(sn(r)&&!t.required)return a();lt.required(t,r,o,c,s),r!==void 0&&(lt.type(t,r,o,c,s),lt.range(t,r,o,c,s))}a(c)},K7=function(t,r,a,o,s){var c=[],f=t.required||!t.required&&o.hasOwnProperty(t.field);if(f){if(sn(r)&&!t.required)return a();lt.required(t,r,o,c,s),r!==void 0&&(lt.type(t,r,o,c,s),lt.range(t,r,o,c,s))}a(c)},Q7=function(t,r,a,o,s){var c=[],f=t.required||!t.required&&o.hasOwnProperty(t.field);if(f){if(sn(r)&&!t.required)return a();lt.required(t,r,o,c,s),r!==void 0&&lt.type(t,r,o,c,s)}a(c)},Z7=function(t,r,a,o,s){var c=[],f=t.required||!t.required&&o.hasOwnProperty(t.field);if(f){if(r===""&&(r=void 0),sn(r)&&!t.required)return a();lt.required(t,r,o,c,s),r!==void 0&&(lt.type(t,r,o,c,s),lt.range(t,r,o,c,s))}a(c)},eR=function(t,r,a,o,s){var c=[],f=t.required||!t.required&&o.hasOwnProperty(t.field);if(f){if(sn(r)&&!t.required)return a();lt.required(t,r,o,c,s),r!==void 0&&lt.type(t,r,o,c,s)}a(c)},tR=function(t,r,a,o,s){var c=[],f=t.required||!t.required&&o.hasOwnProperty(t.field);if(f){if(sn(r,"string")&&!t.required)return a();lt.required(t,r,o,c,s),sn(r,"string")||lt.pattern(t,r,o,c,s)}a(c)},nR=function(t,r,a,o,s){var c=[],f=t.required||!t.required&&o.hasOwnProperty(t.field);if(f){if(sn(r)&&!t.required)return a();lt.required(t,r,o,c,s),sn(r)||lt.type(t,r,o,c,s)}a(c)},rR=function(t,r,a,o,s){var c=[],f=Array.isArray(r)?"array":je(r);lt.required(t,r,o,c,s,f),a(c)},aR=function(t,r,a,o,s){var c=[],f=t.required||!t.required&&o.hasOwnProperty(t.field);if(f){if(sn(r,"string")&&!t.required)return a();lt.required(t,r,o,c,s,"string"),sn(r,"string")||(lt.type(t,r,o,c,s),lt.range(t,r,o,c,s),lt.pattern(t,r,o,c,s),t.whitespace===!0&&lt.whitespace(t,r,o,c,s))}a(c)},Zh=function(t,r,a,o,s){var c=t.type,f=[],h=t.required||!t.required&&o.hasOwnProperty(t.field);if(h){if(sn(r,c)&&!t.required)return a();lt.required(t,r,o,f,s,c),sn(r,c)||lt.type(t,r,o,f,s)}a(f)};const Ns={string:aR,method:Q7,number:Z7,boolean:q7,regexp:nR,integer:K7,float:X7,array:G7,object:eR,enum:Y7,pattern:tR,date:W7,url:Zh,hex:Zh,email:Zh,required:rR,any:U7};var ou=function(){function e(t){gn(this,e),ee(this,"rules",null),ee(this,"_messages",bg),this.define(t)}return pn(e,[{key:"define",value:function(r){var a=this;if(!r)throw new Error("Cannot configure a schema with no rules");if(je(r)!=="object"||Array.isArray(r))throw new Error("Rules must be an object");this.rules={},Object.keys(r).forEach(function(o){var s=r[o];a.rules[o]=Array.isArray(s)?s:[s]})}},{key:"messages",value:function(r){return r&&(this._messages=Cb(yg(),r)),this._messages}},{key:"validate",value:function(r){var a=this,o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:function(){},c=r,f=o,h=s;if(typeof f=="function"&&(h=f,f={}),!this.rules||Object.keys(this.rules).length===0)return h&&h(null,c),Promise.resolve(c);function d(w){var A=[],x={};function T(O){if(Array.isArray(O)){var j;A=(j=A).concat.apply(j,ze(O))}else A.push(O)}for(var R=0;R<w.length;R++)T(w[R]);A.length?(x=Cg(A),h(A,x)):h(null,c)}if(f.messages){var g=this.messages();g===bg&&(g=yg()),Cb(g,f.messages),f.messages=g}else f.messages=this.messages();var v={},y=f.keys||Object.keys(this.rules);y.forEach(function(w){var A=a.rules[w],x=c[w];A.forEach(function(T){var R=T;typeof R.transform=="function"&&(c===r&&(c=ie({},c)),x=c[w]=R.transform(x),x!=null&&(R.type=R.type||(Array.isArray(x)?"array":je(x)))),typeof R=="function"?R={validator:R}:R=ie({},R),R.validator=a.getValidationMethod(R),R.validator&&(R.field=w,R.fullField=R.fullField||w,R.type=a.getType(R),v[w]=v[w]||[],v[w].push({rule:R,value:x,source:c,field:w}))})});var S={};return $7(v,f,function(w,A){var x=w.rule,T=(x.type==="object"||x.type==="array")&&(je(x.fields)==="object"||je(x.defaultField)==="object");T=T&&(x.required||!x.required&&w.value),x.field=w.field;function R(_,J){return ie(ie({},J),{},{fullField:"".concat(x.fullField,".").concat(_),fullFields:x.fullFields?[].concat(ze(x.fullFields),[_]):[_]})}function O(){var _=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],J=Array.isArray(_)?_:[_];!f.suppressWarning&&J.length&&e.warning("async-validator:",J),J.length&&x.message!==void 0&&(J=[].concat(x.message));var $=J.map(Sb(x,c));if(f.first&&$.length)return S[x.field]=1,A($);if(!T)A($);else{if(x.required&&!w.value)return x.message!==void 0?$=[].concat(x.message).map(Sb(x,c)):f.error&&($=[f.error(x,rr(f.messages.required,x.field))]),A($);var B={};x.defaultField&&Object.keys(w.value).map(function(K){B[K]=x.defaultField}),B=ie(ie({},B),w.rule.fields);var U={};Object.keys(B).forEach(function(K){var Y=B[K],G=Array.isArray(Y)?Y:[Y];U[K]=G.map(R.bind(null,K))});var W=new e(U);W.messages(f.messages),w.rule.options&&(w.rule.options.messages=f.messages,w.rule.options.error=f.error),W.validate(w.value,w.rule.options||f,function(K){var Y=[];$&&$.length&&Y.push.apply(Y,ze($)),K&&K.length&&Y.push.apply(Y,ze(K)),A(Y.length?Y:null)})}}var j;if(x.asyncValidator)j=x.asyncValidator(x,w.value,O,w.source,f);else if(x.validator){try{j=x.validator(x,w.value,O,w.source,f)}catch(_){var z,N;(z=(N=console).error)===null||z===void 0||z.call(N,_),f.suppressValidatorError||setTimeout(function(){throw _},0),O(_.message)}j===!0?O():j===!1?O(typeof x.message=="function"?x.message(x.fullField||x.field):x.message||"".concat(x.fullField||x.field," fails")):j instanceof Array?O(j):j instanceof Error&&O(j.message)}j&&j.then&&j.then(function(){return O()},function(_){return O(_)})},function(w){d(w)},c)}},{key:"getType",value:function(r){if(r.type===void 0&&r.pattern instanceof RegExp&&(r.type="pattern"),typeof r.validator!="function"&&r.type&&!Ns.hasOwnProperty(r.type))throw new Error(rr("Unknown rule type %s",r.type));return r.type||"string"}},{key:"getValidationMethod",value:function(r){if(typeof r.validator=="function")return r.validator;var a=Object.keys(r),o=a.indexOf("message");return o!==-1&&a.splice(o,1),a.length===1&&a[0]==="required"?Ns.required:Ns[this.getType(r)]||void 0}}]),e}();ee(ou,"register",function(t,r){if(typeof r!="function")throw new Error("Cannot register a validator by type, validator is not a function");Ns[t]=r});ee(ou,"warning",D7);ee(ou,"messages",bg);ee(ou,"validators",Ns);var er="'${name}' is not a valid ${type}",WC={default:"Validation error on field '${name}'",required:"'${name}' is required",enum:"'${name}' must be one of [${enum}]",whitespace:"'${name}' cannot be empty",date:{format:"'${name}' is invalid for format date",parse:"'${name}' could not be parsed as date",invalid:"'${name}' is invalid date"},types:{string:er,method:er,array:er,object:er,number:er,date:er,boolean:er,integer:er,float:er,regexp:er,email:er,url:er,hex:er},string:{len:"'${name}' must be exactly ${len} characters",min:"'${name}' must be at least ${min} characters",max:"'${name}' cannot be longer than ${max} characters",range:"'${name}' must be between ${min} and ${max} characters"},number:{len:"'${name}' must equal ${len}",min:"'${name}' cannot be less than ${min}",max:"'${name}' cannot be greater than ${max}",range:"'${name}' must be between ${min} and ${max}"},array:{len:"'${name}' must be exactly ${len} in length",min:"'${name}' cannot be less than ${min} in length",max:"'${name}' cannot be greater than ${max} in length",range:"'${name}' must be between ${min} and ${max} in length"},pattern:{mismatch:"'${name}' does not match pattern ${pattern}"}},xb=ou;function iR(e,t){return e.replace(/\\?\$\{\w+\}/g,function(r){if(r.startsWith("\\"))return r.slice(1);var a=r.slice(2,-1);return t[a]})}var Eb="CODE_LOGIC_ERROR";function wg(e,t,r,a,o){return xg.apply(this,arguments)}function xg(){return xg=so(_n().mark(function e(t,r,a,o,s){var c,f,h,d,g,v,y,S,w;return _n().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return c=ie({},a),delete c.ruleIndex,xb.warning=function(){},c.validator&&(f=c.validator,c.validator=function(){try{return f.apply(void 0,arguments)}catch(T){return console.error(T),Promise.reject(Eb)}}),h=null,c&&c.type==="array"&&c.defaultField&&(h=c.defaultField,delete c.defaultField),d=new xb(ee({},t,[c])),g=tl(WC,o.validateMessages),d.messages(g),v=[],x.prev=10,x.next=13,Promise.resolve(d.validate(ee({},t,r),ie({},o)));case 13:x.next=18;break;case 15:x.prev=15,x.t0=x.catch(10),x.t0.errors&&(v=x.t0.errors.map(function(T,R){var O=T.message,j=O===Eb?g.default:O;return b.isValidElement(j)?b.cloneElement(j,{key:"error_".concat(R)}):j}));case 18:if(!(!v.length&&h)){x.next=23;break}return x.next=21,Promise.all(r.map(function(T,R){return wg("".concat(t,".").concat(R),T,h,o,s)}));case 21:return y=x.sent,x.abrupt("return",y.reduce(function(T,R){return[].concat(ze(T),ze(R))},[]));case 23:return S=ie(ie({},a),{},{name:t,enum:(a.enum||[]).join(", ")},s),w=v.map(function(T){return typeof T=="string"?iR(T,S):T}),x.abrupt("return",w);case 26:case"end":return x.stop()}},e,null,[[10,15]])})),xg.apply(this,arguments)}function oR(e,t,r,a,o,s){var c=e.join("."),f=r.map(function(g,v){var y=g.validator,S=ie(ie({},g),{},{ruleIndex:v});return y&&(S.validator=function(w,A,x){var T=!1,R=function(){for(var z=arguments.length,N=new Array(z),_=0;_<z;_++)N[_]=arguments[_];Promise.resolve().then(function(){ir(!T,"Your validator function has already return a promise. `callback` will be ignored."),T||x.apply(void 0,N)})},O=y(w,A,R);T=O&&typeof O.then=="function"&&typeof O.catch=="function",ir(T,"`callback` is deprecated. Please return a promise instead."),T&&O.then(function(){x()}).catch(function(j){x(j||" ")})}),S}).sort(function(g,v){var y=g.warningOnly,S=g.ruleIndex,w=v.warningOnly,A=v.ruleIndex;return!!y==!!w?S-A:y?1:-1}),h;if(o===!0)h=new Promise(function(){var g=so(_n().mark(function v(y,S){var w,A,x;return _n().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:w=0;case 1:if(!(w<f.length)){R.next=12;break}return A=f[w],R.next=5,wg(c,t,A,a,s);case 5:if(x=R.sent,!x.length){R.next=9;break}return S([{errors:x,rule:A}]),R.abrupt("return");case 9:w+=1,R.next=1;break;case 12:y([]);case 13:case"end":return R.stop()}},v)}));return function(v,y){return g.apply(this,arguments)}}());else{var d=f.map(function(g){return wg(c,t,g,a,s).then(function(v){return{errors:v,rule:g}})});h=(o?sR(d):lR(d)).then(function(g){return Promise.reject(g)})}return h.catch(function(g){return g}),h}function lR(e){return Eg.apply(this,arguments)}function Eg(){return Eg=so(_n().mark(function e(t){return _n().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",Promise.all(t).then(function(o){var s,c=(s=[]).concat.apply(s,ze(o));return c}));case 1:case"end":return a.stop()}},e)})),Eg.apply(this,arguments)}function sR(e){return Ag.apply(this,arguments)}function Ag(){return Ag=so(_n().mark(function e(t){var r;return _n().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return r=0,o.abrupt("return",new Promise(function(s){t.forEach(function(c){c.then(function(f){f.errors.length&&s([f]),r+=1,r===t.length&&s([])})})}));case 2:case"end":return o.stop()}},e)})),Ag.apply(this,arguments)}function Xt(e){return vg(e)}function Ab(e,t){var r={};return t.forEach(function(a){var o=fa(e,a);r=Ir(r,a,o)}),r}function il(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;return e&&e.some(function(a){return JC(t,a,r)})}function JC(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;return!e||!t||!r&&e.length!==t.length?!1:t.every(function(a,o){return e[o]===a})}function uR(e,t){if(e===t)return!0;if(!e&&t||e&&!t||!e||!t||je(e)!=="object"||je(t)!=="object")return!1;var r=Object.keys(e),a=Object.keys(t),o=new Set([].concat(r,a));return ze(o).every(function(s){var c=e[s],f=t[s];return typeof c=="function"&&typeof f=="function"?!0:c===f})}function cR(e){var t=arguments.length<=1?void 0:arguments[1];return t&&t.target&&je(t.target)==="object"&&e in t.target?t.target[e]:t}function Tb(e,t,r){var a=e.length;if(t<0||t>=a||r<0||r>=a)return e;var o=e[t],s=t-r;return s>0?[].concat(ze(e.slice(0,r)),[o],ze(e.slice(r,t)),ze(e.slice(t+1,a))):s<0?[].concat(ze(e.slice(0,t)),ze(e.slice(t+1,r+1)),[o],ze(e.slice(r+1,a))):e}var fR=["name"],Tr=[];function em(e,t,r,a,o,s){return typeof e=="function"?e(t,r,"source"in s?{source:s.source}:{}):a!==o}var dp=function(e){yi(r,e);var t=bi(r);function r(a){var o;if(gn(this,r),o=t.call(this,a),ee(tt(o),"state",{resetCount:0}),ee(tt(o),"cancelRegisterFunc",null),ee(tt(o),"mounted",!1),ee(tt(o),"touched",!1),ee(tt(o),"dirty",!1),ee(tt(o),"validatePromise",void 0),ee(tt(o),"prevValidating",void 0),ee(tt(o),"errors",Tr),ee(tt(o),"warnings",Tr),ee(tt(o),"cancelRegister",function(){var h=o.props,d=h.preserve,g=h.isListField,v=h.name;o.cancelRegisterFunc&&o.cancelRegisterFunc(g,d,Xt(v)),o.cancelRegisterFunc=null}),ee(tt(o),"getNamePath",function(){var h=o.props,d=h.name,g=h.fieldContext,v=g.prefixName,y=v===void 0?[]:v;return d!==void 0?[].concat(ze(y),ze(d)):[]}),ee(tt(o),"getRules",function(){var h=o.props,d=h.rules,g=d===void 0?[]:d,v=h.fieldContext;return g.map(function(y){return typeof y=="function"?y(v):y})}),ee(tt(o),"refresh",function(){o.mounted&&o.setState(function(h){var d=h.resetCount;return{resetCount:d+1}})}),ee(tt(o),"metaCache",null),ee(tt(o),"triggerMetaEvent",function(h){var d=o.props.onMetaChange;if(d){var g=ie(ie({},o.getMeta()),{},{destroy:h});Fm(o.metaCache,g)||d(g),o.metaCache=g}else o.metaCache=null}),ee(tt(o),"onStoreChange",function(h,d,g){var v=o.props,y=v.shouldUpdate,S=v.dependencies,w=S===void 0?[]:S,A=v.onReset,x=g.store,T=o.getNamePath(),R=o.getValue(h),O=o.getValue(x),j=d&&il(d,T);switch(g.type==="valueUpdate"&&g.source==="external"&&!Fm(R,O)&&(o.touched=!0,o.dirty=!0,o.validatePromise=null,o.errors=Tr,o.warnings=Tr,o.triggerMetaEvent()),g.type){case"reset":if(!d||j){o.touched=!1,o.dirty=!1,o.validatePromise=void 0,o.errors=Tr,o.warnings=Tr,o.triggerMetaEvent(),A==null||A(),o.refresh();return}break;case"remove":{if(y&&em(y,h,x,R,O,g)){o.reRender();return}break}case"setField":{var z=g.data;if(j){"touched"in z&&(o.touched=z.touched),"validating"in z&&!("originRCField"in z)&&(o.validatePromise=z.validating?Promise.resolve([]):null),"errors"in z&&(o.errors=z.errors||Tr),"warnings"in z&&(o.warnings=z.warnings||Tr),o.dirty=!0,o.triggerMetaEvent(),o.reRender();return}else if("value"in z&&il(d,T,!0)){o.reRender();return}if(y&&!T.length&&em(y,h,x,R,O,g)){o.reRender();return}break}case"dependenciesUpdate":{var N=w.map(Xt);if(N.some(function(_){return il(g.relatedFields,_)})){o.reRender();return}break}default:if(j||(!w.length||T.length||y)&&em(y,h,x,R,O,g)){o.reRender();return}break}y===!0&&o.reRender()}),ee(tt(o),"validateRules",function(h){var d=o.getNamePath(),g=o.getValue(),v=h||{},y=v.triggerName,S=v.validateOnly,w=S===void 0?!1:S,A=Promise.resolve().then(so(_n().mark(function x(){var T,R,O,j,z,N,_;return _n().wrap(function($){for(;;)switch($.prev=$.next){case 0:if(o.mounted){$.next=2;break}return $.abrupt("return",[]);case 2:if(T=o.props,R=T.validateFirst,O=R===void 0?!1:R,j=T.messageVariables,z=T.validateDebounce,N=o.getRules(),y&&(N=N.filter(function(B){return B}).filter(function(B){var U=B.validateTrigger;if(!U)return!0;var W=vg(U);return W.includes(y)})),!(z&&y)){$.next=10;break}return $.next=8,new Promise(function(B){setTimeout(B,z)});case 8:if(o.validatePromise===A){$.next=10;break}return $.abrupt("return",[]);case 10:return _=oR(d,g,N,h,O,j),_.catch(function(B){return B}).then(function(){var B=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Tr;if(o.validatePromise===A){var U;o.validatePromise=null;var W=[],K=[];(U=B.forEach)===null||U===void 0||U.call(B,function(Y){var G=Y.rule.warningOnly,P=Y.errors,k=P===void 0?Tr:P;G?K.push.apply(K,ze(k)):W.push.apply(W,ze(k))}),o.errors=W,o.warnings=K,o.triggerMetaEvent(),o.reRender()}}),$.abrupt("return",_);case 13:case"end":return $.stop()}},x)})));return w||(o.validatePromise=A,o.dirty=!0,o.errors=Tr,o.warnings=Tr,o.triggerMetaEvent(),o.reRender()),A}),ee(tt(o),"isFieldValidating",function(){return!!o.validatePromise}),ee(tt(o),"isFieldTouched",function(){return o.touched}),ee(tt(o),"isFieldDirty",function(){if(o.dirty||o.props.initialValue!==void 0)return!0;var h=o.props.fieldContext,d=h.getInternalHooks(Zi),g=d.getInitialValue;return g(o.getNamePath())!==void 0}),ee(tt(o),"getErrors",function(){return o.errors}),ee(tt(o),"getWarnings",function(){return o.warnings}),ee(tt(o),"isListField",function(){return o.props.isListField}),ee(tt(o),"isList",function(){return o.props.isList}),ee(tt(o),"isPreserve",function(){return o.props.preserve}),ee(tt(o),"getMeta",function(){o.prevValidating=o.isFieldValidating();var h={touched:o.isFieldTouched(),validating:o.prevValidating,errors:o.errors,warnings:o.warnings,name:o.getNamePath(),validated:o.validatePromise===null};return h}),ee(tt(o),"getOnlyChild",function(h){if(typeof h=="function"){var d=o.getMeta();return ie(ie({},o.getOnlyChild(h(o.getControlled(),d,o.props.fieldContext))),{},{isFunction:!0})}var g=$s(h);return g.length!==1||!b.isValidElement(g[0])?{child:g,isFunction:!1}:{child:g[0],isFunction:!1}}),ee(tt(o),"getValue",function(h){var d=o.props.fieldContext.getFieldsValue,g=o.getNamePath();return fa(h||d(!0),g)}),ee(tt(o),"getControlled",function(){var h=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},d=o.props,g=d.name,v=d.trigger,y=d.validateTrigger,S=d.getValueFromEvent,w=d.normalize,A=d.valuePropName,x=d.getValueProps,T=d.fieldContext,R=y!==void 0?y:T.validateTrigger,O=o.getNamePath(),j=T.getInternalHooks,z=T.getFieldsValue,N=j(Zi),_=N.dispatch,J=o.getValue(),$=x||function(Y){return ee({},A,Y)},B=h[v],U=g!==void 0?$(J):{},W=ie(ie({},h),U);W[v]=function(){o.touched=!0,o.dirty=!0,o.triggerMetaEvent();for(var Y,G=arguments.length,P=new Array(G),k=0;k<G;k++)P[k]=arguments[k];S?Y=S.apply(void 0,P):Y=cR.apply(void 0,[A].concat(P)),w&&(Y=w(Y,J,z(!0))),Y!==J&&_({type:"updateValue",namePath:O,value:Y}),B&&B.apply(void 0,P)};var K=vg(R||[]);return K.forEach(function(Y){var G=W[Y];W[Y]=function(){G&&G.apply(void 0,arguments);var P=o.props.rules;P&&P.length&&_({type:"validateField",namePath:O,triggerName:Y})}}),W}),a.fieldContext){var s=a.fieldContext.getInternalHooks,c=s(Zi),f=c.initEntityValue;f(tt(o))}return o}return pn(r,[{key:"componentDidMount",value:function(){var o=this.props,s=o.shouldUpdate,c=o.fieldContext;if(this.mounted=!0,c){var f=c.getInternalHooks,h=f(Zi),d=h.registerField;this.cancelRegisterFunc=d(this)}s===!0&&this.reRender()}},{key:"componentWillUnmount",value:function(){this.cancelRegister(),this.triggerMetaEvent(!0),this.mounted=!1}},{key:"reRender",value:function(){this.mounted&&this.forceUpdate()}},{key:"render",value:function(){var o=this.state.resetCount,s=this.props.children,c=this.getOnlyChild(s),f=c.child,h=c.isFunction,d;return h?d=f:b.isValidElement(f)?d=b.cloneElement(f,this.getControlled(f.props)):(ir(!f,"`children` of Field is not validate ReactElement."),d=f),b.createElement(b.Fragment,{key:o},d)}}]),r}(b.Component);ee(dp,"contextType",hl);ee(dp,"defaultProps",{trigger:"onChange",valuePropName:"value"});function YC(e){var t,r=e.name,a=Tn(e,fR),o=b.useContext(hl),s=b.useContext(Jc),c=r!==void 0?Xt(r):void 0,f=(t=a.isListField)!==null&&t!==void 0?t:!!s,h="keep";return f||(h="_".concat((c||[]).join("_"))),b.createElement(dp,kt({key:h,name:c,isListField:f},a,{fieldContext:o}))}function dR(e){var t=e.name,r=e.initialValue,a=e.children,o=e.rules,s=e.validateTrigger,c=e.isListField,f=b.useContext(hl),h=b.useContext(Jc),d=b.useRef({keys:[],id:0}),g=d.current,v=b.useMemo(function(){var A=Xt(f.prefixName)||[];return[].concat(ze(A),ze(Xt(t)))},[f.prefixName,t]),y=b.useMemo(function(){return ie(ie({},f),{},{prefixName:v})},[f,v]),S=b.useMemo(function(){return{getKey:function(x){var T=v.length,R=x[T];return[g.keys[R],x.slice(T+1)]}}},[v]);if(typeof a!="function")return ir(!1,"Form.List only accepts function as children."),null;var w=function(x,T,R){var O=R.source;return O==="internal"?!1:x!==T};return b.createElement(Jc.Provider,{value:S},b.createElement(hl.Provider,{value:y},b.createElement(YC,{name:[],shouldUpdate:w,rules:o,validateTrigger:s,initialValue:r,isList:!0,isListField:c??!!h},function(A,x){var T=A.value,R=T===void 0?[]:T,O=A.onChange,j=f.getFieldValue,z=function(){var $=j(v||[]);return $||[]},N={add:function($,B){var U=z();B>=0&&B<=U.length?(g.keys=[].concat(ze(g.keys.slice(0,B)),[g.id],ze(g.keys.slice(B))),O([].concat(ze(U.slice(0,B)),[$],ze(U.slice(B))))):(g.keys=[].concat(ze(g.keys),[g.id]),O([].concat(ze(U),[$]))),g.id+=1},remove:function($){var B=z(),U=new Set(Array.isArray($)?$:[$]);U.size<=0||(g.keys=g.keys.filter(function(W,K){return!U.has(K)}),O(B.filter(function(W,K){return!U.has(K)})))},move:function($,B){if($!==B){var U=z();$<0||$>=U.length||B<0||B>=U.length||(g.keys=Tb(g.keys,$,B),O(Tb(U,$,B)))}}},_=R||[];return Array.isArray(_)||(_=[]),a(_.map(function(J,$){var B=g.keys[$];return B===void 0&&(g.keys[$]=g.id,B=g.keys[$],g.id+=1),{name:$,key:B,isListField:!0}}),N,x)})))}function hR(e){var t=!1,r=e.length,a=[];return e.length?new Promise(function(o,s){e.forEach(function(c,f){c.catch(function(h){return t=!0,h}).then(function(h){r-=1,a[f]=h,!(r>0)&&(t&&s(a),o(a))})})}):Promise.resolve([])}var XC="__@field_split__";function tm(e){return e.map(function(t){return"".concat(je(t),":").concat(t)}).join(XC)}var Yo=function(){function e(){gn(this,e),ee(this,"kvs",new Map)}return pn(e,[{key:"set",value:function(r,a){this.kvs.set(tm(r),a)}},{key:"get",value:function(r){return this.kvs.get(tm(r))}},{key:"update",value:function(r,a){var o=this.get(r),s=a(o);s?this.set(r,s):this.delete(r)}},{key:"delete",value:function(r){this.kvs.delete(tm(r))}},{key:"map",value:function(r){return ze(this.kvs.entries()).map(function(a){var o=ye(a,2),s=o[0],c=o[1],f=s.split(XC);return r({key:f.map(function(h){var d=h.match(/^([^:]*):(.*)$/),g=ye(d,3),v=g[1],y=g[2];return v==="number"?Number(y):y}),value:c})})}},{key:"toJSON",value:function(){var r={};return this.map(function(a){var o=a.key,s=a.value;return r[o.join(".")]=s,null}),r}}]),e}(),mR=["name"],gR=pn(function e(t){var r=this;gn(this,e),ee(this,"formHooked",!1),ee(this,"forceRootUpdate",void 0),ee(this,"subscribable",!0),ee(this,"store",{}),ee(this,"fieldEntities",[]),ee(this,"initialValues",{}),ee(this,"callbacks",{}),ee(this,"validateMessages",null),ee(this,"preserve",null),ee(this,"lastValidatePromise",null),ee(this,"getForm",function(){return{getFieldValue:r.getFieldValue,getFieldsValue:r.getFieldsValue,getFieldError:r.getFieldError,getFieldWarning:r.getFieldWarning,getFieldsError:r.getFieldsError,isFieldsTouched:r.isFieldsTouched,isFieldTouched:r.isFieldTouched,isFieldValidating:r.isFieldValidating,isFieldsValidating:r.isFieldsValidating,resetFields:r.resetFields,setFields:r.setFields,setFieldValue:r.setFieldValue,setFieldsValue:r.setFieldsValue,validateFields:r.validateFields,submit:r.submit,_init:!0,getInternalHooks:r.getInternalHooks}}),ee(this,"getInternalHooks",function(a){return a===Zi?(r.formHooked=!0,{dispatch:r.dispatch,initEntityValue:r.initEntityValue,registerField:r.registerField,useSubscribe:r.useSubscribe,setInitialValues:r.setInitialValues,destroyForm:r.destroyForm,setCallbacks:r.setCallbacks,setValidateMessages:r.setValidateMessages,getFields:r.getFields,setPreserve:r.setPreserve,getInitialValue:r.getInitialValue,registerWatch:r.registerWatch}):(ir(!1,"`getInternalHooks` is internal usage. Should not call directly."),null)}),ee(this,"useSubscribe",function(a){r.subscribable=a}),ee(this,"prevWithoutPreserves",null),ee(this,"setInitialValues",function(a,o){if(r.initialValues=a||{},o){var s,c=tl(a,r.store);(s=r.prevWithoutPreserves)===null||s===void 0||s.map(function(f){var h=f.key;c=Ir(c,h,fa(a,h))}),r.prevWithoutPreserves=null,r.updateStore(c)}}),ee(this,"destroyForm",function(a){if(a)r.updateStore({});else{var o=new Yo;r.getFieldEntities(!0).forEach(function(s){r.isMergedPreserve(s.isPreserve())||o.set(s.getNamePath(),!0)}),r.prevWithoutPreserves=o}}),ee(this,"getInitialValue",function(a){var o=fa(r.initialValues,a);return a.length?tl(o):o}),ee(this,"setCallbacks",function(a){r.callbacks=a}),ee(this,"setValidateMessages",function(a){r.validateMessages=a}),ee(this,"setPreserve",function(a){r.preserve=a}),ee(this,"watchList",[]),ee(this,"registerWatch",function(a){return r.watchList.push(a),function(){r.watchList=r.watchList.filter(function(o){return o!==a})}}),ee(this,"notifyWatch",function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];if(r.watchList.length){var o=r.getFieldsValue(),s=r.getFieldsValue(!0);r.watchList.forEach(function(c){c(o,s,a)})}}),ee(this,"timeoutId",null),ee(this,"warningUnhooked",function(){}),ee(this,"updateStore",function(a){r.store=a}),ee(this,"getFieldEntities",function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;return a?r.fieldEntities.filter(function(o){return o.getNamePath().length}):r.fieldEntities}),ee(this,"getFieldsMap",function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,o=new Yo;return r.getFieldEntities(a).forEach(function(s){var c=s.getNamePath();o.set(c,s)}),o}),ee(this,"getFieldEntitiesForNamePathList",function(a){if(!a)return r.getFieldEntities(!0);var o=r.getFieldsMap(!0);return a.map(function(s){var c=Xt(s);return o.get(c)||{INVALIDATE_NAME_PATH:Xt(s)}})}),ee(this,"getFieldsValue",function(a,o){r.warningUnhooked();var s,c,f;if(a===!0||Array.isArray(a)?(s=a,c=o):a&&je(a)==="object"&&(f=a.strict,c=a.filter),s===!0&&!c)return r.store;var h=r.getFieldEntitiesForNamePathList(Array.isArray(s)?s:null),d=[];return h.forEach(function(g){var v,y,S="INVALIDATE_NAME_PATH"in g?g.INVALIDATE_NAME_PATH:g.getNamePath();if(f){var w,A;if((w=(A=g).isList)!==null&&w!==void 0&&w.call(A))return}else if(!s&&(v=(y=g).isListField)!==null&&v!==void 0&&v.call(y))return;if(!c)d.push(S);else{var x="getMeta"in g?g.getMeta():null;c(x)&&d.push(S)}}),Ab(r.store,d.map(Xt))}),ee(this,"getFieldValue",function(a){r.warningUnhooked();var o=Xt(a);return fa(r.store,o)}),ee(this,"getFieldsError",function(a){r.warningUnhooked();var o=r.getFieldEntitiesForNamePathList(a);return o.map(function(s,c){return s&&!("INVALIDATE_NAME_PATH"in s)?{name:s.getNamePath(),errors:s.getErrors(),warnings:s.getWarnings()}:{name:Xt(a[c]),errors:[],warnings:[]}})}),ee(this,"getFieldError",function(a){r.warningUnhooked();var o=Xt(a),s=r.getFieldsError([o])[0];return s.errors}),ee(this,"getFieldWarning",function(a){r.warningUnhooked();var o=Xt(a),s=r.getFieldsError([o])[0];return s.warnings}),ee(this,"isFieldsTouched",function(){r.warningUnhooked();for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];var c=o[0],f=o[1],h,d=!1;o.length===0?h=null:o.length===1?Array.isArray(c)?(h=c.map(Xt),d=!1):(h=null,d=c):(h=c.map(Xt),d=f);var g=r.getFieldEntities(!0),v=function(x){return x.isFieldTouched()};if(!h)return d?g.every(function(A){return v(A)||A.isList()}):g.some(v);var y=new Yo;h.forEach(function(A){y.set(A,[])}),g.forEach(function(A){var x=A.getNamePath();h.forEach(function(T){T.every(function(R,O){return x[O]===R})&&y.update(T,function(R){return[].concat(ze(R),[A])})})});var S=function(x){return x.some(v)},w=y.map(function(A){var x=A.value;return x});return d?w.every(S):w.some(S)}),ee(this,"isFieldTouched",function(a){return r.warningUnhooked(),r.isFieldsTouched([a])}),ee(this,"isFieldsValidating",function(a){r.warningUnhooked();var o=r.getFieldEntities();if(!a)return o.some(function(c){return c.isFieldValidating()});var s=a.map(Xt);return o.some(function(c){var f=c.getNamePath();return il(s,f)&&c.isFieldValidating()})}),ee(this,"isFieldValidating",function(a){return r.warningUnhooked(),r.isFieldsValidating([a])}),ee(this,"resetWithFieldInitialValue",function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=new Yo,s=r.getFieldEntities(!0);s.forEach(function(h){var d=h.props.initialValue,g=h.getNamePath();if(d!==void 0){var v=o.get(g)||new Set;v.add({entity:h,value:d}),o.set(g,v)}});var c=function(d){d.forEach(function(g){var v=g.props.initialValue;if(v!==void 0){var y=g.getNamePath(),S=r.getInitialValue(y);if(S!==void 0)ir(!1,"Form already set 'initialValues' with path '".concat(y.join("."),"'. Field can not overwrite it."));else{var w=o.get(y);if(w&&w.size>1)ir(!1,"Multiple Field with path '".concat(y.join("."),"' set 'initialValue'. Can not decide which one to pick."));else if(w){var A=r.getFieldValue(y),x=g.isListField();!x&&(!a.skipExist||A===void 0)&&r.updateStore(Ir(r.store,y,ze(w)[0].value))}}}})},f;a.entities?f=a.entities:a.namePathList?(f=[],a.namePathList.forEach(function(h){var d=o.get(h);if(d){var g;(g=f).push.apply(g,ze(ze(d).map(function(v){return v.entity})))}})):f=s,c(f)}),ee(this,"resetFields",function(a){r.warningUnhooked();var o=r.store;if(!a){r.updateStore(tl(r.initialValues)),r.resetWithFieldInitialValue(),r.notifyObservers(o,null,{type:"reset"}),r.notifyWatch();return}var s=a.map(Xt);s.forEach(function(c){var f=r.getInitialValue(c);r.updateStore(Ir(r.store,c,f))}),r.resetWithFieldInitialValue({namePathList:s}),r.notifyObservers(o,s,{type:"reset"}),r.notifyWatch(s)}),ee(this,"setFields",function(a){r.warningUnhooked();var o=r.store,s=[];a.forEach(function(c){var f=c.name,h=Tn(c,mR),d=Xt(f);s.push(d),"value"in h&&r.updateStore(Ir(r.store,d,h.value)),r.notifyObservers(o,[d],{type:"setField",data:c})}),r.notifyWatch(s)}),ee(this,"getFields",function(){var a=r.getFieldEntities(!0),o=a.map(function(s){var c=s.getNamePath(),f=s.getMeta(),h=ie(ie({},f),{},{name:c,value:r.getFieldValue(c)});return Object.defineProperty(h,"originRCField",{value:!0}),h});return o}),ee(this,"initEntityValue",function(a){var o=a.props.initialValue;if(o!==void 0){var s=a.getNamePath(),c=fa(r.store,s);c===void 0&&r.updateStore(Ir(r.store,s,o))}}),ee(this,"isMergedPreserve",function(a){var o=a!==void 0?a:r.preserve;return o??!0}),ee(this,"registerField",function(a){r.fieldEntities.push(a);var o=a.getNamePath();if(r.notifyWatch([o]),a.props.initialValue!==void 0){var s=r.store;r.resetWithFieldInitialValue({entities:[a],skipExist:!0}),r.notifyObservers(s,[a.getNamePath()],{type:"valueUpdate",source:"internal"})}return function(c,f){var h=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];if(r.fieldEntities=r.fieldEntities.filter(function(v){return v!==a}),!r.isMergedPreserve(f)&&(!c||h.length>1)){var d=c?void 0:r.getInitialValue(o);if(o.length&&r.getFieldValue(o)!==d&&r.fieldEntities.every(function(v){return!JC(v.getNamePath(),o)})){var g=r.store;r.updateStore(Ir(g,o,d,!0)),r.notifyObservers(g,[o],{type:"remove"}),r.triggerDependenciesUpdate(g,o)}}r.notifyWatch([o])}}),ee(this,"dispatch",function(a){switch(a.type){case"updateValue":{var o=a.namePath,s=a.value;r.updateValue(o,s);break}case"validateField":{var c=a.namePath,f=a.triggerName;r.validateFields([c],{triggerName:f});break}}}),ee(this,"notifyObservers",function(a,o,s){if(r.subscribable){var c=ie(ie({},s),{},{store:r.getFieldsValue(!0)});r.getFieldEntities().forEach(function(f){var h=f.onStoreChange;h(a,o,c)})}else r.forceRootUpdate()}),ee(this,"triggerDependenciesUpdate",function(a,o){var s=r.getDependencyChildrenFields(o);return s.length&&r.validateFields(s),r.notifyObservers(a,s,{type:"dependenciesUpdate",relatedFields:[o].concat(ze(s))}),s}),ee(this,"updateValue",function(a,o){var s=Xt(a),c=r.store;r.updateStore(Ir(r.store,s,o)),r.notifyObservers(c,[s],{type:"valueUpdate",source:"internal"}),r.notifyWatch([s]);var f=r.triggerDependenciesUpdate(c,s),h=r.callbacks.onValuesChange;if(h){var d=Ab(r.store,[s]);h(d,r.getFieldsValue())}r.triggerOnFieldsChange([s].concat(ze(f)))}),ee(this,"setFieldsValue",function(a){r.warningUnhooked();var o=r.store;if(a){var s=tl(r.store,a);r.updateStore(s)}r.notifyObservers(o,null,{type:"valueUpdate",source:"external"}),r.notifyWatch()}),ee(this,"setFieldValue",function(a,o){r.setFields([{name:a,value:o,errors:[],warnings:[]}])}),ee(this,"getDependencyChildrenFields",function(a){var o=new Set,s=[],c=new Yo;r.getFieldEntities().forEach(function(h){var d=h.props.dependencies;(d||[]).forEach(function(g){var v=Xt(g);c.update(v,function(){var y=arguments.length>0&&arguments[0]!==void 0?arguments[0]:new Set;return y.add(h),y})})});var f=function h(d){var g=c.get(d)||new Set;g.forEach(function(v){if(!o.has(v)){o.add(v);var y=v.getNamePath();v.isFieldDirty()&&y.length&&(s.push(y),h(y))}})};return f(a),s}),ee(this,"triggerOnFieldsChange",function(a,o){var s=r.callbacks.onFieldsChange;if(s){var c=r.getFields();if(o){var f=new Yo;o.forEach(function(d){var g=d.name,v=d.errors;f.set(g,v)}),c.forEach(function(d){d.errors=f.get(d.name)||d.errors})}var h=c.filter(function(d){var g=d.name;return il(a,g)});h.length&&s(h,c)}}),ee(this,"validateFields",function(a,o){r.warningUnhooked();var s,c;Array.isArray(a)||typeof a=="string"||typeof o=="string"?(s=a,c=o):c=a;var f=!!s,h=f?s.map(Xt):[],d=[],g=String(Date.now()),v=new Set,y=c||{},S=y.recursive,w=y.dirty;r.getFieldEntities(!0).forEach(function(R){if(f||h.push(R.getNamePath()),!(!R.props.rules||!R.props.rules.length)&&!(w&&!R.isFieldDirty())){var O=R.getNamePath();if(v.add(O.join(g)),!f||il(h,O,S)){var j=R.validateRules(ie({validateMessages:ie(ie({},WC),r.validateMessages)},c));d.push(j.then(function(){return{name:O,errors:[],warnings:[]}}).catch(function(z){var N,_=[],J=[];return(N=z.forEach)===null||N===void 0||N.call(z,function($){var B=$.rule.warningOnly,U=$.errors;B?J.push.apply(J,ze(U)):_.push.apply(_,ze(U))}),_.length?Promise.reject({name:O,errors:_,warnings:J}):{name:O,errors:_,warnings:J}}))}}});var A=hR(d);r.lastValidatePromise=A,A.catch(function(R){return R}).then(function(R){var O=R.map(function(j){var z=j.name;return z});r.notifyObservers(r.store,O,{type:"validateFinish"}),r.triggerOnFieldsChange(O,R)});var x=A.then(function(){return r.lastValidatePromise===A?Promise.resolve(r.getFieldsValue(h)):Promise.reject([])}).catch(function(R){var O=R.filter(function(j){return j&&j.errors.length});return Promise.reject({values:r.getFieldsValue(h),errorFields:O,outOfDate:r.lastValidatePromise!==A})});x.catch(function(R){return R});var T=h.filter(function(R){return v.has(R.join(g))});return r.triggerOnFieldsChange(T),x}),ee(this,"submit",function(){r.warningUnhooked(),r.validateFields().then(function(a){var o=r.callbacks.onFinish;if(o)try{o(a)}catch(s){console.error(s)}}).catch(function(a){var o=r.callbacks.onFinishFailed;o&&o(a)})}),this.forceRootUpdate=t});function KC(e){var t=b.useRef(),r=b.useState({}),a=ye(r,2),o=a[1];if(!t.current)if(e)t.current=e;else{var s=function(){o({})},c=new gR(s);t.current=c.getForm()}return[t.current]}var Tg=b.createContext({triggerFormChange:function(){},triggerFormFinish:function(){},registerForm:function(){},unregisterForm:function(){}}),pR=function(t){var r=t.validateMessages,a=t.onFormChange,o=t.onFormFinish,s=t.children,c=b.useContext(Tg),f=b.useRef({});return b.createElement(Tg.Provider,{value:ie(ie({},c),{},{validateMessages:ie(ie({},c.validateMessages),r),triggerFormChange:function(d,g){a&&a(d,{changedFields:g,forms:f.current}),c.triggerFormChange(d,g)},triggerFormFinish:function(d,g){o&&o(d,{values:g,forms:f.current}),c.triggerFormFinish(d,g)},registerForm:function(d,g){d&&(f.current=ie(ie({},f.current),{},ee({},d,g))),c.registerForm(d,g)},unregisterForm:function(d){var g=ie({},f.current);delete g[d],f.current=g,c.unregisterForm(d)}})},s)},vR=["name","initialValues","fields","form","preserve","children","component","validateMessages","validateTrigger","onValuesChange","onFieldsChange","onFinish","onFinishFailed","clearOnDestroy"],yR=function(t,r){var a=t.name,o=t.initialValues,s=t.fields,c=t.form,f=t.preserve,h=t.children,d=t.component,g=d===void 0?"form":d,v=t.validateMessages,y=t.validateTrigger,S=y===void 0?"onChange":y,w=t.onValuesChange,A=t.onFieldsChange,x=t.onFinish,T=t.onFinishFailed,R=t.clearOnDestroy,O=Tn(t,vR),j=b.useRef(null),z=b.useContext(Tg),N=KC(c),_=ye(N,1),J=_[0],$=J.getInternalHooks(Zi),B=$.useSubscribe,U=$.setInitialValues,W=$.setCallbacks,K=$.setValidateMessages,Y=$.setPreserve,G=$.destroyForm;b.useImperativeHandle(r,function(){return ie(ie({},J),{},{nativeElement:j.current})}),b.useEffect(function(){return z.registerForm(a,J),function(){z.unregisterForm(a)}},[z,J,a]),K(ie(ie({},z.validateMessages),v)),W({onValuesChange:w,onFieldsChange:function(H){if(z.triggerFormChange(a,H),A){for(var le=arguments.length,oe=new Array(le>1?le-1:0),be=1;be<le;be++)oe[be-1]=arguments[be];A.apply(void 0,[H].concat(oe))}},onFinish:function(H){z.triggerFormFinish(a,H),x&&x(H)},onFinishFailed:T}),Y(f);var P=b.useRef(null);U(o,!P.current),P.current||(P.current=!0),b.useEffect(function(){return function(){return G(R)}},[]);var k,I=typeof h=="function";if(I){var ne=J.getFieldsValue(!0);k=h(ne,J)}else k=h;B(!I);var C=b.useRef();b.useEffect(function(){uR(C.current||[],s||[])||J.setFields(s||[]),C.current=s},[s,J]);var F=b.useMemo(function(){return ie(ie({},J),{},{validateTrigger:S})},[J,S]),Q=b.createElement(Jc.Provider,{value:null},b.createElement(hl.Provider,{value:F},k));return g===!1?Q:b.createElement(g,kt({},O,{ref:j,onSubmit:function(H){H.preventDefault(),H.stopPropagation(),J.submit()},onReset:function(H){var le;H.preventDefault(),J.resetFields(),(le=O.onReset)===null||le===void 0||le.call(O,H)}}),Q)};function Rb(e){try{return JSON.stringify(e)}catch{return Math.random()}}function bR(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var a=t[0],o=t[1],s=o===void 0?{}:o,c=R7(s)?{form:s}:s,f=c.form,h=b.useState(),d=ye(h,2),g=d[0],v=d[1],y=b.useMemo(function(){return Rb(g)},[g]),S=b.useRef(y);S.current=y;var w=b.useContext(hl),A=f||w,x=A&&A._init,T=Xt(a),R=b.useRef(T);return R.current=T,b.useEffect(function(){if(x){var O=A.getFieldsValue,j=A.getInternalHooks,z=j(Zi),N=z.registerWatch,_=function(U,W){var K=c.preserve?W:U;return typeof a=="function"?a(K):fa(K,R.current)},J=N(function(B,U){var W=_(B,U),K=Rb(W);S.current!==K&&(S.current=K,v(W))}),$=_(O(),O(!0));return g!==$&&v($),J}},[x]),g}var SR=b.forwardRef(yR),lu=SR;lu.FormProvider=pR;lu.Field=YC;lu.List=dR;lu.useForm=KC;lu.useWatch=bR;const vi=b.createContext({}),CR=e=>{let{children:t,status:r,override:a}=e;const o=b.useContext(vi),s=b.useMemo(()=>{const c=Object.assign({},o);return a&&delete c.isFormItemInput,r&&(delete c.status,delete c.hasFeedback,delete c.feedbackIcon),c},[r,a,o]);return b.createElement(vi.Provider,{value:s},t)},wR=b.createContext(void 0),Rg=e=>{const{space:t,form:r,children:a}=e;if(a==null)return null;let o=a;return r&&(o=ve.createElement(CR,{override:!0,status:!0},o)),t&&(o=ve.createElement(dT,null,o)),o};function Ob(e){if(e)return{closable:e.closable,closeIcon:e.closeIcon}}function Mb(e){const{closable:t,closeIcon:r}=e||{};return ve.useMemo(()=>{if(!t&&(t===!1||r===!1||r===null))return!1;if(t===void 0&&r===void 0)return null;let a={closeIcon:typeof r!="boolean"&&r!==null?r:void 0};return t&&typeof t=="object"&&(a=Object.assign(Object.assign({},a),t)),a},[t,r])}function Nb(){const e={};for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return r.forEach(o=>{o&&Object.keys(o).forEach(s=>{o[s]!==void 0&&(e[s]=o[s])})}),e}const xR={};function ER(e,t){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:xR;const a=Mb(e),o=Mb(t),s=typeof a!="boolean"?!!(a!=null&&a.disabled):!1,c=ve.useMemo(()=>Object.assign({closeIcon:ve.createElement(kA,null)},r),[r]),f=ve.useMemo(()=>a===!1?!1:a?Nb(c,o,a):o===!1?!1:o?Nb(c,o):c.closable?c:!1,[a,o,c]);return ve.useMemo(()=>{if(f===!1)return[!1,null,s];const{closeIconRender:h}=c,{closeIcon:d}=f;let g=d;if(g!=null){h&&(g=h(d));const v=OC(f,!0);Object.keys(v).length&&(g=ve.isValidElement(g)?ve.cloneElement(g,v):ve.createElement("span",Object.assign({},v),g))}return[!0,g,s]},[f,c])}const AR=function(){if(typeof navigator>"u"||typeof window>"u")return!1;var e=navigator.userAgent||navigator.vendor||window.opera;return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(e==null?void 0:e.substr(0,4))};function TR(e){var t=e.prefixCls,r=e.align,a=e.arrow,o=e.arrowPos,s=a||{},c=s.className,f=s.content,h=o.x,d=h===void 0?0:h,g=o.y,v=g===void 0?0:g,y=b.useRef();if(!r||!r.points)return null;var S={position:"absolute"};if(r.autoArrow!==!1){var w=r.points[0],A=r.points[1],x=w[0],T=w[1],R=A[0],O=A[1];x===R||!["t","b"].includes(x)?S.top=v:x==="t"?S.top=0:S.bottom=0,T===O||!["l","r"].includes(T)?S.left=d:T==="l"?S.left=0:S.right=0}return b.createElement("div",{ref:y,className:Ee("".concat(t,"-arrow"),c),style:S},f)}function RR(e){var t=e.prefixCls,r=e.open,a=e.zIndex,o=e.mask,s=e.motion;return o?b.createElement(nu,kt({},s,{motionAppear:!0,visible:r,removeOnLeave:!0}),function(c){var f=c.className;return b.createElement("div",{style:{zIndex:a},className:Ee("".concat(t,"-mask"),f)})}):null}var OR=b.memo(function(e){var t=e.children;return t},function(e,t){return t.cache}),MR=b.forwardRef(function(e,t){var r=e.popup,a=e.className,o=e.prefixCls,s=e.style,c=e.target,f=e.onVisibleChanged,h=e.open,d=e.keepDom,g=e.fresh,v=e.onClick,y=e.mask,S=e.arrow,w=e.arrowPos,A=e.align,x=e.motion,T=e.maskMotion,R=e.forceRender,O=e.getPopupContainer,j=e.autoDestroy,z=e.portal,N=e.zIndex,_=e.onMouseEnter,J=e.onMouseLeave,$=e.onPointerEnter,B=e.onPointerDownCapture,U=e.ready,W=e.offsetX,K=e.offsetY,Y=e.offsetR,G=e.offsetB,P=e.onAlign,k=e.onPrepare,I=e.stretch,ne=e.targetWidth,C=e.targetHeight,F=typeof r=="function"?r():r,Q=h||d,M=(O==null?void 0:O.length)>0,H=b.useState(!O||!M),le=ye(H,2),oe=le[0],be=le[1];if(Cn(function(){!oe&&M&&c&&be(!0)},[oe,M,c]),!oe)return null;var ue="auto",me={left:"-1000vw",top:"-1000vh",right:ue,bottom:ue};if(U||!h){var ge,Pe=A.points,_e=A.dynamicInset||((ge=A._experimental)===null||ge===void 0?void 0:ge.dynamicInset),He=_e&&Pe[0][1]==="r",Xe=_e&&Pe[0][0]==="b";He?(me.right=Y,me.left=ue):(me.left=W,me.right=ue),Xe?(me.bottom=G,me.top=ue):(me.top=K,me.bottom=ue)}var Ge={};return I&&(I.includes("height")&&C?Ge.height=C:I.includes("minHeight")&&C&&(Ge.minHeight=C),I.includes("width")&&ne?Ge.width=ne:I.includes("minWidth")&&ne&&(Ge.minWidth=ne)),h||(Ge.pointerEvents="none"),b.createElement(z,{open:R||Q,getContainer:O&&function(){return O(c)},autoDestroy:j},b.createElement(RR,{prefixCls:o,open:h,zIndex:N,mask:y,motion:T}),b.createElement(sf,{onResize:P,disabled:!h},function(Me){return b.createElement(nu,kt({motionAppear:!0,motionEnter:!0,motionLeave:!0,removeOnLeave:!1,forceRender:R,leavedClassName:"".concat(o,"-hidden")},x,{onAppearPrepare:k,onEnterPrepare:k,visible:h,onVisibleChanged:function(Ve){var Ke;x==null||(Ke=x.onVisibleChanged)===null||Ke===void 0||Ke.call(x,Ve),f(Ve)}}),function(rt,Ve){var Ke=rt.className,Et=rt.style,Be=Ee(o,Ke,a);return b.createElement("div",{ref:lo(Me,t,Ve),className:Be,style:ie(ie(ie(ie({"--arrow-x":"".concat(w.x||0,"px"),"--arrow-y":"".concat(w.y||0,"px")},me),Ge),Et),{},{boxSizing:"border-box",zIndex:N},s),onMouseEnter:_,onMouseLeave:J,onPointerEnter:$,onClick:v,onPointerDownCapture:B},S&&b.createElement(TR,{prefixCls:o,arrow:S,arrowPos:w,align:A}),b.createElement(OR,{cache:!h&&!g},F))})}))}),NR=b.forwardRef(function(e,t){var r=e.children,a=e.getTriggerDOMNode,o=Zs(r),s=b.useCallback(function(f){Kg(t,a?a(f):f)},[a]),c=af(s,of(r));return o?b.cloneElement(r,{ref:c}):r}),Db=b.createContext(null);function Pb(e){return e?Array.isArray(e)?e:[e]:[]}function DR(e,t,r,a){return b.useMemo(function(){var o=Pb(r??t),s=Pb(a??t),c=new Set(o),f=new Set(s);return e&&(c.has("hover")&&(c.delete("hover"),c.add("click")),f.has("hover")&&(f.delete("hover"),f.add("click"))),[c,f]},[e,t,r,a])}function PR(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],r=arguments.length>2?arguments[2]:void 0;return r?e[0]===t[0]:e[0]===t[0]&&e[1]===t[1]}function zR(e,t,r,a){for(var o=r.points,s=Object.keys(e),c=0;c<s.length;c+=1){var f,h=s[c];if(PR((f=e[h])===null||f===void 0?void 0:f.points,o,a))return"".concat(t,"-placement-").concat(h)}return""}function zb(e,t,r,a){return t||(r?{motionName:"".concat(e,"-").concat(r)}:a?{motionName:a}:null)}function su(e){return e.ownerDocument.defaultView}function Og(e){for(var t=[],r=e==null?void 0:e.parentElement,a=["hidden","scroll","clip","auto"];r;){var o=su(r).getComputedStyle(r),s=o.overflowX,c=o.overflowY,f=o.overflow;[s,c,f].some(function(h){return a.includes(h)})&&t.push(r),r=r.parentElement}return t}function Ws(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;return Number.isNaN(e)?t:e}function Ss(e){return Ws(parseFloat(e),0)}function _b(e,t){var r=ie({},e);return(t||[]).forEach(function(a){if(!(a instanceof HTMLBodyElement||a instanceof HTMLHtmlElement)){var o=su(a).getComputedStyle(a),s=o.overflow,c=o.overflowClipMargin,f=o.borderTopWidth,h=o.borderBottomWidth,d=o.borderLeftWidth,g=o.borderRightWidth,v=a.getBoundingClientRect(),y=a.offsetHeight,S=a.clientHeight,w=a.offsetWidth,A=a.clientWidth,x=Ss(f),T=Ss(h),R=Ss(d),O=Ss(g),j=Ws(Math.round(v.width/w*1e3)/1e3),z=Ws(Math.round(v.height/y*1e3)/1e3),N=(w-A-R-O)*j,_=(y-S-x-T)*z,J=x*z,$=T*z,B=R*j,U=O*j,W=0,K=0;if(s==="clip"){var Y=Ss(c);W=Y*j,K=Y*z}var G=v.x+B-W,P=v.y+J-K,k=G+v.width+2*W-B-U-N,I=P+v.height+2*K-J-$-_;r.left=Math.max(r.left,G),r.top=Math.max(r.top,P),r.right=Math.min(r.right,k),r.bottom=Math.min(r.bottom,I)}}),r}function $b(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,r="".concat(t),a=r.match(/^(.*)\%$/);return a?e*(parseFloat(a[1])/100):parseFloat(r)}function kb(e,t){var r=t||[],a=ye(r,2),o=a[0],s=a[1];return[$b(e.width,o),$b(e.height,s)]}function Lb(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return[e[0],e[1]]}function Xo(e,t){var r=t[0],a=t[1],o,s;return r==="t"?s=e.y:r==="b"?s=e.y+e.height:s=e.y+e.height/2,a==="l"?o=e.x:a==="r"?o=e.x+e.width:o=e.x+e.width/2,{x:o,y:s}}function fi(e,t){var r={t:"b",b:"t",l:"r",r:"l"};return e.map(function(a,o){return o===t?r[a]||"c":a}).join("")}function _R(e,t,r,a,o,s,c){var f=b.useState({ready:!1,offsetX:0,offsetY:0,offsetR:0,offsetB:0,arrowX:0,arrowY:0,scaleX:1,scaleY:1,align:o[a]||{}}),h=ye(f,2),d=h[0],g=h[1],v=b.useRef(0),y=b.useMemo(function(){return t?Og(t):[]},[t]),S=b.useRef({}),w=function(){S.current={}};e||w();var A=zn(function(){if(t&&r&&e){let jn=function(kr,dr){var hr=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Te,mr=H.x+kr,Lr=H.y+dr,vo=mr+He,Mi=Lr+_e,yo=Math.max(mr,hr.left),we=Math.max(Lr,hr.top),ke=Math.min(vo,hr.right),wt=Math.min(Mi,hr.bottom);return Math.max(0,(ke-yo)*(wt-we))},po=function(){sr=H.y+ot,Un=sr+_e,Mn=H.x+ht,kn=Mn+He};var R,O,j,z,N=t,_=N.ownerDocument,J=su(N),$=J.getComputedStyle(N),B=$.width,U=$.height,W=$.position,K=N.style.left,Y=N.style.top,G=N.style.right,P=N.style.bottom,k=N.style.overflow,I=ie(ie({},o[a]),s),ne=_.createElement("div");(R=N.parentElement)===null||R===void 0||R.appendChild(ne),ne.style.left="".concat(N.offsetLeft,"px"),ne.style.top="".concat(N.offsetTop,"px"),ne.style.position=W,ne.style.height="".concat(N.offsetHeight,"px"),ne.style.width="".concat(N.offsetWidth,"px"),N.style.left="0",N.style.top="0",N.style.right="auto",N.style.bottom="auto",N.style.overflow="hidden";var C;if(Array.isArray(r))C={x:r[0],y:r[1],width:0,height:0};else{var F,Q,M=r.getBoundingClientRect();M.x=(F=M.x)!==null&&F!==void 0?F:M.left,M.y=(Q=M.y)!==null&&Q!==void 0?Q:M.top,C={x:M.x,y:M.y,width:M.width,height:M.height}}var H=N.getBoundingClientRect();H.x=(O=H.x)!==null&&O!==void 0?O:H.left,H.y=(j=H.y)!==null&&j!==void 0?j:H.top;var le=_.documentElement,oe=le.clientWidth,be=le.clientHeight,ue=le.scrollWidth,me=le.scrollHeight,ge=le.scrollTop,Pe=le.scrollLeft,_e=H.height,He=H.width,Xe=C.height,Ge=C.width,Me={left:0,top:0,right:oe,bottom:be},rt={left:-Pe,top:-ge,right:ue-Pe,bottom:me-ge},Ve=I.htmlRegion,Ke="visible",Et="visibleFirst";Ve!=="scroll"&&Ve!==Et&&(Ve=Ke);var Be=Ve===Et,st=_b(rt,y),Ce=_b(Me,y),Te=Ve===Ke?Ce:st,qe=Be?Ce:Te;N.style.left="auto",N.style.top="auto",N.style.right="0",N.style.bottom="0";var re=N.getBoundingClientRect();N.style.left=K,N.style.top=Y,N.style.right=G,N.style.bottom=P,N.style.overflow=k,(z=N.parentElement)===null||z===void 0||z.removeChild(ne);var de=Ws(Math.round(He/parseFloat(B)*1e3)/1e3),Se=Ws(Math.round(_e/parseFloat(U)*1e3)/1e3);if(de===0||Se===0||ks(r)&&!_C(r))return;var Ne=I.offset,Re=I.targetOffset,at=kb(H,Ne),ut=ye(at,2),$e=ut[0],xe=ut[1],Qe=kb(C,Re),Fe=ye(Qe,2),Ze=Fe[0],It=Fe[1];C.x-=Ze,C.y-=It;var wi=I.points||[],Ba=ye(wi,2),Jr=Ba[0],Yr=Ba[1],Qt=Lb(Yr),Wt=Lb(Jr),wn=Xo(C,Qt),Vt=Xo(H,Wt),On=ie({},I),ht=wn.x-Vt.x+$e,ot=wn.y-Vt.y+xe,Lt=jn(ht,ot),lr=jn(ht,ot,Ce),Xr=Xo(C,["t","l"]),mt=Xo(H,["t","l"]),Kr=Xo(C,["b","r"]),Qr=Xo(H,["b","r"]),Ct=I.overflow||{},vt=Ct.adjustX,yt=Ct.adjustY,bt=Ct.shiftX,un=Ct.shiftY,_r=function(dr){return typeof dr=="boolean"?dr:dr>=0},sr,Un,Mn,kn;po();var Gn=_r(yt),Ln=Wt[0]===Qt[0];if(Gn&&Wt[0]==="t"&&(Un>qe.bottom||S.current.bt)){var ft=ot;Ln?ft-=_e-Xe:ft=Xr.y-Qr.y-xe;var Zr=jn(ht,ft),ea=jn(ht,ft,Ce);Zr>Lt||Zr===Lt&&(!Be||ea>=lr)?(S.current.bt=!0,ot=ft,xe=-xe,On.points=[fi(Wt,0),fi(Qt,0)]):S.current.bt=!1}if(Gn&&Wt[0]==="b"&&(sr<qe.top||S.current.tb)){var Nt=ot;Ln?Nt+=_e-Xe:Nt=Kr.y-mt.y-xe;var xi=jn(ht,Nt),co=jn(ht,Nt,Ce);xi>Lt||xi===Lt&&(!Be||co>=lr)?(S.current.tb=!0,ot=Nt,xe=-xe,On.points=[fi(Wt,0),fi(Qt,0)]):S.current.tb=!1}var ur=_r(vt),$r=Wt[1]===Qt[1];if(ur&&Wt[1]==="l"&&(kn>qe.right||S.current.rl)){var vn=ht;$r?vn-=He-Ge:vn=Xr.x-Qr.x-$e;var fo=jn(vn,ot),pa=jn(vn,ot,Ce);fo>Lt||fo===Lt&&(!Be||pa>=lr)?(S.current.rl=!0,ht=vn,$e=-$e,On.points=[fi(Wt,1),fi(Qt,1)]):S.current.rl=!1}if(ur&&Wt[1]==="r"&&(Mn<qe.left||S.current.lr)){var cr=ht;$r?cr+=He-Ge:cr=Kr.x-mt.x-$e;var ho=jn(cr,ot),va=jn(cr,ot,Ce);ho>Lt||ho===Lt&&(!Be||va>=lr)?(S.current.lr=!0,ht=cr,$e=-$e,On.points=[fi(Wt,1),fi(Qt,1)]):S.current.lr=!1}po();var Nn=bt===!0?0:bt;typeof Nn=="number"&&(Mn<Ce.left&&(ht-=Mn-Ce.left-$e,C.x+Ge<Ce.left+Nn&&(ht+=C.x-Ce.left+Ge-Nn)),kn>Ce.right&&(ht-=kn-Ce.right-$e,C.x>Ce.right-Nn&&(ht+=C.x-Ce.right+Nn)));var Jt=un===!0?0:un;typeof Jt=="number"&&(sr<Ce.top&&(ot-=sr-Ce.top-xe,C.y+Xe<Ce.top+Jt&&(ot+=C.y-Ce.top+Xe-Jt)),Un>Ce.bottom&&(ot-=Un-Ce.bottom-xe,C.y>Ce.bottom-Jt&&(ot+=C.y-Ce.bottom+Jt)));var an=H.x+ht,ya=an+He,fr=H.y+ot,Fa=fr+_e,Ei=C.x,Ia=Ei+Ge,Ai=C.y,xn=Ai+Xe,Ti=Math.max(an,Ei),mo=Math.min(ya,Ia),Va=(Ti+mo)/2,ta=Va-an,go=Math.max(fr,Ai),Ri=Math.min(Fa,xn),na=(go+Ri)/2,wl=na-fr;c==null||c(t,On);var Ua=re.right-H.x-(ht+H.width),qn=re.bottom-H.y-(ot+H.height);de===1&&(ht=Math.round(ht),Ua=Math.round(Ua)),Se===1&&(ot=Math.round(ot),qn=Math.round(qn));var Oi={ready:!0,offsetX:ht/de,offsetY:ot/Se,offsetR:Ua/de,offsetB:qn/Se,arrowX:ta/de,arrowY:wl/Se,scaleX:de,scaleY:Se,align:On};g(Oi)}}),x=function(){v.current+=1;var O=v.current;Promise.resolve().then(function(){v.current===O&&A()})},T=function(){g(function(O){return ie(ie({},O),{},{ready:!1})})};return Cn(T,[a]),Cn(function(){e||T()},[e]),[d.ready,d.offsetX,d.offsetY,d.offsetR,d.offsetB,d.arrowX,d.arrowY,d.scaleX,d.scaleY,d.align,x]}function $R(e,t,r,a,o){Cn(function(){if(e&&t&&r){let v=function(){a(),o()};var s=t,c=r,f=Og(s),h=Og(c),d=su(c),g=new Set([d].concat(ze(f),ze(h)));return g.forEach(function(y){y.addEventListener("scroll",v,{passive:!0})}),d.addEventListener("resize",v,{passive:!0}),a(),function(){g.forEach(function(y){y.removeEventListener("scroll",v),d.removeEventListener("resize",v)})}}},[e,t,r])}function kR(e,t,r,a,o,s,c,f){var h=b.useRef(e);h.current=e;var d=b.useRef(!1);b.useEffect(function(){if(t&&a&&(!o||s)){var v=function(){d.current=!1},y=function(x){var T;h.current&&!c(((T=x.composedPath)===null||T===void 0||(T=T.call(x))===null||T===void 0?void 0:T[0])||x.target)&&!d.current&&f(!1)},S=su(a);S.addEventListener("pointerdown",v,!0),S.addEventListener("mousedown",y,!0),S.addEventListener("contextmenu",y,!0);var w=qc(r);return w&&(w.addEventListener("mousedown",y,!0),w.addEventListener("contextmenu",y,!0)),function(){S.removeEventListener("pointerdown",v,!0),S.removeEventListener("mousedown",y,!0),S.removeEventListener("contextmenu",y,!0),w&&(w.removeEventListener("mousedown",y,!0),w.removeEventListener("contextmenu",y,!0))}}},[t,r,a,o,s]);function g(){d.current=!0}return g}var LR=["prefixCls","children","action","showAction","hideAction","popupVisible","defaultPopupVisible","onPopupVisibleChange","afterPopupVisibleChange","mouseEnterDelay","mouseLeaveDelay","focusDelay","blurDelay","mask","maskClosable","getPopupContainer","forceRender","autoDestroy","destroyPopupOnHide","popup","popupClassName","popupStyle","popupPlacement","builtinPlacements","popupAlign","zIndex","stretch","getPopupClassNameFromAlign","fresh","alignPoint","onPopupClick","onPopupAlign","arrow","popupMotion","maskMotion","popupTransitionName","popupAnimation","maskTransitionName","maskAnimation","className","getTriggerDOMNode"];function jR(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:UC,t=b.forwardRef(function(r,a){var o=r.prefixCls,s=o===void 0?"rc-trigger-popup":o,c=r.children,f=r.action,h=f===void 0?"hover":f,d=r.showAction,g=r.hideAction,v=r.popupVisible,y=r.defaultPopupVisible,S=r.onPopupVisibleChange,w=r.afterPopupVisibleChange,A=r.mouseEnterDelay,x=r.mouseLeaveDelay,T=x===void 0?.1:x,R=r.focusDelay,O=r.blurDelay,j=r.mask,z=r.maskClosable,N=z===void 0?!0:z,_=r.getPopupContainer,J=r.forceRender,$=r.autoDestroy,B=r.destroyPopupOnHide,U=r.popup,W=r.popupClassName,K=r.popupStyle,Y=r.popupPlacement,G=r.builtinPlacements,P=G===void 0?{}:G,k=r.popupAlign,I=r.zIndex,ne=r.stretch,C=r.getPopupClassNameFromAlign,F=r.fresh,Q=r.alignPoint,M=r.onPopupClick,H=r.onPopupAlign,le=r.arrow,oe=r.popupMotion,be=r.maskMotion,ue=r.popupTransitionName,me=r.popupAnimation,ge=r.maskTransitionName,Pe=r.maskAnimation,_e=r.className,He=r.getTriggerDOMNode,Xe=Tn(r,LR),Ge=$||B||!1,Me=b.useState(!1),rt=ye(Me,2),Ve=rt[0],Ke=rt[1];Cn(function(){Ke(AR())},[]);var Et=b.useRef({}),Be=b.useContext(Db),st=b.useMemo(function(){return{registerSubPopup:function(ke,wt){Et.current[ke]=wt,Be==null||Be.registerSubPopup(ke,wt)}}},[Be]),Ce=GC(),Te=b.useState(null),qe=ye(Te,2),re=qe[0],de=qe[1],Se=b.useRef(null),Ne=zn(function(we){Se.current=we,ks(we)&&re!==we&&de(we),Be==null||Be.registerSubPopup(Ce,we)}),Re=b.useState(null),at=ye(Re,2),ut=at[0],$e=at[1],xe=b.useRef(null),Qe=zn(function(we){ks(we)&&ut!==we&&($e(we),xe.current=we)}),Fe=b.Children.only(c),Ze=(Fe==null?void 0:Fe.props)||{},It={},wi=zn(function(we){var ke,wt,At=ut;return(At==null?void 0:At.contains(we))||((ke=qc(At))===null||ke===void 0?void 0:ke.host)===we||we===At||(re==null?void 0:re.contains(we))||((wt=qc(re))===null||wt===void 0?void 0:wt.host)===we||we===re||Object.values(Et.current).some(function(Dt){return(Dt==null?void 0:Dt.contains(we))||we===Dt})}),Ba=zb(s,oe,me,ue),Jr=zb(s,be,Pe,ge),Yr=b.useState(y||!1),Qt=ye(Yr,2),Wt=Qt[0],wn=Qt[1],Vt=v??Wt,On=zn(function(we){v===void 0&&wn(we)});Cn(function(){wn(v||!1)},[v]);var ht=b.useRef(Vt);ht.current=Vt;var ot=b.useRef([]);ot.current=[];var Lt=zn(function(we){var ke;On(we),((ke=ot.current[ot.current.length-1])!==null&&ke!==void 0?ke:Vt)!==we&&(ot.current.push(we),S==null||S(we))}),lr=b.useRef(),Xr=function(){clearTimeout(lr.current)},mt=function(ke){var wt=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;Xr(),wt===0?Lt(ke):lr.current=setTimeout(function(){Lt(ke)},wt*1e3)};b.useEffect(function(){return Xr},[]);var Kr=b.useState(!1),Qr=ye(Kr,2),Ct=Qr[0],vt=Qr[1];Cn(function(we){(!we||Vt)&&vt(!0)},[Vt]);var yt=b.useState(null),bt=ye(yt,2),un=bt[0],_r=bt[1],sr=b.useState(null),Un=ye(sr,2),Mn=Un[0],kn=Un[1],Gn=function(ke){kn([ke.clientX,ke.clientY])},Ln=_R(Vt,re,Q&&Mn!==null?Mn:ut,Y,P,k,H),ft=ye(Ln,11),Zr=ft[0],ea=ft[1],Nt=ft[2],xi=ft[3],co=ft[4],ur=ft[5],$r=ft[6],vn=ft[7],fo=ft[8],pa=ft[9],cr=ft[10],ho=DR(Ve,h,d,g),va=ye(ho,2),Nn=va[0],Jt=va[1],an=Nn.has("click"),ya=Jt.has("click")||Jt.has("contextMenu"),fr=zn(function(){Ct||cr()}),Fa=function(){ht.current&&Q&&ya&&mt(!1)};$R(Vt,ut,re,fr,Fa),Cn(function(){fr()},[Mn,Y]),Cn(function(){Vt&&!(P!=null&&P[Y])&&fr()},[JSON.stringify(k)]);var Ei=b.useMemo(function(){var we=zR(P,s,pa,Q);return Ee(we,C==null?void 0:C(pa))},[pa,C,P,s,Q]);b.useImperativeHandle(a,function(){return{nativeElement:xe.current,popupElement:Se.current,forceAlign:fr}});var Ia=b.useState(0),Ai=ye(Ia,2),xn=Ai[0],Ti=Ai[1],mo=b.useState(0),Va=ye(mo,2),ta=Va[0],go=Va[1],Ri=function(){if(ne&&ut){var ke=ut.getBoundingClientRect();Ti(ke.width),go(ke.height)}},na=function(){Ri(),fr()},wl=function(ke){vt(!1),cr(),w==null||w(ke)},Ua=function(){return new Promise(function(ke){Ri(),_r(function(){return ke})})};Cn(function(){un&&(cr(),un(),_r(null))},[un]);function qn(we,ke,wt,At){It[we]=function(Dt){var ba;At==null||At(Dt),mt(ke,wt);for(var bo=arguments.length,Ni=new Array(bo>1?bo-1:0),Sa=1;Sa<bo;Sa++)Ni[Sa-1]=arguments[Sa];(ba=Ze[we])===null||ba===void 0||ba.call.apply(ba,[Ze,Dt].concat(Ni))}}(an||ya)&&(It.onClick=function(we){var ke;ht.current&&ya?mt(!1):!ht.current&&an&&(Gn(we),mt(!0));for(var wt=arguments.length,At=new Array(wt>1?wt-1:0),Dt=1;Dt<wt;Dt++)At[Dt-1]=arguments[Dt];(ke=Ze.onClick)===null||ke===void 0||ke.call.apply(ke,[Ze,we].concat(At))});var Oi=kR(Vt,ya,ut,re,j,N,wi,mt),jn=Nn.has("hover"),po=Jt.has("hover"),kr,dr;jn&&(qn("onMouseEnter",!0,A,function(we){Gn(we)}),qn("onPointerEnter",!0,A,function(we){Gn(we)}),kr=function(ke){(Vt||Ct)&&re!==null&&re!==void 0&&re.contains(ke.target)&&mt(!0,A)},Q&&(It.onMouseMove=function(we){var ke;(ke=Ze.onMouseMove)===null||ke===void 0||ke.call(Ze,we)})),po&&(qn("onMouseLeave",!1,T),qn("onPointerLeave",!1,T),dr=function(){mt(!1,T)}),Nn.has("focus")&&qn("onFocus",!0,R),Jt.has("focus")&&qn("onBlur",!1,O),Nn.has("contextMenu")&&(It.onContextMenu=function(we){var ke;ht.current&&Jt.has("contextMenu")?mt(!1):(Gn(we),mt(!0)),we.preventDefault();for(var wt=arguments.length,At=new Array(wt>1?wt-1:0),Dt=1;Dt<wt;Dt++)At[Dt-1]=arguments[Dt];(ke=Ze.onContextMenu)===null||ke===void 0||ke.call.apply(ke,[Ze,we].concat(At))}),_e&&(It.className=Ee(Ze.className,_e));var hr=ie(ie({},Ze),It),mr={},Lr=["onContextMenu","onClick","onMouseDown","onTouchStart","onMouseEnter","onMouseLeave","onFocus","onBlur"];Lr.forEach(function(we){Xe[we]&&(mr[we]=function(){for(var ke,wt=arguments.length,At=new Array(wt),Dt=0;Dt<wt;Dt++)At[Dt]=arguments[Dt];(ke=hr[we])===null||ke===void 0||ke.call.apply(ke,[hr].concat(At)),Xe[we].apply(Xe,At)})});var vo=b.cloneElement(Fe,ie(ie({},hr),mr)),Mi={x:ur,y:$r},yo=le?ie({},le!==!0?le:{}):null;return b.createElement(b.Fragment,null,b.createElement(sf,{disabled:!Vt,ref:Qe,onResize:na},b.createElement(NR,{getTriggerDOMNode:He},vo)),b.createElement(Db.Provider,{value:st},b.createElement(MR,{portal:e,ref:Ne,prefixCls:s,popup:U,className:Ee(W,Ei),style:K,target:ut,onMouseEnter:kr,onMouseLeave:dr,onPointerEnter:kr,zIndex:I,open:Vt,keepDom:Ct,fresh:F,onClick:M,onPointerDownCapture:Oi,mask:j,motion:Ba,maskMotion:Jr,onVisibleChanged:wl,onPrepare:Ua,forceRender:J,autoDestroy:Ge,getPopupContainer:_,align:pa,arrow:yo,arrowPos:Mi,ready:Zr,offsetX:ea,offsetY:Nt,offsetR:xi,offsetB:co,onAlign:fr,stretch:ne,targetWidth:xn/vn,targetHeight:ta/fo})))});return t}const HR=jR(UC);function Mg(e,t,r){return Ee({[`${e}-status-success`]:t==="success",[`${e}-status-warning`]:t==="warning",[`${e}-status-error`]:t==="error",[`${e}-status-validating`]:t==="validating",[`${e}-has-feedback`]:r})}const hp=(e,t)=>t||e,QC=function(e,t){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:void 0;var a,o;const{variant:s,[e]:c}=b.useContext(Kt),f=b.useContext(wR),h=c==null?void 0:c.variant;let d;typeof t<"u"?d=t:r===!1?d="borderless":d=(o=(a=f??h)!==null&&a!==void 0?a:s)!==null&&o!==void 0?o:"outlined";const g=h9.includes(d);return[d,g]};var BR=function(t,r){return b.createElement(zr,kt({},t,{ref:r,icon:mS}))},FR=b.forwardRef(BR);function ZC(e){var t=e.children,r=e.prefixCls,a=e.id,o=e.overlayInnerStyle,s=e.bodyClassName,c=e.className,f=e.style;return b.createElement("div",{className:Ee("".concat(r,"-content"),c),style:f},b.createElement("div",{className:Ee("".concat(r,"-inner"),s),id:a,role:"tooltip",style:o},typeof t=="function"?t():t))}var Ko={shiftX:64,adjustY:1},Qo={adjustX:1,shiftY:!0},Rr=[0,0],IR={left:{points:["cr","cl"],overflow:Qo,offset:[-4,0],targetOffset:Rr},right:{points:["cl","cr"],overflow:Qo,offset:[4,0],targetOffset:Rr},top:{points:["bc","tc"],overflow:Ko,offset:[0,-4],targetOffset:Rr},bottom:{points:["tc","bc"],overflow:Ko,offset:[0,4],targetOffset:Rr},topLeft:{points:["bl","tl"],overflow:Ko,offset:[0,-4],targetOffset:Rr},leftTop:{points:["tr","tl"],overflow:Qo,offset:[-4,0],targetOffset:Rr},topRight:{points:["br","tr"],overflow:Ko,offset:[0,-4],targetOffset:Rr},rightTop:{points:["tl","tr"],overflow:Qo,offset:[4,0],targetOffset:Rr},bottomRight:{points:["tr","br"],overflow:Ko,offset:[0,4],targetOffset:Rr},rightBottom:{points:["bl","br"],overflow:Qo,offset:[4,0],targetOffset:Rr},bottomLeft:{points:["tl","bl"],overflow:Ko,offset:[0,4],targetOffset:Rr},leftBottom:{points:["br","bl"],overflow:Qo,offset:[-4,0],targetOffset:Rr}},VR=["overlayClassName","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle","prefixCls","children","onVisibleChange","afterVisibleChange","transitionName","animation","motion","placement","align","destroyTooltipOnHide","defaultVisible","getTooltipContainer","overlayInnerStyle","arrowContent","overlay","id","showArrow","classNames","styles"],UR=function(t,r){var a=t.overlayClassName,o=t.trigger,s=o===void 0?["hover"]:o,c=t.mouseEnterDelay,f=c===void 0?0:c,h=t.mouseLeaveDelay,d=h===void 0?.1:h,g=t.overlayStyle,v=t.prefixCls,y=v===void 0?"rc-tooltip":v,S=t.children,w=t.onVisibleChange,A=t.afterVisibleChange,x=t.transitionName,T=t.animation,R=t.motion,O=t.placement,j=O===void 0?"right":O,z=t.align,N=z===void 0?{}:z,_=t.destroyTooltipOnHide,J=_===void 0?!1:_,$=t.defaultVisible,B=t.getTooltipContainer,U=t.overlayInnerStyle;t.arrowContent;var W=t.overlay,K=t.id,Y=t.showArrow,G=Y===void 0?!0:Y,P=t.classNames,k=t.styles,I=Tn(t,VR),ne=GC(K),C=b.useRef(null);b.useImperativeHandle(r,function(){return C.current});var F=ie({},I);"visible"in t&&(F.popupVisible=t.visible);var Q=function(){return b.createElement(ZC,{key:"content",prefixCls:y,id:ne,bodyClassName:P==null?void 0:P.body,overlayInnerStyle:ie(ie({},U),k==null?void 0:k.body)},W)},M=function(){var le=b.Children.only(S),oe=(le==null?void 0:le.props)||{},be=ie(ie({},oe),{},{"aria-describedby":W?ne:null});return b.cloneElement(S,be)};return b.createElement(HR,kt({popupClassName:Ee(a,P==null?void 0:P.root),prefixCls:y,popup:Q,action:s,builtinPlacements:IR,popupPlacement:j,ref:C,popupAlign:N,getPopupContainer:B,onPopupVisibleChange:w,afterPopupVisibleChange:A,popupTransitionName:x,popupAnimation:T,popupMotion:R,defaultPopupVisible:$,autoDestroy:J,mouseLeaveDelay:d,popupStyle:ie(ie({},g),k==null?void 0:k.root),mouseEnterDelay:f,arrow:G},F),M())};const GR=b.forwardRef(UR);function qR(e){const{sizePopupArrow:t,borderRadiusXS:r,borderRadiusOuter:a}=e,o=t/2,s=0,c=o,f=a*1/Math.sqrt(2),h=o-a*(1-1/Math.sqrt(2)),d=o-r*(1/Math.sqrt(2)),g=a*(Math.sqrt(2)-1)+r*(1/Math.sqrt(2)),v=2*o-d,y=g,S=2*o-f,w=h,A=2*o-s,x=c,T=o*Math.sqrt(2)+a*(Math.sqrt(2)-2),R=a*(Math.sqrt(2)-1),O=`polygon(${R}px 100%, 50% ${R}px, ${2*o-R}px 100%, ${R}px 100%)`,j=`path('M ${s} ${c} A ${a} ${a} 0 0 0 ${f} ${h} L ${d} ${g} A ${r} ${r} 0 0 1 ${v} ${y} L ${S} ${w} A ${a} ${a} 0 0 0 ${A} ${x} Z')`;return{arrowShadowWidth:T,arrowPath:j,arrowPolygon:O}}const WR=(e,t,r)=>{const{sizePopupArrow:a,arrowPolygon:o,arrowPath:s,arrowShadowWidth:c,borderRadiusXS:f,calc:h}=e;return{pointerEvents:"none",width:a,height:a,overflow:"hidden","&::before":{position:"absolute",bottom:0,insetInlineStart:0,width:a,height:h(a).div(2).equal(),background:t,clipPath:{_multi_value_:!0,value:[o,s]},content:'""'},"&::after":{content:'""',position:"absolute",width:c,height:c,bottom:0,insetInline:0,margin:"auto",borderRadius:{_skip_check_:!0,value:`0 0 ${We(f)} 0`},transform:"translateY(50%) rotate(-135deg)",boxShadow:r,zIndex:0,background:"transparent"}}},ew=8;function tw(e){const{contentRadius:t,limitVerticalRadius:r}=e,a=t>12?t+2:12;return{arrowOffsetHorizontal:a,arrowOffsetVertical:r?ew:a}}function Cc(e,t){return e?t:{}}function JR(e,t,r){const{componentCls:a,boxShadowPopoverArrow:o,arrowOffsetVertical:s,arrowOffsetHorizontal:c}=e,{arrowDistance:f=0,arrowPlacement:h={left:!0,right:!0,top:!0,bottom:!0}}={};return{[a]:Object.assign(Object.assign(Object.assign(Object.assign({[`${a}-arrow`]:[Object.assign(Object.assign({position:"absolute",zIndex:1,display:"block"},WR(e,t,o)),{"&:before":{background:t}})]},Cc(!!h.top,{[[`&-placement-top > ${a}-arrow`,`&-placement-topLeft > ${a}-arrow`,`&-placement-topRight > ${a}-arrow`].join(",")]:{bottom:f,transform:"translateY(100%) rotate(180deg)"},[`&-placement-top > ${a}-arrow`]:{left:{_skip_check_:!0,value:"50%"},transform:"translateX(-50%) translateY(100%) rotate(180deg)"},"&-placement-topLeft":{"--arrow-offset-horizontal":c,[`> ${a}-arrow`]:{left:{_skip_check_:!0,value:c}}},"&-placement-topRight":{"--arrow-offset-horizontal":`calc(100% - ${We(c)})`,[`> ${a}-arrow`]:{right:{_skip_check_:!0,value:c}}}})),Cc(!!h.bottom,{[[`&-placement-bottom > ${a}-arrow`,`&-placement-bottomLeft > ${a}-arrow`,`&-placement-bottomRight > ${a}-arrow`].join(",")]:{top:f,transform:"translateY(-100%)"},[`&-placement-bottom > ${a}-arrow`]:{left:{_skip_check_:!0,value:"50%"},transform:"translateX(-50%) translateY(-100%)"},"&-placement-bottomLeft":{"--arrow-offset-horizontal":c,[`> ${a}-arrow`]:{left:{_skip_check_:!0,value:c}}},"&-placement-bottomRight":{"--arrow-offset-horizontal":`calc(100% - ${We(c)})`,[`> ${a}-arrow`]:{right:{_skip_check_:!0,value:c}}}})),Cc(!!h.left,{[[`&-placement-left > ${a}-arrow`,`&-placement-leftTop > ${a}-arrow`,`&-placement-leftBottom > ${a}-arrow`].join(",")]:{right:{_skip_check_:!0,value:f},transform:"translateX(100%) rotate(90deg)"},[`&-placement-left > ${a}-arrow`]:{top:{_skip_check_:!0,value:"50%"},transform:"translateY(-50%) translateX(100%) rotate(90deg)"},[`&-placement-leftTop > ${a}-arrow`]:{top:s},[`&-placement-leftBottom > ${a}-arrow`]:{bottom:s}})),Cc(!!h.right,{[[`&-placement-right > ${a}-arrow`,`&-placement-rightTop > ${a}-arrow`,`&-placement-rightBottom > ${a}-arrow`].join(",")]:{left:{_skip_check_:!0,value:f},transform:"translateX(-100%) rotate(-90deg)"},[`&-placement-right > ${a}-arrow`]:{top:{_skip_check_:!0,value:"50%"},transform:"translateY(-50%) translateX(-100%) rotate(-90deg)"},[`&-placement-rightTop > ${a}-arrow`]:{top:s},[`&-placement-rightBottom > ${a}-arrow`]:{bottom:s}}))}}function YR(e,t,r,a){if(a===!1)return{adjustX:!1,adjustY:!1};const o=a&&typeof a=="object"?a:{},s={};switch(e){case"top":case"bottom":s.shiftX=t.arrowOffsetHorizontal*2+r,s.shiftY=!0,s.adjustY=!0;break;case"left":case"right":s.shiftY=t.arrowOffsetVertical*2+r,s.shiftX=!0,s.adjustX=!0;break}const c=Object.assign(Object.assign({},s),o);return c.shiftX||(c.adjustX=!0),c.shiftY||(c.adjustY=!0),c}const jb={left:{points:["cr","cl"]},right:{points:["cl","cr"]},top:{points:["bc","tc"]},bottom:{points:["tc","bc"]},topLeft:{points:["bl","tl"]},leftTop:{points:["tr","tl"]},topRight:{points:["br","tr"]},rightTop:{points:["tl","tr"]},bottomRight:{points:["tr","br"]},rightBottom:{points:["bl","br"]},bottomLeft:{points:["tl","bl"]},leftBottom:{points:["br","bl"]}},XR={topLeft:{points:["bl","tc"]},leftTop:{points:["tr","cl"]},topRight:{points:["br","tc"]},rightTop:{points:["tl","cr"]},bottomRight:{points:["tr","bc"]},rightBottom:{points:["bl","cr"]},bottomLeft:{points:["tl","bc"]},leftBottom:{points:["br","cl"]}},KR=new Set(["topLeft","topRight","bottomLeft","bottomRight","leftTop","leftBottom","rightTop","rightBottom"]);function QR(e){const{arrowWidth:t,autoAdjustOverflow:r,arrowPointAtCenter:a,offset:o,borderRadius:s}=e,c=t/2,f={};return Object.keys(jb).forEach(h=>{const d=a&&XR[h]||jb[h],g=Object.assign(Object.assign({},d),{offset:[0,0],dynamicInset:!0});switch(f[h]=g,KR.has(h)&&(g.autoArrow=!1),h){case"top":case"topLeft":case"topRight":g.offset[1]=-c-o;break;case"bottom":case"bottomLeft":case"bottomRight":g.offset[1]=c+o;break;case"left":case"leftTop":case"leftBottom":g.offset[0]=-c-o;break;case"right":case"rightTop":case"rightBottom":g.offset[0]=c+o;break}const v=tw({contentRadius:s,limitVerticalRadius:!0});if(a)switch(h){case"topLeft":case"bottomLeft":g.offset[0]=-v.arrowOffsetHorizontal-c;break;case"topRight":case"bottomRight":g.offset[0]=v.arrowOffsetHorizontal+c;break;case"leftTop":case"rightTop":g.offset[1]=-v.arrowOffsetHorizontal*2+c;break;case"leftBottom":case"rightBottom":g.offset[1]=v.arrowOffsetHorizontal*2-c;break}g.overflow=YR(h,v,t,r),g.htmlRegion="visibleFirst"}),f}const ZR=e=>{const{calc:t,componentCls:r,tooltipMaxWidth:a,tooltipColor:o,tooltipBg:s,tooltipBorderRadius:c,zIndexPopup:f,controlHeight:h,boxShadowSecondary:d,paddingSM:g,paddingXS:v,arrowOffsetHorizontal:y,sizePopupArrow:S}=e,w=t(c).add(S).add(y).equal(),A=t(c).mul(2).add(S).equal();return[{[r]:Object.assign(Object.assign(Object.assign(Object.assign({},mf(e)),{position:"absolute",zIndex:f,display:"block",width:"max-content",maxWidth:a,visibility:"visible","--valid-offset-x":"var(--arrow-offset-horizontal, var(--arrow-x))",transformOrigin:["var(--valid-offset-x, 50%)","var(--arrow-y, 50%)"].join(" "),"&-hidden":{display:"none"},"--antd-arrow-background-color":s,[`${r}-inner`]:{minWidth:A,minHeight:h,padding:`${We(e.calc(g).div(2).equal())} ${We(v)}`,color:o,textAlign:"start",textDecoration:"none",wordWrap:"break-word",backgroundColor:s,borderRadius:c,boxShadow:d,boxSizing:"border-box"},[["&-placement-topLeft","&-placement-topRight","&-placement-bottomLeft","&-placement-bottomRight"].join(",")]:{minWidth:w},[["&-placement-left","&-placement-leftTop","&-placement-leftBottom","&-placement-right","&-placement-rightTop","&-placement-rightBottom"].join(",")]:{[`${r}-inner`]:{borderRadius:e.min(c,ew)}},[`${r}-content`]:{position:"relative"}}),dC(e,(x,T)=>{let{darkColor:R}=T;return{[`&${r}-${x}`]:{[`${r}-inner`]:{backgroundColor:R},[`${r}-arrow`]:{"--antd-arrow-background-color":R}}}})),{"&-rtl":{direction:"rtl"}})},JR(e,"var(--antd-arrow-background-color)"),{[`${r}-pure`]:{position:"relative",maxWidth:"none",margin:e.sizePopupArrow}}]},eO=e=>Object.assign(Object.assign({zIndexPopup:e.zIndexPopupBase+70},tw({contentRadius:e.borderRadius,limitVerticalRadius:!0})),qR($n(e,{borderRadiusOuter:Math.min(e.borderRadiusOuter,4)}))),nw=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return Ha("Tooltip",a=>{const{borderRadius:o,colorTextLightSolid:s,colorBgSpotlight:c}=a,f=$n(a,{tooltipMaxWidth:250,tooltipColor:s,tooltipBorderRadius:o,tooltipBg:c});return[ZR(f),FT(a,"zoom-big-fast")]},eO,{resetStyle:!1,injectStyle:t})(e)},tO=no.map(e=>`${e}-inverse`),nO=["success","processing","error","default","warning"];function rw(e){return(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0)?[].concat(ze(tO),ze(no)).includes(e):no.includes(e)}function rO(e){return nO.includes(e)}function aw(e,t){const r=rw(t),a=Ee({[`${e}-${t}`]:t&&r}),o={},s={};return t&&!r&&(o.background=t,s["--antd-arrow-background-color"]=t),{className:a,overlayStyle:o,arrowStyle:s}}const aO=e=>{const{prefixCls:t,className:r,placement:a="top",title:o,color:s,overlayInnerStyle:c}=e,{getPrefixCls:f}=b.useContext(Kt),h=f("tooltip",t),[d,g,v]=nw(h),y=aw(h,s),S=y.arrowStyle,w=Object.assign(Object.assign({},c),y.overlayStyle),A=Ee(g,v,h,`${h}-pure`,`${h}-placement-${a}`,r,y.className);return d(b.createElement("div",{className:A,style:S},b.createElement("div",{className:`${h}-arrow`}),b.createElement(ZC,Object.assign({},e,{className:g,prefixCls:h,overlayInnerStyle:w}),o)))};var iO=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(r[a[o]]=e[a[o]]);return r};const oO=b.forwardRef((e,t)=>{var r,a;const{prefixCls:o,openClassName:s,getTooltipContainer:c,color:f,overlayInnerStyle:h,children:d,afterOpenChange:g,afterVisibleChange:v,destroyTooltipOnHide:y,arrow:S=!0,title:w,overlay:A,builtinPlacements:x,arrowPointAtCenter:T=!1,autoAdjustOverflow:R=!0,motion:O,getPopupContainer:j,placement:z="top",mouseEnterDelay:N=.1,mouseLeaveDelay:_=.1,overlayStyle:J,rootClassName:$,overlayClassName:B,styles:U,classNames:W}=e,K=iO(e,["prefixCls","openClassName","getTooltipContainer","color","overlayInnerStyle","children","afterOpenChange","afterVisibleChange","destroyTooltipOnHide","arrow","title","overlay","builtinPlacements","arrowPointAtCenter","autoAdjustOverflow","motion","getPopupContainer","placement","mouseEnterDelay","mouseLeaveDelay","overlayStyle","rootClassName","overlayClassName","styles","classNames"]),Y=!!S,[,G]=Si(),{getPopupContainer:P,getPrefixCls:k,direction:I,className:ne,style:C,classNames:F,styles:Q}=tu("tooltip"),M=KS(),H=b.useRef(null),le=()=>{var Re;(Re=H.current)===null||Re===void 0||Re.forceAlign()};b.useImperativeHandle(t,()=>{var Re,at;return{forceAlign:le,forcePopupAlign:()=>{M.deprecated(!1,"forcePopupAlign","forceAlign"),le()},nativeElement:(Re=H.current)===null||Re===void 0?void 0:Re.nativeElement,popupElement:(at=H.current)===null||at===void 0?void 0:at.popupElement}});const[oe,be]=hf(!1,{value:(r=e.open)!==null&&r!==void 0?r:e.visible,defaultValue:(a=e.defaultOpen)!==null&&a!==void 0?a:e.defaultVisible}),ue=!w&&!A&&w!==0,me=Re=>{var at,ut;be(ue?!1:Re),ue||((at=e.onOpenChange)===null||at===void 0||at.call(e,Re),(ut=e.onVisibleChange)===null||ut===void 0||ut.call(e,Re))},ge=b.useMemo(()=>{var Re,at;let ut=T;return typeof S=="object"&&(ut=(at=(Re=S.pointAtCenter)!==null&&Re!==void 0?Re:S.arrowPointAtCenter)!==null&&at!==void 0?at:T),x||QR({arrowPointAtCenter:ut,autoAdjustOverflow:R,arrowWidth:Y?G.sizePopupArrow:0,borderRadius:G.borderRadius,offset:G.marginXXS})},[T,S,x,G]),Pe=b.useMemo(()=>w===0?w:A||w||"",[A,w]),_e=b.createElement(Rg,{space:!0},typeof Pe=="function"?Pe():Pe),He=k("tooltip",o),Xe=k(),Ge=e["data-popover-inject"];let Me=oe;!("open"in e)&&!("visible"in e)&&ue&&(Me=!1);const rt=b.isValidElement(d)&&!MC(d)?d:b.createElement("span",null,d),Ve=rt.props,Ke=!Ve.className||typeof Ve.className=="string"?Ee(Ve.className,s||`${He}-open`):Ve.className,[Et,Be,st]=nw(He,!Ge),Ce=aw(He,f),Te=Ce.arrowStyle,qe=Ee(B,{[`${He}-rtl`]:I==="rtl"},Ce.className,$,Be,st,ne,F.root,W==null?void 0:W.root),re=Ee(F.body,W==null?void 0:W.body),[de,Se]=qA("Tooltip",K.zIndex),Ne=b.createElement(GR,Object.assign({},K,{zIndex:de,showArrow:Y,placement:z,mouseEnterDelay:N,mouseLeaveDelay:_,prefixCls:He,classNames:{root:qe,body:re},styles:{root:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},Te),Q.root),C),J),U==null?void 0:U.root),body:Object.assign(Object.assign(Object.assign(Object.assign({},Q.body),h),U==null?void 0:U.body),Ce.overlayStyle)},getTooltipContainer:j||c||P,ref:H,builtinPlacements:ge,overlay:_e,visible:Me,onVisibleChange:me,afterVisibleChange:g??v,arrowContent:b.createElement("span",{className:`${He}-arrow-content`}),motion:{motionName:iT(Xe,"zoom-big-fast",e.transitionName),motionDeadline:1e3},destroyTooltipOnHide:!!y}),Me?Gs(rt,{className:Ke}):rt);return Et(b.createElement(PC.Provider,{value:Se},Ne))}),iw=oO;iw._InternalPanelDoNotUseOrYouWillBeFired=aO;var lO=function(t,r){return b.createElement(zr,kt({},t,{ref:r,icon:j8}))},Hb=b.forwardRef(lO),sO=function(t,r){return b.createElement(zr,kt({},t,{ref:r,icon:R8}))},uO=b.forwardRef(sO);const ow=b.createContext({siderHook:{addSider:()=>null,removeSider:()=>null}}),cO=e=>{const{antCls:t,componentCls:r,colorText:a,footerBg:o,headerHeight:s,headerPadding:c,headerColor:f,footerPadding:h,fontSize:d,bodyBg:g,headerBg:v}=e;return{[r]:{display:"flex",flex:"auto",flexDirection:"column",minHeight:0,background:g,"&, *":{boxSizing:"border-box"},[`&${r}-has-sider`]:{flexDirection:"row",[`> ${r}, > ${r}-content`]:{width:0}},[`${r}-header, &${r}-footer`]:{flex:"0 0 auto"},"&-rtl":{direction:"rtl"}},[`${r}-header`]:{height:s,padding:c,color:f,lineHeight:We(s),background:v,[`${t}-menu`]:{lineHeight:"inherit"}},[`${r}-footer`]:{padding:h,color:a,fontSize:d,background:o},[`${r}-content`]:{flex:"auto",color:a,minHeight:0}}},lw=e=>{const{colorBgLayout:t,controlHeight:r,controlHeightLG:a,colorText:o,controlHeightSM:s,marginXXS:c,colorTextLightSolid:f,colorBgContainer:h}=e,d=a*1.25;return{colorBgHeader:"#001529",colorBgBody:t,colorBgTrigger:"#002140",bodyBg:t,headerBg:"#001529",headerHeight:r*2,headerPadding:`0 ${d}px`,headerColor:o,footerPadding:`${s}px ${d}px`,footerBg:t,siderBg:"#001529",triggerHeight:a+c*2,triggerBg:"#002140",triggerColor:f,zeroTriggerWidth:a,zeroTriggerHeight:a,lightSiderBg:h,lightTriggerBg:h,lightTriggerColor:o}},sw=[["colorBgBody","bodyBg"],["colorBgHeader","headerBg"],["colorBgTrigger","triggerBg"]],uw=Ha("Layout",e=>[cO(e)],lw,{deprecatedTokens:sw}),fO=e=>{const{componentCls:t,siderBg:r,motionDurationMid:a,motionDurationSlow:o,antCls:s,triggerHeight:c,triggerColor:f,triggerBg:h,headerHeight:d,zeroTriggerWidth:g,zeroTriggerHeight:v,borderRadiusLG:y,lightSiderBg:S,lightTriggerColor:w,lightTriggerBg:A,bodyBg:x}=e;return{[t]:{position:"relative",minWidth:0,background:r,transition:`all ${a}, background 0s`,"&-has-trigger":{paddingBottom:c},"&-right":{order:1},[`${t}-children`]:{height:"100%",marginTop:-.1,paddingTop:.1,[`${s}-menu${s}-menu-inline-collapsed`]:{width:"auto"}},[`&-zero-width ${t}-children`]:{overflow:"hidden"},[`${t}-trigger`]:{position:"fixed",bottom:0,zIndex:1,height:c,color:f,lineHeight:We(c),textAlign:"center",background:h,cursor:"pointer",transition:`all ${a}`},[`${t}-zero-width-trigger`]:{position:"absolute",top:d,insetInlineEnd:e.calc(g).mul(-1).equal(),zIndex:1,width:g,height:v,color:f,fontSize:e.fontSizeXL,display:"flex",alignItems:"center",justifyContent:"center",background:r,borderRadius:`0 ${We(y)} ${We(y)} 0`,cursor:"pointer",transition:`background ${o} ease`,"&::after":{position:"absolute",inset:0,background:"transparent",transition:`all ${o}`,content:'""'},"&:hover::after":{background:"rgba(255, 255, 255, 0.2)"},"&-right":{insetInlineStart:e.calc(g).mul(-1).equal(),borderRadius:`${We(y)} 0 0 ${We(y)}`}},"&-light":{background:S,[`${t}-trigger`]:{color:w,background:A},[`${t}-zero-width-trigger`]:{color:w,background:A,border:`1px solid ${x}`,borderInlineStart:0}}}}},dO=Ha(["Layout","Sider"],e=>[fO(e)],lw,{deprecatedTokens:sw});var hO=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(r[a[o]]=e[a[o]]);return r};const Bb={xs:"479.98px",sm:"575.98px",md:"767.98px",lg:"991.98px",xl:"1199.98px",xxl:"1599.98px"},mO=e=>!Number.isNaN(Number.parseFloat(e))&&isFinite(e),cw=b.createContext({}),gO=(()=>{let e=0;return function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return e+=1,`${t}${e}`}})(),fw=b.forwardRef((e,t)=>{const{prefixCls:r,className:a,trigger:o,children:s,defaultCollapsed:c=!1,theme:f="dark",style:h={},collapsible:d=!1,reverseArrow:g=!1,width:v=200,collapsedWidth:y=80,zeroWidthTriggerStyle:S,breakpoint:w,onCollapse:A,onBreakpoint:x}=e,T=hO(e,["prefixCls","className","trigger","children","defaultCollapsed","theme","style","collapsible","reverseArrow","width","collapsedWidth","zeroWidthTriggerStyle","breakpoint","onCollapse","onBreakpoint"]),{siderHook:R}=b.useContext(ow),[O,j]=b.useState("collapsed"in e?e.collapsed:c),[z,N]=b.useState(!1);b.useEffect(()=>{"collapsed"in e&&j(e.collapsed)},[e.collapsed]);const _=(ue,me)=>{"collapsed"in e||j(ue),A==null||A(ue,me)},{getPrefixCls:J,direction:$}=b.useContext(Kt),B=J("layout-sider",r),[U,W,K]=dO(B),Y=b.useRef(null);Y.current=ue=>{N(ue.matches),x==null||x(ue.matches),O!==ue.matches&&_(ue.matches,"responsive")},b.useEffect(()=>{function ue(ge){return Y.current(ge)}let me;if(typeof window<"u"){const{matchMedia:ge}=window;if(ge&&w&&w in Bb){me=ge(`screen and (max-width: ${Bb[w]})`);try{me.addEventListener("change",ue)}catch{me.addListener(ue)}ue(me)}}return()=>{try{me==null||me.removeEventListener("change",ue)}catch{me==null||me.removeListener(ue)}}},[w]),b.useEffect(()=>{const ue=gO("ant-sider-");return R.addSider(ue),()=>R.removeSider(ue)},[]);const G=()=>{_(!O,"clickTrigger")},P=yl(T,["collapsed"]),k=O?y:v,I=mO(k)?`${k}px`:String(k),ne=parseFloat(String(y||0))===0?b.createElement("span",{onClick:G,className:Ee(`${B}-zero-width-trigger`,`${B}-zero-width-trigger-${g?"right":"left"}`),style:S},o||b.createElement(uO,null)):null,C=$==="rtl"==!g,M={expanded:C?b.createElement(cb,null):b.createElement(Hb,null),collapsed:C?b.createElement(Hb,null):b.createElement(cb,null)}[O?"collapsed":"expanded"],H=o!==null?ne||b.createElement("div",{className:`${B}-trigger`,onClick:G,style:{width:I}},o||M):null,le=Object.assign(Object.assign({},h),{flex:`0 0 ${I}`,maxWidth:I,minWidth:I,width:I}),oe=Ee(B,`${B}-${f}`,{[`${B}-collapsed`]:!!O,[`${B}-has-trigger`]:d&&o!==null&&!ne,[`${B}-below`]:!!z,[`${B}-zero-width`]:parseFloat(I)===0},a,W,K),be=b.useMemo(()=>({siderCollapsed:O}),[O]);return U(b.createElement(cw.Provider,{value:be},b.createElement("aside",Object.assign({className:oe},P,{style:le,ref:t}),b.createElement("div",{className:`${B}-children`},s),d||z&&ne?H:null)))});function xf(e){return $n(e,{inputAffixPadding:e.paddingXXS})}const Ef=e=>{const{controlHeight:t,fontSize:r,lineHeight:a,lineWidth:o,controlHeightSM:s,controlHeightLG:c,fontSizeLG:f,lineHeightLG:h,paddingSM:d,controlPaddingHorizontalSM:g,controlPaddingHorizontal:v,colorFillAlter:y,colorPrimaryHover:S,colorPrimary:w,controlOutlineWidth:A,controlOutline:x,colorErrorOutline:T,colorWarningOutline:R,colorBgContainer:O,inputFontSize:j,inputFontSizeLG:z,inputFontSizeSM:N}=e,_=j||r,J=N||_,$=z||f,B=Math.round((t-_*a)/2*10)/10-o,U=Math.round((s-J*a)/2*10)/10-o,W=Math.ceil((c-$*h)/2*10)/10-o;return{paddingBlock:Math.max(B,0),paddingBlockSM:Math.max(U,0),paddingBlockLG:Math.max(W,0),paddingInline:d-o,paddingInlineSM:g-o,paddingInlineLG:v-o,addonBg:y,activeBorderColor:w,hoverBorderColor:S,activeShadow:`0 0 0 ${A}px ${x}`,errorActiveShadow:`0 0 0 ${A}px ${T}`,warningActiveShadow:`0 0 0 ${A}px ${R}`,hoverBg:O,activeBg:O,inputFontSize:_,inputFontSizeLG:$,inputFontSizeSM:J}},pO=e=>({borderColor:e.hoverBorderColor,backgroundColor:e.hoverBg}),mp=e=>({color:e.colorTextDisabled,backgroundColor:e.colorBgContainerDisabled,borderColor:e.colorBorder,boxShadow:"none",cursor:"not-allowed",opacity:1,"input[disabled], textarea[disabled]":{cursor:"not-allowed"},"&:hover:not([disabled])":Object.assign({},pO($n(e,{hoverBorderColor:e.colorBorder,hoverBg:e.colorBgContainerDisabled})))}),dw=(e,t)=>({background:e.colorBgContainer,borderWidth:e.lineWidth,borderStyle:e.lineType,borderColor:t.borderColor,"&:hover":{borderColor:t.hoverBorderColor,backgroundColor:e.hoverBg},"&:focus, &:focus-within":{borderColor:t.activeBorderColor,boxShadow:t.activeShadow,outline:0,backgroundColor:e.activeBg}}),Fb=(e,t)=>({[`&${e.componentCls}-status-${t.status}:not(${e.componentCls}-disabled)`]:Object.assign(Object.assign({},dw(e,t)),{[`${e.componentCls}-prefix, ${e.componentCls}-suffix`]:{color:t.affixColor}}),[`&${e.componentCls}-status-${t.status}${e.componentCls}-disabled`]:{borderColor:t.borderColor}}),vO=(e,t)=>({"&-outlined":Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},dw(e,{borderColor:e.colorBorder,hoverBorderColor:e.hoverBorderColor,activeBorderColor:e.activeBorderColor,activeShadow:e.activeShadow})),{[`&${e.componentCls}-disabled, &[disabled]`]:Object.assign({},mp(e))}),Fb(e,{status:"error",borderColor:e.colorError,hoverBorderColor:e.colorErrorBorderHover,activeBorderColor:e.colorError,activeShadow:e.errorActiveShadow,affixColor:e.colorError})),Fb(e,{status:"warning",borderColor:e.colorWarning,hoverBorderColor:e.colorWarningBorderHover,activeBorderColor:e.colorWarning,activeShadow:e.warningActiveShadow,affixColor:e.colorWarning})),t)}),Ib=(e,t)=>({[`&${e.componentCls}-group-wrapper-status-${t.status}`]:{[`${e.componentCls}-group-addon`]:{borderColor:t.addonBorderColor,color:t.addonColor}}}),yO=e=>({"&-outlined":Object.assign(Object.assign(Object.assign({[`${e.componentCls}-group`]:{"&-addon":{background:e.addonBg,border:`${We(e.lineWidth)} ${e.lineType} ${e.colorBorder}`},"&-addon:first-child":{borderInlineEnd:0},"&-addon:last-child":{borderInlineStart:0}}},Ib(e,{status:"error",addonBorderColor:e.colorError,addonColor:e.colorErrorText})),Ib(e,{status:"warning",addonBorderColor:e.colorWarning,addonColor:e.colorWarningText})),{[`&${e.componentCls}-group-wrapper-disabled`]:{[`${e.componentCls}-group-addon`]:Object.assign({},mp(e))}})}),bO=(e,t)=>{const{componentCls:r}=e;return{"&-borderless":Object.assign({background:"transparent",border:"none","&:focus, &:focus-within":{outline:"none"},[`&${r}-disabled, &[disabled]`]:{color:e.colorTextDisabled,cursor:"not-allowed"},[`&${r}-status-error`]:{"&, & input, & textarea":{color:e.colorError}},[`&${r}-status-warning`]:{"&, & input, & textarea":{color:e.colorWarning}}},t)}},hw=(e,t)=>({background:t.bg,borderWidth:e.lineWidth,borderStyle:e.lineType,borderColor:"transparent","input&, & input, textarea&, & textarea":{color:t==null?void 0:t.inputColor},"&:hover":{background:t.hoverBg},"&:focus, &:focus-within":{outline:0,borderColor:t.activeBorderColor,backgroundColor:e.activeBg}}),Vb=(e,t)=>({[`&${e.componentCls}-status-${t.status}:not(${e.componentCls}-disabled)`]:Object.assign(Object.assign({},hw(e,t)),{[`${e.componentCls}-prefix, ${e.componentCls}-suffix`]:{color:t.affixColor}})}),SO=(e,t)=>({"&-filled":Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},hw(e,{bg:e.colorFillTertiary,hoverBg:e.colorFillSecondary,activeBorderColor:e.activeBorderColor})),{[`&${e.componentCls}-disabled, &[disabled]`]:Object.assign({},mp(e))}),Vb(e,{status:"error",bg:e.colorErrorBg,hoverBg:e.colorErrorBgHover,activeBorderColor:e.colorError,inputColor:e.colorErrorText,affixColor:e.colorError})),Vb(e,{status:"warning",bg:e.colorWarningBg,hoverBg:e.colorWarningBgHover,activeBorderColor:e.colorWarning,inputColor:e.colorWarningText,affixColor:e.colorWarning})),t)}),Ub=(e,t)=>({[`&${e.componentCls}-group-wrapper-status-${t.status}`]:{[`${e.componentCls}-group-addon`]:{background:t.addonBg,color:t.addonColor}}}),CO=e=>({"&-filled":Object.assign(Object.assign(Object.assign({[`${e.componentCls}-group`]:{"&-addon":{background:e.colorFillTertiary},[`${e.componentCls}-filled:not(:focus):not(:focus-within)`]:{"&:not(:first-child)":{borderInlineStart:`${We(e.lineWidth)} ${e.lineType} ${e.colorSplit}`},"&:not(:last-child)":{borderInlineEnd:`${We(e.lineWidth)} ${e.lineType} ${e.colorSplit}`}}}},Ub(e,{status:"error",addonBg:e.colorErrorBg,addonColor:e.colorErrorText})),Ub(e,{status:"warning",addonBg:e.colorWarningBg,addonColor:e.colorWarningText})),{[`&${e.componentCls}-group-wrapper-disabled`]:{[`${e.componentCls}-group`]:{"&-addon":{background:e.colorFillTertiary,color:e.colorTextDisabled},"&-addon:first-child":{borderInlineStart:`${We(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,borderTop:`${We(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,borderBottom:`${We(e.lineWidth)} ${e.lineType} ${e.colorBorder}`},"&-addon:last-child":{borderInlineEnd:`${We(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,borderTop:`${We(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,borderBottom:`${We(e.lineWidth)} ${e.lineType} ${e.colorBorder}`}}}})}),mw=(e,t)=>({background:e.colorBgContainer,borderWidth:`${We(e.lineWidth)} 0`,borderStyle:`${e.lineType} none`,borderColor:`transparent transparent ${t.borderColor} transparent`,borderRadius:0,"&:hover":{borderColor:`transparent transparent ${t.borderColor} transparent`,backgroundColor:e.hoverBg},"&:focus, &:focus-within":{borderColor:`transparent transparent ${t.borderColor} transparent`,outline:0,backgroundColor:e.activeBg}}),Gb=(e,t)=>({[`&${e.componentCls}-status-${t.status}:not(${e.componentCls}-disabled)`]:Object.assign(Object.assign({},mw(e,t)),{[`${e.componentCls}-prefix, ${e.componentCls}-suffix`]:{color:t.affixColor}}),[`&${e.componentCls}-status-${t.status}${e.componentCls}-disabled`]:{borderColor:`transparent transparent ${t.borderColor} transparent`}}),wO=(e,t)=>({"&-underlined":Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},mw(e,{borderColor:e.colorBorder,hoverBorderColor:e.hoverBorderColor,activeBorderColor:e.activeBorderColor,activeShadow:e.activeShadow})),{[`&${e.componentCls}-disabled, &[disabled]`]:{color:e.colorTextDisabled,boxShadow:"none",cursor:"not-allowed","&:hover":{borderColor:`transparent transparent ${e.colorBorder} transparent`}},"input[disabled], textarea[disabled]":{cursor:"not-allowed"}}),Gb(e,{status:"error",borderColor:e.colorError,hoverBorderColor:e.colorErrorBorderHover,activeBorderColor:e.colorError,activeShadow:e.errorActiveShadow,affixColor:e.colorError})),Gb(e,{status:"warning",borderColor:e.colorWarning,hoverBorderColor:e.colorWarningBorderHover,activeBorderColor:e.colorWarning,activeShadow:e.warningActiveShadow,affixColor:e.colorWarning})),t)}),xO=e=>({"&::-moz-placeholder":{opacity:1},"&::placeholder":{color:e,userSelect:"none"},"&:placeholder-shown":{textOverflow:"ellipsis"}}),gw=e=>{const{paddingBlockLG:t,lineHeightLG:r,borderRadiusLG:a,paddingInlineLG:o}=e;return{padding:`${We(t)} ${We(o)}`,fontSize:e.inputFontSizeLG,lineHeight:r,borderRadius:a}},pw=e=>({padding:`${We(e.paddingBlockSM)} ${We(e.paddingInlineSM)}`,fontSize:e.inputFontSizeSM,borderRadius:e.borderRadiusSM}),vw=e=>Object.assign(Object.assign({position:"relative",display:"inline-block",width:"100%",minWidth:0,padding:`${We(e.paddingBlock)} ${We(e.paddingInline)}`,color:e.colorText,fontSize:e.inputFontSize,lineHeight:e.lineHeight,borderRadius:e.borderRadius,transition:`all ${e.motionDurationMid}`},xO(e.colorTextPlaceholder)),{"textarea&":{maxWidth:"100%",height:"auto",minHeight:e.controlHeight,lineHeight:e.lineHeight,verticalAlign:"bottom",transition:`all ${e.motionDurationSlow}, height 0s`,resize:"vertical"},"&-lg":Object.assign({},gw(e)),"&-sm":Object.assign({},pw(e)),"&-rtl, &-textarea-rtl":{direction:"rtl"}}),EO=e=>{const{componentCls:t,antCls:r}=e;return{position:"relative",display:"table",width:"100%",borderCollapse:"separate",borderSpacing:0,"&[class*='col-']":{paddingInlineEnd:e.paddingXS,"&:last-child":{paddingInlineEnd:0}},[`&-lg ${t}, &-lg > ${t}-group-addon`]:Object.assign({},gw(e)),[`&-sm ${t}, &-sm > ${t}-group-addon`]:Object.assign({},pw(e)),[`&-lg ${r}-select-single ${r}-select-selector`]:{height:e.controlHeightLG},[`&-sm ${r}-select-single ${r}-select-selector`]:{height:e.controlHeightSM},[`> ${t}`]:{display:"table-cell","&:not(:first-child):not(:last-child)":{borderRadius:0}},[`${t}-group`]:{"&-addon, &-wrap":{display:"table-cell",width:1,whiteSpace:"nowrap",verticalAlign:"middle","&:not(:first-child):not(:last-child)":{borderRadius:0}},"&-wrap > *":{display:"block !important"},"&-addon":{position:"relative",padding:`0 ${We(e.paddingInline)}`,color:e.colorText,fontWeight:"normal",fontSize:e.inputFontSize,textAlign:"center",borderRadius:e.borderRadius,transition:`all ${e.motionDurationSlow}`,lineHeight:1,[`${r}-select`]:{margin:`${We(e.calc(e.paddingBlock).add(1).mul(-1).equal())} ${We(e.calc(e.paddingInline).mul(-1).equal())}`,[`&${r}-select-single:not(${r}-select-customize-input):not(${r}-pagination-size-changer)`]:{[`${r}-select-selector`]:{backgroundColor:"inherit",border:`${We(e.lineWidth)} ${e.lineType} transparent`,boxShadow:"none"}}},[`${r}-cascader-picker`]:{margin:`-9px ${We(e.calc(e.paddingInline).mul(-1).equal())}`,backgroundColor:"transparent",[`${r}-cascader-input`]:{textAlign:"start",border:0,boxShadow:"none"}}}},[t]:{width:"100%",marginBottom:0,textAlign:"inherit","&:focus":{zIndex:1,borderInlineEndWidth:1},"&:hover":{zIndex:1,borderInlineEndWidth:1,[`${t}-search-with-button &`]:{zIndex:0}}},[`> ${t}:first-child, ${t}-group-addon:first-child`]:{borderStartEndRadius:0,borderEndEndRadius:0,[`${r}-select ${r}-select-selector`]:{borderStartEndRadius:0,borderEndEndRadius:0}},[`> ${t}-affix-wrapper`]:{[`&:not(:first-child) ${t}`]:{borderStartStartRadius:0,borderEndStartRadius:0},[`&:not(:last-child) ${t}`]:{borderStartEndRadius:0,borderEndEndRadius:0}},[`> ${t}:last-child, ${t}-group-addon:last-child`]:{borderStartStartRadius:0,borderEndStartRadius:0,[`${r}-select ${r}-select-selector`]:{borderStartStartRadius:0,borderEndStartRadius:0}},[`${t}-affix-wrapper`]:{"&:not(:last-child)":{borderStartEndRadius:0,borderEndEndRadius:0,[`${t}-search &`]:{borderStartStartRadius:e.borderRadius,borderEndStartRadius:e.borderRadius}},[`&:not(:first-child), ${t}-search &:not(:first-child)`]:{borderStartStartRadius:0,borderEndStartRadius:0}},[`&${t}-group-compact`]:Object.assign(Object.assign({display:"block"},L9()),{[`${t}-group-addon, ${t}-group-wrap, > ${t}`]:{"&:not(:first-child):not(:last-child)":{borderInlineEndWidth:e.lineWidth,"&:hover, &:focus":{zIndex:1}}},"& > *":{display:"inline-flex",float:"none",verticalAlign:"top",borderRadius:0},[`
        & > ${t}-affix-wrapper,
        & > ${t}-number-affix-wrapper,
        & > ${r}-picker-range
      `]:{display:"inline-flex"},"& > *:not(:last-child)":{marginInlineEnd:e.calc(e.lineWidth).mul(-1).equal(),borderInlineEndWidth:e.lineWidth},[t]:{float:"none"},[`& > ${r}-select > ${r}-select-selector,
      & > ${r}-select-auto-complete ${t},
      & > ${r}-cascader-picker ${t},
      & > ${t}-group-wrapper ${t}`]:{borderInlineEndWidth:e.lineWidth,borderRadius:0,"&:hover, &:focus":{zIndex:1}},[`& > ${r}-select-focused`]:{zIndex:1},[`& > ${r}-select > ${r}-select-arrow`]:{zIndex:1},[`& > *:first-child,
      & > ${r}-select:first-child > ${r}-select-selector,
      & > ${r}-select-auto-complete:first-child ${t},
      & > ${r}-cascader-picker:first-child ${t}`]:{borderStartStartRadius:e.borderRadius,borderEndStartRadius:e.borderRadius},[`& > *:last-child,
      & > ${r}-select:last-child > ${r}-select-selector,
      & > ${r}-cascader-picker:last-child ${t},
      & > ${r}-cascader-picker-focused:last-child ${t}`]:{borderInlineEndWidth:e.lineWidth,borderStartEndRadius:e.borderRadius,borderEndEndRadius:e.borderRadius},[`& > ${r}-select-auto-complete ${t}`]:{verticalAlign:"top"},[`${t}-group-wrapper + ${t}-group-wrapper`]:{marginInlineStart:e.calc(e.lineWidth).mul(-1).equal(),[`${t}-affix-wrapper`]:{borderRadius:0}},[`${t}-group-wrapper:not(:last-child)`]:{[`&${t}-search > ${t}-group`]:{[`& > ${t}-group-addon > ${t}-search-button`]:{borderRadius:0},[`& > ${t}`]:{borderStartStartRadius:e.borderRadius,borderStartEndRadius:0,borderEndEndRadius:0,borderEndStartRadius:e.borderRadius}}}})}},AO=e=>{const{componentCls:t,controlHeightSM:r,lineWidth:a,calc:o}=e,c=o(r).sub(o(a).mul(2)).sub(16).div(2).equal();return{[t]:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},mf(e)),vw(e)),vO(e)),SO(e)),bO(e)),wO(e)),{'&[type="color"]':{height:e.controlHeight,[`&${t}-lg`]:{height:e.controlHeightLG},[`&${t}-sm`]:{height:r,paddingTop:c,paddingBottom:c}},'&[type="search"]::-webkit-search-cancel-button, &[type="search"]::-webkit-search-decoration':{"-webkit-appearance":"none"}})}},TO=e=>{const{componentCls:t}=e;return{[`${t}-clear-icon`]:{margin:0,padding:0,lineHeight:0,color:e.colorTextQuaternary,fontSize:e.fontSizeIcon,verticalAlign:-1,cursor:"pointer",transition:`color ${e.motionDurationSlow}`,border:"none",outline:"none",backgroundColor:"transparent","&:hover":{color:e.colorTextTertiary},"&:active":{color:e.colorText},"&-hidden":{visibility:"hidden"},"&-has-suffix":{margin:`0 ${We(e.inputAffixPadding)}`}}}},RO=e=>{const{componentCls:t,inputAffixPadding:r,colorTextDescription:a,motionDurationSlow:o,colorIcon:s,colorIconHover:c,iconCls:f}=e,h=`${t}-affix-wrapper`,d=`${t}-affix-wrapper-disabled`;return{[h]:Object.assign(Object.assign(Object.assign(Object.assign({},vw(e)),{display:"inline-flex",[`&:not(${t}-disabled):hover`]:{zIndex:1,[`${t}-search-with-button &`]:{zIndex:0}},"&-focused, &:focus":{zIndex:1},[`> input${t}`]:{padding:0},[`> input${t}, > textarea${t}`]:{fontSize:"inherit",border:"none",borderRadius:0,outline:"none",background:"transparent",color:"inherit","&::-ms-reveal":{display:"none"},"&:focus":{boxShadow:"none !important"}},"&::before":{display:"inline-block",width:0,visibility:"hidden",content:'"\\a0"'},[t]:{"&-prefix, &-suffix":{display:"flex",flex:"none",alignItems:"center","> *:not(:last-child)":{marginInlineEnd:e.paddingXS}},"&-show-count-suffix":{color:a},"&-show-count-has-suffix":{marginInlineEnd:e.paddingXXS},"&-prefix":{marginInlineEnd:r},"&-suffix":{marginInlineStart:r}}}),TO(e)),{[`${f}${t}-password-icon`]:{color:s,cursor:"pointer",transition:`all ${o}`,"&:hover":{color:c}}}),[`${t}-underlined`]:{borderRadius:0},[d]:{[`${f}${t}-password-icon`]:{color:s,cursor:"not-allowed","&:hover":{color:s}}}}},OO=e=>{const{componentCls:t,borderRadiusLG:r,borderRadiusSM:a}=e;return{[`${t}-group`]:Object.assign(Object.assign(Object.assign({},mf(e)),EO(e)),{"&-rtl":{direction:"rtl"},"&-wrapper":Object.assign(Object.assign(Object.assign({display:"inline-block",width:"100%",textAlign:"start",verticalAlign:"top","&-rtl":{direction:"rtl"},"&-lg":{[`${t}-group-addon`]:{borderRadius:r,fontSize:e.inputFontSizeLG}},"&-sm":{[`${t}-group-addon`]:{borderRadius:a}}},yO(e)),CO(e)),{[`&:not(${t}-compact-first-item):not(${t}-compact-last-item)${t}-compact-item`]:{[`${t}, ${t}-group-addon`]:{borderRadius:0}},[`&:not(${t}-compact-last-item)${t}-compact-first-item`]:{[`${t}, ${t}-group-addon`]:{borderStartEndRadius:0,borderEndEndRadius:0}},[`&:not(${t}-compact-first-item)${t}-compact-last-item`]:{[`${t}, ${t}-group-addon`]:{borderStartStartRadius:0,borderEndStartRadius:0}},[`&:not(${t}-compact-last-item)${t}-compact-item`]:{[`${t}-affix-wrapper`]:{borderStartEndRadius:0,borderEndEndRadius:0}},[`&:not(${t}-compact-first-item)${t}-compact-item`]:{[`${t}-affix-wrapper`]:{borderStartStartRadius:0,borderEndStartRadius:0}}})})}},MO=e=>{const{componentCls:t,antCls:r}=e,a=`${t}-search`;return{[a]:{[t]:{"&:hover, &:focus":{[`+ ${t}-group-addon ${a}-button:not(${r}-btn-primary)`]:{borderInlineStartColor:e.colorPrimaryHover}}},[`${t}-affix-wrapper`]:{height:e.controlHeight,borderRadius:0},[`${t}-lg`]:{lineHeight:e.calc(e.lineHeightLG).sub(2e-4).equal()},[`> ${t}-group`]:{[`> ${t}-group-addon:last-child`]:{insetInlineStart:-1,padding:0,border:0,[`${a}-button`]:{marginInlineEnd:-1,borderStartStartRadius:0,borderEndStartRadius:0,boxShadow:"none"},[`${a}-button:not(${r}-btn-primary)`]:{color:e.colorTextDescription,"&:hover":{color:e.colorPrimaryHover},"&:active":{color:e.colorPrimaryActive},[`&${r}-btn-loading::before`]:{insetInlineStart:0,insetInlineEnd:0,insetBlockStart:0,insetBlockEnd:0}}}},[`${a}-button`]:{height:e.controlHeight,"&:hover, &:focus":{zIndex:1}},"&-large":{[`${t}-affix-wrapper, ${a}-button`]:{height:e.controlHeightLG}},"&-small":{[`${t}-affix-wrapper, ${a}-button`]:{height:e.controlHeightSM}},"&-rtl":{direction:"rtl"},[`&${t}-compact-item`]:{[`&:not(${t}-compact-last-item)`]:{[`${t}-group-addon`]:{[`${t}-search-button`]:{marginInlineEnd:e.calc(e.lineWidth).mul(-1).equal(),borderRadius:0}}},[`&:not(${t}-compact-first-item)`]:{[`${t},${t}-affix-wrapper`]:{borderRadius:0}},[`> ${t}-group-addon ${t}-search-button,
        > ${t},
        ${t}-affix-wrapper`]:{"&:hover, &:focus, &:active":{zIndex:2}},[`> ${t}-affix-wrapper-focused`]:{zIndex:2}}}}},NO=e=>{const{componentCls:t}=e;return{[`${t}-out-of-range`]:{[`&, & input, & textarea, ${t}-show-count-suffix, ${t}-data-count`]:{color:e.colorError}}}},yw=Ha(["Input","Shared"],e=>{const t=$n(e,xf(e));return[AO(t),RO(t)]},Ef,{resetFont:!1}),bw=Ha(["Input","Component"],e=>{const t=$n(e,xf(e));return[OO(t),MO(t),NO(t),IC(t)]},Ef,{resetFont:!1});function DO(e){return!!(e.addonBefore||e.addonAfter)}function PO(e){return!!(e.prefix||e.suffix||e.allowClear)}function qb(e,t,r){var a=t.cloneNode(!0),o=Object.create(e,{target:{value:a},currentTarget:{value:a}});return a.value=r,typeof t.selectionStart=="number"&&typeof t.selectionEnd=="number"&&(a.selectionStart=t.selectionStart,a.selectionEnd=t.selectionEnd),a.setSelectionRange=function(){t.setSelectionRange.apply(t,arguments)},o}function Yc(e,t,r,a){if(r){var o=t;if(t.type==="click"){o=qb(t,e,""),r(o);return}if(e.type!=="file"&&a!==void 0){o=qb(t,e,a),r(o);return}r(o)}}function Sw(e,t){if(e){e.focus(t);var r=t||{},a=r.cursor;if(a){var o=e.value.length;switch(a){case"start":e.setSelectionRange(0,0);break;case"end":e.setSelectionRange(o,o);break;default:e.setSelectionRange(0,o)}}}}var Cw=ve.forwardRef(function(e,t){var r,a,o,s=e.inputElement,c=e.children,f=e.prefixCls,h=e.prefix,d=e.suffix,g=e.addonBefore,v=e.addonAfter,y=e.className,S=e.style,w=e.disabled,A=e.readOnly,x=e.focused,T=e.triggerFocus,R=e.allowClear,O=e.value,j=e.handleReset,z=e.hidden,N=e.classes,_=e.classNames,J=e.dataAttrs,$=e.styles,B=e.components,U=e.onClear,W=c??s,K=(B==null?void 0:B.affixWrapper)||"span",Y=(B==null?void 0:B.groupWrapper)||"span",G=(B==null?void 0:B.wrapper)||"span",P=(B==null?void 0:B.groupAddon)||"span",k=b.useRef(null),I=function(Ge){var Me;(Me=k.current)!==null&&Me!==void 0&&Me.contains(Ge.target)&&(T==null||T())},ne=PO(e),C=b.cloneElement(W,{value:O,className:Ee((r=W.props)===null||r===void 0?void 0:r.className,!ne&&(_==null?void 0:_.variant))||null}),F=b.useRef(null);if(ve.useImperativeHandle(t,function(){return{nativeElement:F.current||k.current}}),ne){var Q=null;if(R){var M=!w&&!A&&O,H="".concat(f,"-clear-icon"),le=je(R)==="object"&&R!==null&&R!==void 0&&R.clearIcon?R.clearIcon:"✖";Q=ve.createElement("button",{type:"button",tabIndex:-1,onClick:function(Ge){j==null||j(Ge),U==null||U()},onMouseDown:function(Ge){return Ge.preventDefault()},className:Ee(H,ee(ee({},"".concat(H,"-hidden"),!M),"".concat(H,"-has-suffix"),!!d))},le)}var oe="".concat(f,"-affix-wrapper"),be=Ee(oe,ee(ee(ee(ee(ee({},"".concat(f,"-disabled"),w),"".concat(oe,"-disabled"),w),"".concat(oe,"-focused"),x),"".concat(oe,"-readonly"),A),"".concat(oe,"-input-with-clear-btn"),d&&R&&O),N==null?void 0:N.affixWrapper,_==null?void 0:_.affixWrapper,_==null?void 0:_.variant),ue=(d||R)&&ve.createElement("span",{className:Ee("".concat(f,"-suffix"),_==null?void 0:_.suffix),style:$==null?void 0:$.suffix},Q,d);C=ve.createElement(K,kt({className:be,style:$==null?void 0:$.affixWrapper,onClick:I},J==null?void 0:J.affixWrapper,{ref:k}),h&&ve.createElement("span",{className:Ee("".concat(f,"-prefix"),_==null?void 0:_.prefix),style:$==null?void 0:$.prefix},h),C,ue)}if(DO(e)){var me="".concat(f,"-group"),ge="".concat(me,"-addon"),Pe="".concat(me,"-wrapper"),_e=Ee("".concat(f,"-wrapper"),me,N==null?void 0:N.wrapper,_==null?void 0:_.wrapper),He=Ee(Pe,ee({},"".concat(Pe,"-disabled"),w),N==null?void 0:N.group,_==null?void 0:_.groupWrapper);C=ve.createElement(Y,{className:He,ref:F},ve.createElement(G,{className:_e},g&&ve.createElement(P,{className:ge},g),C,v&&ve.createElement(P,{className:ge},v)))}return ve.cloneElement(C,{className:Ee((a=C.props)===null||a===void 0?void 0:a.className,y)||null,style:ie(ie({},(o=C.props)===null||o===void 0?void 0:o.style),S),hidden:z})}),zO=["show"];function ww(e,t){return b.useMemo(function(){var r={};t&&(r.show=je(t)==="object"&&t.formatter?t.formatter:!!t),r=ie(ie({},r),e);var a=r,o=a.show,s=Tn(a,zO);return ie(ie({},s),{},{show:!!o,showFormatter:typeof o=="function"?o:void 0,strategy:s.strategy||function(c){return c.length}})},[e,t])}var _O=["autoComplete","onChange","onFocus","onBlur","onPressEnter","onKeyDown","onKeyUp","prefixCls","disabled","htmlSize","className","maxLength","suffix","showCount","count","type","classes","classNames","styles","onCompositionStart","onCompositionEnd"],$O=b.forwardRef(function(e,t){var r=e.autoComplete,a=e.onChange,o=e.onFocus,s=e.onBlur,c=e.onPressEnter,f=e.onKeyDown,h=e.onKeyUp,d=e.prefixCls,g=d===void 0?"rc-input":d,v=e.disabled,y=e.htmlSize,S=e.className,w=e.maxLength,A=e.suffix,x=e.showCount,T=e.count,R=e.type,O=R===void 0?"text":R,j=e.classes,z=e.classNames,N=e.styles,_=e.onCompositionStart,J=e.onCompositionEnd,$=Tn(e,_O),B=b.useState(!1),U=ye(B,2),W=U[0],K=U[1],Y=b.useRef(!1),G=b.useRef(!1),P=b.useRef(null),k=b.useRef(null),I=function(Te){P.current&&Sw(P.current,Te)},ne=hf(e.defaultValue,{value:e.value}),C=ye(ne,2),F=C[0],Q=C[1],M=F==null?"":String(F),H=b.useState(null),le=ye(H,2),oe=le[0],be=le[1],ue=ww(T,x),me=ue.max||w,ge=ue.strategy(M),Pe=!!me&&ge>me;b.useImperativeHandle(t,function(){var Ce;return{focus:I,blur:function(){var qe;(qe=P.current)===null||qe===void 0||qe.blur()},setSelectionRange:function(qe,re,de){var Se;(Se=P.current)===null||Se===void 0||Se.setSelectionRange(qe,re,de)},select:function(){var qe;(qe=P.current)===null||qe===void 0||qe.select()},input:P.current,nativeElement:((Ce=k.current)===null||Ce===void 0?void 0:Ce.nativeElement)||P.current}}),b.useEffect(function(){G.current&&(G.current=!1),K(function(Ce){return Ce&&v?!1:Ce})},[v]);var _e=function(Te,qe,re){var de=qe;if(!Y.current&&ue.exceedFormatter&&ue.max&&ue.strategy(qe)>ue.max){if(de=ue.exceedFormatter(qe,{max:ue.max}),qe!==de){var Se,Ne;be([((Se=P.current)===null||Se===void 0?void 0:Se.selectionStart)||0,((Ne=P.current)===null||Ne===void 0?void 0:Ne.selectionEnd)||0])}}else if(re.source==="compositionEnd")return;Q(de),P.current&&Yc(P.current,Te,a,de)};b.useEffect(function(){if(oe){var Ce;(Ce=P.current)===null||Ce===void 0||Ce.setSelectionRange.apply(Ce,ze(oe))}},[oe]);var He=function(Te){_e(Te,Te.target.value,{source:"change"})},Xe=function(Te){Y.current=!1,_e(Te,Te.currentTarget.value,{source:"compositionEnd"}),J==null||J(Te)},Ge=function(Te){c&&Te.key==="Enter"&&!G.current&&(G.current=!0,c(Te)),f==null||f(Te)},Me=function(Te){Te.key==="Enter"&&(G.current=!1),h==null||h(Te)},rt=function(Te){K(!0),o==null||o(Te)},Ve=function(Te){G.current&&(G.current=!1),K(!1),s==null||s(Te)},Ke=function(Te){Q(""),I(),P.current&&Yc(P.current,Te,a)},Et=Pe&&"".concat(g,"-out-of-range"),Be=function(){var Te=yl(e,["prefixCls","onPressEnter","addonBefore","addonAfter","prefix","suffix","allowClear","defaultValue","showCount","count","classes","htmlSize","styles","classNames","onClear"]);return ve.createElement("input",kt({autoComplete:r},Te,{onChange:He,onFocus:rt,onBlur:Ve,onKeyDown:Ge,onKeyUp:Me,className:Ee(g,ee({},"".concat(g,"-disabled"),v),z==null?void 0:z.input),style:N==null?void 0:N.input,ref:P,size:y,type:O,onCompositionStart:function(re){Y.current=!0,_==null||_(re)},onCompositionEnd:Xe}))},st=function(){var Te=Number(me)>0;if(A||ue.show){var qe=ue.showFormatter?ue.showFormatter({value:M,count:ge,maxLength:me}):"".concat(ge).concat(Te?" / ".concat(me):"");return ve.createElement(ve.Fragment,null,ue.show&&ve.createElement("span",{className:Ee("".concat(g,"-show-count-suffix"),ee({},"".concat(g,"-show-count-has-suffix"),!!A),z==null?void 0:z.count),style:ie({},N==null?void 0:N.count)},qe),A)}return null};return ve.createElement(Cw,kt({},$,{prefixCls:g,className:Ee(S,Et),handleReset:Ke,value:M,focused:W,triggerFocus:I,suffix:st(),disabled:v,classes:j,classNames:z,styles:N}),Be())});const xw=e=>{let t;return typeof e=="object"&&(e!=null&&e.clearIcon)?t=e:e&&(t={clearIcon:ve.createElement(_A,null)}),t};function Ew(e,t){const r=b.useRef([]),a=()=>{r.current.push(setTimeout(()=>{var o,s,c,f;!((o=e.current)===null||o===void 0)&&o.input&&((s=e.current)===null||s===void 0?void 0:s.input.getAttribute("type"))==="password"&&(!((c=e.current)===null||c===void 0)&&c.input.hasAttribute("value"))&&((f=e.current)===null||f===void 0||f.input.removeAttribute("value"))}))};return b.useEffect(()=>(t&&a(),()=>r.current.forEach(o=>{o&&clearTimeout(o)})),[]),a}function kO(e){return!!(e.prefix||e.suffix||e.allowClear||e.showCount)}var LO=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(r[a[o]]=e[a[o]]);return r};const Af=b.forwardRef((e,t)=>{const{prefixCls:r,bordered:a=!0,status:o,size:s,disabled:c,onBlur:f,onFocus:h,suffix:d,allowClear:g,addonAfter:v,addonBefore:y,className:S,style:w,styles:A,rootClassName:x,onChange:T,classNames:R,variant:O}=e,j=LO(e,["prefixCls","bordered","status","size","disabled","onBlur","onFocus","suffix","allowClear","addonAfter","addonBefore","className","style","styles","rootClassName","onChange","classNames","variant"]),{getPrefixCls:z,direction:N,allowClear:_,autoComplete:J,className:$,style:B,classNames:U,styles:W}=tu("input"),K=z("input",r),Y=b.useRef(null),G=DC(K),[P,k,I]=yw(K,x),[ne]=bw(K,G),{compactSize:C,compactItemClassnames:F}=pf(K,N),Q=iu(Ve=>{var Ke;return(Ke=s??C)!==null&&Ke!==void 0?Ke:Ve}),M=ve.useContext(to),H=c??M,{status:le,hasFeedback:oe,feedbackIcon:be}=b.useContext(vi),ue=hp(le,o),me=kO(e)||!!oe;b.useRef(me);const ge=Ew(Y,!0),Pe=Ve=>{ge(),f==null||f(Ve)},_e=Ve=>{ge(),h==null||h(Ve)},He=Ve=>{ge(),T==null||T(Ve)},Xe=(oe||d)&&ve.createElement(ve.Fragment,null,d,oe&&be),Ge=xw(g??_),[Me,rt]=QC("input",O,a);return P(ne(ve.createElement($O,Object.assign({ref:lo(t,Y),prefixCls:K,autoComplete:J},j,{disabled:H,onBlur:Pe,onFocus:_e,style:Object.assign(Object.assign({},B),w),styles:Object.assign(Object.assign({},W),A),suffix:Xe,allowClear:Ge,className:Ee(S,x,I,G,F,$),onChange:He,addonBefore:y&&ve.createElement(Rg,{form:!0,space:!0},y),addonAfter:v&&ve.createElement(Rg,{form:!0,space:!0},v),classNames:Object.assign(Object.assign(Object.assign({},R),U),{input:Ee({[`${K}-sm`]:Q==="small",[`${K}-lg`]:Q==="large",[`${K}-rtl`]:N==="rtl"},R==null?void 0:R.input,U.input,k),variant:Ee({[`${K}-${Me}`]:rt},Mg(K,ue)),affixWrapper:Ee({[`${K}-affix-wrapper-sm`]:Q==="small",[`${K}-affix-wrapper-lg`]:Q==="large",[`${K}-affix-wrapper-rtl`]:N==="rtl"},k),wrapper:Ee({[`${K}-group-rtl`]:N==="rtl"},k),groupWrapper:Ee({[`${K}-group-wrapper-sm`]:Q==="small",[`${K}-group-wrapper-lg`]:Q==="large",[`${K}-group-wrapper-rtl`]:N==="rtl",[`${K}-group-wrapper-${Me}`]:rt},Mg(`${K}-group-wrapper`,ue,oe),k)})}))))});var jO=function(t,r){return b.createElement(zr,kt({},t,{ref:r,icon:L8}))},HO=b.forwardRef(jO);const BO=e=>{const{getPrefixCls:t,direction:r}=b.useContext(Kt),{prefixCls:a,className:o}=e,s=t("input-group",a),c=t("input"),[f,h,d]=bw(c),g=Ee(s,d,{[`${s}-lg`]:e.size==="large",[`${s}-sm`]:e.size==="small",[`${s}-compact`]:e.compact,[`${s}-rtl`]:r==="rtl"},h,o),v=b.useContext(vi),y=b.useMemo(()=>Object.assign(Object.assign({},v),{isFormItemInput:!1}),[v]);return f(b.createElement("span",{className:g,style:e.style,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,onFocus:e.onFocus,onBlur:e.onBlur},b.createElement(vi.Provider,{value:y},e.children)))},FO=e=>{const{componentCls:t,paddingXS:r}=e;return{[t]:{display:"inline-flex",alignItems:"center",flexWrap:"nowrap",columnGap:r,"&-rtl":{direction:"rtl"},[`${t}-input`]:{textAlign:"center",paddingInline:e.paddingXXS},[`&${t}-sm ${t}-input`]:{paddingInline:e.calc(e.paddingXXS).div(2).equal()},[`&${t}-lg ${t}-input`]:{paddingInline:e.paddingXS}}}},IO=Ha(["Input","OTP"],e=>{const t=$n(e,xf(e));return[FO(t)]},Ef);var VO=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(r[a[o]]=e[a[o]]);return r};const UO=b.forwardRef((e,t)=>{const{value:r,onChange:a,onActiveChange:o,index:s,mask:c}=e,f=VO(e,["value","onChange","onActiveChange","index","mask"]),h=r&&typeof c=="string"?c:r,d=w=>{a(s,w.target.value)},g=b.useRef(null);b.useImperativeHandle(t,()=>g.current);const v=()=>{Wr(()=>{var w;const A=(w=g.current)===null||w===void 0?void 0:w.input;document.activeElement===A&&A&&A.select()})},y=w=>{const{key:A,ctrlKey:x,metaKey:T}=w;A==="ArrowLeft"?o(s-1):A==="ArrowRight"?o(s+1):A==="z"&&(x||T)&&w.preventDefault(),v()},S=w=>{w.key==="Backspace"&&!r&&o(s-1),v()};return b.createElement(Af,Object.assign({type:c===!0?"password":"text"},f,{ref:g,value:h,onInput:d,onFocus:v,onKeyDown:y,onKeyUp:S,onMouseDown:v,onMouseUp:v}))});var GO=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(r[a[o]]=e[a[o]]);return r};function wc(e){return(e||"").split("")}const qO=e=>{const{index:t,prefixCls:r,separator:a}=e,o=typeof a=="function"?a(t):a;return o?b.createElement("span",{className:`${r}-separator`},o):null},WO=b.forwardRef((e,t)=>{const{prefixCls:r,length:a=6,size:o,defaultValue:s,value:c,onChange:f,formatter:h,separator:d,variant:g,disabled:v,status:y,autoFocus:S,mask:w,type:A,onInput:x,inputMode:T}=e,R=GO(e,["prefixCls","length","size","defaultValue","value","onChange","formatter","separator","variant","disabled","status","autoFocus","mask","type","onInput","inputMode"]),{getPrefixCls:O,direction:j}=b.useContext(Kt),z=O("otp",r),N=OC(R,{aria:!0,data:!0,attr:!0}),[_,J,$]=IO(z),B=iu(H=>o??H),U=b.useContext(vi),W=hp(U.status,y),K=b.useMemo(()=>Object.assign(Object.assign({},U),{status:W,hasFeedback:!1,feedbackIcon:null}),[U,W]),Y=b.useRef(null),G=b.useRef({});b.useImperativeHandle(t,()=>({focus:()=>{var H;(H=G.current[0])===null||H===void 0||H.focus()},blur:()=>{var H;for(let le=0;le<a;le+=1)(H=G.current[le])===null||H===void 0||H.blur()},nativeElement:Y.current}));const P=H=>h?h(H):H,[k,I]=b.useState(()=>wc(P(s||"")));b.useEffect(()=>{c!==void 0&&I(wc(c))},[c]);const ne=zn(H=>{I(H),x&&x(H),f&&H.length===a&&H.every(le=>le)&&H.some((le,oe)=>k[oe]!==le)&&f(H.join(""))}),C=zn((H,le)=>{let oe=ze(k);for(let ue=0;ue<H;ue+=1)oe[ue]||(oe[ue]="");le.length<=1?oe[H]=le:oe=oe.slice(0,H).concat(wc(le)),oe=oe.slice(0,a);for(let ue=oe.length-1;ue>=0&&!oe[ue];ue-=1)oe.pop();const be=P(oe.map(ue=>ue||" ").join(""));return oe=wc(be).map((ue,me)=>ue===" "&&!oe[me]?oe[me]:ue),oe}),F=(H,le)=>{var oe;const be=C(H,le),ue=Math.min(H+le.length,a-1);ue!==H&&be[H]!==void 0&&((oe=G.current[ue])===null||oe===void 0||oe.focus()),ne(be)},Q=H=>{var le;(le=G.current[H])===null||le===void 0||le.focus()},M={variant:g,disabled:v,status:W,mask:w,type:A,inputMode:T};return _(b.createElement("div",Object.assign({},N,{ref:Y,className:Ee(z,{[`${z}-sm`]:B==="small",[`${z}-lg`]:B==="large",[`${z}-rtl`]:j==="rtl"},$,J)}),b.createElement(vi.Provider,{value:K},Array.from({length:a}).map((H,le)=>{const oe=`otp-${le}`,be=k[le]||"";return b.createElement(b.Fragment,{key:oe},b.createElement(UO,Object.assign({ref:ue=>{G.current[le]=ue},index:le,size:B,htmlSize:1,className:`${z}-input`,onChange:F,value:be,onActiveChange:Q,autoFocus:le===0&&S},M)),le<a-1&&b.createElement(qO,{separator:d,index:le,prefixCls:z}))}))))});var JO=function(t,r){return b.createElement(zr,kt({},t,{ref:r,icon:k8}))},YO=b.forwardRef(JO),XO=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(r[a[o]]=e[a[o]]);return r};const KO=e=>e?b.createElement(HO,null):b.createElement(YO,null),QO={click:"onClick",hover:"onMouseOver"},ZO=b.forwardRef((e,t)=>{const{disabled:r,action:a="click",visibilityToggle:o=!0,iconRender:s=KO}=e,c=b.useContext(to),f=r??c,h=typeof o=="object"&&o.visible!==void 0,[d,g]=b.useState(()=>h?o.visible:!1),v=b.useRef(null);b.useEffect(()=>{h&&g(o.visible)},[h,o]);const y=Ew(v),S=()=>{var B;if(f)return;d&&y();const U=!d;g(U),typeof o=="object"&&((B=o.onVisibleChange)===null||B===void 0||B.call(o,U))},w=B=>{const U=QO[a]||"",W=s(d),K={[U]:S,className:`${B}-icon`,key:"passwordIcon",onMouseDown:Y=>{Y.preventDefault()},onMouseUp:Y=>{Y.preventDefault()}};return b.cloneElement(b.isValidElement(W)?W:b.createElement("span",null,W),K)},{className:A,prefixCls:x,inputPrefixCls:T,size:R}=e,O=XO(e,["className","prefixCls","inputPrefixCls","size"]),{getPrefixCls:j}=b.useContext(Kt),z=j("input",T),N=j("input-password",x),_=o&&w(N),J=Ee(N,A,{[`${N}-${R}`]:!!R}),$=Object.assign(Object.assign({},yl(O,["suffix","iconRender","visibilityToggle"])),{type:d?"text":"password",className:J,prefixCls:z,suffix:_});return R&&($.size=R),b.createElement(Af,Object.assign({ref:lo(t,v)},$))});var eM=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(r[a[o]]=e[a[o]]);return r};const tM=b.forwardRef((e,t)=>{const{prefixCls:r,inputPrefixCls:a,className:o,size:s,suffix:c,enterButton:f=!1,addonAfter:h,loading:d,disabled:g,onSearch:v,onChange:y,onCompositionStart:S,onCompositionEnd:w}=e,A=eM(e,["prefixCls","inputPrefixCls","className","size","suffix","enterButton","addonAfter","loading","disabled","onSearch","onChange","onCompositionStart","onCompositionEnd"]),{getPrefixCls:x,direction:T}=b.useContext(Kt),R=b.useRef(!1),O=x("input-search",r),j=x("input",a),{compactSize:z}=pf(O,T),N=iu(F=>{var Q;return(Q=s??z)!==null&&Q!==void 0?Q:F}),_=b.useRef(null),J=F=>{F!=null&&F.target&&F.type==="click"&&v&&v(F.target.value,F,{source:"clear"}),y==null||y(F)},$=F=>{var Q;document.activeElement===((Q=_.current)===null||Q===void 0?void 0:Q.input)&&F.preventDefault()},B=F=>{var Q,M;v&&v((M=(Q=_.current)===null||Q===void 0?void 0:Q.input)===null||M===void 0?void 0:M.value,F,{source:"input"})},U=F=>{R.current||d||B(F)},W=typeof f=="boolean"?b.createElement(FR,null):null,K=`${O}-button`;let Y;const G=f||{},P=G.type&&G.type.__ANT_BUTTON===!0;P||G.type==="button"?Y=Gs(G,Object.assign({onMouseDown:$,onClick:F=>{var Q,M;(M=(Q=G==null?void 0:G.props)===null||Q===void 0?void 0:Q.onClick)===null||M===void 0||M.call(Q,F),B(F)},key:"enterButton"},P?{className:K,size:N}:{})):Y=b.createElement(fp,{className:K,type:f?"primary":void 0,size:N,disabled:g,key:"enterButton",onMouseDown:$,onClick:B,loading:d,icon:W},f),h&&(Y=[Y,Gs(h,{key:"addonAfter"})]);const k=Ee(O,{[`${O}-rtl`]:T==="rtl",[`${O}-${N}`]:!!N,[`${O}-with-button`]:!!f},o),I=Object.assign(Object.assign({},A),{className:k,prefixCls:j,type:"search"}),ne=F=>{R.current=!0,S==null||S(F)},C=F=>{R.current=!1,w==null||w(F)};return b.createElement(Af,Object.assign({ref:lo(_,t),onPressEnter:U},I,{size:N,onCompositionStart:ne,onCompositionEnd:C,addonAfter:Y,suffix:c,onChange:J,disabled:g}))});var nM=`
  min-height:0 !important;
  max-height:none !important;
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
  pointer-events: none !important;
`,rM=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","font-variant","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing","word-break","white-space"],nm={},tr;function aM(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r=e.getAttribute("id")||e.getAttribute("data-reactid")||e.getAttribute("name");if(t&&nm[r])return nm[r];var a=window.getComputedStyle(e),o=a.getPropertyValue("box-sizing")||a.getPropertyValue("-moz-box-sizing")||a.getPropertyValue("-webkit-box-sizing"),s=parseFloat(a.getPropertyValue("padding-bottom"))+parseFloat(a.getPropertyValue("padding-top")),c=parseFloat(a.getPropertyValue("border-bottom-width"))+parseFloat(a.getPropertyValue("border-top-width")),f=rM.map(function(d){return"".concat(d,":").concat(a.getPropertyValue(d))}).join(";"),h={sizingStyle:f,paddingSize:s,borderSize:c,boxSizing:o};return t&&r&&(nm[r]=h),h}function iM(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null;tr||(tr=document.createElement("textarea"),tr.setAttribute("tab-index","-1"),tr.setAttribute("aria-hidden","true"),tr.setAttribute("name","hiddenTextarea"),document.body.appendChild(tr)),e.getAttribute("wrap")?tr.setAttribute("wrap",e.getAttribute("wrap")):tr.removeAttribute("wrap");var o=aM(e,t),s=o.paddingSize,c=o.borderSize,f=o.boxSizing,h=o.sizingStyle;tr.setAttribute("style","".concat(h,";").concat(nM)),tr.value=e.value||e.placeholder||"";var d=void 0,g=void 0,v,y=tr.scrollHeight;if(f==="border-box"?y+=c:f==="content-box"&&(y-=s),r!==null||a!==null){tr.value=" ";var S=tr.scrollHeight-s;r!==null&&(d=S*r,f==="border-box"&&(d=d+s+c),y=Math.max(d,y)),a!==null&&(g=S*a,f==="border-box"&&(g=g+s+c),v=y>g?"":"hidden",y=Math.min(g,y))}var w={height:y,overflowY:v,resize:"none"};return d&&(w.minHeight=d),g&&(w.maxHeight=g),w}var oM=["prefixCls","defaultValue","value","autoSize","onResize","className","style","disabled","onChange","onInternalAutoSize"],rm=0,am=1,im=2,lM=b.forwardRef(function(e,t){var r=e,a=r.prefixCls,o=r.defaultValue,s=r.value,c=r.autoSize,f=r.onResize,h=r.className,d=r.style,g=r.disabled,v=r.onChange;r.onInternalAutoSize;var y=Tn(r,oM),S=hf(o,{value:s,postState:function(H){return H??""}}),w=ye(S,2),A=w[0],x=w[1],T=function(H){x(H.target.value),v==null||v(H)},R=b.useRef();b.useImperativeHandle(t,function(){return{textArea:R.current}});var O=b.useMemo(function(){return c&&je(c)==="object"?[c.minRows,c.maxRows]:[]},[c]),j=ye(O,2),z=j[0],N=j[1],_=!!c,J=function(){try{if(document.activeElement===R.current){var H=R.current,le=H.selectionStart,oe=H.selectionEnd,be=H.scrollTop;R.current.setSelectionRange(le,oe),R.current.scrollTop=be}}catch{}},$=b.useState(im),B=ye($,2),U=B[0],W=B[1],K=b.useState(),Y=ye(K,2),G=Y[0],P=Y[1],k=function(){W(rm)};Cn(function(){_&&k()},[s,z,N,_]),Cn(function(){if(U===rm)W(am);else if(U===am){var M=iM(R.current,!1,z,N);W(im),P(M)}else J()},[U]);var I=b.useRef(),ne=function(){Wr.cancel(I.current)},C=function(H){U===im&&(f==null||f(H),c&&(ne(),I.current=Wr(function(){k()})))};b.useEffect(function(){return ne},[]);var F=_?G:null,Q=ie(ie({},d),F);return(U===rm||U===am)&&(Q.overflowY="hidden",Q.overflowX="hidden"),b.createElement(sf,{onResize:C,disabled:!(c||f)},b.createElement("textarea",kt({},y,{ref:R,style:Q,className:Ee(a,h,ee({},"".concat(a,"-disabled"),g)),disabled:g,value:A,onChange:T})))}),sM=["defaultValue","value","onFocus","onBlur","onChange","allowClear","maxLength","onCompositionStart","onCompositionEnd","suffix","prefixCls","showCount","count","className","style","disabled","hidden","classNames","styles","onResize","onClear","onPressEnter","readOnly","autoSize","onKeyDown"],uM=ve.forwardRef(function(e,t){var r,a=e.defaultValue,o=e.value,s=e.onFocus,c=e.onBlur,f=e.onChange,h=e.allowClear,d=e.maxLength,g=e.onCompositionStart,v=e.onCompositionEnd,y=e.suffix,S=e.prefixCls,w=S===void 0?"rc-textarea":S,A=e.showCount,x=e.count,T=e.className,R=e.style,O=e.disabled,j=e.hidden,z=e.classNames,N=e.styles,_=e.onResize,J=e.onClear,$=e.onPressEnter,B=e.readOnly,U=e.autoSize,W=e.onKeyDown,K=Tn(e,sM),Y=hf(a,{value:o,defaultValue:a}),G=ye(Y,2),P=G[0],k=G[1],I=P==null?"":String(P),ne=ve.useState(!1),C=ye(ne,2),F=C[0],Q=C[1],M=ve.useRef(!1),H=ve.useState(null),le=ye(H,2),oe=le[0],be=le[1],ue=b.useRef(null),me=b.useRef(null),ge=function(){var xe;return(xe=me.current)===null||xe===void 0?void 0:xe.textArea},Pe=function(){ge().focus()};b.useImperativeHandle(t,function(){var $e;return{resizableTextArea:me.current,focus:Pe,blur:function(){ge().blur()},nativeElement:(($e=ue.current)===null||$e===void 0?void 0:$e.nativeElement)||ge()}}),b.useEffect(function(){Q(function($e){return!O&&$e})},[O]);var _e=ve.useState(null),He=ye(_e,2),Xe=He[0],Ge=He[1];ve.useEffect(function(){if(Xe){var $e;($e=ge()).setSelectionRange.apply($e,ze(Xe))}},[Xe]);var Me=ww(x,A),rt=(r=Me.max)!==null&&r!==void 0?r:d,Ve=Number(rt)>0,Ke=Me.strategy(I),Et=!!rt&&Ke>rt,Be=function(xe,Qe){var Fe=Qe;!M.current&&Me.exceedFormatter&&Me.max&&Me.strategy(Qe)>Me.max&&(Fe=Me.exceedFormatter(Qe,{max:Me.max}),Qe!==Fe&&Ge([ge().selectionStart||0,ge().selectionEnd||0])),k(Fe),Yc(xe.currentTarget,xe,f,Fe)},st=function(xe){M.current=!0,g==null||g(xe)},Ce=function(xe){M.current=!1,Be(xe,xe.currentTarget.value),v==null||v(xe)},Te=function(xe){Be(xe,xe.target.value)},qe=function(xe){xe.key==="Enter"&&$&&$(xe),W==null||W(xe)},re=function(xe){Q(!0),s==null||s(xe)},de=function(xe){Q(!1),c==null||c(xe)},Se=function(xe){k(""),Pe(),Yc(ge(),xe,f)},Ne=y,Re;Me.show&&(Me.showFormatter?Re=Me.showFormatter({value:I,count:Ke,maxLength:rt}):Re="".concat(Ke).concat(Ve?" / ".concat(rt):""),Ne=ve.createElement(ve.Fragment,null,Ne,ve.createElement("span",{className:Ee("".concat(w,"-data-count"),z==null?void 0:z.count),style:N==null?void 0:N.count},Re)));var at=function(xe){var Qe;_==null||_(xe),(Qe=ge())!==null&&Qe!==void 0&&Qe.style.height&&be(!0)},ut=!U&&!A&&!h;return ve.createElement(Cw,{ref:ue,value:I,allowClear:h,handleReset:Se,suffix:Ne,prefixCls:w,classNames:ie(ie({},z),{},{affixWrapper:Ee(z==null?void 0:z.affixWrapper,ee(ee({},"".concat(w,"-show-count"),A),"".concat(w,"-textarea-allow-clear"),h))}),disabled:O,focused:F,className:Ee(T,Et&&"".concat(w,"-out-of-range")),style:ie(ie({},R),oe&&!ut?{height:"auto"}:{}),dataAttrs:{affixWrapper:{"data-count":typeof Re=="string"?Re:void 0}},hidden:j,readOnly:B,onClear:J},ve.createElement(lM,kt({},K,{autoSize:U,maxLength:d,onKeyDown:qe,onChange:Te,onFocus:re,onBlur:de,onCompositionStart:st,onCompositionEnd:Ce,className:Ee(z==null?void 0:z.textarea),style:ie(ie({},N==null?void 0:N.textarea),{},{resize:R==null?void 0:R.resize}),disabled:O,prefixCls:w,onResize:at,ref:me,readOnly:B})))});const xc=2,cM=(e,t)=>{t.offsetWidth-e<xc?t.style.width=`${e+xc}px`:t.offsetWidth-e>xc&&(t.style.width=`${e+xc}px`)},fM=()=>ve.useCallback(t=>{if(t&&t.resizableTextArea.textArea.style.width.includes("px")){const r=Number.parseInt(t.resizableTextArea.textArea.style.width.replace(/px/,""));Wr(()=>cM(r,t.nativeElement))}},[]),dM=e=>{const{componentCls:t,paddingLG:r}=e,a=`${t}-textarea`;return{[a]:{position:"relative","&-show-count":{[`> ${t}`]:{height:"100%"},[`${t}-data-count`]:{position:"absolute",bottom:e.calc(e.fontSize).mul(e.lineHeight).mul(-1).equal(),insetInlineEnd:0,color:e.colorTextDescription,whiteSpace:"nowrap",pointerEvents:"none"}},[`
        &-allow-clear > ${t},
        &-affix-wrapper${a}-has-feedback ${t}
      `]:{paddingInlineEnd:r},[`&-affix-wrapper${t}-affix-wrapper`]:{padding:0,[`> textarea${t}`]:{fontSize:"inherit",border:"none",outline:"none",background:"transparent",minHeight:e.calc(e.controlHeight).sub(e.calc(e.lineWidth).mul(2)).equal(),"&:focus":{boxShadow:"none !important"}},[`${t}-suffix`]:{margin:0,"> *:not(:last-child)":{marginInline:0},[`${t}-clear-icon`]:{position:"absolute",insetInlineEnd:e.paddingInline,insetBlockStart:e.paddingXS},[`${a}-suffix`]:{position:"absolute",top:0,insetInlineEnd:e.paddingInline,bottom:0,zIndex:1,display:"inline-flex",alignItems:"center",margin:"auto",pointerEvents:"none"}}},[`&-affix-wrapper${t}-affix-wrapper-sm`]:{[`${t}-suffix`]:{[`${t}-clear-icon`]:{insetInlineEnd:e.paddingInlineSM}}}}}},hM=Ha(["Input","TextArea"],e=>{const t=$n(e,xf(e));return[dM(t)]},Ef,{resetFont:!1});var mM=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(r[a[o]]=e[a[o]]);return r};const gM=b.forwardRef((e,t)=>{var r;const{prefixCls:a,bordered:o=!0,size:s,disabled:c,status:f,allowClear:h,classNames:d,rootClassName:g,className:v,style:y,styles:S,variant:w,showCount:A}=e,x=mM(e,["prefixCls","bordered","size","disabled","status","allowClear","classNames","rootClassName","className","style","styles","variant","showCount"]),{getPrefixCls:T,direction:R,allowClear:O,autoComplete:j,className:z,style:N,classNames:_,styles:J}=tu("textArea"),$=b.useContext(to),B=c??$,{status:U,hasFeedback:W,feedbackIcon:K}=b.useContext(vi),Y=hp(U,f),G=b.useRef(null);b.useImperativeHandle(t,()=>{var me;return{resizableTextArea:(me=G.current)===null||me===void 0?void 0:me.resizableTextArea,focus:ge=>{var Pe,_e;Sw((_e=(Pe=G.current)===null||Pe===void 0?void 0:Pe.resizableTextArea)===null||_e===void 0?void 0:_e.textArea,ge)},blur:()=>{var ge;return(ge=G.current)===null||ge===void 0?void 0:ge.blur()}}});const P=T("input",a),k=DC(P),[I,ne,C]=yw(P,g),[F]=hM(P,k),{compactSize:Q,compactItemClassnames:M}=pf(P,R),H=iu(me=>{var ge;return(ge=s??Q)!==null&&ge!==void 0?ge:me}),[le,oe]=QC("textArea",w,o),be=xw(h??O),ue=fM();return I(F(b.createElement(uM,Object.assign({autoComplete:j},x,{style:Object.assign(Object.assign({},N),y),styles:Object.assign(Object.assign({},J),S),disabled:B,allowClear:be,className:Ee(C,k,v,g,M,z),classNames:Object.assign(Object.assign(Object.assign({},d),_),{textarea:Ee({[`${P}-sm`]:H==="small",[`${P}-lg`]:H==="large"},ne,d==null?void 0:d.textarea,_.textarea),variant:Ee({[`${P}-${le}`]:oe},Mg(P,Y)),affixWrapper:Ee(`${P}-textarea-affix-wrapper`,{[`${P}-affix-wrapper-rtl`]:R==="rtl",[`${P}-affix-wrapper-sm`]:H==="small",[`${P}-affix-wrapper-lg`]:H==="large",[`${P}-textarea-show-count`]:e.showCount||((r=e.count)===null||r===void 0?void 0:r.show)},ne)}),prefixCls:P,suffix:W&&b.createElement("span",{className:`${P}-textarea-suffix`},K),showCount:A,ref:G,onResize:me=>{var ge;(ge=x.onResize)===null||ge===void 0||ge.call(x,me),A&&ue(G.current)}}))))}),bl=Af;bl.Group=BO;bl.Search=tM;bl.TextArea=gM;bl.Password=ZO;bl.OTP=WO;function pM(e,t,r){return typeof r=="boolean"?r:e.length?!0:$s(t).some(o=>o.type===fw)}var Aw=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(r[a[o]]=e[a[o]]);return r};function Tf(e){let{suffixCls:t,tagName:r,displayName:a}=e;return o=>b.forwardRef((c,f)=>b.createElement(o,Object.assign({ref:f,suffixCls:t,tagName:r},c)))}const gp=b.forwardRef((e,t)=>{const{prefixCls:r,suffixCls:a,className:o,tagName:s}=e,c=Aw(e,["prefixCls","suffixCls","className","tagName"]),{getPrefixCls:f}=b.useContext(Kt),h=f("layout",r),[d,g,v]=uw(h),y=a?`${h}-${a}`:h;return d(b.createElement(s,Object.assign({className:Ee(r||y,o,g,v),ref:t},c)))}),vM=b.forwardRef((e,t)=>{const{direction:r}=b.useContext(Kt),[a,o]=b.useState([]),{prefixCls:s,className:c,rootClassName:f,children:h,hasSider:d,tagName:g,style:v}=e,y=Aw(e,["prefixCls","className","rootClassName","children","hasSider","tagName","style"]),S=yl(y,["suffixCls"]),{getPrefixCls:w,className:A,style:x}=tu("layout"),T=w("layout",s),R=pM(a,h,d),[O,j,z]=uw(T),N=Ee(T,{[`${T}-has-sider`]:R,[`${T}-rtl`]:r==="rtl"},A,c,f,j,z),_=b.useMemo(()=>({siderHook:{addSider:J=>{o($=>[].concat(ze($),[J]))},removeSider:J=>{o($=>$.filter(B=>B!==J))}}}),[]);return O(b.createElement(ow.Provider,{value:_},b.createElement(g,Object.assign({ref:t,className:N,style:Object.assign(Object.assign({},x),v)},S),h)))}),yM=Tf({tagName:"div",displayName:"Layout"})(vM),bM=Tf({suffixCls:"header",tagName:"header",displayName:"Header"})(gp),SM=Tf({suffixCls:"footer",tagName:"footer",displayName:"Footer"})(gp),CM=Tf({suffixCls:"content",tagName:"main",displayName:"Content"})(gp),ro=yM;ro.Header=bM;ro.Footer=SM;ro.Content=CM;ro.Sider=fw;ro._InternalSiderContext=cw;const wM=e=>{const{paddingXXS:t,lineWidth:r,tagPaddingHorizontal:a,componentCls:o,calc:s}=e,c=s(a).sub(r).equal(),f=s(t).sub(r).equal();return{[o]:Object.assign(Object.assign({},mf(e)),{display:"inline-block",height:"auto",marginInlineEnd:e.marginXS,paddingInline:c,fontSize:e.tagFontSize,lineHeight:e.tagLineHeight,whiteSpace:"nowrap",background:e.defaultBg,border:`${We(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,borderRadius:e.borderRadiusSM,opacity:1,transition:`all ${e.motionDurationMid}`,textAlign:"start",position:"relative",[`&${o}-rtl`]:{direction:"rtl"},"&, a, a:hover":{color:e.defaultColor},[`${o}-close-icon`]:{marginInlineStart:f,fontSize:e.tagIconSize,color:e.colorTextDescription,cursor:"pointer",transition:`all ${e.motionDurationMid}`,"&:hover":{color:e.colorTextHeading}},[`&${o}-has-color`]:{borderColor:"transparent",[`&, a, a:hover, ${e.iconCls}-close, ${e.iconCls}-close:hover`]:{color:e.colorTextLightSolid}},"&-checkable":{backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer",[`&:not(${o}-checkable-checked):hover`]:{color:e.colorPrimary,backgroundColor:e.colorFillSecondary},"&:active, &-checked":{color:e.colorTextLightSolid},"&-checked":{backgroundColor:e.colorPrimary,"&:hover":{backgroundColor:e.colorPrimaryHover}},"&:active":{backgroundColor:e.colorPrimaryActive}},"&-hidden":{display:"none"},[`> ${e.iconCls} + span, > span + ${e.iconCls}`]:{marginInlineStart:c}}),[`${o}-borderless`]:{borderColor:"transparent",background:e.tagBorderlessBg}}},pp=e=>{const{lineWidth:t,fontSizeIcon:r,calc:a}=e,o=e.fontSizeSM;return $n(e,{tagFontSize:o,tagLineHeight:We(a(e.lineHeightSM).mul(o).equal()),tagIconSize:a(r).sub(a(t).mul(2)).equal(),tagPaddingHorizontal:8,tagBorderlessBg:e.defaultBg})},vp=e=>({defaultBg:new jt(e.colorFillQuaternary).onBackground(e.colorBgContainer).toHexString(),defaultColor:e.colorText}),Tw=Ha("Tag",e=>{const t=pp(e);return wM(t)},vp);var xM=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(r[a[o]]=e[a[o]]);return r};const EM=b.forwardRef((e,t)=>{const{prefixCls:r,style:a,className:o,checked:s,onChange:c,onClick:f}=e,h=xM(e,["prefixCls","style","className","checked","onChange","onClick"]),{getPrefixCls:d,tag:g}=b.useContext(Kt),v=T=>{c==null||c(!s),f==null||f(T)},y=d("tag",r),[S,w,A]=Tw(y),x=Ee(y,`${y}-checkable`,{[`${y}-checkable-checked`]:s},g==null?void 0:g.className,o,w,A);return S(b.createElement("span",Object.assign({},h,{ref:t,style:Object.assign(Object.assign({},a),g==null?void 0:g.style),className:x,onClick:v})))}),AM=e=>dC(e,(t,r)=>{let{textColor:a,lightBorderColor:o,lightColor:s,darkColor:c}=r;return{[`${e.componentCls}${e.componentCls}-${t}`]:{color:a,background:s,borderColor:o,"&-inverse":{color:e.colorTextLightSolid,background:c,borderColor:c},[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}}),TM=sp(["Tag","preset"],e=>{const t=pp(e);return AM(t)},vp);function RM(e){return typeof e!="string"?e:e.charAt(0).toUpperCase()+e.slice(1)}const Ec=(e,t,r)=>{const a=RM(r);return{[`${e.componentCls}${e.componentCls}-${t}`]:{color:e[`color${r}`],background:e[`color${a}Bg`],borderColor:e[`color${a}Border`],[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}},OM=sp(["Tag","status"],e=>{const t=pp(e);return[Ec(t,"success","Success"),Ec(t,"processing","Info"),Ec(t,"error","Error"),Ec(t,"warning","Warning")]},vp);var MM=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(r[a[o]]=e[a[o]]);return r};const NM=b.forwardRef((e,t)=>{const{prefixCls:r,className:a,rootClassName:o,style:s,children:c,icon:f,color:h,onClose:d,bordered:g=!0,visible:v}=e,y=MM(e,["prefixCls","className","rootClassName","style","children","icon","color","onClose","bordered","visible"]),{getPrefixCls:S,direction:w,tag:A}=b.useContext(Kt),[x,T]=b.useState(!0),R=yl(y,["closeIcon","closable"]);b.useEffect(()=>{v!==void 0&&T(v)},[v]);const O=rw(h),j=rO(h),z=O||j,N=Object.assign(Object.assign({backgroundColor:h&&!z?h:void 0},A==null?void 0:A.style),s),_=S("tag",r),[J,$,B]=Tw(_),U=Ee(_,A==null?void 0:A.className,{[`${_}-${h}`]:z,[`${_}-has-color`]:h&&!z,[`${_}-hidden`]:!x,[`${_}-rtl`]:w==="rtl",[`${_}-borderless`]:!g},a,o,$,B),W=I=>{I.stopPropagation(),d==null||d(I),!I.defaultPrevented&&T(!1)},[,K]=ER(Ob(e),Ob(A),{closable:!1,closeIconRender:I=>{const ne=b.createElement("span",{className:`${_}-close-icon`,onClick:W},I);return NC(I,ne,C=>({onClick:F=>{var Q;(Q=C==null?void 0:C.onClick)===null||Q===void 0||Q.call(C,F),W(F)},className:Ee(C==null?void 0:C.className,`${_}-close-icon`)}))}}),Y=typeof y.onClick=="function"||c&&c.type==="a",G=f||null,P=G?b.createElement(b.Fragment,null,G,c&&b.createElement("span",null,c)):c,k=b.createElement("span",Object.assign({},R,{ref:t,className:U,style:N}),P,K,O&&b.createElement(TM,{key:"preset",prefixCls:_}),j&&b.createElement(OM,{key:"status",prefixCls:_}));return J(Y?b.createElement(kC,{component:"Tag"},k):k)}),Rw=NM;Rw.CheckableTag=EM;const DM=`三天内拖车两次，最后把车开进宝马店院子趴窝——这是一段真实经历，也是一个对 BMW X1/X3/X5 车主的重要警示。\r
\r
## 事情经过\r
\r
前天晚上车第一次趴窝，叫了拖车。昨天白天换了电池，以为解决了，晚上开车回家一路正常。结果今天早上送孩子上学，在路上又趴窝了——早高峰，堵在路中间。\r
\r
幸好有三位好心路人帮忙把车推到辅路。等了一个小时，拖车到了附近修车行。又等了一个小时，对方告诉我：**油泵坏了，没有专业工具和编程设备，修不了，得去宝马店。**\r
\r
宝马 4S 店离修车行只有 1 mile。我的车偶尔还能打着开几十秒，于是决定赌一把——\r
\r
- 第一段：打着车，开了 0.3 mile 又趴窝\r
- 等了五六分钟，再次打着，又开了一个路口，上坡时再次趴窝\r
- 溜车滑到坡下，停在红绿灯前\r
- 第三次打着车——眼看宝马店就在路对面，踩油门冲了过去\r
- 进了宝马店院子，熄火趴窝，下车锁门\r
\r
工作人员出来说"你不能停这儿"，我说"车挂了，开不了了"。他说"那你进来吧"。\r
\r
---\r
\r
## 诊断结果\r
\r
**检查费：$280**\r
\r
下午出结论：**后备箱进水，油箱控制单元（Fuel Pump Control Module）烧毁。**\r
\r
原因：前两天去 Whole Foods 装水，不小心在后备箱撒了一两加仑，虽然擦了、晒了一下午，但没有完全干透，积水渗入控制单元导致短路。\r
\r
**维修费：$2,800**，零件还没货，需要等两天。\r
\r
---\r
\r
## BMW X1/X3/X5 车主请注意\r
\r
查了一下资料，这是这几款车型的**已知通病**：\r
\r
- 油箱控制单元位于后备箱底部，位置容易积水\r
- 天窗漏水、洗车进水、后备箱积水都可能导致同样问题\r
- 一旦烧毁，症状和我一样：车能打着但开一会儿就熄火，休息几分钟又能启动，反复如此\r
\r
**预防建议：**\r
- 后备箱放水、饮料等液体时务必确保密封或直立放置\r
- 洗车后检查后备箱底部是否有积水\r
- 如果发现后备箱曾进水，尽快检查底部是否干燥，必要时用吸水材料彻底吸干\r
- 如果出现"能启动但开一会就熄火"的症状，大概率是这个问题，建议直接去品牌店诊断，普通修车行通常没有相关工具和编程设备\r
\r
---\r
\r
*经历于 2025 年 11 月，普林斯顿地区。*\r
`,PM=`作为在 Canal Pointe 住了三年多的租户，分享一下这个小区的真实居住体验——特别适合需要骑车或步行通勤到普林斯顿大学的研究生和博士生。\r
\r
## 📍 地理位置与通勤\r
\r
Canal Pointe 紧邻校园，通勤非常方便：\r
\r
- **骑车到校园**：最近楼栋约 12 分钟，最远楼栋约 16 分钟（实测到十二生肖雕像）\r
- **步行可达**：小区对面就是 Market Fair 购物中心，有 AMC 电影院和多家餐厅\r
- **生活采购**：Whole Foods 和 Trader Joe's 骑车仅需 4–7 分钟，日常购物超方便\r
- **打车备选**：天气不好时 Uber 到校园约 $10\r
\r
---\r
\r
## 🏡 房型与租金\r
\r
### Condo / Apartment（两室两卫，2B2B）\r
\r
| 项目 | 详情 |\r
|------|------|\r
| 面积 | 约 100㎡（1,100 sqft） |\r
| 户型 | 主卧带独卫（较大）+ 次卧共用卫（稍小） |\r
| 租金（淡季） | $2,300–$2,400 / 月 |\r
| 租金（旺季） | $2,500–$2,600 / 月 |\r
\r
### Townhouse（三室两卫半，3B2.5B）\r
\r
| 项目 | 详情 |\r
|------|------|\r
| 面积 | 约 170㎡+（1,800 sqft） |\r
| 适合 | 多人合租，人均更划算 |\r
| 租金 | 约 $3,400 / 月 |\r
\r
> **租房建议**：旺季（6–8 月）价格较高，建议提前 2–3 个月开始找房。\r
\r
---\r
\r
## 💡 每月费用参考\r
\r
### 水电气\r
\r
- **水费**：已包含在 HOA 费里，由房东支付，无需额外操心\r
- **电费 + 燃气（PSE&G）**：\r
  - 夏天空调季：$80–$120\r
  - 冬天取暖季：$100–$150\r
  - 春秋过渡季：$50–$80\r
\r
### 网络（宽带）\r
\r
**Xfinity** 是该地区主要选择：\r
- 新用户优惠价：$30–50 / 月（首年）\r
- 老用户续费：$70+ / 月（有时速度还不如新用户）\r
\r
**省钱技巧**：每年换开户人（室友轮流开户）或用新邮箱重新注册，始终享受新用户价。\r
\r
另外，Xfinity 用户可在商场、图书馆等地连接 Xfinity Wi-Fi 热点（需要账号密码）。\r
\r
---\r
\r
## 📱 手机运营商推荐\r
\r
| 运营商 | 价格 | 备注 |\r
|--------|------|------|\r
| Verizon / T-Mobile / AT&T | $30+/月 | 组团 Family Plan 更划算 |\r
| Mint Mobile | 按年付更省 | 小红书上有很多使用经验分享 |\r
| **Tello** | **$6/月起** | **性价比之王，普林顿校区信号 OK** |\r
\r
> 个人推荐 Tello，日常够用，价格最低。\r
\r
---\r
\r
## 🌟 总体评价\r
\r
- 骑车通勤方便，是校园附近性价比较高的选择\r
- 小区环境安静，安全性好\r
- 生活配套完善，适合长期居住\r
- 多人合租 Townhouse 人均成本更低\r
\r
---\r
\r
*以上信息基于 2025 年初实测，租金价格随市场波动，仅供参考。*\r
`,zM=`新泽西的车辆年检（Vehicle Inspection）每两年一次，流程简单，直接开车去就行，不需要预约。整理了需要携带的证件、注意事项和普林斯顿附近的检测站信息。\r
\r
## 需要携带的材料\r
\r
去之前确认带好这三样：\r
\r
- **有效驾照**（Valid Driver's License）\r
- **原件车辆注册证**（Original Vehicle Registration）\r
- **保险卡**（Proof of Insurance）——纸质卡或手机上的电子版均可\r
\r
---\r
\r
## 流程\r
\r
1. 直接开车去 DMV 检测站，无需预约\r
2. 排队等候，工作人员会检查证件并引导入场\r
3. 检测过程车主留在车内，工作人员完成检查\r
4. 通过后获得新贴纸，贴在挡风玻璃上，有效期两年\r
\r
整个过程通常 **15–30 分钟**（含排队），繁忙时段可能更长。\r
\r
---\r
\r
## 关于 Warning 灯\r
\r
亲测：仪表盘同时亮着 **4 个 Warning 灯**（ABS、安全气囊、低胎压）的甲壳虫，照样通过了年检，顺利拿到两年有效期贴纸。\r
\r
NJ 年检主要检测**排放（Emissions）**，部分警示灯不影响通过结果。但如果 Check Engine 灯亮起，则可能导致检测不通过，建议提前处理。\r
\r
---\r
\r
## 实用提示\r
\r
- **出发前先查营业时间**：在 Google 地图搜索附近的 "NJ MVC Inspection Station"，确认当天是否营业及排队情况\r
- **避开月末和周一**：这两个时段通常排队最长\r
- **检测免费**：新泽西州车辆年检不收费\r
\r
---\r
\r
## 普林斯顿附近检测站\r
\r
**New Jersey Motor Vehicle Commission**（最近）\r
地址：3200 Brunswick Pike, Lawrence Township, NJ 08648\r
\r
出发前建议在 [Google Maps](https://maps.google.com) 搜索确认最新营业时间。\r
\r
---\r
\r
_亲测于 2025 年 9 月，政策以 NJ MVC 官网为准。_\r
`,_M=`普林斯顿紧邻宾州（Pennsylvania），不少经纪人会考虑同时持有 NJ + PA 双证以覆盖更大的客户范围。作为已持有 NJ 证书的经纪人，拿 PA 证有几种途径，但是否值得做也有讲究。\r
\r
## 获取宾州（PA）地产经纪证书的三种途径\r
\r
### 方法一：全程重新考证\r
\r
按照 PA 的标准流程：重新报名、完成 75 小时课程、参加 PA 州考。\r
\r
适合：还没有任何证书、打算从 PA 市场起步的人。对于已持有 NJ 证的人来说，这条路成本最高。\r
\r
### 方法二：在线免课程培训（直接考试）\r
\r
网上有专门为已持证经纪人设计的培训课程，完成后可申请豁免 PA 的预资格课程，**直接参加 PA 州考**，节省重新上 75 小时课的时间和费用。\r
\r
### 方法三：通过 Broker 办理（最省事）\r
\r
部分 Broker（如 KW）可以协助旗下 agent 出具申请所需的表格和手续文件，同样可以**免除重新上课**的步骤，直接走考试和申请流程。如果你已经挂靠在某家公司，可以先问问他们是否提供这项支持。\r
\r
---\r
\r
## 要不要考双证？\r
\r
来自 KW 的建议（也是比较普遍的行业共识）：\r
\r
**对于新手经纪人，不建议一开始就急着拿 PA 证。**\r
\r
原因如下：\r
\r
1. **有时间缓冲**：NJ 持证后有 **5 年**时间可以申请互认或豁免流程拿 PA 证，不用急\r
2. **增加维护成本**：双证意味着双倍的续证费用、两个州的协会会费、可能还有两套 MLS 订阅\r
3. **有更简单的替代方案**：如果偶尔遇到 PA 的客户，可以直接 **refer（转介）给 PA 本地经纪人**，收取一部分 referral commission，既不耽误客户，也有收入，无需自己持证\r
\r
> **建议**：先把 NJ 市场做熟，等有稳定的跨州业务需求时，再评估是否值得维护双证。\r
\r
---\r
\r
*信息来源于 2024 年 9 月行业交流，具体政策以 NJ/PA Real Estate Commission 官网为准。*\r
`,$M=`亲历新泽西地产经纪考试全过程（2024 年 7 月），把每个步骤的细节和踩坑经验都记录下来，希望对准备考证的朋友有帮助。完整费用和时间线请参考[另一篇文章](/services/nj-real-estate-license)。\r
\r
---\r
\r
## 第一步：选择并完成 75 小时课程\r
\r
推荐：**Center For Real Estate Education**（$279）\r
\r
选这家的原因是课程为 **self-paced 自定节奏**，可以灵活安排学习时间，整个课程历时约三周完成。\r
\r
**注意事项：**\r
- 注册缴费后会收到确认邮件，但需等 **24 小时**后才能进入课程平台\r
- 部分章节为阅读 + 讨论形式，有**最短停留时间限制**，必须等够时间才算完成，无法跳过\r
- 可以同时多开几个浏览器窗口来提高效率\r
- 课程平台最近刚换新系统，存在一些 bug：\r
  - 部分章节没有题目，但仍需手动标记为"完成"才能继续\r
  - 数学题部分答案有误（解析正确，但选项选错了），做题时需注意\r
\r
**备考资料：**\r
- 没有购买教材，在 libgen.is 下载了电子书，内容基本覆盖考点，但不够清晰完整\r
- 课程内置题库题目数量有限，建议刷 5 遍以上\r
- 补充：YouTube 上可以搜到不少 NJ 地产考试题目视频，考前看一看很有帮助\r
\r
---\r
\r
## 第二步：完成课程后联系学校\r
\r
完成课程考试后，**主动联系课程负责人**，可以加快学校提交学业完成证明的速度。\r
\r
学校提交证明 → PSI 系统处理 → 收到 PSI 邮件（可预约州考）\r
\r
这个等待过程通常约一周，亲测等了**三天**。\r
\r
---\r
\r
## 第三步：预约并参加 PSI 州考（$38）\r
\r
**考试中心 vs 在家考试：**\r
\r
建议选择**去 PSI 考试中心**考试。在家考试需要自行准备场地，有很多细节要求，稍不注意容易被判定为作弊。\r
\r
**考试当天需携带两个有效证件：**\r
1. 驾照或护照（带照片的主要 ID）\r
2. 信用卡或 SSN 卡（**注意：信用卡背面必须有本人签名**，Costco 联名卡新版本背面没有签名区，不要带这张）\r
\r
**亲历插曲（2024 年 7 月 19 日）：**\r
\r
那天正好赶上微软全球蓝屏事件，考试中心所有电脑全部崩溃。原定 10 点的考试，9 点半到场后一直等着工作人员逐台修复，期间陆续有人放弃离开。最终在 **11:28 开始考试，1:20 走出考场**，约 2 小时。\r
\r
---\r
\r
## 第四步：打指纹（$68.98）\r
\r
通过 **IdentoGO** 预约，需使用学校提供的信息（ORI 码等）登记。\r
\r
**携带物品：**\r
- 有效 ID（驾照）\r
- 信用卡\r
- 学校提供的指纹申请表\r
\r
---\r
\r
## 第五步：选择 Broker 挂靠\r
\r
新泽西规定新考取的 Salesperson 必须挂靠在持证 Broker 名下。普林斯顿地区主要选项：\r
\r
**eXp Realty**：全远程模式，本地经纪人较少，不适合刚入行、需要本地资源和带教的新人。\r
\r
**Keller Williams（KW）**：普林斯顿附近有实体办公室，面谈氛围不错，但入职前信息透明度有限，很多细节要入职后才了解。每年持续费用粗算 $2,000+（含地产协会、MLS 等），加入前建议把所有费用列清楚再决定。\r
\r
> 选 Broker 建议多聊几家，重点问清楚：月费/Desk Fee、是否有带教/mentorship、本地 agent 数量、commission split 比例。\r
\r
---\r
\r
*以上经历记录于 2024 年 8 月，相关政策和费用以官网最新信息为准。*\r
`,kM=`新泽西地产经纪证书每两年续期一次，流程不复杂，主要包括两项要求：完成继续教育（CE）课程和填写问卷。\r
\r
## 续证两项要求\r
\r
### 1. 继续教育（CE）：12 小时\r
\r
- 共需完成 **12 小时**的继续教育课程\r
- 只需上课，**不需要额外考试**\r
- 截止日期：**每个周期的 4 月 30 日前**完成，逾期罚款 **$200**\r
\r
**费用小贴士：** 课程价格通常在 $79 左右，但有时会出现 $29 的优惠价。建议不要一开始就急着注册，等一等可能遇到更好的价格。\r
\r
**新人免除条款：** 如果你的 License 是在续证周期前一年 **7 月 1 日之后**拿到的，本周期可免除 CE 要求。例如：2024 年 8 月 1 日拿证，2025 年这个 cycle 就不需要完成这 12 小时的课程。\r
\r
### 2. 问卷（Questionnaire）\r
\r
内容为声明有无违法犯罪记录，自行如实填写即可，无需额外费用。\r
\r
---\r
\r
## 续证流程\r
\r
续证需要由你的 **Broker 代为提交申请**，你本人完成 CE 和问卷后，联系 Broker 协助处理。\r
\r
**续证费用：$100**（由 Broker 帮忙操作）\r
\r
---\r
\r
## 快速对照表\r
\r
| 项目 | 详情 |\r
|------|------|\r
| CE 课时 | 12 小时 |\r
| 截止日期 | 每周期 4 月 30 日 |\r
| 逾期罚款 | $200 |\r
| CE 课程费用 | 约 $29–$79（可等优惠） |\r
| 问卷 | 自填，免费 |\r
| 续证费用 | $100（Broker 代办） |\r
| 新人豁免 | 上周期 7/1 后拿证可免 CE |\r
\r
---\r
\r
*信息更新于 2025 年 4 月，以 NJ Real Estate Commission 官网最新要求为准。*\r
`,LM=`想在新泽西考地产经纪（Real Estate Salesperson）证书？以下是完整的时间线和费用明细，从零到拿证全程约 6 周。\r
\r
## 时间线（实测）\r
\r
| 日期 | 里程碑 |\r
|------|--------|\r
| 6/17/2024 | 注册在线课程 |\r
| 6/18/2024 | 开始学习 |\r
| 7/15/2024 | 完成课程 + 课程考试（约 4 周） |\r
| 7/17/2024 | 收到 PSI 邮件，预约州考 |\r
| 7/19/2024 | 参加新泽西州考试 |\r
| 7/25/2024 | 打指纹（Fingerprinting） |\r
| 7/26/2024 | Broker 代为提交 License 申请 |\r
| 8/01/2024 | 收到证书邮件 ✅ |\r
\r
> 从注册课程到拿证，共约 **6 周**。中途因课程系统问题耽误了约一周，正常情况可能更快。\r
\r
---\r
\r
## 费用明细\r
\r
### 一次性费用\r
\r
| 项目 | 费用 |\r
|------|------|\r
| 在线课程（75小时） | $279 |\r
| 州考报名费（PSI） | $38 |\r
| 打指纹 | $68.98 |\r
| License 申请费 | $160 |\r
| **小计** | **约 $546** |\r
\r
### 拿证后的持续费用\r
\r
| 项目 | 费用 |\r
|------|------|\r
| 地产协会会费 | $491 / 年 |\r
| BrightMLS 激活费 | $250（一次性） |\r
| BrightMLS 季度费 | $120 / 季度（约 $480/年） |\r
| Desk Fee（部分公司收取） | 约 $100 / 月 |\r
| 保险费（部分公司收取） | 约 $500 / 年 |\r
| License 续费（每两年一次） | 待确认 |\r
\r
> **注意**：各家地产公司政策不同，Desk Fee 和保险费不一定都收，加入前务必确认。\r
\r
---\r
\r
## 考试流程简述\r
\r
1. **完成 75 小时课程**：新泽西州要求完成官方认可的 75 小时预资格课程（Pre-licensing Course），可线上完成\r
2. **通过课程内部考试**：完成学习后先通过课程方的考试\r
3. **预约 PSI 州考**：课程合格后收到 PSI 邮件，可在线预约考试时间和地点\r
4. **通过州考**：考试分"通用"和"新泽西"两部分\r
5. **打指纹**：预约并完成背景调查指纹采集\r
6. **找 Broker 挂靠 + 提交申请**：新泽西要求新取证的 Salesperson 必须挂靠在持证 Broker 名下才能申请\r
\r
---\r
\r
*费用和流程基于 2024 年 8 月信息，可能随时变化，申请前请以 NJ Real Estate Commission 官网为准。*\r
`,jM=`## 普林斯顿中餐馆推荐\r
\r
以下餐厅均来自社区成员真实推荐，信息持续更新。\r
\r
---\r
\r
### 中式快餐\r
\r
**Shan's Chinese Kitchen**\r
普林斯顿大学附近，午餐人气很旺，价格实惠。\r
\r
**Yue Food**\r
盖茨曼广场（Witherspoon Street），外卖方便。\r
\r
---\r
\r
### 正餐 / 聚餐\r
\r
**Da Wang Noodles**\r
主打北方面食，牛肉拉面口碑不错。\r
\r
---\r
\r
### 周边城市（30 分钟内）\r
\r
#### Edison（华人餐厅最集中的区域）\r
\r
- **Lu's Farm** — 上海菜，周末需要订位\r
- **Nom Wah Noodle Bar** — 广式点心\r
- **99 Ranch 附近美食广场** — 各类亚洲料理\r
\r
#### New Brunswick\r
\r
- **Hanami** — 日本料理，性价比高\r
\r
---\r
\r
> 💡 如果你有新的推荐，欢迎在「留言反馈」告诉我，我会持续更新。\r
`,HM=`## 普林斯顿医疗资源指南\r
\r
刚来普林斯顿，找医生是头等大事。本文整理了社区常用医疗资源。\r
\r
---\r
\r
### 第一步：选择保险计划\r
\r
- 如果通过公司购买保险，重点看 **network**（网络内医生）\r
- 常见保险：Aetna、Cigna、United Healthcare、BlueCross\r
- 确认你想看的医生是否在 **in-network**，否则费用大幅增加\r
\r
---\r
\r
### 家庭医生（Primary Care）\r
\r
建议刚到时先找好家庭医生，年度体检、转介专科都需要 PCP。\r
\r
**Princeton Family Medicine**\r
- Plainsboro 和 Princeton 都有诊所\r
- 接受多种保险\r
\r
**Penn Medicine**\r
- 覆盖范围广，预约在线可做\r
\r
---\r
\r
### 儿科（Pediatrics）\r
\r
**Princeton Pediatrics**\r
- 社区口碑好，新生儿和学龄儿童都接诊\r
- 建议提前预约，新患者等待时间可能较长\r
\r
---\r
\r
### 常用专科\r
\r
| 专科 | 建议 |\r
|------|------|\r
| 牙医 | 尽快找，很多好牙医排期 3–6 个月 |\r
| 眼科 | 每年检查，学龄儿童尤其重要 |\r
| 皮肤科 | 排期较长，建议提前预约 |\r
\r
---\r
\r
### 紧急情况\r
\r
- **非急救** → Urgent Care（比急诊室便宜很多）\r
  - FastER Urgent Care, Plainsboro\r
- **急救** → Penn Medicine Princeton Medical Center（急诊室）\r
- **拨打 911** → 生命威胁情况\r
\r
---\r
\r
> 💡 **小贴士**：很多保险允许 telehealth（电话/视频看诊），感冒发烧可以先用，省去跑医院的时间。\r
`,BM=`## 搬来普林斯顿必知\r
\r
欢迎来到普林斯顿！这里整理了刚搬来最常用到的信息。\r
\r
---\r
\r
### 第一周要做的事\r
\r
- [ ] 办理驾照（NJ DMV，需要预约）\r
- [ ] 注册车辆（有 60 天宽限期）\r
- [ ] 找家庭医生、儿科医生\r
- [ ] 了解垃圾和可回收物收集时间\r
- [ ] 注册孩子入学\r
\r
---\r
\r
### 购物\r
\r
**超市**\r
- Stop & Shop — Plainsboro（最近）\r
- Wegmans — Princeton（品质好，稍远）\r
- H Mart — Edison（40 分钟，亚洲食材最全）\r
- 99 Ranch — Edison（台湾食材）\r
\r
**华人食材**\r
Edison 是最近的大型华人超市聚集地，周末可以一次采购够一周的量。\r
\r
---\r
\r
### 交通\r
\r
**开车**\r
99% 的日常出行需要开车。建议尽快熟悉：\r
- Route 1（南北向主干道）\r
- I-295、I-95（高速）\r
\r
**公共交通**\r
- NJ Transit 火车可到 New York Penn Station（约 1 小时）\r
- 本地公交覆盖有限\r
\r
---\r
\r
### 中文资源\r
\r
- 普林斯顿中文学校（周末课程）\r
- 本地华人微信群（扫描首页二维码加入）\r
- 本网站 😄\r
\r
---\r
\r
### 社区活动\r
\r
- Farmers Market — 周六上午，Nassau Street\r
- 普林斯顿公立图书馆 — 各类免费活动\r
- 社区中心 — 游泳、运动课程\r
\r
---\r
\r
> 有问题随时在留言板提问，社区里的朋友会帮忙解答！\r
`,FM=`在普林斯顿找校外租房，除了微信群和中介，还有两个值得关注的平台。\r
\r
## 1. Princeton Off-Campus Housing（官方平台）\r
\r
**网址**：[housing.princeton.edu/off-campus](https://housing.princeton.edu/off-campus)\r
\r
这是普林斯顿大学提供的官方校外住房信息平台，房源由房东直接发布，相对正规可靠。\r
\r
**登录方式**：\r
- **在读学生**：使用 PU Net ID 直接登录，可查看完整房源列表\r
- **访客/非学生**：可申请访客账号，但需要等待审核批准\r
\r
> 建议在读同学优先使用 Net ID 登录，访客账号审核周期不确定，找房时间紧的话可能来不及。\r
\r
---\r
\r
## 2. Nextdoor\r
\r
**网址**：[nextdoor.com](https://nextdoor.com)\r
\r
Nextdoor 是一个基于地理位置的邻里社区平台，主要用于本地居民之间的信息分享，偶尔也有人在上面发布租房信息或寻房需求。\r
\r
**使用建议**：\r
- 可以发帖说明自己在找什么类型的房子，有时会有本地居民直接联系你\r
- 和微信群、OCH 结合使用，覆盖更多房源渠道\r
\r
⚠️ **注意安全**：Nextdoor 上的租房信息均为私人发布，务必仔细甄别，建议实地看房后再付款，避免诈骗。\r
\r
---\r
\r
## 其他找房渠道\r
\r
综合来看，推荐多渠道并行：\r
\r
| 渠道 | 特点 |\r
|------|------|\r
| Princeton OCH | 官方平台，房源较正规 |\r
| Nextdoor | 邻里私人信息，需甄别 |\r
| 普林斯顿华人微信群 | 中文社区，方便沟通，可加群询问 |\r
| Zillow / Apartments.com | 大型租房平台，房源多 |\r
| Facebook Groups | 普林斯顿本地华人租房群 |\r
\r
---\r
\r
*信息更新于 2025 年 5 月，平台政策可能随时变化，以官网为准。*\r
`,IM=`## 普林斯顿学区学校选择指南\r
\r
普林斯顿周边有几个口碑很好的学区，买房前一定要了解清楚。\r
\r
---\r
\r
### 主要学区对比\r
\r
| 学区 | 评分 | 特点 |\r
|------|------|------|\r
| West Windsor-Plainsboro (WW-P) | ★★★★★ | 亚裔比例高，学术竞争强 |\r
| Princeton Public Schools | ★★★★★ | 多元化，普林斯顿大学资源 |\r
| Hillsborough | ★★★★ | 性价比高，房价相对低 |\r
\r
---\r
\r
### West Windsor-Plainsboro (WW-P) 学区\r
\r
这是普林斯顿华人最集中的学区，华裔学生比例约 40%。\r
\r
**小学**\r
- Dutch Neck Elementary\r
- Millstone River School\r
- Maurice Hawk School\r
\r
**初中**\r
- Community Middle School\r
- Thomas R. Grover Middle School\r
\r
**高中**\r
- WW-P High School South（Plainsboro 区域）\r
- WW-P High School North（West Windsor 区域）\r
\r
两所高中都有 AP 课程，学术资源相当。\r
\r
---\r
\r
### 学区房注意事项\r
\r
1. 购房前用地址查询学区：[greatschools.org](https://www.greatschools.org)\r
2. 学区划分有时变化，以学区官网为准\r
3. 同一镇不同街道可能属于不同学校\r
\r
---\r
\r
### 华人社区资源\r
\r
- **普林斯顿中文学校** — 周末中文课\r
- **各类课外辅导班** — 数学、作文、钢琴等\r
- 微信群里经常有家长分享最新学校动态\r
\r
---\r
\r
> 学区信息每年可能更新，以学区官方网站为准。\r
`,VM=`暑期实习、短期访问或刚到普林斯顿还没找到长租房——短租是很多人绕不开的问题。亲身踩坑经验分享如下。\r
\r
## 主流平台的现实\r
\r
| 平台 | 短租体验 |\r
|------|---------|\r
| Zillow / Redfin | 90% 的房东一听"3 个月"就挂电话 |\r
| Craigslist | 有房源，但骗子多，需要格外谨慎 |\r
| Airbnb | 月租价格直接翻倍，$3,000+ 起步 |\r
\r
简单说：普林斯顿短租市场非常不友好，早做准备是关键。\r
\r
---\r
\r
## 💡 实用解决方案\r
\r
### 1. Extended Stay America\r
\r
连锁酒店式公寓，专为短期居住设计，是最省心的选择：\r
\r
- 明码标价，无需讨价还价\r
- **如果公司有协议价，可省约 20%，入职前记得问 HR**\r
- 适合 1–2 个月的紧急过渡期\r
\r
### 2. 华人 & 学校社群\r
\r
- **微信租房群**：暑期常有学生发布转租信息，价格合理，沟通方便。加入普林斯顿华人微信群可以直接问\r
- **Facebook Marketplace**：偶尔有短租或暑期转租房源，值得关注\r
- **学校 Off-Campus Housing（OCH）**：[housing.princeton.edu/off-campus](https://housing.princeton.edu/off-campus)，有时也会出现短期房源\r
\r
### 3. 人脉网络（往往最有效）\r
\r
- 联系同期实习生、学长学姐，询问是否有合租机会\r
- 向实验室或办公室群发邮件说明需求\r
- 通过 LinkedIn 联系校友，有时能找到短期借住或转租机会\r
\r
---\r
\r
## ⚠️ 防骗提示\r
\r
使用 Craigslist 或其他私人平台时：\r
\r
- 不要在未见房前转账或付押金\r
- 警惕"价格异常低"或"房东在海外无法见面"的帖子\r
- 优先选择当面看房、签正式合同\r
\r
---\r
\r
## 加入社区，互助找房\r
\r
华人社区是找短租信息最高效的渠道之一。欢迎加入普林斯顿华人微信群，在群里发布或查询短租需求，也可以加入我们的 [Discord 社区](https://discord.gg/D6zDx8UTMK) 交流。\r
\r
---\r
\r
*信息基于 2025 年 5 月经验，短租市场变化较快，以实际情况为准。*\r
`,UM=`## 普林斯顿暑期夏令营指南\r
\r
暑假报名竞争激烈，建议 **1月前** 开始关注，热门营地有时需要抽签。\r
\r
---\r
\r
### 普林斯顿大学相关项目\r
\r
**Princeton University Summer Programs**\r
- 年龄：高中生为主\r
- 费用：较高，有奖学金\r
- 官网：summer.princeton.edu\r
\r
---\r
\r
### 本地体育夏令营\r
\r
**West Windsor-Plainsboro 夏令营**\r
- 游泳、篮球、足球等\r
- 费用：约 $200–$400 / 周\r
- 报名通常 2–3 月开始\r
\r
**Princeton Recreation 夏令营**\r
- 网球、游泳、综合运动\r
- 适合小学生\r
\r
---\r
\r
### STEM / 学术类\r
\r
**iD Tech Camps**\r
- 编程、机器人、游戏设计\r
- 在普林斯顿大学校园举办\r
- 费用：约 $800–$1200 / 周\r
\r
---\r
\r
### 中文学校暑假班\r
\r
普林斯顿中文学校通常提供暑假中文强化班，适合双语家庭的孩子。\r
\r
---\r
\r
### 报名建议\r
\r
1. 关注学区官网：[ww-p.org](https://www.ww-p.org)\r
2. 加入本地微信群获取实时信息\r
3. 部分项目有 financial aid，记得询问\r
\r
---\r
\r
> 有其他夏令营推荐？欢迎留言补充！\r
`,GM=Object.assign({"../content/posts/bmw-water-damage-warning/index.md":DM,"../content/posts/canal-pointe-housing/index.md":PM,"../content/posts/nj-car-inspection/index.md":zM,"../content/posts/nj-pa-real-estate-dual-license/index.md":_M,"../content/posts/nj-real-estate-exam-guide/index.md":$M,"../content/posts/nj-real-estate-license-renew/index.md":kM,"../content/posts/nj-real-estate-license/index.md":LM,"../content/posts/princeton-chinese-restaurant/index.md":jM,"../content/posts/princeton-medical-guide/index.md":HM,"../content/posts/princeton-newcomer-guide/index.md":BM,"../content/posts/princeton-off-campus-housing/index.md":FM,"../content/posts/princeton-school-guide/index.md":IM,"../content/posts/princeton-short-term-housing/index.md":VM,"../content/posts/princeton-summer-camp/index.md":UM}),qM=Object.fromEntries(Object.entries(GM).map(([e,t])=>[e.split("/").at(-2),t])),uu=[{id:"bmw-water-damage-warning",title:"三天拖车两次：BMW 后备箱进水烧控制单元，X1/X3/X5 车主注意",summary:"后备箱撒了一两加仑水，以为擦干了没事，结果油箱控制单元烧毁，维修费 $2,800。这是 BMW X1/X3/X5 的已知通病。",category:"life",tags:["汽车","BMW","维修","踩坑","经验"],location:"Princeton NJ",author:"Andrew",published:"2025-11-20",updated:"2025-11-20",featured:!1,readingTime:4},{id:"nj-car-inspection",title:"新泽西车辆年检（DMV Inspection）全攻略",summary:"两年一次，无需预约，带好驾照+注册证+保险卡直接去。亲测仪表盘亮 4 个 Warning 灯照样过检。",category:"services",tags:["年检","DMV","汽车","新泽西","MVC"],location:"Princeton NJ",author:"Andrew",published:"2025-09-21",updated:"2025-09-21",featured:!1,readingTime:2},{id:"nj-real-estate-license-renew",title:"新泽西地产经纪证书续期：CE 要求、费用与新人豁免",summary:"每两年续证一次：12 小时 CE 课程（4/30 截止）+ 问卷 + $100 续证费，新人可能免除 CE，课程费用可等优惠价。",category:"services",tags:["地产","续证","CE","新泽西","经纪人"],location:"New Jersey",author:"Andrew",published:"2025-04-11",updated:"2025-04-11",featured:!1,readingTime:2},{id:"nj-pa-real-estate-dual-license",title:"NJ + PA 地产经纪双证：三种途径与是否值得考的建议",summary:"已持有 NJ 证想拿 PA 证？三种方法对比，以及为什么新手经纪人可以先不急着考双证。",category:"services",tags:["地产","双证","宾州","新泽西","经纪人","职业"],location:"New Jersey / Pennsylvania",author:"Andrew",published:"2024-09-20",updated:"2024-09-20",featured:!1,readingTime:3},{id:"nj-real-estate-exam-guide",title:"新泽西地产经纪考试全攻略：课程、州考、打指纹、选 Broker",summary:"亲历 2024 年 7 月考试的详细记录：课程选择踩坑、PSI 州考当天遭遇微软蓝屏事件、指纹预约到选 Broker 全流程。",category:"services",tags:["地产","考试","新泽西","职业","经纪人","PSI"],location:"New Jersey",author:"Andrew",published:"2024-08-06",updated:"2024-08-06",featured:!1,readingTime:5},{id:"nj-real-estate-license",title:"新泽西地产经纪证书：6周拿证时间线与完整费用",summary:"从注册课程到收到证书的实测时间线，一次性费用约 $546，加上地产协会、MLS 等持续费用全部列清楚。",category:"services",tags:["地产","资格证","新泽西","职业","经纪人"],location:"New Jersey",author:"Andrew",published:"2024-08-29",updated:"2024-08-29",featured:!0,readingTime:3},{id:"princeton-short-term-housing",title:"普林斯顿短租攻略：实习/过渡期住房怎么找",summary:"主流平台踩坑总结 + 三个实用方案：Extended Stay America、华人社群转租、人脉网络，短期居住必读。",category:"housing",tags:["短租","实习","过渡期","Extended Stay","找房"],location:"Princeton NJ",author:"Andrew",published:"2025-05-12",updated:"2025-05-12",featured:!1,readingTime:3},{id:"princeton-off-campus-housing",title:"普林斯顿大学学生校外租房平台推荐",summary:"两个实用找房渠道：学校官方 Off-Campus Housing 平台（支持 PU Net ID 登录）和邻里平台 Nextdoor。",category:"housing",tags:["租房","校外住房","学生","OCH","Nextdoor"],location:"Princeton NJ",author:"Andrew",published:"2025-05-24",updated:"2025-05-24",featured:!1,readingTime:2},{id:"canal-pointe-housing",title:"Canal Pointe 小区租房体验｜骑车通勤到普林斯顿大学",summary:"住了三年多的亲身体验：房型价格、水电网费用、手机运营商推荐，研究生/博士通勤首选。",category:"housing",tags:["租房","Canal Pointe","研究生","通勤","公寓"],location:"Princeton NJ",author:"Andrew",published:"2025-05-12",updated:"2025-05-12",featured:!0,readingTime:4},{id:"princeton-chinese-restaurant",title:"普林斯顿中餐馆推荐",summary:"来自社区成员的中餐馆推荐，涵盖各类菜系，持续更新。",category:"life",tags:["餐厅","美食","中餐"],location:"Princeton NJ",author:"Andrew",published:"2026-03-05",updated:"2026-03-05",featured:!0,readingTime:5},{id:"princeton-summer-camp",title:"孩子暑期夏令营完整指南",summary:"汇总普林斯顿地区各类夏令营项目，含费用、报名时间和社区经验。",category:"education",tags:["夏令营","孩子","暑假"],location:"Princeton NJ",author:"Andrew",published:"2026-02-20",updated:"2026-02-20",featured:!0,readingTime:8},{id:"princeton-medical-guide",title:"新移民必读：普林斯顿医疗资源",summary:"家庭医生、儿科、专科医生推荐，含保险注意事项。",category:"services",tags:["医疗","医生","保险","新移民"],location:"Princeton NJ",author:"Andrew",published:"2026-02-15",updated:"2026-02-15",featured:!0,readingTime:6},{id:"princeton-school-guide",title:"普林斯顿学区学校选择指南",summary:"West Windsor-Plainsboro 学区各学校介绍、学区房和择校建议。",category:"education",tags:["学校","学区","择校"],location:"Princeton NJ",author:"Andrew",published:"2026-02-01",updated:"2026-02-01",featured:!0,readingTime:7},{id:"princeton-newcomer-guide",title:"搬来普林斯顿必知：生活全攻略",summary:"刚搬来普林斯顿？这份指南帮你快速了解本地生活的方方面面。",category:"life",tags:["新移民","生活","攻略"],location:"Princeton NJ",author:"Andrew",published:"2026-01-20",updated:"2026-01-20",featured:!1,readingTime:10}],WM=e=>qM[e]??"",JM=(e=5)=>[...uu].sort((t,r)=>new Date(r.published)-new Date(t.published)).slice(0,e),YM=()=>uu.filter(e=>e.featured),XM=e=>[...uu].filter(t=>t.category===e).sort((t,r)=>new Date(r.published)-new Date(t.published)),KM=e=>uu.find(t=>t.id===e),QM=e=>{const t=[...uu].sort((a,o)=>new Date(o.published)-new Date(a.published)),r=t.findIndex(a=>a.id===e);return{prev:r>0?t[r-1]:null,next:r<t.length-1?t[r+1]:null}},ZM={life:[1,3,5,6,7,19,42,47,48,50,52],education:[8,20,30,32,41,51],housing:[9,12,15,17,18,23,24,25,26,29,34,37,38,39,40,45,46,49],services:[2,4,10,11,13,14,16,21,22,27,28,31,35,36,43,44],community:[33,42,52]},Xc={life:"生活",education:"教育",housing:"住房",services:"服务",community:"社区"},Kc={life:{color:"#fa8c16",bg:"#fff7e6"},education:{color:"#52c41a",bg:"#f6ffed"},housing:{color:"#1677ff",bg:"#e6f4ff"},services:{color:"#ff4d4f",bg:"#fff2f0"},community:{color:"#722ed1",bg:"#f9f0ff"}},Ow=""+new URL("wechat-general-BB0oIcVE.jpg",import.meta.url).href,Mw=""+new URL("wechat-parents-BV4vbZCY.jpg",import.meta.url).href,Nw=""+new URL("wechat-housing-BGGhMhlZ.jpg",import.meta.url).href,eN=[{name:"Daycare",emoji:"🧒",href:"/education"},{name:"餐馆",emoji:"🍜",href:"/life"},{name:"租房",emoji:"🏠",href:"/housing"},{name:"医生",emoji:"🏥",href:"/services"},{name:"公园",emoji:"🌿",href:"/life"},{name:"微信群",emoji:"💬",href:"/community"}],tN=()=>{const e=oo(),t=JM(5),r=YM().slice(0,6);return V.jsxs("div",{children:[V.jsxs("div",{className:"home-hero",children:[V.jsx("h1",{className:"home-hero-title",children:"Princeton 华人生活指南"}),V.jsxs("p",{className:"home-hero-subtitle",children:["分享普林斯顿地区的生活信息",V.jsx("br",{}),"衣食住行、教育医疗、社区资源"]}),V.jsx("a",{href:"#/life",className:"home-hero-btn",children:"浏览最新文章 →"})]}),V.jsxs("div",{className:"home-section",children:[V.jsx("h2",{className:"home-section-title",children:"快速入口"}),V.jsx("div",{className:"home-quick-grid",children:eN.map(a=>V.jsxs("div",{className:"home-quick-card",onClick:()=>e(a.href),children:[V.jsx("span",{className:"home-quick-emoji",children:a.emoji}),V.jsx("span",{className:"home-quick-name",children:a.name})]},a.name))})]}),V.jsxs("div",{className:"home-content-row",children:[V.jsxs("div",{className:"home-posts-col",children:[V.jsxs("div",{className:"home-col-header",children:[V.jsx("h2",{className:"home-section-title",style:{margin:0},children:"最新文章"}),V.jsx("a",{href:"#/life",className:"home-view-all",children:"查看全部 →"})]}),V.jsx("div",{className:"home-posts-list",children:t.map(a=>{const{color:o,bg:s}=Kc[a.category]||{};return V.jsxs("div",{className:"home-post-item",onClick:()=>e(`/${a.category}/${a.id}`),children:[V.jsx("span",{className:"home-post-tag",style:{color:o,background:s},children:Xc[a.category]}),V.jsx("div",{className:"home-post-title",children:a.title}),V.jsxs("div",{className:"home-post-footer",children:[V.jsx("span",{className:"home-post-excerpt",children:a.summary}),V.jsx("span",{className:"home-post-date",children:a.published})]})]},a.id)})})]}),V.jsxs("div",{className:"home-guides-col",children:[V.jsx("h2",{className:"home-section-title",children:"热门指南"}),V.jsx("div",{className:"home-guides-list",children:r.map(a=>{const{color:o,bg:s}=Kc[a.category]||{};return V.jsxs("div",{className:"home-guide-item",onClick:()=>e(`/${a.category}/${a.id}`),children:[V.jsx("span",{className:"home-guide-tag",style:{color:o,background:s},children:Xc[a.category]}),V.jsx("span",{className:"home-guide-title",children:a.title})]},a.id)})})]})]}),V.jsx("div",{className:"home-community-wrapper",children:V.jsxs("div",{className:"home-section",children:[V.jsx("h2",{className:"home-section-title",children:"社区"}),V.jsx("div",{className:"home-community-grid",children:[{emoji:"🛋️",name:"二手交易",desc:"家具、电器、婴儿用品",coming:!0},{emoji:"🌱",name:"种苗交换",desc:"春季种苗、蔬菜秧苗分享",coming:!0},{emoji:"📅",name:"社区活动",desc:"聚餐、球赛、节日活动",coming:!0},{emoji:"💬",name:"加入社区",desc:"扫码进微信群",onClick:()=>e("/community")}].map(a=>V.jsx(iw,{title:a.coming?"即将上线，敬请期待":null,children:V.jsxs("div",{className:"home-community-item",onClick:a.onClick,style:{cursor:a.onClick?"pointer":"not-allowed",opacity:a.coming?.55:1},children:[V.jsx("span",{className:"home-community-emoji",children:a.emoji}),V.jsxs("div",{children:[V.jsx("div",{className:"home-community-name",children:a.name}),V.jsx("div",{className:"home-community-desc",children:a.desc})]})]})},a.name))}),V.jsx("div",{className:"home-qr-grid",style:{marginTop:"24px"},children:[{img:Ow,name:"综合交流"},{img:Mw,name:"家长圈"},{img:Nw,name:"家居服务"}].map(a=>V.jsxs("div",{className:"home-qr-card",children:[V.jsx("img",{src:a.img,alt:a.name,style:{width:"120px",height:"120px",borderRadius:"8px",objectFit:"cover"}}),V.jsxs("div",{className:"home-qr-label",children:[V.jsx(gS,{style:{color:"#07c160",marginRight:"4px"}}),a.name]})]},a.name))}),V.jsx("div",{style:{marginTop:"24px"},children:V.jsxs("a",{href:"https://discord.gg/D6zDx8UTMK",target:"_blank",rel:"noopener noreferrer",className:"home-discord-link",children:[V.jsx(Yg,{}),V.jsx("span",{children:"加入 Discord 社区"})]})})]})})]})},nN="modulepreload",rN=function(e,t){return new URL(e,t).href},Wb={},aN=function(t,r,a){let o=Promise.resolve();if(r&&r.length>0){const c=document.getElementsByTagName("link"),f=document.querySelector("meta[property=csp-nonce]"),h=(f==null?void 0:f.nonce)||(f==null?void 0:f.getAttribute("nonce"));o=Promise.allSettled(r.map(d=>{if(d=rN(d,a),d in Wb)return;Wb[d]=!0;const g=d.endsWith(".css"),v=g?'[rel="stylesheet"]':"";if(!!a)for(let w=c.length-1;w>=0;w--){const A=c[w];if(A.href===d&&(!g||A.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${d}"]${v}`))return;const S=document.createElement("link");if(S.rel=g?"stylesheet":nN,g||(S.as="script"),S.crossOrigin="",S.href=d,h&&S.setAttribute("nonce",h),document.head.appendChild(S),g)return new Promise((w,A)=>{S.addEventListener("load",w),S.addEventListener("error",()=>A(new Error(`Unable to preload CSS for ${d}`)))})}))}function s(c){const f=new Event("vite:preloadError",{cancelable:!0});if(f.payload=c,window.dispatchEvent(f),!f.defaultPrevented)throw c}return o.then(c=>{for(const f of c||[])f.status==="rejected"&&s(f.reason);return t().catch(s)})};function iN({id:e,host:t,repo:r,repoId:a,category:o,categoryId:s,mapping:c,term:f,strict:h,reactionsEnabled:d,emitMetadata:g,inputPosition:v,theme:y,lang:S,loading:w}){const[A,x]=b.useState(!1);return b.useEffect(()=>{A||aN(()=>import("./giscus-Ci9LqPcC-BNebfDgq.js"),[],import.meta.url).then(()=>x(!0))},[]),A?V.jsx("giscus-widget",{id:e,host:t,repo:r,repoid:a,category:o,categoryid:s,mapping:c,term:f,strict:h,reactionsenabled:d,emitmetadata:g,inputposition:v,theme:y,lang:S,loading:w}):null}const oN=()=>V.jsxs("div",{children:[V.jsx("p",{children:"欢迎留言！ 请先登录您的 GitHub 账号，即可在本频道留言。如果您有任何意见或建议，欢迎随时提出，我会尽快查看并更新内容"}),V.jsx(iN,{repo:"princetonhuaren/princetonhuaren.github.io",repoId:"R_kgDOOMiq3w",category:"General",categoryId:"DIC_kwDOOMiq384CoW5R",mapping:"pathname",reactionsEnabled:"1",emitMetadata:"1",theme:"light",inputPosition:"top",loading:"lazy",lang:"en"})]}),Qi=[{id:1,title:"理发美发",content:`

美发
美发美容7328218883 

(609) 799-6698 Meilin。在家里，Plainsboro，电话预约。男生理发和女生做头发都可。非常好，二十几年了。

May's Beauty Salon 形象 美寿      
TEL:732-821-8883 CELL:908-930-2003
3550 Route 27,
Kendall Park, NJ 08824
Mon -Fri: 10:00am-7:30pm Sat: 10:00am-7:00pm Sun: 11:00am - 6:00pm

SILK CUT
HAIR DESIGNS
(aPlainsboro Road, Plainsboro, NJ 0853617#B Princeton Mcadows Shopping Center
Tel:(609)750-8868(609)750-8869Open 7 Days a Week: Mon-Sat: 10am-8pm / Sun: 10am-5pm
群主，這家剪头发不錯，女的找Ann,男的找Elson. 
上次去silk cut 服务态度很一般 后面也没给修好
推荐Kim, hairdresser in Silk cut, Plainsboro, 732-816-8869 已经用她5年了。 师傅是福建人，人和蔼，手艺好。

爱迪生雾都发廊，电话：732 777 0980。HMart对面，今天陪家人去这儿理发，女生长头发，仔仔细细理了2个小时，才35刀+小费，关键还理的超好，家人非常满意，老板理发店铺开了20年，孩子都送去上大学了。
OPEN 7 DAYS
Mon.-Sat.: 9:30am-8:00pr
Sun.: 9:30am-7:00p
霧都美容美髮設計中心
New Art Beauty Salon
Hair Design
1782 State Route 27
Edison, NJ 08817
H Mart 對面馬路
Next to Dunkin Donuts parking in Rear

个人意见：理发师技术最好是structure hair 的 Larry, 在Edison. 女生$60+tip. 近的韩国美女也是不错的选择，很认真，有时会花上1.5小时。女生$40+tip5 吧
我今天带我儿子去。他们怎么收费？
男生$30的樣子
要事先预约

我一直找这位韩国美女剪头发，个人感觉不错，她是在自己家开的个小发廊 June (732) 470-6996 18 Dey Rd Plainsboro NJ 之前群友介紹的

Fashion Hair Salon 
2090 Nj-27 Edison NJ 08817 
732-662-7112
Bendy

HAIR STRUCTURE
地址:1945 Lincoln Hwy(Route27) Edison,NJ 08817
联系电话：732-650-1620

Serena 609 955 2165
我小孩想染发，她的价格在100-350美元左右
手艺很好！找Serena理发后我妈都说我年轻了十几岁
普林周边最靠谱的美发师。非常敬业，理发技术高超，收费合理！
看到群里推荐的Serena 理发美容，今天下午和女儿去剪发，果然名不虚传，货真价实，这年头能够找到如此手艺高超，价格便宜的剪发太难了。谢谢Serena 让我看起来年轻了好多啊，又可以美美哒啦
https://calendly.com/serenajiang9050/serena
用这个link 就是可以预约Serena 

莉莉发廊
7323989999
莉莉髮廊：剪髮男25，女45～剪得蠻仔細的，我老公很喜歡，比在Edison剪便宜

May's Beauty Salon
3550 NJ-27, Kendall Park, NJ 08824 ÷E


Ann理发
(609) 750-8869

177 3547 (Silk Cut II)
Beauty salon
660 Plainsboro Rd # 17, Plainsboro
Township, NJ 08536, United States
(609) 750-8869 ·

魏大姐是退休专业理发师，曾在中国大城市开理发店20余年。尤其擅长男士女士理发，老年人染发。价格: 男士女士理发15刀，儿童理发20刀。不强制收取小费，不包括洗和吹，最好服务前洗干净头发。染发15刀，需要顾客自带染发膏。
地址: 100 Middlesex Blvd, Plainsboro, NJ 08536
公寓一楼有门禁， (848) 313-0549服务时间早上八点到晚上八点之间

    `},{id:2,title:"驾照/危急情况处理",content:`

新泽西交通局中英文笔试练习题库
aiqiang.org
64f5f304bdfc0ad4c86cd2cd_256x256compliant (1).png
驾照中文题库，挺有用的

https://www.nj.gov/mvc/about/manuals.htm

前几个礼拜才刚考完，个人觉得官方出的手册也很有用

求助万能群，国内驾照想申请美国临时驾照，请问国内驾照是要找律师翻译公证吗？不知找谁翻译好呢？
#中国驾照翻译件，用于新泽西交通局免路考申请使用。费用和流程请看: https://aiqiang.org/nj-license-intro/    驾照照片材料和你的邮寄地址请发到 nycourtchen@gmail.com

淘宝翻译，已经顺利换了新泽西的驾照。供参考。美国临时驾照就不清楚了

国内驾照NJ换驾照，无需路考
我没有公证驾照，没有路考，要考交规，测视力

Hertz网站上免费翻译即可，即使换驾照，DMV一样认可

您好我们刚刚在3200 brunswick 拿到临时驾照 用的hertz微信翻译 ，过了笔试看到是中国驾照（给了国际驾照也不要），就直接给了路试sticker，接着就排队办驾照。全程什么也没问.
这个office只要是中国驾照应该就给免路试
我在3200 Brunswick Pike, Lawrence Township, NJ 08648拿到了

#小程序://Hertz国际租车/u8mZkABPByrzw6p

撞车后如果那人已走了， 给对方打电话， 要Insurance info， 马上打她的insurance。 如果她不给， 说要报警， 如果她真的不给， 你马上打电话。 事出哪一township， 就打那township police

遇到产品质量问题商家不退货昨天说的是Better Business Bureau   https://www.bbb.org/

0086-1012308，中领馆全球热线

越到歧视
有些小事可以开始做，有需要帮忙的在群里喊一声。比如几次群里邻居朋友讲到遇到bias cases，记录事件信息，1）向州大检察官办公室报案，2）以个人向普林警局报案，3）华人协会收集整理，向警局要求加强管理事发地区。爱村学委帮着向council 警局要求认真对待，最近没有听说新事件

给编辑的信/报纸编辑投稿
To    krystal    
editor@planetprinceton.com
don.gilpin@witherspoonmediagroup.com

发生被歧视骚扰或者房子周围有可疑的人
Call the Princeton police non emergency number 609 921 2100
出去度假前可以去普林斯顿警察局登记一下，他们会偶尔派警察过来看看
Vacant House Check Request
princetonnj.gov
favicon.ico
如果度假的时候家里有人来帮忙遛狗，剪草（现在应该没有了），或者扫雪，最好注明一下，留一下电话

    `},{id:3,title:"普林斯顿附近的餐厅",content:`

餐馆的推荐比较难，每个人的口味都不一样。下面几个中国餐馆我们试过，还及格。

Canton Palace
点心 908-526-8888    
Reserve a table
Dine-in·Takeout·No-contact delivery       
216 W Main St,Somerville,NJ 08876

Golden Seafood Restaurant
Cantonese restaurant.$10-20.
518 Old Post Rd Suite 3, Edison, NJ 08817
1711 NJ-27, Edison, NJ 08817
广东餐馆。饮茶或广东小炒。

小笼包这边有上海小笼，小食代，。皮蛋瘦肉粥只有早茶的时候在悦满楼吃过，只是觉得不如自己煲。

Weee 上可以买 Edison送餐；可以和菜一起买。满50才免运费；有个小费，不管买啥都有，选3块，餐馆提前一天才能取消。第一单没买满50 收5块快递费，但是你晚点凑满了，收到货第二天会退

如果喜欢川菜就试试Hamilton 的川妹子。我们特别喜欢他们的“酸豆角炒肉末”。用的是他们自己泡的酸豆角。

我们比较喜欢“莲园Lotus Garden”的沙锅鱼头或沙锅鲈鱼（晚餐）和牛腩汤河粉（中餐，很有广州街头小吃的感觉)
10 Schalks Crossing Rd, Plainsboro Township, NJ 08536

Hot Wok Café
店不大，定位比较有意思，单体菜价不便宜，但量很足
217 Clarksville Rd, West Windsor Township, NJ08550

Hotpot
人均：$35 地址：561 US-1 Edison , NJ 08817电话：732-354-3078

Blue Point Grill，258 Nassau St, Princeton, NJ 08542
Kristine's，51 Witherspoon St, Princeton, NJ 08542

Chef Tan Highland
Raritan Ave, Highland Park, NJ 08904
Find a table• cheftanhighlandparknj.com


下面這兩家粵菜是同一個老闆，用心經營。點心據說是師傅自己做的，也不錯
Green Lake Seafood:
Dim Sum
• $20-30 • Chinese restaurant •19 US-22, Green Brook Township, NJ 08812
翠湖海鲜酒家 nj

West Lake
1016 NJ-34, Matawan, NJ 07747 Located in: The Shoppes at Matawan $20-30 per person
西湖梅苑

Shu House
3132 NJ-27, Kendall Park,NJ 08824
这个还近点，20分钟吧。生意火爆。
人多最好打电话预定去之前
这家好吃！
这家shu house挺好的，我以前经常订午餐，因为有午市套餐很实惠。周一到周五中午有午市套餐。

普林斯顿新开的 Local 手作卤味；定期送货；每日新鲜采购，纯手工现卤，0添加，无科技与狠活，天然健康，每一口都是新鲜出炉的味道！
微信联系：LuzhiweiNJ
品味地道卤香

Lan Ramen，4 Hulfish St, Princeton, NJ 08542
Princeton Downtown的 Lan Ramen
非常推薦他的fiery lamb stew of Lanzhou 燉羊肉
麻辣乾鍋、鹽酥雞、九層塔炒飯 都好吃
之前有羊肉包子和台灣牛肉捲餅也好吃（但好像有一陣子沒做了，不知道什麼時後會恢復）

Thai Village也不错，味道正宗，价格非常合理，特别喜欢他们的drunken noodles
老板也经营一家非常好吃的法国精品糕点店，Tous Les Jours （64 Princeton Hightstown Rd Unit 5, Princeton Junction, NJ 08550）
在Woori Mart 旁边，价格不低但是好吃至极，大普林区域最好的糕点店

刘一手火锅挺好的，有点贵。east Windsor 的湖南歺馆还不错，价格也公道
老板孩子过去在Johnson Park，很和气
两家九个人聚餐，大概260美元，很多免费小吃

上海菜 
Tasty Moment小食代
1711 NJ-27, Edison, NJ 08817
Located in: Festival Plaza

这些餐厅都去过啦。 目前粤菜中部新泽西这边也就Edison的皇都，金喜，matawan的西湖还凑合

韩国菜总是去Edison Old Post路那家，很正宗

Top Korean Restaurants: So Moon Nan Jip, 238 Broad Ave
Palisades Park, NJ  (Korean town) & Dong Bang Grill 1616 Palisades Ave., Fort Lee 

Asian Bistro    31 Station Dr, Princeton Junction,NJ 08550
这家还可以。是韩国人开的。
上面两家都是韩国朋友推荐她们认为最佳的.我去过第一家友人说远超NYC K-Town’s 韩国料理店


如果喜歡台灣小吃的話，我也蠻推薦
Little Pot 
1665 Stelton Rd, Piscataway Township, NJ 08854

它是台式小火鍋（個人鍋- 煮好端上來、配料都是set好的） 
有麻辣臭臭鍋、沙茶鍋等比較有台灣特色的
但我其實覺得它火鍋就ok，沒有到驚艷等級。
鹹酥雞、脆皮大腸、咖哩蛋包飯、台式臭豆腐、炸豬排飯是真的好吃、很正宗的味道


山城码头，在Edison

All you can eat 的日餐在老美东那个plaza角落有一家开了有些年头了

我这次在网上 noble fresh cart 订了salmon uni 和 amaebi 送货到家 自己切一下就好了
他们家前身是true world 很多sushi店都是和他们订货wholesale這間比較遠，但如果有機會去北邊的話，非常推薦他們的sashimi和鰻魚飯
他們家的魚都是老闆娘每天早上親自去選的。
餐廳對小孩超級友善。

Choo Choo Train Sushi
374 Broad Ave, Leonia, NJ 07605

Naoki Sushi
2649 Main St, Lawrence Township, NJ 08648
这家在村里算是非常好吃的了

Sakana Asian Cuisine
(609) 838-9080 我们喜欢这家

Masa Sushi-Princeton
$20–30 ‧ Sushi restaurant ‧ Closed
All You Can Eat Sushi
415 Nassau Park Blvd, Princeton, NJ 08540, United States

Happy Lamb Hot Pot, Edison
At this Mongolian chain eatery
1737 NJ-27, Edison, NJ 08817, United States

Shaofei Lu： 大家知道在哪儿能买到中国的白酒吗？
Hightstown Liquors & Wines LLC
107 Stockton St, Hightstown, NJ
08520
这家店是中国人开的，有中国的烈酒买.

Mitsuwa Marketplace - New Jersey 
595 River Rd, Mitsuwa
Edgewater, NJ 07020
    `},{id:4,title:"眼科医生",content:`

眼科专科和配镜

配镜，Costco 性价比最高，可以预约验光和年度眼科检查。
别去Costco验光，至少别去咱们附近那家。那里的验光师给的prescription 度数太高，眼镜戴上不舒服。我请他调整，更不舒服了 我只好又其他地方的验光师重新验的。

请问谁了解Otho-K 隐形眼镜在哪里配比较好？
Call Us: (609) 581-5755
Eyecare Professionals PC, 1777 Kuser Rd, Hamilton Township, NJ 08690 

Fred-Pennington-08534 EyeCare Professionals, PC
1777 Kuser Road Hamilton, NJ 08690
609-581-5755 (P) 609-581-7055 (F)

话说四五岁男孩子检查眼睛视力可以去普通的那种Lencraft那里做wellness check吗？还是要去专门的儿科眼科？ 
 1-800-TRY-CHOP
Children's Hospital of Philadelphia® Specialty Care, Princeton at Plainsboro
101 Plainsboro Road, Plainsboro, NJ 08536 Contact Us: 609-520-1717
The CHOP Care Network Specialty Care Center in Princeton has moved to a new, 25,000-square-foot facility on the campus of the University Medical Center of Princeton at Plainsboro. The new facility also offers new services and amenities including physical therapy, occupational therapy and rehab gyms, speech therapy, auditory brainstem response (ABR) testing, and diagnostic X-ray services.
For eyeglasses, please see below. 
They have a location in Plainsboro and see children with vision issues.
Conditions & Diseases
chop.edu

陈琼是眼科医生，验光师；office在East Brunswick（Dr。Duan&Associates)；
190 State Route 18, #302
East Brunswick; tel: 732-247-2847

我们用的是eye care associates of Princeton，医生是Dr. Rajeev，娃们戴的是misight，不是ok镜。他家有时候会有人抱怨等待时间长，不过我们觉得医生挺好的，会详细解答各种问题，感觉经验也挺丰富的，不过我们没用过别家的，不知道有没有更好的。
Optometrist in Princeton, New Jersey : Address: 211 N Harrison St, Princeton, NJ 08540
Phone: (609) 921-6620
We usually see Dr. William Tullo there.

dr samuel liu princeton
Dr.Samuel M.LiuMDPhD
Ophthalmologist in Princeton, New Jersey419 N Harrison St Suite 104,Princeton NJ 08540
(609)921-9437
https://wwwprincetoneyegroup.com>..
Samuel M. Liu, MD, PhD | The Princeton Eye Group
Dr.Liu is the Director of Retina and Imaging Serviceswhere he specializes in macular degenerationdiabetic retinopathy,and retina conditions.

请问有没有好的眼科医生推荐 就是突然感觉眼睛看见有黑点点 然后看不清了
Princeton healthcare Center Terhune Rd
Princeton Eye Group
Ophthalmologist in Princeton,New Jersey
Address:419NHarrisonStSuite104 Princeton,NJ08540
Hours:Closed·Opens8:30AM Mon
group doctors   Phone:(609)921-9437   

强烈推荐cornerstone，特别好的眼光配镜和日常眼科检查
3495 US-1, Princeton, NJ 08540
Located in: Windsor Green
609) 919-1001

Dr Sun Eye Care LLC  3 Market Street, Plainsboro Township, NJ 08536  群里应该挺多人都看过她
我们家用的是Dr. Sun eye care 费用三年前$2000 左右

回馈下昨天眼科医生的咨询，princeton eye care 可能名气真的很大，现在约都是两个月以后了。所以我着急去看的是the eye center in Edison，对于这种retinal tear的病例实际上有个专业团队叫nj retinal center，直接找他们看就好了。我们是在eye center 做完又被推荐去rentinal center，花了两份钱，一般这种case都比较紧急，所以就直接安排laser treatment了。已经做完，后续再来反馈治疗效果。多谢🙏

princeton eye group真的太难约了 前台态度好差呀

我最近去法拉盛陈树仁眼科，review还不错，直接去的

只要是叫”princeton”的诊所要想都难约。我父母约camous eye group 还行，眼科普通医生可以在普林问诊，专科和手术医生都在Hamilton

我们用Princeton Eye Group 和Brighter Dental，的确是不好约。基本都是约一个月以后appointment。

Dr Michael Wong
是大Princeton 區，應是最好的Eye Dr!  有3 個offices.  是華人在美第3 代
609-921-9437 
appointment 不好make.  建議打電話時，
説是emergency!!! 把您眼的嚴重情形告訴receptionist, 懇請Dr 儘快約時問. Good luck!
我是8年前在西海岸做的。我前面推荐的Campus Eye Group也可以做激光手术。他们的Specialist很多。

请问大家有没有配儿童OK镜的医生推荐？我家小孩可能不得不戴OK镜了。求推荐，万分感谢🙏
Eyecare Professionals
1777 Kuser Rd
Hamilton Township, NJ 08690
贵是贵点 但好在非常专业 也受孩子们喜爱  挺难约上的
我们4月刚开始约，现在已经6000刀了  别家2000多刀，推荐还是很推荐的，服务确实一流，技术也没得说，该做啥怎么做给你说的明明白白，临走给小孩弄一兜子snack, 哄的高高兴兴的，他家是一次性收两年的钱，别家是一年
Address:211 N HarrisonStPrincetonNJ08540
Hours:Open·Closes7PM
Phone:(609)921-6620
William Tull

话说四五岁男孩子检查眼睛视力可以去普通的那种Lencraft那里做wellness check吗？还是要去专门的儿科眼科？
Conditions & Diseases
chop.edu
favicon.ico
They have a location in Plainsboro and see children with vision issues.

去Hamilton的Eyecare Professional 可能要先问－下孩子是否能做vision therapy. 诊所应有在电脑上可以测试两个眼睛之间的协调和眼睛与大脑的协调。保险公司凭测试结果决定是否付费做therapy. 如果vision therapy 可以帮助的话，就可能今后不需要戴OK 镜, 也可能不容易变近视。这家看网页是有能力做vision therapy. 

https://www.chop.edu/locations/specialty-care-princeton-plainsboro?utm_source=gmb&utm_medium=organic&utm_campaign=network_scc&utm_content=locations_specialty_care_princeton_plainsboro_cta_button_consumer_consideration_all

For eyeglasses, please see below.
Optometrist in Princeton, New Jersey
Address: 211 N Harrison St, Princeton,NJ 08540
Hours: Open.Closes 6 PM▼ Phone:(609) 921-6620

CPA Dr. Michael Wong https://www.princetoneyegroup.com/ 我2005年找他做的，非常推荐

Delaware valley retina. I like them a lot better than NJ retina 
https://www.willseye.org/medical-services/eye-emergency-department/
24x7, 任何时候都可以walk in，就是有点远。对面有车库存车。
snow_emergency_room-27-1.jpg
Eye Emergency Department
willseye.org
24x7, 任何时候都可以walk in，就是有点远。对面有车库存车。
处理之后他们会转其他科，或者回自己医生处。这是附近唯一一家眼科急诊。

昨天后来找到了MarketFair旁边的一个眼科诊所，擅长诊治青光眼的医生，还不错，及时处理了。

这个里面提到的Eyecare Professionals
1777 Kuser Rd
Hamilton Township, NJ 08690
就是著名的Dr D
Hamilton的Eyecare Professional裡面有位Dr D專門做這個，客戶全是中國孩子
非常推荐Dr. D. 很专业也很有爱心
听来很不错，所以也有人说价钱不便宜
唐姐介绍的Dr.D 非常专业 全州顶级医生 业务能力强啊。我家四年了，都没有问题
谢谢，但是Dr.D太难约，当初就是要等半年，才选了别的医生


OK镜EYECARE Dr.Nicholas despotidis (609) 581-5755. 这家非常好。

想请问一下在大普林斯顿附近，给孩子看Vision Therapy 的医生只有在206 上的Dr. Herzberg Chaya OD吗？Vision Therapy 是帮助孩子或者大人通过锻练眼睛之间和大脑的协调，增强运动员体育运动反应速度和提高英语阅读速度。医疗保险付的疗程，一般是12周。对健康孩子和有两个眼睛在近视距离上使用有差别的孩子，都会有帮助。谢谢！

打扰大家一下，请问有家长做过白内障吗？想请教一下选plain, Toric 还是multifocal lenses, 做完手术之后，镜片适应怎样。谢谢大家

家人眼睛出现飞蚊症，请问有眼科医生推荐吗？

try “Kung Eye Center” at East Brunswick

对飞蚊症，眼科大夫能做的非常有限

我被羽毛球打到眼睛后开始有飞蚊症，医生检查完后告知一个月后就适应了

我之前有一天忽然有飞蚊症，看医生也说充分休息，少用眼就会好，没有治疗方法。果然第三天就没了

Lens Crafters里有optometrist一些情况可以看，应该也接受walk in。我家孩子小时候有一次是周末，抠着他爸的眼角膜就是在那儿处理的而且被安慰说这种大人被孩子意外伤着眼睛的情况挺普遍

Matossian Eye Associates +1 (609) 604-6379, Hopewell office, Rwj大楼那里但是又不是RWJ，接受Medicaid，比较好约。紧急的当天有可能约上

    `},{id:5,title:"快递",content:`

快递
天马迅达快递
跨境物流|海外仓|社区电商 worldCPS.com LOGISTICS/WAREHOUSINGIE-COMMERCE
626-522-6963
美东USNJ1002号仓
联系人：David Ma
电话：732-519-2250
地址：44 Heller Park Lane, Somerset, NJ 08873

微信号：MR136379360
她有有帮寄包裹，在Kendall park
一般三到六个礼拜

请问有谁知道怎么让国内亲戚寄东西过来，谢谢
试试顺丰国际
紧急求助请问有没有哪位朋友今天晚上-6/20期间，会从新泽西/纽约飞北京（6/21 能到）。需要帮忙带一本护照。谢谢
我用过顺丰快递寄护照回国，非常安全，准时到达，不过需要5-7天，24美刀

不着急也不想跑远，普林快递不错。想早点寄出的H mart附近有家快递公司
Hmart附近的比较快的是这家
XZX EXPRESS INC.
(908)583-3838
1603 NewJersey27 Edison, NJ08817 USA
这家在Ｈmart附近，给国内寄过两次。七月份这次很快，不到两周收到

普林快递Susan Yang（杨姗）
微信号：shanyang618

Edison 很多，我用XZX EXPRESS INC.

    `},{id:6,title:"垃圾处理",content:`
 
Dwayne collect scrap metals for free. 将我n 年不用的stove，microwave， 洗衣机都免费拿走了， 其他地方像1-800-pickup 是要收费的。 现在gas 都好贵， Dwayne 的service 不容易， 给大家推荐一下。
 
609-439-5706 Dwayne: collect any metal household items for free. He is very nice and take away any used washer and dryer, refrigerator, etc.
 
请问 节后 该怎么处置 圣诞树 ？
每個鎮都會公布哪一天回收聖誕樹，通常是一月中
https://www.princetonnj.gov/445/Public-Works

我推荐一个dumpster rental : blue rhino dumpster rental 732-322-5327  价格和服务公道
有没有pick up旧沙发的service可推荐？ 谢谢！

1-800-GOTJUNk

可以直接问目前帮你们处理垃圾的公司，请他们给你报价；我们之前搬家就直接付款请他们一次性来帮我们收所有搬完的垃圾

旧衣服捐赠
The Jewish Center Princeton
thejewishcenter.org
435 Nassau St, Princeton, NJ 08540

https://www.princetonnj.gov/1359/Trash-Collection
Clink on bulk waste collection

Pickup Please，为越南老兵捐赠的福利机构。收集衣服鞋玩具书家具家庭常用物品。 will come and pick up the following donations:
Clothing Donations in New Jersey
Furniture Donations in New Jersey
Donate Shoes in New Jersey
Donate Toys in New Jersey
Donate Books in New Jersey
Household items Donations in New Jersey
…and Much More!
这里是预约pickup的网页：https://pickupplease.org/donation-pickup/

    `},{id:7,title:"搬家和搬运",content:`
    

搬家/moving service

旺发搬家叶老板：7328829162
Furniture Moving and Heavy Lifting·
$105/Hour

给旺发搬家叶老板：7328829162🌟好评！我是上月底搬的家，第一次联系叶老板，因为我搬的大件家具不多，来的是他儿子和伙计，配合默契，速度快，细致，安全
今天请了旺发搬家公司帮忙搬家，服务非常好，打包细致周全，还负责拆卸和安装床，价格合理，服务可靠，值得向大家推荐! 
推薦Tony Moving 我女兒搬家刚用过，很专业，鏡子，饭桌等等包好，人也很好

以下是之前分享的-远距离或是跨国搬家可以找飞达luckymoving.com,近距离或小搬家可以找老蒋搬家，人很实在，价格公道 - 新州搬家公司電話9173880039

我用过Lucky moving 飞达搬家 (732) 432-4288 推荐

http://www.empirepianomovers.com

我用过搬家公司，不需要给小费的，都包括在里面了。是一家华人搬家公司，很仔细，搬的很好，家具都保护起来的。因为离的比较近，帮我搬了两三次呢。费用之前谈好，后面不需要给小费的。
老蒋搬家
19173880039
还不错

搬家小费我给过，每人50刀，搬家老板会向你要的

If you need same-day service please call/text me at 3479241811.
Michael
Magic Mike8:39下午
Iwork at $125 1st hour with three people, $100 per hour after9:43下午

我们用过蓝天搬家 (646) 821-1008 鲁先生。很好。他们在法拉盛

蒋先生 (917) 498-8216 微信号 stevenjiang1953

Bok moving 201-615-9600
韩国人 老板Peter
刚刚请他们搬家

可以考慮这兩间, 都是local mover, Rite Move不喜欢用email, 电话上谈好了就算，好像不很专业，但我还是选了它，來了两个人，态度好，也做得很好。

609-586-6833
https://theritemove.com/team-trucks/
theritemove.com

https://twomenandatruck.com/movers/nj/princeton?utm_source=Google&utm_medium=Organic&utm_campaign=GMB
twomenandatruck.com
856.291.6844

我从Plainsboro 搬到Princeton, 两张queen size beds, 一张sofa bed, 一张大dining table, 三件很重的木傢俬，和一个upright piano, 共$980，另每人tips (來了三个人，上面说错了）。

钢琴搬运/Piano Mover

I used this company. Very professional and reasonably priced. http://www.empirepianomovers.com

我用过这家：https://princetonmoving.com/

The price the company quoted for me was for a driving distance of about 45 mins with 6 steps to the living room and it was for a baby grand piano. The price was $300, but that was about 10 years ago.  You can call them to get a quote over the phone before you make a decision.

Duppy piano move
(856)418-1927

MMS搬琴
+1(201) 819-8064

请问普林斯顿附近有没有什么接受捐赠物品的机构，而且可以上门取件的？
https://www.gogreendrop.com
VVA
smallvva-pp-logo.png
Schedule PPC Location
pickupplease.org

Recommend a place to donate to. They come to your house to pick up, accept many household items: https://pickupplease.org/schedule-ppc/?outlet=trenton&gad_source=1
    `},{id:8,title:"孩子体育",content:`

请问附近哪家教孩子的跆拳道或是类似的武术馆比较好 我女儿在west windsor woori mart韩国超市边上的Black Belt America学跆拳道，他们是个连锁的，不过这个店今年刚开，就一个老师，教的我觉得还挺好，你可以去试两个周。一号路上有个Amerikick教空手道的好像也不错。

我们家娃在Ahn's taekwondo Academy，skillman, 还不错

请问普林斯顿附近有给零基础的小孩学习baseball的地方吗？
Princeton Little League, fall ball starts from September
Homeprincetonlittleleague.com
这个program就是类似township的recreational program, 但是适合零基础的孩子，如果想去private club，附近有PPH Hamilton, Zoned at Bridgewater，那里有private class和group class

象棋
除了Princeton Chess Academy提供初级到中级的国际象棋课程, Princeton Recreation Department 在暑假也有国际象棋课，可以到官网上查看。
princetonchessacademy.com

问一下普林周边哪里有学乒乓球的地方？
Princeton Pong. www.PrincetonPong.com

在Alexander road和US 1
请问附近有好的跆拳道summer camp。推荐么？谢谢！
我们在Gracie Barra Brazilian Jujitsu三年了。强烈推荐。

我儿子小时候去过 Ahn’s Taekwondo at Bridgewater. 他们在Montgomery shopping center 有一个，好像在美东附近也有一个。
我很喜欢，对孩子要求挺严的，不是随便就给晋级带子。

ahn's taekwondo academy
TE:1860W682-8700 TEL:(9O4541-0220
← 27

网球 （有专门的list）：
fyi： nassau tennis club的group lesson蛮不错，价格合理，补课啥的也蛮有人情味

给有小朋友想学网球的，给大家提个醒，非常不推荐Firefly。

网球教练王钰-WeChat ID: LSCA666
网球名私教王钰。职业网球教练，曾是中国国家网球男队第一主力，天津人，ATP最高排名238位，按照排名UTR应该在14.5上下。退役后跟随华裔顶级教练马伟开一同执教于广州星河湾职业网球俱乐部，同时担任彭帅，郑赛赛，徐一幡等职业选手的国际巡回赛教练任务。目前正在规划长期课程包括团体与私教。同时在白天也会开展成人班的技术与战术教学。有需要的爸爸妈妈们请及时加王教练微信（微信名：LSCA666）入群咨询。

Hopewell Valley Tennis & Swim Center
111 Titus Mill Road
Pennington, New Jersey 08534
609.737.3600
www.hopewelltennis.com

Baseball Windsor Little League
www.wwll.org

冰球
从头学起，可以参加ProSkate的Learn to play hockey,一般是免费的，给护具装备
学了冰球初级，可以在Proskate的house league打
如果孩子真的感兴趣，就要考虑进Travel Team, 有Princeton Tigers 和 Proskate Stars可以选择，每年三月多做tryout，一年的费用大概在3500-6000之间

Camelback mountain 比较适合初学者。那里有初学者滑雪课。

排球
教练程序
微信ID：wxid_0xf7ql6l7uyk12

Billie 附近排球俱乐部
1. PVC https://www.princetonvbc.com
2. Core https://www.corevball.com/nj?gclid=CjwKCAjwhJukBhBPEiwAniIcNYHkhT2gbOW_LmYihsIoT1txonZMZWOglIQhzn_AW1yGjx5zrtocpBoCNlMQAvD_BwE
3. 普林这里一个中国教练


篮球
关注一下Princeton镇政府办的各种篮球League，男女分开的，价格特别便宜

有人知道附近哪里可以带小孩去shooting ?
@Mary union hill gun club 可以
今天带小孩去了TTC还不错，不用自己带枪

请问哪里有打羽毛球的地方？
Northeast Badminton Club (Princeton)
(732) 523-1888
https://g.co/kgs/7WpzT3

NJ这里有没有羽毛球拍网线的地方？
我儿子喜欢打羽毛球，他的好几只拍子都是因为线断了，闲置在哪里
哪位知道这边有专业绑线的师傅，请告知
谢谢
https://nebcus.com 先自己打电话去schedule, 可以说中文，自己拿线去会比on site 买线便宜一些，告诉他们你想拉多少磅就好了

羽毛球场地
New Hope Badminton Academy
Badminton club

NEBC我只知道someret有场地，Princeton的不了解。

Paradise Golf Center
56 Route 12
Flemington, New Jersey 08822
908.788.3786
paradisegolfcenter.com

划船
© 2024 Princeton National Rowing Association
Caspersen Rowing Center
1 S. Post Road, West Windsor, NJ 08550
609-799-7100  | info@rowpnra.org

Princeton Futbol Club以外，还有哪些青少年足球俱乐部？
PSA, MFA

有没有射箭的地方推荐？
我儿子之前在那学过射箭 6:09
Junior Olympic Archery Development(JOAD)is a program of USA Archery that teaches archery to young people
Waxobe Archery is located at:53 Maior Road
Monmouth JunctionNJ08852
http://www.waxobe.com
And information about this JOAD program: http://joad.herokuapp.com
Price for the 10-week session:
$120 for WaXoBe members; $160 for all others.
Also a $50 starter kit 

教小孩缝纫
绣房地址
51 North Tulane Street
6099556895

    `},{id:9,title:"厨房厕所小件安装",content:`
 
我们用过carpet centers of nj 还不错  
732-254-2060
917-923-7827
Carpet centers of New Jersey是一家中国人，他们只换地毯不清洗
 
Toilet Kevin 609-306-2600
 
Kitchen
Best Stone and Kitchen @New Brunswick
中国人的店，你可以去看看，我们家countertop这里定的，比HD和Lowes便宜
 
窗帘Custom blinds and drapery
signaturedrapery@gmail.com
732 443 0015
我們用過這個。她主要是做Custom blinds. Graber 和 hunter douglas

9176175066
Text 温师付
水, 电, 工木都可以的
群里推荐的那个温师傅出价特贵，以前用过温师傅还好
 
Fence
http://www.straightforwardfence.com/
 
Fence contractor 
Carl
8552922757
 
Carl’s fencing     
(855) 292-2757
 
我在这里给大家介绍一个装修师傅做油漆水电，做工不错电话7189082188
 
屋顶/涂漆(908)705-5841
East Brunswick, NJ
 
客厅落地玻璃
可以试试李师傅
(732) 910-2166
 
郑海雪-换地板
微信号：wxid_exps314z628v12
 
bill电话7323221378handyman
装修地板

做地板的师傅
赵师傅 732 397 5770
做地板的赵师傅 坐地起价。而且涨的不少。不建议
赵师傅做的感觉上确实好 

Handyman Daniel （6092553028 text和留言）我们家书架橱柜没法买标准的，都是找他来定做，全橡木的。活好，细致，价格公道
刚找Daniel定做了木制的影壁和Deck，同色的木制的Flower Box，石头做的火盆加上特制的火盆盖子（平常不烧木头的时候可以做 茶几）。做工精细，很有艺术性，价格合理，做出来的空间的价值就像加了一个大房间一样，大大增加我们后院的使用价值。赞👍！ 
在给我们家装修卫生间，加浴盆，基本全换新，收费合理，干活不图快，很有设计天赋，非常细致。我一个朋友用他装Hardie siding, siding 做的非常漂亮。他活多但是价廉物美，值得等
Dan 手艺确实不错。今天刚帮我修了地板。
Daniel帮我重装了bathroom和厨房，干活很仔细非常有耐心，价格低廉，材料和工时价格分开算，很合理。推荐！

我这里有位高师傅电话是718-908-2188


Wren Kitchens好像就可以做橱柜，另外Home Depot ，costco 里面也有。

Monlero WOOD-LAMI       FLOORING        ATE-CARPET-VINYL-STAIRS 
201-204-6902
我们家现在就有一个狗狗房间在装地板 两个厄瓜多尔的小伙子 挺认真的 不过还没完工
我找他们做的floor refinishing，感觉技术没到位，比较粗糙。

最好是石匠, 砖瓦匠, 有人吗
Masonary Brian
+1 (609) 577-1681
 
请问大家有masonry推荐吗？需要铺patio
Michael Wentzel
Jamison Home Services, LLC
New Jersey / Lower Bucks / NE Phila Area Manager
Mbl: 856-357-4875
Email:mwentzel@jamisonmasons.com
没有给我铺patio，但帮我休整不好的地方加重新填缝，价格算是合理 活也是满意的
 
多谢群主批准分享一下：如果有朋友计划做sidewalk，driveway，patio，不管是pavers还是concrete，我推荐给我家做sidewalk的contractor：Maximo: +1 (973) 391-5348。我家邻居看到他们的做工，也雇他的crew换了patio pavers。
我找了好几家股价，他是最好的，看着他们从撤掉原来的再换新的，过程活干的很专业

His team is the best in Middlesex area. 
Lo Chiatto Paving & Masonry, Inc.
Paving contractor in Edison, New Jersey • Closed
1607 NJ-27, Edison, NJ
08817
(732) 548-7744
LoChiatto Paving
https://lochiattopaving.com
他的價錢（連工帶料，包申請 permit) 不便宜，所以非誠勿擾

 
黄莹亮
phone
(732) 986-0088
我家装厨房厕所用的这家

武师傅(267) 237-0175。动作快，周日不休息。活的价格很合理。非常好沟通。

7326681604普通话 粤语;翻新改造有需要联系林师傅 

给我们改建时报过价，屋顶加一个老虎窗一万多（我们要加两个）。
你问他似乎什么都可以做。所有镇里的审批申请他都不管，似乎英语不过关。他也没有注册许可。我们最后还是没找他做。
2020年想装修时找过张师傅，人非常好！他的报价每平方英尺装修价位在240-300美元，人工占60%，地下室工程没有承包过他说不太了解。
张师傅不管permit的申请，碰到需要permit的地方都要自己去做。华人师傅一般都不管申请permit，可能是语言不太行，而申请permit很麻烦，一来二去要和镇里管事的很多沟通，跑了无数趟，他们美国人也很官僚。我们弄了半天，就算了，太麻烦了，工程换了老美做。建议需要permit的还是找老美。

    `},{id:10,title:"签证",content:`

签证
新泽西公证员
Yu Zhong
Yu.zhong.609@gmail.com
仲宇的公证和签证服务很好，他的电话是6097513252. Wechat是yu_zhong_609

代办去中国探亲旅游签证。每份 $100 。一家多份申请有优惠。有需要请发短信至609-616-2023

中文学校的刘老师帮代办签证，她的电话是6096889325。
我用过，不怎么答复，态度也不好

请教，持美国绿卡，中国护照，在美国本地办澳洲签证，求代办旅行社联系方式
小顾：harrygu123

请问群里有人认识可以帮忙申请“申根”签证的中介吗？我网上预约晚了，预约不到想要走的日子了，想快速办理，否则机票就浪费了。” 帮忙一下
https://www.americantranslationservice.com/c_visaservice.html

应该就是重新办理，流程官网上有， 打领事馆电话咨询。 领事证件咨询电话：212-8682078

吾爱
客服微信：ukvisa5i
客服电话：18611895166
小红书：吾爱签证中心(ID:428844330)

请联系Kathy: (732) 698-1888签证

好消息：纽约领馆1月25号恢复领事证件大厅对外办公，1月16日开放网上预约功能！
http://newyork.china-consulate.gov.cn/tzgg/202301/t20230113_11006691.htm
我刚刚在纽约大使馆办好所有的手续，正在回国途中。 给大家分享一下这次办签证，PCR 的经历。第一步 先要准备照片，电子文件照片 因为填表是要求上传。第二步，填COVA表，这个表提交以前，可以任意修改，提交后如果要改，就须重新填。填好表提交后，会给一个申请号，凭号预约。 第三步 预约，这个步骤需要不停的试，但也不能太频繁 会被短暂锁住。如果没有预约空挡，它会有一条短信‘’当前可预约人数为0人。。‘’ 第四步 面签，Q2签证，除了邀请函，邀请人身份证正反面复印件外，要准备余下资料：护照带相片页复印件，以前的十年签证复印件，最后一本中国护照的相片页复印件，鴐照复印件（地址证明用）最好带齐证件，大使馆有复印机，要用quarters， 25cents per page. 第五步，取证 凭取证条（无需本人，可由他人代取）9号 窗口交钱（money order, credit card). 10 号窗口取证。 第六步 订机票 我找travel agent 帮的，因为要得急 第七步PCR, 我在Live Urgent Care 做的，1-2小时出结果。他们给电子文件，自己可以打印。我刚刚通过了登机要求

如您在本次前往现场提交申请前存在疑问，请您扫描网站下方二维码向总领馆提问。如您后续有疑问，请发电子邮件至 ny_hz@csm.mfa.gov.cn（护照、旅行证业务）、ny_visa@csm.mfa.gov.cn（签证业务）和ny_gzrz@csm.mfa.gov.cn（公证、认证、《在境外居住人员领取养老金资格审核表》（健在证明）业务）咨询。

万霞微信号
shirleywan0523

各个费城市区，光华中文学校 ，North Wales，纽约可以
主要做纽约领事馆管辖的10个州的签证和认证业务。
现在回国10年签证有效暂时但不能用，如果回国需要重新申请10年签证，以前的签证做废。今年签证程序和以前不一样，需要在线填写8-10页签证资料和提交，然后预约签证时间。所以整个时间比较长，大约1-2 月。 
大家把所有签证资料准备好，由我们帮忙预约，代送+代取签证。 
费城附近客人可以送到我们公司指定地址，如果10人以上，我们可以派人到指定地址代取。其它比较远的州的客人可以寄到我们纽约指定地址，做好签证后回邮给大家！
⚠️:大家有不清楚地方，请查询下面领事馆网址：
http://newyork.china-consulate.gov.cn/tzgg/202301/t20230113_11006691.htm
我们公司每周六送件， 如果想这周送件的，请把准备好的资料周六之前送到North Wales, 或周六1:30-2:30 送到大学城。 具体地址请联系我，谢谢！

十年多次
中國Q2探親簽證
1、护照原件(护照有效期须为6个月以上、且须有空白签证页)2、申请人在美国居住地址证明复印件(如驾照、水电气账单、银行账单等)3、邀请人的中国身份证(正反面)复印件4、旧中国签证(如第一次签证需提供中国护照原件)5、電子版照片一張
費用$280，辦理時間2-3週咨询热线:飞扬旅游邓小姐CHLOE 9175352639 

大家有没有华人旅行团介绍的？比如游轮的
孙康 (732) 910-0510@吴小亦 
孙康专做游轮

哪位有可以带办回国签证的agent？谢谢先
Oriental Cultural Service LLC
Chinese Visa Service王老师旅行服务代办:各国护照申请中国签证
各类文件中国领馆认证中国护照换新文件、护照代取老人健在证等事宜 Phone:609-688-9325

求代办签证的中介
兰姐事务所
LAN'S SERVICES LINC.
办公时间 Office Hours
星期一至星期五:9:30am-6:00pm星期六至星期日:预约(by appointment )
Add: 2 Allen Street Unit 4D     电话(Tel):212-219-0278    
New York NY 10002       212-219-1386    
地址:纽约华埠亚伦街2号4D
Email: lanjie705@yahoo.com      手机(Cell):917-403-9157   
Email: ny2122191386@gmail.com   微信号:NY2122191386        
电话      9174039157      
2122191386
描述领馆费用是每人$140，用Zelle...
我们的费用是每人$150，
他们在唐人街在唐人街，做这个业务几十年了，递件取件速度都很快。
你要不想跑，跟她微信联系，填写表格，然后把你的护照寄给她就行

Oriental Cultural Service LLC
Chinese Visa Service王老师旅行服务代办:各国护照申请中国签证
各类文件中国领馆认证中国护照换新文件、护照代取老人健在证等事宜 Phone: 609-688-9325

我以前用过这家公司，不错
Jessica-翠宝旅游Cell9177558828很多客人问中国签证情况，到目前为止正常情况签下来都是十年多次180天或者120天，美国境内所有中领馆均可办理，除了中国签证，其他国家也基本上都可以申请，有需要来找我吧!翠宝旅游:917-755-8828
2102157i        812198853060138250

麻烦大家, 有好的邮轮代理推荐吗
安妮-华夏旅游732-777-9888

估计你们会租车自驾游。在 旧金山  城里，推荐49 mile scenic drive , 包揽了所有旧金山市里的美景。

请教一个问题，入籍后第一次回国，需要去派出所销户嘛？网上看到有人说不销户不让登机？
保险做法是销户。现在大数据，出入境管理处有户籍的信息
入籍后回国你肯定需要去签证，使馆会要求你带上中国护照，大使馆会帮你剪去护照角，并盖上护照取消章，所以不需要去派出所销户，因为你取得签证时就被销户了
当然第一次登机时可以带上已被取消的护照，防止用到
如果入境口岸和户籍所在地在同一个地方，入境的时候边检有可能要求注销户口。
大城市的边检和公安户籍管理可能没有联网，即便连了也不一定马上可以查到户籍情况。但是中小城市很有可能是联网的，而且入关外籍少，查到的可能性大

    `},{id:11,title:"律师",content:`

Law Offices of Wang &Hou
Legal services in West Windsor TownshipNew Jersey·Op
Services:CorporatelitigationCriminal
litigation,Divorce litigation,Legal advice….
+1609-716-4888
母女團隊。特別是女兒（Jenny Hou)認真負責，responsive.

美国移民律师Carrie
WeChat ID: yyglobleshopping

袁钢律师
微信号：gangyuan1972

Sam S. Dhaliwal, Esq.
Phone (609) 447-1201 Sam@DhaliwalLawFirm.com
www.DhaliwalLawFirm.com
虽然开始有些犹豫，看到是印度名字，但是其实是二代，英文完全流利。非常敬业高效，价格合理。他帮我们买房子的法律手续，但是也做离婚等家庭常见的法律问题。周六周日也会回着急的信息。很靠谱

WANGMUGNO&PARK
Attorneys&Counselors at Law1632 Anderson AvenueSuite B Fort Lee New Jersey 07024 Tel:(201)-947-2135 Fax:(201)-606-2700
Website:www.wmplegal.co

gloria@pinglaw.net
Gloria Liao, Paralegal
Law Office of Fangzhou Ping
Direct Line: 818-639-1788人很好 很负责

柳治平大隐律师＆昵称：柳治平大隐律师
WeChat ID: whazupdoc

律师专做遗嘱和trust funds
Hauptman and Hauptman
973-994-2287
或者跟Mercer County Bar Association 咨询一下 mercerbar.com

律师专做遗嘱和trust funds
Carl Archer of Whitehorse Ave.
或者Len Garza, Esq, len@lgarzalaw.com;6092370310
或者 Harlan Tannebaum 609 933 1630
或者John DeMartino  NJELDERLAWFIRM.com, 908 874 5636

Fiona Van Dyck, on 206 near cherry valley, vandyckfirm.com

查martindale.com 找律师，看一下那些律师是否处理过你想要的类似案件


美国移民律师Carrie
WeChat ID: yyglobleshopping 1

交通律师
Traffic lawyer
Ellis Klein
267-629-2147

同学校为孩子是否是special needs争执，找免费的咨询
Stacy Grenwald of Cranbury 
Community Justice Center in Trentor on State Street
或者SPAN 973 642 8100
或者Hinkle, Fingles and Prior in lawrenceville 609 896 4200
Department of Developmental Disabilities 也许会提供帮助

与雇主发生争执要找的劳动争议律师
Employment lawyer
Jacob Davidson
732-690-8355

房屋律师
housing lawyer
Christopher S. Tarr
STEVENS & LEE, a Pennsylvania Professional
Corporation
Princeton Pike Corporate Center | 100 Lenox Drive, Suite 200_| Lawrenceville, NJ 08648
Phone: 609-987-6666 | Internal: 3614 | Fax:
610-371-7935 | Cell: 609-462-9104
cst@stevenslee.com | www.stevenslee.com


跟HOA打交道的房屋律师
deal with housing/HOA
Borrus Goldin
732-422-1000

    `},{id:12,title:"房屋装修工程/Handyman",content:`
 
房屋装修工程/contractor/renovation
 
建筑师
Alfredo R. Trevino, Architects
609-671-0966
Cell: 717-319-3278
 
Hojoon Chung
2014966242
7325862563
Hcas2012@gmail.com
这韩国人建筑师不错，价格合理，很容易打交道
 
Architect Ronald E. Rheaume, +1 (609) 213-8396、
 
这位建筑师，很有经验，价钱也非常公道。大小案子都接，可以简讯他Joe Mullaney Architectural and Structural design & engineering 2154993544

再来求一个能检查房屋结构问题的structural engineer
Lusu Ni
PhD. in Civil Engineering
LS Home Inspection LLC
484-838-9291
NJ License No. 24GI00176800
http://lshouses.com/

Structure engineering
+1-609-4301030

Structure engineering
RPK in Fairless Hills, PA

Builder/handyman
NINI
609-587-2411
 
Paul Pennachi，若干年前用过，还不错  
他们比较难约时间，我等了两个月
我们刚找他们做了装修报价，比其他报价高了至少五分之一。
Paul Pennachi
A.Penna@comcast.net
(609)203-0033
 
Kevin Moore。6093065942 
remodel kitchen basement 
 
Contractor CanAm Design & Build：609-255-3028给我换的烂掉的窗框和门框，找了五个地方，他家的报价最低。很忙需要预约，打电话不通留voicemail，给我很多顾客做过，好评率100% 。
专做后院小木屋/garage/shed的设计和建造，价格不算贵,工做的挺好. 在大普林区名声不错
推荐！房屋改造时一面墙加了两个窗户。他们一般做商业工程，做工很好
帮我把车库从毛坯房改成办公室，孩子偶尔用来和朋友做sleepover。做工慢了点，Have an eye for detail。很细致，工作后总是打扫基本干净。
里面有个Handyman Daniel （6092553028）,活儿很细致
他们帮我翻修厨房和地下室。价格合理，负责任。可以帮助申请镇里的Permit。
给我家装修了卫生间, 瓷砖厕便洗脸盆都换了，装了橱柜，把淋浴换了澡盆，收费材料和做工分开。价格合理，认真，会做水电，很会设计，他挑的颜色很耐看。
Dan 手艺确实不错。今天刚帮我修了地板。

富林橱柜地板公司的柜子质量挺好的. 1627 route 27 Edison NJ

郑师傅 Plumbing/handyman/whole house 201-658-5908
真的非常棒，这个师傅啊，收费非常非常合理，而且做工很认真啊，活做的非常好,他什么都会啊，然后他也有几十年的功底。
这位郑师傅我不推荐，给我们家做装修项目，都谈好了，做到一半要加钱，而且加很多，没同意，项目没做完就走了。这种行为太不负责任了。

装修郑师傅，几年前给我做过，蛮容易沟通好，价格合理。 他想让我推荐下，他在纽约，小的Handyman的活没办法做。一般都是跑来一次做几天的。
房屋违规处理 验房
TEL:917-669-7365

(201) 669-2050 Pro- Builder的Tim，你可以试着联系一下。他上次给我报过价，虽然最后我自己修好了，没有用他，但感觉人很积极。
 
David Mei (848) 219-2799
微信 :Chokeberry2003
contractor David Mei,他的收费不是最便宜的，但很合理，人也绝对是诚信認真负责。他也是realtor

东北师傅张克洋也不错，+1 (215) 858-1006，价格公道，人不错，比如加个门换个热水炉子换水管蛮好，但刷墙的细心活儿不够仔细
给我们改建时报过价，屋顶加一个老虎窗一万多（我们要加两个）。
你问他似乎什么都可以做。所有镇里的审批申请他都不管，似乎英语不过关。他也没有注册许可。我们最后还是没找他做。
2020年想装修时找过张师傅，人非常好！他的报价每平方英尺装修价位在240-300美元，人工占60%，地下室工程没有承包过他说不太了解。
张师傅不管permit的申请，碰到需要permit的地方都要自己去做。华人师傅一般都不管申请permit，可能是语言不太行，而申请permit很麻烦，一来二去要和镇里管事的很多沟通，跑了无数趟，他们美国人也很官僚。我们弄了半天，就算了，太麻烦了，工程换了老美做。建议需要permit的还是找老美。
 
Maryjo Eckhard 908-9630052
改装洗手间内外，质量不错
 
WB Construction LLC/Walter
2673971023
walterbednarz@gmail.com
拆旧天窗换天窗$800 一个。
 
魏师傅：(917) 963-6484
有个做厨房的师傅很好，魏师傅，工好人也好但是价钱可能不是很便宜

华宇
装修厨房，电话是718-559 2601

    `},{id:13,title:"骨科/理疗针灸/中医",content:`

理疗/PROFESSIONAL PHYSICAL THERAPY

朋友的孩子健身把脖子扭伤了，请问大家有好的正骨医生推荐吗？针灸治疗也可以的。谢谢！

西医找Princeton Orthopaedic Associate 的Dr. Ark, 感觉扎针灸是不是更好

急性扭伤感觉好的针灸师效果好

我这半年理疗封闭折腾了一大圈，遇到没经验的医生和理疗师真是没地方哭...反正不推荐UOA的医生，听说POA的好，要找Dr.Ark但我当时没约上要等一个月，打封闭的话推荐Princeton joint spine 的DO . Meyler。理疗到现在试了四个还没有特别好的。中医正骨和针灸比较靠谱不过也要有特别有经验的才行……打封闭还是有用的，消炎镇痛的同时可以做恢复性训练，关键要找对训练方法和理疗师。

我不太清楚这几个。我们只是看了运动外科手术专家William Rossy,并且做了肩部手术

你可以去Princeton orthopedic association,那里的医生都还不错，有运动医学的sports medicine surgeon, Princeton radiology 可以做x-ray, MRI

Ipad shoulder
纽约张徳超

骨科- Princeton Orthopaedic Associates
(609) 924-8131
https://goo.gl/maps/17UgE6sVXNh1CVfy8

请问有orthopedic doctor 推荐吗Princeton Orthopedic Association. 我正在它的Plainsboro
 美国排名最好的骨科之一，NYC的hss, hospital of special surgery

有没有chiropractor
有。Dr. Ari Cohn. 我怀孕时见过他，帮我调整骨骼，让我在怀孕9个月时还能散步。
Chiropractor-Princeton-NJ-Ari-Cohn-Meet-The-Team.jpg
New Patient Special | Chiropractor Princeton NJ
princetonchiropractic.com

Dean Linkroum PTDPT Physical Therapist
dlinkroum@professionalpt.com
281 Witherspoon Street Suite 201
Princeton, NJ 08540 Office: 609 622 5624 Cell: 908 285 4124 Fax:609279 2196
www.professionalpt.com

我是约了William Rossy, 运动损伤专业，也是别人推荐的。另外，有人用过Dr Monica 和Abrams,据说也不错，给普大运动员做过手术
我认识的几个普大运动员也是在POA看医生。Dr. Monica，Dr. Abrams 也是在the Princeton Orthopedic Group。据说都不错

我儿子用过一个sports injury doctor 在lawrenceville 不错。
Princeton Sports and Family Medicine
Sports medicine clinic in LawrenceTownshipNew Jersey
3131 Princeton Pike Building 4A,
Suite100,LawrenceTownshipNJ     versity 

Dean Linkroum PTDPT Physical Therapist
dlinkroum@professionalpt.com
281 Witherspoon Street Suite 201
Princeton, NJ 08540 Office: 609 622 5624 Cell: 908 285 4124 Fax:609279 2196
www.professionalpt.com

年轻的时候应该请New York city 的专科医生或者医院看。假如没有治愈应该是差不多反映全美国的医疗水平。也许不需要手术可以有其他矫正治疗办法。我家孩子在NYC 的Hospital for Special Surgeries 做了比较全面的Knee surgery。是差不多是全美第一的儿科膝盖手术医生做的。也是运动受伤后发现的问题。

推荐Atlantic Physical Therapy Center
Atlanticptcenter.com

You can try Ivy Rehab on Harrison Street, Princeton. Ask for Kristen or Bob.

Ivy Rehab Physical Therapy
Address 330 N Harrison St Unit2 Princeton M Thu Phone (609) 924-0697

Progression Physical Therapy of Princeton
601 Ewing St # B9, 206
Princeton,NJ 08540
这家不错，可惜我的保险不允许。做过一个session，当时是左肩膀疼，教练教我一个动作，练完之后当晚就不疼了
COVID 以后，有的要自己付的费用是一小时190 或者以上
我去过这家。lawrenville那边有一个Mercer bucks Otho https://www.mbortho.com/service/physical-therapy
Strive Physical Therapy and SportsRehabilitation

Natural Jade Acupuncture and wellness center
713 executive dr. Princeton
609 608 0299

我去过这家。lawrenville那边有一个Mercer bucks Otho https://www.mbortho.com/service/physical-therapy
Strive Physical Therapy and SportsRehabilitation

我同时用上面推荐的维新针灸
415-416 Executive Dr., Princeton NJ08540
Phone:6096816599
Email:xinxin0505@gmail.com
Wechat: Vivide0505      Major health insurance accepted
我看每次有人问针灸推拿，每次都有人推荐她，估计挺popular吧。

Dr. Jianzhong Chen 609-750-1822 
如果不是骨折的话，陈建中医生针九或者推拿
在新州，没有再知道比陈医生强的治跌倒外伤的。以往看到的情形是第一次扎针后病痛应该会好6成以上。

(针灸医生陈玉碧很好啊， 408 Plainsboro Road, Plainsboro NJ 08536.      609) 750-1650
陈医生非常好，是我用过的最好的针灸按摩医生，她收保险的

给你推荐一个针灸医生，同时她也做功能医学function medical. Dr. Qingdi Geng,  phone: 609-216-6938, 诊所地址： 339 Princeton-Hightstown Rd. Bldg. C , East Windsor, NJ 08512

Medical Acucare Integrative Health & Acupuncture
M       Qingdi Geng.MD  
Ph: 609-216 6938, Fax: 609-739-9031 Email: into@medicalacucare.com
Web:https://www,medicalacucare.com
我的肩膀痛，针灸3次就好了。

wang13764372308
我的办公室地址：4 Terry Drive Newtown PA 18940 suite 18
中药治疗ADHD

    `},{id:14,title:" 中医",content:`
中医

https://hopeacupuncturecenter.com/about-us/ 当时找的zhao 医生 还不错

medical acucare
Address: 339 Princeton Hightstown Rd Building C EastWindsorNJ08512
Phone:(609)216-6938
针灸医生可以找耿医生，疗效挺好的。

林榕生中医
(212) 334-9117

Acu-Care LLC
243 Bridge St, Metuchen, NJ 08840
3700 Route 27, Suite 200, Princeton, NJ 08540
Dr. Jin Lee, L.Ac., MD (China)
Dr. Richard Stillo, DACM, L.Ac. 
Phone Number:  732-790-6303 
Meet the Practitioners | Google Reviews

维新
Weixin's Acupuncture and Wellness
Weixin Su
Licensed Acupunturist(NJ/NY)
Weixin's Acupuncture and Wellness
Weixin Su L.Ac.
Board Certified Acupuncturist (NY/NJ) Diplomate of NCCAOM
415-416 Executive Dr., Princeton NJ08540
Phone:6096816599
Email:xinxin0505@gmail.com Wechat: Vivide0505      Major health insurance accepted
我看每次有人问针灸推拿，每次都有人推荐她，估计挺popular吧。

给你推荐一个针灸医生，同时她也做功能医学function medical. Dr. Qingdi Geng,  phone: 609-216-6938, 诊所地址： 339 Princeton-Hightstown Rd. Bldg. C , East Windsor, NJ 08512

CPA 推荐 Dr. Jin Lee，  http://www.acu-care.com/
Dr. Jing combines her knowledge of Traditional Chinese Medicine with her expertise in Traditional Chinese Acupuncture and Japanese Kiiko Style

Medical Acucare Integrative Health & Acupuncture
M       Qingdi Geng.MD  
Ph: 609-216 6938, Fax: 609-739-9031 Email: into@medicalacucare.com
Web:https://www,medicalacucare.com

我的肩膀痛，针灸3次就好了。

纽约法拉盛重要点有邮购业务
新一洲洋参
ZENGINSENG
GINSENG	ZEN	葉蘇子 SUZI YE	
Cell: 917 681 7878
Email: suziye63@gmail.com
總店地址:40-20 Main Street,Flushing. NY 11354
电话:1-718-886-03001-718-8868518
1-718-886-3508 传真:1-718-886-9519

有人知道普林附近有卖中药的吗？
我也找了很久。还是得去纽约，或者网上购：
网上中药邮购
德成行
Tsemporium.com
https://m.tsemporium.com

纽约同仁堂

常用的中成药，美东可以买到。那种需要煎煮的很少见到。

常用的中成药，Edison金门超市比较全

纽约金禾中药，如果有方子打电话可以订购，他们可以邮寄

    `},{id:15,title:"房检/房屋检查/home inspection",content:`

这是论坛搭建人自己推荐的：
Neil Kipnis
732-792-6687
neil@inspectitneil.com

我们朋友推荐的他，他们用过他两次，检查的都很认真。检查时间4+ hours。

我自己的经历：我自己考了个证买房子，其实我的broker公司有推荐的人。他还提供所谓的90天保险，但是那个保险目前为止没什么人用，然后报销的额度3000，而且要平摊到很多的项目上，比如屋顶，空调，厨房电器啥的。。。而且很有可能被拒。

Neil先是问要了地址，然后根据房屋年限推荐了另外的检查水管的项目，另外加了一个inspector，那个人会用带着camera的管子检查你们家的水管。Neil的建议是如果水管破了，漏水了，花费会在15000刀左右，没有保险会报销的。
我们当天10：30am开始检查，一直到了下午的5点。中间他会告诉你很多需要注意的事情（屋顶太旧，保险公司可能让你更换，否则没法买保险。siding还有窗户最好尽快换掉，这样你的utility会节省很多），还有你买了这个房子之后需要更新的事项。另外在地下室检查的时候还发现了含石棉的地板，含石棉的暖气管道。检查的很认真，也很耐心的回答你的问题。
最后的房检报告98页，文字加图片很详细。summary也有48页。我的broker不喜欢他这种报告，但是我个人觉得很好。利益不一致吧。收费700刀，算是市场价。他说其实现在的很多agent更喜欢新入门的房检师傅，他们的报告会很短，检查的也没这么细，这样更利于交易成功吧。
但是感觉作为买家，我个人更倾向于他这种房检师傅。
另外他会把他使用的那个系统里面关于房子的permit分享给你。我另外还有一份broker从OPRA那边得到的报告，我的情况是两份结果一样。

-----------

购置房屋前的房检/inspections
这个John比较好，他会告诉你问题在哪儿，怎么修，如果拖下去会怎么样（毕竟不是所有的都立马出现问题，但是可能是早晚出问题，或者小概率某些条件下出问题）。建议你全程录音，虽然他的报告也很详细 . John写了一个一百三十多页的报告，我们律师看得都晕了，说你们的房检太厉害了，还问我们要了John的联系方式。John Martino: mailto:jminspect@optonline.net

House inspection;
我不知道，我找的另外的人。李先生7328871077
中英文都很流利

Inspectors	David Moir	
732-616-4389

Frank Lin
 Frank Lin Home Inspections LLC
 www.franklininspection.com
 (908) 218-0595
 我们买房时用的inspector

Mike Seltzer
732 3098998
mike@inspectorseltzer.com

Inspector Licensed Engineer James Kin
609 851 4401

A title search will determine the legal owner of the property; reveal any mortgages, *liens, *judgments, or unpaid taxes that will have to be cleared before the property can be sold; and detail any existing easements, restrictions, or leases affecting the property.和房检的重要程度不相上下，我甚至觉得更为重要。如果已经投资一百万，为什么要省那有可能有后患的一个零头。当然，如果卖方提供了近期的，你可以只买一个update,总需要的，原则是买个踏实以免后患。我碰到过一个真实的案子，买房的朋友closing那天title search发现房子上有一个Lien,推迟closing 一天，等屋主还清了债务才过户。当然你有空的话可以自己做title search,或找非律师推荐的，但时间通常比钱还珍贵。我知道自己买房时是心甘情愿的买的个人意见，仅供参考
A title search will determine the legal owner of the property; reveal any mortgages, *liens, *judgments, or unpaid taxes that will have to be cleared before the property can be sold; and detail any existing easements, restrictions, or leases affecting the property.和房检的重要程度不相上下，我甚至觉得更为重要。如果已经投资一百万，为什么要省那有可能有后患的一个零头。当然，如果卖方提供了近期的，你可以只买一个update,总需要的，原则是买个踏实以免后患。我碰到过一个真实的案子，买房的朋友closing那天title search发现房子上有一个Lien,推迟closing 一天，等屋主还清了债务才过户。当然你有空的话可以自己做title search,或找非律师推荐的，但时间通常比钱还珍贵。我知道自己买房时是心甘情愿的买的个人意见，仅供参考

title company 是由买家的律师选择，通常除非在一开始就告诉律师你想指定那家公司，否则律师是不会主动问买家的，就像@Cecilia Birge, 谢兰 (Princeton) 所说，Title co 的价格是政府公定的，所以找到好沟通, 可信賴的就很重要了，我以下推荐Charlie Liu. 他公司的办公室就在附近，我有好几位客戶用过都滿意，有问題可以和他联系

https://foundationtitle.com/professional-services/ Valerie Mason
Branch Manager
T: 609-586-7077 ext. 2002
F: 609-257-0955
D: 609-631-1219
W: www.ftnj.com
3840 Quakerbridge Road, Suite 210, Hamilton, NJ 08619

Title Charlie Liu
(609)759-1218
mobile
(609) 947-5642
FaceTime
email
cliu@titleauthority.org
work
12 Roszel Rd C206, PrincetonNJ08540 USA NJ US

    `},{id:16,title:"公证签证银行贷款国内汇款",content:`

这个公证一般在哪里做，有什么建议吗，谢谢
Additionally, all banks have it. If you have a personal lawyer, their paralegals are usually notaries as well.
去自己银行公证先打个电话预约，因为只有有公正资格的人在才能做，是免费的，去UPS收费有些贵，我有一次花了二十几块，图书馆和邮局应该比较便宜
Nassau 的UPS吧，只要5块钱，不管几个签名。有些人按签名个数收钱，每个5刀。先打电话问好可以公证的人啥时候上班
Township office有公证，$1。

新泽西公证员
Yu Zhong
Yu.zhong.609@gmail.com
仲宇的公证和签证服务很好，他的电话是6097513252. Wechat是yu_zhong_609

27号路HMart附近的华夏旅游也可以代办签证


先做一级二级认证，如果娃在新泽西出生的话可以直接找州政府做二级认证，然后再去领事馆官网下载一个申请表填好，如果申请人是家长的话就不用带娃的旅行证了，去纽约大使馆办，大概几天后再去取回来就行了。

二级认证，需要提前预约吗？费用一般是多少？

从州政府的网站上订就可以，这个可以邮寄，不用去现场，费用有点记不清了，应该是小几十刀

https://www.njportal.com/dor/apostille

Broker
David Mcdermott
PenFed Loan Officer
NMLS # 102160
David.Mcdermott@penfed.org   
“They have very good rates”

请问往国内汇款除了西联还有别的安全渠道吗？ 西联最近老是有问题
从自己银行帐户汇去国内银行账户。
只要有对方开户行的帐号、地址、电话、swift code, routing number。电汇的话基本上24小时之内就可以到帐，汇款人有$45手续费。收款人还有$10-$15左右费用

    `},{id:17,title:"安装更换地板/地毯/地下室装修",content:`

地板 Manuel +1 (732) 889-6853. 磨地板上漆 $2/sqft 非常好的师傅 就是太忙不一定能接电话 可留言

Floor   赵师傅     
赵勇 (732) 397-5770 。 他专做地板。又快又好但不便宜。
做地板的赵师傅 坐地起价。而且涨的不少。不建议
赵师傅做的感觉上确实好 
Basement waterproof Sal Mendola         609 375-0466            还好，要讲价

郑海雪-换地板
微信号：wxid_exps314z628v12
 
bill电话7323221378handyman
装修地板

推荐打磨地板的人Dr. Dustless, https://www.doctordustless.com 磨出来的灰尘几乎全部用管道排到室外，做完味道也不是非常厉害

2020年想装修时找过张师傅，人非常好！他的报价每平方英尺装修价位在240-300美元，人工占60%，地下室工程没有承包过他说不太了解。

我用过Daniel做室内隔出来一间房间，drywalling，修补以前起居室墙面的洞，起居室卧室和厨房涂漆，做的很好，非常细致，价格很实惠
地下室装修，水电都可以做，我们加了一个厕所，一个wet bar。
609-255-3028 打电话不太接，但是信息留言，他很快回复
他们帮我翻修厨房和地下室。价格合理，负责任。可以帮助申请镇里的Permit。

我们去年请了个师傅铺地板，还不错
(908) 361-2916赵师傅

我刚刚铺完地下室的地板。非常棒  强烈推荐 应师傅 电话： (609) 433-1413

安装木地板和地毯服务
Ceci的微信：XL9083271333

我们用过carpet centers of nj 还不错  
732-254-2060
917-923-7827
Carpet centers of New Jersey是一家中国人，他们只换地毯不清洗

    `},{id:18,title:"地下室排水整修/sump pump",content:`

地下室你可以联系顿普 (609) 240-9088 3年前他帮我做过 做得还不错

地下室 (609) 203-0033

Basement everything
Serving NJ, PA, and NYC, Jersey City, Edison, Freehold
OPEN
1-732-697-0557

Ryan Basement
phone
+1(215) 801-5470

William，手机是609-933-4014
我家地下室去年flooded，帮我紧急排水，加之后除霉消毒。人挺实在的，做事也蛮好的。

地下室内修 排水
Bob 7326970557                  

求问 我们要装修地下室 请的华人装修师傅需要屋主自己申请permit 我们申请了之后 有些项目被拒绝了 不知道有没有收费帮屋主申请permit的人或者公司
BaiKevin 6093062600 你打电话问问，留voicemail把详情说说

请问大家有做basement 结构的公司吗？我家地下室的结构柱子要换
Paul Pennachi是做泥土工程，质量价格都很好，(609) 203-0033

BASEMENT                WATERPROOFING   
Call:732-721-4900       
SOLUTIONS       718-761-3698    

BASEMENT WATERPROOFING
Barbara Skurzynski Cell: 908-692-6045
www.njdrybasement.com

地下室淹水弄干净
Fire-water-mold clean up
Servpro 
732-431-4440
请问群友们有好的irrigation contractor 推荐吗？
Hidden springs(irrigation)
(609) 585-7080

did you try hillsborough irrigation?
Physical Address: 273 Willow Road, Hillsborough Township, NJ 08844
Phone: (908) 359-1898

我联系了Fyr-fyer （609 896-0600） 他们可以提供Fire Sprinkler System 检测和服务。

请问大家冬天前一般是自己winterize喷水系统还是找人来弄？
ecosystemsnj.com
我用了许多年。 没有比较服务还可以

大家好，你们都是用哪家做Sprinkler inspection ? 价格如何？有推荐的吗？
1 732 521-1666
Chad
同时维修换抗冷剂，税下来约320

WATERPROOFING	Call:732-721-4900		718-761-3698	

Basement Waterproofing
(800) 865-8787 RYTECH claims@rytechinc.co Structural Drying	Water Extraction	Mold Remediation	(609) 924-9565 DANIEL JANICKVice Cell:609-917-0830

求问： Sump pump alarming  system 哪里买？
Safe Air Systems
这家不错。我换整个sump pump ，价格合理。做的非常专业
推荐Safe Air. 帮我装氡气装置，sump pump .价格公道，还专业
zoeller牌子的Sump pump比较好

请问群友们有维修 sump pump 地下排水泵 的师傅推荐吗？
着急的话我一般找Theo，响应几乎是秒回，收费不便宜也不贵。我上次的sump pump加上告警装备大概1000美金左右。
1600美金
Theo Ex Plumbing and Heating LLC2
Phone# 609 838 1843 theoexpiumbing@gmail.com
Total $1,226.00
609 851 2401

Handyman Daniel 刚帮我换了sump pump, 是我问到的最低的一家。问了几家，Fante报3600,  Theo报1200，但是要等两个星期，因为地下室淹了，等不了，找了Daniel, 他以前帮我装修过厕所，做的很快，才一千多一点。推荐
Daniel帮我们换了全新的Sump Pump，原来的Sump Pump以及备用的Sump Pump都是以前的房东装的，备用的是电池启动的，但是功率太低，上次下大雨地下室井里面太多水第一个泵坏了，备用泵效率低，所以淹水，所有东西都飘起来了！Daniel给我换的这个不是电池启动，是通过水管压力推动第二个备用的sump pump启动，这样就不担心地下室淹水后电的sump pump坏掉。这个sump pump太先进了！

那为啥水总是有啊，泵不完啊？ 
可能可以去室外看看水排去哪里了，或者室外水管排水有情况。水又回流去室内． 
可能是水泵螺旋桨壳子的螺丝腐蚀脱落了  螺旋桨一直在转但是水抽不上去。 
拆了换几个螺丝把盖子拧上就行了 
墙外的管子出水口，可能需要离房远。 
同意！ 起码6 - 10米以外。

    `},{id:19,title:"接送",content:`
为服务大普林地区的居民，本群定期发送生活服务信息，全是群主在各个微信群收到的微信信息集中，完全基于个人推荐，无法保证信息真实，用前请货比三家。也欢迎各位群友发送评论和信息
，及时登出反馈。群主微信号：yalichen15

taxi/机场接送												

辛先生：732-762-0722
$220单程去纽约机场

给大家推荐一位收费合理的师傅，从普林到JFK收费180，包括了过桥费路费，小费自己给，师傅人好，准时靠谱，没压力。车子干净，师傅早了十分钟到，非常靠谱，行车技术也好。是我找到的去JFK最低的价格了。推荐，师傅叫木杉，微信号：liyongbin602529
6092168105
对，我也一直用这位师傅，推荐+1

您好， 普林到JFK 单程是$200美元 谢谢
是的 已经包含过路费了 没有其他杂费， 小费随意没有强制要求
微信号：bugbug-bugx3

大家好，请问有接送机的司机师傅推荐吗？从西温莎到JFK 的
我们用的是你发的list 上的东歌旅游车，West Windsor送机JF K往返280，mini van, 去机场3人，返程1人，四个行李箱

我们一家人12月31号凌晨四点从普林downtown出发去LaGuardia Airport
我在中文报纸上找到陈师傅 609-380-3966，准时周到
$接190， 送170 单程去纽约机场

东歌旅游车包车机场接送
6097213702
$230单程去纽约机场
我們都用東歌机場接送服務 他的微信ID Kevin-Guo78288

机场接送
(848)248-8885

请问哪位有接／送机场的师傅微信／电话？@Moshe +1 (973) 727-6295 Frank Wang

尹敏师傅-wxid_thveqkrb6gde12
目前还是接送，或者小型旅游，鉴证服务等，收费一般是送一百八，接二百 
Neward只要八十
送机简单，接机会花更多的时间。
6097218805

请问，大家有靠谱的能推荐的接机服务吗？以及，半夜从JFK接机需要多少钱？
我有，220元，半夜大车，小车200元
y9096155005

请问一下，谁有送机场的司机的联系方式吗？谢谢🙏
浩哥
Haoge681027
还有 bugbug-bugx3这位师傅

大群有群友推荐陈师傅，微信号：liyongbin602529

请问哪位有接／送机场的师傅微信／电话？@Moshe +1 (973) 727-6295 Frank Wang

(848) 248-2608大龍先生，机场接送，不过叫Uber比较便宜

云龙
微信号：w7326681913
你好！去Newark，你是住普林斯顿吗？费用是60元起？人数、行李多、和夜间价格会变化
正常3-4人，3-4件行李就是60元，单程是70元，双程接送都找我每趟60元
$240单程去纽约机场

你可以联系Yongbin Li (609) 216-8105 收费合理，纽约、费城、纽瓦克机场都去，用过的朋友都满意
哪位知道从纽瓦克机场坐火车到普林 机场出来到纽瓦克火车站是要走过去还是有什么接驳车之类的？
裝一個NJ TRANSIT的app
AirTran到每個幾樓。不是免費的22美元（已經包在NJT的票價裡，需要那張票進入）。 NJT 有一站專門去機場（叫EWR)，不是紐瓦克Penn Station。
從普林斯頓去NY JFK: NJT 到NYC PennStation, 在裡面轉Long Island Railroad (LIRR)去（停）Jamaica 的车（多条线路都可以，两站左右）（off-peak City Ticket 才$5）； 在Jamaica 转AirTran（$8）
先在機樓坐AirTran到NJT(先無需買票）。在那裡買NJT的票去Princeton Junction. (需要那張票進入）。 然後去Trenton 方向的站台。一定要上去Trenton 的火車，其它終點站的火車不能上。
在機樓裡AirTran去NJT方向好像叫RailLink.

需要提前买票吗？NJT我知道怎么买
不需要提前買票。但是如果有LIRR的App, 可以提前買好票，到時激活（activate）。 AirTran 則可以當場買票，也可以用紐約地鐵卡直接進去。

    `},{id:20,title:"孩子音乐钢琴",content:`

普林斯顿六月份新来的一位钢琴教师：王迦勒博士。毕业于莫斯科国立音乐学院，他曾是大学教授、博士生导师、国际比赛评委、五四青年奖章获得者，甘肃兰州人。他的很多学生取得了英皇考级（ABRSM）的Distinguish成绩、国际比赛的一二等奖、考取了世界多所学校的附中、本科、硕士及博士。王教授将在今年6月中旬正式移居普林斯顿，为孩子从事正规系统化的钢琴训练及音乐熏陶，帮助学生实现不同等级的目标。目前正在招生。有需要的爸爸妈妈们请及时加王教授微信（微信名：calebwang330）入群咨询。
我已经开始上王迦勒老师的课了，非常优秀

请问大家有附近的钢琴老师推荐吗？普林的，谢谢！
Peter 6092131471
我们跟Peter的经验很不好，不推荐给青少年

钢琴老师inessa Shindel
Piano Teacher
(732)951-3007

westminster choir 老师 钢琴老师lattore 
+1(732) 688-9064
还好。就是忘性太大了，常常忘记讲过什么

westminster choir 老师 Michael Jacobsen; Suzuki method
完全不推荐，非常浪费时间，根本学不到东西

westminster choir 老师 Carol Comune,
总是批评孩子过于严厉，孩子在她手下不再喜欢钢琴了

我们钢琴老师住west windsor， chloris li，她教课很认真
chlorisli@gmail.com

钢琴老师Denitsa VanPelt，前westminster choir 老师，Suzuki method
denitsavanpelt@gmail.com
5136001512
东欧人，非常严格，如果孩子很有天才也愿意吃苦，这个老师不错。但是如果孩子资质一般，这个老师过于苛刻了，一般的孩子越跟她学越不喜欢钢琴。

我推荐这个studio 有钢琴私教 Steam Works studio
135 Village Blvd, Princeton, NJ 08540，Phone: 1(844) 265-9880 
Email: info@steamworksstudio.com

在Princeton这一帶，我强力推荐我的鋼琴老师张冰冰732-668-4251，她周五在Westminster College也有教課，如果不介意开远一点，也可以到Warren找她大姊Wendy ，Wendy 比较嚴格，擅長培养比赛技巧908-542-9435，我没跟她学是因为她對我不会手软，而且我不需要参加比赛
不好意思，我分享一下个人观点，群主发的鋼琴老師名單中，在Warren 的鋼琴老师Wendy是我大姊，Wendy是去年NJMTA（ NJ music teacher association)president她非常擅长帮孩子根据个人风格争取比赛得到最佳成绩，教学风格严谨，适合小朋友自己很有兴趣会主动練習和家長配合度高的家庭，而张冰冰老师是我目前的鋼琴老师，很有耐心而且很会鼓励学生（至少对我是这样）张老师会分享作曲家的背景和创作过程等等有趣的信息，能让学生在練習的时候感受到曲子的意境，兩位都是很棒的老师，認真负责而且有深厚专业功底

Piano Tuner
732 672 0930

钢琴调音钢琴维修保养上门服务
电话:7325200355
刘先生 

我家女儿的钢琴老师推荐的Piano Tuner，用了许多年。键有小毛病也顺便fix
Piano Tuner Chris
+1(609) 426-1818

调琴Joe的电话732-600-8080
Email:Josephvincentbutler@yahoo.com

家里钢琴要调音，麻烦大家有专业人士推荐的吗？多谢🙏！
打这个电话问问，+1732 887 4297

钢琴老师Fang-Ting Liu Piano Teacher Piano Teacher
(609) 520-8999

钢琴老师婉玲
微信号： pianolu0215

我推荐这个studio 有钢琴私教 Steam Works studio
135 Village Blvd, Princeton, NJ 08540，Phone: 1(844) 265-9880
Email: info@steamworksstudio.com

专业古筝老师：我一个朋友施老师，教学认真细致严谨，上海音乐学院毕业，现在学生已满，如果有空位可以接受新学生。jeansze@comcast.net 如有空位，会及时通知。

    `},{id:21,title:"修汽车",content:`

修车/Car body work																			
群主 下面这家修车行非常推荐。老板态度好 效率高 收费合理。还有一个在我眼里是个大毛病的Ac制冷不 strong， 技师免费检查了一番后 修了个小部件 老板根本没收费。我感慨怎么会有这样的老板啊
ADVANCED
AUTO CENTER
3817 Route 1 South, Monmouth Junction, NJ 08852
Dependability & Reliability For Less
MANOJ BANSAL
(732) 821-1006
njadvancedauto@gmail.com
njadvancedautomotive.com

claudio auto service：
86 Sandford St, New Brunswick, NJ 08901
 (732) 640-2880. Call Now · Visit Website. https://claudioautoservice.com
查故障到修好一共花了1.5小时。中间我问的问题都很热情给我回答：给我讲解故障
原因，给我看更换了哪些配件，提醒我自己下次应该怎么维护，服务好不周到。
菌最后130、搞定，我自己查过配件价格所以账单拆解下来是：两种配件（600上下，自己买可能要七十。）
+工时费（一个半小时70

朱先生到府修车 Mobile(732) 668-7853
非常推荐朱先生。很容易联系，的确是来家里修车，手艺很好，人也很随和，价格非常合理。
Jeffi Lube看过我的车的故障，告诉大概的问题和修车价格范围，但是他们不修，朱先生的报价是这个范围的低线

修车曾师傅	7323225582		
非常便宜	
曾师傅有自己的修车铺。他比dealership实在便宜太多了。
他的garage叫On the way auto repair
水平很高，但是很多项目不做。只修理不保养
处理：车辆电路故障类诊断；维修车辆机械故障类诊断；维修车辆异响异常类诊断；维修车辆引擎故障类诊断；维修车辆空调故障类诊断；维修刹车悬挂皮带水泵排气管；处理所有故障类问题；处理所有电路机械类问题（不处理事故碰撞油漆）
不处理:换油/保养/轮胎四轮定位不处理:前后挡风玻璃更换不处理:事故碰撞钣金喷漆不处理
修车要排长队
这是 Bridgewater 一个修车行，朋友介绍说服务不错
ON THE WAY AUTO 8482646822 (办公室电话）
7323225582 (Emergency ) 8:00-6:30 周一至周六 店铺地址：111 Canal Road  
south bound brook NJ 08880 

Kingston Garage
6099216134

群主 下面这家修车行非常推荐。老板态度好 效率高 收费合理。还有一个在我眼里是个大毛病的Ac制冷不 strong， 技师免费检查了一番后 修了个小部件 老板根本没收费。我感慨怎么会有这样的老板啊
ADVANCED AUTO CENTER
3817 Route 1 South, Monmouth Junction, NJ 08852
Dependability & Reliability For Less
MANOJ BANSAL (732) 821-1006 njadvancedauto@gmail.com njadvancedautomotive.com

J&A Automotive on River Road in Ewing. (Near Revere Restaurant) . Honest and knowledgeable. He moved from a gas station on Route 31 to open just a garage for cars, doesn’t sell gas. (609) 388-7551

Matt’s auto 1580 5th St, Ewing Township, NJ 08638 we’ve been going there for years. Great people down to earth.

推荐一个car deep cleaning。honda princeton。内：100、外：100。做出来就是可以直接卖的状态。
Honda Princeton dealership

请问附近除了Costco，还有其他靠谱的Tire Shop么？ 谢谢
大家换轮胎，是用普林斯顿靠北边在Route 206上的Mavis Discount Tire 吗？
我家用的Costco换轮胎
自从有了Costco，就一直在用。他们不仅车胎价钱便宜，价钱里还包lifetime tire rotation (every time you change oil, or 10,000 miles), hazards repair (修补车胎穿洞）。
我用过130上那家，还不错
谢谢！我家只用了206 路上这家Mavis Tire换车胎，平时换brake 和机油之类都在这家，因为离家近。好像两位年长一些的先生是店主，态度比较和善。顾客要求提早更换的部件和车胎，店主能按顾客意见换，以免在自己需要出门旅行时错过修车机会。Dealer 远一些，约修理时间等的久。

换机油和其它液体，我一般去在Route1， Lawrence的Jiffy Lube（at Franklin Corner Road)

群主和群里朋友，麻烦问一下：昨天停车的时候不知被谁把车门处碰了一个瘪，请问群主可以帮忙恢复吗？或者去那里可以处理恢复原状？谢谢大家！
908 4133529 专业修复

Meineke-2813626 US 206
Hillsborough, NJ08844
meineke
(908) 428-7206
DOING CAR CARE 
hrag2813@gmail.com      
https://www.meineke.com/locations/ry/hilisborough-2813/
是在206上一家店
被群友指出那是一家很差的黑店

请问大家附近有哪些服务可靠的 repair garage, 我需要做 wheel alignment 等常规服务， 谢谢
GOOD


我的车𥦬玻璃裂开、有car body 推荐吗？多谢
AutoGlass
safelite.com    Mobile Glass Shop       
800-800-2727    safelite.com 800-800-2727       
Hy urter is fF39251800-315.1257

请问大家， 有靠谱的汽车贴膜店推荐吗？谢谢！
MINT TINTS56 Troy Ave. Ewing, NJ 08638609.403.6121
I recently just used their services.  They also do car wash. 
They are also DMV approved.
3M film for tinting is supposed to be the better one.
New Jersey Window Tint Law
jdpower.com

换机油的店“STS”778 State Rd, Princeton, NJ 08540
美国

haha, 我刚刚研究过。1）BNB car wash on route one. 732-821-0100。2）(732) 803-2860 Markus. On route 27. He is very busy and booked till November

Gino’s Auto Body Shop
4360 NJ 27
Gino body shop	7322970609
Gino’s做exterior的，interior可以找KPS Princeton garage

206 上的mavis discount tire, 1 号公路的 pep boys 。 用过这两家，感觉都不错

City body work	609-448-9800
180 Mercer Street, Hightstown								

Auto repair	
41 Main St, Woodbridge, NJ 07095

JC
John Chen Car Service
mobile
(732) 763-4020

Kent Dai Auto Repair
Auto repair shop in Edgewater Park      22+     
(609)880-9555
609-792-6667
Kent is our car mechanic for almost 20 yrs. Highly recommended.
这位邻居有修车铺，口碑好
我也推荐Kent
DAI AUTO REPAIR DOMESTIC & IMPORT609-880-9555
戴氏
OIL CHANGES      BRAKES  ·COOLING SYSTEMS        
4331 US-130 Beverly NJ 08010
DAI AUTO REPAIR 你找Kent， 他家住Princeton， 可以上门看的
6097926667 Kent

Bob's Auto Services
15 Cold Soil RdLawrenceTownshipNJ08648				
我最近去了这个还好

Mr. Tire Auto Service Centers
Tire shop in Montgomery Township, New Jersey
Princeton North Shopping Center Services: Air & cabin filter renlacementAir conditionina Ant
(908) 837-1922

修车/Car body work                                                                                                                        群主 下面这家修车行非常推荐。老板态度好 效率高 收费合理。还有一个在我眼里是个大毛病的Ac制冷不 strong， 技师免费检查了一番后 修了个小部件 老板根本没收费。我感慨怎么会有这样的老板啊 ADVANCED
AUTO CENTER
3817 Route 1 South, Monmouth Junction, NJ 08852
Dependability & Reliability For Less
MANOJ BANSAL
(732) 821-1006
njadvancedauto@gmail.com
njadvancedautomotive.com                               

请问下  汽车前挡风玻璃被掉落的树枝砸出了裂缝，保险能修吗？如果不能的话有没有推荐修理的地方呀？
Safelite 可以修或者换
裂缝不大的话 可以自己买修补玻璃的胶水 我的车玻璃曾经被石子砸了 5 公分长的多条裂缝 自己都补了

请问有没有洗车场的讯息？谢谢🙏
洗车服务
Valet Auto Wash Lawrenceville
4 Litho Rd, Lawrenceville
自己来很方便，也有人工洗的

https://www.princetonhonda.com/?utm_campaign=gmb&utm_medium=organic&utm_source=local
Just called last week. Interior detailing is $100 and exterior with wax is another $100.

    `},{id:22,title:"口腔整形医生/种牙/牙保险",content:`

整牙
Dr. Chi Taw Lin, DMD,
Dentist in Hillsborough Township, New Jersey. 他和儿子的私人牙科诊所。全家在他那儿看牙近20年，有25分钟车程。非常有经验和负责任。建议先电话咨询下。
(908)359-5243
smilinfamilyorthodontics.com
Christopher S. Lin,DMD

Princeton Orthodontics:
Jonathan Nicozisis	TTONCATHOOO	
J Russo Jr., DDS, PA	Orthodontic Sp	
than L Nicozisis, DMDMS	for Children	
Get onlinecareprincetonorthodonticsnet
601 Ewing St#B12PrincetonNJ08540
Dr. Teresa Oh
General& Cosmetic Dentistry
TERESA OH D.M.D. By Appointment Only
33 State Rd. Suite G PrincetonNJ08540 Tel:(609)924-4421 Tel:(609)921-3287
teresaoh09@gmail.com

Princeton Dentistry 
Suite C-16, 601 Ewing St, Princeton, NJ 08540
（他幫我做拔牙和植牙）
（他們不會中文，但目前英文溝通從沒遇過問題）

我儿子在plainsboro整牙。smile orthodontics
你问问Plainsboro tony Tyan, sweet smile Orthodontics, 应该比这个略低。 需要看保险。我个人推荐

Together, Dr. Chen and Dr. Cabri focus on utilizing and learning about the latest technology to treat a variety of orthodontic and skeletal disorders in children, teens and adults. 

我家孩子是先选了自己住的镇上的整牙诊所由同学的家长介绍去的。扩张牙床后装上Brace 后发现在三周内，牙齿是松动的。选哥大牙医学院教整牙课程的陈医师（见上面). 才知道华裔的孩子牙根浅，不能用大力强度brace. 另外亚裔和其他种族在牙上是有区别的。

陈医师是自己动手整牙，而过去镇上的诊所是二，三十岁的助理给整牙。虽然陈医师的诊所在Ridgewood 和法拉盛，我们是坚持下来基本上周六去法拉盛整牙。以前有获奖Mrs. New York 的女士是由陈医师给从小整牙的。
Ridgewood, NJ	Flushing, NY	
150 Franklin Avenue	4107 Bowne St. # LC	
Ridgewood, NJ. 07450-3206(201) 444-1712 CABRI ORTHODONTICS(718) 762-1100 Flushing, NY. 11355-56
五年前，好像陈医师诊所收费5千6。当时自己镇上的诊所收6千（包括保险部分). 

Dr. Teresa Oh
>>> General& Cosmetic Dentistry
>>> TERESA OH D.M.D. By Appointment Only
>>> 33 State Rd. Suite G PrincetonNJ08540 Tel:(609)924-4421 Tel:(609)921-3287
>>> teresaoh09@gmail.com

Mountain View Orthodontics Orthodontist·6.5mi
378CR-518
Skillman,NJ 08558 United States +1(609) 466-5300

我会推薦Pennington的Dr Hoffman ，夫妻兩人都是牙醫但是先生技術比較好https://penningtonfamilydentistry.com/dentists/bernard-l-hoffman-iii-dds/
我自己和我孩子们都做過，$3950是很合理的價格，我女兒大約12-13年前做已经$5000多 我20年前在East Brunswick 做也要$3300左右 

我想问问各位群友，有没有孩子做过braces的。我接到一个报价，是3950美元，第一次交500，然后每个月交173，但是不接受其他保险（如果有其他保险，这个价格要每个月多加160美元）。大家用过的有比这个更低的吗？多谢
我想问问各位群友，有没有孩子做过braces的。我接到一个报价，是3950美元，第一次交500，然后每个月交173，但是不接受其他保险（如果有其他保险，这个价格要每个月多加160美元）。大家用过的有比这个更低的吗？多谢
大家回复都说这个是最便宜之一的。我是在Eastern Dental Lawrenceville（开车二十分钟）看的Dr. Nick. 觉得他很好，华人或者亚裔。但是他去了另一个诊所,也是Eastern Dental，但是Flemington诊所。开车四十分钟，433 US highway 202, Flemington NJ 08822, 9785475509.


如果是小孩做，而且将来小孩是要当明星的话，可能要考虑 Dr. Chen-Cabri. Dr. Chen 的诊所在Ridgewood, NJ和Flushing Chinatow, Queens,NY. Dr. Chen 可以称为亚裔女性在职场上的楷模。对工作的态度和技术和知识是让我们特别感动。女儿长大也想做Dr. Chen 这样的医生。医生工作是为让小孩有个美丽笑容，而不是看要交的整牙费用。陈医师在哥伦比亚大学教整形牙科。陈医师收的费用并不贵。但要去看陈医师，路那么远。是要有决心，有能力的。

请问一下大家，有没有好的牙齿整形的医生诊所推荐
Dr. Robert Silverstein, DMD
牙齿矫正医生．

Pennington,NewJerseyUnitedStates·231connections Albert Einstein Medical Center
BRIGHTER DENTAL CARE 
Brighter Dental
Address: 29 Emmons Dr Suite C8,PrincetonNJ08540
Phone:(609)514-1666
Appointments:brighterdental.com

phone 800-365-8295 or at www.CareCredit.com.
One Airport Place, Suite 2	378 S. Branch Road, Suite 304	
Princeton, NJ 08540	www.sabinskyorthodontics.com	Hillsborough, NJ08844	
Tel: (609) 252-0233	NJ Specialty Permit #3955	Tel:(908)369-8900
这家用metal braces，治疗时间两年半，报价$5880。
这个报价没有考虑保险可以报销的部分。
是呀，这家比我去的第一家便宜，这个价格是全包了。这个牙医应该是个东欧人，姓以“斯基”结尾。
不过钢的比较有力气，速度上会快点。我记得Jenny rong 说同一个人的钢的便宜

我上周给娃买了Delta的保险，下个月就可以用，箍牙报一半
https://www.deltadentalcoversme.com/s/?agency=1798961367

植牙專科Jason Chang 張景舜         732-777-0660(O)   離Edison  火車站不遠，好像有兩天在freehold office 
植牙要分几次做，跑紐約路費不少而且耗時。Edison這邊有個Jason 張醫師，人親切，技術好，值得一提。
我没有用过Dr Jason Chang. 我们在Brighter Dental 服务比较基础，成人仅仅是就是洗牙，孩子做了隐适美（Invisalign）牙齿矫正。我女儿很喜欢她矫正牙齿的牙医，带牙套挺负责任的。

植牙去纽约找华人医生，我植一颗牙只花了200刀和两年的保险额度，不过我的医生不收新病人

我去年做的植牙好像是$2500-2700左右
但我不用做bone graft，因此便宜一點。
所以可能也沒有任何參考價值
如果幾個醫生都報這個價，那可能也就差不多這個價了吧。
如果願意，可以去牙醫學院的診所看看（由牙醫學生或實習牙醫操刀），一般他們會比較便宜，有時waitlist會比較長。
這是羅格斯的牙醫學院診所，可以預約看看：https://sdm.rutgers.edu/patient-care

陈健 她在普林群 她做植牙ok Princeton LC Quality Dental.

East windsor 的Brace place orthodontic 也不错，我们是去这家。住west windsor 的很多去这家

我有點忘了 
我去年植的
但我記得最後是$2500
但這裡面有包括植牙+補兩個個蛀牙和一個牙冠
但詳細的價錢我忘了
orthodontist 幫我拔牙的錢是另外算，我記得三四百的樣子。

MetLife 的牙保险会给50%植牙
一般4-6K一颗

我植牙是曼哈顿的一个韩国医生不错现金给折扣后3700，这是牙医给介绍的，需要的话给你电话

我母亲去一个叫Magic Dental 的家庭口腔诊所。她拔牙，做了全口假牙，还有植牙。折腾了好几个月，花费不少。她用的Specialist是 Dr. Jeffrey Rothstein。  Dr Jeff 是全科口腔医生，他在植牙方面很有经验，另外他们有一个中国护士，沟通很方便也很有耐心。我觉得他们植牙价格还比较公道。https://www.magicdentalnj.com/about-us/

我们用Brighter Dental,  比较近。服务我也没啥好抱怨的。我女儿也在那里做了envisalign.
她下面植了两颗牙柱（白金），支持下面的假牙，这样假牙在嘴里就不会移动。 两颗$6000。上面没有植牙。
医生说看牙床骨头的情况，一般固定下面假牙需要植2颗或者是四颗。

有朋友推荐过princeton dental group。也有用过brighter dental说不错的、但我们自己的experience非常糟糕。被随便更改appt时间然后receptionist非常rude。他们的好处是是一个全面的practice你补牙和种牙不用去不同地方。

contemporary dental inplant center. 212-269-9500. Madison Ave. 看了他们网站现在价格整套是2千4. Inplant+ crown.我记得当时还另加了300 x光费.

友情提醒：种牙一定要提前做好功课，包括整牙，不同医生技术不一样用的材料形式不一样（比如🦷钢钉是螺旋还是打压，大的公司十-15年后的替代材料稳定性）

有关植牙，这个都是自费，及其昂贵，我觉得大家需要货比三家多问问价格和服务。一般牙科家庭诊所肯定比brighter dental这种医疗集团便宜一些。

我母亲去一个叫Magic Dental 的家庭口腔诊所。她做了两颗植牙。全口假牙，折腾了好几个月，但我觉得医生很仔细，不厌其烦。医生是 Dr. Jeffrey Rothstein。  Dr Jeff 是全科口腔医生，他在植牙方面很有经验，另外他们有一个中国护士，沟通很方便也很有耐心。你可以去问问 https://www.magicdentalnj.com/about-us/

估计病人多，不太愿意接受新病人。我们刚开始和Brighter dental约洗牙也等了四个月，后来各种维护等预约就快了，都在一个月左右。附近开车半小时内这么多诊所，不一定要去普林斯顿的。

Highly recommend Valley Dental hopewell. He is a great person and a great dentist

Dr.Alexander Kim
Endodontics
(609)771-1200
2999 Princeton PikeSuite4 LawrencevilleNJ08648 United States

加一个自己的体验：我想问问各位群友，有没有孩子做过braces的。我接到一个报价，是3950美元，第一次交500，然后每个月交173，但是不接受其他保险（如果有其他保险，这个价格要每个月多加160美元）。大家用过的有比这个更低的吗？多谢  
大家回复都说这个是最便宜之一的。我是在Eastern Dental Lawrenceville（开车二十分钟）看的Dr. Nick. 觉得他很好，华人或者亚裔。但是他去了另一个诊所,也是Eastern Dental，但是Flemington诊所。开车四十分钟，433 US highway 202, Flemington NJ 08822, 9785475509.
好这个3千多还是便宜的，在Hillsborough 一家上次报价5千多
我儿子花了6000多


种牙我用的Prestige Oral Surgery
医生态度一般，技术不错，


如果butget 是考虑因素的话，可考虑去纽约 contemporary dental inplant. 他们做得多技术也好, 比local省1/3 到1/2, 但是如果牙骨有问题他们不管。总共要去4-5次。

还有他们不管保险，没有out of network coverage 的不合适

    `},{id:23,title:"电工",content:`

电工/electrician
609-647-4986 Licensed Insured 

Taras Levytskyfy, electrician, 908-343-6667
he installed our gas generator.  He told us which one to buy.
总是找不到，不接电话不回信息
联系了，没回音

Gregg Mcgreevy
Install Tesla Charger
201-306-1493
2-4K quotes安装充电桩
Greg Mcgavvy
Power Plus Electric LLC
Powerplus.electric@yahoo.com
201 306 1493
回复很及时

安装充电桩
LODI handyman Pro
646-9568917
$3200 装200A upgrade； 1700 美元再加一条线

費城老趙:
2673569608

Bucky - Electrician
Mobile:+1 908-220-1222
Home:Kimizenun@hotmail.com
人非常好，报价合理
回复太忙了 ，排队太久
2.9K 充电桩

Don Savage	7327403911			
strong recommended
联系了，没回音
	
@Rebecca Edison的Dave师傅我们用过。换新空调，修旧空调，换暖气机，大小电工活。有牌照。(732) 672-4527 。是不是一个人？

Todd TWO Electrician
732 407 0172

Jolts Electric- speak with Shawn- he is licensed and insured- (732) 816-2651

Kenneth Marshall Electric (609) 443-3166 H

Peter Birkin. 215.499.2951.

Call Chuck Thomas Electric 609 209 7716. 

Charles Lewis....609-902-6009

Gregg McGreevy 201-306-1493

Eric Sparks 17325334246

Jose
609-203-1016

Electrician Steve
phone
(908) 601-2119
Already retired, Juan and Joe used to work for Steve.
Update：人确实很好，可惜已经退休了 

To All,  I would like to recommend a licensed electrician to you, very good price, very responsible, his cell is 732-484-2231

Glenn A. Dobron
Electrical Contractor Inc.
Hamilton, NJ 08619
609-586-3400

Alan 908 812 9949
Electrician
回复很及时，偏于做商业项目，不太愿意接住宅项目
	
Again, I highly recommend the licensed electrician Mark (609) 462-2258. He is very reliable and helpful. He is very patient and nice. His estimate ( price) is reasonable. A very good guy.
联系了，没回音

Princeton Electrical Makeover
价格不清楚是不是市场平均价，没有跟别的店比较过，但是整个project 过程觉得很pleasant, 装了四个灯，包括墙上挖洞装新的j box.
刚用了 Princeton electrical makeover 很专业 价格不清楚是否是市面平均价 没有跟别的店比较过 但是整个project过程觉得很pleasant
我们用过他们装两个天花板的射灯和三组（每组四个）插销，要拉线，因为是车库改成办公室。最后账单2000美元。质量特别好，我们有次以为灯坏了还跑过来看一次。小伙子非常敬业也讨人喜欢，就是很贵很贵。

James (215）266-2643，我家盖新房子时用的老美电工，很专业人也很好

Tony DiFalco
Electrician
+1(609) 751-2401
1st hour $165then $155/hr
我来推荐一位电工，靠谱！
Princeton local

是pseg的worry free送来的人解决的
你提到的tony，好几个人推荐给我了。我找了他，他建议我先找appliance的tech，他是个很诚实的人

Andy Miller 
267 688 5864
回复很及时

Almeida Electric
License# 16967
North Brunswick,NJ 08902        Call: Luan Glmeida      
www.almeidaelectric.com almeidaelectric@hotmail.com732.266.3639
Juan 908 392 2750
Juan, 是西语裔，我的agent把所有电路的活儿都给了他，我最近用了一次，不错，等了我20分钟，当天就来了，问题出在入户的circuit breaker, 不是内部问题，他给检查，解释，然后告诉我以后只有一半房子有电的情况，直接给PSEG打电话，半夜都可以打，然后没收我钱，因为不需要修理
回复很及时
报价偏高些

Bardachino	
609-490-0542
联系了，没回音

请问群友有用过接房外power outlet（for outside patio lights) 的电工吗？
有。邓浦(609) 240-9088

    `},{id:24,title:"房屋里外喷涂刷漆",content:`

房屋清洗喷涂刷漆/painting
Beker
Exterior Painting
phone
(908)721-8201
work
Bixim42@gmail.com

Mercer Painting Ali
phone
+1(609) 203-8023
Mercer Painting
四千SF,我房子矮，收费六千多
Mercer Painting& Power Washing
Ali 609 203 8023
mercerali.la@gmail.com
如果你家整栋房子刷外墙，我可以给你个参考，西雅图的single，外墙面积估计你家的2/3，形状不复杂，也是不sanding，就是powerwash，calking，总价9000，去年八九月，一直给我干到十月份，前后拖拖拉拉两个月完工。一万出头目前行情，我估计家家如此
提供另一个input, 公平些说，Mercer painting挺不错的，价格公道，刷漆和power wash, 很负责做得也仔细，顺便帮我把地线漆了马蜂窝也去除了没有额外收费
我们家现在在做deck painting, 是看了群里介绍的 Mercer painter. 刚刚做了power wash, 还没开始刷 。 但是他们不修坏掉的木头。

清洗外墙.屋檐刷漆
Olivio
Alvarado
60967298630
住宅
6099648537

之前用过Ned Stevens洗外墙。他们也洗窗子。还可以

刚用了ori刷外墙，觉得还可以
Ori 609-668-7488

我用过一家洗窗户的公司，感觉还可以：https://www.fishwindowcleaning.com/Trenton-NJ-669/?gclid=EAIaIQobChMIwJX0hfSvgQMV0NPICh2LqQNqEAAYASAAEgL9h_D_BwE Sent from my iPhone

Caceresm.
Painting Llc
609·937-0947    PRINCETON,NJ

609-668-7488
PAinting ANDTRIM.COM
INTERIOR & EXTERIOR by Ori Avisar

Molding and Painting
Ori Avisar	
609-668-7488

DM Construction Power Wash	(732) 500-1050		
Very reasonable	

Painter	Oliver Painting	
609-672-9863
609-964-8537

收钱后偷工减料的也有。certapro,网上review 非常高。结果干起活来只刷一到。糊弄人说是两道。自己不上心看着，根本看不出来
我也用过certapro， 确实是他们糊弄人，说好刷两遍，结果只刷一遍，谎称两遍

看到您在群里问deck油漆的事，推荐一个郭先生
我见过他的工作后，请过他油漆，觉得不错
电话917-325-2662 有信必复，谢谢

我用过Daniel做室内隔出来一间房间，drywalling，修补以前起居室墙面的洞，起居室卧室和厨房涂漆，做的很好，非常细致，价格很实惠
609-255-3028 打电话不太接，但是信息留言，他很快回复
刚用Daniel，确实drywalling，刷漆很好，推荐！帮我们加了一道墙，还修了窗框。他说以后不再帮客户修窗户，最多只修窗框。他解释说修窗户换窗棱不挣钱，整个换窗户才挣大钱，修的时候有风险因为少数玻璃会碎，这个没法防止因为粘连。虽然本来修窗户替客户省了很多钱，他说有客户看到一两块玻璃破了就态度变得恶劣，即使他一直在补救帮助找而且最后找到同款玻璃。所以他基本不再接修窗户的活儿，本来这个地区基本也只有他愿意接这个活儿。
屋内油漆，起居室和厨房，很多精细活，Daniel的公司确实做的不错，真细致！价格很低廉。

我在这里给大家介绍一个装修师傅做油漆水电，电话7189082188
 
屋顶/涂漆(908)705-5841
East Brunswick, NJ
    `},{id:25,title:"割草/庭院清理和冬天铲雪服务",content:`

庭院清理的公司冬天一般都做铲雪服务

Wilson’s Landscaping.   老板Wilson Reyes.  电话 6099156210，我家用的这家公司，非常经济实惠，做的很好

Victorino Landscaper
+1(609) 865-2164

我用过并愿意推荐的supplier： landscape designer Jim Davidge （415) 987-4649

SunnyGarden		Mario	6095770462		very reasonable 
does both hardscape and landscape work	
							
Fairway green lawn			(908) 281-7888		
Not cheap, but really worth it. Last year I was using Green Lawn fertilizing, it was cheaper, however, the weeds were not well controlled
Fairway green lawn more expensive, however, weeds are much better controlled. The customer service is great. 

Carlos
609-3019604 a local gardener

Treboland Landscaping
609-964 9873

David’s Lawn Service could do gardening

Noe Vasquez
honest and reasonable gardener
609 727 7914

.Jasiel
Clara's Landscaping
mobile
1(732) 527-5321

Erasto：(609) 357-8772 他们夏天做 landscaping 冬天做cleaning, painting 啥的		
Carlos	9085101081			
割草服务比较好，价格实惠	

请问大家有靠谱的、价格合理的landscaper 推荐吗？可以剪草、修建、除杂草、维护草坪、帮种花啥的。谢谢。
我家一直用的Carlos +1 (609) 649-4850

LAWN & ORDER
Specializing in Lawn Maintenance Landscaping to Hardscaping to Tree Service
Galo 908-627-9698							
Lawn service	
Rainforest Landscaping company 很不错！我家一直用他割草908-581-2160

Green Giant
Landscaping LLc. Fully Insured,Free Estimates Call or Text-609.638.2484
Greengiantlandscapingnj@gmail.com
Commercial &Residential

Cousin lawn care		Chatham	973-701-9143			
平整院子（刨树根，填土加种草，gutter下水管道延伸）弄得比较仔细，但是更改的时候坐地起价，建议全部工程结束再付款	
							
用过并愿意推荐的supplier: hardscape and landscape service Mario (609) 577-0462

Tree Chief ，800-464-0171			除杂草，一年分5-8次，每次50元左右
周围朋友都觉的不错								

    `},{id:26,title:"空调/Heater",content:`

修和保养空调/AC
David Au(空调修理)
+1 (609) 635-9590
不谢，一般的空调服务都是要是会员才有24小时内的预约，否则基本至少三天之后。我之前联系过几个，都是说刚好三天后才有空，严重怀疑是行业规矩，让你买会员的。而且我约了一个90块钱的诊断服务，他们搞了一个多小时跟David 免费20分钟的结论是一样的
David Ou 609 635 9590 他修暖气和空调的，会说国语,是香港人。去年我找他加过氟。大概300刀请问各位家长朋友，有哪位医生接受NJ FamilyCare的well point 健康保险卡的吗？
去保险公司的网站找医生单。输入你的邮区号。这是找收这个保险医生的最快途径。不过最好还是要打电话给医生的办公室核实一下。
看到群里之前有人推荐的空调师傅，我没用过。（908) 787-7222，陈师傅

我刚换了热水器。PSEG推出的replacement program.可以上官网查看，挺合算的。

修空调的公司
ArcticAC.com
特别贵

空调的breaker没法接通
732-672-4527
懂空调和电

请问普林斯顿附近有清洗室内空调管道的公司吗？
OZON Air Duct Cleaning和ProClean NJ的团购，好像都还可以。我们用过ProClean。

我最近比较了半天，用了Fante，觉得他们的服务快而且便宜，跟他们签了一年的空调水暖的合同，昨天来的technician，立马解决了我们空调不制冷的问题。因为空调管道堵住了，长期堆积使得空调为了保护自己跳闸了，所以看空调在走就是不制冷。解决问题后，昨晚空调放的比平常温度高很多，结果好冷啊！我自己加了床被子才睡着🥶
他们一年的tuneupcontract是空调加水暖250左右，光是空调或者水暖一年不到150。如果空调坏了，上门诊断109，有contract的各种修理有好像15%的减价折扣
我比较喜欢的是他们给你好好解释问题，就像国内和国外看病大夫解释不解释一样。比较安心。

陈磊
908-787-7222
家里要换水暖的heater(radiant) 和boiler，请问大家用过陈磊师傅吗？感觉他的报价有点贵，不知评价如何？
陈师傅去年冬天给我家换过二楼整个system 的管道，他的活做得挺好的，细致耐心，服务好，也乐于分享
 
Heater 用furnace 和heat pump 哪个好？
我们新空调用的变频heat pump，感觉蛮温和，挺舒服的。

家里的热水器不供热水了，请问邻居有师傅推荐一下吗？
你问一下Shawn 吧，年轻人， 还挺靠谱的
我在以前的邻居群里找到他的， 另一个靠谱的邻居推他， 给他换了热水器， 还干其他活
他给了我们contractor’s price for the water heater, therefore all material added together is $796. 安装及tow-away the old unit, $850
推荐一个装修师傅，很尽责，价格合理，处理疑难杂症。
他的价格是其他师傅的百分之63%
这个Shawn自己是哥大毕业的
他们很负责，走时卫生也打扫得很干净，帮我买东西都有收据实报实销
253 880-9349
wechat liuxiao-shawn
Shawn will prepare the paperwork for the heater, so I could drop in the township for approval.镇政府来检查

我有买PSEG的保险，他们也负责换新的water heat ，也是$1500左右，包括申请文件、检测等

请教大神们：換water heater 一定要装flood stop and pan吗？謝謝🙏
Home Depot 和五金行 都有賣，最好裝，因為 water heater 壽命 10-20年， 壞的時候會漏水，總是會造成不方便。
pan, 一定要金屬的，不能用塑料的。
一漏水時，會自動停止供水、燒水，發出警報聲。
非常感謝🙏提供信息。我是准备请人來換water heater 他说要裝這個，350元，以前都沒有。現在了解了，那就准备裝，再次感謝
如果是自家用的，我會建議買10年warranty的，因為6年一轉眼過去。別忘了要申請township permit (必須有plumber Licence 的人做）
是請plumber Licence來做，他一直強調要裝這個，原來二十来年都沒有，他幫忙申請permit，哦，我要问他買几年warranty 謝謝🙏

打算换AC 和Heater 了，哪家公司可以推荐？先谢谢啦
建议用Costco，从它的service网站约，价格确实不错，Costco还给10%还是15% back
不一定需要ac 和heater一起换 缝缝补补又三年。但一起换价格确实不错
PSEG 好像常年有补贴项目，可以比较一下。

华人jack师傅维修的不错，不妨也询问下价格
+1 (732) 543-5799 Jack
JACK DONG HVAC LLC
732 543 5799
jackdonghvacllc@gmail.com	
Jack Dong ⬆️非常好的师傅

买新空调，推荐Costco (Lennox)		四年多没任何问题。

我用了The Asteroid Companies（AEMS/ ServicePlus/ StandBy Power）。是我儿子学校同学的爸爸开的公司。当时是为了支持他的生意签了3年合同。但基本上只是做一年2次的HVAC maintenance. 

最近换空调，用了和Costco有contract的Fante’s. 觉得还不错。他们也做plumbing. 你可以试试。
Fante是我问过的最responsive的修空调公司，有专门一位师傅修mini split.其他群里提到的所有空调师傅都不接修mini split的活
Fante 6098351512 周末也会接电话
I called Fante and they will send a mini split technician. They charge a 109 dollar fee for each visit.

空调普林斯顿
7326724527

蒋蒋AC
mobile
(732) 664-6822
mobile
(732) 993-8826

空调
(908) 787-7222，陈师傅

Andrei Contractor Ac Furnance
phone
(732) 309-1759
师傅说的七八千就是换冷气+暖气的价格。
我们当时师傅说了townhouse 3000多，7，8千是house 的价格
联系好了，然后不回音，怎么联系都不再回答。太不负责任了。

專業冷暖維修·安装
冷暖器/餐馆冰箱/更换热水炉/电工维修
費城老趙:
2673569608

请教大神们：換water heater 一定要装flood stop and pan吗？謝謝🙏
Home Depot 和五金行 都有賣，最好裝，因為 water heater 壽命 10-20年， 壞的時候會漏水，總是會造成不方便。
pan, 一定要金屬的，不能用塑料的。
一漏水時，會自動停止供水、燒水，發出警報聲。
非常感謝🙏提供信息。我是准备请人來換water heater 他说要裝這個，350元，以前都沒有。現在了解了，那就准备裝，再次感謝
如果是自家用的，我會建議買10年warranty的，因為6年一轉眼過去。別忘了要申請township permit (必須有plumber Licence 的人做）
是請plumber Licence來做，他一直強調要裝這個，原來二十来年都沒有，他幫忙申請permit，哦，我要问他買几年warranty 謝謝🙏
 
前几天看到群友问热水炉的问题，我家的炉子突然水不烫了，只是温，没有看到有漏水、不知道问题出在哪里，有推荐的维修师傅吗？或者是需要换掉？谢谢大家
我找的是 theo，一个意大利老外，响应比较快。我前几天换了锅炉，3700刀，我查了下锅炉的料本价在1500元左右。自己装的话估计拿不到permission
活干得还可以，这几天我还得找Theo给装个循环泵。

N. C. Jefferson
609 924 3624
(plumbing, heating, air con)
 
陈磊
908-787-7222
家里要换水暖的heater(radiant) 和boiler，请问大家用过陈磊师傅吗？感觉他的报价有点贵，不知评价如何？
陈师傅去年冬天给我家换过二楼整个system 的管道，他的活做得挺好的，细致耐心，服务好，也乐于分享
家里mini split空调坏了，跟陈师傅询价，要价1600美元，比空调本身价格还贵。

请教各位， townhouse换冷气大概的价格应该多少？ 我根据大家推荐请了两个师傅来估价， 一个4600， 一个7500，哪个靠谱啊？多谢各位有经验大神

一个Jack Dong董师傅， 一个David Au， 都是群里推荐的

jack dong我用过 买的costco L那个牌子的 好像也就是差不多价格 

好的， 谢谢， 他给我报的4600， 另外我家空调2012 年装的， 不制冷他说是因为氟利昂都漏光了，修不好，建议换，是这样的吗？

那你让david修吧。他前几天帮我加了氟利昂 也说漏了。花了 400 
David报价换AC7500。David报价包括暖气空调一起换。
嗯，谢谢你， David的牌子是carrier， Payne。比较好的。
比jack那个牌子好吗 他的好像是和costco的Lenox

sign up PSEG worry free program. 15 天后，让他们过来检查，检查和维修费用全cover
最好加入PSEG Worry free Program, 一个月三件电器十几元，打电话他们随时来收，临时叫外面人修，出来一次没毛病至少二百。

有人认识能出水暖炉检测报告的师傅吗？买房子，Township 要个检测报告。谢谢
Then prior to the township inspection (not necessarily prior but ideal) you will need to schedule two more inspections (furnace and level II chimney inspection). We recommend the following vendors :
AAA American Air Duct (Denis)
Office: 609-703-7100; Cell: 973-359-5215
absolutecleanair@yahoo.com
Furnace Inspection - Princeton Air (Also has to be licensed in NJ and have Plainsboro Township checklist. Please check with Kim)
Phone: 609-454-6323  |  Fax: 609-799-7036  |  Email: info@princetonair.com

请问谁能提供一个公司的电话，需要做inspection,  并提供a valid service report for the Furnace.  多谢！ The Masters Plumbing,Heating & Air Conditioning 
David Nadrich 
732-277-9366
有執照的 （可填表申請 permit)， 服務也不錯.

油改气
Valley Oil Company
Heating oil supplier in Hopewell, New Jersey
Address: 54 Somerset St, Hopewell, NJ 08525
Phone: (609) 466-0015

Xfinity便宜一些.对网速要求高就选Verizon

    `},{id:27,title:"牙医/牙髓科医生",content:`

牙医
Andrew Chung,DMD·
Pediatric Dentistry 
Dr. Andy Chung, who has been in practice for 22 years, is passionate about preven- tive dentistry. The father of two is dual trained as a pediatric dentist and dental anesthesiologist. Dr.Chung offers cutting-edge treat- ments such as laser technol- ogy for cavity detection and
fillings, cosmetic services like 
863 State Road(Route 206) all-white bonded fillings and Princeton,NJ08540
orthodontics.   
609-924-0404    
ppdandychung@gmail.com
推荐一个儿科牙医给你。希望以后有朋友需要。今天儿子刚看过。跟他十几年了。非常好
---我们没有真正去看过，但是从我联系他们开始给我的感觉没有很好。电话永远没人接，邮件也没有人回复，你得留言然后他们才会给你回电话。也不会给quote，只是让你先过去。

Sabinsky Orthodontics
609-252-0233
908-369-8900

儿童和大人牙医
Eastern Dental of Lawrenceville
609 587 6300
还好！大人孩子都在这儿看牙，没有过不好体验。

我女儿对牙齿治疗极度恐惧 试过了两个成人医生都不行 被推荐了Montgomery pediatrics dentist 效果出奇的好 全程吸这笑气看着动画片就拔了牙 完全没有挣扎 Montgomery Pediatric Dentistry
211 Commons Way, Princeton, NJ 08540
(609) 297-1716 https://g.co/kgs/Xgjd8h

Joyce Guojun Ma, DDS PhD MAGD MICOI
Prime Dental Care
77 Tamarack Circle Montgomery NJ 08558
www.PrimeDentalSmiles.com
Phone: 609-688-8818

Precision Digital Dentistry
674 US HWY 202/206 Bridgewater NJ 08807
Building 4 Suite 7
www.PrecisionDigitalDentistry.com
大家注意，看牙千万不要到Precision Digital Dentistry这家，我拔了一颗牙已花了三千刀，还在发账单！

Princeton Dentistry 
Suite C-16, 601 Ewing St, Princeton, NJ 08540
Dr. Hanian醫術非常好
（我補牙、牙冠是不打麻醉的，所以一定要找技術超好的牙醫）
診所合作的orthodontist - Dr. Kim 也技術很好。
（他幫我做拔牙和植牙）
（他們不會中文，但目前英文溝通從沒遇過問題）

orthodontist 幫我拔牙的錢是另外算，我記得三四百的樣子。

Sun Rising Dental
61 Princeton HightstownRd#4bWestWindsor TownshipNJ08550
Makeanappointment·sunrisingdentalcom
(609)799-2580
Sun Rising Dental是孙医生开的说中文，不过我不确定收不收Medicaid和Medicare。可以打电话问问

牙医推荐Edison的黄若君  ，虽然有点远，但是诊所里的每一个人都很好 
+1732-819-0505

Precision Dental Group PC
491 Amwell Rd #204,
Hillsborough Township,NJ08844,United States
Closed· Opens 10am Mon
Dr.Chu會講Mandarin, Dr.Wong會講Cantonese.  這間牙醫診所容易約到理想的較近期的時間。
如果沒有牙科保險，這家診所提供了一個一年期的類似保險的優惠。


不知普林附近有没有好的牙医推荐一下？主要是年度清理，希望找个干净卫生，环境好些的
我也是就年检和洗牙，在Princeton Premier Dental，（Whole Foods 那个mall)
是个韩国牙医

kathy liu dentist
Liu Kathy DDS
Dentist in Plumsted Township, New Jersey
625 County Rd 539,Cream Ridge,NJ
https://wwwbusinessyab.com> liu_….
Liu Kathy DDS, 625 County Rd 539, Cream Ridge, NJ 08514, USA
 located in Ocean Countyof New Jersey state. 
https://wwwdentalcaregenie.com>….

请问普林附近有推荐 拔智齿的诊所吗， 谢谢！
@星辰 前两周去了Princeton Oral & Maxillofacial Surgery ，感觉还可以

请问有没有拔智齿的医生推荐，先谢了
整个过程体验很好，儿子恢复得很快
Prestige Oral Surgery
ADDRESS
3700 Route 27,Suite103 Princeton,NJ08540 Click for DirectionsO
Tel:732-297-7000|Fax:732-297-3638


Princeton Shopping Center 有个牙科诊所，Dental care Princeton，大家有去过吗，感觉怎么样
感觉还可以
他們的服務態度和環境很好，但技術不怎麼樣
Joyce Guojun Ma, DDS PhD MAGD MICOI

Prime Dental Care
77 Tamarack Circle Montgomery NJ 08558
www.PrimeDentalSmiles.com
Phone: 609-688-8818

Precision Digital Dentistry
674 US HWY 202/206 Bridgewater NJ 08807
Building 4 Suite 7
www.PrecisionDigitalDentistry.com
我孩子四颗智齿都在这里拔的，Dr.Ma


分享个拔牙的：Peaceful Dental Care，在300 Princeton Hightstown Road，前台不说中文，里面有个徐医生，说中文，收低保，也可收现金（要问一下）； 推荐只需要拔牙/深度清洁..基本的，其他给referral. 有用过的说问了一圈，现金价格估计是附近最便宜的了.  
拔牙的现金价格 当时附近都是500+…这里是100以内

Pestigeoralsurgery.com   
Healthy Smiles are Confident Smiles
LC QUALITY DENTAL
LI CHEN, DMD, PHD
North Brunswick | Princeton
North Brunswick:  732-398-8800
Princeton:  609-688-8899

有好的periodontist（牙周病医生）推荐吗？中国人外国人都可以，谢谢
陈医生很好
609-688-8899

看牙周病
Center for Contemporary Periodontics and Dental Implants
Dentist in Lawrence Township, New Jersey
34 Franklin Corner Rd，  Lawrenceville   hool    
Lawrenceville,NJ 08648  206     
295
(609) 883-6900

群主你好 我想增加一点牙医推荐和反馈：我推荐大家避雷Lawrence dental implant&periodontics的Dr John Lu，非常rude 说我的牙需要拔掉植牙并植骨。我就去找了Dr Stephen Hudis，他非常专业，他说完全没有问题，注意清洁可以继续用
两个医生的判断皆然不同 但是Dr Lu的bedside manner很差 让我很不舒服
我们跟Dr. John Lu 好几年时间，没觉得他有什么不好。可能个人体验不同。
我植牙的医生是John Lu, 已经十几年了，还不错，但是我看群里有人不推荐他，所以谨慎选择吧

请问有哪位邻居做过根管治疗（root canal），有好的orthodontics推荐？或者哪个医生做得不好需要避开的，谢谢！

我今年在孙医生处做的根管 挺不错的 

Endodontics/牙髓科医生
我用过Jean Kang Endodontics 很好 
THE OFFICE CENTER
666 PLAINSBORO RD.	J	
(609) 799-7427

Sun Rising Dental
61 Princeton Hightstown Road, 4B
West Windsor, NJ 08550
(609) 799-2580
sunrisingdental@gmail.com

Dr.Alexander Kim
Endodontics
(609)771-1200
2999 Princeton PikeSuite4 LawrencevilleNJ08648 United States

LC Quality Dental
Dentist·16 min Closed·Opens9AM Thu

我去年中才搬到普林斯頓來。今年一月一日（星期五）晚上開始牙痛，眼淚都出來了。接下來兩天是公眾假期和星期日，我在網上搜了牙醫的電話，一家一家地打去留言。星期一早上又繼續打，好多家都約多天以後。最後打了一個老牙醫的電話，接電話的先生說老牙醫兩年前過世了，他接手了這個診所。我說我的牙很痛，已經忍了兩天，要盡快看。他說他正在上班的路上，回到診所給我電話。很快他就再打來，叫我當天下午去。朱醫生很認真負責，他說他會因為掛心某些病人的情況，睡不着覺。即使他讓我轉诊別的醫生，他還會跟進，跟其他的醫生溝通。
PRECISION DENTAL GROUP
Dr. Edward Chu General Dentist
Education and Memberships:
B.A., New York University
D.D.S., NYU College of Dentistry
General Practice Residency,Jamaica Hospital Medical Center
Member of the Academy of General Dentistry
precisiondental-nj.com
Precision Dental Group
491 Amwell Rd#204
Hillsborough Township NJ08844

请问普林附近有可以自费的华人牙医推荐吗？ 谢谢！
@Haixia Li 我一家三口幫襯Hillsborough 的Dr.Edward Chu朱醫生。他的診所提供一個一年期的會員給沒有牙科保險的客戶。300美元一年，包兩次免費洗牙，免費照X-ray, 其他的收費照診所和保險公司的合同價收。@沈浅浅 以我一家三口多年在不同地方不同牙醫的經驗，我們是滿意的。從去年元旦我急症找到他開始，我們到現在都跟着他。他的態度也好，是個會講Mandarin的ABC，在新澤西出生長大。他過世的母親生前也是牙醫。他的太太是個專治牙周病的醫生，會講粵語，每個星期有一天在這個診所。

朱华医生很好：(908) 236-7800，比较远，在：
1390 US Highway 22
Lebanon NJ 08833
http://hunterdonfamilydental.com/

如果是一般牙医的话，非常推荐 West Windsor Dr. Shapiro. 但他不种牙
6092695200? David Shapiro 
我认为他的技术人品都好
抱歉听说 dr. Shapiro 退休了
Endodontist 牙髓科医生 Edison 有個 Andrew Chen 醫生, 説華語的，只是離你們可能比較遠。
Dr.Andrew Chen
Located in: Bridge Point
+1732-452-0788
Edison ⬆️Winston Chen Andrew Chen 陈医生，跟护士讲是很痛，她们会帮你安排的

    `},{id:28,title:"家庭医生和儿科家庭医生",content:`

医生/Doctors

陈玉碧诊所
电话
1(732) 822-9293
工作
(609) 750-1650
408 Plainsboro Road 9 
PlainsboroNJ08536美国

(732) 985-0666
+1 (609) 751-5886  666 Plainsboro RD  BLDG100, suite 1 H
孩子家庭医生
华语儿医推荐 Shiwei Tong MD
我朋友家娃去那里
我家两个孩子都找Dr. Tong看病体检，人很负责细心
可以先电话咨询下保险和看诊时间(他有另一个办公室在Brooklyn，所以只有固定几天在普林) 
电话 (609)275-6810
诊所地址 666 Plainsboro Rd # 1005, Plainsboro Township, NJ 08536 
@Hp 你好!我家孩子在Doctor Tong那里看。他很nice，对我来说，特别好的一点是比较好约
儿科医生
Shiwei Tong, MD (Pediatrician), 说中文 609-275-6810, Plainsboro, NJ.

@陈 我个人喜欢the Pediatric Group, 在Witherspoon Street. Practice不大，三个医生和一个NP。Staff非常友好。8-9am 期间你有任何问题都可以直接跟当值医生通话（不是服务生take message, 是医生直接接电话）。医生中我喜欢Dr. Tesoro and Dr. Zollner.

Nair Swapna或者
Maom Medical Associates
732 821 0873
732 452 9700
他们有Edison和Kendall Park两个点。前台服务一般，医生不错，好处是总是接受新病人

Dr Siegel Robles
609 303 4600
非常好的家庭医生，老太太，很有经验


Zhuping Chang,MD
内科
4.9     379 Google reviews      
Internist in Plainsboro, New Jersey
Address: 3 Market Street #422,Plainsboro Township NJ08536
zchangmd.com
Phone:(609)275-5000


请推荐家庭医生。谢谢
這是Dr.Patrick Wong的電話。
732-7956130
】 a family medicine specialist in Edison
University Hospital Robert Wood Johnson|RWlBarnabas
Accepting New Patients  (732) 475-0533  
Telehealth Available 
healthgrades.com

這是我的家庭醫生，在Edison，是個會講粵語的ABC。他在大機構RWJ工作。這是我和先生去看的醫生，我倆覺得不錯。我們覺得Edison不是太遠，看完醫生還可以去大華99和Hmart買菜，所以沒有在普林斯頓找醫生。女兒就在普大看校醫。

我們家孩子一直看的是Plainsboro的陳小梅醫生，十多年了，覺得她很仔細很親切 6097164800
想补充一下，如果是中青年，不太推荐plainsboro的陈晓梅，这里全部都是老人，每次约过来我就要等差不多30分钟以上。她本人也比较保守lay back 不太适合中青年群体。觉得感觉不是很好。然后。。他们有老年人优先的policy我约了8：45，结果两对四个老年人约都在我后面都进去了我等了半个小时。中青年人的时间貌似不是时间

我的家庭医生去年退休了，找了好久定了east Windsor 的 Irene kotok. 诊所本身一般， 医生的医术如何我其实也不确定，但她确实很caring. 这一点很突出。在我看来作为家庭医生这很重要

推荐Dr. Shao ZHENG, 666 Plainsboro Rd BLDG 100, Suite 1H, Plainsboro Township, NJ 08536 Tell: 609-751-5226. 郑医生在17 年前给我家孩子在她Edison的诊所看过病。
儿科推荐郑劭，讲中文的女医生，在爱迪生和普林开业二十多年经验很丰富了，口碑也非常好。但不确定是否看无保险的病人，可以打电话问下。Dr. Shao ZHENG, 666 Plainsboro Rd BLDG 100, Suite 1H, Plainsboro Township, NJ 08536 Tell: 609-751-5226. 
我用过shaozheng 还不错

Zhuping Chang,MD
Internist in Plainsboro, New Jersey Open
3 Market Street #422
Plainsboro Township,NJ 08536
PLAINSBORO
https;//www.zchangmd.com

问各位爸爸妈妈有哪位朋友知道新泽西周边可以给申请移民的人做体检的地方和机构？谢谢🙏
我去年在爱迪生做了移民体检 
医生以前是北京301医院的 收费不高 
张医生
Dr Hao Zhang
Immigration Health Exam
(732) 662-1100
2 Ethel Rd      9       
Edison NJ 08817 United States
我们之前在这做的 华人医生 人很不错 Edison 开车40来分钟
请问一下，考公民的时候可以家属陪同吗？
可以

 华人医生和诊所前台工作人员和护士都会讲英语。 Edison 附近的Oak Tree 街是全美最大的印度town，也应该有印度人医生诊所。不知道普村附近的美国人家庭医生收费情况，能否约到今天看病。
好像去附近或者Edison 的华人家庭医生那里是$70 左右看一次诊。找份中文报纸，多打电话去几家医生诊所，看今天能不能约上时间看。

    `},{id:29,title:"电器修理",content:`

修理/ Appliance Repair and Maintenance	

我们11月份刚用过这家修排风扇和冰箱，不便宜，服务还不错，如果需要换零件的话，可能要等，他们也会再来
Jersey Appliance Inc.:
Appliance repair service in Hightstown, New Jersey • Open Overview
139 Mercer St, Hightstown,
(609) 918-1830
https://jerseyappliance.net

请教大家，MacBook碎屏了，除了Quakerbridge Mall的苹果店，有没有又快又好的地方可以换屏呀？多谢🙏
CPR Cell Phone
Electronics repair shop in
1225 US-206,Princeton   ； Princeton North Shopping Center
(609)454-2024
CPR Cell Phone Repain
https://wwwcellphonerepaircom

Quakerbridge Mall 有几家，要砍价。最便宜的是290美元。

陈先生
修冰箱
phone
+1(732) 875-9383

David 应该修冰箱
6096359590

修冰箱
APL Appliance Repair
Phone:(848) 757-8626 www.aplrepairnj.com
APL Appliance Repair New Jersey
Call +1 (832) 920-3791

请教谁能推荐装抽油烟机的师傅吗
合师傅油烟机
phone
(347)276-6826
这个师傅连带卖樱花油烟机 价格很公道
是在曼哈顿法拉盛的。

有没有安装抽油烟机的师傅推荐
可以问问Kevin 6093062600 有空没，我家的就是他装的


我推荐一下Michael Fout，手机（732）934-0443，专门维修电器如冰箱、空调、灶台点火系统等，人很和蔼专业，我家找他修过冰箱内落水、灶台点不着火。

也可以试试Lowes。以前我家一个gas range外面师傅搞不了。Ｌｏｗs
Lowes师傅比较齐、可以搞
上门给我修冰箱内漏水和灶台点火线，他一共收240-260（忘记具体金额）。也不知是贵还是便宜了

补充一个修家电的：sears有全线家电修理技术人员。感觉比私人的靠谱些。检查费用啥不多。修理费会不会贵很多就不知道了 
https://www.searshomeservices.com/repair/refrigerator-repair-service

修割草机
Precision Mower Repair,LLC
small engine repairs of all makes and models
John Mastellone. owner/operator
609 213-3622
206 Princeton Hightstown Road
West Windsor, NJ 08550

请问有修发电机的师傅推荐吗？
我家上次Honda发电机坏了是拿去这家修的。打电话去问问，把你家发电机的品牌和故障情况告知他们，看他们是否修理，我不知道他家是否有上门服务。family run business,态度挺好的，价格也合理。 
LAKE
SMALL ENGINE REPAIR LLC281 A Cedar Grove Lane
Somerset, NJ 08873 Phone: 732-873-9047 fax:732-873-3395
www.lakesmallengine.com 

修理电脑，iPhone
PS Electronics
Apple Device Specialist 
10% Discount for Veterans and Students with valid ID
No Diagnostic Fees for most repairs
HESTRA Logic Board Repairs $ Track Pads $ Batteries Charge Ports Liquid Damage Apple MacBook Repair； Double Typing-Broken/Wom Kex-Whole Keyboard Replacement       
-Broken Screens-No Backlight/No Camera Flexgate Repairs; Data Recovery
1(888)820-3476  www.PSE-NJ.com  Help@pse-n

TECHNICIAN
Technician XInc.	TEONWX	
5.0 ★★★★★(22)
Computer consultant in Montgomery Township New Jersey·Closed
1378US-206,SkillmanNJ08558
(609)681-1120

ACE	Jack Murphy	6093922717 or cell: 609 658 5600	
修理Appliance refrigeration, sales, service installation
忘记价钱了好像不贵，几年前修过洗衣机衣服甩不干的问题，之后洗衣机都很好用。	

93 Route 31 North Pennington, NJ 08534
609 737 0999						

修车曾师傅	7323225582		
非常便宜	
曾师傅有自己的修车铺。他比dealership实在便宜太多了。

大家好！想找一个懂行修理落地大钟师傅，如有这方面的师傅麻烦推荐一下．谢谢
这个老太太，家传的，前年帮我修得很好
修钟老太
电话
(908) 421-3741

Trenton Farmer Market （其实在Lawrence Township)里有个钟表店。老板/师傅说广东话。

您身边的折扣电器专家，覆盖New York & New Jersey !
专卖LG三星电器，全部单品五折起，我们提供送货&安装&调试等一条龙服务。
有全新未开箱&开箱商品，开箱部分商品会有一些凹痕和划痕但不影响正常使用，件件都有质保~多买多优惠~
产品种类:冰箱、洗衣机、烘干机、炉头、炉台、烤箱、洗碗机、微波炉、电视机、抽油烟机等。
New York: 909-699-2899
153 19th street, Brooklyn, NY11232，周一至周六(9:30AM-6:30PM)
New Jersey:609-917-00192208 Hamilton Blvd, South Plainfield, NJ07080，周一至周六(9:30AM-6:30PM)
之前你推荐过一个卖洗碗机的地方，电话已经没人接听了，在South Plainfield，Appliance 4 Less。他们搬家了吗？他们老板说打这个电话6262620698。

以前换HVAC都是那个公司（Home Depot or PSE&G)去镇政府申请permit。他们会把镇政府的费用加在你的帐上，但不会另加人工费。
你好！ 若買了 PSE&G 的 Worry free program 給老舊的 HVAC， 是否換新的時，他們會馬上到底服務嗎？又可否挑品牌？ 自己要付安裝費、主機費嗎？
Worry free program 只包你现有HVAC的零件和保养人工。当你的HVAC已经老得无法修（或者无零件可卖），他们就推荐你买一个新的系统。你自己要付全部的钱。PSE&E会提供他们卖的HVAC资料和价钱。你也可以去Home Depot, Lowe’s, Princeton Air和其它地方比牌子，质量，和价钱。
Worry free program 只包你现有HVAC的零件和保养人工。当你的HVAC已经老得无法修（或者无零件可卖），他们就推荐你买一个新的系统。你自己要付全部的钱。PSE&E会提供他们卖的HVAC资料和价钱。你也可以去Home Depot, Lowe’s, Princeton Air和其它地方比牌子，质量，和价钱。
在其它地方买的系统也还是可以再买PSE&G 的Worry Free program. 在PSE&G买的系统，他们有时会让你分期付款。
无利息。HD有时也有这样的促销活动。
去年我的冷氣不夠冷。PSE&G來看了，說系統沒有漏洞，但是弗利昂很低。加上弗利昂。Worry Free就包他的人工費，我還要付弗利昂。
这样看下来PSEG。worry free 很好嘛！现在有执照的人工很贵。

福利昂花了多少 想横向比较下 
我们当时加人工好像四五百

    `},{id:30,title:"孩子小提琴吉他Flute二胡",content:`
如果学古典吉他，Westminster conservatory 有老师教。如果学Jazz style,  Mercer Mall 的 Music and Art 有老师教

古典吉他Alice Artzt
ALICE ARTZT classical guitarist
609      921-6629        GuITarTzT@aol.com

黑管老师
KennethEllison
kennethjellison@gmail.com

Tom Tallitsch
+1 (609) 635-1550
我儿子以前的黑管老师
可以Google到他的个人信息，很不错。黑管双簧管钢琴都可以教。

Flute老师
Westminister的Barbara Williams

David White the music director at Cranberry is an excellent sax teacher
Come to your house at Princeton

请问群里有乐理老师嘛？我家大女儿明年考学.需要系统的学习下乐理.有认识和熟悉的老师麻烦请大家推荐啊
Dr.季聪
WeChat lD:jicong_1028

乐理知识
phs对面的westmisnter conservatory就有music theory课，各种等级的

我家孩子跟着这个老师学过二胡 
魏建国
work
(732) 991-2135
home
(732) 249-6331

这是一个很好的大提琴老师，推荐
Palombit Kristin
+1 (609) 571-7404
monkcello@comcast.net 

Dr. D, 波兰人，家住Lawrenceville，我家老大跟他学琴1年多了，孩子喜欢。
Tomasz "Janina" Rzeczycki
Tel. 609 439 3866
Rzemasz802@gmail.com

韩国女老师Hyojin Lee 的简历这里可以看到。在线填写信息，和她联系
cellohyojinlee.com

新泽西有于荣海教大提琴，他也在乡音合唱团的管弦乐队里拉琴。不知道联系方式，需要你自己查

叫李吉辰，不然你查一下？对孩子非常有耐心、从小是中国音乐学院附小附中上来的，抖音，小红书他也直播，可以先看看
+1 (908) 420-2851我负责任滴说，相当好 我孩子拉大提琴，现在在Juilliard学琴，之前一直跟着李老师学，现在也会跟着李老师练琴，真是超级推荐

如果孩子学管弦乐器但水平没有高到参加比较高级的乐队，乡音的管弦乐队还是不错的选择。我他们每年至少举办一次音乐会。
我儿子吹小号，请学校乐队的老师教过。因为我们不是特别推孩子，不太清楚教的怎么样，只想维持他一直会吹就行。他是乡音乐队的第一任队员，参加过他们开始几年所有音乐会，接触过不少中外名曲。
但是这个乐队只在要演出之前才排练若干月，平时好象没有定期练习
我看他们网站上就是团长樊大平的电话； 樊大平 (908) 217-2480

小提琴老师Noah Baum
609-558-3262
Baum.noah@gmail.com
非常耐心的好老师

new school for mysic study, 是一間位於kingston的音樂學校。westminster conservatory 有教小提琴，看你需要suzuki Violin或是只要私課

请问有教唱歌的老师推荐吗？
Voiccessons
609-721-1249 Ildiko71@Ymail.com
Rozsildiko@gmail.com    Hopewell, NJ
这个唱歌老师是匈牙利国家歌剧院的女高音，住在Princeton YMCA 附近，水平非常高

School of Rock 
1761 Princeton Ave. Lawrence Township, NJ 08648. Directions · (609) 981-6095.

瑞百音乐学校
这里汇集了世界顶尖音乐名校（朱莉亚音乐学院、曼哈顿音乐学院、伯克利音乐学院）等的优秀教师及优秀学生（朱莉亚预科、曼哈顿预科的学生）。如果您的孩子想在钢琴、小提琴、唱歌、乐理、作曲等方面的学习不走弯路，得到专业正规的系统训练，那么来这里，一定是您不错的选择！
瑞百音乐学校老师介绍：https://rbmmusic.com/faculty/
瑞百音乐学校学生演奏视频：https://rbmmusic.com/media/

Yuki Music Studio音乐剧课
不够专业，老师不太会和学生互动。不推荐。也提醒小心提前交钱，试课以后试的课不仅要交钱，提前交的钱差点都要失去

专业的小提琴老师有推荐的么？
我家老大之前找过这个老师教的很好很认真负责在普林斯顿
姓金   微信：ivyj00

小提琴/中提琴老师: 杨依诺Jing Yang（百度和Wikipedia都可查到介绍）
WeChat: jean_viola
Studio Vio 地址: Hoover Ave, 08540
Phone: 609-780-1887
年龄: 4 years old - no limit 
课费: 120$/1hr, 180$/1.5hr
类型: 一对一，考学比赛，初学热爱
曾担任德国法兰克福广播交响乐团副首席，演出遍及50几个国家，教学20年，很多学生考入全球顶级音乐学院，严谨负责随和
前期的基本功真的教的很清楚，从手指头、手臂到下巴到肩膀每一个细节都一一去讲解。孩子出奇的喜欢。喜欢小提琴，更喜欢老师。
我儿子10岁跟着杨老师上了几次小提琴课，我儿子特别喜欢去上杨老师的课。杨老师非常非常的专业，认真备课，也很懂小孩的心理。就上了几次课感觉我儿子的音准，音调明显进步很多，还改掉了几个长期积累成的坏习惯。
杨老师是一位非常有爱心、专业，充满耐心的老师。她丰富专业的教学方式和水平引导孩子不走弯路，专业正确的方法教授课程，孩子容易领会。


Flute Piano and Guitar Lessons Experienced Instructor M.A.All levels/ages Bi-annual recitals Princeton area studio
609-936-9811
www.princetonmusic.com;Online or in-person

    `},{id:31,title:"会计",content:`

会计师

请问－下有没有推荐在大普林地区的会计师。照章办事，比较严格符合州的规矩。不是顾客想什么，会计就想办法听从的那种。老美会计师也可以。非常感谢！ 
joy turchetta-They can email me at mjclim@gmail.com.   
陶乐
info@taocpas.com
价格虽然不低，但是服务很好

P&KCPAS LLC
Consultant in Parsippany-Troy Hills New Jersey
Located in: Plaza 322
Address:322US-46Parsippany-TroyHillsNJ07054
Hours: Open now·Add full hours
Phone:(973)882-8810

Judy Wu
泛宇公司
微信号：judywu178

有个华人会计师叫Amy的，自己开业，还不错，amywangcpanj@gmail.com 你可以发个邮件问问

美国林会计师 Joseph Lin, CPA
昵称：Joseph Lin, CPA
微信号：lilu-16888
(732) 762-0288
这个会计我用了快四年了，人做事非常的认真，而且很热心


请问大家有没有比较靠谱的帮助公司注册，报税的会计师推荐？
我們用何德發會計師事務所三十年了，非常可靠。
James Ho
1(732) 424-0044
1(732) 424-1976
jameshocpa@aol.com
288 Route 22 West       22      
Greenbrook NJ 08852
+1(732)424-1976 phone
+17324240044x2 mobile
+1(732) 910-3789 work
+1(732) 424-0044
carol.ho@hogioia.com work
Ihecnanvaheecom
當然啊，三十年前幫我註冊的公司，近十五，二十年他的女兒成為會計師，加上女婿；一直用他們幫我處理稅務
非常可靠。他去世了，但是女儿女婿还在做

    `},{id:32,title:"孩子综合夏令营精华",content:`


我家孩子很喜欢这个夏令营，他说午饭也很新鲜
Camp Mason 
campmason.org
这是我家孩子去过的夏令营，还不错。推荐给大家。
综合的

The Bridge Academy
1958-B Lawrenceville Road
Lawrenceville 609.844.0770 www.banj.org
Age: 7 — 14 years old

Camp Cherry Valley
5 Country Club Drive Skillman
877.671.2267
www.kecamps.com/camps/cherry-valley
Age: 4 – 10

Childtime，  Flemington 和Hillsborough
www.childtime.com/your-local-school/flemington-nj-1512/
Age: 6 weeks to 10 years

Clown Academy
Princeton Academy of the Sacred Heart
101 Drake’s Corner Road
609.924.8143
www.princetonacademy.org
Age: 9 — 16 years old

The Dance Connection
Nursery Dance, Broadway, Ballet, Jazz, Tap, Hip Hop
1 Jill Court Building 16 Suite 12 & 14 H Hillsborough
908.874.8800
www.danceconnectionnj.com
Age: 3 years and older

Eagle’s Landing Day Camp
74 Davidson Mill Road
North Brunswick  732.821.9155
www.EaglesLandingDayCamp.com
Age: 3 and up

ESF Summer Camps
Route 206 Lawrenceville 609.896.0606
www.esfcamps.com/
Age: 4 — 15 years old

Farrington’s Music； Piano, Guitar
1325 Route 206
Skillman, New Jersey 08558
609.924.8282
www.farringtonsmusic.com
Age: 6 years older

French American School of Princeton
The French American School of Princeton is an independent, coeducational day school offering a bilingual education to children in Preschool (3 years old) through Grade 8.
75 Mapleton Road Princeton 609.430.3001

The Harmony School at Foxmoor
Robbinsville 609.443.7575 www.harmonyschools.com
Age: 3 — 9 years old

Highland Studios Summer Art Workshops for Kids & Teens
Hopewell, 609.466.347
Age: 9 — 16 years old

Hopewell Valley Children’s Theatre
Pennington 609.649.3042 www.hvct.org

The Hun School of Princeton
609.921.7600 x2265
www.hunschool.org
Age: Grades 6 – 12

JCC Abrams Day Camp and Teen Travel Camp
148 Cedarville Road East Windsor 609.606.7070
www.jccabramscamps.org
Age: 3 years old — 10th grade

Kids Klub Camp
Princeton Alliance Church
Scudders Mill Road
Plainsboro 609.799.9000
www.princetonalliance.or
Age: K — 8th grade

Kids’MusicRound
Pennington, New Jersey 08534
609.333.0100
www.kidsmusicround.co
Age: Infant — 7 years old

LakeView Day Camp
505 Riva Avenue
East Brunswick, New Jersey 08816
732.821.8933
www.lakeviewdaycamp.com
Age: 3 — 14 years old

The Lawrenceville School
609.896.0400
www.lawrenceville.org
Age: Grades 9th – postgraduate

Lawrenceville Summer Scholars
The Lawrenceville 609.512.2720
summerscholars.lawrenceville.org

Learnroll Immerse
Experiential Learning and Tutoring using immersive 3D & Virtual Reality
1000 Herrontown Road 2nd Floor 609.921.0800 www.learnrollimmerse.com
Age: 13 and up

The Little Gym of West Windsor.jpeg
609.799.7776 www.thelittlegym.com Age: 3 — 10 years old

Magic Arts Camp
Glass Art; Cooking; Drama; Ceramics; Photography; Clowning; Crafts
7 Vandeventer Avenue
215.932.8452
Age: Ages 5 and up

McCarter Theatre First Stage Summer Program
609.258.8289
www.mccarter.org
Age: 1st — 12th grade

Mercer County Community College
1200 Old Trenton Road
West Windsor, New Jersey 08550
609.570.3311
www.mccc.edu/campcollege

Montessori Corner at Princeton Meadows
Plainsboro 877.959.4185
www.montessoricorner.com
Age: 1-1/2 to 6 years

Music Mountain Theatre
1483 Route 179
Lambertville, New Jersey 08530
609.397.3337
www.musicmountaintheatre.org

Nassau Nursery
2 1/2 year olds through junior kindergarten；summer camps.
33 Mercer Street 609.924.0566 www.nassaunursery.org
Age: 2.5 – 4

Oak Crest Day Camp
92 Cortelyous Lane
Somerset, New Jersey 08873
732.297.2000
www.OakCrestDayCamp.com
Age: 3 years old and up

The Pennington School
609.737.1838
www.pennington.org
Age: Grades 6 – 12

Plainsboro Township Summer Recreation and Sport Camps
609.799.0909 x331,332
Age: 4 — 7 years old

Princeton Day School
609.924.6700
www.pds.org
Age:3 years old — 12th grade

Princeton Friends School
Princeton Friends School (pre-school to 8th grade)  hands-on, child-centered education 609.683.1194
www.princetonfriendsschool.org

Princeton Junior School
age 2 through Grade 5 creates globally-minded, empowered and joyful learners
609.924.8126
www.princetonjuniorschool.org
Age: 2 years to Grade 5

Princeton Montessori School
609.924.4594
www.PrincetonMontessori.org
Age: Infant — 8th grade

Rambling Pines Day Camp
609.466.1212
www.RamblingPines.com
Age: 3 years old — 10th grade.

scienceSeeds
29 Emmons Drive
Suite G10
Princeton, New Jersey 08542
609.759.1626
www.scienceSeeds.co
Age: Ages 5-16

Stuart Country Day School
609.921.2330
www.stuartschool.org
Age: 4 years old — 12th grade.

Summer Institute for the Gifted
Princeton University
866.303.4744
www.giftedstudy.com
Age: 7th — 11th grade

Terhune Orchards
Terhune Orchards has a barnyard of animals, fruit picking, wagon and pony rides.
609.924.2310
www.terhuneorchards.com

Waldorf Summer Camp
609.466.1970
www.princetonwaldorf.org
Age: 4.5 — 12 years old.

Watershed Nature Cam
31 Titus Mill Road
Pennington, New Jersey 08534
609.737.7592
www.thewatershed.org/education/summer-camp
Age: 3 – 16

Westminster Conservatory of Music
Summer Music Camp
609.921.7104
www.rider.edu
Age: 4 years old — 12th grade.

西温莎新加坡数学中心S.A.M Singapore Math of West Windsor，世界最大新加坡数学培训机构，提供面向4-14岁学生的新加坡数学和英语阅读写作课，注重概念理解和思维能力培养。网站：https://seriouslyaddictivemaths.com.sg/newjersey/
2024年新温莎新加坡数学中心3大暑期夏令营
STEAM, Lego and Mandarin camp offered by S.A.M. Singapore Math of West Windsor. 1st-6th grade. Small class size taught by professional teachers. https://shorturl.at/aotwA

    `},{id:33,title:"网球",content:`

网球夏令营

TimeAfterSchoolTimeAfterSchool TAS 2019-06-05 09:50
1. Princeton Tennis Academy
PrincetonTennis Academy的网球夏令营为孩子们提供学习和提高网球的兴乐趣。教练Jose Rodriguez是执教多年的职业网球教练; 获得USTA，PTR，USPTA国家认证; 他根据孩子们的水平和特点，提供高水平培训，深受家长孩子们喜爱。在这个暑期训练营，学生们可以学习网球这项终身运动的基本技能，提高耐力，注意力和比赛经验，并且真正爱上网球。
时间: 6/24-9/4全天或半天，至少一周。
地点： 900 Scudders Mill Rd, Plainsboro Township, NJ 08536
也接受预订私教课程或小组课程 
详情请看：
https://www.timeafterschool.com/index.php/Summercamp/programDetail/camp_id/322.html

2. Firefly Tennis
Firefly Tennis 丰富有趣的游戏，最大限度地提高学生对网球的兴趣和参与度。 欢迎所有技能水平的学生参加。提供所有设备，包括网球拍。
夏令营时间: 6/17-8/30全天或半天，至少一周。 
地点： 1200 Stuart Rd,Princeton, NJ 08540
详情请看：
https://www.timeafterschool.com/index.php/Summercamp/programDetail/camp_id/124.html

3. Advantage Tennis Club
Advantage TennisClub是West Windsor网球训练俱乐部。为从初学者到竞技网球的各个级别提供高质量的培训。我们的国际ATP排名教练团队通过了USTA/ PTA认证。我们提供以下团体和私人课程：
10 & under levels， Junior Development
Up & Comers，High Performance，High School Training
夏令营课程旨在让孩子们在有趣的活动中提高他们的网球技能
网球夏令营提供全天和半天选项。
夏令营时间: 7/1-8/30全天或半天，至少一周
年龄5-18岁
选择任意周的组合以获得折扣
详情请看：
https://www.timeafterschool.com/index.php/Summercamp/programDetail/camp_id/324.html

    `},{id:34,title:"地板/地下室整修",content:`

地下室你可以联系顿普 (609) 240-9088 3年前他帮我做过 做得还不错

地下室 (609) 203-0033

Basement everything
Serving NJ, PA, and NYC, Jersey City, Edison, Freehold
OPEN
1-732-697-0557

Ryan Basement
phone
+1(215) 801-5470

郑海雪-换地板
微信号：wxid_exps314z628v12

bill电话7323221378handyman
装修地板

推荐打磨地板的人Dr. Dustless, https://www.doctordustless.com 磨出来的灰尘几乎全部用管道排到室外，做完味道也不是非常厉害

我们用过carpet centers of nj 还不错  
732-254-2060
917-923-7827
Carpet centers of New Jersey是一家中国人，他们只换地毯不清洗

安装木地板和地毯服务
Ceci的微信：XL9083271333

Handyman Daniel 给我们铺了地板，还有和地板配色的柜子定做，因为一段墙突出来很怪。慢点，但细致，价格很合理。还顺便给我们换了Sump Pump。是我问到的四家做sump pump里最低的。(609) 255-3028
上个月给我们重新装修地下室，装修地下室的厕所 ，挪了一面墙，新建两面墙，淋浴换浴盆。很赞👍🏻     
给我换了新科技的Sump Pump，不是传统的电的或者电池的pump（因为功率太小，新泽西很多flash flood，普通电池带动的泵不够，所以我们上次地下室才淹了）。新泵特别好，超赞👍🏻！        

William，手机是609-933-4014
我家地下室去年flooded，帮我紧急排水，加之后除霉消毒。人挺实在的，做事也蛮好的。

地下室内修 排水
Bob 7326970557                  

求问 我们要装修地下室 请的华人装修师傅需要屋主自己申请permit 我们申请了之后 有些项目被拒绝了 不知道有没有收费帮屋主申请permit的人或者公司
Bai Kevin 6093062600 你打电话问问，留voicemail把详情说要10:43

请问大家有做basement 结构的公司吗？我家地下室的结构柱子要换
Paul Pennachi是做泥土工程，质量价格都很好，(609) 203-0033

BASEMENT                WATERPROOFING   
Call:732-721-4900       
SOLUTIONS       718-761-3698    
The Only Basement Waterproofing Company with OVER 60 YEARS of experience
Cracksand
Leaks and       Foundation      Mold and        
Flooding        Repair  Mildew  
BASEMENT WATERPROOFING
Barbara Skurzynski Cell: 908-692-6045
www.njdrybasement.com
地下室淹水弄干净
Fire-water-mold clean up
Servpro
732-431-4440

请问群友们有好的irrigation contractor 推荐吗？
Hidden springs(irrigation)
(609) 585-7080

我联系了Fyr-fyer （609 896-0600） 他们可以提供Fire Sprinkler System 检测和服务。

大家好，你们都是用哪家做Sprinkler inspection ? 价格如何？有推荐的吗？
1 732 521-1666
Chad
同时维修换抗冷剂，税下来约320

ASEMENT    Ready to improve your home?    
WATERPROOFING    Call:732-721-4900    
SOLUTIONS    718-761-3698    
The Only Basement Waterproofing Company with OVER 60 YEARS of experience
Cracksand
Leaks and    Foundation    Mold and    
Flooding    Repair    Mildew    
BASEMENT WATERPROOFING
Barbara Skurzynski Cell: 908-692-6045
www.njdrybasement.com

(800) 865-8787
RYTECH
claims@rytechinc.com
SERVICES    lICRC Certified    
Water Damage Restoration    lICRC #244434    
Mold Remediation    Water Damage Restoration    
Structural Drying    Applied Structural Drying    
Water Extraction    Mold Remediation    
Dehumidification    OSHA    
Indoor Environmental Control    Lead    
Odor Removal    Subrogation 1    
Sewage Clean-up
It's Not Dry..Until it's RYTECH DRY!

Water Damage Restoration
RYTECH    Residential/Commercial    Mold Remediation    
WATER DAMAGE AND MOLD SPECIALISTS    lICRC Certified    
24 Hour Emergency Service
(609) 924-9565
DANIEL JANICKVice President Rytech of Central New Jersey Cell:609-917-0830
djanick@rytechinc.com claims@rytechinc.com
www.rytechinc.com/central-new-jersey

    `},{id:35,title:" 妇科大夫",content:`


xu bojun 不过有点远 在edison 那边
妇科大夫会讲中文
xu bojun
(732) 906-8689
2023年12月退休

albert chan 也不错 也比较远的
albert chan ob
(908) 754-9600


OB/GYN https://www.princetonobgyn.com

Dr  Nicole Davis
751 Route 206, Hillsborough
一般，没太感觉

Lei Zhu, PA-C
Physician Assistant (PA)
Obstetrics and Gynecology
No patient ratings. Why not?
Sees patients age 18 and up
Ms. Zhu is a Penn Medicine provider. In New Jersey, providers are affiliated with Penn Medicine through Clinical Health Care Associates of New Jersey or Princeton Healthcare Affiliated Physicians, PC.
Call 609-853-6555

Dr Gloria Bachmann
732 235 6600
RWJ 医院很好的大夫，可惜离开了，但是 感觉那里的大夫都不错
(609) 631-6899
RWJ Center for Women’s Health
1A quakerbridge plaza
Ob Gyn doctor  Dalal Kunali 
女大夫，挺细心的

    `},{id:36,title:"肠胃病专科医生",content:`

胃病
各位邻居，请问有靠谱的胃科医生推荐吗？
我最近看Aloysius Rho，很喜欢@Sherry Li 
耐心且逻辑清晰，我看了三个医生以后就一直跟他看了 

Bingru Xie, MD
胃肠专科医师
211 Bridge St building d, Metuchen, NJ 08840
njdda.com
(732) 662-5115

请问大家有做胃肠镜的地方推荐吗？谢谢

肠镜大夫
Eric H Shen, MD, 在他那里做过肠镱，感觉不错的
他是不會說中文的上海人 腸鏡專家
https://www.princetonhcs.org/care-services/princeton-medicine/specialists/eric-h-shen-md?gclid=CjwKCAjwrNmWBhA4EiwAHbjEQPbnfWYmkkrSMfmeJBmg95xZX67E-fBCa4lugjo70hOMh3x15uEtNxoCnVUQAvD_BwE
CONTACT
Phone: (609) 853-6390
Fax: (609) 853-6386
Center for Digestive Health
5 Plainsboro Road, MAP, Suite 450, Plainsboro, NJ, 08536

求助:侄子在宾州大学读博，最近二十天肠胃功能失调，吃不下东西，身体日渐虚弱，已经瘦了6斤，预约肠胃检查已经安排到半年以后，急需尽早做肠胃检查，请群友们推荐可以立即肠镜检查的诊所或医生，万分感谢！

试试这个医生，一般1-2周就可以约上 https://njdda.com/en/home/

纽约的法拉盛的医生可以马上做 我当时自费的400 第二天就做了

请教医生
荆彤肠胃中心-Jing
Gastroenterology&Hepatology
纽约皇后区的胃肠专科医师 
法拉盛 FLUSHING
136-68 Roosevelt Ave 3rd floor  DO      OWN     
QueensNY11354   FL      HING    
服务区域:纽约

    `},{id:37,title:"修车库门",content:`
    群信息: 修车库门 *************** 
请问大家有修车库门的师傅推荐吗?springs 坏了可能需要换。感谢 找Yuvi换过spings、pulleys，现在用了一年多，质量没问题 Garage & Locksmith Security For Sure
+1(215) 805-9209
Yuvi， Yardley PA
All Day Gerage (车 库门) +1(609) 891-3592
用了这个，隔壁日本老爷爷用的，换了motor一共600多，最开始那个Princeton garage door那家 张嘴要九百多，够黑的
我们用了all day garage doors这家，还行，不那么贵
今天不小心把车库给撞了下，用了一家公司。公司要的比较贵，但来的technician还不错 ，他说自己也做，价格会优惠不少:tom garage door 908-251-8750
另个小贴士:如果修garage door，除非紧急，不要用emergency hour修，会贵很多 修理车库门
6095850074, Miller garage doors llc, 是个local 公司，服务很好
换了一套新的garage door opener, 用了home depot的安装service, 记得160?

 908 526 5535 B&B
修车库门
JAMMER DOORS
Mercer County NJshowroom
AA ajammerdoors.com
609-883-0900 给我家换过motor，给邻居家修过门，价格公道 这家修车库门用过，挺不错
Schwartz Overhead LLC (609) 735-6414
修车库门
Sears Garage Door Installation and Repair (609) 240-8771
修车库门
(856) 420-3220
Address
2016-2024 Woodlynne Ave, Wo

    `},{id:38,title:"水管工",content:`
 
水管工/Plumbing
推荐一个水管工/-Alan 732-298-0518；732-288-3793
他是过去AJ Perry的Danny Lango的儿子，Alan和他爸爸开了一个公司叫Just Drains。地下室水管堵了，老问题，先帮我们通好，然后给我们三个方案。我们最后选择换管道，过去Redding过来也这么说，但是Alan报价6,000美元，比AJ Perry和我们询价的Redding’s Plumbing 便宜。老Danny和几个年轻小伙子(其中一个手艺和态度都很好的叫Nicholas)一起做，很勤奋，有电话和text message很快就回。工程质量和服务态度超赞👍
 
 Handyman Daniel 帮我们更换了drainage pipes,过去的管子生锈了，可以看到管子有轻微漏水，另外管子生锈造成下水道老是堵，换成PVC的管子，现在完全没有厕所和厨房排水的问题。我们先问了一个Plumbing公司报价一万，后来找了上面Alan 的公司Just Drains，他们报了六千刀，Daniel的报价才两千多，价格方面很实惠，态度还可以，本来说是两天做完，其实一天就做完了。很满意！(609) 255-3028 Daniel text/留言

推荐一个Plumber，今天刚用，LenthePlumber, 来的速度很快，打电话到来我家半小时，价格很合理
CALL(862) 701-1245
我今天是小问题 水循环系统漏水…上门小哥就收了49的上门费（我另给他小费20）
没有额外收其他费用
另外 这家公司 把来的Plumber的照片跟 网上track他抵达时间 都发到我手机上 感觉很靠谱

Tamasi Plumbing
609-799-1494

地下室的水管有点儿漏水。求推荐水管工人
上次我找Harris plumbing 解决下水道堵的问题，觉得他们服务还不错 8332364066
谢谢找Roto-Rooter, 4个小时的活儿要了2千6

阿才和他的徒弟Tony  (732) 672-1199
装厨房/卫生间水池的水管，墙砖修补抹腻子，按窗帘，简单的电工活都可以。有时候回复快有时候回复比较慢。干活的质量总的来说还满意，价格也过得去。


ALL CLEAB	Michael and Anthony Settecase	
p:732-554-7357
e:cleardrains83@gmail.com

Dominique
Clear Flow Septic, Sewer & Drain 
(862)777-2421

请问大家我要换厨房的水龙头，请问有推荐的plumber吗？谢谢
我上次用的Len The Plumber, LLC
(848) 455-4486

今天才做plumbing ，通下水管道。第一个来看估价$395 with half year warranty ，没让他做. 第二个，$73 with one year warranty，动作快，质量高，价格好。特别推荐
A technician from Harris Plumbing...AA
Plumber Matt is a highly skilled drain specialist with over7 years of experience Matt has a big family
and loves to play hockey and attend car shows!
You may contact the office at(800) 704-8866 if you have anyquestions.
Matt (plumber)
(609) 558-5847

Michael “mike"Emerson
Handyman
+1 (386) 868-7002
This handyman very nice, you may use for almost anything. 

Jianqiu Lin
Plumber林剑秋
(609) 721-1886
 
Grade A Plumbing​gradeaplumbinginc.com
(833) 447-2332
不错
 
Bob Fredrick Plumbing
(609) 731-8982
 
Robert 7322364538
 
朋友推荐过：handyman 魏杰 (917) 963-6484，他也修水管
 
普林斯顿的 NC Jefferson Plumbing 做新工程很可靠。
 
有一个Valley Plumbing co. . 3 年前用过修理及replacement 小工不错。609-636-3730
 

Mike (732)4251993
我找了两家老美的公司报价，好几千还心虚不一定能修好，Mike ,就charge 几百 能修好
就是我家二楼浴室管子漏水了，一楼的房顶被水淹成这个样子
他在二楼浴室隔壁墙上开了小口，把管子断的地方修好了

Kevin
609 306 5942
 
J Johnson
908 874 6619
 
水电师傅电话是718-908-2188
 
李师傅
267 939 8526
推荐李师傅，价公道，服务态度好。我们的朋友在我们的推荐后也找他干过plumbing的活，为前一个师傅擦屁股的

 
Nick @ (973) 727-2105 was a very pleasant, knowledgable, courteous and prompt experience!  

AJ Perry 若干年前用过，还不错  价格也是$99
找AJ perry， 厨房下水道堵塞收费$99。
A J Perri电话：732-372-0788
PerriDanny Lango 732 439 7839
 寻找Plumbing或HVAC公司, 不能用AJ Perri， 善长将小问题当成大工程给你报价
AJ Perri通下水道好像只是第一次用给便宜，以前都是99，但是第二次以后就是280起了，我第二次换了老公名字电话啥的都不行，一个地址只给便宜一次推荐一个plumbing公司，叫AJ Perri- Tinton fall, 电话(800)287-2164。$130通下水道，很及时，打了电话2-3小时就到了，24小时7days available。反面对比Harris plumbing, heating and electrical, 周五打了电话，只能约周一，周一又推到周二，一直没人联系，后来好不容易有technician联系，要价$350， flat rate～～
今天用了，不错。我自己陆陆续续折腾了几个月的Kitchen水流不通畅(不是完全堵塞)的问题，解决了。跟OP说的一样，$130, 打电话之后2小时到了。干活的peter很knowledgable, 跟我讲了很多plumbing的知识，还给我解释为什么我自己用工具捅过但没捅捅通的原因。还有管道可能有哪些潜在问题，告诉我后面自己要注意什么，减少pipe后面继续出现堵塞的可能。也没有跟我hard sell任何额外的服务。很赞

这次在试Harris Pluming, $73
Harris Pluming Heating Air and Propane callharrisnow.com 8564858353 Very reasonable
bathroom sink drainage problem， cost is very reasonable $73/drain.strongly recommend
Good ALL CLEAR DRAIN CLEANING
24 HOUR EMERGENCY SERVICE

ALL CLEAB Michael and Anthony Settecase
DRAIN CLEANING
p:J32-554-7357
e:cleardrains83@gmail.com
 
Jersey
The Homeowners
Master Plumbor Rex Kinney JERSEYPLUMBING.COM
NJ Master Plumbers Lic.#7359908·2817101 JERSEYPLUMBING@GMAIL.COM
 
Plumber 水管
徐师傅 7327627922
@徐师傅收费良心价，就是脾气大了点
@我们家厨房下水道不通，徐师傅过来弄了一个半小时，通了下水道，收费260.
 
Plumber (732) 2364538Robert
 
ABAT construction , tel: 732 8217794 or 732 494 2121
 
HandymanNelason
609-495-4636
 
plumbingAZ plumbing don
609-577-5697
 
M J Grove Inc, Phone: (609) 448-6083
 
Kitchen contractor
(646) 498-1160. 邢师傅。
 
张克洋，215-858-1006， 东北人，人不错，handyman。
@ 修了水管焊接处漏水，收费200
Harry Handyman
8482486618
 
Bob Fredrick Plumbing
609 731 898ce2
 
朋友推荐过：handyman 魏杰 (917) 963-6484，他也修水管
 
N. C. Jefferson
609 924 3624
(plumbing, heating, air con)
 
你可以找这家问问，我刚让他家做了drainage。价格不错+1 (609) 743-4563

我来给大家汇报一下，今天麻烦群里的@J考拉 师傅来我家装了净水器。考拉师傅活做得又好又仔细，非常设身处地为客户着想，真是心灵手巧！原来人家国内物理专业，在美国拿的计算机科学的研究生，有空时做做handyman 只是副业，水平确实高，实在高
考拉师傅不错 帮我装净水器也特别

    `},{id:39,title:"杀虫害",content:`

杀虫害/pest control
我家用的是Green Pest Control，电话：(484) 925-1747.

家里进老鼠了。pest control大家有推荐吗？
+1 (866) 995-3120

+1 (855) 284-3733
杀虫防鼠的公司Aptive
我家前几年换的这个公司比较好
@金鑫 这家比从前的公司要便宜一点点，而且服务人员每次做完工作，都会发照片给我手机。
好的！谢谢！今天去问了pest control。除一次老鼠要1000。真心黑

最近家周围很多黑色长条毛毛虫，在树上也有一个一个的白色网状的东西，我爸弄下来一看全是那种毛毛虫，，大家有看到吗？不知道怎么处理，往年没有

我以前有annual contact with TruGreen for  tree and shrub maintenance.  有这种网状虫巢的时候，他们会来打药。把那巢捅个洞，用药水喷进去，喷透。要在巢破掉、毛毛虫爬出来之前处理。不然草地上都是。 去Home depot 买药买喷雾桶，自己应该也能做。 

关于pest control company, 给大家一个反馈，western pet service谨慎使用，用下来感觉是个骗子公司，电话里说好一年的合同，五个月只来了一次initial visit, 20分钟喷药放老鼠夹子，信用卡上charge了近300， 然后就消失了，从来就不安排seasonal service, 这个公司email 联系不到人，要合同条款和payment schedule 从来就不提供，service person 和office互相推诿，骗子公司的成分多，只在乎信用卡号     
Pest Control    Western Pest Control    https://www.westernpest.com/    Frank   (844) 213-6132          

Pests Control Chris And
nick Owner
Onthespotpestcontrol.com
mobile
1(908) 350-8215

908-361-6657
VIKING
Pest Control

我家用的Aptive，服务还行，我比较喜欢他们可以给前后院的树喷杀虫剂，不是所有除虫公司都有这个证。价格也算便宜.

Greenix 不推荐，收了钱后就态度不好了，每次来人说法也不一样，很敷衍。

亲戚家有个黄蜂窝，邻居说要找pest Control Company,请问大家有推荐的吗？
(732) 985-5495


推荐Pest Control  On the spot pest control LLC    www.OnTheSpotControl.com                9083508215                              

Pest Control    Orkin   Www.orkin.com   Edward  Mauceri 8004450745              

MOSQUITO SQUAD
有人做过mosquito/ticks treatment吗? 要不要一起团一个?我问了大约不太到800一个season， 8次。人多有group discount 

Family Pest Control Gary
(732) 985-5495

cooper pest control 在Lawrence
1 (609) 799-1300

GARVEY
609.448.0900
Tom Garvey      Rich Garvey     Matt Garvey     
609.658.0634    267.980.8629    609.658.1222

    `},{id:40,title:"保养树和砍树",content:`

保养树和砍树/tree service
请问有没有推荐可以给植物看病的人？家里的柏树叶子黄了，想找人看看树还有没有的救。谢谢🙏
Master Gardeners
AskTheMGs@mercercounty.org
还有Save A Tree

AG Tree Service
(609)917-4022.wwwtreeserviceag.com. Tree Cutting Service·Agricultural Service
@我们昨天约AG tree来看了。一棵树报价950+200清理铺好草坪，我们就砍这一棵，树已经差不多死了，他还答应顺手把后院另一个很小的已经死的小树苗remove掉，不另外收钱。最后讲价到$1100包括所有。他解释说虽然我的树不壮，但因为在靠里面，重的设备车开不进来，得靠人工拉，所以比较贵一些。约了这周六就来砍。
@我们家找了AG，Quirino，报价都一样，2500（不包括磨平根），（砍成烧火的木材要加600）。但是AG说我们家砍下一棵树，可以便宜15%。

因为这颗大树，我们找了4-5家来estimate, 最贵的要将近$6000，便宜的要价$3000，这家公司要价$1700 

我用了群友推荐的这家。我问了三家，他家最便宜，有license 有保险。昨天来砍的
我去年用过Fair landscaping +1 (609) 213-4096

这家砍树公司推荐给邻居们，四个工人工作了将近两天的时间，帮我们砍了三棵参天大树，其中有颗树又高又壮。一共才收费$3000。砍完后还帮着清理干净，又帮我们把一棵树锯成了小段，冬天可以烧壁炉
TREE AND STUMP REMOVAL

最近砍掉十几棵dead Ash Trees. 这家公司很好，又快，又干净，价格也好
·TREE REMOVAL·TREE PRUNING TREE TRIMMING  
TREE SERVICE·LOT CLEARING·STUMP GRINDING
609-213-4096
fairtreesservices@gmail.com
同推荐这一家，之前我也砍了五六棵树。准时专业清理也很干净

有修剪树的公司可以推荐的吗？先谢了。Mike 908-492-7722

(201) 598-9553 alberto。给我们后院砍了十几颗大树，其中一颗diameter有40”。grind stump。没出什么问题。提前问township要permit

Tree Justin
(609) 731-9882

@Tricia 老墨6093563998，用过。三棵树1090，供参考

我家刚砍了一颗大树，头一次砍树，分享一下这几天学到的-
报价： 砍树、挖树根、挖完树根往坑里填土补草这三项要分别报价的，不要到时候砍完了剩个大坑没人管了。 

砍树公司： 联系了四家，都是群里和邻居推荐的，相信已经比大部分老美公司都偏宜了，四家里最便宜的是M&C ， 电话609 424 8626 Diego, 其他三家给的报价是2300-2900刀，他家1900刀砍树加挖树根(我家是比较大的橡树)，别家250刀补土补草，他家150刀。M&C是中国邻居介绍的(不知道他在不在群里) , 有经验，说他家的报价是非常非常低的，而且还是township推荐的，做事利索我目前很满意。 
砍前：先确定树是你的还是town的，有些树如果在你院子里但是离路比较近，不一定是你的，每条路离路中心一段距离(距离多少要看具体路)内的树都是town tree,  Taylor Sapudar tsapudar@princetonnj.gov 是普林的Arborist, 树都归他管， 你要不确定可以让他过来量一下，我的树量完了就差90公分就是town tree了，差一点就不用我出钱了 我邻居的树在她院子里但就是town tree。
砍后：不知道是不是砍一颗大的一定要补种一颗，但我本来就打算补种的，也是联系这个Taylor, 他每年春天和秋天各种一百颗树，如果你报名，他就过来给你种，种的时候会种在township地界内，这样再死了就归他砍了。 今年秋天名额满了，我们放在了春天的名单上，此处再次感谢我的邻居，我都不知道镇里还给免费种树的。

清理倒下的树的公司推荐	
Monkeys at 908-334-2876 or google them.

Bunker Hill Tree Service New Jersey
PrincetonNJUnited States New Jersey
(732)672-9197
Bunkerhilltree@gmail.com
bunkerhilltree.com
我看了四颗大树。3000 但是这个价格要看具体状况。同样的树 一个在路边 一个在后院 价格肯定太差很多 

这家干活认真 价格是我找的里面算低的 而且快。他们有个机器 60尺的树 不用人爬 用个机器砍三次 把树就这么端着放地上

FAUR
Fair Trees Services & Pardicaping
Fair Landscaping & Trees Service NJTC#795890 Alfredo Melgar.
325 Hazel Ave Ewing Nj 08638 Phone:(609)213-4096
Email: fairtreesservices@gmail.com

我前一段砍树找的这家+1 (732) 677-6524找Quirino 一棵树大约不带除根不到1000
2022年刚用他们砍的树，2500刀但是现金，AG报价比他们还要高一百。最后还算满意，但是下次找他们，一定要用书面写下来条件，让他们认可签字，否则过来砍了，发现答应的不准备兑现。 所以差点吵起来，还好不用付定金。因为他们用机器来拉木头，前面的草坪压出两个巨大的坑，但是也没办法了。

+1 (609) 529-1615
Pepper deTuro 新泽西砍树的公司，是我的园丁Tony介绍。
Treecare@woodwinds.biz
专业砍树几十年的

Davis Tree Services
732 803 2583

砍树这家不错，今年冬天用过。hunter 908-286-0791
Hunter 908 286 0791

SavATree
609 924 2800
询价中报价最高的，我们家的树别的地方（AG, Quirino）报价2500，他们公司报5700 （2022年5月）

6094301195
David Wells是老板就住在普林
唯一的缺点就是活太多，要排队, 一棵树只要1000不到

我家今天院子砍了二十多参天大树，做过几家，最好是Princeton tree care, 每颗不包树跟六七百这样，你们也可试试，google 地图能找到

    `},{id:41,title:"驾校",content:`

驾校
SAFETY FIRST DRINING SCHOOL      
STUDENT C DRIVER
Safety First driving school
Open·Closes 5PM
(732)821-1111
safetyfirstdriving.com

Services: Adult lessonsTeen classes16 Year Old Programs,Approved Drivers Education...

安全驾校罗教练6785492618微信号:raylaw168 
有没有学车教练推荐？
过去100两个小时

 我儿子是找学校Gym class的老师，蛮不錯的
Lennygudoto@princetonk12.org

李教练+1 (848) 391-8961
极耐心，人头熟，没有李教练我的路考过不了
410，六个小时，教三次，但是要去Edison

在问一下教开车的新泽西驾驶学校？要求会说英语。谢谢☺️

我们用的这家：https://wbdriving.com/ 觉得还不错。
不客气。笔试可以在他们那里考，不用去MVC. 这个很多驾校没有。

    `},{id:42,title:"健身",content:`

健身/Fitness Center

Lifetime

Princeton Fitness & Wellness on the State Road
Very good
Princeton Fitness & Wellness  就在我店的隔壁，对于有上课的小伙伴确实不错，但对于只用健身器材就不太合算了，里面还有游泳池,设备还挺新的@楚

YMCA健身也不错，城里，免费停车，有游泳池，虽然因为既定泳课常常用不了。

    `},{id:43,title:"房屋车保险和来美国看病",content:`
    
保险
我的List上没有。看群友推荐。我们家过去在华盛顿一直用Allstate十几年都很满意，搬到普林后他们当地办公室的服务屡屡出错，导致我们搬家后一段时间竟然没有上好保险，但是也没通知我们。后来就改用geico，略贵一点。

车险打算从geico换progressive，便宜100

其實Njm很好，我們都在他們那二十年，因為我开車吃罰單，（上班着急，超速）又碰鹿，所以他們不喜歡我們，漲價很多。我們才重新找
每年年底都退一點餞回來，真的很好

我查看了一下， 繳費給旅遊保險的公司是— travel guard group INC tel: 8008261300

房屋保险
杨林静
(646)334-5458

state farm公司的simon，华人，很热心，车保险和房屋保险都做，解答问题很清楚Mon-Fri 9:00-6:00 (EST)
Sat 9:00-2:00
Evenings by Appointment
Phone: (484) 416-3518
simon.z.cao.ts2c@statefarm.com

Jianing Lin，手机：848-702-4988。
我和我孩子，一直用他做房屋、车、租房及人寿保险15年了

来美买医疗保险
胜翠
WeChat ID: alicelin-actuary
6097519093
2014218327

请问各位家长朋友，有哪位医生接受NJ FamilyCare的well point 健康保险卡的吗？
去保险公司的网站找医生单。输入你的邮区号。这是找收这个保险医生的最快途径。不过最好还是要打电话给医生的办公室核实一下。

来美亲属保险
www.insubuy.com 这是胜翠以前在群里发过的，我给我来访的家人买了这个保险。供参考。
推荐一下Amazon Pharmacy。 家里人最近好几种新药，保险支付额很少，自费都不菲。最近我从Walgreen换到Amazon Pharmacy, Amazon Prime会员药价差不多是本地药房的一半。所以建议大家买药的时候，可以通过亚马逊药房询价，看哪个更便宜。我们家里人常吃的几种药，最近我都换到Amazon Pharmacy了，价格都便宜不少，50%-10% 不等。
是的，Amazon Prime可以接受保险，可以输入具体保险信息，她可以同时报价有保险和无保险的药物价格。 有时候有保险的价格比没保险的价格还贵，估计具体看改药品她家和保险公司分账安排。

如果有錢自付，或者有全球給付的保險（比如在香港買了保誠Prudential 或者AIA), 就可以直接找醫療機構。癌症的話，這家在紐約和新州的醫療機構排名很高。 
在三藩市的UCSF（加州大學三藩市分校是間排名前列的醫學院）和德州大學奧斯汀分校醫學院（UT Austin)的Anderson Cancer Center有不少從中國來的求診病人，以前有微信文章介紹自身經歷。 
养和的 服务，真是一流水平 
UT Austin Anderson 癌症中心，麻省总医院，Mayo Clinic 都有专门针对国际就医的部门。富裕中国人会联系他们（或者通过中介联系）寻找他们专家制定治疗方案。如果你联系他们，他们会告诉你国内去哪家医院检查，然后远程看检查结果并和国内医生讨论病情，建议最佳治疗方案。不需要折腾病人来美国检查就医。美国医疗的确服务态度好，另外️一些早期试验药，但病人远离家人，语言不通也不一定是最佳就医选择。如果美国权威专家制定医疗方案，国内外资医院或者香港，新加坡的医疗水平和服务也不错的。

老人如果有绿卡但不到五年，可以在exchange上面买Obama Care的保险。保费和免赔额都比较高，但是相比美国昂贵的医疗费用，这也还是值得的。如果没有绿卡或者拿到绿卡不到五年，老人可以买短期国际旅行医疗保险。在携程上可以买国内保险公司的国际旅行险，在美国需要自己先垫付然后报销，也可以直接买美国保险公司的visitors国际旅行保险，一般发生意外，直接看病，保险公司支付。 不过国际旅行险只能Cover意外情况, 不含基础疾病和preventative care。老人的医疗保险是个问题，一定要考虑周到。

www.insubuy.com自己上去买就好 家里老人来探亲，需要买旅游保险，求好的保险代理推荐谢谢

你到exchange 上面去看看研究一下？理论上exchange是给公民和绿卡居民的强制健康保险，具体每个州情况以点不同，但大同小异。新泽西比较富裕，福利相对别州已经很好了！如果没绿卡，那在美国需要签证，一般学校和雇主的医疗保险肯定比exchange便宜（雇主会支付一部分医疗保险费）。

联系人：Sophie, 479.200.0792 服务内容：个人及团体医保、旅游医保、Obamacare (GetCoveredNJ)、Medicare等咨询及申请。主要代理公司包括：Horizon, AmeriHealth, aetnaCVSHealth, United Healthcare等。

医疗保险可找群里的Judy Wu 

乡親们：有誰用过汽車保險公司寄來小磁卡，放在车里，跟踪是否speeding ... ，這樣过半年根据行车情況減少保險费的吗？，想知道好不好用，有沒有被泄密的風險。謝謝🙏
我们用过progressive的那个snapshot program,，能便宜一些
@Lijuan Allstate 也有一個 Drivewise 監測你駕駛習慣，距離，安全駕駛一個月可以省十幾二十塊錢。洩密的話，我沒啥密可洩，省點錢實在。

    `},{id:44,title:"皮肤科专科医生",content:`
皮肤科
我女儿用的是Princeton Dermatology Association 的Dr. Kaufmann. 很有经验，缺点是比较难约上。电话是609-683-4999。地址是208 Bunn Drive, Princeton
 
打扰了，请问大家有Dermatologist 推荐吗？治疗青少年的粉刺Acne 较拿手的。多谢了
 
Schweiger
Dermatology Group -
Princeton
800 Bunn Drive, #201 Princeton,NJ 08540
(973) 571-2121
Convenient same day
appointments
844-DERM-DOC    646-558-6696
 
我们去过这家看皮肤科
 
我们用Princeton Nassau pediatrics, Dr. Pierson 开的药膏，效果不错, 专科医生不好约
 
这个很专业但有些保险不受，你问一下
KESSEL DERMATOLOGY
609-890-2600    HAMILTON SQUARE
1700 Whitehorse Hamilton Square Road, D1 Hamilton Square, NJ08690
609-890-2600

    `},{id:45,title:"露台阳台车道",content:`

露台阳台和车道/ Driveway Paving / Seal Coating/patio
你可以找Mario (609) 577-0462 他去年给我扩展patio 帮我把旧的也重新铺了 做得很不错 价钱也蛮合理的 就是他们很忙 不知道什么时候可以排到
Mario 买tree价格也挺便宜的

铺路
我用过一家，还不错。但是是2016年用的，希望公司还在
Here is the contact number: 877-884-7325. Mark Harrison

Tomaselli Masonry 铺路
Jerry 732-715-4278
Nick Patio
(732) 685-6405

Deck Service    Gary's Deck Servie    
609-443-8018

Daniel
609-255 3028
修补deck和siding烂掉的木头/窗框,他也换siding，价格不贵，手艺好
给我们家做了deck，deck中间定制了火盆，他还给火盆做了盖子，不烧火时就是一个桌子。每次开Party都是大家的谈资。
我朋友家请Dan做过一个中式的木影壁 ，自己设计的像中国古钱的形状，加定制的同色木制花盆，很新颖 ，普林大概就他会做这些，价格很合适，他的人工和材料费用分开，一目了然。6092553028，他活儿很多，基本不接电话，但是text和留言都可以找到他。
刚帮我们后院建了一个露台，漂亮，做工细致，要价很合理，难得！没想到我家后院地下都是石头，打桩就打了两天，也没有加钱也没有抱怨，态度好👍

修车道裂缝
Glen
Budget Paving and Masonry
+1 (609) 234-8888

Deck Builder    
My Deck, LLC | Deck Builders
比Deck Guardian貴30%.但我去看邻居Deck Guardian的手工很不行.

(908) 713-1000                
"My Deck" 只用 steel frame and Trex Transcends.所以以较貴.
https://maps.app.goo.gl/vxRHrRfVEc7NCp3r8

Royal Tree Service            9086472932                
经验很丰富。做事认真，现在4年过去了driveway还是看起来很新。

DEMPSEYR
SEAL COAT DRIVEWAY
CRACK FILLING
COMMERCIAL E RESIDENTIAL
908-941-8664 reyes.wilmer2016@gmail.com

CaNam: 修补和Seal 旧的烂掉的车道，把裂缝都填了，做了新的Coating，就像新的一样。还拓宽了车道两边。他和他的工人手工很好，做的很细致，很有设计感。
609-255-3028

分享一下，我曾让嘉欣做车道感觉很不好，不推荐 Sent from my iPhone

    `},{id:46,title:"修理换屋顶",content:`

屋顶/roofing
我用过MAK换屋顶 价格便宜 很专业@Su 
谢谢你的信息，MAK的Paul给我的报价的确是最低的。你有用他家的服务吗？
roofer，看到挺多人用MAK，大概属于比较经济实惠型吧。我前不久找他们要过报价，比较便宜。后来我找了，SECI，他们价钱稍贵，但用的东西和warranty比较好。roofer最好找大一些的公司，warranty更重要。小公司或个体户过几年可能就不见了。
MK不会修屋顶，只换屋顶
我們以前用double D roofing 非常满意

Daniel 
609-255 302，text 或者留言
修补屋顶deck和siding烂掉的木头/窗框。
他给我们家换siding，修了门框。价格不贵，很细心，木工手艺好
我们家shingle，siding都是木头的，里面烂了，很多处翘起来一块。他把里面烂的木头换掉，然后放了同色的不会烂的替代品，好看多了。还修了顶楼的窗户，窗框都烂了发霉了。愿意接修理活很难找到，这样手艺好而靠谱的更少见

Ivan Lopez
1 (773) 936-6979
推荐一个我最近用过的handyman给大家。前段时间帮我维修了洗衣房屋顶漏水，车库门松动，房子周围木头腐烂更换等工作，感觉工程完工和收费都算合理，人很靠谱。我也是一个第三代移民的朋友推荐给我的，她说这个Ivan在家里工作的时候我可以放心出门去办事情，我没有那么做，不过由此可见他是非常值得信任的。
印象中是洪都拉斯人，记不太清了

Roof shingles 掉了一块，有没有推荐的师傅？ 先谢了！
我之前用的，你可以问问他Ammar Ourfali Roofing (732) 991-5855

Better Roofs 609-587-5533
Hamilton township
价钱公道												

请问大家最近有换屋顶的吗？
有 用的这家. 你可以多打几家比较一下报价。W.G Siding & Roofing Inc.Greg 215-778-3305 @菠萝 

Total Roofing
Chris 267 795 8661

Trenton Roof 换了一个烟囱的盖子（那种防鸟做窝）。很小的事情。然后把烟囱油漆了一下（给他们“加一点油”。这样师傅来一趟总得值回他的汽油钱）。
我们以前用过Trenton Roofing, 还不错
Trenton Roofing and siding价格公道活干的也利索，一个上午就能干完
汇报一下最近换房顶的情况：trenton roofing最快最靠谱、报价中等。那个double d roofing不推荐。一堆sales strategies然后报价很高还不屈不挠电话邮件短信轰炸。我家是18年的roof也没漏也没咋的、就是有几片singles做的不好、inspector不建议换、建议修。但没有哪家是说可以不换的。估计现在生意好、修就屋顶这种小活儿都不想接。但double d感觉不靠谱。
609 393-6780
trentonroofing.com
Trenton不会修屋顶，只换屋顶
我们找到那个quote, 还是Trenton Roofing 在2021年一月做的。$375。他们当时说他们很忙，这个项目太小（不够填牙缝的），他们有空时才会来。后来大约一周左右就来做了。

WB Construction LLC/Walter	
给我们的报价：4200sqf的房子换屋顶， 报价1万4

Emily Door Done Right 6094454444

HERRY MANUEL NAVARRO Roofer
Mobile (609) 418-5868
Home xlcontractors@hotmail.com

Fencing；roofing contractor 
Carl
8552922757

Geno's Roof
https://genosiding.com/
215-971-6292

    `},{id:47,title:"打扫卫生",content:`

打扫卫生/cleaning

+1 (646) 266-0317 Stacey 
可以联系一下，我搬走时叫了她（有帮手，应该是她先生）

kendy +1 (609) 356-3415
危地马拉的 4个人 ，开车上门,收费100-150 
1小时好久没有请人专业打扫了 500 deep cleaning 3500 sf的房子其实很便宜了

我知道这个帮人做清埽及家务(484) 294-7575正清

Excellent house cleaner in Princeton area.  I recommend Karina Gonzalez (609)858-8259.  She has been cleaning my two-bedroom apartment for two years and provides wonderful service. 

如果是deep cleaning的话推荐Royal BABA，非常专业和仔细，之前给我把墙上柜子上几十年的油渍全都弄干净了。
http://theroyalbabacompany.com/?utm_source=gmb&utm_medium=referral
我用过这家，一个很专业的尼日利亚小哥，好评http://theroyalbabacompany.com/?utm_source=gmb&utm_medium=referral
之前我搬家，让royal BABA做了一次move-in cleaning。后来临时发现烤箱很脏，让他洗烤箱，他那时候没带相应的洗涤剂，后来又约了时间 开车一个半小时专门过来，花了一个小时给我洗了烤箱，并且坚决不另外收费。
我90平米2b2b的公寓，要求清理烤箱 冰箱，8扇玻璃窗户和纱窗，一共是300，不带窗户的话应该是250的样子。
同样的面积如果是regular cleaning的话，我知道另外几家收费在150上下
刚请royal Baba 做了cleaning, 反馈一下： 非常不专业。

好像群的帮助，推荐今天帮我打扫的人，推荐Yolanda，可以直接打电话给她，没有网站佣金会便宜一点+1 (609) 328-1438
真的很棒！而且家具东西全都收走了，不用自己丢，强烈推荐

我来推荐一个刚刚用过的cleaning team。Deep clean， regular clean都做。做清洁非常高效，且质量很好。Fernando (267) 346-9899
收费挺合理的。我真的惊讶于他们的效率和效果。油烟机，橱柜，烤箱都搞得非常干净。连柜子顶上的灰都擦干净了。巴西人，英语凑合交流

推荐一个打扫家具的服务，人很好还便宜 Dorota 609 540 3056

普林斯顿打扫卫生Saida
Gregorio
电话
+1(609) 516-7477

推荐一个打扫家具的服务，人很好还便宜 Dorota 609 540 3056

Antonia Clean Lady
(609) 306-0568

可以试这个+1 (609) 647-3909 Princeton cleaning。领头接送的是Nelson，他们有墨西哥人和东欧人

Tina
609 510 5849

Luba
Princeton Cleaning Lady
phone
(609) 540-0200

claudia Hastenreiter
+1(908) 499-5082
这个Claudia也说不做了

House Cleaning Service
Irma: (609) 375-6969

Diana: 609-287-2074；Diana不做了

请有偿清洁整理房间，有人愿意做吗？谢谢
这位萍姐就是专业做这个的她的电话号码是：9082658875

Basia 609-865-7417

If you're looking for someone dependable, thorough and professional, I highly recommend my house cleaner who I've been using for over 20 years. Her name is Kathy and her number is 215-378-1848

Inga
609 558 7945
609 530 1169

Vanessa打扫卫生
+1(609) 827-4448


Water& Fire clean up and restoration
732-536-7555	
关于地下室淹水，我们最后发现是链接sump pum的出水管堵了，水排不出去，所以全淹了,finished basement,可以想象一下有多糟。我们最后找了下面这家clean up & restoration company，很好，推荐。

之前请了Hernadez做post construction clean
不专业、不推荐
高分评价是她会告诉你：你给我写5星好评下次给你打折。非常无语
HernandezLLC- Commercial and Residential
Cleaning,Post-Construction,Offi...
719 Adeline StTrentonNJ08611
cleaninghernandez.com

    `},{id:48,title:"兽医/理发/宠物",content:`
    

Princeton Animal Hospital& Carnegie Cat Clinic
726 Alexander RdPrincetonNJ08540
已打烊·下次开门时间:周一06:00
进行预约·princetonvet.com

请问一下绘狗看病打疫苗的诊所有推荐吗？非常感谢！

720 Edinburg Road Mercerville, NJ 08619

Faith Vet
(732) 658-6777
有点远，但是还不错，价格合适
这个诊所很快。我暑假要出去，没想到经常去的附近的vet要半个月预约。找到这个faith，两天后就可以。后来狗拔牙，这个诊所比另外一个要便宜700美元

EASEL Animal Rescue League, Shelter, & Pet Adoptions 4.4 * (249) • Animal shelter in Ewing
(unincorporated community), New Jersey • Closed
4 Jake Garzio Dr, Ewing Township,
NJ 08628
1.9 mi
(609) 883-0540

另外有狗的group lesson 或者 private training lesson 介绍吗？以前只养过15-25 lb 的中型小狗。现在的小狗是三个月大，20 lbs. 以后会长到60或者70 lbs. 只知道green leaf pet resort 有training course. 普通狗的训练，一共$2600 走读。

好像普村和周边几个town 警察局的狗有从这个resort 训练出来的，他们也做普通狗礼貌训练。只是在six flag 那里。每天开车接送比较困难

我们家狗狗也是力气大精力旺盛调皮，我们刚开始在Heavenly Hounds Dog Training 上课，班上倒都是大狗狗，效果要等多上几次再来反馈了

大家好，求推荐宠物医生和保险 
Caring hearts animal hospital at Montgomery

兩個多月前發現我家十二歲的狗狗要做一個不小的手術，便打聽搜尋好的獸醫，最後找到了下面這家。今日剛拆線，非常滿意。

MONROE
ANIMAL HOSPITAL
Steven E.Hornstein,DVM
Medical Director
179 Prospect Plains Road, Monroe, NJ 08831 drsteve@monroevet.netwww.monroevet.net
609-655-1717

Dr Hornstein owner and medical director of the Monroe Animal Hospital He was President of the New Jersey Veterinary Medical Association

Dr. Ben Staiger is a highly
versatile surgeon with than15 years of experience

求推荐，dog boarding（短期照看小狗）

上Rover.com或者找Ainla, (609) 480-7521

A door pet
100-125 dollars a day to have someone sleep in your house to watch the dog
+1 (609) 799-3111

普林斯顿高中生初中生M&M组合照顾狗或者宠物
PetLovers08540@gmail.com
一天可以去三次，一次1个小时15美元，照顾狗，带狗散步玩球。要求距离Princeton Community Pool骑车不超过15分钟，超过这个距离要加接送费用5美元。

请问有宠物理发的推荐吗？
Pamper your pet from head to paws, book a
bath or grooming service now >
609.259.1900
8 Sharon Road, Robbinsville, NJ 08691.
我们家80磅，上次去是12/23，好像$140左右含税含小费，但他们说今年要涨价了

想问群里谁有没有认识的靠谱宠物医生在新泽西或者纽约@木木 Dr. Alan Farber of Manalapan is excellent 

Hopewell Veterinary Group , NJ
Dr. Mark Smith

    `},{id:49,title:" 烟囱和Gutter清扫和修理",content:`

vent and chimney cleaning
Gutter cleaning and repair/build
Gutter Cleaning	
Tom +1 (267) 257-4742
我们用的gutter clean $150 flat price

cleaning of dryer vent and inspection of chimney vents. 这是家父子个体户公司。hvaccleaningspecialists.com
dryer vent cleaning 10家+ , $100 per house.
Chimney/furnace vents inspection, $35/house.
Total $135/house
HVAC Cleaning Specialists       

 Z-Best Management (和US Air Management是同一家老板 )是2022年用过的，15家以上报价：
（1） dryer vent cleaning + chimney inspection ， 共 $70
（2）如果需要chimney cleaning，加$70

U&B Outdoor services
$120
U&B Outdoor services! We specialize in gutter cleaning minor gutter
installation and repairs, 

Gutterman
(609) 921-2299
863 State Road. 9       
PrincetonNJ08540 USA
$125 for Cleaned and flushed all gutters11/19/2018

群里谁能帮我推荐个gutter cleaning company? 谢谢🙏
Bruce Davies Aka Gutterman
Gutterman

大家早上好！请问有暖气管道检查的公司推荐吗？
AJ perry 
建议不要用AJ Perry. 不得不用时，也要多请2家公司竞标
是的，多问几家询价，差异特别大

sign up PSEG worry free program. 15 天后，让他们过来检查，检查和维修费用全cover
最好加入PSEG Worry free Program, 一个月三件电器十几元，打电话他们随时来收，临时叫外面人修，出来一次没毛病至少二百。

以前让princeton air 做过，挺贵的

USA Air
908) 731-7090
(877) 811-5131
1个zone 全包$350，加一个zone 多$200

(609) 577-4658
PROCLEAN
AIR DUCTS
DRYER VENT CHIMNEY

732-372-0001
A+AIR Dryer Vent & Chimney Cleaning
1(855) 922-2233

1(800) 727-7121
Air Duct Cleaning	Pro Clean	
732-372-0001

AIR DUCT DRYER VENT&CHIMNEY
CLEANING&INSPECTION1-855-922-2233
$75

请问大家air duct vent是空调管道吗？请问空调管道清理有推荐吗？
Deep Impact
Air Cleaning Dryer Vent Cleaning
908 431-7601

Z-BEST MANAGEMENTINC
Z-BEST MANAGEMENT       DUCT &DRYER CLEANING SERVICES   
WWW.USAAIRMANAGEMENT.COM        (877)811-5131(908)731-7090      26383   
70-75 dollars for inspection and cleaning if bought with a large group

AIR DUCT DRYER VENT&CHIMNEY
CLEANING&INSPECTION1-855-922-2233
$75


请问有修gutter的推荐吗？
JCL
973277 7819     Owner: Juan     

Chimney Sweeps	St John	
609-737-0133

Chimney & Roofing Specialists
Advanced Aardvark Air Duct Cleaning
6099181818
这家不少人推荐

Chimney Sweeps Unlimted
609 730 4190

6095863344
chimney

Jameson 
Chimney Repair and Fireplace Restoration
3092 Shafto Rd #14, Tinton Falls, NJ 07753, USA
mjamesoncontractors@gmail.com
800-992-1019

chimney修理
Chimney contractor effective pros
732-978-9444
201-907-7348
打通了给我报价2600 我还是找的自己联系的那家

chimney修理
St. John Chimney Sweeps
1613 Reed Road
Pennington NJ 08534
609-737-0133
www.stjohnchimney.com
是1900 St. John chimney sweeps


我家烟囱基本不用，烟囱帽的金属边有点生锈了，本想刷一下漆。就让Trent roof报价，他们说把配件都换了，要1200多，没提能不能刷漆。能推荐一下您家过来给烟囱刷漆找的哪位吗？还有如何收费，谢谢

Trenton Roof 换了一个烟囱的盖子（那种防鸟做窝）。很小的事情。然后把烟囱油漆了一下（给他们“加一点油”。这样师傅来一趟总得值回他的汽油钱）。
我们以前用过Trenton Roofing, 还不错
用过这一家，服务规范、快
是的，比较了三家后用了Trenton Roofing and siding，他家价格最低，隔天看过屋顶后，交一半定金，一周后就换好了
Trenton Roofing and siding价格公道活干的也利索，一个上午就能干完
汇报一下最近换房顶的情况：trenton roofing最快最靠谱、报价中等。那个double d roofing不推荐。一堆sales strategies然后报价很高还不屈不挠电话邮件短信轰炸。我家是18年的roof也没漏也没咋的、就是有几片singles做的不好、inspector不建议换、建议修。但没有哪家是说可以不换的。估计现在生意好、修就屋顶这种小活儿都不想接。但double d感觉不靠谱。
609 393-6780
trentonroofing.com
Trenton不会修屋顶，只换屋顶
我们找到那个quote, 还是Trenton Roofing 在2021年一月做的。$375。他们当时说他们很忙，这个项目太小（不够填牙缝的），他们有空时才会来。后来大约一周左右就来做了。

我们用的这个https://makconstruction.com/roofing/@DingDing 

有认识清理烘干机管道的人吗？
Apex Air Duct (Alex)
(732) 257-4590 mobile
我用過 Apex,清了整個屋子的通風管道，他們順便送了清烘乾機管道的服務。
我是疫情前請他們來的，要看你家有多少個通風口，HVAC主機要收一個基本費，基本上一個房子要收$300到$500吧， 他們收私人支票，沒有收信用卡的機器，你可以先打給他們，問現在收費如何，疫情後萬物皆漲價

如果有用到壁爐，清潔公司建議每隔一年在春初做一次清潔+提供檢查報告（冬天蜘蛛喜歡在壁爐通道中安家立業、生產），若不用壁爐，則2-3年清潔一次，畢竟大家都不喜歡家中有蜘蛛，總共收費為$198+稅，大約1小時的活。                                                    
又清潔整個房子的air ducts,       1-zone $300+稅， 2-zone $600+稅，都附送清潔 dryer vent, 如果只來清潔dryer vent $95+ 稅, 他們都會提供檢查報告。
AIR DUCT CHIMNEY DRYER
DUCT TECHNOLOGY, LLC.
973-628-8760
WWW.DUCTENVIRO.COM • DUCTENVIRO@AOL.COM
請問群友有沒有用過 做 fireplace integration inspection （check fireplace function, cleanness…）的人才或公司可以介紹？
Fireplace integrity inspection 
Duct Technology  973-628-8760 Saraa


有人推荐修gas fireplace的公司么？试了一家Ace fireplace service, 差评！！本来问题是烧一会儿自动停，要再开一次。他来了inspection半天, 说可能气不足，调大了气。第二天干脆一点儿也打不着火了

Bowden's in Hamilton is great. They installed one gas fireplace for me many years ago and they now come out to clean it.
6095863344

    `},{id:50,title:"洗地毯",content:`

Car deep cleaning											
We've used this company several times. They've done an amazing job cleaning the aftermath of the parties my kids had in my car 😂http://allclassdetailing.com/contact-us/

Carpet Recovery Plus

Peter Carpet Cleaning
message call    video   mail    
phone
(732)398-9898

Carpet cleaning
Peter 732 398 9898
洗地毯的，他不错

有推荐洗地毯的师傅吗？
David 646-651-2612

Pristine Carpet Cleaning. Chuck 609 462 2844

Amer carpet cleaners, Jack Wang 609-610-1035

Avon Carpet Cleaning
(609) 448-7772


Jack Wang Carpet Cleaning
+1(609) 610-1035

    `},{id:51,title:"学校选择",content:`

过两个月要搬去Princeton了、求推荐daycare，最好是双语的

如果要双语的，那大概就是Yinghua International School了

如果要budget friendly的、時間彈性的，推薦Princeton Community Family Learning Center （the Cub school)
雖然便宜，但老師和director很優質

另外The Learning Experience - Princeton和Knowledge Beginnings Princeton (Kindercare) 也聽說不錯。

我記得YWCA有daycare 和 after school care (不是YMCA, 名字容易搞混)
Princeton公立學校的課後托兒和一部分的preschool 班級 就是YWCA 提供的。
可以參考它的網站：https://www.ywcaprinceton.org/childcare-princeton
(Princeton public preschool 有一部分的班級是跟私立daycare合作：分別在Cub School 和 YWCA 有兩個班。 因為公立小學教室不夠。）
信息更正
PPS preschool 今年新增3个班，分别在Pannell （CP）和 Redding Circle (LB)

YWCA的Daycare是叫The Burke Foundation at YWCA Princeton。 （名字太多，挺混亂的）

如果你已經有租房子的lease 或 房屋的deed就可以申請。
Princeton public preschool是要抽籤的，但如果他們學生沒有額滿的話，就還會接受新學生。

如果沒空位的話，也可以先去the Cub school 的private daycare班 ,等明年2月報名抽籤，大概就能抽上public preschool 。
(Princeton public preschool 有一部分的班級是跟私立daycare合作：分別在Cub School 和 YWCA 有兩個班。 因為公立小學教室不夠。）

Cub School 是2.5歲-6歲。
YWCA 是2個月大 - 6歲的樣子。
（免費的public school program是三歲和四歲。學區年齡劃分是9月30日。）

    `},{id:52,title:"跳蚤市场",content:`
请问附近有没有跳蚤市场 可以卖二手东西的 
Englishtown or Columbus Farmers Market.
请问附近有没有跳蚤市场 可以卖二手东西的 
离这里不远Lamberville Golden Nuggets Flea Market (星期三，六，日开）。另外Lambertville, NJ和Delaware 河对面New Hope, PA有几个古董店卖挺有艺术气息的东西（绘画，家俱，收藏品等等。不便宜，确实是好东西）。

今天在教会 一个朋友说可以去这里买二手儿童产品：https://mercercounty.jbfsale.com
      `}],lN=e=>{const t=e.replace(/\s+/g," ").trim();return t.length>80?t.substring(0,80)+"…":t},sN=()=>{const e=oo(),[t,r]=b.useState(Qi),[a,o]=b.useState(""),s=f=>{const h=a;r(h.trim()?Qi.filter(d=>{var g;return(g=d.title)==null?void 0:g.includes(h)}):Qi)},c=()=>{r(Qi),o("")};return V.jsxs("div",{style:{maxWidth:"1100px",margin:"0 auto",padding:"32px 24px"},children:[V.jsx("h1",{style:{fontSize:"1.5rem",fontWeight:"800",marginBottom:"4px"},children:"全部资料"}),V.jsxs("p",{style:{color:"#888",fontSize:"0.9rem",marginBottom:"24px"},children:["共 ",Qi.length," 个分类 · 来自普林斯顿华人社区"]}),V.jsxs("div",{style:{display:"flex",gap:"8px",marginBottom:"32px",maxWidth:"400px"},children:[V.jsx(bl,{placeholder:"搜索资料名称...",prefix:V.jsx(I8,{style:{color:"#ccc"}}),value:a,onChange:f=>o(f.target.value),onPressEnter:()=>s(),allowClear:!0,onClear:c}),V.jsx("button",{onClick:()=>s(),style:{background:"#c0392b",color:"white",border:"none",borderRadius:"6px",padding:"0 16px",cursor:"pointer",fontWeight:"600",fontSize:"0.875rem",whiteSpace:"nowrap"},children:"搜索"})]}),a&&V.jsxs("div",{style:{color:"#888",fontSize:"0.875rem",marginBottom:"16px"},children:["找到 ",t.length," 条结果",V.jsx("span",{onClick:c,style:{color:"#c0392b",cursor:"pointer",marginLeft:"12px"},children:"清除"})]}),V.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(260px, 1fr))",gap:"14px"},children:t.map(f=>V.jsxs("div",{onClick:()=>e(`/notes/${f.id}`),className:"ref-note-card",style:{borderLeft:"3px solid #e0e0e0"},children:[V.jsx("div",{className:"ref-note-title",children:f.title}),V.jsx("div",{className:"ref-note-preview",children:lN(f.content)}),V.jsxs("div",{className:"ref-note-link",children:["查看详情 ",V.jsx(fS,{style:{fontSize:"11px"}})]})]},f.id))}),t.length===0&&V.jsx("div",{style:{textAlign:"center",padding:"60px 0",color:"#aaa"},children:"没有找到相关内容"})]})};function uN(e,t){const r={};return(e[e.length-1]===""?[...e,""]:e).join((r.padRight?" ":"")+","+(r.padLeft===!1?"":" ")).trim()}const cN=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,fN=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,dN={};function Jb(e,t){return(dN.jsx?fN:cN).test(e)}const hN=/[ \t\n\f\r]/g;function mN(e){return typeof e=="object"?e.type==="text"?Yb(e.value):!1:Yb(e)}function Yb(e){return e.replace(hN,"")===""}class cu{constructor(t,r,a){this.normal=r,this.property=t,a&&(this.space=a)}}cu.prototype.normal={};cu.prototype.property={};cu.prototype.space=void 0;function Dw(e,t){const r={},a={};for(const o of e)Object.assign(r,o.property),Object.assign(a,o.normal);return new cu(r,a,t)}function Ng(e){return e.toLowerCase()}class Vn{constructor(t,r){this.attribute=r,this.property=t}}Vn.prototype.attribute="";Vn.prototype.booleanish=!1;Vn.prototype.boolean=!1;Vn.prototype.commaOrSpaceSeparated=!1;Vn.prototype.commaSeparated=!1;Vn.prototype.defined=!1;Vn.prototype.mustUseProperty=!1;Vn.prototype.number=!1;Vn.prototype.overloadedBoolean=!1;Vn.prototype.property="";Vn.prototype.spaceSeparated=!1;Vn.prototype.space=void 0;let gN=0;const Ye=uo(),nn=uo(),Dg=uo(),pe=uo(),_t=uo(),ol=uo(),nr=uo();function uo(){return 2**++gN}const Pg=Object.freeze(Object.defineProperty({__proto__:null,boolean:Ye,booleanish:nn,commaOrSpaceSeparated:nr,commaSeparated:ol,number:pe,overloadedBoolean:Dg,spaceSeparated:_t},Symbol.toStringTag,{value:"Module"})),om=Object.keys(Pg);class yp extends Vn{constructor(t,r,a,o){let s=-1;if(super(t,r),Xb(this,"space",o),typeof a=="number")for(;++s<om.length;){const c=om[s];Xb(this,om[s],(a&Pg[c])===Pg[c])}}}yp.prototype.defined=!0;function Xb(e,t,r){r&&(e[t]=r)}function Sl(e){const t={},r={};for(const[a,o]of Object.entries(e.properties)){const s=new yp(a,e.transform(e.attributes||{},a),o,e.space);e.mustUseProperty&&e.mustUseProperty.includes(a)&&(s.mustUseProperty=!0),t[a]=s,r[Ng(a)]=a,r[Ng(s.attribute)]=a}return new cu(t,r,e.space)}const Pw=Sl({properties:{ariaActiveDescendant:null,ariaAtomic:nn,ariaAutoComplete:null,ariaBusy:nn,ariaChecked:nn,ariaColCount:pe,ariaColIndex:pe,ariaColSpan:pe,ariaControls:_t,ariaCurrent:null,ariaDescribedBy:_t,ariaDetails:null,ariaDisabled:nn,ariaDropEffect:_t,ariaErrorMessage:null,ariaExpanded:nn,ariaFlowTo:_t,ariaGrabbed:nn,ariaHasPopup:null,ariaHidden:nn,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:_t,ariaLevel:pe,ariaLive:null,ariaModal:nn,ariaMultiLine:nn,ariaMultiSelectable:nn,ariaOrientation:null,ariaOwns:_t,ariaPlaceholder:null,ariaPosInSet:pe,ariaPressed:nn,ariaReadOnly:nn,ariaRelevant:null,ariaRequired:nn,ariaRoleDescription:_t,ariaRowCount:pe,ariaRowIndex:pe,ariaRowSpan:pe,ariaSelected:nn,ariaSetSize:pe,ariaSort:null,ariaValueMax:pe,ariaValueMin:pe,ariaValueNow:pe,ariaValueText:null,role:null},transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}});function zw(e,t){return t in e?e[t]:t}function _w(e,t){return zw(e,t.toLowerCase())}const pN=Sl({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:ol,acceptCharset:_t,accessKey:_t,action:null,allow:null,allowFullScreen:Ye,allowPaymentRequest:Ye,allowUserMedia:Ye,alt:null,as:null,async:Ye,autoCapitalize:null,autoComplete:_t,autoFocus:Ye,autoPlay:Ye,blocking:_t,capture:null,charSet:null,checked:Ye,cite:null,className:_t,cols:pe,colSpan:null,content:null,contentEditable:nn,controls:Ye,controlsList:_t,coords:pe|ol,crossOrigin:null,data:null,dateTime:null,decoding:null,default:Ye,defer:Ye,dir:null,dirName:null,disabled:Ye,download:Dg,draggable:nn,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:Ye,formTarget:null,headers:_t,height:pe,hidden:Dg,high:pe,href:null,hrefLang:null,htmlFor:_t,httpEquiv:_t,id:null,imageSizes:null,imageSrcSet:null,inert:Ye,inputMode:null,integrity:null,is:null,isMap:Ye,itemId:null,itemProp:_t,itemRef:_t,itemScope:Ye,itemType:_t,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:Ye,low:pe,manifest:null,max:null,maxLength:pe,media:null,method:null,min:null,minLength:pe,multiple:Ye,muted:Ye,name:null,nonce:null,noModule:Ye,noValidate:Ye,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:Ye,optimum:pe,pattern:null,ping:_t,placeholder:null,playsInline:Ye,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:Ye,referrerPolicy:null,rel:_t,required:Ye,reversed:Ye,rows:pe,rowSpan:pe,sandbox:_t,scope:null,scoped:Ye,seamless:Ye,selected:Ye,shadowRootClonable:Ye,shadowRootDelegatesFocus:Ye,shadowRootMode:null,shape:null,size:pe,sizes:null,slot:null,span:pe,spellCheck:nn,src:null,srcDoc:null,srcLang:null,srcSet:null,start:pe,step:null,style:null,tabIndex:pe,target:null,title:null,translate:null,type:null,typeMustMatch:Ye,useMap:null,value:nn,width:pe,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:_t,axis:null,background:null,bgColor:null,border:pe,borderColor:null,bottomMargin:pe,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:Ye,declare:Ye,event:null,face:null,frame:null,frameBorder:null,hSpace:pe,leftMargin:pe,link:null,longDesc:null,lowSrc:null,marginHeight:pe,marginWidth:pe,noResize:Ye,noHref:Ye,noShade:Ye,noWrap:Ye,object:null,profile:null,prompt:null,rev:null,rightMargin:pe,rules:null,scheme:null,scrolling:nn,standby:null,summary:null,text:null,topMargin:pe,valueType:null,version:null,vAlign:null,vLink:null,vSpace:pe,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:Ye,disableRemotePlayback:Ye,prefix:null,property:null,results:pe,security:null,unselectable:null},space:"html",transform:_w}),vN=Sl({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:nr,accentHeight:pe,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:pe,amplitude:pe,arabicForm:null,ascent:pe,attributeName:null,attributeType:null,azimuth:pe,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:pe,by:null,calcMode:null,capHeight:pe,className:_t,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:pe,diffuseConstant:pe,direction:null,display:null,dur:null,divisor:pe,dominantBaseline:null,download:Ye,dx:null,dy:null,edgeMode:null,editable:null,elevation:pe,enableBackground:null,end:null,event:null,exponent:pe,externalResourcesRequired:null,fill:null,fillOpacity:pe,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:ol,g2:ol,glyphName:ol,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:pe,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:pe,horizOriginX:pe,horizOriginY:pe,id:null,ideographic:pe,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:pe,k:pe,k1:pe,k2:pe,k3:pe,k4:pe,kernelMatrix:nr,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:pe,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:pe,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:pe,overlineThickness:pe,paintOrder:null,panose1:null,path:null,pathLength:pe,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:_t,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:pe,pointsAtY:pe,pointsAtZ:pe,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:nr,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:nr,rev:nr,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:nr,requiredFeatures:nr,requiredFonts:nr,requiredFormats:nr,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:pe,specularExponent:pe,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:pe,strikethroughThickness:pe,string:null,stroke:null,strokeDashArray:nr,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:pe,strokeOpacity:pe,strokeWidth:null,style:null,surfaceScale:pe,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:nr,tabIndex:pe,tableValues:null,target:null,targetX:pe,targetY:pe,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:nr,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:pe,underlineThickness:pe,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:pe,values:null,vAlphabetic:pe,vMathematical:pe,vectorEffect:null,vHanging:pe,vIdeographic:pe,version:null,vertAdvY:pe,vertOriginX:pe,vertOriginY:pe,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:pe,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:zw}),$w=Sl({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,t){return"xlink:"+t.slice(5).toLowerCase()}}),kw=Sl({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:_w}),Lw=Sl({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,t){return"xml:"+t.slice(3).toLowerCase()}}),yN={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},bN=/[A-Z]/g,Kb=/-[a-z]/g,SN=/^data[-\w.:]+$/i;function CN(e,t){const r=Ng(t);let a=t,o=Vn;if(r in e.normal)return e.property[e.normal[r]];if(r.length>4&&r.slice(0,4)==="data"&&SN.test(t)){if(t.charAt(4)==="-"){const s=t.slice(5).replace(Kb,xN);a="data"+s.charAt(0).toUpperCase()+s.slice(1)}else{const s=t.slice(4);if(!Kb.test(s)){let c=s.replace(bN,wN);c.charAt(0)!=="-"&&(c="-"+c),t="data"+c}}o=yp}return new o(a,t)}function wN(e){return"-"+e.toLowerCase()}function xN(e){return e.charAt(1).toUpperCase()}const EN=Dw([Pw,pN,$w,kw,Lw],"html"),bp=Dw([Pw,vN,$w,kw,Lw],"svg");function AN(e){return e.join(" ").trim()}var Zo={},lm,Qb;function TN(){if(Qb)return lm;Qb=1;var e=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,t=/\n/g,r=/^\s*/,a=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,o=/^:\s*/,s=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,c=/^[;\s]*/,f=/^\s+|\s+$/g,h=`
`,d="/",g="*",v="",y="comment",S="declaration";function w(x,T){if(typeof x!="string")throw new TypeError("First argument must be a string");if(!x)return[];T=T||{};var R=1,O=1;function j(Y){var G=Y.match(t);G&&(R+=G.length);var P=Y.lastIndexOf(h);O=~P?Y.length-P:O+Y.length}function z(){var Y={line:R,column:O};return function(G){return G.position=new N(Y),$(),G}}function N(Y){this.start=Y,this.end={line:R,column:O},this.source=T.source}N.prototype.content=x;function _(Y){var G=new Error(T.source+":"+R+":"+O+": "+Y);if(G.reason=Y,G.filename=T.source,G.line=R,G.column=O,G.source=x,!T.silent)throw G}function J(Y){var G=Y.exec(x);if(G){var P=G[0];return j(P),x=x.slice(P.length),G}}function $(){J(r)}function B(Y){var G;for(Y=Y||[];G=U();)G!==!1&&Y.push(G);return Y}function U(){var Y=z();if(!(d!=x.charAt(0)||g!=x.charAt(1))){for(var G=2;v!=x.charAt(G)&&(g!=x.charAt(G)||d!=x.charAt(G+1));)++G;if(G+=2,v===x.charAt(G-1))return _("End of comment missing");var P=x.slice(2,G-2);return O+=2,j(P),x=x.slice(G),O+=2,Y({type:y,comment:P})}}function W(){var Y=z(),G=J(a);if(G){if(U(),!J(o))return _("property missing ':'");var P=J(s),k=Y({type:S,property:A(G[0].replace(e,v)),value:P?A(P[0].replace(e,v)):v});return J(c),k}}function K(){var Y=[];B(Y);for(var G;G=W();)G!==!1&&(Y.push(G),B(Y));return Y}return $(),K()}function A(x){return x?x.replace(f,v):v}return lm=w,lm}var Zb;function RN(){if(Zb)return Zo;Zb=1;var e=Zo&&Zo.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(Zo,"__esModule",{value:!0}),Zo.default=r;const t=e(TN());function r(a,o){let s=null;if(!a||typeof a!="string")return s;const c=(0,t.default)(a),f=typeof o=="function";return c.forEach(h=>{if(h.type!=="declaration")return;const{property:d,value:g}=h;f?o(d,g,h):g&&(s=s||{},s[d]=g)}),s}return Zo}var Cs={},e2;function ON(){if(e2)return Cs;e2=1,Object.defineProperty(Cs,"__esModule",{value:!0}),Cs.camelCase=void 0;var e=/^--[a-zA-Z0-9_-]+$/,t=/-([a-z])/g,r=/^[^-]+$/,a=/^-(webkit|moz|ms|o|khtml)-/,o=/^-(ms)-/,s=function(d){return!d||r.test(d)||e.test(d)},c=function(d,g){return g.toUpperCase()},f=function(d,g){return"".concat(g,"-")},h=function(d,g){return g===void 0&&(g={}),s(d)?d:(d=d.toLowerCase(),g.reactCompat?d=d.replace(o,f):d=d.replace(a,f),d.replace(t,c))};return Cs.camelCase=h,Cs}var ws,t2;function MN(){if(t2)return ws;t2=1;var e=ws&&ws.__importDefault||function(o){return o&&o.__esModule?o:{default:o}},t=e(RN()),r=ON();function a(o,s){var c={};return!o||typeof o!="string"||(0,t.default)(o,function(f,h){f&&h&&(c[(0,r.camelCase)(f,s)]=h)}),c}return a.default=a,ws=a,ws}var NN=MN();const DN=Ys(NN),jw=Hw("end"),Sp=Hw("start");function Hw(e){return t;function t(r){const a=r&&r.position&&r.position[e]||{};if(typeof a.line=="number"&&a.line>0&&typeof a.column=="number"&&a.column>0)return{line:a.line,column:a.column,offset:typeof a.offset=="number"&&a.offset>-1?a.offset:void 0}}}function PN(e){const t=Sp(e),r=jw(e);if(t&&r)return{start:t,end:r}}function Ds(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?n2(e.position):"start"in e||"end"in e?n2(e):"line"in e||"column"in e?zg(e):""}function zg(e){return r2(e&&e.line)+":"+r2(e&&e.column)}function n2(e){return zg(e&&e.start)+"-"+zg(e&&e.end)}function r2(e){return e&&typeof e=="number"?e:1}class Rn extends Error{constructor(t,r,a){super(),typeof r=="string"&&(a=r,r=void 0);let o="",s={},c=!1;if(r&&("line"in r&&"column"in r?s={place:r}:"start"in r&&"end"in r?s={place:r}:"type"in r?s={ancestors:[r],place:r.position}:s={...r}),typeof t=="string"?o=t:!s.cause&&t&&(c=!0,o=t.message,s.cause=t),!s.ruleId&&!s.source&&typeof a=="string"){const h=a.indexOf(":");h===-1?s.ruleId=a:(s.source=a.slice(0,h),s.ruleId=a.slice(h+1))}if(!s.place&&s.ancestors&&s.ancestors){const h=s.ancestors[s.ancestors.length-1];h&&(s.place=h.position)}const f=s.place&&"start"in s.place?s.place.start:s.place;this.ancestors=s.ancestors||void 0,this.cause=s.cause||void 0,this.column=f?f.column:void 0,this.fatal=void 0,this.file="",this.message=o,this.line=f?f.line:void 0,this.name=Ds(s.place)||"1:1",this.place=s.place||void 0,this.reason=this.message,this.ruleId=s.ruleId||void 0,this.source=s.source||void 0,this.stack=c&&s.cause&&typeof s.cause.stack=="string"?s.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}Rn.prototype.file="";Rn.prototype.name="";Rn.prototype.reason="";Rn.prototype.message="";Rn.prototype.stack="";Rn.prototype.column=void 0;Rn.prototype.line=void 0;Rn.prototype.ancestors=void 0;Rn.prototype.cause=void 0;Rn.prototype.fatal=void 0;Rn.prototype.place=void 0;Rn.prototype.ruleId=void 0;Rn.prototype.source=void 0;const Cp={}.hasOwnProperty,zN=new Map,_N=/[A-Z]/g,$N=new Set(["table","tbody","thead","tfoot","tr"]),kN=new Set(["td","th"]),Bw="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function LN(e,t){if(!t||t.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const r=t.filePath||void 0;let a;if(t.development){if(typeof t.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");a=GN(r,t.jsxDEV)}else{if(typeof t.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof t.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");a=UN(r,t.jsx,t.jsxs)}const o={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:a,elementAttributeNameCase:t.elementAttributeNameCase||"react",evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:r,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:t.passKeys!==!1,passNode:t.passNode||!1,schema:t.space==="svg"?bp:EN,stylePropertyNameCase:t.stylePropertyNameCase||"dom",tableCellAlignToStyle:t.tableCellAlignToStyle!==!1},s=Fw(o,e,void 0);return s&&typeof s!="string"?s:o.create(e,o.Fragment,{children:s||void 0},void 0)}function Fw(e,t,r){if(t.type==="element")return jN(e,t,r);if(t.type==="mdxFlowExpression"||t.type==="mdxTextExpression")return HN(e,t);if(t.type==="mdxJsxFlowElement"||t.type==="mdxJsxTextElement")return FN(e,t,r);if(t.type==="mdxjsEsm")return BN(e,t);if(t.type==="root")return IN(e,t,r);if(t.type==="text")return VN(e,t)}function jN(e,t,r){const a=e.schema;let o=a;t.tagName.toLowerCase()==="svg"&&a.space==="html"&&(o=bp,e.schema=o),e.ancestors.push(t);const s=Vw(e,t.tagName,!1),c=qN(e,t);let f=xp(e,t);return $N.has(t.tagName)&&(f=f.filter(function(h){return typeof h=="string"?!mN(h):!0})),Iw(e,c,s,t),wp(c,f),e.ancestors.pop(),e.schema=a,e.create(t,s,c,r)}function HN(e,t){if(t.data&&t.data.estree&&e.evaluater){const a=t.data.estree.body[0];return a.type,e.evaluater.evaluateExpression(a.expression)}Js(e,t.position)}function BN(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);Js(e,t.position)}function FN(e,t,r){const a=e.schema;let o=a;t.name==="svg"&&a.space==="html"&&(o=bp,e.schema=o),e.ancestors.push(t);const s=t.name===null?e.Fragment:Vw(e,t.name,!0),c=WN(e,t),f=xp(e,t);return Iw(e,c,s,t),wp(c,f),e.ancestors.pop(),e.schema=a,e.create(t,s,c,r)}function IN(e,t,r){const a={};return wp(a,xp(e,t)),e.create(t,e.Fragment,a,r)}function VN(e,t){return t.value}function Iw(e,t,r,a){typeof r!="string"&&r!==e.Fragment&&e.passNode&&(t.node=a)}function wp(e,t){if(t.length>0){const r=t.length>1?t:t[0];r&&(e.children=r)}}function UN(e,t,r){return a;function a(o,s,c,f){const d=Array.isArray(c.children)?r:t;return f?d(s,c,f):d(s,c)}}function GN(e,t){return r;function r(a,o,s,c){const f=Array.isArray(s.children),h=Sp(a);return t(o,s,c,f,{columnNumber:h?h.column-1:void 0,fileName:e,lineNumber:h?h.line:void 0},void 0)}}function qN(e,t){const r={};let a,o;for(o in t.properties)if(o!=="children"&&Cp.call(t.properties,o)){const s=JN(e,o,t.properties[o]);if(s){const[c,f]=s;e.tableCellAlignToStyle&&c==="align"&&typeof f=="string"&&kN.has(t.tagName)?a=f:r[c]=f}}if(a){const s=r.style||(r.style={});s[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=a}return r}function WN(e,t){const r={};for(const a of t.attributes)if(a.type==="mdxJsxExpressionAttribute")if(a.data&&a.data.estree&&e.evaluater){const s=a.data.estree.body[0];s.type;const c=s.expression;c.type;const f=c.properties[0];f.type,Object.assign(r,e.evaluater.evaluateExpression(f.argument))}else Js(e,t.position);else{const o=a.name;let s;if(a.value&&typeof a.value=="object")if(a.value.data&&a.value.data.estree&&e.evaluater){const f=a.value.data.estree.body[0];f.type,s=e.evaluater.evaluateExpression(f.expression)}else Js(e,t.position);else s=a.value===null?!0:a.value;r[o]=s}return r}function xp(e,t){const r=[];let a=-1;const o=e.passKeys?new Map:zN;for(;++a<t.children.length;){const s=t.children[a];let c;if(e.passKeys){const h=s.type==="element"?s.tagName:s.type==="mdxJsxFlowElement"||s.type==="mdxJsxTextElement"?s.name:void 0;if(h){const d=o.get(h)||0;c=h+"-"+d,o.set(h,d+1)}}const f=Fw(e,s,c);f!==void 0&&r.push(f)}return r}function JN(e,t,r){const a=CN(e.schema,t);if(!(r==null||typeof r=="number"&&Number.isNaN(r))){if(Array.isArray(r)&&(r=a.commaSeparated?uN(r):AN(r)),a.property==="style"){let o=typeof r=="object"?r:YN(e,String(r));return e.stylePropertyNameCase==="css"&&(o=XN(o)),["style",o]}return[e.elementAttributeNameCase==="react"&&a.space?yN[a.property]||a.property:a.attribute,r]}}function YN(e,t){try{return DN(t,{reactCompat:!0})}catch(r){if(e.ignoreInvalidStyle)return{};const a=r,o=new Rn("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:a,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw o.file=e.filePath||void 0,o.url=Bw+"#cannot-parse-style-attribute",o}}function Vw(e,t,r){let a;if(!r)a={type:"Literal",value:t};else if(t.includes(".")){const o=t.split(".");let s=-1,c;for(;++s<o.length;){const f=Jb(o[s])?{type:"Identifier",name:o[s]}:{type:"Literal",value:o[s]};c=c?{type:"MemberExpression",object:c,property:f,computed:!!(s&&f.type==="Literal"),optional:!1}:f}a=c}else a=Jb(t)&&!/^[a-z]/.test(t)?{type:"Identifier",name:t}:{type:"Literal",value:t};if(a.type==="Literal"){const o=a.value;return Cp.call(e.components,o)?e.components[o]:o}if(e.evaluater)return e.evaluater.evaluateExpression(a);Js(e)}function Js(e,t){const r=new Rn("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw r.file=e.filePath||void 0,r.url=Bw+"#cannot-handle-mdx-estrees-without-createevaluater",r}function XN(e){const t={};let r;for(r in e)Cp.call(e,r)&&(t[KN(r)]=e[r]);return t}function KN(e){let t=e.replace(_N,QN);return t.slice(0,3)==="ms-"&&(t="-"+t),t}function QN(e){return"-"+e.toLowerCase()}const sm={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},ZN={};function eD(e,t){const r=ZN,a=typeof r.includeImageAlt=="boolean"?r.includeImageAlt:!0,o=typeof r.includeHtml=="boolean"?r.includeHtml:!0;return Uw(e,a,o)}function Uw(e,t,r){if(tD(e)){if("value"in e)return e.type==="html"&&!r?"":e.value;if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return a2(e.children,t,r)}return Array.isArray(e)?a2(e,t,r):""}function a2(e,t,r){const a=[];let o=-1;for(;++o<e.length;)a[o]=Uw(e[o],t,r);return a.join("")}function tD(e){return!!(e&&typeof e=="object")}const i2=document.createElement("i");function Ep(e){const t="&"+e+";";i2.innerHTML=t;const r=i2.textContent;return r.charCodeAt(r.length-1)===59&&e!=="semi"||r===t?!1:r}function ha(e,t,r,a){const o=e.length;let s=0,c;if(t<0?t=-t>o?0:o+t:t=t>o?o:t,r=r>0?r:0,a.length<1e4)c=Array.from(a),c.unshift(t,r),e.splice(...c);else for(r&&e.splice(t,r);s<a.length;)c=a.slice(s,s+1e4),c.unshift(t,0),e.splice(...c),s+=1e4,t+=1e4}function Mr(e,t){return e.length>0?(ha(e,e.length,0,t),e):t}const o2={}.hasOwnProperty;function nD(e){const t={};let r=-1;for(;++r<e.length;)rD(t,e[r]);return t}function rD(e,t){let r;for(r in t){const o=(o2.call(e,r)?e[r]:void 0)||(e[r]={}),s=t[r];let c;if(s)for(c in s){o2.call(o,c)||(o[c]=[]);const f=s[c];aD(o[c],Array.isArray(f)?f:f?[f]:[])}}}function aD(e,t){let r=-1;const a=[];for(;++r<t.length;)(t[r].add==="after"?e:a).push(t[r]);ha(e,0,0,a)}function Gw(e,t){const r=Number.parseInt(e,t);return r<9||r===11||r>13&&r<32||r>126&&r<160||r>55295&&r<57344||r>64975&&r<65008||(r&65535)===65535||(r&65535)===65534||r>1114111?"�":String.fromCodePoint(r)}function ll(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const ca=Ci(/[A-Za-z]/),ar=Ci(/[\dA-Za-z]/),iD=Ci(/[#-'*+\--9=?A-Z^-~]/);function _g(e){return e!==null&&(e<32||e===127)}const $g=Ci(/\d/),oD=Ci(/[\dA-Fa-f]/),lD=Ci(/[!-/:-@[-`{-~]/);function Ie(e){return e!==null&&e<-2}function In(e){return e!==null&&(e<0||e===32)}function St(e){return e===-2||e===-1||e===32}const sD=Ci(new RegExp("\\p{P}|\\p{S}","u")),uD=Ci(/\s/);function Ci(e){return t;function t(r){return r!==null&&r>-1&&e.test(String.fromCharCode(r))}}function Cl(e){const t=[];let r=-1,a=0,o=0;for(;++r<e.length;){const s=e.charCodeAt(r);let c="";if(s===37&&ar(e.charCodeAt(r+1))&&ar(e.charCodeAt(r+2)))o=2;else if(s<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(s))||(c=String.fromCharCode(s));else if(s>55295&&s<57344){const f=e.charCodeAt(r+1);s<56320&&f>56319&&f<57344?(c=String.fromCharCode(s,f),o=1):c="�"}else c=String.fromCharCode(s);c&&(t.push(e.slice(a,r),encodeURIComponent(c)),a=r+o+1,c=""),o&&(r+=o,o=0)}return t.join("")+e.slice(a)}function $t(e,t,r,a){const o=a?a-1:Number.POSITIVE_INFINITY;let s=0;return c;function c(h){return St(h)?(e.enter(r),f(h)):t(h)}function f(h){return St(h)&&s++<o?(e.consume(h),f):(e.exit(r),t(h))}}const cD={tokenize:fD};function fD(e){const t=e.attempt(this.parser.constructs.contentInitial,a,o);let r;return t;function a(f){if(f===null){e.consume(f);return}return e.enter("lineEnding"),e.consume(f),e.exit("lineEnding"),$t(e,t,"linePrefix")}function o(f){return e.enter("paragraph"),s(f)}function s(f){const h=e.enter("chunkText",{contentType:"text",previous:r});return r&&(r.next=h),r=h,c(f)}function c(f){if(f===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(f);return}return Ie(f)?(e.consume(f),e.exit("chunkText"),s):(e.consume(f),c)}}const dD={tokenize:hD},l2={tokenize:mD};function hD(e){const t=this,r=[];let a=0,o,s,c;return f;function f(O){if(a<r.length){const j=r[a];return t.containerState=j[1],e.attempt(j[0].continuation,h,d)(O)}return d(O)}function h(O){if(a++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,o&&R();const j=t.events.length;let z=j,N;for(;z--;)if(t.events[z][0]==="exit"&&t.events[z][1].type==="chunkFlow"){N=t.events[z][1].end;break}T(a);let _=j;for(;_<t.events.length;)t.events[_][1].end={...N},_++;return ha(t.events,z+1,0,t.events.slice(j)),t.events.length=_,d(O)}return f(O)}function d(O){if(a===r.length){if(!o)return y(O);if(o.currentConstruct&&o.currentConstruct.concrete)return w(O);t.interrupt=!!(o.currentConstruct&&!o._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(l2,g,v)(O)}function g(O){return o&&R(),T(a),y(O)}function v(O){return t.parser.lazy[t.now().line]=a!==r.length,c=t.now().offset,w(O)}function y(O){return t.containerState={},e.attempt(l2,S,w)(O)}function S(O){return a++,r.push([t.currentConstruct,t.containerState]),y(O)}function w(O){if(O===null){o&&R(),T(0),e.consume(O);return}return o=o||t.parser.flow(t.now()),e.enter("chunkFlow",{_tokenizer:o,contentType:"flow",previous:s}),A(O)}function A(O){if(O===null){x(e.exit("chunkFlow"),!0),T(0),e.consume(O);return}return Ie(O)?(e.consume(O),x(e.exit("chunkFlow")),a=0,t.interrupt=void 0,f):(e.consume(O),A)}function x(O,j){const z=t.sliceStream(O);if(j&&z.push(null),O.previous=s,s&&(s.next=O),s=O,o.defineSkip(O.start),o.write(z),t.parser.lazy[O.start.line]){let N=o.events.length;for(;N--;)if(o.events[N][1].start.offset<c&&(!o.events[N][1].end||o.events[N][1].end.offset>c))return;const _=t.events.length;let J=_,$,B;for(;J--;)if(t.events[J][0]==="exit"&&t.events[J][1].type==="chunkFlow"){if($){B=t.events[J][1].end;break}$=!0}for(T(a),N=_;N<t.events.length;)t.events[N][1].end={...B},N++;ha(t.events,J+1,0,t.events.slice(_)),t.events.length=N}}function T(O){let j=r.length;for(;j-- >O;){const z=r[j];t.containerState=z[1],z[0].exit.call(t,e)}r.length=O}function R(){o.write([null]),s=void 0,o=void 0,t.containerState._closeFlow=void 0}}function mD(e,t,r){return $t(e,e.attempt(this.parser.constructs.document,t,r),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function s2(e){if(e===null||In(e)||uD(e))return 1;if(sD(e))return 2}function Ap(e,t,r){const a=[];let o=-1;for(;++o<e.length;){const s=e[o].resolveAll;s&&!a.includes(s)&&(t=s(t,r),a.push(s))}return t}const kg={name:"attention",resolveAll:gD,tokenize:pD};function gD(e,t){let r=-1,a,o,s,c,f,h,d,g;for(;++r<e.length;)if(e[r][0]==="enter"&&e[r][1].type==="attentionSequence"&&e[r][1]._close){for(a=r;a--;)if(e[a][0]==="exit"&&e[a][1].type==="attentionSequence"&&e[a][1]._open&&t.sliceSerialize(e[a][1]).charCodeAt(0)===t.sliceSerialize(e[r][1]).charCodeAt(0)){if((e[a][1]._close||e[r][1]._open)&&(e[r][1].end.offset-e[r][1].start.offset)%3&&!((e[a][1].end.offset-e[a][1].start.offset+e[r][1].end.offset-e[r][1].start.offset)%3))continue;h=e[a][1].end.offset-e[a][1].start.offset>1&&e[r][1].end.offset-e[r][1].start.offset>1?2:1;const v={...e[a][1].end},y={...e[r][1].start};u2(v,-h),u2(y,h),c={type:h>1?"strongSequence":"emphasisSequence",start:v,end:{...e[a][1].end}},f={type:h>1?"strongSequence":"emphasisSequence",start:{...e[r][1].start},end:y},s={type:h>1?"strongText":"emphasisText",start:{...e[a][1].end},end:{...e[r][1].start}},o={type:h>1?"strong":"emphasis",start:{...c.start},end:{...f.end}},e[a][1].end={...c.start},e[r][1].start={...f.end},d=[],e[a][1].end.offset-e[a][1].start.offset&&(d=Mr(d,[["enter",e[a][1],t],["exit",e[a][1],t]])),d=Mr(d,[["enter",o,t],["enter",c,t],["exit",c,t],["enter",s,t]]),d=Mr(d,Ap(t.parser.constructs.insideSpan.null,e.slice(a+1,r),t)),d=Mr(d,[["exit",s,t],["enter",f,t],["exit",f,t],["exit",o,t]]),e[r][1].end.offset-e[r][1].start.offset?(g=2,d=Mr(d,[["enter",e[r][1],t],["exit",e[r][1],t]])):g=0,ha(e,a-1,r-a+3,d),r=a+d.length-g-2;break}}for(r=-1;++r<e.length;)e[r][1].type==="attentionSequence"&&(e[r][1].type="data");return e}function pD(e,t){const r=this.parser.constructs.attentionMarkers.null,a=this.previous,o=s2(a);let s;return c;function c(h){return s=h,e.enter("attentionSequence"),f(h)}function f(h){if(h===s)return e.consume(h),f;const d=e.exit("attentionSequence"),g=s2(h),v=!g||g===2&&o||r.includes(h),y=!o||o===2&&g||r.includes(a);return d._open=!!(s===42?v:v&&(o||!y)),d._close=!!(s===42?y:y&&(g||!v)),t(h)}}function u2(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}const vD={name:"autolink",tokenize:yD};function yD(e,t,r){let a=0;return o;function o(S){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(S),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),s}function s(S){return ca(S)?(e.consume(S),c):S===64?r(S):d(S)}function c(S){return S===43||S===45||S===46||ar(S)?(a=1,f(S)):d(S)}function f(S){return S===58?(e.consume(S),a=0,h):(S===43||S===45||S===46||ar(S))&&a++<32?(e.consume(S),f):(a=0,d(S))}function h(S){return S===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(S),e.exit("autolinkMarker"),e.exit("autolink"),t):S===null||S===32||S===60||_g(S)?r(S):(e.consume(S),h)}function d(S){return S===64?(e.consume(S),g):iD(S)?(e.consume(S),d):r(S)}function g(S){return ar(S)?v(S):r(S)}function v(S){return S===46?(e.consume(S),a=0,g):S===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(S),e.exit("autolinkMarker"),e.exit("autolink"),t):y(S)}function y(S){if((S===45||ar(S))&&a++<63){const w=S===45?y:v;return e.consume(S),w}return r(S)}}const Rf={partial:!0,tokenize:bD};function bD(e,t,r){return a;function a(s){return St(s)?$t(e,o,"linePrefix")(s):o(s)}function o(s){return s===null||Ie(s)?t(s):r(s)}}const qw={continuation:{tokenize:CD},exit:wD,name:"blockQuote",tokenize:SD};function SD(e,t,r){const a=this;return o;function o(c){if(c===62){const f=a.containerState;return f.open||(e.enter("blockQuote",{_container:!0}),f.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(c),e.exit("blockQuoteMarker"),s}return r(c)}function s(c){return St(c)?(e.enter("blockQuotePrefixWhitespace"),e.consume(c),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(c))}}function CD(e,t,r){const a=this;return o;function o(c){return St(c)?$t(e,s,"linePrefix",a.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(c):s(c)}function s(c){return e.attempt(qw,t,r)(c)}}function wD(e){e.exit("blockQuote")}const Ww={name:"characterEscape",tokenize:xD};function xD(e,t,r){return a;function a(s){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(s),e.exit("escapeMarker"),o}function o(s){return lD(s)?(e.enter("characterEscapeValue"),e.consume(s),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):r(s)}}const Jw={name:"characterReference",tokenize:ED};function ED(e,t,r){const a=this;let o=0,s,c;return f;function f(v){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(v),e.exit("characterReferenceMarker"),h}function h(v){return v===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(v),e.exit("characterReferenceMarkerNumeric"),d):(e.enter("characterReferenceValue"),s=31,c=ar,g(v))}function d(v){return v===88||v===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(v),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),s=6,c=oD,g):(e.enter("characterReferenceValue"),s=7,c=$g,g(v))}function g(v){if(v===59&&o){const y=e.exit("characterReferenceValue");return c===ar&&!Ep(a.sliceSerialize(y))?r(v):(e.enter("characterReferenceMarker"),e.consume(v),e.exit("characterReferenceMarker"),e.exit("characterReference"),t)}return c(v)&&o++<s?(e.consume(v),g):r(v)}}const c2={partial:!0,tokenize:TD},f2={concrete:!0,name:"codeFenced",tokenize:AD};function AD(e,t,r){const a=this,o={partial:!0,tokenize:z};let s=0,c=0,f;return h;function h(N){return d(N)}function d(N){const _=a.events[a.events.length-1];return s=_&&_[1].type==="linePrefix"?_[2].sliceSerialize(_[1],!0).length:0,f=N,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),g(N)}function g(N){return N===f?(c++,e.consume(N),g):c<3?r(N):(e.exit("codeFencedFenceSequence"),St(N)?$t(e,v,"whitespace")(N):v(N))}function v(N){return N===null||Ie(N)?(e.exit("codeFencedFence"),a.interrupt?t(N):e.check(c2,A,j)(N)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),y(N))}function y(N){return N===null||Ie(N)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),v(N)):St(N)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),$t(e,S,"whitespace")(N)):N===96&&N===f?r(N):(e.consume(N),y)}function S(N){return N===null||Ie(N)?v(N):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),w(N))}function w(N){return N===null||Ie(N)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),v(N)):N===96&&N===f?r(N):(e.consume(N),w)}function A(N){return e.attempt(o,j,x)(N)}function x(N){return e.enter("lineEnding"),e.consume(N),e.exit("lineEnding"),T}function T(N){return s>0&&St(N)?$t(e,R,"linePrefix",s+1)(N):R(N)}function R(N){return N===null||Ie(N)?e.check(c2,A,j)(N):(e.enter("codeFlowValue"),O(N))}function O(N){return N===null||Ie(N)?(e.exit("codeFlowValue"),R(N)):(e.consume(N),O)}function j(N){return e.exit("codeFenced"),t(N)}function z(N,_,J){let $=0;return B;function B(G){return N.enter("lineEnding"),N.consume(G),N.exit("lineEnding"),U}function U(G){return N.enter("codeFencedFence"),St(G)?$t(N,W,"linePrefix",a.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(G):W(G)}function W(G){return G===f?(N.enter("codeFencedFenceSequence"),K(G)):J(G)}function K(G){return G===f?($++,N.consume(G),K):$>=c?(N.exit("codeFencedFenceSequence"),St(G)?$t(N,Y,"whitespace")(G):Y(G)):J(G)}function Y(G){return G===null||Ie(G)?(N.exit("codeFencedFence"),_(G)):J(G)}}}function TD(e,t,r){const a=this;return o;function o(c){return c===null?r(c):(e.enter("lineEnding"),e.consume(c),e.exit("lineEnding"),s)}function s(c){return a.parser.lazy[a.now().line]?r(c):t(c)}}const um={name:"codeIndented",tokenize:OD},RD={partial:!0,tokenize:MD};function OD(e,t,r){const a=this;return o;function o(d){return e.enter("codeIndented"),$t(e,s,"linePrefix",5)(d)}function s(d){const g=a.events[a.events.length-1];return g&&g[1].type==="linePrefix"&&g[2].sliceSerialize(g[1],!0).length>=4?c(d):r(d)}function c(d){return d===null?h(d):Ie(d)?e.attempt(RD,c,h)(d):(e.enter("codeFlowValue"),f(d))}function f(d){return d===null||Ie(d)?(e.exit("codeFlowValue"),c(d)):(e.consume(d),f)}function h(d){return e.exit("codeIndented"),t(d)}}function MD(e,t,r){const a=this;return o;function o(c){return a.parser.lazy[a.now().line]?r(c):Ie(c)?(e.enter("lineEnding"),e.consume(c),e.exit("lineEnding"),o):$t(e,s,"linePrefix",5)(c)}function s(c){const f=a.events[a.events.length-1];return f&&f[1].type==="linePrefix"&&f[2].sliceSerialize(f[1],!0).length>=4?t(c):Ie(c)?o(c):r(c)}}const ND={name:"codeText",previous:PD,resolve:DD,tokenize:zD};function DD(e){let t=e.length-4,r=3,a,o;if((e[r][1].type==="lineEnding"||e[r][1].type==="space")&&(e[t][1].type==="lineEnding"||e[t][1].type==="space")){for(a=r;++a<t;)if(e[a][1].type==="codeTextData"){e[r][1].type="codeTextPadding",e[t][1].type="codeTextPadding",r+=2,t-=2;break}}for(a=r-1,t++;++a<=t;)o===void 0?a!==t&&e[a][1].type!=="lineEnding"&&(o=a):(a===t||e[a][1].type==="lineEnding")&&(e[o][1].type="codeTextData",a!==o+2&&(e[o][1].end=e[a-1][1].end,e.splice(o+2,a-o-2),t-=a-o-2,a=o+2),o=void 0);return e}function PD(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function zD(e,t,r){let a=0,o,s;return c;function c(v){return e.enter("codeText"),e.enter("codeTextSequence"),f(v)}function f(v){return v===96?(e.consume(v),a++,f):(e.exit("codeTextSequence"),h(v))}function h(v){return v===null?r(v):v===32?(e.enter("space"),e.consume(v),e.exit("space"),h):v===96?(s=e.enter("codeTextSequence"),o=0,g(v)):Ie(v)?(e.enter("lineEnding"),e.consume(v),e.exit("lineEnding"),h):(e.enter("codeTextData"),d(v))}function d(v){return v===null||v===32||v===96||Ie(v)?(e.exit("codeTextData"),h(v)):(e.consume(v),d)}function g(v){return v===96?(e.consume(v),o++,g):o===a?(e.exit("codeTextSequence"),e.exit("codeText"),t(v)):(s.type="codeTextData",d(v))}}class _D{constructor(t){this.left=t?[...t]:[],this.right=[]}get(t){if(t<0||t>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+t+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return t<this.left.length?this.left[t]:this.right[this.right.length-t+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(t,r){const a=r??Number.POSITIVE_INFINITY;return a<this.left.length?this.left.slice(t,a):t>this.left.length?this.right.slice(this.right.length-a+this.left.length,this.right.length-t+this.left.length).reverse():this.left.slice(t).concat(this.right.slice(this.right.length-a+this.left.length).reverse())}splice(t,r,a){const o=r||0;this.setCursor(Math.trunc(t));const s=this.right.splice(this.right.length-o,Number.POSITIVE_INFINITY);return a&&xs(this.left,a),s.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(t){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(t)}pushMany(t){this.setCursor(Number.POSITIVE_INFINITY),xs(this.left,t)}unshift(t){this.setCursor(0),this.right.push(t)}unshiftMany(t){this.setCursor(0),xs(this.right,t.reverse())}setCursor(t){if(!(t===this.left.length||t>this.left.length&&this.right.length===0||t<0&&this.left.length===0))if(t<this.left.length){const r=this.left.splice(t,Number.POSITIVE_INFINITY);xs(this.right,r.reverse())}else{const r=this.right.splice(this.left.length+this.right.length-t,Number.POSITIVE_INFINITY);xs(this.left,r.reverse())}}}function xs(e,t){let r=0;if(t.length<1e4)e.push(...t);else for(;r<t.length;)e.push(...t.slice(r,r+1e4)),r+=1e4}function Yw(e){const t={};let r=-1,a,o,s,c,f,h,d;const g=new _D(e);for(;++r<g.length;){for(;r in t;)r=t[r];if(a=g.get(r),r&&a[1].type==="chunkFlow"&&g.get(r-1)[1].type==="listItemPrefix"&&(h=a[1]._tokenizer.events,s=0,s<h.length&&h[s][1].type==="lineEndingBlank"&&(s+=2),s<h.length&&h[s][1].type==="content"))for(;++s<h.length&&h[s][1].type!=="content";)h[s][1].type==="chunkText"&&(h[s][1]._isInFirstContentOfListItem=!0,s++);if(a[0]==="enter")a[1].contentType&&(Object.assign(t,$D(g,r)),r=t[r],d=!0);else if(a[1]._container){for(s=r,o=void 0;s--;)if(c=g.get(s),c[1].type==="lineEnding"||c[1].type==="lineEndingBlank")c[0]==="enter"&&(o&&(g.get(o)[1].type="lineEndingBlank"),c[1].type="lineEnding",o=s);else if(!(c[1].type==="linePrefix"||c[1].type==="listItemIndent"))break;o&&(a[1].end={...g.get(o)[1].start},f=g.slice(o,r),f.unshift(a),g.splice(o,r-o+1,f))}}return ha(e,0,Number.POSITIVE_INFINITY,g.slice(0)),!d}function $D(e,t){const r=e.get(t)[1],a=e.get(t)[2];let o=t-1;const s=[];let c=r._tokenizer;c||(c=a.parser[r.contentType](r.start),r._contentTypeTextTrailing&&(c._contentTypeTextTrailing=!0));const f=c.events,h=[],d={};let g,v,y=-1,S=r,w=0,A=0;const x=[A];for(;S;){for(;e.get(++o)[1]!==S;);s.push(o),S._tokenizer||(g=a.sliceStream(S),S.next||g.push(null),v&&c.defineSkip(S.start),S._isInFirstContentOfListItem&&(c._gfmTasklistFirstContentOfListItem=!0),c.write(g),S._isInFirstContentOfListItem&&(c._gfmTasklistFirstContentOfListItem=void 0)),v=S,S=S.next}for(S=r;++y<f.length;)f[y][0]==="exit"&&f[y-1][0]==="enter"&&f[y][1].type===f[y-1][1].type&&f[y][1].start.line!==f[y][1].end.line&&(A=y+1,x.push(A),S._tokenizer=void 0,S.previous=void 0,S=S.next);for(c.events=[],S?(S._tokenizer=void 0,S.previous=void 0):x.pop(),y=x.length;y--;){const T=f.slice(x[y],x[y+1]),R=s.pop();h.push([R,R+T.length-1]),e.splice(R,2,T)}for(h.reverse(),y=-1;++y<h.length;)d[w+h[y][0]]=w+h[y][1],w+=h[y][1]-h[y][0]-1;return d}const kD={resolve:jD,tokenize:HD},LD={partial:!0,tokenize:BD};function jD(e){return Yw(e),e}function HD(e,t){let r;return a;function a(f){return e.enter("content"),r=e.enter("chunkContent",{contentType:"content"}),o(f)}function o(f){return f===null?s(f):Ie(f)?e.check(LD,c,s)(f):(e.consume(f),o)}function s(f){return e.exit("chunkContent"),e.exit("content"),t(f)}function c(f){return e.consume(f),e.exit("chunkContent"),r.next=e.enter("chunkContent",{contentType:"content",previous:r}),r=r.next,o}}function BD(e,t,r){const a=this;return o;function o(c){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(c),e.exit("lineEnding"),$t(e,s,"linePrefix")}function s(c){if(c===null||Ie(c))return r(c);const f=a.events[a.events.length-1];return!a.parser.constructs.disable.null.includes("codeIndented")&&f&&f[1].type==="linePrefix"&&f[2].sliceSerialize(f[1],!0).length>=4?t(c):e.interrupt(a.parser.constructs.flow,r,t)(c)}}function Xw(e,t,r,a,o,s,c,f,h){const d=h||Number.POSITIVE_INFINITY;let g=0;return v;function v(T){return T===60?(e.enter(a),e.enter(o),e.enter(s),e.consume(T),e.exit(s),y):T===null||T===32||T===41||_g(T)?r(T):(e.enter(a),e.enter(c),e.enter(f),e.enter("chunkString",{contentType:"string"}),A(T))}function y(T){return T===62?(e.enter(s),e.consume(T),e.exit(s),e.exit(o),e.exit(a),t):(e.enter(f),e.enter("chunkString",{contentType:"string"}),S(T))}function S(T){return T===62?(e.exit("chunkString"),e.exit(f),y(T)):T===null||T===60||Ie(T)?r(T):(e.consume(T),T===92?w:S)}function w(T){return T===60||T===62||T===92?(e.consume(T),S):S(T)}function A(T){return!g&&(T===null||T===41||In(T))?(e.exit("chunkString"),e.exit(f),e.exit(c),e.exit(a),t(T)):g<d&&T===40?(e.consume(T),g++,A):T===41?(e.consume(T),g--,A):T===null||T===32||T===40||_g(T)?r(T):(e.consume(T),T===92?x:A)}function x(T){return T===40||T===41||T===92?(e.consume(T),A):A(T)}}function Kw(e,t,r,a,o,s){const c=this;let f=0,h;return d;function d(S){return e.enter(a),e.enter(o),e.consume(S),e.exit(o),e.enter(s),g}function g(S){return f>999||S===null||S===91||S===93&&!h||S===94&&!f&&"_hiddenFootnoteSupport"in c.parser.constructs?r(S):S===93?(e.exit(s),e.enter(o),e.consume(S),e.exit(o),e.exit(a),t):Ie(S)?(e.enter("lineEnding"),e.consume(S),e.exit("lineEnding"),g):(e.enter("chunkString",{contentType:"string"}),v(S))}function v(S){return S===null||S===91||S===93||Ie(S)||f++>999?(e.exit("chunkString"),g(S)):(e.consume(S),h||(h=!St(S)),S===92?y:v)}function y(S){return S===91||S===92||S===93?(e.consume(S),f++,v):v(S)}}function Qw(e,t,r,a,o,s){let c;return f;function f(y){return y===34||y===39||y===40?(e.enter(a),e.enter(o),e.consume(y),e.exit(o),c=y===40?41:y,h):r(y)}function h(y){return y===c?(e.enter(o),e.consume(y),e.exit(o),e.exit(a),t):(e.enter(s),d(y))}function d(y){return y===c?(e.exit(s),h(c)):y===null?r(y):Ie(y)?(e.enter("lineEnding"),e.consume(y),e.exit("lineEnding"),$t(e,d,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),g(y))}function g(y){return y===c||y===null||Ie(y)?(e.exit("chunkString"),d(y)):(e.consume(y),y===92?v:g)}function v(y){return y===c||y===92?(e.consume(y),g):g(y)}}function Ps(e,t){let r;return a;function a(o){return Ie(o)?(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),r=!0,a):St(o)?$t(e,a,r?"linePrefix":"lineSuffix")(o):t(o)}}const FD={name:"definition",tokenize:VD},ID={partial:!0,tokenize:UD};function VD(e,t,r){const a=this;let o;return s;function s(S){return e.enter("definition"),c(S)}function c(S){return Kw.call(a,e,f,r,"definitionLabel","definitionLabelMarker","definitionLabelString")(S)}function f(S){return o=ll(a.sliceSerialize(a.events[a.events.length-1][1]).slice(1,-1)),S===58?(e.enter("definitionMarker"),e.consume(S),e.exit("definitionMarker"),h):r(S)}function h(S){return In(S)?Ps(e,d)(S):d(S)}function d(S){return Xw(e,g,r,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(S)}function g(S){return e.attempt(ID,v,v)(S)}function v(S){return St(S)?$t(e,y,"whitespace")(S):y(S)}function y(S){return S===null||Ie(S)?(e.exit("definition"),a.parser.defined.push(o),t(S)):r(S)}}function UD(e,t,r){return a;function a(f){return In(f)?Ps(e,o)(f):r(f)}function o(f){return Qw(e,s,r,"definitionTitle","definitionTitleMarker","definitionTitleString")(f)}function s(f){return St(f)?$t(e,c,"whitespace")(f):c(f)}function c(f){return f===null||Ie(f)?t(f):r(f)}}const GD={name:"hardBreakEscape",tokenize:qD};function qD(e,t,r){return a;function a(s){return e.enter("hardBreakEscape"),e.consume(s),o}function o(s){return Ie(s)?(e.exit("hardBreakEscape"),t(s)):r(s)}}const WD={name:"headingAtx",resolve:JD,tokenize:YD};function JD(e,t){let r=e.length-2,a=3,o,s;return e[a][1].type==="whitespace"&&(a+=2),r-2>a&&e[r][1].type==="whitespace"&&(r-=2),e[r][1].type==="atxHeadingSequence"&&(a===r-1||r-4>a&&e[r-2][1].type==="whitespace")&&(r-=a+1===r?2:4),r>a&&(o={type:"atxHeadingText",start:e[a][1].start,end:e[r][1].end},s={type:"chunkText",start:e[a][1].start,end:e[r][1].end,contentType:"text"},ha(e,a,r-a+1,[["enter",o,t],["enter",s,t],["exit",s,t],["exit",o,t]])),e}function YD(e,t,r){let a=0;return o;function o(g){return e.enter("atxHeading"),s(g)}function s(g){return e.enter("atxHeadingSequence"),c(g)}function c(g){return g===35&&a++<6?(e.consume(g),c):g===null||In(g)?(e.exit("atxHeadingSequence"),f(g)):r(g)}function f(g){return g===35?(e.enter("atxHeadingSequence"),h(g)):g===null||Ie(g)?(e.exit("atxHeading"),t(g)):St(g)?$t(e,f,"whitespace")(g):(e.enter("atxHeadingText"),d(g))}function h(g){return g===35?(e.consume(g),h):(e.exit("atxHeadingSequence"),f(g))}function d(g){return g===null||g===35||In(g)?(e.exit("atxHeadingText"),f(g)):(e.consume(g),d)}}const XD=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],d2=["pre","script","style","textarea"],KD={concrete:!0,name:"htmlFlow",resolveTo:eP,tokenize:tP},QD={partial:!0,tokenize:rP},ZD={partial:!0,tokenize:nP};function eP(e){let t=e.length;for(;t--&&!(e[t][0]==="enter"&&e[t][1].type==="htmlFlow"););return t>1&&e[t-2][1].type==="linePrefix"&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function tP(e,t,r){const a=this;let o,s,c,f,h;return d;function d(M){return g(M)}function g(M){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(M),v}function v(M){return M===33?(e.consume(M),y):M===47?(e.consume(M),s=!0,A):M===63?(e.consume(M),o=3,a.interrupt?t:C):ca(M)?(e.consume(M),c=String.fromCharCode(M),x):r(M)}function y(M){return M===45?(e.consume(M),o=2,S):M===91?(e.consume(M),o=5,f=0,w):ca(M)?(e.consume(M),o=4,a.interrupt?t:C):r(M)}function S(M){return M===45?(e.consume(M),a.interrupt?t:C):r(M)}function w(M){const H="CDATA[";return M===H.charCodeAt(f++)?(e.consume(M),f===H.length?a.interrupt?t:W:w):r(M)}function A(M){return ca(M)?(e.consume(M),c=String.fromCharCode(M),x):r(M)}function x(M){if(M===null||M===47||M===62||In(M)){const H=M===47,le=c.toLowerCase();return!H&&!s&&d2.includes(le)?(o=1,a.interrupt?t(M):W(M)):XD.includes(c.toLowerCase())?(o=6,H?(e.consume(M),T):a.interrupt?t(M):W(M)):(o=7,a.interrupt&&!a.parser.lazy[a.now().line]?r(M):s?R(M):O(M))}return M===45||ar(M)?(e.consume(M),c+=String.fromCharCode(M),x):r(M)}function T(M){return M===62?(e.consume(M),a.interrupt?t:W):r(M)}function R(M){return St(M)?(e.consume(M),R):B(M)}function O(M){return M===47?(e.consume(M),B):M===58||M===95||ca(M)?(e.consume(M),j):St(M)?(e.consume(M),O):B(M)}function j(M){return M===45||M===46||M===58||M===95||ar(M)?(e.consume(M),j):z(M)}function z(M){return M===61?(e.consume(M),N):St(M)?(e.consume(M),z):O(M)}function N(M){return M===null||M===60||M===61||M===62||M===96?r(M):M===34||M===39?(e.consume(M),h=M,_):St(M)?(e.consume(M),N):J(M)}function _(M){return M===h?(e.consume(M),h=null,$):M===null||Ie(M)?r(M):(e.consume(M),_)}function J(M){return M===null||M===34||M===39||M===47||M===60||M===61||M===62||M===96||In(M)?z(M):(e.consume(M),J)}function $(M){return M===47||M===62||St(M)?O(M):r(M)}function B(M){return M===62?(e.consume(M),U):r(M)}function U(M){return M===null||Ie(M)?W(M):St(M)?(e.consume(M),U):r(M)}function W(M){return M===45&&o===2?(e.consume(M),P):M===60&&o===1?(e.consume(M),k):M===62&&o===4?(e.consume(M),F):M===63&&o===3?(e.consume(M),C):M===93&&o===5?(e.consume(M),ne):Ie(M)&&(o===6||o===7)?(e.exit("htmlFlowData"),e.check(QD,Q,K)(M)):M===null||Ie(M)?(e.exit("htmlFlowData"),K(M)):(e.consume(M),W)}function K(M){return e.check(ZD,Y,Q)(M)}function Y(M){return e.enter("lineEnding"),e.consume(M),e.exit("lineEnding"),G}function G(M){return M===null||Ie(M)?K(M):(e.enter("htmlFlowData"),W(M))}function P(M){return M===45?(e.consume(M),C):W(M)}function k(M){return M===47?(e.consume(M),c="",I):W(M)}function I(M){if(M===62){const H=c.toLowerCase();return d2.includes(H)?(e.consume(M),F):W(M)}return ca(M)&&c.length<8?(e.consume(M),c+=String.fromCharCode(M),I):W(M)}function ne(M){return M===93?(e.consume(M),C):W(M)}function C(M){return M===62?(e.consume(M),F):M===45&&o===2?(e.consume(M),C):W(M)}function F(M){return M===null||Ie(M)?(e.exit("htmlFlowData"),Q(M)):(e.consume(M),F)}function Q(M){return e.exit("htmlFlow"),t(M)}}function nP(e,t,r){const a=this;return o;function o(c){return Ie(c)?(e.enter("lineEnding"),e.consume(c),e.exit("lineEnding"),s):r(c)}function s(c){return a.parser.lazy[a.now().line]?r(c):t(c)}}function rP(e,t,r){return a;function a(o){return e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),e.attempt(Rf,t,r)}}const aP={name:"htmlText",tokenize:iP};function iP(e,t,r){const a=this;let o,s,c;return f;function f(C){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(C),h}function h(C){return C===33?(e.consume(C),d):C===47?(e.consume(C),z):C===63?(e.consume(C),O):ca(C)?(e.consume(C),J):r(C)}function d(C){return C===45?(e.consume(C),g):C===91?(e.consume(C),s=0,w):ca(C)?(e.consume(C),R):r(C)}function g(C){return C===45?(e.consume(C),S):r(C)}function v(C){return C===null?r(C):C===45?(e.consume(C),y):Ie(C)?(c=v,k(C)):(e.consume(C),v)}function y(C){return C===45?(e.consume(C),S):v(C)}function S(C){return C===62?P(C):C===45?y(C):v(C)}function w(C){const F="CDATA[";return C===F.charCodeAt(s++)?(e.consume(C),s===F.length?A:w):r(C)}function A(C){return C===null?r(C):C===93?(e.consume(C),x):Ie(C)?(c=A,k(C)):(e.consume(C),A)}function x(C){return C===93?(e.consume(C),T):A(C)}function T(C){return C===62?P(C):C===93?(e.consume(C),T):A(C)}function R(C){return C===null||C===62?P(C):Ie(C)?(c=R,k(C)):(e.consume(C),R)}function O(C){return C===null?r(C):C===63?(e.consume(C),j):Ie(C)?(c=O,k(C)):(e.consume(C),O)}function j(C){return C===62?P(C):O(C)}function z(C){return ca(C)?(e.consume(C),N):r(C)}function N(C){return C===45||ar(C)?(e.consume(C),N):_(C)}function _(C){return Ie(C)?(c=_,k(C)):St(C)?(e.consume(C),_):P(C)}function J(C){return C===45||ar(C)?(e.consume(C),J):C===47||C===62||In(C)?$(C):r(C)}function $(C){return C===47?(e.consume(C),P):C===58||C===95||ca(C)?(e.consume(C),B):Ie(C)?(c=$,k(C)):St(C)?(e.consume(C),$):P(C)}function B(C){return C===45||C===46||C===58||C===95||ar(C)?(e.consume(C),B):U(C)}function U(C){return C===61?(e.consume(C),W):Ie(C)?(c=U,k(C)):St(C)?(e.consume(C),U):$(C)}function W(C){return C===null||C===60||C===61||C===62||C===96?r(C):C===34||C===39?(e.consume(C),o=C,K):Ie(C)?(c=W,k(C)):St(C)?(e.consume(C),W):(e.consume(C),Y)}function K(C){return C===o?(e.consume(C),o=void 0,G):C===null?r(C):Ie(C)?(c=K,k(C)):(e.consume(C),K)}function Y(C){return C===null||C===34||C===39||C===60||C===61||C===96?r(C):C===47||C===62||In(C)?$(C):(e.consume(C),Y)}function G(C){return C===47||C===62||In(C)?$(C):r(C)}function P(C){return C===62?(e.consume(C),e.exit("htmlTextData"),e.exit("htmlText"),t):r(C)}function k(C){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(C),e.exit("lineEnding"),I}function I(C){return St(C)?$t(e,ne,"linePrefix",a.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(C):ne(C)}function ne(C){return e.enter("htmlTextData"),c(C)}}const Tp={name:"labelEnd",resolveAll:uP,resolveTo:cP,tokenize:fP},oP={tokenize:dP},lP={tokenize:hP},sP={tokenize:mP};function uP(e){let t=-1;const r=[];for(;++t<e.length;){const a=e[t][1];if(r.push(e[t]),a.type==="labelImage"||a.type==="labelLink"||a.type==="labelEnd"){const o=a.type==="labelImage"?4:2;a.type="data",t+=o}}return e.length!==r.length&&ha(e,0,e.length,r),e}function cP(e,t){let r=e.length,a=0,o,s,c,f;for(;r--;)if(o=e[r][1],s){if(o.type==="link"||o.type==="labelLink"&&o._inactive)break;e[r][0]==="enter"&&o.type==="labelLink"&&(o._inactive=!0)}else if(c){if(e[r][0]==="enter"&&(o.type==="labelImage"||o.type==="labelLink")&&!o._balanced&&(s=r,o.type!=="labelLink")){a=2;break}}else o.type==="labelEnd"&&(c=r);const h={type:e[s][1].type==="labelLink"?"link":"image",start:{...e[s][1].start},end:{...e[e.length-1][1].end}},d={type:"label",start:{...e[s][1].start},end:{...e[c][1].end}},g={type:"labelText",start:{...e[s+a+2][1].end},end:{...e[c-2][1].start}};return f=[["enter",h,t],["enter",d,t]],f=Mr(f,e.slice(s+1,s+a+3)),f=Mr(f,[["enter",g,t]]),f=Mr(f,Ap(t.parser.constructs.insideSpan.null,e.slice(s+a+4,c-3),t)),f=Mr(f,[["exit",g,t],e[c-2],e[c-1],["exit",d,t]]),f=Mr(f,e.slice(c+1)),f=Mr(f,[["exit",h,t]]),ha(e,s,e.length,f),e}function fP(e,t,r){const a=this;let o=a.events.length,s,c;for(;o--;)if((a.events[o][1].type==="labelImage"||a.events[o][1].type==="labelLink")&&!a.events[o][1]._balanced){s=a.events[o][1];break}return f;function f(y){return s?s._inactive?v(y):(c=a.parser.defined.includes(ll(a.sliceSerialize({start:s.end,end:a.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(y),e.exit("labelMarker"),e.exit("labelEnd"),h):r(y)}function h(y){return y===40?e.attempt(oP,g,c?g:v)(y):y===91?e.attempt(lP,g,c?d:v)(y):c?g(y):v(y)}function d(y){return e.attempt(sP,g,v)(y)}function g(y){return t(y)}function v(y){return s._balanced=!0,r(y)}}function dP(e,t,r){return a;function a(v){return e.enter("resource"),e.enter("resourceMarker"),e.consume(v),e.exit("resourceMarker"),o}function o(v){return In(v)?Ps(e,s)(v):s(v)}function s(v){return v===41?g(v):Xw(e,c,f,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(v)}function c(v){return In(v)?Ps(e,h)(v):g(v)}function f(v){return r(v)}function h(v){return v===34||v===39||v===40?Qw(e,d,r,"resourceTitle","resourceTitleMarker","resourceTitleString")(v):g(v)}function d(v){return In(v)?Ps(e,g)(v):g(v)}function g(v){return v===41?(e.enter("resourceMarker"),e.consume(v),e.exit("resourceMarker"),e.exit("resource"),t):r(v)}}function hP(e,t,r){const a=this;return o;function o(f){return Kw.call(a,e,s,c,"reference","referenceMarker","referenceString")(f)}function s(f){return a.parser.defined.includes(ll(a.sliceSerialize(a.events[a.events.length-1][1]).slice(1,-1)))?t(f):r(f)}function c(f){return r(f)}}function mP(e,t,r){return a;function a(s){return e.enter("reference"),e.enter("referenceMarker"),e.consume(s),e.exit("referenceMarker"),o}function o(s){return s===93?(e.enter("referenceMarker"),e.consume(s),e.exit("referenceMarker"),e.exit("reference"),t):r(s)}}const gP={name:"labelStartImage",resolveAll:Tp.resolveAll,tokenize:pP};function pP(e,t,r){const a=this;return o;function o(f){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(f),e.exit("labelImageMarker"),s}function s(f){return f===91?(e.enter("labelMarker"),e.consume(f),e.exit("labelMarker"),e.exit("labelImage"),c):r(f)}function c(f){return f===94&&"_hiddenFootnoteSupport"in a.parser.constructs?r(f):t(f)}}const vP={name:"labelStartLink",resolveAll:Tp.resolveAll,tokenize:yP};function yP(e,t,r){const a=this;return o;function o(c){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(c),e.exit("labelMarker"),e.exit("labelLink"),s}function s(c){return c===94&&"_hiddenFootnoteSupport"in a.parser.constructs?r(c):t(c)}}const cm={name:"lineEnding",tokenize:bP};function bP(e,t){return r;function r(a){return e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),$t(e,t,"linePrefix")}}const Hc={name:"thematicBreak",tokenize:SP};function SP(e,t,r){let a=0,o;return s;function s(d){return e.enter("thematicBreak"),c(d)}function c(d){return o=d,f(d)}function f(d){return d===o?(e.enter("thematicBreakSequence"),h(d)):a>=3&&(d===null||Ie(d))?(e.exit("thematicBreak"),t(d)):r(d)}function h(d){return d===o?(e.consume(d),a++,h):(e.exit("thematicBreakSequence"),St(d)?$t(e,f,"whitespace")(d):f(d))}}const Fn={continuation:{tokenize:EP},exit:TP,name:"list",tokenize:xP},CP={partial:!0,tokenize:RP},wP={partial:!0,tokenize:AP};function xP(e,t,r){const a=this,o=a.events[a.events.length-1];let s=o&&o[1].type==="linePrefix"?o[2].sliceSerialize(o[1],!0).length:0,c=0;return f;function f(S){const w=a.containerState.type||(S===42||S===43||S===45?"listUnordered":"listOrdered");if(w==="listUnordered"?!a.containerState.marker||S===a.containerState.marker:$g(S)){if(a.containerState.type||(a.containerState.type=w,e.enter(w,{_container:!0})),w==="listUnordered")return e.enter("listItemPrefix"),S===42||S===45?e.check(Hc,r,d)(S):d(S);if(!a.interrupt||S===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),h(S)}return r(S)}function h(S){return $g(S)&&++c<10?(e.consume(S),h):(!a.interrupt||c<2)&&(a.containerState.marker?S===a.containerState.marker:S===41||S===46)?(e.exit("listItemValue"),d(S)):r(S)}function d(S){return e.enter("listItemMarker"),e.consume(S),e.exit("listItemMarker"),a.containerState.marker=a.containerState.marker||S,e.check(Rf,a.interrupt?r:g,e.attempt(CP,y,v))}function g(S){return a.containerState.initialBlankLine=!0,s++,y(S)}function v(S){return St(S)?(e.enter("listItemPrefixWhitespace"),e.consume(S),e.exit("listItemPrefixWhitespace"),y):r(S)}function y(S){return a.containerState.size=s+a.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(S)}}function EP(e,t,r){const a=this;return a.containerState._closeFlow=void 0,e.check(Rf,o,s);function o(f){return a.containerState.furtherBlankLines=a.containerState.furtherBlankLines||a.containerState.initialBlankLine,$t(e,t,"listItemIndent",a.containerState.size+1)(f)}function s(f){return a.containerState.furtherBlankLines||!St(f)?(a.containerState.furtherBlankLines=void 0,a.containerState.initialBlankLine=void 0,c(f)):(a.containerState.furtherBlankLines=void 0,a.containerState.initialBlankLine=void 0,e.attempt(wP,t,c)(f))}function c(f){return a.containerState._closeFlow=!0,a.interrupt=void 0,$t(e,e.attempt(Fn,t,r),"linePrefix",a.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(f)}}function AP(e,t,r){const a=this;return $t(e,o,"listItemIndent",a.containerState.size+1);function o(s){const c=a.events[a.events.length-1];return c&&c[1].type==="listItemIndent"&&c[2].sliceSerialize(c[1],!0).length===a.containerState.size?t(s):r(s)}}function TP(e){e.exit(this.containerState.type)}function RP(e,t,r){const a=this;return $t(e,o,"listItemPrefixWhitespace",a.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function o(s){const c=a.events[a.events.length-1];return!St(s)&&c&&c[1].type==="listItemPrefixWhitespace"?t(s):r(s)}}const h2={name:"setextUnderline",resolveTo:OP,tokenize:MP};function OP(e,t){let r=e.length,a,o,s;for(;r--;)if(e[r][0]==="enter"){if(e[r][1].type==="content"){a=r;break}e[r][1].type==="paragraph"&&(o=r)}else e[r][1].type==="content"&&e.splice(r,1),!s&&e[r][1].type==="definition"&&(s=r);const c={type:"setextHeading",start:{...e[a][1].start},end:{...e[e.length-1][1].end}};return e[o][1].type="setextHeadingText",s?(e.splice(o,0,["enter",c,t]),e.splice(s+1,0,["exit",e[a][1],t]),e[a][1].end={...e[s][1].end}):e[a][1]=c,e.push(["exit",c,t]),e}function MP(e,t,r){const a=this;let o;return s;function s(d){let g=a.events.length,v;for(;g--;)if(a.events[g][1].type!=="lineEnding"&&a.events[g][1].type!=="linePrefix"&&a.events[g][1].type!=="content"){v=a.events[g][1].type==="paragraph";break}return!a.parser.lazy[a.now().line]&&(a.interrupt||v)?(e.enter("setextHeadingLine"),o=d,c(d)):r(d)}function c(d){return e.enter("setextHeadingLineSequence"),f(d)}function f(d){return d===o?(e.consume(d),f):(e.exit("setextHeadingLineSequence"),St(d)?$t(e,h,"lineSuffix")(d):h(d))}function h(d){return d===null||Ie(d)?(e.exit("setextHeadingLine"),t(d)):r(d)}}const NP={tokenize:DP};function DP(e){const t=this,r=e.attempt(Rf,a,e.attempt(this.parser.constructs.flowInitial,o,$t(e,e.attempt(this.parser.constructs.flow,o,e.attempt(kD,o)),"linePrefix")));return r;function a(s){if(s===null){e.consume(s);return}return e.enter("lineEndingBlank"),e.consume(s),e.exit("lineEndingBlank"),t.currentConstruct=void 0,r}function o(s){if(s===null){e.consume(s);return}return e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),t.currentConstruct=void 0,r}}const PP={resolveAll:ex()},zP=Zw("string"),_P=Zw("text");function Zw(e){return{resolveAll:ex(e==="text"?$P:void 0),tokenize:t};function t(r){const a=this,o=this.parser.constructs[e],s=r.attempt(o,c,f);return c;function c(g){return d(g)?s(g):f(g)}function f(g){if(g===null){r.consume(g);return}return r.enter("data"),r.consume(g),h}function h(g){return d(g)?(r.exit("data"),s(g)):(r.consume(g),h)}function d(g){if(g===null)return!0;const v=o[g];let y=-1;if(v)for(;++y<v.length;){const S=v[y];if(!S.previous||S.previous.call(a,a.previous))return!0}return!1}}}function ex(e){return t;function t(r,a){let o=-1,s;for(;++o<=r.length;)s===void 0?r[o]&&r[o][1].type==="data"&&(s=o,o++):(!r[o]||r[o][1].type!=="data")&&(o!==s+2&&(r[s][1].end=r[o-1][1].end,r.splice(s+2,o-s-2),o=s+2),s=void 0);return e?e(r,a):r}}function $P(e,t){let r=0;for(;++r<=e.length;)if((r===e.length||e[r][1].type==="lineEnding")&&e[r-1][1].type==="data"){const a=e[r-1][1],o=t.sliceStream(a);let s=o.length,c=-1,f=0,h;for(;s--;){const d=o[s];if(typeof d=="string"){for(c=d.length;d.charCodeAt(c-1)===32;)f++,c--;if(c)break;c=-1}else if(d===-2)h=!0,f++;else if(d!==-1){s++;break}}if(t._contentTypeTextTrailing&&r===e.length&&(f=0),f){const d={type:r===e.length||h||f<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:s?c:a.start._bufferIndex+c,_index:a.start._index+s,line:a.end.line,column:a.end.column-f,offset:a.end.offset-f},end:{...a.end}};a.end={...d.start},a.start.offset===a.end.offset?Object.assign(a,d):(e.splice(r,0,["enter",d,t],["exit",d,t]),r+=2)}r++}return e}const kP={42:Fn,43:Fn,45:Fn,48:Fn,49:Fn,50:Fn,51:Fn,52:Fn,53:Fn,54:Fn,55:Fn,56:Fn,57:Fn,62:qw},LP={91:FD},jP={[-2]:um,[-1]:um,32:um},HP={35:WD,42:Hc,45:[h2,Hc],60:KD,61:h2,95:Hc,96:f2,126:f2},BP={38:Jw,92:Ww},FP={[-5]:cm,[-4]:cm,[-3]:cm,33:gP,38:Jw,42:kg,60:[vD,aP],91:vP,92:[GD,Ww],93:Tp,95:kg,96:ND},IP={null:[kg,PP]},VP={null:[42,95]},UP={null:[]},GP=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:VP,contentInitial:LP,disable:UP,document:kP,flow:HP,flowInitial:jP,insideSpan:IP,string:BP,text:FP},Symbol.toStringTag,{value:"Module"}));function qP(e,t,r){let a={_bufferIndex:-1,_index:0,line:r&&r.line||1,column:r&&r.column||1,offset:r&&r.offset||0};const o={},s=[];let c=[],f=[];const h={attempt:_(z),check:_(N),consume:R,enter:O,exit:j,interrupt:_(N,{interrupt:!0})},d={code:null,containerState:{},defineSkip:A,events:[],now:w,parser:e,previous:null,sliceSerialize:y,sliceStream:S,write:v};let g=t.tokenize.call(d,h);return t.resolveAll&&s.push(t),d;function v(U){return c=Mr(c,U),x(),c[c.length-1]!==null?[]:(J(t,0),d.events=Ap(s,d.events,d),d.events)}function y(U,W){return JP(S(U),W)}function S(U){return WP(c,U)}function w(){const{_bufferIndex:U,_index:W,line:K,column:Y,offset:G}=a;return{_bufferIndex:U,_index:W,line:K,column:Y,offset:G}}function A(U){o[U.line]=U.column,B()}function x(){let U;for(;a._index<c.length;){const W=c[a._index];if(typeof W=="string")for(U=a._index,a._bufferIndex<0&&(a._bufferIndex=0);a._index===U&&a._bufferIndex<W.length;)T(W.charCodeAt(a._bufferIndex));else T(W)}}function T(U){g=g(U)}function R(U){Ie(U)?(a.line++,a.column=1,a.offset+=U===-3?2:1,B()):U!==-1&&(a.column++,a.offset++),a._bufferIndex<0?a._index++:(a._bufferIndex++,a._bufferIndex===c[a._index].length&&(a._bufferIndex=-1,a._index++)),d.previous=U}function O(U,W){const K=W||{};return K.type=U,K.start=w(),d.events.push(["enter",K,d]),f.push(K),K}function j(U){const W=f.pop();return W.end=w(),d.events.push(["exit",W,d]),W}function z(U,W){J(U,W.from)}function N(U,W){W.restore()}function _(U,W){return K;function K(Y,G,P){let k,I,ne,C;return Array.isArray(Y)?Q(Y):"tokenize"in Y?Q([Y]):F(Y);function F(oe){return be;function be(ue){const me=ue!==null&&oe[ue],ge=ue!==null&&oe.null,Pe=[...Array.isArray(me)?me:me?[me]:[],...Array.isArray(ge)?ge:ge?[ge]:[]];return Q(Pe)(ue)}}function Q(oe){return k=oe,I=0,oe.length===0?P:M(oe[I])}function M(oe){return be;function be(ue){return C=$(),ne=oe,oe.partial||(d.currentConstruct=oe),oe.name&&d.parser.constructs.disable.null.includes(oe.name)?le():oe.tokenize.call(W?Object.assign(Object.create(d),W):d,h,H,le)(ue)}}function H(oe){return U(ne,C),G}function le(oe){return C.restore(),++I<k.length?M(k[I]):P}}}function J(U,W){U.resolveAll&&!s.includes(U)&&s.push(U),U.resolve&&ha(d.events,W,d.events.length-W,U.resolve(d.events.slice(W),d)),U.resolveTo&&(d.events=U.resolveTo(d.events,d))}function $(){const U=w(),W=d.previous,K=d.currentConstruct,Y=d.events.length,G=Array.from(f);return{from:Y,restore:P};function P(){a=U,d.previous=W,d.currentConstruct=K,d.events.length=Y,f=G,B()}}function B(){a.line in o&&a.column<2&&(a.column=o[a.line],a.offset+=o[a.line]-1)}}function WP(e,t){const r=t.start._index,a=t.start._bufferIndex,o=t.end._index,s=t.end._bufferIndex;let c;if(r===o)c=[e[r].slice(a,s)];else{if(c=e.slice(r,o),a>-1){const f=c[0];typeof f=="string"?c[0]=f.slice(a):c.shift()}s>0&&c.push(e[o].slice(0,s))}return c}function JP(e,t){let r=-1;const a=[];let o;for(;++r<e.length;){const s=e[r];let c;if(typeof s=="string")c=s;else switch(s){case-5:{c="\r";break}case-4:{c=`
`;break}case-3:{c=`\r
`;break}case-2:{c=t?" ":"	";break}case-1:{if(!t&&o)continue;c=" ";break}default:c=String.fromCharCode(s)}o=s===-2,a.push(c)}return a.join("")}function YP(e){const a={constructs:nD([GP,...(e||{}).extensions||[]]),content:o(cD),defined:[],document:o(dD),flow:o(NP),lazy:{},string:o(zP),text:o(_P)};return a;function o(s){return c;function c(f){return qP(a,s,f)}}}function XP(e){for(;!Yw(e););return e}const m2=/[\0\t\n\r]/g;function KP(){let e=1,t="",r=!0,a;return o;function o(s,c,f){const h=[];let d,g,v,y,S;for(s=t+(typeof s=="string"?s.toString():new TextDecoder(c||void 0).decode(s)),v=0,t="",r&&(s.charCodeAt(0)===65279&&v++,r=void 0);v<s.length;){if(m2.lastIndex=v,d=m2.exec(s),y=d&&d.index!==void 0?d.index:s.length,S=s.charCodeAt(y),!d){t=s.slice(v);break}if(S===10&&v===y&&a)h.push(-3),a=void 0;else switch(a&&(h.push(-5),a=void 0),v<y&&(h.push(s.slice(v,y)),e+=y-v),S){case 0:{h.push(65533),e++;break}case 9:{for(g=Math.ceil(e/4)*4,h.push(-2);e++<g;)h.push(-1);break}case 10:{h.push(-4),e=1;break}default:a=!0,e=1}v=y+1}return f&&(a&&h.push(-5),t&&h.push(t),h.push(null)),h}}const QP=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function ZP(e){return e.replace(QP,ez)}function ez(e,t,r){if(t)return t;if(r.charCodeAt(0)===35){const o=r.charCodeAt(1),s=o===120||o===88;return Gw(r.slice(s?2:1),s?16:10)}return Ep(r)||e}const tx={}.hasOwnProperty;function tz(e,t,r){return t&&typeof t=="object"&&(r=t,t=void 0),nz(r)(XP(YP(r).document().write(KP()(e,t,!0))))}function nz(e){const t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:s(Ke),autolinkProtocol:$,autolinkEmail:$,atxHeading:s(Ge),blockQuote:s(ge),characterEscape:$,characterReference:$,codeFenced:s(Pe),codeFencedFenceInfo:c,codeFencedFenceMeta:c,codeIndented:s(Pe,c),codeText:s(_e,c),codeTextData:$,data:$,codeFlowValue:$,definition:s(He),definitionDestinationString:c,definitionLabelString:c,definitionTitleString:c,emphasis:s(Xe),hardBreakEscape:s(Me),hardBreakTrailing:s(Me),htmlFlow:s(rt,c),htmlFlowData:$,htmlText:s(rt,c),htmlTextData:$,image:s(Ve),label:c,link:s(Ke),listItem:s(Be),listItemValue:y,listOrdered:s(Et,v),listUnordered:s(Et),paragraph:s(st),reference:M,referenceString:c,resourceDestinationString:c,resourceTitleString:c,setextHeading:s(Ge),strong:s(Ce),thematicBreak:s(qe)},exit:{atxHeading:h(),atxHeadingSequence:z,autolink:h(),autolinkEmail:me,autolinkProtocol:ue,blockQuote:h(),characterEscapeValue:B,characterReferenceMarkerHexadecimal:le,characterReferenceMarkerNumeric:le,characterReferenceValue:oe,characterReference:be,codeFenced:h(x),codeFencedFence:A,codeFencedFenceInfo:S,codeFencedFenceMeta:w,codeFlowValue:B,codeIndented:h(T),codeText:h(G),codeTextData:B,data:B,definition:h(),definitionDestinationString:j,definitionLabelString:R,definitionTitleString:O,emphasis:h(),hardBreakEscape:h(W),hardBreakTrailing:h(W),htmlFlow:h(K),htmlFlowData:B,htmlText:h(Y),htmlTextData:B,image:h(k),label:ne,labelText:I,lineEnding:U,link:h(P),listItem:h(),listOrdered:h(),listUnordered:h(),paragraph:h(),referenceString:H,resourceDestinationString:C,resourceTitleString:F,resource:Q,setextHeading:h(J),setextHeadingLineSequence:_,setextHeadingText:N,strong:h(),thematicBreak:h()}};nx(t,(e||{}).mdastExtensions||[]);const r={};return a;function a(re){let de={type:"root",children:[]};const Se={stack:[de],tokenStack:[],config:t,enter:f,exit:d,buffer:c,resume:g,data:r},Ne=[];let Re=-1;for(;++Re<re.length;)if(re[Re][1].type==="listOrdered"||re[Re][1].type==="listUnordered")if(re[Re][0]==="enter")Ne.push(Re);else{const at=Ne.pop();Re=o(re,at,Re)}for(Re=-1;++Re<re.length;){const at=t[re[Re][0]];tx.call(at,re[Re][1].type)&&at[re[Re][1].type].call(Object.assign({sliceSerialize:re[Re][2].sliceSerialize},Se),re[Re][1])}if(Se.tokenStack.length>0){const at=Se.tokenStack[Se.tokenStack.length-1];(at[1]||g2).call(Se,void 0,at[0])}for(de.position={start:di(re.length>0?re[0][1].start:{line:1,column:1,offset:0}),end:di(re.length>0?re[re.length-2][1].end:{line:1,column:1,offset:0})},Re=-1;++Re<t.transforms.length;)de=t.transforms[Re](de)||de;return de}function o(re,de,Se){let Ne=de-1,Re=-1,at=!1,ut,$e,xe,Qe;for(;++Ne<=Se;){const Fe=re[Ne];switch(Fe[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{Fe[0]==="enter"?Re++:Re--,Qe=void 0;break}case"lineEndingBlank":{Fe[0]==="enter"&&(ut&&!Qe&&!Re&&!xe&&(xe=Ne),Qe=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:Qe=void 0}if(!Re&&Fe[0]==="enter"&&Fe[1].type==="listItemPrefix"||Re===-1&&Fe[0]==="exit"&&(Fe[1].type==="listUnordered"||Fe[1].type==="listOrdered")){if(ut){let Ze=Ne;for($e=void 0;Ze--;){const It=re[Ze];if(It[1].type==="lineEnding"||It[1].type==="lineEndingBlank"){if(It[0]==="exit")continue;$e&&(re[$e][1].type="lineEndingBlank",at=!0),It[1].type="lineEnding",$e=Ze}else if(!(It[1].type==="linePrefix"||It[1].type==="blockQuotePrefix"||It[1].type==="blockQuotePrefixWhitespace"||It[1].type==="blockQuoteMarker"||It[1].type==="listItemIndent"))break}xe&&(!$e||xe<$e)&&(ut._spread=!0),ut.end=Object.assign({},$e?re[$e][1].start:Fe[1].end),re.splice($e||Ne,0,["exit",ut,Fe[2]]),Ne++,Se++}if(Fe[1].type==="listItemPrefix"){const Ze={type:"listItem",_spread:!1,start:Object.assign({},Fe[1].start),end:void 0};ut=Ze,re.splice(Ne,0,["enter",Ze,Fe[2]]),Ne++,Se++,xe=void 0,Qe=!0}}}return re[de][1]._spread=at,Se}function s(re,de){return Se;function Se(Ne){f.call(this,re(Ne),Ne),de&&de.call(this,Ne)}}function c(){this.stack.push({type:"fragment",children:[]})}function f(re,de,Se){this.stack[this.stack.length-1].children.push(re),this.stack.push(re),this.tokenStack.push([de,Se||void 0]),re.position={start:di(de.start),end:void 0}}function h(re){return de;function de(Se){re&&re.call(this,Se),d.call(this,Se)}}function d(re,de){const Se=this.stack.pop(),Ne=this.tokenStack.pop();if(Ne)Ne[0].type!==re.type&&(de?de.call(this,re,Ne[0]):(Ne[1]||g2).call(this,re,Ne[0]));else throw new Error("Cannot close `"+re.type+"` ("+Ds({start:re.start,end:re.end})+"): it’s not open");Se.position.end=di(re.end)}function g(){return eD(this.stack.pop())}function v(){this.data.expectingFirstListItemValue=!0}function y(re){if(this.data.expectingFirstListItemValue){const de=this.stack[this.stack.length-2];de.start=Number.parseInt(this.sliceSerialize(re),10),this.data.expectingFirstListItemValue=void 0}}function S(){const re=this.resume(),de=this.stack[this.stack.length-1];de.lang=re}function w(){const re=this.resume(),de=this.stack[this.stack.length-1];de.meta=re}function A(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function x(){const re=this.resume(),de=this.stack[this.stack.length-1];de.value=re.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function T(){const re=this.resume(),de=this.stack[this.stack.length-1];de.value=re.replace(/(\r?\n|\r)$/g,"")}function R(re){const de=this.resume(),Se=this.stack[this.stack.length-1];Se.label=de,Se.identifier=ll(this.sliceSerialize(re)).toLowerCase()}function O(){const re=this.resume(),de=this.stack[this.stack.length-1];de.title=re}function j(){const re=this.resume(),de=this.stack[this.stack.length-1];de.url=re}function z(re){const de=this.stack[this.stack.length-1];if(!de.depth){const Se=this.sliceSerialize(re).length;de.depth=Se}}function N(){this.data.setextHeadingSlurpLineEnding=!0}function _(re){const de=this.stack[this.stack.length-1];de.depth=this.sliceSerialize(re).codePointAt(0)===61?1:2}function J(){this.data.setextHeadingSlurpLineEnding=void 0}function $(re){const Se=this.stack[this.stack.length-1].children;let Ne=Se[Se.length-1];(!Ne||Ne.type!=="text")&&(Ne=Te(),Ne.position={start:di(re.start),end:void 0},Se.push(Ne)),this.stack.push(Ne)}function B(re){const de=this.stack.pop();de.value+=this.sliceSerialize(re),de.position.end=di(re.end)}function U(re){const de=this.stack[this.stack.length-1];if(this.data.atHardBreak){const Se=de.children[de.children.length-1];Se.position.end=di(re.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(de.type)&&($.call(this,re),B.call(this,re))}function W(){this.data.atHardBreak=!0}function K(){const re=this.resume(),de=this.stack[this.stack.length-1];de.value=re}function Y(){const re=this.resume(),de=this.stack[this.stack.length-1];de.value=re}function G(){const re=this.resume(),de=this.stack[this.stack.length-1];de.value=re}function P(){const re=this.stack[this.stack.length-1];if(this.data.inReference){const de=this.data.referenceType||"shortcut";re.type+="Reference",re.referenceType=de,delete re.url,delete re.title}else delete re.identifier,delete re.label;this.data.referenceType=void 0}function k(){const re=this.stack[this.stack.length-1];if(this.data.inReference){const de=this.data.referenceType||"shortcut";re.type+="Reference",re.referenceType=de,delete re.url,delete re.title}else delete re.identifier,delete re.label;this.data.referenceType=void 0}function I(re){const de=this.sliceSerialize(re),Se=this.stack[this.stack.length-2];Se.label=ZP(de),Se.identifier=ll(de).toLowerCase()}function ne(){const re=this.stack[this.stack.length-1],de=this.resume(),Se=this.stack[this.stack.length-1];if(this.data.inReference=!0,Se.type==="link"){const Ne=re.children;Se.children=Ne}else Se.alt=de}function C(){const re=this.resume(),de=this.stack[this.stack.length-1];de.url=re}function F(){const re=this.resume(),de=this.stack[this.stack.length-1];de.title=re}function Q(){this.data.inReference=void 0}function M(){this.data.referenceType="collapsed"}function H(re){const de=this.resume(),Se=this.stack[this.stack.length-1];Se.label=de,Se.identifier=ll(this.sliceSerialize(re)).toLowerCase(),this.data.referenceType="full"}function le(re){this.data.characterReferenceType=re.type}function oe(re){const de=this.sliceSerialize(re),Se=this.data.characterReferenceType;let Ne;Se?(Ne=Gw(de,Se==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):Ne=Ep(de);const Re=this.stack[this.stack.length-1];Re.value+=Ne}function be(re){const de=this.stack.pop();de.position.end=di(re.end)}function ue(re){B.call(this,re);const de=this.stack[this.stack.length-1];de.url=this.sliceSerialize(re)}function me(re){B.call(this,re);const de=this.stack[this.stack.length-1];de.url="mailto:"+this.sliceSerialize(re)}function ge(){return{type:"blockquote",children:[]}}function Pe(){return{type:"code",lang:null,meta:null,value:""}}function _e(){return{type:"inlineCode",value:""}}function He(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function Xe(){return{type:"emphasis",children:[]}}function Ge(){return{type:"heading",depth:0,children:[]}}function Me(){return{type:"break"}}function rt(){return{type:"html",value:""}}function Ve(){return{type:"image",title:null,url:"",alt:null}}function Ke(){return{type:"link",title:null,url:"",children:[]}}function Et(re){return{type:"list",ordered:re.type==="listOrdered",start:null,spread:re._spread,children:[]}}function Be(re){return{type:"listItem",spread:re._spread,checked:null,children:[]}}function st(){return{type:"paragraph",children:[]}}function Ce(){return{type:"strong",children:[]}}function Te(){return{type:"text",value:""}}function qe(){return{type:"thematicBreak"}}}function di(e){return{line:e.line,column:e.column,offset:e.offset}}function nx(e,t){let r=-1;for(;++r<t.length;){const a=t[r];Array.isArray(a)?nx(e,a):rz(e,a)}}function rz(e,t){let r;for(r in t)if(tx.call(t,r))switch(r){case"canContainEols":{const a=t[r];a&&e[r].push(...a);break}case"transforms":{const a=t[r];a&&e[r].push(...a);break}case"enter":case"exit":{const a=t[r];a&&Object.assign(e[r],a);break}}}function g2(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+Ds({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+Ds({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+Ds({start:t.start,end:t.end})+") is still open")}function az(e){const t=this;t.parser=r;function r(a){return tz(a,{...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})}}function iz(e,t){const r={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,r),e.applyData(t,r)}function oz(e,t){const r={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,r),[e.applyData(t,r),{type:"text",value:`
`}]}function lz(e,t){const r=t.value?t.value+`
`:"",a={},o=t.lang?t.lang.split(/\s+/):[];o.length>0&&(a.className=["language-"+o[0]]);let s={type:"element",tagName:"code",properties:a,children:[{type:"text",value:r}]};return t.meta&&(s.data={meta:t.meta}),e.patch(t,s),s=e.applyData(t,s),s={type:"element",tagName:"pre",properties:{},children:[s]},e.patch(t,s),s}function sz(e,t){const r={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function uz(e,t){const r={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function cz(e,t){const r=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",a=String(t.identifier).toUpperCase(),o=Cl(a.toLowerCase()),s=e.footnoteOrder.indexOf(a);let c,f=e.footnoteCounts.get(a);f===void 0?(f=0,e.footnoteOrder.push(a),c=e.footnoteOrder.length):c=s+1,f+=1,e.footnoteCounts.set(a,f);const h={type:"element",tagName:"a",properties:{href:"#"+r+"fn-"+o,id:r+"fnref-"+o+(f>1?"-"+f:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(c)}]};e.patch(t,h);const d={type:"element",tagName:"sup",properties:{},children:[h]};return e.patch(t,d),e.applyData(t,d)}function fz(e,t){const r={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function dz(e,t){if(e.options.allowDangerousHtml){const r={type:"raw",value:t.value};return e.patch(t,r),e.applyData(t,r)}}function rx(e,t){const r=t.referenceType;let a="]";if(r==="collapsed"?a+="[]":r==="full"&&(a+="["+(t.label||t.identifier)+"]"),t.type==="imageReference")return[{type:"text",value:"!["+t.alt+a}];const o=e.all(t),s=o[0];s&&s.type==="text"?s.value="["+s.value:o.unshift({type:"text",value:"["});const c=o[o.length-1];return c&&c.type==="text"?c.value+=a:o.push({type:"text",value:a}),o}function hz(e,t){const r=String(t.identifier).toUpperCase(),a=e.definitionById.get(r);if(!a)return rx(e,t);const o={src:Cl(a.url||""),alt:t.alt};a.title!==null&&a.title!==void 0&&(o.title=a.title);const s={type:"element",tagName:"img",properties:o,children:[]};return e.patch(t,s),e.applyData(t,s)}function mz(e,t){const r={src:Cl(t.url)};t.alt!==null&&t.alt!==void 0&&(r.alt=t.alt),t.title!==null&&t.title!==void 0&&(r.title=t.title);const a={type:"element",tagName:"img",properties:r,children:[]};return e.patch(t,a),e.applyData(t,a)}function gz(e,t){const r={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,r);const a={type:"element",tagName:"code",properties:{},children:[r]};return e.patch(t,a),e.applyData(t,a)}function pz(e,t){const r=String(t.identifier).toUpperCase(),a=e.definitionById.get(r);if(!a)return rx(e,t);const o={href:Cl(a.url||"")};a.title!==null&&a.title!==void 0&&(o.title=a.title);const s={type:"element",tagName:"a",properties:o,children:e.all(t)};return e.patch(t,s),e.applyData(t,s)}function vz(e,t){const r={href:Cl(t.url)};t.title!==null&&t.title!==void 0&&(r.title=t.title);const a={type:"element",tagName:"a",properties:r,children:e.all(t)};return e.patch(t,a),e.applyData(t,a)}function yz(e,t,r){const a=e.all(t),o=r?bz(r):ax(t),s={},c=[];if(typeof t.checked=="boolean"){const g=a[0];let v;g&&g.type==="element"&&g.tagName==="p"?v=g:(v={type:"element",tagName:"p",properties:{},children:[]},a.unshift(v)),v.children.length>0&&v.children.unshift({type:"text",value:" "}),v.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:!0},children:[]}),s.className=["task-list-item"]}let f=-1;for(;++f<a.length;){const g=a[f];(o||f!==0||g.type!=="element"||g.tagName!=="p")&&c.push({type:"text",value:`
`}),g.type==="element"&&g.tagName==="p"&&!o?c.push(...g.children):c.push(g)}const h=a[a.length-1];h&&(o||h.type!=="element"||h.tagName!=="p")&&c.push({type:"text",value:`
`});const d={type:"element",tagName:"li",properties:s,children:c};return e.patch(t,d),e.applyData(t,d)}function bz(e){let t=!1;if(e.type==="list"){t=e.spread||!1;const r=e.children;let a=-1;for(;!t&&++a<r.length;)t=ax(r[a])}return t}function ax(e){const t=e.spread;return t??e.children.length>1}function Sz(e,t){const r={},a=e.all(t);let o=-1;for(typeof t.start=="number"&&t.start!==1&&(r.start=t.start);++o<a.length;){const c=a[o];if(c.type==="element"&&c.tagName==="li"&&c.properties&&Array.isArray(c.properties.className)&&c.properties.className.includes("task-list-item")){r.className=["contains-task-list"];break}}const s={type:"element",tagName:t.ordered?"ol":"ul",properties:r,children:e.wrap(a,!0)};return e.patch(t,s),e.applyData(t,s)}function Cz(e,t){const r={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function wz(e,t){const r={type:"root",children:e.wrap(e.all(t))};return e.patch(t,r),e.applyData(t,r)}function xz(e,t){const r={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function Ez(e,t){const r=e.all(t),a=r.shift(),o=[];if(a){const c={type:"element",tagName:"thead",properties:{},children:e.wrap([a],!0)};e.patch(t.children[0],c),o.push(c)}if(r.length>0){const c={type:"element",tagName:"tbody",properties:{},children:e.wrap(r,!0)},f=Sp(t.children[1]),h=jw(t.children[t.children.length-1]);f&&h&&(c.position={start:f,end:h}),o.push(c)}const s={type:"element",tagName:"table",properties:{},children:e.wrap(o,!0)};return e.patch(t,s),e.applyData(t,s)}function Az(e,t,r){const a=r?r.children:void 0,s=(a?a.indexOf(t):1)===0?"th":"td",c=r&&r.type==="table"?r.align:void 0,f=c?c.length:t.children.length;let h=-1;const d=[];for(;++h<f;){const v=t.children[h],y={},S=c?c[h]:void 0;S&&(y.align=S);let w={type:"element",tagName:s,properties:y,children:[]};v&&(w.children=e.all(v),e.patch(v,w),w=e.applyData(v,w)),d.push(w)}const g={type:"element",tagName:"tr",properties:{},children:e.wrap(d,!0)};return e.patch(t,g),e.applyData(t,g)}function Tz(e,t){const r={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}const p2=9,v2=32;function Rz(e){const t=String(e),r=/\r?\n|\r/g;let a=r.exec(t),o=0;const s=[];for(;a;)s.push(y2(t.slice(o,a.index),o>0,!0),a[0]),o=a.index+a[0].length,a=r.exec(t);return s.push(y2(t.slice(o),o>0,!1)),s.join("")}function y2(e,t,r){let a=0,o=e.length;if(t){let s=e.codePointAt(a);for(;s===p2||s===v2;)a++,s=e.codePointAt(a)}if(r){let s=e.codePointAt(o-1);for(;s===p2||s===v2;)o--,s=e.codePointAt(o-1)}return o>a?e.slice(a,o):""}function Oz(e,t){const r={type:"text",value:Rz(String(t.value))};return e.patch(t,r),e.applyData(t,r)}function Mz(e,t){const r={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,r),e.applyData(t,r)}const Nz={blockquote:iz,break:oz,code:lz,delete:sz,emphasis:uz,footnoteReference:cz,heading:fz,html:dz,imageReference:hz,image:mz,inlineCode:gz,linkReference:pz,link:vz,listItem:yz,list:Sz,paragraph:Cz,root:wz,strong:xz,table:Ez,tableCell:Tz,tableRow:Az,text:Oz,thematicBreak:Mz,toml:Ac,yaml:Ac,definition:Ac,footnoteDefinition:Ac};function Ac(){}const ix=-1,Of=0,zs=1,Qc=2,Rp=3,Op=4,Mp=5,Np=6,ox=7,lx=8,b2=typeof self=="object"?self:globalThis,Dz=(e,t)=>{const r=(o,s)=>(e.set(s,o),o),a=o=>{if(e.has(o))return e.get(o);const[s,c]=t[o];switch(s){case Of:case ix:return r(c,o);case zs:{const f=r([],o);for(const h of c)f.push(a(h));return f}case Qc:{const f=r({},o);for(const[h,d]of c)f[a(h)]=a(d);return f}case Rp:return r(new Date(c),o);case Op:{const{source:f,flags:h}=c;return r(new RegExp(f,h),o)}case Mp:{const f=r(new Map,o);for(const[h,d]of c)f.set(a(h),a(d));return f}case Np:{const f=r(new Set,o);for(const h of c)f.add(a(h));return f}case ox:{const{name:f,message:h}=c;return r(new b2[f](h),o)}case lx:return r(BigInt(c),o);case"BigInt":return r(Object(BigInt(c)),o);case"ArrayBuffer":return r(new Uint8Array(c).buffer,c);case"DataView":{const{buffer:f}=new Uint8Array(c);return r(new DataView(f),c)}}return r(new b2[s](c),o)};return a},S2=e=>Dz(new Map,e)(0),el="",{toString:Pz}={},{keys:zz}=Object,Es=e=>{const t=typeof e;if(t!=="object"||!e)return[Of,t];const r=Pz.call(e).slice(8,-1);switch(r){case"Array":return[zs,el];case"Object":return[Qc,el];case"Date":return[Rp,el];case"RegExp":return[Op,el];case"Map":return[Mp,el];case"Set":return[Np,el];case"DataView":return[zs,r]}return r.includes("Array")?[zs,r]:r.includes("Error")?[ox,r]:[Qc,r]},Tc=([e,t])=>e===Of&&(t==="function"||t==="symbol"),_z=(e,t,r,a)=>{const o=(c,f)=>{const h=a.push(c)-1;return r.set(f,h),h},s=c=>{if(r.has(c))return r.get(c);let[f,h]=Es(c);switch(f){case Of:{let g=c;switch(h){case"bigint":f=lx,g=c.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+h);g=null;break;case"undefined":return o([ix],c)}return o([f,g],c)}case zs:{if(h){let y=c;return h==="DataView"?y=new Uint8Array(c.buffer):h==="ArrayBuffer"&&(y=new Uint8Array(c)),o([h,[...y]],c)}const g=[],v=o([f,g],c);for(const y of c)g.push(s(y));return v}case Qc:{if(h)switch(h){case"BigInt":return o([h,c.toString()],c);case"Boolean":case"Number":case"String":return o([h,c.valueOf()],c)}if(t&&"toJSON"in c)return s(c.toJSON());const g=[],v=o([f,g],c);for(const y of zz(c))(e||!Tc(Es(c[y])))&&g.push([s(y),s(c[y])]);return v}case Rp:return o([f,c.toISOString()],c);case Op:{const{source:g,flags:v}=c;return o([f,{source:g,flags:v}],c)}case Mp:{const g=[],v=o([f,g],c);for(const[y,S]of c)(e||!(Tc(Es(y))||Tc(Es(S))))&&g.push([s(y),s(S)]);return v}case Np:{const g=[],v=o([f,g],c);for(const y of c)(e||!Tc(Es(y)))&&g.push(s(y));return v}}const{message:d}=c;return o([f,{name:h,message:d}],c)};return s},C2=(e,{json:t,lossy:r}={})=>{const a=[];return _z(!(t||r),!!t,new Map,a)(e),a},Zc=typeof structuredClone=="function"?(e,t)=>t&&("json"in t||"lossy"in t)?S2(C2(e,t)):structuredClone(e):(e,t)=>S2(C2(e,t));function $z(e,t){const r=[{type:"text",value:"↩"}];return t>1&&r.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),r}function kz(e,t){return"Back to reference "+(e+1)+(t>1?"-"+t:"")}function Lz(e){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=e.options.footnoteBackContent||$z,a=e.options.footnoteBackLabel||kz,o=e.options.footnoteLabel||"Footnotes",s=e.options.footnoteLabelTagName||"h2",c=e.options.footnoteLabelProperties||{className:["sr-only"]},f=[];let h=-1;for(;++h<e.footnoteOrder.length;){const d=e.footnoteById.get(e.footnoteOrder[h]);if(!d)continue;const g=e.all(d),v=String(d.identifier).toUpperCase(),y=Cl(v.toLowerCase());let S=0;const w=[],A=e.footnoteCounts.get(v);for(;A!==void 0&&++S<=A;){w.length>0&&w.push({type:"text",value:" "});let R=typeof r=="string"?r:r(h,S);typeof R=="string"&&(R={type:"text",value:R}),w.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+y+(S>1?"-"+S:""),dataFootnoteBackref:"",ariaLabel:typeof a=="string"?a:a(h,S),className:["data-footnote-backref"]},children:Array.isArray(R)?R:[R]})}const x=g[g.length-1];if(x&&x.type==="element"&&x.tagName==="p"){const R=x.children[x.children.length-1];R&&R.type==="text"?R.value+=" ":x.children.push({type:"text",value:" "}),x.children.push(...w)}else g.push(...w);const T={type:"element",tagName:"li",properties:{id:t+"fn-"+y},children:e.wrap(g,!0)};e.patch(d,T),f.push(T)}if(f.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:s,properties:{...Zc(c),id:"footnote-label"},children:[{type:"text",value:o}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(f,!0)},{type:"text",value:`
`}]}}const Dp=function(e){if(e==null)return Fz;if(typeof e=="function")return Mf(e);if(typeof e=="object")return Array.isArray(e)?jz(e):Hz(e);if(typeof e=="string")return Bz(e);throw new Error("Expected function, string, or object as test")};function jz(e){const t=[];let r=-1;for(;++r<e.length;)t[r]=Dp(e[r]);return Mf(a);function a(...o){let s=-1;for(;++s<t.length;)if(t[s].apply(this,o))return!0;return!1}}function Hz(e){const t=e;return Mf(r);function r(a){const o=a;let s;for(s in e)if(o[s]!==t[s])return!1;return!0}}function Bz(e){return Mf(t);function t(r){return r&&r.type===e}}function Mf(e){return t;function t(r,a,o){return!!(Iz(r)&&e.call(this,r,typeof a=="number"?a:void 0,o||void 0))}}function Fz(){return!0}function Iz(e){return e!==null&&typeof e=="object"&&"type"in e}const sx=[],Vz=!0,w2=!1,Uz="skip";function ux(e,t,r,a){let o;typeof t=="function"&&typeof r!="function"?(a=r,r=t):o=t;const s=Dp(o),c=a?-1:1;f(e,void 0,[])();function f(h,d,g){const v=h&&typeof h=="object"?h:{};if(typeof v.type=="string"){const S=typeof v.tagName=="string"?v.tagName:typeof v.name=="string"?v.name:void 0;Object.defineProperty(y,"name",{value:"node ("+(h.type+(S?"<"+S+">":""))+")"})}return y;function y(){let S=sx,w,A,x;if((!t||s(h,d,g[g.length-1]||void 0))&&(S=Gz(r(h,g)),S[0]===w2))return S;if("children"in h&&h.children){const T=h;if(T.children&&S[0]!==Uz)for(A=(a?T.children.length:-1)+c,x=g.concat(T);A>-1&&A<T.children.length;){const R=T.children[A];if(w=f(R,A,x)(),w[0]===w2)return w;A=typeof w[1]=="number"?w[1]:A+c}}return S}}}function Gz(e){return Array.isArray(e)?e:typeof e=="number"?[Vz,e]:e==null?sx:[e]}function cx(e,t,r,a){let o,s,c;typeof t=="function"?(s=void 0,c=t,o=r):(s=t,c=r,o=a),ux(e,s,f,o);function f(h,d){const g=d[d.length-1],v=g?g.children.indexOf(h):void 0;return c(h,v,g)}}const Lg={}.hasOwnProperty,qz={};function Wz(e,t){const r=t||qz,a=new Map,o=new Map,s=new Map,c={...Nz,...r.handlers},f={all:d,applyData:Yz,definitionById:a,footnoteById:o,footnoteCounts:s,footnoteOrder:[],handlers:c,one:h,options:r,patch:Jz,wrap:Kz};return cx(e,function(g){if(g.type==="definition"||g.type==="footnoteDefinition"){const v=g.type==="definition"?a:o,y=String(g.identifier).toUpperCase();v.has(y)||v.set(y,g)}}),f;function h(g,v){const y=g.type,S=f.handlers[y];if(Lg.call(f.handlers,y)&&S)return S(f,g,v);if(f.options.passThrough&&f.options.passThrough.includes(y)){if("children"in g){const{children:A,...x}=g,T=Zc(x);return T.children=f.all(g),T}return Zc(g)}return(f.options.unknownHandler||Xz)(f,g,v)}function d(g){const v=[];if("children"in g){const y=g.children;let S=-1;for(;++S<y.length;){const w=f.one(y[S],g);if(w){if(S&&y[S-1].type==="break"&&(!Array.isArray(w)&&w.type==="text"&&(w.value=x2(w.value)),!Array.isArray(w)&&w.type==="element")){const A=w.children[0];A&&A.type==="text"&&(A.value=x2(A.value))}Array.isArray(w)?v.push(...w):v.push(w)}}}return v}}function Jz(e,t){e.position&&(t.position=PN(e))}function Yz(e,t){let r=t;if(e&&e.data){const a=e.data.hName,o=e.data.hChildren,s=e.data.hProperties;if(typeof a=="string")if(r.type==="element")r.tagName=a;else{const c="children"in r?r.children:[r];r={type:"element",tagName:a,properties:{},children:c}}r.type==="element"&&s&&Object.assign(r.properties,Zc(s)),"children"in r&&r.children&&o!==null&&o!==void 0&&(r.children=o)}return r}function Xz(e,t){const r=t.data||{},a="value"in t&&!(Lg.call(r,"hProperties")||Lg.call(r,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:e.all(t)};return e.patch(t,a),e.applyData(t,a)}function Kz(e,t){const r=[];let a=-1;for(t&&r.push({type:"text",value:`
`});++a<e.length;)a&&r.push({type:"text",value:`
`}),r.push(e[a]);return t&&e.length>0&&r.push({type:"text",value:`
`}),r}function x2(e){let t=0,r=e.charCodeAt(t);for(;r===9||r===32;)t++,r=e.charCodeAt(t);return e.slice(t)}function E2(e,t){const r=Wz(e,t),a=r.one(e,void 0),o=Lz(r),s=Array.isArray(a)?{type:"root",children:a}:a||{type:"root",children:[]};return o&&s.children.push({type:"text",value:`
`},o),s}function Qz(e,t){return e&&"run"in e?async function(r,a){const o=E2(r,{file:a,...t});await e.run(o,a)}:function(r,a){return E2(r,{file:a,...e||t})}}function A2(e){if(e)throw e}var fm,T2;function Zz(){if(T2)return fm;T2=1;var e=Object.prototype.hasOwnProperty,t=Object.prototype.toString,r=Object.defineProperty,a=Object.getOwnPropertyDescriptor,o=function(d){return typeof Array.isArray=="function"?Array.isArray(d):t.call(d)==="[object Array]"},s=function(d){if(!d||t.call(d)!=="[object Object]")return!1;var g=e.call(d,"constructor"),v=d.constructor&&d.constructor.prototype&&e.call(d.constructor.prototype,"isPrototypeOf");if(d.constructor&&!g&&!v)return!1;var y;for(y in d);return typeof y>"u"||e.call(d,y)},c=function(d,g){r&&g.name==="__proto__"?r(d,g.name,{enumerable:!0,configurable:!0,value:g.newValue,writable:!0}):d[g.name]=g.newValue},f=function(d,g){if(g==="__proto__")if(e.call(d,g)){if(a)return a(d,g).value}else return;return d[g]};return fm=function h(){var d,g,v,y,S,w,A=arguments[0],x=1,T=arguments.length,R=!1;for(typeof A=="boolean"&&(R=A,A=arguments[1]||{},x=2),(A==null||typeof A!="object"&&typeof A!="function")&&(A={});x<T;++x)if(d=arguments[x],d!=null)for(g in d)v=f(A,g),y=f(d,g),A!==y&&(R&&y&&(s(y)||(S=o(y)))?(S?(S=!1,w=v&&o(v)?v:[]):w=v&&s(v)?v:{},c(A,{name:g,newValue:h(R,w,y)})):typeof y<"u"&&c(A,{name:g,newValue:y}));return A},fm}var e_=Zz();const dm=Ys(e_);function jg(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function t_(){const e=[],t={run:r,use:a};return t;function r(...o){let s=-1;const c=o.pop();if(typeof c!="function")throw new TypeError("Expected function as last argument, not "+c);f(null,...o);function f(h,...d){const g=e[++s];let v=-1;if(h){c(h);return}for(;++v<o.length;)(d[v]===null||d[v]===void 0)&&(d[v]=o[v]);o=d,g?n_(g,f)(...d):c(null,...d)}}function a(o){if(typeof o!="function")throw new TypeError("Expected `middelware` to be a function, not "+o);return e.push(o),t}}function n_(e,t){let r;return a;function a(...c){const f=e.length>c.length;let h;f&&c.push(o);try{h=e.apply(this,c)}catch(d){const g=d;if(f&&r)throw g;return o(g)}f||(h&&h.then&&typeof h.then=="function"?h.then(s,o):h instanceof Error?o(h):s(h))}function o(c,...f){r||(r=!0,t(c,...f))}function s(c){o(null,c)}}const sa={basename:r_,dirname:a_,extname:i_,join:o_,sep:"/"};function r_(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');fu(e);let r=0,a=-1,o=e.length,s;if(t===void 0||t.length===0||t.length>e.length){for(;o--;)if(e.codePointAt(o)===47){if(s){r=o+1;break}}else a<0&&(s=!0,a=o+1);return a<0?"":e.slice(r,a)}if(t===e)return"";let c=-1,f=t.length-1;for(;o--;)if(e.codePointAt(o)===47){if(s){r=o+1;break}}else c<0&&(s=!0,c=o+1),f>-1&&(e.codePointAt(o)===t.codePointAt(f--)?f<0&&(a=o):(f=-1,a=c));return r===a?a=c:a<0&&(a=e.length),e.slice(r,a)}function a_(e){if(fu(e),e.length===0)return".";let t=-1,r=e.length,a;for(;--r;)if(e.codePointAt(r)===47){if(a){t=r;break}}else a||(a=!0);return t<0?e.codePointAt(0)===47?"/":".":t===1&&e.codePointAt(0)===47?"//":e.slice(0,t)}function i_(e){fu(e);let t=e.length,r=-1,a=0,o=-1,s=0,c;for(;t--;){const f=e.codePointAt(t);if(f===47){if(c){a=t+1;break}continue}r<0&&(c=!0,r=t+1),f===46?o<0?o=t:s!==1&&(s=1):o>-1&&(s=-1)}return o<0||r<0||s===0||s===1&&o===r-1&&o===a+1?"":e.slice(o,r)}function o_(...e){let t=-1,r;for(;++t<e.length;)fu(e[t]),e[t]&&(r=r===void 0?e[t]:r+"/"+e[t]);return r===void 0?".":l_(r)}function l_(e){fu(e);const t=e.codePointAt(0)===47;let r=s_(e,!t);return r.length===0&&!t&&(r="."),r.length>0&&e.codePointAt(e.length-1)===47&&(r+="/"),t?"/"+r:r}function s_(e,t){let r="",a=0,o=-1,s=0,c=-1,f,h;for(;++c<=e.length;){if(c<e.length)f=e.codePointAt(c);else{if(f===47)break;f=47}if(f===47){if(!(o===c-1||s===1))if(o!==c-1&&s===2){if(r.length<2||a!==2||r.codePointAt(r.length-1)!==46||r.codePointAt(r.length-2)!==46){if(r.length>2){if(h=r.lastIndexOf("/"),h!==r.length-1){h<0?(r="",a=0):(r=r.slice(0,h),a=r.length-1-r.lastIndexOf("/")),o=c,s=0;continue}}else if(r.length>0){r="",a=0,o=c,s=0;continue}}t&&(r=r.length>0?r+"/..":"..",a=2)}else r.length>0?r+="/"+e.slice(o+1,c):r=e.slice(o+1,c),a=c-o-1;o=c,s=0}else f===46&&s>-1?s++:s=-1}return r}function fu(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const u_={cwd:c_};function c_(){return"/"}function Hg(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function f_(e){if(typeof e=="string")e=new URL(e);else if(!Hg(e)){const t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if(e.protocol!=="file:"){const t=new TypeError("The URL must be of scheme file");throw t.code="ERR_INVALID_URL_SCHEME",t}return d_(e)}function d_(e){if(e.hostname!==""){const a=new TypeError('File URL host must be "localhost" or empty on darwin');throw a.code="ERR_INVALID_FILE_URL_HOST",a}const t=e.pathname;let r=-1;for(;++r<t.length;)if(t.codePointAt(r)===37&&t.codePointAt(r+1)===50){const a=t.codePointAt(r+2);if(a===70||a===102){const o=new TypeError("File URL path must not include encoded / characters");throw o.code="ERR_INVALID_FILE_URL_PATH",o}}return decodeURIComponent(t)}const hm=["history","path","basename","stem","extname","dirname"];class fx{constructor(t){let r;t?Hg(t)?r={path:t}:typeof t=="string"||h_(t)?r={value:t}:r=t:r={},this.cwd="cwd"in r?"":u_.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let a=-1;for(;++a<hm.length;){const s=hm[a];s in r&&r[s]!==void 0&&r[s]!==null&&(this[s]=s==="history"?[...r[s]]:r[s])}let o;for(o in r)hm.includes(o)||(this[o]=r[o])}get basename(){return typeof this.path=="string"?sa.basename(this.path):void 0}set basename(t){gm(t,"basename"),mm(t,"basename"),this.path=sa.join(this.dirname||"",t)}get dirname(){return typeof this.path=="string"?sa.dirname(this.path):void 0}set dirname(t){R2(this.basename,"dirname"),this.path=sa.join(t||"",this.basename)}get extname(){return typeof this.path=="string"?sa.extname(this.path):void 0}set extname(t){if(mm(t,"extname"),R2(this.dirname,"extname"),t){if(t.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(t.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=sa.join(this.dirname,this.stem+(t||""))}get path(){return this.history[this.history.length-1]}set path(t){Hg(t)&&(t=f_(t)),gm(t,"path"),this.path!==t&&this.history.push(t)}get stem(){return typeof this.path=="string"?sa.basename(this.path,this.extname):void 0}set stem(t){gm(t,"stem"),mm(t,"stem"),this.path=sa.join(this.dirname||"",t+(this.extname||""))}fail(t,r,a){const o=this.message(t,r,a);throw o.fatal=!0,o}info(t,r,a){const o=this.message(t,r,a);return o.fatal=void 0,o}message(t,r,a){const o=new Rn(t,r,a);return this.path&&(o.name=this.path+":"+o.name,o.file=this.path),o.fatal=!1,this.messages.push(o),o}toString(t){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(t||void 0).decode(this.value)}}function mm(e,t){if(e&&e.includes(sa.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+sa.sep+"`")}function gm(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function R2(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}function h_(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const m_=function(e){const a=this.constructor.prototype,o=a[e],s=function(){return o.apply(s,arguments)};return Object.setPrototypeOf(s,a),s},g_={}.hasOwnProperty;class Pp extends m_{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=t_()}copy(){const t=new Pp;let r=-1;for(;++r<this.attachers.length;){const a=this.attachers[r];t.use(...a)}return t.data(dm(!0,{},this.namespace)),t}data(t,r){return typeof t=="string"?arguments.length===2?(ym("data",this.frozen),this.namespace[t]=r,this):g_.call(this.namespace,t)&&this.namespace[t]||void 0:t?(ym("data",this.frozen),this.namespace=t,this):this.namespace}freeze(){if(this.frozen)return this;const t=this;for(;++this.freezeIndex<this.attachers.length;){const[r,...a]=this.attachers[this.freezeIndex];if(a[0]===!1)continue;a[0]===!0&&(a[0]=void 0);const o=r.call(t,...a);typeof o=="function"&&this.transformers.use(o)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(t){this.freeze();const r=Rc(t),a=this.parser||this.Parser;return pm("parse",a),a(String(r),r)}process(t,r){const a=this;return this.freeze(),pm("process",this.parser||this.Parser),vm("process",this.compiler||this.Compiler),r?o(void 0,r):new Promise(o);function o(s,c){const f=Rc(t),h=a.parse(f);a.run(h,f,function(g,v,y){if(g||!v||!y)return d(g);const S=v,w=a.stringify(S,y);y_(w)?y.value=w:y.result=w,d(g,y)});function d(g,v){g||!v?c(g):s?s(v):r(void 0,v)}}}processSync(t){let r=!1,a;return this.freeze(),pm("processSync",this.parser||this.Parser),vm("processSync",this.compiler||this.Compiler),this.process(t,o),M2("processSync","process",r),a;function o(s,c){r=!0,A2(s),a=c}}run(t,r,a){O2(t),this.freeze();const o=this.transformers;return!a&&typeof r=="function"&&(a=r,r=void 0),a?s(void 0,a):new Promise(s);function s(c,f){const h=Rc(r);o.run(t,h,d);function d(g,v,y){const S=v||t;g?f(g):c?c(S):a(void 0,S,y)}}}runSync(t,r){let a=!1,o;return this.run(t,r,s),M2("runSync","run",a),o;function s(c,f){A2(c),o=f,a=!0}}stringify(t,r){this.freeze();const a=Rc(r),o=this.compiler||this.Compiler;return vm("stringify",o),O2(t),o(t,a)}use(t,...r){const a=this.attachers,o=this.namespace;if(ym("use",this.frozen),t!=null)if(typeof t=="function")h(t,r);else if(typeof t=="object")Array.isArray(t)?f(t):c(t);else throw new TypeError("Expected usable value, not `"+t+"`");return this;function s(d){if(typeof d=="function")h(d,[]);else if(typeof d=="object")if(Array.isArray(d)){const[g,...v]=d;h(g,v)}else c(d);else throw new TypeError("Expected usable value, not `"+d+"`")}function c(d){if(!("plugins"in d)&&!("settings"in d))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");f(d.plugins),d.settings&&(o.settings=dm(!0,o.settings,d.settings))}function f(d){let g=-1;if(d!=null)if(Array.isArray(d))for(;++g<d.length;){const v=d[g];s(v)}else throw new TypeError("Expected a list of plugins, not `"+d+"`")}function h(d,g){let v=-1,y=-1;for(;++v<a.length;)if(a[v][0]===d){y=v;break}if(y===-1)a.push([d,...g]);else if(g.length>0){let[S,...w]=g;const A=a[y][1];jg(A)&&jg(S)&&(S=dm(!0,A,S)),a[y]=[d,S,...w]}}}}const p_=new Pp().freeze();function pm(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function vm(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function ym(e,t){if(t)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function O2(e){if(!jg(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function M2(e,t,r){if(!r)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}function Rc(e){return v_(e)?e:new fx(e)}function v_(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function y_(e){return typeof e=="string"||b_(e)}function b_(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const S_="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",N2=[],D2={allowDangerousHtml:!0},C_=/^(https?|ircs?|mailto|xmpp)$/i,w_=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function dx(e){const t=x_(e),r=E_(e);return A_(t.runSync(t.parse(r),r),e)}function x_(e){const t=e.rehypePlugins||N2,r=e.remarkPlugins||N2,a=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...D2}:D2;return p_().use(az).use(r).use(Qz,a).use(t)}function E_(e){const t=e.children||"",r=new fx;return typeof t=="string"&&(r.value=t),r}function A_(e,t){const r=t.allowedElements,a=t.allowElement,o=t.components,s=t.disallowedElements,c=t.skipHtml,f=t.unwrapDisallowed,h=t.urlTransform||T_;for(const g of w_)Object.hasOwn(t,g.from)&&(""+g.from+(g.to?"use `"+g.to+"` instead":"remove it")+S_+g.id,void 0);return cx(e,d),LN(e,{Fragment:V.Fragment,components:o,ignoreInvalidStyle:!0,jsx:V.jsx,jsxs:V.jsxs,passKeys:!0,passNode:!0});function d(g,v,y){if(g.type==="raw"&&y&&typeof v=="number")return c?y.children.splice(v,1):y.children[v]={type:"text",value:g.value},v;if(g.type==="element"){let S;for(S in sm)if(Object.hasOwn(sm,S)&&Object.hasOwn(g.properties,S)){const w=g.properties[S],A=sm[S];(A===null||A.includes(g.tagName))&&(g.properties[S]=h(String(w||""),S,g))}}if(g.type==="element"){let S=r?!r.includes(g.tagName):s?s.includes(g.tagName):!1;if(!S&&a&&typeof v=="number"&&(S=!a(g,v,y)),S&&y&&typeof v=="number")return f&&g.children?y.children.splice(v,1,...g.children):y.children.splice(v,1),v}}}function T_(e){const t=e.indexOf(":"),r=e.indexOf("?"),a=e.indexOf("#"),o=e.indexOf("/");return t===-1||o!==-1&&t>o||r!==-1&&t>r||a!==-1&&t>a||C_.test(e.slice(0,t))?e:""}function R_(e){if(typeof e!="string")throw new TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}function O_(e,t,r){const o=Dp({}.ignore||[]),s=M_(t);let c=-1;for(;++c<s.length;)ux(e,"text",f);function f(d,g){let v=-1,y;for(;++v<g.length;){const S=g[v],w=y?y.children:void 0;if(o(S,w?w.indexOf(S):void 0,y))return;y=S}if(y)return h(d,g)}function h(d,g){const v=g[g.length-1],y=s[c][0],S=s[c][1];let w=0;const x=v.children.indexOf(d);let T=!1,R=[];y.lastIndex=0;let O=y.exec(d.value);for(;O;){const j=O.index,z={index:O.index,input:O.input,stack:[...g,d]};let N=S(...O,z);if(typeof N=="string"&&(N=N.length>0?{type:"text",value:N}:void 0),N===!1?y.lastIndex=j+1:(w!==j&&R.push({type:"text",value:d.value.slice(w,j)}),Array.isArray(N)?R.push(...N):N&&R.push(N),w=j+O[0].length,T=!0),!y.global)break;O=y.exec(d.value)}return T?(w<d.value.length&&R.push({type:"text",value:d.value.slice(w)}),v.children.splice(x,1,...R)):R=[d],x+R.length}}function M_(e){const t=[];if(!Array.isArray(e))throw new TypeError("Expected find and replace tuple or list of tuples");const r=!e[0]||Array.isArray(e[0])?e:[e];let a=-1;for(;++a<r.length;){const o=r[a];t.push([N_(o[0]),D_(o[1])])}return t}function N_(e){return typeof e=="string"?new RegExp(R_(e),"g"):e}function D_(e){return typeof e=="function"?e:function(){return e}}function P_(e){O_(e,[/\r?\n|\r/g,z_])}function z_(){return{type:"break"}}function hx(){return function(e){P_(e)}}const __=()=>{const{noteId:e}=U2(),t=Qi[e-1],r=oo();return V.jsxs("div",{style:{maxWidth:"760px",margin:"0 auto",padding:"32px 24px"},children:[V.jsxs("div",{onClick:()=>r("/notes"),style:{display:"inline-flex",alignItems:"center",gap:"6px",color:"#888",fontSize:"0.875rem",cursor:"pointer",marginBottom:"24px"},children:[V.jsx(cS,{}),"全部资料"]}),V.jsxs("div",{style:{borderLeft:"4px solid #c0392b",paddingLeft:"16px",marginBottom:"24px"},children:[V.jsx("h1",{style:{fontSize:"1.5rem",fontWeight:"800",margin:"0 0 8px",color:"#1a1a1a"},children:t.title}),V.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"5px",fontSize:"0.78rem",color:"#888",background:"#fafafa",border:"1px solid #f0f0f0",borderRadius:"20px",padding:"3px 10px"},children:[V.jsx(G8,{}),"来自社区推荐，请自行甄别"]})]}),V.jsx("div",{className:"note-content",children:V.jsx(dx,{remarkPlugins:[hx],children:t.content})})]})},$_=[{emoji:"🛋️",name:"二手交易",desc:"家具、电器、婴儿用品等"},{emoji:"🌱",name:"种苗交换",desc:"春季种苗、蔬菜秧苗分享"},{emoji:"📅",name:"社区活动",desc:"聚餐、球赛、节日活动"},{emoji:"💬",name:"微信群",desc:"加入本地华人群组"}],k_=()=>(oo(),V.jsxs("div",{style:{maxWidth:"800px",margin:"0 auto",padding:"24px"},children:[V.jsx("h1",{style:{fontSize:"1.5rem",fontWeight:"700",marginBottom:"8px"},children:"社区"}),V.jsx("p",{style:{color:"#666",marginBottom:"32px",fontSize:"0.9rem"},children:"连接普林斯顿华人社区，共同分享资源与信息"}),V.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"16px",marginBottom:"40px"},children:$_.map(e=>V.jsxs("div",{style:{background:"#fafafa",border:"1px solid #f0f0f0",borderRadius:"12px",padding:"20px",display:"flex",gap:"12px",alignItems:"flex-start"},children:[V.jsx("span",{style:{fontSize:"28px"},children:e.emoji}),V.jsxs("div",{children:[V.jsx("div",{style:{fontWeight:"600",marginBottom:"4px"},children:e.name}),V.jsx("div",{style:{fontSize:"0.85rem",color:"#666"},children:e.desc})]})]},e.name))}),V.jsx("h2",{style:{fontSize:"1.1rem",fontWeight:"700",marginBottom:"8px"},children:"加入微信群"}),V.jsxs("p",{style:{color:"#666",fontSize:"0.9rem",marginBottom:"20px"},children:["扫描二维码加入微信群。若二维码失效，请添加微信 ",V.jsx("strong",{children:"coolcloudz"}),' 并备注"普林斯顿"，管理员会邀请你入群。']}),V.jsx("div",{style:{display:"flex",gap:"20px",flexWrap:"wrap",marginBottom:"32px"},children:[{img:Ow,name:"综合交流"},{img:Mw,name:"家长圈"},{img:Nw,name:"家居服务"}].map(e=>V.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[V.jsx("img",{src:e.img,alt:`普林斯顿华人·${e.name} 微信群二维码`,style:{width:"200px",height:"200px",borderRadius:"12px",objectFit:"cover",border:"1px solid #f0f0f0"}}),V.jsxs("div",{style:{fontSize:"0.8rem",fontWeight:"600",color:"#333"},children:[V.jsx(gS,{style:{color:"#07c160",marginRight:"4px"}}),e.name]})]},e.name))}),V.jsx("h2",{style:{fontSize:"1.1rem",fontWeight:"700",marginBottom:"12px"},children:"Discord 社区"}),V.jsxs("a",{href:"https://discord.gg/D6zDx8UTMK",target:"_blank",rel:"noopener noreferrer",className:"home-discord-link",children:[V.jsx(Yg,{}),V.jsx("span",{children:"加入 Discord 社区"})]})]})),L_=()=>V.jsxs("div",{style:{maxWidth:"700px",margin:"0 auto",padding:"40px 24px",lineHeight:"1.8"},children:[V.jsx("h1",{style:{fontSize:"1.5rem",fontWeight:"700",marginBottom:"24px"},children:"关于本站"}),V.jsx("p",{style:{marginBottom:"16px",color:"#444"},children:"PrincetonHuaren 是一个由普林斯顿学区华人居民自发创建的本地信息分享平台。 网站的灵感来源于微信群里大量有用却难以检索的本地生活信息——理发推荐、餐厅点评、医生介绍…… 这些信息散落在各个群聊中，新来的居民往往很难找到。"}),V.jsx("p",{style:{marginBottom:"16px",color:"#444"},children:"我们希望把这些零散的信息整理成一个可搜索、可浏览的网站， 让每一个刚来到普林斯顿的华人家庭都能快速找到需要的信息。"}),V.jsx("p",{style:{marginBottom:"32px",color:"#444"},children:"网站由社区成员维护，内容基于真实的社区推荐，持续更新。 如果你有任何建议或想分享信息，欢迎通过以下方式联系我们。"}),V.jsx("h2",{style:{fontSize:"1.1rem",fontWeight:"700",marginBottom:"16px"},children:"联系方式"}),V.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[V.jsxs("a",{href:"https://discord.gg/D6zDx8UTMK",target:"_blank",rel:"noopener noreferrer",className:"home-discord-link",style:{alignSelf:"flex-start"},children:[V.jsx(Yg,{}),V.jsx("span",{children:"Discord 社区"})]}),V.jsx("a",{href:"#/feedback",style:{color:"#c0392b",fontWeight:"600"},children:"💬 留言反馈"})]}),V.jsx("div",{style:{marginTop:"40px",paddingTop:"24px",borderTop:"1px solid #f0f0f0",color:"#999",fontSize:"0.85rem"},children:V.jsx("p",{children:"免责声明：本站信息由社区成员提供，仅供参考，不构成专业建议。请在使用相关服务前自行核实信息的准确性。"})})]}),j_=e=>{const t=e.replace(/\s+/g," ").trim();return t.length>60?t.substring(0,60)+"…":t},Oc=({category:e,title:t})=>{const r=oo(),a=XM(e),{color:o,bg:s}=Kc[e]||{},f=(ZM[e]||[]).map(d=>Qi[d-1]).filter(Boolean),h=a.length+f.length;return V.jsxs("div",{style:{maxWidth:"860px",margin:"0 auto",padding:"32px 24px"},children:[V.jsxs("div",{style:{marginBottom:"32px"},children:[V.jsx("span",{style:{background:s,color:o,fontWeight:700,fontSize:"0.78rem",padding:"3px 10px",borderRadius:"12px",marginBottom:"12px",display:"inline-block"},children:t}),V.jsx("h1",{style:{fontSize:"1.5rem",fontWeight:"800",margin:"8px 0 4px"},children:t}),V.jsxs("p",{style:{color:"#888",fontSize:"0.9rem",margin:0},children:["共 ",h," 项内容"]})]}),a.length>0&&V.jsxs("div",{style:{marginBottom:"40px"},children:[V.jsx("div",{style:{fontSize:"0.8rem",fontWeight:"700",color:"#aaa",letterSpacing:"0.05em",textTransform:"uppercase",marginBottom:"4px"},children:"文章"}),V.jsx("div",{children:a.map(d=>V.jsxs("div",{onClick:()=>r(`/${d.category}/${d.id}`),style:{padding:"20px 0",borderBottom:"1px solid #f0f0f0",cursor:"pointer"},className:"category-post-item",children:[V.jsx("h2",{style:{fontSize:"1.05rem",fontWeight:"700",margin:"0 0 6px",color:"#1a1a1a"},className:"category-post-title",children:d.title}),V.jsx("p",{style:{color:"#666",fontSize:"0.875rem",margin:"0 0 10px",lineHeight:"1.5"},children:d.summary}),V.jsxs("div",{style:{display:"flex",gap:"12px",color:"#bbb",fontSize:"0.8rem",alignItems:"center"},children:[V.jsxs("span",{children:[V.jsx(dS,{style:{marginRight:"4px"}}),d.published]}),d.readingTime&&V.jsxs("span",{children:[V.jsx(hS,{style:{marginRight:"4px"}}),d.readingTime," 分钟阅读"]}),d.featured&&V.jsx("span",{style:{color:"#fa8c16",fontWeight:600},children:"⭐ 热门"})]})]},d.id))})]}),f.length>0&&V.jsxs("div",{children:[V.jsx("div",{style:{fontSize:"0.8rem",fontWeight:"700",color:"#aaa",letterSpacing:"0.05em",textTransform:"uppercase",marginBottom:"12px"},children:"社区资料"}),V.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(220px, 1fr))",gap:"12px"},children:f.map(d=>V.jsxs("div",{onClick:()=>r(`/notes/${d.id}`),className:"ref-note-card",style:{borderLeft:`3px solid ${o||"#e0e0e0"}`},children:[V.jsx("div",{className:"ref-note-title",children:d.title}),V.jsx("div",{className:"ref-note-preview",children:j_(d.content)}),V.jsxs("div",{className:"ref-note-link",children:["查看详情 ",V.jsx(fS,{style:{fontSize:"11px"}})]})]},d.id))})]}),h===0&&V.jsx("div",{style:{color:"#999",padding:"40px 0",textAlign:"center"},children:"暂无内容，敬请期待"})]})},H_=()=>{var h;const{postId:e}=U2(),t=oo(),r=KM(e);if(!r)return V.jsxs("div",{style:{padding:"60px 24px",textAlign:"center"},children:[V.jsx("div",{style:{fontSize:"3rem",marginBottom:"16px"},children:"404"}),V.jsx("div",{style:{color:"#666",marginBottom:"24px"},children:"文章未找到"}),V.jsx("button",{onClick:()=>t("/"),style:{background:"#c0392b",color:"white",border:"none",padding:"8px 20px",borderRadius:"6px",cursor:"pointer"},children:"返回首页"})]});const{prev:a,next:o}=QM(r.id),s=WM(r.id),{color:c,bg:f}=Kc[r.category]||{};return V.jsxs("div",{style:{maxWidth:"760px",margin:"0 auto",padding:"32px 24px"},children:[V.jsxs("div",{onClick:()=>t(`/${r.category}`),style:{display:"inline-flex",alignItems:"center",gap:"6px",color:"#888",fontSize:"0.875rem",cursor:"pointer",marginBottom:"20px"},children:[V.jsx(cS,{}),Xc[r.category]]}),V.jsx("div",{style:{marginBottom:"12px"},children:V.jsx("span",{style:{background:f,color:c,fontWeight:600,fontSize:"0.78rem",padding:"3px 10px",borderRadius:"12px",cursor:"pointer"},onClick:()=>t(`/${r.category}`),children:Xc[r.category]})}),V.jsx("h1",{style:{fontSize:"1.8rem",fontWeight:"800",lineHeight:"1.3",marginBottom:"16px",color:"#1a1a1a"},children:r.title}),V.jsxs("div",{style:{display:"flex",gap:"16px",color:"#999",fontSize:"0.85rem",marginBottom:"8px",flexWrap:"wrap",alignItems:"center"},children:[V.jsxs("span",{children:[V.jsx(J8,{style:{marginRight:"4px"}}),r.author]}),V.jsxs("span",{children:[V.jsx(dS,{style:{marginRight:"4px"}}),r.published]}),r.updated!==r.published&&V.jsxs("span",{style:{color:"#bbb"},children:["最后更新：",r.updated]}),r.readingTime&&V.jsxs("span",{children:[V.jsx(hS,{style:{marginRight:"4px"}}),r.readingTime," 分钟阅读"]})]}),V.jsx("p",{style:{color:"#666",fontSize:"0.95rem",borderLeft:"3px solid #c0392b",paddingLeft:"12px",margin:"20px 0 32px",lineHeight:"1.6"},children:r.summary}),V.jsx("div",{className:"note-content",children:V.jsx(dx,{remarkPlugins:[hx],children:s})}),((h=r.tags)==null?void 0:h.length)>0&&V.jsx("div",{style:{marginTop:"32px",paddingTop:"20px",borderTop:"1px solid #f0f0f0",display:"flex",gap:"8px",flexWrap:"wrap"},children:r.tags.map(d=>V.jsx(Rw,{style:{borderRadius:"12px"},children:d},d))}),V.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:"16px",marginTop:"32px",paddingTop:"24px",borderTop:"1px solid #f0f0f0"},children:[V.jsx("div",{style:{flex:1},children:a&&V.jsxs("div",{onClick:()=>t(`/${a.category}/${a.id}`),style:{cursor:"pointer"},children:[V.jsx("div",{style:{fontSize:"0.78rem",color:"#aaa",marginBottom:"4px"},children:"← 上一篇"}),V.jsx("div",{style:{fontWeight:"600",color:"#333",fontSize:"0.9rem"},children:a.title})]})}),V.jsx("div",{style:{flex:1,textAlign:"right"},children:o&&V.jsxs("div",{onClick:()=>t(`/${o.category}/${o.id}`),style:{cursor:"pointer"},children:[V.jsx("div",{style:{fontSize:"0.78rem",color:"#aaa",marginBottom:"4px"},children:"下一篇 →"}),V.jsx("div",{style:{fontWeight:"600",color:"#333",fontSize:"0.9rem"},children:o.title})]})})]})]})},B_=[{label:"首页",key:"home",href:"/"},{label:"生活",key:"life",href:"#/life"},{label:"教育",key:"education",href:"#/education"},{label:"住房",key:"housing",href:"#/housing"},{label:"服务",key:"services",href:"#/services"},{label:"社区",key:"community",href:"#/community"},{label:"全部资料",key:"notes",href:"#/notes"},{label:"关于",key:"about",href:"#/about"}];function P2(){const e=window.location.hash.replace("#/","").split("/")[0];return e||"home"}function F_(){const{Content:e}=ro,[t,r]=b.useState(P2);return b.useEffect(()=>{const a=()=>r(P2());return window.addEventListener("hashchange",a),()=>window.removeEventListener("hashchange",a)},[]),V.jsxs(ro,{style:{minHeight:"100vh"},children:[V.jsxs("header",{className:"app-header",children:[V.jsxs("a",{href:"/",className:"app-logo",children:[V.jsx("span",{className:"app-logo-en",children:"PrincetonHuaren"}),V.jsx("span",{className:"app-logo-cn",children:"普林斯顿华人"})]}),V.jsx("nav",{className:"app-nav",children:B_.map(a=>V.jsx("a",{href:a.href,className:`app-nav-item${t===a.key?" active":""}`,children:a.label},a.key))})]}),V.jsx(e,{style:{flex:1},children:V.jsx(LE,{basename:"/",children:V.jsxs(mE,{children:[V.jsx(Or,{path:"/",element:V.jsx(tN,{})}),V.jsx(Or,{path:"/life",element:V.jsx(Oc,{category:"life",title:"生活"})}),V.jsx(Or,{path:"/education",element:V.jsx(Oc,{category:"education",title:"教育"})}),V.jsx(Or,{path:"/housing",element:V.jsx(Oc,{category:"housing",title:"住房"})}),V.jsx(Or,{path:"/services",element:V.jsx(Oc,{category:"services",title:"服务"})}),V.jsx(Or,{path:"/community",element:V.jsx(k_,{})}),V.jsx(Or,{path:"/about",element:V.jsx(L_,{})}),V.jsx(Or,{path:"/notes",element:V.jsx(sN,{})}),V.jsx(Or,{path:"/notes/:noteId",element:V.jsx(__,{})}),V.jsx(Or,{path:"/feedback",element:V.jsx(oN,{})}),V.jsx(Or,{path:"/:category/:postId",element:V.jsx(H_,{})})]})})}),V.jsx("footer",{className:"app-footer",children:V.jsxs("div",{className:"app-footer-content",children:[V.jsx("div",{className:"app-footer-brand",children:"PrincetonHuaren"}),V.jsx("div",{className:"app-footer-desc",children:"Princeton 华人生活信息分享网站"}),V.jsxs("div",{className:"app-footer-links",children:[V.jsx("a",{href:"#/about",children:"关于本站"}),V.jsx("a",{href:"#/feedback",children:"联系我们"})]}),V.jsx("div",{className:"app-footer-copy",children:"© 2025 PrincetonHuaren · 内容基于社区成员推荐，仅供参考"})]})})]})}E3.createRoot(document.getElementById("root")).render(V.jsx(b.StrictMode,{children:V.jsx(F_,{})}));
