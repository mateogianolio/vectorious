var v=(()=>{var O=Object.defineProperty,go=Object.prototype.hasOwnProperty;var C=(r,e)=>()=>(e||(e={exports:{}},r(e.exports,e)),e.exports),Re=r=>O(r,"__esModule",{value:!0}),wo=(r,e)=>{Re(r);for(var t in e)O(r,t,{get:e[t],enumerable:!0})},vo=(r,e)=>{if(Re(r),typeof e=="object"||typeof e=="function")for(let t in e)!go.call(r,t)&&t!=="default"&&O(r,t,{get:()=>e[t],enumerable:!0});return r},Io=r=>r&&r.__esModule?r:vo(O({},"default",{value:r,enumerable:!0}),r);var po=C((Rm,co)=>{co.exports=function(e){return e&&typeof e=="object"&&typeof e.copy=="function"&&typeof e.fill=="function"&&typeof e.readUInt8=="function"}});var uo=C((Mm,de)=>{typeof Object.create=="function"?de.exports=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:de.exports=function(e,t){e.super_=t;var o=function(){};o.prototype=t.prototype,e.prototype=new o,e.prototype.constructor=e}});var ho=C(d=>{var ea=/%[sdj%]/g;d.format=function(r){if(!F(r)){for(var e=[],t=0;t<arguments.length;t++)e.push(v(arguments[t]));return e.join(" ")}for(var t=1,o=arguments,n=o.length,a=String(r).replace(ea,function(m){if(m==="%%")return"%";if(t>=n)return m;switch(m){case"%s":return String(o[t++]);case"%d":return Number(o[t++]);case"%j":try{return JSON.stringify(o[t++])}catch(c){return"[Circular]"}default:return m}}),s=o[t];t<n;s=o[++t])P(s)||!T(s)?a+=" "+s:a+=" "+v(s);return a};d.deprecate=function(r,e){if(g(global.process))return function(){return d.deprecate(r,e).apply(this,arguments)};if(process.noDeprecation===!0)return r;var t=!1;function o(){if(!t){if(process.throwDeprecation)throw new Error(e);process.traceDeprecation?console.trace(e):console.error(e),t=!0}return r.apply(this,arguments)}return o};var _={},he;d.debuglog=function(r){if(g(he)&&(he=process.env.NODE_DEBUG||""),r=r.toUpperCase(),!_[r])if(new RegExp("\\b"+r+"\\b","i").test(he)){var e=process.pid;_[r]=function(){var t=d.format.apply(d,arguments);console.error("%s %d: %s",r,e,t)}}else _[r]=function(){};return _[r]};function v(r,e){var t={seen:[],stylize:oa};return arguments.length>=3&&(t.depth=arguments[2]),arguments.length>=4&&(t.colors=arguments[3]),be(e)?t.showHidden=e:e&&d._extend(t,e),g(t.showHidden)&&(t.showHidden=!1),g(t.depth)&&(t.depth=2),g(t.colors)&&(t.colors=!1),g(t.customInspect)&&(t.customInspect=!0),t.colors&&(t.stylize=ta),B(t,r,t.depth)}d.inspect=v;v.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]};v.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"};function ta(r,e){var t=v.styles[e];return t?"["+v.colors[t][0]+"m"+r+"["+v.colors[t][1]+"m":r}function oa(r,e){return r}function aa(r){var e={};return r.forEach(function(t,o){e[t]=!0}),e}function B(r,e,t){if(r.customInspect&&e&&J(e.inspect)&&e.inspect!==d.inspect&&!(e.constructor&&e.constructor.prototype===e)){var o=e.inspect(t,r);return F(o)||(o=B(r,o,t)),o}var n=na(r,e);if(n)return n;var a=Object.keys(e),s=aa(a);if(r.showHidden&&(a=Object.getOwnPropertyNames(e)),H(e)&&(a.indexOf("message")>=0||a.indexOf("description")>=0))return Ae(e);if(a.length===0){if(J(e)){var m=e.name?": "+e.name:"";return r.stylize("[Function"+m+"]","special")}if(U(e))return r.stylize(RegExp.prototype.toString.call(e),"regexp");if(De(e))return r.stylize(Date.prototype.toString.call(e),"date");if(H(e))return Ae(e)}var c="",p=!1,y=["{","}"];if(yo(e)&&(p=!0,y=["[","]"]),J(e)){var f=e.name?": "+e.name:"";c=" [Function"+f+"]"}if(U(e)&&(c=" "+RegExp.prototype.toString.call(e)),De(e)&&(c=" "+Date.prototype.toUTCString.call(e)),H(e)&&(c=" "+Ae(e)),a.length===0&&(!p||e.length==0))return y[0]+c+y[1];if(t<0)return U(e)?r.stylize(RegExp.prototype.toString.call(e),"regexp"):r.stylize("[Object]","special");r.seen.push(e);var l;return p?l=ia(r,e,t,s,a):l=a.map(function(h){return Ne(r,e,t,s,h,p)}),r.seen.pop(),sa(l,c,y)}function na(r,e){if(g(e))return r.stylize("undefined","undefined");if(F(e)){var t="'"+JSON.stringify(e).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return r.stylize(t,"string")}if(fo(e))return r.stylize(""+e,"number");if(be(e))return r.stylize(""+e,"boolean");if(P(e))return r.stylize("null","null")}function Ae(r){return"["+Error.prototype.toString.call(r)+"]"}function ia(r,e,t,o,n){for(var a=[],s=0,m=e.length;s<m;++s)lo(e,String(s))?a.push(Ne(r,e,t,o,String(s),!0)):a.push("");return n.forEach(function(c){c.match(/^\d+$/)||a.push(Ne(r,e,t,o,c,!0))}),a}function Ne(r,e,t,o,n,a){var s,m,c;if(c=Object.getOwnPropertyDescriptor(e,n)||{value:e[n]},c.get?c.set?m=r.stylize("[Getter/Setter]","special"):m=r.stylize("[Getter]","special"):c.set&&(m=r.stylize("[Setter]","special")),lo(o,n)||(s="["+n+"]"),m||(r.seen.indexOf(c.value)<0?(P(t)?m=B(r,c.value,null):m=B(r,c.value,t-1),m.indexOf(`
`)>-1&&(a?m=m.split(`
`).map(function(p){return"  "+p}).join(`
`).substr(2):m=`
`+m.split(`
`).map(function(p){return"   "+p}).join(`
`))):m=r.stylize("[Circular]","special")),g(s)){if(a&&n.match(/^\d+$/))return m;s=JSON.stringify(""+n),s.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(s=s.substr(1,s.length-2),s=r.stylize(s,"name")):(s=s.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),s=r.stylize(s,"string"))}return s+": "+m}function sa(r,e,t){var o=0,n=r.reduce(function(a,s){return o++,s.indexOf(`
`)>=0&&o++,a+s.replace(/\u001b\[\d\d?m/g,"").length+1},0);return n>60?t[0]+(e===""?"":e+`
 `)+" "+r.join(`,
  `)+" "+t[1]:t[0]+e+" "+r.join(", ")+" "+t[1]}function yo(r){return Array.isArray(r)}d.isArray=yo;function be(r){return typeof r=="boolean"}d.isBoolean=be;function P(r){return r===null}d.isNull=P;function ma(r){return r==null}d.isNullOrUndefined=ma;function fo(r){return typeof r=="number"}d.isNumber=fo;function F(r){return typeof r=="string"}d.isString=F;function ca(r){return typeof r=="symbol"}d.isSymbol=ca;function g(r){return r===void 0}d.isUndefined=g;function U(r){return T(r)&&xe(r)==="[object RegExp]"}d.isRegExp=U;function T(r){return typeof r=="object"&&r!==null}d.isObject=T;function De(r){return T(r)&&xe(r)==="[object Date]"}d.isDate=De;function H(r){return T(r)&&(xe(r)==="[object Error]"||r instanceof Error)}d.isError=H;function J(r){return typeof r=="function"}d.isFunction=J;function pa(r){return r===null||typeof r=="boolean"||typeof r=="number"||typeof r=="string"||typeof r=="symbol"||typeof r=="undefined"}d.isPrimitive=pa;d.isBuffer=po();function xe(r){return Object.prototype.toString.call(r)}function ge(r){return r<10?"0"+r.toString(10):r.toString(10)}var ua=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function ya(){var r=new Date,e=[ge(r.getHours()),ge(r.getMinutes()),ge(r.getSeconds())].join(":");return[r.getDate(),ua[r.getMonth()],e].join(" ")}d.log=function(){console.log("%s - %s",ya(),d.format.apply(d,arguments))};d.inherits=uo();d._extend=function(r,e){if(!e||!T(e))return r;for(var t=Object.keys(e),o=t.length;o--;)r[t[o]]=e[t[o]];return r};function lo(r,e){return Object.prototype.hasOwnProperty.call(r,e)}});var xo=C(da=>{wo(da,{NDArray:()=>A,NDIter:()=>u,NDMultiIter:()=>D,V_MAXDIMS:()=>w,abs:()=>V,acos:()=>Y,acosh:()=>X,add:()=>Q,angle:()=>rr,array:()=>i,asin:()=>er,asinh:()=>tr,atan:()=>or,atanh:()=>ar,augment:()=>S,binOp:()=>nr,cbrt:()=>ir,ceil:()=>sr,check:()=>mr,combine:()=>cr,copy:()=>pr,cos:()=>ur,cosh:()=>yr,cross:()=>fr,det:()=>lr,diagonal:()=>dr,dot:()=>hr,eig:()=>br,equals:()=>Ar,equidimensional:()=>Nr,equilateral:()=>Dr,exp:()=>xr,expm1:()=>gr,eye:()=>I,fill:()=>wr,floor:()=>vr,forEach:()=>Ir,fround:()=>kr,gauss:()=>Er,get:()=>Lr,inv:()=>Tr,log:()=>Gr,log10:()=>Sr,log1p:()=>Rr,log2:()=>Mr,lu:()=>qr,lu_factor:()=>jr,magic:()=>Le,map:()=>Or,matrix:()=>M,max:()=>Cr,mean:()=>zr,min:()=>Pr,multiply:()=>Fr,norm:()=>_r,normalize:()=>Br,ones:()=>Te,pow:()=>Ur,prod:()=>Hr,product:()=>Jr,project:()=>Kr,push:()=>$r,random:()=>Ge,range:()=>Se,rank:()=>Wr,reciprocal:()=>Vr,reduce:()=>Yr,reshape:()=>Xr,round:()=>Zr,row_add:()=>Qr,scale:()=>re,set:()=>ee,sign:()=>te,sin:()=>oe,sinh:()=>ae,slice:()=>ne,solve:()=>ie,sqrt:()=>se,square:()=>me,subtract:()=>ce,sum:()=>pe,swap:()=>ue,tan:()=>ye,tanh:()=>fe,toArray:()=>le,toString:()=>we,trace:()=>Ie,transpose:()=>ke,trunc:()=>Ee,zeros:()=>N})});const K=r=>r.reduce((e,t)=>e.concat(Array.isArray(t)?K(t):t),[]),$=r=>ArrayBuffer.isView(r)&&!(r instanceof DataView),Me=r=>r.reduce((e,t)=>e*t,1),W=r=>Array.isArray(r)||$(r)?[r.length].concat(W(r[0])):[],E=r=>[...r.slice(1).map((e,t)=>r.slice(t+1).reduce((o,n)=>o*n,1)),1],qe=r=>{const{constructor:{name:e="Float32Array"}={}}=r||{};switch(e){case"Int8Array":return"int8";case"Uint8Array":return"uint8";case"Int16Array":return"int16";case"Uint16Array":return"uint16";case"Int32Array":return"int32";case"Uint32Array":return"uint32";case"Uint8ClampedArray":return"uint8c";case"Float32Array":return"float32";case"Float64Array":return"float64";default:return"float64"}},x=r=>{switch(r){case"int8":return Int8Array;case"uint8":return Uint8Array;case"int16":return Int16Array;case"uint16":return Uint16Array;case"int32":return Int32Array;case"uint32":return Uint32Array;case"uint8c":return Uint8ClampedArray;case"float32":return Float32Array;case"float64":return Float64Array;default:return Float64Array}};const i=(...r)=>new A(...r);const w=32;class u{constructor(r){const{shape:e,strides:t,length:o}=i(r);this.x=i(r),this.length=o,this.lengthm1=o-1,this.nd=e.length,this.ndm1=this.nd-1,this.shape=Array(w).fill(0),this.strides=Array(w).fill(0),this.shapem1=Array(w).fill(0),this.coords=Array(w).fill(0),this.backstrides=Array(w).fill(0),this.factors=Array(w).fill(0),this.nd!==0&&(this.factors[this.nd-1]=1),this.contiguous=!0;let n=1,a;for(a=0;a<this.nd;a+=1)this.shape[a]=e[a],this.shapem1[a]=e[a]-1,this.strides[a]=t[a],this.backstrides[a]=t[a]*this.shapem1[a],this.coords[a]=0,e[this.nd-a-1]!==1&&(t[a]!==n&&(this.contiguous=!1),n*=e[this.nd-a-1]),a>0&&(this.factors[this.nd-a-1]=this.factors[this.nd-a]*e[this.nd-a]);this.index=0,this.pos=0}done(){return this.index>this.lengthm1}current(){const r=this.done();return{value:r?void 0:this.pos,done:r}}next1d(){const{strides:r,coords:e}=this;this.pos+=r[0],e[0]+=1}nextcontiguous(){this.pos+=1}next2d(){const{coords:r,strides:e,shapem1:t,backstrides:o}=this;r[1]<t[1]?(r[1]+=1,this.pos+=e[1]):(r[1]=0,r[0]+=1,this.pos+=e[0]-o[1])}nextnd(){const{ndm1:r,shapem1:e,coords:t,strides:o,backstrides:n}=this;let a;for(a=r;a>=0;a-=1)if(t[a]<e[a]){t[a]+=1,this.pos+=o[a];break}else t[a]=0,this.pos-=n[a]}next(){const r=this.current();this.index+=1;const{ndm1:e,contiguous:t}=this;return e===0?this.next1d():t?this.nextcontiguous():e===1?this.next2d():this.nextnd(),r}[Symbol.iterator](){return this}}class D{constructor(...r){this.iters=r.map(m=>new u(m)),this.numiter=r.length;let e,t;for(e=0,t=0;e<this.numiter;e+=1)t=Math.max(t,this.iters[e].x.shape.length);this.nd=t,this.shape=Array(t).fill(0);let o,n,a,s;for(e=0;e<t;e+=1)for(this.shape[e]=1,n=0;n<this.numiter;n+=1)if(o=this.iters[n],a=e+o.x.shape.length-t,a>=0){if(s=o.x.shape[a],s==1)continue;if(this.shape[e]==1)this.shape[e]=s;else if(this.shape[e]!==s)throw new Error("shape mismatch")}for(s=this.shape.reduce((m,c)=>m*c,1),this.length=s,this.lengthm1=s-1,e=0;e<this.numiter;e+=1)for(o=this.iters[e],o.nd=this.nd,o.ndm1=this.nd-1,o.length=s,o.lengthm1=s-1,t=o.x.shape.length,t!==0&&(o.factors[this.nd-1]=1),n=0;n<this.nd;n+=1)o.shape[n]=this.shape[n],o.shapem1[n]=this.shape[n]-1,a=n+t-this.nd,a<0||o.x.shape[a]!==this.shape[n]?(o.contiguous=!1,o.strides[n]=0):o.strides[n]=o.x.strides[a],o.backstrides[n]=o.strides[n]*o.shapem1[n],n>0&&(o.factors[this.nd-n-1]=o.factors[this.nd-n]*this.shape[this.nd-n]);this.index=0,this.pos=Array(this.numiter).fill(0)}done(){return this.index>this.lengthm1}current(){const r=this.done();return{value:r?void 0:this.pos,done:r}}next(){const r=this.current();this.index+=1;const{numiter:e}=this;let t,o;for(o=0;o<e;o+=1)t=this.iters[o],this.pos[o]=t.pos,t.next();return r}[Symbol.iterator](){return this}}const{abs:ko}=Math,V=r=>i(r).abs();function je(){const{data:r}=this,e=new u(this);for(const t of e)r[t]=ko(r[t]);return this}const{acos:Eo}=Math,Y=r=>i(r).acos();function Oe(){const{data:r}=this,e=new u(this);for(const t of e)r[t]=Eo(r[t]);return this}const{acosh:Lo}=Math,X=r=>i(r).acosh();function Ce(){const{data:r}=this,e=new u(this);for(const t of e)r[t]=Lo(r[t]);return this}let b;try{b=require("nblas")}catch(r){}const Z=b&&b.NoTrans,Ra=b&&b.Trans;function ze(r,e,t,o,n,a,s){if(o.length/n!==e||a.length/s!==e)throw new Error("lengths do not match");switch(r){case"float64":return b.daxpy(e,t,o,n,a,s);case"float32":return b.saxpy(e,t,o,n,a,s);default:throw new Error("wrong dtype")}}function Pe(r,e,t,o,n,a){if(t.length/o!==e||n.length/a!==e)throw new Error("lengths do not match");switch(r){case"float64":return b.ddot(e,t,o,n,a);case"float32":return b.sdot(e,t,o,n,a);default:throw new Error("wrong dtype")}}function Fe(r,e,t,o){if(t.length/o!==e)throw new Error("lengths do not match");switch(r){case"float64":return b.idamax(e,t,o);case"float32":return b.isamax(e,t,o);default:throw new Error("wrong dtype")}}function _e(r,e,t,o,n,a,s,m,c,p,y,f,l,h){const{length:G}=m,{length:q}=p,{length:j}=l;if(e===b.NoTrans&&G!==c*o||e===b.Trans&&G!==c*a)throw new Error("lengths do not match");if(t===b.NoTrans&&q!==y*a||t===b.Trans&&q!==y*n)throw new Error("lengths do not match");if(j!==h*o)throw new Error("lengths do not match");switch(r){case"float64":return b.dgemm(e,t,o,n,a,s,m,c,p,y,f,l,h);case"float32":return b.sgemm(e,t,o,n,a,s,m,c,p,y,f,l,h);default:throw new Error("wrong dtype")}}function Be(r,e,t,o){if(t.length/o!==e)throw new Error("lengths do not match");switch(r){case"float64":return b.dnrm2(e,t,o);case"float32":return b.snrm2(e,t,o);default:throw new Error("wrong dtype")}}function Ue(r,e,t,o,n){if(o.length/n!==e)throw new Error("lengths do not match");switch(r){case"float64":return b.dscal(e,t,o,n);case"float32":return b.sscal(e,t,o,n);default:throw new Error("wrong dtype")}}const Q=(r,e,t=1)=>i(r).add(i(e),t);function He(r,e=1){const{data:t,length:o,dtype:n}=this,{data:a}=i(r);try{ze(n,o,e,a,1,t,1)}catch(s){const m=new D(this,r);for(const[c,p]of m)t[c]+=e*a[p]}return this}const{acos:To}=Math,rr=(r,e)=>i(r).angle(i(e));function Je(r){return To(this.dot(i(r))/this.norm()/i(r).norm())}const{asin:Go}=Math,er=r=>i(r).asin();function Ke(){const{data:r}=this,e=new u(this);for(const t of e)r[t]=Go(r[t]);return this}const{asinh:So}=Math,tr=r=>i(r).asinh();function $e(){const{data:r}=this,e=new u(this);for(const t of e)r[t]=So(r[t]);return this}const{atan:Ro}=Math,or=r=>i(r).atan();function We(){const{data:r}=this,e=new u(this);for(const t of e)r[t]=Ro(r[t]);return this}const{atanh:Mo}=Math,ar=r=>i(r).atanh();function Ve(){const{data:r}=this,e=new u(this);for(const t of e)r[t]=Mo(r[t]);return this}const N=(...r)=>new A(new Float64Array(r.reduce((e,t)=>e*t,1)),{shape:r}).fill(0);const S=(r,e)=>i(r).augment(i(e));function Ye(r){const[e,t]=this.shape,[o,n]=i(r).shape,{data:a}=this,{data:s}=i(r);if(o===0||n===0)return this;if(e!==o)throw new Error("rows do not match");const m=N(e,t+n),{data:c}=m;let p,y;for(p=0;p<e;p+=1)for(y=0;y<t;y+=1)c[p*(t+n)+y]=a[p*t+y];for(p=0;p<o;p+=1)for(y=0;y<n;y+=1)c[p*(t+n)+(y+t)]=s[p*n+y];return m}const nr=(r,e,t)=>i(r).binOp(i(e),t);function Xe(r,e){const{data:t}=this,{data:o}=i(r),n=new D(this,r);for(const[a,s]of n)t[a]=e(t[a],o[s],a);return this}const{cbrt:qo}=Math,ir=r=>i(r).cbrt();function Ze(){const{data:r}=this,e=new u(this);for(const t of e)r[t]=qo(r[t]);return this}const{ceil:jo}=Math,sr=r=>i(r).ceil();function Qe(){const{data:r}=this,e=new u(this);for(const t of e)r[t]=jo(r[t]);return this}const mr=(r,...e)=>{i(r).check(...e)};function rt(...r){const{shape:e,length:t}=this;if(r.length===1){const[o]=r;if(o<0||o>t-1||!Number.isFinite(o))throw new Error("index out of bounds")}else if(!e.every((o,n)=>o>r[n]&&Number.isFinite(r[n])&&r[n]>=0))throw new Error("index out of bounds")}const cr=(r,e)=>i(r).combine(i(e));function et(r){if(this.shape.length!==1&&r.shape.length!==1)throw new Error("combine operation not permitted for multidimensional arrays");const{length:e,data:t}=this,{length:o,data:n}=r;if(o===0)return this;if(e===0)return this.data=new(x(r.dtype))(n),this.length=o,this.dtype=r.dtype,this;const a=e+o,s=new(x(this.dtype))(a);return s.set(t),s.set(n,e),this.data=s,this.length=a,this.shape=[a],this}const pr=r=>i(r).copy();function tt(){const r=Object.assign(Object.create(Object.getPrototypeOf(this)),this);return r.data=this.data.slice(),r.shape=this.shape.slice(),r.strides=this.strides.slice(),r.length=this.length,r.dtype=this.dtype,r}const{cos:Oo}=Math,ur=r=>i(r).cos();function ot(){const{data:r}=this,e=new u(this);for(const t of e)r[t]=Oo(r[t]);return this}const{cosh:Co}=Math,yr=r=>i(r).cosh();function at(){const{data:r}=this,e=new u(this);for(const t of e)r[t]=Co(r[t]);return this}const fr=(r,e)=>i(r).cross(i(e));function nt(r){const{length:e}=this,{length:t}=r;if(e!==3||t!==3)throw new Error("vectors must have three components");const o=this.y*r.z-this.z*r.y,n=this.z*r.x-this.x*r.z,a=this.x*r.y-this.y*r.x;return this.x=o,this.y=n,this.z=a,this}const lr=r=>i(r).det();function it(){this.square();const[r]=this.shape,[e,t]=this.copy().lu_factor(),{data:o}=e;let n=1,a=1,s;for(s=0;s<r;s+=1)n*=o[s*r+s],s!==t[s]-1&&(a*=-1);return a*n}const dr=r=>i(r).diagonal();function st(){this.square();const{length:r}=this,[e,t]=this.shape,o=Math.min(e,t);return this.reshape(r).slice(0,r,o+1)}const hr=(r,e)=>i(r).dot(i(e));function mt(r){const{data:e,length:t,dtype:o}=this,{data:n}=r;let a=0;try{a=Pe(o,t,n,1,e,1)}catch(s){const m=new D(this,r);for(const[c,p]of m)a+=e[c]*n[p]}return a}const I=r=>{const e=new A(new Float64Array(r*r),{shape:[r,r]}),{data:t}=e;let o;for(o=0;o<r;o+=1)t[o*r+o]=1;return e};let R;try{R=require("nlapack")}catch(r){}const z=(r,e,t,o,n,a,s)=>{const[m]=r.shape,{data:c}=r,p=c[o*m+n],y=1/(e+t);c[o*m+n]=p-t*(c[a*m+s]+y*p),c[a*m+s]+=t*(p-y*c[a*m+s])},br=r=>i(r).eig();function ct(){this.square();const[r]=this.shape;try{["float32","float64"].includes(this.dtype)||(this.dtype="float32",this.data=x(this.dtype).from(this.data));const e=R.NoEigenvector,t=R.Eigenvector,o=N(r),n=N(r),a=N(r,r),s=N(r,r),{data:m}=this,{data:c}=o,{data:p}=n,{data:y}=a,{data:f}=s;return this.dtype==="float64"&&R.dgeev(e,t,r,m,r,c,p,y,r,f,r),this.dtype==="float32"&&R.sgeev(e,t,r,m,r,c,p,y,r,f,r),[o,s]}catch(e){const{data:t}=this,o=I(r);let n=0,a=0,s=0,m=0,c=0;do{for(a=0;a<r;a+=1)for(s=a+1;s<r;s+=1)Math.abs(t[a*r+s])>=n&&(n=Math.abs(t[a*r+s]),m=a,c=s);let p;if(Math.abs(t[m*r+c])<Math.abs(t[c*r+c])*1e-36)p=t[m*r+c]/t[c*r+c];else{const h=t[c*r+c]/2*t[m*r+c];p=1/(Math.abs(h)+Math.sqrt(h*h+1))}const y=1/Math.sqrt(p*p+1),f=p*y,l=t[m*r+c];for(t[m*r+c]=0,t[m*r+m]-=p*l,t[c*r+c]+=p*l,a=0;a<m;a+=1)z(this,y,f,a,m,a,c);for(a=m+1;a<c;a+=1)z(this,y,f,m,a,a,c);for(a=c+1;a<r;a+=1)z(this,y,f,m,a,c,a);for(a=0;a<r;a+=1)z(o,y,f,a,m,a,c)}while(n>=1e-9);return[this.diagonal(),o]}}const Ar=(r,e,t=1e-6)=>i(r).equals(i(e),t);function pt(r,e=1e-6){const{data:t}=this,{data:o}=r,n=new D(this,r);for(const[a,s]of n)if(Math.abs(t[a]-o[s])>e)return!1;return!0}const Nr=(r,e)=>{i(r).equidimensional(i(e))};function ut(r){const{shape:e}=this,{shape:t}=r;if(!e.every((o,n)=>o===t[n]))throw new Error(`shapes ${e} and ${t} do not match`)}const Dr=(r,e)=>{i(r).equilateral(i(e))};function yt(r){const{length:e}=this,{length:t}=r;if(e!==t)throw new Error(`lengths ${e} and ${t} do not match`)}const{exp:zo}=Math,xr=r=>i(r).exp();function ft(){const{data:r}=this,e=new u(this);for(const t of e)r[t]=zo(r[t]);return this}const{expm1:Po}=Math,gr=r=>i(r).expm1();function lt(){const{data:r}=this,e=new u(this);for(const t of e)r[t]=Po(r[t]);return this}const wr=(r,e=0)=>i(r).fill(e);function dt(r=0){const{data:e}=this,t=new u(this);for(const o of t)e[o]=r instanceof Function?r(t.pos):r;return this}const{floor:Fo}=Math,vr=r=>i(r).floor();function ht(){const{data:r}=this,e=new u(this);for(const t of e)r[t]=Fo(r[t]);return this}const Ir=(r,e)=>{r.forEach(e)};function bt(r){const{data:e}=this,t=new u(this);for(const o of t)r.call(this,e[o],o,e)}const{fround:_o}=Math,kr=r=>i(r).fround();function At(){const{data:r}=this,e=new u(this);for(const t of e)r[t]=_o(r[t]);return this}let k;try{k=require("nlapack")}catch(r){}function L(r,e,t,o,n,a){if(o.length!==e*t)throw new Error("lengths do not match");switch(r){case"float64":return k.dgetrf(e,t,o,n,a);case"float32":return k.sgetrf(e,t,o,n,a);default:throw new Error("wrong dtype")}}function Nt(r,e,t,o,n){if(t.length!==e*e)throw new Error("lengths do not match");switch(r){case"float64":return k.dgetri(e,t,o,n);case"float32":return k.sgetri(e,t,o,n);default:throw new Error("wrong dtype")}}function Dt(r,e,t,o,n,a,s,m){if(o.length!==n*e||s.length!==m*t)throw new Error("lengths do not match");switch(r){case"float64":return k.dgesv(e,t,o,n,a,s,m);case"float32":return k.sgesv(e,t,o,n,a,s,m);default:throw new Error("wrong dtype")}}const Er=r=>i(r).gauss();function xt(){const{shape:[r,e],data:t,dtype:o}=this;try{const{data:n}=this,a=new Int32Array(Math.min(r,e));L(o,r,e,n,e,a);const s=new u(this);let[m,c]=s.coords;for(const p of s)c<m&&(n[p]=0),[m,c]=s.coords}catch(n){let a=0,s,m,c,p,y;for(c=0;c<r;c+=1){if(e<=a)return this;for(p=c;t[p*e+a]===0;)if(p+=1,r===p&&(p=c,a+=1,e===a))return this;if(c!==p&&this.swap(c,p),m=t[c*e+a],m!==0)for(y=0;y<e;y+=1)t[c*e+y]/=m;for(p=0;p<r;p+=1)if(s=t[p*e+a],p!==c)for(y=0;y<e;y+=1)t[p*e+y]-=t[c*e+y]*s;a+=1}for(c=0;c<r;c+=1){for(m=0,p=0;p<e;p+=1)m===0&&(m=t[c*e+p]);if(m===0)for(y=0;y<e;y+=1)t[c*e+y]/=m}}return this}const Lr=(r,...e)=>i(r).get(...e);function gt(...r){this.check(...r);const{data:e,shape:t}=this,{length:o}=t;let n=r[o-1],a,s;for(a=0;a<o-1;a+=1){let m=1;for(s=a+1;s<o;s+=1)m*=t[s];n+=r[a]*m}return e[n]}const Tr=r=>i(r).inv();function wt(){this.square();const{shape:[r],dtype:e}=this;try{const{data:t}=this,o=new Int32Array(r);return L(e,r,r,t,r,o),Nt(e,r,t,r,o),this}catch(t){const o=I(r),n=S(this,o).gauss(),a=N(r,r),s=N(r,r),{data:m}=n,{data:c}=a,{data:p}=s,y=new u(n);let[f,l]=y.coords;for(const h of y)l<r?c[f*r+l]=m[h]:p[f*r+(l-r)]=m[h],[f,l]=y.coords;if(!a.equals(o))throw new Error("matrix is not invertible");return s}}const{log:Bo}=Math,Gr=r=>i(r).log();function vt(){const{data:r}=this,e=new u(this);for(const t of e)r[t]=Bo(r[t]);return this}const{log10:Uo}=Math,Sr=r=>i(r).log10();function It(){const{data:r}=this,e=new u(this);for(const t of e)r[t]=Uo(r[t]);return this}const{log1p:Ho}=Math,Rr=r=>i(r).log1p();function kt(){const{data:r}=this,e=new u(this);for(const t of e)r[t]=Ho(r[t]);return this}const{log2:Jo}=Math,Mr=r=>i(r).log2();function Et(){const{data:r}=this,e=new u(this);for(const t of e)r[t]=Jo(r[t]);return this}const qr=r=>i(r).lu();function Lt(){const[r,e]=this.copy().lu_factor(),t=r.copy(),o=r.copy(),{data:n}=t,{data:a}=o,s=new u(r);let[m,c]=s.coords;for(const p of s)c<m?a[p]=0:n[p]=m===c?1:0,[m,c]=s.coords;return[t,o,e]}const jr=r=>i(r).lu_factor();function Tt(){const{data:r,shape:[e],dtype:t}=this,o=new Int32Array(e);try{L(t,e,e,r,e,o)}catch(n){let a,s,m,c,p,y,f;for(f=0;f<e;f+=1){for(c=f,a=Math.abs(r[f*e+f]),y=f+1;y<e;y+=1)s=Math.abs(r[y*e+f]),a<s&&(a=s,c=y);for(o[f]=c+1,c!==f&&this.swap(f,c),m=r[f*e+f],p=f+1;p<e;p+=1)r[p*e+f]/=m;for(p=f+1;p<e;p+=1){for(y=f+1;y<e-1;y+=2)r[p*e+y]-=r[p*e+f]*r[f*e+y],r[p*e+y+1]-=r[p*e+f]*r[f*e+y+1];y===e-1&&(r[p*e+y]-=r[p*e+f]*r[f*e+y])}}}return[this,o]}const Or=(r,e)=>i(r).map(e);function Gt(r){const{data:e}=this,t=new u(this),o=r.bind(this),n=this.copy(),{data:a}=n;for(const s of t)a[s]=o(e[s],s,e);return n}const Cr=r=>i(r).max();function St(){const{data:r,length:e,dtype:t}=this;let o=Number.NEGATIVE_INFINITY;try{o=r[Fe(t,e,r,1)]}catch(n){const a=new u(this);for(const s of a){const m=r[s];o<m&&(o=m)}}return o}const zr=r=>i(r).mean();function Rt(){const{data:r,length:e}=this,t=new u(this);let o=0;for(const n of t)o+=r[n];return o/e}const Pr=r=>i(r).min();function Mt(){const{data:r}=this,e=new u(this);let t=Number.POSITIVE_INFINITY;for(const o of e){const n=r[o];t>n&&(t=n)}return t}const M=(r,e)=>new A(new Float64Array(r*e),{shape:[r,e]});const Fr=(r,e)=>i(r).multiply(i(e));function qt(r){const{shape:[e,t],data:o,dtype:n}=this,{shape:[a,s],data:m}=r;if(t!==a)throw new Error("sizes do not match");const c=M(e,s),{data:p}=c;try{_e(n,Z,Z,e,s,t,1,o,t,m,s,0,p,s)}catch(y){const f=new u(c);let l,[h,G]=f.coords;for(const q of f){let j=0;for(l=0;l<t;l+=1)j+=o[h*t+l]*m[l*s+G];p[q]=j,[h,G]=f.coords}}return c}const{sqrt:Ko}=Math,_r=r=>i(r).norm();function jt(){const{data:r,length:e,dtype:t}=this;let o=0;try{o=Be(t,e,r,1)}catch(n){o=Ko(this.dot(this))}return o}const Br=r=>i(r).normalize();function Ot(){return this.scale(1/this.norm())}const{pow:$o}=Math,Ur=(r,e)=>i(r).pow(e);function Ct(r){const{data:e}=this,t=new u(this);for(const o of t)e[o]=$o(e[o],r);return this}const Hr=r=>i(r).prod();function zt(){const{data:r}=this,e=new u(this);let t=1;for(const o of e)t*=r[o];return t}const Jr=(r,e)=>i(r).product(i(e));function Pt(r){const{data:e}=this,{data:t}=r,o=new D(this,r);for(const[n,a]of o)e[n]*=t[a];return this}const Kr=(r,e)=>i(r).project(i(e));function Ft(r){return r.scale(this.dot(r)/r.dot(r))}const $r=(r,e)=>i(r).push(e);function _t(r){if(this.shape.length!==1)throw new Error("push operation not permitted for multidimensional arrays");const{data:e,length:t}=this,o=t+1,n=new(x(this.dtype))(o);return n.set(e),n[t]=r,this.data=n,this.length=o,this.shape=[o],this}const Wr=(r,e=1e-6)=>i(r).rank(e);function Bt(r=1e-6){const{data:e}=this.copy().gauss(),t=new u(this);let o=0,[n,a]=t.coords;for(const s of t)o<=n&&a>=n&&e[s]>r&&(o+=1),[n,a]=t.coords;return o}const Vr=r=>i(r).reciprocal();function Ut(){const{data:r}=this,e=new u(this);for(const t of e)r[t]=1/r[t];return this}const Yr=(r,e,t)=>i(r).reduce(e,t);function Ht(r,e){const{data:t,length:o}=this;if(o===0&&typeof e=="undefined")throw new Error("Reduce of empty array with no initial value.");const n=new u(this),a=r.bind(this);let s;typeof e=="undefined"?(s=t[0],n.next()):s=e;for(const m of n)s=a(s,t[m],m,t);return s}const Xr=(r,...e)=>i(r).reshape(...e);function Jt(...r){const{length:e}=this;if(r.reduce((t,o)=>t*o,1)!==e)throw new Error(`shape ${r} does not match length ${e}`);return this.shape=r,this.strides=E(r),this}const{round:Wo}=Math,Zr=r=>i(r).round();function Kt(){const{data:r}=this,e=new u(this);for(const t of e)r[t]=Wo(r[t]);return this}const Qr=(r,e,t,o=1)=>i(r).row_add(e,t,o);function $t(r,e,t=1){this.check(r,0),this.check(e,0);const[,o]=this.shape,{data:n}=this;let a;for(a=0;a<o;a+=1)n[r*o+a]+=n[e*o+a]*t;return this}const re=(r,e)=>i(r).scale(e);function Wt(r){const{data:e,length:t,dtype:o}=this;try{Ue(o,t,r,e,1)}catch(n){const a=new u(this);for(const s of a)e[s]*=r}return this}const ee=(r,...e)=>{r.set(...e)};function Vt(...r){const e=r.slice(0,-1),t=r[r.length-1];this.check(...e);const{shape:o}=this;let n=e[e.length-1],a;for(a=0;a<e.length-1;a+=1)n+=e[a]*o[a+1];this.data[n]=t}const{sign:Vo}=Math,te=r=>i(r).sign();function Yt(){const{data:r}=this,e=new u(this);for(const t of e)r[t]=Vo(r[t]);return this}const{sin:Yo}=Math,oe=r=>i(r).sin();function Xt(){const{data:r}=this,e=new u(this);for(const t of e)r[t]=Yo(r[t]);return this}const{sinh:Xo}=Math,ae=r=>i(r).sinh();function Zt(){const{data:r}=this,e=new u(this);for(const t of e)r[t]=Xo(r[t]);return this}const ne=(r,e,t,o)=>i(r).slice(e,t,o);function Qt(r=0,e=this.shape[0],t=1){const{shape:o}=this,n=o.length;if(r<0||e<0)return this.slice(r<0?n+r:r,e<0?n+e:e);if(t===0)throw new Error("step argument cannot be 0");const a=[Math.ceil((e-r)/t),...o.slice(1)],s=a.reduce((c,p)=>c*p,1),m=E(a);return this.shape=a,this.length=s,this.strides=m,this}const ie=(r,e)=>i(r).solve(i(e));function ro(r){const{data:e,dtype:t}=this,{data:o,shape:[n,a]}=r;try{const s=new Int32Array(n);Dt(t,n,a,e,n,s,o,a)}catch(s){const[m,c]=this.lu_factor(),{data:p}=m,{data:y}=r;let f,l,h;for(f=0;f<c.length;f+=1)f!==c[f]-1&&r.swap(f,c[f]-1);for(h=0;h<a;h+=1){for(f=0;f<n;f+=1)for(l=0;l<f;l+=1)y[f*a+h]-=p[f*n+l]*y[l*a+h];for(f=n-1;f>=0;f-=1){for(l=f+1;l<n;l+=1)y[f*a+h]-=p[f*n+l]*y[l*a+h];y[f*a+h]/=p[f*n+f]}}}return r}const{sqrt:Zo}=Math,se=r=>i(r).sqrt();function eo(){const{data:r}=this,e=new u(this);for(const t of e)r[t]=Zo(r[t]);return this}const me=r=>{i(r).square()};function to(){const{length:r}=this.shape,[e,t]=this.shape;if(r!==2||e!==t)throw new Error("matrix is not square")}const ce=(r,e)=>i(r).subtract(i(e));function oo(r){return this.add(r,-1)}const pe=r=>i(r).sum();function ao(){const{data:r}=this,e=new u(this);let t=0;for(const o of e)t+=r[o];return t}const ue=(r,e,t)=>i(r).swap(e,t);function no(r,e){this.check(r,0),this.check(e,0);const{data:t}=this,[,o]=this.shape,n=t.slice(r*o,(r+1)*o);return t.copyWithin(r*o,e*o,(e+1)*o),t.set(n,e*o),this}const{tan:Qo}=Math,ye=r=>i(r).tan();function io(){const{data:r}=this,e=new u(this);for(const t of e)r[t]=Qo(r[t]);return this}const{tanh:ra}=Math,fe=r=>i(r).tanh();function so(){const{data:r}=this,e=new u(this);for(const t of e)r[t]=ra(r[t]);return this}const le=r=>i(r).toArray();function mo(){const{length:r,shape:e}=this,{length:t}=e;let o,n,a;const s=[];for(o=0;o<r;o+=1){const m=[];for(n=0;n<t;n+=1){let p=1;for(a=n+1;a<t;a+=1)p*=e[a];let y=Math.floor(o/p);n>0&&(y%=e[n]),m.push(y)}let c=s;for(n=0;n<t;n+=1){const p=m[n];n<t-1?(c[p]||(c[p]=[]),c=c[p]):c[p]=this.get(...m)}}return s}const bo=Io(ho());const we=r=>i(r).toString();function ve(){return`array(${bo.inspect(this.toArray(),{depth:10,breakLength:40})}, dtype=${this.dtype})`}const Ie=r=>i(r).trace();function Ao(){const[r,e]=this.shape,{data:t}=this,o=Math.min(r,e);let n=0,a;for(a=0;a<o;a+=1)n+=t[a*e+a];return n}const ke=r=>i(r).transpose();function No(){if(this.shape.length<2)return this;let r=this.shape[0];return this.shape[0]=this.shape[1],this.shape[1]=r,r=this.strides[0],this.strides[0]=this.strides[1],this.strides[1]=r,this}const{trunc:fa}=Math,Ee=r=>i(r).trunc();function Do(){const{data:r}=this,e=new u(this);for(const t of e)r[t]=fa(r[t]);return this}const Le=r=>{if(r<0)throw new Error("invalid n");const e=new Float64Array(r*r),t=new A(e,{shape:[r,r]}),o=new u(t);let[n,a]=o.coords;for(const s of o){const m=r-n-1,c=r-a-1;e[s]=(a+m*2+1)%r*r+(c+m*2+1)%r+1,[n,a]=o.coords}return t};const Te=(...r)=>new A(new Float64Array(r.reduce((e,t)=>e*t,1)),{shape:r}).fill(1);const Ge=(...r)=>new A(new Float64Array(r.reduce((e,t)=>e*t,1)),{shape:r}).map(()=>Math.random());const Se=(...r)=>{const e=Float32Array;let t=!1,o,n,a;switch(r.length){case 2:a=r.pop(),n=1,o=r.pop();break;case 3:a=r.pop(),n=r.pop(),o=r.pop();break;default:throw new Error("invalid range")}if(a-o<0){const p=a;a=o,o=p,t=!0}if(n>a-o)throw new Error("invalid range");const s=new e(Math.ceil((a-o)/n));let m=o,c=0;if(t)for(;m<a;m+=n,c+=1)s[c]=a-m+o;else for(;m<a;m+=n,c+=1)s[c]=m;return new A(s)};const la=Symbol.for("nodejs.util.inspect.custom");var ay;class A{constructor(r,e){this.data=new Float64Array(0);this.dtype="float64";this.length=0;this.shape=[0];this.strides=[0];this[ay]=ve;this.abs=je;this.acos=Oe;this.acosh=Ce;this.add=He;this.angle=Je;this.asin=Ke;this.asinh=$e;this.atan=We;this.atanh=Ve;this.augment=Ye;this.binOp=Xe;this.cbrt=Ze;this.ceil=Qe;this.check=rt;this.combine=et;this.copy=tt;this.cos=ot;this.cosh=at;this.cross=nt;this.det=it;this.diagonal=st;this.dot=mt;this.eig=ct;this.equals=pt;this.equidimensional=ut;this.equilateral=yt;this.exp=ft;this.expm1=lt;this.fill=dt;this.floor=ht;this.forEach=bt;this.fround=At;this.gauss=xt;this.get=gt;this.inv=wt;this.log=vt;this.log10=It;this.log1p=kt;this.log2=Et;this.lu=Lt;this.lu_factor=Tt;this.map=Gt;this.max=St;this.mean=Rt;this.min=Mt;this.multiply=qt;this.norm=jt;this.normalize=Ot;this.pow=Ct;this.prod=zt;this.product=Pt;this.project=Ft;this.push=_t;this.rank=Bt;this.reciprocal=Ut;this.reduce=Ht;this.reshape=Jt;this.round=Kt;this.row_add=$t;this.scale=Wt;this.set=Vt;this.sign=Yt;this.sin=Xt;this.sinh=Zt;this.slice=Qt;this.solve=ro;this.sqrt=eo;this.square=to;this.subtract=oo;this.sum=ao;this.swap=no;this.tan=io;this.tanh=so;this.toArray=mo;this.toString=ve;this.trace=Ao;this.transpose=No;this.trunc=Do;if(!r)return;if(r instanceof A)return r.copy();if(r instanceof u){if(!e||!e.dtype)throw new Error("dtype is missing");r.shape&&(e.shape=r.shape);const s=r.length;r=new(x(e.dtype))(s)}const{shape:t=W(r),length:o=Me(t),strides:n=E(t),dtype:a=qe(r)}=e||{};this.data=$(r)?r:new(x(a))(K(r)),this.shape=t,this.length=o,this.dtype=a,this.strides=n}get x(){return this.get(0)}set x(r){this.set(0,r)}get y(){return this.get(1)}set y(r){this.set(1,r)}get z(){return this.get(2)}set z(r){this.set(2,r)}get w(){return this.get(3)}set w(r){this.set(3,r)}get T(){return this.copy().transpose()}}ay=la;try{window.v=A}catch(r){}return xo();})();
//# sourceMappingURL=index.browser.js.map
