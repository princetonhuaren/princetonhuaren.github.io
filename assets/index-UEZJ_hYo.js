var xE=Object.defineProperty;var EE=(e,t,r)=>t in e?xE(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var xr=(e,t,r)=>EE(e,typeof t!="symbol"?t+"":t,r);function cS(e,t){for(var r=0;r<t.length;r++){const i=t[r];if(typeof i!="string"&&!Array.isArray(i)){for(const o in i)if(o!=="default"&&!(o in e)){const s=Object.getOwnPropertyDescriptor(i,o);s&&Object.defineProperty(e,o,s.get?s:{enumerable:!0,get:()=>i[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}})();function Ph(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Om={exports:{}},ms={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dy;function $E(){if(Dy)return ms;Dy=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function r(i,o,s){var u=null;if(s!==void 0&&(u=""+s),o.key!==void 0&&(u=""+o.key),"key"in o){s={};for(var d in o)d!=="key"&&(s[d]=o[d])}else s=o;return o=s.ref,{$$typeof:e,type:i,key:u,ref:o!==void 0?o:null,props:s}}return ms.Fragment=t,ms.jsx=r,ms.jsxs=r,ms}var zy;function RE(){return zy||(zy=1,Om.exports=$E()),Om.exports}var Nt=RE(),Mm={exports:{}},st={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ly;function TE(){if(Ly)return st;Ly=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),s=Symbol.for("react.consumer"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),y=Symbol.iterator;function b(M){return M===null||typeof M!="object"?null:(M=y&&M[y]||M["@@iterator"],typeof M=="function"?M:null)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,x={};function S(M,k,K){this.props=M,this.context=k,this.refs=x,this.updater=K||w}S.prototype.isReactComponent={},S.prototype.setState=function(M,k){if(typeof M!="object"&&typeof M!="function"&&M!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,M,k,"setState")},S.prototype.forceUpdate=function(M){this.updater.enqueueForceUpdate(this,M,"forceUpdate")};function $(){}$.prototype=S.prototype;function R(M,k,K){this.props=M,this.context=k,this.refs=x,this.updater=K||w}var T=R.prototype=new $;T.constructor=R,C(T,S.prototype),T.isPureReactComponent=!0;var z=Array.isArray,O={H:null,A:null,T:null,S:null},A=Object.prototype.hasOwnProperty;function P(M,k,K,X,I,te){return K=te.ref,{$$typeof:e,type:M,key:k,ref:K!==void 0?K:null,props:te}}function B(M,k){return P(M.type,k,void 0,void 0,void 0,M.props)}function N(M){return typeof M=="object"&&M!==null&&M.$$typeof===e}function H(M){var k={"=":"=0",":":"=2"};return"$"+M.replace(/[=:]/g,function(K){return k[K]})}var j=/\/+/g;function W(M,k){return typeof M=="object"&&M!==null&&M.key!=null?H(""+M.key):k.toString(36)}function V(){}function U(M){switch(M.status){case"fulfilled":return M.value;case"rejected":throw M.reason;default:switch(typeof M.status=="string"?M.then(V,V):(M.status="pending",M.then(function(k){M.status==="pending"&&(M.status="fulfilled",M.value=k)},function(k){M.status==="pending"&&(M.status="rejected",M.reason=k)})),M.status){case"fulfilled":return M.value;case"rejected":throw M.reason}}throw M}function Z(M,k,K,X,I){var te=typeof M;(te==="undefined"||te==="boolean")&&(M=null);var ne=!1;if(M===null)ne=!0;else switch(te){case"bigint":case"string":case"number":ne=!0;break;case"object":switch(M.$$typeof){case e:case t:ne=!0;break;case p:return ne=M._init,Z(ne(M._payload),k,K,X,I)}}if(ne)return I=I(M),ne=X===""?"."+W(M,0):X,z(I)?(K="",ne!=null&&(K=ne.replace(j,"$&/")+"/"),Z(I,k,K,"",function(ce){return ce})):I!=null&&(N(I)&&(I=B(I,K+(I.key==null||M&&M.key===I.key?"":(""+I.key).replace(j,"$&/")+"/")+ne)),k.push(I)),1;ne=0;var fe=X===""?".":X+":";if(z(M))for(var ae=0;ae<M.length;ae++)X=M[ae],te=fe+W(X,ae),ne+=Z(X,k,K,te,I);else if(ae=b(M),typeof ae=="function")for(M=ae.call(M),ae=0;!(X=M.next()).done;)X=X.value,te=fe+W(X,ae++),ne+=Z(X,k,K,te,I);else if(te==="object"){if(typeof M.then=="function")return Z(U(M),k,K,X,I);throw k=String(M),Error("Objects are not valid as a React child (found: "+(k==="[object Object]"?"object with keys {"+Object.keys(M).join(", ")+"}":k)+"). If you meant to render a collection of children, use an array instead.")}return ne}function _(M,k,K){if(M==null)return M;var X=[],I=0;return Z(M,X,"","",function(te){return k.call(K,te,I++)}),X}function L(M){if(M._status===-1){var k=M._result;k=k(),k.then(function(K){(M._status===0||M._status===-1)&&(M._status=1,M._result=K)},function(K){(M._status===0||M._status===-1)&&(M._status=2,M._result=K)}),M._status===-1&&(M._status=0,M._result=k)}if(M._status===1)return M._result.default;throw M._result}var F=typeof reportError=="function"?reportError:function(M){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var k=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof M=="object"&&M!==null&&typeof M.message=="string"?String(M.message):String(M),error:M});if(!window.dispatchEvent(k))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",M);return}console.error(M)};function Y(){}return st.Children={map:_,forEach:function(M,k,K){_(M,function(){k.apply(this,arguments)},K)},count:function(M){var k=0;return _(M,function(){k++}),k},toArray:function(M){return _(M,function(k){return k})||[]},only:function(M){if(!N(M))throw Error("React.Children.only expected to receive a single React element child.");return M}},st.Component=S,st.Fragment=r,st.Profiler=o,st.PureComponent=R,st.StrictMode=i,st.Suspense=m,st.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,st.act=function(){throw Error("act(...) is not supported in production builds of React.")},st.cache=function(M){return function(){return M.apply(null,arguments)}},st.cloneElement=function(M,k,K){if(M==null)throw Error("The argument must be a React element, but you passed "+M+".");var X=C({},M.props),I=M.key,te=void 0;if(k!=null)for(ne in k.ref!==void 0&&(te=void 0),k.key!==void 0&&(I=""+k.key),k)!A.call(k,ne)||ne==="key"||ne==="__self"||ne==="__source"||ne==="ref"&&k.ref===void 0||(X[ne]=k[ne]);var ne=arguments.length-2;if(ne===1)X.children=K;else if(1<ne){for(var fe=Array(ne),ae=0;ae<ne;ae++)fe[ae]=arguments[ae+2];X.children=fe}return P(M.type,I,void 0,void 0,te,X)},st.createContext=function(M){return M={$$typeof:u,_currentValue:M,_currentValue2:M,_threadCount:0,Provider:null,Consumer:null},M.Provider=M,M.Consumer={$$typeof:s,_context:M},M},st.createElement=function(M,k,K){var X,I={},te=null;if(k!=null)for(X in k.key!==void 0&&(te=""+k.key),k)A.call(k,X)&&X!=="key"&&X!=="__self"&&X!=="__source"&&(I[X]=k[X]);var ne=arguments.length-2;if(ne===1)I.children=K;else if(1<ne){for(var fe=Array(ne),ae=0;ae<ne;ae++)fe[ae]=arguments[ae+2];I.children=fe}if(M&&M.defaultProps)for(X in ne=M.defaultProps,ne)I[X]===void 0&&(I[X]=ne[X]);return P(M,te,void 0,void 0,null,I)},st.createRef=function(){return{current:null}},st.forwardRef=function(M){return{$$typeof:d,render:M}},st.isValidElement=N,st.lazy=function(M){return{$$typeof:p,_payload:{_status:-1,_result:M},_init:L}},st.memo=function(M,k){return{$$typeof:h,type:M,compare:k===void 0?null:k}},st.startTransition=function(M){var k=O.T,K={};O.T=K;try{var X=M(),I=O.S;I!==null&&I(K,X),typeof X=="object"&&X!==null&&typeof X.then=="function"&&X.then(Y,F)}catch(te){F(te)}finally{O.T=k}},st.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},st.use=function(M){return O.H.use(M)},st.useActionState=function(M,k,K){return O.H.useActionState(M,k,K)},st.useCallback=function(M,k){return O.H.useCallback(M,k)},st.useContext=function(M){return O.H.useContext(M)},st.useDebugValue=function(){},st.useDeferredValue=function(M,k){return O.H.useDeferredValue(M,k)},st.useEffect=function(M,k){return O.H.useEffect(M,k)},st.useId=function(){return O.H.useId()},st.useImperativeHandle=function(M,k,K){return O.H.useImperativeHandle(M,k,K)},st.useInsertionEffect=function(M,k){return O.H.useInsertionEffect(M,k)},st.useLayoutEffect=function(M,k){return O.H.useLayoutEffect(M,k)},st.useMemo=function(M,k){return O.H.useMemo(M,k)},st.useOptimistic=function(M,k){return O.H.useOptimistic(M,k)},st.useReducer=function(M,k,K){return O.H.useReducer(M,k,K)},st.useRef=function(M){return O.H.useRef(M)},st.useState=function(M){return O.H.useState(M)},st.useSyncExternalStore=function(M,k,K){return O.H.useSyncExternalStore(M,k,K)},st.useTransition=function(){return O.H.useTransition()},st.version="19.0.0",st}var Hy;function _h(){return Hy||(Hy=1,Mm.exports=TE()),Mm.exports}var f=_h();const he=Ph(f),nd=cS({__proto__:null,default:he},[f]);var Am={exports:{}},gs={},Nm={exports:{}},Pm={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var By;function OE(){return By||(By=1,function(e){function t(_,L){var F=_.length;_.push(L);e:for(;0<F;){var Y=F-1>>>1,M=_[Y];if(0<o(M,L))_[Y]=L,_[F]=M,F=Y;else break e}}function r(_){return _.length===0?null:_[0]}function i(_){if(_.length===0)return null;var L=_[0],F=_.pop();if(F!==L){_[0]=F;e:for(var Y=0,M=_.length,k=M>>>1;Y<k;){var K=2*(Y+1)-1,X=_[K],I=K+1,te=_[I];if(0>o(X,F))I<M&&0>o(te,X)?(_[Y]=te,_[I]=F,Y=I):(_[Y]=X,_[K]=F,Y=K);else if(I<M&&0>o(te,F))_[Y]=te,_[I]=F,Y=I;else break e}}return L}function o(_,L){var F=_.sortIndex-L.sortIndex;return F!==0?F:_.id-L.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var u=Date,d=u.now();e.unstable_now=function(){return u.now()-d}}var m=[],h=[],p=1,y=null,b=3,w=!1,C=!1,x=!1,S=typeof setTimeout=="function"?setTimeout:null,$=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;function T(_){for(var L=r(h);L!==null;){if(L.callback===null)i(h);else if(L.startTime<=_)i(h),L.sortIndex=L.expirationTime,t(m,L);else break;L=r(h)}}function z(_){if(x=!1,T(_),!C)if(r(m)!==null)C=!0,U();else{var L=r(h);L!==null&&Z(z,L.startTime-_)}}var O=!1,A=-1,P=5,B=-1;function N(){return!(e.unstable_now()-B<P)}function H(){if(O){var _=e.unstable_now();B=_;var L=!0;try{e:{C=!1,x&&(x=!1,$(A),A=-1),w=!0;var F=b;try{t:{for(T(_),y=r(m);y!==null&&!(y.expirationTime>_&&N());){var Y=y.callback;if(typeof Y=="function"){y.callback=null,b=y.priorityLevel;var M=Y(y.expirationTime<=_);if(_=e.unstable_now(),typeof M=="function"){y.callback=M,T(_),L=!0;break t}y===r(m)&&i(m),T(_)}else i(m);y=r(m)}if(y!==null)L=!0;else{var k=r(h);k!==null&&Z(z,k.startTime-_),L=!1}}break e}finally{y=null,b=F,w=!1}L=void 0}}finally{L?j():O=!1}}}var j;if(typeof R=="function")j=function(){R(H)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,V=W.port2;W.port1.onmessage=H,j=function(){V.postMessage(null)}}else j=function(){S(H,0)};function U(){O||(O=!0,j())}function Z(_,L){A=S(function(){_(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){C||w||(C=!0,U())},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return b},e.unstable_getFirstCallbackNode=function(){return r(m)},e.unstable_next=function(_){switch(b){case 1:case 2:case 3:var L=3;break;default:L=b}var F=b;b=L;try{return _()}finally{b=F}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,L){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var F=b;b=_;try{return L()}finally{b=F}},e.unstable_scheduleCallback=function(_,L,F){var Y=e.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?Y+F:Y):F=Y,_){case 1:var M=-1;break;case 2:M=250;break;case 5:M=1073741823;break;case 4:M=1e4;break;default:M=5e3}return M=F+M,_={id:p++,callback:L,priorityLevel:_,startTime:F,expirationTime:M,sortIndex:-1},F>Y?(_.sortIndex=F,t(h,_),r(m)===null&&_===r(h)&&(x?($(A),A=-1):x=!0,Z(z,F-Y))):(_.sortIndex=M,t(m,_),C||w||(C=!0,U())),_},e.unstable_shouldYield=N,e.unstable_wrapCallback=function(_){var L=b;return function(){var F=b;b=L;try{return _.apply(this,arguments)}finally{b=F}}}}(Pm)),Pm}var Iy;function ME(){return Iy||(Iy=1,Nm.exports=OE()),Nm.exports}var _m={exports:{}},tr={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jy;function AE(){if(jy)return tr;jy=1;var e=_h();function t(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var p=2;p<arguments.length;p++)h+="&args[]="+encodeURIComponent(arguments[p])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var i={d:{f:r,r:function(){throw Error(t(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},o=Symbol.for("react.portal");function s(m,h,p){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:y==null?null:""+y,children:m,containerInfo:h,implementation:p}}var u=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return tr.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,tr.createPortal=function(m,h){var p=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(t(299));return s(m,h,null,p)},tr.flushSync=function(m){var h=u.T,p=i.p;try{if(u.T=null,i.p=2,m)return m()}finally{u.T=h,i.p=p,i.d.f()}},tr.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,i.d.C(m,h))},tr.prefetchDNS=function(m){typeof m=="string"&&i.d.D(m)},tr.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var p=h.as,y=d(p,h.crossOrigin),b=typeof h.integrity=="string"?h.integrity:void 0,w=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;p==="style"?i.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:y,integrity:b,fetchPriority:w}):p==="script"&&i.d.X(m,{crossOrigin:y,integrity:b,fetchPriority:w,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},tr.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var p=d(h.as,h.crossOrigin);i.d.M(m,{crossOrigin:p,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&i.d.M(m)},tr.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var p=h.as,y=d(p,h.crossOrigin);i.d.L(m,p,{crossOrigin:y,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},tr.preloadModule=function(m,h){if(typeof m=="string")if(h){var p=d(h.as,h.crossOrigin);i.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:p,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else i.d.m(m)},tr.requestFormReset=function(m){i.d.r(m)},tr.unstable_batchedUpdates=function(m,h){return m(h)},tr.useFormState=function(m,h,p){return u.H.useFormState(m,h,p)},tr.useFormStatus=function(){return u.H.useHostTransitionStatus()},tr.version="19.0.0",tr}var ky;function uS(){if(ky)return _m.exports;ky=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),_m.exports=AE(),_m.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fy;function NE(){if(Fy)return gs;Fy=1;var e=ME(),t=_h(),r=uS();function i(n){var a="https://react.dev/errors/"+n;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)a+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+n+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}var s=Symbol.for("react.element"),u=Symbol.for("react.transitional.element"),d=Symbol.for("react.portal"),m=Symbol.for("react.fragment"),h=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),y=Symbol.for("react.provider"),b=Symbol.for("react.consumer"),w=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),S=Symbol.for("react.suspense_list"),$=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),T=Symbol.for("react.offscreen"),z=Symbol.for("react.memo_cache_sentinel"),O=Symbol.iterator;function A(n){return n===null||typeof n!="object"?null:(n=O&&n[O]||n["@@iterator"],typeof n=="function"?n:null)}var P=Symbol.for("react.client.reference");function B(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===P?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case m:return"Fragment";case d:return"Portal";case p:return"Profiler";case h:return"StrictMode";case x:return"Suspense";case S:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case w:return(n.displayName||"Context")+".Provider";case b:return(n._context.displayName||"Context")+".Consumer";case C:var a=n.render;return n=n.displayName,n||(n=a.displayName||a.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case $:return a=n.displayName||null,a!==null?a:B(n.type)||"Memo";case R:a=n._payload,n=n._init;try{return B(n(a))}catch{}}return null}var N=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=Object.assign,j,W;function V(n){if(j===void 0)try{throw Error()}catch(l){var a=l.stack.trim().match(/\n( *(at )?)/);j=a&&a[1]||"",W=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+j+n+W}var U=!1;function Z(n,a){if(!n||U)return"";U=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var c={DetermineComponentFrameRoot:function(){try{if(a){var pe=function(){throw Error()};if(Object.defineProperty(pe.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(pe,[])}catch(me){var se=me}Reflect.construct(n,[],pe)}else{try{pe.call()}catch(me){se=me}n.call(pe.prototype)}}else{try{throw Error()}catch(me){se=me}(pe=n())&&typeof pe.catch=="function"&&pe.catch(function(){})}}catch(me){if(me&&se&&typeof me.stack=="string")return[me.stack,se.stack]}return[null,null]}};c.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var g=Object.getOwnPropertyDescriptor(c.DetermineComponentFrameRoot,"name");g&&g.configurable&&Object.defineProperty(c.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var v=c.DetermineComponentFrameRoot(),E=v[0],D=v[1];if(E&&D){var G=E.split(`
`),ee=D.split(`
`);for(g=c=0;c<G.length&&!G[c].includes("DetermineComponentFrameRoot");)c++;for(;g<ee.length&&!ee[g].includes("DetermineComponentFrameRoot");)g++;if(c===G.length||g===ee.length)for(c=G.length-1,g=ee.length-1;1<=c&&0<=g&&G[c]!==ee[g];)g--;for(;1<=c&&0<=g;c--,g--)if(G[c]!==ee[g]){if(c!==1||g!==1)do if(c--,g--,0>g||G[c]!==ee[g]){var ge=`
`+G[c].replace(" at new "," at ");return n.displayName&&ge.includes("<anonymous>")&&(ge=ge.replace("<anonymous>",n.displayName)),ge}while(1<=c&&0<=g);break}}}finally{U=!1,Error.prepareStackTrace=l}return(l=n?n.displayName||n.name:"")?V(l):""}function _(n){switch(n.tag){case 26:case 27:case 5:return V(n.type);case 16:return V("Lazy");case 13:return V("Suspense");case 19:return V("SuspenseList");case 0:case 15:return n=Z(n.type,!1),n;case 11:return n=Z(n.type.render,!1),n;case 1:return n=Z(n.type,!0),n;default:return""}}function L(n){try{var a="";do a+=_(n),n=n.return;while(n);return a}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}function F(n){var a=n,l=n;if(n.alternate)for(;a.return;)a=a.return;else{n=a;do a=n,(a.flags&4098)!==0&&(l=a.return),n=a.return;while(n)}return a.tag===3?l:null}function Y(n){if(n.tag===13){var a=n.memoizedState;if(a===null&&(n=n.alternate,n!==null&&(a=n.memoizedState)),a!==null)return a.dehydrated}return null}function M(n){if(F(n)!==n)throw Error(i(188))}function k(n){var a=n.alternate;if(!a){if(a=F(n),a===null)throw Error(i(188));return a!==n?null:n}for(var l=n,c=a;;){var g=l.return;if(g===null)break;var v=g.alternate;if(v===null){if(c=g.return,c!==null){l=c;continue}break}if(g.child===v.child){for(v=g.child;v;){if(v===l)return M(g),n;if(v===c)return M(g),a;v=v.sibling}throw Error(i(188))}if(l.return!==c.return)l=g,c=v;else{for(var E=!1,D=g.child;D;){if(D===l){E=!0,l=g,c=v;break}if(D===c){E=!0,c=g,l=v;break}D=D.sibling}if(!E){for(D=v.child;D;){if(D===l){E=!0,l=v,c=g;break}if(D===c){E=!0,c=v,l=g;break}D=D.sibling}if(!E)throw Error(i(189))}}if(l.alternate!==c)throw Error(i(190))}if(l.tag!==3)throw Error(i(188));return l.stateNode.current===l?n:a}function K(n){var a=n.tag;if(a===5||a===26||a===27||a===6)return n;for(n=n.child;n!==null;){if(a=K(n),a!==null)return a;n=n.sibling}return null}var X=Array.isArray,I=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,te={pending:!1,data:null,method:null,action:null},ne=[],fe=-1;function ae(n){return{current:n}}function ce(n){0>fe||(n.current=ne[fe],ne[fe]=null,fe--)}function de(n,a){fe++,ne[fe]=n.current,n.current=a}var xe=ae(null),Se=ae(null),Oe=ae(null),Ce=ae(null);function we(n,a){switch(de(Oe,a),de(Se,n),de(xe,null),n=a.nodeType,n){case 9:case 11:a=(a=a.documentElement)&&(a=a.namespaceURI)?cy(a):0;break;default:if(n=n===8?a.parentNode:a,a=n.tagName,n=n.namespaceURI)n=cy(n),a=uy(n,a);else switch(a){case"svg":a=1;break;case"math":a=2;break;default:a=0}}ce(xe),de(xe,a)}function be(){ce(xe),ce(Se),ce(Oe)}function De(n){n.memoizedState!==null&&de(Ce,n);var a=xe.current,l=uy(a,n.type);a!==l&&(de(Se,n),de(xe,l))}function Te(n){Se.current===n&&(ce(xe),ce(Se)),Ce.current===n&&(ce(Ce),ss._currentValue=te)}var Be=Object.prototype.hasOwnProperty,Ne=e.unstable_scheduleCallback,$e=e.unstable_cancelCallback,Fe=e.unstable_shouldYield,ye=e.unstable_requestPaint,Re=e.unstable_now,Ue=e.unstable_getCurrentPriorityLevel,Ie=e.unstable_ImmediatePriority,at=e.unstable_UserBlockingPriority,qe=e.unstable_NormalPriority,Ke=e.unstable_LowPriority,Xe=e.unstable_IdlePriority,et=e.log,it=e.unstable_setDisableYieldValue,je=null,Ee=null;function Ye(n){if(Ee&&typeof Ee.onCommitFiberRoot=="function")try{Ee.onCommitFiberRoot(je,n,void 0,(n.current.flags&128)===128)}catch{}}function Je(n){if(typeof et=="function"&&it(n),Ee&&typeof Ee.setStrictMode=="function")try{Ee.setStrictMode(je,n)}catch{}}var nt=Math.clz32?Math.clz32:nn,tn=Math.log,kt=Math.LN2;function nn(n){return n>>>=0,n===0?32:31-(tn(n)/kt|0)|0}var qt=128,Un=4194304;function Ft(n){var a=n&42;if(a!==0)return a;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function $t(n,a){var l=n.pendingLanes;if(l===0)return 0;var c=0,g=n.suspendedLanes,v=n.pingedLanes,E=n.warmLanes;n=n.finishedLanes!==0;var D=l&134217727;return D!==0?(l=D&~g,l!==0?c=Ft(l):(v&=D,v!==0?c=Ft(v):n||(E=D&~E,E!==0&&(c=Ft(E))))):(D=l&~g,D!==0?c=Ft(D):v!==0?c=Ft(v):n||(E=l&~E,E!==0&&(c=Ft(E)))),c===0?0:a!==0&&a!==c&&(a&g)===0&&(g=c&-c,E=a&-a,g>=E||g===32&&(E&4194176)!==0)?a:c}function It(n,a){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&a)===0}function xt(n,a){switch(n){case 1:case 2:case 4:case 8:return a+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ve(){var n=qt;return qt<<=1,(qt&4194176)===0&&(qt=128),n}function _e(){var n=Un;return Un<<=1,(Un&62914560)===0&&(Un=4194304),n}function ze(n){for(var a=[],l=0;31>l;l++)a.push(n);return a}function ct(n,a){n.pendingLanes|=a,a!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function Pt(n,a,l,c,g,v){var E=n.pendingLanes;n.pendingLanes=l,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=l,n.entangledLanes&=l,n.errorRecoveryDisabledLanes&=l,n.shellSuspendCounter=0;var D=n.entanglements,G=n.expirationTimes,ee=n.hiddenUpdates;for(l=E&~l;0<l;){var ge=31-nt(l),pe=1<<ge;D[ge]=0,G[ge]=-1;var se=ee[ge];if(se!==null)for(ee[ge]=null,ge=0;ge<se.length;ge++){var me=se[ge];me!==null&&(me.lane&=-536870913)}l&=~pe}c!==0&&wn(n,c,0),v!==0&&g===0&&n.tag!==0&&(n.suspendedLanes|=v&~(E&~a))}function wn(n,a,l){n.pendingLanes|=a,n.suspendedLanes&=~a;var c=31-nt(a);n.entangledLanes|=a,n.entanglements[c]=n.entanglements[c]|1073741824|l&4194218}function ht(n,a){var l=n.entangledLanes|=a;for(n=n.entanglements;l;){var c=31-nt(l),g=1<<c;g&a|n[c]&a&&(n[c]|=a),l&=~g}}function Wn(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function ar(){var n=I.p;return n!==0?n:(n=window.event,n===void 0?32:Oy(n.type))}function bt(n,a){var l=I.p;try{return I.p=n,a()}finally{I.p=l}}var ot=Math.random().toString(36).slice(2),Ct="__reactFiber$"+ot,vt="__reactProps$"+ot,jt="__reactContainer$"+ot,qn="__reactEvents$"+ot,Jn="__reactListeners$"+ot,Kn="__reactHandles$"+ot,hn="__reactResources$"+ot,un="__reactMarker$"+ot;function xn(n){delete n[Ct],delete n[vt],delete n[qn],delete n[Jn],delete n[Kn]}function En(n){var a=n[Ct];if(a)return a;for(var l=n.parentNode;l;){if(a=l[jt]||l[Ct]){if(l=a.alternate,a.child!==null||l!==null&&l.child!==null)for(n=my(n);n!==null;){if(l=n[Ct])return l;n=my(n)}return a}n=l,l=n.parentNode}return null}function ut(n){if(n=n[Ct]||n[jt]){var a=n.tag;if(a===5||a===6||a===13||a===26||a===27||a===3)return n}return null}function ir(n){var a=n.tag;if(a===5||a===26||a===27||a===6)return n.stateNode;throw Error(i(33))}function lt(n){var a=n[hn];return a||(a=n[hn]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function Ae(n){n[un]=!0}var dt=new Set,Rt={};function Kt(n,a){Yt(n,a),Yt(n+"Capture",a)}function Yt(n,a){for(Rt[n]=a,n=0;n<a.length;n++)dt.add(a[n])}var Xt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),dn=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Bn={},vn={};function ra(n){return Be.call(vn,n)?!0:Be.call(Bn,n)?!1:dn.test(n)?vn[n]=!0:(Bn[n]=!0,!1)}function hr(n,a,l){if(ra(a))if(l===null)n.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":n.removeAttribute(a);return;case"boolean":var c=a.toLowerCase().slice(0,5);if(c!=="data-"&&c!=="aria-"){n.removeAttribute(a);return}}n.setAttribute(a,""+l)}}function $n(n,a,l){if(l===null)n.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(a);return}n.setAttribute(a,""+l)}}function en(n,a,l,c){if(c===null)n.removeAttribute(l);else{switch(typeof c){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(l);return}n.setAttributeNS(a,l,""+c)}}function pn(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Wr(n){var a=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function fr(n){var a=Wr(n)?"checked":"value",l=Object.getOwnPropertyDescriptor(n.constructor.prototype,a),c=""+n[a];if(!n.hasOwnProperty(a)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var g=l.get,v=l.set;return Object.defineProperty(n,a,{configurable:!0,get:function(){return g.call(this)},set:function(E){c=""+E,v.call(this,E)}}),Object.defineProperty(n,a,{enumerable:l.enumerable}),{getValue:function(){return c},setValue:function(E){c=""+E},stopTracking:function(){n._valueTracker=null,delete n[a]}}}}function aa(n){n._valueTracker||(n._valueTracker=fr(n))}function _t(n){if(!n)return!1;var a=n._valueTracker;if(!a)return!0;var l=a.getValue(),c="";return n&&(c=Wr(n)?n.checked?"true":"false":n.value),n=c,n!==l?(a.setValue(n),!0):!1}function pt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var Tt=/[\n"\\]/g;function Dt(n){return n.replace(Tt,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function yn(n,a,l,c,g,v,E,D){n.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?n.type=E:n.removeAttribute("type"),a!=null?E==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+pn(a)):n.value!==""+pn(a)&&(n.value=""+pn(a)):E!=="submit"&&E!=="reset"||n.removeAttribute("value"),a!=null?Ar(n,E,pn(a)):l!=null?Ar(n,E,pn(l)):c!=null&&n.removeAttribute("value"),g==null&&v!=null&&(n.defaultChecked=!!v),g!=null&&(n.checked=g&&typeof g!="function"&&typeof g!="symbol"),D!=null&&typeof D!="function"&&typeof D!="symbol"&&typeof D!="boolean"?n.name=""+pn(D):n.removeAttribute("name")}function qr(n,a,l,c,g,v,E,D){if(v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(n.type=v),a!=null||l!=null){if(!(v!=="submit"&&v!=="reset"||a!=null))return;l=l!=null?""+pn(l):"",a=a!=null?""+pn(a):l,D||a===n.value||(n.value=a),n.defaultValue=a}c=c??g,c=typeof c!="function"&&typeof c!="symbol"&&!!c,n.checked=D?n.checked:!!c,n.defaultChecked=!!c,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(n.name=E)}function Ar(n,a,l){a==="number"&&pt(n.ownerDocument)===n||n.defaultValue===""+l||(n.defaultValue=""+l)}function Nr(n,a,l,c){if(n=n.options,a){a={};for(var g=0;g<l.length;g++)a["$"+l[g]]=!0;for(l=0;l<n.length;l++)g=a.hasOwnProperty("$"+n[l].value),n[l].selected!==g&&(n[l].selected=g),g&&c&&(n[l].defaultSelected=!0)}else{for(l=""+pn(l),a=null,g=0;g<n.length;g++){if(n[g].value===l){n[g].selected=!0,c&&(n[g].defaultSelected=!0);return}a!==null||n[g].disabled||(a=n[g])}a!==null&&(a.selected=!0)}}function Sa(n,a,l){if(a!=null&&(a=""+pn(a),a!==n.value&&(n.value=a),l==null)){n.defaultValue!==a&&(n.defaultValue=a);return}n.defaultValue=l!=null?""+pn(l):""}function ia(n,a,l,c){if(a==null){if(c!=null){if(l!=null)throw Error(i(92));if(X(c)){if(1<c.length)throw Error(i(93));c=c[0]}l=c}l==null&&(l=""),a=l}l=pn(a),n.defaultValue=l,c=n.textContent,c===l&&c!==""&&c!==null&&(n.value=c)}function Qn(n,a){if(a){var l=n.firstChild;if(l&&l===n.lastChild&&l.nodeType===3){l.nodeValue=a;return}}n.textContent=a}var Ca=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function oa(n,a,l){var c=a.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?c?n.setProperty(a,""):a==="float"?n.cssFloat="":n[a]="":c?n.setProperty(a,l):typeof l!="number"||l===0||Ca.has(a)?a==="float"?n.cssFloat=l:n[a]=(""+l).trim():n[a]=l+"px"}function vr(n,a,l){if(a!=null&&typeof a!="object")throw Error(i(62));if(n=n.style,l!=null){for(var c in l)!l.hasOwnProperty(c)||a!=null&&a.hasOwnProperty(c)||(c.indexOf("--")===0?n.setProperty(c,""):c==="float"?n.cssFloat="":n[c]="");for(var g in a)c=a[g],a.hasOwnProperty(g)&&l[g]!==c&&oa(n,g,c)}else for(var v in a)a.hasOwnProperty(v)&&oa(n,v,a[v])}function $i(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fc=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),mc=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Rn(n){return mc.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}var la=null;function sa(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var or=null,pr=null;function Ri(n){var a=ut(n);if(a&&(n=a.stateNode)){var l=n[vt]||null;e:switch(n=a.stateNode,a.type){case"input":if(yn(n,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),a=l.name,l.type==="radio"&&a!=null){for(l=n;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+Dt(""+a)+'"][type="radio"]'),a=0;a<l.length;a++){var c=l[a];if(c!==n&&c.form===n.form){var g=c[vt]||null;if(!g)throw Error(i(90));yn(c,g.value,g.defaultValue,g.defaultValue,g.checked,g.defaultChecked,g.type,g.name)}}for(a=0;a<l.length;a++)c=l[a],c.form===n.form&&_t(c)}break e;case"textarea":Sa(n,l.value,l.defaultValue);break e;case"select":a=l.value,a!=null&&Nr(n,!!l.multiple,a,!1)}}}var Ka=!1;function so(n,a,l){if(Ka)return n(a,l);Ka=!0;try{var c=n(a);return c}finally{if(Ka=!1,(or!==null||pr!==null)&&(qc(),or&&(a=or,n=pr,pr=or=null,Ri(a),n)))for(a=0;a<n.length;a++)Ri(n[a])}}function Pe(n,a){var l=n.stateNode;if(l===null)return null;var c=l[vt]||null;if(c===null)return null;l=c[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(l&&typeof l!="function")throw Error(i(231,a,typeof l));return l}var Ze=!1;if(Xt)try{var zt={};Object.defineProperty(zt,"passive",{get:function(){Ze=!0}}),window.addEventListener("test",zt,zt),window.removeEventListener("test",zt,zt)}catch{Ze=!1}var Lt=null,Vt=null,wa=null;function co(){if(wa)return wa;var n,a=Vt,l=a.length,c,g="value"in Lt?Lt.value:Lt.textContent,v=g.length;for(n=0;n<l&&a[n]===g[n];n++);var E=l-n;for(c=1;c<=E&&a[l-c]===g[v-c];c++);return wa=g.slice(n,1<c?1-c:void 0)}function Ti(n){var a=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&a===13&&(n=13)):n=a,n===10&&(n=13),32<=n||n===13?n:0}function xa(){return!0}function wv(){return!1}function mr(n){function a(l,c,g,v,E){this._reactName=l,this._targetInst=g,this.type=c,this.nativeEvent=v,this.target=E,this.currentTarget=null;for(var D in n)n.hasOwnProperty(D)&&(l=n[D],this[D]=l?l(v):v[D]);return this.isDefaultPrevented=(v.defaultPrevented!=null?v.defaultPrevented:v.returnValue===!1)?xa:wv,this.isPropagationStopped=wv,this}return H(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=xa)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=xa)},persist:function(){},isPersistent:xa}),a}var Oi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},gc=mr(Oi),El=H({},Oi,{view:0,detail:0}),xw=mr(El),_d,Dd,$l,hc=H({},El,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ld,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==$l&&($l&&n.type==="mousemove"?(_d=n.screenX-$l.screenX,Dd=n.screenY-$l.screenY):Dd=_d=0,$l=n),_d)},movementY:function(n){return"movementY"in n?n.movementY:Dd}}),xv=mr(hc),Ew=H({},hc,{dataTransfer:0}),$w=mr(Ew),Rw=H({},El,{relatedTarget:0}),zd=mr(Rw),Tw=H({},Oi,{animationName:0,elapsedTime:0,pseudoElement:0}),Ow=mr(Tw),Mw=H({},Oi,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Aw=mr(Mw),Nw=H({},Oi,{data:0}),Ev=mr(Nw),Pw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_w={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Dw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zw(n){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(n):(n=Dw[n])?!!a[n]:!1}function Ld(){return zw}var Lw=H({},El,{key:function(n){if(n.key){var a=Pw[n.key]||n.key;if(a!=="Unidentified")return a}return n.type==="keypress"?(n=Ti(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?_w[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ld,charCode:function(n){return n.type==="keypress"?Ti(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ti(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Hw=mr(Lw),Bw=H({},hc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$v=mr(Bw),Iw=H({},El,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ld}),jw=mr(Iw),kw=H({},Oi,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fw=mr(kw),Vw=H({},hc,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Gw=mr(Vw),Uw=H({},Oi,{newState:0,oldState:0}),Ww=mr(Uw),qw=[9,13,27,32],Hd=Xt&&"CompositionEvent"in window,Rl=null;Xt&&"documentMode"in document&&(Rl=document.documentMode);var Jw=Xt&&"TextEvent"in window&&!Rl,Rv=Xt&&(!Hd||Rl&&8<Rl&&11>=Rl),Tv=" ",Ov=!1;function Mv(n,a){switch(n){case"keyup":return qw.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Av(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var uo=!1;function Kw(n,a){switch(n){case"compositionend":return Av(a);case"keypress":return a.which!==32?null:(Ov=!0,Tv);case"textInput":return n=a.data,n===Tv&&Ov?null:n;default:return null}}function Yw(n,a){if(uo)return n==="compositionend"||!Hd&&Mv(n,a)?(n=co(),wa=Vt=Lt=null,uo=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return Rv&&a.locale!=="ko"?null:a.data;default:return null}}var Xw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nv(n){var a=n&&n.nodeName&&n.nodeName.toLowerCase();return a==="input"?!!Xw[n.type]:a==="textarea"}function Pv(n,a,l,c){or?pr?pr.push(c):pr=[c]:or=c,a=Zc(a,"onChange"),0<a.length&&(l=new gc("onChange","change",null,l,c),n.push({event:l,listeners:a}))}var Tl=null,Ol=null;function Zw(n){ay(n,0)}function vc(n){var a=ir(n);if(_t(a))return n}function _v(n,a){if(n==="change")return a}var Dv=!1;if(Xt){var Bd;if(Xt){var Id="oninput"in document;if(!Id){var zv=document.createElement("div");zv.setAttribute("oninput","return;"),Id=typeof zv.oninput=="function"}Bd=Id}else Bd=!1;Dv=Bd&&(!document.documentMode||9<document.documentMode)}function Lv(){Tl&&(Tl.detachEvent("onpropertychange",Hv),Ol=Tl=null)}function Hv(n){if(n.propertyName==="value"&&vc(Ol)){var a=[];Pv(a,Ol,n,sa(n)),so(Zw,a)}}function Qw(n,a,l){n==="focusin"?(Lv(),Tl=a,Ol=l,Tl.attachEvent("onpropertychange",Hv)):n==="focusout"&&Lv()}function ex(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return vc(Ol)}function tx(n,a){if(n==="click")return vc(a)}function nx(n,a){if(n==="input"||n==="change")return vc(a)}function rx(n,a){return n===a&&(n!==0||1/n===1/a)||n!==n&&a!==a}var yr=typeof Object.is=="function"?Object.is:rx;function Ml(n,a){if(yr(n,a))return!0;if(typeof n!="object"||n===null||typeof a!="object"||a===null)return!1;var l=Object.keys(n),c=Object.keys(a);if(l.length!==c.length)return!1;for(c=0;c<l.length;c++){var g=l[c];if(!Be.call(a,g)||!yr(n[g],a[g]))return!1}return!0}function Bv(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Iv(n,a){var l=Bv(n);n=0;for(var c;l;){if(l.nodeType===3){if(c=n+l.textContent.length,n<=a&&c>=a)return{node:l,offset:a-n};n=c}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Bv(l)}}function jv(n,a){return n&&a?n===a?!0:n&&n.nodeType===3?!1:a&&a.nodeType===3?jv(n,a.parentNode):"contains"in n?n.contains(a):n.compareDocumentPosition?!!(n.compareDocumentPosition(a)&16):!1:!1}function kv(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var a=pt(n.document);a instanceof n.HTMLIFrameElement;){try{var l=typeof a.contentWindow.location.href=="string"}catch{l=!1}if(l)n=a.contentWindow;else break;a=pt(n.document)}return a}function jd(n){var a=n&&n.nodeName&&n.nodeName.toLowerCase();return a&&(a==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||a==="textarea"||n.contentEditable==="true")}function ax(n,a){var l=kv(a);a=n.focusedElem;var c=n.selectionRange;if(l!==a&&a&&a.ownerDocument&&jv(a.ownerDocument.documentElement,a)){if(c!==null&&jd(a)){if(n=c.start,l=c.end,l===void 0&&(l=n),"selectionStart"in a)a.selectionStart=n,a.selectionEnd=Math.min(l,a.value.length);else if(l=(n=a.ownerDocument||document)&&n.defaultView||window,l.getSelection){l=l.getSelection();var g=a.textContent.length,v=Math.min(c.start,g);c=c.end===void 0?v:Math.min(c.end,g),!l.extend&&v>c&&(g=c,c=v,v=g),g=Iv(a,v);var E=Iv(a,c);g&&E&&(l.rangeCount!==1||l.anchorNode!==g.node||l.anchorOffset!==g.offset||l.focusNode!==E.node||l.focusOffset!==E.offset)&&(n=n.createRange(),n.setStart(g.node,g.offset),l.removeAllRanges(),v>c?(l.addRange(n),l.extend(E.node,E.offset)):(n.setEnd(E.node,E.offset),l.addRange(n)))}}for(n=[],l=a;l=l.parentNode;)l.nodeType===1&&n.push({element:l,left:l.scrollLeft,top:l.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<n.length;a++)l=n[a],l.element.scrollLeft=l.left,l.element.scrollTop=l.top}}var ix=Xt&&"documentMode"in document&&11>=document.documentMode,fo=null,kd=null,Al=null,Fd=!1;function Fv(n,a,l){var c=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Fd||fo==null||fo!==pt(c)||(c=fo,"selectionStart"in c&&jd(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Al&&Ml(Al,c)||(Al=c,c=Zc(kd,"onSelect"),0<c.length&&(a=new gc("onSelect","select",null,a,l),n.push({event:a,listeners:c}),a.target=fo)))}function Mi(n,a){var l={};return l[n.toLowerCase()]=a.toLowerCase(),l["Webkit"+n]="webkit"+a,l["Moz"+n]="moz"+a,l}var mo={animationend:Mi("Animation","AnimationEnd"),animationiteration:Mi("Animation","AnimationIteration"),animationstart:Mi("Animation","AnimationStart"),transitionrun:Mi("Transition","TransitionRun"),transitionstart:Mi("Transition","TransitionStart"),transitioncancel:Mi("Transition","TransitionCancel"),transitionend:Mi("Transition","TransitionEnd")},Vd={},Vv={};Xt&&(Vv=document.createElement("div").style,"AnimationEvent"in window||(delete mo.animationend.animation,delete mo.animationiteration.animation,delete mo.animationstart.animation),"TransitionEvent"in window||delete mo.transitionend.transition);function Ai(n){if(Vd[n])return Vd[n];if(!mo[n])return n;var a=mo[n],l;for(l in a)if(a.hasOwnProperty(l)&&l in Vv)return Vd[n]=a[l];return n}var Gv=Ai("animationend"),Uv=Ai("animationiteration"),Wv=Ai("animationstart"),ox=Ai("transitionrun"),lx=Ai("transitionstart"),sx=Ai("transitioncancel"),qv=Ai("transitionend"),Jv=new Map,Kv="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function Jr(n,a){Jv.set(n,a),Kt(a,[n])}var Pr=[],go=0,Gd=0;function pc(){for(var n=go,a=Gd=go=0;a<n;){var l=Pr[a];Pr[a++]=null;var c=Pr[a];Pr[a++]=null;var g=Pr[a];Pr[a++]=null;var v=Pr[a];if(Pr[a++]=null,c!==null&&g!==null){var E=c.pending;E===null?g.next=g:(g.next=E.next,E.next=g),c.pending=g}v!==0&&Yv(l,g,v)}}function yc(n,a,l,c){Pr[go++]=n,Pr[go++]=a,Pr[go++]=l,Pr[go++]=c,Gd|=c,n.lanes|=c,n=n.alternate,n!==null&&(n.lanes|=c)}function Ud(n,a,l,c){return yc(n,a,l,c),bc(n)}function Ya(n,a){return yc(n,null,null,a),bc(n)}function Yv(n,a,l){n.lanes|=l;var c=n.alternate;c!==null&&(c.lanes|=l);for(var g=!1,v=n.return;v!==null;)v.childLanes|=l,c=v.alternate,c!==null&&(c.childLanes|=l),v.tag===22&&(n=v.stateNode,n===null||n._visibility&1||(g=!0)),n=v,v=v.return;g&&a!==null&&n.tag===3&&(v=n.stateNode,g=31-nt(l),v=v.hiddenUpdates,n=v[g],n===null?v[g]=[a]:n.push(a),a.lane=l|536870912)}function bc(n){if(50<ts)throw ts=0,Zf=null,Error(i(185));for(var a=n.return;a!==null;)n=a,a=n.return;return n.tag===3?n.stateNode:null}var ho={},Xv=new WeakMap;function _r(n,a){if(typeof n=="object"&&n!==null){var l=Xv.get(n);return l!==void 0?l:(a={value:n,source:a,stack:L(a)},Xv.set(n,a),a)}return{value:n,source:a,stack:L(a)}}var vo=[],po=0,Sc=null,Cc=0,Dr=[],zr=0,Ni=null,Ea=1,$a="";function Pi(n,a){vo[po++]=Cc,vo[po++]=Sc,Sc=n,Cc=a}function Zv(n,a,l){Dr[zr++]=Ea,Dr[zr++]=$a,Dr[zr++]=Ni,Ni=n;var c=Ea;n=$a;var g=32-nt(c)-1;c&=~(1<<g),l+=1;var v=32-nt(a)+g;if(30<v){var E=g-g%5;v=(c&(1<<E)-1).toString(32),c>>=E,g-=E,Ea=1<<32-nt(a)+g|l<<g|c,$a=v+n}else Ea=1<<v|l<<g|c,$a=n}function Wd(n){n.return!==null&&(Pi(n,1),Zv(n,1,0))}function qd(n){for(;n===Sc;)Sc=vo[--po],vo[po]=null,Cc=vo[--po],vo[po]=null;for(;n===Ni;)Ni=Dr[--zr],Dr[zr]=null,$a=Dr[--zr],Dr[zr]=null,Ea=Dr[--zr],Dr[zr]=null}var lr=null,Yn=null,Ot=!1,Kr=null,ca=!1,Jd=Error(i(519));function _i(n){var a=Error(i(418,""));throw _l(_r(a,n)),Jd}function Qv(n){var a=n.stateNode,l=n.type,c=n.memoizedProps;switch(a[Ct]=n,a[vt]=c,l){case"dialog":wt("cancel",a),wt("close",a);break;case"iframe":case"object":case"embed":wt("load",a);break;case"video":case"audio":for(l=0;l<rs.length;l++)wt(rs[l],a);break;case"source":wt("error",a);break;case"img":case"image":case"link":wt("error",a),wt("load",a);break;case"details":wt("toggle",a);break;case"input":wt("invalid",a),qr(a,c.value,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name,!0),aa(a);break;case"select":wt("invalid",a);break;case"textarea":wt("invalid",a),ia(a,c.value,c.defaultValue,c.children),aa(a)}l=c.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||a.textContent===""+l||c.suppressHydrationWarning===!0||sy(a.textContent,l)?(c.popover!=null&&(wt("beforetoggle",a),wt("toggle",a)),c.onScroll!=null&&wt("scroll",a),c.onScrollEnd!=null&&wt("scrollend",a),c.onClick!=null&&(a.onclick=Qc),a=!0):a=!1,a||_i(n)}function e0(n){for(lr=n.return;lr;)switch(lr.tag){case 3:case 27:ca=!0;return;case 5:case 13:ca=!1;return;default:lr=lr.return}}function Nl(n){if(n!==lr)return!1;if(!Ot)return e0(n),Ot=!0,!1;var a=!1,l;if((l=n.tag!==3&&n.tag!==27)&&((l=n.tag===5)&&(l=n.type,l=!(l!=="form"&&l!=="button")||hm(n.type,n.memoizedProps)),l=!l),l&&(a=!0),a&&Yn&&_i(n),e0(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(i(317));e:{for(n=n.nextSibling,a=0;n;){if(n.nodeType===8)if(l=n.data,l==="/$"){if(a===0){Yn=Xr(n.nextSibling);break e}a--}else l!=="$"&&l!=="$!"&&l!=="$?"||a++;n=n.nextSibling}Yn=null}}else Yn=lr?Xr(n.stateNode.nextSibling):null;return!0}function Pl(){Yn=lr=null,Ot=!1}function _l(n){Kr===null?Kr=[n]:Kr.push(n)}var Dl=Error(i(460)),t0=Error(i(474)),Kd={then:function(){}};function n0(n){return n=n.status,n==="fulfilled"||n==="rejected"}function wc(){}function r0(n,a,l){switch(l=n[l],l===void 0?n.push(a):l!==a&&(a.then(wc,wc),a=l),a.status){case"fulfilled":return a.value;case"rejected":throw n=a.reason,n===Dl?Error(i(483)):n;default:if(typeof a.status=="string")a.then(wc,wc);else{if(n=Zt,n!==null&&100<n.shellSuspendCounter)throw Error(i(482));n=a,n.status="pending",n.then(function(c){if(a.status==="pending"){var g=a;g.status="fulfilled",g.value=c}},function(c){if(a.status==="pending"){var g=a;g.status="rejected",g.reason=c}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw n=a.reason,n===Dl?Error(i(483)):n}throw zl=a,Dl}}var zl=null;function a0(){if(zl===null)throw Error(i(459));var n=zl;return zl=null,n}var yo=null,Ll=0;function xc(n){var a=Ll;return Ll+=1,yo===null&&(yo=[]),r0(yo,n,a)}function Hl(n,a){a=a.props.ref,n.ref=a!==void 0?a:null}function Ec(n,a){throw a.$$typeof===s?Error(i(525)):(n=Object.prototype.toString.call(a),Error(i(31,n==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":n)))}function i0(n){var a=n._init;return a(n._payload)}function o0(n){function a(re,Q){if(n){var ie=re.deletions;ie===null?(re.deletions=[Q],re.flags|=16):ie.push(Q)}}function l(re,Q){if(!n)return null;for(;Q!==null;)a(re,Q),Q=Q.sibling;return null}function c(re){for(var Q=new Map;re!==null;)re.key!==null?Q.set(re.key,re):Q.set(re.index,re),re=re.sibling;return Q}function g(re,Q){return re=si(re,Q),re.index=0,re.sibling=null,re}function v(re,Q,ie){return re.index=ie,n?(ie=re.alternate,ie!==null?(ie=ie.index,ie<Q?(re.flags|=33554434,Q):ie):(re.flags|=33554434,Q)):(re.flags|=1048576,Q)}function E(re){return n&&re.alternate===null&&(re.flags|=33554434),re}function D(re,Q,ie,ve){return Q===null||Q.tag!==6?(Q=Gf(ie,re.mode,ve),Q.return=re,Q):(Q=g(Q,ie),Q.return=re,Q)}function G(re,Q,ie,ve){var He=ie.type;return He===m?ge(re,Q,ie.props.children,ve,ie.key):Q!==null&&(Q.elementType===He||typeof He=="object"&&He!==null&&He.$$typeof===R&&i0(He)===Q.type)?(Q=g(Q,ie.props),Hl(Q,ie),Q.return=re,Q):(Q=Fc(ie.type,ie.key,ie.props,null,re.mode,ve),Hl(Q,ie),Q.return=re,Q)}function ee(re,Q,ie,ve){return Q===null||Q.tag!==4||Q.stateNode.containerInfo!==ie.containerInfo||Q.stateNode.implementation!==ie.implementation?(Q=Uf(ie,re.mode,ve),Q.return=re,Q):(Q=g(Q,ie.children||[]),Q.return=re,Q)}function ge(re,Q,ie,ve,He){return Q===null||Q.tag!==7?(Q=Vi(ie,re.mode,ve,He),Q.return=re,Q):(Q=g(Q,ie),Q.return=re,Q)}function pe(re,Q,ie){if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return Q=Gf(""+Q,re.mode,ie),Q.return=re,Q;if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case u:return ie=Fc(Q.type,Q.key,Q.props,null,re.mode,ie),Hl(ie,Q),ie.return=re,ie;case d:return Q=Uf(Q,re.mode,ie),Q.return=re,Q;case R:var ve=Q._init;return Q=ve(Q._payload),pe(re,Q,ie)}if(X(Q)||A(Q))return Q=Vi(Q,re.mode,ie,null),Q.return=re,Q;if(typeof Q.then=="function")return pe(re,xc(Q),ie);if(Q.$$typeof===w)return pe(re,Ic(re,Q),ie);Ec(re,Q)}return null}function se(re,Q,ie,ve){var He=Q!==null?Q.key:null;if(typeof ie=="string"&&ie!==""||typeof ie=="number"||typeof ie=="bigint")return He!==null?null:D(re,Q,""+ie,ve);if(typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case u:return ie.key===He?G(re,Q,ie,ve):null;case d:return ie.key===He?ee(re,Q,ie,ve):null;case R:return He=ie._init,ie=He(ie._payload),se(re,Q,ie,ve)}if(X(ie)||A(ie))return He!==null?null:ge(re,Q,ie,ve,null);if(typeof ie.then=="function")return se(re,Q,xc(ie),ve);if(ie.$$typeof===w)return se(re,Q,Ic(re,ie),ve);Ec(re,ie)}return null}function me(re,Q,ie,ve,He){if(typeof ve=="string"&&ve!==""||typeof ve=="number"||typeof ve=="bigint")return re=re.get(ie)||null,D(Q,re,""+ve,He);if(typeof ve=="object"&&ve!==null){switch(ve.$$typeof){case u:return re=re.get(ve.key===null?ie:ve.key)||null,G(Q,re,ve,He);case d:return re=re.get(ve.key===null?ie:ve.key)||null,ee(Q,re,ve,He);case R:var gt=ve._init;return ve=gt(ve._payload),me(re,Q,ie,ve,He)}if(X(ve)||A(ve))return re=re.get(ie)||null,ge(Q,re,ve,He,null);if(typeof ve.then=="function")return me(re,Q,ie,xc(ve),He);if(ve.$$typeof===w)return me(re,Q,ie,Ic(Q,ve),He);Ec(Q,ve)}return null}function ke(re,Q,ie,ve){for(var He=null,gt=null,We=Q,Qe=Q=0,kn=null;We!==null&&Qe<ie.length;Qe++){We.index>Qe?(kn=We,We=null):kn=We.sibling;var Mt=se(re,We,ie[Qe],ve);if(Mt===null){We===null&&(We=kn);break}n&&We&&Mt.alternate===null&&a(re,We),Q=v(Mt,Q,Qe),gt===null?He=Mt:gt.sibling=Mt,gt=Mt,We=kn}if(Qe===ie.length)return l(re,We),Ot&&Pi(re,Qe),He;if(We===null){for(;Qe<ie.length;Qe++)We=pe(re,ie[Qe],ve),We!==null&&(Q=v(We,Q,Qe),gt===null?He=We:gt.sibling=We,gt=We);return Ot&&Pi(re,Qe),He}for(We=c(We);Qe<ie.length;Qe++)kn=me(We,re,Qe,ie[Qe],ve),kn!==null&&(n&&kn.alternate!==null&&We.delete(kn.key===null?Qe:kn.key),Q=v(kn,Q,Qe),gt===null?He=kn:gt.sibling=kn,gt=kn);return n&&We.forEach(function(hi){return a(re,hi)}),Ot&&Pi(re,Qe),He}function tt(re,Q,ie,ve){if(ie==null)throw Error(i(151));for(var He=null,gt=null,We=Q,Qe=Q=0,kn=null,Mt=ie.next();We!==null&&!Mt.done;Qe++,Mt=ie.next()){We.index>Qe?(kn=We,We=null):kn=We.sibling;var hi=se(re,We,Mt.value,ve);if(hi===null){We===null&&(We=kn);break}n&&We&&hi.alternate===null&&a(re,We),Q=v(hi,Q,Qe),gt===null?He=hi:gt.sibling=hi,gt=hi,We=kn}if(Mt.done)return l(re,We),Ot&&Pi(re,Qe),He;if(We===null){for(;!Mt.done;Qe++,Mt=ie.next())Mt=pe(re,Mt.value,ve),Mt!==null&&(Q=v(Mt,Q,Qe),gt===null?He=Mt:gt.sibling=Mt,gt=Mt);return Ot&&Pi(re,Qe),He}for(We=c(We);!Mt.done;Qe++,Mt=ie.next())Mt=me(We,re,Qe,Mt.value,ve),Mt!==null&&(n&&Mt.alternate!==null&&We.delete(Mt.key===null?Qe:Mt.key),Q=v(Mt,Q,Qe),gt===null?He=Mt:gt.sibling=Mt,gt=Mt);return n&&We.forEach(function(wE){return a(re,wE)}),Ot&&Pi(re,Qe),He}function gn(re,Q,ie,ve){if(typeof ie=="object"&&ie!==null&&ie.type===m&&ie.key===null&&(ie=ie.props.children),typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case u:e:{for(var He=ie.key;Q!==null;){if(Q.key===He){if(He=ie.type,He===m){if(Q.tag===7){l(re,Q.sibling),ve=g(Q,ie.props.children),ve.return=re,re=ve;break e}}else if(Q.elementType===He||typeof He=="object"&&He!==null&&He.$$typeof===R&&i0(He)===Q.type){l(re,Q.sibling),ve=g(Q,ie.props),Hl(ve,ie),ve.return=re,re=ve;break e}l(re,Q);break}else a(re,Q);Q=Q.sibling}ie.type===m?(ve=Vi(ie.props.children,re.mode,ve,ie.key),ve.return=re,re=ve):(ve=Fc(ie.type,ie.key,ie.props,null,re.mode,ve),Hl(ve,ie),ve.return=re,re=ve)}return E(re);case d:e:{for(He=ie.key;Q!==null;){if(Q.key===He)if(Q.tag===4&&Q.stateNode.containerInfo===ie.containerInfo&&Q.stateNode.implementation===ie.implementation){l(re,Q.sibling),ve=g(Q,ie.children||[]),ve.return=re,re=ve;break e}else{l(re,Q);break}else a(re,Q);Q=Q.sibling}ve=Uf(ie,re.mode,ve),ve.return=re,re=ve}return E(re);case R:return He=ie._init,ie=He(ie._payload),gn(re,Q,ie,ve)}if(X(ie))return ke(re,Q,ie,ve);if(A(ie)){if(He=A(ie),typeof He!="function")throw Error(i(150));return ie=He.call(ie),tt(re,Q,ie,ve)}if(typeof ie.then=="function")return gn(re,Q,xc(ie),ve);if(ie.$$typeof===w)return gn(re,Q,Ic(re,ie),ve);Ec(re,ie)}return typeof ie=="string"&&ie!==""||typeof ie=="number"||typeof ie=="bigint"?(ie=""+ie,Q!==null&&Q.tag===6?(l(re,Q.sibling),ve=g(Q,ie),ve.return=re,re=ve):(l(re,Q),ve=Gf(ie,re.mode,ve),ve.return=re,re=ve),E(re)):l(re,Q)}return function(re,Q,ie,ve){try{Ll=0;var He=gn(re,Q,ie,ve);return yo=null,He}catch(We){if(We===Dl)throw We;var gt=Ir(29,We,null,re.mode);return gt.lanes=ve,gt.return=re,gt}finally{}}}var Di=o0(!0),l0=o0(!1),bo=ae(null),$c=ae(0);function s0(n,a){n=La,de($c,n),de(bo,a),La=n|a.baseLanes}function Yd(){de($c,La),de(bo,bo.current)}function Xd(){La=$c.current,ce(bo),ce($c)}var Lr=ae(null),ua=null;function Xa(n){var a=n.alternate;de(Nn,Nn.current&1),de(Lr,n),ua===null&&(a===null||bo.current!==null||a.memoizedState!==null)&&(ua=n)}function c0(n){if(n.tag===22){if(de(Nn,Nn.current),de(Lr,n),ua===null){var a=n.alternate;a!==null&&a.memoizedState!==null&&(ua=n)}}else Za()}function Za(){de(Nn,Nn.current),de(Lr,Lr.current)}function Ra(n){ce(Lr),ua===n&&(ua=null),ce(Nn)}var Nn=ae(0);function Rc(n){for(var a=n;a!==null;){if(a.tag===13){var l=a.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===n)break;for(;a.sibling===null;){if(a.return===null||a.return===n)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var cx=typeof AbortController<"u"?AbortController:function(){var n=[],a=this.signal={aborted:!1,addEventListener:function(l,c){n.push(c)}};this.abort=function(){a.aborted=!0,n.forEach(function(l){return l()})}},ux=e.unstable_scheduleCallback,dx=e.unstable_NormalPriority,Pn={$$typeof:w,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Zd(){return{controller:new cx,data:new Map,refCount:0}}function Bl(n){n.refCount--,n.refCount===0&&ux(dx,function(){n.controller.abort()})}var Il=null,Qd=0,So=0,Co=null;function fx(n,a){if(Il===null){var l=Il=[];Qd=0,So=om(),Co={status:"pending",value:void 0,then:function(c){l.push(c)}}}return Qd++,a.then(u0,u0),a}function u0(){if(--Qd===0&&Il!==null){Co!==null&&(Co.status="fulfilled");var n=Il;Il=null,So=0,Co=null;for(var a=0;a<n.length;a++)(0,n[a])()}}function mx(n,a){var l=[],c={status:"pending",value:null,reason:null,then:function(g){l.push(g)}};return n.then(function(){c.status="fulfilled",c.value=a;for(var g=0;g<l.length;g++)(0,l[g])(a)},function(g){for(c.status="rejected",c.reason=g,g=0;g<l.length;g++)(0,l[g])(void 0)}),c}var d0=N.S;N.S=function(n,a){typeof a=="object"&&a!==null&&typeof a.then=="function"&&fx(n,a),d0!==null&&d0(n,a)};var zi=ae(null);function ef(){var n=zi.current;return n!==null?n:Zt.pooledCache}function Tc(n,a){a===null?de(zi,zi.current):de(zi,a.pool)}function f0(){var n=ef();return n===null?null:{parent:Pn._currentValue,pool:n}}var Qa=0,ft=null,Gt=null,Tn=null,Oc=!1,wo=!1,Li=!1,Mc=0,jl=0,xo=null,gx=0;function bn(){throw Error(i(321))}function tf(n,a){if(a===null)return!1;for(var l=0;l<a.length&&l<n.length;l++)if(!yr(n[l],a[l]))return!1;return!0}function nf(n,a,l,c,g,v){return Qa=v,ft=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,N.H=n===null||n.memoizedState===null?Hi:ei,Li=!1,v=l(c,g),Li=!1,wo&&(v=g0(a,l,c,g)),m0(n),v}function m0(n){N.H=da;var a=Gt!==null&&Gt.next!==null;if(Qa=0,Tn=Gt=ft=null,Oc=!1,jl=0,xo=null,a)throw Error(i(300));n===null||In||(n=n.dependencies,n!==null&&Bc(n)&&(In=!0))}function g0(n,a,l,c){ft=n;var g=0;do{if(wo&&(xo=null),jl=0,wo=!1,25<=g)throw Error(i(301));if(g+=1,Tn=Gt=null,n.updateQueue!=null){var v=n.updateQueue;v.lastEffect=null,v.events=null,v.stores=null,v.memoCache!=null&&(v.memoCache.index=0)}N.H=Bi,v=a(l,c)}while(wo);return v}function hx(){var n=N.H,a=n.useState()[0];return a=typeof a.then=="function"?kl(a):a,n=n.useState()[0],(Gt!==null?Gt.memoizedState:null)!==n&&(ft.flags|=1024),a}function rf(){var n=Mc!==0;return Mc=0,n}function af(n,a,l){a.updateQueue=n.updateQueue,a.flags&=-2053,n.lanes&=~l}function of(n){if(Oc){for(n=n.memoizedState;n!==null;){var a=n.queue;a!==null&&(a.pending=null),n=n.next}Oc=!1}Qa=0,Tn=Gt=ft=null,wo=!1,jl=Mc=0,xo=null}function gr(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Tn===null?ft.memoizedState=Tn=n:Tn=Tn.next=n,Tn}function On(){if(Gt===null){var n=ft.alternate;n=n!==null?n.memoizedState:null}else n=Gt.next;var a=Tn===null?ft.memoizedState:Tn.next;if(a!==null)Tn=a,Gt=n;else{if(n===null)throw ft.alternate===null?Error(i(467)):Error(i(310));Gt=n,n={memoizedState:Gt.memoizedState,baseState:Gt.baseState,baseQueue:Gt.baseQueue,queue:Gt.queue,next:null},Tn===null?ft.memoizedState=Tn=n:Tn=Tn.next=n}return Tn}var Ac;Ac=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function kl(n){var a=jl;return jl+=1,xo===null&&(xo=[]),n=r0(xo,n,a),a=ft,(Tn===null?a.memoizedState:Tn.next)===null&&(a=a.alternate,N.H=a===null||a.memoizedState===null?Hi:ei),n}function Nc(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return kl(n);if(n.$$typeof===w)return er(n)}throw Error(i(438,String(n)))}function lf(n){var a=null,l=ft.updateQueue;if(l!==null&&(a=l.memoCache),a==null){var c=ft.alternate;c!==null&&(c=c.updateQueue,c!==null&&(c=c.memoCache,c!=null&&(a={data:c.data.map(function(g){return g.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),l===null&&(l=Ac(),ft.updateQueue=l),l.memoCache=a,l=a.data[a.index],l===void 0)for(l=a.data[a.index]=Array(n),c=0;c<n;c++)l[c]=z;return a.index++,l}function Ta(n,a){return typeof a=="function"?a(n):a}function Pc(n){var a=On();return sf(a,Gt,n)}function sf(n,a,l){var c=n.queue;if(c===null)throw Error(i(311));c.lastRenderedReducer=l;var g=n.baseQueue,v=c.pending;if(v!==null){if(g!==null){var E=g.next;g.next=v.next,v.next=E}a.baseQueue=g=v,c.pending=null}if(v=n.baseState,g===null)n.memoizedState=v;else{a=g.next;var D=E=null,G=null,ee=a,ge=!1;do{var pe=ee.lane&-536870913;if(pe!==ee.lane?(Et&pe)===pe:(Qa&pe)===pe){var se=ee.revertLane;if(se===0)G!==null&&(G=G.next={lane:0,revertLane:0,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null}),pe===So&&(ge=!0);else if((Qa&se)===se){ee=ee.next,se===So&&(ge=!0);continue}else pe={lane:0,revertLane:ee.revertLane,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null},G===null?(D=G=pe,E=v):G=G.next=pe,ft.lanes|=se,ci|=se;pe=ee.action,Li&&l(v,pe),v=ee.hasEagerState?ee.eagerState:l(v,pe)}else se={lane:pe,revertLane:ee.revertLane,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null},G===null?(D=G=se,E=v):G=G.next=se,ft.lanes|=pe,ci|=pe;ee=ee.next}while(ee!==null&&ee!==a);if(G===null?E=v:G.next=D,!yr(v,n.memoizedState)&&(In=!0,ge&&(l=Co,l!==null)))throw l;n.memoizedState=v,n.baseState=E,n.baseQueue=G,c.lastRenderedState=v}return g===null&&(c.lanes=0),[n.memoizedState,c.dispatch]}function cf(n){var a=On(),l=a.queue;if(l===null)throw Error(i(311));l.lastRenderedReducer=n;var c=l.dispatch,g=l.pending,v=a.memoizedState;if(g!==null){l.pending=null;var E=g=g.next;do v=n(v,E.action),E=E.next;while(E!==g);yr(v,a.memoizedState)||(In=!0),a.memoizedState=v,a.baseQueue===null&&(a.baseState=v),l.lastRenderedState=v}return[v,c]}function h0(n,a,l){var c=ft,g=On(),v=Ot;if(v){if(l===void 0)throw Error(i(407));l=l()}else l=a();var E=!yr((Gt||g).memoizedState,l);if(E&&(g.memoizedState=l,In=!0),g=g.queue,ff(y0.bind(null,c,g,n),[n]),g.getSnapshot!==a||E||Tn!==null&&Tn.memoizedState.tag&1){if(c.flags|=2048,Eo(9,p0.bind(null,c,g,l,a),{destroy:void 0},null),Zt===null)throw Error(i(349));v||(Qa&60)!==0||v0(c,a,l)}return l}function v0(n,a,l){n.flags|=16384,n={getSnapshot:a,value:l},a=ft.updateQueue,a===null?(a=Ac(),ft.updateQueue=a,a.stores=[n]):(l=a.stores,l===null?a.stores=[n]:l.push(n))}function p0(n,a,l,c){a.value=l,a.getSnapshot=c,b0(a)&&S0(n)}function y0(n,a,l){return l(function(){b0(a)&&S0(n)})}function b0(n){var a=n.getSnapshot;n=n.value;try{var l=a();return!yr(n,l)}catch{return!0}}function S0(n){var a=Ya(n,2);a!==null&&sr(a,n,2)}function uf(n){var a=gr();if(typeof n=="function"){var l=n;if(n=l(),Li){Je(!0);try{l()}finally{Je(!1)}}}return a.memoizedState=a.baseState=n,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ta,lastRenderedState:n},a}function C0(n,a,l,c){return n.baseState=l,sf(n,Gt,typeof c=="function"?c:Ta)}function vx(n,a,l,c,g){if(zc(n))throw Error(i(485));if(n=a.action,n!==null){var v={payload:g,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){v.listeners.push(E)}};N.T!==null?l(!0):v.isTransition=!1,c(v),l=a.pending,l===null?(v.next=a.pending=v,w0(a,v)):(v.next=l.next,a.pending=l.next=v)}}function w0(n,a){var l=a.action,c=a.payload,g=n.state;if(a.isTransition){var v=N.T,E={};N.T=E;try{var D=l(g,c),G=N.S;G!==null&&G(E,D),x0(n,a,D)}catch(ee){df(n,a,ee)}finally{N.T=v}}else try{v=l(g,c),x0(n,a,v)}catch(ee){df(n,a,ee)}}function x0(n,a,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(c){E0(n,a,c)},function(c){return df(n,a,c)}):E0(n,a,l)}function E0(n,a,l){a.status="fulfilled",a.value=l,$0(a),n.state=l,a=n.pending,a!==null&&(l=a.next,l===a?n.pending=null:(l=l.next,a.next=l,w0(n,l)))}function df(n,a,l){var c=n.pending;if(n.pending=null,c!==null){c=c.next;do a.status="rejected",a.reason=l,$0(a),a=a.next;while(a!==c)}n.action=null}function $0(n){n=n.listeners;for(var a=0;a<n.length;a++)(0,n[a])()}function R0(n,a){return a}function T0(n,a){if(Ot){var l=Zt.formState;if(l!==null){e:{var c=ft;if(Ot){if(Yn){t:{for(var g=Yn,v=ca;g.nodeType!==8;){if(!v){g=null;break t}if(g=Xr(g.nextSibling),g===null){g=null;break t}}v=g.data,g=v==="F!"||v==="F"?g:null}if(g){Yn=Xr(g.nextSibling),c=g.data==="F!";break e}}_i(c)}c=!1}c&&(a=l[0])}}return l=gr(),l.memoizedState=l.baseState=a,c={pending:null,lanes:0,dispatch:null,lastRenderedReducer:R0,lastRenderedState:a},l.queue=c,l=U0.bind(null,ft,c),c.dispatch=l,c=uf(!1),v=pf.bind(null,ft,!1,c.queue),c=gr(),g={state:a,dispatch:null,action:n,pending:null},c.queue=g,l=vx.bind(null,ft,g,v,l),g.dispatch=l,c.memoizedState=n,[a,l,!1]}function O0(n){var a=On();return M0(a,Gt,n)}function M0(n,a,l){a=sf(n,a,R0)[0],n=Pc(Ta)[0],a=typeof a=="object"&&a!==null&&typeof a.then=="function"?kl(a):a;var c=On(),g=c.queue,v=g.dispatch;return l!==c.memoizedState&&(ft.flags|=2048,Eo(9,px.bind(null,g,l),{destroy:void 0},null)),[a,v,n]}function px(n,a){n.action=a}function A0(n){var a=On(),l=Gt;if(l!==null)return M0(a,l,n);On(),a=a.memoizedState,l=On();var c=l.queue.dispatch;return l.memoizedState=n,[a,c,!1]}function Eo(n,a,l,c){return n={tag:n,create:a,inst:l,deps:c,next:null},a=ft.updateQueue,a===null&&(a=Ac(),ft.updateQueue=a),l=a.lastEffect,l===null?a.lastEffect=n.next=n:(c=l.next,l.next=n,n.next=c,a.lastEffect=n),n}function N0(){return On().memoizedState}function _c(n,a,l,c){var g=gr();ft.flags|=n,g.memoizedState=Eo(1|a,l,{destroy:void 0},c===void 0?null:c)}function Dc(n,a,l,c){var g=On();c=c===void 0?null:c;var v=g.memoizedState.inst;Gt!==null&&c!==null&&tf(c,Gt.memoizedState.deps)?g.memoizedState=Eo(a,l,v,c):(ft.flags|=n,g.memoizedState=Eo(1|a,l,v,c))}function P0(n,a){_c(8390656,8,n,a)}function ff(n,a){Dc(2048,8,n,a)}function _0(n,a){return Dc(4,2,n,a)}function D0(n,a){return Dc(4,4,n,a)}function z0(n,a){if(typeof a=="function"){n=n();var l=a(n);return function(){typeof l=="function"?l():a(null)}}if(a!=null)return n=n(),a.current=n,function(){a.current=null}}function L0(n,a,l){l=l!=null?l.concat([n]):null,Dc(4,4,z0.bind(null,a,n),l)}function mf(){}function H0(n,a){var l=On();a=a===void 0?null:a;var c=l.memoizedState;return a!==null&&tf(a,c[1])?c[0]:(l.memoizedState=[n,a],n)}function B0(n,a){var l=On();a=a===void 0?null:a;var c=l.memoizedState;if(a!==null&&tf(a,c[1]))return c[0];if(c=n(),Li){Je(!0);try{n()}finally{Je(!1)}}return l.memoizedState=[c,a],c}function gf(n,a,l){return l===void 0||(Qa&1073741824)!==0?n.memoizedState=a:(n.memoizedState=l,n=jp(),ft.lanes|=n,ci|=n,l)}function I0(n,a,l,c){return yr(l,a)?l:bo.current!==null?(n=gf(n,l,c),yr(n,a)||(In=!0),n):(Qa&42)===0?(In=!0,n.memoizedState=l):(n=jp(),ft.lanes|=n,ci|=n,a)}function j0(n,a,l,c,g){var v=I.p;I.p=v!==0&&8>v?v:8;var E=N.T,D={};N.T=D,pf(n,!1,a,l);try{var G=g(),ee=N.S;if(ee!==null&&ee(D,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var ge=mx(G,c);Fl(n,a,ge,wr(n))}else Fl(n,a,c,wr(n))}catch(pe){Fl(n,a,{then:function(){},status:"rejected",reason:pe},wr())}finally{I.p=v,N.T=E}}function yx(){}function hf(n,a,l,c){if(n.tag!==5)throw Error(i(476));var g=k0(n).queue;j0(n,g,a,te,l===null?yx:function(){return F0(n),l(c)})}function k0(n){var a=n.memoizedState;if(a!==null)return a;a={memoizedState:te,baseState:te,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ta,lastRenderedState:te},next:null};var l={};return a.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ta,lastRenderedState:l},next:null},n.memoizedState=a,n=n.alternate,n!==null&&(n.memoizedState=a),a}function F0(n){var a=k0(n).next.queue;Fl(n,a,{},wr())}function vf(){return er(ss)}function V0(){return On().memoizedState}function G0(){return On().memoizedState}function bx(n){for(var a=n.return;a!==null;){switch(a.tag){case 24:case 3:var l=wr();n=ri(l);var c=ai(a,n,l);c!==null&&(sr(c,a,l),Ul(c,a,l)),a={cache:Zd()},n.payload=a;return}a=a.return}}function Sx(n,a,l){var c=wr();l={lane:c,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null},zc(n)?W0(a,l):(l=Ud(n,a,l,c),l!==null&&(sr(l,n,c),q0(l,a,c)))}function U0(n,a,l){var c=wr();Fl(n,a,l,c)}function Fl(n,a,l,c){var g={lane:c,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null};if(zc(n))W0(a,g);else{var v=n.alternate;if(n.lanes===0&&(v===null||v.lanes===0)&&(v=a.lastRenderedReducer,v!==null))try{var E=a.lastRenderedState,D=v(E,l);if(g.hasEagerState=!0,g.eagerState=D,yr(D,E))return yc(n,a,g,0),Zt===null&&pc(),!1}catch{}finally{}if(l=Ud(n,a,g,c),l!==null)return sr(l,n,c),q0(l,a,c),!0}return!1}function pf(n,a,l,c){if(c={lane:2,revertLane:om(),action:c,hasEagerState:!1,eagerState:null,next:null},zc(n)){if(a)throw Error(i(479))}else a=Ud(n,l,c,2),a!==null&&sr(a,n,2)}function zc(n){var a=n.alternate;return n===ft||a!==null&&a===ft}function W0(n,a){wo=Oc=!0;var l=n.pending;l===null?a.next=a:(a.next=l.next,l.next=a),n.pending=a}function q0(n,a,l){if((l&4194176)!==0){var c=a.lanes;c&=n.pendingLanes,l|=c,a.lanes=l,ht(n,l)}}var da={readContext:er,use:Nc,useCallback:bn,useContext:bn,useEffect:bn,useImperativeHandle:bn,useLayoutEffect:bn,useInsertionEffect:bn,useMemo:bn,useReducer:bn,useRef:bn,useState:bn,useDebugValue:bn,useDeferredValue:bn,useTransition:bn,useSyncExternalStore:bn,useId:bn};da.useCacheRefresh=bn,da.useMemoCache=bn,da.useHostTransitionStatus=bn,da.useFormState=bn,da.useActionState=bn,da.useOptimistic=bn;var Hi={readContext:er,use:Nc,useCallback:function(n,a){return gr().memoizedState=[n,a===void 0?null:a],n},useContext:er,useEffect:P0,useImperativeHandle:function(n,a,l){l=l!=null?l.concat([n]):null,_c(4194308,4,z0.bind(null,a,n),l)},useLayoutEffect:function(n,a){return _c(4194308,4,n,a)},useInsertionEffect:function(n,a){_c(4,2,n,a)},useMemo:function(n,a){var l=gr();a=a===void 0?null:a;var c=n();if(Li){Je(!0);try{n()}finally{Je(!1)}}return l.memoizedState=[c,a],c},useReducer:function(n,a,l){var c=gr();if(l!==void 0){var g=l(a);if(Li){Je(!0);try{l(a)}finally{Je(!1)}}}else g=a;return c.memoizedState=c.baseState=g,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:g},c.queue=n,n=n.dispatch=Sx.bind(null,ft,n),[c.memoizedState,n]},useRef:function(n){var a=gr();return n={current:n},a.memoizedState=n},useState:function(n){n=uf(n);var a=n.queue,l=U0.bind(null,ft,a);return a.dispatch=l,[n.memoizedState,l]},useDebugValue:mf,useDeferredValue:function(n,a){var l=gr();return gf(l,n,a)},useTransition:function(){var n=uf(!1);return n=j0.bind(null,ft,n.queue,!0,!1),gr().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,a,l){var c=ft,g=gr();if(Ot){if(l===void 0)throw Error(i(407));l=l()}else{if(l=a(),Zt===null)throw Error(i(349));(Et&60)!==0||v0(c,a,l)}g.memoizedState=l;var v={value:l,getSnapshot:a};return g.queue=v,P0(y0.bind(null,c,v,n),[n]),c.flags|=2048,Eo(9,p0.bind(null,c,v,l,a),{destroy:void 0},null),l},useId:function(){var n=gr(),a=Zt.identifierPrefix;if(Ot){var l=$a,c=Ea;l=(c&~(1<<32-nt(c)-1)).toString(32)+l,a=":"+a+"R"+l,l=Mc++,0<l&&(a+="H"+l.toString(32)),a+=":"}else l=gx++,a=":"+a+"r"+l.toString(32)+":";return n.memoizedState=a},useCacheRefresh:function(){return gr().memoizedState=bx.bind(null,ft)}};Hi.useMemoCache=lf,Hi.useHostTransitionStatus=vf,Hi.useFormState=T0,Hi.useActionState=T0,Hi.useOptimistic=function(n){var a=gr();a.memoizedState=a.baseState=n;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=l,a=pf.bind(null,ft,!0,l),l.dispatch=a,[n,a]};var ei={readContext:er,use:Nc,useCallback:H0,useContext:er,useEffect:ff,useImperativeHandle:L0,useInsertionEffect:_0,useLayoutEffect:D0,useMemo:B0,useReducer:Pc,useRef:N0,useState:function(){return Pc(Ta)},useDebugValue:mf,useDeferredValue:function(n,a){var l=On();return I0(l,Gt.memoizedState,n,a)},useTransition:function(){var n=Pc(Ta)[0],a=On().memoizedState;return[typeof n=="boolean"?n:kl(n),a]},useSyncExternalStore:h0,useId:V0};ei.useCacheRefresh=G0,ei.useMemoCache=lf,ei.useHostTransitionStatus=vf,ei.useFormState=O0,ei.useActionState=O0,ei.useOptimistic=function(n,a){var l=On();return C0(l,Gt,n,a)};var Bi={readContext:er,use:Nc,useCallback:H0,useContext:er,useEffect:ff,useImperativeHandle:L0,useInsertionEffect:_0,useLayoutEffect:D0,useMemo:B0,useReducer:cf,useRef:N0,useState:function(){return cf(Ta)},useDebugValue:mf,useDeferredValue:function(n,a){var l=On();return Gt===null?gf(l,n,a):I0(l,Gt.memoizedState,n,a)},useTransition:function(){var n=cf(Ta)[0],a=On().memoizedState;return[typeof n=="boolean"?n:kl(n),a]},useSyncExternalStore:h0,useId:V0};Bi.useCacheRefresh=G0,Bi.useMemoCache=lf,Bi.useHostTransitionStatus=vf,Bi.useFormState=A0,Bi.useActionState=A0,Bi.useOptimistic=function(n,a){var l=On();return Gt!==null?C0(l,Gt,n,a):(l.baseState=n,[n,l.queue.dispatch])};function yf(n,a,l,c){a=n.memoizedState,l=l(c,a),l=l==null?a:H({},a,l),n.memoizedState=l,n.lanes===0&&(n.updateQueue.baseState=l)}var bf={isMounted:function(n){return(n=n._reactInternals)?F(n)===n:!1},enqueueSetState:function(n,a,l){n=n._reactInternals;var c=wr(),g=ri(c);g.payload=a,l!=null&&(g.callback=l),a=ai(n,g,c),a!==null&&(sr(a,n,c),Ul(a,n,c))},enqueueReplaceState:function(n,a,l){n=n._reactInternals;var c=wr(),g=ri(c);g.tag=1,g.payload=a,l!=null&&(g.callback=l),a=ai(n,g,c),a!==null&&(sr(a,n,c),Ul(a,n,c))},enqueueForceUpdate:function(n,a){n=n._reactInternals;var l=wr(),c=ri(l);c.tag=2,a!=null&&(c.callback=a),a=ai(n,c,l),a!==null&&(sr(a,n,l),Ul(a,n,l))}};function J0(n,a,l,c,g,v,E){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,v,E):a.prototype&&a.prototype.isPureReactComponent?!Ml(l,c)||!Ml(g,v):!0}function K0(n,a,l,c){n=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(l,c),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(l,c),a.state!==n&&bf.enqueueReplaceState(a,a.state,null)}function Ii(n,a){var l=a;if("ref"in a){l={};for(var c in a)c!=="ref"&&(l[c]=a[c])}if(n=n.defaultProps){l===a&&(l=H({},l));for(var g in n)l[g]===void 0&&(l[g]=n[g])}return l}var Lc=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function Y0(n){Lc(n)}function X0(n){console.error(n)}function Z0(n){Lc(n)}function Hc(n,a){try{var l=n.onUncaughtError;l(a.value,{componentStack:a.stack})}catch(c){setTimeout(function(){throw c})}}function Q0(n,a,l){try{var c=n.onCaughtError;c(l.value,{componentStack:l.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(g){setTimeout(function(){throw g})}}function Sf(n,a,l){return l=ri(l),l.tag=3,l.payload={element:null},l.callback=function(){Hc(n,a)},l}function ep(n){return n=ri(n),n.tag=3,n}function tp(n,a,l,c){var g=l.type.getDerivedStateFromError;if(typeof g=="function"){var v=c.value;n.payload=function(){return g(v)},n.callback=function(){Q0(a,l,c)}}var E=l.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(n.callback=function(){Q0(a,l,c),typeof g!="function"&&(ui===null?ui=new Set([this]):ui.add(this));var D=c.stack;this.componentDidCatch(c.value,{componentStack:D!==null?D:""})})}function Cx(n,a,l,c,g){if(l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){if(a=l.alternate,a!==null&&Gl(a,l,g,!0),l=Lr.current,l!==null){switch(l.tag){case 13:return ua===null?tm():l.alternate===null&&mn===0&&(mn=3),l.flags&=-257,l.flags|=65536,l.lanes=g,c===Kd?l.flags|=16384:(a=l.updateQueue,a===null?l.updateQueue=new Set([c]):a.add(c),rm(n,c,g)),!1;case 22:return l.flags|=65536,c===Kd?l.flags|=16384:(a=l.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([c])},l.updateQueue=a):(l=a.retryQueue,l===null?a.retryQueue=new Set([c]):l.add(c)),rm(n,c,g)),!1}throw Error(i(435,l.tag))}return rm(n,c,g),tm(),!1}if(Ot)return a=Lr.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=g,c!==Jd&&(n=Error(i(422),{cause:c}),_l(_r(n,l)))):(c!==Jd&&(a=Error(i(423),{cause:c}),_l(_r(a,l))),n=n.current.alternate,n.flags|=65536,g&=-g,n.lanes|=g,c=_r(c,l),g=Sf(n.stateNode,c,g),zf(n,g),mn!==4&&(mn=2)),!1;var v=Error(i(520),{cause:c});if(v=_r(v,l),Ql===null?Ql=[v]:Ql.push(v),mn!==4&&(mn=2),a===null)return!0;c=_r(c,l),l=a;do{switch(l.tag){case 3:return l.flags|=65536,n=g&-g,l.lanes|=n,n=Sf(l.stateNode,c,n),zf(l,n),!1;case 1:if(a=l.type,v=l.stateNode,(l.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(ui===null||!ui.has(v))))return l.flags|=65536,g&=-g,l.lanes|=g,g=ep(g),tp(g,n,l,c),zf(l,g),!1}l=l.return}while(l!==null);return!1}var np=Error(i(461)),In=!1;function Xn(n,a,l,c){a.child=n===null?l0(a,null,l,c):Di(a,n.child,l,c)}function rp(n,a,l,c,g){l=l.render;var v=a.ref;if("ref"in c){var E={};for(var D in c)D!=="ref"&&(E[D]=c[D])}else E=c;return ki(a),c=nf(n,a,l,E,v,g),D=rf(),n!==null&&!In?(af(n,a,g),Oa(n,a,g)):(Ot&&D&&Wd(a),a.flags|=1,Xn(n,a,c,g),a.child)}function ap(n,a,l,c,g){if(n===null){var v=l.type;return typeof v=="function"&&!Vf(v)&&v.defaultProps===void 0&&l.compare===null?(a.tag=15,a.type=v,ip(n,a,v,c,g)):(n=Fc(l.type,null,c,a,a.mode,g),n.ref=a.ref,n.return=a,a.child=n)}if(v=n.child,!Mf(n,g)){var E=v.memoizedProps;if(l=l.compare,l=l!==null?l:Ml,l(E,c)&&n.ref===a.ref)return Oa(n,a,g)}return a.flags|=1,n=si(v,c),n.ref=a.ref,n.return=a,a.child=n}function ip(n,a,l,c,g){if(n!==null){var v=n.memoizedProps;if(Ml(v,c)&&n.ref===a.ref)if(In=!1,a.pendingProps=c=v,Mf(n,g))(n.flags&131072)!==0&&(In=!0);else return a.lanes=n.lanes,Oa(n,a,g)}return Cf(n,a,l,c,g)}function op(n,a,l){var c=a.pendingProps,g=c.children,v=(a.stateNode._pendingVisibility&2)!==0,E=n!==null?n.memoizedState:null;if(Vl(n,a),c.mode==="hidden"||v){if((a.flags&128)!==0){if(c=E!==null?E.baseLanes|l:l,n!==null){for(g=a.child=n.child,v=0;g!==null;)v=v|g.lanes|g.childLanes,g=g.sibling;a.childLanes=v&~c}else a.childLanes=0,a.child=null;return lp(n,a,c,l)}if((l&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},n!==null&&Tc(a,E!==null?E.cachePool:null),E!==null?s0(a,E):Yd(),c0(a);else return a.lanes=a.childLanes=536870912,lp(n,a,E!==null?E.baseLanes|l:l,l)}else E!==null?(Tc(a,E.cachePool),s0(a,E),Za(),a.memoizedState=null):(n!==null&&Tc(a,null),Yd(),Za());return Xn(n,a,g,l),a.child}function lp(n,a,l,c){var g=ef();return g=g===null?null:{parent:Pn._currentValue,pool:g},a.memoizedState={baseLanes:l,cachePool:g},n!==null&&Tc(a,null),Yd(),c0(a),n!==null&&Gl(n,a,c,!0),null}function Vl(n,a){var l=a.ref;if(l===null)n!==null&&n.ref!==null&&(a.flags|=2097664);else{if(typeof l!="function"&&typeof l!="object")throw Error(i(284));(n===null||n.ref!==l)&&(a.flags|=2097664)}}function Cf(n,a,l,c,g){return ki(a),l=nf(n,a,l,c,void 0,g),c=rf(),n!==null&&!In?(af(n,a,g),Oa(n,a,g)):(Ot&&c&&Wd(a),a.flags|=1,Xn(n,a,l,g),a.child)}function sp(n,a,l,c,g,v){return ki(a),a.updateQueue=null,l=g0(a,c,l,g),m0(n),c=rf(),n!==null&&!In?(af(n,a,v),Oa(n,a,v)):(Ot&&c&&Wd(a),a.flags|=1,Xn(n,a,l,v),a.child)}function cp(n,a,l,c,g){if(ki(a),a.stateNode===null){var v=ho,E=l.contextType;typeof E=="object"&&E!==null&&(v=er(E)),v=new l(c,v),a.memoizedState=v.state!==null&&v.state!==void 0?v.state:null,v.updater=bf,a.stateNode=v,v._reactInternals=a,v=a.stateNode,v.props=c,v.state=a.memoizedState,v.refs={},_f(a),E=l.contextType,v.context=typeof E=="object"&&E!==null?er(E):ho,v.state=a.memoizedState,E=l.getDerivedStateFromProps,typeof E=="function"&&(yf(a,l,E,c),v.state=a.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof v.getSnapshotBeforeUpdate=="function"||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(E=v.state,typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount(),E!==v.state&&bf.enqueueReplaceState(v,v.state,null),ql(a,c,v,g),Wl(),v.state=a.memoizedState),typeof v.componentDidMount=="function"&&(a.flags|=4194308),c=!0}else if(n===null){v=a.stateNode;var D=a.memoizedProps,G=Ii(l,D);v.props=G;var ee=v.context,ge=l.contextType;E=ho,typeof ge=="object"&&ge!==null&&(E=er(ge));var pe=l.getDerivedStateFromProps;ge=typeof pe=="function"||typeof v.getSnapshotBeforeUpdate=="function",D=a.pendingProps!==D,ge||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(D||ee!==E)&&K0(a,v,c,E),ni=!1;var se=a.memoizedState;v.state=se,ql(a,c,v,g),Wl(),ee=a.memoizedState,D||se!==ee||ni?(typeof pe=="function"&&(yf(a,l,pe,c),ee=a.memoizedState),(G=ni||J0(a,l,G,c,se,ee,E))?(ge||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(a.flags|=4194308)):(typeof v.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=c,a.memoizedState=ee),v.props=c,v.state=ee,v.context=E,c=G):(typeof v.componentDidMount=="function"&&(a.flags|=4194308),c=!1)}else{v=a.stateNode,Df(n,a),E=a.memoizedProps,ge=Ii(l,E),v.props=ge,pe=a.pendingProps,se=v.context,ee=l.contextType,G=ho,typeof ee=="object"&&ee!==null&&(G=er(ee)),D=l.getDerivedStateFromProps,(ee=typeof D=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(E!==pe||se!==G)&&K0(a,v,c,G),ni=!1,se=a.memoizedState,v.state=se,ql(a,c,v,g),Wl();var me=a.memoizedState;E!==pe||se!==me||ni||n!==null&&n.dependencies!==null&&Bc(n.dependencies)?(typeof D=="function"&&(yf(a,l,D,c),me=a.memoizedState),(ge=ni||J0(a,l,ge,c,se,me,G)||n!==null&&n.dependencies!==null&&Bc(n.dependencies))?(ee||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(c,me,G),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(c,me,G)),typeof v.componentDidUpdate=="function"&&(a.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof v.componentDidUpdate!="function"||E===n.memoizedProps&&se===n.memoizedState||(a.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||E===n.memoizedProps&&se===n.memoizedState||(a.flags|=1024),a.memoizedProps=c,a.memoizedState=me),v.props=c,v.state=me,v.context=G,c=ge):(typeof v.componentDidUpdate!="function"||E===n.memoizedProps&&se===n.memoizedState||(a.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||E===n.memoizedProps&&se===n.memoizedState||(a.flags|=1024),c=!1)}return v=c,Vl(n,a),c=(a.flags&128)!==0,v||c?(v=a.stateNode,l=c&&typeof l.getDerivedStateFromError!="function"?null:v.render(),a.flags|=1,n!==null&&c?(a.child=Di(a,n.child,null,g),a.child=Di(a,null,l,g)):Xn(n,a,l,g),a.memoizedState=v.state,n=a.child):n=Oa(n,a,g),n}function up(n,a,l,c){return Pl(),a.flags|=256,Xn(n,a,l,c),a.child}var wf={dehydrated:null,treeContext:null,retryLane:0};function xf(n){return{baseLanes:n,cachePool:f0()}}function Ef(n,a,l){return n=n!==null?n.childLanes&~l:0,a&&(n|=jr),n}function dp(n,a,l){var c=a.pendingProps,g=!1,v=(a.flags&128)!==0,E;if((E=v)||(E=n!==null&&n.memoizedState===null?!1:(Nn.current&2)!==0),E&&(g=!0,a.flags&=-129),E=(a.flags&32)!==0,a.flags&=-33,n===null){if(Ot){if(g?Xa(a):Za(),Ot){var D=Yn,G;if(G=D){e:{for(G=D,D=ca;G.nodeType!==8;){if(!D){D=null;break e}if(G=Xr(G.nextSibling),G===null){D=null;break e}}D=G}D!==null?(a.memoizedState={dehydrated:D,treeContext:Ni!==null?{id:Ea,overflow:$a}:null,retryLane:536870912},G=Ir(18,null,null,0),G.stateNode=D,G.return=a,a.child=G,lr=a,Yn=null,G=!0):G=!1}G||_i(a)}if(D=a.memoizedState,D!==null&&(D=D.dehydrated,D!==null))return D.data==="$!"?a.lanes=16:a.lanes=536870912,null;Ra(a)}return D=c.children,c=c.fallback,g?(Za(),g=a.mode,D=Rf({mode:"hidden",children:D},g),c=Vi(c,g,l,null),D.return=a,c.return=a,D.sibling=c,a.child=D,g=a.child,g.memoizedState=xf(l),g.childLanes=Ef(n,E,l),a.memoizedState=wf,c):(Xa(a),$f(a,D))}if(G=n.memoizedState,G!==null&&(D=G.dehydrated,D!==null)){if(v)a.flags&256?(Xa(a),a.flags&=-257,a=Tf(n,a,l)):a.memoizedState!==null?(Za(),a.child=n.child,a.flags|=128,a=null):(Za(),g=c.fallback,D=a.mode,c=Rf({mode:"visible",children:c.children},D),g=Vi(g,D,l,null),g.flags|=2,c.return=a,g.return=a,c.sibling=g,a.child=c,Di(a,n.child,null,l),c=a.child,c.memoizedState=xf(l),c.childLanes=Ef(n,E,l),a.memoizedState=wf,a=g);else if(Xa(a),D.data==="$!"){if(E=D.nextSibling&&D.nextSibling.dataset,E)var ee=E.dgst;E=ee,c=Error(i(419)),c.stack="",c.digest=E,_l({value:c,source:null,stack:null}),a=Tf(n,a,l)}else if(In||Gl(n,a,l,!1),E=(l&n.childLanes)!==0,In||E){if(E=Zt,E!==null){if(c=l&-l,(c&42)!==0)c=1;else switch(c){case 2:c=1;break;case 8:c=4;break;case 32:c=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:c=64;break;case 268435456:c=134217728;break;default:c=0}if(c=(c&(E.suspendedLanes|l))!==0?0:c,c!==0&&c!==G.retryLane)throw G.retryLane=c,Ya(n,c),sr(E,n,c),np}D.data==="$?"||tm(),a=Tf(n,a,l)}else D.data==="$?"?(a.flags|=128,a.child=n.child,a=Lx.bind(null,n),D._reactRetry=a,a=null):(n=G.treeContext,Yn=Xr(D.nextSibling),lr=a,Ot=!0,Kr=null,ca=!1,n!==null&&(Dr[zr++]=Ea,Dr[zr++]=$a,Dr[zr++]=Ni,Ea=n.id,$a=n.overflow,Ni=a),a=$f(a,c.children),a.flags|=4096);return a}return g?(Za(),g=c.fallback,D=a.mode,G=n.child,ee=G.sibling,c=si(G,{mode:"hidden",children:c.children}),c.subtreeFlags=G.subtreeFlags&31457280,ee!==null?g=si(ee,g):(g=Vi(g,D,l,null),g.flags|=2),g.return=a,c.return=a,c.sibling=g,a.child=c,c=g,g=a.child,D=n.child.memoizedState,D===null?D=xf(l):(G=D.cachePool,G!==null?(ee=Pn._currentValue,G=G.parent!==ee?{parent:ee,pool:ee}:G):G=f0(),D={baseLanes:D.baseLanes|l,cachePool:G}),g.memoizedState=D,g.childLanes=Ef(n,E,l),a.memoizedState=wf,c):(Xa(a),l=n.child,n=l.sibling,l=si(l,{mode:"visible",children:c.children}),l.return=a,l.sibling=null,n!==null&&(E=a.deletions,E===null?(a.deletions=[n],a.flags|=16):E.push(n)),a.child=l,a.memoizedState=null,l)}function $f(n,a){return a=Rf({mode:"visible",children:a},n.mode),a.return=n,n.child=a}function Rf(n,a){return Hp(n,a,0,null)}function Tf(n,a,l){return Di(a,n.child,null,l),n=$f(a,a.pendingProps.children),n.flags|=2,a.memoizedState=null,n}function fp(n,a,l){n.lanes|=a;var c=n.alternate;c!==null&&(c.lanes|=a),Nf(n.return,a,l)}function Of(n,a,l,c,g){var v=n.memoizedState;v===null?n.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:c,tail:l,tailMode:g}:(v.isBackwards=a,v.rendering=null,v.renderingStartTime=0,v.last=c,v.tail=l,v.tailMode=g)}function mp(n,a,l){var c=a.pendingProps,g=c.revealOrder,v=c.tail;if(Xn(n,a,c.children,l),c=Nn.current,(c&2)!==0)c=c&1|2,a.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=a.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&fp(n,l,a);else if(n.tag===19)fp(n,l,a);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===a)break e;for(;n.sibling===null;){if(n.return===null||n.return===a)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}switch(de(Nn,c),g){case"forwards":for(l=a.child,g=null;l!==null;)n=l.alternate,n!==null&&Rc(n)===null&&(g=l),l=l.sibling;l=g,l===null?(g=a.child,a.child=null):(g=l.sibling,l.sibling=null),Of(a,!1,g,l,v);break;case"backwards":for(l=null,g=a.child,a.child=null;g!==null;){if(n=g.alternate,n!==null&&Rc(n)===null){a.child=g;break}n=g.sibling,g.sibling=l,l=g,g=n}Of(a,!0,l,null,v);break;case"together":Of(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function Oa(n,a,l){if(n!==null&&(a.dependencies=n.dependencies),ci|=a.lanes,(l&a.childLanes)===0)if(n!==null){if(Gl(n,a,l,!1),(l&a.childLanes)===0)return null}else return null;if(n!==null&&a.child!==n.child)throw Error(i(153));if(a.child!==null){for(n=a.child,l=si(n,n.pendingProps),a.child=l,l.return=a;n.sibling!==null;)n=n.sibling,l=l.sibling=si(n,n.pendingProps),l.return=a;l.sibling=null}return a.child}function Mf(n,a){return(n.lanes&a)!==0?!0:(n=n.dependencies,!!(n!==null&&Bc(n)))}function wx(n,a,l){switch(a.tag){case 3:we(a,a.stateNode.containerInfo),ti(a,Pn,n.memoizedState.cache),Pl();break;case 27:case 5:De(a);break;case 4:we(a,a.stateNode.containerInfo);break;case 10:ti(a,a.type,a.memoizedProps.value);break;case 13:var c=a.memoizedState;if(c!==null)return c.dehydrated!==null?(Xa(a),a.flags|=128,null):(l&a.child.childLanes)!==0?dp(n,a,l):(Xa(a),n=Oa(n,a,l),n!==null?n.sibling:null);Xa(a);break;case 19:var g=(n.flags&128)!==0;if(c=(l&a.childLanes)!==0,c||(Gl(n,a,l,!1),c=(l&a.childLanes)!==0),g){if(c)return mp(n,a,l);a.flags|=128}if(g=a.memoizedState,g!==null&&(g.rendering=null,g.tail=null,g.lastEffect=null),de(Nn,Nn.current),c)break;return null;case 22:case 23:return a.lanes=0,op(n,a,l);case 24:ti(a,Pn,n.memoizedState.cache)}return Oa(n,a,l)}function gp(n,a,l){if(n!==null)if(n.memoizedProps!==a.pendingProps)In=!0;else{if(!Mf(n,l)&&(a.flags&128)===0)return In=!1,wx(n,a,l);In=(n.flags&131072)!==0}else In=!1,Ot&&(a.flags&1048576)!==0&&Zv(a,Cc,a.index);switch(a.lanes=0,a.tag){case 16:e:{n=a.pendingProps;var c=a.elementType,g=c._init;if(c=g(c._payload),a.type=c,typeof c=="function")Vf(c)?(n=Ii(c,n),a.tag=1,a=cp(null,a,c,n,l)):(a.tag=0,a=Cf(null,a,c,n,l));else{if(c!=null){if(g=c.$$typeof,g===C){a.tag=11,a=rp(null,a,c,n,l);break e}else if(g===$){a.tag=14,a=ap(null,a,c,n,l);break e}}throw a=B(c)||c,Error(i(306,a,""))}}return a;case 0:return Cf(n,a,a.type,a.pendingProps,l);case 1:return c=a.type,g=Ii(c,a.pendingProps),cp(n,a,c,g,l);case 3:e:{if(we(a,a.stateNode.containerInfo),n===null)throw Error(i(387));var v=a.pendingProps;g=a.memoizedState,c=g.element,Df(n,a),ql(a,v,null,l);var E=a.memoizedState;if(v=E.cache,ti(a,Pn,v),v!==g.cache&&Pf(a,[Pn],l,!0),Wl(),v=E.element,g.isDehydrated)if(g={element:v,isDehydrated:!1,cache:E.cache},a.updateQueue.baseState=g,a.memoizedState=g,a.flags&256){a=up(n,a,v,l);break e}else if(v!==c){c=_r(Error(i(424)),a),_l(c),a=up(n,a,v,l);break e}else for(Yn=Xr(a.stateNode.containerInfo.firstChild),lr=a,Ot=!0,Kr=null,ca=!0,l=l0(a,null,v,l),a.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Pl(),v===c){a=Oa(n,a,l);break e}Xn(n,a,v,l)}a=a.child}return a;case 26:return Vl(n,a),n===null?(l=py(a.type,null,a.pendingProps,null))?a.memoizedState=l:Ot||(l=a.type,n=a.pendingProps,c=eu(Oe.current).createElement(l),c[Ct]=a,c[vt]=n,Zn(c,l,n),Ae(c),a.stateNode=c):a.memoizedState=py(a.type,n.memoizedProps,a.pendingProps,n.memoizedState),null;case 27:return De(a),n===null&&Ot&&(c=a.stateNode=gy(a.type,a.pendingProps,Oe.current),lr=a,ca=!0,Yn=Xr(c.firstChild)),c=a.pendingProps.children,n!==null||Ot?Xn(n,a,c,l):a.child=Di(a,null,c,l),Vl(n,a),a.child;case 5:return n===null&&Ot&&((g=c=Yn)&&(c=Zx(c,a.type,a.pendingProps,ca),c!==null?(a.stateNode=c,lr=a,Yn=Xr(c.firstChild),ca=!1,g=!0):g=!1),g||_i(a)),De(a),g=a.type,v=a.pendingProps,E=n!==null?n.memoizedProps:null,c=v.children,hm(g,v)?c=null:E!==null&&hm(g,E)&&(a.flags|=32),a.memoizedState!==null&&(g=nf(n,a,hx,null,null,l),ss._currentValue=g),Vl(n,a),Xn(n,a,c,l),a.child;case 6:return n===null&&Ot&&((n=l=Yn)&&(l=Qx(l,a.pendingProps,ca),l!==null?(a.stateNode=l,lr=a,Yn=null,n=!0):n=!1),n||_i(a)),null;case 13:return dp(n,a,l);case 4:return we(a,a.stateNode.containerInfo),c=a.pendingProps,n===null?a.child=Di(a,null,c,l):Xn(n,a,c,l),a.child;case 11:return rp(n,a,a.type,a.pendingProps,l);case 7:return Xn(n,a,a.pendingProps,l),a.child;case 8:return Xn(n,a,a.pendingProps.children,l),a.child;case 12:return Xn(n,a,a.pendingProps.children,l),a.child;case 10:return c=a.pendingProps,ti(a,a.type,c.value),Xn(n,a,c.children,l),a.child;case 9:return g=a.type._context,c=a.pendingProps.children,ki(a),g=er(g),c=c(g),a.flags|=1,Xn(n,a,c,l),a.child;case 14:return ap(n,a,a.type,a.pendingProps,l);case 15:return ip(n,a,a.type,a.pendingProps,l);case 19:return mp(n,a,l);case 22:return op(n,a,l);case 24:return ki(a),c=er(Pn),n===null?(g=ef(),g===null&&(g=Zt,v=Zd(),g.pooledCache=v,v.refCount++,v!==null&&(g.pooledCacheLanes|=l),g=v),a.memoizedState={parent:c,cache:g},_f(a),ti(a,Pn,g)):((n.lanes&l)!==0&&(Df(n,a),ql(a,null,null,l),Wl()),g=n.memoizedState,v=a.memoizedState,g.parent!==c?(g={parent:c,cache:c},a.memoizedState=g,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=g),ti(a,Pn,c)):(c=v.cache,ti(a,Pn,c),c!==g.cache&&Pf(a,[Pn],l,!0))),Xn(n,a,a.pendingProps.children,l),a.child;case 29:throw a.pendingProps}throw Error(i(156,a.tag))}var Af=ae(null),ji=null,Ma=null;function ti(n,a,l){de(Af,a._currentValue),a._currentValue=l}function Aa(n){n._currentValue=Af.current,ce(Af)}function Nf(n,a,l){for(;n!==null;){var c=n.alternate;if((n.childLanes&a)!==a?(n.childLanes|=a,c!==null&&(c.childLanes|=a)):c!==null&&(c.childLanes&a)!==a&&(c.childLanes|=a),n===l)break;n=n.return}}function Pf(n,a,l,c){var g=n.child;for(g!==null&&(g.return=n);g!==null;){var v=g.dependencies;if(v!==null){var E=g.child;v=v.firstContext;e:for(;v!==null;){var D=v;v=g;for(var G=0;G<a.length;G++)if(D.context===a[G]){v.lanes|=l,D=v.alternate,D!==null&&(D.lanes|=l),Nf(v.return,l,n),c||(E=null);break e}v=D.next}}else if(g.tag===18){if(E=g.return,E===null)throw Error(i(341));E.lanes|=l,v=E.alternate,v!==null&&(v.lanes|=l),Nf(E,l,n),E=null}else E=g.child;if(E!==null)E.return=g;else for(E=g;E!==null;){if(E===n){E=null;break}if(g=E.sibling,g!==null){g.return=E.return,E=g;break}E=E.return}g=E}}function Gl(n,a,l,c){n=null;for(var g=a,v=!1;g!==null;){if(!v){if((g.flags&524288)!==0)v=!0;else if((g.flags&262144)!==0)break}if(g.tag===10){var E=g.alternate;if(E===null)throw Error(i(387));if(E=E.memoizedProps,E!==null){var D=g.type;yr(g.pendingProps.value,E.value)||(n!==null?n.push(D):n=[D])}}else if(g===Ce.current){if(E=g.alternate,E===null)throw Error(i(387));E.memoizedState.memoizedState!==g.memoizedState.memoizedState&&(n!==null?n.push(ss):n=[ss])}g=g.return}n!==null&&Pf(a,n,l,c),a.flags|=262144}function Bc(n){for(n=n.firstContext;n!==null;){if(!yr(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function ki(n){ji=n,Ma=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function er(n){return hp(ji,n)}function Ic(n,a){return ji===null&&ki(n),hp(n,a)}function hp(n,a){var l=a._currentValue;if(a={context:a,memoizedValue:l,next:null},Ma===null){if(n===null)throw Error(i(308));Ma=a,n.dependencies={lanes:0,firstContext:a},n.flags|=524288}else Ma=Ma.next=a;return l}var ni=!1;function _f(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Df(n,a){n=n.updateQueue,a.updateQueue===n&&(a.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function ri(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function ai(n,a,l){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(on&2)!==0){var g=c.pending;return g===null?a.next=a:(a.next=g.next,g.next=a),c.pending=a,a=bc(n),Yv(n,null,l),a}return yc(n,c,a,l),bc(n)}function Ul(n,a,l){if(a=a.updateQueue,a!==null&&(a=a.shared,(l&4194176)!==0)){var c=a.lanes;c&=n.pendingLanes,l|=c,a.lanes=l,ht(n,l)}}function zf(n,a){var l=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,l===c)){var g=null,v=null;if(l=l.firstBaseUpdate,l!==null){do{var E={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};v===null?g=v=E:v=v.next=E,l=l.next}while(l!==null);v===null?g=v=a:v=v.next=a}else g=v=a;l={baseState:c.baseState,firstBaseUpdate:g,lastBaseUpdate:v,shared:c.shared,callbacks:c.callbacks},n.updateQueue=l;return}n=l.lastBaseUpdate,n===null?l.firstBaseUpdate=a:n.next=a,l.lastBaseUpdate=a}var Lf=!1;function Wl(){if(Lf){var n=Co;if(n!==null)throw n}}function ql(n,a,l,c){Lf=!1;var g=n.updateQueue;ni=!1;var v=g.firstBaseUpdate,E=g.lastBaseUpdate,D=g.shared.pending;if(D!==null){g.shared.pending=null;var G=D,ee=G.next;G.next=null,E===null?v=ee:E.next=ee,E=G;var ge=n.alternate;ge!==null&&(ge=ge.updateQueue,D=ge.lastBaseUpdate,D!==E&&(D===null?ge.firstBaseUpdate=ee:D.next=ee,ge.lastBaseUpdate=G))}if(v!==null){var pe=g.baseState;E=0,ge=ee=G=null,D=v;do{var se=D.lane&-536870913,me=se!==D.lane;if(me?(Et&se)===se:(c&se)===se){se!==0&&se===So&&(Lf=!0),ge!==null&&(ge=ge.next={lane:0,tag:D.tag,payload:D.payload,callback:null,next:null});e:{var ke=n,tt=D;se=a;var gn=l;switch(tt.tag){case 1:if(ke=tt.payload,typeof ke=="function"){pe=ke.call(gn,pe,se);break e}pe=ke;break e;case 3:ke.flags=ke.flags&-65537|128;case 0:if(ke=tt.payload,se=typeof ke=="function"?ke.call(gn,pe,se):ke,se==null)break e;pe=H({},pe,se);break e;case 2:ni=!0}}se=D.callback,se!==null&&(n.flags|=64,me&&(n.flags|=8192),me=g.callbacks,me===null?g.callbacks=[se]:me.push(se))}else me={lane:se,tag:D.tag,payload:D.payload,callback:D.callback,next:null},ge===null?(ee=ge=me,G=pe):ge=ge.next=me,E|=se;if(D=D.next,D===null){if(D=g.shared.pending,D===null)break;me=D,D=me.next,me.next=null,g.lastBaseUpdate=me,g.shared.pending=null}}while(!0);ge===null&&(G=pe),g.baseState=G,g.firstBaseUpdate=ee,g.lastBaseUpdate=ge,v===null&&(g.shared.lanes=0),ci|=E,n.lanes=E,n.memoizedState=pe}}function vp(n,a){if(typeof n!="function")throw Error(i(191,n));n.call(a)}function pp(n,a){var l=n.callbacks;if(l!==null)for(n.callbacks=null,n=0;n<l.length;n++)vp(l[n],a)}function Jl(n,a){try{var l=a.updateQueue,c=l!==null?l.lastEffect:null;if(c!==null){var g=c.next;l=g;do{if((l.tag&n)===n){c=void 0;var v=l.create,E=l.inst;c=v(),E.destroy=c}l=l.next}while(l!==g)}}catch(D){Jt(a,a.return,D)}}function ii(n,a,l){try{var c=a.updateQueue,g=c!==null?c.lastEffect:null;if(g!==null){var v=g.next;c=v;do{if((c.tag&n)===n){var E=c.inst,D=E.destroy;if(D!==void 0){E.destroy=void 0,g=a;var G=l;try{D()}catch(ee){Jt(g,G,ee)}}}c=c.next}while(c!==v)}}catch(ee){Jt(a,a.return,ee)}}function yp(n){var a=n.updateQueue;if(a!==null){var l=n.stateNode;try{pp(a,l)}catch(c){Jt(n,n.return,c)}}}function bp(n,a,l){l.props=Ii(n.type,n.memoizedProps),l.state=n.memoizedState;try{l.componentWillUnmount()}catch(c){Jt(n,a,c)}}function Fi(n,a){try{var l=n.ref;if(l!==null){var c=n.stateNode;switch(n.tag){case 26:case 27:case 5:var g=c;break;default:g=c}typeof l=="function"?n.refCleanup=l(g):l.current=g}}catch(v){Jt(n,a,v)}}function br(n,a){var l=n.ref,c=n.refCleanup;if(l!==null)if(typeof c=="function")try{c()}catch(g){Jt(n,a,g)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(g){Jt(n,a,g)}else l.current=null}function Sp(n){var a=n.type,l=n.memoizedProps,c=n.stateNode;try{e:switch(a){case"button":case"input":case"select":case"textarea":l.autoFocus&&c.focus();break e;case"img":l.src?c.src=l.src:l.srcSet&&(c.srcset=l.srcSet)}}catch(g){Jt(n,n.return,g)}}function Cp(n,a,l){try{var c=n.stateNode;qx(c,n.type,l,a),c[vt]=a}catch(g){Jt(n,n.return,g)}}function wp(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27||n.tag===4}function Hf(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||wp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==27&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Bf(n,a,l){var c=n.tag;if(c===5||c===6)n=n.stateNode,a?l.nodeType===8?l.parentNode.insertBefore(n,a):l.insertBefore(n,a):(l.nodeType===8?(a=l.parentNode,a.insertBefore(n,l)):(a=l,a.appendChild(n)),l=l._reactRootContainer,l!=null||a.onclick!==null||(a.onclick=Qc));else if(c!==4&&c!==27&&(n=n.child,n!==null))for(Bf(n,a,l),n=n.sibling;n!==null;)Bf(n,a,l),n=n.sibling}function jc(n,a,l){var c=n.tag;if(c===5||c===6)n=n.stateNode,a?l.insertBefore(n,a):l.appendChild(n);else if(c!==4&&c!==27&&(n=n.child,n!==null))for(jc(n,a,l),n=n.sibling;n!==null;)jc(n,a,l),n=n.sibling}var Na=!1,fn=!1,If=!1,xp=typeof WeakSet=="function"?WeakSet:Set,jn=null,Ep=!1;function xx(n,a){if(n=n.containerInfo,mm=ou,n=kv(n),jd(n)){if("selectionStart"in n)var l={start:n.selectionStart,end:n.selectionEnd};else e:{l=(l=n.ownerDocument)&&l.defaultView||window;var c=l.getSelection&&l.getSelection();if(c&&c.rangeCount!==0){l=c.anchorNode;var g=c.anchorOffset,v=c.focusNode;c=c.focusOffset;try{l.nodeType,v.nodeType}catch{l=null;break e}var E=0,D=-1,G=-1,ee=0,ge=0,pe=n,se=null;t:for(;;){for(var me;pe!==l||g!==0&&pe.nodeType!==3||(D=E+g),pe!==v||c!==0&&pe.nodeType!==3||(G=E+c),pe.nodeType===3&&(E+=pe.nodeValue.length),(me=pe.firstChild)!==null;)se=pe,pe=me;for(;;){if(pe===n)break t;if(se===l&&++ee===g&&(D=E),se===v&&++ge===c&&(G=E),(me=pe.nextSibling)!==null)break;pe=se,se=pe.parentNode}pe=me}l=D===-1||G===-1?null:{start:D,end:G}}else l=null}l=l||{start:0,end:0}}else l=null;for(gm={focusedElem:n,selectionRange:l},ou=!1,jn=a;jn!==null;)if(a=jn,n=a.child,(a.subtreeFlags&1028)!==0&&n!==null)n.return=a,jn=n;else for(;jn!==null;){switch(a=jn,v=a.alternate,n=a.flags,a.tag){case 0:break;case 11:case 15:break;case 1:if((n&1024)!==0&&v!==null){n=void 0,l=a,g=v.memoizedProps,v=v.memoizedState,c=l.stateNode;try{var ke=Ii(l.type,g,l.elementType===l.type);n=c.getSnapshotBeforeUpdate(ke,v),c.__reactInternalSnapshotBeforeUpdate=n}catch(tt){Jt(l,l.return,tt)}}break;case 3:if((n&1024)!==0){if(n=a.stateNode.containerInfo,l=n.nodeType,l===9)ym(n);else if(l===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":ym(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(i(163))}if(n=a.sibling,n!==null){n.return=a.return,jn=n;break}jn=a.return}return ke=Ep,Ep=!1,ke}function $p(n,a,l){var c=l.flags;switch(l.tag){case 0:case 11:case 15:_a(n,l),c&4&&Jl(5,l);break;case 1:if(_a(n,l),c&4)if(n=l.stateNode,a===null)try{n.componentDidMount()}catch(D){Jt(l,l.return,D)}else{var g=Ii(l.type,a.memoizedProps);a=a.memoizedState;try{n.componentDidUpdate(g,a,n.__reactInternalSnapshotBeforeUpdate)}catch(D){Jt(l,l.return,D)}}c&64&&yp(l),c&512&&Fi(l,l.return);break;case 3:if(_a(n,l),c&64&&(c=l.updateQueue,c!==null)){if(n=null,l.child!==null)switch(l.child.tag){case 27:case 5:n=l.child.stateNode;break;case 1:n=l.child.stateNode}try{pp(c,n)}catch(D){Jt(l,l.return,D)}}break;case 26:_a(n,l),c&512&&Fi(l,l.return);break;case 27:case 5:_a(n,l),a===null&&c&4&&Sp(l),c&512&&Fi(l,l.return);break;case 12:_a(n,l);break;case 13:_a(n,l),c&4&&Op(n,l);break;case 22:if(g=l.memoizedState!==null||Na,!g){a=a!==null&&a.memoizedState!==null||fn;var v=Na,E=fn;Na=g,(fn=a)&&!E?oi(n,l,(l.subtreeFlags&8772)!==0):_a(n,l),Na=v,fn=E}c&512&&(l.memoizedProps.mode==="manual"?Fi(l,l.return):br(l,l.return));break;default:_a(n,l)}}function Rp(n){var a=n.alternate;a!==null&&(n.alternate=null,Rp(a)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(a=n.stateNode,a!==null&&xn(a)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var Mn=null,Sr=!1;function Pa(n,a,l){for(l=l.child;l!==null;)Tp(n,a,l),l=l.sibling}function Tp(n,a,l){if(Ee&&typeof Ee.onCommitFiberUnmount=="function")try{Ee.onCommitFiberUnmount(je,l)}catch{}switch(l.tag){case 26:fn||br(l,a),Pa(n,a,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:fn||br(l,a);var c=Mn,g=Sr;for(Mn=l.stateNode,Pa(n,a,l),l=l.stateNode,a=l.attributes;a.length;)l.removeAttributeNode(a[0]);xn(l),Mn=c,Sr=g;break;case 5:fn||br(l,a);case 6:g=Mn;var v=Sr;if(Mn=null,Pa(n,a,l),Mn=g,Sr=v,Mn!==null)if(Sr)try{n=Mn,c=l.stateNode,n.nodeType===8?n.parentNode.removeChild(c):n.removeChild(c)}catch(E){Jt(l,a,E)}else try{Mn.removeChild(l.stateNode)}catch(E){Jt(l,a,E)}break;case 18:Mn!==null&&(Sr?(a=Mn,l=l.stateNode,a.nodeType===8?pm(a.parentNode,l):a.nodeType===1&&pm(a,l),fs(a)):pm(Mn,l.stateNode));break;case 4:c=Mn,g=Sr,Mn=l.stateNode.containerInfo,Sr=!0,Pa(n,a,l),Mn=c,Sr=g;break;case 0:case 11:case 14:case 15:fn||ii(2,l,a),fn||ii(4,l,a),Pa(n,a,l);break;case 1:fn||(br(l,a),c=l.stateNode,typeof c.componentWillUnmount=="function"&&bp(l,a,c)),Pa(n,a,l);break;case 21:Pa(n,a,l);break;case 22:fn||br(l,a),fn=(c=fn)||l.memoizedState!==null,Pa(n,a,l),fn=c;break;default:Pa(n,a,l)}}function Op(n,a){if(a.memoizedState===null&&(n=a.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{fs(n)}catch(l){Jt(a,a.return,l)}}function Ex(n){switch(n.tag){case 13:case 19:var a=n.stateNode;return a===null&&(a=n.stateNode=new xp),a;case 22:return n=n.stateNode,a=n._retryCache,a===null&&(a=n._retryCache=new xp),a;default:throw Error(i(435,n.tag))}}function jf(n,a){var l=Ex(n);a.forEach(function(c){var g=Hx.bind(null,n,c);l.has(c)||(l.add(c),c.then(g,g))})}function Hr(n,a){var l=a.deletions;if(l!==null)for(var c=0;c<l.length;c++){var g=l[c],v=n,E=a,D=E;e:for(;D!==null;){switch(D.tag){case 27:case 5:Mn=D.stateNode,Sr=!1;break e;case 3:Mn=D.stateNode.containerInfo,Sr=!0;break e;case 4:Mn=D.stateNode.containerInfo,Sr=!0;break e}D=D.return}if(Mn===null)throw Error(i(160));Tp(v,E,g),Mn=null,Sr=!1,v=g.alternate,v!==null&&(v.return=null),g.return=null}if(a.subtreeFlags&13878)for(a=a.child;a!==null;)Mp(a,n),a=a.sibling}var Yr=null;function Mp(n,a){var l=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:Hr(a,n),Br(n),c&4&&(ii(3,n,n.return),Jl(3,n),ii(5,n,n.return));break;case 1:Hr(a,n),Br(n),c&512&&(fn||l===null||br(l,l.return)),c&64&&Na&&(n=n.updateQueue,n!==null&&(c=n.callbacks,c!==null&&(l=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=l===null?c:l.concat(c))));break;case 26:var g=Yr;if(Hr(a,n),Br(n),c&512&&(fn||l===null||br(l,l.return)),c&4){var v=l!==null?l.memoizedState:null;if(c=n.memoizedState,l===null)if(c===null)if(n.stateNode===null){e:{c=n.type,l=n.memoizedProps,g=g.ownerDocument||g;t:switch(c){case"title":v=g.getElementsByTagName("title")[0],(!v||v[un]||v[Ct]||v.namespaceURI==="http://www.w3.org/2000/svg"||v.hasAttribute("itemprop"))&&(v=g.createElement(c),g.head.insertBefore(v,g.querySelector("head > title"))),Zn(v,c,l),v[Ct]=n,Ae(v),c=v;break e;case"link":var E=Sy("link","href",g).get(c+(l.href||""));if(E){for(var D=0;D<E.length;D++)if(v=E[D],v.getAttribute("href")===(l.href==null?null:l.href)&&v.getAttribute("rel")===(l.rel==null?null:l.rel)&&v.getAttribute("title")===(l.title==null?null:l.title)&&v.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){E.splice(D,1);break t}}v=g.createElement(c),Zn(v,c,l),g.head.appendChild(v);break;case"meta":if(E=Sy("meta","content",g).get(c+(l.content||""))){for(D=0;D<E.length;D++)if(v=E[D],v.getAttribute("content")===(l.content==null?null:""+l.content)&&v.getAttribute("name")===(l.name==null?null:l.name)&&v.getAttribute("property")===(l.property==null?null:l.property)&&v.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&v.getAttribute("charset")===(l.charSet==null?null:l.charSet)){E.splice(D,1);break t}}v=g.createElement(c),Zn(v,c,l),g.head.appendChild(v);break;default:throw Error(i(468,c))}v[Ct]=n,Ae(v),c=v}n.stateNode=c}else Cy(g,n.type,n.stateNode);else n.stateNode=by(g,c,n.memoizedProps);else v!==c?(v===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):v.count--,c===null?Cy(g,n.type,n.stateNode):by(g,c,n.memoizedProps)):c===null&&n.stateNode!==null&&Cp(n,n.memoizedProps,l.memoizedProps)}break;case 27:if(c&4&&n.alternate===null){g=n.stateNode,v=n.memoizedProps;try{for(var G=g.firstChild;G;){var ee=G.nextSibling,ge=G.nodeName;G[un]||ge==="HEAD"||ge==="BODY"||ge==="SCRIPT"||ge==="STYLE"||ge==="LINK"&&G.rel.toLowerCase()==="stylesheet"||g.removeChild(G),G=ee}for(var pe=n.type,se=g.attributes;se.length;)g.removeAttributeNode(se[0]);Zn(g,pe,v),g[Ct]=n,g[vt]=v}catch(ke){Jt(n,n.return,ke)}}case 5:if(Hr(a,n),Br(n),c&512&&(fn||l===null||br(l,l.return)),n.flags&32){g=n.stateNode;try{Qn(g,"")}catch(ke){Jt(n,n.return,ke)}}c&4&&n.stateNode!=null&&(g=n.memoizedProps,Cp(n,g,l!==null?l.memoizedProps:g)),c&1024&&(If=!0);break;case 6:if(Hr(a,n),Br(n),c&4){if(n.stateNode===null)throw Error(i(162));c=n.memoizedProps,l=n.stateNode;try{l.nodeValue=c}catch(ke){Jt(n,n.return,ke)}}break;case 3:if(ru=null,g=Yr,Yr=tu(a.containerInfo),Hr(a,n),Yr=g,Br(n),c&4&&l!==null&&l.memoizedState.isDehydrated)try{fs(a.containerInfo)}catch(ke){Jt(n,n.return,ke)}If&&(If=!1,Ap(n));break;case 4:c=Yr,Yr=tu(n.stateNode.containerInfo),Hr(a,n),Br(n),Yr=c;break;case 12:Hr(a,n),Br(n);break;case 13:Hr(a,n),Br(n),n.child.flags&8192&&n.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(Kf=Re()),c&4&&(c=n.updateQueue,c!==null&&(n.updateQueue=null,jf(n,c)));break;case 22:if(c&512&&(fn||l===null||br(l,l.return)),G=n.memoizedState!==null,ee=l!==null&&l.memoizedState!==null,ge=Na,pe=fn,Na=ge||G,fn=pe||ee,Hr(a,n),fn=pe,Na=ge,Br(n),a=n.stateNode,a._current=n,a._visibility&=-3,a._visibility|=a._pendingVisibility&2,c&8192&&(a._visibility=G?a._visibility&-2:a._visibility|1,G&&(a=Na||fn,l===null||ee||a||$o(n)),n.memoizedProps===null||n.memoizedProps.mode!=="manual"))e:for(l=null,a=n;;){if(a.tag===5||a.tag===26||a.tag===27){if(l===null){ee=l=a;try{if(g=ee.stateNode,G)v=g.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{E=ee.stateNode,D=ee.memoizedProps.style;var me=D!=null&&D.hasOwnProperty("display")?D.display:null;E.style.display=me==null||typeof me=="boolean"?"":(""+me).trim()}}catch(ke){Jt(ee,ee.return,ke)}}}else if(a.tag===6){if(l===null){ee=a;try{ee.stateNode.nodeValue=G?"":ee.memoizedProps}catch(ke){Jt(ee,ee.return,ke)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===n)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===n)break e;for(;a.sibling===null;){if(a.return===null||a.return===n)break e;l===a&&(l=null),a=a.return}l===a&&(l=null),a.sibling.return=a.return,a=a.sibling}c&4&&(c=n.updateQueue,c!==null&&(l=c.retryQueue,l!==null&&(c.retryQueue=null,jf(n,l))));break;case 19:Hr(a,n),Br(n),c&4&&(c=n.updateQueue,c!==null&&(n.updateQueue=null,jf(n,c)));break;case 21:break;default:Hr(a,n),Br(n)}}function Br(n){var a=n.flags;if(a&2){try{if(n.tag!==27){e:{for(var l=n.return;l!==null;){if(wp(l)){var c=l;break e}l=l.return}throw Error(i(160))}switch(c.tag){case 27:var g=c.stateNode,v=Hf(n);jc(n,v,g);break;case 5:var E=c.stateNode;c.flags&32&&(Qn(E,""),c.flags&=-33);var D=Hf(n);jc(n,D,E);break;case 3:case 4:var G=c.stateNode.containerInfo,ee=Hf(n);Bf(n,ee,G);break;default:throw Error(i(161))}}}catch(ge){Jt(n,n.return,ge)}n.flags&=-3}a&4096&&(n.flags&=-4097)}function Ap(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var a=n;Ap(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),n=n.sibling}}function _a(n,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)$p(n,a.alternate,a),a=a.sibling}function $o(n){for(n=n.child;n!==null;){var a=n;switch(a.tag){case 0:case 11:case 14:case 15:ii(4,a,a.return),$o(a);break;case 1:br(a,a.return);var l=a.stateNode;typeof l.componentWillUnmount=="function"&&bp(a,a.return,l),$o(a);break;case 26:case 27:case 5:br(a,a.return),$o(a);break;case 22:br(a,a.return),a.memoizedState===null&&$o(a);break;default:$o(a)}n=n.sibling}}function oi(n,a,l){for(l=l&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var c=a.alternate,g=n,v=a,E=v.flags;switch(v.tag){case 0:case 11:case 15:oi(g,v,l),Jl(4,v);break;case 1:if(oi(g,v,l),c=v,g=c.stateNode,typeof g.componentDidMount=="function")try{g.componentDidMount()}catch(ee){Jt(c,c.return,ee)}if(c=v,g=c.updateQueue,g!==null){var D=c.stateNode;try{var G=g.shared.hiddenCallbacks;if(G!==null)for(g.shared.hiddenCallbacks=null,g=0;g<G.length;g++)vp(G[g],D)}catch(ee){Jt(c,c.return,ee)}}l&&E&64&&yp(v),Fi(v,v.return);break;case 26:case 27:case 5:oi(g,v,l),l&&c===null&&E&4&&Sp(v),Fi(v,v.return);break;case 12:oi(g,v,l);break;case 13:oi(g,v,l),l&&E&4&&Op(g,v);break;case 22:v.memoizedState===null&&oi(g,v,l),Fi(v,v.return);break;default:oi(g,v,l)}a=a.sibling}}function kf(n,a){var l=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(l=n.memoizedState.cachePool.pool),n=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(n=a.memoizedState.cachePool.pool),n!==l&&(n!=null&&n.refCount++,l!=null&&Bl(l))}function Ff(n,a){n=null,a.alternate!==null&&(n=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==n&&(a.refCount++,n!=null&&Bl(n))}function li(n,a,l,c){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)Np(n,a,l,c),a=a.sibling}function Np(n,a,l,c){var g=a.flags;switch(a.tag){case 0:case 11:case 15:li(n,a,l,c),g&2048&&Jl(9,a);break;case 3:li(n,a,l,c),g&2048&&(n=null,a.alternate!==null&&(n=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==n&&(a.refCount++,n!=null&&Bl(n)));break;case 12:if(g&2048){li(n,a,l,c),n=a.stateNode;try{var v=a.memoizedProps,E=v.id,D=v.onPostCommit;typeof D=="function"&&D(E,a.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(G){Jt(a,a.return,G)}}else li(n,a,l,c);break;case 23:break;case 22:v=a.stateNode,a.memoizedState!==null?v._visibility&4?li(n,a,l,c):Kl(n,a):v._visibility&4?li(n,a,l,c):(v._visibility|=4,Ro(n,a,l,c,(a.subtreeFlags&10256)!==0)),g&2048&&kf(a.alternate,a);break;case 24:li(n,a,l,c),g&2048&&Ff(a.alternate,a);break;default:li(n,a,l,c)}}function Ro(n,a,l,c,g){for(g=g&&(a.subtreeFlags&10256)!==0,a=a.child;a!==null;){var v=n,E=a,D=l,G=c,ee=E.flags;switch(E.tag){case 0:case 11:case 15:Ro(v,E,D,G,g),Jl(8,E);break;case 23:break;case 22:var ge=E.stateNode;E.memoizedState!==null?ge._visibility&4?Ro(v,E,D,G,g):Kl(v,E):(ge._visibility|=4,Ro(v,E,D,G,g)),g&&ee&2048&&kf(E.alternate,E);break;case 24:Ro(v,E,D,G,g),g&&ee&2048&&Ff(E.alternate,E);break;default:Ro(v,E,D,G,g)}a=a.sibling}}function Kl(n,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var l=n,c=a,g=c.flags;switch(c.tag){case 22:Kl(l,c),g&2048&&kf(c.alternate,c);break;case 24:Kl(l,c),g&2048&&Ff(c.alternate,c);break;default:Kl(l,c)}a=a.sibling}}var Yl=8192;function To(n){if(n.subtreeFlags&Yl)for(n=n.child;n!==null;)Pp(n),n=n.sibling}function Pp(n){switch(n.tag){case 26:To(n),n.flags&Yl&&n.memoizedState!==null&&fE(Yr,n.memoizedState,n.memoizedProps);break;case 5:To(n);break;case 3:case 4:var a=Yr;Yr=tu(n.stateNode.containerInfo),To(n),Yr=a;break;case 22:n.memoizedState===null&&(a=n.alternate,a!==null&&a.memoizedState!==null?(a=Yl,Yl=16777216,To(n),Yl=a):To(n));break;default:To(n)}}function _p(n){var a=n.alternate;if(a!==null&&(n=a.child,n!==null)){a.child=null;do a=n.sibling,n.sibling=null,n=a;while(n!==null)}}function Xl(n){var a=n.deletions;if((n.flags&16)!==0){if(a!==null)for(var l=0;l<a.length;l++){var c=a[l];jn=c,zp(c,n)}_p(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Dp(n),n=n.sibling}function Dp(n){switch(n.tag){case 0:case 11:case 15:Xl(n),n.flags&2048&&ii(9,n,n.return);break;case 3:Xl(n);break;case 12:Xl(n);break;case 22:var a=n.stateNode;n.memoizedState!==null&&a._visibility&4&&(n.return===null||n.return.tag!==13)?(a._visibility&=-5,kc(n)):Xl(n);break;default:Xl(n)}}function kc(n){var a=n.deletions;if((n.flags&16)!==0){if(a!==null)for(var l=0;l<a.length;l++){var c=a[l];jn=c,zp(c,n)}_p(n)}for(n=n.child;n!==null;){switch(a=n,a.tag){case 0:case 11:case 15:ii(8,a,a.return),kc(a);break;case 22:l=a.stateNode,l._visibility&4&&(l._visibility&=-5,kc(a));break;default:kc(a)}n=n.sibling}}function zp(n,a){for(;jn!==null;){var l=jn;switch(l.tag){case 0:case 11:case 15:ii(8,l,a);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var c=l.memoizedState.cachePool.pool;c!=null&&c.refCount++}break;case 24:Bl(l.memoizedState.cache)}if(c=l.child,c!==null)c.return=l,jn=c;else e:for(l=n;jn!==null;){c=jn;var g=c.sibling,v=c.return;if(Rp(c),c===l){jn=null;break e}if(g!==null){g.return=v,jn=g;break e}jn=v}}}function $x(n,a,l,c){this.tag=n,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ir(n,a,l,c){return new $x(n,a,l,c)}function Vf(n){return n=n.prototype,!(!n||!n.isReactComponent)}function si(n,a){var l=n.alternate;return l===null?(l=Ir(n.tag,a,n.key,n.mode),l.elementType=n.elementType,l.type=n.type,l.stateNode=n.stateNode,l.alternate=n,n.alternate=l):(l.pendingProps=a,l.type=n.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=n.flags&31457280,l.childLanes=n.childLanes,l.lanes=n.lanes,l.child=n.child,l.memoizedProps=n.memoizedProps,l.memoizedState=n.memoizedState,l.updateQueue=n.updateQueue,a=n.dependencies,l.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},l.sibling=n.sibling,l.index=n.index,l.ref=n.ref,l.refCleanup=n.refCleanup,l}function Lp(n,a){n.flags&=31457282;var l=n.alternate;return l===null?(n.childLanes=0,n.lanes=a,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=l.childLanes,n.lanes=l.lanes,n.child=l.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=l.memoizedProps,n.memoizedState=l.memoizedState,n.updateQueue=l.updateQueue,n.type=l.type,a=l.dependencies,n.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),n}function Fc(n,a,l,c,g,v){var E=0;if(c=n,typeof n=="function")Vf(n)&&(E=1);else if(typeof n=="string")E=uE(n,l,xe.current)?26:n==="html"||n==="head"||n==="body"?27:5;else e:switch(n){case m:return Vi(l.children,g,v,a);case h:E=8,g|=24;break;case p:return n=Ir(12,l,a,g|2),n.elementType=p,n.lanes=v,n;case x:return n=Ir(13,l,a,g),n.elementType=x,n.lanes=v,n;case S:return n=Ir(19,l,a,g),n.elementType=S,n.lanes=v,n;case T:return Hp(l,g,v,a);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case y:case w:E=10;break e;case b:E=9;break e;case C:E=11;break e;case $:E=14;break e;case R:E=16,c=null;break e}E=29,l=Error(i(130,n===null?"null":typeof n,"")),c=null}return a=Ir(E,l,a,g),a.elementType=n,a.type=c,a.lanes=v,a}function Vi(n,a,l,c){return n=Ir(7,n,c,a),n.lanes=l,n}function Hp(n,a,l,c){n=Ir(22,n,c,a),n.elementType=T,n.lanes=l;var g={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var v=g._current;if(v===null)throw Error(i(456));if((g._pendingVisibility&2)===0){var E=Ya(v,2);E!==null&&(g._pendingVisibility|=2,sr(E,v,2))}},attach:function(){var v=g._current;if(v===null)throw Error(i(456));if((g._pendingVisibility&2)!==0){var E=Ya(v,2);E!==null&&(g._pendingVisibility&=-3,sr(E,v,2))}}};return n.stateNode=g,n}function Gf(n,a,l){return n=Ir(6,n,null,a),n.lanes=l,n}function Uf(n,a,l){return a=Ir(4,n.children!==null?n.children:[],n.key,a),a.lanes=l,a.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},a}function Da(n){n.flags|=4}function Bp(n,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!wy(a)){if(a=Lr.current,a!==null&&((Et&4194176)===Et?ua!==null:(Et&62914560)!==Et&&(Et&536870912)===0||a!==ua))throw zl=Kd,t0;n.flags|=8192}}function Vc(n,a){a!==null&&(n.flags|=4),n.flags&16384&&(a=n.tag!==22?_e():536870912,n.lanes|=a,Mo|=a)}function Zl(n,a){if(!Ot)switch(n.tailMode){case"hidden":a=n.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?n.tail=null:l.sibling=null;break;case"collapsed":l=n.tail;for(var c=null;l!==null;)l.alternate!==null&&(c=l),l=l.sibling;c===null?a||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function an(n){var a=n.alternate!==null&&n.alternate.child===n.child,l=0,c=0;if(a)for(var g=n.child;g!==null;)l|=g.lanes|g.childLanes,c|=g.subtreeFlags&31457280,c|=g.flags&31457280,g.return=n,g=g.sibling;else for(g=n.child;g!==null;)l|=g.lanes|g.childLanes,c|=g.subtreeFlags,c|=g.flags,g.return=n,g=g.sibling;return n.subtreeFlags|=c,n.childLanes=l,a}function Rx(n,a,l){var c=a.pendingProps;switch(qd(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return an(a),null;case 1:return an(a),null;case 3:return l=a.stateNode,c=null,n!==null&&(c=n.memoizedState.cache),a.memoizedState.cache!==c&&(a.flags|=2048),Aa(Pn),be(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(n===null||n.child===null)&&(Nl(a)?Da(a):n===null||n.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,Kr!==null&&(Qf(Kr),Kr=null))),an(a),null;case 26:return l=a.memoizedState,n===null?(Da(a),l!==null?(an(a),Bp(a,l)):(an(a),a.flags&=-16777217)):l?l!==n.memoizedState?(Da(a),an(a),Bp(a,l)):(an(a),a.flags&=-16777217):(n.memoizedProps!==c&&Da(a),an(a),a.flags&=-16777217),null;case 27:Te(a),l=Oe.current;var g=a.type;if(n!==null&&a.stateNode!=null)n.memoizedProps!==c&&Da(a);else{if(!c){if(a.stateNode===null)throw Error(i(166));return an(a),null}n=xe.current,Nl(a)?Qv(a):(n=gy(g,c,l),a.stateNode=n,Da(a))}return an(a),null;case 5:if(Te(a),l=a.type,n!==null&&a.stateNode!=null)n.memoizedProps!==c&&Da(a);else{if(!c){if(a.stateNode===null)throw Error(i(166));return an(a),null}if(n=xe.current,Nl(a))Qv(a);else{switch(g=eu(Oe.current),n){case 1:n=g.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:n=g.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":n=g.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":n=g.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":n=g.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof c.is=="string"?g.createElement("select",{is:c.is}):g.createElement("select"),c.multiple?n.multiple=!0:c.size&&(n.size=c.size);break;default:n=typeof c.is=="string"?g.createElement(l,{is:c.is}):g.createElement(l)}}n[Ct]=a,n[vt]=c;e:for(g=a.child;g!==null;){if(g.tag===5||g.tag===6)n.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===a)break e;for(;g.sibling===null;){if(g.return===null||g.return===a)break e;g=g.return}g.sibling.return=g.return,g=g.sibling}a.stateNode=n;e:switch(Zn(n,l,c),l){case"button":case"input":case"select":case"textarea":n=!!c.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&Da(a)}}return an(a),a.flags&=-16777217,null;case 6:if(n&&a.stateNode!=null)n.memoizedProps!==c&&Da(a);else{if(typeof c!="string"&&a.stateNode===null)throw Error(i(166));if(n=Oe.current,Nl(a)){if(n=a.stateNode,l=a.memoizedProps,c=null,g=lr,g!==null)switch(g.tag){case 27:case 5:c=g.memoizedProps}n[Ct]=a,n=!!(n.nodeValue===l||c!==null&&c.suppressHydrationWarning===!0||sy(n.nodeValue,l)),n||_i(a)}else n=eu(n).createTextNode(c),n[Ct]=a,a.stateNode=n}return an(a),null;case 13:if(c=a.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(g=Nl(a),c!==null&&c.dehydrated!==null){if(n===null){if(!g)throw Error(i(318));if(g=a.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(i(317));g[Ct]=a}else Pl(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;an(a),g=!1}else Kr!==null&&(Qf(Kr),Kr=null),g=!0;if(!g)return a.flags&256?(Ra(a),a):(Ra(a),null)}if(Ra(a),(a.flags&128)!==0)return a.lanes=l,a;if(l=c!==null,n=n!==null&&n.memoizedState!==null,l){c=a.child,g=null,c.alternate!==null&&c.alternate.memoizedState!==null&&c.alternate.memoizedState.cachePool!==null&&(g=c.alternate.memoizedState.cachePool.pool);var v=null;c.memoizedState!==null&&c.memoizedState.cachePool!==null&&(v=c.memoizedState.cachePool.pool),v!==g&&(c.flags|=2048)}return l!==n&&l&&(a.child.flags|=8192),Vc(a,a.updateQueue),an(a),null;case 4:return be(),n===null&&um(a.stateNode.containerInfo),an(a),null;case 10:return Aa(a.type),an(a),null;case 19:if(ce(Nn),g=a.memoizedState,g===null)return an(a),null;if(c=(a.flags&128)!==0,v=g.rendering,v===null)if(c)Zl(g,!1);else{if(mn!==0||n!==null&&(n.flags&128)!==0)for(n=a.child;n!==null;){if(v=Rc(n),v!==null){for(a.flags|=128,Zl(g,!1),n=v.updateQueue,a.updateQueue=n,Vc(a,n),a.subtreeFlags=0,n=l,l=a.child;l!==null;)Lp(l,n),l=l.sibling;return de(Nn,Nn.current&1|2),a.child}n=n.sibling}g.tail!==null&&Re()>Gc&&(a.flags|=128,c=!0,Zl(g,!1),a.lanes=4194304)}else{if(!c)if(n=Rc(v),n!==null){if(a.flags|=128,c=!0,n=n.updateQueue,a.updateQueue=n,Vc(a,n),Zl(g,!0),g.tail===null&&g.tailMode==="hidden"&&!v.alternate&&!Ot)return an(a),null}else 2*Re()-g.renderingStartTime>Gc&&l!==536870912&&(a.flags|=128,c=!0,Zl(g,!1),a.lanes=4194304);g.isBackwards?(v.sibling=a.child,a.child=v):(n=g.last,n!==null?n.sibling=v:a.child=v,g.last=v)}return g.tail!==null?(a=g.tail,g.rendering=a,g.tail=a.sibling,g.renderingStartTime=Re(),a.sibling=null,n=Nn.current,de(Nn,c?n&1|2:n&1),a):(an(a),null);case 22:case 23:return Ra(a),Xd(),c=a.memoizedState!==null,n!==null?n.memoizedState!==null!==c&&(a.flags|=8192):c&&(a.flags|=8192),c?(l&536870912)!==0&&(a.flags&128)===0&&(an(a),a.subtreeFlags&6&&(a.flags|=8192)):an(a),l=a.updateQueue,l!==null&&Vc(a,l.retryQueue),l=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(l=n.memoizedState.cachePool.pool),c=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(c=a.memoizedState.cachePool.pool),c!==l&&(a.flags|=2048),n!==null&&ce(zi),null;case 24:return l=null,n!==null&&(l=n.memoizedState.cache),a.memoizedState.cache!==l&&(a.flags|=2048),Aa(Pn),an(a),null;case 25:return null}throw Error(i(156,a.tag))}function Tx(n,a){switch(qd(a),a.tag){case 1:return n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 3:return Aa(Pn),be(),n=a.flags,(n&65536)!==0&&(n&128)===0?(a.flags=n&-65537|128,a):null;case 26:case 27:case 5:return Te(a),null;case 13:if(Ra(a),n=a.memoizedState,n!==null&&n.dehydrated!==null){if(a.alternate===null)throw Error(i(340));Pl()}return n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 19:return ce(Nn),null;case 4:return be(),null;case 10:return Aa(a.type),null;case 22:case 23:return Ra(a),Xd(),n!==null&&ce(zi),n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 24:return Aa(Pn),null;case 25:return null;default:return null}}function Ip(n,a){switch(qd(a),a.tag){case 3:Aa(Pn),be();break;case 26:case 27:case 5:Te(a);break;case 4:be();break;case 13:Ra(a);break;case 19:ce(Nn);break;case 10:Aa(a.type);break;case 22:case 23:Ra(a),Xd(),n!==null&&ce(zi);break;case 24:Aa(Pn)}}var Ox={getCacheForType:function(n){var a=er(Pn),l=a.data.get(n);return l===void 0&&(l=n(),a.data.set(n,l)),l}},Mx=typeof WeakMap=="function"?WeakMap:Map,on=0,Zt=null,yt=null,Et=0,Qt=0,Cr=null,za=!1,Oo=!1,Wf=!1,La=0,mn=0,ci=0,Gi=0,qf=0,jr=0,Mo=0,Ql=null,fa=null,Jf=!1,Kf=0,Gc=1/0,Uc=null,ui=null,Wc=!1,Ui=null,es=0,Yf=0,Xf=null,ts=0,Zf=null;function wr(){if((on&2)!==0&&Et!==0)return Et&-Et;if(N.T!==null){var n=So;return n!==0?n:om()}return ar()}function jp(){jr===0&&(jr=(Et&536870912)===0||Ot?Ve():536870912);var n=Lr.current;return n!==null&&(n.flags|=32),jr}function sr(n,a,l){(n===Zt&&Qt===2||n.cancelPendingCommit!==null)&&(Ao(n,0),Ha(n,Et,jr,!1)),ct(n,l),((on&2)===0||n!==Zt)&&(n===Zt&&((on&2)===0&&(Gi|=l),mn===4&&Ha(n,Et,jr,!1)),ma(n))}function kp(n,a,l){if((on&6)!==0)throw Error(i(327));var c=!l&&(a&60)===0&&(a&n.expiredLanes)===0||It(n,a),g=c?Px(n,a):nm(n,a,!0),v=c;do{if(g===0){Oo&&!c&&Ha(n,a,0,!1);break}else if(g===6)Ha(n,a,0,!za);else{if(l=n.current.alternate,v&&!Ax(l)){g=nm(n,a,!1),v=!1;continue}if(g===2){if(v=a,n.errorRecoveryDisabledLanes&v)var E=0;else E=n.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){a=E;e:{var D=n;g=Ql;var G=D.current.memoizedState.isDehydrated;if(G&&(Ao(D,E).flags|=256),E=nm(D,E,!1),E!==2){if(Wf&&!G){D.errorRecoveryDisabledLanes|=v,Gi|=v,g=4;break e}v=fa,fa=g,v!==null&&Qf(v)}g=E}if(v=!1,g!==2)continue}}if(g===1){Ao(n,0),Ha(n,a,0,!0);break}e:{switch(c=n,g){case 0:case 1:throw Error(i(345));case 4:if((a&4194176)===a){Ha(c,a,jr,!za);break e}break;case 2:fa=null;break;case 3:case 5:break;default:throw Error(i(329))}if(c.finishedWork=l,c.finishedLanes=a,(a&62914560)===a&&(v=Kf+300-Re(),10<v)){if(Ha(c,a,jr,!za),$t(c,0)!==0)break e;c.timeoutHandle=dy(Fp.bind(null,c,l,fa,Uc,Jf,a,jr,Gi,Mo,za,2,-0,0),v);break e}Fp(c,l,fa,Uc,Jf,a,jr,Gi,Mo,za,0,-0,0)}}break}while(!0);ma(n)}function Qf(n){fa===null?fa=n:fa.push.apply(fa,n)}function Fp(n,a,l,c,g,v,E,D,G,ee,ge,pe,se){var me=a.subtreeFlags;if((me&8192||(me&16785408)===16785408)&&(ls={stylesheets:null,count:0,unsuspend:dE},Pp(a),a=mE(),a!==null)){n.cancelPendingCommit=a(Kp.bind(null,n,l,c,g,E,D,G,1,pe,se)),Ha(n,v,E,!ee);return}Kp(n,l,c,g,E,D,G,ge,pe,se)}function Ax(n){for(var a=n;;){var l=a.tag;if((l===0||l===11||l===15)&&a.flags&16384&&(l=a.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var c=0;c<l.length;c++){var g=l[c],v=g.getSnapshot;g=g.value;try{if(!yr(v(),g))return!1}catch{return!1}}if(l=a.child,a.subtreeFlags&16384&&l!==null)l.return=a,a=l;else{if(a===n)break;for(;a.sibling===null;){if(a.return===null||a.return===n)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function Ha(n,a,l,c){a&=~qf,a&=~Gi,n.suspendedLanes|=a,n.pingedLanes&=~a,c&&(n.warmLanes|=a),c=n.expirationTimes;for(var g=a;0<g;){var v=31-nt(g),E=1<<v;c[v]=-1,g&=~E}l!==0&&wn(n,l,a)}function qc(){return(on&6)===0?(ns(0),!1):!0}function em(){if(yt!==null){if(Qt===0)var n=yt.return;else n=yt,Ma=ji=null,of(n),yo=null,Ll=0,n=yt;for(;n!==null;)Ip(n.alternate,n),n=n.return;yt=null}}function Ao(n,a){n.finishedWork=null,n.finishedLanes=0;var l=n.timeoutHandle;l!==-1&&(n.timeoutHandle=-1,Kx(l)),l=n.cancelPendingCommit,l!==null&&(n.cancelPendingCommit=null,l()),em(),Zt=n,yt=l=si(n.current,null),Et=a,Qt=0,Cr=null,za=!1,Oo=It(n,a),Wf=!1,Mo=jr=qf=Gi=ci=mn=0,fa=Ql=null,Jf=!1,(a&8)!==0&&(a|=a&32);var c=n.entangledLanes;if(c!==0)for(n=n.entanglements,c&=a;0<c;){var g=31-nt(c),v=1<<g;a|=n[g],c&=~v}return La=a,pc(),l}function Vp(n,a){ft=null,N.H=da,a===Dl?(a=a0(),Qt=3):a===t0?(a=a0(),Qt=4):Qt=a===np?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,Cr=a,yt===null&&(mn=1,Hc(n,_r(a,n.current)))}function Gp(){var n=N.H;return N.H=da,n===null?da:n}function Up(){var n=N.A;return N.A=Ox,n}function tm(){mn=4,za||(Et&4194176)!==Et&&Lr.current!==null||(Oo=!0),(ci&134217727)===0&&(Gi&134217727)===0||Zt===null||Ha(Zt,Et,jr,!1)}function nm(n,a,l){var c=on;on|=2;var g=Gp(),v=Up();(Zt!==n||Et!==a)&&(Uc=null,Ao(n,a)),a=!1;var E=mn;e:do try{if(Qt!==0&&yt!==null){var D=yt,G=Cr;switch(Qt){case 8:em(),E=6;break e;case 3:case 2:case 6:Lr.current===null&&(a=!0);var ee=Qt;if(Qt=0,Cr=null,No(n,D,G,ee),l&&Oo){E=0;break e}break;default:ee=Qt,Qt=0,Cr=null,No(n,D,G,ee)}}Nx(),E=mn;break}catch(ge){Vp(n,ge)}while(!0);return a&&n.shellSuspendCounter++,Ma=ji=null,on=c,N.H=g,N.A=v,yt===null&&(Zt=null,Et=0,pc()),E}function Nx(){for(;yt!==null;)Wp(yt)}function Px(n,a){var l=on;on|=2;var c=Gp(),g=Up();Zt!==n||Et!==a?(Uc=null,Gc=Re()+500,Ao(n,a)):Oo=It(n,a);e:do try{if(Qt!==0&&yt!==null){a=yt;var v=Cr;t:switch(Qt){case 1:Qt=0,Cr=null,No(n,a,v,1);break;case 2:if(n0(v)){Qt=0,Cr=null,qp(a);break}a=function(){Qt===2&&Zt===n&&(Qt=7),ma(n)},v.then(a,a);break e;case 3:Qt=7;break e;case 4:Qt=5;break e;case 7:n0(v)?(Qt=0,Cr=null,qp(a)):(Qt=0,Cr=null,No(n,a,v,7));break;case 5:var E=null;switch(yt.tag){case 26:E=yt.memoizedState;case 5:case 27:var D=yt;if(!E||wy(E)){Qt=0,Cr=null;var G=D.sibling;if(G!==null)yt=G;else{var ee=D.return;ee!==null?(yt=ee,Jc(ee)):yt=null}break t}}Qt=0,Cr=null,No(n,a,v,5);break;case 6:Qt=0,Cr=null,No(n,a,v,6);break;case 8:em(),mn=6;break e;default:throw Error(i(462))}}_x();break}catch(ge){Vp(n,ge)}while(!0);return Ma=ji=null,N.H=c,N.A=g,on=l,yt!==null?0:(Zt=null,Et=0,pc(),mn)}function _x(){for(;yt!==null&&!Fe();)Wp(yt)}function Wp(n){var a=gp(n.alternate,n,La);n.memoizedProps=n.pendingProps,a===null?Jc(n):yt=a}function qp(n){var a=n,l=a.alternate;switch(a.tag){case 15:case 0:a=sp(l,a,a.pendingProps,a.type,void 0,Et);break;case 11:a=sp(l,a,a.pendingProps,a.type.render,a.ref,Et);break;case 5:of(a);default:Ip(l,a),a=yt=Lp(a,La),a=gp(l,a,La)}n.memoizedProps=n.pendingProps,a===null?Jc(n):yt=a}function No(n,a,l,c){Ma=ji=null,of(a),yo=null,Ll=0;var g=a.return;try{if(Cx(n,g,a,l,Et)){mn=1,Hc(n,_r(l,n.current)),yt=null;return}}catch(v){if(g!==null)throw yt=g,v;mn=1,Hc(n,_r(l,n.current)),yt=null;return}a.flags&32768?(Ot||c===1?n=!0:Oo||(Et&536870912)!==0?n=!1:(za=n=!0,(c===2||c===3||c===6)&&(c=Lr.current,c!==null&&c.tag===13&&(c.flags|=16384))),Jp(a,n)):Jc(a)}function Jc(n){var a=n;do{if((a.flags&32768)!==0){Jp(a,za);return}n=a.return;var l=Rx(a.alternate,a,La);if(l!==null){yt=l;return}if(a=a.sibling,a!==null){yt=a;return}yt=a=n}while(a!==null);mn===0&&(mn=5)}function Jp(n,a){do{var l=Tx(n.alternate,n);if(l!==null){l.flags&=32767,yt=l;return}if(l=n.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!a&&(n=n.sibling,n!==null)){yt=n;return}yt=n=l}while(n!==null);mn=6,yt=null}function Kp(n,a,l,c,g,v,E,D,G,ee){var ge=N.T,pe=I.p;try{I.p=2,N.T=null,Dx(n,a,l,c,pe,g,v,E,D,G,ee)}finally{N.T=ge,I.p=pe}}function Dx(n,a,l,c,g,v,E,D){do Po();while(Ui!==null);if((on&6)!==0)throw Error(i(327));var G=n.finishedWork;if(c=n.finishedLanes,G===null)return null;if(n.finishedWork=null,n.finishedLanes=0,G===n.current)throw Error(i(177));n.callbackNode=null,n.callbackPriority=0,n.cancelPendingCommit=null;var ee=G.lanes|G.childLanes;if(ee|=Gd,Pt(n,c,ee,v,E,D),n===Zt&&(yt=Zt=null,Et=0),(G.subtreeFlags&10256)===0&&(G.flags&10256)===0||Wc||(Wc=!0,Yf=ee,Xf=l,Bx(qe,function(){return Po(),null})),l=(G.flags&15990)!==0,(G.subtreeFlags&15990)!==0||l?(l=N.T,N.T=null,v=I.p,I.p=2,E=on,on|=4,xx(n,G),Mp(G,n),ax(gm,n.containerInfo),ou=!!mm,gm=mm=null,n.current=G,$p(n,G.alternate,G),ye(),on=E,I.p=v,N.T=l):n.current=G,Wc?(Wc=!1,Ui=n,es=c):Yp(n,ee),ee=n.pendingLanes,ee===0&&(ui=null),Ye(G.stateNode),ma(n),a!==null)for(g=n.onRecoverableError,G=0;G<a.length;G++)ee=a[G],g(ee.value,{componentStack:ee.stack});return(es&3)!==0&&Po(),ee=n.pendingLanes,(c&4194218)!==0&&(ee&42)!==0?n===Zf?ts++:(ts=0,Zf=n):ts=0,ns(0),null}function Yp(n,a){(n.pooledCacheLanes&=a)===0&&(a=n.pooledCache,a!=null&&(n.pooledCache=null,Bl(a)))}function Po(){if(Ui!==null){var n=Ui,a=Yf;Yf=0;var l=Wn(es),c=N.T,g=I.p;try{if(I.p=32>l?32:l,N.T=null,Ui===null)var v=!1;else{l=Xf,Xf=null;var E=Ui,D=es;if(Ui=null,es=0,(on&6)!==0)throw Error(i(331));var G=on;if(on|=4,Dp(E.current),Np(E,E.current,D,l),on=G,ns(0,!1),Ee&&typeof Ee.onPostCommitFiberRoot=="function")try{Ee.onPostCommitFiberRoot(je,E)}catch{}v=!0}return v}finally{I.p=g,N.T=c,Yp(n,a)}}return!1}function Xp(n,a,l){a=_r(l,a),a=Sf(n.stateNode,a,2),n=ai(n,a,2),n!==null&&(ct(n,2),ma(n))}function Jt(n,a,l){if(n.tag===3)Xp(n,n,l);else for(;a!==null;){if(a.tag===3){Xp(a,n,l);break}else if(a.tag===1){var c=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(ui===null||!ui.has(c))){n=_r(l,n),l=ep(2),c=ai(a,l,2),c!==null&&(tp(l,c,a,n),ct(c,2),ma(c));break}}a=a.return}}function rm(n,a,l){var c=n.pingCache;if(c===null){c=n.pingCache=new Mx;var g=new Set;c.set(a,g)}else g=c.get(a),g===void 0&&(g=new Set,c.set(a,g));g.has(l)||(Wf=!0,g.add(l),n=zx.bind(null,n,a,l),a.then(n,n))}function zx(n,a,l){var c=n.pingCache;c!==null&&c.delete(a),n.pingedLanes|=n.suspendedLanes&l,n.warmLanes&=~l,Zt===n&&(Et&l)===l&&(mn===4||mn===3&&(Et&62914560)===Et&&300>Re()-Kf?(on&2)===0&&Ao(n,0):qf|=l,Mo===Et&&(Mo=0)),ma(n)}function Zp(n,a){a===0&&(a=_e()),n=Ya(n,a),n!==null&&(ct(n,a),ma(n))}function Lx(n){var a=n.memoizedState,l=0;a!==null&&(l=a.retryLane),Zp(n,l)}function Hx(n,a){var l=0;switch(n.tag){case 13:var c=n.stateNode,g=n.memoizedState;g!==null&&(l=g.retryLane);break;case 19:c=n.stateNode;break;case 22:c=n.stateNode._retryCache;break;default:throw Error(i(314))}c!==null&&c.delete(a),Zp(n,l)}function Bx(n,a){return Ne(n,a)}var Kc=null,_o=null,am=!1,Yc=!1,im=!1,Wi=0;function ma(n){n!==_o&&n.next===null&&(_o===null?Kc=_o=n:_o=_o.next=n),Yc=!0,am||(am=!0,jx(Ix))}function ns(n,a){if(!im&&Yc){im=!0;do for(var l=!1,c=Kc;c!==null;){if(n!==0){var g=c.pendingLanes;if(g===0)var v=0;else{var E=c.suspendedLanes,D=c.pingedLanes;v=(1<<31-nt(42|n)+1)-1,v&=g&~(E&~D),v=v&201326677?v&201326677|1:v?v|2:0}v!==0&&(l=!0,ty(c,v))}else v=Et,v=$t(c,c===Zt?v:0),(v&3)===0||It(c,v)||(l=!0,ty(c,v));c=c.next}while(l);im=!1}}function Ix(){Yc=am=!1;var n=0;Wi!==0&&(Jx()&&(n=Wi),Wi=0);for(var a=Re(),l=null,c=Kc;c!==null;){var g=c.next,v=Qp(c,a);v===0?(c.next=null,l===null?Kc=g:l.next=g,g===null&&(_o=l)):(l=c,(n!==0||(v&3)!==0)&&(Yc=!0)),c=g}ns(n)}function Qp(n,a){for(var l=n.suspendedLanes,c=n.pingedLanes,g=n.expirationTimes,v=n.pendingLanes&-62914561;0<v;){var E=31-nt(v),D=1<<E,G=g[E];G===-1?((D&l)===0||(D&c)!==0)&&(g[E]=xt(D,a)):G<=a&&(n.expiredLanes|=D),v&=~D}if(a=Zt,l=Et,l=$t(n,n===a?l:0),c=n.callbackNode,l===0||n===a&&Qt===2||n.cancelPendingCommit!==null)return c!==null&&c!==null&&$e(c),n.callbackNode=null,n.callbackPriority=0;if((l&3)===0||It(n,l)){if(a=l&-l,a===n.callbackPriority)return a;switch(c!==null&&$e(c),Wn(l)){case 2:case 8:l=at;break;case 32:l=qe;break;case 268435456:l=Xe;break;default:l=qe}return c=ey.bind(null,n),l=Ne(l,c),n.callbackPriority=a,n.callbackNode=l,a}return c!==null&&c!==null&&$e(c),n.callbackPriority=2,n.callbackNode=null,2}function ey(n,a){var l=n.callbackNode;if(Po()&&n.callbackNode!==l)return null;var c=Et;return c=$t(n,n===Zt?c:0),c===0?null:(kp(n,c,a),Qp(n,Re()),n.callbackNode!=null&&n.callbackNode===l?ey.bind(null,n):null)}function ty(n,a){if(Po())return null;kp(n,a,!0)}function jx(n){Yx(function(){(on&6)!==0?Ne(Ie,n):n()})}function om(){return Wi===0&&(Wi=Ve()),Wi}function ny(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:Rn(""+n)}function ry(n,a){var l=a.ownerDocument.createElement("input");return l.name=a.name,l.value=a.value,n.id&&l.setAttribute("form",n.id),a.parentNode.insertBefore(l,a),n=new FormData(n),l.parentNode.removeChild(l),n}function kx(n,a,l,c,g){if(a==="submit"&&l&&l.stateNode===g){var v=ny((g[vt]||null).action),E=c.submitter;E&&(a=(a=E[vt]||null)?ny(a.formAction):E.getAttribute("formAction"),a!==null&&(v=a,E=null));var D=new gc("action","action",null,c,g);n.push({event:D,listeners:[{instance:null,listener:function(){if(c.defaultPrevented){if(Wi!==0){var G=E?ry(g,E):new FormData(g);hf(l,{pending:!0,data:G,method:g.method,action:v},null,G)}}else typeof v=="function"&&(D.preventDefault(),G=E?ry(g,E):new FormData(g),hf(l,{pending:!0,data:G,method:g.method,action:v},v,G))},currentTarget:g}]})}}for(var lm=0;lm<Kv.length;lm++){var sm=Kv[lm],Fx=sm.toLowerCase(),Vx=sm[0].toUpperCase()+sm.slice(1);Jr(Fx,"on"+Vx)}Jr(Gv,"onAnimationEnd"),Jr(Uv,"onAnimationIteration"),Jr(Wv,"onAnimationStart"),Jr("dblclick","onDoubleClick"),Jr("focusin","onFocus"),Jr("focusout","onBlur"),Jr(ox,"onTransitionRun"),Jr(lx,"onTransitionStart"),Jr(sx,"onTransitionCancel"),Jr(qv,"onTransitionEnd"),Yt("onMouseEnter",["mouseout","mouseover"]),Yt("onMouseLeave",["mouseout","mouseover"]),Yt("onPointerEnter",["pointerout","pointerover"]),Yt("onPointerLeave",["pointerout","pointerover"]),Kt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Kt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Kt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Kt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Kt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Kt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var rs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Gx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(rs));function ay(n,a){a=(a&4)!==0;for(var l=0;l<n.length;l++){var c=n[l],g=c.event;c=c.listeners;e:{var v=void 0;if(a)for(var E=c.length-1;0<=E;E--){var D=c[E],G=D.instance,ee=D.currentTarget;if(D=D.listener,G!==v&&g.isPropagationStopped())break e;v=D,g.currentTarget=ee;try{v(g)}catch(ge){Lc(ge)}g.currentTarget=null,v=G}else for(E=0;E<c.length;E++){if(D=c[E],G=D.instance,ee=D.currentTarget,D=D.listener,G!==v&&g.isPropagationStopped())break e;v=D,g.currentTarget=ee;try{v(g)}catch(ge){Lc(ge)}g.currentTarget=null,v=G}}}}function wt(n,a){var l=a[qn];l===void 0&&(l=a[qn]=new Set);var c=n+"__bubble";l.has(c)||(iy(a,n,2,!1),l.add(c))}function cm(n,a,l){var c=0;a&&(c|=4),iy(l,n,c,a)}var Xc="_reactListening"+Math.random().toString(36).slice(2);function um(n){if(!n[Xc]){n[Xc]=!0,dt.forEach(function(l){l!=="selectionchange"&&(Gx.has(l)||cm(l,!1,n),cm(l,!0,n))});var a=n.nodeType===9?n:n.ownerDocument;a===null||a[Xc]||(a[Xc]=!0,cm("selectionchange",!1,a))}}function iy(n,a,l,c){switch(Oy(a)){case 2:var g=vE;break;case 8:g=pE;break;default:g=xm}l=g.bind(null,a,l,n),g=void 0,!Ze||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(g=!0),c?g!==void 0?n.addEventListener(a,l,{capture:!0,passive:g}):n.addEventListener(a,l,!0):g!==void 0?n.addEventListener(a,l,{passive:g}):n.addEventListener(a,l,!1)}function dm(n,a,l,c,g){var v=c;if((a&1)===0&&(a&2)===0&&c!==null)e:for(;;){if(c===null)return;var E=c.tag;if(E===3||E===4){var D=c.stateNode.containerInfo;if(D===g||D.nodeType===8&&D.parentNode===g)break;if(E===4)for(E=c.return;E!==null;){var G=E.tag;if((G===3||G===4)&&(G=E.stateNode.containerInfo,G===g||G.nodeType===8&&G.parentNode===g))return;E=E.return}for(;D!==null;){if(E=En(D),E===null)return;if(G=E.tag,G===5||G===6||G===26||G===27){c=v=E;continue e}D=D.parentNode}}c=c.return}so(function(){var ee=v,ge=sa(l),pe=[];e:{var se=Jv.get(n);if(se!==void 0){var me=gc,ke=n;switch(n){case"keypress":if(Ti(l)===0)break e;case"keydown":case"keyup":me=Hw;break;case"focusin":ke="focus",me=zd;break;case"focusout":ke="blur",me=zd;break;case"beforeblur":case"afterblur":me=zd;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":me=xv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":me=$w;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":me=jw;break;case Gv:case Uv:case Wv:me=Ow;break;case qv:me=Fw;break;case"scroll":case"scrollend":me=xw;break;case"wheel":me=Gw;break;case"copy":case"cut":case"paste":me=Aw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":me=$v;break;case"toggle":case"beforetoggle":me=Ww}var tt=(a&4)!==0,gn=!tt&&(n==="scroll"||n==="scrollend"),re=tt?se!==null?se+"Capture":null:se;tt=[];for(var Q=ee,ie;Q!==null;){var ve=Q;if(ie=ve.stateNode,ve=ve.tag,ve!==5&&ve!==26&&ve!==27||ie===null||re===null||(ve=Pe(Q,re),ve!=null&&tt.push(as(Q,ve,ie))),gn)break;Q=Q.return}0<tt.length&&(se=new me(se,ke,null,l,ge),pe.push({event:se,listeners:tt}))}}if((a&7)===0){e:{if(se=n==="mouseover"||n==="pointerover",me=n==="mouseout"||n==="pointerout",se&&l!==la&&(ke=l.relatedTarget||l.fromElement)&&(En(ke)||ke[jt]))break e;if((me||se)&&(se=ge.window===ge?ge:(se=ge.ownerDocument)?se.defaultView||se.parentWindow:window,me?(ke=l.relatedTarget||l.toElement,me=ee,ke=ke?En(ke):null,ke!==null&&(gn=F(ke),tt=ke.tag,ke!==gn||tt!==5&&tt!==27&&tt!==6)&&(ke=null)):(me=null,ke=ee),me!==ke)){if(tt=xv,ve="onMouseLeave",re="onMouseEnter",Q="mouse",(n==="pointerout"||n==="pointerover")&&(tt=$v,ve="onPointerLeave",re="onPointerEnter",Q="pointer"),gn=me==null?se:ir(me),ie=ke==null?se:ir(ke),se=new tt(ve,Q+"leave",me,l,ge),se.target=gn,se.relatedTarget=ie,ve=null,En(ge)===ee&&(tt=new tt(re,Q+"enter",ke,l,ge),tt.target=ie,tt.relatedTarget=gn,ve=tt),gn=ve,me&&ke)t:{for(tt=me,re=ke,Q=0,ie=tt;ie;ie=Do(ie))Q++;for(ie=0,ve=re;ve;ve=Do(ve))ie++;for(;0<Q-ie;)tt=Do(tt),Q--;for(;0<ie-Q;)re=Do(re),ie--;for(;Q--;){if(tt===re||re!==null&&tt===re.alternate)break t;tt=Do(tt),re=Do(re)}tt=null}else tt=null;me!==null&&oy(pe,se,me,tt,!1),ke!==null&&gn!==null&&oy(pe,gn,ke,tt,!0)}}e:{if(se=ee?ir(ee):window,me=se.nodeName&&se.nodeName.toLowerCase(),me==="select"||me==="input"&&se.type==="file")var He=_v;else if(Nv(se))if(Dv)He=nx;else{He=ex;var gt=Qw}else me=se.nodeName,!me||me.toLowerCase()!=="input"||se.type!=="checkbox"&&se.type!=="radio"?ee&&$i(ee.elementType)&&(He=_v):He=tx;if(He&&(He=He(n,ee))){Pv(pe,He,l,ge);break e}gt&&gt(n,se,ee),n==="focusout"&&ee&&se.type==="number"&&ee.memoizedProps.value!=null&&Ar(se,"number",se.value)}switch(gt=ee?ir(ee):window,n){case"focusin":(Nv(gt)||gt.contentEditable==="true")&&(fo=gt,kd=ee,Al=null);break;case"focusout":Al=kd=fo=null;break;case"mousedown":Fd=!0;break;case"contextmenu":case"mouseup":case"dragend":Fd=!1,Fv(pe,l,ge);break;case"selectionchange":if(ix)break;case"keydown":case"keyup":Fv(pe,l,ge)}var We;if(Hd)e:{switch(n){case"compositionstart":var Qe="onCompositionStart";break e;case"compositionend":Qe="onCompositionEnd";break e;case"compositionupdate":Qe="onCompositionUpdate";break e}Qe=void 0}else uo?Mv(n,l)&&(Qe="onCompositionEnd"):n==="keydown"&&l.keyCode===229&&(Qe="onCompositionStart");Qe&&(Rv&&l.locale!=="ko"&&(uo||Qe!=="onCompositionStart"?Qe==="onCompositionEnd"&&uo&&(We=co()):(Lt=ge,Vt="value"in Lt?Lt.value:Lt.textContent,uo=!0)),gt=Zc(ee,Qe),0<gt.length&&(Qe=new Ev(Qe,n,null,l,ge),pe.push({event:Qe,listeners:gt}),We?Qe.data=We:(We=Av(l),We!==null&&(Qe.data=We)))),(We=Jw?Kw(n,l):Yw(n,l))&&(Qe=Zc(ee,"onBeforeInput"),0<Qe.length&&(gt=new Ev("onBeforeInput","beforeinput",null,l,ge),pe.push({event:gt,listeners:Qe}),gt.data=We)),kx(pe,n,ee,l,ge)}ay(pe,a)})}function as(n,a,l){return{instance:n,listener:a,currentTarget:l}}function Zc(n,a){for(var l=a+"Capture",c=[];n!==null;){var g=n,v=g.stateNode;g=g.tag,g!==5&&g!==26&&g!==27||v===null||(g=Pe(n,l),g!=null&&c.unshift(as(n,g,v)),g=Pe(n,a),g!=null&&c.push(as(n,g,v))),n=n.return}return c}function Do(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function oy(n,a,l,c,g){for(var v=a._reactName,E=[];l!==null&&l!==c;){var D=l,G=D.alternate,ee=D.stateNode;if(D=D.tag,G!==null&&G===c)break;D!==5&&D!==26&&D!==27||ee===null||(G=ee,g?(ee=Pe(l,v),ee!=null&&E.unshift(as(l,ee,G))):g||(ee=Pe(l,v),ee!=null&&E.push(as(l,ee,G)))),l=l.return}E.length!==0&&n.push({event:a,listeners:E})}var Ux=/\r\n?/g,Wx=/\u0000|\uFFFD/g;function ly(n){return(typeof n=="string"?n:""+n).replace(Ux,`
`).replace(Wx,"")}function sy(n,a){return a=ly(a),ly(n)===a}function Qc(){}function Ut(n,a,l,c,g,v){switch(l){case"children":typeof c=="string"?a==="body"||a==="textarea"&&c===""||Qn(n,c):(typeof c=="number"||typeof c=="bigint")&&a!=="body"&&Qn(n,""+c);break;case"className":$n(n,"class",c);break;case"tabIndex":$n(n,"tabindex",c);break;case"dir":case"role":case"viewBox":case"width":case"height":$n(n,l,c);break;case"style":vr(n,c,v);break;case"data":if(a!=="object"){$n(n,"data",c);break}case"src":case"href":if(c===""&&(a!=="a"||l!=="href")){n.removeAttribute(l);break}if(c==null||typeof c=="function"||typeof c=="symbol"||typeof c=="boolean"){n.removeAttribute(l);break}c=Rn(""+c),n.setAttribute(l,c);break;case"action":case"formAction":if(typeof c=="function"){n.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof v=="function"&&(l==="formAction"?(a!=="input"&&Ut(n,a,"name",g.name,g,null),Ut(n,a,"formEncType",g.formEncType,g,null),Ut(n,a,"formMethod",g.formMethod,g,null),Ut(n,a,"formTarget",g.formTarget,g,null)):(Ut(n,a,"encType",g.encType,g,null),Ut(n,a,"method",g.method,g,null),Ut(n,a,"target",g.target,g,null)));if(c==null||typeof c=="symbol"||typeof c=="boolean"){n.removeAttribute(l);break}c=Rn(""+c),n.setAttribute(l,c);break;case"onClick":c!=null&&(n.onclick=Qc);break;case"onScroll":c!=null&&wt("scroll",n);break;case"onScrollEnd":c!=null&&wt("scrollend",n);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(i(61));if(l=c.__html,l!=null){if(g.children!=null)throw Error(i(60));n.innerHTML=l}}break;case"multiple":n.multiple=c&&typeof c!="function"&&typeof c!="symbol";break;case"muted":n.muted=c&&typeof c!="function"&&typeof c!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(c==null||typeof c=="function"||typeof c=="boolean"||typeof c=="symbol"){n.removeAttribute("xlink:href");break}l=Rn(""+c),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":c!=null&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(l,""+c):n.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":c&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(l,""):n.removeAttribute(l);break;case"capture":case"download":c===!0?n.setAttribute(l,""):c!==!1&&c!=null&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(l,c):n.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":c!=null&&typeof c!="function"&&typeof c!="symbol"&&!isNaN(c)&&1<=c?n.setAttribute(l,c):n.removeAttribute(l);break;case"rowSpan":case"start":c==null||typeof c=="function"||typeof c=="symbol"||isNaN(c)?n.removeAttribute(l):n.setAttribute(l,c);break;case"popover":wt("beforetoggle",n),wt("toggle",n),hr(n,"popover",c);break;case"xlinkActuate":en(n,"http://www.w3.org/1999/xlink","xlink:actuate",c);break;case"xlinkArcrole":en(n,"http://www.w3.org/1999/xlink","xlink:arcrole",c);break;case"xlinkRole":en(n,"http://www.w3.org/1999/xlink","xlink:role",c);break;case"xlinkShow":en(n,"http://www.w3.org/1999/xlink","xlink:show",c);break;case"xlinkTitle":en(n,"http://www.w3.org/1999/xlink","xlink:title",c);break;case"xlinkType":en(n,"http://www.w3.org/1999/xlink","xlink:type",c);break;case"xmlBase":en(n,"http://www.w3.org/XML/1998/namespace","xml:base",c);break;case"xmlLang":en(n,"http://www.w3.org/XML/1998/namespace","xml:lang",c);break;case"xmlSpace":en(n,"http://www.w3.org/XML/1998/namespace","xml:space",c);break;case"is":hr(n,"is",c);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=fc.get(l)||l,hr(n,l,c))}}function fm(n,a,l,c,g,v){switch(l){case"style":vr(n,c,v);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(i(61));if(l=c.__html,l!=null){if(g.children!=null)throw Error(i(60));n.innerHTML=l}}break;case"children":typeof c=="string"?Qn(n,c):(typeof c=="number"||typeof c=="bigint")&&Qn(n,""+c);break;case"onScroll":c!=null&&wt("scroll",n);break;case"onScrollEnd":c!=null&&wt("scrollend",n);break;case"onClick":c!=null&&(n.onclick=Qc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Rt.hasOwnProperty(l))e:{if(l[0]==="o"&&l[1]==="n"&&(g=l.endsWith("Capture"),a=l.slice(2,g?l.length-7:void 0),v=n[vt]||null,v=v!=null?v[l]:null,typeof v=="function"&&n.removeEventListener(a,v,g),typeof c=="function")){typeof v!="function"&&v!==null&&(l in n?n[l]=null:n.hasAttribute(l)&&n.removeAttribute(l)),n.addEventListener(a,c,g);break e}l in n?n[l]=c:c===!0?n.setAttribute(l,""):hr(n,l,c)}}}function Zn(n,a,l){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":wt("error",n),wt("load",n);var c=!1,g=!1,v;for(v in l)if(l.hasOwnProperty(v)){var E=l[v];if(E!=null)switch(v){case"src":c=!0;break;case"srcSet":g=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,a));default:Ut(n,a,v,E,l,null)}}g&&Ut(n,a,"srcSet",l.srcSet,l,null),c&&Ut(n,a,"src",l.src,l,null);return;case"input":wt("invalid",n);var D=v=E=g=null,G=null,ee=null;for(c in l)if(l.hasOwnProperty(c)){var ge=l[c];if(ge!=null)switch(c){case"name":g=ge;break;case"type":E=ge;break;case"checked":G=ge;break;case"defaultChecked":ee=ge;break;case"value":v=ge;break;case"defaultValue":D=ge;break;case"children":case"dangerouslySetInnerHTML":if(ge!=null)throw Error(i(137,a));break;default:Ut(n,a,c,ge,l,null)}}qr(n,v,D,G,ee,E,g,!1),aa(n);return;case"select":wt("invalid",n),c=E=v=null;for(g in l)if(l.hasOwnProperty(g)&&(D=l[g],D!=null))switch(g){case"value":v=D;break;case"defaultValue":E=D;break;case"multiple":c=D;default:Ut(n,a,g,D,l,null)}a=v,l=E,n.multiple=!!c,a!=null?Nr(n,!!c,a,!1):l!=null&&Nr(n,!!c,l,!0);return;case"textarea":wt("invalid",n),v=g=c=null;for(E in l)if(l.hasOwnProperty(E)&&(D=l[E],D!=null))switch(E){case"value":c=D;break;case"defaultValue":g=D;break;case"children":v=D;break;case"dangerouslySetInnerHTML":if(D!=null)throw Error(i(91));break;default:Ut(n,a,E,D,l,null)}ia(n,c,g,v),aa(n);return;case"option":for(G in l)if(l.hasOwnProperty(G)&&(c=l[G],c!=null))switch(G){case"selected":n.selected=c&&typeof c!="function"&&typeof c!="symbol";break;default:Ut(n,a,G,c,l,null)}return;case"dialog":wt("cancel",n),wt("close",n);break;case"iframe":case"object":wt("load",n);break;case"video":case"audio":for(c=0;c<rs.length;c++)wt(rs[c],n);break;case"image":wt("error",n),wt("load",n);break;case"details":wt("toggle",n);break;case"embed":case"source":case"link":wt("error",n),wt("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ee in l)if(l.hasOwnProperty(ee)&&(c=l[ee],c!=null))switch(ee){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,a));default:Ut(n,a,ee,c,l,null)}return;default:if($i(a)){for(ge in l)l.hasOwnProperty(ge)&&(c=l[ge],c!==void 0&&fm(n,a,ge,c,l,void 0));return}}for(D in l)l.hasOwnProperty(D)&&(c=l[D],c!=null&&Ut(n,a,D,c,l,null))}function qx(n,a,l,c){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var g=null,v=null,E=null,D=null,G=null,ee=null,ge=null;for(me in l){var pe=l[me];if(l.hasOwnProperty(me)&&pe!=null)switch(me){case"checked":break;case"value":break;case"defaultValue":G=pe;default:c.hasOwnProperty(me)||Ut(n,a,me,null,c,pe)}}for(var se in c){var me=c[se];if(pe=l[se],c.hasOwnProperty(se)&&(me!=null||pe!=null))switch(se){case"type":v=me;break;case"name":g=me;break;case"checked":ee=me;break;case"defaultChecked":ge=me;break;case"value":E=me;break;case"defaultValue":D=me;break;case"children":case"dangerouslySetInnerHTML":if(me!=null)throw Error(i(137,a));break;default:me!==pe&&Ut(n,a,se,me,c,pe)}}yn(n,E,D,G,ee,ge,v,g);return;case"select":me=E=D=se=null;for(v in l)if(G=l[v],l.hasOwnProperty(v)&&G!=null)switch(v){case"value":break;case"multiple":me=G;default:c.hasOwnProperty(v)||Ut(n,a,v,null,c,G)}for(g in c)if(v=c[g],G=l[g],c.hasOwnProperty(g)&&(v!=null||G!=null))switch(g){case"value":se=v;break;case"defaultValue":D=v;break;case"multiple":E=v;default:v!==G&&Ut(n,a,g,v,c,G)}a=D,l=E,c=me,se!=null?Nr(n,!!l,se,!1):!!c!=!!l&&(a!=null?Nr(n,!!l,a,!0):Nr(n,!!l,l?[]:"",!1));return;case"textarea":me=se=null;for(D in l)if(g=l[D],l.hasOwnProperty(D)&&g!=null&&!c.hasOwnProperty(D))switch(D){case"value":break;case"children":break;default:Ut(n,a,D,null,c,g)}for(E in c)if(g=c[E],v=l[E],c.hasOwnProperty(E)&&(g!=null||v!=null))switch(E){case"value":se=g;break;case"defaultValue":me=g;break;case"children":break;case"dangerouslySetInnerHTML":if(g!=null)throw Error(i(91));break;default:g!==v&&Ut(n,a,E,g,c,v)}Sa(n,se,me);return;case"option":for(var ke in l)if(se=l[ke],l.hasOwnProperty(ke)&&se!=null&&!c.hasOwnProperty(ke))switch(ke){case"selected":n.selected=!1;break;default:Ut(n,a,ke,null,c,se)}for(G in c)if(se=c[G],me=l[G],c.hasOwnProperty(G)&&se!==me&&(se!=null||me!=null))switch(G){case"selected":n.selected=se&&typeof se!="function"&&typeof se!="symbol";break;default:Ut(n,a,G,se,c,me)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var tt in l)se=l[tt],l.hasOwnProperty(tt)&&se!=null&&!c.hasOwnProperty(tt)&&Ut(n,a,tt,null,c,se);for(ee in c)if(se=c[ee],me=l[ee],c.hasOwnProperty(ee)&&se!==me&&(se!=null||me!=null))switch(ee){case"children":case"dangerouslySetInnerHTML":if(se!=null)throw Error(i(137,a));break;default:Ut(n,a,ee,se,c,me)}return;default:if($i(a)){for(var gn in l)se=l[gn],l.hasOwnProperty(gn)&&se!==void 0&&!c.hasOwnProperty(gn)&&fm(n,a,gn,void 0,c,se);for(ge in c)se=c[ge],me=l[ge],!c.hasOwnProperty(ge)||se===me||se===void 0&&me===void 0||fm(n,a,ge,se,c,me);return}}for(var re in l)se=l[re],l.hasOwnProperty(re)&&se!=null&&!c.hasOwnProperty(re)&&Ut(n,a,re,null,c,se);for(pe in c)se=c[pe],me=l[pe],!c.hasOwnProperty(pe)||se===me||se==null&&me==null||Ut(n,a,pe,se,c,me)}var mm=null,gm=null;function eu(n){return n.nodeType===9?n:n.ownerDocument}function cy(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function uy(n,a){if(n===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&a==="foreignObject"?0:n}function hm(n,a){return n==="textarea"||n==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var vm=null;function Jx(){var n=window.event;return n&&n.type==="popstate"?n===vm?!1:(vm=n,!0):(vm=null,!1)}var dy=typeof setTimeout=="function"?setTimeout:void 0,Kx=typeof clearTimeout=="function"?clearTimeout:void 0,fy=typeof Promise=="function"?Promise:void 0,Yx=typeof queueMicrotask=="function"?queueMicrotask:typeof fy<"u"?function(n){return fy.resolve(null).then(n).catch(Xx)}:dy;function Xx(n){setTimeout(function(){throw n})}function pm(n,a){var l=a,c=0;do{var g=l.nextSibling;if(n.removeChild(l),g&&g.nodeType===8)if(l=g.data,l==="/$"){if(c===0){n.removeChild(g),fs(a);return}c--}else l!=="$"&&l!=="$?"&&l!=="$!"||c++;l=g}while(l);fs(a)}function ym(n){var a=n.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var l=a;switch(a=a.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":ym(l),xn(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}n.removeChild(l)}}function Zx(n,a,l,c){for(;n.nodeType===1;){var g=l;if(n.nodeName.toLowerCase()!==a.toLowerCase()){if(!c&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(c){if(!n[un])switch(a){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(v=n.getAttribute("rel"),v==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(v!==g.rel||n.getAttribute("href")!==(g.href==null?null:g.href)||n.getAttribute("crossorigin")!==(g.crossOrigin==null?null:g.crossOrigin)||n.getAttribute("title")!==(g.title==null?null:g.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(v=n.getAttribute("src"),(v!==(g.src==null?null:g.src)||n.getAttribute("type")!==(g.type==null?null:g.type)||n.getAttribute("crossorigin")!==(g.crossOrigin==null?null:g.crossOrigin))&&v&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(a==="input"&&n.type==="hidden"){var v=g.name==null?null:""+g.name;if(g.type==="hidden"&&n.getAttribute("name")===v)return n}else return n;if(n=Xr(n.nextSibling),n===null)break}return null}function Qx(n,a,l){if(a==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!l||(n=Xr(n.nextSibling),n===null))return null;return n}function Xr(n){for(;n!=null;n=n.nextSibling){var a=n.nodeType;if(a===1||a===3)break;if(a===8){if(a=n.data,a==="$"||a==="$!"||a==="$?"||a==="F!"||a==="F")break;if(a==="/$")return null}}return n}function my(n){n=n.previousSibling;for(var a=0;n;){if(n.nodeType===8){var l=n.data;if(l==="$"||l==="$!"||l==="$?"){if(a===0)return n;a--}else l==="/$"&&a++}n=n.previousSibling}return null}function gy(n,a,l){switch(a=eu(l),n){case"html":if(n=a.documentElement,!n)throw Error(i(452));return n;case"head":if(n=a.head,!n)throw Error(i(453));return n;case"body":if(n=a.body,!n)throw Error(i(454));return n;default:throw Error(i(451))}}var kr=new Map,hy=new Set;function tu(n){return typeof n.getRootNode=="function"?n.getRootNode():n.ownerDocument}var Ba=I.d;I.d={f:eE,r:tE,D:nE,C:rE,L:aE,m:iE,X:lE,S:oE,M:sE};function eE(){var n=Ba.f(),a=qc();return n||a}function tE(n){var a=ut(n);a!==null&&a.tag===5&&a.type==="form"?F0(a):Ba.r(n)}var zo=typeof document>"u"?null:document;function vy(n,a,l){var c=zo;if(c&&typeof a=="string"&&a){var g=Dt(a);g='link[rel="'+n+'"][href="'+g+'"]',typeof l=="string"&&(g+='[crossorigin="'+l+'"]'),hy.has(g)||(hy.add(g),n={rel:n,crossOrigin:l,href:a},c.querySelector(g)===null&&(a=c.createElement("link"),Zn(a,"link",n),Ae(a),c.head.appendChild(a)))}}function nE(n){Ba.D(n),vy("dns-prefetch",n,null)}function rE(n,a){Ba.C(n,a),vy("preconnect",n,a)}function aE(n,a,l){Ba.L(n,a,l);var c=zo;if(c&&n&&a){var g='link[rel="preload"][as="'+Dt(a)+'"]';a==="image"&&l&&l.imageSrcSet?(g+='[imagesrcset="'+Dt(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(g+='[imagesizes="'+Dt(l.imageSizes)+'"]')):g+='[href="'+Dt(n)+'"]';var v=g;switch(a){case"style":v=Lo(n);break;case"script":v=Ho(n)}kr.has(v)||(n=H({rel:"preload",href:a==="image"&&l&&l.imageSrcSet?void 0:n,as:a},l),kr.set(v,n),c.querySelector(g)!==null||a==="style"&&c.querySelector(is(v))||a==="script"&&c.querySelector(os(v))||(a=c.createElement("link"),Zn(a,"link",n),Ae(a),c.head.appendChild(a)))}}function iE(n,a){Ba.m(n,a);var l=zo;if(l&&n){var c=a&&typeof a.as=="string"?a.as:"script",g='link[rel="modulepreload"][as="'+Dt(c)+'"][href="'+Dt(n)+'"]',v=g;switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":v=Ho(n)}if(!kr.has(v)&&(n=H({rel:"modulepreload",href:n},a),kr.set(v,n),l.querySelector(g)===null)){switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(os(v)))return}c=l.createElement("link"),Zn(c,"link",n),Ae(c),l.head.appendChild(c)}}}function oE(n,a,l){Ba.S(n,a,l);var c=zo;if(c&&n){var g=lt(c).hoistableStyles,v=Lo(n);a=a||"default";var E=g.get(v);if(!E){var D={loading:0,preload:null};if(E=c.querySelector(is(v)))D.loading=5;else{n=H({rel:"stylesheet",href:n,"data-precedence":a},l),(l=kr.get(v))&&bm(n,l);var G=E=c.createElement("link");Ae(G),Zn(G,"link",n),G._p=new Promise(function(ee,ge){G.onload=ee,G.onerror=ge}),G.addEventListener("load",function(){D.loading|=1}),G.addEventListener("error",function(){D.loading|=2}),D.loading|=4,nu(E,a,c)}E={type:"stylesheet",instance:E,count:1,state:D},g.set(v,E)}}}function lE(n,a){Ba.X(n,a);var l=zo;if(l&&n){var c=lt(l).hoistableScripts,g=Ho(n),v=c.get(g);v||(v=l.querySelector(os(g)),v||(n=H({src:n,async:!0},a),(a=kr.get(g))&&Sm(n,a),v=l.createElement("script"),Ae(v),Zn(v,"link",n),l.head.appendChild(v)),v={type:"script",instance:v,count:1,state:null},c.set(g,v))}}function sE(n,a){Ba.M(n,a);var l=zo;if(l&&n){var c=lt(l).hoistableScripts,g=Ho(n),v=c.get(g);v||(v=l.querySelector(os(g)),v||(n=H({src:n,async:!0,type:"module"},a),(a=kr.get(g))&&Sm(n,a),v=l.createElement("script"),Ae(v),Zn(v,"link",n),l.head.appendChild(v)),v={type:"script",instance:v,count:1,state:null},c.set(g,v))}}function py(n,a,l,c){var g=(g=Oe.current)?tu(g):null;if(!g)throw Error(i(446));switch(n){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(a=Lo(l.href),l=lt(g).hoistableStyles,c=l.get(a),c||(c={type:"style",instance:null,count:0,state:null},l.set(a,c)),c):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){n=Lo(l.href);var v=lt(g).hoistableStyles,E=v.get(n);if(E||(g=g.ownerDocument||g,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},v.set(n,E),(v=g.querySelector(is(n)))&&!v._p&&(E.instance=v,E.state.loading=5),kr.has(n)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},kr.set(n,l),v||cE(g,n,l,E.state))),a&&c===null)throw Error(i(528,""));return E}if(a&&c!==null)throw Error(i(529,""));return null;case"script":return a=l.async,l=l.src,typeof l=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=Ho(l),l=lt(g).hoistableScripts,c=l.get(a),c||(c={type:"script",instance:null,count:0,state:null},l.set(a,c)),c):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,n))}}function Lo(n){return'href="'+Dt(n)+'"'}function is(n){return'link[rel="stylesheet"]['+n+"]"}function yy(n){return H({},n,{"data-precedence":n.precedence,precedence:null})}function cE(n,a,l,c){n.querySelector('link[rel="preload"][as="style"]['+a+"]")?c.loading=1:(a=n.createElement("link"),c.preload=a,a.addEventListener("load",function(){return c.loading|=1}),a.addEventListener("error",function(){return c.loading|=2}),Zn(a,"link",l),Ae(a),n.head.appendChild(a))}function Ho(n){return'[src="'+Dt(n)+'"]'}function os(n){return"script[async]"+n}function by(n,a,l){if(a.count++,a.instance===null)switch(a.type){case"style":var c=n.querySelector('style[data-href~="'+Dt(l.href)+'"]');if(c)return a.instance=c,Ae(c),c;var g=H({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return c=(n.ownerDocument||n).createElement("style"),Ae(c),Zn(c,"style",g),nu(c,l.precedence,n),a.instance=c;case"stylesheet":g=Lo(l.href);var v=n.querySelector(is(g));if(v)return a.state.loading|=4,a.instance=v,Ae(v),v;c=yy(l),(g=kr.get(g))&&bm(c,g),v=(n.ownerDocument||n).createElement("link"),Ae(v);var E=v;return E._p=new Promise(function(D,G){E.onload=D,E.onerror=G}),Zn(v,"link",c),a.state.loading|=4,nu(v,l.precedence,n),a.instance=v;case"script":return v=Ho(l.src),(g=n.querySelector(os(v)))?(a.instance=g,Ae(g),g):(c=l,(g=kr.get(v))&&(c=H({},l),Sm(c,g)),n=n.ownerDocument||n,g=n.createElement("script"),Ae(g),Zn(g,"link",c),n.head.appendChild(g),a.instance=g);case"void":return null;default:throw Error(i(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(c=a.instance,a.state.loading|=4,nu(c,l.precedence,n));return a.instance}function nu(n,a,l){for(var c=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),g=c.length?c[c.length-1]:null,v=g,E=0;E<c.length;E++){var D=c[E];if(D.dataset.precedence===a)v=D;else if(v!==g)break}v?v.parentNode.insertBefore(n,v.nextSibling):(a=l.nodeType===9?l.head:l,a.insertBefore(n,a.firstChild))}function bm(n,a){n.crossOrigin==null&&(n.crossOrigin=a.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=a.referrerPolicy),n.title==null&&(n.title=a.title)}function Sm(n,a){n.crossOrigin==null&&(n.crossOrigin=a.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=a.referrerPolicy),n.integrity==null&&(n.integrity=a.integrity)}var ru=null;function Sy(n,a,l){if(ru===null){var c=new Map,g=ru=new Map;g.set(l,c)}else g=ru,c=g.get(l),c||(c=new Map,g.set(l,c));if(c.has(n))return c;for(c.set(n,null),l=l.getElementsByTagName(n),g=0;g<l.length;g++){var v=l[g];if(!(v[un]||v[Ct]||n==="link"&&v.getAttribute("rel")==="stylesheet")&&v.namespaceURI!=="http://www.w3.org/2000/svg"){var E=v.getAttribute(a)||"";E=n+E;var D=c.get(E);D?D.push(v):c.set(E,[v])}}return c}function Cy(n,a,l){n=n.ownerDocument||n,n.head.insertBefore(l,a==="title"?n.querySelector("head > title"):null)}function uE(n,a,l){if(l===1||a.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return n=a.disabled,typeof a.precedence=="string"&&n==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function wy(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}var ls=null;function dE(){}function fE(n,a,l){if(ls===null)throw Error(i(475));var c=ls;if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var g=Lo(l.href),v=n.querySelector(is(g));if(v){n=v._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(c.count++,c=au.bind(c),n.then(c,c)),a.state.loading|=4,a.instance=v,Ae(v);return}v=n.ownerDocument||n,l=yy(l),(g=kr.get(g))&&bm(l,g),v=v.createElement("link"),Ae(v);var E=v;E._p=new Promise(function(D,G){E.onload=D,E.onerror=G}),Zn(v,"link",l),a.instance=v}c.stylesheets===null&&(c.stylesheets=new Map),c.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(c.count++,a=au.bind(c),n.addEventListener("load",a),n.addEventListener("error",a))}}function mE(){if(ls===null)throw Error(i(475));var n=ls;return n.stylesheets&&n.count===0&&Cm(n,n.stylesheets),0<n.count?function(a){var l=setTimeout(function(){if(n.stylesheets&&Cm(n,n.stylesheets),n.unsuspend){var c=n.unsuspend;n.unsuspend=null,c()}},6e4);return n.unsuspend=a,function(){n.unsuspend=null,clearTimeout(l)}}:null}function au(){if(this.count--,this.count===0){if(this.stylesheets)Cm(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var iu=null;function Cm(n,a){n.stylesheets=null,n.unsuspend!==null&&(n.count++,iu=new Map,a.forEach(gE,n),iu=null,au.call(n))}function gE(n,a){if(!(a.state.loading&4)){var l=iu.get(n);if(l)var c=l.get(null);else{l=new Map,iu.set(n,l);for(var g=n.querySelectorAll("link[data-precedence],style[data-precedence]"),v=0;v<g.length;v++){var E=g[v];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(l.set(E.dataset.precedence,E),c=E)}c&&l.set(null,c)}g=a.instance,E=g.getAttribute("data-precedence"),v=l.get(E)||c,v===c&&l.set(null,g),l.set(E,g),this.count++,c=au.bind(this),g.addEventListener("load",c),g.addEventListener("error",c),v?v.parentNode.insertBefore(g,v.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(g,n.firstChild)),a.state.loading|=4}}var ss={$$typeof:w,Provider:null,Consumer:null,_currentValue:te,_currentValue2:te,_threadCount:0};function hE(n,a,l,c,g,v,E,D){this.tag=1,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ze(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ze(0),this.hiddenUpdates=ze(null),this.identifierPrefix=c,this.onUncaughtError=g,this.onCaughtError=v,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=D,this.incompleteTransitions=new Map}function xy(n,a,l,c,g,v,E,D,G,ee,ge,pe){return n=new hE(n,a,l,E,D,G,ee,pe),a=1,v===!0&&(a|=24),v=Ir(3,null,null,a),n.current=v,v.stateNode=n,a=Zd(),a.refCount++,n.pooledCache=a,a.refCount++,v.memoizedState={element:c,isDehydrated:l,cache:a},_f(v),n}function Ey(n){return n?(n=ho,n):ho}function $y(n,a,l,c,g,v){g=Ey(g),c.context===null?c.context=g:c.pendingContext=g,c=ri(a),c.payload={element:l},v=v===void 0?null:v,v!==null&&(c.callback=v),l=ai(n,c,a),l!==null&&(sr(l,n,a),Ul(l,n,a))}function Ry(n,a){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var l=n.retryLane;n.retryLane=l!==0&&l<a?l:a}}function wm(n,a){Ry(n,a),(n=n.alternate)&&Ry(n,a)}function Ty(n){if(n.tag===13){var a=Ya(n,67108864);a!==null&&sr(a,n,67108864),wm(n,67108864)}}var ou=!0;function vE(n,a,l,c){var g=N.T;N.T=null;var v=I.p;try{I.p=2,xm(n,a,l,c)}finally{I.p=v,N.T=g}}function pE(n,a,l,c){var g=N.T;N.T=null;var v=I.p;try{I.p=8,xm(n,a,l,c)}finally{I.p=v,N.T=g}}function xm(n,a,l,c){if(ou){var g=Em(c);if(g===null)dm(n,a,c,lu,l),My(n,c);else if(bE(g,n,a,l,c))c.stopPropagation();else if(My(n,c),a&4&&-1<yE.indexOf(n)){for(;g!==null;){var v=ut(g);if(v!==null)switch(v.tag){case 3:if(v=v.stateNode,v.current.memoizedState.isDehydrated){var E=Ft(v.pendingLanes);if(E!==0){var D=v;for(D.pendingLanes|=2,D.entangledLanes|=2;E;){var G=1<<31-nt(E);D.entanglements[1]|=G,E&=~G}ma(v),(on&6)===0&&(Gc=Re()+500,ns(0))}}break;case 13:D=Ya(v,2),D!==null&&sr(D,v,2),qc(),wm(v,2)}if(v=Em(c),v===null&&dm(n,a,c,lu,l),v===g)break;g=v}g!==null&&c.stopPropagation()}else dm(n,a,c,null,l)}}function Em(n){return n=sa(n),$m(n)}var lu=null;function $m(n){if(lu=null,n=En(n),n!==null){var a=F(n);if(a===null)n=null;else{var l=a.tag;if(l===13){if(n=Y(a),n!==null)return n;n=null}else if(l===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;n=null}else a!==n&&(n=null)}}return lu=n,null}function Oy(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ue()){case Ie:return 2;case at:return 8;case qe:case Ke:return 32;case Xe:return 268435456;default:return 32}default:return 32}}var Rm=!1,di=null,fi=null,mi=null,cs=new Map,us=new Map,gi=[],yE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function My(n,a){switch(n){case"focusin":case"focusout":di=null;break;case"dragenter":case"dragleave":fi=null;break;case"mouseover":case"mouseout":mi=null;break;case"pointerover":case"pointerout":cs.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":us.delete(a.pointerId)}}function ds(n,a,l,c,g,v){return n===null||n.nativeEvent!==v?(n={blockedOn:a,domEventName:l,eventSystemFlags:c,nativeEvent:v,targetContainers:[g]},a!==null&&(a=ut(a),a!==null&&Ty(a)),n):(n.eventSystemFlags|=c,a=n.targetContainers,g!==null&&a.indexOf(g)===-1&&a.push(g),n)}function bE(n,a,l,c,g){switch(a){case"focusin":return di=ds(di,n,a,l,c,g),!0;case"dragenter":return fi=ds(fi,n,a,l,c,g),!0;case"mouseover":return mi=ds(mi,n,a,l,c,g),!0;case"pointerover":var v=g.pointerId;return cs.set(v,ds(cs.get(v)||null,n,a,l,c,g)),!0;case"gotpointercapture":return v=g.pointerId,us.set(v,ds(us.get(v)||null,n,a,l,c,g)),!0}return!1}function Ay(n){var a=En(n.target);if(a!==null){var l=F(a);if(l!==null){if(a=l.tag,a===13){if(a=Y(l),a!==null){n.blockedOn=a,bt(n.priority,function(){if(l.tag===13){var c=wr(),g=Ya(l,c);g!==null&&sr(g,l,c),wm(l,c)}});return}}else if(a===3&&l.stateNode.current.memoizedState.isDehydrated){n.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}n.blockedOn=null}function su(n){if(n.blockedOn!==null)return!1;for(var a=n.targetContainers;0<a.length;){var l=Em(n.nativeEvent);if(l===null){l=n.nativeEvent;var c=new l.constructor(l.type,l);la=c,l.target.dispatchEvent(c),la=null}else return a=ut(l),a!==null&&Ty(a),n.blockedOn=l,!1;a.shift()}return!0}function Ny(n,a,l){su(n)&&l.delete(a)}function SE(){Rm=!1,di!==null&&su(di)&&(di=null),fi!==null&&su(fi)&&(fi=null),mi!==null&&su(mi)&&(mi=null),cs.forEach(Ny),us.forEach(Ny)}function cu(n,a){n.blockedOn===a&&(n.blockedOn=null,Rm||(Rm=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,SE)))}var uu=null;function Py(n){uu!==n&&(uu=n,e.unstable_scheduleCallback(e.unstable_NormalPriority,function(){uu===n&&(uu=null);for(var a=0;a<n.length;a+=3){var l=n[a],c=n[a+1],g=n[a+2];if(typeof c!="function"){if($m(c||l)===null)continue;break}var v=ut(l);v!==null&&(n.splice(a,3),a-=3,hf(v,{pending:!0,data:g,method:l.method,action:c},c,g))}}))}function fs(n){function a(G){return cu(G,n)}di!==null&&cu(di,n),fi!==null&&cu(fi,n),mi!==null&&cu(mi,n),cs.forEach(a),us.forEach(a);for(var l=0;l<gi.length;l++){var c=gi[l];c.blockedOn===n&&(c.blockedOn=null)}for(;0<gi.length&&(l=gi[0],l.blockedOn===null);)Ay(l),l.blockedOn===null&&gi.shift();if(l=(n.ownerDocument||n).$$reactFormReplay,l!=null)for(c=0;c<l.length;c+=3){var g=l[c],v=l[c+1],E=g[vt]||null;if(typeof v=="function")E||Py(l);else if(E){var D=null;if(v&&v.hasAttribute("formAction")){if(g=v,E=v[vt]||null)D=E.formAction;else if($m(g)!==null)continue}else D=E.action;typeof D=="function"?l[c+1]=D:(l.splice(c,3),c-=3),Py(l)}}}function Tm(n){this._internalRoot=n}du.prototype.render=Tm.prototype.render=function(n){var a=this._internalRoot;if(a===null)throw Error(i(409));var l=a.current,c=wr();$y(l,c,n,a,null,null)},du.prototype.unmount=Tm.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var a=n.containerInfo;n.tag===0&&Po(),$y(n.current,2,null,n,null,null),qc(),a[jt]=null}};function du(n){this._internalRoot=n}du.prototype.unstable_scheduleHydration=function(n){if(n){var a=ar();n={blockedOn:null,target:n,priority:a};for(var l=0;l<gi.length&&a!==0&&a<gi[l].priority;l++);gi.splice(l,0,n),l===0&&Ay(n)}};var _y=t.version;if(_y!=="19.0.0")throw Error(i(527,_y,"19.0.0"));I.findDOMNode=function(n){var a=n._reactInternals;if(a===void 0)throw typeof n.render=="function"?Error(i(188)):(n=Object.keys(n).join(","),Error(i(268,n)));return n=k(a),n=n!==null?K(n):null,n=n===null?null:n.stateNode,n};var CE={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:N,findFiberByHostInstance:En,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fu.isDisabled&&fu.supportsFiber)try{je=fu.inject(CE),Ee=fu}catch{}}return gs.createRoot=function(n,a){if(!o(n))throw Error(i(299));var l=!1,c="",g=Y0,v=X0,E=Z0,D=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(g=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(D=a.unstable_transitionCallbacks)),a=xy(n,1,!1,null,null,l,c,g,v,E,D,null),n[jt]=a.current,um(n.nodeType===8?n.parentNode:n),new Tm(a)},gs.hydrateRoot=function(n,a,l){if(!o(n))throw Error(i(299));var c=!1,g="",v=Y0,E=X0,D=Z0,G=null,ee=null;return l!=null&&(l.unstable_strictMode===!0&&(c=!0),l.identifierPrefix!==void 0&&(g=l.identifierPrefix),l.onUncaughtError!==void 0&&(v=l.onUncaughtError),l.onCaughtError!==void 0&&(E=l.onCaughtError),l.onRecoverableError!==void 0&&(D=l.onRecoverableError),l.unstable_transitionCallbacks!==void 0&&(G=l.unstable_transitionCallbacks),l.formState!==void 0&&(ee=l.formState)),a=xy(n,1,!0,a,l??null,c,g,v,E,D,G,ee),a.context=Ey(null),l=a.current,c=wr(),g=ri(c),g.callback=null,ai(l,g,c),a.current.lanes=c,ct(a,c),ma(a),n[jt]=a.current,um(n),new du(a)},gs.version="19.0.0",gs}var Vy;function PE(){if(Vy)return Am.exports;Vy=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),Am.exports=NE(),Am.exports}var _E=PE(),hs={},Gy;function DE(){if(Gy)return hs;Gy=1,Object.defineProperty(hs,"__esModule",{value:!0}),hs.parse=u,hs.serialize=h;const e=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,t=/^[\u0021-\u003A\u003C-\u007E]*$/,r=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,i=/^[\u0020-\u003A\u003D-\u007E]*$/,o=Object.prototype.toString,s=(()=>{const b=function(){};return b.prototype=Object.create(null),b})();function u(b,w){const C=new s,x=b.length;if(x<2)return C;const S=(w==null?void 0:w.decode)||p;let $=0;do{const R=b.indexOf("=",$);if(R===-1)break;const T=b.indexOf(";",$),z=T===-1?x:T;if(R>z){$=b.lastIndexOf(";",R-1)+1;continue}const O=d(b,$,R),A=m(b,R,O),P=b.slice(O,A);if(C[P]===void 0){let B=d(b,R+1,z),N=m(b,z,B);const H=S(b.slice(B,N));C[P]=H}$=z+1}while($<x);return C}function d(b,w,C){do{const x=b.charCodeAt(w);if(x!==32&&x!==9)return w}while(++w<C);return C}function m(b,w,C){for(;w>C;){const x=b.charCodeAt(--w);if(x!==32&&x!==9)return w+1}return C}function h(b,w,C){const x=(C==null?void 0:C.encode)||encodeURIComponent;if(!e.test(b))throw new TypeError(`argument name is invalid: ${b}`);const S=x(w);if(!t.test(S))throw new TypeError(`argument val is invalid: ${w}`);let $=b+"="+S;if(!C)return $;if(C.maxAge!==void 0){if(!Number.isInteger(C.maxAge))throw new TypeError(`option maxAge is invalid: ${C.maxAge}`);$+="; Max-Age="+C.maxAge}if(C.domain){if(!r.test(C.domain))throw new TypeError(`option domain is invalid: ${C.domain}`);$+="; Domain="+C.domain}if(C.path){if(!i.test(C.path))throw new TypeError(`option path is invalid: ${C.path}`);$+="; Path="+C.path}if(C.expires){if(!y(C.expires)||!Number.isFinite(C.expires.valueOf()))throw new TypeError(`option expires is invalid: ${C.expires}`);$+="; Expires="+C.expires.toUTCString()}if(C.httpOnly&&($+="; HttpOnly"),C.secure&&($+="; Secure"),C.partitioned&&($+="; Partitioned"),C.priority)switch(typeof C.priority=="string"?C.priority.toLowerCase():void 0){case"low":$+="; Priority=Low";break;case"medium":$+="; Priority=Medium";break;case"high":$+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${C.priority}`)}if(C.sameSite)switch(typeof C.sameSite=="string"?C.sameSite.toLowerCase():C.sameSite){case!0:case"strict":$+="; SameSite=Strict";break;case"lax":$+="; SameSite=Lax";break;case"none":$+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${C.sameSite}`)}return $}function p(b){if(b.indexOf("%")===-1)return b;try{return decodeURIComponent(b)}catch{return b}}function y(b){return o.call(b)==="[object Date]"}return hs}DE();/**
 * react-router v7.4.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Uy="popstate";function zE(e={}){function t(i,o){let{pathname:s,search:u,hash:d}=i.location;return pg("",{pathname:s,search:u,hash:d},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function r(i,o){return typeof o=="string"?o:_s(o)}return HE(t,r,null,e)}function ln(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function va(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function LE(){return Math.random().toString(36).substring(2,10)}function Wy(e,t){return{usr:e.state,key:e.key,idx:t}}function pg(e,t,r=null,i){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?fl(t):t,state:r,key:t&&t.key||i||LE()}}function _s({pathname:e="/",search:t="",hash:r=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function fl(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substring(r),e=e.substring(0,r));let i=e.indexOf("?");i>=0&&(t.search=e.substring(i),e=e.substring(0,i)),e&&(t.pathname=e)}return t}function HE(e,t,r,i={}){let{window:o=document.defaultView,v5Compat:s=!1}=i,u=o.history,d="POP",m=null,h=p();h==null&&(h=0,u.replaceState({...u.state,idx:h},""));function p(){return(u.state||{idx:null}).idx}function y(){d="POP";let S=p(),$=S==null?null:S-h;h=S,m&&m({action:d,location:x.location,delta:$})}function b(S,$){d="PUSH";let R=pg(x.location,S,$);h=p()+1;let T=Wy(R,h),z=x.createHref(R);try{u.pushState(T,"",z)}catch(O){if(O instanceof DOMException&&O.name==="DataCloneError")throw O;o.location.assign(z)}s&&m&&m({action:d,location:x.location,delta:1})}function w(S,$){d="REPLACE";let R=pg(x.location,S,$);h=p();let T=Wy(R,h),z=x.createHref(R);u.replaceState(T,"",z),s&&m&&m({action:d,location:x.location,delta:0})}function C(S){let $=o.location.origin!=="null"?o.location.origin:o.location.href,R=typeof S=="string"?S:_s(S);return R=R.replace(/ $/,"%20"),ln($,`No window.location.(origin|href) available to create URL for href: ${R}`),new URL(R,$)}let x={get action(){return d},get location(){return e(o,u)},listen(S){if(m)throw new Error("A history only accepts one active listener");return o.addEventListener(Uy,y),m=S,()=>{o.removeEventListener(Uy,y),m=null}},createHref(S){return t(o,S)},createURL:C,encodeLocation(S){let $=C(S);return{pathname:$.pathname,search:$.search,hash:$.hash}},push:b,replace:w,go(S){return u.go(S)}};return x}function dS(e,t,r="/"){return BE(e,t,r,!1)}function BE(e,t,r,i){let o=typeof t=="string"?fl(t):t,s=Va(o.pathname||"/",r);if(s==null)return null;let u=fS(e);IE(u);let d=null;for(let m=0;d==null&&m<u.length;++m){let h=YE(s);d=JE(u[m],h,i)}return d}function fS(e,t=[],r=[],i=""){let o=(s,u,d)=>{let m={relativePath:d===void 0?s.path||"":d,caseSensitive:s.caseSensitive===!0,childrenIndex:u,route:s};m.relativePath.startsWith("/")&&(ln(m.relativePath.startsWith(i),`Absolute route path "${m.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(i.length));let h=Ia([i,m.relativePath]),p=r.concat(m);s.children&&s.children.length>0&&(ln(s.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${h}".`),fS(s.children,t,p,h)),!(s.path==null&&!s.index)&&t.push({path:h,score:WE(h,s.index),routesMeta:p})};return e.forEach((s,u)=>{var d;if(s.path===""||!((d=s.path)!=null&&d.includes("?")))o(s,u);else for(let m of mS(s.path))o(s,u,m)}),t}function mS(e){let t=e.split("/");if(t.length===0)return[];let[r,...i]=t,o=r.endsWith("?"),s=r.replace(/\?$/,"");if(i.length===0)return o?[s,""]:[s];let u=mS(i.join("/")),d=[];return d.push(...u.map(m=>m===""?s:[s,m].join("/"))),o&&d.push(...u),d.map(m=>e.startsWith("/")&&m===""?"/":m)}function IE(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:qE(t.routesMeta.map(i=>i.childrenIndex),r.routesMeta.map(i=>i.childrenIndex)))}var jE=/^:[\w-]+$/,kE=3,FE=2,VE=1,GE=10,UE=-2,qy=e=>e==="*";function WE(e,t){let r=e.split("/"),i=r.length;return r.some(qy)&&(i+=UE),t&&(i+=FE),r.filter(o=>!qy(o)).reduce((o,s)=>o+(jE.test(s)?kE:s===""?VE:GE),i)}function qE(e,t){return e.length===t.length&&e.slice(0,-1).every((i,o)=>i===t[o])?e[e.length-1]-t[t.length-1]:0}function JE(e,t,r=!1){let{routesMeta:i}=e,o={},s="/",u=[];for(let d=0;d<i.length;++d){let m=i[d],h=d===i.length-1,p=s==="/"?t:t.slice(s.length)||"/",y=Fu({path:m.relativePath,caseSensitive:m.caseSensitive,end:h},p),b=m.route;if(!y&&h&&r&&!i[i.length-1].route.index&&(y=Fu({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},p)),!y)return null;Object.assign(o,y.params),u.push({params:o,pathname:Ia([s,y.pathname]),pathnameBase:e6(Ia([s,y.pathnameBase])),route:b}),y.pathnameBase!=="/"&&(s=Ia([s,y.pathnameBase]))}return u}function Fu(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,i]=KE(e.path,e.caseSensitive,e.end),o=t.match(r);if(!o)return null;let s=o[0],u=s.replace(/(.)\/+$/,"$1"),d=o.slice(1);return{params:i.reduce((h,{paramName:p,isOptional:y},b)=>{if(p==="*"){let C=d[b]||"";u=s.slice(0,s.length-C.length).replace(/(.)\/+$/,"$1")}const w=d[b];return y&&!w?h[p]=void 0:h[p]=(w||"").replace(/%2F/g,"/"),h},{}),pathname:s,pathnameBase:u,pattern:e}}function KE(e,t=!1,r=!0){va(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let i=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,d,m)=>(i.push({paramName:d,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(i.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),i]}function YE(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return va(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Va(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,i=e.charAt(r);return i&&i!=="/"?null:e.slice(r)||"/"}function XE(e,t="/"){let{pathname:r,search:i="",hash:o=""}=typeof e=="string"?fl(e):e;return{pathname:r?r.startsWith("/")?r:ZE(r,t):t,search:t6(i),hash:n6(o)}}function ZE(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?r.length>1&&r.pop():o!=="."&&r.push(o)}),r.length>1?r.join("/"):"/"}function Dm(e,t,r,i){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function QE(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function gS(e){let t=QE(e);return t.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase)}function hS(e,t,r,i=!1){let o;typeof e=="string"?o=fl(e):(o={...e},ln(!o.pathname||!o.pathname.includes("?"),Dm("?","pathname","search",o)),ln(!o.pathname||!o.pathname.includes("#"),Dm("#","pathname","hash",o)),ln(!o.search||!o.search.includes("#"),Dm("#","search","hash",o)));let s=e===""||o.pathname==="",u=s?"/":o.pathname,d;if(u==null)d=r;else{let y=t.length-1;if(!i&&u.startsWith("..")){let b=u.split("/");for(;b[0]==="..";)b.shift(),y-=1;o.pathname=b.join("/")}d=y>=0?t[y]:"/"}let m=XE(o,d),h=u&&u!=="/"&&u.endsWith("/"),p=(s||u===".")&&r.endsWith("/");return!m.pathname.endsWith("/")&&(h||p)&&(m.pathname+="/"),m}var Ia=e=>e.join("/").replace(/\/\/+/g,"/"),e6=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),t6=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,n6=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function r6(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var vS=["POST","PUT","PATCH","DELETE"];new Set(vS);var a6=["GET",...vS];new Set(a6);var ml=f.createContext(null);ml.displayName="DataRouter";var rd=f.createContext(null);rd.displayName="DataRouterState";var pS=f.createContext({isTransitioning:!1});pS.displayName="ViewTransition";var i6=f.createContext(new Map);i6.displayName="Fetchers";var o6=f.createContext(null);o6.displayName="Await";var ya=f.createContext(null);ya.displayName="Navigation";var Xs=f.createContext(null);Xs.displayName="Location";var Ga=f.createContext({outlet:null,matches:[],isDataRoute:!1});Ga.displayName="Route";var Dh=f.createContext(null);Dh.displayName="RouteError";function l6(e,{relative:t}={}){ln(Zs(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:i}=f.useContext(ya),{hash:o,pathname:s,search:u}=Qs(e,{relative:t}),d=s;return r!=="/"&&(d=s==="/"?r:Ia([r,s])),i.createHref({pathname:d,search:u,hash:o})}function Zs(){return f.useContext(Xs)!=null}function no(){return ln(Zs(),"useLocation() may be used only in the context of a <Router> component."),f.useContext(Xs).location}var yS="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function bS(e){f.useContext(ya).static||f.useLayoutEffect(e)}function s6(){let{isDataRoute:e}=f.useContext(Ga);return e?C6():c6()}function c6(){ln(Zs(),"useNavigate() may be used only in the context of a <Router> component.");let e=f.useContext(ml),{basename:t,navigator:r}=f.useContext(ya),{matches:i}=f.useContext(Ga),{pathname:o}=no(),s=JSON.stringify(gS(i)),u=f.useRef(!1);return bS(()=>{u.current=!0}),f.useCallback((m,h={})=>{if(va(u.current,yS),!u.current)return;if(typeof m=="number"){r.go(m);return}let p=hS(m,JSON.parse(s),o,h.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:Ia([t,p.pathname])),(h.replace?r.replace:r.push)(p,h.state,h)},[t,r,s,o,e])}f.createContext(null);function Qs(e,{relative:t}={}){let{matches:r}=f.useContext(Ga),{pathname:i}=no(),o=JSON.stringify(gS(r));return f.useMemo(()=>hS(e,JSON.parse(o),i,t==="path"),[e,o,i,t])}function u6(e,t){return SS(e,t)}function SS(e,t,r,i){var R;ln(Zs(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o,static:s}=f.useContext(ya),{matches:u}=f.useContext(Ga),d=u[u.length-1],m=d?d.params:{},h=d?d.pathname:"/",p=d?d.pathnameBase:"/",y=d&&d.route;{let T=y&&y.path||"";CS(h,!y||T.endsWith("*")||T.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${T}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${T}"> to <Route path="${T==="/"?"*":`${T}/*`}">.`)}let b=no(),w;if(t){let T=typeof t=="string"?fl(t):t;ln(p==="/"||((R=T.pathname)==null?void 0:R.startsWith(p)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${T.pathname}" was given in the \`location\` prop.`),w=T}else w=b;let C=w.pathname||"/",x=C;if(p!=="/"){let T=p.replace(/^\//,"").split("/");x="/"+C.replace(/^\//,"").split("/").slice(T.length).join("/")}let S=!s&&r&&r.matches&&r.matches.length>0?r.matches:dS(e,{pathname:x});va(y||S!=null,`No routes matched location "${w.pathname}${w.search}${w.hash}" `),va(S==null||S[S.length-1].route.element!==void 0||S[S.length-1].route.Component!==void 0||S[S.length-1].route.lazy!==void 0,`Matched leaf route at location "${w.pathname}${w.search}${w.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let $=h6(S&&S.map(T=>Object.assign({},T,{params:Object.assign({},m,T.params),pathname:Ia([p,o.encodeLocation?o.encodeLocation(T.pathname).pathname:T.pathname]),pathnameBase:T.pathnameBase==="/"?p:Ia([p,o.encodeLocation?o.encodeLocation(T.pathnameBase).pathname:T.pathnameBase])})),u,r,i);return t&&$?f.createElement(Xs.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...w},navigationType:"POP"}},$):$}function d6(){let e=S6(),t=r6(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,i="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:i},s={padding:"2px 4px",backgroundColor:i},u=null;return console.error("Error handled by React Router default ErrorBoundary:",e),u=f.createElement(f.Fragment,null,f.createElement("p",null,"💿 Hey developer 👋"),f.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",f.createElement("code",{style:s},"ErrorBoundary")," or"," ",f.createElement("code",{style:s},"errorElement")," prop on your route.")),f.createElement(f.Fragment,null,f.createElement("h2",null,"Unexpected Application Error!"),f.createElement("h3",{style:{fontStyle:"italic"}},t),r?f.createElement("pre",{style:o},r):null,u)}var f6=f.createElement(d6,null),m6=class extends f.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?f.createElement(Ga.Provider,{value:this.props.routeContext},f.createElement(Dh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function g6({routeContext:e,match:t,children:r}){let i=f.useContext(ml);return i&&i.static&&i.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=t.route.id),f.createElement(Ga.Provider,{value:e},r)}function h6(e,t=[],r=null,i=null){if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let o=e,s=r==null?void 0:r.errors;if(s!=null){let m=o.findIndex(h=>h.route.id&&(s==null?void 0:s[h.route.id])!==void 0);ln(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(s).join(",")}`),o=o.slice(0,Math.min(o.length,m+1))}let u=!1,d=-1;if(r)for(let m=0;m<o.length;m++){let h=o[m];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(d=m),h.route.id){let{loaderData:p,errors:y}=r,b=h.route.loader&&!p.hasOwnProperty(h.route.id)&&(!y||y[h.route.id]===void 0);if(h.route.lazy||b){u=!0,d>=0?o=o.slice(0,d+1):o=[o[0]];break}}}return o.reduceRight((m,h,p)=>{let y,b=!1,w=null,C=null;r&&(y=s&&h.route.id?s[h.route.id]:void 0,w=h.route.errorElement||f6,u&&(d<0&&p===0?(CS("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),b=!0,C=null):d===p&&(b=!0,C=h.route.hydrateFallbackElement||null)));let x=t.concat(o.slice(0,p+1)),S=()=>{let $;return y?$=w:b?$=C:h.route.Component?$=f.createElement(h.route.Component,null):h.route.element?$=h.route.element:$=m,f.createElement(g6,{match:h,routeContext:{outlet:m,matches:x,isDataRoute:r!=null},children:$})};return r&&(h.route.ErrorBoundary||h.route.errorElement||p===0)?f.createElement(m6,{location:r.location,revalidation:r.revalidation,component:w,error:y,children:S(),routeContext:{outlet:null,matches:x,isDataRoute:!0}}):S()},null)}function zh(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function v6(e){let t=f.useContext(ml);return ln(t,zh(e)),t}function p6(e){let t=f.useContext(rd);return ln(t,zh(e)),t}function y6(e){let t=f.useContext(Ga);return ln(t,zh(e)),t}function Lh(e){let t=y6(e),r=t.matches[t.matches.length-1];return ln(r.route.id,`${e} can only be used on routes that contain a unique "id"`),r.route.id}function b6(){return Lh("useRouteId")}function S6(){var i;let e=f.useContext(Dh),t=p6("useRouteError"),r=Lh("useRouteError");return e!==void 0?e:(i=t.errors)==null?void 0:i[r]}function C6(){let{router:e}=v6("useNavigate"),t=Lh("useNavigate"),r=f.useRef(!1);return bS(()=>{r.current=!0}),f.useCallback(async(o,s={})=>{va(r.current,yS),r.current&&(typeof o=="number"?e.navigate(o):await e.navigate(o,{fromRouteId:t,...s}))},[e,t])}var Jy={};function CS(e,t,r){!t&&!Jy[e]&&(Jy[e]=!0,va(!1,r))}f.memo(w6);function w6({routes:e,future:t,state:r}){return SS(e,void 0,r,t)}function Ou(e){ln(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function x6({basename:e="/",children:t=null,location:r,navigationType:i="POP",navigator:o,static:s=!1}){ln(!Zs(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let u=e.replace(/^\/*/,"/"),d=f.useMemo(()=>({basename:u,navigator:o,static:s,future:{}}),[u,o,s]);typeof r=="string"&&(r=fl(r));let{pathname:m="/",search:h="",hash:p="",state:y=null,key:b="default"}=r,w=f.useMemo(()=>{let C=Va(m,u);return C==null?null:{location:{pathname:C,search:h,hash:p,state:y,key:b},navigationType:i}},[u,m,h,p,y,b,i]);return va(w!=null,`<Router basename="${u}"> is not able to match the URL "${m}${h}${p}" because it does not start with the basename, so the <Router> won't render anything.`),w==null?null:f.createElement(ya.Provider,{value:d},f.createElement(Xs.Provider,{children:t,value:w}))}function E6({children:e,location:t}){return u6(yg(e),t)}function yg(e,t=[]){let r=[];return f.Children.forEach(e,(i,o)=>{if(!f.isValidElement(i))return;let s=[...t,o];if(i.type===f.Fragment){r.push.apply(r,yg(i.props.children,s));return}ln(i.type===Ou,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),ln(!i.props.index||!i.props.children,"An index route cannot have child routes.");let u={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(u.children=yg(i.props.children,s)),r.push(u)}),r}var Mu="get",Au="application/x-www-form-urlencoded";function ad(e){return e!=null&&typeof e.tagName=="string"}function $6(e){return ad(e)&&e.tagName.toLowerCase()==="button"}function R6(e){return ad(e)&&e.tagName.toLowerCase()==="form"}function T6(e){return ad(e)&&e.tagName.toLowerCase()==="input"}function O6(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function M6(e,t){return e.button===0&&(!t||t==="_self")&&!O6(e)}var mu=null;function A6(){if(mu===null)try{new FormData(document.createElement("form"),0),mu=!1}catch{mu=!0}return mu}var N6=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function zm(e){return e!=null&&!N6.has(e)?(va(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Au}"`),null):e}function P6(e,t){let r,i,o,s,u;if(R6(e)){let d=e.getAttribute("action");i=d?Va(d,t):null,r=e.getAttribute("method")||Mu,o=zm(e.getAttribute("enctype"))||Au,s=new FormData(e)}else if($6(e)||T6(e)&&(e.type==="submit"||e.type==="image")){let d=e.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=e.getAttribute("formaction")||d.getAttribute("action");if(i=m?Va(m,t):null,r=e.getAttribute("formmethod")||d.getAttribute("method")||Mu,o=zm(e.getAttribute("formenctype"))||zm(d.getAttribute("enctype"))||Au,s=new FormData(d,e),!A6()){let{name:h,type:p,value:y}=e;if(p==="image"){let b=h?`${h}.`:"";s.append(`${b}x`,"0"),s.append(`${b}y`,"0")}else h&&s.append(h,y)}}else{if(ad(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=Mu,i=null,o=Au,u=e}return s&&o==="text/plain"&&(u=s,s=void 0),{action:i,method:r.toLowerCase(),encType:o,formData:s,body:u}}function Hh(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}async function _6(e,t){if(e.id in t)return t[e.id];try{let r=await import(e.module);return t[e.id]=r,r}catch(r){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(r),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function D6(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function z6(e,t,r){let i=await Promise.all(e.map(async o=>{let s=t.routes[o.route.id];if(s){let u=await _6(s,r);return u.links?u.links():[]}return[]}));return I6(i.flat(1).filter(D6).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function Ky(e,t,r,i,o,s){let u=(m,h)=>r[h]?m.route.id!==r[h].route.id:!0,d=(m,h)=>{var p;return r[h].pathname!==m.pathname||((p=r[h].route.path)==null?void 0:p.endsWith("*"))&&r[h].params["*"]!==m.params["*"]};return s==="assets"?t.filter((m,h)=>u(m,h)||d(m,h)):s==="data"?t.filter((m,h)=>{var y;let p=i.routes[m.route.id];if(!p||!p.hasLoader)return!1;if(u(m,h)||d(m,h))return!0;if(m.route.shouldRevalidate){let b=m.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((y=r[0])==null?void 0:y.params)||{},nextUrl:new URL(e,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof b=="boolean")return b}return!0}):[]}function L6(e,t,{includeHydrateFallback:r}={}){return H6(e.map(i=>{let o=t.routes[i.route.id];if(!o)return[];let s=[o.module];return o.clientActionModule&&(s=s.concat(o.clientActionModule)),o.clientLoaderModule&&(s=s.concat(o.clientLoaderModule)),r&&o.hydrateFallbackModule&&(s=s.concat(o.hydrateFallbackModule)),o.imports&&(s=s.concat(o.imports)),s}).flat(1))}function H6(e){return[...new Set(e)]}function B6(e){let t={},r=Object.keys(e).sort();for(let i of r)t[i]=e[i];return t}function I6(e,t){let r=new Set;return new Set(t),e.reduce((i,o)=>{let s=JSON.stringify(B6(o));return r.has(s)||(r.add(s),i.push({key:s,link:o})),i},[])}function j6(e,t){let r=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return r.pathname==="/"?r.pathname="_root.data":t&&Va(r.pathname,t)==="/"?r.pathname=`${t.replace(/\/$/,"")}/_root.data`:r.pathname=`${r.pathname.replace(/\/$/,"")}.data`,r}function wS(){let e=f.useContext(ml);return Hh(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function k6(){let e=f.useContext(rd);return Hh(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var Bh=f.createContext(void 0);Bh.displayName="FrameworkContext";function xS(){let e=f.useContext(Bh);return Hh(e,"You must render this element inside a <HydratedRouter> element"),e}function F6(e,t){let r=f.useContext(Bh),[i,o]=f.useState(!1),[s,u]=f.useState(!1),{onFocus:d,onBlur:m,onMouseEnter:h,onMouseLeave:p,onTouchStart:y}=t,b=f.useRef(null);f.useEffect(()=>{if(e==="render"&&u(!0),e==="viewport"){let x=$=>{$.forEach(R=>{u(R.isIntersecting)})},S=new IntersectionObserver(x,{threshold:.5});return b.current&&S.observe(b.current),()=>{S.disconnect()}}},[e]),f.useEffect(()=>{if(i){let x=setTimeout(()=>{u(!0)},100);return()=>{clearTimeout(x)}}},[i]);let w=()=>{o(!0)},C=()=>{o(!1),u(!1)};return r?e!=="intent"?[s,b,{}]:[s,b,{onFocus:vs(d,w),onBlur:vs(m,C),onMouseEnter:vs(h,w),onMouseLeave:vs(p,C),onTouchStart:vs(y,w)}]:[!1,b,{}]}function vs(e,t){return r=>{e&&e(r),r.defaultPrevented||t(r)}}function V6({page:e,...t}){let{router:r}=wS(),i=f.useMemo(()=>dS(r.routes,e,r.basename),[r.routes,e,r.basename]);return i?f.createElement(U6,{page:e,matches:i,...t}):null}function G6(e){let{manifest:t,routeModules:r}=xS(),[i,o]=f.useState([]);return f.useEffect(()=>{let s=!1;return z6(e,t,r).then(u=>{s||o(u)}),()=>{s=!0}},[e,t,r]),i}function U6({page:e,matches:t,...r}){let i=no(),{manifest:o,routeModules:s}=xS(),{basename:u}=wS(),{loaderData:d,matches:m}=k6(),h=f.useMemo(()=>Ky(e,t,m,o,i,"data"),[e,t,m,o,i]),p=f.useMemo(()=>Ky(e,t,m,o,i,"assets"),[e,t,m,o,i]),y=f.useMemo(()=>{if(e===i.pathname+i.search+i.hash)return[];let C=new Set,x=!1;if(t.forEach($=>{var T;let R=o.routes[$.route.id];!R||!R.hasLoader||(!h.some(z=>z.route.id===$.route.id)&&$.route.id in d&&((T=s[$.route.id])!=null&&T.shouldRevalidate)||R.hasClientLoader?x=!0:C.add($.route.id))}),C.size===0)return[];let S=j6(e,u);return x&&C.size>0&&S.searchParams.set("_routes",t.filter($=>C.has($.route.id)).map($=>$.route.id).join(",")),[S.pathname+S.search]},[u,d,i,o,h,t,e,s]),b=f.useMemo(()=>L6(p,o),[p,o]),w=G6(p);return f.createElement(f.Fragment,null,y.map(C=>f.createElement("link",{key:C,rel:"prefetch",as:"fetch",href:C,...r})),b.map(C=>f.createElement("link",{key:C,rel:"modulepreload",href:C,...r})),w.map(({key:C,link:x})=>f.createElement("link",{key:C,...x})))}function W6(...e){return t=>{e.forEach(r=>{typeof r=="function"?r(t):r!=null&&(r.current=t)})}}var ES=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{ES&&(window.__reactRouterVersion="7.4.0")}catch{}function q6({basename:e,children:t,window:r}){let i=f.useRef();i.current==null&&(i.current=zE({window:r,v5Compat:!0}));let o=i.current,[s,u]=f.useState({action:o.action,location:o.location}),d=f.useCallback(m=>{f.startTransition(()=>u(m))},[u]);return f.useLayoutEffect(()=>o.listen(d),[o,d]),f.createElement(x6,{basename:e,children:t,location:s.location,navigationType:s.action,navigator:o})}var $S=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,RS=f.forwardRef(function({onClick:t,discover:r="render",prefetch:i="none",relative:o,reloadDocument:s,replace:u,state:d,target:m,to:h,preventScrollReset:p,viewTransition:y,...b},w){let{basename:C}=f.useContext(ya),x=typeof h=="string"&&$S.test(h),S,$=!1;if(typeof h=="string"&&x&&(S=h,ES))try{let N=new URL(window.location.href),H=h.startsWith("//")?new URL(N.protocol+h):new URL(h),j=Va(H.pathname,C);H.origin===N.origin&&j!=null?h=j+H.search+H.hash:$=!0}catch{va(!1,`<Link to="${h}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let R=l6(h,{relative:o}),[T,z,O]=F6(i,b),A=X6(h,{replace:u,state:d,target:m,preventScrollReset:p,relative:o,viewTransition:y});function P(N){t&&t(N),N.defaultPrevented||A(N)}let B=f.createElement("a",{...b,...O,href:S||R,onClick:$||s?t:P,ref:W6(w,z),target:m,"data-discover":!x&&r==="render"?"true":void 0});return T&&!x?f.createElement(f.Fragment,null,B,f.createElement(V6,{page:R})):B});RS.displayName="Link";var J6=f.forwardRef(function({"aria-current":t="page",caseSensitive:r=!1,className:i="",end:o=!1,style:s,to:u,viewTransition:d,children:m,...h},p){let y=Qs(u,{relative:h.relative}),b=no(),w=f.useContext(rd),{navigator:C,basename:x}=f.useContext(ya),S=w!=null&&n3(y)&&d===!0,$=C.encodeLocation?C.encodeLocation(y).pathname:y.pathname,R=b.pathname,T=w&&w.navigation&&w.navigation.location?w.navigation.location.pathname:null;r||(R=R.toLowerCase(),T=T?T.toLowerCase():null,$=$.toLowerCase()),T&&x&&(T=Va(T,x)||T);const z=$!=="/"&&$.endsWith("/")?$.length-1:$.length;let O=R===$||!o&&R.startsWith($)&&R.charAt(z)==="/",A=T!=null&&(T===$||!o&&T.startsWith($)&&T.charAt($.length)==="/"),P={isActive:O,isPending:A,isTransitioning:S},B=O?t:void 0,N;typeof i=="function"?N=i(P):N=[i,O?"active":null,A?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let H=typeof s=="function"?s(P):s;return f.createElement(RS,{...h,"aria-current":B,className:N,ref:p,style:H,to:u,viewTransition:d},typeof m=="function"?m(P):m)});J6.displayName="NavLink";var K6=f.forwardRef(({discover:e="render",fetcherKey:t,navigate:r,reloadDocument:i,replace:o,state:s,method:u=Mu,action:d,onSubmit:m,relative:h,preventScrollReset:p,viewTransition:y,...b},w)=>{let C=e3(),x=t3(d,{relative:h}),S=u.toLowerCase()==="get"?"get":"post",$=typeof d=="string"&&$S.test(d),R=T=>{if(m&&m(T),T.defaultPrevented)return;T.preventDefault();let z=T.nativeEvent.submitter,O=(z==null?void 0:z.getAttribute("formmethod"))||u;C(z||T.currentTarget,{fetcherKey:t,method:O,navigate:r,replace:o,state:s,relative:h,preventScrollReset:p,viewTransition:y})};return f.createElement("form",{ref:w,method:S,action:x,onSubmit:i?m:R,...b,"data-discover":!$&&e==="render"?"true":void 0})});K6.displayName="Form";function Y6(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function TS(e){let t=f.useContext(ml);return ln(t,Y6(e)),t}function X6(e,{target:t,replace:r,state:i,preventScrollReset:o,relative:s,viewTransition:u}={}){let d=s6(),m=no(),h=Qs(e,{relative:s});return f.useCallback(p=>{if(M6(p,t)){p.preventDefault();let y=r!==void 0?r:_s(m)===_s(h);d(e,{replace:y,state:i,preventScrollReset:o,relative:s,viewTransition:u})}},[m,d,h,r,i,t,e,o,s,u])}var Z6=0,Q6=()=>`__${String(++Z6)}__`;function e3(){let{router:e}=TS("useSubmit"),{basename:t}=f.useContext(ya),r=b6();return f.useCallback(async(i,o={})=>{let{action:s,method:u,encType:d,formData:m,body:h}=P6(i,t);if(o.navigate===!1){let p=o.fetcherKey||Q6();await e.fetch(p,r,o.action||s,{preventScrollReset:o.preventScrollReset,formData:m,body:h,formMethod:o.method||u,formEncType:o.encType||d,flushSync:o.flushSync})}else await e.navigate(o.action||s,{preventScrollReset:o.preventScrollReset,formData:m,body:h,formMethod:o.method||u,formEncType:o.encType||d,replace:o.replace,state:o.state,fromRouteId:r,flushSync:o.flushSync,viewTransition:o.viewTransition})},[e,t,r])}function t3(e,{relative:t}={}){let{basename:r}=f.useContext(ya),i=f.useContext(Ga);ln(i,"useFormAction must be used inside a RouteContext");let[o]=i.matches.slice(-1),s={...Qs(e||".",{relative:t})},u=no();if(e==null){s.search=u.search;let d=new URLSearchParams(s.search),m=d.getAll("index");if(m.some(p=>p==="")){d.delete("index"),m.filter(y=>y).forEach(y=>d.append("index",y));let p=d.toString();s.search=p?`?${p}`:""}}return(!e||e===".")&&o.route.index&&(s.search=s.search?s.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(s.pathname=s.pathname==="/"?r:Ia([r,s.pathname])),_s(s)}function n3(e,t={}){let r=f.useContext(pS);ln(r!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=TS("useViewTransitionState"),o=Qs(e,{relative:t.relative});if(!r.isTransitioning)return!1;let s=Va(r.currentLocation.pathname,i)||r.currentLocation.pathname,u=Va(r.nextLocation.pathname,i)||r.nextLocation.pathname;return Fu(o.pathname,u)!=null||Fu(o.pathname,s)!=null}new TextEncoder;var Lm={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Yy;function r3(){return Yy||(Yy=1,function(e){(function(){var t={}.hasOwnProperty;function r(){for(var s="",u=0;u<arguments.length;u++){var d=arguments[u];d&&(s=o(s,i(d)))}return s}function i(s){if(typeof s=="string"||typeof s=="number")return s;if(typeof s!="object")return"";if(Array.isArray(s))return r.apply(null,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var u="";for(var d in s)t.call(s,d)&&s[d]&&(u=o(u,d));return u}function o(s,u){return u?s?s+" "+u:s+u:s}e.exports?(r.default=r,e.exports=r):window.classNames=r})()}(Lm)),Lm.exports}var a3=r3();const ue=Ph(a3);function Me(){return Me=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)({}).hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},Me.apply(null,arguments)}function Ge(e){"@babel/helpers - typeof";return Ge=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ge(e)}var i3=Symbol.for("react.element"),o3=Symbol.for("react.transitional.element"),l3=Symbol.for("react.fragment");function OS(e){return e&&Ge(e)==="object"&&(e.$$typeof===i3||e.$$typeof===o3)&&e.type===l3}function Ci(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=[];return he.Children.forEach(e,function(i){i==null&&!t.keepEmpty||(Array.isArray(i)?r=r.concat(Ci(i)):OS(i)&&i.props?r=r.concat(Ci(i.props.children,t)):r.push(i))}),r}var bg={},s3=function(t){};function c3(e,t){}function u3(e,t){}function d3(){bg={}}function MS(e,t,r){!t&&!bg[r]&&(e(!1,r),bg[r]=!0)}function cr(e,t){MS(c3,e,t)}function f3(e,t){MS(u3,e,t)}cr.preMessage=s3;cr.resetWarned=d3;cr.noteOnce=f3;function m3(e,t){if(Ge(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var i=r.call(e,t);if(Ge(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function AS(e){var t=m3(e,"string");return Ge(t)=="symbol"?t:t+""}function J(e,t,r){return(t=AS(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Xy(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,i)}return r}function q(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Xy(Object(r),!0).forEach(function(i){J(e,i,r[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Xy(Object(r)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(r,i))})}return e}var ec=uS();const Ds=Ph(ec),g3=cS({__proto__:null,default:Ds},[ec]);function zs(e){return e instanceof HTMLElement||e instanceof SVGElement}function h3(e){return e&&Ge(e)==="object"&&zs(e.nativeElement)?e.nativeElement:zs(e)?e:null}function Nu(e){var t=h3(e);if(t)return t;if(e instanceof he.Component){var r;return(r=Ds.findDOMNode)===null||r===void 0?void 0:r.call(Ds,e)}return null}var Hm={exports:{}},Ht={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zy;function v3(){if(Zy)return Ht;Zy=1;var e=Symbol.for("react.element"),t=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.server_context"),m=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.suspense_list"),y=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),w=Symbol.for("react.offscreen"),C;C=Symbol.for("react.module.reference");function x(S){if(typeof S=="object"&&S!==null){var $=S.$$typeof;switch($){case e:switch(S=S.type,S){case r:case o:case i:case h:case p:return S;default:switch(S=S&&S.$$typeof,S){case d:case u:case m:case b:case y:case s:return S;default:return $}}case t:return $}}}return Ht.ContextConsumer=u,Ht.ContextProvider=s,Ht.Element=e,Ht.ForwardRef=m,Ht.Fragment=r,Ht.Lazy=b,Ht.Memo=y,Ht.Portal=t,Ht.Profiler=o,Ht.StrictMode=i,Ht.Suspense=h,Ht.SuspenseList=p,Ht.isAsyncMode=function(){return!1},Ht.isConcurrentMode=function(){return!1},Ht.isContextConsumer=function(S){return x(S)===u},Ht.isContextProvider=function(S){return x(S)===s},Ht.isElement=function(S){return typeof S=="object"&&S!==null&&S.$$typeof===e},Ht.isForwardRef=function(S){return x(S)===m},Ht.isFragment=function(S){return x(S)===r},Ht.isLazy=function(S){return x(S)===b},Ht.isMemo=function(S){return x(S)===y},Ht.isPortal=function(S){return x(S)===t},Ht.isProfiler=function(S){return x(S)===o},Ht.isStrictMode=function(S){return x(S)===i},Ht.isSuspense=function(S){return x(S)===h},Ht.isSuspenseList=function(S){return x(S)===p},Ht.isValidElementType=function(S){return typeof S=="string"||typeof S=="function"||S===r||S===o||S===i||S===h||S===p||S===w||typeof S=="object"&&S!==null&&(S.$$typeof===b||S.$$typeof===y||S.$$typeof===s||S.$$typeof===u||S.$$typeof===m||S.$$typeof===C||S.getModuleId!==void 0)},Ht.typeOf=x,Ht}var Qy;function p3(){return Qy||(Qy=1,Hm.exports=v3()),Hm.exports}var Bm=p3();function id(e,t,r){var i=f.useRef({});return(!("value"in i.current)||r(i.current.condition,t))&&(i.current.value=e(),i.current.condition=t),i.current.value}var y3=Number(f.version.split(".")[0]),Ih=function(t,r){typeof t=="function"?t(r):Ge(t)==="object"&&t&&"current"in t&&(t.current=r)},Ua=function(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];var o=r.filter(Boolean);return o.length<=1?o[0]:function(s){r.forEach(function(u){Ih(u,s)})}},ro=function(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return id(function(){return Ua.apply(void 0,r)},r,function(o,s){return o.length!==s.length||o.every(function(u,d){return u!==s[d]})})},ao=function(t){var r,i;if(!t)return!1;if(NS(t)&&y3>=19)return!0;var o=Bm.isMemo(t)?t.type.type:t.type;return!(typeof o=="function"&&!((r=o.prototype)!==null&&r!==void 0&&r.render)&&o.$$typeof!==Bm.ForwardRef||typeof t=="function"&&!((i=t.prototype)!==null&&i!==void 0&&i.render)&&t.$$typeof!==Bm.ForwardRef)};function NS(e){return f.isValidElement(e)&&!OS(e)}var gl=function(t){if(t&&NS(t)){var r=t;return r.props.propertyIsEnumerable("ref")?r.props.ref:r.ref}return null},Sg=f.createContext(null);function b3(e){var t=e.children,r=e.onBatchResize,i=f.useRef(0),o=f.useRef([]),s=f.useContext(Sg),u=f.useCallback(function(d,m,h){i.current+=1;var p=i.current;o.current.push({size:d,element:m,data:h}),Promise.resolve().then(function(){p===i.current&&(r==null||r(o.current),o.current=[])}),s==null||s(d,m,h)},[r,s]);return f.createElement(Sg.Provider,{value:u},t)}var PS=function(){if(typeof Map<"u")return Map;function e(t,r){var i=-1;return t.some(function(o,s){return o[0]===r?(i=s,!0):!1}),i}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(r){var i=e(this.__entries__,r),o=this.__entries__[i];return o&&o[1]},t.prototype.set=function(r,i){var o=e(this.__entries__,r);~o?this.__entries__[o][1]=i:this.__entries__.push([r,i])},t.prototype.delete=function(r){var i=this.__entries__,o=e(i,r);~o&&i.splice(o,1)},t.prototype.has=function(r){return!!~e(this.__entries__,r)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(r,i){i===void 0&&(i=null);for(var o=0,s=this.__entries__;o<s.length;o++){var u=s[o];r.call(i,u[1],u[0])}},t}()}(),Cg=typeof window<"u"&&typeof document<"u"&&window.document===document,Vu=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),S3=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(Vu):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)}}(),C3=2;function w3(e,t){var r=!1,i=!1,o=0;function s(){r&&(r=!1,e()),i&&d()}function u(){S3(s)}function d(){var m=Date.now();if(r){if(m-o<C3)return;i=!0}else r=!0,i=!1,setTimeout(u,t);o=m}return d}var x3=20,E3=["top","right","bottom","left","width","height","size","weight"],$3=typeof MutationObserver<"u",R3=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=w3(this.refresh.bind(this),x3)}return e.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},e.prototype.removeObserver=function(t){var r=this.observers_,i=r.indexOf(t);~i&&r.splice(i,1),!r.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){var t=this.updateObservers_();t&&this.refresh()},e.prototype.updateObservers_=function(){var t=this.observers_.filter(function(r){return r.gatherActive(),r.hasActive()});return t.forEach(function(r){return r.broadcastActive()}),t.length>0},e.prototype.connect_=function(){!Cg||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),$3?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){!Cg||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(t){var r=t.propertyName,i=r===void 0?"":r,o=E3.some(function(s){return!!~i.indexOf(s)});o&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),_S=function(e,t){for(var r=0,i=Object.keys(t);r<i.length;r++){var o=i[r];Object.defineProperty(e,o,{value:t[o],enumerable:!1,writable:!1,configurable:!0})}return e},rl=function(e){var t=e&&e.ownerDocument&&e.ownerDocument.defaultView;return t||Vu},DS=od(0,0,0,0);function Gu(e){return parseFloat(e)||0}function eb(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return t.reduce(function(i,o){var s=e["border-"+o+"-width"];return i+Gu(s)},0)}function T3(e){for(var t=["top","right","bottom","left"],r={},i=0,o=t;i<o.length;i++){var s=o[i],u=e["padding-"+s];r[s]=Gu(u)}return r}function O3(e){var t=e.getBBox();return od(0,0,t.width,t.height)}function M3(e){var t=e.clientWidth,r=e.clientHeight;if(!t&&!r)return DS;var i=rl(e).getComputedStyle(e),o=T3(i),s=o.left+o.right,u=o.top+o.bottom,d=Gu(i.width),m=Gu(i.height);if(i.boxSizing==="border-box"&&(Math.round(d+s)!==t&&(d-=eb(i,"left","right")+s),Math.round(m+u)!==r&&(m-=eb(i,"top","bottom")+u)),!N3(e)){var h=Math.round(d+s)-t,p=Math.round(m+u)-r;Math.abs(h)!==1&&(d-=h),Math.abs(p)!==1&&(m-=p)}return od(o.left,o.top,d,m)}var A3=function(){return typeof SVGGraphicsElement<"u"?function(e){return e instanceof rl(e).SVGGraphicsElement}:function(e){return e instanceof rl(e).SVGElement&&typeof e.getBBox=="function"}}();function N3(e){return e===rl(e).document.documentElement}function P3(e){return Cg?A3(e)?O3(e):M3(e):DS}function _3(e){var t=e.x,r=e.y,i=e.width,o=e.height,s=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,u=Object.create(s.prototype);return _S(u,{x:t,y:r,width:i,height:o,top:r,right:t+i,bottom:o+r,left:t}),u}function od(e,t,r,i){return{x:e,y:t,width:r,height:i}}var D3=function(){function e(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=od(0,0,0,0),this.target=t}return e.prototype.isActive=function(){var t=P3(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},e}(),z3=function(){function e(t,r){var i=_3(r);_S(this,{target:t,contentRect:i})}return e}(),L3=function(){function e(t,r,i){if(this.activeObservations_=[],this.observations_=new PS,typeof t!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=r,this.callbackCtx_=i}return e.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof rl(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var r=this.observations_;r.has(t)||(r.set(t,new D3(t)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof rl(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var r=this.observations_;r.has(t)&&(r.delete(t),r.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach(function(r){r.isActive()&&t.activeObservations_.push(r)})},e.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,r=this.activeObservations_.map(function(i){return new z3(i.target,i.broadcastRect())});this.callback_.call(t,r,t),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),zS=typeof WeakMap<"u"?new WeakMap:new PS,LS=function(){function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var r=R3.getInstance(),i=new L3(t,r,this);zS.set(this,i)}return e}();["observe","unobserve","disconnect"].forEach(function(e){LS.prototype[e]=function(){var t;return(t=zS.get(this))[e].apply(t,arguments)}});var H3=function(){return typeof Vu.ResizeObserver<"u"?Vu.ResizeObserver:LS}(),yi=new Map;function B3(e){e.forEach(function(t){var r,i=t.target;(r=yi.get(i))===null||r===void 0||r.forEach(function(o){return o(i)})})}var HS=new H3(B3);function I3(e,t){yi.has(e)||(yi.set(e,new Set),HS.observe(e)),yi.get(e).add(t)}function j3(e,t){yi.has(e)&&(yi.get(e).delete(t),yi.get(e).size||(HS.unobserve(e),yi.delete(e)))}function zn(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function tb(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,AS(i.key),i)}}function Ln(e,t,r){return t&&tb(e.prototype,t),r&&tb(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function Ls(e,t){return Ls=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Ls(e,t)}function Wa(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Ls(e,t)}function Hs(e){return Hs=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Hs(e)}function jh(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(jh=function(){return!!e})()}function mt(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function k3(e,t){if(t&&(Ge(t)=="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return mt(e)}function qa(e){var t=jh();return function(){var r,i=Hs(e);if(t){var o=Hs(this).constructor;r=Reflect.construct(i,arguments,o)}else r=i.apply(this,arguments);return k3(this,r)}}var F3=function(e){Wa(r,e);var t=qa(r);function r(){return zn(this,r),t.apply(this,arguments)}return Ln(r,[{key:"render",value:function(){return this.props.children}}]),r}(f.Component);function V3(e,t){var r=e.children,i=e.disabled,o=f.useRef(null),s=f.useRef(null),u=f.useContext(Sg),d=typeof r=="function",m=d?r(o):r,h=f.useRef({width:-1,height:-1,offsetWidth:-1,offsetHeight:-1}),p=!d&&f.isValidElement(m)&&ao(m),y=p?gl(m):null,b=ro(y,o),w=function(){var $;return Nu(o.current)||(o.current&&Ge(o.current)==="object"?Nu(($=o.current)===null||$===void 0?void 0:$.nativeElement):null)||Nu(s.current)};f.useImperativeHandle(t,function(){return w()});var C=f.useRef(e);C.current=e;var x=f.useCallback(function(S){var $=C.current,R=$.onResize,T=$.data,z=S.getBoundingClientRect(),O=z.width,A=z.height,P=S.offsetWidth,B=S.offsetHeight,N=Math.floor(O),H=Math.floor(A);if(h.current.width!==N||h.current.height!==H||h.current.offsetWidth!==P||h.current.offsetHeight!==B){var j={width:N,height:H,offsetWidth:P,offsetHeight:B};h.current=j;var W=P===Math.round(O)?O:P,V=B===Math.round(A)?A:B,U=q(q({},j),{},{offsetWidth:W,offsetHeight:V});u==null||u(U,S,T),R&&Promise.resolve().then(function(){R(U,S)})}},[]);return f.useEffect(function(){var S=w();return S&&!i&&I3(S,x),function(){return j3(S,x)}},[o.current,i]),f.createElement(F3,{ref:s},p?f.cloneElement(m,{ref:b}):m)}var G3=f.forwardRef(V3),U3="rc-observer-key";function W3(e,t){var r=e.children,i=typeof r=="function"?[r]:Ci(r);return i.map(function(o,s){var u=(o==null?void 0:o.key)||"".concat(U3,"-").concat(s);return f.createElement(G3,Me({},e,{key:u,ref:s===0?t:void 0}),o)})}var ja=f.forwardRef(W3);ja.Collection=b3;function wg(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,i=Array(t);r<t;r++)i[r]=e[r];return i}function q3(e){if(Array.isArray(e))return wg(e)}function BS(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function kh(e,t){if(e){if(typeof e=="string")return wg(e,t);var r={}.toString.call(e).slice(8,-1);return r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set"?Array.from(e):r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?wg(e,t):void 0}}function J3(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Le(e){return q3(e)||BS(e)||kh(e)||J3()}var IS=function(t){return+setTimeout(t,16)},jS=function(t){return clearTimeout(t)};typeof window<"u"&&"requestAnimationFrame"in window&&(IS=function(t){return window.requestAnimationFrame(t)},jS=function(t){return window.cancelAnimationFrame(t)});var nb=0,Fh=new Map;function kS(e){Fh.delete(e)}var Cn=function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;nb+=1;var i=nb;function o(s){if(s===0)kS(i),t();else{var u=IS(function(){o(s-1)});Fh.set(i,u)}}return o(r),i};Cn.cancel=function(e){var t=Fh.get(e);return kS(e),jS(t)};function FS(e){if(Array.isArray(e))return e}function K3(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var i,o,s,u,d=[],m=!0,h=!1;try{if(s=(r=r.call(e)).next,t===0){if(Object(r)!==r)return;m=!1}else for(;!(m=(i=s.call(r)).done)&&(d.push(i.value),d.length!==t);m=!0);}catch(p){h=!0,o=p}finally{try{if(!m&&r.return!=null&&(u=r.return(),Object(u)!==u))return}finally{if(h)throw o}}return d}}function VS(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function oe(e,t){return FS(e)||K3(e,t)||kh(e,t)||VS()}function Bs(e){for(var t=0,r,i=0,o=e.length;o>=4;++i,o-=4)r=e.charCodeAt(i)&255|(e.charCodeAt(++i)&255)<<8|(e.charCodeAt(++i)&255)<<16|(e.charCodeAt(++i)&255)<<24,r=(r&65535)*1540483477+((r>>>16)*59797<<16),r^=r>>>24,t=(r&65535)*1540483477+((r>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(o){case 3:t^=(e.charCodeAt(i+2)&255)<<16;case 2:t^=(e.charCodeAt(i+1)&255)<<8;case 1:t^=e.charCodeAt(i)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}function Mr(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function xg(e,t){if(!e)return!1;if(e.contains)return e.contains(t);for(var r=t;r;){if(r===e)return!0;r=r.parentNode}return!1}var rb="data-rc-order",ab="data-rc-priority",Y3="rc-util-key",Eg=new Map;function GS(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.mark;return t?t.startsWith("data-")?t:"data-".concat(t):Y3}function ld(e){if(e.attachTo)return e.attachTo;var t=document.querySelector("head");return t||document.body}function X3(e){return e==="queue"?"prependQueue":e?"prepend":"append"}function Vh(e){return Array.from((Eg.get(e)||e).children).filter(function(t){return t.tagName==="STYLE"})}function US(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!Mr())return null;var r=t.csp,i=t.prepend,o=t.priority,s=o===void 0?0:o,u=X3(i),d=u==="prependQueue",m=document.createElement("style");m.setAttribute(rb,u),d&&s&&m.setAttribute(ab,"".concat(s)),r!=null&&r.nonce&&(m.nonce=r==null?void 0:r.nonce),m.innerHTML=e;var h=ld(t),p=h.firstChild;if(i){if(d){var y=(t.styles||Vh(h)).filter(function(b){if(!["prepend","prependQueue"].includes(b.getAttribute(rb)))return!1;var w=Number(b.getAttribute(ab)||0);return s>=w});if(y.length)return h.insertBefore(m,y[y.length-1].nextSibling),m}h.insertBefore(m,p)}else h.appendChild(m);return m}function WS(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=ld(t);return(t.styles||Vh(r)).find(function(i){return i.getAttribute(GS(t))===e})}function Is(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=WS(e,t);if(r){var i=ld(t);i.removeChild(r)}}function Z3(e,t){var r=Eg.get(e);if(!r||!xg(document,r)){var i=US("",t),o=i.parentNode;Eg.set(e,o),e.removeChild(i)}}function ka(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=ld(r),o=Vh(i),s=q(q({},r),{},{styles:o});Z3(i,s);var u=WS(t,s);if(u){var d,m;if((d=s.csp)!==null&&d!==void 0&&d.nonce&&u.nonce!==((m=s.csp)===null||m===void 0?void 0:m.nonce)){var h;u.nonce=(h=s.csp)===null||h===void 0?void 0:h.nonce}return u.innerHTML!==e&&(u.innerHTML=e),u}var p=US(e,s);return p.setAttribute(GS(s),t),p}function Q3(e,t){if(e==null)return{};var r={};for(var i in e)if({}.hasOwnProperty.call(e,i)){if(t.indexOf(i)!==-1)continue;r[i]=e[i]}return r}function rt(e,t){if(e==null)return{};var r,i,o=Q3(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)r=s[i],t.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function al(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,i=new Set;function o(s,u){var d=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,m=i.has(s);if(cr(!m,"Warning: There may be circular references"),m)return!1;if(s===u)return!0;if(r&&d>1)return!1;i.add(s);var h=d+1;if(Array.isArray(s)){if(!Array.isArray(u)||s.length!==u.length)return!1;for(var p=0;p<s.length;p++)if(!o(s[p],u[p],h))return!1;return!0}if(s&&u&&Ge(s)==="object"&&Ge(u)==="object"){var y=Object.keys(s);return y.length!==Object.keys(u).length?!1:y.every(function(b){return o(s[b],u[b],h)})}return!1}return o(e,t)}var e$="%";function $g(e){return e.join(e$)}var t$=function(){function e(t){zn(this,e),J(this,"instanceId",void 0),J(this,"cache",new Map),this.instanceId=t}return Ln(e,[{key:"get",value:function(r){return this.opGet($g(r))}},{key:"opGet",value:function(r){return this.cache.get(r)||null}},{key:"update",value:function(r,i){return this.opUpdate($g(r),i)}},{key:"opUpdate",value:function(r,i){var o=this.cache.get(r),s=i(o);s===null?this.cache.delete(r):this.cache.set(r,s)}}]),e}(),il="data-token-hash",ea="data-css-hash",bi="__cssinjs_instance__";function n$(){var e=Math.random().toString(12).slice(2);if(typeof document<"u"&&document.head&&document.body){var t=document.body.querySelectorAll("style[".concat(ea,"]"))||[],r=document.head.firstChild;Array.from(t).forEach(function(o){o[bi]=o[bi]||e,o[bi]===e&&document.head.insertBefore(o,r)});var i={};Array.from(document.querySelectorAll("style[".concat(ea,"]"))).forEach(function(o){var s=o.getAttribute(ea);if(i[s]){if(o[bi]===e){var u;(u=o.parentNode)===null||u===void 0||u.removeChild(o)}}else i[s]=!0})}return new t$(e)}var tc=f.createContext({hashPriority:"low",cache:n$(),defaultCache:!0});function r$(e,t){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}var Gh=function(){function e(){zn(this,e),J(this,"cache",void 0),J(this,"keys",void 0),J(this,"cacheCallTimes",void 0),this.cache=new Map,this.keys=[],this.cacheCallTimes=0}return Ln(e,[{key:"size",value:function(){return this.keys.length}},{key:"internalGet",value:function(r){var i,o,s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,u={map:this.cache};return r.forEach(function(d){if(!u)u=void 0;else{var m;u=(m=u)===null||m===void 0||(m=m.map)===null||m===void 0?void 0:m.get(d)}}),(i=u)!==null&&i!==void 0&&i.value&&s&&(u.value[1]=this.cacheCallTimes++),(o=u)===null||o===void 0?void 0:o.value}},{key:"get",value:function(r){var i;return(i=this.internalGet(r,!0))===null||i===void 0?void 0:i[0]}},{key:"has",value:function(r){return!!this.internalGet(r)}},{key:"set",value:function(r,i){var o=this;if(!this.has(r)){if(this.size()+1>e.MAX_CACHE_SIZE+e.MAX_CACHE_OFFSET){var s=this.keys.reduce(function(h,p){var y=oe(h,2),b=y[1];return o.internalGet(p)[1]<b?[p,o.internalGet(p)[1]]:h},[this.keys[0],this.cacheCallTimes]),u=oe(s,1),d=u[0];this.delete(d)}this.keys.push(r)}var m=this.cache;r.forEach(function(h,p){if(p===r.length-1)m.set(h,{value:[i,o.cacheCallTimes++]});else{var y=m.get(h);y?y.map||(y.map=new Map):m.set(h,{map:new Map}),m=m.get(h).map}})}},{key:"deleteByPath",value:function(r,i){var o=r.get(i[0]);if(i.length===1){var s;return o.map?r.set(i[0],{map:o.map}):r.delete(i[0]),(s=o.value)===null||s===void 0?void 0:s[0]}var u=this.deleteByPath(o.map,i.slice(1));return(!o.map||o.map.size===0)&&!o.value&&r.delete(i[0]),u}},{key:"delete",value:function(r){if(this.has(r))return this.keys=this.keys.filter(function(i){return!r$(i,r)}),this.deleteByPath(this.cache,r)}}]),e}();J(Gh,"MAX_CACHE_SIZE",20);J(Gh,"MAX_CACHE_OFFSET",5);var ib=0,qS=function(){function e(t){zn(this,e),J(this,"derivatives",void 0),J(this,"id",void 0),this.derivatives=Array.isArray(t)?t:[t],this.id=ib,t.length===0&&(t.length>0,void 0),ib+=1}return Ln(e,[{key:"getDerivativeToken",value:function(r){return this.derivatives.reduce(function(i,o){return o(r,i)},void 0)}}]),e}(),Im=new Gh;function Rg(e){var t=Array.isArray(e)?e:[e];return Im.has(t)||Im.set(t,new qS(t)),Im.get(t)}var a$=new WeakMap,jm={};function i$(e,t){for(var r=a$,i=0;i<t.length;i+=1){var o=t[i];r.has(o)||r.set(o,new WeakMap),r=r.get(o)}return r.has(jm)||r.set(jm,e()),r.get(jm)}var ob=new WeakMap;function Os(e){var t=ob.get(e)||"";return t||(Object.keys(e).forEach(function(r){var i=e[r];t+=r,i instanceof qS?t+=i.id:i&&Ge(i)==="object"?t+=Os(i):t+=i}),t=Bs(t),ob.set(e,t)),t}function lb(e,t){return Bs("".concat(t,"_").concat(Os(e)))}var Tg=Mr();function le(e){return typeof e=="number"?"".concat(e,"px"):e}function Uu(e,t,r){var i,o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},s=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!1;if(s)return e;var u=q(q({},o),{},(i={},J(i,il,t),J(i,ea,r),i)),d=Object.keys(u).map(function(m){var h=u[m];return h?"".concat(m,'="').concat(h,'"'):null}).filter(function(m){return m}).join(" ");return"<style ".concat(d,">").concat(e,"</style>")}var Pu=function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return"--".concat(r?"".concat(r,"-"):"").concat(t).replace(/([a-z0-9])([A-Z])/g,"$1-$2").replace(/([A-Z]+)([A-Z][a-z0-9]+)/g,"$1-$2").replace(/([a-z])([A-Z0-9])/g,"$1-$2").toLowerCase()},o$=function(t,r,i){return Object.keys(t).length?".".concat(r).concat(i!=null&&i.scope?".".concat(i.scope):"","{").concat(Object.entries(t).map(function(o){var s=oe(o,2),u=s[0],d=s[1];return"".concat(u,":").concat(d,";")}).join(""),"}"):""},JS=function(t,r,i){var o={},s={};return Object.entries(t).forEach(function(u){var d,m,h=oe(u,2),p=h[0],y=h[1];if(i!=null&&(d=i.preserve)!==null&&d!==void 0&&d[p])s[p]=y;else if((typeof y=="string"||typeof y=="number")&&!(i!=null&&(m=i.ignore)!==null&&m!==void 0&&m[p])){var b,w=Pu(p,i==null?void 0:i.prefix);o[w]=typeof y=="number"&&!(i!=null&&(b=i.unitless)!==null&&b!==void 0&&b[p])?"".concat(y,"px"):String(y),s[p]="var(".concat(w,")")}}),[s,o$(o,r,{scope:i==null?void 0:i.scope})]},sb=Mr()?f.useLayoutEffect:f.useEffect,_n=function(t,r){var i=f.useRef(!0);sb(function(){return t(i.current)},r),sb(function(){return i.current=!1,function(){i.current=!0}},[])},Og=function(t,r){_n(function(i){if(!i)return t()},r)},l$=q({},nd),cb=l$.useInsertionEffect,s$=function(t,r,i){f.useMemo(t,i),_n(function(){return r(!0)},i)},c$=cb?function(e,t,r){return cb(function(){return e(),t()},r)}:s$,u$=q({},nd),d$=u$.useInsertionEffect,f$=function(t){var r=[],i=!1;function o(s){i||r.push(s)}return f.useEffect(function(){return i=!1,function(){i=!0,r.length&&r.forEach(function(s){return s()})}},t),o},m$=function(){return function(t){t()}},g$=typeof d$<"u"?f$:m$;function Uh(e,t,r,i,o){var s=f.useContext(tc),u=s.cache,d=[e].concat(Le(t)),m=$g(d),h=g$([m]),p=function(C){u.opUpdate(m,function(x){var S=x||[void 0,void 0],$=oe(S,2),R=$[0],T=R===void 0?0:R,z=$[1],O=z,A=O||r(),P=[T,A];return C?C(P):P})};f.useMemo(function(){p()},[m]);var y=u.opGet(m),b=y[1];return c$(function(){o==null||o(b)},function(w){return p(function(C){var x=oe(C,2),S=x[0],$=x[1];return w&&S===0&&(o==null||o(b)),[S+1,$]}),function(){u.opUpdate(m,function(C){var x=C||[],S=oe(x,2),$=S[0],R=$===void 0?0:$,T=S[1],z=R-1;return z===0?(h(function(){(w||!u.opGet(m))&&(i==null||i(T,!1))}),null):[R-1,T]})}},[m]),b}var h$={},v$="css",Ki=new Map;function p$(e){Ki.set(e,(Ki.get(e)||0)+1)}function y$(e,t){if(typeof document<"u"){var r=document.querySelectorAll("style[".concat(il,'="').concat(e,'"]'));r.forEach(function(i){if(i[bi]===t){var o;(o=i.parentNode)===null||o===void 0||o.removeChild(i)}})}}var b$=0;function S$(e,t){Ki.set(e,(Ki.get(e)||0)-1);var r=Array.from(Ki.keys()),i=r.filter(function(o){var s=Ki.get(o)||0;return s<=0});r.length-i.length>b$&&i.forEach(function(o){y$(o,t),Ki.delete(o)})}var C$=function(t,r,i,o){var s=i.getDerivativeToken(t),u=q(q({},s),r);return o&&(u=o(u)),u},KS="token";function w$(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=f.useContext(tc),o=i.cache.instanceId,s=i.container,u=r.salt,d=u===void 0?"":u,m=r.override,h=m===void 0?h$:m,p=r.formatToken,y=r.getComputedToken,b=r.cssVar,w=i$(function(){return Object.assign.apply(Object,[{}].concat(Le(t)))},t),C=Os(w),x=Os(h),S=b?Os(b):"",$=Uh(KS,[d,e.id,C,x,S],function(){var R,T=y?y(w,h,e):C$(w,h,e,p),z=q({},T),O="";if(b){var A=JS(T,b.key,{prefix:b.prefix,ignore:b.ignore,unitless:b.unitless,preserve:b.preserve}),P=oe(A,2);T=P[0],O=P[1]}var B=lb(T,d);T._tokenKey=B,z._tokenKey=lb(z,d);var N=(R=b==null?void 0:b.key)!==null&&R!==void 0?R:B;T._themeKey=N,p$(N);var H="".concat(v$,"-").concat(Bs(B));return T._hashId=H,[T,H,z,O,(b==null?void 0:b.key)||""]},function(R){S$(R[0]._themeKey,o)},function(R){var T=oe(R,4),z=T[0],O=T[3];if(b&&O){var A=ka(O,Bs("css-variables-".concat(z._themeKey)),{mark:ea,prepend:"queue",attachTo:s,priority:-999});A[bi]=o,A.setAttribute(il,z._themeKey)}});return $}var x$=function(t,r,i){var o=oe(t,5),s=o[2],u=o[3],d=o[4],m=i||{},h=m.plain;if(!u)return null;var p=s._tokenKey,y=-999,b={"data-rc-order":"prependQueue","data-rc-priority":"".concat(y)},w=Uu(u,d,p,b,h);return[y,p,w]},E$={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},YS="comm",XS="rule",ZS="decl",$$="@import",R$="@namespace",T$="@keyframes",O$="@layer",QS=Math.abs,Wh=String.fromCharCode;function eC(e){return e.trim()}function _u(e,t,r){return e.replace(t,r)}function M$(e,t,r){return e.indexOf(t,r)}function el(e,t){return e.charCodeAt(t)|0}function ol(e,t,r){return e.slice(t,r)}function ga(e){return e.length}function A$(e){return e.length}function gu(e,t){return t.push(e),e}var sd=1,ll=1,tC=0,Ur=0,An=0,hl="";function qh(e,t,r,i,o,s,u,d){return{value:e,root:t,parent:r,type:i,props:o,children:s,line:sd,column:ll,length:u,return:"",siblings:d}}function N$(){return An}function P$(){return An=Ur>0?el(hl,--Ur):0,ll--,An===10&&(ll=1,sd--),An}function ta(){return An=Ur<tC?el(hl,Ur++):0,ll++,An===10&&(ll=1,sd++),An}function Si(){return el(hl,Ur)}function Du(){return Ur}function cd(e,t){return ol(hl,e,t)}function js(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function _$(e){return sd=ll=1,tC=ga(hl=e),Ur=0,[]}function D$(e){return hl="",e}function km(e){return eC(cd(Ur-1,Mg(e===91?e+2:e===40?e+1:e)))}function z$(e){for(;(An=Si())&&An<33;)ta();return js(e)>2||js(An)>3?"":" "}function L$(e,t){for(;--t&&ta()&&!(An<48||An>102||An>57&&An<65||An>70&&An<97););return cd(e,Du()+(t<6&&Si()==32&&ta()==32))}function Mg(e){for(;ta();)switch(An){case e:return Ur;case 34:case 39:e!==34&&e!==39&&Mg(An);break;case 40:e===41&&Mg(e);break;case 92:ta();break}return Ur}function H$(e,t){for(;ta()&&e+An!==57;)if(e+An===84&&Si()===47)break;return"/*"+cd(t,Ur-1)+"*"+Wh(e===47?e:ta())}function B$(e){for(;!js(Si());)ta();return cd(e,Ur)}function I$(e){return D$(zu("",null,null,null,[""],e=_$(e),0,[0],e))}function zu(e,t,r,i,o,s,u,d,m){for(var h=0,p=0,y=u,b=0,w=0,C=0,x=1,S=1,$=1,R=0,T="",z=o,O=s,A=i,P=T;S;)switch(C=R,R=ta()){case 40:if(C!=108&&el(P,y-1)==58){M$(P+=_u(km(R),"&","&\f"),"&\f",QS(h?d[h-1]:0))!=-1&&($=-1);break}case 34:case 39:case 91:P+=km(R);break;case 9:case 10:case 13:case 32:P+=z$(C);break;case 92:P+=L$(Du()-1,7);continue;case 47:switch(Si()){case 42:case 47:gu(j$(H$(ta(),Du()),t,r,m),m),(js(C||1)==5||js(Si()||1)==5)&&ga(P)&&ol(P,-1,void 0)!==" "&&(P+=" ");break;default:P+="/"}break;case 123*x:d[h++]=ga(P)*$;case 125*x:case 59:case 0:switch(R){case 0:case 125:S=0;case 59+p:$==-1&&(P=_u(P,/\f/g,"")),w>0&&(ga(P)-y||x===0&&C===47)&&gu(w>32?db(P+";",i,r,y-1,m):db(_u(P," ","")+";",i,r,y-2,m),m);break;case 59:P+=";";default:if(gu(A=ub(P,t,r,h,p,o,d,T,z=[],O=[],y,s),s),R===123)if(p===0)zu(P,t,A,A,z,s,y,d,O);else{switch(b){case 99:if(el(P,3)===110)break;case 108:if(el(P,2)===97)break;default:p=0;case 100:case 109:case 115:}p?zu(e,A,A,i&&gu(ub(e,A,A,0,0,o,d,T,o,z=[],y,O),O),o,O,y,d,i?z:O):zu(P,A,A,A,[""],O,0,d,O)}}h=p=w=0,x=$=1,T=P="",y=u;break;case 58:y=1+ga(P),w=C;default:if(x<1){if(R==123)--x;else if(R==125&&x++==0&&P$()==125)continue}switch(P+=Wh(R),R*x){case 38:$=p>0?1:(P+="\f",-1);break;case 44:d[h++]=(ga(P)-1)*$,$=1;break;case 64:Si()===45&&(P+=km(ta())),b=Si(),p=y=ga(T=P+=B$(Du())),R++;break;case 45:C===45&&ga(P)==2&&(x=0)}}return s}function ub(e,t,r,i,o,s,u,d,m,h,p,y){for(var b=o-1,w=o===0?s:[""],C=A$(w),x=0,S=0,$=0;x<i;++x)for(var R=0,T=ol(e,b+1,b=QS(S=u[x])),z=e;R<C;++R)(z=eC(S>0?w[R]+" "+T:_u(T,/&\f/g,w[R])))&&(m[$++]=z);return qh(e,t,r,o===0?XS:d,m,h,p,y)}function j$(e,t,r,i){return qh(e,t,r,YS,Wh(N$()),ol(e,2,-2),0,i)}function db(e,t,r,i,o){return qh(e,t,r,ZS,ol(e,0,i),ol(e,i+1,-1),i,o)}function Ag(e,t){for(var r="",i=0;i<e.length;i++)r+=t(e[i],i,e,t)||"";return r}function k$(e,t,r,i){switch(e.type){case O$:if(e.children.length)break;case $$:case R$:case ZS:return e.return=e.return||e.value;case YS:return"";case T$:return e.return=e.value+"{"+Ag(e.children,i)+"}";case XS:if(!ga(e.value=e.props.join(",")))return""}return ga(r=Ag(e.children,i))?e.return=e.value+"{"+r+"}":""}var fb="data-ant-cssinjs-cache-path",nC="_FILE_STYLE__",Xi,rC=!0;function F$(){if(!Xi&&(Xi={},Mr())){var e=document.createElement("div");e.className=fb,e.style.position="fixed",e.style.visibility="hidden",e.style.top="-9999px",document.body.appendChild(e);var t=getComputedStyle(e).content||"";t=t.replace(/^"/,"").replace(/"$/,""),t.split(";").forEach(function(o){var s=o.split(":"),u=oe(s,2),d=u[0],m=u[1];Xi[d]=m});var r=document.querySelector("style[".concat(fb,"]"));if(r){var i;rC=!1,(i=r.parentNode)===null||i===void 0||i.removeChild(r)}document.body.removeChild(e)}}function V$(e){return F$(),!!Xi[e]}function G$(e){var t=Xi[e],r=null;if(t&&Mr())if(rC)r=nC;else{var i=document.querySelector("style[".concat(ea,'="').concat(Xi[e],'"]'));i?r=i.innerHTML:delete Xi[e]}return[r,t]}var U$="_skip_check_",aC="_multi_value_";function Lu(e){var t=Ag(I$(e),k$);return t.replace(/\{%%%\:[^;];}/g,";")}function W$(e){return Ge(e)==="object"&&e&&(U$ in e||aC in e)}function mb(e,t,r){if(!t)return e;var i=".".concat(t),o=r==="low"?":where(".concat(i,")"):i,s=e.split(",").map(function(u){var d,m=u.trim().split(/\s+/),h=m[0]||"",p=((d=h.match(/^\w+/))===null||d===void 0?void 0:d[0])||"";return h="".concat(p).concat(o).concat(h.slice(p.length)),[h].concat(Le(m.slice(1))).join(" ")});return s.join(",")}var q$=function e(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{root:!0,parentSelectors:[]},o=i.root,s=i.injectHash,u=i.parentSelectors,d=r.hashId,m=r.layer;r.path;var h=r.hashPriority,p=r.transformers,y=p===void 0?[]:p;r.linters;var b="",w={};function C($){var R=$.getName(d);if(!w[R]){var T=e($.style,r,{root:!1,parentSelectors:u}),z=oe(T,1),O=z[0];w[R]="@keyframes ".concat($.getName(d)).concat(O)}}function x($){var R=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return $.forEach(function(T){Array.isArray(T)?x(T,R):T&&R.push(T)}),R}var S=x(Array.isArray(t)?t:[t]);return S.forEach(function($){var R=typeof $=="string"&&!o?{}:$;if(typeof R=="string")b+="".concat(R,`
`);else if(R._keyframe)C(R);else{var T=y.reduce(function(z,O){var A;return(O==null||(A=O.visit)===null||A===void 0?void 0:A.call(O,z))||z},R);Object.keys(T).forEach(function(z){var O=T[z];if(Ge(O)==="object"&&O&&(z!=="animationName"||!O._keyframe)&&!W$(O)){var A=!1,P=z.trim(),B=!1;(o||s)&&d?P.startsWith("@")?A=!0:P==="&"?P=mb("",d,h):P=mb(z,d,h):o&&!d&&(P==="&"||P==="")&&(P="",B=!0);var N=e(O,r,{root:B,injectHash:A,parentSelectors:[].concat(Le(u),[P])}),H=oe(N,2),j=H[0],W=H[1];w=q(q({},w),W),b+="".concat(P).concat(j)}else{let Z=function(_,L){var F=_.replace(/[A-Z]/g,function(M){return"-".concat(M.toLowerCase())}),Y=L;!E$[_]&&typeof Y=="number"&&Y!==0&&(Y="".concat(Y,"px")),_==="animationName"&&L!==null&&L!==void 0&&L._keyframe&&(C(L),Y=L.getName(d)),b+="".concat(F,":").concat(Y,";")};var V,U=(V=O==null?void 0:O.value)!==null&&V!==void 0?V:O;Ge(O)==="object"&&O!==null&&O!==void 0&&O[aC]&&Array.isArray(U)?U.forEach(function(_){Z(z,_)}):Z(z,U)}})}}),o?m&&(b&&(b="@layer ".concat(m.name," {").concat(b,"}")),m.dependencies&&(w["@layer ".concat(m.name)]=m.dependencies.map(function($){return"@layer ".concat($,", ").concat(m.name,";")}).join(`
`))):b="{".concat(b,"}"),[b,w]};function iC(e,t){return Bs("".concat(e.join("%")).concat(t))}function J$(){return null}var oC="style";function Ng(e,t){var r=e.token,i=e.path,o=e.hashId,s=e.layer,u=e.nonce,d=e.clientOnly,m=e.order,h=m===void 0?0:m,p=f.useContext(tc),y=p.autoClear;p.mock;var b=p.defaultCache,w=p.hashPriority,C=p.container,x=p.ssrInline,S=p.transformers,$=p.linters,R=p.cache,T=p.layer,z=r._tokenKey,O=[z];T&&O.push("layer"),O.push.apply(O,Le(i));var A=Tg,P=Uh(oC,O,function(){var W=O.join("|");if(V$(W)){var V=G$(W),U=oe(V,2),Z=U[0],_=U[1];if(Z)return[Z,z,_,{},d,h]}var L=t(),F=q$(L,{hashId:o,hashPriority:w,layer:T?s:void 0,path:i.join("-"),transformers:S,linters:$}),Y=oe(F,2),M=Y[0],k=Y[1],K=Lu(M),X=iC(O,K);return[K,z,X,k,d,h]},function(W,V){var U=oe(W,3),Z=U[2];(V||y)&&Tg&&Is(Z,{mark:ea})},function(W){var V=oe(W,4),U=V[0];V[1];var Z=V[2],_=V[3];if(A&&U!==nC){var L={mark:ea,prepend:T?!1:"queue",attachTo:C,priority:h},F=typeof u=="function"?u():u;F&&(L.csp={nonce:F});var Y=[],M=[];Object.keys(_).forEach(function(K){K.startsWith("@layer")?Y.push(K):M.push(K)}),Y.forEach(function(K){ka(Lu(_[K]),"_layer-".concat(K),q(q({},L),{},{prepend:!0}))});var k=ka(U,Z,L);k[bi]=R.instanceId,k.setAttribute(il,z),M.forEach(function(K){ka(Lu(_[K]),"_effect-".concat(K),L)})}}),B=oe(P,3),N=B[0],H=B[1],j=B[2];return function(W){var V;if(!x||A||!b)V=f.createElement(J$,null);else{var U;V=f.createElement("style",Me({},(U={},J(U,il,H),J(U,ea,j),U),{dangerouslySetInnerHTML:{__html:N}}))}return f.createElement(f.Fragment,null,V,W)}}var K$=function(t,r,i){var o=oe(t,6),s=o[0],u=o[1],d=o[2],m=o[3],h=o[4],p=o[5],y=i||{},b=y.plain;if(h)return null;var w=s,C={"data-rc-order":"prependQueue","data-rc-priority":"".concat(p)};return w=Uu(s,u,d,C,b),m&&Object.keys(m).forEach(function(x){if(!r[x]){r[x]=!0;var S=Lu(m[x]),$=Uu(S,u,"_effect-".concat(x),C,b);x.startsWith("@layer")?w=$+w:w+=$}}),[p,d,w]},lC="cssVar",Y$=function(t,r){var i=t.key,o=t.prefix,s=t.unitless,u=t.ignore,d=t.token,m=t.scope,h=m===void 0?"":m,p=f.useContext(tc),y=p.cache.instanceId,b=p.container,w=d._tokenKey,C=[].concat(Le(t.path),[i,h,w]),x=Uh(lC,C,function(){var S=r(),$=JS(S,i,{prefix:o,unitless:s,ignore:u,scope:h}),R=oe($,2),T=R[0],z=R[1],O=iC(C,z);return[T,z,O,i]},function(S){var $=oe(S,3),R=$[2];Tg&&Is(R,{mark:ea})},function(S){var $=oe(S,3),R=$[1],T=$[2];if(R){var z=ka(R,T,{mark:ea,prepend:"queue",attachTo:b,priority:-999});z[bi]=y,z.setAttribute(il,i)}});return x},X$=function(t,r,i){var o=oe(t,4),s=o[1],u=o[2],d=o[3],m=i||{},h=m.plain;if(!s)return null;var p=-999,y={"data-rc-order":"prependQueue","data-rc-priority":"".concat(p)},b=Uu(s,d,u,y,h);return[p,u,b]},ps;ps={},J(ps,oC,K$),J(ps,KS,x$),J(ps,lC,X$);var cn=function(){function e(t,r){zn(this,e),J(this,"name",void 0),J(this,"style",void 0),J(this,"_keyframe",!0),this.name=t,this.style=r}return Ln(e,[{key:"getName",value:function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return r?"".concat(r,"-").concat(this.name):this.name}}]),e}();function Bo(e){return e.notSplit=!0,e}Bo(["borderTop","borderBottom"]),Bo(["borderTop"]),Bo(["borderBottom"]),Bo(["borderLeft","borderRight"]),Bo(["borderLeft"]),Bo(["borderRight"]);var Jh=f.createContext({});function Z$(e){return FS(e)||BS(e)||kh(e)||VS()}function ha(e,t){for(var r=e,i=0;i<t.length;i+=1){if(r==null)return;r=r[t[i]]}return r}function sC(e,t,r,i){if(!t.length)return r;var o=Z$(t),s=o[0],u=o.slice(1),d;return!e&&typeof s=="number"?d=[]:Array.isArray(e)?d=Le(e):d=q({},e),i&&r===void 0&&u.length===1?delete d[s][u[0]]:d[s]=sC(d[s],u,r,i),d}function Zr(e,t,r){var i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;return t.length&&i&&r===void 0&&!ha(e,t.slice(0,-1))?e:sC(e,t,r,i)}function Q$(e){return Ge(e)==="object"&&e!==null&&Object.getPrototypeOf(e)===Object.prototype}function gb(e){return Array.isArray(e)?[]:{}}var e8=typeof Reflect>"u"?Object.keys:Reflect.ownKeys;function Jo(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var i=gb(t[0]);return t.forEach(function(o){function s(u,d){var m=new Set(d),h=ha(o,u),p=Array.isArray(h);if(p||Q$(h)){if(!m.has(h)){m.add(h);var y=ha(i,u);p?i=Zr(i,u,[]):(!y||Ge(y)!=="object")&&(i=Zr(i,u,gb(h))),e8(h).forEach(function(b){s([].concat(Le(u),[b]),m)})}}else i=Zr(i,u,h)}s([])}),i}function t8(){}const n8=f.createContext({}),cC=()=>{const e=()=>{};return e.deprecated=t8,e},r8=f.createContext(void 0);var a8={items_per_page:"/ page",jump_to:"Go to",jump_to_confirm:"confirm",page:"Page",prev_page:"Previous Page",next_page:"Next Page",prev_5:"Previous 5 Pages",next_5:"Next 5 Pages",prev_3:"Previous 3 Pages",next_3:"Next 3 Pages",page_size:"Page Size"},i8={yearFormat:"YYYY",dayFormat:"D",cellMeridiemFormat:"A",monthBeforeYear:!0},o8=q(q({},i8),{},{locale:"en_US",today:"Today",now:"Now",backToToday:"Back to today",ok:"OK",clear:"Clear",week:"Week",month:"Month",year:"Year",timeSelect:"select time",dateSelect:"select date",weekSelect:"Choose a week",monthSelect:"Choose a month",yearSelect:"Choose a year",decadeSelect:"Choose a decade",dateFormat:"M/D/YYYY",dateTimeFormat:"M/D/YYYY HH:mm:ss",previousMonth:"Previous month (PageUp)",nextMonth:"Next month (PageDown)",previousYear:"Last year (Control + left)",nextYear:"Next year (Control + right)",previousDecade:"Last decade",nextDecade:"Next decade",previousCentury:"Last century",nextCentury:"Next century"});const uC={placeholder:"Select time",rangePlaceholder:["Start time","End time"]},hb={lang:Object.assign({placeholder:"Select date",yearPlaceholder:"Select year",quarterPlaceholder:"Select quarter",monthPlaceholder:"Select month",weekPlaceholder:"Select week",rangePlaceholder:["Start date","End date"],rangeYearPlaceholder:["Start year","End year"],rangeQuarterPlaceholder:["Start quarter","End quarter"],rangeMonthPlaceholder:["Start month","End month"],rangeWeekPlaceholder:["Start week","End week"]},o8),timePickerLocale:Object.assign({},uC)},Er="${label} is not a valid ${type}",sl={locale:"en",Pagination:a8,DatePicker:hb,TimePicker:uC,Calendar:hb,global:{placeholder:"Please select"},Table:{filterTitle:"Filter menu",filterConfirm:"OK",filterReset:"Reset",filterEmptyText:"No filters",filterCheckAll:"Select all items",filterSearchPlaceholder:"Search in filters",emptyText:"No data",selectAll:"Select current page",selectInvert:"Invert current page",selectNone:"Clear all data",selectionAll:"Select all data",sortTitle:"Sort",expand:"Expand row",collapse:"Collapse row",triggerDesc:"Click to sort descending",triggerAsc:"Click to sort ascending",cancelSort:"Click to cancel sorting"},Tour:{Next:"Next",Previous:"Previous",Finish:"Finish"},Modal:{okText:"OK",cancelText:"Cancel",justOkText:"OK"},Popconfirm:{okText:"OK",cancelText:"Cancel"},Transfer:{titles:["",""],searchPlaceholder:"Search here",itemUnit:"item",itemsUnit:"items",remove:"Remove",selectCurrent:"Select current page",removeCurrent:"Remove current page",selectAll:"Select all data",deselectAll:"Deselect all data",removeAll:"Remove all data",selectInvert:"Invert current page"},Upload:{uploading:"Uploading...",removeFile:"Remove file",uploadError:"Upload error",previewFile:"Preview file",downloadFile:"Download file"},Empty:{description:"No data"},Icon:{icon:"icon"},Text:{edit:"Edit",copy:"Copy",copied:"Copied",expand:"Expand",collapse:"Collapse"},Form:{optional:"(optional)",defaultValidateMessages:{default:"Field validation error for ${label}",required:"Please enter ${label}",enum:"${label} must be one of [${enum}]",whitespace:"${label} cannot be a blank character",date:{format:"${label} date format is invalid",parse:"${label} cannot be converted to a date",invalid:"${label} is an invalid date"},types:{string:Er,method:Er,array:Er,object:Er,number:Er,date:Er,boolean:Er,integer:Er,float:Er,regexp:Er,email:Er,url:Er,hex:Er},string:{len:"${label} must be ${len} characters",min:"${label} must be at least ${min} characters",max:"${label} must be up to ${max} characters",range:"${label} must be between ${min}-${max} characters"},number:{len:"${label} must be equal to ${len}",min:"${label} must be minimum ${min}",max:"${label} must be maximum ${max}",range:"${label} must be between ${min}-${max}"},array:{len:"Must be ${len} ${label}",min:"At least ${min} ${label}",max:"At most ${max} ${label}",range:"The amount of ${label} must be between ${min}-${max}"},pattern:{mismatch:"${label} does not match the pattern ${pattern}"}}},Image:{preview:"Preview"},QRCode:{expired:"QR code expired",refresh:"Refresh",scanned:"Scanned"},ColorPicker:{presetEmpty:"Empty",transparent:"Transparent",singleColor:"Single",gradientColor:"Gradient"}};Object.assign({},sl.Modal);let Hu=[];const vb=()=>Hu.reduce((e,t)=>Object.assign(Object.assign({},e),t),sl.Modal);function l8(e){if(e){const t=Object.assign({},e);return Hu.push(t),vb(),()=>{Hu=Hu.filter(r=>r!==t),vb()}}Object.assign({},sl.Modal)}const Kh=f.createContext(void 0),s8=(e,t)=>{const r=f.useContext(Kh),i=f.useMemo(()=>{var s;const u=sl[e],d=(s=r==null?void 0:r[e])!==null&&s!==void 0?s:{};return Object.assign(Object.assign({},typeof u=="function"?u():u),d||{})},[e,t,r]),o=f.useMemo(()=>{const s=r==null?void 0:r.locale;return r!=null&&r.exist&&!s?sl.locale:s},[r]);return[i,o]},c8="internalMark",u8=e=>{const{locale:t={},children:r,_ANT_MARK__:i}=e;f.useEffect(()=>l8(t==null?void 0:t.Modal),[t]);const o=f.useMemo(()=>Object.assign(Object.assign({},t),{exist:!0}),[t]);return f.createElement(Kh.Provider,{value:o},r)},dC={blue:"#1677FF",purple:"#722ED1",cyan:"#13C2C2",green:"#52C41A",magenta:"#EB2F96",pink:"#EB2F96",red:"#F5222D",orange:"#FA8C16",yellow:"#FADB14",volcano:"#FA541C",geekblue:"#2F54EB",gold:"#FAAD14",lime:"#A0D911"},ks=Object.assign(Object.assign({},dC),{colorPrimary:"#1677ff",colorSuccess:"#52c41a",colorWarning:"#faad14",colorError:"#ff4d4f",colorInfo:"#1677ff",colorLink:"",colorTextBase:"",colorBgBase:"",fontFamily:`-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,fontFamilyCode:"'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",fontSize:14,lineWidth:1,lineType:"solid",motionUnit:.1,motionBase:0,motionEaseOutCirc:"cubic-bezier(0.08, 0.82, 0.17, 1)",motionEaseInOutCirc:"cubic-bezier(0.78, 0.14, 0.15, 0.86)",motionEaseOut:"cubic-bezier(0.215, 0.61, 0.355, 1)",motionEaseInOut:"cubic-bezier(0.645, 0.045, 0.355, 1)",motionEaseOutBack:"cubic-bezier(0.12, 0.4, 0.29, 1.46)",motionEaseInBack:"cubic-bezier(0.71, -0.46, 0.88, 0.6)",motionEaseInQuint:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",motionEaseOutQuint:"cubic-bezier(0.23, 1, 0.32, 1)",borderRadius:6,sizeUnit:4,sizeStep:4,sizePopupArrow:16,controlHeight:32,zIndexBase:0,zIndexPopupBase:1e3,opacityImage:1,wireframe:!1,motion:!0}),Fn=Math.round;function Fm(e,t){const r=e.replace(/^[^(]*\((.*)/,"$1").replace(/\).*/,"").match(/\d*\.?\d+%?/g)||[],i=r.map(o=>parseFloat(o));for(let o=0;o<3;o+=1)i[o]=t(i[o]||0,r[o]||"",o);return r[3]?i[3]=r[3].includes("%")?i[3]/100:i[3]:i[3]=1,i}const pb=(e,t,r)=>r===0?e:e/100;function ys(e,t){const r=t||255;return e>r?r:e<0?0:e}let Bt=class fC{constructor(t){J(this,"isValid",!0),J(this,"r",0),J(this,"g",0),J(this,"b",0),J(this,"a",1),J(this,"_h",void 0),J(this,"_s",void 0),J(this,"_l",void 0),J(this,"_v",void 0),J(this,"_max",void 0),J(this,"_min",void 0),J(this,"_brightness",void 0);function r(o){return o[0]in t&&o[1]in t&&o[2]in t}if(t)if(typeof t=="string"){let s=function(u){return o.startsWith(u)};var i=s;const o=t.trim();/^#?[A-F\d]{3,8}$/i.test(o)?this.fromHexString(o):s("rgb")?this.fromRgbString(o):s("hsl")?this.fromHslString(o):(s("hsv")||s("hsb"))&&this.fromHsvString(o)}else if(t instanceof fC)this.r=t.r,this.g=t.g,this.b=t.b,this.a=t.a,this._h=t._h,this._s=t._s,this._l=t._l,this._v=t._v;else if(r("rgb"))this.r=ys(t.r),this.g=ys(t.g),this.b=ys(t.b),this.a=typeof t.a=="number"?ys(t.a,1):1;else if(r("hsl"))this.fromHsl(t);else if(r("hsv"))this.fromHsv(t);else throw new Error("@ant-design/fast-color: unsupported input "+JSON.stringify(t))}setR(t){return this._sc("r",t)}setG(t){return this._sc("g",t)}setB(t){return this._sc("b",t)}setA(t){return this._sc("a",t,1)}setHue(t){const r=this.toHsv();return r.h=t,this._c(r)}getLuminance(){function t(s){const u=s/255;return u<=.03928?u/12.92:Math.pow((u+.055)/1.055,2.4)}const r=t(this.r),i=t(this.g),o=t(this.b);return .2126*r+.7152*i+.0722*o}getHue(){if(typeof this._h>"u"){const t=this.getMax()-this.getMin();t===0?this._h=0:this._h=Fn(60*(this.r===this.getMax()?(this.g-this.b)/t+(this.g<this.b?6:0):this.g===this.getMax()?(this.b-this.r)/t+2:(this.r-this.g)/t+4))}return this._h}getSaturation(){if(typeof this._s>"u"){const t=this.getMax()-this.getMin();t===0?this._s=0:this._s=t/this.getMax()}return this._s}getLightness(){return typeof this._l>"u"&&(this._l=(this.getMax()+this.getMin())/510),this._l}getValue(){return typeof this._v>"u"&&(this._v=this.getMax()/255),this._v}getBrightness(){return typeof this._brightness>"u"&&(this._brightness=(this.r*299+this.g*587+this.b*114)/1e3),this._brightness}darken(t=10){const r=this.getHue(),i=this.getSaturation();let o=this.getLightness()-t/100;return o<0&&(o=0),this._c({h:r,s:i,l:o,a:this.a})}lighten(t=10){const r=this.getHue(),i=this.getSaturation();let o=this.getLightness()+t/100;return o>1&&(o=1),this._c({h:r,s:i,l:o,a:this.a})}mix(t,r=50){const i=this._c(t),o=r/100,s=d=>(i[d]-this[d])*o+this[d],u={r:Fn(s("r")),g:Fn(s("g")),b:Fn(s("b")),a:Fn(s("a")*100)/100};return this._c(u)}tint(t=10){return this.mix({r:255,g:255,b:255,a:1},t)}shade(t=10){return this.mix({r:0,g:0,b:0,a:1},t)}onBackground(t){const r=this._c(t),i=this.a+r.a*(1-this.a),o=s=>Fn((this[s]*this.a+r[s]*r.a*(1-this.a))/i);return this._c({r:o("r"),g:o("g"),b:o("b"),a:i})}isDark(){return this.getBrightness()<128}isLight(){return this.getBrightness()>=128}equals(t){return this.r===t.r&&this.g===t.g&&this.b===t.b&&this.a===t.a}clone(){return this._c(this)}toHexString(){let t="#";const r=(this.r||0).toString(16);t+=r.length===2?r:"0"+r;const i=(this.g||0).toString(16);t+=i.length===2?i:"0"+i;const o=(this.b||0).toString(16);if(t+=o.length===2?o:"0"+o,typeof this.a=="number"&&this.a>=0&&this.a<1){const s=Fn(this.a*255).toString(16);t+=s.length===2?s:"0"+s}return t}toHsl(){return{h:this.getHue(),s:this.getSaturation(),l:this.getLightness(),a:this.a}}toHslString(){const t=this.getHue(),r=Fn(this.getSaturation()*100),i=Fn(this.getLightness()*100);return this.a!==1?`hsla(${t},${r}%,${i}%,${this.a})`:`hsl(${t},${r}%,${i}%)`}toHsv(){return{h:this.getHue(),s:this.getSaturation(),v:this.getValue(),a:this.a}}toRgb(){return{r:this.r,g:this.g,b:this.b,a:this.a}}toRgbString(){return this.a!==1?`rgba(${this.r},${this.g},${this.b},${this.a})`:`rgb(${this.r},${this.g},${this.b})`}toString(){return this.toRgbString()}_sc(t,r,i){const o=this.clone();return o[t]=ys(r,i),o}_c(t){return new this.constructor(t)}getMax(){return typeof this._max>"u"&&(this._max=Math.max(this.r,this.g,this.b)),this._max}getMin(){return typeof this._min>"u"&&(this._min=Math.min(this.r,this.g,this.b)),this._min}fromHexString(t){const r=t.replace("#","");function i(o,s){return parseInt(r[o]+r[s||o],16)}r.length<6?(this.r=i(0),this.g=i(1),this.b=i(2),this.a=r[3]?i(3)/255:1):(this.r=i(0,1),this.g=i(2,3),this.b=i(4,5),this.a=r[6]?i(6,7)/255:1)}fromHsl({h:t,s:r,l:i,a:o}){if(this._h=t%360,this._s=r,this._l=i,this.a=typeof o=="number"?o:1,r<=0){const b=Fn(i*255);this.r=b,this.g=b,this.b=b}let s=0,u=0,d=0;const m=t/60,h=(1-Math.abs(2*i-1))*r,p=h*(1-Math.abs(m%2-1));m>=0&&m<1?(s=h,u=p):m>=1&&m<2?(s=p,u=h):m>=2&&m<3?(u=h,d=p):m>=3&&m<4?(u=p,d=h):m>=4&&m<5?(s=p,d=h):m>=5&&m<6&&(s=h,d=p);const y=i-h/2;this.r=Fn((s+y)*255),this.g=Fn((u+y)*255),this.b=Fn((d+y)*255)}fromHsv({h:t,s:r,v:i,a:o}){this._h=t%360,this._s=r,this._v=i,this.a=typeof o=="number"?o:1;const s=Fn(i*255);if(this.r=s,this.g=s,this.b=s,r<=0)return;const u=t/60,d=Math.floor(u),m=u-d,h=Fn(i*(1-r)*255),p=Fn(i*(1-r*m)*255),y=Fn(i*(1-r*(1-m))*255);switch(d){case 0:this.g=y,this.b=h;break;case 1:this.r=p,this.b=h;break;case 2:this.r=h,this.b=y;break;case 3:this.r=h,this.g=p;break;case 4:this.r=y,this.g=h;break;case 5:default:this.g=h,this.b=p;break}}fromHsvString(t){const r=Fm(t,pb);this.fromHsv({h:r[0],s:r[1],v:r[2],a:r[3]})}fromHslString(t){const r=Fm(t,pb);this.fromHsl({h:r[0],s:r[1],l:r[2],a:r[3]})}fromRgbString(t){const r=Fm(t,(i,o)=>o.includes("%")?Fn(i/100*255):i);this.r=r[0],this.g=r[1],this.b=r[2],this.a=r[3]}};var hu=2,yb=.16,d8=.05,f8=.05,m8=.15,mC=5,gC=4,g8=[{index:7,amount:15},{index:6,amount:25},{index:5,amount:30},{index:5,amount:45},{index:5,amount:65},{index:5,amount:85},{index:4,amount:90},{index:3,amount:95},{index:2,amount:97},{index:1,amount:98}];function bb(e,t,r){var i;return Math.round(e.h)>=60&&Math.round(e.h)<=240?i=r?Math.round(e.h)-hu*t:Math.round(e.h)+hu*t:i=r?Math.round(e.h)+hu*t:Math.round(e.h)-hu*t,i<0?i+=360:i>=360&&(i-=360),i}function Sb(e,t,r){if(e.h===0&&e.s===0)return e.s;var i;return r?i=e.s-yb*t:t===gC?i=e.s+yb:i=e.s+d8*t,i>1&&(i=1),r&&t===mC&&i>.1&&(i=.1),i<.06&&(i=.06),Math.round(i*100)/100}function Cb(e,t,r){var i;return r?i=e.v+f8*t:i=e.v-m8*t,i=Math.max(0,Math.min(1,i)),Math.round(i*100)/100}function Fs(e){for(var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=[],i=new Bt(e),o=i.toHsv(),s=mC;s>0;s-=1){var u=new Bt({h:bb(o,s,!0),s:Sb(o,s,!0),v:Cb(o,s,!0)});r.push(u)}r.push(i);for(var d=1;d<=gC;d+=1){var m=new Bt({h:bb(o,d),s:Sb(o,d),v:Cb(o,d)});r.push(m)}return t.theme==="dark"?g8.map(function(h){var p=h.index,y=h.amount;return new Bt(t.backgroundColor||"#141414").mix(r[p],y).toHexString()}):r.map(function(h){return h.toHexString()})}var Vm={red:"#F5222D",volcano:"#FA541C",orange:"#FA8C16",gold:"#FAAD14",yellow:"#FADB14",lime:"#A0D911",green:"#52C41A",cyan:"#13C2C2",blue:"#1677FF",geekblue:"#2F54EB",purple:"#722ED1",magenta:"#EB2F96",grey:"#666666"},Pg=["#fff1f0","#ffccc7","#ffa39e","#ff7875","#ff4d4f","#f5222d","#cf1322","#a8071a","#820014","#5c0011"];Pg.primary=Pg[5];var _g=["#fff2e8","#ffd8bf","#ffbb96","#ff9c6e","#ff7a45","#fa541c","#d4380d","#ad2102","#871400","#610b00"];_g.primary=_g[5];var Dg=["#fff7e6","#ffe7ba","#ffd591","#ffc069","#ffa940","#fa8c16","#d46b08","#ad4e00","#873800","#612500"];Dg.primary=Dg[5];var zg=["#fffbe6","#fff1b8","#ffe58f","#ffd666","#ffc53d","#faad14","#d48806","#ad6800","#874d00","#613400"];zg.primary=zg[5];var Lg=["#feffe6","#ffffb8","#fffb8f","#fff566","#ffec3d","#fadb14","#d4b106","#ad8b00","#876800","#614700"];Lg.primary=Lg[5];var Hg=["#fcffe6","#f4ffb8","#eaff8f","#d3f261","#bae637","#a0d911","#7cb305","#5b8c00","#3f6600","#254000"];Hg.primary=Hg[5];var Bg=["#f6ffed","#d9f7be","#b7eb8f","#95de64","#73d13d","#52c41a","#389e0d","#237804","#135200","#092b00"];Bg.primary=Bg[5];var Ig=["#e6fffb","#b5f5ec","#87e8de","#5cdbd3","#36cfc9","#13c2c2","#08979c","#006d75","#00474f","#002329"];Ig.primary=Ig[5];var Wu=["#e6f4ff","#bae0ff","#91caff","#69b1ff","#4096ff","#1677ff","#0958d9","#003eb3","#002c8c","#001d66"];Wu.primary=Wu[5];var jg=["#f0f5ff","#d6e4ff","#adc6ff","#85a5ff","#597ef7","#2f54eb","#1d39c4","#10239e","#061178","#030852"];jg.primary=jg[5];var kg=["#f9f0ff","#efdbff","#d3adf7","#b37feb","#9254de","#722ed1","#531dab","#391085","#22075e","#120338"];kg.primary=kg[5];var Fg=["#fff0f6","#ffd6e7","#ffadd2","#ff85c0","#f759ab","#eb2f96","#c41d7f","#9e1068","#780650","#520339"];Fg.primary=Fg[5];var Vg=["#a6a6a6","#999999","#8c8c8c","#808080","#737373","#666666","#404040","#1a1a1a","#000000","#000000"];Vg.primary=Vg[5];var Gm={red:Pg,volcano:_g,orange:Dg,gold:zg,yellow:Lg,lime:Hg,green:Bg,cyan:Ig,blue:Wu,geekblue:jg,purple:kg,magenta:Fg,grey:Vg};function h8(e,t){let{generateColorPalettes:r,generateNeutralColorPalettes:i}=t;const{colorSuccess:o,colorWarning:s,colorError:u,colorInfo:d,colorPrimary:m,colorBgBase:h,colorTextBase:p}=e,y=r(m),b=r(o),w=r(s),C=r(u),x=r(d),S=i(h,p),$=e.colorLink||e.colorInfo,R=r($),T=new Bt(C[1]).mix(new Bt(C[3]),50).toHexString();return Object.assign(Object.assign({},S),{colorPrimaryBg:y[1],colorPrimaryBgHover:y[2],colorPrimaryBorder:y[3],colorPrimaryBorderHover:y[4],colorPrimaryHover:y[5],colorPrimary:y[6],colorPrimaryActive:y[7],colorPrimaryTextHover:y[8],colorPrimaryText:y[9],colorPrimaryTextActive:y[10],colorSuccessBg:b[1],colorSuccessBgHover:b[2],colorSuccessBorder:b[3],colorSuccessBorderHover:b[4],colorSuccessHover:b[4],colorSuccess:b[6],colorSuccessActive:b[7],colorSuccessTextHover:b[8],colorSuccessText:b[9],colorSuccessTextActive:b[10],colorErrorBg:C[1],colorErrorBgHover:C[2],colorErrorBgFilledHover:T,colorErrorBgActive:C[3],colorErrorBorder:C[3],colorErrorBorderHover:C[4],colorErrorHover:C[5],colorError:C[6],colorErrorActive:C[7],colorErrorTextHover:C[8],colorErrorText:C[9],colorErrorTextActive:C[10],colorWarningBg:w[1],colorWarningBgHover:w[2],colorWarningBorder:w[3],colorWarningBorderHover:w[4],colorWarningHover:w[4],colorWarning:w[6],colorWarningActive:w[7],colorWarningTextHover:w[8],colorWarningText:w[9],colorWarningTextActive:w[10],colorInfoBg:x[1],colorInfoBgHover:x[2],colorInfoBorder:x[3],colorInfoBorderHover:x[4],colorInfoHover:x[4],colorInfo:x[6],colorInfoActive:x[7],colorInfoTextHover:x[8],colorInfoText:x[9],colorInfoTextActive:x[10],colorLinkHover:R[4],colorLink:R[6],colorLinkActive:R[7],colorBgMask:new Bt("#000").setA(.45).toRgbString(),colorWhite:"#fff"})}const v8=e=>{let t=e,r=e,i=e,o=e;return e<6&&e>=5?t=e+1:e<16&&e>=6?t=e+2:e>=16&&(t=16),e<7&&e>=5?r=4:e<8&&e>=7?r=5:e<14&&e>=8?r=6:e<16&&e>=14?r=7:e>=16&&(r=8),e<6&&e>=2?i=1:e>=6&&(i=2),e>4&&e<8?o=4:e>=8&&(o=6),{borderRadius:e,borderRadiusXS:i,borderRadiusSM:r,borderRadiusLG:t,borderRadiusOuter:o}};function p8(e){const{motionUnit:t,motionBase:r,borderRadius:i,lineWidth:o}=e;return Object.assign({motionDurationFast:`${(r+t).toFixed(1)}s`,motionDurationMid:`${(r+t*2).toFixed(1)}s`,motionDurationSlow:`${(r+t*3).toFixed(1)}s`,lineWidthBold:o+1},v8(i))}const y8=e=>{const{controlHeight:t}=e;return{controlHeightSM:t*.75,controlHeightXS:t*.5,controlHeightLG:t*1.25}};function Bu(e){return(e+8)/e}function b8(e){const t=Array.from({length:10}).map((r,i)=>{const o=i-1,s=e*Math.pow(Math.E,o/5),u=i>1?Math.floor(s):Math.ceil(s);return Math.floor(u/2)*2});return t[1]=e,t.map(r=>({size:r,lineHeight:Bu(r)}))}const S8=e=>{const t=b8(e),r=t.map(p=>p.size),i=t.map(p=>p.lineHeight),o=r[1],s=r[0],u=r[2],d=i[1],m=i[0],h=i[2];return{fontSizeSM:s,fontSize:o,fontSizeLG:u,fontSizeXL:r[3],fontSizeHeading1:r[6],fontSizeHeading2:r[5],fontSizeHeading3:r[4],fontSizeHeading4:r[3],fontSizeHeading5:r[2],lineHeight:d,lineHeightLG:h,lineHeightSM:m,fontHeight:Math.round(d*o),fontHeightLG:Math.round(h*u),fontHeightSM:Math.round(m*s),lineHeightHeading1:i[6],lineHeightHeading2:i[5],lineHeightHeading3:i[4],lineHeightHeading4:i[3],lineHeightHeading5:i[2]}};function C8(e){const{sizeUnit:t,sizeStep:r}=e;return{sizeXXL:t*(r+8),sizeXL:t*(r+4),sizeLG:t*(r+2),sizeMD:t*(r+1),sizeMS:t*r,size:t*r,sizeSM:t*(r-1),sizeXS:t*(r-2),sizeXXS:t*(r-3)}}const Fr=(e,t)=>new Bt(e).setA(t).toRgbString(),bs=(e,t)=>new Bt(e).darken(t).toHexString(),w8=e=>{const t=Fs(e);return{1:t[0],2:t[1],3:t[2],4:t[3],5:t[4],6:t[5],7:t[6],8:t[4],9:t[5],10:t[6]}},x8=(e,t)=>{const r=e||"#fff",i=t||"#000";return{colorBgBase:r,colorTextBase:i,colorText:Fr(i,.88),colorTextSecondary:Fr(i,.65),colorTextTertiary:Fr(i,.45),colorTextQuaternary:Fr(i,.25),colorFill:Fr(i,.15),colorFillSecondary:Fr(i,.06),colorFillTertiary:Fr(i,.04),colorFillQuaternary:Fr(i,.02),colorBgSolid:Fr(i,1),colorBgSolidHover:Fr(i,.75),colorBgSolidActive:Fr(i,.95),colorBgLayout:bs(r,4),colorBgContainer:bs(r,0),colorBgElevated:bs(r,0),colorBgSpotlight:Fr(i,.85),colorBgBlur:"transparent",colorBorder:bs(r,15),colorBorderSecondary:bs(r,6)}};function E8(e){Vm.pink=Vm.magenta,Gm.pink=Gm.magenta;const t=Object.keys(dC).map(r=>{const i=e[r]===Vm[r]?Gm[r]:Fs(e[r]);return Array.from({length:10},()=>1).reduce((o,s,u)=>(o[`${r}-${u+1}`]=i[u],o[`${r}${u+1}`]=i[u],o),{})}).reduce((r,i)=>(r=Object.assign(Object.assign({},r),i),r),{});return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},e),t),h8(e,{generateColorPalettes:w8,generateNeutralColorPalettes:x8})),S8(e.fontSize)),C8(e)),y8(e)),p8(e))}const hC=Rg(E8),Gg={token:ks,override:{override:ks},hashed:!0},vC=he.createContext(Gg),Vs="ant",Yh="anticon",$8=["outlined","borderless","filled","underlined"],R8=(e,t)=>t||(e?`${Vs}-${e}`:Vs),At=f.createContext({getPrefixCls:R8,iconPrefixCls:Yh}),{Consumer:$P}=At,wb={};function io(e){const t=f.useContext(At),{getPrefixCls:r,direction:i,getPopupContainer:o}=t,s=t[e];return Object.assign(Object.assign({classNames:wb,styles:wb},s),{getPrefixCls:r,direction:i,getPopupContainer:o})}const T8=`-ant-${Date.now()}-${Math.random()}`;function O8(e,t){const r={},i=(u,d)=>{let m=u.clone();return m=(d==null?void 0:d(m))||m,m.toRgbString()},o=(u,d)=>{const m=new Bt(u),h=Fs(m.toRgbString());r[`${d}-color`]=i(m),r[`${d}-color-disabled`]=h[1],r[`${d}-color-hover`]=h[4],r[`${d}-color-active`]=h[6],r[`${d}-color-outline`]=m.clone().setA(.2).toRgbString(),r[`${d}-color-deprecated-bg`]=h[0],r[`${d}-color-deprecated-border`]=h[2]};if(t.primaryColor){o(t.primaryColor,"primary");const u=new Bt(t.primaryColor),d=Fs(u.toRgbString());d.forEach((h,p)=>{r[`primary-${p+1}`]=h}),r["primary-color-deprecated-l-35"]=i(u,h=>h.lighten(35)),r["primary-color-deprecated-l-20"]=i(u,h=>h.lighten(20)),r["primary-color-deprecated-t-20"]=i(u,h=>h.tint(20)),r["primary-color-deprecated-t-50"]=i(u,h=>h.tint(50)),r["primary-color-deprecated-f-12"]=i(u,h=>h.setA(h.a*.12));const m=new Bt(d[0]);r["primary-color-active-deprecated-f-30"]=i(m,h=>h.setA(h.a*.3)),r["primary-color-active-deprecated-d-02"]=i(m,h=>h.darken(2))}return t.successColor&&o(t.successColor,"success"),t.warningColor&&o(t.warningColor,"warning"),t.errorColor&&o(t.errorColor,"error"),t.infoColor&&o(t.infoColor,"info"),`
  :root {
    ${Object.keys(r).map(u=>`--${e}-${u}: ${r[u]};`).join(`
`)}
  }
  `.trim()}function M8(e,t){const r=O8(e,t);Mr()&&ka(r,`${T8}-dynamic-theme`)}const Zi=f.createContext(!1),A8=e=>{let{children:t,disabled:r}=e;const i=f.useContext(Zi);return f.createElement(Zi.Provider,{value:r??i},t)},cl=f.createContext(void 0),N8=e=>{let{children:t,size:r}=e;const i=f.useContext(cl);return f.createElement(cl.Provider,{value:r||i},t)};function P8(){const e=f.useContext(Zi),t=f.useContext(cl);return{componentDisabled:e,componentSize:t}}var pC=Ln(function e(){zn(this,e)}),yC="CALC_UNIT",_8=new RegExp(yC,"g");function Um(e){return typeof e=="number"?"".concat(e).concat(yC):e}var D8=function(e){Wa(r,e);var t=qa(r);function r(i,o){var s;zn(this,r),s=t.call(this),J(mt(s),"result",""),J(mt(s),"unitlessCssVar",void 0),J(mt(s),"lowPriority",void 0);var u=Ge(i);return s.unitlessCssVar=o,i instanceof r?s.result="(".concat(i.result,")"):u==="number"?s.result=Um(i):u==="string"&&(s.result=i),s}return Ln(r,[{key:"add",value:function(o){return o instanceof r?this.result="".concat(this.result," + ").concat(o.getResult()):(typeof o=="number"||typeof o=="string")&&(this.result="".concat(this.result," + ").concat(Um(o))),this.lowPriority=!0,this}},{key:"sub",value:function(o){return o instanceof r?this.result="".concat(this.result," - ").concat(o.getResult()):(typeof o=="number"||typeof o=="string")&&(this.result="".concat(this.result," - ").concat(Um(o))),this.lowPriority=!0,this}},{key:"mul",value:function(o){return this.lowPriority&&(this.result="(".concat(this.result,")")),o instanceof r?this.result="".concat(this.result," * ").concat(o.getResult(!0)):(typeof o=="number"||typeof o=="string")&&(this.result="".concat(this.result," * ").concat(o)),this.lowPriority=!1,this}},{key:"div",value:function(o){return this.lowPriority&&(this.result="(".concat(this.result,")")),o instanceof r?this.result="".concat(this.result," / ").concat(o.getResult(!0)):(typeof o=="number"||typeof o=="string")&&(this.result="".concat(this.result," / ").concat(o)),this.lowPriority=!1,this}},{key:"getResult",value:function(o){return this.lowPriority||o?"(".concat(this.result,")"):this.result}},{key:"equal",value:function(o){var s=this,u=o||{},d=u.unit,m=!0;return typeof d=="boolean"?m=d:Array.from(this.unitlessCssVar).some(function(h){return s.result.includes(h)})&&(m=!1),this.result=this.result.replace(_8,m?"px":""),typeof this.lowPriority<"u"?"calc(".concat(this.result,")"):this.result}}]),r}(pC),z8=function(e){Wa(r,e);var t=qa(r);function r(i){var o;return zn(this,r),o=t.call(this),J(mt(o),"result",0),i instanceof r?o.result=i.result:typeof i=="number"&&(o.result=i),o}return Ln(r,[{key:"add",value:function(o){return o instanceof r?this.result+=o.result:typeof o=="number"&&(this.result+=o),this}},{key:"sub",value:function(o){return o instanceof r?this.result-=o.result:typeof o=="number"&&(this.result-=o),this}},{key:"mul",value:function(o){return o instanceof r?this.result*=o.result:typeof o=="number"&&(this.result*=o),this}},{key:"div",value:function(o){return o instanceof r?this.result/=o.result:typeof o=="number"&&(this.result/=o),this}},{key:"equal",value:function(){return this.result}}]),r}(pC),L8=function(t,r){var i=t==="css"?D8:z8;return function(o){return new i(o,r)}},xb=function(t,r){return"".concat([r,t.replace(/([A-Z]+)([A-Z][a-z]+)/g,"$1-$2").replace(/([a-z])([A-Z])/g,"$1-$2")].filter(Boolean).join("-"))};function Gn(e){var t=f.useRef();t.current=e;var r=f.useCallback(function(){for(var i,o=arguments.length,s=new Array(o),u=0;u<o;u++)s[u]=arguments[u];return(i=t.current)===null||i===void 0?void 0:i.call.apply(i,[t].concat(s))},[]);return r}function Gs(e){var t=f.useRef(!1),r=f.useState(e),i=oe(r,2),o=i[0],s=i[1];f.useEffect(function(){return t.current=!1,function(){t.current=!0}},[]);function u(d,m){m&&t.current||s(d)}return[o,u]}function Wm(e){return e!==void 0}function Or(e,t){var r=t||{},i=r.defaultValue,o=r.value,s=r.onChange,u=r.postState,d=Gs(function(){return Wm(o)?o:Wm(i)?typeof i=="function"?i():i:typeof e=="function"?e():e}),m=oe(d,2),h=m[0],p=m[1],y=o!==void 0?o:h,b=u?u(y):y,w=Gn(s),C=Gs([y]),x=oe(C,2),S=x[0],$=x[1];Og(function(){var T=S[0];h!==T&&w(h,T)},[S]),Og(function(){Wm(o)||p(o)},[o]);var R=Gn(function(T,z){p(T,z),$([y],z)});return[b,R]}function Eb(e,t,r,i){var o=q({},t[e]);if(i!=null&&i.deprecatedTokens){var s=i.deprecatedTokens;s.forEach(function(d){var m=oe(d,2),h=m[0],p=m[1];if(o!=null&&o[h]||o!=null&&o[p]){var y;(y=o[p])!==null&&y!==void 0||(o[p]=o==null?void 0:o[h])}})}var u=q(q({},r),o);return Object.keys(u).forEach(function(d){u[d]===t[d]&&delete u[d]}),u}var bC=typeof CSSINJS_STATISTIC<"u",Ug=!0;function sn(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];if(!bC)return Object.assign.apply(Object,[{}].concat(t));Ug=!1;var i={};return t.forEach(function(o){if(Ge(o)==="object"){var s=Object.keys(o);s.forEach(function(u){Object.defineProperty(i,u,{configurable:!0,enumerable:!0,get:function(){return o[u]}})})}}),Ug=!0,i}var $b={};function H8(){}var B8=function(t){var r,i=t,o=H8;return bC&&typeof Proxy<"u"&&(r=new Set,i=new Proxy(t,{get:function(u,d){if(Ug){var m;(m=r)===null||m===void 0||m.add(d)}return u[d]}}),o=function(u,d){var m;$b[u]={global:Array.from(r),component:q(q({},(m=$b[u])===null||m===void 0?void 0:m.component),d)}}),{token:i,keys:r,flush:o}};function Rb(e,t,r){if(typeof r=="function"){var i;return r(sn(t,(i=t[e])!==null&&i!==void 0?i:{}))}return r??{}}function I8(e){return e==="js"?{max:Math.max,min:Math.min}:{max:function(){for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return"max(".concat(i.map(function(s){return le(s)}).join(","),")")},min:function(){for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return"min(".concat(i.map(function(s){return le(s)}).join(","),")")}}}var j8=1e3*60*10,k8=function(){function e(){zn(this,e),J(this,"map",new Map),J(this,"objectIDMap",new WeakMap),J(this,"nextID",0),J(this,"lastAccessBeat",new Map),J(this,"accessBeat",0)}return Ln(e,[{key:"set",value:function(r,i){this.clear();var o=this.getCompositeKey(r);this.map.set(o,i),this.lastAccessBeat.set(o,Date.now())}},{key:"get",value:function(r){var i=this.getCompositeKey(r),o=this.map.get(i);return this.lastAccessBeat.set(i,Date.now()),this.accessBeat+=1,o}},{key:"getCompositeKey",value:function(r){var i=this,o=r.map(function(s){return s&&Ge(s)==="object"?"obj_".concat(i.getObjectID(s)):"".concat(Ge(s),"_").concat(s)});return o.join("|")}},{key:"getObjectID",value:function(r){if(this.objectIDMap.has(r))return this.objectIDMap.get(r);var i=this.nextID;return this.objectIDMap.set(r,i),this.nextID+=1,i}},{key:"clear",value:function(){var r=this;if(this.accessBeat>1e4){var i=Date.now();this.lastAccessBeat.forEach(function(o,s){i-o>j8&&(r.map.delete(s),r.lastAccessBeat.delete(s))}),this.accessBeat=0}}}]),e}(),Tb=new k8;function F8(e,t){return he.useMemo(function(){var r=Tb.get(t);if(r)return r;var i=e();return Tb.set(t,i),i},t)}var V8=function(){return{}};function G8(e){var t=e.useCSP,r=t===void 0?V8:t,i=e.useToken,o=e.usePrefix,s=e.getResetStyles,u=e.getCommonStyle,d=e.getCompUnitless;function m(b,w,C,x){var S=Array.isArray(b)?b[0]:b;function $(B){return"".concat(String(S)).concat(B.slice(0,1).toUpperCase()).concat(B.slice(1))}var R=(x==null?void 0:x.unitless)||{},T=typeof d=="function"?d(b):{},z=q(q({},T),{},J({},$("zIndexPopup"),!0));Object.keys(R).forEach(function(B){z[$(B)]=R[B]});var O=q(q({},x),{},{unitless:z,prefixToken:$}),A=p(b,w,C,O),P=h(S,C,O);return function(B){var N=arguments.length>1&&arguments[1]!==void 0?arguments[1]:B,H=A(B,N),j=oe(H,2),W=j[1],V=P(N),U=oe(V,2),Z=U[0],_=U[1];return[Z,W,_]}}function h(b,w,C){var x=C.unitless,S=C.injectStyle,$=S===void 0?!0:S,R=C.prefixToken,T=C.ignore,z=function(P){var B=P.rootCls,N=P.cssVar,H=N===void 0?{}:N,j=i(),W=j.realToken;return Y$({path:[b],prefix:H.prefix,key:H.key,unitless:x,ignore:T,token:W,scope:B},function(){var V=Rb(b,W,w),U=Eb(b,W,V,{deprecatedTokens:C==null?void 0:C.deprecatedTokens});return Object.keys(V).forEach(function(Z){U[R(Z)]=U[Z],delete U[Z]}),U}),null},O=function(P){var B=i(),N=B.cssVar;return[function(H){return $&&N?he.createElement(he.Fragment,null,he.createElement(z,{rootCls:P,cssVar:N,component:b}),H):H},N==null?void 0:N.key]};return O}function p(b,w,C){var x=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},S=Array.isArray(b)?b:[b,b],$=oe(S,1),R=$[0],T=S.join("-"),z=e.layer||{name:"antd"};return function(O){var A=arguments.length>1&&arguments[1]!==void 0?arguments[1]:O,P=i(),B=P.theme,N=P.realToken,H=P.hashId,j=P.token,W=P.cssVar,V=o(),U=V.rootPrefixCls,Z=V.iconPrefixCls,_=r(),L=W?"css":"js",F=F8(function(){var I=new Set;return W&&Object.keys(x.unitless||{}).forEach(function(te){I.add(Pu(te,W.prefix)),I.add(Pu(te,xb(R,W.prefix)))}),L8(L,I)},[L,R,W==null?void 0:W.prefix]),Y=I8(L),M=Y.max,k=Y.min,K={theme:B,token:j,hashId:H,nonce:function(){return _.nonce},clientOnly:x.clientOnly,layer:z,order:x.order||-999};typeof s=="function"&&Ng(q(q({},K),{},{clientOnly:!1,path:["Shared",U]}),function(){return s(j,{prefix:{rootPrefixCls:U,iconPrefixCls:Z},csp:_})});var X=Ng(q(q({},K),{},{path:[T,O,Z]}),function(){if(x.injectStyle===!1)return[];var I=B8(j),te=I.token,ne=I.flush,fe=Rb(R,N,C),ae=".".concat(O),ce=Eb(R,N,fe,{deprecatedTokens:x.deprecatedTokens});W&&fe&&Ge(fe)==="object"&&Object.keys(fe).forEach(function(Oe){fe[Oe]="var(".concat(Pu(Oe,xb(R,W.prefix)),")")});var de=sn(te,{componentCls:ae,prefixCls:O,iconCls:".".concat(Z),antCls:".".concat(U),calc:F,max:M,min:k},W?fe:ce),xe=w(de,{hashId:H,prefixCls:O,rootPrefixCls:U,iconPrefixCls:Z});ne(R,ce);var Se=typeof u=="function"?u(de,O,A,x.resetFont):null;return[x.resetStyle===!1?null:Se,xe]});return[X,H]}}function y(b,w,C){var x=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},S=p(b,w,C,q({resetStyle:!1,order:-998},x)),$=function(T){var z=T.prefixCls,O=T.rootCls,A=O===void 0?z:O;return S(z,A),null};return $}return{genStyleHooks:m,genSubStyleComponent:y,genComponentStyleHook:p}}const Qi=["blue","purple","cyan","green","magenta","pink","red","orange","yellow","volcano","geekblue","lime","gold"],U8="5.24.4";function qm(e){return e>=0&&e<=255}function $s(e,t){const{r,g:i,b:o,a:s}=new Bt(e).toRgb();if(s<1)return e;const{r:u,g:d,b:m}=new Bt(t).toRgb();for(let h=.01;h<=1;h+=.01){const p=Math.round((r-u*(1-h))/h),y=Math.round((i-d*(1-h))/h),b=Math.round((o-m*(1-h))/h);if(qm(p)&&qm(y)&&qm(b))return new Bt({r:p,g:y,b,a:Math.round(h*100)/100}).toRgbString()}return new Bt({r,g:i,b:o,a:1}).toRgbString()}var W8=function(e,t){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(r[i]=e[i]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(r[i[o]]=e[i[o]]);return r};function SC(e){const{override:t}=e,r=W8(e,["override"]),i=Object.assign({},t);Object.keys(ks).forEach(b=>{delete i[b]});const o=Object.assign(Object.assign({},r),i),s=480,u=576,d=768,m=992,h=1200,p=1600;if(o.motion===!1){const b="0s";o.motionDurationFast=b,o.motionDurationMid=b,o.motionDurationSlow=b}return Object.assign(Object.assign(Object.assign({},o),{colorFillContent:o.colorFillSecondary,colorFillContentHover:o.colorFill,colorFillAlter:o.colorFillQuaternary,colorBgContainerDisabled:o.colorFillTertiary,colorBorderBg:o.colorBgContainer,colorSplit:$s(o.colorBorderSecondary,o.colorBgContainer),colorTextPlaceholder:o.colorTextQuaternary,colorTextDisabled:o.colorTextQuaternary,colorTextHeading:o.colorText,colorTextLabel:o.colorTextSecondary,colorTextDescription:o.colorTextTertiary,colorTextLightSolid:o.colorWhite,colorHighlight:o.colorError,colorBgTextHover:o.colorFillSecondary,colorBgTextActive:o.colorFill,colorIcon:o.colorTextTertiary,colorIconHover:o.colorText,colorErrorOutline:$s(o.colorErrorBg,o.colorBgContainer),colorWarningOutline:$s(o.colorWarningBg,o.colorBgContainer),fontSizeIcon:o.fontSizeSM,lineWidthFocus:o.lineWidth*3,lineWidth:o.lineWidth,controlOutlineWidth:o.lineWidth*2,controlInteractiveSize:o.controlHeight/2,controlItemBgHover:o.colorFillTertiary,controlItemBgActive:o.colorPrimaryBg,controlItemBgActiveHover:o.colorPrimaryBgHover,controlItemBgActiveDisabled:o.colorFill,controlTmpOutline:o.colorFillQuaternary,controlOutline:$s(o.colorPrimaryBg,o.colorBgContainer),lineType:o.lineType,borderRadius:o.borderRadius,borderRadiusXS:o.borderRadiusXS,borderRadiusSM:o.borderRadiusSM,borderRadiusLG:o.borderRadiusLG,fontWeightStrong:600,opacityLoading:.65,linkDecoration:"none",linkHoverDecoration:"none",linkFocusDecoration:"none",controlPaddingHorizontal:12,controlPaddingHorizontalSM:8,paddingXXS:o.sizeXXS,paddingXS:o.sizeXS,paddingSM:o.sizeSM,padding:o.size,paddingMD:o.sizeMD,paddingLG:o.sizeLG,paddingXL:o.sizeXL,paddingContentHorizontalLG:o.sizeLG,paddingContentVerticalLG:o.sizeMS,paddingContentHorizontal:o.sizeMS,paddingContentVertical:o.sizeSM,paddingContentHorizontalSM:o.size,paddingContentVerticalSM:o.sizeXS,marginXXS:o.sizeXXS,marginXS:o.sizeXS,marginSM:o.sizeSM,margin:o.size,marginMD:o.sizeMD,marginLG:o.sizeLG,marginXL:o.sizeXL,marginXXL:o.sizeXXL,boxShadow:`
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
    `,screenXS:s,screenXSMin:s,screenXSMax:u-1,screenSM:u,screenSMMin:u,screenSMMax:d-1,screenMD:d,screenMDMin:d,screenMDMax:m-1,screenLG:m,screenLGMin:m,screenLGMax:h-1,screenXL:h,screenXLMin:h,screenXLMax:p-1,screenXXL:p,screenXXLMin:p,boxShadowPopoverArrow:"2px 2px 5px rgba(0, 0, 0, 0.05)",boxShadowCard:`
      0 1px 2px -2px ${new Bt("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new Bt("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new Bt("rgba(0, 0, 0, 0.09)").toRgbString()}
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
    `,boxShadowTabsOverflowLeft:"inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)",boxShadowTabsOverflowRight:"inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)",boxShadowTabsOverflowTop:"inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)",boxShadowTabsOverflowBottom:"inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)"}),i)}var Ob=function(e,t){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(r[i]=e[i]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(r[i[o]]=e[i[o]]);return r};const CC={lineHeight:!0,lineHeightSM:!0,lineHeightLG:!0,lineHeightHeading1:!0,lineHeightHeading2:!0,lineHeightHeading3:!0,lineHeightHeading4:!0,lineHeightHeading5:!0,opacityLoading:!0,fontWeightStrong:!0,zIndexPopupBase:!0,zIndexBase:!0,opacityImage:!0},q8={size:!0,sizeSM:!0,sizeLG:!0,sizeMD:!0,sizeXS:!0,sizeXXS:!0,sizeMS:!0,sizeXL:!0,sizeXXL:!0,sizeUnit:!0,sizeStep:!0,motionBase:!0,motionUnit:!0},J8={screenXS:!0,screenXSMin:!0,screenXSMax:!0,screenSM:!0,screenSMMin:!0,screenSMMax:!0,screenMD:!0,screenMDMin:!0,screenMDMax:!0,screenLG:!0,screenLGMin:!0,screenLGMax:!0,screenXL:!0,screenXLMin:!0,screenXLMax:!0,screenXXL:!0,screenXXLMin:!0},wC=(e,t,r)=>{const i=r.getDerivativeToken(e),{override:o}=t,s=Ob(t,["override"]);let u=Object.assign(Object.assign({},i),{override:o});return u=SC(u),s&&Object.entries(s).forEach(d=>{let[m,h]=d;const{theme:p}=h,y=Ob(h,["theme"]);let b=y;p&&(b=wC(Object.assign(Object.assign({},u),y),{override:y},p)),u[m]=b}),u};function Ja(){const{token:e,hashed:t,theme:r,override:i,cssVar:o}=he.useContext(vC),s=`${U8}-${t||""}`,u=r||hC,[d,m,h]=w$(u,[ks,e],{salt:s,override:i,getComputedToken:wC,formatToken:SC,cssVar:o&&{prefix:o.prefix,key:o.key,unitless:CC,ignore:q8,preserve:J8}});return[u,h,t?m:"",d,o]}const nc={overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},Ei=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return{boxSizing:"border-box",margin:0,padding:0,color:e.colorText,fontSize:e.fontSize,lineHeight:e.lineHeight,listStyle:"none",fontFamily:t?"inherit":e.fontFamily}},Xh=()=>({display:"inline-flex",alignItems:"center",color:"inherit",fontStyle:"normal",lineHeight:0,textAlign:"center",textTransform:"none",verticalAlign:"-0.125em",textRendering:"optimizeLegibility","-webkit-font-smoothing":"antialiased","-moz-osx-font-smoothing":"grayscale","> *":{lineHeight:1},svg:{display:"inline-block"}}),eo=()=>({"&::before":{display:"table",content:'""'},"&::after":{display:"table",clear:"both",content:'""'}}),K8=e=>({a:{color:e.colorLink,textDecoration:e.linkDecoration,backgroundColor:"transparent",outline:"none",cursor:"pointer",transition:`color ${e.motionDurationSlow}`,"-webkit-text-decoration-skip":"objects","&:hover":{color:e.colorLinkHover},"&:active":{color:e.colorLinkActive},"&:active, &:hover":{textDecoration:e.linkHoverDecoration,outline:0},"&:focus":{textDecoration:e.linkFocusDecoration,outline:0},"&[disabled]":{color:e.colorTextDisabled,cursor:"not-allowed"}}}),Y8=(e,t,r,i)=>{const o=`[class^="${t}"], [class*=" ${t}"]`,s=r?`.${r}`:o,u={boxSizing:"border-box","&::before, &::after":{boxSizing:"border-box"}};let d={};return i!==!1&&(d={fontFamily:e.fontFamily,fontSize:e.fontSize}),{[s]:Object.assign(Object.assign(Object.assign({},d),u),{[o]:u})}},ud=(e,t)=>({outline:`${le(e.lineWidthFocus)} solid ${e.colorPrimaryBorder}`,outlineOffset:t??1,transition:"outline-offset 0s, outline 0s"}),Us=(e,t)=>({"&:focus-visible":Object.assign({},ud(e,t))}),xC=e=>({[`.${e}`]:Object.assign(Object.assign({},Xh()),{[`.${e} .${e}-icon`]:{display:"block"}})}),{genStyleHooks:rr,genComponentStyleHook:X8,genSubStyleComponent:Z8}=G8({usePrefix:()=>{const{getPrefixCls:e,iconPrefixCls:t}=f.useContext(At);return{rootPrefixCls:e(),iconPrefixCls:t}},useToken:()=>{const[e,t,r,i,o]=Ja();return{theme:e,realToken:t,hashId:r,token:i,cssVar:o}},useCSP:()=>{const{csp:e}=f.useContext(At);return e??{}},getResetStyles:(e,t)=>{var r;const i=K8(e);return[i,{"&":i},xC((r=t==null?void 0:t.prefix.iconPrefixCls)!==null&&r!==void 0?r:Yh)]},getCommonStyle:Y8,getCompUnitless:()=>CC});function Q8(e,t){return Qi.reduce((r,i)=>{const o=e[`${i}1`],s=e[`${i}3`],u=e[`${i}6`],d=e[`${i}7`];return Object.assign(Object.assign({},r),t(i,{lightColor:o,lightBorderColor:s,darkColor:u,textColor:d}))},{})}const e5=(e,t)=>{const[r,i]=Ja();return Ng({token:i,hashId:"",path:["ant-design-icons",e],nonce:()=>t==null?void 0:t.nonce,layer:{name:"antd"}},()=>[xC(e)])},t5=Object.assign({},nd),{useId:Mb}=t5,n5=()=>"",r5=typeof Mb>"u"?n5:Mb;function a5(e,t,r){var i;cC();const o=e||{},s=o.inherit===!1||!t?Object.assign(Object.assign({},Gg),{hashed:(i=t==null?void 0:t.hashed)!==null&&i!==void 0?i:Gg.hashed,cssVar:t==null?void 0:t.cssVar}):t,u=r5();return id(()=>{var d,m;if(!e)return t;const h=Object.assign({},s.components);Object.keys(e.components||{}).forEach(b=>{h[b]=Object.assign(Object.assign({},h[b]),e.components[b])});const p=`css-var-${u.replace(/:/g,"")}`,y=((d=o.cssVar)!==null&&d!==void 0?d:s.cssVar)&&Object.assign(Object.assign(Object.assign({prefix:r==null?void 0:r.prefixCls},typeof s.cssVar=="object"?s.cssVar:{}),typeof o.cssVar=="object"?o.cssVar:{}),{key:typeof o.cssVar=="object"&&((m=o.cssVar)===null||m===void 0?void 0:m.key)||p});return Object.assign(Object.assign(Object.assign({},s),o),{token:Object.assign(Object.assign({},s.token),o.token),components:h,cssVar:y})},[o,s],(d,m)=>d.some((h,p)=>{const y=m[p];return!al(h,y,!0)}))}var i5=["children"],EC=f.createContext({});function o5(e){var t=e.children,r=rt(e,i5);return f.createElement(EC.Provider,{value:r},t)}var l5=function(e){Wa(r,e);var t=qa(r);function r(){return zn(this,r),t.apply(this,arguments)}return Ln(r,[{key:"render",value:function(){return this.props.children}}]),r}(f.Component);function s5(e){var t=f.useReducer(function(d){return d+1},0),r=oe(t,2),i=r[1],o=f.useRef(e),s=Gn(function(){return o.current}),u=Gn(function(d){o.current=typeof d=="function"?d(o.current):d,i()});return[s,u]}var pi="none",vu="appear",pu="enter",yu="leave",Ab="none",Qr="prepare",Ko="start",Yo="active",Zh="end",$C="prepared";function Nb(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit".concat(e)]="webkit".concat(t),r["Moz".concat(e)]="moz".concat(t),r["ms".concat(e)]="MS".concat(t),r["O".concat(e)]="o".concat(t.toLowerCase()),r}function c5(e,t){var r={animationend:Nb("Animation","AnimationEnd"),transitionend:Nb("Transition","TransitionEnd")};return e&&("AnimationEvent"in t||delete r.animationend.animation,"TransitionEvent"in t||delete r.transitionend.transition),r}var u5=c5(Mr(),typeof window<"u"?window:{}),RC={};if(Mr()){var d5=document.createElement("div");RC=d5.style}var bu={};function TC(e){if(bu[e])return bu[e];var t=u5[e];if(t)for(var r=Object.keys(t),i=r.length,o=0;o<i;o+=1){var s=r[o];if(Object.prototype.hasOwnProperty.call(t,s)&&s in RC)return bu[e]=t[s],bu[e]}return""}var OC=TC("animationend"),MC=TC("transitionend"),AC=!!(OC&&MC),Pb=OC||"animationend",_b=MC||"transitionend";function Db(e,t){if(!e)return null;if(Ge(e)==="object"){var r=t.replace(/-\w/g,function(i){return i[1].toUpperCase()});return e[r]}return"".concat(e,"-").concat(t)}const f5=function(e){var t=f.useRef();function r(o){o&&(o.removeEventListener(_b,e),o.removeEventListener(Pb,e))}function i(o){t.current&&t.current!==o&&r(t.current),o&&o!==t.current&&(o.addEventListener(_b,e),o.addEventListener(Pb,e),t.current=o)}return f.useEffect(function(){return function(){r(t.current)}},[]),[i,r]};var NC=Mr()?f.useLayoutEffect:f.useEffect;const m5=function(){var e=f.useRef(null);function t(){Cn.cancel(e.current)}function r(i){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2;t();var s=Cn(function(){o<=1?i({isCanceled:function(){return s!==e.current}}):r(i,o-1)});e.current=s}return f.useEffect(function(){return function(){t()}},[]),[r,t]};var g5=[Qr,Ko,Yo,Zh],h5=[Qr,$C],PC=!1,v5=!0;function _C(e){return e===Yo||e===Zh}const p5=function(e,t,r){var i=Gs(Ab),o=oe(i,2),s=o[0],u=o[1],d=m5(),m=oe(d,2),h=m[0],p=m[1];function y(){u(Qr,!0)}var b=t?h5:g5;return NC(function(){if(s!==Ab&&s!==Zh){var w=b.indexOf(s),C=b[w+1],x=r(s);x===PC?u(C,!0):C&&h(function(S){function $(){S.isCanceled()||u(C,!0)}x===!0?$():Promise.resolve(x).then($)})}},[e,s]),f.useEffect(function(){return function(){p()}},[]),[y,s]};function y5(e,t,r,i){var o=i.motionEnter,s=o===void 0?!0:o,u=i.motionAppear,d=u===void 0?!0:u,m=i.motionLeave,h=m===void 0?!0:m,p=i.motionDeadline,y=i.motionLeaveImmediately,b=i.onAppearPrepare,w=i.onEnterPrepare,C=i.onLeavePrepare,x=i.onAppearStart,S=i.onEnterStart,$=i.onLeaveStart,R=i.onAppearActive,T=i.onEnterActive,z=i.onLeaveActive,O=i.onAppearEnd,A=i.onEnterEnd,P=i.onLeaveEnd,B=i.onVisibleChanged,N=Gs(),H=oe(N,2),j=H[0],W=H[1],V=s5(pi),U=oe(V,2),Z=U[0],_=U[1],L=Gs(null),F=oe(L,2),Y=F[0],M=F[1],k=Z(),K=f.useRef(!1),X=f.useRef(null);function I(){return r()}var te=f.useRef(!1);function ne(){_(pi),M(null,!0)}var fe=Gn(function($e){var Fe=Z();if(Fe!==pi){var ye=I();if(!($e&&!$e.deadline&&$e.target!==ye)){var Re=te.current,Ue;Fe===vu&&Re?Ue=O==null?void 0:O(ye,$e):Fe===pu&&Re?Ue=A==null?void 0:A(ye,$e):Fe===yu&&Re&&(Ue=P==null?void 0:P(ye,$e)),Re&&Ue!==!1&&ne()}}}),ae=f5(fe),ce=oe(ae,1),de=ce[0],xe=function(Fe){switch(Fe){case vu:return J(J(J({},Qr,b),Ko,x),Yo,R);case pu:return J(J(J({},Qr,w),Ko,S),Yo,T);case yu:return J(J(J({},Qr,C),Ko,$),Yo,z);default:return{}}},Se=f.useMemo(function(){return xe(k)},[k]),Oe=p5(k,!e,function($e){if($e===Qr){var Fe=Se[Qr];return Fe?Fe(I()):PC}if(be in Se){var ye;M(((ye=Se[be])===null||ye===void 0?void 0:ye.call(Se,I(),null))||null)}return be===Yo&&k!==pi&&(de(I()),p>0&&(clearTimeout(X.current),X.current=setTimeout(function(){fe({deadline:!0})},p))),be===$C&&ne(),v5}),Ce=oe(Oe,2),we=Ce[0],be=Ce[1],De=_C(be);te.current=De;var Te=f.useRef(null);NC(function(){if(!(K.current&&Te.current===t)){W(t);var $e=K.current;K.current=!0;var Fe;!$e&&t&&d&&(Fe=vu),$e&&t&&s&&(Fe=pu),($e&&!t&&h||!$e&&y&&!t&&h)&&(Fe=yu);var ye=xe(Fe);Fe&&(e||ye[Qr])?(_(Fe),we()):_(pi),Te.current=t}},[t]),f.useEffect(function(){(k===vu&&!d||k===pu&&!s||k===yu&&!h)&&_(pi)},[d,s,h]),f.useEffect(function(){return function(){K.current=!1,clearTimeout(X.current)}},[]);var Be=f.useRef(!1);f.useEffect(function(){j&&(Be.current=!0),j!==void 0&&k===pi&&((Be.current||j)&&(B==null||B(j)),Be.current=!0)},[j,k]);var Ne=Y;return Se[Qr]&&be===Ko&&(Ne=q({transition:"none"},Ne)),[k,be,Ne,j??t]}function b5(e){var t=e;Ge(e)==="object"&&(t=e.transitionSupport);function r(o,s){return!!(o.motionName&&t&&s!==!1)}var i=f.forwardRef(function(o,s){var u=o.visible,d=u===void 0?!0:u,m=o.removeOnLeave,h=m===void 0?!0:m,p=o.forceRender,y=o.children,b=o.motionName,w=o.leavedClassName,C=o.eventProps,x=f.useContext(EC),S=x.motion,$=r(o,S),R=f.useRef(),T=f.useRef();function z(){try{return R.current instanceof HTMLElement?R.current:Nu(T.current)}catch{return null}}var O=y5($,d,z,o),A=oe(O,4),P=A[0],B=A[1],N=A[2],H=A[3],j=f.useRef(H);H&&(j.current=!0);var W=f.useCallback(function(F){R.current=F,Ih(s,F)},[s]),V,U=q(q({},C),{},{visible:d});if(!y)V=null;else if(P===pi)H?V=y(q({},U),W):!h&&j.current&&w?V=y(q(q({},U),{},{className:w}),W):p||!h&&!w?V=y(q(q({},U),{},{style:{display:"none"}}),W):V=null;else{var Z;B===Qr?Z="prepare":_C(B)?Z="active":B===Ko&&(Z="start");var _=Db(b,"".concat(P,"-").concat(Z));V=y(q(q({},U),{},{className:ue(Db(b,P),J(J({},_,_&&Z),b,typeof b=="string")),style:N}),W)}if(f.isValidElement(V)&&ao(V)){var L=gl(V);L||(V=f.cloneElement(V,{ref:W}))}return f.createElement(l5,{ref:T},V)});return i.displayName="CSSMotion",i}const ba=b5(AC);var Wg="add",qg="keep",Jg="remove",Jm="removed";function S5(e){var t;return e&&Ge(e)==="object"&&"key"in e?t=e:t={key:e},q(q({},t),{},{key:String(t.key)})}function Kg(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return e.map(S5)}function C5(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],r=[],i=0,o=t.length,s=Kg(e),u=Kg(t);s.forEach(function(h){for(var p=!1,y=i;y<o;y+=1){var b=u[y];if(b.key===h.key){i<y&&(r=r.concat(u.slice(i,y).map(function(w){return q(q({},w),{},{status:Wg})})),i=y),r.push(q(q({},b),{},{status:qg})),i+=1,p=!0;break}}p||r.push(q(q({},h),{},{status:Jg}))}),i<o&&(r=r.concat(u.slice(i).map(function(h){return q(q({},h),{},{status:Wg})})));var d={};r.forEach(function(h){var p=h.key;d[p]=(d[p]||0)+1});var m=Object.keys(d).filter(function(h){return d[h]>1});return m.forEach(function(h){r=r.filter(function(p){var y=p.key,b=p.status;return y!==h||b!==Jg}),r.forEach(function(p){p.key===h&&(p.status=qg)})}),r}var w5=["component","children","onVisibleChanged","onAllRemoved"],x5=["status"],E5=["eventProps","visible","children","motionName","motionAppear","motionEnter","motionLeave","motionLeaveImmediately","motionDeadline","removeOnLeave","leavedClassName","onAppearPrepare","onAppearStart","onAppearActive","onAppearEnd","onEnterStart","onEnterActive","onEnterEnd","onLeaveStart","onLeaveActive","onLeaveEnd"];function $5(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ba,r=function(i){Wa(s,i);var o=qa(s);function s(){var u;zn(this,s);for(var d=arguments.length,m=new Array(d),h=0;h<d;h++)m[h]=arguments[h];return u=o.call.apply(o,[this].concat(m)),J(mt(u),"state",{keyEntities:[]}),J(mt(u),"removeKey",function(p){u.setState(function(y){var b=y.keyEntities.map(function(w){return w.key!==p?w:q(q({},w),{},{status:Jm})});return{keyEntities:b}},function(){var y=u.state.keyEntities,b=y.filter(function(w){var C=w.status;return C!==Jm}).length;b===0&&u.props.onAllRemoved&&u.props.onAllRemoved()})}),u}return Ln(s,[{key:"render",value:function(){var d=this,m=this.state.keyEntities,h=this.props,p=h.component,y=h.children,b=h.onVisibleChanged;h.onAllRemoved;var w=rt(h,w5),C=p||f.Fragment,x={};return E5.forEach(function(S){x[S]=w[S],delete w[S]}),delete w.keys,f.createElement(C,w,m.map(function(S,$){var R=S.status,T=rt(S,x5),z=R===Wg||R===qg;return f.createElement(t,Me({},x,{key:T.key,visible:z,eventProps:T,onVisibleChanged:function(A){b==null||b(A,{key:T.key}),A||d.removeKey(T.key)}}),function(O,A){return y(q(q({},O),{},{index:$}),A)})}))}}],[{key:"getDerivedStateFromProps",value:function(d,m){var h=d.keys,p=m.keyEntities,y=Kg(h),b=C5(p,y);return{keyEntities:b.filter(function(w){var C=p.find(function(x){var S=x.key;return w.key===S});return!(C&&C.status===Jm&&w.status===Jg)})}}}]),s}(f.Component);return J(r,"defaultProps",{component:"div"}),r}$5(AC);function R5(e){const{children:t}=e,[,r]=Ja(),{motion:i}=r,o=f.useRef(!1);return o.current=o.current||i===!1,o.current?f.createElement(o5,{motion:i},t):t}const T5=()=>null;var O5=function(e,t){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(r[i]=e[i]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(r[i[o]]=e[i[o]]);return r};const M5=["getTargetContainer","getPopupContainer","renderEmpty","input","pagination","form","select","button"];let DC;function A5(){return DC||Vs}function N5(e){return Object.keys(e).some(t=>t.endsWith("Color"))}const P5=e=>{const{prefixCls:t,iconPrefixCls:r,theme:i,holderRender:o}=e;t!==void 0&&(DC=t),i&&N5(i)&&M8(A5(),i)},_5=e=>{const{children:t,csp:r,autoInsertSpaceInButton:i,alert:o,anchor:s,form:u,locale:d,componentSize:m,direction:h,space:p,splitter:y,virtual:b,dropdownMatchSelectWidth:w,popupMatchSelectWidth:C,popupOverflow:x,legacyLocale:S,parentContext:$,iconPrefixCls:R,theme:T,componentDisabled:z,segmented:O,statistic:A,spin:P,calendar:B,carousel:N,cascader:H,collapse:j,typography:W,checkbox:V,descriptions:U,divider:Z,drawer:_,skeleton:L,steps:F,image:Y,layout:M,list:k,mentions:K,modal:X,progress:I,result:te,slider:ne,breadcrumb:fe,menu:ae,pagination:ce,input:de,textArea:xe,empty:Se,badge:Oe,radio:Ce,rate:we,switch:be,transfer:De,avatar:Te,message:Be,tag:Ne,table:$e,card:Fe,tabs:ye,timeline:Re,timePicker:Ue,upload:Ie,notification:at,tree:qe,colorPicker:Ke,datePicker:Xe,rangePicker:et,flex:it,wave:je,dropdown:Ee,warning:Ye,tour:Je,tooltip:nt,popover:tn,popconfirm:kt,floatButtonGroup:nn,variant:qt,inputNumber:Un,treeSelect:Ft}=e,$t=f.useCallback((bt,ot)=>{const{prefixCls:Ct}=e;if(ot)return ot;const vt=Ct||$.getPrefixCls("");return bt?`${vt}-${bt}`:vt},[$.getPrefixCls,e.prefixCls]),It=R||$.iconPrefixCls||Yh,xt=r||$.csp;e5(It,xt);const Ve=a5(T,$.theme,{prefixCls:$t("")}),_e={csp:xt,autoInsertSpaceInButton:i,alert:o,anchor:s,locale:d||S,direction:h,space:p,splitter:y,virtual:b,popupMatchSelectWidth:C??w,popupOverflow:x,getPrefixCls:$t,iconPrefixCls:It,theme:Ve,segmented:O,statistic:A,spin:P,calendar:B,carousel:N,cascader:H,collapse:j,typography:W,checkbox:V,descriptions:U,divider:Z,drawer:_,skeleton:L,steps:F,image:Y,input:de,textArea:xe,layout:M,list:k,mentions:K,modal:X,progress:I,result:te,slider:ne,breadcrumb:fe,menu:ae,pagination:ce,empty:Se,badge:Oe,radio:Ce,rate:we,switch:be,transfer:De,avatar:Te,message:Be,tag:Ne,table:$e,card:Fe,tabs:ye,timeline:Re,timePicker:Ue,upload:Ie,notification:at,tree:qe,colorPicker:Ke,datePicker:Xe,rangePicker:et,flex:it,wave:je,dropdown:Ee,warning:Ye,tour:Je,tooltip:nt,popover:tn,popconfirm:kt,floatButtonGroup:nn,variant:qt,inputNumber:Un,treeSelect:Ft},ze=Object.assign({},$);Object.keys(_e).forEach(bt=>{_e[bt]!==void 0&&(ze[bt]=_e[bt])}),M5.forEach(bt=>{const ot=e[bt];ot&&(ze[bt]=ot)}),typeof i<"u"&&(ze.button=Object.assign({autoInsertSpace:i},ze.button));const ct=id(()=>ze,ze,(bt,ot)=>{const Ct=Object.keys(bt),vt=Object.keys(ot);return Ct.length!==vt.length||Ct.some(jt=>bt[jt]!==ot[jt])}),{layer:Pt}=f.useContext(tc),wn=f.useMemo(()=>({prefixCls:It,csp:xt,layer:Pt?"antd":void 0}),[It,xt,Pt]);let ht=f.createElement(f.Fragment,null,f.createElement(T5,{dropdownMatchSelectWidth:w}),t);const Wn=f.useMemo(()=>{var bt,ot,Ct,vt;return Jo(((bt=sl.Form)===null||bt===void 0?void 0:bt.defaultValidateMessages)||{},((Ct=(ot=ct.locale)===null||ot===void 0?void 0:ot.Form)===null||Ct===void 0?void 0:Ct.defaultValidateMessages)||{},((vt=ct.form)===null||vt===void 0?void 0:vt.validateMessages)||{},(u==null?void 0:u.validateMessages)||{})},[ct,u==null?void 0:u.validateMessages]);Object.keys(Wn).length>0&&(ht=f.createElement(r8.Provider,{value:Wn},ht)),d&&(ht=f.createElement(u8,{locale:d,_ANT_MARK__:c8},ht)),ht=f.createElement(Jh.Provider,{value:wn},ht),m&&(ht=f.createElement(N8,{size:m},ht)),ht=f.createElement(R5,null,ht);const ar=f.useMemo(()=>{const bt=Ve||{},{algorithm:ot,token:Ct,components:vt,cssVar:jt}=bt,qn=O5(bt,["algorithm","token","components","cssVar"]),Jn=ot&&(!Array.isArray(ot)||ot.length>0)?Rg(ot):hC,Kn={};Object.entries(vt||{}).forEach(un=>{let[xn,En]=un;const ut=Object.assign({},En);"algorithm"in ut&&(ut.algorithm===!0?ut.theme=Jn:(Array.isArray(ut.algorithm)||typeof ut.algorithm=="function")&&(ut.theme=Rg(ut.algorithm)),delete ut.algorithm),Kn[xn]=ut});const hn=Object.assign(Object.assign({},ks),Ct);return Object.assign(Object.assign({},qn),{theme:Jn,token:hn,components:Kn,override:Object.assign({override:hn},Kn),cssVar:jt})},[Ve]);return T&&(ht=f.createElement(vC.Provider,{value:ar},ht)),ct.warning&&(ht=f.createElement(n8.Provider,{value:ct.warning},ht)),z!==void 0&&(ht=f.createElement(A8,{disabled:z},ht)),f.createElement(At.Provider,{value:ct},ht)},rc=e=>{const t=f.useContext(At),r=f.useContext(Kh);return f.createElement(_5,Object.assign({parentContext:t,legacyLocale:r},e))};rc.ConfigContext=At;rc.SizeContext=cl;rc.config=P5;rc.useConfig=P8;Object.defineProperty(rc,"SizeContext",{get:()=>cl});function zC(e){var t;return e==null||(t=e.getRootNode)===null||t===void 0?void 0:t.call(e)}function D5(e){return zC(e)instanceof ShadowRoot}function qu(e){return D5(e)?zC(e):null}function z5(e){return e.replace(/-(.)/g,function(t,r){return r.toUpperCase()})}function L5(e,t){cr(e,"[@ant-design/icons] ".concat(t))}function zb(e){return Ge(e)==="object"&&typeof e.name=="string"&&typeof e.theme=="string"&&(Ge(e.icon)==="object"||typeof e.icon=="function")}function Lb(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Object.keys(e).reduce(function(t,r){var i=e[r];switch(r){case"class":t.className=i,delete t.class;break;default:delete t[r],t[z5(r)]=i}return t},{})}function Yg(e,t,r){return r?he.createElement(e.tag,q(q({key:t},Lb(e.attrs)),r),(e.children||[]).map(function(i,o){return Yg(i,"".concat(t,"-").concat(e.tag,"-").concat(o))})):he.createElement(e.tag,q({key:t},Lb(e.attrs)),(e.children||[]).map(function(i,o){return Yg(i,"".concat(t,"-").concat(e.tag,"-").concat(o))}))}function LC(e){return Fs(e)[0]}function HC(e){return e?Array.isArray(e)?e:[e]:[]}var H5=`
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
`,B5=function(t){var r=f.useContext(Jh),i=r.csp,o=r.prefixCls,s=r.layer,u=H5;o&&(u=u.replace(/anticon/g,o)),s&&(u="@layer ".concat(s,` {
`).concat(u,`
}`)),f.useEffect(function(){var d=t.current,m=qu(d);ka(u,"@ant-design-icons",{prepend:!s,csp:i,attachTo:m})},[])},I5=["icon","className","onClick","style","primaryColor","secondaryColor"],Ms={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1};function j5(e){var t=e.primaryColor,r=e.secondaryColor;Ms.primaryColor=t,Ms.secondaryColor=r||LC(t),Ms.calculated=!!r}function k5(){return q({},Ms)}var vl=function(t){var r=t.icon,i=t.className,o=t.onClick,s=t.style,u=t.primaryColor,d=t.secondaryColor,m=rt(t,I5),h=f.useRef(),p=Ms;if(u&&(p={primaryColor:u,secondaryColor:d||LC(u)}),B5(h),L5(zb(r),"icon should be icon definiton, but got ".concat(r)),!zb(r))return null;var y=r;return y&&typeof y.icon=="function"&&(y=q(q({},y),{},{icon:y.icon(p.primaryColor,p.secondaryColor)})),Yg(y.icon,"svg-".concat(y.name),q(q({className:i,onClick:o,style:s,"data-icon":y.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},m),{},{ref:h}))};vl.displayName="IconReact";vl.getTwoToneColors=k5;vl.setTwoToneColors=j5;function BC(e){var t=HC(e),r=oe(t,2),i=r[0],o=r[1];return vl.setTwoToneColors({primaryColor:i,secondaryColor:o})}function F5(){var e=vl.getTwoToneColors();return e.calculated?[e.primaryColor,e.secondaryColor]:e.primaryColor}var V5=["className","icon","spin","rotate","tabIndex","onClick","twoToneColor"];BC(Wu.primary);var Hn=f.forwardRef(function(e,t){var r=e.className,i=e.icon,o=e.spin,s=e.rotate,u=e.tabIndex,d=e.onClick,m=e.twoToneColor,h=rt(e,V5),p=f.useContext(Jh),y=p.prefixCls,b=y===void 0?"anticon":y,w=p.rootClassName,C=ue(w,b,J(J({},"".concat(b,"-").concat(i.name),!!i.name),"".concat(b,"-spin"),!!o||i.name==="loading"),r),x=u;x===void 0&&d&&(x=-1);var S=s?{msTransform:"rotate(".concat(s,"deg)"),transform:"rotate(".concat(s,"deg)")}:void 0,$=HC(m),R=oe($,2),T=R[0],z=R[1];return f.createElement("span",Me({role:"img","aria-label":i.name},h,{ref:t,tabIndex:x,onClick:d,className:C}),f.createElement(vl,{icon:i,primaryColor:T,secondaryColor:z,style:S}))});Hn.displayName="AntdIcon";Hn.getTwoToneColor=F5;Hn.setTwoToneColor=BC;var G5={icon:{tag:"svg",attrs:{"fill-rule":"evenodd",viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z"}}]},name:"close-circle",theme:"filled"},U5=function(t,r){return f.createElement(Hn,Me({},t,{ref:r,icon:G5}))},W5=f.forwardRef(U5),q5={icon:{tag:"svg",attrs:{"fill-rule":"evenodd",viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z"}}]},name:"close",theme:"outlined"},J5=function(t,r){return f.createElement(Hn,Me({},t,{ref:r,icon:q5}))},IC=f.forwardRef(J5),K5=`accept acceptCharset accessKey action allowFullScreen allowTransparency
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
    summary tabIndex target title type useMap value width wmode wrap`,Y5=`onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`,X5="".concat(K5," ").concat(Y5).split(/[\s\n]+/),Z5="aria-",Q5="data-";function Hb(e,t){return e.indexOf(t)===0}function Qh(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r;t===!1?r={aria:!0,data:!0,attr:!0}:t===!0?r={aria:!0}:r=q({},t);var i={};return Object.keys(e).forEach(function(o){(r.aria&&(o==="role"||Hb(o,Z5))||r.data&&Hb(o,Q5)||r.attr&&X5.includes(o))&&(i[o]=e[o])}),i}function jC(e){return e&&he.isValidElement(e)&&e.type===he.Fragment}const eR=(e,t,r)=>he.isValidElement(e)?he.cloneElement(e,typeof r=="function"?r(e.props||{}):r):t;function wi(e,t){return eR(e,e,t)}const pl=e=>{const[,,,,t]=Ja();return t?`${e}-css-var`:""};var rn={TAB:9,ENTER:13,ESC:27,SPACE:32,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40},tR={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"}}]},name:"loading",theme:"outlined"},nR=function(t,r){return f.createElement(Hn,Me({},t,{ref:r,icon:tR}))},rR=f.forwardRef(nR);const kC=he.createContext(void 0),qi=100,FC={Modal:qi,Drawer:qi,Popover:qi,Popconfirm:qi,Tooltip:qi,Tour:qi,FloatButton:qi},aR={SelectLike:50,Dropdown:50,DatePicker:50,Menu:50,ImagePreview:1};function iR(e){return e in FC}const dd=(e,t)=>{const[,r]=Ja(),i=he.useContext(kC),o=iR(e);let s;if(t!==void 0)s=[t,t];else{let u=i??0;o?u+=(i?0:r.zIndexPopupBase)+FC[e]:u+=aR[e],s=[i===void 0?t:u,u]}return s};function ur(){ur=function(){return t};var e,t={},r=Object.prototype,i=r.hasOwnProperty,o=Object.defineProperty||function(_,L,F){_[L]=F.value},s=typeof Symbol=="function"?Symbol:{},u=s.iterator||"@@iterator",d=s.asyncIterator||"@@asyncIterator",m=s.toStringTag||"@@toStringTag";function h(_,L,F){return Object.defineProperty(_,L,{value:F,enumerable:!0,configurable:!0,writable:!0}),_[L]}try{h({},"")}catch{h=function(F,Y,M){return F[Y]=M}}function p(_,L,F,Y){var M=L&&L.prototype instanceof $?L:$,k=Object.create(M.prototype),K=new U(Y||[]);return o(k,"_invoke",{value:H(_,F,K)}),k}function y(_,L,F){try{return{type:"normal",arg:_.call(L,F)}}catch(Y){return{type:"throw",arg:Y}}}t.wrap=p;var b="suspendedStart",w="suspendedYield",C="executing",x="completed",S={};function $(){}function R(){}function T(){}var z={};h(z,u,function(){return this});var O=Object.getPrototypeOf,A=O&&O(O(Z([])));A&&A!==r&&i.call(A,u)&&(z=A);var P=T.prototype=$.prototype=Object.create(z);function B(_){["next","throw","return"].forEach(function(L){h(_,L,function(F){return this._invoke(L,F)})})}function N(_,L){function F(M,k,K,X){var I=y(_[M],_,k);if(I.type!=="throw"){var te=I.arg,ne=te.value;return ne&&Ge(ne)=="object"&&i.call(ne,"__await")?L.resolve(ne.__await).then(function(fe){F("next",fe,K,X)},function(fe){F("throw",fe,K,X)}):L.resolve(ne).then(function(fe){te.value=fe,K(te)},function(fe){return F("throw",fe,K,X)})}X(I.arg)}var Y;o(this,"_invoke",{value:function(k,K){function X(){return new L(function(I,te){F(k,K,I,te)})}return Y=Y?Y.then(X,X):X()}})}function H(_,L,F){var Y=b;return function(M,k){if(Y===C)throw Error("Generator is already running");if(Y===x){if(M==="throw")throw k;return{value:e,done:!0}}for(F.method=M,F.arg=k;;){var K=F.delegate;if(K){var X=j(K,F);if(X){if(X===S)continue;return X}}if(F.method==="next")F.sent=F._sent=F.arg;else if(F.method==="throw"){if(Y===b)throw Y=x,F.arg;F.dispatchException(F.arg)}else F.method==="return"&&F.abrupt("return",F.arg);Y=C;var I=y(_,L,F);if(I.type==="normal"){if(Y=F.done?x:w,I.arg===S)continue;return{value:I.arg,done:F.done}}I.type==="throw"&&(Y=x,F.method="throw",F.arg=I.arg)}}}function j(_,L){var F=L.method,Y=_.iterator[F];if(Y===e)return L.delegate=null,F==="throw"&&_.iterator.return&&(L.method="return",L.arg=e,j(_,L),L.method==="throw")||F!=="return"&&(L.method="throw",L.arg=new TypeError("The iterator does not provide a '"+F+"' method")),S;var M=y(Y,_.iterator,L.arg);if(M.type==="throw")return L.method="throw",L.arg=M.arg,L.delegate=null,S;var k=M.arg;return k?k.done?(L[_.resultName]=k.value,L.next=_.nextLoc,L.method!=="return"&&(L.method="next",L.arg=e),L.delegate=null,S):k:(L.method="throw",L.arg=new TypeError("iterator result is not an object"),L.delegate=null,S)}function W(_){var L={tryLoc:_[0]};1 in _&&(L.catchLoc=_[1]),2 in _&&(L.finallyLoc=_[2],L.afterLoc=_[3]),this.tryEntries.push(L)}function V(_){var L=_.completion||{};L.type="normal",delete L.arg,_.completion=L}function U(_){this.tryEntries=[{tryLoc:"root"}],_.forEach(W,this),this.reset(!0)}function Z(_){if(_||_===""){var L=_[u];if(L)return L.call(_);if(typeof _.next=="function")return _;if(!isNaN(_.length)){var F=-1,Y=function M(){for(;++F<_.length;)if(i.call(_,F))return M.value=_[F],M.done=!1,M;return M.value=e,M.done=!0,M};return Y.next=Y}}throw new TypeError(Ge(_)+" is not iterable")}return R.prototype=T,o(P,"constructor",{value:T,configurable:!0}),o(T,"constructor",{value:R,configurable:!0}),R.displayName=h(T,m,"GeneratorFunction"),t.isGeneratorFunction=function(_){var L=typeof _=="function"&&_.constructor;return!!L&&(L===R||(L.displayName||L.name)==="GeneratorFunction")},t.mark=function(_){return Object.setPrototypeOf?Object.setPrototypeOf(_,T):(_.__proto__=T,h(_,m,"GeneratorFunction")),_.prototype=Object.create(P),_},t.awrap=function(_){return{__await:_}},B(N.prototype),h(N.prototype,d,function(){return this}),t.AsyncIterator=N,t.async=function(_,L,F,Y,M){M===void 0&&(M=Promise);var k=new N(p(_,L,F,Y),M);return t.isGeneratorFunction(L)?k:k.next().then(function(K){return K.done?K.value:k.next()})},B(P),h(P,m,"Generator"),h(P,u,function(){return this}),h(P,"toString",function(){return"[object Generator]"}),t.keys=function(_){var L=Object(_),F=[];for(var Y in L)F.push(Y);return F.reverse(),function M(){for(;F.length;){var k=F.pop();if(k in L)return M.value=k,M.done=!1,M}return M.done=!0,M}},t.values=Z,U.prototype={constructor:U,reset:function(L){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(V),!L)for(var F in this)F.charAt(0)==="t"&&i.call(this,F)&&!isNaN(+F.slice(1))&&(this[F]=e)},stop:function(){this.done=!0;var L=this.tryEntries[0].completion;if(L.type==="throw")throw L.arg;return this.rval},dispatchException:function(L){if(this.done)throw L;var F=this;function Y(te,ne){return K.type="throw",K.arg=L,F.next=te,ne&&(F.method="next",F.arg=e),!!ne}for(var M=this.tryEntries.length-1;M>=0;--M){var k=this.tryEntries[M],K=k.completion;if(k.tryLoc==="root")return Y("end");if(k.tryLoc<=this.prev){var X=i.call(k,"catchLoc"),I=i.call(k,"finallyLoc");if(X&&I){if(this.prev<k.catchLoc)return Y(k.catchLoc,!0);if(this.prev<k.finallyLoc)return Y(k.finallyLoc)}else if(X){if(this.prev<k.catchLoc)return Y(k.catchLoc,!0)}else{if(!I)throw Error("try statement without catch or finally");if(this.prev<k.finallyLoc)return Y(k.finallyLoc)}}}},abrupt:function(L,F){for(var Y=this.tryEntries.length-1;Y>=0;--Y){var M=this.tryEntries[Y];if(M.tryLoc<=this.prev&&i.call(M,"finallyLoc")&&this.prev<M.finallyLoc){var k=M;break}}k&&(L==="break"||L==="continue")&&k.tryLoc<=F&&F<=k.finallyLoc&&(k=null);var K=k?k.completion:{};return K.type=L,K.arg=F,k?(this.method="next",this.next=k.finallyLoc,S):this.complete(K)},complete:function(L,F){if(L.type==="throw")throw L.arg;return L.type==="break"||L.type==="continue"?this.next=L.arg:L.type==="return"?(this.rval=this.arg=L.arg,this.method="return",this.next="end"):L.type==="normal"&&F&&(this.next=F),S},finish:function(L){for(var F=this.tryEntries.length-1;F>=0;--F){var Y=this.tryEntries[F];if(Y.finallyLoc===L)return this.complete(Y.completion,Y.afterLoc),V(Y),S}},catch:function(L){for(var F=this.tryEntries.length-1;F>=0;--F){var Y=this.tryEntries[F];if(Y.tryLoc===L){var M=Y.completion;if(M.type==="throw"){var k=M.arg;V(Y)}return k}}throw Error("illegal catch attempt")},delegateYield:function(L,F,Y){return this.delegate={iterator:Z(L),resultName:F,nextLoc:Y},this.method==="next"&&(this.arg=e),S}},t}function Bb(e,t,r,i,o,s,u){try{var d=e[s](u),m=d.value}catch(h){return void r(h)}d.done?t(m):Promise.resolve(m).then(i,o)}function oo(e){return function(){var t=this,r=arguments;return new Promise(function(i,o){var s=e.apply(t,r);function u(m){Bb(s,i,o,u,d,"next",m)}function d(m){Bb(s,i,o,u,d,"throw",m)}u(void 0)})}}var ac=q({},g3),oR=ac.version,Km=ac.render,lR=ac.unmountComponentAtNode,fd;try{var sR=Number((oR||"").split(".")[0]);sR>=18&&(fd=ac.createRoot)}catch{}function Ib(e){var t=ac.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;t&&Ge(t)==="object"&&(t.usingClientEntryPoint=e)}var Ju="__rc_react_root__";function cR(e,t){Ib(!0);var r=t[Ju]||fd(t);Ib(!1),r.render(e),t[Ju]=r}function uR(e,t){Km==null||Km(e,t)}function dR(e,t){if(fd){cR(e,t);return}uR(e,t)}function fR(e){return Xg.apply(this,arguments)}function Xg(){return Xg=oo(ur().mark(function e(t){return ur().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",Promise.resolve().then(function(){var o;(o=t[Ju])===null||o===void 0||o.unmount(),delete t[Ju]}));case 1:case"end":return i.stop()}},e)})),Xg.apply(this,arguments)}function mR(e){lR(e)}function gR(e){return Zg.apply(this,arguments)}function Zg(){return Zg=oo(ur().mark(function e(t){return ur().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:if(fd===void 0){i.next=2;break}return i.abrupt("return",fR(t));case 2:mR(t);case 3:case"end":return i.stop()}},e)})),Zg.apply(this,arguments)}const hR=(e,t)=>(dR(e,t),()=>gR(t));let vR=hR;function pR(){return vR}const Ym=()=>({height:0,opacity:0}),jb=e=>{const{scrollHeight:t}=e;return{height:t,opacity:1}},yR=e=>({height:e?e.offsetHeight:0}),Xm=(e,t)=>(t==null?void 0:t.deadline)===!0||t.propertyName==="height",bR=function(){return{motionName:`${arguments.length>0&&arguments[0]!==void 0?arguments[0]:Vs}-motion-collapse`,onAppearStart:Ym,onEnterStart:Ym,onAppearActive:jb,onEnterActive:jb,onLeaveStart:yR,onLeaveActive:Ym,onAppearEnd:Xm,onEnterEnd:Xm,onLeaveEnd:Xm,motionDeadline:500}},ul=(e,t,r)=>r!==void 0?r:`${e}-${t}`;function dr(e,t){var r=Object.assign({},e);return Array.isArray(t)&&t.forEach(function(i){delete r[i]}),r}const ev=function(e){if(!e)return!1;if(e instanceof Element){if(e.offsetParent)return!0;if(e.getBBox){var t=e.getBBox(),r=t.width,i=t.height;if(r||i)return!0}if(e.getBoundingClientRect){var o=e.getBoundingClientRect(),s=o.width,u=o.height;if(s||u)return!0}}return!1},SR=e=>{const{componentCls:t,colorPrimary:r}=e;return{[t]:{position:"absolute",background:"transparent",pointerEvents:"none",boxSizing:"border-box",color:`var(--wave-color, ${r})`,boxShadow:"0 0 0 0 currentcolor",opacity:.2,"&.wave-motion-appear":{transition:[`box-shadow 0.4s ${e.motionEaseOutCirc}`,`opacity 2s ${e.motionEaseOutCirc}`].join(","),"&-active":{boxShadow:"0 0 0 6px currentcolor",opacity:0},"&.wave-quick":{transition:[`box-shadow ${e.motionDurationSlow} ${e.motionEaseInOut}`,`opacity ${e.motionDurationSlow} ${e.motionEaseInOut}`].join(",")}}}}},CR=X8("Wave",e=>[SR(e)]),VC=`${Vs}-wave-target`;function Zm(e){return e&&e!=="#fff"&&e!=="#ffffff"&&e!=="rgb(255, 255, 255)"&&e!=="rgba(255, 255, 255, 1)"&&!/rgba\((?:\d*, ){3}0\)/.test(e)&&e!=="transparent"}function wR(e){const{borderTopColor:t,borderColor:r,backgroundColor:i}=getComputedStyle(e);return Zm(t)?t:Zm(r)?r:Zm(i)?i:null}function Qm(e){return Number.isNaN(e)?0:e}const xR=e=>{const{className:t,target:r,component:i,registerUnmount:o}=e,s=f.useRef(null),u=f.useRef(null);f.useEffect(()=>{u.current=o()},[]);const[d,m]=f.useState(null),[h,p]=f.useState([]),[y,b]=f.useState(0),[w,C]=f.useState(0),[x,S]=f.useState(0),[$,R]=f.useState(0),[T,z]=f.useState(!1),O={left:y,top:w,width:x,height:$,borderRadius:h.map(B=>`${B}px`).join(" ")};d&&(O["--wave-color"]=d);function A(){const B=getComputedStyle(r);m(wR(r));const N=B.position==="static",{borderLeftWidth:H,borderTopWidth:j}=B;b(N?r.offsetLeft:Qm(-parseFloat(H))),C(N?r.offsetTop:Qm(-parseFloat(j))),S(r.offsetWidth),R(r.offsetHeight);const{borderTopLeftRadius:W,borderTopRightRadius:V,borderBottomLeftRadius:U,borderBottomRightRadius:Z}=B;p([W,V,Z,U].map(_=>Qm(parseFloat(_))))}if(f.useEffect(()=>{if(r){const B=Cn(()=>{A(),z(!0)});let N;return typeof ResizeObserver<"u"&&(N=new ResizeObserver(A),N.observe(r)),()=>{Cn.cancel(B),N==null||N.disconnect()}}},[]),!T)return null;const P=(i==="Checkbox"||i==="Radio")&&(r==null?void 0:r.classList.contains(VC));return f.createElement(ba,{visible:!0,motionAppear:!0,motionName:"wave-motion",motionDeadline:5e3,onAppearEnd:(B,N)=>{var H,j;if(N.deadline||N.propertyName==="opacity"){const W=(H=s.current)===null||H===void 0?void 0:H.parentElement;(j=u.current)===null||j===void 0||j.call(u).then(()=>{W==null||W.remove()})}return!1}},(B,N)=>{let{className:H}=B;return f.createElement("div",{ref:Ua(s,N),className:ue(t,H,{"wave-quick":P}),style:O})})},ER=(e,t)=>{var r;const{component:i}=t;if(i==="Checkbox"&&!(!((r=e.querySelector("input"))===null||r===void 0)&&r.checked))return;const o=document.createElement("div");o.style.position="absolute",o.style.left="0px",o.style.top="0px",e==null||e.insertBefore(o,e==null?void 0:e.firstChild);const s=pR();let u=null;function d(){return u}u=s(f.createElement(xR,Object.assign({},t,{target:e,registerUnmount:d})),o)},$R=(e,t,r)=>{const{wave:i}=f.useContext(At),[,o,s]=Ja(),u=Gn(h=>{const p=e.current;if(i!=null&&i.disabled||!p)return;const y=p.querySelector(`.${VC}`)||p,{showEffect:b}=i||{};(b||ER)(y,{className:t,token:o,component:r,event:h,hashId:s})}),d=f.useRef(null);return h=>{Cn.cancel(d.current),d.current=Cn(()=>{u(h)})}},RR=e=>{const{children:t,disabled:r,component:i}=e,{getPrefixCls:o}=f.useContext(At),s=f.useRef(null),u=o("wave"),[,d]=CR(u),m=$R(s,ue(u,d),i);if(he.useEffect(()=>{const p=s.current;if(!p||p.nodeType!==1||r)return;const y=b=>{!ev(b.target)||!p.getAttribute||p.getAttribute("disabled")||p.disabled||p.className.includes("disabled")||p.className.includes("-leave")||m(b)};return p.addEventListener("click",y,!0),()=>{p.removeEventListener("click",y,!0)}},[r]),!he.isValidElement(t))return t??null;const h=ao(t)?Ua(gl(t),s):s;return wi(t,{ref:h})},lo=e=>{const t=he.useContext(cl);return he.useMemo(()=>e?typeof e=="string"?e??t:typeof e=="function"?e(t):t:t,[e,t])},GC=f.createContext(null),md=(e,t)=>{const r=f.useContext(GC),i=f.useMemo(()=>{if(!r)return"";const{compactDirection:o,isFirstItem:s,isLastItem:u}=r,d=o==="vertical"?"-vertical-":"-";return ue(`${e}-compact${d}item`,{[`${e}-compact${d}first-item`]:s,[`${e}-compact${d}last-item`]:u,[`${e}-compact${d}item-rtl`]:t==="rtl"})},[e,t,r]);return{compactSize:r==null?void 0:r.compactSize,compactDirection:r==null?void 0:r.compactDirection,compactItemClassnames:i}},TR=e=>{const{children:t}=e;return f.createElement(GC.Provider,{value:null},t)};var OR=function(e,t){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(r[i]=e[i]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(r[i[o]]=e[i[o]]);return r};const UC=f.createContext(void 0),MR=e=>{const{getPrefixCls:t,direction:r}=f.useContext(At),{prefixCls:i,size:o,className:s}=e,u=OR(e,["prefixCls","size","className"]),d=t("btn-group",i),[,,m]=Ja(),h=f.useMemo(()=>{switch(o){case"large":return"lg";case"small":return"sm";default:return""}},[o]),p=ue(d,{[`${d}-${h}`]:h,[`${d}-rtl`]:r==="rtl"},s,m);return f.createElement(UC.Provider,{value:o},f.createElement("div",Object.assign({},u,{className:p})))},kb=/^[\u4E00-\u9FA5]{2}$/,Qg=kb.test.bind(kb);function Fb(e){return typeof e=="string"}function eg(e){return e==="text"||e==="link"}function AR(e,t){if(e==null)return;const r=t?" ":"";return typeof e!="string"&&typeof e!="number"&&Fb(e.type)&&Qg(e.props.children)?wi(e,{children:e.props.children.split("").join(r)}):Fb(e)?Qg(e)?he.createElement("span",null,e.split("").join(r)):he.createElement("span",null,e):jC(e)?he.createElement("span",null,e):e}function NR(e,t){let r=!1;const i=[];return he.Children.forEach(e,o=>{const s=typeof o,u=s==="string"||s==="number";if(r&&u){const d=i.length-1,m=i[d];i[d]=`${m}${o}`}else i.push(o);r=u}),he.Children.map(i,o=>AR(o,t))}["default","primary","danger"].concat(Le(Qi));const eh=f.forwardRef((e,t)=>{const{className:r,style:i,children:o,prefixCls:s}=e,u=ue(`${s}-icon`,r);return he.createElement("span",{ref:t,className:u,style:i},o)}),Vb=f.forwardRef((e,t)=>{const{prefixCls:r,className:i,style:o,iconClassName:s}=e,u=ue(`${r}-loading-icon`,i);return he.createElement(eh,{prefixCls:r,className:u,style:o,ref:t},he.createElement(rR,{className:s}))}),tg=()=>({width:0,opacity:0,transform:"scale(0)"}),ng=e=>({width:e.scrollWidth,opacity:1,transform:"scale(1)"}),PR=e=>{const{prefixCls:t,loading:r,existIcon:i,className:o,style:s,mount:u}=e,d=!!r;return i?he.createElement(Vb,{prefixCls:t,className:o,style:s}):he.createElement(ba,{visible:d,motionName:`${t}-loading-icon-motion`,motionAppear:!u,motionEnter:!u,motionLeave:!u,removeOnLeave:!0,onAppearStart:tg,onAppearActive:ng,onEnterStart:tg,onEnterActive:ng,onLeaveStart:ng,onLeaveActive:tg},(m,h)=>{let{className:p,style:y}=m;const b=Object.assign(Object.assign({},s),y);return he.createElement(Vb,{prefixCls:t,className:ue(o,p),style:b,ref:h})})},Gb=(e,t)=>({[`> span, > ${e}`]:{"&:not(:last-child)":{[`&, & > ${e}`]:{"&:not(:disabled)":{borderInlineEndColor:t}}},"&:not(:first-child)":{[`&, & > ${e}`]:{"&:not(:disabled)":{borderInlineStartColor:t}}}}}),_R=e=>{const{componentCls:t,fontSize:r,lineWidth:i,groupBorderColor:o,colorErrorHover:s}=e;return{[`${t}-group`]:[{position:"relative",display:"inline-flex",[`> span, > ${t}`]:{"&:not(:last-child)":{[`&, & > ${t}`]:{borderStartEndRadius:0,borderEndEndRadius:0}},"&:not(:first-child)":{marginInlineStart:e.calc(i).mul(-1).equal(),[`&, & > ${t}`]:{borderStartStartRadius:0,borderEndStartRadius:0}}},[t]:{position:"relative",zIndex:1,"&:hover, &:focus, &:active":{zIndex:2},"&[disabled]":{zIndex:0}},[`${t}-icon-only`]:{fontSize:r}},Gb(`${t}-primary`,o),Gb(`${t}-danger`,s)]}};var DR=["b"],zR=["v"],rg=function(t){return Math.round(Number(t||0))},LR=function(t){if(t instanceof Bt)return t;if(t&&Ge(t)==="object"&&"h"in t&&"b"in t){var r=t,i=r.b,o=rt(r,DR);return q(q({},o),{},{v:i})}return typeof t=="string"&&/hsb/.test(t)?t.replace(/hsb/,"hsv"):t},Ws=function(e){Wa(r,e);var t=qa(r);function r(i){return zn(this,r),t.call(this,LR(i))}return Ln(r,[{key:"toHsbString",value:function(){var o=this.toHsb(),s=rg(o.s*100),u=rg(o.b*100),d=rg(o.h),m=o.a,h="hsb(".concat(d,", ").concat(s,"%, ").concat(u,"%)"),p="hsba(".concat(d,", ").concat(s,"%, ").concat(u,"%, ").concat(m.toFixed(m===0?0:2),")");return m===1?h:p}},{key:"toHsb",value:function(){var o=this.toHsv(),s=o.v,u=rt(o,zR);return q(q({},u),{},{b:s,a:this.a})}}]),r}(Bt),HR=function(t){return t instanceof Ws?t:new Ws(t)};HR("#1677ff");const BR=(e,t)=>(e==null?void 0:e.replace(/[^\w/]/g,"").slice(0,t?8:6))||"",IR=(e,t)=>e?BR(e,t):"";let jR=function(){function e(t){zn(this,e);var r;if(this.cleared=!1,t instanceof e){this.metaColor=t.metaColor.clone(),this.colors=(r=t.colors)===null||r===void 0?void 0:r.map(o=>({color:new e(o.color),percent:o.percent})),this.cleared=t.cleared;return}const i=Array.isArray(t);i&&t.length?(this.colors=t.map(o=>{let{color:s,percent:u}=o;return{color:new e(s),percent:u}}),this.metaColor=new Ws(this.colors[0].color.metaColor)):this.metaColor=new Ws(i?"":t),(!t||i&&!this.colors)&&(this.metaColor=this.metaColor.setA(0),this.cleared=!0)}return Ln(e,[{key:"toHsb",value:function(){return this.metaColor.toHsb()}},{key:"toHsbString",value:function(){return this.metaColor.toHsbString()}},{key:"toHex",value:function(){return IR(this.toHexString(),this.metaColor.a<1)}},{key:"toHexString",value:function(){return this.metaColor.toHexString()}},{key:"toRgb",value:function(){return this.metaColor.toRgb()}},{key:"toRgbString",value:function(){return this.metaColor.toRgbString()}},{key:"isGradient",value:function(){return!!this.colors&&!this.cleared}},{key:"getColors",value:function(){return this.colors||[{color:this,percent:0}]}},{key:"toCssString",value:function(){const{colors:r}=this;return r?`linear-gradient(90deg, ${r.map(o=>`${o.color.toRgbString()} ${o.percent}%`).join(", ")})`:this.metaColor.toRgbString()}},{key:"equals",value:function(r){return!r||this.isGradient()!==r.isGradient()?!1:this.isGradient()?this.colors.length===r.colors.length&&this.colors.every((i,o)=>{const s=r.colors[o];return i.percent===s.percent&&i.color.equals(s.color)}):this.toHexString()===r.toHexString()}}])}();var kR={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"}}]},name:"right",theme:"outlined"},FR=function(t,r){return f.createElement(Hn,Me({},t,{ref:r,icon:kR}))},th=f.forwardRef(FR);const VR=e=>({[e.componentCls]:{[`${e.antCls}-motion-collapse-legacy`]:{overflow:"hidden","&-active":{transition:`height ${e.motionDurationMid} ${e.motionEaseInOut},
        opacity ${e.motionDurationMid} ${e.motionEaseInOut} !important`}},[`${e.antCls}-motion-collapse`]:{overflow:"hidden",transition:`height ${e.motionDurationMid} ${e.motionEaseInOut},
        opacity ${e.motionDurationMid} ${e.motionEaseInOut} !important`}}}),GR=e=>({animationDuration:e,animationFillMode:"both"}),UR=e=>({animationDuration:e,animationFillMode:"both"}),tv=function(e,t,r,i){const s=(arguments.length>4&&arguments[4]!==void 0?arguments[4]:!1)?"&":"";return{[`
      ${s}${e}-enter,
      ${s}${e}-appear
    `]:Object.assign(Object.assign({},GR(i)),{animationPlayState:"paused"}),[`${s}${e}-leave`]:Object.assign(Object.assign({},UR(i)),{animationPlayState:"paused"}),[`
      ${s}${e}-enter${e}-enter-active,
      ${s}${e}-appear${e}-appear-active
    `]:{animationName:t,animationPlayState:"running"},[`${s}${e}-leave${e}-leave-active`]:{animationName:r,animationPlayState:"running",pointerEvents:"none"}}},WR=new cn("antFadeIn",{"0%":{opacity:0},"100%":{opacity:1}}),qR=new cn("antFadeOut",{"0%":{opacity:1},"100%":{opacity:0}}),WC=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;const{antCls:r}=e,i=`${r}-fade`,o=t?"&":"";return[tv(i,WR,qR,e.motionDurationMid,t),{[`
        ${o}${i}-enter,
        ${o}${i}-appear
      `]:{opacity:0,animationTimingFunction:"linear"},[`${o}${i}-leave`]:{animationTimingFunction:"linear"}}]},JR=new cn("antSlideUpIn",{"0%":{transform:"scaleY(0.8)",transformOrigin:"0% 0%",opacity:0},"100%":{transform:"scaleY(1)",transformOrigin:"0% 0%",opacity:1}}),KR=new cn("antSlideUpOut",{"0%":{transform:"scaleY(1)",transformOrigin:"0% 0%",opacity:1},"100%":{transform:"scaleY(0.8)",transformOrigin:"0% 0%",opacity:0}}),YR=new cn("antSlideDownIn",{"0%":{transform:"scaleY(0.8)",transformOrigin:"100% 100%",opacity:0},"100%":{transform:"scaleY(1)",transformOrigin:"100% 100%",opacity:1}}),XR=new cn("antSlideDownOut",{"0%":{transform:"scaleY(1)",transformOrigin:"100% 100%",opacity:1},"100%":{transform:"scaleY(0.8)",transformOrigin:"100% 100%",opacity:0}}),ZR=new cn("antSlideLeftIn",{"0%":{transform:"scaleX(0.8)",transformOrigin:"0% 0%",opacity:0},"100%":{transform:"scaleX(1)",transformOrigin:"0% 0%",opacity:1}}),QR=new cn("antSlideLeftOut",{"0%":{transform:"scaleX(1)",transformOrigin:"0% 0%",opacity:1},"100%":{transform:"scaleX(0.8)",transformOrigin:"0% 0%",opacity:0}}),eT=new cn("antSlideRightIn",{"0%":{transform:"scaleX(0.8)",transformOrigin:"100% 0%",opacity:0},"100%":{transform:"scaleX(1)",transformOrigin:"100% 0%",opacity:1}}),tT=new cn("antSlideRightOut",{"0%":{transform:"scaleX(1)",transformOrigin:"100% 0%",opacity:1},"100%":{transform:"scaleX(0.8)",transformOrigin:"100% 0%",opacity:0}}),nT={"slide-up":{inKeyframes:JR,outKeyframes:KR},"slide-down":{inKeyframes:YR,outKeyframes:XR},"slide-left":{inKeyframes:ZR,outKeyframes:QR},"slide-right":{inKeyframes:eT,outKeyframes:tT}},Ku=(e,t)=>{const{antCls:r}=e,i=`${r}-${t}`,{inKeyframes:o,outKeyframes:s}=nT[t];return[tv(i,o,s,e.motionDurationMid),{[`
      ${i}-enter,
      ${i}-appear
    `]:{transform:"scale(0)",transformOrigin:"0% 0%",opacity:0,animationTimingFunction:e.motionEaseOutQuint,"&-prepare":{transform:"scale(1)"}},[`${i}-leave`]:{animationTimingFunction:e.motionEaseInQuint}}]},rT=new cn("antZoomIn",{"0%":{transform:"scale(0.2)",opacity:0},"100%":{transform:"scale(1)",opacity:1}}),aT=new cn("antZoomOut",{"0%":{transform:"scale(1)"},"100%":{transform:"scale(0.2)",opacity:0}}),Ub=new cn("antZoomBigIn",{"0%":{transform:"scale(0.8)",opacity:0},"100%":{transform:"scale(1)",opacity:1}}),Wb=new cn("antZoomBigOut",{"0%":{transform:"scale(1)"},"100%":{transform:"scale(0.8)",opacity:0}}),iT=new cn("antZoomUpIn",{"0%":{transform:"scale(0.8)",transformOrigin:"50% 0%",opacity:0},"100%":{transform:"scale(1)",transformOrigin:"50% 0%"}}),oT=new cn("antZoomUpOut",{"0%":{transform:"scale(1)",transformOrigin:"50% 0%"},"100%":{transform:"scale(0.8)",transformOrigin:"50% 0%",opacity:0}}),lT=new cn("antZoomLeftIn",{"0%":{transform:"scale(0.8)",transformOrigin:"0% 50%",opacity:0},"100%":{transform:"scale(1)",transformOrigin:"0% 50%"}}),sT=new cn("antZoomLeftOut",{"0%":{transform:"scale(1)",transformOrigin:"0% 50%"},"100%":{transform:"scale(0.8)",transformOrigin:"0% 50%",opacity:0}}),cT=new cn("antZoomRightIn",{"0%":{transform:"scale(0.8)",transformOrigin:"100% 50%",opacity:0},"100%":{transform:"scale(1)",transformOrigin:"100% 50%"}}),uT=new cn("antZoomRightOut",{"0%":{transform:"scale(1)",transformOrigin:"100% 50%"},"100%":{transform:"scale(0.8)",transformOrigin:"100% 50%",opacity:0}}),dT=new cn("antZoomDownIn",{"0%":{transform:"scale(0.8)",transformOrigin:"50% 100%",opacity:0},"100%":{transform:"scale(1)",transformOrigin:"50% 100%"}}),fT=new cn("antZoomDownOut",{"0%":{transform:"scale(1)",transformOrigin:"50% 100%"},"100%":{transform:"scale(0.8)",transformOrigin:"50% 100%",opacity:0}}),mT={zoom:{inKeyframes:rT,outKeyframes:aT},"zoom-big":{inKeyframes:Ub,outKeyframes:Wb},"zoom-big-fast":{inKeyframes:Ub,outKeyframes:Wb},"zoom-left":{inKeyframes:lT,outKeyframes:sT},"zoom-right":{inKeyframes:cT,outKeyframes:uT},"zoom-up":{inKeyframes:iT,outKeyframes:oT},"zoom-down":{inKeyframes:dT,outKeyframes:fT}},gd=(e,t)=>{const{antCls:r}=e,i=`${r}-${t}`,{inKeyframes:o,outKeyframes:s}=mT[t];return[tv(i,o,s,t==="zoom-big-fast"?e.motionDurationFast:e.motionDurationMid),{[`
        ${i}-enter,
        ${i}-appear
      `]:{transform:"scale(0)",opacity:0,animationTimingFunction:e.motionEaseOutCirc,"&-prepare":{transform:"none"}},[`${i}-leave`]:{animationTimingFunction:e.motionEaseInOutCirc}}]},gT=(e,t)=>{const{r,g:i,b:o,a:s}=e.toRgb(),u=new Ws(e.toRgbString()).onBackground(t).toHsv();return s<=.5?u.v>.5:r*.299+i*.587+o*.114>192},qC=e=>{const{paddingInline:t,onlyIconSize:r}=e;return sn(e,{buttonPaddingHorizontal:t,buttonPaddingVertical:0,buttonIconOnlyFontSize:r})},JC=e=>{var t,r,i,o,s,u;const d=(t=e.contentFontSize)!==null&&t!==void 0?t:e.fontSize,m=(r=e.contentFontSizeSM)!==null&&r!==void 0?r:e.fontSize,h=(i=e.contentFontSizeLG)!==null&&i!==void 0?i:e.fontSizeLG,p=(o=e.contentLineHeight)!==null&&o!==void 0?o:Bu(d),y=(s=e.contentLineHeightSM)!==null&&s!==void 0?s:Bu(m),b=(u=e.contentLineHeightLG)!==null&&u!==void 0?u:Bu(h),w=gT(new jR(e.colorBgSolid),"#fff")?"#000":"#fff",C=Qi.reduce((x,S)=>Object.assign(Object.assign({},x),{[`${S}ShadowColor`]:`0 ${le(e.controlOutlineWidth)} 0 ${$s(e[`${S}1`],e.colorBgContainer)}`}),{});return Object.assign(Object.assign({},C),{fontWeight:400,defaultShadow:`0 ${e.controlOutlineWidth}px 0 ${e.controlTmpOutline}`,primaryShadow:`0 ${e.controlOutlineWidth}px 0 ${e.controlOutline}`,dangerShadow:`0 ${e.controlOutlineWidth}px 0 ${e.colorErrorOutline}`,primaryColor:e.colorTextLightSolid,dangerColor:e.colorTextLightSolid,borderColorDisabled:e.colorBorder,defaultGhostColor:e.colorBgContainer,ghostBg:"transparent",defaultGhostBorderColor:e.colorBgContainer,paddingInline:e.paddingContentHorizontal-e.lineWidth,paddingInlineLG:e.paddingContentHorizontal-e.lineWidth,paddingInlineSM:8-e.lineWidth,onlyIconSize:"inherit",onlyIconSizeSM:"inherit",onlyIconSizeLG:"inherit",groupBorderColor:e.colorPrimaryHover,linkHoverBg:"transparent",textTextColor:e.colorText,textTextHoverColor:e.colorText,textTextActiveColor:e.colorText,textHoverBg:e.colorFillTertiary,defaultColor:e.colorText,defaultBg:e.colorBgContainer,defaultBorderColor:e.colorBorder,defaultBorderColorDisabled:e.colorBorder,defaultHoverBg:e.colorBgContainer,defaultHoverColor:e.colorPrimaryHover,defaultHoverBorderColor:e.colorPrimaryHover,defaultActiveBg:e.colorBgContainer,defaultActiveColor:e.colorPrimaryActive,defaultActiveBorderColor:e.colorPrimaryActive,solidTextColor:w,contentFontSize:d,contentFontSizeSM:m,contentFontSizeLG:h,contentLineHeight:p,contentLineHeightSM:y,contentLineHeightLG:b,paddingBlock:Math.max((e.controlHeight-d*p)/2-e.lineWidth,0),paddingBlockSM:Math.max((e.controlHeightSM-m*y)/2-e.lineWidth,0),paddingBlockLG:Math.max((e.controlHeightLG-h*b)/2-e.lineWidth,0)})},hT=e=>{const{componentCls:t,iconCls:r,fontWeight:i,opacityLoading:o,motionDurationSlow:s,motionEaseInOut:u,marginXS:d,calc:m}=e;return{[t]:{outline:"none",position:"relative",display:"inline-flex",gap:e.marginXS,alignItems:"center",justifyContent:"center",fontWeight:i,whiteSpace:"nowrap",textAlign:"center",backgroundImage:"none",background:"transparent",border:`${le(e.lineWidth)} ${e.lineType} transparent`,cursor:"pointer",transition:`all ${e.motionDurationMid} ${e.motionEaseInOut}`,userSelect:"none",touchAction:"manipulation",color:e.colorText,"&:disabled > *":{pointerEvents:"none"},[`${t}-icon > svg`]:Xh(),"> a":{color:"currentColor"},"&:not(:disabled)":Us(e),[`&${t}-two-chinese-chars::first-letter`]:{letterSpacing:"0.34em"},[`&${t}-two-chinese-chars > *:not(${r})`]:{marginInlineEnd:"-0.34em",letterSpacing:"0.34em"},[`&${t}-icon-only`]:{paddingInline:0,[`&${t}-compact-item`]:{flex:"none"},[`&${t}-round`]:{width:"auto"}},[`&${t}-loading`]:{opacity:o,cursor:"default"},[`${t}-loading-icon`]:{transition:["width","opacity","margin"].map(h=>`${h} ${s} ${u}`).join(",")},[`&:not(${t}-icon-end)`]:{[`${t}-loading-icon-motion`]:{"&-appear-start, &-enter-start":{marginInlineEnd:m(d).mul(-1).equal()},"&-appear-active, &-enter-active":{marginInlineEnd:0},"&-leave-start":{marginInlineEnd:0},"&-leave-active":{marginInlineEnd:m(d).mul(-1).equal()}}},"&-icon-end":{flexDirection:"row-reverse",[`${t}-loading-icon-motion`]:{"&-appear-start, &-enter-start":{marginInlineStart:m(d).mul(-1).equal()},"&-appear-active, &-enter-active":{marginInlineStart:0},"&-leave-start":{marginInlineStart:0},"&-leave-active":{marginInlineStart:m(d).mul(-1).equal()}}}}}},KC=(e,t,r)=>({[`&:not(:disabled):not(${e}-disabled)`]:{"&:hover":t,"&:active":r}}),vT=e=>({minWidth:e.controlHeight,paddingInlineStart:0,paddingInlineEnd:0,borderRadius:"50%"}),pT=e=>({borderRadius:e.controlHeight,paddingInlineStart:e.calc(e.controlHeight).div(2).equal(),paddingInlineEnd:e.calc(e.controlHeight).div(2).equal()}),yT=e=>({cursor:"not-allowed",borderColor:e.borderColorDisabled,color:e.colorTextDisabled,background:e.colorBgContainerDisabled,boxShadow:"none"}),hd=(e,t,r,i,o,s,u,d)=>({[`&${e}-background-ghost`]:Object.assign(Object.assign({color:r||void 0,background:t,borderColor:i||void 0,boxShadow:"none"},KC(e,Object.assign({background:t},u),Object.assign({background:t},d))),{"&:disabled":{cursor:"not-allowed",color:o||void 0,borderColor:s||void 0}})}),bT=e=>({[`&:disabled, &${e.componentCls}-disabled`]:Object.assign({},yT(e))}),ST=e=>({[`&:disabled, &${e.componentCls}-disabled`]:{cursor:"not-allowed",color:e.colorTextDisabled}}),vd=(e,t,r,i)=>{const s=i&&["link","text"].includes(i)?ST:bT;return Object.assign(Object.assign({},s(e)),KC(e.componentCls,t,r))},pd=(e,t,r,i,o)=>({[`&${e.componentCls}-variant-solid`]:Object.assign({color:t,background:r},vd(e,i,o))}),yd=(e,t,r,i,o)=>({[`&${e.componentCls}-variant-outlined, &${e.componentCls}-variant-dashed`]:Object.assign({borderColor:t,background:r},vd(e,i,o))}),bd=e=>({[`&${e.componentCls}-variant-dashed`]:{borderStyle:"dashed"}}),Sd=(e,t,r,i)=>({[`&${e.componentCls}-variant-filled`]:Object.assign({boxShadow:"none",background:t},vd(e,r,i))}),pa=(e,t,r,i,o)=>({[`&${e.componentCls}-variant-${r}`]:Object.assign({color:t,boxShadow:"none"},vd(e,i,o,r))}),CT=e=>{const{componentCls:t}=e;return Qi.reduce((r,i)=>{const o=e[`${i}6`],s=e[`${i}1`],u=e[`${i}5`],d=e[`${i}2`],m=e[`${i}3`],h=e[`${i}7`];return Object.assign(Object.assign({},r),{[`&${t}-color-${i}`]:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({color:o,boxShadow:e[`${i}ShadowColor`]},pd(e,e.colorTextLightSolid,o,{background:u},{background:h})),yd(e,o,e.colorBgContainer,{color:u,borderColor:u,background:e.colorBgContainer},{color:h,borderColor:h,background:e.colorBgContainer})),bd(e)),Sd(e,s,{background:d},{background:m})),pa(e,o,"link",{color:u},{color:h})),pa(e,o,"text",{color:u,background:s},{color:h,background:m}))})},{})},wT=e=>Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({color:e.defaultColor,boxShadow:e.defaultShadow},pd(e,e.solidTextColor,e.colorBgSolid,{color:e.solidTextColor,background:e.colorBgSolidHover},{color:e.solidTextColor,background:e.colorBgSolidActive})),bd(e)),Sd(e,e.colorFillTertiary,{background:e.colorFillSecondary},{background:e.colorFill})),hd(e.componentCls,e.ghostBg,e.defaultGhostColor,e.defaultGhostBorderColor,e.colorTextDisabled,e.colorBorder)),pa(e,e.textTextColor,"link",{color:e.colorLinkHover,background:e.linkHoverBg},{color:e.colorLinkActive})),xT=e=>Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({color:e.colorPrimary,boxShadow:e.primaryShadow},yd(e,e.colorPrimary,e.colorBgContainer,{color:e.colorPrimaryTextHover,borderColor:e.colorPrimaryHover,background:e.colorBgContainer},{color:e.colorPrimaryTextActive,borderColor:e.colorPrimaryActive,background:e.colorBgContainer})),bd(e)),Sd(e,e.colorPrimaryBg,{background:e.colorPrimaryBgHover},{background:e.colorPrimaryBorder})),pa(e,e.colorPrimaryText,"text",{color:e.colorPrimaryTextHover,background:e.colorPrimaryBg},{color:e.colorPrimaryTextActive,background:e.colorPrimaryBorder})),pa(e,e.colorPrimaryText,"link",{color:e.colorPrimaryTextHover,background:e.linkHoverBg},{color:e.colorPrimaryTextActive})),hd(e.componentCls,e.ghostBg,e.colorPrimary,e.colorPrimary,e.colorTextDisabled,e.colorBorder,{color:e.colorPrimaryHover,borderColor:e.colorPrimaryHover},{color:e.colorPrimaryActive,borderColor:e.colorPrimaryActive})),ET=e=>Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({color:e.colorError,boxShadow:e.dangerShadow},pd(e,e.dangerColor,e.colorError,{background:e.colorErrorHover},{background:e.colorErrorActive})),yd(e,e.colorError,e.colorBgContainer,{color:e.colorErrorHover,borderColor:e.colorErrorBorderHover},{color:e.colorErrorActive,borderColor:e.colorErrorActive})),bd(e)),Sd(e,e.colorErrorBg,{background:e.colorErrorBgFilledHover},{background:e.colorErrorBgActive})),pa(e,e.colorError,"text",{color:e.colorErrorHover,background:e.colorErrorBg},{color:e.colorErrorHover,background:e.colorErrorBgActive})),pa(e,e.colorError,"link",{color:e.colorErrorHover},{color:e.colorErrorActive})),hd(e.componentCls,e.ghostBg,e.colorError,e.colorError,e.colorTextDisabled,e.colorBorder,{color:e.colorErrorHover,borderColor:e.colorErrorHover},{color:e.colorErrorActive,borderColor:e.colorErrorActive})),$T=e=>Object.assign(Object.assign({},pa(e,e.colorLink,"link",{color:e.colorLinkHover},{color:e.colorLinkActive})),hd(e.componentCls,e.ghostBg,e.colorInfo,e.colorInfo,e.colorTextDisabled,e.colorBorder,{color:e.colorInfoHover,borderColor:e.colorInfoHover},{color:e.colorInfoActive,borderColor:e.colorInfoActive})),RT=e=>{const{componentCls:t}=e;return Object.assign({[`${t}-color-default`]:wT(e),[`${t}-color-primary`]:xT(e),[`${t}-color-dangerous`]:ET(e),[`${t}-color-link`]:$T(e)},CT(e))},TT=e=>Object.assign(Object.assign(Object.assign(Object.assign({},yd(e,e.defaultBorderColor,e.defaultBg,{color:e.defaultHoverColor,borderColor:e.defaultHoverBorderColor,background:e.defaultHoverBg},{color:e.defaultActiveColor,borderColor:e.defaultActiveBorderColor,background:e.defaultActiveBg})),pa(e,e.textTextColor,"text",{color:e.textTextHoverColor,background:e.textHoverBg},{color:e.textTextActiveColor,background:e.colorBgTextActive})),pd(e,e.primaryColor,e.colorPrimary,{background:e.colorPrimaryHover,color:e.primaryColor},{background:e.colorPrimaryActive,color:e.primaryColor})),pa(e,e.colorLink,"link",{color:e.colorLinkHover,background:e.linkHoverBg},{color:e.colorLinkActive})),nv=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const{componentCls:r,controlHeight:i,fontSize:o,borderRadius:s,buttonPaddingHorizontal:u,iconCls:d,buttonPaddingVertical:m,buttonIconOnlyFontSize:h}=e;return[{[t]:{fontSize:o,height:i,padding:`${le(m)} ${le(u)}`,borderRadius:s,[`&${r}-icon-only`]:{width:i,[d]:{fontSize:h}}}},{[`${r}${r}-circle${t}`]:vT(e)},{[`${r}${r}-round${t}`]:pT(e)}]},OT=e=>{const t=sn(e,{fontSize:e.contentFontSize});return nv(t,e.componentCls)},MT=e=>{const t=sn(e,{controlHeight:e.controlHeightSM,fontSize:e.contentFontSizeSM,padding:e.paddingXS,buttonPaddingHorizontal:e.paddingInlineSM,buttonPaddingVertical:0,borderRadius:e.borderRadiusSM,buttonIconOnlyFontSize:e.onlyIconSizeSM});return nv(t,`${e.componentCls}-sm`)},AT=e=>{const t=sn(e,{controlHeight:e.controlHeightLG,fontSize:e.contentFontSizeLG,buttonPaddingHorizontal:e.paddingInlineLG,buttonPaddingVertical:0,borderRadius:e.borderRadiusLG,buttonIconOnlyFontSize:e.onlyIconSizeLG});return nv(t,`${e.componentCls}-lg`)},NT=e=>{const{componentCls:t}=e;return{[t]:{[`&${t}-block`]:{width:"100%"}}}},PT=rr("Button",e=>{const t=qC(e);return[hT(t),OT(t),MT(t),AT(t),NT(t),RT(t),TT(t),_R(t)]},JC,{unitless:{fontWeight:!0,contentLineHeight:!0,contentLineHeightSM:!0,contentLineHeightLG:!0}});function _T(e,t,r){const{focusElCls:i,focus:o,borderElCls:s}=r,u=s?"> *":"",d=["hover",o?"focus":null,"active"].filter(Boolean).map(m=>`&:${m} ${u}`).join(",");return{[`&-item:not(${t}-last-item)`]:{marginInlineEnd:e.calc(e.lineWidth).mul(-1).equal()},"&-item":Object.assign(Object.assign({[d]:{zIndex:2}},i?{[`&${i}`]:{zIndex:2}}:{}),{[`&[disabled] ${u}`]:{zIndex:0}})}}function DT(e,t,r){const{borderElCls:i}=r,o=i?`> ${i}`:"";return{[`&-item:not(${t}-first-item):not(${t}-last-item) ${o}`]:{borderRadius:0},[`&-item:not(${t}-last-item)${t}-first-item`]:{[`& ${o}, &${e}-sm ${o}, &${e}-lg ${o}`]:{borderStartEndRadius:0,borderEndEndRadius:0}},[`&-item:not(${t}-first-item)${t}-last-item`]:{[`& ${o}, &${e}-sm ${o}, &${e}-lg ${o}`]:{borderStartStartRadius:0,borderEndStartRadius:0}}}}function YC(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{focus:!0};const{componentCls:r}=e,i=`${r}-compact`;return{[i]:Object.assign(Object.assign({},_T(e,i,t)),DT(r,i,t))}}function zT(e,t){return{[`&-item:not(${t}-last-item)`]:{marginBottom:e.calc(e.lineWidth).mul(-1).equal()},"&-item":{"&:hover,&:focus,&:active":{zIndex:2},"&[disabled]":{zIndex:0}}}}function LT(e,t){return{[`&-item:not(${t}-first-item):not(${t}-last-item)`]:{borderRadius:0},[`&-item${t}-first-item:not(${t}-last-item)`]:{[`&, &${e}-sm, &${e}-lg`]:{borderEndEndRadius:0,borderEndStartRadius:0}},[`&-item${t}-last-item:not(${t}-first-item)`]:{[`&, &${e}-sm, &${e}-lg`]:{borderStartStartRadius:0,borderStartEndRadius:0}}}}function HT(e){const t=`${e.componentCls}-compact-vertical`;return{[t]:Object.assign(Object.assign({},zT(e,t)),LT(e.componentCls,t))}}const BT=e=>{const{componentCls:t,colorPrimaryHover:r,lineWidth:i,calc:o}=e,s=o(i).mul(-1).equal(),u=d=>{const m=`${t}-compact${d?"-vertical":""}-item${t}-primary:not([disabled])`;return{[`${m} + ${m}::before`]:{position:"absolute",top:d?s:0,insetInlineStart:d?0:s,backgroundColor:r,content:'""',width:d?"100%":i,height:d?i:"100%"}}};return Object.assign(Object.assign({},u()),u(!0))},IT=Z8(["Button","compact"],e=>{const t=qC(e);return[YC(t),HT(t),BT(t)]},JC);var jT=function(e,t){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(r[i]=e[i]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(r[i[o]]=e[i[o]]);return r};function kT(e){if(typeof e=="object"&&e){let t=e==null?void 0:e.delay;return t=!Number.isNaN(t)&&typeof t=="number"?t:0,{loading:t<=0,delay:t}}return{loading:!!e,delay:0}}const FT={default:["default","outlined"],primary:["primary","solid"],dashed:["default","dashed"],link:["link","link"],text:["default","text"]},VT=he.forwardRef((e,t)=>{var r,i;const{loading:o=!1,prefixCls:s,color:u,variant:d,type:m,danger:h=!1,shape:p="default",size:y,styles:b,disabled:w,className:C,rootClassName:x,children:S,icon:$,iconPosition:R="start",ghost:T=!1,block:z=!1,htmlType:O="button",classNames:A,style:P={},autoInsertSpace:B,autoFocus:N}=e,H=jT(e,["loading","prefixCls","color","variant","type","danger","shape","size","styles","disabled","className","rootClassName","children","icon","iconPosition","ghost","block","htmlType","classNames","style","autoInsertSpace","autoFocus"]),j=m||"default",[W,V]=f.useMemo(()=>{if(u&&d)return[u,d];const Ye=FT[j]||[];return h?["danger",Ye[1]]:Ye},[m,u,d,h]),Z=W==="danger"?"dangerous":W,{getPrefixCls:_,direction:L,autoInsertSpace:F,className:Y,style:M,classNames:k,styles:K}=io("button"),X=(r=B??F)!==null&&r!==void 0?r:!0,I=_("btn",s),[te,ne,fe]=PT(I),ae=f.useContext(Zi),ce=w??ae,de=f.useContext(UC),xe=f.useMemo(()=>kT(o),[o]),[Se,Oe]=f.useState(xe.loading),[Ce,we]=f.useState(!1),be=f.useRef(null),De=ro(t,be),Te=f.Children.count(S)===1&&!$&&!eg(V),Be=f.useRef(!0);he.useEffect(()=>(Be.current=!1,()=>{Be.current=!0}),[]),f.useEffect(()=>{let Ye=null;xe.delay>0?Ye=setTimeout(()=>{Ye=null,Oe(!0)},xe.delay):Oe(xe.loading);function Je(){Ye&&(clearTimeout(Ye),Ye=null)}return Je},[xe]),f.useEffect(()=>{if(!be.current||!X)return;const Ye=be.current.textContent||"";Te&&Qg(Ye)?Ce||we(!0):Ce&&we(!1)}),f.useEffect(()=>{N&&be.current&&be.current.focus()},[]);const Ne=he.useCallback(Ye=>{var Je;if(Se||ce){Ye.preventDefault();return}(Je=e.onClick)===null||Je===void 0||Je.call(e,("href"in e,Ye))},[e.onClick,Se,ce]),{compactSize:$e,compactItemClassnames:Fe}=md(I,L),ye={large:"lg",small:"sm",middle:void 0},Re=lo(Ye=>{var Je,nt;return(nt=(Je=y??$e)!==null&&Je!==void 0?Je:de)!==null&&nt!==void 0?nt:Ye}),Ue=Re&&(i=ye[Re])!==null&&i!==void 0?i:"",Ie=Se?"loading":$,at=dr(H,["navigate"]),qe=ue(I,ne,fe,{[`${I}-${p}`]:p!=="default"&&p,[`${I}-${j}`]:j,[`${I}-dangerous`]:h,[`${I}-color-${Z}`]:Z,[`${I}-variant-${V}`]:V,[`${I}-${Ue}`]:Ue,[`${I}-icon-only`]:!S&&S!==0&&!!Ie,[`${I}-background-ghost`]:T&&!eg(V),[`${I}-loading`]:Se,[`${I}-two-chinese-chars`]:Ce&&X&&!Se,[`${I}-block`]:z,[`${I}-rtl`]:L==="rtl",[`${I}-icon-end`]:R==="end"},Fe,C,x,Y),Ke=Object.assign(Object.assign({},M),P),Xe=ue(A==null?void 0:A.icon,k.icon),et=Object.assign(Object.assign({},(b==null?void 0:b.icon)||{}),K.icon||{}),it=$&&!Se?he.createElement(eh,{prefixCls:I,className:Xe,style:et},$):o&&typeof o=="object"&&o.icon?he.createElement(eh,{prefixCls:I,className:Xe,style:et},o.icon):he.createElement(PR,{existIcon:!!$,prefixCls:I,loading:Se,mount:Be.current}),je=S||S===0?NR(S,Te&&X):null;if(at.href!==void 0)return te(he.createElement("a",Object.assign({},at,{className:ue(qe,{[`${I}-disabled`]:ce}),href:ce?void 0:at.href,style:Ke,onClick:Ne,ref:De,tabIndex:ce?-1:0}),it,je));let Ee=he.createElement("button",Object.assign({},H,{type:O,className:qe,style:Ke,onClick:Ne,disabled:ce,ref:De}),it,je,Fe&&he.createElement(IT,{prefixCls:I}));return eg(V)||(Ee=he.createElement(RR,{component:"Button",disabled:Se},Ee)),te(Ee)}),qs=VT;qs.Group=MR;qs.__ANT_BUTTON=!0;var XC=f.createContext(null),qb=[];function GT(e,t){var r=f.useState(function(){if(!Mr())return null;var C=document.createElement("div");return C}),i=oe(r,1),o=i[0],s=f.useRef(!1),u=f.useContext(XC),d=f.useState(qb),m=oe(d,2),h=m[0],p=m[1],y=u||(s.current?void 0:function(C){p(function(x){var S=[C].concat(Le(x));return S})});function b(){o.parentElement||document.body.appendChild(o),s.current=!0}function w(){var C;(C=o.parentElement)===null||C===void 0||C.removeChild(o),s.current=!1}return _n(function(){return e?u?u(b):b():w(),w},[e]),_n(function(){h.length&&(h.forEach(function(C){return C()}),p(qb))},[h]),[o,y]}function UT(e){var t="rc-scrollbar-measure-".concat(Math.random().toString(36).substring(7)),r=document.createElement("div");r.id=t;var i=r.style;i.position="absolute",i.left="0",i.top="0",i.width="100px",i.height="100px",i.overflow="scroll";var o,s;if(e){var u=getComputedStyle(e);i.scrollbarColor=u.scrollbarColor,i.scrollbarWidth=u.scrollbarWidth;var d=getComputedStyle(e,"::-webkit-scrollbar"),m=parseInt(d.width,10),h=parseInt(d.height,10);try{var p=m?"width: ".concat(d.width,";"):"",y=h?"height: ".concat(d.height,";"):"";ka(`
#`.concat(t,`::-webkit-scrollbar {
`).concat(p,`
`).concat(y,`
}`),t)}catch(C){console.error(C),o=m,s=h}}document.body.appendChild(r);var b=e&&o&&!isNaN(o)?o:r.offsetWidth-r.clientWidth,w=e&&s&&!isNaN(s)?s:r.offsetHeight-r.clientHeight;return document.body.removeChild(r),Is(t),{width:b,height:w}}function WT(e){return typeof document>"u"||!e||!(e instanceof Element)?{width:0,height:0}:UT(e)}function qT(){return document.body.scrollHeight>(window.innerHeight||document.documentElement.clientHeight)&&window.innerWidth>document.body.offsetWidth}var JT="rc-util-locker-".concat(Date.now()),Jb=0;function KT(e){var t=!!e,r=f.useState(function(){return Jb+=1,"".concat(JT,"_").concat(Jb)}),i=oe(r,1),o=i[0];_n(function(){if(t){var s=WT(document.body).width,u=qT();ka(`
html body {
  overflow-y: hidden;
  `.concat(u?"width: calc(100% - ".concat(s,"px);"):"",`
}`),o)}else Is(o);return function(){Is(o)}},[t,o])}var YT=!1;function XT(e){return YT}var Kb=function(t){return t===!1?!1:!Mr()||!t?null:typeof t=="string"?document.querySelector(t):typeof t=="function"?t():t},Cd=f.forwardRef(function(e,t){var r=e.open,i=e.autoLock,o=e.getContainer;e.debug;var s=e.autoDestroy,u=s===void 0?!0:s,d=e.children,m=f.useState(r),h=oe(m,2),p=h[0],y=h[1],b=p||r;f.useEffect(function(){(u||r)&&y(r)},[r,u]);var w=f.useState(function(){return Kb(o)}),C=oe(w,2),x=C[0],S=C[1];f.useEffect(function(){var j=Kb(o);S(j??null)});var $=GT(b&&!x),R=oe($,2),T=R[0],z=R[1],O=x??T;KT(i&&r&&Mr()&&(O===T||O===document.body));var A=null;if(d&&ao(d)&&t){var P=d;A=P.ref}var B=ro(A,t);if(!b||!Mr()||x===void 0)return null;var N=O===!1||XT(),H=d;return t&&(H=f.cloneElement(d,{ref:B})),f.createElement(XC.Provider,{value:z},N?H:ec.createPortal(H,O))}),ZC=f.createContext({});function ZT(){var e=q({},nd);return e.useId}var Yb=0,Xb=ZT();const rv=Xb?function(t){var r=Xb();return t||r}:function(t){var r=f.useState("ssr-id"),i=oe(r,2),o=i[0],s=i[1];return f.useEffect(function(){var u=Yb;Yb+=1,s("rc_unique_".concat(u))},[]),t||o};function Zb(e,t,r){var i=t;return!i&&r&&(i="".concat(e,"-").concat(r)),i}function Qb(e,t){var r=e["page".concat(t?"Y":"X","Offset")],i="scroll".concat(t?"Top":"Left");if(typeof r!="number"){var o=e.document;r=o.documentElement[i],typeof r!="number"&&(r=o.body[i])}return r}function QT(e){var t=e.getBoundingClientRect(),r={left:t.left,top:t.top},i=e.ownerDocument,o=i.defaultView||i.parentWindow;return r.left+=Qb(o),r.top+=Qb(o,!0),r}const e4=f.memo(function(e){var t=e.children;return t},function(e,t){var r=t.shouldUpdate;return!r});var t4={width:0,height:0,overflow:"hidden",outline:"none"},n4={outline:"none"},r4=he.forwardRef(function(e,t){var r=e.prefixCls,i=e.className,o=e.style,s=e.title,u=e.ariaId,d=e.footer,m=e.closable,h=e.closeIcon,p=e.onClose,y=e.children,b=e.bodyStyle,w=e.bodyProps,C=e.modalRender,x=e.onMouseDown,S=e.onMouseUp,$=e.holderRef,R=e.visible,T=e.forceRender,z=e.width,O=e.height,A=e.classNames,P=e.styles,B=he.useContext(ZC),N=B.panel,H=ro($,N),j=f.useRef(),W=f.useRef();he.useImperativeHandle(t,function(){return{focus:function(){var K;(K=j.current)===null||K===void 0||K.focus({preventScroll:!0})},changeActive:function(K){var X=document,I=X.activeElement;K&&I===W.current?j.current.focus({preventScroll:!0}):!K&&I===j.current&&W.current.focus({preventScroll:!0})}}});var V={};z!==void 0&&(V.width=z),O!==void 0&&(V.height=O);var U=d?he.createElement("div",{className:ue("".concat(r,"-footer"),A==null?void 0:A.footer),style:q({},P==null?void 0:P.footer)},d):null,Z=s?he.createElement("div",{className:ue("".concat(r,"-header"),A==null?void 0:A.header),style:q({},P==null?void 0:P.header)},he.createElement("div",{className:"".concat(r,"-title"),id:u},s)):null,_=f.useMemo(function(){return Ge(m)==="object"&&m!==null?m:m?{closeIcon:h??he.createElement("span",{className:"".concat(r,"-close-x")})}:{}},[m,h,r]),L=Qh(_,!0),F=Ge(m)==="object"&&m.disabled,Y=m?he.createElement("button",Me({type:"button",onClick:p,"aria-label":"Close"},L,{className:"".concat(r,"-close"),disabled:F}),_.closeIcon):null,M=he.createElement("div",{className:ue("".concat(r,"-content"),A==null?void 0:A.content),style:P==null?void 0:P.content},Y,Z,he.createElement("div",Me({className:ue("".concat(r,"-body"),A==null?void 0:A.body),style:q(q({},b),P==null?void 0:P.body)},w),y),U);return he.createElement("div",{key:"dialog-element",role:"dialog","aria-labelledby":s?u:null,"aria-modal":"true",ref:H,style:q(q({},o),V),className:ue(r,i),onMouseDown:x,onMouseUp:S},he.createElement("div",{ref:j,tabIndex:0,style:n4},he.createElement(e4,{shouldUpdate:R||T},C?C(M):M)),he.createElement("div",{tabIndex:0,ref:W,style:t4}))}),QC=f.forwardRef(function(e,t){var r=e.prefixCls,i=e.title,o=e.style,s=e.className,u=e.visible,d=e.forceRender,m=e.destroyOnClose,h=e.motionName,p=e.ariaId,y=e.onVisibleChanged,b=e.mousePosition,w=f.useRef(),C=f.useState(),x=oe(C,2),S=x[0],$=x[1],R={};S&&(R.transformOrigin=S);function T(){var z=QT(w.current);$(b&&(b.x||b.y)?"".concat(b.x-z.left,"px ").concat(b.y-z.top,"px"):"")}return f.createElement(ba,{visible:u,onVisibleChanged:y,onAppearPrepare:T,onEnterPrepare:T,forceRender:d,motionName:h,removeOnLeave:m,ref:w},function(z,O){var A=z.className,P=z.style;return f.createElement(r4,Me({},e,{ref:t,title:i,ariaId:p,prefixCls:r,holderRef:O,style:q(q(q({},P),o),R),className:ue(s,A)}))})});QC.displayName="Content";var a4=function(t){var r=t.prefixCls,i=t.style,o=t.visible,s=t.maskProps,u=t.motionName,d=t.className;return f.createElement(ba,{key:"mask",visible:o,motionName:u,leavedClassName:"".concat(r,"-mask-hidden")},function(m,h){var p=m.className,y=m.style;return f.createElement("div",Me({ref:h,style:q(q({},y),i),className:ue("".concat(r,"-mask"),p,d)},s))})},i4=function(t){var r=t.prefixCls,i=r===void 0?"rc-dialog":r,o=t.zIndex,s=t.visible,u=s===void 0?!1:s,d=t.keyboard,m=d===void 0?!0:d,h=t.focusTriggerAfterClose,p=h===void 0?!0:h,y=t.wrapStyle,b=t.wrapClassName,w=t.wrapProps,C=t.onClose,x=t.afterOpenChange,S=t.afterClose,$=t.transitionName,R=t.animation,T=t.closable,z=T===void 0?!0:T,O=t.mask,A=O===void 0?!0:O,P=t.maskTransitionName,B=t.maskAnimation,N=t.maskClosable,H=N===void 0?!0:N,j=t.maskStyle,W=t.maskProps,V=t.rootClassName,U=t.classNames,Z=t.styles,_=f.useRef(),L=f.useRef(),F=f.useRef(),Y=f.useState(u),M=oe(Y,2),k=M[0],K=M[1],X=rv();function I(){xg(L.current,document.activeElement)||(_.current=document.activeElement)}function te(){if(!xg(L.current,document.activeElement)){var we;(we=F.current)===null||we===void 0||we.focus()}}function ne(we){if(we)te();else{if(K(!1),A&&_.current&&p){try{_.current.focus({preventScroll:!0})}catch{}_.current=null}k&&(S==null||S())}x==null||x(we)}function fe(we){C==null||C(we)}var ae=f.useRef(!1),ce=f.useRef(),de=function(){clearTimeout(ce.current),ae.current=!0},xe=function(){ce.current=setTimeout(function(){ae.current=!1})},Se=null;H&&(Se=function(be){ae.current?ae.current=!1:L.current===be.target&&fe(be)});function Oe(we){if(m&&we.keyCode===rn.ESC){we.stopPropagation(),fe(we);return}u&&we.keyCode===rn.TAB&&F.current.changeActive(!we.shiftKey)}f.useEffect(function(){u&&(K(!0),I())},[u]),f.useEffect(function(){return function(){clearTimeout(ce.current)}},[]);var Ce=q(q(q({zIndex:o},y),Z==null?void 0:Z.wrapper),{},{display:k?null:"none"});return f.createElement("div",Me({className:ue("".concat(i,"-root"),V)},Qh(t,{data:!0})),f.createElement(a4,{prefixCls:i,visible:A&&u,motionName:Zb(i,P,B),style:q(q({zIndex:o},j),Z==null?void 0:Z.mask),maskProps:W,className:U==null?void 0:U.mask}),f.createElement("div",Me({tabIndex:-1,onKeyDown:Oe,className:ue("".concat(i,"-wrap"),b,U==null?void 0:U.wrapper),ref:L,onClick:Se,style:Ce},w),f.createElement(QC,Me({},t,{onMouseDown:de,onMouseUp:xe,ref:F,closable:z,ariaId:X,prefixCls:i,visible:u&&k,onClose:fe,onVisibleChanged:ne,motionName:Zb(i,$,R)}))))},e2=function(t){var r=t.visible,i=t.getContainer,o=t.forceRender,s=t.destroyOnClose,u=s===void 0?!1:s,d=t.afterClose,m=t.panelRef,h=f.useState(r),p=oe(h,2),y=p[0],b=p[1],w=f.useMemo(function(){return{panel:m}},[m]);return f.useEffect(function(){r&&b(!0)},[r]),!o&&u&&!y?null:f.createElement(ZC.Provider,{value:w},f.createElement(Cd,{open:r||o||y,autoDestroy:!1,getContainer:i,autoLock:r||y},f.createElement(i4,Me({},t,{destroyOnClose:u,afterClose:function(){d==null||d(),b(!1)}}))))};e2.displayName="Dialog";var Yi="RC_FORM_INTERNAL_HOOKS",Wt=function(){cr(!1,"Can not find FormContext. Please make sure you wrap Field under Form.")},dl=f.createContext({getFieldValue:Wt,getFieldsValue:Wt,getFieldError:Wt,getFieldWarning:Wt,getFieldsError:Wt,isFieldsTouched:Wt,isFieldTouched:Wt,isFieldValidating:Wt,isFieldsValidating:Wt,resetFields:Wt,setFields:Wt,setFieldValue:Wt,setFieldsValue:Wt,validateFields:Wt,submit:Wt,getInternalHooks:function(){return Wt(),{dispatch:Wt,initEntityValue:Wt,registerField:Wt,useSubscribe:Wt,setInitialValues:Wt,destroyForm:Wt,setCallbacks:Wt,registerWatch:Wt,getFields:Wt,setValidateMessages:Wt,setPreserve:Wt,getInitialValue:Wt}}}),Yu=f.createContext(null);function nh(e){return e==null?[]:Array.isArray(e)?e:[e]}function o4(e){return e&&!!e._init}function rh(){return{default:"Validation error on field %s",required:"%s is required",enum:"%s must be one of %s",whitespace:"%s cannot be empty",date:{format:"%s date %s is invalid for format %s",parse:"%s date could not be parsed, %s is invalid ",invalid:"%s date %s is invalid"},types:{string:"%s is not a %s",method:"%s is not a %s (function)",array:"%s is not an %s",object:"%s is not an %s",number:"%s is not a %s",date:"%s is not a %s",boolean:"%s is not a %s",integer:"%s is not an %s",float:"%s is not a %s",regexp:"%s is not a valid %s",email:"%s is not a valid %s",url:"%s is not a valid %s",hex:"%s is not a valid %s"},string:{len:"%s must be exactly %s characters",min:"%s must be at least %s characters",max:"%s cannot be longer than %s characters",range:"%s must be between %s and %s characters"},number:{len:"%s must equal %s",min:"%s cannot be less than %s",max:"%s cannot be greater than %s",range:"%s must be between %s and %s"},array:{len:"%s must be exactly %s in length",min:"%s cannot be less than %s in length",max:"%s cannot be greater than %s in length",range:"%s must be between %s and %s in length"},pattern:{mismatch:"%s value %s does not match pattern %s"},clone:function(){var t=JSON.parse(JSON.stringify(this));return t.clone=this.clone,t}}}var ah=rh();function l4(e){try{return Function.toString.call(e).indexOf("[native code]")!==-1}catch{return typeof e=="function"}}function s4(e,t,r){if(jh())return Reflect.construct.apply(null,arguments);var i=[null];i.push.apply(i,t);var o=new(e.bind.apply(e,i));return r&&Ls(o,r.prototype),o}function ih(e){var t=typeof Map=="function"?new Map:void 0;return ih=function(i){if(i===null||!l4(i))return i;if(typeof i!="function")throw new TypeError("Super expression must either be null or a function");if(t!==void 0){if(t.has(i))return t.get(i);t.set(i,o)}function o(){return s4(i,arguments,Hs(this).constructor)}return o.prototype=Object.create(i.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),Ls(o,i)},ih(e)}var c4=/%[sdj%]/g,u4=function(){};function oh(e){if(!e||!e.length)return null;var t={};return e.forEach(function(r){var i=r.field;t[i]=t[i]||[],t[i].push(r)}),t}function Tr(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];var o=0,s=r.length;if(typeof e=="function")return e.apply(null,r);if(typeof e=="string"){var u=e.replace(c4,function(d){if(d==="%%")return"%";if(o>=s)return d;switch(d){case"%s":return String(r[o++]);case"%d":return Number(r[o++]);case"%j":try{return JSON.stringify(r[o++])}catch{return"[Circular]"}break;default:return d}});return u}return e}function d4(e){return e==="string"||e==="url"||e==="hex"||e==="email"||e==="date"||e==="pattern"}function Dn(e,t){return!!(e==null||t==="array"&&Array.isArray(e)&&!e.length||d4(t)&&typeof e=="string"&&!e)}function f4(e,t,r){var i=[],o=0,s=e.length;function u(d){i.push.apply(i,Le(d||[])),o++,o===s&&r(i)}e.forEach(function(d){t(d,u)})}function e1(e,t,r){var i=0,o=e.length;function s(u){if(u&&u.length){r(u);return}var d=i;i=i+1,d<o?t(e[d],s):r([])}s([])}function m4(e){var t=[];return Object.keys(e).forEach(function(r){t.push.apply(t,Le(e[r]||[]))}),t}var t1=function(e){Wa(r,e);var t=qa(r);function r(i,o){var s;return zn(this,r),s=t.call(this,"Async Validation Error"),J(mt(s),"errors",void 0),J(mt(s),"fields",void 0),s.errors=i,s.fields=o,s}return Ln(r)}(ih(Error));function g4(e,t,r,i,o){if(t.first){var s=new Promise(function(b,w){var C=function($){return i($),$.length?w(new t1($,oh($))):b(o)},x=m4(e);e1(x,r,C)});return s.catch(function(b){return b}),s}var u=t.firstFields===!0?Object.keys(e):t.firstFields||[],d=Object.keys(e),m=d.length,h=0,p=[],y=new Promise(function(b,w){var C=function(S){if(p.push.apply(p,S),h++,h===m)return i(p),p.length?w(new t1(p,oh(p))):b(o)};d.length||(i(p),b(o)),d.forEach(function(x){var S=e[x];u.indexOf(x)!==-1?e1(S,r,C):f4(S,r,C)})});return y.catch(function(b){return b}),y}function h4(e){return!!(e&&e.message!==void 0)}function v4(e,t){for(var r=e,i=0;i<t.length;i++){if(r==null)return r;r=r[t[i]]}return r}function n1(e,t){return function(r){var i;return e.fullFields?i=v4(t,e.fullFields):i=t[r.field||e.fullField],h4(r)?(r.field=r.field||e.fullField,r.fieldValue=i,r):{message:typeof r=="function"?r():r,fieldValue:i,field:r.field||e.fullField}}}function r1(e,t){if(t){for(var r in t)if(t.hasOwnProperty(r)){var i=t[r];Ge(i)==="object"&&Ge(e[r])==="object"?e[r]=q(q({},e[r]),i):e[r]=i}}return e}var Io="enum",p4=function(t,r,i,o,s){t[Io]=Array.isArray(t[Io])?t[Io]:[],t[Io].indexOf(r)===-1&&o.push(Tr(s.messages[Io],t.fullField,t[Io].join(", ")))},y4=function(t,r,i,o,s){if(t.pattern){if(t.pattern instanceof RegExp)t.pattern.lastIndex=0,t.pattern.test(r)||o.push(Tr(s.messages.pattern.mismatch,t.fullField,r,t.pattern));else if(typeof t.pattern=="string"){var u=new RegExp(t.pattern);u.test(r)||o.push(Tr(s.messages.pattern.mismatch,t.fullField,r,t.pattern))}}},b4=function(t,r,i,o,s){var u=typeof t.len=="number",d=typeof t.min=="number",m=typeof t.max=="number",h=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,p=r,y=null,b=typeof r=="number",w=typeof r=="string",C=Array.isArray(r);if(b?y="number":w?y="string":C&&(y="array"),!y)return!1;C&&(p=r.length),w&&(p=r.replace(h,"_").length),u?p!==t.len&&o.push(Tr(s.messages[y].len,t.fullField,t.len)):d&&!m&&p<t.min?o.push(Tr(s.messages[y].min,t.fullField,t.min)):m&&!d&&p>t.max?o.push(Tr(s.messages[y].max,t.fullField,t.max)):d&&m&&(p<t.min||p>t.max)&&o.push(Tr(s.messages[y].range,t.fullField,t.min,t.max))},t2=function(t,r,i,o,s,u){t.required&&(!i.hasOwnProperty(t.field)||Dn(r,u||t.type))&&o.push(Tr(s.messages.required,t.fullField))},Su;const S4=function(){if(Su)return Su;var e="[a-fA-F\\d:]",t=function(A){return A&&A.includeBoundaries?"(?:(?<=\\s|^)(?=".concat(e,")|(?<=").concat(e,")(?=\\s|$))"):""},r="(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",i="[a-fA-F\\d]{1,4}",o=["(?:".concat(i,":){7}(?:").concat(i,"|:)"),"(?:".concat(i,":){6}(?:").concat(r,"|:").concat(i,"|:)"),"(?:".concat(i,":){5}(?::").concat(r,"|(?::").concat(i,"){1,2}|:)"),"(?:".concat(i,":){4}(?:(?::").concat(i,"){0,1}:").concat(r,"|(?::").concat(i,"){1,3}|:)"),"(?:".concat(i,":){3}(?:(?::").concat(i,"){0,2}:").concat(r,"|(?::").concat(i,"){1,4}|:)"),"(?:".concat(i,":){2}(?:(?::").concat(i,"){0,3}:").concat(r,"|(?::").concat(i,"){1,5}|:)"),"(?:".concat(i,":){1}(?:(?::").concat(i,"){0,4}:").concat(r,"|(?::").concat(i,"){1,6}|:)"),"(?::(?:(?::".concat(i,"){0,5}:").concat(r,"|(?::").concat(i,"){1,7}|:))")],s="(?:%[0-9a-zA-Z]{1,})?",u="(?:".concat(o.join("|"),")").concat(s),d=new RegExp("(?:^".concat(r,"$)|(?:^").concat(u,"$)")),m=new RegExp("^".concat(r,"$")),h=new RegExp("^".concat(u,"$")),p=function(A){return A&&A.exact?d:new RegExp("(?:".concat(t(A)).concat(r).concat(t(A),")|(?:").concat(t(A)).concat(u).concat(t(A),")"),"g")};p.v4=function(O){return O&&O.exact?m:new RegExp("".concat(t(O)).concat(r).concat(t(O)),"g")},p.v6=function(O){return O&&O.exact?h:new RegExp("".concat(t(O)).concat(u).concat(t(O)),"g")};var y="(?:(?:[a-z]+:)?//)",b="(?:\\S+(?::\\S*)?@)?",w=p.v4().source,C=p.v6().source,x="(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)",S="(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*",$="(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))",R="(?::\\d{2,5})?",T='(?:[/?#][^\\s"]*)?',z="(?:".concat(y,"|www\\.)").concat(b,"(?:localhost|").concat(w,"|").concat(C,"|").concat(x).concat(S).concat($,")").concat(R).concat(T);return Su=new RegExp("(?:^".concat(z,"$)"),"i"),Su};var a1={email:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,hex:/^#?([a-f0-9]{6}|[a-f0-9]{3})$/i},Rs={integer:function(t){return Rs.number(t)&&parseInt(t,10)===t},float:function(t){return Rs.number(t)&&!Rs.integer(t)},array:function(t){return Array.isArray(t)},regexp:function(t){if(t instanceof RegExp)return!0;try{return!!new RegExp(t)}catch{return!1}},date:function(t){return typeof t.getTime=="function"&&typeof t.getMonth=="function"&&typeof t.getYear=="function"&&!isNaN(t.getTime())},number:function(t){return isNaN(t)?!1:typeof t=="number"},object:function(t){return Ge(t)==="object"&&!Rs.array(t)},method:function(t){return typeof t=="function"},email:function(t){return typeof t=="string"&&t.length<=320&&!!t.match(a1.email)},url:function(t){return typeof t=="string"&&t.length<=2048&&!!t.match(S4())},hex:function(t){return typeof t=="string"&&!!t.match(a1.hex)}},C4=function(t,r,i,o,s){if(t.required&&r===void 0){t2(t,r,i,o,s);return}var u=["integer","float","array","regexp","object","method","email","number","date","url","hex"],d=t.type;u.indexOf(d)>-1?Rs[d](r)||o.push(Tr(s.messages.types[d],t.fullField,t.type)):d&&Ge(r)!==t.type&&o.push(Tr(s.messages.types[d],t.fullField,t.type))},w4=function(t,r,i,o,s){(/^\s+$/.test(r)||r==="")&&o.push(Tr(s.messages.whitespace,t.fullField))};const St={required:t2,whitespace:w4,type:C4,range:b4,enum:p4,pattern:y4};var x4=function(t,r,i,o,s){var u=[],d=t.required||!t.required&&o.hasOwnProperty(t.field);if(d){if(Dn(r)&&!t.required)return i();St.required(t,r,o,u,s)}i(u)},E4=function(t,r,i,o,s){var u=[],d=t.required||!t.required&&o.hasOwnProperty(t.field);if(d){if(r==null&&!t.required)return i();St.required(t,r,o,u,s,"array"),r!=null&&(St.type(t,r,o,u,s),St.range(t,r,o,u,s))}i(u)},$4=function(t,r,i,o,s){var u=[],d=t.required||!t.required&&o.hasOwnProperty(t.field);if(d){if(Dn(r)&&!t.required)return i();St.required(t,r,o,u,s),r!==void 0&&St.type(t,r,o,u,s)}i(u)},R4=function(t,r,i,o,s){var u=[],d=t.required||!t.required&&o.hasOwnProperty(t.field);if(d){if(Dn(r,"date")&&!t.required)return i();if(St.required(t,r,o,u,s),!Dn(r,"date")){var m;r instanceof Date?m=r:m=new Date(r),St.type(t,m,o,u,s),m&&St.range(t,m.getTime(),o,u,s)}}i(u)},T4="enum",O4=function(t,r,i,o,s){var u=[],d=t.required||!t.required&&o.hasOwnProperty(t.field);if(d){if(Dn(r)&&!t.required)return i();St.required(t,r,o,u,s),r!==void 0&&St[T4](t,r,o,u,s)}i(u)},M4=function(t,r,i,o,s){var u=[],d=t.required||!t.required&&o.hasOwnProperty(t.field);if(d){if(Dn(r)&&!t.required)return i();St.required(t,r,o,u,s),r!==void 0&&(St.type(t,r,o,u,s),St.range(t,r,o,u,s))}i(u)},A4=function(t,r,i,o,s){var u=[],d=t.required||!t.required&&o.hasOwnProperty(t.field);if(d){if(Dn(r)&&!t.required)return i();St.required(t,r,o,u,s),r!==void 0&&(St.type(t,r,o,u,s),St.range(t,r,o,u,s))}i(u)},N4=function(t,r,i,o,s){var u=[],d=t.required||!t.required&&o.hasOwnProperty(t.field);if(d){if(Dn(r)&&!t.required)return i();St.required(t,r,o,u,s),r!==void 0&&St.type(t,r,o,u,s)}i(u)},P4=function(t,r,i,o,s){var u=[],d=t.required||!t.required&&o.hasOwnProperty(t.field);if(d){if(r===""&&(r=void 0),Dn(r)&&!t.required)return i();St.required(t,r,o,u,s),r!==void 0&&(St.type(t,r,o,u,s),St.range(t,r,o,u,s))}i(u)},_4=function(t,r,i,o,s){var u=[],d=t.required||!t.required&&o.hasOwnProperty(t.field);if(d){if(Dn(r)&&!t.required)return i();St.required(t,r,o,u,s),r!==void 0&&St.type(t,r,o,u,s)}i(u)},D4=function(t,r,i,o,s){var u=[],d=t.required||!t.required&&o.hasOwnProperty(t.field);if(d){if(Dn(r,"string")&&!t.required)return i();St.required(t,r,o,u,s),Dn(r,"string")||St.pattern(t,r,o,u,s)}i(u)},z4=function(t,r,i,o,s){var u=[],d=t.required||!t.required&&o.hasOwnProperty(t.field);if(d){if(Dn(r)&&!t.required)return i();St.required(t,r,o,u,s),Dn(r)||St.type(t,r,o,u,s)}i(u)},L4=function(t,r,i,o,s){var u=[],d=Array.isArray(r)?"array":Ge(r);St.required(t,r,o,u,s,d),i(u)},H4=function(t,r,i,o,s){var u=[],d=t.required||!t.required&&o.hasOwnProperty(t.field);if(d){if(Dn(r,"string")&&!t.required)return i();St.required(t,r,o,u,s,"string"),Dn(r,"string")||(St.type(t,r,o,u,s),St.range(t,r,o,u,s),St.pattern(t,r,o,u,s),t.whitespace===!0&&St.whitespace(t,r,o,u,s))}i(u)},ag=function(t,r,i,o,s){var u=t.type,d=[],m=t.required||!t.required&&o.hasOwnProperty(t.field);if(m){if(Dn(r,u)&&!t.required)return i();St.required(t,r,o,d,s,u),Dn(r,u)||St.type(t,r,o,d,s)}i(d)};const As={string:H4,method:N4,number:P4,boolean:$4,regexp:z4,integer:A4,float:M4,array:E4,object:_4,enum:O4,pattern:D4,date:R4,url:ag,hex:ag,email:ag,required:L4,any:x4};var ic=function(){function e(t){zn(this,e),J(this,"rules",null),J(this,"_messages",ah),this.define(t)}return Ln(e,[{key:"define",value:function(r){var i=this;if(!r)throw new Error("Cannot configure a schema with no rules");if(Ge(r)!=="object"||Array.isArray(r))throw new Error("Rules must be an object");this.rules={},Object.keys(r).forEach(function(o){var s=r[o];i.rules[o]=Array.isArray(s)?s:[s]})}},{key:"messages",value:function(r){return r&&(this._messages=r1(rh(),r)),this._messages}},{key:"validate",value:function(r){var i=this,o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:function(){},u=r,d=o,m=s;if(typeof d=="function"&&(m=d,d={}),!this.rules||Object.keys(this.rules).length===0)return m&&m(null,u),Promise.resolve(u);function h(C){var x=[],S={};function $(T){if(Array.isArray(T)){var z;x=(z=x).concat.apply(z,Le(T))}else x.push(T)}for(var R=0;R<C.length;R++)$(C[R]);x.length?(S=oh(x),m(x,S)):m(null,u)}if(d.messages){var p=this.messages();p===ah&&(p=rh()),r1(p,d.messages),d.messages=p}else d.messages=this.messages();var y={},b=d.keys||Object.keys(this.rules);b.forEach(function(C){var x=i.rules[C],S=u[C];x.forEach(function($){var R=$;typeof R.transform=="function"&&(u===r&&(u=q({},u)),S=u[C]=R.transform(S),S!=null&&(R.type=R.type||(Array.isArray(S)?"array":Ge(S)))),typeof R=="function"?R={validator:R}:R=q({},R),R.validator=i.getValidationMethod(R),R.validator&&(R.field=C,R.fullField=R.fullField||C,R.type=i.getType(R),y[C]=y[C]||[],y[C].push({rule:R,value:S,source:u,field:C}))})});var w={};return g4(y,d,function(C,x){var S=C.rule,$=(S.type==="object"||S.type==="array")&&(Ge(S.fields)==="object"||Ge(S.defaultField)==="object");$=$&&(S.required||!S.required&&C.value),S.field=C.field;function R(P,B){return q(q({},B),{},{fullField:"".concat(S.fullField,".").concat(P),fullFields:S.fullFields?[].concat(Le(S.fullFields),[P]):[P]})}function T(){var P=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],B=Array.isArray(P)?P:[P];!d.suppressWarning&&B.length&&e.warning("async-validator:",B),B.length&&S.message!==void 0&&(B=[].concat(S.message));var N=B.map(n1(S,u));if(d.first&&N.length)return w[S.field]=1,x(N);if(!$)x(N);else{if(S.required&&!C.value)return S.message!==void 0?N=[].concat(S.message).map(n1(S,u)):d.error&&(N=[d.error(S,Tr(d.messages.required,S.field))]),x(N);var H={};S.defaultField&&Object.keys(C.value).map(function(V){H[V]=S.defaultField}),H=q(q({},H),C.rule.fields);var j={};Object.keys(H).forEach(function(V){var U=H[V],Z=Array.isArray(U)?U:[U];j[V]=Z.map(R.bind(null,V))});var W=new e(j);W.messages(d.messages),C.rule.options&&(C.rule.options.messages=d.messages,C.rule.options.error=d.error),W.validate(C.value,C.rule.options||d,function(V){var U=[];N&&N.length&&U.push.apply(U,Le(N)),V&&V.length&&U.push.apply(U,Le(V)),x(U.length?U:null)})}}var z;if(S.asyncValidator)z=S.asyncValidator(S,C.value,T,C.source,d);else if(S.validator){try{z=S.validator(S,C.value,T,C.source,d)}catch(P){var O,A;(O=(A=console).error)===null||O===void 0||O.call(A,P),d.suppressValidatorError||setTimeout(function(){throw P},0),T(P.message)}z===!0?T():z===!1?T(typeof S.message=="function"?S.message(S.fullField||S.field):S.message||"".concat(S.fullField||S.field," fails")):z instanceof Array?T(z):z instanceof Error&&T(z.message)}z&&z.then&&z.then(function(){return T()},function(P){return T(P)})},function(C){h(C)},u)}},{key:"getType",value:function(r){if(r.type===void 0&&r.pattern instanceof RegExp&&(r.type="pattern"),typeof r.validator!="function"&&r.type&&!As.hasOwnProperty(r.type))throw new Error(Tr("Unknown rule type %s",r.type));return r.type||"string"}},{key:"getValidationMethod",value:function(r){if(typeof r.validator=="function")return r.validator;var i=Object.keys(r),o=i.indexOf("message");return o!==-1&&i.splice(o,1),i.length===1&&i[0]==="required"?As.required:As[this.getType(r)]||void 0}}]),e}();J(ic,"register",function(t,r){if(typeof r!="function")throw new Error("Cannot register a validator by type, validator is not a function");As[t]=r});J(ic,"warning",u4);J(ic,"messages",ah);J(ic,"validators",As);var $r="'${name}' is not a valid ${type}",n2={default:"Validation error on field '${name}'",required:"'${name}' is required",enum:"'${name}' must be one of [${enum}]",whitespace:"'${name}' cannot be empty",date:{format:"'${name}' is invalid for format date",parse:"'${name}' could not be parsed as date",invalid:"'${name}' is invalid date"},types:{string:$r,method:$r,array:$r,object:$r,number:$r,date:$r,boolean:$r,integer:$r,float:$r,regexp:$r,email:$r,url:$r,hex:$r},string:{len:"'${name}' must be exactly ${len} characters",min:"'${name}' must be at least ${min} characters",max:"'${name}' cannot be longer than ${max} characters",range:"'${name}' must be between ${min} and ${max} characters"},number:{len:"'${name}' must equal ${len}",min:"'${name}' cannot be less than ${min}",max:"'${name}' cannot be greater than ${max}",range:"'${name}' must be between ${min} and ${max}"},array:{len:"'${name}' must be exactly ${len} in length",min:"'${name}' cannot be less than ${min} in length",max:"'${name}' cannot be greater than ${max} in length",range:"'${name}' must be between ${min} and ${max} in length"},pattern:{mismatch:"'${name}' does not match pattern ${pattern}"}},i1=ic;function B4(e,t){return e.replace(/\\?\$\{\w+\}/g,function(r){if(r.startsWith("\\"))return r.slice(1);var i=r.slice(2,-1);return t[i]})}var o1="CODE_LOGIC_ERROR";function lh(e,t,r,i,o){return sh.apply(this,arguments)}function sh(){return sh=oo(ur().mark(function e(t,r,i,o,s){var u,d,m,h,p,y,b,w,C;return ur().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return u=q({},i),delete u.ruleIndex,i1.warning=function(){},u.validator&&(d=u.validator,u.validator=function(){try{return d.apply(void 0,arguments)}catch($){return console.error($),Promise.reject(o1)}}),m=null,u&&u.type==="array"&&u.defaultField&&(m=u.defaultField,delete u.defaultField),h=new i1(J({},t,[u])),p=Jo(n2,o.validateMessages),h.messages(p),y=[],S.prev=10,S.next=13,Promise.resolve(h.validate(J({},t,r),q({},o)));case 13:S.next=18;break;case 15:S.prev=15,S.t0=S.catch(10),S.t0.errors&&(y=S.t0.errors.map(function($,R){var T=$.message,z=T===o1?p.default:T;return f.isValidElement(z)?f.cloneElement(z,{key:"error_".concat(R)}):z}));case 18:if(!(!y.length&&m)){S.next=23;break}return S.next=21,Promise.all(r.map(function($,R){return lh("".concat(t,".").concat(R),$,m,o,s)}));case 21:return b=S.sent,S.abrupt("return",b.reduce(function($,R){return[].concat(Le($),Le(R))},[]));case 23:return w=q(q({},i),{},{name:t,enum:(i.enum||[]).join(", ")},s),C=y.map(function($){return typeof $=="string"?B4($,w):$}),S.abrupt("return",C);case 26:case"end":return S.stop()}},e,null,[[10,15]])})),sh.apply(this,arguments)}function I4(e,t,r,i,o,s){var u=e.join("."),d=r.map(function(p,y){var b=p.validator,w=q(q({},p),{},{ruleIndex:y});return b&&(w.validator=function(C,x,S){var $=!1,R=function(){for(var O=arguments.length,A=new Array(O),P=0;P<O;P++)A[P]=arguments[P];Promise.resolve().then(function(){cr(!$,"Your validator function has already return a promise. `callback` will be ignored."),$||S.apply(void 0,A)})},T=b(C,x,R);$=T&&typeof T.then=="function"&&typeof T.catch=="function",cr($,"`callback` is deprecated. Please return a promise instead."),$&&T.then(function(){S()}).catch(function(z){S(z||" ")})}),w}).sort(function(p,y){var b=p.warningOnly,w=p.ruleIndex,C=y.warningOnly,x=y.ruleIndex;return!!b==!!C?w-x:b?1:-1}),m;if(o===!0)m=new Promise(function(){var p=oo(ur().mark(function y(b,w){var C,x,S;return ur().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:C=0;case 1:if(!(C<d.length)){R.next=12;break}return x=d[C],R.next=5,lh(u,t,x,i,s);case 5:if(S=R.sent,!S.length){R.next=9;break}return w([{errors:S,rule:x}]),R.abrupt("return");case 9:C+=1,R.next=1;break;case 12:b([]);case 13:case"end":return R.stop()}},y)}));return function(y,b){return p.apply(this,arguments)}}());else{var h=d.map(function(p){return lh(u,t,p,i,s).then(function(y){return{errors:y,rule:p}})});m=(o?k4(h):j4(h)).then(function(p){return Promise.reject(p)})}return m.catch(function(p){return p}),m}function j4(e){return ch.apply(this,arguments)}function ch(){return ch=oo(ur().mark(function e(t){return ur().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",Promise.all(t).then(function(o){var s,u=(s=[]).concat.apply(s,Le(o));return u}));case 1:case"end":return i.stop()}},e)})),ch.apply(this,arguments)}function k4(e){return uh.apply(this,arguments)}function uh(){return uh=oo(ur().mark(function e(t){var r;return ur().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return r=0,o.abrupt("return",new Promise(function(s){t.forEach(function(u){u.then(function(d){d.errors.length&&s([d]),r+=1,r===t.length&&s([])})})}));case 2:case"end":return o.stop()}},e)})),uh.apply(this,arguments)}function Sn(e){return nh(e)}function l1(e,t){var r={};return t.forEach(function(i){var o=ha(e,i);r=Zr(r,i,o)}),r}function tl(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;return e&&e.some(function(i){return r2(t,i,r)})}function r2(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;return!e||!t||!r&&e.length!==t.length?!1:t.every(function(i,o){return e[o]===i})}function F4(e,t){if(e===t)return!0;if(!e&&t||e&&!t||!e||!t||Ge(e)!=="object"||Ge(t)!=="object")return!1;var r=Object.keys(e),i=Object.keys(t),o=new Set([].concat(r,i));return Le(o).every(function(s){var u=e[s],d=t[s];return typeof u=="function"&&typeof d=="function"?!0:u===d})}function V4(e){var t=arguments.length<=1?void 0:arguments[1];return t&&t.target&&Ge(t.target)==="object"&&e in t.target?t.target[e]:t}function s1(e,t,r){var i=e.length;if(t<0||t>=i||r<0||r>=i)return e;var o=e[t],s=t-r;return s>0?[].concat(Le(e.slice(0,r)),[o],Le(e.slice(r,t)),Le(e.slice(t+1,i))):s<0?[].concat(Le(e.slice(0,t)),Le(e.slice(t+1,r+1)),[o],Le(e.slice(r+1,i))):e}var G4=["name"],Vr=[];function ig(e,t,r,i,o,s){return typeof e=="function"?e(t,r,"source"in s?{source:s.source}:{}):i!==o}var av=function(e){Wa(r,e);var t=qa(r);function r(i){var o;if(zn(this,r),o=t.call(this,i),J(mt(o),"state",{resetCount:0}),J(mt(o),"cancelRegisterFunc",null),J(mt(o),"mounted",!1),J(mt(o),"touched",!1),J(mt(o),"dirty",!1),J(mt(o),"validatePromise",void 0),J(mt(o),"prevValidating",void 0),J(mt(o),"errors",Vr),J(mt(o),"warnings",Vr),J(mt(o),"cancelRegister",function(){var m=o.props,h=m.preserve,p=m.isListField,y=m.name;o.cancelRegisterFunc&&o.cancelRegisterFunc(p,h,Sn(y)),o.cancelRegisterFunc=null}),J(mt(o),"getNamePath",function(){var m=o.props,h=m.name,p=m.fieldContext,y=p.prefixName,b=y===void 0?[]:y;return h!==void 0?[].concat(Le(b),Le(h)):[]}),J(mt(o),"getRules",function(){var m=o.props,h=m.rules,p=h===void 0?[]:h,y=m.fieldContext;return p.map(function(b){return typeof b=="function"?b(y):b})}),J(mt(o),"refresh",function(){o.mounted&&o.setState(function(m){var h=m.resetCount;return{resetCount:h+1}})}),J(mt(o),"metaCache",null),J(mt(o),"triggerMetaEvent",function(m){var h=o.props.onMetaChange;if(h){var p=q(q({},o.getMeta()),{},{destroy:m});al(o.metaCache,p)||h(p),o.metaCache=p}else o.metaCache=null}),J(mt(o),"onStoreChange",function(m,h,p){var y=o.props,b=y.shouldUpdate,w=y.dependencies,C=w===void 0?[]:w,x=y.onReset,S=p.store,$=o.getNamePath(),R=o.getValue(m),T=o.getValue(S),z=h&&tl(h,$);switch(p.type==="valueUpdate"&&p.source==="external"&&!al(R,T)&&(o.touched=!0,o.dirty=!0,o.validatePromise=null,o.errors=Vr,o.warnings=Vr,o.triggerMetaEvent()),p.type){case"reset":if(!h||z){o.touched=!1,o.dirty=!1,o.validatePromise=void 0,o.errors=Vr,o.warnings=Vr,o.triggerMetaEvent(),x==null||x(),o.refresh();return}break;case"remove":{if(b&&ig(b,m,S,R,T,p)){o.reRender();return}break}case"setField":{var O=p.data;if(z){"touched"in O&&(o.touched=O.touched),"validating"in O&&!("originRCField"in O)&&(o.validatePromise=O.validating?Promise.resolve([]):null),"errors"in O&&(o.errors=O.errors||Vr),"warnings"in O&&(o.warnings=O.warnings||Vr),o.dirty=!0,o.triggerMetaEvent(),o.reRender();return}else if("value"in O&&tl(h,$,!0)){o.reRender();return}if(b&&!$.length&&ig(b,m,S,R,T,p)){o.reRender();return}break}case"dependenciesUpdate":{var A=C.map(Sn);if(A.some(function(P){return tl(p.relatedFields,P)})){o.reRender();return}break}default:if(z||(!C.length||$.length||b)&&ig(b,m,S,R,T,p)){o.reRender();return}break}b===!0&&o.reRender()}),J(mt(o),"validateRules",function(m){var h=o.getNamePath(),p=o.getValue(),y=m||{},b=y.triggerName,w=y.validateOnly,C=w===void 0?!1:w,x=Promise.resolve().then(oo(ur().mark(function S(){var $,R,T,z,O,A,P;return ur().wrap(function(N){for(;;)switch(N.prev=N.next){case 0:if(o.mounted){N.next=2;break}return N.abrupt("return",[]);case 2:if($=o.props,R=$.validateFirst,T=R===void 0?!1:R,z=$.messageVariables,O=$.validateDebounce,A=o.getRules(),b&&(A=A.filter(function(H){return H}).filter(function(H){var j=H.validateTrigger;if(!j)return!0;var W=nh(j);return W.includes(b)})),!(O&&b)){N.next=10;break}return N.next=8,new Promise(function(H){setTimeout(H,O)});case 8:if(o.validatePromise===x){N.next=10;break}return N.abrupt("return",[]);case 10:return P=I4(h,p,A,m,T,z),P.catch(function(H){return H}).then(function(){var H=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Vr;if(o.validatePromise===x){var j;o.validatePromise=null;var W=[],V=[];(j=H.forEach)===null||j===void 0||j.call(H,function(U){var Z=U.rule.warningOnly,_=U.errors,L=_===void 0?Vr:_;Z?V.push.apply(V,Le(L)):W.push.apply(W,Le(L))}),o.errors=W,o.warnings=V,o.triggerMetaEvent(),o.reRender()}}),N.abrupt("return",P);case 13:case"end":return N.stop()}},S)})));return C||(o.validatePromise=x,o.dirty=!0,o.errors=Vr,o.warnings=Vr,o.triggerMetaEvent(),o.reRender()),x}),J(mt(o),"isFieldValidating",function(){return!!o.validatePromise}),J(mt(o),"isFieldTouched",function(){return o.touched}),J(mt(o),"isFieldDirty",function(){if(o.dirty||o.props.initialValue!==void 0)return!0;var m=o.props.fieldContext,h=m.getInternalHooks(Yi),p=h.getInitialValue;return p(o.getNamePath())!==void 0}),J(mt(o),"getErrors",function(){return o.errors}),J(mt(o),"getWarnings",function(){return o.warnings}),J(mt(o),"isListField",function(){return o.props.isListField}),J(mt(o),"isList",function(){return o.props.isList}),J(mt(o),"isPreserve",function(){return o.props.preserve}),J(mt(o),"getMeta",function(){o.prevValidating=o.isFieldValidating();var m={touched:o.isFieldTouched(),validating:o.prevValidating,errors:o.errors,warnings:o.warnings,name:o.getNamePath(),validated:o.validatePromise===null};return m}),J(mt(o),"getOnlyChild",function(m){if(typeof m=="function"){var h=o.getMeta();return q(q({},o.getOnlyChild(m(o.getControlled(),h,o.props.fieldContext))),{},{isFunction:!0})}var p=Ci(m);return p.length!==1||!f.isValidElement(p[0])?{child:p,isFunction:!1}:{child:p[0],isFunction:!1}}),J(mt(o),"getValue",function(m){var h=o.props.fieldContext.getFieldsValue,p=o.getNamePath();return ha(m||h(!0),p)}),J(mt(o),"getControlled",function(){var m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},h=o.props,p=h.name,y=h.trigger,b=h.validateTrigger,w=h.getValueFromEvent,C=h.normalize,x=h.valuePropName,S=h.getValueProps,$=h.fieldContext,R=b!==void 0?b:$.validateTrigger,T=o.getNamePath(),z=$.getInternalHooks,O=$.getFieldsValue,A=z(Yi),P=A.dispatch,B=o.getValue(),N=S||function(U){return J({},x,U)},H=m[y],j=p!==void 0?N(B):{},W=q(q({},m),j);W[y]=function(){o.touched=!0,o.dirty=!0,o.triggerMetaEvent();for(var U,Z=arguments.length,_=new Array(Z),L=0;L<Z;L++)_[L]=arguments[L];w?U=w.apply(void 0,_):U=V4.apply(void 0,[x].concat(_)),C&&(U=C(U,B,O(!0))),U!==B&&P({type:"updateValue",namePath:T,value:U}),H&&H.apply(void 0,_)};var V=nh(R||[]);return V.forEach(function(U){var Z=W[U];W[U]=function(){Z&&Z.apply(void 0,arguments);var _=o.props.rules;_&&_.length&&P({type:"validateField",namePath:T,triggerName:U})}}),W}),i.fieldContext){var s=i.fieldContext.getInternalHooks,u=s(Yi),d=u.initEntityValue;d(mt(o))}return o}return Ln(r,[{key:"componentDidMount",value:function(){var o=this.props,s=o.shouldUpdate,u=o.fieldContext;if(this.mounted=!0,u){var d=u.getInternalHooks,m=d(Yi),h=m.registerField;this.cancelRegisterFunc=h(this)}s===!0&&this.reRender()}},{key:"componentWillUnmount",value:function(){this.cancelRegister(),this.triggerMetaEvent(!0),this.mounted=!1}},{key:"reRender",value:function(){this.mounted&&this.forceUpdate()}},{key:"render",value:function(){var o=this.state.resetCount,s=this.props.children,u=this.getOnlyChild(s),d=u.child,m=u.isFunction,h;return m?h=d:f.isValidElement(d)?h=f.cloneElement(d,this.getControlled(d.props)):(cr(!d,"`children` of Field is not validate ReactElement."),h=d),f.createElement(f.Fragment,{key:o},h)}}]),r}(f.Component);J(av,"contextType",dl);J(av,"defaultProps",{trigger:"onChange",valuePropName:"value"});function a2(e){var t,r=e.name,i=rt(e,G4),o=f.useContext(dl),s=f.useContext(Yu),u=r!==void 0?Sn(r):void 0,d=(t=i.isListField)!==null&&t!==void 0?t:!!s,m="keep";return d||(m="_".concat((u||[]).join("_"))),f.createElement(av,Me({key:m,name:u,isListField:d},i,{fieldContext:o}))}function U4(e){var t=e.name,r=e.initialValue,i=e.children,o=e.rules,s=e.validateTrigger,u=e.isListField,d=f.useContext(dl),m=f.useContext(Yu),h=f.useRef({keys:[],id:0}),p=h.current,y=f.useMemo(function(){var x=Sn(d.prefixName)||[];return[].concat(Le(x),Le(Sn(t)))},[d.prefixName,t]),b=f.useMemo(function(){return q(q({},d),{},{prefixName:y})},[d,y]),w=f.useMemo(function(){return{getKey:function(S){var $=y.length,R=S[$];return[p.keys[R],S.slice($+1)]}}},[y]);if(typeof i!="function")return cr(!1,"Form.List only accepts function as children."),null;var C=function(S,$,R){var T=R.source;return T==="internal"?!1:S!==$};return f.createElement(Yu.Provider,{value:w},f.createElement(dl.Provider,{value:b},f.createElement(a2,{name:[],shouldUpdate:C,rules:o,validateTrigger:s,initialValue:r,isList:!0,isListField:u??!!m},function(x,S){var $=x.value,R=$===void 0?[]:$,T=x.onChange,z=d.getFieldValue,O=function(){var N=z(y||[]);return N||[]},A={add:function(N,H){var j=O();H>=0&&H<=j.length?(p.keys=[].concat(Le(p.keys.slice(0,H)),[p.id],Le(p.keys.slice(H))),T([].concat(Le(j.slice(0,H)),[N],Le(j.slice(H))))):(p.keys=[].concat(Le(p.keys),[p.id]),T([].concat(Le(j),[N]))),p.id+=1},remove:function(N){var H=O(),j=new Set(Array.isArray(N)?N:[N]);j.size<=0||(p.keys=p.keys.filter(function(W,V){return!j.has(V)}),T(H.filter(function(W,V){return!j.has(V)})))},move:function(N,H){if(N!==H){var j=O();N<0||N>=j.length||H<0||H>=j.length||(p.keys=s1(p.keys,N,H),T(s1(j,N,H)))}}},P=R||[];return Array.isArray(P)||(P=[]),i(P.map(function(B,N){var H=p.keys[N];return H===void 0&&(p.keys[N]=p.id,H=p.keys[N],p.id+=1),{name:N,key:H,isListField:!0}}),A,S)})))}function W4(e){var t=!1,r=e.length,i=[];return e.length?new Promise(function(o,s){e.forEach(function(u,d){u.catch(function(m){return t=!0,m}).then(function(m){r-=1,i[d]=m,!(r>0)&&(t&&s(i),o(i))})})}):Promise.resolve([])}var i2="__@field_split__";function og(e){return e.map(function(t){return"".concat(Ge(t),":").concat(t)}).join(i2)}var jo=function(){function e(){zn(this,e),J(this,"kvs",new Map)}return Ln(e,[{key:"set",value:function(r,i){this.kvs.set(og(r),i)}},{key:"get",value:function(r){return this.kvs.get(og(r))}},{key:"update",value:function(r,i){var o=this.get(r),s=i(o);s?this.set(r,s):this.delete(r)}},{key:"delete",value:function(r){this.kvs.delete(og(r))}},{key:"map",value:function(r){return Le(this.kvs.entries()).map(function(i){var o=oe(i,2),s=o[0],u=o[1],d=s.split(i2);return r({key:d.map(function(m){var h=m.match(/^([^:]*):(.*)$/),p=oe(h,3),y=p[1],b=p[2];return y==="number"?Number(b):b}),value:u})})}},{key:"toJSON",value:function(){var r={};return this.map(function(i){var o=i.key,s=i.value;return r[o.join(".")]=s,null}),r}}]),e}(),q4=["name"],J4=Ln(function e(t){var r=this;zn(this,e),J(this,"formHooked",!1),J(this,"forceRootUpdate",void 0),J(this,"subscribable",!0),J(this,"store",{}),J(this,"fieldEntities",[]),J(this,"initialValues",{}),J(this,"callbacks",{}),J(this,"validateMessages",null),J(this,"preserve",null),J(this,"lastValidatePromise",null),J(this,"getForm",function(){return{getFieldValue:r.getFieldValue,getFieldsValue:r.getFieldsValue,getFieldError:r.getFieldError,getFieldWarning:r.getFieldWarning,getFieldsError:r.getFieldsError,isFieldsTouched:r.isFieldsTouched,isFieldTouched:r.isFieldTouched,isFieldValidating:r.isFieldValidating,isFieldsValidating:r.isFieldsValidating,resetFields:r.resetFields,setFields:r.setFields,setFieldValue:r.setFieldValue,setFieldsValue:r.setFieldsValue,validateFields:r.validateFields,submit:r.submit,_init:!0,getInternalHooks:r.getInternalHooks}}),J(this,"getInternalHooks",function(i){return i===Yi?(r.formHooked=!0,{dispatch:r.dispatch,initEntityValue:r.initEntityValue,registerField:r.registerField,useSubscribe:r.useSubscribe,setInitialValues:r.setInitialValues,destroyForm:r.destroyForm,setCallbacks:r.setCallbacks,setValidateMessages:r.setValidateMessages,getFields:r.getFields,setPreserve:r.setPreserve,getInitialValue:r.getInitialValue,registerWatch:r.registerWatch}):(cr(!1,"`getInternalHooks` is internal usage. Should not call directly."),null)}),J(this,"useSubscribe",function(i){r.subscribable=i}),J(this,"prevWithoutPreserves",null),J(this,"setInitialValues",function(i,o){if(r.initialValues=i||{},o){var s,u=Jo(i,r.store);(s=r.prevWithoutPreserves)===null||s===void 0||s.map(function(d){var m=d.key;u=Zr(u,m,ha(i,m))}),r.prevWithoutPreserves=null,r.updateStore(u)}}),J(this,"destroyForm",function(i){if(i)r.updateStore({});else{var o=new jo;r.getFieldEntities(!0).forEach(function(s){r.isMergedPreserve(s.isPreserve())||o.set(s.getNamePath(),!0)}),r.prevWithoutPreserves=o}}),J(this,"getInitialValue",function(i){var o=ha(r.initialValues,i);return i.length?Jo(o):o}),J(this,"setCallbacks",function(i){r.callbacks=i}),J(this,"setValidateMessages",function(i){r.validateMessages=i}),J(this,"setPreserve",function(i){r.preserve=i}),J(this,"watchList",[]),J(this,"registerWatch",function(i){return r.watchList.push(i),function(){r.watchList=r.watchList.filter(function(o){return o!==i})}}),J(this,"notifyWatch",function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];if(r.watchList.length){var o=r.getFieldsValue(),s=r.getFieldsValue(!0);r.watchList.forEach(function(u){u(o,s,i)})}}),J(this,"timeoutId",null),J(this,"warningUnhooked",function(){}),J(this,"updateStore",function(i){r.store=i}),J(this,"getFieldEntities",function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;return i?r.fieldEntities.filter(function(o){return o.getNamePath().length}):r.fieldEntities}),J(this,"getFieldsMap",function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,o=new jo;return r.getFieldEntities(i).forEach(function(s){var u=s.getNamePath();o.set(u,s)}),o}),J(this,"getFieldEntitiesForNamePathList",function(i){if(!i)return r.getFieldEntities(!0);var o=r.getFieldsMap(!0);return i.map(function(s){var u=Sn(s);return o.get(u)||{INVALIDATE_NAME_PATH:Sn(s)}})}),J(this,"getFieldsValue",function(i,o){r.warningUnhooked();var s,u,d;if(i===!0||Array.isArray(i)?(s=i,u=o):i&&Ge(i)==="object"&&(d=i.strict,u=i.filter),s===!0&&!u)return r.store;var m=r.getFieldEntitiesForNamePathList(Array.isArray(s)?s:null),h=[];return m.forEach(function(p){var y,b,w="INVALIDATE_NAME_PATH"in p?p.INVALIDATE_NAME_PATH:p.getNamePath();if(d){var C,x;if((C=(x=p).isList)!==null&&C!==void 0&&C.call(x))return}else if(!s&&(y=(b=p).isListField)!==null&&y!==void 0&&y.call(b))return;if(!u)h.push(w);else{var S="getMeta"in p?p.getMeta():null;u(S)&&h.push(w)}}),l1(r.store,h.map(Sn))}),J(this,"getFieldValue",function(i){r.warningUnhooked();var o=Sn(i);return ha(r.store,o)}),J(this,"getFieldsError",function(i){r.warningUnhooked();var o=r.getFieldEntitiesForNamePathList(i);return o.map(function(s,u){return s&&!("INVALIDATE_NAME_PATH"in s)?{name:s.getNamePath(),errors:s.getErrors(),warnings:s.getWarnings()}:{name:Sn(i[u]),errors:[],warnings:[]}})}),J(this,"getFieldError",function(i){r.warningUnhooked();var o=Sn(i),s=r.getFieldsError([o])[0];return s.errors}),J(this,"getFieldWarning",function(i){r.warningUnhooked();var o=Sn(i),s=r.getFieldsError([o])[0];return s.warnings}),J(this,"isFieldsTouched",function(){r.warningUnhooked();for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];var u=o[0],d=o[1],m,h=!1;o.length===0?m=null:o.length===1?Array.isArray(u)?(m=u.map(Sn),h=!1):(m=null,h=u):(m=u.map(Sn),h=d);var p=r.getFieldEntities(!0),y=function(S){return S.isFieldTouched()};if(!m)return h?p.every(function(x){return y(x)||x.isList()}):p.some(y);var b=new jo;m.forEach(function(x){b.set(x,[])}),p.forEach(function(x){var S=x.getNamePath();m.forEach(function($){$.every(function(R,T){return S[T]===R})&&b.update($,function(R){return[].concat(Le(R),[x])})})});var w=function(S){return S.some(y)},C=b.map(function(x){var S=x.value;return S});return h?C.every(w):C.some(w)}),J(this,"isFieldTouched",function(i){return r.warningUnhooked(),r.isFieldsTouched([i])}),J(this,"isFieldsValidating",function(i){r.warningUnhooked();var o=r.getFieldEntities();if(!i)return o.some(function(u){return u.isFieldValidating()});var s=i.map(Sn);return o.some(function(u){var d=u.getNamePath();return tl(s,d)&&u.isFieldValidating()})}),J(this,"isFieldValidating",function(i){return r.warningUnhooked(),r.isFieldsValidating([i])}),J(this,"resetWithFieldInitialValue",function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=new jo,s=r.getFieldEntities(!0);s.forEach(function(m){var h=m.props.initialValue,p=m.getNamePath();if(h!==void 0){var y=o.get(p)||new Set;y.add({entity:m,value:h}),o.set(p,y)}});var u=function(h){h.forEach(function(p){var y=p.props.initialValue;if(y!==void 0){var b=p.getNamePath(),w=r.getInitialValue(b);if(w!==void 0)cr(!1,"Form already set 'initialValues' with path '".concat(b.join("."),"'. Field can not overwrite it."));else{var C=o.get(b);if(C&&C.size>1)cr(!1,"Multiple Field with path '".concat(b.join("."),"' set 'initialValue'. Can not decide which one to pick."));else if(C){var x=r.getFieldValue(b),S=p.isListField();!S&&(!i.skipExist||x===void 0)&&r.updateStore(Zr(r.store,b,Le(C)[0].value))}}}})},d;i.entities?d=i.entities:i.namePathList?(d=[],i.namePathList.forEach(function(m){var h=o.get(m);if(h){var p;(p=d).push.apply(p,Le(Le(h).map(function(y){return y.entity})))}})):d=s,u(d)}),J(this,"resetFields",function(i){r.warningUnhooked();var o=r.store;if(!i){r.updateStore(Jo(r.initialValues)),r.resetWithFieldInitialValue(),r.notifyObservers(o,null,{type:"reset"}),r.notifyWatch();return}var s=i.map(Sn);s.forEach(function(u){var d=r.getInitialValue(u);r.updateStore(Zr(r.store,u,d))}),r.resetWithFieldInitialValue({namePathList:s}),r.notifyObservers(o,s,{type:"reset"}),r.notifyWatch(s)}),J(this,"setFields",function(i){r.warningUnhooked();var o=r.store,s=[];i.forEach(function(u){var d=u.name,m=rt(u,q4),h=Sn(d);s.push(h),"value"in m&&r.updateStore(Zr(r.store,h,m.value)),r.notifyObservers(o,[h],{type:"setField",data:u})}),r.notifyWatch(s)}),J(this,"getFields",function(){var i=r.getFieldEntities(!0),o=i.map(function(s){var u=s.getNamePath(),d=s.getMeta(),m=q(q({},d),{},{name:u,value:r.getFieldValue(u)});return Object.defineProperty(m,"originRCField",{value:!0}),m});return o}),J(this,"initEntityValue",function(i){var o=i.props.initialValue;if(o!==void 0){var s=i.getNamePath(),u=ha(r.store,s);u===void 0&&r.updateStore(Zr(r.store,s,o))}}),J(this,"isMergedPreserve",function(i){var o=i!==void 0?i:r.preserve;return o??!0}),J(this,"registerField",function(i){r.fieldEntities.push(i);var o=i.getNamePath();if(r.notifyWatch([o]),i.props.initialValue!==void 0){var s=r.store;r.resetWithFieldInitialValue({entities:[i],skipExist:!0}),r.notifyObservers(s,[i.getNamePath()],{type:"valueUpdate",source:"internal"})}return function(u,d){var m=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];if(r.fieldEntities=r.fieldEntities.filter(function(y){return y!==i}),!r.isMergedPreserve(d)&&(!u||m.length>1)){var h=u?void 0:r.getInitialValue(o);if(o.length&&r.getFieldValue(o)!==h&&r.fieldEntities.every(function(y){return!r2(y.getNamePath(),o)})){var p=r.store;r.updateStore(Zr(p,o,h,!0)),r.notifyObservers(p,[o],{type:"remove"}),r.triggerDependenciesUpdate(p,o)}}r.notifyWatch([o])}}),J(this,"dispatch",function(i){switch(i.type){case"updateValue":{var o=i.namePath,s=i.value;r.updateValue(o,s);break}case"validateField":{var u=i.namePath,d=i.triggerName;r.validateFields([u],{triggerName:d});break}}}),J(this,"notifyObservers",function(i,o,s){if(r.subscribable){var u=q(q({},s),{},{store:r.getFieldsValue(!0)});r.getFieldEntities().forEach(function(d){var m=d.onStoreChange;m(i,o,u)})}else r.forceRootUpdate()}),J(this,"triggerDependenciesUpdate",function(i,o){var s=r.getDependencyChildrenFields(o);return s.length&&r.validateFields(s),r.notifyObservers(i,s,{type:"dependenciesUpdate",relatedFields:[o].concat(Le(s))}),s}),J(this,"updateValue",function(i,o){var s=Sn(i),u=r.store;r.updateStore(Zr(r.store,s,o)),r.notifyObservers(u,[s],{type:"valueUpdate",source:"internal"}),r.notifyWatch([s]);var d=r.triggerDependenciesUpdate(u,s),m=r.callbacks.onValuesChange;if(m){var h=l1(r.store,[s]);m(h,r.getFieldsValue())}r.triggerOnFieldsChange([s].concat(Le(d)))}),J(this,"setFieldsValue",function(i){r.warningUnhooked();var o=r.store;if(i){var s=Jo(r.store,i);r.updateStore(s)}r.notifyObservers(o,null,{type:"valueUpdate",source:"external"}),r.notifyWatch()}),J(this,"setFieldValue",function(i,o){r.setFields([{name:i,value:o,errors:[],warnings:[]}])}),J(this,"getDependencyChildrenFields",function(i){var o=new Set,s=[],u=new jo;r.getFieldEntities().forEach(function(m){var h=m.props.dependencies;(h||[]).forEach(function(p){var y=Sn(p);u.update(y,function(){var b=arguments.length>0&&arguments[0]!==void 0?arguments[0]:new Set;return b.add(m),b})})});var d=function m(h){var p=u.get(h)||new Set;p.forEach(function(y){if(!o.has(y)){o.add(y);var b=y.getNamePath();y.isFieldDirty()&&b.length&&(s.push(b),m(b))}})};return d(i),s}),J(this,"triggerOnFieldsChange",function(i,o){var s=r.callbacks.onFieldsChange;if(s){var u=r.getFields();if(o){var d=new jo;o.forEach(function(h){var p=h.name,y=h.errors;d.set(p,y)}),u.forEach(function(h){h.errors=d.get(h.name)||h.errors})}var m=u.filter(function(h){var p=h.name;return tl(i,p)});m.length&&s(m,u)}}),J(this,"validateFields",function(i,o){r.warningUnhooked();var s,u;Array.isArray(i)||typeof i=="string"||typeof o=="string"?(s=i,u=o):u=i;var d=!!s,m=d?s.map(Sn):[],h=[],p=String(Date.now()),y=new Set,b=u||{},w=b.recursive,C=b.dirty;r.getFieldEntities(!0).forEach(function(R){if(d||m.push(R.getNamePath()),!(!R.props.rules||!R.props.rules.length)&&!(C&&!R.isFieldDirty())){var T=R.getNamePath();if(y.add(T.join(p)),!d||tl(m,T,w)){var z=R.validateRules(q({validateMessages:q(q({},n2),r.validateMessages)},u));h.push(z.then(function(){return{name:T,errors:[],warnings:[]}}).catch(function(O){var A,P=[],B=[];return(A=O.forEach)===null||A===void 0||A.call(O,function(N){var H=N.rule.warningOnly,j=N.errors;H?B.push.apply(B,Le(j)):P.push.apply(P,Le(j))}),P.length?Promise.reject({name:T,errors:P,warnings:B}):{name:T,errors:P,warnings:B}}))}}});var x=W4(h);r.lastValidatePromise=x,x.catch(function(R){return R}).then(function(R){var T=R.map(function(z){var O=z.name;return O});r.notifyObservers(r.store,T,{type:"validateFinish"}),r.triggerOnFieldsChange(T,R)});var S=x.then(function(){return r.lastValidatePromise===x?Promise.resolve(r.getFieldsValue(m)):Promise.reject([])}).catch(function(R){var T=R.filter(function(z){return z&&z.errors.length});return Promise.reject({values:r.getFieldsValue(m),errorFields:T,outOfDate:r.lastValidatePromise!==x})});S.catch(function(R){return R});var $=m.filter(function(R){return y.has(R.join(p))});return r.triggerOnFieldsChange($),S}),J(this,"submit",function(){r.warningUnhooked(),r.validateFields().then(function(i){var o=r.callbacks.onFinish;if(o)try{o(i)}catch(s){console.error(s)}}).catch(function(i){var o=r.callbacks.onFinishFailed;o&&o(i)})}),this.forceRootUpdate=t});function o2(e){var t=f.useRef(),r=f.useState({}),i=oe(r,2),o=i[1];if(!t.current)if(e)t.current=e;else{var s=function(){o({})},u=new J4(s);t.current=u.getForm()}return[t.current]}var dh=f.createContext({triggerFormChange:function(){},triggerFormFinish:function(){},registerForm:function(){},unregisterForm:function(){}}),K4=function(t){var r=t.validateMessages,i=t.onFormChange,o=t.onFormFinish,s=t.children,u=f.useContext(dh),d=f.useRef({});return f.createElement(dh.Provider,{value:q(q({},u),{},{validateMessages:q(q({},u.validateMessages),r),triggerFormChange:function(h,p){i&&i(h,{changedFields:p,forms:d.current}),u.triggerFormChange(h,p)},triggerFormFinish:function(h,p){o&&o(h,{values:p,forms:d.current}),u.triggerFormFinish(h,p)},registerForm:function(h,p){h&&(d.current=q(q({},d.current),{},J({},h,p))),u.registerForm(h,p)},unregisterForm:function(h){var p=q({},d.current);delete p[h],d.current=p,u.unregisterForm(h)}})},s)},Y4=["name","initialValues","fields","form","preserve","children","component","validateMessages","validateTrigger","onValuesChange","onFieldsChange","onFinish","onFinishFailed","clearOnDestroy"],X4=function(t,r){var i=t.name,o=t.initialValues,s=t.fields,u=t.form,d=t.preserve,m=t.children,h=t.component,p=h===void 0?"form":h,y=t.validateMessages,b=t.validateTrigger,w=b===void 0?"onChange":b,C=t.onValuesChange,x=t.onFieldsChange,S=t.onFinish,$=t.onFinishFailed,R=t.clearOnDestroy,T=rt(t,Y4),z=f.useRef(null),O=f.useContext(dh),A=o2(u),P=oe(A,1),B=P[0],N=B.getInternalHooks(Yi),H=N.useSubscribe,j=N.setInitialValues,W=N.setCallbacks,V=N.setValidateMessages,U=N.setPreserve,Z=N.destroyForm;f.useImperativeHandle(r,function(){return q(q({},B),{},{nativeElement:z.current})}),f.useEffect(function(){return O.registerForm(i,B),function(){O.unregisterForm(i)}},[O,B,i]),V(q(q({},O.validateMessages),y)),W({onValuesChange:C,onFieldsChange:function(I){if(O.triggerFormChange(i,I),x){for(var te=arguments.length,ne=new Array(te>1?te-1:0),fe=1;fe<te;fe++)ne[fe-1]=arguments[fe];x.apply(void 0,[I].concat(ne))}},onFinish:function(I){O.triggerFormFinish(i,I),S&&S(I)},onFinishFailed:$}),U(d);var _=f.useRef(null);j(o,!_.current),_.current||(_.current=!0),f.useEffect(function(){return function(){return Z(R)}},[]);var L,F=typeof m=="function";if(F){var Y=B.getFieldsValue(!0);L=m(Y,B)}else L=m;H(!F);var M=f.useRef();f.useEffect(function(){F4(M.current||[],s||[])||B.setFields(s||[]),M.current=s},[s,B]);var k=f.useMemo(function(){return q(q({},B),{},{validateTrigger:w})},[B,w]),K=f.createElement(Yu.Provider,{value:null},f.createElement(dl.Provider,{value:k},L));return p===!1?K:f.createElement(p,Me({},T,{ref:z,onSubmit:function(I){I.preventDefault(),I.stopPropagation(),B.submit()},onReset:function(I){var te;I.preventDefault(),B.resetFields(),(te=T.onReset)===null||te===void 0||te.call(T,I)}}),K)};function c1(e){try{return JSON.stringify(e)}catch{return Math.random()}}function Z4(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var i=t[0],o=t[1],s=o===void 0?{}:o,u=o4(s)?{form:s}:s,d=u.form,m=f.useState(),h=oe(m,2),p=h[0],y=h[1],b=f.useMemo(function(){return c1(p)},[p]),w=f.useRef(b);w.current=b;var C=f.useContext(dl),x=d||C,S=x&&x._init,$=Sn(i),R=f.useRef($);return R.current=$,f.useEffect(function(){if(S){var T=x.getFieldsValue,z=x.getInternalHooks,O=z(Yi),A=O.registerWatch,P=function(j,W){var V=u.preserve?W:j;return typeof i=="function"?i(V):ha(V,R.current)},B=A(function(H,j){var W=P(H,j),V=c1(W);w.current!==V&&(w.current=V,y(W))}),N=P(T(),T(!0));return p!==N&&y(N),B}},[S]),p}var Q4=f.forwardRef(X4),oc=Q4;oc.FormProvider=K4;oc.Field=a2;oc.List=U4;oc.useForm=o2;oc.useWatch=Z4;const xi=f.createContext({}),eO=e=>{let{children:t,status:r,override:i}=e;const o=f.useContext(xi),s=f.useMemo(()=>{const u=Object.assign({},o);return i&&delete u.isFormItemInput,r&&(delete u.status,delete u.hasFeedback,delete u.feedbackIcon),u},[r,i,o]);return f.createElement(xi.Provider,{value:s},t)},tO=f.createContext(void 0),fh=e=>{const{space:t,form:r,children:i}=e;if(i==null)return null;let o=i;return r&&(o=he.createElement(eO,{override:!0,status:!0},o)),t&&(o=he.createElement(TR,null,o)),o},wd=e=>{const{prefixCls:t,className:r,style:i,size:o,shape:s}=e,u=ue({[`${t}-lg`]:o==="large",[`${t}-sm`]:o==="small"}),d=ue({[`${t}-circle`]:s==="circle",[`${t}-square`]:s==="square",[`${t}-round`]:s==="round"}),m=f.useMemo(()=>typeof o=="number"?{width:o,height:o,lineHeight:`${o}px`}:{},[o]);return f.createElement("span",{className:ue(t,u,d,r),style:Object.assign(Object.assign({},m),i)})},nO=new cn("ant-skeleton-loading",{"0%":{backgroundPosition:"100% 50%"},"100%":{backgroundPosition:"0 50%"}}),xd=e=>({height:e,lineHeight:le(e)}),nl=e=>Object.assign({width:e},xd(e)),rO=e=>({background:e.skeletonLoadingBackground,backgroundSize:"400% 100%",animationName:nO,animationDuration:e.skeletonLoadingMotionDuration,animationTimingFunction:"ease",animationIterationCount:"infinite"}),lg=(e,t)=>Object.assign({width:t(e).mul(5).equal(),minWidth:t(e).mul(5).equal()},xd(e)),aO=e=>{const{skeletonAvatarCls:t,gradientFromColor:r,controlHeight:i,controlHeightLG:o,controlHeightSM:s}=e;return{[t]:Object.assign({display:"inline-block",verticalAlign:"top",background:r},nl(i)),[`${t}${t}-circle`]:{borderRadius:"50%"},[`${t}${t}-lg`]:Object.assign({},nl(o)),[`${t}${t}-sm`]:Object.assign({},nl(s))}},iO=e=>{const{controlHeight:t,borderRadiusSM:r,skeletonInputCls:i,controlHeightLG:o,controlHeightSM:s,gradientFromColor:u,calc:d}=e;return{[i]:Object.assign({display:"inline-block",verticalAlign:"top",background:u,borderRadius:r},lg(t,d)),[`${i}-lg`]:Object.assign({},lg(o,d)),[`${i}-sm`]:Object.assign({},lg(s,d))}},u1=e=>Object.assign({width:e},xd(e)),oO=e=>{const{skeletonImageCls:t,imageSizeBase:r,gradientFromColor:i,borderRadiusSM:o,calc:s}=e;return{[t]:Object.assign(Object.assign({display:"inline-flex",alignItems:"center",justifyContent:"center",verticalAlign:"middle",background:i,borderRadius:o},u1(s(r).mul(2).equal())),{[`${t}-path`]:{fill:"#bfbfbf"},[`${t}-svg`]:Object.assign(Object.assign({},u1(r)),{maxWidth:s(r).mul(4).equal(),maxHeight:s(r).mul(4).equal()}),[`${t}-svg${t}-svg-circle`]:{borderRadius:"50%"}}),[`${t}${t}-circle`]:{borderRadius:"50%"}}},sg=(e,t,r)=>{const{skeletonButtonCls:i}=e;return{[`${r}${i}-circle`]:{width:t,minWidth:t,borderRadius:"50%"},[`${r}${i}-round`]:{borderRadius:t}}},cg=(e,t)=>Object.assign({width:t(e).mul(2).equal(),minWidth:t(e).mul(2).equal()},xd(e)),lO=e=>{const{borderRadiusSM:t,skeletonButtonCls:r,controlHeight:i,controlHeightLG:o,controlHeightSM:s,gradientFromColor:u,calc:d}=e;return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({[r]:Object.assign({display:"inline-block",verticalAlign:"top",background:u,borderRadius:t,width:d(i).mul(2).equal(),minWidth:d(i).mul(2).equal()},cg(i,d))},sg(e,i,r)),{[`${r}-lg`]:Object.assign({},cg(o,d))}),sg(e,o,`${r}-lg`)),{[`${r}-sm`]:Object.assign({},cg(s,d))}),sg(e,s,`${r}-sm`))},sO=e=>{const{componentCls:t,skeletonAvatarCls:r,skeletonTitleCls:i,skeletonParagraphCls:o,skeletonButtonCls:s,skeletonInputCls:u,skeletonImageCls:d,controlHeight:m,controlHeightLG:h,controlHeightSM:p,gradientFromColor:y,padding:b,marginSM:w,borderRadius:C,titleHeight:x,blockRadius:S,paragraphLiHeight:$,controlHeightXS:R,paragraphMarginTop:T}=e;return{[t]:{display:"table",width:"100%",[`${t}-header`]:{display:"table-cell",paddingInlineEnd:b,verticalAlign:"top",[r]:Object.assign({display:"inline-block",verticalAlign:"top",background:y},nl(m)),[`${r}-circle`]:{borderRadius:"50%"},[`${r}-lg`]:Object.assign({},nl(h)),[`${r}-sm`]:Object.assign({},nl(p))},[`${t}-content`]:{display:"table-cell",width:"100%",verticalAlign:"top",[i]:{width:"100%",height:x,background:y,borderRadius:S,[`+ ${o}`]:{marginBlockStart:p}},[o]:{padding:0,"> li":{width:"100%",height:$,listStyle:"none",background:y,borderRadius:S,"+ li":{marginBlockStart:R}}},[`${o}> li:last-child:not(:first-child):not(:nth-child(2))`]:{width:"61%"}},[`&-round ${t}-content`]:{[`${i}, ${o} > li`]:{borderRadius:C}}},[`${t}-with-avatar ${t}-content`]:{[i]:{marginBlockStart:w,[`+ ${o}`]:{marginBlockStart:T}}},[`${t}${t}-element`]:Object.assign(Object.assign(Object.assign(Object.assign({display:"inline-block",width:"auto"},lO(e)),aO(e)),iO(e)),oO(e)),[`${t}${t}-block`]:{width:"100%",[s]:{width:"100%"},[u]:{width:"100%"}},[`${t}${t}-active`]:{[`
        ${i},
        ${o} > li,
        ${r},
        ${s},
        ${u},
        ${d}
      `]:Object.assign({},rO(e))}}},cO=e=>{const{colorFillContent:t,colorFill:r}=e,i=t,o=r;return{color:i,colorGradientEnd:o,gradientFromColor:i,gradientToColor:o,titleHeight:e.controlHeight/2,blockRadius:e.borderRadiusSM,paragraphMarginTop:e.marginLG+e.marginXXS,paragraphLiHeight:e.controlHeight/2}},yl=rr("Skeleton",e=>{const{componentCls:t,calc:r}=e,i=sn(e,{skeletonAvatarCls:`${t}-avatar`,skeletonTitleCls:`${t}-title`,skeletonParagraphCls:`${t}-paragraph`,skeletonButtonCls:`${t}-button`,skeletonInputCls:`${t}-input`,skeletonImageCls:`${t}-image`,imageSizeBase:r(e.controlHeight).mul(1.5).equal(),borderRadius:100,skeletonLoadingBackground:`linear-gradient(90deg, ${e.gradientFromColor} 25%, ${e.gradientToColor} 37%, ${e.gradientFromColor} 63%)`,skeletonLoadingMotionDuration:"1.4s"});return[sO(i)]},cO,{deprecatedTokens:[["color","gradientFromColor"],["colorGradientEnd","gradientToColor"]]}),uO=e=>{const{prefixCls:t,className:r,rootClassName:i,active:o,shape:s="circle",size:u="default"}=e,{getPrefixCls:d}=f.useContext(At),m=d("skeleton",t),[h,p,y]=yl(m),b=dr(e,["prefixCls","className"]),w=ue(m,`${m}-element`,{[`${m}-active`]:o},r,i,p,y);return h(f.createElement("div",{className:w},f.createElement(wd,Object.assign({prefixCls:`${m}-avatar`,shape:s,size:u},b))))},dO=e=>{const{prefixCls:t,className:r,rootClassName:i,active:o,block:s=!1,size:u="default"}=e,{getPrefixCls:d}=f.useContext(At),m=d("skeleton",t),[h,p,y]=yl(m),b=dr(e,["prefixCls"]),w=ue(m,`${m}-element`,{[`${m}-active`]:o,[`${m}-block`]:s},r,i,p,y);return h(f.createElement("div",{className:w},f.createElement(wd,Object.assign({prefixCls:`${m}-button`,size:u},b))))},fO="M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z",mO=e=>{const{prefixCls:t,className:r,rootClassName:i,style:o,active:s}=e,{getPrefixCls:u}=f.useContext(At),d=u("skeleton",t),[m,h,p]=yl(d),y=ue(d,`${d}-element`,{[`${d}-active`]:s},r,i,h,p);return m(f.createElement("div",{className:y},f.createElement("div",{className:ue(`${d}-image`,r),style:o},f.createElement("svg",{viewBox:"0 0 1098 1024",xmlns:"http://www.w3.org/2000/svg",className:`${d}-image-svg`},f.createElement("title",null,"Image placeholder"),f.createElement("path",{d:fO,className:`${d}-image-path`})))))},gO=e=>{const{prefixCls:t,className:r,rootClassName:i,active:o,block:s,size:u="default"}=e,{getPrefixCls:d}=f.useContext(At),m=d("skeleton",t),[h,p,y]=yl(m),b=dr(e,["prefixCls"]),w=ue(m,`${m}-element`,{[`${m}-active`]:o,[`${m}-block`]:s},r,i,p,y);return h(f.createElement("div",{className:w},f.createElement(wd,Object.assign({prefixCls:`${m}-input`,size:u},b))))},hO=e=>{const{prefixCls:t,className:r,rootClassName:i,style:o,active:s,children:u}=e,{getPrefixCls:d}=f.useContext(At),m=d("skeleton",t),[h,p,y]=yl(m),b=ue(m,`${m}-element`,{[`${m}-active`]:s},p,r,i,y);return h(f.createElement("div",{className:b},f.createElement("div",{className:ue(`${m}-image`,r),style:o},u)))},vO=(e,t)=>{const{width:r,rows:i=2}=t;if(Array.isArray(r))return r[e];if(i-1===e)return r},pO=e=>{const{prefixCls:t,className:r,style:i,rows:o=0}=e,s=Array.from({length:o}).map((u,d)=>f.createElement("li",{key:d,style:{width:vO(d,e)}}));return f.createElement("ul",{className:ue(t,r),style:i},s)},yO=e=>{let{prefixCls:t,className:r,width:i,style:o}=e;return f.createElement("h3",{className:ue(t,r),style:Object.assign({width:i},o)})};function ug(e){return e&&typeof e=="object"?e:{}}function bO(e,t){return e&&!t?{size:"large",shape:"square"}:{size:"large",shape:"circle"}}function SO(e,t){return!e&&t?{width:"38%"}:e&&t?{width:"50%"}:{}}function CO(e,t){const r={};return(!e||!t)&&(r.width="61%"),!e&&t?r.rows=3:r.rows=2,r}const bl=e=>{const{prefixCls:t,loading:r,className:i,rootClassName:o,style:s,children:u,avatar:d=!1,title:m=!0,paragraph:h=!0,active:p,round:y}=e,{getPrefixCls:b,direction:w,className:C,style:x}=io("skeleton"),S=b("skeleton",t),[$,R,T]=yl(S);if(r||!("loading"in e)){const z=!!d,O=!!m,A=!!h;let P;if(z){const H=Object.assign(Object.assign({prefixCls:`${S}-avatar`},bO(O,A)),ug(d));P=f.createElement("div",{className:`${S}-header`},f.createElement(wd,Object.assign({},H)))}let B;if(O||A){let H;if(O){const W=Object.assign(Object.assign({prefixCls:`${S}-title`},SO(z,A)),ug(m));H=f.createElement(yO,Object.assign({},W))}let j;if(A){const W=Object.assign(Object.assign({prefixCls:`${S}-paragraph`},CO(z,O)),ug(h));j=f.createElement(pO,Object.assign({},W))}B=f.createElement("div",{className:`${S}-content`},H,j)}const N=ue(S,{[`${S}-with-avatar`]:z,[`${S}-active`]:p,[`${S}-rtl`]:w==="rtl",[`${S}-round`]:y},C,i,o,R,T);return $(f.createElement("div",{className:N,style:Object.assign(Object.assign({},x),s)},P,B))}return u??null};bl.Button=dO;bl.Avatar=uO;bl.Input=gO;bl.Image=mO;bl.Node=hO;const wO=e=>{const{componentCls:t}=e;return{[t]:{display:"flex",flexFlow:"row wrap",minWidth:0,"&::before, &::after":{display:"flex"},"&-no-wrap":{flexWrap:"nowrap"},"&-start":{justifyContent:"flex-start"},"&-center":{justifyContent:"center"},"&-end":{justifyContent:"flex-end"},"&-space-between":{justifyContent:"space-between"},"&-space-around":{justifyContent:"space-around"},"&-space-evenly":{justifyContent:"space-evenly"},"&-top":{alignItems:"flex-start"},"&-middle":{alignItems:"center"},"&-bottom":{alignItems:"flex-end"}}}},xO=e=>{const{componentCls:t}=e;return{[t]:{position:"relative",maxWidth:"100%",minHeight:1}}},EO=(e,t)=>{const{prefixCls:r,componentCls:i,gridColumns:o}=e,s={};for(let u=o;u>=0;u--)u===0?(s[`${i}${t}-${u}`]={display:"none"},s[`${i}-push-${u}`]={insetInlineStart:"auto"},s[`${i}-pull-${u}`]={insetInlineEnd:"auto"},s[`${i}${t}-push-${u}`]={insetInlineStart:"auto"},s[`${i}${t}-pull-${u}`]={insetInlineEnd:"auto"},s[`${i}${t}-offset-${u}`]={marginInlineStart:0},s[`${i}${t}-order-${u}`]={order:0}):(s[`${i}${t}-${u}`]=[{"--ant-display":"block",display:"block"},{display:"var(--ant-display)",flex:`0 0 ${u/o*100}%`,maxWidth:`${u/o*100}%`}],s[`${i}${t}-push-${u}`]={insetInlineStart:`${u/o*100}%`},s[`${i}${t}-pull-${u}`]={insetInlineEnd:`${u/o*100}%`},s[`${i}${t}-offset-${u}`]={marginInlineStart:`${u/o*100}%`},s[`${i}${t}-order-${u}`]={order:u});return s[`${i}${t}-flex`]={flex:`var(--${r}${t}-flex)`},s},mh=(e,t)=>EO(e,t),$O=(e,t,r)=>({[`@media (min-width: ${le(t)})`]:Object.assign({},mh(e,r))}),RO=()=>({}),TO=()=>({}),OO=rr("Grid",wO,RO),l2=e=>({xs:e.screenXSMin,sm:e.screenSMMin,md:e.screenMDMin,lg:e.screenLGMin,xl:e.screenXLMin,xxl:e.screenXXLMin});rr("Grid",e=>{const t=sn(e,{gridColumns:24}),r=l2(t);return delete r.xs,[xO(t),mh(t,""),mh(t,"-xs"),Object.keys(r).map(i=>$O(t,r[i],`-${i}`)).reduce((i,o)=>Object.assign(Object.assign({},i),o),{})]},TO);function d1(e){return{position:e,inset:0}}const s2=e=>{const{componentCls:t,antCls:r}=e;return[{[`${t}-root`]:{[`${t}${r}-zoom-enter, ${t}${r}-zoom-appear`]:{transform:"none",opacity:0,animationDuration:e.motionDurationSlow,userSelect:"none"},[`${t}${r}-zoom-leave ${t}-content`]:{pointerEvents:"none"},[`${t}-mask`]:Object.assign(Object.assign({},d1("fixed")),{zIndex:e.zIndexPopupBase,height:"100%",backgroundColor:e.colorBgMask,pointerEvents:"none",[`${t}-hidden`]:{display:"none"}}),[`${t}-wrap`]:Object.assign(Object.assign({},d1("fixed")),{zIndex:e.zIndexPopupBase,overflow:"auto",outline:0,WebkitOverflowScrolling:"touch"})}},{[`${t}-root`]:WC(e)}]},MO=e=>{const{componentCls:t}=e;return[{[`${t}-root`]:{[`${t}-wrap-rtl`]:{direction:"rtl"},[`${t}-centered`]:{textAlign:"center","&::before":{display:"inline-block",width:0,height:"100%",verticalAlign:"middle",content:'""'},[t]:{top:0,display:"inline-block",paddingBottom:0,textAlign:"start",verticalAlign:"middle"}},[`@media (max-width: ${e.screenSMMax}px)`]:{[t]:{maxWidth:"calc(100vw - 16px)",margin:`${le(e.marginXS)} auto`},[`${t}-centered`]:{[t]:{flex:1}}}}},{[t]:Object.assign(Object.assign({},Ei(e)),{pointerEvents:"none",position:"relative",top:100,width:"auto",maxWidth:`calc(100vw - ${le(e.calc(e.margin).mul(2).equal())})`,margin:"0 auto",paddingBottom:e.paddingLG,[`${t}-title`]:{margin:0,color:e.titleColor,fontWeight:e.fontWeightStrong,fontSize:e.titleFontSize,lineHeight:e.titleLineHeight,wordWrap:"break-word"},[`${t}-content`]:{position:"relative",backgroundColor:e.contentBg,backgroundClip:"padding-box",border:0,borderRadius:e.borderRadiusLG,boxShadow:e.boxShadow,pointerEvents:"auto",padding:e.contentPadding},[`${t}-close`]:Object.assign({position:"absolute",top:e.calc(e.modalHeaderHeight).sub(e.modalCloseBtnSize).div(2).equal(),insetInlineEnd:e.calc(e.modalHeaderHeight).sub(e.modalCloseBtnSize).div(2).equal(),zIndex:e.calc(e.zIndexPopupBase).add(10).equal(),padding:0,color:e.modalCloseIconColor,fontWeight:e.fontWeightStrong,lineHeight:1,textDecoration:"none",background:"transparent",borderRadius:e.borderRadiusSM,width:e.modalCloseBtnSize,height:e.modalCloseBtnSize,border:0,outline:0,cursor:"pointer",transition:`color ${e.motionDurationMid}, background-color ${e.motionDurationMid}`,"&-x":{display:"flex",fontSize:e.fontSizeLG,fontStyle:"normal",lineHeight:le(e.modalCloseBtnSize),justifyContent:"center",textTransform:"none",textRendering:"auto"},"&:disabled":{pointerEvents:"none"},"&:hover":{color:e.modalCloseIconHoverColor,backgroundColor:e.colorBgTextHover,textDecoration:"none"},"&:active":{backgroundColor:e.colorBgTextActive}},Us(e)),[`${t}-header`]:{color:e.colorText,background:e.headerBg,borderRadius:`${le(e.borderRadiusLG)} ${le(e.borderRadiusLG)} 0 0`,marginBottom:e.headerMarginBottom,padding:e.headerPadding,borderBottom:e.headerBorderBottom},[`${t}-body`]:{fontSize:e.fontSize,lineHeight:e.lineHeight,wordWrap:"break-word",padding:e.bodyPadding,[`${t}-body-skeleton`]:{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",margin:`${le(e.margin)} auto`}},[`${t}-footer`]:{textAlign:"end",background:e.footerBg,marginTop:e.footerMarginTop,padding:e.footerPadding,borderTop:e.footerBorderTop,borderRadius:e.footerBorderRadius,[`> ${e.antCls}-btn + ${e.antCls}-btn`]:{marginInlineStart:e.marginXS}},[`${t}-open`]:{overflow:"hidden"}})},{[`${t}-pure-panel`]:{top:"auto",padding:0,display:"flex",flexDirection:"column",[`${t}-content,
          ${t}-body,
          ${t}-confirm-body-wrapper`]:{display:"flex",flexDirection:"column",flex:"auto"},[`${t}-confirm-body`]:{marginBottom:"auto"}}}]},AO=e=>{const{componentCls:t}=e;return{[`${t}-root`]:{[`${t}-wrap-rtl`]:{direction:"rtl",[`${t}-confirm-body`]:{direction:"rtl"}}}}},NO=e=>{const{componentCls:t}=e,r=l2(e);delete r.xs;const i=Object.keys(r).map(o=>({[`@media (min-width: ${le(r[o])})`]:{width:`var(--${t.replace(".","")}-${o}-width)`}}));return{[`${t}-root`]:{[t]:[{width:`var(--${t.replace(".","")}-xs-width)`}].concat(Le(i))}}},PO=e=>{const t=e.padding,r=e.fontSizeHeading5,i=e.lineHeightHeading5;return sn(e,{modalHeaderHeight:e.calc(e.calc(i).mul(r).equal()).add(e.calc(t).mul(2).equal()).equal(),modalFooterBorderColorSplit:e.colorSplit,modalFooterBorderStyle:e.lineType,modalFooterBorderWidth:e.lineWidth,modalCloseIconColor:e.colorIcon,modalCloseIconHoverColor:e.colorIconHover,modalCloseBtnSize:e.controlHeight,modalConfirmIconSize:e.fontHeight,modalTitleHeight:e.calc(e.titleFontSize).mul(e.titleLineHeight).equal()})},_O=e=>({footerBg:"transparent",headerBg:e.colorBgElevated,titleLineHeight:e.lineHeightHeading5,titleFontSize:e.fontSizeHeading5,contentBg:e.colorBgElevated,titleColor:e.colorTextHeading,contentPadding:e.wireframe?0:`${le(e.paddingMD)} ${le(e.paddingContentHorizontalLG)}`,headerPadding:e.wireframe?`${le(e.padding)} ${le(e.paddingLG)}`:0,headerBorderBottom:e.wireframe?`${le(e.lineWidth)} ${e.lineType} ${e.colorSplit}`:"none",headerMarginBottom:e.wireframe?0:e.marginXS,bodyPadding:e.wireframe?e.paddingLG:0,footerPadding:e.wireframe?`${le(e.paddingXS)} ${le(e.padding)}`:0,footerBorderTop:e.wireframe?`${le(e.lineWidth)} ${e.lineType} ${e.colorSplit}`:"none",footerBorderRadius:e.wireframe?`0 0 ${le(e.borderRadiusLG)} ${le(e.borderRadiusLG)}`:0,footerMarginTop:e.wireframe?0:e.marginSM,confirmBodyPadding:e.wireframe?`${le(e.padding*2)} ${le(e.padding*2)} ${le(e.paddingLG)}`:0,confirmIconMarginInlineEnd:e.wireframe?e.margin:e.marginSM,confirmBtnsMarginTop:e.wireframe?e.marginLG:e.marginSM});rr("Modal",e=>{const t=PO(e);return[MO(t),AO(t),s2(t),gd(t,"zoom"),NO(t)]},_O,{unitless:{titleLineHeight:!0}});const c2=function(){if(typeof navigator>"u"||typeof window>"u")return!1;var e=navigator.userAgent||navigator.vendor||window.opera;return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(e==null?void 0:e.substr(0,4))};var DO=["prefixCls","invalidate","item","renderItem","responsive","responsiveDisabled","registerSize","itemKey","className","style","children","display","order","component"],ko=void 0;function zO(e,t){var r=e.prefixCls,i=e.invalidate,o=e.item,s=e.renderItem,u=e.responsive,d=e.responsiveDisabled,m=e.registerSize,h=e.itemKey,p=e.className,y=e.style,b=e.children,w=e.display,C=e.order,x=e.component,S=x===void 0?"div":x,$=rt(e,DO),R=u&&!w;function T(B){m(h,B)}f.useEffect(function(){return function(){T(null)}},[]);var z=s&&o!==ko?s(o,{index:C}):b,O;i||(O={opacity:R?0:1,height:R?0:ko,overflowY:R?"hidden":ko,order:u?C:ko,pointerEvents:R?"none":ko,position:R?"absolute":ko});var A={};R&&(A["aria-hidden"]=!0);var P=f.createElement(S,Me({className:ue(!i&&r,p),style:q(q({},O),y)},A,$,{ref:t}),z);return u&&(P=f.createElement(ja,{onResize:function(N){var H=N.offsetWidth;T(H)},disabled:d},P)),P}var Ns=f.forwardRef(zO);Ns.displayName="Item";function LO(e){if(typeof MessageChannel>"u")Cn(e);else{var t=new MessageChannel;t.port1.onmessage=function(){return e()},t.port2.postMessage(void 0)}}function HO(){var e=f.useRef(null),t=function(i){e.current||(e.current=[],LO(function(){ec.unstable_batchedUpdates(function(){e.current.forEach(function(o){o()}),e.current=null})})),e.current.push(i)};return t}function Ss(e,t){var r=f.useState(t),i=oe(r,2),o=i[0],s=i[1],u=Gn(function(d){e(function(){s(d)})});return[o,u]}var Xu=he.createContext(null),BO=["component"],IO=["className"],jO=["className"],kO=function(t,r){var i=f.useContext(Xu);if(!i){var o=t.component,s=o===void 0?"div":o,u=rt(t,BO);return f.createElement(s,Me({},u,{ref:r}))}var d=i.className,m=rt(i,IO),h=t.className,p=rt(t,jO);return f.createElement(Xu.Provider,{value:null},f.createElement(Ns,Me({ref:r,className:ue(d,h)},m,p)))},u2=f.forwardRef(kO);u2.displayName="RawItem";var FO=["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"],d2="responsive",f2="invalidate";function VO(e){return"+ ".concat(e.length," ...")}function GO(e,t){var r=e.prefixCls,i=r===void 0?"rc-overflow":r,o=e.data,s=o===void 0?[]:o,u=e.renderItem,d=e.renderRawItem,m=e.itemKey,h=e.itemWidth,p=h===void 0?10:h,y=e.ssr,b=e.style,w=e.className,C=e.maxCount,x=e.renderRest,S=e.renderRawRest,$=e.suffix,R=e.component,T=R===void 0?"div":R,z=e.itemComponent,O=e.onVisibleChange,A=rt(e,FO),P=y==="full",B=HO(),N=Ss(B,null),H=oe(N,2),j=H[0],W=H[1],V=j||0,U=Ss(B,new Map),Z=oe(U,2),_=Z[0],L=Z[1],F=Ss(B,0),Y=oe(F,2),M=Y[0],k=Y[1],K=Ss(B,0),X=oe(K,2),I=X[0],te=X[1],ne=Ss(B,0),fe=oe(ne,2),ae=fe[0],ce=fe[1],de=f.useState(null),xe=oe(de,2),Se=xe[0],Oe=xe[1],Ce=f.useState(null),we=oe(Ce,2),be=we[0],De=we[1],Te=f.useMemo(function(){return be===null&&P?Number.MAX_SAFE_INTEGER:be||0},[be,j]),Be=f.useState(!1),Ne=oe(Be,2),$e=Ne[0],Fe=Ne[1],ye="".concat(i,"-item"),Re=Math.max(M,I),Ue=C===d2,Ie=s.length&&Ue,at=C===f2,qe=Ie||typeof C=="number"&&s.length>C,Ke=f.useMemo(function(){var Ve=s;return Ie?j===null&&P?Ve=s:Ve=s.slice(0,Math.min(s.length,V/p)):typeof C=="number"&&(Ve=s.slice(0,C)),Ve},[s,p,j,C,Ie]),Xe=f.useMemo(function(){return Ie?s.slice(Te+1):s.slice(Ke.length)},[s,Ke,Ie,Te]),et=f.useCallback(function(Ve,_e){var ze;return typeof m=="function"?m(Ve):(ze=m&&(Ve==null?void 0:Ve[m]))!==null&&ze!==void 0?ze:_e},[m]),it=f.useCallback(u||function(Ve){return Ve},[u]);function je(Ve,_e,ze){be===Ve&&(_e===void 0||_e===Se)||(De(Ve),ze||(Fe(Ve<s.length-1),O==null||O(Ve)),_e!==void 0&&Oe(_e))}function Ee(Ve,_e){W(_e.clientWidth)}function Ye(Ve,_e){L(function(ze){var ct=new Map(ze);return _e===null?ct.delete(Ve):ct.set(Ve,_e),ct})}function Je(Ve,_e){te(_e),k(I)}function nt(Ve,_e){ce(_e)}function tn(Ve){return _.get(et(Ke[Ve],Ve))}_n(function(){if(V&&typeof Re=="number"&&Ke){var Ve=ae,_e=Ke.length,ze=_e-1;if(!_e){je(0,null);return}for(var ct=0;ct<_e;ct+=1){var Pt=tn(ct);if(P&&(Pt=Pt||0),Pt===void 0){je(ct-1,void 0,!0);break}if(Ve+=Pt,ze===0&&Ve<=V||ct===ze-1&&Ve+tn(ze)<=V){je(ze,null);break}else if(Ve+Re>V){je(ct-1,Ve-Pt-ae+I);break}}$&&tn(0)+ae>V&&Oe(null)}},[V,_,I,ae,et,Ke]);var kt=$e&&!!Xe.length,nn={};Se!==null&&Ie&&(nn={position:"absolute",left:Se,top:0});var qt={prefixCls:ye,responsive:Ie,component:z,invalidate:at},Un=d?function(Ve,_e){var ze=et(Ve,_e);return f.createElement(Xu.Provider,{key:ze,value:q(q({},qt),{},{order:_e,item:Ve,itemKey:ze,registerSize:Ye,display:_e<=Te})},d(Ve,_e))}:function(Ve,_e){var ze=et(Ve,_e);return f.createElement(Ns,Me({},qt,{order:_e,key:ze,item:Ve,renderItem:it,itemKey:ze,registerSize:Ye,display:_e<=Te}))},Ft={order:kt?Te:Number.MAX_SAFE_INTEGER,className:"".concat(ye,"-rest"),registerSize:Je,display:kt},$t=x||VO,It=S?f.createElement(Xu.Provider,{value:q(q({},qt),Ft)},S(Xe)):f.createElement(Ns,Me({},qt,Ft),typeof $t=="function"?$t(Xe):$t),xt=f.createElement(T,Me({className:ue(!at&&i,w),style:b,ref:t},A),Ke.map(Un),qe?It:null,$&&f.createElement(Ns,Me({},qt,{responsive:Ue,responsiveDisabled:!Ie,order:Te,className:"".concat(ye,"-suffix"),registerSize:nt,display:!0,style:nn}),$));return Ue?f.createElement(ja,{onResize:Ee,disabled:!Ie},xt):xt}var Fa=f.forwardRef(GO);Fa.displayName="Overflow";Fa.Item=u2;Fa.RESPONSIVE=d2;Fa.INVALIDATE=f2;function UO(e){var t=e.prefixCls,r=e.align,i=e.arrow,o=e.arrowPos,s=i||{},u=s.className,d=s.content,m=o.x,h=m===void 0?0:m,p=o.y,y=p===void 0?0:p,b=f.useRef();if(!r||!r.points)return null;var w={position:"absolute"};if(r.autoArrow!==!1){var C=r.points[0],x=r.points[1],S=C[0],$=C[1],R=x[0],T=x[1];S===R||!["t","b"].includes(S)?w.top=y:S==="t"?w.top=0:w.bottom=0,$===T||!["l","r"].includes($)?w.left=h:$==="l"?w.left=0:w.right=0}return f.createElement("div",{ref:b,className:ue("".concat(t,"-arrow"),u),style:w},d)}function WO(e){var t=e.prefixCls,r=e.open,i=e.zIndex,o=e.mask,s=e.motion;return o?f.createElement(ba,Me({},s,{motionAppear:!0,visible:r,removeOnLeave:!0}),function(u){var d=u.className;return f.createElement("div",{style:{zIndex:i},className:ue("".concat(t,"-mask"),d)})}):null}var qO=f.memo(function(e){var t=e.children;return t},function(e,t){return t.cache}),JO=f.forwardRef(function(e,t){var r=e.popup,i=e.className,o=e.prefixCls,s=e.style,u=e.target,d=e.onVisibleChanged,m=e.open,h=e.keepDom,p=e.fresh,y=e.onClick,b=e.mask,w=e.arrow,C=e.arrowPos,x=e.align,S=e.motion,$=e.maskMotion,R=e.forceRender,T=e.getPopupContainer,z=e.autoDestroy,O=e.portal,A=e.zIndex,P=e.onMouseEnter,B=e.onMouseLeave,N=e.onPointerEnter,H=e.onPointerDownCapture,j=e.ready,W=e.offsetX,V=e.offsetY,U=e.offsetR,Z=e.offsetB,_=e.onAlign,L=e.onPrepare,F=e.stretch,Y=e.targetWidth,M=e.targetHeight,k=typeof r=="function"?r():r,K=m||h,X=(T==null?void 0:T.length)>0,I=f.useState(!T||!X),te=oe(I,2),ne=te[0],fe=te[1];if(_n(function(){!ne&&X&&u&&fe(!0)},[ne,X,u]),!ne)return null;var ae="auto",ce={left:"-1000vw",top:"-1000vh",right:ae,bottom:ae};if(j||!m){var de,xe=x.points,Se=x.dynamicInset||((de=x._experimental)===null||de===void 0?void 0:de.dynamicInset),Oe=Se&&xe[0][1]==="r",Ce=Se&&xe[0][0]==="b";Oe?(ce.right=U,ce.left=ae):(ce.left=W,ce.right=ae),Ce?(ce.bottom=Z,ce.top=ae):(ce.top=V,ce.bottom=ae)}var we={};return F&&(F.includes("height")&&M?we.height=M:F.includes("minHeight")&&M&&(we.minHeight=M),F.includes("width")&&Y?we.width=Y:F.includes("minWidth")&&Y&&(we.minWidth=Y)),m||(we.pointerEvents="none"),f.createElement(O,{open:R||K,getContainer:T&&function(){return T(u)},autoDestroy:z},f.createElement(WO,{prefixCls:o,open:m,zIndex:A,mask:b,motion:$}),f.createElement(ja,{onResize:_,disabled:!m},function(be){return f.createElement(ba,Me({motionAppear:!0,motionEnter:!0,motionLeave:!0,removeOnLeave:!1,forceRender:R,leavedClassName:"".concat(o,"-hidden")},S,{onAppearPrepare:L,onEnterPrepare:L,visible:m,onVisibleChanged:function(Te){var Be;S==null||(Be=S.onVisibleChanged)===null||Be===void 0||Be.call(S,Te),d(Te)}}),function(De,Te){var Be=De.className,Ne=De.style,$e=ue(o,Be,i);return f.createElement("div",{ref:Ua(be,t,Te),className:$e,style:q(q(q(q({"--arrow-x":"".concat(C.x||0,"px"),"--arrow-y":"".concat(C.y||0,"px")},ce),we),Ne),{},{boxSizing:"border-box",zIndex:A},s),onMouseEnter:P,onMouseLeave:B,onPointerEnter:N,onClick:y,onPointerDownCapture:H},w&&f.createElement(UO,{prefixCls:o,arrow:w,arrowPos:C,align:x}),f.createElement(qO,{cache:!m&&!p},k))})}))}),KO=f.forwardRef(function(e,t){var r=e.children,i=e.getTriggerDOMNode,o=ao(r),s=f.useCallback(function(d){Ih(t,i?i(d):d)},[i]),u=ro(s,gl(r));return o?f.cloneElement(r,{ref:u}):r}),f1=f.createContext(null);function m1(e){return e?Array.isArray(e)?e:[e]:[]}function YO(e,t,r,i){return f.useMemo(function(){var o=m1(r??t),s=m1(i??t),u=new Set(o),d=new Set(s);return e&&(u.has("hover")&&(u.delete("hover"),u.add("click")),d.has("hover")&&(d.delete("hover"),d.add("click"))),[u,d]},[e,t,r,i])}function XO(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],r=arguments.length>2?arguments[2]:void 0;return r?e[0]===t[0]:e[0]===t[0]&&e[1]===t[1]}function ZO(e,t,r,i){for(var o=r.points,s=Object.keys(e),u=0;u<s.length;u+=1){var d,m=s[u];if(XO((d=e[m])===null||d===void 0?void 0:d.points,o,i))return"".concat(t,"-placement-").concat(m)}return""}function g1(e,t,r,i){return t||(r?{motionName:"".concat(e,"-").concat(r)}:i?{motionName:i}:null)}function lc(e){return e.ownerDocument.defaultView}function gh(e){for(var t=[],r=e==null?void 0:e.parentElement,i=["hidden","scroll","clip","auto"];r;){var o=lc(r).getComputedStyle(r),s=o.overflowX,u=o.overflowY,d=o.overflow;[s,u,d].some(function(m){return i.includes(m)})&&t.push(r),r=r.parentElement}return t}function Js(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;return Number.isNaN(e)?t:e}function Cs(e){return Js(parseFloat(e),0)}function h1(e,t){var r=q({},e);return(t||[]).forEach(function(i){if(!(i instanceof HTMLBodyElement||i instanceof HTMLHtmlElement)){var o=lc(i).getComputedStyle(i),s=o.overflow,u=o.overflowClipMargin,d=o.borderTopWidth,m=o.borderBottomWidth,h=o.borderLeftWidth,p=o.borderRightWidth,y=i.getBoundingClientRect(),b=i.offsetHeight,w=i.clientHeight,C=i.offsetWidth,x=i.clientWidth,S=Cs(d),$=Cs(m),R=Cs(h),T=Cs(p),z=Js(Math.round(y.width/C*1e3)/1e3),O=Js(Math.round(y.height/b*1e3)/1e3),A=(C-x-R-T)*z,P=(b-w-S-$)*O,B=S*O,N=$*O,H=R*z,j=T*z,W=0,V=0;if(s==="clip"){var U=Cs(u);W=U*z,V=U*O}var Z=y.x+H-W,_=y.y+B-V,L=Z+y.width+2*W-H-j-A,F=_+y.height+2*V-B-N-P;r.left=Math.max(r.left,Z),r.top=Math.max(r.top,_),r.right=Math.min(r.right,L),r.bottom=Math.min(r.bottom,F)}}),r}function v1(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,r="".concat(t),i=r.match(/^(.*)\%$/);return i?e*(parseFloat(i[1])/100):parseFloat(r)}function p1(e,t){var r=t||[],i=oe(r,2),o=i[0],s=i[1];return[v1(e.width,o),v1(e.height,s)]}function y1(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return[e[0],e[1]]}function Fo(e,t){var r=t[0],i=t[1],o,s;return r==="t"?s=e.y:r==="b"?s=e.y+e.height:s=e.y+e.height/2,i==="l"?o=e.x:i==="r"?o=e.x+e.width:o=e.x+e.width/2,{x:o,y:s}}function vi(e,t){var r={t:"b",b:"t",l:"r",r:"l"};return e.map(function(i,o){return o===t?r[i]||"c":i}).join("")}function QO(e,t,r,i,o,s,u){var d=f.useState({ready:!1,offsetX:0,offsetY:0,offsetR:0,offsetB:0,arrowX:0,arrowY:0,scaleX:1,scaleY:1,align:o[i]||{}}),m=oe(d,2),h=m[0],p=m[1],y=f.useRef(0),b=f.useMemo(function(){return t?gh(t):[]},[t]),w=f.useRef({}),C=function(){w.current={}};e||C();var x=Gn(function(){if(t&&r&&e){let Rn=function(sa,or){var pr=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Re,Ri=I.x+sa,Ka=I.y+or,so=Ri+Oe,Pe=Ka+Se,Ze=Math.max(Ri,pr.left),zt=Math.max(Ka,pr.top),Lt=Math.min(so,pr.right),Vt=Math.min(Pe,pr.bottom);return Math.max(0,(Lt-Ze)*(Vt-zt))},la=function(){Jn=I.y+ze,Kn=Jn+Se,hn=I.x+_e,un=hn+Oe};var fc=Rn,mc=la,R,T,z,O,A=t,P=A.ownerDocument,B=lc(A),N=B.getComputedStyle(A),H=N.width,j=N.height,W=N.position,V=A.style.left,U=A.style.top,Z=A.style.right,_=A.style.bottom,L=A.style.overflow,F=q(q({},o[i]),s),Y=P.createElement("div");(R=A.parentElement)===null||R===void 0||R.appendChild(Y),Y.style.left="".concat(A.offsetLeft,"px"),Y.style.top="".concat(A.offsetTop,"px"),Y.style.position=W,Y.style.height="".concat(A.offsetHeight,"px"),Y.style.width="".concat(A.offsetWidth,"px"),A.style.left="0",A.style.top="0",A.style.right="auto",A.style.bottom="auto",A.style.overflow="hidden";var M;if(Array.isArray(r))M={x:r[0],y:r[1],width:0,height:0};else{var k,K,X=r.getBoundingClientRect();X.x=(k=X.x)!==null&&k!==void 0?k:X.left,X.y=(K=X.y)!==null&&K!==void 0?K:X.top,M={x:X.x,y:X.y,width:X.width,height:X.height}}var I=A.getBoundingClientRect();I.x=(T=I.x)!==null&&T!==void 0?T:I.left,I.y=(z=I.y)!==null&&z!==void 0?z:I.top;var te=P.documentElement,ne=te.clientWidth,fe=te.clientHeight,ae=te.scrollWidth,ce=te.scrollHeight,de=te.scrollTop,xe=te.scrollLeft,Se=I.height,Oe=I.width,Ce=M.height,we=M.width,be={left:0,top:0,right:ne,bottom:fe},De={left:-xe,top:-de,right:ae-xe,bottom:ce-de},Te=F.htmlRegion,Be="visible",Ne="visibleFirst";Te!=="scroll"&&Te!==Ne&&(Te=Be);var $e=Te===Ne,Fe=h1(De,b),ye=h1(be,b),Re=Te===Be?ye:Fe,Ue=$e?ye:Re;A.style.left="auto",A.style.top="auto",A.style.right="0",A.style.bottom="0";var Ie=A.getBoundingClientRect();A.style.left=V,A.style.top=U,A.style.right=Z,A.style.bottom=_,A.style.overflow=L,(O=A.parentElement)===null||O===void 0||O.removeChild(Y);var at=Js(Math.round(Oe/parseFloat(H)*1e3)/1e3),qe=Js(Math.round(Se/parseFloat(j)*1e3)/1e3);if(at===0||qe===0||zs(r)&&!ev(r))return;var Ke=F.offset,Xe=F.targetOffset,et=p1(I,Ke),it=oe(et,2),je=it[0],Ee=it[1],Ye=p1(M,Xe),Je=oe(Ye,2),nt=Je[0],tn=Je[1];M.x-=nt,M.y-=tn;var kt=F.points||[],nn=oe(kt,2),qt=nn[0],Un=nn[1],Ft=y1(Un),$t=y1(qt),It=Fo(M,Ft),xt=Fo(I,$t),Ve=q({},F),_e=It.x-xt.x+je,ze=It.y-xt.y+Ee,ct=Rn(_e,ze),Pt=Rn(_e,ze,ye),wn=Fo(M,["t","l"]),ht=Fo(I,["t","l"]),Wn=Fo(M,["b","r"]),ar=Fo(I,["b","r"]),bt=F.overflow||{},ot=bt.adjustX,Ct=bt.adjustY,vt=bt.shiftX,jt=bt.shiftY,qn=function(or){return typeof or=="boolean"?or:or>=0},Jn,Kn,hn,un;la();var xn=qn(Ct),En=$t[0]===Ft[0];if(xn&&$t[0]==="t"&&(Kn>Ue.bottom||w.current.bt)){var ut=ze;En?ut-=Se-Ce:ut=wn.y-ar.y-Ee;var ir=Rn(_e,ut),lt=Rn(_e,ut,ye);ir>ct||ir===ct&&(!$e||lt>=Pt)?(w.current.bt=!0,ze=ut,Ee=-Ee,Ve.points=[vi($t,0),vi(Ft,0)]):w.current.bt=!1}if(xn&&$t[0]==="b"&&(Jn<Ue.top||w.current.tb)){var Ae=ze;En?Ae+=Se-Ce:Ae=Wn.y-ht.y-Ee;var dt=Rn(_e,Ae),Rt=Rn(_e,Ae,ye);dt>ct||dt===ct&&(!$e||Rt>=Pt)?(w.current.tb=!0,ze=Ae,Ee=-Ee,Ve.points=[vi($t,0),vi(Ft,0)]):w.current.tb=!1}var Kt=qn(ot),Yt=$t[1]===Ft[1];if(Kt&&$t[1]==="l"&&(un>Ue.right||w.current.rl)){var Xt=_e;Yt?Xt-=Oe-we:Xt=wn.x-ar.x-je;var dn=Rn(Xt,ze),Bn=Rn(Xt,ze,ye);dn>ct||dn===ct&&(!$e||Bn>=Pt)?(w.current.rl=!0,_e=Xt,je=-je,Ve.points=[vi($t,1),vi(Ft,1)]):w.current.rl=!1}if(Kt&&$t[1]==="r"&&(hn<Ue.left||w.current.lr)){var vn=_e;Yt?vn+=Oe-we:vn=Wn.x-ht.x-je;var ra=Rn(vn,ze),hr=Rn(vn,ze,ye);ra>ct||ra===ct&&(!$e||hr>=Pt)?(w.current.lr=!0,_e=vn,je=-je,Ve.points=[vi($t,1),vi(Ft,1)]):w.current.lr=!1}la();var $n=vt===!0?0:vt;typeof $n=="number"&&(hn<ye.left&&(_e-=hn-ye.left-je,M.x+we<ye.left+$n&&(_e+=M.x-ye.left+we-$n)),un>ye.right&&(_e-=un-ye.right-je,M.x>ye.right-$n&&(_e+=M.x-ye.right+$n)));var en=jt===!0?0:jt;typeof en=="number"&&(Jn<ye.top&&(ze-=Jn-ye.top-Ee,M.y+Ce<ye.top+en&&(ze+=M.y-ye.top+Ce-en)),Kn>ye.bottom&&(ze-=Kn-ye.bottom-Ee,M.y>ye.bottom-en&&(ze+=M.y-ye.bottom+en)));var pn=I.x+_e,Wr=pn+Oe,fr=I.y+ze,aa=fr+Se,_t=M.x,pt=_t+we,Tt=M.y,Dt=Tt+Ce,yn=Math.max(pn,_t),qr=Math.min(Wr,pt),Ar=(yn+qr)/2,Nr=Ar-pn,Sa=Math.max(fr,Tt),ia=Math.min(aa,Dt),Qn=(Sa+ia)/2,Ca=Qn-fr;u==null||u(t,Ve);var oa=Ie.right-I.x-(_e+I.width),vr=Ie.bottom-I.y-(ze+I.height);at===1&&(_e=Math.round(_e),oa=Math.round(oa)),qe===1&&(ze=Math.round(ze),vr=Math.round(vr));var $i={ready:!0,offsetX:_e/at,offsetY:ze/qe,offsetR:oa/at,offsetB:vr/qe,arrowX:Nr/at,arrowY:Ca/qe,scaleX:at,scaleY:qe,align:Ve};p($i)}}),S=function(){y.current+=1;var T=y.current;Promise.resolve().then(function(){y.current===T&&x()})},$=function(){p(function(T){return q(q({},T),{},{ready:!1})})};return _n($,[i]),_n(function(){e||$()},[e]),[h.ready,h.offsetX,h.offsetY,h.offsetR,h.offsetB,h.arrowX,h.arrowY,h.scaleX,h.scaleY,h.align,S]}function e9(e,t,r,i,o){_n(function(){if(e&&t&&r){let b=function(){i(),o()};var y=b,s=t,u=r,d=gh(s),m=gh(u),h=lc(u),p=new Set([h].concat(Le(d),Le(m)));return p.forEach(function(w){w.addEventListener("scroll",b,{passive:!0})}),h.addEventListener("resize",b,{passive:!0}),i(),function(){p.forEach(function(w){w.removeEventListener("scroll",b),h.removeEventListener("resize",b)})}}},[e,t,r])}function t9(e,t,r,i,o,s,u,d){var m=f.useRef(e);m.current=e;var h=f.useRef(!1);f.useEffect(function(){if(t&&i&&(!o||s)){var y=function(){h.current=!1},b=function(S){var $;m.current&&!u((($=S.composedPath)===null||$===void 0||($=$.call(S))===null||$===void 0?void 0:$[0])||S.target)&&!h.current&&d(!1)},w=lc(i);w.addEventListener("pointerdown",y,!0),w.addEventListener("mousedown",b,!0),w.addEventListener("contextmenu",b,!0);var C=qu(r);return C&&(C.addEventListener("mousedown",b,!0),C.addEventListener("contextmenu",b,!0)),function(){w.removeEventListener("pointerdown",y,!0),w.removeEventListener("mousedown",b,!0),w.removeEventListener("contextmenu",b,!0),C&&(C.removeEventListener("mousedown",b,!0),C.removeEventListener("contextmenu",b,!0))}}},[t,r,i,o,s]);function p(){h.current=!0}return p}var n9=["prefixCls","children","action","showAction","hideAction","popupVisible","defaultPopupVisible","onPopupVisibleChange","afterPopupVisibleChange","mouseEnterDelay","mouseLeaveDelay","focusDelay","blurDelay","mask","maskClosable","getPopupContainer","forceRender","autoDestroy","destroyPopupOnHide","popup","popupClassName","popupStyle","popupPlacement","builtinPlacements","popupAlign","zIndex","stretch","getPopupClassNameFromAlign","fresh","alignPoint","onPopupClick","onPopupAlign","arrow","popupMotion","maskMotion","popupTransitionName","popupAnimation","maskTransitionName","maskAnimation","className","getTriggerDOMNode"];function r9(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Cd,t=f.forwardRef(function(r,i){var o=r.prefixCls,s=o===void 0?"rc-trigger-popup":o,u=r.children,d=r.action,m=d===void 0?"hover":d,h=r.showAction,p=r.hideAction,y=r.popupVisible,b=r.defaultPopupVisible,w=r.onPopupVisibleChange,C=r.afterPopupVisibleChange,x=r.mouseEnterDelay,S=r.mouseLeaveDelay,$=S===void 0?.1:S,R=r.focusDelay,T=r.blurDelay,z=r.mask,O=r.maskClosable,A=O===void 0?!0:O,P=r.getPopupContainer,B=r.forceRender,N=r.autoDestroy,H=r.destroyPopupOnHide,j=r.popup,W=r.popupClassName,V=r.popupStyle,U=r.popupPlacement,Z=r.builtinPlacements,_=Z===void 0?{}:Z,L=r.popupAlign,F=r.zIndex,Y=r.stretch,M=r.getPopupClassNameFromAlign,k=r.fresh,K=r.alignPoint,X=r.onPopupClick,I=r.onPopupAlign,te=r.arrow,ne=r.popupMotion,fe=r.maskMotion,ae=r.popupTransitionName,ce=r.popupAnimation,de=r.maskTransitionName,xe=r.maskAnimation,Se=r.className,Oe=r.getTriggerDOMNode,Ce=rt(r,n9),we=N||H||!1,be=f.useState(!1),De=oe(be,2),Te=De[0],Be=De[1];_n(function(){Be(c2())},[]);var Ne=f.useRef({}),$e=f.useContext(f1),Fe=f.useMemo(function(){return{registerSubPopup:function(Ze,zt){Ne.current[Ze]=zt,$e==null||$e.registerSubPopup(Ze,zt)}}},[$e]),ye=rv(),Re=f.useState(null),Ue=oe(Re,2),Ie=Ue[0],at=Ue[1],qe=f.useRef(null),Ke=Gn(function(Pe){qe.current=Pe,zs(Pe)&&Ie!==Pe&&at(Pe),$e==null||$e.registerSubPopup(ye,Pe)}),Xe=f.useState(null),et=oe(Xe,2),it=et[0],je=et[1],Ee=f.useRef(null),Ye=Gn(function(Pe){zs(Pe)&&it!==Pe&&(je(Pe),Ee.current=Pe)}),Je=f.Children.only(u),nt=(Je==null?void 0:Je.props)||{},tn={},kt=Gn(function(Pe){var Ze,zt,Lt=it;return(Lt==null?void 0:Lt.contains(Pe))||((Ze=qu(Lt))===null||Ze===void 0?void 0:Ze.host)===Pe||Pe===Lt||(Ie==null?void 0:Ie.contains(Pe))||((zt=qu(Ie))===null||zt===void 0?void 0:zt.host)===Pe||Pe===Ie||Object.values(Ne.current).some(function(Vt){return(Vt==null?void 0:Vt.contains(Pe))||Pe===Vt})}),nn=g1(s,ne,ce,ae),qt=g1(s,fe,xe,de),Un=f.useState(b||!1),Ft=oe(Un,2),$t=Ft[0],It=Ft[1],xt=y??$t,Ve=Gn(function(Pe){y===void 0&&It(Pe)});_n(function(){It(y||!1)},[y]);var _e=f.useRef(xt);_e.current=xt;var ze=f.useRef([]);ze.current=[];var ct=Gn(function(Pe){var Ze;Ve(Pe),((Ze=ze.current[ze.current.length-1])!==null&&Ze!==void 0?Ze:xt)!==Pe&&(ze.current.push(Pe),w==null||w(Pe))}),Pt=f.useRef(),wn=function(){clearTimeout(Pt.current)},ht=function(Ze){var zt=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;wn(),zt===0?ct(Ze):Pt.current=setTimeout(function(){ct(Ze)},zt*1e3)};f.useEffect(function(){return wn},[]);var Wn=f.useState(!1),ar=oe(Wn,2),bt=ar[0],ot=ar[1];_n(function(Pe){(!Pe||xt)&&ot(!0)},[xt]);var Ct=f.useState(null),vt=oe(Ct,2),jt=vt[0],qn=vt[1],Jn=f.useState(null),Kn=oe(Jn,2),hn=Kn[0],un=Kn[1],xn=function(Ze){un([Ze.clientX,Ze.clientY])},En=QO(xt,Ie,K&&hn!==null?hn:it,U,_,L,I),ut=oe(En,11),ir=ut[0],lt=ut[1],Ae=ut[2],dt=ut[3],Rt=ut[4],Kt=ut[5],Yt=ut[6],Xt=ut[7],dn=ut[8],Bn=ut[9],vn=ut[10],ra=YO(Te,m,h,p),hr=oe(ra,2),$n=hr[0],en=hr[1],pn=$n.has("click"),Wr=en.has("click")||en.has("contextMenu"),fr=Gn(function(){bt||vn()}),aa=function(){_e.current&&K&&Wr&&ht(!1)};e9(xt,it,Ie,fr,aa),_n(function(){fr()},[hn,U]),_n(function(){xt&&!(_!=null&&_[U])&&fr()},[JSON.stringify(L)]);var _t=f.useMemo(function(){var Pe=ZO(_,s,Bn,K);return ue(Pe,M==null?void 0:M(Bn))},[Bn,M,_,s,K]);f.useImperativeHandle(i,function(){return{nativeElement:Ee.current,popupElement:qe.current,forceAlign:fr}});var pt=f.useState(0),Tt=oe(pt,2),Dt=Tt[0],yn=Tt[1],qr=f.useState(0),Ar=oe(qr,2),Nr=Ar[0],Sa=Ar[1],ia=function(){if(Y&&it){var Ze=it.getBoundingClientRect();yn(Ze.width),Sa(Ze.height)}},Qn=function(){ia(),fr()},Ca=function(Ze){ot(!1),vn(),C==null||C(Ze)},oa=function(){return new Promise(function(Ze){ia(),qn(function(){return Ze})})};_n(function(){jt&&(vn(),jt(),qn(null))},[jt]);function vr(Pe,Ze,zt,Lt){tn[Pe]=function(Vt){var wa;Lt==null||Lt(Vt),ht(Ze,zt);for(var co=arguments.length,Ti=new Array(co>1?co-1:0),xa=1;xa<co;xa++)Ti[xa-1]=arguments[xa];(wa=nt[Pe])===null||wa===void 0||wa.call.apply(wa,[nt,Vt].concat(Ti))}}(pn||Wr)&&(tn.onClick=function(Pe){var Ze;_e.current&&Wr?ht(!1):!_e.current&&pn&&(xn(Pe),ht(!0));for(var zt=arguments.length,Lt=new Array(zt>1?zt-1:0),Vt=1;Vt<zt;Vt++)Lt[Vt-1]=arguments[Vt];(Ze=nt.onClick)===null||Ze===void 0||Ze.call.apply(Ze,[nt,Pe].concat(Lt))});var $i=t9(xt,Wr,it,Ie,z,A,kt,ht),fc=$n.has("hover"),mc=en.has("hover"),Rn,la;fc&&(vr("onMouseEnter",!0,x,function(Pe){xn(Pe)}),vr("onPointerEnter",!0,x,function(Pe){xn(Pe)}),Rn=function(Ze){(xt||bt)&&Ie!==null&&Ie!==void 0&&Ie.contains(Ze.target)&&ht(!0,x)},K&&(tn.onMouseMove=function(Pe){var Ze;(Ze=nt.onMouseMove)===null||Ze===void 0||Ze.call(nt,Pe)})),mc&&(vr("onMouseLeave",!1,$),vr("onPointerLeave",!1,$),la=function(){ht(!1,$)}),$n.has("focus")&&vr("onFocus",!0,R),en.has("focus")&&vr("onBlur",!1,T),$n.has("contextMenu")&&(tn.onContextMenu=function(Pe){var Ze;_e.current&&en.has("contextMenu")?ht(!1):(xn(Pe),ht(!0)),Pe.preventDefault();for(var zt=arguments.length,Lt=new Array(zt>1?zt-1:0),Vt=1;Vt<zt;Vt++)Lt[Vt-1]=arguments[Vt];(Ze=nt.onContextMenu)===null||Ze===void 0||Ze.call.apply(Ze,[nt,Pe].concat(Lt))}),Se&&(tn.className=ue(nt.className,Se));var sa=q(q({},nt),tn),or={},pr=["onContextMenu","onClick","onMouseDown","onTouchStart","onMouseEnter","onMouseLeave","onFocus","onBlur"];pr.forEach(function(Pe){Ce[Pe]&&(or[Pe]=function(){for(var Ze,zt=arguments.length,Lt=new Array(zt),Vt=0;Vt<zt;Vt++)Lt[Vt]=arguments[Vt];(Ze=sa[Pe])===null||Ze===void 0||Ze.call.apply(Ze,[sa].concat(Lt)),Ce[Pe].apply(Ce,Lt)})});var Ri=f.cloneElement(Je,q(q({},sa),or)),Ka={x:Kt,y:Yt},so=te?q({},te!==!0?te:{}):null;return f.createElement(f.Fragment,null,f.createElement(ja,{disabled:!xt,ref:Ye,onResize:Qn},f.createElement(KO,{getTriggerDOMNode:Oe},Ri)),f.createElement(f1.Provider,{value:Fe},f.createElement(JO,{portal:e,ref:Ke,prefixCls:s,popup:j,className:ue(W,_t),style:V,target:it,onMouseEnter:Rn,onMouseLeave:la,onPointerEnter:Rn,zIndex:F,open:xt,keepDom:bt,fresh:k,onClick:X,onPointerDownCapture:$i,mask:z,motion:nn,maskMotion:qt,onVisibleChanged:Ca,onPrepare:oa,forceRender:B,autoDestroy:we,getPopupContainer:P,align:Bn,arrow:so,arrowPos:Ka,ready:ir,offsetX:lt,offsetY:Ae,offsetR:dt,offsetB:Rt,onAlign:fr,stretch:Y,targetWidth:Dt/Xt,targetHeight:Nr/dn})))});return t}const iv=r9(Cd);function hh(e,t,r){return ue({[`${e}-status-success`]:t==="success",[`${e}-status-warning`]:t==="warning",[`${e}-status-error`]:t==="error",[`${e}-status-validating`]:t==="validating",[`${e}-has-feedback`]:r})}const ov=(e,t)=>t||e,lv=function(e,t){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:void 0;var i,o;const{variant:s,[e]:u}=f.useContext(At),d=f.useContext(tO),m=u==null?void 0:u.variant;let h;typeof t<"u"?h=t:r===!1?h="borderless":h=(o=(i=d??m)!==null&&i!==void 0?i:s)!==null&&o!==void 0?o:"outlined";const p=$8.includes(h);return[h,p]};var a9={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"}}]},name:"search",theme:"outlined"},i9=function(t,r){return f.createElement(Hn,Me({},t,{ref:r,icon:a9}))},o9=f.forwardRef(i9);const Ks=["xxl","xl","lg","md","sm","xs"],l9=e=>({xs:`(max-width: ${e.screenXSMax}px)`,sm:`(min-width: ${e.screenSM}px)`,md:`(min-width: ${e.screenMD}px)`,lg:`(min-width: ${e.screenLG}px)`,xl:`(min-width: ${e.screenXL}px)`,xxl:`(min-width: ${e.screenXXL}px)`}),s9=e=>{const t=e,r=[].concat(Ks).reverse();return r.forEach((i,o)=>{const s=i.toUpperCase(),u=`screen${s}Min`,d=`screen${s}`;if(!(t[u]<=t[d]))throw new Error(`${u}<=${d} fails : !(${t[u]}<=${t[d]})`);if(o<r.length-1){const m=`screen${s}Max`;if(!(t[d]<=t[m]))throw new Error(`${d}<=${m} fails : !(${t[d]}<=${t[m]})`);const p=`screen${r[o+1].toUpperCase()}Min`;if(!(t[m]<=t[p]))throw new Error(`${m}<=${p} fails : !(${t[m]}<=${t[p]})`)}}),e};function c9(){const[,e]=Ja(),t=l9(s9(e));return he.useMemo(()=>{const r=new Map;let i=-1,o={};return{matchHandlers:{},dispatch(s){return o=s,r.forEach(u=>u(o)),r.size>=1},subscribe(s){return r.size||this.register(),i+=1,r.set(i,s),s(o),i},unsubscribe(s){r.delete(s),r.size||this.unregister()},unregister(){Object.keys(t).forEach(s=>{const u=t[s],d=this.matchHandlers[u];d==null||d.mql.removeListener(d==null?void 0:d.listener)}),r.clear()},register(){Object.keys(t).forEach(s=>{const u=t[s],d=h=>{let{matches:p}=h;this.dispatch(Object.assign(Object.assign({},o),{[s]:p}))},m=window.matchMedia(u);m.addListener(d),this.matchHandlers[u]={mql:m,listener:d},d(m)})},responsiveMap:t}},[e])}function u9(){const[,e]=f.useReducer(t=>t+1,0);return e}function d9(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=f.useRef(t),i=u9(),o=c9();return _n(()=>{const s=o.subscribe(u=>{r.current=u,e&&i()});return()=>o.unsubscribe(s)},[]),r.current}function m2(e){var t=e.children,r=e.prefixCls,i=e.id,o=e.overlayInnerStyle,s=e.bodyClassName,u=e.className,d=e.style;return f.createElement("div",{className:ue("".concat(r,"-content"),u),style:d},f.createElement("div",{className:ue("".concat(r,"-inner"),s),id:i,role:"tooltip",style:o},typeof t=="function"?t():t))}var Vo={shiftX:64,adjustY:1},Go={adjustX:1,shiftY:!0},Gr=[0,0],f9={left:{points:["cr","cl"],overflow:Go,offset:[-4,0],targetOffset:Gr},right:{points:["cl","cr"],overflow:Go,offset:[4,0],targetOffset:Gr},top:{points:["bc","tc"],overflow:Vo,offset:[0,-4],targetOffset:Gr},bottom:{points:["tc","bc"],overflow:Vo,offset:[0,4],targetOffset:Gr},topLeft:{points:["bl","tl"],overflow:Vo,offset:[0,-4],targetOffset:Gr},leftTop:{points:["tr","tl"],overflow:Go,offset:[-4,0],targetOffset:Gr},topRight:{points:["br","tr"],overflow:Vo,offset:[0,-4],targetOffset:Gr},rightTop:{points:["tl","tr"],overflow:Go,offset:[4,0],targetOffset:Gr},bottomRight:{points:["tr","br"],overflow:Vo,offset:[0,4],targetOffset:Gr},rightBottom:{points:["bl","br"],overflow:Go,offset:[4,0],targetOffset:Gr},bottomLeft:{points:["tl","bl"],overflow:Vo,offset:[0,4],targetOffset:Gr},leftBottom:{points:["br","bl"],overflow:Go,offset:[-4,0],targetOffset:Gr}},m9=["overlayClassName","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle","prefixCls","children","onVisibleChange","afterVisibleChange","transitionName","animation","motion","placement","align","destroyTooltipOnHide","defaultVisible","getTooltipContainer","overlayInnerStyle","arrowContent","overlay","id","showArrow","classNames","styles"],g9=function(t,r){var i=t.overlayClassName,o=t.trigger,s=o===void 0?["hover"]:o,u=t.mouseEnterDelay,d=u===void 0?0:u,m=t.mouseLeaveDelay,h=m===void 0?.1:m,p=t.overlayStyle,y=t.prefixCls,b=y===void 0?"rc-tooltip":y,w=t.children,C=t.onVisibleChange,x=t.afterVisibleChange,S=t.transitionName,$=t.animation,R=t.motion,T=t.placement,z=T===void 0?"right":T,O=t.align,A=O===void 0?{}:O,P=t.destroyTooltipOnHide,B=P===void 0?!1:P,N=t.defaultVisible,H=t.getTooltipContainer,j=t.overlayInnerStyle;t.arrowContent;var W=t.overlay,V=t.id,U=t.showArrow,Z=U===void 0?!0:U,_=t.classNames,L=t.styles,F=rt(t,m9),Y=rv(V),M=f.useRef(null);f.useImperativeHandle(r,function(){return M.current});var k=q({},F);"visible"in t&&(k.popupVisible=t.visible);var K=function(){return f.createElement(m2,{key:"content",prefixCls:b,id:Y,bodyClassName:_==null?void 0:_.body,overlayInnerStyle:q(q({},j),L==null?void 0:L.body)},W)},X=function(){var te=f.Children.only(w),ne=(te==null?void 0:te.props)||{},fe=q(q({},ne),{},{"aria-describedby":W?Y:null});return f.cloneElement(w,fe)};return f.createElement(iv,Me({popupClassName:ue(i,_==null?void 0:_.root),prefixCls:b,popup:K,action:s,builtinPlacements:f9,popupPlacement:z,ref:M,popupAlign:A,getPopupContainer:H,onPopupVisibleChange:C,afterPopupVisibleChange:x,popupTransitionName:S,popupAnimation:$,popupMotion:R,defaultPopupVisible:N,autoDestroy:B,mouseLeaveDelay:h,popupStyle:q(q({},p),L==null?void 0:L.root),mouseEnterDelay:d,arrow:Z},k),X())};const h9=f.forwardRef(g9);function v9(e){const{sizePopupArrow:t,borderRadiusXS:r,borderRadiusOuter:i}=e,o=t/2,s=0,u=o,d=i*1/Math.sqrt(2),m=o-i*(1-1/Math.sqrt(2)),h=o-r*(1/Math.sqrt(2)),p=i*(Math.sqrt(2)-1)+r*(1/Math.sqrt(2)),y=2*o-h,b=p,w=2*o-d,C=m,x=2*o-s,S=u,$=o*Math.sqrt(2)+i*(Math.sqrt(2)-2),R=i*(Math.sqrt(2)-1),T=`polygon(${R}px 100%, 50% ${R}px, ${2*o-R}px 100%, ${R}px 100%)`,z=`path('M ${s} ${u} A ${i} ${i} 0 0 0 ${d} ${m} L ${h} ${p} A ${r} ${r} 0 0 1 ${y} ${b} L ${w} ${C} A ${i} ${i} 0 0 0 ${x} ${S} Z')`;return{arrowShadowWidth:$,arrowPath:z,arrowPolygon:T}}const p9=(e,t,r)=>{const{sizePopupArrow:i,arrowPolygon:o,arrowPath:s,arrowShadowWidth:u,borderRadiusXS:d,calc:m}=e;return{pointerEvents:"none",width:i,height:i,overflow:"hidden","&::before":{position:"absolute",bottom:0,insetInlineStart:0,width:i,height:m(i).div(2).equal(),background:t,clipPath:{_multi_value_:!0,value:[o,s]},content:'""'},"&::after":{content:'""',position:"absolute",width:u,height:u,bottom:0,insetInline:0,margin:"auto",borderRadius:{_skip_check_:!0,value:`0 0 ${le(d)} 0`},transform:"translateY(50%) rotate(-135deg)",boxShadow:r,zIndex:0,background:"transparent"}}},g2=8;function h2(e){const{contentRadius:t,limitVerticalRadius:r}=e,i=t>12?t+2:12;return{arrowOffsetHorizontal:i,arrowOffsetVertical:r?g2:i}}function Cu(e,t){return e?t:{}}function y9(e,t,r){const{componentCls:i,boxShadowPopoverArrow:o,arrowOffsetVertical:s,arrowOffsetHorizontal:u}=e,{arrowDistance:d=0,arrowPlacement:m={left:!0,right:!0,top:!0,bottom:!0}}={};return{[i]:Object.assign(Object.assign(Object.assign(Object.assign({[`${i}-arrow`]:[Object.assign(Object.assign({position:"absolute",zIndex:1,display:"block"},p9(e,t,o)),{"&:before":{background:t}})]},Cu(!!m.top,{[[`&-placement-top > ${i}-arrow`,`&-placement-topLeft > ${i}-arrow`,`&-placement-topRight > ${i}-arrow`].join(",")]:{bottom:d,transform:"translateY(100%) rotate(180deg)"},[`&-placement-top > ${i}-arrow`]:{left:{_skip_check_:!0,value:"50%"},transform:"translateX(-50%) translateY(100%) rotate(180deg)"},"&-placement-topLeft":{"--arrow-offset-horizontal":u,[`> ${i}-arrow`]:{left:{_skip_check_:!0,value:u}}},"&-placement-topRight":{"--arrow-offset-horizontal":`calc(100% - ${le(u)})`,[`> ${i}-arrow`]:{right:{_skip_check_:!0,value:u}}}})),Cu(!!m.bottom,{[[`&-placement-bottom > ${i}-arrow`,`&-placement-bottomLeft > ${i}-arrow`,`&-placement-bottomRight > ${i}-arrow`].join(",")]:{top:d,transform:"translateY(-100%)"},[`&-placement-bottom > ${i}-arrow`]:{left:{_skip_check_:!0,value:"50%"},transform:"translateX(-50%) translateY(-100%)"},"&-placement-bottomLeft":{"--arrow-offset-horizontal":u,[`> ${i}-arrow`]:{left:{_skip_check_:!0,value:u}}},"&-placement-bottomRight":{"--arrow-offset-horizontal":`calc(100% - ${le(u)})`,[`> ${i}-arrow`]:{right:{_skip_check_:!0,value:u}}}})),Cu(!!m.left,{[[`&-placement-left > ${i}-arrow`,`&-placement-leftTop > ${i}-arrow`,`&-placement-leftBottom > ${i}-arrow`].join(",")]:{right:{_skip_check_:!0,value:d},transform:"translateX(100%) rotate(90deg)"},[`&-placement-left > ${i}-arrow`]:{top:{_skip_check_:!0,value:"50%"},transform:"translateY(-50%) translateX(100%) rotate(90deg)"},[`&-placement-leftTop > ${i}-arrow`]:{top:s},[`&-placement-leftBottom > ${i}-arrow`]:{bottom:s}})),Cu(!!m.right,{[[`&-placement-right > ${i}-arrow`,`&-placement-rightTop > ${i}-arrow`,`&-placement-rightBottom > ${i}-arrow`].join(",")]:{left:{_skip_check_:!0,value:d},transform:"translateX(-100%) rotate(-90deg)"},[`&-placement-right > ${i}-arrow`]:{top:{_skip_check_:!0,value:"50%"},transform:"translateY(-50%) translateX(-100%) rotate(-90deg)"},[`&-placement-rightTop > ${i}-arrow`]:{top:s},[`&-placement-rightBottom > ${i}-arrow`]:{bottom:s}}))}}function b9(e,t,r,i){if(i===!1)return{adjustX:!1,adjustY:!1};const o=i&&typeof i=="object"?i:{},s={};switch(e){case"top":case"bottom":s.shiftX=t.arrowOffsetHorizontal*2+r,s.shiftY=!0,s.adjustY=!0;break;case"left":case"right":s.shiftY=t.arrowOffsetVertical*2+r,s.shiftX=!0,s.adjustX=!0;break}const u=Object.assign(Object.assign({},s),o);return u.shiftX||(u.adjustX=!0),u.shiftY||(u.adjustY=!0),u}const b1={left:{points:["cr","cl"]},right:{points:["cl","cr"]},top:{points:["bc","tc"]},bottom:{points:["tc","bc"]},topLeft:{points:["bl","tl"]},leftTop:{points:["tr","tl"]},topRight:{points:["br","tr"]},rightTop:{points:["tl","tr"]},bottomRight:{points:["tr","br"]},rightBottom:{points:["bl","br"]},bottomLeft:{points:["tl","bl"]},leftBottom:{points:["br","bl"]}},S9={topLeft:{points:["bl","tc"]},leftTop:{points:["tr","cl"]},topRight:{points:["br","tc"]},rightTop:{points:["tl","cr"]},bottomRight:{points:["tr","bc"]},rightBottom:{points:["bl","cr"]},bottomLeft:{points:["tl","bc"]},leftBottom:{points:["br","cl"]}},C9=new Set(["topLeft","topRight","bottomLeft","bottomRight","leftTop","leftBottom","rightTop","rightBottom"]);function w9(e){const{arrowWidth:t,autoAdjustOverflow:r,arrowPointAtCenter:i,offset:o,borderRadius:s}=e,u=t/2,d={};return Object.keys(b1).forEach(m=>{const h=i&&S9[m]||b1[m],p=Object.assign(Object.assign({},h),{offset:[0,0],dynamicInset:!0});switch(d[m]=p,C9.has(m)&&(p.autoArrow=!1),m){case"top":case"topLeft":case"topRight":p.offset[1]=-u-o;break;case"bottom":case"bottomLeft":case"bottomRight":p.offset[1]=u+o;break;case"left":case"leftTop":case"leftBottom":p.offset[0]=-u-o;break;case"right":case"rightTop":case"rightBottom":p.offset[0]=u+o;break}const y=h2({contentRadius:s,limitVerticalRadius:!0});if(i)switch(m){case"topLeft":case"bottomLeft":p.offset[0]=-y.arrowOffsetHorizontal-u;break;case"topRight":case"bottomRight":p.offset[0]=y.arrowOffsetHorizontal+u;break;case"leftTop":case"rightTop":p.offset[1]=-y.arrowOffsetHorizontal*2+u;break;case"leftBottom":case"rightBottom":p.offset[1]=y.arrowOffsetHorizontal*2-u;break}p.overflow=b9(m,y,t,r),p.htmlRegion="visibleFirst"}),d}const x9=e=>{const{calc:t,componentCls:r,tooltipMaxWidth:i,tooltipColor:o,tooltipBg:s,tooltipBorderRadius:u,zIndexPopup:d,controlHeight:m,boxShadowSecondary:h,paddingSM:p,paddingXS:y,arrowOffsetHorizontal:b,sizePopupArrow:w}=e,C=t(u).add(w).add(b).equal(),x=t(u).mul(2).add(w).equal();return[{[r]:Object.assign(Object.assign(Object.assign(Object.assign({},Ei(e)),{position:"absolute",zIndex:d,display:"block",width:"max-content",maxWidth:i,visibility:"visible","--valid-offset-x":"var(--arrow-offset-horizontal, var(--arrow-x))",transformOrigin:["var(--valid-offset-x, 50%)","var(--arrow-y, 50%)"].join(" "),"&-hidden":{display:"none"},"--antd-arrow-background-color":s,[`${r}-inner`]:{minWidth:x,minHeight:m,padding:`${le(e.calc(p).div(2).equal())} ${le(y)}`,color:o,textAlign:"start",textDecoration:"none",wordWrap:"break-word",backgroundColor:s,borderRadius:u,boxShadow:h,boxSizing:"border-box"},[["&-placement-topLeft","&-placement-topRight","&-placement-bottomLeft","&-placement-bottomRight"].join(",")]:{minWidth:C},[["&-placement-left","&-placement-leftTop","&-placement-leftBottom","&-placement-right","&-placement-rightTop","&-placement-rightBottom"].join(",")]:{[`${r}-inner`]:{borderRadius:e.min(u,g2)}},[`${r}-content`]:{position:"relative"}}),Q8(e,(S,$)=>{let{darkColor:R}=$;return{[`&${r}-${S}`]:{[`${r}-inner`]:{backgroundColor:R},[`${r}-arrow`]:{"--antd-arrow-background-color":R}}}})),{"&-rtl":{direction:"rtl"}})},y9(e,"var(--antd-arrow-background-color)"),{[`${r}-pure`]:{position:"relative",maxWidth:"none",margin:e.sizePopupArrow}}]},E9=e=>Object.assign(Object.assign({zIndexPopup:e.zIndexPopupBase+70},h2({contentRadius:e.borderRadius,limitVerticalRadius:!0})),v9(sn(e,{borderRadiusOuter:Math.min(e.borderRadiusOuter,4)}))),v2=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return rr("Tooltip",i=>{const{borderRadius:o,colorTextLightSolid:s,colorBgSpotlight:u}=i,d=sn(i,{tooltipMaxWidth:250,tooltipColor:s,tooltipBorderRadius:o,tooltipBg:u});return[x9(d),gd(i,"zoom-big-fast")]},E9,{resetStyle:!1,injectStyle:t})(e)},$9=Qi.map(e=>`${e}-inverse`);function R9(e){return(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0)?[].concat(Le($9),Le(Qi)).includes(e):Qi.includes(e)}function p2(e,t){const r=R9(t),i=ue({[`${e}-${t}`]:t&&r}),o={},s={};return t&&!r&&(o.background=t,s["--antd-arrow-background-color"]=t),{className:i,overlayStyle:o,arrowStyle:s}}const T9=e=>{const{prefixCls:t,className:r,placement:i="top",title:o,color:s,overlayInnerStyle:u}=e,{getPrefixCls:d}=f.useContext(At),m=d("tooltip",t),[h,p,y]=v2(m),b=p2(m,s),w=b.arrowStyle,C=Object.assign(Object.assign({},u),b.overlayStyle),x=ue(p,y,m,`${m}-pure`,`${m}-placement-${i}`,r,b.className);return h(f.createElement("div",{className:x,style:w},f.createElement("div",{className:`${m}-arrow`}),f.createElement(m2,Object.assign({},e,{className:p,prefixCls:m,overlayInnerStyle:C}),o)))};var O9=function(e,t){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(r[i]=e[i]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(r[i[o]]=e[i[o]]);return r};const M9=f.forwardRef((e,t)=>{var r,i;const{prefixCls:o,openClassName:s,getTooltipContainer:u,color:d,overlayInnerStyle:m,children:h,afterOpenChange:p,afterVisibleChange:y,destroyTooltipOnHide:b,arrow:w=!0,title:C,overlay:x,builtinPlacements:S,arrowPointAtCenter:$=!1,autoAdjustOverflow:R=!0,motion:T,getPopupContainer:z,placement:O="top",mouseEnterDelay:A=.1,mouseLeaveDelay:P=.1,overlayStyle:B,rootClassName:N,overlayClassName:H,styles:j,classNames:W}=e,V=O9(e,["prefixCls","openClassName","getTooltipContainer","color","overlayInnerStyle","children","afterOpenChange","afterVisibleChange","destroyTooltipOnHide","arrow","title","overlay","builtinPlacements","arrowPointAtCenter","autoAdjustOverflow","motion","getPopupContainer","placement","mouseEnterDelay","mouseLeaveDelay","overlayStyle","rootClassName","overlayClassName","styles","classNames"]),U=!!w,[,Z]=Ja(),{getPopupContainer:_,getPrefixCls:L,direction:F,className:Y,style:M,classNames:k,styles:K}=io("tooltip"),X=cC(),I=f.useRef(null),te=()=>{var Xe;(Xe=I.current)===null||Xe===void 0||Xe.forceAlign()};f.useImperativeHandle(t,()=>{var Xe,et;return{forceAlign:te,forcePopupAlign:()=>{X.deprecated(!1,"forcePopupAlign","forceAlign"),te()},nativeElement:(Xe=I.current)===null||Xe===void 0?void 0:Xe.nativeElement,popupElement:(et=I.current)===null||et===void 0?void 0:et.popupElement}});const[ne,fe]=Or(!1,{value:(r=e.open)!==null&&r!==void 0?r:e.visible,defaultValue:(i=e.defaultOpen)!==null&&i!==void 0?i:e.defaultVisible}),ae=!C&&!x&&C!==0,ce=Xe=>{var et,it;fe(ae?!1:Xe),ae||((et=e.onOpenChange)===null||et===void 0||et.call(e,Xe),(it=e.onVisibleChange)===null||it===void 0||it.call(e,Xe))},de=f.useMemo(()=>{var Xe,et;let it=$;return typeof w=="object"&&(it=(et=(Xe=w.pointAtCenter)!==null&&Xe!==void 0?Xe:w.arrowPointAtCenter)!==null&&et!==void 0?et:$),S||w9({arrowPointAtCenter:it,autoAdjustOverflow:R,arrowWidth:U?Z.sizePopupArrow:0,borderRadius:Z.borderRadius,offset:Z.marginXXS})},[$,w,S,Z]),xe=f.useMemo(()=>C===0?C:x||C||"",[x,C]),Se=f.createElement(fh,{space:!0},typeof xe=="function"?xe():xe),Oe=L("tooltip",o),Ce=L(),we=e["data-popover-inject"];let be=ne;!("open"in e)&&!("visible"in e)&&ae&&(be=!1);const De=f.isValidElement(h)&&!jC(h)?h:f.createElement("span",null,h),Te=De.props,Be=!Te.className||typeof Te.className=="string"?ue(Te.className,s||`${Oe}-open`):Te.className,[Ne,$e,Fe]=v2(Oe,!we),ye=p2(Oe,d),Re=ye.arrowStyle,Ue=ue(H,{[`${Oe}-rtl`]:F==="rtl"},ye.className,N,$e,Fe,Y,k.root,W==null?void 0:W.root),Ie=ue(k.body,W==null?void 0:W.body),[at,qe]=dd("Tooltip",V.zIndex),Ke=f.createElement(h9,Object.assign({},V,{zIndex:at,showArrow:U,placement:O,mouseEnterDelay:A,mouseLeaveDelay:P,prefixCls:Oe,classNames:{root:Ue,body:Ie},styles:{root:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},Re),K.root),M),B),j==null?void 0:j.root),body:Object.assign(Object.assign(Object.assign(Object.assign({},K.body),m),j==null?void 0:j.body),ye.overlayStyle)},getTooltipContainer:z||u||_,ref:I,builtinPlacements:de,overlay:Se,visible:be,onVisibleChange:ce,afterVisibleChange:p??y,arrowContent:f.createElement("span",{className:`${Oe}-arrow-content`}),motion:{motionName:ul(Ce,"zoom-big-fast",e.transitionName),motionDeadline:1e3},destroyTooltipOnHide:!!b}),be?wi(De,{className:Be}):De);return Ne(f.createElement(kC.Provider,{value:qe},Ke))}),y2=M9;y2._InternalPanelDoNotUseOrYouWillBeFired=T9;var A9={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"}}]},name:"left",theme:"outlined"},N9=function(t,r){return f.createElement(Hn,Me({},t,{ref:r,icon:A9}))},vh=f.forwardRef(N9),P9=rn.ESC,_9=rn.TAB;function D9(e){var t=e.visible,r=e.triggerRef,i=e.onVisibleChange,o=e.autoFocus,s=e.overlayRef,u=f.useRef(!1),d=function(){if(t){var y,b;(y=r.current)===null||y===void 0||(b=y.focus)===null||b===void 0||b.call(y),i==null||i(!1)}},m=function(){var y;return(y=s.current)!==null&&y!==void 0&&y.focus?(s.current.focus(),u.current=!0,!0):!1},h=function(y){switch(y.keyCode){case P9:d();break;case _9:{var b=!1;u.current||(b=m()),b?y.preventDefault():d();break}}};f.useEffect(function(){return t?(window.addEventListener("keydown",h),o&&Cn(m,3),function(){window.removeEventListener("keydown",h),u.current=!1}):function(){u.current=!1}},[t])}var z9=f.forwardRef(function(e,t){var r=e.overlay,i=e.arrow,o=e.prefixCls,s=f.useMemo(function(){var d;return typeof r=="function"?d=r():d=r,d},[r]),u=Ua(t,gl(s));return he.createElement(he.Fragment,null,i&&he.createElement("div",{className:"".concat(o,"-arrow")}),he.cloneElement(s,{ref:ao(s)?u:void 0}))}),Uo={adjustX:1,adjustY:1},Wo=[0,0],L9={topLeft:{points:["bl","tl"],overflow:Uo,offset:[0,-4],targetOffset:Wo},top:{points:["bc","tc"],overflow:Uo,offset:[0,-4],targetOffset:Wo},topRight:{points:["br","tr"],overflow:Uo,offset:[0,-4],targetOffset:Wo},bottomLeft:{points:["tl","bl"],overflow:Uo,offset:[0,4],targetOffset:Wo},bottom:{points:["tc","bc"],overflow:Uo,offset:[0,4],targetOffset:Wo},bottomRight:{points:["tr","br"],overflow:Uo,offset:[0,4],targetOffset:Wo}},H9=["arrow","prefixCls","transitionName","animation","align","placement","placements","getPopupContainer","showAction","hideAction","overlayClassName","overlayStyle","visible","trigger","autoFocus","overlay","children","onVisibleChange"];function B9(e,t){var r,i=e.arrow,o=i===void 0?!1:i,s=e.prefixCls,u=s===void 0?"rc-dropdown":s,d=e.transitionName,m=e.animation,h=e.align,p=e.placement,y=p===void 0?"bottomLeft":p,b=e.placements,w=b===void 0?L9:b,C=e.getPopupContainer,x=e.showAction,S=e.hideAction,$=e.overlayClassName,R=e.overlayStyle,T=e.visible,z=e.trigger,O=z===void 0?["hover"]:z,A=e.autoFocus,P=e.overlay,B=e.children,N=e.onVisibleChange,H=rt(e,H9),j=he.useState(),W=oe(j,2),V=W[0],U=W[1],Z="visible"in e?T:V,_=he.useRef(null),L=he.useRef(null),F=he.useRef(null);he.useImperativeHandle(t,function(){return _.current});var Y=function(ae){U(ae),N==null||N(ae)};D9({visible:Z,triggerRef:F,onVisibleChange:Y,autoFocus:A,overlayRef:L});var M=function(ae){var ce=e.onOverlayClick;U(!1),ce&&ce(ae)},k=function(){return he.createElement(z9,{ref:L,overlay:P,prefixCls:u,arrow:o})},K=function(){return typeof P=="function"?k:k()},X=function(){var ae=e.minOverlayWidthMatchTrigger,ce=e.alignPoint;return"minOverlayWidthMatchTrigger"in e?ae:!ce},I=function(){var ae=e.openClassName;return ae!==void 0?ae:"".concat(u,"-open")},te=he.cloneElement(B,{className:ue((r=B.props)===null||r===void 0?void 0:r.className,Z&&I()),ref:ao(B)?Ua(F,gl(B)):void 0}),ne=S;return!ne&&O.indexOf("contextMenu")!==-1&&(ne=["click"]),he.createElement(iv,Me({builtinPlacements:w},H,{prefixCls:u,ref:_,popupClassName:ue($,J({},"".concat(u,"-show-arrow"),o)),popupStyle:R,action:O,showAction:x,hideAction:ne,popupPlacement:y,popupAlign:h,popupTransitionName:d,popupAnimation:m,popupVisible:Z,stretch:X()?"minWidth":"",popup:K(),onPopupVisibleChange:Y,onPopupClick:M,getPopupContainer:C}),te)}const I9=he.forwardRef(B9);var b2=f.createContext(null);function S2(e,t){return e===void 0?null:"".concat(e,"-").concat(t)}function C2(e){var t=f.useContext(b2);return S2(t,e)}var j9=["children","locked"],na=f.createContext(null);function k9(e,t){var r=q({},e);return Object.keys(t).forEach(function(i){var o=t[i];o!==void 0&&(r[i]=o)}),r}function Ys(e){var t=e.children,r=e.locked,i=rt(e,j9),o=f.useContext(na),s=id(function(){return k9(o,i)},[o,i],function(u,d){return!r&&(u[0]!==d[0]||!al(u[1],d[1],!0))});return f.createElement(na.Provider,{value:s},t)}var F9=[],w2=f.createContext(null);function Ed(){return f.useContext(w2)}var x2=f.createContext(F9);function Sl(e){var t=f.useContext(x2);return f.useMemo(function(){return e!==void 0?[].concat(Le(t),[e]):t},[t,e])}var E2=f.createContext(null),sv=f.createContext({});function S1(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(ev(e)){var r=e.nodeName.toLowerCase(),i=["input","select","textarea","button"].includes(r)||e.isContentEditable||r==="a"&&!!e.getAttribute("href"),o=e.getAttribute("tabindex"),s=Number(o),u=null;return o&&!Number.isNaN(s)?u=s:i&&u===null&&(u=0),i&&e.disabled&&(u=null),u!==null&&(u>=0||t&&u<0)}return!1}function V9(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r=Le(e.querySelectorAll("*")).filter(function(i){return S1(i,t)});return S1(e,t)&&r.unshift(e),r}var ph=rn.LEFT,yh=rn.RIGHT,bh=rn.UP,Iu=rn.DOWN,ju=rn.ENTER,$2=rn.ESC,ws=rn.HOME,xs=rn.END,C1=[bh,Iu,ph,yh];function G9(e,t,r,i){var o,s="prev",u="next",d="children",m="parent";if(e==="inline"&&i===ju)return{inlineTrigger:!0};var h=J(J({},bh,s),Iu,u),p=J(J(J(J({},ph,r?u:s),yh,r?s:u),Iu,d),ju,d),y=J(J(J(J(J(J({},bh,s),Iu,u),ju,d),$2,m),ph,r?d:m),yh,r?m:d),b={inline:h,horizontal:p,vertical:y,inlineSub:h,horizontalSub:y,verticalSub:y},w=(o=b["".concat(e).concat(t?"":"Sub")])===null||o===void 0?void 0:o[i];switch(w){case s:return{offset:-1,sibling:!0};case u:return{offset:1,sibling:!0};case m:return{offset:-1,sibling:!1};case d:return{offset:1,sibling:!1};default:return null}}function U9(e){for(var t=e;t;){if(t.getAttribute("data-menu-list"))return t;t=t.parentElement}return null}function W9(e,t){for(var r=e||document.activeElement;r;){if(t.has(r))return r;r=r.parentElement}return null}function cv(e,t){var r=V9(e,!0);return r.filter(function(i){return t.has(i)})}function w1(e,t,r){var i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;if(!e)return null;var o=cv(e,t),s=o.length,u=o.findIndex(function(d){return r===d});return i<0?u===-1?u=s-1:u-=1:i>0&&(u+=1),u=(u+s)%s,o[u]}var Sh=function(t,r){var i=new Set,o=new Map,s=new Map;return t.forEach(function(u){var d=document.querySelector("[data-menu-id='".concat(S2(r,u),"']"));d&&(i.add(d),s.set(d,u),o.set(u,d))}),{elements:i,key2element:o,element2key:s}};function q9(e,t,r,i,o,s,u,d,m,h){var p=f.useRef(),y=f.useRef();y.current=t;var b=function(){Cn.cancel(p.current)};return f.useEffect(function(){return function(){b()}},[]),function(w){var C=w.which;if([].concat(C1,[ju,$2,ws,xs]).includes(C)){var x=s(),S=Sh(x,i),$=S,R=$.elements,T=$.key2element,z=$.element2key,O=T.get(t),A=W9(O,R),P=z.get(A),B=G9(e,u(P,!0).length===1,r,C);if(!B&&C!==ws&&C!==xs)return;(C1.includes(C)||[ws,xs].includes(C))&&w.preventDefault();var N=function(L){if(L){var F=L,Y=L.querySelector("a");Y!=null&&Y.getAttribute("href")&&(F=Y);var M=z.get(L);d(M),b(),p.current=Cn(function(){y.current===M&&F.focus()})}};if([ws,xs].includes(C)||B.sibling||!A){var H;!A||e==="inline"?H=o.current:H=U9(A);var j,W=cv(H,R);C===ws?j=W[0]:C===xs?j=W[W.length-1]:j=w1(H,R,A,B.offset),N(j)}else if(B.inlineTrigger)m(P);else if(B.offset>0)m(P,!0),b(),p.current=Cn(function(){S=Sh(x,i);var _=A.getAttribute("aria-controls"),L=document.getElementById(_),F=w1(L,S.elements);N(F)},5);else if(B.offset<0){var V=u(P,!0),U=V[V.length-2],Z=T.get(U);m(U,!1),N(Z)}}h==null||h(w)}}function J9(e){Promise.resolve().then(e)}var uv="__RC_UTIL_PATH_SPLIT__",x1=function(t){return t.join(uv)},K9=function(t){return t.split(uv)},Ch="rc-menu-more";function Y9(){var e=f.useState({}),t=oe(e,2),r=t[1],i=f.useRef(new Map),o=f.useRef(new Map),s=f.useState([]),u=oe(s,2),d=u[0],m=u[1],h=f.useRef(0),p=f.useRef(!1),y=function(){p.current||r({})},b=f.useCallback(function(T,z){var O=x1(z);o.current.set(O,T),i.current.set(T,O),h.current+=1;var A=h.current;J9(function(){A===h.current&&y()})},[]),w=f.useCallback(function(T,z){var O=x1(z);o.current.delete(O),i.current.delete(T)},[]),C=f.useCallback(function(T){m(T)},[]),x=f.useCallback(function(T,z){var O=i.current.get(T)||"",A=K9(O);return z&&d.includes(A[0])&&A.unshift(Ch),A},[d]),S=f.useCallback(function(T,z){return T.filter(function(O){return O!==void 0}).some(function(O){var A=x(O,!0);return A.includes(z)})},[x]),$=function(){var z=Le(i.current.keys());return d.length&&z.push(Ch),z},R=f.useCallback(function(T){var z="".concat(i.current.get(T)).concat(uv),O=new Set;return Le(o.current.keys()).forEach(function(A){A.startsWith(z)&&O.add(o.current.get(A))}),O},[]);return f.useEffect(function(){return function(){p.current=!0}},[]),{registerPath:b,unregisterPath:w,refreshOverflowKeys:C,isSubPathKey:S,getKeyPath:x,getKeys:$,getSubPathKeys:R}}function Ts(e){var t=f.useRef(e);t.current=e;var r=f.useCallback(function(){for(var i,o=arguments.length,s=new Array(o),u=0;u<o;u++)s[u]=arguments[u];return(i=t.current)===null||i===void 0?void 0:i.call.apply(i,[t].concat(s))},[]);return e?r:void 0}var X9=Math.random().toFixed(5).toString().slice(2),E1=0;function Z9(e){var t=Or(e,{value:e}),r=oe(t,2),i=r[0],o=r[1];return f.useEffect(function(){E1+=1;var s="".concat(X9,"-").concat(E1);o("rc-menu-uuid-".concat(s))},[]),i}function R2(e,t,r,i){var o=f.useContext(na),s=o.activeKey,u=o.onActive,d=o.onInactive,m={active:s===e};return t||(m.onMouseEnter=function(h){r==null||r({key:e,domEvent:h}),u(e)},m.onMouseLeave=function(h){i==null||i({key:e,domEvent:h}),d(e)}),m}function T2(e){var t=f.useContext(na),r=t.mode,i=t.rtl,o=t.inlineIndent;if(r!=="inline")return null;var s=e;return i?{paddingRight:s*o}:{paddingLeft:s*o}}function O2(e){var t=e.icon,r=e.props,i=e.children,o;return t===null||t===!1?null:(typeof t=="function"?o=f.createElement(t,q({},r)):typeof t!="boolean"&&(o=t),o||i||null)}var Q9=["item"];function Zu(e){var t=e.item,r=rt(e,Q9);return Object.defineProperty(r,"item",{get:function(){return cr(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),t}}),r}var eM=["title","attribute","elementRef"],tM=["style","className","eventKey","warnKey","disabled","itemIcon","children","role","onMouseEnter","onMouseLeave","onClick","onKeyDown","onFocus"],nM=["active"],rM=function(e){Wa(r,e);var t=qa(r);function r(){return zn(this,r),t.apply(this,arguments)}return Ln(r,[{key:"render",value:function(){var o=this.props,s=o.title,u=o.attribute,d=o.elementRef,m=rt(o,eM),h=dr(m,["eventKey","popupClassName","popupOffset","onTitleClick"]);return cr(!u,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),f.createElement(Fa.Item,Me({},u,{title:typeof s=="string"?s:void 0},h,{ref:d}))}}]),r}(f.Component),aM=f.forwardRef(function(e,t){var r=e.style,i=e.className,o=e.eventKey;e.warnKey;var s=e.disabled,u=e.itemIcon,d=e.children,m=e.role,h=e.onMouseEnter,p=e.onMouseLeave,y=e.onClick,b=e.onKeyDown,w=e.onFocus,C=rt(e,tM),x=C2(o),S=f.useContext(na),$=S.prefixCls,R=S.onItemClick,T=S.disabled,z=S.overflowDisabled,O=S.itemIcon,A=S.selectedKeys,P=S.onActive,B=f.useContext(sv),N=B._internalRenderMenuItem,H="".concat($,"-item"),j=f.useRef(),W=f.useRef(),V=T||s,U=ro(t,W),Z=Sl(o),_=function(ce){return{key:o,keyPath:Le(Z).reverse(),item:j.current,domEvent:ce}},L=u||O,F=R2(o,V,h,p),Y=F.active,M=rt(F,nM),k=A.includes(o),K=T2(Z.length),X=function(ce){if(!V){var de=_(ce);y==null||y(Zu(de)),R(de)}},I=function(ce){if(b==null||b(ce),ce.which===rn.ENTER){var de=_(ce);y==null||y(Zu(de)),R(de)}},te=function(ce){P(o),w==null||w(ce)},ne={};e.role==="option"&&(ne["aria-selected"]=k);var fe=f.createElement(rM,Me({ref:j,elementRef:U,role:m===null?"none":m||"menuitem",tabIndex:s?null:-1,"data-menu-id":z&&x?null:x},dr(C,["extra"]),M,ne,{component:"li","aria-disabled":s,style:q(q({},K),r),className:ue(H,J(J(J({},"".concat(H,"-active"),Y),"".concat(H,"-selected"),k),"".concat(H,"-disabled"),V),i),onClick:X,onKeyDown:I,onFocus:te}),d,f.createElement(O2,{props:q(q({},e),{},{isSelected:k}),icon:L}));return N&&(fe=N(fe,e,{selected:k})),fe});function iM(e,t){var r=e.eventKey,i=Ed(),o=Sl(r);return f.useEffect(function(){if(i)return i.registerPath(r,o),function(){i.unregisterPath(r,o)}},[o]),i?null:f.createElement(aM,Me({},e,{ref:t}))}const sc=f.forwardRef(iM);var oM=["className","children"],lM=function(t,r){var i=t.className,o=t.children,s=rt(t,oM),u=f.useContext(na),d=u.prefixCls,m=u.mode,h=u.rtl;return f.createElement("ul",Me({className:ue(d,h&&"".concat(d,"-rtl"),"".concat(d,"-sub"),"".concat(d,"-").concat(m==="inline"?"inline":"vertical"),i),role:"menu"},s,{"data-menu-list":!0,ref:r}),o)},dv=f.forwardRef(lM);dv.displayName="SubMenuList";function fv(e,t){return Ci(e).map(function(r,i){if(f.isValidElement(r)){var o,s,u=r.key,d=(o=(s=r.props)===null||s===void 0?void 0:s.eventKey)!==null&&o!==void 0?o:u,m=d==null;m&&(d="tmp_key-".concat([].concat(Le(t),[i]).join("-")));var h={key:d,eventKey:d};return f.cloneElement(r,h)}return r})}var nr={adjustX:1,adjustY:1},sM={topLeft:{points:["bl","tl"],overflow:nr},topRight:{points:["br","tr"],overflow:nr},bottomLeft:{points:["tl","bl"],overflow:nr},bottomRight:{points:["tr","br"],overflow:nr},leftTop:{points:["tr","tl"],overflow:nr},leftBottom:{points:["br","bl"],overflow:nr},rightTop:{points:["tl","tr"],overflow:nr},rightBottom:{points:["bl","br"],overflow:nr}},cM={topLeft:{points:["bl","tl"],overflow:nr},topRight:{points:["br","tr"],overflow:nr},bottomLeft:{points:["tl","bl"],overflow:nr},bottomRight:{points:["tr","br"],overflow:nr},rightTop:{points:["tr","tl"],overflow:nr},rightBottom:{points:["br","bl"],overflow:nr},leftTop:{points:["tl","tr"],overflow:nr},leftBottom:{points:["bl","br"],overflow:nr}};function M2(e,t,r){if(t)return t;if(r)return r[e]||r.other}var uM={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function dM(e){var t=e.prefixCls,r=e.visible,i=e.children,o=e.popup,s=e.popupStyle,u=e.popupClassName,d=e.popupOffset,m=e.disabled,h=e.mode,p=e.onVisibleChange,y=f.useContext(na),b=y.getPopupContainer,w=y.rtl,C=y.subMenuOpenDelay,x=y.subMenuCloseDelay,S=y.builtinPlacements,$=y.triggerSubMenuAction,R=y.forceSubMenuRender,T=y.rootClassName,z=y.motion,O=y.defaultMotions,A=f.useState(!1),P=oe(A,2),B=P[0],N=P[1],H=q(w?q({},cM):q({},sM),S),j=uM[h],W=M2(h,z,O),V=f.useRef(W);h!=="inline"&&(V.current=W);var U=q(q({},V.current),{},{leavedClassName:"".concat(t,"-hidden"),removeOnLeave:!1,motionAppear:!0}),Z=f.useRef();return f.useEffect(function(){return Z.current=Cn(function(){N(r)}),function(){Cn.cancel(Z.current)}},[r]),f.createElement(iv,{prefixCls:t,popupClassName:ue("".concat(t,"-popup"),J({},"".concat(t,"-rtl"),w),u,T),stretch:h==="horizontal"?"minWidth":null,getPopupContainer:b,builtinPlacements:H,popupPlacement:j,popupVisible:B,popup:o,popupStyle:s,popupAlign:d&&{offset:d},action:m?[]:[$],mouseEnterDelay:C,mouseLeaveDelay:x,onPopupVisibleChange:p,forceRender:R,popupMotion:U,fresh:!0},i)}function fM(e){var t=e.id,r=e.open,i=e.keyPath,o=e.children,s="inline",u=f.useContext(na),d=u.prefixCls,m=u.forceSubMenuRender,h=u.motion,p=u.defaultMotions,y=u.mode,b=f.useRef(!1);b.current=y===s;var w=f.useState(!b.current),C=oe(w,2),x=C[0],S=C[1],$=b.current?r:!1;f.useEffect(function(){b.current&&S(!1)},[y]);var R=q({},M2(s,h,p));i.length>1&&(R.motionAppear=!1);var T=R.onVisibleChanged;return R.onVisibleChanged=function(z){return!b.current&&!z&&S(!0),T==null?void 0:T(z)},x?null:f.createElement(Ys,{mode:s,locked:!b.current},f.createElement(ba,Me({visible:$},R,{forceRender:m,removeOnLeave:!1,leavedClassName:"".concat(d,"-hidden")}),function(z){var O=z.className,A=z.style;return f.createElement(dv,{id:t,className:O,style:A},o)}))}var mM=["style","className","title","eventKey","warnKey","disabled","internalPopupClose","children","itemIcon","expandIcon","popupClassName","popupOffset","popupStyle","onClick","onMouseEnter","onMouseLeave","onTitleClick","onTitleMouseEnter","onTitleMouseLeave"],gM=["active"],hM=f.forwardRef(function(e,t){var r=e.style,i=e.className,o=e.title,s=e.eventKey;e.warnKey;var u=e.disabled,d=e.internalPopupClose,m=e.children,h=e.itemIcon,p=e.expandIcon,y=e.popupClassName,b=e.popupOffset,w=e.popupStyle,C=e.onClick,x=e.onMouseEnter,S=e.onMouseLeave,$=e.onTitleClick,R=e.onTitleMouseEnter,T=e.onTitleMouseLeave,z=rt(e,mM),O=C2(s),A=f.useContext(na),P=A.prefixCls,B=A.mode,N=A.openKeys,H=A.disabled,j=A.overflowDisabled,W=A.activeKey,V=A.selectedKeys,U=A.itemIcon,Z=A.expandIcon,_=A.onItemClick,L=A.onOpenChange,F=A.onActive,Y=f.useContext(sv),M=Y._internalRenderSubMenuItem,k=f.useContext(E2),K=k.isSubPathKey,X=Sl(),I="".concat(P,"-submenu"),te=H||u,ne=f.useRef(),fe=f.useRef(),ae=h??U,ce=p??Z,de=N.includes(s),xe=!j&&de,Se=K(V,s),Oe=R2(s,te,R,T),Ce=Oe.active,we=rt(Oe,gM),be=f.useState(!1),De=oe(be,2),Te=De[0],Be=De[1],Ne=function(Je){te||Be(Je)},$e=function(Je){Ne(!0),x==null||x({key:s,domEvent:Je})},Fe=function(Je){Ne(!1),S==null||S({key:s,domEvent:Je})},ye=f.useMemo(function(){return Ce||(B!=="inline"?Te||K([W],s):!1)},[B,Ce,W,Te,s,K]),Re=T2(X.length),Ue=function(Je){te||($==null||$({key:s,domEvent:Je}),B==="inline"&&L(s,!de))},Ie=Ts(function(Ye){C==null||C(Zu(Ye)),_(Ye)}),at=function(Je){B!=="inline"&&L(s,Je)},qe=function(){F(s)},Ke=O&&"".concat(O,"-popup"),Xe=f.useMemo(function(){return f.createElement(O2,{icon:B!=="horizontal"?ce:void 0,props:q(q({},e),{},{isOpen:xe,isSubMenu:!0})},f.createElement("i",{className:"".concat(I,"-arrow")}))},[B,ce,e,xe,I]),et=f.createElement("div",Me({role:"menuitem",style:Re,className:"".concat(I,"-title"),tabIndex:te?null:-1,ref:ne,title:typeof o=="string"?o:null,"data-menu-id":j&&O?null:O,"aria-expanded":xe,"aria-haspopup":!0,"aria-controls":Ke,"aria-disabled":te,onClick:Ue,onFocus:qe},we),o,Xe),it=f.useRef(B);if(B!=="inline"&&X.length>1?it.current="vertical":it.current=B,!j){var je=it.current;et=f.createElement(dM,{mode:je,prefixCls:I,visible:!d&&xe&&B!=="inline",popupClassName:y,popupOffset:b,popupStyle:w,popup:f.createElement(Ys,{mode:je==="horizontal"?"vertical":je},f.createElement(dv,{id:Ke,ref:fe},m)),disabled:te,onVisibleChange:at},et)}var Ee=f.createElement(Fa.Item,Me({ref:t,role:"none"},z,{component:"li",style:r,className:ue(I,"".concat(I,"-").concat(B),i,J(J(J(J({},"".concat(I,"-open"),xe),"".concat(I,"-active"),ye),"".concat(I,"-selected"),Se),"".concat(I,"-disabled"),te)),onMouseEnter:$e,onMouseLeave:Fe}),et,!j&&f.createElement(fM,{id:Ke,open:xe,keyPath:X},m));return M&&(Ee=M(Ee,e,{selected:Se,active:ye,open:xe,disabled:te})),f.createElement(Ys,{onItemClick:Ie,mode:B==="horizontal"?"vertical":B,itemIcon:ae,expandIcon:ce},Ee)}),$d=f.forwardRef(function(e,t){var r=e.eventKey,i=e.children,o=Sl(r),s=fv(i,o),u=Ed();f.useEffect(function(){if(u)return u.registerPath(r,o),function(){u.unregisterPath(r,o)}},[o]);var d;return u?d=s:d=f.createElement(hM,Me({ref:t},e),s),f.createElement(x2.Provider,{value:o},d)});function mv(e){var t=e.className,r=e.style,i=f.useContext(na),o=i.prefixCls,s=Ed();return s?null:f.createElement("li",{role:"separator",className:ue("".concat(o,"-item-divider"),t),style:r})}var vM=["className","title","eventKey","children"],pM=f.forwardRef(function(e,t){var r=e.className,i=e.title;e.eventKey;var o=e.children,s=rt(e,vM),u=f.useContext(na),d=u.prefixCls,m="".concat(d,"-item-group");return f.createElement("li",Me({ref:t,role:"presentation"},s,{onClick:function(p){return p.stopPropagation()},className:ue(m,r)}),f.createElement("div",{role:"presentation",className:"".concat(m,"-title"),title:typeof i=="string"?i:void 0},i),f.createElement("ul",{role:"group",className:"".concat(m,"-list")},o))}),gv=f.forwardRef(function(e,t){var r=e.eventKey,i=e.children,o=Sl(r),s=fv(i,o),u=Ed();return u?s:f.createElement(pM,Me({ref:t},dr(e,["warnKey"])),s)}),yM=["label","children","key","type","extra"];function wh(e,t,r){var i=t.item,o=t.group,s=t.submenu,u=t.divider;return(e||[]).map(function(d,m){if(d&&Ge(d)==="object"){var h=d,p=h.label,y=h.children,b=h.key,w=h.type,C=h.extra,x=rt(h,yM),S=b??"tmp-".concat(m);return y||w==="group"?w==="group"?f.createElement(o,Me({key:S},x,{title:p}),wh(y,t,r)):f.createElement(s,Me({key:S},x,{title:p}),wh(y,t,r)):w==="divider"?f.createElement(u,Me({key:S},x)):f.createElement(i,Me({key:S},x,{extra:C}),p,(!!C||C===0)&&f.createElement("span",{className:"".concat(r,"-item-extra")},C))}return null}).filter(function(d){return d})}function $1(e,t,r,i,o){var s=e,u=q({divider:mv,item:sc,group:gv,submenu:$d},i);return t&&(s=wh(t,u,o)),fv(s,r)}var bM=["prefixCls","rootClassName","style","className","tabIndex","items","children","direction","id","mode","inlineCollapsed","disabled","disabledOverflow","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","defaultOpenKeys","openKeys","activeKey","defaultActiveFirst","selectable","multiple","defaultSelectedKeys","selectedKeys","onSelect","onDeselect","inlineIndent","motion","defaultMotions","triggerSubMenuAction","builtinPlacements","itemIcon","expandIcon","overflowedIndicator","overflowedIndicatorPopupClassName","getPopupContainer","onClick","onOpenChange","onKeyDown","openAnimation","openTransitionName","_internalRenderMenuItem","_internalRenderSubMenuItem","_internalComponents"],Ji=[],SM=f.forwardRef(function(e,t){var r,i=e,o=i.prefixCls,s=o===void 0?"rc-menu":o,u=i.rootClassName,d=i.style,m=i.className,h=i.tabIndex,p=h===void 0?0:h,y=i.items,b=i.children,w=i.direction,C=i.id,x=i.mode,S=x===void 0?"vertical":x,$=i.inlineCollapsed,R=i.disabled,T=i.disabledOverflow,z=i.subMenuOpenDelay,O=z===void 0?.1:z,A=i.subMenuCloseDelay,P=A===void 0?.1:A,B=i.forceSubMenuRender,N=i.defaultOpenKeys,H=i.openKeys,j=i.activeKey,W=i.defaultActiveFirst,V=i.selectable,U=V===void 0?!0:V,Z=i.multiple,_=Z===void 0?!1:Z,L=i.defaultSelectedKeys,F=i.selectedKeys,Y=i.onSelect,M=i.onDeselect,k=i.inlineIndent,K=k===void 0?24:k,X=i.motion,I=i.defaultMotions,te=i.triggerSubMenuAction,ne=te===void 0?"hover":te,fe=i.builtinPlacements,ae=i.itemIcon,ce=i.expandIcon,de=i.overflowedIndicator,xe=de===void 0?"...":de,Se=i.overflowedIndicatorPopupClassName,Oe=i.getPopupContainer,Ce=i.onClick,we=i.onOpenChange,be=i.onKeyDown;i.openAnimation,i.openTransitionName;var De=i._internalRenderMenuItem,Te=i._internalRenderSubMenuItem,Be=i._internalComponents,Ne=rt(i,bM),$e=f.useMemo(function(){return[$1(b,y,Ji,Be,s),$1(b,y,Ji,{},s)]},[b,y,Be]),Fe=oe($e,2),ye=Fe[0],Re=Fe[1],Ue=f.useState(!1),Ie=oe(Ue,2),at=Ie[0],qe=Ie[1],Ke=f.useRef(),Xe=Z9(C),et=w==="rtl",it=Or(N,{value:H,postState:function(pt){return pt||Ji}}),je=oe(it,2),Ee=je[0],Ye=je[1],Je=function(pt){var Tt=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;function Dt(){Ye(pt),we==null||we(pt)}Tt?ec.flushSync(Dt):Dt()},nt=f.useState(Ee),tn=oe(nt,2),kt=tn[0],nn=tn[1],qt=f.useRef(!1),Un=f.useMemo(function(){return(S==="inline"||S==="vertical")&&$?["vertical",$]:[S,!1]},[S,$]),Ft=oe(Un,2),$t=Ft[0],It=Ft[1],xt=$t==="inline",Ve=f.useState($t),_e=oe(Ve,2),ze=_e[0],ct=_e[1],Pt=f.useState(It),wn=oe(Pt,2),ht=wn[0],Wn=wn[1];f.useEffect(function(){ct($t),Wn(It),qt.current&&(xt?Ye(kt):Je(Ji))},[$t,It]);var ar=f.useState(0),bt=oe(ar,2),ot=bt[0],Ct=bt[1],vt=ot>=ye.length-1||ze!=="horizontal"||T;f.useEffect(function(){xt&&nn(Ee)},[Ee]),f.useEffect(function(){return qt.current=!0,function(){qt.current=!1}},[]);var jt=Y9(),qn=jt.registerPath,Jn=jt.unregisterPath,Kn=jt.refreshOverflowKeys,hn=jt.isSubPathKey,un=jt.getKeyPath,xn=jt.getKeys,En=jt.getSubPathKeys,ut=f.useMemo(function(){return{registerPath:qn,unregisterPath:Jn}},[qn,Jn]),ir=f.useMemo(function(){return{isSubPathKey:hn}},[hn]);f.useEffect(function(){Kn(vt?Ji:ye.slice(ot+1).map(function(_t){return _t.key}))},[ot,vt]);var lt=Or(j||W&&((r=ye[0])===null||r===void 0?void 0:r.key),{value:j}),Ae=oe(lt,2),dt=Ae[0],Rt=Ae[1],Kt=Ts(function(_t){Rt(_t)}),Yt=Ts(function(){Rt(void 0)});f.useImperativeHandle(t,function(){return{list:Ke.current,focus:function(pt){var Tt,Dt=xn(),yn=Sh(Dt,Xe),qr=yn.elements,Ar=yn.key2element,Nr=yn.element2key,Sa=cv(Ke.current,qr),ia=dt??(Sa[0]?Nr.get(Sa[0]):(Tt=ye.find(function(oa){return!oa.props.disabled}))===null||Tt===void 0?void 0:Tt.key),Qn=Ar.get(ia);if(ia&&Qn){var Ca;Qn==null||(Ca=Qn.focus)===null||Ca===void 0||Ca.call(Qn,pt)}}}});var Xt=Or(L||[],{value:F,postState:function(pt){return Array.isArray(pt)?pt:pt==null?Ji:[pt]}}),dn=oe(Xt,2),Bn=dn[0],vn=dn[1],ra=function(pt){if(U){var Tt=pt.key,Dt=Bn.includes(Tt),yn;_?Dt?yn=Bn.filter(function(Ar){return Ar!==Tt}):yn=[].concat(Le(Bn),[Tt]):yn=[Tt],vn(yn);var qr=q(q({},pt),{},{selectedKeys:yn});Dt?M==null||M(qr):Y==null||Y(qr)}!_&&Ee.length&&ze!=="inline"&&Je(Ji)},hr=Ts(function(_t){Ce==null||Ce(Zu(_t)),ra(_t)}),$n=Ts(function(_t,pt){var Tt=Ee.filter(function(yn){return yn!==_t});if(pt)Tt.push(_t);else if(ze!=="inline"){var Dt=En(_t);Tt=Tt.filter(function(yn){return!Dt.has(yn)})}al(Ee,Tt,!0)||Je(Tt,!0)}),en=function(pt,Tt){var Dt=Tt??!Ee.includes(pt);$n(pt,Dt)},pn=q9(ze,dt,et,Xe,Ke,xn,un,Rt,en,be);f.useEffect(function(){qe(!0)},[]);var Wr=f.useMemo(function(){return{_internalRenderMenuItem:De,_internalRenderSubMenuItem:Te}},[De,Te]),fr=ze!=="horizontal"||T?ye:ye.map(function(_t,pt){return f.createElement(Ys,{key:_t.key,overflowDisabled:pt>ot},_t)}),aa=f.createElement(Fa,Me({id:C,ref:Ke,prefixCls:"".concat(s,"-overflow"),component:"ul",itemComponent:sc,className:ue(s,"".concat(s,"-root"),"".concat(s,"-").concat(ze),m,J(J({},"".concat(s,"-inline-collapsed"),ht),"".concat(s,"-rtl"),et),u),dir:w,style:d,role:"menu",tabIndex:p,data:fr,renderRawItem:function(pt){return pt},renderRawRest:function(pt){var Tt=pt.length,Dt=Tt?ye.slice(-Tt):null;return f.createElement($d,{eventKey:Ch,title:xe,disabled:vt,internalPopupClose:Tt===0,popupClassName:Se},Dt)},maxCount:ze!=="horizontal"||T?Fa.INVALIDATE:Fa.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(pt){Ct(pt)},onKeyDown:pn},Ne));return f.createElement(sv.Provider,{value:Wr},f.createElement(b2.Provider,{value:Xe},f.createElement(Ys,{prefixCls:s,rootClassName:u,mode:ze,openKeys:Ee,rtl:et,disabled:R,motion:at?X:null,defaultMotions:at?I:null,activeKey:dt,onActive:Kt,onInactive:Yt,selectedKeys:Bn,inlineIndent:K,subMenuOpenDelay:O,subMenuCloseDelay:P,forceSubMenuRender:B,builtinPlacements:fe,triggerSubMenuAction:ne,getPopupContainer:Oe,itemIcon:ae,expandIcon:ce,onItemClick:hr,onOpenChange:$n},f.createElement(E2.Provider,{value:ir},aa),f.createElement("div",{style:{display:"none"},"aria-hidden":!0},f.createElement(w2.Provider,{value:ut},Re)))))}),Cl=SM;Cl.Item=sc;Cl.SubMenu=$d;Cl.ItemGroup=gv;Cl.Divider=mv;var CM={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"bars",theme:"outlined"},wM=function(t,r){return f.createElement(Hn,Me({},t,{ref:r,icon:CM}))},xM=f.forwardRef(wM);const A2=f.createContext({siderHook:{addSider:()=>null,removeSider:()=>null}}),EM=e=>{const{antCls:t,componentCls:r,colorText:i,footerBg:o,headerHeight:s,headerPadding:u,headerColor:d,footerPadding:m,fontSize:h,bodyBg:p,headerBg:y}=e;return{[r]:{display:"flex",flex:"auto",flexDirection:"column",minHeight:0,background:p,"&, *":{boxSizing:"border-box"},[`&${r}-has-sider`]:{flexDirection:"row",[`> ${r}, > ${r}-content`]:{width:0}},[`${r}-header, &${r}-footer`]:{flex:"0 0 auto"},"&-rtl":{direction:"rtl"}},[`${r}-header`]:{height:s,padding:u,color:d,lineHeight:le(s),background:y,[`${t}-menu`]:{lineHeight:"inherit"}},[`${r}-footer`]:{padding:m,color:i,fontSize:h,background:o},[`${r}-content`]:{flex:"auto",color:i,minHeight:0}}},N2=e=>{const{colorBgLayout:t,controlHeight:r,controlHeightLG:i,colorText:o,controlHeightSM:s,marginXXS:u,colorTextLightSolid:d,colorBgContainer:m}=e,h=i*1.25;return{colorBgHeader:"#001529",colorBgBody:t,colorBgTrigger:"#002140",bodyBg:t,headerBg:"#001529",headerHeight:r*2,headerPadding:`0 ${h}px`,headerColor:o,footerPadding:`${s}px ${h}px`,footerBg:t,siderBg:"#001529",triggerHeight:i+u*2,triggerBg:"#002140",triggerColor:d,zeroTriggerWidth:i,zeroTriggerHeight:i,lightSiderBg:m,lightTriggerBg:m,lightTriggerColor:o}},P2=[["colorBgBody","bodyBg"],["colorBgHeader","headerBg"],["colorBgTrigger","triggerBg"]],_2=rr("Layout",e=>[EM(e)],N2,{deprecatedTokens:P2}),$M=e=>{const{componentCls:t,siderBg:r,motionDurationMid:i,motionDurationSlow:o,antCls:s,triggerHeight:u,triggerColor:d,triggerBg:m,headerHeight:h,zeroTriggerWidth:p,zeroTriggerHeight:y,borderRadiusLG:b,lightSiderBg:w,lightTriggerColor:C,lightTriggerBg:x,bodyBg:S}=e;return{[t]:{position:"relative",minWidth:0,background:r,transition:`all ${i}, background 0s`,"&-has-trigger":{paddingBottom:u},"&-right":{order:1},[`${t}-children`]:{height:"100%",marginTop:-.1,paddingTop:.1,[`${s}-menu${s}-menu-inline-collapsed`]:{width:"auto"}},[`&-zero-width ${t}-children`]:{overflow:"hidden"},[`${t}-trigger`]:{position:"fixed",bottom:0,zIndex:1,height:u,color:d,lineHeight:le(u),textAlign:"center",background:m,cursor:"pointer",transition:`all ${i}`},[`${t}-zero-width-trigger`]:{position:"absolute",top:h,insetInlineEnd:e.calc(p).mul(-1).equal(),zIndex:1,width:p,height:y,color:d,fontSize:e.fontSizeXL,display:"flex",alignItems:"center",justifyContent:"center",background:r,borderRadius:`0 ${le(b)} ${le(b)} 0`,cursor:"pointer",transition:`background ${o} ease`,"&::after":{position:"absolute",inset:0,background:"transparent",transition:`all ${o}`,content:'""'},"&:hover::after":{background:"rgba(255, 255, 255, 0.2)"},"&-right":{insetInlineStart:e.calc(p).mul(-1).equal(),borderRadius:`${le(b)} 0 0 ${le(b)}`}},"&-light":{background:w,[`${t}-trigger`]:{color:C,background:x},[`${t}-zero-width-trigger`]:{color:C,background:x,border:`1px solid ${S}`,borderInlineStart:0}}}}},RM=rr(["Layout","Sider"],e=>[$M(e)],N2,{deprecatedTokens:P2});var TM=function(e,t){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(r[i]=e[i]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(r[i[o]]=e[i[o]]);return r};const R1={xs:"479.98px",sm:"575.98px",md:"767.98px",lg:"991.98px",xl:"1199.98px",xxl:"1599.98px"},OM=e=>!Number.isNaN(Number.parseFloat(e))&&isFinite(e),Rd=f.createContext({}),MM=(()=>{let e=0;return function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return e+=1,`${t}${e}`}})(),D2=f.forwardRef((e,t)=>{const{prefixCls:r,className:i,trigger:o,children:s,defaultCollapsed:u=!1,theme:d="dark",style:m={},collapsible:h=!1,reverseArrow:p=!1,width:y=200,collapsedWidth:b=80,zeroWidthTriggerStyle:w,breakpoint:C,onCollapse:x,onBreakpoint:S}=e,$=TM(e,["prefixCls","className","trigger","children","defaultCollapsed","theme","style","collapsible","reverseArrow","width","collapsedWidth","zeroWidthTriggerStyle","breakpoint","onCollapse","onBreakpoint"]),{siderHook:R}=f.useContext(A2),[T,z]=f.useState("collapsed"in e?e.collapsed:u),[O,A]=f.useState(!1);f.useEffect(()=>{"collapsed"in e&&z(e.collapsed)},[e.collapsed]);const P=(ae,ce)=>{"collapsed"in e||z(ae),x==null||x(ae,ce)},{getPrefixCls:B,direction:N}=f.useContext(At),H=B("layout-sider",r),[j,W,V]=RM(H),U=f.useRef(null);U.current=ae=>{A(ae.matches),S==null||S(ae.matches),T!==ae.matches&&P(ae.matches,"responsive")},f.useEffect(()=>{function ae(de){return U.current(de)}let ce;if(typeof window<"u"){const{matchMedia:de}=window;if(de&&C&&C in R1){ce=de(`screen and (max-width: ${R1[C]})`);try{ce.addEventListener("change",ae)}catch{ce.addListener(ae)}ae(ce)}}return()=>{try{ce==null||ce.removeEventListener("change",ae)}catch{ce==null||ce.removeListener(ae)}}},[C]),f.useEffect(()=>{const ae=MM("ant-sider-");return R.addSider(ae),()=>R.removeSider(ae)},[]);const Z=()=>{P(!T,"clickTrigger")},_=dr($,["collapsed"]),L=T?b:y,F=OM(L)?`${L}px`:String(L),Y=parseFloat(String(b||0))===0?f.createElement("span",{onClick:Z,className:ue(`${H}-zero-width-trigger`,`${H}-zero-width-trigger-${p?"right":"left"}`),style:w},o||f.createElement(xM,null)):null,M=N==="rtl"==!p,X={expanded:M?f.createElement(th,null):f.createElement(vh,null),collapsed:M?f.createElement(vh,null):f.createElement(th,null)}[T?"collapsed":"expanded"],I=o!==null?Y||f.createElement("div",{className:`${H}-trigger`,onClick:Z,style:{width:F}},o||X):null,te=Object.assign(Object.assign({},m),{flex:`0 0 ${F}`,maxWidth:F,minWidth:F,width:F}),ne=ue(H,`${H}-${d}`,{[`${H}-collapsed`]:!!T,[`${H}-has-trigger`]:h&&o!==null&&!Y,[`${H}-below`]:!!O,[`${H}-zero-width`]:parseFloat(F)===0},i,W,V),fe=f.useMemo(()=>({siderCollapsed:T}),[T]);return j(f.createElement(Rd.Provider,{value:fe},f.createElement("aside",Object.assign({className:ne},_,{style:te,ref:t}),f.createElement("div",{className:`${H}-children`},s),h||O&&Y?I:null)))});var AM={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"ellipsis",theme:"outlined"},NM=function(t,r){return f.createElement(Hn,Me({},t,{ref:r,icon:AM}))},z2=f.forwardRef(NM);const Qu=f.createContext({prefixCls:"",firstLevel:!0,inlineCollapsed:!1});var PM=function(e,t){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(r[i]=e[i]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(r[i[o]]=e[i[o]]);return r};const L2=e=>{const{prefixCls:t,className:r,dashed:i}=e,o=PM(e,["prefixCls","className","dashed"]),{getPrefixCls:s}=f.useContext(At),u=s("menu",t),d=ue({[`${u}-item-divider-dashed`]:!!i},r);return f.createElement(mv,Object.assign({className:d},o))},H2=e=>{var t;const{className:r,children:i,icon:o,title:s,danger:u,extra:d}=e,{prefixCls:m,firstLevel:h,direction:p,disableMenuItemTitleTooltip:y,inlineCollapsed:b}=f.useContext(Qu),w=T=>{const z=i==null?void 0:i[0],O=f.createElement("span",{className:ue(`${m}-title-content`,{[`${m}-title-content-with-extra`]:!!d||d===0})},i);return(!o||f.isValidElement(i)&&i.type==="span")&&i&&T&&h&&typeof z=="string"?f.createElement("div",{className:`${m}-inline-collapsed-noicon`},z.charAt(0)):O},{siderCollapsed:C}=f.useContext(Rd);let x=s;typeof s>"u"?x=h?i:"":s===!1&&(x="");const S={title:x};!C&&!b&&(S.title=null,S.open=!1);const $=Ci(i).length;let R=f.createElement(sc,Object.assign({},dr(e,["title","icon","danger"]),{className:ue({[`${m}-item-danger`]:u,[`${m}-item-only-child`]:(o?$+1:$)===1},r),title:typeof s=="string"?s:void 0}),wi(o,{className:ue(f.isValidElement(o)?(t=o.props)===null||t===void 0?void 0:t.className:"",`${m}-item-icon`)}),w(b));return y||(R=f.createElement(y2,Object.assign({},S,{placement:p==="rtl"?"left":"right",classNames:{root:`${m}-inline-collapsed-tooltip`}}),R)),R},T1=f.createContext(null),_M=e=>{const{componentCls:t,motionDurationSlow:r,horizontalLineHeight:i,colorSplit:o,lineWidth:s,lineType:u,itemPaddingInline:d}=e;return{[`${t}-horizontal`]:{lineHeight:i,border:0,borderBottom:`${le(s)} ${u} ${o}`,boxShadow:"none","&::after":{display:"block",clear:"both",height:0,content:'"\\20"'},[`${t}-item, ${t}-submenu`]:{position:"relative",display:"inline-block",verticalAlign:"bottom",paddingInline:d},[`> ${t}-item:hover,
        > ${t}-item-active,
        > ${t}-submenu ${t}-submenu-title:hover`]:{backgroundColor:"transparent"},[`${t}-item, ${t}-submenu-title`]:{transition:[`border-color ${r}`,`background ${r}`].join(",")},[`${t}-submenu-arrow`]:{display:"none"}}}},DM=e=>{let{componentCls:t,menuArrowOffset:r,calc:i}=e;return{[`${t}-rtl`]:{direction:"rtl"},[`${t}-submenu-rtl`]:{transformOrigin:"100% 0"},[`${t}-rtl${t}-vertical,
    ${t}-submenu-rtl ${t}-vertical`]:{[`${t}-submenu-arrow`]:{"&::before":{transform:`rotate(-45deg) translateY(${le(i(r).mul(-1).equal())})`},"&::after":{transform:`rotate(45deg) translateY(${le(r)})`}}}}},O1=e=>Object.assign({},ud(e)),M1=(e,t)=>{const{componentCls:r,itemColor:i,itemSelectedColor:o,subMenuItemSelectedColor:s,groupTitleColor:u,itemBg:d,subMenuItemBg:m,itemSelectedBg:h,activeBarHeight:p,activeBarWidth:y,activeBarBorderWidth:b,motionDurationSlow:w,motionEaseInOut:C,motionEaseOut:x,itemPaddingInline:S,motionDurationMid:$,itemHoverColor:R,lineType:T,colorSplit:z,itemDisabledColor:O,dangerItemColor:A,dangerItemHoverColor:P,dangerItemSelectedColor:B,dangerItemActiveBg:N,dangerItemSelectedBg:H,popupBg:j,itemHoverBg:W,itemActiveBg:V,menuSubMenuBg:U,horizontalItemSelectedColor:Z,horizontalItemSelectedBg:_,horizontalItemBorderRadius:L,horizontalItemHoverBg:F}=e;return{[`${r}-${t}, ${r}-${t} > ${r}`]:{color:i,background:d,[`&${r}-root:focus-visible`]:Object.assign({},O1(e)),[`${r}-item`]:{"&-group-title, &-extra":{color:u}},[`${r}-submenu-selected > ${r}-submenu-title`]:{color:s},[`${r}-item, ${r}-submenu-title`]:{color:i,[`&:not(${r}-item-disabled):focus-visible`]:Object.assign({},O1(e))},[`${r}-item-disabled, ${r}-submenu-disabled`]:{color:`${O} !important`},[`${r}-item:not(${r}-item-selected):not(${r}-submenu-selected)`]:{[`&:hover, > ${r}-submenu-title:hover`]:{color:R}},[`&:not(${r}-horizontal)`]:{[`${r}-item:not(${r}-item-selected)`]:{"&:hover":{backgroundColor:W},"&:active":{backgroundColor:V}},[`${r}-submenu-title`]:{"&:hover":{backgroundColor:W},"&:active":{backgroundColor:V}}},[`${r}-item-danger`]:{color:A,[`&${r}-item:hover`]:{[`&:not(${r}-item-selected):not(${r}-submenu-selected)`]:{color:P}},[`&${r}-item:active`]:{background:N}},[`${r}-item a`]:{"&, &:hover":{color:"inherit"}},[`${r}-item-selected`]:{color:o,[`&${r}-item-danger`]:{color:B},"a, a:hover":{color:"inherit"}},[`& ${r}-item-selected`]:{backgroundColor:h,[`&${r}-item-danger`]:{backgroundColor:H}},[`&${r}-submenu > ${r}`]:{backgroundColor:U},[`&${r}-popup > ${r}`]:{backgroundColor:j},[`&${r}-submenu-popup > ${r}`]:{backgroundColor:j},[`&${r}-horizontal`]:Object.assign(Object.assign({},t==="dark"?{borderBottom:0}:{}),{[`> ${r}-item, > ${r}-submenu`]:{top:b,marginTop:e.calc(b).mul(-1).equal(),marginBottom:0,borderRadius:L,"&::after":{position:"absolute",insetInline:S,bottom:0,borderBottom:`${le(p)} solid transparent`,transition:`border-color ${w} ${C}`,content:'""'},"&:hover, &-active, &-open":{background:F,"&::after":{borderBottomWidth:p,borderBottomColor:Z}},"&-selected":{color:Z,backgroundColor:_,"&:hover":{backgroundColor:_},"&::after":{borderBottomWidth:p,borderBottomColor:Z}}}}),[`&${r}-root`]:{[`&${r}-inline, &${r}-vertical`]:{borderInlineEnd:`${le(b)} ${T} ${z}`}},[`&${r}-inline`]:{[`${r}-sub${r}-inline`]:{background:m},[`${r}-item`]:{position:"relative","&::after":{position:"absolute",insetBlock:0,insetInlineEnd:0,borderInlineEnd:`${le(y)} solid ${o}`,transform:"scaleY(0.0001)",opacity:0,transition:[`transform ${$} ${x}`,`opacity ${$} ${x}`].join(","),content:'""'},[`&${r}-item-danger`]:{"&::after":{borderInlineEndColor:B}}},[`${r}-selected, ${r}-item-selected`]:{"&::after":{transform:"scaleY(1)",opacity:1,transition:[`transform ${$} ${C}`,`opacity ${$} ${C}`].join(",")}}}}}},A1=e=>{const{componentCls:t,itemHeight:r,itemMarginInline:i,padding:o,menuArrowSize:s,marginXS:u,itemMarginBlock:d,itemWidth:m,itemPaddingInline:h}=e,p=e.calc(s).add(o).add(u).equal();return{[`${t}-item`]:{position:"relative",overflow:"hidden"},[`${t}-item, ${t}-submenu-title`]:{height:r,lineHeight:le(r),paddingInline:h,overflow:"hidden",textOverflow:"ellipsis",marginInline:i,marginBlock:d,width:m},[`> ${t}-item,
            > ${t}-submenu > ${t}-submenu-title`]:{height:r,lineHeight:le(r)},[`${t}-item-group-list ${t}-submenu-title,
            ${t}-submenu-title`]:{paddingInlineEnd:p}}},zM=e=>{const{componentCls:t,iconCls:r,itemHeight:i,colorTextLightSolid:o,dropdownWidth:s,controlHeightLG:u,motionEaseOut:d,paddingXL:m,itemMarginInline:h,fontSizeLG:p,motionDurationFast:y,motionDurationSlow:b,paddingXS:w,boxShadowSecondary:C,collapsedWidth:x,collapsedIconSize:S}=e,$={height:i,lineHeight:le(i),listStylePosition:"inside",listStyleType:"disc"};return[{[t]:{"&-inline, &-vertical":Object.assign({[`&${t}-root`]:{boxShadow:"none"}},A1(e))},[`${t}-submenu-popup`]:{[`${t}-vertical`]:Object.assign(Object.assign({},A1(e)),{boxShadow:C})}},{[`${t}-submenu-popup ${t}-vertical${t}-sub`]:{minWidth:s,maxHeight:`calc(100vh - ${le(e.calc(u).mul(2.5).equal())})`,padding:"0",overflow:"hidden",borderInlineEnd:0,"&:not([class*='-active'])":{overflowX:"hidden",overflowY:"auto"}}},{[`${t}-inline`]:{width:"100%",[`&${t}-root`]:{[`${t}-item, ${t}-submenu-title`]:{display:"flex",alignItems:"center",transition:[`border-color ${b}`,`background ${b}`,`padding ${y} ${d}`].join(","),[`> ${t}-title-content`]:{flex:"auto",minWidth:0,overflow:"hidden",textOverflow:"ellipsis"},"> *":{flex:"none"}}},[`${t}-sub${t}-inline`]:{padding:0,border:0,borderRadius:0,boxShadow:"none",[`& > ${t}-submenu > ${t}-submenu-title`]:$,[`& ${t}-item-group-title`]:{paddingInlineStart:m}},[`${t}-item`]:$}},{[`${t}-inline-collapsed`]:{width:x,[`&${t}-root`]:{[`${t}-item, ${t}-submenu ${t}-submenu-title`]:{[`> ${t}-inline-collapsed-noicon`]:{fontSize:p,textAlign:"center"}}},[`> ${t}-item,
          > ${t}-item-group > ${t}-item-group-list > ${t}-item,
          > ${t}-item-group > ${t}-item-group-list > ${t}-submenu > ${t}-submenu-title,
          > ${t}-submenu > ${t}-submenu-title`]:{insetInlineStart:0,paddingInline:`calc(50% - ${le(e.calc(S).div(2).equal())} - ${le(h)})`,textOverflow:"clip",[`
            ${t}-submenu-arrow,
            ${t}-submenu-expand-icon
          `]:{opacity:0},[`${t}-item-icon, ${r}`]:{margin:0,fontSize:S,lineHeight:le(i),"+ span":{display:"inline-block",opacity:0}}},[`${t}-item-icon, ${r}`]:{display:"inline-block"},"&-tooltip":{pointerEvents:"none",[`${t}-item-icon, ${r}`]:{display:"none"},"a, a:hover":{color:o}},[`${t}-item-group-title`]:Object.assign(Object.assign({},nc),{paddingInline:w})}}]},N1=e=>{const{componentCls:t,motionDurationSlow:r,motionDurationMid:i,motionEaseInOut:o,motionEaseOut:s,iconCls:u,iconSize:d,iconMarginInlineEnd:m}=e;return{[`${t}-item, ${t}-submenu-title`]:{position:"relative",display:"block",margin:0,whiteSpace:"nowrap",cursor:"pointer",transition:[`border-color ${r}`,`background ${r}`,`padding calc(${r} + 0.1s) ${o}`].join(","),[`${t}-item-icon, ${u}`]:{minWidth:d,fontSize:d,transition:[`font-size ${i} ${s}`,`margin ${r} ${o}`,`color ${r}`].join(","),"+ span":{marginInlineStart:m,opacity:1,transition:[`opacity ${r} ${o}`,`margin ${r}`,`color ${r}`].join(",")}},[`${t}-item-icon`]:Object.assign({},Xh()),[`&${t}-item-only-child`]:{[`> ${u}, > ${t}-item-icon`]:{marginInlineEnd:0}}},[`${t}-item-disabled, ${t}-submenu-disabled`]:{background:"none !important",cursor:"not-allowed","&::after":{borderColor:"transparent !important"},a:{color:"inherit !important",cursor:"not-allowed",pointerEvents:"none"},[`> ${t}-submenu-title`]:{color:"inherit !important",cursor:"not-allowed"}}}},P1=e=>{const{componentCls:t,motionDurationSlow:r,motionEaseInOut:i,borderRadius:o,menuArrowSize:s,menuArrowOffset:u}=e;return{[`${t}-submenu`]:{"&-expand-icon, &-arrow":{position:"absolute",top:"50%",insetInlineEnd:e.margin,width:s,color:"currentcolor",transform:"translateY(-50%)",transition:`transform ${r} ${i}, opacity ${r}`},"&-arrow":{"&::before, &::after":{position:"absolute",width:e.calc(s).mul(.6).equal(),height:e.calc(s).mul(.15).equal(),backgroundColor:"currentcolor",borderRadius:o,transition:[`background ${r} ${i}`,`transform ${r} ${i}`,`top ${r} ${i}`,`color ${r} ${i}`].join(","),content:'""'},"&::before":{transform:`rotate(45deg) translateY(${le(e.calc(u).mul(-1).equal())})`},"&::after":{transform:`rotate(-45deg) translateY(${le(u)})`}}}}},LM=e=>{const{antCls:t,componentCls:r,fontSize:i,motionDurationSlow:o,motionDurationMid:s,motionEaseInOut:u,paddingXS:d,padding:m,colorSplit:h,lineWidth:p,zIndexPopup:y,borderRadiusLG:b,subMenuItemBorderRadius:w,menuArrowSize:C,menuArrowOffset:x,lineType:S,groupTitleLineHeight:$,groupTitleFontSize:R}=e;return[{"":{[r]:Object.assign(Object.assign({},eo()),{"&-hidden":{display:"none"}})},[`${r}-submenu-hidden`]:{display:"none"}},{[r]:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},Ei(e)),eo()),{marginBottom:0,paddingInlineStart:0,fontSize:i,lineHeight:0,listStyle:"none",outline:"none",transition:`width ${o} cubic-bezier(0.2, 0, 0, 1) 0s`,"ul, ol":{margin:0,padding:0,listStyle:"none"},"&-overflow":{display:"flex",[`${r}-item`]:{flex:"none"}},[`${r}-item, ${r}-submenu, ${r}-submenu-title`]:{borderRadius:e.itemBorderRadius},[`${r}-item-group-title`]:{padding:`${le(d)} ${le(m)}`,fontSize:R,lineHeight:$,transition:`all ${o}`},[`&-horizontal ${r}-submenu`]:{transition:[`border-color ${o} ${u}`,`background ${o} ${u}`].join(",")},[`${r}-submenu, ${r}-submenu-inline`]:{transition:[`border-color ${o} ${u}`,`background ${o} ${u}`,`padding ${s} ${u}`].join(",")},[`${r}-submenu ${r}-sub`]:{cursor:"initial",transition:[`background ${o} ${u}`,`padding ${o} ${u}`].join(",")},[`${r}-title-content`]:{transition:`color ${o}`,"&-with-extra":{display:"inline-flex",alignItems:"center",width:"100%"},[`> ${t}-typography-ellipsis-single-line`]:{display:"inline",verticalAlign:"unset"},[`${r}-item-extra`]:{marginInlineStart:"auto",paddingInlineStart:e.padding}},[`${r}-item a`]:{"&::before":{position:"absolute",inset:0,backgroundColor:"transparent",content:'""'}},[`${r}-item-divider`]:{overflow:"hidden",lineHeight:0,borderColor:h,borderStyle:S,borderWidth:0,borderTopWidth:p,marginBlock:p,padding:0,"&-dashed":{borderStyle:"dashed"}}}),N1(e)),{[`${r}-item-group`]:{[`${r}-item-group-list`]:{margin:0,padding:0,[`${r}-item, ${r}-submenu-title`]:{paddingInline:`${le(e.calc(i).mul(2).equal())} ${le(m)}`}}},"&-submenu":{"&-popup":{position:"absolute",zIndex:y,borderRadius:b,boxShadow:"none",transformOrigin:"0 0",[`&${r}-submenu`]:{background:"transparent"},"&::before":{position:"absolute",inset:0,zIndex:-1,width:"100%",height:"100%",opacity:0,content:'""'},[`> ${r}`]:Object.assign(Object.assign(Object.assign({borderRadius:b},N1(e)),P1(e)),{[`${r}-item, ${r}-submenu > ${r}-submenu-title`]:{borderRadius:w},[`${r}-submenu-title::after`]:{transition:`transform ${o} ${u}`}})},"\n          &-placement-leftTop,\n          &-placement-bottomRight,\n          ":{transformOrigin:"100% 0"},"\n          &-placement-leftBottom,\n          &-placement-topRight,\n          ":{transformOrigin:"100% 100%"},"\n          &-placement-rightBottom,\n          &-placement-topLeft,\n          ":{transformOrigin:"0 100%"},"\n          &-placement-bottomLeft,\n          &-placement-rightTop,\n          ":{transformOrigin:"0 0"},"\n          &-placement-leftTop,\n          &-placement-leftBottom\n          ":{paddingInlineEnd:e.paddingXS},"\n          &-placement-rightTop,\n          &-placement-rightBottom\n          ":{paddingInlineStart:e.paddingXS},"\n          &-placement-topRight,\n          &-placement-topLeft\n          ":{paddingBottom:e.paddingXS},"\n          &-placement-bottomRight,\n          &-placement-bottomLeft\n          ":{paddingTop:e.paddingXS}}}),P1(e)),{[`&-inline-collapsed ${r}-submenu-arrow,
        &-inline ${r}-submenu-arrow`]:{"&::before":{transform:`rotate(-45deg) translateX(${le(x)})`},"&::after":{transform:`rotate(45deg) translateX(${le(e.calc(x).mul(-1).equal())})`}},[`${r}-submenu-open${r}-submenu-inline > ${r}-submenu-title > ${r}-submenu-arrow`]:{transform:`translateY(${le(e.calc(C).mul(.2).mul(-1).equal())})`,"&::after":{transform:`rotate(-45deg) translateX(${le(e.calc(x).mul(-1).equal())})`},"&::before":{transform:`rotate(45deg) translateX(${le(x)})`}}})},{[`${t}-layout-header`]:{[r]:{lineHeight:"inherit"}}}]},HM=e=>{var t,r,i;const{colorPrimary:o,colorError:s,colorTextDisabled:u,colorErrorBg:d,colorText:m,colorTextDescription:h,colorBgContainer:p,colorFillAlter:y,colorFillContent:b,lineWidth:w,lineWidthBold:C,controlItemBgActive:x,colorBgTextHover:S,controlHeightLG:$,lineHeight:R,colorBgElevated:T,marginXXS:z,padding:O,fontSize:A,controlHeightSM:P,fontSizeLG:B,colorTextLightSolid:N,colorErrorHover:H}=e,j=(t=e.activeBarWidth)!==null&&t!==void 0?t:0,W=(r=e.activeBarBorderWidth)!==null&&r!==void 0?r:w,V=(i=e.itemMarginInline)!==null&&i!==void 0?i:e.marginXXS,U=new Bt(N).setA(.65).toRgbString();return{dropdownWidth:160,zIndexPopup:e.zIndexPopupBase+50,radiusItem:e.borderRadiusLG,itemBorderRadius:e.borderRadiusLG,radiusSubMenuItem:e.borderRadiusSM,subMenuItemBorderRadius:e.borderRadiusSM,colorItemText:m,itemColor:m,colorItemTextHover:m,itemHoverColor:m,colorItemTextHoverHorizontal:o,horizontalItemHoverColor:o,colorGroupTitle:h,groupTitleColor:h,colorItemTextSelected:o,itemSelectedColor:o,subMenuItemSelectedColor:o,colorItemTextSelectedHorizontal:o,horizontalItemSelectedColor:o,colorItemBg:p,itemBg:p,colorItemBgHover:S,itemHoverBg:S,colorItemBgActive:b,itemActiveBg:x,colorSubItemBg:y,subMenuItemBg:y,colorItemBgSelected:x,itemSelectedBg:x,colorItemBgSelectedHorizontal:"transparent",horizontalItemSelectedBg:"transparent",colorActiveBarWidth:0,activeBarWidth:j,colorActiveBarHeight:C,activeBarHeight:C,colorActiveBarBorderSize:w,activeBarBorderWidth:W,colorItemTextDisabled:u,itemDisabledColor:u,colorDangerItemText:s,dangerItemColor:s,colorDangerItemTextHover:s,dangerItemHoverColor:s,colorDangerItemTextSelected:s,dangerItemSelectedColor:s,colorDangerItemBgActive:d,dangerItemActiveBg:d,colorDangerItemBgSelected:d,dangerItemSelectedBg:d,itemMarginInline:V,horizontalItemBorderRadius:0,horizontalItemHoverBg:"transparent",itemHeight:$,groupTitleLineHeight:R,collapsedWidth:$*2,popupBg:T,itemMarginBlock:z,itemPaddingInline:O,horizontalLineHeight:`${$*1.15}px`,iconSize:A,iconMarginInlineEnd:P-A,collapsedIconSize:B,groupTitleFontSize:A,darkItemDisabledColor:new Bt(N).setA(.25).toRgbString(),darkItemColor:U,darkDangerItemColor:s,darkItemBg:"#001529",darkPopupBg:"#001529",darkSubMenuItemBg:"#000c17",darkItemSelectedColor:N,darkItemSelectedBg:o,darkDangerItemSelectedBg:s,darkItemHoverBg:"transparent",darkGroupTitleColor:U,darkItemHoverColor:N,darkDangerItemHoverColor:H,darkDangerItemSelectedColor:N,darkDangerItemActiveBg:s,itemWidth:j?`calc(100% + ${W}px)`:`calc(100% - ${V*2}px)`}},BM=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;return rr("Menu",o=>{const{colorBgElevated:s,controlHeightLG:u,fontSize:d,darkItemColor:m,darkDangerItemColor:h,darkItemBg:p,darkSubMenuItemBg:y,darkItemSelectedColor:b,darkItemSelectedBg:w,darkDangerItemSelectedBg:C,darkItemHoverBg:x,darkGroupTitleColor:S,darkItemHoverColor:$,darkItemDisabledColor:R,darkDangerItemHoverColor:T,darkDangerItemSelectedColor:z,darkDangerItemActiveBg:O,popupBg:A,darkPopupBg:P}=o,B=o.calc(d).div(7).mul(5).equal(),N=sn(o,{menuArrowSize:B,menuHorizontalHeight:o.calc(u).mul(1.15).equal(),menuArrowOffset:o.calc(B).mul(.25).equal(),menuSubMenuBg:s,calc:o.calc,popupBg:A}),H=sn(N,{itemColor:m,itemHoverColor:$,groupTitleColor:S,itemSelectedColor:b,subMenuItemSelectedColor:b,itemBg:p,popupBg:P,subMenuItemBg:y,itemActiveBg:"transparent",itemSelectedBg:w,activeBarHeight:0,activeBarBorderWidth:0,itemHoverBg:x,itemDisabledColor:R,dangerItemColor:h,dangerItemHoverColor:T,dangerItemSelectedColor:z,dangerItemActiveBg:O,dangerItemSelectedBg:C,menuSubMenuBg:y,horizontalItemSelectedColor:b,horizontalItemSelectedBg:w});return[LM(N),_M(N),zM(N),M1(N,"light"),M1(H,"dark"),DM(N),VR(N),Ku(N,"slide-up"),Ku(N,"slide-down"),gd(N,"zoom-big")]},HM,{deprecatedTokens:[["colorGroupTitle","groupTitleColor"],["radiusItem","itemBorderRadius"],["radiusSubMenuItem","subMenuItemBorderRadius"],["colorItemText","itemColor"],["colorItemTextHover","itemHoverColor"],["colorItemTextHoverHorizontal","horizontalItemHoverColor"],["colorItemTextSelected","itemSelectedColor"],["colorItemTextSelectedHorizontal","horizontalItemSelectedColor"],["colorItemTextDisabled","itemDisabledColor"],["colorDangerItemText","dangerItemColor"],["colorDangerItemTextHover","dangerItemHoverColor"],["colorDangerItemTextSelected","dangerItemSelectedColor"],["colorDangerItemBgActive","dangerItemActiveBg"],["colorDangerItemBgSelected","dangerItemSelectedBg"],["colorItemBg","itemBg"],["colorItemBgHover","itemHoverBg"],["colorSubItemBg","subMenuItemBg"],["colorItemBgActive","itemActiveBg"],["colorItemBgSelectedHorizontal","horizontalItemSelectedBg"],["colorActiveBarWidth","activeBarWidth"],["colorActiveBarHeight","activeBarHeight"],["colorActiveBarBorderSize","activeBarBorderWidth"],["colorItemBgSelected","itemSelectedBg"]],injectStyle:r,unitless:{groupTitleLineHeight:!0}})(e,t)},B2=e=>{var t;const{popupClassName:r,icon:i,title:o,theme:s}=e,u=f.useContext(Qu),{prefixCls:d,inlineCollapsed:m,theme:h}=u,p=Sl();let y;if(!i)y=m&&!p.length&&o&&typeof o=="string"?f.createElement("div",{className:`${d}-inline-collapsed-noicon`},o.charAt(0)):f.createElement("span",{className:`${d}-title-content`},o);else{const C=f.isValidElement(o)&&o.type==="span";y=f.createElement(f.Fragment,null,wi(i,{className:ue(f.isValidElement(i)?(t=i.props)===null||t===void 0?void 0:t.className:"",`${d}-item-icon`)}),C?o:f.createElement("span",{className:`${d}-title-content`},o))}const b=f.useMemo(()=>Object.assign(Object.assign({},u),{firstLevel:!1}),[u]),[w]=dd("Menu");return f.createElement(Qu.Provider,{value:b},f.createElement($d,Object.assign({},dr(e,["icon"]),{title:y,popupClassName:ue(d,r,`${d}-${s||h}`),popupStyle:Object.assign({zIndex:w},e.popupStyle)})))};var IM=function(e,t){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(r[i]=e[i]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(r[i[o]]=e[i[o]]);return r};function dg(e){return e===null||e===!1}const jM={item:H2,submenu:B2,divider:L2},kM=f.forwardRef((e,t)=>{var r;const i=f.useContext(T1),o=i||{},{getPrefixCls:s,getPopupContainer:u,direction:d,menu:m}=f.useContext(At),h=s(),{prefixCls:p,className:y,style:b,theme:w="light",expandIcon:C,_internalDisableMenuItemTitleTooltip:x,inlineCollapsed:S,siderCollapsed:$,rootClassName:R,mode:T,selectable:z,onClick:O,overflowedIndicatorPopupClassName:A}=e,P=IM(e,["prefixCls","className","style","theme","expandIcon","_internalDisableMenuItemTitleTooltip","inlineCollapsed","siderCollapsed","rootClassName","mode","selectable","onClick","overflowedIndicatorPopupClassName"]),B=dr(P,["collapsedWidth"]);(r=o.validator)===null||r===void 0||r.call(o,{mode:T});const N=Gn(function(){var K;O==null||O.apply(void 0,arguments),(K=o.onClick)===null||K===void 0||K.call(o)}),H=o.mode||T,j=z??o.selectable,W=S??$,V={horizontal:{motionName:`${h}-slide-up`},inline:bR(h),other:{motionName:`${h}-zoom-big`}},U=s("menu",p||o.prefixCls),Z=pl(U),[_,L,F]=BM(U,Z,!i),Y=ue(`${U}-${w}`,m==null?void 0:m.className,y),M=f.useMemo(()=>{var K,X;if(typeof C=="function"||dg(C))return C||null;if(typeof o.expandIcon=="function"||dg(o.expandIcon))return o.expandIcon||null;if(typeof(m==null?void 0:m.expandIcon)=="function"||dg(m==null?void 0:m.expandIcon))return(m==null?void 0:m.expandIcon)||null;const I=(K=C??(o==null?void 0:o.expandIcon))!==null&&K!==void 0?K:m==null?void 0:m.expandIcon;return wi(I,{className:ue(`${U}-submenu-expand-icon`,f.isValidElement(I)?(X=I.props)===null||X===void 0?void 0:X.className:void 0)})},[C,o==null?void 0:o.expandIcon,m==null?void 0:m.expandIcon,U]),k=f.useMemo(()=>({prefixCls:U,inlineCollapsed:W||!1,direction:d,firstLevel:!0,theme:w,mode:H,disableMenuItemTitleTooltip:x}),[U,W,d,x,w]);return _(f.createElement(T1.Provider,{value:null},f.createElement(Qu.Provider,{value:k},f.createElement(Cl,Object.assign({getPopupContainer:u,overflowedIndicator:f.createElement(z2,null),overflowedIndicatorPopupClassName:ue(U,`${U}-${w}`,A),mode:H,selectable:j,onClick:N},B,{inlineCollapsed:W,style:Object.assign(Object.assign({},m==null?void 0:m.style),b),className:Y,prefixCls:U,direction:d,defaultMotions:V,expandIcon:M,ref:t,rootClassName:ue(R,L,o.rootClassName,F,Z),_internalComponents:jM})))))}),cc=f.forwardRef((e,t)=>{const r=f.useRef(null),i=f.useContext(Rd);return f.useImperativeHandle(t,()=>({menu:r.current,focus:o=>{var s;(s=r.current)===null||s===void 0||s.focus(o)}})),f.createElement(kM,Object.assign({ref:r},e,i))});cc.Item=H2;cc.SubMenu=B2;cc.Divider=L2;cc.ItemGroup=gv;function Td(e){return sn(e,{inputAffixPadding:e.paddingXXS})}const Od=e=>{const{controlHeight:t,fontSize:r,lineHeight:i,lineWidth:o,controlHeightSM:s,controlHeightLG:u,fontSizeLG:d,lineHeightLG:m,paddingSM:h,controlPaddingHorizontalSM:p,controlPaddingHorizontal:y,colorFillAlter:b,colorPrimaryHover:w,colorPrimary:C,controlOutlineWidth:x,controlOutline:S,colorErrorOutline:$,colorWarningOutline:R,colorBgContainer:T,inputFontSize:z,inputFontSizeLG:O,inputFontSizeSM:A}=e,P=z||r,B=A||P,N=O||d,H=Math.round((t-P*i)/2*10)/10-o,j=Math.round((s-B*i)/2*10)/10-o,W=Math.ceil((u-N*m)/2*10)/10-o;return{paddingBlock:Math.max(H,0),paddingBlockSM:Math.max(j,0),paddingBlockLG:Math.max(W,0),paddingInline:h-o,paddingInlineSM:p-o,paddingInlineLG:y-o,addonBg:b,activeBorderColor:C,hoverBorderColor:w,activeShadow:`0 0 0 ${x}px ${S}`,errorActiveShadow:`0 0 0 ${x}px ${$}`,warningActiveShadow:`0 0 0 ${x}px ${R}`,hoverBg:T,activeBg:T,inputFontSize:P,inputFontSizeLG:N,inputFontSizeSM:B}},FM=e=>({borderColor:e.hoverBorderColor,backgroundColor:e.hoverBg}),hv=e=>({color:e.colorTextDisabled,backgroundColor:e.colorBgContainerDisabled,borderColor:e.colorBorder,boxShadow:"none",cursor:"not-allowed",opacity:1,"input[disabled], textarea[disabled]":{cursor:"not-allowed"},"&:hover:not([disabled])":Object.assign({},FM(sn(e,{hoverBorderColor:e.colorBorder,hoverBg:e.colorBgContainerDisabled})))}),I2=(e,t)=>({background:e.colorBgContainer,borderWidth:e.lineWidth,borderStyle:e.lineType,borderColor:t.borderColor,"&:hover":{borderColor:t.hoverBorderColor,backgroundColor:e.hoverBg},"&:focus, &:focus-within":{borderColor:t.activeBorderColor,boxShadow:t.activeShadow,outline:0,backgroundColor:e.activeBg}}),_1=(e,t)=>({[`&${e.componentCls}-status-${t.status}:not(${e.componentCls}-disabled)`]:Object.assign(Object.assign({},I2(e,t)),{[`${e.componentCls}-prefix, ${e.componentCls}-suffix`]:{color:t.affixColor}}),[`&${e.componentCls}-status-${t.status}${e.componentCls}-disabled`]:{borderColor:t.borderColor}}),VM=(e,t)=>({"&-outlined":Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},I2(e,{borderColor:e.colorBorder,hoverBorderColor:e.hoverBorderColor,activeBorderColor:e.activeBorderColor,activeShadow:e.activeShadow})),{[`&${e.componentCls}-disabled, &[disabled]`]:Object.assign({},hv(e))}),_1(e,{status:"error",borderColor:e.colorError,hoverBorderColor:e.colorErrorBorderHover,activeBorderColor:e.colorError,activeShadow:e.errorActiveShadow,affixColor:e.colorError})),_1(e,{status:"warning",borderColor:e.colorWarning,hoverBorderColor:e.colorWarningBorderHover,activeBorderColor:e.colorWarning,activeShadow:e.warningActiveShadow,affixColor:e.colorWarning})),t)}),D1=(e,t)=>({[`&${e.componentCls}-group-wrapper-status-${t.status}`]:{[`${e.componentCls}-group-addon`]:{borderColor:t.addonBorderColor,color:t.addonColor}}}),GM=e=>({"&-outlined":Object.assign(Object.assign(Object.assign({[`${e.componentCls}-group`]:{"&-addon":{background:e.addonBg,border:`${le(e.lineWidth)} ${e.lineType} ${e.colorBorder}`},"&-addon:first-child":{borderInlineEnd:0},"&-addon:last-child":{borderInlineStart:0}}},D1(e,{status:"error",addonBorderColor:e.colorError,addonColor:e.colorErrorText})),D1(e,{status:"warning",addonBorderColor:e.colorWarning,addonColor:e.colorWarningText})),{[`&${e.componentCls}-group-wrapper-disabled`]:{[`${e.componentCls}-group-addon`]:Object.assign({},hv(e))}})}),UM=(e,t)=>{const{componentCls:r}=e;return{"&-borderless":Object.assign({background:"transparent",border:"none","&:focus, &:focus-within":{outline:"none"},[`&${r}-disabled, &[disabled]`]:{color:e.colorTextDisabled,cursor:"not-allowed"},[`&${r}-status-error`]:{"&, & input, & textarea":{color:e.colorError}},[`&${r}-status-warning`]:{"&, & input, & textarea":{color:e.colorWarning}}},t)}},j2=(e,t)=>({background:t.bg,borderWidth:e.lineWidth,borderStyle:e.lineType,borderColor:"transparent","input&, & input, textarea&, & textarea":{color:t==null?void 0:t.inputColor},"&:hover":{background:t.hoverBg},"&:focus, &:focus-within":{outline:0,borderColor:t.activeBorderColor,backgroundColor:e.activeBg}}),z1=(e,t)=>({[`&${e.componentCls}-status-${t.status}:not(${e.componentCls}-disabled)`]:Object.assign(Object.assign({},j2(e,t)),{[`${e.componentCls}-prefix, ${e.componentCls}-suffix`]:{color:t.affixColor}})}),WM=(e,t)=>({"&-filled":Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},j2(e,{bg:e.colorFillTertiary,hoverBg:e.colorFillSecondary,activeBorderColor:e.activeBorderColor})),{[`&${e.componentCls}-disabled, &[disabled]`]:Object.assign({},hv(e))}),z1(e,{status:"error",bg:e.colorErrorBg,hoverBg:e.colorErrorBgHover,activeBorderColor:e.colorError,inputColor:e.colorErrorText,affixColor:e.colorError})),z1(e,{status:"warning",bg:e.colorWarningBg,hoverBg:e.colorWarningBgHover,activeBorderColor:e.colorWarning,inputColor:e.colorWarningText,affixColor:e.colorWarning})),t)}),L1=(e,t)=>({[`&${e.componentCls}-group-wrapper-status-${t.status}`]:{[`${e.componentCls}-group-addon`]:{background:t.addonBg,color:t.addonColor}}}),qM=e=>({"&-filled":Object.assign(Object.assign(Object.assign({[`${e.componentCls}-group`]:{"&-addon":{background:e.colorFillTertiary},[`${e.componentCls}-filled:not(:focus):not(:focus-within)`]:{"&:not(:first-child)":{borderInlineStart:`${le(e.lineWidth)} ${e.lineType} ${e.colorSplit}`},"&:not(:last-child)":{borderInlineEnd:`${le(e.lineWidth)} ${e.lineType} ${e.colorSplit}`}}}},L1(e,{status:"error",addonBg:e.colorErrorBg,addonColor:e.colorErrorText})),L1(e,{status:"warning",addonBg:e.colorWarningBg,addonColor:e.colorWarningText})),{[`&${e.componentCls}-group-wrapper-disabled`]:{[`${e.componentCls}-group`]:{"&-addon":{background:e.colorFillTertiary,color:e.colorTextDisabled},"&-addon:first-child":{borderInlineStart:`${le(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,borderTop:`${le(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,borderBottom:`${le(e.lineWidth)} ${e.lineType} ${e.colorBorder}`},"&-addon:last-child":{borderInlineEnd:`${le(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,borderTop:`${le(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,borderBottom:`${le(e.lineWidth)} ${e.lineType} ${e.colorBorder}`}}}})}),k2=(e,t)=>({background:e.colorBgContainer,borderWidth:`${le(e.lineWidth)} 0`,borderStyle:`${e.lineType} none`,borderColor:`transparent transparent ${t.borderColor} transparent`,borderRadius:0,"&:hover":{borderColor:`transparent transparent ${t.borderColor} transparent`,backgroundColor:e.hoverBg},"&:focus, &:focus-within":{borderColor:`transparent transparent ${t.borderColor} transparent`,outline:0,backgroundColor:e.activeBg}}),H1=(e,t)=>({[`&${e.componentCls}-status-${t.status}:not(${e.componentCls}-disabled)`]:Object.assign(Object.assign({},k2(e,t)),{[`${e.componentCls}-prefix, ${e.componentCls}-suffix`]:{color:t.affixColor}}),[`&${e.componentCls}-status-${t.status}${e.componentCls}-disabled`]:{borderColor:`transparent transparent ${t.borderColor} transparent`}}),JM=(e,t)=>({"&-underlined":Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},k2(e,{borderColor:e.colorBorder,hoverBorderColor:e.hoverBorderColor,activeBorderColor:e.activeBorderColor,activeShadow:e.activeShadow})),{[`&${e.componentCls}-disabled, &[disabled]`]:{color:e.colorTextDisabled,boxShadow:"none",cursor:"not-allowed","&:hover":{borderColor:`transparent transparent ${e.colorBorder} transparent`}},"input[disabled], textarea[disabled]":{cursor:"not-allowed"}}),H1(e,{status:"error",borderColor:e.colorError,hoverBorderColor:e.colorErrorBorderHover,activeBorderColor:e.colorError,activeShadow:e.errorActiveShadow,affixColor:e.colorError})),H1(e,{status:"warning",borderColor:e.colorWarning,hoverBorderColor:e.colorWarningBorderHover,activeBorderColor:e.colorWarning,activeShadow:e.warningActiveShadow,affixColor:e.colorWarning})),t)}),KM=e=>({"&::-moz-placeholder":{opacity:1},"&::placeholder":{color:e,userSelect:"none"},"&:placeholder-shown":{textOverflow:"ellipsis"}}),F2=e=>{const{paddingBlockLG:t,lineHeightLG:r,borderRadiusLG:i,paddingInlineLG:o}=e;return{padding:`${le(t)} ${le(o)}`,fontSize:e.inputFontSizeLG,lineHeight:r,borderRadius:i}},V2=e=>({padding:`${le(e.paddingBlockSM)} ${le(e.paddingInlineSM)}`,fontSize:e.inputFontSizeSM,borderRadius:e.borderRadiusSM}),G2=e=>Object.assign(Object.assign({position:"relative",display:"inline-block",width:"100%",minWidth:0,padding:`${le(e.paddingBlock)} ${le(e.paddingInline)}`,color:e.colorText,fontSize:e.inputFontSize,lineHeight:e.lineHeight,borderRadius:e.borderRadius,transition:`all ${e.motionDurationMid}`},KM(e.colorTextPlaceholder)),{"textarea&":{maxWidth:"100%",height:"auto",minHeight:e.controlHeight,lineHeight:e.lineHeight,verticalAlign:"bottom",transition:`all ${e.motionDurationSlow}, height 0s`,resize:"vertical"},"&-lg":Object.assign({},F2(e)),"&-sm":Object.assign({},V2(e)),"&-rtl, &-textarea-rtl":{direction:"rtl"}}),YM=e=>{const{componentCls:t,antCls:r}=e;return{position:"relative",display:"table",width:"100%",borderCollapse:"separate",borderSpacing:0,"&[class*='col-']":{paddingInlineEnd:e.paddingXS,"&:last-child":{paddingInlineEnd:0}},[`&-lg ${t}, &-lg > ${t}-group-addon`]:Object.assign({},F2(e)),[`&-sm ${t}, &-sm > ${t}-group-addon`]:Object.assign({},V2(e)),[`&-lg ${r}-select-single ${r}-select-selector`]:{height:e.controlHeightLG},[`&-sm ${r}-select-single ${r}-select-selector`]:{height:e.controlHeightSM},[`> ${t}`]:{display:"table-cell","&:not(:first-child):not(:last-child)":{borderRadius:0}},[`${t}-group`]:{"&-addon, &-wrap":{display:"table-cell",width:1,whiteSpace:"nowrap",verticalAlign:"middle","&:not(:first-child):not(:last-child)":{borderRadius:0}},"&-wrap > *":{display:"block !important"},"&-addon":{position:"relative",padding:`0 ${le(e.paddingInline)}`,color:e.colorText,fontWeight:"normal",fontSize:e.inputFontSize,textAlign:"center",borderRadius:e.borderRadius,transition:`all ${e.motionDurationSlow}`,lineHeight:1,[`${r}-select`]:{margin:`${le(e.calc(e.paddingBlock).add(1).mul(-1).equal())} ${le(e.calc(e.paddingInline).mul(-1).equal())}`,[`&${r}-select-single:not(${r}-select-customize-input):not(${r}-pagination-size-changer)`]:{[`${r}-select-selector`]:{backgroundColor:"inherit",border:`${le(e.lineWidth)} ${e.lineType} transparent`,boxShadow:"none"}}},[`${r}-cascader-picker`]:{margin:`-9px ${le(e.calc(e.paddingInline).mul(-1).equal())}`,backgroundColor:"transparent",[`${r}-cascader-input`]:{textAlign:"start",border:0,boxShadow:"none"}}}},[t]:{width:"100%",marginBottom:0,textAlign:"inherit","&:focus":{zIndex:1,borderInlineEndWidth:1},"&:hover":{zIndex:1,borderInlineEndWidth:1,[`${t}-search-with-button &`]:{zIndex:0}}},[`> ${t}:first-child, ${t}-group-addon:first-child`]:{borderStartEndRadius:0,borderEndEndRadius:0,[`${r}-select ${r}-select-selector`]:{borderStartEndRadius:0,borderEndEndRadius:0}},[`> ${t}-affix-wrapper`]:{[`&:not(:first-child) ${t}`]:{borderStartStartRadius:0,borderEndStartRadius:0},[`&:not(:last-child) ${t}`]:{borderStartEndRadius:0,borderEndEndRadius:0}},[`> ${t}:last-child, ${t}-group-addon:last-child`]:{borderStartStartRadius:0,borderEndStartRadius:0,[`${r}-select ${r}-select-selector`]:{borderStartStartRadius:0,borderEndStartRadius:0}},[`${t}-affix-wrapper`]:{"&:not(:last-child)":{borderStartEndRadius:0,borderEndEndRadius:0,[`${t}-search &`]:{borderStartStartRadius:e.borderRadius,borderEndStartRadius:e.borderRadius}},[`&:not(:first-child), ${t}-search &:not(:first-child)`]:{borderStartStartRadius:0,borderEndStartRadius:0}},[`&${t}-group-compact`]:Object.assign(Object.assign({display:"block"},eo()),{[`${t}-group-addon, ${t}-group-wrap, > ${t}`]:{"&:not(:first-child):not(:last-child)":{borderInlineEndWidth:e.lineWidth,"&:hover, &:focus":{zIndex:1}}},"& > *":{display:"inline-flex",float:"none",verticalAlign:"top",borderRadius:0},[`
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
      & > ${r}-cascader-picker-focused:last-child ${t}`]:{borderInlineEndWidth:e.lineWidth,borderStartEndRadius:e.borderRadius,borderEndEndRadius:e.borderRadius},[`& > ${r}-select-auto-complete ${t}`]:{verticalAlign:"top"},[`${t}-group-wrapper + ${t}-group-wrapper`]:{marginInlineStart:e.calc(e.lineWidth).mul(-1).equal(),[`${t}-affix-wrapper`]:{borderRadius:0}},[`${t}-group-wrapper:not(:last-child)`]:{[`&${t}-search > ${t}-group`]:{[`& > ${t}-group-addon > ${t}-search-button`]:{borderRadius:0},[`& > ${t}`]:{borderStartStartRadius:e.borderRadius,borderStartEndRadius:0,borderEndEndRadius:0,borderEndStartRadius:e.borderRadius}}}})}},XM=e=>{const{componentCls:t,controlHeightSM:r,lineWidth:i,calc:o}=e,u=o(r).sub(o(i).mul(2)).sub(16).div(2).equal();return{[t]:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},Ei(e)),G2(e)),VM(e)),WM(e)),UM(e)),JM(e)),{'&[type="color"]':{height:e.controlHeight,[`&${t}-lg`]:{height:e.controlHeightLG},[`&${t}-sm`]:{height:r,paddingTop:u,paddingBottom:u}},'&[type="search"]::-webkit-search-cancel-button, &[type="search"]::-webkit-search-decoration':{"-webkit-appearance":"none"}})}},ZM=e=>{const{componentCls:t}=e;return{[`${t}-clear-icon`]:{margin:0,padding:0,lineHeight:0,color:e.colorTextQuaternary,fontSize:e.fontSizeIcon,verticalAlign:-1,cursor:"pointer",transition:`color ${e.motionDurationSlow}`,border:"none",outline:"none",backgroundColor:"transparent","&:hover":{color:e.colorTextTertiary},"&:active":{color:e.colorText},"&-hidden":{visibility:"hidden"},"&-has-suffix":{margin:`0 ${le(e.inputAffixPadding)}`}}}},QM=e=>{const{componentCls:t,inputAffixPadding:r,colorTextDescription:i,motionDurationSlow:o,colorIcon:s,colorIconHover:u,iconCls:d}=e,m=`${t}-affix-wrapper`,h=`${t}-affix-wrapper-disabled`;return{[m]:Object.assign(Object.assign(Object.assign(Object.assign({},G2(e)),{display:"inline-flex",[`&:not(${t}-disabled):hover`]:{zIndex:1,[`${t}-search-with-button &`]:{zIndex:0}},"&-focused, &:focus":{zIndex:1},[`> input${t}`]:{padding:0},[`> input${t}, > textarea${t}`]:{fontSize:"inherit",border:"none",borderRadius:0,outline:"none",background:"transparent",color:"inherit","&::-ms-reveal":{display:"none"},"&:focus":{boxShadow:"none !important"}},"&::before":{display:"inline-block",width:0,visibility:"hidden",content:'"\\a0"'},[t]:{"&-prefix, &-suffix":{display:"flex",flex:"none",alignItems:"center","> *:not(:last-child)":{marginInlineEnd:e.paddingXS}},"&-show-count-suffix":{color:i},"&-show-count-has-suffix":{marginInlineEnd:e.paddingXXS},"&-prefix":{marginInlineEnd:r},"&-suffix":{marginInlineStart:r}}}),ZM(e)),{[`${d}${t}-password-icon`]:{color:s,cursor:"pointer",transition:`all ${o}`,"&:hover":{color:u}}}),[`${t}-underlined`]:{borderRadius:0},[h]:{[`${d}${t}-password-icon`]:{color:s,cursor:"not-allowed","&:hover":{color:s}}}}},eA=e=>{const{componentCls:t,borderRadiusLG:r,borderRadiusSM:i}=e;return{[`${t}-group`]:Object.assign(Object.assign(Object.assign({},Ei(e)),YM(e)),{"&-rtl":{direction:"rtl"},"&-wrapper":Object.assign(Object.assign(Object.assign({display:"inline-block",width:"100%",textAlign:"start",verticalAlign:"top","&-rtl":{direction:"rtl"},"&-lg":{[`${t}-group-addon`]:{borderRadius:r,fontSize:e.inputFontSizeLG}},"&-sm":{[`${t}-group-addon`]:{borderRadius:i}}},GM(e)),qM(e)),{[`&:not(${t}-compact-first-item):not(${t}-compact-last-item)${t}-compact-item`]:{[`${t}, ${t}-group-addon`]:{borderRadius:0}},[`&:not(${t}-compact-last-item)${t}-compact-first-item`]:{[`${t}, ${t}-group-addon`]:{borderStartEndRadius:0,borderEndEndRadius:0}},[`&:not(${t}-compact-first-item)${t}-compact-last-item`]:{[`${t}, ${t}-group-addon`]:{borderStartStartRadius:0,borderEndStartRadius:0}},[`&:not(${t}-compact-last-item)${t}-compact-item`]:{[`${t}-affix-wrapper`]:{borderStartEndRadius:0,borderEndEndRadius:0}},[`&:not(${t}-compact-first-item)${t}-compact-item`]:{[`${t}-affix-wrapper`]:{borderStartStartRadius:0,borderEndStartRadius:0}}})})}},tA=e=>{const{componentCls:t,antCls:r}=e,i=`${t}-search`;return{[i]:{[t]:{"&:hover, &:focus":{[`+ ${t}-group-addon ${i}-button:not(${r}-btn-primary)`]:{borderInlineStartColor:e.colorPrimaryHover}}},[`${t}-affix-wrapper`]:{height:e.controlHeight,borderRadius:0},[`${t}-lg`]:{lineHeight:e.calc(e.lineHeightLG).sub(2e-4).equal()},[`> ${t}-group`]:{[`> ${t}-group-addon:last-child`]:{insetInlineStart:-1,padding:0,border:0,[`${i}-button`]:{marginInlineEnd:-1,borderStartStartRadius:0,borderEndStartRadius:0,boxShadow:"none"},[`${i}-button:not(${r}-btn-primary)`]:{color:e.colorTextDescription,"&:hover":{color:e.colorPrimaryHover},"&:active":{color:e.colorPrimaryActive},[`&${r}-btn-loading::before`]:{insetInlineStart:0,insetInlineEnd:0,insetBlockStart:0,insetBlockEnd:0}}}},[`${i}-button`]:{height:e.controlHeight,"&:hover, &:focus":{zIndex:1}},"&-large":{[`${t}-affix-wrapper, ${i}-button`]:{height:e.controlHeightLG}},"&-small":{[`${t}-affix-wrapper, ${i}-button`]:{height:e.controlHeightSM}},"&-rtl":{direction:"rtl"},[`&${t}-compact-item`]:{[`&:not(${t}-compact-last-item)`]:{[`${t}-group-addon`]:{[`${t}-search-button`]:{marginInlineEnd:e.calc(e.lineWidth).mul(-1).equal(),borderRadius:0}}},[`&:not(${t}-compact-first-item)`]:{[`${t},${t}-affix-wrapper`]:{borderRadius:0}},[`> ${t}-group-addon ${t}-search-button,
        > ${t},
        ${t}-affix-wrapper`]:{"&:hover, &:focus, &:active":{zIndex:2}},[`> ${t}-affix-wrapper-focused`]:{zIndex:2}}}}},nA=e=>{const{componentCls:t}=e;return{[`${t}-out-of-range`]:{[`&, & input, & textarea, ${t}-show-count-suffix, ${t}-data-count`]:{color:e.colorError}}}},U2=rr(["Input","Shared"],e=>{const t=sn(e,Td(e));return[XM(t),QM(t)]},Od,{resetFont:!1}),W2=rr(["Input","Component"],e=>{const t=sn(e,Td(e));return[eA(t),tA(t),nA(t),YC(t)]},Od,{resetFont:!1});var rA={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"},aA=function(t,r){return f.createElement(Hn,Me({},t,{ref:r,icon:rA}))},iA=f.forwardRef(aA);const Md=f.createContext(null);var oA=function(t){var r=t.activeTabOffset,i=t.horizontal,o=t.rtl,s=t.indicator,u=s===void 0?{}:s,d=u.size,m=u.align,h=m===void 0?"center":m,p=f.useState(),y=oe(p,2),b=y[0],w=y[1],C=f.useRef(),x=he.useCallback(function($){return typeof d=="function"?d($):typeof d=="number"?d:$},[d]);function S(){Cn.cancel(C.current)}return f.useEffect(function(){var $={};if(r)if(i){$.width=x(r.width);var R=o?"right":"left";h==="start"&&($[R]=r[R]),h==="center"&&($[R]=r[R]+r.width/2,$.transform=o?"translateX(50%)":"translateX(-50%)"),h==="end"&&($[R]=r[R]+r.width,$.transform="translateX(-100%)")}else $.height=x(r.height),h==="start"&&($.top=r.top),h==="center"&&($.top=r.top+r.height/2,$.transform="translateY(-50%)"),h==="end"&&($.top=r.top+r.height,$.transform="translateY(-100%)");return S(),C.current=Cn(function(){w($)}),S},[r,i,o,h,x]),{style:b}},B1={width:0,height:0,left:0,top:0};function lA(e,t,r){return f.useMemo(function(){for(var i,o=new Map,s=t.get((i=e[0])===null||i===void 0?void 0:i.key)||B1,u=s.left+s.width,d=0;d<e.length;d+=1){var m=e[d].key,h=t.get(m);if(!h){var p;h=t.get((p=e[d-1])===null||p===void 0?void 0:p.key)||B1}var y=o.get(m)||q({},h);y.right=u-y.left-y.width,o.set(m,y)}return o},[e.map(function(i){return i.key}).join("_"),t,r])}function I1(e,t){var r=f.useRef(e),i=f.useState({}),o=oe(i,2),s=o[1];function u(d){var m=typeof d=="function"?d(r.current):d;m!==r.current&&t(m,r.current),r.current=m,s({})}return[r.current,u]}var sA=.1,j1=.01,ku=20,k1=Math.pow(.995,ku);function cA(e,t){var r=f.useState(),i=oe(r,2),o=i[0],s=i[1],u=f.useState(0),d=oe(u,2),m=d[0],h=d[1],p=f.useState(0),y=oe(p,2),b=y[0],w=y[1],C=f.useState(),x=oe(C,2),S=x[0],$=x[1],R=f.useRef();function T(N){var H=N.touches[0],j=H.screenX,W=H.screenY;s({x:j,y:W}),window.clearInterval(R.current)}function z(N){if(o){var H=N.touches[0],j=H.screenX,W=H.screenY;s({x:j,y:W});var V=j-o.x,U=W-o.y;t(V,U);var Z=Date.now();h(Z),w(Z-m),$({x:V,y:U})}}function O(){if(o&&(s(null),$(null),S)){var N=S.x/b,H=S.y/b,j=Math.abs(N),W=Math.abs(H);if(Math.max(j,W)<sA)return;var V=N,U=H;R.current=window.setInterval(function(){if(Math.abs(V)<j1&&Math.abs(U)<j1){window.clearInterval(R.current);return}V*=k1,U*=k1,t(V*ku,U*ku)},ku)}}var A=f.useRef();function P(N){var H=N.deltaX,j=N.deltaY,W=0,V=Math.abs(H),U=Math.abs(j);V===U?W=A.current==="x"?H:j:V>U?(W=H,A.current="x"):(W=j,A.current="y"),t(-W,-W)&&N.preventDefault()}var B=f.useRef(null);B.current={onTouchStart:T,onTouchMove:z,onTouchEnd:O,onWheel:P},f.useEffect(function(){function N(V){B.current.onTouchStart(V)}function H(V){B.current.onTouchMove(V)}function j(V){B.current.onTouchEnd(V)}function W(V){B.current.onWheel(V)}return document.addEventListener("touchmove",H,{passive:!1}),document.addEventListener("touchend",j,{passive:!0}),e.current.addEventListener("touchstart",N,{passive:!0}),e.current.addEventListener("wheel",W,{passive:!1}),function(){document.removeEventListener("touchmove",H),document.removeEventListener("touchend",j)}},[])}function q2(e){var t=f.useState(0),r=oe(t,2),i=r[0],o=r[1],s=f.useRef(0),u=f.useRef();return u.current=e,Og(function(){var d;(d=u.current)===null||d===void 0||d.call(u)},[i]),function(){s.current===i&&(s.current+=1,o(s.current))}}function uA(e){var t=f.useRef([]),r=f.useState({}),i=oe(r,2),o=i[1],s=f.useRef(typeof e=="function"?e():e),u=q2(function(){var m=s.current;t.current.forEach(function(h){m=h(m)}),t.current=[],s.current=m,o({})});function d(m){t.current.push(m),u()}return[s.current,d]}var F1={width:0,height:0,left:0,top:0,right:0};function dA(e,t,r,i,o,s,u){var d=u.tabs,m=u.tabPosition,h=u.rtl,p,y,b;return["top","bottom"].includes(m)?(p="width",y=h?"right":"left",b=Math.abs(r)):(p="height",y="top",b=-r),f.useMemo(function(){if(!d.length)return[0,0];for(var w=d.length,C=w,x=0;x<w;x+=1){var S=e.get(d[x].key)||F1;if(Math.floor(S[y]+S[p])>Math.floor(b+t)){C=x-1;break}}for(var $=0,R=w-1;R>=0;R-=1){var T=e.get(d[R].key)||F1;if(T[y]<b){$=R+1;break}}return $>=C?[0,0]:[$,C]},[e,t,i,o,s,b,m,d.map(function(w){return w.key}).join("_"),h])}function V1(e){var t;return e instanceof Map?(t={},e.forEach(function(r,i){t[i]=r})):t=e,JSON.stringify(t)}var fA="TABS_DQ";function J2(e){return String(e).replace(/"/g,fA)}function vv(e,t,r,i){return!(!r||i||e===!1||e===void 0&&(t===!1||t===null))}var K2=f.forwardRef(function(e,t){var r=e.prefixCls,i=e.editable,o=e.locale,s=e.style;return!i||i.showAdd===!1?null:f.createElement("button",{ref:t,type:"button",className:"".concat(r,"-nav-add"),style:s,"aria-label":(o==null?void 0:o.addAriaLabel)||"Add tab",onClick:function(d){i.onEdit("add",{event:d})}},i.addIcon||"+")}),G1=f.forwardRef(function(e,t){var r=e.position,i=e.prefixCls,o=e.extra;if(!o)return null;var s,u={};return Ge(o)==="object"&&!f.isValidElement(o)?u=o:u.right=o,r==="right"&&(s=u.right),r==="left"&&(s=u.left),s?f.createElement("div",{className:"".concat(i,"-extra-content"),ref:t},s):null}),mA=f.forwardRef(function(e,t){var r=e.prefixCls,i=e.id,o=e.tabs,s=e.locale,u=e.mobile,d=e.more,m=d===void 0?{}:d,h=e.style,p=e.className,y=e.editable,b=e.tabBarGutter,w=e.rtl,C=e.removeAriaLabel,x=e.onTabClick,S=e.getPopupContainer,$=e.popupClassName,R=f.useState(!1),T=oe(R,2),z=T[0],O=T[1],A=f.useState(null),P=oe(A,2),B=P[0],N=P[1],H=m.icon,j=H===void 0?"More":H,W="".concat(i,"-more-popup"),V="".concat(r,"-dropdown"),U=B!==null?"".concat(W,"-").concat(B):null,Z=s==null?void 0:s.dropdownAriaLabel;function _(X,I){X.preventDefault(),X.stopPropagation(),y.onEdit("remove",{key:I,event:X})}var L=f.createElement(Cl,{onClick:function(I){var te=I.key,ne=I.domEvent;x(te,ne),O(!1)},prefixCls:"".concat(V,"-menu"),id:W,tabIndex:-1,role:"listbox","aria-activedescendant":U,selectedKeys:[B],"aria-label":Z!==void 0?Z:"expanded dropdown"},o.map(function(X){var I=X.closable,te=X.disabled,ne=X.closeIcon,fe=X.key,ae=X.label,ce=vv(I,ne,y,te);return f.createElement(sc,{key:fe,id:"".concat(W,"-").concat(fe),role:"option","aria-controls":i&&"".concat(i,"-panel-").concat(fe),disabled:te},f.createElement("span",null,ae),ce&&f.createElement("button",{type:"button","aria-label":C||"remove",tabIndex:0,className:"".concat(V,"-menu-item-remove"),onClick:function(xe){xe.stopPropagation(),_(xe,fe)}},ne||y.removeIcon||"×"))}));function F(X){for(var I=o.filter(function(ce){return!ce.disabled}),te=I.findIndex(function(ce){return ce.key===B})||0,ne=I.length,fe=0;fe<ne;fe+=1){te=(te+X+ne)%ne;var ae=I[te];if(!ae.disabled){N(ae.key);return}}}function Y(X){var I=X.which;if(!z){[rn.DOWN,rn.SPACE,rn.ENTER].includes(I)&&(O(!0),X.preventDefault());return}switch(I){case rn.UP:F(-1),X.preventDefault();break;case rn.DOWN:F(1),X.preventDefault();break;case rn.ESC:O(!1);break;case rn.SPACE:case rn.ENTER:B!==null&&x(B,X);break}}f.useEffect(function(){var X=document.getElementById(U);X&&X.scrollIntoView&&X.scrollIntoView(!1)},[B]),f.useEffect(function(){z||N(null)},[z]);var M=J({},w?"marginRight":"marginLeft",b);o.length||(M.visibility="hidden",M.order=1);var k=ue(J({},"".concat(V,"-rtl"),w)),K=u?null:f.createElement(I9,Me({prefixCls:V,overlay:L,visible:o.length?z:!1,onVisibleChange:O,overlayClassName:ue(k,$),mouseEnterDelay:.1,mouseLeaveDelay:.1,getPopupContainer:S},m),f.createElement("button",{type:"button",className:"".concat(r,"-nav-more"),style:M,"aria-haspopup":"listbox","aria-controls":W,id:"".concat(i,"-more"),"aria-expanded":z,onKeyDown:Y},j));return f.createElement("div",{className:ue("".concat(r,"-nav-operations"),p),style:h,ref:t},K,f.createElement(K2,{prefixCls:r,locale:s,editable:y}))});const gA=f.memo(mA,function(e,t){return t.tabMoving});var hA=function(t){var r=t.prefixCls,i=t.id,o=t.active,s=t.focus,u=t.tab,d=u.key,m=u.label,h=u.disabled,p=u.closeIcon,y=u.icon,b=t.closable,w=t.renderWrapper,C=t.removeAriaLabel,x=t.editable,S=t.onClick,$=t.onFocus,R=t.onBlur,T=t.onKeyDown,z=t.onMouseDown,O=t.onMouseUp,A=t.style,P=t.tabCount,B=t.currentPosition,N="".concat(r,"-tab"),H=vv(b,p,x,h);function j(_){h||S(_)}function W(_){_.preventDefault(),_.stopPropagation(),x.onEdit("remove",{key:d,event:_})}var V=f.useMemo(function(){return y&&typeof m=="string"?f.createElement("span",null,m):m},[m,y]),U=f.useRef(null);f.useEffect(function(){s&&U.current&&U.current.focus()},[s]);var Z=f.createElement("div",{key:d,"data-node-key":J2(d),className:ue(N,J(J(J(J({},"".concat(N,"-with-remove"),H),"".concat(N,"-active"),o),"".concat(N,"-disabled"),h),"".concat(N,"-focus"),s)),style:A,onClick:j},f.createElement("div",{ref:U,role:"tab","aria-selected":o,id:i&&"".concat(i,"-tab-").concat(d),className:"".concat(N,"-btn"),"aria-controls":i&&"".concat(i,"-panel-").concat(d),"aria-disabled":h,tabIndex:h?null:o?0:-1,onClick:function(L){L.stopPropagation(),j(L)},onKeyDown:T,onMouseDown:z,onMouseUp:O,onFocus:$,onBlur:R},s&&f.createElement("div",{"aria-live":"polite",style:{width:0,height:0,position:"absolute",overflow:"hidden",opacity:0}},"Tab ".concat(B," of ").concat(P)),y&&f.createElement("span",{className:"".concat(N,"-icon")},y),m&&V),H&&f.createElement("button",{type:"button",role:"tab","aria-label":C||"remove",tabIndex:o?0:-1,className:"".concat(N,"-remove"),onClick:function(L){L.stopPropagation(),W(L)}},p||x.removeIcon||"×"));return w?w(Z):Z},vA=function(t,r){var i=t.offsetWidth,o=t.offsetHeight,s=t.offsetTop,u=t.offsetLeft,d=t.getBoundingClientRect(),m=d.width,h=d.height,p=d.left,y=d.top;return Math.abs(m-i)<1?[m,h,p-r.left,y-r.top]:[i,o,u,s]},qo=function(t){var r=t.current||{},i=r.offsetWidth,o=i===void 0?0:i,s=r.offsetHeight,u=s===void 0?0:s;if(t.current){var d=t.current.getBoundingClientRect(),m=d.width,h=d.height;if(Math.abs(m-o)<1)return[m,h]}return[o,u]},wu=function(t,r){return t[r?0:1]},U1=f.forwardRef(function(e,t){var r=e.className,i=e.style,o=e.id,s=e.animated,u=e.activeKey,d=e.rtl,m=e.extra,h=e.editable,p=e.locale,y=e.tabPosition,b=e.tabBarGutter,w=e.children,C=e.onTabClick,x=e.onTabScroll,S=e.indicator,$=f.useContext(Md),R=$.prefixCls,T=$.tabs,z=f.useRef(null),O=f.useRef(null),A=f.useRef(null),P=f.useRef(null),B=f.useRef(null),N=f.useRef(null),H=f.useRef(null),j=y==="top"||y==="bottom",W=I1(0,function(lt,Ae){j&&x&&x({direction:lt>Ae?"left":"right"})}),V=oe(W,2),U=V[0],Z=V[1],_=I1(0,function(lt,Ae){!j&&x&&x({direction:lt>Ae?"top":"bottom"})}),L=oe(_,2),F=L[0],Y=L[1],M=f.useState([0,0]),k=oe(M,2),K=k[0],X=k[1],I=f.useState([0,0]),te=oe(I,2),ne=te[0],fe=te[1],ae=f.useState([0,0]),ce=oe(ae,2),de=ce[0],xe=ce[1],Se=f.useState([0,0]),Oe=oe(Se,2),Ce=Oe[0],we=Oe[1],be=uA(new Map),De=oe(be,2),Te=De[0],Be=De[1],Ne=lA(T,Te,ne[0]),$e=wu(K,j),Fe=wu(ne,j),ye=wu(de,j),Re=wu(Ce,j),Ue=Math.floor($e)<Math.floor(Fe+ye),Ie=Ue?$e-Re:$e-ye,at="".concat(R,"-nav-operations-hidden"),qe=0,Ke=0;j&&d?(qe=0,Ke=Math.max(0,Fe-Ie)):(qe=Math.min(0,Ie-Fe),Ke=0);function Xe(lt){return lt<qe?qe:lt>Ke?Ke:lt}var et=f.useRef(null),it=f.useState(),je=oe(it,2),Ee=je[0],Ye=je[1];function Je(){Ye(Date.now())}function nt(){et.current&&clearTimeout(et.current)}cA(P,function(lt,Ae){function dt(Rt,Kt){Rt(function(Yt){var Xt=Xe(Yt+Kt);return Xt})}return Ue?(j?dt(Z,lt):dt(Y,Ae),nt(),Je(),!0):!1}),f.useEffect(function(){return nt(),Ee&&(et.current=setTimeout(function(){Ye(0)},100)),nt},[Ee]);var tn=dA(Ne,Ie,j?U:F,Fe,ye,Re,q(q({},e),{},{tabs:T})),kt=oe(tn,2),nn=kt[0],qt=kt[1],Un=Gn(function(){var lt=arguments.length>0&&arguments[0]!==void 0?arguments[0]:u,Ae=Ne.get(lt)||{width:0,height:0,left:0,right:0,top:0};if(j){var dt=U;d?Ae.right<U?dt=Ae.right:Ae.right+Ae.width>U+Ie&&(dt=Ae.right+Ae.width-Ie):Ae.left<-U?dt=-Ae.left:Ae.left+Ae.width>-U+Ie&&(dt=-(Ae.left+Ae.width-Ie)),Y(0),Z(Xe(dt))}else{var Rt=F;Ae.top<-F?Rt=-Ae.top:Ae.top+Ae.height>-F+Ie&&(Rt=-(Ae.top+Ae.height-Ie)),Z(0),Y(Xe(Rt))}}),Ft=f.useState(),$t=oe(Ft,2),It=$t[0],xt=$t[1],Ve=f.useState(!1),_e=oe(Ve,2),ze=_e[0],ct=_e[1],Pt=T.filter(function(lt){return!lt.disabled}).map(function(lt){return lt.key}),wn=function(Ae){var dt=Pt.indexOf(It||u),Rt=Pt.length,Kt=(dt+Ae+Rt)%Rt,Yt=Pt[Kt];xt(Yt)},ht=function(Ae){var dt=Ae.code,Rt=d&&j,Kt=Pt[0],Yt=Pt[Pt.length-1];switch(dt){case"ArrowLeft":{j&&wn(Rt?1:-1);break}case"ArrowRight":{j&&wn(Rt?-1:1);break}case"ArrowUp":{Ae.preventDefault(),j||wn(-1);break}case"ArrowDown":{Ae.preventDefault(),j||wn(1);break}case"Home":{Ae.preventDefault(),xt(Kt);break}case"End":{Ae.preventDefault(),xt(Yt);break}case"Enter":case"Space":{Ae.preventDefault(),C(It,Ae);break}case"Backspace":case"Delete":{var Xt=Pt.indexOf(It),dn=T.find(function(vn){return vn.key===It}),Bn=vv(dn==null?void 0:dn.closable,dn==null?void 0:dn.closeIcon,h,dn==null?void 0:dn.disabled);Bn&&(Ae.preventDefault(),Ae.stopPropagation(),h.onEdit("remove",{key:It,event:Ae}),Xt===Pt.length-1?wn(-1):wn(1));break}}},Wn={};j?Wn[d?"marginRight":"marginLeft"]=b:Wn.marginTop=b;var ar=T.map(function(lt,Ae){var dt=lt.key;return f.createElement(hA,{id:o,prefixCls:R,key:dt,tab:lt,style:Ae===0?void 0:Wn,closable:lt.closable,editable:h,active:dt===u,focus:dt===It,renderWrapper:w,removeAriaLabel:p==null?void 0:p.removeAriaLabel,tabCount:Pt.length,currentPosition:Ae+1,onClick:function(Kt){C(dt,Kt)},onKeyDown:ht,onFocus:function(){ze||xt(dt),Un(dt),Je(),P.current&&(d||(P.current.scrollLeft=0),P.current.scrollTop=0)},onBlur:function(){xt(void 0)},onMouseDown:function(){ct(!0)},onMouseUp:function(){ct(!1)}})}),bt=function(){return Be(function(){var Ae,dt=new Map,Rt=(Ae=B.current)===null||Ae===void 0?void 0:Ae.getBoundingClientRect();return T.forEach(function(Kt){var Yt,Xt=Kt.key,dn=(Yt=B.current)===null||Yt===void 0?void 0:Yt.querySelector('[data-node-key="'.concat(J2(Xt),'"]'));if(dn){var Bn=vA(dn,Rt),vn=oe(Bn,4),ra=vn[0],hr=vn[1],$n=vn[2],en=vn[3];dt.set(Xt,{width:ra,height:hr,left:$n,top:en})}}),dt})};f.useEffect(function(){bt()},[T.map(function(lt){return lt.key}).join("_")]);var ot=q2(function(){var lt=qo(z),Ae=qo(O),dt=qo(A);X([lt[0]-Ae[0]-dt[0],lt[1]-Ae[1]-dt[1]]);var Rt=qo(H);xe(Rt);var Kt=qo(N);we(Kt);var Yt=qo(B);fe([Yt[0]-Rt[0],Yt[1]-Rt[1]]),bt()}),Ct=T.slice(0,nn),vt=T.slice(qt+1),jt=[].concat(Le(Ct),Le(vt)),qn=Ne.get(u),Jn=oA({activeTabOffset:qn,horizontal:j,indicator:S,rtl:d}),Kn=Jn.style;f.useEffect(function(){Un()},[u,qe,Ke,V1(qn),V1(Ne),j]),f.useEffect(function(){ot()},[d]);var hn=!!jt.length,un="".concat(R,"-nav-wrap"),xn,En,ut,ir;return j?d?(En=U>0,xn=U!==Ke):(xn=U<0,En=U!==qe):(ut=F<0,ir=F!==qe),f.createElement(ja,{onResize:ot},f.createElement("div",{ref:ro(t,z),role:"tablist","aria-orientation":j?"horizontal":"vertical",className:ue("".concat(R,"-nav"),r),style:i,onKeyDown:function(){Je()}},f.createElement(G1,{ref:O,position:"left",extra:m,prefixCls:R}),f.createElement(ja,{onResize:ot},f.createElement("div",{className:ue(un,J(J(J(J({},"".concat(un,"-ping-left"),xn),"".concat(un,"-ping-right"),En),"".concat(un,"-ping-top"),ut),"".concat(un,"-ping-bottom"),ir)),ref:P},f.createElement(ja,{onResize:ot},f.createElement("div",{ref:B,className:"".concat(R,"-nav-list"),style:{transform:"translate(".concat(U,"px, ").concat(F,"px)"),transition:Ee?"none":void 0}},ar,f.createElement(K2,{ref:H,prefixCls:R,locale:p,editable:h,style:q(q({},ar.length===0?void 0:Wn),{},{visibility:hn?"hidden":null})}),f.createElement("div",{className:ue("".concat(R,"-ink-bar"),J({},"".concat(R,"-ink-bar-animated"),s.inkBar)),style:Kn}))))),f.createElement(gA,Me({},e,{removeAriaLabel:p==null?void 0:p.removeAriaLabel,ref:N,prefixCls:R,tabs:jt,className:!hn&&at,tabMoving:!!Ee})),f.createElement(G1,{ref:A,position:"right",extra:m,prefixCls:R})))}),Y2=f.forwardRef(function(e,t){var r=e.prefixCls,i=e.className,o=e.style,s=e.id,u=e.active,d=e.tabKey,m=e.children;return f.createElement("div",{id:s&&"".concat(s,"-panel-").concat(d),role:"tabpanel",tabIndex:u?0:-1,"aria-labelledby":s&&"".concat(s,"-tab-").concat(d),"aria-hidden":!u,style:o,className:ue(r,u&&"".concat(r,"-active"),i),ref:t},m)}),pA=["renderTabBar"],yA=["label","key"],bA=function(t){var r=t.renderTabBar,i=rt(t,pA),o=f.useContext(Md),s=o.tabs;if(r){var u=q(q({},i),{},{panes:s.map(function(d){var m=d.label,h=d.key,p=rt(d,yA);return f.createElement(Y2,Me({tab:m,key:h,tabKey:h},p))})});return r(u,U1)}return f.createElement(U1,i)},SA=["key","forceRender","style","className","destroyInactiveTabPane"],CA=function(t){var r=t.id,i=t.activeKey,o=t.animated,s=t.tabPosition,u=t.destroyInactiveTabPane,d=f.useContext(Md),m=d.prefixCls,h=d.tabs,p=o.tabPane,y="".concat(m,"-tabpane");return f.createElement("div",{className:ue("".concat(m,"-content-holder"))},f.createElement("div",{className:ue("".concat(m,"-content"),"".concat(m,"-content-").concat(s),J({},"".concat(m,"-content-animated"),p))},h.map(function(b){var w=b.key,C=b.forceRender,x=b.style,S=b.className,$=b.destroyInactiveTabPane,R=rt(b,SA),T=w===i;return f.createElement(ba,Me({key:w,visible:T,forceRender:C,removeOnLeave:!!(u||$),leavedClassName:"".concat(y,"-hidden")},o.tabPaneMotion),function(z,O){var A=z.style,P=z.className;return f.createElement(Y2,Me({},R,{prefixCls:y,id:r,tabKey:w,animated:p,active:T,style:q(q({},x),A),className:ue(S,P),ref:O}))})})))};function wA(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{inkBar:!0,tabPane:!1},t;return e===!1?t={inkBar:!1,tabPane:!1}:e===!0?t={inkBar:!0,tabPane:!1}:t=q({inkBar:!0},Ge(e)==="object"?e:{}),t.tabPaneMotion&&t.tabPane===void 0&&(t.tabPane=!0),!t.tabPaneMotion&&t.tabPane&&(t.tabPane=!1),t}var xA=["id","prefixCls","className","items","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","more","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll","getPopupContainer","popupClassName","indicator"],W1=0,EA=f.forwardRef(function(e,t){var r=e.id,i=e.prefixCls,o=i===void 0?"rc-tabs":i,s=e.className,u=e.items,d=e.direction,m=e.activeKey,h=e.defaultActiveKey,p=e.editable,y=e.animated,b=e.tabPosition,w=b===void 0?"top":b,C=e.tabBarGutter,x=e.tabBarStyle,S=e.tabBarExtraContent,$=e.locale,R=e.more,T=e.destroyInactiveTabPane,z=e.renderTabBar,O=e.onChange,A=e.onTabClick,P=e.onTabScroll,B=e.getPopupContainer,N=e.popupClassName,H=e.indicator,j=rt(e,xA),W=f.useMemo(function(){return(u||[]).filter(function(Ce){return Ce&&Ge(Ce)==="object"&&"key"in Ce})},[u]),V=d==="rtl",U=wA(y),Z=f.useState(!1),_=oe(Z,2),L=_[0],F=_[1];f.useEffect(function(){F(c2())},[]);var Y=Or(function(){var Ce;return(Ce=W[0])===null||Ce===void 0?void 0:Ce.key},{value:m,defaultValue:h}),M=oe(Y,2),k=M[0],K=M[1],X=f.useState(function(){return W.findIndex(function(Ce){return Ce.key===k})}),I=oe(X,2),te=I[0],ne=I[1];f.useEffect(function(){var Ce=W.findIndex(function(be){return be.key===k});if(Ce===-1){var we;Ce=Math.max(0,Math.min(te,W.length-1)),K((we=W[Ce])===null||we===void 0?void 0:we.key)}ne(Ce)},[W.map(function(Ce){return Ce.key}).join("_"),k,te]);var fe=Or(null,{value:r}),ae=oe(fe,2),ce=ae[0],de=ae[1];f.useEffect(function(){r||(de("rc-tabs-".concat(W1)),W1+=1)},[]);function xe(Ce,we){A==null||A(Ce,we);var be=Ce!==k;K(Ce),be&&(O==null||O(Ce))}var Se={id:ce,activeKey:k,animated:U,tabPosition:w,rtl:V,mobile:L},Oe=q(q({},Se),{},{editable:p,locale:$,more:R,tabBarGutter:C,onTabClick:xe,onTabScroll:P,extra:S,style:x,panes:null,getPopupContainer:B,popupClassName:N,indicator:H});return f.createElement(Md.Provider,{value:{tabs:W,prefixCls:o}},f.createElement("div",Me({ref:t,id:r,className:ue(o,"".concat(o,"-").concat(w),J(J(J({},"".concat(o,"-mobile"),L),"".concat(o,"-editable"),p),"".concat(o,"-rtl"),V),s)},j),f.createElement(bA,Me({},Oe,{renderTabBar:z})),f.createElement(CA,Me({destroyInactiveTabPane:T},Se,{animated:U}))))});const $A={motionAppear:!1,motionEnter:!0,motionLeave:!0};function RA(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{inkBar:!0,tabPane:!1},r;return t===!1?r={inkBar:!1,tabPane:!1}:t===!0?r={inkBar:!0,tabPane:!0}:r=Object.assign({inkBar:!0},typeof t=="object"?t:{}),r.tabPane&&(r.tabPaneMotion=Object.assign(Object.assign({},$A),{motionName:ul(e,"switch")})),r}var TA=function(e,t){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(r[i]=e[i]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(r[i[o]]=e[i[o]]);return r};function OA(e){return e.filter(t=>t)}function MA(e,t){if(e)return e;const r=Ci(t).map(i=>{if(f.isValidElement(i)){const{key:o,props:s}=i,u=s||{},{tab:d}=u,m=TA(u,["tab"]);return Object.assign(Object.assign({key:String(o)},m),{label:d})}return null});return OA(r)}const AA=e=>{const{componentCls:t,motionDurationSlow:r}=e;return[{[t]:{[`${t}-switch`]:{"&-appear, &-enter":{transition:"none","&-start":{opacity:0},"&-active":{opacity:1,transition:`opacity ${r}`}},"&-leave":{position:"absolute",transition:"none",inset:0,"&-start":{opacity:1},"&-active":{opacity:0,transition:`opacity ${r}`}}}}},[Ku(e,"slide-up"),Ku(e,"slide-down")]]},NA=e=>{const{componentCls:t,tabsCardPadding:r,cardBg:i,cardGutter:o,colorBorderSecondary:s,itemSelectedColor:u}=e;return{[`${t}-card`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{margin:0,padding:r,background:i,border:`${le(e.lineWidth)} ${e.lineType} ${s}`,transition:`all ${e.motionDurationSlow} ${e.motionEaseInOut}`},[`${t}-tab-active`]:{color:u,background:e.colorBgContainer},[`${t}-tab-focus`]:Object.assign({},ud(e,-3)),[`${t}-ink-bar`]:{visibility:"hidden"},[`& ${t}-tab${t}-tab-focus ${t}-tab-btn`]:{outline:"none"}},[`&${t}-top, &${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab + ${t}-tab`]:{marginLeft:{_skip_check_:!0,value:le(o)}}}},[`&${t}-top`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:`${le(e.borderRadiusLG)} ${le(e.borderRadiusLG)} 0 0`},[`${t}-tab-active`]:{borderBottomColor:e.colorBgContainer}}},[`&${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:`0 0 ${le(e.borderRadiusLG)} ${le(e.borderRadiusLG)}`},[`${t}-tab-active`]:{borderTopColor:e.colorBgContainer}}},[`&${t}-left, &${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab + ${t}-tab`]:{marginTop:le(o)}}},[`&${t}-left`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`${le(e.borderRadiusLG)} 0 0 ${le(e.borderRadiusLG)}`}},[`${t}-tab-active`]:{borderRightColor:{_skip_check_:!0,value:e.colorBgContainer}}}},[`&${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`0 ${le(e.borderRadiusLG)} ${le(e.borderRadiusLG)} 0`}},[`${t}-tab-active`]:{borderLeftColor:{_skip_check_:!0,value:e.colorBgContainer}}}}}}},PA=e=>{const{componentCls:t,itemHoverColor:r,dropdownEdgeChildVerticalPadding:i}=e;return{[`${t}-dropdown`]:Object.assign(Object.assign({},Ei(e)),{position:"absolute",top:-9999,left:{_skip_check_:!0,value:-9999},zIndex:e.zIndexPopup,display:"block","&-hidden":{display:"none"},[`${t}-dropdown-menu`]:{maxHeight:e.tabsDropdownHeight,margin:0,padding:`${le(i)} 0`,overflowX:"hidden",overflowY:"auto",textAlign:{_skip_check_:!0,value:"left"},listStyleType:"none",backgroundColor:e.colorBgContainer,backgroundClip:"padding-box",borderRadius:e.borderRadiusLG,outline:"none",boxShadow:e.boxShadowSecondary,"&-item":Object.assign(Object.assign({},nc),{display:"flex",alignItems:"center",minWidth:e.tabsDropdownWidth,margin:0,padding:`${le(e.paddingXXS)} ${le(e.paddingSM)}`,color:e.colorText,fontWeight:"normal",fontSize:e.fontSize,lineHeight:e.lineHeight,cursor:"pointer",transition:`all ${e.motionDurationSlow}`,"> span":{flex:1,whiteSpace:"nowrap"},"&-remove":{flex:"none",marginLeft:{_skip_check_:!0,value:e.marginSM},color:e.colorTextDescription,fontSize:e.fontSizeSM,background:"transparent",border:0,cursor:"pointer","&:hover":{color:r}},"&:hover":{background:e.controlItemBgHover},"&-disabled":{"&, &:hover":{color:e.colorTextDisabled,background:"transparent",cursor:"not-allowed"}}})}})}},_A=e=>{const{componentCls:t,margin:r,colorBorderSecondary:i,horizontalMargin:o,verticalItemPadding:s,verticalItemMargin:u,calc:d}=e;return{[`${t}-top, ${t}-bottom`]:{flexDirection:"column",[`> ${t}-nav, > div > ${t}-nav`]:{margin:o,"&::before":{position:"absolute",right:{_skip_check_:!0,value:0},left:{_skip_check_:!0,value:0},borderBottom:`${le(e.lineWidth)} ${e.lineType} ${i}`,content:"''"},[`${t}-ink-bar`]:{height:e.lineWidthBold,"&-animated":{transition:`width ${e.motionDurationSlow}, left ${e.motionDurationSlow},
            right ${e.motionDurationSlow}`}},[`${t}-nav-wrap`]:{"&::before, &::after":{top:0,bottom:0,width:e.controlHeight},"&::before":{left:{_skip_check_:!0,value:0},boxShadow:e.boxShadowTabsOverflowLeft},"&::after":{right:{_skip_check_:!0,value:0},boxShadow:e.boxShadowTabsOverflowRight},[`&${t}-nav-wrap-ping-left::before`]:{opacity:1},[`&${t}-nav-wrap-ping-right::after`]:{opacity:1}}}},[`${t}-top`]:{[`> ${t}-nav,
        > div > ${t}-nav`]:{"&::before":{bottom:0},[`${t}-ink-bar`]:{bottom:0}}},[`${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{order:1,marginTop:r,marginBottom:0,"&::before":{top:0},[`${t}-ink-bar`]:{top:0}},[`> ${t}-content-holder, > div > ${t}-content-holder`]:{order:0}},[`${t}-left, ${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{flexDirection:"column",minWidth:d(e.controlHeight).mul(1.25).equal(),[`${t}-tab`]:{padding:s,textAlign:"center"},[`${t}-tab + ${t}-tab`]:{margin:u},[`${t}-nav-wrap`]:{flexDirection:"column","&::before, &::after":{right:{_skip_check_:!0,value:0},left:{_skip_check_:!0,value:0},height:e.controlHeight},"&::before":{top:0,boxShadow:e.boxShadowTabsOverflowTop},"&::after":{bottom:0,boxShadow:e.boxShadowTabsOverflowBottom},[`&${t}-nav-wrap-ping-top::before`]:{opacity:1},[`&${t}-nav-wrap-ping-bottom::after`]:{opacity:1}},[`${t}-ink-bar`]:{width:e.lineWidthBold,"&-animated":{transition:`height ${e.motionDurationSlow}, top ${e.motionDurationSlow}`}},[`${t}-nav-list, ${t}-nav-operations`]:{flex:"1 0 auto",flexDirection:"column"}}},[`${t}-left`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-ink-bar`]:{right:{_skip_check_:!0,value:0}}},[`> ${t}-content-holder, > div > ${t}-content-holder`]:{marginLeft:{_skip_check_:!0,value:le(d(e.lineWidth).mul(-1).equal())},borderLeft:{_skip_check_:!0,value:`${le(e.lineWidth)} ${e.lineType} ${e.colorBorder}`},[`> ${t}-content > ${t}-tabpane`]:{paddingLeft:{_skip_check_:!0,value:e.paddingLG}}}},[`${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{order:1,[`${t}-ink-bar`]:{left:{_skip_check_:!0,value:0}}},[`> ${t}-content-holder, > div > ${t}-content-holder`]:{order:0,marginRight:{_skip_check_:!0,value:d(e.lineWidth).mul(-1).equal()},borderRight:{_skip_check_:!0,value:`${le(e.lineWidth)} ${e.lineType} ${e.colorBorder}`},[`> ${t}-content > ${t}-tabpane`]:{paddingRight:{_skip_check_:!0,value:e.paddingLG}}}}}},DA=e=>{const{componentCls:t,cardPaddingSM:r,cardPaddingLG:i,horizontalItemPaddingSM:o,horizontalItemPaddingLG:s}=e;return{[t]:{"&-small":{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:o,fontSize:e.titleFontSizeSM}}},"&-large":{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:s,fontSize:e.titleFontSizeLG}}}},[`${t}-card`]:{[`&${t}-small`]:{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:r}},[`&${t}-bottom`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:`0 0 ${le(e.borderRadius)} ${le(e.borderRadius)}`}},[`&${t}-top`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:`${le(e.borderRadius)} ${le(e.borderRadius)} 0 0`}},[`&${t}-right`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`0 ${le(e.borderRadius)} ${le(e.borderRadius)} 0`}}},[`&${t}-left`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`${le(e.borderRadius)} 0 0 ${le(e.borderRadius)}`}}}},[`&${t}-large`]:{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:i}}}}}},zA=e=>{const{componentCls:t,itemActiveColor:r,itemHoverColor:i,iconCls:o,tabsHorizontalItemMargin:s,horizontalItemPadding:u,itemSelectedColor:d,itemColor:m}=e,h=`${t}-tab`;return{[h]:{position:"relative",WebkitTouchCallout:"none",WebkitTapHighlightColor:"transparent",display:"inline-flex",alignItems:"center",padding:u,fontSize:e.titleFontSize,background:"transparent",border:0,outline:"none",cursor:"pointer",color:m,"&-btn, &-remove":{"&:focus:not(:focus-visible), &:active":{color:r}},"&-btn":{outline:"none",transition:`all ${e.motionDurationSlow}`,[`${h}-icon:not(:last-child)`]:{marginInlineEnd:e.marginSM}},"&-remove":Object.assign({flex:"none",marginRight:{_skip_check_:!0,value:e.calc(e.marginXXS).mul(-1).equal()},marginLeft:{_skip_check_:!0,value:e.marginXS},color:e.colorTextDescription,fontSize:e.fontSizeSM,background:"transparent",border:"none",outline:"none",cursor:"pointer",transition:`all ${e.motionDurationSlow}`,"&:hover":{color:e.colorTextHeading}},Us(e)),"&:hover":{color:i},[`&${h}-active ${h}-btn`]:{color:d,textShadow:e.tabsActiveTextShadow},[`&${h}-focus ${h}-btn`]:Object.assign({},ud(e)),[`&${h}-disabled`]:{color:e.colorTextDisabled,cursor:"not-allowed"},[`&${h}-disabled ${h}-btn, &${h}-disabled ${t}-remove`]:{"&:focus, &:active":{color:e.colorTextDisabled}},[`& ${h}-remove ${o}`]:{margin:0},[`${o}:not(:last-child)`]:{marginRight:{_skip_check_:!0,value:e.marginSM}}},[`${h} + ${h}`]:{margin:{_skip_check_:!0,value:s}}}},LA=e=>{const{componentCls:t,tabsHorizontalItemMarginRTL:r,iconCls:i,cardGutter:o,calc:s}=e;return{[`${t}-rtl`]:{direction:"rtl",[`${t}-nav`]:{[`${t}-tab`]:{margin:{_skip_check_:!0,value:r},[`${t}-tab:last-of-type`]:{marginLeft:{_skip_check_:!0,value:0}},[i]:{marginRight:{_skip_check_:!0,value:0},marginLeft:{_skip_check_:!0,value:le(e.marginSM)}},[`${t}-tab-remove`]:{marginRight:{_skip_check_:!0,value:le(e.marginXS)},marginLeft:{_skip_check_:!0,value:le(s(e.marginXXS).mul(-1).equal())},[i]:{margin:0}}}},[`&${t}-left`]:{[`> ${t}-nav`]:{order:1},[`> ${t}-content-holder`]:{order:0}},[`&${t}-right`]:{[`> ${t}-nav`]:{order:0},[`> ${t}-content-holder`]:{order:1}},[`&${t}-card${t}-top, &${t}-card${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab + ${t}-tab`]:{marginRight:{_skip_check_:!0,value:o},marginLeft:{_skip_check_:!0,value:0}}}}},[`${t}-dropdown-rtl`]:{direction:"rtl"},[`${t}-menu-item`]:{[`${t}-dropdown-rtl`]:{textAlign:{_skip_check_:!0,value:"right"}}}}},HA=e=>{const{componentCls:t,tabsCardPadding:r,cardHeight:i,cardGutter:o,itemHoverColor:s,itemActiveColor:u,colorBorderSecondary:d}=e;return{[t]:Object.assign(Object.assign(Object.assign(Object.assign({},Ei(e)),{display:"flex",[`> ${t}-nav, > div > ${t}-nav`]:{position:"relative",display:"flex",flex:"none",alignItems:"center",[`${t}-nav-wrap`]:{position:"relative",display:"flex",flex:"auto",alignSelf:"stretch",overflow:"hidden",whiteSpace:"nowrap",transform:"translate(0)","&::before, &::after":{position:"absolute",zIndex:1,opacity:0,transition:`opacity ${e.motionDurationSlow}`,content:"''",pointerEvents:"none"}},[`${t}-nav-list`]:{position:"relative",display:"flex",transition:`opacity ${e.motionDurationSlow}`},[`${t}-nav-operations`]:{display:"flex",alignSelf:"stretch"},[`${t}-nav-operations-hidden`]:{position:"absolute",visibility:"hidden",pointerEvents:"none"},[`${t}-nav-more`]:{position:"relative",padding:r,background:"transparent",border:0,color:e.colorText,"&::after":{position:"absolute",right:{_skip_check_:!0,value:0},bottom:0,left:{_skip_check_:!0,value:0},height:e.calc(e.controlHeightLG).div(8).equal(),transform:"translateY(100%)",content:"''"}},[`${t}-nav-add`]:Object.assign({minWidth:i,marginLeft:{_skip_check_:!0,value:o},padding:le(e.paddingXS),background:"transparent",border:`${le(e.lineWidth)} ${e.lineType} ${d}`,borderRadius:`${le(e.borderRadiusLG)} ${le(e.borderRadiusLG)} 0 0`,outline:"none",cursor:"pointer",color:e.colorText,transition:`all ${e.motionDurationSlow} ${e.motionEaseInOut}`,"&:hover":{color:s},"&:active, &:focus:not(:focus-visible)":{color:u}},Us(e,-3))},[`${t}-extra-content`]:{flex:"none"},[`${t}-ink-bar`]:{position:"absolute",background:e.inkBarColor,pointerEvents:"none"}}),zA(e)),{[`${t}-content`]:{position:"relative",width:"100%"},[`${t}-content-holder`]:{flex:"auto",minWidth:0,minHeight:0},[`${t}-tabpane`]:Object.assign(Object.assign({},Us(e)),{"&-hidden":{display:"none"}})}),[`${t}-centered`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-nav-wrap`]:{[`&:not([class*='${t}-nav-wrap-ping']) > ${t}-nav-list`]:{margin:"auto"}}}}}},BA=e=>{const t=e.controlHeightLG;return{zIndexPopup:e.zIndexPopupBase+50,cardBg:e.colorFillAlter,cardHeight:t,cardPadding:`${(t-Math.round(e.fontSize*e.lineHeight))/2-e.lineWidth}px ${e.padding}px`,cardPaddingSM:`${e.paddingXXS*1.5}px ${e.padding}px`,cardPaddingLG:`${e.paddingXS}px ${e.padding}px ${e.paddingXXS*1.5}px`,titleFontSize:e.fontSize,titleFontSizeLG:e.fontSizeLG,titleFontSizeSM:e.fontSize,inkBarColor:e.colorPrimary,horizontalMargin:`0 0 ${e.margin}px 0`,horizontalItemGutter:32,horizontalItemMargin:"",horizontalItemMarginRTL:"",horizontalItemPadding:`${e.paddingSM}px 0`,horizontalItemPaddingSM:`${e.paddingXS}px 0`,horizontalItemPaddingLG:`${e.padding}px 0`,verticalItemPadding:`${e.paddingXS}px ${e.paddingLG}px`,verticalItemMargin:`${e.margin}px 0 0 0`,itemColor:e.colorText,itemSelectedColor:e.colorPrimary,itemHoverColor:e.colorPrimaryHover,itemActiveColor:e.colorPrimaryActive,cardGutter:e.marginXXS/2}},IA=rr("Tabs",e=>{const t=sn(e,{tabsCardPadding:e.cardPadding,dropdownEdgeChildVerticalPadding:e.paddingXXS,tabsActiveTextShadow:"0 0 0.25px currentcolor",tabsDropdownHeight:200,tabsDropdownWidth:120,tabsHorizontalItemMargin:`0 0 0 ${le(e.horizontalItemGutter)}`,tabsHorizontalItemMarginRTL:`0 0 0 ${le(e.horizontalItemGutter)}`});return[DA(t),LA(t),_A(t),PA(t),NA(t),HA(t),AA(t)]},BA),jA=()=>null;var kA=function(e,t){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(r[i]=e[i]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(r[i[o]]=e[i[o]]);return r};const X2=e=>{var t,r,i,o,s,u,d,m,h,p,y;const{type:b,className:w,rootClassName:C,size:x,onEdit:S,hideAdd:$,centered:R,addIcon:T,removeIcon:z,moreIcon:O,more:A,popupClassName:P,children:B,items:N,animated:H,style:j,indicatorSize:W,indicator:V}=e,U=kA(e,["type","className","rootClassName","size","onEdit","hideAdd","centered","addIcon","removeIcon","moreIcon","more","popupClassName","children","items","animated","style","indicatorSize","indicator"]),{prefixCls:Z}=U,{direction:_,tabs:L,getPrefixCls:F,getPopupContainer:Y}=f.useContext(At),M=F("tabs",Z),k=pl(M),[K,X,I]=IA(M,k);let te;b==="editable-card"&&(te={onEdit:(Se,Oe)=>{let{key:Ce,event:we}=Oe;S==null||S(Se==="add"?we:Ce,Se)},removeIcon:(t=z??(L==null?void 0:L.removeIcon))!==null&&t!==void 0?t:f.createElement(IC,null),addIcon:(T??(L==null?void 0:L.addIcon))||f.createElement(iA,null),showAdd:$!==!0});const ne=F(),fe=lo(x),ae=MA(N,B),ce=RA(M,H),de=Object.assign(Object.assign({},L==null?void 0:L.style),j),xe={align:(r=V==null?void 0:V.align)!==null&&r!==void 0?r:(i=L==null?void 0:L.indicator)===null||i===void 0?void 0:i.align,size:(d=(s=(o=V==null?void 0:V.size)!==null&&o!==void 0?o:W)!==null&&s!==void 0?s:(u=L==null?void 0:L.indicator)===null||u===void 0?void 0:u.size)!==null&&d!==void 0?d:L==null?void 0:L.indicatorSize};return K(f.createElement(EA,Object.assign({direction:_,getPopupContainer:Y},U,{items:ae,className:ue({[`${M}-${fe}`]:fe,[`${M}-card`]:["card","editable-card"].includes(b),[`${M}-editable-card`]:b==="editable-card",[`${M}-centered`]:R},L==null?void 0:L.className,w,C,X,I,k),popupClassName:ue(P,X,I,k),style:de,editable:te,more:Object.assign({icon:(y=(p=(h=(m=L==null?void 0:L.more)===null||m===void 0?void 0:m.icon)!==null&&h!==void 0?h:L==null?void 0:L.moreIcon)!==null&&p!==void 0?p:O)!==null&&y!==void 0?y:f.createElement(z2,null),transitionName:`${ne}-slide-up`},A),prefixCls:M,animated:ce,indicator:xe})))};X2.TabPane=jA;var FA=function(e,t){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(r[i]=e[i]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(r[i[o]]=e[i[o]]);return r};const Z2=e=>{var{prefixCls:t,className:r,hoverable:i=!0}=e,o=FA(e,["prefixCls","className","hoverable"]);const{getPrefixCls:s}=f.useContext(At),u=s("card",t),d=ue(`${u}-grid`,r,{[`${u}-grid-hoverable`]:i});return f.createElement("div",Object.assign({},o,{className:d}))},VA=e=>{const{antCls:t,componentCls:r,headerHeight:i,headerPadding:o,tabsMarginBottom:s}=e;return Object.assign(Object.assign({display:"flex",justifyContent:"center",flexDirection:"column",minHeight:i,marginBottom:-1,padding:`0 ${le(o)}`,color:e.colorTextHeading,fontWeight:e.fontWeightStrong,fontSize:e.headerFontSize,background:e.headerBg,borderBottom:`${le(e.lineWidth)} ${e.lineType} ${e.colorBorderSecondary}`,borderRadius:`${le(e.borderRadiusLG)} ${le(e.borderRadiusLG)} 0 0`},eo()),{"&-wrapper":{width:"100%",display:"flex",alignItems:"center"},"&-title":Object.assign(Object.assign({display:"inline-block",flex:1},nc),{[`
          > ${r}-typography,
          > ${r}-typography-edit-content
        `]:{insetInlineStart:0,marginTop:0,marginBottom:0}}),[`${t}-tabs-top`]:{clear:"both",marginBottom:s,color:e.colorText,fontWeight:"normal",fontSize:e.fontSize,"&-bar":{borderBottom:`${le(e.lineWidth)} ${e.lineType} ${e.colorBorderSecondary}`}}})},GA=e=>{const{cardPaddingBase:t,colorBorderSecondary:r,cardShadow:i,lineWidth:o}=e;return{width:"33.33%",padding:t,border:0,borderRadius:0,boxShadow:`
      ${le(o)} 0 0 0 ${r},
      0 ${le(o)} 0 0 ${r},
      ${le(o)} ${le(o)} 0 0 ${r},
      ${le(o)} 0 0 0 ${r} inset,
      0 ${le(o)} 0 0 ${r} inset;
    `,transition:`all ${e.motionDurationMid}`,"&-hoverable:hover":{position:"relative",zIndex:1,boxShadow:i}}},UA=e=>{const{componentCls:t,iconCls:r,actionsLiMargin:i,cardActionsIconSize:o,colorBorderSecondary:s,actionsBg:u}=e;return Object.assign(Object.assign({margin:0,padding:0,listStyle:"none",background:u,borderTop:`${le(e.lineWidth)} ${e.lineType} ${s}`,display:"flex",borderRadius:`0 0 ${le(e.borderRadiusLG)} ${le(e.borderRadiusLG)}`},eo()),{"& > li":{margin:i,color:e.colorTextDescription,textAlign:"center","> span":{position:"relative",display:"block",minWidth:e.calc(e.cardActionsIconSize).mul(2).equal(),fontSize:e.fontSize,lineHeight:e.lineHeight,cursor:"pointer","&:hover":{color:e.colorPrimary,transition:`color ${e.motionDurationMid}`},[`a:not(${t}-btn), > ${r}`]:{display:"inline-block",width:"100%",color:e.colorTextDescription,lineHeight:le(e.fontHeight),transition:`color ${e.motionDurationMid}`,"&:hover":{color:e.colorPrimary}},[`> ${r}`]:{fontSize:o,lineHeight:le(e.calc(o).mul(e.lineHeight).equal())}},"&:not(:last-child)":{borderInlineEnd:`${le(e.lineWidth)} ${e.lineType} ${s}`}}})},WA=e=>Object.assign(Object.assign({margin:`${le(e.calc(e.marginXXS).mul(-1).equal())} 0`,display:"flex"},eo()),{"&-avatar":{paddingInlineEnd:e.padding},"&-detail":{overflow:"hidden",flex:1,"> div:not(:last-child)":{marginBottom:e.marginXS}},"&-title":Object.assign({color:e.colorTextHeading,fontWeight:e.fontWeightStrong,fontSize:e.fontSizeLG},nc),"&-description":{color:e.colorTextDescription}}),qA=e=>{const{componentCls:t,colorFillAlter:r,headerPadding:i,bodyPadding:o}=e;return{[`${t}-head`]:{padding:`0 ${le(i)}`,background:r,"&-title":{fontSize:e.fontSize}},[`${t}-body`]:{padding:`${le(e.padding)} ${le(o)}`}}},JA=e=>{const{componentCls:t}=e;return{overflow:"hidden",[`${t}-body`]:{userSelect:"none"}}},KA=e=>{const{componentCls:t,cardShadow:r,cardHeadPadding:i,colorBorderSecondary:o,boxShadowTertiary:s,bodyPadding:u,extraColor:d}=e;return{[t]:Object.assign(Object.assign({},Ei(e)),{position:"relative",background:e.colorBgContainer,borderRadius:e.borderRadiusLG,[`&:not(${t}-bordered)`]:{boxShadow:s},[`${t}-head`]:VA(e),[`${t}-extra`]:{marginInlineStart:"auto",color:d,fontWeight:"normal",fontSize:e.fontSize},[`${t}-body`]:Object.assign({padding:u,borderRadius:`0 0 ${le(e.borderRadiusLG)} ${le(e.borderRadiusLG)}`},eo()),[`${t}-grid`]:GA(e),[`${t}-cover`]:{"> *":{display:"block",width:"100%",borderRadius:`${le(e.borderRadiusLG)} ${le(e.borderRadiusLG)} 0 0`}},[`${t}-actions`]:UA(e),[`${t}-meta`]:WA(e)}),[`${t}-bordered`]:{border:`${le(e.lineWidth)} ${e.lineType} ${o}`,[`${t}-cover`]:{marginTop:-1,marginInlineStart:-1,marginInlineEnd:-1}},[`${t}-hoverable`]:{cursor:"pointer",transition:`box-shadow ${e.motionDurationMid}, border-color ${e.motionDurationMid}`,"&:hover":{borderColor:"transparent",boxShadow:r}},[`${t}-contain-grid`]:{borderRadius:`${le(e.borderRadiusLG)} ${le(e.borderRadiusLG)} 0 0 `,[`${t}-body`]:{display:"flex",flexWrap:"wrap"},[`&:not(${t}-loading) ${t}-body`]:{marginBlockStart:e.calc(e.lineWidth).mul(-1).equal(),marginInlineStart:e.calc(e.lineWidth).mul(-1).equal(),padding:0}},[`${t}-contain-tabs`]:{[`> div${t}-head`]:{minHeight:0,[`${t}-head-title, ${t}-extra`]:{paddingTop:i}}},[`${t}-type-inner`]:qA(e),[`${t}-loading`]:JA(e),[`${t}-rtl`]:{direction:"rtl"}}},YA=e=>{const{componentCls:t,bodyPaddingSM:r,headerPaddingSM:i,headerHeightSM:o,headerFontSizeSM:s}=e;return{[`${t}-small`]:{[`> ${t}-head`]:{minHeight:o,padding:`0 ${le(i)}`,fontSize:s,[`> ${t}-head-wrapper`]:{[`> ${t}-extra`]:{fontSize:e.fontSize}}},[`> ${t}-body`]:{padding:r}},[`${t}-small${t}-contain-tabs`]:{[`> ${t}-head`]:{[`${t}-head-title, ${t}-extra`]:{paddingTop:0,display:"flex",alignItems:"center"}}}}},XA=e=>{var t,r;return{headerBg:"transparent",headerFontSize:e.fontSizeLG,headerFontSizeSM:e.fontSize,headerHeight:e.fontSizeLG*e.lineHeightLG+e.padding*2,headerHeightSM:e.fontSize*e.lineHeight+e.paddingXS*2,actionsBg:e.colorBgContainer,actionsLiMargin:`${e.paddingSM}px 0`,tabsMarginBottom:-e.padding-e.lineWidth,extraColor:e.colorText,bodyPaddingSM:12,headerPaddingSM:12,bodyPadding:(t=e.bodyPadding)!==null&&t!==void 0?t:e.paddingLG,headerPadding:(r=e.headerPadding)!==null&&r!==void 0?r:e.paddingLG}},ZA=rr("Card",e=>{const t=sn(e,{cardShadow:e.boxShadowCard,cardHeadPadding:e.padding,cardPaddingBase:e.paddingLG,cardActionsIconSize:e.fontSize});return[KA(t),YA(t)]},XA);var q1=function(e,t){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(r[i]=e[i]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(r[i[o]]=e[i[o]]);return r};const QA=e=>{const{actionClasses:t,actions:r=[],actionStyle:i}=e;return f.createElement("ul",{className:t,style:i},r.map((o,s)=>{const u=`action-${s}`;return f.createElement("li",{style:{width:`${100/r.length}%`},key:u},f.createElement("span",null,o))}))},e7=f.forwardRef((e,t)=>{const{prefixCls:r,className:i,rootClassName:o,style:s,extra:u,headStyle:d={},bodyStyle:m={},title:h,loading:p,bordered:y,variant:b,size:w,type:C,cover:x,actions:S,tabList:$,children:R,activeTabKey:T,defaultActiveTabKey:z,tabBarExtraContent:O,hoverable:A,tabProps:P={},classNames:B,styles:N}=e,H=q1(e,["prefixCls","className","rootClassName","style","extra","headStyle","bodyStyle","title","loading","bordered","variant","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps","classNames","styles"]),{getPrefixCls:j,direction:W,card:V}=f.useContext(At),[U]=lv("card",b,y),Z=Ne=>{var $e;($e=e.onTabChange)===null||$e===void 0||$e.call(e,Ne)},_=Ne=>{var $e;return ue(($e=V==null?void 0:V.classNames)===null||$e===void 0?void 0:$e[Ne],B==null?void 0:B[Ne])},L=Ne=>{var $e;return Object.assign(Object.assign({},($e=V==null?void 0:V.styles)===null||$e===void 0?void 0:$e[Ne]),N==null?void 0:N[Ne])},F=f.useMemo(()=>{let Ne=!1;return f.Children.forEach(R,$e=>{($e==null?void 0:$e.type)===Z2&&(Ne=!0)}),Ne},[R]),Y=j("card",r),[M,k,K]=ZA(Y),X=f.createElement(bl,{loading:!0,active:!0,paragraph:{rows:4},title:!1},R),I=T!==void 0,te=Object.assign(Object.assign({},P),{[I?"activeKey":"defaultActiveKey"]:I?T:z,tabBarExtraContent:O});let ne;const fe=lo(w),ae=!fe||fe==="default"?"large":fe,ce=$?f.createElement(X2,Object.assign({size:ae},te,{className:`${Y}-head-tabs`,onChange:Z,items:$.map(Ne=>{var{tab:$e}=Ne,Fe=q1(Ne,["tab"]);return Object.assign({label:$e},Fe)})})):null;if(h||u||ce){const Ne=ue(`${Y}-head`,_("header")),$e=ue(`${Y}-head-title`,_("title")),Fe=ue(`${Y}-extra`,_("extra")),ye=Object.assign(Object.assign({},d),L("header"));ne=f.createElement("div",{className:Ne,style:ye},f.createElement("div",{className:`${Y}-head-wrapper`},h&&f.createElement("div",{className:$e,style:L("title")},h),u&&f.createElement("div",{className:Fe,style:L("extra")},u)),ce)}const de=ue(`${Y}-cover`,_("cover")),xe=x?f.createElement("div",{className:de,style:L("cover")},x):null,Se=ue(`${Y}-body`,_("body")),Oe=Object.assign(Object.assign({},m),L("body")),Ce=f.createElement("div",{className:Se,style:Oe},p?X:R),we=ue(`${Y}-actions`,_("actions")),be=S!=null&&S.length?f.createElement(QA,{actionClasses:we,actionStyle:L("actions"),actions:S}):null,De=dr(H,["onTabChange"]),Te=ue(Y,V==null?void 0:V.className,{[`${Y}-loading`]:p,[`${Y}-bordered`]:U!=="borderless",[`${Y}-hoverable`]:A,[`${Y}-contain-grid`]:F,[`${Y}-contain-tabs`]:$==null?void 0:$.length,[`${Y}-${fe}`]:fe,[`${Y}-type-${C}`]:!!C,[`${Y}-rtl`]:W==="rtl"},i,o,k,K),Be=Object.assign(Object.assign({},V==null?void 0:V.style),s);return M(f.createElement("div",Object.assign({ref:t},De,{className:Te,style:Be}),ne,xe,Ce,be))});var t7=function(e,t){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(r[i]=e[i]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(r[i[o]]=e[i[o]]);return r};const n7=e=>{const{prefixCls:t,className:r,avatar:i,title:o,description:s}=e,u=t7(e,["prefixCls","className","avatar","title","description"]),{getPrefixCls:d}=f.useContext(At),m=d("card",t),h=ue(`${m}-meta`,r),p=i?f.createElement("div",{className:`${m}-meta-avatar`},i):null,y=o?f.createElement("div",{className:`${m}-meta-title`},o):null,b=s?f.createElement("div",{className:`${m}-meta-description`},s):null,w=y||b?f.createElement("div",{className:`${m}-meta-detail`},y,b):null;return f.createElement("div",Object.assign({},u,{className:h}),p,w)},pv=e7;pv.Grid=Z2;pv.Meta=n7;const r7=f.createContext({});function a7(e,t){const r=[void 0,void 0],i=Array.isArray(e)?e:[e,void 0],o=t||{xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0};return i.forEach((s,u)=>{if(typeof s=="object"&&s!==null)for(let d=0;d<Ks.length;d++){const m=Ks[d];if(o[m]&&s[m]!==void 0){r[u]=s[m];break}}else r[u]=s}),r}var i7=function(e,t){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(r[i]=e[i]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(r[i[o]]=e[i[o]]);return r};function J1(e,t){const[r,i]=f.useState(typeof e=="string"?e:""),o=()=>{if(typeof e=="string"&&i(e),typeof e=="object")for(let s=0;s<Ks.length;s++){const u=Ks[s];if(!t||!t[u])continue;const d=e[u];if(d!==void 0){i(d);return}}};return f.useEffect(()=>{o()},[JSON.stringify(e),t]),r}const o7=f.forwardRef((e,t)=>{const{prefixCls:r,justify:i,align:o,className:s,style:u,children:d,gutter:m=0,wrap:h}=e,p=i7(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),{getPrefixCls:y,direction:b}=f.useContext(At),w=d9(!0,null),C=J1(o,w),x=J1(i,w),S=y("row",r),[$,R,T]=OO(S),z=a7(m,w),O=ue(S,{[`${S}-no-wrap`]:h===!1,[`${S}-${x}`]:x,[`${S}-${C}`]:C,[`${S}-rtl`]:b==="rtl"},s,R,T),A={},P=z[0]!=null&&z[0]>0?z[0]/-2:void 0;P&&(A.marginLeft=P,A.marginRight=P);const[B,N]=z;A.rowGap=N;const H=f.useMemo(()=>({gutter:[B,N],wrap:h}),[B,N,h]);return $(f.createElement(r7.Provider,{value:H},f.createElement("div",Object.assign({},p,{className:O,style:Object.assign(Object.assign({},A),u),ref:t}),d)))});function l7(e){return!!(e.addonBefore||e.addonAfter)}function s7(e){return!!(e.prefix||e.suffix||e.allowClear)}function K1(e,t,r){var i=t.cloneNode(!0),o=Object.create(e,{target:{value:i},currentTarget:{value:i}});return i.value=r,typeof t.selectionStart=="number"&&typeof t.selectionEnd=="number"&&(i.selectionStart=t.selectionStart,i.selectionEnd=t.selectionEnd),i.setSelectionRange=function(){t.setSelectionRange.apply(t,arguments)},o}function ed(e,t,r,i){if(r){var o=t;if(t.type==="click"){o=K1(t,e,""),r(o);return}if(e.type!=="file"&&i!==void 0){o=K1(t,e,i),r(o);return}r(o)}}function Q2(e,t){if(e){e.focus(t);var r=t||{},i=r.cursor;if(i){var o=e.value.length;switch(i){case"start":e.setSelectionRange(0,0);break;case"end":e.setSelectionRange(o,o);break;default:e.setSelectionRange(0,o)}}}}var ew=he.forwardRef(function(e,t){var r,i,o,s=e.inputElement,u=e.children,d=e.prefixCls,m=e.prefix,h=e.suffix,p=e.addonBefore,y=e.addonAfter,b=e.className,w=e.style,C=e.disabled,x=e.readOnly,S=e.focused,$=e.triggerFocus,R=e.allowClear,T=e.value,z=e.handleReset,O=e.hidden,A=e.classes,P=e.classNames,B=e.dataAttrs,N=e.styles,H=e.components,j=e.onClear,W=u??s,V=(H==null?void 0:H.affixWrapper)||"span",U=(H==null?void 0:H.groupWrapper)||"span",Z=(H==null?void 0:H.wrapper)||"span",_=(H==null?void 0:H.groupAddon)||"span",L=f.useRef(null),F=function(we){var be;(be=L.current)!==null&&be!==void 0&&be.contains(we.target)&&($==null||$())},Y=s7(e),M=f.cloneElement(W,{value:T,className:ue((r=W.props)===null||r===void 0?void 0:r.className,!Y&&(P==null?void 0:P.variant))||null}),k=f.useRef(null);if(he.useImperativeHandle(t,function(){return{nativeElement:k.current||L.current}}),Y){var K=null;if(R){var X=!C&&!x&&T,I="".concat(d,"-clear-icon"),te=Ge(R)==="object"&&R!==null&&R!==void 0&&R.clearIcon?R.clearIcon:"✖";K=he.createElement("button",{type:"button",tabIndex:-1,onClick:function(we){z==null||z(we),j==null||j()},onMouseDown:function(we){return we.preventDefault()},className:ue(I,J(J({},"".concat(I,"-hidden"),!X),"".concat(I,"-has-suffix"),!!h))},te)}var ne="".concat(d,"-affix-wrapper"),fe=ue(ne,J(J(J(J(J({},"".concat(d,"-disabled"),C),"".concat(ne,"-disabled"),C),"".concat(ne,"-focused"),S),"".concat(ne,"-readonly"),x),"".concat(ne,"-input-with-clear-btn"),h&&R&&T),A==null?void 0:A.affixWrapper,P==null?void 0:P.affixWrapper,P==null?void 0:P.variant),ae=(h||R)&&he.createElement("span",{className:ue("".concat(d,"-suffix"),P==null?void 0:P.suffix),style:N==null?void 0:N.suffix},K,h);M=he.createElement(V,Me({className:fe,style:N==null?void 0:N.affixWrapper,onClick:F},B==null?void 0:B.affixWrapper,{ref:L}),m&&he.createElement("span",{className:ue("".concat(d,"-prefix"),P==null?void 0:P.prefix),style:N==null?void 0:N.prefix},m),M,ae)}if(l7(e)){var ce="".concat(d,"-group"),de="".concat(ce,"-addon"),xe="".concat(ce,"-wrapper"),Se=ue("".concat(d,"-wrapper"),ce,A==null?void 0:A.wrapper,P==null?void 0:P.wrapper),Oe=ue(xe,J({},"".concat(xe,"-disabled"),C),A==null?void 0:A.group,P==null?void 0:P.groupWrapper);M=he.createElement(U,{className:Oe,ref:k},he.createElement(Z,{className:Se},p&&he.createElement(_,{className:de},p),M,y&&he.createElement(_,{className:de},y)))}return he.cloneElement(M,{className:ue((i=M.props)===null||i===void 0?void 0:i.className,b)||null,style:q(q({},(o=M.props)===null||o===void 0?void 0:o.style),w),hidden:O})}),c7=["show"];function tw(e,t){return f.useMemo(function(){var r={};t&&(r.show=Ge(t)==="object"&&t.formatter?t.formatter:!!t),r=q(q({},r),e);var i=r,o=i.show,s=rt(i,c7);return q(q({},s),{},{show:!!o,showFormatter:typeof o=="function"?o:void 0,strategy:s.strategy||function(u){return u.length}})},[e,t])}var u7=["autoComplete","onChange","onFocus","onBlur","onPressEnter","onKeyDown","onKeyUp","prefixCls","disabled","htmlSize","className","maxLength","suffix","showCount","count","type","classes","classNames","styles","onCompositionStart","onCompositionEnd"],d7=f.forwardRef(function(e,t){var r=e.autoComplete,i=e.onChange,o=e.onFocus,s=e.onBlur,u=e.onPressEnter,d=e.onKeyDown,m=e.onKeyUp,h=e.prefixCls,p=h===void 0?"rc-input":h,y=e.disabled,b=e.htmlSize,w=e.className,C=e.maxLength,x=e.suffix,S=e.showCount,$=e.count,R=e.type,T=R===void 0?"text":R,z=e.classes,O=e.classNames,A=e.styles,P=e.onCompositionStart,B=e.onCompositionEnd,N=rt(e,u7),H=f.useState(!1),j=oe(H,2),W=j[0],V=j[1],U=f.useRef(!1),Z=f.useRef(!1),_=f.useRef(null),L=f.useRef(null),F=function(Re){_.current&&Q2(_.current,Re)},Y=Or(e.defaultValue,{value:e.value}),M=oe(Y,2),k=M[0],K=M[1],X=k==null?"":String(k),I=f.useState(null),te=oe(I,2),ne=te[0],fe=te[1],ae=tw($,S),ce=ae.max||C,de=ae.strategy(X),xe=!!ce&&de>ce;f.useImperativeHandle(t,function(){var ye;return{focus:F,blur:function(){var Ue;(Ue=_.current)===null||Ue===void 0||Ue.blur()},setSelectionRange:function(Ue,Ie,at){var qe;(qe=_.current)===null||qe===void 0||qe.setSelectionRange(Ue,Ie,at)},select:function(){var Ue;(Ue=_.current)===null||Ue===void 0||Ue.select()},input:_.current,nativeElement:((ye=L.current)===null||ye===void 0?void 0:ye.nativeElement)||_.current}}),f.useEffect(function(){Z.current&&(Z.current=!1),V(function(ye){return ye&&y?!1:ye})},[y]);var Se=function(Re,Ue,Ie){var at=Ue;if(!U.current&&ae.exceedFormatter&&ae.max&&ae.strategy(Ue)>ae.max){if(at=ae.exceedFormatter(Ue,{max:ae.max}),Ue!==at){var qe,Ke;fe([((qe=_.current)===null||qe===void 0?void 0:qe.selectionStart)||0,((Ke=_.current)===null||Ke===void 0?void 0:Ke.selectionEnd)||0])}}else if(Ie.source==="compositionEnd")return;K(at),_.current&&ed(_.current,Re,i,at)};f.useEffect(function(){if(ne){var ye;(ye=_.current)===null||ye===void 0||ye.setSelectionRange.apply(ye,Le(ne))}},[ne]);var Oe=function(Re){Se(Re,Re.target.value,{source:"change"})},Ce=function(Re){U.current=!1,Se(Re,Re.currentTarget.value,{source:"compositionEnd"}),B==null||B(Re)},we=function(Re){u&&Re.key==="Enter"&&!Z.current&&(Z.current=!0,u(Re)),d==null||d(Re)},be=function(Re){Re.key==="Enter"&&(Z.current=!1),m==null||m(Re)},De=function(Re){V(!0),o==null||o(Re)},Te=function(Re){Z.current&&(Z.current=!1),V(!1),s==null||s(Re)},Be=function(Re){K(""),F(),_.current&&ed(_.current,Re,i)},Ne=xe&&"".concat(p,"-out-of-range"),$e=function(){var Re=dr(e,["prefixCls","onPressEnter","addonBefore","addonAfter","prefix","suffix","allowClear","defaultValue","showCount","count","classes","htmlSize","styles","classNames","onClear"]);return he.createElement("input",Me({autoComplete:r},Re,{onChange:Oe,onFocus:De,onBlur:Te,onKeyDown:we,onKeyUp:be,className:ue(p,J({},"".concat(p,"-disabled"),y),O==null?void 0:O.input),style:A==null?void 0:A.input,ref:_,size:b,type:T,onCompositionStart:function(Ie){U.current=!0,P==null||P(Ie)},onCompositionEnd:Ce}))},Fe=function(){var Re=Number(ce)>0;if(x||ae.show){var Ue=ae.showFormatter?ae.showFormatter({value:X,count:de,maxLength:ce}):"".concat(de).concat(Re?" / ".concat(ce):"");return he.createElement(he.Fragment,null,ae.show&&he.createElement("span",{className:ue("".concat(p,"-show-count-suffix"),J({},"".concat(p,"-show-count-has-suffix"),!!x),O==null?void 0:O.count),style:q({},A==null?void 0:A.count)},Ue),x)}return null};return he.createElement(ew,Me({},N,{prefixCls:p,className:ue(w,Ne),handleReset:Be,value:X,focused:W,triggerFocus:F,suffix:Fe(),disabled:y,classes:z,classNames:O,styles:A}),$e())});const nw=e=>{let t;return typeof e=="object"&&(e!=null&&e.clearIcon)?t=e:e&&(t={clearIcon:he.createElement(W5,null)}),t};function rw(e,t){const r=f.useRef([]),i=()=>{r.current.push(setTimeout(()=>{var o,s,u,d;!((o=e.current)===null||o===void 0)&&o.input&&((s=e.current)===null||s===void 0?void 0:s.input.getAttribute("type"))==="password"&&(!((u=e.current)===null||u===void 0)&&u.input.hasAttribute("value"))&&((d=e.current)===null||d===void 0||d.input.removeAttribute("value"))}))};return f.useEffect(()=>(t&&i(),()=>r.current.forEach(o=>{o&&clearTimeout(o)})),[]),i}function f7(e){return!!(e.prefix||e.suffix||e.allowClear||e.showCount)}var m7=function(e,t){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(r[i]=e[i]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(r[i[o]]=e[i[o]]);return r};const Ad=f.forwardRef((e,t)=>{const{prefixCls:r,bordered:i=!0,status:o,size:s,disabled:u,onBlur:d,onFocus:m,suffix:h,allowClear:p,addonAfter:y,addonBefore:b,className:w,style:C,styles:x,rootClassName:S,onChange:$,classNames:R,variant:T}=e,z=m7(e,["prefixCls","bordered","status","size","disabled","onBlur","onFocus","suffix","allowClear","addonAfter","addonBefore","className","style","styles","rootClassName","onChange","classNames","variant"]),{getPrefixCls:O,direction:A,allowClear:P,autoComplete:B,className:N,style:H,classNames:j,styles:W}=io("input"),V=O("input",r),U=f.useRef(null),Z=pl(V),[_,L,F]=U2(V,S),[Y]=W2(V,Z),{compactSize:M,compactItemClassnames:k}=md(V,A),K=lo(Te=>{var Be;return(Be=s??M)!==null&&Be!==void 0?Be:Te}),X=he.useContext(Zi),I=u??X,{status:te,hasFeedback:ne,feedbackIcon:fe}=f.useContext(xi),ae=ov(te,o),ce=f7(e)||!!ne;f.useRef(ce);const de=rw(U,!0),xe=Te=>{de(),d==null||d(Te)},Se=Te=>{de(),m==null||m(Te)},Oe=Te=>{de(),$==null||$(Te)},Ce=(ne||h)&&he.createElement(he.Fragment,null,h,ne&&fe),we=nw(p??P),[be,De]=lv("input",T,i);return _(Y(he.createElement(d7,Object.assign({ref:Ua(t,U),prefixCls:V,autoComplete:B},z,{disabled:I,onBlur:xe,onFocus:Se,style:Object.assign(Object.assign({},H),C),styles:Object.assign(Object.assign({},W),x),suffix:Ce,allowClear:we,className:ue(w,S,F,Z,k,N),onChange:Oe,addonBefore:b&&he.createElement(fh,{form:!0,space:!0},b),addonAfter:y&&he.createElement(fh,{form:!0,space:!0},y),classNames:Object.assign(Object.assign(Object.assign({},R),j),{input:ue({[`${V}-sm`]:K==="small",[`${V}-lg`]:K==="large",[`${V}-rtl`]:A==="rtl"},R==null?void 0:R.input,j.input,L),variant:ue({[`${V}-${be}`]:De},hh(V,ae)),affixWrapper:ue({[`${V}-affix-wrapper-sm`]:K==="small",[`${V}-affix-wrapper-lg`]:K==="large",[`${V}-affix-wrapper-rtl`]:A==="rtl"},L),wrapper:ue({[`${V}-group-rtl`]:A==="rtl"},L),groupWrapper:ue({[`${V}-group-wrapper-sm`]:K==="small",[`${V}-group-wrapper-lg`]:K==="large",[`${V}-group-wrapper-rtl`]:A==="rtl",[`${V}-group-wrapper-${be}`]:De},hh(`${V}-group-wrapper`,ae,ne),L)})}))))});var g7={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"}}]},name:"eye",theme:"outlined"},h7=function(t,r){return f.createElement(Hn,Me({},t,{ref:r,icon:g7}))},aw=f.forwardRef(h7);function iw(){var e=document.documentElement.clientWidth,t=window.innerHeight||document.documentElement.clientHeight;return{width:e,height:t}}function v7(e){var t=e.getBoundingClientRect(),r=document.documentElement;return{left:t.left+(window.pageXOffset||r.scrollLeft)-(r.clientLeft||document.body.clientLeft||0),top:t.top+(window.pageYOffset||r.scrollTop)-(r.clientTop||document.body.clientTop||0)}}function Xo(e,t,r,i){var o=Ds.unstable_batchedUpdates?function(u){Ds.unstable_batchedUpdates(r,u)}:r;return e!=null&&e.addEventListener&&e.addEventListener(t,o,i),{remove:function(){e!=null&&e.removeEventListener&&e.removeEventListener(t,o,i)}}}var uc=f.createContext(null),p7=function(t){var r=t.visible,i=t.maskTransitionName,o=t.getContainer,s=t.prefixCls,u=t.rootClassName,d=t.icons,m=t.countRender,h=t.showSwitch,p=t.showProgress,y=t.current,b=t.transform,w=t.count,C=t.scale,x=t.minScale,S=t.maxScale,$=t.closeIcon,R=t.onActive,T=t.onClose,z=t.onZoomIn,O=t.onZoomOut,A=t.onRotateRight,P=t.onRotateLeft,B=t.onFlipX,N=t.onFlipY,H=t.onReset,j=t.toolbarRender,W=t.zIndex,V=t.image,U=f.useContext(uc),Z=d.rotateLeft,_=d.rotateRight,L=d.zoomIn,F=d.zoomOut,Y=d.close,M=d.left,k=d.right,K=d.flipX,X=d.flipY,I="".concat(s,"-operations-operation");f.useEffect(function(){var be=function(Te){Te.keyCode===rn.ESC&&T()};return r&&window.addEventListener("keydown",be),function(){window.removeEventListener("keydown",be)}},[r]);var te=function(De,Te){De.preventDefault(),De.stopPropagation(),R(Te)},ne=f.useCallback(function(be){var De=be.type,Te=be.disabled,Be=be.onClick,Ne=be.icon;return f.createElement("div",{key:De,className:ue(I,"".concat(s,"-operations-operation-").concat(De),J({},"".concat(s,"-operations-operation-disabled"),!!Te)),onClick:Be},Ne)},[I,s]),fe=h?ne({icon:M,onClick:function(De){return te(De,-1)},type:"prev",disabled:y===0}):void 0,ae=h?ne({icon:k,onClick:function(De){return te(De,1)},type:"next",disabled:y===w-1}):void 0,ce=ne({icon:X,onClick:N,type:"flipY"}),de=ne({icon:K,onClick:B,type:"flipX"}),xe=ne({icon:Z,onClick:P,type:"rotateLeft"}),Se=ne({icon:_,onClick:A,type:"rotateRight"}),Oe=ne({icon:F,onClick:O,type:"zoomOut",disabled:C<=x}),Ce=ne({icon:L,onClick:z,type:"zoomIn",disabled:C===S}),we=f.createElement("div",{className:"".concat(s,"-operations")},ce,de,xe,Se,Oe,Ce);return f.createElement(ba,{visible:r,motionName:i},function(be){var De=be.className,Te=be.style;return f.createElement(Cd,{open:!0,getContainer:o??document.body},f.createElement("div",{className:ue("".concat(s,"-operations-wrapper"),De,u),style:q(q({},Te),{},{zIndex:W})},$===null?null:f.createElement("button",{className:"".concat(s,"-close"),onClick:T},$||Y),h&&f.createElement(f.Fragment,null,f.createElement("div",{className:ue("".concat(s,"-switch-left"),J({},"".concat(s,"-switch-left-disabled"),y===0)),onClick:function(Ne){return te(Ne,-1)}},M),f.createElement("div",{className:ue("".concat(s,"-switch-right"),J({},"".concat(s,"-switch-right-disabled"),y===w-1)),onClick:function(Ne){return te(Ne,1)}},k)),f.createElement("div",{className:"".concat(s,"-footer")},p&&f.createElement("div",{className:"".concat(s,"-progress")},m?m(y+1,w):"".concat(y+1," / ").concat(w)),j?j(we,q(q({icons:{prevIcon:fe,nextIcon:ae,flipYIcon:ce,flipXIcon:de,rotateLeftIcon:xe,rotateRightIcon:Se,zoomOutIcon:Oe,zoomInIcon:Ce},actions:{onActive:R,onFlipY:N,onFlipX:B,onRotateLeft:P,onRotateRight:A,onZoomOut:O,onZoomIn:z,onReset:H,onClose:T},transform:b},U?{current:y,total:w}:{}),{},{image:V})):we)))})},xu={x:0,y:0,rotate:0,scale:1,flipX:!1,flipY:!1};function y7(e,t,r,i){var o=f.useRef(null),s=f.useRef([]),u=f.useState(xu),d=oe(u,2),m=d[0],h=d[1],p=function(C){h(xu),al(xu,m)||i==null||i({transform:xu,action:C})},y=function(C,x){o.current===null&&(s.current=[],o.current=Cn(function(){h(function(S){var $=S;return s.current.forEach(function(R){$=q(q({},$),R)}),o.current=null,i==null||i({transform:$,action:x}),$})})),s.current.push(q(q({},m),C))},b=function(C,x,S,$,R){var T=e.current,z=T.width,O=T.height,A=T.offsetWidth,P=T.offsetHeight,B=T.offsetLeft,N=T.offsetTop,H=C,j=m.scale*C;j>r?(j=r,H=r/m.scale):j<t&&(j=R?j:t,H=j/m.scale);var W=S??innerWidth/2,V=$??innerHeight/2,U=H-1,Z=U*z*.5,_=U*O*.5,L=U*(W-m.x-B),F=U*(V-m.y-N),Y=m.x-(L-Z),M=m.y-(F-_);if(C<1&&j===1){var k=A*j,K=P*j,X=iw(),I=X.width,te=X.height;k<=I&&K<=te&&(Y=0,M=0)}y({x:Y,y:M,scale:j},x)};return{transform:m,resetTransform:p,updateTransform:y,dispatchZoomChange:b}}function Y1(e,t,r,i){var o=t+r,s=(r-i)/2;if(r>i){if(t>0)return J({},e,s);if(t<0&&o<i)return J({},e,-s)}else if(t<0||o>i)return J({},e,t<0?s:-s);return{}}function ow(e,t,r,i){var o=iw(),s=o.width,u=o.height,d=null;return e<=s&&t<=u?d={x:0,y:0}:(e>s||t>u)&&(d=q(q({},Y1("x",r,e,s)),Y1("y",i,t,u))),d}var Zo=1,b7=1;function S7(e,t,r,i,o,s,u){var d=o.rotate,m=o.scale,h=o.x,p=o.y,y=f.useState(!1),b=oe(y,2),w=b[0],C=b[1],x=f.useRef({diffX:0,diffY:0,transformX:0,transformY:0}),S=function(O){!t||O.button!==0||(O.preventDefault(),O.stopPropagation(),x.current={diffX:O.pageX-h,diffY:O.pageY-p,transformX:h,transformY:p},C(!0))},$=function(O){r&&w&&s({x:O.pageX-x.current.diffX,y:O.pageY-x.current.diffY},"move")},R=function(){if(r&&w){C(!1);var O=x.current,A=O.transformX,P=O.transformY,B=h!==A&&p!==P;if(!B)return;var N=e.current.offsetWidth*m,H=e.current.offsetHeight*m,j=e.current.getBoundingClientRect(),W=j.left,V=j.top,U=d%180!==0,Z=ow(U?H:N,U?N:H,W,V);Z&&s(q({},Z),"dragRebound")}},T=function(O){if(!(!r||O.deltaY==0)){var A=Math.abs(O.deltaY/100),P=Math.min(A,b7),B=Zo+P*i;O.deltaY>0&&(B=Zo/B),u(B,"wheel",O.clientX,O.clientY)}};return f.useEffect(function(){var z,O,A,P;if(t){A=Xo(window,"mouseup",R,!1),P=Xo(window,"mousemove",$,!1);try{window.top!==window.self&&(z=Xo(window.top,"mouseup",R,!1),O=Xo(window.top,"mousemove",$,!1))}catch{}}return function(){var B,N,H,j;(B=A)===null||B===void 0||B.remove(),(N=P)===null||N===void 0||N.remove(),(H=z)===null||H===void 0||H.remove(),(j=O)===null||j===void 0||j.remove()}},[r,w,h,p,d,t]),{isMoving:w,onMouseDown:S,onMouseMove:$,onMouseUp:R,onWheel:T}}function C7(e){return new Promise(function(t){if(!e){t(!1);return}var r=document.createElement("img");r.onerror=function(){return t(!1)},r.onload=function(){return t(!0)},r.src=e})}function lw(e){var t=e.src,r=e.isCustomPlaceholder,i=e.fallback,o=f.useState(r?"loading":"normal"),s=oe(o,2),u=s[0],d=s[1],m=f.useRef(!1),h=u==="error";f.useEffect(function(){var w=!0;return C7(t).then(function(C){!C&&w&&d("error")}),function(){w=!1}},[t]),f.useEffect(function(){r&&!m.current?d("loading"):h&&d("normal")},[t]);var p=function(){d("normal")},y=function(C){m.current=!1,u==="loading"&&C!==null&&C!==void 0&&C.complete&&(C.naturalWidth||C.naturalHeight)&&(m.current=!0,p())},b=h&&i?{src:i}:{onLoad:p,src:t};return[y,b,u]}function td(e,t){var r=e.x-t.x,i=e.y-t.y;return Math.hypot(r,i)}function w7(e,t,r,i){var o=td(e,r),s=td(t,i);if(o===0&&s===0)return[e.x,e.y];var u=o/(o+s),d=e.x+u*(t.x-e.x),m=e.y+u*(t.y-e.y);return[d,m]}function x7(e,t,r,i,o,s,u){var d=o.rotate,m=o.scale,h=o.x,p=o.y,y=f.useState(!1),b=oe(y,2),w=b[0],C=b[1],x=f.useRef({point1:{x:0,y:0},point2:{x:0,y:0},eventType:"none"}),S=function(O){x.current=q(q({},x.current),O)},$=function(O){if(t){O.stopPropagation(),C(!0);var A=O.touches,P=A===void 0?[]:A;P.length>1?S({point1:{x:P[0].clientX,y:P[0].clientY},point2:{x:P[1].clientX,y:P[1].clientY},eventType:"touchZoom"}):S({point1:{x:P[0].clientX-h,y:P[0].clientY-p},eventType:"move"})}},R=function(O){var A=O.touches,P=A===void 0?[]:A,B=x.current,N=B.point1,H=B.point2,j=B.eventType;if(P.length>1&&j==="touchZoom"){var W={x:P[0].clientX,y:P[0].clientY},V={x:P[1].clientX,y:P[1].clientY},U=w7(N,H,W,V),Z=oe(U,2),_=Z[0],L=Z[1],F=td(W,V)/td(N,H);u(F,"touchZoom",_,L,!0),S({point1:W,point2:V,eventType:"touchZoom"})}else j==="move"&&(s({x:P[0].clientX-N.x,y:P[0].clientY-N.y},"move"),S({eventType:"move"}))},T=function(){if(r){if(w&&C(!1),S({eventType:"none"}),i>m)return s({x:0,y:0,scale:i},"touchZoom");var O=e.current.offsetWidth*m,A=e.current.offsetHeight*m,P=e.current.getBoundingClientRect(),B=P.left,N=P.top,H=d%180!==0,j=ow(H?A:O,H?O:A,B,N);j&&s(q({},j),"dragRebound")}};return f.useEffect(function(){var z;return r&&t&&(z=Xo(window,"touchmove",function(O){return O.preventDefault()},{passive:!1})),function(){var O;(O=z)===null||O===void 0||O.remove()}},[r,t]),{isTouching:w,onTouchStart:$,onTouchMove:R,onTouchEnd:T}}var E7=["fallback","src","imgRef"],$7=["prefixCls","src","alt","imageInfo","fallback","movable","onClose","visible","icons","rootClassName","closeIcon","getContainer","current","count","countRender","scaleStep","minScale","maxScale","transitionName","maskTransitionName","imageRender","imgCommonProps","toolbarRender","onTransform","onChange"],R7=function(t){var r=t.fallback,i=t.src,o=t.imgRef,s=rt(t,E7),u=lw({src:i,fallback:r}),d=oe(u,2),m=d[0],h=d[1];return he.createElement("img",Me({ref:function(y){o.current=y,m(y)}},s,h))},sw=function(t){var r=t.prefixCls,i=t.src,o=t.alt,s=t.imageInfo,u=t.fallback,d=t.movable,m=d===void 0?!0:d,h=t.onClose,p=t.visible,y=t.icons,b=y===void 0?{}:y,w=t.rootClassName,C=t.closeIcon,x=t.getContainer,S=t.current,$=S===void 0?0:S,R=t.count,T=R===void 0?1:R,z=t.countRender,O=t.scaleStep,A=O===void 0?.5:O,P=t.minScale,B=P===void 0?1:P,N=t.maxScale,H=N===void 0?50:N,j=t.transitionName,W=j===void 0?"zoom":j,V=t.maskTransitionName,U=V===void 0?"fade":V,Z=t.imageRender,_=t.imgCommonProps,L=t.toolbarRender,F=t.onTransform,Y=t.onChange,M=rt(t,$7),k=f.useRef(),K=f.useContext(uc),X=K&&T>1,I=K&&T>=1,te=f.useState(!0),ne=oe(te,2),fe=ne[0],ae=ne[1],ce=y7(k,B,H,F),de=ce.transform,xe=ce.resetTransform,Se=ce.updateTransform,Oe=ce.dispatchZoomChange,Ce=S7(k,m,p,A,de,Se,Oe),we=Ce.isMoving,be=Ce.onMouseDown,De=Ce.onWheel,Te=x7(k,m,p,B,de,Se,Oe),Be=Te.isTouching,Ne=Te.onTouchStart,$e=Te.onTouchMove,Fe=Te.onTouchEnd,ye=de.rotate,Re=de.scale,Ue=ue(J({},"".concat(r,"-moving"),we));f.useEffect(function(){fe||ae(!0)},[fe]);var Ie=function(){xe("close")},at=function(){Oe(Zo+A,"zoomIn")},qe=function(){Oe(Zo/(Zo+A),"zoomOut")},Ke=function(){Se({rotate:ye+90},"rotateRight")},Xe=function(){Se({rotate:ye-90},"rotateLeft")},et=function(){Se({flipX:!de.flipX},"flipX")},it=function(){Se({flipY:!de.flipY},"flipY")},je=function(){xe("reset")},Ee=function(nn){var qt=$+nn;!Number.isInteger(qt)||qt<0||qt>T-1||(ae(!1),xe(nn<0?"prev":"next"),Y==null||Y(qt,$))},Ye=function(nn){!p||!X||(nn.keyCode===rn.LEFT?Ee(-1):nn.keyCode===rn.RIGHT&&Ee(1))},Je=function(nn){p&&(Re!==1?Se({x:0,y:0,scale:1},"doubleClick"):Oe(Zo+A,"doubleClick",nn.clientX,nn.clientY))};f.useEffect(function(){var kt=Xo(window,"keydown",Ye,!1);return function(){kt.remove()}},[p,X,$]);var nt=he.createElement(R7,Me({},_,{width:t.width,height:t.height,imgRef:k,className:"".concat(r,"-img"),alt:o,style:{transform:"translate3d(".concat(de.x,"px, ").concat(de.y,"px, 0) scale3d(").concat(de.flipX?"-":"").concat(Re,", ").concat(de.flipY?"-":"").concat(Re,", 1) rotate(").concat(ye,"deg)"),transitionDuration:(!fe||Be)&&"0s"},fallback:u,src:i,onWheel:De,onMouseDown:be,onDoubleClick:Je,onTouchStart:Ne,onTouchMove:$e,onTouchEnd:Fe,onTouchCancel:Fe})),tn=q({url:i,alt:o},s);return he.createElement(he.Fragment,null,he.createElement(e2,Me({transitionName:W,maskTransitionName:U,closable:!1,keyboard:!0,prefixCls:r,onClose:h,visible:p,classNames:{wrapper:Ue},rootClassName:w,getContainer:x},M,{afterClose:Ie}),he.createElement("div",{className:"".concat(r,"-img-wrapper")},Z?Z(nt,q({transform:de,image:tn},K?{current:$}:{})):nt)),he.createElement(p7,{visible:p,transform:de,maskTransitionName:U,closeIcon:C,getContainer:x,prefixCls:r,rootClassName:w,icons:b,countRender:z,showSwitch:X,showProgress:I,current:$,count:T,scale:Re,minScale:B,maxScale:H,toolbarRender:L,onActive:Ee,onZoomIn:at,onZoomOut:qe,onRotateRight:Ke,onRotateLeft:Xe,onFlipX:et,onFlipY:it,onClose:h,onReset:je,zIndex:M.zIndex!==void 0?M.zIndex+1:void 0,image:tn}))},xh=["crossOrigin","decoding","draggable","loading","referrerPolicy","sizes","srcSet","useMap","alt"];function T7(e){var t=f.useState({}),r=oe(t,2),i=r[0],o=r[1],s=f.useCallback(function(d,m){return o(function(h){return q(q({},h),{},J({},d,m))}),function(){o(function(h){var p=q({},h);return delete p[d],p})}},[]),u=f.useMemo(function(){return e?e.map(function(d){if(typeof d=="string")return{data:{src:d}};var m={};return Object.keys(d).forEach(function(h){["src"].concat(Le(xh)).includes(h)&&(m[h]=d[h])}),{data:m}}):Object.keys(i).reduce(function(d,m){var h=i[m],p=h.canPreview,y=h.data;return p&&d.push({data:y,id:m}),d},[])},[e,i]);return[u,s,!!e]}var O7=["visible","onVisibleChange","getContainer","current","movable","minScale","maxScale","countRender","closeIcon","onChange","onTransform","toolbarRender","imageRender"],M7=["src"],A7=function(t){var r,i=t.previewPrefixCls,o=i===void 0?"rc-image-preview":i,s=t.children,u=t.icons,d=u===void 0?{}:u,m=t.items,h=t.preview,p=t.fallback,y=Ge(h)==="object"?h:{},b=y.visible,w=y.onVisibleChange,C=y.getContainer,x=y.current,S=y.movable,$=y.minScale,R=y.maxScale,T=y.countRender,z=y.closeIcon,O=y.onChange,A=y.onTransform,P=y.toolbarRender,B=y.imageRender,N=rt(y,O7),H=T7(m),j=oe(H,3),W=j[0],V=j[1],U=j[2],Z=Or(0,{value:x}),_=oe(Z,2),L=_[0],F=_[1],Y=f.useState(!1),M=oe(Y,2),k=M[0],K=M[1],X=((r=W[L])===null||r===void 0?void 0:r.data)||{},I=X.src,te=rt(X,M7),ne=Or(!!b,{value:b,onChange:function(Be,Ne){w==null||w(Be,Ne,L)}}),fe=oe(ne,2),ae=fe[0],ce=fe[1],de=f.useState(null),xe=oe(de,2),Se=xe[0],Oe=xe[1],Ce=f.useCallback(function(Te,Be,Ne,$e){var Fe=U?W.findIndex(function(ye){return ye.data.src===Be}):W.findIndex(function(ye){return ye.id===Te});F(Fe<0?0:Fe),ce(!0),Oe({x:Ne,y:$e}),K(!0)},[W,U]);f.useEffect(function(){ae?k||F(0):K(!1)},[ae]);var we=function(Be,Ne){F(Be),O==null||O(Be,Ne)},be=function(){ce(!1),Oe(null)},De=f.useMemo(function(){return{register:V,onPreview:Ce}},[V,Ce]);return f.createElement(uc.Provider,{value:De},s,f.createElement(sw,Me({"aria-hidden":!ae,movable:S,visible:ae,prefixCls:o,closeIcon:z,onClose:be,mousePosition:Se,imgCommonProps:te,src:I,fallback:p,icons:d,minScale:$,maxScale:R,getContainer:C,current:L,count:W.length,countRender:T,onTransform:A,toolbarRender:P,imageRender:B,onChange:we},N)))},X1=0;function N7(e,t){var r=f.useState(function(){return X1+=1,String(X1)}),i=oe(r,1),o=i[0],s=f.useContext(uc),u={data:t,canPreview:e};return f.useEffect(function(){if(s)return s.register(o,u)},[]),f.useEffect(function(){s&&s.register(o,u)},[e,t]),o}var P7=["src","alt","onPreviewClose","prefixCls","previewPrefixCls","placeholder","fallback","width","height","style","preview","className","onClick","onError","wrapperClassName","wrapperStyle","rootClassName"],_7=["src","visible","onVisibleChange","getContainer","mask","maskClassName","movable","icons","scaleStep","minScale","maxScale","imageRender","toolbarRender"],yv=function(t){var r=t.src,i=t.alt,o=t.onPreviewClose,s=t.prefixCls,u=s===void 0?"rc-image":s,d=t.previewPrefixCls,m=d===void 0?"".concat(u,"-preview"):d,h=t.placeholder,p=t.fallback,y=t.width,b=t.height,w=t.style,C=t.preview,x=C===void 0?!0:C,S=t.className,$=t.onClick,R=t.onError,T=t.wrapperClassName,z=t.wrapperStyle,O=t.rootClassName,A=rt(t,P7),P=h&&h!==!0,B=Ge(x)==="object"?x:{},N=B.src,H=B.visible,j=H===void 0?void 0:H,W=B.onVisibleChange,V=W===void 0?o:W,U=B.getContainer,Z=U===void 0?void 0:U,_=B.mask,L=B.maskClassName,F=B.movable,Y=B.icons,M=B.scaleStep,k=B.minScale,K=B.maxScale,X=B.imageRender,I=B.toolbarRender,te=rt(B,_7),ne=N??r,fe=Or(!!j,{value:j,onChange:V}),ae=oe(fe,2),ce=ae[0],de=ae[1],xe=lw({src:r,isCustomPlaceholder:P,fallback:p}),Se=oe(xe,3),Oe=Se[0],Ce=Se[1],we=Se[2],be=f.useState(null),De=oe(be,2),Te=De[0],Be=De[1],Ne=f.useContext(uc),$e=!!x,Fe=function(){de(!1),Be(null)},ye=ue(u,T,O,J({},"".concat(u,"-error"),we==="error")),Re=f.useMemo(function(){var qe={};return xh.forEach(function(Ke){t[Ke]!==void 0&&(qe[Ke]=t[Ke])}),qe},xh.map(function(qe){return t[qe]})),Ue=f.useMemo(function(){return q(q({},Re),{},{src:ne})},[ne,Re]),Ie=N7($e,Ue),at=function(Ke){var Xe=v7(Ke.target),et=Xe.left,it=Xe.top;Ne?Ne.onPreview(Ie,ne,et,it):(Be({x:et,y:it}),de(!0)),$==null||$(Ke)};return f.createElement(f.Fragment,null,f.createElement("div",Me({},A,{className:ye,onClick:$e?at:$,style:q({width:y,height:b},z)}),f.createElement("img",Me({},Re,{className:ue("".concat(u,"-img"),J({},"".concat(u,"-img-placeholder"),h===!0),S),style:q({height:b},w),ref:Oe},Ce,{width:y,height:b,onError:R})),we==="loading"&&f.createElement("div",{"aria-hidden":"true",className:"".concat(u,"-placeholder")},h),_&&$e&&f.createElement("div",{className:ue("".concat(u,"-mask"),L),style:{display:(w==null?void 0:w.display)==="none"?"none":void 0}},_)),!Ne&&$e&&f.createElement(sw,Me({"aria-hidden":!ce,visible:ce,prefixCls:m,onClose:Fe,mousePosition:Te,src:ne,alt:i,imageInfo:{width:y,height:b},fallback:p,getContainer:Z,icons:Y,movable:F,scaleStep:M,minScale:k,maxScale:K,rootClassName:O,imageRender:X,imgCommonProps:Re,toolbarRender:I},te)))};yv.PreviewGroup=A7;var D7={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M672 418H144c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32zm-44 402H188V494h440v326z"}},{tag:"path",attrs:{d:"M819.3 328.5c-78.8-100.7-196-153.6-314.6-154.2l-.2-64c0-6.5-7.6-10.1-12.6-6.1l-128 101c-4 3.1-3.9 9.1 0 12.3L492 318.6c5.1 4 12.7.4 12.6-6.1v-63.9c12.9.1 25.9.9 38.8 2.5 42.1 5.2 82.1 18.2 119 38.7 38.1 21.2 71.2 49.7 98.4 84.3 27.1 34.7 46.7 73.7 58.1 115.8a325.95 325.95 0 016.5 140.9h74.9c14.8-103.6-11.3-213-81-302.3z"}}]},name:"rotate-left",theme:"outlined"},z7=function(t,r){return f.createElement(Hn,Me({},t,{ref:r,icon:D7}))},L7=f.forwardRef(z7),H7={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M480.5 251.2c13-1.6 25.9-2.4 38.8-2.5v63.9c0 6.5 7.5 10.1 12.6 6.1L660 217.6c4-3.2 4-9.2 0-12.3l-128-101c-5.1-4-12.6-.4-12.6 6.1l-.2 64c-118.6.5-235.8 53.4-314.6 154.2A399.75 399.75 0 00123.5 631h74.9c-.9-5.3-1.7-10.7-2.4-16.1-5.1-42.1-2.1-84.1 8.9-124.8 11.4-42.2 31-81.1 58.1-115.8 27.2-34.7 60.3-63.2 98.4-84.3 37-20.6 76.9-33.6 119.1-38.8z"}},{tag:"path",attrs:{d:"M880 418H352c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32zm-44 402H396V494h440v326z"}}]},name:"rotate-right",theme:"outlined"},B7=function(t,r){return f.createElement(Hn,Me({},t,{ref:r,icon:H7}))},I7=f.forwardRef(B7),j7={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M847.9 592H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h605.2L612.9 851c-4.1 5.2-.4 13 6.3 13h72.5c4.9 0 9.5-2.2 12.6-6.1l168.8-214.1c16.5-21 1.6-51.8-25.2-51.8zM872 356H266.8l144.3-183c4.1-5.2.4-13-6.3-13h-72.5c-4.9 0-9.5 2.2-12.6 6.1L150.9 380.2c-16.5 21-1.6 51.8 25.1 51.8h696c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"swap",theme:"outlined"},k7=function(t,r){return f.createElement(Hn,Me({},t,{ref:r,icon:j7}))},Z1=f.forwardRef(k7),F7={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M637 443H519V309c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v134H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h118v134c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V519h118c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm284 424L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z"}}]},name:"zoom-in",theme:"outlined"},V7=function(t,r){return f.createElement(Hn,Me({},t,{ref:r,icon:F7}))},G7=f.forwardRef(V7),U7={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M637 443H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h312c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm284 424L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z"}}]},name:"zoom-out",theme:"outlined"},W7=function(t,r){return f.createElement(Hn,Me({},t,{ref:r,icon:U7}))},q7=f.forwardRef(W7);const Eh=e=>({position:e||"absolute",inset:0}),J7=e=>{const{iconCls:t,motionDurationSlow:r,paddingXXS:i,marginXXS:o,prefixCls:s,colorTextLightSolid:u}=e;return{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",color:u,background:new Bt("#000").setA(.5).toRgbString(),cursor:"pointer",opacity:0,transition:`opacity ${r}`,[`.${s}-mask-info`]:Object.assign(Object.assign({},nc),{padding:`0 ${le(i)}`,[t]:{marginInlineEnd:o,svg:{verticalAlign:"baseline"}}})}},K7=e=>{const{previewCls:t,modalMaskBg:r,paddingSM:i,marginXL:o,margin:s,paddingLG:u,previewOperationColorDisabled:d,previewOperationHoverColor:m,motionDurationSlow:h,iconCls:p,colorTextLightSolid:y}=e,b=new Bt(r).setA(.1),w=b.clone().setA(.2);return{[`${t}-footer`]:{position:"fixed",bottom:o,left:{_skip_check_:!0,value:"50%"},display:"flex",flexDirection:"column",alignItems:"center",color:e.previewOperationColor,transform:"translateX(-50%)"},[`${t}-progress`]:{marginBottom:s},[`${t}-close`]:{position:"fixed",top:o,right:{_skip_check_:!0,value:o},display:"flex",color:y,backgroundColor:b.toRgbString(),borderRadius:"50%",padding:i,outline:0,border:0,cursor:"pointer",transition:`all ${h}`,"&:hover":{backgroundColor:w.toRgbString()},[`& > ${p}`]:{fontSize:e.previewOperationSize}},[`${t}-operations`]:{display:"flex",alignItems:"center",padding:`0 ${le(u)}`,backgroundColor:b.toRgbString(),borderRadius:100,"&-operation":{marginInlineStart:i,padding:i,cursor:"pointer",transition:`all ${h}`,userSelect:"none",[`&:not(${t}-operations-operation-disabled):hover > ${p}`]:{color:m},"&-disabled":{color:d,cursor:"not-allowed"},"&:first-of-type":{marginInlineStart:0},[`& > ${p}`]:{fontSize:e.previewOperationSize}}}}},Y7=e=>{const{modalMaskBg:t,iconCls:r,previewOperationColorDisabled:i,previewCls:o,zIndexPopup:s,motionDurationSlow:u}=e,d=new Bt(t).setA(.1),m=d.clone().setA(.2);return{[`${o}-switch-left, ${o}-switch-right`]:{position:"fixed",insetBlockStart:"50%",zIndex:e.calc(s).add(1).equal(),display:"flex",alignItems:"center",justifyContent:"center",width:e.imagePreviewSwitchSize,height:e.imagePreviewSwitchSize,marginTop:e.calc(e.imagePreviewSwitchSize).mul(-1).div(2).equal(),color:e.previewOperationColor,background:d.toRgbString(),borderRadius:"50%",transform:"translateY(-50%)",cursor:"pointer",transition:`all ${u}`,userSelect:"none","&:hover":{background:m.toRgbString()},"&-disabled":{"&, &:hover":{color:i,background:"transparent",cursor:"not-allowed",[`> ${r}`]:{cursor:"not-allowed"}}},[`> ${r}`]:{fontSize:e.previewOperationSize}},[`${o}-switch-left`]:{insetInlineStart:e.marginSM},[`${o}-switch-right`]:{insetInlineEnd:e.marginSM}}},X7=e=>{const{motionEaseOut:t,previewCls:r,motionDurationSlow:i,componentCls:o}=e;return[{[`${o}-preview-root`]:{[r]:{height:"100%",textAlign:"center",pointerEvents:"none"},[`${r}-body`]:Object.assign(Object.assign({},Eh()),{overflow:"hidden"}),[`${r}-img`]:{maxWidth:"100%",maxHeight:"70%",verticalAlign:"middle",transform:"scale3d(1, 1, 1)",cursor:"grab",transition:`transform ${i} ${t} 0s`,userSelect:"none","&-wrapper":Object.assign(Object.assign({},Eh()),{transition:`transform ${i} ${t} 0s`,display:"flex",justifyContent:"center",alignItems:"center","& > *":{pointerEvents:"auto"},"&::before":{display:"inline-block",width:1,height:"50%",marginInlineEnd:-1,content:'""'}})},[`${r}-moving`]:{[`${r}-preview-img`]:{cursor:"grabbing","&-wrapper":{transitionDuration:"0s"}}}}},{[`${o}-preview-root`]:{[`${r}-wrap`]:{zIndex:e.zIndexPopup}}},{[`${o}-preview-operations-wrapper`]:{position:"fixed",zIndex:e.calc(e.zIndexPopup).add(1).equal()},"&":[K7(e),Y7(e)]}]},Z7=e=>{const{componentCls:t}=e;return{[t]:{position:"relative",display:"inline-block",[`${t}-img`]:{width:"100%",height:"auto",verticalAlign:"middle"},[`${t}-img-placeholder`]:{backgroundColor:e.colorBgContainerDisabled,backgroundImage:"url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTQuNSAyLjVoLTEzQS41LjUgMCAwIDAgMSAzdjEwYS41LjUgMCAwIDAgLjUuNWgxM2EuNS41IDAgMCAwIC41LS41VjNhLjUuNSAwIDAgMC0uNS0uNXpNNS4yODEgNC43NWExIDEgMCAwIDEgMCAyIDEgMSAwIDAgMSAwLTJ6bTguMDMgNi44M2EuMTI3LjEyNyAwIDAgMS0uMDgxLjAzSDIuNzY5YS4xMjUuMTI1IDAgMCAxLS4wOTYtLjIwN2wyLjY2MS0zLjE1NmEuMTI2LjEyNiAwIDAgMSAuMTc3LS4wMTZsLjAxNi4wMTZMNy4wOCAxMC4wOWwyLjQ3LTIuOTNhLjEyNi4xMjYgMCAwIDEgLjE3Ny0uMDE2bC4wMTUuMDE2IDMuNTg4IDQuMjQ0YS4xMjcuMTI3IDAgMCAxLS4wMi4xNzV6IiBmaWxsPSIjOEM4QzhDIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4=')",backgroundRepeat:"no-repeat",backgroundPosition:"center center",backgroundSize:"30%"},[`${t}-mask`]:Object.assign({},J7(e)),[`${t}-mask:hover`]:{opacity:1},[`${t}-placeholder`]:Object.assign({},Eh())}}},Q7=e=>{const{previewCls:t}=e;return{[`${t}-root`]:gd(e,"zoom"),"&":WC(e,!0)}},eN=e=>({zIndexPopup:e.zIndexPopupBase+80,previewOperationColor:new Bt(e.colorTextLightSolid).setA(.65).toRgbString(),previewOperationHoverColor:new Bt(e.colorTextLightSolid).setA(.85).toRgbString(),previewOperationColorDisabled:new Bt(e.colorTextLightSolid).setA(.25).toRgbString(),previewOperationSize:e.fontSizeIcon*1.5}),cw=rr("Image",e=>{const t=`${e.componentCls}-preview`,r=sn(e,{previewCls:t,modalMaskBg:new Bt("#000").setA(.45).toRgbString(),imagePreviewSwitchSize:e.controlHeightLG});return[Z7(r),X7(r),s2(sn(r,{componentCls:t})),Q7(r)]},eN);var tN=function(e,t){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(r[i]=e[i]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(r[i[o]]=e[i[o]]);return r};const uw={rotateLeft:f.createElement(L7,null),rotateRight:f.createElement(I7,null),zoomIn:f.createElement(G7,null),zoomOut:f.createElement(q7,null),close:f.createElement(IC,null),left:f.createElement(vh,null),right:f.createElement(th,null),flipX:f.createElement(Z1,null),flipY:f.createElement(Z1,{rotate:90})},nN=e=>{var{previewPrefixCls:t,preview:r}=e,i=tN(e,["previewPrefixCls","preview"]);const{getPrefixCls:o}=f.useContext(At),s=o("image",t),u=`${s}-preview`,d=o(),m=pl(s),[h,p,y]=cw(s,m),[b]=dd("ImagePreview",typeof r=="object"?r.zIndex:void 0),w=f.useMemo(()=>{var C;if(r===!1)return r;const x=typeof r=="object"?r:{},S=ue(p,y,m,(C=x.rootClassName)!==null&&C!==void 0?C:"");return Object.assign(Object.assign({},x),{transitionName:ul(d,"zoom",x.transitionName),maskTransitionName:ul(d,"fade",x.maskTransitionName),rootClassName:S,zIndex:b})},[r]);return h(f.createElement(yv.PreviewGroup,Object.assign({preview:w,previewPrefixCls:u,icons:uw},i)))};var Q1=function(e,t){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(r[i]=e[i]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(r[i[o]]=e[i[o]]);return r};const dw=e=>{const{prefixCls:t,preview:r,className:i,rootClassName:o,style:s}=e,u=Q1(e,["prefixCls","preview","className","rootClassName","style"]),{getPrefixCls:d,getPopupContainer:m,className:h,style:p,preview:y}=io("image"),[b]=s8("Image"),w=d("image",t),C=d(),x=pl(w),[S,$,R]=cw(w,x),T=ue(o,$,R,x),z=ue(i,$,h),[O]=dd("ImagePreview",typeof r=="object"?r.zIndex:void 0),A=f.useMemo(()=>{if(r===!1)return r;const B=typeof r=="object"?r:{},{getContainer:N,closeIcon:H,rootClassName:j}=B,W=Q1(B,["getContainer","closeIcon","rootClassName"]);return Object.assign(Object.assign({mask:f.createElement("div",{className:`${w}-mask-info`},f.createElement(aw,null),b==null?void 0:b.preview),icons:uw},W),{rootClassName:ue(T,j),getContainer:N??m,transitionName:ul(C,"zoom",B.transitionName),maskTransitionName:ul(C,"fade",B.maskTransitionName),zIndex:O,closeIcon:H??(y==null?void 0:y.closeIcon)})},[r,b,y==null?void 0:y.closeIcon]),P=Object.assign(Object.assign({},p),s);return S(f.createElement(yv,Object.assign({prefixCls:w,preview:A,rootClassName:T,className:z,style:P},u)))};dw.PreviewGroup=nN;const rN=e=>{const{getPrefixCls:t,direction:r}=f.useContext(At),{prefixCls:i,className:o}=e,s=t("input-group",i),u=t("input"),[d,m,h]=W2(u),p=ue(s,h,{[`${s}-lg`]:e.size==="large",[`${s}-sm`]:e.size==="small",[`${s}-compact`]:e.compact,[`${s}-rtl`]:r==="rtl"},m,o),y=f.useContext(xi),b=f.useMemo(()=>Object.assign(Object.assign({},y),{isFormItemInput:!1}),[y]);return d(f.createElement("span",{className:p,style:e.style,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,onFocus:e.onFocus,onBlur:e.onBlur},f.createElement(xi.Provider,{value:b},e.children)))},aN=e=>{const{componentCls:t,paddingXS:r}=e;return{[t]:{display:"inline-flex",alignItems:"center",flexWrap:"nowrap",columnGap:r,"&-rtl":{direction:"rtl"},[`${t}-input`]:{textAlign:"center",paddingInline:e.paddingXXS},[`&${t}-sm ${t}-input`]:{paddingInline:e.calc(e.paddingXXS).div(2).equal()},[`&${t}-lg ${t}-input`]:{paddingInline:e.paddingXS}}}},iN=rr(["Input","OTP"],e=>{const t=sn(e,Td(e));return[aN(t)]},Od);var oN=function(e,t){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(r[i]=e[i]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(r[i[o]]=e[i[o]]);return r};const lN=f.forwardRef((e,t)=>{const{value:r,onChange:i,onActiveChange:o,index:s,mask:u}=e,d=oN(e,["value","onChange","onActiveChange","index","mask"]),m=r&&typeof u=="string"?u:r,h=C=>{i(s,C.target.value)},p=f.useRef(null);f.useImperativeHandle(t,()=>p.current);const y=()=>{Cn(()=>{var C;const x=(C=p.current)===null||C===void 0?void 0:C.input;document.activeElement===x&&x&&x.select()})},b=C=>{const{key:x,ctrlKey:S,metaKey:$}=C;x==="ArrowLeft"?o(s-1):x==="ArrowRight"?o(s+1):x==="z"&&(S||$)&&C.preventDefault(),y()},w=C=>{C.key==="Backspace"&&!r&&o(s-1),y()};return f.createElement(Ad,Object.assign({type:u===!0?"password":"text"},d,{ref:p,value:m,onInput:h,onFocus:y,onKeyDown:b,onKeyUp:w,onMouseDown:y,onMouseUp:y}))});var sN=function(e,t){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(r[i]=e[i]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(r[i[o]]=e[i[o]]);return r};function Eu(e){return(e||"").split("")}const cN=e=>{const{index:t,prefixCls:r,separator:i}=e,o=typeof i=="function"?i(t):i;return o?f.createElement("span",{className:`${r}-separator`},o):null},uN=f.forwardRef((e,t)=>{const{prefixCls:r,length:i=6,size:o,defaultValue:s,value:u,onChange:d,formatter:m,separator:h,variant:p,disabled:y,status:b,autoFocus:w,mask:C,type:x,onInput:S,inputMode:$}=e,R=sN(e,["prefixCls","length","size","defaultValue","value","onChange","formatter","separator","variant","disabled","status","autoFocus","mask","type","onInput","inputMode"]),{getPrefixCls:T,direction:z}=f.useContext(At),O=T("otp",r),A=Qh(R,{aria:!0,data:!0,attr:!0}),[P,B,N]=iN(O),H=lo(I=>o??I),j=f.useContext(xi),W=ov(j.status,b),V=f.useMemo(()=>Object.assign(Object.assign({},j),{status:W,hasFeedback:!1,feedbackIcon:null}),[j,W]),U=f.useRef(null),Z=f.useRef({});f.useImperativeHandle(t,()=>({focus:()=>{var I;(I=Z.current[0])===null||I===void 0||I.focus()},blur:()=>{var I;for(let te=0;te<i;te+=1)(I=Z.current[te])===null||I===void 0||I.blur()},nativeElement:U.current}));const _=I=>m?m(I):I,[L,F]=f.useState(()=>Eu(_(s||"")));f.useEffect(()=>{u!==void 0&&F(Eu(u))},[u]);const Y=Gn(I=>{F(I),S&&S(I),d&&I.length===i&&I.every(te=>te)&&I.some((te,ne)=>L[ne]!==te)&&d(I.join(""))}),M=Gn((I,te)=>{let ne=Le(L);for(let ae=0;ae<I;ae+=1)ne[ae]||(ne[ae]="");te.length<=1?ne[I]=te:ne=ne.slice(0,I).concat(Eu(te)),ne=ne.slice(0,i);for(let ae=ne.length-1;ae>=0&&!ne[ae];ae-=1)ne.pop();const fe=_(ne.map(ae=>ae||" ").join(""));return ne=Eu(fe).map((ae,ce)=>ae===" "&&!ne[ce]?ne[ce]:ae),ne}),k=(I,te)=>{var ne;const fe=M(I,te),ae=Math.min(I+te.length,i-1);ae!==I&&fe[I]!==void 0&&((ne=Z.current[ae])===null||ne===void 0||ne.focus()),Y(fe)},K=I=>{var te;(te=Z.current[I])===null||te===void 0||te.focus()},X={variant:p,disabled:y,status:W,mask:C,type:x,inputMode:$};return P(f.createElement("div",Object.assign({},A,{ref:U,className:ue(O,{[`${O}-sm`]:H==="small",[`${O}-lg`]:H==="large",[`${O}-rtl`]:z==="rtl"},N,B)}),f.createElement(xi.Provider,{value:V},Array.from({length:i}).map((I,te)=>{const ne=`otp-${te}`,fe=L[te]||"";return f.createElement(f.Fragment,{key:ne},f.createElement(lN,Object.assign({ref:ae=>{Z.current[te]=ae},index:te,size:H,htmlSize:1,className:`${O}-input`,onChange:k,value:fe,onActiveChange:K,autoFocus:te===0&&w},X)),te<i-1&&f.createElement(cN,{separator:h,index:te,prefixCls:O}))}))))});var dN={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"}},{tag:"path",attrs:{d:"M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"}}]},name:"eye-invisible",theme:"outlined"},fN=function(t,r){return f.createElement(Hn,Me({},t,{ref:r,icon:dN}))},mN=f.forwardRef(fN),gN=function(e,t){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(r[i]=e[i]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(r[i[o]]=e[i[o]]);return r};const hN=e=>e?f.createElement(aw,null):f.createElement(mN,null),vN={click:"onClick",hover:"onMouseOver"},pN=f.forwardRef((e,t)=>{const{disabled:r,action:i="click",visibilityToggle:o=!0,iconRender:s=hN}=e,u=f.useContext(Zi),d=r??u,m=typeof o=="object"&&o.visible!==void 0,[h,p]=f.useState(()=>m?o.visible:!1),y=f.useRef(null);f.useEffect(()=>{m&&p(o.visible)},[m,o]);const b=rw(y),w=()=>{var H;if(d)return;h&&b();const j=!h;p(j),typeof o=="object"&&((H=o.onVisibleChange)===null||H===void 0||H.call(o,j))},C=H=>{const j=vN[i]||"",W=s(h),V={[j]:w,className:`${H}-icon`,key:"passwordIcon",onMouseDown:U=>{U.preventDefault()},onMouseUp:U=>{U.preventDefault()}};return f.cloneElement(f.isValidElement(W)?W:f.createElement("span",null,W),V)},{className:x,prefixCls:S,inputPrefixCls:$,size:R}=e,T=gN(e,["className","prefixCls","inputPrefixCls","size"]),{getPrefixCls:z}=f.useContext(At),O=z("input",$),A=z("input-password",S),P=o&&C(A),B=ue(A,x,{[`${A}-${R}`]:!!R}),N=Object.assign(Object.assign({},dr(T,["suffix","iconRender","visibilityToggle"])),{type:h?"text":"password",className:B,prefixCls:O,suffix:P});return R&&(N.size=R),f.createElement(Ad,Object.assign({ref:Ua(t,y)},N))});var yN=function(e,t){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(r[i]=e[i]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(r[i[o]]=e[i[o]]);return r};const bN=f.forwardRef((e,t)=>{const{prefixCls:r,inputPrefixCls:i,className:o,size:s,suffix:u,enterButton:d=!1,addonAfter:m,loading:h,disabled:p,onSearch:y,onChange:b,onCompositionStart:w,onCompositionEnd:C}=e,x=yN(e,["prefixCls","inputPrefixCls","className","size","suffix","enterButton","addonAfter","loading","disabled","onSearch","onChange","onCompositionStart","onCompositionEnd"]),{getPrefixCls:S,direction:$}=f.useContext(At),R=f.useRef(!1),T=S("input-search",r),z=S("input",i),{compactSize:O}=md(T,$),A=lo(k=>{var K;return(K=s??O)!==null&&K!==void 0?K:k}),P=f.useRef(null),B=k=>{k!=null&&k.target&&k.type==="click"&&y&&y(k.target.value,k,{source:"clear"}),b==null||b(k)},N=k=>{var K;document.activeElement===((K=P.current)===null||K===void 0?void 0:K.input)&&k.preventDefault()},H=k=>{var K,X;y&&y((X=(K=P.current)===null||K===void 0?void 0:K.input)===null||X===void 0?void 0:X.value,k,{source:"input"})},j=k=>{R.current||h||H(k)},W=typeof d=="boolean"?f.createElement(o9,null):null,V=`${T}-button`;let U;const Z=d||{},_=Z.type&&Z.type.__ANT_BUTTON===!0;_||Z.type==="button"?U=wi(Z,Object.assign({onMouseDown:N,onClick:k=>{var K,X;(X=(K=Z==null?void 0:Z.props)===null||K===void 0?void 0:K.onClick)===null||X===void 0||X.call(K,k),H(k)},key:"enterButton"},_?{className:V,size:A}:{})):U=f.createElement(qs,{className:V,type:d?"primary":void 0,size:A,disabled:p,key:"enterButton",onMouseDown:N,onClick:H,loading:h,icon:W},d),m&&(U=[U,wi(m,{key:"addonAfter"})]);const L=ue(T,{[`${T}-rtl`]:$==="rtl",[`${T}-${A}`]:!!A,[`${T}-with-button`]:!!d},o),F=Object.assign(Object.assign({},x),{className:L,prefixCls:z,type:"search"}),Y=k=>{R.current=!0,w==null||w(k)},M=k=>{R.current=!1,C==null||C(k)};return f.createElement(Ad,Object.assign({ref:Ua(P,t),onPressEnter:j},F,{size:A,onCompositionStart:Y,onCompositionEnd:M,addonAfter:U,suffix:u,onChange:B,disabled:p}))});var SN=`
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
`,CN=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","font-variant","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing","word-break","white-space"],fg={},Rr;function wN(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r=e.getAttribute("id")||e.getAttribute("data-reactid")||e.getAttribute("name");if(t&&fg[r])return fg[r];var i=window.getComputedStyle(e),o=i.getPropertyValue("box-sizing")||i.getPropertyValue("-moz-box-sizing")||i.getPropertyValue("-webkit-box-sizing"),s=parseFloat(i.getPropertyValue("padding-bottom"))+parseFloat(i.getPropertyValue("padding-top")),u=parseFloat(i.getPropertyValue("border-bottom-width"))+parseFloat(i.getPropertyValue("border-top-width")),d=CN.map(function(h){return"".concat(h,":").concat(i.getPropertyValue(h))}).join(";"),m={sizingStyle:d,paddingSize:s,borderSize:u,boxSizing:o};return t&&r&&(fg[r]=m),m}function xN(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null;Rr||(Rr=document.createElement("textarea"),Rr.setAttribute("tab-index","-1"),Rr.setAttribute("aria-hidden","true"),Rr.setAttribute("name","hiddenTextarea"),document.body.appendChild(Rr)),e.getAttribute("wrap")?Rr.setAttribute("wrap",e.getAttribute("wrap")):Rr.removeAttribute("wrap");var o=wN(e,t),s=o.paddingSize,u=o.borderSize,d=o.boxSizing,m=o.sizingStyle;Rr.setAttribute("style","".concat(m,";").concat(SN)),Rr.value=e.value||e.placeholder||"";var h=void 0,p=void 0,y,b=Rr.scrollHeight;if(d==="border-box"?b+=u:d==="content-box"&&(b-=s),r!==null||i!==null){Rr.value=" ";var w=Rr.scrollHeight-s;r!==null&&(h=w*r,d==="border-box"&&(h=h+s+u),b=Math.max(h,b)),i!==null&&(p=w*i,d==="border-box"&&(p=p+s+u),y=b>p?"":"hidden",b=Math.min(p,b))}var C={height:b,overflowY:y,resize:"none"};return h&&(C.minHeight=h),p&&(C.maxHeight=p),C}var EN=["prefixCls","defaultValue","value","autoSize","onResize","className","style","disabled","onChange","onInternalAutoSize"],mg=0,gg=1,hg=2,$N=f.forwardRef(function(e,t){var r=e,i=r.prefixCls,o=r.defaultValue,s=r.value,u=r.autoSize,d=r.onResize,m=r.className,h=r.style,p=r.disabled,y=r.onChange;r.onInternalAutoSize;var b=rt(r,EN),w=Or(o,{value:s,postState:function(I){return I??""}}),C=oe(w,2),x=C[0],S=C[1],$=function(I){S(I.target.value),y==null||y(I)},R=f.useRef();f.useImperativeHandle(t,function(){return{textArea:R.current}});var T=f.useMemo(function(){return u&&Ge(u)==="object"?[u.minRows,u.maxRows]:[]},[u]),z=oe(T,2),O=z[0],A=z[1],P=!!u,B=function(){try{if(document.activeElement===R.current){var I=R.current,te=I.selectionStart,ne=I.selectionEnd,fe=I.scrollTop;R.current.setSelectionRange(te,ne),R.current.scrollTop=fe}}catch{}},N=f.useState(hg),H=oe(N,2),j=H[0],W=H[1],V=f.useState(),U=oe(V,2),Z=U[0],_=U[1],L=function(){W(mg)};_n(function(){P&&L()},[s,O,A,P]),_n(function(){if(j===mg)W(gg);else if(j===gg){var X=xN(R.current,!1,O,A);W(hg),_(X)}else B()},[j]);var F=f.useRef(),Y=function(){Cn.cancel(F.current)},M=function(I){j===hg&&(d==null||d(I),u&&(Y(),F.current=Cn(function(){L()})))};f.useEffect(function(){return Y},[]);var k=P?Z:null,K=q(q({},h),k);return(j===mg||j===gg)&&(K.overflowY="hidden",K.overflowX="hidden"),f.createElement(ja,{onResize:M,disabled:!(u||d)},f.createElement("textarea",Me({},b,{ref:R,style:K,className:ue(i,m,J({},"".concat(i,"-disabled"),p)),disabled:p,value:x,onChange:$})))}),RN=["defaultValue","value","onFocus","onBlur","onChange","allowClear","maxLength","onCompositionStart","onCompositionEnd","suffix","prefixCls","showCount","count","className","style","disabled","hidden","classNames","styles","onResize","onClear","onPressEnter","readOnly","autoSize","onKeyDown"],TN=he.forwardRef(function(e,t){var r,i=e.defaultValue,o=e.value,s=e.onFocus,u=e.onBlur,d=e.onChange,m=e.allowClear,h=e.maxLength,p=e.onCompositionStart,y=e.onCompositionEnd,b=e.suffix,w=e.prefixCls,C=w===void 0?"rc-textarea":w,x=e.showCount,S=e.count,$=e.className,R=e.style,T=e.disabled,z=e.hidden,O=e.classNames,A=e.styles,P=e.onResize,B=e.onClear,N=e.onPressEnter,H=e.readOnly,j=e.autoSize,W=e.onKeyDown,V=rt(e,RN),U=Or(i,{value:o,defaultValue:i}),Z=oe(U,2),_=Z[0],L=Z[1],F=_==null?"":String(_),Y=he.useState(!1),M=oe(Y,2),k=M[0],K=M[1],X=he.useRef(!1),I=he.useState(null),te=oe(I,2),ne=te[0],fe=te[1],ae=f.useRef(null),ce=f.useRef(null),de=function(){var Ee;return(Ee=ce.current)===null||Ee===void 0?void 0:Ee.textArea},xe=function(){de().focus()};f.useImperativeHandle(t,function(){var je;return{resizableTextArea:ce.current,focus:xe,blur:function(){de().blur()},nativeElement:((je=ae.current)===null||je===void 0?void 0:je.nativeElement)||de()}}),f.useEffect(function(){K(function(je){return!T&&je})},[T]);var Se=he.useState(null),Oe=oe(Se,2),Ce=Oe[0],we=Oe[1];he.useEffect(function(){if(Ce){var je;(je=de()).setSelectionRange.apply(je,Le(Ce))}},[Ce]);var be=tw(S,x),De=(r=be.max)!==null&&r!==void 0?r:h,Te=Number(De)>0,Be=be.strategy(F),Ne=!!De&&Be>De,$e=function(Ee,Ye){var Je=Ye;!X.current&&be.exceedFormatter&&be.max&&be.strategy(Ye)>be.max&&(Je=be.exceedFormatter(Ye,{max:be.max}),Ye!==Je&&we([de().selectionStart||0,de().selectionEnd||0])),L(Je),ed(Ee.currentTarget,Ee,d,Je)},Fe=function(Ee){X.current=!0,p==null||p(Ee)},ye=function(Ee){X.current=!1,$e(Ee,Ee.currentTarget.value),y==null||y(Ee)},Re=function(Ee){$e(Ee,Ee.target.value)},Ue=function(Ee){Ee.key==="Enter"&&N&&N(Ee),W==null||W(Ee)},Ie=function(Ee){K(!0),s==null||s(Ee)},at=function(Ee){K(!1),u==null||u(Ee)},qe=function(Ee){L(""),xe(),ed(de(),Ee,d)},Ke=b,Xe;be.show&&(be.showFormatter?Xe=be.showFormatter({value:F,count:Be,maxLength:De}):Xe="".concat(Be).concat(Te?" / ".concat(De):""),Ke=he.createElement(he.Fragment,null,Ke,he.createElement("span",{className:ue("".concat(C,"-data-count"),O==null?void 0:O.count),style:A==null?void 0:A.count},Xe)));var et=function(Ee){var Ye;P==null||P(Ee),(Ye=de())!==null&&Ye!==void 0&&Ye.style.height&&fe(!0)},it=!j&&!x&&!m;return he.createElement(ew,{ref:ae,value:F,allowClear:m,handleReset:qe,suffix:Ke,prefixCls:C,classNames:q(q({},O),{},{affixWrapper:ue(O==null?void 0:O.affixWrapper,J(J({},"".concat(C,"-show-count"),x),"".concat(C,"-textarea-allow-clear"),m))}),disabled:T,focused:k,className:ue($,Ne&&"".concat(C,"-out-of-range")),style:q(q({},R),ne&&!it?{height:"auto"}:{}),dataAttrs:{affixWrapper:{"data-count":typeof Xe=="string"?Xe:void 0}},hidden:z,readOnly:H,onClear:B},he.createElement($N,Me({},V,{autoSize:j,maxLength:h,onKeyDown:Ue,onChange:Re,onFocus:Ie,onBlur:at,onCompositionStart:Fe,onCompositionEnd:ye,className:ue(O==null?void 0:O.textarea),style:q(q({},A==null?void 0:A.textarea),{},{resize:R==null?void 0:R.resize}),disabled:T,prefixCls:C,onResize:et,ref:ce,readOnly:H})))});const $u=2,ON=(e,t)=>{t.offsetWidth-e<$u?t.style.width=`${e+$u}px`:t.offsetWidth-e>$u&&(t.style.width=`${e+$u}px`)},MN=()=>he.useCallback(t=>{if(t&&t.resizableTextArea.textArea.style.width.includes("px")){const r=Number.parseInt(t.resizableTextArea.textArea.style.width.replace(/px/,""));Cn(()=>ON(r,t.nativeElement))}},[]),AN=e=>{const{componentCls:t,paddingLG:r}=e,i=`${t}-textarea`;return{[i]:{position:"relative","&-show-count":{[`> ${t}`]:{height:"100%"},[`${t}-data-count`]:{position:"absolute",bottom:e.calc(e.fontSize).mul(e.lineHeight).mul(-1).equal(),insetInlineEnd:0,color:e.colorTextDescription,whiteSpace:"nowrap",pointerEvents:"none"}},[`
        &-allow-clear > ${t},
        &-affix-wrapper${i}-has-feedback ${t}
      `]:{paddingInlineEnd:r},[`&-affix-wrapper${t}-affix-wrapper`]:{padding:0,[`> textarea${t}`]:{fontSize:"inherit",border:"none",outline:"none",background:"transparent",minHeight:e.calc(e.controlHeight).sub(e.calc(e.lineWidth).mul(2)).equal(),"&:focus":{boxShadow:"none !important"}},[`${t}-suffix`]:{margin:0,"> *:not(:last-child)":{marginInline:0},[`${t}-clear-icon`]:{position:"absolute",insetInlineEnd:e.paddingInline,insetBlockStart:e.paddingXS},[`${i}-suffix`]:{position:"absolute",top:0,insetInlineEnd:e.paddingInline,bottom:0,zIndex:1,display:"inline-flex",alignItems:"center",margin:"auto",pointerEvents:"none"}}},[`&-affix-wrapper${t}-affix-wrapper-sm`]:{[`${t}-suffix`]:{[`${t}-clear-icon`]:{insetInlineEnd:e.paddingInlineSM}}}}}},NN=rr(["Input","TextArea"],e=>{const t=sn(e,Td(e));return[AN(t)]},Od,{resetFont:!1});var PN=function(e,t){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(r[i]=e[i]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(r[i[o]]=e[i[o]]);return r};const _N=f.forwardRef((e,t)=>{var r;const{prefixCls:i,bordered:o=!0,size:s,disabled:u,status:d,allowClear:m,classNames:h,rootClassName:p,className:y,style:b,styles:w,variant:C,showCount:x}=e,S=PN(e,["prefixCls","bordered","size","disabled","status","allowClear","classNames","rootClassName","className","style","styles","variant","showCount"]),{getPrefixCls:$,direction:R,allowClear:T,autoComplete:z,className:O,style:A,classNames:P,styles:B}=io("textArea"),N=f.useContext(Zi),H=u??N,{status:j,hasFeedback:W,feedbackIcon:V}=f.useContext(xi),U=ov(j,d),Z=f.useRef(null);f.useImperativeHandle(t,()=>{var ce;return{resizableTextArea:(ce=Z.current)===null||ce===void 0?void 0:ce.resizableTextArea,focus:de=>{var xe,Se;Q2((Se=(xe=Z.current)===null||xe===void 0?void 0:xe.resizableTextArea)===null||Se===void 0?void 0:Se.textArea,de)},blur:()=>{var de;return(de=Z.current)===null||de===void 0?void 0:de.blur()}}});const _=$("input",i),L=pl(_),[F,Y,M]=U2(_,p),[k]=NN(_,L),{compactSize:K,compactItemClassnames:X}=md(_,R),I=lo(ce=>{var de;return(de=s??K)!==null&&de!==void 0?de:ce}),[te,ne]=lv("textArea",C,o),fe=nw(m??T),ae=MN();return F(k(f.createElement(TN,Object.assign({autoComplete:z},S,{style:Object.assign(Object.assign({},A),b),styles:Object.assign(Object.assign({},B),w),disabled:H,allowClear:fe,className:ue(M,L,y,p,X,O),classNames:Object.assign(Object.assign(Object.assign({},h),P),{textarea:ue({[`${_}-sm`]:I==="small",[`${_}-lg`]:I==="large"},Y,h==null?void 0:h.textarea,P.textarea),variant:ue({[`${_}-${te}`]:ne},hh(_,U)),affixWrapper:ue(`${_}-textarea-affix-wrapper`,{[`${_}-affix-wrapper-rtl`]:R==="rtl",[`${_}-affix-wrapper-sm`]:I==="small",[`${_}-affix-wrapper-lg`]:I==="large",[`${_}-textarea-show-count`]:e.showCount||((r=e.count)===null||r===void 0?void 0:r.show)},Y)}),prefixCls:_,suffix:W&&f.createElement("span",{className:`${_}-textarea-suffix`},V),showCount:x,ref:Z,onResize:ce=>{var de;(de=S.onResize)===null||de===void 0||de.call(S,ce),x&&ae(Z.current)}}))))}),wl=Ad;wl.Group=rN;wl.Search=bN;wl.TextArea=_N;wl.Password=pN;wl.OTP=uN;function DN(e,t,r){return typeof r=="boolean"?r:e.length?!0:Ci(t).some(o=>o.type===D2)}var fw=function(e,t){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(r[i]=e[i]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(r[i[o]]=e[i[o]]);return r};function Nd(e){let{suffixCls:t,tagName:r,displayName:i}=e;return o=>f.forwardRef((u,d)=>f.createElement(o,Object.assign({ref:d,suffixCls:t,tagName:r},u)))}const bv=f.forwardRef((e,t)=>{const{prefixCls:r,suffixCls:i,className:o,tagName:s}=e,u=fw(e,["prefixCls","suffixCls","className","tagName"]),{getPrefixCls:d}=f.useContext(At),m=d("layout",r),[h,p,y]=_2(m),b=i?`${m}-${i}`:m;return h(f.createElement(s,Object.assign({className:ue(r||b,o,p,y),ref:t},u)))}),zN=f.forwardRef((e,t)=>{const{direction:r}=f.useContext(At),[i,o]=f.useState([]),{prefixCls:s,className:u,rootClassName:d,children:m,hasSider:h,tagName:p,style:y}=e,b=fw(e,["prefixCls","className","rootClassName","children","hasSider","tagName","style"]),w=dr(b,["suffixCls"]),{getPrefixCls:C,className:x,style:S}=io("layout"),$=C("layout",s),R=DN(i,m,h),[T,z,O]=_2($),A=ue($,{[`${$}-has-sider`]:R,[`${$}-rtl`]:r==="rtl"},x,u,d,z,O),P=f.useMemo(()=>({siderHook:{addSider:B=>{o(N=>[].concat(Le(N),[B]))},removeSider:B=>{o(N=>N.filter(H=>H!==B))}}}),[]);return T(f.createElement(A2.Provider,{value:P},f.createElement(p,Object.assign({ref:t,className:A,style:Object.assign(Object.assign({},S),y)},w),m)))}),LN=Nd({tagName:"div",displayName:"Layout"})(zN),HN=Nd({suffixCls:"header",tagName:"header",displayName:"Header"})(bv),BN=Nd({suffixCls:"footer",tagName:"footer",displayName:"Footer"})(bv),IN=Nd({suffixCls:"content",tagName:"main",displayName:"Content"})(bv),to=LN;to.Header=HN;to.Footer=BN;to.Content=IN;to.Sider=D2;to._InternalSiderContext=Rd;var jN={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 00-44.4 0L77.5 505a63.9 63.9 0 00-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0018.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"}}]},name:"home",theme:"outlined"},kN={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M690.1 377.4c5.9 0 11.8.2 17.6.5-24.4-128.7-158.3-227.1-319.9-227.1C209 150.8 64 271.4 64 420.2c0 81.1 43.6 154.2 111.9 203.6a21.5 21.5 0 019.1 17.6c0 2.4-.5 4.6-1.1 6.9-5.5 20.3-14.2 52.8-14.6 54.3-.7 2.6-1.7 5.2-1.7 7.9 0 5.9 4.8 10.8 10.8 10.8 2.3 0 4.2-.9 6.2-2l70.9-40.9c5.3-3.1 11-5 17.2-5 3.2 0 6.4.5 9.5 1.4 33.1 9.5 68.8 14.8 105.7 14.8 6 0 11.9-.1 17.8-.4-7.1-21-10.9-43.1-10.9-66 0-135.8 132.2-245.8 295.3-245.8zm-194.3-86.5c23.8 0 43.2 19.3 43.2 43.1s-19.3 43.1-43.2 43.1c-23.8 0-43.2-19.3-43.2-43.1s19.4-43.1 43.2-43.1zm-215.9 86.2c-23.8 0-43.2-19.3-43.2-43.1s19.3-43.1 43.2-43.1 43.2 19.3 43.2 43.1-19.4 43.1-43.2 43.1zm586.8 415.6c56.9-41.2 93.2-102 93.2-169.7 0-124-120.8-224.5-269.9-224.5-149 0-269.9 100.5-269.9 224.5S540.9 847.5 690 847.5c30.8 0 60.6-4.4 88.1-12.3 2.6-.8 5.2-1.2 7.9-1.2 5.2 0 9.9 1.6 14.3 4.1l59.1 34c1.7 1 3.3 1.7 5.2 1.7a9 9 0 006.4-2.6 9 9 0 002.6-6.4c0-2.2-.9-4.4-1.4-6.6-.3-1.2-7.6-28.3-12.2-45.3-.5-1.9-.9-3.8-.9-5.7.1-5.9 3.1-11.2 7.6-14.5zM600.2 587.2c-19.9 0-36-16.1-36-35.9 0-19.8 16.1-35.9 36-35.9s36 16.1 36 35.9c0 19.8-16.2 35.9-36 35.9zm179.9 0c-19.9 0-36-16.1-36-35.9 0-19.8 16.1-35.9 36-35.9s36 16.1 36 35.9a36.08 36.08 0 01-36 35.9z"}}]},name:"wechat",theme:"outlined"};const FN=()=>Nt.jsxs("div",{style:{padding:"16px 16px"},children:[Nt.jsx(dw,{src:"princeton-school-zone.jpg",fallback:"https://tapinto-production.s3.amazonaws.com/uploads/articles/12/best_crop_8209fda018108e5c4a72_12-7-24_Princeton_Future-Housing-Map.jpg?id=5628518",preview:!1}),Nt.jsx("p",{style:{fontSize:"16px",lineHeight:"24px",padding:"16px"},children:"这个网站是一个专为普林斯顿学区华人社区提供信息分享的平台。我们致力于为广大华人家庭提供最新的学区资讯、教育资源、社区活动等相关信息，帮助大家更好地融入和了解当地的生活与文化。无论是关于学校政策、课外活动，还是学区的各种实用信息，我们都力求为您提供准确、及时的内容。此外，网站还为社区成员提供了一个交流互动的空间，让大家能够分享经验、解答疑问、互相支持。"})]}),VN=()=>Nt.jsx("div",{children:"This is  the about page"}),Ru=[{title:"理发美发",content:`
    
    *******大普林华人生活群信息:理发美发 ***************
为服务大普林地区的居民，本群定期发送生活服务信息，全是群主在各个微信群收到的微信信息集中，完全基于个人推荐，无法保证信息真实，用前请货比三家。也欢迎各位群友发送评论和信息，及时登出反馈。群主微信号：yalichen15

美发
美发美容7328218883 

@daisy (609) 799-6698 Meilin。在家里，Plainsboro，电话预约。男生理发和女生做头发都可。非常好，二十几年了。

 请问哪里有理发师推荐？谢谢
我们家都很喜欢这家 
May's Beauty Salon      形象      美寿      
TEL:732-821-8883 CELL:908-930-2003
3550 Route 27,
Kendall Park, NJ 08824
Mon -Fri: 10:00am-7:30pm Sat: 10:00am-7:00pm Sun: 11:00am - 6:00pm

SILK CUT
HAIR DESIGNS
(aPlainsboro Road, Plainsboro, NJ 0853617#B Princeton Mcadows Shopping Center
Tel:(609)750-8868(609)750-8869Open 7 Days a Week: Mon-Sat: 10am-8pm / Sun: 10am-5pm
群主，這家剪頭髮不錯，女的找Ann,男的找Elson. 
上次去silk cut 服务态度很一般 后面也没给修好
推荐Kim, hairdresser in Silk cut, Plainsboro, 732-816-8869 已经用她5年了。 师傅是福建人，人和蔼，手艺好。

今天推荐个发廊，在爱迪生，群主可以收录。雾都发廊，电话：732 777 0980。HMart对面，今天陪家人去这儿理发，女生长头发，仔仔细细理了2个小时，才35刀+小费，关键还理的超好，家人非常满意，老板理发店铺开了20年，孩子都送去上大学了，特地给这个老板向群主推荐下。
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
要事先預約喔

@天璇地轉 我一直找这位韩国美女剪头发，个人感觉不错，她是在自己家开的个小发廊 June (732) 470-6996 18 Dey Rd Plainsboro NJ 之前群友介紹的

Fashion Hair Salon 
2090 Nj-27 Edison NJ 08817 
732-662-7112
Bendy

HAIR STRUCTURE
地址:1945 Lincoln Hwy(Route27) Edison,NJ 08817
联系电话：732-650-1620

Serena 609 955 2165
我小孩想染发，她的价格在100-350美元左右
手艺很好！找Serena理发后我妈都说我年轻了十几岁😊
普林周边最靠谱的美发师。非常敬业，理发技术高超，收费合理！
看到群里推荐的Serena 理发美容，今天下午和女儿去剪发，果然名不虚传，货真价实，这年头能够找到如此手艺高超，价格便宜的剪发太难了。谢谢Serena 让我看起来年轻了好多啊，又可以美美哒啦
https://calendly.com/serenajiang9050/serena
用这个link 就是可以预约Serena 

莉莉发廊
7323989999
莉莉髮廊：剪髮男25，女45～剪得蠻仔細的，我老公很喜歡，比在Edison剪便宜

@天璇地轉 我一直找这位韩国美女剪头发，个人感觉不错，她是在自己家开的个小发廊 June (732) 470-6996 18 Dey Rd Plainsboro NJ 只剪一般$35-40,一般剪发给个五刀小费就可以了
我知道男生收费$30，烫发可能分长短，染发大概100左右，一般提前两三天预约

yaya 这里也可以，不约也可以直接去

@Tony.L 我也去过 不错
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

    `},{title:"驾照/危急情况处理",content:`
    *******大普林华人生活群信息:驾照/危急情况处理***************
为服务大普林地区的居民，本群定期发送生活服务信息，全是群主在各个微信群收到的微信信息集中，完全基于个人推荐，无法保证信息真实，用前请货比三家。也欢迎各位群友发送评论和信息，及时登出反馈。群主微信号：yalichen15

新泽西交通局中英文笔试练习题库
aiqiang.org
64f5f304bdfc0ad4c86cd2cd_256x256compliant (1).png
驾照中文题库，挺有用的

https://www.nj.gov/mvc/about/manuals.htm

前几个礼拜才刚考完，个人觉得官方出的手册也很有用

求助万能群，国内驾照想申请美国临时驾照，请问国内驾照是要找律师翻译公证吗？不知找谁翻译好呢？
#中国驾照翻译件，用于新泽西交通局免路考申请使用。费用和流程请看: https://aiqiang.org/nj-license-intro/    驾照照片材料和你的邮寄地址请发到 nycourtchen@gmail.com
我姐是用这个翻译提供的驾照翻译件

淘宝翻译，已经顺利换了新泽西的驾照。供参考。               美国临时驾照就不清楚了

国内驾照NJ换驾照，无需路考
我没有公证驾照，没有路考，要考交规，测视力

Hertz网站上免费翻译即可，即使换驾照，DMV一样认可

您好我们刚刚在3200 brunswick 拿到临时驾照 用的hertz微信翻译 ，过了笔试看到是中国驾照（给了国际驾照也不要），就直接给了路试sticker，接着就排队办驾照。全程什么也没问.
@Jun Zhang 这个office只要是中国驾照应该就给免路试
我在3200 Brunswick Pike, Lawrence Township, NJ 08648拿到了
Hertz 微信翻译能不能推一下给我，谢谢@@Jessie 
没错。用的是协程翻译

@ZXL #小程序://Hertz国际租车/u8mZkABPByrzw6p

撞车后
@Sharon Zhang ： 如果那人已走了， 给对方打电话， 要Insurance info， 马上打她的insurance。 如果她不给， 说要报警， 如果她真的不给， 你马上打电话。 事出哪一township， 就打那township police

遇到产品质量问题商家不退货
@Tonyxu sorry,昨天说的是Better Business Bureau   https://www.bbb.org/

@Annie Lin (曲红） 0086-1012308，中领馆全球热线

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

如果我们知道有孩子非法在普林斯顿上学，是否有举报的渠道？
可以写信给laurieoneto@princetonk12.org
    `},{title:"普林斯顿附近的餐厅",content:`
    *******大普林华人生活群信息: 普林斯顿附近的餐厅 ***************
为服务大普林地区的居民，本群定期发送生活服务信息，全是群主在各个微信群收到的微信信息集中，完全基于个人推荐，无法保证信息真实，用前请货比三家。也欢迎各位群友发送评论和信息，及时登出反馈。群主微信号：yalichen15

餐馆的推荐比较难，每个人的口味都不一样。下面几个中国餐馆我们试过，还及格。

Canton Palace
点心         908     526     8888    
Reserve a table
Dine-in·√Takeout·√No-contact delivery   >       
216 W Main St,Somerville,NJ 08876

Golden Seafood Restaurant
Cantonese restaurant.$10-20. 牛肉高超    8.95    
En19.95售菜肉油17.95成家1825西湖牛肉塞米 17.95
518 Old Post Rd Suite 3, Edison, NJ 08817
1711 NJ-27, Edison, NJ 08817
广东餐馆。饮茶或广东小炒。

小笼包这边有上海小笼，小食代，。皮蛋瘦肉粥只有早茶的时候在悦满楼吃过，只是觉得不如自己煲。

Weee 上可以买 Edison送餐；可以和菜一起买。满50才免运费；有个小费，不管买啥都有，选3块，餐馆提前一天才能取消。第一单没买满50 收5块快递费，但是你晚点凑满了，收到货第二天会退

如果喜欢川菜就试试Hamilton 的川妹子。我们特别喜欢他们的“酸豆角炒肉末”。用的是他们自己泡的酸豆角。

我们比较喜欢“莲园”的沙锅鱼头或沙锅鲈鱼（晚餐）和牛腩汤河粉（中餐，很有广州街头小吃的感觉）。
态度很差，味道一般，菜太贵
点个西湖牛肉羹。 不知道从什么时候开始，默认20多块是2人份，6个人算6人份，一份和原来大小一样的羹（切成大正方块的豆腐，牛肉是牛肉末）卖60多；反正这家店是被我拉黑了

Hot Wok Café
店不大，定位比较有意思，单体菜价不便宜，但量很足
217 Clarksville Rd, West Windsor Township, NJ08550

Hotpot
人均：$35 地址：561 US-1 Edison , NJ 08817电话：732-354-3078
小提示：全新开张晚餐时段可能需要排队 

Blue Point Grill，258 Nassau St, Princeton, NJ 08542； Kristine's，51 Witherspoon St, Princeton, NJ 08542；Lan Ramen，4 Hulfish St, Princeton, NJ 08542；
@普林斯顿陈老师-文书辅导 推薦一下剛發的兩家在Edison 的餐館，「蜀湘門第」的烤鴨不錯。 

Chef Tan Highland
Raritan Ave, Highland Park, NJ 08904
Find a table• cheftanhighlandparknj.com


下面這兩家粵菜是同一個老闆，用心經營。點心據說是師傅自己做的，也不錯。Green Lake Seafood:
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
📍 微信联系：LuzhiweiNJ
品味地道卤香！

Princeton Downtown的 Lan Ramen  
他們家除了 麵條，其他的菜都不錯。（拉麵真的很難吃，不要點。麵很斷，湯沒味道）
非常推薦他的fiery lamb stew of Lanzhou 燉羊肉
麻辣乾鍋、鹽酥雞、九層塔炒飯 都好吃。
之前有羊肉包子和台灣牛肉捲餅也好吃（但好像有一陣子沒做了，不知道什麼時後會恢復）

Thai Village也不错，味道正宗，价格非常合理，特别喜欢他们的drunken noodles
老板也经营一家非常好吃的法国精品糕点店，Tous Les Jours
在Woori Mart 旁边，价格不低但是好吃至极，大普林区域最好的糕点店

刘一手火锅挺好的，有点贵。east Windsor 的湖南歺馆还不错，价格也公道
老板孩子过去在Johnson Park，很和气
两家九个人聚餐，大概260美元，很多免费小吃

上海菜 
Tasty Moment    小食代   小食代不错👍 
tasty moment
1711 NJ-27, Edison, NJ 08817
Located in: Festival Plaza

这些餐厅都去过啦。 目前粤菜中部新泽西这边也就Edison的皇都，金喜，matawan的西湖还凑合

韩国菜总是去Edison Old Post路那家，很正宗

Top Korean Restaurants: So Moon Nan Jip, 238 Broad Ave
Palisades Park, NJ  (Korean town) & Dong Bang Grill 1616 Palisades Ave., Fort Lee 

Asian Bistro    31 Station Dr, Princeton Junction,NJ 08550
@Lily Chen_普林斯顿 @Shaofei Lu 这家还可以。是韩国人开的。
@Lily Chen_普林斯顿 @Lily Chen_普林斯顿 上面两家都是韩国朋友推荐她们认为最佳的.我去过第一家友人说远超NYC K-Town’s 韩国料理店

@天璇地轉 说的是禧锅呀，喜欢台式的可以去27号路原好运来超市对面的蜀美林，很多台湾人在那里吃。看名字还以为是川菜，其实一半是正宗台式料理。

如果喜歡台灣小吃的話，我也蠻推薦
Little Pot 
1665 Stelton Rd, Piscataway Township, NJ 08854

它是台式小火鍋（個人鍋- 煮好端上來、配料都是set好的） 
有麻辣臭臭鍋、沙茶鍋等比較有台灣特色的
但我其實覺得它火鍋就ok，沒有到驚艷等級。
鹹酥雞、脆皮大腸、咖哩蛋包飯、台式臭豆腐、炸豬排飯是真的好吃、很正宗的味道

多谢群友分享！ 接着问，火锅哪家强？已经吃过刘一手，重庆码头，海底捞。德庄好吃吗？附近和 纽约还有更好吃的火锅推荐吗？食材够新鲜的
我覺得德庄好吃，比南邊的劉一手好吃，食材比較新鮮、湯底味道也好
我們一般都是去那裡吃

山城码头，在Edison

All you can eat 的日餐在老美东那个plaza角落有一家开了有些年头了

我这次在网上 noble fresh cart 订了salmon uni 和 amaebi 送货到家 自己切一下就好了
他们家前身是true world 很多sushi店都是和他们订货wholesale這間比較遠，但如果有機會去北邊的話，非常推薦他們的sashimi和鰻魚飯
他們家的魚都是老闆娘每天早上親自去選的。
餐廳對小孩超級友善。

Choo Choo Train Sushi
374 Broad Ave, Leonia, NJ 07605

我還沒去過，但在我的wish list上。😆 
想去Lawrenceville一間評分4.9的懷石料理，感覺他們的生魚片應該會很厲害。
如果有人去過的話，跟我分享一下新的😄🙏🏻

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

请问附近有没有跳蚤市场 可以卖二手东西的 
Englishtown or Columbus Farmers Market.
请问附近有没有跳蚤市场 可以卖二手东西的 
@RoRo 离这里不远Lamberville Golden Nuggets Flea Market (星期三，六，日开）。另外Lambertville, NJ和Delaware 河对面New Hope, PA有几个古董店卖挺有艺术气息的东西（绘画，家俱，收藏品等等。不便宜，确实是好东西）。

@王Bobo 今天在教会 一个朋友说可以去这里买二手儿童产品：https://mercercounty.jbfsale.com

Englishtown or Columbus Farmers Market.

Shaofei Lu： 大家知道在哪儿能买到中国的白酒吗？
Hightstown Liquors & Wines LLC • 4.2* (41) • ...
107 Stockton St, Hightstown, NJ
08520
这家店是中国人开的，有中国的烈酒买.

Mitsuwa Marketplace - New Jersey 
595 River Rd, Mitsuwa
Edgewater, NJ 07020
    `},{title:"眼科医生",content:`
    *******大普林华人生活群信息: 眼科医生 ***************
为服务大普林地区的居民，本群定期发送生活服务信息，全是群主在各个微信群收到的微信信息集中，完全基于个人推荐，无法保证信息真实，用前请货比三家。也欢迎各位群友发送评论和信息，及时登出反馈。群主微信号：yalichen15

眼科专科和配镜

配镜，Costco 性价比最高，可以预约验光和年度眼科检查。
别去Costco验光，至少别去咱们附近那家。那里的验光师给的prescription 度数太高，眼镜戴上不舒服。我请他调整，更不舒服了 我只好又其他地方的验光师重新验的。

@all 请问谁了解Otho-K 隐形眼镜在哪里配比较好？
Call Us: (609) 581-5755
Eyecare Professionals PC, 1777 Kuser Rd, Hamilton Township, NJ 08690 

@颜 Fred-Pennington-08534 EyeCare Professionals, PC
1777 Kuser Road Hamilton, NJ 08690
609-581-5755 (P) 609-581-7055 (F)

话说四五岁男孩子检查眼睛视力可以去普通的那种Lencraft那里做wellness check吗？还是要去专门的儿科眼科？ 
 1-800-TRY-CHOP
@ Children's Hospital of Philadelphia® Specialty Care, Princeton at Plainsboro
101 Plainsboro Road, Plainsboro, NJ 08536 Contact Us: 609-520-1717
The CHOP Care Network Specialty Care Center in Princeton has moved to a new, 25,000-square-foot facility on the campus of the University Medical Center of Princeton at Plainsboro. The new facility also offers new services and amenities including physical therapy, occupational therapy and rehab gyms, speech therapy, auditory brainstem response (ABR) testing, and diagnostic X-ray services.
For eyeglasses, please see below.@Miss Gloria  
They have a location in Plainsboro and see children with vision issues. @Miss Gloria 
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

@范杰 Dr. Sun eye care at Plainsboro
@Lina 孙笑音   Dr Sun Eye Care LLC  3 Market Street, Plainsboro Township, NJ 08536  群里应该挺多人都看过她
我们家用的是Dr. Sun eye care， in Plainsboro, 费用三年前$2000 左右

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
@lulu -我是8年前在西海岸做的。我前面推荐的Campus Eye Group也可以做激光手术。他们的Specialist很多。

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
They have a location in Plainsboro and see children with vision issues. @Miss Gloria 

@Fran  去Hamilton的Eyecare Professional 可能要先问－下孩子是否能做vision therapy. 诊所应有在电脑上可以测试两个眼睛之间的协调和眼睛与大脑的协调。保险公司凭测试结果决定是否付费做therapy. 如果vision therapy 可以帮助的话，就可能今后不需要戴OK 镜, 也可能不容易变近视。这家看网页是有能力做vision therapy. 

https://www.chop.edu/locations/specialty-care-princeton-plainsboro?utm_source=gmb&utm_medium=organic&utm_campaign=network_scc&utm_content=locations_specialty_care_princeton_plainsboro_cta_button_consumer_consideration_all   @Miss Gloria 

For eyeglasses, please see below.@Miss Gloria 
Optometrist in Princeton, New Jersey
Address: 211 N Harrison St, Princeton,NJ 08540
Hours: Open.Closes 6 PM▼ Phone:(609) 921-6620

朋友们， 可以推荐一下做 lasik eye surgery 的医生吗？ 现谢谢大家🌹
@Grace Zhang，CPA Dr. Michael Wong https://www.princetoneyegroup.com/ 我2005年找他做的，非常推荐

@傅琳 Delaware valley retina. I like them a lot better than NJ retina 
https://www.willseye.org/medical-services/eye-emergency-department/
24x7, 任何时候都可以walk in，就是有点远。对面有车库存车。
snow_emergency_room-27-1.jpg
Eye Emergency Department
willseye.org
24x7, 任何时候都可以walk in，就是有点远。对面有车库存车。
处理之后他们会转其他科，或者回自己医生处。这是附近唯一一家眼科急诊。

@岳力 @FangD 非常感谢！ 收藏了，以后总有人用得着。昨天后来找到了MarketFair旁边的一个眼科诊所，擅长诊治青光眼的医生，还不错，及时处理了。

这个里面提到的Eyecare Professionals
1777 Kuser Rd
Hamilton Township, NJ 08690
就是著名的Dr D
@Fran Hamilton的Eyecare Professional裡面有位Dr D專門做這個，客戶全是中國孩子
非常推荐Dr. D. 很专业也很有爱心
听来很不错，所以也有人说价钱不便宜
唐姐介绍的Dr.D 非常专业 全州顶级医生 业务能力强啊。我家四年了，都没有问题
@多巴胺 谢谢，但是Dr.D太难约，当初就是要等半年，才选了别的医生

@Jalyn 我儿子以前也是这样，戴了OK镜后，每两年近视度数会涨50度，换了医生就很满意了，眼睛近视度数也不涨了。

@Jalyn OK镜EYECARE Dr.Nicholas despotidis (609) 581-5755. 这家非常好。

想请问一下在大普林斯顿附近，给孩子看Vision Therapy 的医生只有在206 上的Dr. Herzberg Chaya OD吗？Vision Therapy 是帮助孩子或者大人通过锻练眼睛之间和大脑的协调，增强运动员体育运动反应速度和提高英语阅读速度。医疗保险付的疗程，一般是12周。对健康孩子和有两个眼睛在近视距离上使用有差别的孩子，都会有帮助。谢谢！

打扰大家一下，请问有家长做过白内障吗？想请教一下选plain, Toric 还是multifocal lenses, 做完手术之后，镜片适应怎样。谢谢大家

家人眼睛出现飞蚊症，请问有眼科医生推荐吗？

@Tonyxu try “Kung Eye Center” at East Brunswick

对飞蚊症，眼科大夫能做的非常有限

@Tonyxu 我被羽毛球打到眼睛后开始有飞蚊症，医生检查完后告知一个月后就适应了

我之前有一天忽然有飞蚊症，看医生也说充分休息，少用眼就会好，没有治疗方法。果然第三天就没了

Lens Crafters里有optometrist一些情况可以看，应该也接受walk in。我家孩子小时候有一次是周末，抠着他爸的眼角膜就是在那儿处理的而且被安慰说这种大人被孩子意外伤着眼睛的情况挺普遍

Matossian Eye Associates +1 (609) 604-6379, Hopewell office, Rwj大楼那里但是又不是RWJ，接受Medicaid，比较好约。紧急的当天有可能约上

    `},{title:"快递",content:`
    *******大普林华人生活群信息: 快递***************
为服务大普林地区的居民，本群定期发送生活服务信息，全是群主在各个微信群收到的微信信息集中，完全基于个人推荐，无法保证信息真实，用前请货比三家。也欢迎各位群友发送评论和信息，及时登出反馈。群主微信号：yalichen15

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
@陈利 试试顺丰国际
紧急求助请问有没有哪位朋友今天晚上-6/20期间，会从新泽西/纽约飞北京（6/21 能到）。需要帮忙带一本护照。谢谢
@Xiaohong ，我用过顺丰快递寄护照回国，非常安全，准时到达，不过需要5-7天，24美刀

@Mary 不着急也不想跑远，普林快递不错。想早点寄出的H mart附近有家快递公司
Hmart附近的比较快的是这家
XZX EXPRESS INC.
(908)583-3838
1603 NewJersey27 Edison, NJ08817 USA
这家在Ｈmart附近，给国内寄过两次。七月份这次很快，不到两周收到

@Mary  不着急也不想跑远，普林快递不错
普林快递Susan Yang（杨姗）
微信号：shanyang618

Edison 很多，我用XZX EXPRESS INC.

    `},{title:"垃圾处理",content:`
    *******大普林华人生活群信息：垃圾处理*****
为服务大普林地区的居民，本群定期发送生活服务信息，全是群主在各个微信群收到的微信信息集中，完全基于个人推荐，无法保证信息真实，用前请货比三家。也欢迎各位群友发送评论和信息，及时登出反馈。群主微信号：yalichen15
 
Dwayne collect scrap metals for free. 将我n 年不用的stove，microwave， 洗衣机都免费拿走了， 其他地方像1-800-pickup 是要收费的。 现在gas 都好贵， Dwayne 的service 不容易， 给大家推荐一下。
 
609-439-5706 Dwayne: collect any metal household items for free. He is very nice and take away any used washer and dryer, refrigerator, etc.
 
请问 节后 该怎么处置 圣诞树 ？
每個鎮都會公布哪一天回收聖誕樹，通常是一月中
https://www.princetonnj.gov/445/Public-Works

我推荐一个dumpster rental : blue rhino dumpster rental 732-322-5327  价格和服务公道
@普林斯顿陈老师-文书辅导 有没有pick up旧沙发的service可推荐？ 谢谢！

1-800-GOTJUNk

可以直接问目前帮你们处理垃圾的公司，请他们给你报价；我们之前搬家就直接付款请他们一次性来帮我们收所有搬完的垃圾

旧衣服捐赠
The Jewish Center Princeton
thejewishcenter.org
435 Nassau St, Princeton, NJ 08540

@飛雪迎春 https://www.princetonnj.gov/1359/Trash-Collection
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

    `},{title:"搬家和搬运",content:`
    
*******大普林华人生活群信息: 搬家和搬运 ***************
为服务大普林地区的居民，本群定期发送生活服务信息，全是群主在各个微信群收到的微信信息集中，完全基于个人推荐，无法保证信息真实，用前请货比三家。也欢迎各位群友发送评论和信息，及时登出反馈。群主微信号：yalichen15

搬家/moving service

旺发搬家叶老板：7328829162
Furniture Moving and Heavy Lifting·
$105/Hour

给旺发搬家叶老板：7328829162🌟好评！我是上月底搬的家，第一次联系叶老板，因为我搬的大件家具不多，来的是他儿子和伙计，配合默契，速度快，细致，安全
今天请了旺发搬家公司帮忙搬家，服务非常好，打包细致周全，还负责拆卸和安装床，价格合理，服务可靠，值得向大家推荐! 
推薦Tony Moving 我女兒搬家刚用过，很专业，鏡子，饭桌等等包好，人也很好

@若水 以下是之前分享的-远距离或是跨国搬家可以找飞达luckymoving.com,近距离或小搬家可以找老蒋搬家，人很实在，价格公道 - 新州搬家公司電話9173880039

我用过Lucky moving 飞达搬家 (732) 432-4288 推荐

@夏, Jigang http://www.empirepianomovers.com

@晶 Jing 我用过搬家公司，不需要给小费的，都包括在里面了。是一家华人搬家公司，很仔细，搬的很好，家具都保护起来的。因为离的比较近，帮我搬了两三次呢。费用之前谈好，后面不需要给小费的。
老蒋搬家
19173880039
还不错

@晶 Jing 搬家小费我给过，每人50刀，搬家老板会向你要的

If you need same-day service please call/text me at 3479241811.
Michael
Magic Mike8:39下午
Iwork at $125 1st hour with three people, $100 per hour after9:43下午

@懒洋洋 我们用过蓝天搬家 (646) 821-1008 鲁先生。很好。他们在法拉盛

@Lily Chen_普林斯顿 蒋先生 (917) 498-8216 微信号 stevenjiang1953

Bok moving 201-615-9600
韩国人 老板Peter
刚刚请他们搬家@金鑫 

可以考慮这兩间, 都是local mover, Rite Move不喜欢用email, 电话上谈好了就算，好像不很专业，但我还是选了它，來了两个人，态度好，也做得很好。

609-586-6833
https://theritemove.com/team-trucks/
theritemove.com

https://twomenandatruck.com/movers/nj/princeton?utm_source=Google&utm_medium=Organic&utm_campaign=GMB
twomenandatruck.com
856.291.6844

我从Plainsboro 搬到Princeton, 两张queen size beds, 一张sofa bed, 一张大dining table, 三件很重的木傢俬，和一个upright piano, 共$980，另每人tips (來了三个人，上面说错了）。

钢琴搬运/Piano Mover

@Clare I used this company. Very professional and reasonably priced. http://www.empirepianomovers.com

@丽 我用过这家：https://princetonmoving.com/

@Clare The price the company quoted for me was for a driving distance of about 45 mins with 6 steps to the living room and it was for a baby grand piano. The price was $300, but that was about 10 years ago.  You can call them to get a quote over the phone before you make a decision.

Duppy piano move
(856)418-1927

MMS搬琴
+1(201) 819-8064

请问普林斯顿附近有没有什么接受捐赠物品的机构，而且可以上门取件的？
@Lan https://www.gogreendrop.com
VVA
smallvva-pp-logo.png
Schedule PPC Location
pickupplease.org

Recommend a place to donate to. They come to your house to pick up, accept many household items: https://pickupplease.org/schedule-ppc/?outlet=trenton&gad_source=1

    `},{title:"孩子体育",content:`
    *******大普林华人生活群信息: 孩子体育 ***************
为服务大普林地区的居民，本群定期发送生活服务信息，全是群主在各个微信群收到的微信信息集中，完全基于个人推荐，无法保证信息真实，用前请货比三家。也欢迎各位群友发送评论和信息，及时登出反馈。群主微信号：yalichen15

请问附近哪家教孩子的跆拳道或是类似的武术馆比较好？ 谢谢@Rachel-Sarah-4 我女儿在west windsor woori mart韩国超市边上的Black Belt America学跆拳道，他们是个连锁的，不过这个店今年刚开，就一个老师，教的我觉得还挺好，你可以去试两个周。一号路上有个Amerikick教空手道的好像也不错。

@Rachel-Sarah-4 我们家娃在Ahn's taekwondo Academy，skillman, 还不错

请问普林斯顿附近有给零基础的小孩学习baseball的地方吗？
Princeton Little League, fall ball starts from September @Lan 
Homeprincetonlittleleague.com
@Lan 这个program就是类似township的recreational program, 但是适合零基础的孩子，如果想去private club，附近有PPH Hamilton, Zoned at Bridgewater，那里有private class和group class

象棋
​​除了Princeton Chess Academy提供初级到中级的国际象棋课程, Princeton Recreation Department 在暑假也有国际象棋课，可以到官网上查看。
princetonchessacademy.com

问一下普林周边哪里有学乒乓球的地方？
Princeton Pong. www.PrincetonPong.com
@欢喜 今年初开的。没去过。你可以去看看

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

@杜超 ～ Billie 附近排球俱乐部
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

@ All
请问群主和各位家人们：
NJ这里有没有羽毛球拍网线的地方？
我儿子喜欢打羽毛球，他的好几只拍子都是因为线断了，闲置在哪里
哪位知道这边有专业绑线的师傅，请告知
谢谢
@高浚～抑善先生 https://nebcus.com 先自己打电话去schedule, 可以说中文，自己拿线去会比on site 买线便宜一些，告诉他们你想拉多少磅就好了
@Emily （圆圆）在 Somerset，看link

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

    `},{title:"厨房厕所小件安装",content:`
    *******大普林华人生活群信息: 厨房厕所小件安装***************
为服务大普林地区的居民，本群定期发送生活服务信息，全是群主在各个微信群收到的微信信息集中，完全基于个人推荐，无法保证信息真实，用前请货比三家。也欢迎各位群友发送评论和信息，及时登出反馈。群主微信号：yalichen15
 
我们用过carpet centers of nj 还不错  
732-254-2060​
917-923-7827
Carpet centers of New Jersey是一家中国人，他们只换地毯不清洗
 
Toilet​Kevin 609-306-2600
 
Kitchen
Best Stone and Kitchen @ New Brunswick
中国人的店，你可以去看看，我们家countertop这里定的，比HD和Lowes便宜
 
窗帘Custom blinds and drapery
signaturedrapery@gmail.com
732 443 0015
 @gtojty @Kay 我們用過這個。她主要是做Custom blinds. Graber 和 hunter douglas

9176175066
Text 温师付
水, 电, 工木都可以的
群里推荐的那个温师傅出价特贵，以前用过温师傅还好
 
Fence​
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


@J. Bai🎈 Wren Kitchens好像就可以做橱柜，另外Home Depot ，costco 里面也有。

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

@金鑫 东北师傅张克洋也不错，+1 (215) 858-1006，价格公道，人不错，比如加个门换个热水炉子换水管蛮好，但刷墙的细心活儿不够仔细
@Nancy给我们改建时报过价，屋顶加一个老虎窗一万多（我们要加两个）。
@++M 你问他似乎什么都可以做。所有镇里的审批申请他都不管，似乎英语不过关。他也没有注册许可。我们最后还是没找他做。
@琳 2020年想装修时找过张师傅，人非常好！他的报价每平方英尺装修价位在240-300美元，人工占60%，地下室工程没有承包过他说不太了解。
张师傅不管permit的申请，碰到需要permit的地方都要自己去做。华人师傅一般都不管申请permit，可能是语言不太行，而申请permit很麻烦，一来二去要和镇里管事的很多沟通，跑了无数趟，他们美国人也很官僚。我们弄了半天，就算了，太麻烦了，工程换了老美做。建议需要permit的还是找老美。

    `},{title:"签证",content:`
    *******大普林华人生活群信息:签证***************
为服务大普林地区的居民，本群定期发送生活服务信息，全是群主在各个微信群收到的微信信息集中，完全基于个人推荐，无法保证信息真实，用前请货比三家。也欢迎各位群友发送评论和信息，及时登出反馈。群主微信号：yalichen15

签证
新泽西公证员
Yu Zhong
Yu.zhong.609@gmail.com
仲宇的公证和签证服务很好，他的电话是6097513252. Wechat是yu_zhong_609

代办去中国探亲旅游签证。每份 $100 。一家多份申请有优惠。有需要请发短信至609-616-2023

@JCW 中文学校的刘老师帮代办签证，她的电话是6096889325。
我用过，不怎么答复，态度也不好

请教，持美国绿卡，中国护照，在美国本地办澳洲签证，求代办旅行社联系方式
小顾：harrygu123

请问群里有人认识可以帮忙申请“申根”签证的中介吗？我网上预约晚了，预约不到想要走的日子了，想快速办理，否则机票就浪费了。” 帮忙一下
@闲云🐳. https://www.americantranslationservice.com/c_visaservice.html

应该就是重新办理，流程官网上有， 打领事馆电话咨询。 领事证件咨询电话：212-868 2078

吾爱
客服微信：ukvisa5i
客服电话：18611895166
小红书：吾爱签证中心(ID:428844330)

@Dyan , 请联系Kathy: (732) 698-1888签证

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
@Judy 他们在唐人街在唐人街，做这个业务几十年了，递件取件速度都很快。
你要不想跑，跟她微信联系，填写表格，然后把你的护照寄给她就行

Oriental Cultural Service LLC
Chinese Visa Service王老师旅行服务代办:各国护照申请中国签证
各类文件中国领馆认证中国护照换新文件、护照代取老人健在证等事宜 Phone: 609-688-9325

我以前用过这家公司，不错
Jessica-翠宝旅游Cell9177558828很多客人问中国签证情况，到目前为止正常情况签下来都是十年多次180天或者120天，美国境内所有中领馆均可办理，除了中国签证，其他国家也基本上都可以申请，有需要来找我吧!翠宝旅游:917-755-8828
2102157i        812198853060138250

麻烦大家, 有好的邮轮代理推荐吗
安妮-华夏旅游732-777-9888

@Linda 估计你们会租车自驾游。在 旧金山  城里，推荐49 mile scenic drive , 包揽了所有旧金山市里的美景。

请教一个问题，入籍后第一次回国，需要去派出所销户嘛？网上看到有人说不销户不让登机？
@阮春怡 保险做法是销户。现在大数据，出入境管理处有户籍的信息
入籍后回国你肯定需要去签证，使馆会要求你带上中国护照，大使馆会帮你剪去护照角，并盖上护照取消章，所以不需要去派出所销户，因为你取得签证时就被销户了
当然第一次登机时可以带上已被取消的护照，防止用到
如果入境口岸和户籍所在地在同一个地方，入境的时候边检有可能要求注销户口。
大城市的边检和公安户籍管理可能没有联网，即便连了也不一定马上可以查到户籍情况。但是中小城市很有可能是联网的，而且入关外籍少，查到的可能性大

    `},{title:"律师",content:`
    *******大普林华人生活群信息: 律师***************
为服务大普林地区的居民，本群定期发送生活服务信息，全是群主在各个微信群收到的微信信息集中，完全基于个人推荐，无法保证信息真实，用前请货比三家。也欢迎各位群友发送评论和信息，及时登出反馈。群主微信号：yalichen15

律师
有群友能帮忙推荐附近讲中文的律师吗？谢谢🙏
@optimist_too 
Law Offices of Wang &Hou
Legal services in West Windsor TownshipNew Jersey·Op
Services:CorporatelitigationCriminal    >    
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

请大家群里有认识移民律师的吗？请分享谢谢gloria@pinglaw.netGloria Liao, Paralegal
Law Office of Fangzhou Ping
Direct Line: 818-639-1788人很好 很负责

@ A L L哪位同乡有认识移民律师经验丰富请推荐朋友公司需要招募一位。@天妮Kong 加州有个申律平律师，你在网上查一下

柳治平大隐律师＆昵称：柳治平大隐律师
WeChat ID: whazupdoc

律师专做遗嘱和trust funds
Hauptman and Hauptman
973-994-2287
或者跟Mercer County Bar Association 咨询一下 mercerbar.com


离婚律师大概一个小时350美元

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

    `},{title:"房屋装修工程/Handyman",content:`
    *******大普林华人生活群信息：房屋装修工程/Handyman*****
为服务大普林地区的居民，本群定期发送生活服务信息，全是群主在各个微信群收到的微信信息集中，完全基于个人推荐，无法保证信息真实，用前请货比三家。也欢迎各位群友发送评论和信息，及时登出反馈。群主微信号：yalichen15
 
房屋装修工程/contractor/renovation
 
建筑师
Alfredo R. Trevino, Architects
609-671-0966
Cell: 717-319-3278
 
Hojoon Chung
2014966242
7325862563
Hcas2012@gmail.com
@April 这韩国人建筑师不错，价格合理，很容易打交道
 
@April Architect Ronald E. Rheaume, +1 (609) 213-8396、
 
@往家逃 这位建筑师，很有经验，价钱也非常公道。大小案子都接，可以简讯他Joe Mullaney Architectural and Structural design & engineering 2154993544

再来求一个能检查房屋结构问题的structural engineer
Lusu Ni
PhD. in Civil Engineering
LS Home Inspection LLC
484-838-9291
NJ License No. 24GI00176800
http://lshouses.com/
我一直在用，你可以试试

Structure engineering
+1-609-4301030

Structure engineering
RPK in Fairless Hills, PA

Builder/handyman
NINI​
609-587-2411
 
@霞Paul Pennachi，若干年前用过，还不错  
@莫 他们比较难约时间，我等了两个月
@凯 我们刚找他们做了装修报价，比其他报价高了至少五分之一。
Paul Pennachi
A.Penna@comcast.net
(609)203-0033​
 
Kevin Moore。6093065942 
remodel kitchen basement 
 
Contractor CanAm Design & Build：609-255-3028给我换的烂掉的窗框和门框，找了五个地方，他家的报价最低。很忙需要预约，打电话不通留voicemail，给我很多顾客做过，好评率100% 。
@西月CanAm专做后院小木屋/garage/shed的设计和建造，价格不算贵,工做的挺好. 在大普林区名声不错
@微微 推荐！房屋改造时一面墙加了两个窗户。他们一般做商业工程，做工很好
@雨 帮我把车库从毛坯房改成办公室，孩子偶尔用来和朋友做sleepover。做工慢了点，Have an eye for detail。很细致，工作后总是打扫基本干净。
里面有个Handyman Daniel （6092553028）,活儿很细致
@林月 他们帮我翻修厨房和地下室。价格合理，负责任。可以帮助申请镇里的Permit。
@Naomi 给我家装修了卫生间, 瓷砖厕便洗脸盆都换了，装了橱柜，把淋浴换了澡盆，收费材料和做工分开。价格合理，认真，会做水电，很会设计，他挑的颜色很耐看。
Dan 手艺确实不错。今天刚帮我修了地板。

富林橱柜地板公司的柜子质量挺好的. 1627 route 27 Edison NJ

郑师傅 Plumbing/handyman/whole house 201-658-5908
真的非常棒，这个师傅啊，收费非常非常合理，而且做工很认真啊，活做的非常好,他什么都会啊，然后他也有几十年的功底。
@Lily这位郑师傅我不推荐，给我们家做装修项目，都谈好了，做到一半要加钱，而且加很多，没同意，项目没做完就走了。这种行为太不负责任了。

装修郑师傅，几年前给我做过，蛮容易沟通好，价格合理。 他想让我推荐下，他在纽约，小的Handyman的活没办法做。一般都是跑来一次做几天的。
房屋违规处理 验房
TEL:917-669-7365

 (201) 669-2050 Pro- Builder的Tim，你可以试着联系一下。他上次给我报过价，虽然最后我自己修好了，没有用他，但感觉人很积极。
 
David Mei (848) 219-2799
微信 :Chokeberry2003
contractor David Mei,他的收费不是最便宜的，但很合理，人也绝对是诚信認真负责。他也是realtor

@金鑫 东北师傅张克洋也不错，+1 (215) 858-1006，价格公道，人不错，比如加个门换个热水炉子换水管蛮好，但刷墙的细心活儿不够仔细
@Nancy给我们改建时报过价，屋顶加一个老虎窗一万多（我们要加两个）。
@++M 你问他似乎什么都可以做。所有镇里的审批申请他都不管，似乎英语不过关。他也没有注册许可。我们最后还是没找他做。
@琳 2020年想装修时找过张师傅，人非常好！他的报价每平方英尺装修价位在240-300美元，人工占60%，地下室工程没有承包过他说不太了解。
张师傅不管permit的申请，碰到需要permit的地方都要自己去做。华人师傅一般都不管申请permit，可能是语言不太行，而申请permit很麻烦，一来二去要和镇里管事的很多沟通，跑了无数趟，他们美国人也很官僚。我们弄了半天，就算了，太麻烦了，工程换了老美做。建议需要permit的还是找老美。
 
Maryjo Eckhard​908-9630052
改装洗手间内外，质量不错
 
WB Construction LLC/Walter​
2673971023​
walterbednarz@gmail.com​​
拆旧天窗换天窗$800 一个。​
 
魏师傅：(917) 963-6484
有个做厨房的师傅很好，魏师傅，工好人也好但是价钱可能不是很便宜

华宇
装修厨房，电话是718-559 2601

    `},{title:"骨科/理疗针灸/中医",content:`
    *******大普林华人生活群信息: 骨科/理疗针灸/中医 ***************
为服务大普林地区的居民，本群定期发送生活服务信息，全是群主在各个微信群收到的微信信息集中，完全基于个人推荐，无法保证信息真实，用前请货比三家。也欢迎各位群友发送评论和信息，及时登出反馈。群主微信号：yalichen15

理疗/PROFESSIONAL PHYSICAL THERAPY

朋友的孩子健身把脖子扭伤了，请问大家有好的正骨医生推荐吗？针灸治疗也可以的。谢谢！

西医找Princeton Orthopaedic Associate 的Dr. Ark, 感觉扎针灸是不是更好

急性扭伤感觉好的针灸师效果好

我这半年理疗封闭折腾了一大圈，遇到没经验的医生和理疗师真是没地方哭...反正不推荐UOA的医生，听说POA的好，要找Dr.Ark但我当时没约上要等一个月，打封闭的话推荐Princeton joint spine 的DO . Meyler。理疗到现在试了四个还没有特别好的。中医正骨和针灸比较靠谱不过也要有特别有经验的才行……打封闭还是有用的，消炎镇痛的同时可以做恢复性训练，关键要找对训练方法和理疗师。

我不太清楚这几个。我们只是看了运动外科手术专家William Rossy,并且做了肩部手术

你可以去Princeton orthopedic association,那里的医生都还不错，有运动医学的sports medicine surgeon, Princeton radiology 可以做x-ray, MRI

Ipad shoulder
纽约张徳超

各位邻居，请问有好的神经科 骨科医生推荐吗？爸爸腰髋腿疼有一阵子了，华人医生做推拿打止痛针效果不是很好。先谢谢大家
@H 骨科- Princeton Orthopaedic Associates
(609) 924-8131
https://goo.gl/maps/17UgE6sVXNh1CVfy8
@H 骨科- Princeton Orthopaedic Associates
(609) 924-8131
https://goo.gl/maps/17UgE6sVXNh1CVfy8

 请问有orthopedic doctor 推荐吗Princeton Orthopedic Association. 我正在它的Plainsboro
@Liping利平  美国排名最好的骨科之一，NYC的hss, hospital of special surgery

有没有chiropractor 推荐？ 谢谢😊
有。Dr. Ari Cohn. 我怀孕时见过他，帮我调整骨骼，让我在怀孕9个月时还能散步。
Chiropractor-Princeton-NJ-Ari-Cohn-Meet-The-Team.jpg
New Patient Special | Chiropractor Princeton NJ
princetonchiropractic.com

各位邻居，请问有好的神经科 骨科医生推荐吗？爸爸腰髋腿疼有一阵子了，华人医生做推拿打止痛针效果不是很好。先谢谢大家
@H 骨科- Princeton Orthopaedic Associates
(609) 924-8131
https://goo.gl/maps/17UgE6sVXNh1CVfy8
@H 骨科- Princeton Orthopaedic Associates
(609) 924-8131
https://goo.gl/maps/17UgE6sVXNh1CVfy8

Dean Linkroum PTDPT Physical Therapist
dlinkroum@professionalpt.com
281 Witherspoon Street Suite 201
Princeton, NJ 08540 Office: 609 622 5624 Cell: 908 285 4124 Fax:609279 2196
www.professionalpt.com

我是约了William Rossy, 运动损伤专业，也是别人推荐的。另外，有人用过Dr Monica 和Abrams,据说也不错，给普大运动员做过手术
我认识的几个普大运动员也是在POA看医生。Dr. Monica，Dr. Abrams 也是在the Princeton Orthopedic Group。据说都不错

@@妹 我儿子用过一个sports injury doctor 在lawrenceville 不错。
Princeton Sports and Family Medicine
Sports medicine clinic in LawrenceTownshipNew Jersey
3131 Princeton Pike Building 4A,
Suite100,LawrenceTownshipNJ     versity 

Dean Linkroum PTDPT Physical Therapist
dlinkroum@professionalpt.com
281 Witherspoon Street Suite 201
Princeton, NJ 08540 Office: 609 622 5624 Cell: 908 285 4124 Fax:609279 2196
www.professionalpt.com

@V  年轻的时候应该请New York city 的专科医生或者医院看。假如没有治愈应该是差不多反映全美国的医疗水平。也许不需要手术可以有其他矫正治疗办法。我家孩子在NYC 的Hospital for Special Surgeries 做了比较全面的Knee surgery。是差不多是全美第一的儿科膝盖手术医生做的。也是运动受伤后发现的问题。

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

@N 我同时用上面推荐的维新针灸
415-416 Executive Dr., Princeton NJ08540
Phone:6096816599
Email:xinxin0505@gmail.com
Wechat: Vivide0505      Major health insurance accepted
我看每次有人问针灸推拿，每次都有人推荐她，估计挺popular吧。

Dr. Jianzhong Chen 609-750-1822 
如果不是骨折的话，陈建中医生针九或者推拿
在新州，没有再知道比陈医生强的治跌倒外伤的。以往看到的情形是第一次扎针后病痛应该会好6成以上。

(针灸医生陈玉碧很好啊， 408 Plainsboro Road, Plainsboro NJ 08536.      609) 750-1650
@lyn 陈医生非常好，是我用过的最好的针灸按摩医生，她收保险的

给你推荐一个针灸医生，同时她也做功能医学function medical. Dr. Qingdi Geng,  phone: 609-216-6938, 诊所地址： 339 Princeton-Hightstown Rd. Bldg. C , East Windsor, NJ 08512

Medical Acucare Integrative Health & Acupuncture
M       Qingdi Geng.MD  
Ph: 609-216 6938, Fax: 609-739-9031 Email: into@medicalacucare.com
Web:https://www,medicalacucare.com
我的肩膀痛，针灸3次就好了。

wang13764372308
我的办公室地址：4 Terry Drive Newtown PA 18940 suite 18
中药治疗ADHD

    `},{title:" 中医",content:`
    *******大普林华人生活群信息: 中医 ***************
为服务大普林地区的居民，本群定期发送生活服务信息，全是群主在各个微信群收到的微信信息集中，完全基于个人推荐，无法保证信息真实，用前请货比三家。也欢迎各位群友发送评论和信息，及时登出反馈。群主微信号：yalichen15
中医


 @all 请问谁有中医针灸治疗的诊所推荐吗？ 
https://hopeacupuncturecenter.com/about-us/ 当时找的zhao 医生 还不错

medical acucare
Address: 339 Princeton Hightstown Rd Building C EastWindsorNJ08512
Phone:(609)216-6938
@yoyo 针灸医生可以找耿医生，疗效挺好的。

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

@Grace Zhang, CPA 推荐 Dr. Jin Lee，  http://www.acu-care.com/
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
@Jacqueline 我也找了很久。还是得去纽约，或者网上购：
网上中药邮购
德成行
Tsemporium.com
https://m.tsemporium.com

纽约同仁堂

常用的中成药，美东可以买到。那种需要煎煮的很少见到。

常用的中成药，Edison金门超市比较全

@Jacqueline 纽约金禾中药，如果有方子打电话可以订购，他们可以邮寄

    `},{title:"房检",content:`
    *******大普林华人生活群信息: 房检 ***************
为服务大普林地区的居民，本群定期发送生活服务信息，全是群主在各个微信群收到的微信信息集中，完全基于个人推荐，无法保证信息真实，用前请货比三家。也欢迎各位群友发送评论和信息，及时登出反馈。群主微信号：yalichen15

购置房屋前的房检/ inspections
@Jenny 这个John比较好，他会告诉你问题在哪儿，怎么修，如果拖下去会怎么样（毕竟不是所有的都立马出现问题，但是可能是早晚出问题，或者小概率某些条件下出问题）。建议你全程录音，虽然他的报告也很详细 . John写了一个一百三十多页的报告，我们律师看得都晕了，说你们的房检太厉害了，还问我们要了John的联系方式。John Martino: mailto:jminspect@optonline.net

House inspection;
我不知道，我找的另外的人。李先生7328871077
中英文都很流利

Inspectors	David Moir	
732-616-4389

\uFEFF@雨寒 Frank Lin
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

@Huhu title company 是由买家的律师选择，通常除非在一开始就告诉律师你想指定那家公司，否则律师是不会主动问买家的，就像@Cecilia Birge, 谢兰 (Princeton) 所说，Title co 的价格是政府公定的，所以找到好沟通, 可信賴的就很重要了，我以下推荐Charlie Liu. 他公司的办公室就在附近，我有好几位客戶用过都滿意，有问題可以和他联系

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

    `},{title:"公证签证银行贷款国内汇款",content:`
    *******大普林华人生活群信息: 公证签证银行贷款国内汇款***************
为服务大普林地区的居民，本群定期发送生活服务信息，全是群主在各个微信群收到的微信信息集中，完全基于个人推荐，无法保证信息真实，用前请货比三家。也欢迎各位群友发送评论和信息，及时登出反馈。群主微信号：yalichen15

这个公证一般在哪里做，有什么建议吗，谢谢
Additionally, all banks have it. If you have a personal lawyer, their paralegals are usually notaries as well.  @季春(Alice'26) 
去自己银行公证先打个电话预约，因为只有有公正资格的人在才能做，是免费的，去UPS收费有些贵，我有一次花了二十几块，图书馆和邮局应该比较便宜
Nassau 的UPS吧，只要5块钱，不管几个签名。有些人按签名个数收钱，每个5刀。先打电话问好可以公证的人啥时候上班
Township office有公证，$1。

新泽西公证员
Yu Zhong
Yu.zhong.609@gmail.com
仲宇的公证和签证服务很好，他的电话是6097513252. Wechat是yu_zhong_609

27号路HMart附近的华夏旅游也可以代办签证

@普林斯顿陈老师-文书辅导 之前有朋友用过，其他人推荐过美亚给旅游签证的保险不错


@仙人掌 您好！请问三级认证需要准备哪些资料？谢谢🙏

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

    `},{title:"安装更换地板/地毯/地下室装修",content:`
    *******大普林华人生活群信息:安装更换地板/地毯/地下室装修 ***************
为服务大普林地区的居民，本群定期发送生活服务信息，全是群主在各个微信群收到的微信信息集中，完全基于个人推荐，无法保证信息真实，用前请货比三家。也欢迎各位群友发送评论和信息，及时登出反馈。群主微信号：yalichen15

+1 (732) 889-6853. 磨地板上漆 $2/sqft 非常好的师傅 就是太忙不一定能接电话 可留言

Floor   赵师傅     
赵勇 (732) 397-5770 。 他专做地板。又快又好但不便宜。
做地板的师傅
赵师傅 732 397 5770
做地板的赵师傅 坐地起价。而且涨的不少。不建议
赵师傅做的感觉上确实好 
Basement waterproof Sal Mendola         609 375-0466            还好，要讲价

郑海雪-换地板
微信号：wxid_exps314z628v12
 
bill电话7323221378handyman
装修地板

@梅子 @Han @Chen Hong 推荐打磨地板的人Dr. Dustless, https://www.doctordustless.com 磨出来的灰尘几乎全部用管道排到室外，做完味道也不是非常厉害

@梅子 地板 Manuel +1 (732) 889-6853

@金鑫 东北师傅张克洋也不错，+1 (215) 858-1006，价格公道，人不错，比如加个门换个热水炉子换水管蛮好，但刷墙的细心活儿不够仔细
@琳 2020年想装修时找过张师傅，人非常好！他的报价每平方英尺装修价位在240-300美元，人工占60%，地下室工程没有承包过他说不太了解。

我用过Daniel做室内隔出来一间房间，drywalling，修补以前起居室墙面的洞，起居室卧室和厨房涂漆，做的很好，非常细致，价格很实惠
地下室装修，水电都可以做，我们加了一个厕所，一个wet bar。
609-255-3028 打电话不太接，但是信息留言，他很快回复
@林月 他们帮我翻修厨房和地下室。价格合理，负责任。可以帮助申请镇里的Permit。

我们去年请了个师傅铺地板，还不错@蒲公英 
(908) 361-2916赵师傅

@蒲公英  我刚刚铺完地下室的地板。非常棒  强烈推荐 应师傅 电话： (609) 433-1413

安装木地板和地毯服务
Ceci的微信：XL9083271333

我们用过carpet centers of nj 还不错  
732-254-2060​
917-923-7827
Carpet centers of New Jersey是一家中国人，他们只换地毯不清洗

    `},{title:"地下室排水整修/sump pump",content:`
    *******大普林华人生活群信息:地下室排水整修/sump pump ***************
为服务大普林地区的居民，本群定期发送生活服务信息，全是群主在各个微信群收到的微信信息集中，完全基于个人推荐，无法保证信息真实，用前请货比三家。也欢迎各位群友发送评论和信息，及时登出反馈。群主微信号：yalichen15

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
@J. Bai Kevin 6093062600 你打电话问问，留voicemail把详情说说

请问大家有做basement 结构的公司吗？我家地下室的结构柱子要换
@建筑师_祥 Paul Pennachi是做泥土工程，质量价格都很好，(609) 203-0033

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

did you try hillsborough irrigation? @May 
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
Safe Air Systems @Noelle 
这家不错。我换整个sump pump ，价格合理。做的非常专业
推荐Safe Air. 帮我装氡气装置，sump pump .价格公道，还专业
zoeller牌子的Sump pump比较好

请问群友们有维修 sump pump 地下排水泵 的师傅推荐吗？
@Chong Wang 着急的话我一般找Theo，响应几乎是秒回，收费不便宜也不贵。我上次的sump pump加上告警装备大概1000美金左右。
1600美金
Theo Ex Plumbing and Heating LLC2
Phone# 609 838 1843​theoexpiumbing@gmail.com​
Total​$1,226.00​
609 851 2401

Handyman Daniel 刚帮我换了sump pump, 是我问到的最低的一家。问了几家，Fante报3600,  Theo报1200，但是要等两个星期，因为地下室淹了，等不了，找了Daniel, 他以前帮我装修过厕所，做的很快，才一千多一点。推荐
Daniel帮我们换了全新的Sump Pump，原来的Sump Pump以及备用的Sump Pump都是以前的房东装的，备用的是电池启动的，但是功率太低，上次下大雨地下室井里面太多水第一个泵坏了，备用泵效率低，所以淹水，所有东西都飘起来了！Daniel给我换的这个不是电池启动，是通过水管压力推动第二个备用的sump pump启动，这样就不担心地下室淹水后电的sump pump坏掉。这个sump pump太先进了！

@optimist_too 那为啥水总是有啊，泵不完啊？ 
可能可以去室外看看水排去哪里了，或者室外水管排水有情况。水又回流去室内． 
可能是水泵螺旋桨壳子的螺丝腐蚀脱落了  螺旋桨一直在转但是水抽不上去。 
拆了换几个螺丝把盖子拧上就行了 
墙外的管子出水口，可能需要离房远。 
同意！ 起码6 - 10米以外。

    `},{title:"接送",content:`
    *******大普林华人生活群信息: 接送***************
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

大家好，请问有接送机的司机师傅推荐吗？从西温莎到JF K 的
@Lily Chen_普林斯顿 我们用的是你发的list 上的东歌旅游车，West Windsor送机JF K往返280，mini van, 去机场3人，返程1人，四个行李箱
												请问知不知道Uber 和Lyft 这些预约凌晨四点去机场的专车靠不靠谱呀？
很担心到时候没有车来接我们[捂脸
我们一家人12月31号凌晨四点从普林downtown出发去LaGuardia Airport
我在中文报纸上找到陈师傅 609-380-3966，准时周到
$接190， 送170 单程去纽约机场

东歌旅游车包车机场接送
6097213702
$230单程去纽约机场
@Xiaoguang 我們都用東歌机場接送服務 他的微信ID Kevin-Guo78288

机场接送
(848)248-8885

请问哪位有接／送机场的师傅微信／电话？@Moshe +1 (973) 727-6295 Frank Wang

尹敏师傅-wxid_thveqkrb6gde12
目前还是接送，或者小型旅游，鉴证服务等，收费一般是送一百八，接二百 
Neward只要八十
送机简单，接机会花更多的时间。
6097218805

请问，大家有靠谱的能推荐的接机服务吗？以及，半夜从JFK接机需要多少钱？
@Ethan 我有，220元，半夜大车，小车200元
y9096155005

请问一下，谁有送机场的司机的联系方式吗？谢谢🙏
浩哥
Haoge681027
还有 bugbug-bugx3这位师傅

@麻雀鼠 大群有群友推荐陈师傅，微信号：liyongbin602529
@Lily Chen_普林斯顿 这个师傅不错

请问哪位有接／送机场的师傅微信／电话？@Moshe +1 (973) 727-6295 Frank Wang

@Xiaoguang (848) 248-2608大龍先生，机场接送，不过叫Uber比较便宜

云龙
微信号：w7326681913
你好！去Newark，你是住普林斯顿吗？费用是60元起？人数、行李多、和夜间价格会变化
正常3-4人，3-4件行李就是60元，单程是70元，双程接送都找我每趟60元
$240单程去纽约机场
@Lily Chen_普林斯顿 接送机反馈：云龙不接凌晨单，说太早起不来

@Fran 你可以联系Yongbin Li (609) 216-8105 收费合理，纽约、费城、纽瓦克机场都去，用过的朋友都满意
哪位知道从纽瓦克机场坐火车到普林 机场出来到纽瓦克火车站是要走过去还是有什么接驳车之类的？
@Lucy- Princeton 裝一個NJ TRANSIT的app
AirTran到每個幾樓。不是免費的22美元（已經包在NJT的票價裡，需要那張票進入）。 NJT 有一站專門去機場（叫EWR)，不是紐瓦克Penn Station。
從普林斯頓去NY JFK: NJT 到NYC PennStation, 在裡面轉Long Island Railroad (LIRR)去（停）Jamaica 的车（多条线路都可以，两站左右）（off-peak City Ticket 才$5）； 在Jamaica 转AirTran（$8）
先在機樓坐AirTran到NJT(先無需買票）。在那裡買NJT的票去Princeton Junction. (需要那張票進入）。 然後去Trenton 方向的站台。一定要上去Trenton 的火車，其它終點站的火車不能上。
在機樓裡AirTran去NJT方向好像叫RailLink.

需要提前买票吗？NJT我知道怎么买
不需要提前買票。但是如果有LIRR的App, 可以提前買好票，到時激活（activate）。 AirTran 則可以當場買票，也可以用紐約地鐵卡直接進去。

    `},{title:"孩子音乐钢琴",content:`
    *******大普林华人生活群信息: 孩子音乐钢琴***************
为服务大普林地区的居民，本群定期发送生活服务信息，全是群主在各个微信群收到的微信信息集中，完全基于个人推荐，无法保证信息真实，用前请货比三家。也欢迎各位群友发送评论和信息，及时登出反馈。群主微信号：yalichen15

普林斯顿六月份新来的一位钢琴教师：王迦勒博士。毕业于莫斯科国立音乐学院，他曾是大学教授、博士生导师、国际比赛评委、五四青年奖章获得者，甘肃兰州人。他的很多学生取得了英皇考级（ABRSM）的Distinguish成绩、国际比赛的一二等奖、考取了世界多所学校的附中、本科、硕士及博士。王教授将在今年6月中旬正式移居普林斯顿，为孩子从事正规系统化的钢琴训练及音乐熏陶，帮助学生实现不同等级的目标。目前正在招生。有需要的爸爸妈妈们请及时加王教授微信（微信名：calebwang330）入群咨询。
@普林斯顿陈老师-文书辅导 我已经开始上王迦勒老师的课了，非常优秀

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
打这个电话问问，+1732 887 4297 @龍行天下 

钢琴老师Fang-Ting Liu Piano Teacher Piano Teacher
(609) 520-8999

钢琴老师婉玲
微信号： pianolu0215

我推荐这个studio 有钢琴私教 Steam Works studio
135 Village Blvd, Princeton, NJ 08540，Phone: 1(844) 265-9880
Email: info@steamworksstudio.com

专业古筝老师：我一个朋友施老师，教学认真细致严谨，上海音乐学院毕业，现在学生已满，如果有空位可以接受新学生。jeansze@comcast.net 如有空位，会及时通知。

    `},{title:"修汽车",content:`
    *******大普林华人生活群信息: 修汽车***************
为服务大普林地区的居民，本群定期发送生活服务信息，全是群主在各个微信群收到的微信信息集中，完全基于个人推荐，无法保证信息真实，用前请货比三家。也欢迎各位群友发送评论和信息，及时登出反馈。群主微信号：yalichen15

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
🏎️ON THE WAY AUTO ☎️:8482646822 (办公室电话）
📞: 7323225582 (Emergency ）🈺️业时间 8:00-6:30 周一至周六 店铺地址：111 Canal Road  
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
@Xin Honda Princeton dealership

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

@Theresa Huang 换机油的店“STS”778 State Rd, Princeton, NJ 08540
美国

@王卓 haha, 我刚刚研究过。1）BNB car wash on route one. 732-821-0100。2）(732) 803-2860 Markus. On route 27. He is very busy and booked till November

Gino’s Auto Body Shop
4360 NJ 27
Gino body shop	7322970609
Gino’s做exterior的，interior可以找KPS Princeton garage

@Fiona , 206 上的mavis discount tire, 1 号公路的 pep boys 。 用过这两家，感觉都不错

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
@Ryo 这位邻居有修车铺，口碑好
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

@CindyGustus https://www.princetonhonda.com/?utm_campaign=gmb&utm_medium=organic&utm_source=local
Just called last week. Interior detailing is $100 and exterior with wax is another $100.@CindyGustus 

    `},{title:"口腔整形医生/种牙/牙保险",content:`
    *******大普林华人生活群信息: 口腔整形医生/种牙/牙保险 ***************
为服务大普林地区的居民，本群定期发送生活服务信息，全是群主在各个微信群收到的微信信息集中，完全基于个人推荐，无法保证信息真实，用前请货比三家。也欢迎各位群友发送评论和信息，及时登出反馈。群主微信号：yalichen15

整牙
@菲菲 Dr. Chi Taw Lin, DMD,
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

\uFEFFDr. Teresa Oh
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


@人在他乡 如果是小孩做，而且将来小孩是要当明星的话，可能要考虑 Dr. Chen-Cabri. Dr. Chen 的诊所在Ridgewood, NJ和Flushing Chinatow, Queens,NY. Dr. Chen 可以称为亚裔女性在职场上的楷模。对工作的态度和技术和知识是让我们特别感动。女儿长大也想做Dr. Chen 这样的医生。医生工作是为让小孩有个美丽笑容，而不是看要交的整牙费用。陈医师在哥伦比亚大学教整形牙科。陈医师收的费用并不贵。但要去看陈医师，路那么远。是要有决心，有能力的。

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
 @K - 我没有用过Dr Jason Chang. 我们在Brighter Dental 服务比较基础，成人仅仅是就是洗牙，孩子做了隐适美（Invisalign）牙齿矫正。我女儿很喜欢她矫正牙齿的牙医，带牙套挺负责任的。

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

@普林斯顿陈老师-文书辅导 我植牙是曼哈顿的一个韩国医生不错现金给折扣后3700，这是牙医给介绍的，需要的话给你电话

我母亲去一个叫Magic Dental 的家庭口腔诊所。她拔牙，做了全口假牙，还有植牙。折腾了好几个月，花费不少。她用的Specialist是 Dr. Jeffrey Rothstein。  Dr Jeff 是全科口腔医生，他在植牙方面很有经验，另外他们有一个中国护士，沟通很方便也很有耐心。我觉得他们植牙价格还比较公道。https://www.magicdentalnj.com/about-us/

我们用Brighter Dental,  比较近。服务我也没啥好抱怨的。我女儿也在那里做了envisalign.
她下面植了两颗牙柱（白金），支持下面的假牙，这样假牙在嘴里就不会移动。 两颗$6000。上面没有植牙。
医生说看牙床骨头的情况，一般固定下面假牙需要植2颗或者是四颗。

@Lily Chen_普林斯顿 各位群友，请推荐一个种植牙的医生。谢谢

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


请问有可以种牙的牙医推荐吗？
@杨依诺Jing 种牙我用的Prestige Oral Surgery，也在楼主的list里
医生态度一般，技术不错，
@MiniDot 谢谢，会不会很难约呢？
不难，你要牙医开好referral就行。去了就是拔牙植牙，多了一句不和你啰嗦

如果butget 是考虑因素的话，可考虑去纽约 contemporary dental inplant. 他们做得多技术也好, 比local省1/3 到1/2, 但是如果牙骨有问题他们不管。总共要去4-5次。

还有他们不管保险，没有out of network coverage 的不合适

    `},{title:"电工",content:`
    *******大普林华人生活群信息: 电工 ***************
为服务大普林地区的居民，本群定期发送生活服务信息，全是群主在各个微信群收到的微信信息集中，完全基于个人推荐，无法保证信息真实，用前请货比三家。也欢迎各位群友发送评论和信息，及时登出反馈。群主微信号：yalichen15

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

@Y an Qi    James (215）266-2643，我家盖新房子时用的老美电工，很专业人也很好

Tony DiFalco
Electrician
+1(609) 751-2401
1st hour $165then $155/hr
我来推荐一位电工，靠谱！
Princeton local

请问大家🈶️电工推荐吗？我家厨房stove不work了，看error code是电有问题我的电炉的问题今早解决了
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

@All 请问群友有用过接房外power outlet（for outside patio lights) 的电工吗？
有。邓浦(609) 240-9088

    `},{title:"房屋里外喷涂刷漆",content:`
    *******大普林华人生活群信息: 房屋里外喷涂刷漆 ***************
为服务大普林地区的居民，本群定期发送生活服务信息，全是群主在各个微信群收到的微信信息集中，完全基于个人推荐，无法保证信息真实，用前请货比三家。也欢迎各位群友发送评论和信息，及时登出反馈。群主微信号：yalichen15

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
@麟  Mercer painting. 体验非常差
@苏超 如果你家整栋房子刷外墙，我可以给你个参考，西雅图的single，外墙面积估计你家的2/3，形状不复杂，也是不sanding，就是powerwash，calking，总价9000，去年八九月，一直给我干到十月份，前后拖拖拉拉两个月完工。一万出头目前行情，我估计家家如此
@楼 Mercer painting Ali 大家谨慎选择。洗完墙后，嫌从前报价低，想偷工减料。最后感觉不划算，终止了合同。弄得我匆忙找另一家，还要付给他们powerwash 钱。非常不守信用
提供另一个input, 公平些说，Mercer painting挺不错的，价格公道，刷漆和power wash, 很负责做得也仔细，顺便帮我把地线漆了马蜂窝也去除了没有额外收费
我们家现在在做deck painting, 是看了群里介绍的 Mercer painter. 刚刚做了power wash, 还没开始刷 。 但是他们不修坏掉的木头。
@Lei Mercer painter 给我家做过power wash.客观的说，比certapro细心太多了。刷漆没用过

@All 有没有用过的house power wash company 可以推荐的？
清洗外墙.屋檐刷漆
Olivio
Alvarado
60967298630
住宅
6099648537

之前用过Ned Stevens洗外墙。他们也洗窗子。还可以

@荷 刚用了ori刷外墙，觉得还可以
Ori 609-668-7488

@Lily Chen_普林斯顿 我用过一家洗窗户的公司，感觉还可以：https://www.fishwindowcleaning.com/Trenton-NJ-669/?gclid=EAIaIQobChMIwJX0hfSvgQMV0NPICh2LqQNqEAAYASAAEgL9h_D_BwE Sent from my iPhone

Caceresm.
Painting Llc
609·937-0947    PRINCETON,NJ

609-668-7488
PAinting ANDTRIM.COM
INTERIOR & EXTERIOR by Ori Avisar
@短 我用了这家。整体还算满意

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
    `},{title:"割草/庭院清理和冬天铲雪服务",content:`
    *******大普林华人生活群信息：割草/庭院清理和冬天铲雪服务 *****
为服务大普林地区的居民，本群定期发送生活服务信息，全是群主在各个微信群收到的微信信息集中，完全基于个人推荐，无法保证信息真实，用前请货比三家。也欢迎各位群友发送评论和信息，及时登出反馈。群主微信号：yalichen15

庭院清理的公司冬天一般都做铲雪服务

Wilson’s Landscaping.   老板Wilson Reyes.  电话 6099156210，我家用的这家公司，非常经济实惠，做的很好。@Lily Chen_普林斯顿 可以加进去

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

Erasto：(609) 357-8772 他们夏天做 landscaping 冬天做cleaning, painting 啥的。@路人乙 				
Carlos	9085101081			
割草服务比较好，价格实惠	

请问大家有靠谱的、价格合理的landscaper 推荐吗？可以剪草、修建、除杂草、维护草坪、帮种花啥的。谢谢。
我家一直用的Carlos +1 (609) 649-4850@三妹 

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

    `},{title:"空调/Heater",content:`
    *******大普林华人生活群信息: 空调/Heater ***************
为服务大普林地区的居民，本群定期发送生活服务信息，全是群主在各个微信群收到的微信信息集中，完全基于个人推荐，无法保证信息真实，用前请货比三家。也欢迎各位群友发送评论和信息，及时登出反馈。群主微信号：yalichen15

修和保养空调/AC
David Au(空调修理)
+1 (609) 635-9590
不谢，一般的空调服务都是要是会员才有24小时内的预约，否则基本至少三天之后。我之前联系过几个，都是说刚好三天后才有空，严重怀疑是行业规矩，让你买会员的。而且我约了一个90块钱的诊断服务，他们搞了一个多小时跟David 免费20分钟的结论是一样的
David Ou 609 635 9590 他修暖气和空调的，会说国语,是香港人。去年我找他加过氟。大概300刀请问各位家长朋友，有哪位医生接受NJ FamilyCare的well point 健康保险卡的吗？
去保险公司的网站找医生单。输入你的邮区号。这是找收这个保险医生的最快途径。不过最好还是要打电话给医生的办公室核实一下。
@短腿的兔纸 看到群里之前有人推荐的空调师傅，我没用过。（908) 787-7222，陈师傅

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
@L 陈师傅去年冬天给我家换过二楼整个system 的管道，他的活做得挺好的，细致耐心，服务好，也乐于分享
 
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
@joy4fun 非常感謝🙏提供信息。我是准备请人來換water heater 他说要裝這個，350元，以前都沒有。現在了解了，那就准备裝，再次感謝
如果是自家用的，我會建議買10年warranty的，因為6年一轉眼過去。別忘了要申請township permit (必須有plumber Licence 的人做）
@Gloria P ，是請plumber Licence來做，他一直強調要裝這個，原來二十来年都沒有，他幫忙申請permit，哦，我要问他買几年warranty 謝謝🙏

打算换AC 和Heater 了，哪家公司可以推荐？先谢谢啦
@Jun 建议用Costco，从它的service网站约，价格确实不错，Costco还给10%还是15% back
不一定需要ac 和heater一起换 缝缝补补又三年。但一起换价格确实不错
@Jun PSEG 好像常年有补贴项目，可以比较一下。
@闲不住的双手 PSEG说不换我家的
说labor 太多

华人jack师傅维修的不错，不妨也询问下价格
+1 (732) 543-5799 Jack
JACK DONG HVAC LLC
732 543 5799
jackdonghvacllc@gmail.com	
@RoRo  Jack Dong ⬆️非常好的师傅

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
@Xin  (908) 787-7222，陈师傅

Andrei Contractor Ac Furnance
phone
(732) 309-1759
师傅说的七八千就是换冷气+暖气的价格。
我们当时师傅说了townhouse 3000多，7，8千是house 的价格
联系好了，然后不回音，怎么联系都不再回答。太不负责任了。

前几天看到群友问热水炉的问题，我家的炉子突然水不烫了，只是温，没有看到有漏水、不知道问题出在哪里，有推荐的维修师傅吗？或者是需要换掉？谢谢大家
Theo Ex Plumbing and Heating LLC2
Phone# 609 838 1843​theoexpiumbing@gmail.com​
Permit fee​76.00​76.00​
Total​$1,226.00​
Theo Plumber
609 851 2401
@Fran 我找的是 theo，一个意大利老外，响应比较快。我前几天换了锅炉，3700刀，我查了下锅炉的料本价在1500元左右。自己装的话估计拿不到permission
活干得还可以，这几天我还得找Theo给装个循环泵。

專業冷暖維修·安装
冷暖器/餐馆冰箱/更换热水炉/电工维修
費城老趙:
2673569608

请教大神们：換water heater 一定要装flood stop and pan吗？謝謝🙏
Home Depot 和五金行 都有賣，最好裝，因為 water heater 壽命 10-20年， 壞的時候會漏水，總是會造成不方便。
pan, 一定要金屬的，不能用塑料的。
一漏水時，會自動停止供水、燒水，發出警報聲。
@joy4fun 非常感謝🙏提供信息。我是准备请人來換water heater 他说要裝這個，350元，以前都沒有。現在了解了，那就准备裝，再次感謝
如果是自家用的，我會建議買10年warranty的，因為6年一轉眼過去。別忘了要申請township permit (必須有plumber Licence 的人做）
@Gloria P ，是請plumber Licence來做，他一直強調要裝這個，原來二十来年都沒有，他幫忙申請permit，哦，我要问他買几年warranty 謝謝🙏
 
前几天看到群友问热水炉的问题，我家的炉子突然水不烫了，只是温，没有看到有漏水、不知道问题出在哪里，有推荐的维修师傅吗？或者是需要换掉？谢谢大家
@Fran 我找的是 theo，一个意大利老外，响应比较快。我前几天换了锅炉，3700刀，我查了下锅炉的料本价在1500元左右。自己装的话估计拿不到permission
活干得还可以，这几天我还得找Theo给装个循环泵。

N. C. Jefferson
609 924 3624
(plumbing, heating, air con)
 
陈磊
908-787-7222
家里要换水暖的heater(radiant) 和boiler，请问大家用过陈磊师傅吗？感觉他的报价有点贵，不知评价如何？
@L 陈师傅去年冬天给我家换过二楼整个system 的管道，他的活做得挺好的，细致耐心，服务好，也乐于分享
家里mini split空调坏了，跟陈师傅询价，要价1600美元，比空调本身价格还贵。

请教各位， townhouse换冷气大概的价格应该多少？ 我根据大家推荐请了两个师傅来估价， 一个4600， 一个7500，哪个靠谱啊？多谢各位有经验大神

@RoRo 一个Jack Dong董师傅， 一个David Au， 都是群里推荐的

jack dong我用过 买的costco L那个牌子的 好像也就是差不多价格 

@RoRo 好的， 谢谢， 他给我报的4600， 另外我家空调2012 年装的， 不制冷他说是因为氟利昂都漏光了，修不好，建议换，是这样的吗？

那你让david修吧。他前几天帮我加了氟利昂 也说漏了。花了 400 
David报价换AC7500。David报价包括暖气空调一起换。
@RoRo 嗯，谢谢你， David的牌子是carrier， Payne。比较好的。
比jack那个牌子好吗 他的好像是和costco的Lenox

大家早上好！请问有暖气管道检查的公司推荐吗？
AJ perry 
@Xin Tao @Mr.Zhao 建议不要用AJ Perry. 不得不用时，也要多请2家公司竞标
是的，多问几家询价，差异特别大

sign up PSEG worry free program. 15 天后，让他们过来检查，检查和维修费用全cover
@樱花时节 最好加入PSEG Worry free Program, 一个月三件电器十几元，打电话他们随时来收，临时叫外面人修，出来一次没毛病至少二百。

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

    `},{title:"牙医/牙髓科医生",content:`
    *******大普林华人生活群信息: 牙医/牙髓科医生 ***************
为服务大普林地区的居民，本群定期发送生活服务信息，全是群主在各个微信群收到的微信信息集中，完全基于个人推荐，无法保证信息真实，用前请货比三家。也欢迎各位群友发送评论和信息，及时登出反馈。群主微信号：yalichen15

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

Sabinsky Orthodontics
609-252-0233
908-369-8900

儿童和大人牙医
Eastern Dental of Lawrenceville
609 587 6300
还好！大人孩子都在这儿看牙，没有过不好体验。

@Reb 我女儿对牙齿治疗极度恐惧 试过了两个成人医生都不行 被推荐了Montgomery pediatrics dentist 效果出奇的好 全程吸这笑气看着动画片就拔了牙 完全没有挣扎 Montgomery Pediatric Dentistry
211 Commons Way, Princeton, NJ 08540
(609) 297-1716 https://g.co/kgs/Xgjd8h

Joyce Guojun Ma, DDS PhD MAGD MICOI
Prime Dental Care
77 Tamarack Circle Montgomery NJ 08558
www.PrimeDentalSmiles.com
Phone: 609-688-8818
@荷 不客气。这个大夫是各科全能
推荐牙齿全科马大夫，技术没得说。

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
@🦌Xiaohui🦌 Sun Rising Dental是孙医生开的说中文，不过我不确定收不收Medicaid和Medicare。可以打电话问问
@Xiaohui Sun Rising Dental是孙医生开的说中文，不过我不确定收不收Medicaid和Medicare。可以打电话问问
@Haixia Li 我爸妈在Sun rising dental 孙医生那里自费拔过牙，还做过deep clean. 还不错，价钱和我之前在曼岛china town comparable.

@SYJ 牙医推荐Edison的黄若君  ，虽然有点远，但是诊所里的每一个人都很好 
+1732-819-0505

Precision Dental Group PC
491 Amwell Rd #204,
Hillsborough Township,NJ08844,United States
Closed· Opens 10am Mon
Dr.Chu會講Mandarin, Dr.Wong會講Cantonese.  這間牙醫診所容易約到理想的較近期的時間。
如果沒有牙科保險，這家診所提供了一個一年期的類似保險的優惠。

Guojun Ma, DDS, PhD您们谁在马医生看过牙，怎么样？
@Qihong（rose15） 我在马医生看牙，不错。推荐

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

@peng @Lily Chen_普林斯顿 今年夏天用过。推荐
看牙周病
Center for Contemporary Periodontics and Dental Implants
Dentist in Lawrence Township, New Jersey
34 Franklin Corner Rd，  Lawrenceville   hool    
Lawrenceville,NJ 08648  206     
295
(609) 883-6900

群主你好 我想增加一点牙医推荐和反馈：我推荐大家避雷Lawrence dental implant&periodontics的Dr John Lu，非常rude 说我的牙需要拔掉植牙并植骨。我就去找了Dr Stephen Hudis，他非常专业，他说完全没有问题，注意清洁可以继续用
两个医生的判断皆然不同 但是Dr Lu的bedside manner很差 让我很不舒服
@Lily 我们跟Dr. John Lu 好几年时间，没觉得他有什么不好。可能个人体验不同。
我植牙的医生是John Lu, 已经十几年了，还不错，但是我看群里有人不推荐他，所以谨慎选择吧

请问有哪位邻居做过根管治疗（root canal），有好的orthodontics推荐？或者哪个医生做得不好需要避开的，谢谢！

我今年在孙医生处做的根管 挺不错的 

Endodontics/牙髓科医生
@妫 我用过Jean Kang Endodontics 很好 
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

@Lily Chen_普林斯顿 群主，我去年中才搬到普林斯頓來。今年一月一日（星期五）晚上開始牙痛，眼淚都出來了。接下來兩天是公眾假期和星期日，我在網上搜了牙醫的電話，一家一家地打去留言。星期一早上又繼續打，好多家都約多天以後。最後打了一個老牙醫的電話，接電話的先生說老牙醫兩年前過世了，他接手了這個診所。我說我的牙很痛，已經忍了兩天，要盡快看。他說他正在上班的路上，回到診所給我電話。很快他就再打來，叫我當天下午去。朱醫生很認真負責，他說他會因為掛心某些病人的情況，睡不着覺。即使他讓我轉诊別的醫生，他還會跟進，跟其他的醫生溝通。
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

@Lily Chen_普林斯顿 朱华医生很好：(908) 236-7800，比较远，在：
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
@青 Edison ⬆️Winston Chen Andrew Chen 陈医生，跟护士讲是很痛，她们会帮你安排的

    `},{title:"家庭医生和儿科家庭医生",content:`
    *******大普林华人生活群信息: 家庭医生和儿科家庭医生 ***************
为服务大普林地区的居民，本群定期发送生活服务信息，全是群主在各个微信群收到的微信信息集中，完全基于个人推荐，无法保证信息真实，用前请货比三家。也欢迎各位群友发送评论和信息，及时登出反馈。群主微信号：yalichen15

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

@huangxiaoguang @L 這是我的家庭醫生，在Edison，是個會講粵語的ABC。他在大機構RWJ工作。這是我和先生去看的醫生，我倆覺得不錯。我們覺得Edison不是太遠，看完醫生還可以去大華99和Hmart買菜，所以沒有在普林斯頓找醫生。女兒就在普大看校醫。

@小飞侠 我們家孩子一直看的是Plainsboro的陳小梅醫生，十多年了，覺得她很仔細很親切 6097164800
想补充一下，如果是中青年，不太推荐plainsboro的陈晓梅，这里全部都是老人，每次约过来我就要等差不多30分钟以上。她本人也比较保守lay back 不太适合中青年群体。觉得感觉不是很好。然后。。他们有老年人优先的policy我约了8：45，结果两对四个老年人约都在我后面都进去了我等了半个小时。中青年人的时间貌似不是时间

@Shirley Zhong 我的家庭医生去年退休了，找了好久定了east Windsor 的 Irene kotok. 诊所本身一般， 医生的医术如何我其实也不确定，但她确实很caring. 这一点很突出。在我看来作为家庭医生这很重要

推荐Dr. Shao ZHENG, 666 Plainsboro Rd BLDG 100, Suite 1H, Plainsboro Township, NJ 08536 Tell: 609-751-5226. 郑医生在17 年前给我家孩子在她Edison的诊所看过病。
@王小曦 儿科推荐郑劭，讲中文的女医生，在爱迪生和普林开业二十多年经验很丰富了，口碑也非常好。但不确定是否看无保险的病人，可以打电话问下。Dr. Shao ZHENG, 666 Plainsboro Rd BLDG 100, Suite 1H, Plainsboro Township, NJ 08536 Tell: 609-751-5226. 
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

    `},{title:"电器修理",content:`
    **********大普林华人生活群信息: 电器修理 ***************
为服务大普林地区的居民，本群定期发送生活服务信息，全是群主在各个微信群收到的微信信息集中，完全基于个人推荐，无法保证信息真实，用前请货比三家。也欢迎各位群友发送评论和信息，及时登出反馈。群主微信号：yalichen15

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

如果你的动手能力还可以的话，查到洗碗机的厂商和型号。去YouTube查看这个洗碗机的常见故障和维修方法。如果觉得你自己可以修，就去Amazon买零件。
@Donglin Liu Mile Font：(732) 934-0443
我家小洗碗机是他修的

请教谁能推荐装抽油烟机的师傅吗
合师傅油烟机
phone
(347)276-6826
@Junsheng Cao 这个师傅连带卖樱花油烟机 价格很公道
是在曼哈顿法拉盛的。

有没有安装抽油烟机的师傅推荐
@Song 可以问问Kevin 6093062600 有空没，我家的就是他装的

大家有哪个装抽油烟机师傅的推荐？谢谢🙏
@CWY  直接找EDISON方太
现在开在美东里
咱们这的美东

我推荐一下Michael Fout，手机（732）934-0443，专门维修电器如冰箱、空调、灶台点火系统等，人很和蔼专业，我家找他修过冰箱内落水、灶台点不着火。

@all 请问大家有修冰箱的师傅推荐吗？🙏
Michael Fout (732) 934-0443, 他专维修电器，我家冰箱和灶台点火器都是他修的。

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
 @人在他乡 我家上次Honda发电机坏了是拿去这家修的。打电话去问问，把你家发电机的品牌和故障情况告知他们，看他们是否修理，我不知道他家是否有上门服务。family run business,态度挺好的，价格也合理。 
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

Dryer	
我给你个修的，洋鬼子你试试看6097516097

修车曾师傅	7323225582		
非常便宜	
曾师傅有自己的修车铺。他比dealership实在便宜太多了。

大家好！想找一个懂行修理落地大钟师傅，如有这方面的师傅麻烦推荐一下．谢谢
这个老太太，家传的，前年帮我修得很好
修钟老太
电话
(908) 421-3741

@毛毛 Trenton Farmer Market （其实在Lawrence Township)里有个钟表店。老板/师傅说广东话。

您身边的折扣电器专家，覆盖New York & New Jersey !
专卖LG三星电器，全部单品五折起，我们提供送货&安装&调试等一条龙服务。
有全新未开箱&开箱商品，开箱部分商品会有一些凹痕和划痕但不影响正常使用，件件都有质保~多买多优惠~
产品种类:冰箱、洗衣机、烘干机、炉头、炉台、烤箱、洗碗机、微波炉、电视机、抽油烟机等。
New York: 909-699-2899
153 19th street, Brooklyn, NY11232，周一至周六(9:30AM-6:30PM)
New Jersey:609-917-00192208 Hamilton Blvd, South Plainfield, NJ07080，周一至周六(9:30AM-6:30PM)
@optimist_too 之前你推荐过一个卖洗碗机的地方，电话已经没人接听了，在South Plainfield，Appliance 4 Less。他们搬家了吗？@雁红 Daisy 他们老板说打这个电话6262620698。

@RoRo 以前换HVAC都是那个公司（Home Depot or PSE&G)去镇政府申请permit。他们会把镇政府的费用加在你的帐上，但不会另加人工费。
你好！ 若買了 PSE&G 的 Worry free program 給老舊的 HVAC， 是否換新的時，他們會馬上到底服務嗎？又可否挑品牌？ 自己要付安裝費、主機費嗎？
> \uFEFFWorry free program 只包你现有HVAC的零件和保养人工。当你的HVAC已经老得无法修（或者无零件可卖），他们就推荐你买一个新的系统。你自己要付全部的钱。PSE&E会提供他们卖的HVAC资料和价钱。你也可以去Home Depot, Lowe’s, Princeton Air和其它地方比牌子，质量，和价钱。
Worry free program 只包你现有HVAC的零件和保养人工。当你的HVAC已经老得无法修（或者无零件可卖），他们就推荐你买一个新的系统。你自己要付全部的钱。PSE&E会提供他们卖的HVAC资料和价钱。你也可以去Home Depot, Lowe’s, Princeton Air和其它地方比牌子，质量，和价钱。
在其它地方买的系统也还是可以再买PSE&G 的Worry Free program. 在PSE&G买的系统，他们有时会让你分期付款。
无利息。HD有时也有这样的促销活动。
去年我的冷氣不夠冷。PSE&G來看了，說系統沒有漏洞，但是弗利昂很低。加上弗利昂。Worry Free就包他的人工費，我還要付弗利昂。
这样看下来PSEG。worry free 很好嘛！现在有执照的人工很贵。

福利昂花了多少 想横向比较下 
我们当时加人工好像四五百

    `},{title:"孩子小提琴吉他Flute二胡",content:`
    *******大普林华人生活群信息: 孩子小提琴吉他Flute二胡 ***************
为服务大普林地区的居民，本群定期发送生活服务信息，全是群主在各个微信群收到的微信信息集中，完全基于个人推荐，无法保证信息真实，用前请货比三家。也欢迎各位群友发送评论和信息，及时登出反馈。群主微信号：yalichen15
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

@🐱喵了个咪（Martin‘26） 我家孩子跟着这个老师学过二胡 
魏建国
work
(732) 991-2135
home
(732) 249-6331

@普林斯顿陈老师-文书辅导 @JS 这是一个很好的大提琴老师，推荐
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

@喜多妈 ，new school for mysic study, 是一間位於kingston的音樂學校。westminster conservatory 有教小提琴，看你需要suzuki Violin或是只要私課

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

    `},{title:"会计",content:`
    *******大普林华人生活群信息: 会计***************
为服务大普林地区的居民，本群定期发送生活服务信息，全是群主在各个微信群收到的微信信息集中，完全基于个人推荐，无法保证信息真实，用前请货比三家。也欢迎各位群友发送评论和信息，及时登出反馈。群主微信号：yalichen15

会计师

请问有报税的会计师推荐吗
@peng 你好，这是报税的林会计，很负责．
@Lina 6097217723 谢谢


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

@Polytec 有个华人会计师叫Amy的，自己开业，还不错，amywangcpanj@gmail.com 你可以发个邮件问问

美国林会计师 Joseph Lin, CPA
昵称：Joseph Lin, CPA
微信号：lilu-16888
(732) 762-0288
这个会计我用了快四年了，人做事非常的认真，而且很热心


请问大家有没有比较靠谱的帮助公司注册，报税的会计师推荐？
@Donglin Liu 我們用何德發會計師事務所三十年了，非常可靠。
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

    `},{title:"孩子综合夏令营精华",content:`
    *******大普林华人生活群信息: 孩子综合夏令营精华***************
为服务大普林地区的居民，本群定期发送生活服务信息，全是群主在各个微信群收到的微信信息集中，完全基于个人推荐，无法保证信息真实，用前请货比三家。也欢迎各位群友发送评论和信息，及时登出反馈。群主微信号：yalichen15


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

    `},{title:"网球",content:`
    ******大普林华人生活群信息: 网球***************
为服务大普林地区的居民，本群定期发送生活服务信息，全是群主在各个微信群收到的微信信息集中，完全基于个人推荐，无法保证信息真实，用前请货比三家。也欢迎各位群友发送评论和信息，及时登出反馈。群主微信号：yalichen15

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

    `},{title:"地板/地下室整修",content:`
    *******大普林华人生活群信息:地板/地下室整修 ***************
为服务大普林地区的居民，本群定期发送生活服务信息，全是群主在各个微信群收到的微信信息集中，完全基于个人推荐，无法保证信息真实，用前请货比三家。也欢迎各位群友发送评论和信息，及时登出反馈。群主微信号：yalichen15

地下室你可以联系顿普 (609) 240-9088 3年前他帮我做过 做得还不错

地下室 (609) 203-0033

Basement everything
Serving NJ, PA, and NYC, Jersey City, Edison, Freehold
OPEN
1-732-697-0557

Ryan Basement
phone
+1(215) 801-5470

+1 (732) 889-6853. 磨地板上漆 $2/sqft 非常好的师傅 就是太忙不一定能接电话 可留言

Floor   赵师傅     
赵勇 (732) 397-5770 。 他专做地板。又快又好但不便宜。
做地板的师傅
赵师傅 732 397 5770
做地板的赵师傅 坐地起价。而且涨的不少。不建议
赵师傅做的感觉上确实好 
Basement waterproof Sal Mendola         609 375-0466            还好，要讲价

郑海雪-换地板
微信号：wxid_exps314z628v12

bill电话7323221378handyman
装修地板

@梅子 @Han @Chen Hong 推荐打磨地板的人Dr. Dustless, https://www.doctordustless.com 磨出来的灰尘几乎全部用管道排到室外，做完味道也不是非常厉害

@梅子 地板 Manuel +1 (732) 889-6853

我们用过carpet centers of nj 还不错  
732-254-2060​
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
@J. Bai Kevin 6093062600 你打电话问问，留voicemail把详情说要10:43

请问大家有做basement 结构的公司吗？我家地下室的结构柱子要换
@建筑师_祥 Paul Pennachi是做泥土工程，质量价格都很好，(609) 203-0033

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

    `},{title:" 妇科大夫",content:`
    *******大普林华人生活群信息: 妇科大夫 ***************
为服务大普林地区的居民，本群定期发送生活服务信息，全是群主在各个微信群收到的微信信息集中，完全基于个人推荐，无法保证信息真实，用前请货比三家。也欢迎各位群友发送评论和信息，及时登出反馈。群主微信号：yalichen15


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

    `},{title:"肠胃病专科医生",content:`
    *******大普林华人生活群信息:肠胃病专科医生 ***************
为服务大普林地区的居民，本群定期发送生活服务信息，全是群主在各个微信群收到的微信信息集中，完全基于个人推荐，无法保证信息真实，用前请货比三家。也欢迎各位群友发送评论和信息，及时登出反馈。群主微信号：yalichen15

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

    `},{title:"修车库门",content:`
    大普林华人生活群信息: 修车库门 *************** 为服务大普林地区的居民，本群定期发送生活服务信息，全是群主在各个微信群收到的微 信信息集中，完全基于个人推荐，无法保证信息真实，用前请货比三家。也欢迎各位群友 发送评论和信息，及时登出反馈。群主微信号:yalichen15
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

    `},{title:"水管工",content:`
    *******大普林华人生活群信息：水管工 *****
为服务大普林地区的居民，本群定期发送生活服务信息，全是群主在各个微信群收到的微信信息集中，完全基于个人推荐，无法保证信息真实，用前请货比三家。也欢迎各位群友发送评论和信息，及时登出反馈。群主微信号：yalichen15
 
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
@冗谈 上次我找Harris plumbing 解决下水道堵的问题，觉得他们服务还不错 8332364066
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
A technician from Harris Plumbing...​AA​
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
 
@all 我家热水器管接头处小leaking. 群里有师傅可以帮忙修理吗？谢谢！
@CindyW 刘师傅可以，电话2538809349。

Grade A Plumbing​gradeaplumbinginc.com​​(833) 447-2332​
不错
 
Bob Fredrick Plumbing
(609) 731-8982
 
Robert​​7322364538​​​​​​​​
 
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

 
Theo Ex Plumbing and Heating LLC2
Phone# 609 838 1843​theoexpiumbing@gmail.com​
Permit fee​76.00​76.00​
Total​$1,226.00​
Theo Plumber
609 851 2401
 
Nick @ (973) 727-2105 was a very pleasant, knowledgable, courteous and prompt experience!  

AJ Perry 若干年前用过，还不错  价格也是$99
找AJ perry， 厨房下水道堵塞收费$99。
A J Perri电话：732-372-0788
PerriDanny Lango 732 439 7839
 寻找Plumbing或HVAC公司, 不能用AJ Perri， 善长将小问题当成大工程给你报价
AJ Perri通下水道好像只是第一次用给便宜，以前都是99，但是第二次以后就是280起了，我第二次换了老公名字电话啥的都不行，一个地址只给便宜一次推荐一个plumbing公司，叫AJ Perri- Tinton fall, 电话(800)287-2164。$130通下水道，很及时，打了电话2-3小时就到了，24小时7days available。反面对比Harris plumbing, heating and electrical, 周五打了电话，只能约周一，周一又推到周二，一直没人联系，后来好不容易有technician联系，要价$350， flat rate～～
今天用了，不错。我自己陆陆续续折腾了几个月的Kitchen水流不通畅(不是完全堵塞)的问题，解决了。跟OP说的一样，$130, 打电话之后2小时到了。干活的peter很knowledgable, 跟我讲了很多plumbing的知识，还给我解释为什么我自己用工具捅过但没捅捅通的原因。还有管道可能有哪些潜在问题，告诉我后面自己要注意什么，减少pipe后面继续出现堵塞的可能。也没有跟我hard sell任何额外的服务。很赞

这次在试Harris Pluming, $73
Harris Pluming Heating Air and Propane​callharrisnow.com​​8564858353​​Very reasonable ​
bathroom sink drainage problem， cost is very reasonable $73/drain.strongly recommend ​​​​​​​​
Good.​ALL CLEAR DRAIN CLEANING​
24 HOUR EMERGENCY SERVICE

ALL CLEAB​Michael and Anthony Settecase​
DRAIN CLEANING​​
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
 
Valley Plumbing Co.​NA​NA​6096363730​NA​​4 (recommended)​3年前用过修理及replacement, 小工不错​Theresa Huang​​​​​​​
Matt​(800)704-8866​​便宜​
 
Handyman​Nelason​
609-495-4636
 
plumbing​AZ plumbing don​
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
 
@CHARLES 你可以找这家问问，我刚让他家做了drainage。价格不错+1 (609) 743-4563

我来给大家汇报一下，今天麻烦群里的@J考拉 师傅来我家装了净水器。考拉师傅活做得又好又仔细，非常设身处地为客户着想，真是心灵手巧！原来人家国内物理专业，在美国拿的计算机科学的研究生，有空时做做handyman 只是副业，水平确实高，实在高
考拉师傅不错 帮我装净水器也特别
@Lily Chen_普林斯顿 只有微信deep_red28

    `},{title:"杀虫害",content:`
    *****大普林华人生活群信息: 杀虫害 ***************
为服务大普林地区的居民，本群定期发送生活服务信息，全是群主在各个微信群收到的微信信息集中，完全基于个人推荐，无法保证信息真实，用前请货比三家。也欢迎各位群友发送评论和信息，及时登出反馈。群主微信号：yalichen15

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

@WZ  我以前有annual contact with TruGreen for  tree and shrub maintenance.  有这种网状虫巢的时候，他们会来打药。把那巢捅个洞，用药水喷进去，喷透。要在巢破掉、毛毛虫爬出来之前处理。不然草地上都是。 去Home depot 买药买喷雾桶，自己应该也能做。 


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

    `},{title:"保养树和砍树",content:`
    *******大普林华人生活群信息:保养树和砍树 *****
为服务大普林地区的居民，本群定期发送生活服务信息，全是群主在各个微信群收到的微信信息集中，完全基于个人推荐，无法保证信息真实，用前请货比三家。也欢迎各位群友发送评论和信息，及时登出反馈。群主微信号：yalichen15

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

群里朋友： 有砍树公司推荐吗？ 谢
@Noelle 我用了群友推荐的这家。我问了三家，他家最便宜，有license 有保险。昨天来砍的
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
@zyan 我看了四颗大树。3000 但是这个价格要看具体状况。同样的树 一个在路边 一个在后院 价格肯定太差很多 

这家干活认真 价格是我找的里面算低的 而且快。他们有个机器 60尺的树 不用人爬 用个机器砍三次 把树就这么端着放地上

FAUR
Fair Trees Services & Pardicaping
Fair Landscaping & Trees Service NJTC#795890 Alfredo Melgar.
325 Hazel Ave Ewing Nj 08638 Phone:(609)213-4096
Email: fairtreesservices@gmail.com

@夏, Jigang 我前一段砍树找的这家+1 (732) 677-6524找Quirino 一棵树大约不带除根不到1000
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

    `},{title:"驾校",content:`
    *******大普林华人生活群信息: 驾校***************
为服务大普林地区的居民，本群定期发送生活服务信息，全是群主在各个微信群收到的微信信息集中，完全基于个人推荐，无法保证信息真实，用前请货比三家。也欢迎各位群友发送评论和信息，及时登出反馈。群主微信号：yalichen15

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

@苏超(Penny 2025)  我儿子是找学校Gym class的老师，蛮不錯的
Lennygudoto@princetonk12.org

李教练+1 (848) 391-8961
极耐心，人头熟，没有李教练我的路考过不了
410，六个小时，教三次，但是要去Edison

在问一下教开车的新泽西驾驶学校？要求会说英语。谢谢☺️

@Rebecca 我们用的这家：https://wbdriving.com/ 觉得还不错。
@Rebecca 不客气。笔试可以在他们那里考，不用去MVC. 这个很多驾校没有。

    `},{title:"健身",content:`
    *******大普林华人生活群信息: 健身***************
为服务大普林地区的居民，本群定期发送生活服务信息，全是群主在各个微信群收到的微信信息集中，完全基于个人推荐，无法保证信息真实，用前请货比三家。也欢迎各位群友发送评论和信息，及时登出反馈。群主微信号：yalichen15

健身/Fitness Center

Lifetime

Princeton Fitness & Wellness on the State Road
Very good
Princeton Fitness & Wellness  就在我店的隔壁，对于有上课的小伙伴确实不错，但对于只用健身器材就不太合算了，里面还有游泳池,设备还挺新的@楚

YMCA健身也不错，城里，免费停车，有游泳池，虽然因为既定泳课常常用不了。

    `},{title:"房屋车保险和来美国看病",content:`
    
*******大普林华人生活群信息: 房屋车保险和来美国看病***************
为服务大普林地区的居民，本群定期发送生活服务信息，全是群主在各个微信群收到的微信信息集中，完全基于个人推荐，无法保证信息真实，用前请货比三家。也欢迎各位群友发送评论和信息，及时登出反馈。群主微信号：yalichen15
保险
@Song🐑 我的List上没有。看群友推荐。我们家过去在华盛顿一直用Allstate十几年都很满意，搬到普林后他们当地办公室的服务屡屡出错，导致我们搬家后一段时间竟然没有上好保险，但是也没通知我们。后来就改用geico，略贵一点。

我們也用Geico和汽車保險一起，會便宜一點

geico不错，Allstate会慢慢涨没原因

车险打算从geico换progressive，便宜100

其實Njm很好，我們都在他們那二十年，因為我开車吃罰單，（上班着急，超速）又碰鹿，所以他們不喜歡我們，漲價很多。我們才重新找
每年年底都退一點餞回來，真的很好

我查看了一下， 繳費給旅遊保險的公司是— travel guard group INC tel: 8008261300

@Song🐑 房屋保险“杨林静”
杨林静
(646)334-5458

请教大家，有没有比较好的房屋保险agent 推荐啊，谢谢
@di wu 我用的这个agent蛮不错，认真负责
state farm公司的simon，华人，很热心，车保险和房屋保险都做，解答问题很清楚Mon-Fri 9:00-6:00 (EST)
Sat 9:00-2:00
Evenings by Appointment
Phone: (484) 416-3518
simon.z.cao.ts2c@statefarm.com

请教大家，厨房墙因为管道漏水霉烂了，需要扒掉橱柜和drywall重新做，可以走保险报销。请问有推荐的师傅或者contractor吗
要确认保险公司的赔偿数额后再动工，保险公司的报销手续要跟有资质的装修公司对接。或者你跟保险公司达成一致，它一次性把钱给你，你自己处理后面的事。

群里有谁是home insurance agent? 或有谁可以推荐在Princeton area issue home insurance policy？
@Xu you are in good hands! @Jessica Feng 和杨桦不但专业，服务极佳，强力推荐
请联系杨桦。我刚搞定。7322870767 ext 1找Henry。直接发短信给这个号码就可以。
Jessica Brown   
GEICO   Senior Por      825 Route       33 Hamilton, NJ 08619   tfolio Sales AgentGEIcO Mercer  
Phone: (609) 530-1000 | Fax: (609) 584-5555 geico.com mercer
他家居住在美东超市附近，人品好，责任心强，售后也好。
我跟Geigo网上填了表，电话上还耗了不下40分钟。然后告诉我说他们的伙伴不做普林斯顿的单子，浪费时间
Geigo现在找了两个借口不做Princeton。价格高+靠海岸近

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
@Johnson 谢谢，我想知道在美国有没有可以买的保险，针对老年人比较全的保险
@丹 今天剛好有一個朋友問到我知不知道一個什麼Travels International （不確定名字，聽起來像個旅行社，但是專門賣國際人士來美的意外，健康險）他有一批商務人士要來美待一段時間，所以打算為他們提供一些保險。地址是182 Princeton Hightstown Road, West Windsor 是一片office complex。

@若然 www.insubuy.com 这是胜翠以前在群里发过的，我给我来访的家人买了这个保险。供参考。

您好！我想跟您询问一下在国内的家人如何远程看病的事。请问是什么机构？
fenghao_chen
他们公司帮助对接中国病人和美国合适的医疗服务

@普林斯顿陈老师-文书辅导 - 推荐一下Amazon Pharmacy。 家里人最近好几种新药，保险支付额很少，自费都不菲。最近我从Walgreen换到Amazon Pharmacy, Amazon Prime会员药价差不多是本地药房的一半。所以建议大家买药的时候，可以通过亚马逊药房询价，看哪个更便宜。我们家里人常吃的几种药，最近我都换到Amazon Pharmacy了，价格都便宜不少，50%-10% 不等。
是的，Amazon Prime可以接受保险，可以输入具体保险信息，她可以同时报价有保险和无保险的药物价格。 有时候有保险的价格比没保险的价格还贵，估计具体看改药品她家和保险公司分账安排。

@Wenzhe 如果有錢自付，或者有全球給付的保險（比如在香港買了保誠Prudential 或者AIA), 就可以直接找醫療機構。癌症的話，這家在紐約和新州的醫療機構排名很高。 
在三藩市的UCSF（加州大學三藩市分校是間排名前列的醫學院）和德州大學奧斯汀分校醫學院（UT Austin)的Anderson Cancer Center有不少從中國來的求診病人，以前有微信文章介紹自身經歷。 
养和的 服务，真是一流水平 
UT Austin Anderson 癌症中心，麻省总医院，Mayo Clinic 都有专门针对国际就医的部门。富裕中国人会联系他们（或者通过中介联系）寻找他们专家制定治疗方案。如果你联系他们，他们会告诉你国内去哪家医院检查，然后远程看检查结果并和国内医生讨论病情，建议最佳治疗方案。不需要折腾病人来美国检查就医。美国医疗的确服务态度好，另外️一些早期试验药，但病人远离家人，语言不通也不一定是最佳就医选择。如果美国权威专家制定医疗方案，国内外资医院或者香港，新加坡的医疗水平和服务也不错的。

@Xiaofei - 老人如果有绿卡但不到五年，可以在exchange上面买Obama Care的保险。保费和免赔额都比较高，但是相比美国昂贵的医疗费用，这也还是值得的。如果没有绿卡或者拿到绿卡不到五年，老人可以买短期国际旅行医疗保险。在携程上可以买国内保险公司的国际旅行险，在美国需要自己先垫付然后报销，也可以直接买美国保险公司的visitors国际旅行保险，一般发生意外，直接看病，保险公司支付。 不过国际旅行险只能Cover意外情况, 不含基础疾病和preventative care。老人的医疗保险是个问题，一定要考虑周到。

www.insubuy.com自己上去买就好 家里老人来探亲，需要买旅游保险，求好的保险代理推荐谢谢

你到exchange 上面去看看研究一下？理论上exchange是给公民和绿卡居民的强制健康保险，具体每个州情况以点不同，但大同小异。新泽西比较富裕，福利相对别州已经很好了！如果没绿卡，那在美国需要签证，一般学校和雇主的医疗保险肯定比exchange便宜（雇主会支付一部分医疗保险费）。

联系人：Sophie, 479.200.0792 服务内容：个人及团体医保、旅游医保、Obamacare (GetCoveredNJ)、Medicare等咨询及申请。主要代理公司包括：Horizon, AmeriHealth, aetnaCVSHealth, United Healthcare等。

医疗保险可找群里的Judy Wu 

乡親们：有誰用过汽車保險公司寄來小磁卡，放在车里，跟踪是否speeding ... ，這樣过半年根据行车情況減少保險费的吗？，想知道好不好用，有沒有被泄密的風險。謝謝🙏
我们用过progressive的那个snapshot program,，能便宜一些
@Lijuan Allstate 也有一個 Drivewise 監測你駕駛習慣，距離，安全駕駛一個月可以省十幾二十塊錢。洩密的話，我沒啥密可洩，省點錢實在。

    `},{title:"皮肤科专科医生",content:`
    *******大普林华人生活群信息: 皮肤科专科医生 ***************
为服务大普林地区的居民，本群定期发送生活服务信息，全是群主在各个微信群收到的微信信息集中，完全基于个人推荐，无法保证信息真实，用前请货比三家。也欢迎各位群友发送评论和信息，及时登出反馈。群主微信号：yalichen15
皮肤科
🌸茵ᴵᴺᴳᴿᴵᴰ 我女儿用的是Princeton Dermatology Association 的Dr. Kaufmann. 很有经验，缺点是比较难约上。电话是609-683-4999。地址是208 Bunn Drive, Princeton
 
打扰了，请问大家有Dermatologist 推荐吗？治疗青少年的粉刺Acne 较拿手的。多谢了
 
Schweiger
Dermatology Group -
Princeton
800 Bunn Drive, #201 Princeton,NJ 08540
(973) 571-2121
Convenient same day
appointments
844-DERM-DOC    646-558-6696
 
@孙芳遒 我们去过这家看皮肤科
 
我们用Princeton Nassau pediatrics, Dr. Pierson 开的药膏，效果不错, 专科医生不好约
 
@RoRo 这个很专业但有些保险不受，你问一下
KESSEL DERMATOLOGY
609-890-2600    HAMILTON SQUARE
1700 Whitehorse Hamilton Square Road, D1 Hamilton Square, NJ08690
609-890-2600

    `},{title:"露台阳台车道",content:`
    *******大普林华人生活群信息: 露台阳台车道 ***************
为服务大普林地区的居民，本群定期发送生活服务信息，全是群主在各个微信群收到的微信信息集中，完全基于个人推荐，无法保证信息真实，用前请货比三家。也欢迎各位群友发送评论和信息，及时登出反馈。群主微信号：yalichen15

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

    `},{title:"修理换屋顶",content:`
    *******大普林华人生活群信息: 修理换屋顶 ***************
为服务大普林地区的居民，本群定期发送生活服务信息，全是群主在各个微信群收到的微信信息集中，完全基于个人推荐，无法保证信息真实，用前请货比三家。也欢迎各位群友发送评论和信息，及时登出反馈。群主微信号：yalichen15

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
@guonexus 我之前用的，你可以问问他Ammar Ourfali Roofing (732) 991-5855

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
@Yuki 我们找到那个quote, 还是Trenton Roofing 在2021年一月做的。$375。他们当时说他们很忙，这个项目太小（不够填牙缝的），他们有空时才会来。后来大约一周左右就来做了。

WB Construction LLC/Walter	
给我们的报价：4200sqf的房子换屋顶， 报价1万4

@Sun Emily Door Done Right 6094454444

HERRY MANUEL NAVARRO Roofer
Mobile (609) 418-5868
>>>>>> Home xlcontractors@hotmail.com

Fencing；roofing contractor 
Carl
8552922757

Geno's Roof
https://genosiding.com/
215-971-6292

    `},{title:"打扫卫生",content:`
    *******大普林华人生活群信息: 打扫卫生************************
为服务大普林地区的居民，本群定期发送生活服务信息，全是群主在各个微信群收到的微信信息集中，完全基于个人推荐，无法保证信息真实，用前请货比三家。也欢迎各位群友发送评论和信息，及时登出反馈。群主微信号：yalichen15

打扫卫生/cleaning

@All 请问大家谁有move out house cleaner 推荐？谢谢！
+1 (646) 266-0317 Stacey 
可以联系一下，我搬走时叫了她（有帮手，应该是她先生）

请问一下有cleaning lady推荐吗？谢谢
kendy +1 (609) 356-3415 @晓先 
危地马拉的 4个人 ，开车上门@Frankchen 请问像这种四人清洁的 大约如何收费
100-150 
1小时好久没有请人专业打扫了 500 deep cleaning 3500 sf的房子其实很便宜了

我知道这个帮人做清埽及家务(484) 294-7575正清

如果是一般的打扫，那Princeton Cleaning性价比很高
@凯文 您说的一般打扫的那个 Princeton Cleaning 就是叫这个名字吗？我在网上和Google地图上都没找到。您有他们的电话号码或其他联系方式？
https://www.thumbtack.com/nj/princeton/house-cleaning/princeton-cleaning/service/291392236193792075
电话是6096473909，这家可能是我用过最便宜的，同样的公寓只收了100，不过可能也是因为他们就在本地，不需要往返时间。
这家（6096473909） 看到介绍上说以前只收¥100现在是收¥180西班牙人
我找了Princeton cleaning来清洁，估价的时候说因为是第一次，所以要double price，会做deep clean，我就同意了，要了$360+每个窗户$5，一共$460。结果OK，感觉是一般的清洁，绝对不是deep clean，窗户基本上玻璃没有清理。马桶和炉子打扫得特别干净。所以感觉一般的清洁还可以，不要相信她们的deep clean就好
感觉价格太贵了

Excellent house cleaner in Princeton area.  I recommend Karina Gonzalez (609)858-8259.  She has been cleaning my two-bedroom apartment for two years and provides wonderful service. 

\uFEFF如果是deep cleaning的话推荐Royal BABA，非常专业和仔细，之前给我把墙上柜子上几十年的油渍全都弄干净了。
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

@Clare Gosia (609) 635-1815，她做的清洁工作特别好，非常细致专业
gosia这个人都不做了@Lily Chen_普林斯顿 

Antonia Clean Lady
(609) 306-0568

@Liz(Shawn 24) 可以试这个+1 (609) 647-3909 Princeton cleaning。领头接送的是Nelson，他们有墨西哥人和东欧人

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
@K 这位萍姐就是专业做这个的她的电话号码是：9082658875

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

    `},{title:"兽医/理发/宠物",content:`
    
*******大普林华人生活群信息: 兽医/理发/宠物 ***************
为服务大普林地区的居民，本群定期发送生活服务信息，全是群主在各个微信群收到的微信信息集中，完全基于个人推荐，无法保证信息真实，用前请货比三家。也欢迎各位群友发送评论和信息，及时登出反馈。群主微信号：yalichen15

Princeton Animal Hospital& Carnegie Cat Clinic
726 Alexander RdPrincetonNJ08540
已打烊·下次开门时间:周一06:00
进行预约·princetonvet.com

请问一下绘狗看病打疫苗的诊所有推荐吗？非常感谢！

@Kathy WF 720 Edinburg Road Mercerville, NJ 08619
美国

Faith Vet
(732) 658-6777
有点远，但是还不错，价格合适
@Kathy WF 这个诊所很快。我暑假要出去，没想到经常去的附近的vet要半个月预约。找到这个faith，两天后就可以。后来狗拔牙，这个诊所比另外一个要便宜700美元

@普林斯顿陈老师-文书辅导 建議領養代替購買？
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
Caring hearts animal hospital at Montgomery  @Han 

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

    `},{title:" 烟囱和Gutter清扫和修理",content:`
    *******大普林华人生活群信息: 烟囱和Gutter清扫和修理 ***************
为服务大普林地区的居民，本群定期发送生活服务信息，全是群主在各个微信群收到的微信信息集中，完全基于个人推荐，无法保证信息真实，用前请货比三家。也欢迎各位群友发送评论和信息，及时登出反馈。群主微信号：yalichen15

vent and chimney cleaning
Gutter cleaning and repair/build
Gutter Cleaning	
Tom +1 (267) 257-4742
我们用的gutter clean $150 flat price

 cleaning of dryer vent and inspection of chimney vents. 这是家父子个体户公司。hvaccleaningspecialists.com    dryer vent cleaning 10家+ , $100 per house.              Chimney/furnace vents inspection, $35/house.           Total $135/house                          Online rating by customers, Excellent. No complaint on BBB.
HVAC Cleaning Specialists
10家以上报价：
(1) dryer vent cleaning  $100/house.              
（2）Chimney and (or) furnace vents inspection, $35/house.  
Total $135         

 Z-Best Management (和US Air Management是同一家老板 )是2022年用过的，15家以上报价：
（1） dryer vent cleaning + chimney inspection ， 共 $70
（2）如果需要chimney cleaning，加$70

U&B Outdoor services
$120
U&B Outdoor services! We specialize in gutter cleaning minor gutter
installation and repairs, 

问下群里有gutter cleaning 公司推荐吗？ 
Gutterman
(609) 921-2299
863 State Road. 9       
PrincetonNJ08540 USA
$125 for Cleaned and flushed all gutters11/19/2018
@刘敏芝 我用的⬆️

群里谁能帮我推荐个gutter cleaning company? 谢谢🙏
Bruce Davies Aka Gutterman
Gutterman

大家早上好！请问有暖气管道检查的公司推荐吗？
AJ perry 
@Xin Tao @Mr.Zhao 建议不要用AJ Perry. 不得不用时，也要多请2家公司竞标
是的，多问几家询价，差异特别大

sign up PSEG worry free program. 15 天后，让他们过来检查，检查和维修费用全cover
@樱花时节 最好加入PSEG Worry free Program, 一个月三件电器十几元，打电话他们随时来收，临时叫外面人修，出来一次没毛病至少二百。

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
@Han ，这个价格不贵

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


@optimist_too 我家烟囱基本不用，烟囱帽的金属边有点生锈了，本想刷一下漆。就让Trent roof报价，他们说把配件都换了，要1200多，没提能不能刷漆。能推荐一下您家过来给烟囱刷漆找的哪位吗？还有如何收费，谢谢

Trenton Roof 换了一个烟囱的盖子（那种防鸟做窝）。很小的事情。然后把烟囱油漆了一下（给他们“加一点油”。这样师傅来一趟总得值回他的汽油钱）。
我们以前用过Trenton Roofing, 还不错
用过这一家，服务规范、快
是的，比较了三家后用了Trenton Roofing and siding，他家价格最低，隔天看过屋顶后，交一半定金，一周后就换好了
Trenton Roofing and siding价格公道活干的也利索，一个上午就能干完
汇报一下最近换房顶的情况：trenton roofing最快最靠谱、报价中等。那个double d roofing不推荐。一堆sales strategies然后报价很高还不屈不挠电话邮件短信轰炸。我家是18年的roof也没漏也没咋的、就是有几片singles做的不好、inspector不建议换、建议修。但没有哪家是说可以不换的。估计现在生意好、修就屋顶这种小活儿都不想接。但double d感觉不靠谱。
609 393-6780
trentonroofing.com
Trenton不会修屋顶，只换屋顶
@Yuki 我们找到那个quote, 还是Trenton Roofing 在2021年一月做的。$375。他们当时说他们很忙，这个项目太小（不够填牙缝的），他们有空时才会来。后来大约一周左右就来做了。

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
謝謝你！ 群主!  朋友已介紹一個公司， 明天正好在我們家附近服務，所以明天正好順道來做我家，收費也很合理，$95+ 稅， 主要是我們小城需要這個安全報告，才肯給我們 CO.
Duct Technology  973-628-8760 Saraa


有人推荐修gas fireplace的公司么？试了一家Ace fireplace service, 差评！！本来问题是烧一会儿自动停，要再开一次。他来了inspection半天, 说可能气不足，调大了气。第二天干脆一点儿也打不着火了

Bowden's in Hamilton is great. They installed one gas fireplace for me many years ago and they now come out to clean it.
6095863344

    `},{title:"洗地毯",content:`
    *******大普林华人生活群信息: 洗地毯************************
为服务大普林地区的居民，本群定期发送生活服务信息，全是群主在各个微信群收到的微信信息集中，完全基于个人推荐，无法保证信息真实，用前请货比三家。也欢迎各位群友发送评论和信息，及时登出反馈。群主微信号：yalichen15

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
@靖华 David 646-651-2612

@Sherry   Pristine Carpet Cleaning. Chuck 609 462 2844

@Lily Chen_普林斯顿 洗地毯推荐 Amer carpet cleaners, Jack Wang 609-610-1035

Avon Carpet Cleaning
(609) 448-7772


Jack Wang Carpet Cleaning
+1(609) 610-1035

    `},{title:"学校选择",content:`
    *******大普林华人生活群信息: 学校选择************************
为服务大普林地区的居民，本群定期发送生活服务信息，全是群主在各个微信群收到的微信信息集中，完全基于个人推荐，无法保证信息真实，用前请货比三家。也欢迎各位群友发送评论和信息，及时登出反馈。群主微信号：yalichen15过两个月要搬去Princeton了、求推荐daycare，最好是双语的

如果要雙語的，那大概就是Yinghua International School了

Pre-K
如果要中英雙語的，那推薦Yinghua International School

如果要budget friendly的、時間彈性的，推薦Princeton Community Family Learning Center （the Cub school)
雖然便宜，但老師和director很優質

另外The Learning Experience - Princeton和Knowledge Beginnings Princeton (Kindercare) 也聽說不錯。

Princeton community family learning center是不是一个教会学校？
@Zoe Yang 是蒙校 但不是教会学校

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

    `}],GN=()=>{const[e,t]=f.useState(Ru),[r,i]=f.useState(""),o=d=>{i(d.target.value)},s=()=>{console.log("search tearm: ",r);const d=Ru.filter(m=>{var h;return(h=m.title)==null?void 0:h.includes(r)});t(d)},u=()=>{t(Ru),i("")};return Nt.jsxs("div",{style:{padding:"24px 24px",display:"flex",flexDirection:"column",gap:"16px"},children:[Nt.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:["Search:"," ",Nt.jsx(wl,{placeholder:"",size:"small",style:{width:"200px"},value:r,onChange:o}),Nt.jsx(qs,{size:"small",onClick:s,children:"Search"}),Nt.jsx(qs,{size:"small",onClick:u,children:"Clear"})]}),Nt.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"baseline"},children:["目前包括的内容涵盖一下方面：",Ru.map(d=>d.title+", ")]}),Nt.jsx(o7,{gutter:16,style:{display:"flex",gap:"16px"},children:e.map(d=>Nt.jsx(pv,{title:d.title,variant:"borderless",style:{overflow:"hidden",paddingBottom:"8px"},className:"card-container",children:d.content},d.title))})]})},mw=f.createContext({}),UN={aliceblue:"9ehhb",antiquewhite:"9sgk7",aqua:"1ekf",aquamarine:"4zsno",azure:"9eiv3",beige:"9lhp8",bisque:"9zg04",black:"0",blanchedalmond:"9zhe5",blue:"73",blueviolet:"5e31e",brown:"6g016",burlywood:"8ouiv",cadetblue:"3qba8",chartreuse:"4zshs",chocolate:"87k0u",coral:"9yvyo",cornflowerblue:"3xael",cornsilk:"9zjz0",crimson:"8l4xo",cyan:"1ekf",darkblue:"3v",darkcyan:"rkb",darkgoldenrod:"776yz",darkgray:"6mbhl",darkgreen:"jr4",darkgrey:"6mbhl",darkkhaki:"7ehkb",darkmagenta:"5f91n",darkolivegreen:"3bzfz",darkorange:"9yygw",darkorchid:"5z6x8",darkred:"5f8xs",darksalmon:"9441m",darkseagreen:"5lwgf",darkslateblue:"2th1n",darkslategray:"1ugcv",darkslategrey:"1ugcv",darkturquoise:"14up",darkviolet:"5rw7n",deeppink:"9yavn",deepskyblue:"11xb",dimgray:"442g9",dimgrey:"442g9",dodgerblue:"16xof",firebrick:"6y7tu",floralwhite:"9zkds",forestgreen:"1cisi",fuchsia:"9y70f",gainsboro:"8m8kc",ghostwhite:"9pq0v",goldenrod:"8j4f4",gold:"9zda8",gray:"50i2o",green:"pa8",greenyellow:"6senj",grey:"50i2o",honeydew:"9eiuo",hotpink:"9yrp0",indianred:"80gnw",indigo:"2xcoy",ivory:"9zldc",khaki:"9edu4",lavenderblush:"9ziet",lavender:"90c8q",lawngreen:"4vk74",lemonchiffon:"9zkct",lightblue:"6s73a",lightcoral:"9dtog",lightcyan:"8s1rz",lightgoldenrodyellow:"9sjiq",lightgray:"89jo3",lightgreen:"5nkwg",lightgrey:"89jo3",lightpink:"9z6wx",lightsalmon:"9z2ii",lightseagreen:"19xgq",lightskyblue:"5arju",lightslategray:"4nwk9",lightslategrey:"4nwk9",lightsteelblue:"6wau6",lightyellow:"9zlcw",lime:"1edc",limegreen:"1zcxe",linen:"9shk6",magenta:"9y70f",maroon:"4zsow",mediumaquamarine:"40eju",mediumblue:"5p",mediumorchid:"79qkz",mediumpurple:"5r3rv",mediumseagreen:"2d9ip",mediumslateblue:"4tcku",mediumspringgreen:"1di2",mediumturquoise:"2uabw",mediumvioletred:"7rn9h",midnightblue:"z980",mintcream:"9ljp6",mistyrose:"9zg0x",moccasin:"9zfzp",navajowhite:"9zest",navy:"3k",oldlace:"9wq92",olive:"50hz4",olivedrab:"472ub",orange:"9z3eo",orangered:"9ykg0",orchid:"8iu3a",palegoldenrod:"9bl4a",palegreen:"5yw0o",paleturquoise:"6v4ku",palevioletred:"8k8lv",papayawhip:"9zi6t",peachpuff:"9ze0p",peru:"80oqn",pink:"9z8wb",plum:"8nba5",powderblue:"6wgdi",purple:"4zssg",rebeccapurple:"3zk49",red:"9y6tc",rosybrown:"7cv4f",royalblue:"2jvtt",saddlebrown:"5fmkz",salmon:"9rvci",sandybrown:"9jn1c",seagreen:"1tdnb",seashell:"9zje6",sienna:"6973h",silver:"7ir40",skyblue:"5arjf",slateblue:"45e4t",slategray:"4e100",slategrey:"4e100",snow:"9zke2",springgreen:"1egv",steelblue:"2r1kk",tan:"87yx8",teal:"pds",thistle:"8ggk8",tomato:"9yqfb",turquoise:"2j4r4",violet:"9b10u",wheat:"9ld4j",white:"9zldr",whitesmoke:"9lhpx",yellow:"9zl6o",yellowgreen:"61fzm"},Vn=Math.round;function vg(e,t){const r=e.replace(/^[^(]*\((.*)/,"$1").replace(/\).*/,"").match(/\d*\.?\d+%?/g)||[],i=r.map(o=>parseFloat(o));for(let o=0;o<3;o+=1)i[o]=t(i[o]||0,r[o]||"",o);return r[3]?i[3]=r[3].includes("%")?i[3]/100:i[3]:i[3]=1,i}const eS=(e,t,r)=>r===0?e:e/100;function Es(e,t){const r=t||255;return e>r?r:e<0?0:e}class Qo{constructor(t){xr(this,"isValid",!0);xr(this,"r",0);xr(this,"g",0);xr(this,"b",0);xr(this,"a",1);xr(this,"_h");xr(this,"_s");xr(this,"_l");xr(this,"_v");xr(this,"_max");xr(this,"_min");xr(this,"_brightness");function r(o){return o[0]in t&&o[1]in t&&o[2]in t}if(t)if(typeof t=="string"){let s=function(u){return o.startsWith(u)};var i=s;const o=t.trim();if(/^#?[A-F\d]{3,8}$/i.test(o))this.fromHexString(o);else if(s("rgb"))this.fromRgbString(o);else if(s("hsl"))this.fromHslString(o);else if(s("hsv")||s("hsb"))this.fromHsvString(o);else{const u=UN[o.toLowerCase()];u&&this.fromHexString(parseInt(u,36).toString(16).padStart(6,"0"))}}else if(t instanceof Qo)this.r=t.r,this.g=t.g,this.b=t.b,this.a=t.a,this._h=t._h,this._s=t._s,this._l=t._l,this._v=t._v;else if(r("rgb"))this.r=Es(t.r),this.g=Es(t.g),this.b=Es(t.b),this.a=typeof t.a=="number"?Es(t.a,1):1;else if(r("hsl"))this.fromHsl(t);else if(r("hsv"))this.fromHsv(t);else throw new Error("@ant-design/fast-color: unsupported input "+JSON.stringify(t))}setR(t){return this._sc("r",t)}setG(t){return this._sc("g",t)}setB(t){return this._sc("b",t)}setA(t){return this._sc("a",t,1)}setHue(t){const r=this.toHsv();return r.h=t,this._c(r)}getLuminance(){function t(s){const u=s/255;return u<=.03928?u/12.92:Math.pow((u+.055)/1.055,2.4)}const r=t(this.r),i=t(this.g),o=t(this.b);return .2126*r+.7152*i+.0722*o}getHue(){if(typeof this._h>"u"){const t=this.getMax()-this.getMin();t===0?this._h=0:this._h=Vn(60*(this.r===this.getMax()?(this.g-this.b)/t+(this.g<this.b?6:0):this.g===this.getMax()?(this.b-this.r)/t+2:(this.r-this.g)/t+4))}return this._h}getSaturation(){if(typeof this._s>"u"){const t=this.getMax()-this.getMin();t===0?this._s=0:this._s=t/this.getMax()}return this._s}getLightness(){return typeof this._l>"u"&&(this._l=(this.getMax()+this.getMin())/510),this._l}getValue(){return typeof this._v>"u"&&(this._v=this.getMax()/255),this._v}getBrightness(){return typeof this._brightness>"u"&&(this._brightness=(this.r*299+this.g*587+this.b*114)/1e3),this._brightness}darken(t=10){const r=this.getHue(),i=this.getSaturation();let o=this.getLightness()-t/100;return o<0&&(o=0),this._c({h:r,s:i,l:o,a:this.a})}lighten(t=10){const r=this.getHue(),i=this.getSaturation();let o=this.getLightness()+t/100;return o>1&&(o=1),this._c({h:r,s:i,l:o,a:this.a})}mix(t,r=50){const i=this._c(t),o=r/100,s=d=>(i[d]-this[d])*o+this[d],u={r:Vn(s("r")),g:Vn(s("g")),b:Vn(s("b")),a:Vn(s("a")*100)/100};return this._c(u)}tint(t=10){return this.mix({r:255,g:255,b:255,a:1},t)}shade(t=10){return this.mix({r:0,g:0,b:0,a:1},t)}onBackground(t){const r=this._c(t),i=this.a+r.a*(1-this.a),o=s=>Vn((this[s]*this.a+r[s]*r.a*(1-this.a))/i);return this._c({r:o("r"),g:o("g"),b:o("b"),a:i})}isDark(){return this.getBrightness()<128}isLight(){return this.getBrightness()>=128}equals(t){return this.r===t.r&&this.g===t.g&&this.b===t.b&&this.a===t.a}clone(){return this._c(this)}toHexString(){let t="#";const r=(this.r||0).toString(16);t+=r.length===2?r:"0"+r;const i=(this.g||0).toString(16);t+=i.length===2?i:"0"+i;const o=(this.b||0).toString(16);if(t+=o.length===2?o:"0"+o,typeof this.a=="number"&&this.a>=0&&this.a<1){const s=Vn(this.a*255).toString(16);t+=s.length===2?s:"0"+s}return t}toHsl(){return{h:this.getHue(),s:this.getSaturation(),l:this.getLightness(),a:this.a}}toHslString(){const t=this.getHue(),r=Vn(this.getSaturation()*100),i=Vn(this.getLightness()*100);return this.a!==1?`hsla(${t},${r}%,${i}%,${this.a})`:`hsl(${t},${r}%,${i}%)`}toHsv(){return{h:this.getHue(),s:this.getSaturation(),v:this.getValue(),a:this.a}}toRgb(){return{r:this.r,g:this.g,b:this.b,a:this.a}}toRgbString(){return this.a!==1?`rgba(${this.r},${this.g},${this.b},${this.a})`:`rgb(${this.r},${this.g},${this.b})`}toString(){return this.toRgbString()}_sc(t,r,i){const o=this.clone();return o[t]=Es(r,i),o}_c(t){return new this.constructor(t)}getMax(){return typeof this._max>"u"&&(this._max=Math.max(this.r,this.g,this.b)),this._max}getMin(){return typeof this._min>"u"&&(this._min=Math.min(this.r,this.g,this.b)),this._min}fromHexString(t){const r=t.replace("#","");function i(o,s){return parseInt(r[o]+r[s||o],16)}r.length<6?(this.r=i(0),this.g=i(1),this.b=i(2),this.a=r[3]?i(3)/255:1):(this.r=i(0,1),this.g=i(2,3),this.b=i(4,5),this.a=r[6]?i(6,7)/255:1)}fromHsl({h:t,s:r,l:i,a:o}){if(this._h=t%360,this._s=r,this._l=i,this.a=typeof o=="number"?o:1,r<=0){const b=Vn(i*255);this.r=b,this.g=b,this.b=b}let s=0,u=0,d=0;const m=t/60,h=(1-Math.abs(2*i-1))*r,p=h*(1-Math.abs(m%2-1));m>=0&&m<1?(s=h,u=p):m>=1&&m<2?(s=p,u=h):m>=2&&m<3?(u=h,d=p):m>=3&&m<4?(u=p,d=h):m>=4&&m<5?(s=p,d=h):m>=5&&m<6&&(s=h,d=p);const y=i-h/2;this.r=Vn((s+y)*255),this.g=Vn((u+y)*255),this.b=Vn((d+y)*255)}fromHsv({h:t,s:r,v:i,a:o}){this._h=t%360,this._s=r,this._v=i,this.a=typeof o=="number"?o:1;const s=Vn(i*255);if(this.r=s,this.g=s,this.b=s,r<=0)return;const u=t/60,d=Math.floor(u),m=u-d,h=Vn(i*(1-r)*255),p=Vn(i*(1-r*m)*255),y=Vn(i*(1-r*(1-m))*255);switch(d){case 0:this.g=y,this.b=h;break;case 1:this.r=p,this.b=h;break;case 2:this.r=h,this.b=y;break;case 3:this.r=h,this.g=p;break;case 4:this.r=y,this.g=h;break;case 5:default:this.g=h,this.b=p;break}}fromHsvString(t){const r=vg(t,eS);this.fromHsv({h:r[0],s:r[1],v:r[2],a:r[3]})}fromHslString(t){const r=vg(t,eS);this.fromHsl({h:r[0],s:r[1],l:r[2],a:r[3]})}fromRgbString(t){const r=vg(t,(i,o)=>o.includes("%")?Vn(i/100*255):i);this.r=r[0],this.g=r[1],this.b=r[2],this.a=r[3]}}const Tu=2,tS=.16,WN=.05,qN=.05,JN=.15,gw=5,hw=4,KN=[{index:7,amount:15},{index:6,amount:25},{index:5,amount:30},{index:5,amount:45},{index:5,amount:65},{index:5,amount:85},{index:4,amount:90},{index:3,amount:95},{index:2,amount:97},{index:1,amount:98}];function nS(e,t,r){let i;return Math.round(e.h)>=60&&Math.round(e.h)<=240?i=r?Math.round(e.h)-Tu*t:Math.round(e.h)+Tu*t:i=r?Math.round(e.h)+Tu*t:Math.round(e.h)-Tu*t,i<0?i+=360:i>=360&&(i-=360),i}function rS(e,t,r){if(e.h===0&&e.s===0)return e.s;let i;return r?i=e.s-tS*t:t===hw?i=e.s+tS:i=e.s+WN*t,i>1&&(i=1),r&&t===gw&&i>.1&&(i=.1),i<.06&&(i=.06),Math.round(i*100)/100}function aS(e,t,r){let i;return r?i=e.v+qN*t:i=e.v-JN*t,i=Math.max(0,Math.min(1,i)),Math.round(i*100)/100}function YN(e,t={}){const r=[],i=new Qo(e),o=i.toHsv();for(let s=gw;s>0;s-=1){const u=new Qo({h:nS(o,s,!0),s:rS(o,s,!0),v:aS(o,s,!0)});r.push(u)}r.push(i);for(let s=1;s<=hw;s+=1){const u=new Qo({h:nS(o,s),s:rS(o,s),v:aS(o,s)});r.push(u)}return t.theme==="dark"?KN.map(({index:s,amount:u})=>new Qo(t.backgroundColor||"#141414").mix(r[s],u).toHexString()):r.map(s=>s.toHexString())}const $h=["#e6f4ff","#bae0ff","#91caff","#69b1ff","#4096ff","#1677ff","#0958d9","#003eb3","#002c8c","#001d66"];$h.primary=$h[5];function XN(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function ZN(e,t){if(!e)return!1;if(e.contains)return e.contains(t);let r=t;for(;r;){if(r===e)return!0;r=r.parentNode}return!1}const iS="data-rc-order",oS="data-rc-priority",QN="rc-util-key",Rh=new Map;function vw({mark:e}={}){return e?e.startsWith("data-")?e:`data-${e}`:QN}function Sv(e){return e.attachTo?e.attachTo:document.querySelector("head")||document.body}function eP(e){return e==="queue"?"prependQueue":e?"prepend":"append"}function Cv(e){return Array.from((Rh.get(e)||e).children).filter(t=>t.tagName==="STYLE")}function pw(e,t={}){if(!XN())return null;const{csp:r,prepend:i,priority:o=0}=t,s=eP(i),u=s==="prependQueue",d=document.createElement("style");d.setAttribute(iS,s),u&&o&&d.setAttribute(oS,`${o}`),r!=null&&r.nonce&&(d.nonce=r==null?void 0:r.nonce),d.innerHTML=e;const m=Sv(t),{firstChild:h}=m;if(i){if(u){const p=(t.styles||Cv(m)).filter(y=>{if(!["prepend","prependQueue"].includes(y.getAttribute(iS)))return!1;const b=Number(y.getAttribute(oS)||0);return o>=b});if(p.length)return m.insertBefore(d,p[p.length-1].nextSibling),d}m.insertBefore(d,h)}else m.appendChild(d);return d}function tP(e,t={}){let{styles:r}=t;return r||(r=Cv(Sv(t))),r.find(i=>i.getAttribute(vw(t))===e)}function nP(e,t){const r=Rh.get(e);if(!r||!ZN(document,r)){const i=pw("",t),{parentNode:o}=i;Rh.set(e,o),e.removeChild(i)}}function rP(e,t,r={}){var m,h,p;const i=Sv(r),o=Cv(i),s={...r,styles:o};nP(i,s);const u=tP(t,s);if(u)return(m=s.csp)!=null&&m.nonce&&u.nonce!==((h=s.csp)==null?void 0:h.nonce)&&(u.nonce=(p=s.csp)==null?void 0:p.nonce),u.innerHTML!==e&&(u.innerHTML=e),u;const d=pw(e,s);return d.setAttribute(vw(s),t),d}function yw(e){var t;return(t=e==null?void 0:e.getRootNode)==null?void 0:t.call(e)}function aP(e){return yw(e)instanceof ShadowRoot}function iP(e){return aP(e)?yw(e):null}let Th={};const oP=e=>{};function lP(e,t){}function sP(e,t){}function cP(){Th={}}function bw(e,t,r){!t&&!Th[r]&&(e(!1,r),Th[r]=!0)}function Pd(e,t){bw(lP,e,t)}function uP(e,t){bw(sP,e,t)}Pd.preMessage=oP;Pd.resetWarned=cP;Pd.noteOnce=uP;function dP(e){return e.replace(/-(.)/g,(t,r)=>r.toUpperCase())}function fP(e,t){Pd(e,`[@ant-design/icons] ${t}`)}function lS(e){return typeof e=="object"&&typeof e.name=="string"&&typeof e.theme=="string"&&(typeof e.icon=="object"||typeof e.icon=="function")}function sS(e={}){return Object.keys(e).reduce((t,r)=>{const i=e[r];switch(r){case"class":t.className=i,delete t.class;break;default:delete t[r],t[dP(r)]=i}return t},{})}function Oh(e,t,r){return r?he.createElement(e.tag,{key:t,...sS(e.attrs),...r},(e.children||[]).map((i,o)=>Oh(i,`${t}-${e.tag}-${o}`))):he.createElement(e.tag,{key:t,...sS(e.attrs)},(e.children||[]).map((i,o)=>Oh(i,`${t}-${e.tag}-${o}`)))}function Sw(e){return YN(e)[0]}function Cw(e){return e?Array.isArray(e)?e:[e]:[]}const mP=`
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
`,gP=e=>{const{csp:t,prefixCls:r,layer:i}=f.useContext(mw);let o=mP;r&&(o=o.replace(/anticon/g,r)),i&&(o=`@layer ${i} {
${o}
}`),f.useEffect(()=>{const s=e.current,u=iP(s);rP(o,"@ant-design-icons",{prepend:!i,csp:t,attachTo:u})},[])},Ps={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1};function hP({primaryColor:e,secondaryColor:t}){Ps.primaryColor=e,Ps.secondaryColor=t||Sw(e),Ps.calculated=!!t}function vP(){return{...Ps}}const xl=e=>{const{icon:t,className:r,onClick:i,style:o,primaryColor:s,secondaryColor:u,...d}=e,m=f.useRef();let h=Ps;if(s&&(h={primaryColor:s,secondaryColor:u||Sw(s)}),gP(m),fP(lS(t),`icon should be icon definiton, but got ${t}`),!lS(t))return null;let p=t;return p&&typeof p.icon=="function"&&(p={...p,icon:p.icon(h.primaryColor,h.secondaryColor)}),Oh(p.icon,`svg-${p.name}`,{className:r,onClick:i,style:o,"data-icon":p.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true",...d,ref:m})};xl.displayName="IconReact";xl.getTwoToneColors=vP;xl.setTwoToneColors=hP;function ww(e){const[t,r]=Cw(e);return xl.setTwoToneColors({primaryColor:t,secondaryColor:r})}function pP(){const e=xl.getTwoToneColors();return e.calculated?[e.primaryColor,e.secondaryColor]:e.primaryColor}function Mh(){return Mh=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},Mh.apply(this,arguments)}ww($h.primary);const dc=f.forwardRef((e,t)=>{const{className:r,icon:i,spin:o,rotate:s,tabIndex:u,onClick:d,twoToneColor:m,...h}=e,{prefixCls:p="anticon",rootClassName:y}=f.useContext(mw),b=ue(y,p,{[`${p}-${i.name}`]:!!i.name,[`${p}-spin`]:!!o||i.name==="loading"},r);let w=u;w===void 0&&d&&(w=-1);const C=s?{msTransform:`rotate(${s}deg)`,transform:`rotate(${s}deg)`}:void 0,[x,S]=Cw(m);return f.createElement("span",Mh({role:"img","aria-label":i.name},h,{ref:t,tabIndex:w,onClick:d,className:b}),f.createElement(xl,{icon:i,primaryColor:x,secondaryColor:S,style:C}))});dc.displayName="AntdIcon";dc.getTwoToneColor=pP;dc.setTwoToneColor=ww;function Ah(){return Ah=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},Ah.apply(this,arguments)}const yP=(e,t)=>f.createElement(dc,Ah({},e,{ref:t,icon:jN})),bP=f.forwardRef(yP);function Nh(){return Nh=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},Nh.apply(this,arguments)}const SP=(e,t)=>f.createElement(dc,Nh({},e,{ref:t,icon:kN})),CP=f.forwardRef(SP),wP={backgroundColor:"white",display:"flex"};function xP(){const{Header:e,Footer:t,Sider:r,Content:i}=to,o=[{label:Nt.jsx("a",{href:"/",children:"主页"}),key:"home",icon:Nt.jsx(bP,{}),href:"/"},{label:Nt.jsx("a",{href:"/notes",children:"信息分享"}),key:"news",icon:Nt.jsx(CP,{}),href:"/notes"}];return Nt.jsxs(to,{style:{minHeight:"100vh",display:"flex",flexDirection:"column",flexGrow:"1"},children:[Nt.jsxs(e,{style:wP,children:[Nt.jsx("div",{style:{fontSize:"26px",fontWeight:"700"},children:"Princeton华人"}),Nt.jsx(cc,{items:o,mode:"horizontal",style:{marginLeft:"2rem"}})]}),Nt.jsx(i,{children:Nt.jsx(q6,{basename:"/princetonhuaren",children:Nt.jsxs(E6,{children:[Nt.jsx(Ou,{index:!0,element:Nt.jsx(FN,{})}),Nt.jsx(Ou,{path:"notes",element:Nt.jsx(GN,{})}),Nt.jsx(Ou,{path:"about",element:Nt.jsx(VN,{})})]})})})]})}_E.createRoot(document.getElementById("root")).render(Nt.jsx(f.StrictMode,{children:Nt.jsx(xP,{})}));
