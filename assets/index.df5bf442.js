(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function ue(){}const Td=t=>t;function Kt(t,e){for(const n in e)t[n]=e[n];return t}function Id(t){return t()}function ic(){return Object.create(null)}function xe(t){t.forEach(Id)}function qo(t){return typeof t=="function"}function ze(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let jr;function fn(t,e){return jr||(jr=document.createElement("a")),jr.href=e,t===jr.href}function c_(t){return Object.keys(t).length===0}function Ml(t,...e){if(t==null)return ue;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function ai(t){let e;return Ml(t,n=>e=n)(),e}function Ve(t,e,n){t.$$.on_destroy.push(Ml(e,n))}function Ul(t,e,n,s){if(t){const i=Cd(t,e,n,s);return t[0](i)}}function Cd(t,e,n,s){return t[1]&&s?Kt(n.ctx.slice(),t[1](s(e))):n.ctx}function Fl(t,e,n,s){if(t[2]&&s){const i=t[2](s(n));if(e.dirty===void 0)return i;if(typeof i=="object"){const r=[],o=Math.max(e.dirty.length,i.length);for(let a=0;a<o;a+=1)r[a]=e.dirty[a]|i[a];return r}return e.dirty|i}return e.dirty}function Vl(t,e,n,s,i,r){if(i){const o=Cd(e,n,s,r);t.p(o,i)}}function Bl(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let s=0;s<n;s++)e[s]=-1;return e}return-1}function ao(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function lo(t,e){const n={};e=new Set(e);for(const s in t)!e.has(s)&&s[0]!=="$"&&(n[s]=t[s]);return n}function rc(t){return t==null?"":t}function mt(t,e,n){return t.set(n),e}const Sd=typeof window<"u";let h_=Sd?()=>window.performance.now():()=>Date.now(),jl=Sd?t=>requestAnimationFrame(t):ue;const ni=new Set;function Ad(t){ni.forEach(e=>{e.c(t)||(ni.delete(e),e.f())}),ni.size!==0&&jl(Ad)}function f_(t){let e;return ni.size===0&&jl(Ad),{promise:new Promise(n=>{ni.add(e={c:t,f:n})}),abort(){ni.delete(e)}}}function c(t,e){t.appendChild(e)}function Dd(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function d_(t){const e=p("style");return p_(Dd(t),e),e.sheet}function p_(t,e){return c(t.head||t,e),e.sheet}function k(t,e,n){t.insertBefore(e,n||null)}function b(t){t.parentNode.removeChild(t)}function He(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function p(t){return document.createElement(t)}function D(t){return document.createTextNode(t)}function y(){return D(" ")}function _n(){return D("")}function B(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function In(t){return function(e){return e.preventDefault(),t.call(this,e)}}function m(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Fn(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const s in e)e[s]==null?t.removeAttribute(s):s==="style"?t.style.cssText=e[s]:s==="__value"?t.value=t[s]=e[s]:n[s]&&n[s].set?t[s]=e[s]:m(t,s,e[s])}function Jt(t,e,n){const s=new Set;for(let i=0;i<t.length;i+=1)t[i].checked&&s.add(t[i].__value);return n||s.delete(e),Array.from(s)}function ps(t){return t===""?null:+t}function m_(t){return Array.from(t.childNodes)}function ie(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function de(t,e){t.value=e==null?"":e}function Fe(t,e){for(let n=0;n<t.options.length;n+=1){const s=t.options[n];if(s.__value===e){s.selected=!0;return}}t.selectedIndex=-1}function xt(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}function li(t,e,n){t.classList[n?"add":"remove"](e)}function Rd(t,e,{bubbles:n=!1,cancelable:s=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,s,e),i}function oc(t,e){return new t(e)}const uo=new Map;let co=0;function g_(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function __(t,e){const n={stylesheet:d_(e),rules:{}};return uo.set(t,n),n}function ac(t,e,n,s,i,r,o,a=0){const l=16.666/s;let u=`{
`;for(let w=0;w<=1;w+=l){const E=e+(n-e)*r(w);u+=w*100+`%{${o(E,1-E)}}
`}const h=u+`100% {${o(n,1-n)}}
}`,f=`__svelte_${g_(h)}_${a}`,d=Dd(t),{stylesheet:g,rules:_}=uo.get(d)||__(d,t);_[f]||(_[f]=!0,g.insertRule(`@keyframes ${f} ${h}`,g.cssRules.length));const v=t.style.animation||"";return t.style.animation=`${v?`${v}, `:""}${f} ${s}ms linear ${i}ms 1 both`,co+=1,f}function v_(t,e){const n=(t.style.animation||"").split(", "),s=n.filter(e?r=>r.indexOf(e)<0:r=>r.indexOf("__svelte")===-1),i=n.length-s.length;i&&(t.style.animation=s.join(", "),co-=i,co||y_())}function y_(){jl(()=>{co||(uo.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&b(e)}),uo.clear())})}let zi;function Ui(t){zi=t}function cr(){if(!zi)throw new Error("Function called outside component initialization");return zi}function b_(t){cr().$$.on_mount.push(t)}function w_(t){cr().$$.on_destroy.push(t)}function Pd(){const t=cr();return(e,n,{cancelable:s=!1}={})=>{const i=t.$$.callbacks[e];if(i){const r=Rd(e,n,{cancelable:s});return i.slice().forEach(o=>{o.call(t,r)}),!r.defaultPrevented}return!0}}function Fi(t,e){return cr().$$.context.set(t,e),e}function bs(t){return cr().$$.context.get(t)}function k_(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(s=>s.call(this,e))}const Ri=[],Xn=[],xr=[],el=[],Nd=Promise.resolve();let tl=!1;function Od(){tl||(tl=!0,Nd.then($d))}function E_(){return Od(),Nd}function Ze(t){xr.push(t)}function Ms(t){el.push(t)}const Sa=new Set;let qr=0;function $d(){const t=zi;do{for(;qr<Ri.length;){const e=Ri[qr];qr++,Ui(e),T_(e.$$)}for(Ui(null),Ri.length=0,qr=0;Xn.length;)Xn.pop()();for(let e=0;e<xr.length;e+=1){const n=xr[e];Sa.has(n)||(Sa.add(n),n())}xr.length=0}while(Ri.length);for(;el.length;)el.pop()();tl=!1,Sa.clear(),Ui(t)}function T_(t){if(t.fragment!==null){t.update(),xe(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Ze)}}let Ai;function I_(){return Ai||(Ai=Promise.resolve(),Ai.then(()=>{Ai=null})),Ai}function Aa(t,e,n){t.dispatchEvent(Rd(`${e?"intro":"outro"}${n}`))}const Jr=new Set;let zn;function Ot(){zn={r:0,c:[],p:zn}}function $t(){zn.r||xe(zn.c),zn=zn.p}function j(t,e){t&&t.i&&(Jr.delete(t),t.i(e))}function z(t,e,n,s){if(t&&t.o){if(Jr.has(t))return;Jr.add(t),zn.c.push(()=>{Jr.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}const C_={duration:0};function Pn(t,e,n,s){let i=e(t,n),r=s?0:1,o=null,a=null,l=null;function u(){l&&v_(t,l)}function h(d,g){const _=d.b-r;return g*=Math.abs(_),{a:r,b:d.b,d:_,duration:g,start:d.start,end:d.start+g,group:d.group}}function f(d){const{delay:g=0,duration:_=300,easing:v=Td,tick:w=ue,css:E}=i||C_,A={start:h_()+g,b:d};d||(A.group=zn,zn.r+=1),o||a?a=A:(E&&(u(),l=ac(t,r,d,_,g,v,E)),d&&w(0,1),o=h(A,_),Ze(()=>Aa(t,d,"start")),f_(O=>{if(a&&O>a.start&&(o=h(a,_),a=null,Aa(t,o.b,"start"),E&&(u(),l=ac(t,r,o.b,o.duration,0,v,i.css))),o){if(O>=o.end)w(r=o.b,1-r),Aa(t,o.b,"end"),a||(o.b?u():--o.group.r||xe(o.group.c)),o=null;else if(O>=o.start){const R=O-o.start;r=o.a+o.d*v(R/o.duration),w(r,1-r)}}return!!(o||a)}))}return{run(d){qo(i)?I_().then(()=>{i=i(),f(d)}):f(d)},end(){u(),o=a=null}}}function Cn(t,e){const n={},s={},i={$$scope:1};let r=t.length;for(;r--;){const o=t[r],a=e[r];if(a){for(const l in o)l in a||(s[l]=1);for(const l in a)i[l]||(n[l]=a[l],i[l]=1);t[r]=a}else for(const l in o)i[l]=1}for(const o in s)o in n||(n[o]=void 0);return n}function xn(t){return typeof t=="object"&&t!==null?t:{}}function Us(t,e,n){const s=t.$$.props[e];s!==void 0&&(t.$$.bound[s]=n,n(t.$$.ctx[s]))}function le(t){t&&t.c()}function oe(t,e,n,s){const{fragment:i,after_update:r}=t.$$;i&&i.m(e,n),s||Ze(()=>{const o=t.$$.on_mount.map(Id).filter(qo);t.$$.on_destroy?t.$$.on_destroy.push(...o):xe(o),t.$$.on_mount=[]}),r.forEach(Ze)}function ae(t,e){const n=t.$$;n.fragment!==null&&(xe(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function S_(t,e){t.$$.dirty[0]===-1&&(Ri.push(t),Od(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Qe(t,e,n,s,i,r,o,a=[-1]){const l=zi;Ui(t);const u=t.$$={fragment:null,ctx:[],props:r,update:ue,not_equal:i,bound:ic(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:ic(),dirty:a,skip_bound:!1,root:e.target||l.$$.root};o&&o(u.root);let h=!1;if(u.ctx=n?n(t,e.props||{},(f,d,...g)=>{const _=g.length?g[0]:d;return u.ctx&&i(u.ctx[f],u.ctx[f]=_)&&(!u.skip_bound&&u.bound[f]&&u.bound[f](_),h&&S_(t,f)),d}):[],u.update(),h=!0,xe(u.before_update),u.fragment=s?s(u.ctx):!1,e.target){if(e.hydrate){const f=m_(e.target);u.fragment&&u.fragment.l(f),f.forEach(b)}else u.fragment&&u.fragment.c();e.intro&&j(t.$$.fragment),oe(t,e.target,e.anchor,e.customElement),$d()}Ui(l)}class Ye{$destroy(){ae(this,1),this.$destroy=ue}$on(e,n){if(!qo(n))return ue;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const i=s.indexOf(n);i!==-1&&s.splice(i,1)}}$set(e){this.$$set&&!c_(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const lc=t=>typeof t>"u",Ld=t=>typeof t=="function",Md=t=>typeof t=="number";function A_(t){return!t.defaultPrevented&&t.button===0&&!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Ud(){let t=0;return()=>t++}function D_(){return Math.random().toString(36).substring(2)}const ws=typeof window>"u";function Fd(t,e,n){return t.addEventListener(e,n),()=>t.removeEventListener(e,n)}const nl=(t,e)=>t?{}:{style:e},Js=t=>({"aria-hidden":"true",...nl(t,"display:none;")}),Xs=[];function R_(t,e){return{subscribe:tn(t,e).subscribe}}function tn(t,e=ue){let n;const s=new Set;function i(a){if(ze(t,a)&&(t=a,n)){const l=!Xs.length;for(const u of s)u[1](),Xs.push(u,t);if(l){for(let u=0;u<Xs.length;u+=2)Xs[u][0](Xs[u+1]);Xs.length=0}}}function r(a){i(a(t))}function o(a,l=ue){const u=[a,l];return s.add(u),s.size===1&&(n=e(i)||ue),a(t),()=>{s.delete(u),s.size===0&&(n(),n=null)}}return{set:i,update:r,subscribe:o}}function P_(t,e,n){const s=!Array.isArray(t),i=s?[t]:t,r=e.length<2;return R_(n,o=>{let a=!1;const l=[];let u=0,h=ue;const f=()=>{if(u)return;h();const g=e(s?l[0]:l,o);r?o(g):h=qo(g)?g:ue},d=i.map((g,_)=>Ml(g,v=>{l[_]=v,u&=~(1<<_),a&&f()},()=>{u|=1<<_}));return a=!0,f(),function(){xe(d),h()}})}const hr=t=>`@@svnav-ctx__${t}`,sl=hr("LOCATION"),ui=hr("ROUTER"),Vd=hr("ROUTE"),N_=hr("ROUTE_PARAMS"),O_=hr("FOCUS_ELEM"),Bd=/^:(.+)/,Pi=(t,e,n)=>t.substr(e,n),il=(t,e)=>Pi(t,0,e.length)===e,$_=t=>t==="",L_=t=>Bd.test(t),jd=t=>t[0]==="*",M_=t=>t.replace(/\*.*$/,""),qd=t=>t.replace(/(^\/+|\/+$)/g,"");function qn(t,e=!1){const n=qd(t).split("/");return e?n.filter(Boolean):n}const Da=(t,e)=>t+(e?`?${e}`:""),ql=t=>`/${qd(t)}`;function fr(...t){const e=s=>qn(s,!0).join("/"),n=t.map(e).join("/");return ql(n)}const Hl=1,Ho=2,Fs=3,U_=4,Hd=5,F_=6,Kd=7,V_=8,B_=9,zd=10,Gd=11,j_={[Hl]:"Link",[Ho]:"Route",[Fs]:"Router",[U_]:"useFocus",[Hd]:"useLocation",[F_]:"useMatch",[Kd]:"useNavigate",[V_]:"useParams",[B_]:"useResolvable",[zd]:"useResolve",[Gd]:"navigate"},Kl=t=>j_[t];function q_(t,e){let n;return t===Ho?n=e.path?`path="${e.path}"`:"default":t===Hl?n=`to="${e.to}"`:t===Fs&&(n=`basepath="${e.basepath||""}"`),`<${Kl(t)} ${n||""} />`}function H_(t,e,n,s){const i=n&&q_(s||t,n),r=i?`

Occurred in: ${i}`:"",o=Kl(t),a=Ld(e)?e(o):e;return`<${o}> ${a}${r}`}const Wd=t=>(...e)=>t(H_(...e)),Qd=Wd(t=>{throw new Error(t)}),ho=Wd(console.warn),uc=4,K_=3,z_=2,G_=1,W_=1;function Q_(t,e){const n=t.default?0:qn(t.fullPath).reduce((s,i)=>{let r=s;return r+=uc,$_(i)?r+=W_:L_(i)?r+=z_:jd(i)?r-=uc+G_:r+=K_,r},0);return{route:t,score:n,index:e}}function Y_(t){return t.map(Q_).sort((e,n)=>e.score<n.score?1:e.score>n.score?-1:e.index-n.index)}function Yd(t,e){let n,s;const[i]=e.split("?"),r=qn(i),o=r[0]==="",a=Y_(t);for(let l=0,u=a.length;l<u;l++){const{route:h}=a[l];let f=!1;const d={},g=E=>({...h,params:d,uri:E});if(h.default){s=g(e);continue}const _=qn(h.fullPath),v=Math.max(r.length,_.length);let w=0;for(;w<v;w++){const E=_[w],A=r[w];if(!lc(E)&&jd(E)){const R=E==="*"?"*":E.slice(1);d[R]=r.slice(w).map(decodeURIComponent).join("/");break}if(lc(A)){f=!0;break}const O=Bd.exec(E);if(O&&!o){const R=decodeURIComponent(A);d[O[1]]=R}else if(E!==A){f=!0;break}}if(!f){n=g(fr(...r.slice(0,w)));break}}return n||s||null}function Xd(t,e){return Yd([t],e)}function X_(t,e){if(il(t,"/"))return t;const[n,s]=t.split("?"),[i]=e.split("?"),r=qn(n),o=qn(i);if(r[0]==="")return Da(i,s);if(!il(r[0],".")){const u=o.concat(r).join("/");return Da((i==="/"?"":"/")+u,s)}const a=o.concat(r),l=[];return a.forEach(u=>{u===".."?l.pop():u!=="."&&l.push(u)}),Da(`/${l.join("/")}`,s)}function cc(t,e){const{pathname:n,hash:s="",search:i="",state:r}=t,o=qn(e,!0),a=qn(n,!0);for(;o.length;)o[0]!==a[0]&&Qd(Fs,`Invalid state: All locations must begin with the basepath "${e}", found "${n}"`),o.shift(),a.shift();return{pathname:fr(...a),hash:s,search:i,state:r}}const hc=t=>t.length===1?"":t,zl=t=>{const e=t.indexOf("?"),n=t.indexOf("#"),s=e!==-1,i=n!==-1,r=i?hc(Pi(t,n)):"",o=i?Pi(t,0,n):t,a=s?hc(Pi(o,e)):"";return{pathname:(s?Pi(o,0,e):o)||"/",search:a,hash:r}},x_=t=>{const{pathname:e,search:n,hash:s}=t;return e+n+s};function J_(t,e,n){return fr(n,X_(t,e))}function Z_(t,e){const n=ql(M_(t)),s=qn(n,!0),i=qn(e,!0).slice(0,s.length),r=Xd({fullPath:n},fr(...i));return r&&r.uri}const Ra="POP",ev="PUSH",tv="REPLACE";function Pa(t){return{...t.location,pathname:encodeURI(decodeURI(t.location.pathname)),state:t.history.state,_key:t.history.state&&t.history.state._key||"initial"}}function nv(t){let e=[],n=Pa(t),s=Ra;const i=(r=e)=>r.forEach(o=>o({location:n,action:s}));return{get location(){return n},listen(r){e.push(r);const o=()=>{n=Pa(t),s=Ra,i([r])};i([r]);const a=Fd(t,"popstate",o);return()=>{a(),e=e.filter(l=>l!==r)}},navigate(r,o){const{state:a={},replace:l=!1}=o||{};if(s=l?tv:ev,Md(r))o&&ho(Gd,"Navigation options (state or replace) are not supported, when passing a number as the first argument to navigate. They are ignored."),s=Ra,t.history.go(r);else{const u={...a,_key:D_()};try{t.history[l?"replaceState":"pushState"](u,"",r)}catch{t.location[l?"replace":"assign"](r)}}n=Pa(t),i()}}}function Na(t,e){return{...zl(e),state:t}}function sv(t="/"){let e=0,n=[Na(null,t)];return{get entries(){return n},get location(){return n[e]},addEventListener(){},removeEventListener(){},history:{get state(){return n[e].state},pushState(s,i,r){e++,n=n.slice(0,e),n.push(Na(s,r))},replaceState(s,i,r){n[e]=Na(s,r)},go(s){const i=e+s;i<0||i>n.length-1||(e=i)}}}}const iv=!!(!ws&&window.document&&window.document.createElement),rv=!ws&&window.location.origin==="null",ov=nv(iv&&!rv?window:sv());let Kn=null,xd=!0;function av(t,e){const n=document.querySelectorAll("[data-svnav-router]");for(let s=0;s<n.length;s++){const i=n[s],r=Number(i.dataset.svnavRouter);if(r===t)return!0;if(r===e)return!1}return!1}function lv(t){(!Kn||t.level>Kn.level||t.level===Kn.level&&av(t.routerId,Kn.routerId))&&(Kn=t)}function uv(){Kn=null}function cv(){xd=!1}function fc(t){if(!t)return!1;const e="tabindex";try{if(!t.hasAttribute(e)){t.setAttribute(e,"-1");let n;n=Fd(t,"blur",()=>{t.removeAttribute(e),n()})}return t.focus(),document.activeElement===t}catch{return!1}}function hv(t,e){return Number(t.dataset.svnavRouteEnd)===e}function fv(t){return/^H[1-6]$/i.test(t.tagName)}function dc(t,e=document){return e.querySelector(t)}function dv(t){let n=dc(`[data-svnav-route-start="${t}"]`).nextElementSibling;for(;!hv(n,t);){if(fv(n))return n;const s=dc("h1,h2,h3,h4,h5,h6",n);if(s)return s;n=n.nextElementSibling}return null}function pv(t){Promise.resolve(ai(t.focusElement)).then(e=>{const n=e||dv(t.id);n||ho(Fs,`Could not find an element to focus. You should always render a header for accessibility reasons, or set a custom focus element via the "useFocus" hook. If you don't want this Route or Router to manage focus, pass "primary={false}" to it.`,t,Ho),!fc(n)&&fc(document.documentElement)})}const mv=(t,e,n)=>(s,i)=>E_().then(()=>{if(!Kn||xd){cv();return}if(s&&pv(Kn.route),t.announcements&&i){const{path:r,fullPath:o,meta:a,params:l,uri:u}=Kn.route,h=t.createAnnouncement({path:r,fullPath:o,meta:a,params:l,uri:u},ai(n));Promise.resolve(h).then(f=>{e.set(f)})}uv()}),pc="position:fixed;top:-1px;left:0;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;";function gv(t){let e,n,s=[{role:"status"},{"aria-atomic":"true"},{"aria-live":"polite"},{"data-svnav-announcer":""},nl(t[6],pc)],i={};for(let r=0;r<s.length;r+=1)i=Kt(i,s[r]);return{c(){e=p("div"),n=D(t[0]),Fn(e,i)},m(r,o){k(r,e,o),c(e,n)},p(r,o){o[0]&1&&ie(n,r[0]),Fn(e,i=Cn(s,[{role:"status"},{"aria-atomic":"true"},{"aria-live":"polite"},{"data-svnav-announcer":""},nl(r[6],pc)]))},d(r){r&&b(e)}}}function _v(t){let e,n,s,i,r,o=[Js(t[6]),{"data-svnav-router":t[3]}],a={};for(let f=0;f<o.length;f+=1)a=Kt(a,o[f]);const l=t[22].default,u=Ul(l,t,t[21],null);let h=t[2]&&t[4]&&t[1].announcements&&gv(t);return{c(){e=p("div"),n=y(),u&&u.c(),s=y(),h&&h.c(),i=_n(),Fn(e,a)},m(f,d){k(f,e,d),k(f,n,d),u&&u.m(f,d),k(f,s,d),h&&h.m(f,d),k(f,i,d),r=!0},p(f,d){Fn(e,a=Cn(o,[Js(f[6]),{"data-svnav-router":f[3]}])),u&&u.p&&(!r||d[0]&2097152)&&Vl(u,l,f,f[21],r?Fl(l,f[21],d,null):Bl(f[21]),null),f[2]&&f[4]&&f[1].announcements&&h.p(f,d)},i(f){r||(j(u,f),r=!0)},o(f){z(u,f),r=!1},d(f){f&&b(e),f&&b(n),u&&u.d(f),f&&b(s),h&&h.d(f),f&&b(i)}}}const vv=Ud(),mc="/";function yv(t,e,n){let s,i,r,o,a,{$$slots:l={},$$scope:u}=e,{basepath:h=mc}=e,{url:f=null}=e,{history:d=ov}=e,{primary:g=!0}=e,{a11y:_={}}=e,{disableInlineStyles:v=!1}=e;const w={createAnnouncement:S=>`Navigated to ${S.uri}`,announcements:!0,..._},E=h,A=ql(h),O=bs(sl),R=bs(ui),F=!O,$=vv(),U=g&&!(R&&!R.manageFocus),Q=tn("");Ve(t,Q,S=>n(0,a=S));const P=R?R.disableInlineStyles:v,N=tn([]);Ve(t,N,S=>n(20,o=S));const K=tn(null);Ve(t,K,S=>n(18,i=S));let L=!1;const se=F?0:R.level+1,G=F?tn((()=>cc(ws?zl(f):d.location,A))()):O;Ve(t,G,S=>n(17,s=S));const q=tn(s);Ve(t,q,S=>n(19,r=S));const ee=mv(w,Q,G),C=S=>re=>re.filter(be=>be.id!==S);function H(S){if(ws){if(L)return;const re=Xd(S,s.pathname);if(re)return L=!0,re}else N.update(re=>{const be=C(S.id)(re);return be.push(S),be})}function W(S){N.update(C(S))}return!F&&h!==mc&&ho(Fs,'Only top-level Routers can have a "basepath" prop. It is ignored.',{basepath:h}),F&&(b_(()=>d.listen(re=>{const be=cc(re.location,A);q.set(s),G.set(be)})),Fi(sl,G)),Fi(ui,{activeRoute:K,registerRoute:H,unregisterRoute:W,manageFocus:U,level:se,id:$,history:F?d:R.history,basepath:F?A:R.basepath,disableInlineStyles:P}),t.$$set=S=>{"basepath"in S&&n(11,h=S.basepath),"url"in S&&n(12,f=S.url),"history"in S&&n(13,d=S.history),"primary"in S&&n(14,g=S.primary),"a11y"in S&&n(15,_=S.a11y),"disableInlineStyles"in S&&n(16,v=S.disableInlineStyles),"$$scope"in S&&n(21,u=S.$$scope)},t.$$.update=()=>{if(t.$$.dirty[0]&2048&&h!==E&&ho(Fs,'You cannot change the "basepath" prop. It is ignored.'),t.$$.dirty[0]&1179648){const S=Yd(o,s.pathname);K.set(S)}if(t.$$.dirty[0]&655360&&F){const S=!!s.hash,re=!S&&U,be=!S||s.pathname!==r.pathname;ee(re,be)}t.$$.dirty[0]&262144&&U&&i&&i.primary&&lv({level:se,routerId:$,route:i})},[a,w,F,$,U,Q,P,N,K,G,q,h,f,d,g,_,v,s,i,r,o,u,l]}class Gl extends Ye{constructor(e){super(),Qe(this,e,yv,_v,ze,{basepath:11,url:12,history:13,primary:14,a11y:15,disableInlineStyles:16},null,[-1,-1])}}function dr(t,e,n=ui,s=Fs){bs(n)||Qd(t,r=>`You cannot use ${r} outside of a ${Kl(s)}.`,e)}const bv=t=>{const{subscribe:e}=bs(t);return{subscribe:e}};function Jd(){return dr(Hd),bv(sl)}function Zd(){const{history:t}=bs(ui);return t}function ep(){const t=bs(Vd);return t?P_(t,e=>e.base):tn("/")}function tp(){dr(zd);const t=ep(),{basepath:e}=bs(ui);return s=>J_(s,ai(t),e)}function vi(){dr(Kd);const t=tp(),{navigate:e}=Zd();return(s,i)=>{const r=Md(s)?s:t(s);return e(r,i)}}const wv=t=>({params:t&16,location:t&8}),gc=t=>({params:ws?ai(t[10]):t[4],location:t[3],navigate:t[11]});function _c(t){let e,n;return e=new Gl({props:{primary:t[1],$$slots:{default:[Tv]},$$scope:{ctx:t}}}),{c(){le(e.$$.fragment)},m(s,i){oe(e,s,i),n=!0},p(s,i){const r={};i&2&&(r.primary=s[1]),i&528409&&(r.$$scope={dirty:i,ctx:s}),e.$set(r)},i(s){n||(j(e.$$.fragment,s),n=!0)},o(s){z(e.$$.fragment,s),n=!1},d(s){ae(e,s)}}}function kv(t){let e;const n=t[18].default,s=Ul(n,t,t[19],gc);return{c(){s&&s.c()},m(i,r){s&&s.m(i,r),e=!0},p(i,r){s&&s.p&&(!e||r&524312)&&Vl(s,n,i,i[19],e?Fl(n,i[19],r,wv):Bl(i[19]),gc)},i(i){e||(j(s,i),e=!0)},o(i){z(s,i),e=!1},d(i){s&&s.d(i)}}}function Ev(t){let e,n,s;const i=[{location:t[3]},{navigate:t[11]},ws?ai(t[10]):t[4],t[12]];var r=t[0];function o(a){let l={};for(let u=0;u<i.length;u+=1)l=Kt(l,i[u]);return{props:l}}return r&&(e=oc(r,o())),{c(){e&&le(e.$$.fragment),n=_n()},m(a,l){e&&oe(e,a,l),k(a,n,l),s=!0},p(a,l){const u=l&7192?Cn(i,[l&8&&{location:a[3]},l&2048&&{navigate:a[11]},l&1040&&xn(ws?ai(a[10]):a[4]),l&4096&&xn(a[12])]):{};if(r!==(r=a[0])){if(e){Ot();const h=e;z(h.$$.fragment,1,0,()=>{ae(h,1)}),$t()}r?(e=oc(r,o()),le(e.$$.fragment),j(e.$$.fragment,1),oe(e,n.parentNode,n)):e=null}else r&&e.$set(u)},i(a){s||(e&&j(e.$$.fragment,a),s=!0)},o(a){e&&z(e.$$.fragment,a),s=!1},d(a){a&&b(n),e&&ae(e,a)}}}function Tv(t){let e,n,s,i;const r=[Ev,kv],o=[];function a(l,u){return l[0]!==null?0:1}return e=a(t),n=o[e]=r[e](t),{c(){n.c(),s=_n()},m(l,u){o[e].m(l,u),k(l,s,u),i=!0},p(l,u){let h=e;e=a(l),e===h?o[e].p(l,u):(Ot(),z(o[h],1,1,()=>{o[h]=null}),$t(),n=o[e],n?n.p(l,u):(n=o[e]=r[e](l),n.c()),j(n,1),n.m(s.parentNode,s))},i(l){i||(j(n),i=!0)},o(l){z(n),i=!1},d(l){o[e].d(l),l&&b(s)}}}function Iv(t){let e,n,s,i,r,o=[Js(t[7]),{"data-svnav-route-start":t[5]}],a={};for(let f=0;f<o.length;f+=1)a=Kt(a,o[f]);let l=t[2]&&_c(t),u=[Js(t[7]),{"data-svnav-route-end":t[5]}],h={};for(let f=0;f<u.length;f+=1)h=Kt(h,u[f]);return{c(){e=p("div"),n=y(),l&&l.c(),s=y(),i=p("div"),Fn(e,a),Fn(i,h)},m(f,d){k(f,e,d),k(f,n,d),l&&l.m(f,d),k(f,s,d),k(f,i,d),r=!0},p(f,[d]){Fn(e,a=Cn(o,[Js(f[7]),{"data-svnav-route-start":f[5]}])),f[2]?l?(l.p(f,d),d&4&&j(l,1)):(l=_c(f),l.c(),j(l,1),l.m(s.parentNode,s)):l&&(Ot(),z(l,1,1,()=>{l=null}),$t()),Fn(i,h=Cn(u,[Js(f[7]),{"data-svnav-route-end":f[5]}]))},i(f){r||(j(l),r=!0)},o(f){z(l),r=!1},d(f){f&&b(e),f&&b(n),l&&l.d(f),f&&b(s),f&&b(i)}}}const Cv=Ud();function Sv(t,e,n){let s;const i=["path","component","meta","primary"];let r=lo(e,i),o,a,l,u,{$$slots:h={},$$scope:f}=e,{path:d=""}=e,{component:g=null}=e,{meta:_={}}=e,{primary:v=!0}=e;dr(Ho,e);const w=Cv(),{registerRoute:E,unregisterRoute:A,activeRoute:O,disableInlineStyles:R}=bs(ui);Ve(t,O,L=>n(16,o=L));const F=ep();Ve(t,F,L=>n(17,l=L));const $=Jd();Ve(t,$,L=>n(3,a=L));const U=tn(null);let Q;const P=tn(),N=tn({});Ve(t,N,L=>n(4,u=L)),Fi(Vd,P),Fi(N_,N),Fi(O_,U);const K=vi();return ws||w_(()=>A(w)),t.$$set=L=>{n(24,e=Kt(Kt({},e),ao(L))),n(12,r=lo(e,i)),"path"in L&&n(13,d=L.path),"component"in L&&n(0,g=L.component),"meta"in L&&n(14,_=L.meta),"primary"in L&&n(1,v=L.primary),"$$scope"in L&&n(19,f=L.$$scope)},t.$$.update=()=>{if(t.$$.dirty&155658){const L=d==="",se=fr(l,d),Z={id:w,path:d,meta:_,default:L,fullPath:L?"":se,base:L?l:Z_(se,a.pathname),primary:v,focusElement:U};P.set(Z),n(15,Q=E(Z))}if(t.$$.dirty&98304&&n(2,s=!!(Q||o&&o.id===w)),t.$$.dirty&98308&&s){const{params:L}=Q||o;N.set(L)}},e=ao(e),[g,v,s,a,u,w,O,R,F,$,N,K,r,d,_,Q,o,l,h,f]}class bn extends Ye{constructor(e){super(),Qe(this,e,Sv,Iv,ze,{path:13,component:0,meta:14,primary:1})}}function Av(t){let e,n,s,i;const r=t[13].default,o=Ul(r,t,t[12],null);let a=[{href:t[0]},t[2],t[1]],l={};for(let u=0;u<a.length;u+=1)l=Kt(l,a[u]);return{c(){e=p("a"),o&&o.c(),Fn(e,l)},m(u,h){k(u,e,h),o&&o.m(e,null),n=!0,s||(i=B(e,"click",t[4]),s=!0)},p(u,[h]){o&&o.p&&(!n||h&4096)&&Vl(o,r,u,u[12],n?Fl(r,u[12],h,null):Bl(u[12]),null),Fn(e,l=Cn(a,[(!n||h&1)&&{href:u[0]},h&4&&u[2],h&2&&u[1]]))},i(u){n||(j(o,u),n=!0)},o(u){z(o,u),n=!1},d(u){u&&b(e),o&&o.d(u),s=!1,i()}}}function Dv(t,e,n){let s,i,r,o,a,l;const u=["to","replace","state","getProps"];let h=lo(e,u),f,{$$slots:d={},$$scope:g}=e,{to:_}=e,{replace:v=!1}=e,{state:w={}}=e,{getProps:E=null}=e;dr(Hl,e);const A=Jd();Ve(t,A,U=>n(11,f=U));const O=Pd(),R=tp(),{navigate:F}=Zd();function $(U){O("click",U),A_(U)&&(U.preventDefault(),F(s,{state:w,replace:o||v}))}return t.$$set=U=>{n(19,e=Kt(Kt({},e),ao(U))),n(18,h=lo(e,u)),"to"in U&&n(5,_=U.to),"replace"in U&&n(6,v=U.replace),"state"in U&&n(7,w=U.state),"getProps"in U&&n(8,E=U.getProps),"$$scope"in U&&n(12,g=U.$$scope)},t.$$.update=()=>{t.$$.dirty&2080&&n(0,s=R(_,f)),t.$$.dirty&2049&&n(10,i=il(f.pathname,s)),t.$$.dirty&2049&&n(9,r=s===f.pathname),t.$$.dirty&2049&&(o=zl(s)===x_(f)),t.$$.dirty&512&&n(2,a=r?{"aria-current":"page"}:{}),n(1,l=(()=>{if(Ld(E)){const U=E({location:f,href:s,isPartiallyCurrent:i,isCurrent:r});return{...h,...U}}return h})())},e=ao(e),[s,l,a,A,$,_,v,w,E,r,i,f,g,d]}class Tn extends Ye{constructor(e){super(),Qe(this,e,Dv,Av,ze,{to:5,replace:6,state:7,getProps:8})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const np=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Rv=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},sp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,h=r>>2,f=(r&3)<<4|a>>4;let d=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(d=64)),s.push(n[h],n[f],n[d],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(np(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Rv(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||u==null||f==null)throw Error();const d=r<<2|a>>4;if(s.push(d),u!==64){const g=a<<4&240|u>>2;if(s.push(g),f!==64){const _=u<<6&192|f;s.push(_)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Pv=function(t){const e=np(t);return sp.encodeByteArray(e,!0)},fo=function(t){return Pv(t).replace(/\./g,"")},ip=function(t){try{return sp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Nv(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(dn())}function Ov(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function $v(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Lv(){const t=dn();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Mv(){return typeof indexedDB=="object"}function Uv(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}function Fv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Vv=()=>Fv().__FIREBASE_DEFAULTS__,Bv=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t=process.env.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},jv=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ip(t[1]);return e&&JSON.parse(e)},Wl=()=>{try{return Vv()||Bv()||jv()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},rp=t=>{var e,n;return(n=(e=Wl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},qv=t=>{const e=rp(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Hv=()=>{var t;return(t=Wl())===null||t===void 0?void 0:t.config},op=t=>{var e;return(e=Wl())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kv{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function zv(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[fo(JSON.stringify(n)),fo(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gv="FirebaseError";class rs extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Gv,Object.setPrototypeOf(this,rs.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,pr.prototype.create)}}class pr{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Wv(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new rs(i,a,s)}}function Wv(t,e){return t.replace(Qv,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Qv=/\{\$([^}]+)}/g;function Yv(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function po(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(vc(r)&&vc(o)){if(!po(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function vc(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mr(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Ni(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function Oi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Xv(t,e){const n=new xv(t,e);return n.subscribe.bind(n)}class xv{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Jv(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=Oa),i.error===void 0&&(i.error=Oa),i.complete===void 0&&(i.complete=Oa);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Jv(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Oa(){}/**
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
 */class Zv{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Kv;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ty(e))try{this.getOrInitializeService({instanceIdentifier:Ds})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Ds){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ds){return this.instances.has(e)}getOptions(e=Ds){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:ey(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ds){return this.component?this.component.multipleInstances?e:Ds:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ey(t){return t===Ds?void 0:t}function ty(t){return t.instantiationMode==="EAGER"}/**
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
 */class ny{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Zv(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var je;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(je||(je={}));const sy={debug:je.DEBUG,verbose:je.VERBOSE,info:je.INFO,warn:je.WARN,error:je.ERROR,silent:je.SILENT},iy=je.INFO,ry={[je.DEBUG]:"log",[je.VERBOSE]:"log",[je.INFO]:"info",[je.WARN]:"warn",[je.ERROR]:"error"},oy=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=ry[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ql{constructor(e){this.name=e,this._logLevel=iy,this._logHandler=oy,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in je))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?sy[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,je.DEBUG,...e),this._logHandler(this,je.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,je.VERBOSE,...e),this._logHandler(this,je.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,je.INFO,...e),this._logHandler(this,je.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,je.WARN,...e),this._logHandler(this,je.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,je.ERROR,...e),this._logHandler(this,je.ERROR,...e)}}const ay=(t,e)=>e.some(n=>t instanceof n);let yc,bc;function ly(){return yc||(yc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function uy(){return bc||(bc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ap=new WeakMap,rl=new WeakMap,lp=new WeakMap,$a=new WeakMap,Yl=new WeakMap;function cy(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(ms(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ap.set(n,t)}).catch(()=>{}),Yl.set(e,t),e}function hy(t){if(rl.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});rl.set(t,e)}let ol={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return rl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||lp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ms(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function fy(t){ol=t(ol)}function dy(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(La(this),e,...n);return lp.set(s,e.sort?e.sort():[e]),ms(s)}:uy().includes(t)?function(...e){return t.apply(La(this),e),ms(ap.get(this))}:function(...e){return ms(t.apply(La(this),e))}}function py(t){return typeof t=="function"?dy(t):(t instanceof IDBTransaction&&hy(t),ay(t,ly())?new Proxy(t,ol):t)}function ms(t){if(t instanceof IDBRequest)return cy(t);if($a.has(t))return $a.get(t);const e=py(t);return e!==t&&($a.set(t,e),Yl.set(e,t)),e}const La=t=>Yl.get(t);function my(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=ms(o);return s&&o.addEventListener("upgradeneeded",l=>{s(ms(o.result),l.oldVersion,l.newVersion,ms(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const gy=["get","getKey","getAll","getAllKeys","count"],_y=["put","add","delete","clear"],Ma=new Map;function wc(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ma.get(e))return Ma.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=_y.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||gy.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Ma.set(e,r),r}fy(t=>({...t,get:(e,n,s)=>wc(e,n)||t.get(e,n,s),has:(e,n)=>!!wc(e,n)||t.has(e,n)}));/**
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
 */class vy{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(yy(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function yy(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const al="@firebase/app",kc="0.8.2";/**
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
 */const Bs=new Ql("@firebase/app"),by="@firebase/app-compat",wy="@firebase/analytics-compat",ky="@firebase/analytics",Ey="@firebase/app-check-compat",Ty="@firebase/app-check",Iy="@firebase/auth",Cy="@firebase/auth-compat",Sy="@firebase/database",Ay="@firebase/database-compat",Dy="@firebase/functions",Ry="@firebase/functions-compat",Py="@firebase/installations",Ny="@firebase/installations-compat",Oy="@firebase/messaging",$y="@firebase/messaging-compat",Ly="@firebase/performance",My="@firebase/performance-compat",Uy="@firebase/remote-config",Fy="@firebase/remote-config-compat",Vy="@firebase/storage",By="@firebase/storage-compat",jy="@firebase/firestore",qy="@firebase/firestore-compat",Hy="firebase",Ky="9.12.1";/**
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
 */const ll="[DEFAULT]",zy={[al]:"fire-core",[by]:"fire-core-compat",[ky]:"fire-analytics",[wy]:"fire-analytics-compat",[Ty]:"fire-app-check",[Ey]:"fire-app-check-compat",[Iy]:"fire-auth",[Cy]:"fire-auth-compat",[Sy]:"fire-rtdb",[Ay]:"fire-rtdb-compat",[Dy]:"fire-fn",[Ry]:"fire-fn-compat",[Py]:"fire-iid",[Ny]:"fire-iid-compat",[Oy]:"fire-fcm",[$y]:"fire-fcm-compat",[Ly]:"fire-perf",[My]:"fire-perf-compat",[Uy]:"fire-rc",[Fy]:"fire-rc-compat",[Vy]:"fire-gcs",[By]:"fire-gcs-compat",[jy]:"fire-fst",[qy]:"fire-fst-compat","fire-js":"fire-js",[Hy]:"fire-js-all"};/**
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
 */const mo=new Map,ul=new Map;function Gy(t,e){try{t.container.addComponent(e)}catch(n){Bs.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ci(t){const e=t.name;if(ul.has(e))return Bs.debug(`There were multiple attempts to register component ${e}.`),!1;ul.set(e,t);for(const n of mo.values())Gy(n,t);return!0}function Xl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Wy={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},gs=new pr("app","Firebase",Wy);/**
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
 */class Qy{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Vs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw gs.create("app-deleted",{appName:this._name})}}/**
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
 */const gr=Ky;function up(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:ll,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw gs.create("bad-app-name",{appName:String(i)});if(n||(n=Hv()),!n)throw gs.create("no-options");const r=mo.get(i);if(r){if(po(n,r.options)&&po(s,r.config))return r;throw gs.create("duplicate-app",{appName:i})}const o=new ny(i);for(const l of ul.values())o.addComponent(l);const a=new Qy(n,s,o);return mo.set(i,a),a}function cp(t=ll){const e=mo.get(t);if(!e&&t===ll)return up();if(!e)throw gs.create("no-app",{appName:t});return e}function _s(t,e,n){var s;let i=(s=zy[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Bs.warn(a.join(" "));return}ci(new Vs(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Yy="firebase-heartbeat-database",Xy=1,Gi="firebase-heartbeat-store";let Ua=null;function hp(){return Ua||(Ua=my(Yy,Xy,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Gi)}}}).catch(t=>{throw gs.create("idb-open",{originalErrorMessage:t.message})})),Ua}async function xy(t){var e;try{return(await hp()).transaction(Gi).objectStore(Gi).get(fp(t))}catch(n){if(n instanceof rs)Bs.warn(n.message);else{const s=gs.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});Bs.warn(s.message)}}}async function Ec(t,e){var n;try{const i=(await hp()).transaction(Gi,"readwrite");return await i.objectStore(Gi).put(e,fp(t)),i.done}catch(s){if(s instanceof rs)Bs.warn(s.message);else{const i=gs.create("idb-set",{originalErrorMessage:(n=s)===null||n===void 0?void 0:n.message});Bs.warn(i.message)}}}function fp(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Jy=1024,Zy=30*24*60*60*1e3;class e0{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new n0(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Tc();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=Zy}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Tc(),{heartbeatsToSend:n,unsentEntries:s}=t0(this._heartbeatsCache.heartbeats),i=fo(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Tc(){return new Date().toISOString().substring(0,10)}function t0(t,e=Jy){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Ic(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ic(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class n0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Mv()?Uv().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await xy(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ec(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ec(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ic(t){return fo(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function s0(t){ci(new Vs("platform-logger",e=>new vy(e),"PRIVATE")),ci(new Vs("heartbeat",e=>new e0(e),"PRIVATE")),_s(al,kc,t),_s(al,kc,"esm2017"),_s("fire-js","")}s0("");var i0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ce,xl=xl||{},Ee=i0||self;function go(){}function Ko(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function _r(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function r0(t){return Object.prototype.hasOwnProperty.call(t,Fa)&&t[Fa]||(t[Fa]=++o0)}var Fa="closure_uid_"+(1e9*Math.random()>>>0),o0=0;function a0(t,e,n){return t.call.apply(t.bind,arguments)}function l0(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function cn(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?cn=a0:cn=l0,cn.apply(null,arguments)}function Hr(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function rn(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function Is(){this.s=this.s,this.o=this.o}var u0=0;Is.prototype.s=!1;Is.prototype.na=function(){!this.s&&(this.s=!0,this.M(),u0!=0)&&r0(this)};Is.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const dp=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Jl(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Cc(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Ko(s)){const i=t.length||0,r=s.length||0;t.length=i+r;for(let o=0;o<r;o++)t[i+o]=s[o]}else t.push(s)}}function hn(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}hn.prototype.h=function(){this.defaultPrevented=!0};var c0=function(){if(!Ee.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Ee.addEventListener("test",go,e),Ee.removeEventListener("test",go,e)}catch{}return t}();function _o(t){return/^[\s\xa0]*$/.test(t)}var Sc=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Va(t,e){return t<e?-1:t>e?1:0}function zo(){var t=Ee.navigator;return t&&(t=t.userAgent)?t:""}function Un(t){return zo().indexOf(t)!=-1}function Zl(t){return Zl[" "](t),t}Zl[" "]=go;function h0(t){var e=p0;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var f0=Un("Opera"),hi=Un("Trident")||Un("MSIE"),pp=Un("Edge"),cl=pp||hi,mp=Un("Gecko")&&!(zo().toLowerCase().indexOf("webkit")!=-1&&!Un("Edge"))&&!(Un("Trident")||Un("MSIE"))&&!Un("Edge"),d0=zo().toLowerCase().indexOf("webkit")!=-1&&!Un("Edge");function gp(){var t=Ee.document;return t?t.documentMode:void 0}var vo;e:{var Ba="",ja=function(){var t=zo();if(mp)return/rv:([^\);]+)(\)|;)/.exec(t);if(pp)return/Edge\/([\d\.]+)/.exec(t);if(hi)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(d0)return/WebKit\/(\S+)/.exec(t);if(f0)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(ja&&(Ba=ja?ja[1]:""),hi){var qa=gp();if(qa!=null&&qa>parseFloat(Ba)){vo=String(qa);break e}}vo=Ba}var p0={};function m0(){return h0(function(){let t=0;const e=Sc(String(vo)).split("."),n=Sc("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;t=Va(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||Va(i[2].length==0,r[2].length==0)||Va(i[2],r[2]),i=i[3],r=r[3]}while(t==0)}return 0<=t})}var hl;if(Ee.document&&hi){var Ac=gp();hl=Ac||parseInt(vo,10)||void 0}else hl=void 0;var g0=hl;function Wi(t,e){if(hn.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(mp){e:{try{Zl(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:_0[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Wi.X.h.call(this)}}rn(Wi,hn);var _0={2:"touch",3:"pen",4:"mouse"};Wi.prototype.h=function(){Wi.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var vr="closure_listenable_"+(1e6*Math.random()|0),v0=0;function y0(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=i,this.key=++v0,this.ba=this.ea=!1}function Go(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function eu(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function _p(t){const e={};for(const n in t)e[n]=t[n];return e}const Dc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function vp(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<Dc.length;r++)n=Dc[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Wo(t){this.src=t,this.g={},this.h=0}Wo.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=dl(t,e,s,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new y0(e,this.src,r,!!s,i),e.ea=n,t.push(e)),e};function fl(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=dp(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(Go(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function dl(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==s)return i}return-1}var tu="closure_lm_"+(1e6*Math.random()|0),Ha={};function yp(t,e,n,s,i){if(s&&s.once)return wp(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)yp(t,e[r],n,s,i);return null}return n=iu(n),t&&t[vr]?t.N(e,n,_r(s)?!!s.capture:!!s,i):bp(t,e,n,!1,s,i)}function bp(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=_r(i)?!!i.capture:!!i,a=su(t);if(a||(t[tu]=a=new Wo(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=b0(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)c0||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(Ep(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function b0(){function t(n){return e.call(t.src,t.listener,n)}const e=w0;return t}function wp(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)wp(t,e[r],n,s,i);return null}return n=iu(n),t&&t[vr]?t.O(e,n,_r(s)?!!s.capture:!!s,i):bp(t,e,n,!0,s,i)}function kp(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)kp(t,e[r],n,s,i);else s=_r(s)?!!s.capture:!!s,n=iu(n),t&&t[vr]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=dl(r,n,s,i),-1<n&&(Go(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=su(t))&&(e=t.g[e.toString()],t=-1,e&&(t=dl(e,n,s,i)),(n=-1<t?e[t]:null)&&nu(n))}function nu(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[vr])fl(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Ep(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=su(e))?(fl(n,t),n.h==0&&(n.src=null,e[tu]=null)):Go(t)}}}function Ep(t){return t in Ha?Ha[t]:Ha[t]="on"+t}function w0(t,e){if(t.ba)t=!0;else{e=new Wi(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&nu(t),t=n.call(s,e)}return t}function su(t){return t=t[tu],t instanceof Wo?t:null}var Ka="__closure_events_fn_"+(1e9*Math.random()>>>0);function iu(t){return typeof t=="function"?t:(t[Ka]||(t[Ka]=function(e){return t.handleEvent(e)}),t[Ka])}function zt(){Is.call(this),this.i=new Wo(this),this.P=this,this.I=null}rn(zt,Is);zt.prototype[vr]=!0;zt.prototype.removeEventListener=function(t,e,n,s){kp(this,t,e,n,s)};function nn(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new hn(e,t);else if(e instanceof hn)e.target=e.target||t;else{var i=e;e=new hn(s,t),vp(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=Kr(o,s,!0,e)&&i}if(o=e.g=t,i=Kr(o,s,!0,e)&&i,i=Kr(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=Kr(o,s,!1,e)&&i}zt.prototype.M=function(){if(zt.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Go(n[s]);delete t.g[e],t.h--}}this.I=null};zt.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};zt.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Kr(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&fl(t.i,o),i=a.call(l,s)!==!1&&i}}return i&&!s.defaultPrevented}var ru=Ee.JSON.stringify;function k0(){var t=Cp;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class E0{constructor(){this.h=this.g=null}add(e,n){const s=Tp.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Tp=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new T0,t=>t.reset());class T0{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function I0(t){Ee.setTimeout(()=>{throw t},0)}function Ip(t,e){pl||C0(),ml||(pl(),ml=!0),Cp.add(t,e)}var pl;function C0(){var t=Ee.Promise.resolve(void 0);pl=function(){t.then(S0)}}var ml=!1,Cp=new E0;function S0(){for(var t;t=k0();){try{t.h.call(t.g)}catch(n){I0(n)}var e=Tp;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}ml=!1}function Qo(t,e){zt.call(this),this.h=t||1,this.g=e||Ee,this.j=cn(this.lb,this),this.l=Date.now()}rn(Qo,zt);ce=Qo.prototype;ce.ca=!1;ce.R=null;ce.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),nn(this,"tick"),this.ca&&(ou(this),this.start()))}};ce.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function ou(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}ce.M=function(){Qo.X.M.call(this),ou(this),delete this.g};function au(t,e,n){if(typeof t=="function")n&&(t=cn(t,n));else if(t&&typeof t.handleEvent=="function")t=cn(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Ee.setTimeout(t,e||0)}function Sp(t){t.g=au(()=>{t.g=null,t.i&&(t.i=!1,Sp(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class A0 extends Is{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Sp(this)}M(){super.M(),this.g&&(Ee.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Qi(t){Is.call(this),this.h=t,this.g={}}rn(Qi,Is);var Rc=[];function Ap(t,e,n,s){Array.isArray(n)||(n&&(Rc[0]=n.toString()),n=Rc);for(var i=0;i<n.length;i++){var r=yp(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function Dp(t){eu(t.g,function(e,n){this.g.hasOwnProperty(n)&&nu(e)},t),t.g={}}Qi.prototype.M=function(){Qi.X.M.call(this),Dp(this)};Qi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Yo(){this.g=!0}Yo.prototype.Aa=function(){this.g=!1};function D0(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var h=u[0];u=u[1];var f=h.split("_");o=2<=f.length&&f[1]=="type"?o+(h+"="+u+"&"):o+(h+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function R0(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function Zs(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+N0(t,n)+(s?" "+s:"")})}function P0(t,e){t.info(function(){return"TIMEOUT: "+e})}Yo.prototype.info=function(){};function N0(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return ru(n)}catch{return e}}var Gs={},Pc=null;function Xo(){return Pc=Pc||new zt}Gs.Pa="serverreachability";function Rp(t){hn.call(this,Gs.Pa,t)}rn(Rp,hn);function Yi(t){const e=Xo();nn(e,new Rp(e))}Gs.STAT_EVENT="statevent";function Pp(t,e){hn.call(this,Gs.STAT_EVENT,t),this.stat=e}rn(Pp,hn);function mn(t){const e=Xo();nn(e,new Pp(e,t))}Gs.Qa="timingevent";function Np(t,e){hn.call(this,Gs.Qa,t),this.size=e}rn(Np,hn);function yr(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Ee.setTimeout(function(){t()},e)}var xo={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Op={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function lu(){}lu.prototype.h=null;function Nc(t){return t.h||(t.h=t.i())}function $p(){}var br={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function uu(){hn.call(this,"d")}rn(uu,hn);function cu(){hn.call(this,"c")}rn(cu,hn);var gl;function Jo(){}rn(Jo,lu);Jo.prototype.g=function(){return new XMLHttpRequest};Jo.prototype.i=function(){return{}};gl=new Jo;function wr(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new Qi(this),this.O=O0,t=cl?125:void 0,this.T=new Qo(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Lp}function Lp(){this.i=null,this.g="",this.h=!1}var O0=45e3,_l={},yo={};ce=wr.prototype;ce.setTimeout=function(t){this.O=t};function vl(t,e,n){t.K=1,t.v=ea(Jn(e)),t.s=n,t.P=!0,Mp(t,null)}function Mp(t,e){t.F=Date.now(),kr(t),t.A=Jn(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),Kp(n.i,"t",s),t.C=0,n=t.l.H,t.h=new Lp,t.g=hm(t.l,n?e:null,!t.s),0<t.N&&(t.L=new A0(cn(t.La,t,t.g),t.N)),Ap(t.S,t.g,"readystatechange",t.ib),e=t.H?_p(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Yi(),D0(t.j,t.u,t.A,t.m,t.U,t.s)}ce.ib=function(t){t=t.target;const e=this.L;e&&Gn(t)==3?e.l():this.La(t)};ce.La=function(t){try{if(t==this.g)e:{const h=Gn(this.g);var e=this.g.Ea();const f=this.g.aa();if(!(3>h)&&(h!=3||cl||this.g&&(this.h.h||this.g.fa()||Mc(this.g)))){this.I||h!=4||e==7||(e==8||0>=f?Yi(3):Yi(2)),Zo(this);var n=this.g.aa();this.Y=n;t:if(Up(this)){var s=Mc(this.g);t="";var i=s.length,r=Gn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Rs(this),Vi(this);var o="";break t}this.h.i=new Ee.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,R0(this.j,this.u,this.A,this.m,this.U,h,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_o(a)){var u=a;break t}}u=null}if(n=u)Zs(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,yl(this,n);else{this.i=!1,this.o=3,mn(12),Rs(this),Vi(this);break e}}this.P?(Fp(this,h,o),cl&&this.i&&h==3&&(Ap(this.S,this.T,"tick",this.hb),this.T.start())):(Zs(this.j,this.m,o,null),yl(this,o)),h==4&&Rs(this),this.i&&!this.I&&(h==4?am(this.l,this):(this.i=!1,kr(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,mn(12)):(this.o=0,mn(13)),Rs(this),Vi(this)}}}catch{}finally{}};function Up(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Fp(t,e,n){let s=!0,i;for(;!t.I&&t.C<n.length;)if(i=$0(t,n),i==yo){e==4&&(t.o=4,mn(14),s=!1),Zs(t.j,t.m,null,"[Incomplete Response]");break}else if(i==_l){t.o=4,mn(15),Zs(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else Zs(t.j,t.m,i,null),yl(t,i);Up(t)&&i!=yo&&i!=_l&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,mn(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),_u(e),e.K=!0,mn(11))):(Zs(t.j,t.m,n,"[Invalid Chunked Response]"),Rs(t),Vi(t))}ce.hb=function(){if(this.g){var t=Gn(this.g),e=this.g.fa();this.C<e.length&&(Zo(this),Fp(this,t,e),this.i&&t!=4&&kr(this))}};function $0(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?yo:(n=Number(e.substring(n,s)),isNaN(n)?_l:(s+=1,s+n>e.length?yo:(e=e.substr(s,n),t.C=s+n,e)))}ce.cancel=function(){this.I=!0,Rs(this)};function kr(t){t.V=Date.now()+t.O,Vp(t,t.O)}function Vp(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=yr(cn(t.gb,t),e)}function Zo(t){t.B&&(Ee.clearTimeout(t.B),t.B=null)}ce.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(P0(this.j,this.A),this.K!=2&&(Yi(),mn(17)),Rs(this),this.o=2,Vi(this)):Vp(this,this.V-t)};function Vi(t){t.l.G==0||t.I||am(t.l,t)}function Rs(t){Zo(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,ou(t.T),Dp(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function yl(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||bl(n.h,t))){if(!t.J&&bl(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)ko(n),sa(n);else break e;gu(n),mn(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=yr(cn(n.cb,n),6e3));if(1>=Wp(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Ps(n,11)}else if((t.J||n.g==t)&&ko(n),!_o(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const h=u[3];h!=null&&(n.ma=h,n.j.info("VER="+n.ma));const f=u[4];f!=null&&(n.Ca=f,n.j.info("SVER="+n.Ca));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const g=t.g;if(g){const _=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_){var r=s.h;r.g||_.indexOf("spdy")==-1&&_.indexOf("quic")==-1&&_.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(hu(r,r.h),r.h=null))}if(s.D){const v=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(s.za=v,ft(s.F,s.D,v))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=cm(s,s.H?s.ka:null,s.V),o.J){Qp(s.h,o);var a=o,l=s.J;l&&a.setTimeout(l),a.B&&(Zo(a),kr(a)),s.g=o}else rm(s);0<n.i.length&&ia(n)}else u[0]!="stop"&&u[0]!="close"||Ps(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Ps(n,7):mu(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}Yi(4)}catch{}}function L0(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Ko(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function M0(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Ko(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function Bp(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Ko(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=M0(t),s=L0(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}var jp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function U0(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Os(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Os){this.h=e!==void 0?e:t.h,bo(this,t.j),this.s=t.s,this.g=t.g,wo(this,t.m),this.l=t.l,e=t.i;var n=new Xi;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Oc(this,n),this.o=t.o}else t&&(n=String(t).match(jp))?(this.h=!!e,bo(this,n[1]||"",!0),this.s=$i(n[2]||""),this.g=$i(n[3]||"",!0),wo(this,n[4]),this.l=$i(n[5]||"",!0),Oc(this,n[6]||"",!0),this.o=$i(n[7]||"")):(this.h=!!e,this.i=new Xi(null,this.h))}Os.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Li(e,$c,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Li(e,$c,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Li(n,n.charAt(0)=="/"?B0:V0,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Li(n,q0)),t.join("")};function Jn(t){return new Os(t)}function bo(t,e,n){t.j=n?$i(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function wo(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Oc(t,e,n){e instanceof Xi?(t.i=e,H0(t.i,t.h)):(n||(e=Li(e,j0)),t.i=new Xi(e,t.h))}function ft(t,e,n){t.i.set(e,n)}function ea(t){return ft(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function $i(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Li(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,F0),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function F0(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var $c=/[#\/\?@]/g,V0=/[#\?:]/g,B0=/[#\?]/g,j0=/[#\?@]/g,q0=/#/g;function Xi(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Cs(t){t.g||(t.g=new Map,t.h=0,t.i&&U0(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}ce=Xi.prototype;ce.add=function(t,e){Cs(this),this.i=null,t=yi(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function qp(t,e){Cs(t),e=yi(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Hp(t,e){return Cs(t),e=yi(t,e),t.g.has(e)}ce.forEach=function(t,e){Cs(this),this.g.forEach(function(n,s){n.forEach(function(i){t.call(e,i,s,this)},this)},this)};ce.oa=function(){Cs(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let r=0;r<i.length;r++)n.push(e[s])}return n};ce.W=function(t){Cs(this);let e=[];if(typeof t=="string")Hp(this,t)&&(e=e.concat(this.g.get(yi(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};ce.set=function(t,e){return Cs(this),this.i=null,t=yi(this,t),Hp(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};ce.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function Kp(t,e,n){qp(t,e),0<n.length&&(t.i=null,t.g.set(yi(t,e),Jl(n)),t.h+=n.length)}ce.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};function yi(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function H0(t,e){e&&!t.j&&(Cs(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(qp(this,s),Kp(this,i,n))},t)),t.j=e}var K0=class{constructor(t,e){this.h=t,this.g=e}};function zp(t){this.l=t||z0,Ee.PerformanceNavigationTiming?(t=Ee.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Ee.g&&Ee.g.Ga&&Ee.g.Ga()&&Ee.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var z0=10;function Gp(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Wp(t){return t.h?1:t.g?t.g.size:0}function bl(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function hu(t,e){t.g?t.g.add(e):t.h=e}function Qp(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}zp.prototype.cancel=function(){if(this.i=Yp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Yp(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Jl(t.i)}function fu(){}fu.prototype.stringify=function(t){return Ee.JSON.stringify(t,void 0)};fu.prototype.parse=function(t){return Ee.JSON.parse(t,void 0)};function G0(){this.g=new fu}function W0(t,e,n){const s=n||"";try{Bp(t,function(i,r){let o=i;_r(i)&&(o=ru(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function Q0(t,e){const n=new Yo;if(Ee.Image){const s=new Image;s.onload=Hr(zr,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Hr(zr,n,s,"TestLoadImage: error",!1,e),s.onabort=Hr(zr,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Hr(zr,n,s,"TestLoadImage: timeout",!1,e),Ee.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function zr(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function Er(t){this.l=t.ac||null,this.j=t.jb||!1}rn(Er,lu);Er.prototype.g=function(){return new ta(this.l,this.j)};Er.prototype.i=function(t){return function(){return t}}({});function ta(t,e){zt.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=du,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}rn(ta,zt);var du=0;ce=ta.prototype;ce.open=function(t,e){if(this.readyState!=du)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,xi(this)};ce.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||Ee).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};ce.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Tr(this)),this.readyState=du};ce.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,xi(this)),this.g&&(this.readyState=3,xi(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof Ee.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Xp(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function Xp(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}ce.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Tr(this):xi(this),this.readyState==3&&Xp(this)}};ce.Va=function(t){this.g&&(this.response=this.responseText=t,Tr(this))};ce.Ua=function(t){this.g&&(this.response=t,Tr(this))};ce.ga=function(){this.g&&Tr(this)};function Tr(t){t.readyState=4,t.l=null,t.j=null,t.A=null,xi(t)}ce.setRequestHeader=function(t,e){this.v.append(t,e)};ce.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};ce.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function xi(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(ta.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Y0=Ee.JSON.parse;function kt(t){zt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=xp,this.K=this.L=!1}rn(kt,zt);var xp="",X0=/^https?$/i,x0=["POST","PUT"];ce=kt.prototype;ce.Ka=function(t){this.L=t};ce.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():gl.g(),this.C=this.u?Nc(this.u):Nc(gl),this.g.onreadystatechange=cn(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){Lc(this,r);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=Ee.FormData&&t instanceof Ee.FormData,!(0<=dp(x0,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{em(this),0<this.B&&((this.K=J0(this.g))?(this.g.timeout=this.B,this.g.ontimeout=cn(this.qa,this)):this.A=au(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){Lc(this,r)}};function J0(t){return hi&&m0()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}ce.qa=function(){typeof xl<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,nn(this,"timeout"),this.abort(8))};function Lc(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Jp(t),na(t)}function Jp(t){t.D||(t.D=!0,nn(t,"complete"),nn(t,"error"))}ce.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,nn(this,"complete"),nn(this,"abort"),na(this))};ce.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),na(this,!0)),kt.X.M.call(this)};ce.Ha=function(){this.s||(this.F||this.v||this.l?Zp(this):this.fb())};ce.fb=function(){Zp(this)};function Zp(t){if(t.h&&typeof xl<"u"&&(!t.C[1]||Gn(t)!=4||t.aa()!=2)){if(t.v&&Gn(t)==4)au(t.Ha,0,t);else if(nn(t,"readystatechange"),Gn(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var i=String(t.H).match(jp)[1]||null;if(!i&&Ee.self&&Ee.self.location){var r=Ee.self.location.protocol;i=r.substr(0,r.length-1)}s=!X0.test(i?i.toLowerCase():"")}n=s}if(n)nn(t,"complete"),nn(t,"success");else{t.m=6;try{var o=2<Gn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",Jp(t)}}finally{na(t)}}}}function na(t,e){if(t.g){em(t);const n=t.g,s=t.C[0]?go:null;t.g=null,t.C=null,e||nn(t,"ready");try{n.onreadystatechange=s}catch{}}}function em(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(Ee.clearTimeout(t.A),t.A=null)}function Gn(t){return t.g?t.g.readyState:0}ce.aa=function(){try{return 2<Gn(this)?this.g.status:-1}catch{return-1}};ce.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};ce.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Y0(e)}};function Mc(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case xp:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}ce.Ea=function(){return this.m};ce.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function tm(t){let e="";return eu(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function pu(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=tm(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ft(t,e,n))}function Di(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function nm(t){this.Ca=0,this.i=[],this.j=new Yo,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Di("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Di("baseRetryDelayMs",5e3,t),this.bb=Di("retryDelaySeedMs",1e4,t),this.$a=Di("forwardChannelMaxRetries",2,t),this.ta=Di("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new zp(t&&t.concurrentRequestLimit),this.Fa=new G0,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}ce=nm.prototype;ce.ma=8;ce.G=1;function mu(t){if(sm(t),t.G==3){var e=t.U++,n=Jn(t.F);ft(n,"SID",t.I),ft(n,"RID",e),ft(n,"TYPE","terminate"),Ir(t,n),e=new wr(t,t.j,e,void 0),e.K=2,e.v=ea(Jn(n)),n=!1,Ee.navigator&&Ee.navigator.sendBeacon&&(n=Ee.navigator.sendBeacon(e.v.toString(),"")),!n&&Ee.Image&&(new Image().src=e.v,n=!0),n||(e.g=hm(e.l,null),e.g.da(e.v)),e.F=Date.now(),kr(e)}um(t)}function sa(t){t.g&&(_u(t),t.g.cancel(),t.g=null)}function sm(t){sa(t),t.u&&(Ee.clearTimeout(t.u),t.u=null),ko(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&Ee.clearTimeout(t.m),t.m=null)}function ia(t){Gp(t.h)||t.m||(t.m=!0,Ip(t.Ja,t),t.C=0)}function Z0(t,e){return Wp(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=yr(cn(t.Ja,t,e),lm(t,t.C)),t.C++,!0)}ce.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new wr(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=_p(r),vp(r,this.S)):r=this.S),this.o!==null||this.N||(i.H=r,r=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=im(this,i,e),n=Jn(this.F),ft(n,"RID",t),ft(n,"CVER",22),this.D&&ft(n,"X-HTTP-Session-Id",this.D),Ir(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(tm(r)))+"&"+e:this.o&&pu(n,this.o,r)),hu(this.h,i),this.Ya&&ft(n,"TYPE","init"),this.O?(ft(n,"$req",e),ft(n,"SID","null"),i.Z=!0,vl(i,n,null)):vl(i,n,e),this.G=2}}else this.G==3&&(t?Uc(this,t):this.i.length==0||Gp(this.h)||Uc(this))};function Uc(t,e){var n;e?n=e.m:n=t.U++;const s=Jn(t.F);ft(s,"SID",t.I),ft(s,"RID",n),ft(s,"AID",t.T),Ir(t,s),t.o&&t.s&&pu(s,t.o,t.s),n=new wr(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=im(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),hu(t.h,n),vl(n,s,e)}function Ir(t,e){t.ia&&eu(t.ia,function(n,s){ft(e,s,n)}),t.l&&Bp({},function(n,s){ft(e,s,n)})}function im(t,e,n){n=Math.min(t.i.length,n);var s=t.l?cn(t.l.Ra,t.l,t):null;e:{var i=t.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const h=i[l].g;if(u-=r,0>u)r=Math.max(0,i[l].h-100),a=!1;else try{W0(h,o,"req"+u+"_")}catch{s&&s(h)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function rm(t){t.g||t.u||(t.Z=1,Ip(t.Ia,t),t.A=0)}function gu(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=yr(cn(t.Ia,t),lm(t,t.A)),t.A++,!0)}ce.Ia=function(){if(this.u=null,om(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=yr(cn(this.eb,this),t)}};ce.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,mn(10),sa(this),om(this))};function _u(t){t.B!=null&&(Ee.clearTimeout(t.B),t.B=null)}function om(t){t.g=new wr(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Jn(t.sa);ft(e,"RID","rpc"),ft(e,"SID",t.I),ft(e,"CI",t.L?"0":"1"),ft(e,"AID",t.T),ft(e,"TYPE","xmlhttp"),Ir(t,e),t.o&&t.s&&pu(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=ea(Jn(e)),n.s=null,n.P=!0,Mp(n,t)}ce.cb=function(){this.v!=null&&(this.v=null,sa(this),gu(this),mn(19))};function ko(t){t.v!=null&&(Ee.clearTimeout(t.v),t.v=null)}function am(t,e){var n=null;if(t.g==e){ko(t),_u(t),t.g=null;var s=2}else if(bl(t.h,e))n=e.D,Qp(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;s=Xo(),nn(s,new Np(s,n)),ia(t)}else rm(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(s==1&&Z0(t,e)||s==2&&gu(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Ps(t,5);break;case 4:Ps(t,10);break;case 3:Ps(t,6);break;default:Ps(t,2)}}}function lm(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Ps(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=cn(t.kb,t);n||(n=new Os("//www.google.com/images/cleardot.gif"),Ee.location&&Ee.location.protocol=="http"||bo(n,"https"),ea(n)),Q0(n.toString(),s)}else mn(2);t.G=0,t.l&&t.l.va(e),um(t),sm(t)}ce.kb=function(t){t?(this.j.info("Successfully pinged google.com"),mn(2)):(this.j.info("Failed to ping google.com"),mn(1))};function um(t){if(t.G=0,t.la=[],t.l){const e=Yp(t.h);(e.length!=0||t.i.length!=0)&&(Cc(t.la,e),Cc(t.la,t.i),t.h.i.length=0,Jl(t.i),t.i.length=0),t.l.ua()}}function cm(t,e,n){var s=n instanceof Os?Jn(n):new Os(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),wo(s,s.m);else{var i=Ee.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new Os(null,void 0);s&&bo(r,s),e&&(r.g=e),i&&wo(r,i),n&&(r.l=n),s=r}return n=t.D,e=t.za,n&&e&&ft(s,n,e),ft(s,"VER",t.ma),Ir(t,s),s}function hm(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new kt(new Er({jb:!0})):new kt(t.ra),e.Ka(t.H),e}function fm(){}ce=fm.prototype;ce.xa=function(){};ce.wa=function(){};ce.va=function(){};ce.ua=function(){};ce.Ra=function(){};function Eo(){if(hi&&!(10<=Number(g0)))throw Error("Environmental error: no available transport.")}Eo.prototype.g=function(t,e){return new Sn(t,e)};function Sn(t,e){zt.call(this),this.g=new nm(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!_o(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!_o(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new bi(this)}rn(Sn,zt);Sn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;mn(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=cm(t,null,t.V),ia(t)};Sn.prototype.close=function(){mu(this.g)};Sn.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=ru(t),t=n);e.i.push(new K0(e.ab++,t)),e.G==3&&ia(e)};Sn.prototype.M=function(){this.g.l=null,delete this.j,mu(this.g),delete this.g,Sn.X.M.call(this)};function dm(t){uu.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}rn(dm,uu);function pm(){cu.call(this),this.status=1}rn(pm,cu);function bi(t){this.g=t}rn(bi,fm);bi.prototype.xa=function(){nn(this.g,"a")};bi.prototype.wa=function(t){nn(this.g,new dm(t))};bi.prototype.va=function(t){nn(this.g,new pm)};bi.prototype.ua=function(){nn(this.g,"b")};Eo.prototype.createWebChannel=Eo.prototype.g;Sn.prototype.send=Sn.prototype.u;Sn.prototype.open=Sn.prototype.m;Sn.prototype.close=Sn.prototype.close;xo.NO_ERROR=0;xo.TIMEOUT=8;xo.HTTP_ERROR=6;Op.COMPLETE="complete";$p.EventType=br;br.OPEN="a";br.CLOSE="b";br.ERROR="c";br.MESSAGE="d";zt.prototype.listen=zt.prototype.N;kt.prototype.listenOnce=kt.prototype.O;kt.prototype.getLastError=kt.prototype.Oa;kt.prototype.getLastErrorCode=kt.prototype.Ea;kt.prototype.getStatus=kt.prototype.aa;kt.prototype.getResponseJson=kt.prototype.Sa;kt.prototype.getResponseText=kt.prototype.fa;kt.prototype.send=kt.prototype.da;kt.prototype.setWithCredentials=kt.prototype.Ka;var e1=function(){return new Eo},t1=function(){return Xo()},za=xo,n1=Op,s1=Gs,Fc={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},i1=Er,Gr=$p,r1=kt;const Vc="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const js=new Ql("@firebase/firestore");function Bc(){return js.logLevel}function pe(t,...e){if(js.logLevel<=je.DEBUG){const n=e.map(vu);js.debug(`Firestore (${wi}): ${t}`,...n)}}function Zn(t,...e){if(js.logLevel<=je.ERROR){const n=e.map(vu);js.error(`Firestore (${wi}): ${t}`,...n)}}function wl(t,...e){if(js.logLevel<=je.WARN){const n=e.map(vu);js.warn(`Firestore (${wi}): ${t}`,...n)}}function vu(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function Se(t="Unexpected state"){const e=`FIRESTORE (${wi}) INTERNAL ASSERTION FAILED: `+t;throw Zn(e),new Error(e)}function rt(t,e){t||Se()}function Ae(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ye extends rs{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class mm{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class o1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ln.UNAUTHENTICATED))}shutdown(){}}class a1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class l1{constructor(e){this.t=e,this.currentUser=ln.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=l=>this.i!==s?(s=this.i,n(l)):Promise.resolve();let r=new vs;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new vs,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{pe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(pe("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new vs)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(pe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(rt(typeof s.accessToken=="string"),new mm(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return rt(e===null||typeof e=="string"),new ln(e)}}class u1{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i,this.type="FirstParty",this.user=ln.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(rt(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class c1{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i}getToken(){return Promise.resolve(new u1(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(ln.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class h1{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class f1{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=r=>{r.error!=null&&pe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.A;return this.A=r.token,pe("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{pe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.T.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.T.getImmediate({optional:!0});r?i(r):pe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(rt(typeof n.token=="string"),this.A=n.token,new h1(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d1(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gm{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=d1(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function Ke(t,e){return t<e?-1:t>e?1:0}function fi(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ye(X.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ye(X.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new ye(X.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ye(X.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Lt.fromMillis(Date.now())}static fromDate(e){return Lt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Lt(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ke(this.nanoseconds,e.nanoseconds):Ke(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Ji{constructor(e,n,s){n===void 0?n=0:n>e.length&&Se(),s===void 0?s=e.length-n:s>e.length-n&&Se(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Ji.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ji?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class dt extends Ji{construct(e,n,s){return new dt(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new ye(X.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new dt(n)}static emptyPath(){return new dt([])}}const p1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class un extends Ji{construct(e,n,s){return new un(e,n,s)}static isValidIdentifier(e){return p1.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),un.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new un(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new ye(X.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new ye(X.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new ye(X.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new ye(X.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new un(n)}static emptyPath(){return new un([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e){this.path=e}static fromPath(e){return new _e(dt.fromString(e))}static fromName(e){return new _e(dt.fromString(e).popFirst(5))}static empty(){return new _e(dt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&dt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return dt.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new _e(new dt(e.slice()))}}function m1(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=Re.fromTimestamp(s===1e9?new Lt(n+1,0):new Lt(n,s));return new ks(i,_e.empty(),e)}function g1(t){return new ks(t.readTime,t.key,-1)}class ks{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new ks(Re.min(),_e.empty(),-1)}static max(){return new ks(Re.max(),_e.empty(),-1)}}function _1(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=_e.comparator(t.documentKey,e.documentKey),n!==0?n:Ke(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class y1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cr(t){if(t.code!==X.FAILED_PRECONDITION||t.message!==v1)throw t;pe("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Se(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new x((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof x?n:x.resolve(n)}catch(n){return x.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):x.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):x.reject(n)}static resolve(e){return new x((n,s)=>{n(e)})}static reject(e){return new x((n,s)=>{s(e)})}static waitFor(e){return new x((n,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},l=>s(l))}),o=!0,r===i&&n()})}static or(e){let n=x.resolve(!1);for(const s of e)n=n.next(i=>i?x.resolve(i):s());return n}static forEach(e,n){const s=[];return e.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(e,n){return new x((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let l=0;l<r;l++){const u=l;n(e[u]).next(h=>{o[u]=h,++a,a===r&&s(o)},h=>i(h))}})}static doWhile(e,n){return new x((s,i)=>{const r=()=>{e()===!0?n().next(()=>{r()},i):s()};r()})}}function Sr(t){return t.name==="IndexedDbTransactionError"}/**
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
 */function jc(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ws(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function _m(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class pn{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new pn(n)}static fromUint8Array(e){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(e);return new pn(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ke(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}pn.EMPTY_BYTE_STRING=new pn("");const b1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Es(t){if(rt(!!t),typeof t=="string"){let e=0;const n=b1.exec(t);if(rt(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Dt(t.seconds),nanos:Dt(t.nanos)}}function Dt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function di(t){return typeof t=="string"?pn.fromBase64String(t):pn.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vm(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function ym(t){const e=t.mapValue.fields.__previous_value__;return vm(e)?ym(e):e}function Zi(t){const e=Es(t.mapValue.fields.__local_write_time__.timestampValue);return new Lt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w1{constructor(e,n,s,i,r,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class er{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new er("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof er&&e.projectId===this.projectId&&e.database===this.database}}function ra(t){return t==null}function To(t){return t===0&&1/t==-1/0}function k1(t){return typeof t=="number"&&Number.isInteger(t)&&!To(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function qs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?vm(t)?4:E1(t)?9007199254740991:10:Se()}function Hn(t,e){if(t===e)return!0;const n=qs(t);if(n!==qs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Zi(t).isEqual(Zi(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=Es(s.timestampValue),o=Es(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return di(s.bytesValue).isEqual(di(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Dt(s.geoPointValue.latitude)===Dt(i.geoPointValue.latitude)&&Dt(s.geoPointValue.longitude)===Dt(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Dt(s.integerValue)===Dt(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=Dt(s.doubleValue),o=Dt(i.doubleValue);return r===o?To(r)===To(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return fi(t.arrayValue.values||[],e.arrayValue.values||[],Hn);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(jc(r)!==jc(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!Hn(r[a],o[a])))return!1;return!0}(t,e);default:return Se()}}function tr(t,e){return(t.values||[]).find(n=>Hn(n,e))!==void 0}function pi(t,e){if(t===e)return 0;const n=qs(t),s=qs(e);if(n!==s)return Ke(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ke(t.booleanValue,e.booleanValue);case 2:return function(i,r){const o=Dt(i.integerValue||i.doubleValue),a=Dt(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Hc(t.timestampValue,e.timestampValue);case 4:return Hc(Zi(t),Zi(e));case 5:return Ke(t.stringValue,e.stringValue);case 6:return function(i,r){const o=di(i),a=di(r);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=Ke(o[l],a[l]);if(u!==0)return u}return Ke(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,r){const o=Ke(Dt(i.latitude),Dt(r.latitude));return o!==0?o:Ke(Dt(i.longitude),Dt(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=pi(o[l],a[l]);if(u)return u}return Ke(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,r){if(i===Qr.mapValue&&r===Qr.mapValue)return 0;if(i===Qr.mapValue)return 1;if(r===Qr.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=r.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let h=0;h<a.length&&h<u.length;++h){const f=Ke(a[h],u[h]);if(f!==0)return f;const d=pi(o[a[h]],l[u[h]]);if(d!==0)return d}return Ke(a.length,u.length)}(t.mapValue,e.mapValue);default:throw Se()}}function Hc(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ke(t,e);const n=Es(t),s=Es(e),i=Ke(n.seconds,s.seconds);return i!==0?i:Ke(n.nanos,s.nanos)}function si(t){return kl(t)}function kl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const i=Es(s);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?di(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,_e.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=kl(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${kl(s.fields[a])}`;return r+"}"}(t.mapValue):Se();var e,n}function El(t){return!!t&&"integerValue"in t}function bu(t){return!!t&&"arrayValue"in t}function Kc(t){return!!t&&"nullValue"in t}function zc(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Zr(t){return!!t&&"mapValue"in t}function Bi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ws(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Bi(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Bi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function E1(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e){this.value=e}static empty(){return new wn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Zr(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Bi(n)}setAll(e){let n=un.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=Bi(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());Zr(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Hn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];Zr(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){Ws(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new wn(Bi(this.value))}}function bm(t){const e=[];return Ws(t.fields,(n,s)=>{const i=new un([n]);if(Zr(s)){const r=bm(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new Nn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e,n,s,i,r,o){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.data=r,this.documentState=o}static newInvalidDocument(e){return new en(e,0,Re.min(),Re.min(),wn.empty(),0)}static newFoundDocument(e,n,s){return new en(e,1,n,Re.min(),s,0)}static newNoDocument(e,n){return new en(e,2,n,Re.min(),wn.empty(),0)}static newUnknownDocument(e,n){return new en(e,3,n,Re.min(),wn.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=wn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=wn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Re.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof en&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new en(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class T1{constructor(e,n=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.ht=null}}function Gc(t,e=null,n=[],s=[],i=null,r=null,o=null){return new T1(t,e,n,s,i,r,o)}function wu(t){const e=Ae(t);if(e.ht===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>{return(i=s).field.canonicalString()+i.op.toString()+si(i.value);var i}).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),ra(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>si(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>si(s)).join(",")),e.ht=n}return e.ht}function I1(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${si(s.value)}`;var s}).join(", ")}]`),ra(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>si(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>si(n)).join(",")),`Target(${e})`}function ku(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!O1(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],s=e.filters[i],n.op!==s.op||!n.field.isEqual(s.field)||!Hn(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Qc(t.startAt,e.startAt)&&Qc(t.endAt,e.endAt)}function Tl(t){return _e.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class kn extends class{}{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.lt(e,n,s):new C1(e,n,s):n==="array-contains"?new D1(e,s):n==="in"?new R1(e,s):n==="not-in"?new P1(e,s):n==="array-contains-any"?new N1(e,s):new kn(e,n,s)}static lt(e,n,s){return n==="in"?new S1(e,s):new A1(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.ft(pi(n,this.value)):n!==null&&qs(this.value)===qs(n)&&this.ft(pi(n,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Se()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class C1 extends kn{constructor(e,n,s){super(e,n,s),this.key=_e.fromName(s.referenceValue)}matches(e){const n=_e.comparator(e.key,this.key);return this.ft(n)}}class S1 extends kn{constructor(e,n){super(e,"in",n),this.keys=wm("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class A1 extends kn{constructor(e,n){super(e,"not-in",n),this.keys=wm("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function wm(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>_e.fromName(s.referenceValue))}class D1 extends kn{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return bu(n)&&tr(n.arrayValue,this.value)}}class R1 extends kn{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&tr(this.value.arrayValue,n)}}class P1 extends kn{constructor(e,n){super(e,"not-in",n)}matches(e){if(tr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!tr(this.value.arrayValue,n)}}class N1 extends kn{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!bu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>tr(this.value.arrayValue,s))}}class Io{constructor(e,n){this.position=e,this.inclusive=n}}class ji{constructor(e,n="asc"){this.field=e,this.dir=n}}function O1(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Wc(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=_e.comparator(_e.fromName(o.referenceValue),n.key):s=pi(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function Qc(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Hn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(e,n=null,s=[],i=[],r=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this._t=null,this.wt=null,this.startAt,this.endAt}}function $1(t,e,n,s,i,r,o,a){return new oa(t,e,n,s,i,r,o,a)}function km(t){return new oa(t)}function Yc(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function L1(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function M1(t){for(const e of t.filters)if(e.dt())return e.field;return null}function U1(t){return t.collectionGroup!==null}function nr(t){const e=Ae(t);if(e._t===null){e._t=[];const n=M1(e),s=L1(e);if(n!==null&&s===null)n.isKeyField()||e._t.push(new ji(n)),e._t.push(new ji(un.keyField(),"asc"));else{let i=!1;for(const r of e.explicitOrderBy)e._t.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new ji(un.keyField(),r))}}}return e._t}function es(t){const e=Ae(t);if(!e.wt)if(e.limitType==="F")e.wt=Gc(e.path,e.collectionGroup,nr(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of nr(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new ji(r.field,o))}const s=e.endAt?new Io(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Io(e.startAt.position,e.startAt.inclusive):null;e.wt=Gc(e.path,e.collectionGroup,n,e.filters,e.limit,s,i)}return e.wt}function Il(t,e,n){return new oa(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function aa(t,e){return ku(es(t),es(e))&&t.limitType===e.limitType}function Em(t){return`${wu(es(t))}|lt:${t.limitType}`}function Cl(t){return`Query(target=${I1(es(t))}; limitType=${t.limitType})`}function Eu(t,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):_e.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,s){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=Wc(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,nr(n),s)||n.endAt&&!function(i,r,o){const a=Wc(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,nr(n),s))}(t,e)}function F1(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Tm(t){return(e,n)=>{let s=!1;for(const i of nr(t)){const r=V1(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function V1(t,e,n){const s=t.field.isKeyField()?_e.comparator(e.key,n.key):function(i,r,o){const a=r.data.field(i),l=o.data.field(i);return a!==null&&l!==null?pi(a,l):Se()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return Se()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Im(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:To(e)?"-0":e}}function Cm(t){return{integerValue:""+t}}function B1(t,e){return k1(e)?Cm(e):Im(t,e)}/**
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
 */class la{constructor(){this._=void 0}}function j1(t,e,n){return t instanceof Co?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,e):t instanceof sr?Am(t,e):t instanceof ir?Dm(t,e):function(s,i){const r=Sm(s,i),o=Xc(r)+Xc(s.yt);return El(r)&&El(s.yt)?Cm(o):Im(s.It,o)}(t,e)}function q1(t,e,n){return t instanceof sr?Am(t,e):t instanceof ir?Dm(t,e):n}function Sm(t,e){return t instanceof So?El(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Co extends la{}class sr extends la{constructor(e){super(),this.elements=e}}function Am(t,e){const n=Rm(e);for(const s of t.elements)n.some(i=>Hn(i,s))||n.push(s);return{arrayValue:{values:n}}}class ir extends la{constructor(e){super(),this.elements=e}}function Dm(t,e){let n=Rm(e);for(const s of t.elements)n=n.filter(i=>!Hn(i,s));return{arrayValue:{values:n}}}class So extends la{constructor(e,n){super(),this.It=e,this.yt=n}}function Xc(t){return Dt(t.integerValue||t.doubleValue)}function Rm(t){return bu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function H1(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof sr&&s instanceof sr||n instanceof ir&&s instanceof ir?fi(n.elements,s.elements,Hn):n instanceof So&&s instanceof So?Hn(n.yt,s.yt):n instanceof Co&&s instanceof Co}(t.transform,e.transform)}class K1{constructor(e,n){this.version=e,this.transformResults=n}}class Ln{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ln}static exists(e){return new Ln(void 0,e)}static updateTime(e){return new Ln(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function eo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ua{}function Pm(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Tu(t.key,Ln.none()):new Ar(t.key,t.data,Ln.none());{const n=t.data,s=wn.empty();let i=new Mt(un.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new Ss(t.key,s,new Nn(i.toArray()),Ln.none())}}function z1(t,e,n){t instanceof Ar?function(s,i,r){const o=s.value.clone(),a=Jc(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Ss?function(s,i,r){if(!eo(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=Jc(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(Nm(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function qi(t,e,n,s){return t instanceof Ar?function(i,r,o,a){if(!eo(i.precondition,r))return o;const l=i.value.clone(),u=Zc(i.fieldTransforms,a,r);return l.setAll(u),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),null}(t,e,n,s):t instanceof Ss?function(i,r,o,a){if(!eo(i.precondition,r))return o;const l=Zc(i.fieldTransforms,a,r),u=r.data;return u.setAll(Nm(i)),u.setAll(l),r.convertToFoundDocument(r.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,s):function(i,r,o){return eo(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(t,e,n)}function G1(t,e){let n=null;for(const s of t.fieldTransforms){const i=e.data.field(s.field),r=Sm(s.transform,i||null);r!=null&&(n===null&&(n=wn.empty()),n.set(s.field,r))}return n||null}function xc(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&fi(n,s,(i,r)=>H1(i,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ar extends ua{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ss extends ua{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Nm(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Jc(t,e,n){const s=new Map;rt(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,q1(o,a,n[i]))}return s}function Zc(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,j1(r,o,e))}return s}class Tu extends ua{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class W1 extends ua{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q1{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var At,Ue;function Y1(t){switch(t){default:return Se();case X.CANCELLED:case X.UNKNOWN:case X.DEADLINE_EXCEEDED:case X.RESOURCE_EXHAUSTED:case X.INTERNAL:case X.UNAVAILABLE:case X.UNAUTHENTICATED:return!1;case X.INVALID_ARGUMENT:case X.NOT_FOUND:case X.ALREADY_EXISTS:case X.PERMISSION_DENIED:case X.FAILED_PRECONDITION:case X.ABORTED:case X.OUT_OF_RANGE:case X.UNIMPLEMENTED:case X.DATA_LOSS:return!0}}function Om(t){if(t===void 0)return Zn("GRPC error has no .code"),X.UNKNOWN;switch(t){case At.OK:return X.OK;case At.CANCELLED:return X.CANCELLED;case At.UNKNOWN:return X.UNKNOWN;case At.DEADLINE_EXCEEDED:return X.DEADLINE_EXCEEDED;case At.RESOURCE_EXHAUSTED:return X.RESOURCE_EXHAUSTED;case At.INTERNAL:return X.INTERNAL;case At.UNAVAILABLE:return X.UNAVAILABLE;case At.UNAUTHENTICATED:return X.UNAUTHENTICATED;case At.INVALID_ARGUMENT:return X.INVALID_ARGUMENT;case At.NOT_FOUND:return X.NOT_FOUND;case At.ALREADY_EXISTS:return X.ALREADY_EXISTS;case At.PERMISSION_DENIED:return X.PERMISSION_DENIED;case At.FAILED_PRECONDITION:return X.FAILED_PRECONDITION;case At.ABORTED:return X.ABORTED;case At.OUT_OF_RANGE:return X.OUT_OF_RANGE;case At.UNIMPLEMENTED:return X.UNIMPLEMENTED;case At.DATA_LOSS:return X.DATA_LOSS;default:return Se()}}(Ue=At||(At={}))[Ue.OK=0]="OK",Ue[Ue.CANCELLED=1]="CANCELLED",Ue[Ue.UNKNOWN=2]="UNKNOWN",Ue[Ue.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ue[Ue.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ue[Ue.NOT_FOUND=5]="NOT_FOUND",Ue[Ue.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ue[Ue.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ue[Ue.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ue[Ue.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ue[Ue.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ue[Ue.ABORTED=10]="ABORTED",Ue[Ue.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ue[Ue.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ue[Ue.INTERNAL=13]="INTERNAL",Ue[Ue.UNAVAILABLE=14]="UNAVAILABLE",Ue[Ue.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ws(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return _m(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X1=new Ut(_e.comparator);function ts(){return X1}const $m=new Ut(_e.comparator);function Mi(...t){let e=$m;for(const n of t)e=e.insert(n.key,n);return e}function Lm(t){let e=$m;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Ns(){return Hi()}function Mm(){return Hi()}function Hi(){return new ki(t=>t.toString(),(t,e)=>t.isEqual(e))}const x1=new Ut(_e.comparator),J1=new Mt(_e.comparator);function Ne(...t){let e=J1;for(const n of t)e=e.add(n);return e}const Z1=new Mt(Ke);function Um(){return Z1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const i=new Map;return i.set(e,Dr.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new ca(Re.min(),i,Um(),ts(),Ne())}}class Dr{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Dr(s,n,Ne(),Ne(),Ne())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(e,n,s,i){this.Tt=e,this.removedTargetIds=n,this.key=s,this.Et=i}}class Fm{constructor(e,n){this.targetId=e,this.At=n}}class Vm{constructor(e,n,s=pn.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class eh{constructor(){this.Rt=0,this.bt=nh(),this.Pt=pn.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=Ne(),n=Ne(),s=Ne();return this.bt.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:Se()}}),new Dr(this.Pt,this.vt,e,n,s)}Nt(){this.Vt=!1,this.bt=nh()}kt(e,n){this.Vt=!0,this.bt=this.bt.insert(e,n)}Ot(e){this.Vt=!0,this.bt=this.bt.remove(e)}Mt(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class eb{constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=ts(),this.qt=th(),this.Kt=new Mt(Ke)}Gt(e){for(const n of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(n,e.Et):this.jt(n,e.key,e.Et);for(const n of e.removedTargetIds)this.jt(n,e.key,e.Et)}Wt(e){this.forEachTarget(e,n=>{const s=this.zt(n);switch(e.state){case 0:this.Ht(n)&&s.Ct(e.resumeToken);break;case 1:s.Ft(),s.St||s.Nt(),s.Ct(e.resumeToken);break;case 2:s.Ft(),s.St||this.removeTarget(n);break;case 3:this.Ht(n)&&(s.$t(),s.Ct(e.resumeToken));break;case 4:this.Ht(n)&&(this.Jt(n),s.Ct(e.resumeToken));break;default:Se()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Lt.forEach((s,i)=>{this.Ht(i)&&n(i)})}Yt(e){const n=e.targetId,s=e.At.count,i=this.Xt(n);if(i){const r=i.target;if(Tl(r))if(s===0){const o=new _e(r.path);this.jt(n,o,en.newNoDocument(o,Re.min()))}else rt(s===1);else this.Zt(n)!==s&&(this.Jt(n),this.Kt=this.Kt.add(n))}}te(e){const n=new Map;this.Lt.forEach((r,o)=>{const a=this.Xt(o);if(a){if(r.current&&Tl(a.target)){const l=new _e(a.target.path);this.Ut.get(l)!==null||this.ee(o,l)||this.jt(o,l,en.newNoDocument(l,e))}r.Dt&&(n.set(o,r.xt()),r.Nt())}});let s=Ne();this.qt.forEach((r,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Xt(l);return!u||u.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))}),this.Ut.forEach((r,o)=>o.setReadTime(e));const i=new ca(e,n,this.Kt,this.Ut,s);return this.Ut=ts(),this.qt=th(),this.Kt=new Mt(Ke),i}Qt(e,n){if(!this.Ht(e))return;const s=this.ee(e,n.key)?2:0;this.zt(e).kt(n.key,s),this.Ut=this.Ut.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ne(n.key).add(e))}jt(e,n,s){if(!this.Ht(e))return;const i=this.zt(e);this.ee(e,n)?i.kt(n,1):i.Ot(n),this.qt=this.qt.insert(n,this.ne(n).delete(e)),s&&(this.Ut=this.Ut.insert(n,s))}removeTarget(e){this.Lt.delete(e)}Zt(e){const n=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Mt(e){this.zt(e).Mt()}zt(e){let n=this.Lt.get(e);return n||(n=new eh,this.Lt.set(e,n)),n}ne(e){let n=this.qt.get(e);return n||(n=new Mt(Ke),this.qt=this.qt.insert(e,n)),n}Ht(e){const n=this.Xt(e)!==null;return n||pe("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.Lt.get(e);return n&&n.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new eh),this.Bt.getRemoteKeysForTarget(e).forEach(n=>{this.jt(e,n,null)})}ee(e,n){return this.Bt.getRemoteKeysForTarget(e).has(n)}}function th(){return new Ut(_e.comparator)}function nh(){return new Ut(_e.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tb=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),nb=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class sb{constructor(e,n){this.databaseId=e,this.gt=n}}function Ao(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Bm(t,e){return t.gt?e.toBase64():e.toUint8Array()}function ib(t,e){return Ao(t,e.toTimestamp())}function Yn(t){return rt(!!t),Re.fromTimestamp(function(e){const n=Es(e);return new Lt(n.seconds,n.nanos)}(t))}function Iu(t,e){return function(n){return new dt(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function jm(t){const e=dt.fromString(t);return rt(Km(e)),e}function Sl(t,e){return Iu(t.databaseId,e.path)}function Ga(t,e){const n=jm(e);if(n.get(1)!==t.databaseId.projectId)throw new ye(X.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ye(X.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new _e(qm(n))}function Al(t,e){return Iu(t.databaseId,e)}function rb(t){const e=jm(t);return e.length===4?dt.emptyPath():qm(e)}function Dl(t){return new dt(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function qm(t){return rt(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function sh(t,e,n){return{name:Sl(t,e),fields:n.value.mapValue.fields}}function ob(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:Se()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(l,u){return l.gt?(rt(u===void 0||typeof u=="string"),pn.fromBase64String(u||"")):(rt(u===void 0||u instanceof Uint8Array),pn.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?X.UNKNOWN:Om(l.code);return new ye(u,l.message||"")}(o);n=new Vm(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=Ga(t,s.document.name),r=Yn(s.document.updateTime),o=new wn({mapValue:{fields:s.document.fields}}),a=en.newFoundDocument(i,r,o),l=s.targetIds||[],u=s.removedTargetIds||[];n=new to(l,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=Ga(t,s.document),r=s.readTime?Yn(s.readTime):Re.min(),o=en.newNoDocument(i,r),a=s.removedTargetIds||[];n=new to([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=Ga(t,s.document),r=s.removedTargetIds||[];n=new to([],r,i,null)}else{if(!("filter"in e))return Se();{e.filter;const s=e.filter;s.targetId;const i=s.count||0,r=new Q1(i),o=s.targetId;n=new Fm(o,r)}}return n}function ab(t,e){let n;if(e instanceof Ar)n={update:sh(t,e.key,e.value)};else if(e instanceof Tu)n={delete:Sl(t,e.key)};else if(e instanceof Ss)n={update:sh(t,e.key,e.data),updateMask:_b(e.fieldMask)};else{if(!(e instanceof W1))return Se();n={verify:Sl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof Co)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof sr)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof ir)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof So)return{fieldPath:r.field.canonicalString(),increment:o.yt};throw Se()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:ib(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Se()}(t,e.precondition)),n}function lb(t,e){return t&&t.length>0?(rt(e!==void 0),t.map(n=>function(s,i){let r=s.updateTime?Yn(s.updateTime):Yn(i);return r.isEqual(Re.min())&&(r=Yn(i)),new K1(r,s.transformResults||[])}(n,e))):[]}function ub(t,e){return{documents:[Al(t,e.path)]}}function cb(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Al(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Al(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(l){if(l.length===0)return;const u=l.map(h=>function(f){if(f.op==="=="){if(zc(f.value))return{unaryFilter:{field:xs(f.field),op:"IS_NAN"}};if(Kc(f.value))return{unaryFilter:{field:xs(f.field),op:"IS_NULL"}}}else if(f.op==="!="){if(zc(f.value))return{unaryFilter:{field:xs(f.field),op:"IS_NOT_NAN"}};if(Kc(f.value))return{unaryFilter:{field:xs(f.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:xs(f.field),op:pb(f.op),value:f.value}}}(h));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(e.filters);i&&(n.structuredQuery.where=i);const r=function(l){if(l.length!==0)return l.map(u=>function(h){return{field:xs(h.field),direction:db(h.dir)}}(u))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(l,u){return l.gt||ra(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function hb(t){let e=rb(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){rt(s===1);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let r=[];n.where&&(r=Hm(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(h=>function(f){return new ji(ei(f.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(f.direction))}(h)));let a=null;n.limit&&(a=function(h){let f;return f=typeof h=="object"?h.value:h,ra(f)?null:f}(n.limit));let l=null;n.startAt&&(l=function(h){const f=!!h.before,d=h.values||[];return new Io(d,f)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const f=!h.before,d=h.values||[];return new Io(d,f)}(n.endAt)),$1(e,i,o,r,a,"F",l,u)}function fb(t,e){const n=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Se()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Hm(t){return t?t.unaryFilter!==void 0?[gb(t)]:t.fieldFilter!==void 0?[mb(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>Hm(e)).reduce((e,n)=>e.concat(n)):Se():[]}function db(t){return tb[t]}function pb(t){return nb[t]}function xs(t){return{fieldPath:t.canonicalString()}}function ei(t){return un.fromServerFormat(t.fieldPath)}function mb(t){return kn.create(ei(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Se()}}(t.fieldFilter.op),t.fieldFilter.value)}function gb(t){switch(t.unaryFilter.op){case"IS_NAN":const e=ei(t.unaryFilter.field);return kn.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=ei(t.unaryFilter.field);return kn.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ei(t.unaryFilter.field);return kn.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=ei(t.unaryFilter.field);return kn.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Se()}}function _b(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Km(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vb{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&z1(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=qi(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=qi(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Mm();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const l=Pm(o,a);l!==null&&s.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(Re.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ne())}isEqual(e){return this.batchId===e.batchId&&fi(this.mutations,e.mutations,(n,s)=>xc(n,s))&&fi(this.baseMutations,e.baseMutations,(n,s)=>xc(n,s))}}class Cu{constructor(e,n,s,i){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(e,n,s){rt(e.mutations.length===s.length);let i=x1;const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new Cu(e,n,s,i)}}/**
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
 */class yb{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class bb{constructor(e){this.re=e}}function wb(t){const e=hb({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Il(e,e.limit,"L"):e}/**
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
 */class kb{constructor(){this.Ye=new Eb}addToCollectionParentIndex(e,n){return this.Ye.add(n),x.resolve()}getCollectionParents(e,n){return x.resolve(this.Ye.getEntries(n))}addFieldIndex(e,n){return x.resolve()}deleteFieldIndex(e,n){return x.resolve()}getDocumentsMatchingTarget(e,n){return x.resolve(null)}getIndexType(e,n){return x.resolve(0)}getFieldIndexes(e,n){return x.resolve([])}getNextCollectionGroupToUpdate(e){return x.resolve(null)}getMinOffset(e,n){return x.resolve(ks.min())}getMinOffsetFromCollectionGroup(e,n){return x.resolve(ks.min())}updateCollectionGroup(e,n,s){return x.resolve()}updateIndexEntries(e,n){return x.resolve()}}class Eb{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new Mt(dt.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new Mt(dt.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Tb{constructor(){this.changes=new ki(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,en.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?x.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Ib{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cb{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(s=i,this.getBaseDocument(e,n,s))).next(i=>(s!==null&&qi(s.mutation,i,Nn.empty(),Lt.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,Ne()).next(()=>s))}getLocalViewOfDocuments(e,n,s=Ne()){const i=Ns();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,s).next(r=>{let o=Mi();return r.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Ns();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,Ne()))}populateOverlays(e,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,i){let r=ts();const o=Hi(),a=Hi();return n.forEach((l,u)=>{const h=s.get(u.key);i.has(u.key)&&(h===void 0||h.mutation instanceof Ss)?r=r.insert(u.key,u):h!==void 0&&(o.set(u.key,h.mutation.getFieldMask()),qi(h.mutation,u,h.mutation.getFieldMask(),Lt.now()))}),this.recalculateAndSaveOverlays(e,r).next(l=>(l.forEach((u,h)=>o.set(u,h)),n.forEach((u,h)=>{var f;return a.set(u,new Ib(h,(f=o.get(u))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const s=Hi();let i=new Ut((o,a)=>o-a),r=Ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let h=s.get(l)||Nn.empty();h=a.applyToLocalView(u,h),s.set(l,h);const f=(i.get(a.batchId)||Ne()).add(l);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,h=l.value,f=Mm();h.forEach(d=>{if(!r.has(d)){const g=Pm(n.get(d),s.get(d));g!==null&&f.set(d,g),r=r.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,f))}return x.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(i){return _e.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):U1(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):x.resolve(Ns());let a=-1,l=r;return o.next(u=>x.forEach(u,(h,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),r.get(h)?x.resolve():this.getBaseDocument(e,h,f).next(d=>{l=l.insert(h,d)}))).next(()=>this.populateOverlays(e,u,r)).next(()=>this.computeViews(e,l,u,Ne())).next(h=>({batchId:a,changes:Lm(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new _e(n)).next(s=>{let i=Mi();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const i=n.collectionGroup;let r=Mi();return this.indexManager.getCollectionParents(e,i).next(o=>x.forEach(o,a=>{const l=function(u,h){return new oa(h,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,s).next(u=>{u.forEach((h,f)=>{r=r.insert(h,f)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,s){let i;return this.remoteDocumentCache.getAllFromCollection(e,n.path,s).next(r=>(i=r,this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId))).next(r=>{r.forEach((a,l)=>{const u=l.getKey();i.get(u)===null&&(i=i.insert(u,en.newInvalidDocument(u)))});let o=Mi();return i.forEach((a,l)=>{const u=r.get(a);u!==void 0&&qi(u.mutation,l,Nn.empty(),Lt.now()),Eu(n,l)&&(o=o.insert(a,l))}),o})}getBaseDocument(e,n,s){return s===null||s.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):x.resolve(en.newInvalidDocument(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sb{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return x.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:Yn(s.createTime)}),x.resolve()}getNamedQuery(e,n){return x.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(s){return{name:s.name,query:wb(s.bundledQuery),readTime:Yn(s.readTime)}}(n)),x.resolve()}}/**
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
 */class Ab{constructor(){this.overlays=new Ut(_e.comparator),this.es=new Map}getOverlay(e,n){return x.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Ns();return x.forEach(n,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((i,r)=>{this.ue(e,n,r)}),x.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.es.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.es.delete(s)),x.resolve()}getOverlaysForCollection(e,n,s){const i=Ns(),r=n.length+1,o=new _e(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===r&&l.largestBatchId>s&&i.set(l.getKey(),l)}return x.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new Ut((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let h=r.get(u.largestBatchId);h===null&&(h=Ns(),r=r.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=Ns(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,h)=>a.set(u,h)),!(a.size()>=i)););return x.resolve(a)}ue(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.es.get(i.largestBatchId).delete(s.key);this.es.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new yb(n,s));let r=this.es.get(n);r===void 0&&(r=Ne(),this.es.set(n,r)),this.es.set(n,r.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(){this.ns=new Mt(Ht.ss),this.rs=new Mt(Ht.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const s=new Ht(e,n);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.cs(new Ht(e,n))}hs(e,n){e.forEach(s=>this.removeReference(s,n))}ls(e){const n=new _e(new dt([])),s=new Ht(n,e),i=new Ht(n,e+1),r=[];return this.rs.forEachInRange([s,i],o=>{this.cs(o),r.push(o.key)}),r}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new _e(new dt([])),s=new Ht(n,e),i=new Ht(n,e+1);let r=Ne();return this.rs.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new Ht(e,0),s=this.ns.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Ht{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return _e.comparator(e.key,n.key)||Ke(e._s,n._s)}static os(e,n){return Ke(e._s,n._s)||_e.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Db{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new Mt(Ht.ss)}checkEmpty(e){return x.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new vb(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.gs=this.gs.add(new Ht(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return x.resolve(o)}lookupMutationBatch(e,n){return x.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.ps(s),r=i<0?0:i;return x.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return x.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return x.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Ht(n,0),i=new Ht(n,Number.POSITIVE_INFINITY),r=[];return this.gs.forEachInRange([s,i],o=>{const a=this.ys(o._s);r.push(a)}),x.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Mt(Ke);return n.forEach(i=>{const r=new Ht(i,0),o=new Ht(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([r,o],a=>{s=s.add(a._s)})}),x.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;_e.isDocumentKey(r)||(r=r.child(""));const o=new Ht(new _e(r),0);let a=new Mt(Ke);return this.gs.forEachWhile(l=>{const u=l.key.path;return!!s.isPrefixOf(u)&&(u.length===i&&(a=a.add(l._s)),!0)},o),x.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(s=>{const i=this.ys(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){rt(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return x.forEach(n.mutations,i=>{const r=new Ht(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.gs=s})}An(e){}containsKey(e,n){const s=new Ht(n,0),i=this.gs.firstAfterOrEqual(s);return x.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,x.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rb{constructor(e){this.Es=e,this.docs=new Ut(_e.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Es(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return x.resolve(s?s.document.mutableCopy():en.newInvalidDocument(n))}getEntries(e,n){let s=ts();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():en.newInvalidDocument(i))}),x.resolve(s)}getAllFromCollection(e,n,s){let i=ts();const r=new _e(n.child("")),o=this.docs.getIteratorFrom(r);for(;o.hasNext();){const{key:a,value:{document:l}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||_1(g1(l),s)<=0||(i=i.insert(l.key,l.mutableCopy()))}return x.resolve(i)}getAllFromCollectionGroup(e,n,s,i){Se()}As(e,n){return x.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new Pb(this)}getSize(e){return x.resolve(this.size)}}class Pb extends Tb{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.Yn.addEntry(e,i)):this.Yn.removeEntry(s)}),x.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nb{constructor(e){this.persistence=e,this.Rs=new ki(n=>wu(n),ku),this.lastRemoteSnapshotVersion=Re.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Su,this.targetCount=0,this.vs=mi.Pn()}forEachTarget(e,n){return this.Rs.forEach((s,i)=>n(i)),x.resolve()}getLastRemoteSnapshotVersion(e){return x.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return x.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),x.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),x.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new mi(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,x.resolve()}updateTargetData(e,n){return this.Dn(n),x.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,x.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Rs.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),x.waitFor(r).next(()=>i)}getTargetCount(e){return x.resolve(this.targetCount)}getTargetData(e,n){const s=this.Rs.get(n)||null;return x.resolve(s)}addMatchingKeys(e,n,s){return this.Ps.us(n,s),x.resolve()}removeMatchingKeys(e,n,s){this.Ps.hs(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),x.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),x.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Ps.ds(n);return x.resolve(s)}containsKey(e,n){return x.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ob{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new yu(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new Nb(this),this.indexManager=new kb,this.remoteDocumentCache=function(s){return new Rb(s)}(s=>this.referenceDelegate.xs(s)),this.It=new bb(n),this.Ns=new Sb(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Ab,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Vs[e.toKey()];return s||(s=new Db(n,this.referenceDelegate),this.Vs[e.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,s){pe("MemoryPersistence","Starting transaction:",e);const i=new $b(this.Ss.next());return this.referenceDelegate.ks(),s(i).next(r=>this.referenceDelegate.Os(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Ms(e,n){return x.or(Object.values(this.Vs).map(s=>()=>s.containsKey(e,n)))}}class $b extends y1{constructor(e){super(),this.currentSequenceNumber=e}}class Au{constructor(e){this.persistence=e,this.Fs=new Su,this.$s=null}static Bs(e){return new Au(e)}get Ls(){if(this.$s)return this.$s;throw Se()}addReference(e,n,s){return this.Fs.addReference(s,n),this.Ls.delete(s.toString()),x.resolve()}removeReference(e,n,s){return this.Fs.removeReference(s,n),this.Ls.add(s.toString()),x.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),x.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(i=>this.Ls.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.Ls.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return x.forEach(this.Ls,s=>{const i=_e.fromPath(s);return this.Us(e,i).next(r=>{r||n.removeEntry(i,Re.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.Us(e,n).next(s=>{s?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}Us(e,n){return x.or([()=>x.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.Si=s,this.Di=i}static Ci(e,n){let s=Ne(),i=Ne();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new Du(e,n.fromCache,s,i)}}/**
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
 */class Lb{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,s,i){return this.ki(e,n).next(r=>r||this.Oi(e,n,i,s)).next(r=>r||this.Mi(e,n))}ki(e,n){if(Yc(n))return x.resolve(null);let s=es(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Il(n,null,"F"),s=es(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=Ne(...r);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(l=>{const u=this.Fi(n,a);return this.$i(n,u,o,l.readTime)?this.ki(e,Il(n,null,"F")):this.Bi(e,u,n,l)}))})))}Oi(e,n,s,i){return Yc(n)||i.isEqual(Re.min())?this.Mi(e,n):this.Ni.getDocuments(e,s).next(r=>{const o=this.Fi(n,r);return this.$i(n,o,s,i)?this.Mi(e,n):(Bc()<=je.DEBUG&&pe("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Cl(n)),this.Bi(e,o,n,m1(i,-1)))})}Fi(e,n){let s=new Mt(Tm(e));return n.forEach((i,r)=>{Eu(e,r)&&(s=s.add(r))}),s}$i(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Mi(e,n){return Bc()<=je.DEBUG&&pe("QueryEngine","Using full collection scan to execute query:",Cl(n)),this.Ni.getDocumentsMatchingQuery(e,n,ks.min())}Bi(e,n,s,i){return this.Ni.getDocumentsMatchingQuery(e,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mb{constructor(e,n,s,i){this.persistence=e,this.Li=n,this.It=i,this.Ui=new Ut(Ke),this.qi=new ki(r=>wu(r),ku),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(s)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Cb(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ui))}}function Ub(t,e,n,s){return new Mb(t,e,n,s)}async function zm(t,e){const n=Ae(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.Qi(e),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let l=Ne();for(const u of i){o.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}for(const u of r){a.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}return n.localDocuments.getDocuments(s,l).next(u=>({ji:u,removedBatchIds:o,addedBatchIds:a}))})})}function Fb(t,e){const n=Ae(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const h=l.batch,f=h.keys();let d=x.resolve();return f.forEach(g=>{d=d.next(()=>u.getEntry(a,g)).next(_=>{const v=l.docVersions.get(g);rt(v!==null),_.version.compareTo(v)<0&&(h.applyToRemoteDocument(_,l),_.isValidDocument()&&(_.setReadTime(l.commitVersion),u.addEntry(_)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,h))}(n,s,e,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=Ne();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,i))})}function Gm(t){const e=Ae(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function Vb(t,e){const n=Ae(t),s=e.snapshotVersion;let i=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.Ui;const a=[];e.targetChanges.forEach((h,f)=>{const d=i.get(f);if(!d)return;a.push(n.Cs.removeMatchingKeys(r,h.removedDocuments,f).next(()=>n.Cs.addMatchingKeys(r,h.addedDocuments,f)));let g=d.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.has(f)?g=g.withResumeToken(pn.EMPTY_BYTE_STRING,Re.min()).withLastLimboFreeSnapshotVersion(Re.min()):h.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(h.resumeToken,s)),i=i.insert(f,g),function(_,v,w){return _.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-_.snapshotVersion.toMicroseconds()>=3e8?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(d,g,h)&&a.push(n.Cs.updateTargetData(r,g))});let l=ts(),u=Ne();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,h))}),a.push(Bb(r,o,e.documentUpdates).next(h=>{l=h.Wi,u=h.zi})),!s.isEqual(Re.min())){const h=n.Cs.getLastRemoteSnapshotVersion(r).next(f=>n.Cs.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(h)}return x.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,l,u)).next(()=>l)}).then(r=>(n.Ui=i,r))}function Bb(t,e,n){let s=Ne(),i=Ne();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let o=ts();return n.forEach((a,l)=>{const u=r.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(Re.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):pe("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{Wi:o,zi:i}})}function jb(t,e){const n=Ae(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function qb(t,e){const n=Ae(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Cs.getTargetData(s,e).next(r=>r?(i=r,x.resolve(i)):n.Cs.allocateTargetId(s).next(o=>(i=new $s(e,o,0,s.currentSequenceNumber),n.Cs.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.Ui.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(s.targetId,s),n.qi.set(e,s.targetId)),s})}async function Rl(t,e,n){const s=Ae(t),i=s.Ui.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Sr(o))throw o;pe("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ui=s.Ui.remove(e),s.qi.delete(i.target)}function ih(t,e,n){const s=Ae(t);let i=Re.min(),r=Ne();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const h=Ae(a),f=h.qi.get(u);return f!==void 0?x.resolve(h.Ui.get(f)):h.Cs.getTargetData(l,u)}(s,o,es(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{r=l})}).next(()=>s.Li.getDocumentsMatchingQuery(o,e,n?i:Re.min(),n?r:Ne())).next(a=>(Hb(s,F1(e),a),{documents:a,Hi:r})))}function Hb(t,e,n){let s=t.Ki.get(e)||Re.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),t.Ki.set(e,s)}class rh{constructor(){this.activeTargetIds=Um()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Kb{constructor(){this.Lr=new rh,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,n,s){this.Ur[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new rh,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class zb{qr(e){}shutdown(){}}/**
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
 */const Gb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wb{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qb extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,s,i,r){const o=this.ho(e,n);pe("RestConnection","Sending: ",o,s);const a={};return this.lo(a,i,r),this.fo(e,o,a,s).then(l=>(pe("RestConnection","Received: ",l),l),l=>{throw wl("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",s),l})}_o(e,n,s,i,r,o){return this.ao(e,n,s,i,r)}lo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+wi,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>e[r]=i),s&&s.headers.forEach((i,r)=>e[r]=i)}ho(e,n){const s=Gb[e];return`${this.oo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,s,i){return new Promise((r,o)=>{const a=new r1;a.setWithCredentials(!0),a.listenOnce(n1.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case za.NO_ERROR:const u=a.getResponseJson();pe("Connection","XHR received:",JSON.stringify(u)),r(u);break;case za.TIMEOUT:pe("Connection",'RPC "'+e+'" timed out'),o(new ye(X.DEADLINE_EXCEEDED,"Request time out"));break;case za.HTTP_ERROR:const h=a.getStatus();if(pe("Connection",'RPC "'+e+'" failed with status:',h,"response text:",a.getResponseText()),h>0){const f=a.getResponseJson().error;if(f&&f.status&&f.message){const d=function(g){const _=g.toLowerCase().replace(/_/g,"-");return Object.values(X).indexOf(_)>=0?_:X.UNKNOWN}(f.status);o(new ye(d,f.message))}else o(new ye(X.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new ye(X.UNAVAILABLE,"Connection failed."));break;default:Se()}}finally{pe("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(i);a.send(n,"POST",l,s,15)})}wo(e,n,s){const i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=e1(),o=t1(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new i1({})),this.lo(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const l=i.join("");pe("Connection","Creating WebChannel: "+l,a);const u=r.createWebChannel(l,a);let h=!1,f=!1;const d=new Wb({Hr:_=>{f?pe("Connection","Not sending because WebChannel is closed:",_):(h||(pe("Connection","Opening WebChannel transport."),u.open(),h=!0),pe("Connection","WebChannel sending:",_),u.send(_))},Jr:()=>u.close()}),g=(_,v,w)=>{_.listen(v,E=>{try{w(E)}catch(A){setTimeout(()=>{throw A},0)}})};return g(u,Gr.EventType.OPEN,()=>{f||pe("Connection","WebChannel transport opened.")}),g(u,Gr.EventType.CLOSE,()=>{f||(f=!0,pe("Connection","WebChannel transport closed"),d.io())}),g(u,Gr.EventType.ERROR,_=>{f||(f=!0,wl("Connection","WebChannel transport errored:",_),d.io(new ye(X.UNAVAILABLE,"The operation could not be completed")))}),g(u,Gr.EventType.MESSAGE,_=>{var v;if(!f){const w=_.data[0];rt(!!w);const E=w,A=E.error||((v=E[0])===null||v===void 0?void 0:v.error);if(A){pe("Connection","WebChannel received error:",A);const O=A.status;let R=function($){const U=At[$];if(U!==void 0)return Om(U)}(O),F=A.message;R===void 0&&(R=X.INTERNAL,F="Unknown error status: "+O+" with message "+A.message),f=!0,d.io(new ye(R,F)),u.close()}else pe("Connection","WebChannel received:",w),d.ro(w)}}),g(o,s1.STAT_EVENT,_=>{_.stat===Fc.PROXY?pe("Connection","Detected buffering proxy"):_.stat===Fc.NOPROXY&&pe("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}function Wa(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ha(t){return new sb(t,!0)}class Wm{constructor(e,n,s=1e3,i=1.5,r=6e4){this.Hs=e,this.timerId=n,this.mo=s,this.yo=i,this.po=r,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-s);i>0&&pe("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qm{constructor(e,n,s,i,r,o,a,l){this.Hs=e,this.vo=s,this.Vo=i,this.So=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Do=0,this.Co=null,this.xo=null,this.stream=null,this.No=new Wm(e,n)}ko(){return this.state===1||this.state===5||this.Oo()}Oo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Mo()}async stop(){this.ko()&&await this.close(0)}Fo(){this.state=0,this.No.reset()}$o(){this.Oo()&&this.Co===null&&(this.Co=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.Bo()))}Lo(e){this.Uo(),this.stream.send(e)}async Bo(){if(this.Oo())return this.close(0)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}qo(){this.xo&&(this.xo.cancel(),this.xo=null)}async close(e,n){this.Uo(),this.qo(),this.No.cancel(),this.Do++,e!==4?this.No.reset():n&&n.code===X.RESOURCE_EXHAUSTED?(Zn(n.toString()),Zn("Using maximum backoff delay to prevent overloading the backend."),this.No.Ao()):n&&n.code===X.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Ko(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}Ko(){}auth(){this.state=1;const e=this.Go(this.Do),n=this.Do;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Do===n&&this.Qo(s,i)},s=>{e(()=>{const i=new ye(X.UNKNOWN,"Fetching auth token failed: "+s.message);return this.jo(i)})})}Qo(e,n){const s=this.Go(this.Do);this.stream=this.Wo(e,n),this.stream.Yr(()=>{s(()=>(this.state=2,this.xo=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.Oo()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{s(()=>this.jo(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Mo(){this.state=5,this.No.Ro(async()=>{this.state=0,this.start()})}jo(e){return pe("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Go(e){return n=>{this.Hs.enqueueAndForget(()=>this.Do===e?n():(pe("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Yb extends Qm{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.It=r}Wo(e,n){return this.So.wo("Listen",e,n)}onMessage(e){this.No.reset();const n=ob(this.It,e),s=function(i){if(!("targetChange"in i))return Re.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?Re.min():r.readTime?Yn(r.readTime):Re.min()}(e);return this.listener.zo(n,s)}Ho(e){const n={};n.database=Dl(this.It),n.addTarget=function(i,r){let o;const a=r.target;return o=Tl(a)?{documents:ub(i,a)}:{query:cb(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=Bm(i,r.resumeToken):r.snapshotVersion.compareTo(Re.min())>0&&(o.readTime=Ao(i,r.snapshotVersion.toTimestamp())),o}(this.It,e);const s=fb(this.It,e);s&&(n.labels=s),this.Lo(n)}Jo(e){const n={};n.database=Dl(this.It),n.removeTarget=e,this.Lo(n)}}class Xb extends Qm{constructor(e,n,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.It=r,this.Yo=!1}get Xo(){return this.Yo}start(){this.Yo=!1,this.lastStreamToken=void 0,super.start()}Ko(){this.Yo&&this.Zo([])}Wo(e,n){return this.So.wo("Write",e,n)}onMessage(e){if(rt(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Yo){this.No.reset();const n=lb(e.writeResults,e.commitTime),s=Yn(e.commitTime);return this.listener.tu(s,n)}return rt(!e.writeResults||e.writeResults.length===0),this.Yo=!0,this.listener.eu()}nu(){const e={};e.database=Dl(this.It),this.Lo(e)}Zo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>ab(this.It,s))};this.Lo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xb extends class{}{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.So=s,this.It=i,this.su=!1}iu(){if(this.su)throw new ye(X.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,s){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.So.ao(e,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===X.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ye(X.UNKNOWN,i.toString())})}_o(e,n,s,i){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.So._o(e,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===X.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new ye(X.UNKNOWN,r.toString())})}terminate(){this.su=!0}}class Jb{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ru=0,this.ou=null,this.uu=!0}cu(){this.ru===0&&(this.au("Unknown"),this.ou=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ou=null,this.hu("Backend didn't respond within 10 seconds."),this.au("Offline"),Promise.resolve())))}lu(e){this.state==="Online"?this.au("Unknown"):(this.ru++,this.ru>=1&&(this.fu(),this.hu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.au("Offline")))}set(e){this.fu(),this.ru=0,e==="Online"&&(this.uu=!1),this.au(e)}au(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}hu(e){const n=`Could not reach Cloud Firestore backend. ${e}
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
 */class Zb{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.du=[],this._u=new Map,this.wu=new Set,this.mu=[],this.gu=r,this.gu.qr(o=>{s.enqueueAndForget(async()=>{Qs(this)&&(pe("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=Ae(a);l.wu.add(4),await Rr(l),l.yu.set("Unknown"),l.wu.delete(4),await fa(l)}(this))})}),this.yu=new Jb(s,i)}}async function fa(t){if(Qs(t))for(const e of t.mu)await e(!0)}async function Rr(t){for(const e of t.mu)await e(!1)}function Ym(t,e){const n=Ae(t);n._u.has(e.targetId)||(n._u.set(e.targetId,e),Nu(n)?Pu(n):Ei(n).Oo()&&Ru(n,e))}function Xm(t,e){const n=Ae(t),s=Ei(n);n._u.delete(e),s.Oo()&&xm(n,e),n._u.size===0&&(s.Oo()?s.$o():Qs(n)&&n.yu.set("Unknown"))}function Ru(t,e){t.pu.Mt(e.targetId),Ei(t).Ho(e)}function xm(t,e){t.pu.Mt(e),Ei(t).Jo(e)}function Pu(t){t.pu=new eb({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t._u.get(e)||null}),Ei(t).start(),t.yu.cu()}function Nu(t){return Qs(t)&&!Ei(t).ko()&&t._u.size>0}function Qs(t){return Ae(t).wu.size===0}function Jm(t){t.pu=void 0}async function ew(t){t._u.forEach((e,n)=>{Ru(t,e)})}async function tw(t,e){Jm(t),Nu(t)?(t.yu.lu(e),Pu(t)):t.yu.set("Unknown")}async function nw(t,e,n){if(t.yu.set("Online"),e instanceof Vm&&e.state===2&&e.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s._u.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s._u.delete(o),s.pu.removeTarget(o))}(t,e)}catch(s){pe("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Do(t,s)}else if(e instanceof to?t.pu.Gt(e):e instanceof Fm?t.pu.Yt(e):t.pu.Wt(e),!n.isEqual(Re.min()))try{const s=await Gm(t.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.pu.te(r);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i._u.get(l);u&&i._u.set(l,u.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const l=i._u.get(a);if(!l)return;i._u.set(a,l.withResumeToken(pn.EMPTY_BYTE_STRING,l.snapshotVersion)),xm(i,a);const u=new $s(l.target,a,1,l.sequenceNumber);Ru(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){pe("RemoteStore","Failed to raise snapshot:",s),await Do(t,s)}}async function Do(t,e,n){if(!Sr(e))throw e;t.wu.add(1),await Rr(t),t.yu.set("Offline"),n||(n=()=>Gm(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{pe("RemoteStore","Retrying IndexedDB access"),await n(),t.wu.delete(1),await fa(t)})}function Zm(t,e){return e().catch(n=>Do(t,n,e))}async function da(t){const e=Ae(t),n=Ts(e);let s=e.du.length>0?e.du[e.du.length-1].batchId:-1;for(;sw(e);)try{const i=await jb(e.localStore,s);if(i===null){e.du.length===0&&n.$o();break}s=i.batchId,iw(e,i)}catch(i){await Do(e,i)}eg(e)&&tg(e)}function sw(t){return Qs(t)&&t.du.length<10}function iw(t,e){t.du.push(e);const n=Ts(t);n.Oo()&&n.Xo&&n.Zo(e.mutations)}function eg(t){return Qs(t)&&!Ts(t).ko()&&t.du.length>0}function tg(t){Ts(t).start()}async function rw(t){Ts(t).nu()}async function ow(t){const e=Ts(t);for(const n of t.du)e.Zo(n.mutations)}async function aw(t,e,n){const s=t.du.shift(),i=Cu.from(s,e,n);await Zm(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await da(t)}async function lw(t,e){e&&Ts(t).Xo&&await async function(n,s){if(i=s.code,Y1(i)&&i!==X.ABORTED){const r=n.du.shift();Ts(n).Fo(),await Zm(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await da(n)}var i}(t,e),eg(t)&&tg(t)}async function ah(t,e){const n=Ae(t);n.asyncQueue.verifyOperationInProgress(),pe("RemoteStore","RemoteStore received new credentials");const s=Qs(n);n.wu.add(3),await Rr(n),s&&n.yu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.wu.delete(3),await fa(n)}async function uw(t,e){const n=Ae(t);e?(n.wu.delete(2),await fa(n)):e||(n.wu.add(2),await Rr(n),n.yu.set("Unknown"))}function Ei(t){return t.Iu||(t.Iu=function(e,n,s){const i=Ae(e);return i.iu(),new Yb(n,i.So,i.authCredentials,i.appCheckCredentials,i.It,s)}(t.datastore,t.asyncQueue,{Yr:ew.bind(null,t),Zr:tw.bind(null,t),zo:nw.bind(null,t)}),t.mu.push(async e=>{e?(t.Iu.Fo(),Nu(t)?Pu(t):t.yu.set("Unknown")):(await t.Iu.stop(),Jm(t))})),t.Iu}function Ts(t){return t.Tu||(t.Tu=function(e,n,s){const i=Ae(e);return i.iu(),new Xb(n,i.So,i.authCredentials,i.appCheckCredentials,i.It,s)}(t.datastore,t.asyncQueue,{Yr:rw.bind(null,t),Zr:lw.bind(null,t),eu:ow.bind(null,t),tu:aw.bind(null,t)}),t.mu.push(async e=>{e?(t.Tu.Fo(),await da(t)):(await t.Tu.stop(),t.du.length>0&&(pe("RemoteStore",`Stopping write stream with ${t.du.length} pending writes`),t.du=[]))})),t.Tu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new vs,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new Ou(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ye(X.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function $u(t,e){if(Zn("AsyncQueue",`${e}: ${t}`),Sr(t))return new ye(X.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e){this.comparator=e?(n,s)=>e(n,s)||_e.comparator(n.key,s.key):(n,s)=>_e.comparator(n.key,s.key),this.keyedMap=Mi(),this.sortedSet=new Ut(this.comparator)}static emptySet(e){return new ii(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ii)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class lh{constructor(){this.Eu=new Ut(_e.comparator)}track(e){const n=e.doc.key,s=this.Eu.get(n);s?e.type!==0&&s.type===3?this.Eu=this.Eu.insert(n,e):e.type===3&&s.type!==1?this.Eu=this.Eu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Eu=this.Eu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Eu=this.Eu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Eu=this.Eu.remove(n):e.type===1&&s.type===2?this.Eu=this.Eu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Eu=this.Eu.insert(n,{type:2,doc:e.doc}):Se():this.Eu=this.Eu.insert(n,e)}Au(){const e=[];return this.Eu.inorderTraversal((n,s)=>{e.push(s)}),e}}class gi{constructor(e,n,s,i,r,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,s,i,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new gi(e,n,ii.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&aa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cw{constructor(){this.Ru=void 0,this.listeners=[]}}class hw{constructor(){this.queries=new ki(e=>Em(e),aa),this.onlineState="Unknown",this.bu=new Set}}async function fw(t,e){const n=Ae(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new cw),i)try{r.Ru=await n.onListen(s)}catch(o){const a=$u(o,`Initialization of query '${Cl(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,r),r.listeners.push(e),e.Pu(n.onlineState),r.Ru&&e.vu(r.Ru)&&Lu(n)}async function dw(t,e){const n=Ae(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function pw(t,e){const n=Ae(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.vu(i)&&(s=!0);o.Ru=i}}s&&Lu(n)}function mw(t,e,n){const s=Ae(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function Lu(t){t.bu.forEach(e=>{e.next()})}class gw{constructor(e,n,s){this.query=e,this.Vu=n,this.Su=!1,this.Du=null,this.onlineState="Unknown",this.options=s||{}}vu(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new gi(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Su?this.Cu(e)&&(this.Vu.next(e),n=!0):this.xu(e,this.onlineState)&&(this.Nu(e),n=!0),this.Du=e,n}onError(e){this.Vu.error(e)}Pu(e){this.onlineState=e;let n=!1;return this.Du&&!this.Su&&this.xu(this.Du,e)&&(this.Nu(this.Du),n=!0),n}xu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.ku||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Cu(e){if(e.docChanges.length>0)return!0;const n=this.Du&&this.Du.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Nu(e){e=gi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Su=!0,this.Vu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{constructor(e){this.key=e}}class sg{constructor(e){this.key=e}}class _w{constructor(e,n){this.query=e,this.Uu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=Ne(),this.mutatedKeys=Ne(),this.Gu=Tm(e),this.Qu=new ii(this.Gu)}get ju(){return this.Uu}Wu(e,n){const s=n?n.zu:new lh,i=n?n.Qu:this.Qu;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,f)=>{const d=i.get(h),g=Eu(this.query,f)?f:null,_=!!d&&this.mutatedKeys.has(d.key),v=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let w=!1;d&&g?d.data.isEqual(g.data)?_!==v&&(s.track({type:3,doc:g}),w=!0):this.Hu(d,g)||(s.track({type:2,doc:g}),w=!0,(l&&this.Gu(g,l)>0||u&&this.Gu(g,u)<0)&&(a=!0)):!d&&g?(s.track({type:0,doc:g}),w=!0):d&&!g&&(s.track({type:1,doc:d}),w=!0,(l||u)&&(a=!0)),w&&(g?(o=o.add(g),r=v?r.add(h):r.delete(h)):(o=o.delete(h),r=r.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),r=r.delete(h.key),s.track({type:1,doc:h})}return{Qu:o,zu:s,$i:a,mutatedKeys:r}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const i=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const r=e.zu.Au();r.sort((u,h)=>function(f,d){const g=_=>{switch(_){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Se()}};return g(f)-g(d)}(u.type,h.type)||this.Gu(u.doc,h.doc)),this.Ju(s);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,l=a!==this.qu;return this.qu=a,r.length!==0||l?{snapshot:new gi(this.query,e.Qu,i,r,e.mutatedKeys,a===0,l,!1,!!s&&s.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}Pu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new lh,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.Uu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.Uu=this.Uu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Uu=this.Uu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=Ne(),this.Qu.forEach(s=>{this.Zu(s.key)&&(this.Ku=this.Ku.add(s.key))});const n=[];return e.forEach(s=>{this.Ku.has(s)||n.push(new sg(s))}),this.Ku.forEach(s=>{e.has(s)||n.push(new ng(s))}),n}tc(e){this.Uu=e.Hi,this.Ku=Ne();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return gi.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class vw{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class yw{constructor(e){this.key=e,this.nc=!1}}class bw{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new ki(a=>Em(a),aa),this.rc=new Map,this.oc=new Set,this.uc=new Ut(_e.comparator),this.cc=new Map,this.ac=new Su,this.hc={},this.lc=new Map,this.fc=mi.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function ww(t,e){const n=Pw(t);let s,i;const r=n.ic.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.ec();else{const o=await qb(n.localStore,es(e));n.isPrimaryClient&&Ym(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await kw(n,e,s,a==="current",o.resumeToken)}return i}async function kw(t,e,n,s,i){t._c=(f,d,g)=>async function(_,v,w,E){let A=v.view.Wu(w);A.$i&&(A=await ih(_.localStore,v.query,!1).then(({documents:F})=>v.view.Wu(F,A)));const O=E&&E.targetChanges.get(v.targetId),R=v.view.applyChanges(A,_.isPrimaryClient,O);return ch(_,v.targetId,R.Xu),R.snapshot}(t,f,d,g);const r=await ih(t.localStore,e,!0),o=new _w(e,r.Hi),a=o.Wu(r.documents),l=Dr.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);ch(t,n,u.Xu);const h=new vw(e,n,o);return t.ic.set(e,h),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),u.snapshot}async function Ew(t,e){const n=Ae(t),s=n.ic.get(e),i=n.rc.get(s.targetId);if(i.length>1)return n.rc.set(s.targetId,i.filter(r=>!aa(r,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Rl(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Xm(n.remoteStore,s.targetId),Pl(n,s.targetId)}).catch(Cr)):(Pl(n,s.targetId),await Rl(n.localStore,s.targetId,!0))}async function Tw(t,e,n){const s=Nw(t);try{const i=await function(r,o){const a=Ae(r),l=Lt.now(),u=o.reduce((d,g)=>d.add(g.key),Ne());let h,f;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let g=ts(),_=Ne();return a.Gi.getEntries(d,u).next(v=>{g=v,g.forEach((w,E)=>{E.isValidDocument()||(_=_.add(w))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,g)).next(v=>{h=v;const w=[];for(const E of o){const A=G1(E,h.get(E.key).overlayedDocument);A!=null&&w.push(new Ss(E.key,A,bm(A.value.mapValue),Ln.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,w,o)}).next(v=>{f=v;const w=v.applyToLocalDocumentSet(h,_);return a.documentOverlayCache.saveOverlays(d,v.batchId,w)})}).then(()=>({batchId:f.batchId,changes:Lm(h)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let l=r.hc[r.currentUser.toKey()];l||(l=new Ut(Ke)),l=l.insert(o,a),r.hc[r.currentUser.toKey()]=l}(s,i.batchId,n),await Pr(s,i.changes),await da(s.remoteStore)}catch(i){const r=$u(i,"Failed to persist write");n.reject(r)}}async function ig(t,e){const n=Ae(t);try{const s=await Vb(n.localStore,e);e.targetChanges.forEach((i,r)=>{const o=n.cc.get(r);o&&(rt(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.nc=!0:i.modifiedDocuments.size>0?rt(o.nc):i.removedDocuments.size>0&&(rt(o.nc),o.nc=!1))}),await Pr(n,s,e)}catch(s){await Cr(s)}}function uh(t,e,n){const s=Ae(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.ic.forEach((r,o)=>{const a=o.view.Pu(e);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=Ae(r);a.onlineState=o;let l=!1;a.queries.forEach((u,h)=>{for(const f of h.listeners)f.Pu(o)&&(l=!0)}),l&&Lu(a)}(s.eventManager,e),i.length&&s.sc.zo(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Iw(t,e,n){const s=Ae(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.cc.get(e),r=i&&i.key;if(r){let o=new Ut(_e.comparator);o=o.insert(r,en.newNoDocument(r,Re.min()));const a=Ne().add(r),l=new ca(Re.min(),new Map,new Mt(Ke),o,a);await ig(s,l),s.uc=s.uc.remove(r),s.cc.delete(e),Mu(s)}else await Rl(s.localStore,e,!1).then(()=>Pl(s,e,n)).catch(Cr)}async function Cw(t,e){const n=Ae(t),s=e.batch.batchId;try{const i=await Fb(n.localStore,e);og(n,s,null),rg(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Pr(n,i)}catch(i){await Cr(i)}}async function Sw(t,e,n){const s=Ae(t);try{const i=await function(r,o){const a=Ae(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(h=>(rt(h!==null),u=h.keys(),a.mutationQueue.removeMutationBatch(l,h))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(s.localStore,e);og(s,e,n),rg(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Pr(s,i)}catch(i){await Cr(i)}}function rg(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function og(t,e,n){const s=Ae(t);let i=s.hc[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(n?r.reject(n):r.resolve(),i=i.remove(e)),s.hc[s.currentUser.toKey()]=i}}function Pl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.rc.get(e))t.ic.delete(s),n&&t.sc.wc(s,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(s=>{t.ac.containsKey(s)||ag(t,s)})}function ag(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(Xm(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),Mu(t))}function ch(t,e,n){for(const s of n)s instanceof ng?(t.ac.addReference(s.key,e),Aw(t,s)):s instanceof sg?(pe("SyncEngine","Document no longer in limbo: "+s.key),t.ac.removeReference(s.key,e),t.ac.containsKey(s.key)||ag(t,s.key)):Se()}function Aw(t,e){const n=e.key,s=n.path.canonicalString();t.uc.get(n)||t.oc.has(s)||(pe("SyncEngine","New document in limbo: "+n),t.oc.add(s),Mu(t))}function Mu(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new _e(dt.fromString(e)),s=t.fc.next();t.cc.set(s,new yw(n)),t.uc=t.uc.insert(n,s),Ym(t.remoteStore,new $s(es(km(n.path)),s,2,yu.at))}}async function Pr(t,e,n){const s=Ae(t),i=[],r=[],o=[];s.ic.isEmpty()||(s.ic.forEach((a,l)=>{o.push(s._c(l,e,n).then(u=>{if((u||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const h=Du.Ci(l.targetId,u);r.push(h)}}))}),await Promise.all(o),s.sc.zo(i),await async function(a,l){const u=Ae(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>x.forEach(l,f=>x.forEach(f.Si,d=>u.persistence.referenceDelegate.addReference(h,f.targetId,d)).next(()=>x.forEach(f.Di,d=>u.persistence.referenceDelegate.removeReference(h,f.targetId,d)))))}catch(h){if(!Sr(h))throw h;pe("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const f=h.targetId;if(!h.fromCache){const d=u.Ui.get(f),g=d.snapshotVersion,_=d.withLastLimboFreeSnapshotVersion(g);u.Ui=u.Ui.insert(f,_)}}}(s.localStore,r))}async function Dw(t,e){const n=Ae(t);if(!n.currentUser.isEqual(e)){pe("SyncEngine","User change. New user:",e.toKey());const s=await zm(n.localStore,e);n.currentUser=e,function(i,r){i.lc.forEach(o=>{o.forEach(a=>{a.reject(new ye(X.CANCELLED,r))})}),i.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Pr(n,s.ji)}}function Rw(t,e){const n=Ae(t),s=n.cc.get(e);if(s&&s.nc)return Ne().add(s.key);{let i=Ne();const r=n.rc.get(e);if(!r)return i;for(const o of r){const a=n.ic.get(o);i=i.unionWith(a.view.ju)}return i}}function Pw(t){const e=Ae(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ig.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Rw.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Iw.bind(null,e),e.sc.zo=pw.bind(null,e.eventManager),e.sc.wc=mw.bind(null,e.eventManager),e}function Nw(t){const e=Ae(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Cw.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Sw.bind(null,e),e}class Ow{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=ha(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return Ub(this.persistence,new Lb,e.initialUser,this.It)}yc(e){return new Ob(Au.Bs,this.It)}gc(e){return new Kb}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class $w{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>uh(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Dw.bind(null,this.syncEngine),await uw(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new hw}createDatastore(e){const n=ha(e.databaseInfo.databaseId),s=(i=e.databaseInfo,new Qb(i));var i;return function(r,o,a,l){return new xb(r,o,a,l)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,i=e.asyncQueue,r=a=>uh(this.syncEngine,a,0),o=oh.C()?new oh:new zb,new Zb(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(e,n){return function(s,i,r,o,a,l,u){const h=new bw(s,i,r,o,a,l);return u&&(h.dc=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=Ae(e);pe("RemoteStore","RemoteStore shutting down."),n.wu.add(5),await Rr(n),n.gu.shutdown(),n.yu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lg(t,e,n){if(!n)throw new ye(X.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Lw(t,e,n,s){if(e===!0&&s===!0)throw new ye(X.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function hh(t){if(!_e.isDocumentKey(t))throw new ye(X.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function fh(t){if(_e.isDocumentKey(t))throw new ye(X.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Uu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Se()}function Hs(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ye(X.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Uu(t);throw new ye(X.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dh=new Map;class ph{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new ye(X.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ye(X.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Lw("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ph({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new ye(X.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new ye(X.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ph(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new o1;switch(n.type){case"gapi":const s=n.client;return new c1(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new ye(X.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=dh.get(e);n&&(pe("ComponentProvider","Removing Datastore"),dh.delete(e),n.terminate())}(this),Promise.resolve()}}function Mw(t,e,n,s={}){var i;const r=(t=Hs(t,pa))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==e&&wl("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=ln.MOCK_USER;else{o=zv(s.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=s.mockUserToken.sub||s.mockUserToken.user_id;if(!l)throw new ye(X.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new ln(l)}t._authCredentials=new a1(new mm(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ys(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new On(this.firestore,e,this._key)}}class ma{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new ma(this.firestore,e,this._query)}}class ys extends ma{constructor(e,n,s){super(e,n,km(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new On(this.firestore,null,new _e(e))}withConverter(e){return new ys(this.firestore,e,this._path)}}function ns(t,e,...n){if(t=gn(t),lg("collection","path",e),t instanceof pa){const s=dt.fromString(e,...n);return fh(s),new ys(t,null,s)}{if(!(t instanceof On||t instanceof ys))throw new ye(X.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(dt.fromString(e,...n));return fh(s),new ys(t.firestore,null,s)}}function ss(t,e,...n){if(t=gn(t),arguments.length===1&&(e=gm.R()),lg("doc","path",e),t instanceof pa){const s=dt.fromString(e,...n);return hh(s),new On(t,null,new _e(s))}{if(!(t instanceof On||t instanceof ys))throw new ye(X.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(dt.fromString(e,...n));return hh(s),new On(t.firestore,t instanceof ys?t.converter:null,new _e(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Uw{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):Zn("Uncaught Error in snapshot listener:",e)}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fw{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=ln.UNAUTHENTICATED,this.clientId=gm.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{pe("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(pe("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ye(X.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new vs;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=$u(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Vw(t,e){t.asyncQueue.verifyOperationInProgress(),pe("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await zm(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function Bw(t,e){t.asyncQueue.verifyOperationInProgress();const n=await jw(t);pe("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(i=>ah(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,r)=>ah(e.remoteStore,r)),t.onlineComponents=e}async function jw(t){return t.offlineComponents||(pe("FirestoreClient","Using default OfflineComponentProvider"),await Vw(t,new Ow)),t.offlineComponents}async function ug(t){return t.onlineComponents||(pe("FirestoreClient","Using default OnlineComponentProvider"),await Bw(t,new $w)),t.onlineComponents}function qw(t){return ug(t).then(e=>e.syncEngine)}async function Hw(t){const e=await ug(t),n=e.eventManager;return n.onListen=ww.bind(null,e.syncEngine),n.onUnlisten=Ew.bind(null,e.syncEngine),n}function Kw(t,e,n={}){const s=new vs;return t.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,l){const u=new Uw({next:f=>{r.enqueueAndForget(()=>dw(i,h)),f.fromCache&&a.source==="server"?l.reject(new ye(X.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(f)},error:f=>l.reject(f)}),h=new gw(o,u,{includeMetadataChanges:!0,ku:!0});return fw(i,h)}(await Hw(t),t.asyncQueue,e,n,s)),s.promise}class zw{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.No=new Wm(this,"async_queue_retry"),this.Wc=()=>{const n=Wa();n&&pe("AsyncQueue","Visibility state changed to "+n.visibilityState),this.No.Po()};const e=Wa();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.Uc){this.Uc=!0,this.Qc=e||!1;const n=Wa();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.Uc)return new Promise(()=>{});const n=new vs;return this.Hc(()=>this.Uc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.No.reset()}catch(e){if(!Sr(e))throw e;pe("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.No.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(s=>{this.Kc=s,this.Gc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw Zn("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Gc=!1,s))));return this.Bc=n,n}enqueueAfterDelay(e,n,s){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const i=Ou.createAndSchedule(this,e,n,s,r=>this.Yc(r));return this.qc.push(i),i}zc(){this.Kc&&Se()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.qc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.qc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.qc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.qc.indexOf(e);this.qc.splice(n,1)}}class Nr extends pa{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=new zw,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||hg(this),this._firestoreClient.terminate()}}function Gw(t,e){const n=typeof t=="object"?t:cp(),s=typeof t=="string"?t:e||"(default)",i=Xl(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=qv("firestore");r&&Mw(i,...r)}return i}function cg(t){return t._firestoreClient||hg(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function hg(t){var e;const n=t._freezeSettings(),s=function(i,r,o,a){return new w1(i,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Fw(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class _i{constructor(e){this._byteString=e}static fromBase64String(e){try{return new _i(pn.fromBase64String(e))}catch(n){throw new ye(X.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new _i(pn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ye(X.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new un(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Vu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ye(X.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ye(X.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ke(this._lat,e._lat)||Ke(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ww=/^__.*__$/;class Qw{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Ss(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ar(e,this.data,n,this.fieldTransforms)}}class fg{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new Ss(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function dg(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Se()}}class Bu{constructor(e,n,s,i,r,o){this.settings=e,this.databaseId=n,this.It=s,this.ignoreUndefinedProperties=i,r===void 0&&this.na(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new Bu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:s,oa:!1});return i.ua(e),i}ca(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:s,oa:!1});return i.na(),i}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return Ro(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(dg(this.sa)&&Ww.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class Yw{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.It=s||ha(e)}da(e,n,s,i=!1){return new Bu({sa:e,methodName:n,fa:s,path:un.emptyPath(),oa:!1,la:i},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function pg(t){const e=t._freezeSettings(),n=ha(t._databaseId);return new Yw(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Xw(t,e,n,s,i,r={}){const o=t.da(r.merge||r.mergeFields?2:0,e,n,i);ju("Data must be an object, but it was:",o,s);const a=mg(s,o);let l,u;if(r.merge)l=new Nn(o.fieldMask),u=o.fieldTransforms;else if(r.mergeFields){const h=[];for(const f of r.mergeFields){const d=Nl(e,f,n);if(!o.contains(d))throw new ye(X.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);_g(h,d)||h.push(d)}l=new Nn(h),u=o.fieldTransforms.filter(f=>l.covers(f.field))}else l=null,u=o.fieldTransforms;return new Qw(new wn(a),l,u)}class _a extends Fu{_toFieldTransform(e){if(e.sa!==2)throw e.sa===1?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof _a}}function xw(t,e,n,s){const i=t.da(1,e,n);ju("Data must be an object, but it was:",i,s);const r=[],o=wn.empty();Ws(s,(l,u)=>{const h=qu(e,l,n);u=gn(u);const f=i.ca(h);if(u instanceof _a)r.push(h);else{const d=va(u,f);d!=null&&(r.push(h),o.set(h,d))}});const a=new Nn(r);return new fg(o,a,i.fieldTransforms)}function Jw(t,e,n,s,i,r){const o=t.da(1,e,n),a=[Nl(e,s,n)],l=[i];if(r.length%2!=0)throw new ye(X.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<r.length;d+=2)a.push(Nl(e,r[d])),l.push(r[d+1]);const u=[],h=wn.empty();for(let d=a.length-1;d>=0;--d)if(!_g(u,a[d])){const g=a[d];let _=l[d];_=gn(_);const v=o.ca(g);if(_ instanceof _a)u.push(g);else{const w=va(_,v);w!=null&&(u.push(g),h.set(g,w))}}const f=new Nn(u);return new fg(h,f,o.fieldTransforms)}function va(t,e){if(gg(t=gn(t)))return ju("Unsupported field value:",e,t),mg(t,e);if(t instanceof Fu)return function(n,s){if(!dg(s.sa))throw s.ha(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ha(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=va(o,s.aa(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(t,e)}return function(n,s){if((n=gn(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return B1(s.It,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Lt.fromDate(n);return{timestampValue:Ao(s.It,i)}}if(n instanceof Lt){const i=new Lt(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Ao(s.It,i)}}if(n instanceof Vu)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof _i)return{bytesValue:Bm(s.It,n._byteString)};if(n instanceof On){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s.ha(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Iu(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ha(`Unsupported field value: ${Uu(n)}`)}(t,e)}function mg(t,e){const n={};return _m(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ws(t,(s,i)=>{const r=va(i,e.ra(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function gg(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Lt||t instanceof Vu||t instanceof _i||t instanceof On||t instanceof Fu)}function ju(t,e,n){if(!gg(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Uu(n);throw s==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+s)}}function Nl(t,e,n){if((e=gn(e))instanceof ga)return e._internalPath;if(typeof e=="string")return qu(t,e);throw Ro("Field path arguments must be of type string or ",t,!1,void 0,n)}const Zw=new RegExp("[~\\*/\\[\\]]");function qu(t,e,n){if(e.search(Zw)>=0)throw Ro(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ga(...e.split("."))._internalPath}catch{throw Ro(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ro(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${s}`),o&&(l+=` in document ${i}`),l+=")"),new ye(X.INVALID_ARGUMENT,a+t+l)}function _g(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new On(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new ek(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(yg("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class ek extends vg{data(){return super.data()}}function yg(t,e){return typeof e=="string"?qu(t,e):e instanceof ga?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tk(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ye(X.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nk{convertValue(e,n="none"){switch(qs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Dt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(di(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Se()}}convertObject(e,n){const s={};return Ws(e.fields,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(e){return new Vu(Dt(e.latitude),Dt(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=ym(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Zi(e));default:return null}}convertTimestamp(e){const n=Es(e);return new Lt(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=dt.fromString(e);rt(Km(s));const i=new er(s.get(1),s.get(3)),r=new _e(s.popFirst(5));return i.isEqual(n)||Zn(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sk(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ik extends vg{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new no(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(yg("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class no extends ik{data(e={}){return super.data(e)}}class rk{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Yr(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new no(this._firestore,this._userDataWriter,s.key,s,new Yr(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ye(X.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>({type:"added",doc:new no(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Yr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter),oldIndex:-1,newIndex:r++}))}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new no(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Yr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,u=-1;return o.type!==0&&(l=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),u=r.indexOf(o.doc.key)),{type:ok(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function ok(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Se()}}class ak extends nk{constructor(e){super(),this.firestore=e}convertBytes(e){return new _i(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new On(this.firestore,null,n)}}function ya(t){t=Hs(t,ma);const e=Hs(t.firestore,Nr),n=cg(e),s=new ak(e);return tk(t._query),Kw(n,t._query).then(i=>new rk(e,s,t,i))}function ba(t,e,n,...s){t=Hs(t,On);const i=Hs(t.firestore,Nr),r=pg(i);let o;return o=typeof(e=gn(e))=="string"||e instanceof ga?Jw(r,"updateDoc",t._key,e,n,s):xw(r,"updateDoc",t._key,e),Hu(i,[o.toMutation(t._key,Ln.exists(!0))])}function wa(t){return Hu(Hs(t.firestore,Nr),[new Tu(t._key,Ln.none())])}function rr(t,e){const n=Hs(t.firestore,Nr),s=ss(t),i=sk(t.converter,e);return Hu(n,[Xw(pg(t.firestore),"addDoc",s._key,i,t.converter!==null,{}).toMutation(s._key,Ln.exists(!1))]).then(()=>s)}function Hu(t,e){return function(n,s){const i=new vs;return n.asyncQueue.enqueueAndForget(async()=>Tw(await qw(n),s,i)),i.promise}(cg(t),e)}(function(t,e=!0){(function(n){wi=n})(gr),ci(new Vs("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new Nr(new l1(n.getProvider("auth-internal")),new f1(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new ye(X.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new er(a.options.projectId,l)}(r,s),r);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),_s(Vc,"3.7.1",t),_s(Vc,"3.7.1","esm2017")})();const bg="/to-deploy-mh/assets/schedule.20f01954.png";function wg(t){const e=t-1;return e*e*e+1}function Po(t){return t===0||t===1?t:t<.5?.5*Math.pow(2,20*t-10):-.5*Math.pow(2,10-t*20)+1}function No(t,{delay:e=0,duration:n=400,easing:s=Td}={}){const i=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:s,css:r=>`opacity: ${r*i}`}}function Oo(t,{delay:e=0,duration:n=400,easing:s=wg,x:i=0,y:r=0,opacity:o=0}={}){const a=getComputedStyle(t),l=+a.opacity,u=a.transform==="none"?"":a.transform,h=l*(1-o);return{delay:e,duration:n,easing:s,css:(f,d)=>`
			transform: ${u} translate(${(1-f)*i}px, ${(1-f)*r}px);
			opacity: ${l-h*d}`}}function $o(t,{delay:e=0,duration:n=400,easing:s=wg,start:i=0,opacity:r=0}={}){const o=getComputedStyle(t),a=+o.opacity,l=o.transform==="none"?"":o.transform,u=1-i,h=a*(1-r);return{delay:e,duration:n,easing:s,css:(f,d)=>`
			transform: ${l} scale(${1-u*d});
			opacity: ${a-h*d}
		`}}const wt=tn(""),Ol=tn([]),kg=tn([]),lt=tn({typeContact:"",name:"",lastname:"",lastContact:"",telephon:"",email:"",selecMC:"",propCont:"",comContact:"",rangeProp:"",contMode:"",budget:"",numBeds:"",numBaths:"",halfBathroom:"",numParks:"",modePay:"",selecTP:"",contactType:"",contactStage:"",createdAt:"",locaProperty:[],tagsProperty:[],sendedProperties:[]}),it=tn({typeProperty:"",typeSaller:"",claveEB:"",claveMH:"",createdAt:"",nameProperty:"",price:"",beds:"",bathroom:"",halfBathroom:"",park:"",areaBuilding:"",areaTotal:"",description:"",urlImage:"",urlProp:"",urlSinergy:"",colonia:"",selecTP:"",selecTO:"",typeOperation:"",tagsProperty:[],locaProperty:[],binnacle:[]}),Dn=tn({task:"",isComplete:"",createdAt:"",endTask:"",timeTask:"",notes:"",user:""});var lk="firebase",uk="9.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_s(lk,uk,"app");function Ku(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function Eg(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ck=Eg,Tg=new pr("auth","Firebase",Eg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mh=new Ql("@firebase/auth");function so(t,...e){mh.logLevel<=je.ERROR&&mh.error(`Auth (${gr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mn(t,...e){throw zu(t,...e)}function Bn(t,...e){return zu(t,...e)}function hk(t,e,n){const s=Object.assign(Object.assign({},ck()),{[e]:n});return new pr("auth","Firebase",s).create(e,{appName:t.name})}function zu(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Tg.create(t,...e)}function ke(t,e,...n){if(!t)throw zu(e,...n)}function Wn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw so(e),new Error(e)}function is(t,e){t||Wn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function fk(t,e){const n=Xl(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(po(r,e!=null?e:{}))return i;Mn(i,"already-initialized")}return n.initialize({options:e})}function dk(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Qn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $l(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function pk(){return _h()==="http:"||_h()==="https:"}function _h(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(pk()||Ov()||"connection"in navigator)?navigator.onLine:!0}function gk(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(e,n){this.shortDelay=e,this.longDelay=n,is(n>e,"Short delay should be less than long delay!"),this.isMobile=Nv()||$v()}get(){return mk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Ig{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Wn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Wn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Wn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _k={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vk=new Or(3e4,6e4);function $r(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Lr(t,e,n,s,i={}){return Cg(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=mr(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Ig.fetch()(Sg(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function Cg(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},_k),e);try{const i=new yk(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Xr(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Xr(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Xr(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Xr(t,"user-disabled",o);const h=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw hk(t,h,u);Mn(t,h)}}catch(i){if(i instanceof rs)throw i;Mn(t,"network-request-failed")}}async function Mr(t,e,n,s,i={}){const r=await Lr(t,e,n,s,i);return"mfaPendingCredential"in r&&Mn(t,"multi-factor-auth-required",{_serverResponse:r}),r}function Sg(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?Gu(t.config,i):`${t.config.apiScheme}://${i}`}class yk{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Bn(this.auth,"network-request-failed")),vk.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Xr(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=Bn(t,e,s);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bk(t,e){return Lr(t,"POST","/v1/accounts:delete",e)}async function wk(t,e){return Lr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ki(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function kk(t,e=!1){const n=gn(t),s=await n.getIdToken(e),i=Wu(s);ke(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Ki(Qa(i.auth_time)),issuedAtTime:Ki(Qa(i.iat)),expirationTime:Ki(Qa(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Qa(t){return Number(t)*1e3}function Wu(t){var e;const[n,s,i]=t.split(".");if(n===void 0||s===void 0||i===void 0)return so("JWT malformed, contained fewer than 3 sections"),null;try{const r=ip(s);return r?JSON.parse(r):(so("Failed to decode base64 JWT payload"),null)}catch(r){return so("Caught error parsing JWT payload as JSON",(e=r)===null||e===void 0?void 0:e.toString()),null}}function Ek(t){const e=Wu(t);return ke(e,"internal-error"),ke(typeof e.exp<"u","internal-error"),ke(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function or(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof rs&&Tk(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function Tk({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ik{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ag{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ki(this.lastLoginAt),this.creationTime=Ki(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Lo(t){var e;const n=t.auth,s=await t.getIdToken(),i=await or(t,wk(n,{idToken:s}));ke(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?Ak(r.providerUserInfo):[],a=Sk(t.providerData,o),l=t.isAnonymous,u=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),h=l?u:!1,f={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Ag(r.createdAt,r.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function Ck(t){const e=gn(t);await Lo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Sk(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function Ak(t){return t.map(e=>{var{providerId:n}=e,s=Ku(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dk(t,e){const n=await Cg(t,{},async()=>{const s=mr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=Sg(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Ig.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ke(e.idToken,"internal-error"),ke(typeof e.idToken<"u","internal-error"),ke(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ek(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return ke(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await Dk(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new ar;return s&&(ke(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(ke(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(ke(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ar,this.toJSON())}_performRefresh(){return Wn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function as(t,e){ke(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ls{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=Ku(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ik(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Ag(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await or(this,this.stsTokenManager.getToken(this.auth,e));return ke(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return kk(this,e)}reload(){return Ck(this)}_assign(e){this!==e&&(ke(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Ls(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){ke(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Lo(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await or(this,bk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,u,h;const f=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,g=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,E=(u=n.createdAt)!==null&&u!==void 0?u:void 0,A=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:O,emailVerified:R,isAnonymous:F,providerData:$,stsTokenManager:U}=n;ke(O&&U,e,"internal-error");const Q=ar.fromJSON(this.name,U);ke(typeof O=="string",e,"internal-error"),as(f,e.name),as(d,e.name),ke(typeof R=="boolean",e,"internal-error"),ke(typeof F=="boolean",e,"internal-error"),as(g,e.name),as(_,e.name),as(v,e.name),as(w,e.name),as(E,e.name),as(A,e.name);const P=new Ls({uid:O,auth:e,email:d,emailVerified:R,displayName:f,isAnonymous:F,photoURL:_,phoneNumber:g,tenantId:v,stsTokenManager:Q,createdAt:E,lastLoginAt:A});return $&&Array.isArray($)&&(P.providerData=$.map(N=>Object.assign({},N))),w&&(P._redirectEventId=w),P}static async _fromIdTokenResponse(e,n,s=!1){const i=new ar;i.updateFromServerResponse(n);const r=new Ls({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Lo(r),r}}/**
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
 */class Dg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Dg.type="NONE";const vh=Dg;/**
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
 */function yh(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ng(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Rg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if($g(e))return"Blackberry";if(Lg(e))return"Webos";if(Qu(e))return"Safari";if((e.includes("chrome/")||Pg(e))&&!e.includes("edge/"))return"Chrome";if(Og(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Rg(t=dn()){return/firefox\//i.test(t)}function Qu(t=dn()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Pg(t=dn()){return/crios\//i.test(t)}function Ng(t=dn()){return/iemobile/i.test(t)}function Og(t=dn()){return/android/i.test(t)}function $g(t=dn()){return/blackberry/i.test(t)}function Lg(t=dn()){return/webos/i.test(t)}function ka(t=dn()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Rk(t=dn()){var e;return ka(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Pk(){return Lv()&&document.documentMode===10}function Mg(t=dn()){return ka(t)||Og(t)||Lg(t)||$g(t)||/windows phone/i.test(t)||Ng(t)}function Nk(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ug(t,e=[]){let n;switch(t){case"Browser":n=yh(dn());break;case"Worker":n=`${yh(dn())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${gr}/${s}`}/**
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
 */class Ok{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const s=[];try{for(const i of this.queue)await i(e),i.onAbort&&s.push(i.onAbort)}catch(i){s.reverse();for(const r of s)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $k{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new bh(this),this.idTokenSubscription=new bh(this),this.beforeStateQueue=new Ok(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Tg,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Qn(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await ri.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ke(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await Lo(e)}catch(s){if(((n=s)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=gk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?gn(e):null;return n&&ke(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ke(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Qn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new pr("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Qn(e)||this._popupRedirectResolver;ke(n,this,"argument-error"),this.redirectPersistenceManager=await ri.create(this,[Qn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return ke(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ke(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ug(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function Ur(t){return gn(t)}class bh{constructor(e){this.auth=e,this.observer=null,this.addObserver=Xv(n=>this.observer=n)}get next(){return ke(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Lk(t,e,n){const s=Ur(t);ke(s._canInitEmulator,s,"emulator-config-failed"),ke(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),r=Fg(e),{host:o,port:a}=Mk(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Uk()}function Fg(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Mk(t){const e=Fg(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:wh(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:wh(o)}}}function wh(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Uk(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Wn("not implemented")}_getIdTokenResponse(e){return Wn("not implemented")}_linkToIdToken(e,n){return Wn("not implemented")}_getReauthenticationResolver(e){return Wn("not implemented")}}async function Fk(t,e){return Lr(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vk(t,e){return Mr(t,"POST","/v1/accounts:signInWithPassword",$r(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bk(t,e){return Mr(t,"POST","/v1/accounts:signInWithEmailLink",$r(t,e))}async function jk(t,e){return Mr(t,"POST","/v1/accounts:signInWithEmailLink",$r(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr extends Yu{constructor(e,n,s,i=null){super("password",s),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new lr(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new lr(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Vk(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Bk(e,{email:this._email,oobCode:this._password});default:Mn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Fk(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return jk(e,{idToken:n,email:this._email,oobCode:this._password});default:Mn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const qk="http://localhost";class Ks extends Yu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ks(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Mn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=Ku(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new Ks(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return oi(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,oi(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,oi(e,n)}buildRequest(){const e={requestUri:qk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=mr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hk(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Kk(t){const e=Ni(Oi(t)).link,n=e?Ni(Oi(e)).deep_link_id:null,s=Ni(Oi(t)).deep_link_id;return(s?Ni(Oi(s)).link:null)||s||n||e||t}class Xu{constructor(e){var n,s,i,r,o,a;const l=Ni(Oi(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,h=(s=l.oobCode)!==null&&s!==void 0?s:null,f=Hk((i=l.mode)!==null&&i!==void 0?i:null);ke(u&&h&&f,"argument-error"),this.apiKey=u,this.operation=f,this.code=h,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Kk(e);try{return new Xu(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(){this.providerId=Ti.PROVIDER_ID}static credential(e,n){return lr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Xu.parseLink(n);return ke(s,"argument-error"),lr._fromEmailAndCode(e,s.code,s.tenantId)}}Ti.PROVIDER_ID="password";Ti.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ti.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Fr extends Vg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */async function zk(t,e){return Mr(t,"POST","/v1/accounts:signUp",$r(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Mo extends rs{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Mo.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new Mo(e,n,s,i)}}function Bg(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Mo._fromErrorAndOperation(t,r,e,s):r})}async function Gk(t,e,n=!1){const s=await or(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return zs._forOperation(t,"link",s)}/**
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
 */async function Wk(t,e,n=!1){var s;const{auth:i}=t,r="reauthenticate";try{const o=await or(t,Bg(i,r,e,t),n);ke(o.idToken,i,"internal-error");const a=Wu(o.idToken);ke(a,i,"internal-error");const{sub:l}=a;return ke(t.uid===l,i,"user-mismatch"),zs._forOperation(t,r,o)}catch(o){throw((s=o)===null||s===void 0?void 0:s.code)==="auth/user-not-found"&&Mn(i,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jg(t,e,n=!1){const s="signIn",i=await Bg(t,s,e),r=await zs._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}async function Qk(t,e){return jg(Ur(t),e)}async function Yk(t,e,n){const s=Ur(t),i=await zk(s,{returnSecureToken:!0,email:e,password:n}),r=await zs._fromIdTokenResponse(s,"signIn",i);return await s._updateCurrentUser(r.user),r}function Xk(t,e,n){return Qk(gn(t),Ti.credential(e,n))}function xk(t,e,n,s){return gn(t).onIdTokenChanged(e,n,s)}function Jk(t,e,n){return gn(t).beforeAuthStateChanged(e,n)}const Uo="__sak";/**
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
 */class qg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Uo,"1"),this.storage.removeItem(Uo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zk(){const t=dn();return Qu(t)||ka(t)}const eE=1e3,tE=10;class Hg extends qg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Zk()&&Nk(),this.fallbackToPolling=Mg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);Pk()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,tE):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},eE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Hg.type="LOCAL";const nE=Hg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kg extends qg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Kg.type="SESSION";const zg=Kg;/**
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
 */function sE(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ea{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new Ea(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,r)),l=await sE(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ea.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xu(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class iE{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const u=xu("",20);i.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(f){const d=f;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(h),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(h),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jn(){return window}function rE(t){jn().location.href=t}/**
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
 */function Gg(){return typeof jn().WorkerGlobalScope<"u"&&typeof jn().importScripts=="function"}async function oE(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function aE(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function lE(){return Gg()?self:null}/**
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
 */const Wg="firebaseLocalStorageDb",uE=1,Fo="firebaseLocalStorage",Qg="fbase_key";class Vr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ta(t,e){return t.transaction([Fo],e?"readwrite":"readonly").objectStore(Fo)}function cE(){const t=indexedDB.deleteDatabase(Wg);return new Vr(t).toPromise()}function Ll(){const t=indexedDB.open(Wg,uE);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Fo,{keyPath:Qg})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Fo)?e(s):(s.close(),await cE(),e(await Ll()))})})}async function Eh(t,e,n){const s=Ta(t,!0).put({[Qg]:e,value:n});return new Vr(s).toPromise()}async function hE(t,e){const n=Ta(t,!1).get(e),s=await new Vr(n).toPromise();return s===void 0?null:s.value}function Th(t,e){const n=Ta(t,!0).delete(e);return new Vr(n).toPromise()}const fE=800,dE=3;class Yg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ll(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>dE)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Gg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ea._getInstance(lE()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await oE(),!this.activeServiceWorker)return;this.sender=new iE(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);!s||((e=s[0])===null||e===void 0?void 0:e.fulfilled)&&((n=s[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||aE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ll();return await Eh(e,Uo,"1"),await Th(e,Uo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Eh(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>hE(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Th(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=Ta(i,!1).getAll();return new Vr(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),fE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Yg.type="LOCAL";const pE=Yg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mE(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function gE(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=Bn("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",mE().appendChild(s)})}function _E(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Or(3e4,6e4);/**
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
 */function vE(t,e){return e?Qn(e):(ke(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Ju extends Yu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return oi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return oi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return oi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function yE(t){return jg(t.auth,new Ju(t),t.bypassAuthState)}function bE(t){const{auth:e,user:n}=t;return ke(n,e,"internal-error"),Wk(n,new Ju(t),t.bypassAuthState)}async function wE(t){const{auth:e,user:n}=t;return ke(n,e,"internal-error"),Gk(n,new Ju(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return yE;case"linkViaPopup":case"linkViaRedirect":return wE;case"reauthViaPopup":case"reauthViaRedirect":return bE;default:Mn(this.auth,"internal-error")}}resolve(e){is(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){is(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kE=new Or(2e3,1e4);class ti extends Xg{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,ti.currentPopupAction&&ti.currentPopupAction.cancel(),ti.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ke(e,this.auth,"internal-error"),e}async onExecution(){is(this.filter.length===1,"Popup operations only handle one event");const e=xu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Bn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Bn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ti.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Bn(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,kE.get())};e()}}ti.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EE="pendingRedirect",ro=new Map;class TE extends Xg{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=ro.get(this.auth._key());if(!e){try{const s=await IE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}ro.set(this.auth._key(),e)}return this.bypassAuthState||ro.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function IE(t,e){const n=AE(e),s=SE(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function CE(t,e){ro.set(t._key(),e)}function SE(t){return Qn(t._redirectPersistence)}function AE(t){return io(EE,t.config.apiKey,t.name)}async function DE(t,e,n=!1){const s=Ur(t),i=vE(s,e),o=await new TE(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RE=10*60*1e3;class PE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!NE(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!xg(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Bn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=RE&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ih(e))}saveEventToCache(e){this.cachedEventUids.add(Ih(e)),this.lastProcessedEventTime=Date.now()}}function Ih(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function xg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function NE(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return xg(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OE(t,e={}){return Lr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $E=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,LE=/^https?/;async function ME(t){if(t.config.emulator)return;const{authorizedDomains:e}=await OE(t);for(const n of e)try{if(UE(n))return}catch{}Mn(t,"unauthorized-domain")}function UE(t){const e=$l(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!LE.test(n))return!1;if($E.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const FE=new Or(3e4,6e4);function Ch(){const t=jn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function VE(t){return new Promise((e,n)=>{var s,i,r;function o(){Ch(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ch(),n(Bn(t,"network-request-failed"))},timeout:FE.get()})}if(!((i=(s=jn().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=jn().gapi)===null||r===void 0)&&r.load)o();else{const a=_E("iframefcb");return jn()[a]=()=>{gapi.load?o():n(Bn(t,"network-request-failed"))},gE(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw oo=null,e})}let oo=null;function BE(t){return oo=oo||VE(t),oo}/**
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
 */const jE=new Or(5e3,15e3),qE="__/auth/iframe",HE="emulator/auth/iframe",KE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},zE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function GE(t){const e=t.config;ke(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Gu(e,HE):`https://${t.config.authDomain}/${qE}`,s={apiKey:e.apiKey,appName:t.name,v:gr},i=zE.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${mr(s).slice(1)}`}async function WE(t){const e=await BE(t),n=jn().gapi;return ke(n,t,"internal-error"),e.open({where:document.body,url:GE(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:KE,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=Bn(t,"network-request-failed"),a=jn().setTimeout(()=>{r(o)},jE.get());function l(){jn().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const QE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},YE=500,XE=600,xE="_blank",JE="http://localhost";class Sh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ZE(t,e,n,s=YE,i=XE){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},QE),{width:s.toString(),height:i.toString(),top:r,left:o}),u=dn().toLowerCase();n&&(a=Pg(u)?xE:n),Rg(u)&&(e=e||JE,l.scrollbars="yes");const h=Object.entries(l).reduce((d,[g,_])=>`${d}${g}=${_},`,"");if(Rk(u)&&a!=="_self")return eT(e||"",a),new Sh(null);const f=window.open(e||"",a,h);ke(f,t,"popup-blocked");try{f.focus()}catch{}return new Sh(f)}function eT(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const tT="__/auth/handler",nT="emulator/auth/handler";function Ah(t,e,n,s,i,r){ke(t.config.authDomain,t,"auth-domain-config-required"),ke(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:gr,eventId:i};if(e instanceof Vg){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Yv(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries(r||{}))o[l]=u}if(e instanceof Fr){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${sT(t)}?${mr(a).slice(1)}`}function sT({config:t}){return t.emulator?Gu(t,nT):`https://${t.authDomain}/${tT}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ya="webStorageSupport";class iT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=zg,this._completeRedirectFn=DE,this._overrideRedirectResult=CE}async _openPopup(e,n,s,i){var r;is((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=Ah(e,n,s,$l(),i);return ZE(e,o,xu())}async _openRedirect(e,n,s,i){return await this._originValidation(e),rE(Ah(e,n,s,$l(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(is(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await WE(e),s=new PE(e);return n.register("authEvent",i=>(ke(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ya,{type:Ya},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[Ya];o!==void 0&&n(!!o),Mn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ME(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Mg()||Qu()||ka()}}const rT=iT;var Dh="@firebase/auth",Rh="0.20.10";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{var i;e(((i=s)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ke(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aT(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function lT(t){ci(new Vs("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:r,authDomain:o}=s.options;return((a,l)=>{ke(r&&!r.includes(":"),"invalid-api-key",{appName:a.name}),ke(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:r,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ug(t)},h=new $k(a,l,u);return dk(h,n),h})(s,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),ci(new Vs("auth-internal",e=>{const n=Ur(e.getProvider("auth").getImmediate());return(s=>new oT(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),_s(Dh,Rh,aT(t)),_s(Dh,Rh,"esm2017")}/**
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
 */const uT=5*60,cT=op("authIdTokenMaxAge")||uT;let Ph=null;const hT=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>cT)return;const i=n==null?void 0:n.token;Ph!==i&&(Ph=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function fT(t=cp()){const e=Xl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=fk(t,{popupRedirectResolver:rT,persistence:[pE,nE,zg]}),s=op("authTokenSyncURL");if(s){const r=hT(s);Jk(n,r,()=>r(n.currentUser)),xk(n,o=>r(o))}const i=rp("auth");return i&&Lk(n,`http://${i}`),n}lT("Browser");let ur=[],Vn=[],Vo=[];const dT={apiKey:"AIzaSyDGi3ndUC1b4SFNstliSSVryu7_ymXEkZc",authDomain:"match-home-7d1f9.firebaseapp.com",databaseURL:"https://match-home-7d1f9-default-rtdb.firebaseio.com",projectId:"match-home-7d1f9",storageBucket:"match-home-7d1f9.appspot.com",messagingSenderId:"747751099607",appId:"1:747751099607:web:29d1e5beda87c847dfb492"},Jg=up(dT),sn=Gw(Jg),Zg=fT(Jg),pT=ns(sn,"binnacles"),mT=ns(sn,"contacts"),gT=ns(sn,"properties"),_T=ns(sn,"todos");ya(pT).then(t=>t.docs.map(e=>({...e.data(),id:e.id})));ya(mT).then(t=>ur=t.docs.map(e=>({...e.data(),id:e.id})));ya(gT).then(t=>Vn=t.docs.map(e=>({...e.data(),id:e.id})));ya(_T).then(t=>Vo=t.docs.map(e=>({...e.data(),id:e.id})));const vT=["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","S\xE1bado"],yT=["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"];function En(t){typeof t=="string"?t=new Date(t):t=new Date(t);let e=t.getDate()+1;e<10&&(e="0"+e);let n=yT[t.getMonth()],s=t.getFullYear();return`${e}/${n}/${s}`}function bT(t){t=new Date(t);let e=t.getMinutes();e.length<2&&(e="0"+e);let n=t.getHours();return n>12&&(n=n-12),n<10&&(n="0"+n),t.getDate(),`${n}:${e}`}function wT(t){return t=new Date(+t),`${vT[t.getDay()]}-`}function Nh(t,e,n){const s=t.slice();return s[21]=e[n],s}function Oh(t,e,n){const s=t.slice();return s[21]=e[n],s}function kT(t){let e;return{c(){e=D("Editar")},m(n,s){k(n,e,s)},d(n){n&&b(e)}}}function ET(t){let e;return{c(){e=D("Guardar")},m(n,s){k(n,e,s)},d(n){n&&b(e)}}}function $h(t){let e,n,s,i,r,o,a,l,u,h,f,d=t[1],g=[];for(let A=0;A<d.length;A+=1)g[A]=Fh(Oh(t,d,A));let _=null;d.length||(_=Lh());let v=t[1],w=[];for(let A=0;A<v.length;A+=1)w[A]=qh(Nh(t,v,A));let E=null;return v.length||(E=Vh()),{c(){e=p("h3"),e.textContent="Tareas",n=y(),s=p("ol");for(let A=0;A<g.length;A+=1)g[A].c();_&&_.c(),i=y(),r=p("p"),r.textContent=`${Hh}`,o=y(),a=p("h3"),a.textContent="Agenda",l=y(),u=p("ol");for(let A=0;A<w.length;A+=1)w[A].c();E&&E.c(),h=y(),f=p("p"),f.textContent=`${Hh}`,m(r,"class","error"),m(f,"class","error")},m(A,O){k(A,e,O),k(A,n,O),k(A,s,O);for(let R=0;R<g.length;R+=1)g[R].m(s,null);_&&_.m(s,null),c(s,i),c(s,r),k(A,o,O),k(A,a,O),k(A,l,O),k(A,u,O);for(let R=0;R<w.length;R+=1)w[R].m(u,null);E&&E.m(u,null),c(u,h),c(u,f)},p(A,O){if(O&50){d=A[1];let R;for(R=0;R<d.length;R+=1){const F=Oh(A,d,R);g[R]?g[R].p(F,O):(g[R]=Fh(F),g[R].c(),g[R].m(s,i))}for(;R<g.length;R+=1)g[R].d(1);g.length=d.length,!d.length&&_?_.p(A,O):d.length?_&&(_.d(1),_=null):(_=Lh(),_.c(),_.m(s,i))}if(O&50){v=A[1];let R;for(R=0;R<v.length;R+=1){const F=Nh(A,v,R);w[R]?w[R].p(F,O):(w[R]=qh(F),w[R].c(),w[R].m(u,h))}for(;R<w.length;R+=1)w[R].d(1);w.length=v.length,!v.length&&E?E.p(A,O):v.length?E&&(E.d(1),E=null):(E=Vh(),E.c(),E.m(u,h))}},d(A){A&&b(e),A&&b(n),A&&b(s),He(g,A),_&&_.d(),A&&b(o),A&&b(a),A&&b(l),A&&b(u),He(w,A),E&&E.d()}}}function Lh(t){let e;return{c(){e=p("p"),e.textContent="No Hay Tareas Pendientes"},m(n,s){k(n,e,s)},p:ue,d(n){n&&b(e)}}}function Mh(t){let e,n,s,i,r,o,a,l,u,h,f=En(t[21].endTask)+"",d,g,_=t[21].task+"",v,w,E,A;function O(){return t[11](t[21])}function R(){return t[12](t[21])}function F(){return t[13](t[21])}let $=t[21].notes&&Uh(t);return{c(){e=p("div"),n=p("li"),s=p("span"),i=p("button"),i.textContent="\u2714",r=y(),o=p("button"),o.textContent="\u2716",a=y(),l=p("button"),l.textContent="\u2714\u2716",u=y(),h=p("spam"),d=D(f),g=D(` -*-\r
                                 `),v=D(_),w=D(` -*-\r
                                 `),$&&$.c(),m(n,"class","schedule svelte-1e3ab80"),li(n,"complete",t[21].isComplete)},m(U,Q){k(U,e,Q),c(e,n),c(n,s),c(s,i),c(s,r),c(s,o),c(s,a),c(s,l),c(n,u),c(n,h),c(h,d),c(h,g),c(h,v),c(h,w),$&&$.m(h,null),E||(A=[B(i,"click",O),B(o,"click",R),B(l,"click",F)],E=!0)},p(U,Q){t=U,Q&2&&f!==(f=En(t[21].endTask)+"")&&ie(d,f),Q&2&&_!==(_=t[21].task+"")&&ie(v,_),t[21].notes?$?$.p(t,Q):($=Uh(t),$.c(),$.m(h,null)):$&&($.d(1),$=null),Q&2&&li(n,"complete",t[21].isComplete)},d(U){U&&b(e),$&&$.d(),E=!1,xe(A)}}}function Uh(t){let e=t[21].notes+"",n;return{c(){n=D(e)},m(s,i){k(s,n,i)},p(s,i){i&2&&e!==(e=s[21].notes+"")&&ie(n,e)},d(s){s&&b(n)}}}function Fh(t){let e,n=!t[21].timeTask&&Mh(t);return{c(){n&&n.c(),e=_n()},m(s,i){n&&n.m(s,i),k(s,e,i)},p(s,i){s[21].timeTask?n&&(n.d(1),n=null):n?n.p(s,i):(n=Mh(s),n.c(),n.m(e.parentNode,e))},d(s){n&&n.d(s),s&&b(e)}}}function Vh(t){let e;return{c(){e=p("p"),e.textContent="No Hay Tareas Pendientes"},m(n,s){k(n,e,s)},p:ue,d(n){n&&b(e)}}}function Bh(t){let e,n,s,i,r,o,a,l,u,h,f=t[21].timeTask+"",d,g,_=En(t[21].endTask)+"",v,w,E=t[21].task+"",A,O,R,F;function $(){return t[14](t[21])}function U(){return t[15](t[21])}function Q(){return t[16](t[21])}let P=t[21].notes&&jh(t);return{c(){e=p("div"),n=p("li"),s=p("span"),i=p("button"),i.textContent="\u2714",r=y(),o=p("button"),o.textContent="\u2716",a=y(),l=p("button"),l.textContent="\u2714\u2716",u=y(),h=p("spam"),d=D(f),g=D(` -*-\r
                                 `),v=D(_),w=D(` -*-\r
                                 `),A=D(E),O=D(` -*-\r
                                 `),P&&P.c(),m(n,"class","schedule svelte-1e3ab80"),li(n,"complete",t[21].isComplete)},m(N,K){k(N,e,K),c(e,n),c(n,s),c(s,i),c(s,r),c(s,o),c(s,a),c(s,l),c(n,u),c(n,h),c(h,d),c(h,g),c(h,v),c(h,w),c(h,A),c(h,O),P&&P.m(h,null),R||(F=[B(i,"click",$),B(o,"click",U),B(l,"click",Q),B(e,"dblclick",t[17])],R=!0)},p(N,K){t=N,K&2&&f!==(f=t[21].timeTask+"")&&ie(d,f),K&2&&_!==(_=En(t[21].endTask)+"")&&ie(v,_),K&2&&E!==(E=t[21].task+"")&&ie(A,E),t[21].notes?P?P.p(t,K):(P=jh(t),P.c(),P.m(h,null)):P&&(P.d(1),P=null),K&2&&li(n,"complete",t[21].isComplete)},d(N){N&&b(e),P&&P.d(),R=!1,xe(F)}}}function jh(t){let e=t[21].notes+"",n;return{c(){n=D(e)},m(s,i){k(s,n,i)},p(s,i){i&2&&e!==(e=s[21].notes+"")&&ie(n,e)},d(s){s&&b(n)}}}function qh(t){let e,n=t[21].timeTask&&Bh(t);return{c(){n&&n.c(),e=_n()},m(s,i){n&&n.m(s,i),k(s,e,i)},p(s,i){s[21].timeTask?n?n.p(s,i):(n=Bh(s),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(s){n&&n.d(s),s&&b(e)}}}function TT(t){let e,n,s,i,r,o,a,l,u,h,f,d,g,_,v,w,E,A,O,R,F,$,U,Q,P,N,K,L,se,Z,G,q;function ee(S,re){return S[0]?kT:ET}let C=ee(t),H=C(t),W=!t[0]&&$h(t);return{c(){e=p("div"),n=p("h1"),n.textContent="Agenda",s=y(),i=p("img"),o=y(),a=p("div"),l=p("div"),h=y(),f=p("div"),d=p("div"),g=p("input"),_=y(),v=p("div"),w=p("input"),E=y(),A=p("input"),O=y(),R=p("div"),F=p("textarea"),$=y(),U=p("div"),Q=p("button"),H.c(),P=y(),N=p("button"),N.textContent="Cancelar",L=y(),se=p("div"),W&&W.c(),fn(i.src,r=bg)||m(i,"src",r),m(i,"alt","schedule"),m(i,"class","imgTitle svelte-1e3ab80"),m(l,"class","background"),m(g,"type","text"),m(g,"class","inputTask"),m(g,"cols","56"),m(g,"rows","1"),m(g,"placeholder","Agrega una Tarea o Cita"),m(w,"type","time"),m(w,"class","inputDate"),m(A,"type","date"),m(A,"class","inputDate"),m(v,"class","contDate"),m(F,"name","notes"),m(F,"id",""),m(F,"cols","56"),m(F,"rows","5"),m(F,"placeholder","descripci\xF3n"),m(f,"class","pop-up"),m(a,"class","container"),m(se,"class","container"),m(e,"class","container")},m(S,re){k(S,e,re),c(e,n),c(e,s),c(e,i),c(e,o),c(e,a),c(a,l),c(a,h),c(a,f),c(f,d),c(d,g),de(g,t[2].task),c(f,_),c(f,v),c(v,w),de(w,t[2].timeTask),c(v,E),c(v,A),de(A,t[2].endTask),c(f,O),c(f,R),c(R,F),de(F,t[2].notes),c(f,$),c(f,U),c(U,Q),H.m(Q,null),c(U,P),c(U,N),c(e,L),c(e,se),W&&W.m(se,null),Z=!0,G||(q=[B(l,"keydown",t[6]),B(g,"input",t[7]),B(w,"input",t[8]),B(A,"input",t[9]),B(F,"input",t[10]),B(Q,"click",t[3]),B(N,"click",t[6])],G=!0)},p(S,[re]){re&4&&g.value!==S[2].task&&de(g,S[2].task),re&4&&de(w,S[2].timeTask),re&4&&de(A,S[2].endTask),re&4&&de(F,S[2].notes),C!==(C=ee(S))&&(H.d(1),H=C(S),H&&(H.c(),H.m(Q,null))),S[0]?W&&(W.d(1),W=null):W?W.p(S,re):(W=$h(S),W.c(),W.m(se,null))},i(S){Z||(Ze(()=>{u||(u=Pn(l,No,{},!0)),u.run(1)}),Ze(()=>{K||(K=Pn(f,Oo,{},!0)),K.run(1)}),Z=!0)},o(S){u||(u=Pn(l,No,{},!1)),u.run(0),K||(K=Pn(f,Oo,{},!1)),K.run(0),Z=!1},d(S){S&&b(e),S&&u&&u.end(),H.d(),S&&K&&K.end(),W&&W.d(),G=!1,xe(q)}}}let Hh="";function IT(t,e,n){let s,i;Ve(t,Dn,$=>n(2,i=$));const r=vi();let o=!1;Vo.sort(($,U)=>$.endTask<U.endTask?1:$.endTask>U.endTask?-1:0);async function a(){if(console.log(o),o)await ba(ss(sn,"todos",i.id),i),n(0,o=!1),console.log(o);else{const $=ns(sn,"todos");await rr($,i),console.log(o)}mt(Dn,i=[],i),r("/")}async function l($){confirm("Quieres borrarlo definitivmente?")==!0&&(console.log($),await wa(ss(sn,"todos",$)))}async function u($){mt(Dn,i=$,i),console.log(i),n(0,o=!0)}function h(){mt(Dn,i=[],i),r("/contactos")}function f(){i.task=this.value,Dn.set(i)}function d(){i.timeTask=this.value,Dn.set(i)}function g(){i.endTask=this.value,Dn.set(i)}function _(){i.notes=this.value,Dn.set(i)}const v=$=>($.id,void 0),w=$=>l($.id),E=$=>u($),A=$=>($.id,void 0),O=$=>l($.id),R=$=>u($),F=()=>u;return n(1,s=Vo),[o,s,i,a,l,u,h,f,d,g,_,v,w,E,A,O,R,F]}class e_ extends Ye{constructor(e){super(),Qe(this,e,IT,TT,ze,{})}}function CT(t){let e;return{c(){e=p("h1"),e.textContent="Estas en Sinergias"},m(n,s){k(n,e,s)},p:ue,i:ue,o:ue,d(n){n&&b(e)}}}class t_ extends Ye{constructor(e){super(),Qe(this,e,null,CT,ze,{})}}function ST(t){let e;return{c(){e=D("Inicia sesi\xF3n")},m(n,s){k(n,e,s)},d(n){n&&b(e)}}}function AT(t){let e,n,s,i,r,o,a,l,u,h,f,d,g,_,v,w,E,A,O,R,F,$,U,Q,P,N,K,L,se;return N=new Tn({props:{to:"/login",$$slots:{default:[ST]},$$scope:{ctx:t}}}),{c(){e=p("div"),n=p("br"),s=p("br"),i=p("br"),r=y(),o=p("div"),a=p("h1"),a.textContent="Registra tu cuenta",l=y(),u=p("div"),h=p("input"),f=y(),d=p("div"),g=p("input"),_=y(),v=p("br"),w=y(),E=p("div"),A=p("button"),A.textContent="Registrarse",O=y(),R=p("p"),R.textContent="O tambi\xE9n",F=y(),$=p("br"),U=y(),Q=p("p"),P=D("\xBFYa tienes cuenta? "),le(N.$$.fragment),m(a,"class","text-center text-login svelte-ftg4em"),m(h,"name","email"),m(h,"type","email"),m(h,"class","input-form svelte-ftg4em"),m(h,"placeholder","Correo"),h.required=!0,m(u,"class","center svelte-ftg4em"),m(g,"name","password"),m(g,"type","password"),m(g,"class","input-form svelte-ftg4em"),m(g,"placeholder","Contrase\xF1a"),m(d,"class","center svelte-ftg4em"),m(A,"class","button-signup fondo-color-signup svelte-ftg4em"),m(E,"class","center svelte-ftg4em"),m(R,"class","text-center svelte-ftg4em"),m(Q,"class","text-center svelte-ftg4em"),m(o,"class","form-signin svelte-ftg4em")},m(Z,G){k(Z,e,G),c(e,n),c(e,s),c(e,i),c(e,r),c(e,o),c(o,a),c(o,l),c(o,u),c(u,h),c(o,f),c(o,d),c(d,g),c(o,_),c(o,v),c(o,w),c(o,E),c(E,A),c(o,O),c(o,R),c(o,F),c(o,$),c(o,U),c(o,Q),c(Q,P),oe(N,Q,null),K=!0,L||(se=[B(h,"input",t[2]),B(g,"input",t[3]),B(A,"click",t[1])],L=!0)},p(Z,[G]){const q={};G&64&&(q.$$scope={dirty:G,ctx:Z}),N.$set(q)},i(Z){K||(j(N.$$.fragment,Z),K=!0)},o(Z){z(N.$$.fragment,Z),K=!1},d(Z){Z&&b(e),ae(N),L=!1,xe(se)}}}function DT(t){const e=vi();let n={email:"",password:""};const s=a=>{n={...n,[a.target.name]:a.target.value}};return[s,async()=>{try{await Yk(Zg,n.email,n.password),e("/")}catch(a){console.log(a)}},a=>s(a),a=>s(a)]}class Zu extends Ye{constructor(e){super(),Qe(this,e,DT,AT,ze,{})}}function Kh(t,e,n){const s=t.slice();return s[1]=e[n],s}function zh(t,e,n){const s=t.slice();return s[1]=e[n],s}function RT(t){let e,n,s=En(t[1].endTask)+"",i,r,o=t[1].task+"",a,l,u=t[1].notes&&PT(t);return{c(){e=p("ul"),n=p("li"),i=D(s),r=D(` - -\r
                    `),a=D(o),l=D(` - -\r
                    `),u&&u.c(),li(n,"complete",t[1].isComplete)},m(h,f){k(h,e,f),c(e,n),c(n,i),c(n,r),c(n,a),c(n,l),u&&u.m(n,null)},p(h,f){h[1].notes&&u.p(h,f)},d(h){h&&b(e),u&&u.d()}}}function PT(t){let e=t[1].notes+"",n;return{c(){n=D(e)},m(s,i){k(s,n,i)},p:ue,d(s){s&&b(n)}}}function Gh(t){let e,n=!t[1].timeTask&&RT(t);return{c(){n&&n.c(),e=_n()},m(s,i){n&&n.m(s,i),k(s,e,i)},p(s,i){s[1].timeTask||n.p(s,i)},d(s){n&&n.d(s),s&&b(e)}}}function NT(t){let e,n,s,i=wT(t[1].endTask)+"",r,o,a=bT(t[1].endTask)+"",l,u,h=En(t[1].endTask)+"",f,d,g=t[1].task+"",_,v,w=t[1].notes&&OT(t);return{c(){e=p("ul"),n=p("li"),s=p("spam"),r=D(i),o=y(),l=D(a),u=D(` - -\r
                      `),f=D(h),d=y(),_=D(g),v=D(` - -\r
                      `),w&&w.c(),m(s,"type","number"),li(n,"complete",t[1].isComplete)},m(E,A){k(E,e,A),c(e,n),c(n,s),c(s,r),c(s,o),c(s,l),c(s,u),c(s,f),c(s,d),c(s,_),c(s,v),w&&w.m(s,null)},p(E,A){E[1].notes&&w.p(E,A)},d(E){E&&b(e),w&&w.d()}}}function OT(t){let e=t[1].notes+"",n;return{c(){n=D(e)},m(s,i){k(s,n,i)},p:ue,d(s){s&&b(n)}}}function Wh(t){let e,n=t[1].timeTask&&NT(t);return{c(){n&&n.c(),e=y()},m(s,i){n&&n.m(s,i),k(s,e,i)},p(s,i){s[1].timeTask&&n.p(s,i)},d(s){n&&n.d(s),s&&b(e)}}}function $T(t){let e,n,s,i,r,o,a,l,u,h,f=t[0],d=[];for(let v=0;v<f.length;v+=1)d[v]=Gh(zh(t,f,v));let g=t[0],_=[];for(let v=0;v<g.length;v+=1)_[v]=Wh(Kh(t,g,v));return{c(){e=p("div"),n=p("div"),s=p("div"),i=p("h1"),i.textContent="Agenda",r=y(),o=p("h3"),o.textContent="Tareas",a=y();for(let v=0;v<d.length;v+=1)d[v].c();l=y(),u=p("h3"),u.textContent="Citas",h=y();for(let v=0;v<_.length;v+=1)_[v].c();m(i,"class","title svelte-13rvwi6"),m(o,"class","subtitle svelte-13rvwi6"),m(u,"class","subtitle svelte-13rvwi6"),m(s,"class","schedule"),m(n,"class","container"),m(e,"class","show-home")},m(v,w){k(v,e,w),c(e,n),c(n,s),c(s,i),c(s,r),c(s,o),c(s,a);for(let E=0;E<d.length;E+=1)d[E].m(s,null);c(s,l),c(s,u),c(s,h);for(let E=0;E<_.length;E+=1)_[E].m(s,null)},p(v,[w]){if(w&1){f=v[0];let E;for(E=0;E<f.length;E+=1){const A=zh(v,f,E);d[E]?d[E].p(A,w):(d[E]=Gh(A),d[E].c(),d[E].m(s,l))}for(;E<d.length;E+=1)d[E].d(1);d.length=f.length}if(w&1){g=v[0];let E;for(E=0;E<g.length;E+=1){const A=Kh(v,g,E);_[E]?_[E].p(A,w):(_[E]=Wh(A),_[E].c(),_[E].m(s,null))}for(;E<_.length;E+=1)_[E].d(1);_.length=g.length}},i:ue,o:ue,d(v){v&&b(e),He(d,v),He(_,v)}}}function LT(t){return[Vo]}class MT extends Ye{constructor(e){super(),Qe(this,e,LT,$T,ze,{})}}const n_="/to-deploy-mh/assets/add-user.1bd66bde.png",s_="/to-deploy-mh/assets/house.99302696.png",UT="/to-deploy-mh/assets/team.31fda88c.png",Qh=tn(!1);function FT(t){let e,n,s,i,r,o;return{c(){e=p("div"),n=p("div"),s=p("img"),r=y(),o=p("h1"),o.textContent="Contactos",fn(s.src,i=n_)||m(s,"src",i),m(s,"alt","Buzon"),m(s,"class","profile-img svelte-56q34v"),m(o,"class","name svelte-56q34v"),m(n,"class","optionCard svelte-56q34v"),m(e,"class","container")},m(a,l){k(a,e,l),c(e,n),c(n,s),c(n,r),c(n,o)},p:ue,d(a){a&&b(e)}}}function VT(t){let e,n,s,i,r,o;return{c(){e=p("div"),n=p("div"),s=p("img"),r=y(),o=p("h1"),o.textContent="Propiedades",fn(s.src,i=s_)||m(s,"src",i),m(s,"alt","propiedad"),m(s,"class","profile-img svelte-56q34v"),m(o,"class","name svelte-56q34v"),m(n,"class","optionCard svelte-56q34v"),m(e,"class","container")},m(a,l){k(a,e,l),c(e,n),c(n,s),c(n,r),c(n,o)},p:ue,d(a){a&&b(e)}}}function BT(t){let e,n,s,i,r,o;return{c(){e=p("div"),n=p("div"),s=p("img"),r=y(),o=p("h1"),o.textContent="Agenda",fn(s.src,i=bg)||m(s,"src",i),m(s,"alt","agenda"),m(s,"class","profile-img svelte-56q34v"),m(o,"class","name svelte-56q34v"),m(n,"class","optionCard svelte-56q34v"),m(e,"class","container")},m(a,l){k(a,e,l),c(e,n),c(n,s),c(n,r),c(n,o)},p:ue,d(a){a&&b(e)}}}function jT(t){let e,n,s,i,r,o;return{c(){e=p("div"),n=p("div"),s=p("img"),r=y(),o=p("h1"),o.textContent="Sinergias",fn(s.src,i=UT)||m(s,"src",i),m(s,"alt","sinergias"),m(s,"class","profile-img svelte-56q34v"),m(o,"class","name svelte-56q34v"),m(n,"class","optionCard svelte-56q34v"),m(e,"class","container")},m(a,l){k(a,e,l),c(e,n),c(n,s),c(n,r),c(n,o)},p:ue,d(a){a&&b(e)}}}function qT(t){let e,n,s,i,r,o,a,l;return e=new Tn({props:{to:"/contactos",title:"contactos",$$slots:{default:[FT]},$$scope:{ctx:t}}}),s=new Tn({props:{to:"/propiedades",title:"propiedades",$$slots:{default:[VT]},$$scope:{ctx:t}}}),r=new Tn({props:{to:"/agenda",title:"agenda",class:"s",$$slots:{default:[BT]},$$scope:{ctx:t}}}),a=new Tn({props:{to:"/sinergias",title:"sinergias",$$slots:{default:[jT]},$$scope:{ctx:t}}}),{c(){le(e.$$.fragment),n=y(),le(s.$$.fragment),i=y(),le(r.$$.fragment),o=y(),le(a.$$.fragment)},m(u,h){oe(e,u,h),k(u,n,h),oe(s,u,h),k(u,i,h),oe(r,u,h),k(u,o,h),oe(a,u,h),l=!0},p(u,h){const f={};h&1&&(f.$$scope={dirty:h,ctx:u}),e.$set(f);const d={};h&1&&(d.$$scope={dirty:h,ctx:u}),s.$set(d);const g={};h&1&&(g.$$scope={dirty:h,ctx:u}),r.$set(g);const _={};h&1&&(_.$$scope={dirty:h,ctx:u}),a.$set(_)},i(u){l||(j(e.$$.fragment,u),j(s.$$.fragment,u),j(r.$$.fragment,u),j(a.$$.fragment,u),l=!0)},o(u){z(e.$$.fragment,u),z(s.$$.fragment,u),z(r.$$.fragment,u),z(a.$$.fragment,u),l=!1},d(u){ae(e,u),u&&b(n),ae(s,u),u&&b(i),ae(r,u),u&&b(o),ae(a,u)}}}function HT(t){let e,n;return e=new e_({}),{c(){le(e.$$.fragment)},m(s,i){oe(e,s,i),n=!0},i(s){n||(j(e.$$.fragment,s),n=!0)},o(s){z(e.$$.fragment,s),n=!1},d(s){ae(e,s)}}}function KT(t){let e,n;return e=new t_({}),{c(){le(e.$$.fragment)},m(s,i){oe(e,s,i),n=!0},i(s){n||(j(e.$$.fragment,s),n=!0)},o(s){z(e.$$.fragment,s),n=!1},d(s){ae(e,s)}}}function zT(t){let e,n;return e=new Zu({}),{c(){le(e.$$.fragment)},m(s,i){oe(e,s,i),n=!0},i(s){n||(j(e.$$.fragment,s),n=!0)},o(s){z(e.$$.fragment,s),n=!1},d(s){ae(e,s)}}}function GT(t){let e,n;return e=new Zu({}),{c(){le(e.$$.fragment)},m(s,i){oe(e,s,i),n=!0},i(s){n||(j(e.$$.fragment,s),n=!0)},o(s){z(e.$$.fragment,s),n=!1},d(s){ae(e,s)}}}function WT(t){let e,n,s,i,r,o,a,l,u,h,f,d,g,_,v;return s=new Gl({props:{$$slots:{default:[qT]},$$scope:{ctx:t}}}),r=new bn({props:{path:"/agenda",$$slots:{default:[HT]},$$scope:{ctx:t}}}),a=new bn({props:{path:"/sinergias",$$slots:{default:[KT]},$$scope:{ctx:t}}}),u=new bn({props:{path:"/login",$$slots:{default:[zT]},$$scope:{ctx:t}}}),f=new bn({props:{path:"/registro",$$slots:{default:[GT]},$$scope:{ctx:t}}}),_=new MT({props:{"(orderTodos)":!0}}),{c(){e=p("body"),n=p("div"),le(s.$$.fragment),i=y(),le(r.$$.fragment),o=y(),le(a.$$.fragment),l=y(),le(u.$$.fragment),h=y(),le(f.$$.fragment),d=y(),g=p("div"),le(_.$$.fragment),m(n,"class","wrapper-grid svelte-56q34v"),m(g,"class","")},m(w,E){k(w,e,E),c(e,n),oe(s,n,null),c(n,i),oe(r,n,null),c(n,o),oe(a,n,null),c(n,l),oe(u,n,null),c(n,h),oe(f,n,null),c(e,d),c(e,g),oe(_,g,null),v=!0},p(w,[E]){const A={};E&1&&(A.$$scope={dirty:E,ctx:w}),s.$set(A);const O={};E&1&&(O.$$scope={dirty:E,ctx:w}),r.$set(O);const R={};E&1&&(R.$$scope={dirty:E,ctx:w}),a.$set(R);const F={};E&1&&(F.$$scope={dirty:E,ctx:w}),u.$set(F);const $={};E&1&&($.$$scope={dirty:E,ctx:w}),f.$set($)},i(w){v||(j(s.$$.fragment,w),j(r.$$.fragment,w),j(a.$$.fragment,w),j(u.$$.fragment,w),j(f.$$.fragment,w),j(_.$$.fragment,w),v=!0)},o(w){z(s.$$.fragment,w),z(r.$$.fragment,w),z(a.$$.fragment,w),z(u.$$.fragment,w),z(f.$$.fragment,w),z(_.$$.fragment,w),v=!1},d(w){w&&b(e),ae(s),ae(r),ae(a),ae(u),ae(f),ae(_)}}}class QT extends Ye{constructor(e){super(),Qe(this,e,null,WT,ze,{})}}function YT(t){let e,n,s,i,r,o,a,l,u,h,f=En(t[2])+"",d,g,_,v,w,E,A,O,R,F,$,U,Q,P,N,K,L,se,Z;return{c(){e=p("div"),n=p("div"),s=p("div"),i=p("h5"),r=D(t[0]),o=y(),a=D(t[1]),l=y(),u=p("h5"),h=D("Alta "),d=D(f),g=y(),_=p("div"),v=p("p"),w=D(t[3]),E=y(),A=p("p"),O=D("tel: "),R=D(t[4]),F=D(" email: "),$=D(t[5]),U=y(),Q=p("p"),P=D("Presupuesto "),N=D(t[6]),K=y(),L=p("p"),se=D("Rango "),Z=D(t[7]),m(s,"class","namePerson svelte-1uuhgxf"),m(_,"class","nameDate svelte-1uuhgxf"),m(n,"class","contactCard"),m(e,"class","container contact svelte-1uuhgxf")},m(G,q){k(G,e,q),c(e,n),c(n,s),c(s,i),c(i,r),c(i,o),c(i,a),c(s,l),c(s,u),c(u,h),c(u,d),c(n,g),c(n,_),c(_,v),c(v,w),c(_,E),c(_,A),c(A,O),c(A,R),c(A,F),c(A,$),c(_,U),c(_,Q),c(Q,P),c(Q,N),c(_,K),c(_,L),c(L,se),c(L,Z)},p(G,[q]){q&1&&ie(r,G[0]),q&2&&ie(a,G[1]),q&4&&f!==(f=En(G[2])+"")&&ie(d,f),q&8&&ie(w,G[3]),q&16&&ie(R,G[4]),q&32&&ie($,G[5]),q&64&&ie(N,G[6]),q&128&&ie(Z,G[7])},i:ue,o:ue,d(G){G&&b(e)}}}function XT(t,e,n){let{name:s,lastname:i,createdAt:r,contactStage:o,telephon:a,email:l,budget:u,rangeProp:h}=e;return t.$$set=f=>{"name"in f&&n(0,s=f.name),"lastname"in f&&n(1,i=f.lastname),"createdAt"in f&&n(2,r=f.createdAt),"contactStage"in f&&n(3,o=f.contactStage),"telephon"in f&&n(4,a=f.telephon),"email"in f&&n(5,l=f.email),"budget"in f&&n(6,u=f.budget),"rangeProp"in f&&n(7,h=f.rangeProp)},[s,i,r,o,a,l,u,h]}class xT extends Ye{constructor(e){super(),Qe(this,e,XT,YT,ze,{name:0,lastname:1,createdAt:2,contactStage:3,telephon:4,email:5,budget:6,rangeProp:7})}}function JT(t){let e,n,s,i;return{c(){e=p("div"),n=p("input"),m(n,"class","searchInput svelte-6bonih"),m(n,"type","text"),m(n,"id","search-field"),m(n,"placeholder","Enter Search Term"),m(n,"autocomplete","off"),m(e,"id","search-input-cont")},m(r,o){k(r,e,o),c(e,n),de(n,t[0]),s||(i=[B(n,"input",t[2]),B(n,"input",t[1])],s=!0)},p(r,[o]){o&1&&n.value!==r[0]&&de(n,r[0])},i:ue,o:ue,d(r){r&&b(e),s=!1,xe(i)}}}function ZT(t,e,n){let{searchTerm:s}=e;function i(o){k_.call(this,t,o)}function r(){s=this.value,n(0,s)}return t.$$set=o=>{"searchTerm"in o&&n(0,s=o.searchTerm)},[s,i,r]}class ec extends Ye{constructor(e){super(),Qe(this,e,ZT,JT,ze,{searchTerm:0})}}async function i_(t,e){if(console.log("estas en la funcion"),t==="todoAdding"){const n=ns(sn,"todos");await rr(n,e)}else t==="todoUpdate"?await ba(ss(sn,"todos",e.id),e):t==="todoDelete"&&await wa(ss(sn,"todos",e.id));e=""}function eI(t){let e,n,s,i,r,o,a,l,u,h,f,d,g,_,v,w,E,A,O,R,F,$,U,Q;return{c(){e=p("body"),n=p("div"),i=y(),r=p("div"),o=p("div"),a=p("input"),l=y(),u=p("div"),h=p("input"),f=y(),d=p("input"),g=y(),_=p("div"),v=p("textarea"),w=y(),E=p("div"),A=p("button"),A.textContent="Guardar",O=y(),R=p("button"),R.textContent="Cancelar",m(n,"class","background svelte-5uk41o"),m(a,"type","text"),m(a,"class","inputTask svelte-5uk41o"),m(a,"placeholder","Agrega una Tarea o Cita"),m(h,"type","time"),m(h,"class","inputDate svelte-5uk41o"),m(d,"type","date"),m(d,"class","inputDate svelte-5uk41o"),m(u,"class","contDate"),m(v,"name","notes"),m(v,"cols","56"),m(v,"rows","5"),m(v,"placeholder","descripci\xF3n"),m(A,"class","btnShedule svelte-5uk41o"),m(R,"class","btnShedule svelte-5uk41o"),m(r,"class","pop-up svelte-5uk41o")},m(P,N){k(P,e,N),c(e,n),c(e,i),c(e,r),c(r,o),c(o,a),de(a,t[0]),c(r,l),c(r,u),c(u,h),de(h,t[1].timeTask),c(u,f),c(u,d),de(d,t[1].endTask),c(r,g),c(r,_),c(_,v),de(v,t[1].notes),c(r,w),c(r,E),c(E,A),c(E,O),c(E,R),$=!0,U||(Q=[B(window,"keydown",t[4]),B(n,"click",t[2]),B(a,"input",t[5]),B(h,"input",t[6]),B(d,"input",t[7]),B(v,"input",t[8]),B(A,"click",t[3]),B(R,"click",t[2])],U=!0)},p(P,[N]){N&1&&a.value!==P[0]&&de(a,P[0]),N&2&&de(h,P[1].timeTask),N&2&&de(d,P[1].endTask),N&2&&de(v,P[1].notes)},i(P){$||(Ze(()=>{s||(s=Pn(n,No,{},!0)),s.run(1)}),Ze(()=>{F||(F=Pn(r,Oo,{},!0)),F.run(1)}),$=!0)},o(P){s||(s=Pn(n,No,{},!1)),s.run(0),F||(F=Pn(r,Oo,{},!1)),F.run(0),$=!1},d(P){P&&b(e),P&&s&&s.end(),P&&F&&F.end(),U=!1,xe(Q)}}}function tI(t,e,n){let s,i,r;Ve(t,Dn,O=>n(10,s=O)),Ve(t,wt,O=>n(11,i=O)),Ve(t,lt,O=>n(12,r=O));const o=Pd();let a=`${r.name} ${r.lastname}`,l=[],u=[],h=new Date,f=h.getTime();console.log(f),l={task:"",isComplete:"",createdAt:"",timeTask:"",notes:"",user:""};function d(){o("closeIt"),mt(wt,i="contSelect",i),mt(Dn,s="",s)}const g=async()=>{mt(wt,i="todoAdding",i),u=a,n(1,l={...l,endTask:f}),mt(Dn,s={...l,task:u},s),i_(i,s),console.log(s),d()},_=O=>{O.key==="Enter"&&g()};function v(){a=this.value,n(0,a)}function w(){l.timeTask=this.value,n(1,l)}function E(){l.endTask=this.value,n(1,l)}function A(){l.notes=this.value,n(1,l)}return[a,l,d,g,_,v,w,E,A]}class nI extends Ye{constructor(e){super(),Qe(this,e,tI,eI,ze,{})}}function sI(t){let e,n,s,i,r,o,a,l,u,h,f,d,g,_,v,w,E,A,O,R,F,$,U,Q,P,N,K,L,se,Z,G,q,ee,C,H,W,S,re,be,ve;return{c(){e=p("main"),n=p("section"),s=p("figure"),i=p("img"),o=y(),a=p("div"),l=D(t[1]),u=y(),h=p("figcaption"),f=D(t[2]),d=y(),g=p("section"),_=p("section"),v=p("div"),w=p("div"),E=D(t[3]),A=D(" Rec\xE1maras"),O=y(),R=p("div"),F=D(t[4]),$=D(" Ba\xF1os"),U=y(),Q=p("div"),P=D(t[5]),N=D(" Estacionamientos"),K=y(),L=p("div"),se=D(t[6]),Z=D(" m2 de Contruccion"),G=y(),q=p("div"),ee=D(t[7]),C=D(" m2 de Terreno"),H=y(),W=p("br"),S=y(),re=p("div"),be=D("Precio $: "),ve=D(t[8]),fn(i.src,r=t[0])||m(i,"src",r),m(i,"alt",t[1]),m(i,"class","bkcover svelte-1w1p4eb"),m(a,"class","language svelte-1w1p4eb"),m(h,"class","svelte-1w1p4eb"),m(s,"class","bkcont svelte-1w1p4eb"),m(n,"class","book-top-info svelte-1w1p4eb"),m(v,"class","buy-options-cont svelte-1w1p4eb"),m(_,"class","from-pariyatti available-at svelte-1w1p4eb"),m(g,"class","book-bottom-links svelte-1w1p4eb")},m(Te,De){k(Te,e,De),c(e,n),c(n,s),c(s,i),c(s,o),c(s,a),c(a,l),c(s,u),c(s,h),c(h,f),c(e,d),c(e,g),c(g,_),c(_,v),c(v,w),c(w,E),c(w,A),c(v,O),c(v,R),c(R,F),c(R,$),c(v,U),c(v,Q),c(Q,P),c(Q,N),c(v,K),c(v,L),c(L,se),c(L,Z),c(v,G),c(v,q),c(q,ee),c(q,C),c(v,H),c(v,W),c(v,S),c(v,re),c(re,be),c(re,ve)},p(Te,[De]){De&1&&!fn(i.src,r=Te[0])&&m(i,"src",r),De&2&&m(i,"alt",Te[1]),De&2&&ie(l,Te[1]),De&4&&ie(f,Te[2]),De&8&&ie(E,Te[3]),De&16&&ie(F,Te[4]),De&32&&ie(P,Te[5]),De&64&&ie(se,Te[6]),De&128&&ie(ee,Te[7]),De&256&&ie(ve,Te[8])},i:ue,o:ue,d(Te){Te&&b(e)}}}function iI(t,e,n){let{urlImage:s,claveEB:i,nameProperty:r,beds:o,bathroom:a,park:l,areaBuilding:u,areaTotal:h,price:f}=e;return t.$$set=d=>{"urlImage"in d&&n(0,s=d.urlImage),"claveEB"in d&&n(1,i=d.claveEB),"nameProperty"in d&&n(2,r=d.nameProperty),"beds"in d&&n(3,o=d.beds),"bathroom"in d&&n(4,a=d.bathroom),"park"in d&&n(5,l=d.park),"areaBuilding"in d&&n(6,u=d.areaBuilding),"areaTotal"in d&&n(7,h=d.areaTotal),"price"in d&&n(8,f=d.price)},[s,i,r,o,a,l,u,h,f]}class r_ extends Ye{constructor(e){super(),Qe(this,e,iI,sI,ze,{urlImage:0,claveEB:1,nameProperty:2,beds:3,bathroom:4,park:5,areaBuilding:6,areaTotal:7,price:8})}}let As;function o_(t){return t<=1e6?As="PRM":t<=25e5?As="SGN":t<=5e6?As="TRC":t<=8e6?As="CRT":t<=12e6?As="QNT":t>12e6&&(As="SXT"),As}let Xa,xa;function rI(t){let e=Vn;return e=e.filter(n=>n.selectTP===t.selecTP),console.log("filtraste por tipo de propiedad",e),t.numBeds>0&&(e=e.filter(n=>n.beds>=t.numBeds)),t.numBaths>0&&(e=e.filter(n=>n.bathroom>=t.numBaths)),t.numParks>0&&(e=e.filter(n=>n.park>=t.numParks)),console.log("Por caracteristicas",e),t.budget?(console.log("filtraste por budget"),Xa=t.budget*.7,xa=t.budget*1.1,console.log(Xa,xa),e=e.filter(n=>n.price>=Xa&&n.price<=xa)):(console.log("filtraste por rango"),e=e.filter(n=>o_(n.price)===t.rangeProp)),console.log("filtraste presupuesto",e),t.locaProperty.length>0&&(e=e.filter(n=>t.locaProperty.some(s=>n.locaProperty.includes(s)))),console.log("Filtraste por Ubicacion",e),t.tagsProperty.length>0&&(e=e.filter(n=>t.tagsProperty.every(s=>n.tagsProperty.includes(s)))),console.log("Filtraste por localizacion",e),e.length===0||""+e.length,Ol.set(e)}const Bo=["Casa","Terreno","Departamento","Casa o Departamento","Local Comercial","Casa de Campo"],Yh=["Lona en Propiedad","Propiedades.com","NocNok","Mercado Libre","Vivanuncios","Lamudi","Inmuebles24","Referido","Otro"],Xh=["Comprador","Arrendador","Propietario","Agente Asociado","Agente Inmobiliario","Constructor","Inversionista","Otro"],xh=["Contado","Credito Hipotecario","INFONAVIT","COFINAVIT","FOVISSSTE","ALIADOS","Conyugal"],Jh=["Venta","Renta"],Zh=["Rango","PRM","SGN","TRC","CRT","QNT","SXT","SPT"],jo=[0,1,2,3,4,5],Rn=[0,1,2,3,4],ef=["Due\xF1o","Familiar","Inmobiliaria","Conocido"];function oI(t){let e,n,s,i,r,o,a,l,u,h,f,d,g,_,v,w,E,A,O,R,F,$,U,Q,P,N,K,L,se,Z,G,q,ee,C,H,W,S,re,be,ve,Te,De,Oe;return{c(){e=p("div"),n=p("div"),s=p("label"),i=D(`/Norte\\\r
			`),r=p("input"),o=y(),a=p("div"),l=p("label"),u=D(`/Noroeste\r
			`),h=p("input"),f=y(),d=p("label"),g=p("input"),_=D("NorEste\\"),v=y(),w=p("div"),E=p("label"),A=D(`/Oeste\r
			`),O=p("input"),R=y(),F=p("label"),$=D(`Centro Norte\r
			`),U=p("input"),Q=y(),P=p("label"),N=p("input"),K=D("Este\\"),L=y(),se=p("div"),Z=p("label"),G=D(`Centro Sur\r
			`),q=p("input"),ee=y(),C=p("div"),H=p("label"),W=D(`/SurOeste\r
			`),S=p("input"),re=y(),be=p("label"),ve=p("input"),Te=D("SurEste\\"),r.__value="Norte",r.value=r.__value,m(r,"id","north"),m(r,"type","checkbox"),t[2][0].push(r),m(s,"for","north"),m(n,"class","filterLocationOne svelte-1lvjb5r"),h.__value="Noroeste",h.value=h.__value,m(h,"id","northwest"),m(h,"type","checkbox"),t[2][0].push(h),m(l,"for","northwest"),g.__value="Noreste",g.value=g.__value,m(g,"id","northeast"),m(g,"type","checkbox"),t[2][0].push(g),m(d,"for","northeast"),m(a,"class","filterLocationOne svelte-1lvjb5r"),O.__value="Oeste",O.value=O.__value,m(O,"id","west"),m(O,"type","checkbox"),t[2][0].push(O),m(E,"for","west"),U.__value="Centronorte",U.value=U.__value,m(U,"id","townNorth"),m(U,"type","checkbox"),t[2][0].push(U),m(F,"for","townNorth"),N.__value="Este",N.value=N.__value,m(N,"id","east"),m(N,"type","checkbox"),t[2][0].push(N),m(P,"for","east"),m(w,"class","filterLocationOne svelte-1lvjb5r"),q.__value="CentroSur",q.value=q.__value,m(q,"id","townsouth"),m(q,"type","checkbox"),t[2][0].push(q),m(Z,"for","townsouth"),m(se,"class","filterLocationOne svelte-1lvjb5r"),S.__value="SurOeste",S.value=S.__value,m(S,"id","southwest"),m(S,"type","checkbox"),t[2][0].push(S),m(H,"for","southwest"),ve.__value="SurEste",ve.value=ve.__value,m(ve,"id","southeast"),m(ve,"type","checkbox"),t[2][0].push(ve),m(be,"for","southeast"),m(C,"class","filterLocationOne svelte-1lvjb5r"),m(e,"class","containerUbication svelte-1lvjb5r")},m(Ie,V){k(Ie,e,V),c(e,n),c(n,s),c(s,i),c(s,r),r.checked=~t[0].indexOf(r.__value),c(e,o),c(e,a),c(a,l),c(l,u),c(l,h),h.checked=~t[0].indexOf(h.__value),c(a,f),c(a,d),c(d,g),g.checked=~t[0].indexOf(g.__value),c(d,_),c(e,v),c(e,w),c(w,E),c(E,A),c(E,O),O.checked=~t[0].indexOf(O.__value),c(w,R),c(w,F),c(F,$),c(F,U),U.checked=~t[0].indexOf(U.__value),c(w,Q),c(w,P),c(P,N),N.checked=~t[0].indexOf(N.__value),c(P,K),c(e,L),c(e,se),c(se,Z),c(Z,G),c(Z,q),q.checked=~t[0].indexOf(q.__value),c(e,ee),c(e,C),c(C,H),c(H,W),c(H,S),S.checked=~t[0].indexOf(S.__value),c(C,re),c(C,be),c(be,ve),ve.checked=~t[0].indexOf(ve.__value),c(be,Te),De||(Oe=[B(r,"change",t[1]),B(h,"change",t[3]),B(g,"change",t[4]),B(O,"change",t[5]),B(U,"change",t[6]),B(N,"change",t[7]),B(q,"change",t[8]),B(S,"change",t[9]),B(ve,"change",t[10])],De=!0)},p(Ie,[V]){V&1&&(r.checked=~Ie[0].indexOf(r.__value)),V&1&&(h.checked=~Ie[0].indexOf(h.__value)),V&1&&(g.checked=~Ie[0].indexOf(g.__value)),V&1&&(O.checked=~Ie[0].indexOf(O.__value)),V&1&&(U.checked=~Ie[0].indexOf(U.__value)),V&1&&(N.checked=~Ie[0].indexOf(N.__value)),V&1&&(q.checked=~Ie[0].indexOf(q.__value)),V&1&&(S.checked=~Ie[0].indexOf(S.__value)),V&1&&(ve.checked=~Ie[0].indexOf(ve.__value))},i:ue,o:ue,d(Ie){Ie&&b(e),t[2][0].splice(t[2][0].indexOf(r),1),t[2][0].splice(t[2][0].indexOf(h),1),t[2][0].splice(t[2][0].indexOf(g),1),t[2][0].splice(t[2][0].indexOf(O),1),t[2][0].splice(t[2][0].indexOf(U),1),t[2][0].splice(t[2][0].indexOf(N),1),t[2][0].splice(t[2][0].indexOf(q),1),t[2][0].splice(t[2][0].indexOf(S),1),t[2][0].splice(t[2][0].indexOf(ve),1),De=!1,xe(Oe)}}}function aI(t,e,n){let{ubication:s}=e;const i=[[]];function r(){s=Jt(i[0],this.__value,this.checked),n(0,s)}function o(){s=Jt(i[0],this.__value,this.checked),n(0,s)}function a(){s=Jt(i[0],this.__value,this.checked),n(0,s)}function l(){s=Jt(i[0],this.__value,this.checked),n(0,s)}function u(){s=Jt(i[0],this.__value,this.checked),n(0,s)}function h(){s=Jt(i[0],this.__value,this.checked),n(0,s)}function f(){s=Jt(i[0],this.__value,this.checked),n(0,s)}function d(){s=Jt(i[0],this.__value,this.checked),n(0,s)}function g(){s=Jt(i[0],this.__value,this.checked),n(0,s)}return t.$$set=_=>{"ubication"in _&&n(0,s=_.ubication)},[s,r,i,o,a,l,u,h,f,d,g]}class a_ extends Ye{constructor(e){super(),Qe(this,e,aI,oI,ze,{ubication:0})}}function lI(t){let e,n,s,i,r,o,a,l,u,h,f,d,g,_,v,w,E,A,O,R,F,$,U,Q,P,N,K,L,se,Z,G,q,ee;return{c(){e=p("section"),n=p("div"),s=p("label"),i=D(`Fracc. Privado\r
		   `),r=p("input"),o=y(),a=p("label"),l=D(`Frente a Parque\r
         `),u=p("input"),h=y(),f=p("label"),d=D(`Una Planta\r
         `),g=p("input"),_=y(),v=p("div"),w=p("label"),E=D(`Recamara en P.B.\r
		`),A=p("input"),O=y(),R=p("label"),F=D(`Patio Amplio\r
   `),$=p("input"),U=y(),Q=p("label"),P=D(`Lista para Habitarse\r
   `),N=p("input"),K=y(),L=p("div"),se=p("label"),Z=D(`Nueva\r
		`),G=p("input"),m(r,"type","checkbox"),r.__value="Fracc. Privado",r.value=r.__value,t[2][0].push(r),m(u,"type","checkbox"),u.__value="Frente a Parque",u.value=u.__value,t[2][0].push(u),m(g,"type","checkbox"),g.__value="Una Planta",g.value=g.__value,t[2][0].push(g),m(n,"class","svelte-1b9bvt0"),m(A,"type","checkbox"),A.__value="Recamara en PB",A.value=A.__value,t[2][0].push(A),m($,"type","checkbox"),$.__value="Patio Amplio",$.value=$.__value,t[2][0].push($),m(N,"type","checkbox"),N.__value="Lista Habitarse",N.value=N.__value,t[2][0].push(N),m(v,"class","svelte-1b9bvt0"),m(G,"type","checkbox"),G.__value="Nueva",G.value=G.__value,t[2][0].push(G),m(L,"class","svelte-1b9bvt0"),m(e,"class","svelte-1b9bvt0")},m(C,H){k(C,e,H),c(e,n),c(n,s),c(s,i),c(s,r),r.checked=~t[0].indexOf(r.__value),c(n,o),c(n,a),c(a,l),c(a,u),u.checked=~t[0].indexOf(u.__value),c(n,h),c(n,f),c(f,d),c(f,g),g.checked=~t[0].indexOf(g.__value),c(e,_),c(e,v),c(v,w),c(w,E),c(w,A),A.checked=~t[0].indexOf(A.__value),c(v,O),c(v,R),c(R,F),c(R,$),$.checked=~t[0].indexOf($.__value),c(v,U),c(v,Q),c(Q,P),c(Q,N),N.checked=~t[0].indexOf(N.__value),c(e,K),c(e,L),c(L,se),c(se,Z),c(se,G),G.checked=~t[0].indexOf(G.__value),q||(ee=[B(r,"change",t[1]),B(u,"change",t[3]),B(g,"change",t[4]),B(A,"change",t[5]),B($,"change",t[6]),B(N,"change",t[7]),B(G,"change",t[8])],q=!0)},p(C,[H]){H&1&&(r.checked=~C[0].indexOf(r.__value)),H&1&&(u.checked=~C[0].indexOf(u.__value)),H&1&&(g.checked=~C[0].indexOf(g.__value)),H&1&&(A.checked=~C[0].indexOf(A.__value)),H&1&&($.checked=~C[0].indexOf($.__value)),H&1&&(N.checked=~C[0].indexOf(N.__value)),H&1&&(G.checked=~C[0].indexOf(G.__value))},i:ue,o:ue,d(C){C&&b(e),t[2][0].splice(t[2][0].indexOf(r),1),t[2][0].splice(t[2][0].indexOf(u),1),t[2][0].splice(t[2][0].indexOf(g),1),t[2][0].splice(t[2][0].indexOf(A),1),t[2][0].splice(t[2][0].indexOf($),1),t[2][0].splice(t[2][0].indexOf(N),1),t[2][0].splice(t[2][0].indexOf(G),1),q=!1,xe(ee)}}}function uI(t,e,n){let{tag:s}=e;const i=[[]];function r(){s=Jt(i[0],this.__value,this.checked),n(0,s)}function o(){s=Jt(i[0],this.__value,this.checked),n(0,s)}function a(){s=Jt(i[0],this.__value,this.checked),n(0,s)}function l(){s=Jt(i[0],this.__value,this.checked),n(0,s)}function u(){s=Jt(i[0],this.__value,this.checked),n(0,s)}function h(){s=Jt(i[0],this.__value,this.checked),n(0,s)}function f(){s=Jt(i[0],this.__value,this.checked),n(0,s)}return t.$$set=d=>{"tag"in d&&n(0,s=d.tag)},[s,r,i,o,a,l,u,h,f]}class l_ extends Ye{constructor(e){super(),Qe(this,e,uI,lI,ze,{tag:0})}}function tf(t,e,n){const s=t.slice();return s[24]=e[n],s}function nf(t,e,n){const s=t.slice();return s[27]=e[n],s}function sf(t,e,n){const s=t.slice();return s[30]=e[n],s}function rf(t,e,n){const s=t.slice();return s[33]=e[n],s}function of(t,e,n){const s=t.slice();return s[36]=e[n],s}function af(t,e,n){const s=t.slice();return s[39]=e[n],s}function lf(t,e,n){const s=t.slice();return s[42]=e[n],s}function uf(t,e,n){const s=t.slice();return s[45]=e[n],s}function cf(t,e,n){const s=t.slice();return s[48]=e[n],s}function hf(t,e,n){const s=t.slice();return s[51]=e[n],s}function cI(t){let e,n=En(t[2].createdAt)+"",s,i,r;return{c(){e=p("h3"),s=D(n),m(e,"class","dataInput svelte-1myljlf")},m(o,a){k(o,e,a),c(e,s),i||(r=B(e,"dblclick",t[3]),i=!0)},p(o,a){a[0]&4&&n!==(n=En(o[2].createdAt)+"")&&ie(s,n)},d(o){o&&b(e),i=!1,r()}}}function hI(t){let e,n,s;return{c(){e=p("input"),m(e,"class","dataInput svelte-1myljlf"),m(e,"type","date")},m(i,r){k(i,e,r),de(e,t[2].createdAt),n||(s=B(e,"input",t[4]),n=!0)},p(i,r){r[0]&5&&de(e,i[2].createdAt)},d(i){i&&b(e),n=!1,s()}}}function ff(t){let e,n=t[51]+"",s,i;return{c(){e=p("option"),s=D(n),m(e,"class","dataInput svelte-1myljlf"),m(e,"type","checkbox"),e.__value=i=t[51],e.value=e.__value},m(r,o){k(r,e,o),c(e,s)},p(r,o){o[0]&1&&n!==(n=r[51]+"")&&ie(s,n),o[0]&1&&i!==(i=r[51])&&(e.__value=i,e.value=e.__value)},d(r){r&&b(e)}}}function df(t){let e,n=t[48]+"",s;return{c(){e=p("option"),s=D(n),m(e,"type","checkbox"),e.__value=t[48],e.value=e.__value},m(i,r){k(i,e,r),c(e,s)},p:ue,d(i){i&&b(e)}}}function pf(t){let e,n=t[45]+"",s;return{c(){e=p("option"),s=D(n),m(e,"type","checkbox"),e.__value=t[45],e.value=e.__value},m(i,r){k(i,e,r),c(e,s)},p:ue,d(i){i&&b(e)}}}function mf(t){let e,n=t[42]+"",s;return{c(){e=p("option"),s=D(n),m(e,"type","checkbox"),e.__value=t[42],e.value=e.__value},m(i,r){k(i,e,r),c(e,s)},p:ue,d(i){i&&b(e)}}}function gf(t){let e,n=t[39]+"",s;return{c(){e=p("option"),s=D(n),m(e,"type","checkbox"),e.__value=t[39],e.value=e.__value},m(i,r){k(i,e,r),c(e,s)},p:ue,d(i){i&&b(e)}}}function _f(t){let e,n=t[36]+"",s;return{c(){e=p("option"),s=D(n),m(e,"type","checkbox"),e.__value=t[36],e.value=e.__value},m(i,r){k(i,e,r),c(e,s)},p:ue,d(i){i&&b(e)}}}function vf(t){let e,n=t[33]+"",s,i;return{c(){e=p("option"),s=D(n),i=D(" Rec\xE1maras"),m(e,"type","checkbox"),e.__value=t[33],e.value=e.__value},m(r,o){k(r,e,o),c(e,s),c(e,i)},p:ue,d(r){r&&b(e)}}}function yf(t){let e,n=t[30]+"",s,i;return{c(){e=p("option"),s=D(n),i=D(" ba\xF1os"),m(e,"type","checkbox"),e.__value=t[30],e.value=e.__value},m(r,o){k(r,e,o),c(e,s),c(e,i)},p:ue,d(r){r&&b(e)}}}function bf(t){let e,n=t[27]+"",s,i;return{c(){e=p("option"),s=D(n),i=D(" Medios ba\xF1os"),m(e,"type","checkbox"),e.__value=t[27],e.value=e.__value},m(r,o){k(r,e,o),c(e,s),c(e,i)},p:ue,d(r){r&&b(e)}}}function wf(t){let e,n=t[24]+"",s,i;return{c(){e=p("option"),s=D(n),i=D(" Estacionamientos"),m(e,"type","checkbox"),e.__value=t[24],e.value=e.__value},m(r,o){k(r,e,o),c(e,s),c(e,i)},p:ue,d(r){r&&b(e)}}}function fI(t){let e,n,s,i,r,o,a,l,u,h,f,d,g,_,v,w,E,A,O,R,F,$,U,Q,P,N,K,L,se,Z,G,q,ee,C,H,W,S,re,be,ve,Te,De,Oe,Ie,V,ne,gt,_t,et,ut,Gt,Xe,vt,Tt,Wt,Ge,Ft,Et,Qt,ct;function Vt(I,J){return I[1]?hI:cI}let yt=Vt(t),Je=yt(t),ht=t[0],Me=[];for(let I=0;I<ht.length;I+=1)Me[I]=ff(hf(t,ht,I));let Rt=Xh,Be=[];for(let I=0;I<Rt.length;I+=1)Be[I]=df(cf(t,Rt,I));let Yt=Yh,We=[];for(let I=0;I<Yt.length;I+=1)We[I]=pf(uf(t,Yt,I));let tt=xh,ot=[];for(let I=0;I<tt.length;I+=1)ot[I]=mf(lf(t,tt,I));let It=Bo,nt=[];for(let I=0;I<It.length;I+=1)nt[I]=gf(af(t,It,I));let Ct=Zh,at=[];for(let I=0;I<Ct.length;I+=1)at[I]=_f(of(t,Ct,I));let Pt=jo,he=[];for(let I=0;I<Pt.length;I+=1)he[I]=vf(rf(t,Pt,I));let we=Rn,me=[];for(let I=0;I<we.length;I+=1)me[I]=yf(sf(t,we,I));let Xt=Rn,$e=[];for(let I=0;I<Xt.length;I+=1)$e[I]=bf(nf(t,Xt,I));let on=Rn,Le=[];for(let I=0;I<on.length;I+=1)Le[I]=wf(tf(t,on,I));function $n(I){t[21](I)}let St={};t[2].locaProperty!==void 0&&(St.ubication=t[2].locaProperty),vt=new a_({props:St}),Xn.push(()=>Us(vt,"ubication",$n));function An(I){t[22](I)}let pt={};return t[2].tagsProperty!==void 0&&(pt.tag=t[2].tagsProperty),Ge=new l_({props:pt}),Xn.push(()=>Us(Ge,"tag",An)),{c(){e=p("h1"),e.textContent="Alta Contactos",n=y(),s=p("div"),i=p("div"),Je.c(),r=y(),o=p("div"),a=p("input"),l=y(),u=p("input"),h=y(),f=p("div"),d=p("input"),g=y(),_=p("input"),v=y(),w=p("div"),E=p("select"),A=p("option"),A.textContent="Propiedad de Contacto";for(let I=0;I<Me.length;I+=1)Me[I].c();O=y(),R=p("input"),F=y(),$=p("div"),U=p("input"),Q=y(),P=p("select"),N=p("option"),N.textContent="Tipo de Contacto";for(let I=0;I<Be.length;I+=1)Be[I].c();K=y(),L=p("select"),se=p("option"),se.textContent="Modo de Contacto";for(let I=0;I<We.length;I+=1)We[I].c();Z=y(),G=p("select"),q=p("option"),q.textContent="Modo de Pago";for(let I=0;I<ot.length;I+=1)ot[I].c();ee=y(),C=p("select"),H=p("option"),H.textContent="Tipo de Propiedad";for(let I=0;I<nt.length;I+=1)nt[I].c();W=y(),S=p("select"),re=p("option"),re.textContent="Rango de Busqueda";for(let I=0;I<at.length;I+=1)at[I].c();be=y(),ve=p("select"),Te=p("option"),Te.textContent="# Rec\xE1maras";for(let I=0;I<he.length;I+=1)he[I].c();De=y(),Oe=p("select"),Ie=p("option"),Ie.textContent="# Ba\xF1os";for(let I=0;I<me.length;I+=1)me[I].c();V=y(),ne=p("select"),gt=p("option"),gt.textContent="# Medios Ba\xF1os";for(let I=0;I<$e.length;I+=1)$e[I].c();_t=y(),et=p("select"),ut=p("option"),ut.textContent="# Estacionamientos";for(let I=0;I<Le.length;I+=1)Le[I].c();Gt=y(),Xe=p("div"),le(vt.$$.fragment),Wt=y(),le(Ge.$$.fragment),m(e,"class","sectionTitle"),m(a,"class","dataInput svelte-1myljlf"),m(a,"type","text"),m(a,"placeholder","Nombre"),m(u,"class","dataInput svelte-1myljlf"),m(u,"type","text"),m(u,"placeholder","Apellido"),m(o,"class","contactInput"),m(d,"class","dataInput svelte-1myljlf"),m(d,"type","tel"),m(d,"placeholder","tel\xE9fono"),m(_,"class","dataInput svelte-1myljlf"),m(_,"type","email"),m(_,"placeholder","email"),m(f,"class","contactInput"),m(s,"class",""),A.disabled=!0,A.selected=!0,A.__value="",A.value=A.__value,m(E,"class","dataInput svelte-1myljlf"),m(E,"id","selTP"),m(E,"name","selTP"),t[2].propCont===void 0&&Ze(()=>t[9].call(E)),m(R,"class","dataInput svelte-1myljlf"),m(R,"type","number"),m(R,"placeholder","Presupuesto"),m(w,"class","col"),m(U,"class","textareaInput svelte-1myljlf"),m(U,"type","textarea"),m(U,"placeholder","Comentarios"),m($,"class","col"),N.disabled=!0,N.selected=!0,N.__value="",N.value=N.__value,m(P,"class","othersInput svelte-1myljlf"),t[2].typeContact===void 0&&Ze(()=>t[12].call(P)),se.disabled=!0,se.selected=!0,se.__value="",se.value=se.__value,m(L,"class","othersInput svelte-1myljlf"),t[2].selecMC===void 0&&Ze(()=>t[13].call(L)),q.disabled=!0,q.selected=!0,q.__value="",q.value=q.__value,m(G,"class","othersInput svelte-1myljlf"),t[2].modePay===void 0&&Ze(()=>t[14].call(G)),H.disabled=!0,H.selected=!0,H.__value="",H.value=H.__value,m(C,"class","othersInput svelte-1myljlf"),m(C,"id","selTP"),m(C,"name","selTP"),t[2].selecTP===void 0&&Ze(()=>t[15].call(C)),re.disabled=!0,re.selected=!0,re.__value="",re.value=re.__value,m(S,"class","othersInput svelte-1myljlf"),m(S,"id","ranges"),m(S,"name","ranges"),t[2].rangeProp===void 0&&Ze(()=>t[16].call(S)),Te.disabled=!0,Te.selected=!0,Te.__value="",Te.value=Te.__value,m(ve,"class","othersInput svelte-1myljlf"),t[2].numBeds===void 0&&Ze(()=>t[17].call(ve)),Ie.disabled=!0,Ie.selected=!0,Ie.__value="",Ie.value=Ie.__value,m(Oe,"class","othersInput svelte-1myljlf"),t[2].numBaths===void 0&&Ze(()=>t[18].call(Oe)),gt.disabled=!0,gt.selected=!0,gt.__value="",gt.value=gt.__value,m(ne,"class","othersInput svelte-1myljlf"),t[2].halfBathroom===void 0&&Ze(()=>t[19].call(ne)),ut.disabled=!0,ut.selected=!0,ut.__value="",ut.value=ut.__value,m(et,"class","othersInput svelte-1myljlf"),t[2].numParks===void 0&&Ze(()=>t[20].call(et)),m(Xe,"class","ubiTags svelte-1myljlf")},m(I,J){k(I,e,J),k(I,n,J),k(I,s,J),c(s,i),Je.m(i,null),c(s,r),c(s,o),c(o,a),de(a,t[2].name),c(o,l),c(o,u),de(u,t[2].lastname),c(s,h),c(s,f),c(f,d),de(d,t[2].telephon),c(f,g),c(f,_),de(_,t[2].email),k(I,v,J),k(I,w,J),c(w,E),c(E,A);for(let fe=0;fe<Me.length;fe+=1)Me[fe].m(E,null);Fe(E,t[2].propCont),c(w,O),c(w,R),de(R,t[2].budget),k(I,F,J),k(I,$,J),c($,U),de(U,t[2].comContact),k(I,Q,J),k(I,P,J),c(P,N);for(let fe=0;fe<Be.length;fe+=1)Be[fe].m(P,null);Fe(P,t[2].typeContact),k(I,K,J),k(I,L,J),c(L,se);for(let fe=0;fe<We.length;fe+=1)We[fe].m(L,null);Fe(L,t[2].selecMC),k(I,Z,J),k(I,G,J),c(G,q);for(let fe=0;fe<ot.length;fe+=1)ot[fe].m(G,null);Fe(G,t[2].modePay),k(I,ee,J),k(I,C,J),c(C,H);for(let fe=0;fe<nt.length;fe+=1)nt[fe].m(C,null);Fe(C,t[2].selecTP),k(I,W,J),k(I,S,J),c(S,re);for(let fe=0;fe<at.length;fe+=1)at[fe].m(S,null);Fe(S,t[2].rangeProp),k(I,be,J),k(I,ve,J),c(ve,Te);for(let fe=0;fe<he.length;fe+=1)he[fe].m(ve,null);Fe(ve,t[2].numBeds),k(I,De,J),k(I,Oe,J),c(Oe,Ie);for(let fe=0;fe<me.length;fe+=1)me[fe].m(Oe,null);Fe(Oe,t[2].numBaths),k(I,V,J),k(I,ne,J),c(ne,gt);for(let fe=0;fe<$e.length;fe+=1)$e[fe].m(ne,null);Fe(ne,t[2].halfBathroom),k(I,_t,J),k(I,et,J),c(et,ut);for(let fe=0;fe<Le.length;fe+=1)Le[fe].m(et,null);Fe(et,t[2].numParks),k(I,Gt,J),k(I,Xe,J),oe(vt,Xe,null),c(Xe,Wt),oe(Ge,Xe,null),Et=!0,Qt||(ct=[B(a,"input",t[5]),B(u,"input",t[6]),B(d,"input",t[7]),B(_,"input",t[8]),B(E,"change",t[9]),B(R,"input",t[10]),B(U,"input",t[11]),B(P,"change",t[12]),B(L,"change",t[13]),B(G,"change",t[14]),B(C,"change",t[15]),B(S,"change",t[16]),B(ve,"change",t[17]),B(Oe,"change",t[18]),B(ne,"change",t[19]),B(et,"change",t[20])],Qt=!0)},p(I,J){if(yt===(yt=Vt(I))&&Je?Je.p(I,J):(Je.d(1),Je=yt(I),Je&&(Je.c(),Je.m(i,null))),J[0]&5&&a.value!==I[2].name&&de(a,I[2].name),J[0]&5&&u.value!==I[2].lastname&&de(u,I[2].lastname),J[0]&5&&de(d,I[2].telephon),J[0]&5&&_.value!==I[2].email&&de(_,I[2].email),J[0]&1){ht=I[0];let M;for(M=0;M<ht.length;M+=1){const Ce=hf(I,ht,M);Me[M]?Me[M].p(Ce,J):(Me[M]=ff(Ce),Me[M].c(),Me[M].m(E,null))}for(;M<Me.length;M+=1)Me[M].d(1);Me.length=ht.length}if(J[0]&5&&Fe(E,I[2].propCont),J[0]&5&&ps(R.value)!==I[2].budget&&de(R,I[2].budget),J[0]&5&&de(U,I[2].comContact),J&0){Rt=Xh;let M;for(M=0;M<Rt.length;M+=1){const Ce=cf(I,Rt,M);Be[M]?Be[M].p(Ce,J):(Be[M]=df(Ce),Be[M].c(),Be[M].m(P,null))}for(;M<Be.length;M+=1)Be[M].d(1);Be.length=Rt.length}if(J[0]&5&&Fe(P,I[2].typeContact),J&0){Yt=Yh;let M;for(M=0;M<Yt.length;M+=1){const Ce=uf(I,Yt,M);We[M]?We[M].p(Ce,J):(We[M]=pf(Ce),We[M].c(),We[M].m(L,null))}for(;M<We.length;M+=1)We[M].d(1);We.length=Yt.length}if(J[0]&5&&Fe(L,I[2].selecMC),J&0){tt=xh;let M;for(M=0;M<tt.length;M+=1){const Ce=lf(I,tt,M);ot[M]?ot[M].p(Ce,J):(ot[M]=mf(Ce),ot[M].c(),ot[M].m(G,null))}for(;M<ot.length;M+=1)ot[M].d(1);ot.length=tt.length}if(J[0]&5&&Fe(G,I[2].modePay),J&0){It=Bo;let M;for(M=0;M<It.length;M+=1){const Ce=af(I,It,M);nt[M]?nt[M].p(Ce,J):(nt[M]=gf(Ce),nt[M].c(),nt[M].m(C,null))}for(;M<nt.length;M+=1)nt[M].d(1);nt.length=It.length}if(J[0]&5&&Fe(C,I[2].selecTP),J&0){Ct=Zh;let M;for(M=0;M<Ct.length;M+=1){const Ce=of(I,Ct,M);at[M]?at[M].p(Ce,J):(at[M]=_f(Ce),at[M].c(),at[M].m(S,null))}for(;M<at.length;M+=1)at[M].d(1);at.length=Ct.length}if(J[0]&5&&Fe(S,I[2].rangeProp),J&0){Pt=jo;let M;for(M=0;M<Pt.length;M+=1){const Ce=rf(I,Pt,M);he[M]?he[M].p(Ce,J):(he[M]=vf(Ce),he[M].c(),he[M].m(ve,null))}for(;M<he.length;M+=1)he[M].d(1);he.length=Pt.length}if(J[0]&5&&Fe(ve,I[2].numBeds),J&0){we=Rn;let M;for(M=0;M<we.length;M+=1){const Ce=sf(I,we,M);me[M]?me[M].p(Ce,J):(me[M]=yf(Ce),me[M].c(),me[M].m(Oe,null))}for(;M<me.length;M+=1)me[M].d(1);me.length=we.length}if(J[0]&5&&Fe(Oe,I[2].numBaths),J&0){Xt=Rn;let M;for(M=0;M<Xt.length;M+=1){const Ce=nf(I,Xt,M);$e[M]?$e[M].p(Ce,J):($e[M]=bf(Ce),$e[M].c(),$e[M].m(ne,null))}for(;M<$e.length;M+=1)$e[M].d(1);$e.length=Xt.length}if(J[0]&5&&Fe(ne,I[2].halfBathroom),J&0){on=Rn;let M;for(M=0;M<on.length;M+=1){const Ce=tf(I,on,M);Le[M]?Le[M].p(Ce,J):(Le[M]=wf(Ce),Le[M].c(),Le[M].m(et,null))}for(;M<Le.length;M+=1)Le[M].d(1);Le.length=on.length}J[0]&5&&Fe(et,I[2].numParks);const fe={};!Tt&&J[0]&4&&(Tt=!0,fe.ubication=I[2].locaProperty,Ms(()=>Tt=!1)),vt.$set(fe);const bt={};!Ft&&J[0]&4&&(Ft=!0,bt.tag=I[2].tagsProperty,Ms(()=>Ft=!1)),Ge.$set(bt)},i(I){Et||(j(vt.$$.fragment,I),j(Ge.$$.fragment,I),Et=!0)},o(I){z(vt.$$.fragment,I),z(Ge.$$.fragment,I),Et=!1},d(I){I&&b(e),I&&b(n),I&&b(s),Je.d(),I&&b(v),I&&b(w),He(Me,I),I&&b(F),I&&b($),I&&b(Q),I&&b(P),He(Be,I),I&&b(K),I&&b(L),He(We,I),I&&b(Z),I&&b(G),He(ot,I),I&&b(ee),I&&b(C),He(nt,I),I&&b(W),I&&b(S),He(at,I),I&&b(be),I&&b(ve),He(he,I),I&&b(De),I&&b(Oe),He(me,I),I&&b(V),I&&b(ne),He($e,I),I&&b(_t),I&&b(et),He(Le,I),I&&b(Gt),I&&b(Xe),ae(vt),ae(Ge),Qt=!1,xe(ct)}}}function dI(t,e,n){let s;Ve(t,lt,K=>n(2,s=K));var i=[];let r=Vn,o=!1;(()=>{for(let K of r){let L=`${K.nameProperty} ${K.claveEB} - ${(K.price/1e6).toFixed(2)}`;n(0,i=[...i,L])}return n(0,i=i.sort())})();function a(){n(1,o=!0)}function l(){s.createdAt=this.value,lt.set(s),n(0,i)}function u(){s.name=this.value,lt.set(s),n(0,i)}function h(){s.lastname=this.value,lt.set(s),n(0,i)}function f(){s.telephon=this.value,lt.set(s),n(0,i)}function d(){s.email=this.value,lt.set(s),n(0,i)}function g(){s.propCont=xt(this),lt.set(s),n(0,i)}function _(){s.budget=ps(this.value),lt.set(s),n(0,i)}function v(){s.comContact=this.value,lt.set(s),n(0,i)}function w(){s.typeContact=xt(this),lt.set(s),n(0,i)}function E(){s.selecMC=xt(this),lt.set(s),n(0,i)}function A(){s.modePay=xt(this),lt.set(s),n(0,i)}function O(){s.selecTP=xt(this),lt.set(s),n(0,i)}function R(){s.rangeProp=xt(this),lt.set(s),n(0,i)}function F(){s.numBeds=xt(this),lt.set(s),n(0,i)}function $(){s.numBaths=xt(this),lt.set(s),n(0,i)}function U(){s.halfBathroom=xt(this),lt.set(s),n(0,i)}function Q(){s.numParks=xt(this),lt.set(s),n(0,i)}function P(K){t.$$.not_equal(s.locaProperty,K)&&(s.locaProperty=K,lt.set(s))}function N(K){t.$$.not_equal(s.tagsProperty,K)&&(s.tagsProperty=K,lt.set(s))}return[i,o,s,a,l,u,h,f,d,g,_,v,w,E,A,O,R,F,$,U,Q,P,N]}class pI extends Ye{constructor(e){super(),Qe(this,e,dI,fI,ze,{},null,[-1,-1])}}function kf(t,e,n){const s=t.slice();return s[24]=e[n],s}function Ef(t,e,n){const s=t.slice();return s[27]=e[n],s}function Tf(t,e,n){const s=t.slice();return s[30]=e[n],s}function If(t,e,n){const s=t.slice();return s[33]=e[n],s}function Cf(t,e,n){const s=t.slice();return s[36]=e[n],s}function Sf(t,e,n){const s=t.slice();return s[39]=e[n],s}function Af(t,e,n){const s=t.slice();return s[42]=e[n],s}function mI(t){let e,n=En(t[1].createdAt)+"",s,i,r;return{c(){e=p("h3"),s=D(n),m(e,"class","dataInput")},m(o,a){k(o,e,a),c(e,s),i||(r=B(e,"dblclick",t[3]),i=!0)},p(o,a){a[0]&2&&n!==(n=En(o[1].createdAt)+"")&&ie(s,n)},d(o){o&&b(e),i=!1,r()}}}function gI(t){let e,n,s;return{c(){e=p("input"),m(e,"class","dataInput"),m(e,"type","date")},m(i,r){k(i,e,r),de(e,t[1].createdAt),n||(s=B(e,"input",t[4]),n=!0)},p(i,r){r[0]&2&&de(e,i[1].createdAt)},d(i){i&&b(e),n=!1,s()}}}function Df(t){let e,n=t[42]+"",s;return{c(){e=p("option"),s=D(n),m(e,"type","checkbox"),e.__value=t[42],e.value=e.__value},m(i,r){k(i,e,r),c(e,s)},p:ue,d(i){i&&b(e)}}}function Rf(t){let e,n=t[39]+"",s,i;return{c(){e=p("option"),s=D(n),i=y(),m(e,"type","checkbox"),e.__value=t[39],e.value=e.__value},m(r,o){k(r,e,o),c(e,s),c(e,i)},p:ue,d(r){r&&b(e)}}}function Pf(t){let e,n=t[36]+"",s,i;return{c(){e=p("option"),s=D(n),i=D(" Rec\xE1maras"),m(e,"type","checkbox"),e.__value=t[36],e.value=e.__value},m(r,o){k(r,e,o),c(e,s),c(e,i)},p:ue,d(r){r&&b(e)}}}function Nf(t){let e,n=t[33]+"",s,i;return{c(){e=p("option"),s=D(n),i=D(" ba\xF1os"),m(e,"type","checkbox"),e.__value=t[33],e.value=e.__value},m(r,o){k(r,e,o),c(e,s),c(e,i)},p:ue,d(r){r&&b(e)}}}function Of(t){let e,n=t[30]+"",s,i;return{c(){e=p("option"),s=D(n),i=D(" Medios ba\xF1os"),m(e,"type","checkbox"),e.__value=t[30],e.value=e.__value},m(r,o){k(r,e,o),c(e,s),c(e,i)},p:ue,d(r){r&&b(e)}}}function $f(t){let e,n=t[27]+"",s,i;return{c(){e=p("option"),s=D(n),i=D(" Estacionamientos"),m(e,"type","checkbox"),e.__value=t[27],e.value=e.__value},m(r,o){k(r,e,o),c(e,s),c(e,i)},p:ue,d(r){r&&b(e)}}}function Lf(t){let e,n=t[24]+"",s;return{c(){e=p("option"),s=D(n),m(e,"type","checkbox"),e.__value=t[24],e.value=e.__value},m(i,r){k(i,e,r),c(e,s)},p:ue,d(i){i&&b(e)}}}function _I(t){let e,n,s,i,r,o,a,l,u,h,f,d,g,_,v,w,E,A,O,R,F,$,U,Q,P,N,K,L,se,Z,G,q,ee,C,H,W,S,re,be,ve,Te,De,Oe,Ie,V,ne,gt,_t,et,ut,Gt,Xe,vt,Tt,Wt,Ge,Ft,Et,Qt,ct,Vt,yt,Je,ht,Me,Rt,Be,Yt,We,tt,ot,It,nt,Ct;function at(T,te){if(T[0])return gI;if(T[2]==="propEditing")return mI}let Pt=at(t),he=Pt&&Pt(t),we=Bo,me=[];for(let T=0;T<we.length;T+=1)me[T]=Df(Af(t,we,T));let Xt=Jh,$e=[];for(let T=0;T<Xt.length;T+=1)$e[T]=Rf(Sf(t,Xt,T));let on=jo,Le=[];for(let T=0;T<on.length;T+=1)Le[T]=Pf(Cf(t,on,T));let $n=Rn,St=[];for(let T=0;T<$n.length;T+=1)St[T]=Nf(If(t,$n,T));let An=Rn,pt=[];for(let T=0;T<An.length;T+=1)pt[T]=Of(Tf(t,An,T));let I=Rn,J=[];for(let T=0;T<I.length;T+=1)J[T]=$f(Ef(t,I,T));let fe=ef,bt=[];for(let T=0;T<fe.length;T+=1)bt[T]=Lf(kf(t,fe,T));function M(T){t[22](T)}let Ce={};t[1].locaProperty!==void 0&&(Ce.ubication=t[1].locaProperty),Be=new a_({props:Ce}),Xn.push(()=>Us(Be,"ubication",M));function Br(T){t[23](T)}let os={};return t[1].tagsProperty!==void 0&&(os.tag=t[1].tagsProperty),tt=new l_({props:os}),Xn.push(()=>Us(tt,"tag",Br)),{c(){e=p("div"),he&&he.c(),n=y(),s=p("select"),i=p("option"),i.textContent="Tipo de Propiedad";for(let T=0;T<me.length;T+=1)me[T].c();r=y(),o=p("label"),o.innerHTML=`Titulo
       <input type="text"/>`,a=y(),l=p("label"),u=D(`Colonia\r
        `),h=p("input"),f=y(),d=p("label"),g=D(`Nombre de la Propiead\r
        `),_=p("input"),v=y(),w=p("label"),E=D(`Clave EB\r
        `),A=p("input"),O=y(),R=p("label"),F=D(`Clave MH\r
        `),$=p("input"),U=y(),Q=p("div"),P=p("textarea"),N=y(),K=p("select"),L=p("option"),L.textContent="Tipo de Operaci\xF3n";for(let T=0;T<$e.length;T+=1)$e[T].c();se=y(),Z=p("select"),G=p("option"),G.textContent="# Rec\xE1maras";for(let T=0;T<Le.length;T+=1)Le[T].c();q=y(),ee=p("select"),C=p("option"),C.textContent="# Ba\xF1os";for(let T=0;T<St.length;T+=1)St[T].c();H=y(),W=p("select"),S=p("option"),S.textContent="# Medios Ba\xF1os";for(let T=0;T<pt.length;T+=1)pt[T].c();re=y(),be=p("select"),ve=p("option"),ve.textContent="# Estacionamientos";for(let T=0;T<J.length;T+=1)J[T].c();Te=y(),De=p("label"),Oe=D(`Area de Construcci\xF3n\r
            `),Ie=p("input"),V=y(),ne=p("label"),gt=D(`Area de Terreno\r
            `),_t=p("input"),et=y(),ut=p("label"),Gt=D(`Precio\r
            `),Xe=p("input"),vt=y(),Tt=p("label"),Wt=D(`Link Imgen\r
        `),Ge=p("input"),Ft=y(),Et=p("label"),Qt=D(`Link de la Propiedad\r
        `),ct=p("input"),Vt=y(),yt=p("label"),yt.innerHTML=`Propietario
            <input type="text"/>`,Je=y(),ht=p("select"),Me=p("option"),Me.textContent="Tipo de Encargado";for(let T=0;T<bt.length;T+=1)bt[T].c();Rt=y(),le(Be.$$.fragment),We=y(),le(tt.$$.fragment),i.disabled=!0,i.selected=!0,i.__value="",i.value=i.__value,m(s,"class","selTP"),m(s,"id","selTP"),m(s,"name","selTP"),t[1].selecTP===void 0&&Ze(()=>t[5].call(s)),m(h,"type","text"),m(_,"type","text"),m(A,"type","text"),m($,"type","text"),m(P,"placeholder","Comentarios"),m(P,"cols","65"),m(P,"rows","5"),m(P,"class","form-control"),m(Q,"class","col"),L.disabled=!0,L.selected=!0,L.__value="",L.value=L.__value,t[1].typeOperation===void 0&&Ze(()=>t[11].call(K)),G.disabled=!0,G.selected=!0,G.__value="",G.value=G.__value,t[1].beds===void 0&&Ze(()=>t[12].call(Z)),C.disabled=!0,C.selected=!0,C.__value="",C.value=C.__value,t[1].bathroom===void 0&&Ze(()=>t[13].call(ee)),S.disabled=!0,S.selected=!0,S.__value="",S.value=S.__value,t[1].halfBathroom===void 0&&Ze(()=>t[14].call(W)),ve.disabled=!0,ve.selected=!0,ve.__value="",ve.value=ve.__value,t[1].park===void 0&&Ze(()=>t[15].call(be)),m(Ie,"type","number"),m(_t,"type","number"),m(Xe,"type","number"),m(Ge,"type","text"),m(ct,"type","text"),Me.disabled=!0,Me.selected=!0,Me.__value="",Me.value=Me.__value,m(ht,"name","typeSaller"),t[1].typeSaller===void 0&&Ze(()=>t[21].call(ht))},m(T,te){k(T,e,te),he&&he.m(e,null),k(T,n,te),k(T,s,te),c(s,i);for(let Pe=0;Pe<me.length;Pe+=1)me[Pe].m(s,null);Fe(s,t[1].selecTP),k(T,r,te),k(T,o,te),k(T,a,te),k(T,l,te),c(l,u),c(l,h),de(h,t[1].colonia),k(T,f,te),k(T,d,te),c(d,g),c(d,_),de(_,t[1].nameProperty),k(T,v,te),k(T,w,te),c(w,E),c(w,A),de(A,t[1].claveEB),k(T,O,te),k(T,R,te),c(R,F),c(R,$),de($,t[1].claveMH),k(T,U,te),k(T,Q,te),c(Q,P),de(P,t[1].description),k(T,N,te),k(T,K,te),c(K,L);for(let Pe=0;Pe<$e.length;Pe+=1)$e[Pe].m(K,null);Fe(K,t[1].typeOperation),k(T,se,te),k(T,Z,te),c(Z,G);for(let Pe=0;Pe<Le.length;Pe+=1)Le[Pe].m(Z,null);Fe(Z,t[1].beds),k(T,q,te),k(T,ee,te),c(ee,C);for(let Pe=0;Pe<St.length;Pe+=1)St[Pe].m(ee,null);Fe(ee,t[1].bathroom),k(T,H,te),k(T,W,te),c(W,S);for(let Pe=0;Pe<pt.length;Pe+=1)pt[Pe].m(W,null);Fe(W,t[1].halfBathroom),k(T,re,te),k(T,be,te),c(be,ve);for(let Pe=0;Pe<J.length;Pe+=1)J[Pe].m(be,null);Fe(be,t[1].park),k(T,Te,te),k(T,De,te),c(De,Oe),c(De,Ie),de(Ie,t[1].areaBuilding),k(T,V,te),k(T,ne,te),c(ne,gt),c(ne,_t),de(_t,t[1].areaTotal),k(T,et,te),k(T,ut,te),c(ut,Gt),c(ut,Xe),de(Xe,t[1].price),k(T,vt,te),k(T,Tt,te),c(Tt,Wt),c(Tt,Ge),de(Ge,t[1].urlImage),k(T,Ft,te),k(T,Et,te),c(Et,Qt),c(Et,ct),de(ct,t[1].urlProp),k(T,Vt,te),k(T,yt,te),k(T,Je,te),k(T,ht,te),c(ht,Me);for(let Pe=0;Pe<bt.length;Pe+=1)bt[Pe].m(ht,null);Fe(ht,t[1].typeSaller),k(T,Rt,te),oe(Be,T,te),k(T,We,te),oe(tt,T,te),It=!0,nt||(Ct=[B(s,"change",t[5]),B(h,"input",t[6]),B(_,"input",t[7]),B(A,"input",t[8]),B($,"input",t[9]),B(P,"input",t[10]),B(K,"change",t[11]),B(Z,"change",t[12]),B(ee,"change",t[13]),B(W,"change",t[14]),B(be,"change",t[15]),B(Ie,"input",t[16]),B(_t,"input",t[17]),B(Xe,"input",t[18]),B(Ge,"input",t[19]),B(ct,"input",t[20]),B(ht,"change",t[21])],nt=!0)},p(T,te){if(Pt===(Pt=at(T))&&he?he.p(T,te):(he&&he.d(1),he=Pt&&Pt(T),he&&(he.c(),he.m(e,null))),te&0){we=Bo;let Y;for(Y=0;Y<we.length;Y+=1){const st=Af(T,we,Y);me[Y]?me[Y].p(st,te):(me[Y]=Df(st),me[Y].c(),me[Y].m(s,null))}for(;Y<me.length;Y+=1)me[Y].d(1);me.length=we.length}if(te[0]&2&&Fe(s,T[1].selecTP),te[0]&2&&h.value!==T[1].colonia&&de(h,T[1].colonia),te[0]&2&&_.value!==T[1].nameProperty&&de(_,T[1].nameProperty),te[0]&2&&A.value!==T[1].claveEB&&de(A,T[1].claveEB),te[0]&2&&$.value!==T[1].claveMH&&de($,T[1].claveMH),te[0]&2&&de(P,T[1].description),te&0){Xt=Jh;let Y;for(Y=0;Y<Xt.length;Y+=1){const st=Sf(T,Xt,Y);$e[Y]?$e[Y].p(st,te):($e[Y]=Rf(st),$e[Y].c(),$e[Y].m(K,null))}for(;Y<$e.length;Y+=1)$e[Y].d(1);$e.length=Xt.length}if(te[0]&2&&Fe(K,T[1].typeOperation),te&0){on=jo;let Y;for(Y=0;Y<on.length;Y+=1){const st=Cf(T,on,Y);Le[Y]?Le[Y].p(st,te):(Le[Y]=Pf(st),Le[Y].c(),Le[Y].m(Z,null))}for(;Y<Le.length;Y+=1)Le[Y].d(1);Le.length=on.length}if(te[0]&2&&Fe(Z,T[1].beds),te&0){$n=Rn;let Y;for(Y=0;Y<$n.length;Y+=1){const st=If(T,$n,Y);St[Y]?St[Y].p(st,te):(St[Y]=Nf(st),St[Y].c(),St[Y].m(ee,null))}for(;Y<St.length;Y+=1)St[Y].d(1);St.length=$n.length}if(te[0]&2&&Fe(ee,T[1].bathroom),te&0){An=Rn;let Y;for(Y=0;Y<An.length;Y+=1){const st=Tf(T,An,Y);pt[Y]?pt[Y].p(st,te):(pt[Y]=Of(st),pt[Y].c(),pt[Y].m(W,null))}for(;Y<pt.length;Y+=1)pt[Y].d(1);pt.length=An.length}if(te[0]&2&&Fe(W,T[1].halfBathroom),te&0){I=Rn;let Y;for(Y=0;Y<I.length;Y+=1){const st=Ef(T,I,Y);J[Y]?J[Y].p(st,te):(J[Y]=$f(st),J[Y].c(),J[Y].m(be,null))}for(;Y<J.length;Y+=1)J[Y].d(1);J.length=I.length}if(te[0]&2&&Fe(be,T[1].park),te[0]&2&&ps(Ie.value)!==T[1].areaBuilding&&de(Ie,T[1].areaBuilding),te[0]&2&&ps(_t.value)!==T[1].areaTotal&&de(_t,T[1].areaTotal),te[0]&2&&ps(Xe.value)!==T[1].price&&de(Xe,T[1].price),te[0]&2&&Ge.value!==T[1].urlImage&&de(Ge,T[1].urlImage),te[0]&2&&ct.value!==T[1].urlProp&&de(ct,T[1].urlProp),te&0){fe=ef;let Y;for(Y=0;Y<fe.length;Y+=1){const st=kf(T,fe,Y);bt[Y]?bt[Y].p(st,te):(bt[Y]=Lf(st),bt[Y].c(),bt[Y].m(ht,null))}for(;Y<bt.length;Y+=1)bt[Y].d(1);bt.length=fe.length}te[0]&2&&Fe(ht,T[1].typeSaller);const Pe={};!Yt&&te[0]&2&&(Yt=!0,Pe.ubication=T[1].locaProperty,Ms(()=>Yt=!1)),Be.$set(Pe);const Ii={};!ot&&te[0]&2&&(ot=!0,Ii.tag=T[1].tagsProperty,Ms(()=>ot=!1)),tt.$set(Ii)},i(T){It||(j(Be.$$.fragment,T),j(tt.$$.fragment,T),It=!0)},o(T){z(Be.$$.fragment,T),z(tt.$$.fragment,T),It=!1},d(T){T&&b(e),he&&he.d(),T&&b(n),T&&b(s),He(me,T),T&&b(r),T&&b(o),T&&b(a),T&&b(l),T&&b(f),T&&b(d),T&&b(v),T&&b(w),T&&b(O),T&&b(R),T&&b(U),T&&b(Q),T&&b(N),T&&b(K),He($e,T),T&&b(se),T&&b(Z),He(Le,T),T&&b(q),T&&b(ee),He(St,T),T&&b(H),T&&b(W),He(pt,T),T&&b(re),T&&b(be),He(J,T),T&&b(Te),T&&b(De),T&&b(V),T&&b(ne),T&&b(et),T&&b(ut),T&&b(vt),T&&b(Tt),T&&b(Ft),T&&b(Et),T&&b(Vt),T&&b(yt),T&&b(Je),T&&b(ht),He(bt,T),T&&b(Rt),ae(Be,T),T&&b(We),ae(tt,T),nt=!1,xe(Ct)}}}function vI(t,e,n){let s,i;Ve(t,it,K=>n(1,s=K)),Ve(t,wt,K=>n(2,i=K));let r=!1;function o(){n(0,r=!0)}function a(){s.createdAt=this.value,it.set(s)}function l(){s.selecTP=xt(this),it.set(s)}function u(){s.colonia=this.value,it.set(s)}function h(){s.nameProperty=this.value,it.set(s)}function f(){s.claveEB=this.value,it.set(s)}function d(){s.claveMH=this.value,it.set(s)}function g(){s.description=this.value,it.set(s)}function _(){s.typeOperation=xt(this),it.set(s)}function v(){s.beds=xt(this),it.set(s)}function w(){s.bathroom=xt(this),it.set(s)}function E(){s.halfBathroom=xt(this),it.set(s)}function A(){s.park=xt(this),it.set(s)}function O(){s.areaBuilding=ps(this.value),it.set(s)}function R(){s.areaTotal=ps(this.value),it.set(s)}function F(){s.price=ps(this.value),it.set(s)}function $(){s.urlImage=this.value,it.set(s)}function U(){s.urlProp=this.value,it.set(s)}function Q(){s.typeSaller=xt(this),it.set(s)}function P(K){t.$$.not_equal(s.locaProperty,K)&&(s.locaProperty=K,it.set(s))}function N(K){t.$$.not_equal(s.tagsProperty,K)&&(s.tagsProperty=K,it.set(s))}return[r,s,i,o,a,l,u,h,f,d,g,_,v,w,E,A,O,R,F,$,U,Q,P,N]}class yI extends Ye{constructor(e){super(),Qe(this,e,vI,_I,ze,{},null,[-1,-1])}}function bI(t){let e;return{c(){e=D("Editar")},m(n,s){k(n,e,s)},d(n){n&&b(e)}}}function wI(t){let e;return{c(){e=D("Guardar")},m(n,s){k(n,e,s)},d(n){n&&b(e)}}}function kI(t){let e,n,s,i,r,o,a,l,u,h;n=new pI({});function f(_,v){return _[0]?bI:wI}let d=f(t),g=d(t);return{c(){e=p("div"),le(n.$$.fragment),s=y(),i=p("div"),r=p("button"),g.c(),o=y(),a=p("button"),a.textContent="Cancel",m(r,"class","btn-save"),m(a,"class","btn-cancel"),m(i,"class","contSavCan svelte-1at07r"),m(e,"class","altaContactos")},m(_,v){k(_,e,v),oe(n,e,null),c(e,s),c(e,i),c(i,r),g.m(r,null),c(i,o),c(i,a),l=!0,u||(h=[B(r,"click",t[5]),B(a,"click",t[3])],u=!0)},p(_,[v]){d!==(d=f(_))&&(g.d(1),g=d(_),g&&(g.c(),g.m(r,null)))},i(_){l||(j(n.$$.fragment,_),l=!0)},o(_){z(n.$$.fragment,_),l=!1},d(_){_&&b(e),ae(n),g.d(),u=!1,xe(h)}}}function EI(t,e,n){let s,i;Ve(t,wt,f=>n(7,s=f)),Ve(t,lt,f=>n(1,i=f));let r=!1,o;async function a(f){if(o=Date.now(),f={...f,createdAt:o},s!="contEditing"){const d=ns(sn,"contacts");await rr(d,f)}else await ba(ss(sn,"contacts",f.id),f),n(0,r=!1);f=[],mt(wt,s="contSelect",s)}function l(f){try{console.log("se dio de alta a: ");const d=ns(sn,"todos");rr(d,f)}catch(d){console.log("error",d)}}function u(){n(0,r=!0),location.href="/"}return[r,i,a,u,l,()=>a(i)]}class TI extends Ye{constructor(e){super(),Qe(this,e,EI,kI,ze,{addContact:4})}get addContact(){return this.$$.ctx[4]}}function Mf(t,e,n){const s=t.slice();return s[40]=e[n],s}function Uf(t,e,n){const s=t.slice();return s[43]=e[n],s}function Ff(t){let e,n,s,i,r,o=t[8].name+"",a,l,u=t[8].lastname+"",h,f,d,g,_=En(t[8].createdAt)+"",v,w,E,A,O=t[8].selecTP+"",R,F,$=t[8].numBeds+"",U,Q,P=t[8].numBaths+"",N,K,L=t[8].numParks+"",se,Z,G,q,ee,C,H=t[8].budget+"",W,S,re,be=t[8].selecTP+"",ve,Te,De,Oe,Ie,V=t[8].telephon+"",ne,gt,_t,et=t[8].email+"",ut,Gt,Xe,vt,Tt=t[8].tagsProperty.join(",  ")+"",Wt,Ge,Ft,Et,Qt=t[8].locaProperty.join(",  ")+"",ct,Vt,yt,Je,ht,Me,Rt,Be,Yt,We,tt=t[8].contactStage+"",ot,It,nt,Ct=t[8].comContact+"",at,Pt,he,we,me,Xt,$e,on,Le,$n,St,An,pt,I,J,fe,bt,M,Ce,Br,os,T,te,Pe,Ii,Y,st,tc,Ci,Ia,Si,Nt,Ca,nc,Ys=t[8].sendedProperties,vn=[];for(let ge=0;ge<Ys.length;ge+=1)vn[ge]=Vf(Uf(t,Ys,ge));let yn=t[0]&&Bf(t),Bt=t[2]&&jf(t),jt=t[7]&&qf(t),qt=t[6]&&Hf(t);return{c(){e=p("div"),n=p("div"),s=p("h4"),s.textContent="Contacto",i=y(),r=p("h2"),a=D(o),l=y(),h=D(u),f=y(),d=p("p"),g=D("Fecha Alta: "),v=D(_),w=y(),E=p("p"),A=D("Busca  "),R=D(O),F=D(", de "),U=D($),Q=D(" rec\xE1maras,  "),N=D(P),K=D(" ba\xF1os y "),se=D(L),Z=D(" estacionamientos"),G=y(),q=p("p"),ee=D("Presupuesto tope: "),C=p("strong"),W=D(H),S=D(" : Tipo de propiedad buscada: "),re=p("strong"),ve=D(be),Te=y(),De=p("p"),Oe=D("Tel\xE9fono: "),Ie=p("strong"),ne=D(V),gt=D(" ---- Email: "),_t=p("strong"),ut=D(et),Gt=y(),Xe=p("p"),vt=D("Preferencias: "),Wt=D(Tt),Ge=y(),Ft=p("p"),Et=D("Ubicaciones: "),ct=D(Qt),Vt=y(),yt=p("div"),Je=p("p"),Je.textContent="Propiedades enviadas:",ht=y(),Me=p("div");for(let ge=0;ge<vn.length;ge+=1)vn[ge].c();Rt=y(),Be=p("div"),yn&&yn.c(),Yt=y(),We=p("p"),ot=D(tt),It=y(),nt=p("p"),at=D(Ct),Pt=y(),he=p("div"),we=p("button"),we.textContent="Programar Evento",me=y(),Bt&&Bt.c(),Xt=y(),$e=p("button"),$e.textContent="Ver Propiedades de Interes",on=y(),Le=p("button"),Le.textContent="Buscar Propiedad",$n=y(),jt&&jt.c(),St=y(),An=p("div"),pt=p("button"),pt.textContent="Cancelar",I=y(),J=p("div"),fe=p("div"),bt=p("link"),M=y(),Ce=p("textarea"),Br=y(),os=p("div"),T=p("button"),T.textContent="Enviar WhatsApp",te=y(),Pe=p("button"),Pe.textContent="Guardar Info",Ii=y(),Y=p("div"),st=p("i"),st.textContent="edit",tc=y(),Ci=p("i"),Ci.textContent="delete_forever",Ia=y(),qt&&qt.c(),Si=_n(),m(Me,"class","mostImage svelte-ce274g"),m(yt,"class","propMost"),m(we,"class","btnCommon"),m($e,"class","btnCommon"),m(Le,"class","btnCommon"),m(pt,"class","btnCommon btnCancel"),m(bt,"href","https://fonts.googleapis.com/icon?family=Material+Icons"),m(bt,"rel","stylesheet"),m(Ce,"class","texArea"),m(Ce,"cols","65"),m(Ce,"rows","5"),m(Ce,"placeholder","Ingresa un comentario"),m(T,"class","btnCommon btnWhatsApp"),m(Pe,"class","btnCommon"),m(st,"class","material-icons edit"),m(Ci,"class","material-icons delete"),m(Y,"class","iconContent"),m(e,"class","container")},m(ge,qe){k(ge,e,qe),c(e,n),c(n,s),c(n,i),c(n,r),c(r,a),c(r,l),c(r,h),c(n,f),c(n,d),c(d,g),c(d,v),c(n,w),c(n,E),c(E,A),c(E,R),c(E,F),c(E,U),c(E,Q),c(E,N),c(E,K),c(E,se),c(E,Z),c(n,G),c(n,q),c(q,ee),c(q,C),c(C,W),c(q,S),c(q,re),c(re,ve),c(n,Te),c(n,De),c(De,Oe),c(De,Ie),c(Ie,ne),c(De,gt),c(De,_t),c(_t,ut),c(n,Gt),c(n,Xe),c(Xe,vt),c(Xe,Wt),c(n,Ge),c(n,Ft),c(Ft,Et),c(Ft,ct),c(n,Vt),c(n,yt),c(yt,Je),c(yt,ht),c(yt,Me);for(let an=0;an<vn.length;an+=1)vn[an].m(Me,null);c(e,Rt),c(e,Be),yn&&yn.m(Be,null),c(e,Yt),c(e,We),c(We,ot),c(e,It),c(e,nt),c(nt,at),c(e,Pt),c(e,he),c(he,we),c(he,me),Bt&&Bt.m(he,null),c(he,Xt),c(he,$e),c(he,on),c(he,Le),c(he,$n),jt&&jt.m(he,null),c(e,St),c(e,An),c(An,pt),c(e,I),c(e,J),c(J,fe),c(fe,bt),c(fe,M),c(fe,Ce),de(Ce,t[4]),c(fe,Br),c(fe,os),c(os,T),c(os,te),c(os,Pe),c(J,Ii),c(J,Y),c(Y,st),c(Y,tc),c(Y,Ci),k(ge,Ia,qe),qt&&qt.m(ge,qe),k(ge,Si,qe),Nt=!0,Ca||(nc=[B(we,"click",t[27]),B($e,"click",t[28]),B(Le,"click",t[14]),B(pt,"click",t[17]),B(Ce,"keypress",t[18]),B(Ce,"input",t[30]),B(T,"click",t[23]),B(Pe,"click",t[24]),B(st,"click",t[19]),B(Ci,"click",t[20])],Ca=!0)},p(ge,qe){if((!Nt||qe[0]&256)&&o!==(o=ge[8].name+"")&&ie(a,o),(!Nt||qe[0]&256)&&u!==(u=ge[8].lastname+"")&&ie(h,u),(!Nt||qe[0]&256)&&_!==(_=En(ge[8].createdAt)+"")&&ie(v,_),(!Nt||qe[0]&256)&&O!==(O=ge[8].selecTP+"")&&ie(R,O),(!Nt||qe[0]&256)&&$!==($=ge[8].numBeds+"")&&ie(U,$),(!Nt||qe[0]&256)&&P!==(P=ge[8].numBaths+"")&&ie(N,P),(!Nt||qe[0]&256)&&L!==(L=ge[8].numParks+"")&&ie(se,L),(!Nt||qe[0]&256)&&H!==(H=ge[8].budget+"")&&ie(W,H),(!Nt||qe[0]&256)&&be!==(be=ge[8].selecTP+"")&&ie(ve,be),(!Nt||qe[0]&256)&&V!==(V=ge[8].telephon+"")&&ie(ne,V),(!Nt||qe[0]&256)&&et!==(et=ge[8].email+"")&&ie(ut,et),(!Nt||qe[0]&256)&&Tt!==(Tt=ge[8].tagsProperty.join(",  ")+"")&&ie(Wt,Tt),(!Nt||qe[0]&256)&&Qt!==(Qt=ge[8].locaProperty.join(",  ")+"")&&ie(ct,Qt),qe[0]&6402){Ys=ge[8].sendedProperties;let an;for(an=0;an<Ys.length;an+=1){const sc=Uf(ge,Ys,an);vn[an]?vn[an].p(sc,qe):(vn[an]=Vf(sc),vn[an].c(),vn[an].m(Me,null))}for(;an<vn.length;an+=1)vn[an].d(1);vn.length=Ys.length}ge[0]?yn?yn.p(ge,qe):(yn=Bf(ge),yn.c(),yn.m(Be,null)):yn&&(yn.d(1),yn=null),(!Nt||qe[0]&256)&&tt!==(tt=ge[8].contactStage+"")&&ie(ot,tt),(!Nt||qe[0]&256)&&Ct!==(Ct=ge[8].comContact+"")&&ie(at,Ct),ge[2]?Bt?(Bt.p(ge,qe),qe[0]&4&&j(Bt,1)):(Bt=jf(ge),Bt.c(),j(Bt,1),Bt.m(he,Xt)):Bt&&(Ot(),z(Bt,1,1,()=>{Bt=null}),$t()),ge[7]?jt?(jt.p(ge,qe),qe[0]&128&&j(jt,1)):(jt=qf(ge),jt.c(),j(jt,1),jt.m(he,null)):jt&&(Ot(),z(jt,1,1,()=>{jt=null}),$t()),qe[0]&16&&de(Ce,ge[4]),ge[6]?qt?(qt.p(ge,qe),qe[0]&64&&j(qt,1)):(qt=Hf(ge),qt.c(),j(qt,1),qt.m(Si.parentNode,Si)):qt&&(Ot(),z(qt,1,1,()=>{qt=null}),$t())},i(ge){Nt||(j(Bt),j(jt),j(qt),Nt=!0)},o(ge){z(Bt),z(jt),z(qt),Nt=!1},d(ge){ge&&b(e),He(vn,ge),yn&&yn.d(),Bt&&Bt.d(),jt&&jt.d(),ge&&b(Ia),qt&&qt.d(ge),ge&&b(Si),Ca=!1,xe(nc)}}}function Vf(t){let e,n=t[43]+"",s,i,r,o;function a(){return t[25](t[43])}return{c(){e=p("p"),s=D(n),m(e,"value",i=t[43])},m(l,u){k(l,e,u),c(e,s),r||(o=[B(e,"mouseenter",a),B(e,"mouseout",t[12]),B(e,"dblclick",t[26])],r=!0)},p(l,u){t=l,u[0]&256&&n!==(n=t[43]+"")&&ie(s,n),u[0]&256&&i!==(i=t[43])&&m(e,"value",i)},d(l){l&&b(e),r=!1,xe(o)}}}function Bf(t){let e,n=t[1][0].nameProperty+"",s,i,r,o,a;return{c(){e=p("h3"),s=D(n),i=y(),r=p("img"),m(e,"class","svelte-ce274g"),m(r,"class","imgPropContSelect"),m(r,"height","200"),fn(r.src,o=t[1][0].urlImage)||m(r,"src",o),m(r,"alt",a=t[1][0].claveEB)},m(l,u){k(l,e,u),c(e,s),k(l,i,u),k(l,r,u)},p(l,u){u[0]&2&&n!==(n=l[1][0].nameProperty+"")&&ie(s,n),u[0]&2&&!fn(r.src,o=l[1][0].urlImage)&&m(r,"src",o),u[0]&2&&a!==(a=l[1][0].claveEB)&&m(r,"alt",a)},d(l){l&&b(e),l&&b(i),l&&b(r)}}}function jf(t){let e,n;const s=[t[8]];let i={};for(let r=0;r<s.length;r+=1)i=Kt(i,s[r]);return e=new nI({props:i}),e.$on("closeIt",t[21]),{c(){le(e.$$.fragment)},m(r,o){oe(e,r,o),n=!0},p(r,o){const a=o[0]&256?Cn(s,[xn(r[8])]):{};e.$set(a)},i(r){n||(j(e.$$.fragment,r),n=!0)},o(r){z(e.$$.fragment,r),n=!1},d(r){ae(e,r)}}}function qf(t){let e,n,s;function i(o){t[29](o)}let r={};return t[3]!==void 0&&(r.searchTerm=t[3]),e=new ec({props:r}),Xn.push(()=>Us(e,"searchTerm",i)),e.$on("input",t[15]),{c(){le(e.$$.fragment)},m(o,a){oe(e,o,a),s=!0},p(o,a){const l={};!n&&a[0]&8&&(n=!0,l.searchTerm=o[3],Ms(()=>n=!1)),e.$set(l)},i(o){s||(j(e.$$.fragment,o),s=!0)},o(o){z(e.$$.fragment,o),s=!1},d(o){ae(e,o)}}}function Hf(t){let e,n,s,i=t[10].length+"",r,o,a,l,u=t[10],h=[];for(let g=0;g<u.length;g+=1)h[g]=Kf(Mf(t,u,g));const f=g=>z(h[g],1,1,()=>{h[g]=null});let d=t[10].length===0&&zf();return{c(){e=p("main"),n=p("h3"),s=D("Propiedades encontradas: "),r=D(i),o=y();for(let g=0;g<h.length;g+=1)h[g].c();a=y(),d&&d.c(),m(n,"class","svelte-ce274g"),m(e,"id","bookshelf"),m(e,"class","svelte-ce274g")},m(g,_){k(g,e,_),c(e,n),c(n,s),c(n,r),c(e,o);for(let v=0;v<h.length;v+=1)h[v].m(e,null);c(e,a),d&&d.m(e,null),l=!0},p(g,_){if((!l||_[0]&1024)&&i!==(i=g[10].length+"")&&ie(r,i),_[0]&4195360){u=g[10];let v;for(v=0;v<u.length;v+=1){const w=Mf(g,u,v);h[v]?(h[v].p(w,_),j(h[v],1)):(h[v]=Kf(w),h[v].c(),j(h[v],1),h[v].m(e,a))}for(Ot(),v=u.length;v<h.length;v+=1)f(v);$t()}g[10].length===0?d||(d=zf(),d.c(),d.m(e,null)):d&&(d.d(1),d=null)},i(g){if(!l){for(let _=0;_<u.length;_+=1)j(h[_]);l=!0}},o(g){h=h.filter(Boolean);for(let _=0;_<h.length;_+=1)z(h[_]);l=!1},d(g){g&&b(e),He(h,g),d&&d.d()}}}function Kf(t){let e,n,s,i,r,o,a,l,u;const h=[t[40]];let f={};for(let d=0;d<h.length;d+=1)f=Kt(f,h[d]);return r=new r_({props:f}),{c(){e=p("section"),n=p("input"),i=y(),le(r.$$.fragment),m(n,"type","checkbox"),n.__value=s=t[40].urlProp,n.value=n.__value,m(n,"class","form-check"),t[32][0].push(n),m(e,"class","property svelte-ce274g")},m(d,g){k(d,e,g),c(e,n),n.checked=~t[5].indexOf(n.__value),c(e,i),oe(r,e,null),a=!0,l||(u=[B(n,"change",t[31]),B(e,"click",t[22])],l=!0)},p(d,g){t=d,(!a||g[0]&1024&&s!==(s=t[40].urlProp))&&(n.__value=s,n.value=n.__value),g[0]&32&&(n.checked=~t[5].indexOf(n.__value));const _=g[0]&1024?Cn(h,[xn(t[40])]):{};r.$set(_)},i(d){a||(j(r.$$.fragment,d),Ze(()=>{o||(o=Pn(e,$o,{duration:500,easing:Po},!0)),o.run(1)}),a=!0)},o(d){z(r.$$.fragment,d),o||(o=Pn(e,$o,{duration:500,easing:Po},!1)),o.run(0),a=!1},d(d){d&&b(e),t[32][0].splice(t[32][0].indexOf(n),1),ae(r),d&&o&&o.end(),l=!1,xe(u)}}}function zf(t){let e;return{c(){e=p("h3"),e.textContent='"No hay Propiedades para este contacto"',m(e,"class","svelte-ce274g")},m(n,s){k(n,e,s)},d(n){n&&b(e)}}}function II(t){let e,n,s=t[9]==="contSelect"&&Ff(t);return{c(){e=p("main"),s&&s.c()},m(i,r){k(i,e,r),s&&s.m(e,null),n=!0},p(i,r){i[9]==="contSelect"?s?(s.p(i,r),r[0]&512&&j(s,1)):(s=Ff(i),s.c(),j(s,1),s.m(e,null)):s&&(Ot(),z(s,1,1,()=>{s=null}),$t())},i(i){n||(j(s),n=!0)},o(i){z(s),n=!1},d(i){i&&b(e),s&&s.d()}}}function CI(t){window.open(t)}function SI(t,e,n){let s,i,r;Ve(t,lt,W=>n(8,s=W)),Ve(t,wt,W=>n(9,i=W)),Ve(t,Ol,W=>n(10,r=W));let o=!1,a,l=!1,u,h,f=[],d=!1,g=!1;console.log(i);function _(W){n(0,o=!0),n(1,a=Vn.filter(S=>S.claveEB===W))}function v(){n(0,o=!1)}function w(){console.log("estas en addSchedule"),n(2,l=!0)}function E(){n(7,g=!0)}const A=()=>(n(6,d=!0),mt(Ol,r=Vn.filter(W=>(W.nameProperty+" "+W.colonia+" "+W.claveEB).toLowerCase().includes(u.toLowerCase())),r));function O(W){rI(W),n(6,d=!0)}const R=()=>{mt(wt,i="start",i)};function F(){}function $(){mt(wt,i="contEditing",i)}async function U(){confirm("Deseas eleiminar definitivamente al contacto?")&&(await wa(ss(sn,"contacts",s.id)),window.location.href="/")}function Q(){n(2,l=!1)}function P(){console.log(f)}function N(){console.log(f);let W=`https://api.whatsapp.com/send?phone=52${s.telephon}&text=${f}`;window.open(W),i_()}function K(){console.log(f)}const L=[[]],se=W=>_(W),Z=()=>CI(a[0].urlProp),G=()=>w(),q=()=>O(s);function ee(W){u=W,n(3,u)}function C(){h=this.value,n(4,h)}function H(){f=Jt(L[0],this.__value,this.checked),n(5,f)}return[o,a,l,u,h,f,d,g,s,i,r,_,v,w,E,A,O,R,F,$,U,Q,P,N,K,se,Z,G,q,ee,C,H,L]}class AI extends Ye{constructor(e){super(),Qe(this,e,SI,II,ze,{},null,[-1,-1])}}function Gf(t,e,n){const s=t.slice();return s[22]=e[n],s[24]=n,s}function Wf(t,e,n){const s=t.slice();return s[24]=e[n],s}function Qf(t,e,n){const s=t.slice();return s[12]=e[n],s[24]=n,s}function Yf(t){let e,n,s,i,r,o,a,l,u,h,f,d,g,_,v,w,E,A,O,R,F,$;function U(C){t[14](C)}let Q={};t[3]!==void 0&&(Q.searchTerm=t[3]),r=new ec({props:Q}),Xn.push(()=>Us(r,"searchTerm",U)),r.$on("input",t[11]);let P=t[1],N=[];for(let C=0;C<P.length;C+=1)N[C]=xf(Qf(t,P,C));const K=C=>z(N[C],1,1,()=>{N[C]=null});let L=t[0]>1&&Jf(t),se=[3,2,1],Z=[];for(let C=0;C<3;C+=1)Z[C]=ed(Wf(t,se,C));let G=Array(3),q=[];for(let C=0;C<G.length;C+=1)q[C]=nd(Gf(t,G,C));let ee=t[0]<t[5]&&sd(t);return{c(){e=p("h2"),e.textContent=`${ur.length} Contactos a Mostrar`,n=y(),s=p("button"),s.textContent="Alta de Contacto",i=y(),le(r.$$.fragment),a=y(),l=p("div"),u=p("div");for(let C=0;C<N.length;C+=1)N[C].c();h=y(),f=p("div"),d=p("ul"),L&&L.c(),g=y();for(let C=0;C<3;C+=1)Z[C].c();_=y(),v=p("li"),w=p("span"),E=D(t[0]),A=y();for(let C=0;C<q.length;C+=1)q[C].c();O=y(),ee&&ee.c(),m(s,"class","altaContacto svelte-4ycvq1"),m(f,"class","container pagination"),m(l,"class","mosPag svelte-4ycvq1")},m(C,H){k(C,e,H),k(C,n,H),k(C,s,H),k(C,i,H),oe(r,C,H),k(C,a,H),k(C,l,H),c(l,u);for(let W=0;W<N.length;W+=1)N[W].m(u,null);c(l,h),c(l,f),c(f,d),L&&L.m(d,null),c(d,g);for(let W=0;W<3;W+=1)Z[W].m(d,null);c(d,_),c(d,v),c(v,w),c(w,E),c(d,A);for(let W=0;W<q.length;W+=1)q[W].m(d,null);c(d,O),ee&&ee.m(d,null),R=!0,F||($=B(s,"click",t[9]),F=!0)},p(C,H){const W={};if(!o&&H&8&&(o=!0,W.searchTerm=C[3],Ms(()=>o=!1)),r.$set(W),H&1046){P=C[1];let S;for(S=0;S<P.length;S+=1){const re=Qf(C,P,S);N[S]?(N[S].p(re,H),j(N[S],1)):(N[S]=xf(re),N[S].c(),j(N[S],1),N[S].m(u,null))}for(Ot(),S=P.length;S<N.length;S+=1)K(S);$t()}if(C[0]>1?L?L.p(C,H):(L=Jf(C),L.c(),L.m(d,g)):L&&(L.d(1),L=null),H&257){se=[3,2,1];let S;for(S=0;S<3;S+=1){const re=Wf(C,se,S);Z[S]?Z[S].p(re,H):(Z[S]=ed(re),Z[S].c(),Z[S].m(d,_))}for(;S<3;S+=1)Z[S].d(1)}if((!R||H&1)&&ie(E,C[0]),H&289){G=Array(3);let S;for(S=0;S<G.length;S+=1){const re=Gf(C,G,S);q[S]?q[S].p(re,H):(q[S]=nd(re),q[S].c(),q[S].m(d,O))}for(;S<q.length;S+=1)q[S].d(1);q.length=G.length}C[0]<C[5]?ee?ee.p(C,H):(ee=sd(C),ee.c(),ee.m(d,null)):ee&&(ee.d(1),ee=null)},i(C){if(!R){j(r.$$.fragment,C);for(let H=0;H<P.length;H+=1)j(N[H]);R=!0}},o(C){z(r.$$.fragment,C),N=N.filter(Boolean);for(let H=0;H<N.length;H+=1)z(N[H]);R=!1},d(C){C&&b(e),C&&b(n),C&&b(s),C&&b(i),ae(r,C),C&&b(a),C&&b(l),He(N,C),L&&L.d(),He(Z,C),He(q,C),ee&&ee.d(),F=!1,$()}}}function Xf(t){let e,n,s,i,r,o;const a=[t[12]];let l={};for(let h=0;h<a.length;h+=1)l=Kt(l,a[h]);n=new xT({props:l});function u(){return t[15](t[12])}return{c(){e=p("div"),le(n.$$.fragment),s=y(),m(e,"class","selecContact")},m(h,f){k(h,e,f),oe(n,e,null),c(e,s),i=!0,r||(o=B(e,"click",u),r=!0)},p(h,f){t=h;const d=f&2?Cn(a,[xn(t[12])]):{};n.$set(d)},i(h){i||(j(n.$$.fragment,h),i=!0)},o(h){z(n.$$.fragment,h),i=!1},d(h){h&&b(e),ae(n),r=!1,o()}}}function xf(t){let e,n,s=t[24]>=t[4]&&t[24]<t[2]&&Xf(t);return{c(){s&&s.c(),e=_n()},m(i,r){s&&s.m(i,r),k(i,e,r),n=!0},p(i,r){i[24]>=i[4]&&i[24]<i[2]?s?(s.p(i,r),r&20&&j(s,1)):(s=Xf(i),s.c(),j(s,1),s.m(e.parentNode,e)):s&&(Ot(),z(s,1,1,()=>{s=null}),$t())},i(i){n||(j(s),n=!0)},o(i){z(s),n=!1},d(i){s&&s.d(i),i&&b(e)}}}function Jf(t){let e,n,s,i,r,o,a,l,u;return{c(){e=p("li"),n=p("a"),n.textContent="first",s=y(),i=p("li"),r=p("a"),o=D("previous"),m(n,"href","/blog"),m(r,"href",a="/blog/"+(t[0]-1))},m(h,f){k(h,e,f),c(e,n),k(h,s,f),k(h,i,f),c(i,r),c(r,o),l||(u=[B(n,"click",In(t[16])),B(r,"click",In(t[17]))],l=!0)},p(h,f){f&1&&a!==(a="/blog/"+(h[0]-1))&&m(r,"href",a)},d(h){h&&b(e),h&&b(s),h&&b(i),l=!1,xe(u)}}}function Zf(t){let e,n,s=t[0]-t[24]+"",i,r,o,a;function l(){return t[18](t[24])}return{c(){e=p("li"),n=p("a"),i=D(s),m(n,"href",r="/blog/"+(t[0]-t[24]))},m(u,h){k(u,e,h),c(e,n),c(n,i),o||(a=B(n,"click",In(l)),o=!0)},p(u,h){t=u,h&1&&s!==(s=t[0]-t[24]+"")&&ie(i,s),h&1&&r!==(r="/blog/"+(t[0]-t[24]))&&m(n,"href",r)},d(u){u&&b(e),o=!1,a()}}}function ed(t){let e,n=t[0]-t[24]>0&&Zf(t);return{c(){n&&n.c(),e=_n()},m(s,i){n&&n.m(s,i),k(s,e,i)},p(s,i){s[0]-s[24]>0?n?n.p(s,i):(n=Zf(s),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(s){n&&n.d(s),s&&b(e)}}}function td(t){let e,n,s=t[0]+(t[24]+1)+"",i,r,o,a;function l(){return t[19](t[24])}return{c(){e=p("li"),n=p("a"),i=D(s),m(n,"href",r="/blog/"+(t[0]+(t[24]+1)))},m(u,h){k(u,e,h),c(e,n),c(n,i),o||(a=B(n,"click",In(l)),o=!0)},p(u,h){t=u,h&1&&s!==(s=t[0]+(t[24]+1)+"")&&ie(i,s),h&1&&r!==(r="/blog/"+(t[0]+(t[24]+1)))&&m(n,"href",r)},d(u){u&&b(e),o=!1,a()}}}function nd(t){let e,n=t[0]+(t[24]+1)<=t[5]&&td(t);return{c(){n&&n.c(),e=_n()},m(s,i){n&&n.m(s,i),k(s,e,i)},p(s,i){s[0]+(s[24]+1)<=s[5]?n?n.p(s,i):(n=td(s),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(s){n&&n.d(s),s&&b(e)}}}function sd(t){let e,n,s,i,r,o,a,l,u,h,f;return{c(){e=p("li"),n=p("a"),s=D("next"),r=y(),o=p("li"),a=p("a"),l=D("last"),m(n,"href",i="/blog/"+(t[0]+1)),m(a,"href",u="/blog/"+t[5])},m(d,g){k(d,e,g),c(e,n),c(n,s),k(d,r,g),k(d,o,g),c(o,a),c(a,l),h||(f=[B(n,"click",In(t[20])),B(a,"click",In(t[21]))],h=!0)},p(d,g){g&1&&i!==(i="/blog/"+(d[0]+1))&&m(n,"href",i),g&32&&u!==(u="/blog/"+d[5])&&m(a,"href",u)},d(d){d&&b(e),d&&b(r),d&&b(o),h=!1,xe(f)}}}function id(t){let e,n,s;return n=new AI({props:{$contact:t[7]}}),{c(){e=p("div"),le(n.$$.fragment)},m(i,r){k(i,e,r),oe(n,e,null),s=!0},p(i,r){const o={};r&128&&(o.$contact=i[7]),n.$set(o)},i(i){s||(j(n.$$.fragment,i),s=!0)},o(i){z(n.$$.fragment,i),s=!1},d(i){i&&b(e),ae(n)}}}function rd(t){let e,n,s,i;const r=[t[7]];let o={};for(let a=0;a<r.length;a+=1)o=Kt(o,r[a]);return s=new TI({props:o}),{c(){e=p("div"),n=p("div"),le(s.$$.fragment),m(n,"class","container")},m(a,l){k(a,e,l),c(e,n),oe(s,n,null),i=!0},p(a,l){const u=l&128?Cn(r,[xn(a[7])]):{};s.$set(u)},i(a){i||(j(s.$$.fragment,a),i=!0)},o(a){z(s.$$.fragment,a),i=!1},d(a){a&&b(e),ae(s)}}}function DI(t){let e,n,s,i,r,o,a,l,u,h,f=t[6]==="start"&&Yf(t),d=t[6]==="contSelect"&&id(t),g=(t[6]==="contEditing"||t[6]==="contAdding")&&rd(t);return{c(){e=p("main"),n=p("div"),s=p("h1"),s.textContent="Contactos",i=y(),r=p("img"),a=y(),f&&f.c(),l=y(),d&&d.c(),u=y(),g&&g.c(),fn(r.src,o=n_)||m(r,"src",o),m(r,"alt","contactos"),m(r,"class","svelte-4ycvq1"),m(e,"class","container")},m(_,v){k(_,e,v),c(e,n),c(n,s),c(n,i),c(n,r),c(e,a),f&&f.m(e,null),c(e,l),d&&d.m(e,null),c(e,u),g&&g.m(e,null),h=!0},p(_,[v]){_[6]==="start"?f?(f.p(_,v),v&64&&j(f,1)):(f=Yf(_),f.c(),j(f,1),f.m(e,l)):f&&(Ot(),z(f,1,1,()=>{f=null}),$t()),_[6]==="contSelect"?d?(d.p(_,v),v&64&&j(d,1)):(d=id(_),d.c(),j(d,1),d.m(e,u)):d&&(Ot(),z(d,1,1,()=>{d=null}),$t()),_[6]==="contEditing"||_[6]==="contAdding"?g?(g.p(_,v),v&64&&j(g,1)):(g=rd(_),g.c(),j(g,1),g.m(e,null)):g&&(Ot(),z(g,1,1,()=>{g=null}),$t())},i(_){h||(j(f),j(d),j(g),h=!0)},o(_){z(f),z(d),z(g),h=!1},d(_){_&&b(e),f&&f.d(),d&&d.d(),g&&g.d()}}}let Ja=15;function RI(t,e,n){let s,i,r,o,a,l;Ve(t,wt,P=>n(6,a=P)),Ve(t,lt,P=>n(7,l=P));let u;mt(wt,a="start",a);let h,f=1,d=[];const g=P=>{n(0,f=P)},_=()=>{mt(wt,a="contAdding",a)},v=P=>{n(3,u=""),mt(lt,l=P,l),mt(wt,a="contSelect",a)};function w(){return n(1,d=ur.filter(P=>(P.name+" "+P.lastname).toLowerCase().includes(u.toLowerCase())))}n(1,d=ur.sort((P,N)=>P.createdAt<N.createdAt?1:P.createdAt>N.createdAt?-1:0));function E(P){u=P,n(3,u)}const A=P=>v(P),O=()=>g(1),R=()=>g(f-1),F=P=>g(f-P),$=P=>g(f+(P+1)),U=()=>g(f+1),Q=()=>g(i);return t.$$.update=()=>{t.$$.dirty&2&&n(13,s=d.length),t.$$.dirty&8192&&n(5,i=Math.ceil(s/Ja)),t.$$.dirty&1&&n(2,r=f*Ja),t.$$.dirty&4&&n(4,o=r-Ja)},[f,d,r,u,o,i,a,l,g,_,v,w,h,s,E,A,O,R,F,$,U,Q]}class PI extends Ye{constructor(e){super(),Qe(this,e,RI,DI,ze,{})}}let ls=[],us=[];function NI(t,e){e=e.filter(n=>n.selecTP===t.selectTP),t.numBeds>0&&(e=e.filter(n=>n.numBeds>=t.beds)),t.numBaths>0&&(e=e.filter(n=>n.numBaths>=t.bathroom)),t.numParks>0&&(e=e.filter(n=>n.numPark>=t.parks));try{e=e.filter(n=>{n.budget?ls=e.filter(s=>s.budget>=t.price*.7&&s.budget<=t.price*1.1):us=e.filter(s=>s.rangeProp===o_(t.price))})}catch(n){console.log(n)}e=us.concat(ls),ls=[],us=[];try{e.filter(n=>{n.locaProperty.length>0?(ls=e.filter(s=>t.locaProperty.some(i=>s.locaProperty.includes(i))),console.log(t.locaProperty)):(us=e.filter(s=>s.locaProperty.length===0),console.log(t.locaProperty))})}catch(n){console.log(n)}e=us.concat(ls),ls=[],us=[];try{e=e.filter(n=>{n.tagsProperty.length>0?ls=e.filter(s=>t.tagsProperty.some(i=>s.tagsProperty.includes(i))):us=e.filter(s=>s.tagsProperty.length===0)})}catch(n){console.log(n)}return e=us.concat(ls),console.log(e),kg.set(e)}function od(t,e,n){const s=t.slice();return s[16]=e[n],s}function ad(t){let e,n=t[2],s=[];for(let i=0;i<n.length;i+=1)s[i]=ld(od(t,n,i));return{c(){for(let i=0;i<s.length;i+=1)s[i].c();e=_n()},m(i,r){for(let o=0;o<s.length;o+=1)s[o].m(i,r);k(i,e,r)},p(i,r){if(r&4){n=i[2];let o;for(o=0;o<n.length;o+=1){const a=od(i,n,o);s[o]?s[o].p(a,r):(s[o]=ld(a),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(i){He(s,i),i&&b(e)}}}function ld(t){let e,n,s,i,r=t[16].name+"",o,a,l=t[16].lastname+"",u,h,f,d=t[16].locaProperty+"",g,_,v,w=t[16].tagsProperty+"",E,A,O,R=t[16].budget+"",F,$,U,Q=t[16].rangeProp+"",P,N;return{c(){e=p("div"),n=p("input"),s=y(),i=p("div"),o=D(r),a=y(),u=D(l),h=y(),f=p("div"),g=D(d),_=y(),v=p("div"),E=D(w),A=y(),O=p("div"),F=D(R),$=y(),U=p("div"),P=D(Q),N=y(),m(n,"type","checkbox"),m(e,"class","conInt svelte-1fnfsyu")},m(K,L){k(K,e,L),c(e,n),c(e,s),c(e,i),c(i,o),c(i,a),c(i,u),c(e,h),c(e,f),c(f,g),c(e,_),c(e,v),c(v,E),c(e,A),c(e,O),c(O,F),c(e,$),c(e,U),c(U,P),c(e,N)},p(K,L){L&4&&r!==(r=K[16].name+"")&&ie(o,r),L&4&&l!==(l=K[16].lastname+"")&&ie(u,l),L&4&&d!==(d=K[16].locaProperty+"")&&ie(g,d),L&4&&w!==(w=K[16].tagsProperty+"")&&ie(E,w),L&4&&R!==(R=K[16].budget+"")&&ie(F,R),L&4&&Q!==(Q=K[16].rangeProp+"")&&ie(P,Q)},d(K){K&&b(e)}}}function OI(t){let e,n,s,i,r,o,a,l,u=t[1].claveEB+"",h,f,d=t[1].nameProperty+"",g,_,v,w=t[1].selecTP+"",E,A,O=t[1].colonia+"",R,F,$=t[1].locaProperty+"",U,Q,P,N,K,L=t[1].price+"",se,Z,G,q,ee=t[1].beds+"",C,H,W=t[1].bathroom+"",S,re,be=t[1].halfBathroom+"",ve,Te,De,Oe,Ie=t[1].areaBuilding+"",V,ne,gt=t[1].areaTotal+"",_t,et,ut,Gt,Xe=t[1].description+"",vt,Tt,Wt,Ge,Ft,Et,Qt,ct,Vt,yt,Je,ht,Me,Rt,Be,Yt,We,tt,ot,It,nt,Ct,at,Pt,he=t[0]&&ad(t);return{c(){e=p("div"),n=p("div"),s=p("img"),o=y(),a=p("div"),l=p("h4"),h=D(u),f=y(),g=D(d),_=y(),v=p("h5"),E=D(w),A=D(" en Col. "),R=D(O),F=D(" al "),U=D($),Q=D(" de la ciudad."),P=y(),N=p("h6"),K=D("Precio: "),se=D(L),Z=y(),G=p("div"),q=p("h6"),C=D(ee),H=D(" Recamaras, "),S=D(W),re=D(" Ba\xF1os y "),ve=D(be),Te=D(" Medio Ba\xF1o"),De=y(),Oe=p("h6"),V=D(Ie),ne=D(" m2 de construcci\xF3n y "),_t=D(gt),et=D(" m2 de terreno"),ut=y(),Gt=p("p"),vt=D(Xe),Tt=y(),Wt=p("div"),Ge=p("a"),Ft=D("Seguir Link en Otra Ventana"),Qt=y(),ct=p("div"),Vt=p("button"),Vt.textContent="Enviar por WhatsApp",yt=y(),Je=p("button"),Je.textContent="Buscar Interesados",ht=y(),Me=p("div"),Rt=p("button"),Rt.textContent="Regresar",Be=y(),Yt=p("div"),We=p("div"),tt=p("i"),tt.textContent="edit",ot=y(),It=p("i"),It.textContent="delete_forever",nt=y(),he&&he.c(),Ct=_n(),fn(s.src,i=t[1].urlImage)||m(s,"src",i),m(s,"alt",r=t[1].nameProperty),m(n,"class","selectImage svelte-1fnfsyu"),m(Gt,"class","descSelec"),m(a,"class","descSelect"),m(Ge,"href",Et=t[1].urlProp),m(Ge,"target","_blank"),m(Wt,"class","folowLink"),m(Vt,"class","btnCommon btnWhatsApp"),m(Je,"class","btnCommon"),m(ct,"class","optionsSend"),m(Rt,"class","btnCommon btnCancel"),m(Me,"class","backAnt"),m(tt,"class","material-icons edit"),m(It,"class","material-icons delete"),m(We,"class","iconContent"),m(e,"class","container selectProduct svelte-1fnfsyu")},m(we,me){k(we,e,me),c(e,n),c(n,s),c(e,o),c(e,a),c(a,l),c(l,h),c(l,f),c(l,g),c(a,_),c(a,v),c(v,E),c(v,A),c(v,R),c(v,F),c(v,U),c(v,Q),c(a,P),c(a,N),c(N,K),c(N,se),c(a,Z),c(a,G),c(G,q),c(q,C),c(q,H),c(q,S),c(q,re),c(q,ve),c(q,Te),c(a,De),c(a,Oe),c(Oe,V),c(Oe,ne),c(Oe,_t),c(Oe,et),c(a,ut),c(a,Gt),c(Gt,vt),c(e,Tt),c(e,Wt),c(Wt,Ge),c(Ge,Ft),c(e,Qt),c(e,ct),c(ct,Vt),c(ct,yt),c(ct,Je),c(e,ht),c(e,Me),c(Me,Rt),c(e,Be),c(e,Yt),c(Yt,We),c(We,tt),c(We,ot),c(We,It),k(we,nt,me),he&&he.m(we,me),k(we,Ct,me),at||(Pt=[B(Vt,"click",t[8]),B(Je,"click",t[6]),B(Rt,"click",t[7]),B(tt,"keydown",t[4]),B(It,"keydown",t[5])],at=!0)},p(we,[me]){me&2&&!fn(s.src,i=we[1].urlImage)&&m(s,"src",i),me&2&&r!==(r=we[1].nameProperty)&&m(s,"alt",r),me&2&&u!==(u=we[1].claveEB+"")&&ie(h,u),me&2&&d!==(d=we[1].nameProperty+"")&&ie(g,d),me&2&&w!==(w=we[1].selecTP+"")&&ie(E,w),me&2&&O!==(O=we[1].colonia+"")&&ie(R,O),me&2&&$!==($=we[1].locaProperty+"")&&ie(U,$),me&2&&L!==(L=we[1].price+"")&&ie(se,L),me&2&&ee!==(ee=we[1].beds+"")&&ie(C,ee),me&2&&W!==(W=we[1].bathroom+"")&&ie(S,W),me&2&&be!==(be=we[1].halfBathroom+"")&&ie(ve,be),me&2&&Ie!==(Ie=we[1].areaBuilding+"")&&ie(V,Ie),me&2&&gt!==(gt=we[1].areaTotal+"")&&ie(_t,gt),me&2&&Xe!==(Xe=we[1].description+"")&&ie(vt,Xe),me&2&&Et!==(Et=we[1].urlProp)&&m(Ge,"href",Et),we[0]?he?he.p(we,me):(he=ad(we),he.c(),he.m(Ct.parentNode,Ct)):he&&(he.d(1),he=null)},i:ue,o:ue,d(we){we&&b(e),we&&b(nt),he&&he.d(we),we&&b(Ct),at=!1,xe(Pt)}}}function $I(t,e,n){let s,i,r;Ve(t,it,_=>n(1,s=_)),Ve(t,wt,_=>n(10,i=_)),Ve(t,kg,_=>n(2,r=_));const o=vi();let a=[],l=!1;function u(){mt(wt,i="propEditing",i)}async function h(){confirm("Deseas eleiminar definitivamente la propiedad?")&&(console.log("Borraste al propiedad"),await wa(ss(sn,"properties",s.id)),mt(wt,i="start",i))}function f(){NI(s,ur),n(0,l=!0)}function d(){o("/propiedades")}return[l,s,r,a,u,h,f,d,()=>void 0]}class LI extends Ye{constructor(e){super(),Qe(this,e,$I,OI,ze,{})}}function MI(t){let e;return{c(){e=D("Editar")},m(n,s){k(n,e,s)},d(n){n&&b(e)}}}function UI(t){let e;return{c(){e=D("Guardar")},m(n,s){k(n,e,s)},d(n){n&&b(e)}}}function FI(t){let e,n,s,i,r,o,a,l,u,h,f,d,g,_,v,w;l=new yI({});function E(R,F){return R[0]==="propAdding"?UI:MI}let A=E(t),O=A(t);return{c(){e=p("form"),n=p("div"),s=p("div"),i=p("img"),a=y(),le(l.$$.fragment),u=y(),h=p("div"),f=p("button"),O.c(),d=y(),g=p("button"),g.textContent="Cancel",fn(i.src,r=t[1].urlImage)||m(i,"src",r),m(i,"alt",o=t[1].nameProperty),m(i,"class","svelte-166hnhc"),m(f,"class","btn-save"),m(g,"class","btn-cancel"),m(h,"class","contSavCan svelte-166hnhc"),m(n,"class","altaContactos"),m(e,"class","propiedad")},m(R,F){k(R,e,F),c(e,n),c(n,s),c(s,i),c(s,a),oe(l,s,null),c(n,u),c(n,h),c(h,f),O.m(f,null),c(h,d),c(h,g),_=!0,v||(w=[B(g,"click",t[3]),B(e,"submit",In(t[2]))],v=!0)},p(R,[F]){(!_||F&2&&!fn(i.src,r=R[1].urlImage))&&m(i,"src",r),(!_||F&2&&o!==(o=R[1].nameProperty))&&m(i,"alt",o),A!==(A=E(R))&&(O.d(1),O=A(R),O&&(O.c(),O.m(f,null)))},i(R){_||(j(l.$$.fragment,R),_=!0)},o(R){z(l.$$.fragment,R),_=!1},d(R){R&&b(e),ae(l),O.d(),v=!1,xe(w)}}}function VI(t,e,n){let s,i;Ve(t,wt,u=>n(0,s=u)),Ve(t,it,u=>n(1,i=u));let r=0;const o=vi();async function a(){if(console.log("Estas en add property",s,i),s==="propEditing")console.log("estas dentro de edit property",i.id),await ba(ss(sn,"properties",i.id),i);else{r=Date.now(),mt(it,i={...i,createdAt:r},i),console.log(i);const u=ns(sn,"properties");await rr(u,i)}mt(wt,s="start",s)}return[s,i,a,()=>{o("./")}]}class u_ extends Ye{constructor(e){super(),Qe(this,e,VI,FI,ze,{})}}function ud(t,e,n){const s=t.slice();return s[23]=e[n],s[25]=n,s}function cd(t,e,n){const s=t.slice();return s[25]=e[n],s}function hd(t,e,n){const s=t.slice();return s[12]=e[n],s[25]=n,s}function fd(t){let e,n,s,i,r,o,a,l,u,h,f,d,g,_,v,w,E,A,O,R,F,$;function U(C){t[14](C)}let Q={};t[3]!==void 0&&(Q.searchTerm=t[3]),r=new ec({props:Q}),Xn.push(()=>Us(r,"searchTerm",U)),r.$on("input",t[11]);let P=t[1],N=[];for(let C=0;C<P.length;C+=1)N[C]=pd(hd(t,P,C));const K=C=>z(N[C],1,1,()=>{N[C]=null});let L=t[0]>1&&md(t),se=[3,2,1],Z=[];for(let C=0;C<3;C+=1)Z[C]=_d(cd(t,se,C));let G=Array(3),q=[];for(let C=0;C<G.length;C+=1)q[C]=yd(ud(t,G,C));let ee=t[0]<t[5]&&bd(t);return{c(){e=p("h2"),e.textContent=`${Vn.length} Propiedades a Mostrar`,n=y(),s=p("button"),s.textContent="Alta de Propiedad",i=y(),le(r.$$.fragment),a=y(),l=p("div"),u=p("main");for(let C=0;C<N.length;C+=1)N[C].c();h=y(),f=p("div"),d=p("ul"),L&&L.c(),g=y();for(let C=0;C<3;C+=1)Z[C].c();_=y(),v=p("li"),w=p("span"),E=D(t[0]),A=y();for(let C=0;C<q.length;C+=1)q[C].c();O=y(),ee&&ee.c(),m(u,"id","bookshelf"),m(u,"class","svelte-qdxcib"),m(f,"class","container pagination"),m(l,"class","mosPag svelte-qdxcib")},m(C,H){k(C,e,H),k(C,n,H),k(C,s,H),k(C,i,H),oe(r,C,H),k(C,a,H),k(C,l,H),c(l,u);for(let W=0;W<N.length;W+=1)N[W].m(u,null);c(l,h),c(l,f),c(f,d),L&&L.m(d,null),c(d,g);for(let W=0;W<3;W+=1)Z[W].m(d,null);c(d,_),c(d,v),c(v,w),c(w,E),c(d,A);for(let W=0;W<q.length;W+=1)q[W].m(d,null);c(d,O),ee&&ee.m(d,null),R=!0,F||($=B(s,"click",t[10]),F=!0)},p(C,H){const W={};if(!o&&H&8&&(o=!0,W.searchTerm=C[3],Ms(()=>o=!1)),r.$set(W),H&534){P=C[1];let S;for(S=0;S<P.length;S+=1){const re=hd(C,P,S);N[S]?(N[S].p(re,H),j(N[S],1)):(N[S]=pd(re),N[S].c(),j(N[S],1),N[S].m(u,null))}for(Ot(),S=P.length;S<N.length;S+=1)K(S);$t()}if(C[0]>1?L?L.p(C,H):(L=md(C),L.c(),L.m(d,g)):L&&(L.d(1),L=null),H&257){se=[3,2,1];let S;for(S=0;S<3;S+=1){const re=cd(C,se,S);Z[S]?Z[S].p(re,H):(Z[S]=_d(re),Z[S].c(),Z[S].m(d,_))}for(;S<3;S+=1)Z[S].d(1)}if((!R||H&1)&&ie(E,C[0]),H&289){G=Array(3);let S;for(S=0;S<G.length;S+=1){const re=ud(C,G,S);q[S]?q[S].p(re,H):(q[S]=yd(re),q[S].c(),q[S].m(d,O))}for(;S<q.length;S+=1)q[S].d(1);q.length=G.length}C[0]<C[5]?ee?ee.p(C,H):(ee=bd(C),ee.c(),ee.m(d,null)):ee&&(ee.d(1),ee=null)},i(C){if(!R){j(r.$$.fragment,C);for(let H=0;H<P.length;H+=1)j(N[H]);R=!0}},o(C){z(r.$$.fragment,C),N=N.filter(Boolean);for(let H=0;H<N.length;H+=1)z(N[H]);R=!1},d(C){C&&b(e),C&&b(n),C&&b(s),C&&b(i),ae(r,C),C&&b(a),C&&b(l),He(N,C),L&&L.d(),He(Z,C),He(q,C),ee&&ee.d(),F=!1,$()}}}function dd(t){let e,n,s,i,r,o,a;const l=[t[12]];let u={};for(let f=0;f<l.length;f+=1)u=Kt(u,l[f]);n=new r_({props:u});function h(){return t[15](t[12])}return{c(){e=p("section"),le(n.$$.fragment),s=y(),m(e,"class","property svelte-qdxcib")},m(f,d){k(f,e,d),oe(n,e,null),c(e,s),r=!0,o||(a=B(e,"click",h),o=!0)},p(f,d){t=f;const g=d&2?Cn(l,[xn(t[12])]):{};n.$set(g)},i(f){r||(j(n.$$.fragment,f),Ze(()=>{i||(i=Pn(e,$o,{duration:500,easing:Po},!0)),i.run(1)}),r=!0)},o(f){z(n.$$.fragment,f),i||(i=Pn(e,$o,{duration:500,easing:Po},!1)),i.run(0),r=!1},d(f){f&&b(e),ae(n),f&&i&&i.end(),o=!1,a()}}}function pd(t){let e,n,s=t[25]>=t[4]&&t[25]<t[2]&&dd(t);return{c(){s&&s.c(),e=_n()},m(i,r){s&&s.m(i,r),k(i,e,r),n=!0},p(i,r){i[25]>=i[4]&&i[25]<i[2]?s?(s.p(i,r),r&20&&j(s,1)):(s=dd(i),s.c(),j(s,1),s.m(e.parentNode,e)):s&&(Ot(),z(s,1,1,()=>{s=null}),$t())},i(i){n||(j(s),n=!0)},o(i){z(s),n=!1},d(i){s&&s.d(i),i&&b(e)}}}function md(t){let e,n,s,i,r,o,a,l,u;return{c(){e=p("li"),n=p("a"),n.textContent="first",s=y(),i=p("li"),r=p("a"),o=D("previous"),m(n,"href","/blog"),m(r,"href",a="/blog/"+(t[0]-1))},m(h,f){k(h,e,f),c(e,n),k(h,s,f),k(h,i,f),c(i,r),c(r,o),l||(u=[B(n,"click",In(t[16])),B(r,"click",In(t[17]))],l=!0)},p(h,f){f&1&&a!==(a="/blog/"+(h[0]-1))&&m(r,"href",a)},d(h){h&&b(e),h&&b(s),h&&b(i),l=!1,xe(u)}}}function gd(t){let e,n,s=t[0]-t[25]+"",i,r,o,a;function l(){return t[18](t[25])}return{c(){e=p("li"),n=p("a"),i=D(s),m(n,"href",r="/blog/"+(t[0]-t[25]))},m(u,h){k(u,e,h),c(e,n),c(n,i),o||(a=B(n,"click",In(l)),o=!0)},p(u,h){t=u,h&1&&s!==(s=t[0]-t[25]+"")&&ie(i,s),h&1&&r!==(r="/blog/"+(t[0]-t[25]))&&m(n,"href",r)},d(u){u&&b(e),o=!1,a()}}}function _d(t){let e,n=t[0]-t[25]>0&&gd(t);return{c(){n&&n.c(),e=_n()},m(s,i){n&&n.m(s,i),k(s,e,i)},p(s,i){s[0]-s[25]>0?n?n.p(s,i):(n=gd(s),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(s){n&&n.d(s),s&&b(e)}}}function vd(t){let e,n,s=t[0]+(t[25]+1)+"",i,r,o,a;function l(){return t[19](t[25])}return{c(){e=p("li"),n=p("a"),i=D(s),m(n,"href",r="/blog/"+(t[0]+(t[25]+1)))},m(u,h){k(u,e,h),c(e,n),c(n,i),o||(a=B(n,"click",In(l)),o=!0)},p(u,h){t=u,h&1&&s!==(s=t[0]+(t[25]+1)+"")&&ie(i,s),h&1&&r!==(r="/blog/"+(t[0]+(t[25]+1)))&&m(n,"href",r)},d(u){u&&b(e),o=!1,a()}}}function yd(t){let e,n=t[0]+(t[25]+1)<=t[5]&&vd(t);return{c(){n&&n.c(),e=_n()},m(s,i){n&&n.m(s,i),k(s,e,i)},p(s,i){s[0]+(s[25]+1)<=s[5]?n?n.p(s,i):(n=vd(s),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(s){n&&n.d(s),s&&b(e)}}}function bd(t){let e,n,s,i,r,o,a,l,u,h,f;return{c(){e=p("li"),n=p("a"),s=D("next"),r=y(),o=p("li"),a=p("a"),l=D("last"),m(n,"href",i="/blog/"+(t[0]+1)),m(a,"href",u="/blog/"+t[5])},m(d,g){k(d,e,g),c(e,n),c(n,s),k(d,r,g),k(d,o,g),c(o,a),c(a,l),h||(f=[B(n,"click",In(t[20])),B(a,"click",In(t[21]))],h=!0)},p(d,g){g&1&&i!==(i="/blog/"+(d[0]+1))&&m(n,"href",i),g&32&&u!==(u="/blog/"+d[5])&&m(a,"href",u)},d(d){d&&b(e),d&&b(r),d&&b(o),h=!1,xe(f)}}}function wd(t){let e,n,s;const i=[t[7]];let r={};for(let o=0;o<i.length;o+=1)r=Kt(r,i[o]);return n=new LI({props:r}),{c(){e=p("div"),le(n.$$.fragment)},m(o,a){k(o,e,a),oe(n,e,null),s=!0},p(o,a){const l=a&128?Cn(i,[xn(o[7])]):{};n.$set(l)},i(o){s||(j(n.$$.fragment,o),s=!0)},o(o){z(n.$$.fragment,o),s=!1},d(o){o&&b(e),ae(n)}}}function kd(t){let e,n,s;const i=[t[7]];let r={};for(let o=0;o<i.length;o+=1)r=Kt(r,i[o]);return n=new u_({props:r}),{c(){e=p("div"),le(n.$$.fragment),m(e,"class","container")},m(o,a){k(o,e,a),oe(n,e,null),s=!0},p(o,a){const l=a&128?Cn(i,[xn(o[7])]):{};n.$set(l)},i(o){s||(j(n.$$.fragment,o),s=!0)},o(o){z(n.$$.fragment,o),s=!1},d(o){o&&b(e),ae(n)}}}function Ed(t){let e,n,s;return n=new u_({}),{c(){e=p("div"),le(n.$$.fragment),m(e,"class","container")},m(i,r){k(i,e,r),oe(n,e,null),s=!0},i(i){s||(j(n.$$.fragment,i),s=!0)},o(i){z(n.$$.fragment,i),s=!1},d(i){i&&b(e),ae(n)}}}function BI(t){let e,n,s,i,r,o,a,l,u,h,f,d=t[6]==="start"&&fd(t),g=t[6]==="propSelect"&&wd(t),_=t[6]==="propEditing"&&kd(t),v=t[6]==="propAdding"&&Ed();return{c(){e=p("div"),n=p("div"),s=p("h1"),s.textContent="Propiedades",i=y(),r=p("img"),a=y(),d&&d.c(),l=y(),g&&g.c(),u=y(),_&&_.c(),h=y(),v&&v.c(),fn(r.src,o=s_)||m(r,"src",o),m(r,"alt","propiedad"),m(r,"class","imgTitle svelte-qdxcib"),m(e,"class","container")},m(w,E){k(w,e,E),c(e,n),c(n,s),c(n,i),c(n,r),c(e,a),d&&d.m(e,null),c(e,l),g&&g.m(e,null),c(e,u),_&&_.m(e,null),c(e,h),v&&v.m(e,null),f=!0},p(w,[E]){w[6]==="start"?d?(d.p(w,E),E&64&&j(d,1)):(d=fd(w),d.c(),j(d,1),d.m(e,l)):d&&(Ot(),z(d,1,1,()=>{d=null}),$t()),w[6]==="propSelect"?g?(g.p(w,E),E&64&&j(g,1)):(g=wd(w),g.c(),j(g,1),g.m(e,u)):g&&(Ot(),z(g,1,1,()=>{g=null}),$t()),w[6]==="propEditing"?_?(_.p(w,E),E&64&&j(_,1)):(_=kd(w),_.c(),j(_,1),_.m(e,h)):_&&(Ot(),z(_,1,1,()=>{_=null}),$t()),w[6]==="propAdding"?v?E&64&&j(v,1):(v=Ed(),v.c(),j(v,1),v.m(e,null)):v&&(Ot(),z(v,1,1,()=>{v=null}),$t())},i(w){f||(j(d),j(g),j(_),j(v),f=!0)},o(w){z(d),z(g),z(_),z(v),f=!1},d(w){w&&b(e),d&&d.d(),g&&g.d(),_&&_.d(),v&&v.d()}}}let Za=20;function jI(t,e,n){let s,i,r,o,a,l;Ve(t,wt,P=>n(6,a=P)),Ve(t,it,P=>n(7,l=P));let u,h;mt(wt,a="start",a);let f=1,d=Vn;const g=P=>{n(0,f=P)};d=Vn;function _(P){console.log(P),mt(it,l=P,l),mt(wt,a="propSelect",a)}function v(){mt(wt,a="propAdding",a)}function w(){return n(1,d=Vn.filter(P=>(P.nameProperty+" "+P.colonia).toLowerCase().includes(u.toLowerCase())))}n(1,d=Vn.sort((P,N)=>P.createdAt<N.createdAt?1:P.createdAt>N.createdAt?-1:0));function E(P){u=P,n(3,u)}const A=P=>_(P),O=()=>g(1),R=()=>g(f-1),F=P=>g(f-P),$=P=>g(f+(P+1)),U=()=>g(f+1),Q=()=>g(i);return t.$$.update=()=>{t.$$.dirty&2&&n(13,s=d.length),t.$$.dirty&8192&&n(5,i=Math.ceil(s/Za)),t.$$.dirty&1&&n(2,r=f*Za),t.$$.dirty&4&&n(4,o=r-Za)},[f,d,r,u,o,i,a,l,g,_,v,w,h,s,E,A,O,R,F,$,U,Q]}class qI extends Ye{constructor(e){super(),Qe(this,e,jI,BI,ze,{})}}function HI(t){let e;return{c(){e=p("h1"),e.textContent="Captacion"},m(n,s){k(n,e,s)},p:ue,i:ue,o:ue,d(n){n&&b(e)}}}class KI extends Ye{constructor(e){super(),Qe(this,e,null,HI,ze,{})}}function zI(t){let e,n,s,i=t[0].task+"",r;return{c(){e=p("h1"),e.textContent="Estas en About",n=y(),s=p("h3"),r=D(i)},m(o,a){k(o,e,a),k(o,n,a),k(o,s,a),c(s,r)},p(o,[a]){a&1&&i!==(i=o[0].task+"")&&ie(r,i)},i:ue,o:ue,d(o){o&&b(e),o&&b(n),o&&b(s)}}}function GI(t,e,n){let s;return Ve(t,Dn,i=>n(0,s=i)),[s]}class WI extends Ye{constructor(e){super(),Qe(this,e,GI,zI,ze,{})}}function QI(t){let e,n,s,i;return{c(){e=p("div"),n=p("div"),s=D(t[0]),m(n,"id","snackbar"),m(n,"class",i=rc(t[1]?"animation-in":"not-show")+" svelte-1e3w4r3")},m(r,o){k(r,e,o),c(e,n),c(n,s)},p(r,[o]){o&1&&ie(s,r[0]),o&2&&i!==(i=rc(r[1]?"animation-in":"not-show")+" svelte-1e3w4r3")&&m(n,"class",i)},i:ue,o:ue,d(r){r&&b(e)}}}function YI(t,e,n){let{message:s=""}=e,{show:i=!1}=e;return t.$$set=r=>{"message"in r&&n(0,s=r.message),"show"in r&&n(1,i=r.show)},[s,i]}class XI extends Ye{constructor(e){super(),Qe(this,e,YI,QI,ze,{message:0,show:1})}}function xI(t){let e;return{c(){e=D("Registrarse")},m(n,s){k(n,e,s)},d(n){n&&b(e)}}}function JI(t){let e,n,s,i,r,o,a,l,u,h,f,d,g,_,v,w,E,A,O,R,F,$,U,Q,P,N,K,L,se,Z,G;return n=new XI({props:{message:t[0],show:t[1]}}),L=new Tn({props:{to:"/register",$$slots:{default:[xI]},$$scope:{ctx:t}}}),{c(){e=p("div"),le(n.$$.fragment),s=y(),i=p("br"),r=p("br"),o=p("br"),a=y(),l=p("div"),u=p("h1"),u.textContent="Inicia sesi\xF3n en tu cuenta",h=y(),f=p("div"),d=p("input"),g=y(),_=p("div"),v=p("input"),w=y(),E=p("br"),A=y(),O=p("div"),R=p("button"),R.textContent="Iniciar sesi\xF3n",F=y(),$=p("p"),$.textContent="O tambi\xE9n",U=y(),Q=p("br"),P=y(),N=p("p"),K=D("\xBFA\xFAn no tienes cuenta? "),le(L.$$.fragment),m(u,"class","text-center text-login svelte-ftg4em"),m(d,"name","email"),m(d,"type","text"),m(d,"class","input-form svelte-ftg4em"),m(d,"placeholder","Correo"),m(f,"class","center svelte-ftg4em"),m(v,"name","password"),m(v,"type","password"),m(v,"class","input-form svelte-ftg4em"),m(v,"placeholder","Contrase\xF1a"),m(_,"class","center svelte-ftg4em"),m(R,"class","button-signup fondo-color-signup svelte-ftg4em"),m(O,"class","center svelte-ftg4em"),m($,"class","text-center svelte-ftg4em"),m(N,"class","text-center svelte-ftg4em"),m(l,"class","form-signin svelte-ftg4em")},m(q,ee){k(q,e,ee),oe(n,e,null),c(e,s),c(e,i),c(e,r),c(e,o),c(e,a),c(e,l),c(l,u),c(l,h),c(l,f),c(f,d),c(l,g),c(l,_),c(_,v),c(l,w),c(l,E),c(l,A),c(l,O),c(O,R),c(l,F),c(l,$),c(l,U),c(l,Q),c(l,P),c(l,N),c(N,K),oe(L,N,null),se=!0,Z||(G=[B(d,"input",t[4]),B(v,"input",t[5]),B(R,"click",t[3])],Z=!0)},p(q,[ee]){const C={};ee&1&&(C.message=q[0]),ee&2&&(C.show=q[1]),n.$set(C);const H={};ee&512&&(H.$$scope={dirty:ee,ctx:q}),L.$set(H)},i(q){se||(j(n.$$.fragment,q),j(L.$$.fragment,q),se=!0)},o(q){z(n.$$.fragment,q),z(L.$$.fragment,q),se=!1},d(q){q&&b(e),ae(n),ae(L),Z=!1,xe(G)}}}function ZI(t,e,n){const s=vi();let i={email:"",password:""},r="",o=!1;const a=d=>{n(0,r=d),n(1,o=!0),setTimeout(()=>{n(1,o=!1)},2800)},l=d=>{i={...i,[d.target.name]:d.target.value}};return[r,o,l,async()=>{try{await Xk(Zg,i.email,i.password),s("/")}catch(d){d.message==="Firebase: Error (auth/wrong-password)."&&a("Contrase\xF1a incorrecta")}},d=>l(d),d=>l(d)]}class eC extends Ye{constructor(e){super(),Qe(this,e,ZI,JI,ze,{})}}class tC extends Ye{constructor(e){super(),Qe(this,e,null,null,ze,{})}}function nC(t){let e;return{c(){e=D("Home")},m(n,s){k(n,e,s)},d(n){n&&b(e)}}}function sC(t){let e;return{c(){e=D("Contactos")},m(n,s){k(n,e,s)},d(n){n&&b(e)}}}function iC(t){let e;return{c(){e=D("Propiedades")},m(n,s){k(n,e,s)},d(n){n&&b(e)}}}function rC(t){let e;return{c(){e=D("Agenda")},m(n,s){k(n,e,s)},d(n){n&&b(e)}}}function oC(t){let e;return{c(){e=D("LogOut")},m(n,s){k(n,e,s)},d(n){n&&b(e)}}}function aC(t){let e;return{c(){e=D("Registro")},m(n,s){k(n,e,s)},d(n){n&&b(e)}}}function lC(t){let e;return{c(){e=D("Login")},m(n,s){k(n,e,s)},d(n){n&&b(e)}}}function uC(t){let e,n;return e=new QT({}),{c(){le(e.$$.fragment)},m(s,i){oe(e,s,i),n=!0},i(s){n||(j(e.$$.fragment,s),n=!0)},o(s){z(e.$$.fragment,s),n=!1},d(s){ae(e,s)}}}function cC(t){let e,n;return e=new PI({}),{c(){le(e.$$.fragment)},m(s,i){oe(e,s,i),n=!0},i(s){n||(j(e.$$.fragment,s),n=!0)},o(s){z(e.$$.fragment,s),n=!1},d(s){ae(e,s)}}}function hC(t){let e,n;return e=new qI({}),{c(){le(e.$$.fragment)},m(s,i){oe(e,s,i),n=!0},i(s){n||(j(e.$$.fragment,s),n=!0)},o(s){z(e.$$.fragment,s),n=!1},d(s){ae(e,s)}}}function fC(t){let e,n;return e=new KI({}),{c(){le(e.$$.fragment)},m(s,i){oe(e,s,i),n=!0},i(s){n||(j(e.$$.fragment,s),n=!0)},o(s){z(e.$$.fragment,s),n=!1},d(s){ae(e,s)}}}function dC(t){let e,n;return e=new e_({}),{c(){le(e.$$.fragment)},m(s,i){oe(e,s,i),n=!0},i(s){n||(j(e.$$.fragment,s),n=!0)},o(s){z(e.$$.fragment,s),n=!1},d(s){ae(e,s)}}}function pC(t){let e,n;return e=new t_({}),{c(){le(e.$$.fragment)},m(s,i){oe(e,s,i),n=!0},i(s){n||(j(e.$$.fragment,s),n=!0)},o(s){z(e.$$.fragment,s),n=!1},d(s){ae(e,s)}}}function mC(t){let e,n;return e=new WI({}),{c(){le(e.$$.fragment)},m(s,i){oe(e,s,i),n=!0},i(s){n||(j(e.$$.fragment,s),n=!0)},o(s){z(e.$$.fragment,s),n=!1},d(s){ae(e,s)}}}function gC(t){let e,n;return e=new tC({}),{c(){le(e.$$.fragment)},m(s,i){oe(e,s,i),n=!0},i(s){n||(j(e.$$.fragment,s),n=!0)},o(s){z(e.$$.fragment,s),n=!1},d(s){ae(e,s)}}}function _C(t){let e,n;return e=new eC({}),{c(){le(e.$$.fragment)},m(s,i){oe(e,s,i),n=!0},i(s){n||(j(e.$$.fragment,s),n=!0)},o(s){z(e.$$.fragment,s),n=!1},d(s){ae(e,s)}}}function vC(t){let e,n;return e=new Zu({}),{c(){le(e.$$.fragment)},m(s,i){oe(e,s,i),n=!0},i(s){n||(j(e.$$.fragment,s),n=!0)},o(s){z(e.$$.fragment,s),n=!1},d(s){ae(e,s)}}}function yC(t){let e,n,s,i,r,o,a,l,u,h,f,d,g,_,v,w,E,A,O,R,F,$,U,Q,P,N,K,L,se,Z,G,q,ee,C,H,W,S,re,be,ve,Te,De,Oe,Ie;return f=new Tn({props:{to:"/",$$slots:{default:[nC]},$$scope:{ctx:t}}}),g=new Tn({props:{to:"contactos",$$slots:{default:[sC]},$$scope:{ctx:t}}}),v=new Tn({props:{to:"propiedades",$$slots:{default:[iC]},$$scope:{ctx:t}}}),E=new Tn({props:{to:"agenda",$$slots:{default:[rC]},$$scope:{ctx:t}}}),O=new Tn({props:{to:"/about",$$slots:{default:[oC]},$$scope:{ctx:t}}}),O.$on("click",t[0]),F=new Tn({props:{to:"register",$$slots:{default:[aC]},$$scope:{ctx:t}}}),U=new Tn({props:{to:"login",$$slots:{default:[lC]},$$scope:{ctx:t}}}),P=new bn({props:{path:"/",$$slots:{default:[uC]},$$scope:{ctx:t}}}),K=new bn({props:{path:"/contactos",$$slots:{default:[cC]},$$scope:{ctx:t}}}),se=new bn({props:{path:"propiedades",$$slots:{default:[hC]},$$scope:{ctx:t}}}),G=new bn({props:{path:"captacion",$$slots:{default:[fC]},$$scope:{ctx:t}}}),ee=new bn({props:{path:"agenda",$$slots:{default:[dC]},$$scope:{ctx:t}}}),H=new bn({props:{path:"sinergias",$$slots:{default:[pC]},$$scope:{ctx:t}}}),S=new bn({props:{path:"about",$$slots:{default:[mC]},$$scope:{ctx:t}}}),be=new bn({props:{path:"logout",$$slots:{default:[gC]},$$scope:{ctx:t}}}),Te=new bn({props:{path:"login",$$slots:{default:[_C]},$$scope:{ctx:t}}}),Oe=new bn({props:{path:"register",$$slots:{default:[vC]},$$scope:{ctx:t}}}),{c(){e=p("nav"),n=p("div"),s=p("img"),r=y(),o=p("label"),o.innerHTML='<img src="src/assets/images/menu.svg" class="nav__img svelte-1wcnmh3" alt="menu"/>',a=y(),l=p("input"),u=y(),h=p("div"),le(f.$$.fragment),d=y(),le(g.$$.fragment),_=y(),le(v.$$.fragment),w=y(),le(E.$$.fragment),A=y(),le(O.$$.fragment),R=y(),le(F.$$.fragment),$=y(),le(U.$$.fragment),Q=y(),le(P.$$.fragment),N=y(),le(K.$$.fragment),L=y(),le(se.$$.fragment),Z=y(),le(G.$$.fragment),q=y(),le(ee.$$.fragment),C=y(),le(H.$$.fragment),W=y(),le(S.$$.fragment),re=y(),le(be.$$.fragment),ve=y(),le(Te.$$.fragment),De=y(),le(Oe.$$.fragment),fn(s.src,i="src/assets/images/logoMH.png")||m(s,"src",i),m(s,"alt","MatchHome"),m(s,"class","nav__logo svelte-1wcnmh3"),m(o,"class","nav__label svelte-1wcnmh3"),m(o,"for","menu"),m(l,"type","checkbox"),m(l,"id","menu"),m(l,"class","nav__input svelte-1wcnmh3"),m(h,"class","nav__menu svelte-1wcnmh3"),m(n,"class","nav__container svelte-1wcnmh3"),m(e,"class","nav svelte-1wcnmh3")},m(V,ne){k(V,e,ne),c(e,n),c(n,s),c(n,r),c(n,o),c(n,a),c(n,l),c(n,u),c(n,h),oe(f,h,null),c(h,d),oe(g,h,null),c(h,_),oe(v,h,null),c(h,w),oe(E,h,null),c(h,A),oe(O,h,null),c(h,R),oe(F,h,null),c(h,$),oe(U,h,null),k(V,Q,ne),oe(P,V,ne),k(V,N,ne),oe(K,V,ne),k(V,L,ne),oe(se,V,ne),k(V,Z,ne),oe(G,V,ne),k(V,q,ne),oe(ee,V,ne),k(V,C,ne),oe(H,V,ne),k(V,W,ne),oe(S,V,ne),k(V,re,ne),oe(be,V,ne),k(V,ve,ne),oe(Te,V,ne),k(V,De,ne),oe(Oe,V,ne),Ie=!0},p(V,ne){const gt={};ne&8&&(gt.$$scope={dirty:ne,ctx:V}),f.$set(gt);const _t={};ne&8&&(_t.$$scope={dirty:ne,ctx:V}),g.$set(_t);const et={};ne&8&&(et.$$scope={dirty:ne,ctx:V}),v.$set(et);const ut={};ne&8&&(ut.$$scope={dirty:ne,ctx:V}),E.$set(ut);const Gt={};ne&8&&(Gt.$$scope={dirty:ne,ctx:V}),O.$set(Gt);const Xe={};ne&8&&(Xe.$$scope={dirty:ne,ctx:V}),F.$set(Xe);const vt={};ne&8&&(vt.$$scope={dirty:ne,ctx:V}),U.$set(vt);const Tt={};ne&8&&(Tt.$$scope={dirty:ne,ctx:V}),P.$set(Tt);const Wt={};ne&8&&(Wt.$$scope={dirty:ne,ctx:V}),K.$set(Wt);const Ge={};ne&8&&(Ge.$$scope={dirty:ne,ctx:V}),se.$set(Ge);const Ft={};ne&8&&(Ft.$$scope={dirty:ne,ctx:V}),G.$set(Ft);const Et={};ne&8&&(Et.$$scope={dirty:ne,ctx:V}),ee.$set(Et);const Qt={};ne&8&&(Qt.$$scope={dirty:ne,ctx:V}),H.$set(Qt);const ct={};ne&8&&(ct.$$scope={dirty:ne,ctx:V}),S.$set(ct);const Vt={};ne&8&&(Vt.$$scope={dirty:ne,ctx:V}),be.$set(Vt);const yt={};ne&8&&(yt.$$scope={dirty:ne,ctx:V}),Te.$set(yt);const Je={};ne&8&&(Je.$$scope={dirty:ne,ctx:V}),Oe.$set(Je)},i(V){Ie||(j(f.$$.fragment,V),j(g.$$.fragment,V),j(v.$$.fragment,V),j(E.$$.fragment,V),j(O.$$.fragment,V),j(F.$$.fragment,V),j(U.$$.fragment,V),j(P.$$.fragment,V),j(K.$$.fragment,V),j(se.$$.fragment,V),j(G.$$.fragment,V),j(ee.$$.fragment,V),j(H.$$.fragment,V),j(S.$$.fragment,V),j(be.$$.fragment,V),j(Te.$$.fragment,V),j(Oe.$$.fragment,V),Ie=!0)},o(V){z(f.$$.fragment,V),z(g.$$.fragment,V),z(v.$$.fragment,V),z(E.$$.fragment,V),z(O.$$.fragment,V),z(F.$$.fragment,V),z(U.$$.fragment,V),z(P.$$.fragment,V),z(K.$$.fragment,V),z(se.$$.fragment,V),z(G.$$.fragment,V),z(ee.$$.fragment,V),z(H.$$.fragment,V),z(S.$$.fragment,V),z(be.$$.fragment,V),z(Te.$$.fragment,V),z(Oe.$$.fragment,V),Ie=!1},d(V){V&&b(e),ae(f),ae(g),ae(v),ae(E),ae(O),ae(F),ae(U),V&&b(Q),ae(P,V),V&&b(N),ae(K,V),V&&b(L),ae(se,V),V&&b(Z),ae(G,V),V&&b(q),ae(ee,V),V&&b(C),ae(H,V),V&&b(W),ae(S,V),V&&b(re),ae(be,V),V&&b(ve),ae(Te,V),V&&b(De),ae(Oe,V)}}}function bC(t){let e,n;return e=new Gl({props:{$$slots:{default:[yC]},$$scope:{ctx:t}}}),{c(){le(e.$$.fragment)},m(s,i){oe(e,s,i),n=!0},p(s,[i]){const r={};i&8&&(r.$$scope={dirty:i,ctx:s}),e.$set(r)},i(s){n||(j(e.$$.fragment,s),n=!0)},o(s){z(e.$$.fragment,s),n=!1},d(s){ae(e,s)}}}function wC(t,e,n){let s;Ve(t,Qh,r=>n(2,s=r)),console.log("logged? ",s),Qh.subscribe(r=>{});async function i(){console.log(s)}return[i]}class kC extends Ye{constructor(e){super(),Qe(this,e,wC,bC,ze,{})}}function EC(t){let e,n,s,i,r;return n=new kC({}),{c(){e=p("nav"),le(n.$$.fragment),s=y(),i=p("main"),m(e,"class","navBar svelte-1ab8rao")},m(o,a){k(o,e,a),oe(n,e,null),k(o,s,a),k(o,i,a),r=!0},p:ue,i(o){r||(j(n.$$.fragment,o),r=!0)},o(o){z(n.$$.fragment,o),r=!1},d(o){o&&b(e),ae(n),o&&b(s),o&&b(i)}}}class TC extends Ye{constructor(e){super(),Qe(this,e,null,EC,ze,{})}}new TC({target:document.getElementById("app")});
