var v=(()=>{var go=Object.create,_=Object.defineProperty,xo=Object.getPrototypeOf,wo=Object.prototype.hasOwnProperty,ko=Object.getOwnPropertyNames,Lo=Object.getOwnPropertyDescriptor;var Io=r=>_(r,"__esModule",{value:!0});var V=(r,t)=>()=>(t||r((t={exports:{}}).exports,t),t.exports),To=(r,t)=>{for(var e in t)_(r,e,{get:t[e],enumerable:!0})},Eo=(r,t,e)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of ko(t))!wo.call(r,o)&&o!=="default"&&_(r,o,{get:()=>t[o],enumerable:!(e=Lo(t,o))||e.enumerable});return r},vo=r=>Eo(Io(_(r!=null?go(xo(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);var eo=V((Fm,to)=>{to.exports=function(t){return t&&typeof t=="object"&&typeof t.copy=="function"&&typeof t.fill=="function"&&typeof t.readUInt8=="function"}});var oo=V((Um,X)=>{typeof Object.create=="function"?X.exports=function(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}:X.exports=function(t,e){t.super_=e;var o=function(){};o.prototype=e.prototype,t.prototype=new o,t.prototype.constructor=t}});var so=V(h=>{var na=/%[sdj%]/g;h.format=function(r){if(!C(r)){for(var t=[],e=0;e<arguments.length;e++)t.push(w(arguments[e]));return t.join(" ")}for(var e=1,o=arguments,n=o.length,a=String(r).replace(na,function(m){if(m==="%%")return"%";if(e>=n)return m;switch(m){case"%s":return String(o[e++]);case"%d":return Number(o[e++]);case"%j":try{return JSON.stringify(o[e++])}catch(p){return"[Circular]"}default:return m}}),s=o[e];e<n;s=o[++e])$(s)||!E(s)?a+=" "+s:a+=" "+w(s);return a};h.deprecate=function(r,t){if(x(global.process))return function(){return h.deprecate(r,t).apply(this,arguments)};if(process.noDeprecation===!0)return r;var e=!1;function o(){if(!e){if(process.throwDeprecation)throw new Error(t);process.traceDeprecation?console.trace(t):console.error(t),e=!0}return r.apply(this,arguments)}return o};var R={},K;h.debuglog=function(r){if(x(K)&&(K=process.env.NODE_DEBUG||""),r=r.toUpperCase(),!R[r])if(new RegExp("\\b"+r+"\\b","i").test(K)){var t=process.pid;R[r]=function(){var e=h.format.apply(h,arguments);console.error("%s %d: %s",r,t,e)}}else R[r]=function(){};return R[r]};function w(r,t){var e={seen:[],stylize:sa};return arguments.length>=3&&(e.depth=arguments[2]),arguments.length>=4&&(e.colors=arguments[3]),Q(t)?e.showHidden=t:t&&h._extend(e,t),x(e.showHidden)&&(e.showHidden=!1),x(e.depth)&&(e.depth=2),x(e.colors)&&(e.colors=!1),x(e.customInspect)&&(e.customInspect=!0),e.colors&&(e.stylize=ia),P(e,r,e.depth)}h.inspect=w;w.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]};w.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"};function ia(r,t){var e=w.styles[t];return e?"["+w.colors[e][0]+"m"+r+"["+w.colors[e][1]+"m":r}function sa(r,t){return r}function ma(r){var t={};return r.forEach(function(e,o){t[e]=!0}),t}function P(r,t,e){if(r.customInspect&&t&&J(t.inspect)&&t.inspect!==h.inspect&&!(t.constructor&&t.constructor.prototype===t)){var o=t.inspect(e,r);return C(o)||(o=P(r,o,e)),o}var n=pa(r,t);if(n)return n;var a=Object.keys(t),s=ma(a);if(r.showHidden&&(a=Object.getOwnPropertyNames(t)),H(t)&&(a.indexOf("message")>=0||a.indexOf("description")>=0))return rr(t);if(a.length===0){if(J(t)){var m=t.name?": "+t.name:"";return r.stylize("[Function"+m+"]","special")}if(B(t))return r.stylize(RegExp.prototype.toString.call(t),"regexp");if(er(t))return r.stylize(Date.prototype.toString.call(t),"date");if(H(t))return rr(t)}var p="",c=!1,y=["{","}"];if(ao(t)&&(c=!0,y=["[","]"]),J(t)){var u=t.name?": "+t.name:"";p=" [Function"+u+"]"}if(B(t)&&(p=" "+RegExp.prototype.toString.call(t)),er(t)&&(p=" "+Date.prototype.toUTCString.call(t)),H(t)&&(p=" "+rr(t)),a.length===0&&(!c||t.length==0))return y[0]+p+y[1];if(e<0)return B(t)?r.stylize(RegExp.prototype.toString.call(t),"regexp"):r.stylize("[Object]","special");r.seen.push(t);var l;return c?l=fa(r,t,e,s,a):l=a.map(function(d){return tr(r,t,e,s,d,c)}),r.seen.pop(),ca(l,p,y)}function pa(r,t){if(x(t))return r.stylize("undefined","undefined");if(C(t)){var e="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return r.stylize(e,"string")}if(no(t))return r.stylize(""+t,"number");if(Q(t))return r.stylize(""+t,"boolean");if($(t))return r.stylize("null","null")}function rr(r){return"["+Error.prototype.toString.call(r)+"]"}function fa(r,t,e,o,n){for(var a=[],s=0,m=t.length;s<m;++s)io(t,String(s))?a.push(tr(r,t,e,o,String(s),!0)):a.push("");return n.forEach(function(p){p.match(/^\d+$/)||a.push(tr(r,t,e,o,p,!0))}),a}function tr(r,t,e,o,n,a){var s,m,p;if(p=Object.getOwnPropertyDescriptor(t,n)||{value:t[n]},p.get?p.set?m=r.stylize("[Getter/Setter]","special"):m=r.stylize("[Getter]","special"):p.set&&(m=r.stylize("[Setter]","special")),io(o,n)||(s="["+n+"]"),m||(r.seen.indexOf(p.value)<0?($(e)?m=P(r,p.value,null):m=P(r,p.value,e-1),m.indexOf(`
`)>-1&&(a?m=m.split(`
`).map(function(c){return"  "+c}).join(`
`).substr(2):m=`
`+m.split(`
`).map(function(c){return"   "+c}).join(`
`))):m=r.stylize("[Circular]","special")),x(s)){if(a&&n.match(/^\d+$/))return m;s=JSON.stringify(""+n),s.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(s=s.substr(1,s.length-2),s=r.stylize(s,"name")):(s=s.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),s=r.stylize(s,"string"))}return s+": "+m}function ca(r,t,e){var o=0,n=r.reduce(function(a,s){return o++,s.indexOf(`
`)>=0&&o++,a+s.replace(/\u001b\[\d\d?m/g,"").length+1},0);return n>60?e[0]+(t===""?"":t+`
 `)+" "+r.join(`,
  `)+" "+e[1]:e[0]+t+" "+r.join(", ")+" "+e[1]}function ao(r){return Array.isArray(r)}h.isArray=ao;function Q(r){return typeof r=="boolean"}h.isBoolean=Q;function $(r){return r===null}h.isNull=$;function ua(r){return r==null}h.isNullOrUndefined=ua;function no(r){return typeof r=="number"}h.isNumber=no;function C(r){return typeof r=="string"}h.isString=C;function ya(r){return typeof r=="symbol"}h.isSymbol=ya;function x(r){return r===void 0}h.isUndefined=x;function B(r){return E(r)&&or(r)==="[object RegExp]"}h.isRegExp=B;function E(r){return typeof r=="object"&&r!==null}h.isObject=E;function er(r){return E(r)&&or(r)==="[object Date]"}h.isDate=er;function H(r){return E(r)&&(or(r)==="[object Error]"||r instanceof Error)}h.isError=H;function J(r){return typeof r=="function"}h.isFunction=J;function la(r){return r===null||typeof r=="boolean"||typeof r=="number"||typeof r=="string"||typeof r=="symbol"||typeof r=="undefined"}h.isPrimitive=la;h.isBuffer=eo();function or(r){return Object.prototype.toString.call(r)}function ar(r){return r<10?"0"+r.toString(10):r.toString(10)}var ha=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function da(){var r=new Date,t=[ar(r.getHours()),ar(r.getMinutes()),ar(r.getSeconds())].join(":");return[r.getDate(),ha[r.getMonth()],t].join(" ")}h.log=function(){console.log("%s - %s",da(),h.format.apply(h,arguments))};h.inherits=oo();h._extend=function(r,t){if(!t||!E(t))return r;for(var e=Object.keys(t),o=e.length;o--;)r[e[o]]=t[e[o]];return r};function io(r,t){return Object.prototype.hasOwnProperty.call(r,t)}});var Da={};To(Da,{NDArray:()=>A,NDIter:()=>f,NDMultiIter:()=>D,V_MAXDIMS:()=>k,abs:()=>mr,acos:()=>fr,acosh:()=>ur,add:()=>Nr,angle:()=>xr,array:()=>i,asin:()=>kr,asinh:()=>Ir,atan:()=>Er,atanh:()=>Mr,augment:()=>S,binOp:()=>_r,cbrt:()=>Sr,ceil:()=>Fr,check:()=>$r,combine:()=>Rr,copy:()=>Br,cos:()=>Jr,cosh:()=>Gr,cross:()=>Yr,det:()=>Xr,diagonal:()=>Qr,dot:()=>tt,eig:()=>ot,equals:()=>nt,equidimensional:()=>st,equilateral:()=>pt,exp:()=>ct,expm1:()=>yt,eye:()=>T,fill:()=>ht,floor:()=>At,forEach:()=>Dt,fround:()=>gt,gauss:()=>wt,get:()=>Lt,inv:()=>vt,log:()=>qt,log10:()=>_t,log1p:()=>St,log2:()=>Ft,lu:()=>$t,lu_factor:()=>Rt,magic:()=>Ao,map:()=>Bt,matrix:()=>U,max:()=>Jt,mean:()=>Gt,min:()=>Yt,multiply:()=>Xt,norm:()=>Qt,normalize:()=>te,ones:()=>bo,pow:()=>oe,prod:()=>ne,product:()=>se,project:()=>pe,push:()=>ce,random:()=>Do,range:()=>No,rank:()=>ye,reciprocal:()=>he,reduce:()=>Ae,reshape:()=>De,round:()=>ge,row_add:()=>we,scale:()=>Le,set:()=>Te,sign:()=>ve,sin:()=>qe,sinh:()=>_e,slice:()=>Se,solve:()=>Fe,sqrt:()=>$e,square:()=>Re,subtract:()=>Be,sum:()=>Je,swap:()=>Ge,tan:()=>Ye,tanh:()=>Xe,toArray:()=>Qe,toString:()=>po,trace:()=>fo,transpose:()=>uo,trunc:()=>lo,zeros:()=>N});var G=r=>r.reduce((t,e)=>t.concat(Array.isArray(e)?G(e):e),[]),W=r=>ArrayBuffer.isView(r)&&!(r instanceof DataView),z=r=>r.reduce((t,e)=>t*e,1),Y=r=>Array.isArray(r)||W(r)?[r.length].concat(Y(r[0])):[],I=r=>[...r.slice(1).map((t,e)=>r.slice(e+1).reduce((o,n)=>o*n,1)),1],sr=r=>{let{constructor:{name:t="Float32Array"}={}}=r||{};switch(t){case"Int8Array":return"int8";case"Uint8Array":return"uint8";case"Int16Array":return"int16";case"Uint16Array":return"uint16";case"Int32Array":return"int32";case"Uint32Array":return"uint32";case"Uint8ClampedArray":return"uint8c";case"Float32Array":return"float32";case"Float64Array":return"float64";default:return"float64"}},g=r=>{switch(r){case"int8":return Int8Array;case"uint8":return Uint8Array;case"int16":return Int16Array;case"uint16":return Uint16Array;case"int32":return Int32Array;case"uint32":return Uint32Array;case"uint8c":return Uint8ClampedArray;case"float32":return Float32Array;case"float64":return Float64Array;default:return Float64Array}};var i=(...r)=>new A(...r);var k=32,f=class{constructor(t){this.x=i(t);let{shape:e,strides:o,length:n}=this.x;this.length=n,this.lengthm1=n-1,this.nd=e.length,this.ndm1=this.nd-1,this.shape=Array(k).fill(0),this.strides=Array(k).fill(0),this.shapem1=Array(k).fill(0),this.coords=Array(k).fill(0),this.backstrides=Array(k).fill(0),this.factors=Array(k).fill(0),this.nd!==0&&(this.factors[this.nd-1]=1);let a;for(a=0;a<this.nd;a+=1)this.shape[a]=e[a],this.shapem1[a]=e[a]-1,this.strides[a]=o[a],this.backstrides[a]=o[a]*this.shapem1[a],this.coords[a]=0,a>0&&(this.factors[this.ndm1-a]=this.factors[this.nd-a]*e[this.nd-a]);this.index=0,this.pos=0}done(){return this.index>this.lengthm1}current(){let t=this.done();return{value:t?void 0:this.pos,done:t}}next1d(){let{strides:t}=this;this.pos+=t[0],this.coords[0]+=1}next2d(){let{strides:t,shapem1:e,backstrides:o}=this;this.coords[1]<e[1]?(this.coords[1]+=1,this.pos+=t[1]):(this.coords[1]=0,this.coords[0]+=1,this.pos+=t[0]-o[1])}nextnd(){let{ndm1:t,shapem1:e,strides:o,backstrides:n}=this,a;for(a=t;a>=0;a-=1){if(this.coords[a]<e[a]){this.coords[a]+=1,this.pos+=o[a];break}this.coords[a]=0,this.pos-=n[a]}}next(){let t=this.current();this.index+=1;let{ndm1:e}=this;return e===0?this.next1d():e===1?this.next2d():this.nextnd(),t}[Symbol.iterator](){return this}},D=class{constructor(...t){this.iters=t.map(p=>new f(p)),this.numiter=t.length;let e,o;for(e=0,o=0;e<this.numiter;e+=1)o=Math.max(o,this.iters[e].x.shape.length);this.nd=o,this.shape=Array(o).fill(0);let n,a,s,m;for(e=0;e<o;e+=1)for(this.shape[e]=1,a=0;a<this.numiter;a+=1)if(n=this.iters[a],s=e+n.x.shape.length-o,s>=0){if(m=n.x.shape[s],m==1)continue;if(this.shape[e]==1)this.shape[e]=m;else if(this.shape[e]!==m)throw new Error("shape mismatch")}for(m=this.shape.reduce((p,c)=>p*c,1),this.length=m,this.lengthm1=m-1,e=0;e<this.numiter;e+=1)for(n=this.iters[e],n.nd=this.nd,n.ndm1=this.nd-1,n.length=m,n.lengthm1=m-1,o=n.x.shape.length,o!==0&&(n.factors[this.nd-1]=1),a=0;a<this.nd;a+=1)n.shape[a]=this.shape[a],n.shapem1[a]=this.shape[a]-1,s=a+o-this.nd,s<0||n.x.shape[s]!==this.shape[a]?n.strides[a]=0:n.strides[a]=n.x.strides[s],n.backstrides[a]=n.strides[a]*n.shapem1[a],a>0&&(n.factors[this.nd-a-1]=n.factors[this.nd-a]*this.shape[this.nd-a]);this.index=0,this.pos=Array(this.numiter).fill(0)}done(){return this.index>this.lengthm1}current(){let t=this.done();return{value:t?void 0:this.pos,done:t}}next(){let t=this.current();this.index+=1;let{numiter:e}=this,o,n;for(n=0;n<e;n+=1)o=this.iters[n],this.pos[n]=o.pos,o.next();return t}[Symbol.iterator](){return this}};var{abs:Mo}=Math,mr=r=>i(r).abs();function pr(){let{data:r}=this,t=new f(this);for(let e of t)r[e]=Mo(r[e]);return this}var{acos:qo}=Math,fr=r=>i(r).acos();function cr(){let{data:r}=this,t=new f(this);for(let e of t)r[e]=qo(r[e]);return this}var{acosh:jo}=Math,ur=r=>i(r).acosh();function yr(){let{data:r}=this,t=new f(this);for(let e of t)r[e]=jo(r[e]);return this}var b;try{b=require("nblas")}catch(r){}var Z=b&&b.NoTrans,Oa=b&&b.Trans;function lr(r,t,e,o,n,a,s){if(o.length/n!==t||a.length/s!==t)throw new Error("lengths do not match");switch(r){case"float64":return b.daxpy(t,e,o,n,a,s);case"float32":return b.saxpy(t,e,o,n,a,s);default:throw new Error("wrong dtype")}}function hr(r,t,e,o,n,a){if(e.length/o!==t||n.length/a!==t)throw new Error("lengths do not match");switch(r){case"float64":return b.ddot(t,e,o,n,a);case"float32":return b.sdot(t,e,o,n,a);default:throw new Error("wrong dtype")}}function dr(r,t,e,o){if(e.length/o!==t)throw new Error("lengths do not match");switch(r){case"float64":return b.idamax(t,e,o);case"float32":return b.isamax(t,e,o);default:throw new Error("wrong dtype")}}function Ar(r,t,e,o,n,a,s,m,p,c,y,u,l,d){let{length:v}=m,{length:q}=c,{length:j}=l;if(t===b.NoTrans&&v!==p*o||t===b.Trans&&v!==p*a)throw new Error("lengths do not match");if(e===b.NoTrans&&q!==y*a||e===b.Trans&&q!==y*n)throw new Error("lengths do not match");if(j!==d*o)throw new Error("lengths do not match");switch(r){case"float64":return b.dgemm(t,e,o,n,a,s,m,p,c,y,u,l,d);case"float32":return b.sgemm(t,e,o,n,a,s,m,p,c,y,u,l,d);default:throw new Error("wrong dtype")}}function br(r,t,e,o){if(e.length/o!==t)throw new Error("lengths do not match");switch(r){case"float64":return b.dnrm2(t,e,o);case"float32":return b.snrm2(t,e,o);default:throw new Error("wrong dtype")}}function Dr(r,t,e,o,n){if(o.length/n!==t)throw new Error("lengths do not match");switch(r){case"float64":return b.dscal(t,e,o,n);case"float32":return b.sscal(t,e,o,n);default:throw new Error("wrong dtype")}}var Nr=(r,t,e=1)=>i(r).add(i(t),e);function gr(r,t=1){let{data:e,length:o,strides:n,dtype:a}=this,{data:s,strides:m}=i(r);try{let p=m[m.length-1],c=n[n.length-1];if(p!==c)throw new Error("inc_x and inc_y must be equal");lr(a,o,t,s,p,e,c)}catch(p){let c=new D(this,r);for(let[y,u]of c)e[y]+=t*s[u]}return this}var{acos:_o}=Math,xr=(r,t)=>i(r).angle(i(t));function wr(r){return _o(this.dot(i(r))/this.norm()/i(r).norm())}var{asin:zo}=Math,kr=r=>i(r).asin();function Lr(){let{data:r}=this,t=new f(this);for(let e of t)r[e]=zo(r[e]);return this}var{asinh:So}=Math,Ir=r=>i(r).asinh();function Tr(){let{data:r}=this,t=new f(this);for(let e of t)r[e]=So(r[e]);return this}var{atan:Oo}=Math,Er=r=>i(r).atan();function vr(){let{data:r}=this,t=new f(this);for(let e of t)r[e]=Oo(r[e]);return this}var{atanh:Fo}=Math,Mr=r=>i(r).atanh();function qr(){let{data:r}=this,t=new f(this);for(let e of t)r[e]=Fo(r[e]);return this}var N=(...r)=>new A(new Float64Array(r.reduce((t,e)=>t*e,1)),{shape:r}).fill(0);var S=(r,t)=>i(r).augment(i(t));function jr(r){let[t,e]=this.shape,[o,n]=i(r).shape,{data:a}=this,{data:s}=i(r);if(o===0||n===0)return this;if(t!==o)throw new Error("rows do not match");let m=N(t,e+n),{data:p}=m,c,y;for(c=0;c<t;c+=1)for(y=0;y<e;y+=1)p[c*(e+n)+y]=a[c*e+y];for(c=0;c<o;c+=1)for(y=0;y<n;y+=1)p[c*(e+n)+(y+e)]=s[c*n+y];return m}var _r=(r,t,e)=>i(r).binOp(i(t),e);function zr(r,t){let{data:e}=this,{data:o}=i(r),n=new D(this,r);for(let[a,s]of n)e[a]=t(e[a],o[s],a);return this}var{cbrt:Uo}=Math,Sr=r=>i(r).cbrt();function Or(){let{data:r}=this,t=new f(this);for(let e of t)r[e]=Uo(r[e]);return this}var{ceil:$o}=Math,Fr=r=>i(r).ceil();function Ur(){let{data:r}=this,t=new f(this);for(let e of t)r[e]=$o(r[e]);return this}var $r=(r,...t)=>{i(r).check(...t)};function Cr(...r){let{shape:t,length:e}=this;if(r.length===1){let[o]=r;if(o<0||o>e-1||!Number.isFinite(o))throw new Error("index out of bounds")}else if(!t.every((o,n)=>o>r[n]&&Number.isFinite(r[n])&&r[n]>=0))throw new Error("index out of bounds")}var Rr=(r,t)=>i(r).combine(i(t));function Pr(r){if(this.shape.length!==1&&r.shape.length!==1)throw new Error("combine operation not permitted for multidimensional arrays");let{length:t,data:e}=this,{length:o,data:n}=r;if(o===0)return this;if(t===0)return this.data=new(g(r.dtype))(n),this.length=o,this.dtype=r.dtype,this;let a=t+o,s=new(g(this.dtype))(a);return s.set(e),s.set(n,t),this.data=s,this.length=a,this.shape=[a],this}var Br=r=>i(r).copy();function Hr(){let r=N(...this.shape),{data:t}=this,{data:e}=r,o=new D(this,r);for(let[n,a]of o)e[a]=t[n];return r}var{cos:Co}=Math,Jr=r=>i(r).cos();function Vr(){let{data:r}=this,t=new f(this);for(let e of t)r[e]=Co(r[e]);return this}var{cosh:Ro}=Math,Gr=r=>i(r).cosh();function Wr(){let{data:r}=this,t=new f(this);for(let e of t)r[e]=Ro(r[e]);return this}var Yr=(r,t)=>i(r).cross(i(t));function Zr(r){let{length:t}=this,{length:e}=r;if(t!==3||e!==3)throw new Error("vectors must have three components");let o=this.y*r.z-this.z*r.y,n=this.z*r.x-this.x*r.z,a=this.x*r.y-this.y*r.x;return this.x=o,this.y=n,this.z=a,this}var Xr=r=>i(r).det();function Kr(){this.square();let[r]=this.shape,[t,e]=this.copy().lu_factor(),{data:o}=t,n=1,a=1,s;for(s=0;s<r;s+=1)n*=o[s*r+s],s!==e[s]-1&&(a*=-1);return a*n}var Qr=r=>i(r).diagonal();function rt(){this.square();let{length:r}=this,[t,e]=this.shape,o=Math.min(t,e);return this.reshape(r).slice(0,r,o+1)}var tt=(r,t)=>i(r).dot(i(t));function et(r){let{data:t,length:e,strides:o,dtype:n}=this,{data:a,strides:s}=r,m=0;try{let p=s[s.length-1],c=o[o.length-1];if(p!==c)throw new Error("inc_x and inc_y must be equal");m=hr(n,e,a,p,t,c)}catch(p){let c=new D(this,r);for(let[y,u]of c)m+=t[y]*a[u]}return m}var T=r=>{let t=new A(new Float64Array(r*r),{shape:[r,r]}),{data:e}=t,o;for(o=0;o<r;o+=1)e[o*r+o]=1;return t};var M;try{M=require("nlapack")}catch(r){}var O=(r,t,e,o,n,a,s)=>{let[m]=r.shape,{data:p}=r,c=p[o*m+n],y=1/(t+e);p[o*m+n]=c-e*(p[a*m+s]+y*c),p[a*m+s]+=e*(c-y*p[a*m+s])},ot=r=>i(r).eig();function at(){this.square();let[r]=this.shape;try{["float32","float64"].includes(this.dtype)||(this.dtype="float32",this.data=g(this.dtype).from(this.data));let t=M.NoEigenvector,e=M.Eigenvector,o=N(r),n=N(r),a=N(r,r),s=N(r,r),{data:m}=this,{data:p}=o,{data:c}=n,{data:y}=a,{data:u}=s;return this.dtype==="float64"&&M.dgeev(t,e,r,m,r,p,c,y,r,u,r),this.dtype==="float32"&&M.sgeev(t,e,r,m,r,p,c,y,r,u,r),[o,s]}catch(t){let{data:e}=this,o=T(r),n=0,a=0,s=0,m=0,p=0;do{for(a=0;a<r;a+=1)for(s=a+1;s<r;s+=1)Math.abs(e[a*r+s])>=n&&(n=Math.abs(e[a*r+s]),m=a,p=s);let c;if(Math.abs(e[m*r+p])<Math.abs(e[p*r+p])*1e-36)c=e[m*r+p]/e[p*r+p];else{let d=e[p*r+p]/2*e[m*r+p];c=1/(Math.abs(d)+Math.sqrt(d*d+1))}let y=1/Math.sqrt(c*c+1),u=c*y,l=e[m*r+p];for(e[m*r+p]=0,e[m*r+m]-=c*l,e[p*r+p]+=c*l,a=0;a<m;a+=1)O(this,y,u,a,m,a,p);for(a=m+1;a<p;a+=1)O(this,y,u,m,a,a,p);for(a=p+1;a<r;a+=1)O(this,y,u,m,a,p,a);for(a=0;a<r;a+=1)O(o,y,u,a,m,a,p)}while(n>=1e-9);return[this.diagonal(),o]}}var nt=(r,t,e=1e-6)=>i(r).equals(i(t),e);function it(r,t=1e-6){let{data:e}=this,{data:o}=r,n=new D(this,r);for(let[a,s]of n)if(Math.abs(e[a]-o[s])>t)return!1;return!0}var st=(r,t)=>{i(r).equidimensional(i(t))};function mt(r){let{shape:t}=this,{shape:e}=r;if(!t.every((o,n)=>o===e[n]))throw new Error(`shapes ${t} and ${e} do not match`)}var pt=(r,t)=>{i(r).equilateral(i(t))};function ft(r){let{length:t}=this,{length:e}=r;if(t!==e)throw new Error(`lengths ${t} and ${e} do not match`)}var{exp:Po}=Math,ct=r=>i(r).exp();function ut(){let{data:r}=this,t=new f(this);for(let e of t)r[e]=Po(r[e]);return this}var{expm1:Bo}=Math,yt=r=>i(r).expm1();function lt(){let{data:r}=this,t=new f(this);for(let e of t)r[e]=Bo(r[e]);return this}var ht=(r,t=0)=>i(r).fill(t);function dt(r=0){let{data:t}=this,e=new f(this);for(let o of e)t[o]=r instanceof Function?r(o):r;return this}var{floor:Ho}=Math,At=r=>i(r).floor();function bt(){let{data:r}=this,t=new f(this);for(let e of t)r[e]=Ho(r[e]);return this}var Dt=(r,t)=>{r.forEach(t)};function Nt(r){let{data:t}=this,e=new f(this);for(let o of e)r.call(this,t[o],o,t)}var{fround:Jo}=Math,gt=r=>i(r).fround();function xt(){let{data:r}=this,t=new f(this);for(let e of t)r[e]=Jo(r[e]);return this}var wt=r=>i(r).gauss();function kt(){let{shape:[r,t],data:e}=this,o=0,n,a,s,m,p;for(s=0;s<r;s+=1){if(t<=o)return this;for(m=s;e[m*t+o]===0;)if(m+=1,r===m&&(m=s,o+=1,t===o))return this;if(s!==m&&this.swap(s,m),a=e[s*t+o],a!==0)for(p=0;p<t;p+=1)e[s*t+p]/=a;for(m=0;m<r;m+=1)if(n=e[m*t+o],m!==s)for(p=0;p<t;p+=1)e[m*t+p]-=e[s*t+p]*n;o+=1}for(s=0;s<r;s+=1){for(a=0,m=0;m<t;m+=1)a===0&&(a=e[s*t+m]);if(a!==0)for(p=0;p<t;p+=1)e[s*t+p]/=a}return this}var Lt=(r,...t)=>i(r).get(...t);function It(...r){this.check(...r);let{data:t,shape:e}=this,{length:o}=e,n=r[o-1],a,s;for(a=0;a<o-1;a+=1){let m=1;for(s=a+1;s<o;s+=1)m*=e[s];n+=r[a]*m}return t[n]}var L;try{L=require("nlapack")}catch(r){}function F(r,t,e,o,n,a){if(o.length!==t*e)throw new Error("lengths do not match");switch(r){case"float64":return L.dgetrf(t,e,o,n,a);case"float32":return L.sgetrf(t,e,o,n,a);default:throw new Error("wrong dtype")}}function Tt(r,t,e,o,n){if(e.length!==t*t)throw new Error("lengths do not match");switch(r){case"float64":return L.dgetri(t,e,o,n);case"float32":return L.sgetri(t,e,o,n);default:throw new Error("wrong dtype")}}function Et(r,t,e,o,n,a,s,m){if(o.length!==n*t||s.length!==m*e)throw new Error("lengths do not match");switch(r){case"float64":return L.dgesv(t,e,o,n,a,s,m);case"float32":return L.sgesv(t,e,o,n,a,s,m);default:throw new Error("wrong dtype")}}var vt=r=>i(r).inv();function Mt(){this.square();let{shape:[r],dtype:t}=this;try{let{data:e}=this,o=new Int32Array(r);return F(t,r,r,e,r,o),Tt(t,r,e,r,o),this}catch(e){let o=T(r),n=S(this,o).gauss(),a=N(r,r),s=N(r,r),{data:m}=n,{data:p}=a,{data:c}=s,y=new f(n),[u,l]=y.coords;for(let d of y)l<r?p[u*r+l]=m[d]:c[u*r+(l-r)]=m[d],[u,l]=y.coords;if(!a.equals(o))throw new Error("matrix is not invertible");return s}}var{log:Vo}=Math,qt=r=>i(r).log();function jt(){let{data:r}=this,t=new f(this);for(let e of t)r[e]=Vo(r[e]);return this}var{log10:Go}=Math,_t=r=>i(r).log10();function zt(){let{data:r}=this,t=new f(this);for(let e of t)r[e]=Go(r[e]);return this}var{log1p:Wo}=Math,St=r=>i(r).log1p();function Ot(){let{data:r}=this,t=new f(this);for(let e of t)r[e]=Wo(r[e]);return this}var{log2:Yo}=Math,Ft=r=>i(r).log2();function Ut(){let{data:r}=this,t=new f(this);for(let e of t)r[e]=Yo(r[e]);return this}var $t=r=>i(r).lu();function Ct(){let[r,t]=this.copy().lu_factor(),e=r.copy(),o=r.copy(),{data:n}=e,{data:a}=o,s=new f(r),[m,p]=s.coords;for(let c of s)p<m?a[c]=0:n[c]=m===p?1:0,[m,p]=s.coords;return[e,o,t]}var Rt=r=>i(r).lu_factor();function Pt(){let{data:r,shape:[t],dtype:e}=this,o=new Int32Array(t);try{F(e,t,t,r,t,o)}catch(n){let a,s,m,p,c,y,u;for(u=0;u<t;u+=1){for(p=u,a=Math.abs(r[u*t+u]),y=u+1;y<t;y+=1)s=Math.abs(r[y*t+u]),a<s&&(a=s,p=y);for(o[u]=p+1,p!==u&&this.swap(u,p),m=r[u*t+u],c=u+1;c<t;c+=1)r[c*t+u]/=m;for(c=u+1;c<t;c+=1){for(y=u+1;y<t-1;y+=2)r[c*t+y]-=r[c*t+u]*r[u*t+y],r[c*t+y+1]-=r[c*t+u]*r[u*t+y+1];y===t-1&&(r[c*t+y]-=r[c*t+u]*r[u*t+y])}}}return[this,o]}var Bt=(r,t)=>i(r).map(t);function Ht(r){let{data:t}=this,e=new f(this),o=r.bind(this),n=this.copy(),{data:a}=n;for(let s of e)a[s]=o(t[s],s,t);return n}var Jt=r=>i(r).max();function Vt(){let{data:r,length:t,strides:e,dtype:o}=this,n=Number.NEGATIVE_INFINITY;try{let a=e[e.length-1];n=r[dr(o,t,r,a)]}catch(a){let s=new f(this);for(let m of s){let p=r[m];n<p&&(n=p)}}return n}var Gt=r=>i(r).mean();function Wt(){let{data:r,length:t}=this,e=new f(this),o=0;for(let n of e)o+=r[n];return o/t}var Yt=r=>i(r).min();function Zt(){let{data:r}=this,t=new f(this),e=Number.POSITIVE_INFINITY;for(let o of t){let n=r[o];e>n&&(e=n)}return e}var U=(r,t)=>new A(new Float64Array(r*t),{shape:[r,t]});var Xt=(r,t)=>i(r).multiply(i(t));function Kt(r){let{shape:[t,e],data:o,dtype:n}=this,{shape:[a,s],data:m}=r;if(e!==a)throw new Error("sizes do not match");let p=U(t,s),{data:c}=p;try{Ar(n,Z,Z,t,s,e,1,o,e,m,s,0,c,s)}catch(y){let u=new f(p),l,[d,v]=u.coords;for(let q of u){let j=0;for(l=0;l<e;l+=1)j+=o[d*e+l]*m[l*s+v];c[q]=j,[d,v]=u.coords}}return p}var{sqrt:Zo}=Math,Qt=r=>i(r).norm();function re(){let{data:r,length:t,strides:e,dtype:o}=this,n=0;try{let a=e[e.length-1];n=br(o,t,r,a)}catch(a){n=Zo(this.dot(this))}return n}var te=r=>i(r).normalize();function ee(){return this.scale(1/this.norm())}var{pow:Xo}=Math,oe=(r,t)=>i(r).pow(t);function ae(r){let{data:t}=this,e=new f(this);for(let o of e)t[o]=Xo(t[o],r);return this}var ne=r=>i(r).prod();function ie(){let{data:r}=this,t=new f(this),e=1;for(let o of t)e*=r[o];return e}var se=(r,t)=>i(r).product(i(t));function me(r){let{data:t}=this,{data:e}=r,o=new D(this,r);for(let[n,a]of o)t[n]*=e[a];return this}var pe=(r,t)=>i(r).project(i(t));function fe(r){return r.scale(this.dot(r)/r.dot(r))}var ce=(r,t)=>i(r).push(t);function ue(r){if(this.shape.length!==1)throw new Error("push operation not permitted for multidimensional arrays");let{data:t,length:e}=this,o=e+1,n=new(g(this.dtype))(o);return n.set(t),n[e]=r,this.data=n,this.length=o,this.shape=[o],this}var ye=(r,t=1e-6)=>i(r).rank(t);function le(r=1e-6){let{data:t}=this.copy().gauss(),e=new f(this),o=0,[n,a]=e.coords;for(let s of e)o<=n&&a>=n&&Math.abs(t[s])>r&&(o+=1),[n,a]=e.coords;return o}var he=r=>i(r).reciprocal();function de(){let{data:r}=this,t=new f(this);for(let e of t)r[e]=1/r[e];return this}var Ae=(r,t,e)=>i(r).reduce(t,e);function be(r,t){let{data:e,length:o}=this;if(o===0&&typeof t=="undefined")throw new Error("Reduce of empty array with no initial value.");let n=new f(this),a=r.bind(this),s;typeof t=="undefined"?(s=e[0],n.next()):s=t;for(let m of n)s=a(s,e[m],m,e);return s}var De=(r,...t)=>i(r).reshape(...t);function Ne(...r){let{length:t}=this;if(r.reduce((e,o)=>e*o,1)!==t)throw new Error(`shape ${r} does not match length ${t}`);return this.shape=r,this.strides=I(r),this}var{round:Ko}=Math,ge=r=>i(r).round();function xe(){let{data:r}=this,t=new f(this);for(let e of t)r[e]=Ko(r[e]);return this}var we=(r,t,e,o=1)=>i(r).row_add(t,e,o);function ke(r,t,e=1){this.check(r,0),this.check(t,0);let[,o]=this.shape,{data:n}=this,a;for(a=0;a<o;a+=1)n[r*o+a]+=n[t*o+a]*e;return this}var Le=(r,t)=>i(r).scale(t);function Ie(r){let{data:t,length:e,strides:o,dtype:n}=this;try{let a=o[o.length-1];Dr(n,e,r,t,a)}catch(a){let s=new f(this);for(let m of s)t[m]*=r}return this}var Te=(r,...t)=>{r.set(...t)};function Ee(...r){let t=r.slice(0,-1),e=r[r.length-1];this.check(...t);let{shape:o}=this,n=t[t.length-1],a;for(a=0;a<t.length-1;a+=1)n+=t[a]*o[a+1];this.data[n]=e}var{sign:Qo}=Math,ve=r=>i(r).sign();function Me(){let{data:r}=this,t=new f(this);for(let e of t)r[e]=Qo(r[e]);return this}var{sin:ra}=Math,qe=r=>i(r).sin();function je(){let{data:r}=this,t=new f(this);for(let e of t)r[e]=ra(r[e]);return this}var{sinh:ta}=Math,_e=r=>i(r).sinh();function ze(){let{data:r}=this,t=new f(this);for(let e of t)r[e]=ta(r[e]);return this}var Se=(r,t,e,o)=>i(r).slice(t,e,o);function Oe(r=0,t=this.shape[0],e=1){let{data:o,shape:n}=this,a=n.length;if(r<0||t<0)return this.slice(r<0?n[n.length-1]+r:r,t<0?n[n.length-1]+t:t);if(r>t)return this.slice(t,r,e);if(e<=0)throw new Error("step argument has to be a positive integer");let s=[Math.ceil((t-r)/Math.abs(e)),...n.slice(1)],m=z(s),p=I(s),c=a>1?o.subarray(r*s[s.length-1],t*s[s.length-1]):o.subarray(r,t);return p[0]*=e,new A(c,{shape:s,length:m,strides:p})}var Fe=(r,t)=>i(r).solve(i(t));function Ue(r){let{data:t,dtype:e}=this,{data:o,shape:[n,a]}=r;try{let s=new Int32Array(n);Et(e,n,a,t,n,s,o,a)}catch(s){let[m,p]=this.lu_factor(),{data:c}=m,{data:y}=r,u,l,d;for(u=0;u<p.length;u+=1)u!==p[u]-1&&r.swap(u,p[u]-1);for(d=0;d<a;d+=1){for(u=0;u<n;u+=1)for(l=0;l<u;l+=1)y[u*a+d]-=c[u*n+l]*y[l*a+d];for(u=n-1;u>=0;u-=1){for(l=u+1;l<n;l+=1)y[u*a+d]-=c[u*n+l]*y[l*a+d];y[u*a+d]/=c[u*n+u]}}}return r}var{sqrt:ea}=Math,$e=r=>i(r).sqrt();function Ce(){let{data:r}=this,t=new f(this);for(let e of t)r[e]=ea(r[e]);return this}var Re=r=>{i(r).square()};function Pe(){let{length:r}=this.shape,[t,e]=this.shape;if(r!==2||t!==e)throw new Error("matrix is not square")}var Be=(r,t)=>i(r).subtract(i(t));function He(r){return this.add(r,-1)}var Je=r=>i(r).sum();function Ve(){let{data:r}=this,t=new f(this),e=0;for(let o of t)e+=r[o];return e}var Ge=(r,t,e)=>i(r).swap(t,e);function We(r,t){this.check(r,0),this.check(t,0);let{data:e}=this,[,o]=this.shape,n=e.slice(r*o,(r+1)*o);return e.copyWithin(r*o,t*o,(t+1)*o),e.set(n,t*o),this}var{tan:oa}=Math,Ye=r=>i(r).tan();function Ze(){let{data:r}=this,t=new f(this);for(let e of t)r[e]=oa(r[e]);return this}var{tanh:aa}=Math,Xe=r=>i(r).tanh();function Ke(){let{data:r}=this,t=new f(this);for(let e of t)r[e]=aa(r[e]);return this}var Qe=r=>i(r).toArray();function ro(r=0,t=0){let{data:e,shape:o,strides:n}=this,{length:a}=o;if(t>=a)return e[r];let s=o[t],m=n[t],p=[];for(let c=0;c<s;c++){let y=this.toArray(r,t+1);if(y===null)return null;p[c]=y,r+=m}return p}var mo=vo(so());var po=r=>i(r).toString();function nr(){return`array(${(0,mo.inspect)(this.toArray(),{depth:10,breakLength:40})}, dtype=${this.dtype})`}var fo=r=>i(r).trace();function co(){let[r,t]=this.shape,{data:e}=this,o=Math.min(r,t),n=0,a;for(a=0;a<o;a+=1)n+=e[a*t+a];return n}var uo=r=>i(r).transpose();function yo(){if(this.shape.length<2)return this;let r=this.shape[0];return this.shape[0]=this.shape[1],this.shape[1]=r,r=this.strides[0],this.strides[0]=this.strides[1],this.strides[1]=r,this}var{trunc:Aa}=Math,lo=r=>i(r).trunc();function ho(){let{data:r}=this,t=new f(this);for(let e of t)r[e]=Aa(r[e]);return this}var Ao=r=>{if(r<0)throw new Error("invalid n");let t=new Float64Array(r*r),e=new A(t,{shape:[r,r]}),o=new f(e),[n,a]=o.coords;for(let s of o){let m=r-n-1,p=r-a-1;t[s]=(a+m*2+1)%r*r+(p+m*2+1)%r+1,[n,a]=o.coords}return e};var bo=(...r)=>new A(new Float64Array(r.reduce((t,e)=>t*e,1)),{shape:r}).fill(1);var Do=(...r)=>new A(new Float64Array(r.reduce((t,e)=>t*e,1)),{shape:r}).map(()=>Math.random());var No=(...r)=>{let t=Float64Array,e=!1,o,n,a;switch(r.length){case 2:a=r.pop(),n=1,o=r.pop();break;case 3:a=r.pop(),n=r.pop(),o=r.pop();break;default:throw new Error("invalid range")}if(a-o<0){let c=a;a=o,o=c,e=!0}if(n>a-o)throw new Error("invalid range");let s=new t(Math.ceil((a-o)/n)),m=o,p=0;if(e)for(;m<a;m+=n,p+=1)s[p]=a-m+o;else for(;m<a;m+=n,p+=1)s[p]=m;return new A(s)};var ba=Symbol.for("nodejs.util.inspect.custom"),fu,ir=class{constructor(t,e){this.data=new Float64Array(0);this.dtype="float64";this.length=0;this.shape=[0];this.strides=[0];this[fu]=nr;this.abs=pr;this.acos=cr;this.acosh=yr;this.add=gr;this.angle=wr;this.asin=Lr;this.asinh=Tr;this.atan=vr;this.atanh=qr;this.augment=jr;this.binOp=zr;this.cbrt=Or;this.ceil=Ur;this.check=Cr;this.combine=Pr;this.copy=Hr;this.cos=Vr;this.cosh=Wr;this.cross=Zr;this.det=Kr;this.diagonal=rt;this.dot=et;this.eig=at;this.equals=it;this.equidimensional=mt;this.equilateral=ft;this.exp=ut;this.expm1=lt;this.fill=dt;this.floor=bt;this.forEach=Nt;this.fround=xt;this.gauss=kt;this.get=It;this.inv=Mt;this.log=jt;this.log10=zt;this.log1p=Ot;this.log2=Ut;this.lu=Ct;this.lu_factor=Pt;this.map=Ht;this.max=Vt;this.mean=Wt;this.min=Zt;this.multiply=Kt;this.norm=re;this.normalize=ee;this.pow=ae;this.prod=ie;this.product=me;this.project=fe;this.push=ue;this.rank=le;this.reciprocal=de;this.reduce=be;this.reshape=Ne;this.round=xe;this.row_add=ke;this.scale=Ie;this.set=Ee;this.sign=Me;this.sin=je;this.sinh=ze;this.slice=Oe;this.solve=Ue;this.sqrt=Ce;this.square=Pe;this.subtract=He;this.sum=Ve;this.swap=We;this.tan=Ze;this.tanh=Ke;this.toArray=ro;this.toString=nr;this.trace=co;this.transpose=yo;this.trunc=ho;if(!t)return;if(t instanceof ir)return t;if(t instanceof f){if(!e||!e.dtype)throw new Error("dtype is missing");t.shape&&(e.shape=t.shape);let m=t.length;t=new(g(e.dtype))(m)}let{shape:o=Y(t),length:n=z(o),strides:a=I(o),dtype:s=sr(t)}=e||{};this.data=W(t)?t:new(g(s))(G(t)),this.shape=o,this.length=n,this.dtype=s,this.strides=a}get x(){return this.get(0)}set x(t){this.set(0,t)}get y(){return this.get(1)}set y(t){this.set(1,t)}get z(){return this.get(2)}set z(t){this.set(2,t)}get w(){return this.get(3)}set w(t){this.set(3,t)}get T(){return this.copy().transpose()}},A=ir;fu=ba;try{window.v=A}catch(r){}return Da;})();
//# sourceMappingURL=index.browser.js.map
