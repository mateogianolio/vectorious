var Xt=Object.create;var mr=Object.defineProperty;var Yt=Object.getOwnPropertyDescriptor;var Zt=Object.getOwnPropertyNames;var Kt=Object.getPrototypeOf,Qt=Object.prototype.hasOwnProperty;var H=(r=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(r,{get:(t,o)=>(typeof require<"u"?require:t)[o]}):r)(function(r){if(typeof require<"u")return require.apply(this,arguments);throw new Error('Dynamic require of "'+r+'" is not supported')});var J=(r,t)=>()=>(t||r((t={exports:{}}).exports,t),t.exports);var ro=(r,t,o,e)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of Zt(t))!Qt.call(r,n)&&n!==o&&mr(r,n,{get:()=>t[n],enumerable:!(e=Yt(t,n))||e.enumerable});return r};var to=(r,t,o)=>(o=r!=null?Xt(Kt(r)):{},ro(t||!r||!r.__esModule?mr(o,"default",{value:r,enumerable:!0}):o,r));var $t=J((jm,Ut)=>{Ut.exports=function(t){return t&&typeof t=="object"&&typeof t.copy=="function"&&typeof t.fill=="function"&&typeof t.readUInt8=="function"}});var Ct=J((qm,Q)=>{typeof Object.create=="function"?Q.exports=function(t,o){t.super_=o,t.prototype=Object.create(o.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}:Q.exports=function(t,o){t.super_=o;var e=function(){};e.prototype=o.prototype,t.prototype=new e,t.prototype.constructor=t}});var Ht=J(h=>{var Ze=/%[sdj%]/g;h.format=function(r){if(!B(r)){for(var t=[],o=0;o<arguments.length;o++)t.push(w(arguments[o]));return t.join(" ")}for(var o=1,e=arguments,n=e.length,a=String(r).replace(Ze,function(m){if(m==="%%")return"%";if(o>=n)return m;switch(m){case"%s":return String(e[o++]);case"%d":return Number(e[o++]);case"%j":try{return JSON.stringify(e[o++])}catch{return"[Circular]"}default:return m}}),s=e[o];o<n;s=e[++o])P(s)||!E(s)?a+=" "+s:a+=" "+w(s);return a};h.deprecate=function(r,t){if(x(global.process))return function(){return h.deprecate(r,t).apply(this,arguments)};if(process.noDeprecation===!0)return r;var o=!1;function e(){if(!o){if(process.throwDeprecation)throw new Error(t);process.traceDeprecation?console.trace(t):console.error(t),o=!0}return r.apply(this,arguments)}return e};var F={},rr;h.debuglog=function(r){if(x(rr)&&(rr=process.env.NODE_DEBUG||""),r=r.toUpperCase(),!F[r])if(new RegExp("\\b"+r+"\\b","i").test(rr)){var t=process.pid;F[r]=function(){var o=h.format.apply(h,arguments);console.error("%s %d: %s",r,t,o)}}else F[r]=function(){};return F[r]};function w(r,t){var o={seen:[],stylize:Qe};return arguments.length>=3&&(o.depth=arguments[2]),arguments.length>=4&&(o.colors=arguments[3]),nr(t)?o.showHidden=t:t&&h._extend(o,t),x(o.showHidden)&&(o.showHidden=!1),x(o.depth)&&(o.depth=2),x(o.colors)&&(o.colors=!1),x(o.customInspect)&&(o.customInspect=!0),o.colors&&(o.stylize=Ke),R(o,r,o.depth)}h.inspect=w;w.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]};w.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"};function Ke(r,t){var o=w.styles[t];return o?"\x1B["+w.colors[o][0]+"m"+r+"\x1B["+w.colors[o][1]+"m":r}function Qe(r,t){return r}function ra(r){var t={};return r.forEach(function(o,e){t[o]=!0}),t}function R(r,t,o){if(r.customInspect&&t&&C(t.inspect)&&t.inspect!==h.inspect&&!(t.constructor&&t.constructor.prototype===t)){var e=t.inspect(o,r);return B(e)||(e=R(r,e,o)),e}var n=ta(r,t);if(n)return n;var a=Object.keys(t),s=ra(a);if(r.showHidden&&(a=Object.getOwnPropertyNames(t)),$(t)&&(a.indexOf("message")>=0||a.indexOf("description")>=0))return tr(t);if(a.length===0){if(C(t)){var m=t.name?": "+t.name:"";return r.stylize("[Function"+m+"]","special")}if(U(t))return r.stylize(RegExp.prototype.toString.call(t),"regexp");if(ar(t))return r.stylize(Date.prototype.toString.call(t),"date");if($(t))return tr(t)}var f="",u=!1,y=["{","}"];if(Rt(t)&&(u=!0,y=["[","]"]),C(t)){var c=t.name?": "+t.name:"";f=" [Function"+c+"]"}if(U(t)&&(f=" "+RegExp.prototype.toString.call(t)),ar(t)&&(f=" "+Date.prototype.toUTCString.call(t)),$(t)&&(f=" "+tr(t)),a.length===0&&(!u||t.length==0))return y[0]+f+y[1];if(o<0)return U(t)?r.stylize(RegExp.prototype.toString.call(t),"regexp"):r.stylize("[Object]","special");r.seen.push(t);var l;return u?l=oa(r,t,o,s,a):l=a.map(function(d){return er(r,t,o,s,d,u)}),r.seen.pop(),ea(l,f,y)}function ta(r,t){if(x(t))return r.stylize("undefined","undefined");if(B(t)){var o="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return r.stylize(o,"string")}if(Pt(t))return r.stylize(""+t,"number");if(nr(t))return r.stylize(""+t,"boolean");if(P(t))return r.stylize("null","null")}function tr(r){return"["+Error.prototype.toString.call(r)+"]"}function oa(r,t,o,e,n){for(var a=[],s=0,m=t.length;s<m;++s)Bt(t,String(s))?a.push(er(r,t,o,e,String(s),!0)):a.push("");return n.forEach(function(f){f.match(/^\d+$/)||a.push(er(r,t,o,e,f,!0))}),a}function er(r,t,o,e,n,a){var s,m,f;if(f=Object.getOwnPropertyDescriptor(t,n)||{value:t[n]},f.get?f.set?m=r.stylize("[Getter/Setter]","special"):m=r.stylize("[Getter]","special"):f.set&&(m=r.stylize("[Setter]","special")),Bt(e,n)||(s="["+n+"]"),m||(r.seen.indexOf(f.value)<0?(P(o)?m=R(r,f.value,null):m=R(r,f.value,o-1),m.indexOf(`
`)>-1&&(a?m=m.split(`
`).map(function(u){return"  "+u}).join(`
`).substr(2):m=`
`+m.split(`
`).map(function(u){return"   "+u}).join(`
`))):m=r.stylize("[Circular]","special")),x(s)){if(a&&n.match(/^\d+$/))return m;s=JSON.stringify(""+n),s.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(s=s.substr(1,s.length-2),s=r.stylize(s,"name")):(s=s.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),s=r.stylize(s,"string"))}return s+": "+m}function ea(r,t,o){var e=0,n=r.reduce(function(a,s){return e++,s.indexOf(`
`)>=0&&e++,a+s.replace(/\u001b\[\d\d?m/g,"").length+1},0);return n>60?o[0]+(t===""?"":t+`
 `)+" "+r.join(`,
  `)+" "+o[1]:o[0]+t+" "+r.join(", ")+" "+o[1]}function Rt(r){return Array.isArray(r)}h.isArray=Rt;function nr(r){return typeof r=="boolean"}h.isBoolean=nr;function P(r){return r===null}h.isNull=P;function aa(r){return r==null}h.isNullOrUndefined=aa;function Pt(r){return typeof r=="number"}h.isNumber=Pt;function B(r){return typeof r=="string"}h.isString=B;function na(r){return typeof r=="symbol"}h.isSymbol=na;function x(r){return r===void 0}h.isUndefined=x;function U(r){return E(r)&&ir(r)==="[object RegExp]"}h.isRegExp=U;function E(r){return typeof r=="object"&&r!==null}h.isObject=E;function ar(r){return E(r)&&ir(r)==="[object Date]"}h.isDate=ar;function $(r){return E(r)&&(ir(r)==="[object Error]"||r instanceof Error)}h.isError=$;function C(r){return typeof r=="function"}h.isFunction=C;function ia(r){return r===null||typeof r=="boolean"||typeof r=="number"||typeof r=="string"||typeof r=="symbol"||typeof r>"u"}h.isPrimitive=ia;h.isBuffer=$t();function ir(r){return Object.prototype.toString.call(r)}function or(r){return r<10?"0"+r.toString(10):r.toString(10)}var sa=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function ma(){var r=new Date,t=[or(r.getHours()),or(r.getMinutes()),or(r.getSeconds())].join(":");return[r.getDate(),sa[r.getMonth()],t].join(" ")}h.log=function(){console.log("%s - %s",ma(),h.format.apply(h,arguments))};h.inherits=Ct();h._extend=function(r,t){if(!t||!E(t))return r;for(var o=Object.keys(t),e=o.length;e--;)r[o[e]]=t[o[e]];return r};function Bt(r,t){return Object.prototype.hasOwnProperty.call(r,t)}});var k=32,V=r=>r.reduce((t,o)=>t.concat(Array.isArray(o)?V(o):o),[]),G=r=>ArrayBuffer.isView(r)&&!(r instanceof DataView),S=r=>r.reduce((t,o)=>t*o,1),W=r=>Array.isArray(r)||G(r)?[r.length].concat(W(r[0])):[],I=r=>[...r.slice(1).map((t,o)=>r.slice(o+1).reduce((e,n)=>e*n,1)),1],fr=r=>{let{constructor:{name:t="Float32Array"}={}}=r||{};switch(t){case"Int8Array":return"int8";case"Uint8Array":return"uint8";case"Int16Array":return"int16";case"Uint16Array":return"uint16";case"Int32Array":return"int32";case"Uint32Array":return"uint32";case"Uint8ClampedArray":return"uint8c";case"Float32Array":return"float32";case"Float64Array":return"float64";default:return"float64"}},g=r=>{switch(r){case"int8":return Int8Array;case"uint8":return Uint8Array;case"int16":return Int16Array;case"uint16":return Uint16Array;case"int32":return Int32Array;case"uint32":return Uint32Array;case"uint8c":return Uint8ClampedArray;case"float32":return Float32Array;case"float64":return Float64Array;default:return Float64Array}};var i=(...r)=>new A(...r);var p=class{x;shape;shapem1;strides;backstrides;length;lengthm1;nd;ndm1;index;coords;pos;factors;constructor(t){this.x=i(t);let{shape:o,strides:e,length:n}=this.x;this.length=n,this.lengthm1=n-1,this.nd=o.length,this.ndm1=this.nd-1,this.shape=Array(k).fill(0),this.strides=Array(k).fill(0),this.shapem1=Array(k).fill(0),this.coords=Array(k).fill(0),this.backstrides=Array(k).fill(0),this.factors=Array(k).fill(0),this.nd!==0&&(this.factors[this.nd-1]=1);let a;for(a=0;a<this.nd;a+=1)this.shape[a]=o[a],this.shapem1[a]=o[a]-1,this.strides[a]=e[a],this.backstrides[a]=e[a]*this.shapem1[a],this.coords[a]=0,a>0&&(this.factors[this.ndm1-a]=this.factors[this.nd-a]*o[this.nd-a]);this.index=0,this.pos=0}done(){return this.index>this.lengthm1}current(){let t=this.done();return{value:t?void 0:this.pos,done:t}}next(){let t=this.current();if(t.done)return t;let{ndm1:o,shapem1:e,strides:n,backstrides:a}=this,s;for(s=o;s>=0;s-=1){if(this.coords[s]<e[s]){this.coords[s]+=1,this.pos+=n[s];break}this.coords[s]=0,this.pos-=a[s]}return this.index+=1,t}[Symbol.iterator](){return this}};var D=class{iters;shape;nd;length;lengthm1;numiter;index;pos;constructor(...t){this.iters=t.map(f=>new p(f)),this.numiter=t.length;let o,e;for(o=0,e=0;o<this.numiter;o+=1)e=Math.max(e,this.iters[o].x.shape.length);this.nd=e,this.shape=Array(e).fill(0);let n,a,s,m;for(o=0;o<e;o+=1)for(this.shape[o]=1,a=0;a<this.numiter;a+=1)if(n=this.iters[a],s=o+n.x.shape.length-e,s>=0){if(m=n.x.shape[s],m==1)continue;if(this.shape[o]==1)this.shape[o]=m;else if(this.shape[o]!==m)throw new Error("shape mismatch")}for(m=this.shape.reduce((f,u)=>f*u,1),this.length=m,this.lengthm1=m-1,o=0;o<this.numiter;o+=1)for(n=this.iters[o],n.nd=this.nd,n.ndm1=this.nd-1,n.length=m,n.lengthm1=m-1,e=n.x.shape.length,e!==0&&(n.factors[this.nd-1]=1),a=0;a<this.nd;a+=1)n.shape[a]=this.shape[a],n.shapem1[a]=this.shape[a]-1,s=a+e-this.nd,s<0||n.x.shape[s]!==this.shape[a]?n.strides[a]=0:n.strides[a]=n.x.strides[s],n.backstrides[a]=n.strides[a]*n.shapem1[a],a>0&&(n.factors[this.nd-a-1]=n.factors[this.nd-a]*this.shape[this.nd-a]);this.index=0,this.pos=Array(this.numiter).fill(0)}done(){return this.index>this.lengthm1}current(){let t=this.done();return{value:t?void 0:this.pos,done:t}}next(){let t=this.current();if(t.done)return t;this.index+=1;let{numiter:o}=this,e,n;for(n=0;n<o;n+=1)e=this.iters[n],this.pos[n]=e.pos,e.next();return t}[Symbol.iterator](){return this}};var{abs:oo}=Math,eo=r=>i(r).abs();function pr(){let{data:r}=this,t=new p(this);for(let o of t)r[o]=oo(r[o]);return this}var{acos:ao}=Math,no=r=>i(r).acos();function ur(){let{data:r}=this,t=new p(this);for(let o of t)r[o]=ao(r[o]);return this}var{acosh:io}=Math,so=r=>i(r).acosh();function cr(){let{data:r}=this,t=new p(this);for(let o of t)r[o]=io(r[o]);return this}var b;try{b=H("nblas")}catch{}var X=b&&b.NoTrans,Ca=b&&b.Trans;function yr(r,t,o,e,n,a,s){if(e.length/n!==t||a.length/s!==t)throw new Error("lengths do not match");switch(r){case"float64":return b.daxpy(t,o,e,n,a,s);case"float32":return b.saxpy(t,o,e,n,a,s);default:throw new Error("wrong dtype")}}function lr(r,t,o,e,n,a){if(o.length/e!==t||n.length/a!==t)throw new Error("lengths do not match");switch(r){case"float64":return b.ddot(t,o,e,n,a);case"float32":return b.sdot(t,o,e,n,a);default:throw new Error("wrong dtype")}}function hr(r,t,o,e){if(o.length/e!==t)throw new Error("lengths do not match");switch(r){case"float64":return b.idamax(t,o,e);case"float32":return b.isamax(t,o,e);default:throw new Error("wrong dtype")}}function dr(r,t,o,e,n,a,s,m,f,u,y,c,l,d){let{length:v}=m,{length:q}=u,{length:_}=l;if(t===b.NoTrans&&v!==f*e||t===b.Trans&&v!==f*a)throw new Error("lengths do not match");if(o===b.NoTrans&&q!==y*a||o===b.Trans&&q!==y*n)throw new Error("lengths do not match");if(_!==d*e)throw new Error("lengths do not match");switch(r){case"float64":return b.dgemm(t,o,e,n,a,s,m,f,u,y,c,l,d);case"float32":return b.sgemm(t,o,e,n,a,s,m,f,u,y,c,l,d);default:throw new Error("wrong dtype")}}function Ar(r,t,o,e){if(o.length/e!==t)throw new Error("lengths do not match");switch(r){case"float64":return b.dnrm2(t,o,e);case"float32":return b.snrm2(t,o,e);default:throw new Error("wrong dtype")}}function br(r,t,o,e,n){if(e.length/n!==t)throw new Error("lengths do not match");switch(r){case"float64":return b.dscal(t,o,e,n);case"float32":return b.sscal(t,o,e,n);default:throw new Error("wrong dtype")}}var mo=(r,t,o=1)=>i(r).add(i(t),o);function Dr(r,t=1){let{data:o,length:e,strides:n,dtype:a}=this,{data:s,strides:m}=i(r);try{let f=m[m.length-1],u=n[n.length-1];if(f!==u)throw new Error("inc_x and inc_y must be equal");yr(a,e,t,s,f,o,u)}catch{let u=new D(this,r);for(let[y,c]of u)o[y]+=t*s[c]}return this}var{acos:fo}=Math,po=(r,t)=>i(r).angle(i(t));function Nr(r){return fo(this.dot(i(r))/this.norm()/i(r).norm())}var{asin:uo}=Math,co=r=>i(r).asin();function gr(){let{data:r}=this,t=new p(this);for(let o of t)r[o]=uo(r[o]);return this}var{asinh:yo}=Math,lo=r=>i(r).asinh();function xr(){let{data:r}=this,t=new p(this);for(let o of t)r[o]=yo(r[o]);return this}var{atan:ho}=Math,Ao=r=>i(r).atan();function wr(){let{data:r}=this,t=new p(this);for(let o of t)r[o]=ho(r[o]);return this}var{atanh:bo}=Math,Do=r=>i(r).atanh();function kr(){let{data:r}=this,t=new p(this);for(let o of t)r[o]=bo(r[o]);return this}var N=(...r)=>new A(new Float64Array(r.reduce((t,o)=>t*o,1)),{shape:r}).fill(0);var Y=(r,t)=>i(r).augment(i(t));function Lr(r){let[t,o]=this.shape,[e,n]=i(r).shape,{data:a}=this,{data:s}=i(r);if(e===0||n===0)return this;if(t!==e)throw new Error("rows do not match");let m=N(t,o+n),{data:f}=m,u,y;for(u=0;u<t;u+=1)for(y=0;y<o;y+=1)f[u*(o+n)+y]=a[u*o+y];for(u=0;u<e;u+=1)for(y=0;y<n;y+=1)f[u*(o+n)+(y+o)]=s[u*n+y];return m}var No=(r,t,o)=>i(r).binOp(i(t),o);function Ir(r,t){let{data:o}=this,{data:e}=i(r),n=new D(this,r);for(let[a,s]of n)o[a]=t(o[a],e[s],a);return this}var{cbrt:go}=Math,xo=r=>i(r).cbrt();function Tr(){let{data:r}=this,t=new p(this);for(let o of t)r[o]=go(r[o]);return this}var{ceil:wo}=Math,ko=r=>i(r).ceil();function Er(){let{data:r}=this,t=new p(this);for(let o of t)r[o]=wo(r[o]);return this}var Lo=(r,...t)=>{i(r).check(...t)};function vr(...r){let{shape:t,length:o}=this;if(r.length===1){let[e]=r;if(e<0||e>o-1||!Number.isFinite(e))throw new Error("index out of bounds")}else if(!t.every((e,n)=>e>r[n]&&Number.isFinite(r[n])&&r[n]>=0))throw new Error("index out of bounds")}var Io=(r,t)=>i(r).combine(i(t));function Mr(r){if(this.shape.length!==1&&r.shape.length!==1)throw new Error("combine operation not permitted for multidimensional arrays");let{length:t,data:o}=this,{length:e,data:n}=r;if(e===0)return this;if(t===0)return this.data=new(g(r.dtype))(n),this.length=e,this.dtype=r.dtype,this;let a=t+e,s=new(g(this.dtype))(a);return s.set(o),s.set(n,t),this.data=s,this.length=a,this.shape=[a],this}var To=r=>i(r).copy();function jr(){let r=N(...this.shape),{data:t}=this,{data:o}=r,e=new D(this,r);for(let[n,a]of e)o[a]=t[n];return r}var{cos:Eo}=Math,vo=r=>i(r).cos();function qr(){let{data:r}=this,t=new p(this);for(let o of t)r[o]=Eo(r[o]);return this}var{cosh:Mo}=Math,jo=r=>i(r).cosh();function _r(){let{data:r}=this,t=new p(this);for(let o of t)r[o]=Mo(r[o]);return this}var qo=(r,t)=>i(r).cross(i(t));function Sr(r){let{length:t}=this,{length:o}=r;if(t!==3||o!==3)throw new Error("vectors must have three components");let e=this.y*r.z-this.z*r.y,n=this.z*r.x-this.x*r.z,a=this.x*r.y-this.y*r.x;return this.x=e,this.y=n,this.z=a,this}var _o=r=>i(r).det();function zr(){this.square();let[r]=this.shape,[t,o]=this.copy().lu_factor(),{data:e}=t,n=1,a=1,s;for(s=0;s<r;s+=1)n*=e[s*r+s],s!==o[s]-1&&(a*=-1);return a*n}var So=r=>i(r).diagonal();function Or(){this.square();let{length:r}=this,[t,o]=this.shape,e=Math.min(t,o);return this.reshape(r).slice(0,r,e+1)}var zo=(r,t)=>i(r).dot(i(t));function Fr(r){let{data:t,length:o,strides:e,dtype:n}=this,{data:a,strides:s}=r,m=0;try{let f=s[s.length-1],u=e[e.length-1];if(f!==u)throw new Error("inc_x and inc_y must be equal");m=lr(n,o,a,f,t,u)}catch{let u=new D(this,r);for(let[y,c]of u)m+=t[y]*a[c]}return m}var M=r=>{let t=new A(new Float64Array(r*r),{shape:[r,r]}),{data:o}=t,e;for(e=0;e<r;e+=1)o[e*r+e]=1;return t};var j;try{j=H("nlapack")}catch{}var z=(r,t,o,e,n,a,s)=>{let[m]=r.shape,{data:f}=r,u=f[e*m+n],y=1/(t+o);f[e*m+n]=u-o*(f[a*m+s]+y*u),f[a*m+s]+=o*(u-y*f[a*m+s])},Oo=r=>i(r).eig();function Ur(){this.square();let[r]=this.shape;try{["float32","float64"].includes(this.dtype)||(this.dtype="float32",this.data=g(this.dtype).from(this.data));let t=j.NoEigenvector,o=j.Eigenvector,e=N(r),n=N(r),a=N(r,r),s=N(r,r),{data:m}=this,{data:f}=e,{data:u}=n,{data:y}=a,{data:c}=s;return this.dtype==="float64"&&j.dgeev(t,o,r,m,r,f,u,y,r,c,r),this.dtype==="float32"&&j.sgeev(t,o,r,m,r,f,u,y,r,c,r),[e,s]}catch{let{data:o}=this,e=M(r),n=0,a=0,s=0,m=0,f=0;do{for(a=0;a<r;a+=1)for(s=a+1;s<r;s+=1)Math.abs(o[a*r+s])>=n&&(n=Math.abs(o[a*r+s]),m=a,f=s);let u;if(Math.abs(o[m*r+f])<Math.abs(o[f*r+f])*1e-36)u=o[m*r+f]/o[f*r+f];else{let d=o[f*r+f]/2*o[m*r+f];u=1/(Math.abs(d)+Math.sqrt(d*d+1))}let y=1/Math.sqrt(u*u+1),c=u*y,l=o[m*r+f];for(o[m*r+f]=0,o[m*r+m]-=u*l,o[f*r+f]+=u*l,a=0;a<m;a+=1)z(this,y,c,a,m,a,f);for(a=m+1;a<f;a+=1)z(this,y,c,m,a,a,f);for(a=f+1;a<r;a+=1)z(this,y,c,m,a,f,a);for(a=0;a<r;a+=1)z(e,y,c,a,m,a,f)}while(n>=1e-9);return[this.diagonal(),e]}}var Fo=(r,t,o=1e-6)=>i(r).equals(i(t),o);function $r(r,t=1e-6){let{data:o}=this,{data:e}=r,n=new D(this,r);for(let[a,s]of n)if(Math.abs(o[a]-e[s])>t)return!1;return!0}var Uo=(r,t)=>{i(r).equidimensional(i(t))};function Cr(r){let{shape:t}=this,{shape:o}=r;if(!t.every((e,n)=>e===o[n]))throw new Error(`shapes ${t} and ${o} do not match`)}var $o=(r,t)=>{i(r).equilateral(i(t))};function Rr(r){let{length:t}=this,{length:o}=r;if(t!==o)throw new Error(`lengths ${t} and ${o} do not match`)}var{exp:Co}=Math,Ro=r=>i(r).exp();function Pr(){let{data:r}=this,t=new p(this);for(let o of t)r[o]=Co(r[o]);return this}var{expm1:Po}=Math,Bo=r=>i(r).expm1();function Br(){let{data:r}=this,t=new p(this);for(let o of t)r[o]=Po(r[o]);return this}var Ho=(r,t=0)=>i(r).fill(t);function Hr(r=0){let{data:t}=this,o=new p(this);for(let e of o)t[e]=r instanceof Function?r(e):r;return this}var{floor:Jo}=Math,Vo=r=>i(r).floor();function Jr(){let{data:r}=this,t=new p(this);for(let o of t)r[o]=Jo(r[o]);return this}var Go=(r,t)=>{r.forEach(t)};function Vr(r){let{data:t}=this,o=new p(this);for(let e of o)r.call(this,t[e],e,t)}var{fround:Wo}=Math,Xo=r=>i(r).fround();function Gr(){let{data:r}=this,t=new p(this);for(let o of t)r[o]=Wo(r[o]);return this}var Yo=r=>i(r).gauss();function Wr(){let{shape:[r,t],data:o}=this,e=0,n,a,s,m,f;for(s=0;s<r;s+=1){if(t<=e)return this;for(m=s;o[m*t+e]===0;)if(m+=1,r===m&&(m=s,e+=1,t===e))return this;if(s!==m&&this.swap(s,m),a=o[s*t+e],a!==0)for(f=0;f<t;f+=1)o[s*t+f]/=a;for(m=0;m<r;m+=1)if(n=o[m*t+e],m!==s)for(f=0;f<t;f+=1)o[m*t+f]-=o[s*t+f]*n;e+=1}for(s=0;s<r;s+=1){for(a=0,m=0;m<t;m+=1)a===0&&(a=o[s*t+m]);if(a!==0)for(f=0;f<t;f+=1)o[s*t+f]/=a}return this}var Zo=(r,...t)=>i(r).get(...t);function Xr(...r){this.check(...r);let{data:t,shape:o}=this,{length:e}=o,n=0,a;for(a=0;a<e;a+=1)n*=o[a],n+=r[a];return t[n]}var L;try{L=H("nlapack")}catch{}function O(r,t,o,e,n,a){if(e.length!==t*o)throw new Error("lengths do not match");switch(r){case"float64":return L.dgetrf(t,o,e,n,a);case"float32":return L.sgetrf(t,o,e,n,a);default:throw new Error("wrong dtype")}}function Yr(r,t,o,e,n){if(o.length!==t*t)throw new Error("lengths do not match");switch(r){case"float64":return L.dgetri(t,o,e,n);case"float32":return L.sgetri(t,o,e,n);default:throw new Error("wrong dtype")}}function Zr(r,t,o,e,n,a,s,m){if(e.length!==n*t||s.length!==m*o)throw new Error("lengths do not match");switch(r){case"float64":return L.dgesv(t,o,e,n,a,s,m);case"float32":return L.sgesv(t,o,e,n,a,s,m);default:throw new Error("wrong dtype")}}var Ko=r=>i(r).inv();function Kr(){this.square();let{shape:[r],dtype:t}=this;try{let{data:o}=this,e=new Int32Array(r);return O(t,r,r,o,r,e),Yr(t,r,o,r,e),this}catch{let e=M(r),n=Y(this,e).gauss(),a=N(r,r),s=N(r,r),{data:m}=n,{data:f}=a,{data:u}=s,y=new p(n),[c,l]=y.coords;for(let d of y)l<r?f[c*r+l]=m[d]:u[c*r+(l-r)]=m[d],[c,l]=y.coords;if(!a.equals(e))throw new Error("matrix is not invertible");return s}}var{log:Qo}=Math,re=r=>i(r).log();function Qr(){let{data:r}=this,t=new p(this);for(let o of t)r[o]=Qo(r[o]);return this}var{log10:te}=Math,oe=r=>i(r).log10();function rt(){let{data:r}=this,t=new p(this);for(let o of t)r[o]=te(r[o]);return this}var{log1p:ee}=Math,ae=r=>i(r).log1p();function tt(){let{data:r}=this,t=new p(this);for(let o of t)r[o]=ee(r[o]);return this}var{log2:ne}=Math,ie=r=>i(r).log2();function ot(){let{data:r}=this,t=new p(this);for(let o of t)r[o]=ne(r[o]);return this}var se=r=>i(r).lu();function et(){let[r,t]=this.copy().lu_factor(),o=r.copy(),e=r.copy(),{data:n}=o,{data:a}=e,s=new p(r),[m,f]=s.coords;for(let u of s)f<m?a[u]=0:n[u]=m===f?1:0,[m,f]=s.coords;return[o,e,t]}var me=r=>i(r).lu_factor();function at(){let{data:r,shape:[t],dtype:o}=this,e=new Int32Array(t);try{O(o,t,t,r,t,e)}catch{let a,s,m,f,u,y,c;for(c=0;c<t;c+=1){for(f=c,a=Math.abs(r[c*t+c]),y=c+1;y<t;y+=1)s=Math.abs(r[y*t+c]),a<s&&(a=s,f=y);for(e[c]=f+1,f!==c&&this.swap(c,f),m=r[c*t+c],u=c+1;u<t;u+=1)r[u*t+c]/=m;for(u=c+1;u<t;u+=1){for(y=c+1;y<t-1;y+=2)r[u*t+y]-=r[u*t+c]*r[c*t+y],r[u*t+y+1]-=r[u*t+c]*r[c*t+y+1];y===t-1&&(r[u*t+y]-=r[u*t+c]*r[c*t+y])}}}return[this,e]}var fe=(r,t)=>i(r).map(t);function nt(r){let{data:t}=this,o=new p(this),e=r.bind(this),n=this.copy(),{data:a}=n;for(let s of o)a[s]=e(t[s],s,t);return n}var pe=r=>i(r).max();function it(){let{data:r,length:t,strides:o,dtype:e}=this,n=Number.NEGATIVE_INFINITY;try{let a=o[o.length-1];n=r[hr(e,t,r,a)]}catch{let s=new p(this);for(let m of s){let f=r[m];n<f&&(n=f)}}return n}var ue=r=>i(r).mean();function st(){let{data:r,length:t}=this,o=new p(this),e=0;for(let n of o)e+=r[n];return e/t}var ce=r=>i(r).min();function mt(){let{data:r}=this,t=new p(this),o=Number.POSITIVE_INFINITY;for(let e of t){let n=r[e];o>n&&(o=n)}return o}var K=(r,t)=>new A(new Float64Array(r*t),{shape:[r,t]});var ye=(r,t)=>i(r).multiply(i(t));function ft(r){let{shape:[t,o],data:e,dtype:n}=this.copy(),{shape:[a,s],data:m}=r.copy();if(o!==a)throw new Error("sizes do not match");let f=K(t,s),{data:u}=f;try{dr(n,X,X,t,s,o,1,e,o,m,s,0,u,s)}catch{let c=new p(f),l,[d,v]=c.coords;for(let q of c){let _=0;for(l=0;l<o;l+=1)_+=e[d*o+l]*m[l*s+v];u[q]=_,[d,v]=c.coords}}return f}var{sqrt:le}=Math,he=r=>i(r).norm();function pt(){let{data:r,length:t,strides:o,dtype:e}=this,n=0;try{let a=o[o.length-1];n=Ar(e,t,r,a)}catch{n=le(this.dot(this))}return n}var de=r=>i(r).normalize();function ut(){return this.scale(1/this.norm())}var{pow:Ae}=Math,be=(r,t)=>i(r).pow(t);function ct(r){let{data:t}=this,o=new p(this);for(let e of o)t[e]=Ae(t[e],r);return this}var De=r=>i(r).prod();function yt(){let{data:r}=this,t=new p(this),o=1;for(let e of t)o*=r[e];return o}var Ne=(r,t)=>i(r).product(i(t));function lt(r){let{data:t}=this,{data:o}=r,e=new D(this,r);for(let[n,a]of e)t[n]*=o[a];return this}var ge=(r,t)=>i(r).project(i(t));function ht(r){return r.scale(this.dot(r)/r.dot(r))}var xe=(r,t)=>i(r).push(t);function dt(r){if(this.shape.length!==1)throw new Error("push operation not permitted for multidimensional arrays");let{data:t,length:o}=this,e=o+1,n=new(g(this.dtype))(e);return n.set(t),n[o]=r,this.data=n,this.length=e,this.shape=[e],this}var we=(r,t=1e-6)=>i(r).rank(t);function At(r=1e-6){let{data:t}=this.copy().gauss(),o=new p(this),e=0,[n,a]=o.coords;for(let s of o)e<=n&&a>=n&&Math.abs(t[s])>r&&(e+=1),[n,a]=o.coords;return e}var ke=r=>i(r).reciprocal();function bt(){let{data:r}=this,t=new p(this);for(let o of t)r[o]=1/r[o];return this}var Le=(r,t,o)=>i(r).reduce(t,o);function Dt(r,t){let{data:o,length:e}=this;if(e===0&&typeof t>"u")throw new Error("Reduce of empty array with no initial value.");let n=new p(this),a=r.bind(this),s;typeof t>"u"?(s=o[0],n.next()):s=t;for(let m of n)s=a(s,o[m],m,o);return s}var Ie=(r,...t)=>i(r).reshape(...t);function Nt(...r){let{length:t}=this;if(r.reduce((o,e)=>o*e,1)!==t)throw new Error(`shape ${r} does not match length ${t}`);return this.shape=r,this.strides=I(r),this}var{round:Te}=Math,Ee=r=>i(r).round();function gt(){let{data:r}=this,t=new p(this);for(let o of t)r[o]=Te(r[o]);return this}var ve=(r,t,o,e=1)=>i(r).row_add(t,o,e);function xt(r,t,o=1){this.check(r,0),this.check(t,0);let[,e]=this.shape,{data:n}=this,a;for(a=0;a<e;a+=1)n[r*e+a]+=n[t*e+a]*o;return this}var Me=(r,t)=>i(r).scale(t);function wt(r){let{data:t,length:o,strides:e,dtype:n}=this;try{let a=e[e.length-1];br(n,o,r,t,a)}catch{let s=new p(this);for(let m of s)t[m]*=r}return this}var je=(r,...t)=>{r.set(...t)};function kt(...r){let t=r.slice(0,-1),o=r[r.length-1];this.check(...t);let{shape:e}=this,n=0,a;for(a=0;a<t.length;a+=1)n*=e[a],n+=t[a];this.data[n]=o}var{sign:qe}=Math,_e=r=>i(r).sign();function Lt(){let{data:r}=this,t=new p(this);for(let o of t)r[o]=qe(r[o]);return this}var{sin:Se}=Math,ze=r=>i(r).sin();function It(){let{data:r}=this,t=new p(this);for(let o of t)r[o]=Se(r[o]);return this}var{sinh:Oe}=Math,Fe=r=>i(r).sinh();function Tt(){let{data:r}=this,t=new p(this);for(let o of t)r[o]=Oe(r[o]);return this}var Ue=(r,t,o,e)=>i(r).slice(t,o,e);function Et(r=0,t=this.shape[0],o=1){let{data:e,shape:n}=this,a=n.length;if(r<0||t<0)return this.slice(r<0?n[n.length-1]+r:r,t<0?n[n.length-1]+t:t);if(r>t)return this.slice(t,r,o);if(o<=0)throw new Error("step argument has to be a positive integer");let s=[Math.ceil((t-r)/Math.abs(o)),...n.slice(1)],m=S(s),f=I(s),u=a>1?e.subarray(r*s[s.length-1],t*s[s.length-1]):e.subarray(r,t);return f[0]*=o,new A(u,{shape:s,length:m,strides:f})}var $e=(r,t)=>i(r).solve(i(t));function vt(r){let{data:t,dtype:o}=this,{data:e,shape:[n,a]}=r;try{let s=new Int32Array(n);Zr(o,n,a,t,n,s,e,a)}catch{let[m,f]=this.lu_factor(),{data:u}=m,{data:y}=r,c,l,d;for(c=0;c<f.length;c+=1)c!==f[c]-1&&r.swap(c,f[c]-1);for(d=0;d<a;d+=1){for(c=0;c<n;c+=1)for(l=0;l<c;l+=1)y[c*a+d]-=u[c*n+l]*y[l*a+d];for(c=n-1;c>=0;c-=1){for(l=c+1;l<n;l+=1)y[c*a+d]-=u[c*n+l]*y[l*a+d];y[c*a+d]/=u[c*n+c]}}}return r}var{sqrt:Ce}=Math,Re=r=>i(r).sqrt();function Mt(){let{data:r}=this,t=new p(this);for(let o of t)r[o]=Ce(r[o]);return this}var Pe=r=>{i(r).square()};function jt(){let{length:r}=this.shape,[t,o]=this.shape;if(r!==2||t!==o)throw new Error("matrix is not square")}var Be=(r,t)=>i(r).subtract(i(t));function qt(r){return this.add(r,-1)}var He=r=>i(r).sum();function _t(){let{data:r}=this,t=new p(this),o=0;for(let e of t)o+=r[e];return o}var Je=(r,t,o)=>i(r).swap(t,o);function St(r,t){this.check(r,0),this.check(t,0);let{data:o}=this,[,e]=this.shape,n=o.slice(r*e,(r+1)*e);return o.copyWithin(r*e,t*e,(t+1)*e),o.set(n,t*e),this}var{tan:Ve}=Math,Ge=r=>i(r).tan();function zt(){let{data:r}=this,t=new p(this);for(let o of t)r[o]=Ve(r[o]);return this}var{tanh:We}=Math,Xe=r=>i(r).tanh();function Ot(){let{data:r}=this,t=new p(this);for(let o of t)r[o]=We(r[o]);return this}var Ye=r=>i(r).toArray();function Ft(r=0,t=0){let{data:o,shape:e,strides:n}=this,{length:a}=e;if(t>=a)return o[r];let s=e[t],m=n[t],f=[];for(let u=0;u<s;u++){let y=this.toArray(r,t+1);if(y===null)return null;f[u]=y,r+=m}return f}var Jt=to(Ht());var fa=r=>i(r).toString();function sr(){return`array(${(0,Jt.inspect)(this.toArray(),{depth:10,breakLength:40})}, dtype=${this.dtype})`}var pa=r=>i(r).trace();function Vt(){let[r,t]=this.shape,{data:o}=this,e=Math.min(r,t),n=0,a;for(a=0;a<e;a+=1)n+=o[a*t+a];return n}var ua=r=>i(r).transpose();function Gt(){if(this.shape.length<2)return this;let r=this.shape[0];return this.shape[0]=this.shape[1],this.shape[1]=r,r=this.strides[0],this.strides[0]=this.strides[1],this.strides[1]=r,this}var{trunc:ca}=Math,ya=r=>i(r).trunc();function Wt(){let{data:r}=this,t=new p(this);for(let o of t)r[o]=ca(r[o]);return this}var la=r=>{if(r<0)throw new Error("invalid n");let t=new Float64Array(r*r),o=new A(t,{shape:[r,r]}),e=new p(o),[n,a]=e.coords;for(let s of e){let m=r-n-1,f=r-a-1;t[s]=(a+m*2+1)%r*r+(f+m*2+1)%r+1,[n,a]=e.coords}return o};var ha=(...r)=>new A(new Float64Array(r.reduce((t,o)=>t*o,1)),{shape:r}).fill(1);var da=(...r)=>new A(new Float64Array(r.reduce((t,o)=>t*o,1)),{shape:r}).map(()=>Math.random());var Aa=(...r)=>{let t=Float64Array,o=!1,e,n,a;switch(r.length){case 2:a=r.pop(),n=1,e=r.pop();break;case 3:a=r.pop(),n=r.pop(),e=r.pop();break;default:throw new Error("invalid range")}if(a-e<0){let u=a;a=e,e=u,o=!0}if(n>a-e)throw new Error("invalid range");let s=new t(Math.ceil((a-e)/n)),m=e,f=0;if(o)for(;m<a;m+=n,f+=1)s[f]=a-m+e;else for(;m<a;m+=n,f+=1)s[f]=m;return new A(s)};var ba=Symbol.for("nodejs.util.inspect.custom"),A=class{data=new Float64Array(0);dtype="float64";length=0;shape=[0];strides=[0];[ba]=sr;abs=pr;acos=ur;acosh=cr;add=Dr;angle=Nr;asin=gr;asinh=xr;atan=wr;atanh=kr;augment=Lr;binOp=Ir;cbrt=Tr;ceil=Er;check=vr;combine=Mr;copy=jr;cos=qr;cosh=_r;cross=Sr;det=zr;diagonal=Or;dot=Fr;eig=Ur;equals=$r;equidimensional=Cr;equilateral=Rr;exp=Pr;expm1=Br;fill=Hr;floor=Jr;forEach=Vr;fround=Gr;gauss=Wr;get=Xr;inv=Kr;log=Qr;log10=rt;log1p=tt;log2=ot;lu=et;lu_factor=at;map=nt;max=it;mean=st;min=mt;multiply=ft;norm=pt;normalize=ut;pow=ct;prod=yt;product=lt;project=ht;push=dt;rank=At;reciprocal=bt;reduce=Dt;reshape=Nt;round=gt;row_add=xt;scale=wt;set=kt;sign=Lt;sin=It;sinh=Tt;slice=Et;solve=vt;sqrt=Mt;square=jt;subtract=qt;sum=_t;swap=St;tan=zt;tanh=Ot;toArray=Ft;toString=sr;trace=Vt;transpose=Gt;trunc=Wt;constructor(t,o){if(!t)return;if(t instanceof A)return t;if(t instanceof p){if(!o||!o.dtype)throw new Error("dtype is missing");t.shape&&(o.shape=t.shape);let m=t.length;t=new(g(o.dtype))(m)}let{shape:e=W(t),length:n=S(e),strides:a=I(e),dtype:s=fr(t)}=o||{};this.data=G(t)?t:new(g(s))(V(t)),this.shape=e,this.length=n,this.dtype=s,this.strides=a}get x(){return this.get(0)}set x(t){this.set(0,t)}get y(){return this.get(1)}set y(t){this.set(1,t)}get z(){return this.get(2)}set z(t){this.set(2,t)}get w(){return this.get(3)}set w(t){this.set(3,t)}get T(){return this.copy().transpose()}};try{window.v=A}catch{}export{A as NDArray,p as NDIter,D as NDMultiIter,eo as abs,no as acos,so as acosh,mo as add,po as angle,i as array,co as asin,lo as asinh,Ao as atan,Do as atanh,Y as augment,No as binOp,xo as cbrt,ko as ceil,Lo as check,Io as combine,To as copy,vo as cos,jo as cosh,qo as cross,_o as det,So as diagonal,zo as dot,Oo as eig,Fo as equals,Uo as equidimensional,$o as equilateral,Ro as exp,Bo as expm1,M as eye,Ho as fill,Vo as floor,Go as forEach,Xo as fround,Yo as gauss,Zo as get,Ko as inv,re as log,oe as log10,ae as log1p,ie as log2,se as lu,me as lu_factor,la as magic,fe as map,K as matrix,pe as max,ue as mean,ce as min,ye as multiply,he as norm,de as normalize,ha as ones,be as pow,De as prod,Ne as product,ge as project,xe as push,da as random,Aa as range,we as rank,ke as reciprocal,Le as reduce,Ie as reshape,Ee as round,ve as row_add,Me as scale,je as set,_e as sign,ze as sin,Fe as sinh,Ue as slice,$e as solve,Re as sqrt,Pe as square,Be as subtract,He as sum,Je as swap,Ge as tan,Xe as tanh,Ye as toArray,fa as toString,pa as trace,ua as transpose,ya as trunc,N as zeros};
//# sourceMappingURL=index.mjs.map
