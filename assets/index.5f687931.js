(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function he(){}const $d=t=>t;function Mt(t,e){for(const n in e)t[n]=e[n];return t}function Ud(t){return t()}function ru(){return Object.create(null)}function xe(t){t.forEach(Ud)}function Ko(t){return typeof t=="function"}function He(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let Kr;function ct(t,e){return Kr||(Kr=document.createElement("a")),Kr.href=e,t===Kr.href}function E_(t){return Object.keys(t).length===0}function Fl(t,...e){if(t==null)return he;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function hi(t){let e;return Fl(t,n=>e=n)(),e}function Ue(t,e,n){t.$$.on_destroy.push(Fl(e,n))}function Vl(t,e,n,s){if(t){const i=Fd(t,e,n,s);return t[0](i)}}function Fd(t,e,n,s){return t[1]&&s?Mt(n.ctx.slice(),t[1](s(e))):n.ctx}function Bl(t,e,n,s){if(t[2]&&s){const i=t[2](s(n));if(e.dirty===void 0)return i;if(typeof i=="object"){const r=[],o=Math.max(e.dirty.length,i.length);for(let a=0;a<o;a+=1)r[a]=e.dirty[a]|i[a];return r}return e.dirty|i}return e.dirty}function jl(t,e,n,s,i,r){if(i){const o=Fd(e,n,s,r);t.p(o,i)}}function ql(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let s=0;s<n;s++)e[s]=-1;return e}return-1}function uo(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function ho(t,e){const n={};e=new Set(e);for(const s in t)!e.has(s)&&s[0]!=="$"&&(n[s]=t[s]);return n}function ou(t){return t==null?"":t}function We(t,e,n){return t.set(n),e}const Vd=typeof window<"u";let T_=Vd?()=>window.performance.now():()=>Date.now(),Hl=Vd?t=>requestAnimationFrame(t):he;const oi=new Set;function Bd(t){oi.forEach(e=>{e.c(t)||(oi.delete(e),e.f())}),oi.size!==0&&Hl(Bd)}function I_(t){let e;return oi.size===0&&Hl(Bd),{promise:new Promise(n=>{oi.add(e={c:t,f:n})}),abort(){oi.delete(e)}}}function u(t,e){t.appendChild(e)}function jd(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function C_(t){const e=p("style");return S_(jd(t),e),e.sheet}function S_(t,e){return u(t.head||t,e),e.sheet}function b(t,e,n){t.insertBefore(e,n||null)}function y(t){t.parentNode.removeChild(t)}function qe(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function p(t){return document.createElement(t)}function S(t){return document.createTextNode(t)}function w(){return S(" ")}function sn(){return S("")}function q(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function mn(t){return function(e){return e.preventDefault(),t.call(this,e)}}function g(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function On(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const s in e)e[s]==null?t.removeAttribute(s):s==="style"?t.style.cssText=e[s]:s==="__value"?t.value=t[s]=e[s]:n[s]&&n[s].set?t[s]=e[s]:g(t,s,e[s])}function Bt(t,e,n){const s=new Set;for(let i=0;i<t.length;i+=1)t[i].checked&&s.add(t[i].__value);return n||s.delete(e),Array.from(s)}function ds(t){return t===""?null:+t}function A_(t){return Array.from(t.childNodes)}function se(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function de(t,e){t.value=e==null?"":e}function $e(t,e){for(let n=0;n<t.options.length;n+=1){const s=t.options[n];if(s.__value===e){s.selected=!0;return}}t.selectedIndex=-1}function Vt(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}function ys(t,e,n){t.classList[n?"add":"remove"](e)}function qd(t,e,{bubbles:n=!1,cancelable:s=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,s,e),i}function au(t,e){return new t(e)}const fo=new Map;let po=0;function D_(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function R_(t,e){const n={stylesheet:C_(e),rules:{}};return fo.set(t,n),n}function lu(t,e,n,s,i,r,o,a=0){const l=16.666/s;let c=`{
`;for(let k=0;k<=1;k+=l){const E=e+(n-e)*r(k);c+=k*100+`%{${o(E,1-E)}}
`}const h=c+`100% {${o(n,1-n)}}
}`,f=`__svelte_${D_(h)}_${a}`,d=jd(t),{stylesheet:m,rules:_}=fo.get(d)||R_(d,t);_[f]||(_[f]=!0,m.insertRule(`@keyframes ${f} ${h}`,m.cssRules.length));const v=t.style.animation||"";return t.style.animation=`${v?`${v}, `:""}${f} ${s}ms linear ${i}ms 1 both`,po+=1,f}function P_(t,e){const n=(t.style.animation||"").split(", "),s=n.filter(e?r=>r.indexOf(e)<0:r=>r.indexOf("__svelte")===-1),i=n.length-s.length;i&&(t.style.animation=s.join(", "),po-=i,po||N_())}function N_(){Hl(()=>{po||(fo.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&y(e)}),fo.clear())})}let Yi;function Bi(t){Yi=t}function dr(){if(!Yi)throw new Error("Function called outside component initialization");return Yi}function O_(t){dr().$$.on_mount.push(t)}function L_(t){dr().$$.on_destroy.push(t)}function Hd(){const t=dr();return(e,n,{cancelable:s=!1}={})=>{const i=t.$$.callbacks[e];if(i){const r=qd(e,n,{cancelable:s});return i.slice().forEach(o=>{o.call(t,r)}),!r.defaultPrevented}return!0}}function ji(t,e){return dr().$$.context.set(t,e),e}function bs(t){return dr().$$.context.get(t)}function M_(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(s=>s.call(this,e))}const Oi=[],xn=[],eo=[],nl=[],Kd=Promise.resolve();let sl=!1;function zd(){sl||(sl=!0,Kd.then(Gd))}function $_(){return zd(),Kd}function Xe(t){eo.push(t)}function Fs(t){nl.push(t)}const Da=new Set;let zr=0;function Gd(){const t=Yi;do{for(;zr<Oi.length;){const e=Oi[zr];zr++,Bi(e),U_(e.$$)}for(Bi(null),Oi.length=0,zr=0;xn.length;)xn.pop()();for(let e=0;e<eo.length;e+=1){const n=eo[e];Da.has(n)||(Da.add(n),n())}eo.length=0}while(Oi.length);for(;nl.length;)nl.pop()();sl=!1,Da.clear(),Bi(t)}function U_(t){if(t.fragment!==null){t.update(),xe(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Xe)}}let Pi;function F_(){return Pi||(Pi=Promise.resolve(),Pi.then(()=>{Pi=null})),Pi}function Ra(t,e,n){t.dispatchEvent(qd(`${e?"intro":"outro"}${n}`))}const to=new Set;let zn;function kt(){zn={r:0,c:[],p:zn}}function Et(){zn.r||xe(zn.c),zn=zn.p}function K(t,e){t&&t.i&&(to.delete(t),t.i(e))}function x(t,e,n,s){if(t&&t.o){if(to.has(t))return;to.add(t),zn.c.push(()=>{to.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}const V_={duration:0};function dn(t,e,n,s){let i=e(t,n),r=s?0:1,o=null,a=null,l=null;function c(){l&&P_(t,l)}function h(d,m){const _=d.b-r;return m*=Math.abs(_),{a:r,b:d.b,d:_,duration:m,start:d.start,end:d.start+m,group:d.group}}function f(d){const{delay:m=0,duration:_=300,easing:v=$d,tick:k=he,css:E}=i||V_,I={start:T_()+m,b:d};d||(I.group=zn,zn.r+=1),o||a?a=I:(E&&(c(),l=lu(t,r,d,_,m,v,E)),d&&k(0,1),o=h(I,_),Xe(()=>Ra(t,d,"start")),I_(M=>{if(a&&M>a.start&&(o=h(a,_),a=null,Ra(t,o.b,"start"),E&&(c(),l=lu(t,r,o.b,o.duration,0,v,i.css))),o){if(M>=o.end)k(r=o.b,1-r),Ra(t,o.b,"end"),a||(o.b?c():--o.group.r||xe(o.group.c)),o=null;else if(M>=o.start){const A=M-o.start;r=o.a+o.d*v(A/o.duration),k(r,1-r)}}return!!(o||a)}))}return{run(d){Ko(i)?F_().then(()=>{i=i(),f(d)}):f(d)},end(){c(),o=a=null}}}function gn(t,e){const n={},s={},i={$$scope:1};let r=t.length;for(;r--;){const o=t[r],a=e[r];if(a){for(const l in o)l in a||(s[l]=1);for(const l in a)i[l]||(n[l]=a[l],i[l]=1);t[r]=a}else for(const l in o)i[l]=1}for(const o in s)o in n||(n[o]=void 0);return n}function Xn(t){return typeof t=="object"&&t!==null?t:{}}function Vs(t,e,n){const s=t.$$.props[e];s!==void 0&&(t.$$.bound[s]=n,n(t.$$.ctx[s]))}function ue(t){t&&t.c()}function le(t,e,n,s){const{fragment:i,after_update:r}=t.$$;i&&i.m(e,n),s||Xe(()=>{const o=t.$$.on_mount.map(Ud).filter(Ko);t.$$.on_destroy?t.$$.on_destroy.push(...o):xe(o),t.$$.on_mount=[]}),r.forEach(Xe)}function ce(t,e){const n=t.$$;n.fragment!==null&&(xe(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function B_(t,e){t.$$.dirty[0]===-1&&(Oi.push(t),zd(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Qe(t,e,n,s,i,r,o,a=[-1]){const l=Yi;Bi(t);const c=t.$$={fragment:null,ctx:[],props:r,update:he,not_equal:i,bound:ru(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:ru(),dirty:a,skip_bound:!1,root:e.target||l.$$.root};o&&o(c.root);let h=!1;if(c.ctx=n?n(t,e.props||{},(f,d,...m)=>{const _=m.length?m[0]:d;return c.ctx&&i(c.ctx[f],c.ctx[f]=_)&&(!c.skip_bound&&c.bound[f]&&c.bound[f](_),h&&B_(t,f)),d}):[],c.update(),h=!0,xe(c.before_update),c.fragment=s?s(c.ctx):!1,e.target){if(e.hydrate){const f=A_(e.target);c.fragment&&c.fragment.l(f),f.forEach(y)}else c.fragment&&c.fragment.c();e.intro&&K(t.$$.fragment),le(t,e.target,e.anchor,e.customElement),Gd()}Bi(l)}class Ye{$destroy(){ce(this,1),this.$destroy=he}$on(e,n){if(!Ko(n))return he;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const i=s.indexOf(n);i!==-1&&s.splice(i,1)}}$set(e){this.$$set&&!E_(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const cu=t=>typeof t>"u",Wd=t=>typeof t=="function",Qd=t=>typeof t=="number";function j_(t){return!t.defaultPrevented&&t.button===0&&!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Yd(){let t=0;return()=>t++}function q_(){return Math.random().toString(36).substring(2)}const ws=typeof window>"u";function xd(t,e,n){return t.addEventListener(e,n),()=>t.removeEventListener(e,n)}const il=(t,e)=>t?{}:{style:e},ni=t=>({"aria-hidden":"true",...il(t,"display:none;")}),ei=[];function H_(t,e){return{subscribe:Lt(t,e).subscribe}}function Lt(t,e=he){let n;const s=new Set;function i(a){if(He(t,a)&&(t=a,n)){const l=!ei.length;for(const c of s)c[1](),ei.push(c,t);if(l){for(let c=0;c<ei.length;c+=2)ei[c][0](ei[c+1]);ei.length=0}}}function r(a){i(a(t))}function o(a,l=he){const c=[a,l];return s.add(c),s.size===1&&(n=e(i)||he),a(t),()=>{s.delete(c),s.size===0&&(n(),n=null)}}return{set:i,update:r,subscribe:o}}function K_(t,e,n){const s=!Array.isArray(t),i=s?[t]:t,r=e.length<2;return H_(n,o=>{let a=!1;const l=[];let c=0,h=he;const f=()=>{if(c)return;h();const m=e(s?l[0]:l,o);r?o(m):h=Ko(m)?m:he},d=i.map((m,_)=>Fl(m,v=>{l[_]=v,c&=~(1<<_),a&&f()},()=>{c|=1<<_}));return a=!0,f(),function(){xe(d),h()}})}const pr=t=>`@@svnav-ctx__${t}`,rl=pr("LOCATION"),fi=pr("ROUTER"),Xd=pr("ROUTE"),z_=pr("ROUTE_PARAMS"),G_=pr("FOCUS_ELEM"),Jd=/^:(.+)/,Li=(t,e,n)=>t.substr(e,n),ol=(t,e)=>Li(t,0,e.length)===e,W_=t=>t==="",Q_=t=>Jd.test(t),Zd=t=>t[0]==="*",Y_=t=>t.replace(/\*.*$/,""),ep=t=>t.replace(/(^\/+|\/+$)/g,"");function Un(t,e=!1){const n=ep(t).split("/");return e?n.filter(Boolean):n}const Pa=(t,e)=>t+(e?`?${e}`:""),Kl=t=>`/${ep(t)}`;function mr(...t){const e=s=>Un(s,!0).join("/"),n=t.map(e).join("/");return Kl(n)}const zl=1,zo=2,Bs=3,x_=4,tp=5,X_=6,np=7,J_=8,Z_=9,sp=10,ip=11,ev={[zl]:"Link",[zo]:"Route",[Bs]:"Router",[x_]:"useFocus",[tp]:"useLocation",[X_]:"useMatch",[np]:"useNavigate",[J_]:"useParams",[Z_]:"useResolvable",[sp]:"useResolve",[ip]:"navigate"},Gl=t=>ev[t];function tv(t,e){let n;return t===zo?n=e.path?`path="${e.path}"`:"default":t===zl?n=`to="${e.to}"`:t===Bs&&(n=`basepath="${e.basepath||""}"`),`<${Gl(t)} ${n||""} />`}function nv(t,e,n,s){const i=n&&tv(s||t,n),r=i?`

Occurred in: ${i}`:"",o=Gl(t),a=Wd(e)?e(o):e;return`<${o}> ${a}${r}`}const rp=t=>(...e)=>t(nv(...e)),op=rp(t=>{throw new Error(t)}),mo=rp(console.warn),uu=4,sv=3,iv=2,rv=1,ov=1;function av(t,e){const n=t.default?0:Un(t.fullPath).reduce((s,i)=>{let r=s;return r+=uu,W_(i)?r+=ov:Q_(i)?r+=iv:Zd(i)?r-=uu+rv:r+=sv,r},0);return{route:t,score:n,index:e}}function lv(t){return t.map(av).sort((e,n)=>e.score<n.score?1:e.score>n.score?-1:e.index-n.index)}function ap(t,e){let n,s;const[i]=e.split("?"),r=Un(i),o=r[0]==="",a=lv(t);for(let l=0,c=a.length;l<c;l++){const{route:h}=a[l];let f=!1;const d={},m=E=>({...h,params:d,uri:E});if(h.default){s=m(e);continue}const _=Un(h.fullPath),v=Math.max(r.length,_.length);let k=0;for(;k<v;k++){const E=_[k],I=r[k];if(!cu(E)&&Zd(E)){const A=E==="*"?"*":E.slice(1);d[A]=r.slice(k).map(decodeURIComponent).join("/");break}if(cu(I)){f=!0;break}const M=Jd.exec(E);if(M&&!o){const A=decodeURIComponent(I);d[M[1]]=A}else if(E!==I){f=!0;break}}if(!f){n=m(mr(...r.slice(0,k)));break}}return n||s||null}function lp(t,e){return ap([t],e)}function cv(t,e){if(ol(t,"/"))return t;const[n,s]=t.split("?"),[i]=e.split("?"),r=Un(n),o=Un(i);if(r[0]==="")return Pa(i,s);if(!ol(r[0],".")){const c=o.concat(r).join("/");return Pa((i==="/"?"":"/")+c,s)}const a=o.concat(r),l=[];return a.forEach(c=>{c===".."?l.pop():c!=="."&&l.push(c)}),Pa(`/${l.join("/")}`,s)}function hu(t,e){const{pathname:n,hash:s="",search:i="",state:r}=t,o=Un(e,!0),a=Un(n,!0);for(;o.length;)o[0]!==a[0]&&op(Bs,`Invalid state: All locations must begin with the basepath "${e}", found "${n}"`),o.shift(),a.shift();return{pathname:mr(...a),hash:s,search:i,state:r}}const fu=t=>t.length===1?"":t,Wl=t=>{const e=t.indexOf("?"),n=t.indexOf("#"),s=e!==-1,i=n!==-1,r=i?fu(Li(t,n)):"",o=i?Li(t,0,n):t,a=s?fu(Li(o,e)):"";return{pathname:(s?Li(o,0,e):o)||"/",search:a,hash:r}},uv=t=>{const{pathname:e,search:n,hash:s}=t;return e+n+s};function hv(t,e,n){return mr(n,cv(t,e))}function fv(t,e){const n=Kl(Y_(t)),s=Un(n,!0),i=Un(e,!0).slice(0,s.length),r=lp({fullPath:n},mr(...i));return r&&r.uri}const Na="POP",dv="PUSH",pv="REPLACE";function Oa(t){return{...t.location,pathname:encodeURI(decodeURI(t.location.pathname)),state:t.history.state,_key:t.history.state&&t.history.state._key||"initial"}}function mv(t){let e=[],n=Oa(t),s=Na;const i=(r=e)=>r.forEach(o=>o({location:n,action:s}));return{get location(){return n},listen(r){e.push(r);const o=()=>{n=Oa(t),s=Na,i([r])};i([r]);const a=xd(t,"popstate",o);return()=>{a(),e=e.filter(l=>l!==r)}},navigate(r,o){const{state:a={},replace:l=!1}=o||{};if(s=l?pv:dv,Qd(r))o&&mo(ip,"Navigation options (state or replace) are not supported, when passing a number as the first argument to navigate. They are ignored."),s=Na,t.history.go(r);else{const c={...a,_key:q_()};try{t.history[l?"replaceState":"pushState"](c,"",r)}catch{t.location[l?"replace":"assign"](r)}}n=Oa(t),i()}}}function La(t,e){return{...Wl(e),state:t}}function gv(t="/"){let e=0,n=[La(null,t)];return{get entries(){return n},get location(){return n[e]},addEventListener(){},removeEventListener(){},history:{get state(){return n[e].state},pushState(s,i,r){e++,n=n.slice(0,e),n.push(La(s,r))},replaceState(s,i,r){n[e]=La(s,r)},go(s){const i=e+s;i<0||i>n.length-1||(e=i)}}}}const _v=!!(!ws&&window.document&&window.document.createElement),vv=!ws&&window.location.origin==="null",yv=mv(_v&&!vv?window:gv());let Kn=null,cp=!0;function bv(t,e){const n=document.querySelectorAll("[data-svnav-router]");for(let s=0;s<n.length;s++){const i=n[s],r=Number(i.dataset.svnavRouter);if(r===t)return!0;if(r===e)return!1}return!1}function wv(t){(!Kn||t.level>Kn.level||t.level===Kn.level&&bv(t.routerId,Kn.routerId))&&(Kn=t)}function kv(){Kn=null}function Ev(){cp=!1}function du(t){if(!t)return!1;const e="tabindex";try{if(!t.hasAttribute(e)){t.setAttribute(e,"-1");let n;n=xd(t,"blur",()=>{t.removeAttribute(e),n()})}return t.focus(),document.activeElement===t}catch{return!1}}function Tv(t,e){return Number(t.dataset.svnavRouteEnd)===e}function Iv(t){return/^H[1-6]$/i.test(t.tagName)}function pu(t,e=document){return e.querySelector(t)}function Cv(t){let n=pu(`[data-svnav-route-start="${t}"]`).nextElementSibling;for(;!Tv(n,t);){if(Iv(n))return n;const s=pu("h1,h2,h3,h4,h5,h6",n);if(s)return s;n=n.nextElementSibling}return null}function Sv(t){Promise.resolve(hi(t.focusElement)).then(e=>{const n=e||Cv(t.id);n||mo(Bs,`Could not find an element to focus. You should always render a header for accessibility reasons, or set a custom focus element via the "useFocus" hook. If you don't want this Route or Router to manage focus, pass "primary={false}" to it.`,t,zo),!du(n)&&du(document.documentElement)})}const Av=(t,e,n)=>(s,i)=>$_().then(()=>{if(!Kn||cp){Ev();return}if(s&&Sv(Kn.route),t.announcements&&i){const{path:r,fullPath:o,meta:a,params:l,uri:c}=Kn.route,h=t.createAnnouncement({path:r,fullPath:o,meta:a,params:l,uri:c},hi(n));Promise.resolve(h).then(f=>{e.set(f)})}kv()}),mu="position:fixed;top:-1px;left:0;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;";function Dv(t){let e,n,s=[{role:"status"},{"aria-atomic":"true"},{"aria-live":"polite"},{"data-svnav-announcer":""},il(t[6],mu)],i={};for(let r=0;r<s.length;r+=1)i=Mt(i,s[r]);return{c(){e=p("div"),n=S(t[0]),On(e,i)},m(r,o){b(r,e,o),u(e,n)},p(r,o){o[0]&1&&se(n,r[0]),On(e,i=gn(s,[{role:"status"},{"aria-atomic":"true"},{"aria-live":"polite"},{"data-svnav-announcer":""},il(r[6],mu)]))},d(r){r&&y(e)}}}function Rv(t){let e,n,s,i,r,o=[ni(t[6]),{"data-svnav-router":t[3]}],a={};for(let f=0;f<o.length;f+=1)a=Mt(a,o[f]);const l=t[22].default,c=Vl(l,t,t[21],null);let h=t[2]&&t[4]&&t[1].announcements&&Dv(t);return{c(){e=p("div"),n=w(),c&&c.c(),s=w(),h&&h.c(),i=sn(),On(e,a)},m(f,d){b(f,e,d),b(f,n,d),c&&c.m(f,d),b(f,s,d),h&&h.m(f,d),b(f,i,d),r=!0},p(f,d){On(e,a=gn(o,[ni(f[6]),{"data-svnav-router":f[3]}])),c&&c.p&&(!r||d[0]&2097152)&&jl(c,l,f,f[21],r?Bl(l,f[21],d,null):ql(f[21]),null),f[2]&&f[4]&&f[1].announcements&&h.p(f,d)},i(f){r||(K(c,f),r=!0)},o(f){x(c,f),r=!1},d(f){f&&y(e),f&&y(n),c&&c.d(f),f&&y(s),h&&h.d(f),f&&y(i)}}}const Pv=Yd(),gu="/";function Nv(t,e,n){let s,i,r,o,a,{$$slots:l={},$$scope:c}=e,{basepath:h=gu}=e,{url:f=null}=e,{history:d=yv}=e,{primary:m=!0}=e,{a11y:_={}}=e,{disableInlineStyles:v=!1}=e;const k={createAnnouncement:N=>`Navigated to ${N.uri}`,announcements:!0,..._},E=h,I=Kl(h),M=bs(rl),A=bs(fi),j=!M,L=Pv(),F=m&&!(A&&!A.manageFocus),H=Lt("");Ue(t,H,N=>n(0,a=N));const O=A?A.disableInlineStyles:v,U=Lt([]);Ue(t,U,N=>n(20,o=N));const $=Lt(null);Ue(t,$,N=>n(18,i=N));let z=!1;const W=j?0:A.level+1,Q=j?Lt((()=>hu(ws?Wl(f):d.location,I))()):M;Ue(t,Q,N=>n(17,s=N));const G=Lt(s);Ue(t,G,N=>n(19,r=N));const X=Av(k,H,Q),Y=N=>D=>D.filter(re=>re.id!==N);function C(N){if(ws){if(z)return;const D=lp(N,s.pathname);if(D)return z=!0,D}else U.update(D=>{const re=Y(N.id)(D);return re.push(N),re})}function P(N){U.update(Y(N))}return!j&&h!==gu&&mo(Bs,'Only top-level Routers can have a "basepath" prop. It is ignored.',{basepath:h}),j&&(O_(()=>d.listen(D=>{const re=hu(D.location,I);G.set(s),Q.set(re)})),ji(rl,Q)),ji(fi,{activeRoute:$,registerRoute:C,unregisterRoute:P,manageFocus:F,level:W,id:L,history:j?d:A.history,basepath:j?I:A.basepath,disableInlineStyles:O}),t.$$set=N=>{"basepath"in N&&n(11,h=N.basepath),"url"in N&&n(12,f=N.url),"history"in N&&n(13,d=N.history),"primary"in N&&n(14,m=N.primary),"a11y"in N&&n(15,_=N.a11y),"disableInlineStyles"in N&&n(16,v=N.disableInlineStyles),"$$scope"in N&&n(21,c=N.$$scope)},t.$$.update=()=>{if(t.$$.dirty[0]&2048&&h!==E&&mo(Bs,'You cannot change the "basepath" prop. It is ignored.'),t.$$.dirty[0]&1179648){const N=ap(o,s.pathname);$.set(N)}if(t.$$.dirty[0]&655360&&j){const N=!!s.hash,D=!N&&F,re=!N||s.pathname!==r.pathname;X(D,re)}t.$$.dirty[0]&262144&&F&&i&&i.primary&&wv({level:W,routerId:L,route:i})},[a,k,j,L,F,H,O,U,$,Q,G,h,f,d,m,_,v,s,i,r,o,c,l]}class Ql extends Ye{constructor(e){super(),Qe(this,e,Nv,Rv,He,{basepath:11,url:12,history:13,primary:14,a11y:15,disableInlineStyles:16},null,[-1,-1])}}function gr(t,e,n=fi,s=Bs){bs(n)||op(t,r=>`You cannot use ${r} outside of a ${Gl(s)}.`,e)}const Ov=t=>{const{subscribe:e}=bs(t);return{subscribe:e}};function up(){return gr(tp),Ov(rl)}function hp(){const{history:t}=bs(fi);return t}function fp(){const t=bs(Xd);return t?K_(t,e=>e.base):Lt("/")}function dp(){gr(sp);const t=fp(),{basepath:e}=bs(fi);return s=>hv(s,hi(t),e)}function Qs(){gr(np);const t=dp(),{navigate:e}=hp();return(s,i)=>{const r=Qd(s)?s:t(s);return e(r,i)}}const Lv=t=>({params:t&16,location:t&8}),_u=t=>({params:ws?hi(t[10]):t[4],location:t[3],navigate:t[11]});function vu(t){let e,n;return e=new Ql({props:{primary:t[1],$$slots:{default:[Uv]},$$scope:{ctx:t}}}),{c(){ue(e.$$.fragment)},m(s,i){le(e,s,i),n=!0},p(s,i){const r={};i&2&&(r.primary=s[1]),i&528409&&(r.$$scope={dirty:i,ctx:s}),e.$set(r)},i(s){n||(K(e.$$.fragment,s),n=!0)},o(s){x(e.$$.fragment,s),n=!1},d(s){ce(e,s)}}}function Mv(t){let e;const n=t[18].default,s=Vl(n,t,t[19],_u);return{c(){s&&s.c()},m(i,r){s&&s.m(i,r),e=!0},p(i,r){s&&s.p&&(!e||r&524312)&&jl(s,n,i,i[19],e?Bl(n,i[19],r,Lv):ql(i[19]),_u)},i(i){e||(K(s,i),e=!0)},o(i){x(s,i),e=!1},d(i){s&&s.d(i)}}}function $v(t){let e,n,s;const i=[{location:t[3]},{navigate:t[11]},ws?hi(t[10]):t[4],t[12]];var r=t[0];function o(a){let l={};for(let c=0;c<i.length;c+=1)l=Mt(l,i[c]);return{props:l}}return r&&(e=au(r,o())),{c(){e&&ue(e.$$.fragment),n=sn()},m(a,l){e&&le(e,a,l),b(a,n,l),s=!0},p(a,l){const c=l&7192?gn(i,[l&8&&{location:a[3]},l&2048&&{navigate:a[11]},l&1040&&Xn(ws?hi(a[10]):a[4]),l&4096&&Xn(a[12])]):{};if(r!==(r=a[0])){if(e){kt();const h=e;x(h.$$.fragment,1,0,()=>{ce(h,1)}),Et()}r?(e=au(r,o()),ue(e.$$.fragment),K(e.$$.fragment,1),le(e,n.parentNode,n)):e=null}else r&&e.$set(c)},i(a){s||(e&&K(e.$$.fragment,a),s=!0)},o(a){e&&x(e.$$.fragment,a),s=!1},d(a){a&&y(n),e&&ce(e,a)}}}function Uv(t){let e,n,s,i;const r=[$v,Mv],o=[];function a(l,c){return l[0]!==null?0:1}return e=a(t),n=o[e]=r[e](t),{c(){n.c(),s=sn()},m(l,c){o[e].m(l,c),b(l,s,c),i=!0},p(l,c){let h=e;e=a(l),e===h?o[e].p(l,c):(kt(),x(o[h],1,1,()=>{o[h]=null}),Et(),n=o[e],n?n.p(l,c):(n=o[e]=r[e](l),n.c()),K(n,1),n.m(s.parentNode,s))},i(l){i||(K(n),i=!0)},o(l){x(n),i=!1},d(l){o[e].d(l),l&&y(s)}}}function Fv(t){let e,n,s,i,r,o=[ni(t[7]),{"data-svnav-route-start":t[5]}],a={};for(let f=0;f<o.length;f+=1)a=Mt(a,o[f]);let l=t[2]&&vu(t),c=[ni(t[7]),{"data-svnav-route-end":t[5]}],h={};for(let f=0;f<c.length;f+=1)h=Mt(h,c[f]);return{c(){e=p("div"),n=w(),l&&l.c(),s=w(),i=p("div"),On(e,a),On(i,h)},m(f,d){b(f,e,d),b(f,n,d),l&&l.m(f,d),b(f,s,d),b(f,i,d),r=!0},p(f,[d]){On(e,a=gn(o,[ni(f[7]),{"data-svnav-route-start":f[5]}])),f[2]?l?(l.p(f,d),d&4&&K(l,1)):(l=vu(f),l.c(),K(l,1),l.m(s.parentNode,s)):l&&(kt(),x(l,1,1,()=>{l=null}),Et()),On(i,h=gn(c,[ni(f[7]),{"data-svnav-route-end":f[5]}]))},i(f){r||(K(l),r=!0)},o(f){x(l),r=!1},d(f){f&&y(e),f&&y(n),l&&l.d(f),f&&y(s),f&&y(i)}}}const Vv=Yd();function Bv(t,e,n){let s;const i=["path","component","meta","primary"];let r=ho(e,i),o,a,l,c,{$$slots:h={},$$scope:f}=e,{path:d=""}=e,{component:m=null}=e,{meta:_={}}=e,{primary:v=!0}=e;gr(zo,e);const k=Vv(),{registerRoute:E,unregisterRoute:I,activeRoute:M,disableInlineStyles:A}=bs(fi);Ue(t,M,z=>n(16,o=z));const j=fp();Ue(t,j,z=>n(17,l=z));const L=up();Ue(t,L,z=>n(3,a=z));const F=Lt(null);let H;const O=Lt(),U=Lt({});Ue(t,U,z=>n(4,c=z)),ji(Xd,O),ji(z_,U),ji(G_,F);const $=Qs();return ws||L_(()=>I(k)),t.$$set=z=>{n(24,e=Mt(Mt({},e),uo(z))),n(12,r=ho(e,i)),"path"in z&&n(13,d=z.path),"component"in z&&n(0,m=z.component),"meta"in z&&n(14,_=z.meta),"primary"in z&&n(1,v=z.primary),"$$scope"in z&&n(19,f=z.$$scope)},t.$$.update=()=>{if(t.$$.dirty&155658){const z=d==="",W=mr(l,d),Z={id:k,path:d,meta:_,default:z,fullPath:z?"":W,base:z?l:fv(W,a.pathname),primary:v,focusElement:F};O.set(Z),n(15,H=E(Z))}if(t.$$.dirty&98304&&n(2,s=!!(H||o&&o.id===k)),t.$$.dirty&98308&&s){const{params:z}=H||o;U.set(z)}},e=uo(e),[m,v,s,a,c,k,M,A,j,L,U,$,r,d,_,H,o,l,h,f]}class Pn extends Ye{constructor(e){super(),Qe(this,e,Bv,Fv,He,{path:13,component:0,meta:14,primary:1})}}function jv(t){let e,n,s,i;const r=t[13].default,o=Vl(r,t,t[12],null);let a=[{href:t[0]},t[2],t[1]],l={};for(let c=0;c<a.length;c+=1)l=Mt(l,a[c]);return{c(){e=p("a"),o&&o.c(),On(e,l)},m(c,h){b(c,e,h),o&&o.m(e,null),n=!0,s||(i=q(e,"click",t[4]),s=!0)},p(c,[h]){o&&o.p&&(!n||h&4096)&&jl(o,r,c,c[12],n?Bl(r,c[12],h,null):ql(c[12]),null),On(e,l=gn(a,[(!n||h&1)&&{href:c[0]},h&4&&c[2],h&2&&c[1]]))},i(c){n||(K(o,c),n=!0)},o(c){x(o,c),n=!1},d(c){c&&y(e),o&&o.d(c),s=!1,i()}}}function qv(t,e,n){let s,i,r,o,a,l;const c=["to","replace","state","getProps"];let h=ho(e,c),f,{$$slots:d={},$$scope:m}=e,{to:_}=e,{replace:v=!1}=e,{state:k={}}=e,{getProps:E=null}=e;gr(zl,e);const I=up();Ue(t,I,F=>n(11,f=F));const M=Hd(),A=dp(),{navigate:j}=hp();function L(F){M("click",F),j_(F)&&(F.preventDefault(),j(s,{state:k,replace:o||v}))}return t.$$set=F=>{n(19,e=Mt(Mt({},e),uo(F))),n(18,h=ho(e,c)),"to"in F&&n(5,_=F.to),"replace"in F&&n(6,v=F.replace),"state"in F&&n(7,k=F.state),"getProps"in F&&n(8,E=F.getProps),"$$scope"in F&&n(12,m=F.$$scope)},t.$$.update=()=>{t.$$.dirty&2080&&n(0,s=A(_,f)),t.$$.dirty&2049&&n(10,i=ol(f.pathname,s)),t.$$.dirty&2049&&n(9,r=s===f.pathname),t.$$.dirty&2049&&(o=Wl(s)===uv(f)),t.$$.dirty&512&&n(2,a=r?{"aria-current":"page"}:{}),n(1,l=(()=>{if(Wd(E)){const F=E({location:f,href:s,isPartiallyCurrent:i,isCurrent:r});return{...h,...F}}return h})())},e=uo(e),[s,l,a,I,L,_,v,k,E,r,i,f,m,d]}class hn extends Ye{constructor(e){super(),Qe(this,e,qv,jv,He,{to:5,replace:6,state:7,getProps:8})}}const pp="/to-deploy-mh/assets/logoMH.9387adb0.png",Hv="/to-deploy-mh/assets/menu.9ddfd9f8.svg";/**
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
 */const mp=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Kv=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},gp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,h=r>>2,f=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,m=c&63;l||(m=64,o||(d=64)),s.push(n[h],n[f],n[d],n[m])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(mp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Kv(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||f==null)throw Error();const d=r<<2|a>>4;if(s.push(d),c!==64){const m=a<<4&240|c>>2;if(s.push(m),f!==64){const _=c<<6&192|f;s.push(_)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},zv=function(t){const e=mp(t);return gp.encodeByteArray(e,!0)},go=function(t){return zv(t).replace(/\./g,"")},_p=function(t){try{return gp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Xt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Gv(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Xt())}function Wv(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Qv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Yv(){const t=Xt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function xv(){return typeof indexedDB=="object"}function Xv(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}function Jv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Zv=()=>Jv().__FIREBASE_DEFAULTS__,ey=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t=process.env.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},ty=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&_p(t[1]);return e&&JSON.parse(e)},Yl=()=>{try{return Zv()||ey()||ty()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},vp=t=>{var e,n;return(n=(e=Yl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},ny=t=>{const e=vp(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},sy=()=>{var t;return(t=Yl())===null||t===void 0?void 0:t.config},yp=t=>{var e;return(e=Yl())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class iy{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function ry(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[go(JSON.stringify(n)),go(JSON.stringify(o)),a].join(".")}/**
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
 */const oy="FirebaseError";class is extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=oy,Object.setPrototypeOf(this,is.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_r.prototype.create)}}class _r{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?ay(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new is(i,a,s)}}function ay(t,e){return t.replace(ly,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const ly=/\{\$([^}]+)}/g;function cy(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function _o(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(yu(r)&&yu(o)){if(!_o(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function yu(t){return t!==null&&typeof t=="object"}/**
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
 */function vr(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Mi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function $i(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function uy(t,e){const n=new hy(t,e);return n.subscribe.bind(n)}class hy{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");fy(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=Ma),i.error===void 0&&(i.error=Ma),i.complete===void 0&&(i.complete=Ma);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function fy(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ma(){}/**
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
 */function nn(t){return t&&t._delegate?t._delegate:t}class js{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class dy{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new iy;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(my(e))try{this.getOrInitializeService({instanceIdentifier:Rs})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Rs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Rs){return this.instances.has(e)}getOptions(e=Rs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:py(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Rs){return this.component?this.component.multipleInstances?e:Rs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function py(t){return t===Rs?void 0:t}function my(t){return t.instantiationMode==="EAGER"}/**
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
 */class gy{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new dy(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var je;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(je||(je={}));const _y={debug:je.DEBUG,verbose:je.VERBOSE,info:je.INFO,warn:je.WARN,error:je.ERROR,silent:je.SILENT},vy=je.INFO,yy={[je.DEBUG]:"log",[je.VERBOSE]:"log",[je.INFO]:"info",[je.WARN]:"warn",[je.ERROR]:"error"},by=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=yy[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class xl{constructor(e){this.name=e,this._logLevel=vy,this._logHandler=by,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in je))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?_y[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,je.DEBUG,...e),this._logHandler(this,je.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,je.VERBOSE,...e),this._logHandler(this,je.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,je.INFO,...e),this._logHandler(this,je.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,je.WARN,...e),this._logHandler(this,je.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,je.ERROR,...e),this._logHandler(this,je.ERROR,...e)}}const wy=(t,e)=>e.some(n=>t instanceof n);let bu,wu;function ky(){return bu||(bu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ey(){return wu||(wu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const bp=new WeakMap,al=new WeakMap,wp=new WeakMap,$a=new WeakMap,Xl=new WeakMap;function Ty(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(ps(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&bp.set(n,t)}).catch(()=>{}),Xl.set(e,t),e}function Iy(t){if(al.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});al.set(t,e)}let ll={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return al.get(t);if(e==="objectStoreNames")return t.objectStoreNames||wp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ps(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Cy(t){ll=t(ll)}function Sy(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Ua(this),e,...n);return wp.set(s,e.sort?e.sort():[e]),ps(s)}:Ey().includes(t)?function(...e){return t.apply(Ua(this),e),ps(bp.get(this))}:function(...e){return ps(t.apply(Ua(this),e))}}function Ay(t){return typeof t=="function"?Sy(t):(t instanceof IDBTransaction&&Iy(t),wy(t,ky())?new Proxy(t,ll):t)}function ps(t){if(t instanceof IDBRequest)return Ty(t);if($a.has(t))return $a.get(t);const e=Ay(t);return e!==t&&($a.set(t,e),Xl.set(e,t)),e}const Ua=t=>Xl.get(t);function Dy(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=ps(o);return s&&o.addEventListener("upgradeneeded",l=>{s(ps(o.result),l.oldVersion,l.newVersion,ps(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const Ry=["get","getKey","getAll","getAllKeys","count"],Py=["put","add","delete","clear"],Fa=new Map;function ku(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Fa.get(e))return Fa.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Py.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Ry.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Fa.set(e,r),r}Cy(t=>({...t,get:(e,n,s)=>ku(e,n)||t.get(e,n,s),has:(e,n)=>!!ku(e,n)||t.has(e,n)}));/**
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
 */class Ny{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Oy(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Oy(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const cl="@firebase/app",Eu="0.8.2";/**
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
 */const qs=new xl("@firebase/app"),Ly="@firebase/app-compat",My="@firebase/analytics-compat",$y="@firebase/analytics",Uy="@firebase/app-check-compat",Fy="@firebase/app-check",Vy="@firebase/auth",By="@firebase/auth-compat",jy="@firebase/database",qy="@firebase/database-compat",Hy="@firebase/functions",Ky="@firebase/functions-compat",zy="@firebase/installations",Gy="@firebase/installations-compat",Wy="@firebase/messaging",Qy="@firebase/messaging-compat",Yy="@firebase/performance",xy="@firebase/performance-compat",Xy="@firebase/remote-config",Jy="@firebase/remote-config-compat",Zy="@firebase/storage",e0="@firebase/storage-compat",t0="@firebase/firestore",n0="@firebase/firestore-compat",s0="firebase",i0="9.12.1";/**
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
 */const ul="[DEFAULT]",r0={[cl]:"fire-core",[Ly]:"fire-core-compat",[$y]:"fire-analytics",[My]:"fire-analytics-compat",[Fy]:"fire-app-check",[Uy]:"fire-app-check-compat",[Vy]:"fire-auth",[By]:"fire-auth-compat",[jy]:"fire-rtdb",[qy]:"fire-rtdb-compat",[Hy]:"fire-fn",[Ky]:"fire-fn-compat",[zy]:"fire-iid",[Gy]:"fire-iid-compat",[Wy]:"fire-fcm",[Qy]:"fire-fcm-compat",[Yy]:"fire-perf",[xy]:"fire-perf-compat",[Xy]:"fire-rc",[Jy]:"fire-rc-compat",[Zy]:"fire-gcs",[e0]:"fire-gcs-compat",[t0]:"fire-fst",[n0]:"fire-fst-compat","fire-js":"fire-js",[s0]:"fire-js-all"};/**
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
 */const vo=new Map,hl=new Map;function o0(t,e){try{t.container.addComponent(e)}catch(n){qs.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function di(t){const e=t.name;if(hl.has(e))return qs.debug(`There were multiple attempts to register component ${e}.`),!1;hl.set(e,t);for(const n of vo.values())o0(n,t);return!0}function Jl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const a0={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ms=new _r("app","Firebase",a0);/**
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
 */class l0{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new js("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ms.create("app-deleted",{appName:this._name})}}/**
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
 */const yr=i0;function kp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:ul,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw ms.create("bad-app-name",{appName:String(i)});if(n||(n=sy()),!n)throw ms.create("no-options");const r=vo.get(i);if(r){if(_o(n,r.options)&&_o(s,r.config))return r;throw ms.create("duplicate-app",{appName:i})}const o=new gy(i);for(const l of hl.values())o.addComponent(l);const a=new l0(n,s,o);return vo.set(i,a),a}function Ep(t=ul){const e=vo.get(t);if(!e&&t===ul)return kp();if(!e)throw ms.create("no-app",{appName:t});return e}function gs(t,e,n){var s;let i=(s=r0[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),qs.warn(a.join(" "));return}di(new js(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const c0="firebase-heartbeat-database",u0=1,xi="firebase-heartbeat-store";let Va=null;function Tp(){return Va||(Va=Dy(c0,u0,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(xi)}}}).catch(t=>{throw ms.create("idb-open",{originalErrorMessage:t.message})})),Va}async function h0(t){var e;try{return(await Tp()).transaction(xi).objectStore(xi).get(Ip(t))}catch(n){if(n instanceof is)qs.warn(n.message);else{const s=ms.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});qs.warn(s.message)}}}async function Tu(t,e){var n;try{const i=(await Tp()).transaction(xi,"readwrite");return await i.objectStore(xi).put(e,Ip(t)),i.done}catch(s){if(s instanceof is)qs.warn(s.message);else{const i=ms.create("idb-set",{originalErrorMessage:(n=s)===null||n===void 0?void 0:n.message});qs.warn(i.message)}}}function Ip(t){return`${t.name}!${t.options.appId}`}/**
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
 */const f0=1024,d0=30*24*60*60*1e3;class p0{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new g0(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Iu();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=d0}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Iu(),{heartbeatsToSend:n,unsentEntries:s}=m0(this._heartbeatsCache.heartbeats),i=go(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Iu(){return new Date().toISOString().substring(0,10)}function m0(t,e=f0){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Cu(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Cu(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class g0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return xv()?Xv().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await h0(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Tu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Tu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Cu(t){return go(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function _0(t){di(new js("platform-logger",e=>new Ny(e),"PRIVATE")),di(new js("heartbeat",e=>new p0(e),"PRIVATE")),gs(cl,Eu,t),gs(cl,Eu,"esm2017"),gs("fire-js","")}_0("");var v0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},fe,Zl=Zl||{},Ee=v0||self;function yo(){}function Go(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function br(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function y0(t){return Object.prototype.hasOwnProperty.call(t,Ba)&&t[Ba]||(t[Ba]=++b0)}var Ba="closure_uid_"+(1e9*Math.random()>>>0),b0=0;function w0(t,e,n){return t.call.apply(t.bind,arguments)}function k0(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Yt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Yt=w0:Yt=k0,Yt.apply(null,arguments)}function Gr(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function zt(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function Is(){this.s=this.s,this.o=this.o}var E0=0;Is.prototype.s=!1;Is.prototype.na=function(){!this.s&&(this.s=!0,this.M(),E0!=0)&&y0(this)};Is.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Cp=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function ec(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Su(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Go(s)){const i=t.length||0,r=s.length||0;t.length=i+r;for(let o=0;o<r;o++)t[i+o]=s[o]}else t.push(s)}}function xt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}xt.prototype.h=function(){this.defaultPrevented=!0};var T0=function(){if(!Ee.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Ee.addEventListener("test",yo,e),Ee.removeEventListener("test",yo,e)}catch{}return t}();function bo(t){return/^[\s\xa0]*$/.test(t)}var Au=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function ja(t,e){return t<e?-1:t>e?1:0}function Wo(){var t=Ee.navigator;return t&&(t=t.userAgent)?t:""}function Nn(t){return Wo().indexOf(t)!=-1}function tc(t){return tc[" "](t),t}tc[" "]=yo;function I0(t){var e=A0;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var C0=Nn("Opera"),pi=Nn("Trident")||Nn("MSIE"),Sp=Nn("Edge"),fl=Sp||pi,Ap=Nn("Gecko")&&!(Wo().toLowerCase().indexOf("webkit")!=-1&&!Nn("Edge"))&&!(Nn("Trident")||Nn("MSIE"))&&!Nn("Edge"),S0=Wo().toLowerCase().indexOf("webkit")!=-1&&!Nn("Edge");function Dp(){var t=Ee.document;return t?t.documentMode:void 0}var wo;e:{var qa="",Ha=function(){var t=Wo();if(Ap)return/rv:([^\);]+)(\)|;)/.exec(t);if(Sp)return/Edge\/([\d\.]+)/.exec(t);if(pi)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(S0)return/WebKit\/(\S+)/.exec(t);if(C0)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Ha&&(qa=Ha?Ha[1]:""),pi){var Ka=Dp();if(Ka!=null&&Ka>parseFloat(qa)){wo=String(Ka);break e}}wo=qa}var A0={};function D0(){return I0(function(){let t=0;const e=Au(String(wo)).split("."),n=Au("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;t=ja(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||ja(i[2].length==0,r[2].length==0)||ja(i[2],r[2]),i=i[3],r=r[3]}while(t==0)}return 0<=t})}var dl;if(Ee.document&&pi){var Du=Dp();dl=Du||parseInt(wo,10)||void 0}else dl=void 0;var R0=dl;function Xi(t,e){if(xt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Ap){e:{try{tc(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:P0[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Xi.X.h.call(this)}}zt(Xi,xt);var P0={2:"touch",3:"pen",4:"mouse"};Xi.prototype.h=function(){Xi.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var wr="closure_listenable_"+(1e6*Math.random()|0),N0=0;function O0(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=i,this.key=++N0,this.ba=this.ea=!1}function Qo(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function nc(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Rp(t){const e={};for(const n in t)e[n]=t[n];return e}const Ru="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Pp(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<Ru.length;r++)n=Ru[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Yo(t){this.src=t,this.g={},this.h=0}Yo.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=ml(t,e,s,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new O0(e,this.src,r,!!s,i),e.ea=n,t.push(e)),e};function pl(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=Cp(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(Qo(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function ml(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==s)return i}return-1}var sc="closure_lm_"+(1e6*Math.random()|0),za={};function Np(t,e,n,s,i){if(s&&s.once)return Lp(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)Np(t,e[r],n,s,i);return null}return n=oc(n),t&&t[wr]?t.N(e,n,br(s)?!!s.capture:!!s,i):Op(t,e,n,!1,s,i)}function Op(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=br(i)?!!i.capture:!!i,a=rc(t);if(a||(t[sc]=a=new Yo(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=L0(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)T0||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent($p(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function L0(){function t(n){return e.call(t.src,t.listener,n)}const e=M0;return t}function Lp(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)Lp(t,e[r],n,s,i);return null}return n=oc(n),t&&t[wr]?t.O(e,n,br(s)?!!s.capture:!!s,i):Op(t,e,n,!0,s,i)}function Mp(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)Mp(t,e[r],n,s,i);else s=br(s)?!!s.capture:!!s,n=oc(n),t&&t[wr]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=ml(r,n,s,i),-1<n&&(Qo(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=rc(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ml(e,n,s,i)),(n=-1<t?e[t]:null)&&ic(n))}function ic(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[wr])pl(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent($p(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=rc(e))?(pl(n,t),n.h==0&&(n.src=null,e[sc]=null)):Qo(t)}}}function $p(t){return t in za?za[t]:za[t]="on"+t}function M0(t,e){if(t.ba)t=!0;else{e=new Xi(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&ic(t),t=n.call(s,e)}return t}function rc(t){return t=t[sc],t instanceof Yo?t:null}var Ga="__closure_events_fn_"+(1e9*Math.random()>>>0);function oc(t){return typeof t=="function"?t:(t[Ga]||(t[Ga]=function(e){return t.handleEvent(e)}),t[Ga])}function $t(){Is.call(this),this.i=new Yo(this),this.P=this,this.I=null}zt($t,Is);$t.prototype[wr]=!0;$t.prototype.removeEventListener=function(t,e,n,s){Mp(this,t,e,n,s)};function Ht(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new xt(e,t);else if(e instanceof xt)e.target=e.target||t;else{var i=e;e=new xt(s,t),Pp(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=Wr(o,s,!0,e)&&i}if(o=e.g=t,i=Wr(o,s,!0,e)&&i,i=Wr(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=Wr(o,s,!1,e)&&i}$t.prototype.M=function(){if($t.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Qo(n[s]);delete t.g[e],t.h--}}this.I=null};$t.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};$t.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Wr(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&pl(t.i,o),i=a.call(l,s)!==!1&&i}}return i&&!s.defaultPrevented}var ac=Ee.JSON.stringify;function $0(){var t=Vp;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class U0{constructor(){this.h=this.g=null}add(e,n){const s=Up.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Up=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new F0,t=>t.reset());class F0{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function V0(t){Ee.setTimeout(()=>{throw t},0)}function Fp(t,e){gl||B0(),_l||(gl(),_l=!0),Vp.add(t,e)}var gl;function B0(){var t=Ee.Promise.resolve(void 0);gl=function(){t.then(j0)}}var _l=!1,Vp=new U0;function j0(){for(var t;t=$0();){try{t.h.call(t.g)}catch(n){V0(n)}var e=Up;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}_l=!1}function xo(t,e){$t.call(this),this.h=t||1,this.g=e||Ee,this.j=Yt(this.lb,this),this.l=Date.now()}zt(xo,$t);fe=xo.prototype;fe.ca=!1;fe.R=null;fe.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Ht(this,"tick"),this.ca&&(lc(this),this.start()))}};fe.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function lc(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}fe.M=function(){xo.X.M.call(this),lc(this),delete this.g};function cc(t,e,n){if(typeof t=="function")n&&(t=Yt(t,n));else if(t&&typeof t.handleEvent=="function")t=Yt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Ee.setTimeout(t,e||0)}function Bp(t){t.g=cc(()=>{t.g=null,t.i&&(t.i=!1,Bp(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class q0 extends Is{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Bp(this)}M(){super.M(),this.g&&(Ee.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ji(t){Is.call(this),this.h=t,this.g={}}zt(Ji,Is);var Pu=[];function jp(t,e,n,s){Array.isArray(n)||(n&&(Pu[0]=n.toString()),n=Pu);for(var i=0;i<n.length;i++){var r=Np(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function qp(t){nc(t.g,function(e,n){this.g.hasOwnProperty(n)&&ic(e)},t),t.g={}}Ji.prototype.M=function(){Ji.X.M.call(this),qp(this)};Ji.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Xo(){this.g=!0}Xo.prototype.Aa=function(){this.g=!1};function H0(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var h=c[0];c=c[1];var f=h.split("_");o=2<=f.length&&f[1]=="type"?o+(h+"="+c+"&"):o+(h+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function K0(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function si(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+G0(t,n)+(s?" "+s:"")})}function z0(t,e){t.info(function(){return"TIMEOUT: "+e})}Xo.prototype.info=function(){};function G0(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return ac(n)}catch{return e}}var Ys={},Nu=null;function Jo(){return Nu=Nu||new $t}Ys.Pa="serverreachability";function Hp(t){xt.call(this,Ys.Pa,t)}zt(Hp,xt);function Zi(t){const e=Jo();Ht(e,new Hp(e))}Ys.STAT_EVENT="statevent";function Kp(t,e){xt.call(this,Ys.STAT_EVENT,t),this.stat=e}zt(Kp,xt);function tn(t){const e=Jo();Ht(e,new Kp(e,t))}Ys.Qa="timingevent";function zp(t,e){xt.call(this,Ys.Qa,t),this.size=e}zt(zp,xt);function kr(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Ee.setTimeout(function(){t()},e)}var Zo={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Gp={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function uc(){}uc.prototype.h=null;function Ou(t){return t.h||(t.h=t.i())}function Wp(){}var Er={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function hc(){xt.call(this,"d")}zt(hc,xt);function fc(){xt.call(this,"c")}zt(fc,xt);var vl;function ea(){}zt(ea,uc);ea.prototype.g=function(){return new XMLHttpRequest};ea.prototype.i=function(){return{}};vl=new ea;function Tr(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new Ji(this),this.O=W0,t=fl?125:void 0,this.T=new xo(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Qp}function Qp(){this.i=null,this.g="",this.h=!1}var W0=45e3,yl={},ko={};fe=Tr.prototype;fe.setTimeout=function(t){this.O=t};function bl(t,e,n){t.K=1,t.v=na(Jn(e)),t.s=n,t.P=!0,Yp(t,null)}function Yp(t,e){t.F=Date.now(),Ir(t),t.A=Jn(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),sm(n.i,"t",s),t.C=0,n=t.l.H,t.h=new Qp,t.g=Tm(t.l,n?e:null,!t.s),0<t.N&&(t.L=new q0(Yt(t.La,t,t.g),t.N)),jp(t.S,t.g,"readystatechange",t.ib),e=t.H?Rp(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Zi(),H0(t.j,t.u,t.A,t.m,t.U,t.s)}fe.ib=function(t){t=t.target;const e=this.L;e&&Gn(t)==3?e.l():this.La(t)};fe.La=function(t){try{if(t==this.g)e:{const h=Gn(this.g);var e=this.g.Ea();const f=this.g.aa();if(!(3>h)&&(h!=3||fl||this.g&&(this.h.h||this.g.fa()||Uu(this.g)))){this.I||h!=4||e==7||(e==8||0>=f?Zi(3):Zi(2)),ta(this);var n=this.g.aa();this.Y=n;t:if(xp(this)){var s=Uu(this.g);t="";var i=s.length,r=Gn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ps(this),qi(this);var o="";break t}this.h.i=new Ee.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,K0(this.j,this.u,this.A,this.m,this.U,h,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!bo(a)){var c=a;break t}}c=null}if(n=c)si(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,wl(this,n);else{this.i=!1,this.o=3,tn(12),Ps(this),qi(this);break e}}this.P?(Xp(this,h,o),fl&&this.i&&h==3&&(jp(this.S,this.T,"tick",this.hb),this.T.start())):(si(this.j,this.m,o,null),wl(this,o)),h==4&&Ps(this),this.i&&!this.I&&(h==4?bm(this.l,this):(this.i=!1,Ir(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,tn(12)):(this.o=0,tn(13)),Ps(this),qi(this)}}}catch{}finally{}};function xp(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Xp(t,e,n){let s=!0,i;for(;!t.I&&t.C<n.length;)if(i=Q0(t,n),i==ko){e==4&&(t.o=4,tn(14),s=!1),si(t.j,t.m,null,"[Incomplete Response]");break}else if(i==yl){t.o=4,tn(15),si(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else si(t.j,t.m,i,null),wl(t,i);xp(t)&&i!=ko&&i!=yl&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,tn(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),yc(e),e.K=!0,tn(11))):(si(t.j,t.m,n,"[Invalid Chunked Response]"),Ps(t),qi(t))}fe.hb=function(){if(this.g){var t=Gn(this.g),e=this.g.fa();this.C<e.length&&(ta(this),Xp(this,t,e),this.i&&t!=4&&Ir(this))}};function Q0(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?ko:(n=Number(e.substring(n,s)),isNaN(n)?yl:(s+=1,s+n>e.length?ko:(e=e.substr(s,n),t.C=s+n,e)))}fe.cancel=function(){this.I=!0,Ps(this)};function Ir(t){t.V=Date.now()+t.O,Jp(t,t.O)}function Jp(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=kr(Yt(t.gb,t),e)}function ta(t){t.B&&(Ee.clearTimeout(t.B),t.B=null)}fe.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(z0(this.j,this.A),this.K!=2&&(Zi(),tn(17)),Ps(this),this.o=2,qi(this)):Jp(this,this.V-t)};function qi(t){t.l.G==0||t.I||bm(t.l,t)}function Ps(t){ta(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,lc(t.T),qp(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function wl(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||kl(n.h,t))){if(!t.J&&kl(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Io(n),ra(n);else break e;vc(n),tn(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=kr(Yt(n.cb,n),6e3));if(1>=om(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Ns(n,11)}else if((t.J||n.g==t)&&Io(n),!bo(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.T=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.I=c[1],n.ka=c[2];const h=c[3];h!=null&&(n.ma=h,n.j.info("VER="+n.ma));const f=c[4];f!=null&&(n.Ca=f,n.j.info("SVER="+n.Ca));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const m=t.g;if(m){const _=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_){var r=s.h;r.g||_.indexOf("spdy")==-1&&_.indexOf("quic")==-1&&_.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(dc(r,r.h),r.h=null))}if(s.D){const v=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(s.za=v,nt(s.F,s.D,v))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=Em(s,s.H?s.ka:null,s.V),o.J){am(s.h,o);var a=o,l=s.J;l&&a.setTimeout(l),a.B&&(ta(a),Ir(a)),s.g=o}else vm(s);0<n.i.length&&oa(n)}else c[0]!="stop"&&c[0]!="close"||Ns(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Ns(n,7):_c(n):c[0]!="noop"&&n.l&&n.l.wa(c),n.A=0)}}Zi(4)}catch{}}function Y0(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Go(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function x0(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Go(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function Zp(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Go(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=x0(t),s=Y0(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}var em=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function X0(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Ls(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Ls){this.h=e!==void 0?e:t.h,Eo(this,t.j),this.s=t.s,this.g=t.g,To(this,t.m),this.l=t.l,e=t.i;var n=new er;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Lu(this,n),this.o=t.o}else t&&(n=String(t).match(em))?(this.h=!!e,Eo(this,n[1]||"",!0),this.s=Ui(n[2]||""),this.g=Ui(n[3]||"",!0),To(this,n[4]),this.l=Ui(n[5]||"",!0),Lu(this,n[6]||"",!0),this.o=Ui(n[7]||"")):(this.h=!!e,this.i=new er(null,this.h))}Ls.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Fi(e,Mu,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Fi(e,Mu,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Fi(n,n.charAt(0)=="/"?e1:Z0,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Fi(n,n1)),t.join("")};function Jn(t){return new Ls(t)}function Eo(t,e,n){t.j=n?Ui(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function To(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Lu(t,e,n){e instanceof er?(t.i=e,s1(t.i,t.h)):(n||(e=Fi(e,t1)),t.i=new er(e,t.h))}function nt(t,e,n){t.i.set(e,n)}function na(t){return nt(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ui(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Fi(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,J0),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function J0(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Mu=/[#\/\?@]/g,Z0=/[#\?:]/g,e1=/[#\?]/g,t1=/[#\?@]/g,n1=/#/g;function er(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Cs(t){t.g||(t.g=new Map,t.h=0,t.i&&X0(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}fe=er.prototype;fe.add=function(t,e){Cs(this),this.i=null,t=Ei(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function tm(t,e){Cs(t),e=Ei(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function nm(t,e){return Cs(t),e=Ei(t,e),t.g.has(e)}fe.forEach=function(t,e){Cs(this),this.g.forEach(function(n,s){n.forEach(function(i){t.call(e,i,s,this)},this)},this)};fe.oa=function(){Cs(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let r=0;r<i.length;r++)n.push(e[s])}return n};fe.W=function(t){Cs(this);let e=[];if(typeof t=="string")nm(this,t)&&(e=e.concat(this.g.get(Ei(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};fe.set=function(t,e){return Cs(this),this.i=null,t=Ei(this,t),nm(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};fe.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function sm(t,e,n){tm(t,e),0<n.length&&(t.i=null,t.g.set(Ei(t,e),ec(n)),t.h+=n.length)}fe.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};function Ei(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function s1(t,e){e&&!t.j&&(Cs(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(tm(this,s),sm(this,i,n))},t)),t.j=e}var i1=class{constructor(t,e){this.h=t,this.g=e}};function im(t){this.l=t||r1,Ee.PerformanceNavigationTiming?(t=Ee.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Ee.g&&Ee.g.Ga&&Ee.g.Ga()&&Ee.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var r1=10;function rm(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function om(t){return t.h?1:t.g?t.g.size:0}function kl(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function dc(t,e){t.g?t.g.add(e):t.h=e}function am(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}im.prototype.cancel=function(){if(this.i=lm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function lm(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return ec(t.i)}function pc(){}pc.prototype.stringify=function(t){return Ee.JSON.stringify(t,void 0)};pc.prototype.parse=function(t){return Ee.JSON.parse(t,void 0)};function o1(){this.g=new pc}function a1(t,e,n){const s=n||"";try{Zp(t,function(i,r){let o=i;br(i)&&(o=ac(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function l1(t,e){const n=new Xo;if(Ee.Image){const s=new Image;s.onload=Gr(Qr,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Gr(Qr,n,s,"TestLoadImage: error",!1,e),s.onabort=Gr(Qr,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Gr(Qr,n,s,"TestLoadImage: timeout",!1,e),Ee.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Qr(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function Cr(t){this.l=t.ac||null,this.j=t.jb||!1}zt(Cr,uc);Cr.prototype.g=function(){return new sa(this.l,this.j)};Cr.prototype.i=function(t){return function(){return t}}({});function sa(t,e){$t.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=mc,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}zt(sa,$t);var mc=0;fe=sa.prototype;fe.open=function(t,e){if(this.readyState!=mc)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,tr(this)};fe.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||Ee).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};fe.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Sr(this)),this.readyState=mc};fe.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,tr(this)),this.g&&(this.readyState=3,tr(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof Ee.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;cm(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function cm(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}fe.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Sr(this):tr(this),this.readyState==3&&cm(this)}};fe.Va=function(t){this.g&&(this.response=this.responseText=t,Sr(this))};fe.Ua=function(t){this.g&&(this.response=t,Sr(this))};fe.ga=function(){this.g&&Sr(this)};function Sr(t){t.readyState=4,t.l=null,t.j=null,t.A=null,tr(t)}fe.setRequestHeader=function(t,e){this.v.append(t,e)};fe.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};fe.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function tr(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(sa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var c1=Ee.JSON.parse;function ut(t){$t.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=um,this.K=this.L=!1}zt(ut,$t);var um="",u1=/^https?$/i,h1=["POST","PUT"];fe=ut.prototype;fe.Ka=function(t){this.L=t};fe.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():vl.g(),this.C=this.u?Ou(this.u):Ou(vl),this.g.onreadystatechange=Yt(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){$u(this,r);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=Ee.FormData&&t instanceof Ee.FormData,!(0<=Cp(h1,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{dm(this),0<this.B&&((this.K=f1(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Yt(this.qa,this)):this.A=cc(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){$u(this,r)}};function f1(t){return pi&&D0()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}fe.qa=function(){typeof Zl<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ht(this,"timeout"),this.abort(8))};function $u(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,hm(t),ia(t)}function hm(t){t.D||(t.D=!0,Ht(t,"complete"),Ht(t,"error"))}fe.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ht(this,"complete"),Ht(this,"abort"),ia(this))};fe.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ia(this,!0)),ut.X.M.call(this)};fe.Ha=function(){this.s||(this.F||this.v||this.l?fm(this):this.fb())};fe.fb=function(){fm(this)};function fm(t){if(t.h&&typeof Zl<"u"&&(!t.C[1]||Gn(t)!=4||t.aa()!=2)){if(t.v&&Gn(t)==4)cc(t.Ha,0,t);else if(Ht(t,"readystatechange"),Gn(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var i=String(t.H).match(em)[1]||null;if(!i&&Ee.self&&Ee.self.location){var r=Ee.self.location.protocol;i=r.substr(0,r.length-1)}s=!u1.test(i?i.toLowerCase():"")}n=s}if(n)Ht(t,"complete"),Ht(t,"success");else{t.m=6;try{var o=2<Gn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",hm(t)}}finally{ia(t)}}}}function ia(t,e){if(t.g){dm(t);const n=t.g,s=t.C[0]?yo:null;t.g=null,t.C=null,e||Ht(t,"ready");try{n.onreadystatechange=s}catch{}}}function dm(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(Ee.clearTimeout(t.A),t.A=null)}function Gn(t){return t.g?t.g.readyState:0}fe.aa=function(){try{return 2<Gn(this)?this.g.status:-1}catch{return-1}};fe.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};fe.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),c1(e)}};function Uu(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case um:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}fe.Ea=function(){return this.m};fe.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function pm(t){let e="";return nc(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function gc(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=pm(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):nt(t,e,n))}function Ni(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function mm(t){this.Ca=0,this.i=[],this.j=new Xo,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Ni("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Ni("baseRetryDelayMs",5e3,t),this.bb=Ni("retryDelaySeedMs",1e4,t),this.$a=Ni("forwardChannelMaxRetries",2,t),this.ta=Ni("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new im(t&&t.concurrentRequestLimit),this.Fa=new o1,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}fe=mm.prototype;fe.ma=8;fe.G=1;function _c(t){if(gm(t),t.G==3){var e=t.U++,n=Jn(t.F);nt(n,"SID",t.I),nt(n,"RID",e),nt(n,"TYPE","terminate"),Ar(t,n),e=new Tr(t,t.j,e,void 0),e.K=2,e.v=na(Jn(n)),n=!1,Ee.navigator&&Ee.navigator.sendBeacon&&(n=Ee.navigator.sendBeacon(e.v.toString(),"")),!n&&Ee.Image&&(new Image().src=e.v,n=!0),n||(e.g=Tm(e.l,null),e.g.da(e.v)),e.F=Date.now(),Ir(e)}km(t)}function ra(t){t.g&&(yc(t),t.g.cancel(),t.g=null)}function gm(t){ra(t),t.u&&(Ee.clearTimeout(t.u),t.u=null),Io(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&Ee.clearTimeout(t.m),t.m=null)}function oa(t){rm(t.h)||t.m||(t.m=!0,Fp(t.Ja,t),t.C=0)}function d1(t,e){return om(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=kr(Yt(t.Ja,t,e),wm(t,t.C)),t.C++,!0)}fe.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new Tr(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=Rp(r),Pp(r,this.S)):r=this.S),this.o!==null||this.N||(i.H=r,r=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=_m(this,i,e),n=Jn(this.F),nt(n,"RID",t),nt(n,"CVER",22),this.D&&nt(n,"X-HTTP-Session-Id",this.D),Ar(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(pm(r)))+"&"+e:this.o&&gc(n,this.o,r)),dc(this.h,i),this.Ya&&nt(n,"TYPE","init"),this.O?(nt(n,"$req",e),nt(n,"SID","null"),i.Z=!0,bl(i,n,null)):bl(i,n,e),this.G=2}}else this.G==3&&(t?Fu(this,t):this.i.length==0||rm(this.h)||Fu(this))};function Fu(t,e){var n;e?n=e.m:n=t.U++;const s=Jn(t.F);nt(s,"SID",t.I),nt(s,"RID",n),nt(s,"AID",t.T),Ar(t,s),t.o&&t.s&&gc(s,t.o,t.s),n=new Tr(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=_m(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),dc(t.h,n),bl(n,s,e)}function Ar(t,e){t.ia&&nc(t.ia,function(n,s){nt(e,s,n)}),t.l&&Zp({},function(n,s){nt(e,s,n)})}function _m(t,e,n){n=Math.min(t.i.length,n);var s=t.l?Yt(t.l.Ra,t.l,t):null;e:{var i=t.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let c=i[l].h;const h=i[l].g;if(c-=r,0>c)r=Math.max(0,i[l].h-100),a=!1;else try{a1(h,o,"req"+c+"_")}catch{s&&s(h)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function vm(t){t.g||t.u||(t.Z=1,Fp(t.Ia,t),t.A=0)}function vc(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=kr(Yt(t.Ia,t),wm(t,t.A)),t.A++,!0)}fe.Ia=function(){if(this.u=null,ym(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=kr(Yt(this.eb,this),t)}};fe.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,tn(10),ra(this),ym(this))};function yc(t){t.B!=null&&(Ee.clearTimeout(t.B),t.B=null)}function ym(t){t.g=new Tr(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Jn(t.sa);nt(e,"RID","rpc"),nt(e,"SID",t.I),nt(e,"CI",t.L?"0":"1"),nt(e,"AID",t.T),nt(e,"TYPE","xmlhttp"),Ar(t,e),t.o&&t.s&&gc(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=na(Jn(e)),n.s=null,n.P=!0,Yp(n,t)}fe.cb=function(){this.v!=null&&(this.v=null,ra(this),vc(this),tn(19))};function Io(t){t.v!=null&&(Ee.clearTimeout(t.v),t.v=null)}function bm(t,e){var n=null;if(t.g==e){Io(t),yc(t),t.g=null;var s=2}else if(kl(t.h,e))n=e.D,am(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;s=Jo(),Ht(s,new zp(s,n)),oa(t)}else vm(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(s==1&&d1(t,e)||s==2&&vc(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Ns(t,5);break;case 4:Ns(t,10);break;case 3:Ns(t,6);break;default:Ns(t,2)}}}function wm(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Ns(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=Yt(t.kb,t);n||(n=new Ls("//www.google.com/images/cleardot.gif"),Ee.location&&Ee.location.protocol=="http"||Eo(n,"https"),na(n)),l1(n.toString(),s)}else tn(2);t.G=0,t.l&&t.l.va(e),km(t),gm(t)}fe.kb=function(t){t?(this.j.info("Successfully pinged google.com"),tn(2)):(this.j.info("Failed to ping google.com"),tn(1))};function km(t){if(t.G=0,t.la=[],t.l){const e=lm(t.h);(e.length!=0||t.i.length!=0)&&(Su(t.la,e),Su(t.la,t.i),t.h.i.length=0,ec(t.i),t.i.length=0),t.l.ua()}}function Em(t,e,n){var s=n instanceof Ls?Jn(n):new Ls(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),To(s,s.m);else{var i=Ee.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new Ls(null,void 0);s&&Eo(r,s),e&&(r.g=e),i&&To(r,i),n&&(r.l=n),s=r}return n=t.D,e=t.za,n&&e&&nt(s,n,e),nt(s,"VER",t.ma),Ar(t,s),s}function Tm(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new ut(new Cr({jb:!0})):new ut(t.ra),e.Ka(t.H),e}function Im(){}fe=Im.prototype;fe.xa=function(){};fe.wa=function(){};fe.va=function(){};fe.ua=function(){};fe.Ra=function(){};function Co(){if(pi&&!(10<=Number(R0)))throw Error("Environmental error: no available transport.")}Co.prototype.g=function(t,e){return new _n(t,e)};function _n(t,e){$t.call(this),this.g=new mm(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!bo(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!bo(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ti(this)}zt(_n,$t);_n.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;tn(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Em(t,null,t.V),oa(t)};_n.prototype.close=function(){_c(this.g)};_n.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=ac(t),t=n);e.i.push(new i1(e.ab++,t)),e.G==3&&oa(e)};_n.prototype.M=function(){this.g.l=null,delete this.j,_c(this.g),delete this.g,_n.X.M.call(this)};function Cm(t){hc.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}zt(Cm,hc);function Sm(){fc.call(this),this.status=1}zt(Sm,fc);function Ti(t){this.g=t}zt(Ti,Im);Ti.prototype.xa=function(){Ht(this.g,"a")};Ti.prototype.wa=function(t){Ht(this.g,new Cm(t))};Ti.prototype.va=function(t){Ht(this.g,new Sm)};Ti.prototype.ua=function(){Ht(this.g,"b")};Co.prototype.createWebChannel=Co.prototype.g;_n.prototype.send=_n.prototype.u;_n.prototype.open=_n.prototype.m;_n.prototype.close=_n.prototype.close;Zo.NO_ERROR=0;Zo.TIMEOUT=8;Zo.HTTP_ERROR=6;Gp.COMPLETE="complete";Wp.EventType=Er;Er.OPEN="a";Er.CLOSE="b";Er.ERROR="c";Er.MESSAGE="d";$t.prototype.listen=$t.prototype.N;ut.prototype.listenOnce=ut.prototype.O;ut.prototype.getLastError=ut.prototype.Oa;ut.prototype.getLastErrorCode=ut.prototype.Ea;ut.prototype.getStatus=ut.prototype.aa;ut.prototype.getResponseJson=ut.prototype.Sa;ut.prototype.getResponseText=ut.prototype.fa;ut.prototype.send=ut.prototype.da;ut.prototype.setWithCredentials=ut.prototype.Ka;var p1=function(){return new Co},m1=function(){return Jo()},Wa=Zo,g1=Gp,_1=Ys,Vu={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},v1=Cr,Yr=Wp,y1=ut;const Bu="@firebase/firestore";/**
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
 */class Wt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Wt.UNAUTHENTICATED=new Wt(null),Wt.GOOGLE_CREDENTIALS=new Wt("google-credentials-uid"),Wt.FIRST_PARTY=new Wt("first-party-uid"),Wt.MOCK_USER=new Wt("mock-user");/**
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
 */let Ii="9.12.1";/**
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
 */const Hs=new xl("@firebase/firestore");function ju(){return Hs.logLevel}function pe(t,...e){if(Hs.logLevel<=je.DEBUG){const n=e.map(bc);Hs.debug(`Firestore (${Ii}): ${t}`,...n)}}function Zn(t,...e){if(Hs.logLevel<=je.ERROR){const n=e.map(bc);Hs.error(`Firestore (${Ii}): ${t}`,...n)}}function El(t,...e){if(Hs.logLevel<=je.WARN){const n=e.map(bc);Hs.warn(`Firestore (${Ii}): ${t}`,...n)}}function bc(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function Te(t="Unexpected state"){const e=`FIRESTORE (${Ii}) INTERNAL ASSERTION FAILED: `+t;throw Zn(e),new Error(e)}function et(t,e){t||Te()}function Ce(t,e){return t}/**
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
 */const ee={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class be extends is{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class _s{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Am{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class b1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Wt.UNAUTHENTICATED))}shutdown(){}}class w1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class k1{constructor(e){this.t=e,this.currentUser=Wt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=l=>this.i!==s?(s=this.i,n(l)):Promise.resolve();let r=new _s;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new _s,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{pe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(pe("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new _s)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(pe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(et(typeof s.accessToken=="string"),new Am(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return et(e===null||typeof e=="string"),new Wt(e)}}class E1{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i,this.type="FirstParty",this.user=Wt.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(et(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class T1{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i}getToken(){return Promise.resolve(new E1(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(Wt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class I1{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class C1{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=r=>{r.error!=null&&pe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.A;return this.A=r.token,pe("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{pe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.T.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.T.getImmediate({optional:!0});r?i(r):pe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(et(typeof n.token=="string"),this.A=n.token,new I1(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S1(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class Dm{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=S1(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function Ge(t,e){return t<e?-1:t>e?1:0}function mi(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
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
 */class Ct{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new be(ee.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new be(ee.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new be(ee.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new be(ee.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ct.fromMillis(Date.now())}static fromDate(e){return Ct.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Ct(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ge(this.nanoseconds,e.nanoseconds):Ge(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class De{constructor(e){this.timestamp=e}static fromTimestamp(e){return new De(e)}static min(){return new De(new Ct(0,0))}static max(){return new De(new Ct(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class nr{constructor(e,n,s){n===void 0?n=0:n>e.length&&Te(),s===void 0?s=e.length-n:s>e.length-n&&Te(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return nr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof nr?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class st extends nr{construct(e,n,s){return new st(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new be(ee.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new st(n)}static emptyPath(){return new st([])}}const A1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Qt extends nr{construct(e,n,s){return new Qt(e,n,s)}static isValidIdentifier(e){return A1.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Qt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Qt(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new be(ee.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new be(ee.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new be(ee.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new be(ee.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Qt(n)}static emptyPath(){return new Qt([])}}/**
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
 */class ye{constructor(e){this.path=e}static fromPath(e){return new ye(st.fromString(e))}static fromName(e){return new ye(st.fromString(e).popFirst(5))}static empty(){return new ye(st.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&st.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return st.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ye(new st(e.slice()))}}function D1(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=De.fromTimestamp(s===1e9?new Ct(n+1,0):new Ct(n,s));return new ks(i,ye.empty(),e)}function R1(t){return new ks(t.readTime,t.key,-1)}class ks{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new ks(De.min(),ye.empty(),-1)}static max(){return new ks(De.max(),ye.empty(),-1)}}function P1(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ye.comparator(t.documentKey,e.documentKey),n!==0?n:Ge(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class O1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Dr(t){if(t.code!==ee.FAILED_PRECONDITION||t.message!==N1)throw t;pe("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class te{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Te(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new te((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof te?n:te.resolve(n)}catch(n){return te.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):te.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):te.reject(n)}static resolve(e){return new te((n,s)=>{n(e)})}static reject(e){return new te((n,s)=>{s(e)})}static waitFor(e){return new te((n,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},l=>s(l))}),o=!0,r===i&&n()})}static or(e){let n=te.resolve(!1);for(const s of e)n=n.next(i=>i?te.resolve(i):s());return n}static forEach(e,n){const s=[];return e.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(e,n){return new te((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let l=0;l<r;l++){const c=l;n(e[c]).next(h=>{o[c]=h,++a,a===r&&s(o)},h=>i(h))}})}static doWhile(e,n){return new te((s,i)=>{const r=()=>{e()===!0?n().next(()=>{r()},i):s()};r()})}}function Rr(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class wc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}/**
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
 */function qu(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function xs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Rm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */wc.at=-1;class At{constructor(e,n){this.comparator=e,this.root=n||jt.EMPTY}insert(e,n){return new At(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,jt.BLACK,null,null))}remove(e){return new At(this.comparator,this.root.remove(e,this.comparator).copy(null,null,jt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new xr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new xr(this.root,e,this.comparator,!1)}getReverseIterator(){return new xr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new xr(this.root,e,this.comparator,!0)}}class xr{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class jt{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s!=null?s:jt.RED,this.left=i!=null?i:jt.EMPTY,this.right=r!=null?r:jt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new jt(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return jt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return jt.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,jt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,jt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Te();const e=this.left.check();if(e!==this.right.check())throw Te();return e+(this.isRed()?0:1)}}jt.EMPTY=null,jt.RED=!0,jt.BLACK=!1;jt.EMPTY=new class{constructor(){this.size=0}get key(){throw Te()}get value(){throw Te()}get color(){throw Te()}get left(){throw Te()}get right(){throw Te()}copy(t,e,n,s,i){return this}insert(t,e,n){return new jt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class St{constructor(e){this.comparator=e,this.data=new At(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Hu(this.data.getIterator())}getIteratorFrom(e){return new Hu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof St)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new St(this.comparator);return n.data=e,n}}class Hu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e){this.fields=e,e.sort(Qt.comparator)}static empty(){return new wn([])}unionWith(e){let n=new St(Qt.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new wn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return mi(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Jt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(e);return new Jt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ge(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Jt.EMPTY_BYTE_STRING=new Jt("");const L1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Es(t){if(et(!!t),typeof t=="string"){let e=0;const n=L1.exec(t);if(et(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:wt(t.seconds),nanos:wt(t.nanos)}}function wt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function gi(t){return typeof t=="string"?Jt.fromBase64String(t):Jt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pm(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Nm(t){const e=t.mapValue.fields.__previous_value__;return Pm(e)?Nm(e):e}function sr(t){const e=Es(t.mapValue.fields.__local_write_time__.timestampValue);return new Ct(e.seconds,e.nanos)}/**
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
 */class M1{constructor(e,n,s,i,r,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class ir{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ir("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ir&&e.projectId===this.projectId&&e.database===this.database}}function aa(t){return t==null}function So(t){return t===0&&1/t==-1/0}function $1(t){return typeof t=="number"&&Number.isInteger(t)&&!So(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ks(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Pm(t)?4:U1(t)?9007199254740991:10:Te()}function Fn(t,e){if(t===e)return!0;const n=Ks(t);if(n!==Ks(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return sr(t).isEqual(sr(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=Es(s.timestampValue),o=Es(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return gi(s.bytesValue).isEqual(gi(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return wt(s.geoPointValue.latitude)===wt(i.geoPointValue.latitude)&&wt(s.geoPointValue.longitude)===wt(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return wt(s.integerValue)===wt(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=wt(s.doubleValue),o=wt(i.doubleValue);return r===o?So(r)===So(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return mi(t.arrayValue.values||[],e.arrayValue.values||[],Fn);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(qu(r)!==qu(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!Fn(r[a],o[a])))return!1;return!0}(t,e);default:return Te()}}function rr(t,e){return(t.values||[]).find(n=>Fn(n,e))!==void 0}function _i(t,e){if(t===e)return 0;const n=Ks(t),s=Ks(e);if(n!==s)return Ge(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ge(t.booleanValue,e.booleanValue);case 2:return function(i,r){const o=wt(i.integerValue||i.doubleValue),a=wt(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Ku(t.timestampValue,e.timestampValue);case 4:return Ku(sr(t),sr(e));case 5:return Ge(t.stringValue,e.stringValue);case 6:return function(i,r){const o=gi(i),a=gi(r);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=Ge(o[l],a[l]);if(c!==0)return c}return Ge(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,r){const o=Ge(wt(i.latitude),wt(r.latitude));return o!==0?o:Ge(wt(i.longitude),wt(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=_i(o[l],a[l]);if(c)return c}return Ge(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,r){if(i===Xr.mapValue&&r===Xr.mapValue)return 0;if(i===Xr.mapValue)return 1;if(r===Xr.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=r.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let h=0;h<a.length&&h<c.length;++h){const f=Ge(a[h],c[h]);if(f!==0)return f;const d=_i(o[a[h]],l[c[h]]);if(d!==0)return d}return Ge(a.length,c.length)}(t.mapValue,e.mapValue);default:throw Te()}}function Ku(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ge(t,e);const n=Es(t),s=Es(e),i=Ge(n.seconds,s.seconds);return i!==0?i:Ge(n.nanos,s.nanos)}function ai(t){return Tl(t)}function Tl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const i=Es(s);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?gi(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,ye.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=Tl(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${Tl(s.fields[a])}`;return r+"}"}(t.mapValue):Te();var e,n}function Il(t){return!!t&&"integerValue"in t}function kc(t){return!!t&&"arrayValue"in t}function zu(t){return!!t&&"nullValue"in t}function Gu(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function no(t){return!!t&&"mapValue"in t}function Hi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return xs(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Hi(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Hi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function U1(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class fn{constructor(e){this.value=e}static empty(){return new fn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!no(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Hi(n)}setAll(e){let n=Qt.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=Hi(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());no(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Fn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];no(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){xs(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new fn(Hi(this.value))}}function Om(t){const e=[];return xs(t.fields,(n,s)=>{const i=new Qt([n]);if(no(s)){const r=Om(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new wn(e)}/**
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
 */class qt{constructor(e,n,s,i,r,o){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.data=r,this.documentState=o}static newInvalidDocument(e){return new qt(e,0,De.min(),De.min(),fn.empty(),0)}static newFoundDocument(e,n,s){return new qt(e,1,n,De.min(),s,0)}static newNoDocument(e,n){return new qt(e,2,n,De.min(),fn.empty(),0)}static newUnknownDocument(e,n){return new qt(e,3,n,De.min(),fn.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=fn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=fn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=De.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof qt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new qt(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class F1{constructor(e,n=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.ht=null}}function Wu(t,e=null,n=[],s=[],i=null,r=null,o=null){return new F1(t,e,n,s,i,r,o)}function Ec(t){const e=Ce(t);if(e.ht===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>{return(i=s).field.canonicalString()+i.op.toString()+ai(i.value);var i}).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),aa(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>ai(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>ai(s)).join(",")),e.ht=n}return e.ht}function V1(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${ai(s.value)}`;var s}).join(", ")}]`),aa(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>ai(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>ai(n)).join(",")),`Target(${e})`}function Tc(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!W1(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],s=e.filters[i],n.op!==s.op||!n.field.isEqual(s.field)||!Fn(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Yu(t.startAt,e.startAt)&&Yu(t.endAt,e.endAt)}function Cl(t){return ye.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class pn extends class{}{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.lt(e,n,s):new B1(e,n,s):n==="array-contains"?new H1(e,s):n==="in"?new K1(e,s):n==="not-in"?new z1(e,s):n==="array-contains-any"?new G1(e,s):new pn(e,n,s)}static lt(e,n,s){return n==="in"?new j1(e,s):new q1(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.ft(_i(n,this.value)):n!==null&&Ks(this.value)===Ks(n)&&this.ft(_i(n,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Te()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class B1 extends pn{constructor(e,n,s){super(e,n,s),this.key=ye.fromName(s.referenceValue)}matches(e){const n=ye.comparator(e.key,this.key);return this.ft(n)}}class j1 extends pn{constructor(e,n){super(e,"in",n),this.keys=Lm("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class q1 extends pn{constructor(e,n){super(e,"not-in",n),this.keys=Lm("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Lm(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>ye.fromName(s.referenceValue))}class H1 extends pn{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return kc(n)&&rr(n.arrayValue,this.value)}}class K1 extends pn{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&rr(this.value.arrayValue,n)}}class z1 extends pn{constructor(e,n){super(e,"not-in",n)}matches(e){if(rr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!rr(this.value.arrayValue,n)}}class G1 extends pn{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!kc(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>rr(this.value.arrayValue,s))}}class Ao{constructor(e,n){this.position=e,this.inclusive=n}}class Ki{constructor(e,n="asc"){this.field=e,this.dir=n}}function W1(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Qu(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=ye.comparator(ye.fromName(o.referenceValue),n.key):s=_i(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function Yu(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Fn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class la{constructor(e,n=null,s=[],i=[],r=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this._t=null,this.wt=null,this.startAt,this.endAt}}function Q1(t,e,n,s,i,r,o,a){return new la(t,e,n,s,i,r,o,a)}function Mm(t){return new la(t)}function xu(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Y1(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function x1(t){for(const e of t.filters)if(e.dt())return e.field;return null}function X1(t){return t.collectionGroup!==null}function or(t){const e=Ce(t);if(e._t===null){e._t=[];const n=x1(e),s=Y1(e);if(n!==null&&s===null)n.isKeyField()||e._t.push(new Ki(n)),e._t.push(new Ki(Qt.keyField(),"asc"));else{let i=!1;for(const r of e.explicitOrderBy)e._t.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new Ki(Qt.keyField(),r))}}}return e._t}function es(t){const e=Ce(t);if(!e.wt)if(e.limitType==="F")e.wt=Wu(e.path,e.collectionGroup,or(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of or(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new Ki(r.field,o))}const s=e.endAt?new Ao(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Ao(e.startAt.position,e.startAt.inclusive):null;e.wt=Wu(e.path,e.collectionGroup,n,e.filters,e.limit,s,i)}return e.wt}function Sl(t,e,n){return new la(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ca(t,e){return Tc(es(t),es(e))&&t.limitType===e.limitType}function $m(t){return`${Ec(es(t))}|lt:${t.limitType}`}function Al(t){return`Query(target=${V1(es(t))}; limitType=${t.limitType})`}function Ic(t,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):ye.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,s){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=Qu(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,or(n),s)||n.endAt&&!function(i,r,o){const a=Qu(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,or(n),s))}(t,e)}function J1(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Um(t){return(e,n)=>{let s=!1;for(const i of or(t)){const r=Z1(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function Z1(t,e,n){const s=t.field.isKeyField()?ye.comparator(e.key,n.key):function(i,r,o){const a=r.data.field(i),l=o.data.field(i);return a!==null&&l!==null?_i(a,l):Te()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return Te()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fm(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:So(e)?"-0":e}}function Vm(t){return{integerValue:""+t}}function eb(t,e){return $1(e)?Vm(e):Fm(t,e)}/**
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
 */class ua{constructor(){this._=void 0}}function tb(t,e,n){return t instanceof Do?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,e):t instanceof ar?jm(t,e):t instanceof lr?qm(t,e):function(s,i){const r=Bm(s,i),o=Xu(r)+Xu(s.yt);return Il(r)&&Il(s.yt)?Vm(o):Fm(s.It,o)}(t,e)}function nb(t,e,n){return t instanceof ar?jm(t,e):t instanceof lr?qm(t,e):n}function Bm(t,e){return t instanceof Ro?Il(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Do extends ua{}class ar extends ua{constructor(e){super(),this.elements=e}}function jm(t,e){const n=Hm(e);for(const s of t.elements)n.some(i=>Fn(i,s))||n.push(s);return{arrayValue:{values:n}}}class lr extends ua{constructor(e){super(),this.elements=e}}function qm(t,e){let n=Hm(e);for(const s of t.elements)n=n.filter(i=>!Fn(i,s));return{arrayValue:{values:n}}}class Ro extends ua{constructor(e,n){super(),this.It=e,this.yt=n}}function Xu(t){return wt(t.integerValue||t.doubleValue)}function Hm(t){return kc(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function sb(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof ar&&s instanceof ar||n instanceof lr&&s instanceof lr?mi(n.elements,s.elements,Fn):n instanceof Ro&&s instanceof Ro?Fn(n.yt,s.yt):n instanceof Do&&s instanceof Do}(t.transform,e.transform)}class ib{constructor(e,n){this.version=e,this.transformResults=n}}class En{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new En}static exists(e){return new En(void 0,e)}static updateTime(e){return new En(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function so(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ha{}function Km(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Cc(t.key,En.none()):new Pr(t.key,t.data,En.none());{const n=t.data,s=fn.empty();let i=new St(Qt.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new Ss(t.key,s,new wn(i.toArray()),En.none())}}function rb(t,e,n){t instanceof Pr?function(s,i,r){const o=s.value.clone(),a=Zu(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Ss?function(s,i,r){if(!so(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=Zu(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(zm(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function zi(t,e,n,s){return t instanceof Pr?function(i,r,o,a){if(!so(i.precondition,r))return o;const l=i.value.clone(),c=eh(i.fieldTransforms,a,r);return l.setAll(c),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),null}(t,e,n,s):t instanceof Ss?function(i,r,o,a){if(!so(i.precondition,r))return o;const l=eh(i.fieldTransforms,a,r),c=r.data;return c.setAll(zm(i)),c.setAll(l),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,s):function(i,r,o){return so(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(t,e,n)}function ob(t,e){let n=null;for(const s of t.fieldTransforms){const i=e.data.field(s.field),r=Bm(s.transform,i||null);r!=null&&(n===null&&(n=fn.empty()),n.set(s.field,r))}return n||null}function Ju(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&mi(n,s,(i,r)=>sb(i,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Pr extends ha{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ss extends ha{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function zm(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Zu(t,e,n){const s=new Map;et(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,nb(o,a,n[i]))}return s}function eh(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,tb(r,o,e))}return s}class Cc extends ha{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ab extends ha{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class lb{constructor(e){this.count=e}}/**
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
 */var bt,Me;function cb(t){switch(t){default:return Te();case ee.CANCELLED:case ee.UNKNOWN:case ee.DEADLINE_EXCEEDED:case ee.RESOURCE_EXHAUSTED:case ee.INTERNAL:case ee.UNAVAILABLE:case ee.UNAUTHENTICATED:return!1;case ee.INVALID_ARGUMENT:case ee.NOT_FOUND:case ee.ALREADY_EXISTS:case ee.PERMISSION_DENIED:case ee.FAILED_PRECONDITION:case ee.ABORTED:case ee.OUT_OF_RANGE:case ee.UNIMPLEMENTED:case ee.DATA_LOSS:return!0}}function Gm(t){if(t===void 0)return Zn("GRPC error has no .code"),ee.UNKNOWN;switch(t){case bt.OK:return ee.OK;case bt.CANCELLED:return ee.CANCELLED;case bt.UNKNOWN:return ee.UNKNOWN;case bt.DEADLINE_EXCEEDED:return ee.DEADLINE_EXCEEDED;case bt.RESOURCE_EXHAUSTED:return ee.RESOURCE_EXHAUSTED;case bt.INTERNAL:return ee.INTERNAL;case bt.UNAVAILABLE:return ee.UNAVAILABLE;case bt.UNAUTHENTICATED:return ee.UNAUTHENTICATED;case bt.INVALID_ARGUMENT:return ee.INVALID_ARGUMENT;case bt.NOT_FOUND:return ee.NOT_FOUND;case bt.ALREADY_EXISTS:return ee.ALREADY_EXISTS;case bt.PERMISSION_DENIED:return ee.PERMISSION_DENIED;case bt.FAILED_PRECONDITION:return ee.FAILED_PRECONDITION;case bt.ABORTED:return ee.ABORTED;case bt.OUT_OF_RANGE:return ee.OUT_OF_RANGE;case bt.UNIMPLEMENTED:return ee.UNIMPLEMENTED;case bt.DATA_LOSS:return ee.DATA_LOSS;default:return Te()}}(Me=bt||(bt={}))[Me.OK=0]="OK",Me[Me.CANCELLED=1]="CANCELLED",Me[Me.UNKNOWN=2]="UNKNOWN",Me[Me.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Me[Me.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Me[Me.NOT_FOUND=5]="NOT_FOUND",Me[Me.ALREADY_EXISTS=6]="ALREADY_EXISTS",Me[Me.PERMISSION_DENIED=7]="PERMISSION_DENIED",Me[Me.UNAUTHENTICATED=16]="UNAUTHENTICATED",Me[Me.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Me[Me.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Me[Me.ABORTED=10]="ABORTED",Me[Me.OUT_OF_RANGE=11]="OUT_OF_RANGE",Me[Me.UNIMPLEMENTED=12]="UNIMPLEMENTED",Me[Me.INTERNAL=13]="INTERNAL",Me[Me.UNAVAILABLE=14]="UNAVAILABLE",Me[Me.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Ci{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){xs(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return Rm(this.inner)}size(){return this.innerSize}}/**
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
 */const ub=new At(ye.comparator);function ts(){return ub}const Wm=new At(ye.comparator);function Vi(...t){let e=Wm;for(const n of t)e=e.insert(n.key,n);return e}function Qm(t){let e=Wm;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Os(){return Gi()}function Ym(){return Gi()}function Gi(){return new Ci(t=>t.toString(),(t,e)=>t.isEqual(e))}const hb=new At(ye.comparator),fb=new St(ye.comparator);function Oe(...t){let e=fb;for(const n of t)e=e.add(n);return e}const db=new St(Ge);function xm(){return db}/**
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
 */class fa{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const i=new Map;return i.set(e,Nr.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new fa(De.min(),i,xm(),ts(),Oe())}}class Nr{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Nr(s,n,Oe(),Oe(),Oe())}}/**
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
 */class io{constructor(e,n,s,i){this.Tt=e,this.removedTargetIds=n,this.key=s,this.Et=i}}class Xm{constructor(e,n){this.targetId=e,this.At=n}}class Jm{constructor(e,n,s=Jt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class th{constructor(){this.Rt=0,this.bt=sh(),this.Pt=Jt.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=Oe(),n=Oe(),s=Oe();return this.bt.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:Te()}}),new Nr(this.Pt,this.vt,e,n,s)}Nt(){this.Vt=!1,this.bt=sh()}kt(e,n){this.Vt=!0,this.bt=this.bt.insert(e,n)}Ot(e){this.Vt=!0,this.bt=this.bt.remove(e)}Mt(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class pb{constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=ts(),this.qt=nh(),this.Kt=new St(Ge)}Gt(e){for(const n of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(n,e.Et):this.jt(n,e.key,e.Et);for(const n of e.removedTargetIds)this.jt(n,e.key,e.Et)}Wt(e){this.forEachTarget(e,n=>{const s=this.zt(n);switch(e.state){case 0:this.Ht(n)&&s.Ct(e.resumeToken);break;case 1:s.Ft(),s.St||s.Nt(),s.Ct(e.resumeToken);break;case 2:s.Ft(),s.St||this.removeTarget(n);break;case 3:this.Ht(n)&&(s.$t(),s.Ct(e.resumeToken));break;case 4:this.Ht(n)&&(this.Jt(n),s.Ct(e.resumeToken));break;default:Te()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Lt.forEach((s,i)=>{this.Ht(i)&&n(i)})}Yt(e){const n=e.targetId,s=e.At.count,i=this.Xt(n);if(i){const r=i.target;if(Cl(r))if(s===0){const o=new ye(r.path);this.jt(n,o,qt.newNoDocument(o,De.min()))}else et(s===1);else this.Zt(n)!==s&&(this.Jt(n),this.Kt=this.Kt.add(n))}}te(e){const n=new Map;this.Lt.forEach((r,o)=>{const a=this.Xt(o);if(a){if(r.current&&Cl(a.target)){const l=new ye(a.target.path);this.Ut.get(l)!==null||this.ee(o,l)||this.jt(o,l,qt.newNoDocument(l,e))}r.Dt&&(n.set(o,r.xt()),r.Nt())}});let s=Oe();this.qt.forEach((r,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Xt(l);return!c||c.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))}),this.Ut.forEach((r,o)=>o.setReadTime(e));const i=new fa(e,n,this.Kt,this.Ut,s);return this.Ut=ts(),this.qt=nh(),this.Kt=new St(Ge),i}Qt(e,n){if(!this.Ht(e))return;const s=this.ee(e,n.key)?2:0;this.zt(e).kt(n.key,s),this.Ut=this.Ut.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ne(n.key).add(e))}jt(e,n,s){if(!this.Ht(e))return;const i=this.zt(e);this.ee(e,n)?i.kt(n,1):i.Ot(n),this.qt=this.qt.insert(n,this.ne(n).delete(e)),s&&(this.Ut=this.Ut.insert(n,s))}removeTarget(e){this.Lt.delete(e)}Zt(e){const n=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Mt(e){this.zt(e).Mt()}zt(e){let n=this.Lt.get(e);return n||(n=new th,this.Lt.set(e,n)),n}ne(e){let n=this.qt.get(e);return n||(n=new St(Ge),this.qt=this.qt.insert(e,n)),n}Ht(e){const n=this.Xt(e)!==null;return n||pe("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.Lt.get(e);return n&&n.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new th),this.Bt.getRemoteKeysForTarget(e).forEach(n=>{this.jt(e,n,null)})}ee(e,n){return this.Bt.getRemoteKeysForTarget(e).has(n)}}function nh(){return new At(ye.comparator)}function sh(){return new At(ye.comparator)}/**
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
 */const mb=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),gb=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class _b{constructor(e,n){this.databaseId=e,this.gt=n}}function Po(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Zm(t,e){return t.gt?e.toBase64():e.toUint8Array()}function vb(t,e){return Po(t,e.toTimestamp())}function Yn(t){return et(!!t),De.fromTimestamp(function(e){const n=Es(e);return new Ct(n.seconds,n.nanos)}(t))}function Sc(t,e){return function(n){return new st(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function eg(t){const e=st.fromString(t);return et(sg(e)),e}function Dl(t,e){return Sc(t.databaseId,e.path)}function Qa(t,e){const n=eg(e);if(n.get(1)!==t.databaseId.projectId)throw new be(ee.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new be(ee.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ye(tg(n))}function Rl(t,e){return Sc(t.databaseId,e)}function yb(t){const e=eg(t);return e.length===4?st.emptyPath():tg(e)}function Pl(t){return new st(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function tg(t){return et(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function ih(t,e,n){return{name:Dl(t,e),fields:n.value.mapValue.fields}}function bb(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:Te()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(l,c){return l.gt?(et(c===void 0||typeof c=="string"),Jt.fromBase64String(c||"")):(et(c===void 0||c instanceof Uint8Array),Jt.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const c=l.code===void 0?ee.UNKNOWN:Gm(l.code);return new be(c,l.message||"")}(o);n=new Jm(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=Qa(t,s.document.name),r=Yn(s.document.updateTime),o=new fn({mapValue:{fields:s.document.fields}}),a=qt.newFoundDocument(i,r,o),l=s.targetIds||[],c=s.removedTargetIds||[];n=new io(l,c,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=Qa(t,s.document),r=s.readTime?Yn(s.readTime):De.min(),o=qt.newNoDocument(i,r),a=s.removedTargetIds||[];n=new io([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=Qa(t,s.document),r=s.removedTargetIds||[];n=new io([],r,i,null)}else{if(!("filter"in e))return Te();{e.filter;const s=e.filter;s.targetId;const i=s.count||0,r=new lb(i),o=s.targetId;n=new Xm(o,r)}}return n}function wb(t,e){let n;if(e instanceof Pr)n={update:ih(t,e.key,e.value)};else if(e instanceof Cc)n={delete:Dl(t,e.key)};else if(e instanceof Ss)n={update:ih(t,e.key,e.data),updateMask:Pb(e.fieldMask)};else{if(!(e instanceof ab))return Te();n={verify:Dl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof Do)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof ar)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof lr)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Ro)return{fieldPath:r.field.canonicalString(),increment:o.yt};throw Te()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:vb(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Te()}(t,e.precondition)),n}function kb(t,e){return t&&t.length>0?(et(e!==void 0),t.map(n=>function(s,i){let r=s.updateTime?Yn(s.updateTime):Yn(i);return r.isEqual(De.min())&&(r=Yn(i)),new ib(r,s.transformResults||[])}(n,e))):[]}function Eb(t,e){return{documents:[Rl(t,e.path)]}}function Tb(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Rl(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Rl(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(l){if(l.length===0)return;const c=l.map(h=>function(f){if(f.op==="=="){if(Gu(f.value))return{unaryFilter:{field:ti(f.field),op:"IS_NAN"}};if(zu(f.value))return{unaryFilter:{field:ti(f.field),op:"IS_NULL"}}}else if(f.op==="!="){if(Gu(f.value))return{unaryFilter:{field:ti(f.field),op:"IS_NOT_NAN"}};if(zu(f.value))return{unaryFilter:{field:ti(f.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ti(f.field),op:Ab(f.op),value:f.value}}}(h));return c.length===1?c[0]:{compositeFilter:{op:"AND",filters:c}}}(e.filters);i&&(n.structuredQuery.where=i);const r=function(l){if(l.length!==0)return l.map(c=>function(h){return{field:ti(h.field),direction:Sb(h.dir)}}(c))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(l,c){return l.gt||aa(c)?c:{value:c}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function Ib(t){let e=yb(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){et(s===1);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let r=[];n.where&&(r=ng(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(h=>function(f){return new Ki(ii(f.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(f.direction))}(h)));let a=null;n.limit&&(a=function(h){let f;return f=typeof h=="object"?h.value:h,aa(f)?null:f}(n.limit));let l=null;n.startAt&&(l=function(h){const f=!!h.before,d=h.values||[];return new Ao(d,f)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const f=!h.before,d=h.values||[];return new Ao(d,f)}(n.endAt)),Q1(e,i,o,r,a,"F",l,c)}function Cb(t,e){const n=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Te()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function ng(t){return t?t.unaryFilter!==void 0?[Rb(t)]:t.fieldFilter!==void 0?[Db(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>ng(e)).reduce((e,n)=>e.concat(n)):Te():[]}function Sb(t){return mb[t]}function Ab(t){return gb[t]}function ti(t){return{fieldPath:t.canonicalString()}}function ii(t){return Qt.fromServerFormat(t.fieldPath)}function Db(t){return pn.create(ii(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Te()}}(t.fieldFilter.op),t.fieldFilter.value)}function Rb(t){switch(t.unaryFilter.op){case"IS_NAN":const e=ii(t.unaryFilter.field);return pn.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=ii(t.unaryFilter.field);return pn.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ii(t.unaryFilter.field);return pn.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=ii(t.unaryFilter.field);return pn.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Te()}}function Pb(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function sg(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Nb{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&rb(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=zi(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=zi(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Ym();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const l=Km(o,a);l!==null&&s.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(De.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Oe())}isEqual(e){return this.batchId===e.batchId&&mi(this.mutations,e.mutations,(n,s)=>Ju(n,s))&&mi(this.baseMutations,e.baseMutations,(n,s)=>Ju(n,s))}}class Ac{constructor(e,n,s,i){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(e,n,s){et(e.mutations.length===s.length);let i=hb;const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new Ac(e,n,s,i)}}/**
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
 */class Ob{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Ms{constructor(e,n,s,i,r=De.min(),o=De.min(),a=Jt.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Ms(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Ms(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Ms(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class Lb{constructor(e){this.re=e}}function Mb(t){const e=Ib({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Sl(e,e.limit,"L"):e}/**
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
 */class $b{constructor(){this.Ye=new Ub}addToCollectionParentIndex(e,n){return this.Ye.add(n),te.resolve()}getCollectionParents(e,n){return te.resolve(this.Ye.getEntries(n))}addFieldIndex(e,n){return te.resolve()}deleteFieldIndex(e,n){return te.resolve()}getDocumentsMatchingTarget(e,n){return te.resolve(null)}getIndexType(e,n){return te.resolve(0)}getFieldIndexes(e,n){return te.resolve([])}getNextCollectionGroupToUpdate(e){return te.resolve(null)}getMinOffset(e,n){return te.resolve(ks.min())}getMinOffsetFromCollectionGroup(e,n){return te.resolve(ks.min())}updateCollectionGroup(e,n,s){return te.resolve()}updateIndexEntries(e,n){return te.resolve()}}class Ub{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new St(st.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new St(st.comparator)).toArray()}}/**
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
 */class vi{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new vi(0)}static vn(){return new vi(-1)}}/**
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
 */class Fb{constructor(){this.changes=new Ci(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,qt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?te.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Vb{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class Bb{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(s=i,this.getBaseDocument(e,n,s))).next(i=>(s!==null&&zi(s.mutation,i,wn.empty(),Ct.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,Oe()).next(()=>s))}getLocalViewOfDocuments(e,n,s=Oe()){const i=Os();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,s).next(r=>{let o=Vi();return r.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Os();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,Oe()))}populateOverlays(e,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,i){let r=ts();const o=Gi(),a=Gi();return n.forEach((l,c)=>{const h=s.get(c.key);i.has(c.key)&&(h===void 0||h.mutation instanceof Ss)?r=r.insert(c.key,c):h!==void 0&&(o.set(c.key,h.mutation.getFieldMask()),zi(h.mutation,c,h.mutation.getFieldMask(),Ct.now()))}),this.recalculateAndSaveOverlays(e,r).next(l=>(l.forEach((c,h)=>o.set(c,h)),n.forEach((c,h)=>{var f;return a.set(c,new Vb(h,(f=o.get(c))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const s=Gi();let i=new At((o,a)=>o-a),r=Oe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let h=s.get(l)||wn.empty();h=a.applyToLocalView(c,h),s.set(l,h);const f=(i.get(a.batchId)||Oe()).add(l);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,h=l.value,f=Ym();h.forEach(d=>{if(!r.has(d)){const m=Km(n.get(d),s.get(d));m!==null&&f.set(d,m),r=r.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return te.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(i){return ye.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):X1(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):te.resolve(Os());let a=-1,l=r;return o.next(c=>te.forEach(c,(h,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),r.get(h)?te.resolve():this.getBaseDocument(e,h,f).next(d=>{l=l.insert(h,d)}))).next(()=>this.populateOverlays(e,c,r)).next(()=>this.computeViews(e,l,c,Oe())).next(h=>({batchId:a,changes:Qm(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ye(n)).next(s=>{let i=Vi();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const i=n.collectionGroup;let r=Vi();return this.indexManager.getCollectionParents(e,i).next(o=>te.forEach(o,a=>{const l=function(c,h){return new la(h,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,s).next(c=>{c.forEach((h,f)=>{r=r.insert(h,f)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,s){let i;return this.remoteDocumentCache.getAllFromCollection(e,n.path,s).next(r=>(i=r,this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId))).next(r=>{r.forEach((a,l)=>{const c=l.getKey();i.get(c)===null&&(i=i.insert(c,qt.newInvalidDocument(c)))});let o=Vi();return i.forEach((a,l)=>{const c=r.get(a);c!==void 0&&zi(c.mutation,l,wn.empty(),Ct.now()),Ic(n,l)&&(o=o.insert(a,l))}),o})}getBaseDocument(e,n,s){return s===null||s.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):te.resolve(qt.newInvalidDocument(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jb{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return te.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:Yn(s.createTime)}),te.resolve()}getNamedQuery(e,n){return te.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(s){return{name:s.name,query:Mb(s.bundledQuery),readTime:Yn(s.readTime)}}(n)),te.resolve()}}/**
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
 */class qb{constructor(){this.overlays=new At(ye.comparator),this.es=new Map}getOverlay(e,n){return te.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Os();return te.forEach(n,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((i,r)=>{this.ue(e,n,r)}),te.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.es.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.es.delete(s)),te.resolve()}getOverlaysForCollection(e,n,s){const i=Os(),r=n.length+1,o=new ye(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===r&&l.largestBatchId>s&&i.set(l.getKey(),l)}return te.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new At((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>s){let h=r.get(c.largestBatchId);h===null&&(h=Os(),r=r.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const a=Os(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,h)=>a.set(c,h)),!(a.size()>=i)););return te.resolve(a)}ue(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.es.get(i.largestBatchId).delete(s.key);this.es.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new Ob(n,s));let r=this.es.get(n);r===void 0&&(r=Oe(),this.es.set(n,r)),this.es.set(n,r.add(s.key))}}/**
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
 */class Dc{constructor(){this.ns=new St(Ot.ss),this.rs=new St(Ot.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const s=new Ot(e,n);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.cs(new Ot(e,n))}hs(e,n){e.forEach(s=>this.removeReference(s,n))}ls(e){const n=new ye(new st([])),s=new Ot(n,e),i=new Ot(n,e+1),r=[];return this.rs.forEachInRange([s,i],o=>{this.cs(o),r.push(o.key)}),r}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new ye(new st([])),s=new Ot(n,e),i=new Ot(n,e+1);let r=Oe();return this.rs.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new Ot(e,0),s=this.ns.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Ot{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return ye.comparator(e.key,n.key)||Ge(e._s,n._s)}static os(e,n){return Ge(e._s,n._s)||ye.comparator(e.key,n.key)}}/**
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
 */class Hb{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new St(Ot.ss)}checkEmpty(e){return te.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Nb(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.gs=this.gs.add(new Ot(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return te.resolve(o)}lookupMutationBatch(e,n){return te.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.ps(s),r=i<0?0:i;return te.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return te.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return te.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Ot(n,0),i=new Ot(n,Number.POSITIVE_INFINITY),r=[];return this.gs.forEachInRange([s,i],o=>{const a=this.ys(o._s);r.push(a)}),te.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new St(Ge);return n.forEach(i=>{const r=new Ot(i,0),o=new Ot(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([r,o],a=>{s=s.add(a._s)})}),te.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;ye.isDocumentKey(r)||(r=r.child(""));const o=new Ot(new ye(r),0);let a=new St(Ge);return this.gs.forEachWhile(l=>{const c=l.key.path;return!!s.isPrefixOf(c)&&(c.length===i&&(a=a.add(l._s)),!0)},o),te.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(s=>{const i=this.ys(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){et(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return te.forEach(n.mutations,i=>{const r=new Ot(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.gs=s})}An(e){}containsKey(e,n){const s=new Ot(n,0),i=this.gs.firstAfterOrEqual(s);return te.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,te.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class Kb{constructor(e){this.Es=e,this.docs=new At(ye.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Es(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return te.resolve(s?s.document.mutableCopy():qt.newInvalidDocument(n))}getEntries(e,n){let s=ts();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():qt.newInvalidDocument(i))}),te.resolve(s)}getAllFromCollection(e,n,s){let i=ts();const r=new ye(n.child("")),o=this.docs.getIteratorFrom(r);for(;o.hasNext();){const{key:a,value:{document:l}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||P1(R1(l),s)<=0||(i=i.insert(l.key,l.mutableCopy()))}return te.resolve(i)}getAllFromCollectionGroup(e,n,s,i){Te()}As(e,n){return te.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new zb(this)}getSize(e){return te.resolve(this.size)}}class zb extends Fb{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.Yn.addEntry(e,i)):this.Yn.removeEntry(s)}),te.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
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
 */class Gb{constructor(e){this.persistence=e,this.Rs=new Ci(n=>Ec(n),Tc),this.lastRemoteSnapshotVersion=De.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Dc,this.targetCount=0,this.vs=vi.Pn()}forEachTarget(e,n){return this.Rs.forEach((s,i)=>n(i)),te.resolve()}getLastRemoteSnapshotVersion(e){return te.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return te.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),te.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),te.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new vi(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,te.resolve()}updateTargetData(e,n){return this.Dn(n),te.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,te.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Rs.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),te.waitFor(r).next(()=>i)}getTargetCount(e){return te.resolve(this.targetCount)}getTargetData(e,n){const s=this.Rs.get(n)||null;return te.resolve(s)}addMatchingKeys(e,n,s){return this.Ps.us(n,s),te.resolve()}removeMatchingKeys(e,n,s){this.Ps.hs(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),te.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),te.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Ps.ds(n);return te.resolve(s)}containsKey(e,n){return te.resolve(this.Ps.containsKey(n))}}/**
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
 */class Wb{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new wc(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new Gb(this),this.indexManager=new $b,this.remoteDocumentCache=function(s){return new Kb(s)}(s=>this.referenceDelegate.xs(s)),this.It=new Lb(n),this.Ns=new jb(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new qb,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Vs[e.toKey()];return s||(s=new Hb(n,this.referenceDelegate),this.Vs[e.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,s){pe("MemoryPersistence","Starting transaction:",e);const i=new Qb(this.Ss.next());return this.referenceDelegate.ks(),s(i).next(r=>this.referenceDelegate.Os(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Ms(e,n){return te.or(Object.values(this.Vs).map(s=>()=>s.containsKey(e,n)))}}class Qb extends O1{constructor(e){super(),this.currentSequenceNumber=e}}class Rc{constructor(e){this.persistence=e,this.Fs=new Dc,this.$s=null}static Bs(e){return new Rc(e)}get Ls(){if(this.$s)return this.$s;throw Te()}addReference(e,n,s){return this.Fs.addReference(s,n),this.Ls.delete(s.toString()),te.resolve()}removeReference(e,n,s){return this.Fs.removeReference(s,n),this.Ls.add(s.toString()),te.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),te.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(i=>this.Ls.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.Ls.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return te.forEach(this.Ls,s=>{const i=ye.fromPath(s);return this.Us(e,i).next(r=>{r||n.removeEntry(i,De.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.Us(e,n).next(s=>{s?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}Us(e,n){return te.or([()=>te.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
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
 */class Pc{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.Si=s,this.Di=i}static Ci(e,n){let s=Oe(),i=Oe();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new Pc(e,n.fromCache,s,i)}}/**
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
 */class Yb{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,s,i){return this.ki(e,n).next(r=>r||this.Oi(e,n,i,s)).next(r=>r||this.Mi(e,n))}ki(e,n){if(xu(n))return te.resolve(null);let s=es(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Sl(n,null,"F"),s=es(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=Oe(...r);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(l=>{const c=this.Fi(n,a);return this.$i(n,c,o,l.readTime)?this.ki(e,Sl(n,null,"F")):this.Bi(e,c,n,l)}))})))}Oi(e,n,s,i){return xu(n)||i.isEqual(De.min())?this.Mi(e,n):this.Ni.getDocuments(e,s).next(r=>{const o=this.Fi(n,r);return this.$i(n,o,s,i)?this.Mi(e,n):(ju()<=je.DEBUG&&pe("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Al(n)),this.Bi(e,o,n,D1(i,-1)))})}Fi(e,n){let s=new St(Um(e));return n.forEach((i,r)=>{Ic(e,r)&&(s=s.add(r))}),s}$i(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Mi(e,n){return ju()<=je.DEBUG&&pe("QueryEngine","Using full collection scan to execute query:",Al(n)),this.Ni.getDocumentsMatchingQuery(e,n,ks.min())}Bi(e,n,s,i){return this.Ni.getDocumentsMatchingQuery(e,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xb{constructor(e,n,s,i){this.persistence=e,this.Li=n,this.It=i,this.Ui=new At(Ge),this.qi=new Ci(r=>Ec(r),Tc),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(s)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Bb(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ui))}}function Xb(t,e,n,s){return new xb(t,e,n,s)}async function ig(t,e){const n=Ce(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.Qi(e),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let l=Oe();for(const c of i){o.push(c.batchId);for(const h of c.mutations)l=l.add(h.key)}for(const c of r){a.push(c.batchId);for(const h of c.mutations)l=l.add(h.key)}return n.localDocuments.getDocuments(s,l).next(c=>({ji:c,removedBatchIds:o,addedBatchIds:a}))})})}function Jb(t,e){const n=Ce(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,c){const h=l.batch,f=h.keys();let d=te.resolve();return f.forEach(m=>{d=d.next(()=>c.getEntry(a,m)).next(_=>{const v=l.docVersions.get(m);et(v!==null),_.version.compareTo(v)<0&&(h.applyToRemoteDocument(_,l),_.isValidDocument()&&(_.setReadTime(l.commitVersion),c.addEntry(_)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,h))}(n,s,e,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=Oe();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,i))})}function rg(t){const e=Ce(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function Zb(t,e){const n=Ce(t),s=e.snapshotVersion;let i=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.Ui;const a=[];e.targetChanges.forEach((h,f)=>{const d=i.get(f);if(!d)return;a.push(n.Cs.removeMatchingKeys(r,h.removedDocuments,f).next(()=>n.Cs.addMatchingKeys(r,h.addedDocuments,f)));let m=d.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.has(f)?m=m.withResumeToken(Jt.EMPTY_BYTE_STRING,De.min()).withLastLimboFreeSnapshotVersion(De.min()):h.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(h.resumeToken,s)),i=i.insert(f,m),function(_,v,k){return _.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-_.snapshotVersion.toMicroseconds()>=3e8?!0:k.addedDocuments.size+k.modifiedDocuments.size+k.removedDocuments.size>0}(d,m,h)&&a.push(n.Cs.updateTargetData(r,m))});let l=ts(),c=Oe();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,h))}),a.push(ew(r,o,e.documentUpdates).next(h=>{l=h.Wi,c=h.zi})),!s.isEqual(De.min())){const h=n.Cs.getLastRemoteSnapshotVersion(r).next(f=>n.Cs.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(h)}return te.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,l,c)).next(()=>l)}).then(r=>(n.Ui=i,r))}function ew(t,e,n){let s=Oe(),i=Oe();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let o=ts();return n.forEach((a,l)=>{const c=r.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(De.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):pe("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{Wi:o,zi:i}})}function tw(t,e){const n=Ce(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function nw(t,e){const n=Ce(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Cs.getTargetData(s,e).next(r=>r?(i=r,te.resolve(i)):n.Cs.allocateTargetId(s).next(o=>(i=new Ms(e,o,0,s.currentSequenceNumber),n.Cs.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.Ui.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(s.targetId,s),n.qi.set(e,s.targetId)),s})}async function Nl(t,e,n){const s=Ce(t),i=s.Ui.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Rr(o))throw o;pe("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ui=s.Ui.remove(e),s.qi.delete(i.target)}function rh(t,e,n){const s=Ce(t);let i=De.min(),r=Oe();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,l,c){const h=Ce(a),f=h.qi.get(c);return f!==void 0?te.resolve(h.Ui.get(f)):h.Cs.getTargetData(l,c)}(s,o,es(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{r=l})}).next(()=>s.Li.getDocumentsMatchingQuery(o,e,n?i:De.min(),n?r:Oe())).next(a=>(sw(s,J1(e),a),{documents:a,Hi:r})))}function sw(t,e,n){let s=t.Ki.get(e)||De.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),t.Ki.set(e,s)}class oh{constructor(){this.activeTargetIds=xm()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class iw{constructor(){this.Lr=new oh,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,n,s){this.Ur[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new oh,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class rw{qr(e){}shutdown(){}}/**
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
 */class ah{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){pe("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){pe("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ow={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class aw{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
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
 */class lw extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,s,i,r){const o=this.ho(e,n);pe("RestConnection","Sending: ",o,s);const a={};return this.lo(a,i,r),this.fo(e,o,a,s).then(l=>(pe("RestConnection","Received: ",l),l),l=>{throw El("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",s),l})}_o(e,n,s,i,r,o){return this.ao(e,n,s,i,r)}lo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Ii,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>e[r]=i),s&&s.headers.forEach((i,r)=>e[r]=i)}ho(e,n){const s=ow[e];return`${this.oo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,s,i){return new Promise((r,o)=>{const a=new y1;a.setWithCredentials(!0),a.listenOnce(g1.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Wa.NO_ERROR:const c=a.getResponseJson();pe("Connection","XHR received:",JSON.stringify(c)),r(c);break;case Wa.TIMEOUT:pe("Connection",'RPC "'+e+'" timed out'),o(new be(ee.DEADLINE_EXCEEDED,"Request time out"));break;case Wa.HTTP_ERROR:const h=a.getStatus();if(pe("Connection",'RPC "'+e+'" failed with status:',h,"response text:",a.getResponseText()),h>0){const f=a.getResponseJson().error;if(f&&f.status&&f.message){const d=function(m){const _=m.toLowerCase().replace(/_/g,"-");return Object.values(ee).indexOf(_)>=0?_:ee.UNKNOWN}(f.status);o(new be(d,f.message))}else o(new be(ee.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new be(ee.UNAVAILABLE,"Connection failed."));break;default:Te()}}finally{pe("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(i);a.send(n,"POST",l,s,15)})}wo(e,n,s){const i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=p1(),o=m1(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new v1({})),this.lo(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const l=i.join("");pe("Connection","Creating WebChannel: "+l,a);const c=r.createWebChannel(l,a);let h=!1,f=!1;const d=new aw({Hr:_=>{f?pe("Connection","Not sending because WebChannel is closed:",_):(h||(pe("Connection","Opening WebChannel transport."),c.open(),h=!0),pe("Connection","WebChannel sending:",_),c.send(_))},Jr:()=>c.close()}),m=(_,v,k)=>{_.listen(v,E=>{try{k(E)}catch(I){setTimeout(()=>{throw I},0)}})};return m(c,Yr.EventType.OPEN,()=>{f||pe("Connection","WebChannel transport opened.")}),m(c,Yr.EventType.CLOSE,()=>{f||(f=!0,pe("Connection","WebChannel transport closed"),d.io())}),m(c,Yr.EventType.ERROR,_=>{f||(f=!0,El("Connection","WebChannel transport errored:",_),d.io(new be(ee.UNAVAILABLE,"The operation could not be completed")))}),m(c,Yr.EventType.MESSAGE,_=>{var v;if(!f){const k=_.data[0];et(!!k);const E=k,I=E.error||((v=E[0])===null||v===void 0?void 0:v.error);if(I){pe("Connection","WebChannel received error:",I);const M=I.status;let A=function(L){const F=bt[L];if(F!==void 0)return Gm(F)}(M),j=I.message;A===void 0&&(A=ee.INTERNAL,j="Unknown error status: "+M+" with message "+I.message),f=!0,d.io(new be(A,j)),c.close()}else pe("Connection","WebChannel received:",k),d.ro(k)}}),m(o,_1.STAT_EVENT,_=>{_.stat===Vu.PROXY?pe("Connection","Detected buffering proxy"):_.stat===Vu.NOPROXY&&pe("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}function Ya(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function da(t){return new _b(t,!0)}class og{constructor(e,n,s=1e3,i=1.5,r=6e4){this.Hs=e,this.timerId=n,this.mo=s,this.yo=i,this.po=r,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-s);i>0&&pe("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
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
 */class ag{constructor(e,n,s,i,r,o,a,l){this.Hs=e,this.vo=s,this.Vo=i,this.So=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Do=0,this.Co=null,this.xo=null,this.stream=null,this.No=new og(e,n)}ko(){return this.state===1||this.state===5||this.Oo()}Oo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Mo()}async stop(){this.ko()&&await this.close(0)}Fo(){this.state=0,this.No.reset()}$o(){this.Oo()&&this.Co===null&&(this.Co=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.Bo()))}Lo(e){this.Uo(),this.stream.send(e)}async Bo(){if(this.Oo())return this.close(0)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}qo(){this.xo&&(this.xo.cancel(),this.xo=null)}async close(e,n){this.Uo(),this.qo(),this.No.cancel(),this.Do++,e!==4?this.No.reset():n&&n.code===ee.RESOURCE_EXHAUSTED?(Zn(n.toString()),Zn("Using maximum backoff delay to prevent overloading the backend."),this.No.Ao()):n&&n.code===ee.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Ko(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}Ko(){}auth(){this.state=1;const e=this.Go(this.Do),n=this.Do;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Do===n&&this.Qo(s,i)},s=>{e(()=>{const i=new be(ee.UNKNOWN,"Fetching auth token failed: "+s.message);return this.jo(i)})})}Qo(e,n){const s=this.Go(this.Do);this.stream=this.Wo(e,n),this.stream.Yr(()=>{s(()=>(this.state=2,this.xo=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.Oo()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{s(()=>this.jo(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Mo(){this.state=5,this.No.Ro(async()=>{this.state=0,this.start()})}jo(e){return pe("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Go(e){return n=>{this.Hs.enqueueAndForget(()=>this.Do===e?n():(pe("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class cw extends ag{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.It=r}Wo(e,n){return this.So.wo("Listen",e,n)}onMessage(e){this.No.reset();const n=bb(this.It,e),s=function(i){if(!("targetChange"in i))return De.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?De.min():r.readTime?Yn(r.readTime):De.min()}(e);return this.listener.zo(n,s)}Ho(e){const n={};n.database=Pl(this.It),n.addTarget=function(i,r){let o;const a=r.target;return o=Cl(a)?{documents:Eb(i,a)}:{query:Tb(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=Zm(i,r.resumeToken):r.snapshotVersion.compareTo(De.min())>0&&(o.readTime=Po(i,r.snapshotVersion.toTimestamp())),o}(this.It,e);const s=Cb(this.It,e);s&&(n.labels=s),this.Lo(n)}Jo(e){const n={};n.database=Pl(this.It),n.removeTarget=e,this.Lo(n)}}class uw extends ag{constructor(e,n,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.It=r,this.Yo=!1}get Xo(){return this.Yo}start(){this.Yo=!1,this.lastStreamToken=void 0,super.start()}Ko(){this.Yo&&this.Zo([])}Wo(e,n){return this.So.wo("Write",e,n)}onMessage(e){if(et(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Yo){this.No.reset();const n=kb(e.writeResults,e.commitTime),s=Yn(e.commitTime);return this.listener.tu(s,n)}return et(!e.writeResults||e.writeResults.length===0),this.Yo=!0,this.listener.eu()}nu(){const e={};e.database=Pl(this.It),this.Lo(e)}Zo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>wb(this.It,s))};this.Lo(n)}}/**
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
 */class hw extends class{}{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.So=s,this.It=i,this.su=!1}iu(){if(this.su)throw new be(ee.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,s){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.So.ao(e,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===ee.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new be(ee.UNKNOWN,i.toString())})}_o(e,n,s,i){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.So._o(e,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===ee.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new be(ee.UNKNOWN,r.toString())})}terminate(){this.su=!0}}class fw{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ru=0,this.ou=null,this.uu=!0}cu(){this.ru===0&&(this.au("Unknown"),this.ou=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ou=null,this.hu("Backend didn't respond within 10 seconds."),this.au("Offline"),Promise.resolve())))}lu(e){this.state==="Online"?this.au("Unknown"):(this.ru++,this.ru>=1&&(this.fu(),this.hu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.au("Offline")))}set(e){this.fu(),this.ru=0,e==="Online"&&(this.uu=!1),this.au(e)}au(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}hu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.uu?(Zn(n),this.uu=!1):pe("OnlineStateTracker",n)}fu(){this.ou!==null&&(this.ou.cancel(),this.ou=null)}}/**
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
 */class dw{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.du=[],this._u=new Map,this.wu=new Set,this.mu=[],this.gu=r,this.gu.qr(o=>{s.enqueueAndForget(async()=>{Xs(this)&&(pe("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=Ce(a);l.wu.add(4),await Or(l),l.yu.set("Unknown"),l.wu.delete(4),await pa(l)}(this))})}),this.yu=new fw(s,i)}}async function pa(t){if(Xs(t))for(const e of t.mu)await e(!0)}async function Or(t){for(const e of t.mu)await e(!1)}function lg(t,e){const n=Ce(t);n._u.has(e.targetId)||(n._u.set(e.targetId,e),Lc(n)?Oc(n):Si(n).Oo()&&Nc(n,e))}function cg(t,e){const n=Ce(t),s=Si(n);n._u.delete(e),s.Oo()&&ug(n,e),n._u.size===0&&(s.Oo()?s.$o():Xs(n)&&n.yu.set("Unknown"))}function Nc(t,e){t.pu.Mt(e.targetId),Si(t).Ho(e)}function ug(t,e){t.pu.Mt(e),Si(t).Jo(e)}function Oc(t){t.pu=new pb({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t._u.get(e)||null}),Si(t).start(),t.yu.cu()}function Lc(t){return Xs(t)&&!Si(t).ko()&&t._u.size>0}function Xs(t){return Ce(t).wu.size===0}function hg(t){t.pu=void 0}async function pw(t){t._u.forEach((e,n)=>{Nc(t,e)})}async function mw(t,e){hg(t),Lc(t)?(t.yu.lu(e),Oc(t)):t.yu.set("Unknown")}async function gw(t,e,n){if(t.yu.set("Online"),e instanceof Jm&&e.state===2&&e.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s._u.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s._u.delete(o),s.pu.removeTarget(o))}(t,e)}catch(s){pe("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await No(t,s)}else if(e instanceof io?t.pu.Gt(e):e instanceof Xm?t.pu.Yt(e):t.pu.Wt(e),!n.isEqual(De.min()))try{const s=await rg(t.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.pu.te(r);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const c=i._u.get(l);c&&i._u.set(l,c.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const l=i._u.get(a);if(!l)return;i._u.set(a,l.withResumeToken(Jt.EMPTY_BYTE_STRING,l.snapshotVersion)),ug(i,a);const c=new Ms(l.target,a,1,l.sequenceNumber);Nc(i,c)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){pe("RemoteStore","Failed to raise snapshot:",s),await No(t,s)}}async function No(t,e,n){if(!Rr(e))throw e;t.wu.add(1),await Or(t),t.yu.set("Offline"),n||(n=()=>rg(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{pe("RemoteStore","Retrying IndexedDB access"),await n(),t.wu.delete(1),await pa(t)})}function fg(t,e){return e().catch(n=>No(t,n,e))}async function ma(t){const e=Ce(t),n=Ts(e);let s=e.du.length>0?e.du[e.du.length-1].batchId:-1;for(;_w(e);)try{const i=await tw(e.localStore,s);if(i===null){e.du.length===0&&n.$o();break}s=i.batchId,vw(e,i)}catch(i){await No(e,i)}dg(e)&&pg(e)}function _w(t){return Xs(t)&&t.du.length<10}function vw(t,e){t.du.push(e);const n=Ts(t);n.Oo()&&n.Xo&&n.Zo(e.mutations)}function dg(t){return Xs(t)&&!Ts(t).ko()&&t.du.length>0}function pg(t){Ts(t).start()}async function yw(t){Ts(t).nu()}async function bw(t){const e=Ts(t);for(const n of t.du)e.Zo(n.mutations)}async function ww(t,e,n){const s=t.du.shift(),i=Ac.from(s,e,n);await fg(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await ma(t)}async function kw(t,e){e&&Ts(t).Xo&&await async function(n,s){if(i=s.code,cb(i)&&i!==ee.ABORTED){const r=n.du.shift();Ts(n).Fo(),await fg(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await ma(n)}var i}(t,e),dg(t)&&pg(t)}async function lh(t,e){const n=Ce(t);n.asyncQueue.verifyOperationInProgress(),pe("RemoteStore","RemoteStore received new credentials");const s=Xs(n);n.wu.add(3),await Or(n),s&&n.yu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.wu.delete(3),await pa(n)}async function Ew(t,e){const n=Ce(t);e?(n.wu.delete(2),await pa(n)):e||(n.wu.add(2),await Or(n),n.yu.set("Unknown"))}function Si(t){return t.Iu||(t.Iu=function(e,n,s){const i=Ce(e);return i.iu(),new cw(n,i.So,i.authCredentials,i.appCheckCredentials,i.It,s)}(t.datastore,t.asyncQueue,{Yr:pw.bind(null,t),Zr:mw.bind(null,t),zo:gw.bind(null,t)}),t.mu.push(async e=>{e?(t.Iu.Fo(),Lc(t)?Oc(t):t.yu.set("Unknown")):(await t.Iu.stop(),hg(t))})),t.Iu}function Ts(t){return t.Tu||(t.Tu=function(e,n,s){const i=Ce(e);return i.iu(),new uw(n,i.So,i.authCredentials,i.appCheckCredentials,i.It,s)}(t.datastore,t.asyncQueue,{Yr:yw.bind(null,t),Zr:kw.bind(null,t),eu:bw.bind(null,t),tu:ww.bind(null,t)}),t.mu.push(async e=>{e?(t.Tu.Fo(),await ma(t)):(await t.Tu.stop(),t.du.length>0&&(pe("RemoteStore",`Stopping write stream with ${t.du.length} pending writes`),t.du=[]))})),t.Tu}/**
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
 */class Mc{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new _s,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new Mc(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new be(ee.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function $c(t,e){if(Zn("AsyncQueue",`${e}: ${t}`),Rr(t))return new be(ee.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class li{constructor(e){this.comparator=e?(n,s)=>e(n,s)||ye.comparator(n.key,s.key):(n,s)=>ye.comparator(n.key,s.key),this.keyedMap=Vi(),this.sortedSet=new At(this.comparator)}static emptySet(e){return new li(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof li)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class ch{constructor(){this.Eu=new At(ye.comparator)}track(e){const n=e.doc.key,s=this.Eu.get(n);s?e.type!==0&&s.type===3?this.Eu=this.Eu.insert(n,e):e.type===3&&s.type!==1?this.Eu=this.Eu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Eu=this.Eu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Eu=this.Eu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Eu=this.Eu.remove(n):e.type===1&&s.type===2?this.Eu=this.Eu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Eu=this.Eu.insert(n,{type:2,doc:e.doc}):Te():this.Eu=this.Eu.insert(n,e)}Au(){const e=[];return this.Eu.inorderTraversal((n,s)=>{e.push(s)}),e}}class yi{constructor(e,n,s,i,r,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,s,i,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new yi(e,n,li.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ca(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
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
 */class Tw{constructor(){this.Ru=void 0,this.listeners=[]}}class Iw{constructor(){this.queries=new Ci(e=>$m(e),ca),this.onlineState="Unknown",this.bu=new Set}}async function Cw(t,e){const n=Ce(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new Tw),i)try{r.Ru=await n.onListen(s)}catch(o){const a=$c(o,`Initialization of query '${Al(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,r),r.listeners.push(e),e.Pu(n.onlineState),r.Ru&&e.vu(r.Ru)&&Uc(n)}async function Sw(t,e){const n=Ce(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function Aw(t,e){const n=Ce(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.vu(i)&&(s=!0);o.Ru=i}}s&&Uc(n)}function Dw(t,e,n){const s=Ce(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function Uc(t){t.bu.forEach(e=>{e.next()})}class Rw{constructor(e,n,s){this.query=e,this.Vu=n,this.Su=!1,this.Du=null,this.onlineState="Unknown",this.options=s||{}}vu(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new yi(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Su?this.Cu(e)&&(this.Vu.next(e),n=!0):this.xu(e,this.onlineState)&&(this.Nu(e),n=!0),this.Du=e,n}onError(e){this.Vu.error(e)}Pu(e){this.onlineState=e;let n=!1;return this.Du&&!this.Su&&this.xu(this.Du,e)&&(this.Nu(this.Du),n=!0),n}xu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.ku||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Cu(e){if(e.docChanges.length>0)return!0;const n=this.Du&&this.Du.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Nu(e){e=yi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Su=!0,this.Vu.next(e)}}/**
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
 */class mg{constructor(e){this.key=e}}class gg{constructor(e){this.key=e}}class Pw{constructor(e,n){this.query=e,this.Uu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=Oe(),this.mutatedKeys=Oe(),this.Gu=Um(e),this.Qu=new li(this.Gu)}get ju(){return this.Uu}Wu(e,n){const s=n?n.zu:new ch,i=n?n.Qu:this.Qu;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,f)=>{const d=i.get(h),m=Ic(this.query,f)?f:null,_=!!d&&this.mutatedKeys.has(d.key),v=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let k=!1;d&&m?d.data.isEqual(m.data)?_!==v&&(s.track({type:3,doc:m}),k=!0):this.Hu(d,m)||(s.track({type:2,doc:m}),k=!0,(l&&this.Gu(m,l)>0||c&&this.Gu(m,c)<0)&&(a=!0)):!d&&m?(s.track({type:0,doc:m}),k=!0):d&&!m&&(s.track({type:1,doc:d}),k=!0,(l||c)&&(a=!0)),k&&(m?(o=o.add(m),r=v?r.add(h):r.delete(h)):(o=o.delete(h),r=r.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),r=r.delete(h.key),s.track({type:1,doc:h})}return{Qu:o,zu:s,$i:a,mutatedKeys:r}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const i=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const r=e.zu.Au();r.sort((c,h)=>function(f,d){const m=_=>{switch(_){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Te()}};return m(f)-m(d)}(c.type,h.type)||this.Gu(c.doc,h.doc)),this.Ju(s);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,l=a!==this.qu;return this.qu=a,r.length!==0||l?{snapshot:new yi(this.query,e.Qu,i,r,e.mutatedKeys,a===0,l,!1,!!s&&s.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}Pu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new ch,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.Uu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.Uu=this.Uu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Uu=this.Uu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=Oe(),this.Qu.forEach(s=>{this.Zu(s.key)&&(this.Ku=this.Ku.add(s.key))});const n=[];return e.forEach(s=>{this.Ku.has(s)||n.push(new gg(s))}),this.Ku.forEach(s=>{e.has(s)||n.push(new mg(s))}),n}tc(e){this.Uu=e.Hi,this.Ku=Oe();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return yi.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class Nw{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class Ow{constructor(e){this.key=e,this.nc=!1}}class Lw{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new Ci(a=>$m(a),ca),this.rc=new Map,this.oc=new Set,this.uc=new At(ye.comparator),this.cc=new Map,this.ac=new Dc,this.hc={},this.lc=new Map,this.fc=vi.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function Mw(t,e){const n=zw(t);let s,i;const r=n.ic.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.ec();else{const o=await nw(n.localStore,es(e));n.isPrimaryClient&&lg(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await $w(n,e,s,a==="current",o.resumeToken)}return i}async function $w(t,e,n,s,i){t._c=(f,d,m)=>async function(_,v,k,E){let I=v.view.Wu(k);I.$i&&(I=await rh(_.localStore,v.query,!1).then(({documents:j})=>v.view.Wu(j,I)));const M=E&&E.targetChanges.get(v.targetId),A=v.view.applyChanges(I,_.isPrimaryClient,M);return hh(_,v.targetId,A.Xu),A.snapshot}(t,f,d,m);const r=await rh(t.localStore,e,!0),o=new Pw(e,r.Hi),a=o.Wu(r.documents),l=Nr.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,l);hh(t,n,c.Xu);const h=new Nw(e,n,o);return t.ic.set(e,h),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),c.snapshot}async function Uw(t,e){const n=Ce(t),s=n.ic.get(e),i=n.rc.get(s.targetId);if(i.length>1)return n.rc.set(s.targetId,i.filter(r=>!ca(r,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Nl(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),cg(n.remoteStore,s.targetId),Ol(n,s.targetId)}).catch(Dr)):(Ol(n,s.targetId),await Nl(n.localStore,s.targetId,!0))}async function Fw(t,e,n){const s=Gw(t);try{const i=await function(r,o){const a=Ce(r),l=Ct.now(),c=o.reduce((d,m)=>d.add(m.key),Oe());let h,f;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let m=ts(),_=Oe();return a.Gi.getEntries(d,c).next(v=>{m=v,m.forEach((k,E)=>{E.isValidDocument()||(_=_.add(k))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,m)).next(v=>{h=v;const k=[];for(const E of o){const I=ob(E,h.get(E.key).overlayedDocument);I!=null&&k.push(new Ss(E.key,I,Om(I.value.mapValue),En.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,k,o)}).next(v=>{f=v;const k=v.applyToLocalDocumentSet(h,_);return a.documentOverlayCache.saveOverlays(d,v.batchId,k)})}).then(()=>({batchId:f.batchId,changes:Qm(h)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let l=r.hc[r.currentUser.toKey()];l||(l=new At(Ge)),l=l.insert(o,a),r.hc[r.currentUser.toKey()]=l}(s,i.batchId,n),await Lr(s,i.changes),await ma(s.remoteStore)}catch(i){const r=$c(i,"Failed to persist write");n.reject(r)}}async function _g(t,e){const n=Ce(t);try{const s=await Zb(n.localStore,e);e.targetChanges.forEach((i,r)=>{const o=n.cc.get(r);o&&(et(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.nc=!0:i.modifiedDocuments.size>0?et(o.nc):i.removedDocuments.size>0&&(et(o.nc),o.nc=!1))}),await Lr(n,s,e)}catch(s){await Dr(s)}}function uh(t,e,n){const s=Ce(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.ic.forEach((r,o)=>{const a=o.view.Pu(e);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=Ce(r);a.onlineState=o;let l=!1;a.queries.forEach((c,h)=>{for(const f of h.listeners)f.Pu(o)&&(l=!0)}),l&&Uc(a)}(s.eventManager,e),i.length&&s.sc.zo(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Vw(t,e,n){const s=Ce(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.cc.get(e),r=i&&i.key;if(r){let o=new At(ye.comparator);o=o.insert(r,qt.newNoDocument(r,De.min()));const a=Oe().add(r),l=new fa(De.min(),new Map,new St(Ge),o,a);await _g(s,l),s.uc=s.uc.remove(r),s.cc.delete(e),Fc(s)}else await Nl(s.localStore,e,!1).then(()=>Ol(s,e,n)).catch(Dr)}async function Bw(t,e){const n=Ce(t),s=e.batch.batchId;try{const i=await Jb(n.localStore,e);yg(n,s,null),vg(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Lr(n,i)}catch(i){await Dr(i)}}async function jw(t,e,n){const s=Ce(t);try{const i=await function(r,o){const a=Ce(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let c;return a.mutationQueue.lookupMutationBatch(l,o).next(h=>(et(h!==null),c=h.keys(),a.mutationQueue.removeMutationBatch(l,h))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,c,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,c)).next(()=>a.localDocuments.getDocuments(l,c))})}(s.localStore,e);yg(s,e,n),vg(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Lr(s,i)}catch(i){await Dr(i)}}function vg(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function yg(t,e,n){const s=Ce(t);let i=s.hc[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(n?r.reject(n):r.resolve(),i=i.remove(e)),s.hc[s.currentUser.toKey()]=i}}function Ol(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.rc.get(e))t.ic.delete(s),n&&t.sc.wc(s,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(s=>{t.ac.containsKey(s)||bg(t,s)})}function bg(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(cg(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),Fc(t))}function hh(t,e,n){for(const s of n)s instanceof mg?(t.ac.addReference(s.key,e),qw(t,s)):s instanceof gg?(pe("SyncEngine","Document no longer in limbo: "+s.key),t.ac.removeReference(s.key,e),t.ac.containsKey(s.key)||bg(t,s.key)):Te()}function qw(t,e){const n=e.key,s=n.path.canonicalString();t.uc.get(n)||t.oc.has(s)||(pe("SyncEngine","New document in limbo: "+n),t.oc.add(s),Fc(t))}function Fc(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new ye(st.fromString(e)),s=t.fc.next();t.cc.set(s,new Ow(n)),t.uc=t.uc.insert(n,s),lg(t.remoteStore,new Ms(es(Mm(n.path)),s,2,wc.at))}}async function Lr(t,e,n){const s=Ce(t),i=[],r=[],o=[];s.ic.isEmpty()||(s.ic.forEach((a,l)=>{o.push(s._c(l,e,n).then(c=>{if((c||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const h=Pc.Ci(l.targetId,c);r.push(h)}}))}),await Promise.all(o),s.sc.zo(i),await async function(a,l){const c=Ce(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>te.forEach(l,f=>te.forEach(f.Si,d=>c.persistence.referenceDelegate.addReference(h,f.targetId,d)).next(()=>te.forEach(f.Di,d=>c.persistence.referenceDelegate.removeReference(h,f.targetId,d)))))}catch(h){if(!Rr(h))throw h;pe("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const f=h.targetId;if(!h.fromCache){const d=c.Ui.get(f),m=d.snapshotVersion,_=d.withLastLimboFreeSnapshotVersion(m);c.Ui=c.Ui.insert(f,_)}}}(s.localStore,r))}async function Hw(t,e){const n=Ce(t);if(!n.currentUser.isEqual(e)){pe("SyncEngine","User change. New user:",e.toKey());const s=await ig(n.localStore,e);n.currentUser=e,function(i,r){i.lc.forEach(o=>{o.forEach(a=>{a.reject(new be(ee.CANCELLED,r))})}),i.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Lr(n,s.ji)}}function Kw(t,e){const n=Ce(t),s=n.cc.get(e);if(s&&s.nc)return Oe().add(s.key);{let i=Oe();const r=n.rc.get(e);if(!r)return i;for(const o of r){const a=n.ic.get(o);i=i.unionWith(a.view.ju)}return i}}function zw(t){const e=Ce(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=_g.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Kw.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Vw.bind(null,e),e.sc.zo=Aw.bind(null,e.eventManager),e.sc.wc=Dw.bind(null,e.eventManager),e}function Gw(t){const e=Ce(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Bw.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=jw.bind(null,e),e}class Ww{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=da(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return Xb(this.persistence,new Yb,e.initialUser,this.It)}yc(e){return new Wb(Rc.Bs,this.It)}gc(e){return new iw}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Qw{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>uh(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Hw.bind(null,this.syncEngine),await Ew(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Iw}createDatastore(e){const n=da(e.databaseInfo.databaseId),s=(i=e.databaseInfo,new lw(i));var i;return function(r,o,a,l){return new hw(r,o,a,l)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,i=e.asyncQueue,r=a=>uh(this.syncEngine,a,0),o=ah.C()?new ah:new rw,new dw(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(e,n){return function(s,i,r,o,a,l,c){const h=new Lw(s,i,r,o,a,l);return c&&(h.dc=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=Ce(e);pe("RemoteStore","RemoteStore shutting down."),n.wu.add(5),await Or(n),n.gu.shutdown(),n.yu.set("Unknown")}(this.remoteStore)}}/**
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
 */function wg(t,e,n){if(!n)throw new be(ee.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Yw(t,e,n,s){if(e===!0&&s===!0)throw new be(ee.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function fh(t){if(!ye.isDocumentKey(t))throw new be(ee.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function dh(t){if(ye.isDocumentKey(t))throw new be(ee.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Vc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Te()}function zs(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new be(ee.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Vc(t);throw new be(ee.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ph=new Map;class mh{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new be(ee.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new be(ee.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Yw("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new mh({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new be(ee.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new be(ee.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new mh(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new b1;switch(n.type){case"gapi":const s=n.client;return new T1(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new be(ee.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=ph.get(e);n&&(pe("ComponentProvider","Removing Datastore"),ph.delete(e),n.terminate())}(this),Promise.resolve()}}function xw(t,e,n,s={}){var i;const r=(t=zs(t,ga))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==e&&El("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=Wt.MOCK_USER;else{o=ry(s.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=s.mockUserToken.sub||s.mockUserToken.user_id;if(!l)throw new be(ee.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Wt(l)}t._authCredentials=new w1(new Am(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new vs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new kn(this.firestore,e,this._key)}}class _a{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new _a(this.firestore,e,this._query)}}class vs extends _a{constructor(e,n,s){super(e,n,Mm(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new kn(this.firestore,null,new ye(e))}withConverter(e){return new vs(this.firestore,e,this._path)}}function Tn(t,e,...n){if(t=nn(t),wg("collection","path",e),t instanceof ga){const s=st.fromString(e,...n);return dh(s),new vs(t,null,s)}{if(!(t instanceof kn||t instanceof vs))throw new be(ee.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(st.fromString(e,...n));return dh(s),new vs(t.firestore,null,s)}}function ns(t,e,...n){if(t=nn(t),arguments.length===1&&(e=Dm.R()),wg("doc","path",e),t instanceof ga){const s=st.fromString(e,...n);return fh(s),new kn(t,null,new ye(s))}{if(!(t instanceof kn||t instanceof vs))throw new be(ee.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(st.fromString(e,...n));return fh(s),new kn(t.firestore,t instanceof vs?t.converter:null,new ye(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Xw{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):Zn("Uncaught Error in snapshot listener:",e)}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class Jw{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=Wt.UNAUTHENTICATED,this.clientId=Dm.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{pe("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(pe("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new be(ee.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new _s;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=$c(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Zw(t,e){t.asyncQueue.verifyOperationInProgress(),pe("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await ig(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function ek(t,e){t.asyncQueue.verifyOperationInProgress();const n=await tk(t);pe("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(i=>lh(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,r)=>lh(e.remoteStore,r)),t.onlineComponents=e}async function tk(t){return t.offlineComponents||(pe("FirestoreClient","Using default OfflineComponentProvider"),await Zw(t,new Ww)),t.offlineComponents}async function kg(t){return t.onlineComponents||(pe("FirestoreClient","Using default OnlineComponentProvider"),await ek(t,new Qw)),t.onlineComponents}function nk(t){return kg(t).then(e=>e.syncEngine)}async function sk(t){const e=await kg(t),n=e.eventManager;return n.onListen=Mw.bind(null,e.syncEngine),n.onUnlisten=Uw.bind(null,e.syncEngine),n}function ik(t,e,n={}){const s=new _s;return t.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,l){const c=new Xw({next:f=>{r.enqueueAndForget(()=>Sw(i,h)),f.fromCache&&a.source==="server"?l.reject(new be(ee.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(f)},error:f=>l.reject(f)}),h=new Rw(o,c,{includeMetadataChanges:!0,ku:!0});return Cw(i,h)}(await sk(t),t.asyncQueue,e,n,s)),s.promise}class rk{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.No=new og(this,"async_queue_retry"),this.Wc=()=>{const n=Ya();n&&pe("AsyncQueue","Visibility state changed to "+n.visibilityState),this.No.Po()};const e=Ya();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.Uc){this.Uc=!0,this.Qc=e||!1;const n=Ya();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.Uc)return new Promise(()=>{});const n=new _s;return this.Hc(()=>this.Uc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.No.reset()}catch(e){if(!Rr(e))throw e;pe("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.No.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(s=>{this.Kc=s,this.Gc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw Zn("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Gc=!1,s))));return this.Bc=n,n}enqueueAfterDelay(e,n,s){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const i=Mc.createAndSchedule(this,e,n,s,r=>this.Yc(r));return this.qc.push(i),i}zc(){this.Kc&&Te()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.qc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.qc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.qc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.qc.indexOf(e);this.qc.splice(n,1)}}class Mr extends ga{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=new rk,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Tg(this),this._firestoreClient.terminate()}}function ok(t,e){const n=typeof t=="object"?t:Ep(),s=typeof t=="string"?t:e||"(default)",i=Jl(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=ny("firestore");r&&xw(i,...r)}return i}function Eg(t){return t._firestoreClient||Tg(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Tg(t){var e;const n=t._freezeSettings(),s=function(i,r,o,a){return new M1(i,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Jw(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class bi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new bi(Jt.fromBase64String(e))}catch(n){throw new be(ee.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new bi(Jt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new be(ee.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Qt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(e){this._methodName=e}}/**
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
 */class jc{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new be(ee.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new be(ee.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ge(this._lat,e._lat)||Ge(this._long,e._long)}}/**
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
 */const ak=/^__.*__$/;class lk{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Ss(e,this.data,this.fieldMask,n,this.fieldTransforms):new Pr(e,this.data,n,this.fieldTransforms)}}class Ig{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new Ss(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Cg(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Te()}}class qc{constructor(e,n,s,i,r,o){this.settings=e,this.databaseId=n,this.It=s,this.ignoreUndefinedProperties=i,r===void 0&&this.na(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new qc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:s,oa:!1});return i.ua(e),i}ca(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:s,oa:!1});return i.na(),i}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return Oo(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(Cg(this.sa)&&ak.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class ck{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.It=s||da(e)}da(e,n,s,i=!1){return new qc({sa:e,methodName:n,fa:s,path:Qt.emptyPath(),oa:!1,la:i},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function Sg(t){const e=t._freezeSettings(),n=da(t._databaseId);return new ck(t._databaseId,!!e.ignoreUndefinedProperties,n)}function uk(t,e,n,s,i,r={}){const o=t.da(r.merge||r.mergeFields?2:0,e,n,i);Hc("Data must be an object, but it was:",o,s);const a=Ag(s,o);let l,c;if(r.merge)l=new wn(o.fieldMask),c=o.fieldTransforms;else if(r.mergeFields){const h=[];for(const f of r.mergeFields){const d=Ll(e,f,n);if(!o.contains(d))throw new be(ee.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Rg(h,d)||h.push(d)}l=new wn(h),c=o.fieldTransforms.filter(f=>l.covers(f.field))}else l=null,c=o.fieldTransforms;return new lk(new fn(a),l,c)}class ya extends Bc{_toFieldTransform(e){if(e.sa!==2)throw e.sa===1?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ya}}function hk(t,e,n,s){const i=t.da(1,e,n);Hc("Data must be an object, but it was:",i,s);const r=[],o=fn.empty();xs(s,(l,c)=>{const h=Kc(e,l,n);c=nn(c);const f=i.ca(h);if(c instanceof ya)r.push(h);else{const d=ba(c,f);d!=null&&(r.push(h),o.set(h,d))}});const a=new wn(r);return new Ig(o,a,i.fieldTransforms)}function fk(t,e,n,s,i,r){const o=t.da(1,e,n),a=[Ll(e,s,n)],l=[i];if(r.length%2!=0)throw new be(ee.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<r.length;d+=2)a.push(Ll(e,r[d])),l.push(r[d+1]);const c=[],h=fn.empty();for(let d=a.length-1;d>=0;--d)if(!Rg(c,a[d])){const m=a[d];let _=l[d];_=nn(_);const v=o.ca(m);if(_ instanceof ya)c.push(m);else{const k=ba(_,v);k!=null&&(c.push(m),h.set(m,k))}}const f=new wn(c);return new Ig(h,f,o.fieldTransforms)}function ba(t,e){if(Dg(t=nn(t)))return Hc("Unsupported field value:",e,t),Ag(t,e);if(t instanceof Bc)return function(n,s){if(!Cg(s.sa))throw s.ha(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ha(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=ba(o,s.aa(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(t,e)}return function(n,s){if((n=nn(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return eb(s.It,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Ct.fromDate(n);return{timestampValue:Po(s.It,i)}}if(n instanceof Ct){const i=new Ct(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Po(s.It,i)}}if(n instanceof jc)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof bi)return{bytesValue:Zm(s.It,n._byteString)};if(n instanceof kn){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s.ha(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Sc(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ha(`Unsupported field value: ${Vc(n)}`)}(t,e)}function Ag(t,e){const n={};return Rm(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):xs(t,(s,i)=>{const r=ba(i,e.ra(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function Dg(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ct||t instanceof jc||t instanceof bi||t instanceof kn||t instanceof Bc)}function Hc(t,e,n){if(!Dg(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Vc(n);throw s==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+s)}}function Ll(t,e,n){if((e=nn(e))instanceof va)return e._internalPath;if(typeof e=="string")return Kc(t,e);throw Oo("Field path arguments must be of type string or ",t,!1,void 0,n)}const dk=new RegExp("[~\\*/\\[\\]]");function Kc(t,e,n){if(e.search(dk)>=0)throw Oo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new va(...e.split("."))._internalPath}catch{throw Oo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Oo(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${s}`),o&&(l+=` in document ${i}`),l+=")"),new be(ee.INVALID_ARGUMENT,a+t+l)}function Rg(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new kn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new pk(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Ng("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class pk extends Pg{data(){return super.data()}}function Ng(t,e){return typeof e=="string"?Kc(t,e):e instanceof va?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mk(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new be(ee.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gk{convertValue(e,n="none"){switch(Ks(e)){case 0:return null;case 1:return e.booleanValue;case 2:return wt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(gi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Te()}}convertObject(e,n){const s={};return xs(e.fields,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(e){return new jc(wt(e.latitude),wt(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Nm(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(sr(e));default:return null}}convertTimestamp(e){const n=Es(e);return new Ct(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=st.fromString(e);et(sg(s));const i=new ir(s.get(1),s.get(3)),r=new ye(s.popFirst(5));return i.isEqual(n)||Zn(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _k(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class vk extends Pg{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ro(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Ng("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class ro extends vk{data(e={}){return super.data(e)}}class yk{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Jr(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new ro(this._firestore,this._userDataWriter,s.key,s,new Jr(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new be(ee.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>({type:"added",doc:new ro(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Jr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter),oldIndex:-1,newIndex:r++}))}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new ro(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Jr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,c=-1;return o.type!==0&&(l=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),c=r.indexOf(o.doc.key)),{type:bk(o.type),doc:a,oldIndex:l,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function bk(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Te()}}class wk extends gk{constructor(e){super(),this.firestore=e}convertBytes(e){return new bi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new kn(this.firestore,null,n)}}function wa(t){t=zs(t,_a);const e=zs(t.firestore,Mr),n=Eg(e),s=new wk(e);return mk(t._query),ik(n,t._query).then(i=>new yk(e,s,t,i))}function ka(t,e,n,...s){t=zs(t,kn);const i=zs(t.firestore,Mr),r=Sg(i);let o;return o=typeof(e=nn(e))=="string"||e instanceof va?fk(r,"updateDoc",t._key,e,n,s):hk(r,"updateDoc",t._key,e),zc(i,[o.toMutation(t._key,En.exists(!0))])}function Ea(t){return zc(zs(t.firestore,Mr),[new Cc(t._key,En.none())])}function $s(t,e){const n=zs(t.firestore,Mr),s=ns(t),i=_k(t.converter,e);return zc(n,[uk(Sg(t.firestore),"addDoc",s._key,i,t.converter!==null,{}).toMutation(s._key,En.exists(!1))]).then(()=>s)}function zc(t,e){return function(n,s){const i=new _s;return n.asyncQueue.enqueueAndForget(async()=>Fw(await nk(n),s,i)),i.promise}(Eg(t),e)}(function(t,e=!0){(function(n){Ii=n})(yr),di(new js("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new Mr(new k1(n.getProvider("auth-internal")),new C1(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new be(ee.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ir(a.options.projectId,l)}(r,s),r);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),gs(Bu,"3.7.1",t),gs(Bu,"3.7.1","esm2017")})();const Og="/to-deploy-mh/assets/schedule.20f01954.png";function Lg(t){const e=t-1;return e*e*e+1}function wi(t){return t===0||t===1?t:t<.5?.5*Math.pow(2,20*t-10):-.5*Math.pow(2,10-t*20)+1}function Lo(t,{delay:e=0,duration:n=400,easing:s=$d}={}){const i=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:s,css:r=>`opacity: ${r*i}`}}function Mo(t,{delay:e=0,duration:n=400,easing:s=Lg,x:i=0,y:r=0,opacity:o=0}={}){const a=getComputedStyle(t),l=+a.opacity,c=a.transform==="none"?"":a.transform,h=l*(1-o);return{delay:e,duration:n,easing:s,css:(f,d)=>`
			transform: ${c} translate(${(1-f)*i}px, ${(1-f)*r}px);
			opacity: ${l-h*d}`}}function ki(t,{delay:e=0,duration:n=400,easing:s=Lg,start:i=0,opacity:r=0}={}){const o=getComputedStyle(t),a=+o.opacity,l=o.transform==="none"?"":o.transform,c=1-i,h=a*(1-r);return{delay:e,duration:n,easing:s,css:(f,d)=>`
			transform: ${l} scale(${1-c*d});
			opacity: ${a-h*d}
		`}}const it=Lt(""),Ml=Lt([]),Mg=Lt([]),Wi=Lt([]),Ze=Lt({typeContact:"",name:"",lastname:"",lastContact:"",telephon:"",email:"",selecMC:"",propCont:"",comContact:"",rangeProp:"",contMode:"",budget:"",numBeds:"",numBaths:"",halfBathroom:"",numParks:"",modePay:"",selecTP:"",contactType:"",contactStage:"",createdAt:"",locaProperty:[],tagsProperty:[],sendedProperties:[]}),Je=Lt({typeProperty:"",typeSaller:"",claveEB:"",claveMH:"",createdAt:"",nameProperty:"",price:"",beds:"",bathroom:"",halfBathroom:"",park:"",areaBuilding:"",areaTotal:"",description:"",urlImage:"",urlProp:"",urlSinergy:"",colonia:"",selecTP:"",selecTO:"",typeOperation:"",tagsProperty:[],locaProperty:[],binnacle:[]}),yn=Lt({task:"",isComplete:"",createdAt:"",endTask:"",timeTask:"",notes:"",user:""});var kk="firebase",Ek="9.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */gs(kk,Ek,"app");function Gc(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function $g(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Tk=$g,Ug=new _r("auth","Firebase",$g());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gh=new xl("@firebase/auth");function oo(t,...e){gh.logLevel<=je.ERROR&&gh.error(`Auth (${yr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function In(t,...e){throw Wc(t,...e)}function Mn(t,...e){return Wc(t,...e)}function Ik(t,e,n){const s=Object.assign(Object.assign({},Tk()),{[e]:n});return new _r("auth","Firebase",s).create(e,{appName:t.name})}function Wc(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Ug.create(t,...e)}function ke(t,e,...n){if(!t)throw Wc(e,...n)}function Wn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw oo(e),new Error(e)}function ss(t,e){t||Wn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _h=new Map;function Qn(t){ss(t instanceof Function,"Expected a class definition");let e=_h.get(t);return e?(ss(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,_h.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ck(t,e){const n=Jl(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(_o(r,e!=null?e:{}))return i;In(i,"already-initialized")}return n.initialize({options:e})}function Sk(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Qn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $l(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Ak(){return vh()==="http:"||vh()==="https:"}function vh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ak()||Wv()||"connection"in navigator)?navigator.onLine:!0}function Rk(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(e,n){this.shortDelay=e,this.longDelay=n,ss(n>e,"Short delay should be less than long delay!"),this.isMobile=Gv()||Qv()}get(){return Dk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qc(t,e){ss(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Wn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Wn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Wn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nk=new $r(3e4,6e4);function Ur(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Fr(t,e,n,s,i={}){return Vg(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=vr(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Fg.fetch()(Bg(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function Vg(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},Pk),e);try{const i=new Ok(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Zr(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Zr(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Zr(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Zr(t,"user-disabled",o);const h=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Ik(t,h,c);In(t,h)}}catch(i){if(i instanceof is)throw i;In(t,"network-request-failed")}}async function Vr(t,e,n,s,i={}){const r=await Fr(t,e,n,s,i);return"mfaPendingCredential"in r&&In(t,"multi-factor-auth-required",{_serverResponse:r}),r}function Bg(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?Qc(t.config,i):`${t.config.apiScheme}://${i}`}class Ok{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Mn(this.auth,"network-request-failed")),Nk.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Zr(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=Mn(t,e,s);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lk(t,e){return Fr(t,"POST","/v1/accounts:delete",e)}async function Mk(t,e){return Fr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qi(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function $k(t,e=!1){const n=nn(t),s=await n.getIdToken(e),i=Yc(s);ke(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Qi(xa(i.auth_time)),issuedAtTime:Qi(xa(i.iat)),expirationTime:Qi(xa(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function xa(t){return Number(t)*1e3}function Yc(t){var e;const[n,s,i]=t.split(".");if(n===void 0||s===void 0||i===void 0)return oo("JWT malformed, contained fewer than 3 sections"),null;try{const r=_p(s);return r?JSON.parse(r):(oo("Failed to decode base64 JWT payload"),null)}catch(r){return oo("Caught error parsing JWT payload as JSON",(e=r)===null||e===void 0?void 0:e.toString()),null}}function Uk(t){const e=Yc(t);return ke(e,"internal-error"),ke(typeof e.exp<"u","internal-error"),ke(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cr(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof is&&Fk(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function Fk({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Qi(this.lastLoginAt),this.creationTime=Qi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function $o(t){var e;const n=t.auth,s=await t.getIdToken(),i=await cr(t,Mk(n,{idToken:s}));ke(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?qk(r.providerUserInfo):[],a=jk(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),h=l?c:!1,f={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new jg(r.createdAt,r.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function Bk(t){const e=nn(t);await $o(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function jk(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function qk(t){return t.map(e=>{var{providerId:n}=e,s=Gc(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hk(t,e){const n=await Vg(t,{},async()=>{const s=vr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=Bg(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Fg.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ke(e.idToken,"internal-error"),ke(typeof e.idToken<"u","internal-error"),ke(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Uk(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return ke(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await Hk(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new ur;return s&&(ke(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(ke(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(ke(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ur,this.toJSON())}_performRefresh(){return Wn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function os(t,e){ke(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Us{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=Gc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Vk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new jg(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await cr(this,this.stsTokenManager.getToken(this.auth,e));return ke(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return $k(this,e)}reload(){return Bk(this)}_assign(e){this!==e&&(ke(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Us(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){ke(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await $o(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await cr(this,Lk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,h;const f=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,m=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,k=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,E=(c=n.createdAt)!==null&&c!==void 0?c:void 0,I=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:M,emailVerified:A,isAnonymous:j,providerData:L,stsTokenManager:F}=n;ke(M&&F,e,"internal-error");const H=ur.fromJSON(this.name,F);ke(typeof M=="string",e,"internal-error"),os(f,e.name),os(d,e.name),ke(typeof A=="boolean",e,"internal-error"),ke(typeof j=="boolean",e,"internal-error"),os(m,e.name),os(_,e.name),os(v,e.name),os(k,e.name),os(E,e.name),os(I,e.name);const O=new Us({uid:M,auth:e,email:d,emailVerified:A,displayName:f,isAnonymous:j,photoURL:_,phoneNumber:m,tenantId:v,stsTokenManager:H,createdAt:E,lastLoginAt:I});return L&&Array.isArray(L)&&(O.providerData=L.map(U=>Object.assign({},U))),k&&(O._redirectEventId=k),O}static async _fromIdTokenResponse(e,n,s=!1){const i=new ur;i.updateFromServerResponse(n);const r=new Us({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await $o(r),r}}/**
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
 */class qg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}qg.type="NONE";const yh=qg;/**
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
 */function ao(t,e,n){return`firebase:${t}:${e}:${n}`}class ci{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=ao(this.userKey,i.apiKey,r),this.fullPersistenceKey=ao("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Us._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new ci(Qn(yh),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||Qn(yh);const o=ao(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const h=await c._get(o);if(h){const f=Us._fromJSON(e,h);c!==r&&(a=f),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new ci(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new ci(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bh(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(zg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Hg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Wg(e))return"Blackberry";if(Qg(e))return"Webos";if(xc(e))return"Safari";if((e.includes("chrome/")||Kg(e))&&!e.includes("edge/"))return"Chrome";if(Gg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Hg(t=Xt()){return/firefox\//i.test(t)}function xc(t=Xt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Kg(t=Xt()){return/crios\//i.test(t)}function zg(t=Xt()){return/iemobile/i.test(t)}function Gg(t=Xt()){return/android/i.test(t)}function Wg(t=Xt()){return/blackberry/i.test(t)}function Qg(t=Xt()){return/webos/i.test(t)}function Ta(t=Xt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Kk(t=Xt()){var e;return Ta(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function zk(){return Yv()&&document.documentMode===10}function Yg(t=Xt()){return Ta(t)||Gg(t)||Qg(t)||Wg(t)||/windows phone/i.test(t)||zg(t)}function Gk(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xg(t,e=[]){let n;switch(t){case"Browser":n=bh(Xt());break;case"Worker":n=`${bh(Xt())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${yr}/${s}`}/**
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
 */class Wk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const s=[];try{for(const i of this.queue)await i(e),i.onAbort&&s.push(i.onAbort)}catch(i){s.reverse();for(const r of s)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qk{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new wh(this),this.idTokenSubscription=new wh(this),this.beforeStateQueue=new Wk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ug,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Qn(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await ci.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ke(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await $o(e)}catch(s){if(((n=s)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Rk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?nn(e):null;return n&&ke(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ke(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Qn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new _r("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Qn(e)||this._popupRedirectResolver;ke(n,this,"argument-error"),this.redirectPersistenceManager=await ci.create(this,[Qn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return ke(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ke(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=xg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function Br(t){return nn(t)}class wh{constructor(e){this.auth=e,this.observer=null,this.addObserver=uy(n=>this.observer=n)}get next(){return ke(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Yk(t,e,n){const s=Br(t);ke(s._canInitEmulator,s,"emulator-config-failed"),ke(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),r=Xg(e),{host:o,port:a}=xk(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Xk()}function Xg(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function xk(t){const e=Xg(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:kh(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:kh(o)}}}function kh(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Xk(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Wn("not implemented")}_getIdTokenResponse(e){return Wn("not implemented")}_linkToIdToken(e,n){return Wn("not implemented")}_getReauthenticationResolver(e){return Wn("not implemented")}}async function Jk(t,e){return Fr(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zk(t,e){return Vr(t,"POST","/v1/accounts:signInWithPassword",Ur(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eE(t,e){return Vr(t,"POST","/v1/accounts:signInWithEmailLink",Ur(t,e))}async function tE(t,e){return Vr(t,"POST","/v1/accounts:signInWithEmailLink",Ur(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr extends Xc{constructor(e,n,s,i=null){super("password",s),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new hr(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new hr(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Zk(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return eE(e,{email:this._email,oobCode:this._password});default:In(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Jk(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return tE(e,{idToken:n,email:this._email,oobCode:this._password});default:In(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const nE="http://localhost";class Gs extends Xc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Gs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):In("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=Gc(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new Gs(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ui(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,ui(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ui(e,n)}buildRequest(){const e={requestUri:nE,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=vr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sE(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function iE(t){const e=Mi($i(t)).link,n=e?Mi($i(e)).deep_link_id:null,s=Mi($i(t)).deep_link_id;return(s?Mi($i(s)).link:null)||s||n||e||t}class Jc{constructor(e){var n,s,i,r,o,a;const l=Mi($i(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,h=(s=l.oobCode)!==null&&s!==void 0?s:null,f=sE((i=l.mode)!==null&&i!==void 0?i:null);ke(c&&h&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=h,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=iE(e);try{return new Jc(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(){this.providerId=Ai.PROVIDER_ID}static credential(e,n){return hr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Jc.parseLink(n);return ke(s,"argument-error"),hr._fromEmailAndCode(e,s.code,s.tenantId)}}Ai.PROVIDER_ID="password";Ai.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ai.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class jr extends Jg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs extends jr{constructor(){super("facebook.com")}static credential(e){return Gs._fromParams({providerId:cs.PROVIDER_ID,signInMethod:cs.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return cs.credentialFromTaggedObject(e)}static credentialFromError(e){return cs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return cs.credential(e.oauthAccessToken)}catch{return null}}}cs.FACEBOOK_SIGN_IN_METHOD="facebook.com";cs.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us extends jr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Gs._fromParams({providerId:us.PROVIDER_ID,signInMethod:us.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return us.credentialFromTaggedObject(e)}static credentialFromError(e){return us.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return us.credential(n,s)}catch{return null}}}us.GOOGLE_SIGN_IN_METHOD="google.com";us.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs extends jr{constructor(){super("github.com")}static credential(e){return Gs._fromParams({providerId:hs.PROVIDER_ID,signInMethod:hs.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hs.credentialFromTaggedObject(e)}static credentialFromError(e){return hs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hs.credential(e.oauthAccessToken)}catch{return null}}}hs.GITHUB_SIGN_IN_METHOD="github.com";hs.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs extends jr{constructor(){super("twitter.com")}static credential(e,n){return Gs._fromParams({providerId:fs.PROVIDER_ID,signInMethod:fs.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return fs.credentialFromTaggedObject(e)}static credentialFromError(e){return fs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return fs.credential(n,s)}catch{return null}}}fs.TWITTER_SIGN_IN_METHOD="twitter.com";fs.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rE(t,e){return Vr(t,"POST","/v1/accounts:signUp",Ur(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Uo extends is{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Uo.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new Uo(e,n,s,i)}}function Zg(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Uo._fromErrorAndOperation(t,r,e,s):r})}async function oE(t,e,n=!1){const s=await cr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ws._forOperation(t,"link",s)}/**
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
 */async function aE(t,e,n=!1){var s;const{auth:i}=t,r="reauthenticate";try{const o=await cr(t,Zg(i,r,e,t),n);ke(o.idToken,i,"internal-error");const a=Yc(o.idToken);ke(a,i,"internal-error");const{sub:l}=a;return ke(t.uid===l,i,"user-mismatch"),Ws._forOperation(t,r,o)}catch(o){throw((s=o)===null||s===void 0?void 0:s.code)==="auth/user-not-found"&&In(i,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e_(t,e,n=!1){const s="signIn",i=await Zg(t,s,e),r=await Ws._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}async function lE(t,e){return e_(Br(t),e)}async function cE(t,e,n){const s=Br(t),i=await rE(s,{returnSecureToken:!0,email:e,password:n}),r=await Ws._fromIdTokenResponse(s,"signIn",i);return await s._updateCurrentUser(r.user),r}function uE(t,e,n){return lE(nn(t),Ai.credential(e,n))}function hE(t,e,n,s){return nn(t).onIdTokenChanged(e,n,s)}function fE(t,e,n){return nn(t).beforeAuthStateChanged(e,n)}const Fo="__sak";/**
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
 */class t_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Fo,"1"),this.storage.removeItem(Fo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dE(){const t=Xt();return xc(t)||Ta(t)}const pE=1e3,mE=10;class n_ extends t_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=dE()&&Gk(),this.fallbackToPolling=Yg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);zk()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,mE):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},pE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}n_.type="LOCAL";const gE=n_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_ extends t_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}s_.type="SESSION";const i_=s_;/**
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
 */function _E(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ia{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new Ia(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await _E(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ia.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zc(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class vE{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=Zc("",20);i.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(f){const d=f;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(h),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(h),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $n(){return window}function yE(t){$n().location.href=t}/**
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
 */function r_(){return typeof $n().WorkerGlobalScope<"u"&&typeof $n().importScripts=="function"}async function bE(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function wE(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function kE(){return r_()?self:null}/**
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
 */const o_="firebaseLocalStorageDb",EE=1,Vo="firebaseLocalStorage",a_="fbase_key";class qr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ca(t,e){return t.transaction([Vo],e?"readwrite":"readonly").objectStore(Vo)}function TE(){const t=indexedDB.deleteDatabase(o_);return new qr(t).toPromise()}function Ul(){const t=indexedDB.open(o_,EE);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Vo,{keyPath:a_})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Vo)?e(s):(s.close(),await TE(),e(await Ul()))})})}async function Th(t,e,n){const s=Ca(t,!0).put({[a_]:e,value:n});return new qr(s).toPromise()}async function IE(t,e){const n=Ca(t,!1).get(e),s=await new qr(n).toPromise();return s===void 0?null:s.value}function Ih(t,e){const n=Ca(t,!0).delete(e);return new qr(n).toPromise()}const CE=800,SE=3;class l_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ul(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>SE)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return r_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ia._getInstance(kE()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await bE(),!this.activeServiceWorker)return;this.sender=new vE(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);!s||((e=s[0])===null||e===void 0?void 0:e.fulfilled)&&((n=s[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||wE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ul();return await Th(e,Fo,"1"),await Ih(e,Fo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Th(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>IE(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ih(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=Ca(i,!1).getAll();return new qr(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),CE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}l_.type="LOCAL";const AE=l_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DE(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function RE(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=Mn("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",DE().appendChild(s)})}function PE(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new $r(3e4,6e4);/**
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
 */function NE(t,e){return e?Qn(e):(ke(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class eu extends Xc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ui(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ui(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ui(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function OE(t){return e_(t.auth,new eu(t),t.bypassAuthState)}function LE(t){const{auth:e,user:n}=t;return ke(n,e,"internal-error"),aE(n,new eu(t),t.bypassAuthState)}async function ME(t){const{auth:e,user:n}=t;return ke(n,e,"internal-error"),oE(n,new eu(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c_{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return OE;case"linkViaPopup":case"linkViaRedirect":return ME;case"reauthViaPopup":case"reauthViaRedirect":return LE;default:In(this.auth,"internal-error")}}resolve(e){ss(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ss(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $E=new $r(2e3,1e4);class ri extends c_{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,ri.currentPopupAction&&ri.currentPopupAction.cancel(),ri.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ke(e,this.auth,"internal-error"),e}async onExecution(){ss(this.filter.length===1,"Popup operations only handle one event");const e=Zc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Mn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Mn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ri.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Mn(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,$E.get())};e()}}ri.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UE="pendingRedirect",lo=new Map;class FE extends c_{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=lo.get(this.auth._key());if(!e){try{const s=await VE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}lo.set(this.auth._key(),e)}return this.bypassAuthState||lo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function VE(t,e){const n=qE(e),s=jE(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function BE(t,e){lo.set(t._key(),e)}function jE(t){return Qn(t._redirectPersistence)}function qE(t){return ao(UE,t.config.apiKey,t.name)}async function HE(t,e,n=!1){const s=Br(t),i=NE(s,e),o=await new FE(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KE=10*60*1e3;class zE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!GE(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!u_(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Mn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=KE&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ch(e))}saveEventToCache(e){this.cachedEventUids.add(Ch(e)),this.lastProcessedEventTime=Date.now()}}function Ch(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function u_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function GE(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return u_(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WE(t,e={}){return Fr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,YE=/^https?/;async function xE(t){if(t.config.emulator)return;const{authorizedDomains:e}=await WE(t);for(const n of e)try{if(XE(n))return}catch{}In(t,"unauthorized-domain")}function XE(t){const e=$l(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!YE.test(n))return!1;if(QE.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const JE=new $r(3e4,6e4);function Sh(){const t=$n().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function ZE(t){return new Promise((e,n)=>{var s,i,r;function o(){Sh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Sh(),n(Mn(t,"network-request-failed"))},timeout:JE.get()})}if(!((i=(s=$n().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=$n().gapi)===null||r===void 0)&&r.load)o();else{const a=PE("iframefcb");return $n()[a]=()=>{gapi.load?o():n(Mn(t,"network-request-failed"))},RE(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw co=null,e})}let co=null;function eT(t){return co=co||ZE(t),co}/**
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
 */const tT=new $r(5e3,15e3),nT="__/auth/iframe",sT="emulator/auth/iframe",iT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},rT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function oT(t){const e=t.config;ke(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Qc(e,sT):`https://${t.config.authDomain}/${nT}`,s={apiKey:e.apiKey,appName:t.name,v:yr},i=rT.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${vr(s).slice(1)}`}async function aT(t){const e=await eT(t),n=$n().gapi;return ke(n,t,"internal-error"),e.open({where:document.body,url:oT(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:iT,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=Mn(t,"network-request-failed"),a=$n().setTimeout(()=>{r(o)},tT.get());function l(){$n().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const lT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},cT=500,uT=600,hT="_blank",fT="http://localhost";class Ah{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function dT(t,e,n,s=cT,i=uT){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},lT),{width:s.toString(),height:i.toString(),top:r,left:o}),c=Xt().toLowerCase();n&&(a=Kg(c)?hT:n),Hg(c)&&(e=e||fT,l.scrollbars="yes");const h=Object.entries(l).reduce((d,[m,_])=>`${d}${m}=${_},`,"");if(Kk(c)&&a!=="_self")return pT(e||"",a),new Ah(null);const f=window.open(e||"",a,h);ke(f,t,"popup-blocked");try{f.focus()}catch{}return new Ah(f)}function pT(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const mT="__/auth/handler",gT="emulator/auth/handler";function Dh(t,e,n,s,i,r){ke(t.config.authDomain,t,"auth-domain-config-required"),ke(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:yr,eventId:i};if(e instanceof Jg){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",cy(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(r||{}))o[l]=c}if(e instanceof jr){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${_T(t)}?${vr(a).slice(1)}`}function _T({config:t}){return t.emulator?Qc(t,gT):`https://${t.authDomain}/${mT}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xa="webStorageSupport";class vT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=i_,this._completeRedirectFn=HE,this._overrideRedirectResult=BE}async _openPopup(e,n,s,i){var r;ss((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=Dh(e,n,s,$l(),i);return dT(e,o,Zc())}async _openRedirect(e,n,s,i){return await this._originValidation(e),yE(Dh(e,n,s,$l(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(ss(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await aT(e),s=new zE(e);return n.register("authEvent",i=>(ke(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Xa,{type:Xa},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[Xa];o!==void 0&&n(!!o),In(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=xE(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Yg()||xc()||Ta()}}const yT=vT;var Rh="@firebase/auth",Ph="0.20.10";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{var i;e(((i=s)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ke(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wT(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function kT(t){di(new js("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:r,authDomain:o}=s.options;return((a,l)=>{ke(r&&!r.includes(":"),"invalid-api-key",{appName:a.name}),ke(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const c={apiKey:r,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:xg(t)},h=new Qk(a,l,c);return Sk(h,n),h})(s,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),di(new js("auth-internal",e=>{const n=Br(e.getProvider("auth").getImmediate());return(s=>new bT(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),gs(Rh,Ph,wT(t)),gs(Rh,Ph,"esm2017")}/**
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
 */const ET=5*60,TT=yp("authIdTokenMaxAge")||ET;let Nh=null;const IT=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>TT)return;const i=n==null?void 0:n.token;Nh!==i&&(Nh=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function CT(t=Ep()){const e=Jl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Ck(t,{popupRedirectResolver:yT,persistence:[AE,gE,i_]}),s=yp("authTokenSyncURL");if(s){const r=IT(s);fE(n,r,()=>r(n.currentUser)),hE(n,o=>r(o))}const i=vp("auth");return i&&Yk(n,`http://${i}`),n}kT("Browser");let fr=[],Bo=[],Ln=[],jo=[];const ST={apiKey:"AIzaSyDGi3ndUC1b4SFNstliSSVryu7_ymXEkZc",authDomain:"match-home-7d1f9.firebaseapp.com",databaseURL:"https://match-home-7d1f9-default-rtdb.firebaseio.com",projectId:"match-home-7d1f9",storageBucket:"match-home-7d1f9.appspot.com",messagingSenderId:"747751099607",appId:"1:747751099607:web:29d1e5beda87c847dfb492"},h_=kp(ST),It=ok(h_),f_=CT(h_),AT=Tn(It,"binnacles"),DT=Tn(It,"contacts"),RT=Tn(It,"properties"),PT=Tn(It,"todos");wa(AT).then(t=>Bo=t.docs.map(e=>({...e.data(),id:e.id})));wa(DT).then(t=>fr=t.docs.map(e=>({...e.data(),id:e.id})));wa(RT).then(t=>Ln=t.docs.map(e=>({...e.data(),id:e.id})));wa(PT).then(t=>jo=t.docs.map(e=>({...e.data(),id:e.id})));const NT=["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","S\xE1bado"],OT=["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"];function Kt(t){typeof t=="string"?t=new Date(t):t=new Date(t);let e=t.getDate()+1;e<10&&(e="0"+e);let n=OT[t.getMonth()],s=t.getFullYear();return`${e}/${n}/${s}`}function Oh(t){t=new Date(t);let e=t.getMinutes();e.length<2&&(e="0"+e);let n=t.getHours();return n>12&&(n=n-12),n<10&&(n="0"+n),t.getDate(),`${n}:${e}`}function Lh(t){return t=new Date(+t),`${NT[t.getDay()]}-`}function LT(t){t.sort((e,n)=>new Date(e.endTask)<new Date(n.endTask)?1:new Date(e.endTask)>new Date(n.endTask)?-1:0)}function Mh(t,e,n){const s=t.slice();return s[19]=e[n],s}function $h(t,e,n){const s=t.slice();return s[19]=e[n],s}function MT(t){let e;return{c(){e=S("Editar")},m(n,s){b(n,e,s)},d(n){n&&y(e)}}}function $T(t){let e;return{c(){e=S("Guardar")},m(n,s){b(n,e,s)},d(n){n&&y(e)}}}function Uh(t){let e,n,s,i,r,o,a,l,c,h,f,d=t[1],m=[];for(let I=0;I<d.length;I+=1)m[I]=jh($h(t,d,I));let _=null;d.length||(_=Fh());let v=t[1],k=[];for(let I=0;I<v.length;I+=1)k[I]=zh(Mh(t,v,I));let E=null;return v.length||(E=qh()),{c(){e=p("h3"),e.textContent="Tareas",n=w(),s=p("ol");for(let I=0;I<m.length;I+=1)m[I].c();_&&_.c(),i=w(),r=p("p"),r.textContent=`${Gh}`,o=w(),a=p("h3"),a.textContent="Agenda",l=w(),c=p("ol");for(let I=0;I<k.length;I+=1)k[I].c();E&&E.c(),h=w(),f=p("p"),f.textContent=`${Gh}`,g(r,"class","error"),g(f,"class","error")},m(I,M){b(I,e,M),b(I,n,M),b(I,s,M);for(let A=0;A<m.length;A+=1)m[A].m(s,null);_&&_.m(s,null),u(s,i),u(s,r),b(I,o,M),b(I,a,M),b(I,l,M),b(I,c,M);for(let A=0;A<k.length;A+=1)k[A].m(c,null);E&&E.m(c,null),u(c,h),u(c,f)},p(I,M){if(M&50){d=I[1];let A;for(A=0;A<d.length;A+=1){const j=$h(I,d,A);m[A]?m[A].p(j,M):(m[A]=jh(j),m[A].c(),m[A].m(s,i))}for(;A<m.length;A+=1)m[A].d(1);m.length=d.length,!d.length&&_?_.p(I,M):d.length?_&&(_.d(1),_=null):(_=Fh(),_.c(),_.m(s,i))}if(M&50){v=I[1];let A;for(A=0;A<v.length;A+=1){const j=Mh(I,v,A);k[A]?k[A].p(j,M):(k[A]=zh(j),k[A].c(),k[A].m(c,h))}for(;A<k.length;A+=1)k[A].d(1);k.length=v.length,!v.length&&E?E.p(I,M):v.length?E&&(E.d(1),E=null):(E=qh(),E.c(),E.m(c,h))}},d(I){I&&y(e),I&&y(n),I&&y(s),qe(m,I),_&&_.d(),I&&y(o),I&&y(a),I&&y(l),I&&y(c),qe(k,I),E&&E.d()}}}function Fh(t){let e;return{c(){e=p("p"),e.textContent="No Hay Tareas Pendientes"},m(n,s){b(n,e,s)},p:he,d(n){n&&y(e)}}}function Vh(t){let e,n,s,i,r,o,a,l,c,h,f=Kt(t[19].endTask)+"",d,m,_=t[19].task+"",v,k,E,I;function M(){return t[11](t[19])}function A(){return t[12](t[19])}function j(){return t[13](t[19])}let L=t[19].notes&&Bh(t);return{c(){e=p("div"),n=p("li"),s=p("span"),i=p("button"),i.textContent="\u2714",r=w(),o=p("button"),o.textContent="\u2716",a=w(),l=p("button"),l.textContent="\u2714\u2716",c=w(),h=p("spam"),d=S(f),m=S(` -*-\r
                                 `),v=S(_),k=S(` -*-\r
                                 `),L&&L.c(),g(n,"class","schedule svelte-1e3ab80"),ys(n,"complete",t[19].isComplete)},m(F,H){b(F,e,H),u(e,n),u(n,s),u(s,i),u(s,r),u(s,o),u(s,a),u(s,l),u(n,c),u(n,h),u(h,d),u(h,m),u(h,v),u(h,k),L&&L.m(h,null),E||(I=[q(i,"click",M),q(o,"click",A),q(l,"click",j)],E=!0)},p(F,H){t=F,H&2&&f!==(f=Kt(t[19].endTask)+"")&&se(d,f),H&2&&_!==(_=t[19].task+"")&&se(v,_),t[19].notes?L?L.p(t,H):(L=Bh(t),L.c(),L.m(h,null)):L&&(L.d(1),L=null),H&2&&ys(n,"complete",t[19].isComplete)},d(F){F&&y(e),L&&L.d(),E=!1,xe(I)}}}function Bh(t){let e=t[19].notes+"",n;return{c(){n=S(e)},m(s,i){b(s,n,i)},p(s,i){i&2&&e!==(e=s[19].notes+"")&&se(n,e)},d(s){s&&y(n)}}}function jh(t){let e,n=!t[19].timeTask&&Vh(t);return{c(){n&&n.c(),e=sn()},m(s,i){n&&n.m(s,i),b(s,e,i)},p(s,i){s[19].timeTask?n&&(n.d(1),n=null):n?n.p(s,i):(n=Vh(s),n.c(),n.m(e.parentNode,e))},d(s){n&&n.d(s),s&&y(e)}}}function qh(t){let e;return{c(){e=p("p"),e.textContent="No Hay Tareas Pendientes"},m(n,s){b(n,e,s)},p:he,d(n){n&&y(e)}}}function Hh(t){let e,n,s,i,r,o,a,l,c,h,f=t[19].timeTask+"",d,m,_=Kt(t[19].endTask)+"",v,k,E=t[19].task+"",I,M,A,j;function L(){return t[14](t[19])}function F(){return t[15](t[19])}function H(){return t[16](t[19])}let O=t[19].notes&&Kh(t);return{c(){e=p("div"),n=p("li"),s=p("span"),i=p("button"),i.textContent="\u2714",r=w(),o=p("button"),o.textContent="\u2716",a=w(),l=p("button"),l.textContent="\u2714\u2716",c=w(),h=p("spam"),d=S(f),m=S(` -*-\r
                                 `),v=S(_),k=S(` -*-\r
                                 `),I=S(E),M=S(` -*-\r
                                 `),O&&O.c(),g(n,"class","schedule svelte-1e3ab80"),ys(n,"complete",t[19].isComplete)},m(U,$){b(U,e,$),u(e,n),u(n,s),u(s,i),u(s,r),u(s,o),u(s,a),u(s,l),u(n,c),u(n,h),u(h,d),u(h,m),u(h,v),u(h,k),u(h,I),u(h,M),O&&O.m(h,null),A||(j=[q(i,"click",L),q(o,"click",F),q(l,"click",H),q(e,"dblclick",t[17])],A=!0)},p(U,$){t=U,$&2&&f!==(f=t[19].timeTask+"")&&se(d,f),$&2&&_!==(_=Kt(t[19].endTask)+"")&&se(v,_),$&2&&E!==(E=t[19].task+"")&&se(I,E),t[19].notes?O?O.p(t,$):(O=Kh(t),O.c(),O.m(h,null)):O&&(O.d(1),O=null),$&2&&ys(n,"complete",t[19].isComplete)},d(U){U&&y(e),O&&O.d(),A=!1,xe(j)}}}function Kh(t){let e=t[19].notes+"",n;return{c(){n=S(e)},m(s,i){b(s,n,i)},p(s,i){i&2&&e!==(e=s[19].notes+"")&&se(n,e)},d(s){s&&y(n)}}}function zh(t){let e,n=t[19].timeTask&&Hh(t);return{c(){n&&n.c(),e=sn()},m(s,i){n&&n.m(s,i),b(s,e,i)},p(s,i){s[19].timeTask?n?n.p(s,i):(n=Hh(s),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(s){n&&n.d(s),s&&y(e)}}}function UT(t){let e,n,s,i,r,o,a,l,c,h,f,d,m,_,v,k,E,I,M,A,j,L,F,H,O,U,$,z,W,Z,Q,G;function X(N,D){return N[0]?MT:$T}let Y=X(t),C=Y(t),P=!t[0]&&Uh(t);return{c(){e=p("div"),n=p("h1"),n.textContent="Agenda",s=w(),i=p("img"),o=w(),a=p("div"),l=p("div"),h=w(),f=p("div"),d=p("div"),m=p("input"),_=w(),v=p("div"),k=p("input"),E=w(),I=p("input"),M=w(),A=p("div"),j=p("textarea"),L=w(),F=p("div"),H=p("button"),C.c(),O=w(),U=p("button"),U.textContent="Cancelar",z=w(),W=p("div"),P&&P.c(),ct(i.src,r=Og)||g(i,"src",r),g(i,"alt","schedule"),g(i,"class","imgTitle svelte-1e3ab80"),g(l,"class","background"),g(m,"type","text"),g(m,"class","inputTask"),g(m,"cols","56"),g(m,"rows","1"),g(m,"placeholder","Agrega una Tarea o Cita"),g(k,"type","time"),g(k,"class","inputDate"),g(I,"type","date"),g(I,"class","inputDate"),g(v,"class","contDate"),g(j,"name","notes"),g(j,"id",""),g(j,"cols","56"),g(j,"rows","5"),g(j,"placeholder","descripci\xF3n"),g(f,"class","pop-up"),g(a,"class","container"),g(W,"class","container"),g(e,"class","container")},m(N,D){b(N,e,D),u(e,n),u(e,s),u(e,i),u(e,o),u(e,a),u(a,l),u(a,h),u(a,f),u(f,d),u(d,m),de(m,t[2].task),u(f,_),u(f,v),u(v,k),de(k,t[2].timeTask),u(v,E),u(v,I),de(I,t[2].endTask),u(f,M),u(f,A),u(A,j),de(j,t[2].notes),u(f,L),u(f,F),u(F,H),C.m(H,null),u(F,O),u(F,U),u(e,z),u(e,W),P&&P.m(W,null),Z=!0,Q||(G=[q(l,"keydown",t[6]),q(m,"input",t[7]),q(k,"input",t[8]),q(I,"input",t[9]),q(j,"input",t[10]),q(H,"click",t[3]),q(U,"click",t[6])],Q=!0)},p(N,[D]){D&4&&m.value!==N[2].task&&de(m,N[2].task),D&4&&de(k,N[2].timeTask),D&4&&de(I,N[2].endTask),D&4&&de(j,N[2].notes),Y!==(Y=X(N))&&(C.d(1),C=Y(N),C&&(C.c(),C.m(H,null))),N[0]?P&&(P.d(1),P=null):P?P.p(N,D):(P=Uh(N),P.c(),P.m(W,null))},i(N){Z||(Xe(()=>{c||(c=dn(l,Lo,{},!0)),c.run(1)}),Xe(()=>{$||($=dn(f,Mo,{},!0)),$.run(1)}),Z=!0)},o(N){c||(c=dn(l,Lo,{},!1)),c.run(0),$||($=dn(f,Mo,{},!1)),$.run(0),Z=!1},d(N){N&&y(e),N&&c&&c.end(),C.d(),N&&$&&$.end(),P&&P.d(),Q=!1,xe(G)}}}let Gh="";function FT(t,e,n){let s,i;Ue(t,Wi,L=>n(1,s=L)),Ue(t,yn,L=>n(2,i=L));const r=Qs();let o=!1;We(Wi,s=jo,s);async function a(){if(o)await ka(ns(It,"todos",i.id),i),n(0,o=!1);else{const L=Tn(It,"todos");await $s(L,i)}n(0,o=!1),We(yn,i={},i),We(Wi,s=jo,s),r("/")}async function l(L){n(0,o=!0);let F=confirm("Quieres borrarlo definitivmente?");r("/"),F==!0&&(await Ea(ns(It,"todos",L)),r("/"))}async function c(L){We(yn,i=L,i),n(0,o=!0)}function h(){We(yn,i=[],i),r("/contactos")}LT(s);function f(){i.task=this.value,yn.set(i)}function d(){i.timeTask=this.value,yn.set(i)}function m(){i.endTask=this.value,yn.set(i)}function _(){i.notes=this.value,yn.set(i)}return[o,s,i,a,l,c,h,f,d,m,_,L=>(L.id,void 0),L=>l(L.id),L=>c(L),L=>(L.id,void 0),L=>l(L.id),L=>c(L),()=>c]}class VT extends Ye{constructor(e){super(),Qe(this,e,FT,UT,He,{})}}function BT(t){let e;return{c(){e=p("h1"),e.textContent="Estas en Sinergias"},m(n,s){b(n,e,s)},p:he,i:he,o:he,d(n){n&&y(e)}}}class jT extends Ye{constructor(e){super(),Qe(this,e,null,BT,He,{})}}function qT(t){let e;return{c(){e=S("Inicia sesi\xF3n")},m(n,s){b(n,e,s)},d(n){n&&y(e)}}}function HT(t){let e,n,s,i,r,o,a,l,c,h,f,d,m,_,v,k,E,I,M,A,j,L,F,H,O,U,$,z,W;return U=new hn({props:{to:"/login",$$slots:{default:[qT]},$$scope:{ctx:t}}}),{c(){e=p("div"),n=p("br"),s=p("br"),i=p("br"),r=w(),o=p("div"),a=p("h1"),a.textContent="Registra tu cuenta",l=w(),c=p("div"),h=p("input"),f=w(),d=p("div"),m=p("input"),_=w(),v=p("br"),k=w(),E=p("div"),I=p("button"),I.textContent="Registrarse",M=w(),A=p("p"),A.textContent="O tambi\xE9n",j=w(),L=p("br"),F=w(),H=p("p"),O=S("\xBFYa tienes cuenta? "),ue(U.$$.fragment),g(a,"class","text-center text-login svelte-ftg4em"),g(h,"name","email"),g(h,"type","email"),g(h,"class","input-form svelte-ftg4em"),g(h,"placeholder","Correo"),h.required=!0,g(c,"class","center svelte-ftg4em"),g(m,"name","password"),g(m,"type","password"),g(m,"class","input-form svelte-ftg4em"),g(m,"placeholder","Contrase\xF1a"),g(d,"class","center svelte-ftg4em"),g(I,"class","button-signup fondo-color-signup svelte-ftg4em"),g(E,"class","center svelte-ftg4em"),g(A,"class","text-center svelte-ftg4em"),g(H,"class","text-center svelte-ftg4em"),g(o,"class","form-signin svelte-ftg4em")},m(Z,Q){b(Z,e,Q),u(e,n),u(e,s),u(e,i),u(e,r),u(e,o),u(o,a),u(o,l),u(o,c),u(c,h),u(o,f),u(o,d),u(d,m),u(o,_),u(o,v),u(o,k),u(o,E),u(E,I),u(o,M),u(o,A),u(o,j),u(o,L),u(o,F),u(o,H),u(H,O),le(U,H,null),$=!0,z||(W=[q(h,"input",t[2]),q(m,"input",t[3]),q(I,"click",t[1])],z=!0)},p(Z,[Q]){const G={};Q&64&&(G.$$scope={dirty:Q,ctx:Z}),U.$set(G)},i(Z){$||(K(U.$$.fragment,Z),$=!0)},o(Z){x(U.$$.fragment,Z),$=!1},d(Z){Z&&y(e),ce(U),z=!1,xe(W)}}}function KT(t){const e=Qs();let n={email:"",password:""};const s=a=>{n={...n,[a.target.name]:a.target.value}};return[s,async()=>{try{await cE(f_,n.email,n.password),e("/")}catch(a){console.log(a)}},a=>s(a),a=>s(a)]}class zT extends Ye{constructor(e){super(),Qe(this,e,KT,HT,He,{})}}function Wh(t,e,n){const s=t.slice();return s[1]=e[n],s}function Qh(t,e,n){const s=t.slice();return s[1]=e[n],s}function Yh(t){let e,n,s=Kt(t[1].endTask)+"",i,r,o=t[1].task+"",a,l,c=t[1].notes&&xh(t);return{c(){e=p("ul"),n=p("li"),i=S(s),r=S(` - -\r
                    `),a=S(o),l=S(` - -\r
                    `),c&&c.c(),ys(n,"complete",t[1].isComplete)},m(h,f){b(h,e,f),u(e,n),u(n,i),u(n,r),u(n,a),u(n,l),c&&c.m(n,null)},p(h,f){f&1&&s!==(s=Kt(h[1].endTask)+"")&&se(i,s),f&1&&o!==(o=h[1].task+"")&&se(a,o),h[1].notes?c?c.p(h,f):(c=xh(h),c.c(),c.m(n,null)):c&&(c.d(1),c=null),f&1&&ys(n,"complete",h[1].isComplete)},d(h){h&&y(e),c&&c.d()}}}function xh(t){let e=t[1].notes+"",n;return{c(){n=S(e)},m(s,i){b(s,n,i)},p(s,i){i&1&&e!==(e=s[1].notes+"")&&se(n,e)},d(s){s&&y(n)}}}function Xh(t){let e,n=!t[1].timeTask&&Yh(t);return{c(){n&&n.c(),e=sn()},m(s,i){n&&n.m(s,i),b(s,e,i)},p(s,i){s[1].timeTask?n&&(n.d(1),n=null):n?n.p(s,i):(n=Yh(s),n.c(),n.m(e.parentNode,e))},d(s){n&&n.d(s),s&&y(e)}}}function Jh(t){let e,n,s,i=Lh(t[1].endTask)+"",r,o,a=Oh(t[1].endTask)+"",l,c,h=Kt(t[1].endTask)+"",f,d,m=t[1].task+"",_,v,k=t[1].notes&&Zh(t);return{c(){e=p("ul"),n=p("li"),s=p("spam"),r=S(i),o=w(),l=S(a),c=S(` - -\r
                      `),f=S(h),d=w(),_=S(m),v=S(` - -\r
                      `),k&&k.c(),g(s,"type","number"),ys(n,"complete",t[1].isComplete)},m(E,I){b(E,e,I),u(e,n),u(n,s),u(s,r),u(s,o),u(s,l),u(s,c),u(s,f),u(s,d),u(s,_),u(s,v),k&&k.m(s,null)},p(E,I){I&1&&i!==(i=Lh(E[1].endTask)+"")&&se(r,i),I&1&&a!==(a=Oh(E[1].endTask)+"")&&se(l,a),I&1&&h!==(h=Kt(E[1].endTask)+"")&&se(f,h),I&1&&m!==(m=E[1].task+"")&&se(_,m),E[1].notes?k?k.p(E,I):(k=Zh(E),k.c(),k.m(s,null)):k&&(k.d(1),k=null),I&1&&ys(n,"complete",E[1].isComplete)},d(E){E&&y(e),k&&k.d()}}}function Zh(t){let e=t[1].notes+"",n;return{c(){n=S(e)},m(s,i){b(s,n,i)},p(s,i){i&1&&e!==(e=s[1].notes+"")&&se(n,e)},d(s){s&&y(n)}}}function ef(t){let e,n=t[1].timeTask&&Jh(t);return{c(){n&&n.c(),e=w()},m(s,i){n&&n.m(s,i),b(s,e,i)},p(s,i){s[1].timeTask?n?n.p(s,i):(n=Jh(s),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(s){n&&n.d(s),s&&y(e)}}}function GT(t){let e,n,s,i,r,o,a,l,c,h,f=t[0],d=[];for(let v=0;v<f.length;v+=1)d[v]=Xh(Qh(t,f,v));let m=t[0],_=[];for(let v=0;v<m.length;v+=1)_[v]=ef(Wh(t,m,v));return{c(){e=p("div"),n=p("div"),s=p("div"),i=p("h1"),i.textContent="Agenda",r=w(),o=p("h3"),o.textContent="Tareas",a=w();for(let v=0;v<d.length;v+=1)d[v].c();l=w(),c=p("h3"),c.textContent="Citas",h=w();for(let v=0;v<_.length;v+=1)_[v].c();g(i,"class","title svelte-13rvwi6"),g(o,"class","subtitle svelte-13rvwi6"),g(c,"class","subtitle svelte-13rvwi6"),g(s,"class","schedule"),g(n,"class","container"),g(e,"class","show-home")},m(v,k){b(v,e,k),u(e,n),u(n,s),u(s,i),u(s,r),u(s,o),u(s,a);for(let E=0;E<d.length;E+=1)d[E].m(s,null);u(s,l),u(s,c),u(s,h);for(let E=0;E<_.length;E+=1)_[E].m(s,null)},p(v,[k]){if(k&1){f=v[0];let E;for(E=0;E<f.length;E+=1){const I=Qh(v,f,E);d[E]?d[E].p(I,k):(d[E]=Xh(I),d[E].c(),d[E].m(s,l))}for(;E<d.length;E+=1)d[E].d(1);d.length=f.length}if(k&1){m=v[0];let E;for(E=0;E<m.length;E+=1){const I=Wh(v,m,E);_[E]?_[E].p(I,k):(_[E]=ef(I),_[E].c(),_[E].m(s,null))}for(;E<_.length;E+=1)_[E].d(1);_.length=m.length}},i:he,o:he,d(v){v&&y(e),qe(d,v),qe(_,v)}}}function WT(t,e,n){let s;return Ue(t,Wi,i=>n(0,s=i)),We(Wi,s=jo,s),[s]}class QT extends Ye{constructor(e){super(),Qe(this,e,WT,GT,He,{})}}function tf(t,e,n){const s=t.slice();return s[0]=e[n],s[2]=n,s}function YT(t){let e,n=Kt(t[0].date)+"",s,i,r=t[0].comment+"",o;return{c(){e=p("div"),s=S(n),i=w(),o=S(r),g(e,"class","date-binnacle")},m(a,l){b(a,e,l),u(e,s),u(e,i),u(e,o)},p:he,d(a){a&&y(e)}}}function nf(t){let e,n,s=t[2]<30&&YT(t);return{c(){e=p("div"),s&&s.c(),n=w(),g(e,"class","int-binnacle")},m(i,r){b(i,e,r),s&&s.m(e,null),u(e,n)},p(i,r){i[2]<30&&s.p(i,r)},d(i){i&&y(e),s&&s.d()}}}function xT(t){let e,n,s,i,r,o,a,l=Bo,c=[];for(let h=0;h<l.length;h+=1)c[h]=nf(tf(t,l,h));return{c(){e=S(`a\r
`),n=p("main"),s=p("div"),i=p("div"),r=p("div"),o=p("h1"),o.textContent="Bit\xE1cora",a=w();for(let h=0;h<c.length;h+=1)c[h].c();g(o,"class","title svelte-7lgm1k"),g(r,"class","binnacleHome"),g(i,"class","schedule"),g(s,"class","container")},m(h,f){b(h,e,f),b(h,n,f),u(n,s),u(s,i),u(i,r),u(r,o),u(r,a);for(let d=0;d<c.length;d+=1)c[d].m(r,null)},p(h,[f]){if(f&0){l=Bo;let d;for(d=0;d<l.length;d+=1){const m=tf(h,l,d);c[d]?c[d].p(m,f):(c[d]=nf(m),c[d].c(),c[d].m(r,null))}for(;d<c.length;d+=1)c[d].d(1);c.length=l.length}},i:he,o:he,d(h){h&&y(e),h&&y(n),qe(c,h)}}}function XT(t){return function(){Bo.sort((e,n)=>e.date<n.date?1:e.date>n.date?-1:0)}(),[]}class JT extends Ye{constructor(e){super(),Qe(this,e,XT,xT,He,{})}}const d_="/to-deploy-mh/assets/add-user.1bd66bde.png",p_="/to-deploy-mh/assets/house.99302696.png",ZT="/to-deploy-mh/assets/team.31fda88c.png",eI=Lt(!1);function tI(t){let e,n,s,i,r,o;return{c(){e=p("div"),n=p("div"),s=p("img"),r=w(),o=p("h1"),o.textContent="Contactos",ct(s.src,i=d_)||g(s,"src",i),g(s,"alt","Buzon"),g(s,"class","profile-img svelte-mxk4x8"),g(o,"class","name svelte-mxk4x8"),g(n,"class","optionCard svelte-mxk4x8"),g(e,"class","container")},m(a,l){b(a,e,l),u(e,n),u(n,s),u(n,r),u(n,o)},p:he,d(a){a&&y(e)}}}function nI(t){let e,n,s,i,r,o;return{c(){e=p("div"),n=p("div"),s=p("img"),r=w(),o=p("h1"),o.textContent="Propiedades",ct(s.src,i=p_)||g(s,"src",i),g(s,"alt","propiedad"),g(s,"class","profile-img svelte-mxk4x8"),g(o,"class","name svelte-mxk4x8"),g(n,"class","optionCard svelte-mxk4x8"),g(e,"class","container")},m(a,l){b(a,e,l),u(e,n),u(n,s),u(n,r),u(n,o)},p:he,d(a){a&&y(e)}}}function sI(t){let e,n,s,i,r,o;return{c(){e=p("div"),n=p("div"),s=p("img"),r=w(),o=p("h1"),o.textContent="Agenda",ct(s.src,i=Og)||g(s,"src",i),g(s,"alt","agenda"),g(s,"class","profile-img svelte-mxk4x8"),g(o,"class","name svelte-mxk4x8"),g(n,"class","optionCard svelte-mxk4x8"),g(e,"class","container")},m(a,l){b(a,e,l),u(e,n),u(n,s),u(n,r),u(n,o)},p:he,d(a){a&&y(e)}}}function iI(t){let e,n,s,i,r,o;return{c(){e=p("div"),n=p("div"),s=p("img"),r=w(),o=p("h1"),o.textContent="Sinergias",ct(s.src,i=ZT)||g(s,"src",i),g(s,"alt","sinergias"),g(s,"class","profile-img svelte-mxk4x8"),g(o,"class","name svelte-mxk4x8"),g(n,"class","optionCard svelte-mxk4x8"),g(e,"class","container")},m(a,l){b(a,e,l),u(e,n),u(n,s),u(n,r),u(n,o)},p:he,d(a){a&&y(e)}}}function rI(t){let e,n,s,i,r,o,a,l;return e=new hn({props:{to:"/contactos",title:"contactos",$$slots:{default:[tI]},$$scope:{ctx:t}}}),s=new hn({props:{to:"/propiedades",title:"propiedades",$$slots:{default:[nI]},$$scope:{ctx:t}}}),r=new hn({props:{to:"/agenda",title:"agenda",class:"s",$$slots:{default:[sI]},$$scope:{ctx:t}}}),a=new hn({props:{to:"/sinergias",title:"sinergias",$$slots:{default:[iI]},$$scope:{ctx:t}}}),{c(){ue(e.$$.fragment),n=w(),ue(s.$$.fragment),i=w(),ue(r.$$.fragment),o=w(),ue(a.$$.fragment)},m(c,h){le(e,c,h),b(c,n,h),le(s,c,h),b(c,i,h),le(r,c,h),b(c,o,h),le(a,c,h),l=!0},p(c,h){const f={};h&1&&(f.$$scope={dirty:h,ctx:c}),e.$set(f);const d={};h&1&&(d.$$scope={dirty:h,ctx:c}),s.$set(d);const m={};h&1&&(m.$$scope={dirty:h,ctx:c}),r.$set(m);const _={};h&1&&(_.$$scope={dirty:h,ctx:c}),a.$set(_)},i(c){l||(K(e.$$.fragment,c),K(s.$$.fragment,c),K(r.$$.fragment,c),K(a.$$.fragment,c),l=!0)},o(c){x(e.$$.fragment,c),x(s.$$.fragment,c),x(r.$$.fragment,c),x(a.$$.fragment,c),l=!1},d(c){ce(e,c),c&&y(n),ce(s,c),c&&y(i),ce(r,c),c&&y(o),ce(a,c)}}}function oI(t){let e,n,s,i,r,o,a,l,c;return s=new Ql({props:{$$slots:{default:[rI]},$$scope:{ctx:t}}}),o=new QT({props:{"(orderTodos)":!0}}),l=new JT({}),{c(){e=p("body"),n=p("div"),ue(s.$$.fragment),i=w(),r=p("div"),ue(o.$$.fragment),a=w(),ue(l.$$.fragment),g(n,"class","wrapper-grid svelte-mxk4x8"),g(r,"class",""),g(e,"class","svelte-mxk4x8")},m(h,f){b(h,e,f),u(e,n),le(s,n,null),u(e,i),u(e,r),le(o,r,null),u(r,a),le(l,r,null),c=!0},p(h,[f]){const d={};f&1&&(d.$$scope={dirty:f,ctx:h}),s.$set(d)},i(h){c||(K(s.$$.fragment,h),K(o.$$.fragment,h),K(l.$$.fragment,h),c=!0)},o(h){x(s.$$.fragment,h),x(o.$$.fragment,h),x(l.$$.fragment,h),c=!1},d(h){h&&y(e),ce(s),ce(o),ce(l)}}}class aI extends Ye{constructor(e){super(),Qe(this,e,null,oI,He,{})}}function lI(t){let e,n,s,i,r,o,a,l,c,h,f=Kt(t[2])+"",d,m,_,v,k,E,I,M,A,j,L,F,H,O,U,$,z,W,Z;return{c(){e=p("div"),n=p("div"),s=p("div"),i=p("h5"),r=S(t[0]),o=w(),a=S(t[1]),l=w(),c=p("h5"),h=S("Alta "),d=S(f),m=w(),_=p("div"),v=p("p"),k=S(t[3]),E=w(),I=p("p"),M=S("tel: "),A=S(t[4]),j=S(" email: "),L=S(t[5]),F=w(),H=p("p"),O=S("Presupuesto "),U=S(t[6]),$=w(),z=p("p"),W=S("Rango "),Z=S(t[7]),g(s,"class","namePerson svelte-1thiswe"),g(_,"class","nameDate svelte-1thiswe"),g(n,"class","contactCard"),g(e,"class","container contact svelte-1thiswe")},m(Q,G){b(Q,e,G),u(e,n),u(n,s),u(s,i),u(i,r),u(i,o),u(i,a),u(s,l),u(s,c),u(c,h),u(c,d),u(n,m),u(n,_),u(_,v),u(v,k),u(_,E),u(_,I),u(I,M),u(I,A),u(I,j),u(I,L),u(_,F),u(_,H),u(H,O),u(H,U),u(_,$),u(_,z),u(z,W),u(z,Z)},p(Q,[G]){G&1&&se(r,Q[0]),G&2&&se(a,Q[1]),G&4&&f!==(f=Kt(Q[2])+"")&&se(d,f),G&8&&se(k,Q[3]),G&16&&se(A,Q[4]),G&32&&se(L,Q[5]),G&64&&se(U,Q[6]),G&128&&se(Z,Q[7])},i:he,o:he,d(Q){Q&&y(e)}}}function cI(t,e,n){let{name:s,lastname:i,createdAt:r,contactStage:o,telephon:a,email:l,budget:c,rangeProp:h}=e;return t.$$set=f=>{"name"in f&&n(0,s=f.name),"lastname"in f&&n(1,i=f.lastname),"createdAt"in f&&n(2,r=f.createdAt),"contactStage"in f&&n(3,o=f.contactStage),"telephon"in f&&n(4,a=f.telephon),"email"in f&&n(5,l=f.email),"budget"in f&&n(6,c=f.budget),"rangeProp"in f&&n(7,h=f.rangeProp)},[s,i,r,o,a,l,c,h]}class uI extends Ye{constructor(e){super(),Qe(this,e,cI,lI,He,{name:0,lastname:1,createdAt:2,contactStage:3,telephon:4,email:5,budget:6,rangeProp:7})}}function hI(t){let e,n,s,i;return{c(){e=p("div"),n=p("input"),g(n,"class","searchInput svelte-6bonih"),g(n,"type","text"),g(n,"id","search-field"),g(n,"placeholder","Enter Search Term"),g(n,"autocomplete","off"),g(e,"id","search-input-cont")},m(r,o){b(r,e,o),u(e,n),de(n,t[0]),s||(i=[q(n,"input",t[2]),q(n,"input",t[1])],s=!0)},p(r,[o]){o&1&&n.value!==r[0]&&de(n,r[0])},i:he,o:he,d(r){r&&y(e),s=!1,xe(i)}}}function fI(t,e,n){let{searchTerm:s}=e;function i(o){M_.call(this,t,o)}function r(){s=this.value,n(0,s)}return t.$$set=o=>{"searchTerm"in o&&n(0,s=o.searchTerm)},[s,i,r]}class tu extends Ye{constructor(e){super(),Qe(this,e,fI,hI,He,{searchTerm:0})}}async function m_(t,e){if(console.log("estas en la funcion"),t==="todoAdding"){const n=Tn(It,"todos");await $s(n,e)}else t==="todoUpdate"?await ka(ns(It,"todos",e.id),e):t==="todoDelete"&&await Ea(ns(It,"todos",e.id));e=""}function dI(t){let e,n,s,i,r,o,a,l,c,h,f,d,m,_,v,k,E,I,M,A,j,L,F;return{c(){e=p("div"),s=w(),i=p("div"),r=p("div"),o=p("input"),a=w(),l=p("div"),c=p("input"),h=w(),f=p("input"),d=w(),m=p("div"),_=p("textarea"),v=w(),k=p("div"),E=p("button"),E.textContent="Guardar",I=w(),M=p("button"),M.textContent="Cancelar",g(e,"class","background svelte-1hkj5q6"),g(o,"type","text"),g(o,"class","inputTask svelte-1hkj5q6"),g(o,"placeholder","Agrega una Tarea o Cita"),g(c,"type","time"),g(c,"class","inputDate svelte-1hkj5q6"),g(f,"type","date"),g(f,"class","inputDate svelte-1hkj5q6"),g(l,"class","contDate"),g(_,"name","notes"),g(_,"cols","40"),g(_,"rows","5"),g(_,"placeholder","descripci\xF3n"),g(E,"class","btnShedule svelte-1hkj5q6"),g(M,"class","btnShedule svelte-1hkj5q6"),g(i,"class","pop-up svelte-1hkj5q6")},m(H,O){b(H,e,O),b(H,s,O),b(H,i,O),u(i,r),u(r,o),de(o,t[0]),u(i,a),u(i,l),u(l,c),de(c,t[1].timeTask),u(l,h),u(l,f),de(f,t[1].endTask),u(i,d),u(i,m),u(m,_),de(_,t[1].notes),u(i,v),u(i,k),u(k,E),u(k,I),u(k,M),j=!0,L||(F=[q(window,"keydown",t[4]),q(e,"click",t[2]),q(o,"input",t[5]),q(c,"input",t[6]),q(f,"input",t[7]),q(_,"input",t[8]),q(E,"click",t[3]),q(M,"click",t[2])],L=!0)},p(H,[O]){O&1&&o.value!==H[0]&&de(o,H[0]),O&2&&de(c,H[1].timeTask),O&2&&de(f,H[1].endTask),O&2&&de(_,H[1].notes)},i(H){j||(Xe(()=>{n||(n=dn(e,Lo,{},!0)),n.run(1)}),Xe(()=>{A||(A=dn(i,Mo,{},!0)),A.run(1)}),j=!0)},o(H){n||(n=dn(e,Lo,{},!1)),n.run(0),A||(A=dn(i,Mo,{},!1)),A.run(0),j=!1},d(H){H&&y(e),H&&n&&n.end(),H&&y(s),H&&y(i),H&&A&&A.end(),L=!1,xe(F)}}}function pI(t,e,n){let s,i,r;Ue(t,yn,I=>n(10,s=I)),Ue(t,it,I=>n(11,i=I)),Ue(t,Ze,I=>n(12,r=I));const o=Hd();let a=`${r.name} ${r.lastname}`,l=[],c=[],h;l={task:"",endTask:"",isComplete:"",createdAt:"",timeTask:"",notes:"",user:""};function f(){o("closeIt"),We(it,i="contSelect",i),We(yn,s="",s)}const d=async()=>{console.log("ests en addTodo"),We(it,i="todoAdding",i),console.log(h),c=a,We(yn,s={...l,task:c},s),m_(i,s),console.log(s)},m=I=>{I.key==="Enter"&&d()};function _(){a=this.value,n(0,a)}function v(){l.timeTask=this.value,n(1,l)}function k(){l.endTask=this.value,n(1,l)}function E(){l.notes=this.value,n(1,l)}return[a,l,f,d,m,_,v,k,E]}class mI extends Ye{constructor(e){super(),Qe(this,e,pI,dI,He,{})}}function gI(t){let e,n,s,i,r,o,a,l,c,h,f,d,m,_,v,k,E,I,M,A,j,L,F,H,O,U,$,z,W,Z,Q,G,X,Y,C,P,N,D,re,ae;return{c(){e=p("main"),n=p("section"),s=p("figure"),i=p("img"),o=w(),a=p("div"),l=S(t[1]),c=w(),h=p("figcaption"),f=S(t[2]),d=w(),m=p("section"),_=p("section"),v=p("div"),k=p("div"),E=S(t[3]),I=S(" Rec\xE1maras"),M=w(),A=p("div"),j=S(t[4]),L=S(" Ba\xF1os"),F=w(),H=p("div"),O=S(t[5]),U=S(" Estacionamientos"),$=w(),z=p("div"),W=S(t[6]),Z=S(" m2 de Contruccion"),Q=w(),G=p("div"),X=S(t[7]),Y=S(" m2 de Terreno"),C=w(),P=p("br"),N=w(),D=p("div"),re=S("Precio $: "),ae=S(t[8]),ct(i.src,r=t[0])||g(i,"src",r),g(i,"alt",t[1]),g(i,"class","bkcover svelte-1w1p4eb"),g(a,"class","language svelte-1w1p4eb"),g(h,"class","svelte-1w1p4eb"),g(s,"class","bkcont svelte-1w1p4eb"),g(n,"class","book-top-info svelte-1w1p4eb"),g(v,"class","buy-options-cont svelte-1w1p4eb"),g(_,"class","from-pariyatti available-at svelte-1w1p4eb"),g(m,"class","book-bottom-links svelte-1w1p4eb")},m(Se,me){b(Se,e,me),u(e,n),u(n,s),u(s,i),u(s,o),u(s,a),u(a,l),u(s,c),u(s,h),u(h,f),u(e,d),u(e,m),u(m,_),u(_,v),u(v,k),u(k,E),u(k,I),u(v,M),u(v,A),u(A,j),u(A,L),u(v,F),u(v,H),u(H,O),u(H,U),u(v,$),u(v,z),u(z,W),u(z,Z),u(v,Q),u(v,G),u(G,X),u(G,Y),u(v,C),u(v,P),u(v,N),u(v,D),u(D,re),u(D,ae)},p(Se,[me]){me&1&&!ct(i.src,r=Se[0])&&g(i,"src",r),me&2&&g(i,"alt",Se[1]),me&2&&se(l,Se[1]),me&4&&se(f,Se[2]),me&8&&se(E,Se[3]),me&16&&se(j,Se[4]),me&32&&se(O,Se[5]),me&64&&se(W,Se[6]),me&128&&se(X,Se[7]),me&256&&se(ae,Se[8])},i:he,o:he,d(Se){Se&&y(e)}}}function _I(t,e,n){let{urlImage:s,claveEB:i,nameProperty:r,beds:o,bathroom:a,park:l,areaBuilding:c,areaTotal:h,price:f}=e;return t.$$set=d=>{"urlImage"in d&&n(0,s=d.urlImage),"claveEB"in d&&n(1,i=d.claveEB),"nameProperty"in d&&n(2,r=d.nameProperty),"beds"in d&&n(3,o=d.beds),"bathroom"in d&&n(4,a=d.bathroom),"park"in d&&n(5,l=d.park),"areaBuilding"in d&&n(6,c=d.areaBuilding),"areaTotal"in d&&n(7,h=d.areaTotal),"price"in d&&n(8,f=d.price)},[s,i,r,o,a,l,c,h,f]}class g_ extends Ye{constructor(e){super(),Qe(this,e,_I,gI,He,{urlImage:0,claveEB:1,nameProperty:2,beds:3,bathroom:4,park:5,areaBuilding:6,areaTotal:7,price:8})}}let Ds;function __(t){return t<=1e6?Ds="PRM":t<=25e5?Ds="SGN":t<=5e6?Ds="TRC":t<=8e6?Ds="CRT":t<=12e6?Ds="QNT":t>12e6&&(Ds="SXT"),Ds}let Ja,Za;function vI(t){let e=Ln;return e=e.filter(n=>n.selectTP===t.selecTP),console.log("filtraste por tipo de propiedad",e),t.numBeds>0&&(e=e.filter(n=>n.beds>=t.numBeds)),t.numBaths>0&&(e=e.filter(n=>n.bathroom>=t.numBaths)),t.numParks>0&&(e=e.filter(n=>n.park>=t.numParks)),console.log("Por caracteristicas",e),t.budget?(console.log("filtraste por budget"),Ja=t.budget*.7,Za=t.budget*1.1,console.log(Ja,Za),e=e.filter(n=>n.price>=Ja&&n.price<=Za)):(console.log("filtraste por rango"),e=e.filter(n=>__(n.price)===t.rangeProp)),console.log("filtraste presupuesto",e),t.locaProperty.length>0&&(e=e.filter(n=>t.locaProperty.some(s=>n.locaProperty.includes(s)))),console.log("Filtraste por Ubicacion",e),t.tagsProperty.length>0&&(e=e.filter(n=>t.tagsProperty.every(s=>n.tagsProperty.includes(s)))),console.log("Filtraste por localizacion",e),e.length===0||""+e.length,Ml.set(e)}const qo=["Casa","Terreno","Departamento","Casa o Departamento","Local Comercial","Casa de Campo"],sf=["Lona en Propiedad","Propiedades.com","NocNok","Mercado Libre","Vivanuncios","Lamudi","Inmuebles24","Referido","Otro"],rf=["Comprador","Arrendador","Propietario","Agente Asociado","Agente Inmobiliario","Constructor","Inversionista","Otro"],of=["Contado","Credito Hipotecario","INFONAVIT","COFINAVIT","FOVISSSTE","ALIADOS","Conyugal"],af=["Venta","Renta"],lf=["Rango","PRM","SGN","TRC","CRT","QNT","SXT","SPT"],Ho=[0,1,2,3,4,5],bn=[0,1,2,3,4],cf=["Due\xF1o","Familiar","Inmobiliaria","Conocido"];function yI(t){let e,n,s,i,r,o,a,l,c,h,f,d,m,_,v,k,E,I,M,A,j,L,F,H,O,U,$,z,W,Z,Q,G,X,Y,C,P,N,D,re,ae,Se,me,at;return{c(){e=p("div"),n=p("div"),s=p("label"),i=S(`/Norte\\\r
			`),r=p("input"),o=w(),a=p("div"),l=p("label"),c=S(`/Noroeste\r
			`),h=p("input"),f=w(),d=p("label"),m=p("input"),_=S("NorEste\\"),v=w(),k=p("div"),E=p("label"),I=S(`/Oeste\r
			`),M=p("input"),A=w(),j=p("label"),L=S(`Centro Norte\r
			`),F=p("input"),H=w(),O=p("label"),U=p("input"),$=S("Este\\"),z=w(),W=p("div"),Z=p("label"),Q=S(`Centro Sur\r
			`),G=p("input"),X=w(),Y=p("div"),C=p("label"),P=S(`/SurOeste\r
			`),N=p("input"),D=w(),re=p("label"),ae=p("input"),Se=S("SurEste\\"),r.__value="Norte",r.value=r.__value,g(r,"id","north"),g(r,"type","checkbox"),t[2][0].push(r),g(s,"for","north"),g(n,"class","filterLocationOne svelte-1lvjb5r"),h.__value="Noroeste",h.value=h.__value,g(h,"id","northwest"),g(h,"type","checkbox"),t[2][0].push(h),g(l,"for","northwest"),m.__value="Noreste",m.value=m.__value,g(m,"id","northeast"),g(m,"type","checkbox"),t[2][0].push(m),g(d,"for","northeast"),g(a,"class","filterLocationOne svelte-1lvjb5r"),M.__value="Oeste",M.value=M.__value,g(M,"id","west"),g(M,"type","checkbox"),t[2][0].push(M),g(E,"for","west"),F.__value="Centronorte",F.value=F.__value,g(F,"id","townNorth"),g(F,"type","checkbox"),t[2][0].push(F),g(j,"for","townNorth"),U.__value="Este",U.value=U.__value,g(U,"id","east"),g(U,"type","checkbox"),t[2][0].push(U),g(O,"for","east"),g(k,"class","filterLocationOne svelte-1lvjb5r"),G.__value="CentroSur",G.value=G.__value,g(G,"id","townsouth"),g(G,"type","checkbox"),t[2][0].push(G),g(Z,"for","townsouth"),g(W,"class","filterLocationOne svelte-1lvjb5r"),N.__value="SurOeste",N.value=N.__value,g(N,"id","southwest"),g(N,"type","checkbox"),t[2][0].push(N),g(C,"for","southwest"),ae.__value="SurEste",ae.value=ae.__value,g(ae,"id","southeast"),g(ae,"type","checkbox"),t[2][0].push(ae),g(re,"for","southeast"),g(Y,"class","filterLocationOne svelte-1lvjb5r"),g(e,"class","containerUbication svelte-1lvjb5r")},m(ge,Pe){b(ge,e,Pe),u(e,n),u(n,s),u(s,i),u(s,r),r.checked=~t[0].indexOf(r.__value),u(e,o),u(e,a),u(a,l),u(l,c),u(l,h),h.checked=~t[0].indexOf(h.__value),u(a,f),u(a,d),u(d,m),m.checked=~t[0].indexOf(m.__value),u(d,_),u(e,v),u(e,k),u(k,E),u(E,I),u(E,M),M.checked=~t[0].indexOf(M.__value),u(k,A),u(k,j),u(j,L),u(j,F),F.checked=~t[0].indexOf(F.__value),u(k,H),u(k,O),u(O,U),U.checked=~t[0].indexOf(U.__value),u(O,$),u(e,z),u(e,W),u(W,Z),u(Z,Q),u(Z,G),G.checked=~t[0].indexOf(G.__value),u(e,X),u(e,Y),u(Y,C),u(C,P),u(C,N),N.checked=~t[0].indexOf(N.__value),u(Y,D),u(Y,re),u(re,ae),ae.checked=~t[0].indexOf(ae.__value),u(re,Se),me||(at=[q(r,"change",t[1]),q(h,"change",t[3]),q(m,"change",t[4]),q(M,"change",t[5]),q(F,"change",t[6]),q(U,"change",t[7]),q(G,"change",t[8]),q(N,"change",t[9]),q(ae,"change",t[10])],me=!0)},p(ge,[Pe]){Pe&1&&(r.checked=~ge[0].indexOf(r.__value)),Pe&1&&(h.checked=~ge[0].indexOf(h.__value)),Pe&1&&(m.checked=~ge[0].indexOf(m.__value)),Pe&1&&(M.checked=~ge[0].indexOf(M.__value)),Pe&1&&(F.checked=~ge[0].indexOf(F.__value)),Pe&1&&(U.checked=~ge[0].indexOf(U.__value)),Pe&1&&(G.checked=~ge[0].indexOf(G.__value)),Pe&1&&(N.checked=~ge[0].indexOf(N.__value)),Pe&1&&(ae.checked=~ge[0].indexOf(ae.__value))},i:he,o:he,d(ge){ge&&y(e),t[2][0].splice(t[2][0].indexOf(r),1),t[2][0].splice(t[2][0].indexOf(h),1),t[2][0].splice(t[2][0].indexOf(m),1),t[2][0].splice(t[2][0].indexOf(M),1),t[2][0].splice(t[2][0].indexOf(F),1),t[2][0].splice(t[2][0].indexOf(U),1),t[2][0].splice(t[2][0].indexOf(G),1),t[2][0].splice(t[2][0].indexOf(N),1),t[2][0].splice(t[2][0].indexOf(ae),1),me=!1,xe(at)}}}function bI(t,e,n){let{ubication:s}=e;const i=[[]];function r(){s=Bt(i[0],this.__value,this.checked),n(0,s)}function o(){s=Bt(i[0],this.__value,this.checked),n(0,s)}function a(){s=Bt(i[0],this.__value,this.checked),n(0,s)}function l(){s=Bt(i[0],this.__value,this.checked),n(0,s)}function c(){s=Bt(i[0],this.__value,this.checked),n(0,s)}function h(){s=Bt(i[0],this.__value,this.checked),n(0,s)}function f(){s=Bt(i[0],this.__value,this.checked),n(0,s)}function d(){s=Bt(i[0],this.__value,this.checked),n(0,s)}function m(){s=Bt(i[0],this.__value,this.checked),n(0,s)}return t.$$set=_=>{"ubication"in _&&n(0,s=_.ubication)},[s,r,i,o,a,l,c,h,f,d,m]}class v_ extends Ye{constructor(e){super(),Qe(this,e,bI,yI,He,{ubication:0})}}function wI(t){let e,n,s,i,r,o,a,l,c,h,f,d,m,_,v,k,E,I,M,A,j,L,F,H,O,U,$,z,W,Z,Q,G,X;return{c(){e=p("section"),n=p("div"),s=p("label"),i=S(`Fracc. Privado\r
		   `),r=p("input"),o=w(),a=p("label"),l=S(`Frente a Parque\r
         `),c=p("input"),h=w(),f=p("label"),d=S(`Una Planta\r
         `),m=p("input"),_=w(),v=p("div"),k=p("label"),E=S(`Recamara en P.B.\r
		`),I=p("input"),M=w(),A=p("label"),j=S(`Patio Amplio\r
   `),L=p("input"),F=w(),H=p("label"),O=S(`Lista para Habitarse\r
   `),U=p("input"),$=w(),z=p("div"),W=p("label"),Z=S(`Nueva\r
		`),Q=p("input"),g(r,"type","checkbox"),r.__value="Fracc. Privado",r.value=r.__value,t[2][0].push(r),g(c,"type","checkbox"),c.__value="Frente a Parque",c.value=c.__value,t[2][0].push(c),g(m,"type","checkbox"),m.__value="Una Planta",m.value=m.__value,t[2][0].push(m),g(n,"class","svelte-1b9bvt0"),g(I,"type","checkbox"),I.__value="Recamara en PB",I.value=I.__value,t[2][0].push(I),g(L,"type","checkbox"),L.__value="Patio Amplio",L.value=L.__value,t[2][0].push(L),g(U,"type","checkbox"),U.__value="Lista Habitarse",U.value=U.__value,t[2][0].push(U),g(v,"class","svelte-1b9bvt0"),g(Q,"type","checkbox"),Q.__value="Nueva",Q.value=Q.__value,t[2][0].push(Q),g(z,"class","svelte-1b9bvt0"),g(e,"class","svelte-1b9bvt0")},m(Y,C){b(Y,e,C),u(e,n),u(n,s),u(s,i),u(s,r),r.checked=~t[0].indexOf(r.__value),u(n,o),u(n,a),u(a,l),u(a,c),c.checked=~t[0].indexOf(c.__value),u(n,h),u(n,f),u(f,d),u(f,m),m.checked=~t[0].indexOf(m.__value),u(e,_),u(e,v),u(v,k),u(k,E),u(k,I),I.checked=~t[0].indexOf(I.__value),u(v,M),u(v,A),u(A,j),u(A,L),L.checked=~t[0].indexOf(L.__value),u(v,F),u(v,H),u(H,O),u(H,U),U.checked=~t[0].indexOf(U.__value),u(e,$),u(e,z),u(z,W),u(W,Z),u(W,Q),Q.checked=~t[0].indexOf(Q.__value),G||(X=[q(r,"change",t[1]),q(c,"change",t[3]),q(m,"change",t[4]),q(I,"change",t[5]),q(L,"change",t[6]),q(U,"change",t[7]),q(Q,"change",t[8])],G=!0)},p(Y,[C]){C&1&&(r.checked=~Y[0].indexOf(r.__value)),C&1&&(c.checked=~Y[0].indexOf(c.__value)),C&1&&(m.checked=~Y[0].indexOf(m.__value)),C&1&&(I.checked=~Y[0].indexOf(I.__value)),C&1&&(L.checked=~Y[0].indexOf(L.__value)),C&1&&(U.checked=~Y[0].indexOf(U.__value)),C&1&&(Q.checked=~Y[0].indexOf(Q.__value))},i:he,o:he,d(Y){Y&&y(e),t[2][0].splice(t[2][0].indexOf(r),1),t[2][0].splice(t[2][0].indexOf(c),1),t[2][0].splice(t[2][0].indexOf(m),1),t[2][0].splice(t[2][0].indexOf(I),1),t[2][0].splice(t[2][0].indexOf(L),1),t[2][0].splice(t[2][0].indexOf(U),1),t[2][0].splice(t[2][0].indexOf(Q),1),G=!1,xe(X)}}}function kI(t,e,n){let{tag:s}=e;const i=[[]];function r(){s=Bt(i[0],this.__value,this.checked),n(0,s)}function o(){s=Bt(i[0],this.__value,this.checked),n(0,s)}function a(){s=Bt(i[0],this.__value,this.checked),n(0,s)}function l(){s=Bt(i[0],this.__value,this.checked),n(0,s)}function c(){s=Bt(i[0],this.__value,this.checked),n(0,s)}function h(){s=Bt(i[0],this.__value,this.checked),n(0,s)}function f(){s=Bt(i[0],this.__value,this.checked),n(0,s)}return t.$$set=d=>{"tag"in d&&n(0,s=d.tag)},[s,r,i,o,a,l,c,h,f]}class y_ extends Ye{constructor(e){super(),Qe(this,e,kI,wI,He,{tag:0})}}function uf(t,e,n){const s=t.slice();return s[26]=e[n],s}function hf(t,e,n){const s=t.slice();return s[29]=e[n],s}function ff(t,e,n){const s=t.slice();return s[32]=e[n],s}function df(t,e,n){const s=t.slice();return s[35]=e[n],s}function pf(t,e,n){const s=t.slice();return s[38]=e[n],s}function mf(t,e,n){const s=t.slice();return s[41]=e[n],s}function gf(t,e,n){const s=t.slice();return s[44]=e[n],s}function _f(t,e,n){const s=t.slice();return s[47]=e[n],s}function vf(t,e,n){const s=t.slice();return s[50]=e[n],s}function yf(t,e,n){const s=t.slice();return s[53]=e[n],s}function EI(t){let e,n=Kt(t[3].createdAt)+"",s,i,r;return{c(){e=p("h3"),s=S(n),g(e,"class","dataInput svelte-1myljlf")},m(o,a){b(o,e,a),u(e,s),i||(r=q(e,"dblclick",t[4]),i=!0)},p(o,a){a[0]&8&&n!==(n=Kt(o[3].createdAt)+"")&&se(s,n)},d(o){o&&y(e),i=!1,r()}}}function TI(t){let e,n,s;return{c(){e=p("input"),g(e,"class","dataInput svelte-1myljlf"),g(e,"type","date")},m(i,r){b(i,e,r),de(e,t[3].createdAt),n||(s=q(e,"input",t[6]),n=!0)},p(i,r){r[0]&9&&de(e,i[3].createdAt)},d(i){i&&y(e),n=!1,s()}}}function bf(t){let e,n,s;return{c(){e=p("input"),g(e,"class","dataInput svelte-1myljlf"),g(e,"type","email"),g(e,"placeholder","email")},m(i,r){b(i,e,r),de(e,t[3].email),n||(s=q(e,"input",t[10]),n=!0)},p(i,r){r[0]&9&&e.value!==i[3].email&&de(e,i[3].email)},d(i){i&&y(e),n=!1,s()}}}function wf(t){let e,n=t[53]+"",s,i;return{c(){e=p("option"),s=S(n),g(e,"class","dataInput svelte-1myljlf"),g(e,"type","checkbox"),e.__value=i=t[53],e.value=e.__value},m(r,o){b(r,e,o),u(e,s)},p(r,o){o[0]&1&&n!==(n=r[53]+"")&&se(s,n),o[0]&1&&i!==(i=r[53])&&(e.__value=i,e.value=e.__value)},d(r){r&&y(e)}}}function kf(t){let e,n,s;return{c(){e=p("input"),g(e,"class","dataInput svelte-1myljlf"),g(e,"type","number"),g(e,"placeholder","Presupuesto")},m(i,r){b(i,e,r),de(e,t[3].budget),n||(s=q(e,"input",t[12]),n=!0)},p(i,r){r[0]&9&&ds(e.value)!==i[3].budget&&de(e,i[3].budget)},d(i){i&&y(e),n=!1,s()}}}function Ef(t){let e,n,s,i,r,o,a,l,c,h,f,d,m,_,v,k,E,I,M,A,j,L,F,H,O,U,$,z,W,Z,Q,G,X,Y,C,P,N=rf,D=[];for(let R=0;R<N.length;R+=1)D[R]=Tf(vf(t,N,R));let re=sf,ae=[];for(let R=0;R<re.length;R+=1)ae[R]=If(_f(t,re,R));let Se=of,me=[];for(let R=0;R<Se.length;R+=1)me[R]=Cf(gf(t,Se,R));let at=qo,ge=[];for(let R=0;R<at.length;R+=1)ge[R]=Sf(mf(t,at,R));let Pe=lf,Ne=[];for(let R=0;R<Pe.length;R+=1)Ne[R]=Af(pf(t,Pe,R));let dt=Ho,V=[];for(let R=0;R<dt.length;R+=1)V[R]=Df(df(t,dt,R));let ie=bn,Ke=[];for(let R=0;R<ie.length;R+=1)Ke[R]=Rf(ff(t,ie,R));let Dt=bn,Le=[];for(let R=0;R<Dt.length;R+=1)Le[R]=Pf(hf(t,Dt,R));let ht=bn,Fe=[];for(let R=0;R<ht.length;R+=1)Fe[R]=Nf(uf(t,ht,R));function rn(R){t[23](R)}let ft={};t[3].locaProperty!==void 0&&(ft.ubication=t[3].locaProperty),W=new v_({props:ft}),xn.push(()=>Vs(W,"ubication",rn));function pt(R){t[24](R)}let Ut={};return t[3].tagsProperty!==void 0&&(Ut.tag=t[3].tagsProperty),G=new y_({props:Ut}),xn.push(()=>Vs(G,"tag",pt)),{c(){e=p("select"),n=p("option"),n.textContent="Tipo de Contacto";for(let R=0;R<D.length;R+=1)D[R].c();s=w(),i=p("select"),r=p("option"),r.textContent="Modo de Contacto";for(let R=0;R<ae.length;R+=1)ae[R].c();o=w(),a=p("select"),l=p("option"),l.textContent="Modo de Pago";for(let R=0;R<me.length;R+=1)me[R].c();c=w(),h=p("select"),f=p("option"),f.textContent="Tipo de Propiedad";for(let R=0;R<ge.length;R+=1)ge[R].c();d=w(),m=p("select"),_=p("option"),_.textContent="Rango de Busqueda";for(let R=0;R<Ne.length;R+=1)Ne[R].c();v=w(),k=p("select"),E=p("option"),E.textContent="# Rec\xE1maras";for(let R=0;R<V.length;R+=1)V[R].c();I=w(),M=p("select"),A=p("option"),A.textContent="# Ba\xF1os";for(let R=0;R<Ke.length;R+=1)Ke[R].c();j=w(),L=p("select"),F=p("option"),F.textContent="# Medios Ba\xF1os";for(let R=0;R<Le.length;R+=1)Le[R].c();H=w(),O=p("select"),U=p("option"),U.textContent="# Estacionamientos";for(let R=0;R<Fe.length;R+=1)Fe[R].c();$=w(),z=p("div"),ue(W.$$.fragment),Q=w(),ue(G.$$.fragment),n.disabled=!0,n.selected=!0,n.__value="",n.value=n.__value,g(e,"class","othersInput svelte-1myljlf"),t[3].typeContact===void 0&&Xe(()=>t[14].call(e)),r.disabled=!0,r.selected=!0,r.__value="",r.value=r.__value,g(i,"class","othersInput svelte-1myljlf"),t[3].selecMC===void 0&&Xe(()=>t[15].call(i)),l.disabled=!0,l.selected=!0,l.__value="",l.value=l.__value,g(a,"class","othersInput svelte-1myljlf"),t[3].modePay===void 0&&Xe(()=>t[16].call(a)),f.disabled=!0,f.selected=!0,f.__value="",f.value=f.__value,g(h,"class","othersInput svelte-1myljlf"),g(h,"id","selTP"),g(h,"name","selTP"),t[3].selecTP===void 0&&Xe(()=>t[17].call(h)),_.disabled=!0,_.selected=!0,_.__value="",_.value=_.__value,g(m,"class","othersInput svelte-1myljlf"),g(m,"id","ranges"),g(m,"name","ranges"),t[3].rangeProp===void 0&&Xe(()=>t[18].call(m)),E.disabled=!0,E.selected=!0,E.__value="",E.value=E.__value,g(k,"class","othersInput svelte-1myljlf"),t[3].numBeds===void 0&&Xe(()=>t[19].call(k)),A.disabled=!0,A.selected=!0,A.__value="",A.value=A.__value,g(M,"class","othersInput svelte-1myljlf"),t[3].numBaths===void 0&&Xe(()=>t[20].call(M)),F.disabled=!0,F.selected=!0,F.__value="",F.value=F.__value,g(L,"class","othersInput svelte-1myljlf"),t[3].halfBathroom===void 0&&Xe(()=>t[21].call(L)),U.disabled=!0,U.selected=!0,U.__value="",U.value=U.__value,g(O,"class","othersInput svelte-1myljlf"),t[3].numParks===void 0&&Xe(()=>t[22].call(O)),g(z,"class","ubiTags svelte-1myljlf")},m(R,oe){b(R,e,oe),u(e,n);for(let _e=0;_e<D.length;_e+=1)D[_e].m(e,null);$e(e,t[3].typeContact),b(R,s,oe),b(R,i,oe),u(i,r);for(let _e=0;_e<ae.length;_e+=1)ae[_e].m(i,null);$e(i,t[3].selecMC),b(R,o,oe),b(R,a,oe),u(a,l);for(let _e=0;_e<me.length;_e+=1)me[_e].m(a,null);$e(a,t[3].modePay),b(R,c,oe),b(R,h,oe),u(h,f);for(let _e=0;_e<ge.length;_e+=1)ge[_e].m(h,null);$e(h,t[3].selecTP),b(R,d,oe),b(R,m,oe),u(m,_);for(let _e=0;_e<Ne.length;_e+=1)Ne[_e].m(m,null);$e(m,t[3].rangeProp),b(R,v,oe),b(R,k,oe),u(k,E);for(let _e=0;_e<V.length;_e+=1)V[_e].m(k,null);$e(k,t[3].numBeds),b(R,I,oe),b(R,M,oe),u(M,A);for(let _e=0;_e<Ke.length;_e+=1)Ke[_e].m(M,null);$e(M,t[3].numBaths),b(R,j,oe),b(R,L,oe),u(L,F);for(let _e=0;_e<Le.length;_e+=1)Le[_e].m(L,null);$e(L,t[3].halfBathroom),b(R,H,oe),b(R,O,oe),u(O,U);for(let _e=0;_e<Fe.length;_e+=1)Fe[_e].m(O,null);$e(O,t[3].numParks),b(R,$,oe),b(R,z,oe),le(W,z,null),u(z,Q),le(G,z,null),Y=!0,C||(P=[q(e,"change",t[14]),q(i,"change",t[15]),q(a,"change",t[16]),q(h,"change",t[17]),q(m,"change",t[18]),q(k,"change",t[19]),q(M,"change",t[20]),q(L,"change",t[21]),q(O,"change",t[22])],C=!0)},p(R,oe){if(oe&0){N=rf;let B;for(B=0;B<N.length;B+=1){const we=vf(R,N,B);D[B]?D[B].p(we,oe):(D[B]=Tf(we),D[B].c(),D[B].m(e,null))}for(;B<D.length;B+=1)D[B].d(1);D.length=N.length}if(oe[0]&9&&$e(e,R[3].typeContact),oe&0){re=sf;let B;for(B=0;B<re.length;B+=1){const we=_f(R,re,B);ae[B]?ae[B].p(we,oe):(ae[B]=If(we),ae[B].c(),ae[B].m(i,null))}for(;B<ae.length;B+=1)ae[B].d(1);ae.length=re.length}if(oe[0]&9&&$e(i,R[3].selecMC),oe&0){Se=of;let B;for(B=0;B<Se.length;B+=1){const we=gf(R,Se,B);me[B]?me[B].p(we,oe):(me[B]=Cf(we),me[B].c(),me[B].m(a,null))}for(;B<me.length;B+=1)me[B].d(1);me.length=Se.length}if(oe[0]&9&&$e(a,R[3].modePay),oe&0){at=qo;let B;for(B=0;B<at.length;B+=1){const we=mf(R,at,B);ge[B]?ge[B].p(we,oe):(ge[B]=Sf(we),ge[B].c(),ge[B].m(h,null))}for(;B<ge.length;B+=1)ge[B].d(1);ge.length=at.length}if(oe[0]&9&&$e(h,R[3].selecTP),oe&0){Pe=lf;let B;for(B=0;B<Pe.length;B+=1){const we=pf(R,Pe,B);Ne[B]?Ne[B].p(we,oe):(Ne[B]=Af(we),Ne[B].c(),Ne[B].m(m,null))}for(;B<Ne.length;B+=1)Ne[B].d(1);Ne.length=Pe.length}if(oe[0]&9&&$e(m,R[3].rangeProp),oe&0){dt=Ho;let B;for(B=0;B<dt.length;B+=1){const we=df(R,dt,B);V[B]?V[B].p(we,oe):(V[B]=Df(we),V[B].c(),V[B].m(k,null))}for(;B<V.length;B+=1)V[B].d(1);V.length=dt.length}if(oe[0]&9&&$e(k,R[3].numBeds),oe&0){ie=bn;let B;for(B=0;B<ie.length;B+=1){const we=ff(R,ie,B);Ke[B]?Ke[B].p(we,oe):(Ke[B]=Rf(we),Ke[B].c(),Ke[B].m(M,null))}for(;B<Ke.length;B+=1)Ke[B].d(1);Ke.length=ie.length}if(oe[0]&9&&$e(M,R[3].numBaths),oe&0){Dt=bn;let B;for(B=0;B<Dt.length;B+=1){const we=hf(R,Dt,B);Le[B]?Le[B].p(we,oe):(Le[B]=Pf(we),Le[B].c(),Le[B].m(L,null))}for(;B<Le.length;B+=1)Le[B].d(1);Le.length=Dt.length}if(oe[0]&9&&$e(L,R[3].halfBathroom),oe&0){ht=bn;let B;for(B=0;B<ht.length;B+=1){const we=uf(R,ht,B);Fe[B]?Fe[B].p(we,oe):(Fe[B]=Nf(we),Fe[B].c(),Fe[B].m(O,null))}for(;B<Fe.length;B+=1)Fe[B].d(1);Fe.length=ht.length}oe[0]&9&&$e(O,R[3].numParks);const _e={};!Z&&oe[0]&8&&(Z=!0,_e.ubication=R[3].locaProperty,Fs(()=>Z=!1)),W.$set(_e);const rt={};!X&&oe[0]&8&&(X=!0,rt.tag=R[3].tagsProperty,Fs(()=>X=!1)),G.$set(rt)},i(R){Y||(K(W.$$.fragment,R),K(G.$$.fragment,R),Y=!0)},o(R){x(W.$$.fragment,R),x(G.$$.fragment,R),Y=!1},d(R){R&&y(e),qe(D,R),R&&y(s),R&&y(i),qe(ae,R),R&&y(o),R&&y(a),qe(me,R),R&&y(c),R&&y(h),qe(ge,R),R&&y(d),R&&y(m),qe(Ne,R),R&&y(v),R&&y(k),qe(V,R),R&&y(I),R&&y(M),qe(Ke,R),R&&y(j),R&&y(L),qe(Le,R),R&&y(H),R&&y(O),qe(Fe,R),R&&y($),R&&y(z),ce(W),ce(G),C=!1,xe(P)}}}function Tf(t){let e,n=t[50]+"",s;return{c(){e=p("option"),s=S(n),g(e,"type","checkbox"),e.__value=t[50],e.value=e.__value},m(i,r){b(i,e,r),u(e,s)},p:he,d(i){i&&y(e)}}}function If(t){let e,n=t[47]+"",s;return{c(){e=p("option"),s=S(n),g(e,"type","checkbox"),e.__value=t[47],e.value=e.__value},m(i,r){b(i,e,r),u(e,s)},p:he,d(i){i&&y(e)}}}function Cf(t){let e,n=t[44]+"",s;return{c(){e=p("option"),s=S(n),g(e,"type","checkbox"),e.__value=t[44],e.value=e.__value},m(i,r){b(i,e,r),u(e,s)},p:he,d(i){i&&y(e)}}}function Sf(t){let e,n=t[41]+"",s;return{c(){e=p("option"),s=S(n),g(e,"type","checkbox"),e.__value=t[41],e.value=e.__value},m(i,r){b(i,e,r),u(e,s)},p:he,d(i){i&&y(e)}}}function Af(t){let e,n=t[38]+"",s;return{c(){e=p("option"),s=S(n),g(e,"type","checkbox"),e.__value=t[38],e.value=e.__value},m(i,r){b(i,e,r),u(e,s)},p:he,d(i){i&&y(e)}}}function Df(t){let e,n=t[35]+"",s,i;return{c(){e=p("option"),s=S(n),i=S(" Rec\xE1maras"),g(e,"type","checkbox"),e.__value=t[35],e.value=e.__value},m(r,o){b(r,e,o),u(e,s),u(e,i)},p:he,d(r){r&&y(e)}}}function Rf(t){let e,n=t[32]+"",s,i;return{c(){e=p("option"),s=S(n),i=S(" ba\xF1os"),g(e,"type","checkbox"),e.__value=t[32],e.value=e.__value},m(r,o){b(r,e,o),u(e,s),u(e,i)},p:he,d(r){r&&y(e)}}}function Pf(t){let e,n=t[29]+"",s,i;return{c(){e=p("option"),s=S(n),i=S(" Medios ba\xF1os"),g(e,"type","checkbox"),e.__value=t[29],e.value=e.__value},m(r,o){b(r,e,o),u(e,s),u(e,i)},p:he,d(r){r&&y(e)}}}function Nf(t){let e,n=t[26]+"",s,i;return{c(){e=p("option"),s=S(n),i=S(" Estacionamientos"),g(e,"type","checkbox"),e.__value=t[26],e.value=e.__value},m(r,o){b(r,e,o),u(e,s),u(e,i)},p:he,d(r){r&&y(e)}}}function II(t){let e,n,s,i,r,o,a,l,c,h,f,d,m,_,v,k,E,I,M,A,j,L,F,H,O,U,$;function z(P,N){return P[1]?TI:EI}let W=z(t),Z=W(t),Q=t[2]&&bf(t),G=t[0],X=[];for(let P=0;P<G.length;P+=1)X[P]=wf(yf(t,G,P));let Y=t[2]&&kf(t),C=t[2]&&Ef(t);return{c(){e=p("h1"),e.textContent="Alta Contactos",n=w(),s=p("div"),i=p("div"),Z.c(),r=w(),o=p("div"),a=p("input"),l=w(),c=p("input"),h=w(),f=p("div"),d=p("input"),m=w(),Q&&Q.c(),_=w(),v=p("div"),k=p("select"),E=p("option"),E.textContent="Propiedad de Contacto";for(let P=0;P<X.length;P+=1)X[P].c();I=w(),Y&&Y.c(),M=w(),A=p("div"),j=p("input"),L=w(),C&&C.c(),F=w(),H=p("button"),H.textContent="Alta Detalles",g(e,"class","sectionTitle"),g(a,"class","dataInput svelte-1myljlf"),g(a,"type","text"),g(a,"placeholder","Nombre"),g(c,"class","dataInput svelte-1myljlf"),g(c,"type","text"),g(c,"placeholder","Apellido"),g(o,"class","contactInput"),g(d,"class","dataInput svelte-1myljlf"),g(d,"type","tel"),g(d,"placeholder","tel\xE9fono"),g(f,"class","contactInput"),g(s,"class",""),E.disabled=!0,E.selected=!0,E.__value="",E.value=E.__value,g(k,"class","dataInput svelte-1myljlf"),g(k,"id","selTP"),g(k,"name","selTP"),t[3].propCont===void 0&&Xe(()=>t[11].call(k)),g(v,"class","col"),g(j,"class","textareaInput svelte-1myljlf"),g(j,"type","textarea"),g(j,"placeholder","Comentarios"),g(A,"class","col"),g(H,"class","btn__save")},m(P,N){b(P,e,N),b(P,n,N),b(P,s,N),u(s,i),Z.m(i,null),u(s,r),u(s,o),u(o,a),de(a,t[3].name),u(o,l),u(o,c),de(c,t[3].lastname),u(s,h),u(s,f),u(f,d),de(d,t[3].telephon),u(f,m),Q&&Q.m(f,null),b(P,_,N),b(P,v,N),u(v,k),u(k,E);for(let D=0;D<X.length;D+=1)X[D].m(k,null);$e(k,t[3].propCont),u(v,I),Y&&Y.m(v,null),b(P,M,N),b(P,A,N),u(A,j),de(j,t[3].comContact),b(P,L,N),C&&C.m(P,N),b(P,F,N),b(P,H,N),O=!0,U||($=[q(a,"input",t[7]),q(c,"input",t[8]),q(d,"input",t[9]),q(k,"change",t[11]),q(j,"input",t[13]),q(H,"click",t[5])],U=!0)},p(P,N){if(W===(W=z(P))&&Z?Z.p(P,N):(Z.d(1),Z=W(P),Z&&(Z.c(),Z.m(i,null))),N[0]&9&&a.value!==P[3].name&&de(a,P[3].name),N[0]&9&&c.value!==P[3].lastname&&de(c,P[3].lastname),N[0]&9&&de(d,P[3].telephon),P[2]?Q?Q.p(P,N):(Q=bf(P),Q.c(),Q.m(f,null)):Q&&(Q.d(1),Q=null),N[0]&1){G=P[0];let D;for(D=0;D<G.length;D+=1){const re=yf(P,G,D);X[D]?X[D].p(re,N):(X[D]=wf(re),X[D].c(),X[D].m(k,null))}for(;D<X.length;D+=1)X[D].d(1);X.length=G.length}N[0]&9&&$e(k,P[3].propCont),P[2]?Y?Y.p(P,N):(Y=kf(P),Y.c(),Y.m(v,null)):Y&&(Y.d(1),Y=null),N[0]&9&&de(j,P[3].comContact),P[2]?C?(C.p(P,N),N[0]&4&&K(C,1)):(C=Ef(P),C.c(),K(C,1),C.m(F.parentNode,F)):C&&(kt(),x(C,1,1,()=>{C=null}),Et())},i(P){O||(K(C),O=!0)},o(P){x(C),O=!1},d(P){P&&y(e),P&&y(n),P&&y(s),Z.d(),Q&&Q.d(),P&&y(_),P&&y(v),qe(X,P),Y&&Y.d(),P&&y(M),P&&y(A),P&&y(L),C&&C.d(P),P&&y(F),P&&y(H),U=!1,xe($)}}}function CI(t,e,n){let s;Ue(t,Ze,W=>n(3,s=W));var i=[];let r=Ln,o=!1,a=!1;(()=>{for(let W of r){let Z=`${W.nameProperty} ${W.claveEB} - ${(W.price/1e6).toFixed(2)}`;n(0,i=[...i,Z])}return n(0,i=i.sort())})();function l(){n(1,o=!0)}function c(){n(2,a=!0)}function h(){s.createdAt=this.value,Ze.set(s),n(0,i)}function f(){s.name=this.value,Ze.set(s),n(0,i)}function d(){s.lastname=this.value,Ze.set(s),n(0,i)}function m(){s.telephon=this.value,Ze.set(s),n(0,i)}function _(){s.email=this.value,Ze.set(s),n(0,i)}function v(){s.propCont=Vt(this),Ze.set(s),n(0,i)}function k(){s.budget=ds(this.value),Ze.set(s),n(0,i)}function E(){s.comContact=this.value,Ze.set(s),n(0,i)}function I(){s.typeContact=Vt(this),Ze.set(s),n(0,i)}function M(){s.selecMC=Vt(this),Ze.set(s),n(0,i)}function A(){s.modePay=Vt(this),Ze.set(s),n(0,i)}function j(){s.selecTP=Vt(this),Ze.set(s),n(0,i)}function L(){s.rangeProp=Vt(this),Ze.set(s),n(0,i)}function F(){s.numBeds=Vt(this),Ze.set(s),n(0,i)}function H(){s.numBaths=Vt(this),Ze.set(s),n(0,i)}function O(){s.halfBathroom=Vt(this),Ze.set(s),n(0,i)}function U(){s.numParks=Vt(this),Ze.set(s),n(0,i)}function $(W){t.$$.not_equal(s.locaProperty,W)&&(s.locaProperty=W,Ze.set(s))}function z(W){t.$$.not_equal(s.tagsProperty,W)&&(s.tagsProperty=W,Ze.set(s))}return[i,o,a,s,l,c,h,f,d,m,_,v,k,E,I,M,A,j,L,F,H,O,U,$,z]}class SI extends Ye{constructor(e){super(),Qe(this,e,CI,II,He,{},null,[-1,-1])}}function Of(t,e,n){const s=t.slice();return s[24]=e[n],s}function Lf(t,e,n){const s=t.slice();return s[27]=e[n],s}function Mf(t,e,n){const s=t.slice();return s[30]=e[n],s}function $f(t,e,n){const s=t.slice();return s[33]=e[n],s}function Uf(t,e,n){const s=t.slice();return s[36]=e[n],s}function Ff(t,e,n){const s=t.slice();return s[39]=e[n],s}function Vf(t,e,n){const s=t.slice();return s[42]=e[n],s}function AI(t){let e,n=Kt(t[1].createdAt)+"",s,i,r;return{c(){e=p("h3"),s=S(n),g(e,"class","dataInput")},m(o,a){b(o,e,a),u(e,s),i||(r=q(e,"dblclick",t[3]),i=!0)},p(o,a){a[0]&2&&n!==(n=Kt(o[1].createdAt)+"")&&se(s,n)},d(o){o&&y(e),i=!1,r()}}}function DI(t){let e,n,s;return{c(){e=p("input"),g(e,"class","dataInput"),g(e,"type","date")},m(i,r){b(i,e,r),de(e,t[1].createdAt),n||(s=q(e,"input",t[4]),n=!0)},p(i,r){r[0]&2&&de(e,i[1].createdAt)},d(i){i&&y(e),n=!1,s()}}}function Bf(t){let e,n=t[42]+"",s;return{c(){e=p("option"),s=S(n),g(e,"type","checkbox"),e.__value=t[42],e.value=e.__value},m(i,r){b(i,e,r),u(e,s)},p:he,d(i){i&&y(e)}}}function jf(t){let e,n=t[39]+"",s,i;return{c(){e=p("option"),s=S(n),i=w(),g(e,"type","checkbox"),e.__value=t[39],e.value=e.__value},m(r,o){b(r,e,o),u(e,s),u(e,i)},p:he,d(r){r&&y(e)}}}function qf(t){let e,n=t[36]+"",s,i;return{c(){e=p("option"),s=S(n),i=S(" Rec\xE1maras"),g(e,"type","checkbox"),e.__value=t[36],e.value=e.__value},m(r,o){b(r,e,o),u(e,s),u(e,i)},p:he,d(r){r&&y(e)}}}function Hf(t){let e,n=t[33]+"",s,i;return{c(){e=p("option"),s=S(n),i=S(" ba\xF1os"),g(e,"type","checkbox"),e.__value=t[33],e.value=e.__value},m(r,o){b(r,e,o),u(e,s),u(e,i)},p:he,d(r){r&&y(e)}}}function Kf(t){let e,n=t[30]+"",s,i;return{c(){e=p("option"),s=S(n),i=S(" Medios ba\xF1os"),g(e,"type","checkbox"),e.__value=t[30],e.value=e.__value},m(r,o){b(r,e,o),u(e,s),u(e,i)},p:he,d(r){r&&y(e)}}}function zf(t){let e,n=t[27]+"",s,i;return{c(){e=p("option"),s=S(n),i=S(" Estacionamientos"),g(e,"type","checkbox"),e.__value=t[27],e.value=e.__value},m(r,o){b(r,e,o),u(e,s),u(e,i)},p:he,d(r){r&&y(e)}}}function Gf(t){let e,n=t[24]+"",s;return{c(){e=p("option"),s=S(n),g(e,"type","checkbox"),e.__value=t[24],e.value=e.__value},m(i,r){b(i,e,r),u(e,s)},p:he,d(i){i&&y(e)}}}function RI(t){let e,n,s,i,r,o,a,l,c,h,f,d,m,_,v,k,E,I,M,A,j,L,F,H,O,U,$,z,W,Z,Q,G,X,Y,C,P,N,D,re,ae,Se,me,at,ge,Pe,Ne,dt,V,ie,Ke,Dt,Le,ht,Fe,rn,ft,pt,Ut,R,oe,_e,rt,B,we,mt,on,lt,Vn,an,gt,Cn,Sn,ln,An;function Dn(T,ne){if(T[0])return DI;if(T[2]==="propEditing")return AI}let Zt=Dn(t),Ve=Zt&&Zt(t),en=qo,Be=[];for(let T=0;T<en.length;T+=1)Be[T]=Bf(Vf(t,en,T));let Ae=af,Ie=[];for(let T=0;T<Ae.length;T+=1)Ie[T]=jf(Ff(t,Ae,T));let Bn=Ho,_t=[];for(let T=0;T<Bn.length;T+=1)_t[T]=qf(Uf(t,Bn,T));let jn=bn,Ft=[];for(let T=0;T<jn.length;T+=1)Ft[T]=Hf($f(t,jn,T));let Rn=bn,vt=[];for(let T=0;T<Rn.length;T+=1)vt[T]=Kf(Mf(t,Rn,T));let qn=bn,yt=[];for(let T=0;T<qn.length;T+=1)yt[T]=zf(Lf(t,qn,T));let vn=cf,tt=[];for(let T=0;T<vn.length;T+=1)tt[T]=Gf(Of(t,vn,T));function Hr(T){t[22](T)}let rs={};t[1].locaProperty!==void 0&&(rs.ubication=t[1].locaProperty),lt=new v_({props:rs}),xn.push(()=>Vs(lt,"ubication",Hr));function As(T){t[23](T)}let Di={};return t[1].tagsProperty!==void 0&&(Di.tag=t[1].tagsProperty),gt=new y_({props:Di}),xn.push(()=>Vs(gt,"tag",As)),{c(){e=p("div"),Ve&&Ve.c(),n=w(),s=p("select"),i=p("option"),i.textContent="Tipo de Propiedad";for(let T=0;T<Be.length;T+=1)Be[T].c();r=w(),o=p("label"),o.innerHTML=`Titulo
       <input type="text"/>`,a=w(),l=p("label"),c=S(`Colonia\r
        `),h=p("input"),f=w(),d=p("label"),m=S(`Nombre de la Propiead\r
        `),_=p("input"),v=w(),k=p("label"),E=S(`Clave EB\r
        `),I=p("input"),M=w(),A=p("label"),j=S(`Clave MH\r
        `),L=p("input"),F=w(),H=p("div"),O=p("textarea"),U=w(),$=p("select"),z=p("option"),z.textContent="Tipo de Operaci\xF3n";for(let T=0;T<Ie.length;T+=1)Ie[T].c();W=w(),Z=p("select"),Q=p("option"),Q.textContent="# Rec\xE1maras";for(let T=0;T<_t.length;T+=1)_t[T].c();G=w(),X=p("select"),Y=p("option"),Y.textContent="# Ba\xF1os";for(let T=0;T<Ft.length;T+=1)Ft[T].c();C=w(),P=p("select"),N=p("option"),N.textContent="# Medios Ba\xF1os";for(let T=0;T<vt.length;T+=1)vt[T].c();D=w(),re=p("select"),ae=p("option"),ae.textContent="# Estacionamientos";for(let T=0;T<yt.length;T+=1)yt[T].c();Se=w(),me=p("label"),at=S(`Area de Construcci\xF3n\r
            `),ge=p("input"),Pe=w(),Ne=p("label"),dt=S(`Area de Terreno\r
            `),V=p("input"),ie=w(),Ke=p("label"),Dt=S(`Precio\r
            `),Le=p("input"),ht=w(),Fe=p("label"),rn=S(`Link Imgen\r
        `),ft=p("input"),pt=w(),Ut=p("label"),R=S(`Link de la Propiedad\r
        `),oe=p("input"),_e=w(),rt=p("label"),rt.innerHTML=`Propietario
            <input type="text"/>`,B=w(),we=p("select"),mt=p("option"),mt.textContent="Tipo de Encargado";for(let T=0;T<tt.length;T+=1)tt[T].c();on=w(),ue(lt.$$.fragment),an=w(),ue(gt.$$.fragment),i.disabled=!0,i.selected=!0,i.__value="",i.value=i.__value,g(s,"class","selTP"),g(s,"id","selTP"),g(s,"name","selTP"),t[1].selecTP===void 0&&Xe(()=>t[5].call(s)),g(h,"type","text"),g(_,"type","text"),g(I,"type","text"),g(L,"type","text"),g(O,"placeholder","Comentarios"),g(O,"cols","65"),g(O,"rows","5"),g(O,"class","form-control"),g(H,"class","col"),z.disabled=!0,z.selected=!0,z.__value="",z.value=z.__value,t[1].typeOperation===void 0&&Xe(()=>t[11].call($)),Q.disabled=!0,Q.selected=!0,Q.__value="",Q.value=Q.__value,t[1].beds===void 0&&Xe(()=>t[12].call(Z)),Y.disabled=!0,Y.selected=!0,Y.__value="",Y.value=Y.__value,t[1].bathroom===void 0&&Xe(()=>t[13].call(X)),N.disabled=!0,N.selected=!0,N.__value="",N.value=N.__value,t[1].halfBathroom===void 0&&Xe(()=>t[14].call(P)),ae.disabled=!0,ae.selected=!0,ae.__value="",ae.value=ae.__value,t[1].park===void 0&&Xe(()=>t[15].call(re)),g(ge,"type","number"),g(V,"type","number"),g(Le,"type","number"),g(ft,"type","text"),g(oe,"type","text"),mt.disabled=!0,mt.selected=!0,mt.__value="",mt.value=mt.__value,g(we,"name","typeSaller"),t[1].typeSaller===void 0&&Xe(()=>t[21].call(we))},m(T,ne){b(T,e,ne),Ve&&Ve.m(e,null),b(T,n,ne),b(T,s,ne),u(s,i);for(let Re=0;Re<Be.length;Re+=1)Be[Re].m(s,null);$e(s,t[1].selecTP),b(T,r,ne),b(T,o,ne),b(T,a,ne),b(T,l,ne),u(l,c),u(l,h),de(h,t[1].colonia),b(T,f,ne),b(T,d,ne),u(d,m),u(d,_),de(_,t[1].nameProperty),b(T,v,ne),b(T,k,ne),u(k,E),u(k,I),de(I,t[1].claveEB),b(T,M,ne),b(T,A,ne),u(A,j),u(A,L),de(L,t[1].claveMH),b(T,F,ne),b(T,H,ne),u(H,O),de(O,t[1].description),b(T,U,ne),b(T,$,ne),u($,z);for(let Re=0;Re<Ie.length;Re+=1)Ie[Re].m($,null);$e($,t[1].typeOperation),b(T,W,ne),b(T,Z,ne),u(Z,Q);for(let Re=0;Re<_t.length;Re+=1)_t[Re].m(Z,null);$e(Z,t[1].beds),b(T,G,ne),b(T,X,ne),u(X,Y);for(let Re=0;Re<Ft.length;Re+=1)Ft[Re].m(X,null);$e(X,t[1].bathroom),b(T,C,ne),b(T,P,ne),u(P,N);for(let Re=0;Re<vt.length;Re+=1)vt[Re].m(P,null);$e(P,t[1].halfBathroom),b(T,D,ne),b(T,re,ne),u(re,ae);for(let Re=0;Re<yt.length;Re+=1)yt[Re].m(re,null);$e(re,t[1].park),b(T,Se,ne),b(T,me,ne),u(me,at),u(me,ge),de(ge,t[1].areaBuilding),b(T,Pe,ne),b(T,Ne,ne),u(Ne,dt),u(Ne,V),de(V,t[1].areaTotal),b(T,ie,ne),b(T,Ke,ne),u(Ke,Dt),u(Ke,Le),de(Le,t[1].price),b(T,ht,ne),b(T,Fe,ne),u(Fe,rn),u(Fe,ft),de(ft,t[1].urlImage),b(T,pt,ne),b(T,Ut,ne),u(Ut,R),u(Ut,oe),de(oe,t[1].urlProp),b(T,_e,ne),b(T,rt,ne),b(T,B,ne),b(T,we,ne),u(we,mt);for(let Re=0;Re<tt.length;Re+=1)tt[Re].m(we,null);$e(we,t[1].typeSaller),b(T,on,ne),le(lt,T,ne),b(T,an,ne),le(gt,T,ne),Sn=!0,ln||(An=[q(s,"change",t[5]),q(h,"input",t[6]),q(_,"input",t[7]),q(I,"input",t[8]),q(L,"input",t[9]),q(O,"input",t[10]),q($,"change",t[11]),q(Z,"change",t[12]),q(X,"change",t[13]),q(P,"change",t[14]),q(re,"change",t[15]),q(ge,"input",t[16]),q(V,"input",t[17]),q(Le,"input",t[18]),q(ft,"input",t[19]),q(oe,"input",t[20]),q(we,"change",t[21])],ln=!0)},p(T,ne){if(Zt===(Zt=Dn(T))&&Ve?Ve.p(T,ne):(Ve&&Ve.d(1),Ve=Zt&&Zt(T),Ve&&(Ve.c(),Ve.m(e,null))),ne&0){en=qo;let J;for(J=0;J<en.length;J+=1){const ot=Vf(T,en,J);Be[J]?Be[J].p(ot,ne):(Be[J]=Bf(ot),Be[J].c(),Be[J].m(s,null))}for(;J<Be.length;J+=1)Be[J].d(1);Be.length=en.length}if(ne[0]&2&&$e(s,T[1].selecTP),ne[0]&2&&h.value!==T[1].colonia&&de(h,T[1].colonia),ne[0]&2&&_.value!==T[1].nameProperty&&de(_,T[1].nameProperty),ne[0]&2&&I.value!==T[1].claveEB&&de(I,T[1].claveEB),ne[0]&2&&L.value!==T[1].claveMH&&de(L,T[1].claveMH),ne[0]&2&&de(O,T[1].description),ne&0){Ae=af;let J;for(J=0;J<Ae.length;J+=1){const ot=Ff(T,Ae,J);Ie[J]?Ie[J].p(ot,ne):(Ie[J]=jf(ot),Ie[J].c(),Ie[J].m($,null))}for(;J<Ie.length;J+=1)Ie[J].d(1);Ie.length=Ae.length}if(ne[0]&2&&$e($,T[1].typeOperation),ne&0){Bn=Ho;let J;for(J=0;J<Bn.length;J+=1){const ot=Uf(T,Bn,J);_t[J]?_t[J].p(ot,ne):(_t[J]=qf(ot),_t[J].c(),_t[J].m(Z,null))}for(;J<_t.length;J+=1)_t[J].d(1);_t.length=Bn.length}if(ne[0]&2&&$e(Z,T[1].beds),ne&0){jn=bn;let J;for(J=0;J<jn.length;J+=1){const ot=$f(T,jn,J);Ft[J]?Ft[J].p(ot,ne):(Ft[J]=Hf(ot),Ft[J].c(),Ft[J].m(X,null))}for(;J<Ft.length;J+=1)Ft[J].d(1);Ft.length=jn.length}if(ne[0]&2&&$e(X,T[1].bathroom),ne&0){Rn=bn;let J;for(J=0;J<Rn.length;J+=1){const ot=Mf(T,Rn,J);vt[J]?vt[J].p(ot,ne):(vt[J]=Kf(ot),vt[J].c(),vt[J].m(P,null))}for(;J<vt.length;J+=1)vt[J].d(1);vt.length=Rn.length}if(ne[0]&2&&$e(P,T[1].halfBathroom),ne&0){qn=bn;let J;for(J=0;J<qn.length;J+=1){const ot=Lf(T,qn,J);yt[J]?yt[J].p(ot,ne):(yt[J]=zf(ot),yt[J].c(),yt[J].m(re,null))}for(;J<yt.length;J+=1)yt[J].d(1);yt.length=qn.length}if(ne[0]&2&&$e(re,T[1].park),ne[0]&2&&ds(ge.value)!==T[1].areaBuilding&&de(ge,T[1].areaBuilding),ne[0]&2&&ds(V.value)!==T[1].areaTotal&&de(V,T[1].areaTotal),ne[0]&2&&ds(Le.value)!==T[1].price&&de(Le,T[1].price),ne[0]&2&&ft.value!==T[1].urlImage&&de(ft,T[1].urlImage),ne[0]&2&&oe.value!==T[1].urlProp&&de(oe,T[1].urlProp),ne&0){vn=cf;let J;for(J=0;J<vn.length;J+=1){const ot=Of(T,vn,J);tt[J]?tt[J].p(ot,ne):(tt[J]=Gf(ot),tt[J].c(),tt[J].m(we,null))}for(;J<tt.length;J+=1)tt[J].d(1);tt.length=vn.length}ne[0]&2&&$e(we,T[1].typeSaller);const Re={};!Vn&&ne[0]&2&&(Vn=!0,Re.ubication=T[1].locaProperty,Fs(()=>Vn=!1)),lt.$set(Re);const Hn={};!Cn&&ne[0]&2&&(Cn=!0,Hn.tag=T[1].tagsProperty,Fs(()=>Cn=!1)),gt.$set(Hn)},i(T){Sn||(K(lt.$$.fragment,T),K(gt.$$.fragment,T),Sn=!0)},o(T){x(lt.$$.fragment,T),x(gt.$$.fragment,T),Sn=!1},d(T){T&&y(e),Ve&&Ve.d(),T&&y(n),T&&y(s),qe(Be,T),T&&y(r),T&&y(o),T&&y(a),T&&y(l),T&&y(f),T&&y(d),T&&y(v),T&&y(k),T&&y(M),T&&y(A),T&&y(F),T&&y(H),T&&y(U),T&&y($),qe(Ie,T),T&&y(W),T&&y(Z),qe(_t,T),T&&y(G),T&&y(X),qe(Ft,T),T&&y(C),T&&y(P),qe(vt,T),T&&y(D),T&&y(re),qe(yt,T),T&&y(Se),T&&y(me),T&&y(Pe),T&&y(Ne),T&&y(ie),T&&y(Ke),T&&y(ht),T&&y(Fe),T&&y(pt),T&&y(Ut),T&&y(_e),T&&y(rt),T&&y(B),T&&y(we),qe(tt,T),T&&y(on),ce(lt,T),T&&y(an),ce(gt,T),ln=!1,xe(An)}}}function PI(t,e,n){let s,i;Ue(t,Je,$=>n(1,s=$)),Ue(t,it,$=>n(2,i=$));let r=!1;function o(){n(0,r=!0)}function a(){s.createdAt=this.value,Je.set(s)}function l(){s.selecTP=Vt(this),Je.set(s)}function c(){s.colonia=this.value,Je.set(s)}function h(){s.nameProperty=this.value,Je.set(s)}function f(){s.claveEB=this.value,Je.set(s)}function d(){s.claveMH=this.value,Je.set(s)}function m(){s.description=this.value,Je.set(s)}function _(){s.typeOperation=Vt(this),Je.set(s)}function v(){s.beds=Vt(this),Je.set(s)}function k(){s.bathroom=Vt(this),Je.set(s)}function E(){s.halfBathroom=Vt(this),Je.set(s)}function I(){s.park=Vt(this),Je.set(s)}function M(){s.areaBuilding=ds(this.value),Je.set(s)}function A(){s.areaTotal=ds(this.value),Je.set(s)}function j(){s.price=ds(this.value),Je.set(s)}function L(){s.urlImage=this.value,Je.set(s)}function F(){s.urlProp=this.value,Je.set(s)}function H(){s.typeSaller=Vt(this),Je.set(s)}function O($){t.$$.not_equal(s.locaProperty,$)&&(s.locaProperty=$,Je.set(s))}function U($){t.$$.not_equal(s.tagsProperty,$)&&(s.tagsProperty=$,Je.set(s))}return[r,s,i,o,a,l,c,h,f,d,m,_,v,k,E,I,M,A,j,L,F,H,O,U]}class NI extends Ye{constructor(e){super(),Qe(this,e,PI,RI,He,{},null,[-1,-1])}}function OI(t){let e;return{c(){e=S("Editar")},m(n,s){b(n,e,s)},d(n){n&&y(e)}}}function LI(t){let e;return{c(){e=S("Guardar")},m(n,s){b(n,e,s)},d(n){n&&y(e)}}}function MI(t){let e,n,s,i,r,o,a,l,c,h;n=new SI({});function f(_,v){return _[0]?OI:LI}let d=f(t),m=d(t);return{c(){e=p("div"),ue(n.$$.fragment),s=w(),i=p("div"),r=p("button"),m.c(),o=w(),a=p("button"),a.textContent="Cancel",g(r,"class","btn__save"),g(a,"class","btn__cancel"),g(i,"class","contSavCan svelte-1at07r"),g(e,"class","altaContactos")},m(_,v){b(_,e,v),le(n,e,null),u(e,s),u(e,i),u(i,r),m.m(r,null),u(i,o),u(i,a),l=!0,c||(h=[q(r,"click",t[4]),q(a,"click",t[3])],c=!0)},p(_,[v]){d!==(d=f(_))&&(m.d(1),m=d(_),m&&(m.c(),m.m(r,null)))},i(_){l||(K(n.$$.fragment,_),l=!0)},o(_){x(n.$$.fragment,_),l=!1},d(_){_&&y(e),ce(n),m.d(),c=!1,xe(h)}}}function $I(t,e,n){let s,i;Ue(t,it,f=>n(6,s=f)),Ue(t,Ze,f=>n(1,i=f));let r=!1,o;async function a(f){if(console.log(s),o=Date.now(),f={...f,createdAt:o},s!="contEditing"){const d=Tn(It,"contacts");await $s(d,f),We(it,s="binnAdding",s),l(s,f)}else await ka(ns(It,"contacts",f.id),f),l(s,f),n(0,r=!1);f=[],We(it,s="contSelect",s)}async function l(f,d){try{if(f==="binnAdding"){let m=`Se le agreg\xF3 a: ${d.name} ${d.lastname} del ${d.telephon}`,_={date:Date.now(),comment:m};console.log(f,_);const v=Tn(It,"binnacles");await $s(v,_)}else{let m=`Se le edit\xF3 a: ${d.name} ${d.lastname} del ${d.telephon}`,_={date:Date.now(),comment:m};console.log(f,_);const v=Tn(It,"binnacles");await $s(v,_)}}catch(m){console.log("error",m)}}function c(){n(0,r=!0),location.href="/"}return[r,i,a,c,()=>a(i)]}class UI extends Ye{constructor(e){super(),Qe(this,e,$I,MI,He,{})}}const b_="/to-deploy-mh/assets/trash.2d1385a7.svg",w_="/to-deploy-mh/assets/edit.070633c4.svg";function Wf(t,e,n){const s=t.slice();return s[42]=e[n],s}function Qf(t,e,n){const s=t.slice();return s[45]=e[n],s}function Yf(t){let e,n,s,i,r,o=t[8].name+"",a,l,c=t[8].lastname+"",h,f,d,m,_=Kt(t[8].createdAt)+"",v,k,E,I,M=t[8].selecTP+"",A,j,L=t[8].numBeds+"",F,H,O=t[8].numBaths+"",U,$,z=t[8].numParks+"",W,Z,Q,G,X,Y,C=t[8].budget+"",P,N,D,re=t[8].selecTP+"",ae,Se,me,at,ge,Pe=t[8].telephon+"",Ne,dt,V,ie=t[8].email+"",Ke,Dt,Le,ht,Fe=t[8].tagsProperty.join(",  ")+"",rn,ft,pt,Ut,R=t[8].locaProperty.join(",  ")+"",oe,_e,rt,B,we,mt,on,lt,Vn,an,gt=t[8].contactStage+"",Cn,Sn,ln,An=t[8].comContact+"",Dn,Zt,Ve,en,Be,Ae,Ie,Bn,_t,jn,Ft,Rn,vt,qn,yt,vn,tt,Hr,rs,As,Di,T,ne,Re,Hn,J,ot,Js,nu,Sa,Ri,Tt,Aa,su,Zs=t[8].sendedProperties,cn=[];for(let ve=0;ve<Zs.length;ve+=1)cn[ve]=xf(Qf(t,Zs,ve));let un=t[0]&&Xf(t),Rt=t[2]&&Jf(t),Pt=t[7]&&Zf(t),Nt=t[6]&&ed(t);return{c(){e=p("div"),n=p("div"),s=p("h4"),s.textContent="Contacto",i=w(),r=p("h2"),a=S(o),l=w(),h=S(c),f=w(),d=p("p"),m=S("Fecha Alta: "),v=S(_),k=w(),E=p("p"),I=S("Busca  "),A=S(M),j=S(", de "),F=S(L),H=S(" rec\xE1maras,  "),U=S(O),$=S(" ba\xF1os y "),W=S(z),Z=S(" estacionamientos"),Q=w(),G=p("p"),X=S("Presupuesto tope: "),Y=p("strong"),P=S(C),N=S(" : Tipo de propiedad buscada: "),D=p("strong"),ae=S(re),Se=w(),me=p("p"),at=S("Tel\xE9fono: "),ge=p("strong"),Ne=S(Pe),dt=S(" ---- Email: "),V=p("strong"),Ke=S(ie),Dt=w(),Le=p("p"),ht=S("Preferencias: "),rn=S(Fe),ft=w(),pt=p("p"),Ut=S("Ubicaciones: "),oe=S(R),_e=w(),rt=p("div"),B=p("p"),B.textContent="Propiedades enviadas:",we=w(),mt=p("div");for(let ve=0;ve<cn.length;ve+=1)cn[ve].c();on=w(),lt=p("div"),un&&un.c(),Vn=w(),an=p("p"),Cn=S(gt),Sn=w(),ln=p("p"),Dn=S(An),Zt=w(),Ve=p("div"),en=p("button"),en.textContent="Programar Evento",Be=w(),Rt&&Rt.c(),Ae=w(),Ie=p("button"),Ie.textContent="Ver Propiedades de Interes",Bn=w(),_t=p("button"),_t.textContent="Buscar Propiedad",jn=w(),Pt&&Pt.c(),Ft=w(),Rn=p("div"),vt=p("button"),vt.textContent="Cancelar",qn=w(),yt=p("div"),vn=p("div"),tt=p("textarea"),Hr=w(),rs=p("div"),As=p("button"),As.textContent="Enviar WhatsApp",Di=w(),T=p("button"),T.textContent="Guardar Info",ne=w(),Re=p("div"),Hn=p("img"),ot=w(),Js=p("img"),Sa=w(),Nt&&Nt.c(),Ri=sn(),g(mt,"class","mostImage svelte-ce274g"),g(rt,"class","propMost"),g(en,"class","btnCommon"),g(Ie,"class","btnCommon"),g(_t,"class","btnCommon"),g(vt,"class","btn__cancel"),g(tt,"class","texArea"),g(tt,"cols","65"),g(tt,"rows","5"),g(tt,"placeholder","Ingresa un comentario"),g(As,"class","btnCommon btnWhatsApp"),g(T,"class","btnCommon"),ct(Hn.src,J=w_)||g(Hn,"src",J),g(Hn,"alt","delete"),ct(Js.src,nu=b_)||g(Js,"src",nu),g(Js,"alt","delete"),g(Re,"class","icon__Content"),g(e,"class","container")},m(ve,ze){b(ve,e,ze),u(e,n),u(n,s),u(n,i),u(n,r),u(r,a),u(r,l),u(r,h),u(n,f),u(n,d),u(d,m),u(d,v),u(n,k),u(n,E),u(E,I),u(E,A),u(E,j),u(E,F),u(E,H),u(E,U),u(E,$),u(E,W),u(E,Z),u(n,Q),u(n,G),u(G,X),u(G,Y),u(Y,P),u(G,N),u(G,D),u(D,ae),u(n,Se),u(n,me),u(me,at),u(me,ge),u(ge,Ne),u(me,dt),u(me,V),u(V,Ke),u(n,Dt),u(n,Le),u(Le,ht),u(Le,rn),u(n,ft),u(n,pt),u(pt,Ut),u(pt,oe),u(n,_e),u(n,rt),u(rt,B),u(rt,we),u(rt,mt);for(let Gt=0;Gt<cn.length;Gt+=1)cn[Gt].m(mt,null);u(e,on),u(e,lt),un&&un.m(lt,null),u(e,Vn),u(e,an),u(an,Cn),u(e,Sn),u(e,ln),u(ln,Dn),u(e,Zt),u(e,Ve),u(Ve,en),u(Ve,Be),Rt&&Rt.m(Ve,null),u(Ve,Ae),u(Ve,Ie),u(Ve,Bn),u(Ve,_t),u(Ve,jn),Pt&&Pt.m(Ve,null),u(e,Ft),u(e,Rn),u(Rn,vt),u(e,qn),u(e,yt),u(yt,vn),u(vn,tt),de(tt,t[4]),u(vn,Hr),u(vn,rs),u(rs,As),u(rs,Di),u(rs,T),u(yt,ne),u(yt,Re),u(Re,Hn),u(Re,ot),u(Re,Js),b(ve,Sa,ze),Nt&&Nt.m(ve,ze),b(ve,Ri,ze),Tt=!0,Aa||(su=[q(en,"click",t[27]),q(Ie,"click",t[28]),q(_t,"click",t[14]),q(vt,"click",t[17]),q(tt,"keypress",t[18]),q(tt,"input",t[30]),q(As,"click",t[23]),q(T,"click",t[24]),q(Hn,"click",t[19]),q(Js,"click",t[20])],Aa=!0)},p(ve,ze){if((!Tt||ze[0]&256)&&o!==(o=ve[8].name+"")&&se(a,o),(!Tt||ze[0]&256)&&c!==(c=ve[8].lastname+"")&&se(h,c),(!Tt||ze[0]&256)&&_!==(_=Kt(ve[8].createdAt)+"")&&se(v,_),(!Tt||ze[0]&256)&&M!==(M=ve[8].selecTP+"")&&se(A,M),(!Tt||ze[0]&256)&&L!==(L=ve[8].numBeds+"")&&se(F,L),(!Tt||ze[0]&256)&&O!==(O=ve[8].numBaths+"")&&se(U,O),(!Tt||ze[0]&256)&&z!==(z=ve[8].numParks+"")&&se(W,z),(!Tt||ze[0]&256)&&C!==(C=ve[8].budget+"")&&se(P,C),(!Tt||ze[0]&256)&&re!==(re=ve[8].selecTP+"")&&se(ae,re),(!Tt||ze[0]&256)&&Pe!==(Pe=ve[8].telephon+"")&&se(Ne,Pe),(!Tt||ze[0]&256)&&ie!==(ie=ve[8].email+"")&&se(Ke,ie),(!Tt||ze[0]&256)&&Fe!==(Fe=ve[8].tagsProperty.join(",  ")+"")&&se(rn,Fe),(!Tt||ze[0]&256)&&R!==(R=ve[8].locaProperty.join(",  ")+"")&&se(oe,R),ze[0]&6402){Zs=ve[8].sendedProperties;let Gt;for(Gt=0;Gt<Zs.length;Gt+=1){const iu=Qf(ve,Zs,Gt);cn[Gt]?cn[Gt].p(iu,ze):(cn[Gt]=xf(iu),cn[Gt].c(),cn[Gt].m(mt,null))}for(;Gt<cn.length;Gt+=1)cn[Gt].d(1);cn.length=Zs.length}ve[0]?un?un.p(ve,ze):(un=Xf(ve),un.c(),un.m(lt,null)):un&&(un.d(1),un=null),(!Tt||ze[0]&256)&&gt!==(gt=ve[8].contactStage+"")&&se(Cn,gt),(!Tt||ze[0]&256)&&An!==(An=ve[8].comContact+"")&&se(Dn,An),ve[2]?Rt?(Rt.p(ve,ze),ze[0]&4&&K(Rt,1)):(Rt=Jf(ve),Rt.c(),K(Rt,1),Rt.m(Ve,Ae)):Rt&&(kt(),x(Rt,1,1,()=>{Rt=null}),Et()),ve[7]?Pt?(Pt.p(ve,ze),ze[0]&128&&K(Pt,1)):(Pt=Zf(ve),Pt.c(),K(Pt,1),Pt.m(Ve,null)):Pt&&(kt(),x(Pt,1,1,()=>{Pt=null}),Et()),ze[0]&16&&de(tt,ve[4]),ve[6]?Nt?(Nt.p(ve,ze),ze[0]&64&&K(Nt,1)):(Nt=ed(ve),Nt.c(),K(Nt,1),Nt.m(Ri.parentNode,Ri)):Nt&&(kt(),x(Nt,1,1,()=>{Nt=null}),Et())},i(ve){Tt||(K(Rt),K(Pt),K(Nt),Tt=!0)},o(ve){x(Rt),x(Pt),x(Nt),Tt=!1},d(ve){ve&&y(e),qe(cn,ve),un&&un.d(),Rt&&Rt.d(),Pt&&Pt.d(),ve&&y(Sa),Nt&&Nt.d(ve),ve&&y(Ri),Aa=!1,xe(su)}}}function xf(t){let e,n=t[45]+"",s,i,r,o;function a(){return t[25](t[45])}return{c(){e=p("p"),s=S(n),g(e,"value",i=t[45])},m(l,c){b(l,e,c),u(e,s),r||(o=[q(e,"mouseenter",a),q(e,"mouseout",t[12]),q(e,"dblclick",t[26])],r=!0)},p(l,c){t=l,c[0]&256&&n!==(n=t[45]+"")&&se(s,n),c[0]&256&&i!==(i=t[45])&&g(e,"value",i)},d(l){l&&y(e),r=!1,xe(o)}}}function Xf(t){let e,n=t[1][0].nameProperty+"",s,i,r,o,a;return{c(){e=p("h3"),s=S(n),i=w(),r=p("img"),g(e,"class","svelte-ce274g"),g(r,"class","imgPropContSelect"),g(r,"height","200"),ct(r.src,o=t[1][0].urlImage)||g(r,"src",o),g(r,"alt",a=t[1][0].claveEB)},m(l,c){b(l,e,c),u(e,s),b(l,i,c),b(l,r,c)},p(l,c){c[0]&2&&n!==(n=l[1][0].nameProperty+"")&&se(s,n),c[0]&2&&!ct(r.src,o=l[1][0].urlImage)&&g(r,"src",o),c[0]&2&&a!==(a=l[1][0].claveEB)&&g(r,"alt",a)},d(l){l&&y(e),l&&y(i),l&&y(r)}}}function Jf(t){let e,n;const s=[t[8]];let i={};for(let r=0;r<s.length;r+=1)i=Mt(i,s[r]);return e=new mI({props:i}),e.$on("closeIt",t[21]),{c(){ue(e.$$.fragment)},m(r,o){le(e,r,o),n=!0},p(r,o){const a=o[0]&256?gn(s,[Xn(r[8])]):{};e.$set(a)},i(r){n||(K(e.$$.fragment,r),n=!0)},o(r){x(e.$$.fragment,r),n=!1},d(r){ce(e,r)}}}function Zf(t){let e,n,s;function i(o){t[29](o)}let r={};return t[3]!==void 0&&(r.searchTerm=t[3]),e=new tu({props:r}),xn.push(()=>Vs(e,"searchTerm",i)),e.$on("input",t[15]),{c(){ue(e.$$.fragment)},m(o,a){le(e,o,a),s=!0},p(o,a){const l={};!n&&a[0]&8&&(n=!0,l.searchTerm=o[3],Fs(()=>n=!1)),e.$set(l)},i(o){s||(K(e.$$.fragment,o),s=!0)},o(o){x(e.$$.fragment,o),s=!1},d(o){ce(e,o)}}}function ed(t){let e,n,s,i=t[10].length+"",r,o,a,l,c=t[10],h=[];for(let m=0;m<c.length;m+=1)h[m]=td(Wf(t,c,m));const f=m=>x(h[m],1,1,()=>{h[m]=null});let d=t[10].length===0&&nd();return{c(){e=p("main"),n=p("h3"),s=S("Propiedades encontradas: "),r=S(i),o=w();for(let m=0;m<h.length;m+=1)h[m].c();a=w(),d&&d.c(),g(n,"class","svelte-ce274g"),g(e,"id","bookshelf"),g(e,"class","svelte-ce274g")},m(m,_){b(m,e,_),u(e,n),u(n,s),u(n,r),u(e,o);for(let v=0;v<h.length;v+=1)h[v].m(e,null);u(e,a),d&&d.m(e,null),l=!0},p(m,_){if((!l||_[0]&1024)&&i!==(i=m[10].length+"")&&se(r,i),_[0]&4195360){c=m[10];let v;for(v=0;v<c.length;v+=1){const k=Wf(m,c,v);h[v]?(h[v].p(k,_),K(h[v],1)):(h[v]=td(k),h[v].c(),K(h[v],1),h[v].m(e,a))}for(kt(),v=c.length;v<h.length;v+=1)f(v);Et()}m[10].length===0?d||(d=nd(),d.c(),d.m(e,null)):d&&(d.d(1),d=null)},i(m){if(!l){for(let _=0;_<c.length;_+=1)K(h[_]);l=!0}},o(m){h=h.filter(Boolean);for(let _=0;_<h.length;_+=1)x(h[_]);l=!1},d(m){m&&y(e),qe(h,m),d&&d.d()}}}function td(t){let e,n,s,i,r,o,a,l,c;const h=[t[42]];let f={};for(let d=0;d<h.length;d+=1)f=Mt(f,h[d]);return r=new g_({props:f}),{c(){e=p("section"),n=p("input"),i=w(),ue(r.$$.fragment),g(n,"type","checkbox"),n.__value=s=t[42].urlProp,n.value=n.__value,g(n,"class","form-check"),t[32][0].push(n),g(e,"class","property svelte-ce274g")},m(d,m){b(d,e,m),u(e,n),n.checked=~t[5].indexOf(n.__value),u(e,i),le(r,e,null),a=!0,l||(c=[q(n,"change",t[31]),q(e,"click",t[22])],l=!0)},p(d,m){t=d,(!a||m[0]&1024&&s!==(s=t[42].urlProp))&&(n.__value=s,n.value=n.__value),m[0]&32&&(n.checked=~t[5].indexOf(n.__value));const _=m[0]&1024?gn(h,[Xn(t[42])]):{};r.$set(_)},i(d){a||(K(r.$$.fragment,d),Xe(()=>{o||(o=dn(e,ki,{duration:500,easing:wi},!0)),o.run(1)}),a=!0)},o(d){x(r.$$.fragment,d),o||(o=dn(e,ki,{duration:500,easing:wi},!1)),o.run(0),a=!1},d(d){d&&y(e),t[32][0].splice(t[32][0].indexOf(n),1),ce(r),d&&o&&o.end(),l=!1,xe(c)}}}function nd(t){let e;return{c(){e=p("h3"),e.textContent='"No hay Propiedades para este contacto"',g(e,"class","svelte-ce274g")},m(n,s){b(n,e,s)},d(n){n&&y(e)}}}function FI(t){let e,n,s=t[9]==="contSelect"&&Yf(t);return{c(){e=p("main"),s&&s.c()},m(i,r){b(i,e,r),s&&s.m(e,null),n=!0},p(i,r){i[9]==="contSelect"?s?(s.p(i,r),r[0]&512&&K(s,1)):(s=Yf(i),s.c(),K(s,1),s.m(e,null)):s&&(kt(),x(s,1,1,()=>{s=null}),Et())},i(i){n||(K(s),n=!0)},o(i){x(s),n=!1},d(i){i&&y(e),s&&s.d()}}}function VI(t){window.open(t)}function BI(t,e,n){let s,i,r;Ue(t,Ze,D=>n(8,s=D)),Ue(t,it,D=>n(9,i=D)),Ue(t,Ml,D=>n(10,r=D));const o=Qs();let a=!1,l,c=!1,h,f,d=[],m=!1,_=!1;console.log(i);function v(D){n(0,a=!0),n(1,l=Ln.filter(re=>re.claveEB===D))}function k(){n(0,a=!1)}function E(){console.log("estas en addSchedule"),n(2,c=!0)}function I(){n(7,_=!0)}const M=()=>(n(6,m=!0),We(Ml,r=Ln.filter(D=>(D.nameProperty+" "+D.colonia+" "+D.claveEB).toLowerCase().includes(h.toLowerCase())),r));function A(D){vI(D),n(6,m=!0)}const j=()=>{We(Ze,s=[],s),We(it,i="start",i)};function L(){}function F(){We(it,i="contEditing",i)}async function H(){confirm("Deseas eleiminar definitivamente al contacto?")&&(await Ea(ns(It,"contacts",s.id)),O(s),o("/"))}async function O(D){let re=`Se le elimin\xF3a: ${D.name} ${D.lastname} del ${D.telephon}`,ae={date:Date.now(),comment:re};console.log(i,ae);const Se=Tn(It,"binnacles");await $s(Se,ae)}function U(){n(2,c=!1)}function $(){console.log(d)}function z(){console.log(d);let D=`https://api.whatsapp.com/send?phone=52${s.telephon}&text=${d}`;window.open(D),m_()}function W(){console.log(d)}const Z=[[]],Q=D=>v(D),G=()=>VI(l[0].urlProp),X=()=>E(),Y=()=>A(s);function C(D){h=D,n(3,h)}function P(){f=this.value,n(4,f)}function N(){d=Bt(Z[0],this.__value,this.checked),n(5,d)}return[a,l,c,h,f,d,m,_,s,i,r,v,k,E,I,M,A,j,L,F,H,U,$,z,W,Q,G,X,Y,C,P,N,Z]}class jI extends Ye{constructor(e){super(),Qe(this,e,BI,FI,He,{},null,[-1,-1])}}function sd(t,e,n){const s=t.slice();return s[22]=e[n],s[24]=n,s}function id(t,e,n){const s=t.slice();return s[24]=e[n],s}function rd(t,e,n){const s=t.slice();return s[12]=e[n],s[24]=n,s}function od(t){let e,n,s,i,r,o,a,l,c,h,f,d,m,_,v,k,E,I,M,A,j,L,F;function H(C){t[14](C)}let O={};t[3]!==void 0&&(O.searchTerm=t[3]),r=new tu({props:O}),xn.push(()=>Vs(r,"searchTerm",H)),r.$on("input",t[11]);let U=t[1],$=[];for(let C=0;C<U.length;C+=1)$[C]=ld(rd(t,U,C));const z=C=>x($[C],1,1,()=>{$[C]=null});let W=t[0]>1&&cd(t),Z=[3,2,1],Q=[];for(let C=0;C<3;C+=1)Q[C]=hd(id(t,Z,C));let G=Array(3),X=[];for(let C=0;C<G.length;C+=1)X[C]=dd(sd(t,G,C));let Y=t[0]<t[5]&&pd(t);return{c(){e=p("h2"),e.textContent=`${fr.length} Contactos a Mostrar`,n=w(),s=p("button"),s.textContent="Alta de Contacto",i=w(),ue(r.$$.fragment),a=w(),l=p("div"),c=p("main");for(let C=0;C<$.length;C+=1)$[C].c();h=w(),f=p("div"),d=p("div"),m=p("ul"),W&&W.c(),_=w();for(let C=0;C<3;C+=1)Q[C].c();v=w(),k=p("li"),E=p("span"),I=S(t[0]),M=w();for(let C=0;C<X.length;C+=1)X[C].c();A=w(),Y&&Y.c(),g(s,"class","altaContacto svelte-152vhxc"),g(c,"id","bookshelf"),g(m,"class","pagi__options"),g(d,"class","pagi__Item"),g(f,"class","container pagination"),g(l,"class","mosPag container cont__card svelte-152vhxc")},m(C,P){b(C,e,P),b(C,n,P),b(C,s,P),b(C,i,P),le(r,C,P),b(C,a,P),b(C,l,P),u(l,c);for(let N=0;N<$.length;N+=1)$[N].m(c,null);u(l,h),u(l,f),u(f,d),u(d,m),W&&W.m(m,null),u(m,_);for(let N=0;N<3;N+=1)Q[N].m(m,null);u(m,v),u(m,k),u(k,E),u(E,I),u(m,M);for(let N=0;N<X.length;N+=1)X[N].m(m,null);u(m,A),Y&&Y.m(m,null),j=!0,L||(F=q(s,"click",t[9]),L=!0)},p(C,P){const N={};if(!o&&P&8&&(o=!0,N.searchTerm=C[3],Fs(()=>o=!1)),r.$set(N),P&1046){U=C[1];let D;for(D=0;D<U.length;D+=1){const re=rd(C,U,D);$[D]?($[D].p(re,P),K($[D],1)):($[D]=ld(re),$[D].c(),K($[D],1),$[D].m(c,null))}for(kt(),D=U.length;D<$.length;D+=1)z(D);Et()}if(C[0]>1?W?W.p(C,P):(W=cd(C),W.c(),W.m(m,_)):W&&(W.d(1),W=null),P&257){Z=[3,2,1];let D;for(D=0;D<3;D+=1){const re=id(C,Z,D);Q[D]?Q[D].p(re,P):(Q[D]=hd(re),Q[D].c(),Q[D].m(m,v))}for(;D<3;D+=1)Q[D].d(1)}if((!j||P&1)&&se(I,C[0]),P&289){G=Array(3);let D;for(D=0;D<G.length;D+=1){const re=sd(C,G,D);X[D]?X[D].p(re,P):(X[D]=dd(re),X[D].c(),X[D].m(m,A))}for(;D<X.length;D+=1)X[D].d(1);X.length=G.length}C[0]<C[5]?Y?Y.p(C,P):(Y=pd(C),Y.c(),Y.m(m,null)):Y&&(Y.d(1),Y=null)},i(C){if(!j){K(r.$$.fragment,C);for(let P=0;P<U.length;P+=1)K($[P]);j=!0}},o(C){x(r.$$.fragment,C),$=$.filter(Boolean);for(let P=0;P<$.length;P+=1)x($[P]);j=!1},d(C){C&&y(e),C&&y(n),C&&y(s),C&&y(i),ce(r,C),C&&y(a),C&&y(l),qe($,C),W&&W.d(),qe(Q,C),qe(X,C),Y&&Y.d(),L=!1,F()}}}function ad(t){let e,n,s,i,r,o,a;const l=[t[12]];let c={};for(let f=0;f<l.length;f+=1)c=Mt(c,l[f]);n=new uI({props:c});function h(){return t[15](t[12])}return{c(){e=p("div"),ue(n.$$.fragment),s=w(),g(e,"class","selecContact")},m(f,d){b(f,e,d),le(n,e,null),u(e,s),r=!0,o||(a=q(e,"click",h),o=!0)},p(f,d){t=f;const m=d&2?gn(l,[Xn(t[12])]):{};n.$set(m)},i(f){r||(K(n.$$.fragment,f),Xe(()=>{i||(i=dn(e,ki,{duration:500,easing:wi},!0)),i.run(1)}),r=!0)},o(f){x(n.$$.fragment,f),i||(i=dn(e,ki,{duration:500,easing:wi},!1)),i.run(0),r=!1},d(f){f&&y(e),ce(n),f&&i&&i.end(),o=!1,a()}}}function ld(t){let e,n,s=t[24]>=t[4]&&t[24]<t[2]&&ad(t);return{c(){s&&s.c(),e=sn()},m(i,r){s&&s.m(i,r),b(i,e,r),n=!0},p(i,r){i[24]>=i[4]&&i[24]<i[2]?s?(s.p(i,r),r&20&&K(s,1)):(s=ad(i),s.c(),K(s,1),s.m(e.parentNode,e)):s&&(kt(),x(s,1,1,()=>{s=null}),Et())},i(i){n||(K(s),n=!0)},o(i){x(s),n=!1},d(i){s&&s.d(i),i&&y(e)}}}function cd(t){let e,n,s,i,r,o,a,l,c;return{c(){e=p("li"),n=p("a"),n.textContent="first",s=w(),i=p("li"),r=p("a"),o=S("previous"),g(n,"href","/blog"),g(r,"href",a="/blog/"+(t[0]-1))},m(h,f){b(h,e,f),u(e,n),b(h,s,f),b(h,i,f),u(i,r),u(r,o),l||(c=[q(n,"click",mn(t[16])),q(r,"click",mn(t[17]))],l=!0)},p(h,f){f&1&&a!==(a="/blog/"+(h[0]-1))&&g(r,"href",a)},d(h){h&&y(e),h&&y(s),h&&y(i),l=!1,xe(c)}}}function ud(t){let e,n,s=t[0]-t[24]+"",i,r,o,a;function l(){return t[18](t[24])}return{c(){e=p("li"),n=p("a"),i=S(s),g(n,"href",r="/blog/"+(t[0]-t[24]))},m(c,h){b(c,e,h),u(e,n),u(n,i),o||(a=q(n,"click",mn(l)),o=!0)},p(c,h){t=c,h&1&&s!==(s=t[0]-t[24]+"")&&se(i,s),h&1&&r!==(r="/blog/"+(t[0]-t[24]))&&g(n,"href",r)},d(c){c&&y(e),o=!1,a()}}}function hd(t){let e,n=t[0]-t[24]>0&&ud(t);return{c(){n&&n.c(),e=sn()},m(s,i){n&&n.m(s,i),b(s,e,i)},p(s,i){s[0]-s[24]>0?n?n.p(s,i):(n=ud(s),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(s){n&&n.d(s),s&&y(e)}}}function fd(t){let e,n,s=t[0]+(t[24]+1)+"",i,r,o,a;function l(){return t[19](t[24])}return{c(){e=p("li"),n=p("a"),i=S(s),g(n,"href",r="/blog/"+(t[0]+(t[24]+1)))},m(c,h){b(c,e,h),u(e,n),u(n,i),o||(a=q(n,"click",mn(l)),o=!0)},p(c,h){t=c,h&1&&s!==(s=t[0]+(t[24]+1)+"")&&se(i,s),h&1&&r!==(r="/blog/"+(t[0]+(t[24]+1)))&&g(n,"href",r)},d(c){c&&y(e),o=!1,a()}}}function dd(t){let e,n=t[0]+(t[24]+1)<=t[5]&&fd(t);return{c(){n&&n.c(),e=sn()},m(s,i){n&&n.m(s,i),b(s,e,i)},p(s,i){s[0]+(s[24]+1)<=s[5]?n?n.p(s,i):(n=fd(s),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(s){n&&n.d(s),s&&y(e)}}}function pd(t){let e,n,s,i,r,o,a,l,c,h,f;return{c(){e=p("li"),n=p("a"),s=S("next"),r=w(),o=p("li"),a=p("a"),l=S("last"),g(n,"href",i="/blog/"+(t[0]+1)),g(a,"href",c="/blog/"+t[5])},m(d,m){b(d,e,m),u(e,n),u(n,s),b(d,r,m),b(d,o,m),u(o,a),u(a,l),h||(f=[q(n,"click",mn(t[20])),q(a,"click",mn(t[21]))],h=!0)},p(d,m){m&1&&i!==(i="/blog/"+(d[0]+1))&&g(n,"href",i),m&32&&c!==(c="/blog/"+d[5])&&g(a,"href",c)},d(d){d&&y(e),d&&y(r),d&&y(o),h=!1,xe(f)}}}function md(t){let e,n,s;return n=new jI({props:{$contact:t[7]}}),{c(){e=p("div"),ue(n.$$.fragment)},m(i,r){b(i,e,r),le(n,e,null),s=!0},p(i,r){const o={};r&128&&(o.$contact=i[7]),n.$set(o)},i(i){s||(K(n.$$.fragment,i),s=!0)},o(i){x(n.$$.fragment,i),s=!1},d(i){i&&y(e),ce(n)}}}function gd(t){let e,n,s,i;const r=[t[7]];let o={};for(let a=0;a<r.length;a+=1)o=Mt(o,r[a]);return s=new UI({props:o}),{c(){e=p("div"),n=p("div"),ue(s.$$.fragment),g(n,"class","container")},m(a,l){b(a,e,l),u(e,n),le(s,n,null),i=!0},p(a,l){const c=l&128?gn(r,[Xn(a[7])]):{};s.$set(c)},i(a){i||(K(s.$$.fragment,a),i=!0)},o(a){x(s.$$.fragment,a),i=!1},d(a){a&&y(e),ce(s)}}}function qI(t){let e,n,s,i,r,o,a,l,c,h,f=t[6]==="start"&&od(t),d=t[6]==="contSelect"&&md(t),m=(t[6]==="contEditing"||t[6]==="contAdding")&&gd(t);return{c(){e=p("main"),n=p("div"),s=p("h1"),s.textContent="Contactos",i=w(),r=p("img"),a=w(),f&&f.c(),l=w(),d&&d.c(),c=w(),m&&m.c(),ct(r.src,o=d_)||g(r,"src",o),g(r,"alt","contactos"),g(r,"class","svelte-152vhxc"),g(e,"class","container")},m(_,v){b(_,e,v),u(e,n),u(n,s),u(n,i),u(n,r),u(e,a),f&&f.m(e,null),u(e,l),d&&d.m(e,null),u(e,c),m&&m.m(e,null),h=!0},p(_,[v]){_[6]==="start"?f?(f.p(_,v),v&64&&K(f,1)):(f=od(_),f.c(),K(f,1),f.m(e,l)):f&&(kt(),x(f,1,1,()=>{f=null}),Et()),_[6]==="contSelect"?d?(d.p(_,v),v&64&&K(d,1)):(d=md(_),d.c(),K(d,1),d.m(e,c)):d&&(kt(),x(d,1,1,()=>{d=null}),Et()),_[6]==="contEditing"||_[6]==="contAdding"?m?(m.p(_,v),v&64&&K(m,1)):(m=gd(_),m.c(),K(m,1),m.m(e,null)):m&&(kt(),x(m,1,1,()=>{m=null}),Et())},i(_){h||(K(f),K(d),K(m),h=!0)},o(_){x(f),x(d),x(m),h=!1},d(_){_&&y(e),f&&f.d(),d&&d.d(),m&&m.d()}}}let el=15;function HI(t,e,n){let s,i,r,o,a,l;Ue(t,it,O=>n(6,a=O)),Ue(t,Ze,O=>n(7,l=O));let c;We(it,a="start",a);let h,f=1,d=[];const m=O=>{n(0,f=O)},_=()=>{We(it,a="contAdding",a)},v=O=>{n(3,c=""),We(Ze,l=O,l),We(it,a="contSelect",a)};function k(){return n(1,d=fr.filter(O=>(O.name+" "+O.lastname).toLowerCase().includes(c.toLowerCase())))}n(1,d=fr.sort((O,U)=>O.createdAt<U.createdAt?1:O.createdAt>U.createdAt?-1:0));function E(O){c=O,n(3,c)}const I=O=>v(O),M=()=>m(1),A=()=>m(f-1),j=O=>m(f-O),L=O=>m(f+(O+1)),F=()=>m(f+1),H=()=>m(i);return t.$$.update=()=>{t.$$.dirty&2&&n(13,s=d.length),t.$$.dirty&8192&&n(5,i=Math.ceil(s/el)),t.$$.dirty&1&&n(2,r=f*el),t.$$.dirty&4&&n(4,o=r-el)},[f,d,r,c,o,i,a,l,m,_,v,k,h,s,E,I,M,A,j,L,F,H]}class KI extends Ye{constructor(e){super(),Qe(this,e,HI,qI,He,{})}}let as=[],ls=[];function zI(t,e){e=e.filter(n=>n.selecTP===t.selectTP),t.numBeds>0&&(e=e.filter(n=>n.numBeds>=t.beds)),t.numBaths>0&&(e=e.filter(n=>n.numBaths>=t.bathroom)),t.numParks>0&&(e=e.filter(n=>n.numPark>=t.parks));try{e=e.filter(n=>{n.budget?as=e.filter(s=>s.budget>=t.price*.7&&s.budget<=t.price*1.1):ls=e.filter(s=>s.rangeProp===__(t.price))})}catch(n){console.log(n)}e=ls.concat(as),as=[],ls=[];try{e.filter(n=>{n.locaProperty.length>0?(as=e.filter(s=>t.locaProperty.some(i=>s.locaProperty.includes(i))),console.log(t.locaProperty)):(ls=e.filter(s=>s.locaProperty.length===0),console.log(t.locaProperty))})}catch(n){console.log(n)}e=ls.concat(as),as=[],ls=[];try{e=e.filter(n=>{n.tagsProperty.length>0?as=e.filter(s=>t.tagsProperty.some(i=>s.tagsProperty.includes(i))):ls=e.filter(s=>s.tagsProperty.length===0)})}catch(n){console.log(n)}return e=ls.concat(as),console.log(e),Mg.set(e)}function _d(t,e,n){const s=t.slice();return s[16]=e[n],s}function vd(t){let e,n=t[2],s=[];for(let i=0;i<n.length;i+=1)s[i]=yd(_d(t,n,i));return{c(){for(let i=0;i<s.length;i+=1)s[i].c();e=sn()},m(i,r){for(let o=0;o<s.length;o+=1)s[o].m(i,r);b(i,e,r)},p(i,r){if(r&4){n=i[2];let o;for(o=0;o<n.length;o+=1){const a=_d(i,n,o);s[o]?s[o].p(a,r):(s[o]=yd(a),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(i){qe(s,i),i&&y(e)}}}function yd(t){let e,n,s,i,r=t[16].name+"",o,a,l=t[16].lastname+"",c,h,f,d=t[16].locaProperty+"",m,_,v,k=t[16].tagsProperty+"",E,I,M,A=t[16].budget+"",j,L,F,H=t[16].rangeProp+"",O,U;return{c(){e=p("div"),n=p("input"),s=w(),i=p("div"),o=S(r),a=w(),c=S(l),h=w(),f=p("div"),m=S(d),_=w(),v=p("div"),E=S(k),I=w(),M=p("div"),j=S(A),L=w(),F=p("div"),O=S(H),U=w(),g(n,"type","checkbox"),g(e,"class","conInt svelte-1s75tnf")},m($,z){b($,e,z),u(e,n),u(e,s),u(e,i),u(i,o),u(i,a),u(i,c),u(e,h),u(e,f),u(f,m),u(e,_),u(e,v),u(v,E),u(e,I),u(e,M),u(M,j),u(e,L),u(e,F),u(F,O),u(e,U)},p($,z){z&4&&r!==(r=$[16].name+"")&&se(o,r),z&4&&l!==(l=$[16].lastname+"")&&se(c,l),z&4&&d!==(d=$[16].locaProperty+"")&&se(m,d),z&4&&k!==(k=$[16].tagsProperty+"")&&se(E,k),z&4&&A!==(A=$[16].budget+"")&&se(j,A),z&4&&H!==(H=$[16].rangeProp+"")&&se(O,H)},d($){$&&y(e)}}}function GI(t){let e,n,s,i,r,o,a,l,c,h=t[1].claveEB+"",f,d,m=t[1].nameProperty+"",_,v,k,E=t[1].selecTP+"",I,M,A=t[1].colonia+"",j,L,F=t[1].locaProperty+"",H,O,U,$,z,W=t[1].price+"",Z,Q,G,X,Y=t[1].beds+"",C,P,N=t[1].bathroom+"",D,re,ae=t[1].halfBathroom+"",Se,me,at,ge,Pe=t[1].areaBuilding+"",Ne,dt,V=t[1].areaTotal+"",ie,Ke,Dt,Le,ht=t[1].description+"",Fe,rn,ft,pt,Ut,R,oe,_e,rt,B,we,mt,on,lt,Vn,an,gt,Cn,Sn,ln,An,Dn,Zt,Ve,en,Be=t[0]&&vd(t);return{c(){e=p("div"),n=p("div"),s=p("div"),i=p("img"),a=w(),l=p("div"),c=p("h4"),f=S(h),d=w(),_=S(m),v=w(),k=p("h5"),I=S(E),M=S(" en Col. "),j=S(A),L=S(" al "),H=S(F),O=S(" de la ciudad."),U=w(),$=p("h6"),z=S("Precio: "),Z=S(W),Q=w(),G=p("div"),X=p("h6"),C=S(Y),P=S(" Recamaras, "),D=S(N),re=S(" Ba\xF1os y "),Se=S(ae),me=S(" Medio Ba\xF1o"),at=w(),ge=p("h6"),Ne=S(Pe),dt=S(" m2 de construcci\xF3n y "),ie=S(V),Ke=S(" m2 de terreno"),Dt=w(),Le=p("p"),Fe=S(ht),rn=w(),ft=p("div"),pt=p("a"),Ut=S("Seguir Link en Otra Ventana"),oe=w(),_e=p("div"),rt=p("button"),rt.textContent="Enviar por WhatsApp",B=w(),we=p("button"),we.textContent="Buscar Interesados",mt=w(),on=p("div"),lt=p("button"),lt.textContent="Regresar",Vn=w(),an=p("div"),gt=p("img"),Sn=w(),ln=p("img"),Dn=w(),Be&&Be.c(),Zt=sn(),ct(i.src,r=t[1].urlImage)||g(i,"src",r),g(i,"alt",o=t[1].nameProperty),g(s,"class","selectImage svelte-1s75tnf"),g(Le,"class","descSelec"),g(l,"class","descSelect"),g(pt,"href",R=t[1].urlProp),g(pt,"target","_blank"),g(ft,"class","folowLink"),g(rt,"class","btnCommon btnWhatsApp"),g(we,"class","btnCommon"),g(_e,"class","optionsSend"),g(lt,"class","btnCommon btnCancel"),g(on,"class","backAnt"),ct(gt.src,Cn=w_)||g(gt,"src",Cn),g(gt,"alt","delete"),ct(ln.src,An=b_)||g(ln,"src",An),g(ln,"alt","delete"),g(an,"class","icon__Content"),g(n,"class","sele__info svelte-1s75tnf"),g(e,"class","sele__Product svelte-1s75tnf")},m(Ae,Ie){b(Ae,e,Ie),u(e,n),u(n,s),u(s,i),u(n,a),u(n,l),u(l,c),u(c,f),u(c,d),u(c,_),u(l,v),u(l,k),u(k,I),u(k,M),u(k,j),u(k,L),u(k,H),u(k,O),u(l,U),u(l,$),u($,z),u($,Z),u(l,Q),u(l,G),u(G,X),u(X,C),u(X,P),u(X,D),u(X,re),u(X,Se),u(X,me),u(l,at),u(l,ge),u(ge,Ne),u(ge,dt),u(ge,ie),u(ge,Ke),u(l,Dt),u(l,Le),u(Le,Fe),u(n,rn),u(n,ft),u(ft,pt),u(pt,Ut),u(n,oe),u(n,_e),u(_e,rt),u(_e,B),u(_e,we),u(n,mt),u(n,on),u(on,lt),u(n,Vn),u(n,an),u(an,gt),u(an,Sn),u(an,ln),b(Ae,Dn,Ie),Be&&Be.m(Ae,Ie),b(Ae,Zt,Ie),Ve||(en=[q(rt,"click",t[8]),q(we,"click",t[6]),q(lt,"click",t[7]),q(gt,"click",t[4]),q(ln,"click",t[5])],Ve=!0)},p(Ae,[Ie]){Ie&2&&!ct(i.src,r=Ae[1].urlImage)&&g(i,"src",r),Ie&2&&o!==(o=Ae[1].nameProperty)&&g(i,"alt",o),Ie&2&&h!==(h=Ae[1].claveEB+"")&&se(f,h),Ie&2&&m!==(m=Ae[1].nameProperty+"")&&se(_,m),Ie&2&&E!==(E=Ae[1].selecTP+"")&&se(I,E),Ie&2&&A!==(A=Ae[1].colonia+"")&&se(j,A),Ie&2&&F!==(F=Ae[1].locaProperty+"")&&se(H,F),Ie&2&&W!==(W=Ae[1].price+"")&&se(Z,W),Ie&2&&Y!==(Y=Ae[1].beds+"")&&se(C,Y),Ie&2&&N!==(N=Ae[1].bathroom+"")&&se(D,N),Ie&2&&ae!==(ae=Ae[1].halfBathroom+"")&&se(Se,ae),Ie&2&&Pe!==(Pe=Ae[1].areaBuilding+"")&&se(Ne,Pe),Ie&2&&V!==(V=Ae[1].areaTotal+"")&&se(ie,V),Ie&2&&ht!==(ht=Ae[1].description+"")&&se(Fe,ht),Ie&2&&R!==(R=Ae[1].urlProp)&&g(pt,"href",R),Ae[0]?Be?Be.p(Ae,Ie):(Be=vd(Ae),Be.c(),Be.m(Zt.parentNode,Zt)):Be&&(Be.d(1),Be=null)},i:he,o:he,d(Ae){Ae&&y(e),Ae&&y(Dn),Be&&Be.d(Ae),Ae&&y(Zt),Ve=!1,xe(en)}}}function WI(t,e,n){let s,i,r;Ue(t,it,m=>n(10,s=m)),Ue(t,Je,m=>n(1,i=m)),Ue(t,Mg,m=>n(2,r=m)),Qs();let o=[],a=!1;function l(){console.log("propEditing"),We(it,s="propEditing",s),console.log("propEditing")}async function c(){confirm("Deseas eleiminar definitivamente la propiedad?")&&(console.log("Borraste al propiedad"),await Ea(ns(It,"properties",i.id)),We(it,s="start",s))}function h(){zI(i,fr),n(0,a=!0)}function f(){We(Je,i=[],i),We(it,s="start",s)}return[a,i,r,o,l,c,h,f,()=>void 0]}class QI extends Ye{constructor(e){super(),Qe(this,e,WI,GI,He,{})}}function YI(t){let e;return{c(){e=S("Editar")},m(n,s){b(n,e,s)},d(n){n&&y(e)}}}function xI(t){let e;return{c(){e=S("Guardar")},m(n,s){b(n,e,s)},d(n){n&&y(e)}}}function XI(t){let e,n,s,i,r,o,a,l,c,h,f,d,m,_,v,k;l=new NI({});function E(A,j){return A[0]==="propAdding"?xI:YI}let I=E(t),M=I(t);return{c(){e=p("form"),n=p("div"),s=p("div"),i=p("img"),a=w(),ue(l.$$.fragment),c=w(),h=p("div"),f=p("button"),M.c(),d=w(),m=p("button"),m.textContent="Cancel",ct(i.src,r=t[1].urlImage)||g(i,"src",r),g(i,"alt",o=t[1].nameProperty),g(i,"class","svelte-166hnhc"),g(f,"class","btn-save"),g(m,"class","btn-cancel"),g(h,"class","contSavCan svelte-166hnhc"),g(n,"class","altaContactos"),g(e,"class","propiedad")},m(A,j){b(A,e,j),u(e,n),u(n,s),u(s,i),u(s,a),le(l,s,null),u(n,c),u(n,h),u(h,f),M.m(f,null),u(h,d),u(h,m),_=!0,v||(k=[q(m,"click",t[3]),q(e,"submit",mn(t[2]))],v=!0)},p(A,[j]){(!_||j&2&&!ct(i.src,r=A[1].urlImage))&&g(i,"src",r),(!_||j&2&&o!==(o=A[1].nameProperty))&&g(i,"alt",o),I!==(I=E(A))&&(M.d(1),M=I(A),M&&(M.c(),M.m(f,null)))},i(A){_||(K(l.$$.fragment,A),_=!0)},o(A){x(l.$$.fragment,A),_=!1},d(A){A&&y(e),ce(l),M.d(),v=!1,xe(k)}}}function JI(t,e,n){let s,i;Ue(t,it,c=>n(0,s=c)),Ue(t,Je,c=>n(1,i=c));let r=0;const o=Qs();async function a(){if(console.log("Estas en add property",s,i),s==="propEditing")console.log("estas dentro de edit property",i.id),await ka(ns(It,"properties",i.id),i);else{r=Date.now(),We(Je,i={...i,createdAt:r},i),console.log(i);const c=Tn(It,"properties");await $s(c,i)}We(it,s="start",s)}return[s,i,a,()=>{o("./")}]}class k_ extends Ye{constructor(e){super(),Qe(this,e,JI,XI,He,{})}}function bd(t,e,n){const s=t.slice();return s[23]=e[n],s[25]=n,s}function wd(t,e,n){const s=t.slice();return s[25]=e[n],s}function kd(t,e,n){const s=t.slice();return s[12]=e[n],s[25]=n,s}function Ed(t){let e,n,s,i,r,o,a,l,c,h,f,d,m,_,v,k,E,I,M,A,j,L,F;function H(C){t[14](C)}let O={};t[3]!==void 0&&(O.searchTerm=t[3]),r=new tu({props:O}),xn.push(()=>Vs(r,"searchTerm",H)),r.$on("input",t[11]);let U=t[1],$=[];for(let C=0;C<U.length;C+=1)$[C]=Id(kd(t,U,C));const z=C=>x($[C],1,1,()=>{$[C]=null});let W=t[0]>1&&Cd(t),Z=[3,2,1],Q=[];for(let C=0;C<3;C+=1)Q[C]=Ad(wd(t,Z,C));let G=Array(3),X=[];for(let C=0;C<G.length;C+=1)X[C]=Rd(bd(t,G,C));let Y=t[0]<t[5]&&Pd(t);return{c(){e=p("h2"),e.textContent=`${Ln.length} Propiedades a Mostrar`,n=w(),s=p("button"),s.textContent="Alta de Propiedad",i=w(),ue(r.$$.fragment),a=w(),l=p("div"),c=p("main");for(let C=0;C<$.length;C+=1)$[C].c();h=w(),f=p("div"),d=p("div"),m=p("ul"),W&&W.c(),_=w();for(let C=0;C<3;C+=1)Q[C].c();v=w(),k=p("li"),E=p("span"),I=S(t[0]),M=w();for(let C=0;C<X.length;C+=1)X[C].c();A=w(),Y&&Y.c(),g(c,"id","bookshelf"),g(c,"class","svelte-elvgtg"),g(m,"class","pagi__options"),g(d,"class","pagi__Item"),g(f,"class","container pagination"),g(l,"class","mosPag")},m(C,P){b(C,e,P),b(C,n,P),b(C,s,P),b(C,i,P),le(r,C,P),b(C,a,P),b(C,l,P),u(l,c);for(let N=0;N<$.length;N+=1)$[N].m(c,null);u(l,h),u(l,f),u(f,d),u(d,m),W&&W.m(m,null),u(m,_);for(let N=0;N<3;N+=1)Q[N].m(m,null);u(m,v),u(m,k),u(k,E),u(E,I),u(m,M);for(let N=0;N<X.length;N+=1)X[N].m(m,null);u(m,A),Y&&Y.m(m,null),j=!0,L||(F=q(s,"click",t[10]),L=!0)},p(C,P){const N={};if(!o&&P&8&&(o=!0,N.searchTerm=C[3],Fs(()=>o=!1)),r.$set(N),P&534){U=C[1];let D;for(D=0;D<U.length;D+=1){const re=kd(C,U,D);$[D]?($[D].p(re,P),K($[D],1)):($[D]=Id(re),$[D].c(),K($[D],1),$[D].m(c,null))}for(kt(),D=U.length;D<$.length;D+=1)z(D);Et()}if(C[0]>1?W?W.p(C,P):(W=Cd(C),W.c(),W.m(m,_)):W&&(W.d(1),W=null),P&257){Z=[3,2,1];let D;for(D=0;D<3;D+=1){const re=wd(C,Z,D);Q[D]?Q[D].p(re,P):(Q[D]=Ad(re),Q[D].c(),Q[D].m(m,v))}for(;D<3;D+=1)Q[D].d(1)}if((!j||P&1)&&se(I,C[0]),P&289){G=Array(3);let D;for(D=0;D<G.length;D+=1){const re=bd(C,G,D);X[D]?X[D].p(re,P):(X[D]=Rd(re),X[D].c(),X[D].m(m,A))}for(;D<X.length;D+=1)X[D].d(1);X.length=G.length}C[0]<C[5]?Y?Y.p(C,P):(Y=Pd(C),Y.c(),Y.m(m,null)):Y&&(Y.d(1),Y=null)},i(C){if(!j){K(r.$$.fragment,C);for(let P=0;P<U.length;P+=1)K($[P]);j=!0}},o(C){x(r.$$.fragment,C),$=$.filter(Boolean);for(let P=0;P<$.length;P+=1)x($[P]);j=!1},d(C){C&&y(e),C&&y(n),C&&y(s),C&&y(i),ce(r,C),C&&y(a),C&&y(l),qe($,C),W&&W.d(),qe(Q,C),qe(X,C),Y&&Y.d(),L=!1,F()}}}function Td(t){let e,n,s,i,r,o,a;const l=[t[12]];let c={};for(let f=0;f<l.length;f+=1)c=Mt(c,l[f]);n=new g_({props:c});function h(){return t[15](t[12])}return{c(){e=p("section"),ue(n.$$.fragment),s=w(),g(e,"class","property svelte-elvgtg")},m(f,d){b(f,e,d),le(n,e,null),u(e,s),r=!0,o||(a=q(e,"click",h),o=!0)},p(f,d){t=f;const m=d&2?gn(l,[Xn(t[12])]):{};n.$set(m)},i(f){r||(K(n.$$.fragment,f),Xe(()=>{i||(i=dn(e,ki,{duration:500,easing:wi},!0)),i.run(1)}),r=!0)},o(f){x(n.$$.fragment,f),i||(i=dn(e,ki,{duration:500,easing:wi},!1)),i.run(0),r=!1},d(f){f&&y(e),ce(n),f&&i&&i.end(),o=!1,a()}}}function Id(t){let e,n,s=t[25]>=t[4]&&t[25]<t[2]&&Td(t);return{c(){s&&s.c(),e=sn()},m(i,r){s&&s.m(i,r),b(i,e,r),n=!0},p(i,r){i[25]>=i[4]&&i[25]<i[2]?s?(s.p(i,r),r&20&&K(s,1)):(s=Td(i),s.c(),K(s,1),s.m(e.parentNode,e)):s&&(kt(),x(s,1,1,()=>{s=null}),Et())},i(i){n||(K(s),n=!0)},o(i){x(s),n=!1},d(i){s&&s.d(i),i&&y(e)}}}function Cd(t){let e,n,s,i,r,o,a,l,c;return{c(){e=p("li"),n=p("a"),n.textContent="first",s=w(),i=p("li"),r=p("a"),o=S("previous"),g(n,"href","/blog"),g(r,"href",a="/blog/"+(t[0]-1))},m(h,f){b(h,e,f),u(e,n),b(h,s,f),b(h,i,f),u(i,r),u(r,o),l||(c=[q(n,"click",mn(t[16])),q(r,"click",mn(t[17]))],l=!0)},p(h,f){f&1&&a!==(a="/blog/"+(h[0]-1))&&g(r,"href",a)},d(h){h&&y(e),h&&y(s),h&&y(i),l=!1,xe(c)}}}function Sd(t){let e,n,s=t[0]-t[25]+"",i,r,o,a;function l(){return t[18](t[25])}return{c(){e=p("li"),n=p("a"),i=S(s),g(n,"href",r="/blog/"+(t[0]-t[25]))},m(c,h){b(c,e,h),u(e,n),u(n,i),o||(a=q(n,"click",mn(l)),o=!0)},p(c,h){t=c,h&1&&s!==(s=t[0]-t[25]+"")&&se(i,s),h&1&&r!==(r="/blog/"+(t[0]-t[25]))&&g(n,"href",r)},d(c){c&&y(e),o=!1,a()}}}function Ad(t){let e,n=t[0]-t[25]>0&&Sd(t);return{c(){n&&n.c(),e=sn()},m(s,i){n&&n.m(s,i),b(s,e,i)},p(s,i){s[0]-s[25]>0?n?n.p(s,i):(n=Sd(s),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(s){n&&n.d(s),s&&y(e)}}}function Dd(t){let e,n,s=t[0]+(t[25]+1)+"",i,r,o,a;function l(){return t[19](t[25])}return{c(){e=p("li"),n=p("a"),i=S(s),g(n,"href",r="/blog/"+(t[0]+(t[25]+1)))},m(c,h){b(c,e,h),u(e,n),u(n,i),o||(a=q(n,"click",mn(l)),o=!0)},p(c,h){t=c,h&1&&s!==(s=t[0]+(t[25]+1)+"")&&se(i,s),h&1&&r!==(r="/blog/"+(t[0]+(t[25]+1)))&&g(n,"href",r)},d(c){c&&y(e),o=!1,a()}}}function Rd(t){let e,n=t[0]+(t[25]+1)<=t[5]&&Dd(t);return{c(){n&&n.c(),e=sn()},m(s,i){n&&n.m(s,i),b(s,e,i)},p(s,i){s[0]+(s[25]+1)<=s[5]?n?n.p(s,i):(n=Dd(s),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(s){n&&n.d(s),s&&y(e)}}}function Pd(t){let e,n,s,i,r,o,a,l,c,h,f;return{c(){e=p("li"),n=p("a"),s=S("next"),r=w(),o=p("li"),a=p("a"),l=S("last"),g(n,"href",i="/blog/"+(t[0]+1)),g(a,"href",c="/blog/"+t[5])},m(d,m){b(d,e,m),u(e,n),u(n,s),b(d,r,m),b(d,o,m),u(o,a),u(a,l),h||(f=[q(n,"click",mn(t[20])),q(a,"click",mn(t[21]))],h=!0)},p(d,m){m&1&&i!==(i="/blog/"+(d[0]+1))&&g(n,"href",i),m&32&&c!==(c="/blog/"+d[5])&&g(a,"href",c)},d(d){d&&y(e),d&&y(r),d&&y(o),h=!1,xe(f)}}}function Nd(t){let e,n,s;const i=[t[7]];let r={};for(let o=0;o<i.length;o+=1)r=Mt(r,i[o]);return n=new QI({props:r}),{c(){e=p("div"),ue(n.$$.fragment)},m(o,a){b(o,e,a),le(n,e,null),s=!0},p(o,a){const l=a&128?gn(i,[Xn(o[7])]):{};n.$set(l)},i(o){s||(K(n.$$.fragment,o),s=!0)},o(o){x(n.$$.fragment,o),s=!1},d(o){o&&y(e),ce(n)}}}function Od(t){let e,n,s;const i=[t[7]];let r={};for(let o=0;o<i.length;o+=1)r=Mt(r,i[o]);return n=new k_({props:r}),{c(){e=p("div"),ue(n.$$.fragment),g(e,"class","container")},m(o,a){b(o,e,a),le(n,e,null),s=!0},p(o,a){const l=a&128?gn(i,[Xn(o[7])]):{};n.$set(l)},i(o){s||(K(n.$$.fragment,o),s=!0)},o(o){x(n.$$.fragment,o),s=!1},d(o){o&&y(e),ce(n)}}}function Ld(t){let e,n,s;return n=new k_({}),{c(){e=p("div"),ue(n.$$.fragment),g(e,"class","container")},m(i,r){b(i,e,r),le(n,e,null),s=!0},i(i){s||(K(n.$$.fragment,i),s=!0)},o(i){x(n.$$.fragment,i),s=!1},d(i){i&&y(e),ce(n)}}}function ZI(t){let e,n,s,i,r,o,a,l,c,h,f,d=t[6]==="start"&&Ed(t),m=t[6]==="propSelect"&&Nd(t),_=t[6]==="propEditing"&&Od(t),v=t[6]==="propAdding"&&Ld();return{c(){e=p("div"),n=p("div"),s=p("h1"),s.textContent="Propiedades",i=w(),r=p("img"),a=w(),d&&d.c(),l=w(),m&&m.c(),c=w(),_&&_.c(),h=w(),v&&v.c(),ct(r.src,o=p_)||g(r,"src",o),g(r,"alt","propiedad"),g(r,"class","imgTitle svelte-elvgtg"),g(e,"class","container")},m(k,E){b(k,e,E),u(e,n),u(n,s),u(n,i),u(n,r),u(e,a),d&&d.m(e,null),u(e,l),m&&m.m(e,null),u(e,c),_&&_.m(e,null),u(e,h),v&&v.m(e,null),f=!0},p(k,[E]){k[6]==="start"?d?(d.p(k,E),E&64&&K(d,1)):(d=Ed(k),d.c(),K(d,1),d.m(e,l)):d&&(kt(),x(d,1,1,()=>{d=null}),Et()),k[6]==="propSelect"?m?(m.p(k,E),E&64&&K(m,1)):(m=Nd(k),m.c(),K(m,1),m.m(e,c)):m&&(kt(),x(m,1,1,()=>{m=null}),Et()),k[6]==="propEditing"?_?(_.p(k,E),E&64&&K(_,1)):(_=Od(k),_.c(),K(_,1),_.m(e,h)):_&&(kt(),x(_,1,1,()=>{_=null}),Et()),k[6]==="propAdding"?v?E&64&&K(v,1):(v=Ld(),v.c(),K(v,1),v.m(e,null)):v&&(kt(),x(v,1,1,()=>{v=null}),Et())},i(k){f||(K(d),K(m),K(_),K(v),f=!0)},o(k){x(d),x(m),x(_),x(v),f=!1},d(k){k&&y(e),d&&d.d(),m&&m.d(),_&&_.d(),v&&v.d()}}}let tl=20;function eC(t,e,n){let s,i,r,o,a,l;Ue(t,it,O=>n(6,a=O)),Ue(t,Je,O=>n(7,l=O));let c,h;We(it,a="start",a);let f=1,d=Ln;const m=O=>{n(0,f=O)};d=Ln;function _(O){console.log(O),We(Je,l=O,l),We(it,a="propSelect",a)}function v(){We(it,a="propAdding",a)}function k(){return n(1,d=Ln.filter(O=>(O.nameProperty+" "+O.colonia).toLowerCase().includes(c.toLowerCase())))}n(1,d=Ln.sort((O,U)=>O.createdAt<U.createdAt?1:O.createdAt>U.createdAt?-1:0));function E(O){c=O,n(3,c)}const I=O=>_(O),M=()=>m(1),A=()=>m(f-1),j=O=>m(f-O),L=O=>m(f+(O+1)),F=()=>m(f+1),H=()=>m(i);return t.$$.update=()=>{t.$$.dirty&2&&n(13,s=d.length),t.$$.dirty&8192&&n(5,i=Math.ceil(s/tl)),t.$$.dirty&1&&n(2,r=f*tl),t.$$.dirty&4&&n(4,o=r-tl)},[f,d,r,c,o,i,a,l,m,_,v,k,h,s,E,I,M,A,j,L,F,H]}class tC extends Ye{constructor(e){super(),Qe(this,e,eC,ZI,He,{})}}function nC(t){let e;return{c(){e=p("h1"),e.textContent="Captacion"},m(n,s){b(n,e,s)},p:he,i:he,o:he,d(n){n&&y(e)}}}class sC extends Ye{constructor(e){super(),Qe(this,e,null,nC,He,{})}}function iC(t){let e,n,s,i,r=t[0].task+"",o;return{c(){e=p("div"),n=p("h1"),n.textContent="Estas en About",s=w(),i=p("h3"),o=S(r),g(e,"class","cont")},m(a,l){b(a,e,l),u(e,n),u(e,s),u(e,i),u(i,o)},p(a,[l]){l&1&&r!==(r=a[0].task+"")&&se(o,r)},i:he,o:he,d(a){a&&y(e)}}}function rC(t,e,n){let s;return Ue(t,yn,i=>n(0,s=i)),[s]}class oC extends Ye{constructor(e){super(),Qe(this,e,rC,iC,He,{})}}function aC(t){let e,n,s,i;return{c(){e=p("div"),n=p("div"),s=S(t[0]),g(n,"id","snackbar"),g(n,"class",i=ou(t[1]?"animation-in":"not-show")+" svelte-1e3w4r3")},m(r,o){b(r,e,o),u(e,n),u(n,s)},p(r,[o]){o&1&&se(s,r[0]),o&2&&i!==(i=ou(r[1]?"animation-in":"not-show")+" svelte-1e3w4r3")&&g(n,"class",i)},i:he,o:he,d(r){r&&y(e)}}}function lC(t,e,n){let{message:s=""}=e,{show:i=!1}=e;return t.$$set=r=>{"message"in r&&n(0,s=r.message),"show"in r&&n(1,i=r.show)},[s,i]}class cC extends Ye{constructor(e){super(),Qe(this,e,lC,aC,He,{message:0,show:1})}}function uC(t){let e;return{c(){e=S("Registrarse")},m(n,s){b(n,e,s)},d(n){n&&y(e)}}}function hC(t){let e,n,s,i,r,o,a,l,c,h,f,d,m,_,v,k,E,I,M,A,j,L,F,H,O,U,$,z,W,Z,Q;return n=new cC({props:{message:t[0],show:t[1]}}),z=new hn({props:{to:"/register",$$slots:{default:[uC]},$$scope:{ctx:t}}}),{c(){e=p("div"),ue(n.$$.fragment),s=w(),i=p("br"),r=p("br"),o=p("br"),a=w(),l=p("div"),c=p("h1"),c.textContent="Inicia sesi\xF3n en tu cuenta",h=w(),f=p("div"),d=p("input"),m=w(),_=p("div"),v=p("input"),k=w(),E=p("br"),I=w(),M=p("div"),A=p("button"),A.textContent="Iniciar sesi\xF3n",j=w(),L=p("p"),L.textContent="O tambi\xE9n",F=w(),H=p("br"),O=w(),U=p("p"),$=S("\xBFA\xFAn no tienes cuenta? "),ue(z.$$.fragment),g(c,"class","text-center text-login svelte-ftg4em"),g(d,"name","email"),g(d,"type","text"),g(d,"class","input-form svelte-ftg4em"),g(d,"placeholder","Correo"),g(f,"class","center svelte-ftg4em"),g(v,"name","password"),g(v,"type","password"),g(v,"class","input-form svelte-ftg4em"),g(v,"placeholder","Contrase\xF1a"),g(_,"class","center svelte-ftg4em"),g(A,"class","button-signup fondo-color-signup svelte-ftg4em"),g(M,"class","center svelte-ftg4em"),g(L,"class","text-center svelte-ftg4em"),g(U,"class","text-center svelte-ftg4em"),g(l,"class","form-signin svelte-ftg4em")},m(G,X){b(G,e,X),le(n,e,null),u(e,s),u(e,i),u(e,r),u(e,o),u(e,a),u(e,l),u(l,c),u(l,h),u(l,f),u(f,d),u(l,m),u(l,_),u(_,v),u(l,k),u(l,E),u(l,I),u(l,M),u(M,A),u(l,j),u(l,L),u(l,F),u(l,H),u(l,O),u(l,U),u(U,$),le(z,U,null),W=!0,Z||(Q=[q(d,"input",t[4]),q(v,"input",t[5]),q(A,"click",t[3])],Z=!0)},p(G,[X]){const Y={};X&1&&(Y.message=G[0]),X&2&&(Y.show=G[1]),n.$set(Y);const C={};X&512&&(C.$$scope={dirty:X,ctx:G}),z.$set(C)},i(G){W||(K(n.$$.fragment,G),K(z.$$.fragment,G),W=!0)},o(G){x(n.$$.fragment,G),x(z.$$.fragment,G),W=!1},d(G){G&&y(e),ce(n),ce(z),Z=!1,xe(Q)}}}function fC(t,e,n){const s=Qs();let i={email:"",password:""},r="",o=!1;const a=d=>{n(0,r=d),n(1,o=!0),setTimeout(()=>{n(1,o=!1)},2800)},l=d=>{i={...i,[d.target.name]:d.target.value}};return[r,o,l,async()=>{try{await uE(f_,i.email,i.password),s("/")}catch(d){d.message==="Firebase: Error (auth/wrong-password)."&&a("Contrase\xF1a incorrecta")}},d=>l(d),d=>l(d)]}class dC extends Ye{constructor(e){super(),Qe(this,e,fC,hC,He,{})}}class pC extends Ye{constructor(e){super(),Qe(this,e,null,null,He,{})}}function mC(t){let e;return{c(){e=S("Home")},m(n,s){b(n,e,s)},d(n){n&&y(e)}}}function gC(t){let e;return{c(){e=S("Contactos")},m(n,s){b(n,e,s)},d(n){n&&y(e)}}}function _C(t){let e;return{c(){e=S("Propiedades")},m(n,s){b(n,e,s)},d(n){n&&y(e)}}}function vC(t){let e;return{c(){e=S("Agenda")},m(n,s){b(n,e,s)},d(n){n&&y(e)}}}function yC(t){let e;return{c(){e=S("LogOut")},m(n,s){b(n,e,s)},d(n){n&&y(e)}}}function bC(t){let e;return{c(){e=S("About")},m(n,s){b(n,e,s)},d(n){n&&y(e)}}}function wC(t){let e;return{c(){e=S("Registro")},m(n,s){b(n,e,s)},d(n){n&&y(e)}}}function kC(t){let e;return{c(){e=S("Login")},m(n,s){b(n,e,s)},d(n){n&&y(e)}}}function EC(t){let e,n;return e=new aI({}),{c(){ue(e.$$.fragment)},m(s,i){le(e,s,i),n=!0},i(s){n||(K(e.$$.fragment,s),n=!0)},o(s){x(e.$$.fragment,s),n=!1},d(s){ce(e,s)}}}function TC(t){let e,n;return e=new KI({}),{c(){ue(e.$$.fragment)},m(s,i){le(e,s,i),n=!0},i(s){n||(K(e.$$.fragment,s),n=!0)},o(s){x(e.$$.fragment,s),n=!1},d(s){ce(e,s)}}}function IC(t){let e,n;return e=new tC({}),{c(){ue(e.$$.fragment)},m(s,i){le(e,s,i),n=!0},i(s){n||(K(e.$$.fragment,s),n=!0)},o(s){x(e.$$.fragment,s),n=!1},d(s){ce(e,s)}}}function CC(t){let e,n;return e=new sC({}),{c(){ue(e.$$.fragment)},m(s,i){le(e,s,i),n=!0},i(s){n||(K(e.$$.fragment,s),n=!0)},o(s){x(e.$$.fragment,s),n=!1},d(s){ce(e,s)}}}function SC(t){let e,n;return e=new VT({}),{c(){ue(e.$$.fragment)},m(s,i){le(e,s,i),n=!0},i(s){n||(K(e.$$.fragment,s),n=!0)},o(s){x(e.$$.fragment,s),n=!1},d(s){ce(e,s)}}}function AC(t){let e,n;return e=new jT({}),{c(){ue(e.$$.fragment)},m(s,i){le(e,s,i),n=!0},i(s){n||(K(e.$$.fragment,s),n=!0)},o(s){x(e.$$.fragment,s),n=!1},d(s){ce(e,s)}}}function DC(t){let e,n;return e=new oC({}),{c(){ue(e.$$.fragment)},m(s,i){le(e,s,i),n=!0},i(s){n||(K(e.$$.fragment,s),n=!0)},o(s){x(e.$$.fragment,s),n=!1},d(s){ce(e,s)}}}function RC(t){let e,n;return e=new pC({}),{c(){ue(e.$$.fragment)},m(s,i){le(e,s,i),n=!0},i(s){n||(K(e.$$.fragment,s),n=!0)},o(s){x(e.$$.fragment,s),n=!1},d(s){ce(e,s)}}}function PC(t){let e,n;return e=new dC({}),{c(){ue(e.$$.fragment)},m(s,i){le(e,s,i),n=!0},i(s){n||(K(e.$$.fragment,s),n=!0)},o(s){x(e.$$.fragment,s),n=!1},d(s){ce(e,s)}}}function NC(t){let e,n;return e=new zT({}),{c(){ue(e.$$.fragment)},m(s,i){le(e,s,i),n=!0},i(s){n||(K(e.$$.fragment,s),n=!0)},o(s){x(e.$$.fragment,s),n=!1},d(s){ce(e,s)}}}function OC(t){let e,n,s,i,r,o,a,l,c,h,f,d,m,_,v,k,E,I,M,A,j,L,F,H,O,U,$,z,W,Z,Q,G,X,Y,C,P,N,D,re,ae,Se,me,at,ge,Pe,Ne,dt;return d=new hn({props:{to:"/",$$slots:{default:[mC]},$$scope:{ctx:t}}}),_=new hn({props:{to:"contactos",$$slots:{default:[gC]},$$scope:{ctx:t}}}),k=new hn({props:{to:"propiedades",$$slots:{default:[_C]},$$scope:{ctx:t}}}),I=new hn({props:{to:"agenda",$$slots:{default:[vC]},$$scope:{ctx:t}}}),A=new hn({props:{to:"/about",$$slots:{default:[yC]},$$scope:{ctx:t}}}),A.$on("click",MC),L=new hn({props:{to:"about",$$slots:{default:[bC]},$$scope:{ctx:t}}}),H=new hn({props:{to:"register",$$slots:{default:[wC]},$$scope:{ctx:t}}}),U=new hn({props:{to:"login",$$slots:{default:[kC]},$$scope:{ctx:t}}}),z=new Pn({props:{path:"/",$$slots:{default:[EC]},$$scope:{ctx:t}}}),Z=new Pn({props:{path:"/contactos",$$slots:{default:[TC]},$$scope:{ctx:t}}}),G=new Pn({props:{path:"propiedades",$$slots:{default:[IC]},$$scope:{ctx:t}}}),Y=new Pn({props:{path:"captacion",$$slots:{default:[CC]},$$scope:{ctx:t}}}),P=new Pn({props:{path:"agenda",$$slots:{default:[SC]},$$scope:{ctx:t}}}),D=new Pn({props:{path:"sinergias",$$slots:{default:[AC]},$$scope:{ctx:t}}}),ae=new Pn({props:{path:"about",$$slots:{default:[DC]},$$scope:{ctx:t}}}),me=new Pn({props:{path:"logout",$$slots:{default:[RC]},$$scope:{ctx:t}}}),ge=new Pn({props:{path:"login",$$slots:{default:[PC]},$$scope:{ctx:t}}}),Ne=new Pn({props:{path:"register",$$slots:{default:[NC]},$$scope:{ctx:t}}}),{c(){e=p("div"),n=p("img"),i=w(),r=p("label"),o=p("img"),l=w(),c=p("input"),h=w(),f=p("div"),ue(d.$$.fragment),m=w(),ue(_.$$.fragment),v=w(),ue(k.$$.fragment),E=w(),ue(I.$$.fragment),M=w(),ue(A.$$.fragment),j=w(),ue(L.$$.fragment),F=w(),ue(H.$$.fragment),O=w(),ue(U.$$.fragment),$=w(),ue(z.$$.fragment),W=w(),ue(Z.$$.fragment),Q=w(),ue(G.$$.fragment),X=w(),ue(Y.$$.fragment),C=w(),ue(P.$$.fragment),N=w(),ue(D.$$.fragment),re=w(),ue(ae.$$.fragment),Se=w(),ue(me.$$.fragment),at=w(),ue(ge.$$.fragment),Pe=w(),ue(Ne.$$.fragment),ct(n.src,s=pp)||g(n,"src",s),g(n,"alt","MatchHome"),g(n,"class","nav__logo svelte-1viw6tr"),ct(o.src,a=Hv)||g(o,"src",a),g(o,"class","nav__img svelte-1viw6tr"),g(o,"alt","menu"),g(r,"class","nav__label svelte-1viw6tr"),g(r,"for","menu"),g(c,"type","checkbox"),g(c,"id","menu"),g(c,"class","nav__input svelte-1viw6tr"),g(f,"class","nav__menu svelte-1viw6tr"),g(e,"class","nav__container svelte-1viw6tr")},m(V,ie){b(V,e,ie),u(e,n),u(e,i),u(e,r),u(r,o),u(e,l),u(e,c),u(e,h),u(e,f),le(d,f,null),u(f,m),le(_,f,null),u(f,v),le(k,f,null),u(f,E),le(I,f,null),u(f,M),le(A,f,null),u(f,j),le(L,f,null),u(f,F),le(H,f,null),u(f,O),le(U,f,null),b(V,$,ie),le(z,V,ie),b(V,W,ie),le(Z,V,ie),b(V,Q,ie),le(G,V,ie),b(V,X,ie),le(Y,V,ie),b(V,C,ie),le(P,V,ie),b(V,N,ie),le(D,V,ie),b(V,re,ie),le(ae,V,ie),b(V,Se,ie),le(me,V,ie),b(V,at,ie),le(ge,V,ie),b(V,Pe,ie),le(Ne,V,ie),dt=!0},p(V,ie){const Ke={};ie&2&&(Ke.$$scope={dirty:ie,ctx:V}),d.$set(Ke);const Dt={};ie&2&&(Dt.$$scope={dirty:ie,ctx:V}),_.$set(Dt);const Le={};ie&2&&(Le.$$scope={dirty:ie,ctx:V}),k.$set(Le);const ht={};ie&2&&(ht.$$scope={dirty:ie,ctx:V}),I.$set(ht);const Fe={};ie&2&&(Fe.$$scope={dirty:ie,ctx:V}),A.$set(Fe);const rn={};ie&2&&(rn.$$scope={dirty:ie,ctx:V}),L.$set(rn);const ft={};ie&2&&(ft.$$scope={dirty:ie,ctx:V}),H.$set(ft);const pt={};ie&2&&(pt.$$scope={dirty:ie,ctx:V}),U.$set(pt);const Ut={};ie&2&&(Ut.$$scope={dirty:ie,ctx:V}),z.$set(Ut);const R={};ie&2&&(R.$$scope={dirty:ie,ctx:V}),Z.$set(R);const oe={};ie&2&&(oe.$$scope={dirty:ie,ctx:V}),G.$set(oe);const _e={};ie&2&&(_e.$$scope={dirty:ie,ctx:V}),Y.$set(_e);const rt={};ie&2&&(rt.$$scope={dirty:ie,ctx:V}),P.$set(rt);const B={};ie&2&&(B.$$scope={dirty:ie,ctx:V}),D.$set(B);const we={};ie&2&&(we.$$scope={dirty:ie,ctx:V}),ae.$set(we);const mt={};ie&2&&(mt.$$scope={dirty:ie,ctx:V}),me.$set(mt);const on={};ie&2&&(on.$$scope={dirty:ie,ctx:V}),ge.$set(on);const lt={};ie&2&&(lt.$$scope={dirty:ie,ctx:V}),Ne.$set(lt)},i(V){dt||(K(d.$$.fragment,V),K(_.$$.fragment,V),K(k.$$.fragment,V),K(I.$$.fragment,V),K(A.$$.fragment,V),K(L.$$.fragment,V),K(H.$$.fragment,V),K(U.$$.fragment,V),K(z.$$.fragment,V),K(Z.$$.fragment,V),K(G.$$.fragment,V),K(Y.$$.fragment,V),K(P.$$.fragment,V),K(D.$$.fragment,V),K(ae.$$.fragment,V),K(me.$$.fragment,V),K(ge.$$.fragment,V),K(Ne.$$.fragment,V),dt=!0)},o(V){x(d.$$.fragment,V),x(_.$$.fragment,V),x(k.$$.fragment,V),x(I.$$.fragment,V),x(A.$$.fragment,V),x(L.$$.fragment,V),x(H.$$.fragment,V),x(U.$$.fragment,V),x(z.$$.fragment,V),x(Z.$$.fragment,V),x(G.$$.fragment,V),x(Y.$$.fragment,V),x(P.$$.fragment,V),x(D.$$.fragment,V),x(ae.$$.fragment,V),x(me.$$.fragment,V),x(ge.$$.fragment,V),x(Ne.$$.fragment,V),dt=!1},d(V){V&&y(e),ce(d),ce(_),ce(k),ce(I),ce(A),ce(L),ce(H),ce(U),V&&y($),ce(z,V),V&&y(W),ce(Z,V),V&&y(Q),ce(G,V),V&&y(X),ce(Y,V),V&&y(C),ce(P,V),V&&y(N),ce(D,V),V&&y(re),ce(ae,V),V&&y(Se),ce(me,V),V&&y(at),ce(ge,V),V&&y(Pe),ce(Ne,V)}}}function LC(t){let e,n,s;return n=new Ql({props:{$$slots:{default:[OC]},$$scope:{ctx:t}}}),{c(){e=p("nav"),ue(n.$$.fragment),g(e,"class","nav svelte-1viw6tr")},m(i,r){b(i,e,r),le(n,e,null),s=!0},p(i,[r]){const o={};r&2&&(o.$$scope={dirty:r,ctx:i}),n.$set(o)},i(i){s||(K(n.$$.fragment,i),s=!0)},o(i){x(n.$$.fragment,i),s=!1},d(i){i&&y(e),ce(n)}}}async function MC(){}function $C(t){return eI.subscribe(e=>{}),[]}class UC extends Ye{constructor(e){super(),Qe(this,e,$C,LC,He,{})}}function Md(t){let e,n,s,i,r,o,a;return{c(){e=p("div"),n=p("h1"),n.textContent="Bienvendo a",s=w(),i=p("img"),o=w(),a=p("div"),a.innerHTML=`<p class="desc__intro svelte-1kx2964">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod aut aliquam, expedita perferendis consequatur modi omnis! Nostrum iste necessitatibus quisquam numquam, aliquam ipsum. Sit, similique quis. Fuga vitae possimus quisquam quam. Unde accusantium neque veniam reprehenderit, laborum, magni ut quasi asperiores a amet fugiat non, sapiente obcaecati voluptas ab! Nostrum!</p> 
        <p><strong>www.matchhome.net</strong></p>`,g(n,"class","title svelte-1kx2964"),ct(i.src,r=pp)||g(i,"src",r),g(i,"alt","MatchHome"),g(i,"class","svelte-1kx2964"),g(a,"class",""),g(e,"class","intro svelte-1kx2964")},m(l,c){b(l,e,c),u(e,n),u(e,s),u(e,i),u(e,o),u(e,a)},p:he,d(l){l&&y(e)}}}function FC(t){let e,n,s,i,r;n=new UC({});let o=t[0]&&Md();return{c(){e=p("nav"),ue(n.$$.fragment),s=w(),i=p("body"),o&&o.c(),g(e,"class","navBar")},m(a,l){b(a,e,l),le(n,e,null),b(a,s,l),b(a,i,l),o&&o.m(i,null),r=!0},p(a,[l]){a[0]?o?o.p(a,l):(o=Md(),o.c(),o.m(i,null)):o&&(o.d(1),o=null)},i(a){r||(K(n.$$.fragment,a),r=!0)},o(a){x(n.$$.fragment,a),r=!1},d(a){a&&y(e),ce(n),a&&y(s),a&&y(i),o&&o.d()}}}function VC(t,e,n){let s=!0;return setTimeout(()=>{n(0,s=!1)},1500),[s]}class BC extends Ye{constructor(e){super(),Qe(this,e,VC,FC,He,{})}}new BC({target:document.getElementById("app")});
