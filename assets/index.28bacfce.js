(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function ce(){}const Id=t=>t;function Kt(t,e){for(const n in e)t[n]=e[n];return t}function Cd(t){return t()}function ic(){return Object.create(null)}function Je(t){t.forEach(Cd)}function qo(t){return typeof t=="function"}function Ge(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let jr;function fn(t,e){return jr||(jr=document.createElement("a")),jr.href=e,t===jr.href}function h_(t){return Object.keys(t).length===0}function Ml(t,...e){if(t==null)return ce;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function ai(t){let e;return Ml(t,n=>e=n)(),e}function Ve(t,e,n){t.$$.on_destroy.push(Ml(e,n))}function Ul(t,e,n,s){if(t){const i=Sd(t,e,n,s);return t[0](i)}}function Sd(t,e,n,s){return t[1]&&s?Kt(n.ctx.slice(),t[1](s(e))):n.ctx}function Fl(t,e,n,s){if(t[2]&&s){const i=t[2](s(n));if(e.dirty===void 0)return i;if(typeof i=="object"){const r=[],o=Math.max(e.dirty.length,i.length);for(let a=0;a<o;a+=1)r[a]=e.dirty[a]|i[a];return r}return e.dirty|i}return e.dirty}function Vl(t,e,n,s,i,r){if(i){const o=Sd(e,n,s,r);t.p(o,i)}}function Bl(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let s=0;s<n;s++)e[s]=-1;return e}return-1}function ao(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function lo(t,e){const n={};e=new Set(e);for(const s in t)!e.has(s)&&s[0]!=="$"&&(n[s]=t[s]);return n}function rc(t){return t==null?"":t}function gt(t,e,n){return t.set(n),e}const Ad=typeof window<"u";let f_=Ad?()=>window.performance.now():()=>Date.now(),jl=Ad?t=>requestAnimationFrame(t):ce;const ni=new Set;function Dd(t){ni.forEach(e=>{e.c(t)||(ni.delete(e),e.f())}),ni.size!==0&&jl(Dd)}function d_(t){let e;return ni.size===0&&jl(Dd),{promise:new Promise(n=>{ni.add(e={c:t,f:n})}),abort(){ni.delete(e)}}}function c(t,e){t.appendChild(e)}function Rd(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function p_(t){const e=p("style");return m_(Rd(t),e),e.sheet}function m_(t,e){return c(t.head||t,e),e.sheet}function k(t,e,n){t.insertBefore(e,n||null)}function w(t){t.parentNode.removeChild(t)}function Ke(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function p(t){return document.createElement(t)}function S(t){return document.createTextNode(t)}function y(){return S(" ")}function _n(){return S("")}function q(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function In(t){return function(e){return e.preventDefault(),t.call(this,e)}}function m(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Fn(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const s in e)e[s]==null?t.removeAttribute(s):s==="style"?t.style.cssText=e[s]:s==="__value"?t.value=t[s]=e[s]:n[s]&&n[s].set?t[s]=e[s]:m(t,s,e[s])}function Jt(t,e,n){const s=new Set;for(let i=0;i<t.length;i+=1)t[i].checked&&s.add(t[i].__value);return n||s.delete(e),Array.from(s)}function ps(t){return t===""?null:+t}function g_(t){return Array.from(t.childNodes)}function re(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function de(t,e){t.value=e==null?"":e}function Ue(t,e){for(let n=0;n<t.options.length;n+=1){const s=t.options[n];if(s.__value===e){s.selected=!0;return}}t.selectedIndex=-1}function Xt(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}function li(t,e,n){t.classList[n?"add":"remove"](e)}function Pd(t,e,{bubbles:n=!1,cancelable:s=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,s,e),i}function oc(t,e){return new t(e)}const uo=new Map;let co=0;function __(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function v_(t,e){const n={stylesheet:p_(e),rules:{}};return uo.set(t,n),n}function ac(t,e,n,s,i,r,o,a=0){const l=16.666/s;let u=`{
`;for(let b=0;b<=1;b+=l){const E=e+(n-e)*r(b);u+=b*100+`%{${o(E,1-E)}}
`}const h=u+`100% {${o(n,1-n)}}
}`,f=`__svelte_${__(h)}_${a}`,d=Rd(t),{stylesheet:g,rules:_}=uo.get(d)||v_(d,t);_[f]||(_[f]=!0,g.insertRule(`@keyframes ${f} ${h}`,g.cssRules.length));const v=t.style.animation||"";return t.style.animation=`${v?`${v}, `:""}${f} ${s}ms linear ${i}ms 1 both`,co+=1,f}function y_(t,e){const n=(t.style.animation||"").split(", "),s=n.filter(e?r=>r.indexOf(e)<0:r=>r.indexOf("__svelte")===-1),i=n.length-s.length;i&&(t.style.animation=s.join(", "),co-=i,co||b_())}function b_(){jl(()=>{co||(uo.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&w(e)}),uo.clear())})}let zi;function Ui(t){zi=t}function cr(){if(!zi)throw new Error("Function called outside component initialization");return zi}function w_(t){cr().$$.on_mount.push(t)}function k_(t){cr().$$.on_destroy.push(t)}function Nd(){const t=cr();return(e,n,{cancelable:s=!1}={})=>{const i=t.$$.callbacks[e];if(i){const r=Pd(e,n,{cancelable:s});return i.slice().forEach(o=>{o.call(t,r)}),!r.defaultPrevented}return!0}}function Fi(t,e){return cr().$$.context.set(t,e),e}function bs(t){return cr().$$.context.get(t)}function E_(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(s=>s.call(this,e))}const Ri=[],Yn=[],Xr=[],el=[],Od=Promise.resolve();let tl=!1;function $d(){tl||(tl=!0,Od.then(Ld))}function T_(){return $d(),Od}function tt(t){Xr.push(t)}function Ms(t){el.push(t)}const Sa=new Set;let qr=0;function Ld(){const t=zi;do{for(;qr<Ri.length;){const e=Ri[qr];qr++,Ui(e),I_(e.$$)}for(Ui(null),Ri.length=0,qr=0;Yn.length;)Yn.pop()();for(let e=0;e<Xr.length;e+=1){const n=Xr[e];Sa.has(n)||(Sa.add(n),n())}Xr.length=0}while(Ri.length);for(;el.length;)el.pop()();tl=!1,Sa.clear(),Ui(t)}function I_(t){if(t.fragment!==null){t.update(),Je(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(tt)}}let Ai;function C_(){return Ai||(Ai=Promise.resolve(),Ai.then(()=>{Ai=null})),Ai}function Aa(t,e,n){t.dispatchEvent(Pd(`${e?"intro":"outro"}${n}`))}const Jr=new Set;let zn;function Ot(){zn={r:0,c:[],p:zn}}function $t(){zn.r||Je(zn.c),zn=zn.p}function j(t,e){t&&t.i&&(Jr.delete(t),t.i(e))}function W(t,e,n,s){if(t&&t.o){if(Jr.has(t))return;Jr.add(t),zn.c.push(()=>{Jr.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}const S_={duration:0};function Pn(t,e,n,s){let i=e(t,n),r=s?0:1,o=null,a=null,l=null;function u(){l&&y_(t,l)}function h(d,g){const _=d.b-r;return g*=Math.abs(_),{a:r,b:d.b,d:_,duration:g,start:d.start,end:d.start+g,group:d.group}}function f(d){const{delay:g=0,duration:_=300,easing:v=Id,tick:b=ce,css:E}=i||S_,C={start:f_()+g,b:d};d||(C.group=zn,zn.r+=1),o||a?a=C:(E&&(u(),l=ac(t,r,d,_,g,v,E)),d&&b(0,1),o=h(C,_),tt(()=>Aa(t,d,"start")),d_(O=>{if(a&&O>a.start&&(o=h(a,_),a=null,Aa(t,o.b,"start"),E&&(u(),l=ac(t,r,o.b,o.duration,0,v,i.css))),o){if(O>=o.end)b(r=o.b,1-r),Aa(t,o.b,"end"),a||(o.b?u():--o.group.r||Je(o.group.c)),o=null;else if(O>=o.start){const A=O-o.start;r=o.a+o.d*v(A/o.duration),b(r,1-r)}}return!!(o||a)}))}return{run(d){qo(i)?C_().then(()=>{i=i(),f(d)}):f(d)},end(){u(),o=a=null}}}function Cn(t,e){const n={},s={},i={$$scope:1};let r=t.length;for(;r--;){const o=t[r],a=e[r];if(a){for(const l in o)l in a||(s[l]=1);for(const l in a)i[l]||(n[l]=a[l],i[l]=1);t[r]=a}else for(const l in o)i[l]=1}for(const o in s)o in n||(n[o]=void 0);return n}function Xn(t){return typeof t=="object"&&t!==null?t:{}}function Us(t,e,n){const s=t.$$.props[e];s!==void 0&&(t.$$.bound[s]=n,n(t.$$.ctx[s]))}function le(t){t&&t.c()}function oe(t,e,n,s){const{fragment:i,after_update:r}=t.$$;i&&i.m(e,n),s||tt(()=>{const o=t.$$.on_mount.map(Cd).filter(qo);t.$$.on_destroy?t.$$.on_destroy.push(...o):Je(o),t.$$.on_mount=[]}),r.forEach(tt)}function ae(t,e){const n=t.$$;n.fragment!==null&&(Je(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function A_(t,e){t.$$.dirty[0]===-1&&(Ri.push(t),$d(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function xe(t,e,n,s,i,r,o,a=[-1]){const l=zi;Ui(t);const u=t.$$={fragment:null,ctx:[],props:r,update:ce,not_equal:i,bound:ic(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:ic(),dirty:a,skip_bound:!1,root:e.target||l.$$.root};o&&o(u.root);let h=!1;if(u.ctx=n?n(t,e.props||{},(f,d,...g)=>{const _=g.length?g[0]:d;return u.ctx&&i(u.ctx[f],u.ctx[f]=_)&&(!u.skip_bound&&u.bound[f]&&u.bound[f](_),h&&A_(t,f)),d}):[],u.update(),h=!0,Je(u.before_update),u.fragment=s?s(u.ctx):!1,e.target){if(e.hydrate){const f=g_(e.target);u.fragment&&u.fragment.l(f),f.forEach(w)}else u.fragment&&u.fragment.c();e.intro&&j(t.$$.fragment),oe(t,e.target,e.anchor,e.customElement),Ld()}Ui(l)}class Ye{$destroy(){ae(this,1),this.$destroy=ce}$on(e,n){if(!qo(n))return ce;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const i=s.indexOf(n);i!==-1&&s.splice(i,1)}}$set(e){this.$$set&&!h_(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const lc=t=>typeof t>"u",Md=t=>typeof t=="function",Ud=t=>typeof t=="number";function D_(t){return!t.defaultPrevented&&t.button===0&&!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Fd(){let t=0;return()=>t++}function R_(){return Math.random().toString(36).substring(2)}const ws=typeof window>"u";function Vd(t,e,n){return t.addEventListener(e,n),()=>t.removeEventListener(e,n)}const nl=(t,e)=>t?{}:{style:e},Js=t=>({"aria-hidden":"true",...nl(t,"display:none;")}),Ys=[];function P_(t,e){return{subscribe:tn(t,e).subscribe}}function tn(t,e=ce){let n;const s=new Set;function i(a){if(Ge(t,a)&&(t=a,n)){const l=!Ys.length;for(const u of s)u[1](),Ys.push(u,t);if(l){for(let u=0;u<Ys.length;u+=2)Ys[u][0](Ys[u+1]);Ys.length=0}}}function r(a){i(a(t))}function o(a,l=ce){const u=[a,l];return s.add(u),s.size===1&&(n=e(i)||ce),a(t),()=>{s.delete(u),s.size===0&&(n(),n=null)}}return{set:i,update:r,subscribe:o}}function N_(t,e,n){const s=!Array.isArray(t),i=s?[t]:t,r=e.length<2;return P_(n,o=>{let a=!1;const l=[];let u=0,h=ce;const f=()=>{if(u)return;h();const g=e(s?l[0]:l,o);r?o(g):h=qo(g)?g:ce},d=i.map((g,_)=>Ml(g,v=>{l[_]=v,u&=~(1<<_),a&&f()},()=>{u|=1<<_}));return a=!0,f(),function(){Je(d),h()}})}const hr=t=>`@@svnav-ctx__${t}`,sl=hr("LOCATION"),ui=hr("ROUTER"),Bd=hr("ROUTE"),O_=hr("ROUTE_PARAMS"),$_=hr("FOCUS_ELEM"),jd=/^:(.+)/,Pi=(t,e,n)=>t.substr(e,n),il=(t,e)=>Pi(t,0,e.length)===e,L_=t=>t==="",M_=t=>jd.test(t),qd=t=>t[0]==="*",U_=t=>t.replace(/\*.*$/,""),Hd=t=>t.replace(/(^\/+|\/+$)/g,"");function qn(t,e=!1){const n=Hd(t).split("/");return e?n.filter(Boolean):n}const Da=(t,e)=>t+(e?`?${e}`:""),ql=t=>`/${Hd(t)}`;function fr(...t){const e=s=>qn(s,!0).join("/"),n=t.map(e).join("/");return ql(n)}const Hl=1,Ho=2,Fs=3,F_=4,Kd=5,V_=6,zd=7,B_=8,j_=9,Gd=10,Wd=11,q_={[Hl]:"Link",[Ho]:"Route",[Fs]:"Router",[F_]:"useFocus",[Kd]:"useLocation",[V_]:"useMatch",[zd]:"useNavigate",[B_]:"useParams",[j_]:"useResolvable",[Gd]:"useResolve",[Wd]:"navigate"},Kl=t=>q_[t];function H_(t,e){let n;return t===Ho?n=e.path?`path="${e.path}"`:"default":t===Hl?n=`to="${e.to}"`:t===Fs&&(n=`basepath="${e.basepath||""}"`),`<${Kl(t)} ${n||""} />`}function K_(t,e,n,s){const i=n&&H_(s||t,n),r=i?`

Occurred in: ${i}`:"",o=Kl(t),a=Md(e)?e(o):e;return`<${o}> ${a}${r}`}const Qd=t=>(...e)=>t(K_(...e)),xd=Qd(t=>{throw new Error(t)}),ho=Qd(console.warn),uc=4,z_=3,G_=2,W_=1,Q_=1;function x_(t,e){const n=t.default?0:qn(t.fullPath).reduce((s,i)=>{let r=s;return r+=uc,L_(i)?r+=Q_:M_(i)?r+=G_:qd(i)?r-=uc+W_:r+=z_,r},0);return{route:t,score:n,index:e}}function Y_(t){return t.map(x_).sort((e,n)=>e.score<n.score?1:e.score>n.score?-1:e.index-n.index)}function Yd(t,e){let n,s;const[i]=e.split("?"),r=qn(i),o=r[0]==="",a=Y_(t);for(let l=0,u=a.length;l<u;l++){const{route:h}=a[l];let f=!1;const d={},g=E=>({...h,params:d,uri:E});if(h.default){s=g(e);continue}const _=qn(h.fullPath),v=Math.max(r.length,_.length);let b=0;for(;b<v;b++){const E=_[b],C=r[b];if(!lc(E)&&qd(E)){const A=E==="*"?"*":E.slice(1);d[A]=r.slice(b).map(decodeURIComponent).join("/");break}if(lc(C)){f=!0;break}const O=jd.exec(E);if(O&&!o){const A=decodeURIComponent(C);d[O[1]]=A}else if(E!==C){f=!0;break}}if(!f){n=g(fr(...r.slice(0,b)));break}}return n||s||null}function Xd(t,e){return Yd([t],e)}function X_(t,e){if(il(t,"/"))return t;const[n,s]=t.split("?"),[i]=e.split("?"),r=qn(n),o=qn(i);if(r[0]==="")return Da(i,s);if(!il(r[0],".")){const u=o.concat(r).join("/");return Da((i==="/"?"":"/")+u,s)}const a=o.concat(r),l=[];return a.forEach(u=>{u===".."?l.pop():u!=="."&&l.push(u)}),Da(`/${l.join("/")}`,s)}function cc(t,e){const{pathname:n,hash:s="",search:i="",state:r}=t,o=qn(e,!0),a=qn(n,!0);for(;o.length;)o[0]!==a[0]&&xd(Fs,`Invalid state: All locations must begin with the basepath "${e}", found "${n}"`),o.shift(),a.shift();return{pathname:fr(...a),hash:s,search:i,state:r}}const hc=t=>t.length===1?"":t,zl=t=>{const e=t.indexOf("?"),n=t.indexOf("#"),s=e!==-1,i=n!==-1,r=i?hc(Pi(t,n)):"",o=i?Pi(t,0,n):t,a=s?hc(Pi(o,e)):"";return{pathname:(s?Pi(o,0,e):o)||"/",search:a,hash:r}},J_=t=>{const{pathname:e,search:n,hash:s}=t;return e+n+s};function Z_(t,e,n){return fr(n,X_(t,e))}function ev(t,e){const n=ql(U_(t)),s=qn(n,!0),i=qn(e,!0).slice(0,s.length),r=Xd({fullPath:n},fr(...i));return r&&r.uri}const Ra="POP",tv="PUSH",nv="REPLACE";function Pa(t){return{...t.location,pathname:encodeURI(decodeURI(t.location.pathname)),state:t.history.state,_key:t.history.state&&t.history.state._key||"initial"}}function sv(t){let e=[],n=Pa(t),s=Ra;const i=(r=e)=>r.forEach(o=>o({location:n,action:s}));return{get location(){return n},listen(r){e.push(r);const o=()=>{n=Pa(t),s=Ra,i([r])};i([r]);const a=Vd(t,"popstate",o);return()=>{a(),e=e.filter(l=>l!==r)}},navigate(r,o){const{state:a={},replace:l=!1}=o||{};if(s=l?nv:tv,Ud(r))o&&ho(Wd,"Navigation options (state or replace) are not supported, when passing a number as the first argument to navigate. They are ignored."),s=Ra,t.history.go(r);else{const u={...a,_key:R_()};try{t.history[l?"replaceState":"pushState"](u,"",r)}catch{t.location[l?"replace":"assign"](r)}}n=Pa(t),i()}}}function Na(t,e){return{...zl(e),state:t}}function iv(t="/"){let e=0,n=[Na(null,t)];return{get entries(){return n},get location(){return n[e]},addEventListener(){},removeEventListener(){},history:{get state(){return n[e].state},pushState(s,i,r){e++,n=n.slice(0,e),n.push(Na(s,r))},replaceState(s,i,r){n[e]=Na(s,r)},go(s){const i=e+s;i<0||i>n.length-1||(e=i)}}}}const rv=!!(!ws&&window.document&&window.document.createElement),ov=!ws&&window.location.origin==="null",av=sv(rv&&!ov?window:iv());let Kn=null,Jd=!0;function lv(t,e){const n=document.querySelectorAll("[data-svnav-router]");for(let s=0;s<n.length;s++){const i=n[s],r=Number(i.dataset.svnavRouter);if(r===t)return!0;if(r===e)return!1}return!1}function uv(t){(!Kn||t.level>Kn.level||t.level===Kn.level&&lv(t.routerId,Kn.routerId))&&(Kn=t)}function cv(){Kn=null}function hv(){Jd=!1}function fc(t){if(!t)return!1;const e="tabindex";try{if(!t.hasAttribute(e)){t.setAttribute(e,"-1");let n;n=Vd(t,"blur",()=>{t.removeAttribute(e),n()})}return t.focus(),document.activeElement===t}catch{return!1}}function fv(t,e){return Number(t.dataset.svnavRouteEnd)===e}function dv(t){return/^H[1-6]$/i.test(t.tagName)}function dc(t,e=document){return e.querySelector(t)}function pv(t){let n=dc(`[data-svnav-route-start="${t}"]`).nextElementSibling;for(;!fv(n,t);){if(dv(n))return n;const s=dc("h1,h2,h3,h4,h5,h6",n);if(s)return s;n=n.nextElementSibling}return null}function mv(t){Promise.resolve(ai(t.focusElement)).then(e=>{const n=e||pv(t.id);n||ho(Fs,`Could not find an element to focus. You should always render a header for accessibility reasons, or set a custom focus element via the "useFocus" hook. If you don't want this Route or Router to manage focus, pass "primary={false}" to it.`,t,Ho),!fc(n)&&fc(document.documentElement)})}const gv=(t,e,n)=>(s,i)=>T_().then(()=>{if(!Kn||Jd){hv();return}if(s&&mv(Kn.route),t.announcements&&i){const{path:r,fullPath:o,meta:a,params:l,uri:u}=Kn.route,h=t.createAnnouncement({path:r,fullPath:o,meta:a,params:l,uri:u},ai(n));Promise.resolve(h).then(f=>{e.set(f)})}cv()}),pc="position:fixed;top:-1px;left:0;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;";function _v(t){let e,n,s=[{role:"status"},{"aria-atomic":"true"},{"aria-live":"polite"},{"data-svnav-announcer":""},nl(t[6],pc)],i={};for(let r=0;r<s.length;r+=1)i=Kt(i,s[r]);return{c(){e=p("div"),n=S(t[0]),Fn(e,i)},m(r,o){k(r,e,o),c(e,n)},p(r,o){o[0]&1&&re(n,r[0]),Fn(e,i=Cn(s,[{role:"status"},{"aria-atomic":"true"},{"aria-live":"polite"},{"data-svnav-announcer":""},nl(r[6],pc)]))},d(r){r&&w(e)}}}function vv(t){let e,n,s,i,r,o=[Js(t[6]),{"data-svnav-router":t[3]}],a={};for(let f=0;f<o.length;f+=1)a=Kt(a,o[f]);const l=t[22].default,u=Ul(l,t,t[21],null);let h=t[2]&&t[4]&&t[1].announcements&&_v(t);return{c(){e=p("div"),n=y(),u&&u.c(),s=y(),h&&h.c(),i=_n(),Fn(e,a)},m(f,d){k(f,e,d),k(f,n,d),u&&u.m(f,d),k(f,s,d),h&&h.m(f,d),k(f,i,d),r=!0},p(f,d){Fn(e,a=Cn(o,[Js(f[6]),{"data-svnav-router":f[3]}])),u&&u.p&&(!r||d[0]&2097152)&&Vl(u,l,f,f[21],r?Fl(l,f[21],d,null):Bl(f[21]),null),f[2]&&f[4]&&f[1].announcements&&h.p(f,d)},i(f){r||(j(u,f),r=!0)},o(f){W(u,f),r=!1},d(f){f&&w(e),f&&w(n),u&&u.d(f),f&&w(s),h&&h.d(f),f&&w(i)}}}const yv=Fd(),mc="/";function bv(t,e,n){let s,i,r,o,a,{$$slots:l={},$$scope:u}=e,{basepath:h=mc}=e,{url:f=null}=e,{history:d=av}=e,{primary:g=!0}=e,{a11y:_={}}=e,{disableInlineStyles:v=!1}=e;const b={createAnnouncement:D=>`Navigated to ${D.uri}`,announcements:!0,..._},E=h,C=ql(h),O=bs(sl),A=bs(ui),H=!O,$=yv(),F=g&&!(A&&!A.manageFocus),G=tn("");Ve(t,G,D=>n(0,a=D));const R=A?A.disableInlineStyles:v,L=tn([]);Ve(t,L,D=>n(20,o=D));const V=tn(null);Ve(t,V,D=>n(18,i=D));let U=!1;const te=H?0:A.level+1,x=H?tn((()=>cc(ws?zl(f):d.location,C))()):O;Ve(t,x,D=>n(17,s=D));const K=tn(s);Ve(t,K,D=>n(19,r=D));const se=gv(b,G,x),P=D=>Q=>Q.filter(me=>me.id!==D);function N(D){if(ws){if(U)return;const Q=Xd(D,s.pathname);if(Q)return U=!0,Q}else L.update(Q=>{const me=P(D.id)(Q);return me.push(D),me})}function z(D){L.update(P(D))}return!H&&h!==mc&&ho(Fs,'Only top-level Routers can have a "basepath" prop. It is ignored.',{basepath:h}),H&&(w_(()=>d.listen(Q=>{const me=cc(Q.location,C);K.set(s),x.set(me)})),Fi(sl,x)),Fi(ui,{activeRoute:V,registerRoute:N,unregisterRoute:z,manageFocus:F,level:te,id:$,history:H?d:A.history,basepath:H?C:A.basepath,disableInlineStyles:R}),t.$$set=D=>{"basepath"in D&&n(11,h=D.basepath),"url"in D&&n(12,f=D.url),"history"in D&&n(13,d=D.history),"primary"in D&&n(14,g=D.primary),"a11y"in D&&n(15,_=D.a11y),"disableInlineStyles"in D&&n(16,v=D.disableInlineStyles),"$$scope"in D&&n(21,u=D.$$scope)},t.$$.update=()=>{if(t.$$.dirty[0]&2048&&h!==E&&ho(Fs,'You cannot change the "basepath" prop. It is ignored.'),t.$$.dirty[0]&1179648){const D=Yd(o,s.pathname);V.set(D)}if(t.$$.dirty[0]&655360&&H){const D=!!s.hash,Q=!D&&F,me=!D||s.pathname!==r.pathname;se(Q,me)}t.$$.dirty[0]&262144&&F&&i&&i.primary&&uv({level:te,routerId:$,route:i})},[a,b,H,$,F,G,R,L,V,x,K,h,f,d,g,_,v,s,i,r,o,u,l]}class Gl extends Ye{constructor(e){super(),xe(this,e,bv,vv,Ge,{basepath:11,url:12,history:13,primary:14,a11y:15,disableInlineStyles:16},null,[-1,-1])}}function dr(t,e,n=ui,s=Fs){bs(n)||xd(t,r=>`You cannot use ${r} outside of a ${Kl(s)}.`,e)}const wv=t=>{const{subscribe:e}=bs(t);return{subscribe:e}};function Zd(){return dr(Kd),wv(sl)}function ep(){const{history:t}=bs(ui);return t}function tp(){const t=bs(Bd);return t?N_(t,e=>e.base):tn("/")}function np(){dr(Gd);const t=tp(),{basepath:e}=bs(ui);return s=>Z_(s,ai(t),e)}function vi(){dr(zd);const t=np(),{navigate:e}=ep();return(s,i)=>{const r=Ud(s)?s:t(s);return e(r,i)}}const kv=t=>({params:t&16,location:t&8}),gc=t=>({params:ws?ai(t[10]):t[4],location:t[3],navigate:t[11]});function _c(t){let e,n;return e=new Gl({props:{primary:t[1],$$slots:{default:[Iv]},$$scope:{ctx:t}}}),{c(){le(e.$$.fragment)},m(s,i){oe(e,s,i),n=!0},p(s,i){const r={};i&2&&(r.primary=s[1]),i&528409&&(r.$$scope={dirty:i,ctx:s}),e.$set(r)},i(s){n||(j(e.$$.fragment,s),n=!0)},o(s){W(e.$$.fragment,s),n=!1},d(s){ae(e,s)}}}function Ev(t){let e;const n=t[18].default,s=Ul(n,t,t[19],gc);return{c(){s&&s.c()},m(i,r){s&&s.m(i,r),e=!0},p(i,r){s&&s.p&&(!e||r&524312)&&Vl(s,n,i,i[19],e?Fl(n,i[19],r,kv):Bl(i[19]),gc)},i(i){e||(j(s,i),e=!0)},o(i){W(s,i),e=!1},d(i){s&&s.d(i)}}}function Tv(t){let e,n,s;const i=[{location:t[3]},{navigate:t[11]},ws?ai(t[10]):t[4],t[12]];var r=t[0];function o(a){let l={};for(let u=0;u<i.length;u+=1)l=Kt(l,i[u]);return{props:l}}return r&&(e=oc(r,o())),{c(){e&&le(e.$$.fragment),n=_n()},m(a,l){e&&oe(e,a,l),k(a,n,l),s=!0},p(a,l){const u=l&7192?Cn(i,[l&8&&{location:a[3]},l&2048&&{navigate:a[11]},l&1040&&Xn(ws?ai(a[10]):a[4]),l&4096&&Xn(a[12])]):{};if(r!==(r=a[0])){if(e){Ot();const h=e;W(h.$$.fragment,1,0,()=>{ae(h,1)}),$t()}r?(e=oc(r,o()),le(e.$$.fragment),j(e.$$.fragment,1),oe(e,n.parentNode,n)):e=null}else r&&e.$set(u)},i(a){s||(e&&j(e.$$.fragment,a),s=!0)},o(a){e&&W(e.$$.fragment,a),s=!1},d(a){a&&w(n),e&&ae(e,a)}}}function Iv(t){let e,n,s,i;const r=[Tv,Ev],o=[];function a(l,u){return l[0]!==null?0:1}return e=a(t),n=o[e]=r[e](t),{c(){n.c(),s=_n()},m(l,u){o[e].m(l,u),k(l,s,u),i=!0},p(l,u){let h=e;e=a(l),e===h?o[e].p(l,u):(Ot(),W(o[h],1,1,()=>{o[h]=null}),$t(),n=o[e],n?n.p(l,u):(n=o[e]=r[e](l),n.c()),j(n,1),n.m(s.parentNode,s))},i(l){i||(j(n),i=!0)},o(l){W(n),i=!1},d(l){o[e].d(l),l&&w(s)}}}function Cv(t){let e,n,s,i,r,o=[Js(t[7]),{"data-svnav-route-start":t[5]}],a={};for(let f=0;f<o.length;f+=1)a=Kt(a,o[f]);let l=t[2]&&_c(t),u=[Js(t[7]),{"data-svnav-route-end":t[5]}],h={};for(let f=0;f<u.length;f+=1)h=Kt(h,u[f]);return{c(){e=p("div"),n=y(),l&&l.c(),s=y(),i=p("div"),Fn(e,a),Fn(i,h)},m(f,d){k(f,e,d),k(f,n,d),l&&l.m(f,d),k(f,s,d),k(f,i,d),r=!0},p(f,[d]){Fn(e,a=Cn(o,[Js(f[7]),{"data-svnav-route-start":f[5]}])),f[2]?l?(l.p(f,d),d&4&&j(l,1)):(l=_c(f),l.c(),j(l,1),l.m(s.parentNode,s)):l&&(Ot(),W(l,1,1,()=>{l=null}),$t()),Fn(i,h=Cn(u,[Js(f[7]),{"data-svnav-route-end":f[5]}]))},i(f){r||(j(l),r=!0)},o(f){W(l),r=!1},d(f){f&&w(e),f&&w(n),l&&l.d(f),f&&w(s),f&&w(i)}}}const Sv=Fd();function Av(t,e,n){let s;const i=["path","component","meta","primary"];let r=lo(e,i),o,a,l,u,{$$slots:h={},$$scope:f}=e,{path:d=""}=e,{component:g=null}=e,{meta:_={}}=e,{primary:v=!0}=e;dr(Ho,e);const b=Sv(),{registerRoute:E,unregisterRoute:C,activeRoute:O,disableInlineStyles:A}=bs(ui);Ve(t,O,U=>n(16,o=U));const H=tp();Ve(t,H,U=>n(17,l=U));const $=Zd();Ve(t,$,U=>n(3,a=U));const F=tn(null);let G;const R=tn(),L=tn({});Ve(t,L,U=>n(4,u=U)),Fi(Bd,R),Fi(O_,L),Fi($_,F);const V=vi();return ws||k_(()=>C(b)),t.$$set=U=>{n(24,e=Kt(Kt({},e),ao(U))),n(12,r=lo(e,i)),"path"in U&&n(13,d=U.path),"component"in U&&n(0,g=U.component),"meta"in U&&n(14,_=U.meta),"primary"in U&&n(1,v=U.primary),"$$scope"in U&&n(19,f=U.$$scope)},t.$$.update=()=>{if(t.$$.dirty&155658){const U=d==="",te=fr(l,d),ee={id:b,path:d,meta:_,default:U,fullPath:U?"":te,base:U?l:ev(te,a.pathname),primary:v,focusElement:F};R.set(ee),n(15,G=E(ee))}if(t.$$.dirty&98304&&n(2,s=!!(G||o&&o.id===b)),t.$$.dirty&98308&&s){const{params:U}=G||o;L.set(U)}},e=ao(e),[g,v,s,a,u,b,O,A,H,$,L,V,r,d,_,G,o,l,h,f]}class bn extends Ye{constructor(e){super(),xe(this,e,Av,Cv,Ge,{path:13,component:0,meta:14,primary:1})}}function Dv(t){let e,n,s,i;const r=t[13].default,o=Ul(r,t,t[12],null);let a=[{href:t[0]},t[2],t[1]],l={};for(let u=0;u<a.length;u+=1)l=Kt(l,a[u]);return{c(){e=p("a"),o&&o.c(),Fn(e,l)},m(u,h){k(u,e,h),o&&o.m(e,null),n=!0,s||(i=q(e,"click",t[4]),s=!0)},p(u,[h]){o&&o.p&&(!n||h&4096)&&Vl(o,r,u,u[12],n?Fl(r,u[12],h,null):Bl(u[12]),null),Fn(e,l=Cn(a,[(!n||h&1)&&{href:u[0]},h&4&&u[2],h&2&&u[1]]))},i(u){n||(j(o,u),n=!0)},o(u){W(o,u),n=!1},d(u){u&&w(e),o&&o.d(u),s=!1,i()}}}function Rv(t,e,n){let s,i,r,o,a,l;const u=["to","replace","state","getProps"];let h=lo(e,u),f,{$$slots:d={},$$scope:g}=e,{to:_}=e,{replace:v=!1}=e,{state:b={}}=e,{getProps:E=null}=e;dr(Hl,e);const C=Zd();Ve(t,C,F=>n(11,f=F));const O=Nd(),A=np(),{navigate:H}=ep();function $(F){O("click",F),D_(F)&&(F.preventDefault(),H(s,{state:b,replace:o||v}))}return t.$$set=F=>{n(19,e=Kt(Kt({},e),ao(F))),n(18,h=lo(e,u)),"to"in F&&n(5,_=F.to),"replace"in F&&n(6,v=F.replace),"state"in F&&n(7,b=F.state),"getProps"in F&&n(8,E=F.getProps),"$$scope"in F&&n(12,g=F.$$scope)},t.$$.update=()=>{t.$$.dirty&2080&&n(0,s=A(_,f)),t.$$.dirty&2049&&n(10,i=il(f.pathname,s)),t.$$.dirty&2049&&n(9,r=s===f.pathname),t.$$.dirty&2049&&(o=zl(s)===J_(f)),t.$$.dirty&512&&n(2,a=r?{"aria-current":"page"}:{}),n(1,l=(()=>{if(Md(E)){const F=E({location:f,href:s,isPartiallyCurrent:i,isCurrent:r});return{...h,...F}}return h})())},e=ao(e),[s,l,a,C,$,_,v,b,E,r,i,f,g,d]}class wn extends Ye{constructor(e){super(),xe(this,e,Rv,Dv,Ge,{to:5,replace:6,state:7,getProps:8})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const sp=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Pv=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},ip={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,h=r>>2,f=(r&3)<<4|a>>4;let d=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(d=64)),s.push(n[h],n[f],n[d],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(sp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Pv(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||u==null||f==null)throw Error();const d=r<<2|a>>4;if(s.push(d),u!==64){const g=a<<4&240|u>>2;if(s.push(g),f!==64){const _=u<<6&192|f;s.push(_)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Nv=function(t){const e=sp(t);return ip.encodeByteArray(e,!0)},fo=function(t){return Nv(t).replace(/\./g,"")},rp=function(t){try{return ip.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ov(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(dn())}function $v(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Lv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Mv(){const t=dn();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Uv(){return typeof indexedDB=="object"}function Fv(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}function Vv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Bv=()=>Vv().__FIREBASE_DEFAULTS__,jv=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t=process.env.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},qv=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&rp(t[1]);return e&&JSON.parse(e)},Wl=()=>{try{return Bv()||jv()||qv()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},op=t=>{var e,n;return(n=(e=Wl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Hv=t=>{const e=op(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Kv=()=>{var t;return(t=Wl())===null||t===void 0?void 0:t.config},ap=t=>{var e;return(e=Wl())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zv{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Gv(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[fo(JSON.stringify(n)),fo(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wv="FirebaseError";class rs extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Wv,Object.setPrototypeOf(this,rs.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,pr.prototype.create)}}class pr{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Qv(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new rs(i,a,s)}}function Qv(t,e){return t.replace(xv,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const xv=/\{\$([^}]+)}/g;function Yv(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function po(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(vc(r)&&vc(o)){if(!po(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function vc(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mr(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Ni(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function Oi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Xv(t,e){const n=new Jv(t,e);return n.subscribe.bind(n)}class Jv{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Zv(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=Oa),i.error===void 0&&(i.error=Oa),i.complete===void 0&&(i.complete=Oa);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Zv(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Oa(){}/**
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
 */function gn(t){return t&&t._delegate?t._delegate:t}class Vs{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ds="[DEFAULT]";/**
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
 */class ey{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new zv;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ny(e))try{this.getOrInitializeService({instanceIdentifier:Ds})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Ds){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ds){return this.instances.has(e)}getOptions(e=Ds){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:ty(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ds){return this.component?this.component.multipleInstances?e:Ds:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ty(t){return t===Ds?void 0:t}function ny(t){return t.instantiationMode==="EAGER"}/**
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
 */class sy{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ey(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(qe||(qe={}));const iy={debug:qe.DEBUG,verbose:qe.VERBOSE,info:qe.INFO,warn:qe.WARN,error:qe.ERROR,silent:qe.SILENT},ry=qe.INFO,oy={[qe.DEBUG]:"log",[qe.VERBOSE]:"log",[qe.INFO]:"info",[qe.WARN]:"warn",[qe.ERROR]:"error"},ay=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=oy[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ql{constructor(e){this.name=e,this._logLevel=ry,this._logHandler=ay,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in qe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?iy[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,qe.DEBUG,...e),this._logHandler(this,qe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,qe.VERBOSE,...e),this._logHandler(this,qe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,qe.INFO,...e),this._logHandler(this,qe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,qe.WARN,...e),this._logHandler(this,qe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,qe.ERROR,...e),this._logHandler(this,qe.ERROR,...e)}}const ly=(t,e)=>e.some(n=>t instanceof n);let yc,bc;function uy(){return yc||(yc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function cy(){return bc||(bc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const lp=new WeakMap,rl=new WeakMap,up=new WeakMap,$a=new WeakMap,xl=new WeakMap;function hy(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(ms(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&lp.set(n,t)}).catch(()=>{}),xl.set(e,t),e}function fy(t){if(rl.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});rl.set(t,e)}let ol={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return rl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||up.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ms(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function dy(t){ol=t(ol)}function py(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(La(this),e,...n);return up.set(s,e.sort?e.sort():[e]),ms(s)}:cy().includes(t)?function(...e){return t.apply(La(this),e),ms(lp.get(this))}:function(...e){return ms(t.apply(La(this),e))}}function my(t){return typeof t=="function"?py(t):(t instanceof IDBTransaction&&fy(t),ly(t,uy())?new Proxy(t,ol):t)}function ms(t){if(t instanceof IDBRequest)return hy(t);if($a.has(t))return $a.get(t);const e=my(t);return e!==t&&($a.set(t,e),xl.set(e,t)),e}const La=t=>xl.get(t);function gy(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=ms(o);return s&&o.addEventListener("upgradeneeded",l=>{s(ms(o.result),l.oldVersion,l.newVersion,ms(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const _y=["get","getKey","getAll","getAllKeys","count"],vy=["put","add","delete","clear"],Ma=new Map;function wc(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ma.get(e))return Ma.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=vy.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||_y.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Ma.set(e,r),r}dy(t=>({...t,get:(e,n,s)=>wc(e,n)||t.get(e,n,s),has:(e,n)=>!!wc(e,n)||t.has(e,n)}));/**
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
 */class yy{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(by(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function by(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const al="@firebase/app",kc="0.8.2";/**
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
 */const Bs=new Ql("@firebase/app"),wy="@firebase/app-compat",ky="@firebase/analytics-compat",Ey="@firebase/analytics",Ty="@firebase/app-check-compat",Iy="@firebase/app-check",Cy="@firebase/auth",Sy="@firebase/auth-compat",Ay="@firebase/database",Dy="@firebase/database-compat",Ry="@firebase/functions",Py="@firebase/functions-compat",Ny="@firebase/installations",Oy="@firebase/installations-compat",$y="@firebase/messaging",Ly="@firebase/messaging-compat",My="@firebase/performance",Uy="@firebase/performance-compat",Fy="@firebase/remote-config",Vy="@firebase/remote-config-compat",By="@firebase/storage",jy="@firebase/storage-compat",qy="@firebase/firestore",Hy="@firebase/firestore-compat",Ky="firebase",zy="9.12.1";/**
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
 */const ll="[DEFAULT]",Gy={[al]:"fire-core",[wy]:"fire-core-compat",[Ey]:"fire-analytics",[ky]:"fire-analytics-compat",[Iy]:"fire-app-check",[Ty]:"fire-app-check-compat",[Cy]:"fire-auth",[Sy]:"fire-auth-compat",[Ay]:"fire-rtdb",[Dy]:"fire-rtdb-compat",[Ry]:"fire-fn",[Py]:"fire-fn-compat",[Ny]:"fire-iid",[Oy]:"fire-iid-compat",[$y]:"fire-fcm",[Ly]:"fire-fcm-compat",[My]:"fire-perf",[Uy]:"fire-perf-compat",[Fy]:"fire-rc",[Vy]:"fire-rc-compat",[By]:"fire-gcs",[jy]:"fire-gcs-compat",[qy]:"fire-fst",[Hy]:"fire-fst-compat","fire-js":"fire-js",[Ky]:"fire-js-all"};/**
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
 */const mo=new Map,ul=new Map;function Wy(t,e){try{t.container.addComponent(e)}catch(n){Bs.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ci(t){const e=t.name;if(ul.has(e))return Bs.debug(`There were multiple attempts to register component ${e}.`),!1;ul.set(e,t);for(const n of mo.values())Wy(n,t);return!0}function Yl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Qy={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},gs=new pr("app","Firebase",Qy);/**
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
 */class xy{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Vs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw gs.create("app-deleted",{appName:this._name})}}/**
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
 */const gr=zy;function cp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:ll,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw gs.create("bad-app-name",{appName:String(i)});if(n||(n=Kv()),!n)throw gs.create("no-options");const r=mo.get(i);if(r){if(po(n,r.options)&&po(s,r.config))return r;throw gs.create("duplicate-app",{appName:i})}const o=new sy(i);for(const l of ul.values())o.addComponent(l);const a=new xy(n,s,o);return mo.set(i,a),a}function hp(t=ll){const e=mo.get(t);if(!e&&t===ll)return cp();if(!e)throw gs.create("no-app",{appName:t});return e}function _s(t,e,n){var s;let i=(s=Gy[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Bs.warn(a.join(" "));return}ci(new Vs(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Yy="firebase-heartbeat-database",Xy=1,Gi="firebase-heartbeat-store";let Ua=null;function fp(){return Ua||(Ua=gy(Yy,Xy,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Gi)}}}).catch(t=>{throw gs.create("idb-open",{originalErrorMessage:t.message})})),Ua}async function Jy(t){var e;try{return(await fp()).transaction(Gi).objectStore(Gi).get(dp(t))}catch(n){if(n instanceof rs)Bs.warn(n.message);else{const s=gs.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});Bs.warn(s.message)}}}async function Ec(t,e){var n;try{const i=(await fp()).transaction(Gi,"readwrite");return await i.objectStore(Gi).put(e,dp(t)),i.done}catch(s){if(s instanceof rs)Bs.warn(s.message);else{const i=gs.create("idb-set",{originalErrorMessage:(n=s)===null||n===void 0?void 0:n.message});Bs.warn(i.message)}}}function dp(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Zy=1024,e0=30*24*60*60*1e3;class t0{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new s0(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Tc();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=e0}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Tc(),{heartbeatsToSend:n,unsentEntries:s}=n0(this._heartbeatsCache.heartbeats),i=fo(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Tc(){return new Date().toISOString().substring(0,10)}function n0(t,e=Zy){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Ic(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ic(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class s0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Uv()?Fv().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Jy(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ec(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ec(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ic(t){return fo(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function i0(t){ci(new Vs("platform-logger",e=>new yy(e),"PRIVATE")),ci(new Vs("heartbeat",e=>new t0(e),"PRIVATE")),_s(al,kc,t),_s(al,kc,"esm2017"),_s("fire-js","")}i0("");var r0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ue,Xl=Xl||{},Te=r0||self;function go(){}function Ko(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function _r(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function o0(t){return Object.prototype.hasOwnProperty.call(t,Fa)&&t[Fa]||(t[Fa]=++a0)}var Fa="closure_uid_"+(1e9*Math.random()>>>0),a0=0;function l0(t,e,n){return t.call.apply(t.bind,arguments)}function u0(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function cn(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?cn=l0:cn=u0,cn.apply(null,arguments)}function Hr(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function rn(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function Is(){this.s=this.s,this.o=this.o}var c0=0;Is.prototype.s=!1;Is.prototype.na=function(){!this.s&&(this.s=!0,this.M(),c0!=0)&&o0(this)};Is.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const pp=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Jl(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Cc(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Ko(s)){const i=t.length||0,r=s.length||0;t.length=i+r;for(let o=0;o<r;o++)t[i+o]=s[o]}else t.push(s)}}function hn(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}hn.prototype.h=function(){this.defaultPrevented=!0};var h0=function(){if(!Te.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Te.addEventListener("test",go,e),Te.removeEventListener("test",go,e)}catch{}return t}();function _o(t){return/^[\s\xa0]*$/.test(t)}var Sc=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Va(t,e){return t<e?-1:t>e?1:0}function zo(){var t=Te.navigator;return t&&(t=t.userAgent)?t:""}function Un(t){return zo().indexOf(t)!=-1}function Zl(t){return Zl[" "](t),t}Zl[" "]=go;function f0(t){var e=m0;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var d0=Un("Opera"),hi=Un("Trident")||Un("MSIE"),mp=Un("Edge"),cl=mp||hi,gp=Un("Gecko")&&!(zo().toLowerCase().indexOf("webkit")!=-1&&!Un("Edge"))&&!(Un("Trident")||Un("MSIE"))&&!Un("Edge"),p0=zo().toLowerCase().indexOf("webkit")!=-1&&!Un("Edge");function _p(){var t=Te.document;return t?t.documentMode:void 0}var vo;e:{var Ba="",ja=function(){var t=zo();if(gp)return/rv:([^\);]+)(\)|;)/.exec(t);if(mp)return/Edge\/([\d\.]+)/.exec(t);if(hi)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(p0)return/WebKit\/(\S+)/.exec(t);if(d0)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(ja&&(Ba=ja?ja[1]:""),hi){var qa=_p();if(qa!=null&&qa>parseFloat(Ba)){vo=String(qa);break e}}vo=Ba}var m0={};function g0(){return f0(function(){let t=0;const e=Sc(String(vo)).split("."),n=Sc("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;t=Va(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||Va(i[2].length==0,r[2].length==0)||Va(i[2],r[2]),i=i[3],r=r[3]}while(t==0)}return 0<=t})}var hl;if(Te.document&&hi){var Ac=_p();hl=Ac||parseInt(vo,10)||void 0}else hl=void 0;var _0=hl;function Wi(t,e){if(hn.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(gp){e:{try{Zl(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:v0[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Wi.X.h.call(this)}}rn(Wi,hn);var v0={2:"touch",3:"pen",4:"mouse"};Wi.prototype.h=function(){Wi.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var vr="closure_listenable_"+(1e6*Math.random()|0),y0=0;function b0(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=i,this.key=++y0,this.ba=this.ea=!1}function Go(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function eu(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function vp(t){const e={};for(const n in t)e[n]=t[n];return e}const Dc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function yp(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<Dc.length;r++)n=Dc[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Wo(t){this.src=t,this.g={},this.h=0}Wo.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=dl(t,e,s,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new b0(e,this.src,r,!!s,i),e.ea=n,t.push(e)),e};function fl(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=pp(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(Go(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function dl(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==s)return i}return-1}var tu="closure_lm_"+(1e6*Math.random()|0),Ha={};function bp(t,e,n,s,i){if(s&&s.once)return kp(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)bp(t,e[r],n,s,i);return null}return n=iu(n),t&&t[vr]?t.N(e,n,_r(s)?!!s.capture:!!s,i):wp(t,e,n,!1,s,i)}function wp(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=_r(i)?!!i.capture:!!i,a=su(t);if(a||(t[tu]=a=new Wo(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=w0(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)h0||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(Tp(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function w0(){function t(n){return e.call(t.src,t.listener,n)}const e=k0;return t}function kp(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)kp(t,e[r],n,s,i);return null}return n=iu(n),t&&t[vr]?t.O(e,n,_r(s)?!!s.capture:!!s,i):wp(t,e,n,!0,s,i)}function Ep(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)Ep(t,e[r],n,s,i);else s=_r(s)?!!s.capture:!!s,n=iu(n),t&&t[vr]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=dl(r,n,s,i),-1<n&&(Go(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=su(t))&&(e=t.g[e.toString()],t=-1,e&&(t=dl(e,n,s,i)),(n=-1<t?e[t]:null)&&nu(n))}function nu(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[vr])fl(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Tp(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=su(e))?(fl(n,t),n.h==0&&(n.src=null,e[tu]=null)):Go(t)}}}function Tp(t){return t in Ha?Ha[t]:Ha[t]="on"+t}function k0(t,e){if(t.ba)t=!0;else{e=new Wi(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&nu(t),t=n.call(s,e)}return t}function su(t){return t=t[tu],t instanceof Wo?t:null}var Ka="__closure_events_fn_"+(1e9*Math.random()>>>0);function iu(t){return typeof t=="function"?t:(t[Ka]||(t[Ka]=function(e){return t.handleEvent(e)}),t[Ka])}function zt(){Is.call(this),this.i=new Wo(this),this.P=this,this.I=null}rn(zt,Is);zt.prototype[vr]=!0;zt.prototype.removeEventListener=function(t,e,n,s){Ep(this,t,e,n,s)};function nn(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new hn(e,t);else if(e instanceof hn)e.target=e.target||t;else{var i=e;e=new hn(s,t),yp(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=Kr(o,s,!0,e)&&i}if(o=e.g=t,i=Kr(o,s,!0,e)&&i,i=Kr(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=Kr(o,s,!1,e)&&i}zt.prototype.M=function(){if(zt.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Go(n[s]);delete t.g[e],t.h--}}this.I=null};zt.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};zt.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Kr(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&fl(t.i,o),i=a.call(l,s)!==!1&&i}}return i&&!s.defaultPrevented}var ru=Te.JSON.stringify;function E0(){var t=Sp;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class T0{constructor(){this.h=this.g=null}add(e,n){const s=Ip.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Ip=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new I0,t=>t.reset());class I0{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function C0(t){Te.setTimeout(()=>{throw t},0)}function Cp(t,e){pl||S0(),ml||(pl(),ml=!0),Sp.add(t,e)}var pl;function S0(){var t=Te.Promise.resolve(void 0);pl=function(){t.then(A0)}}var ml=!1,Sp=new T0;function A0(){for(var t;t=E0();){try{t.h.call(t.g)}catch(n){C0(n)}var e=Ip;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}ml=!1}function Qo(t,e){zt.call(this),this.h=t||1,this.g=e||Te,this.j=cn(this.lb,this),this.l=Date.now()}rn(Qo,zt);ue=Qo.prototype;ue.ca=!1;ue.R=null;ue.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),nn(this,"tick"),this.ca&&(ou(this),this.start()))}};ue.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function ou(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}ue.M=function(){Qo.X.M.call(this),ou(this),delete this.g};function au(t,e,n){if(typeof t=="function")n&&(t=cn(t,n));else if(t&&typeof t.handleEvent=="function")t=cn(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Te.setTimeout(t,e||0)}function Ap(t){t.g=au(()=>{t.g=null,t.i&&(t.i=!1,Ap(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class D0 extends Is{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Ap(this)}M(){super.M(),this.g&&(Te.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Qi(t){Is.call(this),this.h=t,this.g={}}rn(Qi,Is);var Rc=[];function Dp(t,e,n,s){Array.isArray(n)||(n&&(Rc[0]=n.toString()),n=Rc);for(var i=0;i<n.length;i++){var r=bp(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function Rp(t){eu(t.g,function(e,n){this.g.hasOwnProperty(n)&&nu(e)},t),t.g={}}Qi.prototype.M=function(){Qi.X.M.call(this),Rp(this)};Qi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function xo(){this.g=!0}xo.prototype.Aa=function(){this.g=!1};function R0(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var h=u[0];u=u[1];var f=h.split("_");o=2<=f.length&&f[1]=="type"?o+(h+"="+u+"&"):o+(h+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function P0(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function Zs(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+O0(t,n)+(s?" "+s:"")})}function N0(t,e){t.info(function(){return"TIMEOUT: "+e})}xo.prototype.info=function(){};function O0(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return ru(n)}catch{return e}}var Gs={},Pc=null;function Yo(){return Pc=Pc||new zt}Gs.Pa="serverreachability";function Pp(t){hn.call(this,Gs.Pa,t)}rn(Pp,hn);function xi(t){const e=Yo();nn(e,new Pp(e))}Gs.STAT_EVENT="statevent";function Np(t,e){hn.call(this,Gs.STAT_EVENT,t),this.stat=e}rn(Np,hn);function mn(t){const e=Yo();nn(e,new Np(e,t))}Gs.Qa="timingevent";function Op(t,e){hn.call(this,Gs.Qa,t),this.size=e}rn(Op,hn);function yr(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Te.setTimeout(function(){t()},e)}var Xo={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},$p={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function lu(){}lu.prototype.h=null;function Nc(t){return t.h||(t.h=t.i())}function Lp(){}var br={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function uu(){hn.call(this,"d")}rn(uu,hn);function cu(){hn.call(this,"c")}rn(cu,hn);var gl;function Jo(){}rn(Jo,lu);Jo.prototype.g=function(){return new XMLHttpRequest};Jo.prototype.i=function(){return{}};gl=new Jo;function wr(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new Qi(this),this.O=$0,t=cl?125:void 0,this.T=new Qo(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Mp}function Mp(){this.i=null,this.g="",this.h=!1}var $0=45e3,_l={},yo={};ue=wr.prototype;ue.setTimeout=function(t){this.O=t};function vl(t,e,n){t.K=1,t.v=ea(Jn(e)),t.s=n,t.P=!0,Up(t,null)}function Up(t,e){t.F=Date.now(),kr(t),t.A=Jn(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),zp(n.i,"t",s),t.C=0,n=t.l.H,t.h=new Mp,t.g=fm(t.l,n?e:null,!t.s),0<t.N&&(t.L=new D0(cn(t.La,t,t.g),t.N)),Dp(t.S,t.g,"readystatechange",t.ib),e=t.H?vp(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),xi(),R0(t.j,t.u,t.A,t.m,t.U,t.s)}ue.ib=function(t){t=t.target;const e=this.L;e&&Gn(t)==3?e.l():this.La(t)};ue.La=function(t){try{if(t==this.g)e:{const h=Gn(this.g);var e=this.g.Ea();const f=this.g.aa();if(!(3>h)&&(h!=3||cl||this.g&&(this.h.h||this.g.fa()||Mc(this.g)))){this.I||h!=4||e==7||(e==8||0>=f?xi(3):xi(2)),Zo(this);var n=this.g.aa();this.Y=n;t:if(Fp(this)){var s=Mc(this.g);t="";var i=s.length,r=Gn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Rs(this),Vi(this);var o="";break t}this.h.i=new Te.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,P0(this.j,this.u,this.A,this.m,this.U,h,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_o(a)){var u=a;break t}}u=null}if(n=u)Zs(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,yl(this,n);else{this.i=!1,this.o=3,mn(12),Rs(this),Vi(this);break e}}this.P?(Vp(this,h,o),cl&&this.i&&h==3&&(Dp(this.S,this.T,"tick",this.hb),this.T.start())):(Zs(this.j,this.m,o,null),yl(this,o)),h==4&&Rs(this),this.i&&!this.I&&(h==4?lm(this.l,this):(this.i=!1,kr(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,mn(12)):(this.o=0,mn(13)),Rs(this),Vi(this)}}}catch{}finally{}};function Fp(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Vp(t,e,n){let s=!0,i;for(;!t.I&&t.C<n.length;)if(i=L0(t,n),i==yo){e==4&&(t.o=4,mn(14),s=!1),Zs(t.j,t.m,null,"[Incomplete Response]");break}else if(i==_l){t.o=4,mn(15),Zs(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else Zs(t.j,t.m,i,null),yl(t,i);Fp(t)&&i!=yo&&i!=_l&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,mn(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),_u(e),e.K=!0,mn(11))):(Zs(t.j,t.m,n,"[Invalid Chunked Response]"),Rs(t),Vi(t))}ue.hb=function(){if(this.g){var t=Gn(this.g),e=this.g.fa();this.C<e.length&&(Zo(this),Vp(this,t,e),this.i&&t!=4&&kr(this))}};function L0(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?yo:(n=Number(e.substring(n,s)),isNaN(n)?_l:(s+=1,s+n>e.length?yo:(e=e.substr(s,n),t.C=s+n,e)))}ue.cancel=function(){this.I=!0,Rs(this)};function kr(t){t.V=Date.now()+t.O,Bp(t,t.O)}function Bp(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=yr(cn(t.gb,t),e)}function Zo(t){t.B&&(Te.clearTimeout(t.B),t.B=null)}ue.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(N0(this.j,this.A),this.K!=2&&(xi(),mn(17)),Rs(this),this.o=2,Vi(this)):Bp(this,this.V-t)};function Vi(t){t.l.G==0||t.I||lm(t.l,t)}function Rs(t){Zo(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,ou(t.T),Rp(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function yl(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||bl(n.h,t))){if(!t.J&&bl(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)ko(n),sa(n);else break e;gu(n),mn(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=yr(cn(n.cb,n),6e3));if(1>=Qp(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Ps(n,11)}else if((t.J||n.g==t)&&ko(n),!_o(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const h=u[3];h!=null&&(n.ma=h,n.j.info("VER="+n.ma));const f=u[4];f!=null&&(n.Ca=f,n.j.info("SVER="+n.Ca));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const g=t.g;if(g){const _=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_){var r=s.h;r.g||_.indexOf("spdy")==-1&&_.indexOf("quic")==-1&&_.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(hu(r,r.h),r.h=null))}if(s.D){const v=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(s.za=v,dt(s.F,s.D,v))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=hm(s,s.H?s.ka:null,s.V),o.J){xp(s.h,o);var a=o,l=s.J;l&&a.setTimeout(l),a.B&&(Zo(a),kr(a)),s.g=o}else om(s);0<n.i.length&&ia(n)}else u[0]!="stop"&&u[0]!="close"||Ps(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Ps(n,7):mu(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}xi(4)}catch{}}function M0(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Ko(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function U0(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Ko(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function jp(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Ko(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=U0(t),s=M0(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}var qp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function F0(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Os(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Os){this.h=e!==void 0?e:t.h,bo(this,t.j),this.s=t.s,this.g=t.g,wo(this,t.m),this.l=t.l,e=t.i;var n=new Yi;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Oc(this,n),this.o=t.o}else t&&(n=String(t).match(qp))?(this.h=!!e,bo(this,n[1]||"",!0),this.s=$i(n[2]||""),this.g=$i(n[3]||"",!0),wo(this,n[4]),this.l=$i(n[5]||"",!0),Oc(this,n[6]||"",!0),this.o=$i(n[7]||"")):(this.h=!!e,this.i=new Yi(null,this.h))}Os.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Li(e,$c,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Li(e,$c,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Li(n,n.charAt(0)=="/"?j0:B0,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Li(n,H0)),t.join("")};function Jn(t){return new Os(t)}function bo(t,e,n){t.j=n?$i(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function wo(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Oc(t,e,n){e instanceof Yi?(t.i=e,K0(t.i,t.h)):(n||(e=Li(e,q0)),t.i=new Yi(e,t.h))}function dt(t,e,n){t.i.set(e,n)}function ea(t){return dt(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function $i(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Li(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,V0),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function V0(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var $c=/[#\/\?@]/g,B0=/[#\?:]/g,j0=/[#\?]/g,q0=/[#\?@]/g,H0=/#/g;function Yi(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Cs(t){t.g||(t.g=new Map,t.h=0,t.i&&F0(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}ue=Yi.prototype;ue.add=function(t,e){Cs(this),this.i=null,t=yi(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Hp(t,e){Cs(t),e=yi(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Kp(t,e){return Cs(t),e=yi(t,e),t.g.has(e)}ue.forEach=function(t,e){Cs(this),this.g.forEach(function(n,s){n.forEach(function(i){t.call(e,i,s,this)},this)},this)};ue.oa=function(){Cs(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let r=0;r<i.length;r++)n.push(e[s])}return n};ue.W=function(t){Cs(this);let e=[];if(typeof t=="string")Kp(this,t)&&(e=e.concat(this.g.get(yi(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};ue.set=function(t,e){return Cs(this),this.i=null,t=yi(this,t),Kp(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};ue.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function zp(t,e,n){Hp(t,e),0<n.length&&(t.i=null,t.g.set(yi(t,e),Jl(n)),t.h+=n.length)}ue.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};function yi(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function K0(t,e){e&&!t.j&&(Cs(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(Hp(this,s),zp(this,i,n))},t)),t.j=e}var z0=class{constructor(t,e){this.h=t,this.g=e}};function Gp(t){this.l=t||G0,Te.PerformanceNavigationTiming?(t=Te.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Te.g&&Te.g.Ga&&Te.g.Ga()&&Te.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var G0=10;function Wp(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Qp(t){return t.h?1:t.g?t.g.size:0}function bl(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function hu(t,e){t.g?t.g.add(e):t.h=e}function xp(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Gp.prototype.cancel=function(){if(this.i=Yp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Yp(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Jl(t.i)}function fu(){}fu.prototype.stringify=function(t){return Te.JSON.stringify(t,void 0)};fu.prototype.parse=function(t){return Te.JSON.parse(t,void 0)};function W0(){this.g=new fu}function Q0(t,e,n){const s=n||"";try{jp(t,function(i,r){let o=i;_r(i)&&(o=ru(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function x0(t,e){const n=new xo;if(Te.Image){const s=new Image;s.onload=Hr(zr,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Hr(zr,n,s,"TestLoadImage: error",!1,e),s.onabort=Hr(zr,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Hr(zr,n,s,"TestLoadImage: timeout",!1,e),Te.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function zr(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function Er(t){this.l=t.ac||null,this.j=t.jb||!1}rn(Er,lu);Er.prototype.g=function(){return new ta(this.l,this.j)};Er.prototype.i=function(t){return function(){return t}}({});function ta(t,e){zt.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=du,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}rn(ta,zt);var du=0;ue=ta.prototype;ue.open=function(t,e){if(this.readyState!=du)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Xi(this)};ue.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||Te).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};ue.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Tr(this)),this.readyState=du};ue.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Xi(this)),this.g&&(this.readyState=3,Xi(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof Te.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Xp(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function Xp(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}ue.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Tr(this):Xi(this),this.readyState==3&&Xp(this)}};ue.Va=function(t){this.g&&(this.response=this.responseText=t,Tr(this))};ue.Ua=function(t){this.g&&(this.response=t,Tr(this))};ue.ga=function(){this.g&&Tr(this)};function Tr(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Xi(t)}ue.setRequestHeader=function(t,e){this.v.append(t,e)};ue.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};ue.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Xi(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(ta.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Y0=Te.JSON.parse;function kt(t){zt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Jp,this.K=this.L=!1}rn(kt,zt);var Jp="",X0=/^https?$/i,J0=["POST","PUT"];ue=kt.prototype;ue.Ka=function(t){this.L=t};ue.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():gl.g(),this.C=this.u?Nc(this.u):Nc(gl),this.g.onreadystatechange=cn(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){Lc(this,r);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=Te.FormData&&t instanceof Te.FormData,!(0<=pp(J0,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{tm(this),0<this.B&&((this.K=Z0(this.g))?(this.g.timeout=this.B,this.g.ontimeout=cn(this.qa,this)):this.A=au(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){Lc(this,r)}};function Z0(t){return hi&&g0()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}ue.qa=function(){typeof Xl<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,nn(this,"timeout"),this.abort(8))};function Lc(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Zp(t),na(t)}function Zp(t){t.D||(t.D=!0,nn(t,"complete"),nn(t,"error"))}ue.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,nn(this,"complete"),nn(this,"abort"),na(this))};ue.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),na(this,!0)),kt.X.M.call(this)};ue.Ha=function(){this.s||(this.F||this.v||this.l?em(this):this.fb())};ue.fb=function(){em(this)};function em(t){if(t.h&&typeof Xl<"u"&&(!t.C[1]||Gn(t)!=4||t.aa()!=2)){if(t.v&&Gn(t)==4)au(t.Ha,0,t);else if(nn(t,"readystatechange"),Gn(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var i=String(t.H).match(qp)[1]||null;if(!i&&Te.self&&Te.self.location){var r=Te.self.location.protocol;i=r.substr(0,r.length-1)}s=!X0.test(i?i.toLowerCase():"")}n=s}if(n)nn(t,"complete"),nn(t,"success");else{t.m=6;try{var o=2<Gn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",Zp(t)}}finally{na(t)}}}}function na(t,e){if(t.g){tm(t);const n=t.g,s=t.C[0]?go:null;t.g=null,t.C=null,e||nn(t,"ready");try{n.onreadystatechange=s}catch{}}}function tm(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(Te.clearTimeout(t.A),t.A=null)}function Gn(t){return t.g?t.g.readyState:0}ue.aa=function(){try{return 2<Gn(this)?this.g.status:-1}catch{return-1}};ue.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};ue.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Y0(e)}};function Mc(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Jp:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}ue.Ea=function(){return this.m};ue.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function nm(t){let e="";return eu(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function pu(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=nm(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):dt(t,e,n))}function Di(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function sm(t){this.Ca=0,this.i=[],this.j=new xo,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Di("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Di("baseRetryDelayMs",5e3,t),this.bb=Di("retryDelaySeedMs",1e4,t),this.$a=Di("forwardChannelMaxRetries",2,t),this.ta=Di("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Gp(t&&t.concurrentRequestLimit),this.Fa=new W0,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}ue=sm.prototype;ue.ma=8;ue.G=1;function mu(t){if(im(t),t.G==3){var e=t.U++,n=Jn(t.F);dt(n,"SID",t.I),dt(n,"RID",e),dt(n,"TYPE","terminate"),Ir(t,n),e=new wr(t,t.j,e,void 0),e.K=2,e.v=ea(Jn(n)),n=!1,Te.navigator&&Te.navigator.sendBeacon&&(n=Te.navigator.sendBeacon(e.v.toString(),"")),!n&&Te.Image&&(new Image().src=e.v,n=!0),n||(e.g=fm(e.l,null),e.g.da(e.v)),e.F=Date.now(),kr(e)}cm(t)}function sa(t){t.g&&(_u(t),t.g.cancel(),t.g=null)}function im(t){sa(t),t.u&&(Te.clearTimeout(t.u),t.u=null),ko(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&Te.clearTimeout(t.m),t.m=null)}function ia(t){Wp(t.h)||t.m||(t.m=!0,Cp(t.Ja,t),t.C=0)}function e1(t,e){return Qp(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=yr(cn(t.Ja,t,e),um(t,t.C)),t.C++,!0)}ue.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new wr(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=vp(r),yp(r,this.S)):r=this.S),this.o!==null||this.N||(i.H=r,r=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=rm(this,i,e),n=Jn(this.F),dt(n,"RID",t),dt(n,"CVER",22),this.D&&dt(n,"X-HTTP-Session-Id",this.D),Ir(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(nm(r)))+"&"+e:this.o&&pu(n,this.o,r)),hu(this.h,i),this.Ya&&dt(n,"TYPE","init"),this.O?(dt(n,"$req",e),dt(n,"SID","null"),i.Z=!0,vl(i,n,null)):vl(i,n,e),this.G=2}}else this.G==3&&(t?Uc(this,t):this.i.length==0||Wp(this.h)||Uc(this))};function Uc(t,e){var n;e?n=e.m:n=t.U++;const s=Jn(t.F);dt(s,"SID",t.I),dt(s,"RID",n),dt(s,"AID",t.T),Ir(t,s),t.o&&t.s&&pu(s,t.o,t.s),n=new wr(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=rm(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),hu(t.h,n),vl(n,s,e)}function Ir(t,e){t.ia&&eu(t.ia,function(n,s){dt(e,s,n)}),t.l&&jp({},function(n,s){dt(e,s,n)})}function rm(t,e,n){n=Math.min(t.i.length,n);var s=t.l?cn(t.l.Ra,t.l,t):null;e:{var i=t.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const h=i[l].g;if(u-=r,0>u)r=Math.max(0,i[l].h-100),a=!1;else try{Q0(h,o,"req"+u+"_")}catch{s&&s(h)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function om(t){t.g||t.u||(t.Z=1,Cp(t.Ia,t),t.A=0)}function gu(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=yr(cn(t.Ia,t),um(t,t.A)),t.A++,!0)}ue.Ia=function(){if(this.u=null,am(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=yr(cn(this.eb,this),t)}};ue.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,mn(10),sa(this),am(this))};function _u(t){t.B!=null&&(Te.clearTimeout(t.B),t.B=null)}function am(t){t.g=new wr(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Jn(t.sa);dt(e,"RID","rpc"),dt(e,"SID",t.I),dt(e,"CI",t.L?"0":"1"),dt(e,"AID",t.T),dt(e,"TYPE","xmlhttp"),Ir(t,e),t.o&&t.s&&pu(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=ea(Jn(e)),n.s=null,n.P=!0,Up(n,t)}ue.cb=function(){this.v!=null&&(this.v=null,sa(this),gu(this),mn(19))};function ko(t){t.v!=null&&(Te.clearTimeout(t.v),t.v=null)}function lm(t,e){var n=null;if(t.g==e){ko(t),_u(t),t.g=null;var s=2}else if(bl(t.h,e))n=e.D,xp(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;s=Yo(),nn(s,new Op(s,n)),ia(t)}else om(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(s==1&&e1(t,e)||s==2&&gu(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Ps(t,5);break;case 4:Ps(t,10);break;case 3:Ps(t,6);break;default:Ps(t,2)}}}function um(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Ps(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=cn(t.kb,t);n||(n=new Os("//www.google.com/images/cleardot.gif"),Te.location&&Te.location.protocol=="http"||bo(n,"https"),ea(n)),x0(n.toString(),s)}else mn(2);t.G=0,t.l&&t.l.va(e),cm(t),im(t)}ue.kb=function(t){t?(this.j.info("Successfully pinged google.com"),mn(2)):(this.j.info("Failed to ping google.com"),mn(1))};function cm(t){if(t.G=0,t.la=[],t.l){const e=Yp(t.h);(e.length!=0||t.i.length!=0)&&(Cc(t.la,e),Cc(t.la,t.i),t.h.i.length=0,Jl(t.i),t.i.length=0),t.l.ua()}}function hm(t,e,n){var s=n instanceof Os?Jn(n):new Os(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),wo(s,s.m);else{var i=Te.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new Os(null,void 0);s&&bo(r,s),e&&(r.g=e),i&&wo(r,i),n&&(r.l=n),s=r}return n=t.D,e=t.za,n&&e&&dt(s,n,e),dt(s,"VER",t.ma),Ir(t,s),s}function fm(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new kt(new Er({jb:!0})):new kt(t.ra),e.Ka(t.H),e}function dm(){}ue=dm.prototype;ue.xa=function(){};ue.wa=function(){};ue.va=function(){};ue.ua=function(){};ue.Ra=function(){};function Eo(){if(hi&&!(10<=Number(_0)))throw Error("Environmental error: no available transport.")}Eo.prototype.g=function(t,e){return new Sn(t,e)};function Sn(t,e){zt.call(this),this.g=new sm(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!_o(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!_o(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new bi(this)}rn(Sn,zt);Sn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;mn(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=hm(t,null,t.V),ia(t)};Sn.prototype.close=function(){mu(this.g)};Sn.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=ru(t),t=n);e.i.push(new z0(e.ab++,t)),e.G==3&&ia(e)};Sn.prototype.M=function(){this.g.l=null,delete this.j,mu(this.g),delete this.g,Sn.X.M.call(this)};function pm(t){uu.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}rn(pm,uu);function mm(){cu.call(this),this.status=1}rn(mm,cu);function bi(t){this.g=t}rn(bi,dm);bi.prototype.xa=function(){nn(this.g,"a")};bi.prototype.wa=function(t){nn(this.g,new pm(t))};bi.prototype.va=function(t){nn(this.g,new mm)};bi.prototype.ua=function(){nn(this.g,"b")};Eo.prototype.createWebChannel=Eo.prototype.g;Sn.prototype.send=Sn.prototype.u;Sn.prototype.open=Sn.prototype.m;Sn.prototype.close=Sn.prototype.close;Xo.NO_ERROR=0;Xo.TIMEOUT=8;Xo.HTTP_ERROR=6;$p.COMPLETE="complete";Lp.EventType=br;br.OPEN="a";br.CLOSE="b";br.ERROR="c";br.MESSAGE="d";zt.prototype.listen=zt.prototype.N;kt.prototype.listenOnce=kt.prototype.O;kt.prototype.getLastError=kt.prototype.Oa;kt.prototype.getLastErrorCode=kt.prototype.Ea;kt.prototype.getStatus=kt.prototype.aa;kt.prototype.getResponseJson=kt.prototype.Sa;kt.prototype.getResponseText=kt.prototype.fa;kt.prototype.send=kt.prototype.da;kt.prototype.setWithCredentials=kt.prototype.Ka;var t1=function(){return new Eo},n1=function(){return Yo()},za=Xo,s1=$p,i1=Gs,Fc={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},r1=Er,Gr=Lp,o1=kt;const Vc="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ln.UNAUTHENTICATED=new ln(null),ln.GOOGLE_CREDENTIALS=new ln("google-credentials-uid"),ln.FIRST_PARTY=new ln("first-party-uid"),ln.MOCK_USER=new ln("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wi="9.12.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const js=new Ql("@firebase/firestore");function Bc(){return js.logLevel}function pe(t,...e){if(js.logLevel<=qe.DEBUG){const n=e.map(vu);js.debug(`Firestore (${wi}): ${t}`,...n)}}function Zn(t,...e){if(js.logLevel<=qe.ERROR){const n=e.map(vu);js.error(`Firestore (${wi}): ${t}`,...n)}}function wl(t,...e){if(js.logLevel<=qe.WARN){const n=e.map(vu);js.warn(`Firestore (${wi}): ${t}`,...n)}}function vu(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function Se(t="Unexpected state"){const e=`FIRESTORE (${wi}) INTERNAL ASSERTION FAILED: `+t;throw Zn(e),new Error(e)}function at(t,e){t||Se()}function Ae(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class be extends rs{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class gm{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class a1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ln.UNAUTHENTICATED))}shutdown(){}}class l1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class u1{constructor(e){this.t=e,this.currentUser=ln.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=l=>this.i!==s?(s=this.i,n(l)):Promise.resolve();let r=new vs;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new vs,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{pe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(pe("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new vs)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(pe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(at(typeof s.accessToken=="string"),new gm(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return at(e===null||typeof e=="string"),new ln(e)}}class c1{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i,this.type="FirstParty",this.user=ln.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(at(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class h1{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i}getToken(){return Promise.resolve(new c1(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(ln.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class f1{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class d1{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=r=>{r.error!=null&&pe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.A;return this.A=r.token,pe("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{pe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.T.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.T.getImmediate({optional:!0});r?i(r):pe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(at(typeof n.token=="string"),this.A=n.token,new f1(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p1(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _m{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=p1(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function ze(t,e){return t<e?-1:t>e?1:0}function fi(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new be(X.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new be(X.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new be(X.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new be(X.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Lt.fromMillis(Date.now())}static fromDate(e){return Lt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Lt(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ze(this.nanoseconds,e.nanoseconds):ze(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Re(e)}static min(){return new Re(new Lt(0,0))}static max(){return new Re(new Lt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(e,n,s){n===void 0?n=0:n>e.length&&Se(),s===void 0?s=e.length-n:s>e.length-n&&Se(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Ji.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ji?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class pt extends Ji{construct(e,n,s){return new pt(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new be(X.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new pt(n)}static emptyPath(){return new pt([])}}const m1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class un extends Ji{construct(e,n,s){return new un(e,n,s)}static isValidIdentifier(e){return m1.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),un.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new un(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new be(X.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new be(X.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new be(X.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new be(X.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new un(n)}static emptyPath(){return new un([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e){this.path=e}static fromPath(e){return new ye(pt.fromString(e))}static fromName(e){return new ye(pt.fromString(e).popFirst(5))}static empty(){return new ye(pt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&pt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return pt.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ye(new pt(e.slice()))}}function g1(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=Re.fromTimestamp(s===1e9?new Lt(n+1,0):new Lt(n,s));return new ks(i,ye.empty(),e)}function _1(t){return new ks(t.readTime,t.key,-1)}class ks{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new ks(Re.min(),ye.empty(),-1)}static max(){return new ks(Re.max(),ye.empty(),-1)}}function v1(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ye.comparator(t.documentKey,e.documentKey),n!==0?n:ze(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class b1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cr(t){if(t.code!==X.FAILED_PRECONDITION||t.message!==y1)throw t;pe("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Se(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new J((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof J?n:J.resolve(n)}catch(n){return J.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):J.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):J.reject(n)}static resolve(e){return new J((n,s)=>{n(e)})}static reject(e){return new J((n,s)=>{s(e)})}static waitFor(e){return new J((n,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},l=>s(l))}),o=!0,r===i&&n()})}static or(e){let n=J.resolve(!1);for(const s of e)n=n.next(i=>i?J.resolve(i):s());return n}static forEach(e,n){const s=[];return e.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(e,n){return new J((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let l=0;l<r;l++){const u=l;n(e[u]).next(h=>{o[u]=h,++a,a===r&&s(o)},h=>i(h))}})}static doWhile(e,n){return new J((s,i)=>{const r=()=>{e()===!0?n().next(()=>{r()},i):s()};r()})}}function Sr(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class yu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jc(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ws(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function vm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yu.at=-1;class Ut{constructor(e,n){this.comparator=e,this.root=n||Zt.EMPTY}insert(e,n){return new Ut(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Zt.BLACK,null,null))}remove(e){return new Ut(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Zt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Wr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Wr(this.root,e,this.comparator,!1)}getReverseIterator(){return new Wr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Wr(this.root,e,this.comparator,!0)}}class Wr{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Zt{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s!=null?s:Zt.RED,this.left=i!=null?i:Zt.EMPTY,this.right=r!=null?r:Zt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new Zt(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Zt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Zt.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Zt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Zt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Se();const e=this.left.check();if(e!==this.right.check())throw Se();return e+(this.isRed()?0:1)}}Zt.EMPTY=null,Zt.RED=!0,Zt.BLACK=!1;Zt.EMPTY=new class{constructor(){this.size=0}get key(){throw Se()}get value(){throw Se()}get color(){throw Se()}get left(){throw Se()}get right(){throw Se()}copy(t,e,n,s,i){return this}insert(t,e,n){return new Zt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e){this.comparator=e,this.data=new Ut(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new qc(this.data.getIterator())}getIteratorFrom(e){return new qc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof Mt)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Mt(this.comparator);return n.data=e,n}}class qc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e){this.fields=e,e.sort(un.comparator)}static empty(){return new Nn([])}unionWith(e){let n=new Mt(un.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Nn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return fi(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new pn(n)}static fromUint8Array(e){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(e);return new pn(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ze(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}pn.EMPTY_BYTE_STRING=new pn("");const w1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Es(t){if(at(!!t),typeof t=="string"){let e=0;const n=w1.exec(t);if(at(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Dt(t.seconds),nanos:Dt(t.nanos)}}function Dt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function di(t){return typeof t=="string"?pn.fromBase64String(t):pn.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ym(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function bm(t){const e=t.mapValue.fields.__previous_value__;return ym(e)?bm(e):e}function Zi(t){const e=Es(t.mapValue.fields.__local_write_time__.timestampValue);return new Lt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k1{constructor(e,n,s,i,r,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class er{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new er("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof er&&e.projectId===this.projectId&&e.database===this.database}}function ra(t){return t==null}function To(t){return t===0&&1/t==-1/0}function E1(t){return typeof t=="number"&&Number.isInteger(t)&&!To(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function qs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ym(t)?4:T1(t)?9007199254740991:10:Se()}function Hn(t,e){if(t===e)return!0;const n=qs(t);if(n!==qs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Zi(t).isEqual(Zi(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=Es(s.timestampValue),o=Es(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return di(s.bytesValue).isEqual(di(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Dt(s.geoPointValue.latitude)===Dt(i.geoPointValue.latitude)&&Dt(s.geoPointValue.longitude)===Dt(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Dt(s.integerValue)===Dt(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=Dt(s.doubleValue),o=Dt(i.doubleValue);return r===o?To(r)===To(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return fi(t.arrayValue.values||[],e.arrayValue.values||[],Hn);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(jc(r)!==jc(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!Hn(r[a],o[a])))return!1;return!0}(t,e);default:return Se()}}function tr(t,e){return(t.values||[]).find(n=>Hn(n,e))!==void 0}function pi(t,e){if(t===e)return 0;const n=qs(t),s=qs(e);if(n!==s)return ze(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return ze(t.booleanValue,e.booleanValue);case 2:return function(i,r){const o=Dt(i.integerValue||i.doubleValue),a=Dt(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Hc(t.timestampValue,e.timestampValue);case 4:return Hc(Zi(t),Zi(e));case 5:return ze(t.stringValue,e.stringValue);case 6:return function(i,r){const o=di(i),a=di(r);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=ze(o[l],a[l]);if(u!==0)return u}return ze(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,r){const o=ze(Dt(i.latitude),Dt(r.latitude));return o!==0?o:ze(Dt(i.longitude),Dt(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=pi(o[l],a[l]);if(u)return u}return ze(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,r){if(i===Qr.mapValue&&r===Qr.mapValue)return 0;if(i===Qr.mapValue)return 1;if(r===Qr.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=r.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let h=0;h<a.length&&h<u.length;++h){const f=ze(a[h],u[h]);if(f!==0)return f;const d=pi(o[a[h]],l[u[h]]);if(d!==0)return d}return ze(a.length,u.length)}(t.mapValue,e.mapValue);default:throw Se()}}function Hc(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ze(t,e);const n=Es(t),s=Es(e),i=ze(n.seconds,s.seconds);return i!==0?i:ze(n.nanos,s.nanos)}function si(t){return kl(t)}function kl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const i=Es(s);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?di(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,ye.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=kl(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${kl(s.fields[a])}`;return r+"}"}(t.mapValue):Se();var e,n}function El(t){return!!t&&"integerValue"in t}function bu(t){return!!t&&"arrayValue"in t}function Kc(t){return!!t&&"nullValue"in t}function zc(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Zr(t){return!!t&&"mapValue"in t}function Bi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ws(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Bi(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Bi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function T1(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e){this.value=e}static empty(){return new kn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Zr(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Bi(n)}setAll(e){let n=un.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=Bi(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());Zr(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Hn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];Zr(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){Ws(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new kn(Bi(this.value))}}function wm(t){const e=[];return Ws(t.fields,(n,s)=>{const i=new un([n]);if(Zr(s)){const r=wm(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new Nn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e,n,s,i,r,o){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.data=r,this.documentState=o}static newInvalidDocument(e){return new en(e,0,Re.min(),Re.min(),kn.empty(),0)}static newFoundDocument(e,n,s){return new en(e,1,n,Re.min(),s,0)}static newNoDocument(e,n){return new en(e,2,n,Re.min(),kn.empty(),0)}static newUnknownDocument(e,n){return new en(e,3,n,Re.min(),kn.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=kn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=kn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Re.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof en&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new en(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class I1{constructor(e,n=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.ht=null}}function Gc(t,e=null,n=[],s=[],i=null,r=null,o=null){return new I1(t,e,n,s,i,r,o)}function wu(t){const e=Ae(t);if(e.ht===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>{return(i=s).field.canonicalString()+i.op.toString()+si(i.value);var i}).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),ra(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>si(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>si(s)).join(",")),e.ht=n}return e.ht}function C1(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${si(s.value)}`;var s}).join(", ")}]`),ra(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>si(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>si(n)).join(",")),`Target(${e})`}function ku(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!$1(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],s=e.filters[i],n.op!==s.op||!n.field.isEqual(s.field)||!Hn(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Qc(t.startAt,e.startAt)&&Qc(t.endAt,e.endAt)}function Tl(t){return ye.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class En extends class{}{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.lt(e,n,s):new S1(e,n,s):n==="array-contains"?new R1(e,s):n==="in"?new P1(e,s):n==="not-in"?new N1(e,s):n==="array-contains-any"?new O1(e,s):new En(e,n,s)}static lt(e,n,s){return n==="in"?new A1(e,s):new D1(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.ft(pi(n,this.value)):n!==null&&qs(this.value)===qs(n)&&this.ft(pi(n,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Se()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class S1 extends En{constructor(e,n,s){super(e,n,s),this.key=ye.fromName(s.referenceValue)}matches(e){const n=ye.comparator(e.key,this.key);return this.ft(n)}}class A1 extends En{constructor(e,n){super(e,"in",n),this.keys=km("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class D1 extends En{constructor(e,n){super(e,"not-in",n),this.keys=km("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function km(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>ye.fromName(s.referenceValue))}class R1 extends En{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return bu(n)&&tr(n.arrayValue,this.value)}}class P1 extends En{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&tr(this.value.arrayValue,n)}}class N1 extends En{constructor(e,n){super(e,"not-in",n)}matches(e){if(tr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!tr(this.value.arrayValue,n)}}class O1 extends En{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!bu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>tr(this.value.arrayValue,s))}}class Io{constructor(e,n){this.position=e,this.inclusive=n}}class ji{constructor(e,n="asc"){this.field=e,this.dir=n}}function $1(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Wc(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=ye.comparator(ye.fromName(o.referenceValue),n.key):s=pi(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function Qc(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Hn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(e,n=null,s=[],i=[],r=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this._t=null,this.wt=null,this.startAt,this.endAt}}function L1(t,e,n,s,i,r,o,a){return new oa(t,e,n,s,i,r,o,a)}function Em(t){return new oa(t)}function xc(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function M1(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function U1(t){for(const e of t.filters)if(e.dt())return e.field;return null}function F1(t){return t.collectionGroup!==null}function nr(t){const e=Ae(t);if(e._t===null){e._t=[];const n=U1(e),s=M1(e);if(n!==null&&s===null)n.isKeyField()||e._t.push(new ji(n)),e._t.push(new ji(un.keyField(),"asc"));else{let i=!1;for(const r of e.explicitOrderBy)e._t.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new ji(un.keyField(),r))}}}return e._t}function es(t){const e=Ae(t);if(!e.wt)if(e.limitType==="F")e.wt=Gc(e.path,e.collectionGroup,nr(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of nr(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new ji(r.field,o))}const s=e.endAt?new Io(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Io(e.startAt.position,e.startAt.inclusive):null;e.wt=Gc(e.path,e.collectionGroup,n,e.filters,e.limit,s,i)}return e.wt}function Il(t,e,n){return new oa(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function aa(t,e){return ku(es(t),es(e))&&t.limitType===e.limitType}function Tm(t){return`${wu(es(t))}|lt:${t.limitType}`}function Cl(t){return`Query(target=${C1(es(t))}; limitType=${t.limitType})`}function Eu(t,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):ye.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,s){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=Wc(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,nr(n),s)||n.endAt&&!function(i,r,o){const a=Wc(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,nr(n),s))}(t,e)}function V1(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Im(t){return(e,n)=>{let s=!1;for(const i of nr(t)){const r=B1(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function B1(t,e,n){const s=t.field.isKeyField()?ye.comparator(e.key,n.key):function(i,r,o){const a=r.data.field(i),l=o.data.field(i);return a!==null&&l!==null?pi(a,l):Se()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return Se()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cm(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:To(e)?"-0":e}}function Sm(t){return{integerValue:""+t}}function j1(t,e){return E1(e)?Sm(e):Cm(t,e)}/**
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
 */class la{constructor(){this._=void 0}}function q1(t,e,n){return t instanceof Co?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,e):t instanceof sr?Dm(t,e):t instanceof ir?Rm(t,e):function(s,i){const r=Am(s,i),o=Yc(r)+Yc(s.yt);return El(r)&&El(s.yt)?Sm(o):Cm(s.It,o)}(t,e)}function H1(t,e,n){return t instanceof sr?Dm(t,e):t instanceof ir?Rm(t,e):n}function Am(t,e){return t instanceof So?El(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Co extends la{}class sr extends la{constructor(e){super(),this.elements=e}}function Dm(t,e){const n=Pm(e);for(const s of t.elements)n.some(i=>Hn(i,s))||n.push(s);return{arrayValue:{values:n}}}class ir extends la{constructor(e){super(),this.elements=e}}function Rm(t,e){let n=Pm(e);for(const s of t.elements)n=n.filter(i=>!Hn(i,s));return{arrayValue:{values:n}}}class So extends la{constructor(e,n){super(),this.It=e,this.yt=n}}function Yc(t){return Dt(t.integerValue||t.doubleValue)}function Pm(t){return bu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function K1(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof sr&&s instanceof sr||n instanceof ir&&s instanceof ir?fi(n.elements,s.elements,Hn):n instanceof So&&s instanceof So?Hn(n.yt,s.yt):n instanceof Co&&s instanceof Co}(t.transform,e.transform)}class z1{constructor(e,n){this.version=e,this.transformResults=n}}class Ln{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ln}static exists(e){return new Ln(void 0,e)}static updateTime(e){return new Ln(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function eo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ua{}function Nm(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Tu(t.key,Ln.none()):new Ar(t.key,t.data,Ln.none());{const n=t.data,s=kn.empty();let i=new Mt(un.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new Ss(t.key,s,new Nn(i.toArray()),Ln.none())}}function G1(t,e,n){t instanceof Ar?function(s,i,r){const o=s.value.clone(),a=Jc(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Ss?function(s,i,r){if(!eo(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=Jc(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(Om(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function qi(t,e,n,s){return t instanceof Ar?function(i,r,o,a){if(!eo(i.precondition,r))return o;const l=i.value.clone(),u=Zc(i.fieldTransforms,a,r);return l.setAll(u),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),null}(t,e,n,s):t instanceof Ss?function(i,r,o,a){if(!eo(i.precondition,r))return o;const l=Zc(i.fieldTransforms,a,r),u=r.data;return u.setAll(Om(i)),u.setAll(l),r.convertToFoundDocument(r.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,s):function(i,r,o){return eo(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(t,e,n)}function W1(t,e){let n=null;for(const s of t.fieldTransforms){const i=e.data.field(s.field),r=Am(s.transform,i||null);r!=null&&(n===null&&(n=kn.empty()),n.set(s.field,r))}return n||null}function Xc(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&fi(n,s,(i,r)=>K1(i,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ar extends ua{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ss extends ua{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Om(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Jc(t,e,n){const s=new Map;at(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,H1(o,a,n[i]))}return s}function Zc(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,q1(r,o,e))}return s}class Tu extends ua{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Q1 extends ua{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x1{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var At,Me;function Y1(t){switch(t){default:return Se();case X.CANCELLED:case X.UNKNOWN:case X.DEADLINE_EXCEEDED:case X.RESOURCE_EXHAUSTED:case X.INTERNAL:case X.UNAVAILABLE:case X.UNAUTHENTICATED:return!1;case X.INVALID_ARGUMENT:case X.NOT_FOUND:case X.ALREADY_EXISTS:case X.PERMISSION_DENIED:case X.FAILED_PRECONDITION:case X.ABORTED:case X.OUT_OF_RANGE:case X.UNIMPLEMENTED:case X.DATA_LOSS:return!0}}function $m(t){if(t===void 0)return Zn("GRPC error has no .code"),X.UNKNOWN;switch(t){case At.OK:return X.OK;case At.CANCELLED:return X.CANCELLED;case At.UNKNOWN:return X.UNKNOWN;case At.DEADLINE_EXCEEDED:return X.DEADLINE_EXCEEDED;case At.RESOURCE_EXHAUSTED:return X.RESOURCE_EXHAUSTED;case At.INTERNAL:return X.INTERNAL;case At.UNAVAILABLE:return X.UNAVAILABLE;case At.UNAUTHENTICATED:return X.UNAUTHENTICATED;case At.INVALID_ARGUMENT:return X.INVALID_ARGUMENT;case At.NOT_FOUND:return X.NOT_FOUND;case At.ALREADY_EXISTS:return X.ALREADY_EXISTS;case At.PERMISSION_DENIED:return X.PERMISSION_DENIED;case At.FAILED_PRECONDITION:return X.FAILED_PRECONDITION;case At.ABORTED:return X.ABORTED;case At.OUT_OF_RANGE:return X.OUT_OF_RANGE;case At.UNIMPLEMENTED:return X.UNIMPLEMENTED;case At.DATA_LOSS:return X.DATA_LOSS;default:return Se()}}(Me=At||(At={}))[Me.OK=0]="OK",Me[Me.CANCELLED=1]="CANCELLED",Me[Me.UNKNOWN=2]="UNKNOWN",Me[Me.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Me[Me.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Me[Me.NOT_FOUND=5]="NOT_FOUND",Me[Me.ALREADY_EXISTS=6]="ALREADY_EXISTS",Me[Me.PERMISSION_DENIED=7]="PERMISSION_DENIED",Me[Me.UNAUTHENTICATED=16]="UNAUTHENTICATED",Me[Me.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Me[Me.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Me[Me.ABORTED=10]="ABORTED",Me[Me.OUT_OF_RANGE=11]="OUT_OF_RANGE",Me[Me.UNIMPLEMENTED=12]="UNIMPLEMENTED",Me[Me.INTERNAL=13]="INTERNAL",Me[Me.UNAVAILABLE=14]="UNAVAILABLE",Me[Me.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ws(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return vm(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X1=new Ut(ye.comparator);function ts(){return X1}const Lm=new Ut(ye.comparator);function Mi(...t){let e=Lm;for(const n of t)e=e.insert(n.key,n);return e}function Mm(t){let e=Lm;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Ns(){return Hi()}function Um(){return Hi()}function Hi(){return new ki(t=>t.toString(),(t,e)=>t.isEqual(e))}const J1=new Ut(ye.comparator),Z1=new Mt(ye.comparator);function Oe(...t){let e=Z1;for(const n of t)e=e.add(n);return e}const eb=new Mt(ze);function Fm(){return eb}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const i=new Map;return i.set(e,Dr.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new ca(Re.min(),i,Fm(),ts(),Oe())}}class Dr{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Dr(s,n,Oe(),Oe(),Oe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(e,n,s,i){this.Tt=e,this.removedTargetIds=n,this.key=s,this.Et=i}}class Vm{constructor(e,n){this.targetId=e,this.At=n}}class Bm{constructor(e,n,s=pn.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class eh{constructor(){this.Rt=0,this.bt=nh(),this.Pt=pn.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=Oe(),n=Oe(),s=Oe();return this.bt.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:Se()}}),new Dr(this.Pt,this.vt,e,n,s)}Nt(){this.Vt=!1,this.bt=nh()}kt(e,n){this.Vt=!0,this.bt=this.bt.insert(e,n)}Ot(e){this.Vt=!0,this.bt=this.bt.remove(e)}Mt(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class tb{constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=ts(),this.qt=th(),this.Kt=new Mt(ze)}Gt(e){for(const n of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(n,e.Et):this.jt(n,e.key,e.Et);for(const n of e.removedTargetIds)this.jt(n,e.key,e.Et)}Wt(e){this.forEachTarget(e,n=>{const s=this.zt(n);switch(e.state){case 0:this.Ht(n)&&s.Ct(e.resumeToken);break;case 1:s.Ft(),s.St||s.Nt(),s.Ct(e.resumeToken);break;case 2:s.Ft(),s.St||this.removeTarget(n);break;case 3:this.Ht(n)&&(s.$t(),s.Ct(e.resumeToken));break;case 4:this.Ht(n)&&(this.Jt(n),s.Ct(e.resumeToken));break;default:Se()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Lt.forEach((s,i)=>{this.Ht(i)&&n(i)})}Yt(e){const n=e.targetId,s=e.At.count,i=this.Xt(n);if(i){const r=i.target;if(Tl(r))if(s===0){const o=new ye(r.path);this.jt(n,o,en.newNoDocument(o,Re.min()))}else at(s===1);else this.Zt(n)!==s&&(this.Jt(n),this.Kt=this.Kt.add(n))}}te(e){const n=new Map;this.Lt.forEach((r,o)=>{const a=this.Xt(o);if(a){if(r.current&&Tl(a.target)){const l=new ye(a.target.path);this.Ut.get(l)!==null||this.ee(o,l)||this.jt(o,l,en.newNoDocument(l,e))}r.Dt&&(n.set(o,r.xt()),r.Nt())}});let s=Oe();this.qt.forEach((r,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Xt(l);return!u||u.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))}),this.Ut.forEach((r,o)=>o.setReadTime(e));const i=new ca(e,n,this.Kt,this.Ut,s);return this.Ut=ts(),this.qt=th(),this.Kt=new Mt(ze),i}Qt(e,n){if(!this.Ht(e))return;const s=this.ee(e,n.key)?2:0;this.zt(e).kt(n.key,s),this.Ut=this.Ut.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ne(n.key).add(e))}jt(e,n,s){if(!this.Ht(e))return;const i=this.zt(e);this.ee(e,n)?i.kt(n,1):i.Ot(n),this.qt=this.qt.insert(n,this.ne(n).delete(e)),s&&(this.Ut=this.Ut.insert(n,s))}removeTarget(e){this.Lt.delete(e)}Zt(e){const n=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Mt(e){this.zt(e).Mt()}zt(e){let n=this.Lt.get(e);return n||(n=new eh,this.Lt.set(e,n)),n}ne(e){let n=this.qt.get(e);return n||(n=new Mt(ze),this.qt=this.qt.insert(e,n)),n}Ht(e){const n=this.Xt(e)!==null;return n||pe("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.Lt.get(e);return n&&n.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new eh),this.Bt.getRemoteKeysForTarget(e).forEach(n=>{this.jt(e,n,null)})}ee(e,n){return this.Bt.getRemoteKeysForTarget(e).has(n)}}function th(){return new Ut(ye.comparator)}function nh(){return new Ut(ye.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nb=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),sb=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class ib{constructor(e,n){this.databaseId=e,this.gt=n}}function Ao(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function jm(t,e){return t.gt?e.toBase64():e.toUint8Array()}function rb(t,e){return Ao(t,e.toTimestamp())}function xn(t){return at(!!t),Re.fromTimestamp(function(e){const n=Es(e);return new Lt(n.seconds,n.nanos)}(t))}function Iu(t,e){return function(n){return new pt(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function qm(t){const e=pt.fromString(t);return at(zm(e)),e}function Sl(t,e){return Iu(t.databaseId,e.path)}function Ga(t,e){const n=qm(e);if(n.get(1)!==t.databaseId.projectId)throw new be(X.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new be(X.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ye(Hm(n))}function Al(t,e){return Iu(t.databaseId,e)}function ob(t){const e=qm(t);return e.length===4?pt.emptyPath():Hm(e)}function Dl(t){return new pt(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Hm(t){return at(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function sh(t,e,n){return{name:Sl(t,e),fields:n.value.mapValue.fields}}function ab(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:Se()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(l,u){return l.gt?(at(u===void 0||typeof u=="string"),pn.fromBase64String(u||"")):(at(u===void 0||u instanceof Uint8Array),pn.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?X.UNKNOWN:$m(l.code);return new be(u,l.message||"")}(o);n=new Bm(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=Ga(t,s.document.name),r=xn(s.document.updateTime),o=new kn({mapValue:{fields:s.document.fields}}),a=en.newFoundDocument(i,r,o),l=s.targetIds||[],u=s.removedTargetIds||[];n=new to(l,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=Ga(t,s.document),r=s.readTime?xn(s.readTime):Re.min(),o=en.newNoDocument(i,r),a=s.removedTargetIds||[];n=new to([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=Ga(t,s.document),r=s.removedTargetIds||[];n=new to([],r,i,null)}else{if(!("filter"in e))return Se();{e.filter;const s=e.filter;s.targetId;const i=s.count||0,r=new x1(i),o=s.targetId;n=new Vm(o,r)}}return n}function lb(t,e){let n;if(e instanceof Ar)n={update:sh(t,e.key,e.value)};else if(e instanceof Tu)n={delete:Sl(t,e.key)};else if(e instanceof Ss)n={update:sh(t,e.key,e.data),updateMask:vb(e.fieldMask)};else{if(!(e instanceof Q1))return Se();n={verify:Sl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof Co)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof sr)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof ir)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof So)return{fieldPath:r.field.canonicalString(),increment:o.yt};throw Se()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:rb(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Se()}(t,e.precondition)),n}function ub(t,e){return t&&t.length>0?(at(e!==void 0),t.map(n=>function(s,i){let r=s.updateTime?xn(s.updateTime):xn(i);return r.isEqual(Re.min())&&(r=xn(i)),new z1(r,s.transformResults||[])}(n,e))):[]}function cb(t,e){return{documents:[Al(t,e.path)]}}function hb(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Al(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Al(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(l){if(l.length===0)return;const u=l.map(h=>function(f){if(f.op==="=="){if(zc(f.value))return{unaryFilter:{field:Xs(f.field),op:"IS_NAN"}};if(Kc(f.value))return{unaryFilter:{field:Xs(f.field),op:"IS_NULL"}}}else if(f.op==="!="){if(zc(f.value))return{unaryFilter:{field:Xs(f.field),op:"IS_NOT_NAN"}};if(Kc(f.value))return{unaryFilter:{field:Xs(f.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Xs(f.field),op:mb(f.op),value:f.value}}}(h));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(e.filters);i&&(n.structuredQuery.where=i);const r=function(l){if(l.length!==0)return l.map(u=>function(h){return{field:Xs(h.field),direction:pb(h.dir)}}(u))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(l,u){return l.gt||ra(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function fb(t){let e=ob(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){at(s===1);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let r=[];n.where&&(r=Km(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(h=>function(f){return new ji(ei(f.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(f.direction))}(h)));let a=null;n.limit&&(a=function(h){let f;return f=typeof h=="object"?h.value:h,ra(f)?null:f}(n.limit));let l=null;n.startAt&&(l=function(h){const f=!!h.before,d=h.values||[];return new Io(d,f)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const f=!h.before,d=h.values||[];return new Io(d,f)}(n.endAt)),L1(e,i,o,r,a,"F",l,u)}function db(t,e){const n=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Se()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Km(t){return t?t.unaryFilter!==void 0?[_b(t)]:t.fieldFilter!==void 0?[gb(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>Km(e)).reduce((e,n)=>e.concat(n)):Se():[]}function pb(t){return nb[t]}function mb(t){return sb[t]}function Xs(t){return{fieldPath:t.canonicalString()}}function ei(t){return un.fromServerFormat(t.fieldPath)}function gb(t){return En.create(ei(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Se()}}(t.fieldFilter.op),t.fieldFilter.value)}function _b(t){switch(t.unaryFilter.op){case"IS_NAN":const e=ei(t.unaryFilter.field);return En.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=ei(t.unaryFilter.field);return En.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ei(t.unaryFilter.field);return En.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=ei(t.unaryFilter.field);return En.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Se()}}function vb(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function zm(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yb{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&G1(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=qi(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=qi(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Um();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const l=Nm(o,a);l!==null&&s.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(Re.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Oe())}isEqual(e){return this.batchId===e.batchId&&fi(this.mutations,e.mutations,(n,s)=>Xc(n,s))&&fi(this.baseMutations,e.baseMutations,(n,s)=>Xc(n,s))}}class Cu{constructor(e,n,s,i){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(e,n,s){at(e.mutations.length===s.length);let i=J1;const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new Cu(e,n,s,i)}}/**
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
 */class bb{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class $s{constructor(e,n,s,i,r=Re.min(),o=Re.min(),a=pn.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new $s(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new $s(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new $s(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wb{constructor(e){this.re=e}}function kb(t){const e=fb({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Il(e,e.limit,"L"):e}/**
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
 */class Eb{constructor(){this.Ye=new Tb}addToCollectionParentIndex(e,n){return this.Ye.add(n),J.resolve()}getCollectionParents(e,n){return J.resolve(this.Ye.getEntries(n))}addFieldIndex(e,n){return J.resolve()}deleteFieldIndex(e,n){return J.resolve()}getDocumentsMatchingTarget(e,n){return J.resolve(null)}getIndexType(e,n){return J.resolve(0)}getFieldIndexes(e,n){return J.resolve([])}getNextCollectionGroupToUpdate(e){return J.resolve(null)}getMinOffset(e,n){return J.resolve(ks.min())}getMinOffsetFromCollectionGroup(e,n){return J.resolve(ks.min())}updateCollectionGroup(e,n,s){return J.resolve()}updateIndexEntries(e,n){return J.resolve()}}class Tb{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new Mt(pt.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new Mt(pt.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new mi(0)}static vn(){return new mi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ib{constructor(){this.changes=new ki(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,en.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?J.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Cb{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sb{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(s=i,this.getBaseDocument(e,n,s))).next(i=>(s!==null&&qi(s.mutation,i,Nn.empty(),Lt.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,Oe()).next(()=>s))}getLocalViewOfDocuments(e,n,s=Oe()){const i=Ns();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,s).next(r=>{let o=Mi();return r.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Ns();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,Oe()))}populateOverlays(e,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,i){let r=ts();const o=Hi(),a=Hi();return n.forEach((l,u)=>{const h=s.get(u.key);i.has(u.key)&&(h===void 0||h.mutation instanceof Ss)?r=r.insert(u.key,u):h!==void 0&&(o.set(u.key,h.mutation.getFieldMask()),qi(h.mutation,u,h.mutation.getFieldMask(),Lt.now()))}),this.recalculateAndSaveOverlays(e,r).next(l=>(l.forEach((u,h)=>o.set(u,h)),n.forEach((u,h)=>{var f;return a.set(u,new Cb(h,(f=o.get(u))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const s=Hi();let i=new Ut((o,a)=>o-a),r=Oe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let h=s.get(l)||Nn.empty();h=a.applyToLocalView(u,h),s.set(l,h);const f=(i.get(a.batchId)||Oe()).add(l);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,h=l.value,f=Um();h.forEach(d=>{if(!r.has(d)){const g=Nm(n.get(d),s.get(d));g!==null&&f.set(d,g),r=r.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,f))}return J.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(i){return ye.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):F1(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):J.resolve(Ns());let a=-1,l=r;return o.next(u=>J.forEach(u,(h,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),r.get(h)?J.resolve():this.getBaseDocument(e,h,f).next(d=>{l=l.insert(h,d)}))).next(()=>this.populateOverlays(e,u,r)).next(()=>this.computeViews(e,l,u,Oe())).next(h=>({batchId:a,changes:Mm(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ye(n)).next(s=>{let i=Mi();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const i=n.collectionGroup;let r=Mi();return this.indexManager.getCollectionParents(e,i).next(o=>J.forEach(o,a=>{const l=function(u,h){return new oa(h,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,s).next(u=>{u.forEach((h,f)=>{r=r.insert(h,f)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,s){let i;return this.remoteDocumentCache.getAllFromCollection(e,n.path,s).next(r=>(i=r,this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId))).next(r=>{r.forEach((a,l)=>{const u=l.getKey();i.get(u)===null&&(i=i.insert(u,en.newInvalidDocument(u)))});let o=Mi();return i.forEach((a,l)=>{const u=r.get(a);u!==void 0&&qi(u.mutation,l,Nn.empty(),Lt.now()),Eu(n,l)&&(o=o.insert(a,l))}),o})}getBaseDocument(e,n,s){return s===null||s.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):J.resolve(en.newInvalidDocument(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ab{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return J.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:xn(s.createTime)}),J.resolve()}getNamedQuery(e,n){return J.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(s){return{name:s.name,query:kb(s.bundledQuery),readTime:xn(s.readTime)}}(n)),J.resolve()}}/**
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
 */class Db{constructor(){this.overlays=new Ut(ye.comparator),this.es=new Map}getOverlay(e,n){return J.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Ns();return J.forEach(n,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((i,r)=>{this.ue(e,n,r)}),J.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.es.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.es.delete(s)),J.resolve()}getOverlaysForCollection(e,n,s){const i=Ns(),r=n.length+1,o=new ye(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===r&&l.largestBatchId>s&&i.set(l.getKey(),l)}return J.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new Ut((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let h=r.get(u.largestBatchId);h===null&&(h=Ns(),r=r.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=Ns(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,h)=>a.set(u,h)),!(a.size()>=i)););return J.resolve(a)}ue(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.es.get(i.largestBatchId).delete(s.key);this.es.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new bb(n,s));let r=this.es.get(n);r===void 0&&(r=Oe(),this.es.set(n,r)),this.es.set(n,r.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(){this.ns=new Mt(Ht.ss),this.rs=new Mt(Ht.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const s=new Ht(e,n);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.cs(new Ht(e,n))}hs(e,n){e.forEach(s=>this.removeReference(s,n))}ls(e){const n=new ye(new pt([])),s=new Ht(n,e),i=new Ht(n,e+1),r=[];return this.rs.forEachInRange([s,i],o=>{this.cs(o),r.push(o.key)}),r}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new ye(new pt([])),s=new Ht(n,e),i=new Ht(n,e+1);let r=Oe();return this.rs.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new Ht(e,0),s=this.ns.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Ht{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return ye.comparator(e.key,n.key)||ze(e._s,n._s)}static os(e,n){return ze(e._s,n._s)||ye.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rb{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new Mt(Ht.ss)}checkEmpty(e){return J.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new yb(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.gs=this.gs.add(new Ht(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return J.resolve(o)}lookupMutationBatch(e,n){return J.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.ps(s),r=i<0?0:i;return J.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return J.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return J.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Ht(n,0),i=new Ht(n,Number.POSITIVE_INFINITY),r=[];return this.gs.forEachInRange([s,i],o=>{const a=this.ys(o._s);r.push(a)}),J.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Mt(ze);return n.forEach(i=>{const r=new Ht(i,0),o=new Ht(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([r,o],a=>{s=s.add(a._s)})}),J.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;ye.isDocumentKey(r)||(r=r.child(""));const o=new Ht(new ye(r),0);let a=new Mt(ze);return this.gs.forEachWhile(l=>{const u=l.key.path;return!!s.isPrefixOf(u)&&(u.length===i&&(a=a.add(l._s)),!0)},o),J.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(s=>{const i=this.ys(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){at(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return J.forEach(n.mutations,i=>{const r=new Ht(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.gs=s})}An(e){}containsKey(e,n){const s=new Ht(n,0),i=this.gs.firstAfterOrEqual(s);return J.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,J.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pb{constructor(e){this.Es=e,this.docs=new Ut(ye.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Es(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return J.resolve(s?s.document.mutableCopy():en.newInvalidDocument(n))}getEntries(e,n){let s=ts();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():en.newInvalidDocument(i))}),J.resolve(s)}getAllFromCollection(e,n,s){let i=ts();const r=new ye(n.child("")),o=this.docs.getIteratorFrom(r);for(;o.hasNext();){const{key:a,value:{document:l}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||v1(_1(l),s)<=0||(i=i.insert(l.key,l.mutableCopy()))}return J.resolve(i)}getAllFromCollectionGroup(e,n,s,i){Se()}As(e,n){return J.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new Nb(this)}getSize(e){return J.resolve(this.size)}}class Nb extends Ib{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.Yn.addEntry(e,i)):this.Yn.removeEntry(s)}),J.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ob{constructor(e){this.persistence=e,this.Rs=new ki(n=>wu(n),ku),this.lastRemoteSnapshotVersion=Re.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Su,this.targetCount=0,this.vs=mi.Pn()}forEachTarget(e,n){return this.Rs.forEach((s,i)=>n(i)),J.resolve()}getLastRemoteSnapshotVersion(e){return J.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return J.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),J.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),J.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new mi(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,J.resolve()}updateTargetData(e,n){return this.Dn(n),J.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,J.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Rs.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),J.waitFor(r).next(()=>i)}getTargetCount(e){return J.resolve(this.targetCount)}getTargetData(e,n){const s=this.Rs.get(n)||null;return J.resolve(s)}addMatchingKeys(e,n,s){return this.Ps.us(n,s),J.resolve()}removeMatchingKeys(e,n,s){this.Ps.hs(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),J.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),J.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Ps.ds(n);return J.resolve(s)}containsKey(e,n){return J.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $b{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new yu(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new Ob(this),this.indexManager=new Eb,this.remoteDocumentCache=function(s){return new Pb(s)}(s=>this.referenceDelegate.xs(s)),this.It=new wb(n),this.Ns=new Ab(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Db,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Vs[e.toKey()];return s||(s=new Rb(n,this.referenceDelegate),this.Vs[e.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,s){pe("MemoryPersistence","Starting transaction:",e);const i=new Lb(this.Ss.next());return this.referenceDelegate.ks(),s(i).next(r=>this.referenceDelegate.Os(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Ms(e,n){return J.or(Object.values(this.Vs).map(s=>()=>s.containsKey(e,n)))}}class Lb extends b1{constructor(e){super(),this.currentSequenceNumber=e}}class Au{constructor(e){this.persistence=e,this.Fs=new Su,this.$s=null}static Bs(e){return new Au(e)}get Ls(){if(this.$s)return this.$s;throw Se()}addReference(e,n,s){return this.Fs.addReference(s,n),this.Ls.delete(s.toString()),J.resolve()}removeReference(e,n,s){return this.Fs.removeReference(s,n),this.Ls.add(s.toString()),J.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),J.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(i=>this.Ls.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.Ls.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return J.forEach(this.Ls,s=>{const i=ye.fromPath(s);return this.Us(e,i).next(r=>{r||n.removeEntry(i,Re.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.Us(e,n).next(s=>{s?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}Us(e,n){return J.or([()=>J.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.Si=s,this.Di=i}static Ci(e,n){let s=Oe(),i=Oe();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new Du(e,n.fromCache,s,i)}}/**
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
 */class Mb{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,s,i){return this.ki(e,n).next(r=>r||this.Oi(e,n,i,s)).next(r=>r||this.Mi(e,n))}ki(e,n){if(xc(n))return J.resolve(null);let s=es(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Il(n,null,"F"),s=es(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=Oe(...r);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(l=>{const u=this.Fi(n,a);return this.$i(n,u,o,l.readTime)?this.ki(e,Il(n,null,"F")):this.Bi(e,u,n,l)}))})))}Oi(e,n,s,i){return xc(n)||i.isEqual(Re.min())?this.Mi(e,n):this.Ni.getDocuments(e,s).next(r=>{const o=this.Fi(n,r);return this.$i(n,o,s,i)?this.Mi(e,n):(Bc()<=qe.DEBUG&&pe("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Cl(n)),this.Bi(e,o,n,g1(i,-1)))})}Fi(e,n){let s=new Mt(Im(e));return n.forEach((i,r)=>{Eu(e,r)&&(s=s.add(r))}),s}$i(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Mi(e,n){return Bc()<=qe.DEBUG&&pe("QueryEngine","Using full collection scan to execute query:",Cl(n)),this.Ni.getDocumentsMatchingQuery(e,n,ks.min())}Bi(e,n,s,i){return this.Ni.getDocumentsMatchingQuery(e,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ub{constructor(e,n,s,i){this.persistence=e,this.Li=n,this.It=i,this.Ui=new Ut(ze),this.qi=new ki(r=>wu(r),ku),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(s)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Sb(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ui))}}function Fb(t,e,n,s){return new Ub(t,e,n,s)}async function Gm(t,e){const n=Ae(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.Qi(e),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let l=Oe();for(const u of i){o.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}for(const u of r){a.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}return n.localDocuments.getDocuments(s,l).next(u=>({ji:u,removedBatchIds:o,addedBatchIds:a}))})})}function Vb(t,e){const n=Ae(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const h=l.batch,f=h.keys();let d=J.resolve();return f.forEach(g=>{d=d.next(()=>u.getEntry(a,g)).next(_=>{const v=l.docVersions.get(g);at(v!==null),_.version.compareTo(v)<0&&(h.applyToRemoteDocument(_,l),_.isValidDocument()&&(_.setReadTime(l.commitVersion),u.addEntry(_)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,h))}(n,s,e,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=Oe();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,i))})}function Wm(t){const e=Ae(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function Bb(t,e){const n=Ae(t),s=e.snapshotVersion;let i=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.Ui;const a=[];e.targetChanges.forEach((h,f)=>{const d=i.get(f);if(!d)return;a.push(n.Cs.removeMatchingKeys(r,h.removedDocuments,f).next(()=>n.Cs.addMatchingKeys(r,h.addedDocuments,f)));let g=d.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.has(f)?g=g.withResumeToken(pn.EMPTY_BYTE_STRING,Re.min()).withLastLimboFreeSnapshotVersion(Re.min()):h.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(h.resumeToken,s)),i=i.insert(f,g),function(_,v,b){return _.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-_.snapshotVersion.toMicroseconds()>=3e8?!0:b.addedDocuments.size+b.modifiedDocuments.size+b.removedDocuments.size>0}(d,g,h)&&a.push(n.Cs.updateTargetData(r,g))});let l=ts(),u=Oe();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,h))}),a.push(jb(r,o,e.documentUpdates).next(h=>{l=h.Wi,u=h.zi})),!s.isEqual(Re.min())){const h=n.Cs.getLastRemoteSnapshotVersion(r).next(f=>n.Cs.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(h)}return J.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,l,u)).next(()=>l)}).then(r=>(n.Ui=i,r))}function jb(t,e,n){let s=Oe(),i=Oe();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let o=ts();return n.forEach((a,l)=>{const u=r.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(Re.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):pe("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{Wi:o,zi:i}})}function qb(t,e){const n=Ae(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function Hb(t,e){const n=Ae(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Cs.getTargetData(s,e).next(r=>r?(i=r,J.resolve(i)):n.Cs.allocateTargetId(s).next(o=>(i=new $s(e,o,0,s.currentSequenceNumber),n.Cs.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.Ui.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(s.targetId,s),n.qi.set(e,s.targetId)),s})}async function Rl(t,e,n){const s=Ae(t),i=s.Ui.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Sr(o))throw o;pe("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ui=s.Ui.remove(e),s.qi.delete(i.target)}function ih(t,e,n){const s=Ae(t);let i=Re.min(),r=Oe();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const h=Ae(a),f=h.qi.get(u);return f!==void 0?J.resolve(h.Ui.get(f)):h.Cs.getTargetData(l,u)}(s,o,es(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{r=l})}).next(()=>s.Li.getDocumentsMatchingQuery(o,e,n?i:Re.min(),n?r:Oe())).next(a=>(Kb(s,V1(e),a),{documents:a,Hi:r})))}function Kb(t,e,n){let s=t.Ki.get(e)||Re.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),t.Ki.set(e,s)}class rh{constructor(){this.activeTargetIds=Fm()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class zb{constructor(){this.Lr=new rh,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,n,s){this.Ur[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new rh,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Gb{qr(e){}shutdown(){}}/**
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
 */class oh{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){pe("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){pe("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qb{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xb extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,s,i,r){const o=this.ho(e,n);pe("RestConnection","Sending: ",o,s);const a={};return this.lo(a,i,r),this.fo(e,o,a,s).then(l=>(pe("RestConnection","Received: ",l),l),l=>{throw wl("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",s),l})}_o(e,n,s,i,r,o){return this.ao(e,n,s,i,r)}lo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+wi,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>e[r]=i),s&&s.headers.forEach((i,r)=>e[r]=i)}ho(e,n){const s=Wb[e];return`${this.oo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,s,i){return new Promise((r,o)=>{const a=new o1;a.setWithCredentials(!0),a.listenOnce(s1.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case za.NO_ERROR:const u=a.getResponseJson();pe("Connection","XHR received:",JSON.stringify(u)),r(u);break;case za.TIMEOUT:pe("Connection",'RPC "'+e+'" timed out'),o(new be(X.DEADLINE_EXCEEDED,"Request time out"));break;case za.HTTP_ERROR:const h=a.getStatus();if(pe("Connection",'RPC "'+e+'" failed with status:',h,"response text:",a.getResponseText()),h>0){const f=a.getResponseJson().error;if(f&&f.status&&f.message){const d=function(g){const _=g.toLowerCase().replace(/_/g,"-");return Object.values(X).indexOf(_)>=0?_:X.UNKNOWN}(f.status);o(new be(d,f.message))}else o(new be(X.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new be(X.UNAVAILABLE,"Connection failed."));break;default:Se()}}finally{pe("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(i);a.send(n,"POST",l,s,15)})}wo(e,n,s){const i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=t1(),o=n1(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new r1({})),this.lo(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const l=i.join("");pe("Connection","Creating WebChannel: "+l,a);const u=r.createWebChannel(l,a);let h=!1,f=!1;const d=new Qb({Hr:_=>{f?pe("Connection","Not sending because WebChannel is closed:",_):(h||(pe("Connection","Opening WebChannel transport."),u.open(),h=!0),pe("Connection","WebChannel sending:",_),u.send(_))},Jr:()=>u.close()}),g=(_,v,b)=>{_.listen(v,E=>{try{b(E)}catch(C){setTimeout(()=>{throw C},0)}})};return g(u,Gr.EventType.OPEN,()=>{f||pe("Connection","WebChannel transport opened.")}),g(u,Gr.EventType.CLOSE,()=>{f||(f=!0,pe("Connection","WebChannel transport closed"),d.io())}),g(u,Gr.EventType.ERROR,_=>{f||(f=!0,wl("Connection","WebChannel transport errored:",_),d.io(new be(X.UNAVAILABLE,"The operation could not be completed")))}),g(u,Gr.EventType.MESSAGE,_=>{var v;if(!f){const b=_.data[0];at(!!b);const E=b,C=E.error||((v=E[0])===null||v===void 0?void 0:v.error);if(C){pe("Connection","WebChannel received error:",C);const O=C.status;let A=function($){const F=At[$];if(F!==void 0)return $m(F)}(O),H=C.message;A===void 0&&(A=X.INTERNAL,H="Unknown error status: "+O+" with message "+C.message),f=!0,d.io(new be(A,H)),u.close()}else pe("Connection","WebChannel received:",b),d.ro(b)}}),g(o,i1.STAT_EVENT,_=>{_.stat===Fc.PROXY?pe("Connection","Detected buffering proxy"):_.stat===Fc.NOPROXY&&pe("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}function Wa(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ha(t){return new ib(t,!0)}class Qm{constructor(e,n,s=1e3,i=1.5,r=6e4){this.Hs=e,this.timerId=n,this.mo=s,this.yo=i,this.po=r,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-s);i>0&&pe("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm{constructor(e,n,s,i,r,o,a,l){this.Hs=e,this.vo=s,this.Vo=i,this.So=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Do=0,this.Co=null,this.xo=null,this.stream=null,this.No=new Qm(e,n)}ko(){return this.state===1||this.state===5||this.Oo()}Oo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Mo()}async stop(){this.ko()&&await this.close(0)}Fo(){this.state=0,this.No.reset()}$o(){this.Oo()&&this.Co===null&&(this.Co=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.Bo()))}Lo(e){this.Uo(),this.stream.send(e)}async Bo(){if(this.Oo())return this.close(0)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}qo(){this.xo&&(this.xo.cancel(),this.xo=null)}async close(e,n){this.Uo(),this.qo(),this.No.cancel(),this.Do++,e!==4?this.No.reset():n&&n.code===X.RESOURCE_EXHAUSTED?(Zn(n.toString()),Zn("Using maximum backoff delay to prevent overloading the backend."),this.No.Ao()):n&&n.code===X.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Ko(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}Ko(){}auth(){this.state=1;const e=this.Go(this.Do),n=this.Do;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Do===n&&this.Qo(s,i)},s=>{e(()=>{const i=new be(X.UNKNOWN,"Fetching auth token failed: "+s.message);return this.jo(i)})})}Qo(e,n){const s=this.Go(this.Do);this.stream=this.Wo(e,n),this.stream.Yr(()=>{s(()=>(this.state=2,this.xo=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.Oo()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{s(()=>this.jo(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Mo(){this.state=5,this.No.Ro(async()=>{this.state=0,this.start()})}jo(e){return pe("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Go(e){return n=>{this.Hs.enqueueAndForget(()=>this.Do===e?n():(pe("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Yb extends xm{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.It=r}Wo(e,n){return this.So.wo("Listen",e,n)}onMessage(e){this.No.reset();const n=ab(this.It,e),s=function(i){if(!("targetChange"in i))return Re.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?Re.min():r.readTime?xn(r.readTime):Re.min()}(e);return this.listener.zo(n,s)}Ho(e){const n={};n.database=Dl(this.It),n.addTarget=function(i,r){let o;const a=r.target;return o=Tl(a)?{documents:cb(i,a)}:{query:hb(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=jm(i,r.resumeToken):r.snapshotVersion.compareTo(Re.min())>0&&(o.readTime=Ao(i,r.snapshotVersion.toTimestamp())),o}(this.It,e);const s=db(this.It,e);s&&(n.labels=s),this.Lo(n)}Jo(e){const n={};n.database=Dl(this.It),n.removeTarget=e,this.Lo(n)}}class Xb extends xm{constructor(e,n,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.It=r,this.Yo=!1}get Xo(){return this.Yo}start(){this.Yo=!1,this.lastStreamToken=void 0,super.start()}Ko(){this.Yo&&this.Zo([])}Wo(e,n){return this.So.wo("Write",e,n)}onMessage(e){if(at(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Yo){this.No.reset();const n=ub(e.writeResults,e.commitTime),s=xn(e.commitTime);return this.listener.tu(s,n)}return at(!e.writeResults||e.writeResults.length===0),this.Yo=!0,this.listener.eu()}nu(){const e={};e.database=Dl(this.It),this.Lo(e)}Zo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>lb(this.It,s))};this.Lo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jb extends class{}{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.So=s,this.It=i,this.su=!1}iu(){if(this.su)throw new be(X.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,s){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.So.ao(e,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===X.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new be(X.UNKNOWN,i.toString())})}_o(e,n,s,i){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.So._o(e,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===X.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new be(X.UNKNOWN,r.toString())})}terminate(){this.su=!0}}class Zb{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ru=0,this.ou=null,this.uu=!0}cu(){this.ru===0&&(this.au("Unknown"),this.ou=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ou=null,this.hu("Backend didn't respond within 10 seconds."),this.au("Offline"),Promise.resolve())))}lu(e){this.state==="Online"?this.au("Unknown"):(this.ru++,this.ru>=1&&(this.fu(),this.hu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.au("Offline")))}set(e){this.fu(),this.ru=0,e==="Online"&&(this.uu=!1),this.au(e)}au(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}hu(e){const n=`Could not reach Cloud Firestore backend. ${e}
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
 */class ew{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.du=[],this._u=new Map,this.wu=new Set,this.mu=[],this.gu=r,this.gu.qr(o=>{s.enqueueAndForget(async()=>{Qs(this)&&(pe("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=Ae(a);l.wu.add(4),await Rr(l),l.yu.set("Unknown"),l.wu.delete(4),await fa(l)}(this))})}),this.yu=new Zb(s,i)}}async function fa(t){if(Qs(t))for(const e of t.mu)await e(!0)}async function Rr(t){for(const e of t.mu)await e(!1)}function Ym(t,e){const n=Ae(t);n._u.has(e.targetId)||(n._u.set(e.targetId,e),Nu(n)?Pu(n):Ei(n).Oo()&&Ru(n,e))}function Xm(t,e){const n=Ae(t),s=Ei(n);n._u.delete(e),s.Oo()&&Jm(n,e),n._u.size===0&&(s.Oo()?s.$o():Qs(n)&&n.yu.set("Unknown"))}function Ru(t,e){t.pu.Mt(e.targetId),Ei(t).Ho(e)}function Jm(t,e){t.pu.Mt(e),Ei(t).Jo(e)}function Pu(t){t.pu=new tb({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t._u.get(e)||null}),Ei(t).start(),t.yu.cu()}function Nu(t){return Qs(t)&&!Ei(t).ko()&&t._u.size>0}function Qs(t){return Ae(t).wu.size===0}function Zm(t){t.pu=void 0}async function tw(t){t._u.forEach((e,n)=>{Ru(t,e)})}async function nw(t,e){Zm(t),Nu(t)?(t.yu.lu(e),Pu(t)):t.yu.set("Unknown")}async function sw(t,e,n){if(t.yu.set("Online"),e instanceof Bm&&e.state===2&&e.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s._u.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s._u.delete(o),s.pu.removeTarget(o))}(t,e)}catch(s){pe("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Do(t,s)}else if(e instanceof to?t.pu.Gt(e):e instanceof Vm?t.pu.Yt(e):t.pu.Wt(e),!n.isEqual(Re.min()))try{const s=await Wm(t.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.pu.te(r);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i._u.get(l);u&&i._u.set(l,u.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const l=i._u.get(a);if(!l)return;i._u.set(a,l.withResumeToken(pn.EMPTY_BYTE_STRING,l.snapshotVersion)),Jm(i,a);const u=new $s(l.target,a,1,l.sequenceNumber);Ru(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){pe("RemoteStore","Failed to raise snapshot:",s),await Do(t,s)}}async function Do(t,e,n){if(!Sr(e))throw e;t.wu.add(1),await Rr(t),t.yu.set("Offline"),n||(n=()=>Wm(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{pe("RemoteStore","Retrying IndexedDB access"),await n(),t.wu.delete(1),await fa(t)})}function eg(t,e){return e().catch(n=>Do(t,n,e))}async function da(t){const e=Ae(t),n=Ts(e);let s=e.du.length>0?e.du[e.du.length-1].batchId:-1;for(;iw(e);)try{const i=await qb(e.localStore,s);if(i===null){e.du.length===0&&n.$o();break}s=i.batchId,rw(e,i)}catch(i){await Do(e,i)}tg(e)&&ng(e)}function iw(t){return Qs(t)&&t.du.length<10}function rw(t,e){t.du.push(e);const n=Ts(t);n.Oo()&&n.Xo&&n.Zo(e.mutations)}function tg(t){return Qs(t)&&!Ts(t).ko()&&t.du.length>0}function ng(t){Ts(t).start()}async function ow(t){Ts(t).nu()}async function aw(t){const e=Ts(t);for(const n of t.du)e.Zo(n.mutations)}async function lw(t,e,n){const s=t.du.shift(),i=Cu.from(s,e,n);await eg(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await da(t)}async function uw(t,e){e&&Ts(t).Xo&&await async function(n,s){if(i=s.code,Y1(i)&&i!==X.ABORTED){const r=n.du.shift();Ts(n).Fo(),await eg(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await da(n)}var i}(t,e),tg(t)&&ng(t)}async function ah(t,e){const n=Ae(t);n.asyncQueue.verifyOperationInProgress(),pe("RemoteStore","RemoteStore received new credentials");const s=Qs(n);n.wu.add(3),await Rr(n),s&&n.yu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.wu.delete(3),await fa(n)}async function cw(t,e){const n=Ae(t);e?(n.wu.delete(2),await fa(n)):e||(n.wu.add(2),await Rr(n),n.yu.set("Unknown"))}function Ei(t){return t.Iu||(t.Iu=function(e,n,s){const i=Ae(e);return i.iu(),new Yb(n,i.So,i.authCredentials,i.appCheckCredentials,i.It,s)}(t.datastore,t.asyncQueue,{Yr:tw.bind(null,t),Zr:nw.bind(null,t),zo:sw.bind(null,t)}),t.mu.push(async e=>{e?(t.Iu.Fo(),Nu(t)?Pu(t):t.yu.set("Unknown")):(await t.Iu.stop(),Zm(t))})),t.Iu}function Ts(t){return t.Tu||(t.Tu=function(e,n,s){const i=Ae(e);return i.iu(),new Xb(n,i.So,i.authCredentials,i.appCheckCredentials,i.It,s)}(t.datastore,t.asyncQueue,{Yr:ow.bind(null,t),Zr:uw.bind(null,t),eu:aw.bind(null,t),tu:lw.bind(null,t)}),t.mu.push(async e=>{e?(t.Tu.Fo(),await da(t)):(await t.Tu.stop(),t.du.length>0&&(pe("RemoteStore",`Stopping write stream with ${t.du.length} pending writes`),t.du=[]))})),t.Tu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new vs,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new Ou(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new be(X.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function $u(t,e){if(Zn("AsyncQueue",`${e}: ${t}`),Sr(t))return new be(X.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e){this.comparator=e?(n,s)=>e(n,s)||ye.comparator(n.key,s.key):(n,s)=>ye.comparator(n.key,s.key),this.keyedMap=Mi(),this.sortedSet=new Ut(this.comparator)}static emptySet(e){return new ii(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ii)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new ii;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(){this.Eu=new Ut(ye.comparator)}track(e){const n=e.doc.key,s=this.Eu.get(n);s?e.type!==0&&s.type===3?this.Eu=this.Eu.insert(n,e):e.type===3&&s.type!==1?this.Eu=this.Eu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Eu=this.Eu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Eu=this.Eu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Eu=this.Eu.remove(n):e.type===1&&s.type===2?this.Eu=this.Eu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Eu=this.Eu.insert(n,{type:2,doc:e.doc}):Se():this.Eu=this.Eu.insert(n,e)}Au(){const e=[];return this.Eu.inorderTraversal((n,s)=>{e.push(s)}),e}}class gi{constructor(e,n,s,i,r,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,s,i,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new gi(e,n,ii.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&aa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hw{constructor(){this.Ru=void 0,this.listeners=[]}}class fw{constructor(){this.queries=new ki(e=>Tm(e),aa),this.onlineState="Unknown",this.bu=new Set}}async function dw(t,e){const n=Ae(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new hw),i)try{r.Ru=await n.onListen(s)}catch(o){const a=$u(o,`Initialization of query '${Cl(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,r),r.listeners.push(e),e.Pu(n.onlineState),r.Ru&&e.vu(r.Ru)&&Lu(n)}async function pw(t,e){const n=Ae(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function mw(t,e){const n=Ae(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.vu(i)&&(s=!0);o.Ru=i}}s&&Lu(n)}function gw(t,e,n){const s=Ae(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function Lu(t){t.bu.forEach(e=>{e.next()})}class _w{constructor(e,n,s){this.query=e,this.Vu=n,this.Su=!1,this.Du=null,this.onlineState="Unknown",this.options=s||{}}vu(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new gi(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Su?this.Cu(e)&&(this.Vu.next(e),n=!0):this.xu(e,this.onlineState)&&(this.Nu(e),n=!0),this.Du=e,n}onError(e){this.Vu.error(e)}Pu(e){this.onlineState=e;let n=!1;return this.Du&&!this.Su&&this.xu(this.Du,e)&&(this.Nu(this.Du),n=!0),n}xu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.ku||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Cu(e){if(e.docChanges.length>0)return!0;const n=this.Du&&this.Du.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Nu(e){e=gi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Su=!0,this.Vu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sg{constructor(e){this.key=e}}class ig{constructor(e){this.key=e}}class vw{constructor(e,n){this.query=e,this.Uu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=Oe(),this.mutatedKeys=Oe(),this.Gu=Im(e),this.Qu=new ii(this.Gu)}get ju(){return this.Uu}Wu(e,n){const s=n?n.zu:new lh,i=n?n.Qu:this.Qu;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,f)=>{const d=i.get(h),g=Eu(this.query,f)?f:null,_=!!d&&this.mutatedKeys.has(d.key),v=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let b=!1;d&&g?d.data.isEqual(g.data)?_!==v&&(s.track({type:3,doc:g}),b=!0):this.Hu(d,g)||(s.track({type:2,doc:g}),b=!0,(l&&this.Gu(g,l)>0||u&&this.Gu(g,u)<0)&&(a=!0)):!d&&g?(s.track({type:0,doc:g}),b=!0):d&&!g&&(s.track({type:1,doc:d}),b=!0,(l||u)&&(a=!0)),b&&(g?(o=o.add(g),r=v?r.add(h):r.delete(h)):(o=o.delete(h),r=r.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),r=r.delete(h.key),s.track({type:1,doc:h})}return{Qu:o,zu:s,$i:a,mutatedKeys:r}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const i=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const r=e.zu.Au();r.sort((u,h)=>function(f,d){const g=_=>{switch(_){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Se()}};return g(f)-g(d)}(u.type,h.type)||this.Gu(u.doc,h.doc)),this.Ju(s);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,l=a!==this.qu;return this.qu=a,r.length!==0||l?{snapshot:new gi(this.query,e.Qu,i,r,e.mutatedKeys,a===0,l,!1,!!s&&s.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}Pu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new lh,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.Uu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.Uu=this.Uu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Uu=this.Uu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=Oe(),this.Qu.forEach(s=>{this.Zu(s.key)&&(this.Ku=this.Ku.add(s.key))});const n=[];return e.forEach(s=>{this.Ku.has(s)||n.push(new ig(s))}),this.Ku.forEach(s=>{e.has(s)||n.push(new sg(s))}),n}tc(e){this.Uu=e.Hi,this.Ku=Oe();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return gi.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class yw{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class bw{constructor(e){this.key=e,this.nc=!1}}class ww{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new ki(a=>Tm(a),aa),this.rc=new Map,this.oc=new Set,this.uc=new Ut(ye.comparator),this.cc=new Map,this.ac=new Su,this.hc={},this.lc=new Map,this.fc=mi.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function kw(t,e){const n=Nw(t);let s,i;const r=n.ic.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.ec();else{const o=await Hb(n.localStore,es(e));n.isPrimaryClient&&Ym(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await Ew(n,e,s,a==="current",o.resumeToken)}return i}async function Ew(t,e,n,s,i){t._c=(f,d,g)=>async function(_,v,b,E){let C=v.view.Wu(b);C.$i&&(C=await ih(_.localStore,v.query,!1).then(({documents:H})=>v.view.Wu(H,C)));const O=E&&E.targetChanges.get(v.targetId),A=v.view.applyChanges(C,_.isPrimaryClient,O);return ch(_,v.targetId,A.Xu),A.snapshot}(t,f,d,g);const r=await ih(t.localStore,e,!0),o=new vw(e,r.Hi),a=o.Wu(r.documents),l=Dr.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);ch(t,n,u.Xu);const h=new yw(e,n,o);return t.ic.set(e,h),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),u.snapshot}async function Tw(t,e){const n=Ae(t),s=n.ic.get(e),i=n.rc.get(s.targetId);if(i.length>1)return n.rc.set(s.targetId,i.filter(r=>!aa(r,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Rl(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Xm(n.remoteStore,s.targetId),Pl(n,s.targetId)}).catch(Cr)):(Pl(n,s.targetId),await Rl(n.localStore,s.targetId,!0))}async function Iw(t,e,n){const s=Ow(t);try{const i=await function(r,o){const a=Ae(r),l=Lt.now(),u=o.reduce((d,g)=>d.add(g.key),Oe());let h,f;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let g=ts(),_=Oe();return a.Gi.getEntries(d,u).next(v=>{g=v,g.forEach((b,E)=>{E.isValidDocument()||(_=_.add(b))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,g)).next(v=>{h=v;const b=[];for(const E of o){const C=W1(E,h.get(E.key).overlayedDocument);C!=null&&b.push(new Ss(E.key,C,wm(C.value.mapValue),Ln.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,b,o)}).next(v=>{f=v;const b=v.applyToLocalDocumentSet(h,_);return a.documentOverlayCache.saveOverlays(d,v.batchId,b)})}).then(()=>({batchId:f.batchId,changes:Mm(h)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let l=r.hc[r.currentUser.toKey()];l||(l=new Ut(ze)),l=l.insert(o,a),r.hc[r.currentUser.toKey()]=l}(s,i.batchId,n),await Pr(s,i.changes),await da(s.remoteStore)}catch(i){const r=$u(i,"Failed to persist write");n.reject(r)}}async function rg(t,e){const n=Ae(t);try{const s=await Bb(n.localStore,e);e.targetChanges.forEach((i,r)=>{const o=n.cc.get(r);o&&(at(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.nc=!0:i.modifiedDocuments.size>0?at(o.nc):i.removedDocuments.size>0&&(at(o.nc),o.nc=!1))}),await Pr(n,s,e)}catch(s){await Cr(s)}}function uh(t,e,n){const s=Ae(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.ic.forEach((r,o)=>{const a=o.view.Pu(e);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=Ae(r);a.onlineState=o;let l=!1;a.queries.forEach((u,h)=>{for(const f of h.listeners)f.Pu(o)&&(l=!0)}),l&&Lu(a)}(s.eventManager,e),i.length&&s.sc.zo(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Cw(t,e,n){const s=Ae(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.cc.get(e),r=i&&i.key;if(r){let o=new Ut(ye.comparator);o=o.insert(r,en.newNoDocument(r,Re.min()));const a=Oe().add(r),l=new ca(Re.min(),new Map,new Mt(ze),o,a);await rg(s,l),s.uc=s.uc.remove(r),s.cc.delete(e),Mu(s)}else await Rl(s.localStore,e,!1).then(()=>Pl(s,e,n)).catch(Cr)}async function Sw(t,e){const n=Ae(t),s=e.batch.batchId;try{const i=await Vb(n.localStore,e);ag(n,s,null),og(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Pr(n,i)}catch(i){await Cr(i)}}async function Aw(t,e,n){const s=Ae(t);try{const i=await function(r,o){const a=Ae(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(h=>(at(h!==null),u=h.keys(),a.mutationQueue.removeMutationBatch(l,h))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(s.localStore,e);ag(s,e,n),og(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Pr(s,i)}catch(i){await Cr(i)}}function og(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function ag(t,e,n){const s=Ae(t);let i=s.hc[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(n?r.reject(n):r.resolve(),i=i.remove(e)),s.hc[s.currentUser.toKey()]=i}}function Pl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.rc.get(e))t.ic.delete(s),n&&t.sc.wc(s,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(s=>{t.ac.containsKey(s)||lg(t,s)})}function lg(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(Xm(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),Mu(t))}function ch(t,e,n){for(const s of n)s instanceof sg?(t.ac.addReference(s.key,e),Dw(t,s)):s instanceof ig?(pe("SyncEngine","Document no longer in limbo: "+s.key),t.ac.removeReference(s.key,e),t.ac.containsKey(s.key)||lg(t,s.key)):Se()}function Dw(t,e){const n=e.key,s=n.path.canonicalString();t.uc.get(n)||t.oc.has(s)||(pe("SyncEngine","New document in limbo: "+n),t.oc.add(s),Mu(t))}function Mu(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new ye(pt.fromString(e)),s=t.fc.next();t.cc.set(s,new bw(n)),t.uc=t.uc.insert(n,s),Ym(t.remoteStore,new $s(es(Em(n.path)),s,2,yu.at))}}async function Pr(t,e,n){const s=Ae(t),i=[],r=[],o=[];s.ic.isEmpty()||(s.ic.forEach((a,l)=>{o.push(s._c(l,e,n).then(u=>{if((u||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const h=Du.Ci(l.targetId,u);r.push(h)}}))}),await Promise.all(o),s.sc.zo(i),await async function(a,l){const u=Ae(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>J.forEach(l,f=>J.forEach(f.Si,d=>u.persistence.referenceDelegate.addReference(h,f.targetId,d)).next(()=>J.forEach(f.Di,d=>u.persistence.referenceDelegate.removeReference(h,f.targetId,d)))))}catch(h){if(!Sr(h))throw h;pe("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const f=h.targetId;if(!h.fromCache){const d=u.Ui.get(f),g=d.snapshotVersion,_=d.withLastLimboFreeSnapshotVersion(g);u.Ui=u.Ui.insert(f,_)}}}(s.localStore,r))}async function Rw(t,e){const n=Ae(t);if(!n.currentUser.isEqual(e)){pe("SyncEngine","User change. New user:",e.toKey());const s=await Gm(n.localStore,e);n.currentUser=e,function(i,r){i.lc.forEach(o=>{o.forEach(a=>{a.reject(new be(X.CANCELLED,r))})}),i.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Pr(n,s.ji)}}function Pw(t,e){const n=Ae(t),s=n.cc.get(e);if(s&&s.nc)return Oe().add(s.key);{let i=Oe();const r=n.rc.get(e);if(!r)return i;for(const o of r){const a=n.ic.get(o);i=i.unionWith(a.view.ju)}return i}}function Nw(t){const e=Ae(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=rg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Pw.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Cw.bind(null,e),e.sc.zo=mw.bind(null,e.eventManager),e.sc.wc=gw.bind(null,e.eventManager),e}function Ow(t){const e=Ae(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Sw.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Aw.bind(null,e),e}class $w{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=ha(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return Fb(this.persistence,new Mb,e.initialUser,this.It)}yc(e){return new $b(Au.Bs,this.It)}gc(e){return new zb}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Lw{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>uh(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Rw.bind(null,this.syncEngine),await cw(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new fw}createDatastore(e){const n=ha(e.databaseInfo.databaseId),s=(i=e.databaseInfo,new xb(i));var i;return function(r,o,a,l){return new Jb(r,o,a,l)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,i=e.asyncQueue,r=a=>uh(this.syncEngine,a,0),o=oh.C()?new oh:new Gb,new ew(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(e,n){return function(s,i,r,o,a,l,u){const h=new ww(s,i,r,o,a,l);return u&&(h.dc=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=Ae(e);pe("RemoteStore","RemoteStore shutting down."),n.wu.add(5),await Rr(n),n.gu.shutdown(),n.yu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ug(t,e,n){if(!n)throw new be(X.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Mw(t,e,n,s){if(e===!0&&s===!0)throw new be(X.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function hh(t){if(!ye.isDocumentKey(t))throw new be(X.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function fh(t){if(ye.isDocumentKey(t))throw new be(X.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Uu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Se()}function Hs(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new be(X.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Uu(t);throw new be(X.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dh=new Map;class ph{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new be(X.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new be(X.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Mw("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ph({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new be(X.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new be(X.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ph(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new a1;switch(n.type){case"gapi":const s=n.client;return new h1(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new be(X.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=dh.get(e);n&&(pe("ComponentProvider","Removing Datastore"),dh.delete(e),n.terminate())}(this),Promise.resolve()}}function Uw(t,e,n,s={}){var i;const r=(t=Hs(t,pa))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==e&&wl("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=ln.MOCK_USER;else{o=Gv(s.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=s.mockUserToken.sub||s.mockUserToken.user_id;if(!l)throw new be(X.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new ln(l)}t._authCredentials=new l1(new gm(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ys(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new On(this.firestore,e,this._key)}}class ma{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new ma(this.firestore,e,this._query)}}class ys extends ma{constructor(e,n,s){super(e,n,Em(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new On(this.firestore,null,new ye(e))}withConverter(e){return new ys(this.firestore,e,this._path)}}function ns(t,e,...n){if(t=gn(t),ug("collection","path",e),t instanceof pa){const s=pt.fromString(e,...n);return fh(s),new ys(t,null,s)}{if(!(t instanceof On||t instanceof ys))throw new be(X.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(pt.fromString(e,...n));return fh(s),new ys(t.firestore,null,s)}}function ss(t,e,...n){if(t=gn(t),arguments.length===1&&(e=_m.R()),ug("doc","path",e),t instanceof pa){const s=pt.fromString(e,...n);return hh(s),new On(t,null,new ye(s))}{if(!(t instanceof On||t instanceof ys))throw new be(X.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(pt.fromString(e,...n));return hh(s),new On(t.firestore,t instanceof ys?t.converter:null,new ye(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Fw{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):Zn("Uncaught Error in snapshot listener:",e)}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vw{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=ln.UNAUTHENTICATED,this.clientId=_m.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{pe("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(pe("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new be(X.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new vs;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=$u(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Bw(t,e){t.asyncQueue.verifyOperationInProgress(),pe("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await Gm(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function jw(t,e){t.asyncQueue.verifyOperationInProgress();const n=await qw(t);pe("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(i=>ah(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,r)=>ah(e.remoteStore,r)),t.onlineComponents=e}async function qw(t){return t.offlineComponents||(pe("FirestoreClient","Using default OfflineComponentProvider"),await Bw(t,new $w)),t.offlineComponents}async function cg(t){return t.onlineComponents||(pe("FirestoreClient","Using default OnlineComponentProvider"),await jw(t,new Lw)),t.onlineComponents}function Hw(t){return cg(t).then(e=>e.syncEngine)}async function Kw(t){const e=await cg(t),n=e.eventManager;return n.onListen=kw.bind(null,e.syncEngine),n.onUnlisten=Tw.bind(null,e.syncEngine),n}function zw(t,e,n={}){const s=new vs;return t.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,l){const u=new Fw({next:f=>{r.enqueueAndForget(()=>pw(i,h)),f.fromCache&&a.source==="server"?l.reject(new be(X.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(f)},error:f=>l.reject(f)}),h=new _w(o,u,{includeMetadataChanges:!0,ku:!0});return dw(i,h)}(await Kw(t),t.asyncQueue,e,n,s)),s.promise}class Gw{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.No=new Qm(this,"async_queue_retry"),this.Wc=()=>{const n=Wa();n&&pe("AsyncQueue","Visibility state changed to "+n.visibilityState),this.No.Po()};const e=Wa();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.Uc){this.Uc=!0,this.Qc=e||!1;const n=Wa();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.Uc)return new Promise(()=>{});const n=new vs;return this.Hc(()=>this.Uc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.No.reset()}catch(e){if(!Sr(e))throw e;pe("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.No.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(s=>{this.Kc=s,this.Gc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw Zn("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Gc=!1,s))));return this.Bc=n,n}enqueueAfterDelay(e,n,s){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const i=Ou.createAndSchedule(this,e,n,s,r=>this.Yc(r));return this.qc.push(i),i}zc(){this.Kc&&Se()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.qc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.qc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.qc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.qc.indexOf(e);this.qc.splice(n,1)}}class Nr extends pa{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=new Gw,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||fg(this),this._firestoreClient.terminate()}}function Ww(t,e){const n=typeof t=="object"?t:hp(),s=typeof t=="string"?t:e||"(default)",i=Yl(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=Hv("firestore");r&&Uw(i,...r)}return i}function hg(t){return t._firestoreClient||fg(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function fg(t){var e;const n=t._freezeSettings(),s=function(i,r,o,a){return new k1(i,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Vw(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class _i{constructor(e){this._byteString=e}static fromBase64String(e){try{return new _i(pn.fromBase64String(e))}catch(n){throw new be(X.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new _i(pn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new be(X.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new un(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new be(X.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new be(X.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ze(this._lat,e._lat)||ze(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qw=/^__.*__$/;class xw{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Ss(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ar(e,this.data,n,this.fieldTransforms)}}class dg{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new Ss(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function pg(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Se()}}class Bu{constructor(e,n,s,i,r,o){this.settings=e,this.databaseId=n,this.It=s,this.ignoreUndefinedProperties=i,r===void 0&&this.na(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new Bu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:s,oa:!1});return i.ua(e),i}ca(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:s,oa:!1});return i.na(),i}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return Ro(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(pg(this.sa)&&Qw.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class Yw{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.It=s||ha(e)}da(e,n,s,i=!1){return new Bu({sa:e,methodName:n,fa:s,path:un.emptyPath(),oa:!1,la:i},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function mg(t){const e=t._freezeSettings(),n=ha(t._databaseId);return new Yw(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Xw(t,e,n,s,i,r={}){const o=t.da(r.merge||r.mergeFields?2:0,e,n,i);ju("Data must be an object, but it was:",o,s);const a=gg(s,o);let l,u;if(r.merge)l=new Nn(o.fieldMask),u=o.fieldTransforms;else if(r.mergeFields){const h=[];for(const f of r.mergeFields){const d=Nl(e,f,n);if(!o.contains(d))throw new be(X.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);vg(h,d)||h.push(d)}l=new Nn(h),u=o.fieldTransforms.filter(f=>l.covers(f.field))}else l=null,u=o.fieldTransforms;return new xw(new kn(a),l,u)}class _a extends Fu{_toFieldTransform(e){if(e.sa!==2)throw e.sa===1?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof _a}}function Jw(t,e,n,s){const i=t.da(1,e,n);ju("Data must be an object, but it was:",i,s);const r=[],o=kn.empty();Ws(s,(l,u)=>{const h=qu(e,l,n);u=gn(u);const f=i.ca(h);if(u instanceof _a)r.push(h);else{const d=va(u,f);d!=null&&(r.push(h),o.set(h,d))}});const a=new Nn(r);return new dg(o,a,i.fieldTransforms)}function Zw(t,e,n,s,i,r){const o=t.da(1,e,n),a=[Nl(e,s,n)],l=[i];if(r.length%2!=0)throw new be(X.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<r.length;d+=2)a.push(Nl(e,r[d])),l.push(r[d+1]);const u=[],h=kn.empty();for(let d=a.length-1;d>=0;--d)if(!vg(u,a[d])){const g=a[d];let _=l[d];_=gn(_);const v=o.ca(g);if(_ instanceof _a)u.push(g);else{const b=va(_,v);b!=null&&(u.push(g),h.set(g,b))}}const f=new Nn(u);return new dg(h,f,o.fieldTransforms)}function va(t,e){if(_g(t=gn(t)))return ju("Unsupported field value:",e,t),gg(t,e);if(t instanceof Fu)return function(n,s){if(!pg(s.sa))throw s.ha(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ha(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=va(o,s.aa(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(t,e)}return function(n,s){if((n=gn(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return j1(s.It,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Lt.fromDate(n);return{timestampValue:Ao(s.It,i)}}if(n instanceof Lt){const i=new Lt(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Ao(s.It,i)}}if(n instanceof Vu)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof _i)return{bytesValue:jm(s.It,n._byteString)};if(n instanceof On){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s.ha(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Iu(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ha(`Unsupported field value: ${Uu(n)}`)}(t,e)}function gg(t,e){const n={};return vm(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ws(t,(s,i)=>{const r=va(i,e.ra(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function _g(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Lt||t instanceof Vu||t instanceof _i||t instanceof On||t instanceof Fu)}function ju(t,e,n){if(!_g(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Uu(n);throw s==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+s)}}function Nl(t,e,n){if((e=gn(e))instanceof ga)return e._internalPath;if(typeof e=="string")return qu(t,e);throw Ro("Field path arguments must be of type string or ",t,!1,void 0,n)}const ek=new RegExp("[~\\*/\\[\\]]");function qu(t,e,n){if(e.search(ek)>=0)throw Ro(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ga(...e.split("."))._internalPath}catch{throw Ro(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ro(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${s}`),o&&(l+=` in document ${i}`),l+=")"),new be(X.INVALID_ARGUMENT,a+t+l)}function vg(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new On(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new tk(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(bg("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class tk extends yg{data(){return super.data()}}function bg(t,e){return typeof e=="string"?qu(t,e):e instanceof ga?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nk(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new be(X.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sk{convertValue(e,n="none"){switch(qs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Dt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(di(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Se()}}convertObject(e,n){const s={};return Ws(e.fields,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(e){return new Vu(Dt(e.latitude),Dt(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=bm(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Zi(e));default:return null}}convertTimestamp(e){const n=Es(e);return new Lt(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=pt.fromString(e);at(zm(s));const i=new er(s.get(1),s.get(3)),r=new ye(s.popFirst(5));return i.isEqual(n)||Zn(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ik(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class rk extends yg{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new no(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(bg("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class no extends rk{data(e={}){return super.data(e)}}class ok{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new xr(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new no(this._firestore,this._userDataWriter,s.key,s,new xr(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new be(X.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>({type:"added",doc:new no(s._firestore,s._userDataWriter,o.doc.key,o.doc,new xr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter),oldIndex:-1,newIndex:r++}))}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new no(s._firestore,s._userDataWriter,o.doc.key,o.doc,new xr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,u=-1;return o.type!==0&&(l=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),u=r.indexOf(o.doc.key)),{type:ak(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function ak(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Se()}}class lk extends sk{constructor(e){super(),this.firestore=e}convertBytes(e){return new _i(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new On(this.firestore,null,n)}}function ya(t){t=Hs(t,ma);const e=Hs(t.firestore,Nr),n=hg(e),s=new lk(e);return nk(t._query),zw(n,t._query).then(i=>new ok(e,s,t,i))}function ba(t,e,n,...s){t=Hs(t,On);const i=Hs(t.firestore,Nr),r=mg(i);let o;return o=typeof(e=gn(e))=="string"||e instanceof ga?Zw(r,"updateDoc",t._key,e,n,s):Jw(r,"updateDoc",t._key,e),Hu(i,[o.toMutation(t._key,Ln.exists(!0))])}function wa(t){return Hu(Hs(t.firestore,Nr),[new Tu(t._key,Ln.none())])}function rr(t,e){const n=Hs(t.firestore,Nr),s=ss(t),i=ik(t.converter,e);return Hu(n,[Xw(mg(t.firestore),"addDoc",s._key,i,t.converter!==null,{}).toMutation(s._key,Ln.exists(!1))]).then(()=>s)}function Hu(t,e){return function(n,s){const i=new vs;return n.asyncQueue.enqueueAndForget(async()=>Iw(await Hw(n),s,i)),i.promise}(hg(t),e)}(function(t,e=!0){(function(n){wi=n})(gr),ci(new Vs("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new Nr(new u1(n.getProvider("auth-internal")),new d1(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new be(X.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new er(a.options.projectId,l)}(r,s),r);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),_s(Vc,"3.7.1",t),_s(Vc,"3.7.1","esm2017")})();const wg="/to-deploy-mh/assets/schedule.20f01954.png";function kg(t){const e=t-1;return e*e*e+1}function Po(t){return t===0||t===1?t:t<.5?.5*Math.pow(2,20*t-10):-.5*Math.pow(2,10-t*20)+1}function No(t,{delay:e=0,duration:n=400,easing:s=Id}={}){const i=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:s,css:r=>`opacity: ${r*i}`}}function Oo(t,{delay:e=0,duration:n=400,easing:s=kg,x:i=0,y:r=0,opacity:o=0}={}){const a=getComputedStyle(t),l=+a.opacity,u=a.transform==="none"?"":a.transform,h=l*(1-o);return{delay:e,duration:n,easing:s,css:(f,d)=>`
			transform: ${u} translate(${(1-f)*i}px, ${(1-f)*r}px);
			opacity: ${l-h*d}`}}function $o(t,{delay:e=0,duration:n=400,easing:s=kg,start:i=0,opacity:r=0}={}){const o=getComputedStyle(t),a=+o.opacity,l=o.transform==="none"?"":o.transform,u=1-i,h=a*(1-r);return{delay:e,duration:n,easing:s,css:(f,d)=>`
			transform: ${l} scale(${1-u*d});
			opacity: ${a-h*d}
		`}}const wt=tn(""),Ol=tn([]),Eg=tn([]),ct=tn({typeContact:"",name:"",lastname:"",lastContact:"",telephon:"",email:"",selecMC:"",propCont:"",comContact:"",rangeProp:"",contMode:"",budget:"",numBeds:"",numBaths:"",halfBathroom:"",numParks:"",modePay:"",selecTP:"",contactType:"",contactStage:"",createdAt:"",locaProperty:[],tagsProperty:[],sendedProperties:[]}),ot=tn({typeProperty:"",typeSaller:"",claveEB:"",claveMH:"",createdAt:"",nameProperty:"",price:"",beds:"",bathroom:"",halfBathroom:"",park:"",areaBuilding:"",areaTotal:"",description:"",urlImage:"",urlProp:"",urlSinergy:"",colonia:"",selecTP:"",selecTO:"",typeOperation:"",tagsProperty:[],locaProperty:[],binnacle:[]}),Dn=tn({task:"",isComplete:"",createdAt:"",endTask:"",timeTask:"",notes:"",user:""});var uk="firebase",ck="9.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_s(uk,ck,"app");function Ku(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function Tg(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const hk=Tg,Ig=new pr("auth","Firebase",Tg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mh=new Ql("@firebase/auth");function so(t,...e){mh.logLevel<=qe.ERROR&&mh.error(`Auth (${gr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mn(t,...e){throw zu(t,...e)}function Bn(t,...e){return zu(t,...e)}function fk(t,e,n){const s=Object.assign(Object.assign({},hk()),{[e]:n});return new pr("auth","Firebase",s).create(e,{appName:t.name})}function zu(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Ig.create(t,...e)}function Ee(t,e,...n){if(!t)throw zu(e,...n)}function Wn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw so(e),new Error(e)}function is(t,e){t||Wn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gh=new Map;function Qn(t){is(t instanceof Function,"Expected a class definition");let e=gh.get(t);return e?(is(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,gh.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dk(t,e){const n=Yl(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(po(r,e!=null?e:{}))return i;Mn(i,"already-initialized")}return n.initialize({options:e})}function pk(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Qn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $l(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function mk(){return _h()==="http:"||_h()==="https:"}function _h(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(mk()||$v()||"connection"in navigator)?navigator.onLine:!0}function _k(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(e,n){this.shortDelay=e,this.longDelay=n,is(n>e,"Short delay should be less than long delay!"),this.isMobile=Ov()||Lv()}get(){return gk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gu(t,e){is(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Wn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Wn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Wn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yk=new Or(3e4,6e4);function $r(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Lr(t,e,n,s,i={}){return Sg(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=mr(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Cg.fetch()(Ag(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function Sg(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},vk),e);try{const i=new bk(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Yr(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Yr(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Yr(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Yr(t,"user-disabled",o);const h=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw fk(t,h,u);Mn(t,h)}}catch(i){if(i instanceof rs)throw i;Mn(t,"network-request-failed")}}async function Mr(t,e,n,s,i={}){const r=await Lr(t,e,n,s,i);return"mfaPendingCredential"in r&&Mn(t,"multi-factor-auth-required",{_serverResponse:r}),r}function Ag(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?Gu(t.config,i):`${t.config.apiScheme}://${i}`}class bk{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Bn(this.auth,"network-request-failed")),yk.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Yr(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=Bn(t,e,s);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wk(t,e){return Lr(t,"POST","/v1/accounts:delete",e)}async function kk(t,e){return Lr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ki(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ek(t,e=!1){const n=gn(t),s=await n.getIdToken(e),i=Wu(s);Ee(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Ki(Qa(i.auth_time)),issuedAtTime:Ki(Qa(i.iat)),expirationTime:Ki(Qa(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Qa(t){return Number(t)*1e3}function Wu(t){var e;const[n,s,i]=t.split(".");if(n===void 0||s===void 0||i===void 0)return so("JWT malformed, contained fewer than 3 sections"),null;try{const r=rp(s);return r?JSON.parse(r):(so("Failed to decode base64 JWT payload"),null)}catch(r){return so("Caught error parsing JWT payload as JSON",(e=r)===null||e===void 0?void 0:e.toString()),null}}function Tk(t){const e=Wu(t);return Ee(e,"internal-error"),Ee(typeof e.exp<"u","internal-error"),Ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function or(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof rs&&Ik(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function Ik({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ck{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dg{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ki(this.lastLoginAt),this.creationTime=Ki(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Lo(t){var e;const n=t.auth,s=await t.getIdToken(),i=await or(t,kk(n,{idToken:s}));Ee(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?Dk(r.providerUserInfo):[],a=Ak(t.providerData,o),l=t.isAnonymous,u=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),h=l?u:!1,f={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Dg(r.createdAt,r.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function Sk(t){const e=gn(t);await Lo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ak(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function Dk(t){return t.map(e=>{var{providerId:n}=e,s=Ku(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rk(t,e){const n=await Sg(t,{},async()=>{const s=mr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=Ag(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Cg.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ee(e.idToken,"internal-error"),Ee(typeof e.idToken<"u","internal-error"),Ee(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Tk(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return Ee(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await Rk(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new ar;return s&&(Ee(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(Ee(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(Ee(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ar,this.toJSON())}_performRefresh(){return Wn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function as(t,e){Ee(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ls{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=Ku(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ck(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Dg(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await or(this,this.stsTokenManager.getToken(this.auth,e));return Ee(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Ek(this,e)}reload(){return Sk(this)}_assign(e){this!==e&&(Ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Ls(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){Ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Lo(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await or(this,wk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,u,h;const f=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,g=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,b=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,E=(u=n.createdAt)!==null&&u!==void 0?u:void 0,C=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:O,emailVerified:A,isAnonymous:H,providerData:$,stsTokenManager:F}=n;Ee(O&&F,e,"internal-error");const G=ar.fromJSON(this.name,F);Ee(typeof O=="string",e,"internal-error"),as(f,e.name),as(d,e.name),Ee(typeof A=="boolean",e,"internal-error"),Ee(typeof H=="boolean",e,"internal-error"),as(g,e.name),as(_,e.name),as(v,e.name),as(b,e.name),as(E,e.name),as(C,e.name);const R=new Ls({uid:O,auth:e,email:d,emailVerified:A,displayName:f,isAnonymous:H,photoURL:_,phoneNumber:g,tenantId:v,stsTokenManager:G,createdAt:E,lastLoginAt:C});return $&&Array.isArray($)&&(R.providerData=$.map(L=>Object.assign({},L))),b&&(R._redirectEventId=b),R}static async _fromIdTokenResponse(e,n,s=!1){const i=new ar;i.updateFromServerResponse(n);const r=new Ls({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Lo(r),r}}/**
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
 */class Rg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Rg.type="NONE";const vh=Rg;/**
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
 */function io(t,e,n){return`firebase:${t}:${e}:${n}`}class ri{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=io(this.userKey,i.apiKey,r),this.fullPersistenceKey=io("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ls._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new ri(Qn(vh),e,s);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let r=i[0]||Qn(vh);const o=io(s,e.config.apiKey,e.name);let a=null;for(const u of n)try{const h=await u._get(o);if(h){const f=Ls._fromJSON(e,h);u!==r&&(a=f),r=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new ri(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==r)try{await u._remove(o)}catch{}})),new ri(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yh(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Og(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Pg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Lg(e))return"Blackberry";if(Mg(e))return"Webos";if(Qu(e))return"Safari";if((e.includes("chrome/")||Ng(e))&&!e.includes("edge/"))return"Chrome";if($g(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Pg(t=dn()){return/firefox\//i.test(t)}function Qu(t=dn()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ng(t=dn()){return/crios\//i.test(t)}function Og(t=dn()){return/iemobile/i.test(t)}function $g(t=dn()){return/android/i.test(t)}function Lg(t=dn()){return/blackberry/i.test(t)}function Mg(t=dn()){return/webos/i.test(t)}function ka(t=dn()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Pk(t=dn()){var e;return ka(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Nk(){return Mv()&&document.documentMode===10}function Ug(t=dn()){return ka(t)||$g(t)||Mg(t)||Lg(t)||/windows phone/i.test(t)||Og(t)}function Ok(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fg(t,e=[]){let n;switch(t){case"Browser":n=yh(dn());break;case"Worker":n=`${yh(dn())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${gr}/${s}`}/**
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
 */class $k{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const s=[];try{for(const i of this.queue)await i(e),i.onAbort&&s.push(i.onAbort)}catch(i){s.reverse();for(const r of s)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lk{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new bh(this),this.idTokenSubscription=new bh(this),this.beforeStateQueue=new $k(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ig,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Qn(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await ri.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await Lo(e)}catch(s){if(((n=s)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=_k()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?gn(e):null;return n&&Ee(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Qn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new pr("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Qn(e)||this._popupRedirectResolver;Ee(n,this,"argument-error"),this.redirectPersistenceManager=await ri.create(this,[Qn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return Ee(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Fg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function Ur(t){return gn(t)}class bh{constructor(e){this.auth=e,this.observer=null,this.addObserver=Xv(n=>this.observer=n)}get next(){return Ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Mk(t,e,n){const s=Ur(t);Ee(s._canInitEmulator,s,"emulator-config-failed"),Ee(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),r=Vg(e),{host:o,port:a}=Uk(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Fk()}function Vg(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Uk(t){const e=Vg(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:wh(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:wh(o)}}}function wh(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Fk(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Wn("not implemented")}_getIdTokenResponse(e){return Wn("not implemented")}_linkToIdToken(e,n){return Wn("not implemented")}_getReauthenticationResolver(e){return Wn("not implemented")}}async function Vk(t,e){return Lr(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bk(t,e){return Mr(t,"POST","/v1/accounts:signInWithPassword",$r(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jk(t,e){return Mr(t,"POST","/v1/accounts:signInWithEmailLink",$r(t,e))}async function qk(t,e){return Mr(t,"POST","/v1/accounts:signInWithEmailLink",$r(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr extends xu{constructor(e,n,s,i=null){super("password",s),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new lr(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new lr(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Bk(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return jk(e,{email:this._email,oobCode:this._password});default:Mn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Vk(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return qk(e,{idToken:n,email:this._email,oobCode:this._password});default:Mn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oi(t,e){return Mr(t,"POST","/v1/accounts:signInWithIdp",$r(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hk="http://localhost";class Ks extends xu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ks(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Mn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=Ku(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new Ks(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return oi(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,oi(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,oi(e,n)}buildRequest(){const e={requestUri:Hk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=mr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kk(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function zk(t){const e=Ni(Oi(t)).link,n=e?Ni(Oi(e)).deep_link_id:null,s=Ni(Oi(t)).deep_link_id;return(s?Ni(Oi(s)).link:null)||s||n||e||t}class Yu{constructor(e){var n,s,i,r,o,a;const l=Ni(Oi(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,h=(s=l.oobCode)!==null&&s!==void 0?s:null,f=Kk((i=l.mode)!==null&&i!==void 0?i:null);Ee(u&&h&&f,"argument-error"),this.apiKey=u,this.operation=f,this.code=h,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=zk(e);try{return new Yu(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(){this.providerId=Ti.PROVIDER_ID}static credential(e,n){return lr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Yu.parseLink(n);return Ee(s,"argument-error"),lr._fromEmailAndCode(e,s.code,s.tenantId)}}Ti.PROVIDER_ID="password";Ti.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ti.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Fr extends Bg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs extends Fr{constructor(){super("facebook.com")}static credential(e){return Ks._fromParams({providerId:cs.PROVIDER_ID,signInMethod:cs.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return cs.credentialFromTaggedObject(e)}static credentialFromError(e){return cs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return cs.credential(e.oauthAccessToken)}catch{return null}}}cs.FACEBOOK_SIGN_IN_METHOD="facebook.com";cs.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs extends Fr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ks._fromParams({providerId:hs.PROVIDER_ID,signInMethod:hs.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return hs.credentialFromTaggedObject(e)}static credentialFromError(e){return hs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return hs.credential(n,s)}catch{return null}}}hs.GOOGLE_SIGN_IN_METHOD="google.com";hs.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs extends Fr{constructor(){super("github.com")}static credential(e){return Ks._fromParams({providerId:fs.PROVIDER_ID,signInMethod:fs.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fs.credentialFromTaggedObject(e)}static credentialFromError(e){return fs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fs.credential(e.oauthAccessToken)}catch{return null}}}fs.GITHUB_SIGN_IN_METHOD="github.com";fs.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds extends Fr{constructor(){super("twitter.com")}static credential(e,n){return Ks._fromParams({providerId:ds.PROVIDER_ID,signInMethod:ds.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ds.credentialFromTaggedObject(e)}static credentialFromError(e){return ds.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return ds.credential(n,s)}catch{return null}}}ds.TWITTER_SIGN_IN_METHOD="twitter.com";ds.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gk(t,e){return Mr(t,"POST","/v1/accounts:signUp",$r(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await Ls._fromIdTokenResponse(e,s,i),o=kh(s);return new zs({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=kh(s);return new zs({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function kh(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo extends rs{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Mo.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new Mo(e,n,s,i)}}function jg(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Mo._fromErrorAndOperation(t,r,e,s):r})}async function Wk(t,e,n=!1){const s=await or(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return zs._forOperation(t,"link",s)}/**
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
 */async function Qk(t,e,n=!1){var s;const{auth:i}=t,r="reauthenticate";try{const o=await or(t,jg(i,r,e,t),n);Ee(o.idToken,i,"internal-error");const a=Wu(o.idToken);Ee(a,i,"internal-error");const{sub:l}=a;return Ee(t.uid===l,i,"user-mismatch"),zs._forOperation(t,r,o)}catch(o){throw((s=o)===null||s===void 0?void 0:s.code)==="auth/user-not-found"&&Mn(i,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qg(t,e,n=!1){const s="signIn",i=await jg(t,s,e),r=await zs._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}async function xk(t,e){return qg(Ur(t),e)}async function Yk(t,e,n){const s=Ur(t),i=await Gk(s,{returnSecureToken:!0,email:e,password:n}),r=await zs._fromIdTokenResponse(s,"signIn",i);return await s._updateCurrentUser(r.user),r}function Xk(t,e,n){return xk(gn(t),Ti.credential(e,n))}function Jk(t,e,n,s){return gn(t).onIdTokenChanged(e,n,s)}function Zk(t,e,n){return gn(t).beforeAuthStateChanged(e,n)}const Uo="__sak";/**
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
 */class Hg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Uo,"1"),this.storage.removeItem(Uo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eE(){const t=dn();return Qu(t)||ka(t)}const tE=1e3,nE=10;class Kg extends Hg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=eE()&&Ok(),this.fallbackToPolling=Ug(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);Nk()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,nE):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},tE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Kg.type="LOCAL";const sE=Kg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg extends Hg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}zg.type="SESSION";const Gg=zg;/**
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
 */function iE(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ea{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new Ea(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,r)),l=await iE(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ea.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xu(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class rE{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const u=Xu("",20);i.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(f){const d=f;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(h),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(h),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jn(){return window}function oE(t){jn().location.href=t}/**
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
 */function Wg(){return typeof jn().WorkerGlobalScope<"u"&&typeof jn().importScripts=="function"}async function aE(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function lE(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function uE(){return Wg()?self:null}/**
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
 */const Qg="firebaseLocalStorageDb",cE=1,Fo="firebaseLocalStorage",xg="fbase_key";class Vr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ta(t,e){return t.transaction([Fo],e?"readwrite":"readonly").objectStore(Fo)}function hE(){const t=indexedDB.deleteDatabase(Qg);return new Vr(t).toPromise()}function Ll(){const t=indexedDB.open(Qg,cE);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Fo,{keyPath:xg})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Fo)?e(s):(s.close(),await hE(),e(await Ll()))})})}async function Eh(t,e,n){const s=Ta(t,!0).put({[xg]:e,value:n});return new Vr(s).toPromise()}async function fE(t,e){const n=Ta(t,!1).get(e),s=await new Vr(n).toPromise();return s===void 0?null:s.value}function Th(t,e){const n=Ta(t,!0).delete(e);return new Vr(n).toPromise()}const dE=800,pE=3;class Yg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ll(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>pE)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Wg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ea._getInstance(uE()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await aE(),!this.activeServiceWorker)return;this.sender=new rE(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);!s||((e=s[0])===null||e===void 0?void 0:e.fulfilled)&&((n=s[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||lE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ll();return await Eh(e,Uo,"1"),await Th(e,Uo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Eh(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>fE(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Th(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=Ta(i,!1).getAll();return new Vr(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),dE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Yg.type="LOCAL";const mE=Yg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gE(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function _E(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=Bn("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",gE().appendChild(s)})}function vE(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Or(3e4,6e4);/**
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
 */function yE(t,e){return e?Qn(e):(Ee(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Ju extends xu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return oi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return oi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return oi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function bE(t){return qg(t.auth,new Ju(t),t.bypassAuthState)}function wE(t){const{auth:e,user:n}=t;return Ee(n,e,"internal-error"),Qk(n,new Ju(t),t.bypassAuthState)}async function kE(t){const{auth:e,user:n}=t;return Ee(n,e,"internal-error"),Wk(n,new Ju(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return bE;case"linkViaPopup":case"linkViaRedirect":return kE;case"reauthViaPopup":case"reauthViaRedirect":return wE;default:Mn(this.auth,"internal-error")}}resolve(e){is(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){is(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EE=new Or(2e3,1e4);class ti extends Xg{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,ti.currentPopupAction&&ti.currentPopupAction.cancel(),ti.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ee(e,this.auth,"internal-error"),e}async onExecution(){is(this.filter.length===1,"Popup operations only handle one event");const e=Xu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Bn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Bn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ti.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Bn(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,EE.get())};e()}}ti.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TE="pendingRedirect",ro=new Map;class IE extends Xg{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=ro.get(this.auth._key());if(!e){try{const s=await CE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}ro.set(this.auth._key(),e)}return this.bypassAuthState||ro.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function CE(t,e){const n=DE(e),s=AE(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function SE(t,e){ro.set(t._key(),e)}function AE(t){return Qn(t._redirectPersistence)}function DE(t){return io(TE,t.config.apiKey,t.name)}async function RE(t,e,n=!1){const s=Ur(t),i=yE(s,e),o=await new IE(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PE=10*60*1e3;class NE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!OE(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Jg(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Bn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=PE&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ih(e))}saveEventToCache(e){this.cachedEventUids.add(Ih(e)),this.lastProcessedEventTime=Date.now()}}function Ih(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Jg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function OE(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Jg(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $E(t,e={}){return Lr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ME=/^https?/;async function UE(t){if(t.config.emulator)return;const{authorizedDomains:e}=await $E(t);for(const n of e)try{if(FE(n))return}catch{}Mn(t,"unauthorized-domain")}function FE(t){const e=$l(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!ME.test(n))return!1;if(LE.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const VE=new Or(3e4,6e4);function Ch(){const t=jn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function BE(t){return new Promise((e,n)=>{var s,i,r;function o(){Ch(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ch(),n(Bn(t,"network-request-failed"))},timeout:VE.get()})}if(!((i=(s=jn().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=jn().gapi)===null||r===void 0)&&r.load)o();else{const a=vE("iframefcb");return jn()[a]=()=>{gapi.load?o():n(Bn(t,"network-request-failed"))},_E(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw oo=null,e})}let oo=null;function jE(t){return oo=oo||BE(t),oo}/**
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
 */const qE=new Or(5e3,15e3),HE="__/auth/iframe",KE="emulator/auth/iframe",zE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},GE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function WE(t){const e=t.config;Ee(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Gu(e,KE):`https://${t.config.authDomain}/${HE}`,s={apiKey:e.apiKey,appName:t.name,v:gr},i=GE.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${mr(s).slice(1)}`}async function QE(t){const e=await jE(t),n=jn().gapi;return Ee(n,t,"internal-error"),e.open({where:document.body,url:WE(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:zE,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=Bn(t,"network-request-failed"),a=jn().setTimeout(()=>{r(o)},qE.get());function l(){jn().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const xE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},YE=500,XE=600,JE="_blank",ZE="http://localhost";class Sh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function eT(t,e,n,s=YE,i=XE){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},xE),{width:s.toString(),height:i.toString(),top:r,left:o}),u=dn().toLowerCase();n&&(a=Ng(u)?JE:n),Pg(u)&&(e=e||ZE,l.scrollbars="yes");const h=Object.entries(l).reduce((d,[g,_])=>`${d}${g}=${_},`,"");if(Pk(u)&&a!=="_self")return tT(e||"",a),new Sh(null);const f=window.open(e||"",a,h);Ee(f,t,"popup-blocked");try{f.focus()}catch{}return new Sh(f)}function tT(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const nT="__/auth/handler",sT="emulator/auth/handler";function Ah(t,e,n,s,i,r){Ee(t.config.authDomain,t,"auth-domain-config-required"),Ee(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:gr,eventId:i};if(e instanceof Bg){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Yv(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries(r||{}))o[l]=u}if(e instanceof Fr){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${iT(t)}?${mr(a).slice(1)}`}function iT({config:t}){return t.emulator?Gu(t,sT):`https://${t.authDomain}/${nT}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xa="webStorageSupport";class rT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Gg,this._completeRedirectFn=RE,this._overrideRedirectResult=SE}async _openPopup(e,n,s,i){var r;is((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=Ah(e,n,s,$l(),i);return eT(e,o,Xu())}async _openRedirect(e,n,s,i){return await this._originValidation(e),oE(Ah(e,n,s,$l(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(is(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await QE(e),s=new NE(e);return n.register("authEvent",i=>(Ee(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(xa,{type:xa},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[xa];o!==void 0&&n(!!o),Mn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=UE(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ug()||Qu()||ka()}}const oT=rT;var Dh="@firebase/auth",Rh="0.20.10";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{var i;e(((i=s)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lT(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function uT(t){ci(new Vs("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:r,authDomain:o}=s.options;return((a,l)=>{Ee(r&&!r.includes(":"),"invalid-api-key",{appName:a.name}),Ee(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:r,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Fg(t)},h=new Lk(a,l,u);return pk(h,n),h})(s,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),ci(new Vs("auth-internal",e=>{const n=Ur(e.getProvider("auth").getImmediate());return(s=>new aT(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),_s(Dh,Rh,lT(t)),_s(Dh,Rh,"esm2017")}/**
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
 */const cT=5*60,hT=ap("authIdTokenMaxAge")||cT;let Ph=null;const fT=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>hT)return;const i=n==null?void 0:n.token;Ph!==i&&(Ph=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function dT(t=hp()){const e=Yl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=dk(t,{popupRedirectResolver:oT,persistence:[mE,sE,Gg]}),s=ap("authTokenSyncURL");if(s){const r=fT(s);Zk(n,r,()=>r(n.currentUser)),Jk(n,o=>r(o))}const i=op("auth");return i&&Mk(n,`http://${i}`),n}uT("Browser");let ur=[],Vn=[],Vo=[];const pT={apiKey:"AIzaSyDGi3ndUC1b4SFNstliSSVryu7_ymXEkZc",authDomain:"match-home-7d1f9.firebaseapp.com",databaseURL:"https://match-home-7d1f9-default-rtdb.firebaseio.com",projectId:"match-home-7d1f9",storageBucket:"match-home-7d1f9.appspot.com",messagingSenderId:"747751099607",appId:"1:747751099607:web:29d1e5beda87c847dfb492"},Zg=cp(pT),sn=Ww(Zg),e_=dT(Zg),mT=ns(sn,"binnacles"),gT=ns(sn,"contacts"),_T=ns(sn,"properties"),vT=ns(sn,"todos");ya(mT).then(t=>t.docs.map(e=>({...e.data(),id:e.id})));ya(gT).then(t=>ur=t.docs.map(e=>({...e.data(),id:e.id})));ya(_T).then(t=>Vn=t.docs.map(e=>({...e.data(),id:e.id})));ya(vT).then(t=>Vo=t.docs.map(e=>({...e.data(),id:e.id})));const yT=["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","S\xE1bado"],bT=["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"];function Tn(t){typeof t=="string"?t=new Date(t):t=new Date(t);let e=t.getDate()+1;e<10&&(e="0"+e);let n=bT[t.getMonth()],s=t.getFullYear();return`${e}/${n}/${s}`}function wT(t){t=new Date(t);let e=t.getMinutes();e.length<2&&(e="0"+e);let n=t.getHours();return n>12&&(n=n-12),n<10&&(n="0"+n),t.getDate(),`${n}:${e}`}function kT(t){return t=new Date(+t),`${yT[t.getDay()]}-`}function Nh(t,e,n){const s=t.slice();return s[21]=e[n],s}function Oh(t,e,n){const s=t.slice();return s[21]=e[n],s}function ET(t){let e;return{c(){e=S("Editar")},m(n,s){k(n,e,s)},d(n){n&&w(e)}}}function TT(t){let e;return{c(){e=S("Guardar")},m(n,s){k(n,e,s)},d(n){n&&w(e)}}}function $h(t){let e,n,s,i,r,o,a,l,u,h,f,d=t[1],g=[];for(let C=0;C<d.length;C+=1)g[C]=Fh(Oh(t,d,C));let _=null;d.length||(_=Lh());let v=t[1],b=[];for(let C=0;C<v.length;C+=1)b[C]=qh(Nh(t,v,C));let E=null;return v.length||(E=Vh()),{c(){e=p("h3"),e.textContent="Tareas",n=y(),s=p("ol");for(let C=0;C<g.length;C+=1)g[C].c();_&&_.c(),i=y(),r=p("p"),r.textContent=`${Hh}`,o=y(),a=p("h3"),a.textContent="Agenda",l=y(),u=p("ol");for(let C=0;C<b.length;C+=1)b[C].c();E&&E.c(),h=y(),f=p("p"),f.textContent=`${Hh}`,m(r,"class","error"),m(f,"class","error")},m(C,O){k(C,e,O),k(C,n,O),k(C,s,O);for(let A=0;A<g.length;A+=1)g[A].m(s,null);_&&_.m(s,null),c(s,i),c(s,r),k(C,o,O),k(C,a,O),k(C,l,O),k(C,u,O);for(let A=0;A<b.length;A+=1)b[A].m(u,null);E&&E.m(u,null),c(u,h),c(u,f)},p(C,O){if(O&50){d=C[1];let A;for(A=0;A<d.length;A+=1){const H=Oh(C,d,A);g[A]?g[A].p(H,O):(g[A]=Fh(H),g[A].c(),g[A].m(s,i))}for(;A<g.length;A+=1)g[A].d(1);g.length=d.length,!d.length&&_?_.p(C,O):d.length?_&&(_.d(1),_=null):(_=Lh(),_.c(),_.m(s,i))}if(O&50){v=C[1];let A;for(A=0;A<v.length;A+=1){const H=Nh(C,v,A);b[A]?b[A].p(H,O):(b[A]=qh(H),b[A].c(),b[A].m(u,h))}for(;A<b.length;A+=1)b[A].d(1);b.length=v.length,!v.length&&E?E.p(C,O):v.length?E&&(E.d(1),E=null):(E=Vh(),E.c(),E.m(u,h))}},d(C){C&&w(e),C&&w(n),C&&w(s),Ke(g,C),_&&_.d(),C&&w(o),C&&w(a),C&&w(l),C&&w(u),Ke(b,C),E&&E.d()}}}function Lh(t){let e;return{c(){e=p("p"),e.textContent="No Hay Tareas Pendientes"},m(n,s){k(n,e,s)},p:ce,d(n){n&&w(e)}}}function Mh(t){let e,n,s,i,r,o,a,l,u,h,f=Tn(t[21].endTask)+"",d,g,_=t[21].task+"",v,b,E,C;function O(){return t[11](t[21])}function A(){return t[12](t[21])}function H(){return t[13](t[21])}let $=t[21].notes&&Uh(t);return{c(){e=p("div"),n=p("li"),s=p("span"),i=p("button"),i.textContent="\u2714",r=y(),o=p("button"),o.textContent="\u2716",a=y(),l=p("button"),l.textContent="\u2714\u2716",u=y(),h=p("spam"),d=S(f),g=S(` -*-\r
                                 `),v=S(_),b=S(` -*-\r
                                 `),$&&$.c(),m(n,"class","schedule svelte-1e3ab80"),li(n,"complete",t[21].isComplete)},m(F,G){k(F,e,G),c(e,n),c(n,s),c(s,i),c(s,r),c(s,o),c(s,a),c(s,l),c(n,u),c(n,h),c(h,d),c(h,g),c(h,v),c(h,b),$&&$.m(h,null),E||(C=[q(i,"click",O),q(o,"click",A),q(l,"click",H)],E=!0)},p(F,G){t=F,G&2&&f!==(f=Tn(t[21].endTask)+"")&&re(d,f),G&2&&_!==(_=t[21].task+"")&&re(v,_),t[21].notes?$?$.p(t,G):($=Uh(t),$.c(),$.m(h,null)):$&&($.d(1),$=null),G&2&&li(n,"complete",t[21].isComplete)},d(F){F&&w(e),$&&$.d(),E=!1,Je(C)}}}function Uh(t){let e=t[21].notes+"",n;return{c(){n=S(e)},m(s,i){k(s,n,i)},p(s,i){i&2&&e!==(e=s[21].notes+"")&&re(n,e)},d(s){s&&w(n)}}}function Fh(t){let e,n=!t[21].timeTask&&Mh(t);return{c(){n&&n.c(),e=_n()},m(s,i){n&&n.m(s,i),k(s,e,i)},p(s,i){s[21].timeTask?n&&(n.d(1),n=null):n?n.p(s,i):(n=Mh(s),n.c(),n.m(e.parentNode,e))},d(s){n&&n.d(s),s&&w(e)}}}function Vh(t){let e;return{c(){e=p("p"),e.textContent="No Hay Tareas Pendientes"},m(n,s){k(n,e,s)},p:ce,d(n){n&&w(e)}}}function Bh(t){let e,n,s,i,r,o,a,l,u,h,f=t[21].timeTask+"",d,g,_=Tn(t[21].endTask)+"",v,b,E=t[21].task+"",C,O,A,H;function $(){return t[14](t[21])}function F(){return t[15](t[21])}function G(){return t[16](t[21])}let R=t[21].notes&&jh(t);return{c(){e=p("div"),n=p("li"),s=p("span"),i=p("button"),i.textContent="\u2714",r=y(),o=p("button"),o.textContent="\u2716",a=y(),l=p("button"),l.textContent="\u2714\u2716",u=y(),h=p("spam"),d=S(f),g=S(` -*-\r
                                 `),v=S(_),b=S(` -*-\r
                                 `),C=S(E),O=S(` -*-\r
                                 `),R&&R.c(),m(n,"class","schedule svelte-1e3ab80"),li(n,"complete",t[21].isComplete)},m(L,V){k(L,e,V),c(e,n),c(n,s),c(s,i),c(s,r),c(s,o),c(s,a),c(s,l),c(n,u),c(n,h),c(h,d),c(h,g),c(h,v),c(h,b),c(h,C),c(h,O),R&&R.m(h,null),A||(H=[q(i,"click",$),q(o,"click",F),q(l,"click",G),q(e,"dblclick",t[17])],A=!0)},p(L,V){t=L,V&2&&f!==(f=t[21].timeTask+"")&&re(d,f),V&2&&_!==(_=Tn(t[21].endTask)+"")&&re(v,_),V&2&&E!==(E=t[21].task+"")&&re(C,E),t[21].notes?R?R.p(t,V):(R=jh(t),R.c(),R.m(h,null)):R&&(R.d(1),R=null),V&2&&li(n,"complete",t[21].isComplete)},d(L){L&&w(e),R&&R.d(),A=!1,Je(H)}}}function jh(t){let e=t[21].notes+"",n;return{c(){n=S(e)},m(s,i){k(s,n,i)},p(s,i){i&2&&e!==(e=s[21].notes+"")&&re(n,e)},d(s){s&&w(n)}}}function qh(t){let e,n=t[21].timeTask&&Bh(t);return{c(){n&&n.c(),e=_n()},m(s,i){n&&n.m(s,i),k(s,e,i)},p(s,i){s[21].timeTask?n?n.p(s,i):(n=Bh(s),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(s){n&&n.d(s),s&&w(e)}}}function IT(t){let e,n,s,i,r,o,a,l,u,h,f,d,g,_,v,b,E,C,O,A,H,$,F,G,R,L,V,U,te,ee,x,K;function se(D,Q){return D[0]?ET:TT}let P=se(t),N=P(t),z=!t[0]&&$h(t);return{c(){e=p("div"),n=p("h1"),n.textContent="Agenda",s=y(),i=p("img"),o=y(),a=p("div"),l=p("div"),h=y(),f=p("div"),d=p("div"),g=p("input"),_=y(),v=p("div"),b=p("input"),E=y(),C=p("input"),O=y(),A=p("div"),H=p("textarea"),$=y(),F=p("div"),G=p("button"),N.c(),R=y(),L=p("button"),L.textContent="Cancelar",U=y(),te=p("div"),z&&z.c(),fn(i.src,r=wg)||m(i,"src",r),m(i,"alt","schedule"),m(i,"class","imgTitle svelte-1e3ab80"),m(l,"class","background"),m(g,"type","text"),m(g,"class","inputTask"),m(g,"cols","56"),m(g,"rows","1"),m(g,"placeholder","Agrega una Tarea o Cita"),m(b,"type","time"),m(b,"class","inputDate"),m(C,"type","date"),m(C,"class","inputDate"),m(v,"class","contDate"),m(H,"name","notes"),m(H,"id",""),m(H,"cols","56"),m(H,"rows","5"),m(H,"placeholder","descripci\xF3n"),m(f,"class","pop-up"),m(a,"class","container"),m(te,"class","container"),m(e,"class","container")},m(D,Q){k(D,e,Q),c(e,n),c(e,s),c(e,i),c(e,o),c(e,a),c(a,l),c(a,h),c(a,f),c(f,d),c(d,g),de(g,t[2].task),c(f,_),c(f,v),c(v,b),de(b,t[2].timeTask),c(v,E),c(v,C),de(C,t[2].endTask),c(f,O),c(f,A),c(A,H),de(H,t[2].notes),c(f,$),c(f,F),c(F,G),N.m(G,null),c(F,R),c(F,L),c(e,U),c(e,te),z&&z.m(te,null),ee=!0,x||(K=[q(l,"keydown",t[6]),q(g,"input",t[7]),q(b,"input",t[8]),q(C,"input",t[9]),q(H,"input",t[10]),q(G,"click",t[3]),q(L,"click",t[6])],x=!0)},p(D,[Q]){Q&4&&g.value!==D[2].task&&de(g,D[2].task),Q&4&&de(b,D[2].timeTask),Q&4&&de(C,D[2].endTask),Q&4&&de(H,D[2].notes),P!==(P=se(D))&&(N.d(1),N=P(D),N&&(N.c(),N.m(G,null))),D[0]?z&&(z.d(1),z=null):z?z.p(D,Q):(z=$h(D),z.c(),z.m(te,null))},i(D){ee||(tt(()=>{u||(u=Pn(l,No,{},!0)),u.run(1)}),tt(()=>{V||(V=Pn(f,Oo,{},!0)),V.run(1)}),ee=!0)},o(D){u||(u=Pn(l,No,{},!1)),u.run(0),V||(V=Pn(f,Oo,{},!1)),V.run(0),ee=!1},d(D){D&&w(e),D&&u&&u.end(),N.d(),D&&V&&V.end(),z&&z.d(),x=!1,Je(K)}}}let Hh="";function CT(t,e,n){let s,i;Ve(t,Dn,$=>n(2,i=$));const r=vi();let o=!1;Vo.sort(($,F)=>$.endTask<F.endTask?1:$.endTask>F.endTask?-1:0);async function a(){if(console.log(o),o)await ba(ss(sn,"todos",i.id),i),n(0,o=!1),console.log(o);else{const $=ns(sn,"todos");await rr($,i),console.log(o)}gt(Dn,i=[],i),r("/")}async function l($){confirm("Quieres borrarlo definitivmente?")==!0&&(console.log($),await wa(ss(sn,"todos",$)))}async function u($){gt(Dn,i=$,i),console.log(i),n(0,o=!0)}function h(){gt(Dn,i=[],i),r("/contactos")}function f(){i.task=this.value,Dn.set(i)}function d(){i.timeTask=this.value,Dn.set(i)}function g(){i.endTask=this.value,Dn.set(i)}function _(){i.notes=this.value,Dn.set(i)}const v=$=>($.id,void 0),b=$=>l($.id),E=$=>u($),C=$=>($.id,void 0),O=$=>l($.id),A=$=>u($),H=()=>u;return n(1,s=Vo),[o,s,i,a,l,u,h,f,d,g,_,v,b,E,C,O,A,H]}class t_ extends Ye{constructor(e){super(),xe(this,e,CT,IT,Ge,{})}}function ST(t){let e;return{c(){e=p("h1"),e.textContent="Estas en Sinergias"},m(n,s){k(n,e,s)},p:ce,i:ce,o:ce,d(n){n&&w(e)}}}class n_ extends Ye{constructor(e){super(),xe(this,e,null,ST,Ge,{})}}function AT(t){let e;return{c(){e=S("Inicia sesi\xF3n")},m(n,s){k(n,e,s)},d(n){n&&w(e)}}}function DT(t){let e,n,s,i,r,o,a,l,u,h,f,d,g,_,v,b,E,C,O,A,H,$,F,G,R,L,V,U,te;return L=new wn({props:{to:"/login",$$slots:{default:[AT]},$$scope:{ctx:t}}}),{c(){e=p("div"),n=p("br"),s=p("br"),i=p("br"),r=y(),o=p("div"),a=p("h1"),a.textContent="Registra tu cuenta",l=y(),u=p("div"),h=p("input"),f=y(),d=p("div"),g=p("input"),_=y(),v=p("br"),b=y(),E=p("div"),C=p("button"),C.textContent="Registrarse",O=y(),A=p("p"),A.textContent="O tambi\xE9n",H=y(),$=p("br"),F=y(),G=p("p"),R=S("\xBFYa tienes cuenta? "),le(L.$$.fragment),m(a,"class","text-center text-login svelte-ftg4em"),m(h,"name","email"),m(h,"type","email"),m(h,"class","input-form svelte-ftg4em"),m(h,"placeholder","Correo"),h.required=!0,m(u,"class","center svelte-ftg4em"),m(g,"name","password"),m(g,"type","password"),m(g,"class","input-form svelte-ftg4em"),m(g,"placeholder","Contrase\xF1a"),m(d,"class","center svelte-ftg4em"),m(C,"class","button-signup fondo-color-signup svelte-ftg4em"),m(E,"class","center svelte-ftg4em"),m(A,"class","text-center svelte-ftg4em"),m(G,"class","text-center svelte-ftg4em"),m(o,"class","form-signin svelte-ftg4em")},m(ee,x){k(ee,e,x),c(e,n),c(e,s),c(e,i),c(e,r),c(e,o),c(o,a),c(o,l),c(o,u),c(u,h),c(o,f),c(o,d),c(d,g),c(o,_),c(o,v),c(o,b),c(o,E),c(E,C),c(o,O),c(o,A),c(o,H),c(o,$),c(o,F),c(o,G),c(G,R),oe(L,G,null),V=!0,U||(te=[q(h,"input",t[2]),q(g,"input",t[3]),q(C,"click",t[1])],U=!0)},p(ee,[x]){const K={};x&64&&(K.$$scope={dirty:x,ctx:ee}),L.$set(K)},i(ee){V||(j(L.$$.fragment,ee),V=!0)},o(ee){W(L.$$.fragment,ee),V=!1},d(ee){ee&&w(e),ae(L),U=!1,Je(te)}}}function RT(t){const e=vi();let n={email:"",password:""};const s=a=>{n={...n,[a.target.name]:a.target.value}};return[s,async()=>{try{await Yk(e_,n.email,n.password),e("/")}catch(a){console.log(a)}},a=>s(a),a=>s(a)]}class Zu extends Ye{constructor(e){super(),xe(this,e,RT,DT,Ge,{})}}function Kh(t,e,n){const s=t.slice();return s[1]=e[n],s}function zh(t,e,n){const s=t.slice();return s[1]=e[n],s}function PT(t){let e,n,s=Tn(t[1].endTask)+"",i,r,o=t[1].task+"",a,l,u=t[1].notes&&NT(t);return{c(){e=p("ul"),n=p("li"),i=S(s),r=S(` - -\r
                    `),a=S(o),l=S(` - -\r
                    `),u&&u.c(),li(n,"complete",t[1].isComplete)},m(h,f){k(h,e,f),c(e,n),c(n,i),c(n,r),c(n,a),c(n,l),u&&u.m(n,null)},p(h,f){h[1].notes&&u.p(h,f)},d(h){h&&w(e),u&&u.d()}}}function NT(t){let e=t[1].notes+"",n;return{c(){n=S(e)},m(s,i){k(s,n,i)},p:ce,d(s){s&&w(n)}}}function Gh(t){let e,n=!t[1].timeTask&&PT(t);return{c(){n&&n.c(),e=_n()},m(s,i){n&&n.m(s,i),k(s,e,i)},p(s,i){s[1].timeTask||n.p(s,i)},d(s){n&&n.d(s),s&&w(e)}}}function OT(t){let e,n,s,i=kT(t[1].endTask)+"",r,o,a=wT(t[1].endTask)+"",l,u,h=Tn(t[1].endTask)+"",f,d,g=t[1].task+"",_,v,b=t[1].notes&&$T(t);return{c(){e=p("ul"),n=p("li"),s=p("spam"),r=S(i),o=y(),l=S(a),u=S(` - -\r
                      `),f=S(h),d=y(),_=S(g),v=S(` - -\r
                      `),b&&b.c(),m(s,"type","number"),li(n,"complete",t[1].isComplete)},m(E,C){k(E,e,C),c(e,n),c(n,s),c(s,r),c(s,o),c(s,l),c(s,u),c(s,f),c(s,d),c(s,_),c(s,v),b&&b.m(s,null)},p(E,C){E[1].notes&&b.p(E,C)},d(E){E&&w(e),b&&b.d()}}}function $T(t){let e=t[1].notes+"",n;return{c(){n=S(e)},m(s,i){k(s,n,i)},p:ce,d(s){s&&w(n)}}}function Wh(t){let e,n=t[1].timeTask&&OT(t);return{c(){n&&n.c(),e=y()},m(s,i){n&&n.m(s,i),k(s,e,i)},p(s,i){s[1].timeTask&&n.p(s,i)},d(s){n&&n.d(s),s&&w(e)}}}function LT(t){let e,n,s,i,r,o,a,l,u,h,f=t[0],d=[];for(let v=0;v<f.length;v+=1)d[v]=Gh(zh(t,f,v));let g=t[0],_=[];for(let v=0;v<g.length;v+=1)_[v]=Wh(Kh(t,g,v));return{c(){e=p("div"),n=p("div"),s=p("div"),i=p("h1"),i.textContent="Agenda",r=y(),o=p("h3"),o.textContent="Tareas",a=y();for(let v=0;v<d.length;v+=1)d[v].c();l=y(),u=p("h3"),u.textContent="Citas",h=y();for(let v=0;v<_.length;v+=1)_[v].c();m(i,"class","title svelte-13rvwi6"),m(o,"class","subtitle svelte-13rvwi6"),m(u,"class","subtitle svelte-13rvwi6"),m(s,"class","schedule"),m(n,"class","container"),m(e,"class","show-home")},m(v,b){k(v,e,b),c(e,n),c(n,s),c(s,i),c(s,r),c(s,o),c(s,a);for(let E=0;E<d.length;E+=1)d[E].m(s,null);c(s,l),c(s,u),c(s,h);for(let E=0;E<_.length;E+=1)_[E].m(s,null)},p(v,[b]){if(b&1){f=v[0];let E;for(E=0;E<f.length;E+=1){const C=zh(v,f,E);d[E]?d[E].p(C,b):(d[E]=Gh(C),d[E].c(),d[E].m(s,l))}for(;E<d.length;E+=1)d[E].d(1);d.length=f.length}if(b&1){g=v[0];let E;for(E=0;E<g.length;E+=1){const C=Kh(v,g,E);_[E]?_[E].p(C,b):(_[E]=Wh(C),_[E].c(),_[E].m(s,null))}for(;E<_.length;E+=1)_[E].d(1);_.length=g.length}},i:ce,o:ce,d(v){v&&w(e),Ke(d,v),Ke(_,v)}}}function MT(t){return[Vo]}class UT extends Ye{constructor(e){super(),xe(this,e,MT,LT,Ge,{})}}const s_="/to-deploy-mh/assets/add-user.1bd66bde.png",i_="/to-deploy-mh/assets/house.99302696.png",FT="/to-deploy-mh/assets/team.31fda88c.png",Qh=tn(!1);function VT(t){let e,n,s,i,r,o;return{c(){e=p("div"),n=p("div"),s=p("img"),r=y(),o=p("h1"),o.textContent="Contactos",fn(s.src,i=s_)||m(s,"src",i),m(s,"alt","Buzon"),m(s,"class","profile-img svelte-mxk4x8"),m(o,"class","name svelte-mxk4x8"),m(n,"class","optionCard svelte-mxk4x8"),m(e,"class","container")},m(a,l){k(a,e,l),c(e,n),c(n,s),c(n,r),c(n,o)},p:ce,d(a){a&&w(e)}}}function BT(t){let e,n,s,i,r,o;return{c(){e=p("div"),n=p("div"),s=p("img"),r=y(),o=p("h1"),o.textContent="Propiedades",fn(s.src,i=i_)||m(s,"src",i),m(s,"alt","propiedad"),m(s,"class","profile-img svelte-mxk4x8"),m(o,"class","name svelte-mxk4x8"),m(n,"class","optionCard svelte-mxk4x8"),m(e,"class","container")},m(a,l){k(a,e,l),c(e,n),c(n,s),c(n,r),c(n,o)},p:ce,d(a){a&&w(e)}}}function jT(t){let e,n,s,i,r,o;return{c(){e=p("div"),n=p("div"),s=p("img"),r=y(),o=p("h1"),o.textContent="Agenda",fn(s.src,i=wg)||m(s,"src",i),m(s,"alt","agenda"),m(s,"class","profile-img svelte-mxk4x8"),m(o,"class","name svelte-mxk4x8"),m(n,"class","optionCard svelte-mxk4x8"),m(e,"class","container")},m(a,l){k(a,e,l),c(e,n),c(n,s),c(n,r),c(n,o)},p:ce,d(a){a&&w(e)}}}function qT(t){let e,n,s,i,r,o;return{c(){e=p("div"),n=p("div"),s=p("img"),r=y(),o=p("h1"),o.textContent="Sinergias",fn(s.src,i=FT)||m(s,"src",i),m(s,"alt","sinergias"),m(s,"class","profile-img svelte-mxk4x8"),m(o,"class","name svelte-mxk4x8"),m(n,"class","optionCard svelte-mxk4x8"),m(e,"class","container")},m(a,l){k(a,e,l),c(e,n),c(n,s),c(n,r),c(n,o)},p:ce,d(a){a&&w(e)}}}function HT(t){let e,n,s,i,r,o,a,l;return e=new wn({props:{to:"/contactos",title:"contactos",$$slots:{default:[VT]},$$scope:{ctx:t}}}),s=new wn({props:{to:"/propiedades",title:"propiedades",$$slots:{default:[BT]},$$scope:{ctx:t}}}),r=new wn({props:{to:"/agenda",title:"agenda",class:"s",$$slots:{default:[jT]},$$scope:{ctx:t}}}),a=new wn({props:{to:"/sinergias",title:"sinergias",$$slots:{default:[qT]},$$scope:{ctx:t}}}),{c(){le(e.$$.fragment),n=y(),le(s.$$.fragment),i=y(),le(r.$$.fragment),o=y(),le(a.$$.fragment)},m(u,h){oe(e,u,h),k(u,n,h),oe(s,u,h),k(u,i,h),oe(r,u,h),k(u,o,h),oe(a,u,h),l=!0},p(u,h){const f={};h&1&&(f.$$scope={dirty:h,ctx:u}),e.$set(f);const d={};h&1&&(d.$$scope={dirty:h,ctx:u}),s.$set(d);const g={};h&1&&(g.$$scope={dirty:h,ctx:u}),r.$set(g);const _={};h&1&&(_.$$scope={dirty:h,ctx:u}),a.$set(_)},i(u){l||(j(e.$$.fragment,u),j(s.$$.fragment,u),j(r.$$.fragment,u),j(a.$$.fragment,u),l=!0)},o(u){W(e.$$.fragment,u),W(s.$$.fragment,u),W(r.$$.fragment,u),W(a.$$.fragment,u),l=!1},d(u){ae(e,u),u&&w(n),ae(s,u),u&&w(i),ae(r,u),u&&w(o),ae(a,u)}}}function KT(t){let e,n;return e=new t_({}),{c(){le(e.$$.fragment)},m(s,i){oe(e,s,i),n=!0},i(s){n||(j(e.$$.fragment,s),n=!0)},o(s){W(e.$$.fragment,s),n=!1},d(s){ae(e,s)}}}function zT(t){let e,n;return e=new n_({}),{c(){le(e.$$.fragment)},m(s,i){oe(e,s,i),n=!0},i(s){n||(j(e.$$.fragment,s),n=!0)},o(s){W(e.$$.fragment,s),n=!1},d(s){ae(e,s)}}}function GT(t){let e,n;return e=new Zu({}),{c(){le(e.$$.fragment)},m(s,i){oe(e,s,i),n=!0},i(s){n||(j(e.$$.fragment,s),n=!0)},o(s){W(e.$$.fragment,s),n=!1},d(s){ae(e,s)}}}function WT(t){let e,n;return e=new Zu({}),{c(){le(e.$$.fragment)},m(s,i){oe(e,s,i),n=!0},i(s){n||(j(e.$$.fragment,s),n=!0)},o(s){W(e.$$.fragment,s),n=!1},d(s){ae(e,s)}}}function QT(t){let e,n,s,i,r,o,a,l,u,h,f,d,g,_,v;return s=new Gl({props:{$$slots:{default:[HT]},$$scope:{ctx:t}}}),r=new bn({props:{path:"/agenda",$$slots:{default:[KT]},$$scope:{ctx:t}}}),a=new bn({props:{path:"/sinergias",$$slots:{default:[zT]},$$scope:{ctx:t}}}),u=new bn({props:{path:"/login",$$slots:{default:[GT]},$$scope:{ctx:t}}}),f=new bn({props:{path:"/registro",$$slots:{default:[WT]},$$scope:{ctx:t}}}),_=new UT({props:{"(orderTodos)":!0}}),{c(){e=p("body"),n=p("div"),le(s.$$.fragment),i=y(),le(r.$$.fragment),o=y(),le(a.$$.fragment),l=y(),le(u.$$.fragment),h=y(),le(f.$$.fragment),d=y(),g=p("div"),le(_.$$.fragment),m(n,"class","wrapper-grid svelte-mxk4x8"),m(g,"class",""),m(e,"class","svelte-mxk4x8")},m(b,E){k(b,e,E),c(e,n),oe(s,n,null),c(n,i),oe(r,n,null),c(n,o),oe(a,n,null),c(n,l),oe(u,n,null),c(n,h),oe(f,n,null),c(e,d),c(e,g),oe(_,g,null),v=!0},p(b,[E]){const C={};E&1&&(C.$$scope={dirty:E,ctx:b}),s.$set(C);const O={};E&1&&(O.$$scope={dirty:E,ctx:b}),r.$set(O);const A={};E&1&&(A.$$scope={dirty:E,ctx:b}),a.$set(A);const H={};E&1&&(H.$$scope={dirty:E,ctx:b}),u.$set(H);const $={};E&1&&($.$$scope={dirty:E,ctx:b}),f.$set($)},i(b){v||(j(s.$$.fragment,b),j(r.$$.fragment,b),j(a.$$.fragment,b),j(u.$$.fragment,b),j(f.$$.fragment,b),j(_.$$.fragment,b),v=!0)},o(b){W(s.$$.fragment,b),W(r.$$.fragment,b),W(a.$$.fragment,b),W(u.$$.fragment,b),W(f.$$.fragment,b),W(_.$$.fragment,b),v=!1},d(b){b&&w(e),ae(s),ae(r),ae(a),ae(u),ae(f),ae(_)}}}class xT extends Ye{constructor(e){super(),xe(this,e,null,QT,Ge,{})}}function YT(t){let e,n,s,i,r,o,a,l,u,h,f=Tn(t[2])+"",d,g,_,v,b,E,C,O,A,H,$,F,G,R,L,V,U,te,ee;return{c(){e=p("div"),n=p("div"),s=p("div"),i=p("h5"),r=S(t[0]),o=y(),a=S(t[1]),l=y(),u=p("h5"),h=S("Alta "),d=S(f),g=y(),_=p("div"),v=p("p"),b=S(t[3]),E=y(),C=p("p"),O=S("tel: "),A=S(t[4]),H=S(" email: "),$=S(t[5]),F=y(),G=p("p"),R=S("Presupuesto "),L=S(t[6]),V=y(),U=p("p"),te=S("Rango "),ee=S(t[7]),m(s,"class","namePerson svelte-1thiswe"),m(_,"class","nameDate svelte-1thiswe"),m(n,"class","contactCard"),m(e,"class","container contact svelte-1thiswe")},m(x,K){k(x,e,K),c(e,n),c(n,s),c(s,i),c(i,r),c(i,o),c(i,a),c(s,l),c(s,u),c(u,h),c(u,d),c(n,g),c(n,_),c(_,v),c(v,b),c(_,E),c(_,C),c(C,O),c(C,A),c(C,H),c(C,$),c(_,F),c(_,G),c(G,R),c(G,L),c(_,V),c(_,U),c(U,te),c(U,ee)},p(x,[K]){K&1&&re(r,x[0]),K&2&&re(a,x[1]),K&4&&f!==(f=Tn(x[2])+"")&&re(d,f),K&8&&re(b,x[3]),K&16&&re(A,x[4]),K&32&&re($,x[5]),K&64&&re(L,x[6]),K&128&&re(ee,x[7])},i:ce,o:ce,d(x){x&&w(e)}}}function XT(t,e,n){let{name:s,lastname:i,createdAt:r,contactStage:o,telephon:a,email:l,budget:u,rangeProp:h}=e;return t.$$set=f=>{"name"in f&&n(0,s=f.name),"lastname"in f&&n(1,i=f.lastname),"createdAt"in f&&n(2,r=f.createdAt),"contactStage"in f&&n(3,o=f.contactStage),"telephon"in f&&n(4,a=f.telephon),"email"in f&&n(5,l=f.email),"budget"in f&&n(6,u=f.budget),"rangeProp"in f&&n(7,h=f.rangeProp)},[s,i,r,o,a,l,u,h]}class JT extends Ye{constructor(e){super(),xe(this,e,XT,YT,Ge,{name:0,lastname:1,createdAt:2,contactStage:3,telephon:4,email:5,budget:6,rangeProp:7})}}function ZT(t){let e,n,s,i;return{c(){e=p("div"),n=p("input"),m(n,"class","searchInput svelte-6bonih"),m(n,"type","text"),m(n,"id","search-field"),m(n,"placeholder","Enter Search Term"),m(n,"autocomplete","off"),m(e,"id","search-input-cont")},m(r,o){k(r,e,o),c(e,n),de(n,t[0]),s||(i=[q(n,"input",t[2]),q(n,"input",t[1])],s=!0)},p(r,[o]){o&1&&n.value!==r[0]&&de(n,r[0])},i:ce,o:ce,d(r){r&&w(e),s=!1,Je(i)}}}function eI(t,e,n){let{searchTerm:s}=e;function i(o){E_.call(this,t,o)}function r(){s=this.value,n(0,s)}return t.$$set=o=>{"searchTerm"in o&&n(0,s=o.searchTerm)},[s,i,r]}class ec extends Ye{constructor(e){super(),xe(this,e,eI,ZT,Ge,{searchTerm:0})}}async function r_(t,e){if(console.log("estas en la funcion"),t==="todoAdding"){const n=ns(sn,"todos");await rr(n,e)}else t==="todoUpdate"?await ba(ss(sn,"todos",e.id),e):t==="todoDelete"&&await wa(ss(sn,"todos",e.id));e=""}function tI(t){let e,n,s,i,r,o,a,l,u,h,f,d,g,_,v,b,E,C,O,A,H,$,F;return{c(){e=p("div"),s=y(),i=p("div"),r=p("div"),o=p("input"),a=y(),l=p("div"),u=p("input"),h=y(),f=p("input"),d=y(),g=p("div"),_=p("textarea"),v=y(),b=p("div"),E=p("button"),E.textContent="Guardar",C=y(),O=p("button"),O.textContent="Cancelar",m(e,"class","background svelte-1grddfb"),m(o,"type","text"),m(o,"class","inputTask svelte-1grddfb"),m(o,"placeholder","Agrega una Tarea o Cita"),m(u,"type","time"),m(u,"class","inputDate svelte-1grddfb"),m(f,"type","date"),m(f,"class","inputDate svelte-1grddfb"),m(l,"class","contDate"),m(_,"name","notes"),m(_,"cols","56"),m(_,"rows","5"),m(_,"placeholder","descripci\xF3n"),m(E,"class","btnShedule svelte-1grddfb"),m(O,"class","btnShedule svelte-1grddfb"),m(i,"class","pop-up svelte-1grddfb")},m(G,R){k(G,e,R),k(G,s,R),k(G,i,R),c(i,r),c(r,o),de(o,t[0]),c(i,a),c(i,l),c(l,u),de(u,t[1].timeTask),c(l,h),c(l,f),de(f,t[1].endTask),c(i,d),c(i,g),c(g,_),de(_,t[1].notes),c(i,v),c(i,b),c(b,E),c(b,C),c(b,O),H=!0,$||(F=[q(window,"keydown",t[4]),q(e,"click",t[2]),q(o,"input",t[5]),q(u,"input",t[6]),q(f,"input",t[7]),q(_,"input",t[8]),q(E,"click",t[3]),q(O,"click",t[2])],$=!0)},p(G,[R]){R&1&&o.value!==G[0]&&de(o,G[0]),R&2&&de(u,G[1].timeTask),R&2&&de(f,G[1].endTask),R&2&&de(_,G[1].notes)},i(G){H||(tt(()=>{n||(n=Pn(e,No,{},!0)),n.run(1)}),tt(()=>{A||(A=Pn(i,Oo,{},!0)),A.run(1)}),H=!0)},o(G){n||(n=Pn(e,No,{},!1)),n.run(0),A||(A=Pn(i,Oo,{},!1)),A.run(0),H=!1},d(G){G&&w(e),G&&n&&n.end(),G&&w(s),G&&w(i),G&&A&&A.end(),$=!1,Je(F)}}}function nI(t,e,n){let s,i,r;Ve(t,Dn,O=>n(10,s=O)),Ve(t,wt,O=>n(11,i=O)),Ve(t,ct,O=>n(12,r=O));const o=Nd();let a=`${r.name} ${r.lastname}`,l=[],u=[],h=new Date,f=h.getTime();console.log(f),l={task:"",isComplete:"",createdAt:"",timeTask:"",notes:"",user:""};function d(){o("closeIt"),gt(wt,i="contSelect",i),gt(Dn,s="",s)}const g=async()=>{gt(wt,i="todoAdding",i),u=a,n(1,l={...l,endTask:f}),gt(Dn,s={...l,task:u},s),r_(i,s),console.log(s),d()},_=O=>{O.key==="Enter"&&g()};function v(){a=this.value,n(0,a)}function b(){l.timeTask=this.value,n(1,l)}function E(){l.endTask=this.value,n(1,l)}function C(){l.notes=this.value,n(1,l)}return[a,l,d,g,_,v,b,E,C]}class sI extends Ye{constructor(e){super(),xe(this,e,nI,tI,Ge,{})}}function iI(t){let e,n,s,i,r,o,a,l,u,h,f,d,g,_,v,b,E,C,O,A,H,$,F,G,R,L,V,U,te,ee,x,K,se,P,N,z,D,Q,me,ge;return{c(){e=p("main"),n=p("section"),s=p("figure"),i=p("img"),o=y(),a=p("div"),l=S(t[1]),u=y(),h=p("figcaption"),f=S(t[2]),d=y(),g=p("section"),_=p("section"),v=p("div"),b=p("div"),E=S(t[3]),C=S(" Rec\xE1maras"),O=y(),A=p("div"),H=S(t[4]),$=S(" Ba\xF1os"),F=y(),G=p("div"),R=S(t[5]),L=S(" Estacionamientos"),V=y(),U=p("div"),te=S(t[6]),ee=S(" m2 de Contruccion"),x=y(),K=p("div"),se=S(t[7]),P=S(" m2 de Terreno"),N=y(),z=p("br"),D=y(),Q=p("div"),me=S("Precio $: "),ge=S(t[8]),fn(i.src,r=t[0])||m(i,"src",r),m(i,"alt",t[1]),m(i,"class","bkcover svelte-1w1p4eb"),m(a,"class","language svelte-1w1p4eb"),m(h,"class","svelte-1w1p4eb"),m(s,"class","bkcont svelte-1w1p4eb"),m(n,"class","book-top-info svelte-1w1p4eb"),m(v,"class","buy-options-cont svelte-1w1p4eb"),m(_,"class","from-pariyatti available-at svelte-1w1p4eb"),m(g,"class","book-bottom-links svelte-1w1p4eb")},m(De,Ie){k(De,e,Ie),c(e,n),c(n,s),c(s,i),c(s,o),c(s,a),c(a,l),c(s,u),c(s,h),c(h,f),c(e,d),c(e,g),c(g,_),c(_,v),c(v,b),c(b,E),c(b,C),c(v,O),c(v,A),c(A,H),c(A,$),c(v,F),c(v,G),c(G,R),c(G,L),c(v,V),c(v,U),c(U,te),c(U,ee),c(v,x),c(v,K),c(K,se),c(K,P),c(v,N),c(v,z),c(v,D),c(v,Q),c(Q,me),c(Q,ge)},p(De,[Ie]){Ie&1&&!fn(i.src,r=De[0])&&m(i,"src",r),Ie&2&&m(i,"alt",De[1]),Ie&2&&re(l,De[1]),Ie&4&&re(f,De[2]),Ie&8&&re(E,De[3]),Ie&16&&re(H,De[4]),Ie&32&&re(R,De[5]),Ie&64&&re(te,De[6]),Ie&128&&re(se,De[7]),Ie&256&&re(ge,De[8])},i:ce,o:ce,d(De){De&&w(e)}}}function rI(t,e,n){let{urlImage:s,claveEB:i,nameProperty:r,beds:o,bathroom:a,park:l,areaBuilding:u,areaTotal:h,price:f}=e;return t.$$set=d=>{"urlImage"in d&&n(0,s=d.urlImage),"claveEB"in d&&n(1,i=d.claveEB),"nameProperty"in d&&n(2,r=d.nameProperty),"beds"in d&&n(3,o=d.beds),"bathroom"in d&&n(4,a=d.bathroom),"park"in d&&n(5,l=d.park),"areaBuilding"in d&&n(6,u=d.areaBuilding),"areaTotal"in d&&n(7,h=d.areaTotal),"price"in d&&n(8,f=d.price)},[s,i,r,o,a,l,u,h,f]}class o_ extends Ye{constructor(e){super(),xe(this,e,rI,iI,Ge,{urlImage:0,claveEB:1,nameProperty:2,beds:3,bathroom:4,park:5,areaBuilding:6,areaTotal:7,price:8})}}let As;function a_(t){return t<=1e6?As="PRM":t<=25e5?As="SGN":t<=5e6?As="TRC":t<=8e6?As="CRT":t<=12e6?As="QNT":t>12e6&&(As="SXT"),As}let Ya,Xa;function oI(t){let e=Vn;return e=e.filter(n=>n.selectTP===t.selecTP),console.log("filtraste por tipo de propiedad",e),t.numBeds>0&&(e=e.filter(n=>n.beds>=t.numBeds)),t.numBaths>0&&(e=e.filter(n=>n.bathroom>=t.numBaths)),t.numParks>0&&(e=e.filter(n=>n.park>=t.numParks)),console.log("Por caracteristicas",e),t.budget?(console.log("filtraste por budget"),Ya=t.budget*.7,Xa=t.budget*1.1,console.log(Ya,Xa),e=e.filter(n=>n.price>=Ya&&n.price<=Xa)):(console.log("filtraste por rango"),e=e.filter(n=>a_(n.price)===t.rangeProp)),console.log("filtraste presupuesto",e),t.locaProperty.length>0&&(e=e.filter(n=>t.locaProperty.some(s=>n.locaProperty.includes(s)))),console.log("Filtraste por Ubicacion",e),t.tagsProperty.length>0&&(e=e.filter(n=>t.tagsProperty.every(s=>n.tagsProperty.includes(s)))),console.log("Filtraste por localizacion",e),e.length===0||""+e.length,Ol.set(e)}const Bo=["Casa","Terreno","Departamento","Casa o Departamento","Local Comercial","Casa de Campo"],xh=["Lona en Propiedad","Propiedades.com","NocNok","Mercado Libre","Vivanuncios","Lamudi","Inmuebles24","Referido","Otro"],Yh=["Comprador","Arrendador","Propietario","Agente Asociado","Agente Inmobiliario","Constructor","Inversionista","Otro"],Xh=["Contado","Credito Hipotecario","INFONAVIT","COFINAVIT","FOVISSSTE","ALIADOS","Conyugal"],Jh=["Venta","Renta"],Zh=["Rango","PRM","SGN","TRC","CRT","QNT","SXT","SPT"],jo=[0,1,2,3,4,5],Rn=[0,1,2,3,4],ef=["Due\xF1o","Familiar","Inmobiliaria","Conocido"];function aI(t){let e,n,s,i,r,o,a,l,u,h,f,d,g,_,v,b,E,C,O,A,H,$,F,G,R,L,V,U,te,ee,x,K,se,P,N,z,D,Q,me,ge,De,Ie,Be;return{c(){e=p("div"),n=p("div"),s=p("label"),i=S(`/Norte\\\r
			`),r=p("input"),o=y(),a=p("div"),l=p("label"),u=S(`/Noroeste\r
			`),h=p("input"),f=y(),d=p("label"),g=p("input"),_=S("NorEste\\"),v=y(),b=p("div"),E=p("label"),C=S(`/Oeste\r
			`),O=p("input"),A=y(),H=p("label"),$=S(`Centro Norte\r
			`),F=p("input"),G=y(),R=p("label"),L=p("input"),V=S("Este\\"),U=y(),te=p("div"),ee=p("label"),x=S(`Centro Sur\r
			`),K=p("input"),se=y(),P=p("div"),N=p("label"),z=S(`/SurOeste\r
			`),D=p("input"),Q=y(),me=p("label"),ge=p("input"),De=S("SurEste\\"),r.__value="Norte",r.value=r.__value,m(r,"id","north"),m(r,"type","checkbox"),t[2][0].push(r),m(s,"for","north"),m(n,"class","filterLocationOne svelte-1lvjb5r"),h.__value="Noroeste",h.value=h.__value,m(h,"id","northwest"),m(h,"type","checkbox"),t[2][0].push(h),m(l,"for","northwest"),g.__value="Noreste",g.value=g.__value,m(g,"id","northeast"),m(g,"type","checkbox"),t[2][0].push(g),m(d,"for","northeast"),m(a,"class","filterLocationOne svelte-1lvjb5r"),O.__value="Oeste",O.value=O.__value,m(O,"id","west"),m(O,"type","checkbox"),t[2][0].push(O),m(E,"for","west"),F.__value="Centronorte",F.value=F.__value,m(F,"id","townNorth"),m(F,"type","checkbox"),t[2][0].push(F),m(H,"for","townNorth"),L.__value="Este",L.value=L.__value,m(L,"id","east"),m(L,"type","checkbox"),t[2][0].push(L),m(R,"for","east"),m(b,"class","filterLocationOne svelte-1lvjb5r"),K.__value="CentroSur",K.value=K.__value,m(K,"id","townsouth"),m(K,"type","checkbox"),t[2][0].push(K),m(ee,"for","townsouth"),m(te,"class","filterLocationOne svelte-1lvjb5r"),D.__value="SurOeste",D.value=D.__value,m(D,"id","southwest"),m(D,"type","checkbox"),t[2][0].push(D),m(N,"for","southwest"),ge.__value="SurEste",ge.value=ge.__value,m(ge,"id","southeast"),m(ge,"type","checkbox"),t[2][0].push(ge),m(me,"for","southeast"),m(P,"class","filterLocationOne svelte-1lvjb5r"),m(e,"class","containerUbication svelte-1lvjb5r")},m(ke,Fe){k(ke,e,Fe),c(e,n),c(n,s),c(s,i),c(s,r),r.checked=~t[0].indexOf(r.__value),c(e,o),c(e,a),c(a,l),c(l,u),c(l,h),h.checked=~t[0].indexOf(h.__value),c(a,f),c(a,d),c(d,g),g.checked=~t[0].indexOf(g.__value),c(d,_),c(e,v),c(e,b),c(b,E),c(E,C),c(E,O),O.checked=~t[0].indexOf(O.__value),c(b,A),c(b,H),c(H,$),c(H,F),F.checked=~t[0].indexOf(F.__value),c(b,G),c(b,R),c(R,L),L.checked=~t[0].indexOf(L.__value),c(R,V),c(e,U),c(e,te),c(te,ee),c(ee,x),c(ee,K),K.checked=~t[0].indexOf(K.__value),c(e,se),c(e,P),c(P,N),c(N,z),c(N,D),D.checked=~t[0].indexOf(D.__value),c(P,Q),c(P,me),c(me,ge),ge.checked=~t[0].indexOf(ge.__value),c(me,De),Ie||(Be=[q(r,"change",t[1]),q(h,"change",t[3]),q(g,"change",t[4]),q(O,"change",t[5]),q(F,"change",t[6]),q(L,"change",t[7]),q(K,"change",t[8]),q(D,"change",t[9]),q(ge,"change",t[10])],Ie=!0)},p(ke,[Fe]){Fe&1&&(r.checked=~ke[0].indexOf(r.__value)),Fe&1&&(h.checked=~ke[0].indexOf(h.__value)),Fe&1&&(g.checked=~ke[0].indexOf(g.__value)),Fe&1&&(O.checked=~ke[0].indexOf(O.__value)),Fe&1&&(F.checked=~ke[0].indexOf(F.__value)),Fe&1&&(L.checked=~ke[0].indexOf(L.__value)),Fe&1&&(K.checked=~ke[0].indexOf(K.__value)),Fe&1&&(D.checked=~ke[0].indexOf(D.__value)),Fe&1&&(ge.checked=~ke[0].indexOf(ge.__value))},i:ce,o:ce,d(ke){ke&&w(e),t[2][0].splice(t[2][0].indexOf(r),1),t[2][0].splice(t[2][0].indexOf(h),1),t[2][0].splice(t[2][0].indexOf(g),1),t[2][0].splice(t[2][0].indexOf(O),1),t[2][0].splice(t[2][0].indexOf(F),1),t[2][0].splice(t[2][0].indexOf(L),1),t[2][0].splice(t[2][0].indexOf(K),1),t[2][0].splice(t[2][0].indexOf(D),1),t[2][0].splice(t[2][0].indexOf(ge),1),Ie=!1,Je(Be)}}}function lI(t,e,n){let{ubication:s}=e;const i=[[]];function r(){s=Jt(i[0],this.__value,this.checked),n(0,s)}function o(){s=Jt(i[0],this.__value,this.checked),n(0,s)}function a(){s=Jt(i[0],this.__value,this.checked),n(0,s)}function l(){s=Jt(i[0],this.__value,this.checked),n(0,s)}function u(){s=Jt(i[0],this.__value,this.checked),n(0,s)}function h(){s=Jt(i[0],this.__value,this.checked),n(0,s)}function f(){s=Jt(i[0],this.__value,this.checked),n(0,s)}function d(){s=Jt(i[0],this.__value,this.checked),n(0,s)}function g(){s=Jt(i[0],this.__value,this.checked),n(0,s)}return t.$$set=_=>{"ubication"in _&&n(0,s=_.ubication)},[s,r,i,o,a,l,u,h,f,d,g]}class l_ extends Ye{constructor(e){super(),xe(this,e,lI,aI,Ge,{ubication:0})}}function uI(t){let e,n,s,i,r,o,a,l,u,h,f,d,g,_,v,b,E,C,O,A,H,$,F,G,R,L,V,U,te,ee,x,K,se;return{c(){e=p("section"),n=p("div"),s=p("label"),i=S(`Fracc. Privado\r
		   `),r=p("input"),o=y(),a=p("label"),l=S(`Frente a Parque\r
         `),u=p("input"),h=y(),f=p("label"),d=S(`Una Planta\r
         `),g=p("input"),_=y(),v=p("div"),b=p("label"),E=S(`Recamara en P.B.\r
		`),C=p("input"),O=y(),A=p("label"),H=S(`Patio Amplio\r
   `),$=p("input"),F=y(),G=p("label"),R=S(`Lista para Habitarse\r
   `),L=p("input"),V=y(),U=p("div"),te=p("label"),ee=S(`Nueva\r
		`),x=p("input"),m(r,"type","checkbox"),r.__value="Fracc. Privado",r.value=r.__value,t[2][0].push(r),m(u,"type","checkbox"),u.__value="Frente a Parque",u.value=u.__value,t[2][0].push(u),m(g,"type","checkbox"),g.__value="Una Planta",g.value=g.__value,t[2][0].push(g),m(n,"class","svelte-1b9bvt0"),m(C,"type","checkbox"),C.__value="Recamara en PB",C.value=C.__value,t[2][0].push(C),m($,"type","checkbox"),$.__value="Patio Amplio",$.value=$.__value,t[2][0].push($),m(L,"type","checkbox"),L.__value="Lista Habitarse",L.value=L.__value,t[2][0].push(L),m(v,"class","svelte-1b9bvt0"),m(x,"type","checkbox"),x.__value="Nueva",x.value=x.__value,t[2][0].push(x),m(U,"class","svelte-1b9bvt0"),m(e,"class","svelte-1b9bvt0")},m(P,N){k(P,e,N),c(e,n),c(n,s),c(s,i),c(s,r),r.checked=~t[0].indexOf(r.__value),c(n,o),c(n,a),c(a,l),c(a,u),u.checked=~t[0].indexOf(u.__value),c(n,h),c(n,f),c(f,d),c(f,g),g.checked=~t[0].indexOf(g.__value),c(e,_),c(e,v),c(v,b),c(b,E),c(b,C),C.checked=~t[0].indexOf(C.__value),c(v,O),c(v,A),c(A,H),c(A,$),$.checked=~t[0].indexOf($.__value),c(v,F),c(v,G),c(G,R),c(G,L),L.checked=~t[0].indexOf(L.__value),c(e,V),c(e,U),c(U,te),c(te,ee),c(te,x),x.checked=~t[0].indexOf(x.__value),K||(se=[q(r,"change",t[1]),q(u,"change",t[3]),q(g,"change",t[4]),q(C,"change",t[5]),q($,"change",t[6]),q(L,"change",t[7]),q(x,"change",t[8])],K=!0)},p(P,[N]){N&1&&(r.checked=~P[0].indexOf(r.__value)),N&1&&(u.checked=~P[0].indexOf(u.__value)),N&1&&(g.checked=~P[0].indexOf(g.__value)),N&1&&(C.checked=~P[0].indexOf(C.__value)),N&1&&($.checked=~P[0].indexOf($.__value)),N&1&&(L.checked=~P[0].indexOf(L.__value)),N&1&&(x.checked=~P[0].indexOf(x.__value))},i:ce,o:ce,d(P){P&&w(e),t[2][0].splice(t[2][0].indexOf(r),1),t[2][0].splice(t[2][0].indexOf(u),1),t[2][0].splice(t[2][0].indexOf(g),1),t[2][0].splice(t[2][0].indexOf(C),1),t[2][0].splice(t[2][0].indexOf($),1),t[2][0].splice(t[2][0].indexOf(L),1),t[2][0].splice(t[2][0].indexOf(x),1),K=!1,Je(se)}}}function cI(t,e,n){let{tag:s}=e;const i=[[]];function r(){s=Jt(i[0],this.__value,this.checked),n(0,s)}function o(){s=Jt(i[0],this.__value,this.checked),n(0,s)}function a(){s=Jt(i[0],this.__value,this.checked),n(0,s)}function l(){s=Jt(i[0],this.__value,this.checked),n(0,s)}function u(){s=Jt(i[0],this.__value,this.checked),n(0,s)}function h(){s=Jt(i[0],this.__value,this.checked),n(0,s)}function f(){s=Jt(i[0],this.__value,this.checked),n(0,s)}return t.$$set=d=>{"tag"in d&&n(0,s=d.tag)},[s,r,i,o,a,l,u,h,f]}class u_ extends Ye{constructor(e){super(),xe(this,e,cI,uI,Ge,{tag:0})}}function tf(t,e,n){const s=t.slice();return s[24]=e[n],s}function nf(t,e,n){const s=t.slice();return s[27]=e[n],s}function sf(t,e,n){const s=t.slice();return s[30]=e[n],s}function rf(t,e,n){const s=t.slice();return s[33]=e[n],s}function of(t,e,n){const s=t.slice();return s[36]=e[n],s}function af(t,e,n){const s=t.slice();return s[39]=e[n],s}function lf(t,e,n){const s=t.slice();return s[42]=e[n],s}function uf(t,e,n){const s=t.slice();return s[45]=e[n],s}function cf(t,e,n){const s=t.slice();return s[48]=e[n],s}function hf(t,e,n){const s=t.slice();return s[51]=e[n],s}function hI(t){let e,n=Tn(t[2].createdAt)+"",s,i,r;return{c(){e=p("h3"),s=S(n),m(e,"class","dataInput svelte-1myljlf")},m(o,a){k(o,e,a),c(e,s),i||(r=q(e,"dblclick",t[3]),i=!0)},p(o,a){a[0]&4&&n!==(n=Tn(o[2].createdAt)+"")&&re(s,n)},d(o){o&&w(e),i=!1,r()}}}function fI(t){let e,n,s;return{c(){e=p("input"),m(e,"class","dataInput svelte-1myljlf"),m(e,"type","date")},m(i,r){k(i,e,r),de(e,t[2].createdAt),n||(s=q(e,"input",t[4]),n=!0)},p(i,r){r[0]&5&&de(e,i[2].createdAt)},d(i){i&&w(e),n=!1,s()}}}function ff(t){let e,n=t[51]+"",s,i;return{c(){e=p("option"),s=S(n),m(e,"class","dataInput svelte-1myljlf"),m(e,"type","checkbox"),e.__value=i=t[51],e.value=e.__value},m(r,o){k(r,e,o),c(e,s)},p(r,o){o[0]&1&&n!==(n=r[51]+"")&&re(s,n),o[0]&1&&i!==(i=r[51])&&(e.__value=i,e.value=e.__value)},d(r){r&&w(e)}}}function df(t){let e,n=t[48]+"",s;return{c(){e=p("option"),s=S(n),m(e,"type","checkbox"),e.__value=t[48],e.value=e.__value},m(i,r){k(i,e,r),c(e,s)},p:ce,d(i){i&&w(e)}}}function pf(t){let e,n=t[45]+"",s;return{c(){e=p("option"),s=S(n),m(e,"type","checkbox"),e.__value=t[45],e.value=e.__value},m(i,r){k(i,e,r),c(e,s)},p:ce,d(i){i&&w(e)}}}function mf(t){let e,n=t[42]+"",s;return{c(){e=p("option"),s=S(n),m(e,"type","checkbox"),e.__value=t[42],e.value=e.__value},m(i,r){k(i,e,r),c(e,s)},p:ce,d(i){i&&w(e)}}}function gf(t){let e,n=t[39]+"",s;return{c(){e=p("option"),s=S(n),m(e,"type","checkbox"),e.__value=t[39],e.value=e.__value},m(i,r){k(i,e,r),c(e,s)},p:ce,d(i){i&&w(e)}}}function _f(t){let e,n=t[36]+"",s;return{c(){e=p("option"),s=S(n),m(e,"type","checkbox"),e.__value=t[36],e.value=e.__value},m(i,r){k(i,e,r),c(e,s)},p:ce,d(i){i&&w(e)}}}function vf(t){let e,n=t[33]+"",s,i;return{c(){e=p("option"),s=S(n),i=S(" Rec\xE1maras"),m(e,"type","checkbox"),e.__value=t[33],e.value=e.__value},m(r,o){k(r,e,o),c(e,s),c(e,i)},p:ce,d(r){r&&w(e)}}}function yf(t){let e,n=t[30]+"",s,i;return{c(){e=p("option"),s=S(n),i=S(" ba\xF1os"),m(e,"type","checkbox"),e.__value=t[30],e.value=e.__value},m(r,o){k(r,e,o),c(e,s),c(e,i)},p:ce,d(r){r&&w(e)}}}function bf(t){let e,n=t[27]+"",s,i;return{c(){e=p("option"),s=S(n),i=S(" Medios ba\xF1os"),m(e,"type","checkbox"),e.__value=t[27],e.value=e.__value},m(r,o){k(r,e,o),c(e,s),c(e,i)},p:ce,d(r){r&&w(e)}}}function wf(t){let e,n=t[24]+"",s,i;return{c(){e=p("option"),s=S(n),i=S(" Estacionamientos"),m(e,"type","checkbox"),e.__value=t[24],e.value=e.__value},m(r,o){k(r,e,o),c(e,s),c(e,i)},p:ce,d(r){r&&w(e)}}}function dI(t){let e,n,s,i,r,o,a,l,u,h,f,d,g,_,v,b,E,C,O,A,H,$,F,G,R,L,V,U,te,ee,x,K,se,P,N,z,D,Q,me,ge,De,Ie,Be,ke,Fe,B,ie,_t,nt,ht,Gt,Xe,vt,Tt,Wt,We,Ft,Et,Qt,ft;function Vt(I,Z){return I[1]?fI:hI}let yt=Vt(t),Ze=yt(t),et=t[0],Pe=[];for(let I=0;I<et.length;I+=1)Pe[I]=ff(hf(t,et,I));let Rt=Yh,je=[];for(let I=0;I<Rt.length;I+=1)je[I]=df(cf(t,Rt,I));let xt=xh,Qe=[];for(let I=0;I<xt.length;I+=1)Qe[I]=pf(uf(t,xt,I));let st=Xh,lt=[];for(let I=0;I<st.length;I+=1)lt[I]=mf(lf(t,st,I));let It=Bo,it=[];for(let I=0;I<It.length;I+=1)it[I]=gf(af(t,It,I));let Ct=Zh,ut=[];for(let I=0;I<Ct.length;I+=1)ut[I]=_f(of(t,Ct,I));let Pt=jo,he=[];for(let I=0;I<Pt.length;I+=1)he[I]=vf(rf(t,Pt,I));let we=Rn,_e=[];for(let I=0;I<we.length;I+=1)_e[I]=yf(sf(t,we,I));let Yt=Rn,$e=[];for(let I=0;I<Yt.length;I+=1)$e[I]=bf(nf(t,Yt,I));let on=Rn,Le=[];for(let I=0;I<on.length;I+=1)Le[I]=wf(tf(t,on,I));function $n(I){t[21](I)}let St={};t[2].locaProperty!==void 0&&(St.ubication=t[2].locaProperty),vt=new l_({props:St}),Yn.push(()=>Us(vt,"ubication",$n));function An(I){t[22](I)}let mt={};return t[2].tagsProperty!==void 0&&(mt.tag=t[2].tagsProperty),We=new u_({props:mt}),Yn.push(()=>Us(We,"tag",An)),{c(){e=p("h1"),e.textContent="Alta Contactos",n=y(),s=p("div"),i=p("div"),Ze.c(),r=y(),o=p("div"),a=p("input"),l=y(),u=p("input"),h=y(),f=p("div"),d=p("input"),g=y(),_=p("input"),v=y(),b=p("div"),E=p("select"),C=p("option"),C.textContent="Propiedad de Contacto";for(let I=0;I<Pe.length;I+=1)Pe[I].c();O=y(),A=p("input"),H=y(),$=p("div"),F=p("input"),G=y(),R=p("select"),L=p("option"),L.textContent="Tipo de Contacto";for(let I=0;I<je.length;I+=1)je[I].c();V=y(),U=p("select"),te=p("option"),te.textContent="Modo de Contacto";for(let I=0;I<Qe.length;I+=1)Qe[I].c();ee=y(),x=p("select"),K=p("option"),K.textContent="Modo de Pago";for(let I=0;I<lt.length;I+=1)lt[I].c();se=y(),P=p("select"),N=p("option"),N.textContent="Tipo de Propiedad";for(let I=0;I<it.length;I+=1)it[I].c();z=y(),D=p("select"),Q=p("option"),Q.textContent="Rango de Busqueda";for(let I=0;I<ut.length;I+=1)ut[I].c();me=y(),ge=p("select"),De=p("option"),De.textContent="# Rec\xE1maras";for(let I=0;I<he.length;I+=1)he[I].c();Ie=y(),Be=p("select"),ke=p("option"),ke.textContent="# Ba\xF1os";for(let I=0;I<_e.length;I+=1)_e[I].c();Fe=y(),B=p("select"),ie=p("option"),ie.textContent="# Medios Ba\xF1os";for(let I=0;I<$e.length;I+=1)$e[I].c();_t=y(),nt=p("select"),ht=p("option"),ht.textContent="# Estacionamientos";for(let I=0;I<Le.length;I+=1)Le[I].c();Gt=y(),Xe=p("div"),le(vt.$$.fragment),Wt=y(),le(We.$$.fragment),m(e,"class","sectionTitle"),m(a,"class","dataInput svelte-1myljlf"),m(a,"type","text"),m(a,"placeholder","Nombre"),m(u,"class","dataInput svelte-1myljlf"),m(u,"type","text"),m(u,"placeholder","Apellido"),m(o,"class","contactInput"),m(d,"class","dataInput svelte-1myljlf"),m(d,"type","tel"),m(d,"placeholder","tel\xE9fono"),m(_,"class","dataInput svelte-1myljlf"),m(_,"type","email"),m(_,"placeholder","email"),m(f,"class","contactInput"),m(s,"class",""),C.disabled=!0,C.selected=!0,C.__value="",C.value=C.__value,m(E,"class","dataInput svelte-1myljlf"),m(E,"id","selTP"),m(E,"name","selTP"),t[2].propCont===void 0&&tt(()=>t[9].call(E)),m(A,"class","dataInput svelte-1myljlf"),m(A,"type","number"),m(A,"placeholder","Presupuesto"),m(b,"class","col"),m(F,"class","textareaInput svelte-1myljlf"),m(F,"type","textarea"),m(F,"placeholder","Comentarios"),m($,"class","col"),L.disabled=!0,L.selected=!0,L.__value="",L.value=L.__value,m(R,"class","othersInput svelte-1myljlf"),t[2].typeContact===void 0&&tt(()=>t[12].call(R)),te.disabled=!0,te.selected=!0,te.__value="",te.value=te.__value,m(U,"class","othersInput svelte-1myljlf"),t[2].selecMC===void 0&&tt(()=>t[13].call(U)),K.disabled=!0,K.selected=!0,K.__value="",K.value=K.__value,m(x,"class","othersInput svelte-1myljlf"),t[2].modePay===void 0&&tt(()=>t[14].call(x)),N.disabled=!0,N.selected=!0,N.__value="",N.value=N.__value,m(P,"class","othersInput svelte-1myljlf"),m(P,"id","selTP"),m(P,"name","selTP"),t[2].selecTP===void 0&&tt(()=>t[15].call(P)),Q.disabled=!0,Q.selected=!0,Q.__value="",Q.value=Q.__value,m(D,"class","othersInput svelte-1myljlf"),m(D,"id","ranges"),m(D,"name","ranges"),t[2].rangeProp===void 0&&tt(()=>t[16].call(D)),De.disabled=!0,De.selected=!0,De.__value="",De.value=De.__value,m(ge,"class","othersInput svelte-1myljlf"),t[2].numBeds===void 0&&tt(()=>t[17].call(ge)),ke.disabled=!0,ke.selected=!0,ke.__value="",ke.value=ke.__value,m(Be,"class","othersInput svelte-1myljlf"),t[2].numBaths===void 0&&tt(()=>t[18].call(Be)),ie.disabled=!0,ie.selected=!0,ie.__value="",ie.value=ie.__value,m(B,"class","othersInput svelte-1myljlf"),t[2].halfBathroom===void 0&&tt(()=>t[19].call(B)),ht.disabled=!0,ht.selected=!0,ht.__value="",ht.value=ht.__value,m(nt,"class","othersInput svelte-1myljlf"),t[2].numParks===void 0&&tt(()=>t[20].call(nt)),m(Xe,"class","ubiTags svelte-1myljlf")},m(I,Z){k(I,e,Z),k(I,n,Z),k(I,s,Z),c(s,i),Ze.m(i,null),c(s,r),c(s,o),c(o,a),de(a,t[2].name),c(o,l),c(o,u),de(u,t[2].lastname),c(s,h),c(s,f),c(f,d),de(d,t[2].telephon),c(f,g),c(f,_),de(_,t[2].email),k(I,v,Z),k(I,b,Z),c(b,E),c(E,C);for(let fe=0;fe<Pe.length;fe+=1)Pe[fe].m(E,null);Ue(E,t[2].propCont),c(b,O),c(b,A),de(A,t[2].budget),k(I,H,Z),k(I,$,Z),c($,F),de(F,t[2].comContact),k(I,G,Z),k(I,R,Z),c(R,L);for(let fe=0;fe<je.length;fe+=1)je[fe].m(R,null);Ue(R,t[2].typeContact),k(I,V,Z),k(I,U,Z),c(U,te);for(let fe=0;fe<Qe.length;fe+=1)Qe[fe].m(U,null);Ue(U,t[2].selecMC),k(I,ee,Z),k(I,x,Z),c(x,K);for(let fe=0;fe<lt.length;fe+=1)lt[fe].m(x,null);Ue(x,t[2].modePay),k(I,se,Z),k(I,P,Z),c(P,N);for(let fe=0;fe<it.length;fe+=1)it[fe].m(P,null);Ue(P,t[2].selecTP),k(I,z,Z),k(I,D,Z),c(D,Q);for(let fe=0;fe<ut.length;fe+=1)ut[fe].m(D,null);Ue(D,t[2].rangeProp),k(I,me,Z),k(I,ge,Z),c(ge,De);for(let fe=0;fe<he.length;fe+=1)he[fe].m(ge,null);Ue(ge,t[2].numBeds),k(I,Ie,Z),k(I,Be,Z),c(Be,ke);for(let fe=0;fe<_e.length;fe+=1)_e[fe].m(Be,null);Ue(Be,t[2].numBaths),k(I,Fe,Z),k(I,B,Z),c(B,ie);for(let fe=0;fe<$e.length;fe+=1)$e[fe].m(B,null);Ue(B,t[2].halfBathroom),k(I,_t,Z),k(I,nt,Z),c(nt,ht);for(let fe=0;fe<Le.length;fe+=1)Le[fe].m(nt,null);Ue(nt,t[2].numParks),k(I,Gt,Z),k(I,Xe,Z),oe(vt,Xe,null),c(Xe,Wt),oe(We,Xe,null),Et=!0,Qt||(ft=[q(a,"input",t[5]),q(u,"input",t[6]),q(d,"input",t[7]),q(_,"input",t[8]),q(E,"change",t[9]),q(A,"input",t[10]),q(F,"input",t[11]),q(R,"change",t[12]),q(U,"change",t[13]),q(x,"change",t[14]),q(P,"change",t[15]),q(D,"change",t[16]),q(ge,"change",t[17]),q(Be,"change",t[18]),q(B,"change",t[19]),q(nt,"change",t[20])],Qt=!0)},p(I,Z){if(yt===(yt=Vt(I))&&Ze?Ze.p(I,Z):(Ze.d(1),Ze=yt(I),Ze&&(Ze.c(),Ze.m(i,null))),Z[0]&5&&a.value!==I[2].name&&de(a,I[2].name),Z[0]&5&&u.value!==I[2].lastname&&de(u,I[2].lastname),Z[0]&5&&de(d,I[2].telephon),Z[0]&5&&_.value!==I[2].email&&de(_,I[2].email),Z[0]&1){et=I[0];let M;for(M=0;M<et.length;M+=1){const Ce=hf(I,et,M);Pe[M]?Pe[M].p(Ce,Z):(Pe[M]=ff(Ce),Pe[M].c(),Pe[M].m(E,null))}for(;M<Pe.length;M+=1)Pe[M].d(1);Pe.length=et.length}if(Z[0]&5&&Ue(E,I[2].propCont),Z[0]&5&&ps(A.value)!==I[2].budget&&de(A,I[2].budget),Z[0]&5&&de(F,I[2].comContact),Z&0){Rt=Yh;let M;for(M=0;M<Rt.length;M+=1){const Ce=cf(I,Rt,M);je[M]?je[M].p(Ce,Z):(je[M]=df(Ce),je[M].c(),je[M].m(R,null))}for(;M<je.length;M+=1)je[M].d(1);je.length=Rt.length}if(Z[0]&5&&Ue(R,I[2].typeContact),Z&0){xt=xh;let M;for(M=0;M<xt.length;M+=1){const Ce=uf(I,xt,M);Qe[M]?Qe[M].p(Ce,Z):(Qe[M]=pf(Ce),Qe[M].c(),Qe[M].m(U,null))}for(;M<Qe.length;M+=1)Qe[M].d(1);Qe.length=xt.length}if(Z[0]&5&&Ue(U,I[2].selecMC),Z&0){st=Xh;let M;for(M=0;M<st.length;M+=1){const Ce=lf(I,st,M);lt[M]?lt[M].p(Ce,Z):(lt[M]=mf(Ce),lt[M].c(),lt[M].m(x,null))}for(;M<lt.length;M+=1)lt[M].d(1);lt.length=st.length}if(Z[0]&5&&Ue(x,I[2].modePay),Z&0){It=Bo;let M;for(M=0;M<It.length;M+=1){const Ce=af(I,It,M);it[M]?it[M].p(Ce,Z):(it[M]=gf(Ce),it[M].c(),it[M].m(P,null))}for(;M<it.length;M+=1)it[M].d(1);it.length=It.length}if(Z[0]&5&&Ue(P,I[2].selecTP),Z&0){Ct=Zh;let M;for(M=0;M<Ct.length;M+=1){const Ce=of(I,Ct,M);ut[M]?ut[M].p(Ce,Z):(ut[M]=_f(Ce),ut[M].c(),ut[M].m(D,null))}for(;M<ut.length;M+=1)ut[M].d(1);ut.length=Ct.length}if(Z[0]&5&&Ue(D,I[2].rangeProp),Z&0){Pt=jo;let M;for(M=0;M<Pt.length;M+=1){const Ce=rf(I,Pt,M);he[M]?he[M].p(Ce,Z):(he[M]=vf(Ce),he[M].c(),he[M].m(ge,null))}for(;M<he.length;M+=1)he[M].d(1);he.length=Pt.length}if(Z[0]&5&&Ue(ge,I[2].numBeds),Z&0){we=Rn;let M;for(M=0;M<we.length;M+=1){const Ce=sf(I,we,M);_e[M]?_e[M].p(Ce,Z):(_e[M]=yf(Ce),_e[M].c(),_e[M].m(Be,null))}for(;M<_e.length;M+=1)_e[M].d(1);_e.length=we.length}if(Z[0]&5&&Ue(Be,I[2].numBaths),Z&0){Yt=Rn;let M;for(M=0;M<Yt.length;M+=1){const Ce=nf(I,Yt,M);$e[M]?$e[M].p(Ce,Z):($e[M]=bf(Ce),$e[M].c(),$e[M].m(B,null))}for(;M<$e.length;M+=1)$e[M].d(1);$e.length=Yt.length}if(Z[0]&5&&Ue(B,I[2].halfBathroom),Z&0){on=Rn;let M;for(M=0;M<on.length;M+=1){const Ce=tf(I,on,M);Le[M]?Le[M].p(Ce,Z):(Le[M]=wf(Ce),Le[M].c(),Le[M].m(nt,null))}for(;M<Le.length;M+=1)Le[M].d(1);Le.length=on.length}Z[0]&5&&Ue(nt,I[2].numParks);const fe={};!Tt&&Z[0]&4&&(Tt=!0,fe.ubication=I[2].locaProperty,Ms(()=>Tt=!1)),vt.$set(fe);const bt={};!Ft&&Z[0]&4&&(Ft=!0,bt.tag=I[2].tagsProperty,Ms(()=>Ft=!1)),We.$set(bt)},i(I){Et||(j(vt.$$.fragment,I),j(We.$$.fragment,I),Et=!0)},o(I){W(vt.$$.fragment,I),W(We.$$.fragment,I),Et=!1},d(I){I&&w(e),I&&w(n),I&&w(s),Ze.d(),I&&w(v),I&&w(b),Ke(Pe,I),I&&w(H),I&&w($),I&&w(G),I&&w(R),Ke(je,I),I&&w(V),I&&w(U),Ke(Qe,I),I&&w(ee),I&&w(x),Ke(lt,I),I&&w(se),I&&w(P),Ke(it,I),I&&w(z),I&&w(D),Ke(ut,I),I&&w(me),I&&w(ge),Ke(he,I),I&&w(Ie),I&&w(Be),Ke(_e,I),I&&w(Fe),I&&w(B),Ke($e,I),I&&w(_t),I&&w(nt),Ke(Le,I),I&&w(Gt),I&&w(Xe),ae(vt),ae(We),Qt=!1,Je(ft)}}}function pI(t,e,n){let s;Ve(t,ct,V=>n(2,s=V));var i=[];let r=Vn,o=!1;(()=>{for(let V of r){let U=`${V.nameProperty} ${V.claveEB} - ${(V.price/1e6).toFixed(2)}`;n(0,i=[...i,U])}return n(0,i=i.sort())})();function a(){n(1,o=!0)}function l(){s.createdAt=this.value,ct.set(s),n(0,i)}function u(){s.name=this.value,ct.set(s),n(0,i)}function h(){s.lastname=this.value,ct.set(s),n(0,i)}function f(){s.telephon=this.value,ct.set(s),n(0,i)}function d(){s.email=this.value,ct.set(s),n(0,i)}function g(){s.propCont=Xt(this),ct.set(s),n(0,i)}function _(){s.budget=ps(this.value),ct.set(s),n(0,i)}function v(){s.comContact=this.value,ct.set(s),n(0,i)}function b(){s.typeContact=Xt(this),ct.set(s),n(0,i)}function E(){s.selecMC=Xt(this),ct.set(s),n(0,i)}function C(){s.modePay=Xt(this),ct.set(s),n(0,i)}function O(){s.selecTP=Xt(this),ct.set(s),n(0,i)}function A(){s.rangeProp=Xt(this),ct.set(s),n(0,i)}function H(){s.numBeds=Xt(this),ct.set(s),n(0,i)}function $(){s.numBaths=Xt(this),ct.set(s),n(0,i)}function F(){s.halfBathroom=Xt(this),ct.set(s),n(0,i)}function G(){s.numParks=Xt(this),ct.set(s),n(0,i)}function R(V){t.$$.not_equal(s.locaProperty,V)&&(s.locaProperty=V,ct.set(s))}function L(V){t.$$.not_equal(s.tagsProperty,V)&&(s.tagsProperty=V,ct.set(s))}return[i,o,s,a,l,u,h,f,d,g,_,v,b,E,C,O,A,H,$,F,G,R,L]}class mI extends Ye{constructor(e){super(),xe(this,e,pI,dI,Ge,{},null,[-1,-1])}}function kf(t,e,n){const s=t.slice();return s[24]=e[n],s}function Ef(t,e,n){const s=t.slice();return s[27]=e[n],s}function Tf(t,e,n){const s=t.slice();return s[30]=e[n],s}function If(t,e,n){const s=t.slice();return s[33]=e[n],s}function Cf(t,e,n){const s=t.slice();return s[36]=e[n],s}function Sf(t,e,n){const s=t.slice();return s[39]=e[n],s}function Af(t,e,n){const s=t.slice();return s[42]=e[n],s}function gI(t){let e,n=Tn(t[1].createdAt)+"",s,i,r;return{c(){e=p("h3"),s=S(n),m(e,"class","dataInput")},m(o,a){k(o,e,a),c(e,s),i||(r=q(e,"dblclick",t[3]),i=!0)},p(o,a){a[0]&2&&n!==(n=Tn(o[1].createdAt)+"")&&re(s,n)},d(o){o&&w(e),i=!1,r()}}}function _I(t){let e,n,s;return{c(){e=p("input"),m(e,"class","dataInput"),m(e,"type","date")},m(i,r){k(i,e,r),de(e,t[1].createdAt),n||(s=q(e,"input",t[4]),n=!0)},p(i,r){r[0]&2&&de(e,i[1].createdAt)},d(i){i&&w(e),n=!1,s()}}}function Df(t){let e,n=t[42]+"",s;return{c(){e=p("option"),s=S(n),m(e,"type","checkbox"),e.__value=t[42],e.value=e.__value},m(i,r){k(i,e,r),c(e,s)},p:ce,d(i){i&&w(e)}}}function Rf(t){let e,n=t[39]+"",s,i;return{c(){e=p("option"),s=S(n),i=y(),m(e,"type","checkbox"),e.__value=t[39],e.value=e.__value},m(r,o){k(r,e,o),c(e,s),c(e,i)},p:ce,d(r){r&&w(e)}}}function Pf(t){let e,n=t[36]+"",s,i;return{c(){e=p("option"),s=S(n),i=S(" Rec\xE1maras"),m(e,"type","checkbox"),e.__value=t[36],e.value=e.__value},m(r,o){k(r,e,o),c(e,s),c(e,i)},p:ce,d(r){r&&w(e)}}}function Nf(t){let e,n=t[33]+"",s,i;return{c(){e=p("option"),s=S(n),i=S(" ba\xF1os"),m(e,"type","checkbox"),e.__value=t[33],e.value=e.__value},m(r,o){k(r,e,o),c(e,s),c(e,i)},p:ce,d(r){r&&w(e)}}}function Of(t){let e,n=t[30]+"",s,i;return{c(){e=p("option"),s=S(n),i=S(" Medios ba\xF1os"),m(e,"type","checkbox"),e.__value=t[30],e.value=e.__value},m(r,o){k(r,e,o),c(e,s),c(e,i)},p:ce,d(r){r&&w(e)}}}function $f(t){let e,n=t[27]+"",s,i;return{c(){e=p("option"),s=S(n),i=S(" Estacionamientos"),m(e,"type","checkbox"),e.__value=t[27],e.value=e.__value},m(r,o){k(r,e,o),c(e,s),c(e,i)},p:ce,d(r){r&&w(e)}}}function Lf(t){let e,n=t[24]+"",s;return{c(){e=p("option"),s=S(n),m(e,"type","checkbox"),e.__value=t[24],e.value=e.__value},m(i,r){k(i,e,r),c(e,s)},p:ce,d(i){i&&w(e)}}}function vI(t){let e,n,s,i,r,o,a,l,u,h,f,d,g,_,v,b,E,C,O,A,H,$,F,G,R,L,V,U,te,ee,x,K,se,P,N,z,D,Q,me,ge,De,Ie,Be,ke,Fe,B,ie,_t,nt,ht,Gt,Xe,vt,Tt,Wt,We,Ft,Et,Qt,ft,Vt,yt,Ze,et,Pe,Rt,je,xt,Qe,st,lt,It,it,Ct;function ut(T,ne){if(T[0])return _I;if(T[2]==="propEditing")return gI}let Pt=ut(t),he=Pt&&Pt(t),we=Bo,_e=[];for(let T=0;T<we.length;T+=1)_e[T]=Df(Af(t,we,T));let Yt=Jh,$e=[];for(let T=0;T<Yt.length;T+=1)$e[T]=Rf(Sf(t,Yt,T));let on=jo,Le=[];for(let T=0;T<on.length;T+=1)Le[T]=Pf(Cf(t,on,T));let $n=Rn,St=[];for(let T=0;T<$n.length;T+=1)St[T]=Nf(If(t,$n,T));let An=Rn,mt=[];for(let T=0;T<An.length;T+=1)mt[T]=Of(Tf(t,An,T));let I=Rn,Z=[];for(let T=0;T<I.length;T+=1)Z[T]=$f(Ef(t,I,T));let fe=ef,bt=[];for(let T=0;T<fe.length;T+=1)bt[T]=Lf(kf(t,fe,T));function M(T){t[22](T)}let Ce={};t[1].locaProperty!==void 0&&(Ce.ubication=t[1].locaProperty),je=new l_({props:Ce}),Yn.push(()=>Us(je,"ubication",M));function Br(T){t[23](T)}let os={};return t[1].tagsProperty!==void 0&&(os.tag=t[1].tagsProperty),st=new u_({props:os}),Yn.push(()=>Us(st,"tag",Br)),{c(){e=p("div"),he&&he.c(),n=y(),s=p("select"),i=p("option"),i.textContent="Tipo de Propiedad";for(let T=0;T<_e.length;T+=1)_e[T].c();r=y(),o=p("label"),o.innerHTML=`Titulo
       <input type="text"/>`,a=y(),l=p("label"),u=S(`Colonia\r
        `),h=p("input"),f=y(),d=p("label"),g=S(`Nombre de la Propiead\r
        `),_=p("input"),v=y(),b=p("label"),E=S(`Clave EB\r
        `),C=p("input"),O=y(),A=p("label"),H=S(`Clave MH\r
        `),$=p("input"),F=y(),G=p("div"),R=p("textarea"),L=y(),V=p("select"),U=p("option"),U.textContent="Tipo de Operaci\xF3n";for(let T=0;T<$e.length;T+=1)$e[T].c();te=y(),ee=p("select"),x=p("option"),x.textContent="# Rec\xE1maras";for(let T=0;T<Le.length;T+=1)Le[T].c();K=y(),se=p("select"),P=p("option"),P.textContent="# Ba\xF1os";for(let T=0;T<St.length;T+=1)St[T].c();N=y(),z=p("select"),D=p("option"),D.textContent="# Medios Ba\xF1os";for(let T=0;T<mt.length;T+=1)mt[T].c();Q=y(),me=p("select"),ge=p("option"),ge.textContent="# Estacionamientos";for(let T=0;T<Z.length;T+=1)Z[T].c();De=y(),Ie=p("label"),Be=S(`Area de Construcci\xF3n\r
            `),ke=p("input"),Fe=y(),B=p("label"),ie=S(`Area de Terreno\r
            `),_t=p("input"),nt=y(),ht=p("label"),Gt=S(`Precio\r
            `),Xe=p("input"),vt=y(),Tt=p("label"),Wt=S(`Link Imgen\r
        `),We=p("input"),Ft=y(),Et=p("label"),Qt=S(`Link de la Propiedad\r
        `),ft=p("input"),Vt=y(),yt=p("label"),yt.innerHTML=`Propietario
            <input type="text"/>`,Ze=y(),et=p("select"),Pe=p("option"),Pe.textContent="Tipo de Encargado";for(let T=0;T<bt.length;T+=1)bt[T].c();Rt=y(),le(je.$$.fragment),Qe=y(),le(st.$$.fragment),i.disabled=!0,i.selected=!0,i.__value="",i.value=i.__value,m(s,"class","selTP"),m(s,"id","selTP"),m(s,"name","selTP"),t[1].selecTP===void 0&&tt(()=>t[5].call(s)),m(h,"type","text"),m(_,"type","text"),m(C,"type","text"),m($,"type","text"),m(R,"placeholder","Comentarios"),m(R,"cols","65"),m(R,"rows","5"),m(R,"class","form-control"),m(G,"class","col"),U.disabled=!0,U.selected=!0,U.__value="",U.value=U.__value,t[1].typeOperation===void 0&&tt(()=>t[11].call(V)),x.disabled=!0,x.selected=!0,x.__value="",x.value=x.__value,t[1].beds===void 0&&tt(()=>t[12].call(ee)),P.disabled=!0,P.selected=!0,P.__value="",P.value=P.__value,t[1].bathroom===void 0&&tt(()=>t[13].call(se)),D.disabled=!0,D.selected=!0,D.__value="",D.value=D.__value,t[1].halfBathroom===void 0&&tt(()=>t[14].call(z)),ge.disabled=!0,ge.selected=!0,ge.__value="",ge.value=ge.__value,t[1].park===void 0&&tt(()=>t[15].call(me)),m(ke,"type","number"),m(_t,"type","number"),m(Xe,"type","number"),m(We,"type","text"),m(ft,"type","text"),Pe.disabled=!0,Pe.selected=!0,Pe.__value="",Pe.value=Pe.__value,m(et,"name","typeSaller"),t[1].typeSaller===void 0&&tt(()=>t[21].call(et))},m(T,ne){k(T,e,ne),he&&he.m(e,null),k(T,n,ne),k(T,s,ne),c(s,i);for(let Ne=0;Ne<_e.length;Ne+=1)_e[Ne].m(s,null);Ue(s,t[1].selecTP),k(T,r,ne),k(T,o,ne),k(T,a,ne),k(T,l,ne),c(l,u),c(l,h),de(h,t[1].colonia),k(T,f,ne),k(T,d,ne),c(d,g),c(d,_),de(_,t[1].nameProperty),k(T,v,ne),k(T,b,ne),c(b,E),c(b,C),de(C,t[1].claveEB),k(T,O,ne),k(T,A,ne),c(A,H),c(A,$),de($,t[1].claveMH),k(T,F,ne),k(T,G,ne),c(G,R),de(R,t[1].description),k(T,L,ne),k(T,V,ne),c(V,U);for(let Ne=0;Ne<$e.length;Ne+=1)$e[Ne].m(V,null);Ue(V,t[1].typeOperation),k(T,te,ne),k(T,ee,ne),c(ee,x);for(let Ne=0;Ne<Le.length;Ne+=1)Le[Ne].m(ee,null);Ue(ee,t[1].beds),k(T,K,ne),k(T,se,ne),c(se,P);for(let Ne=0;Ne<St.length;Ne+=1)St[Ne].m(se,null);Ue(se,t[1].bathroom),k(T,N,ne),k(T,z,ne),c(z,D);for(let Ne=0;Ne<mt.length;Ne+=1)mt[Ne].m(z,null);Ue(z,t[1].halfBathroom),k(T,Q,ne),k(T,me,ne),c(me,ge);for(let Ne=0;Ne<Z.length;Ne+=1)Z[Ne].m(me,null);Ue(me,t[1].park),k(T,De,ne),k(T,Ie,ne),c(Ie,Be),c(Ie,ke),de(ke,t[1].areaBuilding),k(T,Fe,ne),k(T,B,ne),c(B,ie),c(B,_t),de(_t,t[1].areaTotal),k(T,nt,ne),k(T,ht,ne),c(ht,Gt),c(ht,Xe),de(Xe,t[1].price),k(T,vt,ne),k(T,Tt,ne),c(Tt,Wt),c(Tt,We),de(We,t[1].urlImage),k(T,Ft,ne),k(T,Et,ne),c(Et,Qt),c(Et,ft),de(ft,t[1].urlProp),k(T,Vt,ne),k(T,yt,ne),k(T,Ze,ne),k(T,et,ne),c(et,Pe);for(let Ne=0;Ne<bt.length;Ne+=1)bt[Ne].m(et,null);Ue(et,t[1].typeSaller),k(T,Rt,ne),oe(je,T,ne),k(T,Qe,ne),oe(st,T,ne),It=!0,it||(Ct=[q(s,"change",t[5]),q(h,"input",t[6]),q(_,"input",t[7]),q(C,"input",t[8]),q($,"input",t[9]),q(R,"input",t[10]),q(V,"change",t[11]),q(ee,"change",t[12]),q(se,"change",t[13]),q(z,"change",t[14]),q(me,"change",t[15]),q(ke,"input",t[16]),q(_t,"input",t[17]),q(Xe,"input",t[18]),q(We,"input",t[19]),q(ft,"input",t[20]),q(et,"change",t[21])],it=!0)},p(T,ne){if(Pt===(Pt=ut(T))&&he?he.p(T,ne):(he&&he.d(1),he=Pt&&Pt(T),he&&(he.c(),he.m(e,null))),ne&0){we=Bo;let Y;for(Y=0;Y<we.length;Y+=1){const rt=Af(T,we,Y);_e[Y]?_e[Y].p(rt,ne):(_e[Y]=Df(rt),_e[Y].c(),_e[Y].m(s,null))}for(;Y<_e.length;Y+=1)_e[Y].d(1);_e.length=we.length}if(ne[0]&2&&Ue(s,T[1].selecTP),ne[0]&2&&h.value!==T[1].colonia&&de(h,T[1].colonia),ne[0]&2&&_.value!==T[1].nameProperty&&de(_,T[1].nameProperty),ne[0]&2&&C.value!==T[1].claveEB&&de(C,T[1].claveEB),ne[0]&2&&$.value!==T[1].claveMH&&de($,T[1].claveMH),ne[0]&2&&de(R,T[1].description),ne&0){Yt=Jh;let Y;for(Y=0;Y<Yt.length;Y+=1){const rt=Sf(T,Yt,Y);$e[Y]?$e[Y].p(rt,ne):($e[Y]=Rf(rt),$e[Y].c(),$e[Y].m(V,null))}for(;Y<$e.length;Y+=1)$e[Y].d(1);$e.length=Yt.length}if(ne[0]&2&&Ue(V,T[1].typeOperation),ne&0){on=jo;let Y;for(Y=0;Y<on.length;Y+=1){const rt=Cf(T,on,Y);Le[Y]?Le[Y].p(rt,ne):(Le[Y]=Pf(rt),Le[Y].c(),Le[Y].m(ee,null))}for(;Y<Le.length;Y+=1)Le[Y].d(1);Le.length=on.length}if(ne[0]&2&&Ue(ee,T[1].beds),ne&0){$n=Rn;let Y;for(Y=0;Y<$n.length;Y+=1){const rt=If(T,$n,Y);St[Y]?St[Y].p(rt,ne):(St[Y]=Nf(rt),St[Y].c(),St[Y].m(se,null))}for(;Y<St.length;Y+=1)St[Y].d(1);St.length=$n.length}if(ne[0]&2&&Ue(se,T[1].bathroom),ne&0){An=Rn;let Y;for(Y=0;Y<An.length;Y+=1){const rt=Tf(T,An,Y);mt[Y]?mt[Y].p(rt,ne):(mt[Y]=Of(rt),mt[Y].c(),mt[Y].m(z,null))}for(;Y<mt.length;Y+=1)mt[Y].d(1);mt.length=An.length}if(ne[0]&2&&Ue(z,T[1].halfBathroom),ne&0){I=Rn;let Y;for(Y=0;Y<I.length;Y+=1){const rt=Ef(T,I,Y);Z[Y]?Z[Y].p(rt,ne):(Z[Y]=$f(rt),Z[Y].c(),Z[Y].m(me,null))}for(;Y<Z.length;Y+=1)Z[Y].d(1);Z.length=I.length}if(ne[0]&2&&Ue(me,T[1].park),ne[0]&2&&ps(ke.value)!==T[1].areaBuilding&&de(ke,T[1].areaBuilding),ne[0]&2&&ps(_t.value)!==T[1].areaTotal&&de(_t,T[1].areaTotal),ne[0]&2&&ps(Xe.value)!==T[1].price&&de(Xe,T[1].price),ne[0]&2&&We.value!==T[1].urlImage&&de(We,T[1].urlImage),ne[0]&2&&ft.value!==T[1].urlProp&&de(ft,T[1].urlProp),ne&0){fe=ef;let Y;for(Y=0;Y<fe.length;Y+=1){const rt=kf(T,fe,Y);bt[Y]?bt[Y].p(rt,ne):(bt[Y]=Lf(rt),bt[Y].c(),bt[Y].m(et,null))}for(;Y<bt.length;Y+=1)bt[Y].d(1);bt.length=fe.length}ne[0]&2&&Ue(et,T[1].typeSaller);const Ne={};!xt&&ne[0]&2&&(xt=!0,Ne.ubication=T[1].locaProperty,Ms(()=>xt=!1)),je.$set(Ne);const Ii={};!lt&&ne[0]&2&&(lt=!0,Ii.tag=T[1].tagsProperty,Ms(()=>lt=!1)),st.$set(Ii)},i(T){It||(j(je.$$.fragment,T),j(st.$$.fragment,T),It=!0)},o(T){W(je.$$.fragment,T),W(st.$$.fragment,T),It=!1},d(T){T&&w(e),he&&he.d(),T&&w(n),T&&w(s),Ke(_e,T),T&&w(r),T&&w(o),T&&w(a),T&&w(l),T&&w(f),T&&w(d),T&&w(v),T&&w(b),T&&w(O),T&&w(A),T&&w(F),T&&w(G),T&&w(L),T&&w(V),Ke($e,T),T&&w(te),T&&w(ee),Ke(Le,T),T&&w(K),T&&w(se),Ke(St,T),T&&w(N),T&&w(z),Ke(mt,T),T&&w(Q),T&&w(me),Ke(Z,T),T&&w(De),T&&w(Ie),T&&w(Fe),T&&w(B),T&&w(nt),T&&w(ht),T&&w(vt),T&&w(Tt),T&&w(Ft),T&&w(Et),T&&w(Vt),T&&w(yt),T&&w(Ze),T&&w(et),Ke(bt,T),T&&w(Rt),ae(je,T),T&&w(Qe),ae(st,T),it=!1,Je(Ct)}}}function yI(t,e,n){let s,i;Ve(t,ot,V=>n(1,s=V)),Ve(t,wt,V=>n(2,i=V));let r=!1;function o(){n(0,r=!0)}function a(){s.createdAt=this.value,ot.set(s)}function l(){s.selecTP=Xt(this),ot.set(s)}function u(){s.colonia=this.value,ot.set(s)}function h(){s.nameProperty=this.value,ot.set(s)}function f(){s.claveEB=this.value,ot.set(s)}function d(){s.claveMH=this.value,ot.set(s)}function g(){s.description=this.value,ot.set(s)}function _(){s.typeOperation=Xt(this),ot.set(s)}function v(){s.beds=Xt(this),ot.set(s)}function b(){s.bathroom=Xt(this),ot.set(s)}function E(){s.halfBathroom=Xt(this),ot.set(s)}function C(){s.park=Xt(this),ot.set(s)}function O(){s.areaBuilding=ps(this.value),ot.set(s)}function A(){s.areaTotal=ps(this.value),ot.set(s)}function H(){s.price=ps(this.value),ot.set(s)}function $(){s.urlImage=this.value,ot.set(s)}function F(){s.urlProp=this.value,ot.set(s)}function G(){s.typeSaller=Xt(this),ot.set(s)}function R(V){t.$$.not_equal(s.locaProperty,V)&&(s.locaProperty=V,ot.set(s))}function L(V){t.$$.not_equal(s.tagsProperty,V)&&(s.tagsProperty=V,ot.set(s))}return[r,s,i,o,a,l,u,h,f,d,g,_,v,b,E,C,O,A,H,$,F,G,R,L]}class bI extends Ye{constructor(e){super(),xe(this,e,yI,vI,Ge,{},null,[-1,-1])}}function wI(t){let e;return{c(){e=S("Editar")},m(n,s){k(n,e,s)},d(n){n&&w(e)}}}function kI(t){let e;return{c(){e=S("Guardar")},m(n,s){k(n,e,s)},d(n){n&&w(e)}}}function EI(t){let e,n,s,i,r,o,a,l,u,h;n=new mI({});function f(_,v){return _[0]?wI:kI}let d=f(t),g=d(t);return{c(){e=p("div"),le(n.$$.fragment),s=y(),i=p("div"),r=p("button"),g.c(),o=y(),a=p("button"),a.textContent="Cancel",m(r,"class","btn-save"),m(a,"class","btn-cancel"),m(i,"class","contSavCan svelte-1at07r"),m(e,"class","altaContactos")},m(_,v){k(_,e,v),oe(n,e,null),c(e,s),c(e,i),c(i,r),g.m(r,null),c(i,o),c(i,a),l=!0,u||(h=[q(r,"click",t[5]),q(a,"click",t[3])],u=!0)},p(_,[v]){d!==(d=f(_))&&(g.d(1),g=d(_),g&&(g.c(),g.m(r,null)))},i(_){l||(j(n.$$.fragment,_),l=!0)},o(_){W(n.$$.fragment,_),l=!1},d(_){_&&w(e),ae(n),g.d(),u=!1,Je(h)}}}function TI(t,e,n){let s,i;Ve(t,wt,f=>n(7,s=f)),Ve(t,ct,f=>n(1,i=f));let r=!1,o;async function a(f){if(o=Date.now(),f={...f,createdAt:o},s!="contEditing"){const d=ns(sn,"contacts");await rr(d,f)}else await ba(ss(sn,"contacts",f.id),f),n(0,r=!1);f=[],gt(wt,s="contSelect",s)}function l(f){try{console.log("se dio de alta a: ");const d=ns(sn,"todos");rr(d,f)}catch(d){console.log("error",d)}}function u(){n(0,r=!0),location.href="/"}return[r,i,a,u,l,()=>a(i)]}class II extends Ye{constructor(e){super(),xe(this,e,TI,EI,Ge,{addContact:4})}get addContact(){return this.$$.ctx[4]}}function Mf(t,e,n){const s=t.slice();return s[40]=e[n],s}function Uf(t,e,n){const s=t.slice();return s[43]=e[n],s}function Ff(t){let e,n,s,i,r,o=t[8].name+"",a,l,u=t[8].lastname+"",h,f,d,g,_=Tn(t[8].createdAt)+"",v,b,E,C,O=t[8].selecTP+"",A,H,$=t[8].numBeds+"",F,G,R=t[8].numBaths+"",L,V,U=t[8].numParks+"",te,ee,x,K,se,P,N=t[8].budget+"",z,D,Q,me=t[8].selecTP+"",ge,De,Ie,Be,ke,Fe=t[8].telephon+"",B,ie,_t,nt=t[8].email+"",ht,Gt,Xe,vt,Tt=t[8].tagsProperty.join(",  ")+"",Wt,We,Ft,Et,Qt=t[8].locaProperty.join(",  ")+"",ft,Vt,yt,Ze,et,Pe,Rt,je,xt,Qe,st=t[8].contactStage+"",lt,It,it,Ct=t[8].comContact+"",ut,Pt,he,we,_e,Yt,$e,on,Le,$n,St,An,mt,I,Z,fe,bt,M,Ce,Br,os,T,ne,Ne,Ii,Y,rt,tc,Ci,Ia,Si,Nt,Ca,nc,xs=t[8].sendedProperties,vn=[];for(let ve=0;ve<xs.length;ve+=1)vn[ve]=Vf(Uf(t,xs,ve));let yn=t[0]&&Bf(t),Bt=t[2]&&jf(t),jt=t[7]&&qf(t),qt=t[6]&&Hf(t);return{c(){e=p("div"),n=p("div"),s=p("h4"),s.textContent="Contacto",i=y(),r=p("h2"),a=S(o),l=y(),h=S(u),f=y(),d=p("p"),g=S("Fecha Alta: "),v=S(_),b=y(),E=p("p"),C=S("Busca  "),A=S(O),H=S(", de "),F=S($),G=S(" rec\xE1maras,  "),L=S(R),V=S(" ba\xF1os y "),te=S(U),ee=S(" estacionamientos"),x=y(),K=p("p"),se=S("Presupuesto tope: "),P=p("strong"),z=S(N),D=S(" : Tipo de propiedad buscada: "),Q=p("strong"),ge=S(me),De=y(),Ie=p("p"),Be=S("Tel\xE9fono: "),ke=p("strong"),B=S(Fe),ie=S(" ---- Email: "),_t=p("strong"),ht=S(nt),Gt=y(),Xe=p("p"),vt=S("Preferencias: "),Wt=S(Tt),We=y(),Ft=p("p"),Et=S("Ubicaciones: "),ft=S(Qt),Vt=y(),yt=p("div"),Ze=p("p"),Ze.textContent="Propiedades enviadas:",et=y(),Pe=p("div");for(let ve=0;ve<vn.length;ve+=1)vn[ve].c();Rt=y(),je=p("div"),yn&&yn.c(),xt=y(),Qe=p("p"),lt=S(st),It=y(),it=p("p"),ut=S(Ct),Pt=y(),he=p("div"),we=p("button"),we.textContent="Programar Evento",_e=y(),Bt&&Bt.c(),Yt=y(),$e=p("button"),$e.textContent="Ver Propiedades de Interes",on=y(),Le=p("button"),Le.textContent="Buscar Propiedad",$n=y(),jt&&jt.c(),St=y(),An=p("div"),mt=p("button"),mt.textContent="Cancelar",I=y(),Z=p("div"),fe=p("div"),bt=p("link"),M=y(),Ce=p("textarea"),Br=y(),os=p("div"),T=p("button"),T.textContent="Enviar WhatsApp",ne=y(),Ne=p("button"),Ne.textContent="Guardar Info",Ii=y(),Y=p("div"),rt=p("i"),rt.textContent="edit",tc=y(),Ci=p("i"),Ci.textContent="delete_forever",Ia=y(),qt&&qt.c(),Si=_n(),m(Pe,"class","mostImage svelte-ce274g"),m(yt,"class","propMost"),m(we,"class","btnCommon"),m($e,"class","btnCommon"),m(Le,"class","btnCommon"),m(mt,"class","btnCommon btnCancel"),m(bt,"href","https://fonts.googleapis.com/icon?family=Material+Icons"),m(bt,"rel","stylesheet"),m(Ce,"class","texArea"),m(Ce,"cols","65"),m(Ce,"rows","5"),m(Ce,"placeholder","Ingresa un comentario"),m(T,"class","btnCommon btnWhatsApp"),m(Ne,"class","btnCommon"),m(rt,"class","material-icons edit"),m(Ci,"class","material-icons delete"),m(Y,"class","iconContent"),m(e,"class","container")},m(ve,He){k(ve,e,He),c(e,n),c(n,s),c(n,i),c(n,r),c(r,a),c(r,l),c(r,h),c(n,f),c(n,d),c(d,g),c(d,v),c(n,b),c(n,E),c(E,C),c(E,A),c(E,H),c(E,F),c(E,G),c(E,L),c(E,V),c(E,te),c(E,ee),c(n,x),c(n,K),c(K,se),c(K,P),c(P,z),c(K,D),c(K,Q),c(Q,ge),c(n,De),c(n,Ie),c(Ie,Be),c(Ie,ke),c(ke,B),c(Ie,ie),c(Ie,_t),c(_t,ht),c(n,Gt),c(n,Xe),c(Xe,vt),c(Xe,Wt),c(n,We),c(n,Ft),c(Ft,Et),c(Ft,ft),c(n,Vt),c(n,yt),c(yt,Ze),c(yt,et),c(yt,Pe);for(let an=0;an<vn.length;an+=1)vn[an].m(Pe,null);c(e,Rt),c(e,je),yn&&yn.m(je,null),c(e,xt),c(e,Qe),c(Qe,lt),c(e,It),c(e,it),c(it,ut),c(e,Pt),c(e,he),c(he,we),c(he,_e),Bt&&Bt.m(he,null),c(he,Yt),c(he,$e),c(he,on),c(he,Le),c(he,$n),jt&&jt.m(he,null),c(e,St),c(e,An),c(An,mt),c(e,I),c(e,Z),c(Z,fe),c(fe,bt),c(fe,M),c(fe,Ce),de(Ce,t[4]),c(fe,Br),c(fe,os),c(os,T),c(os,ne),c(os,Ne),c(Z,Ii),c(Z,Y),c(Y,rt),c(Y,tc),c(Y,Ci),k(ve,Ia,He),qt&&qt.m(ve,He),k(ve,Si,He),Nt=!0,Ca||(nc=[q(we,"click",t[27]),q($e,"click",t[28]),q(Le,"click",t[14]),q(mt,"click",t[17]),q(Ce,"keypress",t[18]),q(Ce,"input",t[30]),q(T,"click",t[23]),q(Ne,"click",t[24]),q(rt,"click",t[19]),q(Ci,"click",t[20])],Ca=!0)},p(ve,He){if((!Nt||He[0]&256)&&o!==(o=ve[8].name+"")&&re(a,o),(!Nt||He[0]&256)&&u!==(u=ve[8].lastname+"")&&re(h,u),(!Nt||He[0]&256)&&_!==(_=Tn(ve[8].createdAt)+"")&&re(v,_),(!Nt||He[0]&256)&&O!==(O=ve[8].selecTP+"")&&re(A,O),(!Nt||He[0]&256)&&$!==($=ve[8].numBeds+"")&&re(F,$),(!Nt||He[0]&256)&&R!==(R=ve[8].numBaths+"")&&re(L,R),(!Nt||He[0]&256)&&U!==(U=ve[8].numParks+"")&&re(te,U),(!Nt||He[0]&256)&&N!==(N=ve[8].budget+"")&&re(z,N),(!Nt||He[0]&256)&&me!==(me=ve[8].selecTP+"")&&re(ge,me),(!Nt||He[0]&256)&&Fe!==(Fe=ve[8].telephon+"")&&re(B,Fe),(!Nt||He[0]&256)&&nt!==(nt=ve[8].email+"")&&re(ht,nt),(!Nt||He[0]&256)&&Tt!==(Tt=ve[8].tagsProperty.join(",  ")+"")&&re(Wt,Tt),(!Nt||He[0]&256)&&Qt!==(Qt=ve[8].locaProperty.join(",  ")+"")&&re(ft,Qt),He[0]&6402){xs=ve[8].sendedProperties;let an;for(an=0;an<xs.length;an+=1){const sc=Uf(ve,xs,an);vn[an]?vn[an].p(sc,He):(vn[an]=Vf(sc),vn[an].c(),vn[an].m(Pe,null))}for(;an<vn.length;an+=1)vn[an].d(1);vn.length=xs.length}ve[0]?yn?yn.p(ve,He):(yn=Bf(ve),yn.c(),yn.m(je,null)):yn&&(yn.d(1),yn=null),(!Nt||He[0]&256)&&st!==(st=ve[8].contactStage+"")&&re(lt,st),(!Nt||He[0]&256)&&Ct!==(Ct=ve[8].comContact+"")&&re(ut,Ct),ve[2]?Bt?(Bt.p(ve,He),He[0]&4&&j(Bt,1)):(Bt=jf(ve),Bt.c(),j(Bt,1),Bt.m(he,Yt)):Bt&&(Ot(),W(Bt,1,1,()=>{Bt=null}),$t()),ve[7]?jt?(jt.p(ve,He),He[0]&128&&j(jt,1)):(jt=qf(ve),jt.c(),j(jt,1),jt.m(he,null)):jt&&(Ot(),W(jt,1,1,()=>{jt=null}),$t()),He[0]&16&&de(Ce,ve[4]),ve[6]?qt?(qt.p(ve,He),He[0]&64&&j(qt,1)):(qt=Hf(ve),qt.c(),j(qt,1),qt.m(Si.parentNode,Si)):qt&&(Ot(),W(qt,1,1,()=>{qt=null}),$t())},i(ve){Nt||(j(Bt),j(jt),j(qt),Nt=!0)},o(ve){W(Bt),W(jt),W(qt),Nt=!1},d(ve){ve&&w(e),Ke(vn,ve),yn&&yn.d(),Bt&&Bt.d(),jt&&jt.d(),ve&&w(Ia),qt&&qt.d(ve),ve&&w(Si),Ca=!1,Je(nc)}}}function Vf(t){let e,n=t[43]+"",s,i,r,o;function a(){return t[25](t[43])}return{c(){e=p("p"),s=S(n),m(e,"value",i=t[43])},m(l,u){k(l,e,u),c(e,s),r||(o=[q(e,"mouseenter",a),q(e,"mouseout",t[12]),q(e,"dblclick",t[26])],r=!0)},p(l,u){t=l,u[0]&256&&n!==(n=t[43]+"")&&re(s,n),u[0]&256&&i!==(i=t[43])&&m(e,"value",i)},d(l){l&&w(e),r=!1,Je(o)}}}function Bf(t){let e,n=t[1][0].nameProperty+"",s,i,r,o,a;return{c(){e=p("h3"),s=S(n),i=y(),r=p("img"),m(e,"class","svelte-ce274g"),m(r,"class","imgPropContSelect"),m(r,"height","200"),fn(r.src,o=t[1][0].urlImage)||m(r,"src",o),m(r,"alt",a=t[1][0].claveEB)},m(l,u){k(l,e,u),c(e,s),k(l,i,u),k(l,r,u)},p(l,u){u[0]&2&&n!==(n=l[1][0].nameProperty+"")&&re(s,n),u[0]&2&&!fn(r.src,o=l[1][0].urlImage)&&m(r,"src",o),u[0]&2&&a!==(a=l[1][0].claveEB)&&m(r,"alt",a)},d(l){l&&w(e),l&&w(i),l&&w(r)}}}function jf(t){let e,n;const s=[t[8]];let i={};for(let r=0;r<s.length;r+=1)i=Kt(i,s[r]);return e=new sI({props:i}),e.$on("closeIt",t[21]),{c(){le(e.$$.fragment)},m(r,o){oe(e,r,o),n=!0},p(r,o){const a=o[0]&256?Cn(s,[Xn(r[8])]):{};e.$set(a)},i(r){n||(j(e.$$.fragment,r),n=!0)},o(r){W(e.$$.fragment,r),n=!1},d(r){ae(e,r)}}}function qf(t){let e,n,s;function i(o){t[29](o)}let r={};return t[3]!==void 0&&(r.searchTerm=t[3]),e=new ec({props:r}),Yn.push(()=>Us(e,"searchTerm",i)),e.$on("input",t[15]),{c(){le(e.$$.fragment)},m(o,a){oe(e,o,a),s=!0},p(o,a){const l={};!n&&a[0]&8&&(n=!0,l.searchTerm=o[3],Ms(()=>n=!1)),e.$set(l)},i(o){s||(j(e.$$.fragment,o),s=!0)},o(o){W(e.$$.fragment,o),s=!1},d(o){ae(e,o)}}}function Hf(t){let e,n,s,i=t[10].length+"",r,o,a,l,u=t[10],h=[];for(let g=0;g<u.length;g+=1)h[g]=Kf(Mf(t,u,g));const f=g=>W(h[g],1,1,()=>{h[g]=null});let d=t[10].length===0&&zf();return{c(){e=p("main"),n=p("h3"),s=S("Propiedades encontradas: "),r=S(i),o=y();for(let g=0;g<h.length;g+=1)h[g].c();a=y(),d&&d.c(),m(n,"class","svelte-ce274g"),m(e,"id","bookshelf"),m(e,"class","svelte-ce274g")},m(g,_){k(g,e,_),c(e,n),c(n,s),c(n,r),c(e,o);for(let v=0;v<h.length;v+=1)h[v].m(e,null);c(e,a),d&&d.m(e,null),l=!0},p(g,_){if((!l||_[0]&1024)&&i!==(i=g[10].length+"")&&re(r,i),_[0]&4195360){u=g[10];let v;for(v=0;v<u.length;v+=1){const b=Mf(g,u,v);h[v]?(h[v].p(b,_),j(h[v],1)):(h[v]=Kf(b),h[v].c(),j(h[v],1),h[v].m(e,a))}for(Ot(),v=u.length;v<h.length;v+=1)f(v);$t()}g[10].length===0?d||(d=zf(),d.c(),d.m(e,null)):d&&(d.d(1),d=null)},i(g){if(!l){for(let _=0;_<u.length;_+=1)j(h[_]);l=!0}},o(g){h=h.filter(Boolean);for(let _=0;_<h.length;_+=1)W(h[_]);l=!1},d(g){g&&w(e),Ke(h,g),d&&d.d()}}}function Kf(t){let e,n,s,i,r,o,a,l,u;const h=[t[40]];let f={};for(let d=0;d<h.length;d+=1)f=Kt(f,h[d]);return r=new o_({props:f}),{c(){e=p("section"),n=p("input"),i=y(),le(r.$$.fragment),m(n,"type","checkbox"),n.__value=s=t[40].urlProp,n.value=n.__value,m(n,"class","form-check"),t[32][0].push(n),m(e,"class","property svelte-ce274g")},m(d,g){k(d,e,g),c(e,n),n.checked=~t[5].indexOf(n.__value),c(e,i),oe(r,e,null),a=!0,l||(u=[q(n,"change",t[31]),q(e,"click",t[22])],l=!0)},p(d,g){t=d,(!a||g[0]&1024&&s!==(s=t[40].urlProp))&&(n.__value=s,n.value=n.__value),g[0]&32&&(n.checked=~t[5].indexOf(n.__value));const _=g[0]&1024?Cn(h,[Xn(t[40])]):{};r.$set(_)},i(d){a||(j(r.$$.fragment,d),tt(()=>{o||(o=Pn(e,$o,{duration:500,easing:Po},!0)),o.run(1)}),a=!0)},o(d){W(r.$$.fragment,d),o||(o=Pn(e,$o,{duration:500,easing:Po},!1)),o.run(0),a=!1},d(d){d&&w(e),t[32][0].splice(t[32][0].indexOf(n),1),ae(r),d&&o&&o.end(),l=!1,Je(u)}}}function zf(t){let e;return{c(){e=p("h3"),e.textContent='"No hay Propiedades para este contacto"',m(e,"class","svelte-ce274g")},m(n,s){k(n,e,s)},d(n){n&&w(e)}}}function CI(t){let e,n,s=t[9]==="contSelect"&&Ff(t);return{c(){e=p("main"),s&&s.c()},m(i,r){k(i,e,r),s&&s.m(e,null),n=!0},p(i,r){i[9]==="contSelect"?s?(s.p(i,r),r[0]&512&&j(s,1)):(s=Ff(i),s.c(),j(s,1),s.m(e,null)):s&&(Ot(),W(s,1,1,()=>{s=null}),$t())},i(i){n||(j(s),n=!0)},o(i){W(s),n=!1},d(i){i&&w(e),s&&s.d()}}}function SI(t){window.open(t)}function AI(t,e,n){let s,i,r;Ve(t,ct,z=>n(8,s=z)),Ve(t,wt,z=>n(9,i=z)),Ve(t,Ol,z=>n(10,r=z));let o=!1,a,l=!1,u,h,f=[],d=!1,g=!1;console.log(i);function _(z){n(0,o=!0),n(1,a=Vn.filter(D=>D.claveEB===z))}function v(){n(0,o=!1)}function b(){console.log("estas en addSchedule"),n(2,l=!0)}function E(){n(7,g=!0)}const C=()=>(n(6,d=!0),gt(Ol,r=Vn.filter(z=>(z.nameProperty+" "+z.colonia+" "+z.claveEB).toLowerCase().includes(u.toLowerCase())),r));function O(z){oI(z),n(6,d=!0)}const A=()=>{gt(wt,i="start",i)};function H(){}function $(){gt(wt,i="contEditing",i)}async function F(){confirm("Deseas eleiminar definitivamente al contacto?")&&(await wa(ss(sn,"contacts",s.id)),window.location.href="/")}function G(){n(2,l=!1)}function R(){console.log(f)}function L(){console.log(f);let z=`https://api.whatsapp.com/send?phone=52${s.telephon}&text=${f}`;window.open(z),r_()}function V(){console.log(f)}const U=[[]],te=z=>_(z),ee=()=>SI(a[0].urlProp),x=()=>b(),K=()=>O(s);function se(z){u=z,n(3,u)}function P(){h=this.value,n(4,h)}function N(){f=Jt(U[0],this.__value,this.checked),n(5,f)}return[o,a,l,u,h,f,d,g,s,i,r,_,v,b,E,C,O,A,H,$,F,G,R,L,V,te,ee,x,K,se,P,N,U]}class DI extends Ye{constructor(e){super(),xe(this,e,AI,CI,Ge,{},null,[-1,-1])}}function Gf(t,e,n){const s=t.slice();return s[22]=e[n],s[24]=n,s}function Wf(t,e,n){const s=t.slice();return s[24]=e[n],s}function Qf(t,e,n){const s=t.slice();return s[12]=e[n],s[24]=n,s}function xf(t){let e,n,s,i,r,o,a,l,u,h,f,d,g,_,v,b,E,C,O,A,H,$,F;function G(N){t[14](N)}let R={};t[3]!==void 0&&(R.searchTerm=t[3]),r=new ec({props:R}),Yn.push(()=>Us(r,"searchTerm",G)),r.$on("input",t[11]);let L=t[1],V=[];for(let N=0;N<L.length;N+=1)V[N]=Xf(Qf(t,L,N));const U=N=>W(V[N],1,1,()=>{V[N]=null});let te=t[0]>1&&Jf(t),ee=[3,2,1],x=[];for(let N=0;N<3;N+=1)x[N]=ed(Wf(t,ee,N));let K=Array(3),se=[];for(let N=0;N<K.length;N+=1)se[N]=nd(Gf(t,K,N));let P=t[0]<t[5]&&sd(t);return{c(){e=p("h2"),e.textContent=`${ur.length} Contactos a Mostrar`,n=y(),s=p("button"),s.textContent="Alta de Contacto",i=y(),le(r.$$.fragment),a=y(),l=p("div"),u=p("div");for(let N=0;N<V.length;N+=1)V[N].c();h=y(),f=p("div"),d=p("div"),g=p("ul"),te&&te.c(),_=y();for(let N=0;N<3;N+=1)x[N].c();v=y(),b=p("li"),E=p("span"),C=S(t[0]),O=y();for(let N=0;N<se.length;N+=1)se[N].c();A=y(),P&&P.c(),m(s,"class","altaContacto svelte-1a91rpr"),m(g,"class","pagi__options svelte-1a91rpr"),m(d,"class","pagi__Item svelte-1a91rpr"),m(f,"class","container pagination"),m(l,"class","mosPag svelte-1a91rpr")},m(N,z){k(N,e,z),k(N,n,z),k(N,s,z),k(N,i,z),oe(r,N,z),k(N,a,z),k(N,l,z),c(l,u);for(let D=0;D<V.length;D+=1)V[D].m(u,null);c(l,h),c(l,f),c(f,d),c(d,g),te&&te.m(g,null),c(g,_);for(let D=0;D<3;D+=1)x[D].m(g,null);c(g,v),c(g,b),c(b,E),c(E,C),c(g,O);for(let D=0;D<se.length;D+=1)se[D].m(g,null);c(g,A),P&&P.m(g,null),H=!0,$||(F=q(s,"click",t[9]),$=!0)},p(N,z){const D={};if(!o&&z&8&&(o=!0,D.searchTerm=N[3],Ms(()=>o=!1)),r.$set(D),z&1046){L=N[1];let Q;for(Q=0;Q<L.length;Q+=1){const me=Qf(N,L,Q);V[Q]?(V[Q].p(me,z),j(V[Q],1)):(V[Q]=Xf(me),V[Q].c(),j(V[Q],1),V[Q].m(u,null))}for(Ot(),Q=L.length;Q<V.length;Q+=1)U(Q);$t()}if(N[0]>1?te?te.p(N,z):(te=Jf(N),te.c(),te.m(g,_)):te&&(te.d(1),te=null),z&257){ee=[3,2,1];let Q;for(Q=0;Q<3;Q+=1){const me=Wf(N,ee,Q);x[Q]?x[Q].p(me,z):(x[Q]=ed(me),x[Q].c(),x[Q].m(g,v))}for(;Q<3;Q+=1)x[Q].d(1)}if((!H||z&1)&&re(C,N[0]),z&289){K=Array(3);let Q;for(Q=0;Q<K.length;Q+=1){const me=Gf(N,K,Q);se[Q]?se[Q].p(me,z):(se[Q]=nd(me),se[Q].c(),se[Q].m(g,A))}for(;Q<se.length;Q+=1)se[Q].d(1);se.length=K.length}N[0]<N[5]?P?P.p(N,z):(P=sd(N),P.c(),P.m(g,null)):P&&(P.d(1),P=null)},i(N){if(!H){j(r.$$.fragment,N);for(let z=0;z<L.length;z+=1)j(V[z]);H=!0}},o(N){W(r.$$.fragment,N),V=V.filter(Boolean);for(let z=0;z<V.length;z+=1)W(V[z]);H=!1},d(N){N&&w(e),N&&w(n),N&&w(s),N&&w(i),ae(r,N),N&&w(a),N&&w(l),Ke(V,N),te&&te.d(),Ke(x,N),Ke(se,N),P&&P.d(),$=!1,F()}}}function Yf(t){let e,n,s,i,r,o;const a=[t[12]];let l={};for(let h=0;h<a.length;h+=1)l=Kt(l,a[h]);n=new JT({props:l});function u(){return t[15](t[12])}return{c(){e=p("div"),le(n.$$.fragment),s=y(),m(e,"class","selecContact")},m(h,f){k(h,e,f),oe(n,e,null),c(e,s),i=!0,r||(o=q(e,"click",u),r=!0)},p(h,f){t=h;const d=f&2?Cn(a,[Xn(t[12])]):{};n.$set(d)},i(h){i||(j(n.$$.fragment,h),i=!0)},o(h){W(n.$$.fragment,h),i=!1},d(h){h&&w(e),ae(n),r=!1,o()}}}function Xf(t){let e,n,s=t[24]>=t[4]&&t[24]<t[2]&&Yf(t);return{c(){s&&s.c(),e=_n()},m(i,r){s&&s.m(i,r),k(i,e,r),n=!0},p(i,r){i[24]>=i[4]&&i[24]<i[2]?s?(s.p(i,r),r&20&&j(s,1)):(s=Yf(i),s.c(),j(s,1),s.m(e.parentNode,e)):s&&(Ot(),W(s,1,1,()=>{s=null}),$t())},i(i){n||(j(s),n=!0)},o(i){W(s),n=!1},d(i){s&&s.d(i),i&&w(e)}}}function Jf(t){let e,n,s,i,r,o,a,l,u;return{c(){e=p("li"),n=p("a"),n.textContent="first",s=y(),i=p("li"),r=p("a"),o=S("previous"),m(n,"href","/blog"),m(r,"href",a="/blog/"+(t[0]-1))},m(h,f){k(h,e,f),c(e,n),k(h,s,f),k(h,i,f),c(i,r),c(r,o),l||(u=[q(n,"click",In(t[16])),q(r,"click",In(t[17]))],l=!0)},p(h,f){f&1&&a!==(a="/blog/"+(h[0]-1))&&m(r,"href",a)},d(h){h&&w(e),h&&w(s),h&&w(i),l=!1,Je(u)}}}function Zf(t){let e,n,s=t[0]-t[24]+"",i,r,o,a;function l(){return t[18](t[24])}return{c(){e=p("li"),n=p("a"),i=S(s),m(n,"href",r="/blog/"+(t[0]-t[24]))},m(u,h){k(u,e,h),c(e,n),c(n,i),o||(a=q(n,"click",In(l)),o=!0)},p(u,h){t=u,h&1&&s!==(s=t[0]-t[24]+"")&&re(i,s),h&1&&r!==(r="/blog/"+(t[0]-t[24]))&&m(n,"href",r)},d(u){u&&w(e),o=!1,a()}}}function ed(t){let e,n=t[0]-t[24]>0&&Zf(t);return{c(){n&&n.c(),e=_n()},m(s,i){n&&n.m(s,i),k(s,e,i)},p(s,i){s[0]-s[24]>0?n?n.p(s,i):(n=Zf(s),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(s){n&&n.d(s),s&&w(e)}}}function td(t){let e,n,s=t[0]+(t[24]+1)+"",i,r,o,a;function l(){return t[19](t[24])}return{c(){e=p("li"),n=p("a"),i=S(s),m(n,"href",r="/blog/"+(t[0]+(t[24]+1)))},m(u,h){k(u,e,h),c(e,n),c(n,i),o||(a=q(n,"click",In(l)),o=!0)},p(u,h){t=u,h&1&&s!==(s=t[0]+(t[24]+1)+"")&&re(i,s),h&1&&r!==(r="/blog/"+(t[0]+(t[24]+1)))&&m(n,"href",r)},d(u){u&&w(e),o=!1,a()}}}function nd(t){let e,n=t[0]+(t[24]+1)<=t[5]&&td(t);return{c(){n&&n.c(),e=_n()},m(s,i){n&&n.m(s,i),k(s,e,i)},p(s,i){s[0]+(s[24]+1)<=s[5]?n?n.p(s,i):(n=td(s),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(s){n&&n.d(s),s&&w(e)}}}function sd(t){let e,n,s,i,r,o,a,l,u,h,f;return{c(){e=p("li"),n=p("a"),s=S("next"),r=y(),o=p("li"),a=p("a"),l=S("last"),m(n,"href",i="/blog/"+(t[0]+1)),m(a,"href",u="/blog/"+t[5])},m(d,g){k(d,e,g),c(e,n),c(n,s),k(d,r,g),k(d,o,g),c(o,a),c(a,l),h||(f=[q(n,"click",In(t[20])),q(a,"click",In(t[21]))],h=!0)},p(d,g){g&1&&i!==(i="/blog/"+(d[0]+1))&&m(n,"href",i),g&32&&u!==(u="/blog/"+d[5])&&m(a,"href",u)},d(d){d&&w(e),d&&w(r),d&&w(o),h=!1,Je(f)}}}function id(t){let e,n,s;return n=new DI({props:{$contact:t[7]}}),{c(){e=p("div"),le(n.$$.fragment)},m(i,r){k(i,e,r),oe(n,e,null),s=!0},p(i,r){const o={};r&128&&(o.$contact=i[7]),n.$set(o)},i(i){s||(j(n.$$.fragment,i),s=!0)},o(i){W(n.$$.fragment,i),s=!1},d(i){i&&w(e),ae(n)}}}function rd(t){let e,n,s,i;const r=[t[7]];let o={};for(let a=0;a<r.length;a+=1)o=Kt(o,r[a]);return s=new II({props:o}),{c(){e=p("div"),n=p("div"),le(s.$$.fragment),m(n,"class","container")},m(a,l){k(a,e,l),c(e,n),oe(s,n,null),i=!0},p(a,l){const u=l&128?Cn(r,[Xn(a[7])]):{};s.$set(u)},i(a){i||(j(s.$$.fragment,a),i=!0)},o(a){W(s.$$.fragment,a),i=!1},d(a){a&&w(e),ae(s)}}}function RI(t){let e,n,s,i,r,o,a,l,u,h,f=t[6]==="start"&&xf(t),d=t[6]==="contSelect"&&id(t),g=(t[6]==="contEditing"||t[6]==="contAdding")&&rd(t);return{c(){e=p("main"),n=p("div"),s=p("h1"),s.textContent="Contactos",i=y(),r=p("img"),a=y(),f&&f.c(),l=y(),d&&d.c(),u=y(),g&&g.c(),fn(r.src,o=s_)||m(r,"src",o),m(r,"alt","contactos"),m(r,"class","svelte-1a91rpr"),m(e,"class","container")},m(_,v){k(_,e,v),c(e,n),c(n,s),c(n,i),c(n,r),c(e,a),f&&f.m(e,null),c(e,l),d&&d.m(e,null),c(e,u),g&&g.m(e,null),h=!0},p(_,[v]){_[6]==="start"?f?(f.p(_,v),v&64&&j(f,1)):(f=xf(_),f.c(),j(f,1),f.m(e,l)):f&&(Ot(),W(f,1,1,()=>{f=null}),$t()),_[6]==="contSelect"?d?(d.p(_,v),v&64&&j(d,1)):(d=id(_),d.c(),j(d,1),d.m(e,u)):d&&(Ot(),W(d,1,1,()=>{d=null}),$t()),_[6]==="contEditing"||_[6]==="contAdding"?g?(g.p(_,v),v&64&&j(g,1)):(g=rd(_),g.c(),j(g,1),g.m(e,null)):g&&(Ot(),W(g,1,1,()=>{g=null}),$t())},i(_){h||(j(f),j(d),j(g),h=!0)},o(_){W(f),W(d),W(g),h=!1},d(_){_&&w(e),f&&f.d(),d&&d.d(),g&&g.d()}}}let Ja=15;function PI(t,e,n){let s,i,r,o,a,l;Ve(t,wt,R=>n(6,a=R)),Ve(t,ct,R=>n(7,l=R));let u;gt(wt,a="start",a);let h,f=1,d=[];const g=R=>{n(0,f=R)},_=()=>{gt(wt,a="contAdding",a)},v=R=>{n(3,u=""),gt(ct,l=R,l),gt(wt,a="contSelect",a)};function b(){return n(1,d=ur.filter(R=>(R.name+" "+R.lastname).toLowerCase().includes(u.toLowerCase())))}n(1,d=ur.sort((R,L)=>R.createdAt<L.createdAt?1:R.createdAt>L.createdAt?-1:0));function E(R){u=R,n(3,u)}const C=R=>v(R),O=()=>g(1),A=()=>g(f-1),H=R=>g(f-R),$=R=>g(f+(R+1)),F=()=>g(f+1),G=()=>g(i);return t.$$.update=()=>{t.$$.dirty&2&&n(13,s=d.length),t.$$.dirty&8192&&n(5,i=Math.ceil(s/Ja)),t.$$.dirty&1&&n(2,r=f*Ja),t.$$.dirty&4&&n(4,o=r-Ja)},[f,d,r,u,o,i,a,l,g,_,v,b,h,s,E,C,O,A,H,$,F,G]}class NI extends Ye{constructor(e){super(),xe(this,e,PI,RI,Ge,{})}}let ls=[],us=[];function OI(t,e){e=e.filter(n=>n.selecTP===t.selectTP),t.numBeds>0&&(e=e.filter(n=>n.numBeds>=t.beds)),t.numBaths>0&&(e=e.filter(n=>n.numBaths>=t.bathroom)),t.numParks>0&&(e=e.filter(n=>n.numPark>=t.parks));try{e=e.filter(n=>{n.budget?ls=e.filter(s=>s.budget>=t.price*.7&&s.budget<=t.price*1.1):us=e.filter(s=>s.rangeProp===a_(t.price))})}catch(n){console.log(n)}e=us.concat(ls),ls=[],us=[];try{e.filter(n=>{n.locaProperty.length>0?(ls=e.filter(s=>t.locaProperty.some(i=>s.locaProperty.includes(i))),console.log(t.locaProperty)):(us=e.filter(s=>s.locaProperty.length===0),console.log(t.locaProperty))})}catch(n){console.log(n)}e=us.concat(ls),ls=[],us=[];try{e=e.filter(n=>{n.tagsProperty.length>0?ls=e.filter(s=>t.tagsProperty.some(i=>s.tagsProperty.includes(i))):us=e.filter(s=>s.tagsProperty.length===0)})}catch(n){console.log(n)}return e=us.concat(ls),console.log(e),Eg.set(e)}function od(t,e,n){const s=t.slice();return s[16]=e[n],s}function ad(t){let e,n=t[2],s=[];for(let i=0;i<n.length;i+=1)s[i]=ld(od(t,n,i));return{c(){for(let i=0;i<s.length;i+=1)s[i].c();e=_n()},m(i,r){for(let o=0;o<s.length;o+=1)s[o].m(i,r);k(i,e,r)},p(i,r){if(r&4){n=i[2];let o;for(o=0;o<n.length;o+=1){const a=od(i,n,o);s[o]?s[o].p(a,r):(s[o]=ld(a),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(i){Ke(s,i),i&&w(e)}}}function ld(t){let e,n,s,i,r=t[16].name+"",o,a,l=t[16].lastname+"",u,h,f,d=t[16].locaProperty+"",g,_,v,b=t[16].tagsProperty+"",E,C,O,A=t[16].budget+"",H,$,F,G=t[16].rangeProp+"",R,L;return{c(){e=p("div"),n=p("input"),s=y(),i=p("div"),o=S(r),a=y(),u=S(l),h=y(),f=p("div"),g=S(d),_=y(),v=p("div"),E=S(b),C=y(),O=p("div"),H=S(A),$=y(),F=p("div"),R=S(G),L=y(),m(n,"type","checkbox"),m(e,"class","conInt svelte-1fnfsyu")},m(V,U){k(V,e,U),c(e,n),c(e,s),c(e,i),c(i,o),c(i,a),c(i,u),c(e,h),c(e,f),c(f,g),c(e,_),c(e,v),c(v,E),c(e,C),c(e,O),c(O,H),c(e,$),c(e,F),c(F,R),c(e,L)},p(V,U){U&4&&r!==(r=V[16].name+"")&&re(o,r),U&4&&l!==(l=V[16].lastname+"")&&re(u,l),U&4&&d!==(d=V[16].locaProperty+"")&&re(g,d),U&4&&b!==(b=V[16].tagsProperty+"")&&re(E,b),U&4&&A!==(A=V[16].budget+"")&&re(H,A),U&4&&G!==(G=V[16].rangeProp+"")&&re(R,G)},d(V){V&&w(e)}}}function $I(t){let e,n,s,i,r,o,a,l,u=t[1].claveEB+"",h,f,d=t[1].nameProperty+"",g,_,v,b=t[1].selecTP+"",E,C,O=t[1].colonia+"",A,H,$=t[1].locaProperty+"",F,G,R,L,V,U=t[1].price+"",te,ee,x,K,se=t[1].beds+"",P,N,z=t[1].bathroom+"",D,Q,me=t[1].halfBathroom+"",ge,De,Ie,Be,ke=t[1].areaBuilding+"",Fe,B,ie=t[1].areaTotal+"",_t,nt,ht,Gt,Xe=t[1].description+"",vt,Tt,Wt,We,Ft,Et,Qt,ft,Vt,yt,Ze,et,Pe,Rt,je,xt,Qe,st,lt,It,it,Ct,ut,Pt,he=t[0]&&ad(t);return{c(){e=p("div"),n=p("div"),s=p("img"),o=y(),a=p("div"),l=p("h4"),h=S(u),f=y(),g=S(d),_=y(),v=p("h5"),E=S(b),C=S(" en Col. "),A=S(O),H=S(" al "),F=S($),G=S(" de la ciudad."),R=y(),L=p("h6"),V=S("Precio: "),te=S(U),ee=y(),x=p("div"),K=p("h6"),P=S(se),N=S(" Recamaras, "),D=S(z),Q=S(" Ba\xF1os y "),ge=S(me),De=S(" Medio Ba\xF1o"),Ie=y(),Be=p("h6"),Fe=S(ke),B=S(" m2 de construcci\xF3n y "),_t=S(ie),nt=S(" m2 de terreno"),ht=y(),Gt=p("p"),vt=S(Xe),Tt=y(),Wt=p("div"),We=p("a"),Ft=S("Seguir Link en Otra Ventana"),Qt=y(),ft=p("div"),Vt=p("button"),Vt.textContent="Enviar por WhatsApp",yt=y(),Ze=p("button"),Ze.textContent="Buscar Interesados",et=y(),Pe=p("div"),Rt=p("button"),Rt.textContent="Regresar",je=y(),xt=p("div"),Qe=p("div"),st=p("i"),st.textContent="edit",lt=y(),It=p("i"),It.textContent="delete_forever",it=y(),he&&he.c(),Ct=_n(),fn(s.src,i=t[1].urlImage)||m(s,"src",i),m(s,"alt",r=t[1].nameProperty),m(n,"class","selectImage svelte-1fnfsyu"),m(Gt,"class","descSelec"),m(a,"class","descSelect"),m(We,"href",Et=t[1].urlProp),m(We,"target","_blank"),m(Wt,"class","folowLink"),m(Vt,"class","btnCommon btnWhatsApp"),m(Ze,"class","btnCommon"),m(ft,"class","optionsSend"),m(Rt,"class","btnCommon btnCancel"),m(Pe,"class","backAnt"),m(st,"class","material-icons edit"),m(It,"class","material-icons delete"),m(Qe,"class","iconContent"),m(e,"class","container selectProduct svelte-1fnfsyu")},m(we,_e){k(we,e,_e),c(e,n),c(n,s),c(e,o),c(e,a),c(a,l),c(l,h),c(l,f),c(l,g),c(a,_),c(a,v),c(v,E),c(v,C),c(v,A),c(v,H),c(v,F),c(v,G),c(a,R),c(a,L),c(L,V),c(L,te),c(a,ee),c(a,x),c(x,K),c(K,P),c(K,N),c(K,D),c(K,Q),c(K,ge),c(K,De),c(a,Ie),c(a,Be),c(Be,Fe),c(Be,B),c(Be,_t),c(Be,nt),c(a,ht),c(a,Gt),c(Gt,vt),c(e,Tt),c(e,Wt),c(Wt,We),c(We,Ft),c(e,Qt),c(e,ft),c(ft,Vt),c(ft,yt),c(ft,Ze),c(e,et),c(e,Pe),c(Pe,Rt),c(e,je),c(e,xt),c(xt,Qe),c(Qe,st),c(Qe,lt),c(Qe,It),k(we,it,_e),he&&he.m(we,_e),k(we,Ct,_e),ut||(Pt=[q(Vt,"click",t[8]),q(Ze,"click",t[6]),q(Rt,"click",t[7]),q(st,"keydown",t[4]),q(It,"keydown",t[5])],ut=!0)},p(we,[_e]){_e&2&&!fn(s.src,i=we[1].urlImage)&&m(s,"src",i),_e&2&&r!==(r=we[1].nameProperty)&&m(s,"alt",r),_e&2&&u!==(u=we[1].claveEB+"")&&re(h,u),_e&2&&d!==(d=we[1].nameProperty+"")&&re(g,d),_e&2&&b!==(b=we[1].selecTP+"")&&re(E,b),_e&2&&O!==(O=we[1].colonia+"")&&re(A,O),_e&2&&$!==($=we[1].locaProperty+"")&&re(F,$),_e&2&&U!==(U=we[1].price+"")&&re(te,U),_e&2&&se!==(se=we[1].beds+"")&&re(P,se),_e&2&&z!==(z=we[1].bathroom+"")&&re(D,z),_e&2&&me!==(me=we[1].halfBathroom+"")&&re(ge,me),_e&2&&ke!==(ke=we[1].areaBuilding+"")&&re(Fe,ke),_e&2&&ie!==(ie=we[1].areaTotal+"")&&re(_t,ie),_e&2&&Xe!==(Xe=we[1].description+"")&&re(vt,Xe),_e&2&&Et!==(Et=we[1].urlProp)&&m(We,"href",Et),we[0]?he?he.p(we,_e):(he=ad(we),he.c(),he.m(Ct.parentNode,Ct)):he&&(he.d(1),he=null)},i:ce,o:ce,d(we){we&&w(e),we&&w(it),he&&he.d(we),we&&w(Ct),ut=!1,Je(Pt)}}}function LI(t,e,n){let s,i,r;Ve(t,ot,_=>n(1,s=_)),Ve(t,wt,_=>n(10,i=_)),Ve(t,Eg,_=>n(2,r=_));const o=vi();let a=[],l=!1;function u(){gt(wt,i="propEditing",i)}async function h(){confirm("Deseas eleiminar definitivamente la propiedad?")&&(console.log("Borraste al propiedad"),await wa(ss(sn,"properties",s.id)),gt(wt,i="start",i))}function f(){OI(s,ur),n(0,l=!0)}function d(){o("/propiedades")}return[l,s,r,a,u,h,f,d,()=>void 0]}class MI extends Ye{constructor(e){super(),xe(this,e,LI,$I,Ge,{})}}function UI(t){let e;return{c(){e=S("Editar")},m(n,s){k(n,e,s)},d(n){n&&w(e)}}}function FI(t){let e;return{c(){e=S("Guardar")},m(n,s){k(n,e,s)},d(n){n&&w(e)}}}function VI(t){let e,n,s,i,r,o,a,l,u,h,f,d,g,_,v,b;l=new bI({});function E(A,H){return A[0]==="propAdding"?FI:UI}let C=E(t),O=C(t);return{c(){e=p("form"),n=p("div"),s=p("div"),i=p("img"),a=y(),le(l.$$.fragment),u=y(),h=p("div"),f=p("button"),O.c(),d=y(),g=p("button"),g.textContent="Cancel",fn(i.src,r=t[1].urlImage)||m(i,"src",r),m(i,"alt",o=t[1].nameProperty),m(i,"class","svelte-166hnhc"),m(f,"class","btn-save"),m(g,"class","btn-cancel"),m(h,"class","contSavCan svelte-166hnhc"),m(n,"class","altaContactos"),m(e,"class","propiedad")},m(A,H){k(A,e,H),c(e,n),c(n,s),c(s,i),c(s,a),oe(l,s,null),c(n,u),c(n,h),c(h,f),O.m(f,null),c(h,d),c(h,g),_=!0,v||(b=[q(g,"click",t[3]),q(e,"submit",In(t[2]))],v=!0)},p(A,[H]){(!_||H&2&&!fn(i.src,r=A[1].urlImage))&&m(i,"src",r),(!_||H&2&&o!==(o=A[1].nameProperty))&&m(i,"alt",o),C!==(C=E(A))&&(O.d(1),O=C(A),O&&(O.c(),O.m(f,null)))},i(A){_||(j(l.$$.fragment,A),_=!0)},o(A){W(l.$$.fragment,A),_=!1},d(A){A&&w(e),ae(l),O.d(),v=!1,Je(b)}}}function BI(t,e,n){let s,i;Ve(t,wt,u=>n(0,s=u)),Ve(t,ot,u=>n(1,i=u));let r=0;const o=vi();async function a(){if(console.log("Estas en add property",s,i),s==="propEditing")console.log("estas dentro de edit property",i.id),await ba(ss(sn,"properties",i.id),i);else{r=Date.now(),gt(ot,i={...i,createdAt:r},i),console.log(i);const u=ns(sn,"properties");await rr(u,i)}gt(wt,s="start",s)}return[s,i,a,()=>{o("./")}]}class c_ extends Ye{constructor(e){super(),xe(this,e,BI,VI,Ge,{})}}function ud(t,e,n){const s=t.slice();return s[23]=e[n],s[25]=n,s}function cd(t,e,n){const s=t.slice();return s[25]=e[n],s}function hd(t,e,n){const s=t.slice();return s[12]=e[n],s[25]=n,s}function fd(t){let e,n,s,i,r,o,a,l,u,h,f,d,g,_,v,b,E,C,O,A,H,$;function F(P){t[14](P)}let G={};t[3]!==void 0&&(G.searchTerm=t[3]),r=new ec({props:G}),Yn.push(()=>Us(r,"searchTerm",F)),r.$on("input",t[11]);let R=t[1],L=[];for(let P=0;P<R.length;P+=1)L[P]=pd(hd(t,R,P));const V=P=>W(L[P],1,1,()=>{L[P]=null});let U=t[0]>1&&md(t),te=[3,2,1],ee=[];for(let P=0;P<3;P+=1)ee[P]=_d(cd(t,te,P));let x=Array(3),K=[];for(let P=0;P<x.length;P+=1)K[P]=yd(ud(t,x,P));let se=t[0]<t[5]&&bd(t);return{c(){e=p("h2"),e.textContent=`${Vn.length} Propiedades a Mostrar`,n=y(),s=p("button"),s.textContent="Alta de Propiedad",i=y(),le(r.$$.fragment),a=y(),l=p("div"),u=p("main");for(let P=0;P<L.length;P+=1)L[P].c();h=y(),f=p("div"),d=p("ul"),U&&U.c(),g=y();for(let P=0;P<3;P+=1)ee[P].c();_=y(),v=p("li"),b=p("span"),E=S(t[0]),C=y();for(let P=0;P<K.length;P+=1)K[P].c();O=y(),se&&se.c(),m(u,"id","bookshelf"),m(u,"class","svelte-qdxcib"),m(f,"class","container pagination"),m(l,"class","mosPag svelte-qdxcib")},m(P,N){k(P,e,N),k(P,n,N),k(P,s,N),k(P,i,N),oe(r,P,N),k(P,a,N),k(P,l,N),c(l,u);for(let z=0;z<L.length;z+=1)L[z].m(u,null);c(l,h),c(l,f),c(f,d),U&&U.m(d,null),c(d,g);for(let z=0;z<3;z+=1)ee[z].m(d,null);c(d,_),c(d,v),c(v,b),c(b,E),c(d,C);for(let z=0;z<K.length;z+=1)K[z].m(d,null);c(d,O),se&&se.m(d,null),A=!0,H||($=q(s,"click",t[10]),H=!0)},p(P,N){const z={};if(!o&&N&8&&(o=!0,z.searchTerm=P[3],Ms(()=>o=!1)),r.$set(z),N&534){R=P[1];let D;for(D=0;D<R.length;D+=1){const Q=hd(P,R,D);L[D]?(L[D].p(Q,N),j(L[D],1)):(L[D]=pd(Q),L[D].c(),j(L[D],1),L[D].m(u,null))}for(Ot(),D=R.length;D<L.length;D+=1)V(D);$t()}if(P[0]>1?U?U.p(P,N):(U=md(P),U.c(),U.m(d,g)):U&&(U.d(1),U=null),N&257){te=[3,2,1];let D;for(D=0;D<3;D+=1){const Q=cd(P,te,D);ee[D]?ee[D].p(Q,N):(ee[D]=_d(Q),ee[D].c(),ee[D].m(d,_))}for(;D<3;D+=1)ee[D].d(1)}if((!A||N&1)&&re(E,P[0]),N&289){x=Array(3);let D;for(D=0;D<x.length;D+=1){const Q=ud(P,x,D);K[D]?K[D].p(Q,N):(K[D]=yd(Q),K[D].c(),K[D].m(d,O))}for(;D<K.length;D+=1)K[D].d(1);K.length=x.length}P[0]<P[5]?se?se.p(P,N):(se=bd(P),se.c(),se.m(d,null)):se&&(se.d(1),se=null)},i(P){if(!A){j(r.$$.fragment,P);for(let N=0;N<R.length;N+=1)j(L[N]);A=!0}},o(P){W(r.$$.fragment,P),L=L.filter(Boolean);for(let N=0;N<L.length;N+=1)W(L[N]);A=!1},d(P){P&&w(e),P&&w(n),P&&w(s),P&&w(i),ae(r,P),P&&w(a),P&&w(l),Ke(L,P),U&&U.d(),Ke(ee,P),Ke(K,P),se&&se.d(),H=!1,$()}}}function dd(t){let e,n,s,i,r,o,a;const l=[t[12]];let u={};for(let f=0;f<l.length;f+=1)u=Kt(u,l[f]);n=new o_({props:u});function h(){return t[15](t[12])}return{c(){e=p("section"),le(n.$$.fragment),s=y(),m(e,"class","property svelte-qdxcib")},m(f,d){k(f,e,d),oe(n,e,null),c(e,s),r=!0,o||(a=q(e,"click",h),o=!0)},p(f,d){t=f;const g=d&2?Cn(l,[Xn(t[12])]):{};n.$set(g)},i(f){r||(j(n.$$.fragment,f),tt(()=>{i||(i=Pn(e,$o,{duration:500,easing:Po},!0)),i.run(1)}),r=!0)},o(f){W(n.$$.fragment,f),i||(i=Pn(e,$o,{duration:500,easing:Po},!1)),i.run(0),r=!1},d(f){f&&w(e),ae(n),f&&i&&i.end(),o=!1,a()}}}function pd(t){let e,n,s=t[25]>=t[4]&&t[25]<t[2]&&dd(t);return{c(){s&&s.c(),e=_n()},m(i,r){s&&s.m(i,r),k(i,e,r),n=!0},p(i,r){i[25]>=i[4]&&i[25]<i[2]?s?(s.p(i,r),r&20&&j(s,1)):(s=dd(i),s.c(),j(s,1),s.m(e.parentNode,e)):s&&(Ot(),W(s,1,1,()=>{s=null}),$t())},i(i){n||(j(s),n=!0)},o(i){W(s),n=!1},d(i){s&&s.d(i),i&&w(e)}}}function md(t){let e,n,s,i,r,o,a,l,u;return{c(){e=p("li"),n=p("a"),n.textContent="first",s=y(),i=p("li"),r=p("a"),o=S("previous"),m(n,"href","/blog"),m(r,"href",a="/blog/"+(t[0]-1))},m(h,f){k(h,e,f),c(e,n),k(h,s,f),k(h,i,f),c(i,r),c(r,o),l||(u=[q(n,"click",In(t[16])),q(r,"click",In(t[17]))],l=!0)},p(h,f){f&1&&a!==(a="/blog/"+(h[0]-1))&&m(r,"href",a)},d(h){h&&w(e),h&&w(s),h&&w(i),l=!1,Je(u)}}}function gd(t){let e,n,s=t[0]-t[25]+"",i,r,o,a;function l(){return t[18](t[25])}return{c(){e=p("li"),n=p("a"),i=S(s),m(n,"href",r="/blog/"+(t[0]-t[25]))},m(u,h){k(u,e,h),c(e,n),c(n,i),o||(a=q(n,"click",In(l)),o=!0)},p(u,h){t=u,h&1&&s!==(s=t[0]-t[25]+"")&&re(i,s),h&1&&r!==(r="/blog/"+(t[0]-t[25]))&&m(n,"href",r)},d(u){u&&w(e),o=!1,a()}}}function _d(t){let e,n=t[0]-t[25]>0&&gd(t);return{c(){n&&n.c(),e=_n()},m(s,i){n&&n.m(s,i),k(s,e,i)},p(s,i){s[0]-s[25]>0?n?n.p(s,i):(n=gd(s),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(s){n&&n.d(s),s&&w(e)}}}function vd(t){let e,n,s=t[0]+(t[25]+1)+"",i,r,o,a;function l(){return t[19](t[25])}return{c(){e=p("li"),n=p("a"),i=S(s),m(n,"href",r="/blog/"+(t[0]+(t[25]+1)))},m(u,h){k(u,e,h),c(e,n),c(n,i),o||(a=q(n,"click",In(l)),o=!0)},p(u,h){t=u,h&1&&s!==(s=t[0]+(t[25]+1)+"")&&re(i,s),h&1&&r!==(r="/blog/"+(t[0]+(t[25]+1)))&&m(n,"href",r)},d(u){u&&w(e),o=!1,a()}}}function yd(t){let e,n=t[0]+(t[25]+1)<=t[5]&&vd(t);return{c(){n&&n.c(),e=_n()},m(s,i){n&&n.m(s,i),k(s,e,i)},p(s,i){s[0]+(s[25]+1)<=s[5]?n?n.p(s,i):(n=vd(s),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(s){n&&n.d(s),s&&w(e)}}}function bd(t){let e,n,s,i,r,o,a,l,u,h,f;return{c(){e=p("li"),n=p("a"),s=S("next"),r=y(),o=p("li"),a=p("a"),l=S("last"),m(n,"href",i="/blog/"+(t[0]+1)),m(a,"href",u="/blog/"+t[5])},m(d,g){k(d,e,g),c(e,n),c(n,s),k(d,r,g),k(d,o,g),c(o,a),c(a,l),h||(f=[q(n,"click",In(t[20])),q(a,"click",In(t[21]))],h=!0)},p(d,g){g&1&&i!==(i="/blog/"+(d[0]+1))&&m(n,"href",i),g&32&&u!==(u="/blog/"+d[5])&&m(a,"href",u)},d(d){d&&w(e),d&&w(r),d&&w(o),h=!1,Je(f)}}}function wd(t){let e,n,s;const i=[t[7]];let r={};for(let o=0;o<i.length;o+=1)r=Kt(r,i[o]);return n=new MI({props:r}),{c(){e=p("div"),le(n.$$.fragment)},m(o,a){k(o,e,a),oe(n,e,null),s=!0},p(o,a){const l=a&128?Cn(i,[Xn(o[7])]):{};n.$set(l)},i(o){s||(j(n.$$.fragment,o),s=!0)},o(o){W(n.$$.fragment,o),s=!1},d(o){o&&w(e),ae(n)}}}function kd(t){let e,n,s;const i=[t[7]];let r={};for(let o=0;o<i.length;o+=1)r=Kt(r,i[o]);return n=new c_({props:r}),{c(){e=p("div"),le(n.$$.fragment),m(e,"class","container")},m(o,a){k(o,e,a),oe(n,e,null),s=!0},p(o,a){const l=a&128?Cn(i,[Xn(o[7])]):{};n.$set(l)},i(o){s||(j(n.$$.fragment,o),s=!0)},o(o){W(n.$$.fragment,o),s=!1},d(o){o&&w(e),ae(n)}}}function Ed(t){let e,n,s;return n=new c_({}),{c(){e=p("div"),le(n.$$.fragment),m(e,"class","container")},m(i,r){k(i,e,r),oe(n,e,null),s=!0},i(i){s||(j(n.$$.fragment,i),s=!0)},o(i){W(n.$$.fragment,i),s=!1},d(i){i&&w(e),ae(n)}}}function jI(t){let e,n,s,i,r,o,a,l,u,h,f,d=t[6]==="start"&&fd(t),g=t[6]==="propSelect"&&wd(t),_=t[6]==="propEditing"&&kd(t),v=t[6]==="propAdding"&&Ed();return{c(){e=p("div"),n=p("div"),s=p("h1"),s.textContent="Propiedades",i=y(),r=p("img"),a=y(),d&&d.c(),l=y(),g&&g.c(),u=y(),_&&_.c(),h=y(),v&&v.c(),fn(r.src,o=i_)||m(r,"src",o),m(r,"alt","propiedad"),m(r,"class","imgTitle svelte-qdxcib"),m(e,"class","container")},m(b,E){k(b,e,E),c(e,n),c(n,s),c(n,i),c(n,r),c(e,a),d&&d.m(e,null),c(e,l),g&&g.m(e,null),c(e,u),_&&_.m(e,null),c(e,h),v&&v.m(e,null),f=!0},p(b,[E]){b[6]==="start"?d?(d.p(b,E),E&64&&j(d,1)):(d=fd(b),d.c(),j(d,1),d.m(e,l)):d&&(Ot(),W(d,1,1,()=>{d=null}),$t()),b[6]==="propSelect"?g?(g.p(b,E),E&64&&j(g,1)):(g=wd(b),g.c(),j(g,1),g.m(e,u)):g&&(Ot(),W(g,1,1,()=>{g=null}),$t()),b[6]==="propEditing"?_?(_.p(b,E),E&64&&j(_,1)):(_=kd(b),_.c(),j(_,1),_.m(e,h)):_&&(Ot(),W(_,1,1,()=>{_=null}),$t()),b[6]==="propAdding"?v?E&64&&j(v,1):(v=Ed(),v.c(),j(v,1),v.m(e,null)):v&&(Ot(),W(v,1,1,()=>{v=null}),$t())},i(b){f||(j(d),j(g),j(_),j(v),f=!0)},o(b){W(d),W(g),W(_),W(v),f=!1},d(b){b&&w(e),d&&d.d(),g&&g.d(),_&&_.d(),v&&v.d()}}}let Za=20;function qI(t,e,n){let s,i,r,o,a,l;Ve(t,wt,R=>n(6,a=R)),Ve(t,ot,R=>n(7,l=R));let u,h;gt(wt,a="start",a);let f=1,d=Vn;const g=R=>{n(0,f=R)};d=Vn;function _(R){console.log(R),gt(ot,l=R,l),gt(wt,a="propSelect",a)}function v(){gt(wt,a="propAdding",a)}function b(){return n(1,d=Vn.filter(R=>(R.nameProperty+" "+R.colonia).toLowerCase().includes(u.toLowerCase())))}n(1,d=Vn.sort((R,L)=>R.createdAt<L.createdAt?1:R.createdAt>L.createdAt?-1:0));function E(R){u=R,n(3,u)}const C=R=>_(R),O=()=>g(1),A=()=>g(f-1),H=R=>g(f-R),$=R=>g(f+(R+1)),F=()=>g(f+1),G=()=>g(i);return t.$$.update=()=>{t.$$.dirty&2&&n(13,s=d.length),t.$$.dirty&8192&&n(5,i=Math.ceil(s/Za)),t.$$.dirty&1&&n(2,r=f*Za),t.$$.dirty&4&&n(4,o=r-Za)},[f,d,r,u,o,i,a,l,g,_,v,b,h,s,E,C,O,A,H,$,F,G]}class HI extends Ye{constructor(e){super(),xe(this,e,qI,jI,Ge,{})}}function KI(t){let e;return{c(){e=p("h1"),e.textContent="Captacion"},m(n,s){k(n,e,s)},p:ce,i:ce,o:ce,d(n){n&&w(e)}}}class zI extends Ye{constructor(e){super(),xe(this,e,null,KI,Ge,{})}}function GI(t){let e,n,s,i,r=t[0].task+"",o;return{c(){e=p("div"),n=p("h1"),n.textContent="Estas en About",s=y(),i=p("h3"),o=S(r),m(e,"class","cont")},m(a,l){k(a,e,l),c(e,n),c(e,s),c(e,i),c(i,o)},p(a,[l]){l&1&&r!==(r=a[0].task+"")&&re(o,r)},i:ce,o:ce,d(a){a&&w(e)}}}function WI(t,e,n){let s;return Ve(t,Dn,i=>n(0,s=i)),[s]}class QI extends Ye{constructor(e){super(),xe(this,e,WI,GI,Ge,{})}}function xI(t){let e,n,s,i;return{c(){e=p("div"),n=p("div"),s=S(t[0]),m(n,"id","snackbar"),m(n,"class",i=rc(t[1]?"animation-in":"not-show")+" svelte-1e3w4r3")},m(r,o){k(r,e,o),c(e,n),c(n,s)},p(r,[o]){o&1&&re(s,r[0]),o&2&&i!==(i=rc(r[1]?"animation-in":"not-show")+" svelte-1e3w4r3")&&m(n,"class",i)},i:ce,o:ce,d(r){r&&w(e)}}}function YI(t,e,n){let{message:s=""}=e,{show:i=!1}=e;return t.$$set=r=>{"message"in r&&n(0,s=r.message),"show"in r&&n(1,i=r.show)},[s,i]}class XI extends Ye{constructor(e){super(),xe(this,e,YI,xI,Ge,{message:0,show:1})}}function JI(t){let e;return{c(){e=S("Registrarse")},m(n,s){k(n,e,s)},d(n){n&&w(e)}}}function ZI(t){let e,n,s,i,r,o,a,l,u,h,f,d,g,_,v,b,E,C,O,A,H,$,F,G,R,L,V,U,te,ee,x;return n=new XI({props:{message:t[0],show:t[1]}}),U=new wn({props:{to:"/register",$$slots:{default:[JI]},$$scope:{ctx:t}}}),{c(){e=p("div"),le(n.$$.fragment),s=y(),i=p("br"),r=p("br"),o=p("br"),a=y(),l=p("div"),u=p("h1"),u.textContent="Inicia sesi\xF3n en tu cuenta",h=y(),f=p("div"),d=p("input"),g=y(),_=p("div"),v=p("input"),b=y(),E=p("br"),C=y(),O=p("div"),A=p("button"),A.textContent="Iniciar sesi\xF3n",H=y(),$=p("p"),$.textContent="O tambi\xE9n",F=y(),G=p("br"),R=y(),L=p("p"),V=S("\xBFA\xFAn no tienes cuenta? "),le(U.$$.fragment),m(u,"class","text-center text-login svelte-ftg4em"),m(d,"name","email"),m(d,"type","text"),m(d,"class","input-form svelte-ftg4em"),m(d,"placeholder","Correo"),m(f,"class","center svelte-ftg4em"),m(v,"name","password"),m(v,"type","password"),m(v,"class","input-form svelte-ftg4em"),m(v,"placeholder","Contrase\xF1a"),m(_,"class","center svelte-ftg4em"),m(A,"class","button-signup fondo-color-signup svelte-ftg4em"),m(O,"class","center svelte-ftg4em"),m($,"class","text-center svelte-ftg4em"),m(L,"class","text-center svelte-ftg4em"),m(l,"class","form-signin svelte-ftg4em")},m(K,se){k(K,e,se),oe(n,e,null),c(e,s),c(e,i),c(e,r),c(e,o),c(e,a),c(e,l),c(l,u),c(l,h),c(l,f),c(f,d),c(l,g),c(l,_),c(_,v),c(l,b),c(l,E),c(l,C),c(l,O),c(O,A),c(l,H),c(l,$),c(l,F),c(l,G),c(l,R),c(l,L),c(L,V),oe(U,L,null),te=!0,ee||(x=[q(d,"input",t[4]),q(v,"input",t[5]),q(A,"click",t[3])],ee=!0)},p(K,[se]){const P={};se&1&&(P.message=K[0]),se&2&&(P.show=K[1]),n.$set(P);const N={};se&512&&(N.$$scope={dirty:se,ctx:K}),U.$set(N)},i(K){te||(j(n.$$.fragment,K),j(U.$$.fragment,K),te=!0)},o(K){W(n.$$.fragment,K),W(U.$$.fragment,K),te=!1},d(K){K&&w(e),ae(n),ae(U),ee=!1,Je(x)}}}function eC(t,e,n){const s=vi();let i={email:"",password:""},r="",o=!1;const a=d=>{n(0,r=d),n(1,o=!0),setTimeout(()=>{n(1,o=!1)},2800)},l=d=>{i={...i,[d.target.name]:d.target.value}};return[r,o,l,async()=>{try{await Xk(e_,i.email,i.password),s("/")}catch(d){d.message==="Firebase: Error (auth/wrong-password)."&&a("Contrase\xF1a incorrecta")}},d=>l(d),d=>l(d)]}class tC extends Ye{constructor(e){super(),xe(this,e,eC,ZI,Ge,{})}}class nC extends Ye{constructor(e){super(),xe(this,e,null,null,Ge,{})}}function sC(t){let e;return{c(){e=S("Home")},m(n,s){k(n,e,s)},d(n){n&&w(e)}}}function iC(t){let e;return{c(){e=S("Contactos")},m(n,s){k(n,e,s)},d(n){n&&w(e)}}}function rC(t){let e;return{c(){e=S("Propiedades")},m(n,s){k(n,e,s)},d(n){n&&w(e)}}}function oC(t){let e;return{c(){e=S("Agenda")},m(n,s){k(n,e,s)},d(n){n&&w(e)}}}function aC(t){let e;return{c(){e=S("LogOut")},m(n,s){k(n,e,s)},d(n){n&&w(e)}}}function lC(t){let e;return{c(){e=S("About")},m(n,s){k(n,e,s)},d(n){n&&w(e)}}}function uC(t){let e;return{c(){e=S("Registro")},m(n,s){k(n,e,s)},d(n){n&&w(e)}}}function cC(t){let e;return{c(){e=S("Login")},m(n,s){k(n,e,s)},d(n){n&&w(e)}}}function hC(t){let e,n;return e=new xT({}),{c(){le(e.$$.fragment)},m(s,i){oe(e,s,i),n=!0},i(s){n||(j(e.$$.fragment,s),n=!0)},o(s){W(e.$$.fragment,s),n=!1},d(s){ae(e,s)}}}function fC(t){let e,n;return e=new NI({}),{c(){le(e.$$.fragment)},m(s,i){oe(e,s,i),n=!0},i(s){n||(j(e.$$.fragment,s),n=!0)},o(s){W(e.$$.fragment,s),n=!1},d(s){ae(e,s)}}}function dC(t){let e,n;return e=new HI({}),{c(){le(e.$$.fragment)},m(s,i){oe(e,s,i),n=!0},i(s){n||(j(e.$$.fragment,s),n=!0)},o(s){W(e.$$.fragment,s),n=!1},d(s){ae(e,s)}}}function pC(t){let e,n;return e=new zI({}),{c(){le(e.$$.fragment)},m(s,i){oe(e,s,i),n=!0},i(s){n||(j(e.$$.fragment,s),n=!0)},o(s){W(e.$$.fragment,s),n=!1},d(s){ae(e,s)}}}function mC(t){let e,n;return e=new t_({}),{c(){le(e.$$.fragment)},m(s,i){oe(e,s,i),n=!0},i(s){n||(j(e.$$.fragment,s),n=!0)},o(s){W(e.$$.fragment,s),n=!1},d(s){ae(e,s)}}}function gC(t){let e,n;return e=new n_({}),{c(){le(e.$$.fragment)},m(s,i){oe(e,s,i),n=!0},i(s){n||(j(e.$$.fragment,s),n=!0)},o(s){W(e.$$.fragment,s),n=!1},d(s){ae(e,s)}}}function _C(t){let e,n;return e=new QI({}),{c(){le(e.$$.fragment)},m(s,i){oe(e,s,i),n=!0},i(s){n||(j(e.$$.fragment,s),n=!0)},o(s){W(e.$$.fragment,s),n=!1},d(s){ae(e,s)}}}function vC(t){let e,n;return e=new nC({}),{c(){le(e.$$.fragment)},m(s,i){oe(e,s,i),n=!0},i(s){n||(j(e.$$.fragment,s),n=!0)},o(s){W(e.$$.fragment,s),n=!1},d(s){ae(e,s)}}}function yC(t){let e,n;return e=new tC({}),{c(){le(e.$$.fragment)},m(s,i){oe(e,s,i),n=!0},i(s){n||(j(e.$$.fragment,s),n=!0)},o(s){W(e.$$.fragment,s),n=!1},d(s){ae(e,s)}}}function bC(t){let e,n;return e=new Zu({}),{c(){le(e.$$.fragment)},m(s,i){oe(e,s,i),n=!0},i(s){n||(j(e.$$.fragment,s),n=!0)},o(s){W(e.$$.fragment,s),n=!1},d(s){ae(e,s)}}}function wC(t){let e,n,s,i,r,o,a,l,u,h,f,d,g,_,v,b,E,C,O,A,H,$,F,G,R,L,V,U,te,ee,x,K,se,P,N,z,D,Q,me,ge,De,Ie,Be,ke,Fe;return h=new wn({props:{to:"/",$$slots:{default:[sC]},$$scope:{ctx:t}}}),d=new wn({props:{to:"contactos",$$slots:{default:[iC]},$$scope:{ctx:t}}}),_=new wn({props:{to:"propiedades",$$slots:{default:[rC]},$$scope:{ctx:t}}}),b=new wn({props:{to:"agenda",$$slots:{default:[oC]},$$scope:{ctx:t}}}),C=new wn({props:{to:"/about",$$slots:{default:[aC]},$$scope:{ctx:t}}}),C.$on("click",t[0]),A=new wn({props:{to:"about",$$slots:{default:[lC]},$$scope:{ctx:t}}}),$=new wn({props:{to:"register",$$slots:{default:[uC]},$$scope:{ctx:t}}}),G=new wn({props:{to:"login",$$slots:{default:[cC]},$$scope:{ctx:t}}}),L=new bn({props:{path:"/",$$slots:{default:[hC]},$$scope:{ctx:t}}}),U=new bn({props:{path:"/contactos",$$slots:{default:[fC]},$$scope:{ctx:t}}}),ee=new bn({props:{path:"propiedades",$$slots:{default:[dC]},$$scope:{ctx:t}}}),K=new bn({props:{path:"captacion",$$slots:{default:[pC]},$$scope:{ctx:t}}}),P=new bn({props:{path:"agenda",$$slots:{default:[mC]},$$scope:{ctx:t}}}),z=new bn({props:{path:"sinergias",$$slots:{default:[gC]},$$scope:{ctx:t}}}),Q=new bn({props:{path:"about",$$slots:{default:[_C]},$$scope:{ctx:t}}}),ge=new bn({props:{path:"logout",$$slots:{default:[vC]},$$scope:{ctx:t}}}),Ie=new bn({props:{path:"login",$$slots:{default:[yC]},$$scope:{ctx:t}}}),ke=new bn({props:{path:"register",$$slots:{default:[bC]},$$scope:{ctx:t}}}),{c(){e=p("div"),n=p("img"),i=y(),r=p("label"),r.innerHTML='<img src="src/assets/images/menu.svg" class="nav__img svelte-1viw6tr" alt="menu"/>',o=y(),a=p("input"),l=y(),u=p("div"),le(h.$$.fragment),f=y(),le(d.$$.fragment),g=y(),le(_.$$.fragment),v=y(),le(b.$$.fragment),E=y(),le(C.$$.fragment),O=y(),le(A.$$.fragment),H=y(),le($.$$.fragment),F=y(),le(G.$$.fragment),R=y(),le(L.$$.fragment),V=y(),le(U.$$.fragment),te=y(),le(ee.$$.fragment),x=y(),le(K.$$.fragment),se=y(),le(P.$$.fragment),N=y(),le(z.$$.fragment),D=y(),le(Q.$$.fragment),me=y(),le(ge.$$.fragment),De=y(),le(Ie.$$.fragment),Be=y(),le(ke.$$.fragment),fn(n.src,s="src/assets/images/logoMH.png")||m(n,"src",s),m(n,"alt","MatchHome"),m(n,"class","nav__logo svelte-1viw6tr"),m(r,"class","nav__label svelte-1viw6tr"),m(r,"for","menu"),m(a,"type","checkbox"),m(a,"id","menu"),m(a,"class","nav__input svelte-1viw6tr"),m(u,"class","nav__menu svelte-1viw6tr"),m(e,"class","nav__container svelte-1viw6tr")},m(B,ie){k(B,e,ie),c(e,n),c(e,i),c(e,r),c(e,o),c(e,a),c(e,l),c(e,u),oe(h,u,null),c(u,f),oe(d,u,null),c(u,g),oe(_,u,null),c(u,v),oe(b,u,null),c(u,E),oe(C,u,null),c(u,O),oe(A,u,null),c(u,H),oe($,u,null),c(u,F),oe(G,u,null),k(B,R,ie),oe(L,B,ie),k(B,V,ie),oe(U,B,ie),k(B,te,ie),oe(ee,B,ie),k(B,x,ie),oe(K,B,ie),k(B,se,ie),oe(P,B,ie),k(B,N,ie),oe(z,B,ie),k(B,D,ie),oe(Q,B,ie),k(B,me,ie),oe(ge,B,ie),k(B,De,ie),oe(Ie,B,ie),k(B,Be,ie),oe(ke,B,ie),Fe=!0},p(B,ie){const _t={};ie&8&&(_t.$$scope={dirty:ie,ctx:B}),h.$set(_t);const nt={};ie&8&&(nt.$$scope={dirty:ie,ctx:B}),d.$set(nt);const ht={};ie&8&&(ht.$$scope={dirty:ie,ctx:B}),_.$set(ht);const Gt={};ie&8&&(Gt.$$scope={dirty:ie,ctx:B}),b.$set(Gt);const Xe={};ie&8&&(Xe.$$scope={dirty:ie,ctx:B}),C.$set(Xe);const vt={};ie&8&&(vt.$$scope={dirty:ie,ctx:B}),A.$set(vt);const Tt={};ie&8&&(Tt.$$scope={dirty:ie,ctx:B}),$.$set(Tt);const Wt={};ie&8&&(Wt.$$scope={dirty:ie,ctx:B}),G.$set(Wt);const We={};ie&8&&(We.$$scope={dirty:ie,ctx:B}),L.$set(We);const Ft={};ie&8&&(Ft.$$scope={dirty:ie,ctx:B}),U.$set(Ft);const Et={};ie&8&&(Et.$$scope={dirty:ie,ctx:B}),ee.$set(Et);const Qt={};ie&8&&(Qt.$$scope={dirty:ie,ctx:B}),K.$set(Qt);const ft={};ie&8&&(ft.$$scope={dirty:ie,ctx:B}),P.$set(ft);const Vt={};ie&8&&(Vt.$$scope={dirty:ie,ctx:B}),z.$set(Vt);const yt={};ie&8&&(yt.$$scope={dirty:ie,ctx:B}),Q.$set(yt);const Ze={};ie&8&&(Ze.$$scope={dirty:ie,ctx:B}),ge.$set(Ze);const et={};ie&8&&(et.$$scope={dirty:ie,ctx:B}),Ie.$set(et);const Pe={};ie&8&&(Pe.$$scope={dirty:ie,ctx:B}),ke.$set(Pe)},i(B){Fe||(j(h.$$.fragment,B),j(d.$$.fragment,B),j(_.$$.fragment,B),j(b.$$.fragment,B),j(C.$$.fragment,B),j(A.$$.fragment,B),j($.$$.fragment,B),j(G.$$.fragment,B),j(L.$$.fragment,B),j(U.$$.fragment,B),j(ee.$$.fragment,B),j(K.$$.fragment,B),j(P.$$.fragment,B),j(z.$$.fragment,B),j(Q.$$.fragment,B),j(ge.$$.fragment,B),j(Ie.$$.fragment,B),j(ke.$$.fragment,B),Fe=!0)},o(B){W(h.$$.fragment,B),W(d.$$.fragment,B),W(_.$$.fragment,B),W(b.$$.fragment,B),W(C.$$.fragment,B),W(A.$$.fragment,B),W($.$$.fragment,B),W(G.$$.fragment,B),W(L.$$.fragment,B),W(U.$$.fragment,B),W(ee.$$.fragment,B),W(K.$$.fragment,B),W(P.$$.fragment,B),W(z.$$.fragment,B),W(Q.$$.fragment,B),W(ge.$$.fragment,B),W(Ie.$$.fragment,B),W(ke.$$.fragment,B),Fe=!1},d(B){B&&w(e),ae(h),ae(d),ae(_),ae(b),ae(C),ae(A),ae($),ae(G),B&&w(R),ae(L,B),B&&w(V),ae(U,B),B&&w(te),ae(ee,B),B&&w(x),ae(K,B),B&&w(se),ae(P,B),B&&w(N),ae(z,B),B&&w(D),ae(Q,B),B&&w(me),ae(ge,B),B&&w(De),ae(Ie,B),B&&w(Be),ae(ke,B)}}}function kC(t){let e,n,s;return n=new Gl({props:{$$slots:{default:[wC]},$$scope:{ctx:t}}}),{c(){e=p("nav"),le(n.$$.fragment),m(e,"class","nav svelte-1viw6tr")},m(i,r){k(i,e,r),oe(n,e,null),s=!0},p(i,[r]){const o={};r&8&&(o.$$scope={dirty:r,ctx:i}),n.$set(o)},i(i){s||(j(n.$$.fragment,i),s=!0)},o(i){W(n.$$.fragment,i),s=!1},d(i){i&&w(e),ae(n)}}}function EC(t,e,n){let s;Ve(t,Qh,r=>n(2,s=r)),console.log("logged? ",s),Qh.subscribe(r=>{});async function i(){console.log(s)}return[i]}class TC extends Ye{constructor(e){super(),xe(this,e,EC,kC,Ge,{})}}function Td(t){let e;return{c(){e=p("div"),e.innerHTML=`<h1 class="title svelte-1kx2964">Bienvendo A:</h1> 
      <img src="src/assets/images/logoMH.png" alt="MatchHome" class="svelte-1kx2964"/> 
      <div class=""><p class="desc__intro svelte-1kx2964">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod aut aliquam, expedita perferendis consequatur modi omnis! Nostrum iste necessitatibus quisquam numquam, aliquam ipsum. Sit, similique quis. Fuga vitae possimus quisquam quam. Unde accusantium neque veniam reprehenderit, laborum, magni ut quasi asperiores a amet fugiat non, sapiente obcaecati voluptas ab! Nostrum!</p> 
        <p><strong>www.matchhome.net</strong></p></div>`,m(e,"class","intro svelte-1kx2964")},m(n,s){k(n,e,s)},d(n){n&&w(e)}}}function IC(t){let e,n,s,i,r;n=new TC({});let o=t[0]&&Td();return{c(){e=p("nav"),le(n.$$.fragment),s=y(),i=p("body"),o&&o.c(),m(e,"class","navBar")},m(a,l){k(a,e,l),oe(n,e,null),k(a,s,l),k(a,i,l),o&&o.m(i,null),r=!0},p(a,[l]){a[0]?o||(o=Td(),o.c(),o.m(i,null)):o&&(o.d(1),o=null)},i(a){r||(j(n.$$.fragment,a),r=!0)},o(a){W(n.$$.fragment,a),r=!1},d(a){a&&w(e),ae(n),a&&w(s),a&&w(i),o&&o.d()}}}function CC(t,e,n){let s=!0;return setTimeout(()=>{n(0,s=!1),console.log("object")},3500),[s]}class SC extends Ye{constructor(e){super(),xe(this,e,CC,IC,Ge,{})}}new SC({target:document.getElementById("app")});
