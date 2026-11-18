"use strict";var M=function(u,r){return function(){try{return r||u((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var A=M(function(U,z){
function F(u,r,i,s,c,v,q,y,a,g,f){var o,n,e,t,x,P,l,p,j,k;for(o=r.data,n=v.data,e=a.data,t=r.accessors[0],x=v.accessors[0],P=a.accessors[1],l=s,p=y,j=f,k=0;k<u;k++)P(e,j,t(o,l)+c*x(n,p)),l+=i,p+=q,j+=g;return a}z.exports=F
});var R=M(function(V,B){
var O=require('@stdlib/array-base-arraylike2object/dist'),G=require('@stdlib/blas-base-gcopy/dist').ndarray,H=require('@stdlib/blas-ext-base-gwxpy/dist').ndarray,I=A(),m=5;function J(u,r,i,s,c,v,q,y,a,g,f){var o,n,e,t,x,P,l,p;if(u<=0)return a;if(c===0)return G(u,r,i,s,a,g,f);if(c===1)return H(u,r,i,s,v,q,y,a,g,f);if(t=O(r),x=O(v),P=O(a),t.accessorProtocol||x.accessorProtocol||P.accessorProtocol)return I(u,t,i,s,c,x,q,y,P,g,f),a;if(o=s,n=y,e=f,i===1&&q===1&&g===1){if(l=u%m,l>0)for(p=0;p<l;p++)a[e]=r[o]+c*v[n],o+=i,n+=q,e+=g;if(u<m)return a;for(p=l;p<u;p+=m)a[e]=r[o]+c*v[n],a[e+1]=r[o+1]+c*v[n+1],a[e+2]=r[o+2]+c*v[n+2],a[e+3]=r[o+3]+c*v[n+3],a[e+4]=r[o+4]+c*v[n+4],o+=m,n+=m,e+=m;return a}for(p=0;p<u;p++)a[e]=r[o]+c*v[n],o+=i,n+=q,e+=g;return a}B.exports=J
});var D=M(function(Z,C){
var h=require('@stdlib/strided-base-stride2offset/dist'),K=R();function L(u,r,i,s,c,v,q,y){return K(u,r,i,h(u,i),s,c,v,h(u,v),q,y,h(u,y))}C.exports=L
});var Q=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),E=D(),S=R();Q(E,"ndarray",S);module.exports=E;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
