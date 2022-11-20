(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function he(){}const tp=t=>t;function Lt(t,e){for(const n in e)t[n]=e[n];return t}function np(t){return t()}function gu(){return Object.create(null)}function xe(t){t.forEach(np)}function Xo(t){return typeof t=="function"}function Ge(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let Zr;function st(t,e){return Zr||(Zr=document.createElement("a")),Zr.href=e,t===Zr.href}function G_(t){return Object.keys(t).length===0}function zl(t,...e){if(t==null)return he;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function vi(t){let e;return zl(t,n=>e=n)(),e}function Pe(t,e,n){t.$$.on_destroy.push(zl(e,n))}function Kl(t,e,n,s){if(t){const i=sp(t,e,n,s);return t[0](i)}}function sp(t,e,n,s){return t[1]&&s?Lt(n.ctx.slice(),t[1](s(e))):n.ctx}function Gl(t,e,n,s){if(t[2]&&s){const i=t[2](s(n));if(e.dirty===void 0)return i;if(typeof i=="object"){const r=[],o=Math.max(e.dirty.length,i.length);for(let a=0;a<o;a+=1)r[a]=e.dirty[a]|i[a];return r}return e.dirty|i}return e.dirty}function Wl(t,e,n,s,i,r){if(i){const o=sp(e,n,s,r);t.p(o,i)}}function Ql(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let s=0;s<n;s++)e[s]=-1;return e}return-1}function yo(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function bo(t,e){const n={};e=new Set(e);for(const s in t)!e.has(s)&&s[0]!=="$"&&(n[s]=t[s]);return n}function _u(t){return t==null?"":t}function we(t,e,n){return t.set(n),e}const ip=typeof window<"u";let W_=ip?()=>window.performance.now():()=>Date.now(),Yl=ip?t=>requestAnimationFrame(t):he;const fi=new Set;function rp(t){fi.forEach(e=>{e.c(t)||(fi.delete(e),e.f())}),fi.size!==0&&Yl(rp)}function Q_(t){let e;return fi.size===0&&Yl(rp),{promise:new Promise(n=>{fi.add(e={c:t,f:n})}),abort(){fi.delete(e)}}}function u(t,e){t.appendChild(e)}function op(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Y_(t){const e=p("style");return X_(op(t),e),e.sheet}function X_(t,e){return u(t.head||t,e),e.sheet}function k(t,e,n){t.insertBefore(e,n||null)}function w(t){t.parentNode.removeChild(t)}function Fe(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function p(t){return document.createElement(t)}function S(t){return document.createTextNode(t)}function b(){return S(" ")}function nn(){return S("")}function j(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function gn(t){return function(e){return e.preventDefault(),t.call(this,e)}}function g(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Nn(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const s in e)e[s]==null?t.removeAttribute(s):s==="style"?t.style.cssText=e[s]:s==="__value"?t.value=t[s]=e[s]:n[s]&&n[s].set?t[s]=e[s]:g(t,s,e[s])}function Nt(t,e,n){const s=new Set;for(let i=0;i<t.length;i+=1)t[i].checked&&s.add(t[i].__value);return n||s.delete(e),Array.from(s)}function ds(t){return t===""?null:+t}function J_(t){return Array.from(t.childNodes)}function ie(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function ve(t,e){t.value=e==null?"":e}function Ue(t,e){for(let n=0;n<t.options.length;n+=1){const s=t.options[n];if(s.__value===e){s.selected=!0;return}}t.selectedIndex=-1}function Ft(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}function ws(t,e,n){t.classList[n?"add":"remove"](e)}function ap(t,e,{bubbles:n=!1,cancelable:s=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,s,e),i}function vu(t,e){return new t(e)}const wo=new Map;let ko=0;function x_(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Z_(t,e){const n={stylesheet:Y_(e),rules:{}};return wo.set(t,n),n}function yu(t,e,n,s,i,r,o,a=0){const l=16.666/s;let c=`{
`;for(let v=0;v<=1;v+=l){const E=e+(n-e)*r(v);c+=v*100+`%{${o(E,1-E)}}
`}const h=c+`100% {${o(n,1-n)}}
}`,f=`__svelte_${x_(h)}_${a}`,d=op(t),{stylesheet:m,rules:_}=wo.get(d)||Z_(d,t);_[f]||(_[f]=!0,m.insertRule(`@keyframes ${f} ${h}`,m.cssRules.length));const y=t.style.animation||"";return t.style.animation=`${y?`${y}, `:""}${f} ${s}ms linear ${i}ms 1 both`,ko+=1,f}function ev(t,e){const n=(t.style.animation||"").split(", "),s=n.filter(e?r=>r.indexOf(e)<0:r=>r.indexOf("__svelte")===-1),i=n.length-s.length;i&&(t.style.animation=s.join(", "),ko-=i,ko||tv())}function tv(){Yl(()=>{ko||(wo.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&w(e)}),wo.clear())})}let sr;function Yi(t){sr=t}function br(){if(!sr)throw new Error("Function called outside component initialization");return sr}function nv(t){br().$$.on_mount.push(t)}function wr(t){br().$$.on_destroy.push(t)}function lp(){const t=br();return(e,n,{cancelable:s=!1}={})=>{const i=t.$$.callbacks[e];if(i){const r=ap(e,n,{cancelable:s});return i.slice().forEach(o=>{o.call(t,r)}),!r.defaultPrevented}return!0}}function Xi(t,e){return br().$$.context.set(t,e),e}function ks(t){return br().$$.context.get(t)}function sv(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(s=>s.call(this,e))}const ji=[],Yn=[],lo=[],al=[],cp=Promise.resolve();let ll=!1;function up(){ll||(ll=!0,cp.then(hp))}function iv(){return up(),cp}function Ze(t){lo.push(t)}function Hs(t){al.push(t)}const La=new Set;let eo=0;function hp(){const t=sr;do{for(;eo<ji.length;){const e=ji[eo];eo++,Yi(e),rv(e.$$)}for(Yi(null),ji.length=0,eo=0;Yn.length;)Yn.pop()();for(let e=0;e<lo.length;e+=1){const n=lo[e];La.has(n)||(La.add(n),n())}lo.length=0}while(ji.length);for(;al.length;)al.pop()();ll=!1,La.clear(),Yi(t)}function rv(t){if(t.fragment!==null){t.update(),xe(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Ze)}}let Bi;function ov(){return Bi||(Bi=Promise.resolve(),Bi.then(()=>{Bi=null})),Bi}function Ma(t,e,n){t.dispatchEvent(ap(`${e?"intro":"outro"}${n}`))}const co=new Set;let zn;function bt(){zn={r:0,c:[],p:zn}}function wt(){zn.r||xe(zn.c),zn=zn.p}function q(t,e){t&&t.i&&(co.delete(t),t.i(e))}function x(t,e,n,s){if(t&&t.o){if(co.has(t))return;co.add(t),zn.c.push(()=>{co.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}const av={duration:0};function fn(t,e,n,s){let i=e(t,n),r=s?0:1,o=null,a=null,l=null;function c(){l&&ev(t,l)}function h(d,m){const _=d.b-r;return m*=Math.abs(_),{a:r,b:d.b,d:_,duration:m,start:d.start,end:d.start+m,group:d.group}}function f(d){const{delay:m=0,duration:_=300,easing:y=tp,tick:v=he,css:E}=i||av,T={start:W_()+m,b:d};d||(T.group=zn,zn.r+=1),o||a?a=T:(E&&(c(),l=yu(t,r,d,_,m,y,E)),d&&v(0,1),o=h(T,_),Ze(()=>Ma(t,d,"start")),Q_(L=>{if(a&&L>a.start&&(o=h(a,_),a=null,Ma(t,o.b,"start"),E&&(c(),l=yu(t,r,o.b,o.duration,0,y,i.css))),o){if(L>=o.end)v(r=o.b,1-r),Ma(t,o.b,"end"),a||(o.b?c():--o.group.r||xe(o.group.c)),o=null;else if(L>=o.start){const D=L-o.start;r=o.a+o.d*y(D/o.duration),v(r,1-r)}}return!!(o||a)}))}return{run(d){Xo(i)?ov().then(()=>{i=i(),f(d)}):f(d)},end(){c(),o=a=null}}}function _n(t,e){const n={},s={},i={$$scope:1};let r=t.length;for(;r--;){const o=t[r],a=e[r];if(a){for(const l in o)l in a||(s[l]=1);for(const l in a)i[l]||(n[l]=a[l],i[l]=1);t[r]=a}else for(const l in o)i[l]=1}for(const o in s)o in n||(n[o]=void 0);return n}function Xn(t){return typeof t=="object"&&t!==null?t:{}}function zs(t,e,n){const s=t.$$.props[e];s!==void 0&&(t.$$.bound[s]=n,n(t.$$.ctx[s]))}function ge(t){t&&t.c()}function fe(t,e,n,s){const{fragment:i,after_update:r}=t.$$;i&&i.m(e,n),s||Ze(()=>{const o=t.$$.on_mount.map(np).filter(Xo);t.$$.on_destroy?t.$$.on_destroy.push(...o):xe(o),t.$$.on_mount=[]}),r.forEach(Ze)}function de(t,e){const n=t.$$;n.fragment!==null&&(xe(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function lv(t,e){t.$$.dirty[0]===-1&&(ji.push(t),up(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ye(t,e,n,s,i,r,o,a=[-1]){const l=sr;Yi(t);const c=t.$$={fragment:null,ctx:[],props:r,update:he,not_equal:i,bound:gu(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:gu(),dirty:a,skip_bound:!1,root:e.target||l.$$.root};o&&o(c.root);let h=!1;if(c.ctx=n?n(t,e.props||{},(f,d,...m)=>{const _=m.length?m[0]:d;return c.ctx&&i(c.ctx[f],c.ctx[f]=_)&&(!c.skip_bound&&c.bound[f]&&c.bound[f](_),h&&lv(t,f)),d}):[],c.update(),h=!0,xe(c.before_update),c.fragment=s?s(c.ctx):!1,e.target){if(e.hydrate){const f=J_(e.target);c.fragment&&c.fragment.l(f),f.forEach(w)}else c.fragment&&c.fragment.c();e.intro&&q(t.$$.fragment),fe(t,e.target,e.anchor,e.customElement),hp()}Yi(l)}class Xe{$destroy(){de(this,1),this.$destroy=he}$on(e,n){if(!Xo(n))return he;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const i=s.indexOf(n);i!==-1&&s.splice(i,1)}}$set(e){this.$$set&&!G_(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const bu=t=>typeof t>"u",fp=t=>typeof t=="function",dp=t=>typeof t=="number";function cv(t){return!t.defaultPrevented&&t.button===0&&!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function pp(){let t=0;return()=>t++}function uv(){return Math.random().toString(36).substring(2)}const Es=typeof window>"u";function mp(t,e,n){return t.addEventListener(e,n),()=>t.removeEventListener(e,n)}const cl=(t,e)=>t?{}:{style:e},li=t=>({"aria-hidden":"true",...cl(t,"display:none;")}),oi=[];function hv(t,e){return{subscribe:yt(t,e).subscribe}}function yt(t,e=he){let n;const s=new Set;function i(a){if(Ge(t,a)&&(t=a,n)){const l=!oi.length;for(const c of s)c[1](),oi.push(c,t);if(l){for(let c=0;c<oi.length;c+=2)oi[c][0](oi[c+1]);oi.length=0}}}function r(a){i(a(t))}function o(a,l=he){const c=[a,l];return s.add(c),s.size===1&&(n=e(i)||he),a(t),()=>{s.delete(c),s.size===0&&(n(),n=null)}}return{set:i,update:r,subscribe:o}}function fv(t,e,n){const s=!Array.isArray(t),i=s?[t]:t,r=e.length<2;return hv(n,o=>{let a=!1;const l=[];let c=0,h=he;const f=()=>{if(c)return;h();const m=e(s?l[0]:l,o);r?o(m):h=Xo(m)?m:he},d=i.map((m,_)=>zl(m,y=>{l[_]=y,c&=~(1<<_),a&&f()},()=>{c|=1<<_}));return a=!0,f(),function(){xe(d),h()}})}const kr=t=>`@@svnav-ctx__${t}`,ul=kr("LOCATION"),yi=kr("ROUTER"),gp=kr("ROUTE"),dv=kr("ROUTE_PARAMS"),pv=kr("FOCUS_ELEM"),_p=/^:(.+)/,qi=(t,e,n)=>t.substr(e,n),hl=(t,e)=>qi(t,0,e.length)===e,mv=t=>t==="",gv=t=>_p.test(t),vp=t=>t[0]==="*",_v=t=>t.replace(/\*.*$/,""),yp=t=>t.replace(/(^\/+|\/+$)/g,"");function $n(t,e=!1){const n=yp(t).split("/");return e?n.filter(Boolean):n}const $a=(t,e)=>t+(e?`?${e}`:""),Xl=t=>`/${yp(t)}`;function Er(...t){const e=s=>$n(s,!0).join("/"),n=t.map(e).join("/");return Xl(n)}const Jl=1,Jo=2,Ks=3,vv=4,bp=5,yv=6,wp=7,bv=8,wv=9,kp=10,Ep=11,kv={[Jl]:"Link",[Jo]:"Route",[Ks]:"Router",[vv]:"useFocus",[bp]:"useLocation",[yv]:"useMatch",[wp]:"useNavigate",[bv]:"useParams",[wv]:"useResolvable",[kp]:"useResolve",[Ep]:"navigate"},xl=t=>kv[t];function Ev(t,e){let n;return t===Jo?n=e.path?`path="${e.path}"`:"default":t===Jl?n=`to="${e.to}"`:t===Ks&&(n=`basepath="${e.basepath||""}"`),`<${xl(t)} ${n||""} />`}function Tv(t,e,n,s){const i=n&&Ev(s||t,n),r=i?`

Occurred in: ${i}`:"",o=xl(t),a=fp(e)?e(o):e;return`<${o}> ${a}${r}`}const Tp=t=>(...e)=>t(Tv(...e)),Ip=Tp(t=>{throw new Error(t)}),Eo=Tp(console.warn),wu=4,Iv=3,Sv=2,Cv=1,Av=1;function Dv(t,e){const n=t.default?0:$n(t.fullPath).reduce((s,i)=>{let r=s;return r+=wu,mv(i)?r+=Av:gv(i)?r+=Sv:vp(i)?r-=wu+Cv:r+=Iv,r},0);return{route:t,score:n,index:e}}function Pv(t){return t.map(Dv).sort((e,n)=>e.score<n.score?1:e.score>n.score?-1:e.index-n.index)}function Sp(t,e){let n,s;const[i]=e.split("?"),r=$n(i),o=r[0]==="",a=Pv(t);for(let l=0,c=a.length;l<c;l++){const{route:h}=a[l];let f=!1;const d={},m=E=>({...h,params:d,uri:E});if(h.default){s=m(e);continue}const _=$n(h.fullPath),y=Math.max(r.length,_.length);let v=0;for(;v<y;v++){const E=_[v],T=r[v];if(!bu(E)&&vp(E)){const D=E==="*"?"*":E.slice(1);d[D]=r.slice(v).map(decodeURIComponent).join("/");break}if(bu(T)){f=!0;break}const L=_p.exec(E);if(L&&!o){const D=decodeURIComponent(T);d[L[1]]=D}else if(E!==T){f=!0;break}}if(!f){n=m(Er(...r.slice(0,v)));break}}return n||s||null}function Cp(t,e){return Sp([t],e)}function Rv(t,e){if(hl(t,"/"))return t;const[n,s]=t.split("?"),[i]=e.split("?"),r=$n(n),o=$n(i);if(r[0]==="")return $a(i,s);if(!hl(r[0],".")){const c=o.concat(r).join("/");return $a((i==="/"?"":"/")+c,s)}const a=o.concat(r),l=[];return a.forEach(c=>{c===".."?l.pop():c!=="."&&l.push(c)}),$a(`/${l.join("/")}`,s)}function ku(t,e){const{pathname:n,hash:s="",search:i="",state:r}=t,o=$n(e,!0),a=$n(n,!0);for(;o.length;)o[0]!==a[0]&&Ip(Ks,`Invalid state: All locations must begin with the basepath "${e}", found "${n}"`),o.shift(),a.shift();return{pathname:Er(...a),hash:s,search:i,state:r}}const Eu=t=>t.length===1?"":t,Zl=t=>{const e=t.indexOf("?"),n=t.indexOf("#"),s=e!==-1,i=n!==-1,r=i?Eu(qi(t,n)):"",o=i?qi(t,0,n):t,a=s?Eu(qi(o,e)):"";return{pathname:(s?qi(o,0,e):o)||"/",search:a,hash:r}},Nv=t=>{const{pathname:e,search:n,hash:s}=t;return e+n+s};function Ov(t,e,n){return Er(n,Rv(t,e))}function Lv(t,e){const n=Xl(_v(t)),s=$n(n,!0),i=$n(e,!0).slice(0,s.length),r=Cp({fullPath:n},Er(...i));return r&&r.uri}const Ua="POP",Mv="PUSH",$v="REPLACE";function Fa(t){return{...t.location,pathname:encodeURI(decodeURI(t.location.pathname)),state:t.history.state,_key:t.history.state&&t.history.state._key||"initial"}}function Uv(t){let e=[],n=Fa(t),s=Ua;const i=(r=e)=>r.forEach(o=>o({location:n,action:s}));return{get location(){return n},listen(r){e.push(r);const o=()=>{n=Fa(t),s=Ua,i([r])};i([r]);const a=mp(t,"popstate",o);return()=>{a(),e=e.filter(l=>l!==r)}},navigate(r,o){const{state:a={},replace:l=!1}=o||{};if(s=l?$v:Mv,dp(r))o&&Eo(Ep,"Navigation options (state or replace) are not supported, when passing a number as the first argument to navigate. They are ignored."),s=Ua,t.history.go(r);else{const c={...a,_key:uv()};try{t.history[l?"replaceState":"pushState"](c,"",r)}catch{t.location[l?"replace":"assign"](r)}}n=Fa(t),i()}}}function Ba(t,e){return{...Zl(e),state:t}}function Fv(t="/"){let e=0,n=[Ba(null,t)];return{get entries(){return n},get location(){return n[e]},addEventListener(){},removeEventListener(){},history:{get state(){return n[e].state},pushState(s,i,r){e++,n=n.slice(0,e),n.push(Ba(s,r))},replaceState(s,i,r){n[e]=Ba(s,r)},go(s){const i=e+s;i<0||i>n.length-1||(e=i)}}}}const Bv=!!(!Es&&window.document&&window.document.createElement),Vv=!Es&&window.location.origin==="null",jv=Uv(Bv&&!Vv?window:Fv());let Hn=null,Ap=!0;function qv(t,e){const n=document.querySelectorAll("[data-svnav-router]");for(let s=0;s<n.length;s++){const i=n[s],r=Number(i.dataset.svnavRouter);if(r===t)return!0;if(r===e)return!1}return!1}function Hv(t){(!Hn||t.level>Hn.level||t.level===Hn.level&&qv(t.routerId,Hn.routerId))&&(Hn=t)}function zv(){Hn=null}function Kv(){Ap=!1}function Tu(t){if(!t)return!1;const e="tabindex";try{if(!t.hasAttribute(e)){t.setAttribute(e,"-1");let n;n=mp(t,"blur",()=>{t.removeAttribute(e),n()})}return t.focus(),document.activeElement===t}catch{return!1}}function Gv(t,e){return Number(t.dataset.svnavRouteEnd)===e}function Wv(t){return/^H[1-6]$/i.test(t.tagName)}function Iu(t,e=document){return e.querySelector(t)}function Qv(t){let n=Iu(`[data-svnav-route-start="${t}"]`).nextElementSibling;for(;!Gv(n,t);){if(Wv(n))return n;const s=Iu("h1,h2,h3,h4,h5,h6",n);if(s)return s;n=n.nextElementSibling}return null}function Yv(t){Promise.resolve(vi(t.focusElement)).then(e=>{const n=e||Qv(t.id);n||Eo(Ks,`Could not find an element to focus. You should always render a header for accessibility reasons, or set a custom focus element via the "useFocus" hook. If you don't want this Route or Router to manage focus, pass "primary={false}" to it.`,t,Jo),!Tu(n)&&Tu(document.documentElement)})}const Xv=(t,e,n)=>(s,i)=>iv().then(()=>{if(!Hn||Ap){Kv();return}if(s&&Yv(Hn.route),t.announcements&&i){const{path:r,fullPath:o,meta:a,params:l,uri:c}=Hn.route,h=t.createAnnouncement({path:r,fullPath:o,meta:a,params:l,uri:c},vi(n));Promise.resolve(h).then(f=>{e.set(f)})}zv()}),Su="position:fixed;top:-1px;left:0;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;";function Jv(t){let e,n,s=[{role:"status"},{"aria-atomic":"true"},{"aria-live":"polite"},{"data-svnav-announcer":""},cl(t[6],Su)],i={};for(let r=0;r<s.length;r+=1)i=Lt(i,s[r]);return{c(){e=p("div"),n=S(t[0]),Nn(e,i)},m(r,o){k(r,e,o),u(e,n)},p(r,o){o[0]&1&&ie(n,r[0]),Nn(e,i=_n(s,[{role:"status"},{"aria-atomic":"true"},{"aria-live":"polite"},{"data-svnav-announcer":""},cl(r[6],Su)]))},d(r){r&&w(e)}}}function xv(t){let e,n,s,i,r,o=[li(t[6]),{"data-svnav-router":t[3]}],a={};for(let f=0;f<o.length;f+=1)a=Lt(a,o[f]);const l=t[22].default,c=Kl(l,t,t[21],null);let h=t[2]&&t[4]&&t[1].announcements&&Jv(t);return{c(){e=p("div"),n=b(),c&&c.c(),s=b(),h&&h.c(),i=nn(),Nn(e,a)},m(f,d){k(f,e,d),k(f,n,d),c&&c.m(f,d),k(f,s,d),h&&h.m(f,d),k(f,i,d),r=!0},p(f,d){Nn(e,a=_n(o,[li(f[6]),{"data-svnav-router":f[3]}])),c&&c.p&&(!r||d[0]&2097152)&&Wl(c,l,f,f[21],r?Gl(l,f[21],d,null):Ql(f[21]),null),f[2]&&f[4]&&f[1].announcements&&h.p(f,d)},i(f){r||(q(c,f),r=!0)},o(f){x(c,f),r=!1},d(f){f&&w(e),f&&w(n),c&&c.d(f),f&&w(s),h&&h.d(f),f&&w(i)}}}const Zv=pp(),Cu="/";function ey(t,e,n){let s,i,r,o,a,{$$slots:l={},$$scope:c}=e,{basepath:h=Cu}=e,{url:f=null}=e,{history:d=jv}=e,{primary:m=!0}=e,{a11y:_={}}=e,{disableInlineStyles:y=!1}=e;const v={createAnnouncement:$=>`Navigated to ${$.uri}`,announcements:!0,..._},E=h,T=Xl(h),L=ks(ul),D=ks(yi),U=!L,W=Zv(),O=m&&!(D&&!D.manageFocus),F=yt("");Pe(t,F,$=>n(0,a=$));const G=D?D.disableInlineStyles:y,P=yt([]);Pe(t,P,$=>n(20,o=$));const Z=yt(null);Pe(t,Z,$=>n(18,i=$));let H=!1;const Q=U?0:D.level+1,K=U?yt((()=>ku(Es?Zl(f):d.location,T))()):L;Pe(t,K,$=>n(17,s=$));const B=yt(s);Pe(t,B,$=>n(19,r=$));const ue=Xv(v,F,K),ee=$=>C=>C.filter(M=>M.id!==$);function le($){if(Es){if(H)return;const C=Cp($,s.pathname);if(C)return H=!0,C}else P.update(C=>{const M=ee($.id)(C);return M.push($),M})}function re($){P.update(ee($))}return!U&&h!==Cu&&Eo(Ks,'Only top-level Routers can have a "basepath" prop. It is ignored.',{basepath:h}),U&&(nv(()=>d.listen(C=>{const M=ku(C.location,T);B.set(s),K.set(M)})),Xi(ul,K)),Xi(yi,{activeRoute:Z,registerRoute:le,unregisterRoute:re,manageFocus:O,level:Q,id:W,history:U?d:D.history,basepath:U?T:D.basepath,disableInlineStyles:G}),t.$$set=$=>{"basepath"in $&&n(11,h=$.basepath),"url"in $&&n(12,f=$.url),"history"in $&&n(13,d=$.history),"primary"in $&&n(14,m=$.primary),"a11y"in $&&n(15,_=$.a11y),"disableInlineStyles"in $&&n(16,y=$.disableInlineStyles),"$$scope"in $&&n(21,c=$.$$scope)},t.$$.update=()=>{if(t.$$.dirty[0]&2048&&h!==E&&Eo(Ks,'You cannot change the "basepath" prop. It is ignored.'),t.$$.dirty[0]&1179648){const $=Sp(o,s.pathname);Z.set($)}if(t.$$.dirty[0]&655360&&U){const $=!!s.hash,C=!$&&O,M=!$||s.pathname!==r.pathname;ue(C,M)}t.$$.dirty[0]&262144&&O&&i&&i.primary&&Hv({level:Q,routerId:W,route:i})},[a,v,U,W,O,F,G,P,Z,K,B,h,f,d,m,_,y,s,i,r,o,c,l]}class ec extends Xe{constructor(e){super(),Ye(this,e,ey,xv,Ge,{basepath:11,url:12,history:13,primary:14,a11y:15,disableInlineStyles:16},null,[-1,-1])}}function Tr(t,e,n=yi,s=Ks){ks(n)||Ip(t,r=>`You cannot use ${r} outside of a ${xl(s)}.`,e)}const ty=t=>{const{subscribe:e}=ks(t);return{subscribe:e}};function Dp(){return Tr(bp),ty(ul)}function Pp(){const{history:t}=ks(yi);return t}function Rp(){const t=ks(gp);return t?fv(t,e=>e.base):yt("/")}function Np(){Tr(kp);const t=Rp(),{basepath:e}=ks(yi);return s=>Ov(s,vi(t),e)}function Zs(){Tr(wp);const t=Np(),{navigate:e}=Pp();return(s,i)=>{const r=dp(s)?s:t(s);return e(r,i)}}const ny=t=>({params:t&16,location:t&8}),Au=t=>({params:Es?vi(t[10]):t[4],location:t[3],navigate:t[11]});function Du(t){let e,n;return e=new ec({props:{primary:t[1],$$slots:{default:[ry]},$$scope:{ctx:t}}}),{c(){ge(e.$$.fragment)},m(s,i){fe(e,s,i),n=!0},p(s,i){const r={};i&2&&(r.primary=s[1]),i&528409&&(r.$$scope={dirty:i,ctx:s}),e.$set(r)},i(s){n||(q(e.$$.fragment,s),n=!0)},o(s){x(e.$$.fragment,s),n=!1},d(s){de(e,s)}}}function sy(t){let e;const n=t[18].default,s=Kl(n,t,t[19],Au);return{c(){s&&s.c()},m(i,r){s&&s.m(i,r),e=!0},p(i,r){s&&s.p&&(!e||r&524312)&&Wl(s,n,i,i[19],e?Gl(n,i[19],r,ny):Ql(i[19]),Au)},i(i){e||(q(s,i),e=!0)},o(i){x(s,i),e=!1},d(i){s&&s.d(i)}}}function iy(t){let e,n,s;const i=[{location:t[3]},{navigate:t[11]},Es?vi(t[10]):t[4],t[12]];var r=t[0];function o(a){let l={};for(let c=0;c<i.length;c+=1)l=Lt(l,i[c]);return{props:l}}return r&&(e=vu(r,o())),{c(){e&&ge(e.$$.fragment),n=nn()},m(a,l){e&&fe(e,a,l),k(a,n,l),s=!0},p(a,l){const c=l&7192?_n(i,[l&8&&{location:a[3]},l&2048&&{navigate:a[11]},l&1040&&Xn(Es?vi(a[10]):a[4]),l&4096&&Xn(a[12])]):{};if(r!==(r=a[0])){if(e){bt();const h=e;x(h.$$.fragment,1,0,()=>{de(h,1)}),wt()}r?(e=vu(r,o()),ge(e.$$.fragment),q(e.$$.fragment,1),fe(e,n.parentNode,n)):e=null}else r&&e.$set(c)},i(a){s||(e&&q(e.$$.fragment,a),s=!0)},o(a){e&&x(e.$$.fragment,a),s=!1},d(a){a&&w(n),e&&de(e,a)}}}function ry(t){let e,n,s,i;const r=[iy,sy],o=[];function a(l,c){return l[0]!==null?0:1}return e=a(t),n=o[e]=r[e](t),{c(){n.c(),s=nn()},m(l,c){o[e].m(l,c),k(l,s,c),i=!0},p(l,c){let h=e;e=a(l),e===h?o[e].p(l,c):(bt(),x(o[h],1,1,()=>{o[h]=null}),wt(),n=o[e],n?n.p(l,c):(n=o[e]=r[e](l),n.c()),q(n,1),n.m(s.parentNode,s))},i(l){i||(q(n),i=!0)},o(l){x(n),i=!1},d(l){o[e].d(l),l&&w(s)}}}function oy(t){let e,n,s,i,r,o=[li(t[7]),{"data-svnav-route-start":t[5]}],a={};for(let f=0;f<o.length;f+=1)a=Lt(a,o[f]);let l=t[2]&&Du(t),c=[li(t[7]),{"data-svnav-route-end":t[5]}],h={};for(let f=0;f<c.length;f+=1)h=Lt(h,c[f]);return{c(){e=p("div"),n=b(),l&&l.c(),s=b(),i=p("div"),Nn(e,a),Nn(i,h)},m(f,d){k(f,e,d),k(f,n,d),l&&l.m(f,d),k(f,s,d),k(f,i,d),r=!0},p(f,[d]){Nn(e,a=_n(o,[li(f[7]),{"data-svnav-route-start":f[5]}])),f[2]?l?(l.p(f,d),d&4&&q(l,1)):(l=Du(f),l.c(),q(l,1),l.m(s.parentNode,s)):l&&(bt(),x(l,1,1,()=>{l=null}),wt()),Nn(i,h=_n(c,[li(f[7]),{"data-svnav-route-end":f[5]}]))},i(f){r||(q(l),r=!0)},o(f){x(l),r=!1},d(f){f&&w(e),f&&w(n),l&&l.d(f),f&&w(s),f&&w(i)}}}const ay=pp();function ly(t,e,n){let s;const i=["path","component","meta","primary"];let r=bo(e,i),o,a,l,c,{$$slots:h={},$$scope:f}=e,{path:d=""}=e,{component:m=null}=e,{meta:_={}}=e,{primary:y=!0}=e;Tr(Jo,e);const v=ay(),{registerRoute:E,unregisterRoute:T,activeRoute:L,disableInlineStyles:D}=ks(yi);Pe(t,L,H=>n(16,o=H));const U=Rp();Pe(t,U,H=>n(17,l=H));const W=Dp();Pe(t,W,H=>n(3,a=H));const O=yt(null);let F;const G=yt(),P=yt({});Pe(t,P,H=>n(4,c=H)),Xi(gp,G),Xi(dv,P),Xi(pv,O);const Z=Zs();return Es||wr(()=>T(v)),t.$$set=H=>{n(24,e=Lt(Lt({},e),yo(H))),n(12,r=bo(e,i)),"path"in H&&n(13,d=H.path),"component"in H&&n(0,m=H.component),"meta"in H&&n(14,_=H.meta),"primary"in H&&n(1,y=H.primary),"$$scope"in H&&n(19,f=H.$$scope)},t.$$.update=()=>{if(t.$$.dirty&155658){const H=d==="",Q=Er(l,d),N={id:v,path:d,meta:_,default:H,fullPath:H?"":Q,base:H?l:Lv(Q,a.pathname),primary:y,focusElement:O};G.set(N),n(15,F=E(N))}if(t.$$.dirty&98304&&n(2,s=!!(F||o&&o.id===v)),t.$$.dirty&98308&&s){const{params:H}=F||o;P.set(H)}},e=yo(e),[m,y,s,a,c,v,L,D,U,W,P,Z,r,d,_,F,o,l,h,f]}class Pn extends Xe{constructor(e){super(),Ye(this,e,ly,oy,Ge,{path:13,component:0,meta:14,primary:1})}}function cy(t){let e,n,s,i;const r=t[13].default,o=Kl(r,t,t[12],null);let a=[{href:t[0]},t[2],t[1]],l={};for(let c=0;c<a.length;c+=1)l=Lt(l,a[c]);return{c(){e=p("a"),o&&o.c(),Nn(e,l)},m(c,h){k(c,e,h),o&&o.m(e,null),n=!0,s||(i=j(e,"click",t[4]),s=!0)},p(c,[h]){o&&o.p&&(!n||h&4096)&&Wl(o,r,c,c[12],n?Gl(r,c[12],h,null):Ql(c[12]),null),Nn(e,l=_n(a,[(!n||h&1)&&{href:c[0]},h&4&&c[2],h&2&&c[1]]))},i(c){n||(q(o,c),n=!0)},o(c){x(o,c),n=!1},d(c){c&&w(e),o&&o.d(c),s=!1,i()}}}function uy(t,e,n){let s,i,r,o,a,l;const c=["to","replace","state","getProps"];let h=bo(e,c),f,{$$slots:d={},$$scope:m}=e,{to:_}=e,{replace:y=!1}=e,{state:v={}}=e,{getProps:E=null}=e;Tr(Jl,e);const T=Dp();Pe(t,T,O=>n(11,f=O));const L=lp(),D=Np(),{navigate:U}=Pp();function W(O){L("click",O),cv(O)&&(O.preventDefault(),U(s,{state:v,replace:o||y}))}return t.$$set=O=>{n(19,e=Lt(Lt({},e),yo(O))),n(18,h=bo(e,c)),"to"in O&&n(5,_=O.to),"replace"in O&&n(6,y=O.replace),"state"in O&&n(7,v=O.state),"getProps"in O&&n(8,E=O.getProps),"$$scope"in O&&n(12,m=O.$$scope)},t.$$.update=()=>{t.$$.dirty&2080&&n(0,s=D(_,f)),t.$$.dirty&2049&&n(10,i=hl(f.pathname,s)),t.$$.dirty&2049&&n(9,r=s===f.pathname),t.$$.dirty&2049&&(o=Zl(s)===Nv(f)),t.$$.dirty&512&&n(2,a=r?{"aria-current":"page"}:{}),n(1,l=(()=>{if(fp(E)){const O=E({location:f,href:s,isPartiallyCurrent:i,isCurrent:r});return{...h,...O}}return h})())},e=yo(e),[s,l,a,T,W,_,y,v,E,r,i,f,m,d]}class un extends Xe{constructor(e){super(),Ye(this,e,uy,cy,Ge,{to:5,replace:6,state:7,getProps:8})}}const Op="/to-deploy-mh/assets/logoMH.9387adb0.png",hy="/to-deploy-mh/assets/menu.9ddfd9f8.svg",je=yt(""),fl=yt([]),Lp=yt([]),Ls=yt([]),di=yt(),et=yt({typeContact:"",name:"",lastname:"",lastContact:"",telephon:"",email:"",selecMC:"",propCont:"",comContact:"",rangeProp:"",contMode:"",budget:"",numBeds:"",numBaths:"",halfBathroom:"",numParks:"",modePay:"",selecTP:"",contactType:"",contactStage:"",createdAt:"",locaProperty:[],tagsProperty:[],sendedProperties:[]}),We=yt({typeProperty:"",typeSaller:"",claveEB:"",claveMH:"",createdAt:"",nameProperty:"",price:"",beds:"",bathroom:"",halfBathroom:"",park:"",areaBuilding:"",areaTotal:"",description:"",urlImage:"",urlProp:"",urlSinergy:"",colonia:"",rangeProp:"",selectTP:"",selecTO:"",typeOperation:"",tagsProperty:[],locaProperty:[],binnacle:[]}),as=yt({task:"",isComplete:"",createdAt:"",endTask:"",timeTask:"",notes:"",user:"",id:""}),fs=yt({date:"",commBinnacle:"",action:"",to:""}),fy=["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","S\xE1bado"],dy=["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"];function kt(t){t=new Date(t);let e=t.getDate();typeof t!="string"&&(e=e+1),e<10&&(e="0"+e);let n=dy[t.getMonth()],s=t.getFullYear();return`${e}/${n}/${s}`}function Pu(t){t=new Date(t);let e=t.getMinutes();e.length<2&&(e="0"+e);let n=t.getHours();return n>12&&(n=n-12),n<10&&(n="0"+n),t.getDate(),`${n}:${e}`}function Ru(t){return t=new Date(+t),`${fy[t.getDay()]}-`}/**
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
 */const Mp=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},py=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},$p={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,h=r>>2,f=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,m=c&63;l||(m=64,o||(d=64)),s.push(n[h],n[f],n[d],n[m])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Mp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):py(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||f==null)throw Error();const d=r<<2|a>>4;if(s.push(d),c!==64){const m=a<<4&240|c>>2;if(s.push(m),f!==64){const _=c<<6&192|f;s.push(_)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},my=function(t){const e=Mp(t);return $p.encodeByteArray(e,!0)},To=function(t){return my(t).replace(/\./g,"")},Up=function(t){try{return $p.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Xt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function gy(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Xt())}function _y(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function vy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function yy(){const t=Xt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function by(){return typeof indexedDB=="object"}function wy(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}function ky(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ey=()=>ky().__FIREBASE_DEFAULTS__,Ty=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t=process.env.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Iy=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Up(t[1]);return e&&JSON.parse(e)},tc=()=>{try{return Ey()||Ty()||Iy()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Fp=t=>{var e,n;return(n=(e=tc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Sy=t=>{const e=Fp(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Cy=()=>{var t;return(t=tc())===null||t===void 0?void 0:t.config},Bp=t=>{var e;return(e=tc())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Ay{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Dy(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[To(JSON.stringify(n)),To(JSON.stringify(o)),a].join(".")}/**
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
 */const Py="FirebaseError";class ns extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Py,Object.setPrototypeOf(this,ns.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ir.prototype.create)}}class Ir{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Ry(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new ns(i,a,s)}}function Ry(t,e){return t.replace(Ny,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Ny=/\{\$([^}]+)}/g;function Oy(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Io(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Nu(r)&&Nu(o)){if(!Io(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Nu(t){return t!==null&&typeof t=="object"}/**
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
 */function Sr(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Hi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function zi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Ly(t,e){const n=new My(t,e);return n.subscribe.bind(n)}class My{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");$y(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=Va),i.error===void 0&&(i.error=Va),i.complete===void 0&&(i.complete=Va);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function $y(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Va(){}/**
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
 */function Jt(t){return t&&t._delegate?t._delegate:t}class Gs{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Os="[DEFAULT]";/**
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
 */class Uy{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Ay;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(By(e))try{this.getOrInitializeService({instanceIdentifier:Os})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Os){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Os){return this.instances.has(e)}getOptions(e=Os){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Fy(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Os){return this.component?this.component.multipleInstances?e:Os:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Fy(t){return t===Os?void 0:t}function By(t){return t.instantiationMode==="EAGER"}/**
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
 */class Vy{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Uy(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ke;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ke||(Ke={}));const jy={debug:Ke.DEBUG,verbose:Ke.VERBOSE,info:Ke.INFO,warn:Ke.WARN,error:Ke.ERROR,silent:Ke.SILENT},qy=Ke.INFO,Hy={[Ke.DEBUG]:"log",[Ke.VERBOSE]:"log",[Ke.INFO]:"info",[Ke.WARN]:"warn",[Ke.ERROR]:"error"},zy=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=Hy[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class nc{constructor(e){this.name=e,this._logLevel=qy,this._logHandler=zy,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ke))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?jy[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ke.DEBUG,...e),this._logHandler(this,Ke.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ke.VERBOSE,...e),this._logHandler(this,Ke.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ke.INFO,...e),this._logHandler(this,Ke.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ke.WARN,...e),this._logHandler(this,Ke.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ke.ERROR,...e),this._logHandler(this,Ke.ERROR,...e)}}const Ky=(t,e)=>e.some(n=>t instanceof n);let Ou,Lu;function Gy(){return Ou||(Ou=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Wy(){return Lu||(Lu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Vp=new WeakMap,dl=new WeakMap,jp=new WeakMap,ja=new WeakMap,sc=new WeakMap;function Qy(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(ps(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Vp.set(n,t)}).catch(()=>{}),sc.set(e,t),e}function Yy(t){if(dl.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});dl.set(t,e)}let pl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return dl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||jp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ps(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Xy(t){pl=t(pl)}function Jy(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(qa(this),e,...n);return jp.set(s,e.sort?e.sort():[e]),ps(s)}:Wy().includes(t)?function(...e){return t.apply(qa(this),e),ps(Vp.get(this))}:function(...e){return ps(t.apply(qa(this),e))}}function xy(t){return typeof t=="function"?Jy(t):(t instanceof IDBTransaction&&Yy(t),Ky(t,Gy())?new Proxy(t,pl):t)}function ps(t){if(t instanceof IDBRequest)return Qy(t);if(ja.has(t))return ja.get(t);const e=xy(t);return e!==t&&(ja.set(t,e),sc.set(e,t)),e}const qa=t=>sc.get(t);function Zy(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=ps(o);return s&&o.addEventListener("upgradeneeded",l=>{s(ps(o.result),l.oldVersion,l.newVersion,ps(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const e0=["get","getKey","getAll","getAllKeys","count"],t0=["put","add","delete","clear"],Ha=new Map;function Mu(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ha.get(e))return Ha.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=t0.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||e0.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Ha.set(e,r),r}Xy(t=>({...t,get:(e,n,s)=>Mu(e,n)||t.get(e,n,s),has:(e,n)=>!!Mu(e,n)||t.has(e,n)}));/**
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
 */class n0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(s0(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function s0(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ml="@firebase/app",$u="0.8.2";/**
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
 */const Ws=new nc("@firebase/app"),i0="@firebase/app-compat",r0="@firebase/analytics-compat",o0="@firebase/analytics",a0="@firebase/app-check-compat",l0="@firebase/app-check",c0="@firebase/auth",u0="@firebase/auth-compat",h0="@firebase/database",f0="@firebase/database-compat",d0="@firebase/functions",p0="@firebase/functions-compat",m0="@firebase/installations",g0="@firebase/installations-compat",_0="@firebase/messaging",v0="@firebase/messaging-compat",y0="@firebase/performance",b0="@firebase/performance-compat",w0="@firebase/remote-config",k0="@firebase/remote-config-compat",E0="@firebase/storage",T0="@firebase/storage-compat",I0="@firebase/firestore",S0="@firebase/firestore-compat",C0="firebase",A0="9.12.1";/**
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
 */const gl="[DEFAULT]",D0={[ml]:"fire-core",[i0]:"fire-core-compat",[o0]:"fire-analytics",[r0]:"fire-analytics-compat",[l0]:"fire-app-check",[a0]:"fire-app-check-compat",[c0]:"fire-auth",[u0]:"fire-auth-compat",[h0]:"fire-rtdb",[f0]:"fire-rtdb-compat",[d0]:"fire-fn",[p0]:"fire-fn-compat",[m0]:"fire-iid",[g0]:"fire-iid-compat",[_0]:"fire-fcm",[v0]:"fire-fcm-compat",[y0]:"fire-perf",[b0]:"fire-perf-compat",[w0]:"fire-rc",[k0]:"fire-rc-compat",[E0]:"fire-gcs",[T0]:"fire-gcs-compat",[I0]:"fire-fst",[S0]:"fire-fst-compat","fire-js":"fire-js",[C0]:"fire-js-all"};/**
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
 */const So=new Map,_l=new Map;function P0(t,e){try{t.container.addComponent(e)}catch(n){Ws.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function bi(t){const e=t.name;if(_l.has(e))return Ws.debug(`There were multiple attempts to register component ${e}.`),!1;_l.set(e,t);for(const n of So.values())P0(n,t);return!0}function ic(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const R0={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ms=new Ir("app","Firebase",R0);/**
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
 */class N0{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Gs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ms.create("app-deleted",{appName:this._name})}}/**
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
 */const Cr=A0;function qp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:gl,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw ms.create("bad-app-name",{appName:String(i)});if(n||(n=Cy()),!n)throw ms.create("no-options");const r=So.get(i);if(r){if(Io(n,r.options)&&Io(s,r.config))return r;throw ms.create("duplicate-app",{appName:i})}const o=new Vy(i);for(const l of _l.values())o.addComponent(l);const a=new N0(n,s,o);return So.set(i,a),a}function Hp(t=gl){const e=So.get(t);if(!e&&t===gl)return qp();if(!e)throw ms.create("no-app",{appName:t});return e}function gs(t,e,n){var s;let i=(s=D0[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ws.warn(a.join(" "));return}bi(new Gs(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const O0="firebase-heartbeat-database",L0=1,ir="firebase-heartbeat-store";let za=null;function zp(){return za||(za=Zy(O0,L0,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ir)}}}).catch(t=>{throw ms.create("idb-open",{originalErrorMessage:t.message})})),za}async function M0(t){var e;try{return(await zp()).transaction(ir).objectStore(ir).get(Kp(t))}catch(n){if(n instanceof ns)Ws.warn(n.message);else{const s=ms.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});Ws.warn(s.message)}}}async function Uu(t,e){var n;try{const i=(await zp()).transaction(ir,"readwrite");return await i.objectStore(ir).put(e,Kp(t)),i.done}catch(s){if(s instanceof ns)Ws.warn(s.message);else{const i=ms.create("idb-set",{originalErrorMessage:(n=s)===null||n===void 0?void 0:n.message});Ws.warn(i.message)}}}function Kp(t){return`${t.name}!${t.options.appId}`}/**
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
 */const $0=1024,U0=30*24*60*60*1e3;class F0{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new V0(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Fu();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=U0}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Fu(),{heartbeatsToSend:n,unsentEntries:s}=B0(this._heartbeatsCache.heartbeats),i=To(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Fu(){return new Date().toISOString().substring(0,10)}function B0(t,e=$0){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Bu(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Bu(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class V0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return by()?wy().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await M0(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Uu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Uu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Bu(t){return To(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function j0(t){bi(new Gs("platform-logger",e=>new n0(e),"PRIVATE")),bi(new Gs("heartbeat",e=>new F0(e),"PRIVATE")),gs(ml,$u,t),gs(ml,$u,"esm2017"),gs("fire-js","")}j0("");var q0="firebase",H0="9.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */gs(q0,H0,"app");var z0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},_e,rc=rc||{},Ie=z0||self;function Co(){}function xo(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ar(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function K0(t){return Object.prototype.hasOwnProperty.call(t,Ka)&&t[Ka]||(t[Ka]=++G0)}var Ka="closure_uid_"+(1e9*Math.random()>>>0),G0=0;function W0(t,e,n){return t.call.apply(t.bind,arguments)}function Q0(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Wt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Wt=W0:Wt=Q0,Wt.apply(null,arguments)}function to(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function qt(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function As(){this.s=this.s,this.o=this.o}var Y0=0;As.prototype.s=!1;As.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Y0!=0)&&K0(this)};As.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Gp=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function oc(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Vu(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(xo(s)){const i=t.length||0,r=s.length||0;t.length=i+r;for(let o=0;o<r;o++)t[i+o]=s[o]}else t.push(s)}}function Qt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Qt.prototype.h=function(){this.defaultPrevented=!0};var X0=function(){if(!Ie.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Ie.addEventListener("test",Co,e),Ie.removeEventListener("test",Co,e)}catch{}return t}();function Ao(t){return/^[\s\xa0]*$/.test(t)}var ju=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Ga(t,e){return t<e?-1:t>e?1:0}function Zo(){var t=Ie.navigator;return t&&(t=t.userAgent)?t:""}function Rn(t){return Zo().indexOf(t)!=-1}function ac(t){return ac[" "](t),t}ac[" "]=Co;function J0(t){var e=e1;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var x0=Rn("Opera"),wi=Rn("Trident")||Rn("MSIE"),Wp=Rn("Edge"),vl=Wp||wi,Qp=Rn("Gecko")&&!(Zo().toLowerCase().indexOf("webkit")!=-1&&!Rn("Edge"))&&!(Rn("Trident")||Rn("MSIE"))&&!Rn("Edge"),Z0=Zo().toLowerCase().indexOf("webkit")!=-1&&!Rn("Edge");function Yp(){var t=Ie.document;return t?t.documentMode:void 0}var Do;e:{var Wa="",Qa=function(){var t=Zo();if(Qp)return/rv:([^\);]+)(\)|;)/.exec(t);if(Wp)return/Edge\/([\d\.]+)/.exec(t);if(wi)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Z0)return/WebKit\/(\S+)/.exec(t);if(x0)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Qa&&(Wa=Qa?Qa[1]:""),wi){var Ya=Yp();if(Ya!=null&&Ya>parseFloat(Wa)){Do=String(Ya);break e}}Do=Wa}var e1={};function t1(){return J0(function(){let t=0;const e=ju(String(Do)).split("."),n=ju("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;t=Ga(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||Ga(i[2].length==0,r[2].length==0)||Ga(i[2],r[2]),i=i[3],r=r[3]}while(t==0)}return 0<=t})}var yl;if(Ie.document&&wi){var qu=Yp();yl=qu||parseInt(Do,10)||void 0}else yl=void 0;var n1=yl;function rr(t,e){if(Qt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Qp){e:{try{ac(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:s1[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&rr.X.h.call(this)}}qt(rr,Qt);var s1={2:"touch",3:"pen",4:"mouse"};rr.prototype.h=function(){rr.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Dr="closure_listenable_"+(1e6*Math.random()|0),i1=0;function r1(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=i,this.key=++i1,this.ba=this.ea=!1}function ea(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function lc(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Xp(t){const e={};for(const n in t)e[n]=t[n];return e}const Hu="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Jp(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<Hu.length;r++)n=Hu[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function ta(t){this.src=t,this.g={},this.h=0}ta.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=wl(t,e,s,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new r1(e,this.src,r,!!s,i),e.ea=n,t.push(e)),e};function bl(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=Gp(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(ea(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function wl(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==s)return i}return-1}var cc="closure_lm_"+(1e6*Math.random()|0),Xa={};function xp(t,e,n,s,i){if(s&&s.once)return em(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)xp(t,e[r],n,s,i);return null}return n=fc(n),t&&t[Dr]?t.N(e,n,Ar(s)?!!s.capture:!!s,i):Zp(t,e,n,!1,s,i)}function Zp(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=Ar(i)?!!i.capture:!!i,a=hc(t);if(a||(t[cc]=a=new ta(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=o1(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)X0||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(nm(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function o1(){function t(n){return e.call(t.src,t.listener,n)}const e=a1;return t}function em(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)em(t,e[r],n,s,i);return null}return n=fc(n),t&&t[Dr]?t.O(e,n,Ar(s)?!!s.capture:!!s,i):Zp(t,e,n,!0,s,i)}function tm(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)tm(t,e[r],n,s,i);else s=Ar(s)?!!s.capture:!!s,n=fc(n),t&&t[Dr]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=wl(r,n,s,i),-1<n&&(ea(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=hc(t))&&(e=t.g[e.toString()],t=-1,e&&(t=wl(e,n,s,i)),(n=-1<t?e[t]:null)&&uc(n))}function uc(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Dr])bl(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(nm(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=hc(e))?(bl(n,t),n.h==0&&(n.src=null,e[cc]=null)):ea(t)}}}function nm(t){return t in Xa?Xa[t]:Xa[t]="on"+t}function a1(t,e){if(t.ba)t=!0;else{e=new rr(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&uc(t),t=n.call(s,e)}return t}function hc(t){return t=t[cc],t instanceof ta?t:null}var Ja="__closure_events_fn_"+(1e9*Math.random()>>>0);function fc(t){return typeof t=="function"?t:(t[Ja]||(t[Ja]=function(e){return t.handleEvent(e)}),t[Ja])}function Mt(){As.call(this),this.i=new ta(this),this.P=this,this.I=null}qt(Mt,As);Mt.prototype[Dr]=!0;Mt.prototype.removeEventListener=function(t,e,n,s){tm(this,t,e,n,s)};function jt(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new Qt(e,t);else if(e instanceof Qt)e.target=e.target||t;else{var i=e;e=new Qt(s,t),Jp(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=no(o,s,!0,e)&&i}if(o=e.g=t,i=no(o,s,!0,e)&&i,i=no(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=no(o,s,!1,e)&&i}Mt.prototype.M=function(){if(Mt.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)ea(n[s]);delete t.g[e],t.h--}}this.I=null};Mt.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Mt.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function no(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&bl(t.i,o),i=a.call(l,s)!==!1&&i}}return i&&!s.defaultPrevented}var dc=Ie.JSON.stringify;function l1(){var t=rm;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class c1{constructor(){this.h=this.g=null}add(e,n){const s=sm.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var sm=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new u1,t=>t.reset());class u1{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function h1(t){Ie.setTimeout(()=>{throw t},0)}function im(t,e){kl||f1(),El||(kl(),El=!0),rm.add(t,e)}var kl;function f1(){var t=Ie.Promise.resolve(void 0);kl=function(){t.then(d1)}}var El=!1,rm=new c1;function d1(){for(var t;t=l1();){try{t.h.call(t.g)}catch(n){h1(n)}var e=sm;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}El=!1}function na(t,e){Mt.call(this),this.h=t||1,this.g=e||Ie,this.j=Wt(this.lb,this),this.l=Date.now()}qt(na,Mt);_e=na.prototype;_e.ca=!1;_e.R=null;_e.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),jt(this,"tick"),this.ca&&(pc(this),this.start()))}};_e.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function pc(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}_e.M=function(){na.X.M.call(this),pc(this),delete this.g};function mc(t,e,n){if(typeof t=="function")n&&(t=Wt(t,n));else if(t&&typeof t.handleEvent=="function")t=Wt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Ie.setTimeout(t,e||0)}function om(t){t.g=mc(()=>{t.g=null,t.i&&(t.i=!1,om(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class p1 extends As{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:om(this)}M(){super.M(),this.g&&(Ie.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function or(t){As.call(this),this.h=t,this.g={}}qt(or,As);var zu=[];function am(t,e,n,s){Array.isArray(n)||(n&&(zu[0]=n.toString()),n=zu);for(var i=0;i<n.length;i++){var r=xp(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function lm(t){lc(t.g,function(e,n){this.g.hasOwnProperty(n)&&uc(e)},t),t.g={}}or.prototype.M=function(){or.X.M.call(this),lm(this)};or.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function sa(){this.g=!0}sa.prototype.Aa=function(){this.g=!1};function m1(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var h=c[0];c=c[1];var f=h.split("_");o=2<=f.length&&f[1]=="type"?o+(h+"="+c+"&"):o+(h+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function g1(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function ci(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+v1(t,n)+(s?" "+s:"")})}function _1(t,e){t.info(function(){return"TIMEOUT: "+e})}sa.prototype.info=function(){};function v1(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return dc(n)}catch{return e}}var ei={},Ku=null;function ia(){return Ku=Ku||new Mt}ei.Pa="serverreachability";function cm(t){Qt.call(this,ei.Pa,t)}qt(cm,Qt);function ar(t){const e=ia();jt(e,new cm(e))}ei.STAT_EVENT="statevent";function um(t,e){Qt.call(this,ei.STAT_EVENT,t),this.stat=e}qt(um,Qt);function tn(t){const e=ia();jt(e,new um(e,t))}ei.Qa="timingevent";function hm(t,e){Qt.call(this,ei.Qa,t),this.size=e}qt(hm,Qt);function Pr(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Ie.setTimeout(function(){t()},e)}var ra={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},fm={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function gc(){}gc.prototype.h=null;function Gu(t){return t.h||(t.h=t.i())}function dm(){}var Rr={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function _c(){Qt.call(this,"d")}qt(_c,Qt);function vc(){Qt.call(this,"c")}qt(vc,Qt);var Tl;function oa(){}qt(oa,gc);oa.prototype.g=function(){return new XMLHttpRequest};oa.prototype.i=function(){return{}};Tl=new oa;function Nr(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new or(this),this.O=y1,t=vl?125:void 0,this.T=new na(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new pm}function pm(){this.i=null,this.g="",this.h=!1}var y1=45e3,Il={},Po={};_e=Nr.prototype;_e.setTimeout=function(t){this.O=t};function Sl(t,e,n){t.K=1,t.v=la(Jn(e)),t.s=n,t.P=!0,mm(t,null)}function mm(t,e){t.F=Date.now(),Or(t),t.A=Jn(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),Em(n.i,"t",s),t.C=0,n=t.l.H,t.h=new pm,t.g=zm(t.l,n?e:null,!t.s),0<t.N&&(t.L=new p1(Wt(t.La,t,t.g),t.N)),am(t.S,t.g,"readystatechange",t.ib),e=t.H?Xp(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),ar(),m1(t.j,t.u,t.A,t.m,t.U,t.s)}_e.ib=function(t){t=t.target;const e=this.L;e&&Kn(t)==3?e.l():this.La(t)};_e.La=function(t){try{if(t==this.g)e:{const h=Kn(this.g);var e=this.g.Ea();const f=this.g.aa();if(!(3>h)&&(h!=3||vl||this.g&&(this.h.h||this.g.fa()||Xu(this.g)))){this.I||h!=4||e==7||(e==8||0>=f?ar(3):ar(2)),aa(this);var n=this.g.aa();this.Y=n;t:if(gm(this)){var s=Xu(this.g);t="";var i=s.length,r=Kn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ms(this),Ji(this);var o="";break t}this.h.i=new Ie.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,g1(this.j,this.u,this.A,this.m,this.U,h,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ao(a)){var c=a;break t}}c=null}if(n=c)ci(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Cl(this,n);else{this.i=!1,this.o=3,tn(12),Ms(this),Ji(this);break e}}this.P?(_m(this,h,o),vl&&this.i&&h==3&&(am(this.S,this.T,"tick",this.hb),this.T.start())):(ci(this.j,this.m,o,null),Cl(this,o)),h==4&&Ms(this),this.i&&!this.I&&(h==4?Vm(this.l,this):(this.i=!1,Or(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,tn(12)):(this.o=0,tn(13)),Ms(this),Ji(this)}}}catch{}finally{}};function gm(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function _m(t,e,n){let s=!0,i;for(;!t.I&&t.C<n.length;)if(i=b1(t,n),i==Po){e==4&&(t.o=4,tn(14),s=!1),ci(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Il){t.o=4,tn(15),ci(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else ci(t.j,t.m,i,null),Cl(t,i);gm(t)&&i!=Po&&i!=Il&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,tn(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ic(e),e.K=!0,tn(11))):(ci(t.j,t.m,n,"[Invalid Chunked Response]"),Ms(t),Ji(t))}_e.hb=function(){if(this.g){var t=Kn(this.g),e=this.g.fa();this.C<e.length&&(aa(this),_m(this,t,e),this.i&&t!=4&&Or(this))}};function b1(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Po:(n=Number(e.substring(n,s)),isNaN(n)?Il:(s+=1,s+n>e.length?Po:(e=e.substr(s,n),t.C=s+n,e)))}_e.cancel=function(){this.I=!0,Ms(this)};function Or(t){t.V=Date.now()+t.O,vm(t,t.O)}function vm(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Pr(Wt(t.gb,t),e)}function aa(t){t.B&&(Ie.clearTimeout(t.B),t.B=null)}_e.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(_1(this.j,this.A),this.K!=2&&(ar(),tn(17)),Ms(this),this.o=2,Ji(this)):vm(this,this.V-t)};function Ji(t){t.l.G==0||t.I||Vm(t.l,t)}function Ms(t){aa(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,pc(t.T),lm(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Cl(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Al(n.h,t))){if(!t.J&&Al(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Oo(n),ha(n);else break e;Tc(n),tn(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=Pr(Wt(n.cb,n),6e3));if(1>=Sm(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else $s(n,11)}else if((t.J||n.g==t)&&Oo(n),!Ao(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.T=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.I=c[1],n.ka=c[2];const h=c[3];h!=null&&(n.ma=h,n.j.info("VER="+n.ma));const f=c[4];f!=null&&(n.Ca=f,n.j.info("SVER="+n.Ca));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const m=t.g;if(m){const _=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_){var r=s.h;r.g||_.indexOf("spdy")==-1&&_.indexOf("quic")==-1&&_.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(yc(r,r.h),r.h=null))}if(s.D){const y=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(s.za=y,it(s.F,s.D,y))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=Hm(s,s.H?s.ka:null,s.V),o.J){Cm(s.h,o);var a=o,l=s.J;l&&a.setTimeout(l),a.B&&(aa(a),Or(a)),s.g=o}else Fm(s);0<n.i.length&&fa(n)}else c[0]!="stop"&&c[0]!="close"||$s(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?$s(n,7):Ec(n):c[0]!="noop"&&n.l&&n.l.wa(c),n.A=0)}}ar(4)}catch{}}function w1(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(xo(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function k1(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(xo(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function ym(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(xo(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=k1(t),s=w1(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}var bm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function E1(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Bs(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Bs){this.h=e!==void 0?e:t.h,Ro(this,t.j),this.s=t.s,this.g=t.g,No(this,t.m),this.l=t.l,e=t.i;var n=new lr;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Wu(this,n),this.o=t.o}else t&&(n=String(t).match(bm))?(this.h=!!e,Ro(this,n[1]||"",!0),this.s=Ki(n[2]||""),this.g=Ki(n[3]||"",!0),No(this,n[4]),this.l=Ki(n[5]||"",!0),Wu(this,n[6]||"",!0),this.o=Ki(n[7]||"")):(this.h=!!e,this.i=new lr(null,this.h))}Bs.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Gi(e,Qu,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Gi(e,Qu,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Gi(n,n.charAt(0)=="/"?S1:I1,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Gi(n,A1)),t.join("")};function Jn(t){return new Bs(t)}function Ro(t,e,n){t.j=n?Ki(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function No(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Wu(t,e,n){e instanceof lr?(t.i=e,D1(t.i,t.h)):(n||(e=Gi(e,C1)),t.i=new lr(e,t.h))}function it(t,e,n){t.i.set(e,n)}function la(t){return it(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ki(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Gi(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,T1),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function T1(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Qu=/[#\/\?@]/g,I1=/[#\?:]/g,S1=/[#\?]/g,C1=/[#\?@]/g,A1=/#/g;function lr(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ds(t){t.g||(t.g=new Map,t.h=0,t.i&&E1(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}_e=lr.prototype;_e.add=function(t,e){Ds(this),this.i=null,t=Pi(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function wm(t,e){Ds(t),e=Pi(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function km(t,e){return Ds(t),e=Pi(t,e),t.g.has(e)}_e.forEach=function(t,e){Ds(this),this.g.forEach(function(n,s){n.forEach(function(i){t.call(e,i,s,this)},this)},this)};_e.oa=function(){Ds(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let r=0;r<i.length;r++)n.push(e[s])}return n};_e.W=function(t){Ds(this);let e=[];if(typeof t=="string")km(this,t)&&(e=e.concat(this.g.get(Pi(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};_e.set=function(t,e){return Ds(this),this.i=null,t=Pi(this,t),km(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};_e.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function Em(t,e,n){wm(t,e),0<n.length&&(t.i=null,t.g.set(Pi(t,e),oc(n)),t.h+=n.length)}_e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};function Pi(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function D1(t,e){e&&!t.j&&(Ds(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(wm(this,s),Em(this,i,n))},t)),t.j=e}var P1=class{constructor(t,e){this.h=t,this.g=e}};function Tm(t){this.l=t||R1,Ie.PerformanceNavigationTiming?(t=Ie.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Ie.g&&Ie.g.Ga&&Ie.g.Ga()&&Ie.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var R1=10;function Im(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Sm(t){return t.h?1:t.g?t.g.size:0}function Al(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function yc(t,e){t.g?t.g.add(e):t.h=e}function Cm(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Tm.prototype.cancel=function(){if(this.i=Am(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Am(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return oc(t.i)}function bc(){}bc.prototype.stringify=function(t){return Ie.JSON.stringify(t,void 0)};bc.prototype.parse=function(t){return Ie.JSON.parse(t,void 0)};function N1(){this.g=new bc}function O1(t,e,n){const s=n||"";try{ym(t,function(i,r){let o=i;Ar(i)&&(o=dc(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function L1(t,e){const n=new sa;if(Ie.Image){const s=new Image;s.onload=to(so,n,s,"TestLoadImage: loaded",!0,e),s.onerror=to(so,n,s,"TestLoadImage: error",!1,e),s.onabort=to(so,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=to(so,n,s,"TestLoadImage: timeout",!1,e),Ie.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function so(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function Lr(t){this.l=t.ac||null,this.j=t.jb||!1}qt(Lr,gc);Lr.prototype.g=function(){return new ca(this.l,this.j)};Lr.prototype.i=function(t){return function(){return t}}({});function ca(t,e){Mt.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=wc,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}qt(ca,Mt);var wc=0;_e=ca.prototype;_e.open=function(t,e){if(this.readyState!=wc)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,cr(this)};_e.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||Ie).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};_e.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Mr(this)),this.readyState=wc};_e.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,cr(this)),this.g&&(this.readyState=3,cr(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof Ie.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Dm(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function Dm(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}_e.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Mr(this):cr(this),this.readyState==3&&Dm(this)}};_e.Va=function(t){this.g&&(this.response=this.responseText=t,Mr(this))};_e.Ua=function(t){this.g&&(this.response=t,Mr(this))};_e.ga=function(){this.g&&Mr(this)};function Mr(t){t.readyState=4,t.l=null,t.j=null,t.A=null,cr(t)}_e.setRequestHeader=function(t,e){this.v.append(t,e)};_e.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};_e.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function cr(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(ca.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var M1=Ie.JSON.parse;function ct(t){Mt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Pm,this.K=this.L=!1}qt(ct,Mt);var Pm="",$1=/^https?$/i,U1=["POST","PUT"];_e=ct.prototype;_e.Ka=function(t){this.L=t};_e.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Tl.g(),this.C=this.u?Gu(this.u):Gu(Tl),this.g.onreadystatechange=Wt(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){Yu(this,r);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=Ie.FormData&&t instanceof Ie.FormData,!(0<=Gp(U1,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Om(this),0<this.B&&((this.K=F1(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Wt(this.qa,this)):this.A=mc(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){Yu(this,r)}};function F1(t){return wi&&t1()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}_e.qa=function(){typeof rc<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,jt(this,"timeout"),this.abort(8))};function Yu(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Rm(t),ua(t)}function Rm(t){t.D||(t.D=!0,jt(t,"complete"),jt(t,"error"))}_e.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,jt(this,"complete"),jt(this,"abort"),ua(this))};_e.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ua(this,!0)),ct.X.M.call(this)};_e.Ha=function(){this.s||(this.F||this.v||this.l?Nm(this):this.fb())};_e.fb=function(){Nm(this)};function Nm(t){if(t.h&&typeof rc<"u"&&(!t.C[1]||Kn(t)!=4||t.aa()!=2)){if(t.v&&Kn(t)==4)mc(t.Ha,0,t);else if(jt(t,"readystatechange"),Kn(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var i=String(t.H).match(bm)[1]||null;if(!i&&Ie.self&&Ie.self.location){var r=Ie.self.location.protocol;i=r.substr(0,r.length-1)}s=!$1.test(i?i.toLowerCase():"")}n=s}if(n)jt(t,"complete"),jt(t,"success");else{t.m=6;try{var o=2<Kn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",Rm(t)}}finally{ua(t)}}}}function ua(t,e){if(t.g){Om(t);const n=t.g,s=t.C[0]?Co:null;t.g=null,t.C=null,e||jt(t,"ready");try{n.onreadystatechange=s}catch{}}}function Om(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(Ie.clearTimeout(t.A),t.A=null)}function Kn(t){return t.g?t.g.readyState:0}_e.aa=function(){try{return 2<Kn(this)?this.g.status:-1}catch{return-1}};_e.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};_e.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),M1(e)}};function Xu(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Pm:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}_e.Ea=function(){return this.m};_e.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Lm(t){let e="";return lc(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function kc(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=Lm(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):it(t,e,n))}function Vi(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Mm(t){this.Ca=0,this.i=[],this.j=new sa,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Vi("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Vi("baseRetryDelayMs",5e3,t),this.bb=Vi("retryDelaySeedMs",1e4,t),this.$a=Vi("forwardChannelMaxRetries",2,t),this.ta=Vi("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Tm(t&&t.concurrentRequestLimit),this.Fa=new N1,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}_e=Mm.prototype;_e.ma=8;_e.G=1;function Ec(t){if($m(t),t.G==3){var e=t.U++,n=Jn(t.F);it(n,"SID",t.I),it(n,"RID",e),it(n,"TYPE","terminate"),$r(t,n),e=new Nr(t,t.j,e,void 0),e.K=2,e.v=la(Jn(n)),n=!1,Ie.navigator&&Ie.navigator.sendBeacon&&(n=Ie.navigator.sendBeacon(e.v.toString(),"")),!n&&Ie.Image&&(new Image().src=e.v,n=!0),n||(e.g=zm(e.l,null),e.g.da(e.v)),e.F=Date.now(),Or(e)}qm(t)}function ha(t){t.g&&(Ic(t),t.g.cancel(),t.g=null)}function $m(t){ha(t),t.u&&(Ie.clearTimeout(t.u),t.u=null),Oo(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&Ie.clearTimeout(t.m),t.m=null)}function fa(t){Im(t.h)||t.m||(t.m=!0,im(t.Ja,t),t.C=0)}function B1(t,e){return Sm(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Pr(Wt(t.Ja,t,e),jm(t,t.C)),t.C++,!0)}_e.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new Nr(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=Xp(r),Jp(r,this.S)):r=this.S),this.o!==null||this.N||(i.H=r,r=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Um(this,i,e),n=Jn(this.F),it(n,"RID",t),it(n,"CVER",22),this.D&&it(n,"X-HTTP-Session-Id",this.D),$r(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(Lm(r)))+"&"+e:this.o&&kc(n,this.o,r)),yc(this.h,i),this.Ya&&it(n,"TYPE","init"),this.O?(it(n,"$req",e),it(n,"SID","null"),i.Z=!0,Sl(i,n,null)):Sl(i,n,e),this.G=2}}else this.G==3&&(t?Ju(this,t):this.i.length==0||Im(this.h)||Ju(this))};function Ju(t,e){var n;e?n=e.m:n=t.U++;const s=Jn(t.F);it(s,"SID",t.I),it(s,"RID",n),it(s,"AID",t.T),$r(t,s),t.o&&t.s&&kc(s,t.o,t.s),n=new Nr(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Um(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),yc(t.h,n),Sl(n,s,e)}function $r(t,e){t.ia&&lc(t.ia,function(n,s){it(e,s,n)}),t.l&&ym({},function(n,s){it(e,s,n)})}function Um(t,e,n){n=Math.min(t.i.length,n);var s=t.l?Wt(t.l.Ra,t.l,t):null;e:{var i=t.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let c=i[l].h;const h=i[l].g;if(c-=r,0>c)r=Math.max(0,i[l].h-100),a=!1;else try{O1(h,o,"req"+c+"_")}catch{s&&s(h)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function Fm(t){t.g||t.u||(t.Z=1,im(t.Ia,t),t.A=0)}function Tc(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Pr(Wt(t.Ia,t),jm(t,t.A)),t.A++,!0)}_e.Ia=function(){if(this.u=null,Bm(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Pr(Wt(this.eb,this),t)}};_e.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,tn(10),ha(this),Bm(this))};function Ic(t){t.B!=null&&(Ie.clearTimeout(t.B),t.B=null)}function Bm(t){t.g=new Nr(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Jn(t.sa);it(e,"RID","rpc"),it(e,"SID",t.I),it(e,"CI",t.L?"0":"1"),it(e,"AID",t.T),it(e,"TYPE","xmlhttp"),$r(t,e),t.o&&t.s&&kc(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=la(Jn(e)),n.s=null,n.P=!0,mm(n,t)}_e.cb=function(){this.v!=null&&(this.v=null,ha(this),Tc(this),tn(19))};function Oo(t){t.v!=null&&(Ie.clearTimeout(t.v),t.v=null)}function Vm(t,e){var n=null;if(t.g==e){Oo(t),Ic(t),t.g=null;var s=2}else if(Al(t.h,e))n=e.D,Cm(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;s=ia(),jt(s,new hm(s,n)),fa(t)}else Fm(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(s==1&&B1(t,e)||s==2&&Tc(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:$s(t,5);break;case 4:$s(t,10);break;case 3:$s(t,6);break;default:$s(t,2)}}}function jm(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function $s(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=Wt(t.kb,t);n||(n=new Bs("//www.google.com/images/cleardot.gif"),Ie.location&&Ie.location.protocol=="http"||Ro(n,"https"),la(n)),L1(n.toString(),s)}else tn(2);t.G=0,t.l&&t.l.va(e),qm(t),$m(t)}_e.kb=function(t){t?(this.j.info("Successfully pinged google.com"),tn(2)):(this.j.info("Failed to ping google.com"),tn(1))};function qm(t){if(t.G=0,t.la=[],t.l){const e=Am(t.h);(e.length!=0||t.i.length!=0)&&(Vu(t.la,e),Vu(t.la,t.i),t.h.i.length=0,oc(t.i),t.i.length=0),t.l.ua()}}function Hm(t,e,n){var s=n instanceof Bs?Jn(n):new Bs(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),No(s,s.m);else{var i=Ie.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new Bs(null,void 0);s&&Ro(r,s),e&&(r.g=e),i&&No(r,i),n&&(r.l=n),s=r}return n=t.D,e=t.za,n&&e&&it(s,n,e),it(s,"VER",t.ma),$r(t,s),s}function zm(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new ct(new Lr({jb:!0})):new ct(t.ra),e.Ka(t.H),e}function Km(){}_e=Km.prototype;_e.xa=function(){};_e.wa=function(){};_e.va=function(){};_e.ua=function(){};_e.Ra=function(){};function Lo(){if(wi&&!(10<=Number(n1)))throw Error("Environmental error: no available transport.")}Lo.prototype.g=function(t,e){return new vn(t,e)};function vn(t,e){Mt.call(this),this.g=new Mm(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Ao(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ao(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ri(this)}qt(vn,Mt);vn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;tn(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Hm(t,null,t.V),fa(t)};vn.prototype.close=function(){Ec(this.g)};vn.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=dc(t),t=n);e.i.push(new P1(e.ab++,t)),e.G==3&&fa(e)};vn.prototype.M=function(){this.g.l=null,delete this.j,Ec(this.g),delete this.g,vn.X.M.call(this)};function Gm(t){_c.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}qt(Gm,_c);function Wm(){vc.call(this),this.status=1}qt(Wm,vc);function Ri(t){this.g=t}qt(Ri,Km);Ri.prototype.xa=function(){jt(this.g,"a")};Ri.prototype.wa=function(t){jt(this.g,new Gm(t))};Ri.prototype.va=function(t){jt(this.g,new Wm)};Ri.prototype.ua=function(){jt(this.g,"b")};Lo.prototype.createWebChannel=Lo.prototype.g;vn.prototype.send=vn.prototype.u;vn.prototype.open=vn.prototype.m;vn.prototype.close=vn.prototype.close;ra.NO_ERROR=0;ra.TIMEOUT=8;ra.HTTP_ERROR=6;fm.COMPLETE="complete";dm.EventType=Rr;Rr.OPEN="a";Rr.CLOSE="b";Rr.ERROR="c";Rr.MESSAGE="d";Mt.prototype.listen=Mt.prototype.N;ct.prototype.listenOnce=ct.prototype.O;ct.prototype.getLastError=ct.prototype.Oa;ct.prototype.getLastErrorCode=ct.prototype.Ea;ct.prototype.getStatus=ct.prototype.aa;ct.prototype.getResponseJson=ct.prototype.Sa;ct.prototype.getResponseText=ct.prototype.fa;ct.prototype.send=ct.prototype.da;ct.prototype.setWithCredentials=ct.prototype.Ka;var V1=function(){return new Lo},j1=function(){return ia()},xa=ra,q1=fm,H1=ei,xu={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},z1=Lr,io=dm,K1=ct;const Zu="@firebase/firestore";/**
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
 */class Kt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Kt.UNAUTHENTICATED=new Kt(null),Kt.GOOGLE_CREDENTIALS=new Kt("google-credentials-uid"),Kt.FIRST_PARTY=new Kt("first-party-uid"),Kt.MOCK_USER=new Kt("mock-user");/**
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
 */let Ni="9.12.1";/**
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
 */const Qs=new nc("@firebase/firestore");function eh(){return Qs.logLevel}function ye(t,...e){if(Qs.logLevel<=Ke.DEBUG){const n=e.map(Sc);Qs.debug(`Firestore (${Ni}): ${t}`,...n)}}function xn(t,...e){if(Qs.logLevel<=Ke.ERROR){const n=e.map(Sc);Qs.error(`Firestore (${Ni}): ${t}`,...n)}}function Dl(t,...e){if(Qs.logLevel<=Ke.WARN){const n=e.map(Sc);Qs.warn(`Firestore (${Ni}): ${t}`,...n)}}function Sc(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function Se(t="Unexpected state"){const e=`FIRESTORE (${Ni}) INTERNAL ASSERTION FAILED: `+t;throw xn(e),new Error(e)}function tt(t,e){t||Se()}function Ce(t,e){return t}/**
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
 */const ne={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Ee extends ns{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Qm{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class G1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Kt.UNAUTHENTICATED))}shutdown(){}}class W1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Q1{constructor(e){this.t=e,this.currentUser=Kt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=l=>this.i!==s?(s=this.i,n(l)):Promise.resolve();let r=new _s;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new _s,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{ye("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(ye("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new _s)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(ye("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(tt(typeof s.accessToken=="string"),new Qm(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return tt(e===null||typeof e=="string"),new Kt(e)}}class Y1{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i,this.type="FirstParty",this.user=Kt.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(tt(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class X1{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i}getToken(){return Promise.resolve(new Y1(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(Kt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class J1{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class x1{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=r=>{r.error!=null&&ye("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.A;return this.A=r.token,ye("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{ye("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.T.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.T.getImmediate({optional:!0});r?i(r):ye("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(tt(typeof n.token=="string"),this.A=n.token,new J1(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z1(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class Ym{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=Z1(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function Qe(t,e){return t<e?-1:t>e?1:0}function ki(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
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
 */class Tt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Ee(ne.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Ee(ne.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new Ee(ne.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Ee(ne.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Tt.fromMillis(Date.now())}static fromDate(e){return Tt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Tt(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Qe(this.nanoseconds,e.nanoseconds):Qe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Re{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Re(e)}static min(){return new Re(new Tt(0,0))}static max(){return new Re(new Tt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class ur{constructor(e,n,s){n===void 0?n=0:n>e.length&&Se(),s===void 0?s=e.length-n:s>e.length-n&&Se(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return ur.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ur?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class rt extends ur{construct(e,n,s){return new rt(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new Ee(ne.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new rt(n)}static emptyPath(){return new rt([])}}const eb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Gt extends ur{construct(e,n,s){return new Gt(e,n,s)}static isValidIdentifier(e){return eb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Gt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Gt(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new Ee(ne.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new Ee(ne.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new Ee(ne.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new Ee(ne.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Gt(n)}static emptyPath(){return new Gt([])}}/**
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
 */class ke{constructor(e){this.path=e}static fromPath(e){return new ke(rt.fromString(e))}static fromName(e){return new ke(rt.fromString(e).popFirst(5))}static empty(){return new ke(rt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&rt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return rt.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ke(new rt(e.slice()))}}function tb(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=Re.fromTimestamp(s===1e9?new Tt(n+1,0):new Tt(n,s));return new Ts(i,ke.empty(),e)}function nb(t){return new Ts(t.readTime,t.key,-1)}class Ts{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Ts(Re.min(),ke.empty(),-1)}static max(){return new Ts(Re.max(),ke.empty(),-1)}}function sb(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ke.comparator(t.documentKey,e.documentKey),n!==0?n:Qe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ib="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class rb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Ur(t){if(t.code!==ne.FAILED_PRECONDITION||t.message!==ib)throw t;ye("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class se{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Se(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new se((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof se?n:se.resolve(n)}catch(n){return se.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):se.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):se.reject(n)}static resolve(e){return new se((n,s)=>{n(e)})}static reject(e){return new se((n,s)=>{s(e)})}static waitFor(e){return new se((n,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},l=>s(l))}),o=!0,r===i&&n()})}static or(e){let n=se.resolve(!1);for(const s of e)n=n.next(i=>i?se.resolve(i):s());return n}static forEach(e,n){const s=[];return e.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(e,n){return new se((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let l=0;l<r;l++){const c=l;n(e[c]).next(h=>{o[c]=h,++a,a===r&&s(o)},h=>i(h))}})}static doWhile(e,n){return new se((s,i)=>{const r=()=>{e()===!0?n().next(()=>{r()},i):s()};r()})}}function Fr(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Cc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}/**
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
 */function th(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ti(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Xm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */Cc.at=-1;class St{constructor(e,n){this.comparator=e,this.root=n||Bt.EMPTY}insert(e,n){return new St(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Bt.BLACK,null,null))}remove(e){return new St(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Bt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ro(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ro(this.root,e,this.comparator,!1)}getReverseIterator(){return new ro(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ro(this.root,e,this.comparator,!0)}}class ro{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Bt{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s!=null?s:Bt.RED,this.left=i!=null?i:Bt.EMPTY,this.right=r!=null?r:Bt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new Bt(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Bt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Bt.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Bt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Bt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Se();const e=this.left.check();if(e!==this.right.check())throw Se();return e+(this.isRed()?0:1)}}Bt.EMPTY=null,Bt.RED=!0,Bt.BLACK=!1;Bt.EMPTY=new class{constructor(){this.size=0}get key(){throw Se()}get value(){throw Se()}get color(){throw Se()}get left(){throw Se()}get right(){throw Se()}copy(t,e,n,s,i){return this}insert(t,e,n){return new Bt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class It{constructor(e){this.comparator=e,this.data=new St(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new nh(this.data.getIterator())}getIteratorFrom(e){return new nh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof It)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new It(this.comparator);return n.data=e,n}}class nh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e){this.fields=e,e.sort(Gt.comparator)}static empty(){return new kn([])}unionWith(e){let n=new It(Gt.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new kn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ki(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new xt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(e);return new xt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Qe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}xt.EMPTY_BYTE_STRING=new xt("");const ob=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Is(t){if(tt(!!t),typeof t=="string"){let e=0;const n=ob.exec(t);if(tt(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:vt(t.seconds),nanos:vt(t.nanos)}}function vt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ei(t){return typeof t=="string"?xt.fromBase64String(t):xt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jm(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function xm(t){const e=t.mapValue.fields.__previous_value__;return Jm(e)?xm(e):e}function hr(t){const e=Is(t.mapValue.fields.__local_write_time__.timestampValue);return new Tt(e.seconds,e.nanos)}/**
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
 */class ab{constructor(e,n,s,i,r,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class fr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new fr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof fr&&e.projectId===this.projectId&&e.database===this.database}}function da(t){return t==null}function Mo(t){return t===0&&1/t==-1/0}function lb(t){return typeof t=="number"&&Number.isInteger(t)&&!Mo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oo={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ys(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Jm(t)?4:cb(t)?9007199254740991:10:Se()}function Un(t,e){if(t===e)return!0;const n=Ys(t);if(n!==Ys(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return hr(t).isEqual(hr(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=Is(s.timestampValue),o=Is(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Ei(s.bytesValue).isEqual(Ei(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return vt(s.geoPointValue.latitude)===vt(i.geoPointValue.latitude)&&vt(s.geoPointValue.longitude)===vt(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return vt(s.integerValue)===vt(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=vt(s.doubleValue),o=vt(i.doubleValue);return r===o?Mo(r)===Mo(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return ki(t.arrayValue.values||[],e.arrayValue.values||[],Un);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(th(r)!==th(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!Un(r[a],o[a])))return!1;return!0}(t,e);default:return Se()}}function dr(t,e){return(t.values||[]).find(n=>Un(n,e))!==void 0}function Ti(t,e){if(t===e)return 0;const n=Ys(t),s=Ys(e);if(n!==s)return Qe(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Qe(t.booleanValue,e.booleanValue);case 2:return function(i,r){const o=vt(i.integerValue||i.doubleValue),a=vt(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return sh(t.timestampValue,e.timestampValue);case 4:return sh(hr(t),hr(e));case 5:return Qe(t.stringValue,e.stringValue);case 6:return function(i,r){const o=Ei(i),a=Ei(r);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=Qe(o[l],a[l]);if(c!==0)return c}return Qe(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,r){const o=Qe(vt(i.latitude),vt(r.latitude));return o!==0?o:Qe(vt(i.longitude),vt(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=Ti(o[l],a[l]);if(c)return c}return Qe(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,r){if(i===oo.mapValue&&r===oo.mapValue)return 0;if(i===oo.mapValue)return 1;if(r===oo.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=r.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let h=0;h<a.length&&h<c.length;++h){const f=Qe(a[h],c[h]);if(f!==0)return f;const d=Ti(o[a[h]],l[c[h]]);if(d!==0)return d}return Qe(a.length,c.length)}(t.mapValue,e.mapValue);default:throw Se()}}function sh(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Qe(t,e);const n=Is(t),s=Is(e),i=Qe(n.seconds,s.seconds);return i!==0?i:Qe(n.nanos,s.nanos)}function pi(t){return Pl(t)}function Pl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const i=Is(s);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Ei(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,ke.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=Pl(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${Pl(s.fields[a])}`;return r+"}"}(t.mapValue):Se();var e,n}function Rl(t){return!!t&&"integerValue"in t}function Ac(t){return!!t&&"arrayValue"in t}function ih(t){return!!t&&"nullValue"in t}function rh(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function uo(t){return!!t&&"mapValue"in t}function xi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ti(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=xi(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=xi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function cb(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class hn{constructor(e){this.value=e}static empty(){return new hn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!uo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=xi(n)}setAll(e){let n=Gt.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=xi(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());uo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Un(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];uo(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){ti(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new hn(xi(this.value))}}function Zm(t){const e=[];return ti(t.fields,(n,s)=>{const i=new Gt([n]);if(uo(s)){const r=Zm(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new kn(e)}/**
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
 */class Vt{constructor(e,n,s,i,r,o){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.data=r,this.documentState=o}static newInvalidDocument(e){return new Vt(e,0,Re.min(),Re.min(),hn.empty(),0)}static newFoundDocument(e,n,s){return new Vt(e,1,n,Re.min(),s,0)}static newNoDocument(e,n){return new Vt(e,2,n,Re.min(),hn.empty(),0)}static newUnknownDocument(e,n){return new Vt(e,3,n,Re.min(),hn.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=hn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=hn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Re.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Vt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Vt(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ub{constructor(e,n=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.ht=null}}function oh(t,e=null,n=[],s=[],i=null,r=null,o=null){return new ub(t,e,n,s,i,r,o)}function Dc(t){const e=Ce(t);if(e.ht===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>{return(i=s).field.canonicalString()+i.op.toString()+pi(i.value);var i}).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),da(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>pi(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>pi(s)).join(",")),e.ht=n}return e.ht}function hb(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${pi(s.value)}`;var s}).join(", ")}]`),da(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>pi(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>pi(n)).join(",")),`Target(${e})`}function Pc(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!yb(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],s=e.filters[i],n.op!==s.op||!n.field.isEqual(s.field)||!Un(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!lh(t.startAt,e.startAt)&&lh(t.endAt,e.endAt)}function Nl(t){return ke.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class dn extends class{}{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.lt(e,n,s):new fb(e,n,s):n==="array-contains"?new mb(e,s):n==="in"?new gb(e,s):n==="not-in"?new _b(e,s):n==="array-contains-any"?new vb(e,s):new dn(e,n,s)}static lt(e,n,s){return n==="in"?new db(e,s):new pb(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.ft(Ti(n,this.value)):n!==null&&Ys(this.value)===Ys(n)&&this.ft(Ti(n,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Se()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class fb extends dn{constructor(e,n,s){super(e,n,s),this.key=ke.fromName(s.referenceValue)}matches(e){const n=ke.comparator(e.key,this.key);return this.ft(n)}}class db extends dn{constructor(e,n){super(e,"in",n),this.keys=eg("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class pb extends dn{constructor(e,n){super(e,"not-in",n),this.keys=eg("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function eg(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>ke.fromName(s.referenceValue))}class mb extends dn{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ac(n)&&dr(n.arrayValue,this.value)}}class gb extends dn{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&dr(this.value.arrayValue,n)}}class _b extends dn{constructor(e,n){super(e,"not-in",n)}matches(e){if(dr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!dr(this.value.arrayValue,n)}}class vb extends dn{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ac(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>dr(this.value.arrayValue,s))}}class $o{constructor(e,n){this.position=e,this.inclusive=n}}class Zi{constructor(e,n="asc"){this.field=e,this.dir=n}}function yb(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function ah(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=ke.comparator(ke.fromName(o.referenceValue),n.key):s=Ti(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function lh(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Un(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class pa{constructor(e,n=null,s=[],i=[],r=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this._t=null,this.wt=null,this.startAt,this.endAt}}function bb(t,e,n,s,i,r,o,a){return new pa(t,e,n,s,i,r,o,a)}function Rc(t){return new pa(t)}function ch(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function wb(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function kb(t){for(const e of t.filters)if(e.dt())return e.field;return null}function Eb(t){return t.collectionGroup!==null}function pr(t){const e=Ce(t);if(e._t===null){e._t=[];const n=kb(e),s=wb(e);if(n!==null&&s===null)n.isKeyField()||e._t.push(new Zi(n)),e._t.push(new Zi(Gt.keyField(),"asc"));else{let i=!1;for(const r of e.explicitOrderBy)e._t.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new Zi(Gt.keyField(),r))}}}return e._t}function Zn(t){const e=Ce(t);if(!e.wt)if(e.limitType==="F")e.wt=oh(e.path,e.collectionGroup,pr(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of pr(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new Zi(r.field,o))}const s=e.endAt?new $o(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new $o(e.startAt.position,e.startAt.inclusive):null;e.wt=oh(e.path,e.collectionGroup,n,e.filters,e.limit,s,i)}return e.wt}function Ol(t,e,n){return new pa(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ma(t,e){return Pc(Zn(t),Zn(e))&&t.limitType===e.limitType}function tg(t){return`${Dc(Zn(t))}|lt:${t.limitType}`}function Ll(t){return`Query(target=${hb(Zn(t))}; limitType=${t.limitType})`}function Nc(t,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):ke.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,s){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=ah(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,pr(n),s)||n.endAt&&!function(i,r,o){const a=ah(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,pr(n),s))}(t,e)}function Tb(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function ng(t){return(e,n)=>{let s=!1;for(const i of pr(t)){const r=Ib(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function Ib(t,e,n){const s=t.field.isKeyField()?ke.comparator(e.key,n.key):function(i,r,o){const a=r.data.field(i),l=o.data.field(i);return a!==null&&l!==null?Ti(a,l):Se()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return Se()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sg(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Mo(e)?"-0":e}}function ig(t){return{integerValue:""+t}}function Sb(t,e){return lb(e)?ig(e):sg(t,e)}/**
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
 */class ga{constructor(){this._=void 0}}function Cb(t,e,n){return t instanceof Uo?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,e):t instanceof mr?og(t,e):t instanceof gr?ag(t,e):function(s,i){const r=rg(s,i),o=uh(r)+uh(s.yt);return Rl(r)&&Rl(s.yt)?ig(o):sg(s.It,o)}(t,e)}function Ab(t,e,n){return t instanceof mr?og(t,e):t instanceof gr?ag(t,e):n}function rg(t,e){return t instanceof Fo?Rl(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Uo extends ga{}class mr extends ga{constructor(e){super(),this.elements=e}}function og(t,e){const n=lg(e);for(const s of t.elements)n.some(i=>Un(i,s))||n.push(s);return{arrayValue:{values:n}}}class gr extends ga{constructor(e){super(),this.elements=e}}function ag(t,e){let n=lg(e);for(const s of t.elements)n=n.filter(i=>!Un(i,s));return{arrayValue:{values:n}}}class Fo extends ga{constructor(e,n){super(),this.It=e,this.yt=n}}function uh(t){return vt(t.integerValue||t.doubleValue)}function lg(t){return Ac(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Db(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof mr&&s instanceof mr||n instanceof gr&&s instanceof gr?ki(n.elements,s.elements,Un):n instanceof Fo&&s instanceof Fo?Un(n.yt,s.yt):n instanceof Uo&&s instanceof Uo}(t.transform,e.transform)}class Pb{constructor(e,n){this.version=e,this.transformResults=n}}class En{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new En}static exists(e){return new En(void 0,e)}static updateTime(e){return new En(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ho(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class _a{}function cg(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Oc(t.key,En.none()):new Br(t.key,t.data,En.none());{const n=t.data,s=hn.empty();let i=new It(Gt.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new Ps(t.key,s,new kn(i.toArray()),En.none())}}function Rb(t,e,n){t instanceof Br?function(s,i,r){const o=s.value.clone(),a=fh(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Ps?function(s,i,r){if(!ho(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=fh(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(ug(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function er(t,e,n,s){return t instanceof Br?function(i,r,o,a){if(!ho(i.precondition,r))return o;const l=i.value.clone(),c=dh(i.fieldTransforms,a,r);return l.setAll(c),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),null}(t,e,n,s):t instanceof Ps?function(i,r,o,a){if(!ho(i.precondition,r))return o;const l=dh(i.fieldTransforms,a,r),c=r.data;return c.setAll(ug(i)),c.setAll(l),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,s):function(i,r,o){return ho(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(t,e,n)}function Nb(t,e){let n=null;for(const s of t.fieldTransforms){const i=e.data.field(s.field),r=rg(s.transform,i||null);r!=null&&(n===null&&(n=hn.empty()),n.set(s.field,r))}return n||null}function hh(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&ki(n,s,(i,r)=>Db(i,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Br extends _a{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ps extends _a{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function ug(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function fh(t,e,n){const s=new Map;tt(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,Ab(o,a,n[i]))}return s}function dh(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,Cb(r,o,e))}return s}class Oc extends _a{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ob extends _a{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Lb{constructor(e){this.count=e}}/**
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
 */var _t,$e;function Mb(t){switch(t){default:return Se();case ne.CANCELLED:case ne.UNKNOWN:case ne.DEADLINE_EXCEEDED:case ne.RESOURCE_EXHAUSTED:case ne.INTERNAL:case ne.UNAVAILABLE:case ne.UNAUTHENTICATED:return!1;case ne.INVALID_ARGUMENT:case ne.NOT_FOUND:case ne.ALREADY_EXISTS:case ne.PERMISSION_DENIED:case ne.FAILED_PRECONDITION:case ne.ABORTED:case ne.OUT_OF_RANGE:case ne.UNIMPLEMENTED:case ne.DATA_LOSS:return!0}}function hg(t){if(t===void 0)return xn("GRPC error has no .code"),ne.UNKNOWN;switch(t){case _t.OK:return ne.OK;case _t.CANCELLED:return ne.CANCELLED;case _t.UNKNOWN:return ne.UNKNOWN;case _t.DEADLINE_EXCEEDED:return ne.DEADLINE_EXCEEDED;case _t.RESOURCE_EXHAUSTED:return ne.RESOURCE_EXHAUSTED;case _t.INTERNAL:return ne.INTERNAL;case _t.UNAVAILABLE:return ne.UNAVAILABLE;case _t.UNAUTHENTICATED:return ne.UNAUTHENTICATED;case _t.INVALID_ARGUMENT:return ne.INVALID_ARGUMENT;case _t.NOT_FOUND:return ne.NOT_FOUND;case _t.ALREADY_EXISTS:return ne.ALREADY_EXISTS;case _t.PERMISSION_DENIED:return ne.PERMISSION_DENIED;case _t.FAILED_PRECONDITION:return ne.FAILED_PRECONDITION;case _t.ABORTED:return ne.ABORTED;case _t.OUT_OF_RANGE:return ne.OUT_OF_RANGE;case _t.UNIMPLEMENTED:return ne.UNIMPLEMENTED;case _t.DATA_LOSS:return ne.DATA_LOSS;default:return Se()}}($e=_t||(_t={}))[$e.OK=0]="OK",$e[$e.CANCELLED=1]="CANCELLED",$e[$e.UNKNOWN=2]="UNKNOWN",$e[$e.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",$e[$e.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",$e[$e.NOT_FOUND=5]="NOT_FOUND",$e[$e.ALREADY_EXISTS=6]="ALREADY_EXISTS",$e[$e.PERMISSION_DENIED=7]="PERMISSION_DENIED",$e[$e.UNAUTHENTICATED=16]="UNAUTHENTICATED",$e[$e.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",$e[$e.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",$e[$e.ABORTED=10]="ABORTED",$e[$e.OUT_OF_RANGE=11]="OUT_OF_RANGE",$e[$e.UNIMPLEMENTED=12]="UNIMPLEMENTED",$e[$e.INTERNAL=13]="INTERNAL",$e[$e.UNAVAILABLE=14]="UNAVAILABLE",$e[$e.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Oi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ti(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return Xm(this.inner)}size(){return this.innerSize}}/**
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
 */const $b=new St(ke.comparator);function es(){return $b}const fg=new St(ke.comparator);function Wi(...t){let e=fg;for(const n of t)e=e.insert(n.key,n);return e}function dg(t){let e=fg;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Us(){return tr()}function pg(){return tr()}function tr(){return new Oi(t=>t.toString(),(t,e)=>t.isEqual(e))}const Ub=new St(ke.comparator),Fb=new It(ke.comparator);function Le(...t){let e=Fb;for(const n of t)e=e.add(n);return e}const Bb=new It(Qe);function mg(){return Bb}/**
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
 */class va{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const i=new Map;return i.set(e,Vr.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new va(Re.min(),i,mg(),es(),Le())}}class Vr{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Vr(s,n,Le(),Le(),Le())}}/**
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
 */class fo{constructor(e,n,s,i){this.Tt=e,this.removedTargetIds=n,this.key=s,this.Et=i}}class gg{constructor(e,n){this.targetId=e,this.At=n}}class _g{constructor(e,n,s=xt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class ph{constructor(){this.Rt=0,this.bt=gh(),this.Pt=xt.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=Le(),n=Le(),s=Le();return this.bt.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:Se()}}),new Vr(this.Pt,this.vt,e,n,s)}Nt(){this.Vt=!1,this.bt=gh()}kt(e,n){this.Vt=!0,this.bt=this.bt.insert(e,n)}Ot(e){this.Vt=!0,this.bt=this.bt.remove(e)}Mt(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class Vb{constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=es(),this.qt=mh(),this.Kt=new It(Qe)}Gt(e){for(const n of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(n,e.Et):this.jt(n,e.key,e.Et);for(const n of e.removedTargetIds)this.jt(n,e.key,e.Et)}Wt(e){this.forEachTarget(e,n=>{const s=this.zt(n);switch(e.state){case 0:this.Ht(n)&&s.Ct(e.resumeToken);break;case 1:s.Ft(),s.St||s.Nt(),s.Ct(e.resumeToken);break;case 2:s.Ft(),s.St||this.removeTarget(n);break;case 3:this.Ht(n)&&(s.$t(),s.Ct(e.resumeToken));break;case 4:this.Ht(n)&&(this.Jt(n),s.Ct(e.resumeToken));break;default:Se()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Lt.forEach((s,i)=>{this.Ht(i)&&n(i)})}Yt(e){const n=e.targetId,s=e.At.count,i=this.Xt(n);if(i){const r=i.target;if(Nl(r))if(s===0){const o=new ke(r.path);this.jt(n,o,Vt.newNoDocument(o,Re.min()))}else tt(s===1);else this.Zt(n)!==s&&(this.Jt(n),this.Kt=this.Kt.add(n))}}te(e){const n=new Map;this.Lt.forEach((r,o)=>{const a=this.Xt(o);if(a){if(r.current&&Nl(a.target)){const l=new ke(a.target.path);this.Ut.get(l)!==null||this.ee(o,l)||this.jt(o,l,Vt.newNoDocument(l,e))}r.Dt&&(n.set(o,r.xt()),r.Nt())}});let s=Le();this.qt.forEach((r,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Xt(l);return!c||c.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))}),this.Ut.forEach((r,o)=>o.setReadTime(e));const i=new va(e,n,this.Kt,this.Ut,s);return this.Ut=es(),this.qt=mh(),this.Kt=new It(Qe),i}Qt(e,n){if(!this.Ht(e))return;const s=this.ee(e,n.key)?2:0;this.zt(e).kt(n.key,s),this.Ut=this.Ut.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ne(n.key).add(e))}jt(e,n,s){if(!this.Ht(e))return;const i=this.zt(e);this.ee(e,n)?i.kt(n,1):i.Ot(n),this.qt=this.qt.insert(n,this.ne(n).delete(e)),s&&(this.Ut=this.Ut.insert(n,s))}removeTarget(e){this.Lt.delete(e)}Zt(e){const n=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Mt(e){this.zt(e).Mt()}zt(e){let n=this.Lt.get(e);return n||(n=new ph,this.Lt.set(e,n)),n}ne(e){let n=this.qt.get(e);return n||(n=new It(Qe),this.qt=this.qt.insert(e,n)),n}Ht(e){const n=this.Xt(e)!==null;return n||ye("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.Lt.get(e);return n&&n.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new ph),this.Bt.getRemoteKeysForTarget(e).forEach(n=>{this.jt(e,n,null)})}ee(e,n){return this.Bt.getRemoteKeysForTarget(e).has(n)}}function mh(){return new St(ke.comparator)}function gh(){return new St(ke.comparator)}/**
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
 */const jb=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),qb=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class Hb{constructor(e,n){this.databaseId=e,this.gt=n}}function Bo(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function vg(t,e){return t.gt?e.toBase64():e.toUint8Array()}function zb(t,e){return Bo(t,e.toTimestamp())}function Qn(t){return tt(!!t),Re.fromTimestamp(function(e){const n=Is(e);return new Tt(n.seconds,n.nanos)}(t))}function Lc(t,e){return function(n){return new rt(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function yg(t){const e=rt.fromString(t);return tt(kg(e)),e}function Ml(t,e){return Lc(t.databaseId,e.path)}function Za(t,e){const n=yg(e);if(n.get(1)!==t.databaseId.projectId)throw new Ee(ne.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Ee(ne.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ke(bg(n))}function $l(t,e){return Lc(t.databaseId,e)}function Kb(t){const e=yg(t);return e.length===4?rt.emptyPath():bg(e)}function Ul(t){return new rt(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function bg(t){return tt(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function _h(t,e,n){return{name:Ml(t,e),fields:n.value.mapValue.fields}}function Gb(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:Se()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(l,c){return l.gt?(tt(c===void 0||typeof c=="string"),xt.fromBase64String(c||"")):(tt(c===void 0||c instanceof Uint8Array),xt.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const c=l.code===void 0?ne.UNKNOWN:hg(l.code);return new Ee(c,l.message||"")}(o);n=new _g(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=Za(t,s.document.name),r=Qn(s.document.updateTime),o=new hn({mapValue:{fields:s.document.fields}}),a=Vt.newFoundDocument(i,r,o),l=s.targetIds||[],c=s.removedTargetIds||[];n=new fo(l,c,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=Za(t,s.document),r=s.readTime?Qn(s.readTime):Re.min(),o=Vt.newNoDocument(i,r),a=s.removedTargetIds||[];n=new fo([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=Za(t,s.document),r=s.removedTargetIds||[];n=new fo([],r,i,null)}else{if(!("filter"in e))return Se();{e.filter;const s=e.filter;s.targetId;const i=s.count||0,r=new Lb(i),o=s.targetId;n=new gg(o,r)}}return n}function Wb(t,e){let n;if(e instanceof Br)n={update:_h(t,e.key,e.value)};else if(e instanceof Oc)n={delete:Ml(t,e.key)};else if(e instanceof Ps)n={update:_h(t,e.key,e.data),updateMask:sw(e.fieldMask)};else{if(!(e instanceof Ob))return Se();n={verify:Ml(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof Uo)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof mr)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof gr)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Fo)return{fieldPath:r.field.canonicalString(),increment:o.yt};throw Se()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:zb(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Se()}(t,e.precondition)),n}function Qb(t,e){return t&&t.length>0?(tt(e!==void 0),t.map(n=>function(s,i){let r=s.updateTime?Qn(s.updateTime):Qn(i);return r.isEqual(Re.min())&&(r=Qn(i)),new Pb(r,s.transformResults||[])}(n,e))):[]}function Yb(t,e){return{documents:[$l(t,e.path)]}}function Xb(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=$l(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=$l(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(l){if(l.length===0)return;const c=l.map(h=>function(f){if(f.op==="=="){if(rh(f.value))return{unaryFilter:{field:ai(f.field),op:"IS_NAN"}};if(ih(f.value))return{unaryFilter:{field:ai(f.field),op:"IS_NULL"}}}else if(f.op==="!="){if(rh(f.value))return{unaryFilter:{field:ai(f.field),op:"IS_NOT_NAN"}};if(ih(f.value))return{unaryFilter:{field:ai(f.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ai(f.field),op:ew(f.op),value:f.value}}}(h));return c.length===1?c[0]:{compositeFilter:{op:"AND",filters:c}}}(e.filters);i&&(n.structuredQuery.where=i);const r=function(l){if(l.length!==0)return l.map(c=>function(h){return{field:ai(h.field),direction:Zb(h.dir)}}(c))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(l,c){return l.gt||da(c)?c:{value:c}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function Jb(t){let e=Kb(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){tt(s===1);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let r=[];n.where&&(r=wg(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(h=>function(f){return new Zi(ui(f.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(f.direction))}(h)));let a=null;n.limit&&(a=function(h){let f;return f=typeof h=="object"?h.value:h,da(f)?null:f}(n.limit));let l=null;n.startAt&&(l=function(h){const f=!!h.before,d=h.values||[];return new $o(d,f)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const f=!h.before,d=h.values||[];return new $o(d,f)}(n.endAt)),bb(e,i,o,r,a,"F",l,c)}function xb(t,e){const n=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Se()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function wg(t){return t?t.unaryFilter!==void 0?[nw(t)]:t.fieldFilter!==void 0?[tw(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>wg(e)).reduce((e,n)=>e.concat(n)):Se():[]}function Zb(t){return jb[t]}function ew(t){return qb[t]}function ai(t){return{fieldPath:t.canonicalString()}}function ui(t){return Gt.fromServerFormat(t.fieldPath)}function tw(t){return dn.create(ui(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Se()}}(t.fieldFilter.op),t.fieldFilter.value)}function nw(t){switch(t.unaryFilter.op){case"IS_NAN":const e=ui(t.unaryFilter.field);return dn.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=ui(t.unaryFilter.field);return dn.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ui(t.unaryFilter.field);return dn.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=ui(t.unaryFilter.field);return dn.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Se()}}function sw(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function kg(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class iw{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&Rb(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=er(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=er(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=pg();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const l=cg(o,a);l!==null&&s.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(Re.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Le())}isEqual(e){return this.batchId===e.batchId&&ki(this.mutations,e.mutations,(n,s)=>hh(n,s))&&ki(this.baseMutations,e.baseMutations,(n,s)=>hh(n,s))}}class Mc{constructor(e,n,s,i){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(e,n,s){tt(e.mutations.length===s.length);let i=Ub;const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new Mc(e,n,s,i)}}/**
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
 */class rw{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Vs{constructor(e,n,s,i,r=Re.min(),o=Re.min(),a=xt.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Vs(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Vs(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Vs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class ow{constructor(e){this.re=e}}function aw(t){const e=Jb({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ol(e,e.limit,"L"):e}/**
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
 */class lw{constructor(){this.Ye=new cw}addToCollectionParentIndex(e,n){return this.Ye.add(n),se.resolve()}getCollectionParents(e,n){return se.resolve(this.Ye.getEntries(n))}addFieldIndex(e,n){return se.resolve()}deleteFieldIndex(e,n){return se.resolve()}getDocumentsMatchingTarget(e,n){return se.resolve(null)}getIndexType(e,n){return se.resolve(0)}getFieldIndexes(e,n){return se.resolve([])}getNextCollectionGroupToUpdate(e){return se.resolve(null)}getMinOffset(e,n){return se.resolve(Ts.min())}getMinOffsetFromCollectionGroup(e,n){return se.resolve(Ts.min())}updateCollectionGroup(e,n,s){return se.resolve()}updateIndexEntries(e,n){return se.resolve()}}class cw{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new It(rt.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new It(rt.comparator)).toArray()}}/**
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
 */class Ii{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new Ii(0)}static vn(){return new Ii(-1)}}/**
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
 */class uw{constructor(){this.changes=new Oi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Vt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?se.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class hw{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class fw{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(s=i,this.getBaseDocument(e,n,s))).next(i=>(s!==null&&er(s.mutation,i,kn.empty(),Tt.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,Le()).next(()=>s))}getLocalViewOfDocuments(e,n,s=Le()){const i=Us();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,s).next(r=>{let o=Wi();return r.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Us();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,Le()))}populateOverlays(e,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,i){let r=es();const o=tr(),a=tr();return n.forEach((l,c)=>{const h=s.get(c.key);i.has(c.key)&&(h===void 0||h.mutation instanceof Ps)?r=r.insert(c.key,c):h!==void 0&&(o.set(c.key,h.mutation.getFieldMask()),er(h.mutation,c,h.mutation.getFieldMask(),Tt.now()))}),this.recalculateAndSaveOverlays(e,r).next(l=>(l.forEach((c,h)=>o.set(c,h)),n.forEach((c,h)=>{var f;return a.set(c,new hw(h,(f=o.get(c))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const s=tr();let i=new St((o,a)=>o-a),r=Le();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let h=s.get(l)||kn.empty();h=a.applyToLocalView(c,h),s.set(l,h);const f=(i.get(a.batchId)||Le()).add(l);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,h=l.value,f=pg();h.forEach(d=>{if(!r.has(d)){const m=cg(n.get(d),s.get(d));m!==null&&f.set(d,m),r=r.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return se.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(i){return ke.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Eb(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):se.resolve(Us());let a=-1,l=r;return o.next(c=>se.forEach(c,(h,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),r.get(h)?se.resolve():this.getBaseDocument(e,h,f).next(d=>{l=l.insert(h,d)}))).next(()=>this.populateOverlays(e,c,r)).next(()=>this.computeViews(e,l,c,Le())).next(h=>({batchId:a,changes:dg(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ke(n)).next(s=>{let i=Wi();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const i=n.collectionGroup;let r=Wi();return this.indexManager.getCollectionParents(e,i).next(o=>se.forEach(o,a=>{const l=function(c,h){return new pa(h,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,s).next(c=>{c.forEach((h,f)=>{r=r.insert(h,f)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,s){let i;return this.remoteDocumentCache.getAllFromCollection(e,n.path,s).next(r=>(i=r,this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId))).next(r=>{r.forEach((a,l)=>{const c=l.getKey();i.get(c)===null&&(i=i.insert(c,Vt.newInvalidDocument(c)))});let o=Wi();return i.forEach((a,l)=>{const c=r.get(a);c!==void 0&&er(c.mutation,l,kn.empty(),Tt.now()),Nc(n,l)&&(o=o.insert(a,l))}),o})}getBaseDocument(e,n,s){return s===null||s.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):se.resolve(Vt.newInvalidDocument(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dw{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return se.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:Qn(s.createTime)}),se.resolve()}getNamedQuery(e,n){return se.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(s){return{name:s.name,query:aw(s.bundledQuery),readTime:Qn(s.readTime)}}(n)),se.resolve()}}/**
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
 */class pw{constructor(){this.overlays=new St(ke.comparator),this.es=new Map}getOverlay(e,n){return se.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Us();return se.forEach(n,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((i,r)=>{this.ue(e,n,r)}),se.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.es.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.es.delete(s)),se.resolve()}getOverlaysForCollection(e,n,s){const i=Us(),r=n.length+1,o=new ke(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===r&&l.largestBatchId>s&&i.set(l.getKey(),l)}return se.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new St((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>s){let h=r.get(c.largestBatchId);h===null&&(h=Us(),r=r.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const a=Us(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,h)=>a.set(c,h)),!(a.size()>=i)););return se.resolve(a)}ue(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.es.get(i.largestBatchId).delete(s.key);this.es.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new rw(n,s));let r=this.es.get(n);r===void 0&&(r=Le(),this.es.set(n,r)),this.es.set(n,r.add(s.key))}}/**
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
 */class $c{constructor(){this.ns=new It(Ot.ss),this.rs=new It(Ot.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const s=new Ot(e,n);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.cs(new Ot(e,n))}hs(e,n){e.forEach(s=>this.removeReference(s,n))}ls(e){const n=new ke(new rt([])),s=new Ot(n,e),i=new Ot(n,e+1),r=[];return this.rs.forEachInRange([s,i],o=>{this.cs(o),r.push(o.key)}),r}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new ke(new rt([])),s=new Ot(n,e),i=new Ot(n,e+1);let r=Le();return this.rs.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new Ot(e,0),s=this.ns.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Ot{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return ke.comparator(e.key,n.key)||Qe(e._s,n._s)}static os(e,n){return Qe(e._s,n._s)||ke.comparator(e.key,n.key)}}/**
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
 */class mw{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new It(Ot.ss)}checkEmpty(e){return se.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new iw(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.gs=this.gs.add(new Ot(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return se.resolve(o)}lookupMutationBatch(e,n){return se.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.ps(s),r=i<0?0:i;return se.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return se.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return se.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Ot(n,0),i=new Ot(n,Number.POSITIVE_INFINITY),r=[];return this.gs.forEachInRange([s,i],o=>{const a=this.ys(o._s);r.push(a)}),se.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new It(Qe);return n.forEach(i=>{const r=new Ot(i,0),o=new Ot(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([r,o],a=>{s=s.add(a._s)})}),se.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;ke.isDocumentKey(r)||(r=r.child(""));const o=new Ot(new ke(r),0);let a=new It(Qe);return this.gs.forEachWhile(l=>{const c=l.key.path;return!!s.isPrefixOf(c)&&(c.length===i&&(a=a.add(l._s)),!0)},o),se.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(s=>{const i=this.ys(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){tt(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return se.forEach(n.mutations,i=>{const r=new Ot(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.gs=s})}An(e){}containsKey(e,n){const s=new Ot(n,0),i=this.gs.firstAfterOrEqual(s);return se.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,se.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class gw{constructor(e){this.Es=e,this.docs=new St(ke.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Es(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return se.resolve(s?s.document.mutableCopy():Vt.newInvalidDocument(n))}getEntries(e,n){let s=es();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():Vt.newInvalidDocument(i))}),se.resolve(s)}getAllFromCollection(e,n,s){let i=es();const r=new ke(n.child("")),o=this.docs.getIteratorFrom(r);for(;o.hasNext();){const{key:a,value:{document:l}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||sb(nb(l),s)<=0||(i=i.insert(l.key,l.mutableCopy()))}return se.resolve(i)}getAllFromCollectionGroup(e,n,s,i){Se()}As(e,n){return se.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new _w(this)}getSize(e){return se.resolve(this.size)}}class _w extends uw{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.Yn.addEntry(e,i)):this.Yn.removeEntry(s)}),se.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
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
 */class vw{constructor(e){this.persistence=e,this.Rs=new Oi(n=>Dc(n),Pc),this.lastRemoteSnapshotVersion=Re.min(),this.highestTargetId=0,this.bs=0,this.Ps=new $c,this.targetCount=0,this.vs=Ii.Pn()}forEachTarget(e,n){return this.Rs.forEach((s,i)=>n(i)),se.resolve()}getLastRemoteSnapshotVersion(e){return se.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return se.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),se.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),se.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new Ii(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,se.resolve()}updateTargetData(e,n){return this.Dn(n),se.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,se.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Rs.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),se.waitFor(r).next(()=>i)}getTargetCount(e){return se.resolve(this.targetCount)}getTargetData(e,n){const s=this.Rs.get(n)||null;return se.resolve(s)}addMatchingKeys(e,n,s){return this.Ps.us(n,s),se.resolve()}removeMatchingKeys(e,n,s){this.Ps.hs(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),se.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),se.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Ps.ds(n);return se.resolve(s)}containsKey(e,n){return se.resolve(this.Ps.containsKey(n))}}/**
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
 */class yw{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new Cc(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new vw(this),this.indexManager=new lw,this.remoteDocumentCache=function(s){return new gw(s)}(s=>this.referenceDelegate.xs(s)),this.It=new ow(n),this.Ns=new dw(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new pw,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Vs[e.toKey()];return s||(s=new mw(n,this.referenceDelegate),this.Vs[e.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,s){ye("MemoryPersistence","Starting transaction:",e);const i=new bw(this.Ss.next());return this.referenceDelegate.ks(),s(i).next(r=>this.referenceDelegate.Os(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Ms(e,n){return se.or(Object.values(this.Vs).map(s=>()=>s.containsKey(e,n)))}}class bw extends rb{constructor(e){super(),this.currentSequenceNumber=e}}class Uc{constructor(e){this.persistence=e,this.Fs=new $c,this.$s=null}static Bs(e){return new Uc(e)}get Ls(){if(this.$s)return this.$s;throw Se()}addReference(e,n,s){return this.Fs.addReference(s,n),this.Ls.delete(s.toString()),se.resolve()}removeReference(e,n,s){return this.Fs.removeReference(s,n),this.Ls.add(s.toString()),se.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),se.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(i=>this.Ls.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.Ls.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return se.forEach(this.Ls,s=>{const i=ke.fromPath(s);return this.Us(e,i).next(r=>{r||n.removeEntry(i,Re.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.Us(e,n).next(s=>{s?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}Us(e,n){return se.or([()=>se.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
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
 */class Fc{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.Si=s,this.Di=i}static Ci(e,n){let s=Le(),i=Le();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new Fc(e,n.fromCache,s,i)}}/**
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
 */class ww{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,s,i){return this.ki(e,n).next(r=>r||this.Oi(e,n,i,s)).next(r=>r||this.Mi(e,n))}ki(e,n){if(ch(n))return se.resolve(null);let s=Zn(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Ol(n,null,"F"),s=Zn(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=Le(...r);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(l=>{const c=this.Fi(n,a);return this.$i(n,c,o,l.readTime)?this.ki(e,Ol(n,null,"F")):this.Bi(e,c,n,l)}))})))}Oi(e,n,s,i){return ch(n)||i.isEqual(Re.min())?this.Mi(e,n):this.Ni.getDocuments(e,s).next(r=>{const o=this.Fi(n,r);return this.$i(n,o,s,i)?this.Mi(e,n):(eh()<=Ke.DEBUG&&ye("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ll(n)),this.Bi(e,o,n,tb(i,-1)))})}Fi(e,n){let s=new It(ng(e));return n.forEach((i,r)=>{Nc(e,r)&&(s=s.add(r))}),s}$i(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Mi(e,n){return eh()<=Ke.DEBUG&&ye("QueryEngine","Using full collection scan to execute query:",Ll(n)),this.Ni.getDocumentsMatchingQuery(e,n,Ts.min())}Bi(e,n,s,i){return this.Ni.getDocumentsMatchingQuery(e,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kw{constructor(e,n,s,i){this.persistence=e,this.Li=n,this.It=i,this.Ui=new St(Qe),this.qi=new Oi(r=>Dc(r),Pc),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(s)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new fw(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ui))}}function Ew(t,e,n,s){return new kw(t,e,n,s)}async function Eg(t,e){const n=Ce(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.Qi(e),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let l=Le();for(const c of i){o.push(c.batchId);for(const h of c.mutations)l=l.add(h.key)}for(const c of r){a.push(c.batchId);for(const h of c.mutations)l=l.add(h.key)}return n.localDocuments.getDocuments(s,l).next(c=>({ji:c,removedBatchIds:o,addedBatchIds:a}))})})}function Tw(t,e){const n=Ce(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,c){const h=l.batch,f=h.keys();let d=se.resolve();return f.forEach(m=>{d=d.next(()=>c.getEntry(a,m)).next(_=>{const y=l.docVersions.get(m);tt(y!==null),_.version.compareTo(y)<0&&(h.applyToRemoteDocument(_,l),_.isValidDocument()&&(_.setReadTime(l.commitVersion),c.addEntry(_)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,h))}(n,s,e,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=Le();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,i))})}function Tg(t){const e=Ce(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function Iw(t,e){const n=Ce(t),s=e.snapshotVersion;let i=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.Ui;const a=[];e.targetChanges.forEach((h,f)=>{const d=i.get(f);if(!d)return;a.push(n.Cs.removeMatchingKeys(r,h.removedDocuments,f).next(()=>n.Cs.addMatchingKeys(r,h.addedDocuments,f)));let m=d.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.has(f)?m=m.withResumeToken(xt.EMPTY_BYTE_STRING,Re.min()).withLastLimboFreeSnapshotVersion(Re.min()):h.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(h.resumeToken,s)),i=i.insert(f,m),function(_,y,v){return _.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-_.snapshotVersion.toMicroseconds()>=3e8?!0:v.addedDocuments.size+v.modifiedDocuments.size+v.removedDocuments.size>0}(d,m,h)&&a.push(n.Cs.updateTargetData(r,m))});let l=es(),c=Le();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,h))}),a.push(Sw(r,o,e.documentUpdates).next(h=>{l=h.Wi,c=h.zi})),!s.isEqual(Re.min())){const h=n.Cs.getLastRemoteSnapshotVersion(r).next(f=>n.Cs.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(h)}return se.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,l,c)).next(()=>l)}).then(r=>(n.Ui=i,r))}function Sw(t,e,n){let s=Le(),i=Le();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let o=es();return n.forEach((a,l)=>{const c=r.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(Re.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):ye("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{Wi:o,zi:i}})}function Cw(t,e){const n=Ce(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function Aw(t,e){const n=Ce(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Cs.getTargetData(s,e).next(r=>r?(i=r,se.resolve(i)):n.Cs.allocateTargetId(s).next(o=>(i=new Vs(e,o,0,s.currentSequenceNumber),n.Cs.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.Ui.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(s.targetId,s),n.qi.set(e,s.targetId)),s})}async function Fl(t,e,n){const s=Ce(t),i=s.Ui.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Fr(o))throw o;ye("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ui=s.Ui.remove(e),s.qi.delete(i.target)}function vh(t,e,n){const s=Ce(t);let i=Re.min(),r=Le();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,l,c){const h=Ce(a),f=h.qi.get(c);return f!==void 0?se.resolve(h.Ui.get(f)):h.Cs.getTargetData(l,c)}(s,o,Zn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{r=l})}).next(()=>s.Li.getDocumentsMatchingQuery(o,e,n?i:Re.min(),n?r:Le())).next(a=>(Dw(s,Tb(e),a),{documents:a,Hi:r})))}function Dw(t,e,n){let s=t.Ki.get(e)||Re.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),t.Ki.set(e,s)}class yh{constructor(){this.activeTargetIds=mg()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Pw{constructor(){this.Lr=new yh,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,n,s){this.Ur[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new yh,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Rw{qr(e){}shutdown(){}}/**
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
 */class bh{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){ye("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){ye("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nw={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class Ow{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
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
 */class Lw extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,s,i,r){const o=this.ho(e,n);ye("RestConnection","Sending: ",o,s);const a={};return this.lo(a,i,r),this.fo(e,o,a,s).then(l=>(ye("RestConnection","Received: ",l),l),l=>{throw Dl("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",s),l})}_o(e,n,s,i,r,o){return this.ao(e,n,s,i,r)}lo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Ni,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>e[r]=i),s&&s.headers.forEach((i,r)=>e[r]=i)}ho(e,n){const s=Nw[e];return`${this.oo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,s,i){return new Promise((r,o)=>{const a=new K1;a.setWithCredentials(!0),a.listenOnce(q1.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case xa.NO_ERROR:const c=a.getResponseJson();ye("Connection","XHR received:",JSON.stringify(c)),r(c);break;case xa.TIMEOUT:ye("Connection",'RPC "'+e+'" timed out'),o(new Ee(ne.DEADLINE_EXCEEDED,"Request time out"));break;case xa.HTTP_ERROR:const h=a.getStatus();if(ye("Connection",'RPC "'+e+'" failed with status:',h,"response text:",a.getResponseText()),h>0){const f=a.getResponseJson().error;if(f&&f.status&&f.message){const d=function(m){const _=m.toLowerCase().replace(/_/g,"-");return Object.values(ne).indexOf(_)>=0?_:ne.UNKNOWN}(f.status);o(new Ee(d,f.message))}else o(new Ee(ne.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new Ee(ne.UNAVAILABLE,"Connection failed."));break;default:Se()}}finally{ye("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(i);a.send(n,"POST",l,s,15)})}wo(e,n,s){const i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=V1(),o=j1(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new z1({})),this.lo(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const l=i.join("");ye("Connection","Creating WebChannel: "+l,a);const c=r.createWebChannel(l,a);let h=!1,f=!1;const d=new Ow({Hr:_=>{f?ye("Connection","Not sending because WebChannel is closed:",_):(h||(ye("Connection","Opening WebChannel transport."),c.open(),h=!0),ye("Connection","WebChannel sending:",_),c.send(_))},Jr:()=>c.close()}),m=(_,y,v)=>{_.listen(y,E=>{try{v(E)}catch(T){setTimeout(()=>{throw T},0)}})};return m(c,io.EventType.OPEN,()=>{f||ye("Connection","WebChannel transport opened.")}),m(c,io.EventType.CLOSE,()=>{f||(f=!0,ye("Connection","WebChannel transport closed"),d.io())}),m(c,io.EventType.ERROR,_=>{f||(f=!0,Dl("Connection","WebChannel transport errored:",_),d.io(new Ee(ne.UNAVAILABLE,"The operation could not be completed")))}),m(c,io.EventType.MESSAGE,_=>{var y;if(!f){const v=_.data[0];tt(!!v);const E=v,T=E.error||((y=E[0])===null||y===void 0?void 0:y.error);if(T){ye("Connection","WebChannel received error:",T);const L=T.status;let D=function(W){const O=_t[W];if(O!==void 0)return hg(O)}(L),U=T.message;D===void 0&&(D=ne.INTERNAL,U="Unknown error status: "+L+" with message "+T.message),f=!0,d.io(new Ee(D,U)),c.close()}else ye("Connection","WebChannel received:",v),d.ro(v)}}),m(o,H1.STAT_EVENT,_=>{_.stat===xu.PROXY?ye("Connection","Detected buffering proxy"):_.stat===xu.NOPROXY&&ye("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}function el(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ya(t){return new Hb(t,!0)}class Ig{constructor(e,n,s=1e3,i=1.5,r=6e4){this.Hs=e,this.timerId=n,this.mo=s,this.yo=i,this.po=r,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-s);i>0&&ye("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
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
 */class Sg{constructor(e,n,s,i,r,o,a,l){this.Hs=e,this.vo=s,this.Vo=i,this.So=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Do=0,this.Co=null,this.xo=null,this.stream=null,this.No=new Ig(e,n)}ko(){return this.state===1||this.state===5||this.Oo()}Oo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Mo()}async stop(){this.ko()&&await this.close(0)}Fo(){this.state=0,this.No.reset()}$o(){this.Oo()&&this.Co===null&&(this.Co=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.Bo()))}Lo(e){this.Uo(),this.stream.send(e)}async Bo(){if(this.Oo())return this.close(0)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}qo(){this.xo&&(this.xo.cancel(),this.xo=null)}async close(e,n){this.Uo(),this.qo(),this.No.cancel(),this.Do++,e!==4?this.No.reset():n&&n.code===ne.RESOURCE_EXHAUSTED?(xn(n.toString()),xn("Using maximum backoff delay to prevent overloading the backend."),this.No.Ao()):n&&n.code===ne.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Ko(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}Ko(){}auth(){this.state=1;const e=this.Go(this.Do),n=this.Do;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Do===n&&this.Qo(s,i)},s=>{e(()=>{const i=new Ee(ne.UNKNOWN,"Fetching auth token failed: "+s.message);return this.jo(i)})})}Qo(e,n){const s=this.Go(this.Do);this.stream=this.Wo(e,n),this.stream.Yr(()=>{s(()=>(this.state=2,this.xo=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.Oo()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{s(()=>this.jo(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Mo(){this.state=5,this.No.Ro(async()=>{this.state=0,this.start()})}jo(e){return ye("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Go(e){return n=>{this.Hs.enqueueAndForget(()=>this.Do===e?n():(ye("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Mw extends Sg{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.It=r}Wo(e,n){return this.So.wo("Listen",e,n)}onMessage(e){this.No.reset();const n=Gb(this.It,e),s=function(i){if(!("targetChange"in i))return Re.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?Re.min():r.readTime?Qn(r.readTime):Re.min()}(e);return this.listener.zo(n,s)}Ho(e){const n={};n.database=Ul(this.It),n.addTarget=function(i,r){let o;const a=r.target;return o=Nl(a)?{documents:Yb(i,a)}:{query:Xb(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=vg(i,r.resumeToken):r.snapshotVersion.compareTo(Re.min())>0&&(o.readTime=Bo(i,r.snapshotVersion.toTimestamp())),o}(this.It,e);const s=xb(this.It,e);s&&(n.labels=s),this.Lo(n)}Jo(e){const n={};n.database=Ul(this.It),n.removeTarget=e,this.Lo(n)}}class $w extends Sg{constructor(e,n,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.It=r,this.Yo=!1}get Xo(){return this.Yo}start(){this.Yo=!1,this.lastStreamToken=void 0,super.start()}Ko(){this.Yo&&this.Zo([])}Wo(e,n){return this.So.wo("Write",e,n)}onMessage(e){if(tt(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Yo){this.No.reset();const n=Qb(e.writeResults,e.commitTime),s=Qn(e.commitTime);return this.listener.tu(s,n)}return tt(!e.writeResults||e.writeResults.length===0),this.Yo=!0,this.listener.eu()}nu(){const e={};e.database=Ul(this.It),this.Lo(e)}Zo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>Wb(this.It,s))};this.Lo(n)}}/**
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
 */class Uw extends class{}{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.So=s,this.It=i,this.su=!1}iu(){if(this.su)throw new Ee(ne.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,s){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.So.ao(e,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===ne.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Ee(ne.UNKNOWN,i.toString())})}_o(e,n,s,i){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.So._o(e,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===ne.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new Ee(ne.UNKNOWN,r.toString())})}terminate(){this.su=!0}}class Fw{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ru=0,this.ou=null,this.uu=!0}cu(){this.ru===0&&(this.au("Unknown"),this.ou=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ou=null,this.hu("Backend didn't respond within 10 seconds."),this.au("Offline"),Promise.resolve())))}lu(e){this.state==="Online"?this.au("Unknown"):(this.ru++,this.ru>=1&&(this.fu(),this.hu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.au("Offline")))}set(e){this.fu(),this.ru=0,e==="Online"&&(this.uu=!1),this.au(e)}au(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}hu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.uu?(xn(n),this.uu=!1):ye("OnlineStateTracker",n)}fu(){this.ou!==null&&(this.ou.cancel(),this.ou=null)}}/**
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
 */class Bw{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.du=[],this._u=new Map,this.wu=new Set,this.mu=[],this.gu=r,this.gu.qr(o=>{s.enqueueAndForget(async()=>{ni(this)&&(ye("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=Ce(a);l.wu.add(4),await jr(l),l.yu.set("Unknown"),l.wu.delete(4),await ba(l)}(this))})}),this.yu=new Fw(s,i)}}async function ba(t){if(ni(t))for(const e of t.mu)await e(!0)}async function jr(t){for(const e of t.mu)await e(!1)}function Cg(t,e){const n=Ce(t);n._u.has(e.targetId)||(n._u.set(e.targetId,e),jc(n)?Vc(n):Li(n).Oo()&&Bc(n,e))}function Ag(t,e){const n=Ce(t),s=Li(n);n._u.delete(e),s.Oo()&&Dg(n,e),n._u.size===0&&(s.Oo()?s.$o():ni(n)&&n.yu.set("Unknown"))}function Bc(t,e){t.pu.Mt(e.targetId),Li(t).Ho(e)}function Dg(t,e){t.pu.Mt(e),Li(t).Jo(e)}function Vc(t){t.pu=new Vb({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t._u.get(e)||null}),Li(t).start(),t.yu.cu()}function jc(t){return ni(t)&&!Li(t).ko()&&t._u.size>0}function ni(t){return Ce(t).wu.size===0}function Pg(t){t.pu=void 0}async function Vw(t){t._u.forEach((e,n)=>{Bc(t,e)})}async function jw(t,e){Pg(t),jc(t)?(t.yu.lu(e),Vc(t)):t.yu.set("Unknown")}async function qw(t,e,n){if(t.yu.set("Online"),e instanceof _g&&e.state===2&&e.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s._u.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s._u.delete(o),s.pu.removeTarget(o))}(t,e)}catch(s){ye("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Vo(t,s)}else if(e instanceof fo?t.pu.Gt(e):e instanceof gg?t.pu.Yt(e):t.pu.Wt(e),!n.isEqual(Re.min()))try{const s=await Tg(t.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.pu.te(r);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const c=i._u.get(l);c&&i._u.set(l,c.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const l=i._u.get(a);if(!l)return;i._u.set(a,l.withResumeToken(xt.EMPTY_BYTE_STRING,l.snapshotVersion)),Dg(i,a);const c=new Vs(l.target,a,1,l.sequenceNumber);Bc(i,c)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){ye("RemoteStore","Failed to raise snapshot:",s),await Vo(t,s)}}async function Vo(t,e,n){if(!Fr(e))throw e;t.wu.add(1),await jr(t),t.yu.set("Offline"),n||(n=()=>Tg(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ye("RemoteStore","Retrying IndexedDB access"),await n(),t.wu.delete(1),await ba(t)})}function Rg(t,e){return e().catch(n=>Vo(t,n,e))}async function wa(t){const e=Ce(t),n=Ss(e);let s=e.du.length>0?e.du[e.du.length-1].batchId:-1;for(;Hw(e);)try{const i=await Cw(e.localStore,s);if(i===null){e.du.length===0&&n.$o();break}s=i.batchId,zw(e,i)}catch(i){await Vo(e,i)}Ng(e)&&Og(e)}function Hw(t){return ni(t)&&t.du.length<10}function zw(t,e){t.du.push(e);const n=Ss(t);n.Oo()&&n.Xo&&n.Zo(e.mutations)}function Ng(t){return ni(t)&&!Ss(t).ko()&&t.du.length>0}function Og(t){Ss(t).start()}async function Kw(t){Ss(t).nu()}async function Gw(t){const e=Ss(t);for(const n of t.du)e.Zo(n.mutations)}async function Ww(t,e,n){const s=t.du.shift(),i=Mc.from(s,e,n);await Rg(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await wa(t)}async function Qw(t,e){e&&Ss(t).Xo&&await async function(n,s){if(i=s.code,Mb(i)&&i!==ne.ABORTED){const r=n.du.shift();Ss(n).Fo(),await Rg(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await wa(n)}var i}(t,e),Ng(t)&&Og(t)}async function wh(t,e){const n=Ce(t);n.asyncQueue.verifyOperationInProgress(),ye("RemoteStore","RemoteStore received new credentials");const s=ni(n);n.wu.add(3),await jr(n),s&&n.yu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.wu.delete(3),await ba(n)}async function Yw(t,e){const n=Ce(t);e?(n.wu.delete(2),await ba(n)):e||(n.wu.add(2),await jr(n),n.yu.set("Unknown"))}function Li(t){return t.Iu||(t.Iu=function(e,n,s){const i=Ce(e);return i.iu(),new Mw(n,i.So,i.authCredentials,i.appCheckCredentials,i.It,s)}(t.datastore,t.asyncQueue,{Yr:Vw.bind(null,t),Zr:jw.bind(null,t),zo:qw.bind(null,t)}),t.mu.push(async e=>{e?(t.Iu.Fo(),jc(t)?Vc(t):t.yu.set("Unknown")):(await t.Iu.stop(),Pg(t))})),t.Iu}function Ss(t){return t.Tu||(t.Tu=function(e,n,s){const i=Ce(e);return i.iu(),new $w(n,i.So,i.authCredentials,i.appCheckCredentials,i.It,s)}(t.datastore,t.asyncQueue,{Yr:Kw.bind(null,t),Zr:Qw.bind(null,t),eu:Gw.bind(null,t),tu:Ww.bind(null,t)}),t.mu.push(async e=>{e?(t.Tu.Fo(),await wa(t)):(await t.Tu.stop(),t.du.length>0&&(ye("RemoteStore",`Stopping write stream with ${t.du.length} pending writes`),t.du=[]))})),t.Tu}/**
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
 */class qc{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new _s,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new qc(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Ee(ne.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Hc(t,e){if(xn("AsyncQueue",`${e}: ${t}`),Fr(t))return new Ee(ne.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class mi{constructor(e){this.comparator=e?(n,s)=>e(n,s)||ke.comparator(n.key,s.key):(n,s)=>ke.comparator(n.key,s.key),this.keyedMap=Wi(),this.sortedSet=new St(this.comparator)}static emptySet(e){return new mi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof mi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new mi;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class kh{constructor(){this.Eu=new St(ke.comparator)}track(e){const n=e.doc.key,s=this.Eu.get(n);s?e.type!==0&&s.type===3?this.Eu=this.Eu.insert(n,e):e.type===3&&s.type!==1?this.Eu=this.Eu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Eu=this.Eu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Eu=this.Eu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Eu=this.Eu.remove(n):e.type===1&&s.type===2?this.Eu=this.Eu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Eu=this.Eu.insert(n,{type:2,doc:e.doc}):Se():this.Eu=this.Eu.insert(n,e)}Au(){const e=[];return this.Eu.inorderTraversal((n,s)=>{e.push(s)}),e}}class Si{constructor(e,n,s,i,r,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,s,i,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Si(e,n,mi.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ma(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
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
 */class Xw{constructor(){this.Ru=void 0,this.listeners=[]}}class Jw{constructor(){this.queries=new Oi(e=>tg(e),ma),this.onlineState="Unknown",this.bu=new Set}}async function Lg(t,e){const n=Ce(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new Xw),i)try{r.Ru=await n.onListen(s)}catch(o){const a=Hc(o,`Initialization of query '${Ll(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,r),r.listeners.push(e),e.Pu(n.onlineState),r.Ru&&e.vu(r.Ru)&&zc(n)}async function Mg(t,e){const n=Ce(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function xw(t,e){const n=Ce(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.vu(i)&&(s=!0);o.Ru=i}}s&&zc(n)}function Zw(t,e,n){const s=Ce(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function zc(t){t.bu.forEach(e=>{e.next()})}class $g{constructor(e,n,s){this.query=e,this.Vu=n,this.Su=!1,this.Du=null,this.onlineState="Unknown",this.options=s||{}}vu(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new Si(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Su?this.Cu(e)&&(this.Vu.next(e),n=!0):this.xu(e,this.onlineState)&&(this.Nu(e),n=!0),this.Du=e,n}onError(e){this.Vu.error(e)}Pu(e){this.onlineState=e;let n=!1;return this.Du&&!this.Su&&this.xu(this.Du,e)&&(this.Nu(this.Du),n=!0),n}xu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.ku||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Cu(e){if(e.docChanges.length>0)return!0;const n=this.Du&&this.Du.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Nu(e){e=Si.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Su=!0,this.Vu.next(e)}}/**
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
 */class Ug{constructor(e){this.key=e}}class Fg{constructor(e){this.key=e}}class ek{constructor(e,n){this.query=e,this.Uu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=Le(),this.mutatedKeys=Le(),this.Gu=ng(e),this.Qu=new mi(this.Gu)}get ju(){return this.Uu}Wu(e,n){const s=n?n.zu:new kh,i=n?n.Qu:this.Qu;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,f)=>{const d=i.get(h),m=Nc(this.query,f)?f:null,_=!!d&&this.mutatedKeys.has(d.key),y=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let v=!1;d&&m?d.data.isEqual(m.data)?_!==y&&(s.track({type:3,doc:m}),v=!0):this.Hu(d,m)||(s.track({type:2,doc:m}),v=!0,(l&&this.Gu(m,l)>0||c&&this.Gu(m,c)<0)&&(a=!0)):!d&&m?(s.track({type:0,doc:m}),v=!0):d&&!m&&(s.track({type:1,doc:d}),v=!0,(l||c)&&(a=!0)),v&&(m?(o=o.add(m),r=y?r.add(h):r.delete(h)):(o=o.delete(h),r=r.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),r=r.delete(h.key),s.track({type:1,doc:h})}return{Qu:o,zu:s,$i:a,mutatedKeys:r}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const i=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const r=e.zu.Au();r.sort((c,h)=>function(f,d){const m=_=>{switch(_){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Se()}};return m(f)-m(d)}(c.type,h.type)||this.Gu(c.doc,h.doc)),this.Ju(s);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,l=a!==this.qu;return this.qu=a,r.length!==0||l?{snapshot:new Si(this.query,e.Qu,i,r,e.mutatedKeys,a===0,l,!1,!!s&&s.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}Pu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new kh,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.Uu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.Uu=this.Uu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Uu=this.Uu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=Le(),this.Qu.forEach(s=>{this.Zu(s.key)&&(this.Ku=this.Ku.add(s.key))});const n=[];return e.forEach(s=>{this.Ku.has(s)||n.push(new Fg(s))}),this.Ku.forEach(s=>{e.has(s)||n.push(new Ug(s))}),n}tc(e){this.Uu=e.Hi,this.Ku=Le();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return Si.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class tk{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class nk{constructor(e){this.key=e,this.nc=!1}}class sk{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new Oi(a=>tg(a),ma),this.rc=new Map,this.oc=new Set,this.uc=new St(ke.comparator),this.cc=new Map,this.ac=new $c,this.hc={},this.lc=new Map,this.fc=Ii.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function ik(t,e){const n=pk(t);let s,i;const r=n.ic.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.ec();else{const o=await Aw(n.localStore,Zn(e));n.isPrimaryClient&&Cg(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await rk(n,e,s,a==="current",o.resumeToken)}return i}async function rk(t,e,n,s,i){t._c=(f,d,m)=>async function(_,y,v,E){let T=y.view.Wu(v);T.$i&&(T=await vh(_.localStore,y.query,!1).then(({documents:U})=>y.view.Wu(U,T)));const L=E&&E.targetChanges.get(y.targetId),D=y.view.applyChanges(T,_.isPrimaryClient,L);return Th(_,y.targetId,D.Xu),D.snapshot}(t,f,d,m);const r=await vh(t.localStore,e,!0),o=new ek(e,r.Hi),a=o.Wu(r.documents),l=Vr.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,l);Th(t,n,c.Xu);const h=new tk(e,n,o);return t.ic.set(e,h),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),c.snapshot}async function ok(t,e){const n=Ce(t),s=n.ic.get(e),i=n.rc.get(s.targetId);if(i.length>1)return n.rc.set(s.targetId,i.filter(r=>!ma(r,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Fl(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Ag(n.remoteStore,s.targetId),Bl(n,s.targetId)}).catch(Ur)):(Bl(n,s.targetId),await Fl(n.localStore,s.targetId,!0))}async function ak(t,e,n){const s=mk(t);try{const i=await function(r,o){const a=Ce(r),l=Tt.now(),c=o.reduce((d,m)=>d.add(m.key),Le());let h,f;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let m=es(),_=Le();return a.Gi.getEntries(d,c).next(y=>{m=y,m.forEach((v,E)=>{E.isValidDocument()||(_=_.add(v))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,m)).next(y=>{h=y;const v=[];for(const E of o){const T=Nb(E,h.get(E.key).overlayedDocument);T!=null&&v.push(new Ps(E.key,T,Zm(T.value.mapValue),En.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,v,o)}).next(y=>{f=y;const v=y.applyToLocalDocumentSet(h,_);return a.documentOverlayCache.saveOverlays(d,y.batchId,v)})}).then(()=>({batchId:f.batchId,changes:dg(h)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let l=r.hc[r.currentUser.toKey()];l||(l=new St(Qe)),l=l.insert(o,a),r.hc[r.currentUser.toKey()]=l}(s,i.batchId,n),await qr(s,i.changes),await wa(s.remoteStore)}catch(i){const r=Hc(i,"Failed to persist write");n.reject(r)}}async function Bg(t,e){const n=Ce(t);try{const s=await Iw(n.localStore,e);e.targetChanges.forEach((i,r)=>{const o=n.cc.get(r);o&&(tt(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.nc=!0:i.modifiedDocuments.size>0?tt(o.nc):i.removedDocuments.size>0&&(tt(o.nc),o.nc=!1))}),await qr(n,s,e)}catch(s){await Ur(s)}}function Eh(t,e,n){const s=Ce(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.ic.forEach((r,o)=>{const a=o.view.Pu(e);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=Ce(r);a.onlineState=o;let l=!1;a.queries.forEach((c,h)=>{for(const f of h.listeners)f.Pu(o)&&(l=!0)}),l&&zc(a)}(s.eventManager,e),i.length&&s.sc.zo(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function lk(t,e,n){const s=Ce(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.cc.get(e),r=i&&i.key;if(r){let o=new St(ke.comparator);o=o.insert(r,Vt.newNoDocument(r,Re.min()));const a=Le().add(r),l=new va(Re.min(),new Map,new It(Qe),o,a);await Bg(s,l),s.uc=s.uc.remove(r),s.cc.delete(e),Kc(s)}else await Fl(s.localStore,e,!1).then(()=>Bl(s,e,n)).catch(Ur)}async function ck(t,e){const n=Ce(t),s=e.batch.batchId;try{const i=await Tw(n.localStore,e);jg(n,s,null),Vg(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await qr(n,i)}catch(i){await Ur(i)}}async function uk(t,e,n){const s=Ce(t);try{const i=await function(r,o){const a=Ce(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let c;return a.mutationQueue.lookupMutationBatch(l,o).next(h=>(tt(h!==null),c=h.keys(),a.mutationQueue.removeMutationBatch(l,h))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,c,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,c)).next(()=>a.localDocuments.getDocuments(l,c))})}(s.localStore,e);jg(s,e,n),Vg(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await qr(s,i)}catch(i){await Ur(i)}}function Vg(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function jg(t,e,n){const s=Ce(t);let i=s.hc[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(n?r.reject(n):r.resolve(),i=i.remove(e)),s.hc[s.currentUser.toKey()]=i}}function Bl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.rc.get(e))t.ic.delete(s),n&&t.sc.wc(s,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(s=>{t.ac.containsKey(s)||qg(t,s)})}function qg(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(Ag(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),Kc(t))}function Th(t,e,n){for(const s of n)s instanceof Ug?(t.ac.addReference(s.key,e),hk(t,s)):s instanceof Fg?(ye("SyncEngine","Document no longer in limbo: "+s.key),t.ac.removeReference(s.key,e),t.ac.containsKey(s.key)||qg(t,s.key)):Se()}function hk(t,e){const n=e.key,s=n.path.canonicalString();t.uc.get(n)||t.oc.has(s)||(ye("SyncEngine","New document in limbo: "+n),t.oc.add(s),Kc(t))}function Kc(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new ke(rt.fromString(e)),s=t.fc.next();t.cc.set(s,new nk(n)),t.uc=t.uc.insert(n,s),Cg(t.remoteStore,new Vs(Zn(Rc(n.path)),s,2,Cc.at))}}async function qr(t,e,n){const s=Ce(t),i=[],r=[],o=[];s.ic.isEmpty()||(s.ic.forEach((a,l)=>{o.push(s._c(l,e,n).then(c=>{if((c||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const h=Fc.Ci(l.targetId,c);r.push(h)}}))}),await Promise.all(o),s.sc.zo(i),await async function(a,l){const c=Ce(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>se.forEach(l,f=>se.forEach(f.Si,d=>c.persistence.referenceDelegate.addReference(h,f.targetId,d)).next(()=>se.forEach(f.Di,d=>c.persistence.referenceDelegate.removeReference(h,f.targetId,d)))))}catch(h){if(!Fr(h))throw h;ye("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const f=h.targetId;if(!h.fromCache){const d=c.Ui.get(f),m=d.snapshotVersion,_=d.withLastLimboFreeSnapshotVersion(m);c.Ui=c.Ui.insert(f,_)}}}(s.localStore,r))}async function fk(t,e){const n=Ce(t);if(!n.currentUser.isEqual(e)){ye("SyncEngine","User change. New user:",e.toKey());const s=await Eg(n.localStore,e);n.currentUser=e,function(i,r){i.lc.forEach(o=>{o.forEach(a=>{a.reject(new Ee(ne.CANCELLED,r))})}),i.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await qr(n,s.ji)}}function dk(t,e){const n=Ce(t),s=n.cc.get(e);if(s&&s.nc)return Le().add(s.key);{let i=Le();const r=n.rc.get(e);if(!r)return i;for(const o of r){const a=n.ic.get(o);i=i.unionWith(a.view.ju)}return i}}function pk(t){const e=Ce(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Bg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=dk.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=lk.bind(null,e),e.sc.zo=xw.bind(null,e.eventManager),e.sc.wc=Zw.bind(null,e.eventManager),e}function mk(t){const e=Ce(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ck.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=uk.bind(null,e),e}class gk{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=ya(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return Ew(this.persistence,new ww,e.initialUser,this.It)}yc(e){return new yw(Uc.Bs,this.It)}gc(e){return new Pw}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class _k{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Eh(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=fk.bind(null,this.syncEngine),await Yw(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Jw}createDatastore(e){const n=ya(e.databaseInfo.databaseId),s=(i=e.databaseInfo,new Lw(i));var i;return function(r,o,a,l){return new Uw(r,o,a,l)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,i=e.asyncQueue,r=a=>Eh(this.syncEngine,a,0),o=bh.C()?new bh:new Rw,new Bw(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(e,n){return function(s,i,r,o,a,l,c){const h=new sk(s,i,r,o,a,l);return c&&(h.dc=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=Ce(e);ye("RemoteStore","RemoteStore shutting down."),n.wu.add(5),await jr(n),n.gu.shutdown(),n.yu.set("Unknown")}(this.remoteStore)}}/**
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
 */function Hg(t,e,n){if(!n)throw new Ee(ne.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function vk(t,e,n,s){if(e===!0&&s===!0)throw new Ee(ne.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Ih(t){if(!ke.isDocumentKey(t))throw new Ee(ne.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Sh(t){if(ke.isDocumentKey(t))throw new Ee(ne.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Gc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Se()}function On(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Ee(ne.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Gc(t);throw new Ee(ne.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ch=new Map;class Ah{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new Ee(ne.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Ee(ne.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,vk("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ah({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Ee(ne.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new Ee(ne.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ah(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new G1;switch(n.type){case"gapi":const s=n.client;return new X1(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new Ee(ne.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Ch.get(e);n&&(ye("ComponentProvider","Removing Datastore"),Ch.delete(e),n.terminate())}(this),Promise.resolve()}}function yk(t,e,n,s={}){var i;const r=(t=On(t,ka))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==e&&Dl("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=Kt.MOCK_USER;else{o=Dy(s.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=s.mockUserToken.sub||s.mockUserToken.user_id;if(!l)throw new Ee(ne.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Kt(l)}t._authCredentials=new W1(new Qm(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new vs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new mn(this.firestore,e,this._key)}}class Hr{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Hr(this.firestore,e,this._query)}}class vs extends Hr{constructor(e,n,s){super(e,n,Rc(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new mn(this.firestore,null,new ke(e))}withConverter(e){return new vs(this.firestore,e,this._path)}}function Yt(t,e,...n){if(t=Jt(t),Hg("collection","path",e),t instanceof ka){const s=rt.fromString(e,...n);return Sh(s),new vs(t,null,s)}{if(!(t instanceof mn||t instanceof vs))throw new Ee(ne.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(rt.fromString(e,...n));return Sh(s),new vs(t.firestore,null,s)}}function Cs(t,e,...n){if(t=Jt(t),arguments.length===1&&(e=Ym.R()),Hg("doc","path",e),t instanceof ka){const s=rt.fromString(e,...n);return Ih(s),new mn(t,null,new ke(s))}{if(!(t instanceof mn||t instanceof vs))throw new Ee(ne.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(rt.fromString(e,...n));return Ih(s),new mn(t.firestore,t instanceof vs?t.converter:null,new ke(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class zg{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):xn("Uncaught Error in snapshot listener:",e)}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class bk{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=Kt.UNAUTHENTICATED,this.clientId=Ym.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{ye("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(ye("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Ee(ne.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new _s;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Hc(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function wk(t,e){t.asyncQueue.verifyOperationInProgress(),ye("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await Eg(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function kk(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Ek(t);ye("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(i=>wh(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,r)=>wh(e.remoteStore,r)),t.onlineComponents=e}async function Ek(t){return t.offlineComponents||(ye("FirestoreClient","Using default OfflineComponentProvider"),await wk(t,new gk)),t.offlineComponents}async function Kg(t){return t.onlineComponents||(ye("FirestoreClient","Using default OnlineComponentProvider"),await kk(t,new _k)),t.onlineComponents}function Tk(t){return Kg(t).then(e=>e.syncEngine)}async function Vl(t){const e=await Kg(t),n=e.eventManager;return n.onListen=ik.bind(null,e.syncEngine),n.onUnlisten=ok.bind(null,e.syncEngine),n}function Ik(t,e,n={}){const s=new _s;return t.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,l){const c=new zg({next:f=>{r.enqueueAndForget(()=>Mg(i,h)),f.fromCache&&a.source==="server"?l.reject(new Ee(ne.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(f)},error:f=>l.reject(f)}),h=new $g(o,c,{includeMetadataChanges:!0,ku:!0});return Lg(i,h)}(await Vl(t),t.asyncQueue,e,n,s)),s.promise}class Sk{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.No=new Ig(this,"async_queue_retry"),this.Wc=()=>{const n=el();n&&ye("AsyncQueue","Visibility state changed to "+n.visibilityState),this.No.Po()};const e=el();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.Uc){this.Uc=!0,this.Qc=e||!1;const n=el();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.Uc)return new Promise(()=>{});const n=new _s;return this.Hc(()=>this.Uc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.No.reset()}catch(e){if(!Fr(e))throw e;ye("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.No.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(s=>{this.Kc=s,this.Gc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw xn("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Gc=!1,s))));return this.Bc=n,n}enqueueAfterDelay(e,n,s){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const i=qc.createAndSchedule(this,e,n,s,r=>this.Yc(r));return this.qc.push(i),i}zc(){this.Kc&&Se()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.qc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.qc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.qc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.qc.indexOf(e);this.qc.splice(n,1)}}function Dh(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Xs extends ka{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=new Sk,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Gg(this),this._firestoreClient.terminate()}}function Ck(t,e){const n=typeof t=="object"?t:Hp(),s=typeof t=="string"?t:e||"(default)",i=ic(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=Sy("firestore");r&&yk(i,...r)}return i}function Wc(t){return t._firestoreClient||Gg(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Gg(t){var e;const n=t._freezeSettings(),s=function(i,r,o,a){return new ab(i,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new bk(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Ci{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ci(xt.fromBase64String(e))}catch(n){throw new Ee(ne.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ci(xt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Ee(ne.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Gt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{constructor(e){this._methodName=e}}/**
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
 */class Yc{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Ee(ne.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Ee(ne.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Qe(this._lat,e._lat)||Qe(this._long,e._long)}}/**
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
 */const Ak=/^__.*__$/;class Dk{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Ps(e,this.data,this.fieldMask,n,this.fieldTransforms):new Br(e,this.data,n,this.fieldTransforms)}}class Wg{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new Ps(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Qg(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Se()}}class Xc{constructor(e,n,s,i,r,o){this.settings=e,this.databaseId=n,this.It=s,this.ignoreUndefinedProperties=i,r===void 0&&this.na(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new Xc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:s,oa:!1});return i.ua(e),i}ca(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:s,oa:!1});return i.na(),i}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return jo(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(Qg(this.sa)&&Ak.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class Pk{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.It=s||ya(e)}da(e,n,s,i=!1){return new Xc({sa:e,methodName:n,fa:s,path:Gt.emptyPath(),oa:!1,la:i},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function Yg(t){const e=t._freezeSettings(),n=ya(t._databaseId);return new Pk(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Rk(t,e,n,s,i,r={}){const o=t.da(r.merge||r.mergeFields?2:0,e,n,i);Jc("Data must be an object, but it was:",o,s);const a=Xg(s,o);let l,c;if(r.merge)l=new kn(o.fieldMask),c=o.fieldTransforms;else if(r.mergeFields){const h=[];for(const f of r.mergeFields){const d=jl(e,f,n);if(!o.contains(d))throw new Ee(ne.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);xg(h,d)||h.push(d)}l=new kn(h),c=o.fieldTransforms.filter(f=>l.covers(f.field))}else l=null,c=o.fieldTransforms;return new Dk(new hn(a),l,c)}class Ta extends Qc{_toFieldTransform(e){if(e.sa!==2)throw e.sa===1?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ta}}function Nk(t,e,n,s){const i=t.da(1,e,n);Jc("Data must be an object, but it was:",i,s);const r=[],o=hn.empty();ti(s,(l,c)=>{const h=xc(e,l,n);c=Jt(c);const f=i.ca(h);if(c instanceof Ta)r.push(h);else{const d=Ia(c,f);d!=null&&(r.push(h),o.set(h,d))}});const a=new kn(r);return new Wg(o,a,i.fieldTransforms)}function Ok(t,e,n,s,i,r){const o=t.da(1,e,n),a=[jl(e,s,n)],l=[i];if(r.length%2!=0)throw new Ee(ne.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<r.length;d+=2)a.push(jl(e,r[d])),l.push(r[d+1]);const c=[],h=hn.empty();for(let d=a.length-1;d>=0;--d)if(!xg(c,a[d])){const m=a[d];let _=l[d];_=Jt(_);const y=o.ca(m);if(_ instanceof Ta)c.push(m);else{const v=Ia(_,y);v!=null&&(c.push(m),h.set(m,v))}}const f=new kn(c);return new Wg(h,f,o.fieldTransforms)}function Ia(t,e){if(Jg(t=Jt(t)))return Jc("Unsupported field value:",e,t),Xg(t,e);if(t instanceof Qc)return function(n,s){if(!Qg(s.sa))throw s.ha(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ha(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=Ia(o,s.aa(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(t,e)}return function(n,s){if((n=Jt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Sb(s.It,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Tt.fromDate(n);return{timestampValue:Bo(s.It,i)}}if(n instanceof Tt){const i=new Tt(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Bo(s.It,i)}}if(n instanceof Yc)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Ci)return{bytesValue:vg(s.It,n._byteString)};if(n instanceof mn){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s.ha(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Lc(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ha(`Unsupported field value: ${Gc(n)}`)}(t,e)}function Xg(t,e){const n={};return Xm(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ti(t,(s,i)=>{const r=Ia(i,e.ra(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function Jg(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Tt||t instanceof Yc||t instanceof Ci||t instanceof mn||t instanceof Qc)}function Jc(t,e,n){if(!Jg(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Gc(n);throw s==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+s)}}function jl(t,e,n){if((e=Jt(e))instanceof Ea)return e._internalPath;if(typeof e=="string")return xc(t,e);throw jo("Field path arguments must be of type string or ",t,!1,void 0,n)}const Lk=new RegExp("[~\\*/\\[\\]]");function xc(t,e,n){if(e.search(Lk)>=0)throw jo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ea(...e.split("."))._internalPath}catch{throw jo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function jo(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${s}`),o&&(l+=` in document ${i}`),l+=")"),new Ee(ne.INVALID_ARGUMENT,a+t+l)}function xg(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new mn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Mk(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(e_("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Mk extends Zg{data(){return super.data()}}function e_(t,e){return typeof e=="string"?xc(t,e):e instanceof Ea?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t_(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Ee(ne.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $k{convertValue(e,n="none"){switch(Ys(e)){case 0:return null;case 1:return e.booleanValue;case 2:return vt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ei(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Se()}}convertObject(e,n){const s={};return ti(e.fields,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(e){return new Yc(vt(e.latitude),vt(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=xm(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(hr(e));default:return null}}convertTimestamp(e){const n=Is(e);return new Tt(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=rt.fromString(e);tt(kg(s));const i=new fr(s.get(1),s.get(3)),r=new ke(s.popFirst(5));return i.isEqual(n)||xn(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uk(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class n_ extends Zg{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new po(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(e_("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class po extends n_{data(e={}){return super.data(e)}}class s_{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Qi(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new po(this._firestore,this._userDataWriter,s.key,s,new Qi(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Ee(ne.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>({type:"added",doc:new po(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Qi(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter),oldIndex:-1,newIndex:r++}))}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new po(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Qi(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,c=-1;return o.type!==0&&(l=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),c=r.indexOf(o.doc.key)),{type:Fk(o.type),doc:a,oldIndex:l,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Fk(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Se()}}class Zc extends $k{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ci(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new mn(this.firestore,null,n)}}function eu(t){t=On(t,Hr);const e=On(t.firestore,Xs),n=Wc(e),s=new Zc(e);return t_(t._query),Ik(n,t._query).then(i=>new s_(e,s,t,i))}function tu(t,e,n,...s){t=On(t,mn);const i=On(t.firestore,Xs),r=Yg(i);let o;return o=typeof(e=Jt(e))=="string"||e instanceof Ea?Ok(r,"updateDoc",t._key,e,n,s):Nk(r,"updateDoc",t._key,e),nu(i,[o.toMutation(t._key,En.exists(!0))])}function Sa(t){return nu(On(t.firestore,Xs),[new Oc(t._key,En.none())])}function ys(t,e){const n=On(t.firestore,Xs),s=Cs(t),i=Uk(t.converter,e);return nu(n,[Rk(Yg(t.firestore),"addDoc",s._key,i,t.converter!==null,{}).toMutation(s._key,En.exists(!1))]).then(()=>s)}function Ca(t,...e){var n,s,i;t=Jt(t);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Dh(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(Dh(e[o])){const f=e[o];e[o]=(n=f.next)===null||n===void 0?void 0:n.bind(f),e[o+1]=(s=f.error)===null||s===void 0?void 0:s.bind(f),e[o+2]=(i=f.complete)===null||i===void 0?void 0:i.bind(f)}let l,c,h;if(t instanceof mn)c=On(t.firestore,Xs),h=Rc(t._key.path),l={next:f=>{e[o]&&e[o](Bk(c,t,f))},error:e[o+1],complete:e[o+2]};else{const f=On(t,Hr);c=On(f.firestore,Xs),h=f._query;const d=new Zc(c);l={next:m=>{e[o]&&e[o](new s_(c,d,f,m))},error:e[o+1],complete:e[o+2]},t_(t._query)}return function(f,d,m,_){const y=new zg(_),v=new $g(d,y,m);return f.asyncQueue.enqueueAndForget(async()=>Lg(await Vl(f),v)),()=>{y.bc(),f.asyncQueue.enqueueAndForget(async()=>Mg(await Vl(f),v))}}(Wc(c),h,a,l)}function nu(t,e){return function(n,s){const i=new _s;return n.asyncQueue.enqueueAndForget(async()=>ak(await Tk(n),s,i)),i.promise}(Wc(t),e)}function Bk(t,e,n){const s=n.docs.get(e._key),i=new Zc(t);return new n_(t,i,e._key,s,new Qi(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Ni=n})(Cr),bi(new Gs("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new Xs(new Q1(n.getProvider("auth-internal")),new x1(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new Ee(ne.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new fr(a.options.projectId,l)}(r,s),r);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),gs(Zu,"3.7.1",t),gs(Zu,"3.7.1","esm2017")})();function su(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function i_(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Vk=i_,r_=new Ir("auth","Firebase",i_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ph=new nc("@firebase/auth");function mo(t,...e){Ph.logLevel<=Ke.ERROR&&Ph.error(`Auth (${Cr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(t,...e){throw iu(t,...e)}function Ln(t,...e){return iu(t,...e)}function jk(t,e,n){const s=Object.assign(Object.assign({},Vk()),{[e]:n});return new Ir("auth","Firebase",s).create(e,{appName:t.name})}function iu(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return r_.create(t,...e)}function Te(t,e,...n){if(!t)throw iu(e,...n)}function Gn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw mo(e),new Error(e)}function ts(t,e){t||Gn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rh=new Map;function Wn(t){ts(t instanceof Function,"Expected a class definition");let e=Rh.get(t);return e?(ts(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Rh.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qk(t,e){const n=ic(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(Io(r,e!=null?e:{}))return i;Tn(i,"already-initialized")}return n.initialize({options:e})}function Hk(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Wn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ql(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function zk(){return Nh()==="http:"||Nh()==="https:"}function Nh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(zk()||_y()||"connection"in navigator)?navigator.onLine:!0}function Gk(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(e,n){this.shortDelay=e,this.longDelay=n,ts(n>e,"Short delay should be less than long delay!"),this.isMobile=gy()||vy()}get(){return Kk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ru(t,e){ts(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Gn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Gn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Gn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qk=new zr(3e4,6e4);function Kr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Gr(t,e,n,s,i={}){return a_(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=Sr(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),o_.fetch()(l_(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function a_(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},Wk),e);try{const i=new Yk(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw ao(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ao(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ao(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw ao(t,"user-disabled",o);const h=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw jk(t,h,c);Tn(t,h)}}catch(i){if(i instanceof ns)throw i;Tn(t,"network-request-failed")}}async function Wr(t,e,n,s,i={}){const r=await Gr(t,e,n,s,i);return"mfaPendingCredential"in r&&Tn(t,"multi-factor-auth-required",{_serverResponse:r}),r}function l_(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?ru(t.config,i):`${t.config.apiScheme}://${i}`}class Yk{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Ln(this.auth,"network-request-failed")),Qk.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ao(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=Ln(t,e,s);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xk(t,e){return Gr(t,"POST","/v1/accounts:delete",e)}async function Jk(t,e){return Gr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nr(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function xk(t,e=!1){const n=Jt(t),s=await n.getIdToken(e),i=ou(s);Te(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:nr(tl(i.auth_time)),issuedAtTime:nr(tl(i.iat)),expirationTime:nr(tl(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function tl(t){return Number(t)*1e3}function ou(t){var e;const[n,s,i]=t.split(".");if(n===void 0||s===void 0||i===void 0)return mo("JWT malformed, contained fewer than 3 sections"),null;try{const r=Up(s);return r?JSON.parse(r):(mo("Failed to decode base64 JWT payload"),null)}catch(r){return mo("Caught error parsing JWT payload as JSON",(e=r)===null||e===void 0?void 0:e.toString()),null}}function Zk(t){const e=ou(t);return Te(e,"internal-error"),Te(typeof e.exp<"u","internal-error"),Te(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _r(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof ns&&eE(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function eE({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tE{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c_{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=nr(this.lastLoginAt),this.creationTime=nr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function qo(t){var e;const n=t.auth,s=await t.getIdToken(),i=await _r(t,Jk(n,{idToken:s}));Te(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?iE(r.providerUserInfo):[],a=sE(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),h=l?c:!1,f={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new c_(r.createdAt,r.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function nE(t){const e=Jt(t);await qo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function sE(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function iE(t){return t.map(e=>{var{providerId:n}=e,s=su(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rE(t,e){const n=await a_(t,{},async()=>{const s=Sr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=l_(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",o_.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Te(e.idToken,"internal-error"),Te(typeof e.idToken<"u","internal-error"),Te(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Zk(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return Te(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await rE(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new vr;return s&&(Te(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(Te(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(Te(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new vr,this.toJSON())}_performRefresh(){return Gn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function is(t,e){Te(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class js{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=su(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new tE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new c_(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await _r(this,this.stsTokenManager.getToken(this.auth,e));return Te(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return xk(this,e)}reload(){return nE(this)}_assign(e){this!==e&&(Te(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new js(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){Te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await qo(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await _r(this,Xk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,h;const f=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,m=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,v=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,E=(c=n.createdAt)!==null&&c!==void 0?c:void 0,T=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:L,emailVerified:D,isAnonymous:U,providerData:W,stsTokenManager:O}=n;Te(L&&O,e,"internal-error");const F=vr.fromJSON(this.name,O);Te(typeof L=="string",e,"internal-error"),is(f,e.name),is(d,e.name),Te(typeof D=="boolean",e,"internal-error"),Te(typeof U=="boolean",e,"internal-error"),is(m,e.name),is(_,e.name),is(y,e.name),is(v,e.name),is(E,e.name),is(T,e.name);const G=new js({uid:L,auth:e,email:d,emailVerified:D,displayName:f,isAnonymous:U,photoURL:_,phoneNumber:m,tenantId:y,stsTokenManager:F,createdAt:E,lastLoginAt:T});return W&&Array.isArray(W)&&(G.providerData=W.map(P=>Object.assign({},P))),v&&(G._redirectEventId=v),G}static async _fromIdTokenResponse(e,n,s=!1){const i=new vr;i.updateFromServerResponse(n);const r=new js({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await qo(r),r}}/**
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
 */class u_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}u_.type="NONE";const Oh=u_;/**
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
 */function go(t,e,n){return`firebase:${t}:${e}:${n}`}class gi{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=go(this.userKey,i.apiKey,r),this.fullPersistenceKey=go("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?js._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new gi(Wn(Oh),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||Wn(Oh);const o=go(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const h=await c._get(o);if(h){const f=js._fromJSON(e,h);c!==r&&(a=f),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new gi(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new gi(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lh(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(d_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(h_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(m_(e))return"Blackberry";if(g_(e))return"Webos";if(au(e))return"Safari";if((e.includes("chrome/")||f_(e))&&!e.includes("edge/"))return"Chrome";if(p_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function h_(t=Xt()){return/firefox\//i.test(t)}function au(t=Xt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function f_(t=Xt()){return/crios\//i.test(t)}function d_(t=Xt()){return/iemobile/i.test(t)}function p_(t=Xt()){return/android/i.test(t)}function m_(t=Xt()){return/blackberry/i.test(t)}function g_(t=Xt()){return/webos/i.test(t)}function Aa(t=Xt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function oE(t=Xt()){var e;return Aa(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function aE(){return yy()&&document.documentMode===10}function __(t=Xt()){return Aa(t)||p_(t)||g_(t)||m_(t)||/windows phone/i.test(t)||d_(t)}function lE(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v_(t,e=[]){let n;switch(t){case"Browser":n=Lh(Xt());break;case"Worker":n=`${Lh(Xt())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Cr}/${s}`}/**
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
 */class cE{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const s=[];try{for(const i of this.queue)await i(e),i.onAbort&&s.push(i.onAbort)}catch(i){s.reverse();for(const r of s)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uE{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Mh(this),this.idTokenSubscription=new Mh(this),this.beforeStateQueue=new cE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=r_,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Wn(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await gi.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await qo(e)}catch(s){if(((n=s)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Gk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Jt(e):null;return n&&Te(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Te(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Wn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ir("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Wn(e)||this._popupRedirectResolver;Te(n,this,"argument-error"),this.redirectPersistenceManager=await gi.create(this,[Wn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return Te(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=v_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function Qr(t){return Jt(t)}class Mh{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ly(n=>this.observer=n)}get next(){return Te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function hE(t,e,n){const s=Qr(t);Te(s._canInitEmulator,s,"emulator-config-failed"),Te(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),r=y_(e),{host:o,port:a}=fE(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||dE()}function y_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function fE(t){const e=y_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:$h(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:$h(o)}}}function $h(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function dE(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Gn("not implemented")}_getIdTokenResponse(e){return Gn("not implemented")}_linkToIdToken(e,n){return Gn("not implemented")}_getReauthenticationResolver(e){return Gn("not implemented")}}async function pE(t,e){return Gr(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mE(t,e){return Wr(t,"POST","/v1/accounts:signInWithPassword",Kr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gE(t,e){return Wr(t,"POST","/v1/accounts:signInWithEmailLink",Kr(t,e))}async function _E(t,e){return Wr(t,"POST","/v1/accounts:signInWithEmailLink",Kr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr extends lu{constructor(e,n,s,i=null){super("password",s),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new yr(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new yr(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return mE(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return gE(e,{email:this._email,oobCode:this._password});default:Tn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return pE(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return _E(e,{idToken:n,email:this._email,oobCode:this._password});default:Tn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _i(t,e){return Wr(t,"POST","/v1/accounts:signInWithIdp",Kr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vE="http://localhost";class Js extends lu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Js(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Tn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=su(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new Js(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return _i(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,_i(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,_i(e,n)}buildRequest(){const e={requestUri:vE,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Sr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yE(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function bE(t){const e=Hi(zi(t)).link,n=e?Hi(zi(e)).deep_link_id:null,s=Hi(zi(t)).deep_link_id;return(s?Hi(zi(s)).link:null)||s||n||e||t}class cu{constructor(e){var n,s,i,r,o,a;const l=Hi(zi(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,h=(s=l.oobCode)!==null&&s!==void 0?s:null,f=yE((i=l.mode)!==null&&i!==void 0?i:null);Te(c&&h&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=h,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=bE(e);try{return new cu(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(){this.providerId=Mi.PROVIDER_ID}static credential(e,n){return yr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=cu.parseLink(n);return Te(s,"argument-error"),yr._fromEmailAndCode(e,s.code,s.tenantId)}}Mi.PROVIDER_ID="password";Mi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Mi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Yr extends b_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls extends Yr{constructor(){super("facebook.com")}static credential(e){return Js._fromParams({providerId:ls.PROVIDER_ID,signInMethod:ls.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ls.credentialFromTaggedObject(e)}static credentialFromError(e){return ls.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ls.credential(e.oauthAccessToken)}catch{return null}}}ls.FACEBOOK_SIGN_IN_METHOD="facebook.com";ls.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs extends Yr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Js._fromParams({providerId:cs.PROVIDER_ID,signInMethod:cs.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return cs.credentialFromTaggedObject(e)}static credentialFromError(e){return cs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return cs.credential(n,s)}catch{return null}}}cs.GOOGLE_SIGN_IN_METHOD="google.com";cs.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us extends Yr{constructor(){super("github.com")}static credential(e){return Js._fromParams({providerId:us.PROVIDER_ID,signInMethod:us.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return us.credentialFromTaggedObject(e)}static credentialFromError(e){return us.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return us.credential(e.oauthAccessToken)}catch{return null}}}us.GITHUB_SIGN_IN_METHOD="github.com";us.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs extends Yr{constructor(){super("twitter.com")}static credential(e,n){return Js._fromParams({providerId:hs.PROVIDER_ID,signInMethod:hs.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return hs.credentialFromTaggedObject(e)}static credentialFromError(e){return hs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return hs.credential(n,s)}catch{return null}}}hs.TWITTER_SIGN_IN_METHOD="twitter.com";hs.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wE(t,e){return Wr(t,"POST","/v1/accounts:signUp",Kr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await js._fromIdTokenResponse(e,s,i),o=Uh(s);return new xs({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=Uh(s);return new xs({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function Uh(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho extends ns{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Ho.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new Ho(e,n,s,i)}}function w_(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Ho._fromErrorAndOperation(t,r,e,s):r})}async function kE(t,e,n=!1){const s=await _r(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return xs._forOperation(t,"link",s)}/**
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
 */async function EE(t,e,n=!1){var s;const{auth:i}=t,r="reauthenticate";try{const o=await _r(t,w_(i,r,e,t),n);Te(o.idToken,i,"internal-error");const a=ou(o.idToken);Te(a,i,"internal-error");const{sub:l}=a;return Te(t.uid===l,i,"user-mismatch"),xs._forOperation(t,r,o)}catch(o){throw((s=o)===null||s===void 0?void 0:s.code)==="auth/user-not-found"&&Tn(i,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function k_(t,e,n=!1){const s="signIn",i=await w_(t,s,e),r=await xs._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}async function TE(t,e){return k_(Qr(t),e)}async function IE(t,e,n){const s=Qr(t),i=await wE(s,{returnSecureToken:!0,email:e,password:n}),r=await xs._fromIdTokenResponse(s,"signIn",i);return await s._updateCurrentUser(r.user),r}function SE(t,e,n){return TE(Jt(t),Mi.credential(e,n))}function CE(t,e,n,s){return Jt(t).onIdTokenChanged(e,n,s)}function AE(t,e,n){return Jt(t).beforeAuthStateChanged(e,n)}const zo="__sak";/**
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
 */class E_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(zo,"1"),this.storage.removeItem(zo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DE(){const t=Xt();return au(t)||Aa(t)}const PE=1e3,RE=10;class T_ extends E_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=DE()&&lE(),this.fallbackToPolling=__(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);aE()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,RE):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},PE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}T_.type="LOCAL";const NE=T_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I_ extends E_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}I_.type="SESSION";const S_=I_;/**
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
 */function OE(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Da{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new Da(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await OE(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Da.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uu(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class LE{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=uu("",20);i.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(f){const d=f;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(h),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(h),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mn(){return window}function ME(t){Mn().location.href=t}/**
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
 */function C_(){return typeof Mn().WorkerGlobalScope<"u"&&typeof Mn().importScripts=="function"}async function $E(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function UE(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function FE(){return C_()?self:null}/**
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
 */const A_="firebaseLocalStorageDb",BE=1,Ko="firebaseLocalStorage",D_="fbase_key";class Xr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Pa(t,e){return t.transaction([Ko],e?"readwrite":"readonly").objectStore(Ko)}function VE(){const t=indexedDB.deleteDatabase(A_);return new Xr(t).toPromise()}function Hl(){const t=indexedDB.open(A_,BE);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Ko,{keyPath:D_})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Ko)?e(s):(s.close(),await VE(),e(await Hl()))})})}async function Fh(t,e,n){const s=Pa(t,!0).put({[D_]:e,value:n});return new Xr(s).toPromise()}async function jE(t,e){const n=Pa(t,!1).get(e),s=await new Xr(n).toPromise();return s===void 0?null:s.value}function Bh(t,e){const n=Pa(t,!0).delete(e);return new Xr(n).toPromise()}const qE=800,HE=3;class P_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Hl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>HE)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return C_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Da._getInstance(FE()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await $E(),!this.activeServiceWorker)return;this.sender=new LE(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);!s||((e=s[0])===null||e===void 0?void 0:e.fulfilled)&&((n=s[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||UE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Hl();return await Fh(e,zo,"1"),await Bh(e,zo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Fh(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>jE(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Bh(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=Pa(i,!1).getAll();return new Xr(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),qE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}P_.type="LOCAL";const zE=P_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KE(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function GE(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=Ln("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",KE().appendChild(s)})}function WE(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new zr(3e4,6e4);/**
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
 */function QE(t,e){return e?Wn(e):(Te(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class hu extends lu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return _i(e,this._buildIdpRequest())}_linkToIdToken(e,n){return _i(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return _i(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function YE(t){return k_(t.auth,new hu(t),t.bypassAuthState)}function XE(t){const{auth:e,user:n}=t;return Te(n,e,"internal-error"),EE(n,new hu(t),t.bypassAuthState)}async function JE(t){const{auth:e,user:n}=t;return Te(n,e,"internal-error"),kE(n,new hu(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return YE;case"linkViaPopup":case"linkViaRedirect":return JE;case"reauthViaPopup":case"reauthViaRedirect":return XE;default:Tn(this.auth,"internal-error")}}resolve(e){ts(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ts(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xE=new zr(2e3,1e4);class hi extends R_{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,hi.currentPopupAction&&hi.currentPopupAction.cancel(),hi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Te(e,this.auth,"internal-error"),e}async onExecution(){ts(this.filter.length===1,"Popup operations only handle one event");const e=uu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ln(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ln(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,hi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ln(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,xE.get())};e()}}hi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZE="pendingRedirect",_o=new Map;class eT extends R_{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=_o.get(this.auth._key());if(!e){try{const s=await tT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}_o.set(this.auth._key(),e)}return this.bypassAuthState||_o.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function tT(t,e){const n=iT(e),s=sT(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function nT(t,e){_o.set(t._key(),e)}function sT(t){return Wn(t._redirectPersistence)}function iT(t){return go(ZE,t.config.apiKey,t.name)}async function rT(t,e,n=!1){const s=Qr(t),i=QE(s,e),o=await new eT(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oT=10*60*1e3;class aT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!lT(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!N_(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Ln(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=oT&&this.cachedEventUids.clear(),this.cachedEventUids.has(Vh(e))}saveEventToCache(e){this.cachedEventUids.add(Vh(e)),this.lastProcessedEventTime=Date.now()}}function Vh(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function N_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function lT(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return N_(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cT(t,e={}){return Gr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,hT=/^https?/;async function fT(t){if(t.config.emulator)return;const{authorizedDomains:e}=await cT(t);for(const n of e)try{if(dT(n))return}catch{}Tn(t,"unauthorized-domain")}function dT(t){const e=ql(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!hT.test(n))return!1;if(uT.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const pT=new zr(3e4,6e4);function jh(){const t=Mn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function mT(t){return new Promise((e,n)=>{var s,i,r;function o(){jh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{jh(),n(Ln(t,"network-request-failed"))},timeout:pT.get()})}if(!((i=(s=Mn().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=Mn().gapi)===null||r===void 0)&&r.load)o();else{const a=WE("iframefcb");return Mn()[a]=()=>{gapi.load?o():n(Ln(t,"network-request-failed"))},GE(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw vo=null,e})}let vo=null;function gT(t){return vo=vo||mT(t),vo}/**
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
 */const _T=new zr(5e3,15e3),vT="__/auth/iframe",yT="emulator/auth/iframe",bT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},wT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function kT(t){const e=t.config;Te(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ru(e,yT):`https://${t.config.authDomain}/${vT}`,s={apiKey:e.apiKey,appName:t.name,v:Cr},i=wT.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${Sr(s).slice(1)}`}async function ET(t){const e=await gT(t),n=Mn().gapi;return Te(n,t,"internal-error"),e.open({where:document.body,url:kT(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:bT,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=Ln(t,"network-request-failed"),a=Mn().setTimeout(()=>{r(o)},_T.get());function l(){Mn().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const TT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},IT=500,ST=600,CT="_blank",AT="http://localhost";class qh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function DT(t,e,n,s=IT,i=ST){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},TT),{width:s.toString(),height:i.toString(),top:r,left:o}),c=Xt().toLowerCase();n&&(a=f_(c)?CT:n),h_(c)&&(e=e||AT,l.scrollbars="yes");const h=Object.entries(l).reduce((d,[m,_])=>`${d}${m}=${_},`,"");if(oE(c)&&a!=="_self")return PT(e||"",a),new qh(null);const f=window.open(e||"",a,h);Te(f,t,"popup-blocked");try{f.focus()}catch{}return new qh(f)}function PT(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const RT="__/auth/handler",NT="emulator/auth/handler";function Hh(t,e,n,s,i,r){Te(t.config.authDomain,t,"auth-domain-config-required"),Te(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Cr,eventId:i};if(e instanceof b_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Oy(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(r||{}))o[l]=c}if(e instanceof Yr){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${OT(t)}?${Sr(a).slice(1)}`}function OT({config:t}){return t.emulator?ru(t,NT):`https://${t.authDomain}/${RT}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nl="webStorageSupport";class LT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=S_,this._completeRedirectFn=rT,this._overrideRedirectResult=nT}async _openPopup(e,n,s,i){var r;ts((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=Hh(e,n,s,ql(),i);return DT(e,o,uu())}async _openRedirect(e,n,s,i){return await this._originValidation(e),ME(Hh(e,n,s,ql(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(ts(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await ET(e),s=new aT(e);return n.register("authEvent",i=>(Te(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(nl,{type:nl},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[nl];o!==void 0&&n(!!o),Tn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=fT(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return __()||au()||Aa()}}const MT=LT;var zh="@firebase/auth",Kh="0.20.10";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $T{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{var i;e(((i=s)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UT(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function FT(t){bi(new Gs("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:r,authDomain:o}=s.options;return((a,l)=>{Te(r&&!r.includes(":"),"invalid-api-key",{appName:a.name}),Te(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const c={apiKey:r,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:v_(t)},h=new uE(a,l,c);return Hk(h,n),h})(s,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),bi(new Gs("auth-internal",e=>{const n=Qr(e.getProvider("auth").getImmediate());return(s=>new $T(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),gs(zh,Kh,UT(t)),gs(zh,Kh,"esm2017")}/**
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
 */const BT=5*60,VT=Bp("authIdTokenMaxAge")||BT;let Gh=null;const jT=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>VT)return;const i=n==null?void 0:n.token;Gh!==i&&(Gh=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function qT(t=Hp()){const e=ic(t,"auth");if(e.isInitialized())return e.getImmediate();const n=qk(t,{popupRedirectResolver:MT,persistence:[zE,NE,S_]}),s=Bp("authTokenSyncURL");if(s){const r=jT(s);AE(n,r,()=>r(n.currentUser)),CE(n,o=>r(o))}const i=Fp("auth");return i&&hE(n,`http://${i}`),n}FT("Browser");let qs=[],Fs=[],bs=[];const HT={apiKey:"AIzaSyDGi3ndUC1b4SFNstliSSVryu7_ymXEkZc",authDomain:"match-home-7d1f9.firebaseapp.com",databaseURL:"https://match-home-7d1f9-default-rtdb.firebaseio.com",projectId:"match-home-7d1f9",storageBucket:"match-home-7d1f9.appspot.com",messagingSenderId:"747751099607",appId:"1:747751099607:web:29d1e5beda87c847dfb492"},O_=qp(HT),lt=Ck(O_),L_=qT(O_),zT=Yt(lt,"binnacles"),KT=Yt(lt,"contacts"),GT=Yt(lt,"properties");Yt(lt,"todos");eu(zT).then(t=>Fs=t.docs.map(e=>({...e.data(),id:e.id})));eu(KT).then(t=>qs=t.docs.map(e=>({...e.data(),id:e.id})));eu(GT).then(t=>bs=t.docs.map(e=>({...e.data(),id:e.id})));function Wh(t,e,n){const s=t.slice();return s[1]=e[n],s}function Qh(t,e,n){const s=t.slice();return s[1]=e[n],s}function Yh(t){let e,n,s=kt(t[1].endTask)+"",i,r,o=t[1].task+"",a,l,c=t[1].notes&&Xh(t);return{c(){e=p("ul"),n=p("li"),i=S(s),r=S(` - -\r
                    `),a=S(o),l=S(` - -\r
                    `),c&&c.c(),ws(n,"complete",t[1].isComplete)},m(h,f){k(h,e,f),u(e,n),u(n,i),u(n,r),u(n,a),u(n,l),c&&c.m(n,null)},p(h,f){f&1&&s!==(s=kt(h[1].endTask)+"")&&ie(i,s),f&1&&o!==(o=h[1].task+"")&&ie(a,o),h[1].notes?c?c.p(h,f):(c=Xh(h),c.c(),c.m(n,null)):c&&(c.d(1),c=null),f&1&&ws(n,"complete",h[1].isComplete)},d(h){h&&w(e),c&&c.d()}}}function Xh(t){let e=t[1].notes+"",n;return{c(){n=S(e)},m(s,i){k(s,n,i)},p(s,i){i&1&&e!==(e=s[1].notes+"")&&ie(n,e)},d(s){s&&w(n)}}}function Jh(t){let e,n=!t[1].timeTask&&Yh(t);return{c(){n&&n.c(),e=nn()},m(s,i){n&&n.m(s,i),k(s,e,i)},p(s,i){s[1].timeTask?n&&(n.d(1),n=null):n?n.p(s,i):(n=Yh(s),n.c(),n.m(e.parentNode,e))},d(s){n&&n.d(s),s&&w(e)}}}function xh(t){let e,n,s,i=Ru(t[1].endTask)+"",r,o,a=Pu(t[1].endTask)+"",l,c,h=kt(t[1].endTask)+"",f,d,m=t[1].task+"",_,y,v=t[1].notes&&Zh(t);return{c(){e=p("ul"),n=p("li"),s=p("spam"),r=S(i),o=b(),l=S(a),c=S(` - -\r
                      `),f=S(h),d=b(),_=S(m),y=S(` - -\r
                      `),v&&v.c(),g(s,"type","number"),ws(n,"complete",t[1].isComplete)},m(E,T){k(E,e,T),u(e,n),u(n,s),u(s,r),u(s,o),u(s,l),u(s,c),u(s,f),u(s,d),u(s,_),u(s,y),v&&v.m(s,null)},p(E,T){T&1&&i!==(i=Ru(E[1].endTask)+"")&&ie(r,i),T&1&&a!==(a=Pu(E[1].endTask)+"")&&ie(l,a),T&1&&h!==(h=kt(E[1].endTask)+"")&&ie(f,h),T&1&&m!==(m=E[1].task+"")&&ie(_,m),E[1].notes?v?v.p(E,T):(v=Zh(E),v.c(),v.m(s,null)):v&&(v.d(1),v=null),T&1&&ws(n,"complete",E[1].isComplete)},d(E){E&&w(e),v&&v.d()}}}function Zh(t){let e=t[1].notes+"",n;return{c(){n=S(e)},m(s,i){k(s,n,i)},p(s,i){i&1&&e!==(e=s[1].notes+"")&&ie(n,e)},d(s){s&&w(n)}}}function ef(t){let e,n=t[1].timeTask&&xh(t);return{c(){n&&n.c(),e=b()},m(s,i){n&&n.m(s,i),k(s,e,i)},p(s,i){s[1].timeTask?n?n.p(s,i):(n=xh(s),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(s){n&&n.d(s),s&&w(e)}}}function WT(t){let e,n,s,i,r,o,a,l,c,h,f=t[0],d=[];for(let y=0;y<f.length;y+=1)d[y]=Jh(Qh(t,f,y));let m=t[0],_=[];for(let y=0;y<m.length;y+=1)_[y]=ef(Wh(t,m,y));return{c(){e=p("div"),n=p("div"),s=p("div"),i=p("h1"),i.textContent="Agenda",r=b(),o=p("h3"),o.textContent="Tareas",a=b();for(let y=0;y<d.length;y+=1)d[y].c();l=b(),c=p("h3"),c.textContent="Citas",h=b();for(let y=0;y<_.length;y+=1)_[y].c();g(i,"class","title svelte-13rvwi6"),g(o,"class","subtitle svelte-13rvwi6"),g(c,"class","subtitle svelte-13rvwi6"),g(s,"class","schedule"),g(n,"class","container"),g(e,"class","show-home")},m(y,v){k(y,e,v),u(e,n),u(n,s),u(s,i),u(s,r),u(s,o),u(s,a);for(let E=0;E<d.length;E+=1)d[E].m(s,null);u(s,l),u(s,c),u(s,h);for(let E=0;E<_.length;E+=1)_[E].m(s,null)},p(y,[v]){if(v&1){f=y[0];let E;for(E=0;E<f.length;E+=1){const T=Qh(y,f,E);d[E]?d[E].p(T,v):(d[E]=Jh(T),d[E].c(),d[E].m(s,l))}for(;E<d.length;E+=1)d[E].d(1);d.length=f.length}if(v&1){m=y[0];let E;for(E=0;E<m.length;E+=1){const T=Wh(y,m,E);_[E]?_[E].p(T,v):(_[E]=ef(T),_[E].c(),_[E].m(s,null))}for(;E<_.length;E+=1)_[E].d(1);_.length=m.length}},i:he,o:he,d(y){y&&w(e),Fe(d,y),Fe(_,y)}}}function QT(t,e,n){let s;return Pe(t,Ls,i=>n(0,s=i)),[s]}class YT extends Xe{constructor(e){super(),Ye(this,e,QT,WT,Ge,{})}}function tf(t,e,n){const s=t.slice();return s[2]=e[n],s[4]=n,s}function XT(t){let e,n=kt(t[2].date)+"",s,i,r=t[2].action+"",o,a,l=t[2].comment+"",c,h,f=t[2].to+"",d;return{c(){e=p("div"),s=S(n),i=b(),o=S(r),a=b(),c=S(l),h=S(`\r
                            a: \r
                            `),d=S(f),g(e,"class","date-binnacle")},m(m,_){k(m,e,_),u(e,s),u(e,i),u(e,o),u(e,a),u(e,c),u(e,h),u(e,d)},p(m,_){_&1&&n!==(n=kt(m[2].date)+"")&&ie(s,n),_&1&&r!==(r=m[2].action+"")&&ie(o,r),_&1&&l!==(l=m[2].comment+"")&&ie(c,l),_&1&&f!==(f=m[2].to+"")&&ie(d,f)},d(m){m&&w(e)}}}function nf(t){let e,n,s=t[4]<20&&XT(t);return{c(){e=p("div"),s&&s.c(),n=b(),g(e,"class","int-binnacle")},m(i,r){k(i,e,r),s&&s.m(e,null),u(e,n)},p(i,r){i[4]<20&&s.p(i,r)},d(i){i&&w(e),s&&s.d()}}}function JT(t){let e,n,s,i,r,o,a,l=t[0],c=[];for(let h=0;h<l.length;h+=1)c[h]=nf(tf(t,l,h));return{c(){e=S(`a\r
`),n=p("main"),s=p("div"),i=p("div"),r=p("div"),o=p("h1"),o.textContent="Bit\xE1cora",a=b();for(let h=0;h<c.length;h+=1)c[h].c();g(o,"class","title svelte-7lgm1k"),g(r,"class","binnacleHome"),g(i,"class","schedule"),g(s,"class","container")},m(h,f){k(h,e,f),k(h,n,f),u(n,s),u(s,i),u(i,r),u(r,o),u(r,a);for(let d=0;d<c.length;d+=1)c[d].m(r,null)},p(h,[f]){if(f&1){l=h[0];let d;for(d=0;d<l.length;d+=1){const m=tf(h,l,d);c[d]?c[d].p(m,f):(c[d]=nf(m),c[d].c(),c[d].m(r,null))}for(;d<c.length;d+=1)c[d].d(1);c.length=l.length}},i:he,o:he,d(h){h&&w(e),h&&w(n),Fe(c,h)}}}function xT(t){t.sort((e,n)=>new Date(e.date)<new Date(n.date)?1:new Date(e.date)>new Date(n.date)?-1:0)}function ZT(t,e,n){let s=[];const i=Ca(Yt(lt,"binnacles"),r=>{n(0,s=r.docs.map(o=>({...o.data(),id:o.id}))),xT(s)},r=>{console.log(r)});return wr(i),[s]}class eI extends Xe{constructor(e){super(),Ye(this,e,ZT,JT,Ge,{})}}const M_="/to-deploy-mh/assets/add-user.1bd66bde.png",$_="/to-deploy-mh/assets/house.99302696.png",U_="/to-deploy-mh/assets/schedule.20f01954.png",tI="/to-deploy-mh/assets/team.31fda88c.png",nI=yt(!1);function sI(t){let e;return{c(){e=S("Inicia sesi\xF3n")},m(n,s){k(n,e,s)},d(n){n&&w(e)}}}function iI(t){let e,n,s,i,r,o,a,l,c,h,f,d,m,_,y,v,E,T,L,D,U,W,O,F,G,P,Z,H,Q;return P=new un({props:{to:"/login",$$slots:{default:[sI]},$$scope:{ctx:t}}}),{c(){e=p("div"),n=p("br"),s=p("br"),i=p("br"),r=b(),o=p("div"),a=p("h1"),a.textContent="Registra tu cuenta",l=b(),c=p("div"),h=p("input"),f=b(),d=p("div"),m=p("input"),_=b(),y=p("br"),v=b(),E=p("div"),T=p("button"),T.textContent="Registrarse",L=b(),D=p("p"),D.textContent="O tambi\xE9n",U=b(),W=p("br"),O=b(),F=p("p"),G=S("\xBFYa tienes cuenta? "),ge(P.$$.fragment),g(a,"class","text-center text-login svelte-ftg4em"),g(h,"name","email"),g(h,"type","email"),g(h,"class","input-form svelte-ftg4em"),g(h,"placeholder","Correo"),h.required=!0,g(c,"class","center svelte-ftg4em"),g(m,"name","password"),g(m,"type","password"),g(m,"class","input-form svelte-ftg4em"),g(m,"placeholder","Contrase\xF1a"),g(d,"class","center svelte-ftg4em"),g(T,"class","button-signup fondo-color-signup svelte-ftg4em"),g(E,"class","center svelte-ftg4em"),g(D,"class","text-center svelte-ftg4em"),g(F,"class","text-center svelte-ftg4em"),g(o,"class","form-signin svelte-ftg4em")},m(N,K){k(N,e,K),u(e,n),u(e,s),u(e,i),u(e,r),u(e,o),u(o,a),u(o,l),u(o,c),u(c,h),u(o,f),u(o,d),u(d,m),u(o,_),u(o,y),u(o,v),u(o,E),u(E,T),u(o,L),u(o,D),u(o,U),u(o,W),u(o,O),u(o,F),u(F,G),fe(P,F,null),Z=!0,H||(Q=[j(h,"input",t[2]),j(m,"input",t[3]),j(T,"click",t[1])],H=!0)},p(N,[K]){const B={};K&64&&(B.$$scope={dirty:K,ctx:N}),P.$set(B)},i(N){Z||(q(P.$$.fragment,N),Z=!0)},o(N){x(P.$$.fragment,N),Z=!1},d(N){N&&w(e),de(P),H=!1,xe(Q)}}}function rI(t){const e=Zs();let n={email:"",password:""};const s=a=>{n={...n,[a.target.name]:a.target.value}};return[s,async()=>{try{await IE(L_,n.email,n.password),e("/")}catch(a){console.log(a)}},a=>s(a),a=>s(a)]}class oI extends Xe{constructor(e){super(),Ye(this,e,rI,iI,Ge,{})}}function F_(t){const e=t-1;return e*e*e+1}function Ai(t){return t===0||t===1?t:t<.5?.5*Math.pow(2,20*t-10):-.5*Math.pow(2,10-t*20)+1}function Go(t,{delay:e=0,duration:n=400,easing:s=tp}={}){const i=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:s,css:r=>`opacity: ${r*i}`}}function Wo(t,{delay:e=0,duration:n=400,easing:s=F_,x:i=0,y:r=0,opacity:o=0}={}){const a=getComputedStyle(t),l=+a.opacity,c=a.transform==="none"?"":a.transform,h=l*(1-o);return{delay:e,duration:n,easing:s,css:(f,d)=>`
			transform: ${c} translate(${(1-f)*i}px, ${(1-f)*r}px);
			opacity: ${l-h*d}`}}function Di(t,{delay:e=0,duration:n=400,easing:s=F_,start:i=0,opacity:r=0}={}){const o=getComputedStyle(t),a=+o.opacity,l=o.transform==="none"?"":o.transform,c=1-i,h=a*(1-r);return{delay:e,duration:n,easing:s,css:(f,d)=>`
			transform: ${l} scale(${1-c*d});
			opacity: ${a-h*d}
		`}}function aI(t){t.sort((e,n)=>new Date(e.endTask)<new Date(n.endTask)?1:new Date(e.endTask)>new Date(n.endTask)?-1:0)}const Ra="/to-deploy-mh/assets/edit.070633c4.svg",B_="/to-deploy-mh/assets/calendar_check.3c15b67b.svg";function sf(t,e,n){const s=t.slice();return s[22]=e[n],s}function rf(t,e,n){const s=t.slice();return s[22]=e[n],s}function lI(t){let e;return{c(){e=S("Editar")},m(n,s){k(n,e,s)},d(n){n&&w(e)}}}function cI(t){let e;return{c(){e=S("Guardar")},m(n,s){k(n,e,s)},d(n){n&&w(e)}}}function of(t){let e,n,s;return{c(){e=p("button"),e.textContent="Borrar"},m(i,r){k(i,e,r),n||(s=j(e,"click",t[6]),n=!0)},p:he,d(i){i&&w(e),n=!1,s()}}}function af(t){let e,n,s,i,r,o,a,l,c,h,f,d=t[3],m=[];for(let T=0;T<d.length;T+=1)m[T]=hf(rf(t,d,T));let _=null;d.length||(_=lf());let y=t[3],v=[];for(let T=0;T<y.length;T+=1)v[T]=mf(sf(t,y,T));let E=null;return y.length||(E=ff()),{c(){e=p("h3"),e.textContent="Tareas",n=b(),s=p("ol");for(let T=0;T<m.length;T+=1)m[T].c();_&&_.c(),i=b(),r=p("p"),r.textContent=`${gf}`,o=b(),a=p("h3"),a.textContent="Agenda",l=b(),c=p("ol");for(let T=0;T<v.length;T+=1)v[T].c();E&&E.c(),h=b(),f=p("p"),f.textContent=`${gf}`,g(r,"class","error"),g(f,"class","error")},m(T,L){k(T,e,L),k(T,n,L),k(T,s,L);for(let D=0;D<m.length;D+=1)m[D].m(s,null);_&&_.m(s,null),u(s,i),u(s,r),k(T,o,L),k(T,a,L),k(T,l,L),k(T,c,L);for(let D=0;D<v.length;D+=1)v[D].m(c,null);E&&E.m(c,null),u(c,h),u(c,f)},p(T,L){if(L&40){d=T[3];let D;for(D=0;D<d.length;D+=1){const U=rf(T,d,D);m[D]?m[D].p(U,L):(m[D]=hf(U),m[D].c(),m[D].m(s,i))}for(;D<m.length;D+=1)m[D].d(1);m.length=d.length,!d.length&&_?_.p(T,L):d.length?_&&(_.d(1),_=null):(_=lf(),_.c(),_.m(s,i))}if(L&40){y=T[3];let D;for(D=0;D<y.length;D+=1){const U=sf(T,y,D);v[D]?v[D].p(U,L):(v[D]=mf(U),v[D].c(),v[D].m(c,h))}for(;D<v.length;D+=1)v[D].d(1);v.length=y.length,!y.length&&E?E.p(T,L):y.length?E&&(E.d(1),E=null):(E=ff(),E.c(),E.m(c,h))}},d(T){T&&w(e),T&&w(n),T&&w(s),Fe(m,T),_&&_.d(),T&&w(o),T&&w(a),T&&w(l),T&&w(c),Fe(v,T),E&&E.d()}}}function lf(t){let e;return{c(){e=p("p"),e.textContent="No Hay Tareas Pendientes"},m(n,s){k(n,e,s)},p:he,d(n){n&&w(e)}}}function cf(t){let e,n,s,i,r,o,a,l,c,h,f=kt(t[22].endTask)+"",d,m,_=t[22].task+"",y,v,E,T;function L(){return t[13](t[22])}function D(){return t[14](t[22])}let U=t[22].notes&&uf(t);return{c(){e=p("div"),n=p("li"),s=p("span"),i=p("img"),o=b(),a=p("img"),c=b(),h=p("spam"),d=S(f),m=S(` -*-\r
                                 `),y=S(_),v=S(` -*-\r
                                 `),U&&U.c(),st(i.src,r=Ra)||g(i,"src",r),g(i,"alt","edit"),g(i,"class","iconIMH svelte-156umuq"),st(a.src,l=B_)||g(a,"src",l),g(a,"alt","complete"),g(a,"class","iconIMH svelte-156umuq"),g(n,"class","schedule svelte-156umuq"),ws(n,"complete",t[22].isComplete)},m(W,O){k(W,e,O),u(e,n),u(n,s),u(s,i),u(s,o),u(s,a),u(n,c),u(n,h),u(h,d),u(h,m),u(h,y),u(h,v),U&&U.m(h,null),E||(T=[j(i,"click",L),j(a,"click",D)],E=!0)},p(W,O){t=W,O&8&&f!==(f=kt(t[22].endTask)+"")&&ie(d,f),O&8&&_!==(_=t[22].task+"")&&ie(y,_),t[22].notes?U?U.p(t,O):(U=uf(t),U.c(),U.m(h,null)):U&&(U.d(1),U=null),O&8&&ws(n,"complete",t[22].isComplete)},d(W){W&&w(e),U&&U.d(),E=!1,xe(T)}}}function uf(t){let e=t[22].notes+"",n;return{c(){n=S(e)},m(s,i){k(s,n,i)},p(s,i){i&8&&e!==(e=s[22].notes+"")&&ie(n,e)},d(s){s&&w(n)}}}function hf(t){let e,n=!t[22].timeTask&&cf(t);return{c(){n&&n.c(),e=nn()},m(s,i){n&&n.m(s,i),k(s,e,i)},p(s,i){s[22].timeTask?n&&(n.d(1),n=null):n?n.p(s,i):(n=cf(s),n.c(),n.m(e.parentNode,e))},d(s){n&&n.d(s),s&&w(e)}}}function ff(t){let e;return{c(){e=p("p"),e.textContent="No Hay Tareas Pendientes"},m(n,s){k(n,e,s)},p:he,d(n){n&&w(e)}}}function df(t){let e,n,s,i,r,o,a,l,c,h,f=t[22].timeTask+"",d,m,_=kt(t[22].endTask)+"",y,v,E=t[22].task+"",T,L,D,U;function W(){return t[15](t[22])}function O(){return t[16](t[22])}let F=t[22].notes&&pf(t);return{c(){e=p("div"),n=p("li"),s=p("span"),i=p("img"),o=b(),a=p("img"),c=b(),h=p("spam"),d=S(f),m=S(` -*-\r
                                 `),y=S(_),v=S(` -*-\r
                                 `),T=S(E),L=S(` -*-\r
                                 `),F&&F.c(),st(i.src,r=Ra)||g(i,"src",r),g(i,"alt","edit"),g(i,"class","iconIMH svelte-156umuq"),st(a.src,l=B_)||g(a,"src",l),g(a,"alt","complete"),g(a,"class","iconIMH svelte-156umuq"),g(n,"class","schedule svelte-156umuq"),ws(n,"complete",t[22].isComplete)},m(G,P){k(G,e,P),u(e,n),u(n,s),u(s,i),u(s,o),u(s,a),u(n,c),u(n,h),u(h,d),u(h,m),u(h,y),u(h,v),u(h,T),u(h,L),F&&F.m(h,null),D||(U=[j(i,"click",W),j(a,"click",O),j(e,"dblclick",t[17])],D=!0)},p(G,P){t=G,P&8&&f!==(f=t[22].timeTask+"")&&ie(d,f),P&8&&_!==(_=kt(t[22].endTask)+"")&&ie(y,_),P&8&&E!==(E=t[22].task+"")&&ie(T,E),t[22].notes?F?F.p(t,P):(F=pf(t),F.c(),F.m(h,null)):F&&(F.d(1),F=null),P&8&&ws(n,"complete",t[22].isComplete)},d(G){G&&w(e),F&&F.d(),D=!1,xe(U)}}}function pf(t){let e=t[22].notes+"",n;return{c(){n=S(e)},m(s,i){k(s,n,i)},p(s,i){i&8&&e!==(e=s[22].notes+"")&&ie(n,e)},d(s){s&&w(n)}}}function mf(t){let e,n=t[22].timeTask&&df(t);return{c(){n&&n.c(),e=nn()},m(s,i){n&&n.m(s,i),k(s,e,i)},p(s,i){s[22].timeTask?n?n.p(s,i):(n=df(s),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(s){n&&n.d(s),s&&w(e)}}}function uI(t){let e,n,s,i,r,o,a,l,c,h,f,d,m,_,y,v,E,T,L,D,U,W,O,F,G,P,Z,H,Q,N,K,B,ue;function ee(M,J){return M[0]?lI:cI}let le=ee(t),re=le(t),$=t[0]&&of(t),C=t[2]==="start"&&af(t);return{c(){e=p("div"),n=p("h1"),n.textContent="Agenda",s=b(),i=p("img"),o=b(),a=p("div"),l=p("div"),h=b(),f=p("div"),d=p("div"),m=p("input"),_=b(),y=p("div"),v=p("input"),E=b(),T=p("input"),L=b(),D=p("div"),U=p("textarea"),W=b(),O=p("div"),F=p("button"),re.c(),G=b(),P=p("button"),P.textContent="Cancelar",Z=b(),$&&$.c(),Q=b(),N=p("div"),C&&C.c(),st(i.src,r=U_)||g(i,"src",r),g(i,"alt","schedule"),g(i,"class","imgTitle svelte-156umuq"),g(l,"class","background"),g(m,"type","text"),g(m,"class","inputTask"),g(m,"cols","56"),g(m,"rows","1"),g(m,"placeholder","Agrega una Tarea o Cita"),g(v,"type","time"),g(v,"class","inputDate"),g(T,"type","date"),g(T,"class","inputDate"),g(y,"class","contDate"),g(U,"name","notes"),g(U,"id",""),g(U,"cols","56"),g(U,"rows","5"),g(U,"placeholder","descripci\xF3n"),g(f,"class","pop-up"),g(a,"class","container"),g(N,"class","container"),g(e,"class","container")},m(M,J){k(M,e,J),u(e,n),u(e,s),u(e,i),u(e,o),u(e,a),u(a,l),u(a,h),u(a,f),u(f,d),u(d,m),ve(m,t[1].task),u(f,_),u(f,y),u(y,v),ve(v,t[1].timeTask),u(y,E),u(y,T),ve(T,t[1].endTask),u(f,L),u(f,D),u(D,U),ve(U,t[1].notes),u(f,W),u(f,O),u(O,F),re.m(F,null),u(O,G),u(O,P),u(O,Z),$&&$.m(O,null),u(e,Q),u(e,N),C&&C.m(N,null),K=!0,B||(ue=[j(l,"keydown",t[8]),j(m,"input",t[9]),j(m,"input",t[7]),j(v,"input",t[10]),j(T,"input",t[11]),j(U,"input",t[12]),j(F,"click",t[4]),j(P,"click",t[8])],B=!0)},p(M,[J]){J&2&&m.value!==M[1].task&&ve(m,M[1].task),J&2&&ve(v,M[1].timeTask),J&2&&ve(T,M[1].endTask),J&2&&ve(U,M[1].notes),le!==(le=ee(M))&&(re.d(1),re=le(M),re&&(re.c(),re.m(F,null))),M[0]?$?$.p(M,J):($=of(M),$.c(),$.m(O,null)):$&&($.d(1),$=null),M[2]==="start"?C?C.p(M,J):(C=af(M),C.c(),C.m(N,null)):C&&(C.d(1),C=null)},i(M){K||(Ze(()=>{c||(c=fn(l,Go,{},!0)),c.run(1)}),Ze(()=>{H||(H=fn(f,Wo,{},!0)),H.run(1)}),K=!0)},o(M){c||(c=fn(l,Go,{},!1)),c.run(0),H||(H=fn(f,Wo,{},!1)),H.run(0),K=!1},d(M){M&&w(e),M&&c&&c.end(),re.d(),$&&$.d(),M&&H&&H.end(),C&&C.d(),B=!1,xe(ue)}}}let gf="";function hI(t,e,n){let s,i,r;Pe(t,as,G=>n(19,s=G)),Pe(t,je,G=>n(2,i=G)),Pe(t,Ls,G=>n(3,r=G));const o=Zs();let a=!1,l="addItem";we(je,i="start",i);let c={task:"",isComplete:"",createdAt:"",endTask:"",timeTask:"",notes:"",user:"",id:""};const h=Ca(Yt(lt,"todos"),G=>{we(Ls,r=G.docs.map(P=>({...P.data(),id:P.id})),r),aI(r)},G=>{console.log(G)});wr(h);async function f(){we(as,s=c,s);let G=new Date(s.endTask).getTime();we(as,s={...s,endTask:G},s),l==="deleItem"?confirm("Quieres borrarlo definitivmente?")===!0&&await Sa(Cs(lt,"todos",s.id)):l==="editItem"||await ys(Yt(lt,"todos"),s),n(0,a=!1),we(as,s={},s),n(1,c={}),we(je,i="start",i)}async function d(G){n(1,c=G),console.log(G),l="editItem",n(0,a=!0)}async function m(){n(0,a=!0),l="deleItem",f()}function _(){c.task.length>0&&we(je,i="typing",i)}function y(){we(as,s=[],s),o("/contactos")}function v(){c.task=this.value,n(1,c)}function E(){c.timeTask=this.value,n(1,c)}function T(){c.endTask=this.value,n(1,c)}function L(){c.notes=this.value,n(1,c)}return[a,c,i,r,f,d,m,_,y,v,E,T,L,G=>d(G),G=>void 0,G=>d(G),G=>void 0,()=>d]}class fI extends Xe{constructor(e){super(),Ye(this,e,hI,uI,Ge,{})}}function dI(t){let e;return{c(){e=p("h1"),e.textContent="Estas en Sinergias"},m(n,s){k(n,e,s)},p:he,i:he,o:he,d(n){n&&w(e)}}}class pI extends Xe{constructor(e){super(),Ye(this,e,null,dI,Ge,{})}}function mI(t){let e,n,s,i,r,o;return{c(){e=p("div"),n=p("div"),s=p("img"),r=b(),o=p("h1"),o.textContent="Contactos",st(s.src,i=M_)||g(s,"src",i),g(s,"alt","Buzon"),g(s,"class","profile-img svelte-obs5po"),g(o,"class","name svelte-obs5po"),g(n,"class","optionCard svelte-obs5po"),g(e,"class","container")},m(a,l){k(a,e,l),u(e,n),u(n,s),u(n,r),u(n,o)},p:he,d(a){a&&w(e)}}}function gI(t){let e,n,s,i,r,o;return{c(){e=p("div"),n=p("div"),s=p("img"),r=b(),o=p("h1"),o.textContent="Propiedades",st(s.src,i=$_)||g(s,"src",i),g(s,"alt","propiedad"),g(s,"class","profile-img svelte-obs5po"),g(o,"class","name svelte-obs5po"),g(n,"class","optionCard svelte-obs5po"),g(e,"class","container")},m(a,l){k(a,e,l),u(e,n),u(n,s),u(n,r),u(n,o)},p:he,d(a){a&&w(e)}}}function _I(t){let e,n,s,i,r,o;return{c(){e=p("div"),n=p("div"),s=p("img"),r=b(),o=p("h1"),o.textContent="Agenda",st(s.src,i=U_)||g(s,"src",i),g(s,"alt","agenda"),g(s,"class","profile-img svelte-obs5po"),g(o,"class","name svelte-obs5po"),g(n,"class","optionCard svelte-obs5po"),g(e,"class","container")},m(a,l){k(a,e,l),u(e,n),u(n,s),u(n,r),u(n,o)},p:he,d(a){a&&w(e)}}}function vI(t){let e,n,s,i,r,o;return{c(){e=p("div"),n=p("div"),s=p("img"),r=b(),o=p("h1"),o.textContent="Sinergias",st(s.src,i=tI)||g(s,"src",i),g(s,"alt","sinergias"),g(s,"class","profile-img svelte-obs5po"),g(o,"class","name svelte-obs5po"),g(n,"class","optionCard svelte-obs5po"),g(e,"class","container")},m(a,l){k(a,e,l),u(e,n),u(n,s),u(n,r),u(n,o)},p:he,d(a){a&&w(e)}}}function yI(t){let e,n,s,i,r,o,a,l;return e=new un({props:{to:"/contactos",title:"contactos",$$slots:{default:[mI]},$$scope:{ctx:t}}}),s=new un({props:{to:"/propiedades",title:"propiedades",$$slots:{default:[gI]},$$scope:{ctx:t}}}),r=new un({props:{to:"/agenda",title:"agenda",class:"s",$$slots:{default:[_I]},$$scope:{ctx:t}}}),a=new un({props:{to:"/sinergias",title:"sinergias",$$slots:{default:[vI]},$$scope:{ctx:t}}}),{c(){ge(e.$$.fragment),n=b(),ge(s.$$.fragment),i=b(),ge(r.$$.fragment),o=b(),ge(a.$$.fragment)},m(c,h){fe(e,c,h),k(c,n,h),fe(s,c,h),k(c,i,h),fe(r,c,h),k(c,o,h),fe(a,c,h),l=!0},p(c,h){const f={};h&1&&(f.$$scope={dirty:h,ctx:c}),e.$set(f);const d={};h&1&&(d.$$scope={dirty:h,ctx:c}),s.$set(d);const m={};h&1&&(m.$$scope={dirty:h,ctx:c}),r.$set(m);const _={};h&1&&(_.$$scope={dirty:h,ctx:c}),a.$set(_)},i(c){l||(q(e.$$.fragment,c),q(s.$$.fragment,c),q(r.$$.fragment,c),q(a.$$.fragment,c),l=!0)},o(c){x(e.$$.fragment,c),x(s.$$.fragment,c),x(r.$$.fragment,c),x(a.$$.fragment,c),l=!1},d(c){de(e,c),c&&w(n),de(s,c),c&&w(i),de(r,c),c&&w(o),de(a,c)}}}function bI(t){let e,n,s,i,r,o,a,l,c;return s=new ec({props:{$$slots:{default:[yI]},$$scope:{ctx:t}}}),o=new YT({props:{"(orderTodos)":!0}}),l=new eI({}),{c(){e=p("body"),n=p("div"),ge(s.$$.fragment),i=b(),r=p("div"),ge(o.$$.fragment),a=b(),ge(l.$$.fragment),g(n,"class","wrapper-grid svelte-obs5po"),g(r,"class",""),g(e,"class","svelte-obs5po")},m(h,f){k(h,e,f),u(e,n),fe(s,n,null),u(e,i),u(e,r),fe(o,r,null),u(r,a),fe(l,r,null),c=!0},p(h,[f]){const d={};f&1&&(d.$$scope={dirty:f,ctx:h}),s.$set(d)},i(h){c||(q(s.$$.fragment,h),q(o.$$.fragment,h),q(l.$$.fragment,h),c=!0)},o(h){x(s.$$.fragment,h),x(o.$$.fragment,h),x(l.$$.fragment,h),c=!1},d(h){h&&w(e),de(s),de(o),de(l)}}}class wI extends Xe{constructor(e){super(),Ye(this,e,null,bI,Ge,{})}}function kI(t){let e,n,s,i,r,o,a,l,c,h,f=kt(t[2])+"",d,m,_,y,v,E,T,L,D,U,W,O,F,G,P,Z,H,Q,N;return{c(){e=p("div"),n=p("div"),s=p("div"),i=p("h5"),r=S(t[0]),o=b(),a=S(t[1]),l=b(),c=p("h5"),h=S("Alta "),d=S(f),m=b(),_=p("div"),y=p("p"),v=S(t[3]),E=b(),T=p("p"),L=S("tel: "),D=S(t[4]),U=S(" email: "),W=S(t[5]),O=b(),F=p("p"),G=S("Presupuesto "),P=S(t[6]),Z=b(),H=p("p"),Q=S("Rango "),N=S(t[7]),g(s,"class","namePerson svelte-s0ws0m"),g(_,"class","nameDate svelte-s0ws0m"),g(n,"class","contactCard"),g(e,"class","container contact svelte-s0ws0m")},m(K,B){k(K,e,B),u(e,n),u(n,s),u(s,i),u(i,r),u(i,o),u(i,a),u(s,l),u(s,c),u(c,h),u(c,d),u(n,m),u(n,_),u(_,y),u(y,v),u(_,E),u(_,T),u(T,L),u(T,D),u(T,U),u(T,W),u(_,O),u(_,F),u(F,G),u(F,P),u(_,Z),u(_,H),u(H,Q),u(H,N)},p(K,[B]){B&1&&ie(r,K[0]),B&2&&ie(a,K[1]),B&4&&f!==(f=kt(K[2])+"")&&ie(d,f),B&8&&ie(v,K[3]),B&16&&ie(D,K[4]),B&32&&ie(W,K[5]),B&64&&ie(P,K[6]),B&128&&ie(N,K[7])},i:he,o:he,d(K){K&&w(e)}}}function EI(t,e,n){let{name:s,lastname:i,createdAt:r,contactStage:o,telephon:a,email:l,budget:c,rangeProp:h}=e;return t.$$set=f=>{"name"in f&&n(0,s=f.name),"lastname"in f&&n(1,i=f.lastname),"createdAt"in f&&n(2,r=f.createdAt),"contactStage"in f&&n(3,o=f.contactStage),"telephon"in f&&n(4,a=f.telephon),"email"in f&&n(5,l=f.email),"budget"in f&&n(6,c=f.budget),"rangeProp"in f&&n(7,h=f.rangeProp)},[s,i,r,o,a,l,c,h]}class TI extends Xe{constructor(e){super(),Ye(this,e,EI,kI,Ge,{name:0,lastname:1,createdAt:2,contactStage:3,telephon:4,email:5,budget:6,rangeProp:7})}}function II(t){let e,n,s,i;return{c(){e=p("div"),n=p("input"),g(n,"class","searchInput svelte-1d4ha5n"),g(n,"type","text"),g(n,"id","search-field"),g(n,"placeholder","Enter Search Term"),g(n,"autocomplete","off"),g(e,"id","search-input-cont")},m(r,o){k(r,e,o),u(e,n),ve(n,t[0]),s||(i=[j(n,"input",t[2]),j(n,"input",t[1])],s=!0)},p(r,[o]){o&1&&n.value!==r[0]&&ve(n,r[0])},i:he,o:he,d(r){r&&w(e),s=!1,xe(i)}}}function SI(t,e,n){let{searchTerm:s}=e;function i(o){sv.call(this,t,o)}function r(){s=this.value,n(0,s)}return t.$$set=o=>{"searchTerm"in o&&n(0,s=o.searchTerm)},[s,i,r]}class fu extends Xe{constructor(e){super(),Ye(this,e,SI,II,Ge,{searchTerm:0})}}async function CI(t,e){if(console.log("estas en la funcion"),t==="todoAdding"){const n=Yt(lt,"todos");await ys(n,e)}else t==="todoUpdate"?await tu(Cs(lt,"todos",e.id),e):t==="todoDelete"&&await Sa(Cs(lt,"todos",e.id));e=""}function AI(t){let e,n,s,i,r,o,a,l,c,h,f,d,m,_,y,v,E,T,L,D,U,W;return{c(){e=p("div"),s=b(),i=p("div"),r=p("div"),o=p("input"),a=b(),l=p("input"),c=b(),h=p("input"),f=b(),d=p("div"),m=p("textarea"),_=b(),y=p("div"),v=p("button"),v.textContent="Guardar",E=b(),T=p("button"),T.textContent="Cancelar",g(e,"class","background svelte-18c6vp2"),g(o,"type","text"),g(o,"class","inputTask svelte-18c6vp2"),g(o,"placeholder","Agrega una Tarea o Cita"),g(l,"type","time"),g(l,"class","inputDate svelte-18c6vp2"),g(l,"placeholder","Hora"),g(h,"type","date"),g(h,"class","inputDate svelte-18c6vp2"),g(h,"placeholder","Fecha"),g(m,"name","notes"),g(m,"cols","40"),g(m,"rows","5"),g(m,"placeholder","descripci\xF3n"),g(v,"class","btnShedule svelte-18c6vp2"),g(T,"class","btnShedule svelte-18c6vp2"),g(i,"class","pop__up svelte-18c6vp2")},m(O,F){k(O,e,F),k(O,s,F),k(O,i,F),u(i,r),u(r,o),ve(o,t[0]),u(i,a),u(i,l),ve(l,t[1].timeTask),u(i,c),u(i,h),ve(h,t[1].endTask),u(i,f),u(i,d),u(d,m),ve(m,t[1].notes),u(i,_),u(i,y),u(y,v),u(y,E),u(y,T),D=!0,U||(W=[j(window,"keydown",t[4]),j(e,"click",t[2]),j(o,"input",t[5]),j(l,"input",t[6]),j(h,"input",t[7]),j(m,"input",t[8]),j(v,"click",t[3]),j(T,"click",t[2])],U=!0)},p(O,[F]){F&1&&o.value!==O[0]&&ve(o,O[0]),F&2&&ve(l,O[1].timeTask),F&2&&ve(h,O[1].endTask),F&2&&ve(m,O[1].notes)},i(O){D||(Ze(()=>{n||(n=fn(e,Go,{},!0)),n.run(1)}),Ze(()=>{L||(L=fn(i,Wo,{},!0)),L.run(1)}),D=!0)},o(O){n||(n=fn(e,Go,{},!1)),n.run(0),L||(L=fn(i,Wo,{},!1)),L.run(0),D=!1},d(O){O&&w(e),O&&n&&n.end(),O&&w(s),O&&w(i),O&&L&&L.end(),U=!1,xe(W)}}}function DI(t,e,n){let s,i,r;Pe(t,as,T=>n(10,s=T)),Pe(t,je,T=>n(11,i=T)),Pe(t,et,T=>n(12,r=T));const o=lp();let a=`${r.name} ${r.lastname}`,l=[],c=[],h;l={task:"",endTask:"",isComplete:"",createdAt:"",timeTask:"",notes:"",user:""};function f(){o("closeIt"),we(je,i="contSelect",i),we(as,s="",s)}const d=async()=>{console.log("ests en addTodo"),we(je,i="todoAdding",i),console.log(h),c=a,we(as,s={...l,task:c},s),CI(i,s),console.log(s)},m=T=>{T.key==="Enter"&&d()};function _(){a=this.value,n(0,a)}function y(){l.timeTask=this.value,n(1,l)}function v(){l.endTask=this.value,n(1,l)}function E(){l.notes=this.value,n(1,l)}return[a,l,f,d,m,_,y,v,E]}class PI extends Xe{constructor(e){super(),Ye(this,e,DI,AI,Ge,{})}}function RI(t){let e,n,s,i,r,o,a,l,c,h,f,d,m,_,y,v,E,T,L,D,U,W,O,F,G,P,Z,H,Q,N,K,B,ue,ee,le,re,$,C,M,J;return{c(){e=p("main"),n=p("section"),s=p("figure"),i=p("img"),o=b(),a=p("div"),l=S(t[1]),c=b(),h=p("figcaption"),f=S(t[2]),d=b(),m=p("section"),_=p("section"),y=p("div"),v=p("div"),E=S(t[3]),T=S(" Rec\xE1maras"),L=b(),D=p("div"),U=S(t[4]),W=S(" Ba\xF1os"),O=b(),F=p("div"),G=S(t[5]),P=S(" Estacionamientos"),Z=b(),H=p("div"),Q=S(t[6]),N=S(" m2 de Contruccion"),K=b(),B=p("div"),ue=S(t[7]),ee=S(" m2 de Terreno"),le=b(),re=p("br"),$=b(),C=p("div"),M=S("Precio $: "),J=S(t[8]),st(i.src,r=t[0])||g(i,"src",r),g(i,"alt",t[1]),g(i,"class","bkcover svelte-1w1p4eb"),g(a,"class","language svelte-1w1p4eb"),g(h,"class","svelte-1w1p4eb"),g(s,"class","bkcont svelte-1w1p4eb"),g(n,"class","book-top-info svelte-1w1p4eb"),g(y,"class","buy-options-cont svelte-1w1p4eb"),g(_,"class","from-pariyatti available-at svelte-1w1p4eb"),g(m,"class","book-bottom-links svelte-1w1p4eb")},m(V,Y){k(V,e,Y),u(e,n),u(n,s),u(s,i),u(s,o),u(s,a),u(a,l),u(s,c),u(s,h),u(h,f),u(e,d),u(e,m),u(m,_),u(_,y),u(y,v),u(v,E),u(v,T),u(y,L),u(y,D),u(D,U),u(D,W),u(y,O),u(y,F),u(F,G),u(F,P),u(y,Z),u(y,H),u(H,Q),u(H,N),u(y,K),u(y,B),u(B,ue),u(B,ee),u(y,le),u(y,re),u(y,$),u(y,C),u(C,M),u(C,J)},p(V,[Y]){Y&1&&!st(i.src,r=V[0])&&g(i,"src",r),Y&2&&g(i,"alt",V[1]),Y&2&&ie(l,V[1]),Y&4&&ie(f,V[2]),Y&8&&ie(E,V[3]),Y&16&&ie(U,V[4]),Y&32&&ie(G,V[5]),Y&64&&ie(Q,V[6]),Y&128&&ie(ue,V[7]),Y&256&&ie(J,V[8])},i:he,o:he,d(V){V&&w(e)}}}function NI(t,e,n){let{urlImage:s,claveEB:i,nameProperty:r,beds:o,bathroom:a,park:l,areaBuilding:c,areaTotal:h,price:f}=e;return t.$$set=d=>{"urlImage"in d&&n(0,s=d.urlImage),"claveEB"in d&&n(1,i=d.claveEB),"nameProperty"in d&&n(2,r=d.nameProperty),"beds"in d&&n(3,o=d.beds),"bathroom"in d&&n(4,a=d.bathroom),"park"in d&&n(5,l=d.park),"areaBuilding"in d&&n(6,c=d.areaBuilding),"areaTotal"in d&&n(7,h=d.areaTotal),"price"in d&&n(8,f=d.price)},[s,i,r,o,a,l,c,h,f]}class V_ extends Xe{constructor(e){super(),Ye(this,e,NI,RI,Ge,{urlImage:0,claveEB:1,nameProperty:2,beds:3,bathroom:4,park:5,areaBuilding:6,areaTotal:7,price:8})}}let Ns;function j_(t){return t<=1e6?Ns="PRM":t<=25e5?Ns="SGN":t<=5e6?Ns="TRC":t<=8e6?Ns="CRT":t<=12e6?Ns="QNT":t>12e6&&(Ns="SXT"),Ns}let sl,il;function OI(t){console.log(t);let e=bs;return e=e.filter(n=>n.selectTP===t.selecTP),console.log("filtraste por tipo de propiedad",e),t.numBeds>0&&(e=e.filter(n=>n.beds>=t.numBeds)),t.numBaths>0&&(e=e.filter(n=>n.bathroom>=t.numBaths)),t.numParks>0&&(e=e.filter(n=>n.park>=t.numParks)),console.log("Por caracteristicas",e),!t.budget&&t.rangeProp!=""&&(t.budget?(console.log("filtraste por rango",t.budget),sl=t.budget*.7,il=t.budget*1.1,console.log(sl,il),e=e.filter(n=>n.price>=sl&&n.price<=il)):(console.log("filtraste por rango",t.rangeProp),e=e.filter(n=>j_(n.price)===t.rangeProp)),console.log("filtraste presupuesto",e)),t.locaProperty.length>0&&(e=e.filter(n=>t.locaProperty.some(s=>n.locaProperty.includes(s)))),console.log("Filtraste por Ubicacion",e),t.tagsProperty.length>0&&(e=e.filter(n=>t.tagsProperty.every(s=>n.tagsProperty.includes(s)))),console.log("Filtraste por localizacion",e),e.length===0||""+e.length,fl.set(e)}async function _f(t,e){if(t==="binnAdding"){console.log(e);const n=Yt(lt,"binnacles");await ys(n,e)}e=[]}const q_="/to-deploy-mh/assets/trash.2d1385a7.svg";function vf(t,e,n){const s=t.slice();return s[10]=e[n],s}function yf(t,e,n){const s=t.slice();return s[51]=e[n],s}function bf(t,e,n){const s=t.slice();return s[54]=e[n],s}function wf(t){let e,n,s,i,r,o=t[7].name+"",a,l,c=t[7].lastname+"",h,f,d,m,_=kt(t[7].createdAt)+"",y,v,E,T,L=t[7].selecTP+"",D,U,W=t[7].numBeds+"",O,F,G=t[7].numBaths+"",P,Z,H=t[7].numParks+"",Q,N,K,B,ue,ee,le=t[7].budget+"",re,$,C,M=t[7].selecTP+"",J,V,Y,Ae,R,ce=t[7].telephon+"",be,He,A,X=t[7].email+"",Me,z,pe,oe,Je=t[7].tagsProperty.join(",  ")+"",yn,Ct,At,sn,Zt=t[7].locaProperty.join(",  ")+"",$t,Ht,ut,pn,ot,ht,rn,ft,Fn,on,dt=t[7].contactStage+"",In,Sn,an,Cn=t[7].comContact+"",An,zt,Be,en,qe,Ne,De,Bn,pt,Vn,Ut,Dn,mt,jn,gt,bn,nt,Jr,ss,Rs,$i,I,ae,Oe,qn,te,at,si,du,pu,xr,Na,Ui,Et,Oa,mu,ii=t[11],ln=[];for(let me=0;me<ii.length;me+=1)ln[me]=kf(bf(t,ii,me));let Dt=t[0]&&Ef(t),Pt=t[5]&&Tf(t),ri=t[6],cn=[];for(let me=0;me<ri.length;me+=1)cn[me]=If(yf(t,ri,me));let Rt=t[4]&&Sf(t);return{c(){e=p("div"),n=p("div"),s=p("h4"),s.textContent="Contacto",i=b(),r=p("h2"),a=S(o),l=b(),h=S(c),f=b(),d=p("p"),m=S("Fecha Alta: "),y=S(_),v=b(),E=p("p"),T=S("Busca  "),D=S(L),U=S(", de "),O=S(W),F=S(" rec\xE1maras,  "),P=S(G),Z=S(" ba\xF1os y "),Q=S(H),N=S(" estacionamientos"),K=b(),B=p("p"),ue=S("Presupuesto tope: "),ee=p("strong"),re=S(le),$=S(" : Tipo de propiedad buscada: "),C=p("strong"),J=S(M),V=b(),Y=p("p"),Ae=S("Tel\xE9fono: "),R=p("strong"),be=S(ce),He=S(" ---- Email: "),A=p("strong"),Me=S(X),z=b(),pe=p("p"),oe=S("Preferencias: "),yn=S(Je),Ct=b(),At=p("p"),sn=S("Ubicaciones: "),$t=S(Zt),Ht=b(),ut=p("div"),pn=p("p"),pn.textContent="Propiedades enviadas:",ot=b(),ht=p("div");for(let me=0;me<ln.length;me+=1)ln[me].c();rn=b(),ft=p("div"),Fn=b(),on=p("p"),In=S(dt),Sn=b(),an=p("p"),An=S(Cn),zt=b(),Be=p("div"),en=p("button"),en.textContent="Programar Evento",qe=b(),Dt&&Dt.c(),Ne=b(),De=p("button"),De.textContent="Ver Propiedades de Interes",Bn=b(),pt=p("button"),pt.textContent="Buscar Propiedad",Vn=b(),Pt&&Pt.c(),Ut=b(),Dn=p("div"),mt=p("button"),mt.textContent="Cancelar",jn=b(),gt=p("div"),bn=p("div"),nt=p("textarea"),Jr=b(),ss=p("div"),Rs=p("button"),Rs.textContent="Enviar WhatsApp",$i=b(),I=p("button"),I.textContent="Guardar Info",ae=b(),Oe=p("div"),qn=p("img"),at=b(),si=p("img"),pu=b(),xr=p("div");for(let me=0;me<cn.length;me+=1)cn[me].c();Na=b(),Rt&&Rt.c(),Ui=nn(),g(ht,"class","mostImage svelte-4bhw6f"),g(ut,"class","propMost"),g(en,"class","btn__common"),g(De,"class","btn__common"),g(pt,"class","btn__common"),g(Be,"class","btn__actions svelte-4bhw6f"),g(mt,"class","btn__cancel"),g(nt,"class","texArea"),g(nt,"cols","65"),g(nt,"rows","5"),g(nt,"placeholder","Ingresa un comentario"),g(Rs,"class","btn__WhatsApp"),g(I,"class","btn__saveNote"),st(qn.src,te=Ra)||g(qn,"src",te),g(qn,"alt","delete"),st(si.src,du=q_)||g(si,"src",du),g(si,"alt","delete"),g(Oe,"class","icon__Content"),g(e,"class","container")},m(me,ze){k(me,e,ze),u(e,n),u(n,s),u(n,i),u(n,r),u(r,a),u(r,l),u(r,h),u(n,f),u(n,d),u(d,m),u(d,y),u(n,v),u(n,E),u(E,T),u(E,D),u(E,U),u(E,O),u(E,F),u(E,P),u(E,Z),u(E,Q),u(E,N),u(n,K),u(n,B),u(B,ue),u(B,ee),u(ee,re),u(B,$),u(B,C),u(C,J),u(n,V),u(n,Y),u(Y,Ae),u(Y,R),u(R,be),u(Y,He),u(Y,A),u(A,Me),u(n,z),u(n,pe),u(pe,oe),u(pe,yn),u(n,Ct),u(n,At),u(At,sn),u(At,$t),u(n,Ht),u(n,ut),u(ut,pn),u(ut,ot),u(ut,ht);for(let Ve=0;Ve<ln.length;Ve+=1)ln[Ve].m(ht,null);u(e,rn),u(e,ft),u(e,Fn),u(e,on),u(on,In),u(e,Sn),u(e,an),u(an,An),u(e,zt),u(e,Be),u(Be,en),u(Be,qe),Dt&&Dt.m(Be,null),u(Be,Ne),u(Be,De),u(Be,Bn),u(Be,pt),u(Be,Vn),Pt&&Pt.m(Be,null),u(e,Ut),u(e,Dn),u(Dn,mt),u(e,jn),u(e,gt),u(gt,bn),u(bn,nt),ve(nt,t[2]),u(bn,Jr),u(bn,ss),u(ss,Rs),u(ss,$i),u(ss,I),u(gt,ae),u(gt,Oe),u(Oe,qn),u(Oe,at),u(Oe,si),u(e,pu),u(e,xr);for(let Ve=0;Ve<cn.length;Ve+=1)cn[Ve].m(xr,null);k(me,Na,ze),Rt&&Rt.m(me,ze),k(me,Ui,ze),Et=!0,Oa||(mu=[j(en,"click",t[25]),j(De,"click",t[26]),j(pt,"click",t[14]),j(mt,"click",t[17]),j(nt,"keypress",t[23]),j(nt,"input",t[28]),j(Rs,"click",t[22]),j(I,"click",t[29]),j(qn,"click",t[18]),j(si,"click",t[19])],Oa=!0)},p(me,ze){if((!Et||ze[0]&128)&&o!==(o=me[7].name+"")&&ie(a,o),(!Et||ze[0]&128)&&c!==(c=me[7].lastname+"")&&ie(h,c),(!Et||ze[0]&128)&&_!==(_=kt(me[7].createdAt)+"")&&ie(y,_),(!Et||ze[0]&128)&&L!==(L=me[7].selecTP+"")&&ie(D,L),(!Et||ze[0]&128)&&W!==(W=me[7].numBeds+"")&&ie(O,W),(!Et||ze[0]&128)&&G!==(G=me[7].numBaths+"")&&ie(P,G),(!Et||ze[0]&128)&&H!==(H=me[7].numParks+"")&&ie(Q,H),(!Et||ze[0]&128)&&le!==(le=me[7].budget+"")&&ie(re,le),(!Et||ze[0]&128)&&M!==(M=me[7].selecTP+"")&&ie(J,M),(!Et||ze[0]&128)&&ce!==(ce=me[7].telephon+"")&&ie(be,ce),(!Et||ze[0]&128)&&X!==(X=me[7].email+"")&&ie(Me,X),(!Et||ze[0]&128)&&Je!==(Je=me[7].tagsProperty.join(",  ")+"")&&ie(yn,Je),(!Et||ze[0]&128)&&Zt!==(Zt=me[7].locaProperty.join(",  ")+"")&&ie($t,Zt),ze[0]&6144){ii=me[11];let Ve;for(Ve=0;Ve<ii.length;Ve+=1){const Fi=bf(me,ii,Ve);ln[Ve]?ln[Ve].p(Fi,ze):(ln[Ve]=kf(Fi),ln[Ve].c(),ln[Ve].m(ht,null))}for(;Ve<ln.length;Ve+=1)ln[Ve].d(1);ln.length=ii.length}if((!Et||ze[0]&128)&&dt!==(dt=me[7].contactStage+"")&&ie(In,dt),(!Et||ze[0]&128)&&Cn!==(Cn=me[7].comContact+"")&&ie(An,Cn),me[0]?Dt?(Dt.p(me,ze),ze[0]&1&&q(Dt,1)):(Dt=Ef(me),Dt.c(),q(Dt,1),Dt.m(Be,Ne)):Dt&&(bt(),x(Dt,1,1,()=>{Dt=null}),wt()),me[5]?Pt?(Pt.p(me,ze),ze[0]&32&&q(Pt,1)):(Pt=Tf(me),Pt.c(),q(Pt,1),Pt.m(Be,null)):Pt&&(bt(),x(Pt,1,1,()=>{Pt=null}),wt()),ze[0]&4&&ve(nt,me[2]),ze[0]&64){ri=me[6];let Ve;for(Ve=0;Ve<ri.length;Ve+=1){const Fi=yf(me,ri,Ve);cn[Ve]?cn[Ve].p(Fi,ze):(cn[Ve]=If(Fi),cn[Ve].c(),cn[Ve].m(xr,null))}for(;Ve<cn.length;Ve+=1)cn[Ve].d(1);cn.length=ri.length}me[4]?Rt?(Rt.p(me,ze),ze[0]&16&&q(Rt,1)):(Rt=Sf(me),Rt.c(),q(Rt,1),Rt.m(Ui.parentNode,Ui)):Rt&&(bt(),x(Rt,1,1,()=>{Rt=null}),wt())},i(me){Et||(q(Dt),q(Pt),q(Rt),Et=!0)},o(me){x(Dt),x(Pt),x(Rt),Et=!1},d(me){me&&w(e),Fe(ln,me),Dt&&Dt.d(),Pt&&Pt.d(),Fe(cn,me),me&&w(Na),Rt&&Rt.d(me),me&&w(Ui),Oa=!1,xe(mu)}}}function kf(t){let e,n,s=t[54]+"",i,r,o,a,l;return{c(){e=p("div"),n=p("p"),i=S(s),r=b(),o=p("img"),l=b(),g(o,"class","imgPropContSelect"),g(o,"height","100"),st(o.src,a=t[12](t[54]))||g(o,"src",a),g(o,"alt",t[54]),g(e,"class","prop__sent svelte-4bhw6f")},m(c,h){k(c,e,h),u(e,n),u(n,i),u(e,r),u(e,o),u(e,l)},p:he,d(c){c&&w(e)}}}function Ef(t){let e,n;const s=[t[7]];let i={};for(let r=0;r<s.length;r+=1)i=Lt(i,s[r]);return e=new PI({props:i}),e.$on("closeIt",t[20]),{c(){ge(e.$$.fragment)},m(r,o){fe(e,r,o),n=!0},p(r,o){const a=o[0]&128?_n(s,[Xn(r[7])]):{};e.$set(a)},i(r){n||(q(e.$$.fragment,r),n=!0)},o(r){x(e.$$.fragment,r),n=!1},d(r){de(e,r)}}}function Tf(t){let e,n,s;function i(o){t[27](o)}let r={};return t[1]!==void 0&&(r.searchTerm=t[1]),e=new fu({props:r}),Yn.push(()=>zs(e,"searchTerm",i)),e.$on("input",t[15]),{c(){ge(e.$$.fragment)},m(o,a){fe(e,o,a),s=!0},p(o,a){const l={};!n&&a[0]&2&&(n=!0,l.searchTerm=o[1],Hs(()=>n=!1)),e.$set(l)},i(o){s||(q(e.$$.fragment,o),s=!0)},o(o){x(e.$$.fragment,o),s=!1},d(o){de(e,o)}}}function If(t){let e,n=kt(t[51].date)+"",s,i,r=t[51].action+"",o,a,l=t[51].comment+"",c;return{c(){e=p("h4"),s=S(n),i=b(),o=S(r),a=b(),c=S(l)},m(h,f){k(h,e,f),u(e,s),u(e,i),u(e,o),u(e,a),u(e,c)},p(h,f){f[0]&64&&n!==(n=kt(h[51].date)+"")&&ie(s,n),f[0]&64&&r!==(r=h[51].action+"")&&ie(o,r),f[0]&64&&l!==(l=h[51].comment+"")&&ie(c,l)},d(h){h&&w(e)}}}function Sf(t){let e,n,s,i=t[9].length+"",r,o,a,l,c=t[9],h=[];for(let m=0;m<c.length;m+=1)h[m]=Cf(vf(t,c,m));const f=m=>x(h[m],1,1,()=>{h[m]=null});let d=t[9].length===0&&Af();return{c(){e=p("main"),n=p("h3"),s=S("Propiedades encontradas: "),r=S(i),o=b();for(let m=0;m<h.length;m+=1)h[m].c();a=b(),d&&d.c(),g(n,"class","svelte-4bhw6f"),g(e,"id","bookshelf"),g(e,"class","svelte-4bhw6f")},m(m,_){k(m,e,_),u(e,n),u(n,s),u(n,r),u(e,o);for(let y=0;y<h.length;y+=1)h[y].m(e,null);u(e,a),d&&d.m(e,null),l=!0},p(m,_){if((!l||_[0]&512)&&i!==(i=m[9].length+"")&&ie(r,i),_[0]&2097672){c=m[9];let y;for(y=0;y<c.length;y+=1){const v=vf(m,c,y);h[y]?(h[y].p(v,_),q(h[y],1)):(h[y]=Cf(v),h[y].c(),q(h[y],1),h[y].m(e,a))}for(bt(),y=c.length;y<h.length;y+=1)f(y);wt()}m[9].length===0?d||(d=Af(),d.c(),d.m(e,null)):d&&(d.d(1),d=null)},i(m){if(!l){for(let _=0;_<c.length;_+=1)q(h[_]);l=!0}},o(m){h=h.filter(Boolean);for(let _=0;_<h.length;_+=1)x(h[_]);l=!1},d(m){m&&w(e),Fe(h,m),d&&d.d()}}}function Cf(t){let e,n,s,i,r,o,a,l,c;const h=[t[10]];let f={};for(let d=0;d<h.length;d+=1)f=Lt(f,h[d]);return r=new V_({props:f}),{c(){e=p("section"),n=p("input"),i=b(),ge(r.$$.fragment),g(n,"type","checkbox"),n.__value=s=t[10].urlProp,n.value=n.__value,g(n,"class","form-check"),t[31][0].push(n),g(e,"class","property svelte-4bhw6f")},m(d,m){k(d,e,m),u(e,n),n.checked=~t[3].indexOf(n.__value),u(e,i),fe(r,e,null),a=!0,l||(c=[j(n,"change",t[30]),j(e,"click",t[21])],l=!0)},p(d,m){t=d,(!a||m[0]&512&&s!==(s=t[10].urlProp))&&(n.__value=s,n.value=n.__value),m[0]&8&&(n.checked=~t[3].indexOf(n.__value));const _=m[0]&512?_n(h,[Xn(t[10])]):{};r.$set(_)},i(d){a||(q(r.$$.fragment,d),Ze(()=>{o||(o=fn(e,Di,{duration:500,easing:Ai},!0)),o.run(1)}),a=!0)},o(d){x(r.$$.fragment,d),o||(o=fn(e,Di,{duration:500,easing:Ai},!1)),o.run(0),a=!1},d(d){d&&w(e),t[31][0].splice(t[31][0].indexOf(n),1),de(r),d&&o&&o.end(),l=!1,xe(c)}}}function Af(t){let e;return{c(){e=p("h3"),e.textContent='"No hay Propiedades para este contacto"',g(e,"class","svelte-4bhw6f")},m(n,s){k(n,e,s)},d(n){n&&w(e)}}}function LI(t){let e,n,s=t[8]==="contSelect"&&wf(t);return{c(){e=p("main"),s&&s.c()},m(i,r){k(i,e,r),s&&s.m(e,null),n=!0},p(i,r){i[8]==="contSelect"?s?(s.p(i,r),r[0]&256&&q(s,1)):(s=wf(i),s.c(),q(s,1),s.m(e,null)):s&&(bt(),x(s,1,1,()=>{s=null}),wt())},i(i){n||(q(s),n=!0)},o(i){x(s),n=!1},d(i){i&&w(e),s&&s.d()}}}function MI(t,e,n){let s,i,r,o,a,l;Pe(t,et,Y=>n(7,s=Y)),Pe(t,je,Y=>n(8,i=Y)),Pe(t,di,Y=>n(38,r=Y)),Pe(t,fs,Y=>n(39,o=Y)),Pe(t,We,Y=>n(10,a=Y)),Pe(t,fl,Y=>n(9,l=Y));const c=Zs();let h,f=!1,d,m,_=[],y=!1,v=!1,E=[],T=[];function L(Y){return h=bs.filter(Ae=>Ae.claveEB===Y),h[0].urlImage}function D(){n(0,f=!0)}function U(){n(5,v=!0)}const W=()=>(n(4,y=!0),we(fl,l=bs.filter(Y=>(Y.nameProperty+" "+Y.colonia+" "+Y.claveEB).toLowerCase().includes(d.toLowerCase())),l));function O(Y){OI(Y),n(4,y=!0)}const F=()=>{we(et,s=[],s),we(je,i="start",i)};function G(){we(je,i="contEditing",i)}async function P(){confirm("Deseas eleiminar definitivamente al contacto?")&&(await Sa(Cs(lt,"contacts",s.id)),Z(s),c("/"))}async function Z(Y){let Ae=`Se le elimin\xF3a: ${Y.name} ${Y.lastname} del ${Y.telephon}`,R={date:Date.now(),comment:Ae};console.log(i,R);const ce=Yt(lt,"binnacles");await ys(ce,R)}function H(){n(0,f=!1)}function Q(){console.log(_)}function N(){m&&(n(3,_=m),we(di,r="sendMsg",r));let Y=`https://api.whatsapp.com/send?phone=52${s.telephon}&text=${_}`;window.open(Y,"ventana1","width=350,height=350,scrollbars=NO"),ue(_)}function K(){}function B(){we(je,i="binnAdding",i),we(fs,o={date:Date.now(),comment:m,to:s.telephon,action:"Nota agregada: "},o),_f(i,o)}function ue(Y){we(je,i="binnAdding",i);let Ae=bs.filter(R=>R.urlProp===Y[0]);we(We,a=Ae[0],a),r==="sendMsg"?we(fs,o={date:Date.now(),comment:Y,to:s.telephon,action:"Mensaje enviado: "},o):we(fs,o={date:Date.now(),comment:a.claveEB,to:s.telephon,action:"Propiedad enviada: "},o),_f(i,o),we(di,r="",r),we(je,i="contSelect",i)}function ee(Y){n(6,E=Fs.filter(R=>R.to===Y.telephon)),E.filter(R=>R.action==="Propiedad enviada: ").forEach(R=>T.push(R.comment))}ee(s),console.log(T);const le=[[]],re=()=>D(),$=()=>O(s);function C(Y){d=Y,n(1,d)}function M(){m=this.value,n(2,m)}const J=()=>B();function V(){_=Nt(le[0],this.__value,this.checked),n(3,_)}return[f,d,m,_,y,v,E,s,i,l,a,T,L,D,U,W,O,F,G,P,H,Q,N,K,B,re,$,C,M,J,V,le]}class $I extends Xe{constructor(e){super(),Ye(this,e,MI,LI,Ge,{},null,[-1,-1])}}const Qo=["Casa","Terreno","Departamento","Casa o Departamento","Local Comercial","Casa de Campo"],Df=["Lona en Propiedad","Propiedades.com","NocNok","Mercado Libre","Vivanuncios","Lamudi","Inmuebles24","Referido","Otro"],Pf=["Comprador","Arrendador","Propietario","Agente Asociado","Agente Inmobiliario","Constructor","Inversionista","Otro"],Rf=["Contado","Credito Hipotecario","INFONAVIT","COFINAVIT","FOVISSSTE","ALIADOS","Conyugal"],Nf=["Venta","Renta"],Of=["Rango","PRM","SGN","TRC","CRT","QNT","SXT","SPT"],Yo=[0,1,2,3,4,5],wn=[0,1,2,3,4],Lf=["Due\xF1o","Familiar","Inmobiliaria","Conocido"];function UI(t){let e,n,s,i,r,o,a,l,c,h,f,d,m,_,y,v,E,T,L,D,U,W,O,F,G,P,Z,H,Q,N,K,B,ue,ee,le,re,$,C,M,J,V,Y,Ae;return{c(){e=p("div"),n=p("div"),s=p("label"),i=S(`/Norte\\\r
			`),r=p("input"),o=b(),a=p("div"),l=p("label"),c=S(`/Noroeste\r
			`),h=p("input"),f=b(),d=p("label"),m=p("input"),_=S("NorEste\\"),y=b(),v=p("div"),E=p("label"),T=S(`/Oeste\r
			`),L=p("input"),D=b(),U=p("label"),W=S(`Centro Norte\r
			`),O=p("input"),F=b(),G=p("label"),P=p("input"),Z=S("Este\\"),H=b(),Q=p("div"),N=p("label"),K=S(`Centro Sur\r
			`),B=p("input"),ue=b(),ee=p("div"),le=p("label"),re=S(`/SurOeste\r
			`),$=p("input"),C=b(),M=p("label"),J=p("input"),V=S("SurEste\\"),r.__value="Norte",r.value=r.__value,g(r,"id","north"),g(r,"type","checkbox"),t[2][0].push(r),g(s,"for","north"),g(n,"class","filterLocationOne svelte-1lvjb5r"),h.__value="Noroeste",h.value=h.__value,g(h,"id","northwest"),g(h,"type","checkbox"),t[2][0].push(h),g(l,"for","northwest"),m.__value="Noreste",m.value=m.__value,g(m,"id","northeast"),g(m,"type","checkbox"),t[2][0].push(m),g(d,"for","northeast"),g(a,"class","filterLocationOne svelte-1lvjb5r"),L.__value="Oeste",L.value=L.__value,g(L,"id","west"),g(L,"type","checkbox"),t[2][0].push(L),g(E,"for","west"),O.__value="Centronorte",O.value=O.__value,g(O,"id","townNorth"),g(O,"type","checkbox"),t[2][0].push(O),g(U,"for","townNorth"),P.__value="Este",P.value=P.__value,g(P,"id","east"),g(P,"type","checkbox"),t[2][0].push(P),g(G,"for","east"),g(v,"class","filterLocationOne svelte-1lvjb5r"),B.__value="CentroSur",B.value=B.__value,g(B,"id","townsouth"),g(B,"type","checkbox"),t[2][0].push(B),g(N,"for","townsouth"),g(Q,"class","filterLocationOne svelte-1lvjb5r"),$.__value="SurOeste",$.value=$.__value,g($,"id","southwest"),g($,"type","checkbox"),t[2][0].push($),g(le,"for","southwest"),J.__value="SurEste",J.value=J.__value,g(J,"id","southeast"),g(J,"type","checkbox"),t[2][0].push(J),g(M,"for","southeast"),g(ee,"class","filterLocationOne svelte-1lvjb5r"),g(e,"class","containerUbication svelte-1lvjb5r")},m(R,ce){k(R,e,ce),u(e,n),u(n,s),u(s,i),u(s,r),r.checked=~t[0].indexOf(r.__value),u(e,o),u(e,a),u(a,l),u(l,c),u(l,h),h.checked=~t[0].indexOf(h.__value),u(a,f),u(a,d),u(d,m),m.checked=~t[0].indexOf(m.__value),u(d,_),u(e,y),u(e,v),u(v,E),u(E,T),u(E,L),L.checked=~t[0].indexOf(L.__value),u(v,D),u(v,U),u(U,W),u(U,O),O.checked=~t[0].indexOf(O.__value),u(v,F),u(v,G),u(G,P),P.checked=~t[0].indexOf(P.__value),u(G,Z),u(e,H),u(e,Q),u(Q,N),u(N,K),u(N,B),B.checked=~t[0].indexOf(B.__value),u(e,ue),u(e,ee),u(ee,le),u(le,re),u(le,$),$.checked=~t[0].indexOf($.__value),u(ee,C),u(ee,M),u(M,J),J.checked=~t[0].indexOf(J.__value),u(M,V),Y||(Ae=[j(r,"change",t[1]),j(h,"change",t[3]),j(m,"change",t[4]),j(L,"change",t[5]),j(O,"change",t[6]),j(P,"change",t[7]),j(B,"change",t[8]),j($,"change",t[9]),j(J,"change",t[10])],Y=!0)},p(R,[ce]){ce&1&&(r.checked=~R[0].indexOf(r.__value)),ce&1&&(h.checked=~R[0].indexOf(h.__value)),ce&1&&(m.checked=~R[0].indexOf(m.__value)),ce&1&&(L.checked=~R[0].indexOf(L.__value)),ce&1&&(O.checked=~R[0].indexOf(O.__value)),ce&1&&(P.checked=~R[0].indexOf(P.__value)),ce&1&&(B.checked=~R[0].indexOf(B.__value)),ce&1&&($.checked=~R[0].indexOf($.__value)),ce&1&&(J.checked=~R[0].indexOf(J.__value))},i:he,o:he,d(R){R&&w(e),t[2][0].splice(t[2][0].indexOf(r),1),t[2][0].splice(t[2][0].indexOf(h),1),t[2][0].splice(t[2][0].indexOf(m),1),t[2][0].splice(t[2][0].indexOf(L),1),t[2][0].splice(t[2][0].indexOf(O),1),t[2][0].splice(t[2][0].indexOf(P),1),t[2][0].splice(t[2][0].indexOf(B),1),t[2][0].splice(t[2][0].indexOf($),1),t[2][0].splice(t[2][0].indexOf(J),1),Y=!1,xe(Ae)}}}function FI(t,e,n){let{ubication:s}=e;const i=[[]];function r(){s=Nt(i[0],this.__value,this.checked),n(0,s)}function o(){s=Nt(i[0],this.__value,this.checked),n(0,s)}function a(){s=Nt(i[0],this.__value,this.checked),n(0,s)}function l(){s=Nt(i[0],this.__value,this.checked),n(0,s)}function c(){s=Nt(i[0],this.__value,this.checked),n(0,s)}function h(){s=Nt(i[0],this.__value,this.checked),n(0,s)}function f(){s=Nt(i[0],this.__value,this.checked),n(0,s)}function d(){s=Nt(i[0],this.__value,this.checked),n(0,s)}function m(){s=Nt(i[0],this.__value,this.checked),n(0,s)}return t.$$set=_=>{"ubication"in _&&n(0,s=_.ubication)},[s,r,i,o,a,l,c,h,f,d,m]}class H_ extends Xe{constructor(e){super(),Ye(this,e,FI,UI,Ge,{ubication:0})}}function BI(t){let e,n,s,i,r,o,a,l,c,h,f,d,m,_,y,v,E,T,L,D,U,W,O,F,G,P,Z,H,Q,N,K,B,ue;return{c(){e=p("section"),n=p("div"),s=p("label"),i=S(`Fracc. Privado\r
		   `),r=p("input"),o=b(),a=p("label"),l=S(`Frente a Parque\r
         `),c=p("input"),h=b(),f=p("label"),d=S(`Una Planta\r
         `),m=p("input"),_=b(),y=p("div"),v=p("label"),E=S(`Recamara en P.B.\r
		`),T=p("input"),L=b(),D=p("label"),U=S(`Patio Amplio\r
   `),W=p("input"),O=b(),F=p("label"),G=S(`Lista para Habitarse\r
   `),P=p("input"),Z=b(),H=p("div"),Q=p("label"),N=S(`Nueva\r
		`),K=p("input"),g(r,"type","checkbox"),r.__value="Fracc. Privado",r.value=r.__value,t[2][0].push(r),g(c,"type","checkbox"),c.__value="Frente a Parque",c.value=c.__value,t[2][0].push(c),g(m,"type","checkbox"),m.__value="Una Planta",m.value=m.__value,t[2][0].push(m),g(n,"class","svelte-1b9bvt0"),g(T,"type","checkbox"),T.__value="Recamara en PB",T.value=T.__value,t[2][0].push(T),g(W,"type","checkbox"),W.__value="Patio Amplio",W.value=W.__value,t[2][0].push(W),g(P,"type","checkbox"),P.__value="Lista Habitarse",P.value=P.__value,t[2][0].push(P),g(y,"class","svelte-1b9bvt0"),g(K,"type","checkbox"),K.__value="Nueva",K.value=K.__value,t[2][0].push(K),g(H,"class","svelte-1b9bvt0"),g(e,"class","svelte-1b9bvt0")},m(ee,le){k(ee,e,le),u(e,n),u(n,s),u(s,i),u(s,r),r.checked=~t[0].indexOf(r.__value),u(n,o),u(n,a),u(a,l),u(a,c),c.checked=~t[0].indexOf(c.__value),u(n,h),u(n,f),u(f,d),u(f,m),m.checked=~t[0].indexOf(m.__value),u(e,_),u(e,y),u(y,v),u(v,E),u(v,T),T.checked=~t[0].indexOf(T.__value),u(y,L),u(y,D),u(D,U),u(D,W),W.checked=~t[0].indexOf(W.__value),u(y,O),u(y,F),u(F,G),u(F,P),P.checked=~t[0].indexOf(P.__value),u(e,Z),u(e,H),u(H,Q),u(Q,N),u(Q,K),K.checked=~t[0].indexOf(K.__value),B||(ue=[j(r,"change",t[1]),j(c,"change",t[3]),j(m,"change",t[4]),j(T,"change",t[5]),j(W,"change",t[6]),j(P,"change",t[7]),j(K,"change",t[8])],B=!0)},p(ee,[le]){le&1&&(r.checked=~ee[0].indexOf(r.__value)),le&1&&(c.checked=~ee[0].indexOf(c.__value)),le&1&&(m.checked=~ee[0].indexOf(m.__value)),le&1&&(T.checked=~ee[0].indexOf(T.__value)),le&1&&(W.checked=~ee[0].indexOf(W.__value)),le&1&&(P.checked=~ee[0].indexOf(P.__value)),le&1&&(K.checked=~ee[0].indexOf(K.__value))},i:he,o:he,d(ee){ee&&w(e),t[2][0].splice(t[2][0].indexOf(r),1),t[2][0].splice(t[2][0].indexOf(c),1),t[2][0].splice(t[2][0].indexOf(m),1),t[2][0].splice(t[2][0].indexOf(T),1),t[2][0].splice(t[2][0].indexOf(W),1),t[2][0].splice(t[2][0].indexOf(P),1),t[2][0].splice(t[2][0].indexOf(K),1),B=!1,xe(ue)}}}function VI(t,e,n){let{tag:s}=e;const i=[[]];function r(){s=Nt(i[0],this.__value,this.checked),n(0,s)}function o(){s=Nt(i[0],this.__value,this.checked),n(0,s)}function a(){s=Nt(i[0],this.__value,this.checked),n(0,s)}function l(){s=Nt(i[0],this.__value,this.checked),n(0,s)}function c(){s=Nt(i[0],this.__value,this.checked),n(0,s)}function h(){s=Nt(i[0],this.__value,this.checked),n(0,s)}function f(){s=Nt(i[0],this.__value,this.checked),n(0,s)}return t.$$set=d=>{"tag"in d&&n(0,s=d.tag)},[s,r,i,o,a,l,c,h,f]}class z_ extends Xe{constructor(e){super(),Ye(this,e,VI,BI,Ge,{tag:0})}}function Mf(t,e,n){const s=t.slice();return s[26]=e[n],s}function $f(t,e,n){const s=t.slice();return s[29]=e[n],s}function Uf(t,e,n){const s=t.slice();return s[32]=e[n],s}function Ff(t,e,n){const s=t.slice();return s[35]=e[n],s}function Bf(t,e,n){const s=t.slice();return s[38]=e[n],s}function Vf(t,e,n){const s=t.slice();return s[41]=e[n],s}function jf(t,e,n){const s=t.slice();return s[44]=e[n],s}function qf(t,e,n){const s=t.slice();return s[47]=e[n],s}function Hf(t,e,n){const s=t.slice();return s[50]=e[n],s}function zf(t,e,n){const s=t.slice();return s[53]=e[n],s}function jI(t){let e,n=kt(t[3].createdAt)+"",s,i,r;return{c(){e=p("h3"),s=S(n),g(e,"class","dataInput svelte-1myljlf")},m(o,a){k(o,e,a),u(e,s),i||(r=j(e,"dblclick",t[4]),i=!0)},p(o,a){a[0]&8&&n!==(n=kt(o[3].createdAt)+"")&&ie(s,n)},d(o){o&&w(e),i=!1,r()}}}function qI(t){let e,n,s;return{c(){e=p("input"),g(e,"class","dataInput svelte-1myljlf"),g(e,"type","date")},m(i,r){k(i,e,r),ve(e,t[3].createdAt),n||(s=j(e,"input",t[6]),n=!0)},p(i,r){r[0]&9&&ve(e,i[3].createdAt)},d(i){i&&w(e),n=!1,s()}}}function Kf(t){let e,n,s;return{c(){e=p("input"),g(e,"class","dataInput svelte-1myljlf"),g(e,"type","email"),g(e,"placeholder","email")},m(i,r){k(i,e,r),ve(e,t[3].email),n||(s=j(e,"input",t[10]),n=!0)},p(i,r){r[0]&9&&e.value!==i[3].email&&ve(e,i[3].email)},d(i){i&&w(e),n=!1,s()}}}function Gf(t){let e,n=t[53]+"",s,i;return{c(){e=p("option"),s=S(n),g(e,"class","dataInput svelte-1myljlf"),g(e,"type","checkbox"),e.__value=i=t[53],e.value=e.__value},m(r,o){k(r,e,o),u(e,s)},p(r,o){o[0]&1&&n!==(n=r[53]+"")&&ie(s,n),o[0]&1&&i!==(i=r[53])&&(e.__value=i,e.value=e.__value)},d(r){r&&w(e)}}}function Wf(t){let e,n,s;return{c(){e=p("input"),g(e,"class","dataInput svelte-1myljlf"),g(e,"type","number"),g(e,"placeholder","Presupuesto")},m(i,r){k(i,e,r),ve(e,t[3].budget),n||(s=j(e,"input",t[12]),n=!0)},p(i,r){r[0]&9&&ds(e.value)!==i[3].budget&&ve(e,i[3].budget)},d(i){i&&w(e),n=!1,s()}}}function Qf(t){let e,n=t[50]+"",s;return{c(){e=p("option"),s=S(n),g(e,"type","checkbox"),e.__value=t[50],e.value=e.__value},m(i,r){k(i,e,r),u(e,s)},p:he,d(i){i&&w(e)}}}function Yf(t){let e,n=t[47]+"",s;return{c(){e=p("option"),s=S(n),g(e,"type","checkbox"),e.__value=t[47],e.value=e.__value},m(i,r){k(i,e,r),u(e,s)},p:he,d(i){i&&w(e)}}}function Xf(t){let e,n=t[44]+"",s;return{c(){e=p("option"),s=S(n),g(e,"type","checkbox"),e.__value=t[44],e.value=e.__value},m(i,r){k(i,e,r),u(e,s)},p:he,d(i){i&&w(e)}}}function Jf(t){let e,n,s,i,r,o,a,l,c,h,f,d,m,_,y,v,E,T,L,D,U,W,O,F,G,P,Z,H=Rf,Q=[];for(let R=0;R<H.length;R+=1)Q[R]=xf(Vf(t,H,R));let N=Of,K=[];for(let R=0;R<N.length;R+=1)K[R]=Zf(Bf(t,N,R));let B=Yo,ue=[];for(let R=0;R<B.length;R+=1)ue[R]=ed(Ff(t,B,R));let ee=wn,le=[];for(let R=0;R<ee.length;R+=1)le[R]=td(Uf(t,ee,R));let re=wn,$=[];for(let R=0;R<re.length;R+=1)$[R]=nd($f(t,re,R));let C=wn,M=[];for(let R=0;R<C.length;R+=1)M[R]=sd(Mf(t,C,R));function J(R){t[23](R)}let V={};t[3].locaProperty!==void 0&&(V.ubication=t[3].locaProperty),D=new H_({props:V}),Yn.push(()=>zs(D,"ubication",J));function Y(R){t[24](R)}let Ae={};return t[3].tagsProperty!==void 0&&(Ae.tag=t[3].tagsProperty),O=new z_({props:Ae}),Yn.push(()=>zs(O,"tag",Y)),{c(){e=p("select"),n=p("option"),n.textContent="Modo de Pago";for(let R=0;R<Q.length;R+=1)Q[R].c();s=b(),i=p("select"),r=p("option"),r.textContent="Rango de Busqueda";for(let R=0;R<K.length;R+=1)K[R].c();o=b(),a=p("select"),l=p("option"),l.textContent="# Rec\xE1maras";for(let R=0;R<ue.length;R+=1)ue[R].c();c=b(),h=p("select"),f=p("option"),f.textContent="# Ba\xF1os";for(let R=0;R<le.length;R+=1)le[R].c();d=b(),m=p("select"),_=p("option"),_.textContent="# Medios Ba\xF1os";for(let R=0;R<$.length;R+=1)$[R].c();y=b(),v=p("select"),E=p("option"),E.textContent="# Estacionamientos";for(let R=0;R<M.length;R+=1)M[R].c();T=b(),L=p("div"),ge(D.$$.fragment),W=b(),ge(O.$$.fragment),n.disabled=!0,n.selected=!0,n.__value="",n.value=n.__value,g(e,"class","othersInput svelte-1myljlf"),t[3].modePay===void 0&&Ze(()=>t[17].call(e)),r.disabled=!0,r.selected=!0,r.__value="",r.value=r.__value,g(i,"class","othersInput svelte-1myljlf"),g(i,"id","ranges"),g(i,"name","ranges"),t[3].rangeProp===void 0&&Ze(()=>t[18].call(i)),l.disabled=!0,l.selected=!0,l.__value="",l.value=l.__value,g(a,"class","othersInput svelte-1myljlf"),t[3].numBeds===void 0&&Ze(()=>t[19].call(a)),f.disabled=!0,f.selected=!0,f.__value="",f.value=f.__value,g(h,"class","othersInput svelte-1myljlf"),t[3].numBaths===void 0&&Ze(()=>t[20].call(h)),_.disabled=!0,_.selected=!0,_.__value="",_.value=_.__value,g(m,"class","othersInput svelte-1myljlf"),t[3].halfBathroom===void 0&&Ze(()=>t[21].call(m)),E.disabled=!0,E.selected=!0,E.__value="",E.value=E.__value,g(v,"class","othersInput svelte-1myljlf"),t[3].numParks===void 0&&Ze(()=>t[22].call(v)),g(L,"class","ubiTags svelte-1myljlf")},m(R,ce){k(R,e,ce),u(e,n);for(let be=0;be<Q.length;be+=1)Q[be].m(e,null);Ue(e,t[3].modePay),k(R,s,ce),k(R,i,ce),u(i,r);for(let be=0;be<K.length;be+=1)K[be].m(i,null);Ue(i,t[3].rangeProp),k(R,o,ce),k(R,a,ce),u(a,l);for(let be=0;be<ue.length;be+=1)ue[be].m(a,null);Ue(a,t[3].numBeds),k(R,c,ce),k(R,h,ce),u(h,f);for(let be=0;be<le.length;be+=1)le[be].m(h,null);Ue(h,t[3].numBaths),k(R,d,ce),k(R,m,ce),u(m,_);for(let be=0;be<$.length;be+=1)$[be].m(m,null);Ue(m,t[3].halfBathroom),k(R,y,ce),k(R,v,ce),u(v,E);for(let be=0;be<M.length;be+=1)M[be].m(v,null);Ue(v,t[3].numParks),k(R,T,ce),k(R,L,ce),fe(D,L,null),u(L,W),fe(O,L,null),G=!0,P||(Z=[j(e,"change",t[17]),j(i,"change",t[18]),j(a,"change",t[19]),j(h,"change",t[20]),j(m,"change",t[21]),j(v,"change",t[22])],P=!0)},p(R,ce){if(ce&0){H=Rf;let A;for(A=0;A<H.length;A+=1){const X=Vf(R,H,A);Q[A]?Q[A].p(X,ce):(Q[A]=xf(X),Q[A].c(),Q[A].m(e,null))}for(;A<Q.length;A+=1)Q[A].d(1);Q.length=H.length}if(ce[0]&9&&Ue(e,R[3].modePay),ce&0){N=Of;let A;for(A=0;A<N.length;A+=1){const X=Bf(R,N,A);K[A]?K[A].p(X,ce):(K[A]=Zf(X),K[A].c(),K[A].m(i,null))}for(;A<K.length;A+=1)K[A].d(1);K.length=N.length}if(ce[0]&9&&Ue(i,R[3].rangeProp),ce&0){B=Yo;let A;for(A=0;A<B.length;A+=1){const X=Ff(R,B,A);ue[A]?ue[A].p(X,ce):(ue[A]=ed(X),ue[A].c(),ue[A].m(a,null))}for(;A<ue.length;A+=1)ue[A].d(1);ue.length=B.length}if(ce[0]&9&&Ue(a,R[3].numBeds),ce&0){ee=wn;let A;for(A=0;A<ee.length;A+=1){const X=Uf(R,ee,A);le[A]?le[A].p(X,ce):(le[A]=td(X),le[A].c(),le[A].m(h,null))}for(;A<le.length;A+=1)le[A].d(1);le.length=ee.length}if(ce[0]&9&&Ue(h,R[3].numBaths),ce&0){re=wn;let A;for(A=0;A<re.length;A+=1){const X=$f(R,re,A);$[A]?$[A].p(X,ce):($[A]=nd(X),$[A].c(),$[A].m(m,null))}for(;A<$.length;A+=1)$[A].d(1);$.length=re.length}if(ce[0]&9&&Ue(m,R[3].halfBathroom),ce&0){C=wn;let A;for(A=0;A<C.length;A+=1){const X=Mf(R,C,A);M[A]?M[A].p(X,ce):(M[A]=sd(X),M[A].c(),M[A].m(v,null))}for(;A<M.length;A+=1)M[A].d(1);M.length=C.length}ce[0]&9&&Ue(v,R[3].numParks);const be={};!U&&ce[0]&8&&(U=!0,be.ubication=R[3].locaProperty,Hs(()=>U=!1)),D.$set(be);const He={};!F&&ce[0]&8&&(F=!0,He.tag=R[3].tagsProperty,Hs(()=>F=!1)),O.$set(He)},i(R){G||(q(D.$$.fragment,R),q(O.$$.fragment,R),G=!0)},o(R){x(D.$$.fragment,R),x(O.$$.fragment,R),G=!1},d(R){R&&w(e),Fe(Q,R),R&&w(s),R&&w(i),Fe(K,R),R&&w(o),R&&w(a),Fe(ue,R),R&&w(c),R&&w(h),Fe(le,R),R&&w(d),R&&w(m),Fe($,R),R&&w(y),R&&w(v),Fe(M,R),R&&w(T),R&&w(L),de(D),de(O),P=!1,xe(Z)}}}function xf(t){let e,n=t[41]+"",s;return{c(){e=p("option"),s=S(n),g(e,"type","checkbox"),e.__value=t[41],e.value=e.__value},m(i,r){k(i,e,r),u(e,s)},p:he,d(i){i&&w(e)}}}function Zf(t){let e,n=t[38]+"",s;return{c(){e=p("option"),s=S(n),g(e,"type","checkbox"),e.__value=t[38],e.value=e.__value},m(i,r){k(i,e,r),u(e,s)},p:he,d(i){i&&w(e)}}}function ed(t){let e,n=t[35]+"",s,i;return{c(){e=p("option"),s=S(n),i=S(" Rec\xE1maras"),g(e,"type","checkbox"),e.__value=t[35],e.value=e.__value},m(r,o){k(r,e,o),u(e,s),u(e,i)},p:he,d(r){r&&w(e)}}}function td(t){let e,n=t[32]+"",s,i;return{c(){e=p("option"),s=S(n),i=S(" ba\xF1os"),g(e,"type","checkbox"),e.__value=t[32],e.value=e.__value},m(r,o){k(r,e,o),u(e,s),u(e,i)},p:he,d(r){r&&w(e)}}}function nd(t){let e,n=t[29]+"",s,i;return{c(){e=p("option"),s=S(n),i=S(" Medios ba\xF1os"),g(e,"type","checkbox"),e.__value=t[29],e.value=e.__value},m(r,o){k(r,e,o),u(e,s),u(e,i)},p:he,d(r){r&&w(e)}}}function sd(t){let e,n=t[26]+"",s,i;return{c(){e=p("option"),s=S(n),i=S(" Estacionamientos"),g(e,"type","checkbox"),e.__value=t[26],e.value=e.__value},m(r,o){k(r,e,o),u(e,s),u(e,i)},p:he,d(r){r&&w(e)}}}function HI(t){let e,n,s,i,r,o,a,l,c,h,f,d,m,_,y,v,E,T,L,D,U,W,O,F,G,P,Z,H,Q,N,K,B,ue,ee,le,re;function $(z,pe){return z[1]?qI:jI}let C=$(t),M=C(t),J=t[2]&&Kf(t),V=t[0],Y=[];for(let z=0;z<V.length;z+=1)Y[z]=Gf(zf(t,V,z));let Ae=t[2]&&Wf(t),R=Pf,ce=[];for(let z=0;z<R.length;z+=1)ce[z]=Qf(Hf(t,R,z));let be=Df,He=[];for(let z=0;z<be.length;z+=1)He[z]=Yf(qf(t,be,z));let A=Qo,X=[];for(let z=0;z<A.length;z+=1)X[z]=Xf(jf(t,A,z));let Me=t[2]&&Jf(t);return{c(){e=p("h1"),e.textContent="Alta Contactos",n=b(),s=p("div"),i=p("div"),M.c(),r=b(),o=p("div"),a=p("input"),l=b(),c=p("input"),h=b(),f=p("div"),d=p("input"),m=b(),J&&J.c(),_=b(),y=p("div"),v=p("select"),E=p("option"),E.textContent="Propiedad de Contacto";for(let z=0;z<Y.length;z+=1)Y[z].c();T=b(),Ae&&Ae.c(),L=b(),D=p("div"),U=p("input"),W=b(),O=p("select"),F=p("option"),F.textContent="Tipo de Contacto";for(let z=0;z<ce.length;z+=1)ce[z].c();G=b(),P=p("select"),Z=p("option"),Z.textContent="Modo de Contacto";for(let z=0;z<He.length;z+=1)He[z].c();H=b(),Q=p("select"),N=p("option"),N.textContent="Tipo de Propiedad";for(let z=0;z<X.length;z+=1)X[z].c();K=b(),Me&&Me.c(),B=b(),ue=p("button"),ue.textContent="Alta Detalles",g(e,"class","sectionTitle"),g(a,"class","dataInput svelte-1myljlf"),g(a,"type","text"),g(a,"placeholder","Nombre"),a.required=!0,g(c,"class","dataInput svelte-1myljlf"),g(c,"type","text"),g(c,"placeholder","Apellido"),g(o,"class","contactInput"),g(d,"class","dataInput svelte-1myljlf"),g(d,"type","tel"),g(d,"placeholder","tel\xE9fono"),d.required=!0,g(f,"class","contactInput"),g(s,"class",""),E.disabled=!0,E.selected=!0,E.__value="",E.value=E.__value,g(v,"class","dataInput svelte-1myljlf"),g(v,"id","selTP"),g(v,"name","selTP"),t[3].propCont===void 0&&Ze(()=>t[11].call(v)),g(y,"class","col"),g(U,"class","textareaInput svelte-1myljlf"),g(U,"type","textarea"),g(U,"placeholder","Comentarios"),g(D,"class","col"),F.disabled=!0,F.selected=!0,F.__value="",F.value=F.__value,g(O,"class","othersInput svelte-1myljlf"),t[3].typeContact===void 0&&Ze(()=>t[14].call(O)),Z.disabled=!0,Z.selected=!0,Z.__value="",Z.value=Z.__value,g(P,"class","othersInput svelte-1myljlf"),t[3].selecMC===void 0&&Ze(()=>t[15].call(P)),N.disabled=!0,N.selected=!0,N.__value="",N.value=N.__value,g(Q,"class","othersInput svelte-1myljlf"),g(Q,"id","selTP"),g(Q,"name","selTP"),t[3].selecTP===void 0&&Ze(()=>t[16].call(Q)),g(ue,"class","btn__save")},m(z,pe){k(z,e,pe),k(z,n,pe),k(z,s,pe),u(s,i),M.m(i,null),u(s,r),u(s,o),u(o,a),ve(a,t[3].name),u(o,l),u(o,c),ve(c,t[3].lastname),u(s,h),u(s,f),u(f,d),ve(d,t[3].telephon),u(f,m),J&&J.m(f,null),k(z,_,pe),k(z,y,pe),u(y,v),u(v,E);for(let oe=0;oe<Y.length;oe+=1)Y[oe].m(v,null);Ue(v,t[3].propCont),u(y,T),Ae&&Ae.m(y,null),k(z,L,pe),k(z,D,pe),u(D,U),ve(U,t[3].comContact),k(z,W,pe),k(z,O,pe),u(O,F);for(let oe=0;oe<ce.length;oe+=1)ce[oe].m(O,null);Ue(O,t[3].typeContact),k(z,G,pe),k(z,P,pe),u(P,Z);for(let oe=0;oe<He.length;oe+=1)He[oe].m(P,null);Ue(P,t[3].selecMC),k(z,H,pe),k(z,Q,pe),u(Q,N);for(let oe=0;oe<X.length;oe+=1)X[oe].m(Q,null);Ue(Q,t[3].selecTP),k(z,K,pe),Me&&Me.m(z,pe),k(z,B,pe),k(z,ue,pe),ee=!0,le||(re=[j(a,"input",t[7]),j(c,"input",t[8]),j(d,"input",t[9]),j(v,"change",t[11]),j(U,"input",t[13]),j(O,"change",t[14]),j(P,"change",t[15]),j(Q,"change",t[16]),j(ue,"click",t[5])],le=!0)},p(z,pe){if(C===(C=$(z))&&M?M.p(z,pe):(M.d(1),M=C(z),M&&(M.c(),M.m(i,null))),pe[0]&9&&a.value!==z[3].name&&ve(a,z[3].name),pe[0]&9&&c.value!==z[3].lastname&&ve(c,z[3].lastname),pe[0]&9&&ve(d,z[3].telephon),z[2]?J?J.p(z,pe):(J=Kf(z),J.c(),J.m(f,null)):J&&(J.d(1),J=null),pe[0]&1){V=z[0];let oe;for(oe=0;oe<V.length;oe+=1){const Je=zf(z,V,oe);Y[oe]?Y[oe].p(Je,pe):(Y[oe]=Gf(Je),Y[oe].c(),Y[oe].m(v,null))}for(;oe<Y.length;oe+=1)Y[oe].d(1);Y.length=V.length}if(pe[0]&9&&Ue(v,z[3].propCont),z[2]?Ae?Ae.p(z,pe):(Ae=Wf(z),Ae.c(),Ae.m(y,null)):Ae&&(Ae.d(1),Ae=null),pe[0]&9&&ve(U,z[3].comContact),pe&0){R=Pf;let oe;for(oe=0;oe<R.length;oe+=1){const Je=Hf(z,R,oe);ce[oe]?ce[oe].p(Je,pe):(ce[oe]=Qf(Je),ce[oe].c(),ce[oe].m(O,null))}for(;oe<ce.length;oe+=1)ce[oe].d(1);ce.length=R.length}if(pe[0]&9&&Ue(O,z[3].typeContact),pe&0){be=Df;let oe;for(oe=0;oe<be.length;oe+=1){const Je=qf(z,be,oe);He[oe]?He[oe].p(Je,pe):(He[oe]=Yf(Je),He[oe].c(),He[oe].m(P,null))}for(;oe<He.length;oe+=1)He[oe].d(1);He.length=be.length}if(pe[0]&9&&Ue(P,z[3].selecMC),pe&0){A=Qo;let oe;for(oe=0;oe<A.length;oe+=1){const Je=jf(z,A,oe);X[oe]?X[oe].p(Je,pe):(X[oe]=Xf(Je),X[oe].c(),X[oe].m(Q,null))}for(;oe<X.length;oe+=1)X[oe].d(1);X.length=A.length}pe[0]&9&&Ue(Q,z[3].selecTP),z[2]?Me?(Me.p(z,pe),pe[0]&4&&q(Me,1)):(Me=Jf(z),Me.c(),q(Me,1),Me.m(B.parentNode,B)):Me&&(bt(),x(Me,1,1,()=>{Me=null}),wt())},i(z){ee||(q(Me),ee=!0)},o(z){x(Me),ee=!1},d(z){z&&w(e),z&&w(n),z&&w(s),M.d(),J&&J.d(),z&&w(_),z&&w(y),Fe(Y,z),Ae&&Ae.d(),z&&w(L),z&&w(D),z&&w(W),z&&w(O),Fe(ce,z),z&&w(G),z&&w(P),Fe(He,z),z&&w(H),z&&w(Q),Fe(X,z),z&&w(K),Me&&Me.d(z),z&&w(B),z&&w(ue),le=!1,xe(re)}}}function zI(t,e,n){let s;Pe(t,et,Q=>n(3,s=Q));var i=[];let r=bs,o=!1,a=!1;(()=>{for(let Q of r){let N=`${Q.nameProperty} - ${(Q.price/1e6).toFixed(2)} (${Q.claveEB.slice(-2)})`;n(0,i=[...i,N])}return n(0,i=i.sort())})();function l(){n(1,o=!0)}function c(){n(2,a=!0)}function h(){s.createdAt=this.value,et.set(s),n(0,i)}function f(){s.name=this.value,et.set(s),n(0,i)}function d(){s.lastname=this.value,et.set(s),n(0,i)}function m(){s.telephon=this.value,et.set(s),n(0,i)}function _(){s.email=this.value,et.set(s),n(0,i)}function y(){s.propCont=Ft(this),et.set(s),n(0,i)}function v(){s.budget=ds(this.value),et.set(s),n(0,i)}function E(){s.comContact=this.value,et.set(s),n(0,i)}function T(){s.typeContact=Ft(this),et.set(s),n(0,i)}function L(){s.selecMC=Ft(this),et.set(s),n(0,i)}function D(){s.selecTP=Ft(this),et.set(s),n(0,i)}function U(){s.modePay=Ft(this),et.set(s),n(0,i)}function W(){s.rangeProp=Ft(this),et.set(s),n(0,i)}function O(){s.numBeds=Ft(this),et.set(s),n(0,i)}function F(){s.numBaths=Ft(this),et.set(s),n(0,i)}function G(){s.halfBathroom=Ft(this),et.set(s),n(0,i)}function P(){s.numParks=Ft(this),et.set(s),n(0,i)}function Z(Q){t.$$.not_equal(s.locaProperty,Q)&&(s.locaProperty=Q,et.set(s))}function H(Q){t.$$.not_equal(s.tagsProperty,Q)&&(s.tagsProperty=Q,et.set(s))}return[i,o,a,s,l,c,h,f,d,m,_,y,v,E,T,L,D,U,W,O,F,G,P,Z,H]}class KI extends Xe{constructor(e){super(),Ye(this,e,zI,HI,Ge,{},null,[-1,-1])}}function GI(t){let e;return{c(){e=S("Editar")},m(n,s){k(n,e,s)},d(n){n&&w(e)}}}function WI(t){let e;return{c(){e=S("Guardar")},m(n,s){k(n,e,s)},d(n){n&&w(e)}}}function QI(t){let e,n,s,i,r,o,a,l,c,h;n=new KI({});function f(_,y){return _[0]?GI:WI}let d=f(t),m=d(t);return{c(){e=p("div"),ge(n.$$.fragment),s=b(),i=p("div"),r=p("button"),m.c(),o=b(),a=p("button"),a.textContent="Cancel",g(r,"class","btn__save"),g(a,"class","btn__cancel"),g(i,"class","contSavCan svelte-1at07r"),g(e,"class","altaContactos")},m(_,y){k(_,e,y),fe(n,e,null),u(e,s),u(e,i),u(i,r),m.m(r,null),u(i,o),u(i,a),l=!0,c||(h=[j(r,"click",t[4]),j(a,"click",t[3])],c=!0)},p(_,[y]){d!==(d=f(_))&&(m.d(1),m=d(_),m&&(m.c(),m.m(r,null)))},i(_){l||(q(n.$$.fragment,_),l=!0)},o(_){x(n.$$.fragment,_),l=!1},d(_){_&&w(e),de(n),m.d(),c=!1,xe(h)}}}function YI(t,e,n){let s,i;Pe(t,je,f=>n(6,s=f)),Pe(t,et,f=>n(1,i=f));let r=!1,o;async function a(f){if(s!="contEditing"){o=Date.now(),f={...f,createdAt:o};const d=Yt(lt,"contacts");await ys(d,f),we(je,s="binnAdding",s),l(s,f)}else await tu(Cs(lt,"contacts",f.id),f),l(s,f),n(0,r=!1);f=[],we(je,s="contSelect",s)}async function l(f,d){try{if(f==="binnAdding"){let m=`${d.name} ${d.lastname}`,_={date:Date.now(),comment:m,action:"Se agreg\xF3 a: ",to:d.telephon};const y=Yt(lt,"binnacles");await ys(y,_)}else{let m=`Se le edit\xF3 a: ${d.name} ${d.lastname}`,_={date:Date.now(),comment:m,action:"Se edit\xF3 a: ",to:d.telephon};console.log(_);const y=Yt(lt,"binnacles");await ys(y,_)}}catch(m){console.log("error",m)}}function c(){n(0,r=!0),location.href="/"}return[r,i,a,c,()=>a(i)]}class XI extends Xe{constructor(e){super(),Ye(this,e,YI,QI,Ge,{})}}function id(t,e,n){const s=t.slice();return s[23]=e[n],s[25]=n,s}function rd(t,e,n){const s=t.slice();return s[25]=e[n],s}function od(t,e,n){const s=t.slice();return s[28]=e[n],s[25]=n,s}function ad(t){let e,n=t[1].length+"",s,i,r,o,a,l,c,h,f,d,m,_,y,v,E,T,L,D,U,W,O,F,G,P;function Z(C){t[13](C)}let H={};t[3]!==void 0&&(H.searchTerm=t[3]),l=new fu({props:H}),Yn.push(()=>zs(l,"searchTerm",Z)),l.$on("input",t[11]);let Q=t[1],N=[];for(let C=0;C<Q.length;C+=1)N[C]=cd(od(t,Q,C));const K=C=>x(N[C],1,1,()=>{N[C]=null});let B=t[0]>1&&ud(t),ue=[3,2,1],ee=[];for(let C=0;C<3;C+=1)ee[C]=fd(rd(t,ue,C));let le=Array(3),re=[];for(let C=0;C<le.length;C+=1)re[C]=pd(id(t,le,C));let $=t[0]<t[5]&&md(t);return{c(){e=p("h2"),s=S(n),i=S(" Contactos a Mostrar"),r=b(),o=p("button"),o.textContent="Alta de Contacto",a=b(),ge(l.$$.fragment),h=b(),f=p("div"),d=p("main");for(let C=0;C<N.length;C+=1)N[C].c();m=b(),_=p("div"),y=p("div"),v=p("ul"),B&&B.c(),E=b();for(let C=0;C<3;C+=1)ee[C].c();T=b(),L=p("li"),D=p("span"),U=S(t[0]),W=b();for(let C=0;C<re.length;C+=1)re[C].c();O=b(),$&&$.c(),g(o,"class","altaContacto svelte-1o9z7a3"),g(d,"id","bookshelf"),g(v,"class","pagi__options"),g(y,"class","pagi__Item"),g(_,"class","container pagination"),g(f,"class","mosPag cont__card svelte-1o9z7a3")},m(C,M){k(C,e,M),u(e,s),u(e,i),k(C,r,M),k(C,o,M),k(C,a,M),fe(l,C,M),k(C,h,M),k(C,f,M),u(f,d);for(let J=0;J<N.length;J+=1)N[J].m(d,null);u(f,m),u(f,_),u(_,y),u(y,v),B&&B.m(v,null),u(v,E);for(let J=0;J<3;J+=1)ee[J].m(v,null);u(v,T),u(v,L),u(L,D),u(D,U),u(v,W);for(let J=0;J<re.length;J+=1)re[J].m(v,null);u(v,O),$&&$.m(v,null),F=!0,G||(P=j(o,"click",t[9]),G=!0)},p(C,M){(!F||M&2)&&n!==(n=C[1].length+"")&&ie(s,n);const J={};if(!c&&M&8&&(c=!0,J.searchTerm=C[3],Hs(()=>c=!1)),l.$set(J),M&1046){Q=C[1];let V;for(V=0;V<Q.length;V+=1){const Y=od(C,Q,V);N[V]?(N[V].p(Y,M),q(N[V],1)):(N[V]=cd(Y),N[V].c(),q(N[V],1),N[V].m(d,null))}for(bt(),V=Q.length;V<N.length;V+=1)K(V);wt()}if(C[0]>1?B?B.p(C,M):(B=ud(C),B.c(),B.m(v,E)):B&&(B.d(1),B=null),M&257){ue=[3,2,1];let V;for(V=0;V<3;V+=1){const Y=rd(C,ue,V);ee[V]?ee[V].p(Y,M):(ee[V]=fd(Y),ee[V].c(),ee[V].m(v,T))}for(;V<3;V+=1)ee[V].d(1)}if((!F||M&1)&&ie(U,C[0]),M&289){le=Array(3);let V;for(V=0;V<le.length;V+=1){const Y=id(C,le,V);re[V]?re[V].p(Y,M):(re[V]=pd(Y),re[V].c(),re[V].m(v,O))}for(;V<re.length;V+=1)re[V].d(1);re.length=le.length}C[0]<C[5]?$?$.p(C,M):($=md(C),$.c(),$.m(v,null)):$&&($.d(1),$=null)},i(C){if(!F){q(l.$$.fragment,C);for(let M=0;M<Q.length;M+=1)q(N[M]);F=!0}},o(C){x(l.$$.fragment,C),N=N.filter(Boolean);for(let M=0;M<N.length;M+=1)x(N[M]);F=!1},d(C){C&&w(e),C&&w(r),C&&w(o),C&&w(a),de(l,C),C&&w(h),C&&w(f),Fe(N,C),B&&B.d(),Fe(ee,C),Fe(re,C),$&&$.d(),G=!1,P()}}}function ld(t){let e,n,s,i,r,o,a;const l=[t[28]];let c={};for(let f=0;f<l.length;f+=1)c=Lt(c,l[f]);n=new TI({props:c});function h(){return t[14](t[28])}return{c(){e=p("div"),ge(n.$$.fragment),s=b(),g(e,"class","selecContact")},m(f,d){k(f,e,d),fe(n,e,null),u(e,s),r=!0,o||(a=j(e,"click",h),o=!0)},p(f,d){t=f;const m=d&2?_n(l,[Xn(t[28])]):{};n.$set(m)},i(f){r||(q(n.$$.fragment,f),Ze(()=>{i||(i=fn(e,Di,{duration:500,easing:Ai},!0)),i.run(1)}),r=!0)},o(f){x(n.$$.fragment,f),i||(i=fn(e,Di,{duration:500,easing:Ai},!1)),i.run(0),r=!1},d(f){f&&w(e),de(n),f&&i&&i.end(),o=!1,a()}}}function cd(t){let e,n,s=t[25]>=t[4]&&t[25]<t[2]&&ld(t);return{c(){s&&s.c(),e=nn()},m(i,r){s&&s.m(i,r),k(i,e,r),n=!0},p(i,r){i[25]>=i[4]&&i[25]<i[2]?s?(s.p(i,r),r&20&&q(s,1)):(s=ld(i),s.c(),q(s,1),s.m(e.parentNode,e)):s&&(bt(),x(s,1,1,()=>{s=null}),wt())},i(i){n||(q(s),n=!0)},o(i){x(s),n=!1},d(i){s&&s.d(i),i&&w(e)}}}function ud(t){let e,n,s,i,r,o,a,l,c;return{c(){e=p("li"),n=p("a"),n.textContent="first",s=b(),i=p("li"),r=p("a"),o=S("previous"),g(n,"href","/blog"),g(r,"href",a="/blog/"+(t[0]-1))},m(h,f){k(h,e,f),u(e,n),k(h,s,f),k(h,i,f),u(i,r),u(r,o),l||(c=[j(n,"click",gn(t[15])),j(r,"click",gn(t[16]))],l=!0)},p(h,f){f&1&&a!==(a="/blog/"+(h[0]-1))&&g(r,"href",a)},d(h){h&&w(e),h&&w(s),h&&w(i),l=!1,xe(c)}}}function hd(t){let e,n,s=t[0]-t[25]+"",i,r,o,a;function l(){return t[17](t[25])}return{c(){e=p("li"),n=p("a"),i=S(s),g(n,"href",r="/blog/"+(t[0]-t[25]))},m(c,h){k(c,e,h),u(e,n),u(n,i),o||(a=j(n,"click",gn(l)),o=!0)},p(c,h){t=c,h&1&&s!==(s=t[0]-t[25]+"")&&ie(i,s),h&1&&r!==(r="/blog/"+(t[0]-t[25]))&&g(n,"href",r)},d(c){c&&w(e),o=!1,a()}}}function fd(t){let e,n=t[0]-t[25]>0&&hd(t);return{c(){n&&n.c(),e=nn()},m(s,i){n&&n.m(s,i),k(s,e,i)},p(s,i){s[0]-s[25]>0?n?n.p(s,i):(n=hd(s),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(s){n&&n.d(s),s&&w(e)}}}function dd(t){let e,n,s=t[0]+(t[25]+1)+"",i,r,o,a;function l(){return t[18](t[25])}return{c(){e=p("li"),n=p("a"),i=S(s),g(n,"href",r="/blog/"+(t[0]+(t[25]+1)))},m(c,h){k(c,e,h),u(e,n),u(n,i),o||(a=j(n,"click",gn(l)),o=!0)},p(c,h){t=c,h&1&&s!==(s=t[0]+(t[25]+1)+"")&&ie(i,s),h&1&&r!==(r="/blog/"+(t[0]+(t[25]+1)))&&g(n,"href",r)},d(c){c&&w(e),o=!1,a()}}}function pd(t){let e,n=t[0]+(t[25]+1)<=t[5]&&dd(t);return{c(){n&&n.c(),e=nn()},m(s,i){n&&n.m(s,i),k(s,e,i)},p(s,i){s[0]+(s[25]+1)<=s[5]?n?n.p(s,i):(n=dd(s),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(s){n&&n.d(s),s&&w(e)}}}function md(t){let e,n,s,i,r,o,a,l,c,h,f;return{c(){e=p("li"),n=p("a"),s=S("next"),r=b(),o=p("li"),a=p("a"),l=S("last"),g(n,"href",i="/blog/"+(t[0]+1)),g(a,"href",c="/blog/"+t[5])},m(d,m){k(d,e,m),u(e,n),u(n,s),k(d,r,m),k(d,o,m),u(o,a),u(a,l),h||(f=[j(n,"click",gn(t[19])),j(a,"click",gn(t[20]))],h=!0)},p(d,m){m&1&&i!==(i="/blog/"+(d[0]+1))&&g(n,"href",i),m&32&&c!==(c="/blog/"+d[5])&&g(a,"href",c)},d(d){d&&w(e),d&&w(r),d&&w(o),h=!1,xe(f)}}}function gd(t){let e,n,s;return n=new $I({props:{$contact:t[7]}}),{c(){e=p("div"),ge(n.$$.fragment)},m(i,r){k(i,e,r),fe(n,e,null),s=!0},p(i,r){const o={};r&128&&(o.$contact=i[7]),n.$set(o)},i(i){s||(q(n.$$.fragment,i),s=!0)},o(i){x(n.$$.fragment,i),s=!1},d(i){i&&w(e),de(n)}}}function _d(t){let e,n,s,i;const r=[t[7]];let o={};for(let a=0;a<r.length;a+=1)o=Lt(o,r[a]);return s=new XI({props:o}),{c(){e=p("div"),n=p("div"),ge(s.$$.fragment),g(n,"class","container")},m(a,l){k(a,e,l),u(e,n),fe(s,n,null),i=!0},p(a,l){const c=l&128?_n(r,[Xn(a[7])]):{};s.$set(c)},i(a){i||(q(s.$$.fragment,a),i=!0)},o(a){x(s.$$.fragment,a),i=!1},d(a){a&&w(e),de(s)}}}function JI(t){let e,n,s,i,r,o,a,l,c,h,f=t[6]==="start"&&ad(t),d=t[6]==="contSelect"&&gd(t),m=(t[6]==="contEditing"||t[6]==="contAdding")&&_d(t);return{c(){e=p("main"),n=p("div"),s=p("h1"),s.textContent="Contactos",i=b(),r=p("img"),a=b(),f&&f.c(),l=b(),d&&d.c(),c=b(),m&&m.c(),st(r.src,o=M_)||g(r,"src",o),g(r,"alt","contactos"),g(r,"class","svelte-1o9z7a3"),g(e,"class","container")},m(_,y){k(_,e,y),u(e,n),u(n,s),u(n,i),u(n,r),u(e,a),f&&f.m(e,null),u(e,l),d&&d.m(e,null),u(e,c),m&&m.m(e,null),h=!0},p(_,[y]){_[6]==="start"?f?(f.p(_,y),y&64&&q(f,1)):(f=ad(_),f.c(),q(f,1),f.m(e,l)):f&&(bt(),x(f,1,1,()=>{f=null}),wt()),_[6]==="contSelect"?d?(d.p(_,y),y&64&&q(d,1)):(d=gd(_),d.c(),q(d,1),d.m(e,c)):d&&(bt(),x(d,1,1,()=>{d=null}),wt()),_[6]==="contEditing"||_[6]==="contAdding"?m?(m.p(_,y),y&64&&q(m,1)):(m=_d(_),m.c(),q(m,1),m.m(e,null)):m&&(bt(),x(m,1,1,()=>{m=null}),wt())},i(_){h||(q(f),q(d),q(m),h=!0)},o(_){x(f),x(d),x(m),h=!1},d(_){_&&w(e),f&&f.d(),d&&d.d(),m&&m.d()}}}let rl=15;function xI(t,e,n){let s,i,r,o,a,l;Pe(t,je,P=>n(6,a=P)),Pe(t,et,P=>n(7,l=P));let c;we(je,a="start",a);let h=1,f=[];const d=P=>{n(0,h=P)},m=Ca(Yt(lt,"contacts"),P=>{n(1,f=P.docs.map(Z=>({...Z.data(),id:Z.id}))),E()},P=>{console.log(P)});wr(m);const _=()=>{we(je,a="contAdding",a)},y=P=>{n(3,c=""),we(et,l=P,l),we(je,a="contSelect",a)};function v(){return n(1,f=qs.filter(P=>(P.telephon+(P.name+" "+P.lastname).toLowerCase()).includes(c.toLowerCase())))}function E(){f.sort((P,Z)=>new Date(P.createdAt)<new Date(Z.createdAt)?1:new Date(P.createdAt)>new Date(Z.createdAt)?-1:0)}function T(P){c=P,n(3,c)}const L=P=>y(P),D=()=>d(1),U=()=>d(h-1),W=P=>d(h-P),O=P=>d(h+(P+1)),F=()=>d(h+1),G=()=>d(i);return t.$$.update=()=>{t.$$.dirty&2&&n(12,s=f.length),t.$$.dirty&4096&&n(5,i=Math.ceil(s/rl)),t.$$.dirty&1&&n(2,r=h*rl),t.$$.dirty&4&&n(4,o=r-rl)},[h,f,r,c,o,i,a,l,d,_,y,v,s,T,L,D,U,W,O,F,G]}class ZI extends Xe{constructor(e){super(),Ye(this,e,xI,JI,Ge,{})}}let rs=[],os=[];function eS(t,e){e=e.filter(n=>n.selecTP===t.selectTP),t.numBeds>0&&(e=e.filter(n=>n.numBeds>=t.beds)),t.numBaths>0&&(e=e.filter(n=>n.numBaths>=t.bathroom)),t.numParks>0&&(e=e.filter(n=>n.numPark>=t.parks));try{e=e.filter(n=>{n.budget?rs=e.filter(s=>s.budget>=t.price*.7&&s.budget<=t.price*1.1):os=e.filter(s=>s.rangeProp===j_(t.price))})}catch(n){console.log(n)}e=os.concat(rs),rs=[],os=[];try{e.filter(n=>{n.locaProperty.length>0?rs=e.filter(s=>t.locaProperty.some(i=>s.locaProperty.includes(i))):os=e.filter(s=>s.locaProperty.length===0)})}catch(n){console.log(n)}e=os.concat(rs),rs=[],os=[];try{e=e.filter(n=>{n.tagsProperty.length>0?rs=e.filter(s=>t.tagsProperty.some(i=>s.tagsProperty.includes(i))):os=e.filter(s=>s.tagsProperty.length===0)})}catch(n){console.log(n)}return e=os.concat(rs),Lp.set(e)}function vd(t,e,n){const s=t.slice();return s[6]=e[n],s}function yd(t,e,n){const s=t.slice();return s[39]=e[n],s}function bd(t){let e,n,s,i=t[5].length+"",r,o,a,l,c,h=t[7],f=[];for(let _=0;_<h.length;_+=1)f[_]=wd(yd(t,h,_));let d=t[4],m=[];for(let _=0;_<d.length;_+=1)m[_]=kd(vd(t,d,_));return{c(){e=p("div"),n=p("h1"),s=S("A "),r=S(i),o=S(" Contactos Le Puede Interesar Esta Propiedad"),a=b();for(let _=0;_<f.length;_+=1)f[_].c();l=b();for(let _=0;_<m.length;_+=1)m[_].c();c=nn(),g(e,"class","sect__Title svelte-3wn943")},m(_,y){k(_,e,y),u(e,n),u(n,s),u(n,r),u(n,o),u(e,a);for(let v=0;v<f.length;v+=1)f[v].m(e,null);k(_,l,y);for(let v=0;v<m.length;v+=1)m[v].m(_,y);k(_,c,y)},p(_,y){if(y[0]&32&&i!==(i=_[5].length+"")&&ie(r,i),y[0]&2180){h=_[7];let v;for(v=0;v<h.length;v+=1){const E=yd(_,h,v);f[v]?f[v].p(E,y):(f[v]=wd(E),f[v].c(),f[v].m(e,null))}for(;v<f.length;v+=1)f[v].d(1);f.length=h.length}if(y[0]&17){d=_[4];let v;for(v=0;v<d.length;v+=1){const E=vd(_,d,v);m[v]?m[v].p(E,y):(m[v]=kd(E),m[v].c(),m[v].m(c.parentNode,c))}for(;v<m.length;v+=1)m[v].d(1);m.length=d.length}},d(_){_&&w(e),Fe(f,_),_&&w(l),Fe(m,_),_&&w(c)}}}function wd(t){let e,n,s,i=t[39]+"",r,o,a,l;return{c(){e=p("label"),n=p("input"),s=b(),r=S(i),o=b(),g(n,"type","radio"),n.__value=t[39],n.value=n.__value,t[15][1].push(n)},m(c,h){k(c,e,h),u(e,n),n.checked=n.__value===t[2],u(e,s),u(e,r),u(e,o),a||(l=[j(n,"change",t[14]),j(n,"change",t[11])],a=!0)},p(c,h){h[0]&4&&(n.checked=n.__value===c[2])},d(c){c&&w(e),t[15][1].splice(t[15][1].indexOf(n),1),a=!1,xe(l)}}}function kd(t){let e,n,s,i,r,o=t[6].name+"",a,l,c=t[6].lastname+"",h,f,d,m=t[6].locaProperty+"",_,y,v,E=t[6].tagsProperty+"",T,L,D,U=t[6].budget+"",W,O,F,G=t[6].rangeProp+"",P,Z,H,Q;return{c(){e=p("div"),n=p("input"),i=b(),r=p("h3"),a=S(o),l=b(),h=S(c),f=b(),d=p("h4"),_=S(m),y=b(),v=p("h4"),T=S(E),L=b(),D=p("div"),W=S(U),O=b(),F=p("div"),P=S(G),Z=b(),g(n,"type","checkbox"),n.__value=s=t[6].telephon,n.value=n.__value,t[15][0].push(n),g(e,"class","conInt svelte-3wn943")},m(N,K){k(N,e,K),u(e,n),n.checked=~t[0].indexOf(n.__value),u(e,i),u(e,r),u(r,a),u(r,l),u(r,h),u(e,f),u(e,d),u(d,_),u(e,y),u(e,v),u(v,T),u(e,L),u(e,D),u(D,W),u(e,O),u(e,F),u(F,P),u(e,Z),H||(Q=j(n,"change",t[16]),H=!0)},p(N,K){K[0]&16&&s!==(s=N[6].telephon)&&(n.__value=s,n.value=n.__value),K[0]&1&&(n.checked=~N[0].indexOf(n.__value)),K[0]&16&&o!==(o=N[6].name+"")&&ie(a,o),K[0]&16&&c!==(c=N[6].lastname+"")&&ie(h,c),K[0]&16&&m!==(m=N[6].locaProperty+"")&&ie(_,m),K[0]&16&&E!==(E=N[6].tagsProperty+"")&&ie(T,E),K[0]&16&&U!==(U=N[6].budget+"")&&ie(W,U),K[0]&16&&G!==(G=N[6].rangeProp+"")&&ie(P,G)},d(N){N&&w(e),t[15][0].splice(t[15][0].indexOf(n),1),H=!1,Q()}}}function tS(t){let e,n,s,i,r,o,a,l,c,h=t[3].claveEB+"",f,d,m=t[3].nameProperty+"",_,y,v,E=t[3].selectTP+"",T,L,D=t[3].colonia+"",U,W,O=t[3].locaProperty+"",F,G,P,Z,H,Q=t[3].price+"",N,K,B,ue,ee=t[3].beds+"",le,re,$=t[3].bathroom+"",C,M,J=t[3].halfBathroom+"",V,Y,Ae,R,ce=t[3].areaBuilding+"",be,He,A=t[3].areaTotal+"",X,Me,z,pe,oe=t[3].description+"",Je,yn,Ct,At,sn,Zt,$t,Ht,ut,pn,ot,ht,rn,ft,Fn,on,dt,In,Sn,an,Cn,An,zt,Be,en,qe=t[1]&&bd(t);return{c(){e=p("div"),n=p("div"),s=p("div"),i=p("img"),a=b(),l=p("div"),c=p("h4"),f=S(h),d=b(),_=S(m),y=b(),v=p("h5"),T=S(E),L=S(" en Col. "),U=S(D),W=S(" al "),F=S(O),G=S(" de la ciudad."),P=b(),Z=p("h6"),H=S("Precio: "),N=S(Q),K=b(),B=p("div"),ue=p("h6"),le=S(ee),re=S(" Recamaras, "),C=S($),M=S(" Ba\xF1os y "),V=S(J),Y=S(" Medio Ba\xF1o"),Ae=b(),R=p("h6"),be=S(ce),He=S(" m2 de construcci\xF3n y "),X=S(A),Me=S(" m2 de terreno"),z=b(),pe=p("p"),Je=S(oe),yn=b(),Ct=p("div"),At=p("a"),sn=S("Seguir Link en Otra Ventana"),$t=b(),Ht=p("div"),ut=p("button"),ut.textContent="Enviar por WhatsApp",pn=b(),ot=p("button"),ot.textContent="Buscar Interesados",ht=b(),rn=p("div"),ft=p("button"),ft.textContent="Regresar",Fn=b(),on=p("div"),dt=p("img"),Sn=b(),an=p("img"),An=b(),zt=p("div"),qe&&qe.c(),st(i.src,r=t[3].urlImage)||g(i,"src",r),g(i,"alt",o=t[3].nameProperty),g(s,"class","selectImage svelte-3wn943"),g(pe,"class","descSelec"),g(l,"class","descSelect"),g(At,"href",Zt=t[3].urlProp),g(At,"target","_blank"),g(Ct,"class","folowLink"),g(ut,"class","btnCommon btnWhatsApp"),g(ot,"class","btnCommon"),g(Ht,"class","optionsSend"),g(ft,"class","btnCommon btnCancel"),g(rn,"class","backAnt"),st(dt.src,In=Ra)||g(dt,"src",In),g(dt,"alt","delete"),st(an.src,Cn=q_)||g(an,"src",Cn),g(an,"alt","delete"),g(on,"class","icon__Content"),g(n,"class","sele__info svelte-3wn943"),g(e,"class","sele__Product svelte-3wn943"),g(zt,"class","container cont__interest svelte-3wn943")},m(Ne,De){k(Ne,e,De),u(e,n),u(n,s),u(s,i),u(n,a),u(n,l),u(l,c),u(c,f),u(c,d),u(c,_),u(l,y),u(l,v),u(v,T),u(v,L),u(v,U),u(v,W),u(v,F),u(v,G),u(l,P),u(l,Z),u(Z,H),u(Z,N),u(l,K),u(l,B),u(B,ue),u(ue,le),u(ue,re),u(ue,C),u(ue,M),u(ue,V),u(ue,Y),u(l,Ae),u(l,R),u(R,be),u(R,He),u(R,X),u(R,Me),u(l,z),u(l,pe),u(pe,Je),u(n,yn),u(n,Ct),u(Ct,At),u(At,sn),u(n,$t),u(n,Ht),u(Ht,ut),u(Ht,pn),u(Ht,ot),u(n,ht),u(n,rn),u(rn,ft),u(n,Fn),u(n,on),u(on,dt),u(on,Sn),u(on,an),k(Ne,An,De),k(Ne,zt,De),qe&&qe.m(zt,null),Be||(en=[j(ut,"click",t[10]),j(ot,"click",t[12]),j(ft,"click",t[13]),j(dt,"click",t[8]),j(an,"click",t[9])],Be=!0)},p(Ne,De){De[0]&8&&!st(i.src,r=Ne[3].urlImage)&&g(i,"src",r),De[0]&8&&o!==(o=Ne[3].nameProperty)&&g(i,"alt",o),De[0]&8&&h!==(h=Ne[3].claveEB+"")&&ie(f,h),De[0]&8&&m!==(m=Ne[3].nameProperty+"")&&ie(_,m),De[0]&8&&E!==(E=Ne[3].selectTP+"")&&ie(T,E),De[0]&8&&D!==(D=Ne[3].colonia+"")&&ie(U,D),De[0]&8&&O!==(O=Ne[3].locaProperty+"")&&ie(F,O),De[0]&8&&Q!==(Q=Ne[3].price+"")&&ie(N,Q),De[0]&8&&ee!==(ee=Ne[3].beds+"")&&ie(le,ee),De[0]&8&&$!==($=Ne[3].bathroom+"")&&ie(C,$),De[0]&8&&J!==(J=Ne[3].halfBathroom+"")&&ie(V,J),De[0]&8&&ce!==(ce=Ne[3].areaBuilding+"")&&ie(be,ce),De[0]&8&&A!==(A=Ne[3].areaTotal+"")&&ie(X,A),De[0]&8&&oe!==(oe=Ne[3].description+"")&&ie(Je,oe),De[0]&8&&Zt!==(Zt=Ne[3].urlProp)&&g(At,"href",Zt),Ne[1]?qe?qe.p(Ne,De):(qe=bd(Ne),qe.c(),qe.m(zt,null)):qe&&(qe.d(1),qe=null)},i:he,o:he,d(Ne){Ne&&w(e),Ne&&w(An),Ne&&w(zt),qe&&qe.d(),Be=!1,xe(en)}}}function nS(t,e,n){let s,i,r,o,a,l,c;Pe(t,et,N=>n(6,s=N)),Pe(t,je,N=>n(23,i=N)),Pe(t,We,N=>n(3,r=N)),Pe(t,Ls,N=>n(4,o=N)),Pe(t,Lp,N=>n(5,a=N)),Pe(t,di,N=>n(24,l=N)),Pe(t,fs,N=>n(25,c=N)),Zs();let h=[],f=!1,d=["Posobles_Interesados","Por_Enviar","Ya_Se_Envi\xF3"],m="",_=[],y=[],v=[],E=[],T=[];function L(){console.log("propEditing"),we(je,i="propEditing",i),console.log("propEditing")}async function D(){confirm("Deseas eleiminar definitivamente la propiedad?")&&(console.log("Borraste al propiedad"),await Sa(Cs(lt,"properties",r.id)),we(je,i="start",i))}function U(){console.log(l),we(di,l="sendProperties",l),r.claveEB,W(h)}function W(N){console.log(r),r.claveEB,we(je,i="binnAdding",i),bs.filter(K=>K.urlProp===N[0]),l==="sendMsg"?we(fs,c={date:Date.now(),comment:N,to:s.telephon,action:"Mensaje enviado: "},c):l==="sendProperties"?(we(fs,c={date:Date.now(),comment:r.claveEB,to:s.telephon,action:"Enviada desde propiedad: "},c),console.log(c)):we(fs,c={date:Date.now(),comment:r.claveEB,to:s.telephon,action:"Propiedad enviada: "},c),we(di,l="",l),we(je,i="contSelect",i)}function O(){m==="Posobles_Interesados"?we(Ls,o=a,o):m==="Por_Enviar"?(E=[],T=Fs.filter(N=>N.comment!=r.claveEB),qs.filter(N=>{T.forEach(K=>{N.telephon===K.to&&E.push(N),we(Ls,o=E,o)})})):m==="Ya_Se_Envi\xF3"&&(v=[],T=Fs.filter(N=>N.comment===r.claveEB),console.log(T),qs.filter(N=>{T.forEach(K=>{N.telephon===K.to&&v.push(N),we(Ls,o=v,o)})}))}function F(){n(1,f=!0),eS(r,qs)}function G(){we(We,r=[],r),we(je,i="start",i)}function P(){console.log(Fs),_=Fs.filter(K=>K.to===s.telephon),console.log(_),_.filter(K=>K.action==="Propiedad enviada: ").forEach(K=>y.push(K.comment)),console.log(y)}P();const Z=[[],[]];function H(){m=this.__value,n(2,m)}function Q(){h=Nt(Z[0],this.__value,this.checked),n(0,h)}return[h,f,m,r,o,a,s,d,L,D,U,O,F,G,H,Z,Q]}class sS extends Xe{constructor(e){super(),Ye(this,e,nS,tS,Ge,{},null,[-1,-1])}}function Ed(t,e,n){const s=t.slice();return s[24]=e[n],s}function Td(t,e,n){const s=t.slice();return s[27]=e[n],s}function Id(t,e,n){const s=t.slice();return s[30]=e[n],s}function Sd(t,e,n){const s=t.slice();return s[33]=e[n],s}function Cd(t,e,n){const s=t.slice();return s[36]=e[n],s}function Ad(t,e,n){const s=t.slice();return s[39]=e[n],s}function Dd(t,e,n){const s=t.slice();return s[42]=e[n],s}function iS(t){let e,n=kt(t[1].createdAt)+"",s,i,r;return{c(){e=p("h3"),s=S(n),g(e,"class","dataInput")},m(o,a){k(o,e,a),u(e,s),i||(r=j(e,"dblclick",t[3]),i=!0)},p(o,a){a[0]&2&&n!==(n=kt(o[1].createdAt)+"")&&ie(s,n)},d(o){o&&w(e),i=!1,r()}}}function rS(t){let e,n,s;return{c(){e=p("input"),g(e,"class","dataInput"),g(e,"type","date")},m(i,r){k(i,e,r),ve(e,t[1].createdAt),n||(s=j(e,"input",t[4]),n=!0)},p(i,r){r[0]&2&&ve(e,i[1].createdAt)},d(i){i&&w(e),n=!1,s()}}}function Pd(t){let e,n=t[42]+"",s;return{c(){e=p("option"),s=S(n),g(e,"type","checkbox"),e.__value=t[42],e.value=e.__value},m(i,r){k(i,e,r),u(e,s)},p:he,d(i){i&&w(e)}}}function Rd(t){let e,n=t[39]+"",s,i;return{c(){e=p("option"),s=S(n),i=b(),g(e,"type","checkbox"),e.__value=t[39],e.value=e.__value},m(r,o){k(r,e,o),u(e,s),u(e,i)},p:he,d(r){r&&w(e)}}}function Nd(t){let e,n=t[36]+"",s,i;return{c(){e=p("option"),s=S(n),i=S(" Rec\xE1maras"),g(e,"type","checkbox"),e.__value=t[36],e.value=e.__value},m(r,o){k(r,e,o),u(e,s),u(e,i)},p:he,d(r){r&&w(e)}}}function Od(t){let e,n=t[33]+"",s,i;return{c(){e=p("option"),s=S(n),i=S(" ba\xF1os"),g(e,"type","checkbox"),e.__value=t[33],e.value=e.__value},m(r,o){k(r,e,o),u(e,s),u(e,i)},p:he,d(r){r&&w(e)}}}function Ld(t){let e,n=t[30]+"",s,i;return{c(){e=p("option"),s=S(n),i=S(" Medios ba\xF1os"),g(e,"type","checkbox"),e.__value=t[30],e.value=e.__value},m(r,o){k(r,e,o),u(e,s),u(e,i)},p:he,d(r){r&&w(e)}}}function Md(t){let e,n=t[27]+"",s,i;return{c(){e=p("option"),s=S(n),i=S(" Estacionamientos"),g(e,"type","checkbox"),e.__value=t[27],e.value=e.__value},m(r,o){k(r,e,o),u(e,s),u(e,i)},p:he,d(r){r&&w(e)}}}function $d(t){let e,n=t[24]+"",s;return{c(){e=p("option"),s=S(n),g(e,"type","checkbox"),e.__value=t[24],e.value=e.__value},m(i,r){k(i,e,r),u(e,s)},p:he,d(i){i&&w(e)}}}function oS(t){let e,n,s,i,r,o,a,l,c,h,f,d,m,_,y,v,E,T,L,D,U,W,O,F,G,P,Z,H,Q,N,K,B,ue,ee,le,re,$,C,M,J,V,Y,Ae,R,ce,be,He,A,X,Me,z,pe,oe,Je,yn,Ct,At,sn,Zt,$t,Ht,ut,pn,ot,ht,rn,ft,Fn,on,dt,In,Sn,an,Cn;function An(I,ae){if(I[0])return rS;if(I[2]==="propEditing")return iS}let zt=An(t),Be=zt&&zt(t),en=Qo,qe=[];for(let I=0;I<en.length;I+=1)qe[I]=Pd(Dd(t,en,I));let Ne=Nf,De=[];for(let I=0;I<Ne.length;I+=1)De[I]=Rd(Ad(t,Ne,I));let Bn=Yo,pt=[];for(let I=0;I<Bn.length;I+=1)pt[I]=Nd(Cd(t,Bn,I));let Vn=wn,Ut=[];for(let I=0;I<Vn.length;I+=1)Ut[I]=Od(Sd(t,Vn,I));let Dn=wn,mt=[];for(let I=0;I<Dn.length;I+=1)mt[I]=Ld(Id(t,Dn,I));let jn=wn,gt=[];for(let I=0;I<jn.length;I+=1)gt[I]=Md(Td(t,jn,I));let bn=Lf,nt=[];for(let I=0;I<bn.length;I+=1)nt[I]=$d(Ed(t,bn,I));function Jr(I){t[22](I)}let ss={};t[1].locaProperty!==void 0&&(ss.ubication=t[1].locaProperty),ft=new H_({props:ss}),Yn.push(()=>zs(ft,"ubication",Jr));function Rs(I){t[23](I)}let $i={};return t[1].tagsProperty!==void 0&&($i.tag=t[1].tagsProperty),dt=new z_({props:$i}),Yn.push(()=>zs(dt,"tag",Rs)),{c(){e=p("div"),Be&&Be.c(),n=b(),s=p("select"),i=p("option"),i.textContent="Tipo de Propiedad";for(let I=0;I<qe.length;I+=1)qe[I].c();r=b(),o=p("label"),o.innerHTML=`Titulo
       <input type="text"/>`,a=b(),l=p("label"),c=S(`Colonia\r
        `),h=p("input"),f=b(),d=p("label"),m=S(`Nombre de la Propiead\r
        `),_=p("input"),y=b(),v=p("label"),E=S(`Clave EB\r
        `),T=p("input"),L=b(),D=p("label"),U=S(`Clave MH\r
        `),W=p("input"),O=b(),F=p("div"),G=p("textarea"),P=b(),Z=p("select"),H=p("option"),H.textContent="Tipo de Operaci\xF3n";for(let I=0;I<De.length;I+=1)De[I].c();Q=b(),N=p("select"),K=p("option"),K.textContent="# Rec\xE1maras";for(let I=0;I<pt.length;I+=1)pt[I].c();B=b(),ue=p("select"),ee=p("option"),ee.textContent="# Ba\xF1os";for(let I=0;I<Ut.length;I+=1)Ut[I].c();le=b(),re=p("select"),$=p("option"),$.textContent="# Medios Ba\xF1os";for(let I=0;I<mt.length;I+=1)mt[I].c();C=b(),M=p("select"),J=p("option"),J.textContent="# Estacionamientos";for(let I=0;I<gt.length;I+=1)gt[I].c();V=b(),Y=p("label"),Ae=S(`Area de Construcci\xF3n\r
            `),R=p("input"),ce=b(),be=p("label"),He=S(`Area de Terreno\r
            `),A=p("input"),X=b(),Me=p("label"),z=S(`Precio\r
            `),pe=p("input"),oe=b(),Je=p("label"),yn=S(`Link Imgen\r
        `),Ct=p("input"),At=b(),sn=p("label"),Zt=S(`Link de la Propiedad\r
        `),$t=p("input"),Ht=b(),ut=p("label"),ut.innerHTML=`Propietario
            <input type="text"/>`,pn=b(),ot=p("select"),ht=p("option"),ht.textContent="Tipo de Encargado";for(let I=0;I<nt.length;I+=1)nt[I].c();rn=b(),ge(ft.$$.fragment),on=b(),ge(dt.$$.fragment),i.disabled=!0,i.selected=!0,i.__value="",i.value=i.__value,g(s,"class","selTP"),g(s,"id","selTP"),g(s,"name","selTP"),t[1].selectTP===void 0&&Ze(()=>t[5].call(s)),g(h,"type","text"),g(_,"type","text"),g(T,"type","text"),g(W,"type","text"),g(G,"placeholder","Comentarios"),g(G,"cols","65"),g(G,"rows","5"),g(G,"class","form-control"),g(F,"class","col"),H.disabled=!0,H.selected=!0,H.__value="",H.value=H.__value,t[1].typeOperation===void 0&&Ze(()=>t[11].call(Z)),K.disabled=!0,K.selected=!0,K.__value="",K.value=K.__value,t[1].beds===void 0&&Ze(()=>t[12].call(N)),ee.disabled=!0,ee.selected=!0,ee.__value="",ee.value=ee.__value,t[1].bathroom===void 0&&Ze(()=>t[13].call(ue)),$.disabled=!0,$.selected=!0,$.__value="",$.value=$.__value,t[1].halfBathroom===void 0&&Ze(()=>t[14].call(re)),J.disabled=!0,J.selected=!0,J.__value="",J.value=J.__value,t[1].park===void 0&&Ze(()=>t[15].call(M)),g(R,"type","number"),g(A,"type","number"),g(pe,"type","number"),g(Ct,"type","text"),g($t,"type","text"),ht.disabled=!0,ht.selected=!0,ht.__value="",ht.value=ht.__value,g(ot,"name","typeSaller"),t[1].typeSaller===void 0&&Ze(()=>t[21].call(ot))},m(I,ae){k(I,e,ae),Be&&Be.m(e,null),k(I,n,ae),k(I,s,ae),u(s,i);for(let Oe=0;Oe<qe.length;Oe+=1)qe[Oe].m(s,null);Ue(s,t[1].selectTP),k(I,r,ae),k(I,o,ae),k(I,a,ae),k(I,l,ae),u(l,c),u(l,h),ve(h,t[1].colonia),k(I,f,ae),k(I,d,ae),u(d,m),u(d,_),ve(_,t[1].nameProperty),k(I,y,ae),k(I,v,ae),u(v,E),u(v,T),ve(T,t[1].claveEB),k(I,L,ae),k(I,D,ae),u(D,U),u(D,W),ve(W,t[1].claveMH),k(I,O,ae),k(I,F,ae),u(F,G),ve(G,t[1].description),k(I,P,ae),k(I,Z,ae),u(Z,H);for(let Oe=0;Oe<De.length;Oe+=1)De[Oe].m(Z,null);Ue(Z,t[1].typeOperation),k(I,Q,ae),k(I,N,ae),u(N,K);for(let Oe=0;Oe<pt.length;Oe+=1)pt[Oe].m(N,null);Ue(N,t[1].beds),k(I,B,ae),k(I,ue,ae),u(ue,ee);for(let Oe=0;Oe<Ut.length;Oe+=1)Ut[Oe].m(ue,null);Ue(ue,t[1].bathroom),k(I,le,ae),k(I,re,ae),u(re,$);for(let Oe=0;Oe<mt.length;Oe+=1)mt[Oe].m(re,null);Ue(re,t[1].halfBathroom),k(I,C,ae),k(I,M,ae),u(M,J);for(let Oe=0;Oe<gt.length;Oe+=1)gt[Oe].m(M,null);Ue(M,t[1].park),k(I,V,ae),k(I,Y,ae),u(Y,Ae),u(Y,R),ve(R,t[1].areaBuilding),k(I,ce,ae),k(I,be,ae),u(be,He),u(be,A),ve(A,t[1].areaTotal),k(I,X,ae),k(I,Me,ae),u(Me,z),u(Me,pe),ve(pe,t[1].price),k(I,oe,ae),k(I,Je,ae),u(Je,yn),u(Je,Ct),ve(Ct,t[1].urlImage),k(I,At,ae),k(I,sn,ae),u(sn,Zt),u(sn,$t),ve($t,t[1].urlProp),k(I,Ht,ae),k(I,ut,ae),k(I,pn,ae),k(I,ot,ae),u(ot,ht);for(let Oe=0;Oe<nt.length;Oe+=1)nt[Oe].m(ot,null);Ue(ot,t[1].typeSaller),k(I,rn,ae),fe(ft,I,ae),k(I,on,ae),fe(dt,I,ae),Sn=!0,an||(Cn=[j(s,"change",t[5]),j(h,"input",t[6]),j(_,"input",t[7]),j(T,"input",t[8]),j(W,"input",t[9]),j(G,"input",t[10]),j(Z,"change",t[11]),j(N,"change",t[12]),j(ue,"change",t[13]),j(re,"change",t[14]),j(M,"change",t[15]),j(R,"input",t[16]),j(A,"input",t[17]),j(pe,"input",t[18]),j(Ct,"input",t[19]),j($t,"input",t[20]),j(ot,"change",t[21])],an=!0)},p(I,ae){if(zt===(zt=An(I))&&Be?Be.p(I,ae):(Be&&Be.d(1),Be=zt&&zt(I),Be&&(Be.c(),Be.m(e,null))),ae&0){en=Qo;let te;for(te=0;te<en.length;te+=1){const at=Dd(I,en,te);qe[te]?qe[te].p(at,ae):(qe[te]=Pd(at),qe[te].c(),qe[te].m(s,null))}for(;te<qe.length;te+=1)qe[te].d(1);qe.length=en.length}if(ae[0]&2&&Ue(s,I[1].selectTP),ae[0]&2&&h.value!==I[1].colonia&&ve(h,I[1].colonia),ae[0]&2&&_.value!==I[1].nameProperty&&ve(_,I[1].nameProperty),ae[0]&2&&T.value!==I[1].claveEB&&ve(T,I[1].claveEB),ae[0]&2&&W.value!==I[1].claveMH&&ve(W,I[1].claveMH),ae[0]&2&&ve(G,I[1].description),ae&0){Ne=Nf;let te;for(te=0;te<Ne.length;te+=1){const at=Ad(I,Ne,te);De[te]?De[te].p(at,ae):(De[te]=Rd(at),De[te].c(),De[te].m(Z,null))}for(;te<De.length;te+=1)De[te].d(1);De.length=Ne.length}if(ae[0]&2&&Ue(Z,I[1].typeOperation),ae&0){Bn=Yo;let te;for(te=0;te<Bn.length;te+=1){const at=Cd(I,Bn,te);pt[te]?pt[te].p(at,ae):(pt[te]=Nd(at),pt[te].c(),pt[te].m(N,null))}for(;te<pt.length;te+=1)pt[te].d(1);pt.length=Bn.length}if(ae[0]&2&&Ue(N,I[1].beds),ae&0){Vn=wn;let te;for(te=0;te<Vn.length;te+=1){const at=Sd(I,Vn,te);Ut[te]?Ut[te].p(at,ae):(Ut[te]=Od(at),Ut[te].c(),Ut[te].m(ue,null))}for(;te<Ut.length;te+=1)Ut[te].d(1);Ut.length=Vn.length}if(ae[0]&2&&Ue(ue,I[1].bathroom),ae&0){Dn=wn;let te;for(te=0;te<Dn.length;te+=1){const at=Id(I,Dn,te);mt[te]?mt[te].p(at,ae):(mt[te]=Ld(at),mt[te].c(),mt[te].m(re,null))}for(;te<mt.length;te+=1)mt[te].d(1);mt.length=Dn.length}if(ae[0]&2&&Ue(re,I[1].halfBathroom),ae&0){jn=wn;let te;for(te=0;te<jn.length;te+=1){const at=Td(I,jn,te);gt[te]?gt[te].p(at,ae):(gt[te]=Md(at),gt[te].c(),gt[te].m(M,null))}for(;te<gt.length;te+=1)gt[te].d(1);gt.length=jn.length}if(ae[0]&2&&Ue(M,I[1].park),ae[0]&2&&ds(R.value)!==I[1].areaBuilding&&ve(R,I[1].areaBuilding),ae[0]&2&&ds(A.value)!==I[1].areaTotal&&ve(A,I[1].areaTotal),ae[0]&2&&ds(pe.value)!==I[1].price&&ve(pe,I[1].price),ae[0]&2&&Ct.value!==I[1].urlImage&&ve(Ct,I[1].urlImage),ae[0]&2&&$t.value!==I[1].urlProp&&ve($t,I[1].urlProp),ae&0){bn=Lf;let te;for(te=0;te<bn.length;te+=1){const at=Ed(I,bn,te);nt[te]?nt[te].p(at,ae):(nt[te]=$d(at),nt[te].c(),nt[te].m(ot,null))}for(;te<nt.length;te+=1)nt[te].d(1);nt.length=bn.length}ae[0]&2&&Ue(ot,I[1].typeSaller);const Oe={};!Fn&&ae[0]&2&&(Fn=!0,Oe.ubication=I[1].locaProperty,Hs(()=>Fn=!1)),ft.$set(Oe);const qn={};!In&&ae[0]&2&&(In=!0,qn.tag=I[1].tagsProperty,Hs(()=>In=!1)),dt.$set(qn)},i(I){Sn||(q(ft.$$.fragment,I),q(dt.$$.fragment,I),Sn=!0)},o(I){x(ft.$$.fragment,I),x(dt.$$.fragment,I),Sn=!1},d(I){I&&w(e),Be&&Be.d(),I&&w(n),I&&w(s),Fe(qe,I),I&&w(r),I&&w(o),I&&w(a),I&&w(l),I&&w(f),I&&w(d),I&&w(y),I&&w(v),I&&w(L),I&&w(D),I&&w(O),I&&w(F),I&&w(P),I&&w(Z),Fe(De,I),I&&w(Q),I&&w(N),Fe(pt,I),I&&w(B),I&&w(ue),Fe(Ut,I),I&&w(le),I&&w(re),Fe(mt,I),I&&w(C),I&&w(M),Fe(gt,I),I&&w(V),I&&w(Y),I&&w(ce),I&&w(be),I&&w(X),I&&w(Me),I&&w(oe),I&&w(Je),I&&w(At),I&&w(sn),I&&w(Ht),I&&w(ut),I&&w(pn),I&&w(ot),Fe(nt,I),I&&w(rn),de(ft,I),I&&w(on),de(dt,I),an=!1,xe(Cn)}}}function aS(t,e,n){let s,i;Pe(t,We,Z=>n(1,s=Z)),Pe(t,je,Z=>n(2,i=Z));let r=!1;function o(){n(0,r=!0)}function a(){s.createdAt=this.value,We.set(s)}function l(){s.selectTP=Ft(this),We.set(s)}function c(){s.colonia=this.value,We.set(s)}function h(){s.nameProperty=this.value,We.set(s)}function f(){s.claveEB=this.value,We.set(s)}function d(){s.claveMH=this.value,We.set(s)}function m(){s.description=this.value,We.set(s)}function _(){s.typeOperation=Ft(this),We.set(s)}function y(){s.beds=Ft(this),We.set(s)}function v(){s.bathroom=Ft(this),We.set(s)}function E(){s.halfBathroom=Ft(this),We.set(s)}function T(){s.park=Ft(this),We.set(s)}function L(){s.areaBuilding=ds(this.value),We.set(s)}function D(){s.areaTotal=ds(this.value),We.set(s)}function U(){s.price=ds(this.value),We.set(s)}function W(){s.urlImage=this.value,We.set(s)}function O(){s.urlProp=this.value,We.set(s)}function F(){s.typeSaller=Ft(this),We.set(s)}function G(Z){t.$$.not_equal(s.locaProperty,Z)&&(s.locaProperty=Z,We.set(s))}function P(Z){t.$$.not_equal(s.tagsProperty,Z)&&(s.tagsProperty=Z,We.set(s))}return[r,s,i,o,a,l,c,h,f,d,m,_,y,v,E,T,L,D,U,W,O,F,G,P]}class lS extends Xe{constructor(e){super(),Ye(this,e,aS,oS,Ge,{},null,[-1,-1])}}function cS(t){let e;return{c(){e=S("Editar")},m(n,s){k(n,e,s)},d(n){n&&w(e)}}}function uS(t){let e;return{c(){e=S("Guardar")},m(n,s){k(n,e,s)},d(n){n&&w(e)}}}function hS(t){let e,n,s,i,r,o,a,l,c,h,f,d,m,_,y,v;l=new lS({});function E(D,U){return D[0]==="propAdding"?uS:cS}let T=E(t),L=T(t);return{c(){e=p("form"),n=p("div"),s=p("div"),i=p("img"),a=b(),ge(l.$$.fragment),c=b(),h=p("div"),f=p("button"),L.c(),d=b(),m=p("button"),m.textContent="Cancel",st(i.src,r=t[1].urlImage)||g(i,"src",r),g(i,"alt",o=t[1].nameProperty),g(i,"class","svelte-166hnhc"),g(f,"class","btn-save"),g(m,"class","btn-cancel"),g(h,"class","contSavCan svelte-166hnhc"),g(n,"class","altaContactos"),g(e,"class","propiedad")},m(D,U){k(D,e,U),u(e,n),u(n,s),u(s,i),u(s,a),fe(l,s,null),u(n,c),u(n,h),u(h,f),L.m(f,null),u(h,d),u(h,m),_=!0,y||(v=[j(m,"click",t[3]),j(e,"submit",gn(t[2]))],y=!0)},p(D,[U]){(!_||U&2&&!st(i.src,r=D[1].urlImage))&&g(i,"src",r),(!_||U&2&&o!==(o=D[1].nameProperty))&&g(i,"alt",o),T!==(T=E(D))&&(L.d(1),L=T(D),L&&(L.c(),L.m(f,null)))},i(D){_||(q(l.$$.fragment,D),_=!0)},o(D){x(l.$$.fragment,D),_=!1},d(D){D&&w(e),de(l),L.d(),y=!1,xe(v)}}}function fS(t,e,n){let s,i;Pe(t,je,c=>n(0,s=c)),Pe(t,We,c=>n(1,i=c));let r=0;const o=Zs();async function a(){if(console.log("Estas en add property",s,i),s==="propEditing")console.log("estas dentro de edit property",i.id),await tu(Cs(lt,"properties",i.id),i);else{r=Date.now(),we(We,i={...i,createdAt:r},i),console.log(i);const c=Yt(lt,"properties");await ys(c,i)}we(je,s="start",s),we(We,i="",i)}return[s,i,a,()=>{o("./")}]}class K_ extends Xe{constructor(e){super(),Ye(this,e,fS,hS,Ge,{})}}function Ud(t,e,n){const s=t.slice();return s[24]=e[n],s[26]=n,s}function Fd(t,e,n){const s=t.slice();return s[26]=e[n],s}function Bd(t,e,n){const s=t.slice();return s[12]=e[n],s[26]=n,s}function Vd(t){let e,n=t[0].length+"",s,i,r,o,a,l,c,h,f,d,m,_,y,v,E,T,L,D,U,W,O,F,G,P;function Z(C){t[14](C)}let H={};t[3]!==void 0&&(H.searchTerm=t[3]),l=new fu({props:H}),Yn.push(()=>zs(l,"searchTerm",Z)),l.$on("input",t[11]);let Q=t[0],N=[];for(let C=0;C<Q.length;C+=1)N[C]=qd(Bd(t,Q,C));const K=C=>x(N[C],1,1,()=>{N[C]=null});let B=t[1]>1&&Hd(t),ue=[3,2,1],ee=[];for(let C=0;C<3;C+=1)ee[C]=Kd(Fd(t,ue,C));let le=Array(3),re=[];for(let C=0;C<le.length;C+=1)re[C]=Wd(Ud(t,le,C));let $=t[1]<t[5]&&Qd(t);return{c(){e=p("h2"),s=S(n),i=S(" Propiedades a Mostrar"),r=b(),o=p("button"),o.textContent="Alta de Propiedad",a=b(),ge(l.$$.fragment),h=b(),f=p("div"),d=p("main");for(let C=0;C<N.length;C+=1)N[C].c();m=b(),_=p("div"),y=p("div"),v=p("ul"),B&&B.c(),E=b();for(let C=0;C<3;C+=1)ee[C].c();T=b(),L=p("li"),D=p("span"),U=S(t[1]),W=b();for(let C=0;C<re.length;C+=1)re[C].c();O=b(),$&&$.c(),g(d,"id","bookshelf"),g(d,"class","svelte-nygjwm"),g(v,"class","pagi__options"),g(y,"class","pagi__Item"),g(_,"class","container pagination"),g(f,"class","mosPag")},m(C,M){k(C,e,M),u(e,s),u(e,i),k(C,r,M),k(C,o,M),k(C,a,M),fe(l,C,M),k(C,h,M),k(C,f,M),u(f,d);for(let J=0;J<N.length;J+=1)N[J].m(d,null);u(f,m),u(f,_),u(_,y),u(y,v),B&&B.m(v,null),u(v,E);for(let J=0;J<3;J+=1)ee[J].m(v,null);u(v,T),u(v,L),u(L,D),u(D,U),u(v,W);for(let J=0;J<re.length;J+=1)re[J].m(v,null);u(v,O),$&&$.m(v,null),F=!0,G||(P=j(o,"click",t[10]),G=!0)},p(C,M){(!F||M&1)&&n!==(n=C[0].length+"")&&ie(s,n);const J={};if(!c&&M&8&&(c=!0,J.searchTerm=C[3],Hs(()=>c=!1)),l.$set(J),M&533){Q=C[0];let V;for(V=0;V<Q.length;V+=1){const Y=Bd(C,Q,V);N[V]?(N[V].p(Y,M),q(N[V],1)):(N[V]=qd(Y),N[V].c(),q(N[V],1),N[V].m(d,null))}for(bt(),V=Q.length;V<N.length;V+=1)K(V);wt()}if(C[1]>1?B?B.p(C,M):(B=Hd(C),B.c(),B.m(v,E)):B&&(B.d(1),B=null),M&258){ue=[3,2,1];let V;for(V=0;V<3;V+=1){const Y=Fd(C,ue,V);ee[V]?ee[V].p(Y,M):(ee[V]=Kd(Y),ee[V].c(),ee[V].m(v,T))}for(;V<3;V+=1)ee[V].d(1)}if((!F||M&2)&&ie(U,C[1]),M&290){le=Array(3);let V;for(V=0;V<le.length;V+=1){const Y=Ud(C,le,V);re[V]?re[V].p(Y,M):(re[V]=Wd(Y),re[V].c(),re[V].m(v,O))}for(;V<re.length;V+=1)re[V].d(1);re.length=le.length}C[1]<C[5]?$?$.p(C,M):($=Qd(C),$.c(),$.m(v,null)):$&&($.d(1),$=null)},i(C){if(!F){q(l.$$.fragment,C);for(let M=0;M<Q.length;M+=1)q(N[M]);F=!0}},o(C){x(l.$$.fragment,C),N=N.filter(Boolean);for(let M=0;M<N.length;M+=1)x(N[M]);F=!1},d(C){C&&w(e),C&&w(r),C&&w(o),C&&w(a),de(l,C),C&&w(h),C&&w(f),Fe(N,C),B&&B.d(),Fe(ee,C),Fe(re,C),$&&$.d(),G=!1,P()}}}function jd(t){let e,n,s,i,r,o,a;const l=[t[12]];let c={};for(let f=0;f<l.length;f+=1)c=Lt(c,l[f]);n=new V_({props:c});function h(){return t[15](t[12])}return{c(){e=p("section"),ge(n.$$.fragment),s=b(),g(e,"class","property svelte-nygjwm")},m(f,d){k(f,e,d),fe(n,e,null),u(e,s),r=!0,o||(a=j(e,"click",h),o=!0)},p(f,d){t=f;const m=d&1?_n(l,[Xn(t[12])]):{};n.$set(m)},i(f){r||(q(n.$$.fragment,f),Ze(()=>{i||(i=fn(e,Di,{duration:500,easing:Ai},!0)),i.run(1)}),r=!0)},o(f){x(n.$$.fragment,f),i||(i=fn(e,Di,{duration:500,easing:Ai},!1)),i.run(0),r=!1},d(f){f&&w(e),de(n),f&&i&&i.end(),o=!1,a()}}}function qd(t){let e,n,s=t[26]>=t[4]&&t[26]<t[2]&&jd(t);return{c(){s&&s.c(),e=nn()},m(i,r){s&&s.m(i,r),k(i,e,r),n=!0},p(i,r){i[26]>=i[4]&&i[26]<i[2]?s?(s.p(i,r),r&20&&q(s,1)):(s=jd(i),s.c(),q(s,1),s.m(e.parentNode,e)):s&&(bt(),x(s,1,1,()=>{s=null}),wt())},i(i){n||(q(s),n=!0)},o(i){x(s),n=!1},d(i){s&&s.d(i),i&&w(e)}}}function Hd(t){let e,n,s,i,r,o,a,l,c;return{c(){e=p("li"),n=p("a"),n.textContent="first",s=b(),i=p("li"),r=p("a"),o=S("previous"),g(n,"href","/blog"),g(r,"href",a="/blog/"+(t[1]-1))},m(h,f){k(h,e,f),u(e,n),k(h,s,f),k(h,i,f),u(i,r),u(r,o),l||(c=[j(n,"click",gn(t[16])),j(r,"click",gn(t[17]))],l=!0)},p(h,f){f&2&&a!==(a="/blog/"+(h[1]-1))&&g(r,"href",a)},d(h){h&&w(e),h&&w(s),h&&w(i),l=!1,xe(c)}}}function zd(t){let e,n,s=t[1]-t[26]+"",i,r,o,a;function l(){return t[18](t[26])}return{c(){e=p("li"),n=p("a"),i=S(s),g(n,"href",r="/blog/"+(t[1]-t[26]))},m(c,h){k(c,e,h),u(e,n),u(n,i),o||(a=j(n,"click",gn(l)),o=!0)},p(c,h){t=c,h&2&&s!==(s=t[1]-t[26]+"")&&ie(i,s),h&2&&r!==(r="/blog/"+(t[1]-t[26]))&&g(n,"href",r)},d(c){c&&w(e),o=!1,a()}}}function Kd(t){let e,n=t[1]-t[26]>0&&zd(t);return{c(){n&&n.c(),e=nn()},m(s,i){n&&n.m(s,i),k(s,e,i)},p(s,i){s[1]-s[26]>0?n?n.p(s,i):(n=zd(s),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(s){n&&n.d(s),s&&w(e)}}}function Gd(t){let e,n,s=t[1]+(t[26]+1)+"",i,r,o,a;function l(){return t[19](t[26])}return{c(){e=p("li"),n=p("a"),i=S(s),g(n,"href",r="/blog/"+(t[1]+(t[26]+1)))},m(c,h){k(c,e,h),u(e,n),u(n,i),o||(a=j(n,"click",gn(l)),o=!0)},p(c,h){t=c,h&2&&s!==(s=t[1]+(t[26]+1)+"")&&ie(i,s),h&2&&r!==(r="/blog/"+(t[1]+(t[26]+1)))&&g(n,"href",r)},d(c){c&&w(e),o=!1,a()}}}function Wd(t){let e,n=t[1]+(t[26]+1)<=t[5]&&Gd(t);return{c(){n&&n.c(),e=nn()},m(s,i){n&&n.m(s,i),k(s,e,i)},p(s,i){s[1]+(s[26]+1)<=s[5]?n?n.p(s,i):(n=Gd(s),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(s){n&&n.d(s),s&&w(e)}}}function Qd(t){let e,n,s,i,r,o,a,l,c,h,f;return{c(){e=p("li"),n=p("a"),s=S("next"),r=b(),o=p("li"),a=p("a"),l=S("last"),g(n,"href",i="/blog/"+(t[1]+1)),g(a,"href",c="/blog/"+t[5])},m(d,m){k(d,e,m),u(e,n),u(n,s),k(d,r,m),k(d,o,m),u(o,a),u(a,l),h||(f=[j(n,"click",gn(t[20])),j(a,"click",gn(t[21]))],h=!0)},p(d,m){m&2&&i!==(i="/blog/"+(d[1]+1))&&g(n,"href",i),m&32&&c!==(c="/blog/"+d[5])&&g(a,"href",c)},d(d){d&&w(e),d&&w(r),d&&w(o),h=!1,xe(f)}}}function Yd(t){let e,n,s;const i=[t[7]];let r={};for(let o=0;o<i.length;o+=1)r=Lt(r,i[o]);return n=new sS({props:r}),{c(){e=p("div"),ge(n.$$.fragment)},m(o,a){k(o,e,a),fe(n,e,null),s=!0},p(o,a){const l=a&128?_n(i,[Xn(o[7])]):{};n.$set(l)},i(o){s||(q(n.$$.fragment,o),s=!0)},o(o){x(n.$$.fragment,o),s=!1},d(o){o&&w(e),de(n)}}}function Xd(t){let e,n,s;const i=[t[7]];let r={};for(let o=0;o<i.length;o+=1)r=Lt(r,i[o]);return n=new K_({props:r}),{c(){e=p("div"),ge(n.$$.fragment),g(e,"class","container")},m(o,a){k(o,e,a),fe(n,e,null),s=!0},p(o,a){const l=a&128?_n(i,[Xn(o[7])]):{};n.$set(l)},i(o){s||(q(n.$$.fragment,o),s=!0)},o(o){x(n.$$.fragment,o),s=!1},d(o){o&&w(e),de(n)}}}function Jd(t){let e,n,s;return n=new K_({}),{c(){e=p("div"),ge(n.$$.fragment),g(e,"class","container")},m(i,r){k(i,e,r),fe(n,e,null),s=!0},i(i){s||(q(n.$$.fragment,i),s=!0)},o(i){x(n.$$.fragment,i),s=!1},d(i){i&&w(e),de(n)}}}function dS(t){let e,n,s,i,r,o,a,l,c,h,f,d=t[6]==="start"&&Vd(t),m=t[6]==="propSelect"&&Yd(t),_=t[6]==="propEditing"&&Xd(t),y=t[6]==="propAdding"&&Jd();return{c(){e=p("div"),n=p("div"),s=p("h1"),s.textContent="Propiedades",i=b(),r=p("img"),a=b(),d&&d.c(),l=b(),m&&m.c(),c=b(),_&&_.c(),h=b(),y&&y.c(),st(r.src,o=$_)||g(r,"src",o),g(r,"alt","propiedad"),g(r,"class","imgTitle svelte-nygjwm"),g(e,"class","container")},m(v,E){k(v,e,E),u(e,n),u(n,s),u(n,i),u(n,r),u(e,a),d&&d.m(e,null),u(e,l),m&&m.m(e,null),u(e,c),_&&_.m(e,null),u(e,h),y&&y.m(e,null),f=!0},p(v,[E]){v[6]==="start"?d?(d.p(v,E),E&64&&q(d,1)):(d=Vd(v),d.c(),q(d,1),d.m(e,l)):d&&(bt(),x(d,1,1,()=>{d=null}),wt()),v[6]==="propSelect"?m?(m.p(v,E),E&64&&q(m,1)):(m=Yd(v),m.c(),q(m,1),m.m(e,c)):m&&(bt(),x(m,1,1,()=>{m=null}),wt()),v[6]==="propEditing"?_?(_.p(v,E),E&64&&q(_,1)):(_=Xd(v),_.c(),q(_,1),_.m(e,h)):_&&(bt(),x(_,1,1,()=>{_=null}),wt()),v[6]==="propAdding"?y?E&64&&q(y,1):(y=Jd(),y.c(),q(y,1),y.m(e,null)):y&&(bt(),x(y,1,1,()=>{y=null}),wt())},i(v){f||(q(d),q(m),q(_),q(y),f=!0)},o(v){x(d),x(m),x(_),x(y),f=!1},d(v){v&&w(e),d&&d.d(),m&&m.d(),_&&_.d(),y&&y.d()}}}let ol=20;function pS(t){t.sort((e,n)=>new Date(e.createdAt)<new Date(n.createdAt)?1:new Date(e.createdAt)>new Date(n.createdAt)?-1:0)}function mS(t,e,n){let s,i,r,o,a,l;Pe(t,je,P=>n(6,a=P)),Pe(t,We,P=>n(7,l=P));let c,h=[],f;we(je,a="start",a);let d=1;const m=P=>{n(1,d=P)},_=Ca(Yt(lt,"properties"),P=>{n(0,h=P.docs.map(Z=>({...Z.data(),id:Z.id}))),pS(h)},P=>{console.log(P)});wr(_);function y(P){console.log(P),we(We,l=P,l),we(je,a="propSelect",a)}function v(){we(je,a="propAdding",a)}function E(){return n(0,h=bs.filter(P=>(P.nameProperty+" "+P.colonia).toLowerCase().includes(c.toLowerCase())))}function T(P){c=P,n(3,c)}const L=P=>y(P),D=()=>m(1),U=()=>m(d-1),W=P=>m(d-P),O=P=>m(d+(P+1)),F=()=>m(d+1),G=()=>m(i);return t.$$.update=()=>{t.$$.dirty&1&&n(13,s=h.length),t.$$.dirty&8192&&n(5,i=Math.ceil(s/ol)),t.$$.dirty&2&&n(2,r=d*ol),t.$$.dirty&4&&n(4,o=r-ol)},[h,d,r,c,o,i,a,l,m,y,v,E,f,s,T,L,D,U,W,O,F,G]}class gS extends Xe{constructor(e){super(),Ye(this,e,mS,dS,Ge,{})}}function _S(t){let e;return{c(){e=p("h1"),e.textContent="Captacion"},m(n,s){k(n,e,s)},p:he,i:he,o:he,d(n){n&&w(e)}}}class vS extends Xe{constructor(e){super(),Ye(this,e,null,_S,Ge,{})}}function xd(t,e,n){const s=t.slice();return s[3]=e[n],s}function yS(t){let e,n=t[3].id+"",s;return{c(){e=p("h3"),s=S(n)},m(i,r){k(i,e,r),u(e,s)},p:he,d(i){i&&w(e)}}}function Zd(t){let e,n=!t[3].selecTP&&yS(t);return{c(){n&&n.c(),e=nn()},m(s,i){n&&n.m(s,i),k(s,e,i)},p(s,i){s[3].selecTP||n.p(s,i)},d(s){n&&n.d(s),s&&w(e)}}}function bS(t){let e,n,s,i,r,o,a,l=qs,c=[];for(let h=0;h<l.length;h+=1)c[h]=Zd(xd(t,l,h));return{c(){e=p("div"),n=p("h1"),n.textContent="Estas en About",s=b();for(let h=0;h<c.length;h+=1)c[h].c();i=b(),r=p("button"),r.textContent="BuscarPropSent",g(e,"class","cont")},m(h,f){k(h,e,f),u(e,n),u(e,s);for(let d=0;d<c.length;d+=1)c[d].m(e,null);k(h,i,f),k(h,r,f),o||(a=j(r,"click",t[0]),o=!0)},p(h,[f]){if(f&0){l=qs;let d;for(d=0;d<l.length;d+=1){const m=xd(h,l,d);c[d]?c[d].p(m,f):(c[d]=Zd(m),c[d].c(),c[d].m(e,null))}for(;d<c.length;d+=1)c[d].d(1);c.length=l.length}},i:he,o:he,d(h){h&&w(e),Fe(c,h),h&&w(i),h&&w(r),o=!1,a()}}}let wS="EB-";function kS(t){let e=[];function n(){e=Fs.filter(s=>{s.comment.includes(wS),console.log(e)})}return[n]}class ES extends Xe{constructor(e){super(),Ye(this,e,kS,bS,Ge,{})}}function TS(t){let e,n,s,i;return{c(){e=p("div"),n=p("div"),s=S(t[0]),g(n,"id","snackbar"),g(n,"class",i=_u(t[1]?"animation-in":"not-show")+" svelte-1e3w4r3")},m(r,o){k(r,e,o),u(e,n),u(n,s)},p(r,[o]){o&1&&ie(s,r[0]),o&2&&i!==(i=_u(r[1]?"animation-in":"not-show")+" svelte-1e3w4r3")&&g(n,"class",i)},i:he,o:he,d(r){r&&w(e)}}}function IS(t,e,n){let{message:s=""}=e,{show:i=!1}=e;return t.$$set=r=>{"message"in r&&n(0,s=r.message),"show"in r&&n(1,i=r.show)},[s,i]}class SS extends Xe{constructor(e){super(),Ye(this,e,IS,TS,Ge,{message:0,show:1})}}function CS(t){let e;return{c(){e=S("Registrarse")},m(n,s){k(n,e,s)},d(n){n&&w(e)}}}function AS(t){let e,n,s,i,r,o,a,l,c,h,f,d,m,_,y,v,E,T,L,D,U,W,O,F,G,P,Z,H,Q,N,K;return n=new SS({props:{message:t[0],show:t[1]}}),H=new un({props:{to:"/register",$$slots:{default:[CS]},$$scope:{ctx:t}}}),{c(){e=p("div"),ge(n.$$.fragment),s=b(),i=p("br"),r=p("br"),o=p("br"),a=b(),l=p("div"),c=p("h1"),c.textContent="Inicia sesi\xF3n en tu cuenta",h=b(),f=p("div"),d=p("input"),m=b(),_=p("div"),y=p("input"),v=b(),E=p("br"),T=b(),L=p("div"),D=p("button"),D.textContent="Iniciar sesi\xF3n",U=b(),W=p("p"),W.textContent="O tambi\xE9n",O=b(),F=p("br"),G=b(),P=p("p"),Z=S("\xBFA\xFAn no tienes cuenta? "),ge(H.$$.fragment),g(c,"class","text-center text-login svelte-ftg4em"),g(d,"name","email"),g(d,"type","text"),g(d,"class","input-form svelte-ftg4em"),g(d,"placeholder","Correo"),g(f,"class","center svelte-ftg4em"),g(y,"name","password"),g(y,"type","password"),g(y,"class","input-form svelte-ftg4em"),g(y,"placeholder","Contrase\xF1a"),g(_,"class","center svelte-ftg4em"),g(D,"class","button-signup fondo-color-signup svelte-ftg4em"),g(L,"class","center svelte-ftg4em"),g(W,"class","text-center svelte-ftg4em"),g(P,"class","text-center svelte-ftg4em"),g(l,"class","form-signin svelte-ftg4em")},m(B,ue){k(B,e,ue),fe(n,e,null),u(e,s),u(e,i),u(e,r),u(e,o),u(e,a),u(e,l),u(l,c),u(l,h),u(l,f),u(f,d),u(l,m),u(l,_),u(_,y),u(l,v),u(l,E),u(l,T),u(l,L),u(L,D),u(l,U),u(l,W),u(l,O),u(l,F),u(l,G),u(l,P),u(P,Z),fe(H,P,null),Q=!0,N||(K=[j(d,"input",t[4]),j(y,"input",t[5]),j(D,"click",t[3])],N=!0)},p(B,[ue]){const ee={};ue&1&&(ee.message=B[0]),ue&2&&(ee.show=B[1]),n.$set(ee);const le={};ue&512&&(le.$$scope={dirty:ue,ctx:B}),H.$set(le)},i(B){Q||(q(n.$$.fragment,B),q(H.$$.fragment,B),Q=!0)},o(B){x(n.$$.fragment,B),x(H.$$.fragment,B),Q=!1},d(B){B&&w(e),de(n),de(H),N=!1,xe(K)}}}function DS(t,e,n){const s=Zs();let i={email:"",password:""},r="",o=!1;const a=d=>{n(0,r=d),n(1,o=!0),setTimeout(()=>{n(1,o=!1)},2800)},l=d=>{i={...i,[d.target.name]:d.target.value}};return[r,o,l,async()=>{try{await SE(L_,i.email,i.password),s("/")}catch(d){d.message==="Firebase: Error (auth/wrong-password)."&&a("Contrase\xF1a incorrecta")}},d=>l(d),d=>l(d)]}class PS extends Xe{constructor(e){super(),Ye(this,e,DS,AS,Ge,{})}}class RS extends Xe{constructor(e){super(),Ye(this,e,null,null,Ge,{})}}function NS(t){let e;return{c(){e=S("Home")},m(n,s){k(n,e,s)},d(n){n&&w(e)}}}function OS(t){let e;return{c(){e=S("Contactos")},m(n,s){k(n,e,s)},d(n){n&&w(e)}}}function LS(t){let e;return{c(){e=S("Propiedades")},m(n,s){k(n,e,s)},d(n){n&&w(e)}}}function MS(t){let e;return{c(){e=S("Agenda")},m(n,s){k(n,e,s)},d(n){n&&w(e)}}}function $S(t){let e;return{c(){e=S("LogOut")},m(n,s){k(n,e,s)},d(n){n&&w(e)}}}function US(t){let e;return{c(){e=S("About")},m(n,s){k(n,e,s)},d(n){n&&w(e)}}}function FS(t){let e;return{c(){e=S("Registro")},m(n,s){k(n,e,s)},d(n){n&&w(e)}}}function BS(t){let e;return{c(){e=S("Login")},m(n,s){k(n,e,s)},d(n){n&&w(e)}}}function VS(t){let e,n;return e=new wI({}),{c(){ge(e.$$.fragment)},m(s,i){fe(e,s,i),n=!0},i(s){n||(q(e.$$.fragment,s),n=!0)},o(s){x(e.$$.fragment,s),n=!1},d(s){de(e,s)}}}function jS(t){let e,n;return e=new ZI({}),{c(){ge(e.$$.fragment)},m(s,i){fe(e,s,i),n=!0},i(s){n||(q(e.$$.fragment,s),n=!0)},o(s){x(e.$$.fragment,s),n=!1},d(s){de(e,s)}}}function qS(t){let e,n;return e=new gS({}),{c(){ge(e.$$.fragment)},m(s,i){fe(e,s,i),n=!0},i(s){n||(q(e.$$.fragment,s),n=!0)},o(s){x(e.$$.fragment,s),n=!1},d(s){de(e,s)}}}function HS(t){let e,n;return e=new vS({}),{c(){ge(e.$$.fragment)},m(s,i){fe(e,s,i),n=!0},i(s){n||(q(e.$$.fragment,s),n=!0)},o(s){x(e.$$.fragment,s),n=!1},d(s){de(e,s)}}}function zS(t){let e,n;return e=new fI({}),{c(){ge(e.$$.fragment)},m(s,i){fe(e,s,i),n=!0},i(s){n||(q(e.$$.fragment,s),n=!0)},o(s){x(e.$$.fragment,s),n=!1},d(s){de(e,s)}}}function KS(t){let e,n;return e=new pI({}),{c(){ge(e.$$.fragment)},m(s,i){fe(e,s,i),n=!0},i(s){n||(q(e.$$.fragment,s),n=!0)},o(s){x(e.$$.fragment,s),n=!1},d(s){de(e,s)}}}function GS(t){let e,n;return e=new ES({}),{c(){ge(e.$$.fragment)},m(s,i){fe(e,s,i),n=!0},i(s){n||(q(e.$$.fragment,s),n=!0)},o(s){x(e.$$.fragment,s),n=!1},d(s){de(e,s)}}}function WS(t){let e,n;return e=new RS({}),{c(){ge(e.$$.fragment)},m(s,i){fe(e,s,i),n=!0},i(s){n||(q(e.$$.fragment,s),n=!0)},o(s){x(e.$$.fragment,s),n=!1},d(s){de(e,s)}}}function QS(t){let e,n;return e=new PS({}),{c(){ge(e.$$.fragment)},m(s,i){fe(e,s,i),n=!0},i(s){n||(q(e.$$.fragment,s),n=!0)},o(s){x(e.$$.fragment,s),n=!1},d(s){de(e,s)}}}function YS(t){let e,n;return e=new oI({}),{c(){ge(e.$$.fragment)},m(s,i){fe(e,s,i),n=!0},i(s){n||(q(e.$$.fragment,s),n=!0)},o(s){x(e.$$.fragment,s),n=!1},d(s){de(e,s)}}}function XS(t){let e,n,s,i,r,o,a,l,c,h,f,d,m,_,y,v,E,T,L,D,U,W,O,F,G,P,Z,H,Q,N,K,B,ue,ee,le,re,$,C,M,J,V,Y,Ae,R,ce,be,He;return d=new un({props:{to:"/",$$slots:{default:[NS]},$$scope:{ctx:t}}}),_=new un({props:{to:"contactos",$$slots:{default:[OS]},$$scope:{ctx:t}}}),v=new un({props:{to:"propiedades",$$slots:{default:[LS]},$$scope:{ctx:t}}}),T=new un({props:{to:"agenda",$$slots:{default:[MS]},$$scope:{ctx:t}}}),D=new un({props:{to:"/about",$$slots:{default:[$S]},$$scope:{ctx:t}}}),D.$on("click",xS),W=new un({props:{to:"about",$$slots:{default:[US]},$$scope:{ctx:t}}}),F=new un({props:{to:"register",$$slots:{default:[FS]},$$scope:{ctx:t}}}),P=new un({props:{to:"login",$$slots:{default:[BS]},$$scope:{ctx:t}}}),H=new Pn({props:{path:"/",$$slots:{default:[VS]},$$scope:{ctx:t}}}),N=new Pn({props:{path:"/contactos",$$slots:{default:[jS]},$$scope:{ctx:t}}}),B=new Pn({props:{path:"propiedades",$$slots:{default:[qS]},$$scope:{ctx:t}}}),ee=new Pn({props:{path:"captacion",$$slots:{default:[HS]},$$scope:{ctx:t}}}),re=new Pn({props:{path:"agenda",$$slots:{default:[zS]},$$scope:{ctx:t}}}),C=new Pn({props:{path:"sinergias",$$slots:{default:[KS]},$$scope:{ctx:t}}}),J=new Pn({props:{path:"about",$$slots:{default:[GS]},$$scope:{ctx:t}}}),Y=new Pn({props:{path:"logout",$$slots:{default:[WS]},$$scope:{ctx:t}}}),R=new Pn({props:{path:"login",$$slots:{default:[QS]},$$scope:{ctx:t}}}),be=new Pn({props:{path:"register",$$slots:{default:[YS]},$$scope:{ctx:t}}}),{c(){e=p("div"),n=p("img"),i=b(),r=p("label"),o=p("img"),l=b(),c=p("input"),h=b(),f=p("div"),ge(d.$$.fragment),m=b(),ge(_.$$.fragment),y=b(),ge(v.$$.fragment),E=b(),ge(T.$$.fragment),L=b(),ge(D.$$.fragment),U=b(),ge(W.$$.fragment),O=b(),ge(F.$$.fragment),G=b(),ge(P.$$.fragment),Z=b(),ge(H.$$.fragment),Q=b(),ge(N.$$.fragment),K=b(),ge(B.$$.fragment),ue=b(),ge(ee.$$.fragment),le=b(),ge(re.$$.fragment),$=b(),ge(C.$$.fragment),M=b(),ge(J.$$.fragment),V=b(),ge(Y.$$.fragment),Ae=b(),ge(R.$$.fragment),ce=b(),ge(be.$$.fragment),st(n.src,s=Op)||g(n,"src",s),g(n,"alt","MatchHome"),g(n,"class","nav__logo svelte-1viw6tr"),st(o.src,a=hy)||g(o,"src",a),g(o,"class","nav__img svelte-1viw6tr"),g(o,"alt","menu"),g(r,"class","nav__label svelte-1viw6tr"),g(r,"for","menu"),g(c,"type","checkbox"),g(c,"id","menu"),g(c,"class","nav__input svelte-1viw6tr"),g(f,"class","nav__menu svelte-1viw6tr"),g(e,"class","nav__container svelte-1viw6tr")},m(A,X){k(A,e,X),u(e,n),u(e,i),u(e,r),u(r,o),u(e,l),u(e,c),u(e,h),u(e,f),fe(d,f,null),u(f,m),fe(_,f,null),u(f,y),fe(v,f,null),u(f,E),fe(T,f,null),u(f,L),fe(D,f,null),u(f,U),fe(W,f,null),u(f,O),fe(F,f,null),u(f,G),fe(P,f,null),k(A,Z,X),fe(H,A,X),k(A,Q,X),fe(N,A,X),k(A,K,X),fe(B,A,X),k(A,ue,X),fe(ee,A,X),k(A,le,X),fe(re,A,X),k(A,$,X),fe(C,A,X),k(A,M,X),fe(J,A,X),k(A,V,X),fe(Y,A,X),k(A,Ae,X),fe(R,A,X),k(A,ce,X),fe(be,A,X),He=!0},p(A,X){const Me={};X&2&&(Me.$$scope={dirty:X,ctx:A}),d.$set(Me);const z={};X&2&&(z.$$scope={dirty:X,ctx:A}),_.$set(z);const pe={};X&2&&(pe.$$scope={dirty:X,ctx:A}),v.$set(pe);const oe={};X&2&&(oe.$$scope={dirty:X,ctx:A}),T.$set(oe);const Je={};X&2&&(Je.$$scope={dirty:X,ctx:A}),D.$set(Je);const yn={};X&2&&(yn.$$scope={dirty:X,ctx:A}),W.$set(yn);const Ct={};X&2&&(Ct.$$scope={dirty:X,ctx:A}),F.$set(Ct);const At={};X&2&&(At.$$scope={dirty:X,ctx:A}),P.$set(At);const sn={};X&2&&(sn.$$scope={dirty:X,ctx:A}),H.$set(sn);const Zt={};X&2&&(Zt.$$scope={dirty:X,ctx:A}),N.$set(Zt);const $t={};X&2&&($t.$$scope={dirty:X,ctx:A}),B.$set($t);const Ht={};X&2&&(Ht.$$scope={dirty:X,ctx:A}),ee.$set(Ht);const ut={};X&2&&(ut.$$scope={dirty:X,ctx:A}),re.$set(ut);const pn={};X&2&&(pn.$$scope={dirty:X,ctx:A}),C.$set(pn);const ot={};X&2&&(ot.$$scope={dirty:X,ctx:A}),J.$set(ot);const ht={};X&2&&(ht.$$scope={dirty:X,ctx:A}),Y.$set(ht);const rn={};X&2&&(rn.$$scope={dirty:X,ctx:A}),R.$set(rn);const ft={};X&2&&(ft.$$scope={dirty:X,ctx:A}),be.$set(ft)},i(A){He||(q(d.$$.fragment,A),q(_.$$.fragment,A),q(v.$$.fragment,A),q(T.$$.fragment,A),q(D.$$.fragment,A),q(W.$$.fragment,A),q(F.$$.fragment,A),q(P.$$.fragment,A),q(H.$$.fragment,A),q(N.$$.fragment,A),q(B.$$.fragment,A),q(ee.$$.fragment,A),q(re.$$.fragment,A),q(C.$$.fragment,A),q(J.$$.fragment,A),q(Y.$$.fragment,A),q(R.$$.fragment,A),q(be.$$.fragment,A),He=!0)},o(A){x(d.$$.fragment,A),x(_.$$.fragment,A),x(v.$$.fragment,A),x(T.$$.fragment,A),x(D.$$.fragment,A),x(W.$$.fragment,A),x(F.$$.fragment,A),x(P.$$.fragment,A),x(H.$$.fragment,A),x(N.$$.fragment,A),x(B.$$.fragment,A),x(ee.$$.fragment,A),x(re.$$.fragment,A),x(C.$$.fragment,A),x(J.$$.fragment,A),x(Y.$$.fragment,A),x(R.$$.fragment,A),x(be.$$.fragment,A),He=!1},d(A){A&&w(e),de(d),de(_),de(v),de(T),de(D),de(W),de(F),de(P),A&&w(Z),de(H,A),A&&w(Q),de(N,A),A&&w(K),de(B,A),A&&w(ue),de(ee,A),A&&w(le),de(re,A),A&&w($),de(C,A),A&&w(M),de(J,A),A&&w(V),de(Y,A),A&&w(Ae),de(R,A),A&&w(ce),de(be,A)}}}function JS(t){let e,n,s;return n=new ec({props:{$$slots:{default:[XS]},$$scope:{ctx:t}}}),{c(){e=p("nav"),ge(n.$$.fragment),g(e,"class","nav svelte-1viw6tr")},m(i,r){k(i,e,r),fe(n,e,null),s=!0},p(i,[r]){const o={};r&2&&(o.$$scope={dirty:r,ctx:i}),n.$set(o)},i(i){s||(q(n.$$.fragment,i),s=!0)},o(i){x(n.$$.fragment,i),s=!1},d(i){i&&w(e),de(n)}}}async function xS(){}function ZS(t){return nI.subscribe(e=>{}),[]}class eC extends Xe{constructor(e){super(),Ye(this,e,ZS,JS,Ge,{})}}function ep(t){let e,n,s,i,r,o,a;return{c(){e=p("div"),n=p("h1"),n.textContent="Bienvendo a",s=b(),i=p("img"),o=b(),a=p("div"),a.innerHTML=`<p class="desc__intro svelte-1kx2964">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod aut aliquam, expedita perferendis consequatur modi omnis! Nostrum iste necessitatibus quisquam numquam, aliquam ipsum. Sit, similique quis. Fuga vitae possimus quisquam quam. Unde accusantium neque veniam reprehenderit, laborum, magni ut quasi asperiores a amet fugiat non, sapiente obcaecati voluptas ab! Nostrum!</p> 
        <p><strong>www.matchhome.net</strong></p>`,g(n,"class","title svelte-1kx2964"),st(i.src,r=Op)||g(i,"src",r),g(i,"alt","MatchHome"),g(i,"class","svelte-1kx2964"),g(a,"class",""),g(e,"class","intro svelte-1kx2964")},m(l,c){k(l,e,c),u(e,n),u(e,s),u(e,i),u(e,o),u(e,a)},p:he,d(l){l&&w(e)}}}function tC(t){let e,n,s,i,r;n=new eC({});let o=t[0]&&ep();return{c(){e=p("nav"),ge(n.$$.fragment),s=b(),i=p("body"),o&&o.c(),g(e,"class","navBar")},m(a,l){k(a,e,l),fe(n,e,null),k(a,s,l),k(a,i,l),o&&o.m(i,null),r=!0},p(a,[l]){a[0]?o?o.p(a,l):(o=ep(),o.c(),o.m(i,null)):o&&(o.d(1),o=null)},i(a){r||(q(n.$$.fragment,a),r=!0)},o(a){x(n.$$.fragment,a),r=!1},d(a){a&&w(e),de(n),a&&w(s),a&&w(i),o&&o.d()}}}function nC(t,e,n){let s=!0;return setTimeout(()=>{n(0,s=!1)},1500),[s]}class sC extends Xe{constructor(e){super(),Ye(this,e,nC,tC,Ge,{})}}new sC({target:document.getElementById("app")});
