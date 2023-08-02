import{c as H}from"./index.0e8074f8.js";var Q={exports:{}},S=typeof Reflect=="object"?Reflect:null,z=S&&typeof S.apply=="function"?S.apply:function(t,o,u){return Function.prototype.apply.call(t,o,u)},C;S&&typeof S.ownKeys=="function"?C=S.ownKeys:Object.getOwnPropertySymbols?C=function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:C=function(t){return Object.getOwnPropertyNames(t)};function ie(i){console&&console.warn&&console.warn(i)}var X=Number.isNaN||function(t){return t!==t};function y(){y.init.call(this)}Q.exports=y;Q.exports.once=ue;y.EventEmitter=y;y.prototype._events=void 0;y.prototype._eventsCount=0;y.prototype._maxListeners=void 0;var J=10;function T(i){if(typeof i!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof i)}Object.defineProperty(y,"defaultMaxListeners",{enumerable:!0,get:function(){return J},set:function(i){if(typeof i!="number"||i<0||X(i))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+i+".");J=i}});y.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0};y.prototype.setMaxListeners=function(t){if(typeof t!="number"||t<0||X(t))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+t+".");return this._maxListeners=t,this};function Y(i){return i._maxListeners===void 0?y.defaultMaxListeners:i._maxListeners}y.prototype.getMaxListeners=function(){return Y(this)};y.prototype.emit=function(t){for(var o=[],u=1;u<arguments.length;u++)o.push(arguments[u]);var c=t==="error",_=this._events;if(_!==void 0)c=c&&_.error===void 0;else if(!c)return!1;if(c){var l;if(o.length>0&&(l=o[0]),l instanceof Error)throw l;var b=new Error("Unhandled error."+(l?" ("+l.message+")":""));throw b.context=l,b}var L=_[t];if(L===void 0)return!1;if(typeof L=="function")z(L,this,o);else for(var R=L.length,O=te(L,R),u=0;u<R;++u)z(O[u],this,o);return!0};function Z(i,t,o,u){var c,_,l;if(T(o),_=i._events,_===void 0?(_=i._events=Object.create(null),i._eventsCount=0):(_.newListener!==void 0&&(i.emit("newListener",t,o.listener?o.listener:o),_=i._events),l=_[t]),l===void 0)l=_[t]=o,++i._eventsCount;else if(typeof l=="function"?l=_[t]=u?[o,l]:[l,o]:u?l.unshift(o):l.push(o),c=Y(i),c>0&&l.length>c&&!l.warned){l.warned=!0;var b=new Error("Possible EventEmitter memory leak detected. "+l.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");b.name="MaxListenersExceededWarning",b.emitter=i,b.type=t,b.count=l.length,ie(b)}return i}y.prototype.addListener=function(t,o){return Z(this,t,o,!1)};y.prototype.on=y.prototype.addListener;y.prototype.prependListener=function(t,o){return Z(this,t,o,!0)};function oe(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function $(i,t,o){var u={fired:!1,wrapFn:void 0,target:i,type:t,listener:o},c=oe.bind(u);return c.listener=o,u.wrapFn=c,c}y.prototype.once=function(t,o){return T(o),this.on(t,$(this,t,o)),this};y.prototype.prependOnceListener=function(t,o){return T(o),this.prependListener(t,$(this,t,o)),this};y.prototype.removeListener=function(t,o){var u,c,_,l,b;if(T(o),c=this._events,c===void 0)return this;if(u=c[t],u===void 0)return this;if(u===o||u.listener===o)--this._eventsCount===0?this._events=Object.create(null):(delete c[t],c.removeListener&&this.emit("removeListener",t,u.listener||o));else if(typeof u!="function"){for(_=-1,l=u.length-1;l>=0;l--)if(u[l]===o||u[l].listener===o){b=u[l].listener,_=l;break}if(_<0)return this;_===0?u.shift():se(u,_),u.length===1&&(c[t]=u[0]),c.removeListener!==void 0&&this.emit("removeListener",t,b||o)}return this};y.prototype.off=y.prototype.removeListener;y.prototype.removeAllListeners=function(t){var o,u,c;if(u=this._events,u===void 0)return this;if(u.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):u[t]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete u[t]),this;if(arguments.length===0){var _=Object.keys(u),l;for(c=0;c<_.length;++c)l=_[c],l!=="removeListener"&&this.removeAllListeners(l);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(o=u[t],typeof o=="function")this.removeListener(t,o);else if(o!==void 0)for(c=o.length-1;c>=0;c--)this.removeListener(t,o[c]);return this};function k(i,t,o){var u=i._events;if(u===void 0)return[];var c=u[t];return c===void 0?[]:typeof c=="function"?o?[c.listener||c]:[c]:o?fe(c):te(c,c.length)}y.prototype.listeners=function(t){return k(this,t,!0)};y.prototype.rawListeners=function(t){return k(this,t,!1)};y.listenerCount=function(i,t){return typeof i.listenerCount=="function"?i.listenerCount(t):ee.call(i,t)};y.prototype.listenerCount=ee;function ee(i){var t=this._events;if(t!==void 0){var o=t[i];if(typeof o=="function")return 1;if(o!==void 0)return o.length}return 0}y.prototype.eventNames=function(){return this._eventsCount>0?C(this._events):[]};function te(i,t){for(var o=new Array(t),u=0;u<t;++u)o[u]=i[u];return o}function se(i,t){for(;t+1<i.length;t++)i[t]=i[t+1];i.pop()}function fe(i){for(var t=new Array(i.length),o=0;o<t.length;++o)t[o]=i[o].listener||i[o];return t}function ue(i,t){return new Promise(function(o,u){function c(l){i.removeListener(t,_),u(l)}function _(){typeof i.removeListener=="function"&&i.removeListener("error",c),o([].slice.call(arguments))}ne(i,t,_,{once:!0}),t!=="error"&&ae(i,c,{once:!0})})}function ae(i,t,o){typeof i.on=="function"&&ne(i,"error",t,o)}function ne(i,t,o,u){if(typeof i.on=="function")u.once?i.once(t,o):i.on(t,o);else if(typeof i.addEventListener=="function")i.addEventListener(t,function c(_){u.once&&i.removeEventListener(t,c),o(_)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof i)}var ce={exports:{}};/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */(function(i){var t,o,u,c,_,l,b,L,R,O,A,M,N,j,F,G,D,K,W,B,U,V,q;(function(d){var x=typeof H=="object"?H:typeof self=="object"?self:typeof this=="object"?this:{};d(e(x,e(i.exports)));function e(n,r){return n!==x&&(typeof Object.create=="function"?Object.defineProperty(n,"__esModule",{value:!0}):n.__esModule=!0),function(f,a){return n[f]=r?r(f,a):a}}})(function(d){var x=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var r in n)n.hasOwnProperty(r)&&(e[r]=n[r])};t=function(e,n){x(e,n);function r(){this.constructor=e}e.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)},o=Object.assign||function(e){for(var n,r=1,f=arguments.length;r<f;r++){n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},u=function(e,n){var r={};for(var f in e)Object.prototype.hasOwnProperty.call(e,f)&&n.indexOf(f)<0&&(r[f]=e[f]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,f=Object.getOwnPropertySymbols(e);a<f.length;a++)n.indexOf(f[a])<0&&Object.prototype.propertyIsEnumerable.call(e,f[a])&&(r[f[a]]=e[f[a]]);return r},c=function(e,n,r,f){var a=arguments.length,s=a<3?n:f===null?f=Object.getOwnPropertyDescriptor(n,r):f,v;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,n,r,f);else for(var p=e.length-1;p>=0;p--)(v=e[p])&&(s=(a<3?v(s):a>3?v(n,r,s):v(n,r))||s);return a>3&&s&&Object.defineProperty(n,r,s),s},_=function(e,n){return function(r,f){n(r,f,e)}},l=function(e,n){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,n)},b=function(e,n,r,f){function a(s){return s instanceof r?s:new r(function(v){v(s)})}return new(r||(r=Promise))(function(s,v){function p(w){try{h(f.next(w))}catch(E){v(E)}}function g(w){try{h(f.throw(w))}catch(E){v(E)}}function h(w){w.done?s(w.value):a(w.value).then(p,g)}h((f=f.apply(e,n||[])).next())})},L=function(e,n){var r={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},f,a,s,v;return v={next:p(0),throw:p(1),return:p(2)},typeof Symbol=="function"&&(v[Symbol.iterator]=function(){return this}),v;function p(h){return function(w){return g([h,w])}}function g(h){if(f)throw new TypeError("Generator is already executing.");for(;r;)try{if(f=1,a&&(s=h[0]&2?a.return:h[0]?a.throw||((s=a.return)&&s.call(a),0):a.next)&&!(s=s.call(a,h[1])).done)return s;switch(a=0,s&&(h=[h[0]&2,s.value]),h[0]){case 0:case 1:s=h;break;case 4:return r.label++,{value:h[1],done:!1};case 5:r.label++,a=h[1],h=[0];continue;case 7:h=r.ops.pop(),r.trys.pop();continue;default:if(s=r.trys,!(s=s.length>0&&s[s.length-1])&&(h[0]===6||h[0]===2)){r=0;continue}if(h[0]===3&&(!s||h[1]>s[0]&&h[1]<s[3])){r.label=h[1];break}if(h[0]===6&&r.label<s[1]){r.label=s[1],s=h;break}if(s&&r.label<s[2]){r.label=s[2],r.ops.push(h);break}s[2]&&r.ops.pop(),r.trys.pop();continue}h=n.call(e,r)}catch(w){h=[6,w],a=0}finally{f=s=0}if(h[0]&5)throw h[1];return{value:h[0]?h[1]:void 0,done:!0}}},q=function(e,n,r,f){f===void 0&&(f=r),e[f]=n[r]},R=function(e,n){for(var r in e)r!=="default"&&!n.hasOwnProperty(r)&&(n[r]=e[r])},O=function(e){var n=typeof Symbol=="function"&&Symbol.iterator,r=n&&e[n],f=0;if(r)return r.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&f>=e.length&&(e=void 0),{value:e&&e[f++],done:!e}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")},A=function(e,n){var r=typeof Symbol=="function"&&e[Symbol.iterator];if(!r)return e;var f=r.call(e),a,s=[],v;try{for(;(n===void 0||n-- >0)&&!(a=f.next()).done;)s.push(a.value)}catch(p){v={error:p}}finally{try{a&&!a.done&&(r=f.return)&&r.call(f)}finally{if(v)throw v.error}}return s},M=function(){for(var e=[],n=0;n<arguments.length;n++)e=e.concat(A(arguments[n]));return e},N=function(){for(var e=0,n=0,r=arguments.length;n<r;n++)e+=arguments[n].length;for(var f=Array(e),a=0,n=0;n<r;n++)for(var s=arguments[n],v=0,p=s.length;v<p;v++,a++)f[a]=s[v];return f},j=function(e){return this instanceof j?(this.v=e,this):new j(e)},F=function(e,n,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var f=r.apply(e,n||[]),a,s=[];return a={},v("next"),v("throw"),v("return"),a[Symbol.asyncIterator]=function(){return this},a;function v(m){f[m]&&(a[m]=function(P){return new Promise(function(I,re){s.push([m,P,I,re])>1||p(m,P)})})}function p(m,P){try{g(f[m](P))}catch(I){E(s[0][3],I)}}function g(m){m.value instanceof j?Promise.resolve(m.value.v).then(h,w):E(s[0][2],m)}function h(m){p("next",m)}function w(m){p("throw",m)}function E(m,P){m(P),s.shift(),s.length&&p(s[0][0],s[0][1])}},G=function(e){var n,r;return n={},f("next"),f("throw",function(a){throw a}),f("return"),n[Symbol.iterator]=function(){return this},n;function f(a,s){n[a]=e[a]?function(v){return(r=!r)?{value:j(e[a](v)),done:a==="return"}:s?s(v):v}:s}},D=function(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=e[Symbol.asyncIterator],r;return n?n.call(e):(e=typeof O=="function"?O(e):e[Symbol.iterator](),r={},f("next"),f("throw"),f("return"),r[Symbol.asyncIterator]=function(){return this},r);function f(s){r[s]=e[s]&&function(v){return new Promise(function(p,g){v=e[s](v),a(p,g,v.done,v.value)})}}function a(s,v,p,g){Promise.resolve(g).then(function(h){s({value:h,done:p})},v)}},K=function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e},W=function(e){if(e&&e.__esModule)return e;var n={};if(e!=null)for(var r in e)Object.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n.default=e,n},B=function(e){return e&&e.__esModule?e:{default:e}},U=function(e,n){if(!n.has(e))throw new TypeError("attempted to get private field on non-instance");return n.get(e)},V=function(e,n,r){if(!n.has(e))throw new TypeError("attempted to set private field on non-instance");return n.set(e,r),r},d("__extends",t),d("__assign",o),d("__rest",u),d("__decorate",c),d("__param",_),d("__metadata",l),d("__awaiter",b),d("__generator",L),d("__exportStar",R),d("__createBinding",q),d("__values",O),d("__read",A),d("__spread",M),d("__spreadArrays",N),d("__await",j),d("__asyncGenerator",F),d("__asyncDelegator",G),d("__asyncValues",D),d("__makeTemplateObject",K),d("__importStar",W),d("__importDefault",B),d("__classPrivateFieldGet",U),d("__classPrivateFieldSet",V)})})(ce);export{Q as e,ce as t};
