const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AboutView-Dj8z-sbx.js","assets/AboutView-CSIvawM9.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.20
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function lu(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Me={},_s=[],yn=()=>{},Em=()=>!1,Ua=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),uu=t=>t.startsWith("onUpdate:"),bt=Object.assign,hu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Dw=Object.prototype.hasOwnProperty,Ne=(t,e)=>Dw.call(t,e),fe=Array.isArray,ys=t=>Ba(t)==="[object Map]",wm=t=>Ba(t)==="[object Set]",pe=t=>typeof t=="function",et=t=>typeof t=="string",Kn=t=>typeof t=="symbol",je=t=>t!==null&&typeof t=="object",vm=t=>(je(t)||pe(t))&&pe(t.then)&&pe(t.catch),Tm=Object.prototype.toString,Ba=t=>Tm.call(t),Vw=t=>Ba(t).slice(8,-1),Im=t=>Ba(t)==="[object Object]",fu=t=>et(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,wi=lu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),$a=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},xw=/-(\w)/g,Xt=$a(t=>t.replace(xw,(e,n)=>n?n.toUpperCase():"")),Mw=/\B([A-Z])/g,Jr=$a(t=>t.replace(Mw,"-$1").toLowerCase()),ja=$a(t=>t.charAt(0).toUpperCase()+t.slice(1)),Fc=$a(t=>t?`on${ja(t)}`:""),lr=(t,e)=>!Object.is(t,e),Ho=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Am=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},_l=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let wf;const qa=()=>wf||(wf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function du(t){if(fe(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=et(r)?Bw(r):du(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(et(t)||je(t))return t}const Lw=/;(?![^(]*\))/g,Fw=/:([^]+)/,Uw=/\/\*[^]*?\*\//g;function Bw(t){const e={};return t.replace(Uw,"").split(Lw).forEach(n=>{if(n){const r=n.split(Fw);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function pu(t){let e="";if(et(t))e=t;else if(fe(t))for(let n=0;n<t.length;n++){const r=pu(t[n]);r&&(e+=r+" ")}else if(je(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const $w="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",jw=lu($w);function bm(t){return!!t||t===""}const Rm=t=>!!(t&&t.__v_isRef===!0),nn=t=>et(t)?t:t==null?"":fe(t)||je(t)&&(t.toString===Tm||!pe(t.toString))?Rm(t)?nn(t.value):JSON.stringify(t,Sm,2):String(t),Sm=(t,e)=>Rm(e)?Sm(t,e.value):ys(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Uc(r,i)+" =>"]=s,n),{})}:wm(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Uc(n))}:Kn(e)?Uc(e):je(e)&&!fe(e)&&!Im(e)?String(e):e,Uc=(t,e="")=>{var n;return Kn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.20
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Dt;class qw{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Dt,!e&&Dt&&(this.index=(Dt.scopes||(Dt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Dt;try{return Dt=this,e()}finally{Dt=n}}}on(){++this._on===1&&(this.prevScope=Dt,Dt=this)}off(){this._on>0&&--this._on===0&&(Dt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function zw(){return Dt}let Le;const Bc=new WeakSet;class Cm{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Dt&&Dt.active&&Dt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Bc.has(this)&&(Bc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||km(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,vf(this),Om(this);const e=Le,n=on;Le=this,on=!0;try{return this.fn()}finally{Nm(this),Le=e,on=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)_u(e);this.deps=this.depsTail=void 0,vf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Bc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){yl(this)&&this.run()}get dirty(){return yl(this)}}let Pm=0,vi,Ti;function km(t,e=!1){if(t.flags|=8,e){t.next=Ti,Ti=t;return}t.next=vi,vi=t}function mu(){Pm++}function gu(){if(--Pm>0)return;if(Ti){let e=Ti;for(Ti=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;vi;){let e=vi;for(vi=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Om(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Nm(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),_u(r),Hw(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function yl(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Dm(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Dm(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Mi)||(t.globalVersion=Mi,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!yl(t))))return;t.flags|=2;const e=t.dep,n=Le,r=on;Le=t,on=!0;try{Om(t);const s=t.fn(t._value);(e.version===0||lr(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Le=n,on=r,Nm(t),t.flags&=-3}}function _u(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)_u(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Hw(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let on=!0;const Vm=[];function Bn(){Vm.push(on),on=!1}function $n(){const t=Vm.pop();on=t===void 0?!0:t}function vf(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Le;Le=void 0;try{e()}finally{Le=n}}}let Mi=0;class Ww{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class yu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Le||!on||Le===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Le)n=this.activeLink=new Ww(Le,this),Le.deps?(n.prevDep=Le.depsTail,Le.depsTail.nextDep=n,Le.depsTail=n):Le.deps=Le.depsTail=n,xm(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Le.depsTail,n.nextDep=void 0,Le.depsTail.nextDep=n,Le.depsTail=n,Le.deps===n&&(Le.deps=r)}return n}trigger(e){this.version++,Mi++,this.notify(e)}notify(e){mu();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{gu()}}}function xm(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)xm(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const El=new WeakMap,Mr=Symbol(""),wl=Symbol(""),Li=Symbol("");function wt(t,e,n){if(on&&Le){let r=El.get(t);r||El.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new yu),s.map=r,s.key=n),s.track()}}function Vn(t,e,n,r,s,i){const o=El.get(t);if(!o){Mi++;return}const c=l=>{l&&l.trigger()};if(mu(),e==="clear")o.forEach(c);else{const l=fe(t),u=l&&fu(n);if(l&&n==="length"){const f=Number(r);o.forEach((p,m)=>{(m==="length"||m===Li||!Kn(m)&&m>=f)&&c(p)})}else switch((n!==void 0||o.has(void 0))&&c(o.get(n)),u&&c(o.get(Li)),e){case"add":l?u&&c(o.get("length")):(c(o.get(Mr)),ys(t)&&c(o.get(wl)));break;case"delete":l||(c(o.get(Mr)),ys(t)&&c(o.get(wl)));break;case"set":ys(t)&&c(o.get(Mr));break}}gu()}function cs(t){const e=Oe(t);return e===t?e:(wt(e,"iterate",Li),Qt(t)?e:e.map(ut))}function za(t){return wt(t=Oe(t),"iterate",Li),t}const Kw={__proto__:null,[Symbol.iterator](){return $c(this,Symbol.iterator,ut)},concat(...t){return cs(this).concat(...t.map(e=>fe(e)?cs(e):e))},entries(){return $c(this,"entries",t=>(t[1]=ut(t[1]),t))},every(t,e){return On(this,"every",t,e,void 0,arguments)},filter(t,e){return On(this,"filter",t,e,n=>n.map(ut),arguments)},find(t,e){return On(this,"find",t,e,ut,arguments)},findIndex(t,e){return On(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return On(this,"findLast",t,e,ut,arguments)},findLastIndex(t,e){return On(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return On(this,"forEach",t,e,void 0,arguments)},includes(...t){return jc(this,"includes",t)},indexOf(...t){return jc(this,"indexOf",t)},join(t){return cs(this).join(t)},lastIndexOf(...t){return jc(this,"lastIndexOf",t)},map(t,e){return On(this,"map",t,e,void 0,arguments)},pop(){return ci(this,"pop")},push(...t){return ci(this,"push",t)},reduce(t,...e){return Tf(this,"reduce",t,e)},reduceRight(t,...e){return Tf(this,"reduceRight",t,e)},shift(){return ci(this,"shift")},some(t,e){return On(this,"some",t,e,void 0,arguments)},splice(...t){return ci(this,"splice",t)},toReversed(){return cs(this).toReversed()},toSorted(t){return cs(this).toSorted(t)},toSpliced(...t){return cs(this).toSpliced(...t)},unshift(...t){return ci(this,"unshift",t)},values(){return $c(this,"values",ut)}};function $c(t,e,n){const r=za(t),s=r[e]();return r!==t&&!Qt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const Gw=Array.prototype;function On(t,e,n,r,s,i){const o=za(t),c=o!==t&&!Qt(t),l=o[e];if(l!==Gw[e]){const p=l.apply(t,i);return c?ut(p):p}let u=n;o!==t&&(c?u=function(p,m){return n.call(this,ut(p),m,t)}:n.length>2&&(u=function(p,m){return n.call(this,p,m,t)}));const f=l.call(o,u,r);return c&&s?s(f):f}function Tf(t,e,n,r){const s=za(t);let i=n;return s!==t&&(Qt(t)?n.length>3&&(i=function(o,c,l){return n.call(this,o,c,l,t)}):i=function(o,c,l){return n.call(this,o,ut(c),l,t)}),s[e](i,...r)}function jc(t,e,n){const r=Oe(t);wt(r,"iterate",Li);const s=r[e](...n);return(s===-1||s===!1)&&vu(n[0])?(n[0]=Oe(n[0]),r[e](...n)):s}function ci(t,e,n=[]){Bn(),mu();const r=Oe(t)[e].apply(t,n);return gu(),$n(),r}const Qw=lu("__proto__,__v_isRef,__isVue"),Mm=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Kn));function Jw(t){Kn(t)||(t=String(t));const e=Oe(this);return wt(e,"has",t),e.hasOwnProperty(t)}class Lm{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?ov:$m:i?Bm:Um).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=fe(e);if(!s){let l;if(o&&(l=Kw[n]))return l;if(n==="hasOwnProperty")return Jw}const c=Reflect.get(e,n,At(e)?e:r);return(Kn(n)?Mm.has(n):Qw(n))||(s||wt(e,"get",n),i)?c:At(c)?o&&fu(n)?c:c.value:je(c)?s?qm(c):Ha(c):c}}class Fm extends Lm{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=mr(i);if(!Qt(r)&&!mr(r)&&(i=Oe(i),r=Oe(r)),!fe(e)&&At(i)&&!At(r))return l||(i.value=r),!0}const o=fe(e)&&fu(n)?Number(n)<e.length:Ne(e,n),c=Reflect.set(e,n,r,At(e)?e:s);return e===Oe(s)&&(o?lr(r,i)&&Vn(e,"set",n,r):Vn(e,"add",n,r)),c}deleteProperty(e,n){const r=Ne(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Vn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Kn(n)||!Mm.has(n))&&wt(e,"has",n),r}ownKeys(e){return wt(e,"iterate",fe(e)?"length":Mr),Reflect.ownKeys(e)}}class Yw extends Lm{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Xw=new Fm,Zw=new Yw,ev=new Fm(!0);const vl=t=>t,xo=t=>Reflect.getPrototypeOf(t);function tv(t,e,n){return function(...r){const s=this.__v_raw,i=Oe(s),o=ys(i),c=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=s[t](...r),f=n?vl:e?ua:ut;return!e&&wt(i,"iterate",l?wl:Mr),{next(){const{value:p,done:m}=u.next();return m?{value:p,done:m}:{value:c?[f(p[0]),f(p[1])]:f(p),done:m}},[Symbol.iterator](){return this}}}}function Mo(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function nv(t,e){const n={get(s){const i=this.__v_raw,o=Oe(i),c=Oe(s);t||(lr(s,c)&&wt(o,"get",s),wt(o,"get",c));const{has:l}=xo(o),u=e?vl:t?ua:ut;if(l.call(o,s))return u(i.get(s));if(l.call(o,c))return u(i.get(c));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&wt(Oe(s),"iterate",Mr),s.size},has(s){const i=this.__v_raw,o=Oe(i),c=Oe(s);return t||(lr(s,c)&&wt(o,"has",s),wt(o,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const o=this,c=o.__v_raw,l=Oe(c),u=e?vl:t?ua:ut;return!t&&wt(l,"iterate",Mr),c.forEach((f,p)=>s.call(i,u(f),u(p),o))}};return bt(n,t?{add:Mo("add"),set:Mo("set"),delete:Mo("delete"),clear:Mo("clear")}:{add(s){!e&&!Qt(s)&&!mr(s)&&(s=Oe(s));const i=Oe(this);return xo(i).has.call(i,s)||(i.add(s),Vn(i,"add",s,s)),this},set(s,i){!e&&!Qt(i)&&!mr(i)&&(i=Oe(i));const o=Oe(this),{has:c,get:l}=xo(o);let u=c.call(o,s);u||(s=Oe(s),u=c.call(o,s));const f=l.call(o,s);return o.set(s,i),u?lr(i,f)&&Vn(o,"set",s,i):Vn(o,"add",s,i),this},delete(s){const i=Oe(this),{has:o,get:c}=xo(i);let l=o.call(i,s);l||(s=Oe(s),l=o.call(i,s)),c&&c.call(i,s);const u=i.delete(s);return l&&Vn(i,"delete",s,void 0),u},clear(){const s=Oe(this),i=s.size!==0,o=s.clear();return i&&Vn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=tv(s,t,e)}),n}function Eu(t,e){const n=nv(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Ne(n,s)&&s in r?n:r,s,i)}const rv={get:Eu(!1,!1)},sv={get:Eu(!1,!0)},iv={get:Eu(!0,!1)};const Um=new WeakMap,Bm=new WeakMap,$m=new WeakMap,ov=new WeakMap;function av(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function cv(t){return t.__v_skip||!Object.isExtensible(t)?0:av(Vw(t))}function Ha(t){return mr(t)?t:wu(t,!1,Xw,rv,Um)}function jm(t){return wu(t,!1,ev,sv,Bm)}function qm(t){return wu(t,!0,Zw,iv,$m)}function wu(t,e,n,r,s){if(!je(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=cv(t);if(i===0)return t;const o=s.get(t);if(o)return o;const c=new Proxy(t,i===2?r:n);return s.set(t,c),c}function Es(t){return mr(t)?Es(t.__v_raw):!!(t&&t.__v_isReactive)}function mr(t){return!!(t&&t.__v_isReadonly)}function Qt(t){return!!(t&&t.__v_isShallow)}function vu(t){return t?!!t.__v_raw:!1}function Oe(t){const e=t&&t.__v_raw;return e?Oe(e):t}function lv(t){return!Ne(t,"__v_skip")&&Object.isExtensible(t)&&Am(t,"__v_skip",!0),t}const ut=t=>je(t)?Ha(t):t,ua=t=>je(t)?qm(t):t;function At(t){return t?t.__v_isRef===!0:!1}function ur(t){return zm(t,!1)}function uv(t){return zm(t,!0)}function zm(t,e){return At(t)?t:new hv(t,e)}class hv{constructor(e,n){this.dep=new yu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Oe(e),this._value=n?e:ut(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Qt(e)||mr(e);e=r?e:Oe(e),lr(e,n)&&(this._rawValue=e,this._value=r?e:ut(e),this.dep.trigger())}}function ws(t){return At(t)?t.value:t}const fv={get:(t,e,n)=>e==="__v_raw"?t:ws(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return At(s)&&!At(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Hm(t){return Es(t)?t:new Proxy(t,fv)}class dv{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new yu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Mi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Le!==this)return km(this,!0),!0}get value(){const e=this.dep.track();return Dm(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function pv(t,e,n=!1){let r,s;return pe(t)?r=t:(r=t.get,s=t.set),new dv(r,s,n)}const Lo={},ha=new WeakMap;let Or;function mv(t,e=!1,n=Or){if(n){let r=ha.get(n);r||ha.set(n,r=[]),r.push(t)}}function gv(t,e,n=Me){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:c,call:l}=n,u=z=>s?z:Qt(z)||s===!1||s===0?xn(z,1):xn(z);let f,p,m,_,w=!1,C=!1;if(At(t)?(p=()=>t.value,w=Qt(t)):Es(t)?(p=()=>u(t),w=!0):fe(t)?(C=!0,w=t.some(z=>Es(z)||Qt(z)),p=()=>t.map(z=>{if(At(z))return z.value;if(Es(z))return u(z);if(pe(z))return l?l(z,2):z()})):pe(t)?e?p=l?()=>l(t,2):t:p=()=>{if(m){Bn();try{m()}finally{$n()}}const z=Or;Or=f;try{return l?l(t,3,[_]):t(_)}finally{Or=z}}:p=yn,e&&s){const z=p,oe=s===!0?1/0:s;p=()=>xn(z(),oe)}const S=zw(),$=()=>{f.stop(),S&&S.active&&hu(S.effects,f)};if(i&&e){const z=e;e=(...oe)=>{z(...oe),$()}}let U=C?new Array(t.length).fill(Lo):Lo;const j=z=>{if(!(!(f.flags&1)||!f.dirty&&!z))if(e){const oe=f.run();if(s||w||(C?oe.some((me,A)=>lr(me,U[A])):lr(oe,U))){m&&m();const me=Or;Or=f;try{const A=[oe,U===Lo?void 0:C&&U[0]===Lo?[]:U,_];U=oe,l?l(e,3,A):e(...A)}finally{Or=me}}}else f.run()};return c&&c(j),f=new Cm(p),f.scheduler=o?()=>o(j,!1):j,_=z=>mv(z,!1,f),m=f.onStop=()=>{const z=ha.get(f);if(z){if(l)l(z,4);else for(const oe of z)oe();ha.delete(f)}},e?r?j(!0):U=f.run():o?o(j.bind(null,!0),!0):f.run(),$.pause=f.pause.bind(f),$.resume=f.resume.bind(f),$.stop=$,$}function xn(t,e=1/0,n){if(e<=0||!je(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,At(t))xn(t.value,e,n);else if(fe(t))for(let r=0;r<t.length;r++)xn(t[r],e,n);else if(wm(t)||ys(t))t.forEach(r=>{xn(r,e,n)});else if(Im(t)){for(const r in t)xn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&xn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.20
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function to(t,e,n,r){try{return r?t(...r):t()}catch(s){Wa(s,e,n)}}function Rn(t,e,n,r){if(pe(t)){const s=to(t,e,n,r);return s&&vm(s)&&s.catch(i=>{Wa(i,e,n)}),s}if(fe(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Rn(t[i],e,n,r));return s}}function Wa(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Me;if(e){let c=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const f=c.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](t,l,u)===!1)return}c=c.parent}if(i){Bn(),to(i,null,10,[t,l,u]),$n();return}}_v(t,n,s,r,o)}function _v(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const kt=[];let mn=-1;const vs=[];let tr=null,ls=0;const Wm=Promise.resolve();let fa=null;function Km(t){const e=fa||Wm;return t?e.then(this?t.bind(this):t):e}function yv(t){let e=mn+1,n=kt.length;for(;e<n;){const r=e+n>>>1,s=kt[r],i=Fi(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Tu(t){if(!(t.flags&1)){const e=Fi(t),n=kt[kt.length-1];!n||!(t.flags&2)&&e>=Fi(n)?kt.push(t):kt.splice(yv(e),0,t),t.flags|=1,Gm()}}function Gm(){fa||(fa=Wm.then(Jm))}function Ev(t){fe(t)?vs.push(...t):tr&&t.id===-1?tr.splice(ls+1,0,t):t.flags&1||(vs.push(t),t.flags|=1),Gm()}function If(t,e,n=mn+1){for(;n<kt.length;n++){const r=kt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;kt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Qm(t){if(vs.length){const e=[...new Set(vs)].sort((n,r)=>Fi(n)-Fi(r));if(vs.length=0,tr){tr.push(...e);return}for(tr=e,ls=0;ls<tr.length;ls++){const n=tr[ls];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}tr=null,ls=0}}const Fi=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Jm(t){try{for(mn=0;mn<kt.length;mn++){const e=kt[mn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),to(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;mn<kt.length;mn++){const e=kt[mn];e&&(e.flags&=-2)}mn=-1,kt.length=0,Qm(),fa=null,(kt.length||vs.length)&&Jm()}}let ft=null,Ym=null;function da(t){const e=ft;return ft=t,Ym=t&&t.type.__scopeId||null,e}function Ke(t,e=ft,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Df(-1);const i=da(e);let o;try{o=t(...s)}finally{da(i),r._d&&Df(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Br(t,e){if(ft===null)return t;const n=Ja(ft),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,l=Me]=e[s];i&&(pe(i)&&(i={mounted:i,updated:i}),i.deep&&xn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:l}))}return t}function Pr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let l=c.dir[r];l&&(Bn(),Rn(l,n,8,[t.el,c,t,e]),$n())}}const wv=Symbol("_vte"),vv=t=>t.__isTeleport,Tv=Symbol("_leaveCb");function Iu(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Iu(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Xm(t,e){return pe(t)?bt({name:t.name},e,{setup:t}):t}function Zm(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Ii(t,e,n,r,s=!1){if(fe(t)){t.forEach((w,C)=>Ii(w,e&&(fe(e)?e[C]:e),n,r,s));return}if(Ts(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Ii(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Ja(r.component):r.el,o=s?null:i,{i:c,r:l}=t,u=e&&e.r,f=c.refs===Me?c.refs={}:c.refs,p=c.setupState,m=Oe(p),_=p===Me?Em:w=>Ne(m,w);if(u!=null&&u!==l){if(et(u))f[u]=null,_(u)&&(p[u]=null);else if(At(u)){u.value=null;const w=e;w.k&&(f[w.k]=null)}}if(pe(l))to(l,c,12,[o,f]);else{const w=et(l),C=At(l);if(w||C){const S=()=>{if(t.f){const $=w?_(l)?p[l]:f[l]:l.value;if(s)fe($)&&hu($,i);else if(fe($))$.includes(i)||$.push(i);else if(w)f[l]=[i],_(l)&&(p[l]=f[l]);else{const U=[i];l.value=U,t.k&&(f[t.k]=U)}}else w?(f[l]=o,_(l)&&(p[l]=o)):C&&(l.value=o,t.k&&(f[t.k]=o))};o?(S.id=-1,jt(S,n)):S()}}}qa().requestIdleCallback;qa().cancelIdleCallback;const Ts=t=>!!t.type.__asyncLoader,eg=t=>t.type.__isKeepAlive;function Iv(t,e){tg(t,"a",e)}function Av(t,e){tg(t,"da",e)}function tg(t,e,n=Tt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Ka(e,r,n),n){let s=n.parent;for(;s&&s.parent;)eg(s.parent.vnode)&&bv(r,e,n,s),s=s.parent}}function bv(t,e,n,r){const s=Ka(e,t,r,!0);rg(()=>{hu(r[e],s)},n)}function Ka(t,e,n=Tt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Bn();const c=no(n),l=Rn(e,n,t,o);return c(),$n(),l});return r?s.unshift(i):s.push(i),i}}const Gn=t=>(e,n=Tt)=>{(!$i||t==="sp")&&Ka(t,(...r)=>e(...r),n)},Rv=Gn("bm"),ng=Gn("m"),Sv=Gn("bu"),Cv=Gn("u"),Pv=Gn("bum"),rg=Gn("um"),kv=Gn("sp"),Ov=Gn("rtg"),Nv=Gn("rtc");function Dv(t,e=Tt){Ka("ec",t,e)}const Vv="components";function Wo(t,e){return Mv(Vv,t,!0,e)||t}const xv=Symbol.for("v-ndc");function Mv(t,e,n=!0,r=!1){const s=ft||Tt;if(s){const i=s.type;{const c=AT(i,!1);if(c&&(c===e||c===Xt(e)||c===ja(Xt(e))))return i}const o=Af(s[t]||i[t],e)||Af(s.appContext[t],e);return!o&&r?i:o}}function Af(t,e){return t&&(t[e]||t[Xt(e)]||t[ja(Xt(e))])}function Lv(t,e,n,r){let s;const i=n,o=fe(t);if(o||et(t)){const c=o&&Es(t);let l=!1,u=!1;c&&(l=!Qt(t),u=mr(t),t=za(t)),s=new Array(t.length);for(let f=0,p=t.length;f<p;f++)s[f]=e(l?u?ua(ut(t[f])):ut(t[f]):t[f],f,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let c=0;c<t;c++)s[c]=e(c+1,c,void 0,i)}else if(je(t))if(t[Symbol.iterator])s=Array.from(t,(c,l)=>e(c,l,void 0,i));else{const c=Object.keys(t);s=new Array(c.length);for(let l=0,u=c.length;l<u;l++){const f=c[l];s[l]=e(t[f],f,l,i)}}else s=[];return s}function qc(t,e,n={},r,s){if(ft.ce||ft.parent&&Ts(ft.parent)&&ft.parent.ce)return e!=="default"&&(n.name=e),$e(),Rl(st,null,[be("slot",n,r)],64);let i=t[e];i&&i._c&&(i._d=!1),$e();const o=i&&sg(i(n)),c=n.key||o&&o.key,l=Rl(st,{key:(c&&!Kn(c)?c:`_${e}`)+(!o&&r?"_fb":"")},o||[],o&&t._===1?64:-2);return i&&i._c&&(i._d=!0),l}function sg(t){return t.some(e=>Bi(e)?!(e.type===jn||e.type===st&&!sg(e.children)):!0)?t:null}const Tl=t=>t?Ag(t)?Ja(t):Tl(t.parent):null,Ai=bt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Tl(t.parent),$root:t=>Tl(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>og(t),$forceUpdate:t=>t.f||(t.f=()=>{Tu(t.update)}),$nextTick:t=>t.n||(t.n=Km.bind(t.proxy)),$watch:t=>sT.bind(t)}),zc=(t,e)=>t!==Me&&!t.__isScriptSetup&&Ne(t,e),Fv={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:l}=t;let u;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(zc(r,e))return o[e]=1,r[e];if(s!==Me&&Ne(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&Ne(u,e))return o[e]=3,i[e];if(n!==Me&&Ne(n,e))return o[e]=4,n[e];Il&&(o[e]=0)}}const f=Ai[e];let p,m;if(f)return e==="$attrs"&&wt(t.attrs,"get",""),f(t);if((p=c.__cssModules)&&(p=p[e]))return p;if(n!==Me&&Ne(n,e))return o[e]=4,n[e];if(m=l.config.globalProperties,Ne(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return zc(s,e)?(s[e]=n,!0):r!==Me&&Ne(r,e)?(r[e]=n,!0):Ne(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i,type:o}},c){let l,u;return!!(n[c]||t!==Me&&c[0]!=="$"&&Ne(t,c)||zc(e,c)||(l=i[0])&&Ne(l,c)||Ne(r,c)||Ne(Ai,c)||Ne(s.config.globalProperties,c)||(u=o.__cssModules)&&u[c])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ne(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function bf(t){return fe(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Il=!0;function Uv(t){const e=og(t),n=t.proxy,r=t.ctx;Il=!1,e.beforeCreate&&Rf(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:l,inject:u,created:f,beforeMount:p,mounted:m,beforeUpdate:_,updated:w,activated:C,deactivated:S,beforeDestroy:$,beforeUnmount:U,destroyed:j,unmounted:z,render:oe,renderTracked:me,renderTriggered:A,errorCaptured:y,serverPrefetch:T,expose:b,inheritAttrs:R,components:P,directives:v,filters:qe}=e;if(u&&Bv(u,r,null),o)for(const Ee in o){const ue=o[Ee];pe(ue)&&(r[Ee]=ue.bind(n))}if(s){const Ee=s.call(n,n);je(Ee)&&(t.data=Ha(Ee))}if(Il=!0,i)for(const Ee in i){const ue=i[Ee],pt=pe(ue)?ue.bind(n,n):pe(ue.get)?ue.get.bind(n,n):yn,Ft=!pe(ue)&&pe(ue.set)?ue.set.bind(n):yn,Qe=tn({get:pt,set:Ft});Object.defineProperty(r,Ee,{enumerable:!0,configurable:!0,get:()=>Qe.value,set:Pe=>Qe.value=Pe})}if(c)for(const Ee in c)ig(c[Ee],r,n,Ee);if(l){const Ee=pe(l)?l.call(n):l;Reflect.ownKeys(Ee).forEach(ue=>{Ko(ue,Ee[ue])})}f&&Rf(f,t,"c");function Ce(Ee,ue){fe(ue)?ue.forEach(pt=>Ee(pt.bind(n))):ue&&Ee(ue.bind(n))}if(Ce(Rv,p),Ce(ng,m),Ce(Sv,_),Ce(Cv,w),Ce(Iv,C),Ce(Av,S),Ce(Dv,y),Ce(Nv,me),Ce(Ov,A),Ce(Pv,U),Ce(rg,z),Ce(kv,T),fe(b))if(b.length){const Ee=t.exposed||(t.exposed={});b.forEach(ue=>{Object.defineProperty(Ee,ue,{get:()=>n[ue],set:pt=>n[ue]=pt,enumerable:!0})})}else t.exposed||(t.exposed={});oe&&t.render===yn&&(t.render=oe),R!=null&&(t.inheritAttrs=R),P&&(t.components=P),v&&(t.directives=v),T&&Zm(t)}function Bv(t,e,n=yn){fe(t)&&(t=Al(t));for(const r in t){const s=t[r];let i;je(s)?"default"in s?i=En(s.from||r,s.default,!0):i=En(s.from||r):i=En(s),At(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Rf(t,e,n){Rn(fe(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function ig(t,e,n,r){let s=r.includes(".")?Eg(n,r):()=>n[r];if(et(t)){const i=e[t];pe(i)&&Go(s,i)}else if(pe(t))Go(s,t.bind(n));else if(je(t))if(fe(t))t.forEach(i=>ig(i,e,n,r));else{const i=pe(t.handler)?t.handler.bind(n):e[t.handler];pe(i)&&Go(s,i,t)}}function og(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(u=>pa(l,u,o,!0)),pa(l,e,o)),je(e)&&i.set(e,l),l}function pa(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&pa(t,i,n,!0),s&&s.forEach(o=>pa(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=$v[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const $v={data:Sf,props:Cf,emits:Cf,methods:di,computed:di,beforeCreate:Pt,created:Pt,beforeMount:Pt,mounted:Pt,beforeUpdate:Pt,updated:Pt,beforeDestroy:Pt,beforeUnmount:Pt,destroyed:Pt,unmounted:Pt,activated:Pt,deactivated:Pt,errorCaptured:Pt,serverPrefetch:Pt,components:di,directives:di,watch:qv,provide:Sf,inject:jv};function Sf(t,e){return e?t?function(){return bt(pe(t)?t.call(this,this):t,pe(e)?e.call(this,this):e)}:e:t}function jv(t,e){return di(Al(t),Al(e))}function Al(t){if(fe(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Pt(t,e){return t?[...new Set([].concat(t,e))]:e}function di(t,e){return t?bt(Object.create(null),t,e):e}function Cf(t,e){return t?fe(t)&&fe(e)?[...new Set([...t,...e])]:bt(Object.create(null),bf(t),bf(e??{})):e}function qv(t,e){if(!t)return e;if(!e)return t;const n=bt(Object.create(null),t);for(const r in e)n[r]=Pt(t[r],e[r]);return n}function ag(){return{app:null,config:{isNativeTag:Em,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let zv=0;function Hv(t,e){return function(r,s=null){pe(r)||(r=bt({},r)),s!=null&&!je(s)&&(s=null);const i=ag(),o=new WeakSet,c=[];let l=!1;const u=i.app={_uid:zv++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:RT,get config(){return i.config},set config(f){},use(f,...p){return o.has(f)||(f&&pe(f.install)?(o.add(f),f.install(u,...p)):pe(f)&&(o.add(f),f(u,...p))),u},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),u},component(f,p){return p?(i.components[f]=p,u):i.components[f]},directive(f,p){return p?(i.directives[f]=p,u):i.directives[f]},mount(f,p,m){if(!l){const _=u._ceVNode||be(r,s);return _.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),t(_,f,m),l=!0,u._container=f,f.__vue_app__=u,Ja(_.component)}},onUnmount(f){c.push(f)},unmount(){l&&(Rn(c,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(f,p){return i.provides[f]=p,u},runWithContext(f){const p=Is;Is=u;try{return f()}finally{Is=p}}};return u}}let Is=null;function Ko(t,e){if(Tt){let n=Tt.provides;const r=Tt.parent&&Tt.parent.provides;r===n&&(n=Tt.provides=Object.create(r)),n[t]=e}}function En(t,e,n=!1){const r=ET();if(r||Is){let s=Is?Is._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&pe(e)?e.call(r&&r.proxy):e}}const cg={},lg=()=>Object.create(cg),ug=t=>Object.getPrototypeOf(t)===cg;function Wv(t,e,n,r=!1){const s={},i=lg();t.propsDefaults=Object.create(null),hg(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:jm(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Kv(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=Oe(s),[l]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let m=f[p];if(Ga(t.emitsOptions,m))continue;const _=e[m];if(l)if(Ne(i,m))_!==i[m]&&(i[m]=_,u=!0);else{const w=Xt(m);s[w]=bl(l,c,w,_,t,!1)}else _!==i[m]&&(i[m]=_,u=!0)}}}else{hg(t,e,s,i)&&(u=!0);let f;for(const p in c)(!e||!Ne(e,p)&&((f=Jr(p))===p||!Ne(e,f)))&&(l?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=bl(l,c,p,void 0,t,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!Ne(e,p))&&(delete i[p],u=!0)}u&&Vn(t.attrs,"set","")}function hg(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let l in e){if(wi(l))continue;const u=e[l];let f;s&&Ne(s,f=Xt(l))?!i||!i.includes(f)?n[f]=u:(c||(c={}))[f]=u:Ga(t.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=Oe(n),u=c||Me;for(let f=0;f<i.length;f++){const p=i[f];n[p]=bl(s,l,p,u[p],t,!Ne(u,p))}}return o}function bl(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=Ne(o,"default");if(c&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&pe(l)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const f=no(s);r=u[n]=l.call(null,e),f()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===Jr(n))&&(r=!0))}return r}const Gv=new WeakMap;function fg(t,e,n=!1){const r=n?Gv:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let l=!1;if(!pe(t)){const f=p=>{l=!0;const[m,_]=fg(p,e,!0);bt(o,m),_&&c.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!l)return je(t)&&r.set(t,_s),_s;if(fe(i))for(let f=0;f<i.length;f++){const p=Xt(i[f]);Pf(p)&&(o[p]=Me)}else if(i)for(const f in i){const p=Xt(f);if(Pf(p)){const m=i[f],_=o[p]=fe(m)||pe(m)?{type:m}:bt({},m),w=_.type;let C=!1,S=!0;if(fe(w))for(let $=0;$<w.length;++$){const U=w[$],j=pe(U)&&U.name;if(j==="Boolean"){C=!0;break}else j==="String"&&(S=!1)}else C=pe(w)&&w.name==="Boolean";_[0]=C,_[1]=S,(C||Ne(_,"default"))&&c.push(p)}}const u=[o,c];return je(t)&&r.set(t,u),u}function Pf(t){return t[0]!=="$"&&!wi(t)}const Au=t=>t==="_"||t==="_ctx"||t==="$stable",bu=t=>fe(t)?t.map(_n):[_n(t)],Qv=(t,e,n)=>{if(e._n)return e;const r=Ke((...s)=>bu(e(...s)),n);return r._c=!1,r},dg=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Au(s))continue;const i=t[s];if(pe(i))e[s]=Qv(s,i,r);else if(i!=null){const o=bu(i);e[s]=()=>o}}},pg=(t,e)=>{const n=bu(e);t.slots.default=()=>n},mg=(t,e,n)=>{for(const r in e)(n||!Au(r))&&(t[r]=e[r])},Jv=(t,e,n)=>{const r=t.slots=lg();if(t.vnode.shapeFlag&32){const s=e._;s?(mg(r,e,n),n&&Am(r,"_",s,!0)):dg(e,r)}else e&&pg(t,e)},Yv=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Me;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:mg(s,e,n):(i=!e.$stable,dg(e,s)),o=e}else e&&(pg(t,e),o={default:1});if(i)for(const c in s)!Au(c)&&o[c]==null&&delete s[c]},jt=hT;function Xv(t){return Zv(t)}function Zv(t,e){const n=qa();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:l,setText:u,setElementText:f,parentNode:p,nextSibling:m,setScopeId:_=yn,insertStaticContent:w}=t,C=(E,I,k,x=null,B=null,M=null,Q=void 0,K=null,H=!!I.dynamicChildren)=>{if(E===I)return;E&&!li(E,I)&&(x=V(E),Pe(E,B,M,!0),E=null),I.patchFlag===-2&&(H=!1,I.dynamicChildren=null);const{type:q,ref:se,shapeFlag:Y}=I;switch(q){case Qa:S(E,I,k,x);break;case jn:$(E,I,k,x);break;case Wc:E==null&&U(I,k,x,Q);break;case st:P(E,I,k,x,B,M,Q,K,H);break;default:Y&1?oe(E,I,k,x,B,M,Q,K,H):Y&6?v(E,I,k,x,B,M,Q,K,H):(Y&64||Y&128)&&q.process(E,I,k,x,B,M,Q,K,H,te)}se!=null&&B?Ii(se,E&&E.ref,M,I||E,!I):se==null&&E&&E.ref!=null&&Ii(E.ref,null,M,E,!0)},S=(E,I,k,x)=>{if(E==null)r(I.el=c(I.children),k,x);else{const B=I.el=E.el;I.children!==E.children&&u(B,I.children)}},$=(E,I,k,x)=>{E==null?r(I.el=l(I.children||""),k,x):I.el=E.el},U=(E,I,k,x)=>{[E.el,E.anchor]=w(E.children,I,k,x,E.el,E.anchor)},j=({el:E,anchor:I},k,x)=>{let B;for(;E&&E!==I;)B=m(E),r(E,k,x),E=B;r(I,k,x)},z=({el:E,anchor:I})=>{let k;for(;E&&E!==I;)k=m(E),s(E),E=k;s(I)},oe=(E,I,k,x,B,M,Q,K,H)=>{I.type==="svg"?Q="svg":I.type==="math"&&(Q="mathml"),E==null?me(I,k,x,B,M,Q,K,H):T(E,I,B,M,Q,K,H)},me=(E,I,k,x,B,M,Q,K)=>{let H,q;const{props:se,shapeFlag:Y,transition:ne,dirs:le}=E;if(H=E.el=o(E.type,M,se&&se.is,se),Y&8?f(H,E.children):Y&16&&y(E.children,H,null,x,B,Hc(E,M),Q,K),le&&Pr(E,null,x,"created"),A(H,E,E.scopeId,Q,x),se){for(const ge in se)ge!=="value"&&!wi(ge)&&i(H,ge,null,se[ge],M,x);"value"in se&&i(H,"value",null,se.value,M),(q=se.onVnodeBeforeMount)&&dn(q,x,E)}le&&Pr(E,null,x,"beforeMount");const ie=eT(B,ne);ie&&ne.beforeEnter(H),r(H,I,k),((q=se&&se.onVnodeMounted)||ie||le)&&jt(()=>{q&&dn(q,x,E),ie&&ne.enter(H),le&&Pr(E,null,x,"mounted")},B)},A=(E,I,k,x,B)=>{if(k&&_(E,k),x)for(let M=0;M<x.length;M++)_(E,x[M]);if(B){let M=B.subTree;if(I===M||vg(M.type)&&(M.ssContent===I||M.ssFallback===I)){const Q=B.vnode;A(E,Q,Q.scopeId,Q.slotScopeIds,B.parent)}}},y=(E,I,k,x,B,M,Q,K,H=0)=>{for(let q=H;q<E.length;q++){const se=E[q]=K?nr(E[q]):_n(E[q]);C(null,se,I,k,x,B,M,Q,K)}},T=(E,I,k,x,B,M,Q)=>{const K=I.el=E.el;let{patchFlag:H,dynamicChildren:q,dirs:se}=I;H|=E.patchFlag&16;const Y=E.props||Me,ne=I.props||Me;let le;if(k&&kr(k,!1),(le=ne.onVnodeBeforeUpdate)&&dn(le,k,I,E),se&&Pr(I,E,k,"beforeUpdate"),k&&kr(k,!0),(Y.innerHTML&&ne.innerHTML==null||Y.textContent&&ne.textContent==null)&&f(K,""),q?b(E.dynamicChildren,q,K,k,x,Hc(I,B),M):Q||ue(E,I,K,null,k,x,Hc(I,B),M,!1),H>0){if(H&16)R(K,Y,ne,k,B);else if(H&2&&Y.class!==ne.class&&i(K,"class",null,ne.class,B),H&4&&i(K,"style",Y.style,ne.style,B),H&8){const ie=I.dynamicProps;for(let ge=0;ge<ie.length;ge++){const Ie=ie[ge],it=Y[Ie],ot=ne[Ie];(ot!==it||Ie==="value")&&i(K,Ie,it,ot,B,k)}}H&1&&E.children!==I.children&&f(K,I.children)}else!Q&&q==null&&R(K,Y,ne,k,B);((le=ne.onVnodeUpdated)||se)&&jt(()=>{le&&dn(le,k,I,E),se&&Pr(I,E,k,"updated")},x)},b=(E,I,k,x,B,M,Q)=>{for(let K=0;K<I.length;K++){const H=E[K],q=I[K],se=H.el&&(H.type===st||!li(H,q)||H.shapeFlag&198)?p(H.el):k;C(H,q,se,null,x,B,M,Q,!0)}},R=(E,I,k,x,B)=>{if(I!==k){if(I!==Me)for(const M in I)!wi(M)&&!(M in k)&&i(E,M,I[M],null,B,x);for(const M in k){if(wi(M))continue;const Q=k[M],K=I[M];Q!==K&&M!=="value"&&i(E,M,K,Q,B,x)}"value"in k&&i(E,"value",I.value,k.value,B)}},P=(E,I,k,x,B,M,Q,K,H)=>{const q=I.el=E?E.el:c(""),se=I.anchor=E?E.anchor:c("");let{patchFlag:Y,dynamicChildren:ne,slotScopeIds:le}=I;le&&(K=K?K.concat(le):le),E==null?(r(q,k,x),r(se,k,x),y(I.children||[],k,se,B,M,Q,K,H)):Y>0&&Y&64&&ne&&E.dynamicChildren?(b(E.dynamicChildren,ne,k,B,M,Q,K),(I.key!=null||B&&I===B.subTree)&&gg(E,I,!0)):ue(E,I,k,se,B,M,Q,K,H)},v=(E,I,k,x,B,M,Q,K,H)=>{I.slotScopeIds=K,E==null?I.shapeFlag&512?B.ctx.activate(I,k,x,Q,H):qe(I,k,x,B,M,Q,H):St(E,I,H)},qe=(E,I,k,x,B,M,Q)=>{const K=E.component=yT(E,x,B);if(eg(E)&&(K.ctx.renderer=te),wT(K,!1,Q),K.asyncDep){if(B&&B.registerDep(K,Ce,Q),!E.el){const H=K.subTree=be(jn);$(null,H,I,k),E.placeholder=H.el}}else Ce(K,E,I,k,B,M,Q)},St=(E,I,k)=>{const x=I.component=E.component;if(lT(E,I,k))if(x.asyncDep&&!x.asyncResolved){Ee(x,I,k);return}else x.next=I,x.update();else I.el=E.el,x.vnode=I},Ce=(E,I,k,x,B,M,Q)=>{const K=()=>{if(E.isMounted){let{next:Y,bu:ne,u:le,parent:ie,vnode:ge}=E;{const mt=_g(E);if(mt){Y&&(Y.el=ge.el,Ee(E,Y,Q)),mt.asyncDep.then(()=>{E.isUnmounted||K()});return}}let Ie=Y,it;kr(E,!1),Y?(Y.el=ge.el,Ee(E,Y,Q)):Y=ge,ne&&Ho(ne),(it=Y.props&&Y.props.onVnodeBeforeUpdate)&&dn(it,ie,Y,ge),kr(E,!0);const ot=Of(E),zt=E.subTree;E.subTree=ot,C(zt,ot,p(zt.el),V(zt),E,B,M),Y.el=ot.el,Ie===null&&uT(E,ot.el),le&&jt(le,B),(it=Y.props&&Y.props.onVnodeUpdated)&&jt(()=>dn(it,ie,Y,ge),B)}else{let Y;const{el:ne,props:le}=I,{bm:ie,m:ge,parent:Ie,root:it,type:ot}=E,zt=Ts(I);kr(E,!1),ie&&Ho(ie),!zt&&(Y=le&&le.onVnodeBeforeMount)&&dn(Y,Ie,I),kr(E,!0);{it.ce&&it.ce._def.shadowRoot!==!1&&it.ce._injectChildStyle(ot);const mt=E.subTree=Of(E);C(null,mt,k,x,E,B,M),I.el=mt.el}if(ge&&jt(ge,B),!zt&&(Y=le&&le.onVnodeMounted)){const mt=I;jt(()=>dn(Y,Ie,mt),B)}(I.shapeFlag&256||Ie&&Ts(Ie.vnode)&&Ie.vnode.shapeFlag&256)&&E.a&&jt(E.a,B),E.isMounted=!0,I=k=x=null}};E.scope.on();const H=E.effect=new Cm(K);E.scope.off();const q=E.update=H.run.bind(H),se=E.job=H.runIfDirty.bind(H);se.i=E,se.id=E.uid,H.scheduler=()=>Tu(se),kr(E,!0),q()},Ee=(E,I,k)=>{I.component=E;const x=E.vnode.props;E.vnode=I,E.next=null,Kv(E,I.props,x,k),Yv(E,I.children,k),Bn(),If(E),$n()},ue=(E,I,k,x,B,M,Q,K,H=!1)=>{const q=E&&E.children,se=E?E.shapeFlag:0,Y=I.children,{patchFlag:ne,shapeFlag:le}=I;if(ne>0){if(ne&128){Ft(q,Y,k,x,B,M,Q,K,H);return}else if(ne&256){pt(q,Y,k,x,B,M,Q,K,H);return}}le&8?(se&16&&Nt(q,B,M),Y!==q&&f(k,Y)):se&16?le&16?Ft(q,Y,k,x,B,M,Q,K,H):Nt(q,B,M,!0):(se&8&&f(k,""),le&16&&y(Y,k,x,B,M,Q,K,H))},pt=(E,I,k,x,B,M,Q,K,H)=>{E=E||_s,I=I||_s;const q=E.length,se=I.length,Y=Math.min(q,se);let ne;for(ne=0;ne<Y;ne++){const le=I[ne]=H?nr(I[ne]):_n(I[ne]);C(E[ne],le,k,null,B,M,Q,K,H)}q>se?Nt(E,B,M,!0,!1,Y):y(I,k,x,B,M,Q,K,H,Y)},Ft=(E,I,k,x,B,M,Q,K,H)=>{let q=0;const se=I.length;let Y=E.length-1,ne=se-1;for(;q<=Y&&q<=ne;){const le=E[q],ie=I[q]=H?nr(I[q]):_n(I[q]);if(li(le,ie))C(le,ie,k,null,B,M,Q,K,H);else break;q++}for(;q<=Y&&q<=ne;){const le=E[Y],ie=I[ne]=H?nr(I[ne]):_n(I[ne]);if(li(le,ie))C(le,ie,k,null,B,M,Q,K,H);else break;Y--,ne--}if(q>Y){if(q<=ne){const le=ne+1,ie=le<se?I[le].el:x;for(;q<=ne;)C(null,I[q]=H?nr(I[q]):_n(I[q]),k,ie,B,M,Q,K,H),q++}}else if(q>ne)for(;q<=Y;)Pe(E[q],B,M,!0),q++;else{const le=q,ie=q,ge=new Map;for(q=ie;q<=ne;q++){const at=I[q]=H?nr(I[q]):_n(I[q]);at.key!=null&&ge.set(at.key,q)}let Ie,it=0;const ot=ne-ie+1;let zt=!1,mt=0;const Qn=new Array(ot);for(q=0;q<ot;q++)Qn[q]=0;for(q=le;q<=Y;q++){const at=E[q];if(it>=ot){Pe(at,B,M,!0);continue}let Ht;if(at.key!=null)Ht=ge.get(at.key);else for(Ie=ie;Ie<=ne;Ie++)if(Qn[Ie-ie]===0&&li(at,I[Ie])){Ht=Ie;break}Ht===void 0?Pe(at,B,M,!0):(Qn[Ht-ie]=q+1,Ht>=mt?mt=Ht:zt=!0,C(at,I[Ht],k,null,B,M,Q,K,H),it++)}const Qs=zt?tT(Qn):_s;for(Ie=Qs.length-1,q=ot-1;q>=0;q--){const at=ie+q,Ht=I[at],Eo=I[at+1],rs=at+1<se?Eo.el||Eo.placeholder:x;Qn[q]===0?C(null,Ht,k,rs,B,M,Q,K,H):zt&&(Ie<0||q!==Qs[Ie]?Qe(Ht,k,rs,2):Ie--)}}},Qe=(E,I,k,x,B=null)=>{const{el:M,type:Q,transition:K,children:H,shapeFlag:q}=E;if(q&6){Qe(E.component.subTree,I,k,x);return}if(q&128){E.suspense.move(I,k,x);return}if(q&64){Q.move(E,I,k,te);return}if(Q===st){r(M,I,k);for(let Y=0;Y<H.length;Y++)Qe(H[Y],I,k,x);r(E.anchor,I,k);return}if(Q===Wc){j(E,I,k);return}if(x!==2&&q&1&&K)if(x===0)K.beforeEnter(M),r(M,I,k),jt(()=>K.enter(M),B);else{const{leave:Y,delayLeave:ne,afterLeave:le}=K,ie=()=>{E.ctx.isUnmounted?s(M):r(M,I,k)},ge=()=>{M._isLeaving&&M[Tv](!0),Y(M,()=>{ie(),le&&le()})};ne?ne(M,ie,ge):ge()}else r(M,I,k)},Pe=(E,I,k,x=!1,B=!1)=>{const{type:M,props:Q,ref:K,children:H,dynamicChildren:q,shapeFlag:se,patchFlag:Y,dirs:ne,cacheIndex:le}=E;if(Y===-2&&(B=!1),K!=null&&(Bn(),Ii(K,null,k,E,!0),$n()),le!=null&&(I.renderCache[le]=void 0),se&256){I.ctx.deactivate(E);return}const ie=se&1&&ne,ge=!Ts(E);let Ie;if(ge&&(Ie=Q&&Q.onVnodeBeforeUnmount)&&dn(Ie,I,E),se&6)Bt(E.component,k,x);else{if(se&128){E.suspense.unmount(k,x);return}ie&&Pr(E,null,I,"beforeUnmount"),se&64?E.type.remove(E,I,k,te,x):q&&!q.hasOnce&&(M!==st||Y>0&&Y&64)?Nt(q,I,k,!1,!0):(M===st&&Y&384||!B&&se&16)&&Nt(H,I,k),x&&Ve(E)}(ge&&(Ie=Q&&Q.onVnodeUnmounted)||ie)&&jt(()=>{Ie&&dn(Ie,I,E),ie&&Pr(E,null,I,"unmounted")},k)},Ve=E=>{const{type:I,el:k,anchor:x,transition:B}=E;if(I===st){Ut(k,x);return}if(I===Wc){z(E);return}const M=()=>{s(k),B&&!B.persisted&&B.afterLeave&&B.afterLeave()};if(E.shapeFlag&1&&B&&!B.persisted){const{leave:Q,delayLeave:K}=B,H=()=>Q(k,M);K?K(E.el,M,H):H()}else M()},Ut=(E,I)=>{let k;for(;E!==I;)k=m(E),s(E),E=k;s(I)},Bt=(E,I,k)=>{const{bum:x,scope:B,job:M,subTree:Q,um:K,m:H,a:q}=E;kf(H),kf(q),x&&Ho(x),B.stop(),M&&(M.flags|=8,Pe(Q,E,I,k)),K&&jt(K,I),jt(()=>{E.isUnmounted=!0},I)},Nt=(E,I,k,x=!1,B=!1,M=0)=>{for(let Q=M;Q<E.length;Q++)Pe(E[Q],I,k,x,B)},V=E=>{if(E.shapeFlag&6)return V(E.component.subTree);if(E.shapeFlag&128)return E.suspense.next();const I=m(E.anchor||E.el),k=I&&I[wv];return k?m(k):I};let Z=!1;const J=(E,I,k)=>{E==null?I._vnode&&Pe(I._vnode,null,null,!0):C(I._vnode||null,E,I,null,null,null,k),I._vnode=E,Z||(Z=!0,If(),Qm(),Z=!1)},te={p:C,um:Pe,m:Qe,r:Ve,mt:qe,mc:y,pc:ue,pbc:b,n:V,o:t};return{render:J,hydrate:void 0,createApp:Hv(J)}}function Hc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function kr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function eT(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function gg(t,e,n=!1){const r=t.children,s=e.children;if(fe(r)&&fe(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=nr(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&gg(o,c)),c.type===Qa&&c.patchFlag!==-1&&(c.el=o.el),c.type===jn&&!c.el&&(c.el=o.el)}}function tT(t){const e=t.slice(),n=[0];let r,s,i,o,c;const l=t.length;for(r=0;r<l;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<u?i=c+1:o=c;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function _g(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:_g(e)}function kf(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const nT=Symbol.for("v-scx"),rT=()=>En(nT);function Go(t,e,n){return yg(t,e,n)}function yg(t,e,n=Me){const{immediate:r,deep:s,flush:i,once:o}=n,c=bt({},n),l=e&&r||!e&&i!=="post";let u;if($i){if(i==="sync"){const _=rT();u=_.__watcherHandles||(_.__watcherHandles=[])}else if(!l){const _=()=>{};return _.stop=yn,_.resume=yn,_.pause=yn,_}}const f=Tt;c.call=(_,w,C)=>Rn(_,f,w,C);let p=!1;i==="post"?c.scheduler=_=>{jt(_,f&&f.suspense)}:i!=="sync"&&(p=!0,c.scheduler=(_,w)=>{w?_():Tu(_)}),c.augmentJob=_=>{e&&(_.flags|=4),p&&(_.flags|=2,f&&(_.id=f.uid,_.i=f))};const m=gv(t,e,c);return $i&&(u?u.push(m):l&&m()),m}function sT(t,e,n){const r=this.proxy,s=et(t)?t.includes(".")?Eg(r,t):()=>r[t]:t.bind(r,r);let i;pe(e)?i=e:(i=e.handler,n=e);const o=no(this),c=yg(s,i.bind(r),n);return o(),c}function Eg(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const iT=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Xt(e)}Modifiers`]||t[`${Jr(e)}Modifiers`];function oT(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Me;let s=n;const i=e.startsWith("update:"),o=i&&iT(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>et(f)?f.trim():f)),o.number&&(s=n.map(_l)));let c,l=r[c=Fc(e)]||r[c=Fc(Xt(e))];!l&&i&&(l=r[c=Fc(Jr(e))]),l&&Rn(l,t,6,s);const u=r[c+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,Rn(u,t,6,s)}}function wg(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!pe(t)){const l=u=>{const f=wg(u,e,!0);f&&(c=!0,bt(o,f))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(je(t)&&r.set(t,null),null):(fe(i)?i.forEach(l=>o[l]=null):bt(o,i),je(t)&&r.set(t,o),o)}function Ga(t,e){return!t||!Ua(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ne(t,e[0].toLowerCase()+e.slice(1))||Ne(t,Jr(e))||Ne(t,e))}function Of(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:l,render:u,renderCache:f,props:p,data:m,setupState:_,ctx:w,inheritAttrs:C}=t,S=da(t);let $,U;try{if(n.shapeFlag&4){const z=s||r,oe=z;$=_n(u.call(oe,z,f,p,_,m,w)),U=c}else{const z=e;$=_n(z.length>1?z(p,{attrs:c,slots:o,emit:l}):z(p,null)),U=e.props?c:aT(c)}}catch(z){bi.length=0,Wa(z,t,1),$=be(jn)}let j=$;if(U&&C!==!1){const z=Object.keys(U),{shapeFlag:oe}=j;z.length&&oe&7&&(i&&z.some(uu)&&(U=cT(U,i)),j=Ps(j,U,!1,!0))}return n.dirs&&(j=Ps(j,null,!1,!0),j.dirs=j.dirs?j.dirs.concat(n.dirs):n.dirs),n.transition&&Iu(j,n.transition),$=j,da(S),$}const aT=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ua(n))&&((e||(e={}))[n]=t[n]);return e},cT=(t,e)=>{const n={};for(const r in t)(!uu(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function lT(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:l}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Nf(r,o,u):!!o;if(l&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const m=f[p];if(o[m]!==r[m]&&!Ga(u,m))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?Nf(r,o,u):!0:!!o;return!1}function Nf(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Ga(n,i))return!0}return!1}function uT({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const vg=t=>t.__isSuspense;function hT(t,e){e&&e.pendingBranch?fe(t)?e.effects.push(...t):e.effects.push(t):Ev(t)}const st=Symbol.for("v-fgt"),Qa=Symbol.for("v-txt"),jn=Symbol.for("v-cmt"),Wc=Symbol.for("v-stc"),bi=[];let qt=null;function $e(t=!1){bi.push(qt=t?null:[])}function fT(){bi.pop(),qt=bi[bi.length-1]||null}let Ui=1;function Df(t,e=!1){Ui+=t,t<0&&qt&&e&&(qt.hasOnce=!0)}function Tg(t){return t.dynamicChildren=Ui>0?qt||_s:null,fT(),Ui>0&&qt&&qt.push(t),t}function Ge(t,e,n,r,s,i){return Tg(W(t,e,n,r,s,i,!0))}function Rl(t,e,n,r,s){return Tg(be(t,e,n,r,s,!0))}function Bi(t){return t?t.__v_isVNode===!0:!1}function li(t,e){return t.type===e.type&&t.key===e.key}const Ig=({key:t})=>t??null,Qo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?et(t)||At(t)||pe(t)?{i:ft,r:t,k:e,f:!!n}:t:null);function W(t,e=null,n=null,r=0,s=null,i=t===st?0:1,o=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ig(e),ref:e&&Qo(e),scopeId:Ym,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:ft};return c?(Ru(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=et(n)?8:16),Ui>0&&!o&&qt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&qt.push(l),l}const be=dT;function dT(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===xv)&&(t=jn),Bi(t)){const c=Ps(t,e,!0);return n&&Ru(c,n),Ui>0&&!i&&qt&&(c.shapeFlag&6?qt[qt.indexOf(t)]=c:qt.push(c)),c.patchFlag=-2,c}if(bT(t)&&(t=t.__vccOpts),e){e=pT(e);let{class:c,style:l}=e;c&&!et(c)&&(e.class=pu(c)),je(l)&&(vu(l)&&!fe(l)&&(l=bt({},l)),e.style=du(l))}const o=et(t)?1:vg(t)?128:vv(t)?64:je(t)?4:pe(t)?2:0;return W(t,e,n,r,s,o,i,!0)}function pT(t){return t?vu(t)||ug(t)?bt({},t):t:null}function Ps(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:l}=t,u=e?mT(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&Ig(u),ref:e&&e.ref?n&&i?fe(i)?i.concat(Qo(e)):[i,Qo(e)]:Qo(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==st?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ps(t.ssContent),ssFallback:t.ssFallback&&Ps(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&Iu(f,l.clone(f)),f}function ye(t=" ",e=0){return be(Qa,null,t,e)}function ma(t="",e=!1){return e?($e(),Rl(jn,null,t)):be(jn,null,t)}function _n(t){return t==null||typeof t=="boolean"?be(jn):fe(t)?be(st,null,t.slice()):Bi(t)?nr(t):be(Qa,null,String(t))}function nr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ps(t)}function Ru(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(fe(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Ru(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!ug(e)?e._ctx=ft:s===3&&ft&&(ft.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else pe(e)?(e={default:e,_ctx:ft},n=32):(e=String(e),r&64?(n=16,e=[ye(e)]):n=8);t.children=e,t.shapeFlag|=n}function mT(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=pu([e.class,r.class]));else if(s==="style")e.style=du([e.style,r.style]);else if(Ua(s)){const i=e[s],o=r[s];o&&i!==o&&!(fe(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function dn(t,e,n,r=null){Rn(t,e,7,[n,r])}const gT=ag();let _T=0;function yT(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||gT,i={uid:_T++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new qw(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:fg(r,s),emitsOptions:wg(r,s),emit:null,emitted:null,propsDefaults:Me,inheritAttrs:r.inheritAttrs,ctx:Me,data:Me,props:Me,attrs:Me,slots:Me,refs:Me,setupState:Me,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=oT.bind(null,i),t.ce&&t.ce(i),i}let Tt=null;const ET=()=>Tt||ft;let ga,Sl;{const t=qa(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};ga=e("__VUE_INSTANCE_SETTERS__",n=>Tt=n),Sl=e("__VUE_SSR_SETTERS__",n=>$i=n)}const no=t=>{const e=Tt;return ga(t),t.scope.on(),()=>{t.scope.off(),ga(e)}},Vf=()=>{Tt&&Tt.scope.off(),ga(null)};function Ag(t){return t.vnode.shapeFlag&4}let $i=!1;function wT(t,e=!1,n=!1){e&&Sl(e);const{props:r,children:s}=t.vnode,i=Ag(t);Wv(t,r,i,e),Jv(t,s,n||e);const o=i?vT(t,e):void 0;return e&&Sl(!1),o}function vT(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Fv);const{setup:r}=n;if(r){Bn();const s=t.setupContext=r.length>1?IT(t):null,i=no(t),o=to(r,t,0,[t.props,s]),c=vm(o);if($n(),i(),(c||t.sp)&&!Ts(t)&&Zm(t),c){if(o.then(Vf,Vf),e)return o.then(l=>{xf(t,l)}).catch(l=>{Wa(l,t,0)});t.asyncDep=o}else xf(t,o)}else bg(t)}function xf(t,e,n){pe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:je(e)&&(t.setupState=Hm(e)),bg(t)}function bg(t,e,n){const r=t.type;t.render||(t.render=r.render||yn);{const s=no(t);Bn();try{Uv(t)}finally{$n(),s()}}}const TT={get(t,e){return wt(t,"get",""),t[e]}};function IT(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,TT),slots:t.slots,emit:t.emit,expose:e}}function Ja(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Hm(lv(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ai)return Ai[n](t)},has(e,n){return n in e||n in Ai}})):t.proxy}function AT(t,e=!0){return pe(t)?t.displayName||t.name:t.name||e&&t.__name}function bT(t){return pe(t)&&"__vccOpts"in t}const tn=(t,e)=>pv(t,e,$i);function Rg(t,e,n){const r=arguments.length;return r===2?je(e)&&!fe(e)?Bi(e)?be(t,null,[e]):be(t,e):be(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Bi(n)&&(n=[n]),be(t,e,n))}const RT="3.5.20";/**
* @vue/runtime-dom v3.5.20
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Cl;const Mf=typeof window<"u"&&window.trustedTypes;if(Mf)try{Cl=Mf.createPolicy("vue",{createHTML:t=>t})}catch{}const Sg=Cl?t=>Cl.createHTML(t):t=>t,ST="http://www.w3.org/2000/svg",CT="http://www.w3.org/1998/Math/MathML",Dn=typeof document<"u"?document:null,Lf=Dn&&Dn.createElement("template"),PT={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Dn.createElementNS(ST,t):e==="mathml"?Dn.createElementNS(CT,t):n?Dn.createElement(t,{is:n}):Dn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Dn.createTextNode(t),createComment:t=>Dn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Dn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Lf.innerHTML=Sg(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=Lf.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},kT=Symbol("_vtc");function OT(t,e,n){const r=t[kT];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Ff=Symbol("_vod"),NT=Symbol("_vsh"),DT=Symbol(""),VT=/(^|;)\s*display\s*:/;function xT(t,e,n){const r=t.style,s=et(n);let i=!1;if(n&&!s){if(e)if(et(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&Jo(r,c,"")}else for(const o in e)n[o]==null&&Jo(r,o,"");for(const o in n)o==="display"&&(i=!0),Jo(r,o,n[o])}else if(s){if(e!==n){const o=r[DT];o&&(n+=";"+o),r.cssText=n,i=VT.test(n)}}else e&&t.removeAttribute("style");Ff in t&&(t[Ff]=i?r.display:"",t[NT]&&(r.display="none"))}const Uf=/\s*!important$/;function Jo(t,e,n){if(fe(n))n.forEach(r=>Jo(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=MT(t,e);Uf.test(n)?t.setProperty(Jr(r),n.replace(Uf,""),"important"):t[r]=n}}const Bf=["Webkit","Moz","ms"],Kc={};function MT(t,e){const n=Kc[e];if(n)return n;let r=Xt(e);if(r!=="filter"&&r in t)return Kc[e]=r;r=ja(r);for(let s=0;s<Bf.length;s++){const i=Bf[s]+r;if(i in t)return Kc[e]=i}return e}const $f="http://www.w3.org/1999/xlink";function jf(t,e,n,r,s,i=jw(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS($f,e.slice(6,e.length)):t.setAttributeNS($f,e,n):n==null||i&&!bm(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Kn(n)?String(n):n)}function qf(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Sg(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(c!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=bm(n):n==null&&c==="string"?(n="",o=!0):c==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function us(t,e,n,r){t.addEventListener(e,n,r)}function LT(t,e,n,r){t.removeEventListener(e,n,r)}const zf=Symbol("_vei");function FT(t,e,n,r,s=null){const i=t[zf]||(t[zf]={}),o=i[e];if(r&&o)o.value=r;else{const[c,l]=UT(e);if(r){const u=i[e]=jT(r,s);us(t,c,u,l)}else o&&(LT(t,c,o,l),i[e]=void 0)}}const Hf=/(?:Once|Passive|Capture)$/;function UT(t){let e;if(Hf.test(t)){e={};let r;for(;r=t.match(Hf);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Jr(t.slice(2)),e]}let Gc=0;const BT=Promise.resolve(),$T=()=>Gc||(BT.then(()=>Gc=0),Gc=Date.now());function jT(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Rn(qT(r,n.value),e,5,[r])};return n.value=t,n.attached=$T(),n}function qT(t,e){if(fe(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Wf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,zT=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?OT(t,r,o):e==="style"?xT(t,n,r):Ua(e)?uu(e)||FT(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):HT(t,e,r,o))?(qf(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&jf(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!et(r))?qf(t,Xt(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),jf(t,e,r,o))};function HT(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Wf(e)&&pe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Wf(e)&&et(n)?!1:e in t}const Kf=t=>{const e=t.props["onUpdate:modelValue"]||!1;return fe(e)?n=>Ho(e,n):e};function WT(t){t.target.composing=!0}function Gf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Qc=Symbol("_assign"),$r={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Qc]=Kf(s);const i=r||s.props&&s.props.type==="number";us(t,e?"change":"input",o=>{if(o.target.composing)return;let c=t.value;n&&(c=c.trim()),i&&(c=_l(c)),t[Qc](c)}),n&&us(t,"change",()=>{t.value=t.value.trim()}),e||(us(t,"compositionstart",WT),us(t,"compositionend",Gf),us(t,"change",Gf))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Qc]=Kf(o),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?_l(t.value):t.value,l=e??"";c!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},KT=["ctrl","shift","alt","meta"],GT={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>KT.some(n=>t[`${n}Key`]&&!e.includes(n))},QT=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=((s,...i)=>{for(let o=0;o<e.length;o++){const c=GT[e[o]];if(c&&c(s,e))return}return t(s,...i)}))},JT=bt({patchProp:zT},PT);let Qf;function YT(){return Qf||(Qf=Xv(JT))}const XT=((...t)=>{const e=YT().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=eI(r);if(!s)return;const i=e._component;!pe(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,ZT(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e});function ZT(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function eI(t){return et(t)?document.querySelector(t):t}/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const hs=typeof document<"u";function Cg(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function tI(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Cg(t.default)}const ke=Object.assign;function Jc(t,e){const n={};for(const r in e){const s=e[r];n[r]=an(s)?s.map(t):t(s)}return n}const Ri=()=>{},an=Array.isArray,Pg=/#/g,nI=/&/g,rI=/\//g,sI=/=/g,iI=/\?/g,kg=/\+/g,oI=/%5B/g,aI=/%5D/g,Og=/%5E/g,cI=/%60/g,Ng=/%7B/g,lI=/%7C/g,Dg=/%7D/g,uI=/%20/g;function Su(t){return encodeURI(""+t).replace(lI,"|").replace(oI,"[").replace(aI,"]")}function hI(t){return Su(t).replace(Ng,"{").replace(Dg,"}").replace(Og,"^")}function Pl(t){return Su(t).replace(kg,"%2B").replace(uI,"+").replace(Pg,"%23").replace(nI,"%26").replace(cI,"`").replace(Ng,"{").replace(Dg,"}").replace(Og,"^")}function fI(t){return Pl(t).replace(sI,"%3D")}function dI(t){return Su(t).replace(Pg,"%23").replace(iI,"%3F")}function pI(t){return t==null?"":dI(t).replace(rI,"%2F")}function ji(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const mI=/\/$/,gI=t=>t.replace(mI,"");function Yc(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let l=e.indexOf("?");return c<l&&c>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=wI(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:ji(o)}}function _I(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Jf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function yI(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&ks(e.matched[r],n.matched[s])&&Vg(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ks(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Vg(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!EI(t[n],e[n]))return!1;return!0}function EI(t,e){return an(t)?Yf(t,e):an(e)?Yf(e,t):t===e}function Yf(t,e){return an(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function wI(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Zn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var qi;(function(t){t.pop="pop",t.push="push"})(qi||(qi={}));var Si;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Si||(Si={}));function vI(t){if(!t)if(hs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),gI(t)}const TI=/^[^#]+#/;function II(t,e){return t.replace(TI,"#")+e}function AI(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Ya=()=>({left:window.scrollX,top:window.scrollY});function bI(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=AI(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Xf(t,e){return(history.state?history.state.position-e:-1)+t}const kl=new Map;function RI(t,e){kl.set(t,e)}function SI(t){const e=kl.get(t);return kl.delete(t),e}let CI=()=>location.protocol+"//"+location.host;function xg(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(c);return l[0]!=="/"&&(l="/"+l),Jf(l,"")}return Jf(n,t)+r+s}function PI(t,e,n,r){let s=[],i=[],o=null;const c=({state:m})=>{const _=xg(t,location),w=n.value,C=e.value;let S=0;if(m){if(n.value=_,e.value=m,o&&o===w){o=null;return}S=C?m.position-C.position:0}else r(_);s.forEach($=>{$(n.value,w,{delta:S,type:qi.pop,direction:S?S>0?Si.forward:Si.back:Si.unknown})})};function l(){o=n.value}function u(m){s.push(m);const _=()=>{const w=s.indexOf(m);w>-1&&s.splice(w,1)};return i.push(_),_}function f(){const{history:m}=window;m.state&&m.replaceState(ke({},m.state,{scroll:Ya()}),"")}function p(){for(const m of i)m();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:l,listen:u,destroy:p}}function Zf(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Ya():null}}function kI(t){const{history:e,location:n}=window,r={value:xg(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,u,f){const p=t.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+l:CI()+t+l;try{e[f?"replaceState":"pushState"](u,"",m),s.value=u}catch(_){console.error(_),n[f?"replace":"assign"](m)}}function o(l,u){const f=ke({},e.state,Zf(s.value.back,l,s.value.forward,!0),u,{position:s.value.position});i(l,f,!0),r.value=l}function c(l,u){const f=ke({},s.value,e.state,{forward:l,scroll:Ya()});i(f.current,f,!0);const p=ke({},Zf(r.value,l,null),{position:f.position+1},u);i(l,p,!1),r.value=l}return{location:r,state:s,push:c,replace:o}}function OI(t){t=vI(t);const e=kI(t),n=PI(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=ke({location:"",base:t,go:r,createHref:II.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function NI(t){return typeof t=="string"||t&&typeof t=="object"}function Mg(t){return typeof t=="string"||typeof t=="symbol"}const Lg=Symbol("");var ed;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(ed||(ed={}));function Os(t,e){return ke(new Error,{type:t,[Lg]:!0},e)}function Nn(t,e){return t instanceof Error&&Lg in t&&(e==null||!!(t.type&e))}const td="[^/]+?",DI={sensitive:!1,strict:!1,start:!0,end:!0},VI=/[.+*?^${}()[\]/\\]/g;function xI(t,e){const n=ke({},DI,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const f=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let p=0;p<u.length;p++){const m=u[p];let _=40+(n.sensitive?.25:0);if(m.type===0)p||(s+="/"),s+=m.value.replace(VI,"\\$&"),_+=40;else if(m.type===1){const{value:w,repeatable:C,optional:S,regexp:$}=m;i.push({name:w,repeatable:C,optional:S});const U=$||td;if(U!==td){_+=10;try{new RegExp(`(${U})`)}catch(z){throw new Error(`Invalid custom RegExp for param "${w}" (${U}): `+z.message)}}let j=C?`((?:${U})(?:/(?:${U}))*)`:`(${U})`;p||(j=S&&u.length<2?`(?:/${j})`:"/"+j),S&&(j+="?"),s+=j,_+=20,S&&(_+=-8),C&&(_+=-20),U===".*"&&(_+=-50)}f.push(_)}r.push(f)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(u){const f=u.match(o),p={};if(!f)return null;for(let m=1;m<f.length;m++){const _=f[m]||"",w=i[m-1];p[w.name]=_&&w.repeatable?_.split("/"):_}return p}function l(u){let f="",p=!1;for(const m of t){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const _ of m)if(_.type===0)f+=_.value;else if(_.type===1){const{value:w,repeatable:C,optional:S}=_,$=w in u?u[w]:"";if(an($)&&!C)throw new Error(`Provided param "${w}" is an array but it is not repeatable (* or + modifiers)`);const U=an($)?$.join("/"):$;if(!U)if(S)m.length<2&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${w}"`);f+=U}}return f||"/"}return{re:o,score:r,keys:i,parse:c,stringify:l}}function MI(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Fg(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=MI(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(nd(r))return 1;if(nd(s))return-1}return s.length-r.length}function nd(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const LI={type:0,value:""},FI=/[a-zA-Z0-9_]/;function UI(t){if(!t)return[[]];if(t==="/")return[[LI]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${u}": ${_}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,l,u="",f="";function p(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function m(){u+=l}for(;c<t.length;){if(l=t[c++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(u&&p(),o()):l===":"?(p(),n=1):m();break;case 4:m(),n=r;break;case 1:l==="("?n=2:FI.test(l)?m():(p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case 2:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=3:f+=l;break;case 3:p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),p(),o(),s}function BI(t,e,n){const r=xI(UI(t.path),n),s=ke(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function $I(t,e){const n=[],r=new Map;e=od({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,m,_){const w=!_,C=sd(p);C.aliasOf=_&&_.record;const S=od(e,p),$=[C];if("alias"in p){const z=typeof p.alias=="string"?[p.alias]:p.alias;for(const oe of z)$.push(sd(ke({},C,{components:_?_.record.components:C.components,path:oe,aliasOf:_?_.record:C})))}let U,j;for(const z of $){const{path:oe}=z;if(m&&oe[0]!=="/"){const me=m.record.path,A=me[me.length-1]==="/"?"":"/";z.path=m.record.path+(oe&&A+oe)}if(U=BI(z,m,S),_?_.alias.push(U):(j=j||U,j!==U&&j.alias.push(U),w&&p.name&&!id(U)&&o(p.name)),Ug(U)&&l(U),C.children){const me=C.children;for(let A=0;A<me.length;A++)i(me[A],U,_&&_.children[A])}_=_||U}return j?()=>{o(j)}:Ri}function o(p){if(Mg(p)){const m=r.get(p);m&&(r.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function c(){return n}function l(p){const m=zI(p,n);n.splice(m,0,p),p.record.name&&!id(p)&&r.set(p.record.name,p)}function u(p,m){let _,w={},C,S;if("name"in p&&p.name){if(_=r.get(p.name),!_)throw Os(1,{location:p});S=_.record.name,w=ke(rd(m.params,_.keys.filter(j=>!j.optional).concat(_.parent?_.parent.keys.filter(j=>j.optional):[]).map(j=>j.name)),p.params&&rd(p.params,_.keys.map(j=>j.name))),C=_.stringify(w)}else if(p.path!=null)C=p.path,_=n.find(j=>j.re.test(C)),_&&(w=_.parse(C),S=_.record.name);else{if(_=m.name?r.get(m.name):n.find(j=>j.re.test(m.path)),!_)throw Os(1,{location:p,currentLocation:m});S=_.record.name,w=ke({},m.params,p.params),C=_.stringify(w)}const $=[];let U=_;for(;U;)$.unshift(U.record),U=U.parent;return{name:S,path:C,params:w,matched:$,meta:qI($)}}t.forEach(p=>i(p));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:f,getRoutes:c,getRecordMatcher:s}}function rd(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function sd(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:jI(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function jI(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function id(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function qI(t){return t.reduce((e,n)=>ke(e,n.meta),{})}function od(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function zI(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;Fg(t,e[i])<0?r=i:n=i+1}const s=HI(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function HI(t){let e=t;for(;e=e.parent;)if(Ug(e)&&Fg(t,e)===0)return e}function Ug({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function WI(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(kg," "),o=i.indexOf("="),c=ji(o<0?i:i.slice(0,o)),l=o<0?null:ji(i.slice(o+1));if(c in e){let u=e[c];an(u)||(u=e[c]=[u]),u.push(l)}else e[c]=l}return e}function ad(t){let e="";for(let n in t){const r=t[n];if(n=fI(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(an(r)?r.map(i=>i&&Pl(i)):[r&&Pl(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function KI(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=an(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const GI=Symbol(""),cd=Symbol(""),Xa=Symbol(""),Bg=Symbol(""),Ol=Symbol("");function ui(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function rr(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,l)=>{const u=m=>{m===!1?l(Os(4,{from:n,to:e})):m instanceof Error?l(m):NI(m)?l(Os(2,{from:e,to:m})):(o&&r.enterCallbacks[s]===o&&typeof m=="function"&&o.push(m),c())},f=i(()=>t.call(r&&r.instances[s],e,n,u));let p=Promise.resolve(f);t.length<3&&(p=p.then(u)),p.catch(m=>l(m))})}function Xc(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let l=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(Cg(l)){const f=(l.__vccOpts||l)[e];f&&i.push(rr(f,n,r,o,c,s))}else{let u=l();i.push(()=>u.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${c}" at "${o.path}"`);const p=tI(f)?f.default:f;o.mods[c]=f,o.components[c]=p;const _=(p.__vccOpts||p)[e];return _&&rr(_,n,r,o,c,s)()}))}}return i}function ld(t){const e=En(Xa),n=En(Bg),r=tn(()=>{const l=ws(t.to);return e.resolve(l)}),s=tn(()=>{const{matched:l}=r.value,{length:u}=l,f=l[u-1],p=n.matched;if(!f||!p.length)return-1;const m=p.findIndex(ks.bind(null,f));if(m>-1)return m;const _=ud(l[u-2]);return u>1&&ud(f)===_&&p[p.length-1].path!==_?p.findIndex(ks.bind(null,l[u-2])):m}),i=tn(()=>s.value>-1&&ZI(n.params,r.value.params)),o=tn(()=>s.value>-1&&s.value===n.matched.length-1&&Vg(n.params,r.value.params));function c(l={}){if(XI(l)){const u=e[ws(t.replace)?"replace":"push"](ws(t.to)).catch(Ri);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:tn(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}function QI(t){return t.length===1?t[0]:t}const JI=Xm({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:ld,setup(t,{slots:e}){const n=Ha(ld(t)),{options:r}=En(Xa),s=tn(()=>({[hd(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[hd(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&QI(e.default(n));return t.custom?i:Rg("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),YI=JI;function XI(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function ZI(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!an(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function ud(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const hd=(t,e,n)=>t??e??n,eA=Xm({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=En(Ol),s=tn(()=>t.route||r.value),i=En(cd,0),o=tn(()=>{let u=ws(i);const{matched:f}=s.value;let p;for(;(p=f[u])&&!p.components;)u++;return u}),c=tn(()=>s.value.matched[o.value]);Ko(cd,tn(()=>o.value+1)),Ko(GI,c),Ko(Ol,s);const l=ur();return Go(()=>[l.value,c.value,t.name],([u,f,p],[m,_,w])=>{f&&(f.instances[p]=u,_&&_!==f&&u&&u===m&&(f.leaveGuards.size||(f.leaveGuards=_.leaveGuards),f.updateGuards.size||(f.updateGuards=_.updateGuards))),u&&f&&(!_||!ks(f,_)||!m)&&(f.enterCallbacks[p]||[]).forEach(C=>C(u))},{flush:"post"}),()=>{const u=s.value,f=t.name,p=c.value,m=p&&p.components[f];if(!m)return fd(n.default,{Component:m,route:u});const _=p.props[f],w=_?_===!0?u.params:typeof _=="function"?_(u):_:null,S=Rg(m,ke({},w,e,{onVnodeUnmounted:$=>{$.component.isUnmounted&&(p.instances[f]=null)},ref:l}));return fd(n.default,{Component:S,route:u})||S}}});function fd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const tA=eA;function nA(t){const e=$I(t.routes,t),n=t.parseQuery||WI,r=t.stringifyQuery||ad,s=t.history,i=ui(),o=ui(),c=ui(),l=uv(Zn);let u=Zn;hs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Jc.bind(null,V=>""+V),p=Jc.bind(null,pI),m=Jc.bind(null,ji);function _(V,Z){let J,te;return Mg(V)?(J=e.getRecordMatcher(V),te=Z):te=V,e.addRoute(te,J)}function w(V){const Z=e.getRecordMatcher(V);Z&&e.removeRoute(Z)}function C(){return e.getRoutes().map(V=>V.record)}function S(V){return!!e.getRecordMatcher(V)}function $(V,Z){if(Z=ke({},Z||l.value),typeof V=="string"){const k=Yc(n,V,Z.path),x=e.resolve({path:k.path},Z),B=s.createHref(k.fullPath);return ke(k,x,{params:m(x.params),hash:ji(k.hash),redirectedFrom:void 0,href:B})}let J;if(V.path!=null)J=ke({},V,{path:Yc(n,V.path,Z.path).path});else{const k=ke({},V.params);for(const x in k)k[x]==null&&delete k[x];J=ke({},V,{params:p(k)}),Z.params=p(Z.params)}const te=e.resolve(J,Z),Re=V.hash||"";te.params=f(m(te.params));const E=_I(r,ke({},V,{hash:hI(Re),path:te.path})),I=s.createHref(E);return ke({fullPath:E,hash:Re,query:r===ad?KI(V.query):V.query||{}},te,{redirectedFrom:void 0,href:I})}function U(V){return typeof V=="string"?Yc(n,V,l.value.path):ke({},V)}function j(V,Z){if(u!==V)return Os(8,{from:Z,to:V})}function z(V){return A(V)}function oe(V){return z(ke(U(V),{replace:!0}))}function me(V){const Z=V.matched[V.matched.length-1];if(Z&&Z.redirect){const{redirect:J}=Z;let te=typeof J=="function"?J(V):J;return typeof te=="string"&&(te=te.includes("?")||te.includes("#")?te=U(te):{path:te},te.params={}),ke({query:V.query,hash:V.hash,params:te.path!=null?{}:V.params},te)}}function A(V,Z){const J=u=$(V),te=l.value,Re=V.state,E=V.force,I=V.replace===!0,k=me(J);if(k)return A(ke(U(k),{state:typeof k=="object"?ke({},Re,k.state):Re,force:E,replace:I}),Z||J);const x=J;x.redirectedFrom=Z;let B;return!E&&yI(r,te,J)&&(B=Os(16,{to:x,from:te}),Qe(te,te,!0,!1)),(B?Promise.resolve(B):b(x,te)).catch(M=>Nn(M)?Nn(M,2)?M:Ft(M):ue(M,x,te)).then(M=>{if(M){if(Nn(M,2))return A(ke({replace:I},U(M.to),{state:typeof M.to=="object"?ke({},Re,M.to.state):Re,force:E}),Z||x)}else M=P(x,te,!0,I,Re);return R(x,te,M),M})}function y(V,Z){const J=j(V,Z);return J?Promise.reject(J):Promise.resolve()}function T(V){const Z=Ut.values().next().value;return Z&&typeof Z.runWithContext=="function"?Z.runWithContext(V):V()}function b(V,Z){let J;const[te,Re,E]=rA(V,Z);J=Xc(te.reverse(),"beforeRouteLeave",V,Z);for(const k of te)k.leaveGuards.forEach(x=>{J.push(rr(x,V,Z))});const I=y.bind(null,V,Z);return J.push(I),Nt(J).then(()=>{J=[];for(const k of i.list())J.push(rr(k,V,Z));return J.push(I),Nt(J)}).then(()=>{J=Xc(Re,"beforeRouteUpdate",V,Z);for(const k of Re)k.updateGuards.forEach(x=>{J.push(rr(x,V,Z))});return J.push(I),Nt(J)}).then(()=>{J=[];for(const k of E)if(k.beforeEnter)if(an(k.beforeEnter))for(const x of k.beforeEnter)J.push(rr(x,V,Z));else J.push(rr(k.beforeEnter,V,Z));return J.push(I),Nt(J)}).then(()=>(V.matched.forEach(k=>k.enterCallbacks={}),J=Xc(E,"beforeRouteEnter",V,Z,T),J.push(I),Nt(J))).then(()=>{J=[];for(const k of o.list())J.push(rr(k,V,Z));return J.push(I),Nt(J)}).catch(k=>Nn(k,8)?k:Promise.reject(k))}function R(V,Z,J){c.list().forEach(te=>T(()=>te(V,Z,J)))}function P(V,Z,J,te,Re){const E=j(V,Z);if(E)return E;const I=Z===Zn,k=hs?history.state:{};J&&(te||I?s.replace(V.fullPath,ke({scroll:I&&k&&k.scroll},Re)):s.push(V.fullPath,Re)),l.value=V,Qe(V,Z,J,I),Ft()}let v;function qe(){v||(v=s.listen((V,Z,J)=>{if(!Bt.listening)return;const te=$(V),Re=me(te);if(Re){A(ke(Re,{replace:!0,force:!0}),te).catch(Ri);return}u=te;const E=l.value;hs&&RI(Xf(E.fullPath,J.delta),Ya()),b(te,E).catch(I=>Nn(I,12)?I:Nn(I,2)?(A(ke(U(I.to),{force:!0}),te).then(k=>{Nn(k,20)&&!J.delta&&J.type===qi.pop&&s.go(-1,!1)}).catch(Ri),Promise.reject()):(J.delta&&s.go(-J.delta,!1),ue(I,te,E))).then(I=>{I=I||P(te,E,!1),I&&(J.delta&&!Nn(I,8)?s.go(-J.delta,!1):J.type===qi.pop&&Nn(I,20)&&s.go(-1,!1)),R(te,E,I)}).catch(Ri)}))}let St=ui(),Ce=ui(),Ee;function ue(V,Z,J){Ft(V);const te=Ce.list();return te.length?te.forEach(Re=>Re(V,Z,J)):console.error(V),Promise.reject(V)}function pt(){return Ee&&l.value!==Zn?Promise.resolve():new Promise((V,Z)=>{St.add([V,Z])})}function Ft(V){return Ee||(Ee=!V,qe(),St.list().forEach(([Z,J])=>V?J(V):Z()),St.reset()),V}function Qe(V,Z,J,te){const{scrollBehavior:Re}=t;if(!hs||!Re)return Promise.resolve();const E=!J&&SI(Xf(V.fullPath,0))||(te||!J)&&history.state&&history.state.scroll||null;return Km().then(()=>Re(V,Z,E)).then(I=>I&&bI(I)).catch(I=>ue(I,V,Z))}const Pe=V=>s.go(V);let Ve;const Ut=new Set,Bt={currentRoute:l,listening:!0,addRoute:_,removeRoute:w,clearRoutes:e.clearRoutes,hasRoute:S,getRoutes:C,resolve:$,options:t,push:z,replace:oe,go:Pe,back:()=>Pe(-1),forward:()=>Pe(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:Ce.add,isReady:pt,install(V){const Z=this;V.component("RouterLink",YI),V.component("RouterView",tA),V.config.globalProperties.$router=Z,Object.defineProperty(V.config.globalProperties,"$route",{enumerable:!0,get:()=>ws(l)}),hs&&!Ve&&l.value===Zn&&(Ve=!0,z(s.location).catch(Re=>{}));const J={};for(const Re in Zn)Object.defineProperty(J,Re,{get:()=>l.value[Re],enumerable:!0});V.provide(Xa,Z),V.provide(Bg,jm(J)),V.provide(Ol,l);const te=V.unmount;Ut.add(V),V.unmount=function(){Ut.delete(V),Ut.size<1&&(u=Zn,v&&v(),v=null,l.value=Zn,Ve=!1,Ee=!1),te()}}};function Nt(V){return V.reduce((Z,J)=>Z.then(()=>T(J)),Promise.resolve())}return Bt}function rA(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(u=>ks(u,c))?r.push(c):n.push(c));const l=t.matched[o];l&&(e.matched.find(u=>ks(u,l))||s.push(l))}return[n,r,s]}function $g(){return En(Xa)}function jg(t,e){return function(){return t.apply(e,arguments)}}const{toString:sA}=Object.prototype,{getPrototypeOf:Cu}=Object,{iterator:Za,toStringTag:qg}=Symbol,ec=(t=>e=>{const n=sA.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),hn=t=>(t=t.toLowerCase(),e=>ec(e)===t),tc=t=>e=>typeof e===t,{isArray:Us}=Array,Ns=tc("undefined");function ro(t){return t!==null&&!Ns(t)&&t.constructor!==null&&!Ns(t.constructor)&&xt(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const zg=hn("ArrayBuffer");function iA(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&zg(t.buffer),e}const oA=tc("string"),xt=tc("function"),Hg=tc("number"),so=t=>t!==null&&typeof t=="object",aA=t=>t===!0||t===!1,Yo=t=>{if(ec(t)!=="object")return!1;const e=Cu(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(qg in t)&&!(Za in t)},cA=t=>{if(!so(t)||ro(t))return!1;try{return Object.keys(t).length===0&&Object.getPrototypeOf(t)===Object.prototype}catch{return!1}},lA=hn("Date"),uA=hn("File"),hA=hn("Blob"),fA=hn("FileList"),dA=t=>so(t)&&xt(t.pipe),pA=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||xt(t.append)&&((e=ec(t))==="formdata"||e==="object"&&xt(t.toString)&&t.toString()==="[object FormData]"))},mA=hn("URLSearchParams"),[gA,_A,yA,EA]=["ReadableStream","Request","Response","Headers"].map(hn),wA=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function io(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,s;if(typeof t!="object"&&(t=[t]),Us(t))for(r=0,s=t.length;r<s;r++)e.call(null,t[r],r,t);else{if(ro(t))return;const i=n?Object.getOwnPropertyNames(t):Object.keys(t),o=i.length;let c;for(r=0;r<o;r++)c=i[r],e.call(null,t[c],c,t)}}function Wg(t,e){if(ro(t))return null;e=e.toLowerCase();const n=Object.keys(t);let r=n.length,s;for(;r-- >0;)if(s=n[r],e===s.toLowerCase())return s;return null}const Dr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Kg=t=>!Ns(t)&&t!==Dr;function Nl(){const{caseless:t,skipUndefined:e}=Kg(this)&&this||{},n={},r=(s,i)=>{const o=t&&Wg(n,i)||i;Yo(n[o])&&Yo(s)?n[o]=Nl(n[o],s):Yo(s)?n[o]=Nl({},s):Us(s)?n[o]=s.slice():(!e||!Ns(s))&&(n[o]=s)};for(let s=0,i=arguments.length;s<i;s++)arguments[s]&&io(arguments[s],r);return n}const vA=(t,e,n,{allOwnKeys:r}={})=>(io(e,(s,i)=>{n&&xt(s)?t[i]=jg(s,n):t[i]=s},{allOwnKeys:r}),t),TA=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),IA=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},AA=(t,e,n,r)=>{let s,i,o;const c={};if(e=e||{},t==null)return e;do{for(s=Object.getOwnPropertyNames(t),i=s.length;i-- >0;)o=s[i],(!r||r(o,t,e))&&!c[o]&&(e[o]=t[o],c[o]=!0);t=n!==!1&&Cu(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},bA=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},RA=t=>{if(!t)return null;if(Us(t))return t;let e=t.length;if(!Hg(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},SA=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&Cu(Uint8Array)),CA=(t,e)=>{const r=(t&&t[Za]).call(t);let s;for(;(s=r.next())&&!s.done;){const i=s.value;e.call(t,i[0],i[1])}},PA=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},kA=hn("HTMLFormElement"),OA=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),dd=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),NA=hn("RegExp"),Gg=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};io(n,(s,i)=>{let o;(o=e(s,i,t))!==!1&&(r[i]=o||s)}),Object.defineProperties(t,r)},DA=t=>{Gg(t,(e,n)=>{if(xt(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=t[n];if(xt(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},VA=(t,e)=>{const n={},r=s=>{s.forEach(i=>{n[i]=!0})};return Us(t)?r(t):r(String(t).split(e)),n},xA=()=>{},MA=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e;function LA(t){return!!(t&&xt(t.append)&&t[qg]==="FormData"&&t[Za])}const FA=t=>{const e=new Array(10),n=(r,s)=>{if(so(r)){if(e.indexOf(r)>=0)return;if(ro(r))return r;if(!("toJSON"in r)){e[s]=r;const i=Us(r)?[]:{};return io(r,(o,c)=>{const l=n(o,s+1);!Ns(l)&&(i[c]=l)}),e[s]=void 0,i}}return r};return n(t,0)},UA=hn("AsyncFunction"),BA=t=>t&&(so(t)||xt(t))&&xt(t.then)&&xt(t.catch),Qg=((t,e)=>t?setImmediate:e?((n,r)=>(Dr.addEventListener("message",({source:s,data:i})=>{s===Dr&&i===n&&r.length&&r.shift()()},!1),s=>{r.push(s),Dr.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",xt(Dr.postMessage)),$A=typeof queueMicrotask<"u"?queueMicrotask.bind(Dr):typeof process<"u"&&process.nextTick||Qg,jA=t=>t!=null&&xt(t[Za]),N={isArray:Us,isArrayBuffer:zg,isBuffer:ro,isFormData:pA,isArrayBufferView:iA,isString:oA,isNumber:Hg,isBoolean:aA,isObject:so,isPlainObject:Yo,isEmptyObject:cA,isReadableStream:gA,isRequest:_A,isResponse:yA,isHeaders:EA,isUndefined:Ns,isDate:lA,isFile:uA,isBlob:hA,isRegExp:NA,isFunction:xt,isStream:dA,isURLSearchParams:mA,isTypedArray:SA,isFileList:fA,forEach:io,merge:Nl,extend:vA,trim:wA,stripBOM:TA,inherits:IA,toFlatObject:AA,kindOf:ec,kindOfTest:hn,endsWith:bA,toArray:RA,forEachEntry:CA,matchAll:PA,isHTMLForm:kA,hasOwnProperty:dd,hasOwnProp:dd,reduceDescriptors:Gg,freezeMethods:DA,toObjectSet:VA,toCamelCase:OA,noop:xA,toFiniteNumber:MA,findKey:Wg,global:Dr,isContextDefined:Kg,isSpecCompliantForm:LA,toJSONObject:FA,isAsyncFn:UA,isThenable:BA,setImmediate:Qg,asap:$A,isIterable:jA};function _e(t,e,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s,this.status=s.status?s.status:null)}N.inherits(_e,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:N.toJSONObject(this.config),code:this.code,status:this.status}}});const Jg=_e.prototype,Yg={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{Yg[t]={value:t}});Object.defineProperties(_e,Yg);Object.defineProperty(Jg,"isAxiosError",{value:!0});_e.from=(t,e,n,r,s,i)=>{const o=Object.create(Jg);N.toFlatObject(t,o,function(f){return f!==Error.prototype},u=>u!=="isAxiosError");const c=t&&t.message?t.message:"Error",l=e==null&&t?t.code:e;return _e.call(o,c,l,n,r,s),t&&o.cause==null&&Object.defineProperty(o,"cause",{value:t,configurable:!0}),o.name=t&&t.name||"Error",i&&Object.assign(o,i),o};const qA=null;function Dl(t){return N.isPlainObject(t)||N.isArray(t)}function Xg(t){return N.endsWith(t,"[]")?t.slice(0,-2):t}function pd(t,e,n){return t?t.concat(e).map(function(s,i){return s=Xg(s),!n&&i?"["+s+"]":s}).join(n?".":""):e}function zA(t){return N.isArray(t)&&!t.some(Dl)}const HA=N.toFlatObject(N,{},null,function(e){return/^is[A-Z]/.test(e)});function nc(t,e,n){if(!N.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=N.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(C,S){return!N.isUndefined(S[C])});const r=n.metaTokens,s=n.visitor||f,i=n.dots,o=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&N.isSpecCompliantForm(e);if(!N.isFunction(s))throw new TypeError("visitor must be a function");function u(w){if(w===null)return"";if(N.isDate(w))return w.toISOString();if(N.isBoolean(w))return w.toString();if(!l&&N.isBlob(w))throw new _e("Blob is not supported. Use a Buffer instead.");return N.isArrayBuffer(w)||N.isTypedArray(w)?l&&typeof Blob=="function"?new Blob([w]):Buffer.from(w):w}function f(w,C,S){let $=w;if(w&&!S&&typeof w=="object"){if(N.endsWith(C,"{}"))C=r?C:C.slice(0,-2),w=JSON.stringify(w);else if(N.isArray(w)&&zA(w)||(N.isFileList(w)||N.endsWith(C,"[]"))&&($=N.toArray(w)))return C=Xg(C),$.forEach(function(j,z){!(N.isUndefined(j)||j===null)&&e.append(o===!0?pd([C],z,i):o===null?C:C+"[]",u(j))}),!1}return Dl(w)?!0:(e.append(pd(S,C,i),u(w)),!1)}const p=[],m=Object.assign(HA,{defaultVisitor:f,convertValue:u,isVisitable:Dl});function _(w,C){if(!N.isUndefined(w)){if(p.indexOf(w)!==-1)throw Error("Circular reference detected in "+C.join("."));p.push(w),N.forEach(w,function($,U){(!(N.isUndefined($)||$===null)&&s.call(e,$,N.isString(U)?U.trim():U,C,m))===!0&&_($,C?C.concat(U):[U])}),p.pop()}}if(!N.isObject(t))throw new TypeError("data must be an object");return _(t),e}function md(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function Pu(t,e){this._pairs=[],t&&nc(t,this,e)}const Zg=Pu.prototype;Zg.append=function(e,n){this._pairs.push([e,n])};Zg.toString=function(e){const n=e?function(r){return e.call(this,r,md)}:md;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function WA(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function e_(t,e,n){if(!e)return t;const r=n&&n.encode||WA;N.isFunction(n)&&(n={serialize:n});const s=n&&n.serialize;let i;if(s?i=s(e,n):i=N.isURLSearchParams(e)?e.toString():new Pu(e,n).toString(r),i){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+i}return t}class gd{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){N.forEach(this.handlers,function(r){r!==null&&e(r)})}}const t_={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},KA=typeof URLSearchParams<"u"?URLSearchParams:Pu,GA=typeof FormData<"u"?FormData:null,QA=typeof Blob<"u"?Blob:null,JA={isBrowser:!0,classes:{URLSearchParams:KA,FormData:GA,Blob:QA},protocols:["http","https","file","blob","url","data"]},ku=typeof window<"u"&&typeof document<"u",Vl=typeof navigator=="object"&&navigator||void 0,YA=ku&&(!Vl||["ReactNative","NativeScript","NS"].indexOf(Vl.product)<0),XA=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",ZA=ku&&window.location.href||"http://localhost",e1=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:ku,hasStandardBrowserEnv:YA,hasStandardBrowserWebWorkerEnv:XA,navigator:Vl,origin:ZA},Symbol.toStringTag,{value:"Module"})),It={...e1,...JA};function t1(t,e){return nc(t,new It.classes.URLSearchParams,{visitor:function(n,r,s,i){return It.isNode&&N.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)},...e})}function n1(t){return N.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function r1(t){const e={},n=Object.keys(t);let r;const s=n.length;let i;for(r=0;r<s;r++)i=n[r],e[i]=t[i];return e}function n_(t){function e(n,r,s,i){let o=n[i++];if(o==="__proto__")return!0;const c=Number.isFinite(+o),l=i>=n.length;return o=!o&&N.isArray(s)?s.length:o,l?(N.hasOwnProp(s,o)?s[o]=[s[o],r]:s[o]=r,!c):((!s[o]||!N.isObject(s[o]))&&(s[o]=[]),e(n,r,s[o],i)&&N.isArray(s[o])&&(s[o]=r1(s[o])),!c)}if(N.isFormData(t)&&N.isFunction(t.entries)){const n={};return N.forEachEntry(t,(r,s)=>{e(n1(r),s,n,0)}),n}return null}function s1(t,e,n){if(N.isString(t))try{return(e||JSON.parse)(t),N.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}const oo={transitional:t_,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,i=N.isObject(e);if(i&&N.isHTMLForm(e)&&(e=new FormData(e)),N.isFormData(e))return s?JSON.stringify(n_(e)):e;if(N.isArrayBuffer(e)||N.isBuffer(e)||N.isStream(e)||N.isFile(e)||N.isBlob(e)||N.isReadableStream(e))return e;if(N.isArrayBufferView(e))return e.buffer;if(N.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let c;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return t1(e,this.formSerializer).toString();if((c=N.isFileList(e))||r.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return nc(c?{"files[]":e}:e,l&&new l,this.formSerializer)}}return i||s?(n.setContentType("application/json",!1),s1(e)):e}],transformResponse:[function(e){const n=this.transitional||oo.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(N.isResponse(e)||N.isReadableStream(e))return e;if(e&&N.isString(e)&&(r&&!this.responseType||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(e,this.parseReviver)}catch(c){if(o)throw c.name==="SyntaxError"?_e.from(c,_e.ERR_BAD_RESPONSE,this,null,this.response):c}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:It.classes.FormData,Blob:It.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};N.forEach(["delete","get","head","post","put","patch"],t=>{oo.headers[t]={}});const i1=N.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),o1=t=>{const e={};let n,r,s;return t&&t.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),r=o.substring(s+1).trim(),!(!n||e[n]&&i1[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e},_d=Symbol("internals");function hi(t){return t&&String(t).trim().toLowerCase()}function Xo(t){return t===!1||t==null?t:N.isArray(t)?t.map(Xo):String(t)}function a1(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}const c1=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function Zc(t,e,n,r,s){if(N.isFunction(r))return r.call(this,e,n);if(s&&(e=n),!!N.isString(e)){if(N.isString(r))return e.indexOf(r)!==-1;if(N.isRegExp(r))return r.test(e)}}function l1(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function u1(t,e){const n=N.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(s,i,o){return this[r].call(this,e,s,i,o)},configurable:!0})})}let Mt=class{constructor(e){e&&this.set(e)}set(e,n,r){const s=this;function i(c,l,u){const f=hi(l);if(!f)throw new Error("header name must be a non-empty string");const p=N.findKey(s,f);(!p||s[p]===void 0||u===!0||u===void 0&&s[p]!==!1)&&(s[p||l]=Xo(c))}const o=(c,l)=>N.forEach(c,(u,f)=>i(u,f,l));if(N.isPlainObject(e)||e instanceof this.constructor)o(e,n);else if(N.isString(e)&&(e=e.trim())&&!c1(e))o(o1(e),n);else if(N.isObject(e)&&N.isIterable(e)){let c={},l,u;for(const f of e){if(!N.isArray(f))throw TypeError("Object iterator must return a key-value pair");c[u=f[0]]=(l=c[u])?N.isArray(l)?[...l,f[1]]:[l,f[1]]:f[1]}o(c,n)}else e!=null&&i(n,e,r);return this}get(e,n){if(e=hi(e),e){const r=N.findKey(this,e);if(r){const s=this[r];if(!n)return s;if(n===!0)return a1(s);if(N.isFunction(n))return n.call(this,s,r);if(N.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=hi(e),e){const r=N.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||Zc(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let s=!1;function i(o){if(o=hi(o),o){const c=N.findKey(r,o);c&&(!n||Zc(r,r[c],c,n))&&(delete r[c],s=!0)}}return N.isArray(e)?e.forEach(i):i(e),s}clear(e){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const i=n[r];(!e||Zc(this,this[i],i,e,!0))&&(delete this[i],s=!0)}return s}normalize(e){const n=this,r={};return N.forEach(this,(s,i)=>{const o=N.findKey(r,i);if(o){n[o]=Xo(s),delete n[i];return}const c=e?l1(i):String(i).trim();c!==i&&delete n[i],n[c]=Xo(s),r[c]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return N.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=e&&N.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const r=new this(e);return n.forEach(s=>r.set(s)),r}static accessor(e){const r=(this[_d]=this[_d]={accessors:{}}).accessors,s=this.prototype;function i(o){const c=hi(o);r[c]||(u1(s,o),r[c]=!0)}return N.isArray(e)?e.forEach(i):i(e),this}};Mt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);N.reduceDescriptors(Mt.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(r){this[n]=r}}});N.freezeMethods(Mt);function el(t,e){const n=this||oo,r=e||n,s=Mt.from(r.headers);let i=r.data;return N.forEach(t,function(c){i=c.call(n,i,s.normalize(),e?e.status:void 0)}),s.normalize(),i}function r_(t){return!!(t&&t.__CANCEL__)}function Bs(t,e,n){_e.call(this,t??"canceled",_e.ERR_CANCELED,e,n),this.name="CanceledError"}N.inherits(Bs,_e,{__CANCEL__:!0});function s_(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new _e("Request failed with status code "+n.status,[_e.ERR_BAD_REQUEST,_e.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function h1(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function f1(t,e){t=t||10;const n=new Array(t),r=new Array(t);let s=0,i=0,o;return e=e!==void 0?e:1e3,function(l){const u=Date.now(),f=r[i];o||(o=u),n[s]=l,r[s]=u;let p=i,m=0;for(;p!==s;)m+=n[p++],p=p%t;if(s=(s+1)%t,s===i&&(i=(i+1)%t),u-o<e)return;const _=f&&u-f;return _?Math.round(m*1e3/_):void 0}}function d1(t,e){let n=0,r=1e3/e,s,i;const o=(u,f=Date.now())=>{n=f,s=null,i&&(clearTimeout(i),i=null),t(...u)};return[(...u)=>{const f=Date.now(),p=f-n;p>=r?o(u,f):(s=u,i||(i=setTimeout(()=>{i=null,o(s)},r-p)))},()=>s&&o(s)]}const _a=(t,e,n=3)=>{let r=0;const s=f1(50,250);return d1(i=>{const o=i.loaded,c=i.lengthComputable?i.total:void 0,l=o-r,u=s(l),f=o<=c;r=o;const p={loaded:o,total:c,progress:c?o/c:void 0,bytes:l,rate:u||void 0,estimated:u&&c&&f?(c-o)/u:void 0,event:i,lengthComputable:c!=null,[e?"download":"upload"]:!0};t(p)},n)},yd=(t,e)=>{const n=t!=null;return[r=>e[0]({lengthComputable:n,total:t,loaded:r}),e[1]]},Ed=t=>(...e)=>N.asap(()=>t(...e)),p1=It.hasStandardBrowserEnv?((t,e)=>n=>(n=new URL(n,It.origin),t.protocol===n.protocol&&t.host===n.host&&(e||t.port===n.port)))(new URL(It.origin),It.navigator&&/(msie|trident)/i.test(It.navigator.userAgent)):()=>!0,m1=It.hasStandardBrowserEnv?{write(t,e,n,r,s,i){const o=[t+"="+encodeURIComponent(e)];N.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),N.isString(r)&&o.push("path="+r),N.isString(s)&&o.push("domain="+s),i===!0&&o.push("secure"),document.cookie=o.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function g1(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function _1(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function i_(t,e,n){let r=!g1(e);return t&&(r||n==!1)?_1(t,e):e}const wd=t=>t instanceof Mt?{...t}:t;function jr(t,e){e=e||{};const n={};function r(u,f,p,m){return N.isPlainObject(u)&&N.isPlainObject(f)?N.merge.call({caseless:m},u,f):N.isPlainObject(f)?N.merge({},f):N.isArray(f)?f.slice():f}function s(u,f,p,m){if(N.isUndefined(f)){if(!N.isUndefined(u))return r(void 0,u,p,m)}else return r(u,f,p,m)}function i(u,f){if(!N.isUndefined(f))return r(void 0,f)}function o(u,f){if(N.isUndefined(f)){if(!N.isUndefined(u))return r(void 0,u)}else return r(void 0,f)}function c(u,f,p){if(p in e)return r(u,f);if(p in t)return r(void 0,u)}const l={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:c,headers:(u,f,p)=>s(wd(u),wd(f),p,!0)};return N.forEach(Object.keys({...t,...e}),function(f){const p=l[f]||s,m=p(t[f],e[f],f);N.isUndefined(m)&&p!==c||(n[f]=m)}),n}const o_=t=>{const e=jr({},t);let{data:n,withXSRFToken:r,xsrfHeaderName:s,xsrfCookieName:i,headers:o,auth:c}=e;if(e.headers=o=Mt.from(o),e.url=e_(i_(e.baseURL,e.url,e.allowAbsoluteUrls),t.params,t.paramsSerializer),c&&o.set("Authorization","Basic "+btoa((c.username||"")+":"+(c.password?unescape(encodeURIComponent(c.password)):""))),N.isFormData(n)){if(It.hasStandardBrowserEnv||It.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if(N.isFunction(n.getHeaders)){const l=n.getHeaders(),u=["content-type","content-length"];Object.entries(l).forEach(([f,p])=>{u.includes(f.toLowerCase())&&o.set(f,p)})}}if(It.hasStandardBrowserEnv&&(r&&N.isFunction(r)&&(r=r(e)),r||r!==!1&&p1(e.url))){const l=s&&i&&m1.read(i);l&&o.set(s,l)}return e},y1=typeof XMLHttpRequest<"u",E1=y1&&function(t){return new Promise(function(n,r){const s=o_(t);let i=s.data;const o=Mt.from(s.headers).normalize();let{responseType:c,onUploadProgress:l,onDownloadProgress:u}=s,f,p,m,_,w;function C(){_&&_(),w&&w(),s.cancelToken&&s.cancelToken.unsubscribe(f),s.signal&&s.signal.removeEventListener("abort",f)}let S=new XMLHttpRequest;S.open(s.method.toUpperCase(),s.url,!0),S.timeout=s.timeout;function $(){if(!S)return;const j=Mt.from("getAllResponseHeaders"in S&&S.getAllResponseHeaders()),oe={data:!c||c==="text"||c==="json"?S.responseText:S.response,status:S.status,statusText:S.statusText,headers:j,config:t,request:S};s_(function(A){n(A),C()},function(A){r(A),C()},oe),S=null}"onloadend"in S?S.onloadend=$:S.onreadystatechange=function(){!S||S.readyState!==4||S.status===0&&!(S.responseURL&&S.responseURL.indexOf("file:")===0)||setTimeout($)},S.onabort=function(){S&&(r(new _e("Request aborted",_e.ECONNABORTED,t,S)),S=null)},S.onerror=function(z){const oe=z&&z.message?z.message:"Network Error",me=new _e(oe,_e.ERR_NETWORK,t,S);me.event=z||null,r(me),S=null},S.ontimeout=function(){let z=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const oe=s.transitional||t_;s.timeoutErrorMessage&&(z=s.timeoutErrorMessage),r(new _e(z,oe.clarifyTimeoutError?_e.ETIMEDOUT:_e.ECONNABORTED,t,S)),S=null},i===void 0&&o.setContentType(null),"setRequestHeader"in S&&N.forEach(o.toJSON(),function(z,oe){S.setRequestHeader(oe,z)}),N.isUndefined(s.withCredentials)||(S.withCredentials=!!s.withCredentials),c&&c!=="json"&&(S.responseType=s.responseType),u&&([m,w]=_a(u,!0),S.addEventListener("progress",m)),l&&S.upload&&([p,_]=_a(l),S.upload.addEventListener("progress",p),S.upload.addEventListener("loadend",_)),(s.cancelToken||s.signal)&&(f=j=>{S&&(r(!j||j.type?new Bs(null,t,S):j),S.abort(),S=null)},s.cancelToken&&s.cancelToken.subscribe(f),s.signal&&(s.signal.aborted?f():s.signal.addEventListener("abort",f)));const U=h1(s.url);if(U&&It.protocols.indexOf(U)===-1){r(new _e("Unsupported protocol "+U+":",_e.ERR_BAD_REQUEST,t));return}S.send(i||null)})},w1=(t,e)=>{const{length:n}=t=t?t.filter(Boolean):[];if(e||n){let r=new AbortController,s;const i=function(u){if(!s){s=!0,c();const f=u instanceof Error?u:this.reason;r.abort(f instanceof _e?f:new Bs(f instanceof Error?f.message:f))}};let o=e&&setTimeout(()=>{o=null,i(new _e(`timeout ${e} of ms exceeded`,_e.ETIMEDOUT))},e);const c=()=>{t&&(o&&clearTimeout(o),o=null,t.forEach(u=>{u.unsubscribe?u.unsubscribe(i):u.removeEventListener("abort",i)}),t=null)};t.forEach(u=>u.addEventListener("abort",i));const{signal:l}=r;return l.unsubscribe=()=>N.asap(c),l}},v1=function*(t,e){let n=t.byteLength;if(n<e){yield t;return}let r=0,s;for(;r<n;)s=r+e,yield t.slice(r,s),r=s},T1=async function*(t,e){for await(const n of I1(t))yield*v1(n,e)},I1=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:r}=await e.read();if(n)break;yield r}}finally{await e.cancel()}},vd=(t,e,n,r)=>{const s=T1(t,e);let i=0,o,c=l=>{o||(o=!0,r&&r(l))};return new ReadableStream({async pull(l){try{const{done:u,value:f}=await s.next();if(u){c(),l.close();return}let p=f.byteLength;if(n){let m=i+=p;n(m)}l.enqueue(new Uint8Array(f))}catch(u){throw c(u),u}},cancel(l){return c(l),s.return()}},{highWaterMark:2})},Td=64*1024,{isFunction:Fo}=N,A1=(({Request:t,Response:e})=>({Request:t,Response:e}))(N.global),{ReadableStream:Id,TextEncoder:Ad}=N.global,bd=(t,...e)=>{try{return!!t(...e)}catch{return!1}},b1=t=>{t=N.merge.call({skipUndefined:!0},A1,t);const{fetch:e,Request:n,Response:r}=t,s=e?Fo(e):typeof fetch=="function",i=Fo(n),o=Fo(r);if(!s)return!1;const c=s&&Fo(Id),l=s&&(typeof Ad=="function"?(w=>C=>w.encode(C))(new Ad):async w=>new Uint8Array(await new n(w).arrayBuffer())),u=i&&c&&bd(()=>{let w=!1;const C=new n(It.origin,{body:new Id,method:"POST",get duplex(){return w=!0,"half"}}).headers.has("Content-Type");return w&&!C}),f=o&&c&&bd(()=>N.isReadableStream(new r("").body)),p={stream:f&&(w=>w.body)};s&&["text","arrayBuffer","blob","formData","stream"].forEach(w=>{!p[w]&&(p[w]=(C,S)=>{let $=C&&C[w];if($)return $.call(C);throw new _e(`Response type '${w}' is not supported`,_e.ERR_NOT_SUPPORT,S)})});const m=async w=>{if(w==null)return 0;if(N.isBlob(w))return w.size;if(N.isSpecCompliantForm(w))return(await new n(It.origin,{method:"POST",body:w}).arrayBuffer()).byteLength;if(N.isArrayBufferView(w)||N.isArrayBuffer(w))return w.byteLength;if(N.isURLSearchParams(w)&&(w=w+""),N.isString(w))return(await l(w)).byteLength},_=async(w,C)=>{const S=N.toFiniteNumber(w.getContentLength());return S??m(C)};return async w=>{let{url:C,method:S,data:$,signal:U,cancelToken:j,timeout:z,onDownloadProgress:oe,onUploadProgress:me,responseType:A,headers:y,withCredentials:T="same-origin",fetchOptions:b}=o_(w),R=e||fetch;A=A?(A+"").toLowerCase():"text";let P=w1([U,j&&j.toAbortSignal()],z),v=null;const qe=P&&P.unsubscribe&&(()=>{P.unsubscribe()});let St;try{if(me&&u&&S!=="get"&&S!=="head"&&(St=await _(y,$))!==0){let Qe=new n(C,{method:"POST",body:$,duplex:"half"}),Pe;if(N.isFormData($)&&(Pe=Qe.headers.get("content-type"))&&y.setContentType(Pe),Qe.body){const[Ve,Ut]=yd(St,_a(Ed(me)));$=vd(Qe.body,Td,Ve,Ut)}}N.isString(T)||(T=T?"include":"omit");const Ce=i&&"credentials"in n.prototype,Ee={...b,signal:P,method:S.toUpperCase(),headers:y.normalize().toJSON(),body:$,duplex:"half",credentials:Ce?T:void 0};v=i&&new n(C,Ee);let ue=await(i?R(v,b):R(C,Ee));const pt=f&&(A==="stream"||A==="response");if(f&&(oe||pt&&qe)){const Qe={};["status","statusText","headers"].forEach(Bt=>{Qe[Bt]=ue[Bt]});const Pe=N.toFiniteNumber(ue.headers.get("content-length")),[Ve,Ut]=oe&&yd(Pe,_a(Ed(oe),!0))||[];ue=new r(vd(ue.body,Td,Ve,()=>{Ut&&Ut(),qe&&qe()}),Qe)}A=A||"text";let Ft=await p[N.findKey(p,A)||"text"](ue,w);return!pt&&qe&&qe(),await new Promise((Qe,Pe)=>{s_(Qe,Pe,{data:Ft,headers:Mt.from(ue.headers),status:ue.status,statusText:ue.statusText,config:w,request:v})})}catch(Ce){throw qe&&qe(),Ce&&Ce.name==="TypeError"&&/Load failed|fetch/i.test(Ce.message)?Object.assign(new _e("Network Error",_e.ERR_NETWORK,w,v),{cause:Ce.cause||Ce}):_e.from(Ce,Ce&&Ce.code,w,v)}}},R1=new Map,a_=t=>{let e=t?t.env:{};const{fetch:n,Request:r,Response:s}=e,i=[r,s,n];let o=i.length,c=o,l,u,f=R1;for(;c--;)l=i[c],u=f.get(l),u===void 0&&f.set(l,u=c?new Map:b1(e)),f=u;return u};a_();const xl={http:qA,xhr:E1,fetch:{get:a_}};N.forEach(xl,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const Rd=t=>`- ${t}`,S1=t=>N.isFunction(t)||t===null||t===!1,c_={getAdapter:(t,e)=>{t=N.isArray(t)?t:[t];const{length:n}=t;let r,s;const i={};for(let o=0;o<n;o++){r=t[o];let c;if(s=r,!S1(r)&&(s=xl[(c=String(r)).toLowerCase()],s===void 0))throw new _e(`Unknown adapter '${c}'`);if(s&&(N.isFunction(s)||(s=s.get(e))))break;i[c||"#"+o]=s}if(!s){const o=Object.entries(i).map(([l,u])=>`adapter ${l} `+(u===!1?"is not supported by the environment":"is not available in the build"));let c=n?o.length>1?`since :
`+o.map(Rd).join(`
`):" "+Rd(o[0]):"as no adapter specified";throw new _e("There is no suitable adapter to dispatch the request "+c,"ERR_NOT_SUPPORT")}return s},adapters:xl};function tl(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Bs(null,t)}function Sd(t){return tl(t),t.headers=Mt.from(t.headers),t.data=el.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),c_.getAdapter(t.adapter||oo.adapter,t)(t).then(function(r){return tl(t),r.data=el.call(t,t.transformResponse,r),r.headers=Mt.from(r.headers),r},function(r){return r_(r)||(tl(t),r&&r.response&&(r.response.data=el.call(t,t.transformResponse,r.response),r.response.headers=Mt.from(r.response.headers))),Promise.reject(r)})}const l_="1.12.2",rc={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{rc[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const Cd={};rc.transitional=function(e,n,r){function s(i,o){return"[Axios v"+l_+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,c)=>{if(e===!1)throw new _e(s(o," has been removed"+(n?" in "+n:"")),_e.ERR_DEPRECATED);return n&&!Cd[o]&&(Cd[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(i,o,c):!0}};rc.spelling=function(e){return(n,r)=>(console.warn(`${r} is likely a misspelling of ${e}`),!0)};function C1(t,e,n){if(typeof t!="object")throw new _e("options must be an object",_e.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let s=r.length;for(;s-- >0;){const i=r[s],o=e[i];if(o){const c=t[i],l=c===void 0||o(c,i,t);if(l!==!0)throw new _e("option "+i+" must be "+l,_e.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new _e("Unknown option "+i,_e.ERR_BAD_OPTION)}}const Zo={assertOptions:C1,validators:rc},pn=Zo.validators;let Lr=class{constructor(e){this.defaults=e||{},this.interceptors={request:new gd,response:new gd}}async request(e,n){try{return await this._request(e,n)}catch(r){if(r instanceof Error){let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const i=s.stack?s.stack.replace(/^.+\n/,""):"";try{r.stack?i&&!String(r.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+i):r.stack=i}catch{}}throw r}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=jr(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:i}=n;r!==void 0&&Zo.assertOptions(r,{silentJSONParsing:pn.transitional(pn.boolean),forcedJSONParsing:pn.transitional(pn.boolean),clarifyTimeoutError:pn.transitional(pn.boolean)},!1),s!=null&&(N.isFunction(s)?n.paramsSerializer={serialize:s}:Zo.assertOptions(s,{encode:pn.function,serialize:pn.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),Zo.assertOptions(n,{baseUrl:pn.spelling("baseURL"),withXsrfToken:pn.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=i&&N.merge(i.common,i[n.method]);i&&N.forEach(["delete","get","head","post","put","patch","common"],w=>{delete i[w]}),n.headers=Mt.concat(o,i);const c=[];let l=!0;this.interceptors.request.forEach(function(C){typeof C.runWhen=="function"&&C.runWhen(n)===!1||(l=l&&C.synchronous,c.unshift(C.fulfilled,C.rejected))});const u=[];this.interceptors.response.forEach(function(C){u.push(C.fulfilled,C.rejected)});let f,p=0,m;if(!l){const w=[Sd.bind(this),void 0];for(w.unshift(...c),w.push(...u),m=w.length,f=Promise.resolve(n);p<m;)f=f.then(w[p++],w[p++]);return f}m=c.length;let _=n;for(;p<m;){const w=c[p++],C=c[p++];try{_=w(_)}catch(S){C.call(this,S);break}}try{f=Sd.call(this,_)}catch(w){return Promise.reject(w)}for(p=0,m=u.length;p<m;)f=f.then(u[p++],u[p++]);return f}getUri(e){e=jr(this.defaults,e);const n=i_(e.baseURL,e.url,e.allowAbsoluteUrls);return e_(n,e.params,e.paramsSerializer)}};N.forEach(["delete","get","head","options"],function(e){Lr.prototype[e]=function(n,r){return this.request(jr(r||{},{method:e,url:n,data:(r||{}).data}))}});N.forEach(["post","put","patch"],function(e){function n(r){return function(i,o,c){return this.request(jr(c||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}Lr.prototype[e]=n(),Lr.prototype[e+"Form"]=n(!0)});let P1=class u_{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const o=new Promise(c=>{r.subscribe(c),i=c}).then(s);return o.cancel=function(){r.unsubscribe(i)},o},e(function(i,o,c){r.reason||(r.reason=new Bs(i,o,c),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=r=>{e.abort(r)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new u_(function(s){e=s}),cancel:e}}};function k1(t){return function(n){return t.apply(null,n)}}function O1(t){return N.isObject(t)&&t.isAxiosError===!0}const Ml={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Ml).forEach(([t,e])=>{Ml[e]=t});function h_(t){const e=new Lr(t),n=jg(Lr.prototype.request,e);return N.extend(n,Lr.prototype,e,{allOwnKeys:!0}),N.extend(n,e,null,{allOwnKeys:!0}),n.create=function(s){return h_(jr(t,s))},n}const ze=h_(oo);ze.Axios=Lr;ze.CanceledError=Bs;ze.CancelToken=P1;ze.isCancel=r_;ze.VERSION=l_;ze.toFormData=nc;ze.AxiosError=_e;ze.Cancel=ze.CanceledError;ze.all=function(e){return Promise.all(e)};ze.spread=k1;ze.isAxiosError=O1;ze.mergeConfig=jr;ze.AxiosHeaders=Mt;ze.formToJSON=t=>n_(N.isHTMLForm(t)?new FormData(t):t);ze.getAdapter=c_.getAdapter;ze.HttpStatusCode=Ml;ze.default=ze;const{Axios:MD,AxiosError:LD,CanceledError:FD,isCancel:UD,CancelToken:BD,VERSION:$D,all:jD,Cancel:qD,isAxiosError:zD,spread:HD,toFormData:WD,AxiosHeaders:KD,HttpStatusCode:GD,formToJSON:QD,getAdapter:JD,mergeConfig:YD}=ze,Zt=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},N1={data(){return{jsondata:null,error:null}},mounted(){this.getBookCountAPI()},methods:{async getBookCountAPI(){try{const t=await ze.get("https://countbooks-udrwjox7ya-uc.a.run.app");this.jsondata=t.data,this.error=null}catch(t){console.error("Error fetching book count:",t),this.error=t,this.count=null}}}};function D1(t,e,n,r,s,i){return $e(),Ge("pre",null,nn(s.jsondata),1)}const f_=Zt(N1,[["render",D1]]),V1={class:"greetings"},x1={class:"green"},M1={class:"nav-item"},L1={class:"nav-item"},F1={class:"nav-item"},U1={class:"nav-item"},B1={class:"nav-item"},$1={class:"nav-item"},j1={__name:"HelloWorld",props:{msg:{type:String,required:!0}},setup(t){return(e,n)=>{const r=Wo("router-link");return $e(),Ge("div",V1,[W("h1",x1,nn(t.msg),1),n[6]||(n[6]=W("h3",null,[ye(" You’ve successfully created a project with "),W("a",{href:"https://vite.dev/",target:"_blank",rel:"noopener"},"Vite"),ye(" + "),W("a",{href:"https://vuejs.org/",target:"_blank",rel:"noopener"},"Vue 3"),ye(". ")],-1)),W("li",M1,[be(r,{to:"/Firelogin",class:"nav-link","active-class":"active"},{default:Ke(()=>[...n[0]||(n[0]=[ye("Firebase Login",-1)])]),_:1})]),W("li",L1,[be(r,{to:"/FireRegister",class:"nav-link","active-class":"active"},{default:Ke(()=>[...n[1]||(n[1]=[ye("Firebase Register",-1)])]),_:1})]),W("li",F1,[be(r,{to:"/addbook",class:"nav-link","active-class":"active"},{default:Ke(()=>[...n[2]||(n[2]=[ye(" Add Book ",-1)])]),_:1})]),W("li",U1,[be(r,{to:"/GetBookCount",class:"nav-link","active-class":"active"},{default:Ke(()=>[...n[3]||(n[3]=[ye(" Get Book Count ",-1)])]),_:1})]),W("li",B1,[be(r,{to:"/WeatherCheck",class:"nav-link","active-class":"active"},{default:Ke(()=>[...n[4]||(n[4]=[ye(" Get Weather ",-1)])]),_:1})]),W("li",$1,[be(r,{to:"/CountBookAPI",class:"nav-link","active-class":"active"},{default:Ke(()=>[...n[5]||(n[5]=[ye(" Count Book API ",-1)])]),_:1})])])}}},q1=Zt(j1,[["__scopeId","data-v-7d8ce50b"]]),z1={name:"App",components:{HelloWorld:q1,CountBookAPI:f_},computed:{showHeader(){return this.$route.name!=="CountBookAPI"}}},H1={class:"main-container"},W1={key:0},K1={class:"main-box"};function G1(t,e,n,r,s,i){const o=Wo("HelloWorld"),c=Wo("router-view"),l=Wo("RouterView");return $e(),Ge(st,null,[e[0]||(e[0]=W("header",null,null,-1)),W("div",H1,[i.showHeader?($e(),Ge("header",W1,[be(o)])):ma("",!0),W("main",K1,[be(c)])]),be(l)],64)}const Q1=Zt(z1,[["render",G1],["__scopeId","data-v-2c0008d3"]]),J1="modulepreload",Y1=function(t){return"/"+t},Pd={},X1=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){let l=function(u){return Promise.all(u.map(f=>Promise.resolve(f).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),c=o?.nonce||o?.getAttribute("nonce");s=l(n.map(u=>{if(u=Y1(u),u in Pd)return;Pd[u]=!0;const f=u.endsWith(".css"),p=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${p}`))return;const m=document.createElement("link");if(m.rel=f?"stylesheet":J1,f||(m.as="script"),m.crossOrigin="",m.href=u,c&&m.setAttribute("nonce",c),document.head.appendChild(m),f)return new Promise((_,w)=>{m.addEventListener("load",_),m.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return s.then(o=>{for(const c of o||[])c.status==="rejected"&&i(c.reason);return e().catch(i)})},Z1={},e0={class:"item"},t0={class:"details"};function n0(t,e){return $e(),Ge("div",e0,[W("i",null,[qc(t.$slots,"icon",{},void 0)]),W("div",t0,[W("h3",null,[qc(t.$slots,"heading",{},void 0)]),qc(t.$slots,"default",{},void 0)])])}const fi=Zt(Z1,[["render",n0],["__scopeId","data-v-40a5c0e5"]]),r0={},s0={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"17",fill:"currentColor"};function i0(t,e){return $e(),Ge("svg",s0,[...e[0]||(e[0]=[W("path",{d:"M11 2.253a1 1 0 1 0-2 0h2zm-2 13a1 1 0 1 0 2 0H9zm.447-12.167a1 1 0 1 0 1.107-1.666L9.447 3.086zM1 2.253L.447 1.42A1 1 0 0 0 0 2.253h1zm0 13H0a1 1 0 0 0 1.553.833L1 15.253zm8.447.833a1 1 0 1 0 1.107-1.666l-1.107 1.666zm0-14.666a1 1 0 1 0 1.107 1.666L9.447 1.42zM19 2.253h1a1 1 0 0 0-.447-.833L19 2.253zm0 13l-.553.833A1 1 0 0 0 20 15.253h-1zm-9.553-.833a1 1 0 1 0 1.107 1.666L9.447 14.42zM9 2.253v13h2v-13H9zm1.553-.833C9.203.523 7.42 0 5.5 0v2c1.572 0 2.961.431 3.947 1.086l1.107-1.666zM5.5 0C3.58 0 1.797.523.447 1.42l1.107 1.666C2.539 2.431 3.928 2 5.5 2V0zM0 2.253v13h2v-13H0zm1.553 13.833C2.539 15.431 3.928 15 5.5 15v-2c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM5.5 15c1.572 0 2.961.431 3.947 1.086l1.107-1.666C9.203 13.523 7.42 13 5.5 13v2zm5.053-11.914C11.539 2.431 12.928 2 14.5 2V0c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM14.5 2c1.573 0 2.961.431 3.947 1.086l1.107-1.666C18.203.523 16.421 0 14.5 0v2zm3.5.253v13h2v-13h-2zm1.553 12.167C18.203 13.523 16.421 13 14.5 13v2c1.573 0 2.961.431 3.947 1.086l1.107-1.666zM14.5 13c-1.92 0-3.703.523-5.053 1.42l1.107 1.666C11.539 15.431 12.928 15 14.5 15v-2z"},null,-1)])])}const o0=Zt(r0,[["render",i0]]),a0={},c0={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",class:"iconify iconify--mdi",width:"24",height:"24",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"};function l0(t,e){return $e(),Ge("svg",c0,[...e[0]||(e[0]=[W("path",{d:"M20 18v-4h-3v1h-2v-1H9v1H7v-1H4v4h16M6.33 8l-1.74 4H7v-1h2v1h6v-1h2v1h2.41l-1.74-4H6.33M9 5v1h6V5H9m12.84 7.61c.1.22.16.48.16.8V18c0 .53-.21 1-.6 1.41c-.4.4-.85.59-1.4.59H4c-.55 0-1-.19-1.4-.59C2.21 19 2 18.53 2 18v-4.59c0-.32.06-.58.16-.8L4.5 7.22C4.84 6.41 5.45 6 6.33 6H7V5c0-.55.18-1 .57-1.41C7.96 3.2 8.44 3 9 3h6c.56 0 1.04.2 1.43.59c.39.41.57.86.57 1.41v1h.67c.88 0 1.49.41 1.83 1.22l2.34 5.39z",fill:"currentColor"},null,-1)])])}const u0=Zt(a0,[["render",l0]]),h0={},f0={xmlns:"http://www.w3.org/2000/svg",width:"18",height:"20",fill:"currentColor"};function d0(t,e){return $e(),Ge("svg",f0,[...e[0]||(e[0]=[W("path",{d:"M11.447 8.894a1 1 0 1 0-.894-1.789l.894 1.789zm-2.894-.789a1 1 0 1 0 .894 1.789l-.894-1.789zm0 1.789a1 1 0 1 0 .894-1.789l-.894 1.789zM7.447 7.106a1 1 0 1 0-.894 1.789l.894-1.789zM10 9a1 1 0 1 0-2 0h2zm-2 2.5a1 1 0 1 0 2 0H8zm9.447-5.606a1 1 0 1 0-.894-1.789l.894 1.789zm-2.894-.789a1 1 0 1 0 .894 1.789l-.894-1.789zm2 .789a1 1 0 1 0 .894-1.789l-.894 1.789zm-1.106-2.789a1 1 0 1 0-.894 1.789l.894-1.789zM18 5a1 1 0 1 0-2 0h2zm-2 2.5a1 1 0 1 0 2 0h-2zm-5.447-4.606a1 1 0 1 0 .894-1.789l-.894 1.789zM9 1l.447-.894a1 1 0 0 0-.894 0L9 1zm-2.447.106a1 1 0 1 0 .894 1.789l-.894-1.789zm-6 3a1 1 0 1 0 .894 1.789L.553 4.106zm2.894.789a1 1 0 1 0-.894-1.789l.894 1.789zm-2-.789a1 1 0 1 0-.894 1.789l.894-1.789zm1.106 2.789a1 1 0 1 0 .894-1.789l-.894 1.789zM2 5a1 1 0 1 0-2 0h2zM0 7.5a1 1 0 1 0 2 0H0zm8.553 12.394a1 1 0 1 0 .894-1.789l-.894 1.789zm-1.106-2.789a1 1 0 1 0-.894 1.789l.894-1.789zm1.106 1a1 1 0 1 0 .894 1.789l-.894-1.789zm2.894.789a1 1 0 1 0-.894-1.789l.894 1.789zM8 19a1 1 0 1 0 2 0H8zm2-2.5a1 1 0 1 0-2 0h2zm-7.447.394a1 1 0 1 0 .894-1.789l-.894 1.789zM1 15H0a1 1 0 0 0 .553.894L1 15zm1-2.5a1 1 0 1 0-2 0h2zm12.553 2.606a1 1 0 1 0 .894 1.789l-.894-1.789zM17 15l.447.894A1 1 0 0 0 18 15h-1zm1-2.5a1 1 0 1 0-2 0h2zm-7.447-5.394l-2 1 .894 1.789 2-1-.894-1.789zm-1.106 1l-2-1-.894 1.789 2 1 .894-1.789zM8 9v2.5h2V9H8zm8.553-4.894l-2 1 .894 1.789 2-1-.894-1.789zm.894 0l-2-1-.894 1.789 2 1 .894-1.789zM16 5v2.5h2V5h-2zm-4.553-3.894l-2-1-.894 1.789 2 1 .894-1.789zm-2.894-1l-2 1 .894 1.789 2-1L8.553.106zM1.447 5.894l2-1-.894-1.789-2 1 .894 1.789zm-.894 0l2 1 .894-1.789-2-1-.894 1.789zM0 5v2.5h2V5H0zm9.447 13.106l-2-1-.894 1.789 2 1 .894-1.789zm0 1.789l2-1-.894-1.789-2 1 .894 1.789zM10 19v-2.5H8V19h2zm-6.553-3.894l-2-1-.894 1.789 2 1 .894-1.789zM2 15v-2.5H0V15h2zm13.447 1.894l2-1-.894-1.789-2 1 .894 1.789zM18 15v-2.5h-2V15h2z"},null,-1)])])}const p0=Zt(h0,[["render",d0]]),m0={},g0={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor"};function _0(t,e){return $e(),Ge("svg",g0,[...e[0]||(e[0]=[W("path",{d:"M15 4a1 1 0 1 0 0 2V4zm0 11v-1a1 1 0 0 0-1 1h1zm0 4l-.707.707A1 1 0 0 0 16 19h-1zm-4-4l.707-.707A1 1 0 0 0 11 14v1zm-4.707-1.293a1 1 0 0 0-1.414 1.414l1.414-1.414zm-.707.707l-.707-.707.707.707zM9 11v-1a1 1 0 0 0-.707.293L9 11zm-4 0h1a1 1 0 0 0-1-1v1zm0 4H4a1 1 0 0 0 1.707.707L5 15zm10-9h2V4h-2v2zm2 0a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3v2zm1 1v6h2V7h-2zm0 6a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3h-2zm-1 1h-2v2h2v-2zm-3 1v4h2v-4h-2zm1.707 3.293l-4-4-1.414 1.414 4 4 1.414-1.414zM11 14H7v2h4v-2zm-4 0c-.276 0-.525-.111-.707-.293l-1.414 1.414C5.42 15.663 6.172 16 7 16v-2zm-.707 1.121l3.414-3.414-1.414-1.414-3.414 3.414 1.414 1.414zM9 12h4v-2H9v2zm4 0a3 3 0 0 0 3-3h-2a1 1 0 0 1-1 1v2zm3-3V3h-2v6h2zm0-6a3 3 0 0 0-3-3v2a1 1 0 0 1 1 1h2zm-3-3H3v2h10V0zM3 0a3 3 0 0 0-3 3h2a1 1 0 0 1 1-1V0zM0 3v6h2V3H0zm0 6a3 3 0 0 0 3 3v-2a1 1 0 0 1-1-1H0zm3 3h2v-2H3v2zm1-1v4h2v-4H4zm1.707 4.707l.586-.586-1.414-1.414-.586.586 1.414 1.414z"},null,-1)])])}const y0=Zt(m0,[["render",_0]]),E0={},w0={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor"};function v0(t,e){return $e(),Ge("svg",w0,[...e[0]||(e[0]=[W("path",{d:"M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.666.105 5.5 5.5 0 0 0-.114 7.665L10 18.78l8.39-8.4a5.5 5.5 0 0 0-.114-7.665 5.5 5.5 0 0 0-7.666-.105l-.61.61z"},null,-1)])])}const T0=Zt(E0,[["render",v0]]),I0={__name:"TheWelcome",setup(t){const e=()=>fetch("/__open-in-editor?file=README.md");return(n,r)=>($e(),Ge(st,null,[be(fi,null,{icon:Ke(()=>[be(o0)]),heading:Ke(()=>[...r[0]||(r[0]=[ye("Documentation",-1)])]),default:Ke(()=>[r[1]||(r[1]=ye(" Vue’s ",-1)),r[2]||(r[2]=W("a",{href:"https://vuejs.org/",target:"_blank",rel:"noopener"},"official documentation",-1)),r[3]||(r[3]=ye(" provides you with all information you need to get started. ",-1))]),_:1}),be(fi,null,{icon:Ke(()=>[be(u0)]),heading:Ke(()=>[...r[4]||(r[4]=[ye("Tooling",-1)])]),default:Ke(()=>[r[6]||(r[6]=ye(" This project is served and bundled with ",-1)),r[7]||(r[7]=W("a",{href:"https://vite.dev/guide/features.html",target:"_blank",rel:"noopener"},"Vite",-1)),r[8]||(r[8]=ye(". The recommended IDE setup is ",-1)),r[9]||(r[9]=W("a",{href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener"},"VSCode",-1)),r[10]||(r[10]=ye(" + ",-1)),r[11]||(r[11]=W("a",{href:"https://github.com/vuejs/language-tools",target:"_blank",rel:"noopener"},"Vue - Official",-1)),r[12]||(r[12]=ye(". If you need to test your components and web pages, check out ",-1)),r[13]||(r[13]=W("a",{href:"https://vitest.dev/",target:"_blank",rel:"noopener"},"Vitest",-1)),r[14]||(r[14]=ye(" and ",-1)),r[15]||(r[15]=W("a",{href:"https://www.cypress.io/",target:"_blank",rel:"noopener"},"Cypress",-1)),r[16]||(r[16]=ye(" / ",-1)),r[17]||(r[17]=W("a",{href:"https://playwright.dev/",target:"_blank",rel:"noopener"},"Playwright",-1)),r[18]||(r[18]=ye(". ",-1)),r[19]||(r[19]=W("br",null,null,-1)),r[20]||(r[20]=ye(" More instructions are available in ",-1)),W("a",{href:"javascript:void(0)",onClick:e},[...r[5]||(r[5]=[W("code",null,"README.md",-1)])]),r[21]||(r[21]=ye(". ",-1))]),_:1}),be(fi,null,{icon:Ke(()=>[be(p0)]),heading:Ke(()=>[...r[22]||(r[22]=[ye("Ecosystem",-1)])]),default:Ke(()=>[r[23]||(r[23]=ye(" Get official tools and libraries for your project: ",-1)),r[24]||(r[24]=W("a",{href:"https://pinia.vuejs.org/",target:"_blank",rel:"noopener"},"Pinia",-1)),r[25]||(r[25]=ye(", ",-1)),r[26]||(r[26]=W("a",{href:"https://router.vuejs.org/",target:"_blank",rel:"noopener"},"Vue Router",-1)),r[27]||(r[27]=ye(", ",-1)),r[28]||(r[28]=W("a",{href:"https://test-utils.vuejs.org/",target:"_blank",rel:"noopener"},"Vue Test Utils",-1)),r[29]||(r[29]=ye(", and ",-1)),r[30]||(r[30]=W("a",{href:"https://github.com/vuejs/devtools",target:"_blank",rel:"noopener"},"Vue Dev Tools",-1)),r[31]||(r[31]=ye(". If you need more resources, we suggest paying ",-1)),r[32]||(r[32]=W("a",{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"},"Awesome Vue",-1)),r[33]||(r[33]=ye(" a visit. ",-1))]),_:1}),be(fi,null,{icon:Ke(()=>[be(y0)]),heading:Ke(()=>[...r[34]||(r[34]=[ye("Community",-1)])]),default:Ke(()=>[r[35]||(r[35]=ye(" Got stuck? Ask your question on ",-1)),r[36]||(r[36]=W("a",{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"},"Vue Land",-1)),r[37]||(r[37]=ye(" (our official Discord server), or ",-1)),r[38]||(r[38]=W("a",{href:"https://stackoverflow.com/questions/tagged/vue.js",target:"_blank",rel:"noopener"},"StackOverflow",-1)),r[39]||(r[39]=ye(". You should also follow the official ",-1)),r[40]||(r[40]=W("a",{href:"https://bsky.app/profile/vuejs.org",target:"_blank",rel:"noopener"},"@vuejs.org",-1)),r[41]||(r[41]=ye(" Bluesky account or the ",-1)),r[42]||(r[42]=W("a",{href:"https://x.com/vuejs",target:"_blank",rel:"noopener"},"@vuejs",-1)),r[43]||(r[43]=ye(" X account for latest news in the Vue world. ",-1))]),_:1}),be(fi,null,{icon:Ke(()=>[be(T0)]),heading:Ke(()=>[...r[44]||(r[44]=[ye("Support Vue",-1)])]),default:Ke(()=>[r[45]||(r[45]=ye(" As an independent project, Vue relies on community backing for its sustainability. You can help us by ",-1)),r[46]||(r[46]=W("a",{href:"https://vuejs.org/sponsor/",target:"_blank",rel:"noopener"},"becoming a sponsor",-1)),r[47]||(r[47]=ye(". ",-1))]),_:1})],64))}},A0={__name:"HomeView",setup(t){return(e,n)=>($e(),Ge("main",null,[be(I0)]))}},b0=()=>{};var kd={};/**
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
 */const d_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},R0=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},p_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,l=s+2<t.length,u=l?t[s+2]:0,f=i>>2,p=(i&3)<<4|c>>4;let m=(c&15)<<2|u>>6,_=u&63;l||(_=64,o||(m=64)),r.push(n[f],n[p],n[m],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(d_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):R0(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||u==null||p==null)throw new S0;const m=i<<2|c>>4;if(r.push(m),u!==64){const _=c<<4&240|u>>2;if(r.push(_),p!==64){const w=u<<6&192|p;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class S0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const C0=function(t){const e=d_(t);return p_.encodeByteArray(e,!0)},ya=function(t){return C0(t).replace(/\./g,"")},m_=function(t){try{return p_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function P0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const k0=()=>P0().__FIREBASE_DEFAULTS__,O0=()=>{if(typeof process>"u"||typeof kd>"u")return;const t=kd.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},N0=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&m_(t[1]);return e&&JSON.parse(e)},sc=()=>{try{return b0()||k0()||O0()||N0()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},g_=t=>sc()?.emulatorHosts?.[t],D0=t=>{const e=g_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},__=()=>sc()?.config,y_=t=>sc()?.[`_${t}`];/**
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
 */class V0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function $s(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function E_(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function x0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[ya(JSON.stringify(n)),ya(JSON.stringify(o)),""].join(".")}const Ci={};function M0(){const t={prod:[],emulator:[]};for(const e of Object.keys(Ci))Ci[e]?t.emulator.push(e):t.prod.push(e);return t}function L0(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Od=!1;function w_(t,e){if(typeof window>"u"||typeof document>"u"||!$s(window.location.host)||Ci[t]===e||Ci[t]||Od)return;Ci[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",i=M0().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function c(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function l(m,_){m.setAttribute("width","24"),m.setAttribute("id",_),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function u(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{Od=!0,o()},m}function f(m,_){m.setAttribute("id",_),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=L0(r),_=n("text"),w=document.getElementById(_)||document.createElement("span"),C=n("learnmore"),S=document.getElementById(C)||document.createElement("a"),$=n("preprendIcon"),U=document.getElementById($)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const j=m.element;c(j),f(S,C);const z=u();l(U,$),j.append(U,w,S,z),document.body.appendChild(j)}i?(w.innerText="Preview backend disconnected.",U.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(U.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,w.innerText="Preview backend running in this workspace."),w.setAttribute("id",_)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
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
 */function Rt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function F0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Rt())}function U0(){const t=sc()?.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function B0(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function v_(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function $0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function j0(){const t=Rt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function q0(){return!U0()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function T_(){try{return typeof indexedDB=="object"}catch{return!1}}function I_(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(n){e(n)}})}function z0(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const H0="FirebaseError";class fn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=H0,Object.setPrototypeOf(this,fn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Yr.prototype.create)}}class Yr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?W0(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new fn(s,c,r)}}function W0(t,e){return t.replace(K0,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const K0=/\{\$([^}]+)}/g;function G0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function qr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Nd(i)&&Nd(o)){if(!qr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Nd(t){return t!==null&&typeof t=="object"}/**
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
 */function ao(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function pi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function mi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Q0(t,e){const n=new J0(t,e);return n.subscribe.bind(n)}class J0{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Y0(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=nl),s.error===void 0&&(s.error=nl),s.complete===void 0&&(s.complete=nl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Y0(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function nl(){}/**
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
 */const X0=1e3,Z0=2,eb=14400*1e3,tb=.5;function Dd(t,e=X0,n=Z0){const r=e*Math.pow(n,t),s=Math.round(tb*r*(Math.random()-.5)*2);return Math.min(eb,r+s)}/**
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
 */function Ot(t){return t&&t._delegate?t._delegate:t}class cn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Nr="[DEFAULT]";/**
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
 */class nb{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new V0;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(sb(e))try{this.getOrInitializeService({instanceIdentifier:Nr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Nr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Nr){return this.instances.has(e)}getOptions(e=Nr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:rb(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Nr){return this.component?this.component.multipleInstances?e:Nr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function rb(t){return t===Nr?void 0:t}function sb(t){return t.instantiationMode==="EAGER"}/**
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
 */class ib{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new nb(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var we;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(we||(we={}));const ob={debug:we.DEBUG,verbose:we.VERBOSE,info:we.INFO,warn:we.WARN,error:we.ERROR,silent:we.SILENT},ab=we.INFO,cb={[we.DEBUG]:"log",[we.VERBOSE]:"log",[we.INFO]:"info",[we.WARN]:"warn",[we.ERROR]:"error"},lb=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=cb[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ic{constructor(e){this.name=e,this._logLevel=ab,this._logHandler=lb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in we))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ob[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,we.DEBUG,...e),this._logHandler(this,we.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,we.VERBOSE,...e),this._logHandler(this,we.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,we.INFO,...e),this._logHandler(this,we.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,we.WARN,...e),this._logHandler(this,we.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,we.ERROR,...e),this._logHandler(this,we.ERROR,...e)}}const ub=(t,e)=>e.some(n=>t instanceof n);let Vd,xd;function hb(){return Vd||(Vd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function fb(){return xd||(xd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const A_=new WeakMap,Ll=new WeakMap,b_=new WeakMap,rl=new WeakMap,Ou=new WeakMap;function db(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(hr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&A_.set(n,t)}).catch(()=>{}),Ou.set(e,t),e}function pb(t){if(Ll.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Ll.set(t,e)}let Fl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ll.get(t);if(e==="objectStoreNames")return t.objectStoreNames||b_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return hr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function mb(t){Fl=t(Fl)}function gb(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(sl(this),e,...n);return b_.set(r,e.sort?e.sort():[e]),hr(r)}:fb().includes(t)?function(...e){return t.apply(sl(this),e),hr(A_.get(this))}:function(...e){return hr(t.apply(sl(this),e))}}function _b(t){return typeof t=="function"?gb(t):(t instanceof IDBTransaction&&pb(t),ub(t,hb())?new Proxy(t,Fl):t)}function hr(t){if(t instanceof IDBRequest)return db(t);if(rl.has(t))return rl.get(t);const e=_b(t);return e!==t&&(rl.set(t,e),Ou.set(e,t)),e}const sl=t=>Ou.get(t);function R_(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=hr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(hr(o.result),l.oldVersion,l.newVersion,hr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),c}const yb=["get","getKey","getAll","getAllKeys","count"],Eb=["put","add","delete","clear"],il=new Map;function Md(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(il.get(e))return il.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Eb.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||yb.includes(n)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(c.shift())),(await Promise.all([u[n](...c),s&&l.done]))[0]};return il.set(e,i),i}mb(t=>({...t,get:(e,n,r)=>Md(e,n)||t.get(e,n,r),has:(e,n)=>!!Md(e,n)||t.has(e,n)}));/**
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
 */class wb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(vb(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function vb(t){return t.getComponent()?.type==="VERSION"}const Ul="@firebase/app",Ld="0.14.2";/**
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
 */const qn=new ic("@firebase/app"),Tb="@firebase/app-compat",Ib="@firebase/analytics-compat",Ab="@firebase/analytics",bb="@firebase/app-check-compat",Rb="@firebase/app-check",Sb="@firebase/auth",Cb="@firebase/auth-compat",Pb="@firebase/database",kb="@firebase/data-connect",Ob="@firebase/database-compat",Nb="@firebase/functions",Db="@firebase/functions-compat",Vb="@firebase/installations",xb="@firebase/installations-compat",Mb="@firebase/messaging",Lb="@firebase/messaging-compat",Fb="@firebase/performance",Ub="@firebase/performance-compat",Bb="@firebase/remote-config",$b="@firebase/remote-config-compat",jb="@firebase/storage",qb="@firebase/storage-compat",zb="@firebase/firestore",Hb="@firebase/ai",Wb="@firebase/firestore-compat",Kb="firebase",Gb="12.2.0";/**
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
 */const Bl="[DEFAULT]",Qb={[Ul]:"fire-core",[Tb]:"fire-core-compat",[Ab]:"fire-analytics",[Ib]:"fire-analytics-compat",[Rb]:"fire-app-check",[bb]:"fire-app-check-compat",[Sb]:"fire-auth",[Cb]:"fire-auth-compat",[Pb]:"fire-rtdb",[kb]:"fire-data-connect",[Ob]:"fire-rtdb-compat",[Nb]:"fire-fn",[Db]:"fire-fn-compat",[Vb]:"fire-iid",[xb]:"fire-iid-compat",[Mb]:"fire-fcm",[Lb]:"fire-fcm-compat",[Fb]:"fire-perf",[Ub]:"fire-perf-compat",[Bb]:"fire-rc",[$b]:"fire-rc-compat",[jb]:"fire-gcs",[qb]:"fire-gcs-compat",[zb]:"fire-fst",[Wb]:"fire-fst-compat",[Hb]:"fire-vertex","fire-js":"fire-js",[Kb]:"fire-js-all"};/**
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
 */const Ea=new Map,Jb=new Map,$l=new Map;function Fd(t,e){try{t.container.addComponent(e)}catch(n){qn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Sn(t){const e=t.name;if($l.has(e))return qn.debug(`There were multiple attempts to register component ${e}.`),!1;$l.set(e,t);for(const n of Ea.values())Fd(n,t);for(const n of Jb.values())Fd(n,t);return!0}function co(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Wt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const Yb={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},fr=new Yr("app","Firebase",Yb);/**
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
 */class Xb{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new cn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw fr.create("app-deleted",{appName:this._name})}}/**
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
 */const js=Gb;function S_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Bl,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw fr.create("bad-app-name",{appName:String(s)});if(n||(n=__()),!n)throw fr.create("no-options");const i=Ea.get(s);if(i){if(qr(n,i.options)&&qr(r,i.config))return i;throw fr.create("duplicate-app",{appName:s})}const o=new ib(s);for(const l of $l.values())o.addComponent(l);const c=new Xb(n,r,o);return Ea.set(s,c),c}function C_(t=Bl){const e=Ea.get(t);if(!e&&t===Bl&&__())return S_();if(!e)throw fr.create("no-app",{appName:t});return e}function Jt(t,e,n){let r=Qb[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),qn.warn(o.join(" "));return}Sn(new cn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Zb="firebase-heartbeat-database",eR=1,zi="firebase-heartbeat-store";let ol=null;function P_(){return ol||(ol=R_(Zb,eR,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(zi)}catch(n){console.warn(n)}}}}).catch(t=>{throw fr.create("idb-open",{originalErrorMessage:t.message})})),ol}async function tR(t){try{const n=(await P_()).transaction(zi),r=await n.objectStore(zi).get(k_(t));return await n.done,r}catch(e){if(e instanceof fn)qn.warn(e.message);else{const n=fr.create("idb-get",{originalErrorMessage:e?.message});qn.warn(n.message)}}}async function Ud(t,e){try{const r=(await P_()).transaction(zi,"readwrite");await r.objectStore(zi).put(e,k_(t)),await r.done}catch(n){if(n instanceof fn)qn.warn(n.message);else{const r=fr.create("idb-set",{originalErrorMessage:n?.message});qn.warn(r.message)}}}function k_(t){return`${t.name}!${t.options.appId}`}/**
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
 */const nR=1024,rR=30;class sR{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new oR(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Bd();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats.length>rR){const s=aR(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){qn.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Bd(),{heartbeatsToSend:n,unsentEntries:r}=iR(this._heartbeatsCache.heartbeats),s=ya(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return qn.warn(e),""}}}function Bd(){return new Date().toISOString().substring(0,10)}function iR(t,e=nR){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),$d(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),$d(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class oR{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return T_()?I_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await tR(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Ud(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Ud(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function $d(t){return ya(JSON.stringify({version:2,heartbeats:t})).length}function aR(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function cR(t){Sn(new cn("platform-logger",e=>new wb(e),"PRIVATE")),Sn(new cn("heartbeat",e=>new sR(e),"PRIVATE")),Jt(Ul,Ld,t),Jt(Ul,Ld,"esm2020"),Jt("fire-js","")}cR("");function O_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const lR=O_,N_=new Yr("auth","Firebase",O_());/**
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
 */const wa=new ic("@firebase/auth");function uR(t,...e){wa.logLevel<=we.WARN&&wa.warn(`Auth (${js}): ${t}`,...e)}function ea(t,...e){wa.logLevel<=we.ERROR&&wa.error(`Auth (${js}): ${t}`,...e)}/**
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
 */function ln(t,...e){throw Nu(t,...e)}function wn(t,...e){return Nu(t,...e)}function D_(t,e,n){const r={...lR(),[e]:n};return new Yr("auth","Firebase",r).create(e,{appName:t.name})}function Fn(t){return D_(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Nu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return N_.create(t,...e)}function ae(t,e,...n){if(!t)throw Nu(e,...n)}function Mn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ea(e),new Error(e)}function zn(t,e){t||Mn(e)}/**
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
 */function jl(){return typeof self<"u"&&self.location?.href||""}function hR(){return jd()==="http:"||jd()==="https:"}function jd(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function fR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(hR()||v_()||"connection"in navigator)?navigator.onLine:!0}function dR(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class lo{constructor(e,n){this.shortDelay=e,this.longDelay=n,zn(n>e,"Short delay should be less than long delay!"),this.isMobile=F0()||$0()}get(){return fR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Du(t,e){zn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class V_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Mn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Mn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Mn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const pR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const mR=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],gR=new lo(3e4,6e4);function Tr(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Ir(t,e,n,r,s={}){return x_(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=ao({key:t.config.apiKey,...o}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:l,...i};return B0()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&$s(t.emulatorConfig.host)&&(u.credentials="include"),V_.fetch()(await M_(t,t.config.apiHost,n,c),u)})}async function x_(t,e,n){t._canInitEmulator=!1;const r={...pR,...e};try{const s=new yR(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Uo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,u]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Uo(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Uo(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Uo(t,"user-disabled",o);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw D_(t,f,u);ln(t,f)}}catch(s){if(s instanceof fn)throw s;ln(t,"network-request-failed",{message:String(s)})}}async function uo(t,e,n,r,s={}){const i=await Ir(t,e,n,r,s);return"mfaPendingCredential"in i&&ln(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function M_(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Du(t.config,s):`${t.config.apiScheme}://${s}`;return mR.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function _R(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class yR{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(wn(this.auth,"network-request-failed")),gR.get())})}}function Uo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=wn(t,e,r);return s.customData._tokenResponse=n,s}function qd(t){return t!==void 0&&t.enterprise!==void 0}class ER{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return _R(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function wR(t,e){return Ir(t,"GET","/v2/recaptchaConfig",Tr(t,e))}/**
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
 */async function vR(t,e){return Ir(t,"POST","/v1/accounts:delete",e)}async function va(t,e){return Ir(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Pi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function TR(t,e=!1){const n=Ot(t),r=await n.getIdToken(e),s=Vu(r);ae(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i?.sign_in_provider;return{claims:s,token:r,authTime:Pi(al(s.auth_time)),issuedAtTime:Pi(al(s.iat)),expirationTime:Pi(al(s.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function al(t){return Number(t)*1e3}function Vu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ea("JWT malformed, contained fewer than 3 sections"),null;try{const s=m_(n);return s?JSON.parse(s):(ea("Failed to decode base64 JWT payload"),null)}catch(s){return ea("Caught error parsing JWT payload as JSON",s?.toString()),null}}function zd(t){const e=Vu(t);return ae(e,"internal-error"),ae(typeof e.exp<"u","internal-error"),ae(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Hi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof fn&&IR(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function IR({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class AR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ql{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Pi(this.lastLoginAt),this.creationTime=Pi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ta(t){const e=t.auth,n=await t.getIdToken(),r=await Hi(t,va(e,{idToken:n}));ae(r?.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=s.providerUserInfo?.length?L_(s.providerUserInfo):[],o=RR(t.providerData,i),c=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!o?.length,u=c?l:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new ql(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function bR(t){const e=Ot(t);await Ta(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function RR(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function L_(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function SR(t,e){const n=await x_(t,{},async()=>{const r=ao({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await M_(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:r};return t.emulatorConfig&&$s(t.emulatorConfig.host)&&(l.credentials="include"),V_.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function CR(t,e){return Ir(t,"POST","/v2/accounts:revokeToken",Tr(t,e))}/**
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
 */class As{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ae(e.idToken,"internal-error"),ae(typeof e.idToken<"u","internal-error"),ae(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):zd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ae(e.length!==0,"internal-error");const n=zd(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ae(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await SR(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new As;return r&&(ae(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ae(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ae(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new As,this.toJSON())}_performRefresh(){return Mn("not implemented")}}/**
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
 */function er(t,e){ae(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class rn{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new AR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new ql(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Hi(this,this.stsTokenManager.getToken(this.auth,e));return ae(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return TR(this,e)}reload(){return bR(this)}_assign(e){this!==e&&(ae(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new rn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){ae(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ta(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Wt(this.auth.app))return Promise.reject(Fn(this.auth));const e=await this.getIdToken();return await Hi(this,vR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,c=n.tenantId??void 0,l=n._redirectEventId??void 0,u=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:p,emailVerified:m,isAnonymous:_,providerData:w,stsTokenManager:C}=n;ae(p&&C,e,"internal-error");const S=As.fromJSON(this.name,C);ae(typeof p=="string",e,"internal-error"),er(r,e.name),er(s,e.name),ae(typeof m=="boolean",e,"internal-error"),ae(typeof _=="boolean",e,"internal-error"),er(i,e.name),er(o,e.name),er(c,e.name),er(l,e.name),er(u,e.name),er(f,e.name);const $=new rn({uid:p,auth:e,email:s,emailVerified:m,displayName:r,isAnonymous:_,photoURL:o,phoneNumber:i,tenantId:c,stsTokenManager:S,createdAt:u,lastLoginAt:f});return w&&Array.isArray(w)&&($.providerData=w.map(U=>({...U}))),l&&($._redirectEventId=l),$}static async _fromIdTokenResponse(e,n,r=!1){const s=new As;s.updateFromServerResponse(n);const i=new rn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ta(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ae(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?L_(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!i?.length,c=new As;c.updateFromIdToken(r);const l=new rn({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new ql(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(l,u),l}}/**
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
 */const Hd=new Map;function Ln(t){zn(t instanceof Function,"Expected a class definition");let e=Hd.get(t);return e?(zn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Hd.set(t,e),e)}/**
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
 */class F_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}F_.type="NONE";const Wd=F_;/**
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
 */function ta(t,e,n){return`firebase:${t}:${e}:${n}`}class bs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ta(this.userKey,s.apiKey,i),this.fullPersistenceKey=ta("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await va(this.auth,{idToken:e}).catch(()=>{});return n?rn._fromGetAccountInfoResponse(this.auth,n,e):null}return rn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new bs(Ln(Wd),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Ln(Wd);const o=ta(r,e.config.apiKey,e.name);let c=null;for(const u of n)try{const f=await u._get(o);if(f){let p;if(typeof f=="string"){const m=await va(e,{idToken:f}).catch(()=>{});if(!m)break;p=await rn._fromGetAccountInfoResponse(e,m,f)}else p=rn._fromJSON(e,f);u!==i&&(c=p),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new bs(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new bs(i,e,r))}}/**
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
 */function Kd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(j_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(U_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(z_(e))return"Blackberry";if(H_(e))return"Webos";if(B_(e))return"Safari";if((e.includes("chrome/")||$_(e))&&!e.includes("edge/"))return"Chrome";if(q_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if(r?.length===2)return r[1]}return"Other"}function U_(t=Rt()){return/firefox\//i.test(t)}function B_(t=Rt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function $_(t=Rt()){return/crios\//i.test(t)}function j_(t=Rt()){return/iemobile/i.test(t)}function q_(t=Rt()){return/android/i.test(t)}function z_(t=Rt()){return/blackberry/i.test(t)}function H_(t=Rt()){return/webos/i.test(t)}function xu(t=Rt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function PR(t=Rt()){return xu(t)&&!!window.navigator?.standalone}function kR(){return j0()&&document.documentMode===10}function W_(t=Rt()){return xu(t)||q_(t)||H_(t)||z_(t)||/windows phone/i.test(t)||j_(t)}/**
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
 */function K_(t,e=[]){let n;switch(t){case"Browser":n=Kd(Rt());break;case"Worker":n=`${Kd(Rt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${js}/${r}`}/**
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
 */class OR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */async function NR(t,e={}){return Ir(t,"GET","/v2/passwordPolicy",Tr(t,e))}/**
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
 */const DR=6;class VR{constructor(e){const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??DR,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class xR{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Gd(this),this.idTokenSubscription=new Gd(this),this.beforeStateQueue=new OR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=N_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ln(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await bs.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await va(this,{idToken:e}),r=await rn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Wt(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(o,o))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,o=r?._redirectEventId,c=await this.tryRedirectSignIn(e);(!i||i===o)&&c?.user&&(r=c.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(i){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ae(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ta(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=dR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Wt(this.app))return Promise.reject(Fn(this));const n=e?Ot(e):null;return n&&ae(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ae(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Wt(this.app)?Promise.reject(Fn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Wt(this.app)?Promise.reject(Fn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ln(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await NR(this),n=new VR(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Yr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await CR(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ln(e)||this._popupRedirectResolver;ae(n,this,"argument-error"),this.redirectPersistenceManager=await bs.create(this,[Ln(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(ae(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ae(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=K_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(Wt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&uR(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Xr(t){return Ot(t)}class Gd{constructor(e){this.auth=e,this.observer=null,this.addObserver=Q0(n=>this.observer=n)}get next(){return ae(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let oc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function MR(t){oc=t}function G_(t){return oc.loadJS(t)}function LR(){return oc.recaptchaEnterpriseScript}function FR(){return oc.gapiScript}function UR(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class BR{constructor(){this.enterprise=new $R}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class $R{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const jR="recaptcha-enterprise",Q_="NO_RECAPTCHA";class qR{constructor(e){this.type=jR,this.auth=Xr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{wR(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const u=new ER(l);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(l=>{c(l)})})}function s(i,o,c){const l=window.grecaptcha;qd(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(Q_)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new BR().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&qd(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=LR();l.length!==0&&(l+=c),G_(l).then(()=>{s(c,i,o)}).catch(u=>{o(u)})}}).catch(c=>{o(c)})})}}async function Qd(t,e,n,r=!1,s=!1){const i=new qR(t);let o;if(s)o=Q_;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const c={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,u=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function zl(t,e,n,r,s){if(t._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Qd(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Qd(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
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
 */function zR(t,e){const n=co(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(qr(i,e??{}))return s;ln(s,"already-initialized")}return n.initialize({options:e})}function HR(t,e){const n=e?.persistence||[],r=(Array.isArray(n)?n:[n]).map(Ln);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e?.popupRedirectResolver)}function WR(t,e,n){const r=Xr(t);ae(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=J_(e),{host:o,port:c}=KR(e),l=c===null?"":`:${c}`,u={url:`${i}//${o}${l}/`},f=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ae(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ae(qr(u,r.config.emulator)&&qr(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,$s(o)?(E_(`${i}//${o}${l}`),w_("Auth",!0)):GR()}function J_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function KR(t){const e=J_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Jd(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Jd(o)}}}function Jd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function GR(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Mu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Mn("not implemented")}_getIdTokenResponse(e){return Mn("not implemented")}_linkToIdToken(e,n){return Mn("not implemented")}_getReauthenticationResolver(e){return Mn("not implemented")}}async function QR(t,e){return Ir(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function JR(t,e){return uo(t,"POST","/v1/accounts:signInWithPassword",Tr(t,e))}/**
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
 */async function YR(t,e){return uo(t,"POST","/v1/accounts:signInWithEmailLink",Tr(t,e))}async function XR(t,e){return uo(t,"POST","/v1/accounts:signInWithEmailLink",Tr(t,e))}/**
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
 */class Wi extends Mu{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Wi(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Wi(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return zl(e,n,"signInWithPassword",JR);case"emailLink":return YR(e,{email:this._email,oobCode:this._password});default:ln(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return zl(e,r,"signUpPassword",QR);case"emailLink":return XR(e,{idToken:n,email:this._email,oobCode:this._password});default:ln(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Rs(t,e){return uo(t,"POST","/v1/accounts:signInWithIdp",Tr(t,e))}/**
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
 */const ZR="http://localhost";class zr extends Mu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new zr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ln("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new zr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Rs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Rs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Rs(e,n)}buildRequest(){const e={requestUri:ZR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ao(n)}return e}}/**
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
 */function eS(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function tS(t){const e=pi(mi(t)).link,n=e?pi(mi(e)).deep_link_id:null,r=pi(mi(t)).deep_link_id;return(r?pi(mi(r)).link:null)||r||n||e||t}class Lu{constructor(e){const n=pi(mi(e)),r=n.apiKey??null,s=n.oobCode??null,i=eS(n.mode??null);ae(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=tS(e);try{return new Lu(n)}catch{return null}}}/**
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
 */class qs{constructor(){this.providerId=qs.PROVIDER_ID}static credential(e,n){return Wi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Lu.parseLink(n);return ae(r,"argument-error"),Wi._fromEmailAndCode(e,r.code,r.tenantId)}}qs.PROVIDER_ID="password";qs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";qs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Y_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ho extends Y_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class sr extends ho{constructor(){super("facebook.com")}static credential(e){return zr._fromParams({providerId:sr.PROVIDER_ID,signInMethod:sr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return sr.credentialFromTaggedObject(e)}static credentialFromError(e){return sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return sr.credential(e.oauthAccessToken)}catch{return null}}}sr.FACEBOOK_SIGN_IN_METHOD="facebook.com";sr.PROVIDER_ID="facebook.com";/**
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
 */class ir extends ho{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return zr._fromParams({providerId:ir.PROVIDER_ID,signInMethod:ir.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ir.credentialFromTaggedObject(e)}static credentialFromError(e){return ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ir.credential(n,r)}catch{return null}}}ir.GOOGLE_SIGN_IN_METHOD="google.com";ir.PROVIDER_ID="google.com";/**
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
 */class or extends ho{constructor(){super("github.com")}static credential(e){return zr._fromParams({providerId:or.PROVIDER_ID,signInMethod:or.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return or.credentialFromTaggedObject(e)}static credentialFromError(e){return or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return or.credential(e.oauthAccessToken)}catch{return null}}}or.GITHUB_SIGN_IN_METHOD="github.com";or.PROVIDER_ID="github.com";/**
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
 */class ar extends ho{constructor(){super("twitter.com")}static credential(e,n){return zr._fromParams({providerId:ar.PROVIDER_ID,signInMethod:ar.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ar.credentialFromTaggedObject(e)}static credentialFromError(e){return ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ar.credential(n,r)}catch{return null}}}ar.TWITTER_SIGN_IN_METHOD="twitter.com";ar.PROVIDER_ID="twitter.com";/**
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
 */async function nS(t,e){return uo(t,"POST","/v1/accounts:signUp",Tr(t,e))}/**
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
 */class Hr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await rn._fromIdTokenResponse(e,r,s),o=Yd(r);return new Hr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Yd(r);return new Hr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Yd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Ia extends fn{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ia.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Ia(e,n,r,s)}}function X_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ia._fromErrorAndOperation(t,i,e,r):i})}async function rS(t,e,n=!1){const r=await Hi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Hr._forOperation(t,"link",r)}/**
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
 */async function sS(t,e,n=!1){const{auth:r}=t;if(Wt(r.app))return Promise.reject(Fn(r));const s="reauthenticate";try{const i=await Hi(t,X_(r,s,e,t),n);ae(i.idToken,r,"internal-error");const o=Vu(i.idToken);ae(o,r,"internal-error");const{sub:c}=o;return ae(t.uid===c,r,"user-mismatch"),Hr._forOperation(t,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&ln(r,"user-mismatch"),i}}/**
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
 */async function Z_(t,e,n=!1){if(Wt(t.app))return Promise.reject(Fn(t));const r="signIn",s=await X_(t,r,e),i=await Hr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function iS(t,e){return Z_(Xr(t),e)}/**
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
 */async function ey(t){const e=Xr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function oS(t,e,n){if(Wt(t.app))return Promise.reject(Fn(t));const r=Xr(t),o=await zl(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",nS).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&ey(t),l}),c=await Hr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function aS(t,e,n){return Wt(t.app)?Promise.reject(Fn(t)):iS(Ot(t),qs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&ey(t),r})}function cS(t,e,n,r){return Ot(t).onIdTokenChanged(e,n,r)}function lS(t,e,n){return Ot(t).beforeAuthStateChanged(e,n)}const Aa="__sak";/**
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
 */class ty{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Aa,"1"),this.storage.removeItem(Aa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const uS=1e3,hS=10;class ny extends ty{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=W_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);kR()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,hS):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},uS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ny.type="LOCAL";const fS=ny;/**
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
 */class ry extends ty{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ry.type="SESSION";const sy=ry;/**
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
 */function dS(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ac{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new ac(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async u=>u(n.origin,i)),l=await dS(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ac.receivers=[];/**
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
 */function Fu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class pS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const u=Fu("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(m.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function vn(){return window}function mS(t){vn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function iy(){return typeof vn().WorkerGlobalScope<"u"&&typeof vn().importScripts=="function"}async function gS(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function _S(){return navigator?.serviceWorker?.controller||null}function yS(){return iy()?self:null}/**
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
 */const oy="firebaseLocalStorageDb",ES=1,ba="firebaseLocalStorage",ay="fbase_key";class fo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function cc(t,e){return t.transaction([ba],e?"readwrite":"readonly").objectStore(ba)}function wS(){const t=indexedDB.deleteDatabase(oy);return new fo(t).toPromise()}function Hl(){const t=indexedDB.open(oy,ES);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ba,{keyPath:ay})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ba)?e(r):(r.close(),await wS(),e(await Hl()))})})}async function Xd(t,e,n){const r=cc(t,!0).put({[ay]:e,value:n});return new fo(r).toPromise()}async function vS(t,e){const n=cc(t,!1).get(e),r=await new fo(n).toPromise();return r===void 0?null:r.value}function Zd(t,e){const n=cc(t,!0).delete(e);return new fo(n).toPromise()}const TS=800,IS=3;class cy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Hl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>IS)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return iy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ac._getInstance(yS()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await gS(),!this.activeServiceWorker)return;this.sender=new pS(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||_S()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Hl();return await Xd(e,Aa,"1"),await Zd(e,Aa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Xd(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>vS(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Zd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=cc(s,!1).getAll();return new fo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),TS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}cy.type="LOCAL";const AS=cy;new lo(3e4,6e4);/**
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
 */function bS(t,e){return e?Ln(e):(ae(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Uu extends Mu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Rs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Rs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Rs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function RS(t){return Z_(t.auth,new Uu(t),t.bypassAuthState)}function SS(t){const{auth:e,user:n}=t;return ae(n,e,"internal-error"),sS(n,new Uu(t),t.bypassAuthState)}async function CS(t){const{auth:e,user:n}=t;return ae(n,e,"internal-error"),rS(n,new Uu(t),t.bypassAuthState)}/**
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
 */class ly{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return RS;case"linkViaPopup":case"linkViaRedirect":return CS;case"reauthViaPopup":case"reauthViaRedirect":return SS;default:ln(this.auth,"internal-error")}}resolve(e){zn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){zn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const PS=new lo(2e3,1e4);class gs extends ly{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,gs.currentPopupAction&&gs.currentPopupAction.cancel(),gs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ae(e,this.auth,"internal-error"),e}async onExecution(){zn(this.filter.length===1,"Popup operations only handle one event");const e=Fu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(wn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(wn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,gs.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(wn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,PS.get())};e()}}gs.currentPopupAction=null;/**
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
 */const kS="pendingRedirect",na=new Map;class OS extends ly{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=na.get(this.auth._key());if(!e){try{const r=await NS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}na.set(this.auth._key(),e)}return this.bypassAuthState||na.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function NS(t,e){const n=xS(e),r=VS(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function DS(t,e){na.set(t._key(),e)}function VS(t){return Ln(t._redirectPersistence)}function xS(t){return ta(kS,t.config.apiKey,t.name)}async function MS(t,e,n=!1){if(Wt(t.app))return Promise.reject(Fn(t));const r=Xr(t),s=bS(r,e),o=await new OS(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const LS=600*1e3;class FS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!US(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!uy(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";n.onError(wn(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=LS&&this.cachedEventUids.clear(),this.cachedEventUids.has(ep(e))}saveEventToCache(e){this.cachedEventUids.add(ep(e)),this.lastProcessedEventTime=Date.now()}}function ep(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function uy({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function US(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return uy(t);default:return!1}}/**
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
 */async function BS(t,e={}){return Ir(t,"GET","/v1/projects",e)}/**
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
 */const $S=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,jS=/^https?/;async function qS(t){if(t.config.emulator)return;const{authorizedDomains:e}=await BS(t);for(const n of e)try{if(zS(n))return}catch{}ln(t,"unauthorized-domain")}function zS(t){const e=jl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!jS.test(n))return!1;if($S.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const HS=new lo(3e4,6e4);function tp(){const t=vn().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function WS(t){return new Promise((e,n)=>{function r(){tp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{tp(),n(wn(t,"network-request-failed"))},timeout:HS.get()})}if(vn().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(vn().gapi?.load)r();else{const s=UR("iframefcb");return vn()[s]=()=>{gapi.load?r():n(wn(t,"network-request-failed"))},G_(`${FR()}?onload=${s}`).catch(i=>n(i))}}).catch(e=>{throw ra=null,e})}let ra=null;function KS(t){return ra=ra||WS(t),ra}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const GS=new lo(5e3,15e3),QS="__/auth/iframe",JS="emulator/auth/iframe",YS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},XS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ZS(t){const e=t.config;ae(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Du(e,JS):`https://${t.config.authDomain}/${QS}`,r={apiKey:e.apiKey,appName:t.name,v:js},s=XS.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${ao(r).slice(1)}`}async function eC(t){const e=await KS(t),n=vn().gapi;return ae(n,t,"internal-error"),e.open({where:document.body,url:ZS(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:YS,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=wn(t,"network-request-failed"),c=vn().setTimeout(()=>{i(o)},GS.get());function l(){vn().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const tC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},nC=500,rC=600,sC="_blank",iC="http://localhost";class np{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function oC(t,e,n,r=nC,s=rC){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l={...tC,width:r.toString(),height:s.toString(),top:i,left:o},u=Rt().toLowerCase();n&&(c=$_(u)?sC:n),U_(u)&&(e=e||iC,l.scrollbars="yes");const f=Object.entries(l).reduce((m,[_,w])=>`${m}${_}=${w},`,"");if(PR(u)&&c!=="_self")return aC(e||"",c),new np(null);const p=window.open(e||"",c,f);ae(p,t,"popup-blocked");try{p.focus()}catch{}return new np(p)}function aC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const cC="__/auth/handler",lC="emulator/auth/handler",uC=encodeURIComponent("fac");async function rp(t,e,n,r,s,i){ae(t.config.authDomain,t,"auth-domain-config-required"),ae(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:js,eventId:s};if(e instanceof Y_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",G0(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof ho){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await t._getAppCheckToken(),u=l?`#${uC}=${encodeURIComponent(l)}`:"";return`${hC(t)}?${ao(c).slice(1)}${u}`}function hC({config:t}){return t.emulator?Du(t,lC):`https://${t.authDomain}/${cC}`}/**
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
 */const cl="webStorageSupport";class fC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=sy,this._completeRedirectFn=MS,this._overrideRedirectResult=DS}async _openPopup(e,n,r,s){zn(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const i=await rp(e,n,r,jl(),s);return oC(e,i,Fu())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await rp(e,n,r,jl(),s);return mS(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(zn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await eC(e),r=new FS(e);return n.register("authEvent",s=>(ae(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(cl,{type:cl},s=>{const i=s?.[0]?.[cl];i!==void 0&&n(!!i),ln(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=qS(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return W_()||B_()||xu()}}const dC=fC;var sp="@firebase/auth",ip="1.11.0";/**
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
 */class pC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ae(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function mC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function gC(t){Sn(new cn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;ae(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:K_(t)},u=new xR(r,s,i,l);return HR(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Sn(new cn("auth-internal",e=>{const n=Xr(e.getProvider("auth").getImmediate());return(r=>new pC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Jt(sp,ip,mC(t)),Jt(sp,ip,"esm2020")}/**
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
 */const _C=300,yC=y_("authIdTokenMaxAge")||_C;let op=null;const EC=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>yC)return;const s=n?.token;op!==s&&(op=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function hy(t=C_()){const e=co(t,"auth");if(e.isInitialized())return e.getImmediate();const n=zR(t,{popupRedirectResolver:dC,persistence:[AS,fS,sy]}),r=y_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=EC(i.toString());lS(n,o,()=>o(n.currentUser)),cS(n,c=>o(c))}}const s=g_("auth");return s&&WR(n,`http://${s}`),n}function wC(){return document.getElementsByTagName("head")?.[0]??document}MR({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=wn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",wC().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});gC("Browser");const vC={__name:"FirebaseSigninView",setup(t){const e=ur(""),n=ur(""),r=$g(),s=hy(),i=()=>{aS(s,e.value,n.value).then(o=>{console.log("Firebase Login Successful!"),console.log("Current User:",s.currentUser),r.push("/")}).catch(o=>{console.error("Login error:",o.code,o.message)})};return(o,c)=>($e(),Ge(st,null,[c[2]||(c[2]=W("h1",null,"Sign in",-1)),W("p",null,[Br(W("input",{type:"text",placeholder:"Email","onUpdate:modelValue":c[0]||(c[0]=l=>e.value=l)},null,512),[[$r,e.value]])]),W("p",null,[Br(W("input",{type:"password",placeholder:"Password","onUpdate:modelValue":c[1]||(c[1]=l=>n.value=l)},null,512),[[$r,n.value]])]),W("p",null,[W("button",{onClick:i},"Sign in via Firebase")])],64))}},TC={__name:"FirebaseRegisterView",setup(t){const e=ur(""),n=ur(""),r=$g(),s=hy(),i=()=>{oS(s,e.value,n.value).then(o=>{console.log("Firebase Register Successful!"),r.push("/FireLogin")}).catch(o=>{console.log(o.code)})};return(o,c)=>($e(),Ge(st,null,[c[2]||(c[2]=W("h1",null,"Create an Account",-1)),W("p",null,[Br(W("input",{type:"text",placeholder:"Email","onUpdate:modelValue":c[0]||(c[0]=l=>e.value=l)},null,512),[[$r,e.value]])]),W("p",null,[Br(W("input",{type:"password",placeholder:"Password","onUpdate:modelValue":c[1]||(c[1]=l=>n.value=l)},null,512),[[$r,n.value]])]),W("p",null,[W("button",{onClick:i},"Save to Firebase!")])],64))}};var IC="firebase",AC="12.2.1";/**
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
 */Jt(IC,AC,"app");const fy="@firebase/installations",Bu="0.6.19";/**
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
 */const dy=1e4,py=`w:${Bu}`,my="FIS_v2",bC="https://firebaseinstallations.googleapis.com/v1",RC=3600*1e3,SC="installations",CC="Installations";/**
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
 */const PC={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Wr=new Yr(SC,CC,PC);function gy(t){return t instanceof fn&&t.code.includes("request-failed")}/**
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
 */function _y({projectId:t}){return`${bC}/projects/${t}/installations`}function yy(t){return{token:t.token,requestStatus:2,expiresIn:OC(t.expiresIn),creationTime:Date.now()}}async function Ey(t,e){const r=(await e.json()).error;return Wr.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function wy({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function kC(t,{refreshToken:e}){const n=wy(t);return n.append("Authorization",NC(e)),n}async function vy(t){const e=await t();return e.status>=500&&e.status<600?t():e}function OC(t){return Number(t.replace("s","000"))}function NC(t){return`${my} ${t}`}/**
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
 */async function DC({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=_y(t),s=wy(t),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={fid:n,authVersion:my,appId:t.appId,sdkVersion:py},c={method:"POST",headers:s,body:JSON.stringify(o)},l=await vy(()=>fetch(r,c));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:yy(u.authToken)}}else throw await Ey("Create Installation",l)}/**
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
 */function Ty(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function VC(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const xC=/^[cdef][\w-]{21}$/,Wl="";function MC(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=LC(t);return xC.test(n)?n:Wl}catch{return Wl}}function LC(t){return VC(t).substr(0,22)}/**
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
 */function lc(t){return`${t.appName}!${t.appId}`}/**
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
 */const Iy=new Map;function Ay(t,e){const n=lc(t);by(n,e),FC(n,e)}function by(t,e){const n=Iy.get(t);if(n)for(const r of n)r(e)}function FC(t,e){const n=UC();n&&n.postMessage({key:t,fid:e}),BC()}let Vr=null;function UC(){return!Vr&&"BroadcastChannel"in self&&(Vr=new BroadcastChannel("[Firebase] FID Change"),Vr.onmessage=t=>{by(t.data.key,t.data.fid)}),Vr}function BC(){Iy.size===0&&Vr&&(Vr.close(),Vr=null)}/**
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
 */const $C="firebase-installations-database",jC=1,Kr="firebase-installations-store";let ll=null;function $u(){return ll||(ll=R_($C,jC,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Kr)}}})),ll}async function Ra(t,e){const n=lc(t),s=(await $u()).transaction(Kr,"readwrite"),i=s.objectStore(Kr),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&Ay(t,e.fid),e}async function Ry(t){const e=lc(t),r=(await $u()).transaction(Kr,"readwrite");await r.objectStore(Kr).delete(e),await r.done}async function uc(t,e){const n=lc(t),s=(await $u()).transaction(Kr,"readwrite"),i=s.objectStore(Kr),o=await i.get(n),c=e(o);return c===void 0?await i.delete(n):await i.put(c,n),await s.done,c&&(!o||o.fid!==c.fid)&&Ay(t,c.fid),c}/**
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
 */async function ju(t){let e;const n=await uc(t.appConfig,r=>{const s=qC(r),i=zC(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===Wl?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function qC(t){const e=t||{fid:MC(),registrationStatus:0};return Sy(e)}function zC(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Wr.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=HC(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:WC(t)}:{installationEntry:e}}async function HC(t,e){try{const n=await DC(t,e);return Ra(t.appConfig,n)}catch(n){throw gy(n)&&n.customData.serverCode===409?await Ry(t.appConfig):await Ra(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function WC(t){let e=await ap(t.appConfig);for(;e.registrationStatus===1;)await Ty(100),e=await ap(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await ju(t);return r||n}return e}function ap(t){return uc(t,e=>{if(!e)throw Wr.create("installation-not-found");return Sy(e)})}function Sy(t){return KC(t)?{fid:t.fid,registrationStatus:0}:t}function KC(t){return t.registrationStatus===1&&t.registrationTime+dy<Date.now()}/**
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
 */async function GC({appConfig:t,heartbeatServiceProvider:e},n){const r=QC(t,n),s=kC(t,n),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={installation:{sdkVersion:py,appId:t.appId}},c={method:"POST",headers:s,body:JSON.stringify(o)},l=await vy(()=>fetch(r,c));if(l.ok){const u=await l.json();return yy(u)}else throw await Ey("Generate Auth Token",l)}function QC(t,{fid:e}){return`${_y(t)}/${e}/authTokens:generate`}/**
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
 */async function qu(t,e=!1){let n;const r=await uc(t.appConfig,i=>{if(!Cy(i))throw Wr.create("not-registered");const o=i.authToken;if(!e&&XC(o))return i;if(o.requestStatus===1)return n=JC(t,e),i;{if(!navigator.onLine)throw Wr.create("app-offline");const c=eP(i);return n=YC(t,c),c}});return n?await n:r.authToken}async function JC(t,e){let n=await cp(t.appConfig);for(;n.authToken.requestStatus===1;)await Ty(100),n=await cp(t.appConfig);const r=n.authToken;return r.requestStatus===0?qu(t,e):r}function cp(t){return uc(t,e=>{if(!Cy(e))throw Wr.create("not-registered");const n=e.authToken;return tP(n)?{...e,authToken:{requestStatus:0}}:e})}async function YC(t,e){try{const n=await GC(t,e),r={...e,authToken:n};return await Ra(t.appConfig,r),n}catch(n){if(gy(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Ry(t.appConfig);else{const r={...e,authToken:{requestStatus:0}};await Ra(t.appConfig,r)}throw n}}function Cy(t){return t!==void 0&&t.registrationStatus===2}function XC(t){return t.requestStatus===2&&!ZC(t)}function ZC(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+RC}function eP(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function tP(t){return t.requestStatus===1&&t.requestTime+dy<Date.now()}/**
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
 */async function nP(t){const e=t,{installationEntry:n,registrationPromise:r}=await ju(e);return r?r.catch(console.error):qu(e).catch(console.error),n.fid}/**
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
 */async function rP(t,e=!1){const n=t;return await sP(n),(await qu(n,e)).token}async function sP(t){const{registrationPromise:e}=await ju(t);e&&await e}/**
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
 */function iP(t){if(!t||!t.options)throw ul("App Configuration");if(!t.name)throw ul("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw ul(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function ul(t){return Wr.create("missing-app-config-values",{valueName:t})}/**
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
 */const Py="installations",oP="installations-internal",aP=t=>{const e=t.getProvider("app").getImmediate(),n=iP(e),r=co(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},cP=t=>{const e=t.getProvider("app").getImmediate(),n=co(e,Py).getImmediate();return{getId:()=>nP(n),getToken:s=>rP(n,s)}};function lP(){Sn(new cn(Py,aP,"PUBLIC")),Sn(new cn(oP,cP,"PRIVATE"))}lP();Jt(fy,Bu);Jt(fy,Bu,"esm2020");/**
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
 */const lp="analytics",uP="firebase_id",hP="origin",fP=60*1e3,dP="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",zu="https://www.googletagmanager.com/gtag/js";/**
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
 */const Lt=new ic("@firebase/analytics");/**
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
 */const pP={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Yt=new Yr("analytics","Analytics",pP);/**
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
 */function mP(t){if(!t.startsWith(zu)){const e=Yt.create("invalid-gtag-resource",{gtagURL:t});return Lt.warn(e.message),""}return t}function ky(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function gP(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function _P(t,e){const n=gP("firebase-js-sdk-policy",{createScriptURL:mP}),r=document.createElement("script"),s=`${zu}?l=${t}&id=${e}`;r.src=n?n?.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function yP(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function EP(t,e,n,r,s,i){const o=r[s];try{if(o)await e[o];else{const l=(await ky(n)).find(u=>u.measurementId===s);l&&await e[l.appId]}}catch(c){Lt.error(c)}t("config",s,i)}async function wP(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const c=await ky(n);for(const l of o){const u=c.find(p=>p.measurementId===l),f=u&&e[u.appId];if(f)i.push(f);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){Lt.error(i)}}function vP(t,e,n,r){async function s(i,...o){try{if(i==="event"){const[c,l]=o;await wP(t,e,n,c,l)}else if(i==="config"){const[c,l]=o;await EP(t,e,n,r,c,l)}else if(i==="consent"){const[c,l]=o;t("consent",c,l)}else if(i==="get"){const[c,l,u]=o;t("get",c,l,u)}else if(i==="set"){const[c]=o;t("set",c)}else t(i,...o)}catch(c){Lt.error(c)}}return s}function TP(t,e,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=vP(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function IP(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(zu)&&n.src.includes(t))return n;return null}/**
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
 */const AP=30,bP=1e3;class RP{constructor(e={},n=bP){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Oy=new RP;function SP(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function CP(t){const{appId:e,apiKey:n}=t,r={method:"GET",headers:SP(n)},s=dP.replace("{app-id}",e),i=await fetch(s,r);if(i.status!==200&&i.status!==304){let o="";try{const c=await i.json();c.error?.message&&(o=c.error.message)}catch{}throw Yt.create("config-fetch-failed",{httpStatus:i.status,responseMessage:o})}return i.json()}async function PP(t,e=Oy,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw Yt.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw Yt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new NP;return setTimeout(async()=>{c.abort()},fP),Ny({appId:r,apiKey:s,measurementId:i},o,c,e)}async function Ny(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=Oy){const{appId:i,measurementId:o}=t;try{await kP(r,e)}catch(c){if(o)return Lt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${c?.message}]`),{appId:i,measurementId:o};throw c}try{const c=await CP(t);return s.deleteThrottleMetadata(i),c}catch(c){const l=c;if(!OP(l)){if(s.deleteThrottleMetadata(i),o)return Lt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${l?.message}]`),{appId:i,measurementId:o};throw c}const u=Number(l?.customData?.httpStatus)===503?Dd(n,s.intervalMillis,AP):Dd(n,s.intervalMillis),f={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return s.setThrottleMetadata(i,f),Lt.debug(`Calling attemptFetch again in ${u} millis`),Ny(t,f,r,s)}}function kP(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(Yt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function OP(t){if(!(t instanceof fn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class NP{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function DP(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,o={...r,send_to:i};t("event",n,o)}}/**
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
 */async function VP(){if(T_())try{await I_()}catch(t){return Lt.warn(Yt.create("indexeddb-unavailable",{errorInfo:t?.toString()}).message),!1}else return Lt.warn(Yt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function xP(t,e,n,r,s,i,o){const c=PP(t);c.then(m=>{n[m.measurementId]=m.appId,t.options.measurementId&&m.measurementId!==t.options.measurementId&&Lt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>Lt.error(m)),e.push(c);const l=VP().then(m=>{if(m)return r.getId()}),[u,f]=await Promise.all([c,l]);IP(i)||_P(i,u.measurementId),s("js",new Date);const p=o?.config??{};return p[hP]="firebase",p.update=!0,f!=null&&(p[uP]=f),s("config",u.measurementId,p),u.measurementId}/**
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
 */class MP{constructor(e){this.app=e}_delete(){return delete ki[this.app.options.appId],Promise.resolve()}}let ki={},up=[];const hp={};let hl="dataLayer",LP="gtag",fp,Dy,dp=!1;function FP(){const t=[];if(v_()&&t.push("This is a browser extension environment."),z0()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=Yt.create("invalid-analytics-context",{errorInfo:e});Lt.warn(n.message)}}function UP(t,e,n){FP();const r=t.options.appId;if(!r)throw Yt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Lt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Yt.create("no-api-key");if(ki[r]!=null)throw Yt.create("already-exists",{id:r});if(!dp){yP(hl);const{wrappedGtag:i,gtagCore:o}=TP(ki,up,hp,hl,LP);Dy=i,fp=o,dp=!0}return ki[r]=xP(t,up,hp,e,fp,hl,n),new MP(t)}function BP(t,e,n,r){t=Ot(t),DP(Dy,ki[t.app.options.appId],e,n,r).catch(s=>Lt.error(s))}const pp="@firebase/analytics",mp="0.10.18";function $P(){Sn(new cn(lp,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return UP(r,s,n)},"PUBLIC")),Sn(new cn("analytics-internal",t,"PRIVATE")),Jt(pp,mp),Jt(pp,mp,"esm2020");function t(e){try{const n=e.getProvider(lp).getImmediate();return{logEvent:(r,s,i)=>BP(n,r,s,i)}}catch(n){throw Yt.create("interop-component-reg-failed",{reason:n})}}}$P();var gp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var dr,Vy;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,y){function T(){}T.prototype=y.prototype,A.D=y.prototype,A.prototype=new T,A.prototype.constructor=A,A.C=function(b,R,P){for(var v=Array(arguments.length-2),qe=2;qe<arguments.length;qe++)v[qe-2]=arguments[qe];return y.prototype[R].apply(b,v)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(A,y,T){T||(T=0);var b=Array(16);if(typeof y=="string")for(var R=0;16>R;++R)b[R]=y.charCodeAt(T++)|y.charCodeAt(T++)<<8|y.charCodeAt(T++)<<16|y.charCodeAt(T++)<<24;else for(R=0;16>R;++R)b[R]=y[T++]|y[T++]<<8|y[T++]<<16|y[T++]<<24;y=A.g[0],T=A.g[1],R=A.g[2];var P=A.g[3],v=y+(P^T&(R^P))+b[0]+3614090360&4294967295;y=T+(v<<7&4294967295|v>>>25),v=P+(R^y&(T^R))+b[1]+3905402710&4294967295,P=y+(v<<12&4294967295|v>>>20),v=R+(T^P&(y^T))+b[2]+606105819&4294967295,R=P+(v<<17&4294967295|v>>>15),v=T+(y^R&(P^y))+b[3]+3250441966&4294967295,T=R+(v<<22&4294967295|v>>>10),v=y+(P^T&(R^P))+b[4]+4118548399&4294967295,y=T+(v<<7&4294967295|v>>>25),v=P+(R^y&(T^R))+b[5]+1200080426&4294967295,P=y+(v<<12&4294967295|v>>>20),v=R+(T^P&(y^T))+b[6]+2821735955&4294967295,R=P+(v<<17&4294967295|v>>>15),v=T+(y^R&(P^y))+b[7]+4249261313&4294967295,T=R+(v<<22&4294967295|v>>>10),v=y+(P^T&(R^P))+b[8]+1770035416&4294967295,y=T+(v<<7&4294967295|v>>>25),v=P+(R^y&(T^R))+b[9]+2336552879&4294967295,P=y+(v<<12&4294967295|v>>>20),v=R+(T^P&(y^T))+b[10]+4294925233&4294967295,R=P+(v<<17&4294967295|v>>>15),v=T+(y^R&(P^y))+b[11]+2304563134&4294967295,T=R+(v<<22&4294967295|v>>>10),v=y+(P^T&(R^P))+b[12]+1804603682&4294967295,y=T+(v<<7&4294967295|v>>>25),v=P+(R^y&(T^R))+b[13]+4254626195&4294967295,P=y+(v<<12&4294967295|v>>>20),v=R+(T^P&(y^T))+b[14]+2792965006&4294967295,R=P+(v<<17&4294967295|v>>>15),v=T+(y^R&(P^y))+b[15]+1236535329&4294967295,T=R+(v<<22&4294967295|v>>>10),v=y+(R^P&(T^R))+b[1]+4129170786&4294967295,y=T+(v<<5&4294967295|v>>>27),v=P+(T^R&(y^T))+b[6]+3225465664&4294967295,P=y+(v<<9&4294967295|v>>>23),v=R+(y^T&(P^y))+b[11]+643717713&4294967295,R=P+(v<<14&4294967295|v>>>18),v=T+(P^y&(R^P))+b[0]+3921069994&4294967295,T=R+(v<<20&4294967295|v>>>12),v=y+(R^P&(T^R))+b[5]+3593408605&4294967295,y=T+(v<<5&4294967295|v>>>27),v=P+(T^R&(y^T))+b[10]+38016083&4294967295,P=y+(v<<9&4294967295|v>>>23),v=R+(y^T&(P^y))+b[15]+3634488961&4294967295,R=P+(v<<14&4294967295|v>>>18),v=T+(P^y&(R^P))+b[4]+3889429448&4294967295,T=R+(v<<20&4294967295|v>>>12),v=y+(R^P&(T^R))+b[9]+568446438&4294967295,y=T+(v<<5&4294967295|v>>>27),v=P+(T^R&(y^T))+b[14]+3275163606&4294967295,P=y+(v<<9&4294967295|v>>>23),v=R+(y^T&(P^y))+b[3]+4107603335&4294967295,R=P+(v<<14&4294967295|v>>>18),v=T+(P^y&(R^P))+b[8]+1163531501&4294967295,T=R+(v<<20&4294967295|v>>>12),v=y+(R^P&(T^R))+b[13]+2850285829&4294967295,y=T+(v<<5&4294967295|v>>>27),v=P+(T^R&(y^T))+b[2]+4243563512&4294967295,P=y+(v<<9&4294967295|v>>>23),v=R+(y^T&(P^y))+b[7]+1735328473&4294967295,R=P+(v<<14&4294967295|v>>>18),v=T+(P^y&(R^P))+b[12]+2368359562&4294967295,T=R+(v<<20&4294967295|v>>>12),v=y+(T^R^P)+b[5]+4294588738&4294967295,y=T+(v<<4&4294967295|v>>>28),v=P+(y^T^R)+b[8]+2272392833&4294967295,P=y+(v<<11&4294967295|v>>>21),v=R+(P^y^T)+b[11]+1839030562&4294967295,R=P+(v<<16&4294967295|v>>>16),v=T+(R^P^y)+b[14]+4259657740&4294967295,T=R+(v<<23&4294967295|v>>>9),v=y+(T^R^P)+b[1]+2763975236&4294967295,y=T+(v<<4&4294967295|v>>>28),v=P+(y^T^R)+b[4]+1272893353&4294967295,P=y+(v<<11&4294967295|v>>>21),v=R+(P^y^T)+b[7]+4139469664&4294967295,R=P+(v<<16&4294967295|v>>>16),v=T+(R^P^y)+b[10]+3200236656&4294967295,T=R+(v<<23&4294967295|v>>>9),v=y+(T^R^P)+b[13]+681279174&4294967295,y=T+(v<<4&4294967295|v>>>28),v=P+(y^T^R)+b[0]+3936430074&4294967295,P=y+(v<<11&4294967295|v>>>21),v=R+(P^y^T)+b[3]+3572445317&4294967295,R=P+(v<<16&4294967295|v>>>16),v=T+(R^P^y)+b[6]+76029189&4294967295,T=R+(v<<23&4294967295|v>>>9),v=y+(T^R^P)+b[9]+3654602809&4294967295,y=T+(v<<4&4294967295|v>>>28),v=P+(y^T^R)+b[12]+3873151461&4294967295,P=y+(v<<11&4294967295|v>>>21),v=R+(P^y^T)+b[15]+530742520&4294967295,R=P+(v<<16&4294967295|v>>>16),v=T+(R^P^y)+b[2]+3299628645&4294967295,T=R+(v<<23&4294967295|v>>>9),v=y+(R^(T|~P))+b[0]+4096336452&4294967295,y=T+(v<<6&4294967295|v>>>26),v=P+(T^(y|~R))+b[7]+1126891415&4294967295,P=y+(v<<10&4294967295|v>>>22),v=R+(y^(P|~T))+b[14]+2878612391&4294967295,R=P+(v<<15&4294967295|v>>>17),v=T+(P^(R|~y))+b[5]+4237533241&4294967295,T=R+(v<<21&4294967295|v>>>11),v=y+(R^(T|~P))+b[12]+1700485571&4294967295,y=T+(v<<6&4294967295|v>>>26),v=P+(T^(y|~R))+b[3]+2399980690&4294967295,P=y+(v<<10&4294967295|v>>>22),v=R+(y^(P|~T))+b[10]+4293915773&4294967295,R=P+(v<<15&4294967295|v>>>17),v=T+(P^(R|~y))+b[1]+2240044497&4294967295,T=R+(v<<21&4294967295|v>>>11),v=y+(R^(T|~P))+b[8]+1873313359&4294967295,y=T+(v<<6&4294967295|v>>>26),v=P+(T^(y|~R))+b[15]+4264355552&4294967295,P=y+(v<<10&4294967295|v>>>22),v=R+(y^(P|~T))+b[6]+2734768916&4294967295,R=P+(v<<15&4294967295|v>>>17),v=T+(P^(R|~y))+b[13]+1309151649&4294967295,T=R+(v<<21&4294967295|v>>>11),v=y+(R^(T|~P))+b[4]+4149444226&4294967295,y=T+(v<<6&4294967295|v>>>26),v=P+(T^(y|~R))+b[11]+3174756917&4294967295,P=y+(v<<10&4294967295|v>>>22),v=R+(y^(P|~T))+b[2]+718787259&4294967295,R=P+(v<<15&4294967295|v>>>17),v=T+(P^(R|~y))+b[9]+3951481745&4294967295,A.g[0]=A.g[0]+y&4294967295,A.g[1]=A.g[1]+(R+(v<<21&4294967295|v>>>11))&4294967295,A.g[2]=A.g[2]+R&4294967295,A.g[3]=A.g[3]+P&4294967295}r.prototype.u=function(A,y){y===void 0&&(y=A.length);for(var T=y-this.blockSize,b=this.B,R=this.h,P=0;P<y;){if(R==0)for(;P<=T;)s(this,A,P),P+=this.blockSize;if(typeof A=="string"){for(;P<y;)if(b[R++]=A.charCodeAt(P++),R==this.blockSize){s(this,b),R=0;break}}else for(;P<y;)if(b[R++]=A[P++],R==this.blockSize){s(this,b),R=0;break}}this.h=R,this.o+=y},r.prototype.v=function(){var A=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);A[0]=128;for(var y=1;y<A.length-8;++y)A[y]=0;var T=8*this.o;for(y=A.length-8;y<A.length;++y)A[y]=T&255,T/=256;for(this.u(A),A=Array(16),y=T=0;4>y;++y)for(var b=0;32>b;b+=8)A[T++]=this.g[y]>>>b&255;return A};function i(A,y){var T=c;return Object.prototype.hasOwnProperty.call(T,A)?T[A]:T[A]=y(A)}function o(A,y){this.h=y;for(var T=[],b=!0,R=A.length-1;0<=R;R--){var P=A[R]|0;b&&P==y||(T[R]=P,b=!1)}this.g=T}var c={};function l(A){return-128<=A&&128>A?i(A,function(y){return new o([y|0],0>y?-1:0)}):new o([A|0],0>A?-1:0)}function u(A){if(isNaN(A)||!isFinite(A))return p;if(0>A)return S(u(-A));for(var y=[],T=1,b=0;A>=T;b++)y[b]=A/T|0,T*=4294967296;return new o(y,0)}function f(A,y){if(A.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(A.charAt(0)=="-")return S(f(A.substring(1),y));if(0<=A.indexOf("-"))throw Error('number format error: interior "-" character');for(var T=u(Math.pow(y,8)),b=p,R=0;R<A.length;R+=8){var P=Math.min(8,A.length-R),v=parseInt(A.substring(R,R+P),y);8>P?(P=u(Math.pow(y,P)),b=b.j(P).add(u(v))):(b=b.j(T),b=b.add(u(v)))}return b}var p=l(0),m=l(1),_=l(16777216);t=o.prototype,t.m=function(){if(C(this))return-S(this).m();for(var A=0,y=1,T=0;T<this.g.length;T++){var b=this.i(T);A+=(0<=b?b:4294967296+b)*y,y*=4294967296}return A},t.toString=function(A){if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(w(this))return"0";if(C(this))return"-"+S(this).toString(A);for(var y=u(Math.pow(A,6)),T=this,b="";;){var R=z(T,y).g;T=$(T,R.j(y));var P=((0<T.g.length?T.g[0]:T.h)>>>0).toString(A);if(T=R,w(T))return P+b;for(;6>P.length;)P="0"+P;b=P+b}},t.i=function(A){return 0>A?0:A<this.g.length?this.g[A]:this.h};function w(A){if(A.h!=0)return!1;for(var y=0;y<A.g.length;y++)if(A.g[y]!=0)return!1;return!0}function C(A){return A.h==-1}t.l=function(A){return A=$(this,A),C(A)?-1:w(A)?0:1};function S(A){for(var y=A.g.length,T=[],b=0;b<y;b++)T[b]=~A.g[b];return new o(T,~A.h).add(m)}t.abs=function(){return C(this)?S(this):this},t.add=function(A){for(var y=Math.max(this.g.length,A.g.length),T=[],b=0,R=0;R<=y;R++){var P=b+(this.i(R)&65535)+(A.i(R)&65535),v=(P>>>16)+(this.i(R)>>>16)+(A.i(R)>>>16);b=v>>>16,P&=65535,v&=65535,T[R]=v<<16|P}return new o(T,T[T.length-1]&-2147483648?-1:0)};function $(A,y){return A.add(S(y))}t.j=function(A){if(w(this)||w(A))return p;if(C(this))return C(A)?S(this).j(S(A)):S(S(this).j(A));if(C(A))return S(this.j(S(A)));if(0>this.l(_)&&0>A.l(_))return u(this.m()*A.m());for(var y=this.g.length+A.g.length,T=[],b=0;b<2*y;b++)T[b]=0;for(b=0;b<this.g.length;b++)for(var R=0;R<A.g.length;R++){var P=this.i(b)>>>16,v=this.i(b)&65535,qe=A.i(R)>>>16,St=A.i(R)&65535;T[2*b+2*R]+=v*St,U(T,2*b+2*R),T[2*b+2*R+1]+=P*St,U(T,2*b+2*R+1),T[2*b+2*R+1]+=v*qe,U(T,2*b+2*R+1),T[2*b+2*R+2]+=P*qe,U(T,2*b+2*R+2)}for(b=0;b<y;b++)T[b]=T[2*b+1]<<16|T[2*b];for(b=y;b<2*y;b++)T[b]=0;return new o(T,0)};function U(A,y){for(;(A[y]&65535)!=A[y];)A[y+1]+=A[y]>>>16,A[y]&=65535,y++}function j(A,y){this.g=A,this.h=y}function z(A,y){if(w(y))throw Error("division by zero");if(w(A))return new j(p,p);if(C(A))return y=z(S(A),y),new j(S(y.g),S(y.h));if(C(y))return y=z(A,S(y)),new j(S(y.g),y.h);if(30<A.g.length){if(C(A)||C(y))throw Error("slowDivide_ only works with positive integers.");for(var T=m,b=y;0>=b.l(A);)T=oe(T),b=oe(b);var R=me(T,1),P=me(b,1);for(b=me(b,2),T=me(T,2);!w(b);){var v=P.add(b);0>=v.l(A)&&(R=R.add(T),P=v),b=me(b,1),T=me(T,1)}return y=$(A,R.j(y)),new j(R,y)}for(R=p;0<=A.l(y);){for(T=Math.max(1,Math.floor(A.m()/y.m())),b=Math.ceil(Math.log(T)/Math.LN2),b=48>=b?1:Math.pow(2,b-48),P=u(T),v=P.j(y);C(v)||0<v.l(A);)T-=b,P=u(T),v=P.j(y);w(P)&&(P=m),R=R.add(P),A=$(A,v)}return new j(R,A)}t.A=function(A){return z(this,A).h},t.and=function(A){for(var y=Math.max(this.g.length,A.g.length),T=[],b=0;b<y;b++)T[b]=this.i(b)&A.i(b);return new o(T,this.h&A.h)},t.or=function(A){for(var y=Math.max(this.g.length,A.g.length),T=[],b=0;b<y;b++)T[b]=this.i(b)|A.i(b);return new o(T,this.h|A.h)},t.xor=function(A){for(var y=Math.max(this.g.length,A.g.length),T=[],b=0;b<y;b++)T[b]=this.i(b)^A.i(b);return new o(T,this.h^A.h)};function oe(A){for(var y=A.g.length+1,T=[],b=0;b<y;b++)T[b]=A.i(b)<<1|A.i(b-1)>>>31;return new o(T,A.h)}function me(A,y){var T=y>>5;y%=32;for(var b=A.g.length-T,R=[],P=0;P<b;P++)R[P]=0<y?A.i(P+T)>>>y|A.i(P+T+1)<<32-y:A.i(P+T);return new o(R,A.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Vy=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=f,dr=o}).apply(typeof gp<"u"?gp:typeof self<"u"?self:typeof window<"u"?window:{});var Bo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var xy,gi,My,sa,Kl,Ly,Fy,Uy;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,d){return a==Array.prototype||a==Object.prototype||(a[h]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Bo=="object"&&Bo];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var d=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var O=a[g];if(!(O in d))break e;d=d[O]}a=a[a.length-1],g=d[a],h=h(g),h!=g&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var d=0,g=!1,O={next:function(){if(!g&&d<a.length){var D=d++;return{value:h(D,a[D]),done:!1}}return g=!0,{done:!0,value:void 0}}};return O[Symbol.iterator]=function(){return O},O}s("Array.prototype.values",function(a){return a||function(){return i(this,function(h,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function l(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function u(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function f(a,h,d){return a.call.apply(a.bind,arguments)}function p(a,h,d){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var O=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(O,g),a.apply(h,O)}}return function(){return a.apply(h,arguments)}}function m(a,h,d){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,m.apply(null,arguments)}function _(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function w(a,h){function d(){}d.prototype=h.prototype,a.aa=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(g,O,D){for(var G=Array(arguments.length-2),xe=2;xe<arguments.length;xe++)G[xe-2]=arguments[xe];return h.prototype[O].apply(g,G)}}function C(a){const h=a.length;if(0<h){const d=Array(h);for(let g=0;g<h;g++)d[g]=a[g];return d}return[]}function S(a,h){for(let d=1;d<arguments.length;d++){const g=arguments[d];if(l(g)){const O=a.length||0,D=g.length||0;a.length=O+D;for(let G=0;G<D;G++)a[O+G]=g[G]}else a.push(g)}}class ${constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function U(a){return/^[\s\xa0]*$/.test(a)}function j(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function z(a){return z[" "](a),a}z[" "]=function(){};var oe=j().indexOf("Gecko")!=-1&&!(j().toLowerCase().indexOf("webkit")!=-1&&j().indexOf("Edge")==-1)&&!(j().indexOf("Trident")!=-1||j().indexOf("MSIE")!=-1)&&j().indexOf("Edge")==-1;function me(a,h,d){for(const g in a)h.call(d,a[g],g,a)}function A(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function y(a){const h={};for(const d in a)h[d]=a[d];return h}const T="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function b(a,h){let d,g;for(let O=1;O<arguments.length;O++){g=arguments[O];for(d in g)a[d]=g[d];for(let D=0;D<T.length;D++)d=T[D],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function R(a){var h=1;a=a.split(":");const d=[];for(;0<h&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function P(a){c.setTimeout(()=>{throw a},0)}function v(){var a=pt;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class qe{constructor(){this.h=this.g=null}add(h,d){const g=St.get();g.set(h,d),this.h?this.h.next=g:this.g=g,this.h=g}}var St=new $(()=>new Ce,a=>a.reset());class Ce{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Ee,ue=!1,pt=new qe,Ft=()=>{const a=c.Promise.resolve(void 0);Ee=()=>{a.then(Qe)}};var Qe=()=>{for(var a;a=v();){try{a.h.call(a.g)}catch(d){P(d)}var h=St;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}ue=!1};function Pe(){this.s=this.s,this.C=this.C}Pe.prototype.s=!1,Pe.prototype.ma=function(){this.s||(this.s=!0,this.N())},Pe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ve(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}Ve.prototype.h=function(){this.defaultPrevented=!0};var Ut=(function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};c.addEventListener("test",d,h),c.removeEventListener("test",d,h)}catch{}return a})();function Bt(a,h){if(Ve.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(oe){e:{try{z(h.nodeName);var O=!0;break e}catch{}O=!1}O||(h=null)}}else d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement);this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Nt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Bt.aa.h.call(this)}}w(Bt,Ve);var Nt={2:"touch",3:"pen",4:"mouse"};Bt.prototype.h=function(){Bt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var V="closure_listenable_"+(1e6*Math.random()|0),Z=0;function J(a,h,d,g,O){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!g,this.ha=O,this.key=++Z,this.da=this.fa=!1}function te(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Re(a){this.src=a,this.g={},this.h=0}Re.prototype.add=function(a,h,d,g,O){var D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);var G=I(a,h,g,O);return-1<G?(h=a[G],d||(h.fa=!1)):(h=new J(h,this.src,D,!!g,O),h.fa=d,a.push(h)),h};function E(a,h){var d=h.type;if(d in a.g){var g=a.g[d],O=Array.prototype.indexOf.call(g,h,void 0),D;(D=0<=O)&&Array.prototype.splice.call(g,O,1),D&&(te(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function I(a,h,d,g){for(var O=0;O<a.length;++O){var D=a[O];if(!D.da&&D.listener==h&&D.capture==!!d&&D.ha==g)return O}return-1}var k="closure_lm_"+(1e6*Math.random()|0),x={};function B(a,h,d,g,O){if(Array.isArray(h)){for(var D=0;D<h.length;D++)B(a,h[D],d,g,O);return null}return d=le(d),a&&a[V]?a.K(h,d,u(g)?!!g.capture:!1,O):M(a,h,d,!1,g,O)}function M(a,h,d,g,O,D){if(!h)throw Error("Invalid event type");var G=u(O)?!!O.capture:!!O,xe=Y(a);if(xe||(a[k]=xe=new Re(a)),d=xe.add(h,d,g,G,D),d.proxy)return d;if(g=Q(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)Ut||(O=G),O===void 0&&(O=!1),a.addEventListener(h.toString(),g,O);else if(a.attachEvent)a.attachEvent(q(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Q(){function a(d){return h.call(a.src,a.listener,d)}const h=se;return a}function K(a,h,d,g,O){if(Array.isArray(h))for(var D=0;D<h.length;D++)K(a,h[D],d,g,O);else g=u(g)?!!g.capture:!!g,d=le(d),a&&a[V]?(a=a.i,h=String(h).toString(),h in a.g&&(D=a.g[h],d=I(D,d,g,O),-1<d&&(te(D[d]),Array.prototype.splice.call(D,d,1),D.length==0&&(delete a.g[h],a.h--)))):a&&(a=Y(a))&&(h=a.g[h.toString()],a=-1,h&&(a=I(h,d,g,O)),(d=-1<a?h[a]:null)&&H(d))}function H(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[V])E(h.i,a);else{var d=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(d,g,a.capture):h.detachEvent?h.detachEvent(q(d),g):h.addListener&&h.removeListener&&h.removeListener(g),(d=Y(h))?(E(d,a),d.h==0&&(d.src=null,h[k]=null)):te(a)}}}function q(a){return a in x?x[a]:x[a]="on"+a}function se(a,h){if(a.da)a=!0;else{h=new Bt(h,this);var d=a.listener,g=a.ha||a.src;a.fa&&H(a),a=d.call(g,h)}return a}function Y(a){return a=a[k],a instanceof Re?a:null}var ne="__closure_events_fn_"+(1e9*Math.random()>>>0);function le(a){return typeof a=="function"?a:(a[ne]||(a[ne]=function(h){return a.handleEvent(h)}),a[ne])}function ie(){Pe.call(this),this.i=new Re(this),this.M=this,this.F=null}w(ie,Pe),ie.prototype[V]=!0,ie.prototype.removeEventListener=function(a,h,d,g){K(this,a,h,d,g)};function ge(a,h){var d,g=a.F;if(g)for(d=[];g;g=g.F)d.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new Ve(h,a);else if(h instanceof Ve)h.target=h.target||a;else{var O=h;h=new Ve(g,a),b(h,O)}if(O=!0,d)for(var D=d.length-1;0<=D;D--){var G=h.g=d[D];O=Ie(G,g,!0,h)&&O}if(G=h.g=a,O=Ie(G,g,!0,h)&&O,O=Ie(G,g,!1,h)&&O,d)for(D=0;D<d.length;D++)G=h.g=d[D],O=Ie(G,g,!1,h)&&O}ie.prototype.N=function(){if(ie.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var d=a.g[h],g=0;g<d.length;g++)te(d[g]);delete a.g[h],a.h--}}this.F=null},ie.prototype.K=function(a,h,d,g){return this.i.add(String(a),h,!1,d,g)},ie.prototype.L=function(a,h,d,g){return this.i.add(String(a),h,!0,d,g)};function Ie(a,h,d,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var O=!0,D=0;D<h.length;++D){var G=h[D];if(G&&!G.da&&G.capture==d){var xe=G.listener,ct=G.ha||G.src;G.fa&&E(a.i,G),O=xe.call(ct,g)!==!1&&O}}return O&&!g.defaultPrevented}function it(a,h,d){if(typeof a=="function")d&&(a=m(a,d));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:c.setTimeout(a,h||0)}function ot(a){a.g=it(()=>{a.g=null,a.i&&(a.i=!1,ot(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class zt extends Pe{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:ot(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function mt(a){Pe.call(this),this.h=a,this.g={}}w(mt,Pe);var Qn=[];function Qs(a){me(a.g,function(h,d){this.g.hasOwnProperty(d)&&H(h)},a),a.g={}}mt.prototype.N=function(){mt.aa.N.call(this),Qs(this)},mt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var at=c.JSON.stringify,Ht=c.JSON.parse,Eo=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function rs(){}rs.prototype.h=null;function Ch(a){return a.h||(a.h=a.i())}function Ph(){}var Js={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ac(){Ve.call(this,"d")}w(Ac,Ve);function bc(){Ve.call(this,"c")}w(bc,Ve);var br={},kh=null;function wo(){return kh=kh||new ie}br.La="serverreachability";function Oh(a){Ve.call(this,br.La,a)}w(Oh,Ve);function Ys(a){const h=wo();ge(h,new Oh(h))}br.STAT_EVENT="statevent";function Nh(a,h){Ve.call(this,br.STAT_EVENT,a),this.stat=h}w(Nh,Ve);function Ct(a){const h=wo();ge(h,new Nh(h,a))}br.Ma="timingevent";function Dh(a,h){Ve.call(this,br.Ma,a),this.size=h}w(Dh,Ve);function Xs(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},h)}function Zs(){this.g=!0}Zs.prototype.xa=function(){this.g=!1};function uw(a,h,d,g,O,D){a.info(function(){if(a.g)if(D)for(var G="",xe=D.split("&"),ct=0;ct<xe.length;ct++){var Se=xe[ct].split("=");if(1<Se.length){var gt=Se[0];Se=Se[1];var _t=gt.split("_");G=2<=_t.length&&_t[1]=="type"?G+(gt+"="+Se+"&"):G+(gt+"=redacted&")}}else G=null;else G=D;return"XMLHTTP REQ ("+g+") [attempt "+O+"]: "+h+`
`+d+`
`+G})}function hw(a,h,d,g,O,D,G){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+O+"]: "+h+`
`+d+`
`+D+" "+G})}function ss(a,h,d,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+dw(a,d)+(g?" "+g:"")})}function fw(a,h){a.info(function(){return"TIMEOUT: "+h})}Zs.prototype.info=function(){};function dw(a,h){if(!a.g)return h;if(!h)return null;try{var d=JSON.parse(h);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var g=d[a];if(!(2>g.length)){var O=g[1];if(Array.isArray(O)&&!(1>O.length)){var D=O[0];if(D!="noop"&&D!="stop"&&D!="close")for(var G=1;G<O.length;G++)O[G]=""}}}}return at(d)}catch{return h}}var vo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Vh={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Rc;function To(){}w(To,rs),To.prototype.g=function(){return new XMLHttpRequest},To.prototype.i=function(){return{}},Rc=new To;function Jn(a,h,d,g){this.j=a,this.i=h,this.l=d,this.R=g||1,this.U=new mt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new xh}function xh(){this.i=null,this.g="",this.h=!1}var Mh={},Sc={};function Cc(a,h,d){a.L=1,a.v=Ro(Pn(h)),a.m=d,a.P=!0,Lh(a,null)}function Lh(a,h){a.F=Date.now(),Io(a),a.A=Pn(a.v);var d=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),Yh(d.i,"t",g),a.C=0,d=a.j.J,a.h=new xh,a.g=gf(a.j,d?h:null,!a.m),0<a.O&&(a.M=new zt(m(a.Y,a,a.g),a.O)),h=a.U,d=a.g,g=a.ca;var O="readystatechange";Array.isArray(O)||(O&&(Qn[0]=O.toString()),O=Qn);for(var D=0;D<O.length;D++){var G=B(d,O[D],g||h.handleEvent,!1,h.h||h);if(!G)break;h.g[G.key]=G}h=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),Ys(),uw(a.i,a.u,a.A,a.l,a.R,a.m)}Jn.prototype.ca=function(a){a=a.target;const h=this.M;h&&kn(a)==3?h.j():this.Y(a)},Jn.prototype.Y=function(a){try{if(a==this.g)e:{const _t=kn(this.g);var h=this.g.Ba();const as=this.g.Z();if(!(3>_t)&&(_t!=3||this.g&&(this.h.h||this.g.oa()||sf(this.g)))){this.J||_t!=4||h==7||(h==8||0>=as?Ys(3):Ys(2)),Pc(this);var d=this.g.Z();this.X=d;t:if(Fh(this)){var g=sf(this.g);a="";var O=g.length,D=kn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Rr(this),ei(this);var G="";break t}this.h.i=new c.TextDecoder}for(h=0;h<O;h++)this.h.h=!0,a+=this.h.i.decode(g[h],{stream:!(D&&h==O-1)});g.length=0,this.h.g+=a,this.C=0,G=this.h.g}else G=this.g.oa();if(this.o=d==200,hw(this.i,this.u,this.A,this.l,this.R,_t,d),this.o){if(this.T&&!this.K){t:{if(this.g){var xe,ct=this.g;if((xe=ct.g?ct.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!U(xe)){var Se=xe;break t}}Se=null}if(d=Se)ss(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,kc(this,d);else{this.o=!1,this.s=3,Ct(12),Rr(this),ei(this);break e}}if(this.P){d=!0;let en;for(;!this.J&&this.C<G.length;)if(en=pw(this,G),en==Sc){_t==4&&(this.s=4,Ct(14),d=!1),ss(this.i,this.l,null,"[Incomplete Response]");break}else if(en==Mh){this.s=4,Ct(15),ss(this.i,this.l,G,"[Invalid Chunk]"),d=!1;break}else ss(this.i,this.l,en,null),kc(this,en);if(Fh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),_t!=4||G.length!=0||this.h.h||(this.s=1,Ct(16),d=!1),this.o=this.o&&d,!d)ss(this.i,this.l,G,"[Invalid Chunked Response]"),Rr(this),ei(this);else if(0<G.length&&!this.W){this.W=!0;var gt=this.j;gt.g==this&&gt.ba&&!gt.M&&(gt.j.info("Great, no buffering proxy detected. Bytes received: "+G.length),Mc(gt),gt.M=!0,Ct(11))}}else ss(this.i,this.l,G,null),kc(this,G);_t==4&&Rr(this),this.o&&!this.J&&(_t==4?ff(this.j,this):(this.o=!1,Io(this)))}else Ow(this.g),d==400&&0<G.indexOf("Unknown SID")?(this.s=3,Ct(12)):(this.s=0,Ct(13)),Rr(this),ei(this)}}}catch{}finally{}};function Fh(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function pw(a,h){var d=a.C,g=h.indexOf(`
`,d);return g==-1?Sc:(d=Number(h.substring(d,g)),isNaN(d)?Mh:(g+=1,g+d>h.length?Sc:(h=h.slice(g,g+d),a.C=g+d,h)))}Jn.prototype.cancel=function(){this.J=!0,Rr(this)};function Io(a){a.S=Date.now()+a.I,Uh(a,a.I)}function Uh(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Xs(m(a.ba,a),h)}function Pc(a){a.B&&(c.clearTimeout(a.B),a.B=null)}Jn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(fw(this.i,this.A),this.L!=2&&(Ys(),Ct(17)),Rr(this),this.s=2,ei(this)):Uh(this,this.S-a)};function ei(a){a.j.G==0||a.J||ff(a.j,a)}function Rr(a){Pc(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,Qs(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function kc(a,h){try{var d=a.j;if(d.G!=0&&(d.g==a||Oc(d.h,a))){if(!a.K&&Oc(d.h,a)&&d.G==3){try{var g=d.Da.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var O=g;if(O[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)No(d),ko(d);else break e;xc(d),Ct(18)}}else d.za=O[1],0<d.za-d.T&&37500>O[2]&&d.F&&d.v==0&&!d.C&&(d.C=Xs(m(d.Za,d),6e3));if(1>=jh(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Cr(d,11)}else if((a.K||d.g==a)&&No(d),!U(h))for(O=d.Da.g.parse(h),h=0;h<O.length;h++){let Se=O[h];if(d.T=Se[0],Se=Se[1],d.G==2)if(Se[0]=="c"){d.K=Se[1],d.ia=Se[2];const gt=Se[3];gt!=null&&(d.la=gt,d.j.info("VER="+d.la));const _t=Se[4];_t!=null&&(d.Aa=_t,d.j.info("SVER="+d.Aa));const as=Se[5];as!=null&&typeof as=="number"&&0<as&&(g=1.5*as,d.L=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const en=a.g;if(en){const Vo=en.g?en.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Vo){var D=g.h;D.g||Vo.indexOf("spdy")==-1&&Vo.indexOf("quic")==-1&&Vo.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(Nc(D,D.h),D.h=null))}if(g.D){const Lc=en.g?en.g.getResponseHeader("X-HTTP-Session-Id"):null;Lc&&(g.ya=Lc,Ue(g.I,g.D,Lc))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),g=d;var G=a;if(g.qa=mf(g,g.J?g.ia:null,g.W),G.K){qh(g.h,G);var xe=G,ct=g.L;ct&&(xe.I=ct),xe.B&&(Pc(xe),Io(xe)),g.g=G}else uf(g);0<d.i.length&&Oo(d)}else Se[0]!="stop"&&Se[0]!="close"||Cr(d,7);else d.G==3&&(Se[0]=="stop"||Se[0]=="close"?Se[0]=="stop"?Cr(d,7):Vc(d):Se[0]!="noop"&&d.l&&d.l.ta(Se),d.v=0)}}Ys(4)}catch{}}var mw=class{constructor(a,h){this.g=a,this.map=h}};function Bh(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function $h(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function jh(a){return a.h?1:a.g?a.g.size:0}function Oc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Nc(a,h){a.g?a.g.add(h):a.h=h}function qh(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Bh.prototype.cancel=function(){if(this.i=zh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function zh(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.D);return h}return C(a.i)}function gw(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var h=[],d=a.length,g=0;g<d;g++)h.push(a[g]);return h}h=[],d=0;for(g in a)h[d++]=a[g];return h}function _w(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var h=[];a=a.length;for(var d=0;d<a;d++)h.push(d);return h}h=[],d=0;for(const g in a)h[d++]=g;return h}}}function Hh(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var d=_w(a),g=gw(a),O=g.length,D=0;D<O;D++)h.call(void 0,g[D],d&&d[D],a)}var Wh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function yw(a,h){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var g=a[d].indexOf("="),O=null;if(0<=g){var D=a[d].substring(0,g);O=a[d].substring(g+1)}else D=a[d];h(D,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function Sr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Sr){this.h=a.h,Ao(this,a.j),this.o=a.o,this.g=a.g,bo(this,a.s),this.l=a.l;var h=a.i,d=new ri;d.i=h.i,h.g&&(d.g=new Map(h.g),d.h=h.h),Kh(this,d),this.m=a.m}else a&&(h=String(a).match(Wh))?(this.h=!1,Ao(this,h[1]||"",!0),this.o=ti(h[2]||""),this.g=ti(h[3]||"",!0),bo(this,h[4]),this.l=ti(h[5]||"",!0),Kh(this,h[6]||"",!0),this.m=ti(h[7]||"")):(this.h=!1,this.i=new ri(null,this.h))}Sr.prototype.toString=function(){var a=[],h=this.j;h&&a.push(ni(h,Gh,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push(ni(h,Gh,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(ni(d,d.charAt(0)=="/"?vw:ww,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",ni(d,Iw)),a.join("")};function Pn(a){return new Sr(a)}function Ao(a,h,d){a.j=d?ti(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function bo(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function Kh(a,h,d){h instanceof ri?(a.i=h,Aw(a.i,a.h)):(d||(h=ni(h,Tw)),a.i=new ri(h,a.h))}function Ue(a,h,d){a.i.set(h,d)}function Ro(a){return Ue(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function ti(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ni(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,Ew),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Ew(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Gh=/[#\/\?@]/g,ww=/[#\?:]/g,vw=/[#\?]/g,Tw=/[#\?@]/g,Iw=/#/g;function ri(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Yn(a){a.g||(a.g=new Map,a.h=0,a.i&&yw(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}t=ri.prototype,t.add=function(a,h){Yn(this),this.i=null,a=is(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function Qh(a,h){Yn(a),h=is(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Jh(a,h){return Yn(a),h=is(a,h),a.g.has(h)}t.forEach=function(a,h){Yn(this),this.g.forEach(function(d,g){d.forEach(function(O){a.call(h,O,g,this)},this)},this)},t.na=function(){Yn(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),d=[];for(let g=0;g<h.length;g++){const O=a[g];for(let D=0;D<O.length;D++)d.push(h[g])}return d},t.V=function(a){Yn(this);let h=[];if(typeof a=="string")Jh(this,a)&&(h=h.concat(this.g.get(is(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)h=h.concat(a[d])}return h},t.set=function(a,h){return Yn(this),this.i=null,a=is(this,a),Jh(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function Yh(a,h,d){Qh(a,h),0<d.length&&(a.i=null,a.g.set(is(a,h),C(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var d=0;d<h.length;d++){var g=h[d];const D=encodeURIComponent(String(g)),G=this.V(g);for(g=0;g<G.length;g++){var O=D;G[g]!==""&&(O+="="+encodeURIComponent(String(G[g]))),a.push(O)}}return this.i=a.join("&")};function is(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function Aw(a,h){h&&!a.j&&(Yn(a),a.i=null,a.g.forEach(function(d,g){var O=g.toLowerCase();g!=O&&(Qh(this,g),Yh(this,O,d))},a)),a.j=h}function bw(a,h){const d=new Zs;if(c.Image){const g=new Image;g.onload=_(Xn,d,"TestLoadImage: loaded",!0,h,g),g.onerror=_(Xn,d,"TestLoadImage: error",!1,h,g),g.onabort=_(Xn,d,"TestLoadImage: abort",!1,h,g),g.ontimeout=_(Xn,d,"TestLoadImage: timeout",!1,h,g),c.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function Rw(a,h){const d=new Zs,g=new AbortController,O=setTimeout(()=>{g.abort(),Xn(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(D=>{clearTimeout(O),D.ok?Xn(d,"TestPingServer: ok",!0,h):Xn(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(O),Xn(d,"TestPingServer: error",!1,h)})}function Xn(a,h,d,g,O){try{O&&(O.onload=null,O.onerror=null,O.onabort=null,O.ontimeout=null),g(d)}catch{}}function Sw(){this.g=new Eo}function Cw(a,h,d){const g=d||"";try{Hh(a,function(O,D){let G=O;u(O)&&(G=at(O)),h.push(g+D+"="+encodeURIComponent(G))})}catch(O){throw h.push(g+"type="+encodeURIComponent("_badmap")),O}}function So(a){this.l=a.Ub||null,this.j=a.eb||!1}w(So,rs),So.prototype.g=function(){return new Co(this.l,this.j)},So.prototype.i=(function(a){return function(){return a}})({});function Co(a,h){ie.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}w(Co,ie),t=Co.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,ii(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||c).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,si(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ii(this)),this.g&&(this.readyState=3,ii(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Xh(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Xh(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?si(this):ii(this),this.readyState==3&&Xh(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,si(this))},t.Qa=function(a){this.g&&(this.response=a,si(this))},t.ga=function(){this.g&&si(this)};function si(a){a.readyState=4,a.l=null,a.j=null,a.v=null,ii(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function ii(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Co.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Zh(a){let h="";return me(a,function(d,g){h+=g,h+=":",h+=d,h+=`\r
`}),h}function Dc(a,h,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=Zh(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):Ue(a,h,d))}function We(a){ie.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}w(We,ie);var Pw=/^https?$/i,kw=["POST","PUT"];t=We.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Rc.g(),this.v=this.o?Ch(this.o):Ch(Rc),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(D){ef(this,D);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var O in g)d.set(O,g[O]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const D of g.keys())d.set(D,g.get(D));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(D=>D.toLowerCase()=="content-type"),O=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(kw,h,void 0))||g||O||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,G]of d)this.g.setRequestHeader(D,G);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{rf(this),this.u=!0,this.g.send(a),this.u=!1}catch(D){ef(this,D)}};function ef(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,tf(a),Po(a)}function tf(a){a.A||(a.A=!0,ge(a,"complete"),ge(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ge(this,"complete"),ge(this,"abort"),Po(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Po(this,!0)),We.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?nf(this):this.bb())},t.bb=function(){nf(this)};function nf(a){if(a.h&&typeof o<"u"&&(!a.v[1]||kn(a)!=4||a.Z()!=2)){if(a.u&&kn(a)==4)it(a.Ea,0,a);else if(ge(a,"readystatechange"),kn(a)==4){a.h=!1;try{const G=a.Z();e:switch(G){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var g;if(g=G===0){var O=String(a.D).match(Wh)[1]||null;!O&&c.self&&c.self.location&&(O=c.self.location.protocol.slice(0,-1)),g=!Pw.test(O?O.toLowerCase():"")}d=g}if(d)ge(a,"complete"),ge(a,"success");else{a.m=6;try{var D=2<kn(a)?a.g.statusText:""}catch{D=""}a.l=D+" ["+a.Z()+"]",tf(a)}}finally{Po(a)}}}}function Po(a,h){if(a.g){rf(a);const d=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||ge(a,"ready");try{d.onreadystatechange=g}catch{}}}function rf(a){a.I&&(c.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function kn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<kn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),Ht(h)}};function sf(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Ow(a){const h={};a=(a.g&&2<=kn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(U(a[g]))continue;var d=R(a[g]);const O=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const D=h[O]||[];h[O]=D,D.push(d)}A(h,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function oi(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function of(a){this.Aa=0,this.i=[],this.j=new Zs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=oi("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=oi("baseRetryDelayMs",5e3,a),this.cb=oi("retryDelaySeedMs",1e4,a),this.Wa=oi("forwardChannelMaxRetries",2,a),this.wa=oi("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Bh(a&&a.concurrentRequestLimit),this.Da=new Sw,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=of.prototype,t.la=8,t.G=1,t.connect=function(a,h,d,g){Ct(0),this.W=a,this.H=h||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.I=mf(this,null,this.W),Oo(this)};function Vc(a){if(af(a),a.G==3){var h=a.U++,d=Pn(a.I);if(Ue(d,"SID",a.K),Ue(d,"RID",h),Ue(d,"TYPE","terminate"),ai(a,d),h=new Jn(a,a.j,h),h.L=2,h.v=Ro(Pn(d)),d=!1,c.navigator&&c.navigator.sendBeacon)try{d=c.navigator.sendBeacon(h.v.toString(),"")}catch{}!d&&c.Image&&(new Image().src=h.v,d=!0),d||(h.g=gf(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Io(h)}pf(a)}function ko(a){a.g&&(Mc(a),a.g.cancel(),a.g=null)}function af(a){ko(a),a.u&&(c.clearTimeout(a.u),a.u=null),No(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function Oo(a){if(!$h(a.h)&&!a.s){a.s=!0;var h=a.Ga;Ee||Ft(),ue||(Ee(),ue=!0),pt.add(h,a),a.B=0}}function Nw(a,h){return jh(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Xs(m(a.Ga,a,h),df(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const O=new Jn(this,this.j,a);let D=this.o;if(this.S&&(D?(D=y(D),b(D,this.S)):D=this.S),this.m!==null||this.O||(O.H=D,D=null),this.P)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,4096<h){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=lf(this,O,h),d=Pn(this.I),Ue(d,"RID",a),Ue(d,"CVER",22),this.D&&Ue(d,"X-HTTP-Session-Id",this.D),ai(this,d),D&&(this.O?h="headers="+encodeURIComponent(String(Zh(D)))+"&"+h:this.m&&Dc(d,this.m,D)),Nc(this.h,O),this.Ua&&Ue(d,"TYPE","init"),this.P?(Ue(d,"$req",h),Ue(d,"SID","null"),O.T=!0,Cc(O,d,null)):Cc(O,d,h),this.G=2}}else this.G==3&&(a?cf(this,a):this.i.length==0||$h(this.h)||cf(this))};function cf(a,h){var d;h?d=h.l:d=a.U++;const g=Pn(a.I);Ue(g,"SID",a.K),Ue(g,"RID",d),Ue(g,"AID",a.T),ai(a,g),a.m&&a.o&&Dc(g,a.m,a.o),d=new Jn(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),h&&(a.i=h.D.concat(a.i)),h=lf(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Nc(a.h,d),Cc(d,g,h)}function ai(a,h){a.H&&me(a.H,function(d,g){Ue(h,g,d)}),a.l&&Hh({},function(d,g){Ue(h,g,d)})}function lf(a,h,d){d=Math.min(a.i.length,d);var g=a.l?m(a.l.Na,a.l,a):null;e:{var O=a.i;let D=-1;for(;;){const G=["count="+d];D==-1?0<d?(D=O[0].g,G.push("ofs="+D)):D=0:G.push("ofs="+D);let xe=!0;for(let ct=0;ct<d;ct++){let Se=O[ct].g;const gt=O[ct].map;if(Se-=D,0>Se)D=Math.max(0,O[ct].g-100),xe=!1;else try{Cw(gt,G,"req"+Se+"_")}catch{g&&g(gt)}}if(xe){g=G.join("&");break e}}}return a=a.i.splice(0,d),h.D=a,g}function uf(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;Ee||Ft(),ue||(Ee(),ue=!0),pt.add(h,a),a.v=0}}function xc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Xs(m(a.Fa,a),df(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,hf(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Xs(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ct(10),ko(this),hf(this))};function Mc(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function hf(a){a.g=new Jn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=Pn(a.qa);Ue(h,"RID","rpc"),Ue(h,"SID",a.K),Ue(h,"AID",a.T),Ue(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&Ue(h,"TO",a.ja),Ue(h,"TYPE","xmlhttp"),ai(a,h),a.m&&a.o&&Dc(h,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=Ro(Pn(h)),d.m=null,d.P=!0,Lh(d,a)}t.Za=function(){this.C!=null&&(this.C=null,ko(this),xc(this),Ct(19))};function No(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function ff(a,h){var d=null;if(a.g==h){No(a),Mc(a),a.g=null;var g=2}else if(Oc(a.h,h))d=h.D,qh(a.h,h),g=1;else return;if(a.G!=0){if(h.o)if(g==1){d=h.m?h.m.length:0,h=Date.now()-h.F;var O=a.B;g=wo(),ge(g,new Dh(g,d)),Oo(a)}else uf(a);else if(O=h.s,O==3||O==0&&0<h.X||!(g==1&&Nw(a,h)||g==2&&xc(a)))switch(d&&0<d.length&&(h=a.h,h.i=h.i.concat(d)),O){case 1:Cr(a,5);break;case 4:Cr(a,10);break;case 3:Cr(a,6);break;default:Cr(a,2)}}}function df(a,h){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*h}function Cr(a,h){if(a.j.info("Error code "+h),h==2){var d=m(a.fb,a),g=a.Xa;const O=!g;g=new Sr(g||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Ao(g,"https"),Ro(g),O?bw(g.toString(),d):Rw(g.toString(),d)}else Ct(2);a.G=0,a.l&&a.l.sa(h),pf(a),af(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Ct(2)):(this.j.info("Failed to ping google.com"),Ct(1))};function pf(a){if(a.G=0,a.ka=[],a.l){const h=zh(a.h);(h.length!=0||a.i.length!=0)&&(S(a.ka,h),S(a.ka,a.i),a.h.i.length=0,C(a.i),a.i.length=0),a.l.ra()}}function mf(a,h,d){var g=d instanceof Sr?Pn(d):new Sr(d);if(g.g!="")h&&(g.g=h+"."+g.g),bo(g,g.s);else{var O=c.location;g=O.protocol,h=h?h+"."+O.hostname:O.hostname,O=+O.port;var D=new Sr(null);g&&Ao(D,g),h&&(D.g=h),O&&bo(D,O),d&&(D.l=d),g=D}return d=a.D,h=a.ya,d&&h&&Ue(g,d,h),Ue(g,"VER",a.la),ai(a,g),g}function gf(a,h,d){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new We(new So({eb:d})):new We(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function _f(){}t=_f.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Do(){}Do.prototype.g=function(a,h){return new $t(a,h)};function $t(a,h){ie.call(this),this.g=new of(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!U(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!U(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new os(this)}w($t,ie),$t.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},$t.prototype.close=function(){Vc(this.g)},$t.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=at(a),a=d);h.i.push(new mw(h.Ya++,a)),h.G==3&&Oo(h)},$t.prototype.N=function(){this.g.l=null,delete this.j,Vc(this.g),delete this.g,$t.aa.N.call(this)};function yf(a){Ac.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}w(yf,Ac);function Ef(){bc.call(this),this.status=1}w(Ef,bc);function os(a){this.g=a}w(os,_f),os.prototype.ua=function(){ge(this.g,"a")},os.prototype.ta=function(a){ge(this.g,new yf(a))},os.prototype.sa=function(a){ge(this.g,new Ef)},os.prototype.ra=function(){ge(this.g,"b")},Do.prototype.createWebChannel=Do.prototype.g,$t.prototype.send=$t.prototype.o,$t.prototype.open=$t.prototype.m,$t.prototype.close=$t.prototype.close,Uy=function(){return new Do},Fy=function(){return wo()},Ly=br,Kl={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},vo.NO_ERROR=0,vo.TIMEOUT=8,vo.HTTP_ERROR=6,sa=vo,Vh.COMPLETE="complete",My=Vh,Ph.EventType=Js,Js.OPEN="a",Js.CLOSE="b",Js.ERROR="c",Js.MESSAGE="d",ie.prototype.listen=ie.prototype.K,gi=Ph,We.prototype.listenOnce=We.prototype.L,We.prototype.getLastError=We.prototype.Ka,We.prototype.getLastErrorCode=We.prototype.Ba,We.prototype.getStatus=We.prototype.Z,We.prototype.getResponseJson=We.prototype.Oa,We.prototype.getResponseText=We.prototype.oa,We.prototype.send=We.prototype.ea,We.prototype.setWithCredentials=We.prototype.Ha,xy=We}).apply(typeof Bo<"u"?Bo:typeof self<"u"?self:typeof window<"u"?window:{});const _p="@firebase/firestore",yp="4.9.1";/**
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
 */class Et{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Et.UNAUTHENTICATED=new Et(null),Et.GOOGLE_CREDENTIALS=new Et("google-credentials-uid"),Et.FIRST_PARTY=new Et("first-party-uid"),Et.MOCK_USER=new Et("mock-user");/**
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
 */let zs="12.2.0";/**
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
 */const Gr=new ic("@firebase/firestore");function fs(){return Gr.logLevel}function ee(t,...e){if(Gr.logLevel<=we.DEBUG){const n=e.map(Hu);Gr.debug(`Firestore (${zs}): ${t}`,...n)}}function Hn(t,...e){if(Gr.logLevel<=we.ERROR){const n=e.map(Hu);Gr.error(`Firestore (${zs}): ${t}`,...n)}}function Ds(t,...e){if(Gr.logLevel<=we.WARN){const n=e.map(Hu);Gr.warn(`Firestore (${zs}): ${t}`,...n)}}function Hu(t){if(typeof t=="string")return t;try{/**
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
*/return(function(n){return JSON.stringify(n)})(t)}catch{return t}}/**
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
 */function ce(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,By(t,r,n)}function By(t,e,n){let r=`FIRESTORE (${zs}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Hn(r),new Error(r)}function De(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||By(e,s,r)}function de(t,e){return t}/**
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
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class X extends fn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Fr{constructor(){this.promise=new Promise(((e,n)=>{this.resolve=e,this.reject=n}))}}/**
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
 */class $y{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class jP{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(Et.UNAUTHENTICATED)))}shutdown(){}}class qP{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class zP{constructor(e){this.t=e,this.currentUser=Et.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){De(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new Fr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Fr,e.enqueueRetryable((()=>s(this.currentUser)))};const o=()=>{const l=i;e.enqueueRetryable((async()=>{await l.promise,await s(this.currentUser)}))},c=l=>{ee("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((l=>c(l))),setTimeout((()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(ee("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Fr)}}),0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((r=>this.i!==e?(ee("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(De(typeof r.accessToken=="string",31837,{l:r}),new $y(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return De(e===null||typeof e=="string",2055,{h:e}),new Et(e)}}class HP{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=Et.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class WP{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new HP(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n(Et.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Ep{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class KP{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Wt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){De(this.o===void 0,3512);const r=i=>{i.error!=null&&ee("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,ee("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{ee("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):ee("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Ep(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(De(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Ep(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function GP(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Wu{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=GP(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function ve(t,e){return t<e?-1:t>e?1:0}function Gl(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return fl(s)===fl(i)?ve(s,i):fl(s)?1:-1}return ve(t.length,e.length)}const QP=55296,JP=57343;function fl(t){const e=t.charCodeAt(0);return e>=QP&&e<=JP}function Vs(t,e,n){return t.length===e.length&&t.every(((r,s)=>n(r,e[s])))}/**
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
 */const wp="__name__";class gn{constructor(e,n,r){n===void 0?n=0:n>e.length&&ce(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&ce(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return gn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof gn?e.forEach((r=>{n.push(r)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=gn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return ve(e.length,n.length)}static compareSegments(e,n){const r=gn.isNumericId(e),s=gn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?gn.extractNumericId(e).compare(gn.extractNumericId(n)):Gl(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return dr.fromString(e.substring(4,e.length-2))}}class Fe extends gn{construct(e,n,r){return new Fe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new X(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter((s=>s.length>0)))}return new Fe(n)}static emptyPath(){return new Fe([])}}const YP=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ht extends gn{construct(e,n,r){return new ht(e,n,r)}static isValidIdentifier(e){return YP.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ht.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===wp}static keyField(){return new ht([wp])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new X(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new X(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new X(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new X(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ht(n)}static emptyPath(){return new ht([])}}/**
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
 */class re{constructor(e){this.path=e}static fromPath(e){return new re(Fe.fromString(e))}static fromName(e){return new re(Fe.fromString(e).popFirst(5))}static empty(){return new re(Fe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Fe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Fe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new re(new Fe(e.slice()))}}/**
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
 */function jy(t,e,n){if(!n)throw new X(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function XP(t,e,n,r){if(e===!0&&r===!0)throw new X(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function vp(t){if(!re.isDocumentKey(t))throw new X(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Tp(t){if(re.isDocumentKey(t))throw new X(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function qy(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function hc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ce(12329,{type:typeof t})}function Oi(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new X(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=hc(t);throw new X(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function Ze(t,e){const n={typeString:t};return e&&(n.value=e),n}function po(t,e){if(!qy(t))throw new X(L.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new X(L.INVALID_ARGUMENT,n);return!0}/**
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
 */const Ip=-62135596800,Ap=1e6;class Be{static now(){return Be.fromMillis(Date.now())}static fromDate(e){return Be.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Ap);return new Be(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new X(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new X(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Ip)throw new X(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new X(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Ap}_compareTo(e){return this.seconds===e.seconds?ve(this.nanoseconds,e.nanoseconds):ve(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Be._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(po(e,Be._jsonSchema))return new Be(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Ip;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Be._jsonSchemaVersion="firestore/timestamp/1.0",Be._jsonSchema={type:Ze("string",Be._jsonSchemaVersion),seconds:Ze("number"),nanoseconds:Ze("number")};/**
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
 */class he{static fromTimestamp(e){return new he(e)}static min(){return new he(new Be(0,0))}static max(){return new he(new Be(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Ki=-1;function ZP(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=he.fromTimestamp(r===1e9?new Be(n+1,0):new Be(n,r));return new gr(s,re.empty(),e)}function ek(t){return new gr(t.readTime,t.key,Ki)}class gr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new gr(he.min(),re.empty(),Ki)}static max(){return new gr(he.max(),re.empty(),Ki)}}function tk(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=re.comparator(t.documentKey,e.documentKey),n!==0?n:ve(t.largestBatchId,e.largestBatchId))}/**
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
 */const nk="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class rk{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function Hs(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==nk)throw t;ee("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ce(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new F(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}}))}toPromise(){return new Promise(((e,n)=>{this.next(e,n)}))}wrapUserFunction(e){try{const n=e();return n instanceof F?n:F.resolve(n)}catch(n){return F.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction((()=>e(n))):F.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction((()=>e(n))):F.reject(n)}static resolve(e){return new F(((n,r)=>{n(e)}))}static reject(e){return new F(((n,r)=>{r(e)}))}static waitFor(e){return new F(((n,r)=>{let s=0,i=0,o=!1;e.forEach((c=>{++s,c.next((()=>{++i,o&&i===s&&n()}),(l=>r(l)))})),o=!0,i===s&&n()}))}static or(e){let n=F.resolve(!1);for(const r of e)n=n.next((s=>s?F.resolve(s):r()));return n}static forEach(e,n){const r=[];return e.forEach(((s,i)=>{r.push(n.call(this,s,i))})),this.waitFor(r)}static mapArray(e,n){return new F(((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const u=l;n(e[u]).next((f=>{o[u]=f,++c,c===i&&r(o)}),(f=>s(f)))}}))}static doWhile(e,n){return new F(((r,s)=>{const i=()=>{e()===!0?n().next((()=>{i()}),s):r()};i()}))}}function sk(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ws(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class fc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}fc.ce=-1;/**
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
 */const Ku=-1;function dc(t){return t==null}function Sa(t){return t===0&&1/t==-1/0}function ik(t){return typeof t=="number"&&Number.isInteger(t)&&!Sa(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const zy="";function ok(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=bp(e)),e=ak(t.get(n),e);return bp(e)}function ak(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case zy:n+="";break;default:n+=i}}return n}function bp(t){return t+zy+""}/**
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
 */function Rp(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Zr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Hy(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class He{constructor(e,n){this.comparator=e,this.root=n||lt.EMPTY}insert(e,n){return new He(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,lt.BLACK,null,null))}remove(e){return new He(this.comparator,this.root.remove(e,this.comparator).copy(null,null,lt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,r)=>(e(n,r),!1)))}toString(){const e=[];return this.inorderTraversal(((n,r)=>(e.push(`${n}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new $o(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new $o(this.root,e,this.comparator,!1)}getReverseIterator(){return new $o(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new $o(this.root,e,this.comparator,!0)}}class $o{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class lt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??lt.RED,this.left=s??lt.EMPTY,this.right=i??lt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new lt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return lt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return lt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,lt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,lt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ce(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ce(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ce(27949);return e+(this.isRed()?0:1)}}lt.EMPTY=null,lt.RED=!0,lt.BLACK=!1;lt.EMPTY=new class{constructor(){this.size=0}get key(){throw ce(57766)}get value(){throw ce(16141)}get color(){throw ce(16727)}get left(){throw ce(29726)}get right(){throw ce(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new lt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class nt{constructor(e){this.comparator=e,this.data=new He(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((n,r)=>(e(n),!1)))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Sp(this.data.getIterator())}getIteratorFrom(e){return new Sp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach((r=>{n=n.add(r)})),n}isEqual(e){if(!(e instanceof nt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((n=>{e.push(n)})),e}toString(){const e=[];return this.forEach((n=>e.push(n))),"SortedSet("+e.toString()+")"}copy(e){const n=new nt(this.comparator);return n.data=e,n}}class Sp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class sn{constructor(e){this.fields=e,e.sort(ht.comparator)}static empty(){return new sn([])}unionWith(e){let n=new nt(ht.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new sn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Vs(this.fields,e.fields,((n,r)=>n.isEqual(r)))}}/**
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
 */class Wy extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class dt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Wy("Invalid base64 string: "+i):i}})(e);return new dt(n)}static fromUint8Array(e){const n=(function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i})(e);return new dt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ve(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}dt.EMPTY_BYTE_STRING=new dt("");const ck=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function _r(t){if(De(!!t,39018),typeof t=="string"){let e=0;const n=ck.exec(t);if(De(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Je(t.seconds),nanos:Je(t.nanos)}}function Je(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function yr(t){return typeof t=="string"?dt.fromBase64String(t):dt.fromUint8Array(t)}/**
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
 */const Ky="server_timestamp",Gy="__type__",Qy="__previous_value__",Jy="__local_write_time__";function Gu(t){return(t?.mapValue?.fields||{})[Gy]?.stringValue===Ky}function pc(t){const e=t.mapValue.fields[Qy];return Gu(e)?pc(e):e}function Gi(t){const e=_r(t.mapValue.fields[Jy].timestampValue);return new Be(e.seconds,e.nanos)}/**
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
 */class lk{constructor(e,n,r,s,i,o,c,l,u,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=u,this.isUsingEmulator=f}}const Ca="(default)";class Qi{constructor(e,n){this.projectId=e,this.database=n||Ca}static empty(){return new Qi("","")}get isDefaultDatabase(){return this.database===Ca}isEqual(e){return e instanceof Qi&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Yy="__type__",uk="__max__",jo={mapValue:{}},Xy="__vector__",Pa="value";function Er(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Gu(t)?4:fk(t)?9007199254740991:hk(t)?10:11:ce(28295,{value:t})}function Cn(t,e){if(t===e)return!0;const n=Er(t);if(n!==Er(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Gi(t).isEqual(Gi(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=_r(s.timestampValue),c=_r(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos})(t,e);case 5:return t.stringValue===e.stringValue;case 6:return(function(s,i){return yr(s.bytesValue).isEqual(yr(i.bytesValue))})(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return(function(s,i){return Je(s.geoPointValue.latitude)===Je(i.geoPointValue.latitude)&&Je(s.geoPointValue.longitude)===Je(i.geoPointValue.longitude)})(t,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return Je(s.integerValue)===Je(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Je(s.doubleValue),c=Je(i.doubleValue);return o===c?Sa(o)===Sa(c):isNaN(o)&&isNaN(c)}return!1})(t,e);case 9:return Vs(t.arrayValue.values||[],e.arrayValue.values||[],Cn);case 10:case 11:return(function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Rp(o)!==Rp(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!Cn(o[l],c[l])))return!1;return!0})(t,e);default:return ce(52216,{left:t})}}function Ji(t,e){return(t.values||[]).find((n=>Cn(n,e)))!==void 0}function xs(t,e){if(t===e)return 0;const n=Er(t),r=Er(e);if(n!==r)return ve(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ve(t.booleanValue,e.booleanValue);case 2:return(function(i,o){const c=Je(i.integerValue||i.doubleValue),l=Je(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1})(t,e);case 3:return Cp(t.timestampValue,e.timestampValue);case 4:return Cp(Gi(t),Gi(e));case 5:return Gl(t.stringValue,e.stringValue);case 6:return(function(i,o){const c=yr(i),l=yr(o);return c.compareTo(l)})(t.bytesValue,e.bytesValue);case 7:return(function(i,o){const c=i.split("/"),l=o.split("/");for(let u=0;u<c.length&&u<l.length;u++){const f=ve(c[u],l[u]);if(f!==0)return f}return ve(c.length,l.length)})(t.referenceValue,e.referenceValue);case 8:return(function(i,o){const c=ve(Je(i.latitude),Je(o.latitude));return c!==0?c:ve(Je(i.longitude),Je(o.longitude))})(t.geoPointValue,e.geoPointValue);case 9:return Pp(t.arrayValue,e.arrayValue);case 10:return(function(i,o){const c=i.fields||{},l=o.fields||{},u=c[Pa]?.arrayValue,f=l[Pa]?.arrayValue,p=ve(u?.values?.length||0,f?.values?.length||0);return p!==0?p:Pp(u,f)})(t.mapValue,e.mapValue);case 11:return(function(i,o){if(i===jo.mapValue&&o===jo.mapValue)return 0;if(i===jo.mapValue)return 1;if(o===jo.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),u=o.fields||{},f=Object.keys(u);l.sort(),f.sort();for(let p=0;p<l.length&&p<f.length;++p){const m=Gl(l[p],f[p]);if(m!==0)return m;const _=xs(c[l[p]],u[f[p]]);if(_!==0)return _}return ve(l.length,f.length)})(t.mapValue,e.mapValue);default:throw ce(23264,{he:n})}}function Cp(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ve(t,e);const n=_r(t),r=_r(e),s=ve(n.seconds,r.seconds);return s!==0?s:ve(n.nanos,r.nanos)}function Pp(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=xs(n[s],r[s]);if(i)return i}return ve(n.length,r.length)}function Ms(t){return Ql(t)}function Ql(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?(function(n){const r=_r(n);return`time(${r.seconds},${r.nanos})`})(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?(function(n){return yr(n).toBase64()})(t.bytesValue):"referenceValue"in t?(function(n){return re.fromName(n).toString()})(t.referenceValue):"geoPointValue"in t?(function(n){return`geo(${n.latitude},${n.longitude})`})(t.geoPointValue):"arrayValue"in t?(function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Ql(i);return r+"]"})(t.arrayValue):"mapValue"in t?(function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Ql(n.fields[o])}`;return s+"}"})(t.mapValue):ce(61005,{value:t})}function ia(t){switch(Er(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=pc(t);return e?16+ia(e):16;case 5:return 2*t.stringValue.length;case 6:return yr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+ia(i)),0)})(t.arrayValue);case 10:case 11:return(function(r){let s=0;return Zr(r.fields,((i,o)=>{s+=i.length+ia(o)})),s})(t.mapValue);default:throw ce(13486,{value:t})}}function kp(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Jl(t){return!!t&&"integerValue"in t}function Qu(t){return!!t&&"arrayValue"in t}function Op(t){return!!t&&"nullValue"in t}function Np(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function oa(t){return!!t&&"mapValue"in t}function hk(t){return(t?.mapValue?.fields||{})[Yy]?.stringValue===Xy}function Ni(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Zr(t.mapValue.fields,((n,r)=>e.mapValue.fields[n]=Ni(r))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ni(t.arrayValue.values[n]);return e}return{...t}}function fk(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===uk}/**
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
 */class Kt{constructor(e){this.value=e}static empty(){return new Kt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!oa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ni(n)}setAll(e){let n=ht.emptyPath(),r={},s=[];e.forEach(((o,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=Ni(o):s.push(c.lastSegment())}));const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());oa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Cn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];oa(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Zr(n,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new Kt(Ni(this.value))}}function Zy(t){const e=[];return Zr(t.fields,((n,r)=>{const s=new ht([n]);if(oa(r)){const i=Zy(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)})),new sn(e)}/**
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
 */class vt{constructor(e,n,r,s,i,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new vt(e,0,he.min(),he.min(),he.min(),Kt.empty(),0)}static newFoundDocument(e,n,r,s){return new vt(e,1,n,he.min(),r,s,0)}static newNoDocument(e,n){return new vt(e,2,n,he.min(),he.min(),Kt.empty(),0)}static newUnknownDocument(e,n){return new vt(e,3,n,he.min(),he.min(),Kt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(he.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Kt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Kt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=he.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof vt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new vt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ka{constructor(e,n){this.position=e,this.inclusive=n}}function Dp(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=re.comparator(re.fromName(o.referenceValue),n.key):r=xs(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Vp(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Cn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Yi{constructor(e,n="asc"){this.field=e,this.dir=n}}function dk(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class eE{}class Xe extends eE{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new mk(e,n,r):n==="array-contains"?new yk(e,r):n==="in"?new Ek(e,r):n==="not-in"?new wk(e,r):n==="array-contains-any"?new vk(e,r):new Xe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new gk(e,r):new _k(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(xs(n,this.value)):n!==null&&Er(this.value)===Er(n)&&this.matchesComparison(xs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ce(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class un extends eE{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new un(e,n)}matches(e){return tE(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function tE(t){return t.op==="and"}function nE(t){return pk(t)&&tE(t)}function pk(t){for(const e of t.filters)if(e instanceof un)return!1;return!0}function Yl(t){if(t instanceof Xe)return t.field.canonicalString()+t.op.toString()+Ms(t.value);if(nE(t))return t.filters.map((e=>Yl(e))).join(",");{const e=t.filters.map((n=>Yl(n))).join(",");return`${t.op}(${e})`}}function rE(t,e){return t instanceof Xe?(function(r,s){return s instanceof Xe&&r.op===s.op&&r.field.isEqual(s.field)&&Cn(r.value,s.value)})(t,e):t instanceof un?(function(r,s){return s instanceof un&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,o,c)=>i&&rE(o,s.filters[c])),!0):!1})(t,e):void ce(19439)}function sE(t){return t instanceof Xe?(function(n){return`${n.field.canonicalString()} ${n.op} ${Ms(n.value)}`})(t):t instanceof un?(function(n){return n.op.toString()+" {"+n.getFilters().map(sE).join(" ,")+"}"})(t):"Filter"}class mk extends Xe{constructor(e,n,r){super(e,n,r),this.key=re.fromName(r.referenceValue)}matches(e){const n=re.comparator(e.key,this.key);return this.matchesComparison(n)}}class gk extends Xe{constructor(e,n){super(e,"in",n),this.keys=iE("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class _k extends Xe{constructor(e,n){super(e,"not-in",n),this.keys=iE("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function iE(t,e){return(e.arrayValue?.values||[]).map((n=>re.fromName(n.referenceValue)))}class yk extends Xe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Qu(n)&&Ji(n.arrayValue,this.value)}}class Ek extends Xe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ji(this.value.arrayValue,n)}}class wk extends Xe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ji(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Ji(this.value.arrayValue,n)}}class vk extends Xe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Qu(n)||!n.arrayValue.values)&&n.arrayValue.values.some((r=>Ji(this.value.arrayValue,r)))}}/**
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
 */class Tk{constructor(e,n=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.Te=null}}function xp(t,e=null,n=[],r=[],s=null,i=null,o=null){return new Tk(t,e,n,r,s,i,o)}function Ju(t){const e=de(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((r=>Yl(r))).join(","),n+="|ob:",n+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),dc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((r=>Ms(r))).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((r=>Ms(r))).join(",")),e.Te=n}return e.Te}function Yu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!dk(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!rE(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Vp(t.startAt,e.startAt)&&Vp(t.endAt,e.endAt)}function Xl(t){return re.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Ks{constructor(e,n=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function Ik(t,e,n,r,s,i,o,c){return new Ks(t,e,n,r,s,i,o,c)}function Xu(t){return new Ks(t)}function Mp(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function oE(t){return t.collectionGroup!==null}function Di(t){const e=de(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new nt(ht.comparator);return o.filters.forEach((l=>{l.getFlattenedFilters().forEach((u=>{u.isInequality()&&(c=c.add(u.field))}))})),c})(e).forEach((i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new Yi(i,r))})),n.has(ht.keyField().canonicalString())||e.Ie.push(new Yi(ht.keyField(),r))}return e.Ie}function Tn(t){const e=de(t);return e.Ee||(e.Ee=Ak(e,Di(t))),e.Ee}function Ak(t,e){if(t.limitType==="F")return xp(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new Yi(s.field,i)}));const n=t.endAt?new ka(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ka(t.startAt.position,t.startAt.inclusive):null;return xp(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Zl(t,e){const n=t.filters.concat([e]);return new Ks(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Oa(t,e,n){return new Ks(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function mc(t,e){return Yu(Tn(t),Tn(e))&&t.limitType===e.limitType}function aE(t){return`${Ju(Tn(t))}|lt:${t.limitType}`}function ds(t){return`Query(target=${(function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map((s=>sE(s))).join(", ")}]`),dc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map((s=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(s))).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map((s=>Ms(s))).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map((s=>Ms(s))).join(",")),`Target(${r})`})(Tn(t))}; limitType=${t.limitType})`}function gc(t,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):re.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(t,e)&&(function(r,s){for(const i of Di(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(t,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(t,e)&&(function(r,s){return!(r.startAt&&!(function(o,c,l){const u=Dp(o,c,l);return o.inclusive?u<=0:u<0})(r.startAt,Di(r),s)||r.endAt&&!(function(o,c,l){const u=Dp(o,c,l);return o.inclusive?u>=0:u>0})(r.endAt,Di(r),s))})(t,e)}function bk(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function cE(t){return(e,n)=>{let r=!1;for(const s of Di(t)){const i=Rk(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Rk(t,e,n){const r=t.field.isKeyField()?re.comparator(e.key,n.key):(function(i,o,c){const l=o.data.field(i),u=c.data.field(i);return l!==null&&u!==null?xs(l,u):ce(42886)})(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ce(19790,{direction:t.dir})}}/**
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
 */class es{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Zr(this.inner,((n,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return Hy(this.inner)}size(){return this.innerSize}}/**
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
 */const Sk=new He(re.comparator);function Wn(){return Sk}const lE=new He(re.comparator);function _i(...t){let e=lE;for(const n of t)e=e.insert(n.key,n);return e}function uE(t){let e=lE;return t.forEach(((n,r)=>e=e.insert(n,r.overlayedDocument))),e}function xr(){return Vi()}function hE(){return Vi()}function Vi(){return new es((t=>t.toString()),((t,e)=>t.isEqual(e)))}const Ck=new He(re.comparator),Pk=new nt(re.comparator);function Te(...t){let e=Pk;for(const n of t)e=e.add(n);return e}const kk=new nt(ve);function Ok(){return kk}/**
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
 */function Zu(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Sa(e)?"-0":e}}function fE(t){return{integerValue:""+t}}function Nk(t,e){return ik(e)?fE(e):Zu(t,e)}/**
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
 */class _c{constructor(){this._=void 0}}function Dk(t,e,n){return t instanceof Xi?(function(s,i){const o={fields:{[Gy]:{stringValue:Ky},[Jy]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Gu(i)&&(i=pc(i)),i&&(o.fields[Qy]=i),{mapValue:o}})(n,e):t instanceof Zi?pE(t,e):t instanceof eo?mE(t,e):(function(s,i){const o=dE(s,i),c=Lp(o)+Lp(s.Ae);return Jl(o)&&Jl(s.Ae)?fE(c):Zu(s.serializer,c)})(t,e)}function Vk(t,e,n){return t instanceof Zi?pE(t,e):t instanceof eo?mE(t,e):n}function dE(t,e){return t instanceof Na?(function(r){return Jl(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class Xi extends _c{}class Zi extends _c{constructor(e){super(),this.elements=e}}function pE(t,e){const n=gE(e);for(const r of t.elements)n.some((s=>Cn(s,r)))||n.push(r);return{arrayValue:{values:n}}}class eo extends _c{constructor(e){super(),this.elements=e}}function mE(t,e){let n=gE(e);for(const r of t.elements)n=n.filter((s=>!Cn(s,r)));return{arrayValue:{values:n}}}class Na extends _c{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Lp(t){return Je(t.integerValue||t.doubleValue)}function gE(t){return Qu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class xk{constructor(e,n){this.field=e,this.transform=n}}function Mk(t,e){return t.field.isEqual(e.field)&&(function(r,s){return r instanceof Zi&&s instanceof Zi||r instanceof eo&&s instanceof eo?Vs(r.elements,s.elements,Cn):r instanceof Na&&s instanceof Na?Cn(r.Ae,s.Ae):r instanceof Xi&&s instanceof Xi})(t.transform,e.transform)}class Lk{constructor(e,n){this.version=e,this.transformResults=n}}class Un{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Un}static exists(e){return new Un(void 0,e)}static updateTime(e){return new Un(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function aa(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class yc{}function _E(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new EE(t.key,Un.none()):new mo(t.key,t.data,Un.none());{const n=t.data,r=Kt.empty();let s=new nt(ht.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new ts(t.key,r,new sn(s.toArray()),Un.none())}}function Fk(t,e,n){t instanceof mo?(function(s,i,o){const c=s.value.clone(),l=Up(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(t,e,n):t instanceof ts?(function(s,i,o){if(!aa(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=Up(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(yE(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(t,e,n):(function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,n)}function xi(t,e,n,r){return t instanceof mo?(function(i,o,c,l){if(!aa(i.precondition,o))return c;const u=i.value.clone(),f=Bp(i.fieldTransforms,l,o);return u.setAll(f),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null})(t,e,n,r):t instanceof ts?(function(i,o,c,l){if(!aa(i.precondition,o))return c;const u=Bp(i.fieldTransforms,l,o),f=o.data;return f.setAll(yE(i)),f.setAll(u),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((p=>p.field)))})(t,e,n,r):(function(i,o,c){return aa(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c})(t,e,n)}function Uk(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=dE(r.transform,s||null);i!=null&&(n===null&&(n=Kt.empty()),n.set(r.field,i))}return n||null}function Fp(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Vs(r,s,((i,o)=>Mk(i,o)))})(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class mo extends yc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ts extends yc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function yE(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function Up(t,e,n){const r=new Map;De(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,Vk(o,c,n[s]))}return r}function Bp(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,Dk(i,o,e))}return r}class EE extends yc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Bk extends yc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class $k{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Fk(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=xi(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=xi(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=hE();return this.mutations.forEach((s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const l=_E(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(he.min())})),r}keys(){return this.mutations.reduce(((e,n)=>e.add(n.key)),Te())}isEqual(e){return this.batchId===e.batchId&&Vs(this.mutations,e.mutations,((n,r)=>Fp(n,r)))&&Vs(this.baseMutations,e.baseMutations,((n,r)=>Fp(n,r)))}}class eh{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){De(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=(function(){return Ck})();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new eh(e,n,r,s)}}/**
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
 */class jk{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class qk{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Ye,Ae;function zk(t){switch(t){case L.OK:return ce(64938);case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0;default:return ce(15467,{code:t})}}function wE(t){if(t===void 0)return Hn("GRPC error has no .code"),L.UNKNOWN;switch(t){case Ye.OK:return L.OK;case Ye.CANCELLED:return L.CANCELLED;case Ye.UNKNOWN:return L.UNKNOWN;case Ye.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case Ye.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case Ye.INTERNAL:return L.INTERNAL;case Ye.UNAVAILABLE:return L.UNAVAILABLE;case Ye.UNAUTHENTICATED:return L.UNAUTHENTICATED;case Ye.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case Ye.NOT_FOUND:return L.NOT_FOUND;case Ye.ALREADY_EXISTS:return L.ALREADY_EXISTS;case Ye.PERMISSION_DENIED:return L.PERMISSION_DENIED;case Ye.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case Ye.ABORTED:return L.ABORTED;case Ye.OUT_OF_RANGE:return L.OUT_OF_RANGE;case Ye.UNIMPLEMENTED:return L.UNIMPLEMENTED;case Ye.DATA_LOSS:return L.DATA_LOSS;default:return ce(39323,{code:t})}}(Ae=Ye||(Ye={}))[Ae.OK=0]="OK",Ae[Ae.CANCELLED=1]="CANCELLED",Ae[Ae.UNKNOWN=2]="UNKNOWN",Ae[Ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ae[Ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ae[Ae.NOT_FOUND=5]="NOT_FOUND",Ae[Ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ae[Ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ae[Ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ae[Ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ae[Ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ae[Ae.ABORTED=10]="ABORTED",Ae[Ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ae[Ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ae[Ae.INTERNAL=13]="INTERNAL",Ae[Ae.UNAVAILABLE=14]="UNAVAILABLE",Ae[Ae.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Hk(){return new TextEncoder}/**
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
 */const Wk=new dr([4294967295,4294967295],0);function $p(t){const e=Hk().encode(t),n=new Vy;return n.update(e),new Uint8Array(n.digest())}function jp(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new dr([n,r],0),new dr([s,i],0)]}class th{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new yi(`Invalid padding: ${n}`);if(r<0)throw new yi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new yi(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new yi(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=dr.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(dr.fromNumber(r)));return s.compare(Wk)===1&&(s=new dr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=$p(e),[r,s]=jp(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new th(i,s,n);return r.forEach((c=>o.insert(c))),o}insert(e){if(this.ge===0)return;const n=$p(e),[r,s]=jp(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class yi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ec{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,go.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ec(he.min(),s,new He(ve),Wn(),Te())}}class go{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new go(r,n,Te(),Te(),Te())}}/**
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
 */class ca{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class vE{constructor(e,n){this.targetId=e,this.Ce=n}}class TE{constructor(e,n,r=dt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class qp{constructor(){this.ve=0,this.Fe=zp(),this.Me=dt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Te(),n=Te(),r=Te();return this.Fe.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ce(38017,{changeType:i})}})),new go(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=zp()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,De(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class Kk{constructor(e){this.Ge=e,this.ze=new Map,this.je=Wn(),this.Je=qo(),this.He=qo(),this.Ye=new He(ve)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,(n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:ce(56790,{state:e.state})}}))}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach(((r,s)=>{this.rt(s)&&n(s)}))}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(Xl(i))if(r===0){const o=new re(i.path);this.et(n,o,vt.newNoDocument(o,he.min()))}else De(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const c=this.ut(e),l=c?this.ct(c,e,o):1;if(l!==0){this.it(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,u)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=yr(r).toUint8Array()}catch(l){if(l instanceof Wy)return Ds("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new th(o,s,i)}catch(l){return Ds(l instanceof yi?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.ge===0?null:c}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach((i=>{const o=this.Ge.ht(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.et(n,i,null),s++)})),s}Tt(e){const n=new Map;this.ze.forEach(((i,o)=>{const c=this.ot(o);if(c){if(i.current&&Xl(c.target)){const l=new re(c.target.path);this.It(l).has(o)||this.Et(o,l)||this.et(o,l,vt.newNoDocument(l,e))}i.Be&&(n.set(o,i.ke()),i.qe())}}));let r=Te();this.He.forEach(((i,o)=>{let c=!0;o.forEachWhile((l=>{const u=this.ot(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(r=r.add(i))})),this.je.forEach(((i,o)=>o.setReadTime(e)));const s=new Ec(e,n,this.Ye,this.je,r);return this.je=Wn(),this.Je=qo(),this.He=qo(),this.Ye=new He(ve),s}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.Qe(n,1):s.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new qp,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new nt(ve),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new nt(ve),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||ee("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new qp),this.Ge.getRemoteKeysForTarget(e).forEach((n=>{this.et(e,n,null)}))}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function qo(){return new He(re.comparator)}function zp(){return new He(re.comparator)}const Gk={asc:"ASCENDING",desc:"DESCENDING"},Qk={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Jk={and:"AND",or:"OR"};class Yk{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function eu(t,e){return t.useProto3Json||dc(e)?e:{value:e}}function Da(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function IE(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Xk(t,e){return Da(t,e.toTimestamp())}function In(t){return De(!!t,49232),he.fromTimestamp((function(n){const r=_r(n);return new Be(r.seconds,r.nanos)})(t))}function nh(t,e){return tu(t,e).canonicalString()}function tu(t,e){const n=(function(s){return new Fe(["projects",s.projectId,"databases",s.database])})(t).child("documents");return e===void 0?n:n.child(e)}function AE(t){const e=Fe.fromString(t);return De(PE(e),10190,{key:e.toString()}),e}function nu(t,e){return nh(t.databaseId,e.path)}function dl(t,e){const n=AE(e);if(n.get(1)!==t.databaseId.projectId)throw new X(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new X(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new re(RE(n))}function bE(t,e){return nh(t.databaseId,e)}function Zk(t){const e=AE(t);return e.length===4?Fe.emptyPath():RE(e)}function ru(t){return new Fe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function RE(t){return De(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Hp(t,e,n){return{name:nu(t,e),fields:n.value.mapValue.fields}}function eO(t,e){let n;if("targetChange"in e){e.targetChange;const r=(function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ce(39313,{state:u})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(u,f){return u.useProto3Json?(De(f===void 0||typeof f=="string",58123),dt.fromBase64String(f||"")):(De(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),dt.fromUint8Array(f||new Uint8Array))})(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&(function(u){const f=u.code===void 0?L.UNKNOWN:wE(u.code);return new X(f,u.message||"")})(o);n=new TE(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=dl(t,r.document.name),i=In(r.document.updateTime),o=r.document.createTime?In(r.document.createTime):he.min(),c=new Kt({mapValue:{fields:r.document.fields}}),l=vt.newFoundDocument(s,i,o,c),u=r.targetIds||[],f=r.removedTargetIds||[];n=new ca(u,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=dl(t,r.document),i=r.readTime?In(r.readTime):he.min(),o=vt.newNoDocument(s,i),c=r.removedTargetIds||[];n=new ca([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=dl(t,r.document),i=r.removedTargetIds||[];n=new ca([],i,s,null)}else{if(!("filter"in e))return ce(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new qk(s,i),c=r.targetId;n=new vE(c,o)}}return n}function tO(t,e){let n;if(e instanceof mo)n={update:Hp(t,e.key,e.value)};else if(e instanceof EE)n={delete:nu(t,e.key)};else if(e instanceof ts)n={update:Hp(t,e.key,e.data),updateMask:uO(e.fieldMask)};else{if(!(e instanceof Bk))return ce(16599,{Vt:e.type});n={verify:nu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((r=>(function(i,o){const c=o.transform;if(c instanceof Xi)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Zi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof eo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Na)return{fieldPath:o.field.canonicalString(),increment:c.Ae};throw ce(20930,{transform:o.transform})})(0,r)))),e.precondition.isNone||(n.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:Xk(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ce(27497)})(t,e.precondition)),n}function nO(t,e){return t&&t.length>0?(De(e!==void 0,14353),t.map((n=>(function(s,i){let o=s.updateTime?In(s.updateTime):In(i);return o.isEqual(he.min())&&(o=In(i)),new Lk(o,s.transformResults||[])})(n,e)))):[]}function rO(t,e){return{documents:[bE(t,e.path)]}}function sO(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=bE(t,s);const i=(function(u){if(u.length!==0)return CE(un.create(u,"and"))})(e.filters);i&&(n.structuredQuery.where=i);const o=(function(u){if(u.length!==0)return u.map((f=>(function(m){return{field:ps(m.field),direction:aO(m.dir)}})(f)))})(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=eu(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=(function(u){return{before:u.inclusive,values:u.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(u){return{before:!u.inclusive,values:u.position}})(e.endAt)),{ft:n,parent:s}}function iO(t){let e=Zk(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){De(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=(function(p){const m=SE(p);return m instanceof un&&nE(m)?m.getFilters():[m]})(n.where));let o=[];n.orderBy&&(o=(function(p){return p.map((m=>(function(w){return new Yi(ms(w.field),(function(S){switch(S){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(w.direction))})(m)))})(n.orderBy));let c=null;n.limit&&(c=(function(p){let m;return m=typeof p=="object"?p.value:p,dc(m)?null:m})(n.limit));let l=null;n.startAt&&(l=(function(p){const m=!!p.before,_=p.values||[];return new ka(_,m)})(n.startAt));let u=null;return n.endAt&&(u=(function(p){const m=!p.before,_=p.values||[];return new ka(_,m)})(n.endAt)),Ik(e,s,o,i,c,"F",l,u)}function oO(t,e){const n=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ce(28987,{purpose:s})}})(e.purpose);return n==null?null:{"goog-listen-tags":n}}function SE(t){return t.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ms(n.unaryFilter.field);return Xe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=ms(n.unaryFilter.field);return Xe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ms(n.unaryFilter.field);return Xe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ms(n.unaryFilter.field);return Xe.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ce(61313);default:return ce(60726)}})(t):t.fieldFilter!==void 0?(function(n){return Xe.create(ms(n.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ce(58110);default:return ce(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(t):t.compositeFilter!==void 0?(function(n){return un.create(n.compositeFilter.filters.map((r=>SE(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ce(1026)}})(n.compositeFilter.op))})(t):ce(30097,{filter:t})}function aO(t){return Gk[t]}function cO(t){return Qk[t]}function lO(t){return Jk[t]}function ps(t){return{fieldPath:t.canonicalString()}}function ms(t){return ht.fromServerFormat(t.fieldPath)}function CE(t){return t instanceof Xe?(function(n){if(n.op==="=="){if(Np(n.value))return{unaryFilter:{field:ps(n.field),op:"IS_NAN"}};if(Op(n.value))return{unaryFilter:{field:ps(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Np(n.value))return{unaryFilter:{field:ps(n.field),op:"IS_NOT_NAN"}};if(Op(n.value))return{unaryFilter:{field:ps(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ps(n.field),op:cO(n.op),value:n.value}}})(t):t instanceof un?(function(n){const r=n.getFilters().map((s=>CE(s)));return r.length===1?r[0]:{compositeFilter:{op:lO(n.op),filters:r}}})(t):ce(54877,{filter:t})}function uO(t){const e=[];return t.fields.forEach((n=>e.push(n.canonicalString()))),{fieldPaths:e}}function PE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class cr{constructor(e,n,r,s,i=he.min(),o=he.min(),c=dt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new cr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new cr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new cr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new cr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class hO{constructor(e){this.yt=e}}function fO(t){const e=iO({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Oa(e,e.limit,"L"):e}/**
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
 */class dO{constructor(){this.Cn=new pO}addToCollectionParentIndex(e,n){return this.Cn.add(n),F.resolve()}getCollectionParents(e,n){return F.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return F.resolve()}deleteFieldIndex(e,n){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,n){return F.resolve()}getDocumentsMatchingTarget(e,n){return F.resolve(null)}getIndexType(e,n){return F.resolve(0)}getFieldIndexes(e,n){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,n){return F.resolve(gr.min())}getMinOffsetFromCollectionGroup(e,n){return F.resolve(gr.min())}updateCollectionGroup(e,n,r){return F.resolve()}updateIndexEntries(e,n){return F.resolve()}}class pO{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new nt(Fe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new nt(Fe.comparator)).toArray()}}/**
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
 */const Wp={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},kE=41943040;class Vt{static withCacheSize(e){return new Vt(e,Vt.DEFAULT_COLLECTION_PERCENTILE,Vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Vt.DEFAULT_COLLECTION_PERCENTILE=10,Vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Vt.DEFAULT=new Vt(kE,Vt.DEFAULT_COLLECTION_PERCENTILE,Vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Vt.DISABLED=new Vt(-1,0,0);/**
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
 */class Ls{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Ls(0)}static cr(){return new Ls(-1)}}/**
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
 */const Kp="LruGarbageCollector",mO=1048576;function Gp([t,e],[n,r]){const s=ve(t,n);return s===0?ve(e,r):s}class gO{constructor(e){this.Ir=e,this.buffer=new nt(Gp),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Gp(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class _O{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){ee(Kp,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ws(n)?ee(Kp,"Ignoring IndexedDB error during garbage collection: ",n):await Hs(n)}await this.Vr(3e5)}))}}class yO{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next((r=>Math.floor(n/100*r)))}nthSequenceNumber(e,n){if(n===0)return F.resolve(fc.ce);const r=new gO(n);return this.mr.forEachTarget(e,(s=>r.Ar(s.sequenceNumber))).next((()=>this.mr.pr(e,(s=>r.Ar(s))))).next((()=>r.maxValue))}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(ee("LruGarbageCollector","Garbage collection skipped; disabled"),F.resolve(Wp)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(ee("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Wp):this.yr(e,n)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,s,i,o,c,l,u;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?(ee("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s)))).next((p=>(r=p,c=Date.now(),this.removeTargets(e,r,n)))).next((p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(e,r)))).next((p=>(u=Date.now(),fs()<=we.DEBUG&&ee("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(u-l)+`ms
Total Duration: ${u-f}ms`),F.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p}))))}}function EO(t,e){return new yO(t,e)}/**
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
 */class wO{constructor(){this.changes=new es((e=>e.toString()),((e,n)=>e.isEqual(n))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,vt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?F.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class vO{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class TO{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,n)))).next((s=>(r!==null&&xi(r.mutation,s,sn.empty(),Be.now()),s)))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.getLocalViewOfDocuments(e,r,Te()).next((()=>r))))}getLocalViewOfDocuments(e,n,r=Te()){const s=xr();return this.populateOverlays(e,s,n).next((()=>this.computeViews(e,n,s,r).next((i=>{let o=_i();return i.forEach(((c,l)=>{o=o.insert(c,l.overlayedDocument)})),o}))))}getOverlayedDocuments(e,n){const r=xr();return this.populateOverlays(e,r,n).next((()=>this.computeViews(e,n,r,Te())))}populateOverlays(e,n,r){const s=[];return r.forEach((i=>{n.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((o,c)=>{n.set(o,c)}))}))}computeViews(e,n,r,s){let i=Wn();const o=Vi(),c=(function(){return Vi()})();return n.forEach(((l,u)=>{const f=r.get(u.key);s.has(u.key)&&(f===void 0||f.mutation instanceof ts)?i=i.insert(u.key,u):f!==void 0?(o.set(u.key,f.mutation.getFieldMask()),xi(f.mutation,u,f.mutation.getFieldMask(),Be.now())):o.set(u.key,sn.empty())})),this.recalculateAndSaveOverlays(e,i).next((l=>(l.forEach(((u,f)=>o.set(u,f))),n.forEach(((u,f)=>c.set(u,new vO(f,o.get(u)??null)))),c)))}recalculateAndSaveOverlays(e,n){const r=Vi();let s=new He(((o,c)=>o-c)),i=Te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next((o=>{for(const c of o)c.keys().forEach((l=>{const u=n.get(l);if(u===null)return;let f=r.get(l)||sn.empty();f=c.applyToLocalView(u,f),r.set(l,f);const p=(s.get(c.batchId)||Te()).add(l);s=s.insert(c.batchId,p)}))})).next((()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),u=l.key,f=l.value,p=hE();f.forEach((m=>{if(!i.has(m)){const _=_E(n.get(m),r.get(m));_!==null&&p.set(m,_),i=i.add(m)}})),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return F.waitFor(o)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,n,r,s){return(function(o){return re.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0})(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):oE(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next((i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):F.resolve(xr());let c=Ki,l=i;return o.next((u=>F.forEach(u,((f,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(f)?F.resolve():this.remoteDocumentCache.getEntry(e,f).next((m=>{l=l.insert(f,m)}))))).next((()=>this.populateOverlays(e,u,i))).next((()=>this.computeViews(e,l,u,Te()))).next((f=>({batchId:c,changes:uE(f)})))))}))}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new re(n)).next((r=>{let s=_i();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=_i();return this.indexManager.getCollectionParents(e,i).next((c=>F.forEach(c,(l=>{const u=(function(p,m){return new Ks(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next((f=>{f.forEach(((p,m)=>{o=o.insert(p,m)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s)))).next((o=>{i.forEach(((l,u)=>{const f=u.getKey();o.get(f)===null&&(o=o.insert(f,vt.newInvalidDocument(f)))}));let c=_i();return o.forEach(((l,u)=>{const f=i.get(l);f!==void 0&&xi(f.mutation,u,sn.empty(),Be.now()),gc(n,u)&&(c=c.insert(l,u))})),c}))}}/**
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
 */class IO{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return F.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,(function(s){return{id:s.id,version:s.version,createTime:In(s.createTime)}})(n)),F.resolve()}getNamedQuery(e,n){return F.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,(function(s){return{name:s.name,query:fO(s.bundledQuery),readTime:In(s.readTime)}})(n)),F.resolve()}}/**
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
 */class AO{constructor(){this.overlays=new He(re.comparator),this.qr=new Map}getOverlay(e,n){return F.resolve(this.overlays.get(n))}getOverlays(e,n){const r=xr();return F.forEach(n,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,n,r){return r.forEach(((s,i)=>{this.St(e,n,i)})),F.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.qr.delete(r)),F.resolve()}getOverlaysForCollection(e,n,r){const s=xr(),i=n.length+1,o=new re(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return F.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new He(((u,f)=>u-f));const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let f=i.get(u.largestBatchId);f===null&&(f=xr(),i=i.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const c=xr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((u,f)=>c.set(u,f))),!(c.size()>=s)););return F.resolve(c)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new jk(n,r));let i=this.qr.get(n);i===void 0&&(i=Te(),this.qr.set(n,i)),this.qr.set(n,i.add(r.key))}}/**
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
 */class bO{constructor(){this.sessionToken=dt.EMPTY_BYTE_STRING}getSessionToken(e){return F.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,F.resolve()}}/**
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
 */class rh{constructor(){this.Qr=new nt(rt.$r),this.Ur=new nt(rt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new rt(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach((r=>this.addReference(r,n)))}removeReference(e,n){this.Gr(new rt(e,n))}zr(e,n){e.forEach((r=>this.removeReference(r,n)))}jr(e){const n=new re(new Fe([])),r=new rt(n,e),s=new rt(n,e+1),i=[];return this.Ur.forEachInRange([r,s],(o=>{this.Gr(o),i.push(o.key)})),i}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new re(new Fe([])),r=new rt(n,e),s=new rt(n,e+1);let i=Te();return this.Ur.forEachInRange([r,s],(o=>{i=i.add(o.key)})),i}containsKey(e){const n=new rt(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class rt{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return re.comparator(e.key,n.key)||ve(e.Yr,n.Yr)}static Kr(e,n){return ve(e.Yr,n.Yr)||re.comparator(e.key,n.key)}}/**
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
 */class RO{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new nt(rt.$r)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new $k(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.Zr=this.Zr.add(new rt(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return F.resolve(o)}lookupMutationBatch(e,n){return F.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ei(r),i=s<0?0:s;return F.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?Ku:this.tr-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new rt(n,0),s=new rt(n,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],(o=>{const c=this.Xr(o.Yr);i.push(c)})),F.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new nt(ve);return n.forEach((s=>{const i=new rt(s,0),o=new rt(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,o],(c=>{r=r.add(c.Yr)}))})),F.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;re.isDocumentKey(i)||(i=i.child(""));const o=new rt(new re(i),0);let c=new nt(ve);return this.Zr.forEachWhile((l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(c=c.add(l.Yr)),!0)}),o),F.resolve(this.ti(c))}ti(e){const n=[];return e.forEach((r=>{const s=this.Xr(r);s!==null&&n.push(s)})),n}removeMutationBatch(e,n){De(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return F.forEach(n.mutations,(s=>{const i=new rt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Zr=r}))}ir(e){}containsKey(e,n){const r=new rt(n,0),s=this.Zr.firstAfterOrEqual(r);return F.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class SO{constructor(e){this.ri=e,this.docs=(function(){return new He(re.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return F.resolve(r?r.document.mutableCopy():vt.newInvalidDocument(n))}getEntries(e,n){let r=Wn();return n.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():vt.newInvalidDocument(s))})),F.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Wn();const o=n.path,c=new re(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:u,value:{document:f}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||tk(ek(f),r)<=0||(s.has(f.key)||gc(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return F.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ce(9500)}ii(e,n){return F.forEach(this.docs,(r=>n(r)))}newChangeBuffer(e){return new CO(this)}getSize(e){return F.resolve(this.size)}}class CO extends wO{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?n.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)})),F.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
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
 */class PO{constructor(e){this.persistence=e,this.si=new es((n=>Ju(n)),Yu),this.lastRemoteSnapshotVersion=he.min(),this.highestTargetId=0,this.oi=0,this._i=new rh,this.targetCount=0,this.ai=Ls.ur()}forEachTarget(e,n){return this.si.forEach(((r,s)=>n(s))),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),F.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new Ls(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,F.resolve()}updateTargetData(e,n){return this.Pr(n),F.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.si.forEach(((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.si.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)})),F.waitFor(i).next((()=>s))}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return F.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),F.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach((o=>{i.push(s.markPotentiallyOrphaned(e,o))})),F.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),F.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return F.resolve(r)}containsKey(e,n){return F.resolve(this._i.containsKey(n))}}/**
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
 */class OE{constructor(e,n){this.ui={},this.overlays={},this.ci=new fc(0),this.li=!1,this.li=!0,this.hi=new bO,this.referenceDelegate=e(this),this.Pi=new PO(this),this.indexManager=new dO,this.remoteDocumentCache=(function(s){return new SO(s)})((r=>this.referenceDelegate.Ti(r))),this.serializer=new hO(n),this.Ii=new IO(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new AO,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new RO(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){ee("MemoryPersistence","Starting transaction:",e);const s=new kO(this.ci.next());return this.referenceDelegate.Ei(),r(s).next((i=>this.referenceDelegate.di(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ai(e,n){return F.or(Object.values(this.ui).map((r=>()=>r.containsKey(e,n))))}}class kO extends rk{constructor(e){super(),this.currentSequenceNumber=e}}class sh{constructor(e){this.persistence=e,this.Ri=new rh,this.Vi=null}static mi(e){return new sh(e)}get fi(){if(this.Vi)return this.Vi;throw ce(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),F.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),F.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),F.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach((s=>this.fi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next((s=>{s.forEach((i=>this.fi.add(i.toString())))})).next((()=>r.removeTargetData(e,n)))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.fi,(r=>{const s=re.fromPath(r);return this.gi(e,s).next((i=>{i||n.removeEntry(s,he.min())}))})).next((()=>(this.Vi=null,n.apply(e))))}updateLimboDocument(e,n){return this.gi(e,n).next((r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())}))}Ti(e){return 0}gi(e,n){return F.or([()=>F.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class Va{constructor(e,n){this.persistence=e,this.pi=new es((r=>ok(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=EO(this,n)}static mi(e,n){return new Va(e,n)}Ei(){}di(e){return F.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>n.next((s=>r+s))))}wr(e){let n=0;return this.pr(e,(r=>{n++})).next((()=>n))}pr(e,n){return F.forEach(this.pi,((r,s)=>this.br(e,r,s).next((i=>i?F.resolve():n(s)))))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,(o=>this.br(e,o,n).next((c=>{c||(r++,i.removeEntry(o,he.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),F.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),F.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),F.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),F.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=ia(e.data.value)),n}br(e,n,r){return F.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.pi.get(n);return F.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class ih{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=s}static As(e,n){let r=Te(),s=Te();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new ih(e,n.fromCache,r,s)}}/**
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
 */class OO{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class NO{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return q0()?8:sk(Rt())>0?6:4})()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ys(e,n).next((o=>{i.result=o})).next((()=>{if(!i.result)return this.ws(e,n,s,r).next((o=>{i.result=o}))})).next((()=>{if(i.result)return;const o=new OO;return this.Ss(e,n,o).next((c=>{if(i.result=c,this.Vs)return this.bs(e,n,o,c.size)}))})).next((()=>i.result))}bs(e,n,r,s){return r.documentReadCount<this.fs?(fs()<=we.DEBUG&&ee("QueryEngine","SDK will not create cache indexes for query:",ds(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),F.resolve()):(fs()<=we.DEBUG&&ee("QueryEngine","Query:",ds(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(fs()<=we.DEBUG&&ee("QueryEngine","The SDK decides to create cache indexes for query:",ds(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Tn(n))):F.resolve())}ys(e,n){if(Mp(n))return F.resolve(null);let r=Tn(n);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(n.limit!==null&&s===1&&(n=Oa(n,null,"F"),r=Tn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const o=Te(...i);return this.ps.getDocuments(e,o).next((c=>this.indexManager.getMinOffset(e,r).next((l=>{const u=this.Ds(n,c);return this.Cs(n,u,o,l.readTime)?this.ys(e,Oa(n,null,"F")):this.vs(e,u,n,l)}))))})))))}ws(e,n,r,s){return Mp(n)||s.isEqual(he.min())?F.resolve(null):this.ps.getDocuments(e,r).next((i=>{const o=this.Ds(n,i);return this.Cs(n,o,r,s)?F.resolve(null):(fs()<=we.DEBUG&&ee("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ds(n)),this.vs(e,o,n,ZP(s,Ki)).next((c=>c)))}))}Ds(e,n){let r=new nt(cE(e));return n.forEach(((s,i)=>{gc(e,i)&&(r=r.add(i))})),r}Cs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,n,r){return fs()<=we.DEBUG&&ee("QueryEngine","Using full collection scan to execute query:",ds(n)),this.ps.getDocumentsMatchingQuery(e,n,gr.min(),r)}vs(e,n,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next((i=>(n.forEach((o=>{i=i.insert(o.key,o)})),i)))}}/**
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
 */const oh="LocalStore",DO=3e8;class VO{constructor(e,n,r,s){this.persistence=e,this.Fs=n,this.serializer=s,this.Ms=new He(ve),this.xs=new es((i=>Ju(i)),Yu),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new TO(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>e.collect(n,this.Ms)))}}function xO(t,e,n,r){return new VO(t,e,n,r)}async function NE(t,e){const n=de(t);return await n.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,n.Bs(e),n.mutationQueue.getAllMutationBatches(r)))).next((i=>{const o=[],c=[];let l=Te();for(const u of s){o.push(u.batchId);for(const f of u.mutations)l=l.add(f.key)}for(const u of i){c.push(u.batchId);for(const f of u.mutations)l=l.add(f.key)}return n.localDocuments.getDocuments(r,l).next((u=>({Ls:u,removedBatchIds:o,addedBatchIds:c})))}))}))}function MO(t,e){const n=de(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=n.Ns.newChangeBuffer({trackRemovals:!0});return(function(c,l,u,f){const p=u.batch,m=p.keys();let _=F.resolve();return m.forEach((w=>{_=_.next((()=>f.getEntry(l,w))).next((C=>{const S=u.docVersions.get(w);De(S!==null,48541),C.version.compareTo(S)<0&&(p.applyToRemoteDocument(C,u),C.isValidDocument()&&(C.setReadTime(u.commitVersion),f.addEntry(C)))}))})),_.next((()=>c.mutationQueue.removeMutationBatch(l,p)))})(n,r,e,i).next((()=>i.apply(r))).next((()=>n.mutationQueue.performConsistencyCheck(r))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(c){let l=Te();for(let u=0;u<c.mutationResults.length;++u)c.mutationResults[u].transformResults.length>0&&(l=l.add(c.batch.mutations[u].key));return l})(e)))).next((()=>n.localDocuments.getDocuments(r,s)))}))}function DE(t){const e=de(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>e.Pi.getLastRemoteSnapshotVersion(n)))}function LO(t,e){const n=de(t),r=e.snapshotVersion;let s=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});s=n.Ms;const c=[];e.targetChanges.forEach(((f,p)=>{const m=s.get(p);if(!m)return;c.push(n.Pi.removeMatchingKeys(i,f.removedDocuments,p).next((()=>n.Pi.addMatchingKeys(i,f.addedDocuments,p))));let _=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?_=_.withResumeToken(dt.EMPTY_BYTE_STRING,he.min()).withLastLimboFreeSnapshotVersion(he.min()):f.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(f.resumeToken,r)),s=s.insert(p,_),(function(C,S,$){return C.resumeToken.approximateByteSize()===0||S.snapshotVersion.toMicroseconds()-C.snapshotVersion.toMicroseconds()>=DO?!0:$.addedDocuments.size+$.modifiedDocuments.size+$.removedDocuments.size>0})(m,_,f)&&c.push(n.Pi.updateTargetData(i,_))}));let l=Wn(),u=Te();if(e.documentUpdates.forEach((f=>{e.resolvedLimboDocuments.has(f)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))})),c.push(FO(i,o,e.documentUpdates).next((f=>{l=f.ks,u=f.qs}))),!r.isEqual(he.min())){const f=n.Pi.getLastRemoteSnapshotVersion(i).next((p=>n.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r)));c.push(f)}return F.waitFor(c).next((()=>o.apply(i))).next((()=>n.localDocuments.getLocalViewOfDocuments(i,l,u))).next((()=>l))})).then((i=>(n.Ms=s,i)))}function FO(t,e,n){let r=Te(),s=Te();return n.forEach((i=>r=r.add(i))),e.getEntries(t,r).next((i=>{let o=Wn();return n.forEach(((c,l)=>{const u=i.get(c);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(he.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):ee(oh,"Ignoring outdated watch update for ",c,". Current version:",u.version," Watch version:",l.version)})),{ks:o,qs:s}}))}function UO(t,e){const n=de(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=Ku),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function BO(t,e){const n=de(t);return n.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return n.Pi.getTargetData(r,e).next((i=>i?(s=i,F.resolve(s)):n.Pi.allocateTargetId(r).next((o=>(s=new cr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=n.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r}))}async function su(t,e,n){const r=de(t),s=r.Ms.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,(o=>r.persistence.referenceDelegate.removeTarget(o,s)))}catch(o){if(!Ws(o))throw o;ee(oh,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function Qp(t,e,n){const r=de(t);let s=he.min(),i=Te();return r.persistence.runTransaction("Execute query","readwrite",(o=>(function(l,u,f){const p=de(l),m=p.xs.get(f);return m!==void 0?F.resolve(p.Ms.get(m)):p.Pi.getTargetData(u,f)})(r,o,Tn(e)).next((c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,c.targetId).next((l=>{i=l}))})).next((()=>r.Fs.getDocumentsMatchingQuery(o,e,n?s:he.min(),n?i:Te()))).next((c=>($O(r,bk(e),c),{documents:c,Qs:i})))))}function $O(t,e,n){let r=t.Os.get(e)||he.min();n.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),t.Os.set(e,r)}class Jp{constructor(){this.activeTargetIds=Ok()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class jO{constructor(){this.Mo=new Jp,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Jp,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class qO{Oo(e){}shutdown(){}}/**
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
 */const Yp="ConnectivityMonitor";class Xp{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){ee(Yp,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){ee(Yp,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let zo=null;function iu(){return zo===null?zo=(function(){return 268435456+Math.round(2147483648*Math.random())})():zo++,"0x"+zo.toString(16)}/**
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
 */const pl="RestConnection",zO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class HO{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===Ca?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,n,r,s,i){const o=iu(),c=this.zo(e,n.toUriEncodedString());ee(pl,`Sending RPC '${e}' ${o}:`,c,r);const l={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(l,s,i);const{host:u}=new URL(c),f=$s(u);return this.Jo(e,c,l,r,f).then((p=>(ee(pl,`Received RPC '${e}' ${o}: `,p),p)),(p=>{throw Ds(pl,`RPC '${e}' ${o} failed with error: `,p,"url: ",c,"request:",r),p}))}Ho(e,n,r,s,i,o){return this.Go(e,n,r,s,i)}jo(e,n,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+zs})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}zo(e,n){const r=zO[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
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
 */class WO{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const yt="WebChannelConnection";class KO extends HO{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,s,i){const o=iu();return new Promise(((c,l)=>{const u=new xy;u.setWithCredentials(!0),u.listenOnce(My.COMPLETE,(()=>{try{switch(u.getLastErrorCode()){case sa.NO_ERROR:const p=u.getResponseJson();ee(yt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),c(p);break;case sa.TIMEOUT:ee(yt,`RPC '${e}' ${o} timed out`),l(new X(L.DEADLINE_EXCEEDED,"Request time out"));break;case sa.HTTP_ERROR:const m=u.getStatus();if(ee(yt,`RPC '${e}' ${o} failed with status:`,m,"response text:",u.getResponseText()),m>0){let _=u.getResponseJson();Array.isArray(_)&&(_=_[0]);const w=_?.error;if(w&&w.status&&w.message){const C=(function($){const U=$.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(U)>=0?U:L.UNKNOWN})(w.status);l(new X(C,w.message))}else l(new X(L.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new X(L.UNAVAILABLE,"Connection failed."));break;default:ce(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{ee(yt,`RPC '${e}' ${o} completed.`)}}));const f=JSON.stringify(s);ee(yt,`RPC '${e}' ${o} sending request:`,s),u.send(n,"POST",f,r,15)}))}T_(e,n,r){const s=iu(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Uy(),c=Fy(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.jo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const f=i.join("");ee(yt,`Creating RPC '${e}' stream ${s}: ${f}`,l);const p=o.createWebChannel(f,l);this.I_(p);let m=!1,_=!1;const w=new WO({Yo:S=>{_?ee(yt,`Not sending because RPC '${e}' stream ${s} is closed:`,S):(m||(ee(yt,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),ee(yt,`RPC '${e}' stream ${s} sending:`,S),p.send(S))},Zo:()=>p.close()}),C=(S,$,U)=>{S.listen($,(j=>{try{U(j)}catch(z){setTimeout((()=>{throw z}),0)}}))};return C(p,gi.EventType.OPEN,(()=>{_||(ee(yt,`RPC '${e}' stream ${s} transport opened.`),w.o_())})),C(p,gi.EventType.CLOSE,(()=>{_||(_=!0,ee(yt,`RPC '${e}' stream ${s} transport closed`),w.a_(),this.E_(p))})),C(p,gi.EventType.ERROR,(S=>{_||(_=!0,Ds(yt,`RPC '${e}' stream ${s} transport errored. Name:`,S.name,"Message:",S.message),w.a_(new X(L.UNAVAILABLE,"The operation could not be completed")))})),C(p,gi.EventType.MESSAGE,(S=>{if(!_){const $=S.data[0];De(!!$,16349);const U=$,j=U?.error||U[0]?.error;if(j){ee(yt,`RPC '${e}' stream ${s} received error:`,j);const z=j.status;let oe=(function(y){const T=Ye[y];if(T!==void 0)return wE(T)})(z),me=j.message;oe===void 0&&(oe=L.INTERNAL,me="Unknown error status: "+z+" with message "+j.message),_=!0,w.a_(new X(oe,me)),p.close()}else ee(yt,`RPC '${e}' stream ${s} received:`,$),w.u_($)}})),C(c,Ly.STAT_EVENT,(S=>{S.stat===Kl.PROXY?ee(yt,`RPC '${e}' stream ${s} detected buffering proxy`):S.stat===Kl.NOPROXY&&ee(yt,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{w.__()}),0),w}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((n=>n===e))}}function ml(){return typeof document<"u"?document:null}/**
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
 */function wc(t){return new Yk(t,!0)}/**
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
 */class VE{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&ee("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const Zp="PersistentStream";class xE{constructor(e,n,r,s,i,o,c,l){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new VE(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===L.RESOURCE_EXHAUSTED?(Hn(n.toString()),Hn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.D_===n&&this.G_(r,s)}),(r=>{e((()=>{const s=new X(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)}))}))}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo((()=>{r((()=>this.listener.Xo()))})),this.stream.t_((()=>{r((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((s=>{r((()=>this.z_(s)))})),this.stream.onMessage((s=>{r((()=>++this.F_==1?this.J_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return ee(Zp,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget((()=>this.D_===e?n():(ee(Zp,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class GO extends xE{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=eO(this.serializer,e),r=(function(i){if(!("targetChange"in i))return he.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?he.min():o.readTime?In(o.readTime):he.min()})(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=ru(this.serializer),n.addTarget=(function(i,o){let c;const l=o.target;if(c=Xl(l)?{documents:rO(i,l)}:{query:sO(i,l).ft},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=IE(i,o.resumeToken);const u=eu(i,o.expectedCount);u!==null&&(c.expectedCount=u)}else if(o.snapshotVersion.compareTo(he.min())>0){c.readTime=Da(i,o.snapshotVersion.toTimestamp());const u=eu(i,o.expectedCount);u!==null&&(c.expectedCount=u)}return c})(this.serializer,e);const r=oO(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=ru(this.serializer),n.removeTarget=e,this.q_(n)}}class QO extends xE{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return De(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,De(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){De(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=nO(e.writeResults,e.commitTime),r=In(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=ru(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map((r=>tO(this.serializer,r)))};this.q_(n)}}/**
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
 */class JO{}class YO extends JO{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new X(L.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.Go(e,tu(n,r),s,i,o))).catch((i=>{throw i.name==="FirebaseError"?(i.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new X(L.UNKNOWN,i.toString())}))}Ho(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,c])=>this.connection.Ho(e,tu(n,r),s,o,c,i))).catch((o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new X(L.UNKNOWN,o.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class XO{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Hn(n),this.aa=!1):ee("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const Qr="RemoteStore";class ZO{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo((o=>{r.enqueueAndForget((async()=>{ns(this)&&(ee(Qr,"Restarting streams for network reachability change."),await(async function(l){const u=de(l);u.Ea.add(4),await _o(u),u.Ra.set("Unknown"),u.Ea.delete(4),await vc(u)})(this))}))})),this.Ra=new XO(r,s)}}async function vc(t){if(ns(t))for(const e of t.da)await e(!0)}async function _o(t){for(const e of t.da)await e(!1)}function ME(t,e){const n=de(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),uh(n)?lh(n):Gs(n).O_()&&ch(n,e))}function ah(t,e){const n=de(t),r=Gs(n);n.Ia.delete(e),r.O_()&&LE(n,e),n.Ia.size===0&&(r.O_()?r.L_():ns(n)&&n.Ra.set("Unknown"))}function ch(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(he.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Gs(t).Y_(e)}function LE(t,e){t.Va.Ue(e),Gs(t).Z_(e)}function lh(t){t.Va=new Kk({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Gs(t).start(),t.Ra.ua()}function uh(t){return ns(t)&&!Gs(t).x_()&&t.Ia.size>0}function ns(t){return de(t).Ea.size===0}function FE(t){t.Va=void 0}async function eN(t){t.Ra.set("Online")}async function tN(t){t.Ia.forEach(((e,n)=>{ch(t,e)}))}async function nN(t,e){FE(t),uh(t)?(t.Ra.ha(e),lh(t)):t.Ra.set("Unknown")}async function rN(t,e,n){if(t.Ra.set("Online"),e instanceof TE&&e.state===2&&e.cause)try{await(async function(s,i){const o=i.cause;for(const c of i.targetIds)s.Ia.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.Ia.delete(c),s.Va.removeTarget(c))})(t,e)}catch(r){ee(Qr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await xa(t,r)}else if(e instanceof ca?t.Va.Ze(e):e instanceof vE?t.Va.st(e):t.Va.tt(e),!n.isEqual(he.min()))try{const r=await DE(t.localStore);n.compareTo(r)>=0&&await(function(i,o){const c=i.Va.Tt(o);return c.targetChanges.forEach(((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.Ia.get(u);f&&i.Ia.set(u,f.withResumeToken(l.resumeToken,o))}})),c.targetMismatches.forEach(((l,u)=>{const f=i.Ia.get(l);if(!f)return;i.Ia.set(l,f.withResumeToken(dt.EMPTY_BYTE_STRING,f.snapshotVersion)),LE(i,l);const p=new cr(f.target,l,u,f.sequenceNumber);ch(i,p)})),i.remoteSyncer.applyRemoteEvent(c)})(t,n)}catch(r){ee(Qr,"Failed to raise snapshot:",r),await xa(t,r)}}async function xa(t,e,n){if(!Ws(e))throw e;t.Ea.add(1),await _o(t),t.Ra.set("Offline"),n||(n=()=>DE(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{ee(Qr,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await vc(t)}))}function UE(t,e){return e().catch((n=>xa(t,n,e)))}async function Tc(t){const e=de(t),n=wr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Ku;for(;sN(e);)try{const s=await UO(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,iN(e,s)}catch(s){await xa(e,s)}BE(e)&&$E(e)}function sN(t){return ns(t)&&t.Ta.length<10}function iN(t,e){t.Ta.push(e);const n=wr(t);n.O_()&&n.X_&&n.ea(e.mutations)}function BE(t){return ns(t)&&!wr(t).x_()&&t.Ta.length>0}function $E(t){wr(t).start()}async function oN(t){wr(t).ra()}async function aN(t){const e=wr(t);for(const n of t.Ta)e.ea(n.mutations)}async function cN(t,e,n){const r=t.Ta.shift(),s=eh.from(r,e,n);await UE(t,(()=>t.remoteSyncer.applySuccessfulWrite(s))),await Tc(t)}async function lN(t,e){e&&wr(t).X_&&await(async function(r,s){if((function(o){return zk(o)&&o!==L.ABORTED})(s.code)){const i=r.Ta.shift();wr(r).B_(),await UE(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await Tc(r)}})(t,e),BE(t)&&$E(t)}async function em(t,e){const n=de(t);n.asyncQueue.verifyOperationInProgress(),ee(Qr,"RemoteStore received new credentials");const r=ns(n);n.Ea.add(3),await _o(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await vc(n)}async function uN(t,e){const n=de(t);e?(n.Ea.delete(2),await vc(n)):e||(n.Ea.add(2),await _o(n),n.Ra.set("Unknown"))}function Gs(t){return t.ma||(t.ma=(function(n,r,s){const i=de(n);return i.sa(),new GO(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Xo:eN.bind(null,t),t_:tN.bind(null,t),r_:nN.bind(null,t),H_:rN.bind(null,t)}),t.da.push((async e=>{e?(t.ma.B_(),uh(t)?lh(t):t.Ra.set("Unknown")):(await t.ma.stop(),FE(t))}))),t.ma}function wr(t){return t.fa||(t.fa=(function(n,r,s){const i=de(n);return i.sa(),new QO(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:oN.bind(null,t),r_:lN.bind(null,t),ta:aN.bind(null,t),na:cN.bind(null,t)}),t.da.push((async e=>{e?(t.fa.B_(),await Tc(t)):(await t.fa.stop(),t.Ta.length>0&&(ee(Qr,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))}))),t.fa}/**
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
 */class hh{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Fr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,c=new hh(e,n,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new X(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function fh(t,e){if(Hn("AsyncQueue",`${e}: ${t}`),Ws(t))return new X(L.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Ss{static emptySet(e){return new Ss(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||re.comparator(n.key,r.key):(n,r)=>re.comparator(n.key,r.key),this.keyedMap=_i(),this.sortedSet=new He(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((n,r)=>(e(n),!1)))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ss)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((n=>{e.push(n.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ss;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class tm{constructor(){this.ga=new He(re.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):ce(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal(((n,r)=>{e.push(r)})),e}}class Fs{constructor(e,n,r,s,i,o,c,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach((c=>{o.push({type:0,doc:c})})),new Fs(e,n,Ss.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&mc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class hN{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class fN{constructor(){this.queries=nm(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=de(n),i=s.queries;s.queries=nm(),i.forEach(((o,c)=>{for(const l of c.Sa)l.onError(r)}))})(this,new X(L.ABORTED,"Firestore shutting down"))}}function nm(){return new es((t=>aE(t)),mc)}async function dN(t,e){const n=de(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new hN,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=fh(o,`Initialization of query '${ds(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.Sa.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&dh(n)}async function pN(t,e){const n=de(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function mN(t,e){const n=de(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.Sa)c.Fa(s)&&(r=!0);o.wa=s}}r&&dh(n)}function gN(t,e,n){const r=de(t),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(e)}function dh(t){t.Ca.forEach((e=>{e.next()}))}var ou,rm;(rm=ou||(ou={})).Ma="default",rm.Cache="cache";class _N{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Fs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Fs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==ou.Cache}}/**
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
 */class jE{constructor(e){this.key=e}}class qE{constructor(e){this.key=e}}class yN{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Te(),this.mutatedKeys=Te(),this.eu=cE(e),this.tu=new Ss(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new tm,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((f,p)=>{const m=s.get(f),_=gc(this.query,p)?p:null,w=!!m&&this.mutatedKeys.has(m.key),C=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let S=!1;m&&_?m.data.isEqual(_.data)?w!==C&&(r.track({type:3,doc:_}),S=!0):this.su(m,_)||(r.track({type:2,doc:_}),S=!0,(l&&this.eu(_,l)>0||u&&this.eu(_,u)<0)&&(c=!0)):!m&&_?(r.track({type:0,doc:_}),S=!0):m&&!_&&(r.track({type:1,doc:m}),S=!0,(l||u)&&(c=!0)),S&&(_?(o=o.add(_),i=C?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,Cs:c,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort(((f,p)=>(function(_,w){const C=S=>{switch(S){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ce(20277,{Rt:S})}};return C(_)-C(w)})(f.type,p.type)||this.eu(f.doc,p.doc))),this.ou(r),s=s??!1;const c=n&&!s?this._u():[],l=this.Xa.size===0&&this.current&&!s?1:0,u=l!==this.Za;return this.Za=l,o.length!==0||u?{snapshot:new Fs(this.query,e.tu,i,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new tm,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((n=>this.Ya=this.Ya.add(n))),e.modifiedDocuments.forEach((n=>{})),e.removedDocuments.forEach((n=>this.Ya=this.Ya.delete(n))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Te(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))}));const n=[];return e.forEach((r=>{this.Xa.has(r)||n.push(new qE(r))})),this.Xa.forEach((r=>{e.has(r)||n.push(new jE(r))})),n}cu(e){this.Ya=e.Qs,this.Xa=Te();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Fs.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const ph="SyncEngine";class EN{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class wN{constructor(e){this.key=e,this.hu=!1}}class vN{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new es((c=>aE(c)),mc),this.Iu=new Map,this.Eu=new Set,this.du=new He(re.comparator),this.Au=new Map,this.Ru=new rh,this.Vu={},this.mu=new Map,this.fu=Ls.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function TN(t,e,n=!0){const r=QE(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await zE(r,e,n,!0),s}async function IN(t,e){const n=QE(t);await zE(n,e,!0,!1)}async function zE(t,e,n,r){const s=await BO(t.localStore,Tn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let c;return r&&(c=await AN(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&ME(t.remoteStore,s),c}async function AN(t,e,n,r,s){t.pu=(p,m,_)=>(async function(C,S,$,U){let j=S.view.ru($);j.Cs&&(j=await Qp(C.localStore,S.query,!1).then((({documents:A})=>S.view.ru(A,j))));const z=U&&U.targetChanges.get(S.targetId),oe=U&&U.targetMismatches.get(S.targetId)!=null,me=S.view.applyChanges(j,C.isPrimaryClient,z,oe);return im(C,S.targetId,me.au),me.snapshot})(t,p,m,_);const i=await Qp(t.localStore,e,!0),o=new yN(e,i.Qs),c=o.ru(i.documents),l=go.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(c,t.isPrimaryClient,l);im(t,n,u.au);const f=new EN(e,n,o);return t.Tu.set(e,f),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),u.snapshot}async function bN(t,e,n){const r=de(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter((o=>!mc(o,e)))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await su(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),n&&ah(r.remoteStore,s.targetId),au(r,s.targetId)})).catch(Hs)):(au(r,s.targetId),await su(r.localStore,s.targetId,!0))}async function RN(t,e){const n=de(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),ah(n.remoteStore,r.targetId))}async function SN(t,e,n){const r=VN(t);try{const s=await(function(o,c){const l=de(o),u=Be.now(),f=c.reduce(((_,w)=>_.add(w.key)),Te());let p,m;return l.persistence.runTransaction("Locally write mutations","readwrite",(_=>{let w=Wn(),C=Te();return l.Ns.getEntries(_,f).next((S=>{w=S,w.forEach((($,U)=>{U.isValidDocument()||(C=C.add($))}))})).next((()=>l.localDocuments.getOverlayedDocuments(_,w))).next((S=>{p=S;const $=[];for(const U of c){const j=Uk(U,p.get(U.key).overlayedDocument);j!=null&&$.push(new ts(U.key,j,Zy(j.value.mapValue),Un.exists(!0)))}return l.mutationQueue.addMutationBatch(_,u,$,c)})).next((S=>{m=S;const $=S.applyToLocalDocumentSet(p,C);return l.documentOverlayCache.saveOverlays(_,S.batchId,$)}))})).then((()=>({batchId:m.batchId,changes:uE(p)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(o,c,l){let u=o.Vu[o.currentUser.toKey()];u||(u=new He(ve)),u=u.insert(c,l),o.Vu[o.currentUser.toKey()]=u})(r,s.batchId,n),await yo(r,s.changes),await Tc(r.remoteStore)}catch(s){const i=fh(s,"Failed to persist write");n.reject(i)}}async function HE(t,e){const n=de(t);try{const r=await LO(n.localStore,e);e.targetChanges.forEach(((s,i)=>{const o=n.Au.get(i);o&&(De(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?De(o.hu,14607):s.removedDocuments.size>0&&(De(o.hu,42227),o.hu=!1))})),await yo(n,r,e)}catch(r){await Hs(r)}}function sm(t,e,n){const r=de(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach(((i,o)=>{const c=o.view.va(e);c.snapshot&&s.push(c.snapshot)})),(function(o,c){const l=de(o);l.onlineState=c;let u=!1;l.queries.forEach(((f,p)=>{for(const m of p.Sa)m.va(c)&&(u=!0)})),u&&dh(l)})(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function CN(t,e,n){const r=de(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new He(re.comparator);o=o.insert(i,vt.newNoDocument(i,he.min()));const c=Te().add(i),l=new Ec(he.min(),new Map,new He(ve),o,c);await HE(r,l),r.du=r.du.remove(i),r.Au.delete(e),mh(r)}else await su(r.localStore,e,!1).then((()=>au(r,e,n))).catch(Hs)}async function PN(t,e){const n=de(t),r=e.batch.batchId;try{const s=await MO(n.localStore,e);KE(n,r,null),WE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await yo(n,s)}catch(s){await Hs(s)}}async function kN(t,e,n){const r=de(t);try{const s=await(function(o,c){const l=de(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",(u=>{let f;return l.mutationQueue.lookupMutationBatch(u,c).next((p=>(De(p!==null,37113),f=p.keys(),l.mutationQueue.removeMutationBatch(u,p)))).next((()=>l.mutationQueue.performConsistencyCheck(u))).next((()=>l.documentOverlayCache.removeOverlaysForBatchId(u,f,c))).next((()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f))).next((()=>l.localDocuments.getDocuments(u,f)))}))})(r.localStore,e);KE(r,e,n),WE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await yo(r,s)}catch(s){await Hs(s)}}function WE(t,e){(t.mu.get(e)||[]).forEach((n=>{n.resolve()})),t.mu.delete(e)}function KE(t,e,n){const r=de(t);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function au(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach((r=>{t.Ru.containsKey(r)||GE(t,r)}))}function GE(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(ah(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),mh(t))}function im(t,e,n){for(const r of n)r instanceof jE?(t.Ru.addReference(r.key,e),ON(t,r)):r instanceof qE?(ee(ph,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||GE(t,r.key)):ce(19791,{wu:r})}function ON(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(ee(ph,"New document in limbo: "+n),t.Eu.add(r),mh(t))}function mh(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new re(Fe.fromString(e)),r=t.fu.next();t.Au.set(r,new wN(n)),t.du=t.du.insert(n,r),ME(t.remoteStore,new cr(Tn(Xu(n.path)),r,"TargetPurposeLimboResolution",fc.ce))}}async function yo(t,e,n){const r=de(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach(((c,l)=>{o.push(r.pu(l,e,n).then((u=>{if((u||n)&&r.isPrimaryClient){const f=u?!u.fromCache:n?.targetChanges.get(l.targetId)?.current;r.sharedClientState.updateQueryState(l.targetId,f?"current":"not-current")}if(u){s.push(u);const f=ih.As(l.targetId,u);i.push(f)}})))})),await Promise.all(o),r.Pu.H_(s),await(async function(l,u){const f=de(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>F.forEach(u,(m=>F.forEach(m.Es,(_=>f.persistence.referenceDelegate.addReference(p,m.targetId,_))).next((()=>F.forEach(m.ds,(_=>f.persistence.referenceDelegate.removeReference(p,m.targetId,_)))))))))}catch(p){if(!Ws(p))throw p;ee(oh,"Failed to update sequence numbers: "+p)}for(const p of u){const m=p.targetId;if(!p.fromCache){const _=f.Ms.get(m),w=_.snapshotVersion,C=_.withLastLimboFreeSnapshotVersion(w);f.Ms=f.Ms.insert(m,C)}}})(r.localStore,i))}async function NN(t,e){const n=de(t);if(!n.currentUser.isEqual(e)){ee(ph,"User change. New user:",e.toKey());const r=await NE(n.localStore,e);n.currentUser=e,(function(i,o){i.mu.forEach((c=>{c.forEach((l=>{l.reject(new X(L.CANCELLED,o))}))})),i.mu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await yo(n,r.Ls)}}function DN(t,e){const n=de(t),r=n.Au.get(e);if(r&&r.hu)return Te().add(r.key);{let s=Te();const i=n.Iu.get(e);if(!i)return s;for(const o of i){const c=n.Tu.get(o);s=s.unionWith(c.view.nu)}return s}}function QE(t){const e=de(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=HE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=DN.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=CN.bind(null,e),e.Pu.H_=mN.bind(null,e.eventManager),e.Pu.yu=gN.bind(null,e.eventManager),e}function VN(t){const e=de(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=PN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=kN.bind(null,e),e}class Ma{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=wc(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return xO(this.persistence,new NO,e.initialUser,this.serializer)}Cu(e){return new OE(sh.mi,this.serializer)}Du(e){return new jO}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ma.provider={build:()=>new Ma};class xN extends Ma{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){De(this.persistence.referenceDelegate instanceof Va,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new _O(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?Vt.withCacheSize(this.cacheSizeBytes):Vt.DEFAULT;return new OE((r=>Va.mi(r,n)),this.serializer)}}class cu{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>sm(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=NN.bind(null,this.syncEngine),await uN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new fN})()}createDatastore(e){const n=wc(e.databaseInfo.databaseId),r=(function(i){return new KO(i)})(e.databaseInfo);return(function(i,o,c,l){return new YO(i,o,c,l)})(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return(function(r,s,i,o,c){return new ZO(r,s,i,o,c)})(this.localStore,this.datastore,e.asyncQueue,(n=>sm(this.syncEngine,n,0)),(function(){return Xp.v()?new Xp:new qO})())}createSyncEngine(e,n){return(function(s,i,o,c,l,u,f){const p=new vN(s,i,o,c,l,u);return f&&(p.gu=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){await(async function(n){const r=de(n);ee(Qr,"RemoteStore shutting down."),r.Ea.add(5),await _o(r),r.Aa.shutdown(),r.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}cu.provider={build:()=>new cu};/**
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
 */class MN{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Hn("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout((()=>{this.muted||e(n)}),0)}}/**
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
 */const vr="FirestoreClient";class LN{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Et.UNAUTHENTICATED,this.clientId=Wu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async o=>{ee(vr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(r,(o=>(ee(vr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Fr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=fh(n,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function gl(t,e){t.asyncQueue.verifyOperationInProgress(),ee(vr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async s=>{r.isEqual(s)||(await NE(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function om(t,e){t.asyncQueue.verifyOperationInProgress();const n=await FN(t);ee(vr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((r=>em(e.remoteStore,r))),t.setAppCheckTokenChangeListener(((r,s)=>em(e.remoteStore,s))),t._onlineComponents=e}async function FN(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ee(vr,"Using user provided OfflineComponentProvider");try{await gl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!(function(s){return s.name==="FirebaseError"?s.code===L.FAILED_PRECONDITION||s.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(n))throw n;Ds("Error using user provided cache. Falling back to memory cache: "+n),await gl(t,new Ma)}}else ee(vr,"Using default OfflineComponentProvider"),await gl(t,new xN(void 0));return t._offlineComponents}async function JE(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ee(vr,"Using user provided OnlineComponentProvider"),await om(t,t._uninitializedComponentsProvider._online)):(ee(vr,"Using default OnlineComponentProvider"),await om(t,new cu))),t._onlineComponents}function UN(t){return JE(t).then((e=>e.syncEngine))}async function am(t){const e=await JE(t),n=e.eventManager;return n.onListen=TN.bind(null,e.syncEngine),n.onUnlisten=bN.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=IN.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=RN.bind(null,e.syncEngine),n}/**
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
 */function YE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const cm=new Map;/**
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
 */const XE="firestore.googleapis.com",lm=!0;class um{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new X(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=XE,this.ssl=lm}else this.host=e.host,this.ssl=e.ssl??lm;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=kE;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<mO)throw new X(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}XP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=YE(e.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new X(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new X(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new X(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ic{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new um({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new X(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new X(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new um(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new jP;switch(r.type){case"firstParty":return new WP(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new X(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const r=cm.get(n);r&&(ee("ComponentProvider","Removing Datastore"),cm.delete(n),r.terminate())})(this),Promise.resolve()}}function BN(t,e,n,r={}){t=Oi(t,Ic);const s=$s(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},c=`${e}:${n}`;s&&(E_(`https://${c}`),w_("Firestore",!0)),i.host!==XE&&i.host!==c&&Ds("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...i,host:c,ssl:s,emulatorOptions:r};if(!qr(l,o)&&(t._setSettings(l),r.mockUserToken)){let u,f;if(typeof r.mockUserToken=="string")u=r.mockUserToken,f=Et.MOCK_USER;else{u=x0(r.mockUserToken,t._app?.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new X(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new Et(p)}t._authCredentials=new qP(new $y(u,f))}}/**
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
 */class Ar{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ar(this.firestore,e,this._query)}}class tt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new pr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new tt(this.firestore,e,this._key)}toJSON(){return{type:tt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(po(n,tt._jsonSchema))return new tt(e,r||null,new re(Fe.fromString(n.referencePath)))}}tt._jsonSchemaVersion="firestore/documentReference/1.0",tt._jsonSchema={type:Ze("string",tt._jsonSchemaVersion),referencePath:Ze("string")};class pr extends Ar{constructor(e,n,r){super(e,n,Xu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new tt(this.firestore,null,new re(e))}withConverter(e){return new pr(this.firestore,e,this._path)}}function hm(t,e,...n){if(t=Ot(t),jy("collection","path",e),t instanceof Ic){const r=Fe.fromString(e,...n);return Tp(r),new pr(t,null,r)}{if(!(t instanceof tt||t instanceof pr))throw new X(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Fe.fromString(e,...n));return Tp(r),new pr(t.firestore,null,r)}}function $N(t,e,...n){if(t=Ot(t),arguments.length===1&&(e=Wu.newId()),jy("doc","path",e),t instanceof Ic){const r=Fe.fromString(e,...n);return vp(r),new tt(t,null,new re(r))}{if(!(t instanceof tt||t instanceof pr))throw new X(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Fe.fromString(e,...n));return vp(r),new tt(t.firestore,t instanceof pr?t.converter:null,new re(r))}}/**
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
 */const fm="AsyncQueue";class dm{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new VE(this,"async_queue_retry"),this._c=()=>{const r=ml();r&&ee(fm,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=ml();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=ml();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const n=new Fr;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Ws(e))throw e;ee(fm,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const n=this.ac.then((()=>(this.rc=!0,e().catch((r=>{throw this.nc=r,this.rc=!1,Hn("INTERNAL UNHANDLED ERROR: ",pm(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=hh.createAndSchedule(this,e,n,r,(i=>this.hc(i)));return this.tc.push(s),s}uc(){this.nc&&ce(47125,{Pc:pm(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((n,r)=>n.targetTimeMs-r.targetTimeMs));for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function pm(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}/**
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
 */function mm(t){return(function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1})(t,["next","error","complete"])}class La extends Ic{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new dm,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new dm(e),this._firestoreClient=void 0,await e}}}function jN(t,e){const n=C_(),r=Ca,s=co(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=D0("firestore");i&&BN(s,...i)}return s}function ZE(t){if(t._terminated)throw new X(L.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||qN(t),t._firestoreClient}function qN(t){const e=t._freezeSettings(),n=(function(s,i,o,c){return new lk(s,i,o,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,YE(c.experimentalLongPollingOptions),c.useFetchStreams,c.isUsingEmulator)})(t._databaseId,t._app?.options.appId||"",t._persistenceKey,e);t._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new LN(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&(function(s){const i=s?._online.build();return{_offline:s?._offline.build(i),_online:i}})(t._componentsProvider))}/**
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
 */class Gt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Gt(dt.fromBase64String(e))}catch(n){throw new X(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Gt(dt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Gt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(po(e,Gt._jsonSchema))return Gt.fromBase64String(e.bytes)}}Gt._jsonSchemaVersion="firestore/bytes/1.0",Gt._jsonSchema={type:Ze("string",Gt._jsonSchemaVersion),bytes:Ze("string")};/**
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
 */class gh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new X(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ht(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class _h{constructor(e){this._methodName=e}}/**
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
 */class An{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new X(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new X(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ve(this._lat,e._lat)||ve(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:An._jsonSchemaVersion}}static fromJSON(e){if(po(e,An._jsonSchema))return new An(e.latitude,e.longitude)}}An._jsonSchemaVersion="firestore/geoPoint/1.0",An._jsonSchema={type:Ze("string",An._jsonSchemaVersion),latitude:Ze("number"),longitude:Ze("number")};/**
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
 */class bn{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:bn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(po(e,bn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new bn(e.vectorValues);throw new X(L.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}bn._jsonSchemaVersion="firestore/vectorValue/1.0",bn._jsonSchema={type:Ze("string",bn._jsonSchemaVersion),vectorValues:Ze("object")};/**
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
 */const zN=/^__.*__$/;class HN{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ts(e,this.data,this.fieldMask,n,this.fieldTransforms):new mo(e,this.data,n,this.fieldTransforms)}}function ew(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ce(40011,{Ac:t})}}class yh{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new yh({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const n=this.path?.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){const n=this.path?.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Fa(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((n=>e.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>e.isPrefixOf(n.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(ew(this.Ac)&&zN.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class WN{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||wc(e)}Cc(e,n,r,s=!1){return new yh({Ac:e,methodName:n,Dc:r,path:ht.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function tw(t){const e=t._freezeSettings(),n=wc(t._databaseId);return new WN(t._databaseId,!!e.ignoreUndefinedProperties,n)}function KN(t,e,n,r,s,i={}){const o=t.Cc(i.merge||i.mergeFields?2:0,e,n,s);sw("Data must be an object, but it was:",o,r);const c=nw(r,o);let l,u;if(i.merge)l=new sn(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const m=QN(e,p,n);if(!o.contains(m))throw new X(L.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);YN(f,m)||f.push(m)}l=new sn(f),u=o.fieldTransforms.filter((p=>l.covers(p.field)))}else l=null,u=o.fieldTransforms;return new HN(new Kt(c),l,u)}class Eh extends _h{_toFieldTransform(e){return new xk(e.path,new Xi)}isEqual(e){return e instanceof Eh}}function GN(t,e,n,r=!1){return wh(n,t.Cc(r?4:3,e))}function wh(t,e){if(rw(t=Ot(t)))return sw("Unsupported field value:",e,t),nw(t,e);if(t instanceof _h)return(function(r,s){if(!ew(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(r,s){const i=[];let o=0;for(const c of r){let l=wh(c,s.wc(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}})(t,e)}return(function(r,s){if((r=Ot(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Nk(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Be.fromDate(r);return{timestampValue:Da(s.serializer,i)}}if(r instanceof Be){const i=new Be(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Da(s.serializer,i)}}if(r instanceof An)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Gt)return{bytesValue:IE(s.serializer,r._byteString)};if(r instanceof tt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:nh(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof bn)return(function(o,c){return{mapValue:{fields:{[Yy]:{stringValue:Xy},[Pa]:{arrayValue:{values:o.toArray().map((u=>{if(typeof u!="number")throw c.Sc("VectorValues must only contain numeric values.");return Zu(c.serializer,u)}))}}}}}})(r,s);throw s.Sc(`Unsupported field value: ${hc(r)}`)})(t,e)}function nw(t,e){const n={};return Hy(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Zr(t,((r,s)=>{const i=wh(s,e.mc(r));i!=null&&(n[r]=i)})),{mapValue:{fields:n}}}function rw(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Be||t instanceof An||t instanceof Gt||t instanceof tt||t instanceof _h||t instanceof bn)}function sw(t,e,n){if(!rw(n)||!qy(n)){const r=hc(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function QN(t,e,n){if((e=Ot(e))instanceof gh)return e._internalPath;if(typeof e=="string")return iw(t,e);throw Fa("Field path arguments must be of type string or ",t,!1,void 0,n)}const JN=new RegExp("[~\\*/\\[\\]]");function iw(t,e,n){if(e.search(JN)>=0)throw Fa(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new gh(...e.split("."))._internalPath}catch{throw Fa(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Fa(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new X(L.INVALID_ARGUMENT,c+t+l)}function YN(t,e){return t.some((n=>n.isEqual(e)))}/**
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
 */class ow{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new tt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new XN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(vh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class XN extends ow{data(){return super.data()}}function vh(t,e){return typeof e=="string"?iw(t,e):e instanceof gh?e._internalPath:e._delegate._internalPath}/**
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
 */function ZN(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new X(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Th{}class Ih extends Th{}function eD(t,e,...n){let r=[];e instanceof Th&&r.push(e),r=r.concat(n),(function(i){const o=i.filter((l=>l instanceof bh)).length,c=i.filter((l=>l instanceof Ah)).length;if(o>1||o>0&&c>0)throw new X(L.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)t=s._apply(t);return t}class Ah extends Ih{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Ah(e,n,r)}_apply(e){const n=this._parse(e);return aw(e._query,n),new Ar(e.firestore,e.converter,Zl(e._query,n))}_parse(e){const n=tw(e.firestore);return(function(i,o,c,l,u,f,p){let m;if(u.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new X(L.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){_m(p,f);const w=[];for(const C of p)w.push(gm(l,i,C));m={arrayValue:{values:w}}}else m=gm(l,i,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||_m(p,f),m=GN(c,o,p,f==="in"||f==="not-in");return Xe.create(u,f,m)})(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class bh extends Th{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new bh(e,n)}_parse(e){const n=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return n.length===1?n[0]:un.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:((function(s,i){let o=s;const c=i.getFlattenedFilters();for(const l of c)aw(o,l),o=Zl(o,l)})(e._query,n),new Ar(e.firestore,e.converter,Zl(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Rh extends Ih{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Rh(e,n)}_apply(e){const n=(function(s,i,o){if(s.startAt!==null)throw new X(L.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new X(L.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Yi(i,o)})(e._query,this._field,this._direction);return new Ar(e.firestore,e.converter,(function(s,i){const o=s.explicitOrderBy.concat([i]);return new Ks(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)})(e._query,n))}}function tD(t,e="asc"){const n=e,r=vh("orderBy",t);return Rh._create(r,n)}class Sh extends Ih{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Sh(e,n,r)}_apply(e){return new Ar(e.firestore,e.converter,Oa(e._query,this._limit,this._limitType))}}function nD(t){return Sh._create("limit",t,"F")}function gm(t,e,n){if(typeof(n=Ot(n))=="string"){if(n==="")throw new X(L.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!oE(e)&&n.indexOf("/")!==-1)throw new X(L.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Fe.fromString(n));if(!re.isDocumentKey(r))throw new X(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return kp(t,new re(r))}if(n instanceof tt)return kp(t,n._key);throw new X(L.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${hc(n)}.`)}function _m(t,e){if(!Array.isArray(t)||t.length===0)throw new X(L.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function aw(t,e){const n=(function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null})(t.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(n!==null)throw n===e.op?new X(L.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new X(L.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class rD{convertValue(e,n="none"){switch(Er(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Je(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(yr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ce(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Zr(e,((s,i)=>{r[s]=this.convertValue(i,n)})),r}convertVectorValue(e){const n=e.fields?.[Pa].arrayValue?.values?.map((r=>Je(r.doubleValue)));return new bn(n)}convertGeoPoint(e){return new An(Je(e.latitude),Je(e.longitude))}convertArray(e,n){return(e.values||[]).map((r=>this.convertValue(r,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const r=pc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Gi(e));default:return null}}convertTimestamp(e){const n=_r(e);return new Be(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Fe.fromString(e);De(PE(r),9688,{name:e});const s=new Qi(r.get(1),r.get(3)),i=new re(r.popFirst(5));return s.isEqual(n)||Hn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function sD(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class Ei{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ur extends ow{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new la(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(vh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new X(L.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Ur._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Ur._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ur._jsonSchema={type:Ze("string",Ur._jsonSchemaVersion),bundleSource:Ze("string","DocumentSnapshot"),bundleName:Ze("string"),bundle:Ze("string")};class la extends Ur{data(e={}){return super.data(e)}}class Cs{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Ei(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((r=>{e.call(n,new la(this._firestore,this._userDataWriter,r.key,r,new Ei(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new X(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map((c=>{const l=new la(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Ei(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}}))}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((c=>i||c.type!==3)).map((c=>{const l=new la(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Ei(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,f=-1;return c.type!==0&&(u=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:iD(c.type),doc:l,oldIndex:u,newIndex:f}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new X(L.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Cs._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Wu.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function iD(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ce(61501,{type:t})}}Cs._jsonSchemaVersion="firestore/querySnapshot/1.0",Cs._jsonSchema={type:Ze("string",Cs._jsonSchemaVersion),bundleSource:Ze("string","QuerySnapshot"),bundleName:Ze("string"),bundle:Ze("string")};class cw extends rD{constructor(e){super(),this.firestore=e}convertBytes(e){return new Gt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new tt(this.firestore,null,n)}}function oD(t,e){const n=Oi(t.firestore,La),r=$N(t),s=sD(t.converter,e);return cD(n,[KN(tw(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Un.exists(!1))]).then((()=>r))}function aD(t,...e){t=Ot(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||mm(e[r])||(n=e[r++]);const s={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(mm(e[r])){const l=e[r];e[r]=l.next?.bind(l),e[r+1]=l.error?.bind(l),e[r+2]=l.complete?.bind(l)}let i,o,c;if(t instanceof tt)o=Oi(t.firestore,La),c=Xu(t._key.path),i={next:l=>{e[r]&&e[r](lD(o,t,l))},error:e[r+1],complete:e[r+2]};else{const l=Oi(t,Ar);o=Oi(l.firestore,La),c=l._query;const u=new cw(o);i={next:f=>{e[r]&&e[r](new Cs(o,u,l,f))},error:e[r+1],complete:e[r+2]},ZN(t._query)}return(function(u,f,p,m){const _=new MN(m),w=new _N(f,_,p);return u.asyncQueue.enqueueAndForget((async()=>dN(await am(u),w))),()=>{_.Nu(),u.asyncQueue.enqueueAndForget((async()=>pN(await am(u),w)))}})(ZE(o),c,s,i)}function cD(t,e){return(function(r,s){const i=new Fr;return r.asyncQueue.enqueueAndForget((async()=>SN(await UN(r),s,i))),i.promise})(ZE(t),e)}function lD(t,e,n){const r=n.docs.get(e._key),s=new cw(t);return new Ur(t,s,e._key,r,new Ei(n.hasPendingWrites,n.fromCache),e.converter)}function uD(){return new Eh("serverTimestamp")}(function(e,n=!0){(function(s){zs=s})(js),Sn(new cn("firestore",((r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new La(new zP(r.getProvider("auth-internal")),new KP(o,r.getProvider("app-check-internal")),(function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new X(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Qi(u.options.projectId,f)})(o,s),o);return i={useFetchStreams:n,...i},c._setSettings(i),c}),"PUBLIC").setMultipleInstances(!0)),Jt(_p,yp,e),Jt(_p,yp,"esm2020")})();const hD={apiKey:"AIzaSyAOpsFMuCswZlQ3X2vce5DcRyyHZIedjrU",authDomain:"week7-yashaswi.firebaseapp.com",projectId:"week7-yashaswi",storageBucket:"week7-yashaswi.firebasestorage.app",messagingSenderId:"541719588687",appId:"1:541719588687:web:89dfb5095870b73c3d1f3a",measurementId:"G-N065EBPCJ8"};S_(hD);const ym=jN(),fD={name:"AddBookView",setup(){const t=ur(""),e=ur(""),n=ur([]);return ng(()=>{const s=eD(hm(ym,"books"),tD("createdAt","desc"),nD(5));aD(s,i=>{n.value=i.docs.map(o=>({id:o.id,...o.data()}))})}),{isbn:t,name:e,books:n,addBook:async()=>{const s=Number(t.value);if(Number.isNaN(s)){alert("ISBN must be a valid number");return}try{await oD(hm(ym,"books"),{isbn:s,name:e.value,createdAt:uD()}),t.value="",e.value="",alert("Book added successfully!")}catch(i){console.error("Error adding book:",i),alert("Write failed—check console")}}}}},dD={class:"container"},pD={class:"field"},mD={class:"field"};function gD(t,e,n,r,s,i){return $e(),Ge("div",dD,[e[6]||(e[6]=W("h1",null,"Add Book",-1)),W("form",{onSubmit:e[2]||(e[2]=QT((...o)=>r.addBook&&r.addBook(...o),["prevent"])),class:"form"},[W("div",pD,[e[3]||(e[3]=W("label",{for:"isbn"},"ISBN",-1)),Br(W("input",{id:"isbn","onUpdate:modelValue":e[0]||(e[0]=o=>r.isbn=o),type:"text",required:""},null,512),[[$r,r.isbn]])]),W("div",mD,[e[4]||(e[4]=W("label",{for:"name"},"Name",-1)),Br(W("input",{id:"name","onUpdate:modelValue":e[1]||(e[1]=o=>r.name=o),type:"text",required:""},null,512),[[$r,r.name]])]),e[5]||(e[5]=W("button",{type:"submit"},"Add Book",-1))],32),e[7]||(e[7]=W("h3",null,"Latest Books",-1)),W("ul",null,[($e(!0),Ge(st,null,Lv(r.books,o=>($e(),Ge("li",{key:o.id},"ISBN: "+nn(o.isbn)+" — NAME: "+nn(o.name),1))),128))])])}const _D=Zt(fD,[["render",gD],["__scopeId","data-v-eb791858"]]),yD={data(){return{count:null,error:null}},methods:{async getBookCount(){try{const t=await ze.get("https://countbooks-udrwjox7ya-uc.a.run.app");this.count=t.data.count,this.error=null}catch(t){console.error("Error fetching book count:",t),this.error=t,this.count=null}}}},ED={id:"app"},wD={key:0},vD={key:1};function TD(t,e,n,r,s,i){return $e(),Ge("div",ED,[e[1]||(e[1]=W("h1",null,"Book Counter",-1)),W("button",{onClick:e[0]||(e[0]=(...o)=>i.getBookCount&&i.getBookCount(...o))},"Get Book Count"),s.count!==null?($e(),Ge("p",wD,"Total number of books: "+nn(s.count),1)):ma("",!0),s.error?($e(),Ge("p",vD,nn(s.error),1)):ma("",!0)])}const ID=Zt(yD,[["render",TD]]),AD="3e0b507091cf4e612ef732d98c1d4b2b",bD={name:"App",data(){return{city:"",weatherData:null,hourlyForecast:[],dailyForecast:[]}},computed:{temperature(){return this.weatherData?Math.floor(this.weatherData.main.temp-273):null},iconUrl(){return this.weatherData?`http://api.openweathermap.org/img/w/${this.weatherData.weather[0].icon}.png`:null}},mounted(){this.fetchCurrentLocationWeather()},methods:{async fetchCurrentLocationWeather(){navigator.geolocation&&navigator.geolocation.getCurrentPosition(async t=>{const{latitude:e,longitude:n}=t.coords,r=`http://api.openweathermap.org/data/2.5/weather?lat=${e}&lon=${n}&appid=${AD}`;await this.fetchWeatherData(r)})},async fetchWeatherData(t){try{const e=await ze.get(t);this.weatherData=e.data}catch(e){console.error("Error fetching weather data:",e)}}}},RD={class:"container"},SD={class:"header"},CD={class:"search-bar"},PD={key:0},kD=["src"];function OD(t,e,n,r,s,i){return $e(),Ge(st,null,[W("div",RD,[W("div",SD,[e[2]||(e[2]=W("h1",null,"WEATHER APP",-1)),W("div",CD,[Br(W("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=o=>s.city=o),placeholder:"Enter city name",class:"search-input"},null,512),[[$r,s.city]]),W("button",{onClick:e[1]||(e[1]=(...o)=>t.searchByCity&&t.searchByCity(...o)),class:"search-button"},"Search")])])]),W("main",null,[s.weatherData?($e(),Ge("div",PD,[W("h2",null,nn(s.weatherData.name)+", "+nn(s.weatherData.sys.country),1),W("div",null,[W("img",{src:i.iconUrl,alt:"Weather Icon"},null,8,kD),W("p",null,nn(i.temperature)+" °C",1)]),W("span",null,nn(s.weatherData.weather[0].description),1)])):ma("",!0)])],64)}const ND=Zt(bD,[["render",OD]]),DD=nA({history:OI("/"),routes:[{path:"/",name:"home",component:A0},{path:"/about",name:"about",component:()=>X1(()=>import("./AboutView-Dj8z-sbx.js"),__vite__mapDeps([0,1]))},{path:"/FireLogin",name:"/FireLogin",component:vC},{path:"/FireRegister",name:"/FireRegister",component:TC},{path:"/addbook",name:"AddBook",component:_D},{path:"/GetBookCount",name:"GetBookCount",component:ID},{path:"/WeatherCheck",name:"WeatherCheck",component:ND},{path:"/CountBookAPI",name:"CountBookAPI",component:f_}]}),lw=XT(Q1);lw.use(DD);lw.mount("#app");export{Zt as _,W as a,Ge as c,$e as o};
