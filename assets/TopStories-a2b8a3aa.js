import{r as g,s as B,j as s,L as I}from"./index-56d1cdf4.js";import{w as G,u as W,c as z,i as v,b as J,s as M,U as H,d as Q,g as Z,H as ee,a as te,e as se}from"./index-464e7cc0.js";const ae="$inf$",D=Promise.resolve(),re=i=>M(i?i(0,null):null)[0],ne=i=>(d,l,u)=>{const c=g.useRef(!1),{cache:t,initialSize:o=1,revalidateAll:N=!1,persistSize:k=!1,revalidateFirstPage:E=!0,revalidateOnMount:x=!1,parallel:_=!1}=u;let e;try{e=re(d),e&&(e=ae+e)}catch{}const[R,C,O]=z(t,e),T=g.useCallback(()=>v(R()._l)?o:R()._l,[t,e,o]);B.useSyncExternalStore(g.useCallback(a=>e?O(e,()=>{a()}):()=>{},[t,e]),T,T);const S=g.useCallback(()=>{const a=R()._l;return v(a)?o:a},[e,o]),$=g.useRef(S());J(()=>{if(!c.current){c.current=!0;return}e&&C({_l:k?$.current:S()})},[e,t]);const V=x&&!c.current,j=i(e,async a=>{const f=R()._i,r=[],h=S(),[L]=z(t,a),m=L().data,y=[];let w=null;for(let n=0;n<h;++n){const[b,U]=M(d(n,_?null:w));if(!b)break;const[X,Y]=z(t,b);let p=X().data;const q=N||f||v(p)||E&&!n&&!v(m)||V||m&&!v(m[n])&&!u.compare(m[n],p);if(l&&q){const A=async()=>{p=await l(U),Y({data:p,_k:U}),r[n]=p};_?y.push(A):await A()}else r[n]=p;_||(w=p)}return _&&await Promise.all(y.map(n=>n())),C({_i:H}),r},u),P=g.useCallback(function(a,f){const r=typeof f=="boolean"?{revalidate:f}:f||{},h=r.revalidate!==!1;return e?(h&&(v(a)?C({_i:!0}):C({_i:!1})),arguments.length?j.mutate(a,{...r,revalidate:h}):j.mutate()):D},[e,t]),K=g.useCallback(a=>{if(!e)return D;const[,f]=z(t,e);let r;if(Q(a)?r=a(S()):typeof a=="number"&&(r=a),typeof r!="number")return D;f({_l:r}),$.current=r;const h=[],[L]=z(t,e);let m=null;for(let y=0;y<r;++y){const[w]=M(d(y,m)),[n]=z(t,w),b=w?n().data:H;if(v(b))return P(L().data);h.push(b),m=b}return P(h)},[e,t,P,S]);return{size:S(),setSize:K,mutate:P,get data(){return j.data},get error(){return j.error},get isValidating(){return j.isValidating},get isLoading(){return j.isLoading}}},ie=G(W,ne);var F="_1efec695",le="_1efec690",oe="_1efec694",ce="_1efec693",ue="_1efec691",de="_1efec692";function fe(i){const{index:d,id:l}=i,{data:u,isLoading:c,error:t}=W(`/story/${l}`,()=>Z(l));if(c)return s.jsx(ee,{});if(t)return s.jsx("span",{children:"Error!"});if(!u)return s.jsx("span",{children:"Undefined???"});const{by:o,kids:N,score:k,title:E,url:x,time:_}=u;let e="not domain";try{x&&(e=new URL(x).hostname.replace("www.",""))}catch{e="not domain"}return s.jsxs("article",{className:le,children:[s.jsxs("header",{className:ue,children:[s.jsxs("small",{style:{fontSize:"1rem"},children:[d+1,". "]}),s.jsxs("a",{className:de,href:x,target:"_blank",rel:"noonpener noreferrer",children:[E," "]}),s.jsxs("a",{href:x,target:"_blank",rel:"noonpener noreferrer",className:oe,children:["(",e,")"]})]}),s.jsxs("footer",{className:ce,children:[s.jsxs("span",{children:[k," points"]})," ",s.jsxs(I,{href:`/article/${l}`,className:F,children:["by ",o]})," ",s.jsx(I,{href:`/article/${l}`,className:F,children:te(_)})," ","|"," ",s.jsxs(I,{href:`/article/${l}`,className:F,children:[(N==null?void 0:N.length)||0," comments"]})]})]})}var he="dj8b3h0",me="dj8b3h1";function ve(){const{data:i,error:d,size:l,setSize:u}=ie(t=>`stories/${t+1}`,t=>{const[,o]=t.split("/");return se(Number(o),10)}),c=(i==null?void 0:i.flat())??[];return s.jsxs("div",{className:he,children:[s.jsxs("ul",{style:{listStyle:"none",padding:0},children:[d&&s.jsx("li",{children:"Something went wrong"}),c==null?void 0:c.map((t,o)=>s.jsx("li",{children:s.jsx(fe,{id:t,index:o})},t))]}),s.jsx("button",{className:me,onClick:()=>u(l+1),children:"Load More"})]})}export{ve as default};
