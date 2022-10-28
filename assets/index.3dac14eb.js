(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function he(){}const Id=t=>t;function zt(t,e){for(const n in e)t[n]=e[n];return t}function Cd(t){return t()}function ic(){return Object.create(null)}function tt(t){t.forEach(Cd)}function qo(t){return typeof t=="function"}function We(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let Hr;function St(t,e){return Hr||(Hr=document.createElement("a")),Hr.href=e,t===Hr.href}function d_(t){return Object.keys(t).length===0}function Ml(t,...e){if(t==null)return he;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function ui(t){let e;return Ml(t,n=>e=n)(),e}function je(t,e,n){t.$$.on_destroy.push(Ml(e,n))}function Ul(t,e,n,s){if(t){const i=Sd(t,e,n,s);return t[0](i)}}function Sd(t,e,n,s){return t[1]&&s?zt(n.ctx.slice(),t[1](s(e))):n.ctx}function Fl(t,e,n,s){if(t[2]&&s){const i=t[2](s(n));if(e.dirty===void 0)return i;if(typeof i=="object"){const r=[],o=Math.max(e.dirty.length,i.length);for(let a=0;a<o;a+=1)r[a]=e.dirty[a]|i[a];return r}return e.dirty|i}return e.dirty}function Vl(t,e,n,s,i,r){if(i){const o=Sd(e,n,s,r);t.p(o,i)}}function Bl(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let s=0;s<n;s++)e[s]=-1;return e}return-1}function uo(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function co(t,e){const n={};e=new Set(e);for(const s in t)!e.has(s)&&s[0]!=="$"&&(n[s]=t[s]);return n}function rc(t){return t==null?"":t}function at(t,e,n){return t.set(n),e}const Ad=typeof window<"u";let p_=Ad?()=>window.performance.now():()=>Date.now(),jl=Ad?t=>requestAnimationFrame(t):he;const ii=new Set;function Dd(t){ii.forEach(e=>{e.c(t)||(ii.delete(e),e.f())}),ii.size!==0&&jl(Dd)}function m_(t){let e;return ii.size===0&&jl(Dd),{promise:new Promise(n=>{ii.add(e={c:t,f:n})}),abort(){ii.delete(e)}}}function c(t,e){t.appendChild(e)}function Rd(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function g_(t){const e=p("style");return __(Rd(t),e),e.sheet}function __(t,e){return c(t.head||t,e),e.sheet}function k(t,e,n){t.insertBefore(e,n||null)}function w(t){t.parentNode.removeChild(t)}function ze(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function p(t){return document.createElement(t)}function A(t){return document.createTextNode(t)}function b(){return A(" ")}function _n(){return A("")}function q(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function Cn(t){return function(e){return e.preventDefault(),t.call(this,e)}}function g(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Fn(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const s in e)e[s]==null?t.removeAttribute(s):s==="style"?t.style.cssText=e[s]:s==="__value"?t.value=t[s]=e[s]:n[s]&&n[s].set?t[s]=e[s]:g(t,s,e[s])}function Yt(t,e,n){const s=new Set;for(let i=0;i<t.length;i+=1)t[i].checked&&s.add(t[i].__value);return n||s.delete(e),Array.from(s)}function ps(t){return t===""?null:+t}function v_(t){return Array.from(t.childNodes)}function re(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function pe(t,e){t.value=e==null?"":e}function Fe(t,e){for(let n=0;n<t.options.length;n+=1){const s=t.options[n];if(s.__value===e){s.selected=!0;return}}t.selectedIndex=-1}function xt(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}function ci(t,e,n){t.classList[n?"add":"remove"](e)}function Pd(t,e,{bubbles:n=!1,cancelable:s=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,s,e),i}function oc(t,e){return new t(e)}const ho=new Map;let fo=0;function y_(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function b_(t,e){const n={stylesheet:g_(e),rules:{}};return ho.set(t,n),n}function ac(t,e,n,s,i,r,o,a=0){const l=16.666/s;let u=`{
`;for(let y=0;y<=1;y+=l){const E=e+(n-e)*r(y);u+=y*100+`%{${o(E,1-E)}}
`}const f=u+`100% {${o(n,1-n)}}
}`,h=`__svelte_${y_(f)}_${a}`,d=Rd(t),{stylesheet:m,rules:_}=ho.get(d)||b_(d,t);_[h]||(_[h]=!0,m.insertRule(`@keyframes ${h} ${f}`,m.cssRules.length));const v=t.style.animation||"";return t.style.animation=`${v?`${v}, `:""}${h} ${s}ms linear ${i}ms 1 both`,fo+=1,h}function w_(t,e){const n=(t.style.animation||"").split(", "),s=n.filter(e?r=>r.indexOf(e)<0:r=>r.indexOf("__svelte")===-1),i=n.length-s.length;i&&(t.style.animation=s.join(", "),fo-=i,fo||k_())}function k_(){jl(()=>{fo||(ho.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&w(e)}),ho.clear())})}let Qi;function Bi(t){Qi=t}function dr(){if(!Qi)throw new Error("Function called outside component initialization");return Qi}function E_(t){dr().$$.on_mount.push(t)}function T_(t){dr().$$.on_destroy.push(t)}function Nd(){const t=dr();return(e,n,{cancelable:s=!1}={})=>{const i=t.$$.callbacks[e];if(i){const r=Pd(e,n,{cancelable:s});return i.slice().forEach(o=>{o.call(t,r)}),!r.defaultPrevented}return!0}}function ji(t,e){return dr().$$.context.set(t,e),e}function bs(t){return dr().$$.context.get(t)}function I_(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(s=>s.call(this,e))}const Oi=[],Xn=[],Zr=[],el=[],Od=Promise.resolve();let tl=!1;function $d(){tl||(tl=!0,Od.then(Ld))}function C_(){return $d(),Od}function et(t){Zr.push(t)}function Us(t){el.push(t)}const Sa=new Set;let Kr=0;function Ld(){const t=Qi;do{for(;Kr<Oi.length;){const e=Oi[Kr];Kr++,Bi(e),S_(e.$$)}for(Bi(null),Oi.length=0,Kr=0;Xn.length;)Xn.pop()();for(let e=0;e<Zr.length;e+=1){const n=Zr[e];Sa.has(n)||(Sa.add(n),n())}Zr.length=0}while(Oi.length);for(;el.length;)el.pop()();tl=!1,Sa.clear(),Bi(t)}function S_(t){if(t.fragment!==null){t.update(),tt(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(et)}}let Pi;function A_(){return Pi||(Pi=Promise.resolve(),Pi.then(()=>{Pi=null})),Pi}function Aa(t,e,n){t.dispatchEvent(Pd(`${e?"intro":"outro"}${n}`))}const eo=new Set;let Gn;function Mt(){Gn={r:0,c:[],p:Gn}}function Ut(){Gn.r||tt(Gn.c),Gn=Gn.p}function B(t,e){t&&t.i&&(eo.delete(t),t.i(e))}function G(t,e,n,s){if(t&&t.o){if(eo.has(t))return;eo.add(t),Gn.c.push(()=>{eo.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}const D_={duration:0};function En(t,e,n,s){let i=e(t,n),r=s?0:1,o=null,a=null,l=null;function u(){l&&w_(t,l)}function f(d,m){const _=d.b-r;return m*=Math.abs(_),{a:r,b:d.b,d:_,duration:m,start:d.start,end:d.start+m,group:d.group}}function h(d){const{delay:m=0,duration:_=300,easing:v=Id,tick:y=he,css:E}=i||D_,C={start:p_()+m,b:d};d||(C.group=Gn,Gn.r+=1),o||a?a=C:(E&&(u(),l=ac(t,r,d,_,m,v,E)),d&&y(0,1),o=f(C,_),et(()=>Aa(t,d,"start")),m_($=>{if(a&&$>a.start&&(o=f(a,_),a=null,Aa(t,o.b,"start"),E&&(u(),l=ac(t,r,o.b,o.duration,0,v,i.css))),o){if($>=o.end)y(r=o.b,1-r),Aa(t,o.b,"end"),a||(o.b?u():--o.group.r||tt(o.group.c)),o=null;else if($>=o.start){const D=$-o.start;r=o.a+o.d*v(D/o.duration),y(r,1-r)}}return!!(o||a)}))}return{run(d){qo(i)?A_().then(()=>{i=i(),h(d)}):h(d)},end(){u(),o=a=null}}}function Sn(t,e){const n={},s={},i={$$scope:1};let r=t.length;for(;r--;){const o=t[r],a=e[r];if(a){for(const l in o)l in a||(s[l]=1);for(const l in a)i[l]||(n[l]=a[l],i[l]=1);t[r]=a}else for(const l in o)i[l]=1}for(const o in s)o in n||(n[o]=void 0);return n}function Jn(t){return typeof t=="object"&&t!==null?t:{}}function Fs(t,e,n){const s=t.$$.props[e];s!==void 0&&(t.$$.bound[s]=n,n(t.$$.ctx[s]))}function le(t){t&&t.c()}function oe(t,e,n,s){const{fragment:i,after_update:r}=t.$$;i&&i.m(e,n),s||et(()=>{const o=t.$$.on_mount.map(Cd).filter(qo);t.$$.on_destroy?t.$$.on_destroy.push(...o):tt(o),t.$$.on_mount=[]}),r.forEach(et)}function ae(t,e){const n=t.$$;n.fragment!==null&&(tt(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function R_(t,e){t.$$.dirty[0]===-1&&(Oi.push(t),$d(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ye(t,e,n,s,i,r,o,a=[-1]){const l=Qi;Bi(t);const u=t.$$={fragment:null,ctx:[],props:r,update:he,not_equal:i,bound:ic(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:ic(),dirty:a,skip_bound:!1,root:e.target||l.$$.root};o&&o(u.root);let f=!1;if(u.ctx=n?n(t,e.props||{},(h,d,...m)=>{const _=m.length?m[0]:d;return u.ctx&&i(u.ctx[h],u.ctx[h]=_)&&(!u.skip_bound&&u.bound[h]&&u.bound[h](_),f&&R_(t,h)),d}):[],u.update(),f=!0,tt(u.before_update),u.fragment=s?s(u.ctx):!1,e.target){if(e.hydrate){const h=v_(e.target);u.fragment&&u.fragment.l(h),h.forEach(w)}else u.fragment&&u.fragment.c();e.intro&&B(t.$$.fragment),oe(t,e.target,e.anchor,e.customElement),Ld()}Bi(l)}class Xe{$destroy(){ae(this,1),this.$destroy=he}$on(e,n){if(!qo(n))return he;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const i=s.indexOf(n);i!==-1&&s.splice(i,1)}}$set(e){this.$$set&&!d_(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const lc=t=>typeof t>"u",Md=t=>typeof t=="function",Ud=t=>typeof t=="number";function P_(t){return!t.defaultPrevented&&t.button===0&&!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Fd(){let t=0;return()=>t++}function N_(){return Math.random().toString(36).substring(2)}const ws=typeof window>"u";function Vd(t,e,n){return t.addEventListener(e,n),()=>t.removeEventListener(e,n)}const nl=(t,e)=>t?{}:{style:e},ei=t=>({"aria-hidden":"true",...nl(t,"display:none;")}),Js=[];function O_(t,e){return{subscribe:Zt(t,e).subscribe}}function Zt(t,e=he){let n;const s=new Set;function i(a){if(We(t,a)&&(t=a,n)){const l=!Js.length;for(const u of s)u[1](),Js.push(u,t);if(l){for(let u=0;u<Js.length;u+=2)Js[u][0](Js[u+1]);Js.length=0}}}function r(a){i(a(t))}function o(a,l=he){const u=[a,l];return s.add(u),s.size===1&&(n=e(i)||he),a(t),()=>{s.delete(u),s.size===0&&(n(),n=null)}}return{set:i,update:r,subscribe:o}}function $_(t,e,n){const s=!Array.isArray(t),i=s?[t]:t,r=e.length<2;return O_(n,o=>{let a=!1;const l=[];let u=0,f=he;const h=()=>{if(u)return;f();const m=e(s?l[0]:l,o);r?o(m):f=qo(m)?m:he},d=i.map((m,_)=>Ml(m,v=>{l[_]=v,u&=~(1<<_),a&&h()},()=>{u|=1<<_}));return a=!0,h(),function(){tt(d),f()}})}const pr=t=>`@@svnav-ctx__${t}`,sl=pr("LOCATION"),hi=pr("ROUTER"),Bd=pr("ROUTE"),L_=pr("ROUTE_PARAMS"),M_=pr("FOCUS_ELEM"),jd=/^:(.+)/,$i=(t,e,n)=>t.substr(e,n),il=(t,e)=>$i(t,0,e.length)===e,U_=t=>t==="",F_=t=>jd.test(t),qd=t=>t[0]==="*",V_=t=>t.replace(/\*.*$/,""),Hd=t=>t.replace(/(^\/+|\/+$)/g,"");function qn(t,e=!1){const n=Hd(t).split("/");return e?n.filter(Boolean):n}const Da=(t,e)=>t+(e?`?${e}`:""),ql=t=>`/${Hd(t)}`;function mr(...t){const e=s=>qn(s,!0).join("/"),n=t.map(e).join("/");return ql(n)}const Hl=1,Ho=2,Vs=3,B_=4,Kd=5,j_=6,zd=7,q_=8,H_=9,Gd=10,Wd=11,K_={[Hl]:"Link",[Ho]:"Route",[Vs]:"Router",[B_]:"useFocus",[Kd]:"useLocation",[j_]:"useMatch",[zd]:"useNavigate",[q_]:"useParams",[H_]:"useResolvable",[Gd]:"useResolve",[Wd]:"navigate"},Kl=t=>K_[t];function z_(t,e){let n;return t===Ho?n=e.path?`path="${e.path}"`:"default":t===Hl?n=`to="${e.to}"`:t===Vs&&(n=`basepath="${e.basepath||""}"`),`<${Kl(t)} ${n||""} />`}function G_(t,e,n,s){const i=n&&z_(s||t,n),r=i?`

Occurred in: ${i}`:"",o=Kl(t),a=Md(e)?e(o):e;return`<${o}> ${a}${r}`}const Qd=t=>(...e)=>t(G_(...e)),xd=Qd(t=>{throw new Error(t)}),po=Qd(console.warn),uc=4,W_=3,Q_=2,x_=1,Y_=1;function X_(t,e){const n=t.default?0:qn(t.fullPath).reduce((s,i)=>{let r=s;return r+=uc,U_(i)?r+=Y_:F_(i)?r+=Q_:qd(i)?r-=uc+x_:r+=W_,r},0);return{route:t,score:n,index:e}}function J_(t){return t.map(X_).sort((e,n)=>e.score<n.score?1:e.score>n.score?-1:e.index-n.index)}function Yd(t,e){let n,s;const[i]=e.split("?"),r=qn(i),o=r[0]==="",a=J_(t);for(let l=0,u=a.length;l<u;l++){const{route:f}=a[l];let h=!1;const d={},m=E=>({...f,params:d,uri:E});if(f.default){s=m(e);continue}const _=qn(f.fullPath),v=Math.max(r.length,_.length);let y=0;for(;y<v;y++){const E=_[y],C=r[y];if(!lc(E)&&qd(E)){const D=E==="*"?"*":E.slice(1);d[D]=r.slice(y).map(decodeURIComponent).join("/");break}if(lc(C)){h=!0;break}const $=jd.exec(E);if($&&!o){const D=decodeURIComponent(C);d[$[1]]=D}else if(E!==C){h=!0;break}}if(!h){n=m(mr(...r.slice(0,y)));break}}return n||s||null}function Xd(t,e){return Yd([t],e)}function Z_(t,e){if(il(t,"/"))return t;const[n,s]=t.split("?"),[i]=e.split("?"),r=qn(n),o=qn(i);if(r[0]==="")return Da(i,s);if(!il(r[0],".")){const u=o.concat(r).join("/");return Da((i==="/"?"":"/")+u,s)}const a=o.concat(r),l=[];return a.forEach(u=>{u===".."?l.pop():u!=="."&&l.push(u)}),Da(`/${l.join("/")}`,s)}function cc(t,e){const{pathname:n,hash:s="",search:i="",state:r}=t,o=qn(e,!0),a=qn(n,!0);for(;o.length;)o[0]!==a[0]&&xd(Vs,`Invalid state: All locations must begin with the basepath "${e}", found "${n}"`),o.shift(),a.shift();return{pathname:mr(...a),hash:s,search:i,state:r}}const hc=t=>t.length===1?"":t,zl=t=>{const e=t.indexOf("?"),n=t.indexOf("#"),s=e!==-1,i=n!==-1,r=i?hc($i(t,n)):"",o=i?$i(t,0,n):t,a=s?hc($i(o,e)):"";return{pathname:(s?$i(o,0,e):o)||"/",search:a,hash:r}},ev=t=>{const{pathname:e,search:n,hash:s}=t;return e+n+s};function tv(t,e,n){return mr(n,Z_(t,e))}function nv(t,e){const n=ql(V_(t)),s=qn(n,!0),i=qn(e,!0).slice(0,s.length),r=Xd({fullPath:n},mr(...i));return r&&r.uri}const Ra="POP",sv="PUSH",iv="REPLACE";function Pa(t){return{...t.location,pathname:encodeURI(decodeURI(t.location.pathname)),state:t.history.state,_key:t.history.state&&t.history.state._key||"initial"}}function rv(t){let e=[],n=Pa(t),s=Ra;const i=(r=e)=>r.forEach(o=>o({location:n,action:s}));return{get location(){return n},listen(r){e.push(r);const o=()=>{n=Pa(t),s=Ra,i([r])};i([r]);const a=Vd(t,"popstate",o);return()=>{a(),e=e.filter(l=>l!==r)}},navigate(r,o){const{state:a={},replace:l=!1}=o||{};if(s=l?iv:sv,Ud(r))o&&po(Wd,"Navigation options (state or replace) are not supported, when passing a number as the first argument to navigate. They are ignored."),s=Ra,t.history.go(r);else{const u={...a,_key:N_()};try{t.history[l?"replaceState":"pushState"](u,"",r)}catch{t.location[l?"replace":"assign"](r)}}n=Pa(t),i()}}}function Na(t,e){return{...zl(e),state:t}}function ov(t="/"){let e=0,n=[Na(null,t)];return{get entries(){return n},get location(){return n[e]},addEventListener(){},removeEventListener(){},history:{get state(){return n[e].state},pushState(s,i,r){e++,n=n.slice(0,e),n.push(Na(s,r))},replaceState(s,i,r){n[e]=Na(s,r)},go(s){const i=e+s;i<0||i>n.length-1||(e=i)}}}}const av=!!(!ws&&window.document&&window.document.createElement),lv=!ws&&window.location.origin==="null",uv=rv(av&&!lv?window:ov());let zn=null,Jd=!0;function cv(t,e){const n=document.querySelectorAll("[data-svnav-router]");for(let s=0;s<n.length;s++){const i=n[s],r=Number(i.dataset.svnavRouter);if(r===t)return!0;if(r===e)return!1}return!1}function hv(t){(!zn||t.level>zn.level||t.level===zn.level&&cv(t.routerId,zn.routerId))&&(zn=t)}function fv(){zn=null}function dv(){Jd=!1}function fc(t){if(!t)return!1;const e="tabindex";try{if(!t.hasAttribute(e)){t.setAttribute(e,"-1");let n;n=Vd(t,"blur",()=>{t.removeAttribute(e),n()})}return t.focus(),document.activeElement===t}catch{return!1}}function pv(t,e){return Number(t.dataset.svnavRouteEnd)===e}function mv(t){return/^H[1-6]$/i.test(t.tagName)}function dc(t,e=document){return e.querySelector(t)}function gv(t){let n=dc(`[data-svnav-route-start="${t}"]`).nextElementSibling;for(;!pv(n,t);){if(mv(n))return n;const s=dc("h1,h2,h3,h4,h5,h6",n);if(s)return s;n=n.nextElementSibling}return null}function _v(t){Promise.resolve(ui(t.focusElement)).then(e=>{const n=e||gv(t.id);n||po(Vs,`Could not find an element to focus. You should always render a header for accessibility reasons, or set a custom focus element via the "useFocus" hook. If you don't want this Route or Router to manage focus, pass "primary={false}" to it.`,t,Ho),!fc(n)&&fc(document.documentElement)})}const vv=(t,e,n)=>(s,i)=>C_().then(()=>{if(!zn||Jd){dv();return}if(s&&_v(zn.route),t.announcements&&i){const{path:r,fullPath:o,meta:a,params:l,uri:u}=zn.route,f=t.createAnnouncement({path:r,fullPath:o,meta:a,params:l,uri:u},ui(n));Promise.resolve(f).then(h=>{e.set(h)})}fv()}),pc="position:fixed;top:-1px;left:0;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;";function yv(t){let e,n,s=[{role:"status"},{"aria-atomic":"true"},{"aria-live":"polite"},{"data-svnav-announcer":""},nl(t[6],pc)],i={};for(let r=0;r<s.length;r+=1)i=zt(i,s[r]);return{c(){e=p("div"),n=A(t[0]),Fn(e,i)},m(r,o){k(r,e,o),c(e,n)},p(r,o){o[0]&1&&re(n,r[0]),Fn(e,i=Sn(s,[{role:"status"},{"aria-atomic":"true"},{"aria-live":"polite"},{"data-svnav-announcer":""},nl(r[6],pc)]))},d(r){r&&w(e)}}}function bv(t){let e,n,s,i,r,o=[ei(t[6]),{"data-svnav-router":t[3]}],a={};for(let h=0;h<o.length;h+=1)a=zt(a,o[h]);const l=t[22].default,u=Ul(l,t,t[21],null);let f=t[2]&&t[4]&&t[1].announcements&&yv(t);return{c(){e=p("div"),n=b(),u&&u.c(),s=b(),f&&f.c(),i=_n(),Fn(e,a)},m(h,d){k(h,e,d),k(h,n,d),u&&u.m(h,d),k(h,s,d),f&&f.m(h,d),k(h,i,d),r=!0},p(h,d){Fn(e,a=Sn(o,[ei(h[6]),{"data-svnav-router":h[3]}])),u&&u.p&&(!r||d[0]&2097152)&&Vl(u,l,h,h[21],r?Fl(l,h[21],d,null):Bl(h[21]),null),h[2]&&h[4]&&h[1].announcements&&f.p(h,d)},i(h){r||(B(u,h),r=!0)},o(h){G(u,h),r=!1},d(h){h&&w(e),h&&w(n),u&&u.d(h),h&&w(s),f&&f.d(h),h&&w(i)}}}const wv=Fd(),mc="/";function kv(t,e,n){let s,i,r,o,a,{$$slots:l={},$$scope:u}=e,{basepath:f=mc}=e,{url:h=null}=e,{history:d=uv}=e,{primary:m=!0}=e,{a11y:_={}}=e,{disableInlineStyles:v=!1}=e;const y={createAnnouncement:O=>`Navigated to ${O.uri}`,announcements:!0,..._},E=f,C=ql(f),$=bs(sl),D=bs(hi),j=!$,N=wv(),F=m&&!(D&&!D.manageFocus),z=Zt("");je(t,z,O=>n(0,a=O));const R=D?D.disableInlineStyles:v,U=Zt([]);je(t,U,O=>n(20,o=O));const P=Zt(null);je(t,P,O=>n(18,i=O));let K=!1;const Y=j?0:D.level+1,Q=j?Zt((()=>cc(ws?zl(h):d.location,C))()):$;je(t,Q,O=>n(17,s=O));const W=Zt(s);je(t,W,O=>n(19,r=O));const te=vv(y,z,Q),x=O=>L=>L.filter(ue=>ue.id!==O);function S(O){if(ws){if(K)return;const L=Xd(O,s.pathname);if(L)return K=!0,L}else U.update(L=>{const ue=x(O.id)(L);return ue.push(O),ue})}function V(O){U.update(x(O))}return!j&&f!==mc&&po(Vs,'Only top-level Routers can have a "basepath" prop. It is ignored.',{basepath:f}),j&&(E_(()=>d.listen(L=>{const ue=cc(L.location,C);W.set(s),Q.set(ue)})),ji(sl,Q)),ji(hi,{activeRoute:P,registerRoute:S,unregisterRoute:V,manageFocus:F,level:Y,id:N,history:j?d:D.history,basepath:j?C:D.basepath,disableInlineStyles:R}),t.$$set=O=>{"basepath"in O&&n(11,f=O.basepath),"url"in O&&n(12,h=O.url),"history"in O&&n(13,d=O.history),"primary"in O&&n(14,m=O.primary),"a11y"in O&&n(15,_=O.a11y),"disableInlineStyles"in O&&n(16,v=O.disableInlineStyles),"$$scope"in O&&n(21,u=O.$$scope)},t.$$.update=()=>{if(t.$$.dirty[0]&2048&&f!==E&&po(Vs,'You cannot change the "basepath" prop. It is ignored.'),t.$$.dirty[0]&1179648){const O=Yd(o,s.pathname);P.set(O)}if(t.$$.dirty[0]&655360&&j){const O=!!s.hash,L=!O&&F,ue=!O||s.pathname!==r.pathname;te(L,ue)}t.$$.dirty[0]&262144&&F&&i&&i.primary&&hv({level:Y,routerId:N,route:i})},[a,y,j,N,F,z,R,U,P,Q,W,f,h,d,m,_,v,s,i,r,o,u,l]}class Gl extends Xe{constructor(e){super(),Ye(this,e,kv,bv,We,{basepath:11,url:12,history:13,primary:14,a11y:15,disableInlineStyles:16},null,[-1,-1])}}function gr(t,e,n=hi,s=Vs){bs(n)||xd(t,r=>`You cannot use ${r} outside of a ${Kl(s)}.`,e)}const Ev=t=>{const{subscribe:e}=bs(t);return{subscribe:e}};function Zd(){return gr(Kd),Ev(sl)}function ep(){const{history:t}=bs(hi);return t}function tp(){const t=bs(Bd);return t?$_(t,e=>e.base):Zt("/")}function np(){gr(Gd);const t=tp(),{basepath:e}=bs(hi);return s=>tv(s,ui(t),e)}function ki(){gr(zd);const t=np(),{navigate:e}=ep();return(s,i)=>{const r=Ud(s)?s:t(s);return e(r,i)}}const Tv=t=>({params:t&16,location:t&8}),gc=t=>({params:ws?ui(t[10]):t[4],location:t[3],navigate:t[11]});function _c(t){let e,n;return e=new Gl({props:{primary:t[1],$$slots:{default:[Sv]},$$scope:{ctx:t}}}),{c(){le(e.$$.fragment)},m(s,i){oe(e,s,i),n=!0},p(s,i){const r={};i&2&&(r.primary=s[1]),i&528409&&(r.$$scope={dirty:i,ctx:s}),e.$set(r)},i(s){n||(B(e.$$.fragment,s),n=!0)},o(s){G(e.$$.fragment,s),n=!1},d(s){ae(e,s)}}}function Iv(t){let e;const n=t[18].default,s=Ul(n,t,t[19],gc);return{c(){s&&s.c()},m(i,r){s&&s.m(i,r),e=!0},p(i,r){s&&s.p&&(!e||r&524312)&&Vl(s,n,i,i[19],e?Fl(n,i[19],r,Tv):Bl(i[19]),gc)},i(i){e||(B(s,i),e=!0)},o(i){G(s,i),e=!1},d(i){s&&s.d(i)}}}function Cv(t){let e,n,s;const i=[{location:t[3]},{navigate:t[11]},ws?ui(t[10]):t[4],t[12]];var r=t[0];function o(a){let l={};for(let u=0;u<i.length;u+=1)l=zt(l,i[u]);return{props:l}}return r&&(e=oc(r,o())),{c(){e&&le(e.$$.fragment),n=_n()},m(a,l){e&&oe(e,a,l),k(a,n,l),s=!0},p(a,l){const u=l&7192?Sn(i,[l&8&&{location:a[3]},l&2048&&{navigate:a[11]},l&1040&&Jn(ws?ui(a[10]):a[4]),l&4096&&Jn(a[12])]):{};if(r!==(r=a[0])){if(e){Mt();const f=e;G(f.$$.fragment,1,0,()=>{ae(f,1)}),Ut()}r?(e=oc(r,o()),le(e.$$.fragment),B(e.$$.fragment,1),oe(e,n.parentNode,n)):e=null}else r&&e.$set(u)},i(a){s||(e&&B(e.$$.fragment,a),s=!0)},o(a){e&&G(e.$$.fragment,a),s=!1},d(a){a&&w(n),e&&ae(e,a)}}}function Sv(t){let e,n,s,i;const r=[Cv,Iv],o=[];function a(l,u){return l[0]!==null?0:1}return e=a(t),n=o[e]=r[e](t),{c(){n.c(),s=_n()},m(l,u){o[e].m(l,u),k(l,s,u),i=!0},p(l,u){let f=e;e=a(l),e===f?o[e].p(l,u):(Mt(),G(o[f],1,1,()=>{o[f]=null}),Ut(),n=o[e],n?n.p(l,u):(n=o[e]=r[e](l),n.c()),B(n,1),n.m(s.parentNode,s))},i(l){i||(B(n),i=!0)},o(l){G(n),i=!1},d(l){o[e].d(l),l&&w(s)}}}function Av(t){let e,n,s,i,r,o=[ei(t[7]),{"data-svnav-route-start":t[5]}],a={};for(let h=0;h<o.length;h+=1)a=zt(a,o[h]);let l=t[2]&&_c(t),u=[ei(t[7]),{"data-svnav-route-end":t[5]}],f={};for(let h=0;h<u.length;h+=1)f=zt(f,u[h]);return{c(){e=p("div"),n=b(),l&&l.c(),s=b(),i=p("div"),Fn(e,a),Fn(i,f)},m(h,d){k(h,e,d),k(h,n,d),l&&l.m(h,d),k(h,s,d),k(h,i,d),r=!0},p(h,[d]){Fn(e,a=Sn(o,[ei(h[7]),{"data-svnav-route-start":h[5]}])),h[2]?l?(l.p(h,d),d&4&&B(l,1)):(l=_c(h),l.c(),B(l,1),l.m(s.parentNode,s)):l&&(Mt(),G(l,1,1,()=>{l=null}),Ut()),Fn(i,f=Sn(u,[ei(h[7]),{"data-svnav-route-end":h[5]}]))},i(h){r||(B(l),r=!0)},o(h){G(l),r=!1},d(h){h&&w(e),h&&w(n),l&&l.d(h),h&&w(s),h&&w(i)}}}const Dv=Fd();function Rv(t,e,n){let s;const i=["path","component","meta","primary"];let r=co(e,i),o,a,l,u,{$$slots:f={},$$scope:h}=e,{path:d=""}=e,{component:m=null}=e,{meta:_={}}=e,{primary:v=!0}=e;gr(Ho,e);const y=Dv(),{registerRoute:E,unregisterRoute:C,activeRoute:$,disableInlineStyles:D}=bs(hi);je(t,$,K=>n(16,o=K));const j=tp();je(t,j,K=>n(17,l=K));const N=Zd();je(t,N,K=>n(3,a=K));const F=Zt(null);let z;const R=Zt(),U=Zt({});je(t,U,K=>n(4,u=K)),ji(Bd,R),ji(L_,U),ji(M_,F);const P=ki();return ws||T_(()=>C(y)),t.$$set=K=>{n(24,e=zt(zt({},e),uo(K))),n(12,r=co(e,i)),"path"in K&&n(13,d=K.path),"component"in K&&n(0,m=K.component),"meta"in K&&n(14,_=K.meta),"primary"in K&&n(1,v=K.primary),"$$scope"in K&&n(19,h=K.$$scope)},t.$$.update=()=>{if(t.$$.dirty&155658){const K=d==="",Y=mr(l,d),ie={id:y,path:d,meta:_,default:K,fullPath:K?"":Y,base:K?l:nv(Y,a.pathname),primary:v,focusElement:F};R.set(ie),n(15,z=E(ie))}if(t.$$.dirty&98304&&n(2,s=!!(z||o&&o.id===y)),t.$$.dirty&98308&&s){const{params:K}=z||o;U.set(K)}},e=uo(e),[m,v,s,a,u,y,$,D,j,N,U,P,r,d,_,z,o,l,f,h]}class bn extends Xe{constructor(e){super(),Ye(this,e,Rv,Av,We,{path:13,component:0,meta:14,primary:1})}}function Pv(t){let e,n,s,i;const r=t[13].default,o=Ul(r,t,t[12],null);let a=[{href:t[0]},t[2],t[1]],l={};for(let u=0;u<a.length;u+=1)l=zt(l,a[u]);return{c(){e=p("a"),o&&o.c(),Fn(e,l)},m(u,f){k(u,e,f),o&&o.m(e,null),n=!0,s||(i=q(e,"click",t[4]),s=!0)},p(u,[f]){o&&o.p&&(!n||f&4096)&&Vl(o,r,u,u[12],n?Fl(r,u[12],f,null):Bl(u[12]),null),Fn(e,l=Sn(a,[(!n||f&1)&&{href:u[0]},f&4&&u[2],f&2&&u[1]]))},i(u){n||(B(o,u),n=!0)},o(u){G(o,u),n=!1},d(u){u&&w(e),o&&o.d(u),s=!1,i()}}}function Nv(t,e,n){let s,i,r,o,a,l;const u=["to","replace","state","getProps"];let f=co(e,u),h,{$$slots:d={},$$scope:m}=e,{to:_}=e,{replace:v=!1}=e,{state:y={}}=e,{getProps:E=null}=e;gr(Hl,e);const C=Zd();je(t,C,F=>n(11,h=F));const $=Nd(),D=np(),{navigate:j}=ep();function N(F){$("click",F),P_(F)&&(F.preventDefault(),j(s,{state:y,replace:o||v}))}return t.$$set=F=>{n(19,e=zt(zt({},e),uo(F))),n(18,f=co(e,u)),"to"in F&&n(5,_=F.to),"replace"in F&&n(6,v=F.replace),"state"in F&&n(7,y=F.state),"getProps"in F&&n(8,E=F.getProps),"$$scope"in F&&n(12,m=F.$$scope)},t.$$.update=()=>{t.$$.dirty&2080&&n(0,s=D(_,h)),t.$$.dirty&2049&&n(10,i=il(h.pathname,s)),t.$$.dirty&2049&&n(9,r=s===h.pathname),t.$$.dirty&2049&&(o=zl(s)===ev(h)),t.$$.dirty&512&&n(2,a=r?{"aria-current":"page"}:{}),n(1,l=(()=>{if(Md(E)){const F=E({location:h,href:s,isPartiallyCurrent:i,isCurrent:r});return{...f,...F}}return f})())},e=uo(e),[s,l,a,C,N,_,v,y,E,r,i,h,m,d]}class wn extends Xe{constructor(e){super(),Ye(this,e,Nv,Pv,We,{to:5,replace:6,state:7,getProps:8})}}const Ov="/to-deploy-mh/assets/logoMH.9387adb0.png",$v="/to-deploy-mh/assets/menu.9ddfd9f8.svg";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const sp=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Lv=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},ip={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,f=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|u>>6,m=u&63;l||(m=64,o||(d=64)),s.push(n[f],n[h],n[d],n[m])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(sp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Lv(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||u==null||h==null)throw Error();const d=r<<2|a>>4;if(s.push(d),u!==64){const m=a<<4&240|u>>2;if(s.push(m),h!==64){const _=u<<6&192|h;s.push(_)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Mv=function(t){const e=sp(t);return ip.encodeByteArray(e,!0)},mo=function(t){return Mv(t).replace(/\./g,"")},rp=function(t){try{return ip.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Uv(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(hn())}function Fv(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Vv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Bv(){const t=hn();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function jv(){return typeof indexedDB=="object"}function qv(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}function Hv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Kv=()=>Hv().__FIREBASE_DEFAULTS__,zv=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t=process.env.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Gv=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&rp(t[1]);return e&&JSON.parse(e)},Wl=()=>{try{return Kv()||zv()||Gv()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},op=t=>{var e,n;return(n=(e=Wl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Wv=t=>{const e=op(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Qv=()=>{var t;return(t=Wl())===null||t===void 0?void 0:t.config},ap=t=>{var e;return(e=Wl())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xv{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Yv(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[mo(JSON.stringify(n)),mo(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xv="FirebaseError";class os extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Xv,Object.setPrototypeOf(this,os.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_r.prototype.create)}}class _r{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Jv(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new os(i,a,s)}}function Jv(t,e){return t.replace(Zv,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Zv=/\{\$([^}]+)}/g;function ey(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function go(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(vc(r)&&vc(o)){if(!go(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function vc(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vr(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Li(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function Mi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function ty(t,e){const n=new ny(t,e);return n.subscribe.bind(n)}class ny{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");sy(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=Oa),i.error===void 0&&(i.error=Oa),i.complete===void 0&&(i.complete=Oa);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function sy(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Oa(){}/**
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
 */function gn(t){return t&&t._delegate?t._delegate:t}class Bs{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class iy{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new xv;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(oy(e))try{this.getOrInitializeService({instanceIdentifier:Rs})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Rs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Rs){return this.instances.has(e)}getOptions(e=Rs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:ry(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Rs){return this.component?this.component.multipleInstances?e:Rs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ry(t){return t===Rs?void 0:t}function oy(t){return t.instantiationMode==="EAGER"}/**
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
 */class ay{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new iy(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(qe||(qe={}));const ly={debug:qe.DEBUG,verbose:qe.VERBOSE,info:qe.INFO,warn:qe.WARN,error:qe.ERROR,silent:qe.SILENT},uy=qe.INFO,cy={[qe.DEBUG]:"log",[qe.VERBOSE]:"log",[qe.INFO]:"info",[qe.WARN]:"warn",[qe.ERROR]:"error"},hy=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=cy[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ql{constructor(e){this.name=e,this._logLevel=uy,this._logHandler=hy,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in qe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ly[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,qe.DEBUG,...e),this._logHandler(this,qe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,qe.VERBOSE,...e),this._logHandler(this,qe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,qe.INFO,...e),this._logHandler(this,qe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,qe.WARN,...e),this._logHandler(this,qe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,qe.ERROR,...e),this._logHandler(this,qe.ERROR,...e)}}const fy=(t,e)=>e.some(n=>t instanceof n);let yc,bc;function dy(){return yc||(yc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function py(){return bc||(bc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const lp=new WeakMap,rl=new WeakMap,up=new WeakMap,$a=new WeakMap,xl=new WeakMap;function my(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(ms(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&lp.set(n,t)}).catch(()=>{}),xl.set(e,t),e}function gy(t){if(rl.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});rl.set(t,e)}let ol={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return rl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||up.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ms(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function _y(t){ol=t(ol)}function vy(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(La(this),e,...n);return up.set(s,e.sort?e.sort():[e]),ms(s)}:py().includes(t)?function(...e){return t.apply(La(this),e),ms(lp.get(this))}:function(...e){return ms(t.apply(La(this),e))}}function yy(t){return typeof t=="function"?vy(t):(t instanceof IDBTransaction&&gy(t),fy(t,dy())?new Proxy(t,ol):t)}function ms(t){if(t instanceof IDBRequest)return my(t);if($a.has(t))return $a.get(t);const e=yy(t);return e!==t&&($a.set(t,e),xl.set(e,t)),e}const La=t=>xl.get(t);function by(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=ms(o);return s&&o.addEventListener("upgradeneeded",l=>{s(ms(o.result),l.oldVersion,l.newVersion,ms(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const wy=["get","getKey","getAll","getAllKeys","count"],ky=["put","add","delete","clear"],Ma=new Map;function wc(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ma.get(e))return Ma.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=ky.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||wy.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Ma.set(e,r),r}_y(t=>({...t,get:(e,n,s)=>wc(e,n)||t.get(e,n,s),has:(e,n)=>!!wc(e,n)||t.has(e,n)}));/**
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
 */class Ey{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ty(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Ty(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const al="@firebase/app",kc="0.8.2";/**
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
 */const js=new Ql("@firebase/app"),Iy="@firebase/app-compat",Cy="@firebase/analytics-compat",Sy="@firebase/analytics",Ay="@firebase/app-check-compat",Dy="@firebase/app-check",Ry="@firebase/auth",Py="@firebase/auth-compat",Ny="@firebase/database",Oy="@firebase/database-compat",$y="@firebase/functions",Ly="@firebase/functions-compat",My="@firebase/installations",Uy="@firebase/installations-compat",Fy="@firebase/messaging",Vy="@firebase/messaging-compat",By="@firebase/performance",jy="@firebase/performance-compat",qy="@firebase/remote-config",Hy="@firebase/remote-config-compat",Ky="@firebase/storage",zy="@firebase/storage-compat",Gy="@firebase/firestore",Wy="@firebase/firestore-compat",Qy="firebase",xy="9.12.1";/**
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
 */const ll="[DEFAULT]",Yy={[al]:"fire-core",[Iy]:"fire-core-compat",[Sy]:"fire-analytics",[Cy]:"fire-analytics-compat",[Dy]:"fire-app-check",[Ay]:"fire-app-check-compat",[Ry]:"fire-auth",[Py]:"fire-auth-compat",[Ny]:"fire-rtdb",[Oy]:"fire-rtdb-compat",[$y]:"fire-fn",[Ly]:"fire-fn-compat",[My]:"fire-iid",[Uy]:"fire-iid-compat",[Fy]:"fire-fcm",[Vy]:"fire-fcm-compat",[By]:"fire-perf",[jy]:"fire-perf-compat",[qy]:"fire-rc",[Hy]:"fire-rc-compat",[Ky]:"fire-gcs",[zy]:"fire-gcs-compat",[Gy]:"fire-fst",[Wy]:"fire-fst-compat","fire-js":"fire-js",[Qy]:"fire-js-all"};/**
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
 */const _o=new Map,ul=new Map;function Xy(t,e){try{t.container.addComponent(e)}catch(n){js.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function fi(t){const e=t.name;if(ul.has(e))return js.debug(`There were multiple attempts to register component ${e}.`),!1;ul.set(e,t);for(const n of _o.values())Xy(n,t);return!0}function Yl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Jy={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},gs=new _r("app","Firebase",Jy);/**
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
 */class Zy{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Bs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw gs.create("app-deleted",{appName:this._name})}}/**
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
 */const yr=xy;function cp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:ll,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw gs.create("bad-app-name",{appName:String(i)});if(n||(n=Qv()),!n)throw gs.create("no-options");const r=_o.get(i);if(r){if(go(n,r.options)&&go(s,r.config))return r;throw gs.create("duplicate-app",{appName:i})}const o=new ay(i);for(const l of ul.values())o.addComponent(l);const a=new Zy(n,s,o);return _o.set(i,a),a}function hp(t=ll){const e=_o.get(t);if(!e&&t===ll)return cp();if(!e)throw gs.create("no-app",{appName:t});return e}function _s(t,e,n){var s;let i=(s=Yy[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),js.warn(a.join(" "));return}fi(new Bs(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const e0="firebase-heartbeat-database",t0=1,xi="firebase-heartbeat-store";let Ua=null;function fp(){return Ua||(Ua=by(e0,t0,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(xi)}}}).catch(t=>{throw gs.create("idb-open",{originalErrorMessage:t.message})})),Ua}async function n0(t){var e;try{return(await fp()).transaction(xi).objectStore(xi).get(dp(t))}catch(n){if(n instanceof os)js.warn(n.message);else{const s=gs.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});js.warn(s.message)}}}async function Ec(t,e){var n;try{const i=(await fp()).transaction(xi,"readwrite");return await i.objectStore(xi).put(e,dp(t)),i.done}catch(s){if(s instanceof os)js.warn(s.message);else{const i=gs.create("idb-set",{originalErrorMessage:(n=s)===null||n===void 0?void 0:n.message});js.warn(i.message)}}}function dp(t){return`${t.name}!${t.options.appId}`}/**
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
 */const s0=1024,i0=30*24*60*60*1e3;class r0{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new a0(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Tc();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=i0}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Tc(),{heartbeatsToSend:n,unsentEntries:s}=o0(this._heartbeatsCache.heartbeats),i=mo(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Tc(){return new Date().toISOString().substring(0,10)}function o0(t,e=s0){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Ic(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ic(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class a0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return jv()?qv().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await n0(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ec(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ec(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ic(t){return mo(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function l0(t){fi(new Bs("platform-logger",e=>new Ey(e),"PRIVATE")),fi(new Bs("heartbeat",e=>new r0(e),"PRIVATE")),_s(al,kc,t),_s(al,kc,"esm2017"),_s("fire-js","")}l0("");var u0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ce,Xl=Xl||{},Ie=u0||self;function vo(){}function Ko(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function br(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function c0(t){return Object.prototype.hasOwnProperty.call(t,Fa)&&t[Fa]||(t[Fa]=++h0)}var Fa="closure_uid_"+(1e9*Math.random()>>>0),h0=0;function f0(t,e,n){return t.call.apply(t.bind,arguments)}function d0(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function un(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?un=f0:un=d0,un.apply(null,arguments)}function zr(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function nn(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function Is(){this.s=this.s,this.o=this.o}var p0=0;Is.prototype.s=!1;Is.prototype.na=function(){!this.s&&(this.s=!0,this.M(),p0!=0)&&c0(this)};Is.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const pp=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Jl(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Cc(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Ko(s)){const i=t.length||0,r=s.length||0;t.length=i+r;for(let o=0;o<r;o++)t[i+o]=s[o]}else t.push(s)}}function cn(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}cn.prototype.h=function(){this.defaultPrevented=!0};var m0=function(){if(!Ie.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Ie.addEventListener("test",vo,e),Ie.removeEventListener("test",vo,e)}catch{}return t}();function yo(t){return/^[\s\xa0]*$/.test(t)}var Sc=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Va(t,e){return t<e?-1:t>e?1:0}function zo(){var t=Ie.navigator;return t&&(t=t.userAgent)?t:""}function Un(t){return zo().indexOf(t)!=-1}function Zl(t){return Zl[" "](t),t}Zl[" "]=vo;function g0(t){var e=y0;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var _0=Un("Opera"),di=Un("Trident")||Un("MSIE"),mp=Un("Edge"),cl=mp||di,gp=Un("Gecko")&&!(zo().toLowerCase().indexOf("webkit")!=-1&&!Un("Edge"))&&!(Un("Trident")||Un("MSIE"))&&!Un("Edge"),v0=zo().toLowerCase().indexOf("webkit")!=-1&&!Un("Edge");function _p(){var t=Ie.document;return t?t.documentMode:void 0}var bo;e:{var Ba="",ja=function(){var t=zo();if(gp)return/rv:([^\);]+)(\)|;)/.exec(t);if(mp)return/Edge\/([\d\.]+)/.exec(t);if(di)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(v0)return/WebKit\/(\S+)/.exec(t);if(_0)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(ja&&(Ba=ja?ja[1]:""),di){var qa=_p();if(qa!=null&&qa>parseFloat(Ba)){bo=String(qa);break e}}bo=Ba}var y0={};function b0(){return g0(function(){let t=0;const e=Sc(String(bo)).split("."),n=Sc("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;t=Va(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||Va(i[2].length==0,r[2].length==0)||Va(i[2],r[2]),i=i[3],r=r[3]}while(t==0)}return 0<=t})}var hl;if(Ie.document&&di){var Ac=_p();hl=Ac||parseInt(bo,10)||void 0}else hl=void 0;var w0=hl;function Yi(t,e){if(cn.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(gp){e:{try{Zl(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:k0[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Yi.X.h.call(this)}}nn(Yi,cn);var k0={2:"touch",3:"pen",4:"mouse"};Yi.prototype.h=function(){Yi.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var wr="closure_listenable_"+(1e6*Math.random()|0),E0=0;function T0(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=i,this.key=++E0,this.ba=this.ea=!1}function Go(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function eu(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function vp(t){const e={};for(const n in t)e[n]=t[n];return e}const Dc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function yp(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<Dc.length;r++)n=Dc[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Wo(t){this.src=t,this.g={},this.h=0}Wo.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=dl(t,e,s,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new T0(e,this.src,r,!!s,i),e.ea=n,t.push(e)),e};function fl(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=pp(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(Go(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function dl(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==s)return i}return-1}var tu="closure_lm_"+(1e6*Math.random()|0),Ha={};function bp(t,e,n,s,i){if(s&&s.once)return kp(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)bp(t,e[r],n,s,i);return null}return n=iu(n),t&&t[wr]?t.N(e,n,br(s)?!!s.capture:!!s,i):wp(t,e,n,!1,s,i)}function wp(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=br(i)?!!i.capture:!!i,a=su(t);if(a||(t[tu]=a=new Wo(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=I0(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)m0||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(Tp(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function I0(){function t(n){return e.call(t.src,t.listener,n)}const e=C0;return t}function kp(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)kp(t,e[r],n,s,i);return null}return n=iu(n),t&&t[wr]?t.O(e,n,br(s)?!!s.capture:!!s,i):wp(t,e,n,!0,s,i)}function Ep(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)Ep(t,e[r],n,s,i);else s=br(s)?!!s.capture:!!s,n=iu(n),t&&t[wr]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=dl(r,n,s,i),-1<n&&(Go(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=su(t))&&(e=t.g[e.toString()],t=-1,e&&(t=dl(e,n,s,i)),(n=-1<t?e[t]:null)&&nu(n))}function nu(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[wr])fl(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Tp(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=su(e))?(fl(n,t),n.h==0&&(n.src=null,e[tu]=null)):Go(t)}}}function Tp(t){return t in Ha?Ha[t]:Ha[t]="on"+t}function C0(t,e){if(t.ba)t=!0;else{e=new Yi(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&nu(t),t=n.call(s,e)}return t}function su(t){return t=t[tu],t instanceof Wo?t:null}var Ka="__closure_events_fn_"+(1e9*Math.random()>>>0);function iu(t){return typeof t=="function"?t:(t[Ka]||(t[Ka]=function(e){return t.handleEvent(e)}),t[Ka])}function Gt(){Is.call(this),this.i=new Wo(this),this.P=this,this.I=null}nn(Gt,Is);Gt.prototype[wr]=!0;Gt.prototype.removeEventListener=function(t,e,n,s){Ep(this,t,e,n,s)};function en(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new cn(e,t);else if(e instanceof cn)e.target=e.target||t;else{var i=e;e=new cn(s,t),yp(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=Gr(o,s,!0,e)&&i}if(o=e.g=t,i=Gr(o,s,!0,e)&&i,i=Gr(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=Gr(o,s,!1,e)&&i}Gt.prototype.M=function(){if(Gt.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Go(n[s]);delete t.g[e],t.h--}}this.I=null};Gt.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Gt.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Gr(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&fl(t.i,o),i=a.call(l,s)!==!1&&i}}return i&&!s.defaultPrevented}var ru=Ie.JSON.stringify;function S0(){var t=Sp;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class A0{constructor(){this.h=this.g=null}add(e,n){const s=Ip.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Ip=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new D0,t=>t.reset());class D0{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function R0(t){Ie.setTimeout(()=>{throw t},0)}function Cp(t,e){pl||P0(),ml||(pl(),ml=!0),Sp.add(t,e)}var pl;function P0(){var t=Ie.Promise.resolve(void 0);pl=function(){t.then(N0)}}var ml=!1,Sp=new A0;function N0(){for(var t;t=S0();){try{t.h.call(t.g)}catch(n){R0(n)}var e=Ip;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}ml=!1}function Qo(t,e){Gt.call(this),this.h=t||1,this.g=e||Ie,this.j=un(this.lb,this),this.l=Date.now()}nn(Qo,Gt);ce=Qo.prototype;ce.ca=!1;ce.R=null;ce.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),en(this,"tick"),this.ca&&(ou(this),this.start()))}};ce.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function ou(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}ce.M=function(){Qo.X.M.call(this),ou(this),delete this.g};function au(t,e,n){if(typeof t=="function")n&&(t=un(t,n));else if(t&&typeof t.handleEvent=="function")t=un(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Ie.setTimeout(t,e||0)}function Ap(t){t.g=au(()=>{t.g=null,t.i&&(t.i=!1,Ap(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class O0 extends Is{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Ap(this)}M(){super.M(),this.g&&(Ie.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Xi(t){Is.call(this),this.h=t,this.g={}}nn(Xi,Is);var Rc=[];function Dp(t,e,n,s){Array.isArray(n)||(n&&(Rc[0]=n.toString()),n=Rc);for(var i=0;i<n.length;i++){var r=bp(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function Rp(t){eu(t.g,function(e,n){this.g.hasOwnProperty(n)&&nu(e)},t),t.g={}}Xi.prototype.M=function(){Xi.X.M.call(this),Rp(this)};Xi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function xo(){this.g=!0}xo.prototype.Aa=function(){this.g=!1};function $0(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var f=u[0];u=u[1];var h=f.split("_");o=2<=h.length&&h[1]=="type"?o+(f+"="+u+"&"):o+(f+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function L0(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function ti(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+U0(t,n)+(s?" "+s:"")})}function M0(t,e){t.info(function(){return"TIMEOUT: "+e})}xo.prototype.info=function(){};function U0(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return ru(n)}catch{return e}}var Ws={},Pc=null;function Yo(){return Pc=Pc||new Gt}Ws.Pa="serverreachability";function Pp(t){cn.call(this,Ws.Pa,t)}nn(Pp,cn);function Ji(t){const e=Yo();en(e,new Pp(e))}Ws.STAT_EVENT="statevent";function Np(t,e){cn.call(this,Ws.STAT_EVENT,t),this.stat=e}nn(Np,cn);function mn(t){const e=Yo();en(e,new Np(e,t))}Ws.Qa="timingevent";function Op(t,e){cn.call(this,Ws.Qa,t),this.size=e}nn(Op,cn);function kr(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Ie.setTimeout(function(){t()},e)}var Xo={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},$p={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function lu(){}lu.prototype.h=null;function Nc(t){return t.h||(t.h=t.i())}function Lp(){}var Er={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function uu(){cn.call(this,"d")}nn(uu,cn);function cu(){cn.call(this,"c")}nn(cu,cn);var gl;function Jo(){}nn(Jo,lu);Jo.prototype.g=function(){return new XMLHttpRequest};Jo.prototype.i=function(){return{}};gl=new Jo;function Tr(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new Xi(this),this.O=F0,t=cl?125:void 0,this.T=new Qo(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Mp}function Mp(){this.i=null,this.g="",this.h=!1}var F0=45e3,_l={},wo={};ce=Tr.prototype;ce.setTimeout=function(t){this.O=t};function vl(t,e,n){t.K=1,t.v=ea(Zn(e)),t.s=n,t.P=!0,Up(t,null)}function Up(t,e){t.F=Date.now(),Ir(t),t.A=Zn(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),zp(n.i,"t",s),t.C=0,n=t.l.H,t.h=new Mp,t.g=fm(t.l,n?e:null,!t.s),0<t.N&&(t.L=new O0(un(t.La,t,t.g),t.N)),Dp(t.S,t.g,"readystatechange",t.ib),e=t.H?vp(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Ji(),$0(t.j,t.u,t.A,t.m,t.U,t.s)}ce.ib=function(t){t=t.target;const e=this.L;e&&Wn(t)==3?e.l():this.La(t)};ce.La=function(t){try{if(t==this.g)e:{const f=Wn(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>f)&&(f!=3||cl||this.g&&(this.h.h||this.g.fa()||Mc(this.g)))){this.I||f!=4||e==7||(e==8||0>=h?Ji(3):Ji(2)),Zo(this);var n=this.g.aa();this.Y=n;t:if(Fp(this)){var s=Mc(this.g);t="";var i=s.length,r=Wn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ps(this),qi(this);var o="";break t}this.h.i=new Ie.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,L0(this.j,this.u,this.A,this.m,this.U,f,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!yo(a)){var u=a;break t}}u=null}if(n=u)ti(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,yl(this,n);else{this.i=!1,this.o=3,mn(12),Ps(this),qi(this);break e}}this.P?(Vp(this,f,o),cl&&this.i&&f==3&&(Dp(this.S,this.T,"tick",this.hb),this.T.start())):(ti(this.j,this.m,o,null),yl(this,o)),f==4&&Ps(this),this.i&&!this.I&&(f==4?lm(this.l,this):(this.i=!1,Ir(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,mn(12)):(this.o=0,mn(13)),Ps(this),qi(this)}}}catch{}finally{}};function Fp(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Vp(t,e,n){let s=!0,i;for(;!t.I&&t.C<n.length;)if(i=V0(t,n),i==wo){e==4&&(t.o=4,mn(14),s=!1),ti(t.j,t.m,null,"[Incomplete Response]");break}else if(i==_l){t.o=4,mn(15),ti(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else ti(t.j,t.m,i,null),yl(t,i);Fp(t)&&i!=wo&&i!=_l&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,mn(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),_u(e),e.K=!0,mn(11))):(ti(t.j,t.m,n,"[Invalid Chunked Response]"),Ps(t),qi(t))}ce.hb=function(){if(this.g){var t=Wn(this.g),e=this.g.fa();this.C<e.length&&(Zo(this),Vp(this,t,e),this.i&&t!=4&&Ir(this))}};function V0(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?wo:(n=Number(e.substring(n,s)),isNaN(n)?_l:(s+=1,s+n>e.length?wo:(e=e.substr(s,n),t.C=s+n,e)))}ce.cancel=function(){this.I=!0,Ps(this)};function Ir(t){t.V=Date.now()+t.O,Bp(t,t.O)}function Bp(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=kr(un(t.gb,t),e)}function Zo(t){t.B&&(Ie.clearTimeout(t.B),t.B=null)}ce.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(M0(this.j,this.A),this.K!=2&&(Ji(),mn(17)),Ps(this),this.o=2,qi(this)):Bp(this,this.V-t)};function qi(t){t.l.G==0||t.I||lm(t.l,t)}function Ps(t){Zo(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,ou(t.T),Rp(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function yl(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||bl(n.h,t))){if(!t.J&&bl(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)To(n),sa(n);else break e;gu(n),mn(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=kr(un(n.cb,n),6e3));if(1>=Qp(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Ns(n,11)}else if((t.J||n.g==t)&&To(n),!yo(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const f=u[3];f!=null&&(n.ma=f,n.j.info("VER="+n.ma));const h=u[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const m=t.g;if(m){const _=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_){var r=s.h;r.g||_.indexOf("spdy")==-1&&_.indexOf("quic")==-1&&_.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(hu(r,r.h),r.h=null))}if(s.D){const v=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(s.za=v,pt(s.F,s.D,v))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=hm(s,s.H?s.ka:null,s.V),o.J){xp(s.h,o);var a=o,l=s.J;l&&a.setTimeout(l),a.B&&(Zo(a),Ir(a)),s.g=o}else om(s);0<n.i.length&&ia(n)}else u[0]!="stop"&&u[0]!="close"||Ns(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Ns(n,7):mu(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}Ji(4)}catch{}}function B0(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Ko(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function j0(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Ko(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function jp(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Ko(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=j0(t),s=B0(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}var qp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function q0(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function $s(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof $s){this.h=e!==void 0?e:t.h,ko(this,t.j),this.s=t.s,this.g=t.g,Eo(this,t.m),this.l=t.l,e=t.i;var n=new Zi;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Oc(this,n),this.o=t.o}else t&&(n=String(t).match(qp))?(this.h=!!e,ko(this,n[1]||"",!0),this.s=Ui(n[2]||""),this.g=Ui(n[3]||"",!0),Eo(this,n[4]),this.l=Ui(n[5]||"",!0),Oc(this,n[6]||"",!0),this.o=Ui(n[7]||"")):(this.h=!!e,this.i=new Zi(null,this.h))}$s.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Fi(e,$c,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Fi(e,$c,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Fi(n,n.charAt(0)=="/"?z0:K0,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Fi(n,W0)),t.join("")};function Zn(t){return new $s(t)}function ko(t,e,n){t.j=n?Ui(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Eo(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Oc(t,e,n){e instanceof Zi?(t.i=e,Q0(t.i,t.h)):(n||(e=Fi(e,G0)),t.i=new Zi(e,t.h))}function pt(t,e,n){t.i.set(e,n)}function ea(t){return pt(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ui(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Fi(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,H0),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function H0(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var $c=/[#\/\?@]/g,K0=/[#\?:]/g,z0=/[#\?]/g,G0=/[#\?@]/g,W0=/#/g;function Zi(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Cs(t){t.g||(t.g=new Map,t.h=0,t.i&&q0(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}ce=Zi.prototype;ce.add=function(t,e){Cs(this),this.i=null,t=Ei(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Hp(t,e){Cs(t),e=Ei(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Kp(t,e){return Cs(t),e=Ei(t,e),t.g.has(e)}ce.forEach=function(t,e){Cs(this),this.g.forEach(function(n,s){n.forEach(function(i){t.call(e,i,s,this)},this)},this)};ce.oa=function(){Cs(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let r=0;r<i.length;r++)n.push(e[s])}return n};ce.W=function(t){Cs(this);let e=[];if(typeof t=="string")Kp(this,t)&&(e=e.concat(this.g.get(Ei(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};ce.set=function(t,e){return Cs(this),this.i=null,t=Ei(this,t),Kp(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};ce.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function zp(t,e,n){Hp(t,e),0<n.length&&(t.i=null,t.g.set(Ei(t,e),Jl(n)),t.h+=n.length)}ce.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};function Ei(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Q0(t,e){e&&!t.j&&(Cs(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(Hp(this,s),zp(this,i,n))},t)),t.j=e}var x0=class{constructor(t,e){this.h=t,this.g=e}};function Gp(t){this.l=t||Y0,Ie.PerformanceNavigationTiming?(t=Ie.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Ie.g&&Ie.g.Ga&&Ie.g.Ga()&&Ie.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Y0=10;function Wp(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Qp(t){return t.h?1:t.g?t.g.size:0}function bl(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function hu(t,e){t.g?t.g.add(e):t.h=e}function xp(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Gp.prototype.cancel=function(){if(this.i=Yp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Yp(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Jl(t.i)}function fu(){}fu.prototype.stringify=function(t){return Ie.JSON.stringify(t,void 0)};fu.prototype.parse=function(t){return Ie.JSON.parse(t,void 0)};function X0(){this.g=new fu}function J0(t,e,n){const s=n||"";try{jp(t,function(i,r){let o=i;br(i)&&(o=ru(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function Z0(t,e){const n=new xo;if(Ie.Image){const s=new Image;s.onload=zr(Wr,n,s,"TestLoadImage: loaded",!0,e),s.onerror=zr(Wr,n,s,"TestLoadImage: error",!1,e),s.onabort=zr(Wr,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=zr(Wr,n,s,"TestLoadImage: timeout",!1,e),Ie.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Wr(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function Cr(t){this.l=t.ac||null,this.j=t.jb||!1}nn(Cr,lu);Cr.prototype.g=function(){return new ta(this.l,this.j)};Cr.prototype.i=function(t){return function(){return t}}({});function ta(t,e){Gt.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=du,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}nn(ta,Gt);var du=0;ce=ta.prototype;ce.open=function(t,e){if(this.readyState!=du)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,er(this)};ce.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||Ie).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};ce.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Sr(this)),this.readyState=du};ce.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,er(this)),this.g&&(this.readyState=3,er(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof Ie.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Xp(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function Xp(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}ce.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Sr(this):er(this),this.readyState==3&&Xp(this)}};ce.Va=function(t){this.g&&(this.response=this.responseText=t,Sr(this))};ce.Ua=function(t){this.g&&(this.response=t,Sr(this))};ce.ga=function(){this.g&&Sr(this)};function Sr(t){t.readyState=4,t.l=null,t.j=null,t.A=null,er(t)}ce.setRequestHeader=function(t,e){this.v.append(t,e)};ce.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};ce.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function er(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(ta.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var e1=Ie.JSON.parse;function Tt(t){Gt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Jp,this.K=this.L=!1}nn(Tt,Gt);var Jp="",t1=/^https?$/i,n1=["POST","PUT"];ce=Tt.prototype;ce.Ka=function(t){this.L=t};ce.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():gl.g(),this.C=this.u?Nc(this.u):Nc(gl),this.g.onreadystatechange=un(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){Lc(this,r);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=Ie.FormData&&t instanceof Ie.FormData,!(0<=pp(n1,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{tm(this),0<this.B&&((this.K=s1(this.g))?(this.g.timeout=this.B,this.g.ontimeout=un(this.qa,this)):this.A=au(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){Lc(this,r)}};function s1(t){return di&&b0()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}ce.qa=function(){typeof Xl<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,en(this,"timeout"),this.abort(8))};function Lc(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Zp(t),na(t)}function Zp(t){t.D||(t.D=!0,en(t,"complete"),en(t,"error"))}ce.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,en(this,"complete"),en(this,"abort"),na(this))};ce.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),na(this,!0)),Tt.X.M.call(this)};ce.Ha=function(){this.s||(this.F||this.v||this.l?em(this):this.fb())};ce.fb=function(){em(this)};function em(t){if(t.h&&typeof Xl<"u"&&(!t.C[1]||Wn(t)!=4||t.aa()!=2)){if(t.v&&Wn(t)==4)au(t.Ha,0,t);else if(en(t,"readystatechange"),Wn(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var i=String(t.H).match(qp)[1]||null;if(!i&&Ie.self&&Ie.self.location){var r=Ie.self.location.protocol;i=r.substr(0,r.length-1)}s=!t1.test(i?i.toLowerCase():"")}n=s}if(n)en(t,"complete"),en(t,"success");else{t.m=6;try{var o=2<Wn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",Zp(t)}}finally{na(t)}}}}function na(t,e){if(t.g){tm(t);const n=t.g,s=t.C[0]?vo:null;t.g=null,t.C=null,e||en(t,"ready");try{n.onreadystatechange=s}catch{}}}function tm(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(Ie.clearTimeout(t.A),t.A=null)}function Wn(t){return t.g?t.g.readyState:0}ce.aa=function(){try{return 2<Wn(this)?this.g.status:-1}catch{return-1}};ce.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};ce.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),e1(e)}};function Mc(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Jp:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}ce.Ea=function(){return this.m};ce.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function nm(t){let e="";return eu(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function pu(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=nm(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):pt(t,e,n))}function Ni(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function sm(t){this.Ca=0,this.i=[],this.j=new xo,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Ni("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Ni("baseRetryDelayMs",5e3,t),this.bb=Ni("retryDelaySeedMs",1e4,t),this.$a=Ni("forwardChannelMaxRetries",2,t),this.ta=Ni("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Gp(t&&t.concurrentRequestLimit),this.Fa=new X0,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}ce=sm.prototype;ce.ma=8;ce.G=1;function mu(t){if(im(t),t.G==3){var e=t.U++,n=Zn(t.F);pt(n,"SID",t.I),pt(n,"RID",e),pt(n,"TYPE","terminate"),Ar(t,n),e=new Tr(t,t.j,e,void 0),e.K=2,e.v=ea(Zn(n)),n=!1,Ie.navigator&&Ie.navigator.sendBeacon&&(n=Ie.navigator.sendBeacon(e.v.toString(),"")),!n&&Ie.Image&&(new Image().src=e.v,n=!0),n||(e.g=fm(e.l,null),e.g.da(e.v)),e.F=Date.now(),Ir(e)}cm(t)}function sa(t){t.g&&(_u(t),t.g.cancel(),t.g=null)}function im(t){sa(t),t.u&&(Ie.clearTimeout(t.u),t.u=null),To(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&Ie.clearTimeout(t.m),t.m=null)}function ia(t){Wp(t.h)||t.m||(t.m=!0,Cp(t.Ja,t),t.C=0)}function i1(t,e){return Qp(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=kr(un(t.Ja,t,e),um(t,t.C)),t.C++,!0)}ce.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new Tr(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=vp(r),yp(r,this.S)):r=this.S),this.o!==null||this.N||(i.H=r,r=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=rm(this,i,e),n=Zn(this.F),pt(n,"RID",t),pt(n,"CVER",22),this.D&&pt(n,"X-HTTP-Session-Id",this.D),Ar(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(nm(r)))+"&"+e:this.o&&pu(n,this.o,r)),hu(this.h,i),this.Ya&&pt(n,"TYPE","init"),this.O?(pt(n,"$req",e),pt(n,"SID","null"),i.Z=!0,vl(i,n,null)):vl(i,n,e),this.G=2}}else this.G==3&&(t?Uc(this,t):this.i.length==0||Wp(this.h)||Uc(this))};function Uc(t,e){var n;e?n=e.m:n=t.U++;const s=Zn(t.F);pt(s,"SID",t.I),pt(s,"RID",n),pt(s,"AID",t.T),Ar(t,s),t.o&&t.s&&pu(s,t.o,t.s),n=new Tr(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=rm(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),hu(t.h,n),vl(n,s,e)}function Ar(t,e){t.ia&&eu(t.ia,function(n,s){pt(e,s,n)}),t.l&&jp({},function(n,s){pt(e,s,n)})}function rm(t,e,n){n=Math.min(t.i.length,n);var s=t.l?un(t.l.Ra,t.l,t):null;e:{var i=t.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const f=i[l].g;if(u-=r,0>u)r=Math.max(0,i[l].h-100),a=!1;else try{J0(f,o,"req"+u+"_")}catch{s&&s(f)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function om(t){t.g||t.u||(t.Z=1,Cp(t.Ia,t),t.A=0)}function gu(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=kr(un(t.Ia,t),um(t,t.A)),t.A++,!0)}ce.Ia=function(){if(this.u=null,am(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=kr(un(this.eb,this),t)}};ce.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,mn(10),sa(this),am(this))};function _u(t){t.B!=null&&(Ie.clearTimeout(t.B),t.B=null)}function am(t){t.g=new Tr(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Zn(t.sa);pt(e,"RID","rpc"),pt(e,"SID",t.I),pt(e,"CI",t.L?"0":"1"),pt(e,"AID",t.T),pt(e,"TYPE","xmlhttp"),Ar(t,e),t.o&&t.s&&pu(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=ea(Zn(e)),n.s=null,n.P=!0,Up(n,t)}ce.cb=function(){this.v!=null&&(this.v=null,sa(this),gu(this),mn(19))};function To(t){t.v!=null&&(Ie.clearTimeout(t.v),t.v=null)}function lm(t,e){var n=null;if(t.g==e){To(t),_u(t),t.g=null;var s=2}else if(bl(t.h,e))n=e.D,xp(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;s=Yo(),en(s,new Op(s,n)),ia(t)}else om(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(s==1&&i1(t,e)||s==2&&gu(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Ns(t,5);break;case 4:Ns(t,10);break;case 3:Ns(t,6);break;default:Ns(t,2)}}}function um(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Ns(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=un(t.kb,t);n||(n=new $s("//www.google.com/images/cleardot.gif"),Ie.location&&Ie.location.protocol=="http"||ko(n,"https"),ea(n)),Z0(n.toString(),s)}else mn(2);t.G=0,t.l&&t.l.va(e),cm(t),im(t)}ce.kb=function(t){t?(this.j.info("Successfully pinged google.com"),mn(2)):(this.j.info("Failed to ping google.com"),mn(1))};function cm(t){if(t.G=0,t.la=[],t.l){const e=Yp(t.h);(e.length!=0||t.i.length!=0)&&(Cc(t.la,e),Cc(t.la,t.i),t.h.i.length=0,Jl(t.i),t.i.length=0),t.l.ua()}}function hm(t,e,n){var s=n instanceof $s?Zn(n):new $s(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),Eo(s,s.m);else{var i=Ie.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new $s(null,void 0);s&&ko(r,s),e&&(r.g=e),i&&Eo(r,i),n&&(r.l=n),s=r}return n=t.D,e=t.za,n&&e&&pt(s,n,e),pt(s,"VER",t.ma),Ar(t,s),s}function fm(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Tt(new Cr({jb:!0})):new Tt(t.ra),e.Ka(t.H),e}function dm(){}ce=dm.prototype;ce.xa=function(){};ce.wa=function(){};ce.va=function(){};ce.ua=function(){};ce.Ra=function(){};function Io(){if(di&&!(10<=Number(w0)))throw Error("Environmental error: no available transport.")}Io.prototype.g=function(t,e){return new An(t,e)};function An(t,e){Gt.call(this),this.g=new sm(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!yo(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!yo(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ti(this)}nn(An,Gt);An.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;mn(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=hm(t,null,t.V),ia(t)};An.prototype.close=function(){mu(this.g)};An.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=ru(t),t=n);e.i.push(new x0(e.ab++,t)),e.G==3&&ia(e)};An.prototype.M=function(){this.g.l=null,delete this.j,mu(this.g),delete this.g,An.X.M.call(this)};function pm(t){uu.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}nn(pm,uu);function mm(){cu.call(this),this.status=1}nn(mm,cu);function Ti(t){this.g=t}nn(Ti,dm);Ti.prototype.xa=function(){en(this.g,"a")};Ti.prototype.wa=function(t){en(this.g,new pm(t))};Ti.prototype.va=function(t){en(this.g,new mm)};Ti.prototype.ua=function(){en(this.g,"b")};Io.prototype.createWebChannel=Io.prototype.g;An.prototype.send=An.prototype.u;An.prototype.open=An.prototype.m;An.prototype.close=An.prototype.close;Xo.NO_ERROR=0;Xo.TIMEOUT=8;Xo.HTTP_ERROR=6;$p.COMPLETE="complete";Lp.EventType=Er;Er.OPEN="a";Er.CLOSE="b";Er.ERROR="c";Er.MESSAGE="d";Gt.prototype.listen=Gt.prototype.N;Tt.prototype.listenOnce=Tt.prototype.O;Tt.prototype.getLastError=Tt.prototype.Oa;Tt.prototype.getLastErrorCode=Tt.prototype.Ea;Tt.prototype.getStatus=Tt.prototype.aa;Tt.prototype.getResponseJson=Tt.prototype.Sa;Tt.prototype.getResponseText=Tt.prototype.fa;Tt.prototype.send=Tt.prototype.da;Tt.prototype.setWithCredentials=Tt.prototype.Ka;var r1=function(){return new Io},o1=function(){return Yo()},za=Xo,a1=$p,l1=Ws,Fc={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},u1=Cr,Qr=Lp,c1=Tt;const Vc="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const qs=new Ql("@firebase/firestore");function Bc(){return qs.logLevel}function me(t,...e){if(qs.logLevel<=qe.DEBUG){const n=e.map(vu);qs.debug(`Firestore (${Ii}): ${t}`,...n)}}function es(t,...e){if(qs.logLevel<=qe.ERROR){const n=e.map(vu);qs.error(`Firestore (${Ii}): ${t}`,...n)}}function wl(t,...e){if(qs.logLevel<=qe.WARN){const n=e.map(vu);qs.warn(`Firestore (${Ii}): ${t}`,...n)}}function vu(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function Se(t="Unexpected state"){const e=`FIRESTORE (${Ii}) INTERNAL ASSERTION FAILED: `+t;throw es(e),new Error(e)}function lt(t,e){t||Se()}function Ae(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class gm{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class h1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(an.UNAUTHENTICATED))}shutdown(){}}class f1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class d1{constructor(e){this.t=e,this.currentUser=an.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=l=>this.i!==s?(s=this.i,n(l)):Promise.resolve();let r=new vs;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new vs,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{me("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(me("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new vs)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(me("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(lt(typeof s.accessToken=="string"),new gm(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return lt(e===null||typeof e=="string"),new an(e)}}class p1{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i,this.type="FirstParty",this.user=an.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(lt(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class m1{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i}getToken(){return Promise.resolve(new p1(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(an.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class g1{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class _1{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=r=>{r.error!=null&&me("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.A;return this.A=r.token,me("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{me("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.T.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.T.getImmediate({optional:!0});r?i(r):me("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(lt(typeof n.token=="string"),this.A=n.token,new g1(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v1(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _m{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=v1(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function Ge(t,e){return t<e?-1:t>e?1:0}function pi(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ye(J.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ye(J.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new ye(J.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ye(J.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ft.fromMillis(Date.now())}static fromDate(e){return Ft.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Ft(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ge(this.nanoseconds,e.nanoseconds):Ge(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Pe(e)}static min(){return new Pe(new Ft(0,0))}static max(){return new Pe(new Ft(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e,n,s){n===void 0?n=0:n>e.length&&Se(),s===void 0?s=e.length-n:s>e.length-n&&Se(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return tr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof tr?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class mt extends tr{construct(e,n,s){return new mt(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new ye(J.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new mt(n)}static emptyPath(){return new mt([])}}const y1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ln extends tr{construct(e,n,s){return new ln(e,n,s)}static isValidIdentifier(e){return y1.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ln.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ln(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new ye(J.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new ye(J.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new ye(J.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new ye(J.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ln(n)}static emptyPath(){return new ln([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e){this.path=e}static fromPath(e){return new ve(mt.fromString(e))}static fromName(e){return new ve(mt.fromString(e).popFirst(5))}static empty(){return new ve(mt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&mt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return mt.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ve(new mt(e.slice()))}}function b1(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=Pe.fromTimestamp(s===1e9?new Ft(n+1,0):new Ft(n,s));return new ks(i,ve.empty(),e)}function w1(t){return new ks(t.readTime,t.key,-1)}class ks{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new ks(Pe.min(),ve.empty(),-1)}static max(){return new ks(Pe.max(),ve.empty(),-1)}}function k1(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ve.comparator(t.documentKey,e.documentKey),n!==0?n:Ge(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class T1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dr(t){if(t.code!==J.FAILED_PRECONDITION||t.message!==E1)throw t;me("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Se(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new Z((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof Z?n:Z.resolve(n)}catch(n){return Z.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):Z.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):Z.reject(n)}static resolve(e){return new Z((n,s)=>{n(e)})}static reject(e){return new Z((n,s)=>{s(e)})}static waitFor(e){return new Z((n,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},l=>s(l))}),o=!0,r===i&&n()})}static or(e){let n=Z.resolve(!1);for(const s of e)n=n.next(i=>i?Z.resolve(i):s());return n}static forEach(e,n){const s=[];return e.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(e,n){return new Z((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let l=0;l<r;l++){const u=l;n(e[u]).next(f=>{o[u]=f,++a,a===r&&s(o)},f=>i(f))}})}static doWhile(e,n){return new Z((s,i)=>{const r=()=>{e()===!0?n().next(()=>{r()},i):s()};r()})}}function Rr(t){return t.name==="IndexedDbTransactionError"}/**
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
 */function jc(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Qs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function vm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yu.at=-1;class Bt{constructor(e,n){this.comparator=e,this.root=n||Xt.EMPTY}insert(e,n){return new Bt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Xt.BLACK,null,null))}remove(e){return new Bt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Xt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new xr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new xr(this.root,e,this.comparator,!1)}getReverseIterator(){return new xr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new xr(this.root,e,this.comparator,!0)}}class xr{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Xt{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s!=null?s:Xt.RED,this.left=i!=null?i:Xt.EMPTY,this.right=r!=null?r:Xt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new Xt(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Xt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Xt.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Xt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Xt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Se();const e=this.left.check();if(e!==this.right.check())throw Se();return e+(this.isRed()?0:1)}}Xt.EMPTY=null,Xt.RED=!0,Xt.BLACK=!1;Xt.EMPTY=new class{constructor(){this.size=0}get key(){throw Se()}get value(){throw Se()}get color(){throw Se()}get left(){throw Se()}get right(){throw Se()}copy(t,e,n,s,i){return this}insert(t,e,n){return new Xt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e){this.comparator=e,this.data=new Bt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new qc(this.data.getIterator())}getIteratorFrom(e){return new qc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof Vt)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Vt(this.comparator);return n.data=e,n}}class qc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e){this.fields=e,e.sort(ln.comparator)}static empty(){return new Nn([])}unionWith(e){let n=new Vt(ln.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Nn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return pi(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new fn(n)}static fromUint8Array(e){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(e);return new fn(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ge(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}fn.EMPTY_BYTE_STRING=new fn("");const I1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Es(t){if(lt(!!t),typeof t=="string"){let e=0;const n=I1.exec(t);if(lt(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Pt(t.seconds),nanos:Pt(t.nanos)}}function Pt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function mi(t){return typeof t=="string"?fn.fromBase64String(t):fn.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ym(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function bm(t){const e=t.mapValue.fields.__previous_value__;return ym(e)?bm(e):e}function nr(t){const e=Es(t.mapValue.fields.__local_write_time__.timestampValue);return new Ft(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C1{constructor(e,n,s,i,r,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class sr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new sr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof sr&&e.projectId===this.projectId&&e.database===this.database}}function ra(t){return t==null}function Co(t){return t===0&&1/t==-1/0}function S1(t){return typeof t=="number"&&Number.isInteger(t)&&!Co(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Hs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ym(t)?4:A1(t)?9007199254740991:10:Se()}function Hn(t,e){if(t===e)return!0;const n=Hs(t);if(n!==Hs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return nr(t).isEqual(nr(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=Es(s.timestampValue),o=Es(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return mi(s.bytesValue).isEqual(mi(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Pt(s.geoPointValue.latitude)===Pt(i.geoPointValue.latitude)&&Pt(s.geoPointValue.longitude)===Pt(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Pt(s.integerValue)===Pt(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=Pt(s.doubleValue),o=Pt(i.doubleValue);return r===o?Co(r)===Co(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return pi(t.arrayValue.values||[],e.arrayValue.values||[],Hn);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(jc(r)!==jc(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!Hn(r[a],o[a])))return!1;return!0}(t,e);default:return Se()}}function ir(t,e){return(t.values||[]).find(n=>Hn(n,e))!==void 0}function gi(t,e){if(t===e)return 0;const n=Hs(t),s=Hs(e);if(n!==s)return Ge(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ge(t.booleanValue,e.booleanValue);case 2:return function(i,r){const o=Pt(i.integerValue||i.doubleValue),a=Pt(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Hc(t.timestampValue,e.timestampValue);case 4:return Hc(nr(t),nr(e));case 5:return Ge(t.stringValue,e.stringValue);case 6:return function(i,r){const o=mi(i),a=mi(r);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=Ge(o[l],a[l]);if(u!==0)return u}return Ge(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,r){const o=Ge(Pt(i.latitude),Pt(r.latitude));return o!==0?o:Ge(Pt(i.longitude),Pt(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=gi(o[l],a[l]);if(u)return u}return Ge(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,r){if(i===Yr.mapValue&&r===Yr.mapValue)return 0;if(i===Yr.mapValue)return 1;if(r===Yr.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=r.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let f=0;f<a.length&&f<u.length;++f){const h=Ge(a[f],u[f]);if(h!==0)return h;const d=gi(o[a[f]],l[u[f]]);if(d!==0)return d}return Ge(a.length,u.length)}(t.mapValue,e.mapValue);default:throw Se()}}function Hc(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ge(t,e);const n=Es(t),s=Es(e),i=Ge(n.seconds,s.seconds);return i!==0?i:Ge(n.nanos,s.nanos)}function ri(t){return kl(t)}function kl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const i=Es(s);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?mi(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,ve.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=kl(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${kl(s.fields[a])}`;return r+"}"}(t.mapValue):Se();var e,n}function El(t){return!!t&&"integerValue"in t}function bu(t){return!!t&&"arrayValue"in t}function Kc(t){return!!t&&"nullValue"in t}function zc(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function to(t){return!!t&&"mapValue"in t}function Hi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Qs(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Hi(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Hi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function A1(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e){this.value=e}static empty(){return new kn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!to(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Hi(n)}setAll(e){let n=ln.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=Hi(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());to(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Hn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];to(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){Qs(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new kn(Hi(this.value))}}function wm(t){const e=[];return Qs(t.fields,(n,s)=>{const i=new ln([n]);if(to(s)){const r=wm(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new Nn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e,n,s,i,r,o){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.data=r,this.documentState=o}static newInvalidDocument(e){return new Jt(e,0,Pe.min(),Pe.min(),kn.empty(),0)}static newFoundDocument(e,n,s){return new Jt(e,1,n,Pe.min(),s,0)}static newNoDocument(e,n){return new Jt(e,2,n,Pe.min(),kn.empty(),0)}static newUnknownDocument(e,n){return new Jt(e,3,n,Pe.min(),kn.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=kn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=kn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Pe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Jt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Jt(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class D1{constructor(e,n=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.ht=null}}function Gc(t,e=null,n=[],s=[],i=null,r=null,o=null){return new D1(t,e,n,s,i,r,o)}function wu(t){const e=Ae(t);if(e.ht===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>{return(i=s).field.canonicalString()+i.op.toString()+ri(i.value);var i}).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),ra(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>ri(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>ri(s)).join(",")),e.ht=n}return e.ht}function R1(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${ri(s.value)}`;var s}).join(", ")}]`),ra(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>ri(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>ri(n)).join(",")),`Target(${e})`}function ku(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!F1(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],s=e.filters[i],n.op!==s.op||!n.field.isEqual(s.field)||!Hn(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Qc(t.startAt,e.startAt)&&Qc(t.endAt,e.endAt)}function Tl(t){return ve.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class Tn extends class{}{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.lt(e,n,s):new P1(e,n,s):n==="array-contains"?new $1(e,s):n==="in"?new L1(e,s):n==="not-in"?new M1(e,s):n==="array-contains-any"?new U1(e,s):new Tn(e,n,s)}static lt(e,n,s){return n==="in"?new N1(e,s):new O1(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.ft(gi(n,this.value)):n!==null&&Hs(this.value)===Hs(n)&&this.ft(gi(n,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Se()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class P1 extends Tn{constructor(e,n,s){super(e,n,s),this.key=ve.fromName(s.referenceValue)}matches(e){const n=ve.comparator(e.key,this.key);return this.ft(n)}}class N1 extends Tn{constructor(e,n){super(e,"in",n),this.keys=km("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class O1 extends Tn{constructor(e,n){super(e,"not-in",n),this.keys=km("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function km(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>ve.fromName(s.referenceValue))}class $1 extends Tn{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return bu(n)&&ir(n.arrayValue,this.value)}}class L1 extends Tn{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ir(this.value.arrayValue,n)}}class M1 extends Tn{constructor(e,n){super(e,"not-in",n)}matches(e){if(ir(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ir(this.value.arrayValue,n)}}class U1 extends Tn{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!bu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>ir(this.value.arrayValue,s))}}class So{constructor(e,n){this.position=e,this.inclusive=n}}class Ki{constructor(e,n="asc"){this.field=e,this.dir=n}}function F1(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Wc(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=ve.comparator(ve.fromName(o.referenceValue),n.key):s=gi(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function Qc(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Hn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(e,n=null,s=[],i=[],r=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this._t=null,this.wt=null,this.startAt,this.endAt}}function V1(t,e,n,s,i,r,o,a){return new oa(t,e,n,s,i,r,o,a)}function Em(t){return new oa(t)}function xc(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function B1(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function j1(t){for(const e of t.filters)if(e.dt())return e.field;return null}function q1(t){return t.collectionGroup!==null}function rr(t){const e=Ae(t);if(e._t===null){e._t=[];const n=j1(e),s=B1(e);if(n!==null&&s===null)n.isKeyField()||e._t.push(new Ki(n)),e._t.push(new Ki(ln.keyField(),"asc"));else{let i=!1;for(const r of e.explicitOrderBy)e._t.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new Ki(ln.keyField(),r))}}}return e._t}function ts(t){const e=Ae(t);if(!e.wt)if(e.limitType==="F")e.wt=Gc(e.path,e.collectionGroup,rr(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of rr(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new Ki(r.field,o))}const s=e.endAt?new So(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new So(e.startAt.position,e.startAt.inclusive):null;e.wt=Gc(e.path,e.collectionGroup,n,e.filters,e.limit,s,i)}return e.wt}function Il(t,e,n){return new oa(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function aa(t,e){return ku(ts(t),ts(e))&&t.limitType===e.limitType}function Tm(t){return`${wu(ts(t))}|lt:${t.limitType}`}function Cl(t){return`Query(target=${R1(ts(t))}; limitType=${t.limitType})`}function Eu(t,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):ve.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,s){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=Wc(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,rr(n),s)||n.endAt&&!function(i,r,o){const a=Wc(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,rr(n),s))}(t,e)}function H1(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Im(t){return(e,n)=>{let s=!1;for(const i of rr(t)){const r=K1(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function K1(t,e,n){const s=t.field.isKeyField()?ve.comparator(e.key,n.key):function(i,r,o){const a=r.data.field(i),l=o.data.field(i);return a!==null&&l!==null?gi(a,l):Se()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return Se()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cm(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Co(e)?"-0":e}}function Sm(t){return{integerValue:""+t}}function z1(t,e){return S1(e)?Sm(e):Cm(t,e)}/**
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
 */class la{constructor(){this._=void 0}}function G1(t,e,n){return t instanceof Ao?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,e):t instanceof or?Dm(t,e):t instanceof ar?Rm(t,e):function(s,i){const r=Am(s,i),o=Yc(r)+Yc(s.yt);return El(r)&&El(s.yt)?Sm(o):Cm(s.It,o)}(t,e)}function W1(t,e,n){return t instanceof or?Dm(t,e):t instanceof ar?Rm(t,e):n}function Am(t,e){return t instanceof Do?El(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Ao extends la{}class or extends la{constructor(e){super(),this.elements=e}}function Dm(t,e){const n=Pm(e);for(const s of t.elements)n.some(i=>Hn(i,s))||n.push(s);return{arrayValue:{values:n}}}class ar extends la{constructor(e){super(),this.elements=e}}function Rm(t,e){let n=Pm(e);for(const s of t.elements)n=n.filter(i=>!Hn(i,s));return{arrayValue:{values:n}}}class Do extends la{constructor(e,n){super(),this.It=e,this.yt=n}}function Yc(t){return Pt(t.integerValue||t.doubleValue)}function Pm(t){return bu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Q1(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof or&&s instanceof or||n instanceof ar&&s instanceof ar?pi(n.elements,s.elements,Hn):n instanceof Do&&s instanceof Do?Hn(n.yt,s.yt):n instanceof Ao&&s instanceof Ao}(t.transform,e.transform)}class x1{constructor(e,n){this.version=e,this.transformResults=n}}class Ln{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ln}static exists(e){return new Ln(void 0,e)}static updateTime(e){return new Ln(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function no(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ua{}function Nm(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Tu(t.key,Ln.none()):new Pr(t.key,t.data,Ln.none());{const n=t.data,s=kn.empty();let i=new Vt(ln.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new Ss(t.key,s,new Nn(i.toArray()),Ln.none())}}function Y1(t,e,n){t instanceof Pr?function(s,i,r){const o=s.value.clone(),a=Jc(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Ss?function(s,i,r){if(!no(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=Jc(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(Om(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function zi(t,e,n,s){return t instanceof Pr?function(i,r,o,a){if(!no(i.precondition,r))return o;const l=i.value.clone(),u=Zc(i.fieldTransforms,a,r);return l.setAll(u),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),null}(t,e,n,s):t instanceof Ss?function(i,r,o,a){if(!no(i.precondition,r))return o;const l=Zc(i.fieldTransforms,a,r),u=r.data;return u.setAll(Om(i)),u.setAll(l),r.convertToFoundDocument(r.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(f=>f.field))}(t,e,n,s):function(i,r,o){return no(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(t,e,n)}function X1(t,e){let n=null;for(const s of t.fieldTransforms){const i=e.data.field(s.field),r=Am(s.transform,i||null);r!=null&&(n===null&&(n=kn.empty()),n.set(s.field,r))}return n||null}function Xc(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&pi(n,s,(i,r)=>Q1(i,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Pr extends ua{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ss extends ua{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Om(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Jc(t,e,n){const s=new Map;lt(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,W1(o,a,n[i]))}return s}function Zc(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,G1(r,o,e))}return s}class Tu extends ua{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class J1 extends ua{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z1{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Rt,Ue;function eb(t){switch(t){default:return Se();case J.CANCELLED:case J.UNKNOWN:case J.DEADLINE_EXCEEDED:case J.RESOURCE_EXHAUSTED:case J.INTERNAL:case J.UNAVAILABLE:case J.UNAUTHENTICATED:return!1;case J.INVALID_ARGUMENT:case J.NOT_FOUND:case J.ALREADY_EXISTS:case J.PERMISSION_DENIED:case J.FAILED_PRECONDITION:case J.ABORTED:case J.OUT_OF_RANGE:case J.UNIMPLEMENTED:case J.DATA_LOSS:return!0}}function $m(t){if(t===void 0)return es("GRPC error has no .code"),J.UNKNOWN;switch(t){case Rt.OK:return J.OK;case Rt.CANCELLED:return J.CANCELLED;case Rt.UNKNOWN:return J.UNKNOWN;case Rt.DEADLINE_EXCEEDED:return J.DEADLINE_EXCEEDED;case Rt.RESOURCE_EXHAUSTED:return J.RESOURCE_EXHAUSTED;case Rt.INTERNAL:return J.INTERNAL;case Rt.UNAVAILABLE:return J.UNAVAILABLE;case Rt.UNAUTHENTICATED:return J.UNAUTHENTICATED;case Rt.INVALID_ARGUMENT:return J.INVALID_ARGUMENT;case Rt.NOT_FOUND:return J.NOT_FOUND;case Rt.ALREADY_EXISTS:return J.ALREADY_EXISTS;case Rt.PERMISSION_DENIED:return J.PERMISSION_DENIED;case Rt.FAILED_PRECONDITION:return J.FAILED_PRECONDITION;case Rt.ABORTED:return J.ABORTED;case Rt.OUT_OF_RANGE:return J.OUT_OF_RANGE;case Rt.UNIMPLEMENTED:return J.UNIMPLEMENTED;case Rt.DATA_LOSS:return J.DATA_LOSS;default:return Se()}}(Ue=Rt||(Rt={}))[Ue.OK=0]="OK",Ue[Ue.CANCELLED=1]="CANCELLED",Ue[Ue.UNKNOWN=2]="UNKNOWN",Ue[Ue.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ue[Ue.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ue[Ue.NOT_FOUND=5]="NOT_FOUND",Ue[Ue.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ue[Ue.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ue[Ue.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ue[Ue.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ue[Ue.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ue[Ue.ABORTED=10]="ABORTED",Ue[Ue.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ue[Ue.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ue[Ue.INTERNAL=13]="INTERNAL",Ue[Ue.UNAVAILABLE=14]="UNAVAILABLE",Ue[Ue.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Qs(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return vm(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tb=new Bt(ve.comparator);function ns(){return tb}const Lm=new Bt(ve.comparator);function Vi(...t){let e=Lm;for(const n of t)e=e.insert(n.key,n);return e}function Mm(t){let e=Lm;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Os(){return Gi()}function Um(){return Gi()}function Gi(){return new Ci(t=>t.toString(),(t,e)=>t.isEqual(e))}const nb=new Bt(ve.comparator),sb=new Vt(ve.comparator);function $e(...t){let e=sb;for(const n of t)e=e.add(n);return e}const ib=new Vt(Ge);function Fm(){return ib}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const i=new Map;return i.set(e,Nr.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new ca(Pe.min(),i,Fm(),ns(),$e())}}class Nr{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Nr(s,n,$e(),$e(),$e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(e,n,s,i){this.Tt=e,this.removedTargetIds=n,this.key=s,this.Et=i}}class Vm{constructor(e,n){this.targetId=e,this.At=n}}class Bm{constructor(e,n,s=fn.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class eh{constructor(){this.Rt=0,this.bt=nh(),this.Pt=fn.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=$e(),n=$e(),s=$e();return this.bt.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:Se()}}),new Nr(this.Pt,this.vt,e,n,s)}Nt(){this.Vt=!1,this.bt=nh()}kt(e,n){this.Vt=!0,this.bt=this.bt.insert(e,n)}Ot(e){this.Vt=!0,this.bt=this.bt.remove(e)}Mt(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class rb{constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=ns(),this.qt=th(),this.Kt=new Vt(Ge)}Gt(e){for(const n of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(n,e.Et):this.jt(n,e.key,e.Et);for(const n of e.removedTargetIds)this.jt(n,e.key,e.Et)}Wt(e){this.forEachTarget(e,n=>{const s=this.zt(n);switch(e.state){case 0:this.Ht(n)&&s.Ct(e.resumeToken);break;case 1:s.Ft(),s.St||s.Nt(),s.Ct(e.resumeToken);break;case 2:s.Ft(),s.St||this.removeTarget(n);break;case 3:this.Ht(n)&&(s.$t(),s.Ct(e.resumeToken));break;case 4:this.Ht(n)&&(this.Jt(n),s.Ct(e.resumeToken));break;default:Se()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Lt.forEach((s,i)=>{this.Ht(i)&&n(i)})}Yt(e){const n=e.targetId,s=e.At.count,i=this.Xt(n);if(i){const r=i.target;if(Tl(r))if(s===0){const o=new ve(r.path);this.jt(n,o,Jt.newNoDocument(o,Pe.min()))}else lt(s===1);else this.Zt(n)!==s&&(this.Jt(n),this.Kt=this.Kt.add(n))}}te(e){const n=new Map;this.Lt.forEach((r,o)=>{const a=this.Xt(o);if(a){if(r.current&&Tl(a.target)){const l=new ve(a.target.path);this.Ut.get(l)!==null||this.ee(o,l)||this.jt(o,l,Jt.newNoDocument(l,e))}r.Dt&&(n.set(o,r.xt()),r.Nt())}});let s=$e();this.qt.forEach((r,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Xt(l);return!u||u.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))}),this.Ut.forEach((r,o)=>o.setReadTime(e));const i=new ca(e,n,this.Kt,this.Ut,s);return this.Ut=ns(),this.qt=th(),this.Kt=new Vt(Ge),i}Qt(e,n){if(!this.Ht(e))return;const s=this.ee(e,n.key)?2:0;this.zt(e).kt(n.key,s),this.Ut=this.Ut.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ne(n.key).add(e))}jt(e,n,s){if(!this.Ht(e))return;const i=this.zt(e);this.ee(e,n)?i.kt(n,1):i.Ot(n),this.qt=this.qt.insert(n,this.ne(n).delete(e)),s&&(this.Ut=this.Ut.insert(n,s))}removeTarget(e){this.Lt.delete(e)}Zt(e){const n=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Mt(e){this.zt(e).Mt()}zt(e){let n=this.Lt.get(e);return n||(n=new eh,this.Lt.set(e,n)),n}ne(e){let n=this.qt.get(e);return n||(n=new Vt(Ge),this.qt=this.qt.insert(e,n)),n}Ht(e){const n=this.Xt(e)!==null;return n||me("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.Lt.get(e);return n&&n.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new eh),this.Bt.getRemoteKeysForTarget(e).forEach(n=>{this.jt(e,n,null)})}ee(e,n){return this.Bt.getRemoteKeysForTarget(e).has(n)}}function th(){return new Bt(ve.comparator)}function nh(){return new Bt(ve.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ob=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),ab=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class lb{constructor(e,n){this.databaseId=e,this.gt=n}}function Ro(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function jm(t,e){return t.gt?e.toBase64():e.toUint8Array()}function ub(t,e){return Ro(t,e.toTimestamp())}function Yn(t){return lt(!!t),Pe.fromTimestamp(function(e){const n=Es(e);return new Ft(n.seconds,n.nanos)}(t))}function Iu(t,e){return function(n){return new mt(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function qm(t){const e=mt.fromString(t);return lt(zm(e)),e}function Sl(t,e){return Iu(t.databaseId,e.path)}function Ga(t,e){const n=qm(e);if(n.get(1)!==t.databaseId.projectId)throw new ye(J.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ye(J.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ve(Hm(n))}function Al(t,e){return Iu(t.databaseId,e)}function cb(t){const e=qm(t);return e.length===4?mt.emptyPath():Hm(e)}function Dl(t){return new mt(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Hm(t){return lt(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function sh(t,e,n){return{name:Sl(t,e),fields:n.value.mapValue.fields}}function hb(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:Se()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(l,u){return l.gt?(lt(u===void 0||typeof u=="string"),fn.fromBase64String(u||"")):(lt(u===void 0||u instanceof Uint8Array),fn.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?J.UNKNOWN:$m(l.code);return new ye(u,l.message||"")}(o);n=new Bm(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=Ga(t,s.document.name),r=Yn(s.document.updateTime),o=new kn({mapValue:{fields:s.document.fields}}),a=Jt.newFoundDocument(i,r,o),l=s.targetIds||[],u=s.removedTargetIds||[];n=new so(l,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=Ga(t,s.document),r=s.readTime?Yn(s.readTime):Pe.min(),o=Jt.newNoDocument(i,r),a=s.removedTargetIds||[];n=new so([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=Ga(t,s.document),r=s.removedTargetIds||[];n=new so([],r,i,null)}else{if(!("filter"in e))return Se();{e.filter;const s=e.filter;s.targetId;const i=s.count||0,r=new Z1(i),o=s.targetId;n=new Vm(o,r)}}return n}function fb(t,e){let n;if(e instanceof Pr)n={update:sh(t,e.key,e.value)};else if(e instanceof Tu)n={delete:Sl(t,e.key)};else if(e instanceof Ss)n={update:sh(t,e.key,e.data),updateMask:kb(e.fieldMask)};else{if(!(e instanceof J1))return Se();n={verify:Sl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof Ao)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof or)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof ar)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Do)return{fieldPath:r.field.canonicalString(),increment:o.yt};throw Se()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:ub(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Se()}(t,e.precondition)),n}function db(t,e){return t&&t.length>0?(lt(e!==void 0),t.map(n=>function(s,i){let r=s.updateTime?Yn(s.updateTime):Yn(i);return r.isEqual(Pe.min())&&(r=Yn(i)),new x1(r,s.transformResults||[])}(n,e))):[]}function pb(t,e){return{documents:[Al(t,e.path)]}}function mb(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Al(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Al(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(l){if(l.length===0)return;const u=l.map(f=>function(h){if(h.op==="=="){if(zc(h.value))return{unaryFilter:{field:Zs(h.field),op:"IS_NAN"}};if(Kc(h.value))return{unaryFilter:{field:Zs(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(zc(h.value))return{unaryFilter:{field:Zs(h.field),op:"IS_NOT_NAN"}};if(Kc(h.value))return{unaryFilter:{field:Zs(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Zs(h.field),op:yb(h.op),value:h.value}}}(f));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(e.filters);i&&(n.structuredQuery.where=i);const r=function(l){if(l.length!==0)return l.map(u=>function(f){return{field:Zs(f.field),direction:vb(f.dir)}}(u))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(l,u){return l.gt||ra(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function gb(t){let e=cb(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){lt(s===1);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let r=[];n.where&&(r=Km(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(f=>function(h){return new Ki(ni(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(f)));let a=null;n.limit&&(a=function(f){let h;return h=typeof f=="object"?f.value:f,ra(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(f){const h=!!f.before,d=f.values||[];return new So(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(f){const h=!f.before,d=f.values||[];return new So(d,h)}(n.endAt)),V1(e,i,o,r,a,"F",l,u)}function _b(t,e){const n=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Se()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Km(t){return t?t.unaryFilter!==void 0?[wb(t)]:t.fieldFilter!==void 0?[bb(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>Km(e)).reduce((e,n)=>e.concat(n)):Se():[]}function vb(t){return ob[t]}function yb(t){return ab[t]}function Zs(t){return{fieldPath:t.canonicalString()}}function ni(t){return ln.fromServerFormat(t.fieldPath)}function bb(t){return Tn.create(ni(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Se()}}(t.fieldFilter.op),t.fieldFilter.value)}function wb(t){switch(t.unaryFilter.op){case"IS_NAN":const e=ni(t.unaryFilter.field);return Tn.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=ni(t.unaryFilter.field);return Tn.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ni(t.unaryFilter.field);return Tn.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=ni(t.unaryFilter.field);return Tn.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Se()}}function kb(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function zm(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eb{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&Y1(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=zi(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=zi(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Um();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const l=Nm(o,a);l!==null&&s.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(Pe.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),$e())}isEqual(e){return this.batchId===e.batchId&&pi(this.mutations,e.mutations,(n,s)=>Xc(n,s))&&pi(this.baseMutations,e.baseMutations,(n,s)=>Xc(n,s))}}class Cu{constructor(e,n,s,i){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(e,n,s){lt(e.mutations.length===s.length);let i=nb;const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new Cu(e,n,s,i)}}/**
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
 */class Tb{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Ib{constructor(e){this.re=e}}function Cb(t){const e=gb({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Il(e,e.limit,"L"):e}/**
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
 */class Sb{constructor(){this.Ye=new Ab}addToCollectionParentIndex(e,n){return this.Ye.add(n),Z.resolve()}getCollectionParents(e,n){return Z.resolve(this.Ye.getEntries(n))}addFieldIndex(e,n){return Z.resolve()}deleteFieldIndex(e,n){return Z.resolve()}getDocumentsMatchingTarget(e,n){return Z.resolve(null)}getIndexType(e,n){return Z.resolve(0)}getFieldIndexes(e,n){return Z.resolve([])}getNextCollectionGroupToUpdate(e){return Z.resolve(null)}getMinOffset(e,n){return Z.resolve(ks.min())}getMinOffsetFromCollectionGroup(e,n){return Z.resolve(ks.min())}updateCollectionGroup(e,n,s){return Z.resolve()}updateIndexEntries(e,n){return Z.resolve()}}class Ab{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new Vt(mt.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new Vt(mt.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new _i(0)}static vn(){return new _i(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Db{constructor(){this.changes=new Ci(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Jt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?Z.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Rb{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pb{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(s=i,this.getBaseDocument(e,n,s))).next(i=>(s!==null&&zi(s.mutation,i,Nn.empty(),Ft.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,$e()).next(()=>s))}getLocalViewOfDocuments(e,n,s=$e()){const i=Os();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,s).next(r=>{let o=Vi();return r.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Os();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,$e()))}populateOverlays(e,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,i){let r=ns();const o=Gi(),a=Gi();return n.forEach((l,u)=>{const f=s.get(u.key);i.has(u.key)&&(f===void 0||f.mutation instanceof Ss)?r=r.insert(u.key,u):f!==void 0&&(o.set(u.key,f.mutation.getFieldMask()),zi(f.mutation,u,f.mutation.getFieldMask(),Ft.now()))}),this.recalculateAndSaveOverlays(e,r).next(l=>(l.forEach((u,f)=>o.set(u,f)),n.forEach((u,f)=>{var h;return a.set(u,new Rb(f,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=Gi();let i=new Bt((o,a)=>o-a),r=$e();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let f=s.get(l)||Nn.empty();f=a.applyToLocalView(u,f),s.set(l,f);const h=(i.get(a.batchId)||$e()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,f=l.value,h=Um();f.forEach(d=>{if(!r.has(d)){const m=Nm(n.get(d),s.get(d));m!==null&&h.set(d,m),r=r.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return Z.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(i){return ve.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):q1(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):Z.resolve(Os());let a=-1,l=r;return o.next(u=>Z.forEach(u,(f,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(f)?Z.resolve():this.getBaseDocument(e,f,h).next(d=>{l=l.insert(f,d)}))).next(()=>this.populateOverlays(e,u,r)).next(()=>this.computeViews(e,l,u,$e())).next(f=>({batchId:a,changes:Mm(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ve(n)).next(s=>{let i=Vi();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const i=n.collectionGroup;let r=Vi();return this.indexManager.getCollectionParents(e,i).next(o=>Z.forEach(o,a=>{const l=function(u,f){return new oa(f,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,s).next(u=>{u.forEach((f,h)=>{r=r.insert(f,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,s){let i;return this.remoteDocumentCache.getAllFromCollection(e,n.path,s).next(r=>(i=r,this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId))).next(r=>{r.forEach((a,l)=>{const u=l.getKey();i.get(u)===null&&(i=i.insert(u,Jt.newInvalidDocument(u)))});let o=Vi();return i.forEach((a,l)=>{const u=r.get(a);u!==void 0&&zi(u.mutation,l,Nn.empty(),Ft.now()),Eu(n,l)&&(o=o.insert(a,l))}),o})}getBaseDocument(e,n,s){return s===null||s.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):Z.resolve(Jt.newInvalidDocument(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nb{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return Z.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:Yn(s.createTime)}),Z.resolve()}getNamedQuery(e,n){return Z.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(s){return{name:s.name,query:Cb(s.bundledQuery),readTime:Yn(s.readTime)}}(n)),Z.resolve()}}/**
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
 */class Ob{constructor(){this.overlays=new Bt(ve.comparator),this.es=new Map}getOverlay(e,n){return Z.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Os();return Z.forEach(n,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((i,r)=>{this.ue(e,n,r)}),Z.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.es.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.es.delete(s)),Z.resolve()}getOverlaysForCollection(e,n,s){const i=Os(),r=n.length+1,o=new ve(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===r&&l.largestBatchId>s&&i.set(l.getKey(),l)}return Z.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new Bt((u,f)=>u-f);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let f=r.get(u.largestBatchId);f===null&&(f=Os(),r=r.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const a=Os(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,f)=>a.set(u,f)),!(a.size()>=i)););return Z.resolve(a)}ue(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.es.get(i.largestBatchId).delete(s.key);this.es.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new Tb(n,s));let r=this.es.get(n);r===void 0&&(r=$e(),this.es.set(n,r)),this.es.set(n,r.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(){this.ns=new Vt(Kt.ss),this.rs=new Vt(Kt.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const s=new Kt(e,n);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.cs(new Kt(e,n))}hs(e,n){e.forEach(s=>this.removeReference(s,n))}ls(e){const n=new ve(new mt([])),s=new Kt(n,e),i=new Kt(n,e+1),r=[];return this.rs.forEachInRange([s,i],o=>{this.cs(o),r.push(o.key)}),r}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new ve(new mt([])),s=new Kt(n,e),i=new Kt(n,e+1);let r=$e();return this.rs.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new Kt(e,0),s=this.ns.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Kt{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return ve.comparator(e.key,n.key)||Ge(e._s,n._s)}static os(e,n){return Ge(e._s,n._s)||ve.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $b{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new Vt(Kt.ss)}checkEmpty(e){return Z.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Eb(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.gs=this.gs.add(new Kt(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return Z.resolve(o)}lookupMutationBatch(e,n){return Z.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.ps(s),r=i<0?0:i;return Z.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return Z.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return Z.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Kt(n,0),i=new Kt(n,Number.POSITIVE_INFINITY),r=[];return this.gs.forEachInRange([s,i],o=>{const a=this.ys(o._s);r.push(a)}),Z.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Vt(Ge);return n.forEach(i=>{const r=new Kt(i,0),o=new Kt(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([r,o],a=>{s=s.add(a._s)})}),Z.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;ve.isDocumentKey(r)||(r=r.child(""));const o=new Kt(new ve(r),0);let a=new Vt(Ge);return this.gs.forEachWhile(l=>{const u=l.key.path;return!!s.isPrefixOf(u)&&(u.length===i&&(a=a.add(l._s)),!0)},o),Z.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(s=>{const i=this.ys(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){lt(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return Z.forEach(n.mutations,i=>{const r=new Kt(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.gs=s})}An(e){}containsKey(e,n){const s=new Kt(n,0),i=this.gs.firstAfterOrEqual(s);return Z.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,Z.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lb{constructor(e){this.Es=e,this.docs=new Bt(ve.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Es(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return Z.resolve(s?s.document.mutableCopy():Jt.newInvalidDocument(n))}getEntries(e,n){let s=ns();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():Jt.newInvalidDocument(i))}),Z.resolve(s)}getAllFromCollection(e,n,s){let i=ns();const r=new ve(n.child("")),o=this.docs.getIteratorFrom(r);for(;o.hasNext();){const{key:a,value:{document:l}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||k1(w1(l),s)<=0||(i=i.insert(l.key,l.mutableCopy()))}return Z.resolve(i)}getAllFromCollectionGroup(e,n,s,i){Se()}As(e,n){return Z.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new Mb(this)}getSize(e){return Z.resolve(this.size)}}class Mb extends Db{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.Yn.addEntry(e,i)):this.Yn.removeEntry(s)}),Z.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ub{constructor(e){this.persistence=e,this.Rs=new Ci(n=>wu(n),ku),this.lastRemoteSnapshotVersion=Pe.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Su,this.targetCount=0,this.vs=_i.Pn()}forEachTarget(e,n){return this.Rs.forEach((s,i)=>n(i)),Z.resolve()}getLastRemoteSnapshotVersion(e){return Z.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Z.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),Z.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),Z.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new _i(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,Z.resolve()}updateTargetData(e,n){return this.Dn(n),Z.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,Z.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Rs.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),Z.waitFor(r).next(()=>i)}getTargetCount(e){return Z.resolve(this.targetCount)}getTargetData(e,n){const s=this.Rs.get(n)||null;return Z.resolve(s)}addMatchingKeys(e,n,s){return this.Ps.us(n,s),Z.resolve()}removeMatchingKeys(e,n,s){this.Ps.hs(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),Z.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),Z.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Ps.ds(n);return Z.resolve(s)}containsKey(e,n){return Z.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fb{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new yu(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new Ub(this),this.indexManager=new Sb,this.remoteDocumentCache=function(s){return new Lb(s)}(s=>this.referenceDelegate.xs(s)),this.It=new Ib(n),this.Ns=new Nb(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Ob,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Vs[e.toKey()];return s||(s=new $b(n,this.referenceDelegate),this.Vs[e.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,s){me("MemoryPersistence","Starting transaction:",e);const i=new Vb(this.Ss.next());return this.referenceDelegate.ks(),s(i).next(r=>this.referenceDelegate.Os(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Ms(e,n){return Z.or(Object.values(this.Vs).map(s=>()=>s.containsKey(e,n)))}}class Vb extends T1{constructor(e){super(),this.currentSequenceNumber=e}}class Au{constructor(e){this.persistence=e,this.Fs=new Su,this.$s=null}static Bs(e){return new Au(e)}get Ls(){if(this.$s)return this.$s;throw Se()}addReference(e,n,s){return this.Fs.addReference(s,n),this.Ls.delete(s.toString()),Z.resolve()}removeReference(e,n,s){return this.Fs.removeReference(s,n),this.Ls.add(s.toString()),Z.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),Z.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(i=>this.Ls.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.Ls.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Z.forEach(this.Ls,s=>{const i=ve.fromPath(s);return this.Us(e,i).next(r=>{r||n.removeEntry(i,Pe.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.Us(e,n).next(s=>{s?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}Us(e,n){return Z.or([()=>Z.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.Si=s,this.Di=i}static Ci(e,n){let s=$e(),i=$e();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new Du(e,n.fromCache,s,i)}}/**
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
 */class Bb{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,s,i){return this.ki(e,n).next(r=>r||this.Oi(e,n,i,s)).next(r=>r||this.Mi(e,n))}ki(e,n){if(xc(n))return Z.resolve(null);let s=ts(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Il(n,null,"F"),s=ts(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=$e(...r);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(l=>{const u=this.Fi(n,a);return this.$i(n,u,o,l.readTime)?this.ki(e,Il(n,null,"F")):this.Bi(e,u,n,l)}))})))}Oi(e,n,s,i){return xc(n)||i.isEqual(Pe.min())?this.Mi(e,n):this.Ni.getDocuments(e,s).next(r=>{const o=this.Fi(n,r);return this.$i(n,o,s,i)?this.Mi(e,n):(Bc()<=qe.DEBUG&&me("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Cl(n)),this.Bi(e,o,n,b1(i,-1)))})}Fi(e,n){let s=new Vt(Im(e));return n.forEach((i,r)=>{Eu(e,r)&&(s=s.add(r))}),s}$i(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Mi(e,n){return Bc()<=qe.DEBUG&&me("QueryEngine","Using full collection scan to execute query:",Cl(n)),this.Ni.getDocumentsMatchingQuery(e,n,ks.min())}Bi(e,n,s,i){return this.Ni.getDocumentsMatchingQuery(e,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jb{constructor(e,n,s,i){this.persistence=e,this.Li=n,this.It=i,this.Ui=new Bt(Ge),this.qi=new Ci(r=>wu(r),ku),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(s)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Pb(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ui))}}function qb(t,e,n,s){return new jb(t,e,n,s)}async function Gm(t,e){const n=Ae(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.Qi(e),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let l=$e();for(const u of i){o.push(u.batchId);for(const f of u.mutations)l=l.add(f.key)}for(const u of r){a.push(u.batchId);for(const f of u.mutations)l=l.add(f.key)}return n.localDocuments.getDocuments(s,l).next(u=>({ji:u,removedBatchIds:o,addedBatchIds:a}))})})}function Hb(t,e){const n=Ae(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const f=l.batch,h=f.keys();let d=Z.resolve();return h.forEach(m=>{d=d.next(()=>u.getEntry(a,m)).next(_=>{const v=l.docVersions.get(m);lt(v!==null),_.version.compareTo(v)<0&&(f.applyToRemoteDocument(_,l),_.isValidDocument()&&(_.setReadTime(l.commitVersion),u.addEntry(_)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,f))}(n,s,e,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=$e();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,i))})}function Wm(t){const e=Ae(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function Kb(t,e){const n=Ae(t),s=e.snapshotVersion;let i=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.Ui;const a=[];e.targetChanges.forEach((f,h)=>{const d=i.get(h);if(!d)return;a.push(n.Cs.removeMatchingKeys(r,f.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(r,f.addedDocuments,h)));let m=d.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.has(h)?m=m.withResumeToken(fn.EMPTY_BYTE_STRING,Pe.min()).withLastLimboFreeSnapshotVersion(Pe.min()):f.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(f.resumeToken,s)),i=i.insert(h,m),function(_,v,y){return _.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-_.snapshotVersion.toMicroseconds()>=3e8?!0:y.addedDocuments.size+y.modifiedDocuments.size+y.removedDocuments.size>0}(d,m,f)&&a.push(n.Cs.updateTargetData(r,m))});let l=ns(),u=$e();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,f))}),a.push(zb(r,o,e.documentUpdates).next(f=>{l=f.Wi,u=f.zi})),!s.isEqual(Pe.min())){const f=n.Cs.getLastRemoteSnapshotVersion(r).next(h=>n.Cs.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(f)}return Z.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,l,u)).next(()=>l)}).then(r=>(n.Ui=i,r))}function zb(t,e,n){let s=$e(),i=$e();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let o=ns();return n.forEach((a,l)=>{const u=r.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(Pe.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):me("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{Wi:o,zi:i}})}function Gb(t,e){const n=Ae(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function Wb(t,e){const n=Ae(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Cs.getTargetData(s,e).next(r=>r?(i=r,Z.resolve(i)):n.Cs.allocateTargetId(s).next(o=>(i=new Ls(e,o,0,s.currentSequenceNumber),n.Cs.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.Ui.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(s.targetId,s),n.qi.set(e,s.targetId)),s})}async function Rl(t,e,n){const s=Ae(t),i=s.Ui.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Rr(o))throw o;me("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ui=s.Ui.remove(e),s.qi.delete(i.target)}function ih(t,e,n){const s=Ae(t);let i=Pe.min(),r=$e();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const f=Ae(a),h=f.qi.get(u);return h!==void 0?Z.resolve(f.Ui.get(h)):f.Cs.getTargetData(l,u)}(s,o,ts(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{r=l})}).next(()=>s.Li.getDocumentsMatchingQuery(o,e,n?i:Pe.min(),n?r:$e())).next(a=>(Qb(s,H1(e),a),{documents:a,Hi:r})))}function Qb(t,e,n){let s=t.Ki.get(e)||Pe.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),t.Ki.set(e,s)}class rh{constructor(){this.activeTargetIds=Fm()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class xb{constructor(){this.Lr=new rh,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,n,s){this.Ur[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new rh,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Yb{qr(e){}shutdown(){}}/**
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
 */class oh{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){me("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){me("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jb{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zb extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,s,i,r){const o=this.ho(e,n);me("RestConnection","Sending: ",o,s);const a={};return this.lo(a,i,r),this.fo(e,o,a,s).then(l=>(me("RestConnection","Received: ",l),l),l=>{throw wl("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",s),l})}_o(e,n,s,i,r,o){return this.ao(e,n,s,i,r)}lo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Ii,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>e[r]=i),s&&s.headers.forEach((i,r)=>e[r]=i)}ho(e,n){const s=Xb[e];return`${this.oo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,s,i){return new Promise((r,o)=>{const a=new c1;a.setWithCredentials(!0),a.listenOnce(a1.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case za.NO_ERROR:const u=a.getResponseJson();me("Connection","XHR received:",JSON.stringify(u)),r(u);break;case za.TIMEOUT:me("Connection",'RPC "'+e+'" timed out'),o(new ye(J.DEADLINE_EXCEEDED,"Request time out"));break;case za.HTTP_ERROR:const f=a.getStatus();if(me("Connection",'RPC "'+e+'" failed with status:',f,"response text:",a.getResponseText()),f>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(m){const _=m.toLowerCase().replace(/_/g,"-");return Object.values(J).indexOf(_)>=0?_:J.UNKNOWN}(h.status);o(new ye(d,h.message))}else o(new ye(J.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new ye(J.UNAVAILABLE,"Connection failed."));break;default:Se()}}finally{me("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(i);a.send(n,"POST",l,s,15)})}wo(e,n,s){const i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=r1(),o=o1(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new u1({})),this.lo(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const l=i.join("");me("Connection","Creating WebChannel: "+l,a);const u=r.createWebChannel(l,a);let f=!1,h=!1;const d=new Jb({Hr:_=>{h?me("Connection","Not sending because WebChannel is closed:",_):(f||(me("Connection","Opening WebChannel transport."),u.open(),f=!0),me("Connection","WebChannel sending:",_),u.send(_))},Jr:()=>u.close()}),m=(_,v,y)=>{_.listen(v,E=>{try{y(E)}catch(C){setTimeout(()=>{throw C},0)}})};return m(u,Qr.EventType.OPEN,()=>{h||me("Connection","WebChannel transport opened.")}),m(u,Qr.EventType.CLOSE,()=>{h||(h=!0,me("Connection","WebChannel transport closed"),d.io())}),m(u,Qr.EventType.ERROR,_=>{h||(h=!0,wl("Connection","WebChannel transport errored:",_),d.io(new ye(J.UNAVAILABLE,"The operation could not be completed")))}),m(u,Qr.EventType.MESSAGE,_=>{var v;if(!h){const y=_.data[0];lt(!!y);const E=y,C=E.error||((v=E[0])===null||v===void 0?void 0:v.error);if(C){me("Connection","WebChannel received error:",C);const $=C.status;let D=function(N){const F=Rt[N];if(F!==void 0)return $m(F)}($),j=C.message;D===void 0&&(D=J.INTERNAL,j="Unknown error status: "+$+" with message "+C.message),h=!0,d.io(new ye(D,j)),u.close()}else me("Connection","WebChannel received:",y),d.ro(y)}}),m(o,l1.STAT_EVENT,_=>{_.stat===Fc.PROXY?me("Connection","Detected buffering proxy"):_.stat===Fc.NOPROXY&&me("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}function Wa(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ha(t){return new lb(t,!0)}class Qm{constructor(e,n,s=1e3,i=1.5,r=6e4){this.Hs=e,this.timerId=n,this.mo=s,this.yo=i,this.po=r,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-s);i>0&&me("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm{constructor(e,n,s,i,r,o,a,l){this.Hs=e,this.vo=s,this.Vo=i,this.So=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Do=0,this.Co=null,this.xo=null,this.stream=null,this.No=new Qm(e,n)}ko(){return this.state===1||this.state===5||this.Oo()}Oo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Mo()}async stop(){this.ko()&&await this.close(0)}Fo(){this.state=0,this.No.reset()}$o(){this.Oo()&&this.Co===null&&(this.Co=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.Bo()))}Lo(e){this.Uo(),this.stream.send(e)}async Bo(){if(this.Oo())return this.close(0)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}qo(){this.xo&&(this.xo.cancel(),this.xo=null)}async close(e,n){this.Uo(),this.qo(),this.No.cancel(),this.Do++,e!==4?this.No.reset():n&&n.code===J.RESOURCE_EXHAUSTED?(es(n.toString()),es("Using maximum backoff delay to prevent overloading the backend."),this.No.Ao()):n&&n.code===J.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Ko(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}Ko(){}auth(){this.state=1;const e=this.Go(this.Do),n=this.Do;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Do===n&&this.Qo(s,i)},s=>{e(()=>{const i=new ye(J.UNKNOWN,"Fetching auth token failed: "+s.message);return this.jo(i)})})}Qo(e,n){const s=this.Go(this.Do);this.stream=this.Wo(e,n),this.stream.Yr(()=>{s(()=>(this.state=2,this.xo=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.Oo()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{s(()=>this.jo(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Mo(){this.state=5,this.No.Ro(async()=>{this.state=0,this.start()})}jo(e){return me("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Go(e){return n=>{this.Hs.enqueueAndForget(()=>this.Do===e?n():(me("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ew extends xm{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.It=r}Wo(e,n){return this.So.wo("Listen",e,n)}onMessage(e){this.No.reset();const n=hb(this.It,e),s=function(i){if(!("targetChange"in i))return Pe.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?Pe.min():r.readTime?Yn(r.readTime):Pe.min()}(e);return this.listener.zo(n,s)}Ho(e){const n={};n.database=Dl(this.It),n.addTarget=function(i,r){let o;const a=r.target;return o=Tl(a)?{documents:pb(i,a)}:{query:mb(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=jm(i,r.resumeToken):r.snapshotVersion.compareTo(Pe.min())>0&&(o.readTime=Ro(i,r.snapshotVersion.toTimestamp())),o}(this.It,e);const s=_b(this.It,e);s&&(n.labels=s),this.Lo(n)}Jo(e){const n={};n.database=Dl(this.It),n.removeTarget=e,this.Lo(n)}}class tw extends xm{constructor(e,n,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.It=r,this.Yo=!1}get Xo(){return this.Yo}start(){this.Yo=!1,this.lastStreamToken=void 0,super.start()}Ko(){this.Yo&&this.Zo([])}Wo(e,n){return this.So.wo("Write",e,n)}onMessage(e){if(lt(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Yo){this.No.reset();const n=db(e.writeResults,e.commitTime),s=Yn(e.commitTime);return this.listener.tu(s,n)}return lt(!e.writeResults||e.writeResults.length===0),this.Yo=!0,this.listener.eu()}nu(){const e={};e.database=Dl(this.It),this.Lo(e)}Zo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>fb(this.It,s))};this.Lo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nw extends class{}{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.So=s,this.It=i,this.su=!1}iu(){if(this.su)throw new ye(J.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,s){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.So.ao(e,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===J.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ye(J.UNKNOWN,i.toString())})}_o(e,n,s,i){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.So._o(e,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===J.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new ye(J.UNKNOWN,r.toString())})}terminate(){this.su=!0}}class sw{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ru=0,this.ou=null,this.uu=!0}cu(){this.ru===0&&(this.au("Unknown"),this.ou=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ou=null,this.hu("Backend didn't respond within 10 seconds."),this.au("Offline"),Promise.resolve())))}lu(e){this.state==="Online"?this.au("Unknown"):(this.ru++,this.ru>=1&&(this.fu(),this.hu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.au("Offline")))}set(e){this.fu(),this.ru=0,e==="Online"&&(this.uu=!1),this.au(e)}au(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}hu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.uu?(es(n),this.uu=!1):me("OnlineStateTracker",n)}fu(){this.ou!==null&&(this.ou.cancel(),this.ou=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iw{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.du=[],this._u=new Map,this.wu=new Set,this.mu=[],this.gu=r,this.gu.qr(o=>{s.enqueueAndForget(async()=>{xs(this)&&(me("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=Ae(a);l.wu.add(4),await Or(l),l.yu.set("Unknown"),l.wu.delete(4),await fa(l)}(this))})}),this.yu=new sw(s,i)}}async function fa(t){if(xs(t))for(const e of t.mu)await e(!0)}async function Or(t){for(const e of t.mu)await e(!1)}function Ym(t,e){const n=Ae(t);n._u.has(e.targetId)||(n._u.set(e.targetId,e),Nu(n)?Pu(n):Si(n).Oo()&&Ru(n,e))}function Xm(t,e){const n=Ae(t),s=Si(n);n._u.delete(e),s.Oo()&&Jm(n,e),n._u.size===0&&(s.Oo()?s.$o():xs(n)&&n.yu.set("Unknown"))}function Ru(t,e){t.pu.Mt(e.targetId),Si(t).Ho(e)}function Jm(t,e){t.pu.Mt(e),Si(t).Jo(e)}function Pu(t){t.pu=new rb({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t._u.get(e)||null}),Si(t).start(),t.yu.cu()}function Nu(t){return xs(t)&&!Si(t).ko()&&t._u.size>0}function xs(t){return Ae(t).wu.size===0}function Zm(t){t.pu=void 0}async function rw(t){t._u.forEach((e,n)=>{Ru(t,e)})}async function ow(t,e){Zm(t),Nu(t)?(t.yu.lu(e),Pu(t)):t.yu.set("Unknown")}async function aw(t,e,n){if(t.yu.set("Online"),e instanceof Bm&&e.state===2&&e.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s._u.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s._u.delete(o),s.pu.removeTarget(o))}(t,e)}catch(s){me("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Po(t,s)}else if(e instanceof so?t.pu.Gt(e):e instanceof Vm?t.pu.Yt(e):t.pu.Wt(e),!n.isEqual(Pe.min()))try{const s=await Wm(t.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.pu.te(r);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i._u.get(l);u&&i._u.set(l,u.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const l=i._u.get(a);if(!l)return;i._u.set(a,l.withResumeToken(fn.EMPTY_BYTE_STRING,l.snapshotVersion)),Jm(i,a);const u=new Ls(l.target,a,1,l.sequenceNumber);Ru(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){me("RemoteStore","Failed to raise snapshot:",s),await Po(t,s)}}async function Po(t,e,n){if(!Rr(e))throw e;t.wu.add(1),await Or(t),t.yu.set("Offline"),n||(n=()=>Wm(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{me("RemoteStore","Retrying IndexedDB access"),await n(),t.wu.delete(1),await fa(t)})}function eg(t,e){return e().catch(n=>Po(t,n,e))}async function da(t){const e=Ae(t),n=Ts(e);let s=e.du.length>0?e.du[e.du.length-1].batchId:-1;for(;lw(e);)try{const i=await Gb(e.localStore,s);if(i===null){e.du.length===0&&n.$o();break}s=i.batchId,uw(e,i)}catch(i){await Po(e,i)}tg(e)&&ng(e)}function lw(t){return xs(t)&&t.du.length<10}function uw(t,e){t.du.push(e);const n=Ts(t);n.Oo()&&n.Xo&&n.Zo(e.mutations)}function tg(t){return xs(t)&&!Ts(t).ko()&&t.du.length>0}function ng(t){Ts(t).start()}async function cw(t){Ts(t).nu()}async function hw(t){const e=Ts(t);for(const n of t.du)e.Zo(n.mutations)}async function fw(t,e,n){const s=t.du.shift(),i=Cu.from(s,e,n);await eg(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await da(t)}async function dw(t,e){e&&Ts(t).Xo&&await async function(n,s){if(i=s.code,eb(i)&&i!==J.ABORTED){const r=n.du.shift();Ts(n).Fo(),await eg(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await da(n)}var i}(t,e),tg(t)&&ng(t)}async function ah(t,e){const n=Ae(t);n.asyncQueue.verifyOperationInProgress(),me("RemoteStore","RemoteStore received new credentials");const s=xs(n);n.wu.add(3),await Or(n),s&&n.yu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.wu.delete(3),await fa(n)}async function pw(t,e){const n=Ae(t);e?(n.wu.delete(2),await fa(n)):e||(n.wu.add(2),await Or(n),n.yu.set("Unknown"))}function Si(t){return t.Iu||(t.Iu=function(e,n,s){const i=Ae(e);return i.iu(),new ew(n,i.So,i.authCredentials,i.appCheckCredentials,i.It,s)}(t.datastore,t.asyncQueue,{Yr:rw.bind(null,t),Zr:ow.bind(null,t),zo:aw.bind(null,t)}),t.mu.push(async e=>{e?(t.Iu.Fo(),Nu(t)?Pu(t):t.yu.set("Unknown")):(await t.Iu.stop(),Zm(t))})),t.Iu}function Ts(t){return t.Tu||(t.Tu=function(e,n,s){const i=Ae(e);return i.iu(),new tw(n,i.So,i.authCredentials,i.appCheckCredentials,i.It,s)}(t.datastore,t.asyncQueue,{Yr:cw.bind(null,t),Zr:dw.bind(null,t),eu:hw.bind(null,t),tu:fw.bind(null,t)}),t.mu.push(async e=>{e?(t.Tu.Fo(),await da(t)):(await t.Tu.stop(),t.du.length>0&&(me("RemoteStore",`Stopping write stream with ${t.du.length} pending writes`),t.du=[]))})),t.Tu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new vs,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new Ou(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ye(J.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function $u(t,e){if(es("AsyncQueue",`${e}: ${t}`),Rr(t))return new ye(J.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e){this.comparator=e?(n,s)=>e(n,s)||ve.comparator(n.key,s.key):(n,s)=>ve.comparator(n.key,s.key),this.keyedMap=Vi(),this.sortedSet=new Bt(this.comparator)}static emptySet(e){return new oi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof oi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new oi;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(){this.Eu=new Bt(ve.comparator)}track(e){const n=e.doc.key,s=this.Eu.get(n);s?e.type!==0&&s.type===3?this.Eu=this.Eu.insert(n,e):e.type===3&&s.type!==1?this.Eu=this.Eu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Eu=this.Eu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Eu=this.Eu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Eu=this.Eu.remove(n):e.type===1&&s.type===2?this.Eu=this.Eu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Eu=this.Eu.insert(n,{type:2,doc:e.doc}):Se():this.Eu=this.Eu.insert(n,e)}Au(){const e=[];return this.Eu.inorderTraversal((n,s)=>{e.push(s)}),e}}class vi{constructor(e,n,s,i,r,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,s,i,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new vi(e,n,oi.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&aa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mw{constructor(){this.Ru=void 0,this.listeners=[]}}class gw{constructor(){this.queries=new Ci(e=>Tm(e),aa),this.onlineState="Unknown",this.bu=new Set}}async function _w(t,e){const n=Ae(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new mw),i)try{r.Ru=await n.onListen(s)}catch(o){const a=$u(o,`Initialization of query '${Cl(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,r),r.listeners.push(e),e.Pu(n.onlineState),r.Ru&&e.vu(r.Ru)&&Lu(n)}async function vw(t,e){const n=Ae(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function yw(t,e){const n=Ae(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.vu(i)&&(s=!0);o.Ru=i}}s&&Lu(n)}function bw(t,e,n){const s=Ae(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function Lu(t){t.bu.forEach(e=>{e.next()})}class ww{constructor(e,n,s){this.query=e,this.Vu=n,this.Su=!1,this.Du=null,this.onlineState="Unknown",this.options=s||{}}vu(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new vi(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Su?this.Cu(e)&&(this.Vu.next(e),n=!0):this.xu(e,this.onlineState)&&(this.Nu(e),n=!0),this.Du=e,n}onError(e){this.Vu.error(e)}Pu(e){this.onlineState=e;let n=!1;return this.Du&&!this.Su&&this.xu(this.Du,e)&&(this.Nu(this.Du),n=!0),n}xu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.ku||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Cu(e){if(e.docChanges.length>0)return!0;const n=this.Du&&this.Du.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Nu(e){e=vi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Su=!0,this.Vu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sg{constructor(e){this.key=e}}class ig{constructor(e){this.key=e}}class kw{constructor(e,n){this.query=e,this.Uu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=$e(),this.mutatedKeys=$e(),this.Gu=Im(e),this.Qu=new oi(this.Gu)}get ju(){return this.Uu}Wu(e,n){const s=n?n.zu:new lh,i=n?n.Qu:this.Qu;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,h)=>{const d=i.get(f),m=Eu(this.query,h)?h:null,_=!!d&&this.mutatedKeys.has(d.key),v=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let y=!1;d&&m?d.data.isEqual(m.data)?_!==v&&(s.track({type:3,doc:m}),y=!0):this.Hu(d,m)||(s.track({type:2,doc:m}),y=!0,(l&&this.Gu(m,l)>0||u&&this.Gu(m,u)<0)&&(a=!0)):!d&&m?(s.track({type:0,doc:m}),y=!0):d&&!m&&(s.track({type:1,doc:d}),y=!0,(l||u)&&(a=!0)),y&&(m?(o=o.add(m),r=v?r.add(f):r.delete(f)):(o=o.delete(f),r=r.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),r=r.delete(f.key),s.track({type:1,doc:f})}return{Qu:o,zu:s,$i:a,mutatedKeys:r}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const i=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const r=e.zu.Au();r.sort((u,f)=>function(h,d){const m=_=>{switch(_){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Se()}};return m(h)-m(d)}(u.type,f.type)||this.Gu(u.doc,f.doc)),this.Ju(s);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,l=a!==this.qu;return this.qu=a,r.length!==0||l?{snapshot:new vi(this.query,e.Qu,i,r,e.mutatedKeys,a===0,l,!1,!!s&&s.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}Pu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new lh,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.Uu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.Uu=this.Uu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Uu=this.Uu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=$e(),this.Qu.forEach(s=>{this.Zu(s.key)&&(this.Ku=this.Ku.add(s.key))});const n=[];return e.forEach(s=>{this.Ku.has(s)||n.push(new ig(s))}),this.Ku.forEach(s=>{e.has(s)||n.push(new sg(s))}),n}tc(e){this.Uu=e.Hi,this.Ku=$e();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return vi.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class Ew{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class Tw{constructor(e){this.key=e,this.nc=!1}}class Iw{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new Ci(a=>Tm(a),aa),this.rc=new Map,this.oc=new Set,this.uc=new Bt(ve.comparator),this.cc=new Map,this.ac=new Su,this.hc={},this.lc=new Map,this.fc=_i.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function Cw(t,e){const n=Mw(t);let s,i;const r=n.ic.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.ec();else{const o=await Wb(n.localStore,ts(e));n.isPrimaryClient&&Ym(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await Sw(n,e,s,a==="current",o.resumeToken)}return i}async function Sw(t,e,n,s,i){t._c=(h,d,m)=>async function(_,v,y,E){let C=v.view.Wu(y);C.$i&&(C=await ih(_.localStore,v.query,!1).then(({documents:j})=>v.view.Wu(j,C)));const $=E&&E.targetChanges.get(v.targetId),D=v.view.applyChanges(C,_.isPrimaryClient,$);return ch(_,v.targetId,D.Xu),D.snapshot}(t,h,d,m);const r=await ih(t.localStore,e,!0),o=new kw(e,r.Hi),a=o.Wu(r.documents),l=Nr.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);ch(t,n,u.Xu);const f=new Ew(e,n,o);return t.ic.set(e,f),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),u.snapshot}async function Aw(t,e){const n=Ae(t),s=n.ic.get(e),i=n.rc.get(s.targetId);if(i.length>1)return n.rc.set(s.targetId,i.filter(r=>!aa(r,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Rl(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Xm(n.remoteStore,s.targetId),Pl(n,s.targetId)}).catch(Dr)):(Pl(n,s.targetId),await Rl(n.localStore,s.targetId,!0))}async function Dw(t,e,n){const s=Uw(t);try{const i=await function(r,o){const a=Ae(r),l=Ft.now(),u=o.reduce((d,m)=>d.add(m.key),$e());let f,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let m=ns(),_=$e();return a.Gi.getEntries(d,u).next(v=>{m=v,m.forEach((y,E)=>{E.isValidDocument()||(_=_.add(y))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,m)).next(v=>{f=v;const y=[];for(const E of o){const C=X1(E,f.get(E.key).overlayedDocument);C!=null&&y.push(new Ss(E.key,C,wm(C.value.mapValue),Ln.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,y,o)}).next(v=>{h=v;const y=v.applyToLocalDocumentSet(f,_);return a.documentOverlayCache.saveOverlays(d,v.batchId,y)})}).then(()=>({batchId:h.batchId,changes:Mm(f)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let l=r.hc[r.currentUser.toKey()];l||(l=new Bt(Ge)),l=l.insert(o,a),r.hc[r.currentUser.toKey()]=l}(s,i.batchId,n),await $r(s,i.changes),await da(s.remoteStore)}catch(i){const r=$u(i,"Failed to persist write");n.reject(r)}}async function rg(t,e){const n=Ae(t);try{const s=await Kb(n.localStore,e);e.targetChanges.forEach((i,r)=>{const o=n.cc.get(r);o&&(lt(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.nc=!0:i.modifiedDocuments.size>0?lt(o.nc):i.removedDocuments.size>0&&(lt(o.nc),o.nc=!1))}),await $r(n,s,e)}catch(s){await Dr(s)}}function uh(t,e,n){const s=Ae(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.ic.forEach((r,o)=>{const a=o.view.Pu(e);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=Ae(r);a.onlineState=o;let l=!1;a.queries.forEach((u,f)=>{for(const h of f.listeners)h.Pu(o)&&(l=!0)}),l&&Lu(a)}(s.eventManager,e),i.length&&s.sc.zo(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Rw(t,e,n){const s=Ae(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.cc.get(e),r=i&&i.key;if(r){let o=new Bt(ve.comparator);o=o.insert(r,Jt.newNoDocument(r,Pe.min()));const a=$e().add(r),l=new ca(Pe.min(),new Map,new Vt(Ge),o,a);await rg(s,l),s.uc=s.uc.remove(r),s.cc.delete(e),Mu(s)}else await Rl(s.localStore,e,!1).then(()=>Pl(s,e,n)).catch(Dr)}async function Pw(t,e){const n=Ae(t),s=e.batch.batchId;try{const i=await Hb(n.localStore,e);ag(n,s,null),og(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await $r(n,i)}catch(i){await Dr(i)}}async function Nw(t,e,n){const s=Ae(t);try{const i=await function(r,o){const a=Ae(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(f=>(lt(f!==null),u=f.keys(),a.mutationQueue.removeMutationBatch(l,f))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(s.localStore,e);ag(s,e,n),og(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await $r(s,i)}catch(i){await Dr(i)}}function og(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function ag(t,e,n){const s=Ae(t);let i=s.hc[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(n?r.reject(n):r.resolve(),i=i.remove(e)),s.hc[s.currentUser.toKey()]=i}}function Pl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.rc.get(e))t.ic.delete(s),n&&t.sc.wc(s,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(s=>{t.ac.containsKey(s)||lg(t,s)})}function lg(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(Xm(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),Mu(t))}function ch(t,e,n){for(const s of n)s instanceof sg?(t.ac.addReference(s.key,e),Ow(t,s)):s instanceof ig?(me("SyncEngine","Document no longer in limbo: "+s.key),t.ac.removeReference(s.key,e),t.ac.containsKey(s.key)||lg(t,s.key)):Se()}function Ow(t,e){const n=e.key,s=n.path.canonicalString();t.uc.get(n)||t.oc.has(s)||(me("SyncEngine","New document in limbo: "+n),t.oc.add(s),Mu(t))}function Mu(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new ve(mt.fromString(e)),s=t.fc.next();t.cc.set(s,new Tw(n)),t.uc=t.uc.insert(n,s),Ym(t.remoteStore,new Ls(ts(Em(n.path)),s,2,yu.at))}}async function $r(t,e,n){const s=Ae(t),i=[],r=[],o=[];s.ic.isEmpty()||(s.ic.forEach((a,l)=>{o.push(s._c(l,e,n).then(u=>{if((u||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const f=Du.Ci(l.targetId,u);r.push(f)}}))}),await Promise.all(o),s.sc.zo(i),await async function(a,l){const u=Ae(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>Z.forEach(l,h=>Z.forEach(h.Si,d=>u.persistence.referenceDelegate.addReference(f,h.targetId,d)).next(()=>Z.forEach(h.Di,d=>u.persistence.referenceDelegate.removeReference(f,h.targetId,d)))))}catch(f){if(!Rr(f))throw f;me("LocalStore","Failed to update sequence numbers: "+f)}for(const f of l){const h=f.targetId;if(!f.fromCache){const d=u.Ui.get(h),m=d.snapshotVersion,_=d.withLastLimboFreeSnapshotVersion(m);u.Ui=u.Ui.insert(h,_)}}}(s.localStore,r))}async function $w(t,e){const n=Ae(t);if(!n.currentUser.isEqual(e)){me("SyncEngine","User change. New user:",e.toKey());const s=await Gm(n.localStore,e);n.currentUser=e,function(i,r){i.lc.forEach(o=>{o.forEach(a=>{a.reject(new ye(J.CANCELLED,r))})}),i.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await $r(n,s.ji)}}function Lw(t,e){const n=Ae(t),s=n.cc.get(e);if(s&&s.nc)return $e().add(s.key);{let i=$e();const r=n.rc.get(e);if(!r)return i;for(const o of r){const a=n.ic.get(o);i=i.unionWith(a.view.ju)}return i}}function Mw(t){const e=Ae(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=rg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Lw.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Rw.bind(null,e),e.sc.zo=yw.bind(null,e.eventManager),e.sc.wc=bw.bind(null,e.eventManager),e}function Uw(t){const e=Ae(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Pw.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Nw.bind(null,e),e}class Fw{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=ha(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return qb(this.persistence,new Bb,e.initialUser,this.It)}yc(e){return new Fb(Au.Bs,this.It)}gc(e){return new xb}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Vw{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>uh(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=$w.bind(null,this.syncEngine),await pw(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new gw}createDatastore(e){const n=ha(e.databaseInfo.databaseId),s=(i=e.databaseInfo,new Zb(i));var i;return function(r,o,a,l){return new nw(r,o,a,l)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,i=e.asyncQueue,r=a=>uh(this.syncEngine,a,0),o=oh.C()?new oh:new Yb,new iw(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(e,n){return function(s,i,r,o,a,l,u){const f=new Iw(s,i,r,o,a,l);return u&&(f.dc=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=Ae(e);me("RemoteStore","RemoteStore shutting down."),n.wu.add(5),await Or(n),n.gu.shutdown(),n.yu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ug(t,e,n){if(!n)throw new ye(J.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Bw(t,e,n,s){if(e===!0&&s===!0)throw new ye(J.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function hh(t){if(!ve.isDocumentKey(t))throw new ye(J.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function fh(t){if(ve.isDocumentKey(t))throw new ye(J.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Uu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Se()}function Ks(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ye(J.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Uu(t);throw new ye(J.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dh=new Map;class ph{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new ye(J.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ye(J.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Bw("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ph({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new ye(J.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new ye(J.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ph(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new h1;switch(n.type){case"gapi":const s=n.client;return new m1(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new ye(J.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=dh.get(e);n&&(me("ComponentProvider","Removing Datastore"),dh.delete(e),n.terminate())}(this),Promise.resolve()}}function jw(t,e,n,s={}){var i;const r=(t=Ks(t,pa))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==e&&wl("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=an.MOCK_USER;else{o=Yv(s.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=s.mockUserToken.sub||s.mockUserToken.user_id;if(!l)throw new ye(J.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new an(l)}t._authCredentials=new f1(new gm(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ys(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new On(this.firestore,e,this._key)}}class ma{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new ma(this.firestore,e,this._query)}}class ys extends ma{constructor(e,n,s){super(e,n,Em(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new On(this.firestore,null,new ve(e))}withConverter(e){return new ys(this.firestore,e,this._path)}}function ss(t,e,...n){if(t=gn(t),ug("collection","path",e),t instanceof pa){const s=mt.fromString(e,...n);return fh(s),new ys(t,null,s)}{if(!(t instanceof On||t instanceof ys))throw new ye(J.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(mt.fromString(e,...n));return fh(s),new ys(t.firestore,null,s)}}function is(t,e,...n){if(t=gn(t),arguments.length===1&&(e=_m.R()),ug("doc","path",e),t instanceof pa){const s=mt.fromString(e,...n);return hh(s),new On(t,null,new ve(s))}{if(!(t instanceof On||t instanceof ys))throw new ye(J.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(mt.fromString(e,...n));return hh(s),new On(t.firestore,t instanceof ys?t.converter:null,new ve(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class qw{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):es("Uncaught Error in snapshot listener:",e)}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hw{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=an.UNAUTHENTICATED,this.clientId=_m.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{me("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(me("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ye(J.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new vs;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=$u(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Kw(t,e){t.asyncQueue.verifyOperationInProgress(),me("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await Gm(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function zw(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Gw(t);me("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(i=>ah(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,r)=>ah(e.remoteStore,r)),t.onlineComponents=e}async function Gw(t){return t.offlineComponents||(me("FirestoreClient","Using default OfflineComponentProvider"),await Kw(t,new Fw)),t.offlineComponents}async function cg(t){return t.onlineComponents||(me("FirestoreClient","Using default OnlineComponentProvider"),await zw(t,new Vw)),t.onlineComponents}function Ww(t){return cg(t).then(e=>e.syncEngine)}async function Qw(t){const e=await cg(t),n=e.eventManager;return n.onListen=Cw.bind(null,e.syncEngine),n.onUnlisten=Aw.bind(null,e.syncEngine),n}function xw(t,e,n={}){const s=new vs;return t.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,l){const u=new qw({next:h=>{r.enqueueAndForget(()=>vw(i,f)),h.fromCache&&a.source==="server"?l.reject(new ye(J.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),f=new ww(o,u,{includeMetadataChanges:!0,ku:!0});return _w(i,f)}(await Qw(t),t.asyncQueue,e,n,s)),s.promise}class Yw{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.No=new Qm(this,"async_queue_retry"),this.Wc=()=>{const n=Wa();n&&me("AsyncQueue","Visibility state changed to "+n.visibilityState),this.No.Po()};const e=Wa();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.Uc){this.Uc=!0,this.Qc=e||!1;const n=Wa();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.Uc)return new Promise(()=>{});const n=new vs;return this.Hc(()=>this.Uc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.No.reset()}catch(e){if(!Rr(e))throw e;me("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.No.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(s=>{this.Kc=s,this.Gc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw es("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Gc=!1,s))));return this.Bc=n,n}enqueueAfterDelay(e,n,s){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const i=Ou.createAndSchedule(this,e,n,s,r=>this.Yc(r));return this.qc.push(i),i}zc(){this.Kc&&Se()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.qc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.qc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.qc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.qc.indexOf(e);this.qc.splice(n,1)}}class Lr extends pa{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=new Yw,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||fg(this),this._firestoreClient.terminate()}}function Xw(t,e){const n=typeof t=="object"?t:hp(),s=typeof t=="string"?t:e||"(default)",i=Yl(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=Wv("firestore");r&&jw(i,...r)}return i}function hg(t){return t._firestoreClient||fg(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function fg(t){var e;const n=t._freezeSettings(),s=function(i,r,o,a){return new C1(i,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Hw(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class yi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new yi(fn.fromBase64String(e))}catch(n){throw new ye(J.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new yi(fn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ye(J.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ln(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Vu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ye(J.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ye(J.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ge(this._lat,e._lat)||Ge(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jw=/^__.*__$/;class Zw{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Ss(e,this.data,this.fieldMask,n,this.fieldTransforms):new Pr(e,this.data,n,this.fieldTransforms)}}class dg{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new Ss(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function pg(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Se()}}class Bu{constructor(e,n,s,i,r,o){this.settings=e,this.databaseId=n,this.It=s,this.ignoreUndefinedProperties=i,r===void 0&&this.na(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new Bu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:s,oa:!1});return i.ua(e),i}ca(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:s,oa:!1});return i.na(),i}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return No(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(pg(this.sa)&&Jw.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class ek{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.It=s||ha(e)}da(e,n,s,i=!1){return new Bu({sa:e,methodName:n,fa:s,path:ln.emptyPath(),oa:!1,la:i},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function mg(t){const e=t._freezeSettings(),n=ha(t._databaseId);return new ek(t._databaseId,!!e.ignoreUndefinedProperties,n)}function tk(t,e,n,s,i,r={}){const o=t.da(r.merge||r.mergeFields?2:0,e,n,i);ju("Data must be an object, but it was:",o,s);const a=gg(s,o);let l,u;if(r.merge)l=new Nn(o.fieldMask),u=o.fieldTransforms;else if(r.mergeFields){const f=[];for(const h of r.mergeFields){const d=Nl(e,h,n);if(!o.contains(d))throw new ye(J.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);vg(f,d)||f.push(d)}l=new Nn(f),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new Zw(new kn(a),l,u)}class _a extends Fu{_toFieldTransform(e){if(e.sa!==2)throw e.sa===1?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof _a}}function nk(t,e,n,s){const i=t.da(1,e,n);ju("Data must be an object, but it was:",i,s);const r=[],o=kn.empty();Qs(s,(l,u)=>{const f=qu(e,l,n);u=gn(u);const h=i.ca(f);if(u instanceof _a)r.push(f);else{const d=va(u,h);d!=null&&(r.push(f),o.set(f,d))}});const a=new Nn(r);return new dg(o,a,i.fieldTransforms)}function sk(t,e,n,s,i,r){const o=t.da(1,e,n),a=[Nl(e,s,n)],l=[i];if(r.length%2!=0)throw new ye(J.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<r.length;d+=2)a.push(Nl(e,r[d])),l.push(r[d+1]);const u=[],f=kn.empty();for(let d=a.length-1;d>=0;--d)if(!vg(u,a[d])){const m=a[d];let _=l[d];_=gn(_);const v=o.ca(m);if(_ instanceof _a)u.push(m);else{const y=va(_,v);y!=null&&(u.push(m),f.set(m,y))}}const h=new Nn(u);return new dg(f,h,o.fieldTransforms)}function va(t,e){if(_g(t=gn(t)))return ju("Unsupported field value:",e,t),gg(t,e);if(t instanceof Fu)return function(n,s){if(!pg(s.sa))throw s.ha(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ha(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=va(o,s.aa(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(t,e)}return function(n,s){if((n=gn(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return z1(s.It,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Ft.fromDate(n);return{timestampValue:Ro(s.It,i)}}if(n instanceof Ft){const i=new Ft(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Ro(s.It,i)}}if(n instanceof Vu)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof yi)return{bytesValue:jm(s.It,n._byteString)};if(n instanceof On){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s.ha(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Iu(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ha(`Unsupported field value: ${Uu(n)}`)}(t,e)}function gg(t,e){const n={};return vm(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Qs(t,(s,i)=>{const r=va(i,e.ra(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function _g(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ft||t instanceof Vu||t instanceof yi||t instanceof On||t instanceof Fu)}function ju(t,e,n){if(!_g(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Uu(n);throw s==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+s)}}function Nl(t,e,n){if((e=gn(e))instanceof ga)return e._internalPath;if(typeof e=="string")return qu(t,e);throw No("Field path arguments must be of type string or ",t,!1,void 0,n)}const ik=new RegExp("[~\\*/\\[\\]]");function qu(t,e,n){if(e.search(ik)>=0)throw No(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ga(...e.split("."))._internalPath}catch{throw No(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function No(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${s}`),o&&(l+=` in document ${i}`),l+=")"),new ye(J.INVALID_ARGUMENT,a+t+l)}function vg(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new On(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new rk(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(bg("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class rk extends yg{data(){return super.data()}}function bg(t,e){return typeof e=="string"?qu(t,e):e instanceof ga?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ok(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ye(J.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ak{convertValue(e,n="none"){switch(Hs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Pt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(mi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Se()}}convertObject(e,n){const s={};return Qs(e.fields,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(e){return new Vu(Pt(e.latitude),Pt(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=bm(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(nr(e));default:return null}}convertTimestamp(e){const n=Es(e);return new Ft(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=mt.fromString(e);lt(zm(s));const i=new sr(s.get(1),s.get(3)),r=new ve(s.popFirst(5));return i.isEqual(n)||es(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lk(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class uk extends yg{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new io(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(bg("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class io extends uk{data(e={}){return super.data(e)}}class ck{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Xr(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new io(this._firestore,this._userDataWriter,s.key,s,new Xr(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ye(J.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>({type:"added",doc:new io(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Xr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter),oldIndex:-1,newIndex:r++}))}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new io(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Xr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,u=-1;return o.type!==0&&(l=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),u=r.indexOf(o.doc.key)),{type:hk(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function hk(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Se()}}class fk extends ak{constructor(e){super(),this.firestore=e}convertBytes(e){return new yi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new On(this.firestore,null,n)}}function ya(t){t=Ks(t,ma);const e=Ks(t.firestore,Lr),n=hg(e),s=new fk(e);return ok(t._query),xw(n,t._query).then(i=>new ck(e,s,t,i))}function ba(t,e,n,...s){t=Ks(t,On);const i=Ks(t.firestore,Lr),r=mg(i);let o;return o=typeof(e=gn(e))=="string"||e instanceof ga?sk(r,"updateDoc",t._key,e,n,s):nk(r,"updateDoc",t._key,e),Hu(i,[o.toMutation(t._key,Ln.exists(!0))])}function wa(t){return Hu(Ks(t.firestore,Lr),[new Tu(t._key,Ln.none())])}function lr(t,e){const n=Ks(t.firestore,Lr),s=is(t),i=lk(t.converter,e);return Hu(n,[tk(mg(t.firestore),"addDoc",s._key,i,t.converter!==null,{}).toMutation(s._key,Ln.exists(!1))]).then(()=>s)}function Hu(t,e){return function(n,s){const i=new vs;return n.asyncQueue.enqueueAndForget(async()=>Dw(await Ww(n),s,i)),i.promise}(hg(t),e)}(function(t,e=!0){(function(n){Ii=n})(yr),fi(new Bs("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new Lr(new d1(n.getProvider("auth-internal")),new _1(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new ye(J.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new sr(a.options.projectId,l)}(r,s),r);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),_s(Vc,"3.7.1",t),_s(Vc,"3.7.1","esm2017")})();const wg="/to-deploy-mh/assets/schedule.20f01954.png";function kg(t){const e=t-1;return e*e*e+1}function bi(t){return t===0||t===1?t:t<.5?.5*Math.pow(2,20*t-10):-.5*Math.pow(2,10-t*20)+1}function Oo(t,{delay:e=0,duration:n=400,easing:s=Id}={}){const i=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:s,css:r=>`opacity: ${r*i}`}}function $o(t,{delay:e=0,duration:n=400,easing:s=kg,x:i=0,y:r=0,opacity:o=0}={}){const a=getComputedStyle(t),l=+a.opacity,u=a.transform==="none"?"":a.transform,f=l*(1-o);return{delay:e,duration:n,easing:s,css:(h,d)=>`
			transform: ${u} translate(${(1-h)*i}px, ${(1-h)*r}px);
			opacity: ${l-f*d}`}}function wi(t,{delay:e=0,duration:n=400,easing:s=kg,start:i=0,opacity:r=0}={}){const o=getComputedStyle(t),a=+o.opacity,l=o.transform==="none"?"":o.transform,u=1-i,f=a*(1-r);return{delay:e,duration:n,easing:s,css:(h,d)=>`
			transform: ${l} scale(${1-u*d});
			opacity: ${a-f*d}
		`}}const yt=Zt(""),Ol=Zt([]),Eg=Zt([]),ot=Zt({typeContact:"",name:"",lastname:"",lastContact:"",telephon:"",email:"",selecMC:"",propCont:"",comContact:"",rangeProp:"",contMode:"",budget:"",numBeds:"",numBaths:"",halfBathroom:"",numParks:"",modePay:"",selecTP:"",contactType:"",contactStage:"",createdAt:"",locaProperty:[],tagsProperty:[],sendedProperties:[]}),rt=Zt({typeProperty:"",typeSaller:"",claveEB:"",claveMH:"",createdAt:"",nameProperty:"",price:"",beds:"",bathroom:"",halfBathroom:"",park:"",areaBuilding:"",areaTotal:"",description:"",urlImage:"",urlProp:"",urlSinergy:"",colonia:"",selecTP:"",selecTO:"",typeOperation:"",tagsProperty:[],locaProperty:[],binnacle:[]}),Rn=Zt({task:"",isComplete:"",createdAt:"",endTask:"",timeTask:"",notes:"",user:""});var dk="firebase",pk="9.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_s(dk,pk,"app");function Ku(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function Tg(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const mk=Tg,Ig=new _r("auth","Firebase",Tg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mh=new Ql("@firebase/auth");function ro(t,...e){mh.logLevel<=qe.ERROR&&mh.error(`Auth (${yr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mn(t,...e){throw zu(t,...e)}function Bn(t,...e){return zu(t,...e)}function gk(t,e,n){const s=Object.assign(Object.assign({},mk()),{[e]:n});return new _r("auth","Firebase",s).create(e,{appName:t.name})}function zu(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Ig.create(t,...e)}function Ee(t,e,...n){if(!t)throw zu(e,...n)}function Qn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ro(e),new Error(e)}function rs(t,e){t||Qn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gh=new Map;function xn(t){rs(t instanceof Function,"Expected a class definition");let e=gh.get(t);return e?(rs(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,gh.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _k(t,e){const n=Yl(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(go(r,e!=null?e:{}))return i;Mn(i,"already-initialized")}return n.initialize({options:e})}function vk(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(xn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $l(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function yk(){return _h()==="http:"||_h()==="https:"}function _h(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(yk()||Fv()||"connection"in navigator)?navigator.onLine:!0}function wk(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(e,n){this.shortDelay=e,this.longDelay=n,rs(n>e,"Short delay should be less than long delay!"),this.isMobile=Uv()||Vv()}get(){return bk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gu(t,e){rs(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Qn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Qn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Qn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ek=new Mr(3e4,6e4);function Ur(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Fr(t,e,n,s,i={}){return Sg(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=vr(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Cg.fetch()(Ag(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function Sg(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},kk),e);try{const i=new Tk(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Jr(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Jr(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Jr(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Jr(t,"user-disabled",o);const f=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw gk(t,f,u);Mn(t,f)}}catch(i){if(i instanceof os)throw i;Mn(t,"network-request-failed")}}async function Vr(t,e,n,s,i={}){const r=await Fr(t,e,n,s,i);return"mfaPendingCredential"in r&&Mn(t,"multi-factor-auth-required",{_serverResponse:r}),r}function Ag(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?Gu(t.config,i):`${t.config.apiScheme}://${i}`}class Tk{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Bn(this.auth,"network-request-failed")),Ek.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Jr(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=Bn(t,e,s);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ik(t,e){return Fr(t,"POST","/v1/accounts:delete",e)}async function Ck(t,e){return Fr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wi(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Sk(t,e=!1){const n=gn(t),s=await n.getIdToken(e),i=Wu(s);Ee(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Wi(Qa(i.auth_time)),issuedAtTime:Wi(Qa(i.iat)),expirationTime:Wi(Qa(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Qa(t){return Number(t)*1e3}function Wu(t){var e;const[n,s,i]=t.split(".");if(n===void 0||s===void 0||i===void 0)return ro("JWT malformed, contained fewer than 3 sections"),null;try{const r=rp(s);return r?JSON.parse(r):(ro("Failed to decode base64 JWT payload"),null)}catch(r){return ro("Caught error parsing JWT payload as JSON",(e=r)===null||e===void 0?void 0:e.toString()),null}}function Ak(t){const e=Wu(t);return Ee(e,"internal-error"),Ee(typeof e.exp<"u","internal-error"),Ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ur(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof os&&Dk(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function Dk({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dg{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Wi(this.lastLoginAt),this.creationTime=Wi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Lo(t){var e;const n=t.auth,s=await t.getIdToken(),i=await ur(t,Ck(n,{idToken:s}));Ee(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?Ok(r.providerUserInfo):[],a=Nk(t.providerData,o),l=t.isAnonymous,u=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),f=l?u:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Dg(r.createdAt,r.lastLoginAt),isAnonymous:f};Object.assign(t,h)}async function Pk(t){const e=gn(t);await Lo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Nk(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function Ok(t){return t.map(e=>{var{providerId:n}=e,s=Ku(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $k(t,e){const n=await Sg(t,{},async()=>{const s=vr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=Ag(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Cg.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ee(e.idToken,"internal-error"),Ee(typeof e.idToken<"u","internal-error"),Ee(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ak(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return Ee(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await $k(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new cr;return s&&(Ee(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(Ee(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(Ee(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new cr,this.toJSON())}_performRefresh(){return Qn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function as(t,e){Ee(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ms{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=Ku(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Rk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Dg(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await ur(this,this.stsTokenManager.getToken(this.auth,e));return Ee(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Sk(this,e)}reload(){return Pk(this)}_assign(e){this!==e&&(Ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Ms(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){Ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Lo(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ur(this,Ik(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,u,f;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,m=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,y=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,E=(u=n.createdAt)!==null&&u!==void 0?u:void 0,C=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:$,emailVerified:D,isAnonymous:j,providerData:N,stsTokenManager:F}=n;Ee($&&F,e,"internal-error");const z=cr.fromJSON(this.name,F);Ee(typeof $=="string",e,"internal-error"),as(h,e.name),as(d,e.name),Ee(typeof D=="boolean",e,"internal-error"),Ee(typeof j=="boolean",e,"internal-error"),as(m,e.name),as(_,e.name),as(v,e.name),as(y,e.name),as(E,e.name),as(C,e.name);const R=new Ms({uid:$,auth:e,email:d,emailVerified:D,displayName:h,isAnonymous:j,photoURL:_,phoneNumber:m,tenantId:v,stsTokenManager:z,createdAt:E,lastLoginAt:C});return N&&Array.isArray(N)&&(R.providerData=N.map(U=>Object.assign({},U))),y&&(R._redirectEventId=y),R}static async _fromIdTokenResponse(e,n,s=!1){const i=new cr;i.updateFromServerResponse(n);const r=new Ms({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Lo(r),r}}/**
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
 */function oo(t,e,n){return`firebase:${t}:${e}:${n}`}class ai{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=oo(this.userKey,i.apiKey,r),this.fullPersistenceKey=oo("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ms._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new ai(xn(vh),e,s);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let r=i[0]||xn(vh);const o=oo(s,e.config.apiKey,e.name);let a=null;for(const u of n)try{const f=await u._get(o);if(f){const h=Ms._fromJSON(e,f);u!==r&&(a=h),r=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new ai(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==r)try{await u._remove(o)}catch{}})),new ai(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yh(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Og(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Pg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Lg(e))return"Blackberry";if(Mg(e))return"Webos";if(Qu(e))return"Safari";if((e.includes("chrome/")||Ng(e))&&!e.includes("edge/"))return"Chrome";if($g(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Pg(t=hn()){return/firefox\//i.test(t)}function Qu(t=hn()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ng(t=hn()){return/crios\//i.test(t)}function Og(t=hn()){return/iemobile/i.test(t)}function $g(t=hn()){return/android/i.test(t)}function Lg(t=hn()){return/blackberry/i.test(t)}function Mg(t=hn()){return/webos/i.test(t)}function ka(t=hn()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Lk(t=hn()){var e;return ka(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Mk(){return Bv()&&document.documentMode===10}function Ug(t=hn()){return ka(t)||$g(t)||Mg(t)||Lg(t)||/windows phone/i.test(t)||Og(t)}function Uk(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fg(t,e=[]){let n;switch(t){case"Browser":n=yh(hn());break;case"Worker":n=`${yh(hn())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${yr}/${s}`}/**
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
 */class Fk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const s=[];try{for(const i of this.queue)await i(e),i.onAbort&&s.push(i.onAbort)}catch(i){s.reverse();for(const r of s)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vk{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new bh(this),this.idTokenSubscription=new bh(this),this.beforeStateQueue=new Fk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ig,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=xn(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await ai.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await Lo(e)}catch(s){if(((n=s)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=wk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?gn(e):null;return n&&Ee(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(xn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new _r("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&xn(e)||this._popupRedirectResolver;Ee(n,this,"argument-error"),this.redirectPersistenceManager=await ai.create(this,[xn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return Ee(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Fg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function Br(t){return gn(t)}class bh{constructor(e){this.auth=e,this.observer=null,this.addObserver=ty(n=>this.observer=n)}get next(){return Ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Bk(t,e,n){const s=Br(t);Ee(s._canInitEmulator,s,"emulator-config-failed"),Ee(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),r=Vg(e),{host:o,port:a}=jk(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||qk()}function Vg(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function jk(t){const e=Vg(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:wh(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:wh(o)}}}function wh(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function qk(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Qn("not implemented")}_getIdTokenResponse(e){return Qn("not implemented")}_linkToIdToken(e,n){return Qn("not implemented")}_getReauthenticationResolver(e){return Qn("not implemented")}}async function Hk(t,e){return Fr(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kk(t,e){return Vr(t,"POST","/v1/accounts:signInWithPassword",Ur(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zk(t,e){return Vr(t,"POST","/v1/accounts:signInWithEmailLink",Ur(t,e))}async function Gk(t,e){return Vr(t,"POST","/v1/accounts:signInWithEmailLink",Ur(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr extends xu{constructor(e,n,s,i=null){super("password",s),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new hr(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new hr(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Kk(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return zk(e,{email:this._email,oobCode:this._password});default:Mn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Hk(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Gk(e,{idToken:n,email:this._email,oobCode:this._password});default:Mn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function li(t,e){return Vr(t,"POST","/v1/accounts:signInWithIdp",Ur(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wk="http://localhost";class zs extends xu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new zs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Mn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=Ku(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new zs(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return li(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,li(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,li(e,n)}buildRequest(){const e={requestUri:Wk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=vr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qk(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function xk(t){const e=Li(Mi(t)).link,n=e?Li(Mi(e)).deep_link_id:null,s=Li(Mi(t)).deep_link_id;return(s?Li(Mi(s)).link:null)||s||n||e||t}class Yu{constructor(e){var n,s,i,r,o,a;const l=Li(Mi(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,f=(s=l.oobCode)!==null&&s!==void 0?s:null,h=Qk((i=l.mode)!==null&&i!==void 0?i:null);Ee(u&&f&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=f,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=xk(e);try{return new Yu(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(){this.providerId=Ai.PROVIDER_ID}static credential(e,n){return hr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Yu.parseLink(n);return Ee(s,"argument-error"),hr._fromEmailAndCode(e,s.code,s.tenantId)}}Ai.PROVIDER_ID="password";Ai.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ai.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class jr extends Bg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs extends jr{constructor(){super("facebook.com")}static credential(e){return zs._fromParams({providerId:cs.PROVIDER_ID,signInMethod:cs.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return cs.credentialFromTaggedObject(e)}static credentialFromError(e){return cs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return cs.credential(e.oauthAccessToken)}catch{return null}}}cs.FACEBOOK_SIGN_IN_METHOD="facebook.com";cs.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs extends jr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return zs._fromParams({providerId:hs.PROVIDER_ID,signInMethod:hs.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return hs.credentialFromTaggedObject(e)}static credentialFromError(e){return hs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return hs.credential(n,s)}catch{return null}}}hs.GOOGLE_SIGN_IN_METHOD="google.com";hs.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs extends jr{constructor(){super("github.com")}static credential(e){return zs._fromParams({providerId:fs.PROVIDER_ID,signInMethod:fs.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fs.credentialFromTaggedObject(e)}static credentialFromError(e){return fs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fs.credential(e.oauthAccessToken)}catch{return null}}}fs.GITHUB_SIGN_IN_METHOD="github.com";fs.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds extends jr{constructor(){super("twitter.com")}static credential(e,n){return zs._fromParams({providerId:ds.PROVIDER_ID,signInMethod:ds.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ds.credentialFromTaggedObject(e)}static credentialFromError(e){return ds.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return ds.credential(n,s)}catch{return null}}}ds.TWITTER_SIGN_IN_METHOD="twitter.com";ds.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yk(t,e){return Vr(t,"POST","/v1/accounts:signUp",Ur(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await Ms._fromIdTokenResponse(e,s,i),o=kh(s);return new Gs({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=kh(s);return new Gs({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function kh(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo extends os{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Mo.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new Mo(e,n,s,i)}}function jg(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Mo._fromErrorAndOperation(t,r,e,s):r})}async function Xk(t,e,n=!1){const s=await ur(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Gs._forOperation(t,"link",s)}/**
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
 */async function Jk(t,e,n=!1){var s;const{auth:i}=t,r="reauthenticate";try{const o=await ur(t,jg(i,r,e,t),n);Ee(o.idToken,i,"internal-error");const a=Wu(o.idToken);Ee(a,i,"internal-error");const{sub:l}=a;return Ee(t.uid===l,i,"user-mismatch"),Gs._forOperation(t,r,o)}catch(o){throw((s=o)===null||s===void 0?void 0:s.code)==="auth/user-not-found"&&Mn(i,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qg(t,e,n=!1){const s="signIn",i=await jg(t,s,e),r=await Gs._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}async function Zk(t,e){return qg(Br(t),e)}async function eE(t,e,n){const s=Br(t),i=await Yk(s,{returnSecureToken:!0,email:e,password:n}),r=await Gs._fromIdTokenResponse(s,"signIn",i);return await s._updateCurrentUser(r.user),r}function tE(t,e,n){return Zk(gn(t),Ai.credential(e,n))}function nE(t,e,n,s){return gn(t).onIdTokenChanged(e,n,s)}function sE(t,e,n){return gn(t).beforeAuthStateChanged(e,n)}const Uo="__sak";/**
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
 */function iE(){const t=hn();return Qu(t)||ka(t)}const rE=1e3,oE=10;class Kg extends Hg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=iE()&&Uk(),this.fallbackToPolling=Ug(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);Mk()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,oE):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},rE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Kg.type="LOCAL";const aE=Kg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function lE(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ea{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new Ea(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,r)),l=await lE(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ea.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class uE{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const u=Xu("",20);i.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(f),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(f),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jn(){return window}function cE(t){jn().location.href=t}/**
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
 */function Wg(){return typeof jn().WorkerGlobalScope<"u"&&typeof jn().importScripts=="function"}async function hE(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function fE(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function dE(){return Wg()?self:null}/**
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
 */const Qg="firebaseLocalStorageDb",pE=1,Fo="firebaseLocalStorage",xg="fbase_key";class qr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ta(t,e){return t.transaction([Fo],e?"readwrite":"readonly").objectStore(Fo)}function mE(){const t=indexedDB.deleteDatabase(Qg);return new qr(t).toPromise()}function Ll(){const t=indexedDB.open(Qg,pE);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Fo,{keyPath:xg})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Fo)?e(s):(s.close(),await mE(),e(await Ll()))})})}async function Eh(t,e,n){const s=Ta(t,!0).put({[xg]:e,value:n});return new qr(s).toPromise()}async function gE(t,e){const n=Ta(t,!1).get(e),s=await new qr(n).toPromise();return s===void 0?null:s.value}function Th(t,e){const n=Ta(t,!0).delete(e);return new qr(n).toPromise()}const _E=800,vE=3;class Yg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ll(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>vE)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Wg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ea._getInstance(dE()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await hE(),!this.activeServiceWorker)return;this.sender=new uE(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);!s||((e=s[0])===null||e===void 0?void 0:e.fulfilled)&&((n=s[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||fE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ll();return await Eh(e,Uo,"1"),await Th(e,Uo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Eh(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>gE(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Th(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=Ta(i,!1).getAll();return new qr(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),_E)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Yg.type="LOCAL";const yE=Yg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bE(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function wE(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=Bn("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",bE().appendChild(s)})}function kE(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Mr(3e4,6e4);/**
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
 */function EE(t,e){return e?xn(e):(Ee(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Ju extends xu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return li(e,this._buildIdpRequest())}_linkToIdToken(e,n){return li(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return li(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function TE(t){return qg(t.auth,new Ju(t),t.bypassAuthState)}function IE(t){const{auth:e,user:n}=t;return Ee(n,e,"internal-error"),Jk(n,new Ju(t),t.bypassAuthState)}async function CE(t){const{auth:e,user:n}=t;return Ee(n,e,"internal-error"),Xk(n,new Ju(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return TE;case"linkViaPopup":case"linkViaRedirect":return CE;case"reauthViaPopup":case"reauthViaRedirect":return IE;default:Mn(this.auth,"internal-error")}}resolve(e){rs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){rs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SE=new Mr(2e3,1e4);class si extends Xg{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,si.currentPopupAction&&si.currentPopupAction.cancel(),si.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ee(e,this.auth,"internal-error"),e}async onExecution(){rs(this.filter.length===1,"Popup operations only handle one event");const e=Xu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Bn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Bn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,si.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Bn(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,SE.get())};e()}}si.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AE="pendingRedirect",ao=new Map;class DE extends Xg{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=ao.get(this.auth._key());if(!e){try{const s=await RE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}ao.set(this.auth._key(),e)}return this.bypassAuthState||ao.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function RE(t,e){const n=OE(e),s=NE(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function PE(t,e){ao.set(t._key(),e)}function NE(t){return xn(t._redirectPersistence)}function OE(t){return oo(AE,t.config.apiKey,t.name)}async function $E(t,e,n=!1){const s=Br(t),i=EE(s,e),o=await new DE(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LE=10*60*1e3;class ME{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!UE(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Jg(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Bn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=LE&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ih(e))}saveEventToCache(e){this.cachedEventUids.add(Ih(e)),this.lastProcessedEventTime=Date.now()}}function Ih(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Jg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function UE(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Jg(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FE(t,e={}){return Fr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,BE=/^https?/;async function jE(t){if(t.config.emulator)return;const{authorizedDomains:e}=await FE(t);for(const n of e)try{if(qE(n))return}catch{}Mn(t,"unauthorized-domain")}function qE(t){const e=$l(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!BE.test(n))return!1;if(VE.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const HE=new Mr(3e4,6e4);function Ch(){const t=jn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function KE(t){return new Promise((e,n)=>{var s,i,r;function o(){Ch(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ch(),n(Bn(t,"network-request-failed"))},timeout:HE.get()})}if(!((i=(s=jn().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=jn().gapi)===null||r===void 0)&&r.load)o();else{const a=kE("iframefcb");return jn()[a]=()=>{gapi.load?o():n(Bn(t,"network-request-failed"))},wE(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw lo=null,e})}let lo=null;function zE(t){return lo=lo||KE(t),lo}/**
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
 */const GE=new Mr(5e3,15e3),WE="__/auth/iframe",QE="emulator/auth/iframe",xE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},YE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function XE(t){const e=t.config;Ee(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Gu(e,QE):`https://${t.config.authDomain}/${WE}`,s={apiKey:e.apiKey,appName:t.name,v:yr},i=YE.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${vr(s).slice(1)}`}async function JE(t){const e=await zE(t),n=jn().gapi;return Ee(n,t,"internal-error"),e.open({where:document.body,url:XE(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:xE,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=Bn(t,"network-request-failed"),a=jn().setTimeout(()=>{r(o)},GE.get());function l(){jn().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const ZE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},eT=500,tT=600,nT="_blank",sT="http://localhost";class Sh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function iT(t,e,n,s=eT,i=tT){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},ZE),{width:s.toString(),height:i.toString(),top:r,left:o}),u=hn().toLowerCase();n&&(a=Ng(u)?nT:n),Pg(u)&&(e=e||sT,l.scrollbars="yes");const f=Object.entries(l).reduce((d,[m,_])=>`${d}${m}=${_},`,"");if(Lk(u)&&a!=="_self")return rT(e||"",a),new Sh(null);const h=window.open(e||"",a,f);Ee(h,t,"popup-blocked");try{h.focus()}catch{}return new Sh(h)}function rT(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const oT="__/auth/handler",aT="emulator/auth/handler";function Ah(t,e,n,s,i,r){Ee(t.config.authDomain,t,"auth-domain-config-required"),Ee(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:yr,eventId:i};if(e instanceof Bg){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ey(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries(r||{}))o[l]=u}if(e instanceof jr){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${lT(t)}?${vr(a).slice(1)}`}function lT({config:t}){return t.emulator?Gu(t,aT):`https://${t.authDomain}/${oT}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xa="webStorageSupport";class uT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Gg,this._completeRedirectFn=$E,this._overrideRedirectResult=PE}async _openPopup(e,n,s,i){var r;rs((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=Ah(e,n,s,$l(),i);return iT(e,o,Xu())}async _openRedirect(e,n,s,i){return await this._originValidation(e),cE(Ah(e,n,s,$l(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(rs(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await JE(e),s=new ME(e);return n.register("authEvent",i=>(Ee(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(xa,{type:xa},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[xa];o!==void 0&&n(!!o),Mn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=jE(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ug()||Qu()||ka()}}const cT=uT;var Dh="@firebase/auth",Rh="0.20.10";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{var i;e(((i=s)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fT(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function dT(t){fi(new Bs("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:r,authDomain:o}=s.options;return((a,l)=>{Ee(r&&!r.includes(":"),"invalid-api-key",{appName:a.name}),Ee(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:r,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Fg(t)},f=new Vk(a,l,u);return vk(f,n),f})(s,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),fi(new Bs("auth-internal",e=>{const n=Br(e.getProvider("auth").getImmediate());return(s=>new hT(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),_s(Dh,Rh,fT(t)),_s(Dh,Rh,"esm2017")}/**
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
 */const pT=5*60,mT=ap("authIdTokenMaxAge")||pT;let Ph=null;const gT=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>mT)return;const i=n==null?void 0:n.token;Ph!==i&&(Ph=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function _T(t=hp()){const e=Yl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=_k(t,{popupRedirectResolver:cT,persistence:[yE,aE,Gg]}),s=ap("authTokenSyncURL");if(s){const r=gT(s);sE(n,r,()=>r(n.currentUser)),nE(n,o=>r(o))}const i=op("auth");return i&&Bk(n,`http://${i}`),n}dT("Browser");let fr=[],Vn=[],Vo=[];const vT={apiKey:"AIzaSyDGi3ndUC1b4SFNstliSSVryu7_ymXEkZc",authDomain:"match-home-7d1f9.firebaseapp.com",databaseURL:"https://match-home-7d1f9-default-rtdb.firebaseio.com",projectId:"match-home-7d1f9",storageBucket:"match-home-7d1f9.appspot.com",messagingSenderId:"747751099607",appId:"1:747751099607:web:29d1e5beda87c847dfb492"},Zg=cp(vT),tn=Xw(Zg),e_=_T(Zg),yT=ss(tn,"binnacles"),bT=ss(tn,"contacts"),wT=ss(tn,"properties"),kT=ss(tn,"todos");ya(yT).then(t=>t.docs.map(e=>({...e.data(),id:e.id})));ya(bT).then(t=>fr=t.docs.map(e=>({...e.data(),id:e.id})));ya(wT).then(t=>Vn=t.docs.map(e=>({...e.data(),id:e.id})));ya(kT).then(t=>Vo=t.docs.map(e=>({...e.data(),id:e.id})));const ET=["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","S\xE1bado"],TT=["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"];function In(t){typeof t=="string"?t=new Date(t):t=new Date(t);let e=t.getDate()+1;e<10&&(e="0"+e);let n=TT[t.getMonth()],s=t.getFullYear();return`${e}/${n}/${s}`}function IT(t){t=new Date(t);let e=t.getMinutes();e.length<2&&(e="0"+e);let n=t.getHours();return n>12&&(n=n-12),n<10&&(n="0"+n),t.getDate(),`${n}:${e}`}function CT(t){return t=new Date(+t),`${ET[t.getDay()]}-`}function Nh(t,e,n){const s=t.slice();return s[21]=e[n],s}function Oh(t,e,n){const s=t.slice();return s[21]=e[n],s}function ST(t){let e;return{c(){e=A("Editar")},m(n,s){k(n,e,s)},d(n){n&&w(e)}}}function AT(t){let e;return{c(){e=A("Guardar")},m(n,s){k(n,e,s)},d(n){n&&w(e)}}}function $h(t){let e,n,s,i,r,o,a,l,u,f,h,d=t[1],m=[];for(let C=0;C<d.length;C+=1)m[C]=Fh(Oh(t,d,C));let _=null;d.length||(_=Lh());let v=t[1],y=[];for(let C=0;C<v.length;C+=1)y[C]=qh(Nh(t,v,C));let E=null;return v.length||(E=Vh()),{c(){e=p("h3"),e.textContent="Tareas",n=b(),s=p("ol");for(let C=0;C<m.length;C+=1)m[C].c();_&&_.c(),i=b(),r=p("p"),r.textContent=`${Hh}`,o=b(),a=p("h3"),a.textContent="Agenda",l=b(),u=p("ol");for(let C=0;C<y.length;C+=1)y[C].c();E&&E.c(),f=b(),h=p("p"),h.textContent=`${Hh}`,g(r,"class","error"),g(h,"class","error")},m(C,$){k(C,e,$),k(C,n,$),k(C,s,$);for(let D=0;D<m.length;D+=1)m[D].m(s,null);_&&_.m(s,null),c(s,i),c(s,r),k(C,o,$),k(C,a,$),k(C,l,$),k(C,u,$);for(let D=0;D<y.length;D+=1)y[D].m(u,null);E&&E.m(u,null),c(u,f),c(u,h)},p(C,$){if($&50){d=C[1];let D;for(D=0;D<d.length;D+=1){const j=Oh(C,d,D);m[D]?m[D].p(j,$):(m[D]=Fh(j),m[D].c(),m[D].m(s,i))}for(;D<m.length;D+=1)m[D].d(1);m.length=d.length,!d.length&&_?_.p(C,$):d.length?_&&(_.d(1),_=null):(_=Lh(),_.c(),_.m(s,i))}if($&50){v=C[1];let D;for(D=0;D<v.length;D+=1){const j=Nh(C,v,D);y[D]?y[D].p(j,$):(y[D]=qh(j),y[D].c(),y[D].m(u,f))}for(;D<y.length;D+=1)y[D].d(1);y.length=v.length,!v.length&&E?E.p(C,$):v.length?E&&(E.d(1),E=null):(E=Vh(),E.c(),E.m(u,f))}},d(C){C&&w(e),C&&w(n),C&&w(s),ze(m,C),_&&_.d(),C&&w(o),C&&w(a),C&&w(l),C&&w(u),ze(y,C),E&&E.d()}}}function Lh(t){let e;return{c(){e=p("p"),e.textContent="No Hay Tareas Pendientes"},m(n,s){k(n,e,s)},p:he,d(n){n&&w(e)}}}function Mh(t){let e,n,s,i,r,o,a,l,u,f,h=In(t[21].endTask)+"",d,m,_=t[21].task+"",v,y,E,C;function $(){return t[11](t[21])}function D(){return t[12](t[21])}function j(){return t[13](t[21])}let N=t[21].notes&&Uh(t);return{c(){e=p("div"),n=p("li"),s=p("span"),i=p("button"),i.textContent="\u2714",r=b(),o=p("button"),o.textContent="\u2716",a=b(),l=p("button"),l.textContent="\u2714\u2716",u=b(),f=p("spam"),d=A(h),m=A(` -*-\r
                                 `),v=A(_),y=A(` -*-\r
                                 `),N&&N.c(),g(n,"class","schedule svelte-1e3ab80"),ci(n,"complete",t[21].isComplete)},m(F,z){k(F,e,z),c(e,n),c(n,s),c(s,i),c(s,r),c(s,o),c(s,a),c(s,l),c(n,u),c(n,f),c(f,d),c(f,m),c(f,v),c(f,y),N&&N.m(f,null),E||(C=[q(i,"click",$),q(o,"click",D),q(l,"click",j)],E=!0)},p(F,z){t=F,z&2&&h!==(h=In(t[21].endTask)+"")&&re(d,h),z&2&&_!==(_=t[21].task+"")&&re(v,_),t[21].notes?N?N.p(t,z):(N=Uh(t),N.c(),N.m(f,null)):N&&(N.d(1),N=null),z&2&&ci(n,"complete",t[21].isComplete)},d(F){F&&w(e),N&&N.d(),E=!1,tt(C)}}}function Uh(t){let e=t[21].notes+"",n;return{c(){n=A(e)},m(s,i){k(s,n,i)},p(s,i){i&2&&e!==(e=s[21].notes+"")&&re(n,e)},d(s){s&&w(n)}}}function Fh(t){let e,n=!t[21].timeTask&&Mh(t);return{c(){n&&n.c(),e=_n()},m(s,i){n&&n.m(s,i),k(s,e,i)},p(s,i){s[21].timeTask?n&&(n.d(1),n=null):n?n.p(s,i):(n=Mh(s),n.c(),n.m(e.parentNode,e))},d(s){n&&n.d(s),s&&w(e)}}}function Vh(t){let e;return{c(){e=p("p"),e.textContent="No Hay Tareas Pendientes"},m(n,s){k(n,e,s)},p:he,d(n){n&&w(e)}}}function Bh(t){let e,n,s,i,r,o,a,l,u,f,h=t[21].timeTask+"",d,m,_=In(t[21].endTask)+"",v,y,E=t[21].task+"",C,$,D,j;function N(){return t[14](t[21])}function F(){return t[15](t[21])}function z(){return t[16](t[21])}let R=t[21].notes&&jh(t);return{c(){e=p("div"),n=p("li"),s=p("span"),i=p("button"),i.textContent="\u2714",r=b(),o=p("button"),o.textContent="\u2716",a=b(),l=p("button"),l.textContent="\u2714\u2716",u=b(),f=p("spam"),d=A(h),m=A(` -*-\r
                                 `),v=A(_),y=A(` -*-\r
                                 `),C=A(E),$=A(` -*-\r
                                 `),R&&R.c(),g(n,"class","schedule svelte-1e3ab80"),ci(n,"complete",t[21].isComplete)},m(U,P){k(U,e,P),c(e,n),c(n,s),c(s,i),c(s,r),c(s,o),c(s,a),c(s,l),c(n,u),c(n,f),c(f,d),c(f,m),c(f,v),c(f,y),c(f,C),c(f,$),R&&R.m(f,null),D||(j=[q(i,"click",N),q(o,"click",F),q(l,"click",z),q(e,"dblclick",t[17])],D=!0)},p(U,P){t=U,P&2&&h!==(h=t[21].timeTask+"")&&re(d,h),P&2&&_!==(_=In(t[21].endTask)+"")&&re(v,_),P&2&&E!==(E=t[21].task+"")&&re(C,E),t[21].notes?R?R.p(t,P):(R=jh(t),R.c(),R.m(f,null)):R&&(R.d(1),R=null),P&2&&ci(n,"complete",t[21].isComplete)},d(U){U&&w(e),R&&R.d(),D=!1,tt(j)}}}function jh(t){let e=t[21].notes+"",n;return{c(){n=A(e)},m(s,i){k(s,n,i)},p(s,i){i&2&&e!==(e=s[21].notes+"")&&re(n,e)},d(s){s&&w(n)}}}function qh(t){let e,n=t[21].timeTask&&Bh(t);return{c(){n&&n.c(),e=_n()},m(s,i){n&&n.m(s,i),k(s,e,i)},p(s,i){s[21].timeTask?n?n.p(s,i):(n=Bh(s),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(s){n&&n.d(s),s&&w(e)}}}function DT(t){let e,n,s,i,r,o,a,l,u,f,h,d,m,_,v,y,E,C,$,D,j,N,F,z,R,U,P,K,Y,ie,Q,W;function te(O,L){return O[0]?ST:AT}let x=te(t),S=x(t),V=!t[0]&&$h(t);return{c(){e=p("div"),n=p("h1"),n.textContent="Agenda",s=b(),i=p("img"),o=b(),a=p("div"),l=p("div"),f=b(),h=p("div"),d=p("div"),m=p("input"),_=b(),v=p("div"),y=p("input"),E=b(),C=p("input"),$=b(),D=p("div"),j=p("textarea"),N=b(),F=p("div"),z=p("button"),S.c(),R=b(),U=p("button"),U.textContent="Cancelar",K=b(),Y=p("div"),V&&V.c(),St(i.src,r=wg)||g(i,"src",r),g(i,"alt","schedule"),g(i,"class","imgTitle svelte-1e3ab80"),g(l,"class","background"),g(m,"type","text"),g(m,"class","inputTask"),g(m,"cols","56"),g(m,"rows","1"),g(m,"placeholder","Agrega una Tarea o Cita"),g(y,"type","time"),g(y,"class","inputDate"),g(C,"type","date"),g(C,"class","inputDate"),g(v,"class","contDate"),g(j,"name","notes"),g(j,"id",""),g(j,"cols","56"),g(j,"rows","5"),g(j,"placeholder","descripci\xF3n"),g(h,"class","pop-up"),g(a,"class","container"),g(Y,"class","container"),g(e,"class","container")},m(O,L){k(O,e,L),c(e,n),c(e,s),c(e,i),c(e,o),c(e,a),c(a,l),c(a,f),c(a,h),c(h,d),c(d,m),pe(m,t[2].task),c(h,_),c(h,v),c(v,y),pe(y,t[2].timeTask),c(v,E),c(v,C),pe(C,t[2].endTask),c(h,$),c(h,D),c(D,j),pe(j,t[2].notes),c(h,N),c(h,F),c(F,z),S.m(z,null),c(F,R),c(F,U),c(e,K),c(e,Y),V&&V.m(Y,null),ie=!0,Q||(W=[q(l,"keydown",t[6]),q(m,"input",t[7]),q(y,"input",t[8]),q(C,"input",t[9]),q(j,"input",t[10]),q(z,"click",t[3]),q(U,"click",t[6])],Q=!0)},p(O,[L]){L&4&&m.value!==O[2].task&&pe(m,O[2].task),L&4&&pe(y,O[2].timeTask),L&4&&pe(C,O[2].endTask),L&4&&pe(j,O[2].notes),x!==(x=te(O))&&(S.d(1),S=x(O),S&&(S.c(),S.m(z,null))),O[0]?V&&(V.d(1),V=null):V?V.p(O,L):(V=$h(O),V.c(),V.m(Y,null))},i(O){ie||(et(()=>{u||(u=En(l,Oo,{},!0)),u.run(1)}),et(()=>{P||(P=En(h,$o,{},!0)),P.run(1)}),ie=!0)},o(O){u||(u=En(l,Oo,{},!1)),u.run(0),P||(P=En(h,$o,{},!1)),P.run(0),ie=!1},d(O){O&&w(e),O&&u&&u.end(),S.d(),O&&P&&P.end(),V&&V.d(),Q=!1,tt(W)}}}let Hh="";function RT(t,e,n){let s,i;je(t,Rn,N=>n(2,i=N));const r=ki();let o=!1;Vo.sort((N,F)=>N.endTask<F.endTask?1:N.endTask>F.endTask?-1:0);async function a(){if(console.log(o),o)await ba(is(tn,"todos",i.id),i),n(0,o=!1),console.log(o);else{const N=ss(tn,"todos");await lr(N,i),console.log(o)}at(Rn,i=[],i),r("/")}async function l(N){confirm("Quieres borrarlo definitivmente?")==!0&&(console.log(N),await wa(is(tn,"todos",N)))}async function u(N){at(Rn,i=N,i),console.log(i),n(0,o=!0)}function f(){at(Rn,i=[],i),r("/contactos")}function h(){i.task=this.value,Rn.set(i)}function d(){i.timeTask=this.value,Rn.set(i)}function m(){i.endTask=this.value,Rn.set(i)}function _(){i.notes=this.value,Rn.set(i)}const v=N=>(N.id,void 0),y=N=>l(N.id),E=N=>u(N),C=N=>(N.id,void 0),$=N=>l(N.id),D=N=>u(N),j=()=>u;return n(1,s=Vo),[o,s,i,a,l,u,f,h,d,m,_,v,y,E,C,$,D,j]}class t_ extends Xe{constructor(e){super(),Ye(this,e,RT,DT,We,{})}}function PT(t){let e;return{c(){e=p("h1"),e.textContent="Estas en Sinergias"},m(n,s){k(n,e,s)},p:he,i:he,o:he,d(n){n&&w(e)}}}class n_ extends Xe{constructor(e){super(),Ye(this,e,null,PT,We,{})}}function NT(t){let e;return{c(){e=A("Inicia sesi\xF3n")},m(n,s){k(n,e,s)},d(n){n&&w(e)}}}function OT(t){let e,n,s,i,r,o,a,l,u,f,h,d,m,_,v,y,E,C,$,D,j,N,F,z,R,U,P,K,Y;return U=new wn({props:{to:"/login",$$slots:{default:[NT]},$$scope:{ctx:t}}}),{c(){e=p("div"),n=p("br"),s=p("br"),i=p("br"),r=b(),o=p("div"),a=p("h1"),a.textContent="Registra tu cuenta",l=b(),u=p("div"),f=p("input"),h=b(),d=p("div"),m=p("input"),_=b(),v=p("br"),y=b(),E=p("div"),C=p("button"),C.textContent="Registrarse",$=b(),D=p("p"),D.textContent="O tambi\xE9n",j=b(),N=p("br"),F=b(),z=p("p"),R=A("\xBFYa tienes cuenta? "),le(U.$$.fragment),g(a,"class","text-center text-login svelte-ftg4em"),g(f,"name","email"),g(f,"type","email"),g(f,"class","input-form svelte-ftg4em"),g(f,"placeholder","Correo"),f.required=!0,g(u,"class","center svelte-ftg4em"),g(m,"name","password"),g(m,"type","password"),g(m,"class","input-form svelte-ftg4em"),g(m,"placeholder","Contrase\xF1a"),g(d,"class","center svelte-ftg4em"),g(C,"class","button-signup fondo-color-signup svelte-ftg4em"),g(E,"class","center svelte-ftg4em"),g(D,"class","text-center svelte-ftg4em"),g(z,"class","text-center svelte-ftg4em"),g(o,"class","form-signin svelte-ftg4em")},m(ie,Q){k(ie,e,Q),c(e,n),c(e,s),c(e,i),c(e,r),c(e,o),c(o,a),c(o,l),c(o,u),c(u,f),c(o,h),c(o,d),c(d,m),c(o,_),c(o,v),c(o,y),c(o,E),c(E,C),c(o,$),c(o,D),c(o,j),c(o,N),c(o,F),c(o,z),c(z,R),oe(U,z,null),P=!0,K||(Y=[q(f,"input",t[2]),q(m,"input",t[3]),q(C,"click",t[1])],K=!0)},p(ie,[Q]){const W={};Q&64&&(W.$$scope={dirty:Q,ctx:ie}),U.$set(W)},i(ie){P||(B(U.$$.fragment,ie),P=!0)},o(ie){G(U.$$.fragment,ie),P=!1},d(ie){ie&&w(e),ae(U),K=!1,tt(Y)}}}function $T(t){const e=ki();let n={email:"",password:""};const s=a=>{n={...n,[a.target.name]:a.target.value}};return[s,async()=>{try{await eE(e_,n.email,n.password),e("/")}catch(a){console.log(a)}},a=>s(a),a=>s(a)]}class Zu extends Xe{constructor(e){super(),Ye(this,e,$T,OT,We,{})}}function Kh(t,e,n){const s=t.slice();return s[1]=e[n],s}function zh(t,e,n){const s=t.slice();return s[1]=e[n],s}function LT(t){let e,n,s=In(t[1].endTask)+"",i,r,o=t[1].task+"",a,l,u=t[1].notes&&MT(t);return{c(){e=p("ul"),n=p("li"),i=A(s),r=A(` - -\r
                    `),a=A(o),l=A(` - -\r
                    `),u&&u.c(),ci(n,"complete",t[1].isComplete)},m(f,h){k(f,e,h),c(e,n),c(n,i),c(n,r),c(n,a),c(n,l),u&&u.m(n,null)},p(f,h){f[1].notes&&u.p(f,h)},d(f){f&&w(e),u&&u.d()}}}function MT(t){let e=t[1].notes+"",n;return{c(){n=A(e)},m(s,i){k(s,n,i)},p:he,d(s){s&&w(n)}}}function Gh(t){let e,n=!t[1].timeTask&&LT(t);return{c(){n&&n.c(),e=_n()},m(s,i){n&&n.m(s,i),k(s,e,i)},p(s,i){s[1].timeTask||n.p(s,i)},d(s){n&&n.d(s),s&&w(e)}}}function UT(t){let e,n,s,i=CT(t[1].endTask)+"",r,o,a=IT(t[1].endTask)+"",l,u,f=In(t[1].endTask)+"",h,d,m=t[1].task+"",_,v,y=t[1].notes&&FT(t);return{c(){e=p("ul"),n=p("li"),s=p("spam"),r=A(i),o=b(),l=A(a),u=A(` - -\r
                      `),h=A(f),d=b(),_=A(m),v=A(` - -\r
                      `),y&&y.c(),g(s,"type","number"),ci(n,"complete",t[1].isComplete)},m(E,C){k(E,e,C),c(e,n),c(n,s),c(s,r),c(s,o),c(s,l),c(s,u),c(s,h),c(s,d),c(s,_),c(s,v),y&&y.m(s,null)},p(E,C){E[1].notes&&y.p(E,C)},d(E){E&&w(e),y&&y.d()}}}function FT(t){let e=t[1].notes+"",n;return{c(){n=A(e)},m(s,i){k(s,n,i)},p:he,d(s){s&&w(n)}}}function Wh(t){let e,n=t[1].timeTask&&UT(t);return{c(){n&&n.c(),e=b()},m(s,i){n&&n.m(s,i),k(s,e,i)},p(s,i){s[1].timeTask&&n.p(s,i)},d(s){n&&n.d(s),s&&w(e)}}}function VT(t){let e,n,s,i,r,o,a,l,u,f,h=t[0],d=[];for(let v=0;v<h.length;v+=1)d[v]=Gh(zh(t,h,v));let m=t[0],_=[];for(let v=0;v<m.length;v+=1)_[v]=Wh(Kh(t,m,v));return{c(){e=p("div"),n=p("div"),s=p("div"),i=p("h1"),i.textContent="Agenda",r=b(),o=p("h3"),o.textContent="Tareas",a=b();for(let v=0;v<d.length;v+=1)d[v].c();l=b(),u=p("h3"),u.textContent="Citas",f=b();for(let v=0;v<_.length;v+=1)_[v].c();g(i,"class","title svelte-13rvwi6"),g(o,"class","subtitle svelte-13rvwi6"),g(u,"class","subtitle svelte-13rvwi6"),g(s,"class","schedule"),g(n,"class","container"),g(e,"class","show-home")},m(v,y){k(v,e,y),c(e,n),c(n,s),c(s,i),c(s,r),c(s,o),c(s,a);for(let E=0;E<d.length;E+=1)d[E].m(s,null);c(s,l),c(s,u),c(s,f);for(let E=0;E<_.length;E+=1)_[E].m(s,null)},p(v,[y]){if(y&1){h=v[0];let E;for(E=0;E<h.length;E+=1){const C=zh(v,h,E);d[E]?d[E].p(C,y):(d[E]=Gh(C),d[E].c(),d[E].m(s,l))}for(;E<d.length;E+=1)d[E].d(1);d.length=h.length}if(y&1){m=v[0];let E;for(E=0;E<m.length;E+=1){const C=Kh(v,m,E);_[E]?_[E].p(C,y):(_[E]=Wh(C),_[E].c(),_[E].m(s,null))}for(;E<_.length;E+=1)_[E].d(1);_.length=m.length}},i:he,o:he,d(v){v&&w(e),ze(d,v),ze(_,v)}}}function BT(t){return[Vo]}class jT extends Xe{constructor(e){super(),Ye(this,e,BT,VT,We,{})}}const s_="/to-deploy-mh/assets/add-user.1bd66bde.png",i_="/to-deploy-mh/assets/house.99302696.png",qT="/to-deploy-mh/assets/team.31fda88c.png",Qh=Zt(!1);function HT(t){let e,n,s,i,r,o;return{c(){e=p("div"),n=p("div"),s=p("img"),r=b(),o=p("h1"),o.textContent="Contactos",St(s.src,i=s_)||g(s,"src",i),g(s,"alt","Buzon"),g(s,"class","profile-img svelte-mxk4x8"),g(o,"class","name svelte-mxk4x8"),g(n,"class","optionCard svelte-mxk4x8"),g(e,"class","container")},m(a,l){k(a,e,l),c(e,n),c(n,s),c(n,r),c(n,o)},p:he,d(a){a&&w(e)}}}function KT(t){let e,n,s,i,r,o;return{c(){e=p("div"),n=p("div"),s=p("img"),r=b(),o=p("h1"),o.textContent="Propiedades",St(s.src,i=i_)||g(s,"src",i),g(s,"alt","propiedad"),g(s,"class","profile-img svelte-mxk4x8"),g(o,"class","name svelte-mxk4x8"),g(n,"class","optionCard svelte-mxk4x8"),g(e,"class","container")},m(a,l){k(a,e,l),c(e,n),c(n,s),c(n,r),c(n,o)},p:he,d(a){a&&w(e)}}}function zT(t){let e,n,s,i,r,o;return{c(){e=p("div"),n=p("div"),s=p("img"),r=b(),o=p("h1"),o.textContent="Agenda",St(s.src,i=wg)||g(s,"src",i),g(s,"alt","agenda"),g(s,"class","profile-img svelte-mxk4x8"),g(o,"class","name svelte-mxk4x8"),g(n,"class","optionCard svelte-mxk4x8"),g(e,"class","container")},m(a,l){k(a,e,l),c(e,n),c(n,s),c(n,r),c(n,o)},p:he,d(a){a&&w(e)}}}function GT(t){let e,n,s,i,r,o;return{c(){e=p("div"),n=p("div"),s=p("img"),r=b(),o=p("h1"),o.textContent="Sinergias",St(s.src,i=qT)||g(s,"src",i),g(s,"alt","sinergias"),g(s,"class","profile-img svelte-mxk4x8"),g(o,"class","name svelte-mxk4x8"),g(n,"class","optionCard svelte-mxk4x8"),g(e,"class","container")},m(a,l){k(a,e,l),c(e,n),c(n,s),c(n,r),c(n,o)},p:he,d(a){a&&w(e)}}}function WT(t){let e,n,s,i,r,o,a,l;return e=new wn({props:{to:"/contactos",title:"contactos",$$slots:{default:[HT]},$$scope:{ctx:t}}}),s=new wn({props:{to:"/propiedades",title:"propiedades",$$slots:{default:[KT]},$$scope:{ctx:t}}}),r=new wn({props:{to:"/agenda",title:"agenda",class:"s",$$slots:{default:[zT]},$$scope:{ctx:t}}}),a=new wn({props:{to:"/sinergias",title:"sinergias",$$slots:{default:[GT]},$$scope:{ctx:t}}}),{c(){le(e.$$.fragment),n=b(),le(s.$$.fragment),i=b(),le(r.$$.fragment),o=b(),le(a.$$.fragment)},m(u,f){oe(e,u,f),k(u,n,f),oe(s,u,f),k(u,i,f),oe(r,u,f),k(u,o,f),oe(a,u,f),l=!0},p(u,f){const h={};f&1&&(h.$$scope={dirty:f,ctx:u}),e.$set(h);const d={};f&1&&(d.$$scope={dirty:f,ctx:u}),s.$set(d);const m={};f&1&&(m.$$scope={dirty:f,ctx:u}),r.$set(m);const _={};f&1&&(_.$$scope={dirty:f,ctx:u}),a.$set(_)},i(u){l||(B(e.$$.fragment,u),B(s.$$.fragment,u),B(r.$$.fragment,u),B(a.$$.fragment,u),l=!0)},o(u){G(e.$$.fragment,u),G(s.$$.fragment,u),G(r.$$.fragment,u),G(a.$$.fragment,u),l=!1},d(u){ae(e,u),u&&w(n),ae(s,u),u&&w(i),ae(r,u),u&&w(o),ae(a,u)}}}function QT(t){let e,n;return e=new t_({}),{c(){le(e.$$.fragment)},m(s,i){oe(e,s,i),n=!0},i(s){n||(B(e.$$.fragment,s),n=!0)},o(s){G(e.$$.fragment,s),n=!1},d(s){ae(e,s)}}}function xT(t){let e,n;return e=new n_({}),{c(){le(e.$$.fragment)},m(s,i){oe(e,s,i),n=!0},i(s){n||(B(e.$$.fragment,s),n=!0)},o(s){G(e.$$.fragment,s),n=!1},d(s){ae(e,s)}}}function YT(t){let e,n;return e=new Zu({}),{c(){le(e.$$.fragment)},m(s,i){oe(e,s,i),n=!0},i(s){n||(B(e.$$.fragment,s),n=!0)},o(s){G(e.$$.fragment,s),n=!1},d(s){ae(e,s)}}}function XT(t){let e,n;return e=new Zu({}),{c(){le(e.$$.fragment)},m(s,i){oe(e,s,i),n=!0},i(s){n||(B(e.$$.fragment,s),n=!0)},o(s){G(e.$$.fragment,s),n=!1},d(s){ae(e,s)}}}function JT(t){let e,n,s,i,r,o,a,l,u,f,h,d,m,_,v;return s=new Gl({props:{$$slots:{default:[WT]},$$scope:{ctx:t}}}),r=new bn({props:{path:"/agenda",$$slots:{default:[QT]},$$scope:{ctx:t}}}),a=new bn({props:{path:"/sinergias",$$slots:{default:[xT]},$$scope:{ctx:t}}}),u=new bn({props:{path:"/login",$$slots:{default:[YT]},$$scope:{ctx:t}}}),h=new bn({props:{path:"/registro",$$slots:{default:[XT]},$$scope:{ctx:t}}}),_=new jT({props:{"(orderTodos)":!0}}),{c(){e=p("body"),n=p("div"),le(s.$$.fragment),i=b(),le(r.$$.fragment),o=b(),le(a.$$.fragment),l=b(),le(u.$$.fragment),f=b(),le(h.$$.fragment),d=b(),m=p("div"),le(_.$$.fragment),g(n,"class","wrapper-grid svelte-mxk4x8"),g(m,"class",""),g(e,"class","svelte-mxk4x8")},m(y,E){k(y,e,E),c(e,n),oe(s,n,null),c(n,i),oe(r,n,null),c(n,o),oe(a,n,null),c(n,l),oe(u,n,null),c(n,f),oe(h,n,null),c(e,d),c(e,m),oe(_,m,null),v=!0},p(y,[E]){const C={};E&1&&(C.$$scope={dirty:E,ctx:y}),s.$set(C);const $={};E&1&&($.$$scope={dirty:E,ctx:y}),r.$set($);const D={};E&1&&(D.$$scope={dirty:E,ctx:y}),a.$set(D);const j={};E&1&&(j.$$scope={dirty:E,ctx:y}),u.$set(j);const N={};E&1&&(N.$$scope={dirty:E,ctx:y}),h.$set(N)},i(y){v||(B(s.$$.fragment,y),B(r.$$.fragment,y),B(a.$$.fragment,y),B(u.$$.fragment,y),B(h.$$.fragment,y),B(_.$$.fragment,y),v=!0)},o(y){G(s.$$.fragment,y),G(r.$$.fragment,y),G(a.$$.fragment,y),G(u.$$.fragment,y),G(h.$$.fragment,y),G(_.$$.fragment,y),v=!1},d(y){y&&w(e),ae(s),ae(r),ae(a),ae(u),ae(h),ae(_)}}}class ZT extends Xe{constructor(e){super(),Ye(this,e,null,JT,We,{})}}function eI(t){let e,n,s,i,r,o,a,l,u,f,h=In(t[2])+"",d,m,_,v,y,E,C,$,D,j,N,F,z,R,U,P,K,Y,ie;return{c(){e=p("div"),n=p("div"),s=p("div"),i=p("h5"),r=A(t[0]),o=b(),a=A(t[1]),l=b(),u=p("h5"),f=A("Alta "),d=A(h),m=b(),_=p("div"),v=p("p"),y=A(t[3]),E=b(),C=p("p"),$=A("tel: "),D=A(t[4]),j=A(" email: "),N=A(t[5]),F=b(),z=p("p"),R=A("Presupuesto "),U=A(t[6]),P=b(),K=p("p"),Y=A("Rango "),ie=A(t[7]),g(s,"class","namePerson svelte-1thiswe"),g(_,"class","nameDate svelte-1thiswe"),g(n,"class","contactCard"),g(e,"class","container contact svelte-1thiswe")},m(Q,W){k(Q,e,W),c(e,n),c(n,s),c(s,i),c(i,r),c(i,o),c(i,a),c(s,l),c(s,u),c(u,f),c(u,d),c(n,m),c(n,_),c(_,v),c(v,y),c(_,E),c(_,C),c(C,$),c(C,D),c(C,j),c(C,N),c(_,F),c(_,z),c(z,R),c(z,U),c(_,P),c(_,K),c(K,Y),c(K,ie)},p(Q,[W]){W&1&&re(r,Q[0]),W&2&&re(a,Q[1]),W&4&&h!==(h=In(Q[2])+"")&&re(d,h),W&8&&re(y,Q[3]),W&16&&re(D,Q[4]),W&32&&re(N,Q[5]),W&64&&re(U,Q[6]),W&128&&re(ie,Q[7])},i:he,o:he,d(Q){Q&&w(e)}}}function tI(t,e,n){let{name:s,lastname:i,createdAt:r,contactStage:o,telephon:a,email:l,budget:u,rangeProp:f}=e;return t.$$set=h=>{"name"in h&&n(0,s=h.name),"lastname"in h&&n(1,i=h.lastname),"createdAt"in h&&n(2,r=h.createdAt),"contactStage"in h&&n(3,o=h.contactStage),"telephon"in h&&n(4,a=h.telephon),"email"in h&&n(5,l=h.email),"budget"in h&&n(6,u=h.budget),"rangeProp"in h&&n(7,f=h.rangeProp)},[s,i,r,o,a,l,u,f]}class nI extends Xe{constructor(e){super(),Ye(this,e,tI,eI,We,{name:0,lastname:1,createdAt:2,contactStage:3,telephon:4,email:5,budget:6,rangeProp:7})}}function sI(t){let e,n,s,i;return{c(){e=p("div"),n=p("input"),g(n,"class","searchInput svelte-6bonih"),g(n,"type","text"),g(n,"id","search-field"),g(n,"placeholder","Enter Search Term"),g(n,"autocomplete","off"),g(e,"id","search-input-cont")},m(r,o){k(r,e,o),c(e,n),pe(n,t[0]),s||(i=[q(n,"input",t[2]),q(n,"input",t[1])],s=!0)},p(r,[o]){o&1&&n.value!==r[0]&&pe(n,r[0])},i:he,o:he,d(r){r&&w(e),s=!1,tt(i)}}}function iI(t,e,n){let{searchTerm:s}=e;function i(o){I_.call(this,t,o)}function r(){s=this.value,n(0,s)}return t.$$set=o=>{"searchTerm"in o&&n(0,s=o.searchTerm)},[s,i,r]}class ec extends Xe{constructor(e){super(),Ye(this,e,iI,sI,We,{searchTerm:0})}}async function r_(t,e){if(console.log("estas en la funcion"),t==="todoAdding"){const n=ss(tn,"todos");await lr(n,e)}else t==="todoUpdate"?await ba(is(tn,"todos",e.id),e):t==="todoDelete"&&await wa(is(tn,"todos",e.id));e=""}function rI(t){let e,n,s,i,r,o,a,l,u,f,h,d,m,_,v,y,E,C,$,D,j,N,F;return{c(){e=p("div"),s=b(),i=p("div"),r=p("div"),o=p("input"),a=b(),l=p("div"),u=p("input"),f=b(),h=p("input"),d=b(),m=p("div"),_=p("textarea"),v=b(),y=p("div"),E=p("button"),E.textContent="Guardar",C=b(),$=p("button"),$.textContent="Cancelar",g(e,"class","background svelte-1grddfb"),g(o,"type","text"),g(o,"class","inputTask svelte-1grddfb"),g(o,"placeholder","Agrega una Tarea o Cita"),g(u,"type","time"),g(u,"class","inputDate svelte-1grddfb"),g(h,"type","date"),g(h,"class","inputDate svelte-1grddfb"),g(l,"class","contDate"),g(_,"name","notes"),g(_,"cols","56"),g(_,"rows","5"),g(_,"placeholder","descripci\xF3n"),g(E,"class","btnShedule svelte-1grddfb"),g($,"class","btnShedule svelte-1grddfb"),g(i,"class","pop-up svelte-1grddfb")},m(z,R){k(z,e,R),k(z,s,R),k(z,i,R),c(i,r),c(r,o),pe(o,t[0]),c(i,a),c(i,l),c(l,u),pe(u,t[1].timeTask),c(l,f),c(l,h),pe(h,t[1].endTask),c(i,d),c(i,m),c(m,_),pe(_,t[1].notes),c(i,v),c(i,y),c(y,E),c(y,C),c(y,$),j=!0,N||(F=[q(window,"keydown",t[4]),q(e,"click",t[2]),q(o,"input",t[5]),q(u,"input",t[6]),q(h,"input",t[7]),q(_,"input",t[8]),q(E,"click",t[3]),q($,"click",t[2])],N=!0)},p(z,[R]){R&1&&o.value!==z[0]&&pe(o,z[0]),R&2&&pe(u,z[1].timeTask),R&2&&pe(h,z[1].endTask),R&2&&pe(_,z[1].notes)},i(z){j||(et(()=>{n||(n=En(e,Oo,{},!0)),n.run(1)}),et(()=>{D||(D=En(i,$o,{},!0)),D.run(1)}),j=!0)},o(z){n||(n=En(e,Oo,{},!1)),n.run(0),D||(D=En(i,$o,{},!1)),D.run(0),j=!1},d(z){z&&w(e),z&&n&&n.end(),z&&w(s),z&&w(i),z&&D&&D.end(),N=!1,tt(F)}}}function oI(t,e,n){let s,i,r;je(t,Rn,$=>n(10,s=$)),je(t,yt,$=>n(11,i=$)),je(t,ot,$=>n(12,r=$));const o=Nd();let a=`${r.name} ${r.lastname}`,l=[],u=[],f=new Date,h=f.getTime();console.log(h),l={task:"",isComplete:"",createdAt:"",timeTask:"",notes:"",user:""};function d(){o("closeIt"),at(yt,i="contSelect",i),at(Rn,s="",s)}const m=async()=>{at(yt,i="todoAdding",i),u=a,n(1,l={...l,endTask:h}),at(Rn,s={...l,task:u},s),r_(i,s),console.log(s),d()},_=$=>{$.key==="Enter"&&m()};function v(){a=this.value,n(0,a)}function y(){l.timeTask=this.value,n(1,l)}function E(){l.endTask=this.value,n(1,l)}function C(){l.notes=this.value,n(1,l)}return[a,l,d,m,_,v,y,E,C]}class aI extends Xe{constructor(e){super(),Ye(this,e,oI,rI,We,{})}}function lI(t){let e,n,s,i,r,o,a,l,u,f,h,d,m,_,v,y,E,C,$,D,j,N,F,z,R,U,P,K,Y,ie,Q,W,te,x,S,V,O,L,ue,de;return{c(){e=p("main"),n=p("section"),s=p("figure"),i=p("img"),o=b(),a=p("div"),l=A(t[1]),u=b(),f=p("figcaption"),h=A(t[2]),d=b(),m=p("section"),_=p("section"),v=p("div"),y=p("div"),E=A(t[3]),C=A(" Rec\xE1maras"),$=b(),D=p("div"),j=A(t[4]),N=A(" Ba\xF1os"),F=b(),z=p("div"),R=A(t[5]),U=A(" Estacionamientos"),P=b(),K=p("div"),Y=A(t[6]),ie=A(" m2 de Contruccion"),Q=b(),W=p("div"),te=A(t[7]),x=A(" m2 de Terreno"),S=b(),V=p("br"),O=b(),L=p("div"),ue=A("Precio $: "),de=A(t[8]),St(i.src,r=t[0])||g(i,"src",r),g(i,"alt",t[1]),g(i,"class","bkcover svelte-1w1p4eb"),g(a,"class","language svelte-1w1p4eb"),g(f,"class","svelte-1w1p4eb"),g(s,"class","bkcont svelte-1w1p4eb"),g(n,"class","book-top-info svelte-1w1p4eb"),g(v,"class","buy-options-cont svelte-1w1p4eb"),g(_,"class","from-pariyatti available-at svelte-1w1p4eb"),g(m,"class","book-bottom-links svelte-1w1p4eb")},m(De,Ce){k(De,e,Ce),c(e,n),c(n,s),c(s,i),c(s,o),c(s,a),c(a,l),c(s,u),c(s,f),c(f,h),c(e,d),c(e,m),c(m,_),c(_,v),c(v,y),c(y,E),c(y,C),c(v,$),c(v,D),c(D,j),c(D,N),c(v,F),c(v,z),c(z,R),c(z,U),c(v,P),c(v,K),c(K,Y),c(K,ie),c(v,Q),c(v,W),c(W,te),c(W,x),c(v,S),c(v,V),c(v,O),c(v,L),c(L,ue),c(L,de)},p(De,[Ce]){Ce&1&&!St(i.src,r=De[0])&&g(i,"src",r),Ce&2&&g(i,"alt",De[1]),Ce&2&&re(l,De[1]),Ce&4&&re(h,De[2]),Ce&8&&re(E,De[3]),Ce&16&&re(j,De[4]),Ce&32&&re(R,De[5]),Ce&64&&re(Y,De[6]),Ce&128&&re(te,De[7]),Ce&256&&re(de,De[8])},i:he,o:he,d(De){De&&w(e)}}}function uI(t,e,n){let{urlImage:s,claveEB:i,nameProperty:r,beds:o,bathroom:a,park:l,areaBuilding:u,areaTotal:f,price:h}=e;return t.$$set=d=>{"urlImage"in d&&n(0,s=d.urlImage),"claveEB"in d&&n(1,i=d.claveEB),"nameProperty"in d&&n(2,r=d.nameProperty),"beds"in d&&n(3,o=d.beds),"bathroom"in d&&n(4,a=d.bathroom),"park"in d&&n(5,l=d.park),"areaBuilding"in d&&n(6,u=d.areaBuilding),"areaTotal"in d&&n(7,f=d.areaTotal),"price"in d&&n(8,h=d.price)},[s,i,r,o,a,l,u,f,h]}class o_ extends Xe{constructor(e){super(),Ye(this,e,uI,lI,We,{urlImage:0,claveEB:1,nameProperty:2,beds:3,bathroom:4,park:5,areaBuilding:6,areaTotal:7,price:8})}}let Ds;function a_(t){return t<=1e6?Ds="PRM":t<=25e5?Ds="SGN":t<=5e6?Ds="TRC":t<=8e6?Ds="CRT":t<=12e6?Ds="QNT":t>12e6&&(Ds="SXT"),Ds}let Ya,Xa;function cI(t){let e=Vn;return e=e.filter(n=>n.selectTP===t.selecTP),console.log("filtraste por tipo de propiedad",e),t.numBeds>0&&(e=e.filter(n=>n.beds>=t.numBeds)),t.numBaths>0&&(e=e.filter(n=>n.bathroom>=t.numBaths)),t.numParks>0&&(e=e.filter(n=>n.park>=t.numParks)),console.log("Por caracteristicas",e),t.budget?(console.log("filtraste por budget"),Ya=t.budget*.7,Xa=t.budget*1.1,console.log(Ya,Xa),e=e.filter(n=>n.price>=Ya&&n.price<=Xa)):(console.log("filtraste por rango"),e=e.filter(n=>a_(n.price)===t.rangeProp)),console.log("filtraste presupuesto",e),t.locaProperty.length>0&&(e=e.filter(n=>t.locaProperty.some(s=>n.locaProperty.includes(s)))),console.log("Filtraste por Ubicacion",e),t.tagsProperty.length>0&&(e=e.filter(n=>t.tagsProperty.every(s=>n.tagsProperty.includes(s)))),console.log("Filtraste por localizacion",e),e.length===0||""+e.length,Ol.set(e)}const Bo=["Casa","Terreno","Departamento","Casa o Departamento","Local Comercial","Casa de Campo"],xh=["Lona en Propiedad","Propiedades.com","NocNok","Mercado Libre","Vivanuncios","Lamudi","Inmuebles24","Referido","Otro"],Yh=["Comprador","Arrendador","Propietario","Agente Asociado","Agente Inmobiliario","Constructor","Inversionista","Otro"],Xh=["Contado","Credito Hipotecario","INFONAVIT","COFINAVIT","FOVISSSTE","ALIADOS","Conyugal"],Jh=["Venta","Renta"],Zh=["Rango","PRM","SGN","TRC","CRT","QNT","SXT","SPT"],jo=[0,1,2,3,4,5],Pn=[0,1,2,3,4],ef=["Due\xF1o","Familiar","Inmobiliaria","Conocido"];function hI(t){let e,n,s,i,r,o,a,l,u,f,h,d,m,_,v,y,E,C,$,D,j,N,F,z,R,U,P,K,Y,ie,Q,W,te,x,S,V,O,L,ue,de,De,Ce,nt;return{c(){e=p("div"),n=p("div"),s=p("label"),i=A(`/Norte\\\r
			`),r=p("input"),o=b(),a=p("div"),l=p("label"),u=A(`/Noroeste\r
			`),f=p("input"),h=b(),d=p("label"),m=p("input"),_=A("NorEste\\"),v=b(),y=p("div"),E=p("label"),C=A(`/Oeste\r
			`),$=p("input"),D=b(),j=p("label"),N=A(`Centro Norte\r
			`),F=p("input"),z=b(),R=p("label"),U=p("input"),P=A("Este\\"),K=b(),Y=p("div"),ie=p("label"),Q=A(`Centro Sur\r
			`),W=p("input"),te=b(),x=p("div"),S=p("label"),V=A(`/SurOeste\r
			`),O=p("input"),L=b(),ue=p("label"),de=p("input"),De=A("SurEste\\"),r.__value="Norte",r.value=r.__value,g(r,"id","north"),g(r,"type","checkbox"),t[2][0].push(r),g(s,"for","north"),g(n,"class","filterLocationOne svelte-1lvjb5r"),f.__value="Noroeste",f.value=f.__value,g(f,"id","northwest"),g(f,"type","checkbox"),t[2][0].push(f),g(l,"for","northwest"),m.__value="Noreste",m.value=m.__value,g(m,"id","northeast"),g(m,"type","checkbox"),t[2][0].push(m),g(d,"for","northeast"),g(a,"class","filterLocationOne svelte-1lvjb5r"),$.__value="Oeste",$.value=$.__value,g($,"id","west"),g($,"type","checkbox"),t[2][0].push($),g(E,"for","west"),F.__value="Centronorte",F.value=F.__value,g(F,"id","townNorth"),g(F,"type","checkbox"),t[2][0].push(F),g(j,"for","townNorth"),U.__value="Este",U.value=U.__value,g(U,"id","east"),g(U,"type","checkbox"),t[2][0].push(U),g(R,"for","east"),g(y,"class","filterLocationOne svelte-1lvjb5r"),W.__value="CentroSur",W.value=W.__value,g(W,"id","townsouth"),g(W,"type","checkbox"),t[2][0].push(W),g(ie,"for","townsouth"),g(Y,"class","filterLocationOne svelte-1lvjb5r"),O.__value="SurOeste",O.value=O.__value,g(O,"id","southwest"),g(O,"type","checkbox"),t[2][0].push(O),g(S,"for","southwest"),de.__value="SurEste",de.value=de.__value,g(de,"id","southeast"),g(de,"type","checkbox"),t[2][0].push(de),g(ue,"for","southeast"),g(x,"class","filterLocationOne svelte-1lvjb5r"),g(e,"class","containerUbication svelte-1lvjb5r")},m(be,Ve){k(be,e,Ve),c(e,n),c(n,s),c(s,i),c(s,r),r.checked=~t[0].indexOf(r.__value),c(e,o),c(e,a),c(a,l),c(l,u),c(l,f),f.checked=~t[0].indexOf(f.__value),c(a,h),c(a,d),c(d,m),m.checked=~t[0].indexOf(m.__value),c(d,_),c(e,v),c(e,y),c(y,E),c(E,C),c(E,$),$.checked=~t[0].indexOf($.__value),c(y,D),c(y,j),c(j,N),c(j,F),F.checked=~t[0].indexOf(F.__value),c(y,z),c(y,R),c(R,U),U.checked=~t[0].indexOf(U.__value),c(R,P),c(e,K),c(e,Y),c(Y,ie),c(ie,Q),c(ie,W),W.checked=~t[0].indexOf(W.__value),c(e,te),c(e,x),c(x,S),c(S,V),c(S,O),O.checked=~t[0].indexOf(O.__value),c(x,L),c(x,ue),c(ue,de),de.checked=~t[0].indexOf(de.__value),c(ue,De),Ce||(nt=[q(r,"change",t[1]),q(f,"change",t[3]),q(m,"change",t[4]),q($,"change",t[5]),q(F,"change",t[6]),q(U,"change",t[7]),q(W,"change",t[8]),q(O,"change",t[9]),q(de,"change",t[10])],Ce=!0)},p(be,[Ve]){Ve&1&&(r.checked=~be[0].indexOf(r.__value)),Ve&1&&(f.checked=~be[0].indexOf(f.__value)),Ve&1&&(m.checked=~be[0].indexOf(m.__value)),Ve&1&&($.checked=~be[0].indexOf($.__value)),Ve&1&&(F.checked=~be[0].indexOf(F.__value)),Ve&1&&(U.checked=~be[0].indexOf(U.__value)),Ve&1&&(W.checked=~be[0].indexOf(W.__value)),Ve&1&&(O.checked=~be[0].indexOf(O.__value)),Ve&1&&(de.checked=~be[0].indexOf(de.__value))},i:he,o:he,d(be){be&&w(e),t[2][0].splice(t[2][0].indexOf(r),1),t[2][0].splice(t[2][0].indexOf(f),1),t[2][0].splice(t[2][0].indexOf(m),1),t[2][0].splice(t[2][0].indexOf($),1),t[2][0].splice(t[2][0].indexOf(F),1),t[2][0].splice(t[2][0].indexOf(U),1),t[2][0].splice(t[2][0].indexOf(W),1),t[2][0].splice(t[2][0].indexOf(O),1),t[2][0].splice(t[2][0].indexOf(de),1),Ce=!1,tt(nt)}}}function fI(t,e,n){let{ubication:s}=e;const i=[[]];function r(){s=Yt(i[0],this.__value,this.checked),n(0,s)}function o(){s=Yt(i[0],this.__value,this.checked),n(0,s)}function a(){s=Yt(i[0],this.__value,this.checked),n(0,s)}function l(){s=Yt(i[0],this.__value,this.checked),n(0,s)}function u(){s=Yt(i[0],this.__value,this.checked),n(0,s)}function f(){s=Yt(i[0],this.__value,this.checked),n(0,s)}function h(){s=Yt(i[0],this.__value,this.checked),n(0,s)}function d(){s=Yt(i[0],this.__value,this.checked),n(0,s)}function m(){s=Yt(i[0],this.__value,this.checked),n(0,s)}return t.$$set=_=>{"ubication"in _&&n(0,s=_.ubication)},[s,r,i,o,a,l,u,f,h,d,m]}class l_ extends Xe{constructor(e){super(),Ye(this,e,fI,hI,We,{ubication:0})}}function dI(t){let e,n,s,i,r,o,a,l,u,f,h,d,m,_,v,y,E,C,$,D,j,N,F,z,R,U,P,K,Y,ie,Q,W,te;return{c(){e=p("section"),n=p("div"),s=p("label"),i=A(`Fracc. Privado\r
		   `),r=p("input"),o=b(),a=p("label"),l=A(`Frente a Parque\r
         `),u=p("input"),f=b(),h=p("label"),d=A(`Una Planta\r
         `),m=p("input"),_=b(),v=p("div"),y=p("label"),E=A(`Recamara en P.B.\r
		`),C=p("input"),$=b(),D=p("label"),j=A(`Patio Amplio\r
   `),N=p("input"),F=b(),z=p("label"),R=A(`Lista para Habitarse\r
   `),U=p("input"),P=b(),K=p("div"),Y=p("label"),ie=A(`Nueva\r
		`),Q=p("input"),g(r,"type","checkbox"),r.__value="Fracc. Privado",r.value=r.__value,t[2][0].push(r),g(u,"type","checkbox"),u.__value="Frente a Parque",u.value=u.__value,t[2][0].push(u),g(m,"type","checkbox"),m.__value="Una Planta",m.value=m.__value,t[2][0].push(m),g(n,"class","svelte-1b9bvt0"),g(C,"type","checkbox"),C.__value="Recamara en PB",C.value=C.__value,t[2][0].push(C),g(N,"type","checkbox"),N.__value="Patio Amplio",N.value=N.__value,t[2][0].push(N),g(U,"type","checkbox"),U.__value="Lista Habitarse",U.value=U.__value,t[2][0].push(U),g(v,"class","svelte-1b9bvt0"),g(Q,"type","checkbox"),Q.__value="Nueva",Q.value=Q.__value,t[2][0].push(Q),g(K,"class","svelte-1b9bvt0"),g(e,"class","svelte-1b9bvt0")},m(x,S){k(x,e,S),c(e,n),c(n,s),c(s,i),c(s,r),r.checked=~t[0].indexOf(r.__value),c(n,o),c(n,a),c(a,l),c(a,u),u.checked=~t[0].indexOf(u.__value),c(n,f),c(n,h),c(h,d),c(h,m),m.checked=~t[0].indexOf(m.__value),c(e,_),c(e,v),c(v,y),c(y,E),c(y,C),C.checked=~t[0].indexOf(C.__value),c(v,$),c(v,D),c(D,j),c(D,N),N.checked=~t[0].indexOf(N.__value),c(v,F),c(v,z),c(z,R),c(z,U),U.checked=~t[0].indexOf(U.__value),c(e,P),c(e,K),c(K,Y),c(Y,ie),c(Y,Q),Q.checked=~t[0].indexOf(Q.__value),W||(te=[q(r,"change",t[1]),q(u,"change",t[3]),q(m,"change",t[4]),q(C,"change",t[5]),q(N,"change",t[6]),q(U,"change",t[7]),q(Q,"change",t[8])],W=!0)},p(x,[S]){S&1&&(r.checked=~x[0].indexOf(r.__value)),S&1&&(u.checked=~x[0].indexOf(u.__value)),S&1&&(m.checked=~x[0].indexOf(m.__value)),S&1&&(C.checked=~x[0].indexOf(C.__value)),S&1&&(N.checked=~x[0].indexOf(N.__value)),S&1&&(U.checked=~x[0].indexOf(U.__value)),S&1&&(Q.checked=~x[0].indexOf(Q.__value))},i:he,o:he,d(x){x&&w(e),t[2][0].splice(t[2][0].indexOf(r),1),t[2][0].splice(t[2][0].indexOf(u),1),t[2][0].splice(t[2][0].indexOf(m),1),t[2][0].splice(t[2][0].indexOf(C),1),t[2][0].splice(t[2][0].indexOf(N),1),t[2][0].splice(t[2][0].indexOf(U),1),t[2][0].splice(t[2][0].indexOf(Q),1),W=!1,tt(te)}}}function pI(t,e,n){let{tag:s}=e;const i=[[]];function r(){s=Yt(i[0],this.__value,this.checked),n(0,s)}function o(){s=Yt(i[0],this.__value,this.checked),n(0,s)}function a(){s=Yt(i[0],this.__value,this.checked),n(0,s)}function l(){s=Yt(i[0],this.__value,this.checked),n(0,s)}function u(){s=Yt(i[0],this.__value,this.checked),n(0,s)}function f(){s=Yt(i[0],this.__value,this.checked),n(0,s)}function h(){s=Yt(i[0],this.__value,this.checked),n(0,s)}return t.$$set=d=>{"tag"in d&&n(0,s=d.tag)},[s,r,i,o,a,l,u,f,h]}class u_ extends Xe{constructor(e){super(),Ye(this,e,pI,dI,We,{tag:0})}}function tf(t,e,n){const s=t.slice();return s[24]=e[n],s}function nf(t,e,n){const s=t.slice();return s[27]=e[n],s}function sf(t,e,n){const s=t.slice();return s[30]=e[n],s}function rf(t,e,n){const s=t.slice();return s[33]=e[n],s}function of(t,e,n){const s=t.slice();return s[36]=e[n],s}function af(t,e,n){const s=t.slice();return s[39]=e[n],s}function lf(t,e,n){const s=t.slice();return s[42]=e[n],s}function uf(t,e,n){const s=t.slice();return s[45]=e[n],s}function cf(t,e,n){const s=t.slice();return s[48]=e[n],s}function hf(t,e,n){const s=t.slice();return s[51]=e[n],s}function mI(t){let e,n=In(t[2].createdAt)+"",s,i,r;return{c(){e=p("h3"),s=A(n),g(e,"class","dataInput svelte-1myljlf")},m(o,a){k(o,e,a),c(e,s),i||(r=q(e,"dblclick",t[3]),i=!0)},p(o,a){a[0]&4&&n!==(n=In(o[2].createdAt)+"")&&re(s,n)},d(o){o&&w(e),i=!1,r()}}}function gI(t){let e,n,s;return{c(){e=p("input"),g(e,"class","dataInput svelte-1myljlf"),g(e,"type","date")},m(i,r){k(i,e,r),pe(e,t[2].createdAt),n||(s=q(e,"input",t[4]),n=!0)},p(i,r){r[0]&5&&pe(e,i[2].createdAt)},d(i){i&&w(e),n=!1,s()}}}function ff(t){let e,n=t[51]+"",s,i;return{c(){e=p("option"),s=A(n),g(e,"class","dataInput svelte-1myljlf"),g(e,"type","checkbox"),e.__value=i=t[51],e.value=e.__value},m(r,o){k(r,e,o),c(e,s)},p(r,o){o[0]&1&&n!==(n=r[51]+"")&&re(s,n),o[0]&1&&i!==(i=r[51])&&(e.__value=i,e.value=e.__value)},d(r){r&&w(e)}}}function df(t){let e,n=t[48]+"",s;return{c(){e=p("option"),s=A(n),g(e,"type","checkbox"),e.__value=t[48],e.value=e.__value},m(i,r){k(i,e,r),c(e,s)},p:he,d(i){i&&w(e)}}}function pf(t){let e,n=t[45]+"",s;return{c(){e=p("option"),s=A(n),g(e,"type","checkbox"),e.__value=t[45],e.value=e.__value},m(i,r){k(i,e,r),c(e,s)},p:he,d(i){i&&w(e)}}}function mf(t){let e,n=t[42]+"",s;return{c(){e=p("option"),s=A(n),g(e,"type","checkbox"),e.__value=t[42],e.value=e.__value},m(i,r){k(i,e,r),c(e,s)},p:he,d(i){i&&w(e)}}}function gf(t){let e,n=t[39]+"",s;return{c(){e=p("option"),s=A(n),g(e,"type","checkbox"),e.__value=t[39],e.value=e.__value},m(i,r){k(i,e,r),c(e,s)},p:he,d(i){i&&w(e)}}}function _f(t){let e,n=t[36]+"",s;return{c(){e=p("option"),s=A(n),g(e,"type","checkbox"),e.__value=t[36],e.value=e.__value},m(i,r){k(i,e,r),c(e,s)},p:he,d(i){i&&w(e)}}}function vf(t){let e,n=t[33]+"",s,i;return{c(){e=p("option"),s=A(n),i=A(" Rec\xE1maras"),g(e,"type","checkbox"),e.__value=t[33],e.value=e.__value},m(r,o){k(r,e,o),c(e,s),c(e,i)},p:he,d(r){r&&w(e)}}}function yf(t){let e,n=t[30]+"",s,i;return{c(){e=p("option"),s=A(n),i=A(" ba\xF1os"),g(e,"type","checkbox"),e.__value=t[30],e.value=e.__value},m(r,o){k(r,e,o),c(e,s),c(e,i)},p:he,d(r){r&&w(e)}}}function bf(t){let e,n=t[27]+"",s,i;return{c(){e=p("option"),s=A(n),i=A(" Medios ba\xF1os"),g(e,"type","checkbox"),e.__value=t[27],e.value=e.__value},m(r,o){k(r,e,o),c(e,s),c(e,i)},p:he,d(r){r&&w(e)}}}function wf(t){let e,n=t[24]+"",s,i;return{c(){e=p("option"),s=A(n),i=A(" Estacionamientos"),g(e,"type","checkbox"),e.__value=t[24],e.value=e.__value},m(r,o){k(r,e,o),c(e,s),c(e,i)},p:he,d(r){r&&w(e)}}}function _I(t){let e,n,s,i,r,o,a,l,u,f,h,d,m,_,v,y,E,C,$,D,j,N,F,z,R,U,P,K,Y,ie,Q,W,te,x,S,V,O,L,ue,de,De,Ce,nt,be,Ve,Be,bt,H,ne,ft,dn,Je,gt,It,pn,st,wt,Nt,Ot,At;function $t(I,ee){return I[1]?gI:mI}let ut=$t(t),dt=ut(t),He=t[0],Le=[];for(let I=0;I<He.length;I+=1)Le[I]=ff(hf(t,He,I));let Ct=Yh,Ne=[];for(let I=0;I<Ct.length;I+=1)Ne[I]=df(cf(t,Ct,I));let sn=xh,Qe=[];for(let I=0;I<sn.length;I+=1)Qe[I]=pf(uf(t,sn,I));let it=Xh,ct=[];for(let I=0;I<it.length;I+=1)ct[I]=mf(lf(t,it,I));let Wt=Bo,xe=[];for(let I=0;I<Wt.length;I+=1)xe[I]=gf(af(t,Wt,I));let Qt=Zh,ht=[];for(let I=0;I<Qt.length;I+=1)ht[I]=_f(of(t,Qt,I));let kt=jo,we=[];for(let I=0;I<kt.length;I+=1)we[I]=vf(rf(t,kt,I));let Et=Pn,ke=[];for(let I=0;I<Et.length;I+=1)ke[I]=yf(sf(t,Et,I));let Te=Pn,fe=[];for(let I=0;I<Te.length;I+=1)fe[I]=bf(nf(t,Te,I));let rn=Pn,Me=[];for(let I=0;I<rn.length;I+=1)Me[I]=wf(tf(t,rn,I));function $n(I){t[21](I)}let Dt={};t[2].locaProperty!==void 0&&(Dt.ubication=t[2].locaProperty),gt=new l_({props:Dt}),Xn.push(()=>Fs(gt,"ubication",$n));function Dn(I){t[22](I)}let _t={};return t[2].tagsProperty!==void 0&&(_t.tag=t[2].tagsProperty),st=new u_({props:_t}),Xn.push(()=>Fs(st,"tag",Dn)),{c(){e=p("h1"),e.textContent="Alta Contactos",n=b(),s=p("div"),i=p("div"),dt.c(),r=b(),o=p("div"),a=p("input"),l=b(),u=p("input"),f=b(),h=p("div"),d=p("input"),m=b(),_=p("input"),v=b(),y=p("div"),E=p("select"),C=p("option"),C.textContent="Propiedad de Contacto";for(let I=0;I<Le.length;I+=1)Le[I].c();$=b(),D=p("input"),j=b(),N=p("div"),F=p("input"),z=b(),R=p("select"),U=p("option"),U.textContent="Tipo de Contacto";for(let I=0;I<Ne.length;I+=1)Ne[I].c();P=b(),K=p("select"),Y=p("option"),Y.textContent="Modo de Contacto";for(let I=0;I<Qe.length;I+=1)Qe[I].c();ie=b(),Q=p("select"),W=p("option"),W.textContent="Modo de Pago";for(let I=0;I<ct.length;I+=1)ct[I].c();te=b(),x=p("select"),S=p("option"),S.textContent="Tipo de Propiedad";for(let I=0;I<xe.length;I+=1)xe[I].c();V=b(),O=p("select"),L=p("option"),L.textContent="Rango de Busqueda";for(let I=0;I<ht.length;I+=1)ht[I].c();ue=b(),de=p("select"),De=p("option"),De.textContent="# Rec\xE1maras";for(let I=0;I<we.length;I+=1)we[I].c();Ce=b(),nt=p("select"),be=p("option"),be.textContent="# Ba\xF1os";for(let I=0;I<ke.length;I+=1)ke[I].c();Ve=b(),Be=p("select"),bt=p("option"),bt.textContent="# Medios Ba\xF1os";for(let I=0;I<fe.length;I+=1)fe[I].c();H=b(),ne=p("select"),ft=p("option"),ft.textContent="# Estacionamientos";for(let I=0;I<Me.length;I+=1)Me[I].c();dn=b(),Je=p("div"),le(gt.$$.fragment),pn=b(),le(st.$$.fragment),g(e,"class","sectionTitle"),g(a,"class","dataInput svelte-1myljlf"),g(a,"type","text"),g(a,"placeholder","Nombre"),g(u,"class","dataInput svelte-1myljlf"),g(u,"type","text"),g(u,"placeholder","Apellido"),g(o,"class","contactInput"),g(d,"class","dataInput svelte-1myljlf"),g(d,"type","tel"),g(d,"placeholder","tel\xE9fono"),g(_,"class","dataInput svelte-1myljlf"),g(_,"type","email"),g(_,"placeholder","email"),g(h,"class","contactInput"),g(s,"class",""),C.disabled=!0,C.selected=!0,C.__value="",C.value=C.__value,g(E,"class","dataInput svelte-1myljlf"),g(E,"id","selTP"),g(E,"name","selTP"),t[2].propCont===void 0&&et(()=>t[9].call(E)),g(D,"class","dataInput svelte-1myljlf"),g(D,"type","number"),g(D,"placeholder","Presupuesto"),g(y,"class","col"),g(F,"class","textareaInput svelte-1myljlf"),g(F,"type","textarea"),g(F,"placeholder","Comentarios"),g(N,"class","col"),U.disabled=!0,U.selected=!0,U.__value="",U.value=U.__value,g(R,"class","othersInput svelte-1myljlf"),t[2].typeContact===void 0&&et(()=>t[12].call(R)),Y.disabled=!0,Y.selected=!0,Y.__value="",Y.value=Y.__value,g(K,"class","othersInput svelte-1myljlf"),t[2].selecMC===void 0&&et(()=>t[13].call(K)),W.disabled=!0,W.selected=!0,W.__value="",W.value=W.__value,g(Q,"class","othersInput svelte-1myljlf"),t[2].modePay===void 0&&et(()=>t[14].call(Q)),S.disabled=!0,S.selected=!0,S.__value="",S.value=S.__value,g(x,"class","othersInput svelte-1myljlf"),g(x,"id","selTP"),g(x,"name","selTP"),t[2].selecTP===void 0&&et(()=>t[15].call(x)),L.disabled=!0,L.selected=!0,L.__value="",L.value=L.__value,g(O,"class","othersInput svelte-1myljlf"),g(O,"id","ranges"),g(O,"name","ranges"),t[2].rangeProp===void 0&&et(()=>t[16].call(O)),De.disabled=!0,De.selected=!0,De.__value="",De.value=De.__value,g(de,"class","othersInput svelte-1myljlf"),t[2].numBeds===void 0&&et(()=>t[17].call(de)),be.disabled=!0,be.selected=!0,be.__value="",be.value=be.__value,g(nt,"class","othersInput svelte-1myljlf"),t[2].numBaths===void 0&&et(()=>t[18].call(nt)),bt.disabled=!0,bt.selected=!0,bt.__value="",bt.value=bt.__value,g(Be,"class","othersInput svelte-1myljlf"),t[2].halfBathroom===void 0&&et(()=>t[19].call(Be)),ft.disabled=!0,ft.selected=!0,ft.__value="",ft.value=ft.__value,g(ne,"class","othersInput svelte-1myljlf"),t[2].numParks===void 0&&et(()=>t[20].call(ne)),g(Je,"class","ubiTags svelte-1myljlf")},m(I,ee){k(I,e,ee),k(I,n,ee),k(I,s,ee),c(s,i),dt.m(i,null),c(s,r),c(s,o),c(o,a),pe(a,t[2].name),c(o,l),c(o,u),pe(u,t[2].lastname),c(s,f),c(s,h),c(h,d),pe(d,t[2].telephon),c(h,m),c(h,_),pe(_,t[2].email),k(I,v,ee),k(I,y,ee),c(y,E),c(E,C);for(let ge=0;ge<Le.length;ge+=1)Le[ge].m(E,null);Fe(E,t[2].propCont),c(y,$),c(y,D),pe(D,t[2].budget),k(I,j,ee),k(I,N,ee),c(N,F),pe(F,t[2].comContact),k(I,z,ee),k(I,R,ee),c(R,U);for(let ge=0;ge<Ne.length;ge+=1)Ne[ge].m(R,null);Fe(R,t[2].typeContact),k(I,P,ee),k(I,K,ee),c(K,Y);for(let ge=0;ge<Qe.length;ge+=1)Qe[ge].m(K,null);Fe(K,t[2].selecMC),k(I,ie,ee),k(I,Q,ee),c(Q,W);for(let ge=0;ge<ct.length;ge+=1)ct[ge].m(Q,null);Fe(Q,t[2].modePay),k(I,te,ee),k(I,x,ee),c(x,S);for(let ge=0;ge<xe.length;ge+=1)xe[ge].m(x,null);Fe(x,t[2].selecTP),k(I,V,ee),k(I,O,ee),c(O,L);for(let ge=0;ge<ht.length;ge+=1)ht[ge].m(O,null);Fe(O,t[2].rangeProp),k(I,ue,ee),k(I,de,ee),c(de,De);for(let ge=0;ge<we.length;ge+=1)we[ge].m(de,null);Fe(de,t[2].numBeds),k(I,Ce,ee),k(I,nt,ee),c(nt,be);for(let ge=0;ge<ke.length;ge+=1)ke[ge].m(nt,null);Fe(nt,t[2].numBaths),k(I,Ve,ee),k(I,Be,ee),c(Be,bt);for(let ge=0;ge<fe.length;ge+=1)fe[ge].m(Be,null);Fe(Be,t[2].halfBathroom),k(I,H,ee),k(I,ne,ee),c(ne,ft);for(let ge=0;ge<Me.length;ge+=1)Me[ge].m(ne,null);Fe(ne,t[2].numParks),k(I,dn,ee),k(I,Je,ee),oe(gt,Je,null),c(Je,pn),oe(st,Je,null),Nt=!0,Ot||(At=[q(a,"input",t[5]),q(u,"input",t[6]),q(d,"input",t[7]),q(_,"input",t[8]),q(E,"change",t[9]),q(D,"input",t[10]),q(F,"input",t[11]),q(R,"change",t[12]),q(K,"change",t[13]),q(Q,"change",t[14]),q(x,"change",t[15]),q(O,"change",t[16]),q(de,"change",t[17]),q(nt,"change",t[18]),q(Be,"change",t[19]),q(ne,"change",t[20])],Ot=!0)},p(I,ee){if(ut===(ut=$t(I))&&dt?dt.p(I,ee):(dt.d(1),dt=ut(I),dt&&(dt.c(),dt.m(i,null))),ee[0]&5&&a.value!==I[2].name&&pe(a,I[2].name),ee[0]&5&&u.value!==I[2].lastname&&pe(u,I[2].lastname),ee[0]&5&&pe(d,I[2].telephon),ee[0]&5&&_.value!==I[2].email&&pe(_,I[2].email),ee[0]&1){He=I[0];let M;for(M=0;M<He.length;M+=1){const Re=hf(I,He,M);Le[M]?Le[M].p(Re,ee):(Le[M]=ff(Re),Le[M].c(),Le[M].m(E,null))}for(;M<Le.length;M+=1)Le[M].d(1);Le.length=He.length}if(ee[0]&5&&Fe(E,I[2].propCont),ee[0]&5&&ps(D.value)!==I[2].budget&&pe(D,I[2].budget),ee[0]&5&&pe(F,I[2].comContact),ee&0){Ct=Yh;let M;for(M=0;M<Ct.length;M+=1){const Re=cf(I,Ct,M);Ne[M]?Ne[M].p(Re,ee):(Ne[M]=df(Re),Ne[M].c(),Ne[M].m(R,null))}for(;M<Ne.length;M+=1)Ne[M].d(1);Ne.length=Ct.length}if(ee[0]&5&&Fe(R,I[2].typeContact),ee&0){sn=xh;let M;for(M=0;M<sn.length;M+=1){const Re=uf(I,sn,M);Qe[M]?Qe[M].p(Re,ee):(Qe[M]=pf(Re),Qe[M].c(),Qe[M].m(K,null))}for(;M<Qe.length;M+=1)Qe[M].d(1);Qe.length=sn.length}if(ee[0]&5&&Fe(K,I[2].selecMC),ee&0){it=Xh;let M;for(M=0;M<it.length;M+=1){const Re=lf(I,it,M);ct[M]?ct[M].p(Re,ee):(ct[M]=mf(Re),ct[M].c(),ct[M].m(Q,null))}for(;M<ct.length;M+=1)ct[M].d(1);ct.length=it.length}if(ee[0]&5&&Fe(Q,I[2].modePay),ee&0){Wt=Bo;let M;for(M=0;M<Wt.length;M+=1){const Re=af(I,Wt,M);xe[M]?xe[M].p(Re,ee):(xe[M]=gf(Re),xe[M].c(),xe[M].m(x,null))}for(;M<xe.length;M+=1)xe[M].d(1);xe.length=Wt.length}if(ee[0]&5&&Fe(x,I[2].selecTP),ee&0){Qt=Zh;let M;for(M=0;M<Qt.length;M+=1){const Re=of(I,Qt,M);ht[M]?ht[M].p(Re,ee):(ht[M]=_f(Re),ht[M].c(),ht[M].m(O,null))}for(;M<ht.length;M+=1)ht[M].d(1);ht.length=Qt.length}if(ee[0]&5&&Fe(O,I[2].rangeProp),ee&0){kt=jo;let M;for(M=0;M<kt.length;M+=1){const Re=rf(I,kt,M);we[M]?we[M].p(Re,ee):(we[M]=vf(Re),we[M].c(),we[M].m(de,null))}for(;M<we.length;M+=1)we[M].d(1);we.length=kt.length}if(ee[0]&5&&Fe(de,I[2].numBeds),ee&0){Et=Pn;let M;for(M=0;M<Et.length;M+=1){const Re=sf(I,Et,M);ke[M]?ke[M].p(Re,ee):(ke[M]=yf(Re),ke[M].c(),ke[M].m(nt,null))}for(;M<ke.length;M+=1)ke[M].d(1);ke.length=Et.length}if(ee[0]&5&&Fe(nt,I[2].numBaths),ee&0){Te=Pn;let M;for(M=0;M<Te.length;M+=1){const Re=nf(I,Te,M);fe[M]?fe[M].p(Re,ee):(fe[M]=bf(Re),fe[M].c(),fe[M].m(Be,null))}for(;M<fe.length;M+=1)fe[M].d(1);fe.length=Te.length}if(ee[0]&5&&Fe(Be,I[2].halfBathroom),ee&0){rn=Pn;let M;for(M=0;M<rn.length;M+=1){const Re=tf(I,rn,M);Me[M]?Me[M].p(Re,ee):(Me[M]=wf(Re),Me[M].c(),Me[M].m(ne,null))}for(;M<Me.length;M+=1)Me[M].d(1);Me.length=rn.length}ee[0]&5&&Fe(ne,I[2].numParks);const ge={};!It&&ee[0]&4&&(It=!0,ge.ubication=I[2].locaProperty,Us(()=>It=!1)),gt.$set(ge);const Ze={};!wt&&ee[0]&4&&(wt=!0,Ze.tag=I[2].tagsProperty,Us(()=>wt=!1)),st.$set(Ze)},i(I){Nt||(B(gt.$$.fragment,I),B(st.$$.fragment,I),Nt=!0)},o(I){G(gt.$$.fragment,I),G(st.$$.fragment,I),Nt=!1},d(I){I&&w(e),I&&w(n),I&&w(s),dt.d(),I&&w(v),I&&w(y),ze(Le,I),I&&w(j),I&&w(N),I&&w(z),I&&w(R),ze(Ne,I),I&&w(P),I&&w(K),ze(Qe,I),I&&w(ie),I&&w(Q),ze(ct,I),I&&w(te),I&&w(x),ze(xe,I),I&&w(V),I&&w(O),ze(ht,I),I&&w(ue),I&&w(de),ze(we,I),I&&w(Ce),I&&w(nt),ze(ke,I),I&&w(Ve),I&&w(Be),ze(fe,I),I&&w(H),I&&w(ne),ze(Me,I),I&&w(dn),I&&w(Je),ae(gt),ae(st),Ot=!1,tt(At)}}}function vI(t,e,n){let s;je(t,ot,P=>n(2,s=P));var i=[];let r=Vn,o=!1;(()=>{for(let P of r){let K=`${P.nameProperty} ${P.claveEB} - ${(P.price/1e6).toFixed(2)}`;n(0,i=[...i,K])}return n(0,i=i.sort())})();function a(){n(1,o=!0)}function l(){s.createdAt=this.value,ot.set(s),n(0,i)}function u(){s.name=this.value,ot.set(s),n(0,i)}function f(){s.lastname=this.value,ot.set(s),n(0,i)}function h(){s.telephon=this.value,ot.set(s),n(0,i)}function d(){s.email=this.value,ot.set(s),n(0,i)}function m(){s.propCont=xt(this),ot.set(s),n(0,i)}function _(){s.budget=ps(this.value),ot.set(s),n(0,i)}function v(){s.comContact=this.value,ot.set(s),n(0,i)}function y(){s.typeContact=xt(this),ot.set(s),n(0,i)}function E(){s.selecMC=xt(this),ot.set(s),n(0,i)}function C(){s.modePay=xt(this),ot.set(s),n(0,i)}function $(){s.selecTP=xt(this),ot.set(s),n(0,i)}function D(){s.rangeProp=xt(this),ot.set(s),n(0,i)}function j(){s.numBeds=xt(this),ot.set(s),n(0,i)}function N(){s.numBaths=xt(this),ot.set(s),n(0,i)}function F(){s.halfBathroom=xt(this),ot.set(s),n(0,i)}function z(){s.numParks=xt(this),ot.set(s),n(0,i)}function R(P){t.$$.not_equal(s.locaProperty,P)&&(s.locaProperty=P,ot.set(s))}function U(P){t.$$.not_equal(s.tagsProperty,P)&&(s.tagsProperty=P,ot.set(s))}return[i,o,s,a,l,u,f,h,d,m,_,v,y,E,C,$,D,j,N,F,z,R,U]}class yI extends Xe{constructor(e){super(),Ye(this,e,vI,_I,We,{},null,[-1,-1])}}function kf(t,e,n){const s=t.slice();return s[24]=e[n],s}function Ef(t,e,n){const s=t.slice();return s[27]=e[n],s}function Tf(t,e,n){const s=t.slice();return s[30]=e[n],s}function If(t,e,n){const s=t.slice();return s[33]=e[n],s}function Cf(t,e,n){const s=t.slice();return s[36]=e[n],s}function Sf(t,e,n){const s=t.slice();return s[39]=e[n],s}function Af(t,e,n){const s=t.slice();return s[42]=e[n],s}function bI(t){let e,n=In(t[1].createdAt)+"",s,i,r;return{c(){e=p("h3"),s=A(n),g(e,"class","dataInput")},m(o,a){k(o,e,a),c(e,s),i||(r=q(e,"dblclick",t[3]),i=!0)},p(o,a){a[0]&2&&n!==(n=In(o[1].createdAt)+"")&&re(s,n)},d(o){o&&w(e),i=!1,r()}}}function wI(t){let e,n,s;return{c(){e=p("input"),g(e,"class","dataInput"),g(e,"type","date")},m(i,r){k(i,e,r),pe(e,t[1].createdAt),n||(s=q(e,"input",t[4]),n=!0)},p(i,r){r[0]&2&&pe(e,i[1].createdAt)},d(i){i&&w(e),n=!1,s()}}}function Df(t){let e,n=t[42]+"",s;return{c(){e=p("option"),s=A(n),g(e,"type","checkbox"),e.__value=t[42],e.value=e.__value},m(i,r){k(i,e,r),c(e,s)},p:he,d(i){i&&w(e)}}}function Rf(t){let e,n=t[39]+"",s,i;return{c(){e=p("option"),s=A(n),i=b(),g(e,"type","checkbox"),e.__value=t[39],e.value=e.__value},m(r,o){k(r,e,o),c(e,s),c(e,i)},p:he,d(r){r&&w(e)}}}function Pf(t){let e,n=t[36]+"",s,i;return{c(){e=p("option"),s=A(n),i=A(" Rec\xE1maras"),g(e,"type","checkbox"),e.__value=t[36],e.value=e.__value},m(r,o){k(r,e,o),c(e,s),c(e,i)},p:he,d(r){r&&w(e)}}}function Nf(t){let e,n=t[33]+"",s,i;return{c(){e=p("option"),s=A(n),i=A(" ba\xF1os"),g(e,"type","checkbox"),e.__value=t[33],e.value=e.__value},m(r,o){k(r,e,o),c(e,s),c(e,i)},p:he,d(r){r&&w(e)}}}function Of(t){let e,n=t[30]+"",s,i;return{c(){e=p("option"),s=A(n),i=A(" Medios ba\xF1os"),g(e,"type","checkbox"),e.__value=t[30],e.value=e.__value},m(r,o){k(r,e,o),c(e,s),c(e,i)},p:he,d(r){r&&w(e)}}}function $f(t){let e,n=t[27]+"",s,i;return{c(){e=p("option"),s=A(n),i=A(" Estacionamientos"),g(e,"type","checkbox"),e.__value=t[27],e.value=e.__value},m(r,o){k(r,e,o),c(e,s),c(e,i)},p:he,d(r){r&&w(e)}}}function Lf(t){let e,n=t[24]+"",s;return{c(){e=p("option"),s=A(n),g(e,"type","checkbox"),e.__value=t[24],e.value=e.__value},m(i,r){k(i,e,r),c(e,s)},p:he,d(i){i&&w(e)}}}function kI(t){let e,n,s,i,r,o,a,l,u,f,h,d,m,_,v,y,E,C,$,D,j,N,F,z,R,U,P,K,Y,ie,Q,W,te,x,S,V,O,L,ue,de,De,Ce,nt,be,Ve,Be,bt,H,ne,ft,dn,Je,gt,It,pn,st,wt,Nt,Ot,At,$t,ut,dt,He,Le,Ct,Ne,sn,Qe,it,ct,Wt,xe,Qt;function ht(T,se){if(T[0])return wI;if(T[2]==="propEditing")return bI}let kt=ht(t),we=kt&&kt(t),Et=Bo,ke=[];for(let T=0;T<Et.length;T+=1)ke[T]=Df(Af(t,Et,T));let Te=Jh,fe=[];for(let T=0;T<Te.length;T+=1)fe[T]=Rf(Sf(t,Te,T));let rn=jo,Me=[];for(let T=0;T<rn.length;T+=1)Me[T]=Pf(Cf(t,rn,T));let $n=Pn,Dt=[];for(let T=0;T<$n.length;T+=1)Dt[T]=Nf(If(t,$n,T));let Dn=Pn,_t=[];for(let T=0;T<Dn.length;T+=1)_t[T]=Of(Tf(t,Dn,T));let I=Pn,ee=[];for(let T=0;T<I.length;T+=1)ee[T]=$f(Ef(t,I,T));let ge=ef,Ze=[];for(let T=0;T<ge.length;T+=1)Ze[T]=Lf(kf(t,ge,T));function M(T){t[22](T)}let Re={};t[1].locaProperty!==void 0&&(Re.ubication=t[1].locaProperty),Ne=new l_({props:Re}),Xn.push(()=>Fs(Ne,"ubication",M));function As(T){t[23](T)}let Di={};return t[1].tagsProperty!==void 0&&(Di.tag=t[1].tagsProperty),it=new u_({props:Di}),Xn.push(()=>Fs(it,"tag",As)),{c(){e=p("div"),we&&we.c(),n=b(),s=p("select"),i=p("option"),i.textContent="Tipo de Propiedad";for(let T=0;T<ke.length;T+=1)ke[T].c();r=b(),o=p("label"),o.innerHTML=`Titulo
       <input type="text"/>`,a=b(),l=p("label"),u=A(`Colonia\r
        `),f=p("input"),h=b(),d=p("label"),m=A(`Nombre de la Propiead\r
        `),_=p("input"),v=b(),y=p("label"),E=A(`Clave EB\r
        `),C=p("input"),$=b(),D=p("label"),j=A(`Clave MH\r
        `),N=p("input"),F=b(),z=p("div"),R=p("textarea"),U=b(),P=p("select"),K=p("option"),K.textContent="Tipo de Operaci\xF3n";for(let T=0;T<fe.length;T+=1)fe[T].c();Y=b(),ie=p("select"),Q=p("option"),Q.textContent="# Rec\xE1maras";for(let T=0;T<Me.length;T+=1)Me[T].c();W=b(),te=p("select"),x=p("option"),x.textContent="# Ba\xF1os";for(let T=0;T<Dt.length;T+=1)Dt[T].c();S=b(),V=p("select"),O=p("option"),O.textContent="# Medios Ba\xF1os";for(let T=0;T<_t.length;T+=1)_t[T].c();L=b(),ue=p("select"),de=p("option"),de.textContent="# Estacionamientos";for(let T=0;T<ee.length;T+=1)ee[T].c();De=b(),Ce=p("label"),nt=A(`Area de Construcci\xF3n\r
            `),be=p("input"),Ve=b(),Be=p("label"),bt=A(`Area de Terreno\r
            `),H=p("input"),ne=b(),ft=p("label"),dn=A(`Precio\r
            `),Je=p("input"),gt=b(),It=p("label"),pn=A(`Link Imgen\r
        `),st=p("input"),wt=b(),Nt=p("label"),Ot=A(`Link de la Propiedad\r
        `),At=p("input"),$t=b(),ut=p("label"),ut.innerHTML=`Propietario
            <input type="text"/>`,dt=b(),He=p("select"),Le=p("option"),Le.textContent="Tipo de Encargado";for(let T=0;T<Ze.length;T+=1)Ze[T].c();Ct=b(),le(Ne.$$.fragment),Qe=b(),le(it.$$.fragment),i.disabled=!0,i.selected=!0,i.__value="",i.value=i.__value,g(s,"class","selTP"),g(s,"id","selTP"),g(s,"name","selTP"),t[1].selecTP===void 0&&et(()=>t[5].call(s)),g(f,"type","text"),g(_,"type","text"),g(C,"type","text"),g(N,"type","text"),g(R,"placeholder","Comentarios"),g(R,"cols","65"),g(R,"rows","5"),g(R,"class","form-control"),g(z,"class","col"),K.disabled=!0,K.selected=!0,K.__value="",K.value=K.__value,t[1].typeOperation===void 0&&et(()=>t[11].call(P)),Q.disabled=!0,Q.selected=!0,Q.__value="",Q.value=Q.__value,t[1].beds===void 0&&et(()=>t[12].call(ie)),x.disabled=!0,x.selected=!0,x.__value="",x.value=x.__value,t[1].bathroom===void 0&&et(()=>t[13].call(te)),O.disabled=!0,O.selected=!0,O.__value="",O.value=O.__value,t[1].halfBathroom===void 0&&et(()=>t[14].call(V)),de.disabled=!0,de.selected=!0,de.__value="",de.value=de.__value,t[1].park===void 0&&et(()=>t[15].call(ue)),g(be,"type","number"),g(H,"type","number"),g(Je,"type","number"),g(st,"type","text"),g(At,"type","text"),Le.disabled=!0,Le.selected=!0,Le.__value="",Le.value=Le.__value,g(He,"name","typeSaller"),t[1].typeSaller===void 0&&et(()=>t[21].call(He))},m(T,se){k(T,e,se),we&&we.m(e,null),k(T,n,se),k(T,s,se),c(s,i);for(let Oe=0;Oe<ke.length;Oe+=1)ke[Oe].m(s,null);Fe(s,t[1].selecTP),k(T,r,se),k(T,o,se),k(T,a,se),k(T,l,se),c(l,u),c(l,f),pe(f,t[1].colonia),k(T,h,se),k(T,d,se),c(d,m),c(d,_),pe(_,t[1].nameProperty),k(T,v,se),k(T,y,se),c(y,E),c(y,C),pe(C,t[1].claveEB),k(T,$,se),k(T,D,se),c(D,j),c(D,N),pe(N,t[1].claveMH),k(T,F,se),k(T,z,se),c(z,R),pe(R,t[1].description),k(T,U,se),k(T,P,se),c(P,K);for(let Oe=0;Oe<fe.length;Oe+=1)fe[Oe].m(P,null);Fe(P,t[1].typeOperation),k(T,Y,se),k(T,ie,se),c(ie,Q);for(let Oe=0;Oe<Me.length;Oe+=1)Me[Oe].m(ie,null);Fe(ie,t[1].beds),k(T,W,se),k(T,te,se),c(te,x);for(let Oe=0;Oe<Dt.length;Oe+=1)Dt[Oe].m(te,null);Fe(te,t[1].bathroom),k(T,S,se),k(T,V,se),c(V,O);for(let Oe=0;Oe<_t.length;Oe+=1)_t[Oe].m(V,null);Fe(V,t[1].halfBathroom),k(T,L,se),k(T,ue,se),c(ue,de);for(let Oe=0;Oe<ee.length;Oe+=1)ee[Oe].m(ue,null);Fe(ue,t[1].park),k(T,De,se),k(T,Ce,se),c(Ce,nt),c(Ce,be),pe(be,t[1].areaBuilding),k(T,Ve,se),k(T,Be,se),c(Be,bt),c(Be,H),pe(H,t[1].areaTotal),k(T,ne,se),k(T,ft,se),c(ft,dn),c(ft,Je),pe(Je,t[1].price),k(T,gt,se),k(T,It,se),c(It,pn),c(It,st),pe(st,t[1].urlImage),k(T,wt,se),k(T,Nt,se),c(Nt,Ot),c(Nt,At),pe(At,t[1].urlProp),k(T,$t,se),k(T,ut,se),k(T,dt,se),k(T,He,se),c(He,Le);for(let Oe=0;Oe<Ze.length;Oe+=1)Ze[Oe].m(He,null);Fe(He,t[1].typeSaller),k(T,Ct,se),oe(Ne,T,se),k(T,Qe,se),oe(it,T,se),Wt=!0,xe||(Qt=[q(s,"change",t[5]),q(f,"input",t[6]),q(_,"input",t[7]),q(C,"input",t[8]),q(N,"input",t[9]),q(R,"input",t[10]),q(P,"change",t[11]),q(ie,"change",t[12]),q(te,"change",t[13]),q(V,"change",t[14]),q(ue,"change",t[15]),q(be,"input",t[16]),q(H,"input",t[17]),q(Je,"input",t[18]),q(st,"input",t[19]),q(At,"input",t[20]),q(He,"change",t[21])],xe=!0)},p(T,se){if(kt===(kt=ht(T))&&we?we.p(T,se):(we&&we.d(1),we=kt&&kt(T),we&&(we.c(),we.m(e,null))),se&0){Et=Bo;let X;for(X=0;X<Et.length;X+=1){const vt=Af(T,Et,X);ke[X]?ke[X].p(vt,se):(ke[X]=Df(vt),ke[X].c(),ke[X].m(s,null))}for(;X<ke.length;X+=1)ke[X].d(1);ke.length=Et.length}if(se[0]&2&&Fe(s,T[1].selecTP),se[0]&2&&f.value!==T[1].colonia&&pe(f,T[1].colonia),se[0]&2&&_.value!==T[1].nameProperty&&pe(_,T[1].nameProperty),se[0]&2&&C.value!==T[1].claveEB&&pe(C,T[1].claveEB),se[0]&2&&N.value!==T[1].claveMH&&pe(N,T[1].claveMH),se[0]&2&&pe(R,T[1].description),se&0){Te=Jh;let X;for(X=0;X<Te.length;X+=1){const vt=Sf(T,Te,X);fe[X]?fe[X].p(vt,se):(fe[X]=Rf(vt),fe[X].c(),fe[X].m(P,null))}for(;X<fe.length;X+=1)fe[X].d(1);fe.length=Te.length}if(se[0]&2&&Fe(P,T[1].typeOperation),se&0){rn=jo;let X;for(X=0;X<rn.length;X+=1){const vt=Cf(T,rn,X);Me[X]?Me[X].p(vt,se):(Me[X]=Pf(vt),Me[X].c(),Me[X].m(ie,null))}for(;X<Me.length;X+=1)Me[X].d(1);Me.length=rn.length}if(se[0]&2&&Fe(ie,T[1].beds),se&0){$n=Pn;let X;for(X=0;X<$n.length;X+=1){const vt=If(T,$n,X);Dt[X]?Dt[X].p(vt,se):(Dt[X]=Nf(vt),Dt[X].c(),Dt[X].m(te,null))}for(;X<Dt.length;X+=1)Dt[X].d(1);Dt.length=$n.length}if(se[0]&2&&Fe(te,T[1].bathroom),se&0){Dn=Pn;let X;for(X=0;X<Dn.length;X+=1){const vt=Tf(T,Dn,X);_t[X]?_t[X].p(vt,se):(_t[X]=Of(vt),_t[X].c(),_t[X].m(V,null))}for(;X<_t.length;X+=1)_t[X].d(1);_t.length=Dn.length}if(se[0]&2&&Fe(V,T[1].halfBathroom),se&0){I=Pn;let X;for(X=0;X<I.length;X+=1){const vt=Ef(T,I,X);ee[X]?ee[X].p(vt,se):(ee[X]=$f(vt),ee[X].c(),ee[X].m(ue,null))}for(;X<ee.length;X+=1)ee[X].d(1);ee.length=I.length}if(se[0]&2&&Fe(ue,T[1].park),se[0]&2&&ps(be.value)!==T[1].areaBuilding&&pe(be,T[1].areaBuilding),se[0]&2&&ps(H.value)!==T[1].areaTotal&&pe(H,T[1].areaTotal),se[0]&2&&ps(Je.value)!==T[1].price&&pe(Je,T[1].price),se[0]&2&&st.value!==T[1].urlImage&&pe(st,T[1].urlImage),se[0]&2&&At.value!==T[1].urlProp&&pe(At,T[1].urlProp),se&0){ge=ef;let X;for(X=0;X<ge.length;X+=1){const vt=kf(T,ge,X);Ze[X]?Ze[X].p(vt,se):(Ze[X]=Lf(vt),Ze[X].c(),Ze[X].m(He,null))}for(;X<Ze.length;X+=1)Ze[X].d(1);Ze.length=ge.length}se[0]&2&&Fe(He,T[1].typeSaller);const Oe={};!sn&&se[0]&2&&(sn=!0,Oe.ubication=T[1].locaProperty,Us(()=>sn=!1)),Ne.$set(Oe);const Kn={};!ct&&se[0]&2&&(ct=!0,Kn.tag=T[1].tagsProperty,Us(()=>ct=!1)),it.$set(Kn)},i(T){Wt||(B(Ne.$$.fragment,T),B(it.$$.fragment,T),Wt=!0)},o(T){G(Ne.$$.fragment,T),G(it.$$.fragment,T),Wt=!1},d(T){T&&w(e),we&&we.d(),T&&w(n),T&&w(s),ze(ke,T),T&&w(r),T&&w(o),T&&w(a),T&&w(l),T&&w(h),T&&w(d),T&&w(v),T&&w(y),T&&w($),T&&w(D),T&&w(F),T&&w(z),T&&w(U),T&&w(P),ze(fe,T),T&&w(Y),T&&w(ie),ze(Me,T),T&&w(W),T&&w(te),ze(Dt,T),T&&w(S),T&&w(V),ze(_t,T),T&&w(L),T&&w(ue),ze(ee,T),T&&w(De),T&&w(Ce),T&&w(Ve),T&&w(Be),T&&w(ne),T&&w(ft),T&&w(gt),T&&w(It),T&&w(wt),T&&w(Nt),T&&w($t),T&&w(ut),T&&w(dt),T&&w(He),ze(Ze,T),T&&w(Ct),ae(Ne,T),T&&w(Qe),ae(it,T),xe=!1,tt(Qt)}}}function EI(t,e,n){let s,i;je(t,rt,P=>n(1,s=P)),je(t,yt,P=>n(2,i=P));let r=!1;function o(){n(0,r=!0)}function a(){s.createdAt=this.value,rt.set(s)}function l(){s.selecTP=xt(this),rt.set(s)}function u(){s.colonia=this.value,rt.set(s)}function f(){s.nameProperty=this.value,rt.set(s)}function h(){s.claveEB=this.value,rt.set(s)}function d(){s.claveMH=this.value,rt.set(s)}function m(){s.description=this.value,rt.set(s)}function _(){s.typeOperation=xt(this),rt.set(s)}function v(){s.beds=xt(this),rt.set(s)}function y(){s.bathroom=xt(this),rt.set(s)}function E(){s.halfBathroom=xt(this),rt.set(s)}function C(){s.park=xt(this),rt.set(s)}function $(){s.areaBuilding=ps(this.value),rt.set(s)}function D(){s.areaTotal=ps(this.value),rt.set(s)}function j(){s.price=ps(this.value),rt.set(s)}function N(){s.urlImage=this.value,rt.set(s)}function F(){s.urlProp=this.value,rt.set(s)}function z(){s.typeSaller=xt(this),rt.set(s)}function R(P){t.$$.not_equal(s.locaProperty,P)&&(s.locaProperty=P,rt.set(s))}function U(P){t.$$.not_equal(s.tagsProperty,P)&&(s.tagsProperty=P,rt.set(s))}return[r,s,i,o,a,l,u,f,h,d,m,_,v,y,E,C,$,D,j,N,F,z,R,U]}class TI extends Xe{constructor(e){super(),Ye(this,e,EI,kI,We,{},null,[-1,-1])}}function II(t){let e;return{c(){e=A("Editar")},m(n,s){k(n,e,s)},d(n){n&&w(e)}}}function CI(t){let e;return{c(){e=A("Guardar")},m(n,s){k(n,e,s)},d(n){n&&w(e)}}}function SI(t){let e,n,s,i,r,o,a,l,u,f;n=new yI({});function h(_,v){return _[0]?II:CI}let d=h(t),m=d(t);return{c(){e=p("div"),le(n.$$.fragment),s=b(),i=p("div"),r=p("button"),m.c(),o=b(),a=p("button"),a.textContent="Cancel",g(r,"class","btn__save"),g(a,"class","btn__cancel"),g(i,"class","contSavCan svelte-1at07r"),g(e,"class","altaContactos")},m(_,v){k(_,e,v),oe(n,e,null),c(e,s),c(e,i),c(i,r),m.m(r,null),c(i,o),c(i,a),l=!0,u||(f=[q(r,"click",t[5]),q(a,"click",t[3])],u=!0)},p(_,[v]){d!==(d=h(_))&&(m.d(1),m=d(_),m&&(m.c(),m.m(r,null)))},i(_){l||(B(n.$$.fragment,_),l=!0)},o(_){G(n.$$.fragment,_),l=!1},d(_){_&&w(e),ae(n),m.d(),u=!1,tt(f)}}}function AI(t,e,n){let s,i;je(t,yt,h=>n(7,s=h)),je(t,ot,h=>n(1,i=h));let r=!1,o;async function a(h){if(o=Date.now(),h={...h,createdAt:o},s!="contEditing"){const d=ss(tn,"contacts");await lr(d,h)}else await ba(is(tn,"contacts",h.id),h),n(0,r=!1);h=[],at(yt,s="contSelect",s)}function l(h){try{console.log("se dio de alta a: ");const d=ss(tn,"todos");lr(d,h)}catch(d){console.log("error",d)}}function u(){n(0,r=!0),location.href="/"}return[r,i,a,u,l,()=>a(i)]}class DI extends Xe{constructor(e){super(),Ye(this,e,AI,SI,We,{addContact:4})}get addContact(){return this.$$.ctx[4]}}const c_="/to-deploy-mh/assets/trash.2d1385a7.svg",h_="/to-deploy-mh/assets/edit.070633c4.svg";function Mf(t,e,n){const s=t.slice();return s[40]=e[n],s}function Uf(t,e,n){const s=t.slice();return s[43]=e[n],s}function Ff(t){let e,n,s,i,r,o=t[8].name+"",a,l,u=t[8].lastname+"",f,h,d,m,_=In(t[8].createdAt)+"",v,y,E,C,$=t[8].selecTP+"",D,j,N=t[8].numBeds+"",F,z,R=t[8].numBaths+"",U,P,K=t[8].numParks+"",Y,ie,Q,W,te,x,S=t[8].budget+"",V,O,L,ue=t[8].selecTP+"",de,De,Ce,nt,be,Ve=t[8].telephon+"",Be,bt,H,ne=t[8].email+"",ft,dn,Je,gt,It=t[8].tagsProperty.join(",  ")+"",pn,st,wt,Nt,Ot=t[8].locaProperty.join(",  ")+"",At,$t,ut,dt,He,Le,Ct,Ne,sn,Qe,it=t[8].contactStage+"",ct,Wt,xe,Qt=t[8].comContact+"",ht,kt,we,Et,ke,Te,fe,rn,Me,$n,Dt,Dn,_t,I,ee,ge,Ze,M,Re,As,Di,T,se,Oe,Kn,X,vt,Ys,tc,Ia,Ri,Lt,Ca,nc,Xs=t[8].sendedProperties,vn=[];for(let _e=0;_e<Xs.length;_e+=1)vn[_e]=Vf(Uf(t,Xs,_e));let yn=t[0]&&Bf(t),jt=t[2]&&jf(t),qt=t[7]&&qf(t),Ht=t[6]&&Hf(t);return{c(){e=p("div"),n=p("div"),s=p("h4"),s.textContent="Contacto",i=b(),r=p("h2"),a=A(o),l=b(),f=A(u),h=b(),d=p("p"),m=A("Fecha Alta: "),v=A(_),y=b(),E=p("p"),C=A("Busca  "),D=A($),j=A(", de "),F=A(N),z=A(" rec\xE1maras,  "),U=A(R),P=A(" ba\xF1os y "),Y=A(K),ie=A(" estacionamientos"),Q=b(),W=p("p"),te=A("Presupuesto tope: "),x=p("strong"),V=A(S),O=A(" : Tipo de propiedad buscada: "),L=p("strong"),de=A(ue),De=b(),Ce=p("p"),nt=A("Tel\xE9fono: "),be=p("strong"),Be=A(Ve),bt=A(" ---- Email: "),H=p("strong"),ft=A(ne),dn=b(),Je=p("p"),gt=A("Preferencias: "),pn=A(It),st=b(),wt=p("p"),Nt=A("Ubicaciones: "),At=A(Ot),$t=b(),ut=p("div"),dt=p("p"),dt.textContent="Propiedades enviadas:",He=b(),Le=p("div");for(let _e=0;_e<vn.length;_e+=1)vn[_e].c();Ct=b(),Ne=p("div"),yn&&yn.c(),sn=b(),Qe=p("p"),ct=A(it),Wt=b(),xe=p("p"),ht=A(Qt),kt=b(),we=p("div"),Et=p("button"),Et.textContent="Programar Evento",ke=b(),jt&&jt.c(),Te=b(),fe=p("button"),fe.textContent="Ver Propiedades de Interes",rn=b(),Me=p("button"),Me.textContent="Buscar Propiedad",$n=b(),qt&&qt.c(),Dt=b(),Dn=p("div"),_t=p("button"),_t.textContent="Cancelar",I=b(),ee=p("div"),ge=p("div"),Ze=p("textarea"),M=b(),Re=p("div"),As=p("button"),As.textContent="Enviar WhatsApp",Di=b(),T=p("button"),T.textContent="Guardar Info",se=b(),Oe=p("div"),Kn=p("img"),vt=b(),Ys=p("img"),Ia=b(),Ht&&Ht.c(),Ri=_n(),g(Le,"class","mostImage svelte-ce274g"),g(ut,"class","propMost"),g(Et,"class","btnCommon"),g(fe,"class","btnCommon"),g(Me,"class","btnCommon"),g(_t,"class","btn__cancel"),g(Ze,"class","texArea"),g(Ze,"cols","65"),g(Ze,"rows","5"),g(Ze,"placeholder","Ingresa un comentario"),g(As,"class","btnCommon btnWhatsApp"),g(T,"class","btnCommon"),St(Kn.src,X=h_)||g(Kn,"src",X),g(Kn,"alt","delete"),St(Ys.src,tc=c_)||g(Ys,"src",tc),g(Ys,"alt","delete"),g(Oe,"class","icon__Content"),g(e,"class","container")},m(_e,Ke){k(_e,e,Ke),c(e,n),c(n,s),c(n,i),c(n,r),c(r,a),c(r,l),c(r,f),c(n,h),c(n,d),c(d,m),c(d,v),c(n,y),c(n,E),c(E,C),c(E,D),c(E,j),c(E,F),c(E,z),c(E,U),c(E,P),c(E,Y),c(E,ie),c(n,Q),c(n,W),c(W,te),c(W,x),c(x,V),c(W,O),c(W,L),c(L,de),c(n,De),c(n,Ce),c(Ce,nt),c(Ce,be),c(be,Be),c(Ce,bt),c(Ce,H),c(H,ft),c(n,dn),c(n,Je),c(Je,gt),c(Je,pn),c(n,st),c(n,wt),c(wt,Nt),c(wt,At),c(n,$t),c(n,ut),c(ut,dt),c(ut,He),c(ut,Le);for(let on=0;on<vn.length;on+=1)vn[on].m(Le,null);c(e,Ct),c(e,Ne),yn&&yn.m(Ne,null),c(e,sn),c(e,Qe),c(Qe,ct),c(e,Wt),c(e,xe),c(xe,ht),c(e,kt),c(e,we),c(we,Et),c(we,ke),jt&&jt.m(we,null),c(we,Te),c(we,fe),c(we,rn),c(we,Me),c(we,$n),qt&&qt.m(we,null),c(e,Dt),c(e,Dn),c(Dn,_t),c(e,I),c(e,ee),c(ee,ge),c(ge,Ze),pe(Ze,t[4]),c(ge,M),c(ge,Re),c(Re,As),c(Re,Di),c(Re,T),c(ee,se),c(ee,Oe),c(Oe,Kn),c(Oe,vt),c(Oe,Ys),k(_e,Ia,Ke),Ht&&Ht.m(_e,Ke),k(_e,Ri,Ke),Lt=!0,Ca||(nc=[q(Et,"click",t[27]),q(fe,"click",t[28]),q(Me,"click",t[14]),q(_t,"click",t[17]),q(Ze,"keypress",t[18]),q(Ze,"input",t[30]),q(As,"click",t[23]),q(T,"click",t[24]),q(Kn,"click",t[19]),q(Ys,"click",t[20])],Ca=!0)},p(_e,Ke){if((!Lt||Ke[0]&256)&&o!==(o=_e[8].name+"")&&re(a,o),(!Lt||Ke[0]&256)&&u!==(u=_e[8].lastname+"")&&re(f,u),(!Lt||Ke[0]&256)&&_!==(_=In(_e[8].createdAt)+"")&&re(v,_),(!Lt||Ke[0]&256)&&$!==($=_e[8].selecTP+"")&&re(D,$),(!Lt||Ke[0]&256)&&N!==(N=_e[8].numBeds+"")&&re(F,N),(!Lt||Ke[0]&256)&&R!==(R=_e[8].numBaths+"")&&re(U,R),(!Lt||Ke[0]&256)&&K!==(K=_e[8].numParks+"")&&re(Y,K),(!Lt||Ke[0]&256)&&S!==(S=_e[8].budget+"")&&re(V,S),(!Lt||Ke[0]&256)&&ue!==(ue=_e[8].selecTP+"")&&re(de,ue),(!Lt||Ke[0]&256)&&Ve!==(Ve=_e[8].telephon+"")&&re(Be,Ve),(!Lt||Ke[0]&256)&&ne!==(ne=_e[8].email+"")&&re(ft,ne),(!Lt||Ke[0]&256)&&It!==(It=_e[8].tagsProperty.join(",  ")+"")&&re(pn,It),(!Lt||Ke[0]&256)&&Ot!==(Ot=_e[8].locaProperty.join(",  ")+"")&&re(At,Ot),Ke[0]&6402){Xs=_e[8].sendedProperties;let on;for(on=0;on<Xs.length;on+=1){const sc=Uf(_e,Xs,on);vn[on]?vn[on].p(sc,Ke):(vn[on]=Vf(sc),vn[on].c(),vn[on].m(Le,null))}for(;on<vn.length;on+=1)vn[on].d(1);vn.length=Xs.length}_e[0]?yn?yn.p(_e,Ke):(yn=Bf(_e),yn.c(),yn.m(Ne,null)):yn&&(yn.d(1),yn=null),(!Lt||Ke[0]&256)&&it!==(it=_e[8].contactStage+"")&&re(ct,it),(!Lt||Ke[0]&256)&&Qt!==(Qt=_e[8].comContact+"")&&re(ht,Qt),_e[2]?jt?(jt.p(_e,Ke),Ke[0]&4&&B(jt,1)):(jt=jf(_e),jt.c(),B(jt,1),jt.m(we,Te)):jt&&(Mt(),G(jt,1,1,()=>{jt=null}),Ut()),_e[7]?qt?(qt.p(_e,Ke),Ke[0]&128&&B(qt,1)):(qt=qf(_e),qt.c(),B(qt,1),qt.m(we,null)):qt&&(Mt(),G(qt,1,1,()=>{qt=null}),Ut()),Ke[0]&16&&pe(Ze,_e[4]),_e[6]?Ht?(Ht.p(_e,Ke),Ke[0]&64&&B(Ht,1)):(Ht=Hf(_e),Ht.c(),B(Ht,1),Ht.m(Ri.parentNode,Ri)):Ht&&(Mt(),G(Ht,1,1,()=>{Ht=null}),Ut())},i(_e){Lt||(B(jt),B(qt),B(Ht),Lt=!0)},o(_e){G(jt),G(qt),G(Ht),Lt=!1},d(_e){_e&&w(e),ze(vn,_e),yn&&yn.d(),jt&&jt.d(),qt&&qt.d(),_e&&w(Ia),Ht&&Ht.d(_e),_e&&w(Ri),Ca=!1,tt(nc)}}}function Vf(t){let e,n=t[43]+"",s,i,r,o;function a(){return t[25](t[43])}return{c(){e=p("p"),s=A(n),g(e,"value",i=t[43])},m(l,u){k(l,e,u),c(e,s),r||(o=[q(e,"mouseenter",a),q(e,"mouseout",t[12]),q(e,"dblclick",t[26])],r=!0)},p(l,u){t=l,u[0]&256&&n!==(n=t[43]+"")&&re(s,n),u[0]&256&&i!==(i=t[43])&&g(e,"value",i)},d(l){l&&w(e),r=!1,tt(o)}}}function Bf(t){let e,n=t[1][0].nameProperty+"",s,i,r,o,a;return{c(){e=p("h3"),s=A(n),i=b(),r=p("img"),g(e,"class","svelte-ce274g"),g(r,"class","imgPropContSelect"),g(r,"height","200"),St(r.src,o=t[1][0].urlImage)||g(r,"src",o),g(r,"alt",a=t[1][0].claveEB)},m(l,u){k(l,e,u),c(e,s),k(l,i,u),k(l,r,u)},p(l,u){u[0]&2&&n!==(n=l[1][0].nameProperty+"")&&re(s,n),u[0]&2&&!St(r.src,o=l[1][0].urlImage)&&g(r,"src",o),u[0]&2&&a!==(a=l[1][0].claveEB)&&g(r,"alt",a)},d(l){l&&w(e),l&&w(i),l&&w(r)}}}function jf(t){let e,n;const s=[t[8]];let i={};for(let r=0;r<s.length;r+=1)i=zt(i,s[r]);return e=new aI({props:i}),e.$on("closeIt",t[21]),{c(){le(e.$$.fragment)},m(r,o){oe(e,r,o),n=!0},p(r,o){const a=o[0]&256?Sn(s,[Jn(r[8])]):{};e.$set(a)},i(r){n||(B(e.$$.fragment,r),n=!0)},o(r){G(e.$$.fragment,r),n=!1},d(r){ae(e,r)}}}function qf(t){let e,n,s;function i(o){t[29](o)}let r={};return t[3]!==void 0&&(r.searchTerm=t[3]),e=new ec({props:r}),Xn.push(()=>Fs(e,"searchTerm",i)),e.$on("input",t[15]),{c(){le(e.$$.fragment)},m(o,a){oe(e,o,a),s=!0},p(o,a){const l={};!n&&a[0]&8&&(n=!0,l.searchTerm=o[3],Us(()=>n=!1)),e.$set(l)},i(o){s||(B(e.$$.fragment,o),s=!0)},o(o){G(e.$$.fragment,o),s=!1},d(o){ae(e,o)}}}function Hf(t){let e,n,s,i=t[10].length+"",r,o,a,l,u=t[10],f=[];for(let m=0;m<u.length;m+=1)f[m]=Kf(Mf(t,u,m));const h=m=>G(f[m],1,1,()=>{f[m]=null});let d=t[10].length===0&&zf();return{c(){e=p("main"),n=p("h3"),s=A("Propiedades encontradas: "),r=A(i),o=b();for(let m=0;m<f.length;m+=1)f[m].c();a=b(),d&&d.c(),g(n,"class","svelte-ce274g"),g(e,"id","bookshelf"),g(e,"class","svelte-ce274g")},m(m,_){k(m,e,_),c(e,n),c(n,s),c(n,r),c(e,o);for(let v=0;v<f.length;v+=1)f[v].m(e,null);c(e,a),d&&d.m(e,null),l=!0},p(m,_){if((!l||_[0]&1024)&&i!==(i=m[10].length+"")&&re(r,i),_[0]&4195360){u=m[10];let v;for(v=0;v<u.length;v+=1){const y=Mf(m,u,v);f[v]?(f[v].p(y,_),B(f[v],1)):(f[v]=Kf(y),f[v].c(),B(f[v],1),f[v].m(e,a))}for(Mt(),v=u.length;v<f.length;v+=1)h(v);Ut()}m[10].length===0?d||(d=zf(),d.c(),d.m(e,null)):d&&(d.d(1),d=null)},i(m){if(!l){for(let _=0;_<u.length;_+=1)B(f[_]);l=!0}},o(m){f=f.filter(Boolean);for(let _=0;_<f.length;_+=1)G(f[_]);l=!1},d(m){m&&w(e),ze(f,m),d&&d.d()}}}function Kf(t){let e,n,s,i,r,o,a,l,u;const f=[t[40]];let h={};for(let d=0;d<f.length;d+=1)h=zt(h,f[d]);return r=new o_({props:h}),{c(){e=p("section"),n=p("input"),i=b(),le(r.$$.fragment),g(n,"type","checkbox"),n.__value=s=t[40].urlProp,n.value=n.__value,g(n,"class","form-check"),t[32][0].push(n),g(e,"class","property svelte-ce274g")},m(d,m){k(d,e,m),c(e,n),n.checked=~t[5].indexOf(n.__value),c(e,i),oe(r,e,null),a=!0,l||(u=[q(n,"change",t[31]),q(e,"click",t[22])],l=!0)},p(d,m){t=d,(!a||m[0]&1024&&s!==(s=t[40].urlProp))&&(n.__value=s,n.value=n.__value),m[0]&32&&(n.checked=~t[5].indexOf(n.__value));const _=m[0]&1024?Sn(f,[Jn(t[40])]):{};r.$set(_)},i(d){a||(B(r.$$.fragment,d),et(()=>{o||(o=En(e,wi,{duration:500,easing:bi},!0)),o.run(1)}),a=!0)},o(d){G(r.$$.fragment,d),o||(o=En(e,wi,{duration:500,easing:bi},!1)),o.run(0),a=!1},d(d){d&&w(e),t[32][0].splice(t[32][0].indexOf(n),1),ae(r),d&&o&&o.end(),l=!1,tt(u)}}}function zf(t){let e;return{c(){e=p("h3"),e.textContent='"No hay Propiedades para este contacto"',g(e,"class","svelte-ce274g")},m(n,s){k(n,e,s)},d(n){n&&w(e)}}}function RI(t){let e,n,s=t[9]==="contSelect"&&Ff(t);return{c(){e=p("main"),s&&s.c()},m(i,r){k(i,e,r),s&&s.m(e,null),n=!0},p(i,r){i[9]==="contSelect"?s?(s.p(i,r),r[0]&512&&B(s,1)):(s=Ff(i),s.c(),B(s,1),s.m(e,null)):s&&(Mt(),G(s,1,1,()=>{s=null}),Ut())},i(i){n||(B(s),n=!0)},o(i){G(s),n=!1},d(i){i&&w(e),s&&s.d()}}}function PI(t){window.open(t)}function NI(t,e,n){let s,i,r;je(t,ot,V=>n(8,s=V)),je(t,yt,V=>n(9,i=V)),je(t,Ol,V=>n(10,r=V));let o=!1,a,l=!1,u,f,h=[],d=!1,m=!1;console.log(i);function _(V){n(0,o=!0),n(1,a=Vn.filter(O=>O.claveEB===V))}function v(){n(0,o=!1)}function y(){console.log("estas en addSchedule"),n(2,l=!0)}function E(){n(7,m=!0)}const C=()=>(n(6,d=!0),at(Ol,r=Vn.filter(V=>(V.nameProperty+" "+V.colonia+" "+V.claveEB).toLowerCase().includes(u.toLowerCase())),r));function $(V){cI(V),n(6,d=!0)}const D=()=>{at(ot,s=[],s),at(yt,i="start",i)};function j(){}function N(){at(yt,i="contEditing",i)}async function F(){confirm("Deseas eleiminar definitivamente al contacto?")&&(await wa(is(tn,"contacts",s.id)),window.location.href="/")}function z(){n(2,l=!1)}function R(){console.log(h)}function U(){console.log(h);let V=`https://api.whatsapp.com/send?phone=52${s.telephon}&text=${h}`;window.open(V),r_()}function P(){console.log(h)}const K=[[]],Y=V=>_(V),ie=()=>PI(a[0].urlProp),Q=()=>y(),W=()=>$(s);function te(V){u=V,n(3,u)}function x(){f=this.value,n(4,f)}function S(){h=Yt(K[0],this.__value,this.checked),n(5,h)}return[o,a,l,u,f,h,d,m,s,i,r,_,v,y,E,C,$,D,j,N,F,z,R,U,P,Y,ie,Q,W,te,x,S,K]}class OI extends Xe{constructor(e){super(),Ye(this,e,NI,RI,We,{},null,[-1,-1])}}function Gf(t,e,n){const s=t.slice();return s[22]=e[n],s[24]=n,s}function Wf(t,e,n){const s=t.slice();return s[24]=e[n],s}function Qf(t,e,n){const s=t.slice();return s[12]=e[n],s[24]=n,s}function xf(t){let e,n,s,i,r,o,a,l,u,f,h,d,m,_,v,y,E,C,$,D,j,N,F;function z(S){t[14](S)}let R={};t[3]!==void 0&&(R.searchTerm=t[3]),r=new ec({props:R}),Xn.push(()=>Fs(r,"searchTerm",z)),r.$on("input",t[11]);let U=t[1],P=[];for(let S=0;S<U.length;S+=1)P[S]=Xf(Qf(t,U,S));const K=S=>G(P[S],1,1,()=>{P[S]=null});let Y=t[0]>1&&Jf(t),ie=[3,2,1],Q=[];for(let S=0;S<3;S+=1)Q[S]=ed(Wf(t,ie,S));let W=Array(3),te=[];for(let S=0;S<W.length;S+=1)te[S]=nd(Gf(t,W,S));let x=t[0]<t[5]&&sd(t);return{c(){e=p("h2"),e.textContent=`${fr.length} Contactos a Mostrar`,n=b(),s=p("button"),s.textContent="Alta de Contacto",i=b(),le(r.$$.fragment),a=b(),l=p("div"),u=p("main");for(let S=0;S<P.length;S+=1)P[S].c();f=b(),h=p("div"),d=p("div"),m=p("ul"),Y&&Y.c(),_=b();for(let S=0;S<3;S+=1)Q[S].c();v=b(),y=p("li"),E=p("span"),C=A(t[0]),$=b();for(let S=0;S<te.length;S+=1)te[S].c();D=b(),x&&x.c(),g(s,"class","altaContacto svelte-152vhxc"),g(u,"id","bookshelf"),g(m,"class","pagi__options"),g(d,"class","pagi__Item"),g(h,"class","container pagination"),g(l,"class","mosPag container cont__card svelte-152vhxc")},m(S,V){k(S,e,V),k(S,n,V),k(S,s,V),k(S,i,V),oe(r,S,V),k(S,a,V),k(S,l,V),c(l,u);for(let O=0;O<P.length;O+=1)P[O].m(u,null);c(l,f),c(l,h),c(h,d),c(d,m),Y&&Y.m(m,null),c(m,_);for(let O=0;O<3;O+=1)Q[O].m(m,null);c(m,v),c(m,y),c(y,E),c(E,C),c(m,$);for(let O=0;O<te.length;O+=1)te[O].m(m,null);c(m,D),x&&x.m(m,null),j=!0,N||(F=q(s,"click",t[9]),N=!0)},p(S,V){const O={};if(!o&&V&8&&(o=!0,O.searchTerm=S[3],Us(()=>o=!1)),r.$set(O),V&1046){U=S[1];let L;for(L=0;L<U.length;L+=1){const ue=Qf(S,U,L);P[L]?(P[L].p(ue,V),B(P[L],1)):(P[L]=Xf(ue),P[L].c(),B(P[L],1),P[L].m(u,null))}for(Mt(),L=U.length;L<P.length;L+=1)K(L);Ut()}if(S[0]>1?Y?Y.p(S,V):(Y=Jf(S),Y.c(),Y.m(m,_)):Y&&(Y.d(1),Y=null),V&257){ie=[3,2,1];let L;for(L=0;L<3;L+=1){const ue=Wf(S,ie,L);Q[L]?Q[L].p(ue,V):(Q[L]=ed(ue),Q[L].c(),Q[L].m(m,v))}for(;L<3;L+=1)Q[L].d(1)}if((!j||V&1)&&re(C,S[0]),V&289){W=Array(3);let L;for(L=0;L<W.length;L+=1){const ue=Gf(S,W,L);te[L]?te[L].p(ue,V):(te[L]=nd(ue),te[L].c(),te[L].m(m,D))}for(;L<te.length;L+=1)te[L].d(1);te.length=W.length}S[0]<S[5]?x?x.p(S,V):(x=sd(S),x.c(),x.m(m,null)):x&&(x.d(1),x=null)},i(S){if(!j){B(r.$$.fragment,S);for(let V=0;V<U.length;V+=1)B(P[V]);j=!0}},o(S){G(r.$$.fragment,S),P=P.filter(Boolean);for(let V=0;V<P.length;V+=1)G(P[V]);j=!1},d(S){S&&w(e),S&&w(n),S&&w(s),S&&w(i),ae(r,S),S&&w(a),S&&w(l),ze(P,S),Y&&Y.d(),ze(Q,S),ze(te,S),x&&x.d(),N=!1,F()}}}function Yf(t){let e,n,s,i,r,o,a;const l=[t[12]];let u={};for(let h=0;h<l.length;h+=1)u=zt(u,l[h]);n=new nI({props:u});function f(){return t[15](t[12])}return{c(){e=p("div"),le(n.$$.fragment),s=b(),g(e,"class","selecContact")},m(h,d){k(h,e,d),oe(n,e,null),c(e,s),r=!0,o||(a=q(e,"click",f),o=!0)},p(h,d){t=h;const m=d&2?Sn(l,[Jn(t[12])]):{};n.$set(m)},i(h){r||(B(n.$$.fragment,h),et(()=>{i||(i=En(e,wi,{duration:500,easing:bi},!0)),i.run(1)}),r=!0)},o(h){G(n.$$.fragment,h),i||(i=En(e,wi,{duration:500,easing:bi},!1)),i.run(0),r=!1},d(h){h&&w(e),ae(n),h&&i&&i.end(),o=!1,a()}}}function Xf(t){let e,n,s=t[24]>=t[4]&&t[24]<t[2]&&Yf(t);return{c(){s&&s.c(),e=_n()},m(i,r){s&&s.m(i,r),k(i,e,r),n=!0},p(i,r){i[24]>=i[4]&&i[24]<i[2]?s?(s.p(i,r),r&20&&B(s,1)):(s=Yf(i),s.c(),B(s,1),s.m(e.parentNode,e)):s&&(Mt(),G(s,1,1,()=>{s=null}),Ut())},i(i){n||(B(s),n=!0)},o(i){G(s),n=!1},d(i){s&&s.d(i),i&&w(e)}}}function Jf(t){let e,n,s,i,r,o,a,l,u;return{c(){e=p("li"),n=p("a"),n.textContent="first",s=b(),i=p("li"),r=p("a"),o=A("previous"),g(n,"href","/blog"),g(r,"href",a="/blog/"+(t[0]-1))},m(f,h){k(f,e,h),c(e,n),k(f,s,h),k(f,i,h),c(i,r),c(r,o),l||(u=[q(n,"click",Cn(t[16])),q(r,"click",Cn(t[17]))],l=!0)},p(f,h){h&1&&a!==(a="/blog/"+(f[0]-1))&&g(r,"href",a)},d(f){f&&w(e),f&&w(s),f&&w(i),l=!1,tt(u)}}}function Zf(t){let e,n,s=t[0]-t[24]+"",i,r,o,a;function l(){return t[18](t[24])}return{c(){e=p("li"),n=p("a"),i=A(s),g(n,"href",r="/blog/"+(t[0]-t[24]))},m(u,f){k(u,e,f),c(e,n),c(n,i),o||(a=q(n,"click",Cn(l)),o=!0)},p(u,f){t=u,f&1&&s!==(s=t[0]-t[24]+"")&&re(i,s),f&1&&r!==(r="/blog/"+(t[0]-t[24]))&&g(n,"href",r)},d(u){u&&w(e),o=!1,a()}}}function ed(t){let e,n=t[0]-t[24]>0&&Zf(t);return{c(){n&&n.c(),e=_n()},m(s,i){n&&n.m(s,i),k(s,e,i)},p(s,i){s[0]-s[24]>0?n?n.p(s,i):(n=Zf(s),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(s){n&&n.d(s),s&&w(e)}}}function td(t){let e,n,s=t[0]+(t[24]+1)+"",i,r,o,a;function l(){return t[19](t[24])}return{c(){e=p("li"),n=p("a"),i=A(s),g(n,"href",r="/blog/"+(t[0]+(t[24]+1)))},m(u,f){k(u,e,f),c(e,n),c(n,i),o||(a=q(n,"click",Cn(l)),o=!0)},p(u,f){t=u,f&1&&s!==(s=t[0]+(t[24]+1)+"")&&re(i,s),f&1&&r!==(r="/blog/"+(t[0]+(t[24]+1)))&&g(n,"href",r)},d(u){u&&w(e),o=!1,a()}}}function nd(t){let e,n=t[0]+(t[24]+1)<=t[5]&&td(t);return{c(){n&&n.c(),e=_n()},m(s,i){n&&n.m(s,i),k(s,e,i)},p(s,i){s[0]+(s[24]+1)<=s[5]?n?n.p(s,i):(n=td(s),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(s){n&&n.d(s),s&&w(e)}}}function sd(t){let e,n,s,i,r,o,a,l,u,f,h;return{c(){e=p("li"),n=p("a"),s=A("next"),r=b(),o=p("li"),a=p("a"),l=A("last"),g(n,"href",i="/blog/"+(t[0]+1)),g(a,"href",u="/blog/"+t[5])},m(d,m){k(d,e,m),c(e,n),c(n,s),k(d,r,m),k(d,o,m),c(o,a),c(a,l),f||(h=[q(n,"click",Cn(t[20])),q(a,"click",Cn(t[21]))],f=!0)},p(d,m){m&1&&i!==(i="/blog/"+(d[0]+1))&&g(n,"href",i),m&32&&u!==(u="/blog/"+d[5])&&g(a,"href",u)},d(d){d&&w(e),d&&w(r),d&&w(o),f=!1,tt(h)}}}function id(t){let e,n,s;return n=new OI({props:{$contact:t[7]}}),{c(){e=p("div"),le(n.$$.fragment)},m(i,r){k(i,e,r),oe(n,e,null),s=!0},p(i,r){const o={};r&128&&(o.$contact=i[7]),n.$set(o)},i(i){s||(B(n.$$.fragment,i),s=!0)},o(i){G(n.$$.fragment,i),s=!1},d(i){i&&w(e),ae(n)}}}function rd(t){let e,n,s,i;const r=[t[7]];let o={};for(let a=0;a<r.length;a+=1)o=zt(o,r[a]);return s=new DI({props:o}),{c(){e=p("div"),n=p("div"),le(s.$$.fragment),g(n,"class","container")},m(a,l){k(a,e,l),c(e,n),oe(s,n,null),i=!0},p(a,l){const u=l&128?Sn(r,[Jn(a[7])]):{};s.$set(u)},i(a){i||(B(s.$$.fragment,a),i=!0)},o(a){G(s.$$.fragment,a),i=!1},d(a){a&&w(e),ae(s)}}}function $I(t){let e,n,s,i,r,o,a,l,u,f,h=t[6]==="start"&&xf(t),d=t[6]==="contSelect"&&id(t),m=(t[6]==="contEditing"||t[6]==="contAdding")&&rd(t);return{c(){e=p("main"),n=p("div"),s=p("h1"),s.textContent="Contactos",i=b(),r=p("img"),a=b(),h&&h.c(),l=b(),d&&d.c(),u=b(),m&&m.c(),St(r.src,o=s_)||g(r,"src",o),g(r,"alt","contactos"),g(r,"class","svelte-152vhxc"),g(e,"class","container")},m(_,v){k(_,e,v),c(e,n),c(n,s),c(n,i),c(n,r),c(e,a),h&&h.m(e,null),c(e,l),d&&d.m(e,null),c(e,u),m&&m.m(e,null),f=!0},p(_,[v]){_[6]==="start"?h?(h.p(_,v),v&64&&B(h,1)):(h=xf(_),h.c(),B(h,1),h.m(e,l)):h&&(Mt(),G(h,1,1,()=>{h=null}),Ut()),_[6]==="contSelect"?d?(d.p(_,v),v&64&&B(d,1)):(d=id(_),d.c(),B(d,1),d.m(e,u)):d&&(Mt(),G(d,1,1,()=>{d=null}),Ut()),_[6]==="contEditing"||_[6]==="contAdding"?m?(m.p(_,v),v&64&&B(m,1)):(m=rd(_),m.c(),B(m,1),m.m(e,null)):m&&(Mt(),G(m,1,1,()=>{m=null}),Ut())},i(_){f||(B(h),B(d),B(m),f=!0)},o(_){G(h),G(d),G(m),f=!1},d(_){_&&w(e),h&&h.d(),d&&d.d(),m&&m.d()}}}let Ja=15;function LI(t,e,n){let s,i,r,o,a,l;je(t,yt,R=>n(6,a=R)),je(t,ot,R=>n(7,l=R));let u;at(yt,a="start",a);let f,h=1,d=[];const m=R=>{n(0,h=R)},_=()=>{at(yt,a="contAdding",a)},v=R=>{n(3,u=""),at(ot,l=R,l),at(yt,a="contSelect",a)};function y(){return n(1,d=fr.filter(R=>(R.name+" "+R.lastname).toLowerCase().includes(u.toLowerCase())))}n(1,d=fr.sort((R,U)=>R.createdAt<U.createdAt?1:R.createdAt>U.createdAt?-1:0));function E(R){u=R,n(3,u)}const C=R=>v(R),$=()=>m(1),D=()=>m(h-1),j=R=>m(h-R),N=R=>m(h+(R+1)),F=()=>m(h+1),z=()=>m(i);return t.$$.update=()=>{t.$$.dirty&2&&n(13,s=d.length),t.$$.dirty&8192&&n(5,i=Math.ceil(s/Ja)),t.$$.dirty&1&&n(2,r=h*Ja),t.$$.dirty&4&&n(4,o=r-Ja)},[h,d,r,u,o,i,a,l,m,_,v,y,f,s,E,C,$,D,j,N,F,z]}class MI extends Xe{constructor(e){super(),Ye(this,e,LI,$I,We,{})}}let ls=[],us=[];function UI(t,e){e=e.filter(n=>n.selecTP===t.selectTP),t.numBeds>0&&(e=e.filter(n=>n.numBeds>=t.beds)),t.numBaths>0&&(e=e.filter(n=>n.numBaths>=t.bathroom)),t.numParks>0&&(e=e.filter(n=>n.numPark>=t.parks));try{e=e.filter(n=>{n.budget?ls=e.filter(s=>s.budget>=t.price*.7&&s.budget<=t.price*1.1):us=e.filter(s=>s.rangeProp===a_(t.price))})}catch(n){console.log(n)}e=us.concat(ls),ls=[],us=[];try{e.filter(n=>{n.locaProperty.length>0?(ls=e.filter(s=>t.locaProperty.some(i=>s.locaProperty.includes(i))),console.log(t.locaProperty)):(us=e.filter(s=>s.locaProperty.length===0),console.log(t.locaProperty))})}catch(n){console.log(n)}e=us.concat(ls),ls=[],us=[];try{e=e.filter(n=>{n.tagsProperty.length>0?ls=e.filter(s=>t.tagsProperty.some(i=>s.tagsProperty.includes(i))):us=e.filter(s=>s.tagsProperty.length===0)})}catch(n){console.log(n)}return e=us.concat(ls),console.log(e),Eg.set(e)}function od(t,e,n){const s=t.slice();return s[16]=e[n],s}function ad(t){let e,n=t[2],s=[];for(let i=0;i<n.length;i+=1)s[i]=ld(od(t,n,i));return{c(){for(let i=0;i<s.length;i+=1)s[i].c();e=_n()},m(i,r){for(let o=0;o<s.length;o+=1)s[o].m(i,r);k(i,e,r)},p(i,r){if(r&4){n=i[2];let o;for(o=0;o<n.length;o+=1){const a=od(i,n,o);s[o]?s[o].p(a,r):(s[o]=ld(a),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(i){ze(s,i),i&&w(e)}}}function ld(t){let e,n,s,i,r=t[16].name+"",o,a,l=t[16].lastname+"",u,f,h,d=t[16].locaProperty+"",m,_,v,y=t[16].tagsProperty+"",E,C,$,D=t[16].budget+"",j,N,F,z=t[16].rangeProp+"",R,U;return{c(){e=p("div"),n=p("input"),s=b(),i=p("div"),o=A(r),a=b(),u=A(l),f=b(),h=p("div"),m=A(d),_=b(),v=p("div"),E=A(y),C=b(),$=p("div"),j=A(D),N=b(),F=p("div"),R=A(z),U=b(),g(n,"type","checkbox"),g(e,"class","conInt svelte-1s75tnf")},m(P,K){k(P,e,K),c(e,n),c(e,s),c(e,i),c(i,o),c(i,a),c(i,u),c(e,f),c(e,h),c(h,m),c(e,_),c(e,v),c(v,E),c(e,C),c(e,$),c($,j),c(e,N),c(e,F),c(F,R),c(e,U)},p(P,K){K&4&&r!==(r=P[16].name+"")&&re(o,r),K&4&&l!==(l=P[16].lastname+"")&&re(u,l),K&4&&d!==(d=P[16].locaProperty+"")&&re(m,d),K&4&&y!==(y=P[16].tagsProperty+"")&&re(E,y),K&4&&D!==(D=P[16].budget+"")&&re(j,D),K&4&&z!==(z=P[16].rangeProp+"")&&re(R,z)},d(P){P&&w(e)}}}function FI(t){let e,n,s,i,r,o,a,l,u,f=t[1].claveEB+"",h,d,m=t[1].nameProperty+"",_,v,y,E=t[1].selecTP+"",C,$,D=t[1].colonia+"",j,N,F=t[1].locaProperty+"",z,R,U,P,K,Y=t[1].price+"",ie,Q,W,te,x=t[1].beds+"",S,V,O=t[1].bathroom+"",L,ue,de=t[1].halfBathroom+"",De,Ce,nt,be,Ve=t[1].areaBuilding+"",Be,bt,H=t[1].areaTotal+"",ne,ft,dn,Je,gt=t[1].description+"",It,pn,st,wt,Nt,Ot,At,$t,ut,dt,He,Le,Ct,Ne,sn,Qe,it,ct,Wt,xe,Qt,ht,kt,we,Et,ke=t[0]&&ad(t);return{c(){e=p("div"),n=p("div"),s=p("div"),i=p("img"),a=b(),l=p("div"),u=p("h4"),h=A(f),d=b(),_=A(m),v=b(),y=p("h5"),C=A(E),$=A(" en Col. "),j=A(D),N=A(" al "),z=A(F),R=A(" de la ciudad."),U=b(),P=p("h6"),K=A("Precio: "),ie=A(Y),Q=b(),W=p("div"),te=p("h6"),S=A(x),V=A(" Recamaras, "),L=A(O),ue=A(" Ba\xF1os y "),De=A(de),Ce=A(" Medio Ba\xF1o"),nt=b(),be=p("h6"),Be=A(Ve),bt=A(" m2 de construcci\xF3n y "),ne=A(H),ft=A(" m2 de terreno"),dn=b(),Je=p("p"),It=A(gt),pn=b(),st=p("div"),wt=p("a"),Nt=A("Seguir Link en Otra Ventana"),At=b(),$t=p("div"),ut=p("button"),ut.textContent="Enviar por WhatsApp",dt=b(),He=p("button"),He.textContent="Buscar Interesados",Le=b(),Ct=p("div"),Ne=p("button"),Ne.textContent="Regresar",sn=b(),Qe=p("div"),it=p("img"),Wt=b(),xe=p("img"),ht=b(),ke&&ke.c(),kt=_n(),St(i.src,r=t[1].urlImage)||g(i,"src",r),g(i,"alt",o=t[1].nameProperty),g(s,"class","selectImage svelte-1s75tnf"),g(Je,"class","descSelec"),g(l,"class","descSelect"),g(wt,"href",Ot=t[1].urlProp),g(wt,"target","_blank"),g(st,"class","folowLink"),g(ut,"class","btnCommon btnWhatsApp"),g(He,"class","btnCommon"),g($t,"class","optionsSend"),g(Ne,"class","btnCommon btnCancel"),g(Ct,"class","backAnt"),St(it.src,ct=h_)||g(it,"src",ct),g(it,"alt","delete"),St(xe.src,Qt=c_)||g(xe,"src",Qt),g(xe,"alt","delete"),g(Qe,"class","icon__Content"),g(n,"class","sele__info svelte-1s75tnf"),g(e,"class","sele__Product svelte-1s75tnf")},m(Te,fe){k(Te,e,fe),c(e,n),c(n,s),c(s,i),c(n,a),c(n,l),c(l,u),c(u,h),c(u,d),c(u,_),c(l,v),c(l,y),c(y,C),c(y,$),c(y,j),c(y,N),c(y,z),c(y,R),c(l,U),c(l,P),c(P,K),c(P,ie),c(l,Q),c(l,W),c(W,te),c(te,S),c(te,V),c(te,L),c(te,ue),c(te,De),c(te,Ce),c(l,nt),c(l,be),c(be,Be),c(be,bt),c(be,ne),c(be,ft),c(l,dn),c(l,Je),c(Je,It),c(n,pn),c(n,st),c(st,wt),c(wt,Nt),c(n,At),c(n,$t),c($t,ut),c($t,dt),c($t,He),c(n,Le),c(n,Ct),c(Ct,Ne),c(n,sn),c(n,Qe),c(Qe,it),c(Qe,Wt),c(Qe,xe),k(Te,ht,fe),ke&&ke.m(Te,fe),k(Te,kt,fe),we||(Et=[q(ut,"click",t[8]),q(He,"click",t[6]),q(Ne,"click",t[7]),q(it,"click",t[4]),q(xe,"click",t[5])],we=!0)},p(Te,[fe]){fe&2&&!St(i.src,r=Te[1].urlImage)&&g(i,"src",r),fe&2&&o!==(o=Te[1].nameProperty)&&g(i,"alt",o),fe&2&&f!==(f=Te[1].claveEB+"")&&re(h,f),fe&2&&m!==(m=Te[1].nameProperty+"")&&re(_,m),fe&2&&E!==(E=Te[1].selecTP+"")&&re(C,E),fe&2&&D!==(D=Te[1].colonia+"")&&re(j,D),fe&2&&F!==(F=Te[1].locaProperty+"")&&re(z,F),fe&2&&Y!==(Y=Te[1].price+"")&&re(ie,Y),fe&2&&x!==(x=Te[1].beds+"")&&re(S,x),fe&2&&O!==(O=Te[1].bathroom+"")&&re(L,O),fe&2&&de!==(de=Te[1].halfBathroom+"")&&re(De,de),fe&2&&Ve!==(Ve=Te[1].areaBuilding+"")&&re(Be,Ve),fe&2&&H!==(H=Te[1].areaTotal+"")&&re(ne,H),fe&2&&gt!==(gt=Te[1].description+"")&&re(It,gt),fe&2&&Ot!==(Ot=Te[1].urlProp)&&g(wt,"href",Ot),Te[0]?ke?ke.p(Te,fe):(ke=ad(Te),ke.c(),ke.m(kt.parentNode,kt)):ke&&(ke.d(1),ke=null)},i:he,o:he,d(Te){Te&&w(e),Te&&w(ht),ke&&ke.d(Te),Te&&w(kt),we=!1,tt(Et)}}}function VI(t,e,n){let s,i,r;je(t,yt,m=>n(10,s=m)),je(t,rt,m=>n(1,i=m)),je(t,Eg,m=>n(2,r=m)),ki();let o=[],a=!1;function l(){console.log("propEditing"),at(yt,s="propEditing",s),console.log("propEditing")}async function u(){confirm("Deseas eleiminar definitivamente la propiedad?")&&(console.log("Borraste al propiedad"),await wa(is(tn,"properties",i.id)),at(yt,s="start",s))}function f(){UI(i,fr),n(0,a=!0)}function h(){at(rt,i=[],i),at(yt,s="start",s)}return[a,i,r,o,l,u,f,h,()=>void 0]}class BI extends Xe{constructor(e){super(),Ye(this,e,VI,FI,We,{})}}function jI(t){let e;return{c(){e=A("Editar")},m(n,s){k(n,e,s)},d(n){n&&w(e)}}}function qI(t){let e;return{c(){e=A("Guardar")},m(n,s){k(n,e,s)},d(n){n&&w(e)}}}function HI(t){let e,n,s,i,r,o,a,l,u,f,h,d,m,_,v,y;l=new TI({});function E(D,j){return D[0]==="propAdding"?qI:jI}let C=E(t),$=C(t);return{c(){e=p("form"),n=p("div"),s=p("div"),i=p("img"),a=b(),le(l.$$.fragment),u=b(),f=p("div"),h=p("button"),$.c(),d=b(),m=p("button"),m.textContent="Cancel",St(i.src,r=t[1].urlImage)||g(i,"src",r),g(i,"alt",o=t[1].nameProperty),g(i,"class","svelte-166hnhc"),g(h,"class","btn-save"),g(m,"class","btn-cancel"),g(f,"class","contSavCan svelte-166hnhc"),g(n,"class","altaContactos"),g(e,"class","propiedad")},m(D,j){k(D,e,j),c(e,n),c(n,s),c(s,i),c(s,a),oe(l,s,null),c(n,u),c(n,f),c(f,h),$.m(h,null),c(f,d),c(f,m),_=!0,v||(y=[q(m,"click",t[3]),q(e,"submit",Cn(t[2]))],v=!0)},p(D,[j]){(!_||j&2&&!St(i.src,r=D[1].urlImage))&&g(i,"src",r),(!_||j&2&&o!==(o=D[1].nameProperty))&&g(i,"alt",o),C!==(C=E(D))&&($.d(1),$=C(D),$&&($.c(),$.m(h,null)))},i(D){_||(B(l.$$.fragment,D),_=!0)},o(D){G(l.$$.fragment,D),_=!1},d(D){D&&w(e),ae(l),$.d(),v=!1,tt(y)}}}function KI(t,e,n){let s,i;je(t,yt,u=>n(0,s=u)),je(t,rt,u=>n(1,i=u));let r=0;const o=ki();async function a(){if(console.log("Estas en add property",s,i),s==="propEditing")console.log("estas dentro de edit property",i.id),await ba(is(tn,"properties",i.id),i);else{r=Date.now(),at(rt,i={...i,createdAt:r},i),console.log(i);const u=ss(tn,"properties");await lr(u,i)}at(yt,s="start",s)}return[s,i,a,()=>{o("./")}]}class f_ extends Xe{constructor(e){super(),Ye(this,e,KI,HI,We,{})}}function ud(t,e,n){const s=t.slice();return s[23]=e[n],s[25]=n,s}function cd(t,e,n){const s=t.slice();return s[25]=e[n],s}function hd(t,e,n){const s=t.slice();return s[12]=e[n],s[25]=n,s}function fd(t){let e,n,s,i,r,o,a,l,u,f,h,d,m,_,v,y,E,C,$,D,j,N,F;function z(S){t[14](S)}let R={};t[3]!==void 0&&(R.searchTerm=t[3]),r=new ec({props:R}),Xn.push(()=>Fs(r,"searchTerm",z)),r.$on("input",t[11]);let U=t[1],P=[];for(let S=0;S<U.length;S+=1)P[S]=pd(hd(t,U,S));const K=S=>G(P[S],1,1,()=>{P[S]=null});let Y=t[0]>1&&md(t),ie=[3,2,1],Q=[];for(let S=0;S<3;S+=1)Q[S]=_d(cd(t,ie,S));let W=Array(3),te=[];for(let S=0;S<W.length;S+=1)te[S]=yd(ud(t,W,S));let x=t[0]<t[5]&&bd(t);return{c(){e=p("h2"),e.textContent=`${Vn.length} Propiedades a Mostrar`,n=b(),s=p("button"),s.textContent="Alta de Propiedad",i=b(),le(r.$$.fragment),a=b(),l=p("div"),u=p("main");for(let S=0;S<P.length;S+=1)P[S].c();f=b(),h=p("div"),d=p("div"),m=p("ul"),Y&&Y.c(),_=b();for(let S=0;S<3;S+=1)Q[S].c();v=b(),y=p("li"),E=p("span"),C=A(t[0]),$=b();for(let S=0;S<te.length;S+=1)te[S].c();D=b(),x&&x.c(),g(u,"id","bookshelf"),g(u,"class","svelte-elvgtg"),g(m,"class","pagi__options"),g(d,"class","pagi__Item"),g(h,"class","container pagination"),g(l,"class","mosPag")},m(S,V){k(S,e,V),k(S,n,V),k(S,s,V),k(S,i,V),oe(r,S,V),k(S,a,V),k(S,l,V),c(l,u);for(let O=0;O<P.length;O+=1)P[O].m(u,null);c(l,f),c(l,h),c(h,d),c(d,m),Y&&Y.m(m,null),c(m,_);for(let O=0;O<3;O+=1)Q[O].m(m,null);c(m,v),c(m,y),c(y,E),c(E,C),c(m,$);for(let O=0;O<te.length;O+=1)te[O].m(m,null);c(m,D),x&&x.m(m,null),j=!0,N||(F=q(s,"click",t[10]),N=!0)},p(S,V){const O={};if(!o&&V&8&&(o=!0,O.searchTerm=S[3],Us(()=>o=!1)),r.$set(O),V&534){U=S[1];let L;for(L=0;L<U.length;L+=1){const ue=hd(S,U,L);P[L]?(P[L].p(ue,V),B(P[L],1)):(P[L]=pd(ue),P[L].c(),B(P[L],1),P[L].m(u,null))}for(Mt(),L=U.length;L<P.length;L+=1)K(L);Ut()}if(S[0]>1?Y?Y.p(S,V):(Y=md(S),Y.c(),Y.m(m,_)):Y&&(Y.d(1),Y=null),V&257){ie=[3,2,1];let L;for(L=0;L<3;L+=1){const ue=cd(S,ie,L);Q[L]?Q[L].p(ue,V):(Q[L]=_d(ue),Q[L].c(),Q[L].m(m,v))}for(;L<3;L+=1)Q[L].d(1)}if((!j||V&1)&&re(C,S[0]),V&289){W=Array(3);let L;for(L=0;L<W.length;L+=1){const ue=ud(S,W,L);te[L]?te[L].p(ue,V):(te[L]=yd(ue),te[L].c(),te[L].m(m,D))}for(;L<te.length;L+=1)te[L].d(1);te.length=W.length}S[0]<S[5]?x?x.p(S,V):(x=bd(S),x.c(),x.m(m,null)):x&&(x.d(1),x=null)},i(S){if(!j){B(r.$$.fragment,S);for(let V=0;V<U.length;V+=1)B(P[V]);j=!0}},o(S){G(r.$$.fragment,S),P=P.filter(Boolean);for(let V=0;V<P.length;V+=1)G(P[V]);j=!1},d(S){S&&w(e),S&&w(n),S&&w(s),S&&w(i),ae(r,S),S&&w(a),S&&w(l),ze(P,S),Y&&Y.d(),ze(Q,S),ze(te,S),x&&x.d(),N=!1,F()}}}function dd(t){let e,n,s,i,r,o,a;const l=[t[12]];let u={};for(let h=0;h<l.length;h+=1)u=zt(u,l[h]);n=new o_({props:u});function f(){return t[15](t[12])}return{c(){e=p("section"),le(n.$$.fragment),s=b(),g(e,"class","property svelte-elvgtg")},m(h,d){k(h,e,d),oe(n,e,null),c(e,s),r=!0,o||(a=q(e,"click",f),o=!0)},p(h,d){t=h;const m=d&2?Sn(l,[Jn(t[12])]):{};n.$set(m)},i(h){r||(B(n.$$.fragment,h),et(()=>{i||(i=En(e,wi,{duration:500,easing:bi},!0)),i.run(1)}),r=!0)},o(h){G(n.$$.fragment,h),i||(i=En(e,wi,{duration:500,easing:bi},!1)),i.run(0),r=!1},d(h){h&&w(e),ae(n),h&&i&&i.end(),o=!1,a()}}}function pd(t){let e,n,s=t[25]>=t[4]&&t[25]<t[2]&&dd(t);return{c(){s&&s.c(),e=_n()},m(i,r){s&&s.m(i,r),k(i,e,r),n=!0},p(i,r){i[25]>=i[4]&&i[25]<i[2]?s?(s.p(i,r),r&20&&B(s,1)):(s=dd(i),s.c(),B(s,1),s.m(e.parentNode,e)):s&&(Mt(),G(s,1,1,()=>{s=null}),Ut())},i(i){n||(B(s),n=!0)},o(i){G(s),n=!1},d(i){s&&s.d(i),i&&w(e)}}}function md(t){let e,n,s,i,r,o,a,l,u;return{c(){e=p("li"),n=p("a"),n.textContent="first",s=b(),i=p("li"),r=p("a"),o=A("previous"),g(n,"href","/blog"),g(r,"href",a="/blog/"+(t[0]-1))},m(f,h){k(f,e,h),c(e,n),k(f,s,h),k(f,i,h),c(i,r),c(r,o),l||(u=[q(n,"click",Cn(t[16])),q(r,"click",Cn(t[17]))],l=!0)},p(f,h){h&1&&a!==(a="/blog/"+(f[0]-1))&&g(r,"href",a)},d(f){f&&w(e),f&&w(s),f&&w(i),l=!1,tt(u)}}}function gd(t){let e,n,s=t[0]-t[25]+"",i,r,o,a;function l(){return t[18](t[25])}return{c(){e=p("li"),n=p("a"),i=A(s),g(n,"href",r="/blog/"+(t[0]-t[25]))},m(u,f){k(u,e,f),c(e,n),c(n,i),o||(a=q(n,"click",Cn(l)),o=!0)},p(u,f){t=u,f&1&&s!==(s=t[0]-t[25]+"")&&re(i,s),f&1&&r!==(r="/blog/"+(t[0]-t[25]))&&g(n,"href",r)},d(u){u&&w(e),o=!1,a()}}}function _d(t){let e,n=t[0]-t[25]>0&&gd(t);return{c(){n&&n.c(),e=_n()},m(s,i){n&&n.m(s,i),k(s,e,i)},p(s,i){s[0]-s[25]>0?n?n.p(s,i):(n=gd(s),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(s){n&&n.d(s),s&&w(e)}}}function vd(t){let e,n,s=t[0]+(t[25]+1)+"",i,r,o,a;function l(){return t[19](t[25])}return{c(){e=p("li"),n=p("a"),i=A(s),g(n,"href",r="/blog/"+(t[0]+(t[25]+1)))},m(u,f){k(u,e,f),c(e,n),c(n,i),o||(a=q(n,"click",Cn(l)),o=!0)},p(u,f){t=u,f&1&&s!==(s=t[0]+(t[25]+1)+"")&&re(i,s),f&1&&r!==(r="/blog/"+(t[0]+(t[25]+1)))&&g(n,"href",r)},d(u){u&&w(e),o=!1,a()}}}function yd(t){let e,n=t[0]+(t[25]+1)<=t[5]&&vd(t);return{c(){n&&n.c(),e=_n()},m(s,i){n&&n.m(s,i),k(s,e,i)},p(s,i){s[0]+(s[25]+1)<=s[5]?n?n.p(s,i):(n=vd(s),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(s){n&&n.d(s),s&&w(e)}}}function bd(t){let e,n,s,i,r,o,a,l,u,f,h;return{c(){e=p("li"),n=p("a"),s=A("next"),r=b(),o=p("li"),a=p("a"),l=A("last"),g(n,"href",i="/blog/"+(t[0]+1)),g(a,"href",u="/blog/"+t[5])},m(d,m){k(d,e,m),c(e,n),c(n,s),k(d,r,m),k(d,o,m),c(o,a),c(a,l),f||(h=[q(n,"click",Cn(t[20])),q(a,"click",Cn(t[21]))],f=!0)},p(d,m){m&1&&i!==(i="/blog/"+(d[0]+1))&&g(n,"href",i),m&32&&u!==(u="/blog/"+d[5])&&g(a,"href",u)},d(d){d&&w(e),d&&w(r),d&&w(o),f=!1,tt(h)}}}function wd(t){let e,n,s;const i=[t[7]];let r={};for(let o=0;o<i.length;o+=1)r=zt(r,i[o]);return n=new BI({props:r}),{c(){e=p("div"),le(n.$$.fragment)},m(o,a){k(o,e,a),oe(n,e,null),s=!0},p(o,a){const l=a&128?Sn(i,[Jn(o[7])]):{};n.$set(l)},i(o){s||(B(n.$$.fragment,o),s=!0)},o(o){G(n.$$.fragment,o),s=!1},d(o){o&&w(e),ae(n)}}}function kd(t){let e,n,s;const i=[t[7]];let r={};for(let o=0;o<i.length;o+=1)r=zt(r,i[o]);return n=new f_({props:r}),{c(){e=p("div"),le(n.$$.fragment),g(e,"class","container")},m(o,a){k(o,e,a),oe(n,e,null),s=!0},p(o,a){const l=a&128?Sn(i,[Jn(o[7])]):{};n.$set(l)},i(o){s||(B(n.$$.fragment,o),s=!0)},o(o){G(n.$$.fragment,o),s=!1},d(o){o&&w(e),ae(n)}}}function Ed(t){let e,n,s;return n=new f_({}),{c(){e=p("div"),le(n.$$.fragment),g(e,"class","container")},m(i,r){k(i,e,r),oe(n,e,null),s=!0},i(i){s||(B(n.$$.fragment,i),s=!0)},o(i){G(n.$$.fragment,i),s=!1},d(i){i&&w(e),ae(n)}}}function zI(t){let e,n,s,i,r,o,a,l,u,f,h,d=t[6]==="start"&&fd(t),m=t[6]==="propSelect"&&wd(t),_=t[6]==="propEditing"&&kd(t),v=t[6]==="propAdding"&&Ed();return{c(){e=p("div"),n=p("div"),s=p("h1"),s.textContent="Propiedades",i=b(),r=p("img"),a=b(),d&&d.c(),l=b(),m&&m.c(),u=b(),_&&_.c(),f=b(),v&&v.c(),St(r.src,o=i_)||g(r,"src",o),g(r,"alt","propiedad"),g(r,"class","imgTitle svelte-elvgtg"),g(e,"class","container")},m(y,E){k(y,e,E),c(e,n),c(n,s),c(n,i),c(n,r),c(e,a),d&&d.m(e,null),c(e,l),m&&m.m(e,null),c(e,u),_&&_.m(e,null),c(e,f),v&&v.m(e,null),h=!0},p(y,[E]){y[6]==="start"?d?(d.p(y,E),E&64&&B(d,1)):(d=fd(y),d.c(),B(d,1),d.m(e,l)):d&&(Mt(),G(d,1,1,()=>{d=null}),Ut()),y[6]==="propSelect"?m?(m.p(y,E),E&64&&B(m,1)):(m=wd(y),m.c(),B(m,1),m.m(e,u)):m&&(Mt(),G(m,1,1,()=>{m=null}),Ut()),y[6]==="propEditing"?_?(_.p(y,E),E&64&&B(_,1)):(_=kd(y),_.c(),B(_,1),_.m(e,f)):_&&(Mt(),G(_,1,1,()=>{_=null}),Ut()),y[6]==="propAdding"?v?E&64&&B(v,1):(v=Ed(),v.c(),B(v,1),v.m(e,null)):v&&(Mt(),G(v,1,1,()=>{v=null}),Ut())},i(y){h||(B(d),B(m),B(_),B(v),h=!0)},o(y){G(d),G(m),G(_),G(v),h=!1},d(y){y&&w(e),d&&d.d(),m&&m.d(),_&&_.d(),v&&v.d()}}}let Za=20;function GI(t,e,n){let s,i,r,o,a,l;je(t,yt,R=>n(6,a=R)),je(t,rt,R=>n(7,l=R));let u,f;at(yt,a="start",a);let h=1,d=Vn;const m=R=>{n(0,h=R)};d=Vn;function _(R){console.log(R),at(rt,l=R,l),at(yt,a="propSelect",a)}function v(){at(yt,a="propAdding",a)}function y(){return n(1,d=Vn.filter(R=>(R.nameProperty+" "+R.colonia).toLowerCase().includes(u.toLowerCase())))}n(1,d=Vn.sort((R,U)=>R.createdAt<U.createdAt?1:R.createdAt>U.createdAt?-1:0));function E(R){u=R,n(3,u)}const C=R=>_(R),$=()=>m(1),D=()=>m(h-1),j=R=>m(h-R),N=R=>m(h+(R+1)),F=()=>m(h+1),z=()=>m(i);return t.$$.update=()=>{t.$$.dirty&2&&n(13,s=d.length),t.$$.dirty&8192&&n(5,i=Math.ceil(s/Za)),t.$$.dirty&1&&n(2,r=h*Za),t.$$.dirty&4&&n(4,o=r-Za)},[h,d,r,u,o,i,a,l,m,_,v,y,f,s,E,C,$,D,j,N,F,z]}class WI extends Xe{constructor(e){super(),Ye(this,e,GI,zI,We,{})}}function QI(t){let e;return{c(){e=p("h1"),e.textContent="Captacion"},m(n,s){k(n,e,s)},p:he,i:he,o:he,d(n){n&&w(e)}}}class xI extends Xe{constructor(e){super(),Ye(this,e,null,QI,We,{})}}function YI(t){let e,n,s,i,r=t[0].task+"",o;return{c(){e=p("div"),n=p("h1"),n.textContent="Estas en About",s=b(),i=p("h3"),o=A(r),g(e,"class","cont")},m(a,l){k(a,e,l),c(e,n),c(e,s),c(e,i),c(i,o)},p(a,[l]){l&1&&r!==(r=a[0].task+"")&&re(o,r)},i:he,o:he,d(a){a&&w(e)}}}function XI(t,e,n){let s;return je(t,Rn,i=>n(0,s=i)),[s]}class JI extends Xe{constructor(e){super(),Ye(this,e,XI,YI,We,{})}}function ZI(t){let e,n,s,i;return{c(){e=p("div"),n=p("div"),s=A(t[0]),g(n,"id","snackbar"),g(n,"class",i=rc(t[1]?"animation-in":"not-show")+" svelte-1e3w4r3")},m(r,o){k(r,e,o),c(e,n),c(n,s)},p(r,[o]){o&1&&re(s,r[0]),o&2&&i!==(i=rc(r[1]?"animation-in":"not-show")+" svelte-1e3w4r3")&&g(n,"class",i)},i:he,o:he,d(r){r&&w(e)}}}function eC(t,e,n){let{message:s=""}=e,{show:i=!1}=e;return t.$$set=r=>{"message"in r&&n(0,s=r.message),"show"in r&&n(1,i=r.show)},[s,i]}class tC extends Xe{constructor(e){super(),Ye(this,e,eC,ZI,We,{message:0,show:1})}}function nC(t){let e;return{c(){e=A("Registrarse")},m(n,s){k(n,e,s)},d(n){n&&w(e)}}}function sC(t){let e,n,s,i,r,o,a,l,u,f,h,d,m,_,v,y,E,C,$,D,j,N,F,z,R,U,P,K,Y,ie,Q;return n=new tC({props:{message:t[0],show:t[1]}}),K=new wn({props:{to:"/register",$$slots:{default:[nC]},$$scope:{ctx:t}}}),{c(){e=p("div"),le(n.$$.fragment),s=b(),i=p("br"),r=p("br"),o=p("br"),a=b(),l=p("div"),u=p("h1"),u.textContent="Inicia sesi\xF3n en tu cuenta",f=b(),h=p("div"),d=p("input"),m=b(),_=p("div"),v=p("input"),y=b(),E=p("br"),C=b(),$=p("div"),D=p("button"),D.textContent="Iniciar sesi\xF3n",j=b(),N=p("p"),N.textContent="O tambi\xE9n",F=b(),z=p("br"),R=b(),U=p("p"),P=A("\xBFA\xFAn no tienes cuenta? "),le(K.$$.fragment),g(u,"class","text-center text-login svelte-ftg4em"),g(d,"name","email"),g(d,"type","text"),g(d,"class","input-form svelte-ftg4em"),g(d,"placeholder","Correo"),g(h,"class","center svelte-ftg4em"),g(v,"name","password"),g(v,"type","password"),g(v,"class","input-form svelte-ftg4em"),g(v,"placeholder","Contrase\xF1a"),g(_,"class","center svelte-ftg4em"),g(D,"class","button-signup fondo-color-signup svelte-ftg4em"),g($,"class","center svelte-ftg4em"),g(N,"class","text-center svelte-ftg4em"),g(U,"class","text-center svelte-ftg4em"),g(l,"class","form-signin svelte-ftg4em")},m(W,te){k(W,e,te),oe(n,e,null),c(e,s),c(e,i),c(e,r),c(e,o),c(e,a),c(e,l),c(l,u),c(l,f),c(l,h),c(h,d),c(l,m),c(l,_),c(_,v),c(l,y),c(l,E),c(l,C),c(l,$),c($,D),c(l,j),c(l,N),c(l,F),c(l,z),c(l,R),c(l,U),c(U,P),oe(K,U,null),Y=!0,ie||(Q=[q(d,"input",t[4]),q(v,"input",t[5]),q(D,"click",t[3])],ie=!0)},p(W,[te]){const x={};te&1&&(x.message=W[0]),te&2&&(x.show=W[1]),n.$set(x);const S={};te&512&&(S.$$scope={dirty:te,ctx:W}),K.$set(S)},i(W){Y||(B(n.$$.fragment,W),B(K.$$.fragment,W),Y=!0)},o(W){G(n.$$.fragment,W),G(K.$$.fragment,W),Y=!1},d(W){W&&w(e),ae(n),ae(K),ie=!1,tt(Q)}}}function iC(t,e,n){const s=ki();let i={email:"",password:""},r="",o=!1;const a=d=>{n(0,r=d),n(1,o=!0),setTimeout(()=>{n(1,o=!1)},2800)},l=d=>{i={...i,[d.target.name]:d.target.value}};return[r,o,l,async()=>{try{await tE(e_,i.email,i.password),s("/")}catch(d){d.message==="Firebase: Error (auth/wrong-password)."&&a("Contrase\xF1a incorrecta")}},d=>l(d),d=>l(d)]}class rC extends Xe{constructor(e){super(),Ye(this,e,iC,sC,We,{})}}class oC extends Xe{constructor(e){super(),Ye(this,e,null,null,We,{})}}function aC(t){let e;return{c(){e=A("Home")},m(n,s){k(n,e,s)},d(n){n&&w(e)}}}function lC(t){let e;return{c(){e=A("Contactos")},m(n,s){k(n,e,s)},d(n){n&&w(e)}}}function uC(t){let e;return{c(){e=A("Propiedades")},m(n,s){k(n,e,s)},d(n){n&&w(e)}}}function cC(t){let e;return{c(){e=A("Agenda")},m(n,s){k(n,e,s)},d(n){n&&w(e)}}}function hC(t){let e;return{c(){e=A("LogOut")},m(n,s){k(n,e,s)},d(n){n&&w(e)}}}function fC(t){let e;return{c(){e=A("About")},m(n,s){k(n,e,s)},d(n){n&&w(e)}}}function dC(t){let e;return{c(){e=A("Registro")},m(n,s){k(n,e,s)},d(n){n&&w(e)}}}function pC(t){let e;return{c(){e=A("Login")},m(n,s){k(n,e,s)},d(n){n&&w(e)}}}function mC(t){let e,n;return e=new ZT({}),{c(){le(e.$$.fragment)},m(s,i){oe(e,s,i),n=!0},i(s){n||(B(e.$$.fragment,s),n=!0)},o(s){G(e.$$.fragment,s),n=!1},d(s){ae(e,s)}}}function gC(t){let e,n;return e=new MI({}),{c(){le(e.$$.fragment)},m(s,i){oe(e,s,i),n=!0},i(s){n||(B(e.$$.fragment,s),n=!0)},o(s){G(e.$$.fragment,s),n=!1},d(s){ae(e,s)}}}function _C(t){let e,n;return e=new WI({}),{c(){le(e.$$.fragment)},m(s,i){oe(e,s,i),n=!0},i(s){n||(B(e.$$.fragment,s),n=!0)},o(s){G(e.$$.fragment,s),n=!1},d(s){ae(e,s)}}}function vC(t){let e,n;return e=new xI({}),{c(){le(e.$$.fragment)},m(s,i){oe(e,s,i),n=!0},i(s){n||(B(e.$$.fragment,s),n=!0)},o(s){G(e.$$.fragment,s),n=!1},d(s){ae(e,s)}}}function yC(t){let e,n;return e=new t_({}),{c(){le(e.$$.fragment)},m(s,i){oe(e,s,i),n=!0},i(s){n||(B(e.$$.fragment,s),n=!0)},o(s){G(e.$$.fragment,s),n=!1},d(s){ae(e,s)}}}function bC(t){let e,n;return e=new n_({}),{c(){le(e.$$.fragment)},m(s,i){oe(e,s,i),n=!0},i(s){n||(B(e.$$.fragment,s),n=!0)},o(s){G(e.$$.fragment,s),n=!1},d(s){ae(e,s)}}}function wC(t){let e,n;return e=new JI({}),{c(){le(e.$$.fragment)},m(s,i){oe(e,s,i),n=!0},i(s){n||(B(e.$$.fragment,s),n=!0)},o(s){G(e.$$.fragment,s),n=!1},d(s){ae(e,s)}}}function kC(t){let e,n;return e=new oC({}),{c(){le(e.$$.fragment)},m(s,i){oe(e,s,i),n=!0},i(s){n||(B(e.$$.fragment,s),n=!0)},o(s){G(e.$$.fragment,s),n=!1},d(s){ae(e,s)}}}function EC(t){let e,n;return e=new rC({}),{c(){le(e.$$.fragment)},m(s,i){oe(e,s,i),n=!0},i(s){n||(B(e.$$.fragment,s),n=!0)},o(s){G(e.$$.fragment,s),n=!1},d(s){ae(e,s)}}}function TC(t){let e,n;return e=new Zu({}),{c(){le(e.$$.fragment)},m(s,i){oe(e,s,i),n=!0},i(s){n||(B(e.$$.fragment,s),n=!0)},o(s){G(e.$$.fragment,s),n=!1},d(s){ae(e,s)}}}function IC(t){let e,n,s,i,r,o,a,l,u,f,h,d,m,_,v,y,E,C,$,D,j,N,F,z,R,U,P,K,Y,ie,Q,W,te,x,S,V,O,L,ue,de,De,Ce,nt,be,Ve,Be,bt;return d=new wn({props:{to:"/",$$slots:{default:[aC]},$$scope:{ctx:t}}}),_=new wn({props:{to:"contactos",$$slots:{default:[lC]},$$scope:{ctx:t}}}),y=new wn({props:{to:"propiedades",$$slots:{default:[uC]},$$scope:{ctx:t}}}),C=new wn({props:{to:"agenda",$$slots:{default:[cC]},$$scope:{ctx:t}}}),D=new wn({props:{to:"/about",$$slots:{default:[hC]},$$scope:{ctx:t}}}),D.$on("click",t[0]),N=new wn({props:{to:"about",$$slots:{default:[fC]},$$scope:{ctx:t}}}),z=new wn({props:{to:"register",$$slots:{default:[dC]},$$scope:{ctx:t}}}),U=new wn({props:{to:"login",$$slots:{default:[pC]},$$scope:{ctx:t}}}),K=new bn({props:{path:"/",$$slots:{default:[mC]},$$scope:{ctx:t}}}),ie=new bn({props:{path:"/contactos",$$slots:{default:[gC]},$$scope:{ctx:t}}}),W=new bn({props:{path:"propiedades",$$slots:{default:[_C]},$$scope:{ctx:t}}}),x=new bn({props:{path:"captacion",$$slots:{default:[vC]},$$scope:{ctx:t}}}),V=new bn({props:{path:"agenda",$$slots:{default:[yC]},$$scope:{ctx:t}}}),L=new bn({props:{path:"sinergias",$$slots:{default:[bC]},$$scope:{ctx:t}}}),de=new bn({props:{path:"about",$$slots:{default:[wC]},$$scope:{ctx:t}}}),Ce=new bn({props:{path:"logout",$$slots:{default:[kC]},$$scope:{ctx:t}}}),be=new bn({props:{path:"login",$$slots:{default:[EC]},$$scope:{ctx:t}}}),Be=new bn({props:{path:"register",$$slots:{default:[TC]},$$scope:{ctx:t}}}),{c(){e=p("div"),n=p("img"),i=b(),r=p("label"),o=p("img"),l=b(),u=p("input"),f=b(),h=p("div"),le(d.$$.fragment),m=b(),le(_.$$.fragment),v=b(),le(y.$$.fragment),E=b(),le(C.$$.fragment),$=b(),le(D.$$.fragment),j=b(),le(N.$$.fragment),F=b(),le(z.$$.fragment),R=b(),le(U.$$.fragment),P=b(),le(K.$$.fragment),Y=b(),le(ie.$$.fragment),Q=b(),le(W.$$.fragment),te=b(),le(x.$$.fragment),S=b(),le(V.$$.fragment),O=b(),le(L.$$.fragment),ue=b(),le(de.$$.fragment),De=b(),le(Ce.$$.fragment),nt=b(),le(be.$$.fragment),Ve=b(),le(Be.$$.fragment),St(n.src,s=Ov)||g(n,"src",s),g(n,"alt","MatchHome"),g(n,"class","nav__logo svelte-1viw6tr"),St(o.src,a=$v)||g(o,"src",a),g(o,"class","nav__img svelte-1viw6tr"),g(o,"alt","menu"),g(r,"class","nav__label svelte-1viw6tr"),g(r,"for","menu"),g(u,"type","checkbox"),g(u,"id","menu"),g(u,"class","nav__input svelte-1viw6tr"),g(h,"class","nav__menu svelte-1viw6tr"),g(e,"class","nav__container svelte-1viw6tr")},m(H,ne){k(H,e,ne),c(e,n),c(e,i),c(e,r),c(r,o),c(e,l),c(e,u),c(e,f),c(e,h),oe(d,h,null),c(h,m),oe(_,h,null),c(h,v),oe(y,h,null),c(h,E),oe(C,h,null),c(h,$),oe(D,h,null),c(h,j),oe(N,h,null),c(h,F),oe(z,h,null),c(h,R),oe(U,h,null),k(H,P,ne),oe(K,H,ne),k(H,Y,ne),oe(ie,H,ne),k(H,Q,ne),oe(W,H,ne),k(H,te,ne),oe(x,H,ne),k(H,S,ne),oe(V,H,ne),k(H,O,ne),oe(L,H,ne),k(H,ue,ne),oe(de,H,ne),k(H,De,ne),oe(Ce,H,ne),k(H,nt,ne),oe(be,H,ne),k(H,Ve,ne),oe(Be,H,ne),bt=!0},p(H,ne){const ft={};ne&8&&(ft.$$scope={dirty:ne,ctx:H}),d.$set(ft);const dn={};ne&8&&(dn.$$scope={dirty:ne,ctx:H}),_.$set(dn);const Je={};ne&8&&(Je.$$scope={dirty:ne,ctx:H}),y.$set(Je);const gt={};ne&8&&(gt.$$scope={dirty:ne,ctx:H}),C.$set(gt);const It={};ne&8&&(It.$$scope={dirty:ne,ctx:H}),D.$set(It);const pn={};ne&8&&(pn.$$scope={dirty:ne,ctx:H}),N.$set(pn);const st={};ne&8&&(st.$$scope={dirty:ne,ctx:H}),z.$set(st);const wt={};ne&8&&(wt.$$scope={dirty:ne,ctx:H}),U.$set(wt);const Nt={};ne&8&&(Nt.$$scope={dirty:ne,ctx:H}),K.$set(Nt);const Ot={};ne&8&&(Ot.$$scope={dirty:ne,ctx:H}),ie.$set(Ot);const At={};ne&8&&(At.$$scope={dirty:ne,ctx:H}),W.$set(At);const $t={};ne&8&&($t.$$scope={dirty:ne,ctx:H}),x.$set($t);const ut={};ne&8&&(ut.$$scope={dirty:ne,ctx:H}),V.$set(ut);const dt={};ne&8&&(dt.$$scope={dirty:ne,ctx:H}),L.$set(dt);const He={};ne&8&&(He.$$scope={dirty:ne,ctx:H}),de.$set(He);const Le={};ne&8&&(Le.$$scope={dirty:ne,ctx:H}),Ce.$set(Le);const Ct={};ne&8&&(Ct.$$scope={dirty:ne,ctx:H}),be.$set(Ct);const Ne={};ne&8&&(Ne.$$scope={dirty:ne,ctx:H}),Be.$set(Ne)},i(H){bt||(B(d.$$.fragment,H),B(_.$$.fragment,H),B(y.$$.fragment,H),B(C.$$.fragment,H),B(D.$$.fragment,H),B(N.$$.fragment,H),B(z.$$.fragment,H),B(U.$$.fragment,H),B(K.$$.fragment,H),B(ie.$$.fragment,H),B(W.$$.fragment,H),B(x.$$.fragment,H),B(V.$$.fragment,H),B(L.$$.fragment,H),B(de.$$.fragment,H),B(Ce.$$.fragment,H),B(be.$$.fragment,H),B(Be.$$.fragment,H),bt=!0)},o(H){G(d.$$.fragment,H),G(_.$$.fragment,H),G(y.$$.fragment,H),G(C.$$.fragment,H),G(D.$$.fragment,H),G(N.$$.fragment,H),G(z.$$.fragment,H),G(U.$$.fragment,H),G(K.$$.fragment,H),G(ie.$$.fragment,H),G(W.$$.fragment,H),G(x.$$.fragment,H),G(V.$$.fragment,H),G(L.$$.fragment,H),G(de.$$.fragment,H),G(Ce.$$.fragment,H),G(be.$$.fragment,H),G(Be.$$.fragment,H),bt=!1},d(H){H&&w(e),ae(d),ae(_),ae(y),ae(C),ae(D),ae(N),ae(z),ae(U),H&&w(P),ae(K,H),H&&w(Y),ae(ie,H),H&&w(Q),ae(W,H),H&&w(te),ae(x,H),H&&w(S),ae(V,H),H&&w(O),ae(L,H),H&&w(ue),ae(de,H),H&&w(De),ae(Ce,H),H&&w(nt),ae(be,H),H&&w(Ve),ae(Be,H)}}}function CC(t){let e,n,s;return n=new Gl({props:{$$slots:{default:[IC]},$$scope:{ctx:t}}}),{c(){e=p("nav"),le(n.$$.fragment),g(e,"class","nav svelte-1viw6tr")},m(i,r){k(i,e,r),oe(n,e,null),s=!0},p(i,[r]){const o={};r&8&&(o.$$scope={dirty:r,ctx:i}),n.$set(o)},i(i){s||(B(n.$$.fragment,i),s=!0)},o(i){G(n.$$.fragment,i),s=!1},d(i){i&&w(e),ae(n)}}}function SC(t,e,n){let s;je(t,Qh,r=>n(2,s=r)),console.log("logged? ",s),Qh.subscribe(r=>{});async function i(){console.log(s)}return[i]}class AC extends Xe{constructor(e){super(),Ye(this,e,SC,CC,We,{})}}function Td(t){let e;return{c(){e=p("div"),e.innerHTML=`<h1 class="title svelte-1kx2964">Bienvendo A:</h1> 
      <img src="src/assets/images/logoMH.png" alt="MatchHome" class="svelte-1kx2964"/> 
      <div class=""><p class="desc__intro svelte-1kx2964">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod aut aliquam, expedita perferendis consequatur modi omnis! Nostrum iste necessitatibus quisquam numquam, aliquam ipsum. Sit, similique quis. Fuga vitae possimus quisquam quam. Unde accusantium neque veniam reprehenderit, laborum, magni ut quasi asperiores a amet fugiat non, sapiente obcaecati voluptas ab! Nostrum!</p> 
        <p><strong>www.matchhome.net</strong></p></div>`,g(e,"class","intro svelte-1kx2964")},m(n,s){k(n,e,s)},d(n){n&&w(e)}}}function DC(t){let e,n,s,i,r;n=new AC({});let o=t[0]&&Td();return{c(){e=p("nav"),le(n.$$.fragment),s=b(),i=p("body"),o&&o.c(),g(e,"class","navBar")},m(a,l){k(a,e,l),oe(n,e,null),k(a,s,l),k(a,i,l),o&&o.m(i,null),r=!0},p(a,[l]){a[0]?o||(o=Td(),o.c(),o.m(i,null)):o&&(o.d(1),o=null)},i(a){r||(B(n.$$.fragment,a),r=!0)},o(a){G(n.$$.fragment,a),r=!1},d(a){a&&w(e),ae(n),a&&w(s),a&&w(i),o&&o.d()}}}function RC(t,e,n){let s=!0;return setTimeout(()=>{n(0,s=!1),console.log("object")},1500),[s]}class PC extends Xe{constructor(e){super(),Ye(this,e,RC,DC,We,{})}}new PC({target:document.getElementById("app")});
