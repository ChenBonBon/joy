(function(P,Y){typeof exports=="object"&&typeof module<"u"?Y(exports,require("antd"),require("react")):typeof define=="function"&&define.amd?define(["exports","antd","react"],Y):(P=typeof globalThis<"u"?globalThis:P||self,Y(P.joy={},P.antd,P.react))})(this,function(P,Y,Ae){"use strict";const Q=(c=>c&&typeof c=="object"&&"default"in c?c:{default:c})(Ae),lr="";var ee={exports:{}},C={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var M,re;function te(){if(re)return M;re=1;var c=Object.getOwnPropertySymbols,S=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;function w(E){if(E==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(E)}function k(){try{if(!Object.assign)return!1;var E=new String("abc");if(E[5]="de",Object.getOwnPropertyNames(E)[0]==="5")return!1;for(var O={},s=0;s<10;s++)O["_"+String.fromCharCode(s)]=s;var d=Object.getOwnPropertyNames(O).map(function(f){return O[f]});if(d.join("")!=="0123456789")return!1;var _={};return"abcdefghijklmnopqrst".split("").forEach(function(f){_[f]=f}),Object.keys(Object.assign({},_)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}return M=k()?Object.assign:function(E,O){for(var s,d=w(E),_,f=1;f<arguments.length;f++){s=Object(arguments[f]);for(var b in s)S.call(s,b)&&(d[b]=s[b]);if(c){_=c(s);for(var g=0;g<_.length;g++)y.call(s,_[g])&&(d[_[g]]=s[_[g]])}}return d},M}/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ne;function De(){if(ne)return C;ne=1,te();var c=Q.default,S=60103;if(C.Fragment=60107,typeof Symbol=="function"&&Symbol.for){var y=Symbol.for;S=y("react.element"),C.Fragment=y("react.fragment")}var w=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,k=Object.prototype.hasOwnProperty,E={key:!0,ref:!0,__self:!0,__source:!0};function O(s,d,_){var f,b={},g=null,x=null;_!==void 0&&(g=""+_),d.key!==void 0&&(g=""+d.key),d.ref!==void 0&&(x=d.ref);for(f in d)k.call(d,f)&&!E.hasOwnProperty(f)&&(b[f]=d[f]);if(s&&s.defaultProps)for(f in d=s.defaultProps,d)b[f]===void 0&&(b[f]=d[f]);return{$$typeof:S,type:s,key:g,ref:x,props:b,_owner:w.current}}return C.jsx=O,C.jsxs=O,C}var q={};/** @license React v17.0.2
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ae;function Ie(){return ae||(ae=1,function(c){process.env.NODE_ENV!=="production"&&function(){var S=Q.default,y=te(),w=60103,k=60106;c.Fragment=60107;var E=60108,O=60114,s=60109,d=60110,_=60112,f=60113,b=60120,g=60115,x=60116,L=60121,ie=60122,oe=60117,ue=60129,fe=60131;if(typeof Symbol=="function"&&Symbol.for){var v=Symbol.for;w=v("react.element"),k=v("react.portal"),c.Fragment=v("react.fragment"),E=v("react.strict_mode"),O=v("react.profiler"),s=v("react.provider"),d=v("react.context"),_=v("react.forward_ref"),f=v("react.suspense"),b=v("react.suspense_list"),g=v("react.memo"),x=v("react.lazy"),L=v("react.block"),ie=v("react.server.block"),oe=v("react.fundamental"),v("react.scope"),v("react.opaque.id"),ue=v("react.debug_trace_mode"),v("react.offscreen"),fe=v("react.legacy_hidden")}var ce=typeof Symbol=="function"&&Symbol.iterator,We="@@iterator";function Le(e){if(e===null||typeof e!="object")return null;var r=ce&&e[ce]||e[We];return typeof r=="function"?r:null}var A=S.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function R(e){{for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];Ne("error",e,t)}}function Ne(e,r,t){{var n=A.ReactDebugCurrentFrame,o=n.getStackAddendum();o!==""&&(r+="%s",t=t.concat([o]));var u=t.map(function(i){return""+i});u.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,u)}}var Ue=!1;function Ve(e){return!!(typeof e=="string"||typeof e=="function"||e===c.Fragment||e===O||e===ue||e===E||e===f||e===b||e===fe||Ue||typeof e=="object"&&e!==null&&(e.$$typeof===x||e.$$typeof===g||e.$$typeof===s||e.$$typeof===d||e.$$typeof===_||e.$$typeof===oe||e.$$typeof===L||e[0]===ie))}function Fe(e,r,t){var n=r.displayName||r.name||"";return e.displayName||(n!==""?t+"("+n+")":t)}function se(e){return e.displayName||"Context"}function m(e){if(e==null)return null;if(typeof e.tag=="number"&&R("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case c.Fragment:return"Fragment";case k:return"Portal";case O:return"Profiler";case E:return"StrictMode";case f:return"Suspense";case b:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case d:var r=e;return se(r)+".Consumer";case s:var t=e;return se(t._context)+".Provider";case _:return Fe(e,e.render,"ForwardRef");case g:return m(e.type);case L:return m(e._render);case x:{var n=e,o=n._payload,u=n._init;try{return m(u(o))}catch{return null}}}return null}var $=0,le,de,ve,pe,_e,ge,he;function Ee(){}Ee.__reactDisabledLog=!0;function Me(){{if($===0){le=console.log,de=console.info,ve=console.warn,pe=console.error,_e=console.group,ge=console.groupCollapsed,he=console.groupEnd;var e={configurable:!0,enumerable:!0,value:Ee,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}$++}}function qe(){{if($--,$===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:y({},e,{value:le}),info:y({},e,{value:de}),warn:y({},e,{value:ve}),error:y({},e,{value:pe}),group:y({},e,{value:_e}),groupCollapsed:y({},e,{value:ge}),groupEnd:y({},e,{value:he})})}$<0&&R("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var B=A.ReactCurrentDispatcher,G;function N(e,r,t){{if(G===void 0)try{throw Error()}catch(o){var n=o.stack.trim().match(/\n( *(at )?)/);G=n&&n[1]||""}return`
`+G+e}}var J=!1,U;{var Be=typeof WeakMap=="function"?WeakMap:Map;U=new Be}function Re(e,r){if(!e||J)return"";{var t=U.get(e);if(t!==void 0)return t}var n;J=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var u;u=B.current,B.current=null,Me();try{if(r){var i=function(){throw Error()};if(Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(T){n=T}Reflect.construct(e,[],i)}else{try{i.call()}catch(T){n=T}e.call(i.prototype)}}else{try{throw Error()}catch(T){n=T}e()}}catch(T){if(T&&n&&typeof T.stack=="string"){for(var a=T.stack.split(`
`),h=n.stack.split(`
`),l=a.length-1,p=h.length-1;l>=1&&p>=0&&a[l]!==h[p];)p--;for(;l>=1&&p>=0;l--,p--)if(a[l]!==h[p]){if(l!==1||p!==1)do if(l--,p--,p<0||a[l]!==h[p]){var j=`
`+a[l].replace(" at new "," at ");return typeof e=="function"&&U.set(e,j),j}while(l>=1&&p>=0);break}}}finally{J=!1,B.current=u,qe(),Error.prepareStackTrace=o}var I=e?e.displayName||e.name:"",ke=I?N(I):"";return typeof e=="function"&&U.set(e,ke),ke}function be(e,r,t){return Re(e,!1)}function Ge(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function V(e,r,t){if(e==null)return"";if(typeof e=="function")return Re(e,Ge(e));if(typeof e=="string")return N(e);switch(e){case f:return N("Suspense");case b:return N("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case _:return be(e.render);case g:return V(e.type,r,t);case L:return be(e._render);case x:{var n=e,o=n._payload,u=n._init;try{return V(u(o),r,t)}catch{}}}return""}var ye={},Oe=A.ReactDebugCurrentFrame;function F(e){if(e){var r=e._owner,t=V(e.type,e._source,r?r.type:null);Oe.setExtraStackFrame(t)}else Oe.setExtraStackFrame(null)}function Je(e,r,t,n,o){{var u=Function.call.bind(Object.prototype.hasOwnProperty);for(var i in e)if(u(e,i)){var a=void 0;try{if(typeof e[i]!="function"){var h=Error((n||"React class")+": "+t+" type `"+i+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[i]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw h.name="Invariant Violation",h}a=e[i](r,i,n,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(l){a=l}a&&!(a instanceof Error)&&(F(o),R("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",n||"React class",t,i,typeof a),F(null)),a instanceof Error&&!(a.message in ye)&&(ye[a.message]=!0,F(o),R("Failed %s type: %s",t,a.message),F(null))}}}var W=A.ReactCurrentOwner,K=Object.prototype.hasOwnProperty,Ke={key:!0,ref:!0,__self:!0,__source:!0},me,je,z;z={};function ze(e){if(K.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function He(e){if(K.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function Xe(e,r){if(typeof e.ref=="string"&&W.current&&r&&W.current.stateNode!==r){var t=m(W.current.type);z[t]||(R('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',m(W.current.type),e.ref),z[t]=!0)}}function Ze(e,r){{var t=function(){me||(me=!0,R("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}}function Qe(e,r){{var t=function(){je||(je=!0,R("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"ref",{get:t,configurable:!0})}}var er=function(e,r,t,n,o,u,i){var a={$$typeof:w,type:e,key:r,ref:t,props:i,_owner:u};return a._store={},Object.defineProperty(a._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(a,"_self",{configurable:!1,enumerable:!1,writable:!1,value:n}),Object.defineProperty(a,"_source",{configurable:!1,enumerable:!1,writable:!1,value:o}),Object.freeze&&(Object.freeze(a.props),Object.freeze(a)),a};function rr(e,r,t,n,o){{var u,i={},a=null,h=null;t!==void 0&&(a=""+t),He(r)&&(a=""+r.key),ze(r)&&(h=r.ref,Xe(r,o));for(u in r)K.call(r,u)&&!Ke.hasOwnProperty(u)&&(i[u]=r[u]);if(e&&e.defaultProps){var l=e.defaultProps;for(u in l)i[u]===void 0&&(i[u]=l[u])}if(a||h){var p=typeof e=="function"?e.displayName||e.name||"Unknown":e;a&&Ze(i,p),h&&Qe(i,p)}return er(e,a,h,o,n,W.current,i)}}var H=A.ReactCurrentOwner,Te=A.ReactDebugCurrentFrame;function D(e){if(e){var r=e._owner,t=V(e.type,e._source,r?r.type:null);Te.setExtraStackFrame(t)}else Te.setExtraStackFrame(null)}var X;X=!1;function Z(e){return typeof e=="object"&&e!==null&&e.$$typeof===w}function Pe(){{if(H.current){var e=m(H.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function tr(e){{if(e!==void 0){var r=e.fileName.replace(/^.*[\\\/]/,""),t=e.lineNumber;return`

Check your code at `+r+":"+t+"."}return""}}var we={};function nr(e){{var r=Pe();if(!r){var t=typeof e=="string"?e:e.displayName||e.name;t&&(r=`

Check the top-level render call using <`+t+">.")}return r}}function xe(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var t=nr(r);if(we[t])return;we[t]=!0;var n="";e&&e._owner&&e._owner!==H.current&&(n=" It was passed a child from "+m(e._owner.type)+"."),D(e),R('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',t,n),D(null)}}function Ce(e,r){{if(typeof e!="object")return;if(Array.isArray(e))for(var t=0;t<e.length;t++){var n=e[t];Z(n)&&xe(n,r)}else if(Z(e))e._store&&(e._store.validated=!0);else if(e){var o=Le(e);if(typeof o=="function"&&o!==e.entries)for(var u=o.call(e),i;!(i=u.next()).done;)Z(i.value)&&xe(i.value,r)}}}function ar(e){{var r=e.type;if(r==null||typeof r=="string")return;var t;if(typeof r=="function")t=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===_||r.$$typeof===g))t=r.propTypes;else return;if(t){var n=m(r);Je(t,e.props,"prop",n,e)}else if(r.PropTypes!==void 0&&!X){X=!0;var o=m(r);R("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",o||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&R("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function ir(e){{for(var r=Object.keys(e.props),t=0;t<r.length;t++){var n=r[t];if(n!=="children"&&n!=="key"){D(e),R("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",n),D(null);break}}e.ref!==null&&(D(e),R("Invalid attribute `ref` supplied to `React.Fragment`."),D(null))}}function Se(e,r,t,n,o,u){{var i=Ve(e);if(!i){var a="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(a+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var h=tr(o);h?a+=h:a+=Pe();var l;e===null?l="null":Array.isArray(e)?l="array":e!==void 0&&e.$$typeof===w?(l="<"+(m(e.type)||"Unknown")+" />",a=" Did you accidentally export a JSX literal instead of a component?"):l=typeof e,R("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",l,a)}var p=rr(e,r,t,o,u);if(p==null)return p;if(i){var j=r.children;if(j!==void 0)if(n)if(Array.isArray(j)){for(var I=0;I<j.length;I++)Ce(j[I],e);Object.freeze&&Object.freeze(j)}else R("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else Ce(j,e)}return e===c.Fragment?ir(p):ar(p),p}}function or(e,r,t){return Se(e,r,t,!0)}function ur(e,r,t){return Se(e,r,t,!1)}var fr=ur,cr=or;c.jsx=fr,c.jsxs=cr}()}(q)),q}(function(c){process.env.NODE_ENV==="production"?c.exports=De():c.exports=Ie()})(ee);const Ye=ee.exports.jsx;function $e(){return Ye(Y.Button,{type:"primary",children:"Click"})}P.Button=$e,Object.defineProperties(P,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
