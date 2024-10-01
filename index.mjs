// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-object-like@v0.2.2-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max@v0.2.2-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.2-esm/index.mjs";import{isPrimitive as o}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.2.2-esm/index.mjs";import{isPrimitive as d}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@v0.2.2-esm/index.mjs";import{isPrimitive as m}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.2.2-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-copy@v0.2.2-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-keys@v0.2.2-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array@v0.2.2-esm/index.mjs";function h(){return{delimiter:".",depth:s,copy:!1}}function j(t,e){return i(e)?n(e,"depth")&&(t.depth=e.depth,!m(t.depth))?new TypeError(r("1Tt2t","depth",t.depth)):n(e,"copy")&&(t.copy=e.copy,!d(t.copy))?new TypeError(r("1Tt2o","copy",t.copy)):n(e,"flattenArrays")&&(t.flattenArrays=e.flattenArrays,!d(t.flattenArrays))?new TypeError(r("1Tt2o","flattenArrays",t.flattenArrays)):n(e,"delimiter")&&(t.delimiter=e.delimiter,!o(t.delimiter))?new TypeError(r("1Tt2W","delimiter",t.delimiter)):null:new TypeError(r("1Tt2V",e))}function f(t,e,r,s,n){var o,d,m,p;for(r&&(r+=n.delimiter),o=l(e),p=0;p<o.length;p++)d=e[o[p]],m=r+o[p],s&&(i(d)&&l(d).length||n.flattenArrays&&a(d))?f(t,d,m,s-1,n):t[m]=d;return t}function c(t,e){var r;return r=0===e.depth?t:f({},t,"",e.depth,e),e.copy?p(r):r}function v(t,s){var i,n;if(!e(t))throw new TypeError(r("1TtES",t));if(i=h(),arguments.length>1&&(n=j(i,s)))throw n;return c(t,i)}function y(t){var s,i;if(i=j(s=h(),t))throw i;return function(t){if(!e(t))throw new TypeError(r("1TtER",t));return c(t,s)}}t(v,"factory",y);export{v as default,y as factory};
//# sourceMappingURL=index.mjs.map
