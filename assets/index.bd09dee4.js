(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function ue(){}const Ad=t=>t;function Gt(t,e){for(const n in e)t[n]=e[n];return t}function Dd(t){return t()}function ru(){return Object.create(null)}function tt(t){t.forEach(Dd)}function Ho(t){return typeof t=="function"}function Ke(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let Hr;function Tt(t,e){return Hr||(Hr=document.createElement("a")),Hr.href=e,t===Hr.href}function __(t){return Object.keys(t).length===0}function Ul(t,...e){if(t==null)return ue;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function hi(t){let e;return Ul(t,n=>e=n)(),e}function je(t,e,n){t.$$.on_destroy.push(Ul(e,n))}function Fl(t,e,n,s){if(t){const i=Rd(t,e,n,s);return t[0](i)}}function Rd(t,e,n,s){return t[1]&&s?Gt(n.ctx.slice(),t[1](s(e))):n.ctx}function Vl(t,e,n,s){if(t[2]&&s){const i=t[2](s(n));if(e.dirty===void 0)return i;if(typeof i=="object"){const r=[],o=Math.max(e.dirty.length,i.length);for(let a=0;a<o;a+=1)r[a]=e.dirty[a]|i[a];return r}return e.dirty|i}return e.dirty}function Bl(t,e,n,s,i,r){if(i){const o=Rd(e,n,s,r);t.p(o,i)}}function jl(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let s=0;s<n;s++)e[s]=-1;return e}return-1}function co(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function uo(t,e){const n={};e=new Set(e);for(const s in t)!e.has(s)&&s[0]!=="$"&&(n[s]=t[s]);return n}function ou(t){return t==null?"":t}function ot(t,e,n){return t.set(n),e}const Pd=typeof window<"u";let v_=Pd?()=>window.performance.now():()=>Date.now(),ql=Pd?t=>requestAnimationFrame(t):ue;const oi=new Set;function Nd(t){oi.forEach(e=>{e.c(t)||(oi.delete(e),e.f())}),oi.size!==0&&ql(Nd)}function y_(t){let e;return oi.size===0&&ql(Nd),{promise:new Promise(n=>{oi.add(e={c:t,f:n})}),abort(){oi.delete(e)}}}function u(t,e){t.appendChild(e)}function Od(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function b_(t){const e=p("style");return w_(Od(t),e),e.sheet}function w_(t,e){return u(t.head||t,e),e.sheet}function w(t,e,n){t.insertBefore(e,n||null)}function b(t){t.parentNode.removeChild(t)}function He(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function p(t){return document.createElement(t)}function S(t){return document.createTextNode(t)}function y(){return S(" ")}function vn(){return S("")}function j(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function Cn(t){return function(e){return e.preventDefault(),t.call(this,e)}}function g(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Vn(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const s in e)e[s]==null?t.removeAttribute(s):s==="style"?t.style.cssText=e[s]:s==="__value"?t.value=t[s]=e[s]:n[s]&&n[s].set?t[s]=e[s]:g(t,s,e[s])}function Xt(t,e,n){const s=new Set;for(let i=0;i<t.length;i+=1)t[i].checked&&s.add(t[i].__value);return n||s.delete(e),Array.from(s)}function ps(t){return t===""?null:+t}function k_(t){return Array.from(t.childNodes)}function re(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function pe(t,e){t.value=e==null?"":e}function Fe(t,e){for(let n=0;n<t.options.length;n+=1){const s=t.options[n];if(s.__value===e){s.selected=!0;return}}t.selectedIndex=-1}function Yt(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}function fi(t,e,n){t.classList[n?"add":"remove"](e)}function $d(t,e,{bubbles:n=!1,cancelable:s=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,s,e),i}function au(t,e){return new t(e)}const ho=new Map;let fo=0;function E_(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function T_(t,e){const n={stylesheet:b_(e),rules:{}};return ho.set(t,n),n}function lu(t,e,n,s,i,r,o,a=0){const l=16.666/s;let c=`{
`;for(let E=0;E<=1;E+=l){const T=e+(n-e)*r(E);c+=E*100+`%{${o(T,1-T)}}
`}const h=c+`100% {${o(n,1-n)}}
}`,f=`__svelte_${E_(h)}_${a}`,d=Od(t),{stylesheet:m,rules:_}=ho.get(d)||T_(d,t);_[f]||(_[f]=!0,m.insertRule(`@keyframes ${f} ${h}`,m.cssRules.length));const v=t.style.animation||"";return t.style.animation=`${v?`${v}, `:""}${f} ${s}ms linear ${i}ms 1 both`,fo+=1,f}function I_(t,e){const n=(t.style.animation||"").split(", "),s=n.filter(e?r=>r.indexOf(e)<0:r=>r.indexOf("__svelte")===-1),i=n.length-s.length;i&&(t.style.animation=s.join(", "),fo-=i,fo||C_())}function C_(){ql(()=>{fo||(ho.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&b(e)}),ho.clear())})}let xi;function ji(t){xi=t}function dr(){if(!xi)throw new Error("Function called outside component initialization");return xi}function S_(t){dr().$$.on_mount.push(t)}function A_(t){dr().$$.on_destroy.push(t)}function Ld(){const t=dr();return(e,n,{cancelable:s=!1}={})=>{const i=t.$$.callbacks[e];if(i){const r=$d(e,n,{cancelable:s});return i.slice().forEach(o=>{o.call(t,r)}),!r.defaultPrevented}return!0}}function qi(t,e){return dr().$$.context.set(t,e),e}function bs(t){return dr().$$.context.get(t)}function D_(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(s=>s.call(this,e))}const $i=[],Jn=[],Zr=[],tl=[],Md=Promise.resolve();let nl=!1;function Ud(){nl||(nl=!0,Md.then(Fd))}function R_(){return Ud(),Md}function et(t){Zr.push(t)}function Fs(t){tl.push(t)}const Aa=new Set;let Kr=0;function Fd(){const t=xi;do{for(;Kr<$i.length;){const e=$i[Kr];Kr++,ji(e),P_(e.$$)}for(ji(null),$i.length=0,Kr=0;Jn.length;)Jn.pop()();for(let e=0;e<Zr.length;e+=1){const n=Zr[e];Aa.has(n)||(Aa.add(n),n())}Zr.length=0}while($i.length);for(;tl.length;)tl.pop()();nl=!1,Aa.clear(),ji(t)}function P_(t){if(t.fragment!==null){t.update(),tt(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(et)}}let Ni;function N_(){return Ni||(Ni=Promise.resolve(),Ni.then(()=>{Ni=null})),Ni}function Da(t,e,n){t.dispatchEvent($d(`${e?"intro":"outro"}${n}`))}const eo=new Set;let Wn;function Mt(){Wn={r:0,c:[],p:Wn}}function Ut(){Wn.r||tt(Wn.c),Wn=Wn.p}function V(t,e){t&&t.i&&(eo.delete(t),t.i(e))}function G(t,e,n,s){if(t&&t.o){if(eo.has(t))return;eo.add(t),Wn.c.push(()=>{eo.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}const O_={duration:0};function Tn(t,e,n,s){let i=e(t,n),r=s?0:1,o=null,a=null,l=null;function c(){l&&I_(t,l)}function h(d,m){const _=d.b-r;return m*=Math.abs(_),{a:r,b:d.b,d:_,duration:m,start:d.start,end:d.start+m,group:d.group}}function f(d){const{delay:m=0,duration:_=300,easing:v=Ad,tick:E=ue,css:T}=i||O_,k={start:v_()+m,b:d};d||(k.group=Wn,Wn.r+=1),o||a?a=k:(T&&(c(),l=lu(t,r,d,_,m,v,T)),d&&E(0,1),o=h(k,_),et(()=>Da(t,d,"start")),y_(P=>{if(a&&P>a.start&&(o=h(a,_),a=null,Da(t,o.b,"start"),T&&(c(),l=lu(t,r,o.b,o.duration,0,v,i.css))),o){if(P>=o.end)E(r=o.b,1-r),Da(t,o.b,"end"),a||(o.b?c():--o.group.r||tt(o.group.c)),o=null;else if(P>=o.start){const D=P-o.start;r=o.a+o.d*v(D/o.duration),E(r,1-r)}}return!!(o||a)}))}return{run(d){Ho(i)?N_().then(()=>{i=i(),f(d)}):f(d)},end(){c(),o=a=null}}}function Sn(t,e){const n={},s={},i={$$scope:1};let r=t.length;for(;r--;){const o=t[r],a=e[r];if(a){for(const l in o)l in a||(s[l]=1);for(const l in a)i[l]||(n[l]=a[l],i[l]=1);t[r]=a}else for(const l in o)i[l]=1}for(const o in s)o in n||(n[o]=void 0);return n}function Zn(t){return typeof t=="object"&&t!==null?t:{}}function Vs(t,e,n){const s=t.$$.props[e];s!==void 0&&(t.$$.bound[s]=n,n(t.$$.ctx[s]))}function le(t){t&&t.c()}function oe(t,e,n,s){const{fragment:i,after_update:r}=t.$$;i&&i.m(e,n),s||et(()=>{const o=t.$$.on_mount.map(Dd).filter(Ho);t.$$.on_destroy?t.$$.on_destroy.push(...o):tt(o),t.$$.on_mount=[]}),r.forEach(et)}function ae(t,e){const n=t.$$;n.fragment!==null&&(tt(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function $_(t,e){t.$$.dirty[0]===-1&&($i.push(t),Ud(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Qe(t,e,n,s,i,r,o,a=[-1]){const l=xi;ji(t);const c=t.$$={fragment:null,ctx:[],props:r,update:ue,not_equal:i,bound:ru(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:ru(),dirty:a,skip_bound:!1,root:e.target||l.$$.root};o&&o(c.root);let h=!1;if(c.ctx=n?n(t,e.props||{},(f,d,...m)=>{const _=m.length?m[0]:d;return c.ctx&&i(c.ctx[f],c.ctx[f]=_)&&(!c.skip_bound&&c.bound[f]&&c.bound[f](_),h&&$_(t,f)),d}):[],c.update(),h=!0,tt(c.before_update),c.fragment=s?s(c.ctx):!1,e.target){if(e.hydrate){const f=k_(e.target);c.fragment&&c.fragment.l(f),f.forEach(b)}else c.fragment&&c.fragment.c();e.intro&&V(t.$$.fragment),oe(t,e.target,e.anchor,e.customElement),Fd()}ji(l)}class xe{$destroy(){ae(this,1),this.$destroy=ue}$on(e,n){if(!Ho(n))return ue;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const i=s.indexOf(n);i!==-1&&s.splice(i,1)}}$set(e){this.$$set&&!__(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const cu=t=>typeof t>"u",Vd=t=>typeof t=="function",Bd=t=>typeof t=="number";function L_(t){return!t.defaultPrevented&&t.button===0&&!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function jd(){let t=0;return()=>t++}function M_(){return Math.random().toString(36).substring(2)}const ws=typeof window>"u";function qd(t,e,n){return t.addEventListener(e,n),()=>t.removeEventListener(e,n)}const sl=(t,e)=>t?{}:{style:e},ni=t=>({"aria-hidden":"true",...sl(t,"display:none;")}),ei=[];function U_(t,e){return{subscribe:en(t,e).subscribe}}function en(t,e=ue){let n;const s=new Set;function i(a){if(Ke(t,a)&&(t=a,n)){const l=!ei.length;for(const c of s)c[1](),ei.push(c,t);if(l){for(let c=0;c<ei.length;c+=2)ei[c][0](ei[c+1]);ei.length=0}}}function r(a){i(a(t))}function o(a,l=ue){const c=[a,l];return s.add(c),s.size===1&&(n=e(i)||ue),a(t),()=>{s.delete(c),s.size===0&&(n(),n=null)}}return{set:i,update:r,subscribe:o}}function F_(t,e,n){const s=!Array.isArray(t),i=s?[t]:t,r=e.length<2;return U_(n,o=>{let a=!1;const l=[];let c=0,h=ue;const f=()=>{if(c)return;h();const m=e(s?l[0]:l,o);r?o(m):h=Ho(m)?m:ue},d=i.map((m,_)=>Ul(m,v=>{l[_]=v,c&=~(1<<_),a&&f()},()=>{c|=1<<_}));return a=!0,f(),function(){tt(d),h()}})}const pr=t=>`@@svnav-ctx__${t}`,il=pr("LOCATION"),di=pr("ROUTER"),Hd=pr("ROUTE"),V_=pr("ROUTE_PARAMS"),B_=pr("FOCUS_ELEM"),Kd=/^:(.+)/,Li=(t,e,n)=>t.substr(e,n),rl=(t,e)=>Li(t,0,e.length)===e,j_=t=>t==="",q_=t=>Kd.test(t),zd=t=>t[0]==="*",H_=t=>t.replace(/\*.*$/,""),Gd=t=>t.replace(/(^\/+|\/+$)/g,"");function Hn(t,e=!1){const n=Gd(t).split("/");return e?n.filter(Boolean):n}const Ra=(t,e)=>t+(e?`?${e}`:""),Hl=t=>`/${Gd(t)}`;function mr(...t){const e=s=>Hn(s,!0).join("/"),n=t.map(e).join("/");return Hl(n)}const Kl=1,Ko=2,Bs=3,K_=4,Wd=5,z_=6,Qd=7,G_=8,W_=9,xd=10,Yd=11,Q_={[Kl]:"Link",[Ko]:"Route",[Bs]:"Router",[K_]:"useFocus",[Wd]:"useLocation",[z_]:"useMatch",[Qd]:"useNavigate",[G_]:"useParams",[W_]:"useResolvable",[xd]:"useResolve",[Yd]:"navigate"},zl=t=>Q_[t];function x_(t,e){let n;return t===Ko?n=e.path?`path="${e.path}"`:"default":t===Kl?n=`to="${e.to}"`:t===Bs&&(n=`basepath="${e.basepath||""}"`),`<${zl(t)} ${n||""} />`}function Y_(t,e,n,s){const i=n&&x_(s||t,n),r=i?`

Occurred in: ${i}`:"",o=zl(t),a=Vd(e)?e(o):e;return`<${o}> ${a}${r}`}const Xd=t=>(...e)=>t(Y_(...e)),Jd=Xd(t=>{throw new Error(t)}),po=Xd(console.warn),uu=4,X_=3,J_=2,Z_=1,ev=1;function tv(t,e){const n=t.default?0:Hn(t.fullPath).reduce((s,i)=>{let r=s;return r+=uu,j_(i)?r+=ev:q_(i)?r+=J_:zd(i)?r-=uu+Z_:r+=X_,r},0);return{route:t,score:n,index:e}}function nv(t){return t.map(tv).sort((e,n)=>e.score<n.score?1:e.score>n.score?-1:e.index-n.index)}function Zd(t,e){let n,s;const[i]=e.split("?"),r=Hn(i),o=r[0]==="",a=nv(t);for(let l=0,c=a.length;l<c;l++){const{route:h}=a[l];let f=!1;const d={},m=T=>({...h,params:d,uri:T});if(h.default){s=m(e);continue}const _=Hn(h.fullPath),v=Math.max(r.length,_.length);let E=0;for(;E<v;E++){const T=_[E],k=r[E];if(!cu(T)&&zd(T)){const D=T==="*"?"*":T.slice(1);d[D]=r.slice(E).map(decodeURIComponent).join("/");break}if(cu(k)){f=!0;break}const P=Kd.exec(T);if(P&&!o){const D=decodeURIComponent(k);d[P[1]]=D}else if(T!==k){f=!0;break}}if(!f){n=m(mr(...r.slice(0,E)));break}}return n||s||null}function ep(t,e){return Zd([t],e)}function sv(t,e){if(rl(t,"/"))return t;const[n,s]=t.split("?"),[i]=e.split("?"),r=Hn(n),o=Hn(i);if(r[0]==="")return Ra(i,s);if(!rl(r[0],".")){const c=o.concat(r).join("/");return Ra((i==="/"?"":"/")+c,s)}const a=o.concat(r),l=[];return a.forEach(c=>{c===".."?l.pop():c!=="."&&l.push(c)}),Ra(`/${l.join("/")}`,s)}function hu(t,e){const{pathname:n,hash:s="",search:i="",state:r}=t,o=Hn(e,!0),a=Hn(n,!0);for(;o.length;)o[0]!==a[0]&&Jd(Bs,`Invalid state: All locations must begin with the basepath "${e}", found "${n}"`),o.shift(),a.shift();return{pathname:mr(...a),hash:s,search:i,state:r}}const fu=t=>t.length===1?"":t,Gl=t=>{const e=t.indexOf("?"),n=t.indexOf("#"),s=e!==-1,i=n!==-1,r=i?fu(Li(t,n)):"",o=i?Li(t,0,n):t,a=s?fu(Li(o,e)):"";return{pathname:(s?Li(o,0,e):o)||"/",search:a,hash:r}},iv=t=>{const{pathname:e,search:n,hash:s}=t;return e+n+s};function rv(t,e,n){return mr(n,sv(t,e))}function ov(t,e){const n=Hl(H_(t)),s=Hn(n,!0),i=Hn(e,!0).slice(0,s.length),r=ep({fullPath:n},mr(...i));return r&&r.uri}const Pa="POP",av="PUSH",lv="REPLACE";function Na(t){return{...t.location,pathname:encodeURI(decodeURI(t.location.pathname)),state:t.history.state,_key:t.history.state&&t.history.state._key||"initial"}}function cv(t){let e=[],n=Na(t),s=Pa;const i=(r=e)=>r.forEach(o=>o({location:n,action:s}));return{get location(){return n},listen(r){e.push(r);const o=()=>{n=Na(t),s=Pa,i([r])};i([r]);const a=qd(t,"popstate",o);return()=>{a(),e=e.filter(l=>l!==r)}},navigate(r,o){const{state:a={},replace:l=!1}=o||{};if(s=l?lv:av,Bd(r))o&&po(Yd,"Navigation options (state or replace) are not supported, when passing a number as the first argument to navigate. They are ignored."),s=Pa,t.history.go(r);else{const c={...a,_key:M_()};try{t.history[l?"replaceState":"pushState"](c,"",r)}catch{t.location[l?"replace":"assign"](r)}}n=Na(t),i()}}}function Oa(t,e){return{...Gl(e),state:t}}function uv(t="/"){let e=0,n=[Oa(null,t)];return{get entries(){return n},get location(){return n[e]},addEventListener(){},removeEventListener(){},history:{get state(){return n[e].state},pushState(s,i,r){e++,n=n.slice(0,e),n.push(Oa(s,r))},replaceState(s,i,r){n[e]=Oa(s,r)},go(s){const i=e+s;i<0||i>n.length-1||(e=i)}}}}const hv=!!(!ws&&window.document&&window.document.createElement),fv=!ws&&window.location.origin==="null",dv=cv(hv&&!fv?window:uv());let Gn=null,tp=!0;function pv(t,e){const n=document.querySelectorAll("[data-svnav-router]");for(let s=0;s<n.length;s++){const i=n[s],r=Number(i.dataset.svnavRouter);if(r===t)return!0;if(r===e)return!1}return!1}function mv(t){(!Gn||t.level>Gn.level||t.level===Gn.level&&pv(t.routerId,Gn.routerId))&&(Gn=t)}function gv(){Gn=null}function _v(){tp=!1}function du(t){if(!t)return!1;const e="tabindex";try{if(!t.hasAttribute(e)){t.setAttribute(e,"-1");let n;n=qd(t,"blur",()=>{t.removeAttribute(e),n()})}return t.focus(),document.activeElement===t}catch{return!1}}function vv(t,e){return Number(t.dataset.svnavRouteEnd)===e}function yv(t){return/^H[1-6]$/i.test(t.tagName)}function pu(t,e=document){return e.querySelector(t)}function bv(t){let n=pu(`[data-svnav-route-start="${t}"]`).nextElementSibling;for(;!vv(n,t);){if(yv(n))return n;const s=pu("h1,h2,h3,h4,h5,h6",n);if(s)return s;n=n.nextElementSibling}return null}function wv(t){Promise.resolve(hi(t.focusElement)).then(e=>{const n=e||bv(t.id);n||po(Bs,`Could not find an element to focus. You should always render a header for accessibility reasons, or set a custom focus element via the "useFocus" hook. If you don't want this Route or Router to manage focus, pass "primary={false}" to it.`,t,Ko),!du(n)&&du(document.documentElement)})}const kv=(t,e,n)=>(s,i)=>R_().then(()=>{if(!Gn||tp){_v();return}if(s&&wv(Gn.route),t.announcements&&i){const{path:r,fullPath:o,meta:a,params:l,uri:c}=Gn.route,h=t.createAnnouncement({path:r,fullPath:o,meta:a,params:l,uri:c},hi(n));Promise.resolve(h).then(f=>{e.set(f)})}gv()}),mu="position:fixed;top:-1px;left:0;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;";function Ev(t){let e,n,s=[{role:"status"},{"aria-atomic":"true"},{"aria-live":"polite"},{"data-svnav-announcer":""},sl(t[6],mu)],i={};for(let r=0;r<s.length;r+=1)i=Gt(i,s[r]);return{c(){e=p("div"),n=S(t[0]),Vn(e,i)},m(r,o){w(r,e,o),u(e,n)},p(r,o){o[0]&1&&re(n,r[0]),Vn(e,i=Sn(s,[{role:"status"},{"aria-atomic":"true"},{"aria-live":"polite"},{"data-svnav-announcer":""},sl(r[6],mu)]))},d(r){r&&b(e)}}}function Tv(t){let e,n,s,i,r,o=[ni(t[6]),{"data-svnav-router":t[3]}],a={};for(let f=0;f<o.length;f+=1)a=Gt(a,o[f]);const l=t[22].default,c=Fl(l,t,t[21],null);let h=t[2]&&t[4]&&t[1].announcements&&Ev(t);return{c(){e=p("div"),n=y(),c&&c.c(),s=y(),h&&h.c(),i=vn(),Vn(e,a)},m(f,d){w(f,e,d),w(f,n,d),c&&c.m(f,d),w(f,s,d),h&&h.m(f,d),w(f,i,d),r=!0},p(f,d){Vn(e,a=Sn(o,[ni(f[6]),{"data-svnav-router":f[3]}])),c&&c.p&&(!r||d[0]&2097152)&&Bl(c,l,f,f[21],r?Vl(l,f[21],d,null):jl(f[21]),null),f[2]&&f[4]&&f[1].announcements&&h.p(f,d)},i(f){r||(V(c,f),r=!0)},o(f){G(c,f),r=!1},d(f){f&&b(e),f&&b(n),c&&c.d(f),f&&b(s),h&&h.d(f),f&&b(i)}}}const Iv=jd(),gu="/";function Cv(t,e,n){let s,i,r,o,a,{$$slots:l={},$$scope:c}=e,{basepath:h=gu}=e,{url:f=null}=e,{history:d=dv}=e,{primary:m=!0}=e,{a11y:_={}}=e,{disableInlineStyles:v=!1}=e;const E={createAnnouncement:L=>`Navigated to ${L.uri}`,announcements:!0,..._},T=h,k=Hl(h),P=bs(il),D=bs(di),B=!P,$=Iv(),F=m&&!(D&&!D.manageFocus),H=en("");je(t,H,L=>n(0,a=L));const N=D?D.disableInlineStyles:v,U=en([]);je(t,U,L=>n(20,o=L));const O=en(null);je(t,O,L=>n(18,i=L));let K=!1;const Y=B?0:D.level+1,Q=B?en((()=>hu(ws?Gl(f):d.location,k))()):P;je(t,Q,L=>n(17,s=L));const W=en(s);je(t,W,L=>n(19,r=L));const te=kv(E,H,Q),x=L=>R=>R.filter(ce=>ce.id!==L);function A(L){if(ws){if(K)return;const R=ep(L,s.pathname);if(R)return K=!0,R}else U.update(R=>{const ce=x(L.id)(R);return ce.push(L),ce})}function z(L){U.update(x(L))}return!B&&h!==gu&&po(Bs,'Only top-level Routers can have a "basepath" prop. It is ignored.',{basepath:h}),B&&(S_(()=>d.listen(R=>{const ce=hu(R.location,k);W.set(s),Q.set(ce)})),qi(il,Q)),qi(di,{activeRoute:O,registerRoute:A,unregisterRoute:z,manageFocus:F,level:Y,id:$,history:B?d:D.history,basepath:B?k:D.basepath,disableInlineStyles:N}),t.$$set=L=>{"basepath"in L&&n(11,h=L.basepath),"url"in L&&n(12,f=L.url),"history"in L&&n(13,d=L.history),"primary"in L&&n(14,m=L.primary),"a11y"in L&&n(15,_=L.a11y),"disableInlineStyles"in L&&n(16,v=L.disableInlineStyles),"$$scope"in L&&n(21,c=L.$$scope)},t.$$.update=()=>{if(t.$$.dirty[0]&2048&&h!==T&&po(Bs,'You cannot change the "basepath" prop. It is ignored.'),t.$$.dirty[0]&1179648){const L=Zd(o,s.pathname);O.set(L)}if(t.$$.dirty[0]&655360&&B){const L=!!s.hash,R=!L&&F,ce=!L||s.pathname!==r.pathname;te(R,ce)}t.$$.dirty[0]&262144&&F&&i&&i.primary&&mv({level:Y,routerId:$,route:i})},[a,E,B,$,F,H,N,U,O,Q,W,h,f,d,m,_,v,s,i,r,o,c,l]}class Wl extends xe{constructor(e){super(),Qe(this,e,Cv,Tv,Ke,{basepath:11,url:12,history:13,primary:14,a11y:15,disableInlineStyles:16},null,[-1,-1])}}function gr(t,e,n=di,s=Bs){bs(n)||Jd(t,r=>`You cannot use ${r} outside of a ${zl(s)}.`,e)}const Sv=t=>{const{subscribe:e}=bs(t);return{subscribe:e}};function np(){return gr(Wd),Sv(il)}function sp(){const{history:t}=bs(di);return t}function ip(){const t=bs(Hd);return t?F_(t,e=>e.base):en("/")}function rp(){gr(xd);const t=ip(),{basepath:e}=bs(di);return s=>rv(s,hi(t),e)}function Qs(){gr(Qd);const t=rp(),{navigate:e}=sp();return(s,i)=>{const r=Bd(s)?s:t(s);return e(r,i)}}const Av=t=>({params:t&16,location:t&8}),_u=t=>({params:ws?hi(t[10]):t[4],location:t[3],navigate:t[11]});function vu(t){let e,n;return e=new Wl({props:{primary:t[1],$$slots:{default:[Pv]},$$scope:{ctx:t}}}),{c(){le(e.$$.fragment)},m(s,i){oe(e,s,i),n=!0},p(s,i){const r={};i&2&&(r.primary=s[1]),i&528409&&(r.$$scope={dirty:i,ctx:s}),e.$set(r)},i(s){n||(V(e.$$.fragment,s),n=!0)},o(s){G(e.$$.fragment,s),n=!1},d(s){ae(e,s)}}}function Dv(t){let e;const n=t[18].default,s=Fl(n,t,t[19],_u);return{c(){s&&s.c()},m(i,r){s&&s.m(i,r),e=!0},p(i,r){s&&s.p&&(!e||r&524312)&&Bl(s,n,i,i[19],e?Vl(n,i[19],r,Av):jl(i[19]),_u)},i(i){e||(V(s,i),e=!0)},o(i){G(s,i),e=!1},d(i){s&&s.d(i)}}}function Rv(t){let e,n,s;const i=[{location:t[3]},{navigate:t[11]},ws?hi(t[10]):t[4],t[12]];var r=t[0];function o(a){let l={};for(let c=0;c<i.length;c+=1)l=Gt(l,i[c]);return{props:l}}return r&&(e=au(r,o())),{c(){e&&le(e.$$.fragment),n=vn()},m(a,l){e&&oe(e,a,l),w(a,n,l),s=!0},p(a,l){const c=l&7192?Sn(i,[l&8&&{location:a[3]},l&2048&&{navigate:a[11]},l&1040&&Zn(ws?hi(a[10]):a[4]),l&4096&&Zn(a[12])]):{};if(r!==(r=a[0])){if(e){Mt();const h=e;G(h.$$.fragment,1,0,()=>{ae(h,1)}),Ut()}r?(e=au(r,o()),le(e.$$.fragment),V(e.$$.fragment,1),oe(e,n.parentNode,n)):e=null}else r&&e.$set(c)},i(a){s||(e&&V(e.$$.fragment,a),s=!0)},o(a){e&&G(e.$$.fragment,a),s=!1},d(a){a&&b(n),e&&ae(e,a)}}}function Pv(t){let e,n,s,i;const r=[Rv,Dv],o=[];function a(l,c){return l[0]!==null?0:1}return e=a(t),n=o[e]=r[e](t),{c(){n.c(),s=vn()},m(l,c){o[e].m(l,c),w(l,s,c),i=!0},p(l,c){let h=e;e=a(l),e===h?o[e].p(l,c):(Mt(),G(o[h],1,1,()=>{o[h]=null}),Ut(),n=o[e],n?n.p(l,c):(n=o[e]=r[e](l),n.c()),V(n,1),n.m(s.parentNode,s))},i(l){i||(V(n),i=!0)},o(l){G(n),i=!1},d(l){o[e].d(l),l&&b(s)}}}function Nv(t){let e,n,s,i,r,o=[ni(t[7]),{"data-svnav-route-start":t[5]}],a={};for(let f=0;f<o.length;f+=1)a=Gt(a,o[f]);let l=t[2]&&vu(t),c=[ni(t[7]),{"data-svnav-route-end":t[5]}],h={};for(let f=0;f<c.length;f+=1)h=Gt(h,c[f]);return{c(){e=p("div"),n=y(),l&&l.c(),s=y(),i=p("div"),Vn(e,a),Vn(i,h)},m(f,d){w(f,e,d),w(f,n,d),l&&l.m(f,d),w(f,s,d),w(f,i,d),r=!0},p(f,[d]){Vn(e,a=Sn(o,[ni(f[7]),{"data-svnav-route-start":f[5]}])),f[2]?l?(l.p(f,d),d&4&&V(l,1)):(l=vu(f),l.c(),V(l,1),l.m(s.parentNode,s)):l&&(Mt(),G(l,1,1,()=>{l=null}),Ut()),Vn(i,h=Sn(c,[ni(f[7]),{"data-svnav-route-end":f[5]}]))},i(f){r||(V(l),r=!0)},o(f){G(l),r=!1},d(f){f&&b(e),f&&b(n),l&&l.d(f),f&&b(s),f&&b(i)}}}const Ov=jd();function $v(t,e,n){let s;const i=["path","component","meta","primary"];let r=uo(e,i),o,a,l,c,{$$slots:h={},$$scope:f}=e,{path:d=""}=e,{component:m=null}=e,{meta:_={}}=e,{primary:v=!0}=e;gr(Ko,e);const E=Ov(),{registerRoute:T,unregisterRoute:k,activeRoute:P,disableInlineStyles:D}=bs(di);je(t,P,K=>n(16,o=K));const B=ip();je(t,B,K=>n(17,l=K));const $=np();je(t,$,K=>n(3,a=K));const F=en(null);let H;const N=en(),U=en({});je(t,U,K=>n(4,c=K)),qi(Hd,N),qi(V_,U),qi(B_,F);const O=Qs();return ws||A_(()=>k(E)),t.$$set=K=>{n(24,e=Gt(Gt({},e),co(K))),n(12,r=uo(e,i)),"path"in K&&n(13,d=K.path),"component"in K&&n(0,m=K.component),"meta"in K&&n(14,_=K.meta),"primary"in K&&n(1,v=K.primary),"$$scope"in K&&n(19,f=K.$$scope)},t.$$.update=()=>{if(t.$$.dirty&155658){const K=d==="",Y=mr(l,d),ie={id:E,path:d,meta:_,default:K,fullPath:K?"":Y,base:K?l:ov(Y,a.pathname),primary:v,focusElement:F};N.set(ie),n(15,H=T(ie))}if(t.$$.dirty&98304&&n(2,s=!!(H||o&&o.id===E)),t.$$.dirty&98308&&s){const{params:K}=H||o;U.set(K)}},e=co(e),[m,v,s,a,c,E,P,D,B,$,U,O,r,d,_,H,o,l,h,f]}class wn extends xe{constructor(e){super(),Qe(this,e,$v,Nv,Ke,{path:13,component:0,meta:14,primary:1})}}function Lv(t){let e,n,s,i;const r=t[13].default,o=Fl(r,t,t[12],null);let a=[{href:t[0]},t[2],t[1]],l={};for(let c=0;c<a.length;c+=1)l=Gt(l,a[c]);return{c(){e=p("a"),o&&o.c(),Vn(e,l)},m(c,h){w(c,e,h),o&&o.m(e,null),n=!0,s||(i=j(e,"click",t[4]),s=!0)},p(c,[h]){o&&o.p&&(!n||h&4096)&&Bl(o,r,c,c[12],n?Vl(r,c[12],h,null):jl(c[12]),null),Vn(e,l=Sn(a,[(!n||h&1)&&{href:c[0]},h&4&&c[2],h&2&&c[1]]))},i(c){n||(V(o,c),n=!0)},o(c){G(o,c),n=!1},d(c){c&&b(e),o&&o.d(c),s=!1,i()}}}function Mv(t,e,n){let s,i,r,o,a,l;const c=["to","replace","state","getProps"];let h=uo(e,c),f,{$$slots:d={},$$scope:m}=e,{to:_}=e,{replace:v=!1}=e,{state:E={}}=e,{getProps:T=null}=e;gr(Kl,e);const k=np();je(t,k,F=>n(11,f=F));const P=Ld(),D=rp(),{navigate:B}=sp();function $(F){P("click",F),L_(F)&&(F.preventDefault(),B(s,{state:E,replace:o||v}))}return t.$$set=F=>{n(19,e=Gt(Gt({},e),co(F))),n(18,h=uo(e,c)),"to"in F&&n(5,_=F.to),"replace"in F&&n(6,v=F.replace),"state"in F&&n(7,E=F.state),"getProps"in F&&n(8,T=F.getProps),"$$scope"in F&&n(12,m=F.$$scope)},t.$$.update=()=>{t.$$.dirty&2080&&n(0,s=D(_,f)),t.$$.dirty&2049&&n(10,i=rl(f.pathname,s)),t.$$.dirty&2049&&n(9,r=s===f.pathname),t.$$.dirty&2049&&(o=Gl(s)===iv(f)),t.$$.dirty&512&&n(2,a=r?{"aria-current":"page"}:{}),n(1,l=(()=>{if(Vd(T)){const F=T({location:f,href:s,isPartiallyCurrent:i,isCurrent:r});return{...h,...F}}return h})())},e=co(e),[s,l,a,k,$,_,v,E,T,r,i,f,m,d]}class kn extends xe{constructor(e){super(),Qe(this,e,Mv,Lv,Ke,{to:5,replace:6,state:7,getProps:8})}}const op="/to-deploy-mh/assets/logoMH.9387adb0.png",Uv="/to-deploy-mh/assets/menu.9ddfd9f8.svg";/**
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
 */const ap=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Fv=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},lp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,h=r>>2,f=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,m=c&63;l||(m=64,o||(d=64)),s.push(n[h],n[f],n[d],n[m])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ap(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Fv(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||f==null)throw Error();const d=r<<2|a>>4;if(s.push(d),c!==64){const m=a<<4&240|c>>2;if(s.push(m),f!==64){const _=c<<6&192|f;s.push(_)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Vv=function(t){const e=ap(t);return lp.encodeByteArray(e,!0)},mo=function(t){return Vv(t).replace(/\./g,"")},cp=function(t){try{return lp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function hn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Bv(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(hn())}function jv(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function qv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Hv(){const t=hn();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Kv(){return typeof indexedDB=="object"}function zv(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}function Gv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Wv=()=>Gv().__FIREBASE_DEFAULTS__,Qv=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t=process.env.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},xv=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&cp(t[1]);return e&&JSON.parse(e)},Ql=()=>{try{return Wv()||Qv()||xv()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},up=t=>{var e,n;return(n=(e=Ql())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Yv=t=>{const e=up(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Xv=()=>{var t;return(t=Ql())===null||t===void 0?void 0:t.config},hp=t=>{var e;return(e=Ql())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Jv{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Zv(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[mo(JSON.stringify(n)),mo(JSON.stringify(o)),a].join(".")}/**
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
 */const ey="FirebaseError";class os extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=ey,Object.setPrototypeOf(this,os.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_r.prototype.create)}}class _r{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?ty(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new os(i,a,s)}}function ty(t,e){return t.replace(ny,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const ny=/\{\$([^}]+)}/g;function sy(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function go(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(yu(r)&&yu(o)){if(!go(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function yu(t){return t!==null&&typeof t=="object"}/**
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
 */function vr(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Mi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function Ui(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function iy(t,e){const n=new ry(t,e);return n.subscribe.bind(n)}class ry{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");oy(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=$a),i.error===void 0&&(i.error=$a),i.complete===void 0&&(i.complete=$a);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function oy(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function $a(){}/**
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
 */function gn(t){return t&&t._delegate?t._delegate:t}class js{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Rs="[DEFAULT]";/**
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
 */class ay{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Jv;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(cy(e))try{this.getOrInitializeService({instanceIdentifier:Rs})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Rs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Rs){return this.instances.has(e)}getOptions(e=Rs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:ly(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Rs){return this.component?this.component.multipleInstances?e:Rs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ly(t){return t===Rs?void 0:t}function cy(t){return t.instantiationMode==="EAGER"}/**
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
 */class uy{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ay(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var qe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(qe||(qe={}));const hy={debug:qe.DEBUG,verbose:qe.VERBOSE,info:qe.INFO,warn:qe.WARN,error:qe.ERROR,silent:qe.SILENT},fy=qe.INFO,dy={[qe.DEBUG]:"log",[qe.VERBOSE]:"log",[qe.INFO]:"info",[qe.WARN]:"warn",[qe.ERROR]:"error"},py=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=dy[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class xl{constructor(e){this.name=e,this._logLevel=fy,this._logHandler=py,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in qe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?hy[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,qe.DEBUG,...e),this._logHandler(this,qe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,qe.VERBOSE,...e),this._logHandler(this,qe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,qe.INFO,...e),this._logHandler(this,qe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,qe.WARN,...e),this._logHandler(this,qe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,qe.ERROR,...e),this._logHandler(this,qe.ERROR,...e)}}const my=(t,e)=>e.some(n=>t instanceof n);let bu,wu;function gy(){return bu||(bu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function _y(){return wu||(wu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const fp=new WeakMap,ol=new WeakMap,dp=new WeakMap,La=new WeakMap,Yl=new WeakMap;function vy(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(ms(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&fp.set(n,t)}).catch(()=>{}),Yl.set(e,t),e}function yy(t){if(ol.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});ol.set(t,e)}let al={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ol.get(t);if(e==="objectStoreNames")return t.objectStoreNames||dp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ms(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function by(t){al=t(al)}function wy(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Ma(this),e,...n);return dp.set(s,e.sort?e.sort():[e]),ms(s)}:_y().includes(t)?function(...e){return t.apply(Ma(this),e),ms(fp.get(this))}:function(...e){return ms(t.apply(Ma(this),e))}}function ky(t){return typeof t=="function"?wy(t):(t instanceof IDBTransaction&&yy(t),my(t,gy())?new Proxy(t,al):t)}function ms(t){if(t instanceof IDBRequest)return vy(t);if(La.has(t))return La.get(t);const e=ky(t);return e!==t&&(La.set(t,e),Yl.set(e,t)),e}const Ma=t=>Yl.get(t);function Ey(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=ms(o);return s&&o.addEventListener("upgradeneeded",l=>{s(ms(o.result),l.oldVersion,l.newVersion,ms(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const Ty=["get","getKey","getAll","getAllKeys","count"],Iy=["put","add","delete","clear"],Ua=new Map;function ku(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ua.get(e))return Ua.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Iy.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Ty.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Ua.set(e,r),r}by(t=>({...t,get:(e,n,s)=>ku(e,n)||t.get(e,n,s),has:(e,n)=>!!ku(e,n)||t.has(e,n)}));/**
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
 */class Cy{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Sy(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Sy(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ll="@firebase/app",Eu="0.8.2";/**
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
 */const qs=new xl("@firebase/app"),Ay="@firebase/app-compat",Dy="@firebase/analytics-compat",Ry="@firebase/analytics",Py="@firebase/app-check-compat",Ny="@firebase/app-check",Oy="@firebase/auth",$y="@firebase/auth-compat",Ly="@firebase/database",My="@firebase/database-compat",Uy="@firebase/functions",Fy="@firebase/functions-compat",Vy="@firebase/installations",By="@firebase/installations-compat",jy="@firebase/messaging",qy="@firebase/messaging-compat",Hy="@firebase/performance",Ky="@firebase/performance-compat",zy="@firebase/remote-config",Gy="@firebase/remote-config-compat",Wy="@firebase/storage",Qy="@firebase/storage-compat",xy="@firebase/firestore",Yy="@firebase/firestore-compat",Xy="firebase",Jy="9.12.1";/**
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
 */const cl="[DEFAULT]",Zy={[ll]:"fire-core",[Ay]:"fire-core-compat",[Ry]:"fire-analytics",[Dy]:"fire-analytics-compat",[Ny]:"fire-app-check",[Py]:"fire-app-check-compat",[Oy]:"fire-auth",[$y]:"fire-auth-compat",[Ly]:"fire-rtdb",[My]:"fire-rtdb-compat",[Uy]:"fire-fn",[Fy]:"fire-fn-compat",[Vy]:"fire-iid",[By]:"fire-iid-compat",[jy]:"fire-fcm",[qy]:"fire-fcm-compat",[Hy]:"fire-perf",[Ky]:"fire-perf-compat",[zy]:"fire-rc",[Gy]:"fire-rc-compat",[Wy]:"fire-gcs",[Qy]:"fire-gcs-compat",[xy]:"fire-fst",[Yy]:"fire-fst-compat","fire-js":"fire-js",[Xy]:"fire-js-all"};/**
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
 */const _o=new Map,ul=new Map;function e0(t,e){try{t.container.addComponent(e)}catch(n){qs.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function pi(t){const e=t.name;if(ul.has(e))return qs.debug(`There were multiple attempts to register component ${e}.`),!1;ul.set(e,t);for(const n of _o.values())e0(n,t);return!0}function Xl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const t0={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},gs=new _r("app","Firebase",t0);/**
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
 */class n0{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new js("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw gs.create("app-deleted",{appName:this._name})}}/**
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
 */const yr=Jy;function pp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:cl,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw gs.create("bad-app-name",{appName:String(i)});if(n||(n=Xv()),!n)throw gs.create("no-options");const r=_o.get(i);if(r){if(go(n,r.options)&&go(s,r.config))return r;throw gs.create("duplicate-app",{appName:i})}const o=new uy(i);for(const l of ul.values())o.addComponent(l);const a=new n0(n,s,o);return _o.set(i,a),a}function mp(t=cl){const e=_o.get(t);if(!e&&t===cl)return pp();if(!e)throw gs.create("no-app",{appName:t});return e}function _s(t,e,n){var s;let i=(s=Zy[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),qs.warn(a.join(" "));return}pi(new js(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const s0="firebase-heartbeat-database",i0=1,Yi="firebase-heartbeat-store";let Fa=null;function gp(){return Fa||(Fa=Ey(s0,i0,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Yi)}}}).catch(t=>{throw gs.create("idb-open",{originalErrorMessage:t.message})})),Fa}async function r0(t){var e;try{return(await gp()).transaction(Yi).objectStore(Yi).get(_p(t))}catch(n){if(n instanceof os)qs.warn(n.message);else{const s=gs.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});qs.warn(s.message)}}}async function Tu(t,e){var n;try{const i=(await gp()).transaction(Yi,"readwrite");return await i.objectStore(Yi).put(e,_p(t)),i.done}catch(s){if(s instanceof os)qs.warn(s.message);else{const i=gs.create("idb-set",{originalErrorMessage:(n=s)===null||n===void 0?void 0:n.message});qs.warn(i.message)}}}function _p(t){return`${t.name}!${t.options.appId}`}/**
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
 */const o0=1024,a0=30*24*60*60*1e3;class l0{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new u0(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Iu();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=a0}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Iu(),{heartbeatsToSend:n,unsentEntries:s}=c0(this._heartbeatsCache.heartbeats),i=mo(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Iu(){return new Date().toISOString().substring(0,10)}function c0(t,e=o0){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Cu(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Cu(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class u0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Kv()?zv().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await r0(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Tu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Tu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Cu(t){return mo(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function h0(t){pi(new js("platform-logger",e=>new Cy(e),"PRIVATE")),pi(new js("heartbeat",e=>new l0(e),"PRIVATE")),_s(ll,Eu,t),_s(ll,Eu,"esm2017"),_s("fire-js","")}h0("");var f0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},he,Jl=Jl||{},Ie=f0||self;function vo(){}function zo(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function br(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function d0(t){return Object.prototype.hasOwnProperty.call(t,Va)&&t[Va]||(t[Va]=++p0)}var Va="closure_uid_"+(1e9*Math.random()>>>0),p0=0;function m0(t,e,n){return t.call.apply(t.bind,arguments)}function g0(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function cn(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?cn=m0:cn=g0,cn.apply(null,arguments)}function zr(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function nn(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function Is(){this.s=this.s,this.o=this.o}var _0=0;Is.prototype.s=!1;Is.prototype.na=function(){!this.s&&(this.s=!0,this.M(),_0!=0)&&d0(this)};Is.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const vp=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Zl(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Su(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(zo(s)){const i=t.length||0,r=s.length||0;t.length=i+r;for(let o=0;o<r;o++)t[i+o]=s[o]}else t.push(s)}}function un(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}un.prototype.h=function(){this.defaultPrevented=!0};var v0=function(){if(!Ie.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Ie.addEventListener("test",vo,e),Ie.removeEventListener("test",vo,e)}catch{}return t}();function yo(t){return/^[\s\xa0]*$/.test(t)}var Au=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Ba(t,e){return t<e?-1:t>e?1:0}function Go(){var t=Ie.navigator;return t&&(t=t.userAgent)?t:""}function Fn(t){return Go().indexOf(t)!=-1}function ec(t){return ec[" "](t),t}ec[" "]=vo;function y0(t){var e=k0;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var b0=Fn("Opera"),mi=Fn("Trident")||Fn("MSIE"),yp=Fn("Edge"),hl=yp||mi,bp=Fn("Gecko")&&!(Go().toLowerCase().indexOf("webkit")!=-1&&!Fn("Edge"))&&!(Fn("Trident")||Fn("MSIE"))&&!Fn("Edge"),w0=Go().toLowerCase().indexOf("webkit")!=-1&&!Fn("Edge");function wp(){var t=Ie.document;return t?t.documentMode:void 0}var bo;e:{var ja="",qa=function(){var t=Go();if(bp)return/rv:([^\);]+)(\)|;)/.exec(t);if(yp)return/Edge\/([\d\.]+)/.exec(t);if(mi)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(w0)return/WebKit\/(\S+)/.exec(t);if(b0)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(qa&&(ja=qa?qa[1]:""),mi){var Ha=wp();if(Ha!=null&&Ha>parseFloat(ja)){bo=String(Ha);break e}}bo=ja}var k0={};function E0(){return y0(function(){let t=0;const e=Au(String(bo)).split("."),n=Au("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;t=Ba(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||Ba(i[2].length==0,r[2].length==0)||Ba(i[2],r[2]),i=i[3],r=r[3]}while(t==0)}return 0<=t})}var fl;if(Ie.document&&mi){var Du=wp();fl=Du||parseInt(bo,10)||void 0}else fl=void 0;var T0=fl;function Xi(t,e){if(un.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(bp){e:{try{ec(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:I0[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Xi.X.h.call(this)}}nn(Xi,un);var I0={2:"touch",3:"pen",4:"mouse"};Xi.prototype.h=function(){Xi.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var wr="closure_listenable_"+(1e6*Math.random()|0),C0=0;function S0(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=i,this.key=++C0,this.ba=this.ea=!1}function Wo(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function tc(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function kp(t){const e={};for(const n in t)e[n]=t[n];return e}const Ru="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ep(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<Ru.length;r++)n=Ru[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Qo(t){this.src=t,this.g={},this.h=0}Qo.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=pl(t,e,s,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new S0(e,this.src,r,!!s,i),e.ea=n,t.push(e)),e};function dl(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=vp(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(Wo(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function pl(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==s)return i}return-1}var nc="closure_lm_"+(1e6*Math.random()|0),Ka={};function Tp(t,e,n,s,i){if(s&&s.once)return Cp(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)Tp(t,e[r],n,s,i);return null}return n=rc(n),t&&t[wr]?t.N(e,n,br(s)?!!s.capture:!!s,i):Ip(t,e,n,!1,s,i)}function Ip(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=br(i)?!!i.capture:!!i,a=ic(t);if(a||(t[nc]=a=new Qo(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=A0(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)v0||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(Ap(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function A0(){function t(n){return e.call(t.src,t.listener,n)}const e=D0;return t}function Cp(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)Cp(t,e[r],n,s,i);return null}return n=rc(n),t&&t[wr]?t.O(e,n,br(s)?!!s.capture:!!s,i):Ip(t,e,n,!0,s,i)}function Sp(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)Sp(t,e[r],n,s,i);else s=br(s)?!!s.capture:!!s,n=rc(n),t&&t[wr]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=pl(r,n,s,i),-1<n&&(Wo(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=ic(t))&&(e=t.g[e.toString()],t=-1,e&&(t=pl(e,n,s,i)),(n=-1<t?e[t]:null)&&sc(n))}function sc(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[wr])dl(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Ap(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=ic(e))?(dl(n,t),n.h==0&&(n.src=null,e[nc]=null)):Wo(t)}}}function Ap(t){return t in Ka?Ka[t]:Ka[t]="on"+t}function D0(t,e){if(t.ba)t=!0;else{e=new Xi(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&sc(t),t=n.call(s,e)}return t}function ic(t){return t=t[nc],t instanceof Qo?t:null}var za="__closure_events_fn_"+(1e9*Math.random()>>>0);function rc(t){return typeof t=="function"?t:(t[za]||(t[za]=function(e){return t.handleEvent(e)}),t[za])}function Wt(){Is.call(this),this.i=new Qo(this),this.P=this,this.I=null}nn(Wt,Is);Wt.prototype[wr]=!0;Wt.prototype.removeEventListener=function(t,e,n,s){Sp(this,t,e,n,s)};function tn(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new un(e,t);else if(e instanceof un)e.target=e.target||t;else{var i=e;e=new un(s,t),Ep(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=Gr(o,s,!0,e)&&i}if(o=e.g=t,i=Gr(o,s,!0,e)&&i,i=Gr(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=Gr(o,s,!1,e)&&i}Wt.prototype.M=function(){if(Wt.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Wo(n[s]);delete t.g[e],t.h--}}this.I=null};Wt.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Wt.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Gr(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&dl(t.i,o),i=a.call(l,s)!==!1&&i}}return i&&!s.defaultPrevented}var oc=Ie.JSON.stringify;function R0(){var t=Pp;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class P0{constructor(){this.h=this.g=null}add(e,n){const s=Dp.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Dp=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new N0,t=>t.reset());class N0{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function O0(t){Ie.setTimeout(()=>{throw t},0)}function Rp(t,e){ml||$0(),gl||(ml(),gl=!0),Pp.add(t,e)}var ml;function $0(){var t=Ie.Promise.resolve(void 0);ml=function(){t.then(L0)}}var gl=!1,Pp=new P0;function L0(){for(var t;t=R0();){try{t.h.call(t.g)}catch(n){O0(n)}var e=Dp;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}gl=!1}function xo(t,e){Wt.call(this),this.h=t||1,this.g=e||Ie,this.j=cn(this.lb,this),this.l=Date.now()}nn(xo,Wt);he=xo.prototype;he.ca=!1;he.R=null;he.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),tn(this,"tick"),this.ca&&(ac(this),this.start()))}};he.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function ac(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}he.M=function(){xo.X.M.call(this),ac(this),delete this.g};function lc(t,e,n){if(typeof t=="function")n&&(t=cn(t,n));else if(t&&typeof t.handleEvent=="function")t=cn(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Ie.setTimeout(t,e||0)}function Np(t){t.g=lc(()=>{t.g=null,t.i&&(t.i=!1,Np(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class M0 extends Is{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Np(this)}M(){super.M(),this.g&&(Ie.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ji(t){Is.call(this),this.h=t,this.g={}}nn(Ji,Is);var Pu=[];function Op(t,e,n,s){Array.isArray(n)||(n&&(Pu[0]=n.toString()),n=Pu);for(var i=0;i<n.length;i++){var r=Tp(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function $p(t){tc(t.g,function(e,n){this.g.hasOwnProperty(n)&&sc(e)},t),t.g={}}Ji.prototype.M=function(){Ji.X.M.call(this),$p(this)};Ji.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Yo(){this.g=!0}Yo.prototype.Aa=function(){this.g=!1};function U0(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var h=c[0];c=c[1];var f=h.split("_");o=2<=f.length&&f[1]=="type"?o+(h+"="+c+"&"):o+(h+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function F0(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function si(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+B0(t,n)+(s?" "+s:"")})}function V0(t,e){t.info(function(){return"TIMEOUT: "+e})}Yo.prototype.info=function(){};function B0(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return oc(n)}catch{return e}}var xs={},Nu=null;function Xo(){return Nu=Nu||new Wt}xs.Pa="serverreachability";function Lp(t){un.call(this,xs.Pa,t)}nn(Lp,un);function Zi(t){const e=Xo();tn(e,new Lp(e))}xs.STAT_EVENT="statevent";function Mp(t,e){un.call(this,xs.STAT_EVENT,t),this.stat=e}nn(Mp,un);function mn(t){const e=Xo();tn(e,new Mp(e,t))}xs.Qa="timingevent";function Up(t,e){un.call(this,xs.Qa,t),this.size=e}nn(Up,un);function kr(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Ie.setTimeout(function(){t()},e)}var Jo={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Fp={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function cc(){}cc.prototype.h=null;function Ou(t){return t.h||(t.h=t.i())}function Vp(){}var Er={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function uc(){un.call(this,"d")}nn(uc,un);function hc(){un.call(this,"c")}nn(hc,un);var _l;function Zo(){}nn(Zo,cc);Zo.prototype.g=function(){return new XMLHttpRequest};Zo.prototype.i=function(){return{}};_l=new Zo;function Tr(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new Ji(this),this.O=j0,t=hl?125:void 0,this.T=new xo(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Bp}function Bp(){this.i=null,this.g="",this.h=!1}var j0=45e3,vl={},wo={};he=Tr.prototype;he.setTimeout=function(t){this.O=t};function yl(t,e,n){t.K=1,t.v=ta(es(e)),t.s=n,t.P=!0,jp(t,null)}function jp(t,e){t.F=Date.now(),Ir(t),t.A=es(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),xp(n.i,"t",s),t.C=0,n=t.l.H,t.h=new Bp,t.g=gm(t.l,n?e:null,!t.s),0<t.N&&(t.L=new M0(cn(t.La,t,t.g),t.N)),Op(t.S,t.g,"readystatechange",t.ib),e=t.H?kp(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Zi(),U0(t.j,t.u,t.A,t.m,t.U,t.s)}he.ib=function(t){t=t.target;const e=this.L;e&&Qn(t)==3?e.l():this.La(t)};he.La=function(t){try{if(t==this.g)e:{const h=Qn(this.g);var e=this.g.Ea();const f=this.g.aa();if(!(3>h)&&(h!=3||hl||this.g&&(this.h.h||this.g.fa()||Uu(this.g)))){this.I||h!=4||e==7||(e==8||0>=f?Zi(3):Zi(2)),ea(this);var n=this.g.aa();this.Y=n;t:if(qp(this)){var s=Uu(this.g);t="";var i=s.length,r=Qn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ps(this),Hi(this);var o="";break t}this.h.i=new Ie.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,F0(this.j,this.u,this.A,this.m,this.U,h,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!yo(a)){var c=a;break t}}c=null}if(n=c)si(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,bl(this,n);else{this.i=!1,this.o=3,mn(12),Ps(this),Hi(this);break e}}this.P?(Hp(this,h,o),hl&&this.i&&h==3&&(Op(this.S,this.T,"tick",this.hb),this.T.start())):(si(this.j,this.m,o,null),bl(this,o)),h==4&&Ps(this),this.i&&!this.I&&(h==4?fm(this.l,this):(this.i=!1,Ir(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,mn(12)):(this.o=0,mn(13)),Ps(this),Hi(this)}}}catch{}finally{}};function qp(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Hp(t,e,n){let s=!0,i;for(;!t.I&&t.C<n.length;)if(i=q0(t,n),i==wo){e==4&&(t.o=4,mn(14),s=!1),si(t.j,t.m,null,"[Incomplete Response]");break}else if(i==vl){t.o=4,mn(15),si(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else si(t.j,t.m,i,null),bl(t,i);qp(t)&&i!=wo&&i!=vl&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,mn(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),vc(e),e.K=!0,mn(11))):(si(t.j,t.m,n,"[Invalid Chunked Response]"),Ps(t),Hi(t))}he.hb=function(){if(this.g){var t=Qn(this.g),e=this.g.fa();this.C<e.length&&(ea(this),Hp(this,t,e),this.i&&t!=4&&Ir(this))}};function q0(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?wo:(n=Number(e.substring(n,s)),isNaN(n)?vl:(s+=1,s+n>e.length?wo:(e=e.substr(s,n),t.C=s+n,e)))}he.cancel=function(){this.I=!0,Ps(this)};function Ir(t){t.V=Date.now()+t.O,Kp(t,t.O)}function Kp(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=kr(cn(t.gb,t),e)}function ea(t){t.B&&(Ie.clearTimeout(t.B),t.B=null)}he.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(V0(this.j,this.A),this.K!=2&&(Zi(),mn(17)),Ps(this),this.o=2,Hi(this)):Kp(this,this.V-t)};function Hi(t){t.l.G==0||t.I||fm(t.l,t)}function Ps(t){ea(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,ac(t.T),$p(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function bl(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||wl(n.h,t))){if(!t.J&&wl(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)To(n),ia(n);else break e;_c(n),mn(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=kr(cn(n.cb,n),6e3));if(1>=Jp(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Ns(n,11)}else if((t.J||n.g==t)&&To(n),!yo(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.T=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.I=c[1],n.ka=c[2];const h=c[3];h!=null&&(n.ma=h,n.j.info("VER="+n.ma));const f=c[4];f!=null&&(n.Ca=f,n.j.info("SVER="+n.Ca));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const m=t.g;if(m){const _=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_){var r=s.h;r.g||_.indexOf("spdy")==-1&&_.indexOf("quic")==-1&&_.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(fc(r,r.h),r.h=null))}if(s.D){const v=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(s.za=v,pt(s.F,s.D,v))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=mm(s,s.H?s.ka:null,s.V),o.J){Zp(s.h,o);var a=o,l=s.J;l&&a.setTimeout(l),a.B&&(ea(a),Ir(a)),s.g=o}else um(s);0<n.i.length&&ra(n)}else c[0]!="stop"&&c[0]!="close"||Ns(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Ns(n,7):gc(n):c[0]!="noop"&&n.l&&n.l.wa(c),n.A=0)}}Zi(4)}catch{}}function H0(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(zo(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function K0(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(zo(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function zp(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(zo(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=K0(t),s=H0(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}var Gp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function z0(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function $s(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof $s){this.h=e!==void 0?e:t.h,ko(this,t.j),this.s=t.s,this.g=t.g,Eo(this,t.m),this.l=t.l,e=t.i;var n=new er;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),$u(this,n),this.o=t.o}else t&&(n=String(t).match(Gp))?(this.h=!!e,ko(this,n[1]||"",!0),this.s=Fi(n[2]||""),this.g=Fi(n[3]||"",!0),Eo(this,n[4]),this.l=Fi(n[5]||"",!0),$u(this,n[6]||"",!0),this.o=Fi(n[7]||"")):(this.h=!!e,this.i=new er(null,this.h))}$s.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Vi(e,Lu,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Vi(e,Lu,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Vi(n,n.charAt(0)=="/"?Q0:W0,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Vi(n,Y0)),t.join("")};function es(t){return new $s(t)}function ko(t,e,n){t.j=n?Fi(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Eo(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function $u(t,e,n){e instanceof er?(t.i=e,X0(t.i,t.h)):(n||(e=Vi(e,x0)),t.i=new er(e,t.h))}function pt(t,e,n){t.i.set(e,n)}function ta(t){return pt(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Fi(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Vi(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,G0),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function G0(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Lu=/[#\/\?@]/g,W0=/[#\?:]/g,Q0=/[#\?]/g,x0=/[#\?@]/g,Y0=/#/g;function er(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Cs(t){t.g||(t.g=new Map,t.h=0,t.i&&z0(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}he=er.prototype;he.add=function(t,e){Cs(this),this.i=null,t=Ti(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Wp(t,e){Cs(t),e=Ti(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Qp(t,e){return Cs(t),e=Ti(t,e),t.g.has(e)}he.forEach=function(t,e){Cs(this),this.g.forEach(function(n,s){n.forEach(function(i){t.call(e,i,s,this)},this)},this)};he.oa=function(){Cs(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let r=0;r<i.length;r++)n.push(e[s])}return n};he.W=function(t){Cs(this);let e=[];if(typeof t=="string")Qp(this,t)&&(e=e.concat(this.g.get(Ti(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};he.set=function(t,e){return Cs(this),this.i=null,t=Ti(this,t),Qp(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};he.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function xp(t,e,n){Wp(t,e),0<n.length&&(t.i=null,t.g.set(Ti(t,e),Zl(n)),t.h+=n.length)}he.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};function Ti(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function X0(t,e){e&&!t.j&&(Cs(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(Wp(this,s),xp(this,i,n))},t)),t.j=e}var J0=class{constructor(t,e){this.h=t,this.g=e}};function Yp(t){this.l=t||Z0,Ie.PerformanceNavigationTiming?(t=Ie.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Ie.g&&Ie.g.Ga&&Ie.g.Ga()&&Ie.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Z0=10;function Xp(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Jp(t){return t.h?1:t.g?t.g.size:0}function wl(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function fc(t,e){t.g?t.g.add(e):t.h=e}function Zp(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Yp.prototype.cancel=function(){if(this.i=em(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function em(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Zl(t.i)}function dc(){}dc.prototype.stringify=function(t){return Ie.JSON.stringify(t,void 0)};dc.prototype.parse=function(t){return Ie.JSON.parse(t,void 0)};function e1(){this.g=new dc}function t1(t,e,n){const s=n||"";try{zp(t,function(i,r){let o=i;br(i)&&(o=oc(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function n1(t,e){const n=new Yo;if(Ie.Image){const s=new Image;s.onload=zr(Wr,n,s,"TestLoadImage: loaded",!0,e),s.onerror=zr(Wr,n,s,"TestLoadImage: error",!1,e),s.onabort=zr(Wr,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=zr(Wr,n,s,"TestLoadImage: timeout",!1,e),Ie.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Wr(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function Cr(t){this.l=t.ac||null,this.j=t.jb||!1}nn(Cr,cc);Cr.prototype.g=function(){return new na(this.l,this.j)};Cr.prototype.i=function(t){return function(){return t}}({});function na(t,e){Wt.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=pc,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}nn(na,Wt);var pc=0;he=na.prototype;he.open=function(t,e){if(this.readyState!=pc)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,tr(this)};he.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||Ie).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};he.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Sr(this)),this.readyState=pc};he.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,tr(this)),this.g&&(this.readyState=3,tr(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof Ie.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;tm(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function tm(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}he.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Sr(this):tr(this),this.readyState==3&&tm(this)}};he.Va=function(t){this.g&&(this.response=this.responseText=t,Sr(this))};he.Ua=function(t){this.g&&(this.response=t,Sr(this))};he.ga=function(){this.g&&Sr(this)};function Sr(t){t.readyState=4,t.l=null,t.j=null,t.A=null,tr(t)}he.setRequestHeader=function(t,e){this.v.append(t,e)};he.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};he.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function tr(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(na.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var s1=Ie.JSON.parse;function It(t){Wt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=nm,this.K=this.L=!1}nn(It,Wt);var nm="",i1=/^https?$/i,r1=["POST","PUT"];he=It.prototype;he.Ka=function(t){this.L=t};he.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():_l.g(),this.C=this.u?Ou(this.u):Ou(_l),this.g.onreadystatechange=cn(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){Mu(this,r);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=Ie.FormData&&t instanceof Ie.FormData,!(0<=vp(r1,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{rm(this),0<this.B&&((this.K=o1(this.g))?(this.g.timeout=this.B,this.g.ontimeout=cn(this.qa,this)):this.A=lc(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){Mu(this,r)}};function o1(t){return mi&&E0()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}he.qa=function(){typeof Jl<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,tn(this,"timeout"),this.abort(8))};function Mu(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,sm(t),sa(t)}function sm(t){t.D||(t.D=!0,tn(t,"complete"),tn(t,"error"))}he.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,tn(this,"complete"),tn(this,"abort"),sa(this))};he.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),sa(this,!0)),It.X.M.call(this)};he.Ha=function(){this.s||(this.F||this.v||this.l?im(this):this.fb())};he.fb=function(){im(this)};function im(t){if(t.h&&typeof Jl<"u"&&(!t.C[1]||Qn(t)!=4||t.aa()!=2)){if(t.v&&Qn(t)==4)lc(t.Ha,0,t);else if(tn(t,"readystatechange"),Qn(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var i=String(t.H).match(Gp)[1]||null;if(!i&&Ie.self&&Ie.self.location){var r=Ie.self.location.protocol;i=r.substr(0,r.length-1)}s=!i1.test(i?i.toLowerCase():"")}n=s}if(n)tn(t,"complete"),tn(t,"success");else{t.m=6;try{var o=2<Qn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",sm(t)}}finally{sa(t)}}}}function sa(t,e){if(t.g){rm(t);const n=t.g,s=t.C[0]?vo:null;t.g=null,t.C=null,e||tn(t,"ready");try{n.onreadystatechange=s}catch{}}}function rm(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(Ie.clearTimeout(t.A),t.A=null)}function Qn(t){return t.g?t.g.readyState:0}he.aa=function(){try{return 2<Qn(this)?this.g.status:-1}catch{return-1}};he.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};he.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),s1(e)}};function Uu(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case nm:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}he.Ea=function(){return this.m};he.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function om(t){let e="";return tc(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function mc(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=om(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):pt(t,e,n))}function Oi(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function am(t){this.Ca=0,this.i=[],this.j=new Yo,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Oi("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Oi("baseRetryDelayMs",5e3,t),this.bb=Oi("retryDelaySeedMs",1e4,t),this.$a=Oi("forwardChannelMaxRetries",2,t),this.ta=Oi("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Yp(t&&t.concurrentRequestLimit),this.Fa=new e1,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}he=am.prototype;he.ma=8;he.G=1;function gc(t){if(lm(t),t.G==3){var e=t.U++,n=es(t.F);pt(n,"SID",t.I),pt(n,"RID",e),pt(n,"TYPE","terminate"),Ar(t,n),e=new Tr(t,t.j,e,void 0),e.K=2,e.v=ta(es(n)),n=!1,Ie.navigator&&Ie.navigator.sendBeacon&&(n=Ie.navigator.sendBeacon(e.v.toString(),"")),!n&&Ie.Image&&(new Image().src=e.v,n=!0),n||(e.g=gm(e.l,null),e.g.da(e.v)),e.F=Date.now(),Ir(e)}pm(t)}function ia(t){t.g&&(vc(t),t.g.cancel(),t.g=null)}function lm(t){ia(t),t.u&&(Ie.clearTimeout(t.u),t.u=null),To(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&Ie.clearTimeout(t.m),t.m=null)}function ra(t){Xp(t.h)||t.m||(t.m=!0,Rp(t.Ja,t),t.C=0)}function a1(t,e){return Jp(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=kr(cn(t.Ja,t,e),dm(t,t.C)),t.C++,!0)}he.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new Tr(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=kp(r),Ep(r,this.S)):r=this.S),this.o!==null||this.N||(i.H=r,r=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=cm(this,i,e),n=es(this.F),pt(n,"RID",t),pt(n,"CVER",22),this.D&&pt(n,"X-HTTP-Session-Id",this.D),Ar(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(om(r)))+"&"+e:this.o&&mc(n,this.o,r)),fc(this.h,i),this.Ya&&pt(n,"TYPE","init"),this.O?(pt(n,"$req",e),pt(n,"SID","null"),i.Z=!0,yl(i,n,null)):yl(i,n,e),this.G=2}}else this.G==3&&(t?Fu(this,t):this.i.length==0||Xp(this.h)||Fu(this))};function Fu(t,e){var n;e?n=e.m:n=t.U++;const s=es(t.F);pt(s,"SID",t.I),pt(s,"RID",n),pt(s,"AID",t.T),Ar(t,s),t.o&&t.s&&mc(s,t.o,t.s),n=new Tr(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=cm(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),fc(t.h,n),yl(n,s,e)}function Ar(t,e){t.ia&&tc(t.ia,function(n,s){pt(e,s,n)}),t.l&&zp({},function(n,s){pt(e,s,n)})}function cm(t,e,n){n=Math.min(t.i.length,n);var s=t.l?cn(t.l.Ra,t.l,t):null;e:{var i=t.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let c=i[l].h;const h=i[l].g;if(c-=r,0>c)r=Math.max(0,i[l].h-100),a=!1;else try{t1(h,o,"req"+c+"_")}catch{s&&s(h)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function um(t){t.g||t.u||(t.Z=1,Rp(t.Ia,t),t.A=0)}function _c(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=kr(cn(t.Ia,t),dm(t,t.A)),t.A++,!0)}he.Ia=function(){if(this.u=null,hm(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=kr(cn(this.eb,this),t)}};he.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,mn(10),ia(this),hm(this))};function vc(t){t.B!=null&&(Ie.clearTimeout(t.B),t.B=null)}function hm(t){t.g=new Tr(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=es(t.sa);pt(e,"RID","rpc"),pt(e,"SID",t.I),pt(e,"CI",t.L?"0":"1"),pt(e,"AID",t.T),pt(e,"TYPE","xmlhttp"),Ar(t,e),t.o&&t.s&&mc(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=ta(es(e)),n.s=null,n.P=!0,jp(n,t)}he.cb=function(){this.v!=null&&(this.v=null,ia(this),_c(this),mn(19))};function To(t){t.v!=null&&(Ie.clearTimeout(t.v),t.v=null)}function fm(t,e){var n=null;if(t.g==e){To(t),vc(t),t.g=null;var s=2}else if(wl(t.h,e))n=e.D,Zp(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;s=Xo(),tn(s,new Up(s,n)),ra(t)}else um(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(s==1&&a1(t,e)||s==2&&_c(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Ns(t,5);break;case 4:Ns(t,10);break;case 3:Ns(t,6);break;default:Ns(t,2)}}}function dm(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Ns(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=cn(t.kb,t);n||(n=new $s("//www.google.com/images/cleardot.gif"),Ie.location&&Ie.location.protocol=="http"||ko(n,"https"),ta(n)),n1(n.toString(),s)}else mn(2);t.G=0,t.l&&t.l.va(e),pm(t),lm(t)}he.kb=function(t){t?(this.j.info("Successfully pinged google.com"),mn(2)):(this.j.info("Failed to ping google.com"),mn(1))};function pm(t){if(t.G=0,t.la=[],t.l){const e=em(t.h);(e.length!=0||t.i.length!=0)&&(Su(t.la,e),Su(t.la,t.i),t.h.i.length=0,Zl(t.i),t.i.length=0),t.l.ua()}}function mm(t,e,n){var s=n instanceof $s?es(n):new $s(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),Eo(s,s.m);else{var i=Ie.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new $s(null,void 0);s&&ko(r,s),e&&(r.g=e),i&&Eo(r,i),n&&(r.l=n),s=r}return n=t.D,e=t.za,n&&e&&pt(s,n,e),pt(s,"VER",t.ma),Ar(t,s),s}function gm(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new It(new Cr({jb:!0})):new It(t.ra),e.Ka(t.H),e}function _m(){}he=_m.prototype;he.xa=function(){};he.wa=function(){};he.va=function(){};he.ua=function(){};he.Ra=function(){};function Io(){if(mi&&!(10<=Number(T0)))throw Error("Environmental error: no available transport.")}Io.prototype.g=function(t,e){return new An(t,e)};function An(t,e){Wt.call(this),this.g=new am(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!yo(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!yo(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ii(this)}nn(An,Wt);An.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;mn(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=mm(t,null,t.V),ra(t)};An.prototype.close=function(){gc(this.g)};An.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=oc(t),t=n);e.i.push(new J0(e.ab++,t)),e.G==3&&ra(e)};An.prototype.M=function(){this.g.l=null,delete this.j,gc(this.g),delete this.g,An.X.M.call(this)};function vm(t){uc.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}nn(vm,uc);function ym(){hc.call(this),this.status=1}nn(ym,hc);function Ii(t){this.g=t}nn(Ii,_m);Ii.prototype.xa=function(){tn(this.g,"a")};Ii.prototype.wa=function(t){tn(this.g,new vm(t))};Ii.prototype.va=function(t){tn(this.g,new ym)};Ii.prototype.ua=function(){tn(this.g,"b")};Io.prototype.createWebChannel=Io.prototype.g;An.prototype.send=An.prototype.u;An.prototype.open=An.prototype.m;An.prototype.close=An.prototype.close;Jo.NO_ERROR=0;Jo.TIMEOUT=8;Jo.HTTP_ERROR=6;Fp.COMPLETE="complete";Vp.EventType=Er;Er.OPEN="a";Er.CLOSE="b";Er.ERROR="c";Er.MESSAGE="d";Wt.prototype.listen=Wt.prototype.N;It.prototype.listenOnce=It.prototype.O;It.prototype.getLastError=It.prototype.Oa;It.prototype.getLastErrorCode=It.prototype.Ea;It.prototype.getStatus=It.prototype.aa;It.prototype.getResponseJson=It.prototype.Sa;It.prototype.getResponseText=It.prototype.fa;It.prototype.send=It.prototype.da;It.prototype.setWithCredentials=It.prototype.Ka;var l1=function(){return new Io},c1=function(){return Xo()},Ga=Jo,u1=Fp,h1=xs,Vu={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},f1=Cr,Qr=Vp,d1=It;const Bu="@firebase/firestore";/**
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
 */class an{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}an.UNAUTHENTICATED=new an(null),an.GOOGLE_CREDENTIALS=new an("google-credentials-uid"),an.FIRST_PARTY=new an("first-party-uid"),an.MOCK_USER=new an("mock-user");/**
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
 */let Ci="9.12.1";/**
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
 */const Hs=new xl("@firebase/firestore");function ju(){return Hs.logLevel}function me(t,...e){if(Hs.logLevel<=qe.DEBUG){const n=e.map(yc);Hs.debug(`Firestore (${Ci}): ${t}`,...n)}}function ts(t,...e){if(Hs.logLevel<=qe.ERROR){const n=e.map(yc);Hs.error(`Firestore (${Ci}): ${t}`,...n)}}function kl(t,...e){if(Hs.logLevel<=qe.WARN){const n=e.map(yc);Hs.warn(`Firestore (${Ci}): ${t}`,...n)}}function yc(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function Ae(t="Unexpected state"){const e=`FIRESTORE (${Ci}) INTERNAL ASSERTION FAILED: `+t;throw ts(e),new Error(e)}function lt(t,e){t||Ae()}function De(t,e){return t}/**
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
 */const J={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ye extends os{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class vs{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class bm{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class p1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(an.UNAUTHENTICATED))}shutdown(){}}class m1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class g1{constructor(e){this.t=e,this.currentUser=an.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=l=>this.i!==s?(s=this.i,n(l)):Promise.resolve();let r=new vs;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new vs,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{me("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(me("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new vs)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(me("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(lt(typeof s.accessToken=="string"),new bm(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return lt(e===null||typeof e=="string"),new an(e)}}class _1{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i,this.type="FirstParty",this.user=an.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(lt(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class v1{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i}getToken(){return Promise.resolve(new _1(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(an.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class y1{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class b1{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=r=>{r.error!=null&&me("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.A;return this.A=r.token,me("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{me("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.T.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.T.getImmediate({optional:!0});r?i(r):me("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(lt(typeof n.token=="string"),this.A=n.token,new y1(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function w1(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class wm{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=w1(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function We(t,e){return t<e?-1:t>e?1:0}function gi(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
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
 */class Vt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ye(J.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ye(J.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new ye(J.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ye(J.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Vt.fromMillis(Date.now())}static fromDate(e){return Vt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Vt(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?We(this.nanoseconds,e.nanoseconds):We(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Pe{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Pe(e)}static min(){return new Pe(new Vt(0,0))}static max(){return new Pe(new Vt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class nr{constructor(e,n,s){n===void 0?n=0:n>e.length&&Ae(),s===void 0?s=e.length-n:s>e.length-n&&Ae(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return nr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof nr?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class mt extends nr{construct(e,n,s){return new mt(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new ye(J.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new mt(n)}static emptyPath(){return new mt([])}}const k1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ln extends nr{construct(e,n,s){return new ln(e,n,s)}static isValidIdentifier(e){return k1.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ln.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ln(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new ye(J.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new ye(J.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new ye(J.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new ye(J.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ln(n)}static emptyPath(){return new ln([])}}/**
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
 */class ve{constructor(e){this.path=e}static fromPath(e){return new ve(mt.fromString(e))}static fromName(e){return new ve(mt.fromString(e).popFirst(5))}static empty(){return new ve(mt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&mt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return mt.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ve(new mt(e.slice()))}}function E1(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=Pe.fromTimestamp(s===1e9?new Vt(n+1,0):new Vt(n,s));return new ks(i,ve.empty(),e)}function T1(t){return new ks(t.readTime,t.key,-1)}class ks{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new ks(Pe.min(),ve.empty(),-1)}static max(){return new ks(Pe.max(),ve.empty(),-1)}}function I1(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ve.comparator(t.documentKey,e.documentKey),n!==0?n:We(t.largestBatchId,e.largestBatchId))}/**
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
 */const C1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class S1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Dr(t){if(t.code!==J.FAILED_PRECONDITION||t.message!==C1)throw t;me("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class Z{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Ae(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new Z((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof Z?n:Z.resolve(n)}catch(n){return Z.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):Z.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):Z.reject(n)}static resolve(e){return new Z((n,s)=>{n(e)})}static reject(e){return new Z((n,s)=>{s(e)})}static waitFor(e){return new Z((n,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},l=>s(l))}),o=!0,r===i&&n()})}static or(e){let n=Z.resolve(!1);for(const s of e)n=n.next(i=>i?Z.resolve(i):s());return n}static forEach(e,n){const s=[];return e.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(e,n){return new Z((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let l=0;l<r;l++){const c=l;n(e[c]).next(h=>{o[c]=h,++a,a===r&&s(o)},h=>i(h))}})}static doWhile(e,n){return new Z((s,i)=>{const r=()=>{e()===!0?n().next(()=>{r()},i):s()};r()})}}function Rr(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class bc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}/**
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
 */function qu(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ys(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function km(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */bc.at=-1;class jt{constructor(e,n){this.comparator=e,this.root=n||Jt.EMPTY}insert(e,n){return new jt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Jt.BLACK,null,null))}remove(e){return new jt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Jt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new xr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new xr(this.root,e,this.comparator,!1)}getReverseIterator(){return new xr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new xr(this.root,e,this.comparator,!0)}}class xr{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Jt{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s!=null?s:Jt.RED,this.left=i!=null?i:Jt.EMPTY,this.right=r!=null?r:Jt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new Jt(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Jt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Jt.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Jt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Jt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Ae();const e=this.left.check();if(e!==this.right.check())throw Ae();return e+(this.isRed()?0:1)}}Jt.EMPTY=null,Jt.RED=!0,Jt.BLACK=!1;Jt.EMPTY=new class{constructor(){this.size=0}get key(){throw Ae()}get value(){throw Ae()}get color(){throw Ae()}get left(){throw Ae()}get right(){throw Ae()}copy(t,e,n,s,i){return this}insert(t,e,n){return new Jt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Bt{constructor(e){this.comparator=e,this.data=new jt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Hu(this.data.getIterator())}getIteratorFrom(e){return new Hu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof Bt)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Bt(this.comparator);return n.data=e,n}}class Hu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Nn{constructor(e){this.fields=e,e.sort(ln.comparator)}static empty(){return new Nn([])}unionWith(e){let n=new Bt(ln.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Nn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return gi(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class fn{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new fn(n)}static fromUint8Array(e){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(e);return new fn(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return We(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}fn.EMPTY_BYTE_STRING=new fn("");const A1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Es(t){if(lt(!!t),typeof t=="string"){let e=0;const n=A1.exec(t);if(lt(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Pt(t.seconds),nanos:Pt(t.nanos)}}function Pt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function _i(t){return typeof t=="string"?fn.fromBase64String(t):fn.fromUint8Array(t)}/**
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
 */function Em(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Tm(t){const e=t.mapValue.fields.__previous_value__;return Em(e)?Tm(e):e}function sr(t){const e=Es(t.mapValue.fields.__local_write_time__.timestampValue);return new Vt(e.seconds,e.nanos)}/**
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
 */class D1{constructor(e,n,s,i,r,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class ir{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ir("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ir&&e.projectId===this.projectId&&e.database===this.database}}function oa(t){return t==null}function Co(t){return t===0&&1/t==-1/0}function R1(t){return typeof t=="number"&&Number.isInteger(t)&&!Co(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const Yr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ks(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Em(t)?4:P1(t)?9007199254740991:10:Ae()}function Kn(t,e){if(t===e)return!0;const n=Ks(t);if(n!==Ks(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return sr(t).isEqual(sr(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=Es(s.timestampValue),o=Es(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return _i(s.bytesValue).isEqual(_i(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Pt(s.geoPointValue.latitude)===Pt(i.geoPointValue.latitude)&&Pt(s.geoPointValue.longitude)===Pt(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Pt(s.integerValue)===Pt(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=Pt(s.doubleValue),o=Pt(i.doubleValue);return r===o?Co(r)===Co(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return gi(t.arrayValue.values||[],e.arrayValue.values||[],Kn);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(qu(r)!==qu(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!Kn(r[a],o[a])))return!1;return!0}(t,e);default:return Ae()}}function rr(t,e){return(t.values||[]).find(n=>Kn(n,e))!==void 0}function vi(t,e){if(t===e)return 0;const n=Ks(t),s=Ks(e);if(n!==s)return We(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return We(t.booleanValue,e.booleanValue);case 2:return function(i,r){const o=Pt(i.integerValue||i.doubleValue),a=Pt(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Ku(t.timestampValue,e.timestampValue);case 4:return Ku(sr(t),sr(e));case 5:return We(t.stringValue,e.stringValue);case 6:return function(i,r){const o=_i(i),a=_i(r);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=We(o[l],a[l]);if(c!==0)return c}return We(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,r){const o=We(Pt(i.latitude),Pt(r.latitude));return o!==0?o:We(Pt(i.longitude),Pt(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=vi(o[l],a[l]);if(c)return c}return We(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,r){if(i===Yr.mapValue&&r===Yr.mapValue)return 0;if(i===Yr.mapValue)return 1;if(r===Yr.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=r.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let h=0;h<a.length&&h<c.length;++h){const f=We(a[h],c[h]);if(f!==0)return f;const d=vi(o[a[h]],l[c[h]]);if(d!==0)return d}return We(a.length,c.length)}(t.mapValue,e.mapValue);default:throw Ae()}}function Ku(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return We(t,e);const n=Es(t),s=Es(e),i=We(n.seconds,s.seconds);return i!==0?i:We(n.nanos,s.nanos)}function ai(t){return El(t)}function El(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const i=Es(s);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?_i(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,ve.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=El(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${El(s.fields[a])}`;return r+"}"}(t.mapValue):Ae();var e,n}function Tl(t){return!!t&&"integerValue"in t}function wc(t){return!!t&&"arrayValue"in t}function zu(t){return!!t&&"nullValue"in t}function Gu(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function to(t){return!!t&&"mapValue"in t}function Ki(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ys(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Ki(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ki(t.arrayValue.values[n]);return e}return Object.assign({},t)}function P1(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class En{constructor(e){this.value=e}static empty(){return new En({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!to(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ki(n)}setAll(e){let n=ln.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=Ki(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());to(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Kn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];to(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){Ys(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new En(Ki(this.value))}}function Im(t){const e=[];return Ys(t.fields,(n,s)=>{const i=new ln([n]);if(to(s)){const r=Im(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new Nn(e)}/**
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
 */class Zt{constructor(e,n,s,i,r,o){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.data=r,this.documentState=o}static newInvalidDocument(e){return new Zt(e,0,Pe.min(),Pe.min(),En.empty(),0)}static newFoundDocument(e,n,s){return new Zt(e,1,n,Pe.min(),s,0)}static newNoDocument(e,n){return new Zt(e,2,n,Pe.min(),En.empty(),0)}static newUnknownDocument(e,n){return new Zt(e,3,n,Pe.min(),En.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=En.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=En.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Pe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Zt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Zt(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class N1{constructor(e,n=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.ht=null}}function Wu(t,e=null,n=[],s=[],i=null,r=null,o=null){return new N1(t,e,n,s,i,r,o)}function kc(t){const e=De(t);if(e.ht===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>{return(i=s).field.canonicalString()+i.op.toString()+ai(i.value);var i}).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),oa(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>ai(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>ai(s)).join(",")),e.ht=n}return e.ht}function O1(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${ai(s.value)}`;var s}).join(", ")}]`),oa(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>ai(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>ai(n)).join(",")),`Target(${e})`}function Ec(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!j1(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],s=e.filters[i],n.op!==s.op||!n.field.isEqual(s.field)||!Kn(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!xu(t.startAt,e.startAt)&&xu(t.endAt,e.endAt)}function Il(t){return ve.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class In extends class{}{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.lt(e,n,s):new $1(e,n,s):n==="array-contains"?new U1(e,s):n==="in"?new F1(e,s):n==="not-in"?new V1(e,s):n==="array-contains-any"?new B1(e,s):new In(e,n,s)}static lt(e,n,s){return n==="in"?new L1(e,s):new M1(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.ft(vi(n,this.value)):n!==null&&Ks(this.value)===Ks(n)&&this.ft(vi(n,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ae()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class $1 extends In{constructor(e,n,s){super(e,n,s),this.key=ve.fromName(s.referenceValue)}matches(e){const n=ve.comparator(e.key,this.key);return this.ft(n)}}class L1 extends In{constructor(e,n){super(e,"in",n),this.keys=Cm("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class M1 extends In{constructor(e,n){super(e,"not-in",n),this.keys=Cm("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Cm(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>ve.fromName(s.referenceValue))}class U1 extends In{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return wc(n)&&rr(n.arrayValue,this.value)}}class F1 extends In{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&rr(this.value.arrayValue,n)}}class V1 extends In{constructor(e,n){super(e,"not-in",n)}matches(e){if(rr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!rr(this.value.arrayValue,n)}}class B1 extends In{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!wc(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>rr(this.value.arrayValue,s))}}class So{constructor(e,n){this.position=e,this.inclusive=n}}class zi{constructor(e,n="asc"){this.field=e,this.dir=n}}function j1(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Qu(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=ve.comparator(ve.fromName(o.referenceValue),n.key):s=vi(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function xu(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Kn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class aa{constructor(e,n=null,s=[],i=[],r=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this._t=null,this.wt=null,this.startAt,this.endAt}}function q1(t,e,n,s,i,r,o,a){return new aa(t,e,n,s,i,r,o,a)}function Sm(t){return new aa(t)}function Yu(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function H1(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function K1(t){for(const e of t.filters)if(e.dt())return e.field;return null}function z1(t){return t.collectionGroup!==null}function or(t){const e=De(t);if(e._t===null){e._t=[];const n=K1(e),s=H1(e);if(n!==null&&s===null)n.isKeyField()||e._t.push(new zi(n)),e._t.push(new zi(ln.keyField(),"asc"));else{let i=!1;for(const r of e.explicitOrderBy)e._t.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new zi(ln.keyField(),r))}}}return e._t}function ns(t){const e=De(t);if(!e.wt)if(e.limitType==="F")e.wt=Wu(e.path,e.collectionGroup,or(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of or(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new zi(r.field,o))}const s=e.endAt?new So(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new So(e.startAt.position,e.startAt.inclusive):null;e.wt=Wu(e.path,e.collectionGroup,n,e.filters,e.limit,s,i)}return e.wt}function Cl(t,e,n){return new aa(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function la(t,e){return Ec(ns(t),ns(e))&&t.limitType===e.limitType}function Am(t){return`${kc(ns(t))}|lt:${t.limitType}`}function Sl(t){return`Query(target=${O1(ns(t))}; limitType=${t.limitType})`}function Tc(t,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):ve.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,s){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=Qu(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,or(n),s)||n.endAt&&!function(i,r,o){const a=Qu(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,or(n),s))}(t,e)}function G1(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Dm(t){return(e,n)=>{let s=!1;for(const i of or(t)){const r=W1(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function W1(t,e,n){const s=t.field.isKeyField()?ve.comparator(e.key,n.key):function(i,r,o){const a=r.data.field(i),l=o.data.field(i);return a!==null&&l!==null?vi(a,l):Ae()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return Ae()}}/**
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
 */function Rm(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Co(e)?"-0":e}}function Pm(t){return{integerValue:""+t}}function Q1(t,e){return R1(e)?Pm(e):Rm(t,e)}/**
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
 */class ca{constructor(){this._=void 0}}function x1(t,e,n){return t instanceof Ao?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,e):t instanceof ar?Om(t,e):t instanceof lr?$m(t,e):function(s,i){const r=Nm(s,i),o=Xu(r)+Xu(s.yt);return Tl(r)&&Tl(s.yt)?Pm(o):Rm(s.It,o)}(t,e)}function Y1(t,e,n){return t instanceof ar?Om(t,e):t instanceof lr?$m(t,e):n}function Nm(t,e){return t instanceof Do?Tl(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Ao extends ca{}class ar extends ca{constructor(e){super(),this.elements=e}}function Om(t,e){const n=Lm(e);for(const s of t.elements)n.some(i=>Kn(i,s))||n.push(s);return{arrayValue:{values:n}}}class lr extends ca{constructor(e){super(),this.elements=e}}function $m(t,e){let n=Lm(e);for(const s of t.elements)n=n.filter(i=>!Kn(i,s));return{arrayValue:{values:n}}}class Do extends ca{constructor(e,n){super(),this.It=e,this.yt=n}}function Xu(t){return Pt(t.integerValue||t.doubleValue)}function Lm(t){return wc(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function X1(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof ar&&s instanceof ar||n instanceof lr&&s instanceof lr?gi(n.elements,s.elements,Kn):n instanceof Do&&s instanceof Do?Kn(n.yt,s.yt):n instanceof Ao&&s instanceof Ao}(t.transform,e.transform)}class J1{constructor(e,n){this.version=e,this.transformResults=n}}class Ln{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ln}static exists(e){return new Ln(void 0,e)}static updateTime(e){return new Ln(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function no(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ua{}function Mm(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Ic(t.key,Ln.none()):new Pr(t.key,t.data,Ln.none());{const n=t.data,s=En.empty();let i=new Bt(ln.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new Ss(t.key,s,new Nn(i.toArray()),Ln.none())}}function Z1(t,e,n){t instanceof Pr?function(s,i,r){const o=s.value.clone(),a=Zu(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Ss?function(s,i,r){if(!no(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=Zu(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(Um(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function Gi(t,e,n,s){return t instanceof Pr?function(i,r,o,a){if(!no(i.precondition,r))return o;const l=i.value.clone(),c=eh(i.fieldTransforms,a,r);return l.setAll(c),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),null}(t,e,n,s):t instanceof Ss?function(i,r,o,a){if(!no(i.precondition,r))return o;const l=eh(i.fieldTransforms,a,r),c=r.data;return c.setAll(Um(i)),c.setAll(l),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,s):function(i,r,o){return no(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(t,e,n)}function eb(t,e){let n=null;for(const s of t.fieldTransforms){const i=e.data.field(s.field),r=Nm(s.transform,i||null);r!=null&&(n===null&&(n=En.empty()),n.set(s.field,r))}return n||null}function Ju(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&gi(n,s,(i,r)=>X1(i,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Pr extends ua{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ss extends ua{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Um(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Zu(t,e,n){const s=new Map;lt(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,Y1(o,a,n[i]))}return s}function eh(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,x1(r,o,e))}return s}class Ic extends ua{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class tb extends ua{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class nb{constructor(e){this.count=e}}/**
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
 */var Rt,Ue;function sb(t){switch(t){default:return Ae();case J.CANCELLED:case J.UNKNOWN:case J.DEADLINE_EXCEEDED:case J.RESOURCE_EXHAUSTED:case J.INTERNAL:case J.UNAVAILABLE:case J.UNAUTHENTICATED:return!1;case J.INVALID_ARGUMENT:case J.NOT_FOUND:case J.ALREADY_EXISTS:case J.PERMISSION_DENIED:case J.FAILED_PRECONDITION:case J.ABORTED:case J.OUT_OF_RANGE:case J.UNIMPLEMENTED:case J.DATA_LOSS:return!0}}function Fm(t){if(t===void 0)return ts("GRPC error has no .code"),J.UNKNOWN;switch(t){case Rt.OK:return J.OK;case Rt.CANCELLED:return J.CANCELLED;case Rt.UNKNOWN:return J.UNKNOWN;case Rt.DEADLINE_EXCEEDED:return J.DEADLINE_EXCEEDED;case Rt.RESOURCE_EXHAUSTED:return J.RESOURCE_EXHAUSTED;case Rt.INTERNAL:return J.INTERNAL;case Rt.UNAVAILABLE:return J.UNAVAILABLE;case Rt.UNAUTHENTICATED:return J.UNAUTHENTICATED;case Rt.INVALID_ARGUMENT:return J.INVALID_ARGUMENT;case Rt.NOT_FOUND:return J.NOT_FOUND;case Rt.ALREADY_EXISTS:return J.ALREADY_EXISTS;case Rt.PERMISSION_DENIED:return J.PERMISSION_DENIED;case Rt.FAILED_PRECONDITION:return J.FAILED_PRECONDITION;case Rt.ABORTED:return J.ABORTED;case Rt.OUT_OF_RANGE:return J.OUT_OF_RANGE;case Rt.UNIMPLEMENTED:return J.UNIMPLEMENTED;case Rt.DATA_LOSS:return J.DATA_LOSS;default:return Ae()}}(Ue=Rt||(Rt={}))[Ue.OK=0]="OK",Ue[Ue.CANCELLED=1]="CANCELLED",Ue[Ue.UNKNOWN=2]="UNKNOWN",Ue[Ue.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ue[Ue.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ue[Ue.NOT_FOUND=5]="NOT_FOUND",Ue[Ue.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ue[Ue.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ue[Ue.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ue[Ue.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ue[Ue.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ue[Ue.ABORTED=10]="ABORTED",Ue[Ue.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ue[Ue.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ue[Ue.INTERNAL=13]="INTERNAL",Ue[Ue.UNAVAILABLE=14]="UNAVAILABLE",Ue[Ue.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Si{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ys(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return km(this.inner)}size(){return this.innerSize}}/**
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
 */const ib=new jt(ve.comparator);function ss(){return ib}const Vm=new jt(ve.comparator);function Bi(...t){let e=Vm;for(const n of t)e=e.insert(n.key,n);return e}function Bm(t){let e=Vm;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Os(){return Wi()}function jm(){return Wi()}function Wi(){return new Si(t=>t.toString(),(t,e)=>t.isEqual(e))}const rb=new jt(ve.comparator),ob=new Bt(ve.comparator);function $e(...t){let e=ob;for(const n of t)e=e.add(n);return e}const ab=new Bt(We);function qm(){return ab}/**
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
 */class ha{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const i=new Map;return i.set(e,Nr.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new ha(Pe.min(),i,qm(),ss(),$e())}}class Nr{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Nr(s,n,$e(),$e(),$e())}}/**
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
 */class so{constructor(e,n,s,i){this.Tt=e,this.removedTargetIds=n,this.key=s,this.Et=i}}class Hm{constructor(e,n){this.targetId=e,this.At=n}}class Km{constructor(e,n,s=fn.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class th{constructor(){this.Rt=0,this.bt=sh(),this.Pt=fn.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=$e(),n=$e(),s=$e();return this.bt.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:Ae()}}),new Nr(this.Pt,this.vt,e,n,s)}Nt(){this.Vt=!1,this.bt=sh()}kt(e,n){this.Vt=!0,this.bt=this.bt.insert(e,n)}Ot(e){this.Vt=!0,this.bt=this.bt.remove(e)}Mt(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class lb{constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=ss(),this.qt=nh(),this.Kt=new Bt(We)}Gt(e){for(const n of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(n,e.Et):this.jt(n,e.key,e.Et);for(const n of e.removedTargetIds)this.jt(n,e.key,e.Et)}Wt(e){this.forEachTarget(e,n=>{const s=this.zt(n);switch(e.state){case 0:this.Ht(n)&&s.Ct(e.resumeToken);break;case 1:s.Ft(),s.St||s.Nt(),s.Ct(e.resumeToken);break;case 2:s.Ft(),s.St||this.removeTarget(n);break;case 3:this.Ht(n)&&(s.$t(),s.Ct(e.resumeToken));break;case 4:this.Ht(n)&&(this.Jt(n),s.Ct(e.resumeToken));break;default:Ae()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Lt.forEach((s,i)=>{this.Ht(i)&&n(i)})}Yt(e){const n=e.targetId,s=e.At.count,i=this.Xt(n);if(i){const r=i.target;if(Il(r))if(s===0){const o=new ve(r.path);this.jt(n,o,Zt.newNoDocument(o,Pe.min()))}else lt(s===1);else this.Zt(n)!==s&&(this.Jt(n),this.Kt=this.Kt.add(n))}}te(e){const n=new Map;this.Lt.forEach((r,o)=>{const a=this.Xt(o);if(a){if(r.current&&Il(a.target)){const l=new ve(a.target.path);this.Ut.get(l)!==null||this.ee(o,l)||this.jt(o,l,Zt.newNoDocument(l,e))}r.Dt&&(n.set(o,r.xt()),r.Nt())}});let s=$e();this.qt.forEach((r,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Xt(l);return!c||c.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))}),this.Ut.forEach((r,o)=>o.setReadTime(e));const i=new ha(e,n,this.Kt,this.Ut,s);return this.Ut=ss(),this.qt=nh(),this.Kt=new Bt(We),i}Qt(e,n){if(!this.Ht(e))return;const s=this.ee(e,n.key)?2:0;this.zt(e).kt(n.key,s),this.Ut=this.Ut.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ne(n.key).add(e))}jt(e,n,s){if(!this.Ht(e))return;const i=this.zt(e);this.ee(e,n)?i.kt(n,1):i.Ot(n),this.qt=this.qt.insert(n,this.ne(n).delete(e)),s&&(this.Ut=this.Ut.insert(n,s))}removeTarget(e){this.Lt.delete(e)}Zt(e){const n=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Mt(e){this.zt(e).Mt()}zt(e){let n=this.Lt.get(e);return n||(n=new th,this.Lt.set(e,n)),n}ne(e){let n=this.qt.get(e);return n||(n=new Bt(We),this.qt=this.qt.insert(e,n)),n}Ht(e){const n=this.Xt(e)!==null;return n||me("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.Lt.get(e);return n&&n.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new th),this.Bt.getRemoteKeysForTarget(e).forEach(n=>{this.jt(e,n,null)})}ee(e,n){return this.Bt.getRemoteKeysForTarget(e).has(n)}}function nh(){return new jt(ve.comparator)}function sh(){return new jt(ve.comparator)}/**
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
 */const cb=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),ub=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class hb{constructor(e,n){this.databaseId=e,this.gt=n}}function Ro(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function zm(t,e){return t.gt?e.toBase64():e.toUint8Array()}function fb(t,e){return Ro(t,e.toTimestamp())}function Xn(t){return lt(!!t),Pe.fromTimestamp(function(e){const n=Es(e);return new Vt(n.seconds,n.nanos)}(t))}function Cc(t,e){return function(n){return new mt(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Gm(t){const e=mt.fromString(t);return lt(xm(e)),e}function Al(t,e){return Cc(t.databaseId,e.path)}function Wa(t,e){const n=Gm(e);if(n.get(1)!==t.databaseId.projectId)throw new ye(J.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ye(J.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ve(Wm(n))}function Dl(t,e){return Cc(t.databaseId,e)}function db(t){const e=Gm(t);return e.length===4?mt.emptyPath():Wm(e)}function Rl(t){return new mt(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Wm(t){return lt(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function ih(t,e,n){return{name:Al(t,e),fields:n.value.mapValue.fields}}function pb(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:Ae()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(l,c){return l.gt?(lt(c===void 0||typeof c=="string"),fn.fromBase64String(c||"")):(lt(c===void 0||c instanceof Uint8Array),fn.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const c=l.code===void 0?J.UNKNOWN:Fm(l.code);return new ye(c,l.message||"")}(o);n=new Km(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=Wa(t,s.document.name),r=Xn(s.document.updateTime),o=new En({mapValue:{fields:s.document.fields}}),a=Zt.newFoundDocument(i,r,o),l=s.targetIds||[],c=s.removedTargetIds||[];n=new so(l,c,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=Wa(t,s.document),r=s.readTime?Xn(s.readTime):Pe.min(),o=Zt.newNoDocument(i,r),a=s.removedTargetIds||[];n=new so([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=Wa(t,s.document),r=s.removedTargetIds||[];n=new so([],r,i,null)}else{if(!("filter"in e))return Ae();{e.filter;const s=e.filter;s.targetId;const i=s.count||0,r=new nb(i),o=s.targetId;n=new Hm(o,r)}}return n}function mb(t,e){let n;if(e instanceof Pr)n={update:ih(t,e.key,e.value)};else if(e instanceof Ic)n={delete:Al(t,e.key)};else if(e instanceof Ss)n={update:ih(t,e.key,e.data),updateMask:Ib(e.fieldMask)};else{if(!(e instanceof tb))return Ae();n={verify:Al(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof Ao)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof ar)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof lr)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Do)return{fieldPath:r.field.canonicalString(),increment:o.yt};throw Ae()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:fb(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Ae()}(t,e.precondition)),n}function gb(t,e){return t&&t.length>0?(lt(e!==void 0),t.map(n=>function(s,i){let r=s.updateTime?Xn(s.updateTime):Xn(i);return r.isEqual(Pe.min())&&(r=Xn(i)),new J1(r,s.transformResults||[])}(n,e))):[]}function _b(t,e){return{documents:[Dl(t,e.path)]}}function vb(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Dl(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Dl(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(l){if(l.length===0)return;const c=l.map(h=>function(f){if(f.op==="=="){if(Gu(f.value))return{unaryFilter:{field:ti(f.field),op:"IS_NAN"}};if(zu(f.value))return{unaryFilter:{field:ti(f.field),op:"IS_NULL"}}}else if(f.op==="!="){if(Gu(f.value))return{unaryFilter:{field:ti(f.field),op:"IS_NOT_NAN"}};if(zu(f.value))return{unaryFilter:{field:ti(f.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ti(f.field),op:kb(f.op),value:f.value}}}(h));return c.length===1?c[0]:{compositeFilter:{op:"AND",filters:c}}}(e.filters);i&&(n.structuredQuery.where=i);const r=function(l){if(l.length!==0)return l.map(c=>function(h){return{field:ti(h.field),direction:wb(h.dir)}}(c))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(l,c){return l.gt||oa(c)?c:{value:c}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function yb(t){let e=db(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){lt(s===1);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let r=[];n.where&&(r=Qm(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(h=>function(f){return new zi(ii(f.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(f.direction))}(h)));let a=null;n.limit&&(a=function(h){let f;return f=typeof h=="object"?h.value:h,oa(f)?null:f}(n.limit));let l=null;n.startAt&&(l=function(h){const f=!!h.before,d=h.values||[];return new So(d,f)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const f=!h.before,d=h.values||[];return new So(d,f)}(n.endAt)),q1(e,i,o,r,a,"F",l,c)}function bb(t,e){const n=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Ae()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Qm(t){return t?t.unaryFilter!==void 0?[Tb(t)]:t.fieldFilter!==void 0?[Eb(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>Qm(e)).reduce((e,n)=>e.concat(n)):Ae():[]}function wb(t){return cb[t]}function kb(t){return ub[t]}function ti(t){return{fieldPath:t.canonicalString()}}function ii(t){return ln.fromServerFormat(t.fieldPath)}function Eb(t){return In.create(ii(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Ae()}}(t.fieldFilter.op),t.fieldFilter.value)}function Tb(t){switch(t.unaryFilter.op){case"IS_NAN":const e=ii(t.unaryFilter.field);return In.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=ii(t.unaryFilter.field);return In.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ii(t.unaryFilter.field);return In.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=ii(t.unaryFilter.field);return In.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Ae()}}function Ib(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function xm(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Cb{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&Z1(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Gi(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Gi(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=jm();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const l=Mm(o,a);l!==null&&s.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(Pe.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),$e())}isEqual(e){return this.batchId===e.batchId&&gi(this.mutations,e.mutations,(n,s)=>Ju(n,s))&&gi(this.baseMutations,e.baseMutations,(n,s)=>Ju(n,s))}}class Sc{constructor(e,n,s,i){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(e,n,s){lt(e.mutations.length===s.length);let i=rb;const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new Sc(e,n,s,i)}}/**
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
 */class Sb{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Ls{constructor(e,n,s,i,r=Pe.min(),o=Pe.min(),a=fn.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Ls(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Ls(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Ls(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class Ab{constructor(e){this.re=e}}function Db(t){const e=yb({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Cl(e,e.limit,"L"):e}/**
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
 */class Rb{constructor(){this.Ye=new Pb}addToCollectionParentIndex(e,n){return this.Ye.add(n),Z.resolve()}getCollectionParents(e,n){return Z.resolve(this.Ye.getEntries(n))}addFieldIndex(e,n){return Z.resolve()}deleteFieldIndex(e,n){return Z.resolve()}getDocumentsMatchingTarget(e,n){return Z.resolve(null)}getIndexType(e,n){return Z.resolve(0)}getFieldIndexes(e,n){return Z.resolve([])}getNextCollectionGroupToUpdate(e){return Z.resolve(null)}getMinOffset(e,n){return Z.resolve(ks.min())}getMinOffsetFromCollectionGroup(e,n){return Z.resolve(ks.min())}updateCollectionGroup(e,n,s){return Z.resolve()}updateIndexEntries(e,n){return Z.resolve()}}class Pb{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new Bt(mt.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new Bt(mt.comparator)).toArray()}}/**
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
 */class yi{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new yi(0)}static vn(){return new yi(-1)}}/**
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
 */class Nb{constructor(){this.changes=new Si(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Zt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?Z.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Ob{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class $b{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(s=i,this.getBaseDocument(e,n,s))).next(i=>(s!==null&&Gi(s.mutation,i,Nn.empty(),Vt.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,$e()).next(()=>s))}getLocalViewOfDocuments(e,n,s=$e()){const i=Os();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,s).next(r=>{let o=Bi();return r.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Os();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,$e()))}populateOverlays(e,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,i){let r=ss();const o=Wi(),a=Wi();return n.forEach((l,c)=>{const h=s.get(c.key);i.has(c.key)&&(h===void 0||h.mutation instanceof Ss)?r=r.insert(c.key,c):h!==void 0&&(o.set(c.key,h.mutation.getFieldMask()),Gi(h.mutation,c,h.mutation.getFieldMask(),Vt.now()))}),this.recalculateAndSaveOverlays(e,r).next(l=>(l.forEach((c,h)=>o.set(c,h)),n.forEach((c,h)=>{var f;return a.set(c,new Ob(h,(f=o.get(c))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const s=Wi();let i=new jt((o,a)=>o-a),r=$e();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let h=s.get(l)||Nn.empty();h=a.applyToLocalView(c,h),s.set(l,h);const f=(i.get(a.batchId)||$e()).add(l);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,h=l.value,f=jm();h.forEach(d=>{if(!r.has(d)){const m=Mm(n.get(d),s.get(d));m!==null&&f.set(d,m),r=r.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return Z.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(i){return ve.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):z1(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):Z.resolve(Os());let a=-1,l=r;return o.next(c=>Z.forEach(c,(h,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),r.get(h)?Z.resolve():this.getBaseDocument(e,h,f).next(d=>{l=l.insert(h,d)}))).next(()=>this.populateOverlays(e,c,r)).next(()=>this.computeViews(e,l,c,$e())).next(h=>({batchId:a,changes:Bm(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ve(n)).next(s=>{let i=Bi();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const i=n.collectionGroup;let r=Bi();return this.indexManager.getCollectionParents(e,i).next(o=>Z.forEach(o,a=>{const l=function(c,h){return new aa(h,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,s).next(c=>{c.forEach((h,f)=>{r=r.insert(h,f)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,s){let i;return this.remoteDocumentCache.getAllFromCollection(e,n.path,s).next(r=>(i=r,this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId))).next(r=>{r.forEach((a,l)=>{const c=l.getKey();i.get(c)===null&&(i=i.insert(c,Zt.newInvalidDocument(c)))});let o=Bi();return i.forEach((a,l)=>{const c=r.get(a);c!==void 0&&Gi(c.mutation,l,Nn.empty(),Vt.now()),Tc(n,l)&&(o=o.insert(a,l))}),o})}getBaseDocument(e,n,s){return s===null||s.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):Z.resolve(Zt.newInvalidDocument(n))}}/**
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
 */class Lb{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return Z.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:Xn(s.createTime)}),Z.resolve()}getNamedQuery(e,n){return Z.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(s){return{name:s.name,query:Db(s.bundledQuery),readTime:Xn(s.readTime)}}(n)),Z.resolve()}}/**
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
 */class Mb{constructor(){this.overlays=new jt(ve.comparator),this.es=new Map}getOverlay(e,n){return Z.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Os();return Z.forEach(n,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((i,r)=>{this.ue(e,n,r)}),Z.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.es.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.es.delete(s)),Z.resolve()}getOverlaysForCollection(e,n,s){const i=Os(),r=n.length+1,o=new ve(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===r&&l.largestBatchId>s&&i.set(l.getKey(),l)}return Z.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new jt((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>s){let h=r.get(c.largestBatchId);h===null&&(h=Os(),r=r.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const a=Os(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,h)=>a.set(c,h)),!(a.size()>=i)););return Z.resolve(a)}ue(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.es.get(i.largestBatchId).delete(s.key);this.es.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new Sb(n,s));let r=this.es.get(n);r===void 0&&(r=$e(),this.es.set(n,r)),this.es.set(n,r.add(s.key))}}/**
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
 */class Ac{constructor(){this.ns=new Bt(zt.ss),this.rs=new Bt(zt.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const s=new zt(e,n);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.cs(new zt(e,n))}hs(e,n){e.forEach(s=>this.removeReference(s,n))}ls(e){const n=new ve(new mt([])),s=new zt(n,e),i=new zt(n,e+1),r=[];return this.rs.forEachInRange([s,i],o=>{this.cs(o),r.push(o.key)}),r}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new ve(new mt([])),s=new zt(n,e),i=new zt(n,e+1);let r=$e();return this.rs.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new zt(e,0),s=this.ns.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class zt{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return ve.comparator(e.key,n.key)||We(e._s,n._s)}static os(e,n){return We(e._s,n._s)||ve.comparator(e.key,n.key)}}/**
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
 */class Ub{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new Bt(zt.ss)}checkEmpty(e){return Z.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Cb(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.gs=this.gs.add(new zt(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return Z.resolve(o)}lookupMutationBatch(e,n){return Z.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.ps(s),r=i<0?0:i;return Z.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return Z.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return Z.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new zt(n,0),i=new zt(n,Number.POSITIVE_INFINITY),r=[];return this.gs.forEachInRange([s,i],o=>{const a=this.ys(o._s);r.push(a)}),Z.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Bt(We);return n.forEach(i=>{const r=new zt(i,0),o=new zt(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([r,o],a=>{s=s.add(a._s)})}),Z.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;ve.isDocumentKey(r)||(r=r.child(""));const o=new zt(new ve(r),0);let a=new Bt(We);return this.gs.forEachWhile(l=>{const c=l.key.path;return!!s.isPrefixOf(c)&&(c.length===i&&(a=a.add(l._s)),!0)},o),Z.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(s=>{const i=this.ys(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){lt(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return Z.forEach(n.mutations,i=>{const r=new zt(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.gs=s})}An(e){}containsKey(e,n){const s=new zt(n,0),i=this.gs.firstAfterOrEqual(s);return Z.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,Z.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class Fb{constructor(e){this.Es=e,this.docs=new jt(ve.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Es(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return Z.resolve(s?s.document.mutableCopy():Zt.newInvalidDocument(n))}getEntries(e,n){let s=ss();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():Zt.newInvalidDocument(i))}),Z.resolve(s)}getAllFromCollection(e,n,s){let i=ss();const r=new ve(n.child("")),o=this.docs.getIteratorFrom(r);for(;o.hasNext();){const{key:a,value:{document:l}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||I1(T1(l),s)<=0||(i=i.insert(l.key,l.mutableCopy()))}return Z.resolve(i)}getAllFromCollectionGroup(e,n,s,i){Ae()}As(e,n){return Z.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new Vb(this)}getSize(e){return Z.resolve(this.size)}}class Vb extends Nb{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.Yn.addEntry(e,i)):this.Yn.removeEntry(s)}),Z.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
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
 */class Bb{constructor(e){this.persistence=e,this.Rs=new Si(n=>kc(n),Ec),this.lastRemoteSnapshotVersion=Pe.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Ac,this.targetCount=0,this.vs=yi.Pn()}forEachTarget(e,n){return this.Rs.forEach((s,i)=>n(i)),Z.resolve()}getLastRemoteSnapshotVersion(e){return Z.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Z.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),Z.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),Z.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new yi(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,Z.resolve()}updateTargetData(e,n){return this.Dn(n),Z.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,Z.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Rs.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),Z.waitFor(r).next(()=>i)}getTargetCount(e){return Z.resolve(this.targetCount)}getTargetData(e,n){const s=this.Rs.get(n)||null;return Z.resolve(s)}addMatchingKeys(e,n,s){return this.Ps.us(n,s),Z.resolve()}removeMatchingKeys(e,n,s){this.Ps.hs(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),Z.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),Z.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Ps.ds(n);return Z.resolve(s)}containsKey(e,n){return Z.resolve(this.Ps.containsKey(n))}}/**
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
 */class jb{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new bc(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new Bb(this),this.indexManager=new Rb,this.remoteDocumentCache=function(s){return new Fb(s)}(s=>this.referenceDelegate.xs(s)),this.It=new Ab(n),this.Ns=new Lb(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Mb,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Vs[e.toKey()];return s||(s=new Ub(n,this.referenceDelegate),this.Vs[e.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,s){me("MemoryPersistence","Starting transaction:",e);const i=new qb(this.Ss.next());return this.referenceDelegate.ks(),s(i).next(r=>this.referenceDelegate.Os(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Ms(e,n){return Z.or(Object.values(this.Vs).map(s=>()=>s.containsKey(e,n)))}}class qb extends S1{constructor(e){super(),this.currentSequenceNumber=e}}class Dc{constructor(e){this.persistence=e,this.Fs=new Ac,this.$s=null}static Bs(e){return new Dc(e)}get Ls(){if(this.$s)return this.$s;throw Ae()}addReference(e,n,s){return this.Fs.addReference(s,n),this.Ls.delete(s.toString()),Z.resolve()}removeReference(e,n,s){return this.Fs.removeReference(s,n),this.Ls.add(s.toString()),Z.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),Z.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(i=>this.Ls.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.Ls.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Z.forEach(this.Ls,s=>{const i=ve.fromPath(s);return this.Us(e,i).next(r=>{r||n.removeEntry(i,Pe.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.Us(e,n).next(s=>{s?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}Us(e,n){return Z.or([()=>Z.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
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
 */class Rc{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.Si=s,this.Di=i}static Ci(e,n){let s=$e(),i=$e();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new Rc(e,n.fromCache,s,i)}}/**
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
 */class Hb{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,s,i){return this.ki(e,n).next(r=>r||this.Oi(e,n,i,s)).next(r=>r||this.Mi(e,n))}ki(e,n){if(Yu(n))return Z.resolve(null);let s=ns(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Cl(n,null,"F"),s=ns(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=$e(...r);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(l=>{const c=this.Fi(n,a);return this.$i(n,c,o,l.readTime)?this.ki(e,Cl(n,null,"F")):this.Bi(e,c,n,l)}))})))}Oi(e,n,s,i){return Yu(n)||i.isEqual(Pe.min())?this.Mi(e,n):this.Ni.getDocuments(e,s).next(r=>{const o=this.Fi(n,r);return this.$i(n,o,s,i)?this.Mi(e,n):(ju()<=qe.DEBUG&&me("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Sl(n)),this.Bi(e,o,n,E1(i,-1)))})}Fi(e,n){let s=new Bt(Dm(e));return n.forEach((i,r)=>{Tc(e,r)&&(s=s.add(r))}),s}$i(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Mi(e,n){return ju()<=qe.DEBUG&&me("QueryEngine","Using full collection scan to execute query:",Sl(n)),this.Ni.getDocumentsMatchingQuery(e,n,ks.min())}Bi(e,n,s,i){return this.Ni.getDocumentsMatchingQuery(e,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
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
 */class Kb{constructor(e,n,s,i){this.persistence=e,this.Li=n,this.It=i,this.Ui=new jt(We),this.qi=new Si(r=>kc(r),Ec),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(s)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new $b(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ui))}}function zb(t,e,n,s){return new Kb(t,e,n,s)}async function Ym(t,e){const n=De(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.Qi(e),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let l=$e();for(const c of i){o.push(c.batchId);for(const h of c.mutations)l=l.add(h.key)}for(const c of r){a.push(c.batchId);for(const h of c.mutations)l=l.add(h.key)}return n.localDocuments.getDocuments(s,l).next(c=>({ji:c,removedBatchIds:o,addedBatchIds:a}))})})}function Gb(t,e){const n=De(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,c){const h=l.batch,f=h.keys();let d=Z.resolve();return f.forEach(m=>{d=d.next(()=>c.getEntry(a,m)).next(_=>{const v=l.docVersions.get(m);lt(v!==null),_.version.compareTo(v)<0&&(h.applyToRemoteDocument(_,l),_.isValidDocument()&&(_.setReadTime(l.commitVersion),c.addEntry(_)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,h))}(n,s,e,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=$e();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,i))})}function Xm(t){const e=De(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function Wb(t,e){const n=De(t),s=e.snapshotVersion;let i=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.Ui;const a=[];e.targetChanges.forEach((h,f)=>{const d=i.get(f);if(!d)return;a.push(n.Cs.removeMatchingKeys(r,h.removedDocuments,f).next(()=>n.Cs.addMatchingKeys(r,h.addedDocuments,f)));let m=d.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.has(f)?m=m.withResumeToken(fn.EMPTY_BYTE_STRING,Pe.min()).withLastLimboFreeSnapshotVersion(Pe.min()):h.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(h.resumeToken,s)),i=i.insert(f,m),function(_,v,E){return _.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-_.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(d,m,h)&&a.push(n.Cs.updateTargetData(r,m))});let l=ss(),c=$e();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,h))}),a.push(Qb(r,o,e.documentUpdates).next(h=>{l=h.Wi,c=h.zi})),!s.isEqual(Pe.min())){const h=n.Cs.getLastRemoteSnapshotVersion(r).next(f=>n.Cs.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(h)}return Z.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,l,c)).next(()=>l)}).then(r=>(n.Ui=i,r))}function Qb(t,e,n){let s=$e(),i=$e();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let o=ss();return n.forEach((a,l)=>{const c=r.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(Pe.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):me("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{Wi:o,zi:i}})}function xb(t,e){const n=De(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function Yb(t,e){const n=De(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Cs.getTargetData(s,e).next(r=>r?(i=r,Z.resolve(i)):n.Cs.allocateTargetId(s).next(o=>(i=new Ls(e,o,0,s.currentSequenceNumber),n.Cs.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.Ui.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(s.targetId,s),n.qi.set(e,s.targetId)),s})}async function Pl(t,e,n){const s=De(t),i=s.Ui.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Rr(o))throw o;me("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ui=s.Ui.remove(e),s.qi.delete(i.target)}function rh(t,e,n){const s=De(t);let i=Pe.min(),r=$e();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,l,c){const h=De(a),f=h.qi.get(c);return f!==void 0?Z.resolve(h.Ui.get(f)):h.Cs.getTargetData(l,c)}(s,o,ns(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{r=l})}).next(()=>s.Li.getDocumentsMatchingQuery(o,e,n?i:Pe.min(),n?r:$e())).next(a=>(Xb(s,G1(e),a),{documents:a,Hi:r})))}function Xb(t,e,n){let s=t.Ki.get(e)||Pe.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),t.Ki.set(e,s)}class oh{constructor(){this.activeTargetIds=qm()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Jb{constructor(){this.Lr=new oh,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,n,s){this.Ur[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new oh,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Zb{qr(e){}shutdown(){}}/**
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
 */class ah{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){me("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){me("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const ew={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class tw{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
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
 */class nw extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,s,i,r){const o=this.ho(e,n);me("RestConnection","Sending: ",o,s);const a={};return this.lo(a,i,r),this.fo(e,o,a,s).then(l=>(me("RestConnection","Received: ",l),l),l=>{throw kl("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",s),l})}_o(e,n,s,i,r,o){return this.ao(e,n,s,i,r)}lo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Ci,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>e[r]=i),s&&s.headers.forEach((i,r)=>e[r]=i)}ho(e,n){const s=ew[e];return`${this.oo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,s,i){return new Promise((r,o)=>{const a=new d1;a.setWithCredentials(!0),a.listenOnce(u1.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Ga.NO_ERROR:const c=a.getResponseJson();me("Connection","XHR received:",JSON.stringify(c)),r(c);break;case Ga.TIMEOUT:me("Connection",'RPC "'+e+'" timed out'),o(new ye(J.DEADLINE_EXCEEDED,"Request time out"));break;case Ga.HTTP_ERROR:const h=a.getStatus();if(me("Connection",'RPC "'+e+'" failed with status:',h,"response text:",a.getResponseText()),h>0){const f=a.getResponseJson().error;if(f&&f.status&&f.message){const d=function(m){const _=m.toLowerCase().replace(/_/g,"-");return Object.values(J).indexOf(_)>=0?_:J.UNKNOWN}(f.status);o(new ye(d,f.message))}else o(new ye(J.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new ye(J.UNAVAILABLE,"Connection failed."));break;default:Ae()}}finally{me("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(i);a.send(n,"POST",l,s,15)})}wo(e,n,s){const i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=l1(),o=c1(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new f1({})),this.lo(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const l=i.join("");me("Connection","Creating WebChannel: "+l,a);const c=r.createWebChannel(l,a);let h=!1,f=!1;const d=new tw({Hr:_=>{f?me("Connection","Not sending because WebChannel is closed:",_):(h||(me("Connection","Opening WebChannel transport."),c.open(),h=!0),me("Connection","WebChannel sending:",_),c.send(_))},Jr:()=>c.close()}),m=(_,v,E)=>{_.listen(v,T=>{try{E(T)}catch(k){setTimeout(()=>{throw k},0)}})};return m(c,Qr.EventType.OPEN,()=>{f||me("Connection","WebChannel transport opened.")}),m(c,Qr.EventType.CLOSE,()=>{f||(f=!0,me("Connection","WebChannel transport closed"),d.io())}),m(c,Qr.EventType.ERROR,_=>{f||(f=!0,kl("Connection","WebChannel transport errored:",_),d.io(new ye(J.UNAVAILABLE,"The operation could not be completed")))}),m(c,Qr.EventType.MESSAGE,_=>{var v;if(!f){const E=_.data[0];lt(!!E);const T=E,k=T.error||((v=T[0])===null||v===void 0?void 0:v.error);if(k){me("Connection","WebChannel received error:",k);const P=k.status;let D=function($){const F=Rt[$];if(F!==void 0)return Fm(F)}(P),B=k.message;D===void 0&&(D=J.INTERNAL,B="Unknown error status: "+P+" with message "+k.message),f=!0,d.io(new ye(D,B)),c.close()}else me("Connection","WebChannel received:",E),d.ro(E)}}),m(o,h1.STAT_EVENT,_=>{_.stat===Vu.PROXY?me("Connection","Detected buffering proxy"):_.stat===Vu.NOPROXY&&me("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}function Qa(){return typeof document<"u"?document:null}/**
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
 */function fa(t){return new hb(t,!0)}class Jm{constructor(e,n,s=1e3,i=1.5,r=6e4){this.Hs=e,this.timerId=n,this.mo=s,this.yo=i,this.po=r,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-s);i>0&&me("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
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
 */class Zm{constructor(e,n,s,i,r,o,a,l){this.Hs=e,this.vo=s,this.Vo=i,this.So=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Do=0,this.Co=null,this.xo=null,this.stream=null,this.No=new Jm(e,n)}ko(){return this.state===1||this.state===5||this.Oo()}Oo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Mo()}async stop(){this.ko()&&await this.close(0)}Fo(){this.state=0,this.No.reset()}$o(){this.Oo()&&this.Co===null&&(this.Co=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.Bo()))}Lo(e){this.Uo(),this.stream.send(e)}async Bo(){if(this.Oo())return this.close(0)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}qo(){this.xo&&(this.xo.cancel(),this.xo=null)}async close(e,n){this.Uo(),this.qo(),this.No.cancel(),this.Do++,e!==4?this.No.reset():n&&n.code===J.RESOURCE_EXHAUSTED?(ts(n.toString()),ts("Using maximum backoff delay to prevent overloading the backend."),this.No.Ao()):n&&n.code===J.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Ko(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}Ko(){}auth(){this.state=1;const e=this.Go(this.Do),n=this.Do;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Do===n&&this.Qo(s,i)},s=>{e(()=>{const i=new ye(J.UNKNOWN,"Fetching auth token failed: "+s.message);return this.jo(i)})})}Qo(e,n){const s=this.Go(this.Do);this.stream=this.Wo(e,n),this.stream.Yr(()=>{s(()=>(this.state=2,this.xo=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.Oo()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{s(()=>this.jo(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Mo(){this.state=5,this.No.Ro(async()=>{this.state=0,this.start()})}jo(e){return me("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Go(e){return n=>{this.Hs.enqueueAndForget(()=>this.Do===e?n():(me("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class sw extends Zm{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.It=r}Wo(e,n){return this.So.wo("Listen",e,n)}onMessage(e){this.No.reset();const n=pb(this.It,e),s=function(i){if(!("targetChange"in i))return Pe.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?Pe.min():r.readTime?Xn(r.readTime):Pe.min()}(e);return this.listener.zo(n,s)}Ho(e){const n={};n.database=Rl(this.It),n.addTarget=function(i,r){let o;const a=r.target;return o=Il(a)?{documents:_b(i,a)}:{query:vb(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=zm(i,r.resumeToken):r.snapshotVersion.compareTo(Pe.min())>0&&(o.readTime=Ro(i,r.snapshotVersion.toTimestamp())),o}(this.It,e);const s=bb(this.It,e);s&&(n.labels=s),this.Lo(n)}Jo(e){const n={};n.database=Rl(this.It),n.removeTarget=e,this.Lo(n)}}class iw extends Zm{constructor(e,n,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.It=r,this.Yo=!1}get Xo(){return this.Yo}start(){this.Yo=!1,this.lastStreamToken=void 0,super.start()}Ko(){this.Yo&&this.Zo([])}Wo(e,n){return this.So.wo("Write",e,n)}onMessage(e){if(lt(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Yo){this.No.reset();const n=gb(e.writeResults,e.commitTime),s=Xn(e.commitTime);return this.listener.tu(s,n)}return lt(!e.writeResults||e.writeResults.length===0),this.Yo=!0,this.listener.eu()}nu(){const e={};e.database=Rl(this.It),this.Lo(e)}Zo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>mb(this.It,s))};this.Lo(n)}}/**
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
 */class rw extends class{}{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.So=s,this.It=i,this.su=!1}iu(){if(this.su)throw new ye(J.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,s){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.So.ao(e,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===J.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ye(J.UNKNOWN,i.toString())})}_o(e,n,s,i){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.So._o(e,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===J.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new ye(J.UNKNOWN,r.toString())})}terminate(){this.su=!0}}class ow{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ru=0,this.ou=null,this.uu=!0}cu(){this.ru===0&&(this.au("Unknown"),this.ou=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ou=null,this.hu("Backend didn't respond within 10 seconds."),this.au("Offline"),Promise.resolve())))}lu(e){this.state==="Online"?this.au("Unknown"):(this.ru++,this.ru>=1&&(this.fu(),this.hu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.au("Offline")))}set(e){this.fu(),this.ru=0,e==="Online"&&(this.uu=!1),this.au(e)}au(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}hu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.uu?(ts(n),this.uu=!1):me("OnlineStateTracker",n)}fu(){this.ou!==null&&(this.ou.cancel(),this.ou=null)}}/**
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
 */class aw{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.du=[],this._u=new Map,this.wu=new Set,this.mu=[],this.gu=r,this.gu.qr(o=>{s.enqueueAndForget(async()=>{Xs(this)&&(me("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=De(a);l.wu.add(4),await Or(l),l.yu.set("Unknown"),l.wu.delete(4),await da(l)}(this))})}),this.yu=new ow(s,i)}}async function da(t){if(Xs(t))for(const e of t.mu)await e(!0)}async function Or(t){for(const e of t.mu)await e(!1)}function eg(t,e){const n=De(t);n._u.has(e.targetId)||(n._u.set(e.targetId,e),Oc(n)?Nc(n):Ai(n).Oo()&&Pc(n,e))}function tg(t,e){const n=De(t),s=Ai(n);n._u.delete(e),s.Oo()&&ng(n,e),n._u.size===0&&(s.Oo()?s.$o():Xs(n)&&n.yu.set("Unknown"))}function Pc(t,e){t.pu.Mt(e.targetId),Ai(t).Ho(e)}function ng(t,e){t.pu.Mt(e),Ai(t).Jo(e)}function Nc(t){t.pu=new lb({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t._u.get(e)||null}),Ai(t).start(),t.yu.cu()}function Oc(t){return Xs(t)&&!Ai(t).ko()&&t._u.size>0}function Xs(t){return De(t).wu.size===0}function sg(t){t.pu=void 0}async function lw(t){t._u.forEach((e,n)=>{Pc(t,e)})}async function cw(t,e){sg(t),Oc(t)?(t.yu.lu(e),Nc(t)):t.yu.set("Unknown")}async function uw(t,e,n){if(t.yu.set("Online"),e instanceof Km&&e.state===2&&e.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s._u.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s._u.delete(o),s.pu.removeTarget(o))}(t,e)}catch(s){me("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Po(t,s)}else if(e instanceof so?t.pu.Gt(e):e instanceof Hm?t.pu.Yt(e):t.pu.Wt(e),!n.isEqual(Pe.min()))try{const s=await Xm(t.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.pu.te(r);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const c=i._u.get(l);c&&i._u.set(l,c.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const l=i._u.get(a);if(!l)return;i._u.set(a,l.withResumeToken(fn.EMPTY_BYTE_STRING,l.snapshotVersion)),ng(i,a);const c=new Ls(l.target,a,1,l.sequenceNumber);Pc(i,c)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){me("RemoteStore","Failed to raise snapshot:",s),await Po(t,s)}}async function Po(t,e,n){if(!Rr(e))throw e;t.wu.add(1),await Or(t),t.yu.set("Offline"),n||(n=()=>Xm(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{me("RemoteStore","Retrying IndexedDB access"),await n(),t.wu.delete(1),await da(t)})}function ig(t,e){return e().catch(n=>Po(t,n,e))}async function pa(t){const e=De(t),n=Ts(e);let s=e.du.length>0?e.du[e.du.length-1].batchId:-1;for(;hw(e);)try{const i=await xb(e.localStore,s);if(i===null){e.du.length===0&&n.$o();break}s=i.batchId,fw(e,i)}catch(i){await Po(e,i)}rg(e)&&og(e)}function hw(t){return Xs(t)&&t.du.length<10}function fw(t,e){t.du.push(e);const n=Ts(t);n.Oo()&&n.Xo&&n.Zo(e.mutations)}function rg(t){return Xs(t)&&!Ts(t).ko()&&t.du.length>0}function og(t){Ts(t).start()}async function dw(t){Ts(t).nu()}async function pw(t){const e=Ts(t);for(const n of t.du)e.Zo(n.mutations)}async function mw(t,e,n){const s=t.du.shift(),i=Sc.from(s,e,n);await ig(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await pa(t)}async function gw(t,e){e&&Ts(t).Xo&&await async function(n,s){if(i=s.code,sb(i)&&i!==J.ABORTED){const r=n.du.shift();Ts(n).Fo(),await ig(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await pa(n)}var i}(t,e),rg(t)&&og(t)}async function lh(t,e){const n=De(t);n.asyncQueue.verifyOperationInProgress(),me("RemoteStore","RemoteStore received new credentials");const s=Xs(n);n.wu.add(3),await Or(n),s&&n.yu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.wu.delete(3),await da(n)}async function _w(t,e){const n=De(t);e?(n.wu.delete(2),await da(n)):e||(n.wu.add(2),await Or(n),n.yu.set("Unknown"))}function Ai(t){return t.Iu||(t.Iu=function(e,n,s){const i=De(e);return i.iu(),new sw(n,i.So,i.authCredentials,i.appCheckCredentials,i.It,s)}(t.datastore,t.asyncQueue,{Yr:lw.bind(null,t),Zr:cw.bind(null,t),zo:uw.bind(null,t)}),t.mu.push(async e=>{e?(t.Iu.Fo(),Oc(t)?Nc(t):t.yu.set("Unknown")):(await t.Iu.stop(),sg(t))})),t.Iu}function Ts(t){return t.Tu||(t.Tu=function(e,n,s){const i=De(e);return i.iu(),new iw(n,i.So,i.authCredentials,i.appCheckCredentials,i.It,s)}(t.datastore,t.asyncQueue,{Yr:dw.bind(null,t),Zr:gw.bind(null,t),eu:pw.bind(null,t),tu:mw.bind(null,t)}),t.mu.push(async e=>{e?(t.Tu.Fo(),await pa(t)):(await t.Tu.stop(),t.du.length>0&&(me("RemoteStore",`Stopping write stream with ${t.du.length} pending writes`),t.du=[]))})),t.Tu}/**
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
 */class $c{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new vs,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new $c(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ye(J.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Lc(t,e){if(ts("AsyncQueue",`${e}: ${t}`),Rr(t))return new ye(J.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class li{constructor(e){this.comparator=e?(n,s)=>e(n,s)||ve.comparator(n.key,s.key):(n,s)=>ve.comparator(n.key,s.key),this.keyedMap=Bi(),this.sortedSet=new jt(this.comparator)}static emptySet(e){return new li(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof li)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new li;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class ch{constructor(){this.Eu=new jt(ve.comparator)}track(e){const n=e.doc.key,s=this.Eu.get(n);s?e.type!==0&&s.type===3?this.Eu=this.Eu.insert(n,e):e.type===3&&s.type!==1?this.Eu=this.Eu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Eu=this.Eu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Eu=this.Eu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Eu=this.Eu.remove(n):e.type===1&&s.type===2?this.Eu=this.Eu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Eu=this.Eu.insert(n,{type:2,doc:e.doc}):Ae():this.Eu=this.Eu.insert(n,e)}Au(){const e=[];return this.Eu.inorderTraversal((n,s)=>{e.push(s)}),e}}class bi{constructor(e,n,s,i,r,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,s,i,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new bi(e,n,li.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&la(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
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
 */class vw{constructor(){this.Ru=void 0,this.listeners=[]}}class yw{constructor(){this.queries=new Si(e=>Am(e),la),this.onlineState="Unknown",this.bu=new Set}}async function bw(t,e){const n=De(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new vw),i)try{r.Ru=await n.onListen(s)}catch(o){const a=Lc(o,`Initialization of query '${Sl(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,r),r.listeners.push(e),e.Pu(n.onlineState),r.Ru&&e.vu(r.Ru)&&Mc(n)}async function ww(t,e){const n=De(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function kw(t,e){const n=De(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.vu(i)&&(s=!0);o.Ru=i}}s&&Mc(n)}function Ew(t,e,n){const s=De(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function Mc(t){t.bu.forEach(e=>{e.next()})}class Tw{constructor(e,n,s){this.query=e,this.Vu=n,this.Su=!1,this.Du=null,this.onlineState="Unknown",this.options=s||{}}vu(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new bi(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Su?this.Cu(e)&&(this.Vu.next(e),n=!0):this.xu(e,this.onlineState)&&(this.Nu(e),n=!0),this.Du=e,n}onError(e){this.Vu.error(e)}Pu(e){this.onlineState=e;let n=!1;return this.Du&&!this.Su&&this.xu(this.Du,e)&&(this.Nu(this.Du),n=!0),n}xu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.ku||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Cu(e){if(e.docChanges.length>0)return!0;const n=this.Du&&this.Du.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Nu(e){e=bi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Su=!0,this.Vu.next(e)}}/**
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
 */class ag{constructor(e){this.key=e}}class lg{constructor(e){this.key=e}}class Iw{constructor(e,n){this.query=e,this.Uu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=$e(),this.mutatedKeys=$e(),this.Gu=Dm(e),this.Qu=new li(this.Gu)}get ju(){return this.Uu}Wu(e,n){const s=n?n.zu:new ch,i=n?n.Qu:this.Qu;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,f)=>{const d=i.get(h),m=Tc(this.query,f)?f:null,_=!!d&&this.mutatedKeys.has(d.key),v=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let E=!1;d&&m?d.data.isEqual(m.data)?_!==v&&(s.track({type:3,doc:m}),E=!0):this.Hu(d,m)||(s.track({type:2,doc:m}),E=!0,(l&&this.Gu(m,l)>0||c&&this.Gu(m,c)<0)&&(a=!0)):!d&&m?(s.track({type:0,doc:m}),E=!0):d&&!m&&(s.track({type:1,doc:d}),E=!0,(l||c)&&(a=!0)),E&&(m?(o=o.add(m),r=v?r.add(h):r.delete(h)):(o=o.delete(h),r=r.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),r=r.delete(h.key),s.track({type:1,doc:h})}return{Qu:o,zu:s,$i:a,mutatedKeys:r}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const i=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const r=e.zu.Au();r.sort((c,h)=>function(f,d){const m=_=>{switch(_){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ae()}};return m(f)-m(d)}(c.type,h.type)||this.Gu(c.doc,h.doc)),this.Ju(s);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,l=a!==this.qu;return this.qu=a,r.length!==0||l?{snapshot:new bi(this.query,e.Qu,i,r,e.mutatedKeys,a===0,l,!1,!!s&&s.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}Pu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new ch,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.Uu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.Uu=this.Uu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Uu=this.Uu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=$e(),this.Qu.forEach(s=>{this.Zu(s.key)&&(this.Ku=this.Ku.add(s.key))});const n=[];return e.forEach(s=>{this.Ku.has(s)||n.push(new lg(s))}),this.Ku.forEach(s=>{e.has(s)||n.push(new ag(s))}),n}tc(e){this.Uu=e.Hi,this.Ku=$e();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return bi.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class Cw{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class Sw{constructor(e){this.key=e,this.nc=!1}}class Aw{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new Si(a=>Am(a),la),this.rc=new Map,this.oc=new Set,this.uc=new jt(ve.comparator),this.cc=new Map,this.ac=new Ac,this.hc={},this.lc=new Map,this.fc=yi.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function Dw(t,e){const n=Vw(t);let s,i;const r=n.ic.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.ec();else{const o=await Yb(n.localStore,ns(e));n.isPrimaryClient&&eg(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await Rw(n,e,s,a==="current",o.resumeToken)}return i}async function Rw(t,e,n,s,i){t._c=(f,d,m)=>async function(_,v,E,T){let k=v.view.Wu(E);k.$i&&(k=await rh(_.localStore,v.query,!1).then(({documents:B})=>v.view.Wu(B,k)));const P=T&&T.targetChanges.get(v.targetId),D=v.view.applyChanges(k,_.isPrimaryClient,P);return hh(_,v.targetId,D.Xu),D.snapshot}(t,f,d,m);const r=await rh(t.localStore,e,!0),o=new Iw(e,r.Hi),a=o.Wu(r.documents),l=Nr.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,l);hh(t,n,c.Xu);const h=new Cw(e,n,o);return t.ic.set(e,h),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),c.snapshot}async function Pw(t,e){const n=De(t),s=n.ic.get(e),i=n.rc.get(s.targetId);if(i.length>1)return n.rc.set(s.targetId,i.filter(r=>!la(r,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Pl(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),tg(n.remoteStore,s.targetId),Nl(n,s.targetId)}).catch(Dr)):(Nl(n,s.targetId),await Pl(n.localStore,s.targetId,!0))}async function Nw(t,e,n){const s=Bw(t);try{const i=await function(r,o){const a=De(r),l=Vt.now(),c=o.reduce((d,m)=>d.add(m.key),$e());let h,f;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let m=ss(),_=$e();return a.Gi.getEntries(d,c).next(v=>{m=v,m.forEach((E,T)=>{T.isValidDocument()||(_=_.add(E))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,m)).next(v=>{h=v;const E=[];for(const T of o){const k=eb(T,h.get(T.key).overlayedDocument);k!=null&&E.push(new Ss(T.key,k,Im(k.value.mapValue),Ln.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,E,o)}).next(v=>{f=v;const E=v.applyToLocalDocumentSet(h,_);return a.documentOverlayCache.saveOverlays(d,v.batchId,E)})}).then(()=>({batchId:f.batchId,changes:Bm(h)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let l=r.hc[r.currentUser.toKey()];l||(l=new jt(We)),l=l.insert(o,a),r.hc[r.currentUser.toKey()]=l}(s,i.batchId,n),await $r(s,i.changes),await pa(s.remoteStore)}catch(i){const r=Lc(i,"Failed to persist write");n.reject(r)}}async function cg(t,e){const n=De(t);try{const s=await Wb(n.localStore,e);e.targetChanges.forEach((i,r)=>{const o=n.cc.get(r);o&&(lt(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.nc=!0:i.modifiedDocuments.size>0?lt(o.nc):i.removedDocuments.size>0&&(lt(o.nc),o.nc=!1))}),await $r(n,s,e)}catch(s){await Dr(s)}}function uh(t,e,n){const s=De(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.ic.forEach((r,o)=>{const a=o.view.Pu(e);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=De(r);a.onlineState=o;let l=!1;a.queries.forEach((c,h)=>{for(const f of h.listeners)f.Pu(o)&&(l=!0)}),l&&Mc(a)}(s.eventManager,e),i.length&&s.sc.zo(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Ow(t,e,n){const s=De(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.cc.get(e),r=i&&i.key;if(r){let o=new jt(ve.comparator);o=o.insert(r,Zt.newNoDocument(r,Pe.min()));const a=$e().add(r),l=new ha(Pe.min(),new Map,new Bt(We),o,a);await cg(s,l),s.uc=s.uc.remove(r),s.cc.delete(e),Uc(s)}else await Pl(s.localStore,e,!1).then(()=>Nl(s,e,n)).catch(Dr)}async function $w(t,e){const n=De(t),s=e.batch.batchId;try{const i=await Gb(n.localStore,e);hg(n,s,null),ug(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await $r(n,i)}catch(i){await Dr(i)}}async function Lw(t,e,n){const s=De(t);try{const i=await function(r,o){const a=De(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let c;return a.mutationQueue.lookupMutationBatch(l,o).next(h=>(lt(h!==null),c=h.keys(),a.mutationQueue.removeMutationBatch(l,h))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,c,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,c)).next(()=>a.localDocuments.getDocuments(l,c))})}(s.localStore,e);hg(s,e,n),ug(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await $r(s,i)}catch(i){await Dr(i)}}function ug(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function hg(t,e,n){const s=De(t);let i=s.hc[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(n?r.reject(n):r.resolve(),i=i.remove(e)),s.hc[s.currentUser.toKey()]=i}}function Nl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.rc.get(e))t.ic.delete(s),n&&t.sc.wc(s,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(s=>{t.ac.containsKey(s)||fg(t,s)})}function fg(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(tg(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),Uc(t))}function hh(t,e,n){for(const s of n)s instanceof ag?(t.ac.addReference(s.key,e),Mw(t,s)):s instanceof lg?(me("SyncEngine","Document no longer in limbo: "+s.key),t.ac.removeReference(s.key,e),t.ac.containsKey(s.key)||fg(t,s.key)):Ae()}function Mw(t,e){const n=e.key,s=n.path.canonicalString();t.uc.get(n)||t.oc.has(s)||(me("SyncEngine","New document in limbo: "+n),t.oc.add(s),Uc(t))}function Uc(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new ve(mt.fromString(e)),s=t.fc.next();t.cc.set(s,new Sw(n)),t.uc=t.uc.insert(n,s),eg(t.remoteStore,new Ls(ns(Sm(n.path)),s,2,bc.at))}}async function $r(t,e,n){const s=De(t),i=[],r=[],o=[];s.ic.isEmpty()||(s.ic.forEach((a,l)=>{o.push(s._c(l,e,n).then(c=>{if((c||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const h=Rc.Ci(l.targetId,c);r.push(h)}}))}),await Promise.all(o),s.sc.zo(i),await async function(a,l){const c=De(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>Z.forEach(l,f=>Z.forEach(f.Si,d=>c.persistence.referenceDelegate.addReference(h,f.targetId,d)).next(()=>Z.forEach(f.Di,d=>c.persistence.referenceDelegate.removeReference(h,f.targetId,d)))))}catch(h){if(!Rr(h))throw h;me("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const f=h.targetId;if(!h.fromCache){const d=c.Ui.get(f),m=d.snapshotVersion,_=d.withLastLimboFreeSnapshotVersion(m);c.Ui=c.Ui.insert(f,_)}}}(s.localStore,r))}async function Uw(t,e){const n=De(t);if(!n.currentUser.isEqual(e)){me("SyncEngine","User change. New user:",e.toKey());const s=await Ym(n.localStore,e);n.currentUser=e,function(i,r){i.lc.forEach(o=>{o.forEach(a=>{a.reject(new ye(J.CANCELLED,r))})}),i.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await $r(n,s.ji)}}function Fw(t,e){const n=De(t),s=n.cc.get(e);if(s&&s.nc)return $e().add(s.key);{let i=$e();const r=n.rc.get(e);if(!r)return i;for(const o of r){const a=n.ic.get(o);i=i.unionWith(a.view.ju)}return i}}function Vw(t){const e=De(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=cg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Fw.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Ow.bind(null,e),e.sc.zo=kw.bind(null,e.eventManager),e.sc.wc=Ew.bind(null,e.eventManager),e}function Bw(t){const e=De(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=$w.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Lw.bind(null,e),e}class jw{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=fa(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return zb(this.persistence,new Hb,e.initialUser,this.It)}yc(e){return new jb(Dc.Bs,this.It)}gc(e){return new Jb}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class qw{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>uh(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Uw.bind(null,this.syncEngine),await _w(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new yw}createDatastore(e){const n=fa(e.databaseInfo.databaseId),s=(i=e.databaseInfo,new nw(i));var i;return function(r,o,a,l){return new rw(r,o,a,l)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,i=e.asyncQueue,r=a=>uh(this.syncEngine,a,0),o=ah.C()?new ah:new Zb,new aw(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(e,n){return function(s,i,r,o,a,l,c){const h=new Aw(s,i,r,o,a,l);return c&&(h.dc=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=De(e);me("RemoteStore","RemoteStore shutting down."),n.wu.add(5),await Or(n),n.gu.shutdown(),n.yu.set("Unknown")}(this.remoteStore)}}/**
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
 */function dg(t,e,n){if(!n)throw new ye(J.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Hw(t,e,n,s){if(e===!0&&s===!0)throw new ye(J.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function fh(t){if(!ve.isDocumentKey(t))throw new ye(J.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function dh(t){if(ve.isDocumentKey(t))throw new ye(J.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Fc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Ae()}function zs(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ye(J.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Fc(t);throw new ye(J.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */const ph=new Map;class mh{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new ye(J.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ye(J.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Hw("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class ma{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new mh({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new ye(J.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new ye(J.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new mh(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new p1;switch(n.type){case"gapi":const s=n.client;return new v1(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new ye(J.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=ph.get(e);n&&(me("ComponentProvider","Removing Datastore"),ph.delete(e),n.terminate())}(this),Promise.resolve()}}function Kw(t,e,n,s={}){var i;const r=(t=zs(t,ma))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==e&&kl("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=an.MOCK_USER;else{o=Zv(s.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=s.mockUserToken.sub||s.mockUserToken.user_id;if(!l)throw new ye(J.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new an(l)}t._authCredentials=new m1(new bm(o,a))}}/**
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
 */class On{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ys(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new On(this.firestore,e,this._key)}}class ga{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new ga(this.firestore,e,this._query)}}class ys extends ga{constructor(e,n,s){super(e,n,Sm(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new On(this.firestore,null,new ve(e))}withConverter(e){return new ys(this.firestore,e,this._path)}}function Mn(t,e,...n){if(t=gn(t),dg("collection","path",e),t instanceof ma){const s=mt.fromString(e,...n);return dh(s),new ys(t,null,s)}{if(!(t instanceof On||t instanceof ys))throw new ye(J.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(mt.fromString(e,...n));return dh(s),new ys(t.firestore,null,s)}}function is(t,e,...n){if(t=gn(t),arguments.length===1&&(e=wm.R()),dg("doc","path",e),t instanceof ma){const s=mt.fromString(e,...n);return fh(s),new On(t,null,new ve(s))}{if(!(t instanceof On||t instanceof ys))throw new ye(J.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(mt.fromString(e,...n));return fh(s),new On(t.firestore,t instanceof ys?t.converter:null,new ve(s))}}/**
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
 */class zw{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):ts("Uncaught Error in snapshot listener:",e)}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class Gw{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=an.UNAUTHENTICATED,this.clientId=wm.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{me("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(me("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ye(J.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new vs;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Lc(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Ww(t,e){t.asyncQueue.verifyOperationInProgress(),me("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await Ym(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function Qw(t,e){t.asyncQueue.verifyOperationInProgress();const n=await xw(t);me("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(i=>lh(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,r)=>lh(e.remoteStore,r)),t.onlineComponents=e}async function xw(t){return t.offlineComponents||(me("FirestoreClient","Using default OfflineComponentProvider"),await Ww(t,new jw)),t.offlineComponents}async function pg(t){return t.onlineComponents||(me("FirestoreClient","Using default OnlineComponentProvider"),await Qw(t,new qw)),t.onlineComponents}function Yw(t){return pg(t).then(e=>e.syncEngine)}async function Xw(t){const e=await pg(t),n=e.eventManager;return n.onListen=Dw.bind(null,e.syncEngine),n.onUnlisten=Pw.bind(null,e.syncEngine),n}function Jw(t,e,n={}){const s=new vs;return t.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,l){const c=new zw({next:f=>{r.enqueueAndForget(()=>ww(i,h)),f.fromCache&&a.source==="server"?l.reject(new ye(J.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(f)},error:f=>l.reject(f)}),h=new Tw(o,c,{includeMetadataChanges:!0,ku:!0});return bw(i,h)}(await Xw(t),t.asyncQueue,e,n,s)),s.promise}class Zw{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.No=new Jm(this,"async_queue_retry"),this.Wc=()=>{const n=Qa();n&&me("AsyncQueue","Visibility state changed to "+n.visibilityState),this.No.Po()};const e=Qa();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.Uc){this.Uc=!0,this.Qc=e||!1;const n=Qa();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.Uc)return new Promise(()=>{});const n=new vs;return this.Hc(()=>this.Uc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.No.reset()}catch(e){if(!Rr(e))throw e;me("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.No.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(s=>{this.Kc=s,this.Gc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw ts("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Gc=!1,s))));return this.Bc=n,n}enqueueAfterDelay(e,n,s){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const i=$c.createAndSchedule(this,e,n,s,r=>this.Yc(r));return this.qc.push(i),i}zc(){this.Kc&&Ae()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.qc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.qc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.qc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.qc.indexOf(e);this.qc.splice(n,1)}}class Lr extends ma{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=new Zw,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||gg(this),this._firestoreClient.terminate()}}function ek(t,e){const n=typeof t=="object"?t:mp(),s=typeof t=="string"?t:e||"(default)",i=Xl(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=Yv("firestore");r&&Kw(i,...r)}return i}function mg(t){return t._firestoreClient||gg(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function gg(t){var e;const n=t._freezeSettings(),s=function(i,r,o,a){return new D1(i,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Gw(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
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
 */class wi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new wi(fn.fromBase64String(e))}catch(n){throw new ye(J.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new wi(fn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class _a{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ye(J.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ln(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Vc{constructor(e){this._methodName=e}}/**
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
 */class Bc{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ye(J.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ye(J.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return We(this._lat,e._lat)||We(this._long,e._long)}}/**
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
 */const tk=/^__.*__$/;class nk{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Ss(e,this.data,this.fieldMask,n,this.fieldTransforms):new Pr(e,this.data,n,this.fieldTransforms)}}class _g{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new Ss(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function vg(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ae()}}class jc{constructor(e,n,s,i,r,o){this.settings=e,this.databaseId=n,this.It=s,this.ignoreUndefinedProperties=i,r===void 0&&this.na(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new jc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:s,oa:!1});return i.ua(e),i}ca(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:s,oa:!1});return i.na(),i}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return No(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(vg(this.sa)&&tk.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class sk{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.It=s||fa(e)}da(e,n,s,i=!1){return new jc({sa:e,methodName:n,fa:s,path:ln.emptyPath(),oa:!1,la:i},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function yg(t){const e=t._freezeSettings(),n=fa(t._databaseId);return new sk(t._databaseId,!!e.ignoreUndefinedProperties,n)}function ik(t,e,n,s,i,r={}){const o=t.da(r.merge||r.mergeFields?2:0,e,n,i);qc("Data must be an object, but it was:",o,s);const a=bg(s,o);let l,c;if(r.merge)l=new Nn(o.fieldMask),c=o.fieldTransforms;else if(r.mergeFields){const h=[];for(const f of r.mergeFields){const d=Ol(e,f,n);if(!o.contains(d))throw new ye(J.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);kg(h,d)||h.push(d)}l=new Nn(h),c=o.fieldTransforms.filter(f=>l.covers(f.field))}else l=null,c=o.fieldTransforms;return new nk(new En(a),l,c)}class va extends Vc{_toFieldTransform(e){if(e.sa!==2)throw e.sa===1?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof va}}function rk(t,e,n,s){const i=t.da(1,e,n);qc("Data must be an object, but it was:",i,s);const r=[],o=En.empty();Ys(s,(l,c)=>{const h=Hc(e,l,n);c=gn(c);const f=i.ca(h);if(c instanceof va)r.push(h);else{const d=ya(c,f);d!=null&&(r.push(h),o.set(h,d))}});const a=new Nn(r);return new _g(o,a,i.fieldTransforms)}function ok(t,e,n,s,i,r){const o=t.da(1,e,n),a=[Ol(e,s,n)],l=[i];if(r.length%2!=0)throw new ye(J.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<r.length;d+=2)a.push(Ol(e,r[d])),l.push(r[d+1]);const c=[],h=En.empty();for(let d=a.length-1;d>=0;--d)if(!kg(c,a[d])){const m=a[d];let _=l[d];_=gn(_);const v=o.ca(m);if(_ instanceof va)c.push(m);else{const E=ya(_,v);E!=null&&(c.push(m),h.set(m,E))}}const f=new Nn(c);return new _g(h,f,o.fieldTransforms)}function ya(t,e){if(wg(t=gn(t)))return qc("Unsupported field value:",e,t),bg(t,e);if(t instanceof Vc)return function(n,s){if(!vg(s.sa))throw s.ha(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ha(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=ya(o,s.aa(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(t,e)}return function(n,s){if((n=gn(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Q1(s.It,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Vt.fromDate(n);return{timestampValue:Ro(s.It,i)}}if(n instanceof Vt){const i=new Vt(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Ro(s.It,i)}}if(n instanceof Bc)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof wi)return{bytesValue:zm(s.It,n._byteString)};if(n instanceof On){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s.ha(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Cc(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ha(`Unsupported field value: ${Fc(n)}`)}(t,e)}function bg(t,e){const n={};return km(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ys(t,(s,i)=>{const r=ya(i,e.ra(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function wg(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Vt||t instanceof Bc||t instanceof wi||t instanceof On||t instanceof Vc)}function qc(t,e,n){if(!wg(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Fc(n);throw s==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+s)}}function Ol(t,e,n){if((e=gn(e))instanceof _a)return e._internalPath;if(typeof e=="string")return Hc(t,e);throw No("Field path arguments must be of type string or ",t,!1,void 0,n)}const ak=new RegExp("[~\\*/\\[\\]]");function Hc(t,e,n){if(e.search(ak)>=0)throw No(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new _a(...e.split("."))._internalPath}catch{throw No(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function No(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${s}`),o&&(l+=` in document ${i}`),l+=")"),new ye(J.INVALID_ARGUMENT,a+t+l)}function kg(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Eg{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new On(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new lk(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Tg("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class lk extends Eg{data(){return super.data()}}function Tg(t,e){return typeof e=="string"?Hc(t,e):e instanceof _a?e._internalPath:e._delegate._internalPath}/**
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
 */function ck(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ye(J.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}/**
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
 */class uk{convertValue(e,n="none"){switch(Ks(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Pt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(_i(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Ae()}}convertObject(e,n){const s={};return Ys(e.fields,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(e){return new Bc(Pt(e.latitude),Pt(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Tm(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(sr(e));default:return null}}convertTimestamp(e){const n=Es(e);return new Vt(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=mt.fromString(e);lt(xm(s));const i=new ir(s.get(1),s.get(3)),r=new ve(s.popFirst(5));return i.isEqual(n)||ts(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
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
 */function hk(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
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
 */class Xr{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class fk extends Eg{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new io(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Tg("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class io extends fk{data(e={}){return super.data(e)}}class dk{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Xr(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new io(this._firestore,this._userDataWriter,s.key,s,new Xr(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ye(J.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>({type:"added",doc:new io(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Xr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter),oldIndex:-1,newIndex:r++}))}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new io(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Xr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,c=-1;return o.type!==0&&(l=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),c=r.indexOf(o.doc.key)),{type:pk(o.type),doc:a,oldIndex:l,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function pk(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ae()}}class mk extends uk{constructor(e){super(),this.firestore=e}convertBytes(e){return new wi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new On(this.firestore,null,n)}}function ba(t){t=zs(t,ga);const e=zs(t.firestore,Lr),n=mg(e),s=new mk(e);return ck(t._query),Jw(n,t._query).then(i=>new dk(e,s,t,i))}function wa(t,e,n,...s){t=zs(t,On);const i=zs(t.firestore,Lr),r=yg(i);let o;return o=typeof(e=gn(e))=="string"||e instanceof _a?ok(r,"updateDoc",t._key,e,n,s):rk(r,"updateDoc",t._key,e),Kc(i,[o.toMutation(t._key,Ln.exists(!0))])}function ka(t){return Kc(zs(t.firestore,Lr),[new Ic(t._key,Ln.none())])}function Ms(t,e){const n=zs(t.firestore,Lr),s=is(t),i=hk(t.converter,e);return Kc(n,[ik(yg(t.firestore),"addDoc",s._key,i,t.converter!==null,{}).toMutation(s._key,Ln.exists(!1))]).then(()=>s)}function Kc(t,e){return function(n,s){const i=new vs;return n.asyncQueue.enqueueAndForget(async()=>Nw(await Yw(n),s,i)),i.promise}(mg(t),e)}(function(t,e=!0){(function(n){Ci=n})(yr),pi(new js("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new Lr(new g1(n.getProvider("auth-internal")),new b1(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new ye(J.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ir(a.options.projectId,l)}(r,s),r);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),_s(Bu,"3.7.1",t),_s(Bu,"3.7.1","esm2017")})();const Ig="/to-deploy-mh/assets/schedule.20f01954.png";function Cg(t){const e=t-1;return e*e*e+1}function ki(t){return t===0||t===1?t:t<.5?.5*Math.pow(2,20*t-10):-.5*Math.pow(2,10-t*20)+1}function Oo(t,{delay:e=0,duration:n=400,easing:s=Ad}={}){const i=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:s,css:r=>`opacity: ${r*i}`}}function $o(t,{delay:e=0,duration:n=400,easing:s=Cg,x:i=0,y:r=0,opacity:o=0}={}){const a=getComputedStyle(t),l=+a.opacity,c=a.transform==="none"?"":a.transform,h=l*(1-o);return{delay:e,duration:n,easing:s,css:(f,d)=>`
			transform: ${c} translate(${(1-f)*i}px, ${(1-f)*r}px);
			opacity: ${l-h*d}`}}function Ei(t,{delay:e=0,duration:n=400,easing:s=Cg,start:i=0,opacity:r=0}={}){const o=getComputedStyle(t),a=+o.opacity,l=o.transform==="none"?"":o.transform,c=1-i,h=a*(1-r);return{delay:e,duration:n,easing:s,css:(f,d)=>`
			transform: ${l} scale(${1-c*d});
			opacity: ${a-h*d}
		`}}const gt=en(""),$l=en([]),Sg=en([]),at=en({typeContact:"",name:"",lastname:"",lastContact:"",telephon:"",email:"",selecMC:"",propCont:"",comContact:"",rangeProp:"",contMode:"",budget:"",numBeds:"",numBaths:"",halfBathroom:"",numParks:"",modePay:"",selecTP:"",contactType:"",contactStage:"",createdAt:"",locaProperty:[],tagsProperty:[],sendedProperties:[]}),rt=en({typeProperty:"",typeSaller:"",claveEB:"",claveMH:"",createdAt:"",nameProperty:"",price:"",beds:"",bathroom:"",halfBathroom:"",park:"",areaBuilding:"",areaTotal:"",description:"",urlImage:"",urlProp:"",urlSinergy:"",colonia:"",selecTP:"",selecTO:"",typeOperation:"",tagsProperty:[],locaProperty:[],binnacle:[]}),Rn=en({task:"",isComplete:"",createdAt:"",endTask:"",timeTask:"",notes:"",user:""});var gk="firebase",_k="9.12.1";/**
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
 */_s(gk,_k,"app");function zc(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function Ag(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const vk=Ag,Dg=new _r("auth","Firebase",Ag());/**
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
 */const gh=new xl("@firebase/auth");function ro(t,...e){gh.logLevel<=qe.ERROR&&gh.error(`Auth (${yr}): ${t}`,...e)}/**
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
 */function Un(t,...e){throw Gc(t,...e)}function jn(t,...e){return Gc(t,...e)}function yk(t,e,n){const s=Object.assign(Object.assign({},vk()),{[e]:n});return new _r("auth","Firebase",s).create(e,{appName:t.name})}function Gc(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Dg.create(t,...e)}function Ee(t,e,...n){if(!t)throw Gc(e,...n)}function xn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ro(e),new Error(e)}function rs(t,e){t||xn(e)}/**
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
 */const _h=new Map;function Yn(t){rs(t instanceof Function,"Expected a class definition");let e=_h.get(t);return e?(rs(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,_h.set(t,e),e)}/**
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
 */function bk(t,e){const n=Xl(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(go(r,e!=null?e:{}))return i;Un(i,"already-initialized")}return n.initialize({options:e})}function wk(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Yn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Ll(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function kk(){return vh()==="http:"||vh()==="https:"}function vh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Ek(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(kk()||jv()||"connection"in navigator)?navigator.onLine:!0}function Tk(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Mr{constructor(e,n){this.shortDelay=e,this.longDelay=n,rs(n>e,"Short delay should be less than long delay!"),this.isMobile=Bv()||qv()}get(){return Ek()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Wc(t,e){rs(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Rg{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;xn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;xn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;xn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Ik={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const Ck=new Mr(3e4,6e4);function Ur(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Fr(t,e,n,s,i={}){return Pg(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=vr(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Rg.fetch()(Ng(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function Pg(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},Ik),e);try{const i=new Sk(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Jr(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Jr(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Jr(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Jr(t,"user-disabled",o);const h=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw yk(t,h,c);Un(t,h)}}catch(i){if(i instanceof os)throw i;Un(t,"network-request-failed")}}async function Vr(t,e,n,s,i={}){const r=await Fr(t,e,n,s,i);return"mfaPendingCredential"in r&&Un(t,"multi-factor-auth-required",{_serverResponse:r}),r}function Ng(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?Wc(t.config,i):`${t.config.apiScheme}://${i}`}class Sk{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(jn(this.auth,"network-request-failed")),Ck.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Jr(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=jn(t,e,s);return i.customData._tokenResponse=n,i}/**
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
 */async function Ak(t,e){return Fr(t,"POST","/v1/accounts:delete",e)}async function Dk(t,e){return Fr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Qi(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Rk(t,e=!1){const n=gn(t),s=await n.getIdToken(e),i=Qc(s);Ee(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Qi(xa(i.auth_time)),issuedAtTime:Qi(xa(i.iat)),expirationTime:Qi(xa(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function xa(t){return Number(t)*1e3}function Qc(t){var e;const[n,s,i]=t.split(".");if(n===void 0||s===void 0||i===void 0)return ro("JWT malformed, contained fewer than 3 sections"),null;try{const r=cp(s);return r?JSON.parse(r):(ro("Failed to decode base64 JWT payload"),null)}catch(r){return ro("Caught error parsing JWT payload as JSON",(e=r)===null||e===void 0?void 0:e.toString()),null}}function Pk(t){const e=Qc(t);return Ee(e,"internal-error"),Ee(typeof e.exp<"u","internal-error"),Ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function cr(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof os&&Nk(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function Nk({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Ok{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Og{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Qi(this.lastLoginAt),this.creationTime=Qi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Lo(t){var e;const n=t.auth,s=await t.getIdToken(),i=await cr(t,Dk(n,{idToken:s}));Ee(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?Mk(r.providerUserInfo):[],a=Lk(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),h=l?c:!1,f={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Og(r.createdAt,r.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function $k(t){const e=gn(t);await Lo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Lk(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function Mk(t){return t.map(e=>{var{providerId:n}=e,s=zc(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function Uk(t,e){const n=await Pg(t,{},async()=>{const s=vr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=Ng(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Rg.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class ur{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ee(e.idToken,"internal-error"),Ee(typeof e.idToken<"u","internal-error"),Ee(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Pk(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return Ee(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await Uk(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new ur;return s&&(Ee(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(Ee(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(Ee(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ur,this.toJSON())}_performRefresh(){return xn("not implemented")}}/**
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
 */function as(t,e){Ee(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Us{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=zc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ok(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Og(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await cr(this,this.stsTokenManager.getToken(this.auth,e));return Ee(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Rk(this,e)}reload(){return $k(this)}_assign(e){this!==e&&(Ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Us(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){Ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Lo(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await cr(this,Ak(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,h;const f=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,m=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,T=(c=n.createdAt)!==null&&c!==void 0?c:void 0,k=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:P,emailVerified:D,isAnonymous:B,providerData:$,stsTokenManager:F}=n;Ee(P&&F,e,"internal-error");const H=ur.fromJSON(this.name,F);Ee(typeof P=="string",e,"internal-error"),as(f,e.name),as(d,e.name),Ee(typeof D=="boolean",e,"internal-error"),Ee(typeof B=="boolean",e,"internal-error"),as(m,e.name),as(_,e.name),as(v,e.name),as(E,e.name),as(T,e.name),as(k,e.name);const N=new Us({uid:P,auth:e,email:d,emailVerified:D,displayName:f,isAnonymous:B,photoURL:_,phoneNumber:m,tenantId:v,stsTokenManager:H,createdAt:T,lastLoginAt:k});return $&&Array.isArray($)&&(N.providerData=$.map(U=>Object.assign({},U))),E&&(N._redirectEventId=E),N}static async _fromIdTokenResponse(e,n,s=!1){const i=new ur;i.updateFromServerResponse(n);const r=new Us({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Lo(r),r}}/**
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
 */class $g{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}$g.type="NONE";const yh=$g;/**
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
 */function oo(t,e,n){return`firebase:${t}:${e}:${n}`}class ci{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=oo(this.userKey,i.apiKey,r),this.fullPersistenceKey=oo("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Us._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new ci(Yn(yh),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||Yn(yh);const o=oo(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const h=await c._get(o);if(h){const f=Us._fromJSON(e,h);c!==r&&(a=f),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new ci(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new ci(r,e,s))}}/**
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
 */function bh(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ug(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Lg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Vg(e))return"Blackberry";if(Bg(e))return"Webos";if(xc(e))return"Safari";if((e.includes("chrome/")||Mg(e))&&!e.includes("edge/"))return"Chrome";if(Fg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Lg(t=hn()){return/firefox\//i.test(t)}function xc(t=hn()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Mg(t=hn()){return/crios\//i.test(t)}function Ug(t=hn()){return/iemobile/i.test(t)}function Fg(t=hn()){return/android/i.test(t)}function Vg(t=hn()){return/blackberry/i.test(t)}function Bg(t=hn()){return/webos/i.test(t)}function Ea(t=hn()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Fk(t=hn()){var e;return Ea(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Vk(){return Hv()&&document.documentMode===10}function jg(t=hn()){return Ea(t)||Fg(t)||Bg(t)||Vg(t)||/windows phone/i.test(t)||Ug(t)}function Bk(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function qg(t,e=[]){let n;switch(t){case"Browser":n=bh(hn());break;case"Worker":n=`${bh(hn())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${yr}/${s}`}/**
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
 */class jk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const s=[];try{for(const i of this.queue)await i(e),i.onAbort&&s.push(i.onAbort)}catch(i){s.reverse();for(const r of s)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
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
 */class qk{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new wh(this),this.idTokenSubscription=new wh(this),this.beforeStateQueue=new jk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Dg,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Yn(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await ci.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await Lo(e)}catch(s){if(((n=s)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Tk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?gn(e):null;return n&&Ee(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Yn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new _r("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Yn(e)||this._popupRedirectResolver;Ee(n,this,"argument-error"),this.redirectPersistenceManager=await ci.create(this,[Yn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return Ee(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=qg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function Br(t){return gn(t)}class wh{constructor(e){this.auth=e,this.observer=null,this.addObserver=iy(n=>this.observer=n)}get next(){return Ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Hk(t,e,n){const s=Br(t);Ee(s._canInitEmulator,s,"emulator-config-failed"),Ee(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),r=Hg(e),{host:o,port:a}=Kk(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||zk()}function Hg(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Kk(t){const e=Hg(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:kh(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:kh(o)}}}function kh(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function zk(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Yc{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return xn("not implemented")}_getIdTokenResponse(e){return xn("not implemented")}_linkToIdToken(e,n){return xn("not implemented")}_getReauthenticationResolver(e){return xn("not implemented")}}async function Gk(t,e){return Fr(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Wk(t,e){return Vr(t,"POST","/v1/accounts:signInWithPassword",Ur(t,e))}/**
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
 */async function Qk(t,e){return Vr(t,"POST","/v1/accounts:signInWithEmailLink",Ur(t,e))}async function xk(t,e){return Vr(t,"POST","/v1/accounts:signInWithEmailLink",Ur(t,e))}/**
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
 */class hr extends Yc{constructor(e,n,s,i=null){super("password",s),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new hr(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new hr(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Wk(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Qk(e,{email:this._email,oobCode:this._password});default:Un(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Gk(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return xk(e,{idToken:n,email:this._email,oobCode:this._password});default:Un(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ui(t,e){return Vr(t,"POST","/v1/accounts:signInWithIdp",Ur(t,e))}/**
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
 */const Yk="http://localhost";class Gs extends Yc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Gs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Un("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=zc(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new Gs(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ui(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,ui(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ui(e,n)}buildRequest(){const e={requestUri:Yk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=vr(n)}return e}}/**
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
 */function Xk(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Jk(t){const e=Mi(Ui(t)).link,n=e?Mi(Ui(e)).deep_link_id:null,s=Mi(Ui(t)).deep_link_id;return(s?Mi(Ui(s)).link:null)||s||n||e||t}class Xc{constructor(e){var n,s,i,r,o,a;const l=Mi(Ui(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,h=(s=l.oobCode)!==null&&s!==void 0?s:null,f=Xk((i=l.mode)!==null&&i!==void 0?i:null);Ee(c&&h&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=h,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Jk(e);try{return new Xc(n)}catch{return null}}}/**
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
 */class Di{constructor(){this.providerId=Di.PROVIDER_ID}static credential(e,n){return hr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Xc.parseLink(n);return Ee(s,"argument-error"),hr._fromEmailAndCode(e,s.code,s.tenantId)}}Di.PROVIDER_ID="password";Di.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Di.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Kg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class jr extends Kg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class us extends jr{constructor(){super("facebook.com")}static credential(e){return Gs._fromParams({providerId:us.PROVIDER_ID,signInMethod:us.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return us.credentialFromTaggedObject(e)}static credentialFromError(e){return us.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return us.credential(e.oauthAccessToken)}catch{return null}}}us.FACEBOOK_SIGN_IN_METHOD="facebook.com";us.PROVIDER_ID="facebook.com";/**
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
 */class hs extends jr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Gs._fromParams({providerId:hs.PROVIDER_ID,signInMethod:hs.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return hs.credentialFromTaggedObject(e)}static credentialFromError(e){return hs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return hs.credential(n,s)}catch{return null}}}hs.GOOGLE_SIGN_IN_METHOD="google.com";hs.PROVIDER_ID="google.com";/**
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
 */class fs extends jr{constructor(){super("github.com")}static credential(e){return Gs._fromParams({providerId:fs.PROVIDER_ID,signInMethod:fs.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fs.credentialFromTaggedObject(e)}static credentialFromError(e){return fs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fs.credential(e.oauthAccessToken)}catch{return null}}}fs.GITHUB_SIGN_IN_METHOD="github.com";fs.PROVIDER_ID="github.com";/**
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
 */class ds extends jr{constructor(){super("twitter.com")}static credential(e,n){return Gs._fromParams({providerId:ds.PROVIDER_ID,signInMethod:ds.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ds.credentialFromTaggedObject(e)}static credentialFromError(e){return ds.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return ds.credential(n,s)}catch{return null}}}ds.TWITTER_SIGN_IN_METHOD="twitter.com";ds.PROVIDER_ID="twitter.com";/**
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
 */async function Zk(t,e){return Vr(t,"POST","/v1/accounts:signUp",Ur(t,e))}/**
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
 */class Ws{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await Us._fromIdTokenResponse(e,s,i),o=Eh(s);return new Ws({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=Eh(s);return new Ws({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function Eh(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Mo extends os{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Mo.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new Mo(e,n,s,i)}}function zg(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Mo._fromErrorAndOperation(t,r,e,s):r})}async function eE(t,e,n=!1){const s=await cr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ws._forOperation(t,"link",s)}/**
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
 */async function tE(t,e,n=!1){var s;const{auth:i}=t,r="reauthenticate";try{const o=await cr(t,zg(i,r,e,t),n);Ee(o.idToken,i,"internal-error");const a=Qc(o.idToken);Ee(a,i,"internal-error");const{sub:l}=a;return Ee(t.uid===l,i,"user-mismatch"),Ws._forOperation(t,r,o)}catch(o){throw((s=o)===null||s===void 0?void 0:s.code)==="auth/user-not-found"&&Un(i,"user-mismatch"),o}}/**
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
 */async function Gg(t,e,n=!1){const s="signIn",i=await zg(t,s,e),r=await Ws._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}async function nE(t,e){return Gg(Br(t),e)}async function sE(t,e,n){const s=Br(t),i=await Zk(s,{returnSecureToken:!0,email:e,password:n}),r=await Ws._fromIdTokenResponse(s,"signIn",i);return await s._updateCurrentUser(r.user),r}function iE(t,e,n){return nE(gn(t),Di.credential(e,n))}function rE(t,e,n,s){return gn(t).onIdTokenChanged(e,n,s)}function oE(t,e,n){return gn(t).beforeAuthStateChanged(e,n)}const Uo="__sak";/**
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
 */class Wg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Uo,"1"),this.storage.removeItem(Uo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function aE(){const t=hn();return xc(t)||Ea(t)}const lE=1e3,cE=10;class Qg extends Wg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=aE()&&Bk(),this.fallbackToPolling=jg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);Vk()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,cE):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},lE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Qg.type="LOCAL";const uE=Qg;/**
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
 */class xg extends Wg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}xg.type="SESSION";const Yg=xg;/**
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
 */function hE(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ta{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new Ta(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await hE(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ta.receivers=[];/**
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
 */function Jc(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class fE{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=Jc("",20);i.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(f){const d=f;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(h),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(h),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function qn(){return window}function dE(t){qn().location.href=t}/**
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
 */function Xg(){return typeof qn().WorkerGlobalScope<"u"&&typeof qn().importScripts=="function"}async function pE(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function mE(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function gE(){return Xg()?self:null}/**
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
 */const Jg="firebaseLocalStorageDb",_E=1,Fo="firebaseLocalStorage",Zg="fbase_key";class qr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ia(t,e){return t.transaction([Fo],e?"readwrite":"readonly").objectStore(Fo)}function vE(){const t=indexedDB.deleteDatabase(Jg);return new qr(t).toPromise()}function Ml(){const t=indexedDB.open(Jg,_E);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Fo,{keyPath:Zg})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Fo)?e(s):(s.close(),await vE(),e(await Ml()))})})}async function Th(t,e,n){const s=Ia(t,!0).put({[Zg]:e,value:n});return new qr(s).toPromise()}async function yE(t,e){const n=Ia(t,!1).get(e),s=await new qr(n).toPromise();return s===void 0?null:s.value}function Ih(t,e){const n=Ia(t,!0).delete(e);return new qr(n).toPromise()}const bE=800,wE=3;class e_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ml(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>wE)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Xg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ta._getInstance(gE()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await pE(),!this.activeServiceWorker)return;this.sender=new fE(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);!s||((e=s[0])===null||e===void 0?void 0:e.fulfilled)&&((n=s[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||mE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ml();return await Th(e,Uo,"1"),await Ih(e,Uo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Th(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>yE(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ih(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=Ia(i,!1).getAll();return new qr(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),bE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}e_.type="LOCAL";const kE=e_;/**
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
 */function EE(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function TE(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=jn("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",EE().appendChild(s)})}function IE(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Mr(3e4,6e4);/**
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
 */function CE(t,e){return e?Yn(e):(Ee(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Zc extends Yc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ui(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ui(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ui(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function SE(t){return Gg(t.auth,new Zc(t),t.bypassAuthState)}function AE(t){const{auth:e,user:n}=t;return Ee(n,e,"internal-error"),tE(n,new Zc(t),t.bypassAuthState)}async function DE(t){const{auth:e,user:n}=t;return Ee(n,e,"internal-error"),eE(n,new Zc(t),t.bypassAuthState)}/**
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
 */class t_{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return SE;case"linkViaPopup":case"linkViaRedirect":return DE;case"reauthViaPopup":case"reauthViaRedirect":return AE;default:Un(this.auth,"internal-error")}}resolve(e){rs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){rs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const RE=new Mr(2e3,1e4);class ri extends t_{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,ri.currentPopupAction&&ri.currentPopupAction.cancel(),ri.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ee(e,this.auth,"internal-error"),e}async onExecution(){rs(this.filter.length===1,"Popup operations only handle one event");const e=Jc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(jn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(jn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ri.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(jn(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,RE.get())};e()}}ri.currentPopupAction=null;/**
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
 */const PE="pendingRedirect",ao=new Map;class NE extends t_{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=ao.get(this.auth._key());if(!e){try{const s=await OE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}ao.set(this.auth._key(),e)}return this.bypassAuthState||ao.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function OE(t,e){const n=ME(e),s=LE(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function $E(t,e){ao.set(t._key(),e)}function LE(t){return Yn(t._redirectPersistence)}function ME(t){return oo(PE,t.config.apiKey,t.name)}async function UE(t,e,n=!1){const s=Br(t),i=CE(s,e),o=await new NE(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const FE=10*60*1e3;class VE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!BE(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!n_(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(jn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=FE&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ch(e))}saveEventToCache(e){this.cachedEventUids.add(Ch(e)),this.lastProcessedEventTime=Date.now()}}function Ch(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function n_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function BE(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return n_(t);default:return!1}}/**
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
 */async function jE(t,e={}){return Fr(t,"GET","/v1/projects",e)}/**
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
 */const qE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,HE=/^https?/;async function KE(t){if(t.config.emulator)return;const{authorizedDomains:e}=await jE(t);for(const n of e)try{if(zE(n))return}catch{}Un(t,"unauthorized-domain")}function zE(t){const e=Ll(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!HE.test(n))return!1;if(qE.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const GE=new Mr(3e4,6e4);function Sh(){const t=qn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function WE(t){return new Promise((e,n)=>{var s,i,r;function o(){Sh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Sh(),n(jn(t,"network-request-failed"))},timeout:GE.get()})}if(!((i=(s=qn().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=qn().gapi)===null||r===void 0)&&r.load)o();else{const a=IE("iframefcb");return qn()[a]=()=>{gapi.load?o():n(jn(t,"network-request-failed"))},TE(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw lo=null,e})}let lo=null;function QE(t){return lo=lo||WE(t),lo}/**
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
 */const xE=new Mr(5e3,15e3),YE="__/auth/iframe",XE="emulator/auth/iframe",JE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ZE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function eT(t){const e=t.config;Ee(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Wc(e,XE):`https://${t.config.authDomain}/${YE}`,s={apiKey:e.apiKey,appName:t.name,v:yr},i=ZE.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${vr(s).slice(1)}`}async function tT(t){const e=await QE(t),n=qn().gapi;return Ee(n,t,"internal-error"),e.open({where:document.body,url:eT(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:JE,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=jn(t,"network-request-failed"),a=qn().setTimeout(()=>{r(o)},xE.get());function l(){qn().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const nT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},sT=500,iT=600,rT="_blank",oT="http://localhost";class Ah{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function aT(t,e,n,s=sT,i=iT){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},nT),{width:s.toString(),height:i.toString(),top:r,left:o}),c=hn().toLowerCase();n&&(a=Mg(c)?rT:n),Lg(c)&&(e=e||oT,l.scrollbars="yes");const h=Object.entries(l).reduce((d,[m,_])=>`${d}${m}=${_},`,"");if(Fk(c)&&a!=="_self")return lT(e||"",a),new Ah(null);const f=window.open(e||"",a,h);Ee(f,t,"popup-blocked");try{f.focus()}catch{}return new Ah(f)}function lT(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const cT="__/auth/handler",uT="emulator/auth/handler";function Dh(t,e,n,s,i,r){Ee(t.config.authDomain,t,"auth-domain-config-required"),Ee(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:yr,eventId:i};if(e instanceof Kg){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",sy(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(r||{}))o[l]=c}if(e instanceof jr){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${hT(t)}?${vr(a).slice(1)}`}function hT({config:t}){return t.emulator?Wc(t,uT):`https://${t.authDomain}/${cT}`}/**
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
 */const Ya="webStorageSupport";class fT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Yg,this._completeRedirectFn=UE,this._overrideRedirectResult=$E}async _openPopup(e,n,s,i){var r;rs((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=Dh(e,n,s,Ll(),i);return aT(e,o,Jc())}async _openRedirect(e,n,s,i){return await this._originValidation(e),dE(Dh(e,n,s,Ll(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(rs(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await tT(e),s=new VE(e);return n.register("authEvent",i=>(Ee(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ya,{type:Ya},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[Ya];o!==void 0&&n(!!o),Un(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=KE(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return jg()||xc()||Ea()}}const dT=fT;var Rh="@firebase/auth",Ph="0.20.10";/**
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
 */class pT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{var i;e(((i=s)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function mT(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function gT(t){pi(new js("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:r,authDomain:o}=s.options;return((a,l)=>{Ee(r&&!r.includes(":"),"invalid-api-key",{appName:a.name}),Ee(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const c={apiKey:r,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:qg(t)},h=new qk(a,l,c);return wk(h,n),h})(s,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),pi(new js("auth-internal",e=>{const n=Br(e.getProvider("auth").getImmediate());return(s=>new pT(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),_s(Rh,Ph,mT(t)),_s(Rh,Ph,"esm2017")}/**
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
 */const _T=5*60,vT=hp("authIdTokenMaxAge")||_T;let Nh=null;const yT=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>vT)return;const i=n==null?void 0:n.token;Nh!==i&&(Nh=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function bT(t=mp()){const e=Xl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=bk(t,{popupRedirectResolver:dT,persistence:[kE,uE,Yg]}),s=hp("authTokenSyncURL");if(s){const r=yT(s);oE(n,r,()=>r(n.currentUser)),rE(n,o=>r(o))}const i=up("auth");return i&&Hk(n,`http://${i}`),n}gT("Browser");let fr=[],Vo=[],Bn=[],Bo=[];const wT={apiKey:"AIzaSyDGi3ndUC1b4SFNstliSSVryu7_ymXEkZc",authDomain:"match-home-7d1f9.firebaseapp.com",databaseURL:"https://match-home-7d1f9-default-rtdb.firebaseio.com",projectId:"match-home-7d1f9",storageBucket:"match-home-7d1f9.appspot.com",messagingSenderId:"747751099607",appId:"1:747751099607:web:29d1e5beda87c847dfb492"},s_=pp(wT),Ft=ek(s_),i_=bT(s_),kT=Mn(Ft,"binnacles"),ET=Mn(Ft,"contacts"),TT=Mn(Ft,"properties"),IT=Mn(Ft,"todos");ba(kT).then(t=>Vo=t.docs.map(e=>({...e.data(),id:e.id})));ba(ET).then(t=>fr=t.docs.map(e=>({...e.data(),id:e.id})));ba(TT).then(t=>Bn=t.docs.map(e=>({...e.data(),id:e.id})));ba(IT).then(t=>Bo=t.docs.map(e=>({...e.data(),id:e.id})));const CT=["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","S\xE1bado"],ST=["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"];function _n(t){typeof t=="string"?t=new Date(t):t=new Date(t);let e=t.getDate()+1;e<10&&(e="0"+e);let n=ST[t.getMonth()],s=t.getFullYear();return`${e}/${n}/${s}`}function AT(t){t=new Date(t);let e=t.getMinutes();e.length<2&&(e="0"+e);let n=t.getHours();return n>12&&(n=n-12),n<10&&(n="0"+n),t.getDate(),`${n}:${e}`}function DT(t){return t=new Date(+t),`${CT[t.getDay()]}-`}function Oh(t,e,n){const s=t.slice();return s[21]=e[n],s}function $h(t,e,n){const s=t.slice();return s[21]=e[n],s}function RT(t){let e;return{c(){e=S("Editar")},m(n,s){w(n,e,s)},d(n){n&&b(e)}}}function PT(t){let e;return{c(){e=S("Guardar")},m(n,s){w(n,e,s)},d(n){n&&b(e)}}}function Lh(t){let e,n,s,i,r,o,a,l,c,h,f,d=t[1],m=[];for(let k=0;k<d.length;k+=1)m[k]=Vh($h(t,d,k));let _=null;d.length||(_=Mh());let v=t[1],E=[];for(let k=0;k<v.length;k+=1)E[k]=Hh(Oh(t,v,k));let T=null;return v.length||(T=Bh()),{c(){e=p("h3"),e.textContent="Tareas",n=y(),s=p("ol");for(let k=0;k<m.length;k+=1)m[k].c();_&&_.c(),i=y(),r=p("p"),r.textContent=`${Kh}`,o=y(),a=p("h3"),a.textContent="Agenda",l=y(),c=p("ol");for(let k=0;k<E.length;k+=1)E[k].c();T&&T.c(),h=y(),f=p("p"),f.textContent=`${Kh}`,g(r,"class","error"),g(f,"class","error")},m(k,P){w(k,e,P),w(k,n,P),w(k,s,P);for(let D=0;D<m.length;D+=1)m[D].m(s,null);_&&_.m(s,null),u(s,i),u(s,r),w(k,o,P),w(k,a,P),w(k,l,P),w(k,c,P);for(let D=0;D<E.length;D+=1)E[D].m(c,null);T&&T.m(c,null),u(c,h),u(c,f)},p(k,P){if(P&50){d=k[1];let D;for(D=0;D<d.length;D+=1){const B=$h(k,d,D);m[D]?m[D].p(B,P):(m[D]=Vh(B),m[D].c(),m[D].m(s,i))}for(;D<m.length;D+=1)m[D].d(1);m.length=d.length,!d.length&&_?_.p(k,P):d.length?_&&(_.d(1),_=null):(_=Mh(),_.c(),_.m(s,i))}if(P&50){v=k[1];let D;for(D=0;D<v.length;D+=1){const B=Oh(k,v,D);E[D]?E[D].p(B,P):(E[D]=Hh(B),E[D].c(),E[D].m(c,h))}for(;D<E.length;D+=1)E[D].d(1);E.length=v.length,!v.length&&T?T.p(k,P):v.length?T&&(T.d(1),T=null):(T=Bh(),T.c(),T.m(c,h))}},d(k){k&&b(e),k&&b(n),k&&b(s),He(m,k),_&&_.d(),k&&b(o),k&&b(a),k&&b(l),k&&b(c),He(E,k),T&&T.d()}}}function Mh(t){let e;return{c(){e=p("p"),e.textContent="No Hay Tareas Pendientes"},m(n,s){w(n,e,s)},p:ue,d(n){n&&b(e)}}}function Uh(t){let e,n,s,i,r,o,a,l,c,h,f=_n(t[21].endTask)+"",d,m,_=t[21].task+"",v,E,T,k;function P(){return t[11](t[21])}function D(){return t[12](t[21])}function B(){return t[13](t[21])}let $=t[21].notes&&Fh(t);return{c(){e=p("div"),n=p("li"),s=p("span"),i=p("button"),i.textContent="\u2714",r=y(),o=p("button"),o.textContent="\u2716",a=y(),l=p("button"),l.textContent="\u2714\u2716",c=y(),h=p("spam"),d=S(f),m=S(` -*-\r
                                 `),v=S(_),E=S(` -*-\r
                                 `),$&&$.c(),g(n,"class","schedule svelte-1e3ab80"),fi(n,"complete",t[21].isComplete)},m(F,H){w(F,e,H),u(e,n),u(n,s),u(s,i),u(s,r),u(s,o),u(s,a),u(s,l),u(n,c),u(n,h),u(h,d),u(h,m),u(h,v),u(h,E),$&&$.m(h,null),T||(k=[j(i,"click",P),j(o,"click",D),j(l,"click",B)],T=!0)},p(F,H){t=F,H&2&&f!==(f=_n(t[21].endTask)+"")&&re(d,f),H&2&&_!==(_=t[21].task+"")&&re(v,_),t[21].notes?$?$.p(t,H):($=Fh(t),$.c(),$.m(h,null)):$&&($.d(1),$=null),H&2&&fi(n,"complete",t[21].isComplete)},d(F){F&&b(e),$&&$.d(),T=!1,tt(k)}}}function Fh(t){let e=t[21].notes+"",n;return{c(){n=S(e)},m(s,i){w(s,n,i)},p(s,i){i&2&&e!==(e=s[21].notes+"")&&re(n,e)},d(s){s&&b(n)}}}function Vh(t){let e,n=!t[21].timeTask&&Uh(t);return{c(){n&&n.c(),e=vn()},m(s,i){n&&n.m(s,i),w(s,e,i)},p(s,i){s[21].timeTask?n&&(n.d(1),n=null):n?n.p(s,i):(n=Uh(s),n.c(),n.m(e.parentNode,e))},d(s){n&&n.d(s),s&&b(e)}}}function Bh(t){let e;return{c(){e=p("p"),e.textContent="No Hay Tareas Pendientes"},m(n,s){w(n,e,s)},p:ue,d(n){n&&b(e)}}}function jh(t){let e,n,s,i,r,o,a,l,c,h,f=t[21].timeTask+"",d,m,_=_n(t[21].endTask)+"",v,E,T=t[21].task+"",k,P,D,B;function $(){return t[14](t[21])}function F(){return t[15](t[21])}function H(){return t[16](t[21])}let N=t[21].notes&&qh(t);return{c(){e=p("div"),n=p("li"),s=p("span"),i=p("button"),i.textContent="\u2714",r=y(),o=p("button"),o.textContent="\u2716",a=y(),l=p("button"),l.textContent="\u2714\u2716",c=y(),h=p("spam"),d=S(f),m=S(` -*-\r
                                 `),v=S(_),E=S(` -*-\r
                                 `),k=S(T),P=S(` -*-\r
                                 `),N&&N.c(),g(n,"class","schedule svelte-1e3ab80"),fi(n,"complete",t[21].isComplete)},m(U,O){w(U,e,O),u(e,n),u(n,s),u(s,i),u(s,r),u(s,o),u(s,a),u(s,l),u(n,c),u(n,h),u(h,d),u(h,m),u(h,v),u(h,E),u(h,k),u(h,P),N&&N.m(h,null),D||(B=[j(i,"click",$),j(o,"click",F),j(l,"click",H),j(e,"dblclick",t[17])],D=!0)},p(U,O){t=U,O&2&&f!==(f=t[21].timeTask+"")&&re(d,f),O&2&&_!==(_=_n(t[21].endTask)+"")&&re(v,_),O&2&&T!==(T=t[21].task+"")&&re(k,T),t[21].notes?N?N.p(t,O):(N=qh(t),N.c(),N.m(h,null)):N&&(N.d(1),N=null),O&2&&fi(n,"complete",t[21].isComplete)},d(U){U&&b(e),N&&N.d(),D=!1,tt(B)}}}function qh(t){let e=t[21].notes+"",n;return{c(){n=S(e)},m(s,i){w(s,n,i)},p(s,i){i&2&&e!==(e=s[21].notes+"")&&re(n,e)},d(s){s&&b(n)}}}function Hh(t){let e,n=t[21].timeTask&&jh(t);return{c(){n&&n.c(),e=vn()},m(s,i){n&&n.m(s,i),w(s,e,i)},p(s,i){s[21].timeTask?n?n.p(s,i):(n=jh(s),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(s){n&&n.d(s),s&&b(e)}}}function NT(t){let e,n,s,i,r,o,a,l,c,h,f,d,m,_,v,E,T,k,P,D,B,$,F,H,N,U,O,K,Y,ie,Q,W;function te(L,R){return L[0]?RT:PT}let x=te(t),A=x(t),z=!t[0]&&Lh(t);return{c(){e=p("div"),n=p("h1"),n.textContent="Agenda",s=y(),i=p("img"),o=y(),a=p("div"),l=p("div"),h=y(),f=p("div"),d=p("div"),m=p("input"),_=y(),v=p("div"),E=p("input"),T=y(),k=p("input"),P=y(),D=p("div"),B=p("textarea"),$=y(),F=p("div"),H=p("button"),A.c(),N=y(),U=p("button"),U.textContent="Cancelar",K=y(),Y=p("div"),z&&z.c(),Tt(i.src,r=Ig)||g(i,"src",r),g(i,"alt","schedule"),g(i,"class","imgTitle svelte-1e3ab80"),g(l,"class","background"),g(m,"type","text"),g(m,"class","inputTask"),g(m,"cols","56"),g(m,"rows","1"),g(m,"placeholder","Agrega una Tarea o Cita"),g(E,"type","time"),g(E,"class","inputDate"),g(k,"type","date"),g(k,"class","inputDate"),g(v,"class","contDate"),g(B,"name","notes"),g(B,"id",""),g(B,"cols","56"),g(B,"rows","5"),g(B,"placeholder","descripci\xF3n"),g(f,"class","pop-up"),g(a,"class","container"),g(Y,"class","container"),g(e,"class","container")},m(L,R){w(L,e,R),u(e,n),u(e,s),u(e,i),u(e,o),u(e,a),u(a,l),u(a,h),u(a,f),u(f,d),u(d,m),pe(m,t[2].task),u(f,_),u(f,v),u(v,E),pe(E,t[2].timeTask),u(v,T),u(v,k),pe(k,t[2].endTask),u(f,P),u(f,D),u(D,B),pe(B,t[2].notes),u(f,$),u(f,F),u(F,H),A.m(H,null),u(F,N),u(F,U),u(e,K),u(e,Y),z&&z.m(Y,null),ie=!0,Q||(W=[j(l,"keydown",t[6]),j(m,"input",t[7]),j(E,"input",t[8]),j(k,"input",t[9]),j(B,"input",t[10]),j(H,"click",t[3]),j(U,"click",t[6])],Q=!0)},p(L,[R]){R&4&&m.value!==L[2].task&&pe(m,L[2].task),R&4&&pe(E,L[2].timeTask),R&4&&pe(k,L[2].endTask),R&4&&pe(B,L[2].notes),x!==(x=te(L))&&(A.d(1),A=x(L),A&&(A.c(),A.m(H,null))),L[0]?z&&(z.d(1),z=null):z?z.p(L,R):(z=Lh(L),z.c(),z.m(Y,null))},i(L){ie||(et(()=>{c||(c=Tn(l,Oo,{},!0)),c.run(1)}),et(()=>{O||(O=Tn(f,$o,{},!0)),O.run(1)}),ie=!0)},o(L){c||(c=Tn(l,Oo,{},!1)),c.run(0),O||(O=Tn(f,$o,{},!1)),O.run(0),ie=!1},d(L){L&&b(e),L&&c&&c.end(),A.d(),L&&O&&O.end(),z&&z.d(),Q=!1,tt(W)}}}let Kh="";function OT(t,e,n){let s,i;je(t,Rn,$=>n(2,i=$));const r=Qs();let o=!1;Bo.sort(($,F)=>$.endTask<F.endTask?1:$.endTask>F.endTask?-1:0);async function a(){if(console.log(o),o)await wa(is(Ft,"todos",i.id),i),n(0,o=!1),console.log(o);else{const $=Mn(Ft,"todos");await Ms($,i),console.log(o)}ot(Rn,i=[],i),r("/")}async function l($){confirm("Quieres borrarlo definitivmente?")==!0&&(console.log($),await ka(is(Ft,"todos",$)))}async function c($){ot(Rn,i=$,i),console.log(i),n(0,o=!0)}function h(){ot(Rn,i=[],i),r("/contactos")}function f(){i.task=this.value,Rn.set(i)}function d(){i.timeTask=this.value,Rn.set(i)}function m(){i.endTask=this.value,Rn.set(i)}function _(){i.notes=this.value,Rn.set(i)}const v=$=>($.id,void 0),E=$=>l($.id),T=$=>c($),k=$=>($.id,void 0),P=$=>l($.id),D=$=>c($),B=()=>c;return n(1,s=Bo),[o,s,i,a,l,c,h,f,d,m,_,v,E,T,k,P,D,B]}class r_ extends xe{constructor(e){super(),Qe(this,e,OT,NT,Ke,{})}}function $T(t){let e;return{c(){e=p("h1"),e.textContent="Estas en Sinergias"},m(n,s){w(n,e,s)},p:ue,i:ue,o:ue,d(n){n&&b(e)}}}class o_ extends xe{constructor(e){super(),Qe(this,e,null,$T,Ke,{})}}function LT(t){let e;return{c(){e=S("Inicia sesi\xF3n")},m(n,s){w(n,e,s)},d(n){n&&b(e)}}}function MT(t){let e,n,s,i,r,o,a,l,c,h,f,d,m,_,v,E,T,k,P,D,B,$,F,H,N,U,O,K,Y;return U=new kn({props:{to:"/login",$$slots:{default:[LT]},$$scope:{ctx:t}}}),{c(){e=p("div"),n=p("br"),s=p("br"),i=p("br"),r=y(),o=p("div"),a=p("h1"),a.textContent="Registra tu cuenta",l=y(),c=p("div"),h=p("input"),f=y(),d=p("div"),m=p("input"),_=y(),v=p("br"),E=y(),T=p("div"),k=p("button"),k.textContent="Registrarse",P=y(),D=p("p"),D.textContent="O tambi\xE9n",B=y(),$=p("br"),F=y(),H=p("p"),N=S("\xBFYa tienes cuenta? "),le(U.$$.fragment),g(a,"class","text-center text-login svelte-ftg4em"),g(h,"name","email"),g(h,"type","email"),g(h,"class","input-form svelte-ftg4em"),g(h,"placeholder","Correo"),h.required=!0,g(c,"class","center svelte-ftg4em"),g(m,"name","password"),g(m,"type","password"),g(m,"class","input-form svelte-ftg4em"),g(m,"placeholder","Contrase\xF1a"),g(d,"class","center svelte-ftg4em"),g(k,"class","button-signup fondo-color-signup svelte-ftg4em"),g(T,"class","center svelte-ftg4em"),g(D,"class","text-center svelte-ftg4em"),g(H,"class","text-center svelte-ftg4em"),g(o,"class","form-signin svelte-ftg4em")},m(ie,Q){w(ie,e,Q),u(e,n),u(e,s),u(e,i),u(e,r),u(e,o),u(o,a),u(o,l),u(o,c),u(c,h),u(o,f),u(o,d),u(d,m),u(o,_),u(o,v),u(o,E),u(o,T),u(T,k),u(o,P),u(o,D),u(o,B),u(o,$),u(o,F),u(o,H),u(H,N),oe(U,H,null),O=!0,K||(Y=[j(h,"input",t[2]),j(m,"input",t[3]),j(k,"click",t[1])],K=!0)},p(ie,[Q]){const W={};Q&64&&(W.$$scope={dirty:Q,ctx:ie}),U.$set(W)},i(ie){O||(V(U.$$.fragment,ie),O=!0)},o(ie){G(U.$$.fragment,ie),O=!1},d(ie){ie&&b(e),ae(U),K=!1,tt(Y)}}}function UT(t){const e=Qs();let n={email:"",password:""};const s=a=>{n={...n,[a.target.name]:a.target.value}};return[s,async()=>{try{await sE(i_,n.email,n.password),e("/")}catch(a){console.log(a)}},a=>s(a),a=>s(a)]}class eu extends xe{constructor(e){super(),Qe(this,e,UT,MT,Ke,{})}}function zh(t,e,n){const s=t.slice();return s[1]=e[n],s}function Gh(t,e,n){const s=t.slice();return s[1]=e[n],s}function FT(t){let e,n,s=_n(t[1].endTask)+"",i,r,o=t[1].task+"",a,l,c=t[1].notes&&VT(t);return{c(){e=p("ul"),n=p("li"),i=S(s),r=S(` - -\r
                    `),a=S(o),l=S(` - -\r
                    `),c&&c.c(),fi(n,"complete",t[1].isComplete)},m(h,f){w(h,e,f),u(e,n),u(n,i),u(n,r),u(n,a),u(n,l),c&&c.m(n,null)},p(h,f){h[1].notes&&c.p(h,f)},d(h){h&&b(e),c&&c.d()}}}function VT(t){let e=t[1].notes+"",n;return{c(){n=S(e)},m(s,i){w(s,n,i)},p:ue,d(s){s&&b(n)}}}function Wh(t){let e,n=!t[1].timeTask&&FT(t);return{c(){n&&n.c(),e=vn()},m(s,i){n&&n.m(s,i),w(s,e,i)},p(s,i){s[1].timeTask||n.p(s,i)},d(s){n&&n.d(s),s&&b(e)}}}function BT(t){let e,n,s,i=DT(t[1].endTask)+"",r,o,a=AT(t[1].endTask)+"",l,c,h=_n(t[1].endTask)+"",f,d,m=t[1].task+"",_,v,E=t[1].notes&&jT(t);return{c(){e=p("ul"),n=p("li"),s=p("spam"),r=S(i),o=y(),l=S(a),c=S(` - -\r
                      `),f=S(h),d=y(),_=S(m),v=S(` - -\r
                      `),E&&E.c(),g(s,"type","number"),fi(n,"complete",t[1].isComplete)},m(T,k){w(T,e,k),u(e,n),u(n,s),u(s,r),u(s,o),u(s,l),u(s,c),u(s,f),u(s,d),u(s,_),u(s,v),E&&E.m(s,null)},p(T,k){T[1].notes&&E.p(T,k)},d(T){T&&b(e),E&&E.d()}}}function jT(t){let e=t[1].notes+"",n;return{c(){n=S(e)},m(s,i){w(s,n,i)},p:ue,d(s){s&&b(n)}}}function Qh(t){let e,n=t[1].timeTask&&BT(t);return{c(){n&&n.c(),e=y()},m(s,i){n&&n.m(s,i),w(s,e,i)},p(s,i){s[1].timeTask&&n.p(s,i)},d(s){n&&n.d(s),s&&b(e)}}}function qT(t){let e,n,s,i,r,o,a,l,c,h,f=t[0],d=[];for(let v=0;v<f.length;v+=1)d[v]=Wh(Gh(t,f,v));let m=t[0],_=[];for(let v=0;v<m.length;v+=1)_[v]=Qh(zh(t,m,v));return{c(){e=p("div"),n=p("div"),s=p("div"),i=p("h1"),i.textContent="Agenda",r=y(),o=p("h3"),o.textContent="Tareas",a=y();for(let v=0;v<d.length;v+=1)d[v].c();l=y(),c=p("h3"),c.textContent="Citas",h=y();for(let v=0;v<_.length;v+=1)_[v].c();g(i,"class","title svelte-13rvwi6"),g(o,"class","subtitle svelte-13rvwi6"),g(c,"class","subtitle svelte-13rvwi6"),g(s,"class","schedule"),g(n,"class","container"),g(e,"class","show-home")},m(v,E){w(v,e,E),u(e,n),u(n,s),u(s,i),u(s,r),u(s,o),u(s,a);for(let T=0;T<d.length;T+=1)d[T].m(s,null);u(s,l),u(s,c),u(s,h);for(let T=0;T<_.length;T+=1)_[T].m(s,null)},p(v,[E]){if(E&1){f=v[0];let T;for(T=0;T<f.length;T+=1){const k=Gh(v,f,T);d[T]?d[T].p(k,E):(d[T]=Wh(k),d[T].c(),d[T].m(s,l))}for(;T<d.length;T+=1)d[T].d(1);d.length=f.length}if(E&1){m=v[0];let T;for(T=0;T<m.length;T+=1){const k=zh(v,m,T);_[T]?_[T].p(k,E):(_[T]=Qh(k),_[T].c(),_[T].m(s,null))}for(;T<_.length;T+=1)_[T].d(1);_.length=m.length}},i:ue,o:ue,d(v){v&&b(e),He(d,v),He(_,v)}}}function HT(t){return[Bo]}class KT extends xe{constructor(e){super(),Qe(this,e,HT,qT,Ke,{})}}function xh(t,e,n){const s=t.slice();return s[0]=e[n],s[2]=n,s}function zT(t){let e,n=_n(t[0].date)+"",s,i,r=t[0].comment+"",o;return{c(){e=p("div"),s=S(n),i=y(),o=S(r),g(e,"class","date-binnacle")},m(a,l){w(a,e,l),u(e,s),u(e,i),u(e,o)},p:ue,d(a){a&&b(e)}}}function Yh(t){let e,n,s=t[2]<30&&zT(t);return{c(){e=p("div"),s&&s.c(),n=y(),g(e,"class","int-binnacle")},m(i,r){w(i,e,r),s&&s.m(e,null),u(e,n)},p(i,r){i[2]<30&&s.p(i,r)},d(i){i&&b(e),s&&s.d()}}}function GT(t){let e,n,s,i,r,o,a,l=Vo,c=[];for(let h=0;h<l.length;h+=1)c[h]=Yh(xh(t,l,h));return{c(){e=S(`a\r
`),n=p("main"),s=p("div"),i=p("div"),r=p("div"),o=p("h1"),o.textContent="Bit\xE1cora",a=y();for(let h=0;h<c.length;h+=1)c[h].c();g(o,"class","title svelte-7lgm1k"),g(r,"class","binnacleHome"),g(i,"class","schedule"),g(s,"class","container")},m(h,f){w(h,e,f),w(h,n,f),u(n,s),u(s,i),u(i,r),u(r,o),u(r,a);for(let d=0;d<c.length;d+=1)c[d].m(r,null)},p(h,[f]){if(f&0){l=Vo;let d;for(d=0;d<l.length;d+=1){const m=xh(h,l,d);c[d]?c[d].p(m,f):(c[d]=Yh(m),c[d].c(),c[d].m(r,null))}for(;d<c.length;d+=1)c[d].d(1);c.length=l.length}},i:ue,o:ue,d(h){h&&b(e),h&&b(n),He(c,h)}}}function WT(t){return function(){Vo.sort((e,n)=>e.date<n.date?1:e.date>n.date?-1:0)}(),[]}class QT extends xe{constructor(e){super(),Qe(this,e,WT,GT,Ke,{})}}const a_="/to-deploy-mh/assets/add-user.1bd66bde.png",l_="/to-deploy-mh/assets/house.99302696.png",xT="/to-deploy-mh/assets/team.31fda88c.png",Xh=en(!1);function YT(t){let e,n,s,i,r,o;return{c(){e=p("div"),n=p("div"),s=p("img"),r=y(),o=p("h1"),o.textContent="Contactos",Tt(s.src,i=a_)||g(s,"src",i),g(s,"alt","Buzon"),g(s,"class","profile-img svelte-mxk4x8"),g(o,"class","name svelte-mxk4x8"),g(n,"class","optionCard svelte-mxk4x8"),g(e,"class","container")},m(a,l){w(a,e,l),u(e,n),u(n,s),u(n,r),u(n,o)},p:ue,d(a){a&&b(e)}}}function XT(t){let e,n,s,i,r,o;return{c(){e=p("div"),n=p("div"),s=p("img"),r=y(),o=p("h1"),o.textContent="Propiedades",Tt(s.src,i=l_)||g(s,"src",i),g(s,"alt","propiedad"),g(s,"class","profile-img svelte-mxk4x8"),g(o,"class","name svelte-mxk4x8"),g(n,"class","optionCard svelte-mxk4x8"),g(e,"class","container")},m(a,l){w(a,e,l),u(e,n),u(n,s),u(n,r),u(n,o)},p:ue,d(a){a&&b(e)}}}function JT(t){let e,n,s,i,r,o;return{c(){e=p("div"),n=p("div"),s=p("img"),r=y(),o=p("h1"),o.textContent="Agenda",Tt(s.src,i=Ig)||g(s,"src",i),g(s,"alt","agenda"),g(s,"class","profile-img svelte-mxk4x8"),g(o,"class","name svelte-mxk4x8"),g(n,"class","optionCard svelte-mxk4x8"),g(e,"class","container")},m(a,l){w(a,e,l),u(e,n),u(n,s),u(n,r),u(n,o)},p:ue,d(a){a&&b(e)}}}function ZT(t){let e,n,s,i,r,o;return{c(){e=p("div"),n=p("div"),s=p("img"),r=y(),o=p("h1"),o.textContent="Sinergias",Tt(s.src,i=xT)||g(s,"src",i),g(s,"alt","sinergias"),g(s,"class","profile-img svelte-mxk4x8"),g(o,"class","name svelte-mxk4x8"),g(n,"class","optionCard svelte-mxk4x8"),g(e,"class","container")},m(a,l){w(a,e,l),u(e,n),u(n,s),u(n,r),u(n,o)},p:ue,d(a){a&&b(e)}}}function eI(t){let e,n,s,i,r,o,a,l;return e=new kn({props:{to:"/contactos",title:"contactos",$$slots:{default:[YT]},$$scope:{ctx:t}}}),s=new kn({props:{to:"/propiedades",title:"propiedades",$$slots:{default:[XT]},$$scope:{ctx:t}}}),r=new kn({props:{to:"/agenda",title:"agenda",class:"s",$$slots:{default:[JT]},$$scope:{ctx:t}}}),a=new kn({props:{to:"/sinergias",title:"sinergias",$$slots:{default:[ZT]},$$scope:{ctx:t}}}),{c(){le(e.$$.fragment),n=y(),le(s.$$.fragment),i=y(),le(r.$$.fragment),o=y(),le(a.$$.fragment)},m(c,h){oe(e,c,h),w(c,n,h),oe(s,c,h),w(c,i,h),oe(r,c,h),w(c,o,h),oe(a,c,h),l=!0},p(c,h){const f={};h&1&&(f.$$scope={dirty:h,ctx:c}),e.$set(f);const d={};h&1&&(d.$$scope={dirty:h,ctx:c}),s.$set(d);const m={};h&1&&(m.$$scope={dirty:h,ctx:c}),r.$set(m);const _={};h&1&&(_.$$scope={dirty:h,ctx:c}),a.$set(_)},i(c){l||(V(e.$$.fragment,c),V(s.$$.fragment,c),V(r.$$.fragment,c),V(a.$$.fragment,c),l=!0)},o(c){G(e.$$.fragment,c),G(s.$$.fragment,c),G(r.$$.fragment,c),G(a.$$.fragment,c),l=!1},d(c){ae(e,c),c&&b(n),ae(s,c),c&&b(i),ae(r,c),c&&b(o),ae(a,c)}}}function tI(t){let e,n;return e=new r_({}),{c(){le(e.$$.fragment)},m(s,i){oe(e,s,i),n=!0},i(s){n||(V(e.$$.fragment,s),n=!0)},o(s){G(e.$$.fragment,s),n=!1},d(s){ae(e,s)}}}function nI(t){let e,n;return e=new o_({}),{c(){le(e.$$.fragment)},m(s,i){oe(e,s,i),n=!0},i(s){n||(V(e.$$.fragment,s),n=!0)},o(s){G(e.$$.fragment,s),n=!1},d(s){ae(e,s)}}}function sI(t){let e,n;return e=new eu({}),{c(){le(e.$$.fragment)},m(s,i){oe(e,s,i),n=!0},i(s){n||(V(e.$$.fragment,s),n=!0)},o(s){G(e.$$.fragment,s),n=!1},d(s){ae(e,s)}}}function iI(t){let e,n;return e=new eu({}),{c(){le(e.$$.fragment)},m(s,i){oe(e,s,i),n=!0},i(s){n||(V(e.$$.fragment,s),n=!0)},o(s){G(e.$$.fragment,s),n=!1},d(s){ae(e,s)}}}function rI(t){let e,n,s,i,r,o,a,l,c,h,f,d,m,_,v,E,T;return s=new Wl({props:{$$slots:{default:[eI]},$$scope:{ctx:t}}}),r=new wn({props:{path:"/agenda",$$slots:{default:[tI]},$$scope:{ctx:t}}}),a=new wn({props:{path:"/sinergias",$$slots:{default:[nI]},$$scope:{ctx:t}}}),c=new wn({props:{path:"/login",$$slots:{default:[sI]},$$scope:{ctx:t}}}),f=new wn({props:{path:"/registro",$$slots:{default:[iI]},$$scope:{ctx:t}}}),_=new KT({props:{"(orderTodos)":!0}}),E=new QT({}),{c(){e=p("body"),n=p("div"),le(s.$$.fragment),i=y(),le(r.$$.fragment),o=y(),le(a.$$.fragment),l=y(),le(c.$$.fragment),h=y(),le(f.$$.fragment),d=y(),m=p("div"),le(_.$$.fragment),v=y(),le(E.$$.fragment),g(n,"class","wrapper-grid svelte-mxk4x8"),g(m,"class",""),g(e,"class","svelte-mxk4x8")},m(k,P){w(k,e,P),u(e,n),oe(s,n,null),u(n,i),oe(r,n,null),u(n,o),oe(a,n,null),u(n,l),oe(c,n,null),u(n,h),oe(f,n,null),u(e,d),u(e,m),oe(_,m,null),u(m,v),oe(E,m,null),T=!0},p(k,[P]){const D={};P&1&&(D.$$scope={dirty:P,ctx:k}),s.$set(D);const B={};P&1&&(B.$$scope={dirty:P,ctx:k}),r.$set(B);const $={};P&1&&($.$$scope={dirty:P,ctx:k}),a.$set($);const F={};P&1&&(F.$$scope={dirty:P,ctx:k}),c.$set(F);const H={};P&1&&(H.$$scope={dirty:P,ctx:k}),f.$set(H)},i(k){T||(V(s.$$.fragment,k),V(r.$$.fragment,k),V(a.$$.fragment,k),V(c.$$.fragment,k),V(f.$$.fragment,k),V(_.$$.fragment,k),V(E.$$.fragment,k),T=!0)},o(k){G(s.$$.fragment,k),G(r.$$.fragment,k),G(a.$$.fragment,k),G(c.$$.fragment,k),G(f.$$.fragment,k),G(_.$$.fragment,k),G(E.$$.fragment,k),T=!1},d(k){k&&b(e),ae(s),ae(r),ae(a),ae(c),ae(f),ae(_),ae(E)}}}class oI extends xe{constructor(e){super(),Qe(this,e,null,rI,Ke,{})}}function aI(t){let e,n,s,i,r,o,a,l,c,h,f=_n(t[2])+"",d,m,_,v,E,T,k,P,D,B,$,F,H,N,U,O,K,Y,ie;return{c(){e=p("div"),n=p("div"),s=p("div"),i=p("h5"),r=S(t[0]),o=y(),a=S(t[1]),l=y(),c=p("h5"),h=S("Alta "),d=S(f),m=y(),_=p("div"),v=p("p"),E=S(t[3]),T=y(),k=p("p"),P=S("tel: "),D=S(t[4]),B=S(" email: "),$=S(t[5]),F=y(),H=p("p"),N=S("Presupuesto "),U=S(t[6]),O=y(),K=p("p"),Y=S("Rango "),ie=S(t[7]),g(s,"class","namePerson svelte-1thiswe"),g(_,"class","nameDate svelte-1thiswe"),g(n,"class","contactCard"),g(e,"class","container contact svelte-1thiswe")},m(Q,W){w(Q,e,W),u(e,n),u(n,s),u(s,i),u(i,r),u(i,o),u(i,a),u(s,l),u(s,c),u(c,h),u(c,d),u(n,m),u(n,_),u(_,v),u(v,E),u(_,T),u(_,k),u(k,P),u(k,D),u(k,B),u(k,$),u(_,F),u(_,H),u(H,N),u(H,U),u(_,O),u(_,K),u(K,Y),u(K,ie)},p(Q,[W]){W&1&&re(r,Q[0]),W&2&&re(a,Q[1]),W&4&&f!==(f=_n(Q[2])+"")&&re(d,f),W&8&&re(E,Q[3]),W&16&&re(D,Q[4]),W&32&&re($,Q[5]),W&64&&re(U,Q[6]),W&128&&re(ie,Q[7])},i:ue,o:ue,d(Q){Q&&b(e)}}}function lI(t,e,n){let{name:s,lastname:i,createdAt:r,contactStage:o,telephon:a,email:l,budget:c,rangeProp:h}=e;return t.$$set=f=>{"name"in f&&n(0,s=f.name),"lastname"in f&&n(1,i=f.lastname),"createdAt"in f&&n(2,r=f.createdAt),"contactStage"in f&&n(3,o=f.contactStage),"telephon"in f&&n(4,a=f.telephon),"email"in f&&n(5,l=f.email),"budget"in f&&n(6,c=f.budget),"rangeProp"in f&&n(7,h=f.rangeProp)},[s,i,r,o,a,l,c,h]}class cI extends xe{constructor(e){super(),Qe(this,e,lI,aI,Ke,{name:0,lastname:1,createdAt:2,contactStage:3,telephon:4,email:5,budget:6,rangeProp:7})}}function uI(t){let e,n,s,i;return{c(){e=p("div"),n=p("input"),g(n,"class","searchInput svelte-6bonih"),g(n,"type","text"),g(n,"id","search-field"),g(n,"placeholder","Enter Search Term"),g(n,"autocomplete","off"),g(e,"id","search-input-cont")},m(r,o){w(r,e,o),u(e,n),pe(n,t[0]),s||(i=[j(n,"input",t[2]),j(n,"input",t[1])],s=!0)},p(r,[o]){o&1&&n.value!==r[0]&&pe(n,r[0])},i:ue,o:ue,d(r){r&&b(e),s=!1,tt(i)}}}function hI(t,e,n){let{searchTerm:s}=e;function i(o){D_.call(this,t,o)}function r(){s=this.value,n(0,s)}return t.$$set=o=>{"searchTerm"in o&&n(0,s=o.searchTerm)},[s,i,r]}class tu extends xe{constructor(e){super(),Qe(this,e,hI,uI,Ke,{searchTerm:0})}}async function c_(t,e){if(console.log("estas en la funcion"),t==="todoAdding"){const n=Mn(Ft,"todos");await Ms(n,e)}else t==="todoUpdate"?await wa(is(Ft,"todos",e.id),e):t==="todoDelete"&&await ka(is(Ft,"todos",e.id));e=""}function fI(t){let e,n,s,i,r,o,a,l,c,h,f,d,m,_,v,E,T,k,P,D,B,$,F;return{c(){e=p("div"),s=y(),i=p("div"),r=p("div"),o=p("input"),a=y(),l=p("div"),c=p("input"),h=y(),f=p("input"),d=y(),m=p("div"),_=p("textarea"),v=y(),E=p("div"),T=p("button"),T.textContent="Guardar",k=y(),P=p("button"),P.textContent="Cancelar",g(e,"class","background svelte-1grddfb"),g(o,"type","text"),g(o,"class","inputTask svelte-1grddfb"),g(o,"placeholder","Agrega una Tarea o Cita"),g(c,"type","time"),g(c,"class","inputDate svelte-1grddfb"),g(f,"type","date"),g(f,"class","inputDate svelte-1grddfb"),g(l,"class","contDate"),g(_,"name","notes"),g(_,"cols","56"),g(_,"rows","5"),g(_,"placeholder","descripci\xF3n"),g(T,"class","btnShedule svelte-1grddfb"),g(P,"class","btnShedule svelte-1grddfb"),g(i,"class","pop-up svelte-1grddfb")},m(H,N){w(H,e,N),w(H,s,N),w(H,i,N),u(i,r),u(r,o),pe(o,t[0]),u(i,a),u(i,l),u(l,c),pe(c,t[1].timeTask),u(l,h),u(l,f),pe(f,t[1].endTask),u(i,d),u(i,m),u(m,_),pe(_,t[1].notes),u(i,v),u(i,E),u(E,T),u(E,k),u(E,P),B=!0,$||(F=[j(window,"keydown",t[4]),j(e,"click",t[2]),j(o,"input",t[5]),j(c,"input",t[6]),j(f,"input",t[7]),j(_,"input",t[8]),j(T,"click",t[3]),j(P,"click",t[2])],$=!0)},p(H,[N]){N&1&&o.value!==H[0]&&pe(o,H[0]),N&2&&pe(c,H[1].timeTask),N&2&&pe(f,H[1].endTask),N&2&&pe(_,H[1].notes)},i(H){B||(et(()=>{n||(n=Tn(e,Oo,{},!0)),n.run(1)}),et(()=>{D||(D=Tn(i,$o,{},!0)),D.run(1)}),B=!0)},o(H){n||(n=Tn(e,Oo,{},!1)),n.run(0),D||(D=Tn(i,$o,{},!1)),D.run(0),B=!1},d(H){H&&b(e),H&&n&&n.end(),H&&b(s),H&&b(i),H&&D&&D.end(),$=!1,tt(F)}}}function dI(t,e,n){let s,i,r;je(t,Rn,P=>n(10,s=P)),je(t,gt,P=>n(11,i=P)),je(t,at,P=>n(12,r=P));const o=Ld();let a=`${r.name} ${r.lastname}`,l=[],c=[],h=new Date,f=h.getTime();console.log(f),l={task:"",isComplete:"",createdAt:"",timeTask:"",notes:"",user:""};function d(){o("closeIt"),ot(gt,i="contSelect",i),ot(Rn,s="",s)}const m=async()=>{ot(gt,i="todoAdding",i),c=a,n(1,l={...l,endTask:f}),ot(Rn,s={...l,task:c},s),c_(i,s),console.log(s),d()},_=P=>{P.key==="Enter"&&m()};function v(){a=this.value,n(0,a)}function E(){l.timeTask=this.value,n(1,l)}function T(){l.endTask=this.value,n(1,l)}function k(){l.notes=this.value,n(1,l)}return[a,l,d,m,_,v,E,T,k]}class pI extends xe{constructor(e){super(),Qe(this,e,dI,fI,Ke,{})}}function mI(t){let e,n,s,i,r,o,a,l,c,h,f,d,m,_,v,E,T,k,P,D,B,$,F,H,N,U,O,K,Y,ie,Q,W,te,x,A,z,L,R,ce,fe;return{c(){e=p("main"),n=p("section"),s=p("figure"),i=p("img"),o=y(),a=p("div"),l=S(t[1]),c=y(),h=p("figcaption"),f=S(t[2]),d=y(),m=p("section"),_=p("section"),v=p("div"),E=p("div"),T=S(t[3]),k=S(" Rec\xE1maras"),P=y(),D=p("div"),B=S(t[4]),$=S(" Ba\xF1os"),F=y(),H=p("div"),N=S(t[5]),U=S(" Estacionamientos"),O=y(),K=p("div"),Y=S(t[6]),ie=S(" m2 de Contruccion"),Q=y(),W=p("div"),te=S(t[7]),x=S(" m2 de Terreno"),A=y(),z=p("br"),L=y(),R=p("div"),ce=S("Precio $: "),fe=S(t[8]),Tt(i.src,r=t[0])||g(i,"src",r),g(i,"alt",t[1]),g(i,"class","bkcover svelte-1w1p4eb"),g(a,"class","language svelte-1w1p4eb"),g(h,"class","svelte-1w1p4eb"),g(s,"class","bkcont svelte-1w1p4eb"),g(n,"class","book-top-info svelte-1w1p4eb"),g(v,"class","buy-options-cont svelte-1w1p4eb"),g(_,"class","from-pariyatti available-at svelte-1w1p4eb"),g(m,"class","book-bottom-links svelte-1w1p4eb")},m(Se,Ce){w(Se,e,Ce),u(e,n),u(n,s),u(s,i),u(s,o),u(s,a),u(a,l),u(s,c),u(s,h),u(h,f),u(e,d),u(e,m),u(m,_),u(_,v),u(v,E),u(E,T),u(E,k),u(v,P),u(v,D),u(D,B),u(D,$),u(v,F),u(v,H),u(H,N),u(H,U),u(v,O),u(v,K),u(K,Y),u(K,ie),u(v,Q),u(v,W),u(W,te),u(W,x),u(v,A),u(v,z),u(v,L),u(v,R),u(R,ce),u(R,fe)},p(Se,[Ce]){Ce&1&&!Tt(i.src,r=Se[0])&&g(i,"src",r),Ce&2&&g(i,"alt",Se[1]),Ce&2&&re(l,Se[1]),Ce&4&&re(f,Se[2]),Ce&8&&re(T,Se[3]),Ce&16&&re(B,Se[4]),Ce&32&&re(N,Se[5]),Ce&64&&re(Y,Se[6]),Ce&128&&re(te,Se[7]),Ce&256&&re(fe,Se[8])},i:ue,o:ue,d(Se){Se&&b(e)}}}function gI(t,e,n){let{urlImage:s,claveEB:i,nameProperty:r,beds:o,bathroom:a,park:l,areaBuilding:c,areaTotal:h,price:f}=e;return t.$$set=d=>{"urlImage"in d&&n(0,s=d.urlImage),"claveEB"in d&&n(1,i=d.claveEB),"nameProperty"in d&&n(2,r=d.nameProperty),"beds"in d&&n(3,o=d.beds),"bathroom"in d&&n(4,a=d.bathroom),"park"in d&&n(5,l=d.park),"areaBuilding"in d&&n(6,c=d.areaBuilding),"areaTotal"in d&&n(7,h=d.areaTotal),"price"in d&&n(8,f=d.price)},[s,i,r,o,a,l,c,h,f]}class u_ extends xe{constructor(e){super(),Qe(this,e,gI,mI,Ke,{urlImage:0,claveEB:1,nameProperty:2,beds:3,bathroom:4,park:5,areaBuilding:6,areaTotal:7,price:8})}}let Ds;function h_(t){return t<=1e6?Ds="PRM":t<=25e5?Ds="SGN":t<=5e6?Ds="TRC":t<=8e6?Ds="CRT":t<=12e6?Ds="QNT":t>12e6&&(Ds="SXT"),Ds}let Xa,Ja;function _I(t){let e=Bn;return e=e.filter(n=>n.selectTP===t.selecTP),console.log("filtraste por tipo de propiedad",e),t.numBeds>0&&(e=e.filter(n=>n.beds>=t.numBeds)),t.numBaths>0&&(e=e.filter(n=>n.bathroom>=t.numBaths)),t.numParks>0&&(e=e.filter(n=>n.park>=t.numParks)),console.log("Por caracteristicas",e),t.budget?(console.log("filtraste por budget"),Xa=t.budget*.7,Ja=t.budget*1.1,console.log(Xa,Ja),e=e.filter(n=>n.price>=Xa&&n.price<=Ja)):(console.log("filtraste por rango"),e=e.filter(n=>h_(n.price)===t.rangeProp)),console.log("filtraste presupuesto",e),t.locaProperty.length>0&&(e=e.filter(n=>t.locaProperty.some(s=>n.locaProperty.includes(s)))),console.log("Filtraste por Ubicacion",e),t.tagsProperty.length>0&&(e=e.filter(n=>t.tagsProperty.every(s=>n.tagsProperty.includes(s)))),console.log("Filtraste por localizacion",e),e.length===0||""+e.length,$l.set(e)}const jo=["Casa","Terreno","Departamento","Casa o Departamento","Local Comercial","Casa de Campo"],Jh=["Lona en Propiedad","Propiedades.com","NocNok","Mercado Libre","Vivanuncios","Lamudi","Inmuebles24","Referido","Otro"],Zh=["Comprador","Arrendador","Propietario","Agente Asociado","Agente Inmobiliario","Constructor","Inversionista","Otro"],ef=["Contado","Credito Hipotecario","INFONAVIT","COFINAVIT","FOVISSSTE","ALIADOS","Conyugal"],tf=["Venta","Renta"],nf=["Rango","PRM","SGN","TRC","CRT","QNT","SXT","SPT"],qo=[0,1,2,3,4,5],Pn=[0,1,2,3,4],sf=["Due\xF1o","Familiar","Inmobiliaria","Conocido"];function vI(t){let e,n,s,i,r,o,a,l,c,h,f,d,m,_,v,E,T,k,P,D,B,$,F,H,N,U,O,K,Y,ie,Q,W,te,x,A,z,L,R,ce,fe,Se,Ce,nt;return{c(){e=p("div"),n=p("div"),s=p("label"),i=S(`/Norte\\\r
			`),r=p("input"),o=y(),a=p("div"),l=p("label"),c=S(`/Noroeste\r
			`),h=p("input"),f=y(),d=p("label"),m=p("input"),_=S("NorEste\\"),v=y(),E=p("div"),T=p("label"),k=S(`/Oeste\r
			`),P=p("input"),D=y(),B=p("label"),$=S(`Centro Norte\r
			`),F=p("input"),H=y(),N=p("label"),U=p("input"),O=S("Este\\"),K=y(),Y=p("div"),ie=p("label"),Q=S(`Centro Sur\r
			`),W=p("input"),te=y(),x=p("div"),A=p("label"),z=S(`/SurOeste\r
			`),L=p("input"),R=y(),ce=p("label"),fe=p("input"),Se=S("SurEste\\"),r.__value="Norte",r.value=r.__value,g(r,"id","north"),g(r,"type","checkbox"),t[2][0].push(r),g(s,"for","north"),g(n,"class","filterLocationOne svelte-1lvjb5r"),h.__value="Noroeste",h.value=h.__value,g(h,"id","northwest"),g(h,"type","checkbox"),t[2][0].push(h),g(l,"for","northwest"),m.__value="Noreste",m.value=m.__value,g(m,"id","northeast"),g(m,"type","checkbox"),t[2][0].push(m),g(d,"for","northeast"),g(a,"class","filterLocationOne svelte-1lvjb5r"),P.__value="Oeste",P.value=P.__value,g(P,"id","west"),g(P,"type","checkbox"),t[2][0].push(P),g(T,"for","west"),F.__value="Centronorte",F.value=F.__value,g(F,"id","townNorth"),g(F,"type","checkbox"),t[2][0].push(F),g(B,"for","townNorth"),U.__value="Este",U.value=U.__value,g(U,"id","east"),g(U,"type","checkbox"),t[2][0].push(U),g(N,"for","east"),g(E,"class","filterLocationOne svelte-1lvjb5r"),W.__value="CentroSur",W.value=W.__value,g(W,"id","townsouth"),g(W,"type","checkbox"),t[2][0].push(W),g(ie,"for","townsouth"),g(Y,"class","filterLocationOne svelte-1lvjb5r"),L.__value="SurOeste",L.value=L.__value,g(L,"id","southwest"),g(L,"type","checkbox"),t[2][0].push(L),g(A,"for","southwest"),fe.__value="SurEste",fe.value=fe.__value,g(fe,"id","southeast"),g(fe,"type","checkbox"),t[2][0].push(fe),g(ce,"for","southeast"),g(x,"class","filterLocationOne svelte-1lvjb5r"),g(e,"class","containerUbication svelte-1lvjb5r")},m(be,Ve){w(be,e,Ve),u(e,n),u(n,s),u(s,i),u(s,r),r.checked=~t[0].indexOf(r.__value),u(e,o),u(e,a),u(a,l),u(l,c),u(l,h),h.checked=~t[0].indexOf(h.__value),u(a,f),u(a,d),u(d,m),m.checked=~t[0].indexOf(m.__value),u(d,_),u(e,v),u(e,E),u(E,T),u(T,k),u(T,P),P.checked=~t[0].indexOf(P.__value),u(E,D),u(E,B),u(B,$),u(B,F),F.checked=~t[0].indexOf(F.__value),u(E,H),u(E,N),u(N,U),U.checked=~t[0].indexOf(U.__value),u(N,O),u(e,K),u(e,Y),u(Y,ie),u(ie,Q),u(ie,W),W.checked=~t[0].indexOf(W.__value),u(e,te),u(e,x),u(x,A),u(A,z),u(A,L),L.checked=~t[0].indexOf(L.__value),u(x,R),u(x,ce),u(ce,fe),fe.checked=~t[0].indexOf(fe.__value),u(ce,Se),Ce||(nt=[j(r,"change",t[1]),j(h,"change",t[3]),j(m,"change",t[4]),j(P,"change",t[5]),j(F,"change",t[6]),j(U,"change",t[7]),j(W,"change",t[8]),j(L,"change",t[9]),j(fe,"change",t[10])],Ce=!0)},p(be,[Ve]){Ve&1&&(r.checked=~be[0].indexOf(r.__value)),Ve&1&&(h.checked=~be[0].indexOf(h.__value)),Ve&1&&(m.checked=~be[0].indexOf(m.__value)),Ve&1&&(P.checked=~be[0].indexOf(P.__value)),Ve&1&&(F.checked=~be[0].indexOf(F.__value)),Ve&1&&(U.checked=~be[0].indexOf(U.__value)),Ve&1&&(W.checked=~be[0].indexOf(W.__value)),Ve&1&&(L.checked=~be[0].indexOf(L.__value)),Ve&1&&(fe.checked=~be[0].indexOf(fe.__value))},i:ue,o:ue,d(be){be&&b(e),t[2][0].splice(t[2][0].indexOf(r),1),t[2][0].splice(t[2][0].indexOf(h),1),t[2][0].splice(t[2][0].indexOf(m),1),t[2][0].splice(t[2][0].indexOf(P),1),t[2][0].splice(t[2][0].indexOf(F),1),t[2][0].splice(t[2][0].indexOf(U),1),t[2][0].splice(t[2][0].indexOf(W),1),t[2][0].splice(t[2][0].indexOf(L),1),t[2][0].splice(t[2][0].indexOf(fe),1),Ce=!1,tt(nt)}}}function yI(t,e,n){let{ubication:s}=e;const i=[[]];function r(){s=Xt(i[0],this.__value,this.checked),n(0,s)}function o(){s=Xt(i[0],this.__value,this.checked),n(0,s)}function a(){s=Xt(i[0],this.__value,this.checked),n(0,s)}function l(){s=Xt(i[0],this.__value,this.checked),n(0,s)}function c(){s=Xt(i[0],this.__value,this.checked),n(0,s)}function h(){s=Xt(i[0],this.__value,this.checked),n(0,s)}function f(){s=Xt(i[0],this.__value,this.checked),n(0,s)}function d(){s=Xt(i[0],this.__value,this.checked),n(0,s)}function m(){s=Xt(i[0],this.__value,this.checked),n(0,s)}return t.$$set=_=>{"ubication"in _&&n(0,s=_.ubication)},[s,r,i,o,a,l,c,h,f,d,m]}class f_ extends xe{constructor(e){super(),Qe(this,e,yI,vI,Ke,{ubication:0})}}function bI(t){let e,n,s,i,r,o,a,l,c,h,f,d,m,_,v,E,T,k,P,D,B,$,F,H,N,U,O,K,Y,ie,Q,W,te;return{c(){e=p("section"),n=p("div"),s=p("label"),i=S(`Fracc. Privado\r
		   `),r=p("input"),o=y(),a=p("label"),l=S(`Frente a Parque\r
         `),c=p("input"),h=y(),f=p("label"),d=S(`Una Planta\r
         `),m=p("input"),_=y(),v=p("div"),E=p("label"),T=S(`Recamara en P.B.\r
		`),k=p("input"),P=y(),D=p("label"),B=S(`Patio Amplio\r
   `),$=p("input"),F=y(),H=p("label"),N=S(`Lista para Habitarse\r
   `),U=p("input"),O=y(),K=p("div"),Y=p("label"),ie=S(`Nueva\r
		`),Q=p("input"),g(r,"type","checkbox"),r.__value="Fracc. Privado",r.value=r.__value,t[2][0].push(r),g(c,"type","checkbox"),c.__value="Frente a Parque",c.value=c.__value,t[2][0].push(c),g(m,"type","checkbox"),m.__value="Una Planta",m.value=m.__value,t[2][0].push(m),g(n,"class","svelte-1b9bvt0"),g(k,"type","checkbox"),k.__value="Recamara en PB",k.value=k.__value,t[2][0].push(k),g($,"type","checkbox"),$.__value="Patio Amplio",$.value=$.__value,t[2][0].push($),g(U,"type","checkbox"),U.__value="Lista Habitarse",U.value=U.__value,t[2][0].push(U),g(v,"class","svelte-1b9bvt0"),g(Q,"type","checkbox"),Q.__value="Nueva",Q.value=Q.__value,t[2][0].push(Q),g(K,"class","svelte-1b9bvt0"),g(e,"class","svelte-1b9bvt0")},m(x,A){w(x,e,A),u(e,n),u(n,s),u(s,i),u(s,r),r.checked=~t[0].indexOf(r.__value),u(n,o),u(n,a),u(a,l),u(a,c),c.checked=~t[0].indexOf(c.__value),u(n,h),u(n,f),u(f,d),u(f,m),m.checked=~t[0].indexOf(m.__value),u(e,_),u(e,v),u(v,E),u(E,T),u(E,k),k.checked=~t[0].indexOf(k.__value),u(v,P),u(v,D),u(D,B),u(D,$),$.checked=~t[0].indexOf($.__value),u(v,F),u(v,H),u(H,N),u(H,U),U.checked=~t[0].indexOf(U.__value),u(e,O),u(e,K),u(K,Y),u(Y,ie),u(Y,Q),Q.checked=~t[0].indexOf(Q.__value),W||(te=[j(r,"change",t[1]),j(c,"change",t[3]),j(m,"change",t[4]),j(k,"change",t[5]),j($,"change",t[6]),j(U,"change",t[7]),j(Q,"change",t[8])],W=!0)},p(x,[A]){A&1&&(r.checked=~x[0].indexOf(r.__value)),A&1&&(c.checked=~x[0].indexOf(c.__value)),A&1&&(m.checked=~x[0].indexOf(m.__value)),A&1&&(k.checked=~x[0].indexOf(k.__value)),A&1&&($.checked=~x[0].indexOf($.__value)),A&1&&(U.checked=~x[0].indexOf(U.__value)),A&1&&(Q.checked=~x[0].indexOf(Q.__value))},i:ue,o:ue,d(x){x&&b(e),t[2][0].splice(t[2][0].indexOf(r),1),t[2][0].splice(t[2][0].indexOf(c),1),t[2][0].splice(t[2][0].indexOf(m),1),t[2][0].splice(t[2][0].indexOf(k),1),t[2][0].splice(t[2][0].indexOf($),1),t[2][0].splice(t[2][0].indexOf(U),1),t[2][0].splice(t[2][0].indexOf(Q),1),W=!1,tt(te)}}}function wI(t,e,n){let{tag:s}=e;const i=[[]];function r(){s=Xt(i[0],this.__value,this.checked),n(0,s)}function o(){s=Xt(i[0],this.__value,this.checked),n(0,s)}function a(){s=Xt(i[0],this.__value,this.checked),n(0,s)}function l(){s=Xt(i[0],this.__value,this.checked),n(0,s)}function c(){s=Xt(i[0],this.__value,this.checked),n(0,s)}function h(){s=Xt(i[0],this.__value,this.checked),n(0,s)}function f(){s=Xt(i[0],this.__value,this.checked),n(0,s)}return t.$$set=d=>{"tag"in d&&n(0,s=d.tag)},[s,r,i,o,a,l,c,h,f]}class d_ extends xe{constructor(e){super(),Qe(this,e,wI,bI,Ke,{tag:0})}}function rf(t,e,n){const s=t.slice();return s[24]=e[n],s}function of(t,e,n){const s=t.slice();return s[27]=e[n],s}function af(t,e,n){const s=t.slice();return s[30]=e[n],s}function lf(t,e,n){const s=t.slice();return s[33]=e[n],s}function cf(t,e,n){const s=t.slice();return s[36]=e[n],s}function uf(t,e,n){const s=t.slice();return s[39]=e[n],s}function hf(t,e,n){const s=t.slice();return s[42]=e[n],s}function ff(t,e,n){const s=t.slice();return s[45]=e[n],s}function df(t,e,n){const s=t.slice();return s[48]=e[n],s}function pf(t,e,n){const s=t.slice();return s[51]=e[n],s}function kI(t){let e,n=_n(t[2].createdAt)+"",s,i,r;return{c(){e=p("h3"),s=S(n),g(e,"class","dataInput svelte-1myljlf")},m(o,a){w(o,e,a),u(e,s),i||(r=j(e,"dblclick",t[3]),i=!0)},p(o,a){a[0]&4&&n!==(n=_n(o[2].createdAt)+"")&&re(s,n)},d(o){o&&b(e),i=!1,r()}}}function EI(t){let e,n,s;return{c(){e=p("input"),g(e,"class","dataInput svelte-1myljlf"),g(e,"type","date")},m(i,r){w(i,e,r),pe(e,t[2].createdAt),n||(s=j(e,"input",t[4]),n=!0)},p(i,r){r[0]&5&&pe(e,i[2].createdAt)},d(i){i&&b(e),n=!1,s()}}}function mf(t){let e,n=t[51]+"",s,i;return{c(){e=p("option"),s=S(n),g(e,"class","dataInput svelte-1myljlf"),g(e,"type","checkbox"),e.__value=i=t[51],e.value=e.__value},m(r,o){w(r,e,o),u(e,s)},p(r,o){o[0]&1&&n!==(n=r[51]+"")&&re(s,n),o[0]&1&&i!==(i=r[51])&&(e.__value=i,e.value=e.__value)},d(r){r&&b(e)}}}function gf(t){let e,n=t[48]+"",s;return{c(){e=p("option"),s=S(n),g(e,"type","checkbox"),e.__value=t[48],e.value=e.__value},m(i,r){w(i,e,r),u(e,s)},p:ue,d(i){i&&b(e)}}}function _f(t){let e,n=t[45]+"",s;return{c(){e=p("option"),s=S(n),g(e,"type","checkbox"),e.__value=t[45],e.value=e.__value},m(i,r){w(i,e,r),u(e,s)},p:ue,d(i){i&&b(e)}}}function vf(t){let e,n=t[42]+"",s;return{c(){e=p("option"),s=S(n),g(e,"type","checkbox"),e.__value=t[42],e.value=e.__value},m(i,r){w(i,e,r),u(e,s)},p:ue,d(i){i&&b(e)}}}function yf(t){let e,n=t[39]+"",s;return{c(){e=p("option"),s=S(n),g(e,"type","checkbox"),e.__value=t[39],e.value=e.__value},m(i,r){w(i,e,r),u(e,s)},p:ue,d(i){i&&b(e)}}}function bf(t){let e,n=t[36]+"",s;return{c(){e=p("option"),s=S(n),g(e,"type","checkbox"),e.__value=t[36],e.value=e.__value},m(i,r){w(i,e,r),u(e,s)},p:ue,d(i){i&&b(e)}}}function wf(t){let e,n=t[33]+"",s,i;return{c(){e=p("option"),s=S(n),i=S(" Rec\xE1maras"),g(e,"type","checkbox"),e.__value=t[33],e.value=e.__value},m(r,o){w(r,e,o),u(e,s),u(e,i)},p:ue,d(r){r&&b(e)}}}function kf(t){let e,n=t[30]+"",s,i;return{c(){e=p("option"),s=S(n),i=S(" ba\xF1os"),g(e,"type","checkbox"),e.__value=t[30],e.value=e.__value},m(r,o){w(r,e,o),u(e,s),u(e,i)},p:ue,d(r){r&&b(e)}}}function Ef(t){let e,n=t[27]+"",s,i;return{c(){e=p("option"),s=S(n),i=S(" Medios ba\xF1os"),g(e,"type","checkbox"),e.__value=t[27],e.value=e.__value},m(r,o){w(r,e,o),u(e,s),u(e,i)},p:ue,d(r){r&&b(e)}}}function Tf(t){let e,n=t[24]+"",s,i;return{c(){e=p("option"),s=S(n),i=S(" Estacionamientos"),g(e,"type","checkbox"),e.__value=t[24],e.value=e.__value},m(r,o){w(r,e,o),u(e,s),u(e,i)},p:ue,d(r){r&&b(e)}}}function TI(t){let e,n,s,i,r,o,a,l,c,h,f,d,m,_,v,E,T,k,P,D,B,$,F,H,N,U,O,K,Y,ie,Q,W,te,x,A,z,L,R,ce,fe,Se,Ce,nt,be,Ve,Be,bt,q,ne,ft,dn,Je,_t,Ct,pn,st,wt,Nt,Ot,At;function $t(C,ee){return C[1]?EI:kI}let ct=$t(t),dt=ct(t),ze=t[0],Le=[];for(let C=0;C<ze.length;C+=1)Le[C]=mf(pf(t,ze,C));let St=Zh,Ne=[];for(let C=0;C<St.length;C+=1)Ne[C]=gf(df(t,St,C));let sn=Jh,Ye=[];for(let C=0;C<sn.length;C+=1)Ye[C]=_f(ff(t,sn,C));let it=ef,ut=[];for(let C=0;C<it.length;C+=1)ut[C]=vf(hf(t,it,C));let Qt=jo,Xe=[];for(let C=0;C<Qt.length;C+=1)Xe[C]=yf(uf(t,Qt,C));let xt=nf,ht=[];for(let C=0;C<xt.length;C+=1)ht[C]=bf(cf(t,xt,C));let kt=qo,we=[];for(let C=0;C<kt.length;C+=1)we[C]=wf(lf(t,kt,C));let Et=Pn,ke=[];for(let C=0;C<Et.length;C+=1)ke[C]=kf(af(t,Et,C));let Te=Pn,de=[];for(let C=0;C<Te.length;C+=1)de[C]=Ef(of(t,Te,C));let rn=Pn,Me=[];for(let C=0;C<rn.length;C+=1)Me[C]=Tf(rf(t,rn,C));function $n(C){t[21](C)}let Dt={};t[2].locaProperty!==void 0&&(Dt.ubication=t[2].locaProperty),_t=new f_({props:Dt}),Jn.push(()=>Vs(_t,"ubication",$n));function Dn(C){t[22](C)}let vt={};return t[2].tagsProperty!==void 0&&(vt.tag=t[2].tagsProperty),st=new d_({props:vt}),Jn.push(()=>Vs(st,"tag",Dn)),{c(){e=p("h1"),e.textContent="Alta Contactos",n=y(),s=p("div"),i=p("div"),dt.c(),r=y(),o=p("div"),a=p("input"),l=y(),c=p("input"),h=y(),f=p("div"),d=p("input"),m=y(),_=p("input"),v=y(),E=p("div"),T=p("select"),k=p("option"),k.textContent="Propiedad de Contacto";for(let C=0;C<Le.length;C+=1)Le[C].c();P=y(),D=p("input"),B=y(),$=p("div"),F=p("input"),H=y(),N=p("select"),U=p("option"),U.textContent="Tipo de Contacto";for(let C=0;C<Ne.length;C+=1)Ne[C].c();O=y(),K=p("select"),Y=p("option"),Y.textContent="Modo de Contacto";for(let C=0;C<Ye.length;C+=1)Ye[C].c();ie=y(),Q=p("select"),W=p("option"),W.textContent="Modo de Pago";for(let C=0;C<ut.length;C+=1)ut[C].c();te=y(),x=p("select"),A=p("option"),A.textContent="Tipo de Propiedad";for(let C=0;C<Xe.length;C+=1)Xe[C].c();z=y(),L=p("select"),R=p("option"),R.textContent="Rango de Busqueda";for(let C=0;C<ht.length;C+=1)ht[C].c();ce=y(),fe=p("select"),Se=p("option"),Se.textContent="# Rec\xE1maras";for(let C=0;C<we.length;C+=1)we[C].c();Ce=y(),nt=p("select"),be=p("option"),be.textContent="# Ba\xF1os";for(let C=0;C<ke.length;C+=1)ke[C].c();Ve=y(),Be=p("select"),bt=p("option"),bt.textContent="# Medios Ba\xF1os";for(let C=0;C<de.length;C+=1)de[C].c();q=y(),ne=p("select"),ft=p("option"),ft.textContent="# Estacionamientos";for(let C=0;C<Me.length;C+=1)Me[C].c();dn=y(),Je=p("div"),le(_t.$$.fragment),pn=y(),le(st.$$.fragment),g(e,"class","sectionTitle"),g(a,"class","dataInput svelte-1myljlf"),g(a,"type","text"),g(a,"placeholder","Nombre"),g(c,"class","dataInput svelte-1myljlf"),g(c,"type","text"),g(c,"placeholder","Apellido"),g(o,"class","contactInput"),g(d,"class","dataInput svelte-1myljlf"),g(d,"type","tel"),g(d,"placeholder","tel\xE9fono"),g(_,"class","dataInput svelte-1myljlf"),g(_,"type","email"),g(_,"placeholder","email"),g(f,"class","contactInput"),g(s,"class",""),k.disabled=!0,k.selected=!0,k.__value="",k.value=k.__value,g(T,"class","dataInput svelte-1myljlf"),g(T,"id","selTP"),g(T,"name","selTP"),t[2].propCont===void 0&&et(()=>t[9].call(T)),g(D,"class","dataInput svelte-1myljlf"),g(D,"type","number"),g(D,"placeholder","Presupuesto"),g(E,"class","col"),g(F,"class","textareaInput svelte-1myljlf"),g(F,"type","textarea"),g(F,"placeholder","Comentarios"),g($,"class","col"),U.disabled=!0,U.selected=!0,U.__value="",U.value=U.__value,g(N,"class","othersInput svelte-1myljlf"),t[2].typeContact===void 0&&et(()=>t[12].call(N)),Y.disabled=!0,Y.selected=!0,Y.__value="",Y.value=Y.__value,g(K,"class","othersInput svelte-1myljlf"),t[2].selecMC===void 0&&et(()=>t[13].call(K)),W.disabled=!0,W.selected=!0,W.__value="",W.value=W.__value,g(Q,"class","othersInput svelte-1myljlf"),t[2].modePay===void 0&&et(()=>t[14].call(Q)),A.disabled=!0,A.selected=!0,A.__value="",A.value=A.__value,g(x,"class","othersInput svelte-1myljlf"),g(x,"id","selTP"),g(x,"name","selTP"),t[2].selecTP===void 0&&et(()=>t[15].call(x)),R.disabled=!0,R.selected=!0,R.__value="",R.value=R.__value,g(L,"class","othersInput svelte-1myljlf"),g(L,"id","ranges"),g(L,"name","ranges"),t[2].rangeProp===void 0&&et(()=>t[16].call(L)),Se.disabled=!0,Se.selected=!0,Se.__value="",Se.value=Se.__value,g(fe,"class","othersInput svelte-1myljlf"),t[2].numBeds===void 0&&et(()=>t[17].call(fe)),be.disabled=!0,be.selected=!0,be.__value="",be.value=be.__value,g(nt,"class","othersInput svelte-1myljlf"),t[2].numBaths===void 0&&et(()=>t[18].call(nt)),bt.disabled=!0,bt.selected=!0,bt.__value="",bt.value=bt.__value,g(Be,"class","othersInput svelte-1myljlf"),t[2].halfBathroom===void 0&&et(()=>t[19].call(Be)),ft.disabled=!0,ft.selected=!0,ft.__value="",ft.value=ft.__value,g(ne,"class","othersInput svelte-1myljlf"),t[2].numParks===void 0&&et(()=>t[20].call(ne)),g(Je,"class","ubiTags svelte-1myljlf")},m(C,ee){w(C,e,ee),w(C,n,ee),w(C,s,ee),u(s,i),dt.m(i,null),u(s,r),u(s,o),u(o,a),pe(a,t[2].name),u(o,l),u(o,c),pe(c,t[2].lastname),u(s,h),u(s,f),u(f,d),pe(d,t[2].telephon),u(f,m),u(f,_),pe(_,t[2].email),w(C,v,ee),w(C,E,ee),u(E,T),u(T,k);for(let ge=0;ge<Le.length;ge+=1)Le[ge].m(T,null);Fe(T,t[2].propCont),u(E,P),u(E,D),pe(D,t[2].budget),w(C,B,ee),w(C,$,ee),u($,F),pe(F,t[2].comContact),w(C,H,ee),w(C,N,ee),u(N,U);for(let ge=0;ge<Ne.length;ge+=1)Ne[ge].m(N,null);Fe(N,t[2].typeContact),w(C,O,ee),w(C,K,ee),u(K,Y);for(let ge=0;ge<Ye.length;ge+=1)Ye[ge].m(K,null);Fe(K,t[2].selecMC),w(C,ie,ee),w(C,Q,ee),u(Q,W);for(let ge=0;ge<ut.length;ge+=1)ut[ge].m(Q,null);Fe(Q,t[2].modePay),w(C,te,ee),w(C,x,ee),u(x,A);for(let ge=0;ge<Xe.length;ge+=1)Xe[ge].m(x,null);Fe(x,t[2].selecTP),w(C,z,ee),w(C,L,ee),u(L,R);for(let ge=0;ge<ht.length;ge+=1)ht[ge].m(L,null);Fe(L,t[2].rangeProp),w(C,ce,ee),w(C,fe,ee),u(fe,Se);for(let ge=0;ge<we.length;ge+=1)we[ge].m(fe,null);Fe(fe,t[2].numBeds),w(C,Ce,ee),w(C,nt,ee),u(nt,be);for(let ge=0;ge<ke.length;ge+=1)ke[ge].m(nt,null);Fe(nt,t[2].numBaths),w(C,Ve,ee),w(C,Be,ee),u(Be,bt);for(let ge=0;ge<de.length;ge+=1)de[ge].m(Be,null);Fe(Be,t[2].halfBathroom),w(C,q,ee),w(C,ne,ee),u(ne,ft);for(let ge=0;ge<Me.length;ge+=1)Me[ge].m(ne,null);Fe(ne,t[2].numParks),w(C,dn,ee),w(C,Je,ee),oe(_t,Je,null),u(Je,pn),oe(st,Je,null),Nt=!0,Ot||(At=[j(a,"input",t[5]),j(c,"input",t[6]),j(d,"input",t[7]),j(_,"input",t[8]),j(T,"change",t[9]),j(D,"input",t[10]),j(F,"input",t[11]),j(N,"change",t[12]),j(K,"change",t[13]),j(Q,"change",t[14]),j(x,"change",t[15]),j(L,"change",t[16]),j(fe,"change",t[17]),j(nt,"change",t[18]),j(Be,"change",t[19]),j(ne,"change",t[20])],Ot=!0)},p(C,ee){if(ct===(ct=$t(C))&&dt?dt.p(C,ee):(dt.d(1),dt=ct(C),dt&&(dt.c(),dt.m(i,null))),ee[0]&5&&a.value!==C[2].name&&pe(a,C[2].name),ee[0]&5&&c.value!==C[2].lastname&&pe(c,C[2].lastname),ee[0]&5&&pe(d,C[2].telephon),ee[0]&5&&_.value!==C[2].email&&pe(_,C[2].email),ee[0]&1){ze=C[0];let M;for(M=0;M<ze.length;M+=1){const Re=pf(C,ze,M);Le[M]?Le[M].p(Re,ee):(Le[M]=mf(Re),Le[M].c(),Le[M].m(T,null))}for(;M<Le.length;M+=1)Le[M].d(1);Le.length=ze.length}if(ee[0]&5&&Fe(T,C[2].propCont),ee[0]&5&&ps(D.value)!==C[2].budget&&pe(D,C[2].budget),ee[0]&5&&pe(F,C[2].comContact),ee&0){St=Zh;let M;for(M=0;M<St.length;M+=1){const Re=df(C,St,M);Ne[M]?Ne[M].p(Re,ee):(Ne[M]=gf(Re),Ne[M].c(),Ne[M].m(N,null))}for(;M<Ne.length;M+=1)Ne[M].d(1);Ne.length=St.length}if(ee[0]&5&&Fe(N,C[2].typeContact),ee&0){sn=Jh;let M;for(M=0;M<sn.length;M+=1){const Re=ff(C,sn,M);Ye[M]?Ye[M].p(Re,ee):(Ye[M]=_f(Re),Ye[M].c(),Ye[M].m(K,null))}for(;M<Ye.length;M+=1)Ye[M].d(1);Ye.length=sn.length}if(ee[0]&5&&Fe(K,C[2].selecMC),ee&0){it=ef;let M;for(M=0;M<it.length;M+=1){const Re=hf(C,it,M);ut[M]?ut[M].p(Re,ee):(ut[M]=vf(Re),ut[M].c(),ut[M].m(Q,null))}for(;M<ut.length;M+=1)ut[M].d(1);ut.length=it.length}if(ee[0]&5&&Fe(Q,C[2].modePay),ee&0){Qt=jo;let M;for(M=0;M<Qt.length;M+=1){const Re=uf(C,Qt,M);Xe[M]?Xe[M].p(Re,ee):(Xe[M]=yf(Re),Xe[M].c(),Xe[M].m(x,null))}for(;M<Xe.length;M+=1)Xe[M].d(1);Xe.length=Qt.length}if(ee[0]&5&&Fe(x,C[2].selecTP),ee&0){xt=nf;let M;for(M=0;M<xt.length;M+=1){const Re=cf(C,xt,M);ht[M]?ht[M].p(Re,ee):(ht[M]=bf(Re),ht[M].c(),ht[M].m(L,null))}for(;M<ht.length;M+=1)ht[M].d(1);ht.length=xt.length}if(ee[0]&5&&Fe(L,C[2].rangeProp),ee&0){kt=qo;let M;for(M=0;M<kt.length;M+=1){const Re=lf(C,kt,M);we[M]?we[M].p(Re,ee):(we[M]=wf(Re),we[M].c(),we[M].m(fe,null))}for(;M<we.length;M+=1)we[M].d(1);we.length=kt.length}if(ee[0]&5&&Fe(fe,C[2].numBeds),ee&0){Et=Pn;let M;for(M=0;M<Et.length;M+=1){const Re=af(C,Et,M);ke[M]?ke[M].p(Re,ee):(ke[M]=kf(Re),ke[M].c(),ke[M].m(nt,null))}for(;M<ke.length;M+=1)ke[M].d(1);ke.length=Et.length}if(ee[0]&5&&Fe(nt,C[2].numBaths),ee&0){Te=Pn;let M;for(M=0;M<Te.length;M+=1){const Re=of(C,Te,M);de[M]?de[M].p(Re,ee):(de[M]=Ef(Re),de[M].c(),de[M].m(Be,null))}for(;M<de.length;M+=1)de[M].d(1);de.length=Te.length}if(ee[0]&5&&Fe(Be,C[2].halfBathroom),ee&0){rn=Pn;let M;for(M=0;M<rn.length;M+=1){const Re=rf(C,rn,M);Me[M]?Me[M].p(Re,ee):(Me[M]=Tf(Re),Me[M].c(),Me[M].m(ne,null))}for(;M<Me.length;M+=1)Me[M].d(1);Me.length=rn.length}ee[0]&5&&Fe(ne,C[2].numParks);const ge={};!Ct&&ee[0]&4&&(Ct=!0,ge.ubication=C[2].locaProperty,Fs(()=>Ct=!1)),_t.$set(ge);const Ze={};!wt&&ee[0]&4&&(wt=!0,Ze.tag=C[2].tagsProperty,Fs(()=>wt=!1)),st.$set(Ze)},i(C){Nt||(V(_t.$$.fragment,C),V(st.$$.fragment,C),Nt=!0)},o(C){G(_t.$$.fragment,C),G(st.$$.fragment,C),Nt=!1},d(C){C&&b(e),C&&b(n),C&&b(s),dt.d(),C&&b(v),C&&b(E),He(Le,C),C&&b(B),C&&b($),C&&b(H),C&&b(N),He(Ne,C),C&&b(O),C&&b(K),He(Ye,C),C&&b(ie),C&&b(Q),He(ut,C),C&&b(te),C&&b(x),He(Xe,C),C&&b(z),C&&b(L),He(ht,C),C&&b(ce),C&&b(fe),He(we,C),C&&b(Ce),C&&b(nt),He(ke,C),C&&b(Ve),C&&b(Be),He(de,C),C&&b(q),C&&b(ne),He(Me,C),C&&b(dn),C&&b(Je),ae(_t),ae(st),Ot=!1,tt(At)}}}function II(t,e,n){let s;je(t,at,O=>n(2,s=O));var i=[];let r=Bn,o=!1;(()=>{for(let O of r){let K=`${O.nameProperty} ${O.claveEB} - ${(O.price/1e6).toFixed(2)}`;n(0,i=[...i,K])}return n(0,i=i.sort())})();function a(){n(1,o=!0)}function l(){s.createdAt=this.value,at.set(s),n(0,i)}function c(){s.name=this.value,at.set(s),n(0,i)}function h(){s.lastname=this.value,at.set(s),n(0,i)}function f(){s.telephon=this.value,at.set(s),n(0,i)}function d(){s.email=this.value,at.set(s),n(0,i)}function m(){s.propCont=Yt(this),at.set(s),n(0,i)}function _(){s.budget=ps(this.value),at.set(s),n(0,i)}function v(){s.comContact=this.value,at.set(s),n(0,i)}function E(){s.typeContact=Yt(this),at.set(s),n(0,i)}function T(){s.selecMC=Yt(this),at.set(s),n(0,i)}function k(){s.modePay=Yt(this),at.set(s),n(0,i)}function P(){s.selecTP=Yt(this),at.set(s),n(0,i)}function D(){s.rangeProp=Yt(this),at.set(s),n(0,i)}function B(){s.numBeds=Yt(this),at.set(s),n(0,i)}function $(){s.numBaths=Yt(this),at.set(s),n(0,i)}function F(){s.halfBathroom=Yt(this),at.set(s),n(0,i)}function H(){s.numParks=Yt(this),at.set(s),n(0,i)}function N(O){t.$$.not_equal(s.locaProperty,O)&&(s.locaProperty=O,at.set(s))}function U(O){t.$$.not_equal(s.tagsProperty,O)&&(s.tagsProperty=O,at.set(s))}return[i,o,s,a,l,c,h,f,d,m,_,v,E,T,k,P,D,B,$,F,H,N,U]}class CI extends xe{constructor(e){super(),Qe(this,e,II,TI,Ke,{},null,[-1,-1])}}function If(t,e,n){const s=t.slice();return s[24]=e[n],s}function Cf(t,e,n){const s=t.slice();return s[27]=e[n],s}function Sf(t,e,n){const s=t.slice();return s[30]=e[n],s}function Af(t,e,n){const s=t.slice();return s[33]=e[n],s}function Df(t,e,n){const s=t.slice();return s[36]=e[n],s}function Rf(t,e,n){const s=t.slice();return s[39]=e[n],s}function Pf(t,e,n){const s=t.slice();return s[42]=e[n],s}function SI(t){let e,n=_n(t[1].createdAt)+"",s,i,r;return{c(){e=p("h3"),s=S(n),g(e,"class","dataInput")},m(o,a){w(o,e,a),u(e,s),i||(r=j(e,"dblclick",t[3]),i=!0)},p(o,a){a[0]&2&&n!==(n=_n(o[1].createdAt)+"")&&re(s,n)},d(o){o&&b(e),i=!1,r()}}}function AI(t){let e,n,s;return{c(){e=p("input"),g(e,"class","dataInput"),g(e,"type","date")},m(i,r){w(i,e,r),pe(e,t[1].createdAt),n||(s=j(e,"input",t[4]),n=!0)},p(i,r){r[0]&2&&pe(e,i[1].createdAt)},d(i){i&&b(e),n=!1,s()}}}function Nf(t){let e,n=t[42]+"",s;return{c(){e=p("option"),s=S(n),g(e,"type","checkbox"),e.__value=t[42],e.value=e.__value},m(i,r){w(i,e,r),u(e,s)},p:ue,d(i){i&&b(e)}}}function Of(t){let e,n=t[39]+"",s,i;return{c(){e=p("option"),s=S(n),i=y(),g(e,"type","checkbox"),e.__value=t[39],e.value=e.__value},m(r,o){w(r,e,o),u(e,s),u(e,i)},p:ue,d(r){r&&b(e)}}}function $f(t){let e,n=t[36]+"",s,i;return{c(){e=p("option"),s=S(n),i=S(" Rec\xE1maras"),g(e,"type","checkbox"),e.__value=t[36],e.value=e.__value},m(r,o){w(r,e,o),u(e,s),u(e,i)},p:ue,d(r){r&&b(e)}}}function Lf(t){let e,n=t[33]+"",s,i;return{c(){e=p("option"),s=S(n),i=S(" ba\xF1os"),g(e,"type","checkbox"),e.__value=t[33],e.value=e.__value},m(r,o){w(r,e,o),u(e,s),u(e,i)},p:ue,d(r){r&&b(e)}}}function Mf(t){let e,n=t[30]+"",s,i;return{c(){e=p("option"),s=S(n),i=S(" Medios ba\xF1os"),g(e,"type","checkbox"),e.__value=t[30],e.value=e.__value},m(r,o){w(r,e,o),u(e,s),u(e,i)},p:ue,d(r){r&&b(e)}}}function Uf(t){let e,n=t[27]+"",s,i;return{c(){e=p("option"),s=S(n),i=S(" Estacionamientos"),g(e,"type","checkbox"),e.__value=t[27],e.value=e.__value},m(r,o){w(r,e,o),u(e,s),u(e,i)},p:ue,d(r){r&&b(e)}}}function Ff(t){let e,n=t[24]+"",s;return{c(){e=p("option"),s=S(n),g(e,"type","checkbox"),e.__value=t[24],e.value=e.__value},m(i,r){w(i,e,r),u(e,s)},p:ue,d(i){i&&b(e)}}}function DI(t){let e,n,s,i,r,o,a,l,c,h,f,d,m,_,v,E,T,k,P,D,B,$,F,H,N,U,O,K,Y,ie,Q,W,te,x,A,z,L,R,ce,fe,Se,Ce,nt,be,Ve,Be,bt,q,ne,ft,dn,Je,_t,Ct,pn,st,wt,Nt,Ot,At,$t,ct,dt,ze,Le,St,Ne,sn,Ye,it,ut,Qt,Xe,xt;function ht(I,se){if(I[0])return AI;if(I[2]==="propEditing")return SI}let kt=ht(t),we=kt&&kt(t),Et=jo,ke=[];for(let I=0;I<Et.length;I+=1)ke[I]=Nf(Pf(t,Et,I));let Te=tf,de=[];for(let I=0;I<Te.length;I+=1)de[I]=Of(Rf(t,Te,I));let rn=qo,Me=[];for(let I=0;I<rn.length;I+=1)Me[I]=$f(Df(t,rn,I));let $n=Pn,Dt=[];for(let I=0;I<$n.length;I+=1)Dt[I]=Lf(Af(t,$n,I));let Dn=Pn,vt=[];for(let I=0;I<Dn.length;I+=1)vt[I]=Mf(Sf(t,Dn,I));let C=Pn,ee=[];for(let I=0;I<C.length;I+=1)ee[I]=Uf(Cf(t,C,I));let ge=sf,Ze=[];for(let I=0;I<ge.length;I+=1)Ze[I]=Ff(If(t,ge,I));function M(I){t[22](I)}let Re={};t[1].locaProperty!==void 0&&(Re.ubication=t[1].locaProperty),Ne=new f_({props:Re}),Jn.push(()=>Vs(Ne,"ubication",M));function As(I){t[23](I)}let Ri={};return t[1].tagsProperty!==void 0&&(Ri.tag=t[1].tagsProperty),it=new d_({props:Ri}),Jn.push(()=>Vs(it,"tag",As)),{c(){e=p("div"),we&&we.c(),n=y(),s=p("select"),i=p("option"),i.textContent="Tipo de Propiedad";for(let I=0;I<ke.length;I+=1)ke[I].c();r=y(),o=p("label"),o.innerHTML=`Titulo
       <input type="text"/>`,a=y(),l=p("label"),c=S(`Colonia\r
        `),h=p("input"),f=y(),d=p("label"),m=S(`Nombre de la Propiead\r
        `),_=p("input"),v=y(),E=p("label"),T=S(`Clave EB\r
        `),k=p("input"),P=y(),D=p("label"),B=S(`Clave MH\r
        `),$=p("input"),F=y(),H=p("div"),N=p("textarea"),U=y(),O=p("select"),K=p("option"),K.textContent="Tipo de Operaci\xF3n";for(let I=0;I<de.length;I+=1)de[I].c();Y=y(),ie=p("select"),Q=p("option"),Q.textContent="# Rec\xE1maras";for(let I=0;I<Me.length;I+=1)Me[I].c();W=y(),te=p("select"),x=p("option"),x.textContent="# Ba\xF1os";for(let I=0;I<Dt.length;I+=1)Dt[I].c();A=y(),z=p("select"),L=p("option"),L.textContent="# Medios Ba\xF1os";for(let I=0;I<vt.length;I+=1)vt[I].c();R=y(),ce=p("select"),fe=p("option"),fe.textContent="# Estacionamientos";for(let I=0;I<ee.length;I+=1)ee[I].c();Se=y(),Ce=p("label"),nt=S(`Area de Construcci\xF3n\r
            `),be=p("input"),Ve=y(),Be=p("label"),bt=S(`Area de Terreno\r
            `),q=p("input"),ne=y(),ft=p("label"),dn=S(`Precio\r
            `),Je=p("input"),_t=y(),Ct=p("label"),pn=S(`Link Imgen\r
        `),st=p("input"),wt=y(),Nt=p("label"),Ot=S(`Link de la Propiedad\r
        `),At=p("input"),$t=y(),ct=p("label"),ct.innerHTML=`Propietario
            <input type="text"/>`,dt=y(),ze=p("select"),Le=p("option"),Le.textContent="Tipo de Encargado";for(let I=0;I<Ze.length;I+=1)Ze[I].c();St=y(),le(Ne.$$.fragment),Ye=y(),le(it.$$.fragment),i.disabled=!0,i.selected=!0,i.__value="",i.value=i.__value,g(s,"class","selTP"),g(s,"id","selTP"),g(s,"name","selTP"),t[1].selecTP===void 0&&et(()=>t[5].call(s)),g(h,"type","text"),g(_,"type","text"),g(k,"type","text"),g($,"type","text"),g(N,"placeholder","Comentarios"),g(N,"cols","65"),g(N,"rows","5"),g(N,"class","form-control"),g(H,"class","col"),K.disabled=!0,K.selected=!0,K.__value="",K.value=K.__value,t[1].typeOperation===void 0&&et(()=>t[11].call(O)),Q.disabled=!0,Q.selected=!0,Q.__value="",Q.value=Q.__value,t[1].beds===void 0&&et(()=>t[12].call(ie)),x.disabled=!0,x.selected=!0,x.__value="",x.value=x.__value,t[1].bathroom===void 0&&et(()=>t[13].call(te)),L.disabled=!0,L.selected=!0,L.__value="",L.value=L.__value,t[1].halfBathroom===void 0&&et(()=>t[14].call(z)),fe.disabled=!0,fe.selected=!0,fe.__value="",fe.value=fe.__value,t[1].park===void 0&&et(()=>t[15].call(ce)),g(be,"type","number"),g(q,"type","number"),g(Je,"type","number"),g(st,"type","text"),g(At,"type","text"),Le.disabled=!0,Le.selected=!0,Le.__value="",Le.value=Le.__value,g(ze,"name","typeSaller"),t[1].typeSaller===void 0&&et(()=>t[21].call(ze))},m(I,se){w(I,e,se),we&&we.m(e,null),w(I,n,se),w(I,s,se),u(s,i);for(let Oe=0;Oe<ke.length;Oe+=1)ke[Oe].m(s,null);Fe(s,t[1].selecTP),w(I,r,se),w(I,o,se),w(I,a,se),w(I,l,se),u(l,c),u(l,h),pe(h,t[1].colonia),w(I,f,se),w(I,d,se),u(d,m),u(d,_),pe(_,t[1].nameProperty),w(I,v,se),w(I,E,se),u(E,T),u(E,k),pe(k,t[1].claveEB),w(I,P,se),w(I,D,se),u(D,B),u(D,$),pe($,t[1].claveMH),w(I,F,se),w(I,H,se),u(H,N),pe(N,t[1].description),w(I,U,se),w(I,O,se),u(O,K);for(let Oe=0;Oe<de.length;Oe+=1)de[Oe].m(O,null);Fe(O,t[1].typeOperation),w(I,Y,se),w(I,ie,se),u(ie,Q);for(let Oe=0;Oe<Me.length;Oe+=1)Me[Oe].m(ie,null);Fe(ie,t[1].beds),w(I,W,se),w(I,te,se),u(te,x);for(let Oe=0;Oe<Dt.length;Oe+=1)Dt[Oe].m(te,null);Fe(te,t[1].bathroom),w(I,A,se),w(I,z,se),u(z,L);for(let Oe=0;Oe<vt.length;Oe+=1)vt[Oe].m(z,null);Fe(z,t[1].halfBathroom),w(I,R,se),w(I,ce,se),u(ce,fe);for(let Oe=0;Oe<ee.length;Oe+=1)ee[Oe].m(ce,null);Fe(ce,t[1].park),w(I,Se,se),w(I,Ce,se),u(Ce,nt),u(Ce,be),pe(be,t[1].areaBuilding),w(I,Ve,se),w(I,Be,se),u(Be,bt),u(Be,q),pe(q,t[1].areaTotal),w(I,ne,se),w(I,ft,se),u(ft,dn),u(ft,Je),pe(Je,t[1].price),w(I,_t,se),w(I,Ct,se),u(Ct,pn),u(Ct,st),pe(st,t[1].urlImage),w(I,wt,se),w(I,Nt,se),u(Nt,Ot),u(Nt,At),pe(At,t[1].urlProp),w(I,$t,se),w(I,ct,se),w(I,dt,se),w(I,ze,se),u(ze,Le);for(let Oe=0;Oe<Ze.length;Oe+=1)Ze[Oe].m(ze,null);Fe(ze,t[1].typeSaller),w(I,St,se),oe(Ne,I,se),w(I,Ye,se),oe(it,I,se),Qt=!0,Xe||(xt=[j(s,"change",t[5]),j(h,"input",t[6]),j(_,"input",t[7]),j(k,"input",t[8]),j($,"input",t[9]),j(N,"input",t[10]),j(O,"change",t[11]),j(ie,"change",t[12]),j(te,"change",t[13]),j(z,"change",t[14]),j(ce,"change",t[15]),j(be,"input",t[16]),j(q,"input",t[17]),j(Je,"input",t[18]),j(st,"input",t[19]),j(At,"input",t[20]),j(ze,"change",t[21])],Xe=!0)},p(I,se){if(kt===(kt=ht(I))&&we?we.p(I,se):(we&&we.d(1),we=kt&&kt(I),we&&(we.c(),we.m(e,null))),se&0){Et=jo;let X;for(X=0;X<Et.length;X+=1){const yt=Pf(I,Et,X);ke[X]?ke[X].p(yt,se):(ke[X]=Nf(yt),ke[X].c(),ke[X].m(s,null))}for(;X<ke.length;X+=1)ke[X].d(1);ke.length=Et.length}if(se[0]&2&&Fe(s,I[1].selecTP),se[0]&2&&h.value!==I[1].colonia&&pe(h,I[1].colonia),se[0]&2&&_.value!==I[1].nameProperty&&pe(_,I[1].nameProperty),se[0]&2&&k.value!==I[1].claveEB&&pe(k,I[1].claveEB),se[0]&2&&$.value!==I[1].claveMH&&pe($,I[1].claveMH),se[0]&2&&pe(N,I[1].description),se&0){Te=tf;let X;for(X=0;X<Te.length;X+=1){const yt=Rf(I,Te,X);de[X]?de[X].p(yt,se):(de[X]=Of(yt),de[X].c(),de[X].m(O,null))}for(;X<de.length;X+=1)de[X].d(1);de.length=Te.length}if(se[0]&2&&Fe(O,I[1].typeOperation),se&0){rn=qo;let X;for(X=0;X<rn.length;X+=1){const yt=Df(I,rn,X);Me[X]?Me[X].p(yt,se):(Me[X]=$f(yt),Me[X].c(),Me[X].m(ie,null))}for(;X<Me.length;X+=1)Me[X].d(1);Me.length=rn.length}if(se[0]&2&&Fe(ie,I[1].beds),se&0){$n=Pn;let X;for(X=0;X<$n.length;X+=1){const yt=Af(I,$n,X);Dt[X]?Dt[X].p(yt,se):(Dt[X]=Lf(yt),Dt[X].c(),Dt[X].m(te,null))}for(;X<Dt.length;X+=1)Dt[X].d(1);Dt.length=$n.length}if(se[0]&2&&Fe(te,I[1].bathroom),se&0){Dn=Pn;let X;for(X=0;X<Dn.length;X+=1){const yt=Sf(I,Dn,X);vt[X]?vt[X].p(yt,se):(vt[X]=Mf(yt),vt[X].c(),vt[X].m(z,null))}for(;X<vt.length;X+=1)vt[X].d(1);vt.length=Dn.length}if(se[0]&2&&Fe(z,I[1].halfBathroom),se&0){C=Pn;let X;for(X=0;X<C.length;X+=1){const yt=Cf(I,C,X);ee[X]?ee[X].p(yt,se):(ee[X]=Uf(yt),ee[X].c(),ee[X].m(ce,null))}for(;X<ee.length;X+=1)ee[X].d(1);ee.length=C.length}if(se[0]&2&&Fe(ce,I[1].park),se[0]&2&&ps(be.value)!==I[1].areaBuilding&&pe(be,I[1].areaBuilding),se[0]&2&&ps(q.value)!==I[1].areaTotal&&pe(q,I[1].areaTotal),se[0]&2&&ps(Je.value)!==I[1].price&&pe(Je,I[1].price),se[0]&2&&st.value!==I[1].urlImage&&pe(st,I[1].urlImage),se[0]&2&&At.value!==I[1].urlProp&&pe(At,I[1].urlProp),se&0){ge=sf;let X;for(X=0;X<ge.length;X+=1){const yt=If(I,ge,X);Ze[X]?Ze[X].p(yt,se):(Ze[X]=Ff(yt),Ze[X].c(),Ze[X].m(ze,null))}for(;X<Ze.length;X+=1)Ze[X].d(1);Ze.length=ge.length}se[0]&2&&Fe(ze,I[1].typeSaller);const Oe={};!sn&&se[0]&2&&(sn=!0,Oe.ubication=I[1].locaProperty,Fs(()=>sn=!1)),Ne.$set(Oe);const zn={};!ut&&se[0]&2&&(ut=!0,zn.tag=I[1].tagsProperty,Fs(()=>ut=!1)),it.$set(zn)},i(I){Qt||(V(Ne.$$.fragment,I),V(it.$$.fragment,I),Qt=!0)},o(I){G(Ne.$$.fragment,I),G(it.$$.fragment,I),Qt=!1},d(I){I&&b(e),we&&we.d(),I&&b(n),I&&b(s),He(ke,I),I&&b(r),I&&b(o),I&&b(a),I&&b(l),I&&b(f),I&&b(d),I&&b(v),I&&b(E),I&&b(P),I&&b(D),I&&b(F),I&&b(H),I&&b(U),I&&b(O),He(de,I),I&&b(Y),I&&b(ie),He(Me,I),I&&b(W),I&&b(te),He(Dt,I),I&&b(A),I&&b(z),He(vt,I),I&&b(R),I&&b(ce),He(ee,I),I&&b(Se),I&&b(Ce),I&&b(Ve),I&&b(Be),I&&b(ne),I&&b(ft),I&&b(_t),I&&b(Ct),I&&b(wt),I&&b(Nt),I&&b($t),I&&b(ct),I&&b(dt),I&&b(ze),He(Ze,I),I&&b(St),ae(Ne,I),I&&b(Ye),ae(it,I),Xe=!1,tt(xt)}}}function RI(t,e,n){let s,i;je(t,rt,O=>n(1,s=O)),je(t,gt,O=>n(2,i=O));let r=!1;function o(){n(0,r=!0)}function a(){s.createdAt=this.value,rt.set(s)}function l(){s.selecTP=Yt(this),rt.set(s)}function c(){s.colonia=this.value,rt.set(s)}function h(){s.nameProperty=this.value,rt.set(s)}function f(){s.claveEB=this.value,rt.set(s)}function d(){s.claveMH=this.value,rt.set(s)}function m(){s.description=this.value,rt.set(s)}function _(){s.typeOperation=Yt(this),rt.set(s)}function v(){s.beds=Yt(this),rt.set(s)}function E(){s.bathroom=Yt(this),rt.set(s)}function T(){s.halfBathroom=Yt(this),rt.set(s)}function k(){s.park=Yt(this),rt.set(s)}function P(){s.areaBuilding=ps(this.value),rt.set(s)}function D(){s.areaTotal=ps(this.value),rt.set(s)}function B(){s.price=ps(this.value),rt.set(s)}function $(){s.urlImage=this.value,rt.set(s)}function F(){s.urlProp=this.value,rt.set(s)}function H(){s.typeSaller=Yt(this),rt.set(s)}function N(O){t.$$.not_equal(s.locaProperty,O)&&(s.locaProperty=O,rt.set(s))}function U(O){t.$$.not_equal(s.tagsProperty,O)&&(s.tagsProperty=O,rt.set(s))}return[r,s,i,o,a,l,c,h,f,d,m,_,v,E,T,k,P,D,B,$,F,H,N,U]}class PI extends xe{constructor(e){super(),Qe(this,e,RI,DI,Ke,{},null,[-1,-1])}}function NI(t){let e;return{c(){e=S("Editar")},m(n,s){w(n,e,s)},d(n){n&&b(e)}}}function OI(t){let e;return{c(){e=S("Guardar")},m(n,s){w(n,e,s)},d(n){n&&b(e)}}}function $I(t){let e,n,s,i,r,o,a,l,c,h;n=new CI({});function f(_,v){return _[0]?NI:OI}let d=f(t),m=d(t);return{c(){e=p("div"),le(n.$$.fragment),s=y(),i=p("div"),r=p("button"),m.c(),o=y(),a=p("button"),a.textContent="Cancel",g(r,"class","btn__save"),g(a,"class","btn__cancel"),g(i,"class","contSavCan svelte-1at07r"),g(e,"class","altaContactos")},m(_,v){w(_,e,v),oe(n,e,null),u(e,s),u(e,i),u(i,r),m.m(r,null),u(i,o),u(i,a),l=!0,c||(h=[j(r,"click",t[4]),j(a,"click",t[3])],c=!0)},p(_,[v]){d!==(d=f(_))&&(m.d(1),m=d(_),m&&(m.c(),m.m(r,null)))},i(_){l||(V(n.$$.fragment,_),l=!0)},o(_){G(n.$$.fragment,_),l=!1},d(_){_&&b(e),ae(n),m.d(),c=!1,tt(h)}}}function LI(t,e,n){let s,i;je(t,gt,f=>n(6,s=f)),je(t,at,f=>n(1,i=f));let r=!1,o;async function a(f){if(console.log(s),o=Date.now(),f={...f,createdAt:o},s!="contEditing"){const d=Mn(Ft,"contacts");await Ms(d,f),ot(gt,s="binnAdding",s),l(s,f)}else await wa(is(Ft,"contacts",f.id),f),l(s,f),n(0,r=!1);f=[],ot(gt,s="contSelect",s)}async function l(f,d){try{if(f==="binnAdding"){let m=`Se le agreg\xF3 a: ${d.name} ${d.lastname} del ${d.telephon}`,_={date:Date.now(),comment:m};console.log(f,_);const v=Mn(Ft,"binnacles");await Ms(v,_)}else{let m=`Se le edit\xF3 a: ${d.name} ${d.lastname} del ${d.telephon}`,_={date:Date.now(),comment:m};console.log(f,_);const v=Mn(Ft,"binnacles");await Ms(v,_)}}catch(m){console.log("error",m)}}function c(){n(0,r=!0),location.href="/"}return[r,i,a,c,()=>a(i)]}class MI extends xe{constructor(e){super(),Qe(this,e,LI,$I,Ke,{})}}const p_="/to-deploy-mh/assets/trash.2d1385a7.svg",m_="/to-deploy-mh/assets/edit.070633c4.svg";function Vf(t,e,n){const s=t.slice();return s[42]=e[n],s}function Bf(t,e,n){const s=t.slice();return s[45]=e[n],s}function jf(t){let e,n,s,i,r,o=t[8].name+"",a,l,c=t[8].lastname+"",h,f,d,m,_=_n(t[8].createdAt)+"",v,E,T,k,P=t[8].selecTP+"",D,B,$=t[8].numBeds+"",F,H,N=t[8].numBaths+"",U,O,K=t[8].numParks+"",Y,ie,Q,W,te,x,A=t[8].budget+"",z,L,R,ce=t[8].selecTP+"",fe,Se,Ce,nt,be,Ve=t[8].telephon+"",Be,bt,q,ne=t[8].email+"",ft,dn,Je,_t,Ct=t[8].tagsProperty.join(",  ")+"",pn,st,wt,Nt,Ot=t[8].locaProperty.join(",  ")+"",At,$t,ct,dt,ze,Le,St,Ne,sn,Ye,it=t[8].contactStage+"",ut,Qt,Xe,xt=t[8].comContact+"",ht,kt,we,Et,ke,Te,de,rn,Me,$n,Dt,Dn,vt,C,ee,ge,Ze,M,Re,As,Ri,I,se,Oe,zn,X,yt,Js,nu,Ca,Pi,Lt,Sa,su,Zs=t[8].sendedProperties,yn=[];for(let _e=0;_e<Zs.length;_e+=1)yn[_e]=qf(Bf(t,Zs,_e));let bn=t[0]&&Hf(t),qt=t[2]&&Kf(t),Ht=t[7]&&zf(t),Kt=t[6]&&Gf(t);return{c(){e=p("div"),n=p("div"),s=p("h4"),s.textContent="Contacto",i=y(),r=p("h2"),a=S(o),l=y(),h=S(c),f=y(),d=p("p"),m=S("Fecha Alta: "),v=S(_),E=y(),T=p("p"),k=S("Busca  "),D=S(P),B=S(", de "),F=S($),H=S(" rec\xE1maras,  "),U=S(N),O=S(" ba\xF1os y "),Y=S(K),ie=S(" estacionamientos"),Q=y(),W=p("p"),te=S("Presupuesto tope: "),x=p("strong"),z=S(A),L=S(" : Tipo de propiedad buscada: "),R=p("strong"),fe=S(ce),Se=y(),Ce=p("p"),nt=S("Tel\xE9fono: "),be=p("strong"),Be=S(Ve),bt=S(" ---- Email: "),q=p("strong"),ft=S(ne),dn=y(),Je=p("p"),_t=S("Preferencias: "),pn=S(Ct),st=y(),wt=p("p"),Nt=S("Ubicaciones: "),At=S(Ot),$t=y(),ct=p("div"),dt=p("p"),dt.textContent="Propiedades enviadas:",ze=y(),Le=p("div");for(let _e=0;_e<yn.length;_e+=1)yn[_e].c();St=y(),Ne=p("div"),bn&&bn.c(),sn=y(),Ye=p("p"),ut=S(it),Qt=y(),Xe=p("p"),ht=S(xt),kt=y(),we=p("div"),Et=p("button"),Et.textContent="Programar Evento",ke=y(),qt&&qt.c(),Te=y(),de=p("button"),de.textContent="Ver Propiedades de Interes",rn=y(),Me=p("button"),Me.textContent="Buscar Propiedad",$n=y(),Ht&&Ht.c(),Dt=y(),Dn=p("div"),vt=p("button"),vt.textContent="Cancelar",C=y(),ee=p("div"),ge=p("div"),Ze=p("textarea"),M=y(),Re=p("div"),As=p("button"),As.textContent="Enviar WhatsApp",Ri=y(),I=p("button"),I.textContent="Guardar Info",se=y(),Oe=p("div"),zn=p("img"),yt=y(),Js=p("img"),Ca=y(),Kt&&Kt.c(),Pi=vn(),g(Le,"class","mostImage svelte-ce274g"),g(ct,"class","propMost"),g(Et,"class","btnCommon"),g(de,"class","btnCommon"),g(Me,"class","btnCommon"),g(vt,"class","btn__cancel"),g(Ze,"class","texArea"),g(Ze,"cols","65"),g(Ze,"rows","5"),g(Ze,"placeholder","Ingresa un comentario"),g(As,"class","btnCommon btnWhatsApp"),g(I,"class","btnCommon"),Tt(zn.src,X=m_)||g(zn,"src",X),g(zn,"alt","delete"),Tt(Js.src,nu=p_)||g(Js,"src",nu),g(Js,"alt","delete"),g(Oe,"class","icon__Content"),g(e,"class","container")},m(_e,Ge){w(_e,e,Ge),u(e,n),u(n,s),u(n,i),u(n,r),u(r,a),u(r,l),u(r,h),u(n,f),u(n,d),u(d,m),u(d,v),u(n,E),u(n,T),u(T,k),u(T,D),u(T,B),u(T,F),u(T,H),u(T,U),u(T,O),u(T,Y),u(T,ie),u(n,Q),u(n,W),u(W,te),u(W,x),u(x,z),u(W,L),u(W,R),u(R,fe),u(n,Se),u(n,Ce),u(Ce,nt),u(Ce,be),u(be,Be),u(Ce,bt),u(Ce,q),u(q,ft),u(n,dn),u(n,Je),u(Je,_t),u(Je,pn),u(n,st),u(n,wt),u(wt,Nt),u(wt,At),u(n,$t),u(n,ct),u(ct,dt),u(ct,ze),u(ct,Le);for(let on=0;on<yn.length;on+=1)yn[on].m(Le,null);u(e,St),u(e,Ne),bn&&bn.m(Ne,null),u(e,sn),u(e,Ye),u(Ye,ut),u(e,Qt),u(e,Xe),u(Xe,ht),u(e,kt),u(e,we),u(we,Et),u(we,ke),qt&&qt.m(we,null),u(we,Te),u(we,de),u(we,rn),u(we,Me),u(we,$n),Ht&&Ht.m(we,null),u(e,Dt),u(e,Dn),u(Dn,vt),u(e,C),u(e,ee),u(ee,ge),u(ge,Ze),pe(Ze,t[4]),u(ge,M),u(ge,Re),u(Re,As),u(Re,Ri),u(Re,I),u(ee,se),u(ee,Oe),u(Oe,zn),u(Oe,yt),u(Oe,Js),w(_e,Ca,Ge),Kt&&Kt.m(_e,Ge),w(_e,Pi,Ge),Lt=!0,Sa||(su=[j(Et,"click",t[27]),j(de,"click",t[28]),j(Me,"click",t[14]),j(vt,"click",t[17]),j(Ze,"keypress",t[18]),j(Ze,"input",t[30]),j(As,"click",t[23]),j(I,"click",t[24]),j(zn,"click",t[19]),j(Js,"click",t[20])],Sa=!0)},p(_e,Ge){if((!Lt||Ge[0]&256)&&o!==(o=_e[8].name+"")&&re(a,o),(!Lt||Ge[0]&256)&&c!==(c=_e[8].lastname+"")&&re(h,c),(!Lt||Ge[0]&256)&&_!==(_=_n(_e[8].createdAt)+"")&&re(v,_),(!Lt||Ge[0]&256)&&P!==(P=_e[8].selecTP+"")&&re(D,P),(!Lt||Ge[0]&256)&&$!==($=_e[8].numBeds+"")&&re(F,$),(!Lt||Ge[0]&256)&&N!==(N=_e[8].numBaths+"")&&re(U,N),(!Lt||Ge[0]&256)&&K!==(K=_e[8].numParks+"")&&re(Y,K),(!Lt||Ge[0]&256)&&A!==(A=_e[8].budget+"")&&re(z,A),(!Lt||Ge[0]&256)&&ce!==(ce=_e[8].selecTP+"")&&re(fe,ce),(!Lt||Ge[0]&256)&&Ve!==(Ve=_e[8].telephon+"")&&re(Be,Ve),(!Lt||Ge[0]&256)&&ne!==(ne=_e[8].email+"")&&re(ft,ne),(!Lt||Ge[0]&256)&&Ct!==(Ct=_e[8].tagsProperty.join(",  ")+"")&&re(pn,Ct),(!Lt||Ge[0]&256)&&Ot!==(Ot=_e[8].locaProperty.join(",  ")+"")&&re(At,Ot),Ge[0]&6402){Zs=_e[8].sendedProperties;let on;for(on=0;on<Zs.length;on+=1){const iu=Bf(_e,Zs,on);yn[on]?yn[on].p(iu,Ge):(yn[on]=qf(iu),yn[on].c(),yn[on].m(Le,null))}for(;on<yn.length;on+=1)yn[on].d(1);yn.length=Zs.length}_e[0]?bn?bn.p(_e,Ge):(bn=Hf(_e),bn.c(),bn.m(Ne,null)):bn&&(bn.d(1),bn=null),(!Lt||Ge[0]&256)&&it!==(it=_e[8].contactStage+"")&&re(ut,it),(!Lt||Ge[0]&256)&&xt!==(xt=_e[8].comContact+"")&&re(ht,xt),_e[2]?qt?(qt.p(_e,Ge),Ge[0]&4&&V(qt,1)):(qt=Kf(_e),qt.c(),V(qt,1),qt.m(we,Te)):qt&&(Mt(),G(qt,1,1,()=>{qt=null}),Ut()),_e[7]?Ht?(Ht.p(_e,Ge),Ge[0]&128&&V(Ht,1)):(Ht=zf(_e),Ht.c(),V(Ht,1),Ht.m(we,null)):Ht&&(Mt(),G(Ht,1,1,()=>{Ht=null}),Ut()),Ge[0]&16&&pe(Ze,_e[4]),_e[6]?Kt?(Kt.p(_e,Ge),Ge[0]&64&&V(Kt,1)):(Kt=Gf(_e),Kt.c(),V(Kt,1),Kt.m(Pi.parentNode,Pi)):Kt&&(Mt(),G(Kt,1,1,()=>{Kt=null}),Ut())},i(_e){Lt||(V(qt),V(Ht),V(Kt),Lt=!0)},o(_e){G(qt),G(Ht),G(Kt),Lt=!1},d(_e){_e&&b(e),He(yn,_e),bn&&bn.d(),qt&&qt.d(),Ht&&Ht.d(),_e&&b(Ca),Kt&&Kt.d(_e),_e&&b(Pi),Sa=!1,tt(su)}}}function qf(t){let e,n=t[45]+"",s,i,r,o;function a(){return t[25](t[45])}return{c(){e=p("p"),s=S(n),g(e,"value",i=t[45])},m(l,c){w(l,e,c),u(e,s),r||(o=[j(e,"mouseenter",a),j(e,"mouseout",t[12]),j(e,"dblclick",t[26])],r=!0)},p(l,c){t=l,c[0]&256&&n!==(n=t[45]+"")&&re(s,n),c[0]&256&&i!==(i=t[45])&&g(e,"value",i)},d(l){l&&b(e),r=!1,tt(o)}}}function Hf(t){let e,n=t[1][0].nameProperty+"",s,i,r,o,a;return{c(){e=p("h3"),s=S(n),i=y(),r=p("img"),g(e,"class","svelte-ce274g"),g(r,"class","imgPropContSelect"),g(r,"height","200"),Tt(r.src,o=t[1][0].urlImage)||g(r,"src",o),g(r,"alt",a=t[1][0].claveEB)},m(l,c){w(l,e,c),u(e,s),w(l,i,c),w(l,r,c)},p(l,c){c[0]&2&&n!==(n=l[1][0].nameProperty+"")&&re(s,n),c[0]&2&&!Tt(r.src,o=l[1][0].urlImage)&&g(r,"src",o),c[0]&2&&a!==(a=l[1][0].claveEB)&&g(r,"alt",a)},d(l){l&&b(e),l&&b(i),l&&b(r)}}}function Kf(t){let e,n;const s=[t[8]];let i={};for(let r=0;r<s.length;r+=1)i=Gt(i,s[r]);return e=new pI({props:i}),e.$on("closeIt",t[21]),{c(){le(e.$$.fragment)},m(r,o){oe(e,r,o),n=!0},p(r,o){const a=o[0]&256?Sn(s,[Zn(r[8])]):{};e.$set(a)},i(r){n||(V(e.$$.fragment,r),n=!0)},o(r){G(e.$$.fragment,r),n=!1},d(r){ae(e,r)}}}function zf(t){let e,n,s;function i(o){t[29](o)}let r={};return t[3]!==void 0&&(r.searchTerm=t[3]),e=new tu({props:r}),Jn.push(()=>Vs(e,"searchTerm",i)),e.$on("input",t[15]),{c(){le(e.$$.fragment)},m(o,a){oe(e,o,a),s=!0},p(o,a){const l={};!n&&a[0]&8&&(n=!0,l.searchTerm=o[3],Fs(()=>n=!1)),e.$set(l)},i(o){s||(V(e.$$.fragment,o),s=!0)},o(o){G(e.$$.fragment,o),s=!1},d(o){ae(e,o)}}}function Gf(t){let e,n,s,i=t[10].length+"",r,o,a,l,c=t[10],h=[];for(let m=0;m<c.length;m+=1)h[m]=Wf(Vf(t,c,m));const f=m=>G(h[m],1,1,()=>{h[m]=null});let d=t[10].length===0&&Qf();return{c(){e=p("main"),n=p("h3"),s=S("Propiedades encontradas: "),r=S(i),o=y();for(let m=0;m<h.length;m+=1)h[m].c();a=y(),d&&d.c(),g(n,"class","svelte-ce274g"),g(e,"id","bookshelf"),g(e,"class","svelte-ce274g")},m(m,_){w(m,e,_),u(e,n),u(n,s),u(n,r),u(e,o);for(let v=0;v<h.length;v+=1)h[v].m(e,null);u(e,a),d&&d.m(e,null),l=!0},p(m,_){if((!l||_[0]&1024)&&i!==(i=m[10].length+"")&&re(r,i),_[0]&4195360){c=m[10];let v;for(v=0;v<c.length;v+=1){const E=Vf(m,c,v);h[v]?(h[v].p(E,_),V(h[v],1)):(h[v]=Wf(E),h[v].c(),V(h[v],1),h[v].m(e,a))}for(Mt(),v=c.length;v<h.length;v+=1)f(v);Ut()}m[10].length===0?d||(d=Qf(),d.c(),d.m(e,null)):d&&(d.d(1),d=null)},i(m){if(!l){for(let _=0;_<c.length;_+=1)V(h[_]);l=!0}},o(m){h=h.filter(Boolean);for(let _=0;_<h.length;_+=1)G(h[_]);l=!1},d(m){m&&b(e),He(h,m),d&&d.d()}}}function Wf(t){let e,n,s,i,r,o,a,l,c;const h=[t[42]];let f={};for(let d=0;d<h.length;d+=1)f=Gt(f,h[d]);return r=new u_({props:f}),{c(){e=p("section"),n=p("input"),i=y(),le(r.$$.fragment),g(n,"type","checkbox"),n.__value=s=t[42].urlProp,n.value=n.__value,g(n,"class","form-check"),t[32][0].push(n),g(e,"class","property svelte-ce274g")},m(d,m){w(d,e,m),u(e,n),n.checked=~t[5].indexOf(n.__value),u(e,i),oe(r,e,null),a=!0,l||(c=[j(n,"change",t[31]),j(e,"click",t[22])],l=!0)},p(d,m){t=d,(!a||m[0]&1024&&s!==(s=t[42].urlProp))&&(n.__value=s,n.value=n.__value),m[0]&32&&(n.checked=~t[5].indexOf(n.__value));const _=m[0]&1024?Sn(h,[Zn(t[42])]):{};r.$set(_)},i(d){a||(V(r.$$.fragment,d),et(()=>{o||(o=Tn(e,Ei,{duration:500,easing:ki},!0)),o.run(1)}),a=!0)},o(d){G(r.$$.fragment,d),o||(o=Tn(e,Ei,{duration:500,easing:ki},!1)),o.run(0),a=!1},d(d){d&&b(e),t[32][0].splice(t[32][0].indexOf(n),1),ae(r),d&&o&&o.end(),l=!1,tt(c)}}}function Qf(t){let e;return{c(){e=p("h3"),e.textContent='"No hay Propiedades para este contacto"',g(e,"class","svelte-ce274g")},m(n,s){w(n,e,s)},d(n){n&&b(e)}}}function UI(t){let e,n,s=t[9]==="contSelect"&&jf(t);return{c(){e=p("main"),s&&s.c()},m(i,r){w(i,e,r),s&&s.m(e,null),n=!0},p(i,r){i[9]==="contSelect"?s?(s.p(i,r),r[0]&512&&V(s,1)):(s=jf(i),s.c(),V(s,1),s.m(e,null)):s&&(Mt(),G(s,1,1,()=>{s=null}),Ut())},i(i){n||(V(s),n=!0)},o(i){G(s),n=!1},d(i){i&&b(e),s&&s.d()}}}function FI(t){window.open(t)}function VI(t,e,n){let s,i,r;je(t,at,R=>n(8,s=R)),je(t,gt,R=>n(9,i=R)),je(t,$l,R=>n(10,r=R));const o=Qs();let a=!1,l,c=!1,h,f,d=[],m=!1,_=!1;console.log(i);function v(R){n(0,a=!0),n(1,l=Bn.filter(ce=>ce.claveEB===R))}function E(){n(0,a=!1)}function T(){console.log("estas en addSchedule"),n(2,c=!0)}function k(){n(7,_=!0)}const P=()=>(n(6,m=!0),ot($l,r=Bn.filter(R=>(R.nameProperty+" "+R.colonia+" "+R.claveEB).toLowerCase().includes(h.toLowerCase())),r));function D(R){_I(R),n(6,m=!0)}const B=()=>{ot(at,s=[],s),ot(gt,i="start",i)};function $(){}function F(){ot(gt,i="contEditing",i)}async function H(){confirm("Deseas eleiminar definitivamente al contacto?")&&(await ka(is(Ft,"contacts",s.id)),N(s),o("/"))}async function N(R){let ce=`Se le elimin\xF3a: ${R.name} ${R.lastname} del ${R.telephon}`,fe={date:Date.now(),comment:ce};console.log(i,fe);const Se=Mn(Ft,"binnacles");await Ms(Se,fe)}function U(){n(2,c=!1)}function O(){console.log(d)}function K(){console.log(d);let R=`https://api.whatsapp.com/send?phone=52${s.telephon}&text=${d}`;window.open(R),c_()}function Y(){console.log(d)}const ie=[[]],Q=R=>v(R),W=()=>FI(l[0].urlProp),te=()=>T(),x=()=>D(s);function A(R){h=R,n(3,h)}function z(){f=this.value,n(4,f)}function L(){d=Xt(ie[0],this.__value,this.checked),n(5,d)}return[a,l,c,h,f,d,m,_,s,i,r,v,E,T,k,P,D,B,$,F,H,U,O,K,Y,Q,W,te,x,A,z,L,ie]}class BI extends xe{constructor(e){super(),Qe(this,e,VI,UI,Ke,{},null,[-1,-1])}}function xf(t,e,n){const s=t.slice();return s[22]=e[n],s[24]=n,s}function Yf(t,e,n){const s=t.slice();return s[24]=e[n],s}function Xf(t,e,n){const s=t.slice();return s[12]=e[n],s[24]=n,s}function Jf(t){let e,n,s,i,r,o,a,l,c,h,f,d,m,_,v,E,T,k,P,D,B,$,F;function H(A){t[14](A)}let N={};t[3]!==void 0&&(N.searchTerm=t[3]),r=new tu({props:N}),Jn.push(()=>Vs(r,"searchTerm",H)),r.$on("input",t[11]);let U=t[1],O=[];for(let A=0;A<U.length;A+=1)O[A]=ed(Xf(t,U,A));const K=A=>G(O[A],1,1,()=>{O[A]=null});let Y=t[0]>1&&td(t),ie=[3,2,1],Q=[];for(let A=0;A<3;A+=1)Q[A]=sd(Yf(t,ie,A));let W=Array(3),te=[];for(let A=0;A<W.length;A+=1)te[A]=rd(xf(t,W,A));let x=t[0]<t[5]&&od(t);return{c(){e=p("h2"),e.textContent=`${fr.length} Contactos a Mostrar`,n=y(),s=p("button"),s.textContent="Alta de Contacto",i=y(),le(r.$$.fragment),a=y(),l=p("div"),c=p("main");for(let A=0;A<O.length;A+=1)O[A].c();h=y(),f=p("div"),d=p("div"),m=p("ul"),Y&&Y.c(),_=y();for(let A=0;A<3;A+=1)Q[A].c();v=y(),E=p("li"),T=p("span"),k=S(t[0]),P=y();for(let A=0;A<te.length;A+=1)te[A].c();D=y(),x&&x.c(),g(s,"class","altaContacto svelte-152vhxc"),g(c,"id","bookshelf"),g(m,"class","pagi__options"),g(d,"class","pagi__Item"),g(f,"class","container pagination"),g(l,"class","mosPag container cont__card svelte-152vhxc")},m(A,z){w(A,e,z),w(A,n,z),w(A,s,z),w(A,i,z),oe(r,A,z),w(A,a,z),w(A,l,z),u(l,c);for(let L=0;L<O.length;L+=1)O[L].m(c,null);u(l,h),u(l,f),u(f,d),u(d,m),Y&&Y.m(m,null),u(m,_);for(let L=0;L<3;L+=1)Q[L].m(m,null);u(m,v),u(m,E),u(E,T),u(T,k),u(m,P);for(let L=0;L<te.length;L+=1)te[L].m(m,null);u(m,D),x&&x.m(m,null),B=!0,$||(F=j(s,"click",t[9]),$=!0)},p(A,z){const L={};if(!o&&z&8&&(o=!0,L.searchTerm=A[3],Fs(()=>o=!1)),r.$set(L),z&1046){U=A[1];let R;for(R=0;R<U.length;R+=1){const ce=Xf(A,U,R);O[R]?(O[R].p(ce,z),V(O[R],1)):(O[R]=ed(ce),O[R].c(),V(O[R],1),O[R].m(c,null))}for(Mt(),R=U.length;R<O.length;R+=1)K(R);Ut()}if(A[0]>1?Y?Y.p(A,z):(Y=td(A),Y.c(),Y.m(m,_)):Y&&(Y.d(1),Y=null),z&257){ie=[3,2,1];let R;for(R=0;R<3;R+=1){const ce=Yf(A,ie,R);Q[R]?Q[R].p(ce,z):(Q[R]=sd(ce),Q[R].c(),Q[R].m(m,v))}for(;R<3;R+=1)Q[R].d(1)}if((!B||z&1)&&re(k,A[0]),z&289){W=Array(3);let R;for(R=0;R<W.length;R+=1){const ce=xf(A,W,R);te[R]?te[R].p(ce,z):(te[R]=rd(ce),te[R].c(),te[R].m(m,D))}for(;R<te.length;R+=1)te[R].d(1);te.length=W.length}A[0]<A[5]?x?x.p(A,z):(x=od(A),x.c(),x.m(m,null)):x&&(x.d(1),x=null)},i(A){if(!B){V(r.$$.fragment,A);for(let z=0;z<U.length;z+=1)V(O[z]);B=!0}},o(A){G(r.$$.fragment,A),O=O.filter(Boolean);for(let z=0;z<O.length;z+=1)G(O[z]);B=!1},d(A){A&&b(e),A&&b(n),A&&b(s),A&&b(i),ae(r,A),A&&b(a),A&&b(l),He(O,A),Y&&Y.d(),He(Q,A),He(te,A),x&&x.d(),$=!1,F()}}}function Zf(t){let e,n,s,i,r,o,a;const l=[t[12]];let c={};for(let f=0;f<l.length;f+=1)c=Gt(c,l[f]);n=new cI({props:c});function h(){return t[15](t[12])}return{c(){e=p("div"),le(n.$$.fragment),s=y(),g(e,"class","selecContact")},m(f,d){w(f,e,d),oe(n,e,null),u(e,s),r=!0,o||(a=j(e,"click",h),o=!0)},p(f,d){t=f;const m=d&2?Sn(l,[Zn(t[12])]):{};n.$set(m)},i(f){r||(V(n.$$.fragment,f),et(()=>{i||(i=Tn(e,Ei,{duration:500,easing:ki},!0)),i.run(1)}),r=!0)},o(f){G(n.$$.fragment,f),i||(i=Tn(e,Ei,{duration:500,easing:ki},!1)),i.run(0),r=!1},d(f){f&&b(e),ae(n),f&&i&&i.end(),o=!1,a()}}}function ed(t){let e,n,s=t[24]>=t[4]&&t[24]<t[2]&&Zf(t);return{c(){s&&s.c(),e=vn()},m(i,r){s&&s.m(i,r),w(i,e,r),n=!0},p(i,r){i[24]>=i[4]&&i[24]<i[2]?s?(s.p(i,r),r&20&&V(s,1)):(s=Zf(i),s.c(),V(s,1),s.m(e.parentNode,e)):s&&(Mt(),G(s,1,1,()=>{s=null}),Ut())},i(i){n||(V(s),n=!0)},o(i){G(s),n=!1},d(i){s&&s.d(i),i&&b(e)}}}function td(t){let e,n,s,i,r,o,a,l,c;return{c(){e=p("li"),n=p("a"),n.textContent="first",s=y(),i=p("li"),r=p("a"),o=S("previous"),g(n,"href","/blog"),g(r,"href",a="/blog/"+(t[0]-1))},m(h,f){w(h,e,f),u(e,n),w(h,s,f),w(h,i,f),u(i,r),u(r,o),l||(c=[j(n,"click",Cn(t[16])),j(r,"click",Cn(t[17]))],l=!0)},p(h,f){f&1&&a!==(a="/blog/"+(h[0]-1))&&g(r,"href",a)},d(h){h&&b(e),h&&b(s),h&&b(i),l=!1,tt(c)}}}function nd(t){let e,n,s=t[0]-t[24]+"",i,r,o,a;function l(){return t[18](t[24])}return{c(){e=p("li"),n=p("a"),i=S(s),g(n,"href",r="/blog/"+(t[0]-t[24]))},m(c,h){w(c,e,h),u(e,n),u(n,i),o||(a=j(n,"click",Cn(l)),o=!0)},p(c,h){t=c,h&1&&s!==(s=t[0]-t[24]+"")&&re(i,s),h&1&&r!==(r="/blog/"+(t[0]-t[24]))&&g(n,"href",r)},d(c){c&&b(e),o=!1,a()}}}function sd(t){let e,n=t[0]-t[24]>0&&nd(t);return{c(){n&&n.c(),e=vn()},m(s,i){n&&n.m(s,i),w(s,e,i)},p(s,i){s[0]-s[24]>0?n?n.p(s,i):(n=nd(s),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(s){n&&n.d(s),s&&b(e)}}}function id(t){let e,n,s=t[0]+(t[24]+1)+"",i,r,o,a;function l(){return t[19](t[24])}return{c(){e=p("li"),n=p("a"),i=S(s),g(n,"href",r="/blog/"+(t[0]+(t[24]+1)))},m(c,h){w(c,e,h),u(e,n),u(n,i),o||(a=j(n,"click",Cn(l)),o=!0)},p(c,h){t=c,h&1&&s!==(s=t[0]+(t[24]+1)+"")&&re(i,s),h&1&&r!==(r="/blog/"+(t[0]+(t[24]+1)))&&g(n,"href",r)},d(c){c&&b(e),o=!1,a()}}}function rd(t){let e,n=t[0]+(t[24]+1)<=t[5]&&id(t);return{c(){n&&n.c(),e=vn()},m(s,i){n&&n.m(s,i),w(s,e,i)},p(s,i){s[0]+(s[24]+1)<=s[5]?n?n.p(s,i):(n=id(s),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(s){n&&n.d(s),s&&b(e)}}}function od(t){let e,n,s,i,r,o,a,l,c,h,f;return{c(){e=p("li"),n=p("a"),s=S("next"),r=y(),o=p("li"),a=p("a"),l=S("last"),g(n,"href",i="/blog/"+(t[0]+1)),g(a,"href",c="/blog/"+t[5])},m(d,m){w(d,e,m),u(e,n),u(n,s),w(d,r,m),w(d,o,m),u(o,a),u(a,l),h||(f=[j(n,"click",Cn(t[20])),j(a,"click",Cn(t[21]))],h=!0)},p(d,m){m&1&&i!==(i="/blog/"+(d[0]+1))&&g(n,"href",i),m&32&&c!==(c="/blog/"+d[5])&&g(a,"href",c)},d(d){d&&b(e),d&&b(r),d&&b(o),h=!1,tt(f)}}}function ad(t){let e,n,s;return n=new BI({props:{$contact:t[7]}}),{c(){e=p("div"),le(n.$$.fragment)},m(i,r){w(i,e,r),oe(n,e,null),s=!0},p(i,r){const o={};r&128&&(o.$contact=i[7]),n.$set(o)},i(i){s||(V(n.$$.fragment,i),s=!0)},o(i){G(n.$$.fragment,i),s=!1},d(i){i&&b(e),ae(n)}}}function ld(t){let e,n,s,i;const r=[t[7]];let o={};for(let a=0;a<r.length;a+=1)o=Gt(o,r[a]);return s=new MI({props:o}),{c(){e=p("div"),n=p("div"),le(s.$$.fragment),g(n,"class","container")},m(a,l){w(a,e,l),u(e,n),oe(s,n,null),i=!0},p(a,l){const c=l&128?Sn(r,[Zn(a[7])]):{};s.$set(c)},i(a){i||(V(s.$$.fragment,a),i=!0)},o(a){G(s.$$.fragment,a),i=!1},d(a){a&&b(e),ae(s)}}}function jI(t){let e,n,s,i,r,o,a,l,c,h,f=t[6]==="start"&&Jf(t),d=t[6]==="contSelect"&&ad(t),m=(t[6]==="contEditing"||t[6]==="contAdding")&&ld(t);return{c(){e=p("main"),n=p("div"),s=p("h1"),s.textContent="Contactos",i=y(),r=p("img"),a=y(),f&&f.c(),l=y(),d&&d.c(),c=y(),m&&m.c(),Tt(r.src,o=a_)||g(r,"src",o),g(r,"alt","contactos"),g(r,"class","svelte-152vhxc"),g(e,"class","container")},m(_,v){w(_,e,v),u(e,n),u(n,s),u(n,i),u(n,r),u(e,a),f&&f.m(e,null),u(e,l),d&&d.m(e,null),u(e,c),m&&m.m(e,null),h=!0},p(_,[v]){_[6]==="start"?f?(f.p(_,v),v&64&&V(f,1)):(f=Jf(_),f.c(),V(f,1),f.m(e,l)):f&&(Mt(),G(f,1,1,()=>{f=null}),Ut()),_[6]==="contSelect"?d?(d.p(_,v),v&64&&V(d,1)):(d=ad(_),d.c(),V(d,1),d.m(e,c)):d&&(Mt(),G(d,1,1,()=>{d=null}),Ut()),_[6]==="contEditing"||_[6]==="contAdding"?m?(m.p(_,v),v&64&&V(m,1)):(m=ld(_),m.c(),V(m,1),m.m(e,null)):m&&(Mt(),G(m,1,1,()=>{m=null}),Ut())},i(_){h||(V(f),V(d),V(m),h=!0)},o(_){G(f),G(d),G(m),h=!1},d(_){_&&b(e),f&&f.d(),d&&d.d(),m&&m.d()}}}let Za=15;function qI(t,e,n){let s,i,r,o,a,l;je(t,gt,N=>n(6,a=N)),je(t,at,N=>n(7,l=N));let c;ot(gt,a="start",a);let h,f=1,d=[];const m=N=>{n(0,f=N)},_=()=>{ot(gt,a="contAdding",a)},v=N=>{n(3,c=""),ot(at,l=N,l),ot(gt,a="contSelect",a)};function E(){return n(1,d=fr.filter(N=>(N.name+" "+N.lastname).toLowerCase().includes(c.toLowerCase())))}n(1,d=fr.sort((N,U)=>N.createdAt<U.createdAt?1:N.createdAt>U.createdAt?-1:0));function T(N){c=N,n(3,c)}const k=N=>v(N),P=()=>m(1),D=()=>m(f-1),B=N=>m(f-N),$=N=>m(f+(N+1)),F=()=>m(f+1),H=()=>m(i);return t.$$.update=()=>{t.$$.dirty&2&&n(13,s=d.length),t.$$.dirty&8192&&n(5,i=Math.ceil(s/Za)),t.$$.dirty&1&&n(2,r=f*Za),t.$$.dirty&4&&n(4,o=r-Za)},[f,d,r,c,o,i,a,l,m,_,v,E,h,s,T,k,P,D,B,$,F,H]}class HI extends xe{constructor(e){super(),Qe(this,e,qI,jI,Ke,{})}}let ls=[],cs=[];function KI(t,e){e=e.filter(n=>n.selecTP===t.selectTP),t.numBeds>0&&(e=e.filter(n=>n.numBeds>=t.beds)),t.numBaths>0&&(e=e.filter(n=>n.numBaths>=t.bathroom)),t.numParks>0&&(e=e.filter(n=>n.numPark>=t.parks));try{e=e.filter(n=>{n.budget?ls=e.filter(s=>s.budget>=t.price*.7&&s.budget<=t.price*1.1):cs=e.filter(s=>s.rangeProp===h_(t.price))})}catch(n){console.log(n)}e=cs.concat(ls),ls=[],cs=[];try{e.filter(n=>{n.locaProperty.length>0?(ls=e.filter(s=>t.locaProperty.some(i=>s.locaProperty.includes(i))),console.log(t.locaProperty)):(cs=e.filter(s=>s.locaProperty.length===0),console.log(t.locaProperty))})}catch(n){console.log(n)}e=cs.concat(ls),ls=[],cs=[];try{e=e.filter(n=>{n.tagsProperty.length>0?ls=e.filter(s=>t.tagsProperty.some(i=>s.tagsProperty.includes(i))):cs=e.filter(s=>s.tagsProperty.length===0)})}catch(n){console.log(n)}return e=cs.concat(ls),console.log(e),Sg.set(e)}function cd(t,e,n){const s=t.slice();return s[16]=e[n],s}function ud(t){let e,n=t[2],s=[];for(let i=0;i<n.length;i+=1)s[i]=hd(cd(t,n,i));return{c(){for(let i=0;i<s.length;i+=1)s[i].c();e=vn()},m(i,r){for(let o=0;o<s.length;o+=1)s[o].m(i,r);w(i,e,r)},p(i,r){if(r&4){n=i[2];let o;for(o=0;o<n.length;o+=1){const a=cd(i,n,o);s[o]?s[o].p(a,r):(s[o]=hd(a),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(i){He(s,i),i&&b(e)}}}function hd(t){let e,n,s,i,r=t[16].name+"",o,a,l=t[16].lastname+"",c,h,f,d=t[16].locaProperty+"",m,_,v,E=t[16].tagsProperty+"",T,k,P,D=t[16].budget+"",B,$,F,H=t[16].rangeProp+"",N,U;return{c(){e=p("div"),n=p("input"),s=y(),i=p("div"),o=S(r),a=y(),c=S(l),h=y(),f=p("div"),m=S(d),_=y(),v=p("div"),T=S(E),k=y(),P=p("div"),B=S(D),$=y(),F=p("div"),N=S(H),U=y(),g(n,"type","checkbox"),g(e,"class","conInt svelte-1s75tnf")},m(O,K){w(O,e,K),u(e,n),u(e,s),u(e,i),u(i,o),u(i,a),u(i,c),u(e,h),u(e,f),u(f,m),u(e,_),u(e,v),u(v,T),u(e,k),u(e,P),u(P,B),u(e,$),u(e,F),u(F,N),u(e,U)},p(O,K){K&4&&r!==(r=O[16].name+"")&&re(o,r),K&4&&l!==(l=O[16].lastname+"")&&re(c,l),K&4&&d!==(d=O[16].locaProperty+"")&&re(m,d),K&4&&E!==(E=O[16].tagsProperty+"")&&re(T,E),K&4&&D!==(D=O[16].budget+"")&&re(B,D),K&4&&H!==(H=O[16].rangeProp+"")&&re(N,H)},d(O){O&&b(e)}}}function zI(t){let e,n,s,i,r,o,a,l,c,h=t[1].claveEB+"",f,d,m=t[1].nameProperty+"",_,v,E,T=t[1].selecTP+"",k,P,D=t[1].colonia+"",B,$,F=t[1].locaProperty+"",H,N,U,O,K,Y=t[1].price+"",ie,Q,W,te,x=t[1].beds+"",A,z,L=t[1].bathroom+"",R,ce,fe=t[1].halfBathroom+"",Se,Ce,nt,be,Ve=t[1].areaBuilding+"",Be,bt,q=t[1].areaTotal+"",ne,ft,dn,Je,_t=t[1].description+"",Ct,pn,st,wt,Nt,Ot,At,$t,ct,dt,ze,Le,St,Ne,sn,Ye,it,ut,Qt,Xe,xt,ht,kt,we,Et,ke=t[0]&&ud(t);return{c(){e=p("div"),n=p("div"),s=p("div"),i=p("img"),a=y(),l=p("div"),c=p("h4"),f=S(h),d=y(),_=S(m),v=y(),E=p("h5"),k=S(T),P=S(" en Col. "),B=S(D),$=S(" al "),H=S(F),N=S(" de la ciudad."),U=y(),O=p("h6"),K=S("Precio: "),ie=S(Y),Q=y(),W=p("div"),te=p("h6"),A=S(x),z=S(" Recamaras, "),R=S(L),ce=S(" Ba\xF1os y "),Se=S(fe),Ce=S(" Medio Ba\xF1o"),nt=y(),be=p("h6"),Be=S(Ve),bt=S(" m2 de construcci\xF3n y "),ne=S(q),ft=S(" m2 de terreno"),dn=y(),Je=p("p"),Ct=S(_t),pn=y(),st=p("div"),wt=p("a"),Nt=S("Seguir Link en Otra Ventana"),At=y(),$t=p("div"),ct=p("button"),ct.textContent="Enviar por WhatsApp",dt=y(),ze=p("button"),ze.textContent="Buscar Interesados",Le=y(),St=p("div"),Ne=p("button"),Ne.textContent="Regresar",sn=y(),Ye=p("div"),it=p("img"),Qt=y(),Xe=p("img"),ht=y(),ke&&ke.c(),kt=vn(),Tt(i.src,r=t[1].urlImage)||g(i,"src",r),g(i,"alt",o=t[1].nameProperty),g(s,"class","selectImage svelte-1s75tnf"),g(Je,"class","descSelec"),g(l,"class","descSelect"),g(wt,"href",Ot=t[1].urlProp),g(wt,"target","_blank"),g(st,"class","folowLink"),g(ct,"class","btnCommon btnWhatsApp"),g(ze,"class","btnCommon"),g($t,"class","optionsSend"),g(Ne,"class","btnCommon btnCancel"),g(St,"class","backAnt"),Tt(it.src,ut=m_)||g(it,"src",ut),g(it,"alt","delete"),Tt(Xe.src,xt=p_)||g(Xe,"src",xt),g(Xe,"alt","delete"),g(Ye,"class","icon__Content"),g(n,"class","sele__info svelte-1s75tnf"),g(e,"class","sele__Product svelte-1s75tnf")},m(Te,de){w(Te,e,de),u(e,n),u(n,s),u(s,i),u(n,a),u(n,l),u(l,c),u(c,f),u(c,d),u(c,_),u(l,v),u(l,E),u(E,k),u(E,P),u(E,B),u(E,$),u(E,H),u(E,N),u(l,U),u(l,O),u(O,K),u(O,ie),u(l,Q),u(l,W),u(W,te),u(te,A),u(te,z),u(te,R),u(te,ce),u(te,Se),u(te,Ce),u(l,nt),u(l,be),u(be,Be),u(be,bt),u(be,ne),u(be,ft),u(l,dn),u(l,Je),u(Je,Ct),u(n,pn),u(n,st),u(st,wt),u(wt,Nt),u(n,At),u(n,$t),u($t,ct),u($t,dt),u($t,ze),u(n,Le),u(n,St),u(St,Ne),u(n,sn),u(n,Ye),u(Ye,it),u(Ye,Qt),u(Ye,Xe),w(Te,ht,de),ke&&ke.m(Te,de),w(Te,kt,de),we||(Et=[j(ct,"click",t[8]),j(ze,"click",t[6]),j(Ne,"click",t[7]),j(it,"click",t[4]),j(Xe,"click",t[5])],we=!0)},p(Te,[de]){de&2&&!Tt(i.src,r=Te[1].urlImage)&&g(i,"src",r),de&2&&o!==(o=Te[1].nameProperty)&&g(i,"alt",o),de&2&&h!==(h=Te[1].claveEB+"")&&re(f,h),de&2&&m!==(m=Te[1].nameProperty+"")&&re(_,m),de&2&&T!==(T=Te[1].selecTP+"")&&re(k,T),de&2&&D!==(D=Te[1].colonia+"")&&re(B,D),de&2&&F!==(F=Te[1].locaProperty+"")&&re(H,F),de&2&&Y!==(Y=Te[1].price+"")&&re(ie,Y),de&2&&x!==(x=Te[1].beds+"")&&re(A,x),de&2&&L!==(L=Te[1].bathroom+"")&&re(R,L),de&2&&fe!==(fe=Te[1].halfBathroom+"")&&re(Se,fe),de&2&&Ve!==(Ve=Te[1].areaBuilding+"")&&re(Be,Ve),de&2&&q!==(q=Te[1].areaTotal+"")&&re(ne,q),de&2&&_t!==(_t=Te[1].description+"")&&re(Ct,_t),de&2&&Ot!==(Ot=Te[1].urlProp)&&g(wt,"href",Ot),Te[0]?ke?ke.p(Te,de):(ke=ud(Te),ke.c(),ke.m(kt.parentNode,kt)):ke&&(ke.d(1),ke=null)},i:ue,o:ue,d(Te){Te&&b(e),Te&&b(ht),ke&&ke.d(Te),Te&&b(kt),we=!1,tt(Et)}}}function GI(t,e,n){let s,i,r;je(t,gt,m=>n(10,s=m)),je(t,rt,m=>n(1,i=m)),je(t,Sg,m=>n(2,r=m)),Qs();let o=[],a=!1;function l(){console.log("propEditing"),ot(gt,s="propEditing",s),console.log("propEditing")}async function c(){confirm("Deseas eleiminar definitivamente la propiedad?")&&(console.log("Borraste al propiedad"),await ka(is(Ft,"properties",i.id)),ot(gt,s="start",s))}function h(){KI(i,fr),n(0,a=!0)}function f(){ot(rt,i=[],i),ot(gt,s="start",s)}return[a,i,r,o,l,c,h,f,()=>void 0]}class WI extends xe{constructor(e){super(),Qe(this,e,GI,zI,Ke,{})}}function QI(t){let e;return{c(){e=S("Editar")},m(n,s){w(n,e,s)},d(n){n&&b(e)}}}function xI(t){let e;return{c(){e=S("Guardar")},m(n,s){w(n,e,s)},d(n){n&&b(e)}}}function YI(t){let e,n,s,i,r,o,a,l,c,h,f,d,m,_,v,E;l=new PI({});function T(D,B){return D[0]==="propAdding"?xI:QI}let k=T(t),P=k(t);return{c(){e=p("form"),n=p("div"),s=p("div"),i=p("img"),a=y(),le(l.$$.fragment),c=y(),h=p("div"),f=p("button"),P.c(),d=y(),m=p("button"),m.textContent="Cancel",Tt(i.src,r=t[1].urlImage)||g(i,"src",r),g(i,"alt",o=t[1].nameProperty),g(i,"class","svelte-166hnhc"),g(f,"class","btn-save"),g(m,"class","btn-cancel"),g(h,"class","contSavCan svelte-166hnhc"),g(n,"class","altaContactos"),g(e,"class","propiedad")},m(D,B){w(D,e,B),u(e,n),u(n,s),u(s,i),u(s,a),oe(l,s,null),u(n,c),u(n,h),u(h,f),P.m(f,null),u(h,d),u(h,m),_=!0,v||(E=[j(m,"click",t[3]),j(e,"submit",Cn(t[2]))],v=!0)},p(D,[B]){(!_||B&2&&!Tt(i.src,r=D[1].urlImage))&&g(i,"src",r),(!_||B&2&&o!==(o=D[1].nameProperty))&&g(i,"alt",o),k!==(k=T(D))&&(P.d(1),P=k(D),P&&(P.c(),P.m(f,null)))},i(D){_||(V(l.$$.fragment,D),_=!0)},o(D){G(l.$$.fragment,D),_=!1},d(D){D&&b(e),ae(l),P.d(),v=!1,tt(E)}}}function XI(t,e,n){let s,i;je(t,gt,c=>n(0,s=c)),je(t,rt,c=>n(1,i=c));let r=0;const o=Qs();async function a(){if(console.log("Estas en add property",s,i),s==="propEditing")console.log("estas dentro de edit property",i.id),await wa(is(Ft,"properties",i.id),i);else{r=Date.now(),ot(rt,i={...i,createdAt:r},i),console.log(i);const c=Mn(Ft,"properties");await Ms(c,i)}ot(gt,s="start",s)}return[s,i,a,()=>{o("./")}]}class g_ extends xe{constructor(e){super(),Qe(this,e,XI,YI,Ke,{})}}function fd(t,e,n){const s=t.slice();return s[23]=e[n],s[25]=n,s}function dd(t,e,n){const s=t.slice();return s[25]=e[n],s}function pd(t,e,n){const s=t.slice();return s[12]=e[n],s[25]=n,s}function md(t){let e,n,s,i,r,o,a,l,c,h,f,d,m,_,v,E,T,k,P,D,B,$,F;function H(A){t[14](A)}let N={};t[3]!==void 0&&(N.searchTerm=t[3]),r=new tu({props:N}),Jn.push(()=>Vs(r,"searchTerm",H)),r.$on("input",t[11]);let U=t[1],O=[];for(let A=0;A<U.length;A+=1)O[A]=_d(pd(t,U,A));const K=A=>G(O[A],1,1,()=>{O[A]=null});let Y=t[0]>1&&vd(t),ie=[3,2,1],Q=[];for(let A=0;A<3;A+=1)Q[A]=bd(dd(t,ie,A));let W=Array(3),te=[];for(let A=0;A<W.length;A+=1)te[A]=kd(fd(t,W,A));let x=t[0]<t[5]&&Ed(t);return{c(){e=p("h2"),e.textContent=`${Bn.length} Propiedades a Mostrar`,n=y(),s=p("button"),s.textContent="Alta de Propiedad",i=y(),le(r.$$.fragment),a=y(),l=p("div"),c=p("main");for(let A=0;A<O.length;A+=1)O[A].c();h=y(),f=p("div"),d=p("div"),m=p("ul"),Y&&Y.c(),_=y();for(let A=0;A<3;A+=1)Q[A].c();v=y(),E=p("li"),T=p("span"),k=S(t[0]),P=y();for(let A=0;A<te.length;A+=1)te[A].c();D=y(),x&&x.c(),g(c,"id","bookshelf"),g(c,"class","svelte-elvgtg"),g(m,"class","pagi__options"),g(d,"class","pagi__Item"),g(f,"class","container pagination"),g(l,"class","mosPag")},m(A,z){w(A,e,z),w(A,n,z),w(A,s,z),w(A,i,z),oe(r,A,z),w(A,a,z),w(A,l,z),u(l,c);for(let L=0;L<O.length;L+=1)O[L].m(c,null);u(l,h),u(l,f),u(f,d),u(d,m),Y&&Y.m(m,null),u(m,_);for(let L=0;L<3;L+=1)Q[L].m(m,null);u(m,v),u(m,E),u(E,T),u(T,k),u(m,P);for(let L=0;L<te.length;L+=1)te[L].m(m,null);u(m,D),x&&x.m(m,null),B=!0,$||(F=j(s,"click",t[10]),$=!0)},p(A,z){const L={};if(!o&&z&8&&(o=!0,L.searchTerm=A[3],Fs(()=>o=!1)),r.$set(L),z&534){U=A[1];let R;for(R=0;R<U.length;R+=1){const ce=pd(A,U,R);O[R]?(O[R].p(ce,z),V(O[R],1)):(O[R]=_d(ce),O[R].c(),V(O[R],1),O[R].m(c,null))}for(Mt(),R=U.length;R<O.length;R+=1)K(R);Ut()}if(A[0]>1?Y?Y.p(A,z):(Y=vd(A),Y.c(),Y.m(m,_)):Y&&(Y.d(1),Y=null),z&257){ie=[3,2,1];let R;for(R=0;R<3;R+=1){const ce=dd(A,ie,R);Q[R]?Q[R].p(ce,z):(Q[R]=bd(ce),Q[R].c(),Q[R].m(m,v))}for(;R<3;R+=1)Q[R].d(1)}if((!B||z&1)&&re(k,A[0]),z&289){W=Array(3);let R;for(R=0;R<W.length;R+=1){const ce=fd(A,W,R);te[R]?te[R].p(ce,z):(te[R]=kd(ce),te[R].c(),te[R].m(m,D))}for(;R<te.length;R+=1)te[R].d(1);te.length=W.length}A[0]<A[5]?x?x.p(A,z):(x=Ed(A),x.c(),x.m(m,null)):x&&(x.d(1),x=null)},i(A){if(!B){V(r.$$.fragment,A);for(let z=0;z<U.length;z+=1)V(O[z]);B=!0}},o(A){G(r.$$.fragment,A),O=O.filter(Boolean);for(let z=0;z<O.length;z+=1)G(O[z]);B=!1},d(A){A&&b(e),A&&b(n),A&&b(s),A&&b(i),ae(r,A),A&&b(a),A&&b(l),He(O,A),Y&&Y.d(),He(Q,A),He(te,A),x&&x.d(),$=!1,F()}}}function gd(t){let e,n,s,i,r,o,a;const l=[t[12]];let c={};for(let f=0;f<l.length;f+=1)c=Gt(c,l[f]);n=new u_({props:c});function h(){return t[15](t[12])}return{c(){e=p("section"),le(n.$$.fragment),s=y(),g(e,"class","property svelte-elvgtg")},m(f,d){w(f,e,d),oe(n,e,null),u(e,s),r=!0,o||(a=j(e,"click",h),o=!0)},p(f,d){t=f;const m=d&2?Sn(l,[Zn(t[12])]):{};n.$set(m)},i(f){r||(V(n.$$.fragment,f),et(()=>{i||(i=Tn(e,Ei,{duration:500,easing:ki},!0)),i.run(1)}),r=!0)},o(f){G(n.$$.fragment,f),i||(i=Tn(e,Ei,{duration:500,easing:ki},!1)),i.run(0),r=!1},d(f){f&&b(e),ae(n),f&&i&&i.end(),o=!1,a()}}}function _d(t){let e,n,s=t[25]>=t[4]&&t[25]<t[2]&&gd(t);return{c(){s&&s.c(),e=vn()},m(i,r){s&&s.m(i,r),w(i,e,r),n=!0},p(i,r){i[25]>=i[4]&&i[25]<i[2]?s?(s.p(i,r),r&20&&V(s,1)):(s=gd(i),s.c(),V(s,1),s.m(e.parentNode,e)):s&&(Mt(),G(s,1,1,()=>{s=null}),Ut())},i(i){n||(V(s),n=!0)},o(i){G(s),n=!1},d(i){s&&s.d(i),i&&b(e)}}}function vd(t){let e,n,s,i,r,o,a,l,c;return{c(){e=p("li"),n=p("a"),n.textContent="first",s=y(),i=p("li"),r=p("a"),o=S("previous"),g(n,"href","/blog"),g(r,"href",a="/blog/"+(t[0]-1))},m(h,f){w(h,e,f),u(e,n),w(h,s,f),w(h,i,f),u(i,r),u(r,o),l||(c=[j(n,"click",Cn(t[16])),j(r,"click",Cn(t[17]))],l=!0)},p(h,f){f&1&&a!==(a="/blog/"+(h[0]-1))&&g(r,"href",a)},d(h){h&&b(e),h&&b(s),h&&b(i),l=!1,tt(c)}}}function yd(t){let e,n,s=t[0]-t[25]+"",i,r,o,a;function l(){return t[18](t[25])}return{c(){e=p("li"),n=p("a"),i=S(s),g(n,"href",r="/blog/"+(t[0]-t[25]))},m(c,h){w(c,e,h),u(e,n),u(n,i),o||(a=j(n,"click",Cn(l)),o=!0)},p(c,h){t=c,h&1&&s!==(s=t[0]-t[25]+"")&&re(i,s),h&1&&r!==(r="/blog/"+(t[0]-t[25]))&&g(n,"href",r)},d(c){c&&b(e),o=!1,a()}}}function bd(t){let e,n=t[0]-t[25]>0&&yd(t);return{c(){n&&n.c(),e=vn()},m(s,i){n&&n.m(s,i),w(s,e,i)},p(s,i){s[0]-s[25]>0?n?n.p(s,i):(n=yd(s),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(s){n&&n.d(s),s&&b(e)}}}function wd(t){let e,n,s=t[0]+(t[25]+1)+"",i,r,o,a;function l(){return t[19](t[25])}return{c(){e=p("li"),n=p("a"),i=S(s),g(n,"href",r="/blog/"+(t[0]+(t[25]+1)))},m(c,h){w(c,e,h),u(e,n),u(n,i),o||(a=j(n,"click",Cn(l)),o=!0)},p(c,h){t=c,h&1&&s!==(s=t[0]+(t[25]+1)+"")&&re(i,s),h&1&&r!==(r="/blog/"+(t[0]+(t[25]+1)))&&g(n,"href",r)},d(c){c&&b(e),o=!1,a()}}}function kd(t){let e,n=t[0]+(t[25]+1)<=t[5]&&wd(t);return{c(){n&&n.c(),e=vn()},m(s,i){n&&n.m(s,i),w(s,e,i)},p(s,i){s[0]+(s[25]+1)<=s[5]?n?n.p(s,i):(n=wd(s),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(s){n&&n.d(s),s&&b(e)}}}function Ed(t){let e,n,s,i,r,o,a,l,c,h,f;return{c(){e=p("li"),n=p("a"),s=S("next"),r=y(),o=p("li"),a=p("a"),l=S("last"),g(n,"href",i="/blog/"+(t[0]+1)),g(a,"href",c="/blog/"+t[5])},m(d,m){w(d,e,m),u(e,n),u(n,s),w(d,r,m),w(d,o,m),u(o,a),u(a,l),h||(f=[j(n,"click",Cn(t[20])),j(a,"click",Cn(t[21]))],h=!0)},p(d,m){m&1&&i!==(i="/blog/"+(d[0]+1))&&g(n,"href",i),m&32&&c!==(c="/blog/"+d[5])&&g(a,"href",c)},d(d){d&&b(e),d&&b(r),d&&b(o),h=!1,tt(f)}}}function Td(t){let e,n,s;const i=[t[7]];let r={};for(let o=0;o<i.length;o+=1)r=Gt(r,i[o]);return n=new WI({props:r}),{c(){e=p("div"),le(n.$$.fragment)},m(o,a){w(o,e,a),oe(n,e,null),s=!0},p(o,a){const l=a&128?Sn(i,[Zn(o[7])]):{};n.$set(l)},i(o){s||(V(n.$$.fragment,o),s=!0)},o(o){G(n.$$.fragment,o),s=!1},d(o){o&&b(e),ae(n)}}}function Id(t){let e,n,s;const i=[t[7]];let r={};for(let o=0;o<i.length;o+=1)r=Gt(r,i[o]);return n=new g_({props:r}),{c(){e=p("div"),le(n.$$.fragment),g(e,"class","container")},m(o,a){w(o,e,a),oe(n,e,null),s=!0},p(o,a){const l=a&128?Sn(i,[Zn(o[7])]):{};n.$set(l)},i(o){s||(V(n.$$.fragment,o),s=!0)},o(o){G(n.$$.fragment,o),s=!1},d(o){o&&b(e),ae(n)}}}function Cd(t){let e,n,s;return n=new g_({}),{c(){e=p("div"),le(n.$$.fragment),g(e,"class","container")},m(i,r){w(i,e,r),oe(n,e,null),s=!0},i(i){s||(V(n.$$.fragment,i),s=!0)},o(i){G(n.$$.fragment,i),s=!1},d(i){i&&b(e),ae(n)}}}function JI(t){let e,n,s,i,r,o,a,l,c,h,f,d=t[6]==="start"&&md(t),m=t[6]==="propSelect"&&Td(t),_=t[6]==="propEditing"&&Id(t),v=t[6]==="propAdding"&&Cd();return{c(){e=p("div"),n=p("div"),s=p("h1"),s.textContent="Propiedades",i=y(),r=p("img"),a=y(),d&&d.c(),l=y(),m&&m.c(),c=y(),_&&_.c(),h=y(),v&&v.c(),Tt(r.src,o=l_)||g(r,"src",o),g(r,"alt","propiedad"),g(r,"class","imgTitle svelte-elvgtg"),g(e,"class","container")},m(E,T){w(E,e,T),u(e,n),u(n,s),u(n,i),u(n,r),u(e,a),d&&d.m(e,null),u(e,l),m&&m.m(e,null),u(e,c),_&&_.m(e,null),u(e,h),v&&v.m(e,null),f=!0},p(E,[T]){E[6]==="start"?d?(d.p(E,T),T&64&&V(d,1)):(d=md(E),d.c(),V(d,1),d.m(e,l)):d&&(Mt(),G(d,1,1,()=>{d=null}),Ut()),E[6]==="propSelect"?m?(m.p(E,T),T&64&&V(m,1)):(m=Td(E),m.c(),V(m,1),m.m(e,c)):m&&(Mt(),G(m,1,1,()=>{m=null}),Ut()),E[6]==="propEditing"?_?(_.p(E,T),T&64&&V(_,1)):(_=Id(E),_.c(),V(_,1),_.m(e,h)):_&&(Mt(),G(_,1,1,()=>{_=null}),Ut()),E[6]==="propAdding"?v?T&64&&V(v,1):(v=Cd(),v.c(),V(v,1),v.m(e,null)):v&&(Mt(),G(v,1,1,()=>{v=null}),Ut())},i(E){f||(V(d),V(m),V(_),V(v),f=!0)},o(E){G(d),G(m),G(_),G(v),f=!1},d(E){E&&b(e),d&&d.d(),m&&m.d(),_&&_.d(),v&&v.d()}}}let el=20;function ZI(t,e,n){let s,i,r,o,a,l;je(t,gt,N=>n(6,a=N)),je(t,rt,N=>n(7,l=N));let c,h;ot(gt,a="start",a);let f=1,d=Bn;const m=N=>{n(0,f=N)};d=Bn;function _(N){console.log(N),ot(rt,l=N,l),ot(gt,a="propSelect",a)}function v(){ot(gt,a="propAdding",a)}function E(){return n(1,d=Bn.filter(N=>(N.nameProperty+" "+N.colonia).toLowerCase().includes(c.toLowerCase())))}n(1,d=Bn.sort((N,U)=>N.createdAt<U.createdAt?1:N.createdAt>U.createdAt?-1:0));function T(N){c=N,n(3,c)}const k=N=>_(N),P=()=>m(1),D=()=>m(f-1),B=N=>m(f-N),$=N=>m(f+(N+1)),F=()=>m(f+1),H=()=>m(i);return t.$$.update=()=>{t.$$.dirty&2&&n(13,s=d.length),t.$$.dirty&8192&&n(5,i=Math.ceil(s/el)),t.$$.dirty&1&&n(2,r=f*el),t.$$.dirty&4&&n(4,o=r-el)},[f,d,r,c,o,i,a,l,m,_,v,E,h,s,T,k,P,D,B,$,F,H]}class eC extends xe{constructor(e){super(),Qe(this,e,ZI,JI,Ke,{})}}function tC(t){let e;return{c(){e=p("h1"),e.textContent="Captacion"},m(n,s){w(n,e,s)},p:ue,i:ue,o:ue,d(n){n&&b(e)}}}class nC extends xe{constructor(e){super(),Qe(this,e,null,tC,Ke,{})}}function sC(t){let e,n,s,i,r=t[0].task+"",o;return{c(){e=p("div"),n=p("h1"),n.textContent="Estas en About",s=y(),i=p("h3"),o=S(r),g(e,"class","cont")},m(a,l){w(a,e,l),u(e,n),u(e,s),u(e,i),u(i,o)},p(a,[l]){l&1&&r!==(r=a[0].task+"")&&re(o,r)},i:ue,o:ue,d(a){a&&b(e)}}}function iC(t,e,n){let s;return je(t,Rn,i=>n(0,s=i)),[s]}class rC extends xe{constructor(e){super(),Qe(this,e,iC,sC,Ke,{})}}function oC(t){let e,n,s,i;return{c(){e=p("div"),n=p("div"),s=S(t[0]),g(n,"id","snackbar"),g(n,"class",i=ou(t[1]?"animation-in":"not-show")+" svelte-1e3w4r3")},m(r,o){w(r,e,o),u(e,n),u(n,s)},p(r,[o]){o&1&&re(s,r[0]),o&2&&i!==(i=ou(r[1]?"animation-in":"not-show")+" svelte-1e3w4r3")&&g(n,"class",i)},i:ue,o:ue,d(r){r&&b(e)}}}function aC(t,e,n){let{message:s=""}=e,{show:i=!1}=e;return t.$$set=r=>{"message"in r&&n(0,s=r.message),"show"in r&&n(1,i=r.show)},[s,i]}class lC extends xe{constructor(e){super(),Qe(this,e,aC,oC,Ke,{message:0,show:1})}}function cC(t){let e;return{c(){e=S("Registrarse")},m(n,s){w(n,e,s)},d(n){n&&b(e)}}}function uC(t){let e,n,s,i,r,o,a,l,c,h,f,d,m,_,v,E,T,k,P,D,B,$,F,H,N,U,O,K,Y,ie,Q;return n=new lC({props:{message:t[0],show:t[1]}}),K=new kn({props:{to:"/register",$$slots:{default:[cC]},$$scope:{ctx:t}}}),{c(){e=p("div"),le(n.$$.fragment),s=y(),i=p("br"),r=p("br"),o=p("br"),a=y(),l=p("div"),c=p("h1"),c.textContent="Inicia sesi\xF3n en tu cuenta",h=y(),f=p("div"),d=p("input"),m=y(),_=p("div"),v=p("input"),E=y(),T=p("br"),k=y(),P=p("div"),D=p("button"),D.textContent="Iniciar sesi\xF3n",B=y(),$=p("p"),$.textContent="O tambi\xE9n",F=y(),H=p("br"),N=y(),U=p("p"),O=S("\xBFA\xFAn no tienes cuenta? "),le(K.$$.fragment),g(c,"class","text-center text-login svelte-ftg4em"),g(d,"name","email"),g(d,"type","text"),g(d,"class","input-form svelte-ftg4em"),g(d,"placeholder","Correo"),g(f,"class","center svelte-ftg4em"),g(v,"name","password"),g(v,"type","password"),g(v,"class","input-form svelte-ftg4em"),g(v,"placeholder","Contrase\xF1a"),g(_,"class","center svelte-ftg4em"),g(D,"class","button-signup fondo-color-signup svelte-ftg4em"),g(P,"class","center svelte-ftg4em"),g($,"class","text-center svelte-ftg4em"),g(U,"class","text-center svelte-ftg4em"),g(l,"class","form-signin svelte-ftg4em")},m(W,te){w(W,e,te),oe(n,e,null),u(e,s),u(e,i),u(e,r),u(e,o),u(e,a),u(e,l),u(l,c),u(l,h),u(l,f),u(f,d),u(l,m),u(l,_),u(_,v),u(l,E),u(l,T),u(l,k),u(l,P),u(P,D),u(l,B),u(l,$),u(l,F),u(l,H),u(l,N),u(l,U),u(U,O),oe(K,U,null),Y=!0,ie||(Q=[j(d,"input",t[4]),j(v,"input",t[5]),j(D,"click",t[3])],ie=!0)},p(W,[te]){const x={};te&1&&(x.message=W[0]),te&2&&(x.show=W[1]),n.$set(x);const A={};te&512&&(A.$$scope={dirty:te,ctx:W}),K.$set(A)},i(W){Y||(V(n.$$.fragment,W),V(K.$$.fragment,W),Y=!0)},o(W){G(n.$$.fragment,W),G(K.$$.fragment,W),Y=!1},d(W){W&&b(e),ae(n),ae(K),ie=!1,tt(Q)}}}function hC(t,e,n){const s=Qs();let i={email:"",password:""},r="",o=!1;const a=d=>{n(0,r=d),n(1,o=!0),setTimeout(()=>{n(1,o=!1)},2800)},l=d=>{i={...i,[d.target.name]:d.target.value}};return[r,o,l,async()=>{try{await iE(i_,i.email,i.password),s("/")}catch(d){d.message==="Firebase: Error (auth/wrong-password)."&&a("Contrase\xF1a incorrecta")}},d=>l(d),d=>l(d)]}class fC extends xe{constructor(e){super(),Qe(this,e,hC,uC,Ke,{})}}class dC extends xe{constructor(e){super(),Qe(this,e,null,null,Ke,{})}}function pC(t){let e;return{c(){e=S("Home")},m(n,s){w(n,e,s)},d(n){n&&b(e)}}}function mC(t){let e;return{c(){e=S("Contactos")},m(n,s){w(n,e,s)},d(n){n&&b(e)}}}function gC(t){let e;return{c(){e=S("Propiedades")},m(n,s){w(n,e,s)},d(n){n&&b(e)}}}function _C(t){let e;return{c(){e=S("Agenda")},m(n,s){w(n,e,s)},d(n){n&&b(e)}}}function vC(t){let e;return{c(){e=S("LogOut")},m(n,s){w(n,e,s)},d(n){n&&b(e)}}}function yC(t){let e;return{c(){e=S("About")},m(n,s){w(n,e,s)},d(n){n&&b(e)}}}function bC(t){let e;return{c(){e=S("Registro")},m(n,s){w(n,e,s)},d(n){n&&b(e)}}}function wC(t){let e;return{c(){e=S("Login")},m(n,s){w(n,e,s)},d(n){n&&b(e)}}}function kC(t){let e,n;return e=new oI({}),{c(){le(e.$$.fragment)},m(s,i){oe(e,s,i),n=!0},i(s){n||(V(e.$$.fragment,s),n=!0)},o(s){G(e.$$.fragment,s),n=!1},d(s){ae(e,s)}}}function EC(t){let e,n;return e=new HI({}),{c(){le(e.$$.fragment)},m(s,i){oe(e,s,i),n=!0},i(s){n||(V(e.$$.fragment,s),n=!0)},o(s){G(e.$$.fragment,s),n=!1},d(s){ae(e,s)}}}function TC(t){let e,n;return e=new eC({}),{c(){le(e.$$.fragment)},m(s,i){oe(e,s,i),n=!0},i(s){n||(V(e.$$.fragment,s),n=!0)},o(s){G(e.$$.fragment,s),n=!1},d(s){ae(e,s)}}}function IC(t){let e,n;return e=new nC({}),{c(){le(e.$$.fragment)},m(s,i){oe(e,s,i),n=!0},i(s){n||(V(e.$$.fragment,s),n=!0)},o(s){G(e.$$.fragment,s),n=!1},d(s){ae(e,s)}}}function CC(t){let e,n;return e=new r_({}),{c(){le(e.$$.fragment)},m(s,i){oe(e,s,i),n=!0},i(s){n||(V(e.$$.fragment,s),n=!0)},o(s){G(e.$$.fragment,s),n=!1},d(s){ae(e,s)}}}function SC(t){let e,n;return e=new o_({}),{c(){le(e.$$.fragment)},m(s,i){oe(e,s,i),n=!0},i(s){n||(V(e.$$.fragment,s),n=!0)},o(s){G(e.$$.fragment,s),n=!1},d(s){ae(e,s)}}}function AC(t){let e,n;return e=new rC({}),{c(){le(e.$$.fragment)},m(s,i){oe(e,s,i),n=!0},i(s){n||(V(e.$$.fragment,s),n=!0)},o(s){G(e.$$.fragment,s),n=!1},d(s){ae(e,s)}}}function DC(t){let e,n;return e=new dC({}),{c(){le(e.$$.fragment)},m(s,i){oe(e,s,i),n=!0},i(s){n||(V(e.$$.fragment,s),n=!0)},o(s){G(e.$$.fragment,s),n=!1},d(s){ae(e,s)}}}function RC(t){let e,n;return e=new fC({}),{c(){le(e.$$.fragment)},m(s,i){oe(e,s,i),n=!0},i(s){n||(V(e.$$.fragment,s),n=!0)},o(s){G(e.$$.fragment,s),n=!1},d(s){ae(e,s)}}}function PC(t){let e,n;return e=new eu({}),{c(){le(e.$$.fragment)},m(s,i){oe(e,s,i),n=!0},i(s){n||(V(e.$$.fragment,s),n=!0)},o(s){G(e.$$.fragment,s),n=!1},d(s){ae(e,s)}}}function NC(t){let e,n,s,i,r,o,a,l,c,h,f,d,m,_,v,E,T,k,P,D,B,$,F,H,N,U,O,K,Y,ie,Q,W,te,x,A,z,L,R,ce,fe,Se,Ce,nt,be,Ve,Be,bt;return d=new kn({props:{to:"/",$$slots:{default:[pC]},$$scope:{ctx:t}}}),_=new kn({props:{to:"contactos",$$slots:{default:[mC]},$$scope:{ctx:t}}}),E=new kn({props:{to:"propiedades",$$slots:{default:[gC]},$$scope:{ctx:t}}}),k=new kn({props:{to:"agenda",$$slots:{default:[_C]},$$scope:{ctx:t}}}),D=new kn({props:{to:"/about",$$slots:{default:[vC]},$$scope:{ctx:t}}}),D.$on("click",t[0]),$=new kn({props:{to:"about",$$slots:{default:[yC]},$$scope:{ctx:t}}}),H=new kn({props:{to:"register",$$slots:{default:[bC]},$$scope:{ctx:t}}}),U=new kn({props:{to:"login",$$slots:{default:[wC]},$$scope:{ctx:t}}}),K=new wn({props:{path:"/",$$slots:{default:[kC]},$$scope:{ctx:t}}}),ie=new wn({props:{path:"/contactos",$$slots:{default:[EC]},$$scope:{ctx:t}}}),W=new wn({props:{path:"propiedades",$$slots:{default:[TC]},$$scope:{ctx:t}}}),x=new wn({props:{path:"captacion",$$slots:{default:[IC]},$$scope:{ctx:t}}}),z=new wn({props:{path:"agenda",$$slots:{default:[CC]},$$scope:{ctx:t}}}),R=new wn({props:{path:"sinergias",$$slots:{default:[SC]},$$scope:{ctx:t}}}),fe=new wn({props:{path:"about",$$slots:{default:[AC]},$$scope:{ctx:t}}}),Ce=new wn({props:{path:"logout",$$slots:{default:[DC]},$$scope:{ctx:t}}}),be=new wn({props:{path:"login",$$slots:{default:[RC]},$$scope:{ctx:t}}}),Be=new wn({props:{path:"register",$$slots:{default:[PC]},$$scope:{ctx:t}}}),{c(){e=p("div"),n=p("img"),i=y(),r=p("label"),o=p("img"),l=y(),c=p("input"),h=y(),f=p("div"),le(d.$$.fragment),m=y(),le(_.$$.fragment),v=y(),le(E.$$.fragment),T=y(),le(k.$$.fragment),P=y(),le(D.$$.fragment),B=y(),le($.$$.fragment),F=y(),le(H.$$.fragment),N=y(),le(U.$$.fragment),O=y(),le(K.$$.fragment),Y=y(),le(ie.$$.fragment),Q=y(),le(W.$$.fragment),te=y(),le(x.$$.fragment),A=y(),le(z.$$.fragment),L=y(),le(R.$$.fragment),ce=y(),le(fe.$$.fragment),Se=y(),le(Ce.$$.fragment),nt=y(),le(be.$$.fragment),Ve=y(),le(Be.$$.fragment),Tt(n.src,s=op)||g(n,"src",s),g(n,"alt","MatchHome"),g(n,"class","nav__logo svelte-1viw6tr"),Tt(o.src,a=Uv)||g(o,"src",a),g(o,"class","nav__img svelte-1viw6tr"),g(o,"alt","menu"),g(r,"class","nav__label svelte-1viw6tr"),g(r,"for","menu"),g(c,"type","checkbox"),g(c,"id","menu"),g(c,"class","nav__input svelte-1viw6tr"),g(f,"class","nav__menu svelte-1viw6tr"),g(e,"class","nav__container svelte-1viw6tr")},m(q,ne){w(q,e,ne),u(e,n),u(e,i),u(e,r),u(r,o),u(e,l),u(e,c),u(e,h),u(e,f),oe(d,f,null),u(f,m),oe(_,f,null),u(f,v),oe(E,f,null),u(f,T),oe(k,f,null),u(f,P),oe(D,f,null),u(f,B),oe($,f,null),u(f,F),oe(H,f,null),u(f,N),oe(U,f,null),w(q,O,ne),oe(K,q,ne),w(q,Y,ne),oe(ie,q,ne),w(q,Q,ne),oe(W,q,ne),w(q,te,ne),oe(x,q,ne),w(q,A,ne),oe(z,q,ne),w(q,L,ne),oe(R,q,ne),w(q,ce,ne),oe(fe,q,ne),w(q,Se,ne),oe(Ce,q,ne),w(q,nt,ne),oe(be,q,ne),w(q,Ve,ne),oe(Be,q,ne),bt=!0},p(q,ne){const ft={};ne&8&&(ft.$$scope={dirty:ne,ctx:q}),d.$set(ft);const dn={};ne&8&&(dn.$$scope={dirty:ne,ctx:q}),_.$set(dn);const Je={};ne&8&&(Je.$$scope={dirty:ne,ctx:q}),E.$set(Je);const _t={};ne&8&&(_t.$$scope={dirty:ne,ctx:q}),k.$set(_t);const Ct={};ne&8&&(Ct.$$scope={dirty:ne,ctx:q}),D.$set(Ct);const pn={};ne&8&&(pn.$$scope={dirty:ne,ctx:q}),$.$set(pn);const st={};ne&8&&(st.$$scope={dirty:ne,ctx:q}),H.$set(st);const wt={};ne&8&&(wt.$$scope={dirty:ne,ctx:q}),U.$set(wt);const Nt={};ne&8&&(Nt.$$scope={dirty:ne,ctx:q}),K.$set(Nt);const Ot={};ne&8&&(Ot.$$scope={dirty:ne,ctx:q}),ie.$set(Ot);const At={};ne&8&&(At.$$scope={dirty:ne,ctx:q}),W.$set(At);const $t={};ne&8&&($t.$$scope={dirty:ne,ctx:q}),x.$set($t);const ct={};ne&8&&(ct.$$scope={dirty:ne,ctx:q}),z.$set(ct);const dt={};ne&8&&(dt.$$scope={dirty:ne,ctx:q}),R.$set(dt);const ze={};ne&8&&(ze.$$scope={dirty:ne,ctx:q}),fe.$set(ze);const Le={};ne&8&&(Le.$$scope={dirty:ne,ctx:q}),Ce.$set(Le);const St={};ne&8&&(St.$$scope={dirty:ne,ctx:q}),be.$set(St);const Ne={};ne&8&&(Ne.$$scope={dirty:ne,ctx:q}),Be.$set(Ne)},i(q){bt||(V(d.$$.fragment,q),V(_.$$.fragment,q),V(E.$$.fragment,q),V(k.$$.fragment,q),V(D.$$.fragment,q),V($.$$.fragment,q),V(H.$$.fragment,q),V(U.$$.fragment,q),V(K.$$.fragment,q),V(ie.$$.fragment,q),V(W.$$.fragment,q),V(x.$$.fragment,q),V(z.$$.fragment,q),V(R.$$.fragment,q),V(fe.$$.fragment,q),V(Ce.$$.fragment,q),V(be.$$.fragment,q),V(Be.$$.fragment,q),bt=!0)},o(q){G(d.$$.fragment,q),G(_.$$.fragment,q),G(E.$$.fragment,q),G(k.$$.fragment,q),G(D.$$.fragment,q),G($.$$.fragment,q),G(H.$$.fragment,q),G(U.$$.fragment,q),G(K.$$.fragment,q),G(ie.$$.fragment,q),G(W.$$.fragment,q),G(x.$$.fragment,q),G(z.$$.fragment,q),G(R.$$.fragment,q),G(fe.$$.fragment,q),G(Ce.$$.fragment,q),G(be.$$.fragment,q),G(Be.$$.fragment,q),bt=!1},d(q){q&&b(e),ae(d),ae(_),ae(E),ae(k),ae(D),ae($),ae(H),ae(U),q&&b(O),ae(K,q),q&&b(Y),ae(ie,q),q&&b(Q),ae(W,q),q&&b(te),ae(x,q),q&&b(A),ae(z,q),q&&b(L),ae(R,q),q&&b(ce),ae(fe,q),q&&b(Se),ae(Ce,q),q&&b(nt),ae(be,q),q&&b(Ve),ae(Be,q)}}}function OC(t){let e,n,s;return n=new Wl({props:{$$slots:{default:[NC]},$$scope:{ctx:t}}}),{c(){e=p("nav"),le(n.$$.fragment),g(e,"class","nav svelte-1viw6tr")},m(i,r){w(i,e,r),oe(n,e,null),s=!0},p(i,[r]){const o={};r&8&&(o.$$scope={dirty:r,ctx:i}),n.$set(o)},i(i){s||(V(n.$$.fragment,i),s=!0)},o(i){G(n.$$.fragment,i),s=!1},d(i){i&&b(e),ae(n)}}}function $C(t,e,n){let s;je(t,Xh,r=>n(2,s=r)),console.log("logged? ",s),Xh.subscribe(r=>{});async function i(){console.log(s)}return[i]}class LC extends xe{constructor(e){super(),Qe(this,e,$C,OC,Ke,{})}}function Sd(t){let e,n,s,i,r,o,a;return{c(){e=p("div"),n=p("h1"),n.textContent="Bienvendo a",s=y(),i=p("img"),o=y(),a=p("div"),a.innerHTML=`<p class="desc__intro svelte-1kx2964">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod aut aliquam, expedita perferendis consequatur modi omnis! Nostrum iste necessitatibus quisquam numquam, aliquam ipsum. Sit, similique quis. Fuga vitae possimus quisquam quam. Unde accusantium neque veniam reprehenderit, laborum, magni ut quasi asperiores a amet fugiat non, sapiente obcaecati voluptas ab! Nostrum!</p> 
        <p><strong>www.matchhome.net</strong></p>`,g(n,"class","title svelte-1kx2964"),Tt(i.src,r=op)||g(i,"src",r),g(i,"alt","MatchHome"),g(i,"class","svelte-1kx2964"),g(a,"class",""),g(e,"class","intro svelte-1kx2964")},m(l,c){w(l,e,c),u(e,n),u(e,s),u(e,i),u(e,o),u(e,a)},p:ue,d(l){l&&b(e)}}}function MC(t){let e,n,s,i,r;n=new LC({});let o=t[0]&&Sd();return{c(){e=p("nav"),le(n.$$.fragment),s=y(),i=p("body"),o&&o.c(),g(e,"class","navBar")},m(a,l){w(a,e,l),oe(n,e,null),w(a,s,l),w(a,i,l),o&&o.m(i,null),r=!0},p(a,[l]){a[0]?o?o.p(a,l):(o=Sd(),o.c(),o.m(i,null)):o&&(o.d(1),o=null)},i(a){r||(V(n.$$.fragment,a),r=!0)},o(a){G(n.$$.fragment,a),r=!1},d(a){a&&b(e),ae(n),a&&b(s),a&&b(i),o&&o.d()}}}function UC(t,e,n){let s=!0;return setTimeout(()=>{n(0,s=!1),console.log("object")},1500),[s]}class FC extends xe{constructor(e){super(),Qe(this,e,UC,MC,Ke,{})}}new FC({target:document.getElementById("app")});
