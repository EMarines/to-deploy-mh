(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function ne(){}function He(t,e){for(const n in e)t[n]=e[n];return t}function fu(t){return t()}function Da(){return Object.create(null)}function It(t){t.forEach(fu)}function Ji(t){return typeof t=="function"}function $e(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let Cs;function gr(t,e){return Cs||(Cs=document.createElement("a")),Cs.href=e,t===Cs.href}function Td(t){return Object.keys(t).length===0}function Zi(t,...e){if(t==null)return ne;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function sn(t){let e;return Zi(t,n=>e=n)(),e}function je(t,e,n){t.$$.on_destroy.push(Zi(e,n))}function eo(t,e,n,s){if(t){const r=gu(t,e,n,s);return t[0](r)}}function gu(t,e,n,s){return t[1]&&s?He(n.ctx.slice(),t[1](s(e))):n.ctx}function to(t,e,n,s){if(t[2]&&s){const r=t[2](s(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const i=[],o=Math.max(e.dirty.length,r.length);for(let a=0;a<o;a+=1)i[a]=e.dirty[a]|r[a];return i}return e.dirty|r}return e.dirty}function no(t,e,n,s,r,i){if(r){const o=gu(e,n,s,i);t.p(o,r)}}function so(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let s=0;s<n;s++)e[s]=-1;return e}return-1}function Ks(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function Gs(t,e){const n={};e=new Set(e);for(const s in t)!e.has(s)&&s[0]!=="$"&&(n[s]=t[s]);return n}function Na(t){return t==null?"":t}function f(t,e){t.appendChild(e)}function N(t,e,n){t.insertBefore(e,n||null)}function D(t){t.parentNode.removeChild(t)}function Oa(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function w(t){return document.createElement(t)}function ee(t){return document.createTextNode(t)}function k(){return ee(" ")}function pr(){return ee("")}function Nt(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function E(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function We(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const s in e)e[s]==null?t.removeAttribute(s):s==="style"?t.style.cssText=e[s]:s==="__value"?t.value=t[s]=e[s]:n[s]&&n[s].set?t[s]=e[s]:E(t,s,e[s])}function bd(t){return Array.from(t.childNodes)}function pu(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function mu(t,e,n){t.classList[n?"add":"remove"](e)}function Sd(t,e,{bubbles:n=!1,cancelable:s=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,s,e),r}function $a(t,e){return new t(e)}let xn;function Rn(t){xn=t}function Zn(){if(!xn)throw new Error("Function called outside component initialization");return xn}function kd(t){Zn().$$.on_mount.push(t)}function Cd(t){Zn().$$.on_destroy.push(t)}function Ad(){const t=Zn();return(e,n,{cancelable:s=!1}={})=>{const r=t.$$.callbacks[e];if(r){const i=Sd(e,n,{cancelable:s});return r.slice().forEach(o=>{o.call(t,i)}),!i.defaultPrevented}return!0}}function Dn(t,e){return Zn().$$.context.set(t,e),e}function yt(t){return Zn().$$.context.get(t)}const In=[],La=[],xs=[],Pa=[],yu=Promise.resolve();let mi=!1;function vu(){mi||(mi=!0,yu.then(_u))}function Rd(){return vu(),yu}function yi(t){xs.push(t)}const Gr=new Set;let As=0;function _u(){const t=xn;do{for(;As<In.length;){const e=In[As];As++,Rn(e),Dd(e.$$)}for(Rn(null),In.length=0,As=0;La.length;)La.pop()();for(let e=0;e<xs.length;e+=1){const n=xs[e];Gr.has(n)||(Gr.add(n),n())}xs.length=0}while(In.length);for(;Pa.length;)Pa.pop()();mi=!1,Gr.clear(),Rn(t)}function Dd(t){if(t.fragment!==null){t.update(),It(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(yi)}}const Us=new Set;let Ct;function ro(){Ct={r:0,c:[],p:Ct}}function io(){Ct.r||It(Ct.c),Ct=Ct.p}function C(t,e){t&&t.i&&(Us.delete(t),t.i(e))}function R(t,e,n,s){if(t&&t.o){if(Us.has(t))return;Us.add(t),Ct.c.push(()=>{Us.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}function rn(t,e){const n={},s={},r={$$scope:1};let i=t.length;for(;i--;){const o=t[i],a=e[i];if(a){for(const c in o)c in a||(s[c]=1);for(const c in a)r[c]||(n[c]=a[c],r[c]=1);t[i]=a}else for(const c in o)r[c]=1}for(const o in s)o in n||(n[o]=void 0);return n}function Ma(t){return typeof t=="object"&&t!==null?t:{}}function F(t){t&&t.c()}function P(t,e,n,s){const{fragment:r,after_update:i}=t.$$;r&&r.m(e,n),s||yi(()=>{const o=t.$$.on_mount.map(fu).filter(Ji);t.$$.on_destroy?t.$$.on_destroy.push(...o):It(o),t.$$.on_mount=[]}),i.forEach(yi)}function M(t,e){const n=t.$$;n.fragment!==null&&(It(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Nd(t,e){t.$$.dirty[0]===-1&&(In.push(t),vu(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function xe(t,e,n,s,r,i,o,a=[-1]){const c=xn;Rn(t);const u=t.$$={fragment:null,ctx:[],props:i,update:ne,not_equal:r,bound:Da(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:Da(),dirty:a,skip_bound:!1,root:e.target||c.$$.root};o&&o(u.root);let l=!1;if(u.ctx=n?n(t,e.props||{},(h,d,...g)=>{const p=g.length?g[0]:d;return u.ctx&&r(u.ctx[h],u.ctx[h]=p)&&(!u.skip_bound&&u.bound[h]&&u.bound[h](p),l&&Nd(t,h)),d}):[],u.update(),l=!0,It(u.before_update),u.fragment=s?s(u.ctx):!1,e.target){if(e.hydrate){const h=bd(e.target);u.fragment&&u.fragment.l(h),h.forEach(D)}else u.fragment&&u.fragment.c();e.intro&&C(t.$$.fragment),P(t,e.target,e.anchor,e.customElement),_u()}Rn(c)}class Ue{$destroy(){M(this,1),this.$destroy=ne}$on(e,n){if(!Ji(n))return ne;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}$set(e){this.$$set&&!Td(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const xa=t=>typeof t>"u",wu=t=>typeof t=="function",Eu=t=>typeof t=="number";function Od(t){return!t.defaultPrevented&&t.button===0&&!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Iu(){let t=0;return()=>t++}function $d(){return Math.random().toString(36).substring(2)}const vt=typeof window>"u";function Tu(t,e,n){return t.addEventListener(e,n),()=>t.removeEventListener(e,n)}const vi=(t,e)=>t?{}:{style:e},Wt=t=>({"aria-hidden":"true",...vi(t,"display:none;")}),Kt=[];function Ld(t,e){return{subscribe:qe(t,e).subscribe}}function qe(t,e=ne){let n;const s=new Set;function r(a){if($e(t,a)&&(t=a,n)){const c=!Kt.length;for(const u of s)u[1](),Kt.push(u,t);if(c){for(let u=0;u<Kt.length;u+=2)Kt[u][0](Kt[u+1]);Kt.length=0}}}function i(a){r(a(t))}function o(a,c=ne){const u=[a,c];return s.add(u),s.size===1&&(n=e(r)||ne),a(t),()=>{s.delete(u),s.size===0&&(n(),n=null)}}return{set:r,update:i,subscribe:o}}function Pd(t,e,n){const s=!Array.isArray(t),r=s?[t]:t,i=e.length<2;return Ld(n,o=>{let a=!1;const c=[];let u=0,l=ne;const h=()=>{if(u)return;l();const g=e(s?c[0]:c,o);i?o(g):l=Ji(g)?g:ne},d=r.map((g,p)=>Zi(g,v=>{c[p]=v,u&=~(1<<p),a&&h()},()=>{u|=1<<p}));return a=!0,h(),function(){It(d),l()}})}const es=t=>`@@svnav-ctx__${t}`,_i=es("LOCATION"),on=es("ROUTER"),bu=es("ROUTE"),Md=es("ROUTE_PARAMS"),xd=es("FOCUS_ELEM"),Su=/^:(.+)/,Tn=(t,e,n)=>t.substr(e,n),wi=(t,e)=>Tn(t,0,e.length)===e,Ud=t=>t==="",Fd=t=>Su.test(t),ku=t=>t[0]==="*",Vd=t=>t.replace(/\*.*$/,""),Cu=t=>t.replace(/(^\/+|\/+$)/g,"");function Xe(t,e=!1){const n=Cu(t).split("/");return e?n.filter(Boolean):n}const Wr=(t,e)=>t+(e?`?${e}`:""),oo=t=>`/${Cu(t)}`;function ts(...t){const e=s=>Xe(s,!0).join("/"),n=t.map(e).join("/");return oo(n)}const ao=1,mr=2,Ut=3,Bd=4,Au=5,jd=6,Ru=7,qd=8,Hd=9,Du=10,Nu=11,zd={[ao]:"Link",[mr]:"Route",[Ut]:"Router",[Bd]:"useFocus",[Au]:"useLocation",[jd]:"useMatch",[Ru]:"useNavigate",[qd]:"useParams",[Hd]:"useResolvable",[Du]:"useResolve",[Nu]:"navigate"},co=t=>zd[t];function Kd(t,e){let n;return t===mr?n=e.path?`path="${e.path}"`:"default":t===ao?n=`to="${e.to}"`:t===Ut&&(n=`basepath="${e.basepath||""}"`),`<${co(t)} ${n||""} />`}function Gd(t,e,n,s){const r=n&&Kd(s||t,n),i=r?`

Occurred in: ${r}`:"",o=co(t),a=wu(e)?e(o):e;return`<${o}> ${a}${i}`}const Ou=t=>(...e)=>t(Gd(...e)),$u=Ou(t=>{throw new Error(t)}),Ws=Ou(console.warn),Ua=4,Wd=3,Qd=2,Yd=1,Xd=1;function Jd(t,e){const n=t.default?0:Xe(t.fullPath).reduce((s,r)=>{let i=s;return i+=Ua,Ud(r)?i+=Xd:Fd(r)?i+=Qd:ku(r)?i-=Ua+Yd:i+=Wd,i},0);return{route:t,score:n,index:e}}function Zd(t){return t.map(Jd).sort((e,n)=>e.score<n.score?1:e.score>n.score?-1:e.index-n.index)}function Lu(t,e){let n,s;const[r]=e.split("?"),i=Xe(r),o=i[0]==="",a=Zd(t);for(let c=0,u=a.length;c<u;c++){const{route:l}=a[c];let h=!1;const d={},g=y=>({...l,params:d,uri:y});if(l.default){s=g(e);continue}const p=Xe(l.fullPath),v=Math.max(i.length,p.length);let m=0;for(;m<v;m++){const y=p[m],S=i[m];if(!xa(y)&&ku(y)){const L=y==="*"?"*":y.slice(1);d[L]=i.slice(m).map(decodeURIComponent).join("/");break}if(xa(S)){h=!0;break}const W=Su.exec(y);if(W&&!o){const L=decodeURIComponent(S);d[W[1]]=L}else if(y!==S){h=!0;break}}if(!h){n=g(ts(...i.slice(0,m)));break}}return n||s||null}function Pu(t,e){return Lu([t],e)}function ef(t,e){if(wi(t,"/"))return t;const[n,s]=t.split("?"),[r]=e.split("?"),i=Xe(n),o=Xe(r);if(i[0]==="")return Wr(r,s);if(!wi(i[0],".")){const u=o.concat(i).join("/");return Wr((r==="/"?"":"/")+u,s)}const a=o.concat(i),c=[];return a.forEach(u=>{u===".."?c.pop():u!=="."&&c.push(u)}),Wr(`/${c.join("/")}`,s)}function Fa(t,e){const{pathname:n,hash:s="",search:r="",state:i}=t,o=Xe(e,!0),a=Xe(n,!0);for(;o.length;)o[0]!==a[0]&&$u(Ut,`Invalid state: All locations must begin with the basepath "${e}", found "${n}"`),o.shift(),a.shift();return{pathname:ts(...a),hash:s,search:r,state:i}}const Va=t=>t.length===1?"":t,uo=t=>{const e=t.indexOf("?"),n=t.indexOf("#"),s=e!==-1,r=n!==-1,i=r?Va(Tn(t,n)):"",o=r?Tn(t,0,n):t,a=s?Va(Tn(o,e)):"";return{pathname:(s?Tn(o,0,e):o)||"/",search:a,hash:i}},tf=t=>{const{pathname:e,search:n,hash:s}=t;return e+n+s};function nf(t,e,n){return ts(n,ef(t,e))}function sf(t,e){const n=oo(Vd(t)),s=Xe(n,!0),r=Xe(e,!0).slice(0,s.length),i=Pu({fullPath:n},ts(...r));return i&&i.uri}const Qr="POP",rf="PUSH",of="REPLACE";function Yr(t){return{...t.location,pathname:encodeURI(decodeURI(t.location.pathname)),state:t.history.state,_key:t.history.state&&t.history.state._key||"initial"}}function af(t){let e=[],n=Yr(t),s=Qr;const r=(i=e)=>i.forEach(o=>o({location:n,action:s}));return{get location(){return n},listen(i){e.push(i);const o=()=>{n=Yr(t),s=Qr,r([i])};r([i]);const a=Tu(t,"popstate",o);return()=>{a(),e=e.filter(c=>c!==i)}},navigate(i,o){const{state:a={},replace:c=!1}=o||{};if(s=c?of:rf,Eu(i))o&&Ws(Nu,"Navigation options (state or replace) are not supported, when passing a number as the first argument to navigate. They are ignored."),s=Qr,t.history.go(i);else{const u={...a,_key:$d()};try{t.history[c?"replaceState":"pushState"](u,"",i)}catch{t.location[c?"replace":"assign"](i)}}n=Yr(t),r()}}}function Xr(t,e){return{...uo(e),state:t}}function cf(t="/"){let e=0,n=[Xr(null,t)];return{get entries(){return n},get location(){return n[e]},addEventListener(){},removeEventListener(){},history:{get state(){return n[e].state},pushState(s,r,i){e++,n=n.slice(0,e),n.push(Xr(s,i))},replaceState(s,r,i){n[e]=Xr(s,i)},go(s){const r=e+s;r<0||r>n.length-1||(e=r)}}}}const uf=!!(!vt&&window.document&&window.document.createElement),lf=!vt&&window.location.origin==="null",hf=af(uf&&!lf?window:cf());let et=null,Mu=!0;function df(t,e){const n=document.querySelectorAll("[data-svnav-router]");for(let s=0;s<n.length;s++){const r=n[s],i=Number(r.dataset.svnavRouter);if(i===t)return!0;if(i===e)return!1}return!1}function ff(t){(!et||t.level>et.level||t.level===et.level&&df(t.routerId,et.routerId))&&(et=t)}function gf(){et=null}function pf(){Mu=!1}function Ba(t){if(!t)return!1;const e="tabindex";try{if(!t.hasAttribute(e)){t.setAttribute(e,"-1");let n;n=Tu(t,"blur",()=>{t.removeAttribute(e),n()})}return t.focus(),document.activeElement===t}catch{return!1}}function mf(t,e){return Number(t.dataset.svnavRouteEnd)===e}function yf(t){return/^H[1-6]$/i.test(t.tagName)}function ja(t,e=document){return e.querySelector(t)}function vf(t){let n=ja(`[data-svnav-route-start="${t}"]`).nextElementSibling;for(;!mf(n,t);){if(yf(n))return n;const s=ja("h1,h2,h3,h4,h5,h6",n);if(s)return s;n=n.nextElementSibling}return null}function _f(t){Promise.resolve(sn(t.focusElement)).then(e=>{const n=e||vf(t.id);n||Ws(Ut,`Could not find an element to focus. You should always render a header for accessibility reasons, or set a custom focus element via the "useFocus" hook. If you don't want this Route or Router to manage focus, pass "primary={false}" to it.`,t,mr),!Ba(n)&&Ba(document.documentElement)})}const wf=(t,e,n)=>(s,r)=>Rd().then(()=>{if(!et||Mu){pf();return}if(s&&_f(et.route),t.announcements&&r){const{path:i,fullPath:o,meta:a,params:c,uri:u}=et.route,l=t.createAnnouncement({path:i,fullPath:o,meta:a,params:c,uri:u},sn(n));Promise.resolve(l).then(h=>{e.set(h)})}gf()}),qa="position:fixed;top:-1px;left:0;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;";function Ef(t){let e,n,s=[{role:"status"},{"aria-atomic":"true"},{"aria-live":"polite"},{"data-svnav-announcer":""},vi(t[6],qa)],r={};for(let i=0;i<s.length;i+=1)r=He(r,s[i]);return{c(){e=w("div"),n=ee(t[0]),We(e,r)},m(i,o){N(i,e,o),f(e,n)},p(i,o){o[0]&1&&pu(n,i[0]),We(e,r=rn(s,[{role:"status"},{"aria-atomic":"true"},{"aria-live":"polite"},{"data-svnav-announcer":""},vi(i[6],qa)]))},d(i){i&&D(e)}}}function If(t){let e,n,s,r,i,o=[Wt(t[6]),{"data-svnav-router":t[3]}],a={};for(let h=0;h<o.length;h+=1)a=He(a,o[h]);const c=t[22].default,u=eo(c,t,t[21],null);let l=t[2]&&t[4]&&t[1].announcements&&Ef(t);return{c(){e=w("div"),n=k(),u&&u.c(),s=k(),l&&l.c(),r=pr(),We(e,a)},m(h,d){N(h,e,d),N(h,n,d),u&&u.m(h,d),N(h,s,d),l&&l.m(h,d),N(h,r,d),i=!0},p(h,d){We(e,a=rn(o,[Wt(h[6]),{"data-svnav-router":h[3]}])),u&&u.p&&(!i||d[0]&2097152)&&no(u,c,h,h[21],i?to(c,h[21],d,null):so(h[21]),null),h[2]&&h[4]&&h[1].announcements&&l.p(h,d)},i(h){i||(C(u,h),i=!0)},o(h){R(u,h),i=!1},d(h){h&&D(e),h&&D(n),u&&u.d(h),h&&D(s),l&&l.d(h),h&&D(r)}}}const Tf=Iu(),Ha="/";function bf(t,e,n){let s,r,i,o,a,{$$slots:c={},$$scope:u}=e,{basepath:l=Ha}=e,{url:h=null}=e,{history:d=hf}=e,{primary:g=!0}=e,{a11y:p={}}=e,{disableInlineStyles:v=!1}=e;const m={createAnnouncement:$=>`Navigated to ${$.uri}`,announcements:!0,...p},y=l,S=oo(l),W=yt(_i),L=yt(on),Q=!W,Y=Tf(),B=g&&!(L&&!L.manageFocus),z=qe("");je(t,z,$=>n(0,a=$));const ie=L?L.disableInlineStyles:v,se=qe([]);je(t,se,$=>n(20,o=$));const ae=qe(null);je(t,ae,$=>n(18,r=$));let j=!1;const le=Q?0:L.level+1,he=Q?qe((()=>Fa(vt?uo(h):d.location,S))()):W;je(t,he,$=>n(17,s=$));const oe=qe(s);je(t,oe,$=>n(19,i=$));const be=wf(m,z,he),Ze=$=>Ne=>Ne.filter(T=>T.id!==$);function Ve($){if(vt){if(j)return;const Ne=Pu($,s.pathname);if(Ne)return j=!0,Ne}else se.update(Ne=>{const T=Ze($.id)(Ne);return T.push($),T})}function ks($){se.update(Ze($))}return!Q&&l!==Ha&&Ws(Ut,'Only top-level Routers can have a "basepath" prop. It is ignored.',{basepath:l}),Q&&(kd(()=>d.listen(Ne=>{const T=Fa(Ne.location,S);oe.set(s),he.set(T)})),Dn(_i,he)),Dn(on,{activeRoute:ae,registerRoute:Ve,unregisterRoute:ks,manageFocus:B,level:le,id:Y,history:Q?d:L.history,basepath:Q?S:L.basepath,disableInlineStyles:ie}),t.$$set=$=>{"basepath"in $&&n(11,l=$.basepath),"url"in $&&n(12,h=$.url),"history"in $&&n(13,d=$.history),"primary"in $&&n(14,g=$.primary),"a11y"in $&&n(15,p=$.a11y),"disableInlineStyles"in $&&n(16,v=$.disableInlineStyles),"$$scope"in $&&n(21,u=$.$$scope)},t.$$.update=()=>{if(t.$$.dirty[0]&2048&&l!==y&&Ws(Ut,'You cannot change the "basepath" prop. It is ignored.'),t.$$.dirty[0]&1179648){const $=Lu(o,s.pathname);ae.set($)}if(t.$$.dirty[0]&655360&&Q){const $=!!s.hash,Ne=!$&&B,T=!$||s.pathname!==i.pathname;be(Ne,T)}t.$$.dirty[0]&262144&&B&&r&&r.primary&&ff({level:le,routerId:Y,route:r})},[a,m,Q,Y,B,z,ie,se,ae,he,oe,l,h,d,g,p,v,s,r,i,o,u,c]}class lo extends Ue{constructor(e){super(),xe(this,e,bf,If,$e,{basepath:11,url:12,history:13,primary:14,a11y:15,disableInlineStyles:16},null,[-1,-1])}}function ns(t,e,n=on,s=Ut){yt(n)||$u(t,i=>`You cannot use ${i} outside of a ${co(s)}.`,e)}const Sf=t=>{const{subscribe:e}=yt(t);return{subscribe:e}};function xu(){return ns(Au),Sf(_i)}function Uu(){const{history:t}=yt(on);return t}function Fu(){const t=yt(bu);return t?Pd(t,e=>e.base):qe("/")}function Vu(){ns(Du);const t=Fu(),{basepath:e}=yt(on);return s=>nf(s,sn(t),e)}function ho(){ns(Ru);const t=Vu(),{navigate:e}=Uu();return(s,r)=>{const i=Eu(s)?s:t(s);return e(i,r)}}const kf=t=>({params:t&16,location:t&8}),za=t=>({params:vt?sn(t[10]):t[4],location:t[3],navigate:t[11]});function Ka(t){let e,n;return e=new lo({props:{primary:t[1],$$slots:{default:[Rf]},$$scope:{ctx:t}}}),{c(){F(e.$$.fragment)},m(s,r){P(e,s,r),n=!0},p(s,r){const i={};r&2&&(i.primary=s[1]),r&528409&&(i.$$scope={dirty:r,ctx:s}),e.$set(i)},i(s){n||(C(e.$$.fragment,s),n=!0)},o(s){R(e.$$.fragment,s),n=!1},d(s){M(e,s)}}}function Cf(t){let e;const n=t[18].default,s=eo(n,t,t[19],za);return{c(){s&&s.c()},m(r,i){s&&s.m(r,i),e=!0},p(r,i){s&&s.p&&(!e||i&524312)&&no(s,n,r,r[19],e?to(n,r[19],i,kf):so(r[19]),za)},i(r){e||(C(s,r),e=!0)},o(r){R(s,r),e=!1},d(r){s&&s.d(r)}}}function Af(t){let e,n,s;const r=[{location:t[3]},{navigate:t[11]},vt?sn(t[10]):t[4],t[12]];var i=t[0];function o(a){let c={};for(let u=0;u<r.length;u+=1)c=He(c,r[u]);return{props:c}}return i&&(e=$a(i,o())),{c(){e&&F(e.$$.fragment),n=pr()},m(a,c){e&&P(e,a,c),N(a,n,c),s=!0},p(a,c){const u=c&7192?rn(r,[c&8&&{location:a[3]},c&2048&&{navigate:a[11]},c&1040&&Ma(vt?sn(a[10]):a[4]),c&4096&&Ma(a[12])]):{};if(i!==(i=a[0])){if(e){ro();const l=e;R(l.$$.fragment,1,0,()=>{M(l,1)}),io()}i?(e=$a(i,o()),F(e.$$.fragment),C(e.$$.fragment,1),P(e,n.parentNode,n)):e=null}else i&&e.$set(u)},i(a){s||(e&&C(e.$$.fragment,a),s=!0)},o(a){e&&R(e.$$.fragment,a),s=!1},d(a){a&&D(n),e&&M(e,a)}}}function Rf(t){let e,n,s,r;const i=[Af,Cf],o=[];function a(c,u){return c[0]!==null?0:1}return e=a(t),n=o[e]=i[e](t),{c(){n.c(),s=pr()},m(c,u){o[e].m(c,u),N(c,s,u),r=!0},p(c,u){let l=e;e=a(c),e===l?o[e].p(c,u):(ro(),R(o[l],1,1,()=>{o[l]=null}),io(),n=o[e],n?n.p(c,u):(n=o[e]=i[e](c),n.c()),C(n,1),n.m(s.parentNode,s))},i(c){r||(C(n),r=!0)},o(c){R(n),r=!1},d(c){o[e].d(c),c&&D(s)}}}function Df(t){let e,n,s,r,i,o=[Wt(t[7]),{"data-svnav-route-start":t[5]}],a={};for(let h=0;h<o.length;h+=1)a=He(a,o[h]);let c=t[2]&&Ka(t),u=[Wt(t[7]),{"data-svnav-route-end":t[5]}],l={};for(let h=0;h<u.length;h+=1)l=He(l,u[h]);return{c(){e=w("div"),n=k(),c&&c.c(),s=k(),r=w("div"),We(e,a),We(r,l)},m(h,d){N(h,e,d),N(h,n,d),c&&c.m(h,d),N(h,s,d),N(h,r,d),i=!0},p(h,[d]){We(e,a=rn(o,[Wt(h[7]),{"data-svnav-route-start":h[5]}])),h[2]?c?(c.p(h,d),d&4&&C(c,1)):(c=Ka(h),c.c(),C(c,1),c.m(s.parentNode,s)):c&&(ro(),R(c,1,1,()=>{c=null}),io()),We(r,l=rn(u,[Wt(h[7]),{"data-svnav-route-end":h[5]}]))},i(h){i||(C(c),i=!0)},o(h){R(c),i=!1},d(h){h&&D(e),h&&D(n),c&&c.d(h),h&&D(s),h&&D(r)}}}const Nf=Iu();function Of(t,e,n){let s;const r=["path","component","meta","primary"];let i=Gs(e,r),o,a,c,u,{$$slots:l={},$$scope:h}=e,{path:d=""}=e,{component:g=null}=e,{meta:p={}}=e,{primary:v=!0}=e;ns(mr,e);const m=Nf(),{registerRoute:y,unregisterRoute:S,activeRoute:W,disableInlineStyles:L}=yt(on);je(t,W,j=>n(16,o=j));const Q=Fu();je(t,Q,j=>n(17,c=j));const Y=xu();je(t,Y,j=>n(3,a=j));const B=qe(null);let z;const ie=qe(),se=qe({});je(t,se,j=>n(4,u=j)),Dn(bu,ie),Dn(Md,se),Dn(xd,B);const ae=ho();return vt||Cd(()=>S(m)),t.$$set=j=>{n(24,e=He(He({},e),Ks(j))),n(12,i=Gs(e,r)),"path"in j&&n(13,d=j.path),"component"in j&&n(0,g=j.component),"meta"in j&&n(14,p=j.meta),"primary"in j&&n(1,v=j.primary),"$$scope"in j&&n(19,h=j.$$scope)},t.$$.update=()=>{if(t.$$.dirty&155658){const j=d==="",le=ts(c,d),de={id:m,path:d,meta:p,default:j,fullPath:j?"":le,base:j?c:sf(le,a.pathname),primary:v,focusElement:B};ie.set(de),n(15,z=y(de))}if(t.$$.dirty&98304&&n(2,s=!!(z||o&&o.id===m)),t.$$.dirty&98308&&s){const{params:j}=z||o;se.set(j)}},e=Ks(e),[g,v,s,a,u,m,W,L,Q,Y,se,ae,i,d,p,z,o,c,l,h]}class Be extends Ue{constructor(e){super(),xe(this,e,Of,Df,$e,{path:13,component:0,meta:14,primary:1})}}function $f(t){let e,n,s,r;const i=t[13].default,o=eo(i,t,t[12],null);let a=[{href:t[0]},t[2],t[1]],c={};for(let u=0;u<a.length;u+=1)c=He(c,a[u]);return{c(){e=w("a"),o&&o.c(),We(e,c)},m(u,l){N(u,e,l),o&&o.m(e,null),n=!0,s||(r=Nt(e,"click",t[4]),s=!0)},p(u,[l]){o&&o.p&&(!n||l&4096)&&no(o,i,u,u[12],n?to(i,u[12],l,null):so(u[12]),null),We(e,c=rn(a,[(!n||l&1)&&{href:u[0]},l&4&&u[2],l&2&&u[1]]))},i(u){n||(C(o,u),n=!0)},o(u){R(o,u),n=!1},d(u){u&&D(e),o&&o.d(u),s=!1,r()}}}function Lf(t,e,n){let s,r,i,o,a,c;const u=["to","replace","state","getProps"];let l=Gs(e,u),h,{$$slots:d={},$$scope:g}=e,{to:p}=e,{replace:v=!1}=e,{state:m={}}=e,{getProps:y=null}=e;ns(ao,e);const S=xu();je(t,S,B=>n(11,h=B));const W=Ad(),L=Vu(),{navigate:Q}=Uu();function Y(B){W("click",B),Od(B)&&(B.preventDefault(),Q(s,{state:m,replace:o||v}))}return t.$$set=B=>{n(19,e=He(He({},e),Ks(B))),n(18,l=Gs(e,u)),"to"in B&&n(5,p=B.to),"replace"in B&&n(6,v=B.replace),"state"in B&&n(7,m=B.state),"getProps"in B&&n(8,y=B.getProps),"$$scope"in B&&n(12,g=B.$$scope)},t.$$.update=()=>{t.$$.dirty&2080&&n(0,s=L(p,h)),t.$$.dirty&2049&&n(10,r=wi(h.pathname,s)),t.$$.dirty&2049&&n(9,i=s===h.pathname),t.$$.dirty&2049&&(o=uo(s)===tf(h)),t.$$.dirty&512&&n(2,a=i?{"aria-current":"page"}:{}),n(1,c=(()=>{if(wu(y)){const B=y({location:h,href:s,isPartiallyCurrent:r,isCurrent:i});return{...l,...B}}return l})())},e=Ks(e),[s,c,a,S,Y,p,v,m,y,i,r,h,g,d]}class Se extends Ue{constructor(e){super(),xe(this,e,Lf,$f,$e,{to:5,replace:6,state:7,getProps:8})}}function Pf(t){let e;return{c(){e=w("h1"),e.textContent="Estas en Agenda"},m(n,s){N(n,e,s)},p:ne,i:ne,o:ne,d(n){n&&D(e)}}}class Bu extends Ue{constructor(e){super(),xe(this,e,null,Pf,$e,{})}}function Mf(t){let e;return{c(){e=w("h1"),e.textContent="Estas en Sinergias"},m(n,s){N(n,e,s)},p:ne,i:ne,o:ne,d(n){n&&D(e)}}}class ju extends Ue{constructor(e){super(),xe(this,e,null,Mf,$e,{})}}/**
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
 */const qu=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},xf=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Hu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,u=c?t[r+2]:0,l=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|u>>6,g=u&63;c||(g=64,o||(d=64)),s.push(n[l],n[h],n[d],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(qu(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):xf(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const u=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||u==null||h==null)throw Error();const d=i<<2|a>>4;if(s.push(d),u!==64){const g=a<<4&240|u>>2;if(s.push(g),h!==64){const p=u<<6&192|h;s.push(p)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Uf=function(t){const e=qu(t);return Hu.encodeByteArray(e,!0)},Qs=function(t){return Uf(t).replace(/\./g,"")},zu=function(t){try{return Hu.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Re(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ff(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Re())}function Vf(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Bf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function jf(){const t=Re();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function qf(){return typeof indexedDB=="object"}function Hf(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function zf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Kf=()=>zf().__FIREBASE_DEFAULTS__,Gf=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t=process.env.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Wf=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&zu(t[1]);return e&&JSON.parse(e)},fo=()=>{try{return Kf()||Gf()||Wf()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ku=t=>{var e,n;return(n=(e=fo())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Qf=t=>{const e=Ku(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Yf=()=>{var t;return(t=fo())===null||t===void 0?void 0:t.config},Gu=t=>{var e;return(e=fo())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Xf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Jf(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Qs(JSON.stringify(n)),Qs(JSON.stringify(o)),a].join(".")}/**
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
 */const Zf="FirebaseError";class ct extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Zf,Object.setPrototypeOf(this,ct.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ss.prototype.create)}}class ss{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?eg(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new ct(r,a,s)}}function eg(t,e){return t.replace(tg,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const tg=/\{\$([^}]+)}/g;function ng(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ys(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(Ga(i)&&Ga(o)){if(!Ys(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Ga(t){return t!==null&&typeof t=="object"}/**
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
 */function rs(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function bn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function Sn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function sg(t,e){const n=new rg(t,e);return n.subscribe.bind(n)}class rg{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");ig(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=Jr),r.error===void 0&&(r.error=Jr),r.complete===void 0&&(r.complete=Jr);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ig(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Jr(){}/**
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
 */function Tt(t){return t&&t._delegate?t._delegate:t}class Ft{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const kt="[DEFAULT]";/**
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
 */class og{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Xf;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(cg(e))try{this.getOrInitializeService({instanceIdentifier:kt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=kt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=kt){return this.instances.has(e)}getOptions(e=kt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:ag(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=kt){return this.component?this.component.multipleInstances?e:kt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ag(t){return t===kt?void 0:t}function cg(t){return t.instantiationMode==="EAGER"}/**
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
 */class ug{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new og(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Z;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Z||(Z={}));const lg={debug:Z.DEBUG,verbose:Z.VERBOSE,info:Z.INFO,warn:Z.WARN,error:Z.ERROR,silent:Z.SILENT},hg=Z.INFO,dg={[Z.DEBUG]:"log",[Z.VERBOSE]:"log",[Z.INFO]:"info",[Z.WARN]:"warn",[Z.ERROR]:"error"},fg=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=dg[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class go{constructor(e){this.name=e,this._logLevel=hg,this._logHandler=fg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?lg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Z.DEBUG,...e),this._logHandler(this,Z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Z.VERBOSE,...e),this._logHandler(this,Z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Z.INFO,...e),this._logHandler(this,Z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Z.WARN,...e),this._logHandler(this,Z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Z.ERROR,...e),this._logHandler(this,Z.ERROR,...e)}}const gg=(t,e)=>e.some(n=>t instanceof n);let Wa,Qa;function pg(){return Wa||(Wa=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function mg(){return Qa||(Qa=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Wu=new WeakMap,Ei=new WeakMap,Qu=new WeakMap,Zr=new WeakMap,po=new WeakMap;function yg(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(gt(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Wu.set(n,t)}).catch(()=>{}),po.set(e,t),e}function vg(t){if(Ei.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Ei.set(t,e)}let Ii={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ei.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Qu.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return gt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function _g(t){Ii=t(Ii)}function wg(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(ei(this),e,...n);return Qu.set(s,e.sort?e.sort():[e]),gt(s)}:mg().includes(t)?function(...e){return t.apply(ei(this),e),gt(Wu.get(this))}:function(...e){return gt(t.apply(ei(this),e))}}function Eg(t){return typeof t=="function"?wg(t):(t instanceof IDBTransaction&&vg(t),gg(t,pg())?new Proxy(t,Ii):t)}function gt(t){if(t instanceof IDBRequest)return yg(t);if(Zr.has(t))return Zr.get(t);const e=Eg(t);return e!==t&&(Zr.set(t,e),po.set(e,t)),e}const ei=t=>po.get(t);function Ig(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=gt(o);return s&&o.addEventListener("upgradeneeded",c=>{s(gt(o.result),c.oldVersion,c.newVersion,gt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const Tg=["get","getKey","getAll","getAllKeys","count"],bg=["put","add","delete","clear"],ti=new Map;function Ya(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ti.get(e))return ti.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=bg.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Tg.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),r&&c.done]))[0]};return ti.set(e,i),i}_g(t=>({...t,get:(e,n,s)=>Ya(e,n)||t.get(e,n,s),has:(e,n)=>!!Ya(e,n)||t.has(e,n)}));/**
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
 */class Sg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(kg(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function kg(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ti="@firebase/app",Xa="0.8.2";/**
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
 */const Vt=new go("@firebase/app"),Cg="@firebase/app-compat",Ag="@firebase/analytics-compat",Rg="@firebase/analytics",Dg="@firebase/app-check-compat",Ng="@firebase/app-check",Og="@firebase/auth",$g="@firebase/auth-compat",Lg="@firebase/database",Pg="@firebase/database-compat",Mg="@firebase/functions",xg="@firebase/functions-compat",Ug="@firebase/installations",Fg="@firebase/installations-compat",Vg="@firebase/messaging",Bg="@firebase/messaging-compat",jg="@firebase/performance",qg="@firebase/performance-compat",Hg="@firebase/remote-config",zg="@firebase/remote-config-compat",Kg="@firebase/storage",Gg="@firebase/storage-compat",Wg="@firebase/firestore",Qg="@firebase/firestore-compat",Yg="firebase",Xg="9.12.1";/**
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
 */const bi="[DEFAULT]",Jg={[Ti]:"fire-core",[Cg]:"fire-core-compat",[Rg]:"fire-analytics",[Ag]:"fire-analytics-compat",[Ng]:"fire-app-check",[Dg]:"fire-app-check-compat",[Og]:"fire-auth",[$g]:"fire-auth-compat",[Lg]:"fire-rtdb",[Pg]:"fire-rtdb-compat",[Mg]:"fire-fn",[xg]:"fire-fn-compat",[Ug]:"fire-iid",[Fg]:"fire-iid-compat",[Vg]:"fire-fcm",[Bg]:"fire-fcm-compat",[jg]:"fire-perf",[qg]:"fire-perf-compat",[Hg]:"fire-rc",[zg]:"fire-rc-compat",[Kg]:"fire-gcs",[Gg]:"fire-gcs-compat",[Wg]:"fire-fst",[Qg]:"fire-fst-compat","fire-js":"fire-js",[Yg]:"fire-js-all"};/**
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
 */const Xs=new Map,Si=new Map;function Zg(t,e){try{t.container.addComponent(e)}catch(n){Vt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function an(t){const e=t.name;if(Si.has(e))return Vt.debug(`There were multiple attempts to register component ${e}.`),!1;Si.set(e,t);for(const n of Xs.values())Zg(n,t);return!0}function mo(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const ep={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},pt=new ss("app","Firebase",ep);/**
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
 */class tp{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ft("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw pt.create("app-deleted",{appName:this._name})}}/**
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
 */const is=Xg;function Yu(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:bi,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw pt.create("bad-app-name",{appName:String(r)});if(n||(n=Yf()),!n)throw pt.create("no-options");const i=Xs.get(r);if(i){if(Ys(n,i.options)&&Ys(s,i.config))return i;throw pt.create("duplicate-app",{appName:r})}const o=new ug(r);for(const c of Si.values())o.addComponent(c);const a=new tp(n,s,o);return Xs.set(r,a),a}function Xu(t=bi){const e=Xs.get(t);if(!e&&t===bi)return Yu();if(!e)throw pt.create("no-app",{appName:t});return e}function mt(t,e,n){var s;let r=(s=Jg[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Vt.warn(a.join(" "));return}an(new Ft(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const np="firebase-heartbeat-database",sp=1,Un="firebase-heartbeat-store";let ni=null;function Ju(){return ni||(ni=Ig(np,sp,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Un)}}}).catch(t=>{throw pt.create("idb-open",{originalErrorMessage:t.message})})),ni}async function rp(t){var e;try{return(await Ju()).transaction(Un).objectStore(Un).get(Zu(t))}catch(n){if(n instanceof ct)Vt.warn(n.message);else{const s=pt.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});Vt.warn(s.message)}}}async function Ja(t,e){var n;try{const r=(await Ju()).transaction(Un,"readwrite");return await r.objectStore(Un).put(e,Zu(t)),r.done}catch(s){if(s instanceof ct)Vt.warn(s.message);else{const r=pt.create("idb-set",{originalErrorMessage:(n=s)===null||n===void 0?void 0:n.message});Vt.warn(r.message)}}}function Zu(t){return`${t.name}!${t.options.appId}`}/**
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
 */const ip=1024,op=30*24*60*60*1e3;class ap{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new up(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Za();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=op}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Za(),{heartbeatsToSend:n,unsentEntries:s}=cp(this._heartbeatsCache.heartbeats),r=Qs(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Za(){return new Date().toISOString().substring(0,10)}function cp(t,e=ip){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),ec(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),ec(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class up{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return qf()?Hf().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await rp(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Ja(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Ja(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function ec(t){return Qs(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function lp(t){an(new Ft("platform-logger",e=>new Sg(e),"PRIVATE")),an(new Ft("heartbeat",e=>new ap(e),"PRIVATE")),mt(Ti,Xa,t),mt(Ti,Xa,"esm2017"),mt("fire-js","")}lp("");var hp="firebase",dp="9.12.1";/**
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
 */mt(hp,dp,"app");var fp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},b,yo=yo||{},V=fp||self;function Js(){}function yr(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function os(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function gp(t){return Object.prototype.hasOwnProperty.call(t,si)&&t[si]||(t[si]=++pp)}var si="closure_uid_"+(1e9*Math.random()>>>0),pp=0;function mp(t,e,n){return t.call.apply(t.bind,arguments)}function yp(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function Ce(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ce=mp:Ce=yp,Ce.apply(null,arguments)}function Rs(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Te(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function bt(){this.s=this.s,this.o=this.o}var vp=0;bt.prototype.s=!1;bt.prototype.na=function(){!this.s&&(this.s=!0,this.M(),vp!=0)&&gp(this)};bt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const el=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function vo(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function tc(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(yr(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function Ae(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ae.prototype.h=function(){this.defaultPrevented=!0};var _p=function(){if(!V.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{V.addEventListener("test",Js,e),V.removeEventListener("test",Js,e)}catch{}return t}();function Zs(t){return/^[\s\xa0]*$/.test(t)}var nc=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function ri(t,e){return t<e?-1:t>e?1:0}function vr(){var t=V.navigator;return t&&(t=t.userAgent)?t:""}function Ke(t){return vr().indexOf(t)!=-1}function _o(t){return _o[" "](t),t}_o[" "]=Js;function wp(t){var e=Tp;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var Ep=Ke("Opera"),cn=Ke("Trident")||Ke("MSIE"),tl=Ke("Edge"),ki=tl||cn,nl=Ke("Gecko")&&!(vr().toLowerCase().indexOf("webkit")!=-1&&!Ke("Edge"))&&!(Ke("Trident")||Ke("MSIE"))&&!Ke("Edge"),Ip=vr().toLowerCase().indexOf("webkit")!=-1&&!Ke("Edge");function sl(){var t=V.document;return t?t.documentMode:void 0}var er;e:{var ii="",oi=function(){var t=vr();if(nl)return/rv:([^\);]+)(\)|;)/.exec(t);if(tl)return/Edge\/([\d\.]+)/.exec(t);if(cn)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Ip)return/WebKit\/(\S+)/.exec(t);if(Ep)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(oi&&(ii=oi?oi[1]:""),cn){var ai=sl();if(ai!=null&&ai>parseFloat(ii)){er=String(ai);break e}}er=ii}var Tp={};function bp(){return wp(function(){let t=0;const e=nc(String(er)).split("."),n=nc("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=ri(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||ri(r[2].length==0,i[2].length==0)||ri(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var Ci;if(V.document&&cn){var sc=sl();Ci=sc||parseInt(er,10)||void 0}else Ci=void 0;var Sp=Ci;function Fn(t,e){if(Ae.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(nl){e:{try{_o(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:kp[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Fn.X.h.call(this)}}Te(Fn,Ae);var kp={2:"touch",3:"pen",4:"mouse"};Fn.prototype.h=function(){Fn.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var as="closure_listenable_"+(1e6*Math.random()|0),Cp=0;function Ap(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=r,this.key=++Cp,this.ba=this.ea=!1}function _r(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function wo(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function rl(t){const e={};for(const n in t)e[n]=t[n];return e}const rc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function il(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<rc.length;i++)n=rc[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function wr(t){this.src=t,this.g={},this.h=0}wr.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Ri(t,e,s,r);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new Ap(e,this.src,i,!!s,r),e.ea=n,t.push(e)),e};function Ai(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=el(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(_r(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Ri(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==s)return r}return-1}var Eo="closure_lm_"+(1e6*Math.random()|0),ci={};function ol(t,e,n,s,r){if(s&&s.once)return cl(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)ol(t,e[i],n,s,r);return null}return n=bo(n),t&&t[as]?t.N(e,n,os(s)?!!s.capture:!!s,r):al(t,e,n,!1,s,r)}function al(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=os(r)?!!r.capture:!!r,a=To(t);if(a||(t[Eo]=a=new wr(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=Rp(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)_p||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(ll(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Rp(){function t(n){return e.call(t.src,t.listener,n)}const e=Dp;return t}function cl(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)cl(t,e[i],n,s,r);return null}return n=bo(n),t&&t[as]?t.O(e,n,os(s)?!!s.capture:!!s,r):al(t,e,n,!0,s,r)}function ul(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)ul(t,e[i],n,s,r);else s=os(s)?!!s.capture:!!s,n=bo(n),t&&t[as]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Ri(i,n,s,r),-1<n&&(_r(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=To(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Ri(e,n,s,r)),(n=-1<t?e[t]:null)&&Io(n))}function Io(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[as])Ai(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(ll(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=To(e))?(Ai(n,t),n.h==0&&(n.src=null,e[Eo]=null)):_r(t)}}}function ll(t){return t in ci?ci[t]:ci[t]="on"+t}function Dp(t,e){if(t.ba)t=!0;else{e=new Fn(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&Io(t),t=n.call(s,e)}return t}function To(t){return t=t[Eo],t instanceof wr?t:null}var ui="__closure_events_fn_"+(1e9*Math.random()>>>0);function bo(t){return typeof t=="function"?t:(t[ui]||(t[ui]=function(e){return t.handleEvent(e)}),t[ui])}function ve(){bt.call(this),this.i=new wr(this),this.P=this,this.I=null}Te(ve,bt);ve.prototype[as]=!0;ve.prototype.removeEventListener=function(t,e,n,s){ul(this,t,e,n,s)};function Ie(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new Ae(e,t);else if(e instanceof Ae)e.target=e.target||t;else{var r=e;e=new Ae(s,t),il(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=Ds(o,s,!0,e)&&r}if(o=e.g=t,r=Ds(o,s,!0,e)&&r,r=Ds(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=Ds(o,s,!1,e)&&r}ve.prototype.M=function(){if(ve.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)_r(n[s]);delete t.g[e],t.h--}}this.I=null};ve.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};ve.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Ds(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&Ai(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var So=V.JSON.stringify;function Np(){var t=fl;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Op{constructor(){this.h=this.g=null}add(e,n){const s=hl.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var hl=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new $p,t=>t.reset());class $p{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Lp(t){V.setTimeout(()=>{throw t},0)}function dl(t,e){Di||Pp(),Ni||(Di(),Ni=!0),fl.add(t,e)}var Di;function Pp(){var t=V.Promise.resolve(void 0);Di=function(){t.then(Mp)}}var Ni=!1,fl=new Op;function Mp(){for(var t;t=Np();){try{t.h.call(t.g)}catch(n){Lp(n)}var e=hl;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ni=!1}function Er(t,e){ve.call(this),this.h=t||1,this.g=e||V,this.j=Ce(this.lb,this),this.l=Date.now()}Te(Er,ve);b=Er.prototype;b.ca=!1;b.R=null;b.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Ie(this,"tick"),this.ca&&(ko(this),this.start()))}};b.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function ko(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}b.M=function(){Er.X.M.call(this),ko(this),delete this.g};function Co(t,e,n){if(typeof t=="function")n&&(t=Ce(t,n));else if(t&&typeof t.handleEvent=="function")t=Ce(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:V.setTimeout(t,e||0)}function gl(t){t.g=Co(()=>{t.g=null,t.i&&(t.i=!1,gl(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class xp extends bt{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:gl(this)}M(){super.M(),this.g&&(V.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Vn(t){bt.call(this),this.h=t,this.g={}}Te(Vn,bt);var ic=[];function pl(t,e,n,s){Array.isArray(n)||(n&&(ic[0]=n.toString()),n=ic);for(var r=0;r<n.length;r++){var i=ol(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function ml(t){wo(t.g,function(e,n){this.g.hasOwnProperty(n)&&Io(e)},t),t.g={}}Vn.prototype.M=function(){Vn.X.M.call(this),ml(this)};Vn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ir(){this.g=!0}Ir.prototype.Aa=function(){this.g=!1};function Up(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function Fp(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function Qt(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Bp(t,n)+(s?" "+s:"")})}function Vp(t,e){t.info(function(){return"TIMEOUT: "+e})}Ir.prototype.info=function(){};function Bp(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return So(n)}catch{return e}}var zt={},oc=null;function Tr(){return oc=oc||new ve}zt.Pa="serverreachability";function yl(t){Ae.call(this,zt.Pa,t)}Te(yl,Ae);function Bn(t){const e=Tr();Ie(e,new yl(e))}zt.STAT_EVENT="statevent";function vl(t,e){Ae.call(this,zt.STAT_EVENT,t),this.stat=e}Te(vl,Ae);function Oe(t){const e=Tr();Ie(e,new vl(e,t))}zt.Qa="timingevent";function _l(t,e){Ae.call(this,zt.Qa,t),this.size=e}Te(_l,Ae);function cs(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return V.setTimeout(function(){t()},e)}var br={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},wl={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Ao(){}Ao.prototype.h=null;function ac(t){return t.h||(t.h=t.i())}function El(){}var us={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Ro(){Ae.call(this,"d")}Te(Ro,Ae);function Do(){Ae.call(this,"c")}Te(Do,Ae);var Oi;function Sr(){}Te(Sr,Ao);Sr.prototype.g=function(){return new XMLHttpRequest};Sr.prototype.i=function(){return{}};Oi=new Sr;function ls(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new Vn(this),this.O=jp,t=ki?125:void 0,this.T=new Er(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Il}function Il(){this.i=null,this.g="",this.h=!1}var jp=45e3,$i={},tr={};b=ls.prototype;b.setTimeout=function(t){this.O=t};function Li(t,e,n){t.K=1,t.v=Cr(rt(e)),t.s=n,t.P=!0,Tl(t,null)}function Tl(t,e){t.F=Date.now(),hs(t),t.A=rt(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),Nl(n.i,"t",s),t.C=0,n=t.l.H,t.h=new Il,t.g=Jl(t.l,n?e:null,!t.s),0<t.N&&(t.L=new xp(Ce(t.La,t,t.g),t.N)),pl(t.S,t.g,"readystatechange",t.ib),e=t.H?rl(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Bn(),Up(t.j,t.u,t.A,t.m,t.U,t.s)}b.ib=function(t){t=t.target;const e=this.L;e&&tt(t)==3?e.l():this.La(t)};b.La=function(t){try{if(t==this.g)e:{const l=tt(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>l)&&(l!=3||ki||this.g&&(this.h.h||this.g.fa()||hc(this.g)))){this.I||l!=4||e==7||(e==8||0>=h?Bn(3):Bn(2)),kr(this);var n=this.g.aa();this.Y=n;t:if(bl(this)){var s=hc(this.g);t="";var r=s.length,i=tt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){At(this),Nn(this);var o="";break t}this.h.i=new V.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,Fp(this.j,this.u,this.A,this.m,this.U,l,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Zs(a)){var u=a;break t}}u=null}if(n=u)Qt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Pi(this,n);else{this.i=!1,this.o=3,Oe(12),At(this),Nn(this);break e}}this.P?(Sl(this,l,o),ki&&this.i&&l==3&&(pl(this.S,this.T,"tick",this.hb),this.T.start())):(Qt(this.j,this.m,o,null),Pi(this,o)),l==4&&At(this),this.i&&!this.I&&(l==4?Wl(this.l,this):(this.i=!1,hs(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Oe(12)):(this.o=0,Oe(13)),At(this),Nn(this)}}}catch{}finally{}};function bl(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Sl(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=qp(t,n),r==tr){e==4&&(t.o=4,Oe(14),s=!1),Qt(t.j,t.m,null,"[Incomplete Response]");break}else if(r==$i){t.o=4,Oe(15),Qt(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else Qt(t.j,t.m,r,null),Pi(t,r);bl(t)&&r!=tr&&r!=$i&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Oe(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),xo(e),e.K=!0,Oe(11))):(Qt(t.j,t.m,n,"[Invalid Chunked Response]"),At(t),Nn(t))}b.hb=function(){if(this.g){var t=tt(this.g),e=this.g.fa();this.C<e.length&&(kr(this),Sl(this,t,e),this.i&&t!=4&&hs(this))}};function qp(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?tr:(n=Number(e.substring(n,s)),isNaN(n)?$i:(s+=1,s+n>e.length?tr:(e=e.substr(s,n),t.C=s+n,e)))}b.cancel=function(){this.I=!0,At(this)};function hs(t){t.V=Date.now()+t.O,kl(t,t.O)}function kl(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=cs(Ce(t.gb,t),e)}function kr(t){t.B&&(V.clearTimeout(t.B),t.B=null)}b.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(Vp(this.j,this.A),this.K!=2&&(Bn(),Oe(17)),At(this),this.o=2,Nn(this)):kl(this,this.V-t)};function Nn(t){t.l.G==0||t.I||Wl(t.l,t)}function At(t){kr(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,ko(t.T),ml(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Pi(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Mi(n.h,t))){if(!t.J&&Mi(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)rr(n),Dr(n);else break e;Mo(n),Oe(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=cs(Ce(n.cb,n),6e3));if(1>=Ll(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Rt(n,11)}else if((t.J||n.g==t)&&rr(n),!Zs(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let u=r[e];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const l=u[3];l!=null&&(n.ma=l,n.j.info("VER="+n.ma));const h=u[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const g=t.g;if(g){const p=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var i=s.h;i.g||p.indexOf("spdy")==-1&&p.indexOf("quic")==-1&&p.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(No(i,i.h),i.h=null))}if(s.D){const v=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(s.za=v,re(s.F,s.D,v))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=Xl(s,s.H?s.ka:null,s.V),o.J){Pl(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(kr(a),hs(a)),s.g=o}else Kl(s);0<n.i.length&&Nr(n)}else u[0]!="stop"&&u[0]!="close"||Rt(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Rt(n,7):Po(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}Bn(4)}catch{}}function Hp(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(yr(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function zp(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(yr(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function Cl(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(yr(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=zp(t),s=Hp(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var Al=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Kp(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Ot(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Ot){this.h=e!==void 0?e:t.h,nr(this,t.j),this.s=t.s,this.g=t.g,sr(this,t.m),this.l=t.l,e=t.i;var n=new jn;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),cc(this,n),this.o=t.o}else t&&(n=String(t).match(Al))?(this.h=!!e,nr(this,n[1]||"",!0),this.s=kn(n[2]||""),this.g=kn(n[3]||"",!0),sr(this,n[4]),this.l=kn(n[5]||"",!0),cc(this,n[6]||"",!0),this.o=kn(n[7]||"")):(this.h=!!e,this.i=new jn(null,this.h))}Ot.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Cn(e,uc,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Cn(e,uc,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Cn(n,n.charAt(0)=="/"?Qp:Wp,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Cn(n,Xp)),t.join("")};function rt(t){return new Ot(t)}function nr(t,e,n){t.j=n?kn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function sr(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function cc(t,e,n){e instanceof jn?(t.i=e,Jp(t.i,t.h)):(n||(e=Cn(e,Yp)),t.i=new jn(e,t.h))}function re(t,e,n){t.i.set(e,n)}function Cr(t){return re(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function kn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Cn(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Gp),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Gp(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var uc=/[#\/\?@]/g,Wp=/[#\?:]/g,Qp=/[#\?]/g,Yp=/[#\?@]/g,Xp=/#/g;function jn(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function St(t){t.g||(t.g=new Map,t.h=0,t.i&&Kp(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}b=jn.prototype;b.add=function(t,e){St(this),this.i=null,t=gn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Rl(t,e){St(t),e=gn(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Dl(t,e){return St(t),e=gn(t,e),t.g.has(e)}b.forEach=function(t,e){St(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};b.oa=function(){St(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};b.W=function(t){St(this);let e=[];if(typeof t=="string")Dl(this,t)&&(e=e.concat(this.g.get(gn(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};b.set=function(t,e){return St(this),this.i=null,t=gn(this,t),Dl(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};b.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function Nl(t,e,n){Rl(t,e),0<n.length&&(t.i=null,t.g.set(gn(t,e),vo(n)),t.h+=n.length)}b.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function gn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Jp(t,e){e&&!t.j&&(St(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(Rl(this,s),Nl(this,r,n))},t)),t.j=e}var Zp=class{constructor(t,e){this.h=t,this.g=e}};function Ol(t){this.l=t||em,V.PerformanceNavigationTiming?(t=V.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(V.g&&V.g.Ga&&V.g.Ga()&&V.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var em=10;function $l(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Ll(t){return t.h?1:t.g?t.g.size:0}function Mi(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function No(t,e){t.g?t.g.add(e):t.h=e}function Pl(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Ol.prototype.cancel=function(){if(this.i=Ml(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Ml(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return vo(t.i)}function Oo(){}Oo.prototype.stringify=function(t){return V.JSON.stringify(t,void 0)};Oo.prototype.parse=function(t){return V.JSON.parse(t,void 0)};function tm(){this.g=new Oo}function nm(t,e,n){const s=n||"";try{Cl(t,function(r,i){let o=r;os(r)&&(o=So(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function sm(t,e){const n=new Ir;if(V.Image){const s=new Image;s.onload=Rs(Ns,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Rs(Ns,n,s,"TestLoadImage: error",!1,e),s.onabort=Rs(Ns,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Rs(Ns,n,s,"TestLoadImage: timeout",!1,e),V.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Ns(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function ds(t){this.l=t.ac||null,this.j=t.jb||!1}Te(ds,Ao);ds.prototype.g=function(){return new Ar(this.l,this.j)};ds.prototype.i=function(t){return function(){return t}}({});function Ar(t,e){ve.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=$o,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Te(Ar,ve);var $o=0;b=Ar.prototype;b.open=function(t,e){if(this.readyState!=$o)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,qn(this)};b.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||V).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};b.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,fs(this)),this.readyState=$o};b.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,qn(this)),this.g&&(this.readyState=3,qn(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof V.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;xl(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function xl(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}b.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?fs(this):qn(this),this.readyState==3&&xl(this)}};b.Va=function(t){this.g&&(this.response=this.responseText=t,fs(this))};b.Ua=function(t){this.g&&(this.response=t,fs(this))};b.ga=function(){this.g&&fs(this)};function fs(t){t.readyState=4,t.l=null,t.j=null,t.A=null,qn(t)}b.setRequestHeader=function(t,e){this.v.append(t,e)};b.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};b.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function qn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ar.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var rm=V.JSON.parse;function ue(t){ve.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Ul,this.K=this.L=!1}Te(ue,ve);var Ul="",im=/^https?$/i,om=["POST","PUT"];b=ue.prototype;b.Ka=function(t){this.L=t};b.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Oi.g(),this.C=this.u?ac(this.u):ac(Oi),this.g.onreadystatechange=Ce(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){lc(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=V.FormData&&t instanceof V.FormData,!(0<=el(om,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Bl(this),0<this.B&&((this.K=am(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ce(this.qa,this)):this.A=Co(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){lc(this,i)}};function am(t){return cn&&bp()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}b.qa=function(){typeof yo<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ie(this,"timeout"),this.abort(8))};function lc(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Fl(t),Rr(t)}function Fl(t){t.D||(t.D=!0,Ie(t,"complete"),Ie(t,"error"))}b.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ie(this,"complete"),Ie(this,"abort"),Rr(this))};b.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Rr(this,!0)),ue.X.M.call(this)};b.Ha=function(){this.s||(this.F||this.v||this.l?Vl(this):this.fb())};b.fb=function(){Vl(this)};function Vl(t){if(t.h&&typeof yo<"u"&&(!t.C[1]||tt(t)!=4||t.aa()!=2)){if(t.v&&tt(t)==4)Co(t.Ha,0,t);else if(Ie(t,"readystatechange"),tt(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(Al)[1]||null;if(!r&&V.self&&V.self.location){var i=V.self.location.protocol;r=i.substr(0,i.length-1)}s=!im.test(r?r.toLowerCase():"")}n=s}if(n)Ie(t,"complete"),Ie(t,"success");else{t.m=6;try{var o=2<tt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",Fl(t)}}finally{Rr(t)}}}}function Rr(t,e){if(t.g){Bl(t);const n=t.g,s=t.C[0]?Js:null;t.g=null,t.C=null,e||Ie(t,"ready");try{n.onreadystatechange=s}catch{}}}function Bl(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(V.clearTimeout(t.A),t.A=null)}function tt(t){return t.g?t.g.readyState:0}b.aa=function(){try{return 2<tt(this)?this.g.status:-1}catch{return-1}};b.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};b.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),rm(e)}};function hc(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Ul:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}b.Ea=function(){return this.m};b.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function jl(t){let e="";return wo(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Lo(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=jl(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):re(t,e,n))}function En(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function ql(t){this.Ca=0,this.i=[],this.j=new Ir,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=En("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=En("baseRetryDelayMs",5e3,t),this.bb=En("retryDelaySeedMs",1e4,t),this.$a=En("forwardChannelMaxRetries",2,t),this.ta=En("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Ol(t&&t.concurrentRequestLimit),this.Fa=new tm,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}b=ql.prototype;b.ma=8;b.G=1;function Po(t){if(Hl(t),t.G==3){var e=t.U++,n=rt(t.F);re(n,"SID",t.I),re(n,"RID",e),re(n,"TYPE","terminate"),gs(t,n),e=new ls(t,t.j,e,void 0),e.K=2,e.v=Cr(rt(n)),n=!1,V.navigator&&V.navigator.sendBeacon&&(n=V.navigator.sendBeacon(e.v.toString(),"")),!n&&V.Image&&(new Image().src=e.v,n=!0),n||(e.g=Jl(e.l,null),e.g.da(e.v)),e.F=Date.now(),hs(e)}Yl(t)}function Dr(t){t.g&&(xo(t),t.g.cancel(),t.g=null)}function Hl(t){Dr(t),t.u&&(V.clearTimeout(t.u),t.u=null),rr(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&V.clearTimeout(t.m),t.m=null)}function Nr(t){$l(t.h)||t.m||(t.m=!0,dl(t.Ja,t),t.C=0)}function cm(t,e){return Ll(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=cs(Ce(t.Ja,t,e),Ql(t,t.C)),t.C++,!0)}b.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new ls(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=rl(i),il(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=zl(this,r,e),n=rt(this.F),re(n,"RID",t),re(n,"CVER",22),this.D&&re(n,"X-HTTP-Session-Id",this.D),gs(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(jl(i)))+"&"+e:this.o&&Lo(n,this.o,i)),No(this.h,r),this.Ya&&re(n,"TYPE","init"),this.O?(re(n,"$req",e),re(n,"SID","null"),r.Z=!0,Li(r,n,null)):Li(r,n,e),this.G=2}}else this.G==3&&(t?dc(this,t):this.i.length==0||$l(this.h)||dc(this))};function dc(t,e){var n;e?n=e.m:n=t.U++;const s=rt(t.F);re(s,"SID",t.I),re(s,"RID",n),re(s,"AID",t.T),gs(t,s),t.o&&t.s&&Lo(s,t.o,t.s),n=new ls(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=zl(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),No(t.h,n),Li(n,s,e)}function gs(t,e){t.ia&&wo(t.ia,function(n,s){re(e,s,n)}),t.l&&Cl({},function(n,s){re(e,s,n)})}function zl(t,e,n){n=Math.min(t.i.length,n);var s=t.l?Ce(t.l.Ra,t.l,t):null;e:{var r=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let u=r[c].h;const l=r[c].g;if(u-=i,0>u)i=Math.max(0,r[c].h-100),a=!1;else try{nm(l,o,"req"+u+"_")}catch{s&&s(l)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function Kl(t){t.g||t.u||(t.Z=1,dl(t.Ia,t),t.A=0)}function Mo(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=cs(Ce(t.Ia,t),Ql(t,t.A)),t.A++,!0)}b.Ia=function(){if(this.u=null,Gl(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=cs(Ce(this.eb,this),t)}};b.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Oe(10),Dr(this),Gl(this))};function xo(t){t.B!=null&&(V.clearTimeout(t.B),t.B=null)}function Gl(t){t.g=new ls(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=rt(t.sa);re(e,"RID","rpc"),re(e,"SID",t.I),re(e,"CI",t.L?"0":"1"),re(e,"AID",t.T),re(e,"TYPE","xmlhttp"),gs(t,e),t.o&&t.s&&Lo(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Cr(rt(e)),n.s=null,n.P=!0,Tl(n,t)}b.cb=function(){this.v!=null&&(this.v=null,Dr(this),Mo(this),Oe(19))};function rr(t){t.v!=null&&(V.clearTimeout(t.v),t.v=null)}function Wl(t,e){var n=null;if(t.g==e){rr(t),xo(t),t.g=null;var s=2}else if(Mi(t.h,e))n=e.D,Pl(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=Tr(),Ie(s,new _l(s,n)),Nr(t)}else Kl(t);else if(r=e.o,r==3||r==0&&0<t.pa||!(s==1&&cm(t,e)||s==2&&Mo(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:Rt(t,5);break;case 4:Rt(t,10);break;case 3:Rt(t,6);break;default:Rt(t,2)}}}function Ql(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Rt(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=Ce(t.kb,t);n||(n=new Ot("//www.google.com/images/cleardot.gif"),V.location&&V.location.protocol=="http"||nr(n,"https"),Cr(n)),sm(n.toString(),s)}else Oe(2);t.G=0,t.l&&t.l.va(e),Yl(t),Hl(t)}b.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Oe(2)):(this.j.info("Failed to ping google.com"),Oe(1))};function Yl(t){if(t.G=0,t.la=[],t.l){const e=Ml(t.h);(e.length!=0||t.i.length!=0)&&(tc(t.la,e),tc(t.la,t.i),t.h.i.length=0,vo(t.i),t.i.length=0),t.l.ua()}}function Xl(t,e,n){var s=n instanceof Ot?rt(n):new Ot(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),sr(s,s.m);else{var r=V.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new Ot(null,void 0);s&&nr(i,s),e&&(i.g=e),r&&sr(i,r),n&&(i.l=n),s=i}return n=t.D,e=t.za,n&&e&&re(s,n,e),re(s,"VER",t.ma),gs(t,s),s}function Jl(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new ue(new ds({jb:!0})):new ue(t.ra),e.Ka(t.H),e}function Zl(){}b=Zl.prototype;b.xa=function(){};b.wa=function(){};b.va=function(){};b.ua=function(){};b.Ra=function(){};function ir(){if(cn&&!(10<=Number(Sp)))throw Error("Environmental error: no available transport.")}ir.prototype.g=function(t,e){return new Fe(t,e)};function Fe(t,e){ve.call(this),this.g=new ql(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Zs(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Zs(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new pn(this)}Te(Fe,ve);Fe.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Oe(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Xl(t,null,t.V),Nr(t)};Fe.prototype.close=function(){Po(this.g)};Fe.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=So(t),t=n);e.i.push(new Zp(e.ab++,t)),e.G==3&&Nr(e)};Fe.prototype.M=function(){this.g.l=null,delete this.j,Po(this.g),delete this.g,Fe.X.M.call(this)};function eh(t){Ro.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Te(eh,Ro);function th(){Do.call(this),this.status=1}Te(th,Do);function pn(t){this.g=t}Te(pn,Zl);pn.prototype.xa=function(){Ie(this.g,"a")};pn.prototype.wa=function(t){Ie(this.g,new eh(t))};pn.prototype.va=function(t){Ie(this.g,new th)};pn.prototype.ua=function(){Ie(this.g,"b")};ir.prototype.createWebChannel=ir.prototype.g;Fe.prototype.send=Fe.prototype.u;Fe.prototype.open=Fe.prototype.m;Fe.prototype.close=Fe.prototype.close;br.NO_ERROR=0;br.TIMEOUT=8;br.HTTP_ERROR=6;wl.COMPLETE="complete";El.EventType=us;us.OPEN="a";us.CLOSE="b";us.ERROR="c";us.MESSAGE="d";ve.prototype.listen=ve.prototype.N;ue.prototype.listenOnce=ue.prototype.O;ue.prototype.getLastError=ue.prototype.Oa;ue.prototype.getLastErrorCode=ue.prototype.Ea;ue.prototype.getStatus=ue.prototype.aa;ue.prototype.getResponseJson=ue.prototype.Sa;ue.prototype.getResponseText=ue.prototype.fa;ue.prototype.send=ue.prototype.da;ue.prototype.setWithCredentials=ue.prototype.Ka;var um=function(){return new ir},lm=function(){return Tr()},li=br,hm=wl,dm=zt,fc={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},fm=ds,Os=El,gm=ue;const gc="@firebase/firestore";/**
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
 */class ke{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ke.UNAUTHENTICATED=new ke(null),ke.GOOGLE_CREDENTIALS=new ke("google-credentials-uid"),ke.FIRST_PARTY=new ke("first-party-uid"),ke.MOCK_USER=new ke("mock-user");/**
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
 */let mn="9.12.1";/**
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
 */const Bt=new go("@firebase/firestore");function pc(){return Bt.logLevel}function A(t,...e){if(Bt.logLevel<=Z.DEBUG){const n=e.map(Uo);Bt.debug(`Firestore (${mn}): ${t}`,...n)}}function it(t,...e){if(Bt.logLevel<=Z.ERROR){const n=e.map(Uo);Bt.error(`Firestore (${mn}): ${t}`,...n)}}function xi(t,...e){if(Bt.logLevel<=Z.WARN){const n=e.map(Uo);Bt.warn(`Firestore (${mn}): ${t}`,...n)}}function Uo(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
*/var e}/**
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
 */function H(t="Unexpected state"){const e=`FIRESTORE (${mn}) INTERNAL ASSERTION FAILED: `+t;throw it(e),new Error(e)}function pe(t,e){t||H()}function J(t,e){return t}/**
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
 */const I={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class U extends ct{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class $t{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class nh{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class pm{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ke.UNAUTHENTICATED))}shutdown(){}}class mm{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class ym{constructor(e){this.t=e,this.currentUser=ke.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new $t;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new $t,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{A("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(A("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new $t)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(A("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(pe(typeof s.accessToken=="string"),new nh(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return pe(e===null||typeof e=="string"),new ke(e)}}class vm{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r,this.type="FirstParty",this.user=ke.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(pe(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class _m{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r}getToken(){return Promise.resolve(new vm(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(ke.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class wm{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Em{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=i=>{i.error!=null&&A("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,A("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{A("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?r(i):A("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(pe(typeof n.token=="string"),this.A=n.token,new wm(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Im(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class Tm{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=Im(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function te(t,e){return t<e?-1:t>e?1:0}function un(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
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
 */class Me{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new U(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new U(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new U(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new U(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Me.fromMillis(Date.now())}static fromDate(e){return Me.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Me(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?te(this.nanoseconds,e.nanoseconds):te(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class K{constructor(e){this.timestamp=e}static fromTimestamp(e){return new K(e)}static min(){return new K(new Me(0,0))}static max(){return new K(new Me(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Hn{constructor(e,n,s){n===void 0?n=0:n>e.length&&H(),s===void 0?s=e.length-n:s>e.length-n&&H(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Hn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Hn?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ce extends Hn{construct(e,n,s){return new ce(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new U(I.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new ce(n)}static emptyPath(){return new ce([])}}const bm=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Le extends Hn{construct(e,n,s){return new Le(e,n,s)}static isValidIdentifier(e){return bm.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Le.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Le(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new U(I.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new U(I.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new U(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new U(I.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Le(n)}static emptyPath(){return new Le([])}}/**
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
 */class O{constructor(e){this.path=e}static fromPath(e){return new O(ce.fromString(e))}static fromName(e){return new O(ce.fromString(e).popFirst(5))}static empty(){return new O(ce.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ce.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ce.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new O(new ce(e.slice()))}}function Sm(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=K.fromTimestamp(s===1e9?new Me(n+1,0):new Me(n,s));return new _t(r,O.empty(),e)}function km(t){return new _t(t.readTime,t.key,-1)}class _t{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new _t(K.min(),O.empty(),-1)}static max(){return new _t(K.max(),O.empty(),-1)}}function Cm(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=O.comparator(t.documentKey,e.documentKey),n!==0?n:te(t.largestBatchId,e.largestBatchId))}/**
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
 */const Am="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Rm{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Fo(t){if(t.code!==I.FAILED_PRECONDITION||t.message!==Am)throw t;A("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class _{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&H(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new _((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof _?n:_.resolve(n)}catch(n){return _.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):_.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):_.reject(n)}static resolve(e){return new _((n,s)=>{n(e)})}static reject(e){return new _((n,s)=>{s(e)})}static waitFor(e){return new _((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=_.resolve(!1);for(const s of e)n=n.next(r=>r?_.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new _((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(l=>{o[u]=l,++a,a===i&&s(o)},l=>r(l))}})}static doWhile(e,n){return new _((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function ps(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Vo{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}/**
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
 */function mc(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Or(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Dm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */Vo.at=-1;class _e{constructor(e,n){this.comparator=e,this.root=n||we.EMPTY}insert(e,n){return new _e(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,we.BLACK,null,null))}remove(e){return new _e(this.comparator,this.root.remove(e,this.comparator).copy(null,null,we.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new $s(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new $s(this.root,e,this.comparator,!1)}getReverseIterator(){return new $s(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new $s(this.root,e,this.comparator,!0)}}class $s{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class we{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s!=null?s:we.RED,this.left=r!=null?r:we.EMPTY,this.right=i!=null?i:we.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new we(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,r!=null?r:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return we.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return we.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,we.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,we.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw H();const e=this.left.check();if(e!==this.right.check())throw H();return e+(this.isRed()?0:1)}}we.EMPTY=null,we.RED=!0,we.BLACK=!1;we.EMPTY=new class{constructor(){this.size=0}get key(){throw H()}get value(){throw H()}get color(){throw H()}get left(){throw H()}get right(){throw H()}copy(t,e,n,s,r){return this}insert(t,e,n){return new we(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class me{constructor(e){this.comparator=e,this.data=new _e(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new yc(this.data.getIterator())}getIteratorFrom(e){return new yc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof me)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new me(this.comparator);return n.data=e,n}}class yc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Lt{constructor(e){this.fields=e,e.sort(Le.comparator)}static empty(){return new Lt([])}unionWith(e){let n=new me(Le.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Lt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return un(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class De{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new De(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new De(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return te(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}De.EMPTY_BYTE_STRING=new De("");const Nm=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function wt(t){if(pe(!!t),typeof t=="string"){let e=0;const n=Nm.exec(t);if(pe(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:ge(t.seconds),nanos:ge(t.nanos)}}function ge(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ln(t){return typeof t=="string"?De.fromBase64String(t):De.fromUint8Array(t)}/**
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
 */function sh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function rh(t){const e=t.mapValue.fields.__previous_value__;return sh(e)?rh(e):e}function zn(t){const e=wt(t.mapValue.fields.__local_write_time__.timestampValue);return new Me(e.seconds,e.nanos)}/**
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
 */class Om{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Kn{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Kn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Kn&&e.projectId===this.projectId&&e.database===this.database}}function $r(t){return t==null}function Ui(t){return t===0&&1/t==-1/0}/**
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
 */const Ls={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function jt(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?sh(t)?4:$m(t)?9007199254740991:10:H()}function Je(t,e){if(t===e)return!0;const n=jt(t);if(n!==jt(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return zn(t).isEqual(zn(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=wt(s.timestampValue),o=wt(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return ln(s.bytesValue).isEqual(ln(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return ge(s.geoPointValue.latitude)===ge(r.geoPointValue.latitude)&&ge(s.geoPointValue.longitude)===ge(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return ge(s.integerValue)===ge(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=ge(s.doubleValue),o=ge(r.doubleValue);return i===o?Ui(i)===Ui(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return un(t.arrayValue.values||[],e.arrayValue.values||[],Je);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(mc(i)!==mc(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Je(i[a],o[a])))return!1;return!0}(t,e);default:return H()}}function Gn(t,e){return(t.values||[]).find(n=>Je(n,e))!==void 0}function hn(t,e){if(t===e)return 0;const n=jt(t),s=jt(e);if(n!==s)return te(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return te(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=ge(r.integerValue||r.doubleValue),a=ge(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return vc(t.timestampValue,e.timestampValue);case 4:return vc(zn(t),zn(e));case 5:return te(t.stringValue,e.stringValue);case 6:return function(r,i){const o=ln(r),a=ln(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=te(o[c],a[c]);if(u!==0)return u}return te(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=te(ge(r.latitude),ge(i.latitude));return o!==0?o:te(ge(r.longitude),ge(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=hn(o[c],a[c]);if(u)return u}return te(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===Ls.mapValue&&i===Ls.mapValue)return 0;if(r===Ls.mapValue)return 1;if(i===Ls.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=te(a[l],u[l]);if(h!==0)return h;const d=hn(o[a[l]],c[u[l]]);if(d!==0)return d}return te(a.length,u.length)}(t.mapValue,e.mapValue);default:throw H()}}function vc(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return te(t,e);const n=wt(t),s=wt(e),r=te(n.seconds,s.seconds);return r!==0?r:te(n.nanos,s.nanos)}function Jt(t){return Fi(t)}function Fi(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=wt(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?ln(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,O.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=Fi(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Fi(s.fields[a])}`;return i+"}"}(t.mapValue):H();var e,n}function Vi(t){return!!t&&"integerValue"in t}function Bo(t){return!!t&&"arrayValue"in t}function _c(t){return!!t&&"nullValue"in t}function wc(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function hi(t){return!!t&&"mapValue"in t}function On(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Or(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=On(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=On(t.arrayValue.values[n]);return e}return Object.assign({},t)}function $m(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Ge{constructor(e){this.value=e}static empty(){return new Ge({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!hi(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=On(n)}setAll(e){let n=Le.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=On(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());hi(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Je(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];hi(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){Or(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new Ge(On(this.value))}}/**
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
 */class Ee{constructor(e,n,s,r,i,o){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.data=i,this.documentState=o}static newInvalidDocument(e){return new Ee(e,0,K.min(),K.min(),Ge.empty(),0)}static newFoundDocument(e,n,s){return new Ee(e,1,n,K.min(),s,0)}static newNoDocument(e,n){return new Ee(e,2,n,K.min(),Ge.empty(),0)}static newUnknownDocument(e,n){return new Ee(e,3,n,K.min(),Ge.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ge.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ge.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=K.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ee&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ee(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Lm{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ht=null}}function Ec(t,e=null,n=[],s=[],r=null,i=null,o=null){return new Lm(t,e,n,s,r,i,o)}function jo(t){const e=J(t);if(e.ht===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>{return(r=s).field.canonicalString()+r.op.toString()+Jt(r.value);var r}).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),$r(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Jt(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Jt(s)).join(",")),e.ht=n}return e.ht}function Pm(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${Jt(s.value)}`;var s}).join(", ")}]`),$r(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Jt(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Jt(n)).join(",")),`Target(${e})`}function qo(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let r=0;r<t.orderBy.length;r++)if(!qm(t.orderBy[r],e.orderBy[r]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let r=0;r<t.filters.length;r++)if(n=t.filters[r],s=e.filters[r],n.op!==s.op||!n.field.isEqual(s.field)||!Je(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Tc(t.startAt,e.startAt)&&Tc(t.endAt,e.endAt)}function Bi(t){return O.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class Pe extends class{}{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.lt(e,n,s):new Mm(e,n,s):n==="array-contains"?new Fm(e,s):n==="in"?new Vm(e,s):n==="not-in"?new Bm(e,s):n==="array-contains-any"?new jm(e,s):new Pe(e,n,s)}static lt(e,n,s){return n==="in"?new xm(e,s):new Um(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.ft(hn(n,this.value)):n!==null&&jt(this.value)===jt(n)&&this.ft(hn(n,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return H()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Mm extends Pe{constructor(e,n,s){super(e,n,s),this.key=O.fromName(s.referenceValue)}matches(e){const n=O.comparator(e.key,this.key);return this.ft(n)}}class xm extends Pe{constructor(e,n){super(e,"in",n),this.keys=ih("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Um extends Pe{constructor(e,n){super(e,"not-in",n),this.keys=ih("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function ih(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>O.fromName(s.referenceValue))}class Fm extends Pe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Bo(n)&&Gn(n.arrayValue,this.value)}}class Vm extends Pe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Gn(this.value.arrayValue,n)}}class Bm extends Pe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Gn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Gn(this.value.arrayValue,n)}}class jm extends Pe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Bo(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Gn(this.value.arrayValue,s))}}class or{constructor(e,n){this.position=e,this.inclusive=n}}class $n{constructor(e,n="asc"){this.field=e,this.dir=n}}function qm(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Ic(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=O.comparator(O.fromName(o.referenceValue),n.key):s=hn(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Tc(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Je(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Lr{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this._t=null,this.wt=null,this.startAt,this.endAt}}function Hm(t,e,n,s,r,i,o,a){return new Lr(t,e,n,s,r,i,o,a)}function oh(t){return new Lr(t)}function bc(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function zm(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Km(t){for(const e of t.filters)if(e.dt())return e.field;return null}function Gm(t){return t.collectionGroup!==null}function Wn(t){const e=J(t);if(e._t===null){e._t=[];const n=Km(e),s=zm(e);if(n!==null&&s===null)n.isKeyField()||e._t.push(new $n(n)),e._t.push(new $n(Le.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e._t.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new $n(Le.keyField(),i))}}}return e._t}function ot(t){const e=J(t);if(!e.wt)if(e.limitType==="F")e.wt=Ec(e.path,e.collectionGroup,Wn(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Wn(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new $n(i.field,o))}const s=e.endAt?new or(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new or(e.startAt.position,e.startAt.inclusive):null;e.wt=Ec(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e.wt}function ji(t,e,n){return new Lr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Pr(t,e){return qo(ot(t),ot(e))&&t.limitType===e.limitType}function ah(t){return`${jo(ot(t))}|lt:${t.limitType}`}function qi(t){return`Query(target=${Pm(ot(t))}; limitType=${t.limitType})`}function Ho(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):O.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of n.explicitOrderBy)if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=Ic(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,Wn(n),s)||n.endAt&&!function(r,i,o){const a=Ic(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,Wn(n),s))}(t,e)}function Wm(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function ch(t){return(e,n)=>{let s=!1;for(const r of Wn(t)){const i=Qm(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function Qm(t,e,n){const s=t.field.isKeyField()?O.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?hn(a,c):H()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return H()}}/**
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
 */function Ym(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ui(e)?"-0":e}}function Xm(t){return{integerValue:""+t}}/**
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
 */class Mr{constructor(){this._=void 0}}function Jm(t,e,n){return t instanceof Hi?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof ar?uh(t,e):t instanceof cr?lh(t,e):function(s,r){const i=ey(s,r),o=Sc(i)+Sc(s.yt);return Vi(i)&&Vi(s.yt)?Xm(o):Ym(s.It,o)}(t,e)}function Zm(t,e,n){return t instanceof ar?uh(t,e):t instanceof cr?lh(t,e):n}function ey(t,e){return t instanceof zi?Vi(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Hi extends Mr{}class ar extends Mr{constructor(e){super(),this.elements=e}}function uh(t,e){const n=hh(e);for(const s of t.elements)n.some(r=>Je(r,s))||n.push(s);return{arrayValue:{values:n}}}class cr extends Mr{constructor(e){super(),this.elements=e}}function lh(t,e){let n=hh(e);for(const s of t.elements)n=n.filter(r=>!Je(r,s));return{arrayValue:{values:n}}}class zi extends Mr{constructor(e,n){super(),this.It=e,this.yt=n}}function Sc(t){return ge(t.integerValue||t.doubleValue)}function hh(t){return Bo(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function ty(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof ar&&s instanceof ar||n instanceof cr&&s instanceof cr?un(n.elements,s.elements,Je):n instanceof zi&&s instanceof zi?Je(n.yt,s.yt):n instanceof Hi&&s instanceof Hi}(t.transform,e.transform)}class Pt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Pt}static exists(e){return new Pt(void 0,e)}static updateTime(e){return new Pt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Fs(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class zo{}function dh(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new sy(t.key,Pt.none()):new Ko(t.key,t.data,Pt.none());{const n=t.data,s=Ge.empty();let r=new me(Le.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new xr(t.key,s,new Lt(r.toArray()),Pt.none())}}function ny(t,e,n){t instanceof Ko?function(s,r,i){const o=s.value.clone(),a=Cc(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof xr?function(s,r,i){if(!Fs(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=Cc(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(fh(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Ln(t,e,n,s){return t instanceof Ko?function(r,i,o,a){if(!Fs(r.precondition,i))return o;const c=r.value.clone(),u=Ac(r.fieldTransforms,a,i);return c.setAll(u),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof xr?function(r,i,o,a){if(!Fs(r.precondition,i))return o;const c=Ac(r.fieldTransforms,a,i),u=i.data;return u.setAll(fh(r)),u.setAll(c),i.convertToFoundDocument(i.version,u).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(l=>l.field))}(t,e,n,s):function(r,i,o){return Fs(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function kc(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&un(n,s,(r,i)=>ty(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ko extends zo{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class xr extends zo{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function fh(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Cc(t,e,n){const s=new Map;pe(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,Zm(o,a,n[r]))}return s}function Ac(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,Jm(i,o,e))}return s}class sy extends zo{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class ry{constructor(e){this.count=e}}/**
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
 */var fe,G;function gh(t){if(t===void 0)return it("GRPC error has no .code"),I.UNKNOWN;switch(t){case fe.OK:return I.OK;case fe.CANCELLED:return I.CANCELLED;case fe.UNKNOWN:return I.UNKNOWN;case fe.DEADLINE_EXCEEDED:return I.DEADLINE_EXCEEDED;case fe.RESOURCE_EXHAUSTED:return I.RESOURCE_EXHAUSTED;case fe.INTERNAL:return I.INTERNAL;case fe.UNAVAILABLE:return I.UNAVAILABLE;case fe.UNAUTHENTICATED:return I.UNAUTHENTICATED;case fe.INVALID_ARGUMENT:return I.INVALID_ARGUMENT;case fe.NOT_FOUND:return I.NOT_FOUND;case fe.ALREADY_EXISTS:return I.ALREADY_EXISTS;case fe.PERMISSION_DENIED:return I.PERMISSION_DENIED;case fe.FAILED_PRECONDITION:return I.FAILED_PRECONDITION;case fe.ABORTED:return I.ABORTED;case fe.OUT_OF_RANGE:return I.OUT_OF_RANGE;case fe.UNIMPLEMENTED:return I.UNIMPLEMENTED;case fe.DATA_LOSS:return I.DATA_LOSS;default:return H()}}(G=fe||(fe={}))[G.OK=0]="OK",G[G.CANCELLED=1]="CANCELLED",G[G.UNKNOWN=2]="UNKNOWN",G[G.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",G[G.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",G[G.NOT_FOUND=5]="NOT_FOUND",G[G.ALREADY_EXISTS=6]="ALREADY_EXISTS",G[G.PERMISSION_DENIED=7]="PERMISSION_DENIED",G[G.UNAUTHENTICATED=16]="UNAUTHENTICATED",G[G.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",G[G.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",G[G.ABORTED=10]="ABORTED",G[G.OUT_OF_RANGE=11]="OUT_OF_RANGE",G[G.UNIMPLEMENTED=12]="UNIMPLEMENTED",G[G.INTERNAL=13]="INTERNAL",G[G.UNAVAILABLE=14]="UNAVAILABLE",G[G.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class yn{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Or(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return Dm(this.inner)}size(){return this.innerSize}}/**
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
 */const iy=new _e(O.comparator);function Et(){return iy}const ph=new _e(O.comparator);function An(...t){let e=ph;for(const n of t)e=e.insert(n.key,n);return e}function oy(t){let e=ph;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Dt(){return Pn()}function mh(){return Pn()}function Pn(){return new yn(t=>t.toString(),(t,e)=>t.isEqual(e))}new _e(O.comparator);const ay=new me(O.comparator);function X(...t){let e=ay;for(const n of t)e=e.add(n);return e}const cy=new me(te);function yh(){return cy}/**
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
 */class Ur{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,ms.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Ur(K.min(),r,yh(),Et(),X())}}class ms{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new ms(s,n,X(),X(),X())}}/**
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
 */class Vs{constructor(e,n,s,r){this.Tt=e,this.removedTargetIds=n,this.key=s,this.Et=r}}class vh{constructor(e,n){this.targetId=e,this.At=n}}class _h{constructor(e,n,s=De.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class Rc{constructor(){this.Rt=0,this.bt=Nc(),this.Pt=De.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=X(),n=X(),s=X();return this.bt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:H()}}),new ms(this.Pt,this.vt,e,n,s)}Nt(){this.Vt=!1,this.bt=Nc()}kt(e,n){this.Vt=!0,this.bt=this.bt.insert(e,n)}Ot(e){this.Vt=!0,this.bt=this.bt.remove(e)}Mt(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class uy{constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=Et(),this.qt=Dc(),this.Kt=new me(te)}Gt(e){for(const n of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(n,e.Et):this.jt(n,e.key,e.Et);for(const n of e.removedTargetIds)this.jt(n,e.key,e.Et)}Wt(e){this.forEachTarget(e,n=>{const s=this.zt(n);switch(e.state){case 0:this.Ht(n)&&s.Ct(e.resumeToken);break;case 1:s.Ft(),s.St||s.Nt(),s.Ct(e.resumeToken);break;case 2:s.Ft(),s.St||this.removeTarget(n);break;case 3:this.Ht(n)&&(s.$t(),s.Ct(e.resumeToken));break;case 4:this.Ht(n)&&(this.Jt(n),s.Ct(e.resumeToken));break;default:H()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Lt.forEach((s,r)=>{this.Ht(r)&&n(r)})}Yt(e){const n=e.targetId,s=e.At.count,r=this.Xt(n);if(r){const i=r.target;if(Bi(i))if(s===0){const o=new O(i.path);this.jt(n,o,Ee.newNoDocument(o,K.min()))}else pe(s===1);else this.Zt(n)!==s&&(this.Jt(n),this.Kt=this.Kt.add(n))}}te(e){const n=new Map;this.Lt.forEach((i,o)=>{const a=this.Xt(o);if(a){if(i.current&&Bi(a.target)){const c=new O(a.target.path);this.Ut.get(c)!==null||this.ee(o,c)||this.jt(o,c,Ee.newNoDocument(c,e))}i.Dt&&(n.set(o,i.xt()),i.Nt())}});let s=X();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Xt(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Ut.forEach((i,o)=>o.setReadTime(e));const r=new Ur(e,n,this.Kt,this.Ut,s);return this.Ut=Et(),this.qt=Dc(),this.Kt=new me(te),r}Qt(e,n){if(!this.Ht(e))return;const s=this.ee(e,n.key)?2:0;this.zt(e).kt(n.key,s),this.Ut=this.Ut.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ne(n.key).add(e))}jt(e,n,s){if(!this.Ht(e))return;const r=this.zt(e);this.ee(e,n)?r.kt(n,1):r.Ot(n),this.qt=this.qt.insert(n,this.ne(n).delete(e)),s&&(this.Ut=this.Ut.insert(n,s))}removeTarget(e){this.Lt.delete(e)}Zt(e){const n=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Mt(e){this.zt(e).Mt()}zt(e){let n=this.Lt.get(e);return n||(n=new Rc,this.Lt.set(e,n)),n}ne(e){let n=this.qt.get(e);return n||(n=new me(te),this.qt=this.qt.insert(e,n)),n}Ht(e){const n=this.Xt(e)!==null;return n||A("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.Lt.get(e);return n&&n.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new Rc),this.Bt.getRemoteKeysForTarget(e).forEach(n=>{this.jt(e,n,null)})}ee(e,n){return this.Bt.getRemoteKeysForTarget(e).has(n)}}function Dc(){return new _e(O.comparator)}function Nc(){return new _e(O.comparator)}/**
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
 */const ly=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),hy=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class dy{constructor(e,n){this.databaseId=e,this.gt=n}}function fy(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function gy(t,e){return t.gt?e.toBase64():e.toUint8Array()}function Qn(t){return pe(!!t),K.fromTimestamp(function(e){const n=wt(e);return new Me(n.seconds,n.nanos)}(t))}function py(t,e){return function(n){return new ce(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function wh(t){const e=ce.fromString(t);return pe(Th(e)),e}function di(t,e){const n=wh(e);if(n.get(1)!==t.databaseId.projectId)throw new U(I.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new U(I.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new O(Eh(n))}function Ki(t,e){return py(t.databaseId,e)}function my(t){const e=wh(t);return e.length===4?ce.emptyPath():Eh(e)}function Oc(t){return new ce(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Eh(t){return pe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function yy(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:H()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,u){return c.gt?(pe(u===void 0||typeof u=="string"),De.fromBase64String(u||"")):(pe(u===void 0||u instanceof Uint8Array),De.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?I.UNKNOWN:gh(c.code);return new U(u,c.message||"")}(o);n=new _h(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=di(t,s.document.name),i=Qn(s.document.updateTime),o=new Ge({mapValue:{fields:s.document.fields}}),a=Ee.newFoundDocument(r,i,o),c=s.targetIds||[],u=s.removedTargetIds||[];n=new Vs(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=di(t,s.document),i=s.readTime?Qn(s.readTime):K.min(),o=Ee.newNoDocument(r,i),a=s.removedTargetIds||[];n=new Vs([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=di(t,s.document),i=s.removedTargetIds||[];n=new Vs([],i,r,null)}else{if(!("filter"in e))return H();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new ry(r),o=s.targetId;n=new vh(o,i)}}return n}function vy(t,e){return{documents:[Ki(t,e.path)]}}function _y(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Ki(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Ki(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length===0)return;const u=c.map(l=>function(h){if(h.op==="=="){if(wc(h.value))return{unaryFilter:{field:Gt(h.field),op:"IS_NAN"}};if(_c(h.value))return{unaryFilter:{field:Gt(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(wc(h.value))return{unaryFilter:{field:Gt(h.field),op:"IS_NOT_NAN"}};if(_c(h.value))return{unaryFilter:{field:Gt(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Gt(h.field),op:Ty(h.op),value:h.value}}}(l));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:Gt(l.field),direction:Iy(l.dir)}}(u))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,u){return c.gt||$r(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function wy(t){let e=my(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){pe(s===1);const l=n.from[0];l.allDescendants?r=l.collectionId:e=e.child(l.collectionId)}let i=[];n.where&&(i=Ih(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(l=>function(h){return new $n(Yt(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;n.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,$r(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(l){const h=!!l.before,d=l.values||[];return new or(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(l){const h=!l.before,d=l.values||[];return new or(d,h)}(n.endAt)),Hm(e,r,o,i,a,"F",c,u)}function Ey(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return H()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Ih(t){return t?t.unaryFilter!==void 0?[Sy(t)]:t.fieldFilter!==void 0?[by(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>Ih(e)).reduce((e,n)=>e.concat(n)):H():[]}function Iy(t){return ly[t]}function Ty(t){return hy[t]}function Gt(t){return{fieldPath:t.canonicalString()}}function Yt(t){return Le.fromServerFormat(t.fieldPath)}function by(t){return Pe.create(Yt(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return H()}}(t.fieldFilter.op),t.fieldFilter.value)}function Sy(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Yt(t.unaryFilter.field);return Pe.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Yt(t.unaryFilter.field);return Pe.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Yt(t.unaryFilter.field);return Pe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Yt(t.unaryFilter.field);return Pe.create(r,"!=",{nullValue:"NULL_VALUE"});default:return H()}}function Th(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class ky{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&ny(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Ln(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Ln(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=mh();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=dh(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(K.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),X())}isEqual(e){return this.batchId===e.batchId&&un(this.mutations,e.mutations,(n,s)=>kc(n,s))&&un(this.baseMutations,e.baseMutations,(n,s)=>kc(n,s))}}/**
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
 */class Cy{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Mt{constructor(e,n,s,r,i=K.min(),o=K.min(),a=De.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Mt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Mt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Mt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class Ay{constructor(e){this.re=e}}function Ry(t){const e=wy({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ji(e,e.limit,"L"):e}/**
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
 */class Dy{constructor(){this.Ye=new Ny}addToCollectionParentIndex(e,n){return this.Ye.add(n),_.resolve()}getCollectionParents(e,n){return _.resolve(this.Ye.getEntries(n))}addFieldIndex(e,n){return _.resolve()}deleteFieldIndex(e,n){return _.resolve()}getDocumentsMatchingTarget(e,n){return _.resolve(null)}getIndexType(e,n){return _.resolve(0)}getFieldIndexes(e,n){return _.resolve([])}getNextCollectionGroupToUpdate(e){return _.resolve(null)}getMinOffset(e,n){return _.resolve(_t.min())}getMinOffsetFromCollectionGroup(e,n){return _.resolve(_t.min())}updateCollectionGroup(e,n,s){return _.resolve()}updateIndexEntries(e,n){return _.resolve()}}class Ny{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new me(ce.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new me(ce.comparator)).toArray()}}/**
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
 */class dn{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new dn(0)}static vn(){return new dn(-1)}}/**
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
 */class Oy{constructor(){this.changes=new yn(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ee.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?_.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class $y{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class Ly{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.getBaseDocument(e,n,s))).next(r=>(s!==null&&Ln(s.mutation,r,Lt.empty(),Me.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,X()).next(()=>s))}getLocalViewOfDocuments(e,n,s=X()){const r=Dt();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=An();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Dt();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,X()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=Et();const o=Pn(),a=Pn();return n.forEach((c,u)=>{const l=s.get(u.key);r.has(u.key)&&(l===void 0||l.mutation instanceof xr)?i=i.insert(u.key,u):l!==void 0&&(o.set(u.key,l.mutation.getFieldMask()),Ln(l.mutation,u,l.mutation.getFieldMask(),Me.now()))}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,l)=>o.set(u,l)),n.forEach((u,l)=>{var h;return a.set(u,new $y(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=Pn();let r=new _e((o,a)=>o-a),i=X();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let l=s.get(c)||Lt.empty();l=a.applyToLocalView(u,l),s.set(c,l);const h=(r.get(a.batchId)||X()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=mh();l.forEach(d=>{if(!i.has(d)){const g=dh(n.get(d),s.get(d));g!==null&&h.set(d,g),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return _.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return O.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Gm(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):_.resolve(Dt());let a=-1,c=i;return o.next(u=>_.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(l)?_.resolve():this.getBaseDocument(e,l,h).next(d=>{c=c.insert(l,d)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,X())).next(l=>({batchId:a,changes:oy(l)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new O(n)).next(s=>{let r=An();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=An();return this.indexManager.getCollectionParents(e,r).next(o=>_.forEach(o,a=>{const c=function(u,l){return new Lr(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(u=>{u.forEach((l,h)=>{i=i.insert(l,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.remoteDocumentCache.getAllFromCollection(e,n.path,s).next(i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId))).next(i=>{i.forEach((a,c)=>{const u=c.getKey();r.get(u)===null&&(r=r.insert(u,Ee.newInvalidDocument(u)))});let o=An();return r.forEach((a,c)=>{const u=i.get(a);u!==void 0&&Ln(u.mutation,c,Lt.empty(),Me.now()),Ho(n,c)&&(o=o.insert(a,c))}),o})}getBaseDocument(e,n,s){return s===null||s.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):_.resolve(Ee.newInvalidDocument(n))}}/**
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
 */class Py{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return _.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:Qn(s.createTime)}),_.resolve()}getNamedQuery(e,n){return _.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(s){return{name:s.name,query:Ry(s.bundledQuery),readTime:Qn(s.readTime)}}(n)),_.resolve()}}/**
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
 */class My{constructor(){this.overlays=new _e(O.comparator),this.es=new Map}getOverlay(e,n){return _.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Dt();return _.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.ue(e,n,i)}),_.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.es.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.es.delete(s)),_.resolve()}getOverlaysForCollection(e,n,s){const r=Dt(),i=n.length+1,o=new O(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return _.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new _e((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let l=i.get(u.largestBatchId);l===null&&(l=Dt(),i=i.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=Dt(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=r)););return _.resolve(a)}ue(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.es.get(r.largestBatchId).delete(s.key);this.es.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new Cy(n,s));let i=this.es.get(n);i===void 0&&(i=X(),this.es.set(n,i)),this.es.set(n,i.add(s.key))}}/**
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
 */class Go{constructor(){this.ns=new me(ye.ss),this.rs=new me(ye.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const s=new ye(e,n);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.cs(new ye(e,n))}hs(e,n){e.forEach(s=>this.removeReference(s,n))}ls(e){const n=new O(new ce([])),s=new ye(n,e),r=new ye(n,e+1),i=[];return this.rs.forEachInRange([s,r],o=>{this.cs(o),i.push(o.key)}),i}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new O(new ce([])),s=new ye(n,e),r=new ye(n,e+1);let i=X();return this.rs.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new ye(e,0),s=this.ns.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class ye{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return O.comparator(e.key,n.key)||te(e._s,n._s)}static os(e,n){return te(e._s,n._s)||O.comparator(e.key,n.key)}}/**
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
 */class xy{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new me(ye.ss)}checkEmpty(e){return _.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new ky(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.gs=this.gs.add(new ye(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return _.resolve(o)}lookupMutationBatch(e,n){return _.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.ps(s),i=r<0?0:r;return _.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return _.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return _.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new ye(n,0),r=new ye(n,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([s,r],o=>{const a=this.ys(o._s);i.push(a)}),_.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new me(te);return n.forEach(r=>{const i=new ye(r,0),o=new ye(r,Number.POSITIVE_INFINITY);this.gs.forEachInRange([i,o],a=>{s=s.add(a._s)})}),_.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;O.isDocumentKey(i)||(i=i.child(""));const o=new ye(new O(i),0);let a=new me(te);return this.gs.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===r&&(a=a.add(c._s)),!0)},o),_.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(s=>{const r=this.ys(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){pe(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return _.forEach(n.mutations,r=>{const i=new ye(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.gs=s})}An(e){}containsKey(e,n){const s=new ye(n,0),r=this.gs.firstAfterOrEqual(s);return _.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,_.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class Uy{constructor(e){this.Es=e,this.docs=new _e(O.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Es(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return _.resolve(s?s.document.mutableCopy():Ee.newInvalidDocument(n))}getEntries(e,n){let s=Et();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Ee.newInvalidDocument(r))}),_.resolve(s)}getAllFromCollection(e,n,s){let r=Et();const i=new O(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||Cm(km(c),s)<=0||(r=r.insert(c.key,c.mutableCopy()))}return _.resolve(r)}getAllFromCollectionGroup(e,n,s,r){H()}As(e,n){return _.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new Fy(this)}getSize(e){return _.resolve(this.size)}}class Fy extends Oy{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Yn.addEntry(e,r)):this.Yn.removeEntry(s)}),_.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
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
 */class Vy{constructor(e){this.persistence=e,this.Rs=new yn(n=>jo(n),qo),this.lastRemoteSnapshotVersion=K.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Go,this.targetCount=0,this.vs=dn.Pn()}forEachTarget(e,n){return this.Rs.forEach((s,r)=>n(r)),_.resolve()}getLastRemoteSnapshotVersion(e){return _.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return _.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),_.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),_.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new dn(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,_.resolve()}updateTargetData(e,n){return this.Dn(n),_.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,_.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Rs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),_.waitFor(i).next(()=>r)}getTargetCount(e){return _.resolve(this.targetCount)}getTargetData(e,n){const s=this.Rs.get(n)||null;return _.resolve(s)}addMatchingKeys(e,n,s){return this.Ps.us(n,s),_.resolve()}removeMatchingKeys(e,n,s){this.Ps.hs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),_.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),_.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Ps.ds(n);return _.resolve(s)}containsKey(e,n){return _.resolve(this.Ps.containsKey(n))}}/**
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
 */class By{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new Vo(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new Vy(this),this.indexManager=new Dy,this.remoteDocumentCache=function(s){return new Uy(s)}(s=>this.referenceDelegate.xs(s)),this.It=new Ay(n),this.Ns=new Py(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new My,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Vs[e.toKey()];return s||(s=new xy(n,this.referenceDelegate),this.Vs[e.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,s){A("MemoryPersistence","Starting transaction:",e);const r=new jy(this.Ss.next());return this.referenceDelegate.ks(),s(r).next(i=>this.referenceDelegate.Os(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ms(e,n){return _.or(Object.values(this.Vs).map(s=>()=>s.containsKey(e,n)))}}class jy extends Rm{constructor(e){super(),this.currentSequenceNumber=e}}class Wo{constructor(e){this.persistence=e,this.Fs=new Go,this.$s=null}static Bs(e){return new Wo(e)}get Ls(){if(this.$s)return this.$s;throw H()}addReference(e,n,s){return this.Fs.addReference(s,n),this.Ls.delete(s.toString()),_.resolve()}removeReference(e,n,s){return this.Fs.removeReference(s,n),this.Ls.add(s.toString()),_.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),_.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(r=>this.Ls.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Ls.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return _.forEach(this.Ls,s=>{const r=O.fromPath(s);return this.Us(e,r).next(i=>{i||n.removeEntry(r,K.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.Us(e,n).next(s=>{s?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}Us(e,n){return _.or([()=>_.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
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
 */class Qo{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Si=s,this.Di=r}static Ci(e,n){let s=X(),r=X();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Qo(e,n.fromCache,s,r)}}/**
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
 */class qy{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,s,r){return this.ki(e,n).next(i=>i||this.Oi(e,n,r,s)).next(i=>i||this.Mi(e,n))}ki(e,n){if(bc(n))return _.resolve(null);let s=ot(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=ji(n,null,"F"),s=ot(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=X(...i);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const u=this.Fi(n,a);return this.$i(n,u,o,c.readTime)?this.ki(e,ji(n,null,"F")):this.Bi(e,u,n,c)}))})))}Oi(e,n,s,r){return bc(n)||r.isEqual(K.min())?this.Mi(e,n):this.Ni.getDocuments(e,s).next(i=>{const o=this.Fi(n,i);return this.$i(n,o,s,r)?this.Mi(e,n):(pc()<=Z.DEBUG&&A("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),qi(n)),this.Bi(e,o,n,Sm(r,-1)))})}Fi(e,n){let s=new me(ch(e));return n.forEach((r,i)=>{Ho(e,i)&&(s=s.add(i))}),s}$i(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Mi(e,n){return pc()<=Z.DEBUG&&A("QueryEngine","Using full collection scan to execute query:",qi(n)),this.Ni.getDocumentsMatchingQuery(e,n,_t.min())}Bi(e,n,s,r){return this.Ni.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class Hy{constructor(e,n,s,r){this.persistence=e,this.Li=n,this.It=r,this.Ui=new _e(te),this.qi=new yn(i=>jo(i),qo),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(s)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Ly(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ui))}}function zy(t,e,n,s){return new Hy(t,e,n,s)}async function bh(t,e){const n=J(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.Qi(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=X();for(const u of r){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of i){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return n.localDocuments.getDocuments(s,c).next(u=>({ji:u,removedBatchIds:o,addedBatchIds:a}))})})}function Sh(t){const e=J(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function Ky(t,e){const n=J(t),s=e.snapshotVersion;let r=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});r=n.Ui;const a=[];e.targetChanges.forEach((l,h)=>{const d=r.get(h);if(!d)return;a.push(n.Cs.removeMatchingKeys(i,l.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(i,l.addedDocuments,h)));let g=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?g=g.withResumeToken(De.EMPTY_BYTE_STRING,K.min()).withLastLimboFreeSnapshotVersion(K.min()):l.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(l.resumeToken,s)),r=r.insert(h,g),function(p,v,m){return p.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-p.snapshotVersion.toMicroseconds()>=3e8?!0:m.addedDocuments.size+m.modifiedDocuments.size+m.removedDocuments.size>0}(d,g,l)&&a.push(n.Cs.updateTargetData(i,g))});let c=Et(),u=X();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(Gy(i,o,e.documentUpdates).next(l=>{c=l.Wi,u=l.zi})),!s.isEqual(K.min())){const l=n.Cs.getLastRemoteSnapshotVersion(i).next(h=>n.Cs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(l)}return _.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.Ui=r,i))}function Gy(t,e,n){let s=X(),r=X();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=Et();return n.forEach((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(K.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):A("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Wi:o,zi:r}})}function Wy(t,e){const n=J(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Cs.getTargetData(s,e).next(i=>i?(r=i,_.resolve(r)):n.Cs.allocateTargetId(s).next(o=>(r=new Mt(e,o,0,s.currentSequenceNumber),n.Cs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Ui.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(s.targetId,s),n.qi.set(e,s.targetId)),s})}async function Gi(t,e,n){const s=J(t),r=s.Ui.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!ps(o))throw o;A("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ui=s.Ui.remove(e),s.qi.delete(r.target)}function $c(t,e,n){const s=J(t);let r=K.min(),i=X();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=J(a),h=l.qi.get(u);return h!==void 0?_.resolve(l.Ui.get(h)):l.Cs.getTargetData(c,u)}(s,o,ot(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Li.getDocumentsMatchingQuery(o,e,n?r:K.min(),n?i:X())).next(a=>(Qy(s,Wm(e),a),{documents:a,Hi:i})))}function Qy(t,e,n){let s=t.Ki.get(e)||K.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Ki.set(e,s)}class Lc{constructor(){this.activeTargetIds=yh()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Yy{constructor(){this.Lr=new Lc,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,n,s){this.Ur[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new Lc,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Xy{qr(e){}shutdown(){}}/**
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
 */class Pc{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){A("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){A("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const Jy={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class Zy{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
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
 */class ev extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,s,r,i){const o=this.ho(e,n);A("RestConnection","Sending: ",o,s);const a={};return this.lo(a,r,i),this.fo(e,o,a,s).then(c=>(A("RestConnection","Received: ",c),c),c=>{throw xi("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}_o(e,n,s,r,i,o){return this.ao(e,n,s,r,i)}lo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+mn,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}ho(e,n){const s=Jy[e];return`${this.oo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,s,r){return new Promise((i,o)=>{const a=new gm;a.setWithCredentials(!0),a.listenOnce(hm.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case li.NO_ERROR:const u=a.getResponseJson();A("Connection","XHR received:",JSON.stringify(u)),i(u);break;case li.TIMEOUT:A("Connection",'RPC "'+e+'" timed out'),o(new U(I.DEADLINE_EXCEEDED,"Request time out"));break;case li.HTTP_ERROR:const l=a.getStatus();if(A("Connection",'RPC "'+e+'" failed with status:',l,"response text:",a.getResponseText()),l>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(g){const p=g.toLowerCase().replace(/_/g,"-");return Object.values(I).indexOf(p)>=0?p:I.UNKNOWN}(h.status);o(new U(d,h.message))}else o(new U(I.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new U(I.UNAVAILABLE,"Connection failed."));break;default:H()}}finally{A("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);a.send(n,"POST",c,s,15)})}wo(e,n,s){const r=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=um(),o=lm(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new fm({})),this.lo(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const c=r.join("");A("Connection","Creating WebChannel: "+c,a);const u=i.createWebChannel(c,a);let l=!1,h=!1;const d=new Zy({Hr:p=>{h?A("Connection","Not sending because WebChannel is closed:",p):(l||(A("Connection","Opening WebChannel transport."),u.open(),l=!0),A("Connection","WebChannel sending:",p),u.send(p))},Jr:()=>u.close()}),g=(p,v,m)=>{p.listen(v,y=>{try{m(y)}catch(S){setTimeout(()=>{throw S},0)}})};return g(u,Os.EventType.OPEN,()=>{h||A("Connection","WebChannel transport opened.")}),g(u,Os.EventType.CLOSE,()=>{h||(h=!0,A("Connection","WebChannel transport closed"),d.io())}),g(u,Os.EventType.ERROR,p=>{h||(h=!0,xi("Connection","WebChannel transport errored:",p),d.io(new U(I.UNAVAILABLE,"The operation could not be completed")))}),g(u,Os.EventType.MESSAGE,p=>{var v;if(!h){const m=p.data[0];pe(!!m);const y=m,S=y.error||((v=y[0])===null||v===void 0?void 0:v.error);if(S){A("Connection","WebChannel received error:",S);const W=S.status;let L=function(Y){const B=fe[Y];if(B!==void 0)return gh(B)}(W),Q=S.message;L===void 0&&(L=I.INTERNAL,Q="Unknown error status: "+W+" with message "+S.message),h=!0,d.io(new U(L,Q)),u.close()}else A("Connection","WebChannel received:",m),d.ro(m)}}),g(o,dm.STAT_EVENT,p=>{p.stat===fc.PROXY?A("Connection","Detected buffering proxy"):p.stat===fc.NOPROXY&&A("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}function fi(){return typeof document<"u"?document:null}/**
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
 */function kh(t){return new dy(t,!0)}class Ch{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Hs=e,this.timerId=n,this.mo=s,this.yo=r,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),r=Math.max(0,n-s);r>0&&A("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,r,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
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
 */class tv{constructor(e,n,s,r,i,o,a,c){this.Hs=e,this.vo=s,this.Vo=r,this.So=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Do=0,this.Co=null,this.xo=null,this.stream=null,this.No=new Ch(e,n)}ko(){return this.state===1||this.state===5||this.Oo()}Oo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Mo()}async stop(){this.ko()&&await this.close(0)}Fo(){this.state=0,this.No.reset()}$o(){this.Oo()&&this.Co===null&&(this.Co=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.Bo()))}Lo(e){this.Uo(),this.stream.send(e)}async Bo(){if(this.Oo())return this.close(0)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}qo(){this.xo&&(this.xo.cancel(),this.xo=null)}async close(e,n){this.Uo(),this.qo(),this.No.cancel(),this.Do++,e!==4?this.No.reset():n&&n.code===I.RESOURCE_EXHAUSTED?(it(n.toString()),it("Using maximum backoff delay to prevent overloading the backend."),this.No.Ao()):n&&n.code===I.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Ko(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}Ko(){}auth(){this.state=1;const e=this.Go(this.Do),n=this.Do;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Do===n&&this.Qo(s,r)},s=>{e(()=>{const r=new U(I.UNKNOWN,"Fetching auth token failed: "+s.message);return this.jo(r)})})}Qo(e,n){const s=this.Go(this.Do);this.stream=this.Wo(e,n),this.stream.Yr(()=>{s(()=>(this.state=2,this.xo=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.Oo()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(r=>{s(()=>this.jo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Mo(){this.state=5,this.No.Ro(async()=>{this.state=0,this.start()})}jo(e){return A("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Go(e){return n=>{this.Hs.enqueueAndForget(()=>this.Do===e?n():(A("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class nv extends tv{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.It=i}Wo(e,n){return this.So.wo("Listen",e,n)}onMessage(e){this.No.reset();const n=yy(this.It,e),s=function(r){if(!("targetChange"in r))return K.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?K.min():i.readTime?Qn(i.readTime):K.min()}(e);return this.listener.zo(n,s)}Ho(e){const n={};n.database=Oc(this.It),n.addTarget=function(r,i){let o;const a=i.target;return o=Bi(a)?{documents:vy(r,a)}:{query:_y(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=gy(r,i.resumeToken):i.snapshotVersion.compareTo(K.min())>0&&(o.readTime=fy(r,i.snapshotVersion.toTimestamp())),o}(this.It,e);const s=Ey(this.It,e);s&&(n.labels=s),this.Lo(n)}Jo(e){const n={};n.database=Oc(this.It),n.removeTarget=e,this.Lo(n)}}/**
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
 */class sv extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.So=s,this.It=r,this.su=!1}iu(){if(this.su)throw new U(I.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,s){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.So.ao(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new U(I.UNKNOWN,r.toString())})}_o(e,n,s,r){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.So._o(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new U(I.UNKNOWN,i.toString())})}terminate(){this.su=!0}}class rv{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ru=0,this.ou=null,this.uu=!0}cu(){this.ru===0&&(this.au("Unknown"),this.ou=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ou=null,this.hu("Backend didn't respond within 10 seconds."),this.au("Offline"),Promise.resolve())))}lu(e){this.state==="Online"?this.au("Unknown"):(this.ru++,this.ru>=1&&(this.fu(),this.hu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.au("Offline")))}set(e){this.fu(),this.ru=0,e==="Online"&&(this.uu=!1),this.au(e)}au(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}hu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.uu?(it(n),this.uu=!1):A("OnlineStateTracker",n)}fu(){this.ou!==null&&(this.ou.cancel(),this.ou=null)}}/**
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
 */class iv{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.du=[],this._u=new Map,this.wu=new Set,this.mu=[],this.gu=i,this.gu.qr(o=>{s.enqueueAndForget(async()=>{vs(this)&&(A("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=J(a);c.wu.add(4),await ys(c),c.yu.set("Unknown"),c.wu.delete(4),await Fr(c)}(this))})}),this.yu=new rv(s,r)}}async function Fr(t){if(vs(t))for(const e of t.mu)await e(!0)}async function ys(t){for(const e of t.mu)await e(!1)}function Ah(t,e){const n=J(t);n._u.has(e.targetId)||(n._u.set(e.targetId,e),Jo(n)?Xo(n):vn(n).Oo()&&Yo(n,e))}function Rh(t,e){const n=J(t),s=vn(n);n._u.delete(e),s.Oo()&&Dh(n,e),n._u.size===0&&(s.Oo()?s.$o():vs(n)&&n.yu.set("Unknown"))}function Yo(t,e){t.pu.Mt(e.targetId),vn(t).Ho(e)}function Dh(t,e){t.pu.Mt(e),vn(t).Jo(e)}function Xo(t){t.pu=new uy({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t._u.get(e)||null}),vn(t).start(),t.yu.cu()}function Jo(t){return vs(t)&&!vn(t).ko()&&t._u.size>0}function vs(t){return J(t).wu.size===0}function Nh(t){t.pu=void 0}async function ov(t){t._u.forEach((e,n)=>{Yo(t,e)})}async function av(t,e){Nh(t),Jo(t)?(t.yu.lu(e),Xo(t)):t.yu.set("Unknown")}async function cv(t,e,n){if(t.yu.set("Online"),e instanceof _h&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s._u.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s._u.delete(o),s.pu.removeTarget(o))}(t,e)}catch(s){A("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Mc(t,s)}else if(e instanceof Vs?t.pu.Gt(e):e instanceof vh?t.pu.Yt(e):t.pu.Wt(e),!n.isEqual(K.min()))try{const s=await Sh(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.pu.te(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=r._u.get(c);u&&r._u.set(c,u.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r._u.get(a);if(!c)return;r._u.set(a,c.withResumeToken(De.EMPTY_BYTE_STRING,c.snapshotVersion)),Dh(r,a);const u=new Mt(c.target,a,1,c.sequenceNumber);Yo(r,u)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){A("RemoteStore","Failed to raise snapshot:",s),await Mc(t,s)}}async function Mc(t,e,n){if(!ps(e))throw e;t.wu.add(1),await ys(t),t.yu.set("Offline"),n||(n=()=>Sh(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{A("RemoteStore","Retrying IndexedDB access"),await n(),t.wu.delete(1),await Fr(t)})}async function xc(t,e){const n=J(t);n.asyncQueue.verifyOperationInProgress(),A("RemoteStore","RemoteStore received new credentials");const s=vs(n);n.wu.add(3),await ys(n),s&&n.yu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.wu.delete(3),await Fr(n)}async function uv(t,e){const n=J(t);e?(n.wu.delete(2),await Fr(n)):e||(n.wu.add(2),await ys(n),n.yu.set("Unknown"))}function vn(t){return t.Iu||(t.Iu=function(e,n,s){const r=J(e);return r.iu(),new nv(n,r.So,r.authCredentials,r.appCheckCredentials,r.It,s)}(t.datastore,t.asyncQueue,{Yr:ov.bind(null,t),Zr:av.bind(null,t),zo:cv.bind(null,t)}),t.mu.push(async e=>{e?(t.Iu.Fo(),Jo(t)?Xo(t):t.yu.set("Unknown")):(await t.Iu.stop(),Nh(t))})),t.Iu}/**
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
 */class Zo{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new $t,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new Zo(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new U(I.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Oh(t,e){if(it("AsyncQueue",`${e}: ${t}`),ps(t))return new U(I.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Zt{constructor(e){this.comparator=e?(n,s)=>e(n,s)||O.comparator(n.key,s.key):(n,s)=>O.comparator(n.key,s.key),this.keyedMap=An(),this.sortedSet=new _e(this.comparator)}static emptySet(e){return new Zt(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Zt)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Zt;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class Uc{constructor(){this.Eu=new _e(O.comparator)}track(e){const n=e.doc.key,s=this.Eu.get(n);s?e.type!==0&&s.type===3?this.Eu=this.Eu.insert(n,e):e.type===3&&s.type!==1?this.Eu=this.Eu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Eu=this.Eu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Eu=this.Eu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Eu=this.Eu.remove(n):e.type===1&&s.type===2?this.Eu=this.Eu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Eu=this.Eu.insert(n,{type:2,doc:e.doc}):H():this.Eu=this.Eu.insert(n,e)}Au(){const e=[];return this.Eu.inorderTraversal((n,s)=>{e.push(s)}),e}}class fn{constructor(e,n,s,r,i,o,a,c,u){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new fn(e,n,Zt.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Pr(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class lv{constructor(){this.Ru=void 0,this.listeners=[]}}class hv{constructor(){this.queries=new yn(e=>ah(e),Pr),this.onlineState="Unknown",this.bu=new Set}}async function dv(t,e){const n=J(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new lv),r)try{i.Ru=await n.onListen(s)}catch(o){const a=Oh(o,`Initialization of query '${qi(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.Pu(n.onlineState),i.Ru&&e.vu(i.Ru)&&ea(n)}async function fv(t,e){const n=J(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function gv(t,e){const n=J(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.vu(r)&&(s=!0);o.Ru=r}}s&&ea(n)}function pv(t,e,n){const s=J(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function ea(t){t.bu.forEach(e=>{e.next()})}class mv{constructor(e,n,s){this.query=e,this.Vu=n,this.Su=!1,this.Du=null,this.onlineState="Unknown",this.options=s||{}}vu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new fn(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Su?this.Cu(e)&&(this.Vu.next(e),n=!0):this.xu(e,this.onlineState)&&(this.Nu(e),n=!0),this.Du=e,n}onError(e){this.Vu.error(e)}Pu(e){this.onlineState=e;let n=!1;return this.Du&&!this.Su&&this.xu(this.Du,e)&&(this.Nu(this.Du),n=!0),n}xu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.ku||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Cu(e){if(e.docChanges.length>0)return!0;const n=this.Du&&this.Du.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Nu(e){e=fn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Su=!0,this.Vu.next(e)}}/**
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
 */class $h{constructor(e){this.key=e}}class Lh{constructor(e){this.key=e}}class yv{constructor(e,n){this.query=e,this.Uu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=X(),this.mutatedKeys=X(),this.Gu=ch(e),this.Qu=new Zt(this.Gu)}get ju(){return this.Uu}Wu(e,n){const s=n?n.zu:new Uc,r=n?n.Qu:this.Qu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((l,h)=>{const d=r.get(l),g=Ho(this.query,h)?h:null,p=!!d&&this.mutatedKeys.has(d.key),v=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let m=!1;d&&g?d.data.isEqual(g.data)?p!==v&&(s.track({type:3,doc:g}),m=!0):this.Hu(d,g)||(s.track({type:2,doc:g}),m=!0,(c&&this.Gu(g,c)>0||u&&this.Gu(g,u)<0)&&(a=!0)):!d&&g?(s.track({type:0,doc:g}),m=!0):d&&!g&&(s.track({type:1,doc:d}),m=!0,(c||u)&&(a=!0)),m&&(g?(o=o.add(g),i=v?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),s.track({type:1,doc:l})}return{Qu:o,zu:s,$i:a,mutatedKeys:i}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const i=e.zu.Au();i.sort((u,l)=>function(h,d){const g=p=>{switch(p){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return H()}};return g(h)-g(d)}(u.type,l.type)||this.Gu(u.doc,l.doc)),this.Ju(s);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,c=a!==this.qu;return this.qu=a,i.length!==0||c?{snapshot:new fn(this.query,e.Qu,r,i,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}Pu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new Uc,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.Uu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.Uu=this.Uu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Uu=this.Uu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=X(),this.Qu.forEach(s=>{this.Zu(s.key)&&(this.Ku=this.Ku.add(s.key))});const n=[];return e.forEach(s=>{this.Ku.has(s)||n.push(new Lh(s))}),this.Ku.forEach(s=>{e.has(s)||n.push(new $h(s))}),n}tc(e){this.Uu=e.Hi,this.Ku=X();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return fn.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class vv{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class _v{constructor(e){this.key=e,this.nc=!1}}class wv{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new yn(a=>ah(a),Pr),this.rc=new Map,this.oc=new Set,this.uc=new _e(O.comparator),this.cc=new Map,this.ac=new Go,this.hc={},this.lc=new Map,this.fc=dn.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function Ev(t,e){const n=Av(t);let s,r;const i=n.ic.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.ec();else{const o=await Wy(n.localStore,ot(e));n.isPrimaryClient&&Ah(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await Iv(n,e,s,a==="current",o.resumeToken)}return r}async function Iv(t,e,n,s,r){t._c=(h,d,g)=>async function(p,v,m,y){let S=v.view.Wu(m);S.$i&&(S=await $c(p.localStore,v.query,!1).then(({documents:Q})=>v.view.Wu(Q,S)));const W=y&&y.targetChanges.get(v.targetId),L=v.view.applyChanges(S,p.isPrimaryClient,W);return Vc(p,v.targetId,L.Xu),L.snapshot}(t,h,d,g);const i=await $c(t.localStore,e,!0),o=new yv(e,i.Hi),a=o.Wu(i.documents),c=ms.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),u=o.applyChanges(a,t.isPrimaryClient,c);Vc(t,n,u.Xu);const l=new vv(e,n,o);return t.ic.set(e,l),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),u.snapshot}async function Tv(t,e){const n=J(t),s=n.ic.get(e),r=n.rc.get(s.targetId);if(r.length>1)return n.rc.set(s.targetId,r.filter(i=>!Pr(i,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Gi(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Rh(n.remoteStore,s.targetId),Wi(n,s.targetId)}).catch(Fo)):(Wi(n,s.targetId),await Gi(n.localStore,s.targetId,!0))}async function Ph(t,e){const n=J(t);try{const s=await Ky(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.cc.get(i);o&&(pe(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.nc=!0:r.modifiedDocuments.size>0?pe(o.nc):r.removedDocuments.size>0&&(pe(o.nc),o.nc=!1))}),await xh(n,s,e)}catch(s){await Fo(s)}}function Fc(t,e,n){const s=J(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.ic.forEach((i,o)=>{const a=o.view.Pu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=J(i);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.Pu(o)&&(c=!0)}),c&&ea(a)}(s.eventManager,e),r.length&&s.sc.zo(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function bv(t,e,n){const s=J(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.cc.get(e),i=r&&r.key;if(i){let o=new _e(O.comparator);o=o.insert(i,Ee.newNoDocument(i,K.min()));const a=X().add(i),c=new Ur(K.min(),new Map,new me(te),o,a);await Ph(s,c),s.uc=s.uc.remove(i),s.cc.delete(e),ta(s)}else await Gi(s.localStore,e,!1).then(()=>Wi(s,e,n)).catch(Fo)}function Wi(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.rc.get(e))t.ic.delete(s),n&&t.sc.wc(s,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(s=>{t.ac.containsKey(s)||Mh(t,s)})}function Mh(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(Rh(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),ta(t))}function Vc(t,e,n){for(const s of n)s instanceof $h?(t.ac.addReference(s.key,e),Sv(t,s)):s instanceof Lh?(A("SyncEngine","Document no longer in limbo: "+s.key),t.ac.removeReference(s.key,e),t.ac.containsKey(s.key)||Mh(t,s.key)):H()}function Sv(t,e){const n=e.key,s=n.path.canonicalString();t.uc.get(n)||t.oc.has(s)||(A("SyncEngine","New document in limbo: "+n),t.oc.add(s),ta(t))}function ta(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new O(ce.fromString(e)),s=t.fc.next();t.cc.set(s,new _v(n)),t.uc=t.uc.insert(n,s),Ah(t.remoteStore,new Mt(ot(oh(n.path)),s,2,Vo.at))}}async function xh(t,e,n){const s=J(t),r=[],i=[],o=[];s.ic.isEmpty()||(s.ic.forEach((a,c)=>{o.push(s._c(c,e,n).then(u=>{if((u||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){r.push(u);const l=Qo.Ci(c.targetId,u);i.push(l)}}))}),await Promise.all(o),s.sc.zo(r),await async function(a,c){const u=J(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>_.forEach(c,h=>_.forEach(h.Si,d=>u.persistence.referenceDelegate.addReference(l,h.targetId,d)).next(()=>_.forEach(h.Di,d=>u.persistence.referenceDelegate.removeReference(l,h.targetId,d)))))}catch(l){if(!ps(l))throw l;A("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const d=u.Ui.get(h),g=d.snapshotVersion,p=d.withLastLimboFreeSnapshotVersion(g);u.Ui=u.Ui.insert(h,p)}}}(s.localStore,i))}async function kv(t,e){const n=J(t);if(!n.currentUser.isEqual(e)){A("SyncEngine","User change. New user:",e.toKey());const s=await bh(n.localStore,e);n.currentUser=e,function(r,i){r.lc.forEach(o=>{o.forEach(a=>{a.reject(new U(I.CANCELLED,i))})}),r.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await xh(n,s.ji)}}function Cv(t,e){const n=J(t),s=n.cc.get(e);if(s&&s.nc)return X().add(s.key);{let r=X();const i=n.rc.get(e);if(!i)return r;for(const o of i){const a=n.ic.get(o);r=r.unionWith(a.view.ju)}return r}}function Av(t){const e=J(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ph.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Cv.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=bv.bind(null,e),e.sc.zo=gv.bind(null,e.eventManager),e.sc.wc=pv.bind(null,e.eventManager),e}class Rv{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=kh(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return zy(this.persistence,new qy,e.initialUser,this.It)}yc(e){return new By(Wo.Bs,this.It)}gc(e){return new Yy}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Dv{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Fc(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=kv.bind(null,this.syncEngine),await uv(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new hv}createDatastore(e){const n=kh(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new ev(r));var r;return function(i,o,a,c){return new sv(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>Fc(this.syncEngine,a,0),o=Pc.C()?new Pc:new Xy,new iv(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,u){const l=new wv(s,r,i,o,a,c);return u&&(l.dc=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=J(e);A("RemoteStore","RemoteStore shutting down."),n.wu.add(5),await ys(n),n.gu.shutdown(),n.yu.set("Unknown")}(this.remoteStore)}}/**
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
 */function Nv(t,e,n){if(!n)throw new U(I.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Ov(t,e,n,s){if(e===!0&&s===!0)throw new U(I.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Bc(t){if(O.isDocumentKey(t))throw new U(I.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function $v(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":H()}function Qi(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new U(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=$v(t);throw new U(I.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */const jc=new Map;class qc{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new U(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new U(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Ov("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class na{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new qc({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new U(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new U(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new qc(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new pm;switch(n.type){case"gapi":const s=n.client;return new _m(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new U(I.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=jc.get(e);n&&(A("ComponentProvider","Removing Datastore"),jc.delete(e),n.terminate())}(this),Promise.resolve()}}function Lv(t,e,n,s={}){var r;const i=(t=Qi(t,na))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&xi("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=ke.MOCK_USER;else{o=Jf(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new U(I.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new ke(c)}t._authCredentials=new mm(new nh(o,a))}}/**
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
 */class _n{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new en(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new _n(this.firestore,e,this._key)}}class Vr{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Vr(this.firestore,e,this._query)}}class en extends Vr{constructor(e,n,s){super(e,n,oh(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new _n(this.firestore,null,new O(e))}withConverter(e){return new en(this.firestore,e,this._path)}}function Br(t,e,...n){if(t=Tt(t),Nv("collection","path",e),t instanceof na){const s=ce.fromString(e,...n);return Bc(s),new en(t,null,s)}{if(!(t instanceof _n||t instanceof en))throw new U(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ce.fromString(e,...n));return Bc(s),new en(t.firestore,null,s)}}/**
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
 */class Pv{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):it("Uncaught Error in snapshot listener:",e)}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class Mv{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=ke.UNAUTHENTICATED,this.clientId=Tm.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{A("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(A("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new U(I.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new $t;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Oh(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function xv(t,e){t.asyncQueue.verifyOperationInProgress(),A("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await bh(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function Uv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Fv(t);A("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>xc(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>xc(e.remoteStore,i)),t.onlineComponents=e}async function Fv(t){return t.offlineComponents||(A("FirestoreClient","Using default OfflineComponentProvider"),await xv(t,new Rv)),t.offlineComponents}async function Vv(t){return t.onlineComponents||(A("FirestoreClient","Using default OnlineComponentProvider"),await Uv(t,new Dv)),t.onlineComponents}async function Bv(t){const e=await Vv(t),n=e.eventManager;return n.onListen=Ev.bind(null,e.syncEngine),n.onUnlisten=Tv.bind(null,e.syncEngine),n}function jv(t,e,n={}){const s=new $t;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const u=new Pv({next:h=>{i.enqueueAndForget(()=>fv(r,l)),h.fromCache&&a.source==="server"?c.reject(new U(I.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new mv(o,u,{includeMetadataChanges:!0,ku:!0});return dv(r,l)}(await Bv(t),t.asyncQueue,e,n,s)),s.promise}class qv{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.No=new Ch(this,"async_queue_retry"),this.Wc=()=>{const n=fi();n&&A("AsyncQueue","Visibility state changed to "+n.visibilityState),this.No.Po()};const e=fi();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.Uc){this.Uc=!0,this.Qc=e||!1;const n=fi();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.Uc)return new Promise(()=>{});const n=new $t;return this.Hc(()=>this.Uc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.No.reset()}catch(e){if(!ps(e))throw e;A("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.No.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(s=>{this.Kc=s,this.Gc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw it("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Gc=!1,s))));return this.Bc=n,n}enqueueAfterDelay(e,n,s){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const r=Zo.createAndSchedule(this,e,n,s,i=>this.Yc(i));return this.qc.push(r),r}zc(){this.Kc&&H()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.qc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.qc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.qc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.qc.indexOf(e);this.qc.splice(n,1)}}class Uh extends na{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new qv,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Fh(this),this._firestoreClient.terminate()}}function Hv(t,e){const n=typeof t=="object"?t:Xu(),s=typeof t=="string"?t:e||"(default)",r=mo(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=Qf("firestore");i&&Lv(r,...i)}return r}function zv(t){return t._firestoreClient||Fh(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Fh(t){var e;const n=t._freezeSettings(),s=function(r,i,o,a){return new Om(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Mv(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
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
 */class ur{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ur(De.fromBase64String(e))}catch(n){throw new U(I.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ur(De.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Vh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new U(I.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Le(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Kv{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new U(I.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new U(I.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return te(this._lat,e._lat)||te(this._long,e._long)}}const Gv=new RegExp("[~\\*/\\[\\]]");function Wv(t,e,n){if(e.search(Gv)>=0)throw Hc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Vh(...e.split("."))._internalPath}catch{throw Hc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Hc(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new U(I.INVALID_ARGUMENT,a+t+c)}/**
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
 */class Bh{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new _n(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Qv(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(jh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Qv extends Bh{data(){return super.data()}}function jh(t,e){return typeof e=="string"?Wv(t,e):e instanceof Vh?e._internalPath:e._delegate._internalPath}/**
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
 */function Yv(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new U(I.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}/**
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
 */class Xv{convertValue(e,n="none"){switch(jt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ge(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ln(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw H()}}convertObject(e,n){const s={};return Or(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new Kv(ge(e.latitude),ge(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=rh(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(zn(e));default:return null}}convertTimestamp(e){const n=wt(e);return new Me(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=ce.fromString(e);pe(Th(s));const r=new Kn(s.get(1),s.get(3)),i=new O(s.popFirst(5));return r.isEqual(n)||it(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */class Ps{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Jv extends Bh{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Bs(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(jh("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Bs extends Jv{data(e={}){return super.data(e)}}class Zv{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new Ps(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Bs(this._firestore,this._userDataWriter,s.key,s,new Ps(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new U(I.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>({type:"added",doc:new Bs(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Ps(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter),oldIndex:-1,newIndex:i++}))}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new Bs(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Ps(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),u=i.indexOf(o.doc.key)),{type:e_(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function e_(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return H()}}class t_ extends Xv{constructor(e){super(),this.firestore=e}convertBytes(e){return new ur(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new _n(this.firestore,null,n)}}function jr(t){t=Qi(t,Vr);const e=Qi(t.firestore,Uh),n=zv(e),s=new t_(e);return Yv(t._query),jv(n,t._query).then(r=>new Zv(e,s,t,r))}(function(t,e=!0){(function(n){mn=n})(is),an(new Ft("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new Uh(new ym(n.getProvider("auth-internal")),new Em(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new U(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Kn(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),mt(gc,"3.7.1",t),mt(gc,"3.7.1","esm2017")})();function sa(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function qh(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const n_=qh,Hh=new ss("auth","Firebase",qh());/**
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
 */const zc=new go("@firebase/auth");function js(t,...e){zc.logLevel<=Z.ERROR&&zc.error(`Auth (${is}): ${t}`,...e)}/**
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
 */function ze(t,...e){throw ra(t,...e)}function Qe(t,...e){return ra(t,...e)}function s_(t,e,n){const s=Object.assign(Object.assign({},n_()),{[e]:n});return new ss("auth","Firebase",s).create(e,{appName:t.name})}function ra(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Hh.create(t,...e)}function x(t,e,...n){if(!t)throw ra(e,...n)}function nt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw js(e),new Error(e)}function at(t,e){t||nt(e)}/**
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
 */const Kc=new Map;function st(t){at(t instanceof Function,"Expected a class definition");let e=Kc.get(t);return e?(at(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Kc.set(t,e),e)}/**
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
 */function r_(t,e){const n=mo(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(Ys(i,e!=null?e:{}))return r;ze(r,"already-initialized")}return n.initialize({options:e})}function i_(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(st);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Yi(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function o_(){return Gc()==="http:"||Gc()==="https:"}function Gc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function a_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(o_()||Vf()||"connection"in navigator)?navigator.onLine:!0}function c_(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class _s{constructor(e,n){this.shortDelay=e,this.longDelay=n,at(n>e,"Short delay should be less than long delay!"),this.isMobile=Ff()||Bf()}get(){return a_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ia(t,e){at(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class zh{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;nt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;nt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;nt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const u_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const l_=new _s(3e4,6e4);function ws(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Es(t,e,n,s,r={}){return Kh(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=rs(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),zh.fetch()(Gh(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Kh(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},u_),e);try{const r=new h_(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ms(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ms(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Ms(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Ms(t,"user-disabled",o);const l=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw s_(t,l,u);ze(t,l)}}catch(r){if(r instanceof ct)throw r;ze(t,"network-request-failed")}}async function Is(t,e,n,s,r={}){const i=await Es(t,e,n,s,r);return"mfaPendingCredential"in i&&ze(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Gh(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?ia(t.config,r):`${t.config.apiScheme}://${r}`}class h_{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Qe(this.auth,"network-request-failed")),l_.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ms(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Qe(t,e,s);return r.customData._tokenResponse=n,r}/**
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
 */async function d_(t,e){return Es(t,"POST","/v1/accounts:delete",e)}async function f_(t,e){return Es(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Mn(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function g_(t,e=!1){const n=Tt(t),s=await n.getIdToken(e),r=oa(s);x(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Mn(gi(r.auth_time)),issuedAtTime:Mn(gi(r.iat)),expirationTime:Mn(gi(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function gi(t){return Number(t)*1e3}function oa(t){var e;const[n,s,r]=t.split(".");if(n===void 0||s===void 0||r===void 0)return js("JWT malformed, contained fewer than 3 sections"),null;try{const i=zu(s);return i?JSON.parse(i):(js("Failed to decode base64 JWT payload"),null)}catch(i){return js("Caught error parsing JWT payload as JSON",(e=i)===null||e===void 0?void 0:e.toString()),null}}function p_(t){const e=oa(t);return x(e,"internal-error"),x(typeof e.exp<"u","internal-error"),x(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Yn(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof ct&&m_(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function m_({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class y_{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Wh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Mn(this.lastLoginAt),this.creationTime=Mn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function lr(t){var e;const n=t.auth,s=await t.getIdToken(),r=await Yn(t,f_(n,{idToken:s}));x(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?w_(i.providerUserInfo):[],a=__(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Wh(i.createdAt,i.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function v_(t){const e=Tt(t);await lr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function __(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function w_(t){return t.map(e=>{var{providerId:n}=e,s=sa(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function E_(t,e){const n=await Kh(t,{},async()=>{const s=rs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=Gh(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",zh.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Xn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){x(e.idToken,"internal-error"),x(typeof e.idToken<"u","internal-error"),x(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):p_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return x(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await E_(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new Xn;return s&&(x(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(x(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(x(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Xn,this.toJSON())}_performRefresh(){return nt("not implemented")}}/**
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
 */function ut(t,e){x(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class xt{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=sa(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new y_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Wh(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Yn(this,this.stsTokenManager.getToken(this.auth,e));return x(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return g_(this,e)}reload(){return v_(this)}_assign(e){this!==e&&(x(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new xt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){x(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await lr(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Yn(this,d_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,u,l;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(r=n.email)!==null&&r!==void 0?r:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,m=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,y=(u=n.createdAt)!==null&&u!==void 0?u:void 0,S=(l=n.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:W,emailVerified:L,isAnonymous:Q,providerData:Y,stsTokenManager:B}=n;x(W&&B,e,"internal-error");const z=Xn.fromJSON(this.name,B);x(typeof W=="string",e,"internal-error"),ut(h,e.name),ut(d,e.name),x(typeof L=="boolean",e,"internal-error"),x(typeof Q=="boolean",e,"internal-error"),ut(g,e.name),ut(p,e.name),ut(v,e.name),ut(m,e.name),ut(y,e.name),ut(S,e.name);const ie=new xt({uid:W,auth:e,email:d,emailVerified:L,displayName:h,isAnonymous:Q,photoURL:p,phoneNumber:g,tenantId:v,stsTokenManager:z,createdAt:y,lastLoginAt:S});return Y&&Array.isArray(Y)&&(ie.providerData=Y.map(se=>Object.assign({},se))),m&&(ie._redirectEventId=m),ie}static async _fromIdTokenResponse(e,n,s=!1){const r=new Xn;r.updateFromServerResponse(n);const i=new xt({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await lr(i),i}}/**
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
 */class Qh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Qh.type="NONE";const Wc=Qh;/**
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
 */function qs(t,e,n){return`firebase:${t}:${e}:${n}`}class tn{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=qs(this.userKey,r.apiKey,i),this.fullPersistenceKey=qs("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?xt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new tn(st(Wc),e,s);const r=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=r[0]||st(Wc);const o=qs(s,e.config.apiKey,e.name);let a=null;for(const u of n)try{const l=await u._get(o);if(l){const h=xt._fromJSON(e,l);u!==i&&(a=h),i=u;break}}catch{}const c=r.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new tn(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new tn(i,e,s))}}/**
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
 */function Qc(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Jh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Yh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ed(e))return"Blackberry";if(td(e))return"Webos";if(aa(e))return"Safari";if((e.includes("chrome/")||Xh(e))&&!e.includes("edge/"))return"Chrome";if(Zh(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Yh(t=Re()){return/firefox\//i.test(t)}function aa(t=Re()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Xh(t=Re()){return/crios\//i.test(t)}function Jh(t=Re()){return/iemobile/i.test(t)}function Zh(t=Re()){return/android/i.test(t)}function ed(t=Re()){return/blackberry/i.test(t)}function td(t=Re()){return/webos/i.test(t)}function qr(t=Re()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function I_(t=Re()){var e;return qr(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function T_(){return jf()&&document.documentMode===10}function nd(t=Re()){return qr(t)||Zh(t)||td(t)||ed(t)||/windows phone/i.test(t)||Jh(t)}function b_(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function sd(t,e=[]){let n;switch(t){case"Browser":n=Qc(Re());break;case"Worker":n=`${Qc(Re())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${is}/${s}`}/**
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
 */class S_{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const s=[];try{for(const r of this.queue)await r(e),r.onAbort&&s.push(r.onAbort)}catch(r){s.reverse();for(const i of s)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=r)===null||n===void 0?void 0:n.message})}}}/**
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
 */class k_{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Yc(this),this.idTokenSubscription=new Yc(this),this.beforeStateQueue=new S_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Hh,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=st(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await tn.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return x(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await lr(e)}catch(s){if(((n=s)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=c_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Tt(e):null;return n&&x(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&x(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(st(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ss("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&st(e)||this._popupRedirectResolver;x(n,this,"argument-error"),this.redirectPersistenceManager=await tn.create(this,[st(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return x(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return x(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=sd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function Ts(t){return Tt(t)}class Yc{constructor(e){this.auth=e,this.observer=null,this.addObserver=sg(n=>this.observer=n)}get next(){return x(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function C_(t,e,n){const s=Ts(t);x(s._canInitEmulator,s,"emulator-config-failed"),x(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=rd(e),{host:o,port:a}=A_(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||R_()}function rd(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function A_(t){const e=rd(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:Xc(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:Xc(o)}}}function Xc(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function R_(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class ca{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return nt("not implemented")}_getIdTokenResponse(e){return nt("not implemented")}_linkToIdToken(e,n){return nt("not implemented")}_getReauthenticationResolver(e){return nt("not implemented")}}async function D_(t,e){return Es(t,"POST","/v1/accounts:update",e)}/**
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
 */async function N_(t,e){return Is(t,"POST","/v1/accounts:signInWithPassword",ws(t,e))}/**
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
 */async function O_(t,e){return Is(t,"POST","/v1/accounts:signInWithEmailLink",ws(t,e))}async function $_(t,e){return Is(t,"POST","/v1/accounts:signInWithEmailLink",ws(t,e))}/**
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
 */class Jn extends ca{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new Jn(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Jn(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return N_(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return O_(e,{email:this._email,oobCode:this._password});default:ze(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return D_(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return $_(e,{idToken:n,email:this._email,oobCode:this._password});default:ze(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function nn(t,e){return Is(t,"POST","/v1/accounts:signInWithIdp",ws(t,e))}/**
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
 */const L_="http://localhost";class qt extends ca{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new qt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ze("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=sa(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new qt(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return nn(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,nn(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,nn(e,n)}buildRequest(){const e={requestUri:L_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=rs(n)}return e}}/**
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
 */function P_(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function M_(t){const e=bn(Sn(t)).link,n=e?bn(Sn(e)).deep_link_id:null,s=bn(Sn(t)).deep_link_id;return(s?bn(Sn(s)).link:null)||s||n||e||t}class ua{constructor(e){var n,s,r,i,o,a;const c=bn(Sn(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,l=(s=c.oobCode)!==null&&s!==void 0?s:null,h=P_((r=c.mode)!==null&&r!==void 0?r:null);x(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=M_(e);try{return new ua(n)}catch{return null}}}/**
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
 */class wn{constructor(){this.providerId=wn.PROVIDER_ID}static credential(e,n){return Jn._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=ua.parseLink(n);return x(s,"argument-error"),Jn._fromEmailAndCode(e,s.code,s.tenantId)}}wn.PROVIDER_ID="password";wn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";wn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class id{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class bs extends id{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class lt extends bs{constructor(){super("facebook.com")}static credential(e){return qt._fromParams({providerId:lt.PROVIDER_ID,signInMethod:lt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return lt.credentialFromTaggedObject(e)}static credentialFromError(e){return lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return lt.credential(e.oauthAccessToken)}catch{return null}}}lt.FACEBOOK_SIGN_IN_METHOD="facebook.com";lt.PROVIDER_ID="facebook.com";/**
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
 */class ht extends bs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return qt._fromParams({providerId:ht.PROVIDER_ID,signInMethod:ht.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ht.credentialFromTaggedObject(e)}static credentialFromError(e){return ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return ht.credential(n,s)}catch{return null}}}ht.GOOGLE_SIGN_IN_METHOD="google.com";ht.PROVIDER_ID="google.com";/**
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
 */class dt extends bs{constructor(){super("github.com")}static credential(e){return qt._fromParams({providerId:dt.PROVIDER_ID,signInMethod:dt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dt.credentialFromTaggedObject(e)}static credentialFromError(e){return dt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dt.credential(e.oauthAccessToken)}catch{return null}}}dt.GITHUB_SIGN_IN_METHOD="github.com";dt.PROVIDER_ID="github.com";/**
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
 */class ft extends bs{constructor(){super("twitter.com")}static credential(e,n){return qt._fromParams({providerId:ft.PROVIDER_ID,signInMethod:ft.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ft.credentialFromTaggedObject(e)}static credentialFromError(e){return ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return ft.credential(n,s)}catch{return null}}}ft.TWITTER_SIGN_IN_METHOD="twitter.com";ft.PROVIDER_ID="twitter.com";/**
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
 */async function x_(t,e){return Is(t,"POST","/v1/accounts:signUp",ws(t,e))}/**
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
 */class Ht{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await xt._fromIdTokenResponse(e,s,r),o=Jc(s);return new Ht({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=Jc(s);return new Ht({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function Jc(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class hr extends ct{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,hr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new hr(e,n,s,r)}}function od(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?hr._fromErrorAndOperation(t,i,e,s):i})}async function U_(t,e,n=!1){const s=await Yn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ht._forOperation(t,"link",s)}/**
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
 */async function F_(t,e,n=!1){var s;const{auth:r}=t,i="reauthenticate";try{const o=await Yn(t,od(r,i,e,t),n);x(o.idToken,r,"internal-error");const a=oa(o.idToken);x(a,r,"internal-error");const{sub:c}=a;return x(t.uid===c,r,"user-mismatch"),Ht._forOperation(t,i,o)}catch(o){throw((s=o)===null||s===void 0?void 0:s.code)==="auth/user-not-found"&&ze(r,"user-mismatch"),o}}/**
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
 */async function ad(t,e,n=!1){const s="signIn",r=await od(t,s,e),i=await Ht._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function V_(t,e){return ad(Ts(t),e)}async function B_(t,e,n){const s=Ts(t),r=await x_(s,{returnSecureToken:!0,email:e,password:n}),i=await Ht._fromIdTokenResponse(s,"signIn",r);return await s._updateCurrentUser(i.user),i}function j_(t,e,n){return V_(Tt(t),wn.credential(e,n))}function q_(t,e,n,s){return Tt(t).onIdTokenChanged(e,n,s)}function H_(t,e,n){return Tt(t).beforeAuthStateChanged(e,n)}const dr="__sak";/**
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
 */class cd{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(dr,"1"),this.storage.removeItem(dr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function z_(){const t=Re();return aa(t)||qr(t)}const K_=1e3,G_=10;class ud extends cd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=z_()&&b_(),this.fallbackToPolling=nd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);T_()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,G_):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},K_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ud.type="LOCAL";const W_=ud;/**
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
 */class ld extends cd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ld.type="SESSION";const hd=ld;/**
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
 */function Q_(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Hr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new Hr(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async u=>u(n.origin,i)),c=await Q_(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Hr.receivers=[];/**
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
 */function la(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Y_{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=la("",20);r.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(l),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(l),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Ye(){return window}function X_(t){Ye().location.href=t}/**
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
 */function dd(){return typeof Ye().WorkerGlobalScope<"u"&&typeof Ye().importScripts=="function"}async function J_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Z_(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function ew(){return dd()?self:null}/**
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
 */const fd="firebaseLocalStorageDb",tw=1,fr="firebaseLocalStorage",gd="fbase_key";class Ss{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function zr(t,e){return t.transaction([fr],e?"readwrite":"readonly").objectStore(fr)}function nw(){const t=indexedDB.deleteDatabase(fd);return new Ss(t).toPromise()}function Xi(){const t=indexedDB.open(fd,tw);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(fr,{keyPath:gd})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(fr)?e(s):(s.close(),await nw(),e(await Xi()))})})}async function Zc(t,e,n){const s=zr(t,!0).put({[gd]:e,value:n});return new Ss(s).toPromise()}async function sw(t,e){const n=zr(t,!1).get(e),s=await new Ss(n).toPromise();return s===void 0?null:s.value}function eu(t,e){const n=zr(t,!0).delete(e);return new Ss(n).toPromise()}const rw=800,iw=3;class pd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Xi(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>iw)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return dd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Hr._getInstance(ew()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await J_(),!this.activeServiceWorker)return;this.sender=new Y_(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);!s||((e=s[0])===null||e===void 0?void 0:e.fulfilled)&&((n=s[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Z_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Xi();return await Zc(e,dr,"1"),await eu(e,dr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Zc(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>sw(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>eu(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=zr(r,!1).getAll();return new Ss(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),rw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}pd.type="LOCAL";const ow=pd;/**
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
 */function aw(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function cw(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=Qe("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",aw().appendChild(s)})}function uw(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new _s(3e4,6e4);/**
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
 */function lw(t,e){return e?st(e):(x(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class ha extends ca{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return nn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return nn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return nn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function hw(t){return ad(t.auth,new ha(t),t.bypassAuthState)}function dw(t){const{auth:e,user:n}=t;return x(n,e,"internal-error"),F_(n,new ha(t),t.bypassAuthState)}async function fw(t){const{auth:e,user:n}=t;return x(n,e,"internal-error"),U_(n,new ha(t),t.bypassAuthState)}/**
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
 */class md{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return hw;case"linkViaPopup":case"linkViaRedirect":return fw;case"reauthViaPopup":case"reauthViaRedirect":return dw;default:ze(this.auth,"internal-error")}}resolve(e){at(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){at(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const gw=new _s(2e3,1e4);class Xt extends md{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,Xt.currentPopupAction&&Xt.currentPopupAction.cancel(),Xt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return x(e,this.auth,"internal-error"),e}async onExecution(){at(this.filter.length===1,"Popup operations only handle one event");const e=la();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Qe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Qe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Xt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Qe(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,gw.get())};e()}}Xt.currentPopupAction=null;/**
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
 */const pw="pendingRedirect",Hs=new Map;class mw extends md{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Hs.get(this.auth._key());if(!e){try{const s=await yw(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Hs.set(this.auth._key(),e)}return this.bypassAuthState||Hs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function yw(t,e){const n=ww(e),s=_w(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function vw(t,e){Hs.set(t._key(),e)}function _w(t){return st(t._redirectPersistence)}function ww(t){return qs(pw,t.config.apiKey,t.name)}async function Ew(t,e,n=!1){const s=Ts(t),r=lw(s,e),o=await new mw(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const Iw=10*60*1e3;class Tw{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!bw(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!yd(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Qe(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Iw&&this.cachedEventUids.clear(),this.cachedEventUids.has(tu(e))}saveEventToCache(e){this.cachedEventUids.add(tu(e)),this.lastProcessedEventTime=Date.now()}}function tu(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function yd({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function bw(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return yd(t);default:return!1}}/**
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
 */async function Sw(t,e={}){return Es(t,"GET","/v1/projects",e)}/**
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
 */const kw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Cw=/^https?/;async function Aw(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Sw(t);for(const n of e)try{if(Rw(n))return}catch{}ze(t,"unauthorized-domain")}function Rw(t){const e=Yi(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!Cw.test(n))return!1;if(kw.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const Dw=new _s(3e4,6e4);function nu(){const t=Ye().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Nw(t){return new Promise((e,n)=>{var s,r,i;function o(){nu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{nu(),n(Qe(t,"network-request-failed"))},timeout:Dw.get()})}if(!((r=(s=Ye().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=Ye().gapi)===null||i===void 0)&&i.load)o();else{const a=uw("iframefcb");return Ye()[a]=()=>{gapi.load?o():n(Qe(t,"network-request-failed"))},cw(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw zs=null,e})}let zs=null;function Ow(t){return zs=zs||Nw(t),zs}/**
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
 */const $w=new _s(5e3,15e3),Lw="__/auth/iframe",Pw="emulator/auth/iframe",Mw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},xw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Uw(t){const e=t.config;x(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ia(e,Pw):`https://${t.config.authDomain}/${Lw}`,s={apiKey:e.apiKey,appName:t.name,v:is},r=xw.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${rs(s).slice(1)}`}async function Fw(t){const e=await Ow(t),n=Ye().gapi;return x(n,t,"internal-error"),e.open({where:document.body,url:Uw(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Mw,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Qe(t,"network-request-failed"),a=Ye().setTimeout(()=>{i(o)},$w.get());function c(){Ye().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const Vw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Bw=500,jw=600,qw="_blank",Hw="http://localhost";class su{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function zw(t,e,n,s=Bw,r=jw){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Vw),{width:s.toString(),height:r.toString(),top:i,left:o}),u=Re().toLowerCase();n&&(a=Xh(u)?qw:n),Yh(u)&&(e=e||Hw,c.scrollbars="yes");const l=Object.entries(c).reduce((d,[g,p])=>`${d}${g}=${p},`,"");if(I_(u)&&a!=="_self")return Kw(e||"",a),new su(null);const h=window.open(e||"",a,l);x(h,t,"popup-blocked");try{h.focus()}catch{}return new su(h)}function Kw(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const Gw="__/auth/handler",Ww="emulator/auth/handler";function ru(t,e,n,s,r,i){x(t.config.authDomain,t,"auth-domain-config-required"),x(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:is,eventId:r};if(e instanceof id){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ng(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,u]of Object.entries(i||{}))o[c]=u}if(e instanceof bs){const c=e.getScopes().filter(u=>u!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${Qw(t)}?${rs(a).slice(1)}`}function Qw({config:t}){return t.emulator?ia(t,Ww):`https://${t.authDomain}/${Gw}`}/**
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
 */const pi="webStorageSupport";class Yw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=hd,this._completeRedirectFn=Ew,this._overrideRedirectResult=vw}async _openPopup(e,n,s,r){var i;at((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=ru(e,n,s,Yi(),r);return zw(e,o,la())}async _openRedirect(e,n,s,r){return await this._originValidation(e),X_(ru(e,n,s,Yi(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(at(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await Fw(e),s=new Tw(e);return n.register("authEvent",r=>(x(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(pi,{type:pi},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[pi];o!==void 0&&n(!!o),ze(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Aw(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return nd()||aa()||qr()}}const Xw=Yw;var iu="@firebase/auth",ou="0.20.10";/**
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
 */class Jw{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{var r;e(((r=s)===null||r===void 0?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){x(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Zw(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function eE(t){an(new Ft("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=s.options;return((a,c)=>{x(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),x(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:sd(t)},l=new k_(a,c,u);return i_(l,n),l})(s,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),an(new Ft("auth-internal",e=>{const n=Ts(e.getProvider("auth").getImmediate());return(s=>new Jw(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),mt(iu,ou,Zw(t)),mt(iu,ou,"esm2017")}/**
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
 */const tE=5*60,nE=Gu("authIdTokenMaxAge")||tE;let au=null;const sE=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>nE)return;const r=n==null?void 0:n.token;au!==r&&(au=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function rE(t=Xu()){const e=mo(t,"auth");if(e.isInitialized())return e.getImmediate();const n=r_(t,{popupRedirectResolver:Xw,persistence:[ow,W_,hd]}),s=Gu("authTokenSyncURL");if(s){const i=sE(s);H_(n,i,()=>i(n.currentUser)),q_(n,o=>i(o))}const r=Ku("auth");return r&&C_(n,`http://${r}`),n}eE("Browser");let vd=[];const iE={apiKey:"AIzaSyDGi3ndUC1b4SFNstliSSVryu7_ymXEkZc",authDomain:"match-home-7d1f9.firebaseapp.com",databaseURL:"https://match-home-7d1f9-default-rtdb.firebaseio.com",projectId:"match-home-7d1f9",storageBucket:"match-home-7d1f9.appspot.com",messagingSenderId:"747751099607",appId:"1:747751099607:web:29d1e5beda87c847dfb492"},_d=Yu(iE),Kr=Hv(_d),wd=rE(_d),oE=Br(Kr,"binnacles"),Ed=Br(Kr,"contacts"),aE=Br(Kr,"properties"),cE=Br(Kr,"todos");console.log(Ed);jr(oE).then(t=>t.docs.map(e=>({...e.data(),id:e.id})));jr(Ed).then(t=>t.docs.map(e=>({...e.data(),id:e.id})));jr(aE).then(t=>t.docs.map(e=>({...e.data(),id:e.id})));jr(cE).then(t=>vd=t.docs.map(e=>({...e.data(),id:e.id})));function uE(t){let e;return{c(){e=ee("Inicia sesi\xF3n")},m(n,s){N(n,e,s)},d(n){n&&D(e)}}}function lE(t){let e,n,s,r,i,o,a,c,u,l,h,d,g,p,v,m,y,S,W,L,Q,Y,B,z,ie,se,ae,j,le;return se=new Se({props:{to:"/login",$$slots:{default:[uE]},$$scope:{ctx:t}}}),{c(){e=w("div"),n=w("br"),s=w("br"),r=w("br"),i=k(),o=w("div"),a=w("h1"),a.textContent="Registra tu cuenta",c=k(),u=w("div"),l=w("input"),h=k(),d=w("div"),g=w("input"),p=k(),v=w("br"),m=k(),y=w("div"),S=w("button"),S.textContent="Registrarse",W=k(),L=w("p"),L.textContent="O tambi\xE9n",Q=k(),Y=w("br"),B=k(),z=w("p"),ie=ee("\xBFYa tienes cuenta? "),F(se.$$.fragment),E(a,"class","text-center text-login svelte-ftg4em"),E(l,"name","email"),E(l,"type","email"),E(l,"class","input-form svelte-ftg4em"),E(l,"placeholder","Correo"),l.required=!0,E(u,"class","center svelte-ftg4em"),E(g,"name","password"),E(g,"type","password"),E(g,"class","input-form svelte-ftg4em"),E(g,"placeholder","Contrase\xF1a"),E(d,"class","center svelte-ftg4em"),E(S,"class","button-signup fondo-color-signup svelte-ftg4em"),E(y,"class","center svelte-ftg4em"),E(L,"class","text-center svelte-ftg4em"),E(z,"class","text-center svelte-ftg4em"),E(o,"class","form-signin svelte-ftg4em")},m(de,he){N(de,e,he),f(e,n),f(e,s),f(e,r),f(e,i),f(e,o),f(o,a),f(o,c),f(o,u),f(u,l),f(o,h),f(o,d),f(d,g),f(o,p),f(o,v),f(o,m),f(o,y),f(y,S),f(o,W),f(o,L),f(o,Q),f(o,Y),f(o,B),f(o,z),f(z,ie),P(se,z,null),ae=!0,j||(le=[Nt(l,"input",t[2]),Nt(g,"input",t[3]),Nt(S,"click",t[1])],j=!0)},p(de,[he]){const oe={};he&64&&(oe.$$scope={dirty:he,ctx:de}),se.$set(oe)},i(de){ae||(C(se.$$.fragment,de),ae=!0)},o(de){R(se.$$.fragment,de),ae=!1},d(de){de&&D(e),M(se),j=!1,It(le)}}}function hE(t){const e=ho();let n={email:"",password:""};const s=a=>{n={...n,[a.target.name]:a.target.value}};return[s,async()=>{try{await B_(wd,n.email,n.password),e("/")}catch(a){console.log(a)}},a=>s(a),a=>s(a)]}class da extends Ue{constructor(e){super(),xe(this,e,hE,lE,$e,{})}}const dE=["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","S\xE1bado"],fE=["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"];function Id(t){typeof t=="string"?t=new Date(t):t=new Date(t);let e=t.getDate()+1;e<10&&(e="0"+e);let n=fE[t.getMonth()],s=t.getFullYear();return`${e}/${n}/${s}`}function gE(t){t=new Date(t);let e=t.getMinutes();e.length<2&&(e="0"+e);let n=t.getHours();return n>12&&(n=n-12),n<10&&(n="0"+n),t.getDate(),`${n}:${e}`}function pE(t){return t=new Date(+t),`${dE[t.getDay()]}-`}function cu(t,e,n){const s=t.slice();return s[1]=e[n],s}function uu(t,e,n){const s=t.slice();return s[1]=e[n],s}function mE(t){let e,n,s=Id(t[1].endTask)+"",r,i,o=t[1].task+"",a,c,u=t[1].notes&&yE(t);return{c(){e=w("ul"),n=w("li"),r=ee(s),i=ee(` - -\r
                    `),a=ee(o),c=ee(` - -\r
                    `),u&&u.c(),mu(n,"complete",t[1].isComplete)},m(l,h){N(l,e,h),f(e,n),f(n,r),f(n,i),f(n,a),f(n,c),u&&u.m(n,null)},p(l,h){l[1].notes&&u.p(l,h)},d(l){l&&D(e),u&&u.d()}}}function yE(t){let e=t[1].notes+"",n;return{c(){n=ee(e)},m(s,r){N(s,n,r)},p:ne,d(s){s&&D(n)}}}function lu(t){let e,n=!t[1].timeTask&&mE(t);return{c(){n&&n.c(),e=pr()},m(s,r){n&&n.m(s,r),N(s,e,r)},p(s,r){s[1].timeTask||n.p(s,r)},d(s){n&&n.d(s),s&&D(e)}}}function vE(t){let e,n,s,r=pE(t[1].endTask)+"",i,o,a=gE(t[1].endTask)+"",c,u,l=Id(t[1].endTask)+"",h,d,g=t[1].task+"",p,v,m=t[1].notes&&_E(t);return{c(){e=w("ul"),n=w("li"),s=w("spam"),i=ee(r),o=k(),c=ee(a),u=ee(` - -\r
                      `),h=ee(l),d=k(),p=ee(g),v=ee(` - -\r
                      `),m&&m.c(),E(s,"type","number"),mu(n,"complete",t[1].isComplete)},m(y,S){N(y,e,S),f(e,n),f(n,s),f(s,i),f(s,o),f(s,c),f(s,u),f(s,h),f(s,d),f(s,p),f(s,v),m&&m.m(s,null)},p(y,S){y[1].notes&&m.p(y,S)},d(y){y&&D(e),m&&m.d()}}}function _E(t){let e=t[1].notes+"",n;return{c(){n=ee(e)},m(s,r){N(s,n,r)},p:ne,d(s){s&&D(n)}}}function hu(t){let e,n=t[1].timeTask&&vE(t);return{c(){n&&n.c(),e=k()},m(s,r){n&&n.m(s,r),N(s,e,r)},p(s,r){s[1].timeTask&&n.p(s,r)},d(s){n&&n.d(s),s&&D(e)}}}function wE(t){let e,n,s,r,i,o,a,c,u,l,h=t[0],d=[];for(let v=0;v<h.length;v+=1)d[v]=lu(uu(t,h,v));let g=t[0],p=[];for(let v=0;v<g.length;v+=1)p[v]=hu(cu(t,g,v));return{c(){e=w("div"),n=w("div"),s=w("div"),r=w("h1"),r.textContent="Agenda",i=k(),o=w("h3"),o.textContent="Tareas",a=k();for(let v=0;v<d.length;v+=1)d[v].c();c=k(),u=w("h3"),u.textContent="Citas",l=k();for(let v=0;v<p.length;v+=1)p[v].c();E(r,"class","title svelte-13rvwi6"),E(o,"class","subtitle svelte-13rvwi6"),E(u,"class","subtitle svelte-13rvwi6"),E(s,"class","schedule"),E(n,"class","container"),E(e,"class","show-home")},m(v,m){N(v,e,m),f(e,n),f(n,s),f(s,r),f(s,i),f(s,o),f(s,a);for(let y=0;y<d.length;y+=1)d[y].m(s,null);f(s,c),f(s,u),f(s,l);for(let y=0;y<p.length;y+=1)p[y].m(s,null)},p(v,[m]){if(m&1){h=v[0];let y;for(y=0;y<h.length;y+=1){const S=uu(v,h,y);d[y]?d[y].p(S,m):(d[y]=lu(S),d[y].c(),d[y].m(s,c))}for(;y<d.length;y+=1)d[y].d(1);d.length=h.length}if(m&1){g=v[0];let y;for(y=0;y<g.length;y+=1){const S=cu(v,g,y);p[y]?p[y].p(S,m):(p[y]=hu(S),p[y].c(),p[y].m(s,null))}for(;y<p.length;y+=1)p[y].d(1);p.length=g.length}},i:ne,o:ne,d(v){v&&D(e),Oa(d,v),Oa(p,v)}}}function EE(t){return[vd]}class IE extends Ue{constructor(e){super(),xe(this,e,EE,wE,$e,{})}}const TE="/to-deploy-mh/assets/add-user.1bd66bde.png",bE="/to-deploy-mh/assets/house.99302696.png",SE="/to-deploy-mh/assets/schedule.20f01954.png",kE="/to-deploy-mh/assets/team.31fda88c.png",du=qe(!1);function CE(t){let e,n,s,r,i,o;return{c(){e=w("div"),n=w("div"),s=w("img"),i=k(),o=w("h1"),o.textContent="Contactos",gr(s.src,r=TE)||E(s,"src",r),E(s,"alt","Buzon"),E(s,"class","profile-img svelte-1gg3zdr"),E(o,"class","name svelte-1gg3zdr"),E(n,"class","optionCard svelte-1gg3zdr"),E(e,"class","container")},m(a,c){N(a,e,c),f(e,n),f(n,s),f(n,i),f(n,o)},p:ne,d(a){a&&D(e)}}}function AE(t){let e,n,s,r,i,o;return{c(){e=w("div"),n=w("div"),s=w("img"),i=k(),o=w("h1"),o.textContent="Propiedades",gr(s.src,r=bE)||E(s,"src",r),E(s,"alt","propiedad"),E(s,"class","profile-img svelte-1gg3zdr"),E(o,"class","name svelte-1gg3zdr"),E(n,"class","optionCard svelte-1gg3zdr"),E(e,"class","container")},m(a,c){N(a,e,c),f(e,n),f(n,s),f(n,i),f(n,o)},p:ne,d(a){a&&D(e)}}}function RE(t){let e,n,s,r,i,o;return{c(){e=w("div"),n=w("div"),s=w("img"),i=k(),o=w("h1"),o.textContent="Agenda",gr(s.src,r=SE)||E(s,"src",r),E(s,"alt","agenda"),E(s,"class","profile-img svelte-1gg3zdr"),E(o,"class","name svelte-1gg3zdr"),E(n,"class","optionCard svelte-1gg3zdr"),E(e,"class","container")},m(a,c){N(a,e,c),f(e,n),f(n,s),f(n,i),f(n,o)},p:ne,d(a){a&&D(e)}}}function DE(t){let e,n,s,r,i,o;return{c(){e=w("div"),n=w("div"),s=w("img"),i=k(),o=w("h1"),o.textContent="Sinergias",gr(s.src,r=kE)||E(s,"src",r),E(s,"alt","sinergias"),E(s,"class","profile-img svelte-1gg3zdr"),E(o,"class","name svelte-1gg3zdr"),E(n,"class","optionCard svelte-1gg3zdr"),E(e,"class","container")},m(a,c){N(a,e,c),f(e,n),f(n,s),f(n,i),f(n,o)},p:ne,d(a){a&&D(e)}}}function NE(t){let e,n,s,r,i,o,a,c;return e=new Se({props:{to:"/contactos",title:"contactos",$$slots:{default:[CE]},$$scope:{ctx:t}}}),s=new Se({props:{to:"/propiedades",title:"propiedades",$$slots:{default:[AE]},$$scope:{ctx:t}}}),i=new Se({props:{to:"/agenda",title:"agenda",$$slots:{default:[RE]},$$scope:{ctx:t}}}),a=new Se({props:{to:"/sinergias",title:"sinergias",$$slots:{default:[DE]},$$scope:{ctx:t}}}),{c(){F(e.$$.fragment),n=k(),F(s.$$.fragment),r=k(),F(i.$$.fragment),o=k(),F(a.$$.fragment)},m(u,l){P(e,u,l),N(u,n,l),P(s,u,l),N(u,r,l),P(i,u,l),N(u,o,l),P(a,u,l),c=!0},p(u,l){const h={};l&1&&(h.$$scope={dirty:l,ctx:u}),e.$set(h);const d={};l&1&&(d.$$scope={dirty:l,ctx:u}),s.$set(d);const g={};l&1&&(g.$$scope={dirty:l,ctx:u}),i.$set(g);const p={};l&1&&(p.$$scope={dirty:l,ctx:u}),a.$set(p)},i(u){c||(C(e.$$.fragment,u),C(s.$$.fragment,u),C(i.$$.fragment,u),C(a.$$.fragment,u),c=!0)},o(u){R(e.$$.fragment,u),R(s.$$.fragment,u),R(i.$$.fragment,u),R(a.$$.fragment,u),c=!1},d(u){M(e,u),u&&D(n),M(s,u),u&&D(r),M(i,u),u&&D(o),M(a,u)}}}function OE(t){let e,n;return e=new Bu({}),{c(){F(e.$$.fragment)},m(s,r){P(e,s,r),n=!0},i(s){n||(C(e.$$.fragment,s),n=!0)},o(s){R(e.$$.fragment,s),n=!1},d(s){M(e,s)}}}function $E(t){let e,n;return e=new ju({}),{c(){F(e.$$.fragment)},m(s,r){P(e,s,r),n=!0},i(s){n||(C(e.$$.fragment,s),n=!0)},o(s){R(e.$$.fragment,s),n=!1},d(s){M(e,s)}}}function LE(t){let e,n;return e=new da({}),{c(){F(e.$$.fragment)},m(s,r){P(e,s,r),n=!0},i(s){n||(C(e.$$.fragment,s),n=!0)},o(s){R(e.$$.fragment,s),n=!1},d(s){M(e,s)}}}function PE(t){let e,n;return e=new da({}),{c(){F(e.$$.fragment)},m(s,r){P(e,s,r),n=!0},i(s){n||(C(e.$$.fragment,s),n=!0)},o(s){R(e.$$.fragment,s),n=!1},d(s){M(e,s)}}}function ME(t){let e,n,s,r,i,o,a,c,u,l,h,d,g,p,v;return s=new lo({props:{$$slots:{default:[NE]},$$scope:{ctx:t}}}),i=new Be({props:{path:"/agenda",$$slots:{default:[OE]},$$scope:{ctx:t}}}),a=new Be({props:{path:"/sinergias",$$slots:{default:[$E]},$$scope:{ctx:t}}}),u=new Be({props:{path:"/login",$$slots:{default:[LE]},$$scope:{ctx:t}}}),h=new Be({props:{path:"/registro",$$slots:{default:[PE]},$$scope:{ctx:t}}}),p=new IE({props:{"(orderTodos)":!0}}),{c(){e=w("body"),n=w("div"),F(s.$$.fragment),r=k(),F(i.$$.fragment),o=k(),F(a.$$.fragment),c=k(),F(u.$$.fragment),l=k(),F(h.$$.fragment),d=k(),g=w("div"),F(p.$$.fragment),E(n,"class","wrapper-grid svelte-1gg3zdr"),E(g,"class","")},m(m,y){N(m,e,y),f(e,n),P(s,n,null),f(n,r),P(i,n,null),f(n,o),P(a,n,null),f(n,c),P(u,n,null),f(n,l),P(h,n,null),f(e,d),f(e,g),P(p,g,null),v=!0},p(m,[y]){const S={};y&1&&(S.$$scope={dirty:y,ctx:m}),s.$set(S);const W={};y&1&&(W.$$scope={dirty:y,ctx:m}),i.$set(W);const L={};y&1&&(L.$$scope={dirty:y,ctx:m}),a.$set(L);const Q={};y&1&&(Q.$$scope={dirty:y,ctx:m}),u.$set(Q);const Y={};y&1&&(Y.$$scope={dirty:y,ctx:m}),h.$set(Y)},i(m){v||(C(s.$$.fragment,m),C(i.$$.fragment,m),C(a.$$.fragment,m),C(u.$$.fragment,m),C(h.$$.fragment,m),C(p.$$.fragment,m),v=!0)},o(m){R(s.$$.fragment,m),R(i.$$.fragment,m),R(a.$$.fragment,m),R(u.$$.fragment,m),R(h.$$.fragment,m),R(p.$$.fragment,m),v=!1},d(m){m&&D(e),M(s),M(i),M(a),M(u),M(h),M(p)}}}class xE extends Ue{constructor(e){super(),xe(this,e,null,ME,$e,{})}}function UE(t){let e;return{c(){e=w("h1"),e.textContent="Estas en About"},m(n,s){N(n,e,s)},p:ne,i:ne,o:ne,d(n){n&&D(e)}}}class FE extends Ue{constructor(e){super(),xe(this,e,null,UE,$e,{})}}function VE(t){let e,n,s,r;return{c(){e=w("div"),n=w("div"),s=ee(t[0]),E(n,"id","snackbar"),E(n,"class",r=Na(t[1]?"animation-in":"not-show")+" svelte-1e3w4r3")},m(i,o){N(i,e,o),f(e,n),f(n,s)},p(i,[o]){o&1&&pu(s,i[0]),o&2&&r!==(r=Na(i[1]?"animation-in":"not-show")+" svelte-1e3w4r3")&&E(n,"class",r)},i:ne,o:ne,d(i){i&&D(e)}}}function BE(t,e,n){let{message:s=""}=e,{show:r=!1}=e;return t.$$set=i=>{"message"in i&&n(0,s=i.message),"show"in i&&n(1,r=i.show)},[s,r]}class jE extends Ue{constructor(e){super(),xe(this,e,BE,VE,$e,{message:0,show:1})}}function qE(t){let e;return{c(){e=ee("Registrarse")},m(n,s){N(n,e,s)},d(n){n&&D(e)}}}function HE(t){let e,n,s,r,i,o,a,c,u,l,h,d,g,p,v,m,y,S,W,L,Q,Y,B,z,ie,se,ae,j,le,de,he;return n=new jE({props:{message:t[0],show:t[1]}}),j=new Se({props:{to:"/register",$$slots:{default:[qE]},$$scope:{ctx:t}}}),{c(){e=w("div"),F(n.$$.fragment),s=k(),r=w("br"),i=w("br"),o=w("br"),a=k(),c=w("div"),u=w("h1"),u.textContent="Inicia sesi\xF3n en tu cuenta",l=k(),h=w("div"),d=w("input"),g=k(),p=w("div"),v=w("input"),m=k(),y=w("br"),S=k(),W=w("div"),L=w("button"),L.textContent="Iniciar sesi\xF3n",Q=k(),Y=w("p"),Y.textContent="O tambi\xE9n",B=k(),z=w("br"),ie=k(),se=w("p"),ae=ee("\xBFA\xFAn no tienes cuenta? "),F(j.$$.fragment),E(u,"class","text-center text-login svelte-ftg4em"),E(d,"name","email"),E(d,"type","text"),E(d,"class","input-form svelte-ftg4em"),E(d,"placeholder","Correo"),E(h,"class","center svelte-ftg4em"),E(v,"name","password"),E(v,"type","password"),E(v,"class","input-form svelte-ftg4em"),E(v,"placeholder","Contrase\xF1a"),E(p,"class","center svelte-ftg4em"),E(L,"class","button-signup fondo-color-signup svelte-ftg4em"),E(W,"class","center svelte-ftg4em"),E(Y,"class","text-center svelte-ftg4em"),E(se,"class","text-center svelte-ftg4em"),E(c,"class","form-signin svelte-ftg4em")},m(oe,be){N(oe,e,be),P(n,e,null),f(e,s),f(e,r),f(e,i),f(e,o),f(e,a),f(e,c),f(c,u),f(c,l),f(c,h),f(h,d),f(c,g),f(c,p),f(p,v),f(c,m),f(c,y),f(c,S),f(c,W),f(W,L),f(c,Q),f(c,Y),f(c,B),f(c,z),f(c,ie),f(c,se),f(se,ae),P(j,se,null),le=!0,de||(he=[Nt(d,"input",t[4]),Nt(v,"input",t[5]),Nt(L,"click",t[3])],de=!0)},p(oe,[be]){const Ze={};be&1&&(Ze.message=oe[0]),be&2&&(Ze.show=oe[1]),n.$set(Ze);const Ve={};be&512&&(Ve.$$scope={dirty:be,ctx:oe}),j.$set(Ve)},i(oe){le||(C(n.$$.fragment,oe),C(j.$$.fragment,oe),le=!0)},o(oe){R(n.$$.fragment,oe),R(j.$$.fragment,oe),le=!1},d(oe){oe&&D(e),M(n),M(j),de=!1,It(he)}}}function zE(t,e,n){const s=ho();let r={email:"",password:""},i="",o=!1;const a=d=>{n(0,i=d),n(1,o=!0),setTimeout(()=>{n(1,o=!1)},2800)},c=d=>{r={...r,[d.target.name]:d.target.value}};return[i,o,c,async()=>{try{await j_(wd,r.email,r.password),s("/")}catch(d){d.message==="Firebase: Error (auth/wrong-password)."&&a("Contrase\xF1a incorrecta")}},d=>c(d),d=>c(d)]}class KE extends Ue{constructor(e){super(),xe(this,e,zE,HE,$e,{})}}class GE extends Ue{constructor(e){super(),xe(this,e,null,null,$e,{})}}function WE(t){let e;return{c(){e=ee("Home")},m(n,s){N(n,e,s)},d(n){n&&D(e)}}}function QE(t){let e;return{c(){e=ee("Contactos")},m(n,s){N(n,e,s)},d(n){n&&D(e)}}}function YE(t){let e;return{c(){e=ee("Propiedades")},m(n,s){N(n,e,s)},d(n){n&&D(e)}}}function XE(t){let e;return{c(){e=ee("Captaci\xF3n")},m(n,s){N(n,e,s)},d(n){n&&D(e)}}}function JE(t){let e;return{c(){e=ee("Agenda")},m(n,s){N(n,e,s)},d(n){n&&D(e)}}}function ZE(t){let e;return{c(){e=ee("Sinergias")},m(n,s){N(n,e,s)},d(n){n&&D(e)}}}function e0(t){let e;return{c(){e=ee("LogOut")},m(n,s){N(n,e,s)},d(n){n&&D(e)}}}function t0(t){let e;return{c(){e=ee("About")},m(n,s){N(n,e,s)},d(n){n&&D(e)}}}function n0(t){let e;return{c(){e=ee("Registro")},m(n,s){N(n,e,s)},d(n){n&&D(e)}}}function s0(t){let e;return{c(){e=ee("Login")},m(n,s){N(n,e,s)},d(n){n&&D(e)}}}function r0(t){let e,n;return e=new xE({}),{c(){F(e.$$.fragment)},m(s,r){P(e,s,r),n=!0},i(s){n||(C(e.$$.fragment,s),n=!0)},o(s){R(e.$$.fragment,s),n=!1},d(s){M(e,s)}}}function i0(t){let e,n;return e=new Bu({}),{c(){F(e.$$.fragment)},m(s,r){P(e,s,r),n=!0},i(s){n||(C(e.$$.fragment,s),n=!0)},o(s){R(e.$$.fragment,s),n=!1},d(s){M(e,s)}}}function o0(t){let e,n;return e=new ju({}),{c(){F(e.$$.fragment)},m(s,r){P(e,s,r),n=!0},i(s){n||(C(e.$$.fragment,s),n=!0)},o(s){R(e.$$.fragment,s),n=!1},d(s){M(e,s)}}}function a0(t){let e,n;return e=new FE({}),{c(){F(e.$$.fragment)},m(s,r){P(e,s,r),n=!0},i(s){n||(C(e.$$.fragment,s),n=!0)},o(s){R(e.$$.fragment,s),n=!1},d(s){M(e,s)}}}function c0(t){let e,n;return e=new GE({}),{c(){F(e.$$.fragment)},m(s,r){P(e,s,r),n=!0},i(s){n||(C(e.$$.fragment,s),n=!0)},o(s){R(e.$$.fragment,s),n=!1},d(s){M(e,s)}}}function u0(t){let e,n;return e=new KE({}),{c(){F(e.$$.fragment)},m(s,r){P(e,s,r),n=!0},i(s){n||(C(e.$$.fragment,s),n=!0)},o(s){R(e.$$.fragment,s),n=!1},d(s){M(e,s)}}}function l0(t){let e,n;return e=new da({}),{c(){F(e.$$.fragment)},m(s,r){P(e,s,r),n=!0},i(s){n||(C(e.$$.fragment,s),n=!0)},o(s){R(e.$$.fragment,s),n=!1},d(s){M(e,s)}}}function h0(t){let e,n,s,r,i,o,a,c,u,l,h,d,g,p,v,m,y,S,W,L,Q,Y,B,z,ie,se,ae,j,le,de,he,oe,be,Ze,Ve,ks,$,Ne;return r=new Se({props:{to:"/",$$slots:{default:[WE]},$$scope:{ctx:t}}}),o=new Se({props:{to:"contactos",$$slots:{default:[QE]},$$scope:{ctx:t}}}),c=new Se({props:{to:"propiedades",$$slots:{default:[YE]},$$scope:{ctx:t}}}),l=new Se({props:{to:"captacion",$$slots:{default:[XE]},$$scope:{ctx:t}}}),d=new Se({props:{to:"agenda",$$slots:{default:[JE]},$$scope:{ctx:t}}}),p=new Se({props:{to:"sinergias",$$slots:{default:[ZE]},$$scope:{ctx:t}}}),m=new Se({props:{to:"/about",$$slots:{default:[e0]},$$scope:{ctx:t}}}),m.$on("click",t[0]),S=new Se({props:{to:"about",$$slots:{default:[t0]},$$scope:{ctx:t}}}),L=new Se({props:{to:"register",$$slots:{default:[n0]},$$scope:{ctx:t}}}),Y=new Se({props:{to:"login",$$slots:{default:[s0]},$$scope:{ctx:t}}}),ie=new Be({props:{path:"/",$$slots:{default:[r0]},$$scope:{ctx:t}}}),ae=new Be({props:{path:"agenda",$$slots:{default:[i0]},$$scope:{ctx:t}}}),le=new Be({props:{path:"sinergias",$$slots:{default:[o0]},$$scope:{ctx:t}}}),he=new Be({props:{path:"about",$$slots:{default:[a0]},$$scope:{ctx:t}}}),be=new Be({props:{path:"logout",$$slots:{default:[c0]},$$scope:{ctx:t}}}),Ve=new Be({props:{path:"login",$$slots:{default:[u0]},$$scope:{ctx:t}}}),$=new Be({props:{path:"register",$$slots:{default:[l0]},$$scope:{ctx:t}}}),{c(){e=w("div"),n=w("header"),s=w("nav"),F(r.$$.fragment),i=k(),F(o.$$.fragment),a=k(),F(c.$$.fragment),u=k(),F(l.$$.fragment),h=k(),F(d.$$.fragment),g=k(),F(p.$$.fragment),v=k(),F(m.$$.fragment),y=k(),F(S.$$.fragment),W=k(),F(L.$$.fragment),Q=k(),F(Y.$$.fragment),B=k(),z=w("main"),F(ie.$$.fragment),se=k(),F(ae.$$.fragment),j=k(),F(le.$$.fragment),de=k(),F(he.$$.fragment),oe=k(),F(be.$$.fragment),Ze=k(),F(Ve.$$.fragment),ks=k(),F($.$$.fragment),E(e,"class","navMenu")},m(T,q){N(T,e,q),f(e,n),f(n,s),P(r,s,null),f(s,i),P(o,s,null),f(s,a),P(c,s,null),f(s,u),P(l,s,null),f(s,h),P(d,s,null),f(s,g),P(p,s,null),f(s,v),P(m,s,null),f(s,y),P(S,s,null),f(s,W),P(L,s,null),f(s,Q),P(Y,s,null),N(T,B,q),N(T,z,q),P(ie,z,null),f(z,se),P(ae,z,null),f(z,j),P(le,z,null),f(z,de),P(he,z,null),f(z,oe),P(be,z,null),f(z,Ze),P(Ve,z,null),f(z,ks),P($,z,null),Ne=!0},p(T,q){const fa={};q&8&&(fa.$$scope={dirty:q,ctx:T}),r.$set(fa);const ga={};q&8&&(ga.$$scope={dirty:q,ctx:T}),o.$set(ga);const pa={};q&8&&(pa.$$scope={dirty:q,ctx:T}),c.$set(pa);const ma={};q&8&&(ma.$$scope={dirty:q,ctx:T}),l.$set(ma);const ya={};q&8&&(ya.$$scope={dirty:q,ctx:T}),d.$set(ya);const va={};q&8&&(va.$$scope={dirty:q,ctx:T}),p.$set(va);const _a={};q&8&&(_a.$$scope={dirty:q,ctx:T}),m.$set(_a);const wa={};q&8&&(wa.$$scope={dirty:q,ctx:T}),S.$set(wa);const Ea={};q&8&&(Ea.$$scope={dirty:q,ctx:T}),L.$set(Ea);const Ia={};q&8&&(Ia.$$scope={dirty:q,ctx:T}),Y.$set(Ia);const Ta={};q&8&&(Ta.$$scope={dirty:q,ctx:T}),ie.$set(Ta);const ba={};q&8&&(ba.$$scope={dirty:q,ctx:T}),ae.$set(ba);const Sa={};q&8&&(Sa.$$scope={dirty:q,ctx:T}),le.$set(Sa);const ka={};q&8&&(ka.$$scope={dirty:q,ctx:T}),he.$set(ka);const Ca={};q&8&&(Ca.$$scope={dirty:q,ctx:T}),be.$set(Ca);const Aa={};q&8&&(Aa.$$scope={dirty:q,ctx:T}),Ve.$set(Aa);const Ra={};q&8&&(Ra.$$scope={dirty:q,ctx:T}),$.$set(Ra)},i(T){Ne||(C(r.$$.fragment,T),C(o.$$.fragment,T),C(c.$$.fragment,T),C(l.$$.fragment,T),C(d.$$.fragment,T),C(p.$$.fragment,T),C(m.$$.fragment,T),C(S.$$.fragment,T),C(L.$$.fragment,T),C(Y.$$.fragment,T),C(ie.$$.fragment,T),C(ae.$$.fragment,T),C(le.$$.fragment,T),C(he.$$.fragment,T),C(be.$$.fragment,T),C(Ve.$$.fragment,T),C($.$$.fragment,T),Ne=!0)},o(T){R(r.$$.fragment,T),R(o.$$.fragment,T),R(c.$$.fragment,T),R(l.$$.fragment,T),R(d.$$.fragment,T),R(p.$$.fragment,T),R(m.$$.fragment,T),R(S.$$.fragment,T),R(L.$$.fragment,T),R(Y.$$.fragment,T),R(ie.$$.fragment,T),R(ae.$$.fragment,T),R(le.$$.fragment,T),R(he.$$.fragment,T),R(be.$$.fragment,T),R(Ve.$$.fragment,T),R($.$$.fragment,T),Ne=!1},d(T){T&&D(e),M(r),M(o),M(c),M(l),M(d),M(p),M(m),M(S),M(L),M(Y),T&&D(B),T&&D(z),M(ie),M(ae),M(le),M(he),M(be),M(Ve),M($)}}}function d0(t){let e,n,s,r,i;return n=new lo({props:{$$slots:{default:[h0]},$$scope:{ctx:t}}}),{c(){e=w("div"),F(n.$$.fragment),s=k(),r=w("section"),E(e,"class","nav svelte-pt16o2")},m(o,a){N(o,e,a),P(n,e,null),f(e,s),f(e,r),i=!0},p(o,[a]){const c={};a&8&&(c.$$scope={dirty:a,ctx:o}),n.$set(c)},i(o){i||(C(n.$$.fragment,o),i=!0)},o(o){R(n.$$.fragment,o),i=!1},d(o){o&&D(e),M(n)}}}function f0(t,e,n){let s;je(t,du,i=>n(2,s=i)),console.log("logged? ",s),du.subscribe(i=>{});async function r(){console.log(s)}return[r]}class g0 extends Ue{constructor(e){super(),xe(this,e,f0,d0,$e,{})}}function p0(t){let e,n,s,r,i;return n=new g0({}),{c(){e=w("nav"),F(n.$$.fragment),s=k(),r=w("main"),E(e,"class","navBar svelte-1ab8rao")},m(o,a){N(o,e,a),P(n,e,null),N(o,s,a),N(o,r,a),i=!0},p:ne,i(o){i||(C(n.$$.fragment,o),i=!0)},o(o){R(n.$$.fragment,o),i=!1},d(o){o&&D(e),M(n),o&&D(s),o&&D(r)}}}class m0 extends Ue{constructor(e){super(),xe(this,e,null,p0,$e,{})}}new m0({target:document.getElementById("app")});
