var Ho=Object.create,E=Object.defineProperty,Jo=Object.getPrototypeOf,Ko=Object.prototype.hasOwnProperty,Qo=Object.getOwnPropertyNames,Zo=Object.getOwnPropertyDescriptor;var C=r=>E(r,"__esModule",{value:!0});var ra=(r,t)=>{for(var o in t)E(r,o,{get:t[o],enumerable:!0})},ta=(r,t,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of Qo(t))!Ko.call(r,a)&&a!=="default"&&E(r,a,{get:()=>t[a],enumerable:!(o=Zo(t,a))||o.enumerable});return r},oa=r=>ta(C(E(r!=null?Ho(Jo(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);C(exports);ra(exports,{NDArray:()=>A,NDIter:()=>c,NDMultiIter:()=>b,V_MAXDIMS:()=>x,abs:()=>Y,acos:()=>G,acosh:()=>W,add:()=>tr,angle:()=>ar,array:()=>i,asin:()=>nr,asinh:()=>sr,atan:()=>pr,atanh:()=>yr,augment:()=>q,binOp:()=>hr,cbrt:()=>dr,ceil:()=>br,check:()=>Nr,combine:()=>gr,copy:()=>kr,cos:()=>Ir,cosh:()=>vr,cross:()=>Er,det:()=>jr,diagonal:()=>zr,dot:()=>Sr,eig:()=>Or,equals:()=>Cr,equidimensional:()=>Rr,equilateral:()=>Br,exp:()=>Pr,expm1:()=>Xr,eye:()=>k,fill:()=>Jr,floor:()=>Qr,forEach:()=>rt,fround:()=>ot,gauss:()=>it,get:()=>mt,inv:()=>ct,log:()=>ft,log10:()=>ht,log1p:()=>dt,log2:()=>bt,lu:()=>Nt,lu_factor:()=>gt,magic:()=>Go,map:()=>kt,matrix:()=>_,max:()=>It,mean:()=>vt,min:()=>Et,multiply:()=>jt,norm:()=>zt,normalize:()=>St,ones:()=>Po,pow:()=>Ot,prod:()=>Ct,product:()=>Rt,project:()=>Bt,push:()=>Pt,random:()=>Wo,range:()=>Xo,rank:()=>Xt,reciprocal:()=>Jt,reduce:()=>Qt,reshape:()=>ro,round:()=>oo,row_add:()=>eo,scale:()=>io,set:()=>mo,sign:()=>co,sin:()=>fo,sinh:()=>ho,slice:()=>Ao,solve:()=>Do,sqrt:()=>xo,square:()=>wo,subtract:()=>Lo,sum:()=>To,swap:()=>Mo,tan:()=>qo,tanh:()=>_o,toArray:()=>Fo,toString:()=>Oo,trace:()=>$o,transpose:()=>Vo,trunc:()=>Yo,zeros:()=>D});var z=r=>r.reduce((t,o)=>t.concat(Array.isArray(o)?z(o):o),[]),F=r=>ArrayBuffer.isView(r)&&!(r instanceof DataView),V=r=>r.reduce((t,o)=>t*o,1),S=r=>Array.isArray(r)||F(r)?[r.length].concat(S(r[0])):[],w=r=>[...r.slice(1).map((t,o)=>r.slice(o+1).reduce((a,n)=>a*n,1)),1],R=r=>{let{constructor:{name:t="Float32Array"}={}}=r||{};switch(t){case"Int8Array":return"int8";case"Uint8Array":return"uint8";case"Int16Array":return"int16";case"Uint16Array":return"uint16";case"Int32Array":return"int32";case"Uint32Array":return"uint32";case"Uint8ClampedArray":return"uint8c";case"Float32Array":return"float32";case"Float64Array":return"float64";default:return"float64"}},N=r=>{switch(r){case"int8":return Int8Array;case"uint8":return Uint8Array;case"int16":return Int16Array;case"uint16":return Uint16Array;case"int32":return Int32Array;case"uint32":return Uint32Array;case"uint8c":return Uint8ClampedArray;case"float32":return Float32Array;case"float64":return Float64Array;default:return Float64Array}};var i=(...r)=>new A(...r);var x=32,c=class{constructor(t){this.x=i(t);let{shape:o,strides:a,length:n}=this.x;this.length=n,this.lengthm1=n-1,this.nd=o.length,this.ndm1=this.nd-1,this.shape=Array(x).fill(0),this.strides=Array(x).fill(0),this.shapem1=Array(x).fill(0),this.coords=Array(x).fill(0),this.backstrides=Array(x).fill(0),this.factors=Array(x).fill(0),this.nd!==0&&(this.factors[this.nd-1]=1),this.contiguous=!0;let e=1,s;for(s=0;s<this.nd;s+=1)this.shape[s]=o[s],this.shapem1[s]=o[s]-1,this.strides[s]=a[s],this.backstrides[s]=a[s]*this.shapem1[s],this.coords[s]=0,o[this.ndm1-s]!==1&&(a[s]!==e&&(this.contiguous=!1),e*=o[this.ndm1-s]),s>0&&(this.factors[this.ndm1-s]=this.factors[this.nd-s]*o[this.nd-s]);this.index=0,this.pos=0}done(){return this.index>this.lengthm1}current(){let t=this.done();return{value:t?void 0:this.pos,done:t}}next1d(){let{strides:t}=this;this.pos+=t[0],this.coords[0]+=1}nextcontiguous(){this.pos+=1}next2d(){let{strides:t,shapem1:o,backstrides:a}=this;this.coords[1]<o[1]?(this.coords[1]+=1,this.pos+=t[1]):(this.coords[1]=0,this.coords[0]+=1,this.pos+=t[0]-a[1])}nextnd(){let{ndm1:t,shapem1:o,strides:a,backstrides:n}=this,e;for(e=t;e>=0;e-=1){if(this.coords[e]<o[e]){this.coords[e]+=1,this.pos+=a[e];break}this.coords[e]=0,this.pos-=n[e]}}next(){let t=this.current();this.index+=1;let{ndm1:o,contiguous:a}=this;return o===0?this.next1d():a?this.nextcontiguous():o===1?this.next2d():this.nextnd(),t}[Symbol.iterator](){return this}},b=class{constructor(...t){this.iters=t.map(p=>new c(p)),this.numiter=t.length;let o,a;for(o=0,a=0;o<this.numiter;o+=1)a=Math.max(a,this.iters[o].x.shape.length);this.nd=a,this.shape=Array(a).fill(0);let n,e,s,m;for(o=0;o<a;o+=1)for(this.shape[o]=1,e=0;e<this.numiter;e+=1)if(n=this.iters[e],s=o+n.x.shape.length-a,s>=0){if(m=n.x.shape[s],m==1)continue;if(this.shape[o]==1)this.shape[o]=m;else if(this.shape[o]!==m)throw new Error("shape mismatch")}for(m=this.shape.reduce((p,y)=>p*y,1),this.length=m,this.lengthm1=m-1,o=0;o<this.numiter;o+=1)for(n=this.iters[o],n.nd=this.nd,n.ndm1=this.nd-1,n.length=m,n.lengthm1=m-1,a=n.x.shape.length,a!==0&&(n.factors[this.nd-1]=1),e=0;e<this.nd;e+=1)n.shape[e]=this.shape[e],n.shapem1[e]=this.shape[e]-1,s=e+a-this.nd,s<0||n.x.shape[s]!==this.shape[e]?(n.contiguous=!1,n.strides[e]=0):n.strides[e]=n.x.strides[s],n.backstrides[e]=n.strides[e]*n.shapem1[e],e>0&&(n.factors[this.nd-e-1]=n.factors[this.nd-e]*this.shape[this.nd-e]);this.index=0,this.pos=Array(this.numiter).fill(0)}done(){return this.index>this.lengthm1}current(){let t=this.done();return{value:t?void 0:this.pos,done:t}}next(){let t=this.current();this.index+=1;let{numiter:o}=this,a,n;for(n=0;n<o;n+=1)a=this.iters[n],this.pos[n]=a.pos,a.next();return t}[Symbol.iterator](){return this}};var{abs:aa}=Math,Y=r=>i(r).abs();function B(){let{data:r}=this,t=new c(this);for(let o of t)r[o]=aa(r[o]);return this}var{acos:ea}=Math,G=r=>i(r).acos();function P(){let{data:r}=this,t=new c(this);for(let o of t)r[o]=ea(r[o]);return this}var{acosh:na}=Math,W=r=>i(r).acosh();function X(){let{data:r}=this,t=new c(this);for(let o of t)r[o]=na(r[o]);return this}var d;try{d=require("nblas")}catch(r){}var U=d&&d.NoTrans,Ja=d&&d.Trans;function H(r,t,o,a,n,e,s){if(a.length/n!==t||e.length/s!==t)throw new Error("lengths do not match");switch(r){case"float64":return d.daxpy(t,o,a,n,e,s);case"float32":return d.saxpy(t,o,a,n,e,s);default:throw new Error("wrong dtype")}}function J(r,t,o,a,n,e){if(o.length/a!==t||n.length/e!==t)throw new Error("lengths do not match");switch(r){case"float64":return d.ddot(t,o,a,n,e);case"float32":return d.sdot(t,o,a,n,e);default:throw new Error("wrong dtype")}}function K(r,t,o,a){if(o.length/a!==t)throw new Error("lengths do not match");switch(r){case"float64":return d.idamax(t,o,a);case"float32":return d.isamax(t,o,a);default:throw new Error("wrong dtype")}}function Q(r,t,o,a,n,e,s,m,p,y,f,u,h,l){let{length:I}=m,{length:v}=y,{length:M}=h;if(t===d.NoTrans&&I!==p*a||t===d.Trans&&I!==p*e)throw new Error("lengths do not match");if(o===d.NoTrans&&v!==f*e||o===d.Trans&&v!==f*n)throw new Error("lengths do not match");if(M!==l*a)throw new Error("lengths do not match");switch(r){case"float64":return d.dgemm(t,o,a,n,e,s,m,p,y,f,u,h,l);case"float32":return d.sgemm(t,o,a,n,e,s,m,p,y,f,u,h,l);default:throw new Error("wrong dtype")}}function Z(r,t,o,a){if(o.length/a!==t)throw new Error("lengths do not match");switch(r){case"float64":return d.dnrm2(t,o,a);case"float32":return d.snrm2(t,o,a);default:throw new Error("wrong dtype")}}function rr(r,t,o,a,n){if(a.length/n!==t)throw new Error("lengths do not match");switch(r){case"float64":return d.dscal(t,o,a,n);case"float32":return d.sscal(t,o,a,n);default:throw new Error("wrong dtype")}}var tr=(r,t,o=1)=>i(r).add(i(t),o);function or(r,t=1){let{data:o,length:a,dtype:n}=this,{data:e}=i(r);try{H(n,a,t,e,1,o,1)}catch(s){let m=new b(this,r);for(let[p,y]of m)o[p]+=t*e[y]}return this}var{acos:ia}=Math,ar=(r,t)=>i(r).angle(i(t));function er(r){return ia(this.dot(i(r))/this.norm()/i(r).norm())}var{asin:sa}=Math,nr=r=>i(r).asin();function ir(){let{data:r}=this,t=new c(this);for(let o of t)r[o]=sa(r[o]);return this}var{asinh:ma}=Math,sr=r=>i(r).asinh();function mr(){let{data:r}=this,t=new c(this);for(let o of t)r[o]=ma(r[o]);return this}var{atan:pa}=Math,pr=r=>i(r).atan();function cr(){let{data:r}=this,t=new c(this);for(let o of t)r[o]=pa(r[o]);return this}var{atanh:ca}=Math,yr=r=>i(r).atanh();function fr(){let{data:r}=this,t=new c(this);for(let o of t)r[o]=ca(r[o]);return this}var D=(...r)=>new A(new Float64Array(r.reduce((t,o)=>t*o,1)),{shape:r}).fill(0);var q=(r,t)=>i(r).augment(i(t));function ur(r){let[t,o]=this.shape,[a,n]=i(r).shape,{data:e}=this,{data:s}=i(r);if(a===0||n===0)return this;if(t!==a)throw new Error("rows do not match");let m=D(t,o+n),{data:p}=m,y,f;for(y=0;y<t;y+=1)for(f=0;f<o;f+=1)p[y*(o+n)+f]=e[y*o+f];for(y=0;y<a;y+=1)for(f=0;f<n;f+=1)p[y*(o+n)+(f+o)]=s[y*n+f];return m}var hr=(r,t,o)=>i(r).binOp(i(t),o);function lr(r,t){let{data:o}=this,{data:a}=i(r),n=new b(this,r);for(let[e,s]of n)o[e]=t(o[e],a[s],e);return this}var{cbrt:ya}=Math,dr=r=>i(r).cbrt();function Ar(){let{data:r}=this,t=new c(this);for(let o of t)r[o]=ya(r[o]);return this}var{ceil:fa}=Math,br=r=>i(r).ceil();function Dr(){let{data:r}=this,t=new c(this);for(let o of t)r[o]=fa(r[o]);return this}var Nr=(r,...t)=>{i(r).check(...t)};function xr(...r){let{shape:t,length:o}=this;if(r.length===1){let[a]=r;if(a<0||a>o-1||!Number.isFinite(a))throw new Error("index out of bounds")}else if(!t.every((a,n)=>a>r[n]&&Number.isFinite(r[n])&&r[n]>=0))throw new Error("index out of bounds")}var gr=(r,t)=>i(r).combine(i(t));function wr(r){if(this.shape.length!==1&&r.shape.length!==1)throw new Error("combine operation not permitted for multidimensional arrays");let{length:t,data:o}=this,{length:a,data:n}=r;if(a===0)return this;if(t===0)return this.data=new(N(r.dtype))(n),this.length=a,this.dtype=r.dtype,this;let e=t+a,s=new(N(this.dtype))(e);return s.set(o),s.set(n,t),this.data=s,this.length=e,this.shape=[e],this}var kr=r=>i(r).copy();function Lr(){let r=D(...this.shape),{data:t}=this,{data:o}=r,a=new b(this,r);for(let[n,e]of a)o[e]=t[n];return r}var{cos:ua}=Math,Ir=r=>i(r).cos();function Tr(){let{data:r}=this,t=new c(this);for(let o of t)r[o]=ua(r[o]);return this}var{cosh:ha}=Math,vr=r=>i(r).cosh();function Mr(){let{data:r}=this,t=new c(this);for(let o of t)r[o]=ha(r[o]);return this}var Er=(r,t)=>i(r).cross(i(t));function qr(r){let{length:t}=this,{length:o}=r;if(t!==3||o!==3)throw new Error("vectors must have three components");let a=this.y*r.z-this.z*r.y,n=this.z*r.x-this.x*r.z,e=this.x*r.y-this.y*r.x;return this.x=a,this.y=n,this.z=e,this}var jr=r=>i(r).det();function _r(){this.square();let[r]=this.shape,[t,o]=this.copy().lu_factor(),{data:a}=t,n=1,e=1,s;for(s=0;s<r;s+=1)n*=a[s*r+s],s!==o[s]-1&&(e*=-1);return e*n}var zr=r=>i(r).diagonal();function Fr(){this.square();let{length:r}=this,[t,o]=this.shape,a=Math.min(t,o);return this.reshape(r).slice(0,r,a+1)}var Sr=(r,t)=>i(r).dot(i(t));function Ur(r){let{data:t,length:o,dtype:a}=this,{data:n}=r,e=0;try{e=J(a,o,n,1,t,1)}catch(s){let m=new b(this,r);for(let[p,y]of m)e+=t[p]*n[y]}return e}var k=r=>{let t=new A(new Float64Array(r*r),{shape:[r,r]}),{data:o}=t,a;for(a=0;a<r;a+=1)o[a*r+a]=1;return t};var T;try{T=require("nlapack")}catch(r){}var j=(r,t,o,a,n,e,s)=>{let[m]=r.shape,{data:p}=r,y=p[a*m+n],f=1/(t+o);p[a*m+n]=y-o*(p[e*m+s]+f*y),p[e*m+s]+=o*(y-f*p[e*m+s])},Or=r=>i(r).eig();function $r(){this.square();let[r]=this.shape;try{["float32","float64"].includes(this.dtype)||(this.dtype="float32",this.data=N(this.dtype).from(this.data));let t=T.NoEigenvector,o=T.Eigenvector,a=D(r),n=D(r),e=D(r,r),s=D(r,r),{data:m}=this,{data:p}=a,{data:y}=n,{data:f}=e,{data:u}=s;return this.dtype==="float64"&&T.dgeev(t,o,r,m,r,p,y,f,r,u,r),this.dtype==="float32"&&T.sgeev(t,o,r,m,r,p,y,f,r,u,r),[a,s]}catch(t){let{data:o}=this,a=k(r),n=0,e=0,s=0,m=0,p=0;do{for(e=0;e<r;e+=1)for(s=e+1;s<r;s+=1)Math.abs(o[e*r+s])>=n&&(n=Math.abs(o[e*r+s]),m=e,p=s);let y;if(Math.abs(o[m*r+p])<Math.abs(o[p*r+p])*1e-36)y=o[m*r+p]/o[p*r+p];else{let l=o[p*r+p]/2*o[m*r+p];y=1/(Math.abs(l)+Math.sqrt(l*l+1))}let f=1/Math.sqrt(y*y+1),u=y*f,h=o[m*r+p];for(o[m*r+p]=0,o[m*r+m]-=y*h,o[p*r+p]+=y*h,e=0;e<m;e+=1)j(this,f,u,e,m,e,p);for(e=m+1;e<p;e+=1)j(this,f,u,m,e,e,p);for(e=p+1;e<r;e+=1)j(this,f,u,m,e,p,e);for(e=0;e<r;e+=1)j(a,f,u,e,m,e,p)}while(n>=1e-9);return[this.diagonal(),a]}}var Cr=(r,t,o=1e-6)=>i(r).equals(i(t),o);function Vr(r,t=1e-6){let{data:o}=this,{data:a}=r,n=new b(this,r);for(let[e,s]of n)if(Math.abs(o[e]-a[s])>t)return!1;return!0}var Rr=(r,t)=>{i(r).equidimensional(i(t))};function Yr(r){let{shape:t}=this,{shape:o}=r;if(!t.every((a,n)=>a===o[n]))throw new Error(`shapes ${t} and ${o} do not match`)}var Br=(r,t)=>{i(r).equilateral(i(t))};function Gr(r){let{length:t}=this,{length:o}=r;if(t!==o)throw new Error(`lengths ${t} and ${o} do not match`)}var{exp:la}=Math,Pr=r=>i(r).exp();function Wr(){let{data:r}=this,t=new c(this);for(let o of t)r[o]=la(r[o]);return this}var{expm1:da}=Math,Xr=r=>i(r).expm1();function Hr(){let{data:r}=this,t=new c(this);for(let o of t)r[o]=da(r[o]);return this}var Jr=(r,t=0)=>i(r).fill(t);function Kr(r=0){let{data:t}=this,o=new c(this);for(let a of o)t[a]=r instanceof Function?r(o.pos):r;return this}var{floor:Aa}=Math,Qr=r=>i(r).floor();function Zr(){let{data:r}=this,t=new c(this);for(let o of t)r[o]=Aa(r[o]);return this}var rt=(r,t)=>{r.forEach(t)};function tt(r){let{data:t}=this,o=new c(this);for(let a of o)r.call(this,t[a],a,t)}var{fround:ba}=Math,ot=r=>i(r).fround();function at(){let{data:r}=this,t=new c(this);for(let o of t)r[o]=ba(r[o]);return this}var g;try{g=require("nlapack")}catch(r){}function L(r,t,o,a,n,e){if(a.length!==t*o)throw new Error("lengths do not match");switch(r){case"float64":return g.dgetrf(t,o,a,n,e);case"float32":return g.sgetrf(t,o,a,n,e);default:throw new Error("wrong dtype")}}function et(r,t,o,a,n){if(o.length!==t*t)throw new Error("lengths do not match");switch(r){case"float64":return g.dgetri(t,o,a,n);case"float32":return g.sgetri(t,o,a,n);default:throw new Error("wrong dtype")}}function nt(r,t,o,a,n,e,s,m){if(a.length!==n*t||s.length!==m*o)throw new Error("lengths do not match");switch(r){case"float64":return g.dgesv(t,o,a,n,e,s,m);case"float32":return g.sgesv(t,o,a,n,e,s,m);default:throw new Error("wrong dtype")}}var it=r=>i(r).gauss();function st(){let{shape:[r,t],data:o,dtype:a}=this;try{let{data:n}=this,e=new Int32Array(Math.min(r,t));L(a,r,t,n,t,e);let s=new c(this),[m,p]=s.coords;for(let y of s)p<m&&(n[y]=0),[m,p]=s.coords}catch(n){let e=0,s,m,p,y,f;for(p=0;p<r;p+=1){if(t<=e)return this;for(y=p;o[y*t+e]===0;)if(y+=1,r===y&&(y=p,e+=1,t===e))return this;if(p!==y&&this.swap(p,y),m=o[p*t+e],m!==0)for(f=0;f<t;f+=1)o[p*t+f]/=m;for(y=0;y<r;y+=1)if(s=o[y*t+e],y!==p)for(f=0;f<t;f+=1)o[y*t+f]-=o[p*t+f]*s;e+=1}for(p=0;p<r;p+=1){for(m=0,y=0;y<t;y+=1)m===0&&(m=o[p*t+y]);if(m===0)for(f=0;f<t;f+=1)o[p*t+f]/=m}}return this}var mt=(r,...t)=>i(r).get(...t);function pt(...r){this.check(...r);let{data:t,shape:o}=this,{length:a}=o,n=r[a-1],e,s;for(e=0;e<a-1;e+=1){let m=1;for(s=e+1;s<a;s+=1)m*=o[s];n+=r[e]*m}return t[n]}var ct=r=>i(r).inv();function yt(){this.square();let{shape:[r],dtype:t}=this;try{let{data:o}=this,a=new Int32Array(r);return L(t,r,r,o,r,a),et(t,r,o,r,a),this}catch(o){let a=k(r),n=q(this,a).gauss(),e=D(r,r),s=D(r,r),{data:m}=n,{data:p}=e,{data:y}=s,f=new c(n),[u,h]=f.coords;for(let l of f)h<r?p[u*r+h]=m[l]:y[u*r+(h-r)]=m[l],[u,h]=f.coords;if(!e.equals(a))throw new Error("matrix is not invertible");return s}}var{log:Da}=Math,ft=r=>i(r).log();function ut(){let{data:r}=this,t=new c(this);for(let o of t)r[o]=Da(r[o]);return this}var{log10:Na}=Math,ht=r=>i(r).log10();function lt(){let{data:r}=this,t=new c(this);for(let o of t)r[o]=Na(r[o]);return this}var{log1p:xa}=Math,dt=r=>i(r).log1p();function At(){let{data:r}=this,t=new c(this);for(let o of t)r[o]=xa(r[o]);return this}var{log2:ga}=Math,bt=r=>i(r).log2();function Dt(){let{data:r}=this,t=new c(this);for(let o of t)r[o]=ga(r[o]);return this}var Nt=r=>i(r).lu();function xt(){let[r,t]=this.copy().lu_factor(),o=r.copy(),a=r.copy(),{data:n}=o,{data:e}=a,s=new c(r),[m,p]=s.coords;for(let y of s)p<m?e[y]=0:n[y]=m===p?1:0,[m,p]=s.coords;return[o,a,t]}var gt=r=>i(r).lu_factor();function wt(){let{data:r,shape:[t],dtype:o}=this,a=new Int32Array(t);try{L(o,t,t,r,t,a)}catch(n){let e,s,m,p,y,f,u;for(u=0;u<t;u+=1){for(p=u,e=Math.abs(r[u*t+u]),f=u+1;f<t;f+=1)s=Math.abs(r[f*t+u]),e<s&&(e=s,p=f);for(a[u]=p+1,p!==u&&this.swap(u,p),m=r[u*t+u],y=u+1;y<t;y+=1)r[y*t+u]/=m;for(y=u+1;y<t;y+=1){for(f=u+1;f<t-1;f+=2)r[y*t+f]-=r[y*t+u]*r[u*t+f],r[y*t+f+1]-=r[y*t+u]*r[u*t+f+1];f===t-1&&(r[y*t+f]-=r[y*t+u]*r[u*t+f])}}}return[this,a]}var kt=(r,t)=>i(r).map(t);function Lt(r){let{data:t}=this,o=new c(this),a=r.bind(this),n=this.copy(),{data:e}=n;for(let s of o)e[s]=a(t[s],s,t);return n}var It=r=>i(r).max();function Tt(){let{data:r,length:t,dtype:o}=this,a=Number.NEGATIVE_INFINITY;try{a=r[K(o,t,r,1)]}catch(n){let e=new c(this);for(let s of e){let m=r[s];a<m&&(a=m)}}return a}var vt=r=>i(r).mean();function Mt(){let{data:r,length:t}=this,o=new c(this),a=0;for(let n of o)a+=r[n];return a/t}var Et=r=>i(r).min();function qt(){let{data:r}=this,t=new c(this),o=Number.POSITIVE_INFINITY;for(let a of t){let n=r[a];o>n&&(o=n)}return o}var _=(r,t)=>new A(new Float64Array(r*t),{shape:[r,t]});var jt=(r,t)=>i(r).multiply(i(t));function _t(r){let{shape:[t,o],data:a,dtype:n}=this,{shape:[e,s],data:m}=r;if(o!==e)throw new Error("sizes do not match");let p=_(t,s),{data:y}=p;try{Q(n,U,U,t,s,o,1,a,o,m,s,0,y,s)}catch(f){let u=new c(p),h,[l,I]=u.coords;for(let v of u){let M=0;for(h=0;h<o;h+=1)M+=a[l*o+h]*m[h*s+I];y[v]=M,[l,I]=u.coords}}return p}var{sqrt:wa}=Math,zt=r=>i(r).norm();function Ft(){let{data:r,length:t,dtype:o}=this,a=0;try{a=Z(o,t,r,1)}catch(n){a=wa(this.dot(this))}return a}var St=r=>i(r).normalize();function Ut(){return this.scale(1/this.norm())}var{pow:ka}=Math,Ot=(r,t)=>i(r).pow(t);function $t(r){let{data:t}=this,o=new c(this);for(let a of o)t[a]=ka(t[a],r);return this}var Ct=r=>i(r).prod();function Vt(){let{data:r}=this,t=new c(this),o=1;for(let a of t)o*=r[a];return o}var Rt=(r,t)=>i(r).product(i(t));function Yt(r){let{data:t}=this,{data:o}=r,a=new b(this,r);for(let[n,e]of a)t[n]*=o[e];return this}var Bt=(r,t)=>i(r).project(i(t));function Gt(r){return r.scale(this.dot(r)/r.dot(r))}var Pt=(r,t)=>i(r).push(t);function Wt(r){if(this.shape.length!==1)throw new Error("push operation not permitted for multidimensional arrays");let{data:t,length:o}=this,a=o+1,n=new(N(this.dtype))(a);return n.set(t),n[o]=r,this.data=n,this.length=a,this.shape=[a],this}var Xt=(r,t=1e-6)=>i(r).rank(t);function Ht(r=1e-6){let{data:t}=this.copy().gauss(),o=new c(this),a=0,[n,e]=o.coords;for(let s of o)a<=n&&e>=n&&t[s]>r&&(a+=1),[n,e]=o.coords;return a}var Jt=r=>i(r).reciprocal();function Kt(){let{data:r}=this,t=new c(this);for(let o of t)r[o]=1/r[o];return this}var Qt=(r,t,o)=>i(r).reduce(t,o);function Zt(r,t){let{data:o,length:a}=this;if(a===0&&typeof t=="undefined")throw new Error("Reduce of empty array with no initial value.");let n=new c(this),e=r.bind(this),s;typeof t=="undefined"?(s=o[0],n.next()):s=t;for(let m of n)s=e(s,o[m],m,o);return s}var ro=(r,...t)=>i(r).reshape(...t);function to(...r){let{length:t}=this;if(r.reduce((o,a)=>o*a,1)!==t)throw new Error(`shape ${r} does not match length ${t}`);return this.shape=r,this.strides=w(r),this}var{round:La}=Math,oo=r=>i(r).round();function ao(){let{data:r}=this,t=new c(this);for(let o of t)r[o]=La(r[o]);return this}var eo=(r,t,o,a=1)=>i(r).row_add(t,o,a);function no(r,t,o=1){this.check(r,0),this.check(t,0);let[,a]=this.shape,{data:n}=this,e;for(e=0;e<a;e+=1)n[r*a+e]+=n[t*a+e]*o;return this}var io=(r,t)=>i(r).scale(t);function so(r){let{data:t,length:o,dtype:a}=this;try{rr(a,o,r,t,1)}catch(n){let e=new c(this);for(let s of e)t[s]*=r}return this}var mo=(r,...t)=>{r.set(...t)};function po(...r){let t=r.slice(0,-1),o=r[r.length-1];this.check(...t);let{shape:a}=this,n=t[t.length-1],e;for(e=0;e<t.length-1;e+=1)n+=t[e]*a[e+1];this.data[n]=o}var{sign:Ia}=Math,co=r=>i(r).sign();function yo(){let{data:r}=this,t=new c(this);for(let o of t)r[o]=Ia(r[o]);return this}var{sin:Ta}=Math,fo=r=>i(r).sin();function uo(){let{data:r}=this,t=new c(this);for(let o of t)r[o]=Ta(r[o]);return this}var{sinh:va}=Math,ho=r=>i(r).sinh();function lo(){let{data:r}=this,t=new c(this);for(let o of t)r[o]=va(r[o]);return this}var Ao=(r,t,o,a)=>i(r).slice(t,o,a);function bo(r=0,t=this.shape[0],o=1){let{shape:a}=this,n=a.length;if(r<0||t<0)return this.slice(r<0?n+r:r,t<0?n+t:t);if(o===0)throw new Error("step argument cannot be 0");let e=[Math.ceil((t-r)/o),...a.slice(1)],s=e.reduce((p,y)=>p*y,1),m=w(e);return this.shape=e,this.length=s,this.strides=m,this}var Do=(r,t)=>i(r).solve(i(t));function No(r){let{data:t,dtype:o}=this,{data:a,shape:[n,e]}=r;try{let s=new Int32Array(n);nt(o,n,e,t,n,s,a,e)}catch(s){let[m,p]=this.lu_factor(),{data:y}=m,{data:f}=r,u,h,l;for(u=0;u<p.length;u+=1)u!==p[u]-1&&r.swap(u,p[u]-1);for(l=0;l<e;l+=1){for(u=0;u<n;u+=1)for(h=0;h<u;h+=1)f[u*e+l]-=y[u*n+h]*f[h*e+l];for(u=n-1;u>=0;u-=1){for(h=u+1;h<n;h+=1)f[u*e+l]-=y[u*n+h]*f[h*e+l];f[u*e+l]/=y[u*n+u]}}}return r}var{sqrt:Ma}=Math,xo=r=>i(r).sqrt();function go(){let{data:r}=this,t=new c(this);for(let o of t)r[o]=Ma(r[o]);return this}var wo=r=>{i(r).square()};function ko(){let{length:r}=this.shape,[t,o]=this.shape;if(r!==2||t!==o)throw new Error("matrix is not square")}var Lo=(r,t)=>i(r).subtract(i(t));function Io(r){return this.add(r,-1)}var To=r=>i(r).sum();function vo(){let{data:r}=this,t=new c(this),o=0;for(let a of t)o+=r[a];return o}var Mo=(r,t,o)=>i(r).swap(t,o);function Eo(r,t){this.check(r,0),this.check(t,0);let{data:o}=this,[,a]=this.shape,n=o.slice(r*a,(r+1)*a);return o.copyWithin(r*a,t*a,(t+1)*a),o.set(n,t*a),this}var{tan:Ea}=Math,qo=r=>i(r).tan();function jo(){let{data:r}=this,t=new c(this);for(let o of t)r[o]=Ea(r[o]);return this}var{tanh:qa}=Math,_o=r=>i(r).tanh();function zo(){let{data:r}=this,t=new c(this);for(let o of t)r[o]=qa(r[o]);return this}var Fo=r=>i(r).toArray();function So(r=0,t=0){let{data:o,shape:a,strides:n}=this,{length:e}=a;if(t>=e)return o[r];let s=a[t],m=n[t],p=[];for(let y=0;y<s;y++){let f=this.toArray(r,t+1);if(f===null)return null;p[y]=f,r+=m}return p}var Uo=oa(require("util"));var Oo=r=>i(r).toString();function O(){return`array(${(0,Uo.inspect)(this.toArray(),{depth:10,breakLength:40})}, dtype=${this.dtype})`}var $o=r=>i(r).trace();function Co(){let[r,t]=this.shape,{data:o}=this,a=Math.min(r,t),n=0,e;for(e=0;e<a;e+=1)n+=o[e*t+e];return n}var Vo=r=>i(r).transpose();function Ro(){if(this.shape.length<2)return this;let r=this.shape[0];return this.shape[0]=this.shape[1],this.shape[1]=r,r=this.strides[0],this.strides[0]=this.strides[1],this.strides[1]=r,this}var{trunc:ja}=Math,Yo=r=>i(r).trunc();function Bo(){let{data:r}=this,t=new c(this);for(let o of t)r[o]=ja(r[o]);return this}var Go=r=>{if(r<0)throw new Error("invalid n");let t=new Float64Array(r*r),o=new A(t,{shape:[r,r]}),a=new c(o),[n,e]=a.coords;for(let s of a){let m=r-n-1,p=r-e-1;t[s]=(e+m*2+1)%r*r+(p+m*2+1)%r+1,[n,e]=a.coords}return o};var Po=(...r)=>new A(new Float64Array(r.reduce((t,o)=>t*o,1)),{shape:r}).fill(1);var Wo=(...r)=>new A(new Float64Array(r.reduce((t,o)=>t*o,1)),{shape:r}).map(()=>Math.random());var Xo=(...r)=>{let t=Float32Array,o=!1,a,n,e;switch(r.length){case 2:e=r.pop(),n=1,a=r.pop();break;case 3:e=r.pop(),n=r.pop(),a=r.pop();break;default:throw new Error("invalid range")}if(e-a<0){let y=e;e=a,a=y,o=!0}if(n>e-a)throw new Error("invalid range");let s=new t(Math.ceil((e-a)/n)),m=a,p=0;if(o)for(;m<e;m+=n,p+=1)s[p]=e-m+a;else for(;m<e;m+=n,p+=1)s[p]=m;return new A(s)};var _a=Symbol.for("nodejs.util.inspect.custom"),xy,$=class{constructor(t,o){this.data=new Float64Array(0);this.dtype="float64";this.length=0;this.shape=[0];this.strides=[0];this[xy]=O;this.abs=B;this.acos=P;this.acosh=X;this.add=or;this.angle=er;this.asin=ir;this.asinh=mr;this.atan=cr;this.atanh=fr;this.augment=ur;this.binOp=lr;this.cbrt=Ar;this.ceil=Dr;this.check=xr;this.combine=wr;this.copy=Lr;this.cos=Tr;this.cosh=Mr;this.cross=qr;this.det=_r;this.diagonal=Fr;this.dot=Ur;this.eig=$r;this.equals=Vr;this.equidimensional=Yr;this.equilateral=Gr;this.exp=Wr;this.expm1=Hr;this.fill=Kr;this.floor=Zr;this.forEach=tt;this.fround=at;this.gauss=st;this.get=pt;this.inv=yt;this.log=ut;this.log10=lt;this.log1p=At;this.log2=Dt;this.lu=xt;this.lu_factor=wt;this.map=Lt;this.max=Tt;this.mean=Mt;this.min=qt;this.multiply=_t;this.norm=Ft;this.normalize=Ut;this.pow=$t;this.prod=Vt;this.product=Yt;this.project=Gt;this.push=Wt;this.rank=Ht;this.reciprocal=Kt;this.reduce=Zt;this.reshape=to;this.round=ao;this.row_add=no;this.scale=so;this.set=po;this.sign=yo;this.sin=uo;this.sinh=lo;this.slice=bo;this.solve=No;this.sqrt=go;this.square=ko;this.subtract=Io;this.sum=vo;this.swap=Eo;this.tan=jo;this.tanh=zo;this.toArray=So;this.toString=O;this.trace=Co;this.transpose=Ro;this.trunc=Bo;if(!t)return;if(t instanceof $)return t;if(t instanceof c){if(!o||!o.dtype)throw new Error("dtype is missing");t.shape&&(o.shape=t.shape);let m=t.length;t=new(N(o.dtype))(m)}let{shape:a=S(t),length:n=V(a),strides:e=w(a),dtype:s=R(t)}=o||{};this.data=F(t)?t:new(N(s))(z(t)),this.shape=a,this.length=n,this.dtype=s,this.strides=e}get x(){return this.get(0)}set x(t){this.set(0,t)}get y(){return this.get(1)}set y(t){this.set(1,t)}get z(){return this.get(2)}set z(t){this.set(2,t)}get w(){return this.get(3)}set w(t){this.set(3,t)}get T(){return this.transpose()}},A=$;xy=_a;try{window.v=A}catch(r){}0&&(module.exports={NDArray,NDIter,NDMultiIter,V_MAXDIMS,abs,acos,acosh,add,angle,array,asin,asinh,atan,atanh,augment,binOp,cbrt,ceil,check,combine,copy,cos,cosh,cross,det,diagonal,dot,eig,equals,equidimensional,equilateral,exp,expm1,eye,fill,floor,forEach,fround,gauss,get,inv,log,log10,log1p,log2,lu,lu_factor,magic,map,matrix,max,mean,min,multiply,norm,normalize,ones,pow,prod,product,project,push,random,range,rank,reciprocal,reduce,reshape,round,row_add,scale,set,sign,sin,sinh,slice,solve,sqrt,square,subtract,sum,swap,tan,tanh,toArray,toString,trace,transpose,trunc,zeros});
//# sourceMappingURL=index.js.map
