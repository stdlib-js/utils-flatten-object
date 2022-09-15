// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((r="undefined"!=typeof globalThis?globalThis:r||self).flattenObject={})}(this,(function(r){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,n=Object.defineProperty,o=Object.prototype,i=o.toString,a=o.__defineGetter__,u=o.__defineSetter__,c=o.__lookupGetter__,f=o.__lookupSetter__;e=function(){try{return t({},"x",{}),!0}catch(r){return!1}}()?n:function(r,t,e){var n,l,p,s;if("object"!=typeof r||null===r||"[object Array]"===i.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===i.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((l="value"in e)&&(c.call(r,t)||f.call(r,t)?(n=r.__proto__,r.__proto__=o,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),p="get"in e,s="set"in e,l&&(p||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&a&&a.call(r,t,e.get),s&&u&&u.call(r,t,e.set),r};var l=e;function p(r,t,e){l(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}var s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function y(){return s&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;function g(r,t){return null!=r&&d.call(r,t)}var h="function"==typeof Symbol?Symbol.toStringTag:"";var b=y()?function(r){var t,e,n;if(null==r)return v.call(r);e=r[h],t=g(r,h);try{r[h]=void 0}catch(t){return v.call(r)}return n=v.call(r),t?r[h]=e:delete r[h],n}:function(r){return v.call(r)};var w=Array.isArray?Array.isArray:function(r){return"[object Array]"===b(r)};function m(r){return null!==r&&"object"==typeof r}function j(){var r,t=arguments,e=t[0],n="https://stdlib.io/e/"+e+"?";for(r=1;r<t.length;r++)n+="&arg[]="+encodeURIComponent(t[r]);return n}function A(r){return"number"==typeof r}p(m,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var e,n;if(!w(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(m));var O=Number,E=O.prototype.toString;var I=y();function S(r){return"object"==typeof r&&(r instanceof O||(I?function(r){try{return E.call(r),!0}catch(r){return!1}}(r):"[object Number]"===b(r)))}function _(r){return A(r)||S(r)}p(_,"isPrimitive",A),p(_,"isObject",S);var x=Number.POSITIVE_INFINITY,F=O.NEGATIVE_INFINITY,T=Math.floor;function U(r){return T(r)===r}function k(r){return r<x&&r>F&&U(r)}function P(r){return A(r)&&k(r)}function V(r){return S(r)&&k(r.valueOf())}function C(r){return P(r)||V(r)}function N(r){return P(r)&&r>=0}function $(r){return V(r)&&r.valueOf()>=0}function B(r){return N(r)||$(r)}function M(r){return m(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))}p(C,"isPrimitive",P),p(C,"isObject",V),p(B,"isPrimitive",N),p(B,"isObject",$);var R=/./;function L(r){return"boolean"==typeof r}var G=Boolean.prototype.toString;var z=y();function W(r){return"object"==typeof r&&(r instanceof Boolean||(z?function(r){try{return G.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===b(r)))}function X(r){return L(r)||W(r)}function Z(){return new Function("return this;")()}p(X,"isPrimitive",L),p(X,"isObject",W);var D="object"==typeof self?self:null,Y="object"==typeof window?window:null,H="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},q="object"==typeof H?H:null;var J=function(r){if(arguments.length){if(!L(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return Z()}if(D)return D;if(Y)return Y;if(q)return q;throw new Error("unexpected error. Unable to resolve global object.")}(),K=J.document&&J.document.childNodes,Q=Int8Array;function rr(){return/^\s*function\s*([^(]*)/i}var tr=/^\s*function\s*([^(]*)/i;function er(r){var t,e,n;if(("Object"===(e=b(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=tr.exec(n.toString()))return t[1]}return M(r)?"Buffer":e}p(rr,"REGEXP",tr);var nr="function"==typeof R||"object"==typeof Q||"function"==typeof K?function(r){return er(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?er(r).toLowerCase():t};function or(r){return"function"===nr(r)}var ir,ar=Object.getPrototypeOf;ir=or(Object.getPrototypeOf)?ar:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===b(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var ur=ir;function cr(r){return null==r?null:(r=Object(r),ur(r))}function fr(r){return"string"==typeof r}var lr=String.prototype.valueOf;var pr=y();function sr(r){return"object"==typeof r&&(r instanceof String||(pr?function(r){try{return lr.call(r),!0}catch(r){return!1}}(r):"[object String]"===b(r)))}function yr(r){return fr(r)||sr(r)}function vr(){return/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/}function dr(r){return"number"==typeof r}function gr(r){var t,e="";for(t=0;t<r;t++)e+="0";return e}function hr(r,t,e){var n=!1,o=t-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=e?r+gr(o):gr(o)+r,n&&(r="-"+r)),r}p(yr,"isPrimitive",fr),p(yr,"isObject",sr),p(vr,"REGEXP",/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/);var br=String.prototype.toLowerCase,wr=String.prototype.toUpperCase;function mr(r){var t,e,n;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(e=r.arg,n=parseInt(e,10),!isFinite(n)){if(!dr(e))throw new Error("invalid integer. Value: "+e);n=0}return n<0&&("u"===r.specifier||10!==t)&&(n=4294967295+n+1),n<0?(e=(-n).toString(t),r.precision&&(e=hr(e,r.precision,r.padRight)),e="-"+e):(e=n.toString(t),n||r.precision?r.precision&&(e=hr(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===t&&(r.alternate&&(e="0x"+e),e=r.specifier===wr.call(r.specifier)?wr.call(e):br.call(e)),8===t&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function jr(r){return"string"==typeof r}var Ar=Math.abs,Or=String.prototype.toLowerCase,Er=String.prototype.toUpperCase,Ir=String.prototype.replace,Sr=/e\+(\d)$/,_r=/e-(\d)$/,xr=/^(\d+)$/,Fr=/^(\d+)e/,Tr=/\.0$/,Ur=/\.0*e/,kr=/(\..*[^0])0*e/;function Pr(r){var t,e,n=parseFloat(r.arg);if(!isFinite(n)){if(!dr(r.arg))throw new Error("invalid floating-point number. Value: "+e);n=r.arg}switch(r.specifier){case"e":case"E":e=n.toExponential(r.precision);break;case"f":case"F":e=n.toFixed(r.precision);break;case"g":case"G":Ar(n)<1e-4?((t=r.precision)>0&&(t-=1),e=n.toExponential(t)):e=n.toPrecision(r.precision),r.alternate||(e=Ir.call(e,kr,"$1e"),e=Ir.call(e,Ur,"e"),e=Ir.call(e,Tr,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=Ir.call(e,Sr,"e+0$1"),e=Ir.call(e,_r,"e-0$1"),r.alternate&&(e=Ir.call(e,xr,"$1."),e=Ir.call(e,Fr,"$1.e")),n>=0&&r.sign&&(e=r.sign+e),e=r.specifier===Er.call(r.specifier)?Er.call(e):Or.call(e)}function Vr(r){var t,e="";for(t=0;t<r;t++)e+=" ";return e}function Cr(r,t,e){var n=t-r.length;return n<0?r:r=e?r+Vr(n):Vr(n)+r}var Nr=String.fromCharCode,$r=isNaN,Br=Array.isArray;function Mr(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function Rr(r){var t,e,n,o,i,a,u,c,f;if(!Br(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",u=1,c=0;c<r.length;c++)if(jr(n=r[c]))a+=n;else{if(t=void 0!==n.precision,!(n=Mr(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),e=n.flags,f=0;f<e.length;f++)switch(o=e.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,$r(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(t&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,$r(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,t=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(n.padZeros=!1),n.arg=mr(n);break;case"s":n.maxWidth=t?n.precision:-1;break;case"c":if(!$r(n.arg)){if((i=parseInt(n.arg,10))<0||i>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=$r(i)?String(n.arg):Nr(i)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(n.precision=6),n.arg=Pr(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=hr(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=Cr(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a}var Lr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Gr(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function zr(r){var t,e,n,o;for(e=[],o=0,n=Lr.exec(r);n;)(t=r.slice(o,Lr.lastIndex-n[0].length)).length&&e.push(t),e.push(Gr(n)),o=Lr.lastIndex,n=Lr.exec(r);return(t=r.slice(o)).length&&e.push(t),e}function Wr(r){return"string"==typeof r}function Xr(r){var t,e,n;if(!Wr(r))throw new TypeError(Xr("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=zr(r),(e=new Array(arguments.length))[0]=t,n=1;n<e.length;n++)e[n]=arguments[n];return Rr.apply(null,e)}function Zr(r){if(!fr(r))throw new TypeError(Xr("invalid argument. Must provide a regular expression string. Value: `%s`.",r));return(r=/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/.exec(r))?new RegExp(r[1],r[2]):null}function Dr(r){return r!=r}function Yr(r){return A(r)&&Dr(r)}function Hr(r){return S(r)&&Dr(r.valueOf())}function qr(r){return Yr(r)||Hr(r)}p(qr,"isPrimitive",Yr),p(qr,"isObject",Hr);function Jr(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&U(r.length)&&r.length>=0&&r.length<=9007199254740991}function Kr(r,t,e){var n,o;if(!Jr(r)&&!fr(r))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+r+"`.");if(0===(n=r.length))return-1;if(3===arguments.length){if(!P(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=n)return-1;o=e}else(o=n+e)<0&&(o=0)}else o=0;if(qr(t)){for(;o<n;o++)if(qr(r[o]))return o}else for(;o<n;o++)if(r[o]===t)return o;return-1}function Qr(r){return Object.keys(Object(r))}var rt,tt=void 0!==Object.keys;function et(r){return"[object Arguments]"===b(r)}rt=function(){return et(arguments)}();var nt=rt,ot=Object.prototype.propertyIsEnumerable;var it=!ot.call("beep","0");function at(r,t){var e;return null!=r&&(!(e=ot.call(r,t))&&it&&yr(r)?!Yr(t=+t)&&P(t)&&t>=0&&t<r.length:e)}var ut=4294967295;var ct=nt?et:function(r){return null!==r&&"object"==typeof r&&!w(r)&&"number"==typeof r.length&&U(r.length)&&r.length>=0&&r.length<=ut&&g(r,"callee")&&!at(r,"callee")},ft=Array.prototype.slice;var lt=at((function(){}),"prototype"),pt=!at({toString:null},"toString");function st(r){return r.constructor&&r.constructor.prototype===r}var yt=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],vt="undefined"==typeof window?void 0:window;var dt=function(){var r;if("undefined"===nr(vt))return!1;for(r in vt)try{-1===Kr(yt,r)&&g(vt,r)&&null!==vt[r]&&"object"===nr(vt[r])&&st(vt[r])}catch(r){return!0}return!1}(),gt="undefined"!=typeof window;var ht,bt=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];ht=tt?function(){return 2!==(Qr(arguments)||"").length}(1,2)?function(r){return ct(r)?Qr(ft.call(r)):Qr(r)}:Qr:function(r){var t,e,n,o,i,a,u;if(o=[],ct(r)){for(u=0;u<r.length;u++)o.push(u.toString());return o}if("string"==typeof r){if(r.length>0&&!g(r,"0"))for(u=0;u<r.length;u++)o.push(u.toString())}else{if(!1==(n="function"==typeof r)&&!m(r))return o;e=lt&&n}for(i in r)e&&"prototype"===i||!g(r,i)||o.push(String(i));if(pt)for(t=function(r){if(!1===gt&&!dt)return st(r);try{return st(r)}catch(r){return!1}}(r),u=0;u<bt.length;u++)a=bt[u],t&&"constructor"===a||!g(r,a)||o.push(String(a));return o};var wt=ht,mt=void 0!==Object.getOwnPropertyNames,jt=Object.getOwnPropertyNames;var At=mt?function(r){return jt(Object(r))}:function(r){return wt(Object(r))},Ot=void 0!==Object.getOwnPropertyDescriptor,Et=Object.getOwnPropertyDescriptor;var It=Ot?function(r,t){var e;return null==r||void 0===(e=Et(r,t))?null:e}:function(r,t){return g(r,t)?{configurable:!0,enumerable:!0,writable:!0,value:r[t]}:null};var St=function(){throw new Error("not implemented")};var _t=or(St.from)?function(r){if(!M(r))throw new TypeError("invalid argument. Must provide a Buffer. Value: `"+r+"`");return St.from(r)}:function(r){if(!M(r))throw new TypeError("invalid argument. Must provide a Buffer. Value: `"+r+"`");return new St(r)},xt="function"==typeof Int8Array;var Ft="function"==typeof Int8Array?Int8Array:null;var Tt,Ut="function"==typeof Int8Array?Int8Array:void 0;Tt=function(){var r,t,e;if("function"!=typeof Ft)return!1;try{t=new Ft([1,3.14,-3.14,128]),e=t,r=(xt&&e instanceof Int8Array||"[object Int8Array]"===b(e))&&1===t[0]&&3===t[1]&&-3===t[2]&&-128===t[3]}catch(t){r=!1}return r}()?Ut:function(){throw new Error("not implemented")};var kt=Tt,Pt="function"==typeof Uint8Array;var Vt="function"==typeof Uint8Array?Uint8Array:null;var Ct,Nt="function"==typeof Uint8Array?Uint8Array:void 0;Ct=function(){var r,t,e;if("function"!=typeof Vt)return!1;try{t=new Vt(t=[1,3.14,-3.14,256,257]),e=t,r=(Pt&&e instanceof Uint8Array||"[object Uint8Array]"===b(e))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Nt:function(){throw new Error("not implemented")};var $t=Ct,Bt="function"==typeof Uint8ClampedArray;var Mt="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null;var Rt,Lt="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0;Rt=function(){var r,t,e;if("function"!=typeof Mt)return!1;try{t=new Mt([-1,0,1,3.14,4.99,255,256]),e=t,r=(Bt&&e instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===b(e))&&0===t[0]&&0===t[1]&&1===t[2]&&3===t[3]&&5===t[4]&&255===t[5]&&255===t[6]}catch(t){r=!1}return r}()?Lt:function(){throw new Error("not implemented")};var Gt=Rt,zt="function"==typeof Int16Array;var Wt="function"==typeof Int16Array?Int16Array:null;var Xt,Zt="function"==typeof Int16Array?Int16Array:void 0;Xt=function(){var r,t,e;if("function"!=typeof Wt)return!1;try{t=new Wt([1,3.14,-3.14,32768]),e=t,r=(zt&&e instanceof Int16Array||"[object Int16Array]"===b(e))&&1===t[0]&&3===t[1]&&-3===t[2]&&-32768===t[3]}catch(t){r=!1}return r}()?Zt:function(){throw new Error("not implemented")};var Dt=Xt,Yt="function"==typeof Uint16Array;var Ht="function"==typeof Uint16Array?Uint16Array:null;var qt,Jt="function"==typeof Uint16Array?Uint16Array:void 0;qt=function(){var r,t,e;if("function"!=typeof Ht)return!1;try{t=new Ht(t=[1,3.14,-3.14,65536,65537]),e=t,r=(Yt&&e instanceof Uint16Array||"[object Uint16Array]"===b(e))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Jt:function(){throw new Error("not implemented")};var Kt=qt,Qt="function"==typeof Int32Array;var re="function"==typeof Int32Array?Int32Array:null;var te,ee="function"==typeof Int32Array?Int32Array:void 0;te=function(){var r,t,e;if("function"!=typeof re)return!1;try{t=new re([1,3.14,-3.14,2147483648]),e=t,r=(Qt&&e instanceof Int32Array||"[object Int32Array]"===b(e))&&1===t[0]&&3===t[1]&&-3===t[2]&&-2147483648===t[3]}catch(t){r=!1}return r}()?ee:function(){throw new Error("not implemented")};var ne=te,oe="function"==typeof Uint32Array;var ie="function"==typeof Uint32Array?Uint32Array:null;var ae,ue="function"==typeof Uint32Array?Uint32Array:void 0;ae=function(){var r,t,e;if("function"!=typeof ie)return!1;try{t=new ie(t=[1,3.14,-3.14,4294967296,4294967297]),e=t,r=(oe&&e instanceof Uint32Array||"[object Uint32Array]"===b(e))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?ue:function(){throw new Error("not implemented")};var ce=ae,fe="function"==typeof Float32Array;var le="function"==typeof Float32Array?Float32Array:null;var pe,se="function"==typeof Float32Array?Float32Array:void 0;pe=function(){var r,t,e;if("function"!=typeof le)return!1;try{t=new le([1,3.14,-3.14,5e40]),e=t,r=(fe&&e instanceof Float32Array||"[object Float32Array]"===b(e))&&1===t[0]&&3.140000104904175===t[1]&&-3.140000104904175===t[2]&&t[3]===x}catch(t){r=!1}return r}()?se:function(){throw new Error("not implemented")};var ye=pe,ve="function"==typeof Float64Array;var de="function"==typeof Float64Array?Float64Array:null;var ge,he="function"==typeof Float64Array?Float64Array:void 0;ge=function(){var r,t,e;if("function"!=typeof de)return!1;try{t=new de([1,3.14,-3.14,NaN]),e=t,r=(ve&&e instanceof Float64Array||"[object Float64Array]"===b(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?he:function(){throw new Error("not implemented")};var be=ge;function we(r){return new kt(r)}function me(r){return new $t(r)}function je(r){return new Gt(r)}function Ae(r){return new Dt(r)}function Oe(r){return new Kt(r)}function Ee(r){return new ne(r)}function Ie(r){return new ce(r)}function Se(r){return new ye(r)}function _e(r){return new be(r)}var xe={int8array:we,uint8array:me,uint8clampedarray:je,int16array:Ae,uint16array:Oe,int32array:Ee,uint32array:Ie,float32array:Se,float64array:_e};function Fe(r,t,e,n,o){var i,a,u,c,f,p,s,y,v,d;if(o-=1,"object"!=typeof r||null===r)return r;if(M(r))return _t(r);if(function(r){if("object"!=typeof r||null===r)return!1;if(r instanceof Error)return!0;for(;r;){if("[object Error]"===b(r))return!0;r=cr(r)}return!1}(r))return function(r){var t,e,n,o,i,a,u=[],c=[];for(i=new r.constructor(r.message),u.push(r),c.push(i),r.stack&&(i.stack=r.stack),r.code&&(i.code=r.code),r.errno&&(i.errno=r.errno),r.syscall&&(i.syscall=r.syscall),t=wt(r),a=0;a<t.length;a++)o=t[a],g(e=It(r,o),"value")&&(n=w(r[o])?[]:{},e.value=Fe(r[o],n,u,c,-1)),l(i,o,e);return i}(r);if("date"===(u=nr(r)))return new Date(+r);if("regexp"===u)return Zr(r.toString());if("set"===u)return new Set(r);if("map"===u)return new Map(r);if("string"===u||"boolean"===u||"number"===u)return r.valueOf();if(f=xe[u])return f(r);if("array"!==u&&"object"!==u)return"function"==typeof Object.freeze?function(r){var t,e,n,o,i,a,u,c;for(t=[],o=[],u=Object.create(cr(r)),t.push(r),o.push(u),e=At(r),c=0;c<e.length;c++)n=e[c],g(i=It(r,n),"value")&&(a=w(r[n])?[]:{},i.value=Fe(r[n],a,t,o,-1)),l(u,n,i);return Object.isExtensible(r)||Object.preventExtensions(u),Object.isSealed(r)&&Object.seal(u),Object.isFrozen(r)&&Object.freeze(u),u}(r):{};if(a=wt(r),o>0)for(i=u,d=0;d<a.length;d++)y=r[p=a[d]],u=nr(y),"object"!=typeof y||null===y||"array"!==u&&"object"!==u||M(y)?"object"===i?(g(c=It(r,p),"value")&&(c.value=Fe(y)),l(t,p,c)):t[p]=Fe(y):-1===(v=Kr(e,y))?(s=w(y)?new Array(y.length):{},e.push(y),n.push(s),"array"===i?t[p]=Fe(y,s,e,n,o):(g(c=It(r,p),"value")&&(c.value=Fe(y,s,e,n,o)),l(t,p,c))):t[p]=n[v];else if("array"===u)for(d=0;d<a.length;d++)t[p=a[d]]=r[p];else for(d=0;d<a.length;d++)p=a[d],c=It(r,p),l(t,p,c);return Object.isExtensible(r)||Object.preventExtensions(t),Object.isSealed(r)&&Object.seal(t),Object.isFrozen(r)&&Object.freeze(t),t}function Te(r,t){var e;if(arguments.length>1){if(!N(t))throw new TypeError("invalid argument. `level` must be a nonnegative integer. Value: `"+t+"`.");if(0===t)return r}else t=x;return Fe(r,e=w(r)?new Array(r.length):{},[r],[e],t)}var Ue={delimiter:".",depth:17976931348623157e292,copy:!1};var ke=Object.prototype;function Pe(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!w(r)}(r)&&(!(t=cr(r))||!g(r,"constructor")&&g(t,"constructor")&&or(t.constructor)&&"[object Function]"===b(t.constructor)&&g(t,"isPrototypeOf")&&or(t.isPrototypeOf)&&(t===ke||function(r){var t;for(t in r)if(!g(r,t))return!1;return!0}(r)))}function Ve(r,t){return Pe(t)?g(t,"depth")&&(r.depth=t.depth,!N(r.depth))?new TypeError(j("0jn35","depth",r.depth)):g(t,"copy")&&(r.copy=t.copy,!L(r.copy))?new TypeError(j("0jn30","copy",r.copy)):g(t,"flattenArrays")&&(r.flattenArrays=t.flattenArrays,!L(r.flattenArrays))?new TypeError(j("0jn30","flattenArrays",r.flattenArrays)):g(t,"delimiter")&&(r.delimiter=t.delimiter,!fr(r.delimiter))?new TypeError(j("0jn2i","delimiter",r.delimiter)):null:new TypeError(j("0jn2h",t))}function Ce(r,t,e,n,o){var i,a,u,c;for(e&&(e+=o.delimiter),i=wt(t),c=0;c<i.length;c++)a=t[i[c]],u=e+i[c],n&&(Pe(a)&&wt(a).length||o.flattenArrays&&w(a))?Ce(r,a,u,n-1,o):r[u]=a;return r}function Ne(r,t){var e;return e=0===t.depth?r:Ce({},r,"",t.depth,t),t.copy?Te(e):e}function $e(r,t){var e,n;if(!m(r))throw new TypeError(j("invalid argument. First argument must be an object (except null). Value: `%s`.",r));if(e=Te(Ue),arguments.length>1&&(n=Ve(e,t)))throw n;return Ne(r,e)}function Be(r){var t,e;if(e=Ve(t=Te(Ue),r))throw e;return function(r){if(!m(r))throw new TypeError(j("invalid argument. Must provide an object (except null). Value: `%s`.",r));return Ne(r,t)}}p($e,"factory",Be),r.default=$e,r.factory=Be,Object.defineProperty(r,"__esModule",{value:!0})}));
//# sourceMappingURL=browser.js.map
