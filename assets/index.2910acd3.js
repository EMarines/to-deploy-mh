(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();function F(){}function Z(n,e){for(const t in e)n[t]=e[t];return n}function Ar(n){return n()}function jn(){return Object.create(null)}function ke(n){n.forEach(Ar)}function fn(n){return typeof n=="function"}function J(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}let pt;function Gs(n,e){return pt||(pt=document.createElement("a")),pt.href=e,n===pt.href}function Ks(n){return Object.keys(n).length===0}function hn(n,...e){if(n==null)return F;const t=n.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function je(n){let e;return hn(n,t=>e=t)(),e}function ie(n,e,t){n.$$.on_destroy.push(hn(e,t))}function pn(n,e,t,r){if(n){const s=Cr(n,e,t,r);return n[0](s)}}function Cr(n,e,t,r){return n[1]&&r?Z(t.ctx.slice(),n[1](r(e))):t.ctx}function mn(n,e,t,r){if(n[2]&&r){const s=n[2](r(t));if(e.dirty===void 0)return s;if(typeof s=="object"){const i=[],o=Math.max(e.dirty.length,s.length);for(let c=0;c<o;c+=1)i[c]=e.dirty[c]|s[c];return i}return e.dirty|s}return e.dirty}function gn(n,e,t,r,s,i){if(s){const o=Cr(e,t,r,i);n.p(o,s)}}function _n(n){if(n.ctx.length>32){const e=[],t=n.ctx.length/32;for(let r=0;r<t;r++)e[r]=-1;return e}return-1}function Et(n){const e={};for(const t in n)t[0]!=="$"&&(e[t]=n[t]);return e}function Tt(n,e){const t={};e=new Set(e);for(const r in n)!e.has(r)&&r[0]!=="$"&&(t[r]=n[r]);return t}function h(n,e){n.appendChild(e)}function A(n,e,t){n.insertBefore(e,t||null)}function k(n){n.parentNode.removeChild(n)}function E(n){return document.createElement(n)}function W(n){return document.createTextNode(n)}function C(){return W(" ")}function vn(){return W("")}function Be(n,e,t,r){return n.addEventListener(e,t,r),()=>n.removeEventListener(e,t,r)}function M(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function oe(n,e){const t=Object.getOwnPropertyDescriptors(n.__proto__);for(const r in e)e[r]==null?n.removeAttribute(r):r==="style"?n.style.cssText=e[r]:r==="__value"?n.value=n[r]=e[r]:t[r]&&t[r].set?n[r]=e[r]:M(n,r,e[r])}function Js(n){return Array.from(n.childNodes)}function Ys(n,e){e=""+e,n.wholeText!==e&&(n.data=e)}function Xs(n,e,{bubbles:t=!1,cancelable:r=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(n,t,r,e),s}function Vn(n,e){return new n(e)}let Qe;function Je(n){Qe=n}function rt(){if(!Qe)throw new Error("Function called outside component initialization");return Qe}function Qs(n){rt().$$.on_mount.push(n)}function Zs(n){rt().$$.on_destroy.push(n)}function ei(){const n=rt();return(e,t,{cancelable:r=!1}={})=>{const s=n.$$.callbacks[e];if(s){const i=Xs(e,t,{cancelable:r});return s.slice().forEach(o=>{o.call(n,i)}),!i.defaultPrevented}return!0}}function Ye(n,e){return rt().$$.context.set(n,e),e}function Te(n){return rt().$$.context.get(n)}const Ge=[],zn=[],_t=[],Wn=[],Or=Promise.resolve();let Zt=!1;function Pr(){Zt||(Zt=!0,Or.then(Dr))}function ti(){return Pr(),Or}function en(n){_t.push(n)}const Ht=new Set;let mt=0;function Dr(){const n=Qe;do{for(;mt<Ge.length;){const e=Ge[mt];mt++,Je(e),ni(e.$$)}for(Je(null),Ge.length=0,mt=0;zn.length;)zn.pop()();for(let e=0;e<_t.length;e+=1){const t=_t[e];Ht.has(t)||(Ht.add(t),t())}_t.length=0}while(Ge.length);for(;Wn.length;)Wn.pop()();Zt=!1,Ht.clear(),Je(n)}function ni(n){if(n.fragment!==null){n.update(),ke(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(en)}}const vt=new Set;let Ae;function Pt(){Ae={r:0,c:[],p:Ae}}function Dt(){Ae.r||ke(Ae.c),Ae=Ae.p}function v(n,e){n&&n.i&&(vt.delete(n),n.i(e))}function y(n,e,t,r){if(n&&n.o){if(vt.has(n))return;vt.add(n),Ae.c.push(()=>{vt.delete(n),r&&(t&&n.d(1),r())}),n.o(e)}else r&&r()}function Ve(n,e){const t={},r={},s={$$scope:1};let i=n.length;for(;i--;){const o=n[i],c=e[i];if(c){for(const a in o)a in c||(r[a]=1);for(const a in c)s[a]||(t[a]=c[a],s[a]=1);n[i]=c}else for(const a in o)s[a]=1}for(const o in r)o in t||(t[o]=void 0);return t}function qn(n){return typeof n=="object"&&n!==null?n:{}}function $(n){n&&n.c()}function T(n,e,t,r){const{fragment:s,after_update:i}=n.$$;s&&s.m(e,t),r||en(()=>{const o=n.$$.on_mount.map(Ar).filter(fn);n.$$.on_destroy?n.$$.on_destroy.push(...o):ke(o),n.$$.on_mount=[]}),i.forEach(en)}function S(n,e){const t=n.$$;t.fragment!==null&&(ke(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function ri(n,e){n.$$.dirty[0]===-1&&(Ge.push(n),Pr(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function ee(n,e,t,r,s,i,o,c=[-1]){const a=Qe;Je(n);const l=n.$$={fragment:null,ctx:[],props:i,update:F,not_equal:s,bound:jn(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(a?a.$$.context:[])),callbacks:jn(),dirty:c,skip_bound:!1,root:e.target||a.$$.root};o&&o(l.root);let d=!1;if(l.ctx=t?t(n,e.props||{},(u,f,...b)=>{const g=b.length?b[0]:f;return l.ctx&&s(l.ctx[u],l.ctx[u]=g)&&(!l.skip_bound&&l.bound[u]&&l.bound[u](g),d&&ri(n,u)),f}):[],l.update(),d=!0,ke(l.before_update),l.fragment=r?r(l.ctx):!1,e.target){if(e.hydrate){const u=Js(e.target);l.fragment&&l.fragment.l(u),u.forEach(k)}else l.fragment&&l.fragment.c();e.intro&&v(n.$$.fragment),T(n,e.target,e.anchor,e.customElement),Dr()}Je(a)}class te{$destroy(){S(this,1),this.$destroy=F}$on(e,t){if(!fn(t))return F;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(t),()=>{const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}$set(e){this.$$set&&!Ks(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Gn=n=>typeof n>"u",Nr=n=>typeof n=="function",Lr=n=>typeof n=="number";function si(n){return!n.defaultPrevented&&n.button===0&&!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function Mr(){let n=0;return()=>n++}function ii(){return Math.random().toString(36).substring(2)}const Se=typeof window>"u";function Ur(n,e,t){return n.addEventListener(e,t),()=>n.removeEventListener(e,t)}const tn=(n,e)=>n?{}:{style:e},Me=n=>({"aria-hidden":"true",...tn(n,"display:none;")}),Le=[];function oi(n,e){return{subscribe:Q(n,e).subscribe}}function Q(n,e=F){let t;const r=new Set;function s(c){if(J(n,c)&&(n=c,t)){const a=!Le.length;for(const l of r)l[1](),Le.push(l,n);if(a){for(let l=0;l<Le.length;l+=2)Le[l][0](Le[l+1]);Le.length=0}}}function i(c){s(c(n))}function o(c,a=F){const l=[c,a];return r.add(l),r.size===1&&(t=e(s)||F),c(n),()=>{r.delete(l),r.size===0&&(t(),t=null)}}return{set:s,update:i,subscribe:o}}function ai(n,e,t){const r=!Array.isArray(n),s=r?[n]:n,i=e.length<2;return oi(t,o=>{let c=!1;const a=[];let l=0,d=F;const u=()=>{if(l)return;d();const b=e(r?a[0]:a,o);i?o(b):d=fn(b)?b:F},f=s.map((b,g)=>hn(b,m=>{a[g]=m,l&=~(1<<g),c&&u()},()=>{l|=1<<g}));return c=!0,u(),function(){ke(f),d()}})}const st=n=>`@@svnav-ctx__${n}`,nn=st("LOCATION"),ze=st("ROUTER"),Br=st("ROUTE"),ci=st("ROUTE_PARAMS"),li=st("FOCUS_ELEM"),Fr=/^:(.+)/,Ke=(n,e,t)=>n.substr(e,t),rn=(n,e)=>Ke(n,0,e.length)===e,ui=n=>n==="",di=n=>Fr.test(n),xr=n=>n[0]==="*",fi=n=>n.replace(/\*.*$/,""),Hr=n=>n.replace(/(^\/+|\/+$)/g,"");function le(n,e=!1){const t=Hr(n).split("/");return e?t.filter(Boolean):t}const jt=(n,e)=>n+(e?`?${e}`:""),bn=n=>`/${Hr(n)}`;function it(...n){const e=r=>le(r,!0).join("/"),t=n.map(e).join("/");return bn(t)}const yn=1,Nt=2,Oe=3,hi=4,jr=5,pi=6,Vr=7,mi=8,gi=9,zr=10,Wr=11,_i={[yn]:"Link",[Nt]:"Route",[Oe]:"Router",[hi]:"useFocus",[jr]:"useLocation",[pi]:"useMatch",[Vr]:"useNavigate",[mi]:"useParams",[gi]:"useResolvable",[zr]:"useResolve",[Wr]:"navigate"},In=n=>_i[n];function vi(n,e){let t;return n===Nt?t=e.path?`path="${e.path}"`:"default":n===yn?t=`to="${e.to}"`:n===Oe&&(t=`basepath="${e.basepath||""}"`),`<${In(n)} ${t||""} />`}function bi(n,e,t,r){const s=t&&vi(r||n,t),i=s?`

Occurred in: ${s}`:"",o=In(n),c=Nr(e)?e(o):e;return`<${o}> ${c}${i}`}const qr=n=>(...e)=>n(bi(...e)),Gr=qr(n=>{throw new Error(n)}),St=qr(console.warn),Kn=4,yi=3,Ii=2,wi=1,Ei=1;function Ti(n,e){const t=n.default?0:le(n.fullPath).reduce((r,s)=>{let i=r;return i+=Kn,ui(s)?i+=Ei:di(s)?i+=Ii:xr(s)?i-=Kn+wi:i+=yi,i},0);return{route:n,score:t,index:e}}function Si(n){return n.map(Ti).sort((e,t)=>e.score<t.score?1:e.score>t.score?-1:e.index-t.index)}function Kr(n,e){let t,r;const[s]=e.split("?"),i=le(s),o=i[0]==="",c=Si(n);for(let a=0,l=c.length;a<l;a++){const{route:d}=c[a];let u=!1;const f={},b=O=>({...d,params:f,uri:O});if(d.default){r=b(e);continue}const g=le(d.fullPath),m=Math.max(i.length,g.length);let _=0;for(;_<m;_++){const O=g[_],U=i[_];if(!Gn(O)&&xr(O)){const L=O==="*"?"*":O.slice(1);f[L]=i.slice(_).map(decodeURIComponent).join("/");break}if(Gn(U)){u=!0;break}const N=Fr.exec(O);if(N&&!o){const L=decodeURIComponent(U);f[N[1]]=L}else if(O!==U){u=!0;break}}if(!u){t=b(it(...i.slice(0,_)));break}}return t||r||null}function Jr(n,e){return Kr([n],e)}function ki(n,e){if(rn(n,"/"))return n;const[t,r]=n.split("?"),[s]=e.split("?"),i=le(t),o=le(s);if(i[0]==="")return jt(s,r);if(!rn(i[0],".")){const l=o.concat(i).join("/");return jt((s==="/"?"":"/")+l,r)}const c=o.concat(i),a=[];return c.forEach(l=>{l===".."?a.pop():l!=="."&&a.push(l)}),jt(`/${a.join("/")}`,r)}function Jn(n,e){const{pathname:t,hash:r="",search:s="",state:i}=n,o=le(e,!0),c=le(t,!0);for(;o.length;)o[0]!==c[0]&&Gr(Oe,`Invalid state: All locations must begin with the basepath "${e}", found "${t}"`),o.shift(),c.shift();return{pathname:it(...c),hash:r,search:s,state:i}}const Yn=n=>n.length===1?"":n,wn=n=>{const e=n.indexOf("?"),t=n.indexOf("#"),r=e!==-1,s=t!==-1,i=s?Yn(Ke(n,t)):"",o=s?Ke(n,0,t):n,c=r?Yn(Ke(o,e)):"";return{pathname:(r?Ke(o,0,e):o)||"/",search:c,hash:i}},Ri=n=>{const{pathname:e,search:t,hash:r}=n;return e+t+r};function $i(n,e,t){return it(t,ki(n,e))}function Ai(n,e){const t=bn(fi(n)),r=le(t,!0),s=le(e,!0).slice(0,r.length),i=Jr({fullPath:t},it(...s));return i&&i.uri}const Vt="POP",Ci="PUSH",Oi="REPLACE";function zt(n){return{...n.location,pathname:encodeURI(decodeURI(n.location.pathname)),state:n.history.state,_key:n.history.state&&n.history.state._key||"initial"}}function Pi(n){let e=[],t=zt(n),r=Vt;const s=(i=e)=>i.forEach(o=>o({location:t,action:r}));return{get location(){return t},listen(i){e.push(i);const o=()=>{t=zt(n),r=Vt,s([i])};s([i]);const c=Ur(n,"popstate",o);return()=>{c(),e=e.filter(a=>a!==i)}},navigate(i,o){const{state:c={},replace:a=!1}=o||{};if(r=a?Oi:Ci,Lr(i))o&&St(Wr,"Navigation options (state or replace) are not supported, when passing a number as the first argument to navigate. They are ignored."),r=Vt,n.history.go(i);else{const l={...c,_key:ii()};try{n.history[a?"replaceState":"pushState"](l,"",i)}catch{n.location[a?"replace":"assign"](i)}}t=zt(n),s()}}}function Wt(n,e){return{...wn(e),state:n}}function Di(n="/"){let e=0,t=[Wt(null,n)];return{get entries(){return t},get location(){return t[e]},addEventListener(){},removeEventListener(){},history:{get state(){return t[e].state},pushState(r,s,i){e++,t=t.slice(0,e),t.push(Wt(r,i))},replaceState(r,s,i){t[e]=Wt(r,i)},go(r){const s=e+r;s<0||s>t.length-1||(e=s)}}}}const Ni=!!(!Se&&window.document&&window.document.createElement),Li=!Se&&window.location.origin==="null",Mi=Pi(Ni&&!Li?window:Di());let de=null,Yr=!0;function Ui(n,e){const t=document.querySelectorAll("[data-svnav-router]");for(let r=0;r<t.length;r++){const s=t[r],i=Number(s.dataset.svnavRouter);if(i===n)return!0;if(i===e)return!1}return!1}function Bi(n){(!de||n.level>de.level||n.level===de.level&&Ui(n.routerId,de.routerId))&&(de=n)}function Fi(){de=null}function xi(){Yr=!1}function Xn(n){if(!n)return!1;const e="tabindex";try{if(!n.hasAttribute(e)){n.setAttribute(e,"-1");let t;t=Ur(n,"blur",()=>{n.removeAttribute(e),t()})}return n.focus(),document.activeElement===n}catch{return!1}}function Hi(n,e){return Number(n.dataset.svnavRouteEnd)===e}function ji(n){return/^H[1-6]$/i.test(n.tagName)}function Qn(n,e=document){return e.querySelector(n)}function Vi(n){let t=Qn(`[data-svnav-route-start="${n}"]`).nextElementSibling;for(;!Hi(t,n);){if(ji(t))return t;const r=Qn("h1,h2,h3,h4,h5,h6",t);if(r)return r;t=t.nextElementSibling}return null}function zi(n){Promise.resolve(je(n.focusElement)).then(e=>{const t=e||Vi(n.id);t||St(Oe,`Could not find an element to focus. You should always render a header for accessibility reasons, or set a custom focus element via the "useFocus" hook. If you don't want this Route or Router to manage focus, pass "primary={false}" to it.`,n,Nt),!Xn(t)&&Xn(document.documentElement)})}const Wi=(n,e,t)=>(r,s)=>ti().then(()=>{if(!de||Yr){xi();return}if(r&&zi(de.route),n.announcements&&s){const{path:i,fullPath:o,meta:c,params:a,uri:l}=de.route,d=n.createAnnouncement({path:i,fullPath:o,meta:c,params:a,uri:l},je(t));Promise.resolve(d).then(u=>{e.set(u)})}Fi()}),Zn="position:fixed;top:-1px;left:0;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;";function qi(n){let e,t,r=[{role:"status"},{"aria-atomic":"true"},{"aria-live":"polite"},{"data-svnav-announcer":""},tn(n[6],Zn)],s={};for(let i=0;i<r.length;i+=1)s=Z(s,r[i]);return{c(){e=E("div"),t=W(n[0]),oe(e,s)},m(i,o){A(i,e,o),h(e,t)},p(i,o){o[0]&1&&Ys(t,i[0]),oe(e,s=Ve(r,[{role:"status"},{"aria-atomic":"true"},{"aria-live":"polite"},{"data-svnav-announcer":""},tn(i[6],Zn)]))},d(i){i&&k(e)}}}function Gi(n){let e,t,r,s,i,o=[Me(n[6]),{"data-svnav-router":n[3]}],c={};for(let u=0;u<o.length;u+=1)c=Z(c,o[u]);const a=n[22].default,l=pn(a,n,n[21],null);let d=n[2]&&n[4]&&n[1].announcements&&qi(n);return{c(){e=E("div"),t=C(),l&&l.c(),r=C(),d&&d.c(),s=vn(),oe(e,c)},m(u,f){A(u,e,f),A(u,t,f),l&&l.m(u,f),A(u,r,f),d&&d.m(u,f),A(u,s,f),i=!0},p(u,f){oe(e,c=Ve(o,[Me(u[6]),{"data-svnav-router":u[3]}])),l&&l.p&&(!i||f[0]&2097152)&&gn(l,a,u,u[21],i?mn(a,u[21],f,null):_n(u[21]),null),u[2]&&u[4]&&u[1].announcements&&d.p(u,f)},i(u){i||(v(l,u),i=!0)},o(u){y(l,u),i=!1},d(u){u&&k(e),u&&k(t),l&&l.d(u),u&&k(r),d&&d.d(u),u&&k(s)}}}const Ki=Mr(),er="/";function Ji(n,e,t){let r,s,i,o,c,{$$slots:a={},$$scope:l}=e,{basepath:d=er}=e,{url:u=null}=e,{history:f=Mi}=e,{primary:b=!0}=e,{a11y:g={}}=e,{disableInlineStyles:m=!1}=e;const _={createAnnouncement:w=>`Navigated to ${w.uri}`,announcements:!0,...g},O=d,U=bn(d),N=Te(nn),L=Te(ze),x=!N,j=Ki(),D=b&&!(L&&!L.manageFocus),V=Q("");ie(n,V,w=>t(0,c=w));const K=L?L.disableInlineStyles:m,z=Q([]);ie(n,z,w=>t(20,o=w));const ue=Q(null);ie(n,ue,w=>t(18,s=w));let R=!1;const ge=x?0:L.level+1,ne=x?Q((()=>Jn(Se?wn(u):f.location,U))()):N;ie(n,ne,w=>t(17,r=w));const H=Q(r);ie(n,H,w=>t(19,i=w));const p=Wi(_,V,ne),P=w=>G=>G.filter(X=>X.id!==w);function ft(w){if(Se){if(R)return;const G=Jr(w,r.pathname);if(G)return R=!0,G}else z.update(G=>{const X=P(w.id)(G);return X.push(w),X})}function ht(w){z.update(P(w))}return!x&&d!==er&&St(Oe,'Only top-level Routers can have a "basepath" prop. It is ignored.',{basepath:d}),x&&(Qs(()=>f.listen(G=>{const X=Jn(G.location,U);H.set(r),ne.set(X)})),Ye(nn,ne)),Ye(ze,{activeRoute:ue,registerRoute:ft,unregisterRoute:ht,manageFocus:D,level:ge,id:j,history:x?f:L.history,basepath:x?U:L.basepath,disableInlineStyles:K}),n.$$set=w=>{"basepath"in w&&t(11,d=w.basepath),"url"in w&&t(12,u=w.url),"history"in w&&t(13,f=w.history),"primary"in w&&t(14,b=w.primary),"a11y"in w&&t(15,g=w.a11y),"disableInlineStyles"in w&&t(16,m=w.disableInlineStyles),"$$scope"in w&&t(21,l=w.$$scope)},n.$$.update=()=>{if(n.$$.dirty[0]&2048&&d!==O&&St(Oe,'You cannot change the "basepath" prop. It is ignored.'),n.$$.dirty[0]&1179648){const w=Kr(o,r.pathname);ue.set(w)}if(n.$$.dirty[0]&655360&&x){const w=!!r.hash,G=!w&&D,X=!w||r.pathname!==i.pathname;p(G,X)}n.$$.dirty[0]&262144&&D&&s&&s.primary&&Bi({level:ge,routerId:j,route:s})},[c,_,x,j,D,V,K,z,ue,ne,H,d,u,f,b,g,m,r,s,i,o,l,a]}class En extends te{constructor(e){super(),ee(this,e,Ji,Gi,J,{basepath:11,url:12,history:13,primary:14,a11y:15,disableInlineStyles:16},null,[-1,-1])}}function ot(n,e,t=ze,r=Oe){Te(t)||Gr(n,i=>`You cannot use ${i} outside of a ${In(r)}.`,e)}const Yi=n=>{const{subscribe:e}=Te(n);return{subscribe:e}};function Xr(){return ot(jr),Yi(nn)}function Qr(){const{history:n}=Te(ze);return n}function Zr(){const n=Te(Br);return n?ai(n,e=>e.base):Q("/")}function es(){ot(zr);const n=Zr(),{basepath:e}=Te(ze);return r=>$i(r,je(n),e)}function ts(){ot(Vr);const n=es(),{navigate:e}=Qr();return(r,s)=>{const i=Lr(r)?r:n(r);return e(i,s)}}const Xi=n=>({params:n&16,location:n&8}),tr=n=>({params:Se?je(n[10]):n[4],location:n[3],navigate:n[11]});function nr(n){let e,t;return e=new En({props:{primary:n[1],$$slots:{default:[eo]},$$scope:{ctx:n}}}),{c(){$(e.$$.fragment)},m(r,s){T(e,r,s),t=!0},p(r,s){const i={};s&2&&(i.primary=r[1]),s&528409&&(i.$$scope={dirty:s,ctx:r}),e.$set(i)},i(r){t||(v(e.$$.fragment,r),t=!0)},o(r){y(e.$$.fragment,r),t=!1},d(r){S(e,r)}}}function Qi(n){let e;const t=n[18].default,r=pn(t,n,n[19],tr);return{c(){r&&r.c()},m(s,i){r&&r.m(s,i),e=!0},p(s,i){r&&r.p&&(!e||i&524312)&&gn(r,t,s,s[19],e?mn(t,s[19],i,Xi):_n(s[19]),tr)},i(s){e||(v(r,s),e=!0)},o(s){y(r,s),e=!1},d(s){r&&r.d(s)}}}function Zi(n){let e,t,r;const s=[{location:n[3]},{navigate:n[11]},Se?je(n[10]):n[4],n[12]];var i=n[0];function o(c){let a={};for(let l=0;l<s.length;l+=1)a=Z(a,s[l]);return{props:a}}return i&&(e=Vn(i,o())),{c(){e&&$(e.$$.fragment),t=vn()},m(c,a){e&&T(e,c,a),A(c,t,a),r=!0},p(c,a){const l=a&7192?Ve(s,[a&8&&{location:c[3]},a&2048&&{navigate:c[11]},a&1040&&qn(Se?je(c[10]):c[4]),a&4096&&qn(c[12])]):{};if(i!==(i=c[0])){if(e){Pt();const d=e;y(d.$$.fragment,1,0,()=>{S(d,1)}),Dt()}i?(e=Vn(i,o()),$(e.$$.fragment),v(e.$$.fragment,1),T(e,t.parentNode,t)):e=null}else i&&e.$set(l)},i(c){r||(e&&v(e.$$.fragment,c),r=!0)},o(c){e&&y(e.$$.fragment,c),r=!1},d(c){c&&k(t),e&&S(e,c)}}}function eo(n){let e,t,r,s;const i=[Zi,Qi],o=[];function c(a,l){return a[0]!==null?0:1}return e=c(n),t=o[e]=i[e](n),{c(){t.c(),r=vn()},m(a,l){o[e].m(a,l),A(a,r,l),s=!0},p(a,l){let d=e;e=c(a),e===d?o[e].p(a,l):(Pt(),y(o[d],1,1,()=>{o[d]=null}),Dt(),t=o[e],t?t.p(a,l):(t=o[e]=i[e](a),t.c()),v(t,1),t.m(r.parentNode,r))},i(a){s||(v(t),s=!0)},o(a){y(t),s=!1},d(a){o[e].d(a),a&&k(r)}}}function to(n){let e,t,r,s,i,o=[Me(n[7]),{"data-svnav-route-start":n[5]}],c={};for(let u=0;u<o.length;u+=1)c=Z(c,o[u]);let a=n[2]&&nr(n),l=[Me(n[7]),{"data-svnav-route-end":n[5]}],d={};for(let u=0;u<l.length;u+=1)d=Z(d,l[u]);return{c(){e=E("div"),t=C(),a&&a.c(),r=C(),s=E("div"),oe(e,c),oe(s,d)},m(u,f){A(u,e,f),A(u,t,f),a&&a.m(u,f),A(u,r,f),A(u,s,f),i=!0},p(u,[f]){oe(e,c=Ve(o,[Me(u[7]),{"data-svnav-route-start":u[5]}])),u[2]?a?(a.p(u,f),f&4&&v(a,1)):(a=nr(u),a.c(),v(a,1),a.m(r.parentNode,r)):a&&(Pt(),y(a,1,1,()=>{a=null}),Dt()),oe(s,d=Ve(l,[Me(u[7]),{"data-svnav-route-end":u[5]}]))},i(u){i||(v(a),i=!0)},o(u){y(a),i=!1},d(u){u&&k(e),u&&k(t),a&&a.d(u),u&&k(r),u&&k(s)}}}const no=Mr();function ro(n,e,t){let r;const s=["path","component","meta","primary"];let i=Tt(e,s),o,c,a,l,{$$slots:d={},$$scope:u}=e,{path:f=""}=e,{component:b=null}=e,{meta:g={}}=e,{primary:m=!0}=e;ot(Nt,e);const _=no(),{registerRoute:O,unregisterRoute:U,activeRoute:N,disableInlineStyles:L}=Te(ze);ie(n,N,R=>t(16,o=R));const x=Zr();ie(n,x,R=>t(17,a=R));const j=Xr();ie(n,j,R=>t(3,c=R));const D=Q(null);let V;const K=Q(),z=Q({});ie(n,z,R=>t(4,l=R)),Ye(Br,K),Ye(ci,z),Ye(li,D);const ue=ts();return Se||Zs(()=>U(_)),n.$$set=R=>{t(24,e=Z(Z({},e),Et(R))),t(12,i=Tt(e,s)),"path"in R&&t(13,f=R.path),"component"in R&&t(0,b=R.component),"meta"in R&&t(14,g=R.meta),"primary"in R&&t(1,m=R.primary),"$$scope"in R&&t(19,u=R.$$scope)},n.$$.update=()=>{if(n.$$.dirty&155658){const R=f==="",ge=it(a,f),Y={id:_,path:f,meta:g,default:R,fullPath:R?"":ge,base:R?a:Ai(ge,c.pathname),primary:m,focusElement:D};K.set(Y),t(15,V=O(Y))}if(n.$$.dirty&98304&&t(2,r=!!(V||o&&o.id===_)),n.$$.dirty&98308&&r){const{params:R}=V||o;z.set(R)}},e=Et(e),[b,m,r,c,l,_,N,L,x,j,z,ue,i,f,g,V,o,a,d,u]}class se extends te{constructor(e){super(),ee(this,e,ro,to,J,{path:13,component:0,meta:14,primary:1})}}function so(n){let e,t,r,s;const i=n[13].default,o=pn(i,n,n[12],null);let c=[{href:n[0]},n[2],n[1]],a={};for(let l=0;l<c.length;l+=1)a=Z(a,c[l]);return{c(){e=E("a"),o&&o.c(),oe(e,a)},m(l,d){A(l,e,d),o&&o.m(e,null),t=!0,r||(s=Be(e,"click",n[4]),r=!0)},p(l,[d]){o&&o.p&&(!t||d&4096)&&gn(o,i,l,l[12],t?mn(i,l[12],d,null):_n(l[12]),null),oe(e,a=Ve(c,[(!t||d&1)&&{href:l[0]},d&4&&l[2],d&2&&l[1]]))},i(l){t||(v(o,l),t=!0)},o(l){y(o,l),t=!1},d(l){l&&k(e),o&&o.d(l),r=!1,s()}}}function io(n,e,t){let r,s,i,o,c,a;const l=["to","replace","state","getProps"];let d=Tt(e,l),u,{$$slots:f={},$$scope:b}=e,{to:g}=e,{replace:m=!1}=e,{state:_={}}=e,{getProps:O=null}=e;ot(yn,e);const U=Xr();ie(n,U,D=>t(11,u=D));const N=ei(),L=es(),{navigate:x}=Qr();function j(D){N("click",D),si(D)&&(D.preventDefault(),x(r,{state:_,replace:o||m}))}return n.$$set=D=>{t(19,e=Z(Z({},e),Et(D))),t(18,d=Tt(e,l)),"to"in D&&t(5,g=D.to),"replace"in D&&t(6,m=D.replace),"state"in D&&t(7,_=D.state),"getProps"in D&&t(8,O=D.getProps),"$$scope"in D&&t(12,b=D.$$scope)},n.$$.update=()=>{n.$$.dirty&2080&&t(0,r=L(g,u)),n.$$.dirty&2049&&t(10,s=rn(u.pathname,r)),n.$$.dirty&2049&&t(9,i=r===u.pathname),n.$$.dirty&2049&&(o=wn(r)===Ri(u)),n.$$.dirty&512&&t(2,c=i?{"aria-current":"page"}:{}),t(1,a=(()=>{if(Nr(O)){const D=O({location:u,href:r,isPartiallyCurrent:s,isCurrent:i});return{...d,...D}}return d})())},e=Et(e),[r,a,c,U,j,g,m,_,O,i,s,u,b,f]}class re extends te{constructor(e){super(),ee(this,e,io,so,J,{to:5,replace:6,state:7,getProps:8})}}function oo(n){let e;return{c(){e=E("h1"),e.textContent="Estas en Agenda"},m(t,r){A(t,e,r)},p:F,i:F,o:F,d(t){t&&k(e)}}}class ns extends te{constructor(e){super(),ee(this,e,null,oo,J,{})}}function ao(n){let e;return{c(){e=E("h1"),e.textContent="Estas en Sinergias"},m(t,r){A(t,e,r)},p:F,i:F,o:F,d(t){t&&k(e)}}}class rs extends te{constructor(e){super(),ee(this,e,null,ao,J,{})}}/**
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
 */const ss=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},co=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],o=n[t++],c=n[t++],a=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const i=n[t++],o=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},is={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],o=s+1<n.length,c=o?n[s+1]:0,a=s+2<n.length,l=a?n[s+2]:0,d=i>>2,u=(i&3)<<4|c>>4;let f=(c&15)<<2|l>>6,b=l&63;a||(b=64,o||(f=64)),r.push(t[d],t[u],t[f],t[b])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(ss(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):co(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const l=s<n.length?t[n.charAt(s)]:64;++s;const u=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||c==null||l==null||u==null)throw Error();const f=i<<2|c>>4;if(r.push(f),l!==64){const b=c<<4&240|l>>2;if(r.push(b),u!==64){const g=l<<6&192|u;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},lo=function(n){const e=ss(n);return is.encodeByteArray(e,!0)},os=function(n){return lo(n).replace(/\./g,"")},as=function(n){try{return is.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function q(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function uo(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(q())}function fo(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function ho(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function po(){const n=q();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function mo(){return typeof indexedDB=="object"}function go(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}function _o(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const vo=()=>_o().__FIREBASE_DEFAULTS__,bo=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n=process.env.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},yo=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&as(n[1]);return e&&JSON.parse(e)},Tn=()=>{try{return vo()||bo()||yo()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Io=n=>{var e,t;return(t=(e=Tn())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},wo=()=>{var n;return(n=Tn())===null||n===void 0?void 0:n.config},cs=n=>{var e;return(e=Tn())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class Eo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */const To="FirebaseError";class Re extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=To,Object.setPrototypeOf(this,Re.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,at.prototype.create)}}class at{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?So(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new Re(s,c,r)}}function So(n,e){return n.replace(ko,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const ko=/\{\$([^}]+)}/g;function Ro(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function kt(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],o=e[s];if(rr(i)&&rr(o)){if(!kt(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function rr(n){return n!==null&&typeof n=="object"}/**
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
 */function ct(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function $o(n,e){const t=new Ao(n,e);return t.subscribe.bind(t)}class Ao{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Co(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=qt),s.error===void 0&&(s.error=qt),s.complete===void 0&&(s.complete=qt);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Co(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function qt(){}/**
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
 */function qe(n){return n&&n._delegate?n._delegate:n}class We{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const $e="[DEFAULT]";/**
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
 */class Oo{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Eo;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Do(e))try{this.getOrInitializeService({instanceIdentifier:$e})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=$e){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=$e){return this.instances.has(e)}getOptions(e=$e){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(!!r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Po(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=$e){return this.component?this.component.multipleInstances?e:$e:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Po(n){return n===$e?void 0:n}function Do(n){return n.instantiationMode==="EAGER"}/**
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
 */class No{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Oo(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var B;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(B||(B={}));const Lo={debug:B.DEBUG,verbose:B.VERBOSE,info:B.INFO,warn:B.WARN,error:B.ERROR,silent:B.SILENT},Mo=B.INFO,Uo={[B.DEBUG]:"log",[B.VERBOSE]:"log",[B.INFO]:"info",[B.WARN]:"warn",[B.ERROR]:"error"},Bo=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=Uo[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ls{constructor(e){this.name=e,this._logLevel=Mo,this._logHandler=Bo,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in B))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Lo[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,B.DEBUG,...e),this._logHandler(this,B.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,B.VERBOSE,...e),this._logHandler(this,B.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,B.INFO,...e),this._logHandler(this,B.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,B.WARN,...e),this._logHandler(this,B.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,B.ERROR,...e),this._logHandler(this,B.ERROR,...e)}}const Fo=(n,e)=>e.some(t=>n instanceof t);let sr,ir;function xo(){return sr||(sr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ho(){return ir||(ir=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const us=new WeakMap,sn=new WeakMap,ds=new WeakMap,Gt=new WeakMap,Sn=new WeakMap;function jo(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t(we(n.result)),s()},o=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&us.set(t,n)}).catch(()=>{}),Sn.set(e,n),e}function Vo(n){if(sn.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});sn.set(n,e)}let on={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return sn.get(n);if(e==="objectStoreNames")return n.objectStoreNames||ds.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return we(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function zo(n){on=n(on)}function Wo(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Kt(this),e,...t);return ds.set(r,e.sort?e.sort():[e]),we(r)}:Ho().includes(n)?function(...e){return n.apply(Kt(this),e),we(us.get(this))}:function(...e){return we(n.apply(Kt(this),e))}}function qo(n){return typeof n=="function"?Wo(n):(n instanceof IDBTransaction&&Vo(n),Fo(n,xo())?new Proxy(n,on):n)}function we(n){if(n instanceof IDBRequest)return jo(n);if(Gt.has(n))return Gt.get(n);const e=qo(n);return e!==n&&(Gt.set(n,e),Sn.set(e,n)),e}const Kt=n=>Sn.get(n);function Go(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(n,e),c=we(o);return r&&o.addEventListener("upgradeneeded",a=>{r(we(o.result),a.oldVersion,a.newVersion,we(o.transaction))}),t&&o.addEventListener("blocked",()=>t()),c.then(a=>{i&&a.addEventListener("close",()=>i()),s&&a.addEventListener("versionchange",()=>s())}).catch(()=>{}),c}const Ko=["get","getKey","getAll","getAllKeys","count"],Jo=["put","add","delete","clear"],Jt=new Map;function or(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Jt.get(e))return Jt.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=Jo.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Ko.includes(t)))return;const i=async function(o,...c){const a=this.transaction(o,s?"readwrite":"readonly");let l=a.store;return r&&(l=l.index(c.shift())),(await Promise.all([l[t](...c),s&&a.done]))[0]};return Jt.set(e,i),i}zo(n=>({...n,get:(e,t,r)=>or(e,t)||n.get(e,t,r),has:(e,t)=>!!or(e,t)||n.has(e,t)}));/**
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
 */class Yo{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Xo(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Xo(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const an="@firebase/app",ar="0.8.2";/**
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
 */const Pe=new ls("@firebase/app"),Qo="@firebase/app-compat",Zo="@firebase/analytics-compat",ea="@firebase/analytics",ta="@firebase/app-check-compat",na="@firebase/app-check",ra="@firebase/auth",sa="@firebase/auth-compat",ia="@firebase/database",oa="@firebase/database-compat",aa="@firebase/functions",ca="@firebase/functions-compat",la="@firebase/installations",ua="@firebase/installations-compat",da="@firebase/messaging",fa="@firebase/messaging-compat",ha="@firebase/performance",pa="@firebase/performance-compat",ma="@firebase/remote-config",ga="@firebase/remote-config-compat",_a="@firebase/storage",va="@firebase/storage-compat",ba="@firebase/firestore",ya="@firebase/firestore-compat",Ia="firebase",wa="9.12.1";/**
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
 */const cn="[DEFAULT]",Ea={[an]:"fire-core",[Qo]:"fire-core-compat",[ea]:"fire-analytics",[Zo]:"fire-analytics-compat",[na]:"fire-app-check",[ta]:"fire-app-check-compat",[ra]:"fire-auth",[sa]:"fire-auth-compat",[ia]:"fire-rtdb",[oa]:"fire-rtdb-compat",[aa]:"fire-fn",[ca]:"fire-fn-compat",[la]:"fire-iid",[ua]:"fire-iid-compat",[da]:"fire-fcm",[fa]:"fire-fcm-compat",[ha]:"fire-perf",[pa]:"fire-perf-compat",[ma]:"fire-rc",[ga]:"fire-rc-compat",[_a]:"fire-gcs",[va]:"fire-gcs-compat",[ba]:"fire-fst",[ya]:"fire-fst-compat","fire-js":"fire-js",[Ia]:"fire-js-all"};/**
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
 */const Rt=new Map,ln=new Map;function Ta(n,e){try{n.container.addComponent(e)}catch(t){Pe.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Ze(n){const e=n.name;if(ln.has(e))return Pe.debug(`There were multiple attempts to register component ${e}.`),!1;ln.set(e,n);for(const t of Rt.values())Ta(t,n);return!0}function fs(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
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
 */const Sa={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ee=new at("app","Firebase",Sa);/**
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
 */class ka{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new We("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ee.create("app-deleted",{appName:this._name})}}/**
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
 */const Lt=wa;function hs(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:cn,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Ee.create("bad-app-name",{appName:String(s)});if(t||(t=wo()),!t)throw Ee.create("no-options");const i=Rt.get(s);if(i){if(kt(t,i.options)&&kt(r,i.config))return i;throw Ee.create("duplicate-app",{appName:s})}const o=new No(s);for(const a of ln.values())o.addComponent(a);const c=new ka(t,r,o);return Rt.set(s,c),c}function Ra(n=cn){const e=Rt.get(n);if(!e&&n===cn)return hs();if(!e)throw Ee.create("no-app",{appName:n});return e}function Fe(n,e,t){var r;let s=(r=Ea[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Pe.warn(c.join(" "));return}Ze(new We(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const $a="firebase-heartbeat-database",Aa=1,et="firebase-heartbeat-store";let Yt=null;function ps(){return Yt||(Yt=Go($a,Aa,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(et)}}}).catch(n=>{throw Ee.create("idb-open",{originalErrorMessage:n.message})})),Yt}async function Ca(n){var e;try{return(await ps()).transaction(et).objectStore(et).get(ms(n))}catch(t){if(t instanceof Re)Pe.warn(t.message);else{const r=Ee.create("idb-get",{originalErrorMessage:(e=t)===null||e===void 0?void 0:e.message});Pe.warn(r.message)}}}async function cr(n,e){var t;try{const s=(await ps()).transaction(et,"readwrite");return await s.objectStore(et).put(e,ms(n)),s.done}catch(r){if(r instanceof Re)Pe.warn(r.message);else{const s=Ee.create("idb-set",{originalErrorMessage:(t=r)===null||t===void 0?void 0:t.message});Pe.warn(s.message)}}}function ms(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Oa=1024,Pa=30*24*60*60*1e3;class Da{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new La(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=lr();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=Pa}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=lr(),{heartbeatsToSend:t,unsentEntries:r}=Na(this._heartbeatsCache.heartbeats),s=os(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function lr(){return new Date().toISOString().substring(0,10)}function Na(n,e=Oa){const t=[];let r=n.slice();for(const s of n){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),ur(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),ur(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class La{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return mo()?go().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Ca(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return cr(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return cr(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function ur(n){return os(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Ma(n){Ze(new We("platform-logger",e=>new Yo(e),"PRIVATE")),Ze(new We("heartbeat",e=>new Da(e),"PRIVATE")),Fe(an,ar,n),Fe(an,ar,"esm2017"),Fe("fire-js","")}Ma("");var Ua="firebase",Ba="9.12.1";/**
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
 */Fe(Ua,Ba,"app");function kn(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function gs(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Fa=gs,_s=new at("auth","Firebase",gs());/**
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
 */const dr=new ls("@firebase/auth");function bt(n,...e){dr.logLevel<=B.ERROR&&dr.error(`Auth (${Lt}): ${n}`,...e)}/**
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
 */function pe(n,...e){throw Rn(n,...e)}function ae(n,...e){return Rn(n,...e)}function xa(n,e,t){const r=Object.assign(Object.assign({},Fa()),{[e]:t});return new at("auth","Firebase",r).create(e,{appName:n.name})}function Rn(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return _s.create(n,...e)}function I(n,e,...t){if(!n)throw Rn(e,...t)}function fe(n){const e="INTERNAL ASSERTION FAILED: "+n;throw bt(e),new Error(e)}function me(n,e){n||fe(e)}/**
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
 */const fr=new Map;function he(n){me(n instanceof Function,"Expected a class definition");let e=fr.get(n);return e?(me(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,fr.set(n,e),e)}/**
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
 */function Ha(n,e){const t=fs(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(kt(i,e!=null?e:{}))return s;pe(s,"already-initialized")}return t.initialize({options:e})}function ja(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(he);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function un(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Va(){return hr()==="http:"||hr()==="https:"}function hr(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function za(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Va()||fo()||"connection"in navigator)?navigator.onLine:!0}function Wa(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class lt{constructor(e,t){this.shortDelay=e,this.longDelay=t,me(t>e,"Short delay should be less than long delay!"),this.isMobile=uo()||ho()}get(){return za()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function $n(n,e){me(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class vs{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;fe("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;fe("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;fe("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const qa={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const Ga=new lt(3e4,6e4);function bs(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Mt(n,e,t,r,s={}){return ys(n,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=ct(Object.assign({key:n.config.apiKey},o)).slice(1),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/json",n.languageCode&&(a["X-Firebase-Locale"]=n.languageCode),vs.fetch()(ws(n,n.config.apiHost,t,c),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},i))})}async function ys(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},qa),e);try{const s=new Ka(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw gt(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[a,l]=c.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw gt(n,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw gt(n,"email-already-in-use",o);if(a==="USER_DISABLED")throw gt(n,"user-disabled",o);const d=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw xa(n,d,l);pe(n,d)}}catch(s){if(s instanceof Re)throw s;pe(n,"network-request-failed")}}async function Is(n,e,t,r,s={}){const i=await Mt(n,e,t,r,s);return"mfaPendingCredential"in i&&pe(n,"multi-factor-auth-required",{_serverResponse:i}),i}function ws(n,e,t,r){const s=`${e}${t}?${r}`;return n.config.emulator?$n(n.config,s):`${n.config.apiScheme}://${s}`}class Ka{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(ae(this.auth,"network-request-failed")),Ga.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function gt(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=ae(n,e,r);return s.customData._tokenResponse=t,s}/**
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
 */async function Ja(n,e){return Mt(n,"POST","/v1/accounts:delete",e)}async function Ya(n,e){return Mt(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Xe(n){if(!!n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Xa(n,e=!1){const t=qe(n),r=await t.getIdToken(e),s=An(r);I(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Xe(Xt(s.auth_time)),issuedAtTime:Xe(Xt(s.iat)),expirationTime:Xe(Xt(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Xt(n){return Number(n)*1e3}function An(n){var e;const[t,r,s]=n.split(".");if(t===void 0||r===void 0||s===void 0)return bt("JWT malformed, contained fewer than 3 sections"),null;try{const i=as(r);return i?JSON.parse(i):(bt("Failed to decode base64 JWT payload"),null)}catch(i){return bt("Caught error parsing JWT payload as JSON",(e=i)===null||e===void 0?void 0:e.toString()),null}}function Qa(n){const e=An(n);return I(e,"internal-error"),I(typeof e.exp<"u","internal-error"),I(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function tt(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Re&&Za(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Za({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class ec{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(t){((e=t)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Es{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Xe(this.lastLoginAt),this.creationTime=Xe(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function $t(n){var e;const t=n.auth,r=await n.getIdToken(),s=await tt(n,Ya(t,{idToken:r}));I(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?rc(i.providerUserInfo):[],c=nc(n.providerData,o),a=n.isAnonymous,l=!(n.email&&i.passwordHash)&&!(c!=null&&c.length),d=a?l:!1,u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Es(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(n,u)}async function tc(n){const e=qe(n);await $t(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function nc(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function rc(n){return n.map(e=>{var{providerId:t}=e,r=kn(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function sc(n,e){const t=await ys(n,{},async()=>{const r=ct({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,o=ws(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",vs.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
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
 */class nt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){I(e.idToken,"internal-error"),I(typeof e.idToken<"u","internal-error"),I(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Qa(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return I(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await sc(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,o=new nt;return r&&(I(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(I(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(I(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new nt,this.toJSON())}_performRefresh(){return fe("not implemented")}}/**
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
 */function _e(n,e){I(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Ce{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=kn(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ec(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Es(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await tt(this,this.stsTokenManager.getToken(this.auth,e));return I(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Xa(this,e)}reload(){return tc(this)}_assign(e){this!==e&&(I(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Ce(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){I(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await $t(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await tt(this,Ja(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,o,c,a,l,d;const u=(r=t.displayName)!==null&&r!==void 0?r:void 0,f=(s=t.email)!==null&&s!==void 0?s:void 0,b=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,g=(o=t.photoURL)!==null&&o!==void 0?o:void 0,m=(c=t.tenantId)!==null&&c!==void 0?c:void 0,_=(a=t._redirectEventId)!==null&&a!==void 0?a:void 0,O=(l=t.createdAt)!==null&&l!==void 0?l:void 0,U=(d=t.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:N,emailVerified:L,isAnonymous:x,providerData:j,stsTokenManager:D}=t;I(N&&D,e,"internal-error");const V=nt.fromJSON(this.name,D);I(typeof N=="string",e,"internal-error"),_e(u,e.name),_e(f,e.name),I(typeof L=="boolean",e,"internal-error"),I(typeof x=="boolean",e,"internal-error"),_e(b,e.name),_e(g,e.name),_e(m,e.name),_e(_,e.name),_e(O,e.name),_e(U,e.name);const K=new Ce({uid:N,auth:e,email:f,emailVerified:L,displayName:u,isAnonymous:x,photoURL:g,phoneNumber:b,tenantId:m,stsTokenManager:V,createdAt:O,lastLoginAt:U});return j&&Array.isArray(j)&&(K.providerData=j.map(z=>Object.assign({},z))),_&&(K._redirectEventId=_),K}static async _fromIdTokenResponse(e,t,r=!1){const s=new nt;s.updateFromServerResponse(t);const i=new Ce({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await $t(i),i}}/**
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
 */class Ts{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Ts.type="NONE";const pr=Ts;/**
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
 */function yt(n,e,t){return`firebase:${n}:${e}:${t}`}class xe{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=yt(this.userKey,s.apiKey,i),this.fullPersistenceKey=yt("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ce._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new xe(he(pr),e,r);const s=(await Promise.all(t.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||he(pr);const o=yt(r,e.config.apiKey,e.name);let c=null;for(const l of t)try{const d=await l._get(o);if(d){const u=Ce._fromJSON(e,d);l!==i&&(c=u),i=l;break}}catch{}const a=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!a.length?new xe(i,e,r):(i=a[0],c&&await i._set(o,c.toJSON()),await Promise.all(t.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new xe(i,e,r))}}/**
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
 */function mr(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Rs(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ss(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(As(e))return"Blackberry";if(Cs(e))return"Webos";if(Cn(e))return"Safari";if((e.includes("chrome/")||ks(e))&&!e.includes("edge/"))return"Chrome";if($s(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Ss(n=q()){return/firefox\//i.test(n)}function Cn(n=q()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ks(n=q()){return/crios\//i.test(n)}function Rs(n=q()){return/iemobile/i.test(n)}function $s(n=q()){return/android/i.test(n)}function As(n=q()){return/blackberry/i.test(n)}function Cs(n=q()){return/webos/i.test(n)}function Ut(n=q()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function ic(n=q()){var e;return Ut(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function oc(){return po()&&document.documentMode===10}function Os(n=q()){return Ut(n)||$s(n)||Cs(n)||As(n)||/windows phone/i.test(n)||Rs(n)}function ac(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Ps(n,e=[]){let t;switch(n){case"Browser":t=mr(q());break;case"Worker":t=`${mr(q())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Lt}/${r}`}/**
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
 */class cc{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((o,c)=>{try{const a=e(i);o(a)}catch(a){c(a)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){var t;if(this.auth.currentUser===e)return;const r=[];try{for(const s of this.queue)await s(e),s.onAbort&&r.push(s.onAbort)}catch(s){r.reverse();for(const i of r)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(t=s)===null||t===void 0?void 0:t.message})}}}/**
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
 */class lc{constructor(e,t,r){this.app=e,this.heartbeatServiceProvider=t,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new gr(this),this.idTokenSubscription=new gr(this),this.beforeStateQueue=new cc(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=_s,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=he(t)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await xe.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=s==null?void 0:s._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===c)&&(a==null?void 0:a.user)&&(s=a.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return I(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){var t;try{await $t(e)}catch(r){if(((t=r)===null||t===void 0?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Wa()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?qe(e):null;return t&&I(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&I(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(he(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new at("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&he(e)||this._popupRedirectResolver;I(t,this,"argument-error"),this.redirectPersistenceManager=await xe.create(this,[he(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return I(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof t=="function"?e.addObserver(t,r,s):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return I(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ps(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(t["X-Firebase-Client"]=r),t}}function Bt(n){return qe(n)}class gr{constructor(e){this.auth=e,this.observer=null,this.addObserver=$o(t=>this.observer=t)}get next(){return I(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function uc(n,e,t){const r=Bt(n);I(r._canInitEmulator,r,"emulator-config-failed"),I(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(t!=null&&t.disableWarnings),i=Ds(e),{host:o,port:c}=dc(e),a=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||fc()}function Ds(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function dc(n){const e=Ds(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:_r(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:_r(o)}}}function _r(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function fc(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Ns{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return fe("not implemented")}_getIdTokenResponse(e){return fe("not implemented")}_linkToIdToken(e,t){return fe("not implemented")}_getReauthenticationResolver(e){return fe("not implemented")}}/**
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
 */async function He(n,e){return Is(n,"POST","/v1/accounts:signInWithIdp",bs(n,e))}/**
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
 */const hc="http://localhost";class De extends Ns{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new De(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):pe("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=kn(t,["providerId","signInMethod"]);if(!r||!s)return null;const o=new De(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return He(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,He(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,He(e,t)}buildRequest(){const e={requestUri:hc,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ct(t)}return e}}/**
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
 */class Ls{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ut extends Ls{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ve extends ut{constructor(){super("facebook.com")}static credential(e){return De._fromParams({providerId:ve.PROVIDER_ID,signInMethod:ve.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ve.credentialFromTaggedObject(e)}static credentialFromError(e){return ve.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ve.credential(e.oauthAccessToken)}catch{return null}}}ve.FACEBOOK_SIGN_IN_METHOD="facebook.com";ve.PROVIDER_ID="facebook.com";/**
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
 */class be extends ut{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return De._fromParams({providerId:be.PROVIDER_ID,signInMethod:be.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return be.credentialFromTaggedObject(e)}static credentialFromError(e){return be.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return be.credential(t,r)}catch{return null}}}be.GOOGLE_SIGN_IN_METHOD="google.com";be.PROVIDER_ID="google.com";/**
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
 */class ye extends ut{constructor(){super("github.com")}static credential(e){return De._fromParams({providerId:ye.PROVIDER_ID,signInMethod:ye.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ye.credentialFromTaggedObject(e)}static credentialFromError(e){return ye.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ye.credential(e.oauthAccessToken)}catch{return null}}}ye.GITHUB_SIGN_IN_METHOD="github.com";ye.PROVIDER_ID="github.com";/**
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
 */class Ie extends ut{constructor(){super("twitter.com")}static credential(e,t){return De._fromParams({providerId:Ie.PROVIDER_ID,signInMethod:Ie.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ie.credentialFromTaggedObject(e)}static credentialFromError(e){return Ie.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Ie.credential(t,r)}catch{return null}}}Ie.TWITTER_SIGN_IN_METHOD="twitter.com";Ie.PROVIDER_ID="twitter.com";/**
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
 */async function pc(n,e){return Is(n,"POST","/v1/accounts:signUp",bs(n,e))}/**
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
 */class Ne{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await Ce._fromIdTokenResponse(e,r,s),o=vr(r);return new Ne({user:i,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=vr(r);return new Ne({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function vr(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class At extends Re{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,At.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new At(e,t,r,s)}}function Ms(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?At._fromErrorAndOperation(n,i,e,r):i})}async function mc(n,e,t=!1){const r=await tt(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Ne._forOperation(n,"link",r)}/**
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
 */async function gc(n,e,t=!1){var r;const{auth:s}=n,i="reauthenticate";try{const o=await tt(n,Ms(s,i,e,n),t);I(o.idToken,s,"internal-error");const c=An(o.idToken);I(c,s,"internal-error");const{sub:a}=c;return I(n.uid===a,s,"user-mismatch"),Ne._forOperation(n,i,o)}catch(o){throw((r=o)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&pe(s,"user-mismatch"),o}}/**
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
 */async function _c(n,e,t=!1){const r="signIn",s=await Ms(n,r,e),i=await Ne._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function vc(n,e,t){const r=Bt(n),s=await pc(r,{returnSecureToken:!0,email:e,password:t}),i=await Ne._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(i.user),i}function bc(n,e,t,r){return qe(n).onIdTokenChanged(e,t,r)}function yc(n,e,t){return qe(n).beforeAuthStateChanged(e,t)}const Ct="__sak";/**
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
 */class Us{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ct,"1"),this.storage.removeItem(Ct),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Ic(){const n=q();return Cn(n)||Ut(n)}const wc=1e3,Ec=10;class Bs extends Us{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Ic()&&ac(),this.fallbackToPolling=Os(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,a)=>{this.notifyListeners(o,a)});return}const r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}const s=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);oc()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Ec):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},wc)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Bs.type="LOCAL";const Tc=Bs;/**
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
 */class Fs extends Us{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Fs.type="SESSION";const xs=Fs;/**
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
 */function Sc(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Ft{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Ft(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async l=>l(t.origin,i)),a=await Sc(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:a})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ft.receivers=[];/**
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
 */function On(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class kc{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,a)=>{const l=On("",20);s.port1.start();const d=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(u){const f=u;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(f.data.response);break;default:clearTimeout(d),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function ce(){return window}function Rc(n){ce().location.href=n}/**
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
 */function Hs(){return typeof ce().WorkerGlobalScope<"u"&&typeof ce().importScripts=="function"}async function $c(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Ac(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Cc(){return Hs()?self:null}/**
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
 */const js="firebaseLocalStorageDb",Oc=1,Ot="firebaseLocalStorage",Vs="fbase_key";class dt{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function xt(n,e){return n.transaction([Ot],e?"readwrite":"readonly").objectStore(Ot)}function Pc(){const n=indexedDB.deleteDatabase(js);return new dt(n).toPromise()}function dn(){const n=indexedDB.open(js,Oc);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Ot,{keyPath:Vs})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Ot)?e(r):(r.close(),await Pc(),e(await dn()))})})}async function br(n,e,t){const r=xt(n,!0).put({[Vs]:e,value:t});return new dt(r).toPromise()}async function Dc(n,e){const t=xt(n,!1).get(e),r=await new dt(t).toPromise();return r===void 0?null:r.value}function yr(n,e){const t=xt(n,!0).delete(e);return new dt(t).toPromise()}const Nc=800,Lc=3;class zs{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await dn(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Lc)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Hs()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ft._getInstance(Cc()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await $c(),!this.activeServiceWorker)return;this.sender=new kc(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((t=r[0])===null||t===void 0?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Ac()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await dn();return await br(e,Ct,"1"),await yr(e,Ct),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>br(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Dc(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>yr(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=xt(s,!1).getAll();return new dt(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Nc)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}zs.type="LOCAL";const Mc=zs;/**
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
 */function Uc(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function Bc(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=ae("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",Uc().appendChild(r)})}function Fc(n){return`__${n}${Math.floor(Math.random()*1e6)}`}new lt(3e4,6e4);/**
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
 */function xc(n,e){return e?he(e):(I(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Pn extends Ns{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return He(e,this._buildIdpRequest())}_linkToIdToken(e,t){return He(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return He(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Hc(n){return _c(n.auth,new Pn(n),n.bypassAuthState)}function jc(n){const{auth:e,user:t}=n;return I(t,e,"internal-error"),gc(t,new Pn(n),n.bypassAuthState)}async function Vc(n){const{auth:e,user:t}=n;return I(t,e,"internal-error"),mc(t,new Pn(n),n.bypassAuthState)}/**
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
 */class Ws{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(a))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Hc;case"linkViaPopup":case"linkViaRedirect":return Vc;case"reauthViaPopup":case"reauthViaRedirect":return jc;default:pe(this.auth,"internal-error")}}resolve(e){me(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){me(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const zc=new lt(2e3,1e4);class Ue extends Ws{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Ue.currentPopupAction&&Ue.currentPopupAction.cancel(),Ue.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return I(e,this.auth,"internal-error"),e}async onExecution(){me(this.filter.length===1,"Popup operations only handle one event");const e=On();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ae(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ae(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ue.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ae(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,zc.get())};e()}}Ue.currentPopupAction=null;/**
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
 */const Wc="pendingRedirect",It=new Map;class qc extends Ws{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=It.get(this.auth._key());if(!e){try{const r=await Gc(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}It.set(this.auth._key(),e)}return this.bypassAuthState||It.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Gc(n,e){const t=Yc(e),r=Jc(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function Kc(n,e){It.set(n._key(),e)}function Jc(n){return he(n._redirectPersistence)}function Yc(n){return yt(Wc,n.config.apiKey,n.name)}async function Xc(n,e,t=!1){const r=Bt(n),s=xc(r,e),o=await new qc(r,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const Qc=10*60*1e3;class Zc{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!el(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!qs(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(ae(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Qc&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ir(e))}saveEventToCache(e){this.cachedEventUids.add(Ir(e)),this.lastProcessedEventTime=Date.now()}}function Ir(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function qs({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function el(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return qs(n);default:return!1}}/**
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
 */async function tl(n,e={}){return Mt(n,"GET","/v1/projects",e)}/**
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
 */const nl=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,rl=/^https?/;async function sl(n){if(n.config.emulator)return;const{authorizedDomains:e}=await tl(n);for(const t of e)try{if(il(t))return}catch{}pe(n,"unauthorized-domain")}function il(n){const e=un(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!rl.test(t))return!1;if(nl.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const ol=new lt(3e4,6e4);function wr(){const n=ce().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function al(n){return new Promise((e,t)=>{var r,s,i;function o(){wr(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{wr(),t(ae(n,"network-request-failed"))},timeout:ol.get()})}if(!((s=(r=ce().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=ce().gapi)===null||i===void 0)&&i.load)o();else{const c=Fc("iframefcb");return ce()[c]=()=>{gapi.load?o():t(ae(n,"network-request-failed"))},Bc(`https://apis.google.com/js/api.js?onload=${c}`).catch(a=>t(a))}}).catch(e=>{throw wt=null,e})}let wt=null;function cl(n){return wt=wt||al(n),wt}/**
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
 */const ll=new lt(5e3,15e3),ul="__/auth/iframe",dl="emulator/auth/iframe",fl={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},hl=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function pl(n){const e=n.config;I(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?$n(e,dl):`https://${n.config.authDomain}/${ul}`,r={apiKey:e.apiKey,appName:n.name,v:Lt},s=hl.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${ct(r).slice(1)}`}async function ml(n){const e=await cl(n),t=ce().gapi;return I(t,n,"internal-error"),e.open({where:document.body,url:pl(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:fl,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=ae(n,"network-request-failed"),c=ce().setTimeout(()=>{i(o)},ll.get());function a(){ce().clearTimeout(c),s(r)}r.ping(a).then(a,()=>{i(o)})}))}/**
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
 */const gl={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},_l=500,vl=600,bl="_blank",yl="http://localhost";class Er{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Il(n,e,t,r=_l,s=vl){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const a=Object.assign(Object.assign({},gl),{width:r.toString(),height:s.toString(),top:i,left:o}),l=q().toLowerCase();t&&(c=ks(l)?bl:t),Ss(l)&&(e=e||yl,a.scrollbars="yes");const d=Object.entries(a).reduce((f,[b,g])=>`${f}${b}=${g},`,"");if(ic(l)&&c!=="_self")return wl(e||"",c),new Er(null);const u=window.open(e||"",c,d);I(u,n,"popup-blocked");try{u.focus()}catch{}return new Er(u)}function wl(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const El="__/auth/handler",Tl="emulator/auth/handler";function Tr(n,e,t,r,s,i){I(n.config.authDomain,n,"auth-domain-config-required"),I(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Lt,eventId:s};if(e instanceof Ls){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Ro(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[a,l]of Object.entries(i||{}))o[a]=l}if(e instanceof ut){const a=e.getScopes().filter(l=>l!=="");a.length>0&&(o.scopes=a.join(","))}n.tenantId&&(o.tid=n.tenantId);const c=o;for(const a of Object.keys(c))c[a]===void 0&&delete c[a];return`${Sl(n)}?${ct(c).slice(1)}`}function Sl({config:n}){return n.emulator?$n(n,Tl):`https://${n.authDomain}/${El}`}/**
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
 */const Qt="webStorageSupport";class kl{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=xs,this._completeRedirectFn=Xc,this._overrideRedirectResult=Kc}async _openPopup(e,t,r,s){var i;me((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Tr(e,t,r,un(),s);return Il(e,o,On())}async _openRedirect(e,t,r,s){return await this._originValidation(e),Rc(Tr(e,t,r,un(),s)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(me(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await ml(e),r=new Zc(e);return t.register("authEvent",s=>(I(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Qt,{type:Qt},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Qt];o!==void 0&&t(!!o),pe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=sl(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Os()||Cn()||Ut()}}const Rl=kl;var Sr="@firebase/auth",kr="0.20.10";/**
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
 */class $l{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{var s;e(((s=r)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);!t||(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){I(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Al(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Cl(n){Ze(new We("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=r.options;return((c,a)=>{I(i&&!i.includes(":"),"invalid-api-key",{appName:c.name}),I(!(o!=null&&o.includes(":")),"argument-error",{appName:c.name});const l={apiKey:i,authDomain:o,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ps(n)},d=new lc(c,a,l);return ja(d,t),d})(r,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Ze(new We("auth-internal",e=>{const t=Bt(e.getProvider("auth").getImmediate());return(r=>new $l(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Fe(Sr,kr,Al(n)),Fe(Sr,kr,"esm2017")}/**
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
 */const Ol=5*60,Pl=cs("authIdTokenMaxAge")||Ol;let Rr=null;const Dl=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Pl)return;const s=t==null?void 0:t.token;Rr!==s&&(Rr=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Nl(n=Ra()){const e=fs(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Ha(n,{popupRedirectResolver:Rl,persistence:[Mc,Tc,xs]}),r=cs("authTokenSyncURL");if(r){const i=Dl(r);yc(t,i,()=>i(t.currentUser)),bc(t,o=>i(o))}const s=Io("auth");return s&&uc(t,`http://${s}`),t}Cl("Browser");const Ll={apiKey:"AIzaSyDGi3ndUC1b4SFNstliSSVryu7_ymXEkZc",authDomain:"match-home-7d1f9.firebaseapp.com",databaseURL:"https://match-home-7d1f9-default-rtdb.firebaseio.com",projectId:"match-home-7d1f9",storageBucket:"match-home-7d1f9.appspot.com",messagingSenderId:"747751099607",appId:"1:747751099607:web:29d1e5beda87c847dfb492"},Ml=hs(Ll),Ul=Nl(Ml);function Bl(n){let e,t,r,s,i,o,c,a,l,d,u,f,b,g,m,_;return{c(){e=E("div"),t=E("div"),t.innerHTML="<h1>Estas en Registro</h1>",r=C(),s=E("h3"),s.textContent="Registro",i=C(),o=E("label"),c=W(`Email\r
          `),a=E("input"),l=C(),d=E("label"),u=W(`Password\r
          `),f=E("input"),b=C(),g=E("button"),g.textContent="Registrarme",M(t,"class","title-secction svelte-1o6efp"),a.required=!0,M(a,"type","email"),M(a,"name","email"),M(o,"class","form_label"),f.required=!0,M(f,"type","password"),M(f,"name","password"),M(d,"class","form_label"),M(e,"class","container")},m(O,U){A(O,e,U),h(e,t),h(e,r),h(e,s),h(e,i),h(e,o),h(o,c),h(o,a),h(e,l),h(e,d),h(d,u),h(d,f),h(e,b),h(e,g),m||(_=[Be(a,"input",n[2]),Be(f,"input",n[3]),Be(g,"click",n[1])],m=!0)},p:F,i:F,o:F,d(O){O&&k(e),m=!1,ke(_)}}}function Fl(n){const e=ts();let t={email:"",password:""};const r=c=>{t={...t,[c.target.name]:c.target.value},console.log(t)};return[r,async()=>{try{await vc(Ul,t.email,t.password),e("/")}catch(c){console.log(c)}},c=>r(c),c=>r(c)]}class Dn extends te{constructor(e){super(),ee(this,e,Fl,Bl,J,{})}}const xl="/to-deploy-mh/assets/team.31fda88c.png";function Hl(n){let e,t,r,s,i,o,c,a;return{c(){e=E("div"),t=E("div"),r=E("p"),r.textContent="Sinergias",s=C(),i=E("img"),c=C(),a=E("h1"),a.textContent="Sinergias",Gs(i.src,o=xl)||M(i,"src",o),M(i,"alt","sinergias"),M(i,"class","profile-img"),M(a,"class","name svelte-zdqvq1"),M(t,"class","optionCard svelte-zdqvq1"),M(e,"class","container")},m(l,d){A(l,e,d),h(e,t),h(t,r),h(t,s),h(t,i),h(t,c),h(t,a)},p:F,d(l){l&&k(e)}}}function jl(n){let e,t;return e=new re({props:{to:"/sinergias",title:"sinergias",$$slots:{default:[Hl]},$$scope:{ctx:n}}}),{c(){$(e.$$.fragment)},m(r,s){T(e,r,s),t=!0},p(r,s){const i={};s&1&&(i.$$scope={dirty:s,ctx:r}),e.$set(i)},i(r){t||(v(e.$$.fragment,r),t=!0)},o(r){y(e.$$.fragment,r),t=!1},d(r){S(e,r)}}}function Vl(n){let e,t;return e=new ns({}),{c(){$(e.$$.fragment)},m(r,s){T(e,r,s),t=!0},i(r){t||(v(e.$$.fragment,r),t=!0)},o(r){y(e.$$.fragment,r),t=!1},d(r){S(e,r)}}}function zl(n){let e,t;return e=new rs({}),{c(){$(e.$$.fragment)},m(r,s){T(e,r,s),t=!0},i(r){t||(v(e.$$.fragment,r),t=!0)},o(r){y(e.$$.fragment,r),t=!1},d(r){S(e,r)}}}function Wl(n){let e,t;return e=new Dn({}),{c(){$(e.$$.fragment)},m(r,s){T(e,r,s),t=!0},i(r){t||(v(e.$$.fragment,r),t=!0)},o(r){y(e.$$.fragment,r),t=!1},d(r){S(e,r)}}}function ql(n){let e,t;return e=new Dn({}),{c(){$(e.$$.fragment)},m(r,s){T(e,r,s),t=!0},i(r){t||(v(e.$$.fragment,r),t=!0)},o(r){y(e.$$.fragment,r),t=!1},d(r){S(e,r)}}}function Gl(n){let e,t,r,s,i,o,c,a,l,d,u,f,b,g;return r=new En({props:{$$slots:{default:[jl]},$$scope:{ctx:n}}}),i=new se({props:{path:"/agenda",$$slots:{default:[Vl]},$$scope:{ctx:n}}}),c=new se({props:{path:"/sinergias",$$slots:{default:[zl]},$$scope:{ctx:n}}}),l=new se({props:{path:"/login",$$slots:{default:[Wl]},$$scope:{ctx:n}}}),u=new se({props:{path:"/registro",$$slots:{default:[ql]},$$scope:{ctx:n}}}),{c(){e=E("body"),t=E("div"),$(r.$$.fragment),s=C(),$(i.$$.fragment),o=C(),$(c.$$.fragment),a=C(),$(l.$$.fragment),d=C(),$(u.$$.fragment),f=C(),b=E("div"),M(t,"class","wrapper-grid svelte-zdqvq1"),M(b,"class","")},m(m,_){A(m,e,_),h(e,t),T(r,t,null),h(t,s),T(i,t,null),h(t,o),T(c,t,null),h(t,a),T(l,t,null),h(t,d),T(u,t,null),h(e,f),h(e,b),g=!0},p(m,[_]){const O={};_&1&&(O.$$scope={dirty:_,ctx:m}),r.$set(O);const U={};_&1&&(U.$$scope={dirty:_,ctx:m}),i.$set(U);const N={};_&1&&(N.$$scope={dirty:_,ctx:m}),c.$set(N);const L={};_&1&&(L.$$scope={dirty:_,ctx:m}),l.$set(L);const x={};_&1&&(x.$$scope={dirty:_,ctx:m}),u.$set(x)},i(m){g||(v(r.$$.fragment,m),v(i.$$.fragment,m),v(c.$$.fragment,m),v(l.$$.fragment,m),v(u.$$.fragment,m),g=!0)},o(m){y(r.$$.fragment,m),y(i.$$.fragment,m),y(c.$$.fragment,m),y(l.$$.fragment,m),y(u.$$.fragment,m),g=!1},d(m){m&&k(e),S(r),S(i),S(c),S(l),S(u)}}}class Kl extends te{constructor(e){super(),ee(this,e,null,Gl,J,{})}}function Jl(n){let e;return{c(){e=E("h1"),e.textContent="Estas en About"},m(t,r){A(t,e,r)},p:F,i:F,o:F,d(t){t&&k(e)}}}class Yl extends te{constructor(e){super(),ee(this,e,null,Jl,J,{})}}function Xl(n){let e,t,r,s,i,o,c,a,l,d,u,f,b,g,m,_;return{c(){e=E("div"),t=E("div"),t.innerHTML="<h1>Estas en Login</h1>",r=C(),s=E("h3"),s.textContent="Login",i=C(),o=E("label"),c=W(`Email\r
          `),a=E("input"),l=C(),d=E("label"),u=W(`Password\r
          `),f=E("input"),b=C(),g=E("button"),g.textContent="Enviar",M(t,"class","title-secction svelte-1o6efp"),a.required=!0,M(a,"type","email"),M(a,"name","email"),M(o,"class","form_label"),f.required=!0,M(f,"type","password"),M(f,"name","password"),M(d,"class","form_label"),M(e,"class","container")},m(O,U){A(O,e,U),h(e,t),h(e,r),h(e,s),h(e,i),h(e,o),h(o,c),h(o,a),h(e,l),h(e,d),h(d,u),h(d,f),h(e,b),h(e,g),m||(_=[Be(a,"input",n[1]),Be(f,"input",n[2])],m=!0)},p:F,i:F,o:F,d(O){O&&k(e),m=!1,ke(_)}}}function Ql(n){let e={email:"",password:""};const t=i=>{e={...e,[i.target.name]:i.target.value},console.log(e)};return[t,i=>t(i),i=>t(i)]}class Zl extends te{constructor(e){super(),ee(this,e,Ql,Xl,J,{})}}const eu=Q(!1);function tu(n){let e;return{c(){e=W("Home")},m(t,r){A(t,e,r)},d(t){t&&k(e)}}}function nu(n){let e;return{c(){e=W("Contactos")},m(t,r){A(t,e,r)},d(t){t&&k(e)}}}function ru(n){let e;return{c(){e=W("Propiedades")},m(t,r){A(t,e,r)},d(t){t&&k(e)}}}function su(n){let e;return{c(){e=W("Captaci\xF3n")},m(t,r){A(t,e,r)},d(t){t&&k(e)}}}function iu(n){let e;return{c(){e=W("Agenda")},m(t,r){A(t,e,r)},d(t){t&&k(e)}}}function ou(n){let e;return{c(){e=W("Sinergias")},m(t,r){A(t,e,r)},d(t){t&&k(e)}}}function au(n){let e;return{c(){e=W("About")},m(t,r){A(t,e,r)},d(t){t&&k(e)}}}function $r(n){let e,t,r,s;return e=new re({props:{to:"registro",$$slots:{default:[cu]},$$scope:{ctx:n}}}),r=new re({props:{to:"login",$$slots:{default:[lu]},$$scope:{ctx:n}}}),{c(){$(e.$$.fragment),t=C(),$(r.$$.fragment)},m(i,o){T(e,i,o),A(i,t,o),T(r,i,o),s=!0},i(i){s||(v(e.$$.fragment,i),v(r.$$.fragment,i),s=!0)},o(i){y(e.$$.fragment,i),y(r.$$.fragment,i),s=!1},d(i){S(e,i),i&&k(t),S(r,i)}}}function cu(n){let e;return{c(){e=W("Registro")},m(t,r){A(t,e,r)},d(t){t&&k(e)}}}function lu(n){let e;return{c(){e=W("Login")},m(t,r){A(t,e,r)},d(t){t&&k(e)}}}function uu(n){let e,t;return e=new Kl({}),{c(){$(e.$$.fragment)},m(r,s){T(e,r,s),t=!0},i(r){t||(v(e.$$.fragment,r),t=!0)},o(r){y(e.$$.fragment,r),t=!1},d(r){S(e,r)}}}function du(n){let e,t;return e=new ns({}),{c(){$(e.$$.fragment)},m(r,s){T(e,r,s),t=!0},i(r){t||(v(e.$$.fragment,r),t=!0)},o(r){y(e.$$.fragment,r),t=!1},d(r){S(e,r)}}}function fu(n){let e,t;return e=new rs({}),{c(){$(e.$$.fragment)},m(r,s){T(e,r,s),t=!0},i(r){t||(v(e.$$.fragment,r),t=!0)},o(r){y(e.$$.fragment,r),t=!1},d(r){S(e,r)}}}function hu(n){let e,t;return e=new Yl({}),{c(){$(e.$$.fragment)},m(r,s){T(e,r,s),t=!0},i(r){t||(v(e.$$.fragment,r),t=!0)},o(r){y(e.$$.fragment,r),t=!1},d(r){S(e,r)}}}function pu(n){let e,t;return e=new Zl({}),{c(){$(e.$$.fragment)},m(r,s){T(e,r,s),t=!0},i(r){t||(v(e.$$.fragment,r),t=!0)},o(r){y(e.$$.fragment,r),t=!1},d(r){S(e,r)}}}function mu(n){let e,t;return e=new Dn({}),{c(){$(e.$$.fragment)},m(r,s){T(e,r,s),t=!0},i(r){t||(v(e.$$.fragment,r),t=!0)},o(r){y(e.$$.fragment,r),t=!1},d(r){S(e,r)}}}function gu(n){let e,t,r,s,i,o,c,a,l,d,u,f,b,g,m,_,O,U,N,L,x,j,D,V,K,z,ue,R,ge,Y,ne;s=new re({props:{to:"/",$$slots:{default:[tu]},$$scope:{ctx:n}}}),o=new re({props:{to:"contactos",$$slots:{default:[nu]},$$scope:{ctx:n}}}),a=new re({props:{to:"propiedades",$$slots:{default:[ru]},$$scope:{ctx:n}}}),d=new re({props:{to:"captacion",$$slots:{default:[su]},$$scope:{ctx:n}}}),f=new re({props:{to:"agenda",$$slots:{default:[iu]},$$scope:{ctx:n}}}),g=new re({props:{to:"sinergias",$$slots:{default:[ou]},$$scope:{ctx:n}}}),_=new re({props:{to:"about",$$slots:{default:[au]},$$scope:{ctx:n}}});let H=!n[0]&&$r(n);return L=new se({props:{path:"/",$$slots:{default:[uu]},$$scope:{ctx:n}}}),j=new se({props:{path:"agenda",$$slots:{default:[du]},$$scope:{ctx:n}}}),V=new se({props:{path:"sinergias",$$slots:{default:[fu]},$$scope:{ctx:n}}}),z=new se({props:{path:"about",$$slots:{default:[hu]},$$scope:{ctx:n}}}),R=new se({props:{path:"login",$$slots:{default:[pu]},$$scope:{ctx:n}}}),Y=new se({props:{path:"registro",$$slots:{default:[mu]},$$scope:{ctx:n}}}),{c(){e=E("div"),t=E("header"),r=E("nav"),$(s.$$.fragment),i=C(),$(o.$$.fragment),c=C(),$(a.$$.fragment),l=C(),$(d.$$.fragment),u=C(),$(f.$$.fragment),b=C(),$(g.$$.fragment),m=C(),$(_.$$.fragment),O=C(),H&&H.c(),U=C(),N=E("main"),$(L.$$.fragment),x=C(),$(j.$$.fragment),D=C(),$(V.$$.fragment),K=C(),$(z.$$.fragment),ue=C(),$(R.$$.fragment),ge=C(),$(Y.$$.fragment),M(e,"class","navMenu")},m(p,P){A(p,e,P),h(e,t),h(t,r),T(s,r,null),h(r,i),T(o,r,null),h(r,c),T(a,r,null),h(r,l),T(d,r,null),h(r,u),T(f,r,null),h(r,b),T(g,r,null),h(r,m),T(_,r,null),h(r,O),H&&H.m(r,null),A(p,U,P),A(p,N,P),T(L,N,null),h(N,x),T(j,N,null),h(N,D),T(V,N,null),h(N,K),T(z,N,null),h(N,ue),T(R,N,null),h(N,ge),T(Y,N,null),ne=!0},p(p,P){const ft={};P&2&&(ft.$$scope={dirty:P,ctx:p}),s.$set(ft);const ht={};P&2&&(ht.$$scope={dirty:P,ctx:p}),o.$set(ht);const w={};P&2&&(w.$$scope={dirty:P,ctx:p}),a.$set(w);const G={};P&2&&(G.$$scope={dirty:P,ctx:p}),d.$set(G);const X={};P&2&&(X.$$scope={dirty:P,ctx:p}),f.$set(X);const Nn={};P&2&&(Nn.$$scope={dirty:P,ctx:p}),g.$set(Nn);const Ln={};P&2&&(Ln.$$scope={dirty:P,ctx:p}),_.$set(Ln),p[0]?H&&(Pt(),y(H,1,1,()=>{H=null}),Dt()):H?P&1&&v(H,1):(H=$r(p),H.c(),v(H,1),H.m(r,null));const Mn={};P&2&&(Mn.$$scope={dirty:P,ctx:p}),L.$set(Mn);const Un={};P&2&&(Un.$$scope={dirty:P,ctx:p}),j.$set(Un);const Bn={};P&2&&(Bn.$$scope={dirty:P,ctx:p}),V.$set(Bn);const Fn={};P&2&&(Fn.$$scope={dirty:P,ctx:p}),z.$set(Fn);const xn={};P&2&&(xn.$$scope={dirty:P,ctx:p}),R.$set(xn);const Hn={};P&2&&(Hn.$$scope={dirty:P,ctx:p}),Y.$set(Hn)},i(p){ne||(v(s.$$.fragment,p),v(o.$$.fragment,p),v(a.$$.fragment,p),v(d.$$.fragment,p),v(f.$$.fragment,p),v(g.$$.fragment,p),v(_.$$.fragment,p),v(H),v(L.$$.fragment,p),v(j.$$.fragment,p),v(V.$$.fragment,p),v(z.$$.fragment,p),v(R.$$.fragment,p),v(Y.$$.fragment,p),ne=!0)},o(p){y(s.$$.fragment,p),y(o.$$.fragment,p),y(a.$$.fragment,p),y(d.$$.fragment,p),y(f.$$.fragment,p),y(g.$$.fragment,p),y(_.$$.fragment,p),y(H),y(L.$$.fragment,p),y(j.$$.fragment,p),y(V.$$.fragment,p),y(z.$$.fragment,p),y(R.$$.fragment,p),y(Y.$$.fragment,p),ne=!1},d(p){p&&k(e),S(s),S(o),S(a),S(d),S(f),S(g),S(_),H&&H.d(),p&&k(U),p&&k(N),S(L),S(j),S(V),S(z),S(R),S(Y)}}}function _u(n){let e,t,r,s,i;return t=new En({props:{$$slots:{default:[gu]},$$scope:{ctx:n}}}),{c(){e=E("div"),$(t.$$.fragment),r=C(),s=E("section"),M(e,"class","nav svelte-pt16o2")},m(o,c){A(o,e,c),T(t,e,null),h(e,r),h(e,s),i=!0},p(o,[c]){const a={};c&3&&(a.$$scope={dirty:c,ctx:o}),t.$set(a)},i(o){i||(v(t.$$.fragment,o),i=!0)},o(o){y(t.$$.fragment,o),i=!1},d(o){o&&k(e),S(t)}}}function vu(n,e,t){let r=!1;return eu.subscribe(s=>{t(0,r=s)}),[r]}class bu extends te{constructor(e){super(),ee(this,e,vu,_u,J,{})}}function yu(n){let e,t,r,s,i;return t=new bu({}),{c(){e=E("nav"),$(t.$$.fragment),r=C(),s=E("main"),M(e,"class","navBar svelte-1ab8rao")},m(o,c){A(o,e,c),T(t,e,null),A(o,r,c),A(o,s,c),i=!0},p:F,i(o){i||(v(t.$$.fragment,o),i=!0)},o(o){y(t.$$.fragment,o),i=!1},d(o){o&&k(e),S(t),o&&k(r),o&&k(s)}}}class Iu extends te{constructor(e){super(),ee(this,e,null,yu,J,{})}}new Iu({target:document.getElementById("app")});
