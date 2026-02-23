"use strict";var u=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var o=u(function(rr,m){
var j=require('@stdlib/constants-float64-max/dist');function k(){return{delimiter:".",depth:j,copy:!1}}m.exports=k
});var d=u(function(er,p){
var L=require('@stdlib/assert-is-plain-object/dist'),f=require('@stdlib/assert-has-own-property/dist'),V=require('@stdlib/assert-is-string/dist').isPrimitive,q=require('@stdlib/assert-is-boolean/dist').isPrimitive,F=require('@stdlib/assert-is-nonnegative-integer/dist').isPrimitive,v=require('@stdlib/error-tools-fmtprodmsg/dist');function M(e,r){return L(r)?f(r,"depth")&&(e.depth=r.depth,!F(e.depth))?new TypeError(v('1Tt2t',"depth",e.depth)):f(r,"copy")&&(e.copy=r.copy,!q(e.copy))?new TypeError(v('1Tt2o',"copy",e.copy)):f(r,"flattenArrays")&&(e.flattenArrays=r.flattenArrays,!q(e.flattenArrays))?new TypeError(v('1Tt2o',"flattenArrays",e.flattenArrays)):f(r,"delimiter")&&(e.delimiter=r.delimiter,!V(e.delimiter))?new TypeError(v('1Tt2W',"delimiter",e.delimiter)):null:new TypeError(v('1Tt2V',r));}p.exports=M
});var b=u(function(ir,O){
var h=require('@stdlib/utils-keys/dist'),N=require('@stdlib/assert-is-plain-object/dist'),B=require('@stdlib/assert-is-array/dist');function g(e,r,i,t,a){var s,n,c,l;for(i&&(i+=a.delimiter),s=h(r),l=0;l<s.length;l++){if(n=r[s[l]],c=i+s[l],t&&(N(n)&&h(n).length||a.flattenArrays&&B(n))){g(e,n,c,t-1,a);continue}e[c]=n}return e}O.exports=g
});var y=u(function(tr,w){
var I=require('@stdlib/utils-copy/dist'),K=b();function R(e,r){var i;return r.depth===0?i=e:i=K({},e,"",r.depth,r),r.copy?I(i):i}w.exports=R
});var T=u(function(ar,A){
var S=require('@stdlib/assert-is-object-like/dist'),X=require('@stdlib/error-tools-fmtprodmsg/dist'),_=o(),z=d(),C=y();function D(e,r){var i,t;if(!S(e))throw new TypeError(X('1TtES',e));if(i=_(),arguments.length>1&&(t=z(i,r),t))throw t;return C(e,i)}A.exports=D
});var E=u(function(nr,x){
var G=require('@stdlib/assert-is-object-like/dist'),H=require('@stdlib/error-tools-fmtprodmsg/dist'),J=o(),Q=d(),U=y();function W(e){var r,i;if(r=J(),i=Q(r,e),i)throw i;return t;function t(a){if(!G(a))throw new TypeError(H('1TtER',a));return U(a,r)}}x.exports=W
});var Y=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),P=T(),Z=E();Y(P,"factory",Z);module.exports=P;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
