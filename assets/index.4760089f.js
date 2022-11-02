(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function ue(){}const jd=t=>t;function Mt(t,e){for(const n in e)t[n]=e[n];return t}function qd(t){return t()}function lu(){return Object.create(null)}function Ye(t){t.forEach(qd)}function Ho(t){return typeof t=="function"}function He(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let zr;function ct(t,e){return zr||(zr=document.createElement("a")),zr.href=e,t===zr.href}function L_(t){return Object.keys(t).length===0}function Fl(t,...e){if(t==null)return ue;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function fi(t){let e;return Fl(t,n=>e=n)(),e}function Ue(t,e,n){t.$$.on_destroy.push(Fl(e,n))}function Vl(t,e,n,s){if(t){const i=Hd(t,e,n,s);return t[0](i)}}function Hd(t,e,n,s){return t[1]&&s?Mt(n.ctx.slice(),t[1](s(e))):n.ctx}function Bl(t,e,n,s){if(t[2]&&s){const i=t[2](s(n));if(e.dirty===void 0)return i;if(typeof i=="object"){const r=[],o=Math.max(e.dirty.length,i.length);for(let a=0;a<o;a+=1)r[a]=e.dirty[a]|i[a];return r}return e.dirty|i}return e.dirty}function jl(t,e,n,s,i,r){if(i){const o=Hd(e,n,s,r);t.p(o,i)}}function ql(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let s=0;s<n;s++)e[s]=-1;return e}return-1}function uo(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function ho(t,e){const n={};e=new Set(e);for(const s in t)!e.has(s)&&s[0]!=="$"&&(n[s]=t[s]);return n}function cu(t){return t==null?"":t}function Xe(t,e,n){return t.set(n),e}const Kd=typeof window<"u";let M_=Kd?()=>window.performance.now():()=>Date.now(),Hl=Kd?t=>requestAnimationFrame(t):ue;const ai=new Set;function zd(t){ai.forEach(e=>{e.c(t)||(ai.delete(e),e.f())}),ai.size!==0&&Hl(zd)}function $_(t){let e;return ai.size===0&&Hl(zd),{promise:new Promise(n=>{ai.add(e={c:t,f:n})}),abort(){ai.delete(e)}}}function u(t,e){t.appendChild(e)}function Gd(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function U_(t){const e=p("style");return F_(Gd(t),e),e.sheet}function F_(t,e){return u(t.head||t,e),e.sheet}function w(t,e,n){t.insertBefore(e,n||null)}function b(t){t.parentNode.removeChild(t)}function qe(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function p(t){return document.createElement(t)}function S(t){return document.createTextNode(t)}function k(){return S(" ")}function sn(){return S("")}function j(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function gn(t){return function(e){return e.preventDefault(),t.call(this,e)}}function g(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function On(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const s in e)e[s]==null?t.removeAttribute(s):s==="style"?t.style.cssText=e[s]:s==="__value"?t.value=t[s]=e[s]:n[s]&&n[s].set?t[s]=e[s]:g(t,s,e[s])}function Bt(t,e,n){const s=new Set;for(let i=0;i<t.length;i+=1)t[i].checked&&s.add(t[i].__value);return n||s.delete(e),Array.from(s)}function ps(t){return t===""?null:+t}function V_(t){return Array.from(t.childNodes)}function ie(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function de(t,e){t.value=e==null?"":e}function $e(t,e){for(let n=0;n<t.options.length;n+=1){const s=t.options[n];if(s.__value===e){s.selected=!0;return}}t.selectedIndex=-1}function Vt(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}function bs(t,e,n){t.classList[n?"add":"remove"](e)}function Wd(t,e,{bubbles:n=!1,cancelable:s=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,s,e),i}function uu(t,e){return new t(e)}const fo=new Map;let po=0;function B_(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function j_(t,e){const n={stylesheet:U_(e),rules:{}};return fo.set(t,n),n}function hu(t,e,n,s,i,r,o,a=0){const l=16.666/s;let c=`{
`;for(let y=0;y<=1;y+=l){const E=e+(n-e)*r(y);c+=y*100+`%{${o(E,1-E)}}
`}const h=c+`100% {${o(n,1-n)}}
}`,f=`__svelte_${B_(h)}_${a}`,d=Gd(t),{stylesheet:m,rules:_}=fo.get(d)||j_(d,t);_[f]||(_[f]=!0,m.insertRule(`@keyframes ${f} ${h}`,m.cssRules.length));const v=t.style.animation||"";return t.style.animation=`${v?`${v}, `:""}${f} ${s}ms linear ${i}ms 1 both`,po+=1,f}function q_(t,e){const n=(t.style.animation||"").split(", "),s=n.filter(e?r=>r.indexOf(e)<0:r=>r.indexOf("__svelte")===-1),i=n.length-s.length;i&&(t.style.animation=s.join(", "),po-=i,po||H_())}function H_(){Hl(()=>{po||(fo.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&b(e)}),fo.clear())})}let xi;function qi(t){xi=t}function pr(){if(!xi)throw new Error("Function called outside component initialization");return xi}function K_(t){pr().$$.on_mount.push(t)}function z_(t){pr().$$.on_destroy.push(t)}function Qd(){const t=pr();return(e,n,{cancelable:s=!1}={})=>{const i=t.$$.callbacks[e];if(i){const r=Wd(e,n,{cancelable:s});return i.slice().forEach(o=>{o.call(t,r)}),!r.defaultPrevented}return!0}}function Hi(t,e){return pr().$$.context.set(t,e),e}function ws(t){return pr().$$.context.get(t)}function G_(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(s=>s.call(this,e))}const Li=[],Xn=[],eo=[],el=[],Yd=Promise.resolve();let tl=!1;function xd(){tl||(tl=!0,Yd.then(Xd))}function W_(){return xd(),Yd}function xe(t){eo.push(t)}function Vs(t){el.push(t)}const Sa=new Set;let Gr=0;function Xd(){const t=xi;do{for(;Gr<Li.length;){const e=Li[Gr];Gr++,qi(e),Q_(e.$$)}for(qi(null),Li.length=0,Gr=0;Xn.length;)Xn.pop()();for(let e=0;e<eo.length;e+=1){const n=eo[e];Sa.has(n)||(Sa.add(n),n())}eo.length=0}while(Li.length);for(;el.length;)el.pop()();tl=!1,Sa.clear(),qi(t)}function Q_(t){if(t.fragment!==null){t.update(),Ye(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(xe)}}let Ni;function Y_(){return Ni||(Ni=Promise.resolve(),Ni.then(()=>{Ni=null})),Ni}function Aa(t,e,n){t.dispatchEvent(Wd(`${e?"intro":"outro"}${n}`))}const to=new Set;let zn;function kt(){zn={r:0,c:[],p:zn}}function Et(){zn.r||Ye(zn.c),zn=zn.p}function q(t,e){t&&t.i&&(to.delete(t),t.i(e))}function x(t,e,n,s){if(t&&t.o){if(to.has(t))return;to.add(t),zn.c.push(()=>{to.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}const x_={duration:0};function dn(t,e,n,s){let i=e(t,n),r=s?0:1,o=null,a=null,l=null;function c(){l&&q_(t,l)}function h(d,m){const _=d.b-r;return m*=Math.abs(_),{a:r,b:d.b,d:_,duration:m,start:d.start,end:d.start+m,group:d.group}}function f(d){const{delay:m=0,duration:_=300,easing:v=jd,tick:y=ue,css:E}=i||x_,T={start:M_()+m,b:d};d||(T.group=zn,zn.r+=1),o||a?a=T:(E&&(c(),l=hu(t,r,d,_,m,v,E)),d&&y(0,1),o=h(T,_),xe(()=>Aa(t,d,"start")),$_(P=>{if(a&&P>a.start&&(o=h(a,_),a=null,Aa(t,o.b,"start"),E&&(c(),l=hu(t,r,o.b,o.duration,0,v,i.css))),o){if(P>=o.end)y(r=o.b,1-r),Aa(t,o.b,"end"),a||(o.b?c():--o.group.r||Ye(o.group.c)),o=null;else if(P>=o.start){const D=P-o.start;r=o.a+o.d*v(D/o.duration),y(r,1-r)}}return!!(o||a)}))}return{run(d){Ho(i)?Y_().then(()=>{i=i(),f(d)}):f(d)},end(){c(),o=a=null}}}function _n(t,e){const n={},s={},i={$$scope:1};let r=t.length;for(;r--;){const o=t[r],a=e[r];if(a){for(const l in o)l in a||(s[l]=1);for(const l in a)i[l]||(n[l]=a[l],i[l]=1);t[r]=a}else for(const l in o)i[l]=1}for(const o in s)o in n||(n[o]=void 0);return n}function Jn(t){return typeof t=="object"&&t!==null?t:{}}function Bs(t,e,n){const s=t.$$.props[e];s!==void 0&&(t.$$.bound[s]=n,n(t.$$.ctx[s]))}function he(t){t&&t.c()}function le(t,e,n,s){const{fragment:i,after_update:r}=t.$$;i&&i.m(e,n),s||xe(()=>{const o=t.$$.on_mount.map(qd).filter(Ho);t.$$.on_destroy?t.$$.on_destroy.push(...o):Ye(o),t.$$.on_mount=[]}),r.forEach(xe)}function ce(t,e){const n=t.$$;n.fragment!==null&&(Ye(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function X_(t,e){t.$$.dirty[0]===-1&&(Li.push(t),xd(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function We(t,e,n,s,i,r,o,a=[-1]){const l=xi;qi(t);const c=t.$$={fragment:null,ctx:[],props:r,update:ue,not_equal:i,bound:lu(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:lu(),dirty:a,skip_bound:!1,root:e.target||l.$$.root};o&&o(c.root);let h=!1;if(c.ctx=n?n(t,e.props||{},(f,d,...m)=>{const _=m.length?m[0]:d;return c.ctx&&i(c.ctx[f],c.ctx[f]=_)&&(!c.skip_bound&&c.bound[f]&&c.bound[f](_),h&&X_(t,f)),d}):[],c.update(),h=!0,Ye(c.before_update),c.fragment=s?s(c.ctx):!1,e.target){if(e.hydrate){const f=V_(e.target);c.fragment&&c.fragment.l(f),f.forEach(b)}else c.fragment&&c.fragment.c();e.intro&&q(t.$$.fragment),le(t,e.target,e.anchor,e.customElement),Xd()}qi(l)}class Qe{$destroy(){ce(this,1),this.$destroy=ue}$on(e,n){if(!Ho(n))return ue;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const i=s.indexOf(n);i!==-1&&s.splice(i,1)}}$set(e){this.$$set&&!L_(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const fu=t=>typeof t>"u",Jd=t=>typeof t=="function",Zd=t=>typeof t=="number";function J_(t){return!t.defaultPrevented&&t.button===0&&!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function ep(){let t=0;return()=>t++}function Z_(){return Math.random().toString(36).substring(2)}const ks=typeof window>"u";function tp(t,e,n){return t.addEventListener(e,n),()=>t.removeEventListener(e,n)}const nl=(t,e)=>t?{}:{style:e},si=t=>({"aria-hidden":"true",...nl(t,"display:none;")}),ti=[];function ev(t,e){return{subscribe:Lt(t,e).subscribe}}function Lt(t,e=ue){let n;const s=new Set;function i(a){if(He(t,a)&&(t=a,n)){const l=!ti.length;for(const c of s)c[1](),ti.push(c,t);if(l){for(let c=0;c<ti.length;c+=2)ti[c][0](ti[c+1]);ti.length=0}}}function r(a){i(a(t))}function o(a,l=ue){const c=[a,l];return s.add(c),s.size===1&&(n=e(i)||ue),a(t),()=>{s.delete(c),s.size===0&&(n(),n=null)}}return{set:i,update:r,subscribe:o}}function tv(t,e,n){const s=!Array.isArray(t),i=s?[t]:t,r=e.length<2;return ev(n,o=>{let a=!1;const l=[];let c=0,h=ue;const f=()=>{if(c)return;h();const m=e(s?l[0]:l,o);r?o(m):h=Ho(m)?m:ue},d=i.map((m,_)=>Fl(m,v=>{l[_]=v,c&=~(1<<_),a&&f()},()=>{c|=1<<_}));return a=!0,f(),function(){Ye(d),h()}})}const mr=t=>`@@svnav-ctx__${t}`,sl=mr("LOCATION"),di=mr("ROUTER"),np=mr("ROUTE"),nv=mr("ROUTE_PARAMS"),sv=mr("FOCUS_ELEM"),sp=/^:(.+)/,Mi=(t,e,n)=>t.substr(e,n),il=(t,e)=>Mi(t,0,e.length)===e,iv=t=>t==="",rv=t=>sp.test(t),ip=t=>t[0]==="*",ov=t=>t.replace(/\*.*$/,""),rp=t=>t.replace(/(^\/+|\/+$)/g,"");function Un(t,e=!1){const n=rp(t).split("/");return e?n.filter(Boolean):n}const Da=(t,e)=>t+(e?`?${e}`:""),Kl=t=>`/${rp(t)}`;function gr(...t){const e=s=>Un(s,!0).join("/"),n=t.map(e).join("/");return Kl(n)}const zl=1,Ko=2,js=3,av=4,op=5,lv=6,ap=7,cv=8,uv=9,lp=10,cp=11,hv={[zl]:"Link",[Ko]:"Route",[js]:"Router",[av]:"useFocus",[op]:"useLocation",[lv]:"useMatch",[ap]:"useNavigate",[cv]:"useParams",[uv]:"useResolvable",[lp]:"useResolve",[cp]:"navigate"},Gl=t=>hv[t];function fv(t,e){let n;return t===Ko?n=e.path?`path="${e.path}"`:"default":t===zl?n=`to="${e.to}"`:t===js&&(n=`basepath="${e.basepath||""}"`),`<${Gl(t)} ${n||""} />`}function dv(t,e,n,s){const i=n&&fv(s||t,n),r=i?`

Occurred in: ${i}`:"",o=Gl(t),a=Jd(e)?e(o):e;return`<${o}> ${a}${r}`}const up=t=>(...e)=>t(dv(...e)),hp=up(t=>{throw new Error(t)}),mo=up(console.warn),du=4,pv=3,mv=2,gv=1,_v=1;function vv(t,e){const n=t.default?0:Un(t.fullPath).reduce((s,i)=>{let r=s;return r+=du,iv(i)?r+=_v:rv(i)?r+=mv:ip(i)?r-=du+gv:r+=pv,r},0);return{route:t,score:n,index:e}}function yv(t){return t.map(vv).sort((e,n)=>e.score<n.score?1:e.score>n.score?-1:e.index-n.index)}function fp(t,e){let n,s;const[i]=e.split("?"),r=Un(i),o=r[0]==="",a=yv(t);for(let l=0,c=a.length;l<c;l++){const{route:h}=a[l];let f=!1;const d={},m=E=>({...h,params:d,uri:E});if(h.default){s=m(e);continue}const _=Un(h.fullPath),v=Math.max(r.length,_.length);let y=0;for(;y<v;y++){const E=_[y],T=r[y];if(!fu(E)&&ip(E)){const D=E==="*"?"*":E.slice(1);d[D]=r.slice(y).map(decodeURIComponent).join("/");break}if(fu(T)){f=!0;break}const P=sp.exec(E);if(P&&!o){const D=decodeURIComponent(T);d[P[1]]=D}else if(E!==T){f=!0;break}}if(!f){n=m(gr(...r.slice(0,y)));break}}return n||s||null}function dp(t,e){return fp([t],e)}function bv(t,e){if(il(t,"/"))return t;const[n,s]=t.split("?"),[i]=e.split("?"),r=Un(n),o=Un(i);if(r[0]==="")return Da(i,s);if(!il(r[0],".")){const c=o.concat(r).join("/");return Da((i==="/"?"":"/")+c,s)}const a=o.concat(r),l=[];return a.forEach(c=>{c===".."?l.pop():c!=="."&&l.push(c)}),Da(`/${l.join("/")}`,s)}function pu(t,e){const{pathname:n,hash:s="",search:i="",state:r}=t,o=Un(e,!0),a=Un(n,!0);for(;o.length;)o[0]!==a[0]&&hp(js,`Invalid state: All locations must begin with the basepath "${e}", found "${n}"`),o.shift(),a.shift();return{pathname:gr(...a),hash:s,search:i,state:r}}const mu=t=>t.length===1?"":t,Wl=t=>{const e=t.indexOf("?"),n=t.indexOf("#"),s=e!==-1,i=n!==-1,r=i?mu(Mi(t,n)):"",o=i?Mi(t,0,n):t,a=s?mu(Mi(o,e)):"";return{pathname:(s?Mi(o,0,e):o)||"/",search:a,hash:r}},wv=t=>{const{pathname:e,search:n,hash:s}=t;return e+n+s};function kv(t,e,n){return gr(n,bv(t,e))}function Ev(t,e){const n=Kl(ov(t)),s=Un(n,!0),i=Un(e,!0).slice(0,s.length),r=dp({fullPath:n},gr(...i));return r&&r.uri}const Ra="POP",Tv="PUSH",Iv="REPLACE";function Pa(t){return{...t.location,pathname:encodeURI(decodeURI(t.location.pathname)),state:t.history.state,_key:t.history.state&&t.history.state._key||"initial"}}function Cv(t){let e=[],n=Pa(t),s=Ra;const i=(r=e)=>r.forEach(o=>o({location:n,action:s}));return{get location(){return n},listen(r){e.push(r);const o=()=>{n=Pa(t),s=Ra,i([r])};i([r]);const a=tp(t,"popstate",o);return()=>{a(),e=e.filter(l=>l!==r)}},navigate(r,o){const{state:a={},replace:l=!1}=o||{};if(s=l?Iv:Tv,Zd(r))o&&mo(cp,"Navigation options (state or replace) are not supported, when passing a number as the first argument to navigate. They are ignored."),s=Ra,t.history.go(r);else{const c={...a,_key:Z_()};try{t.history[l?"replaceState":"pushState"](c,"",r)}catch{t.location[l?"replace":"assign"](r)}}n=Pa(t),i()}}}function Na(t,e){return{...Wl(e),state:t}}function Sv(t="/"){let e=0,n=[Na(null,t)];return{get entries(){return n},get location(){return n[e]},addEventListener(){},removeEventListener(){},history:{get state(){return n[e].state},pushState(s,i,r){e++,n=n.slice(0,e),n.push(Na(s,r))},replaceState(s,i,r){n[e]=Na(s,r)},go(s){const i=e+s;i<0||i>n.length-1||(e=i)}}}}const Av=!!(!ks&&window.document&&window.document.createElement),Dv=!ks&&window.location.origin==="null",Rv=Cv(Av&&!Dv?window:Sv());let Kn=null,pp=!0;function Pv(t,e){const n=document.querySelectorAll("[data-svnav-router]");for(let s=0;s<n.length;s++){const i=n[s],r=Number(i.dataset.svnavRouter);if(r===t)return!0;if(r===e)return!1}return!1}function Nv(t){(!Kn||t.level>Kn.level||t.level===Kn.level&&Pv(t.routerId,Kn.routerId))&&(Kn=t)}function Ov(){Kn=null}function Lv(){pp=!1}function gu(t){if(!t)return!1;const e="tabindex";try{if(!t.hasAttribute(e)){t.setAttribute(e,"-1");let n;n=tp(t,"blur",()=>{t.removeAttribute(e),n()})}return t.focus(),document.activeElement===t}catch{return!1}}function Mv(t,e){return Number(t.dataset.svnavRouteEnd)===e}function $v(t){return/^H[1-6]$/i.test(t.tagName)}function _u(t,e=document){return e.querySelector(t)}function Uv(t){let n=_u(`[data-svnav-route-start="${t}"]`).nextElementSibling;for(;!Mv(n,t);){if($v(n))return n;const s=_u("h1,h2,h3,h4,h5,h6",n);if(s)return s;n=n.nextElementSibling}return null}function Fv(t){Promise.resolve(fi(t.focusElement)).then(e=>{const n=e||Uv(t.id);n||mo(js,`Could not find an element to focus. You should always render a header for accessibility reasons, or set a custom focus element via the "useFocus" hook. If you don't want this Route or Router to manage focus, pass "primary={false}" to it.`,t,Ko),!gu(n)&&gu(document.documentElement)})}const Vv=(t,e,n)=>(s,i)=>W_().then(()=>{if(!Kn||pp){Lv();return}if(s&&Fv(Kn.route),t.announcements&&i){const{path:r,fullPath:o,meta:a,params:l,uri:c}=Kn.route,h=t.createAnnouncement({path:r,fullPath:o,meta:a,params:l,uri:c},fi(n));Promise.resolve(h).then(f=>{e.set(f)})}Ov()}),vu="position:fixed;top:-1px;left:0;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;";function Bv(t){let e,n,s=[{role:"status"},{"aria-atomic":"true"},{"aria-live":"polite"},{"data-svnav-announcer":""},nl(t[6],vu)],i={};for(let r=0;r<s.length;r+=1)i=Mt(i,s[r]);return{c(){e=p("div"),n=S(t[0]),On(e,i)},m(r,o){w(r,e,o),u(e,n)},p(r,o){o[0]&1&&ie(n,r[0]),On(e,i=_n(s,[{role:"status"},{"aria-atomic":"true"},{"aria-live":"polite"},{"data-svnav-announcer":""},nl(r[6],vu)]))},d(r){r&&b(e)}}}function jv(t){let e,n,s,i,r,o=[si(t[6]),{"data-svnav-router":t[3]}],a={};for(let f=0;f<o.length;f+=1)a=Mt(a,o[f]);const l=t[22].default,c=Vl(l,t,t[21],null);let h=t[2]&&t[4]&&t[1].announcements&&Bv(t);return{c(){e=p("div"),n=k(),c&&c.c(),s=k(),h&&h.c(),i=sn(),On(e,a)},m(f,d){w(f,e,d),w(f,n,d),c&&c.m(f,d),w(f,s,d),h&&h.m(f,d),w(f,i,d),r=!0},p(f,d){On(e,a=_n(o,[si(f[6]),{"data-svnav-router":f[3]}])),c&&c.p&&(!r||d[0]&2097152)&&jl(c,l,f,f[21],r?Bl(l,f[21],d,null):ql(f[21]),null),f[2]&&f[4]&&f[1].announcements&&h.p(f,d)},i(f){r||(q(c,f),r=!0)},o(f){x(c,f),r=!1},d(f){f&&b(e),f&&b(n),c&&c.d(f),f&&b(s),h&&h.d(f),f&&b(i)}}}const qv=ep(),yu="/";function Hv(t,e,n){let s,i,r,o,a,{$$slots:l={},$$scope:c}=e,{basepath:h=yu}=e,{url:f=null}=e,{history:d=Rv}=e,{primary:m=!0}=e,{a11y:_={}}=e,{disableInlineStyles:v=!1}=e;const y={createAnnouncement:L=>`Navigated to ${L.uri}`,announcements:!0,..._},E=h,T=Kl(h),P=ws(sl),D=ws(di),F=!P,K=qv(),N=m&&!(D&&!D.manageFocus),Y=Lt("");Ue(t,Y,L=>n(0,a=L));const M=D?D.disableInlineStyles:v,$=Lt([]);Ue(t,$,L=>n(20,o=L));const U=Lt(null);Ue(t,U,L=>n(18,i=L));let H=!1;const Q=F?0:D.level+1,G=F?Lt((()=>pu(ks?Wl(f):d.location,T))()):P;Ue(t,G,L=>n(17,s=L));const z=Lt(s);Ue(t,z,L=>n(19,r=L));const X=Vv(y,Y,G),W=L=>A=>A.filter(J=>J.id!==L);function C(L){if(ks){if(H)return;const A=dp(L,s.pathname);if(A)return H=!0,A}else $.update(A=>{const J=W(L.id)(A);return J.push(L),J})}function O(L){$.update(W(L))}return!F&&h!==yu&&mo(js,'Only top-level Routers can have a "basepath" prop. It is ignored.',{basepath:h}),F&&(K_(()=>d.listen(A=>{const J=pu(A.location,T);z.set(s),G.set(J)})),Hi(sl,G)),Hi(di,{activeRoute:U,registerRoute:C,unregisterRoute:O,manageFocus:N,level:Q,id:K,history:F?d:D.history,basepath:F?T:D.basepath,disableInlineStyles:M}),t.$$set=L=>{"basepath"in L&&n(11,h=L.basepath),"url"in L&&n(12,f=L.url),"history"in L&&n(13,d=L.history),"primary"in L&&n(14,m=L.primary),"a11y"in L&&n(15,_=L.a11y),"disableInlineStyles"in L&&n(16,v=L.disableInlineStyles),"$$scope"in L&&n(21,c=L.$$scope)},t.$$.update=()=>{if(t.$$.dirty[0]&2048&&h!==E&&mo(js,'You cannot change the "basepath" prop. It is ignored.'),t.$$.dirty[0]&1179648){const L=fp(o,s.pathname);U.set(L)}if(t.$$.dirty[0]&655360&&F){const L=!!s.hash,A=!L&&N,J=!L||s.pathname!==r.pathname;X(A,J)}t.$$.dirty[0]&262144&&N&&i&&i.primary&&Nv({level:Q,routerId:K,route:i})},[a,y,F,K,N,Y,M,$,U,G,z,h,f,d,m,_,v,s,i,r,o,c,l]}class Ql extends Qe{constructor(e){super(),We(this,e,Hv,jv,He,{basepath:11,url:12,history:13,primary:14,a11y:15,disableInlineStyles:16},null,[-1,-1])}}function _r(t,e,n=di,s=js){ws(n)||hp(t,r=>`You cannot use ${r} outside of a ${Gl(s)}.`,e)}const Kv=t=>{const{subscribe:e}=ws(t);return{subscribe:e}};function mp(){return _r(op),Kv(sl)}function gp(){const{history:t}=ws(di);return t}function _p(){const t=ws(np);return t?tv(t,e=>e.base):Lt("/")}function vp(){_r(lp);const t=_p(),{basepath:e}=ws(di);return s=>kv(s,fi(t),e)}function Ys(){_r(ap);const t=vp(),{navigate:e}=gp();return(s,i)=>{const r=Zd(s)?s:t(s);return e(r,i)}}const zv=t=>({params:t&16,location:t&8}),bu=t=>({params:ks?fi(t[10]):t[4],location:t[3],navigate:t[11]});function wu(t){let e,n;return e=new Ql({props:{primary:t[1],$$slots:{default:[Qv]},$$scope:{ctx:t}}}),{c(){he(e.$$.fragment)},m(s,i){le(e,s,i),n=!0},p(s,i){const r={};i&2&&(r.primary=s[1]),i&528409&&(r.$$scope={dirty:i,ctx:s}),e.$set(r)},i(s){n||(q(e.$$.fragment,s),n=!0)},o(s){x(e.$$.fragment,s),n=!1},d(s){ce(e,s)}}}function Gv(t){let e;const n=t[18].default,s=Vl(n,t,t[19],bu);return{c(){s&&s.c()},m(i,r){s&&s.m(i,r),e=!0},p(i,r){s&&s.p&&(!e||r&524312)&&jl(s,n,i,i[19],e?Bl(n,i[19],r,zv):ql(i[19]),bu)},i(i){e||(q(s,i),e=!0)},o(i){x(s,i),e=!1},d(i){s&&s.d(i)}}}function Wv(t){let e,n,s;const i=[{location:t[3]},{navigate:t[11]},ks?fi(t[10]):t[4],t[12]];var r=t[0];function o(a){let l={};for(let c=0;c<i.length;c+=1)l=Mt(l,i[c]);return{props:l}}return r&&(e=uu(r,o())),{c(){e&&he(e.$$.fragment),n=sn()},m(a,l){e&&le(e,a,l),w(a,n,l),s=!0},p(a,l){const c=l&7192?_n(i,[l&8&&{location:a[3]},l&2048&&{navigate:a[11]},l&1040&&Jn(ks?fi(a[10]):a[4]),l&4096&&Jn(a[12])]):{};if(r!==(r=a[0])){if(e){kt();const h=e;x(h.$$.fragment,1,0,()=>{ce(h,1)}),Et()}r?(e=uu(r,o()),he(e.$$.fragment),q(e.$$.fragment,1),le(e,n.parentNode,n)):e=null}else r&&e.$set(c)},i(a){s||(e&&q(e.$$.fragment,a),s=!0)},o(a){e&&x(e.$$.fragment,a),s=!1},d(a){a&&b(n),e&&ce(e,a)}}}function Qv(t){let e,n,s,i;const r=[Wv,Gv],o=[];function a(l,c){return l[0]!==null?0:1}return e=a(t),n=o[e]=r[e](t),{c(){n.c(),s=sn()},m(l,c){o[e].m(l,c),w(l,s,c),i=!0},p(l,c){let h=e;e=a(l),e===h?o[e].p(l,c):(kt(),x(o[h],1,1,()=>{o[h]=null}),Et(),n=o[e],n?n.p(l,c):(n=o[e]=r[e](l),n.c()),q(n,1),n.m(s.parentNode,s))},i(l){i||(q(n),i=!0)},o(l){x(n),i=!1},d(l){o[e].d(l),l&&b(s)}}}function Yv(t){let e,n,s,i,r,o=[si(t[7]),{"data-svnav-route-start":t[5]}],a={};for(let f=0;f<o.length;f+=1)a=Mt(a,o[f]);let l=t[2]&&wu(t),c=[si(t[7]),{"data-svnav-route-end":t[5]}],h={};for(let f=0;f<c.length;f+=1)h=Mt(h,c[f]);return{c(){e=p("div"),n=k(),l&&l.c(),s=k(),i=p("div"),On(e,a),On(i,h)},m(f,d){w(f,e,d),w(f,n,d),l&&l.m(f,d),w(f,s,d),w(f,i,d),r=!0},p(f,[d]){On(e,a=_n(o,[si(f[7]),{"data-svnav-route-start":f[5]}])),f[2]?l?(l.p(f,d),d&4&&q(l,1)):(l=wu(f),l.c(),q(l,1),l.m(s.parentNode,s)):l&&(kt(),x(l,1,1,()=>{l=null}),Et()),On(i,h=_n(c,[si(f[7]),{"data-svnav-route-end":f[5]}]))},i(f){r||(q(l),r=!0)},o(f){x(l),r=!1},d(f){f&&b(e),f&&b(n),l&&l.d(f),f&&b(s),f&&b(i)}}}const xv=ep();function Xv(t,e,n){let s;const i=["path","component","meta","primary"];let r=ho(e,i),o,a,l,c,{$$slots:h={},$$scope:f}=e,{path:d=""}=e,{component:m=null}=e,{meta:_={}}=e,{primary:v=!0}=e;_r(Ko,e);const y=xv(),{registerRoute:E,unregisterRoute:T,activeRoute:P,disableInlineStyles:D}=ws(di);Ue(t,P,H=>n(16,o=H));const F=_p();Ue(t,F,H=>n(17,l=H));const K=mp();Ue(t,K,H=>n(3,a=H));const N=Lt(null);let Y;const M=Lt(),$=Lt({});Ue(t,$,H=>n(4,c=H)),Hi(np,M),Hi(nv,$),Hi(sv,N);const U=Ys();return ks||z_(()=>T(y)),t.$$set=H=>{n(24,e=Mt(Mt({},e),uo(H))),n(12,r=ho(e,i)),"path"in H&&n(13,d=H.path),"component"in H&&n(0,m=H.component),"meta"in H&&n(14,_=H.meta),"primary"in H&&n(1,v=H.primary),"$$scope"in H&&n(19,f=H.$$scope)},t.$$.update=()=>{if(t.$$.dirty&155658){const H=d==="",Q=gr(l,d),Z={id:y,path:d,meta:_,default:H,fullPath:H?"":Q,base:H?l:Ev(Q,a.pathname),primary:v,focusElement:N};M.set(Z),n(15,Y=E(Z))}if(t.$$.dirty&98304&&n(2,s=!!(Y||o&&o.id===y)),t.$$.dirty&98308&&s){const{params:H}=Y||o;$.set(H)}},e=uo(e),[m,v,s,a,c,y,P,D,F,K,$,U,r,d,_,Y,o,l,h,f]}class Pn extends Qe{constructor(e){super(),We(this,e,Xv,Yv,He,{path:13,component:0,meta:14,primary:1})}}function Jv(t){let e,n,s,i;const r=t[13].default,o=Vl(r,t,t[12],null);let a=[{href:t[0]},t[2],t[1]],l={};for(let c=0;c<a.length;c+=1)l=Mt(l,a[c]);return{c(){e=p("a"),o&&o.c(),On(e,l)},m(c,h){w(c,e,h),o&&o.m(e,null),n=!0,s||(i=j(e,"click",t[4]),s=!0)},p(c,[h]){o&&o.p&&(!n||h&4096)&&jl(o,r,c,c[12],n?Bl(r,c[12],h,null):ql(c[12]),null),On(e,l=_n(a,[(!n||h&1)&&{href:c[0]},h&4&&c[2],h&2&&c[1]]))},i(c){n||(q(o,c),n=!0)},o(c){x(o,c),n=!1},d(c){c&&b(e),o&&o.d(c),s=!1,i()}}}function Zv(t,e,n){let s,i,r,o,a,l;const c=["to","replace","state","getProps"];let h=ho(e,c),f,{$$slots:d={},$$scope:m}=e,{to:_}=e,{replace:v=!1}=e,{state:y={}}=e,{getProps:E=null}=e;_r(zl,e);const T=mp();Ue(t,T,N=>n(11,f=N));const P=Qd(),D=vp(),{navigate:F}=gp();function K(N){P("click",N),J_(N)&&(N.preventDefault(),F(s,{state:y,replace:o||v}))}return t.$$set=N=>{n(19,e=Mt(Mt({},e),uo(N))),n(18,h=ho(e,c)),"to"in N&&n(5,_=N.to),"replace"in N&&n(6,v=N.replace),"state"in N&&n(7,y=N.state),"getProps"in N&&n(8,E=N.getProps),"$$scope"in N&&n(12,m=N.$$scope)},t.$$.update=()=>{t.$$.dirty&2080&&n(0,s=D(_,f)),t.$$.dirty&2049&&n(10,i=il(f.pathname,s)),t.$$.dirty&2049&&n(9,r=s===f.pathname),t.$$.dirty&2049&&(o=Wl(s)===wv(f)),t.$$.dirty&512&&n(2,a=r?{"aria-current":"page"}:{}),n(1,l=(()=>{if(Jd(E)){const N=E({location:f,href:s,isPartiallyCurrent:i,isCurrent:r});return{...h,...N}}return h})())},e=uo(e),[s,l,a,T,K,_,v,y,E,r,i,f,m,d]}class hn extends Qe{constructor(e){super(),We(this,e,Zv,Jv,He,{to:5,replace:6,state:7,getProps:8})}}const yp="/to-deploy-mh/assets/logoMH.9387adb0.png",ey="/to-deploy-mh/assets/menu.9ddfd9f8.svg";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const bp=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ty=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},wp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,h=r>>2,f=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,m=c&63;l||(m=64,o||(d=64)),s.push(n[h],n[f],n[d],n[m])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(bp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ty(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||f==null)throw Error();const d=r<<2|a>>4;if(s.push(d),c!==64){const m=a<<4&240|c>>2;if(s.push(m),f!==64){const _=c<<6&192|f;s.push(_)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},ny=function(t){const e=bp(t);return wp.encodeByteArray(e,!0)},go=function(t){return ny(t).replace(/\./g,"")},kp=function(t){try{return wp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function sy(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Xt())}function iy(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ry(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function oy(){const t=Xt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ay(){return typeof indexedDB=="object"}function ly(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}function cy(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const uy=()=>cy().__FIREBASE_DEFAULTS__,hy=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t=process.env.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},fy=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&kp(t[1]);return e&&JSON.parse(e)},Yl=()=>{try{return uy()||hy()||fy()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ep=t=>{var e,n;return(n=(e=Yl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},dy=t=>{const e=Ep(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},py=()=>{var t;return(t=Yl())===null||t===void 0?void 0:t.config},Tp=t=>{var e;return(e=Yl())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function gy(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[go(JSON.stringify(n)),go(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _y="FirebaseError";class rs extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=_y,Object.setPrototypeOf(this,rs.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,vr.prototype.create)}}class vr{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?vy(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new rs(i,a,s)}}function vy(t,e){return t.replace(yy,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const yy=/\{\$([^}]+)}/g;function by(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function _o(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(ku(r)&&ku(o)){if(!_o(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function ku(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yr(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function $i(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function Ui(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function wy(t,e){const n=new ky(t,e);return n.subscribe.bind(n)}class ky{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Ey(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=Oa),i.error===void 0&&(i.error=Oa),i.complete===void 0&&(i.complete=Oa);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ey(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Oa(){}/**
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
 */function Jt(t){return t&&t._delegate?t._delegate:t}class qs{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ps="[DEFAULT]";/**
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
 */class Ty{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new my;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Cy(e))try{this.getOrInitializeService({instanceIdentifier:Ps})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Ps){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ps){return this.instances.has(e)}getOptions(e=Ps){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Iy(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ps){return this.component?this.component.multipleInstances?e:Ps:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Iy(t){return t===Ps?void 0:t}function Cy(t){return t.instantiationMode==="EAGER"}/**
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
 */class Sy{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Ty(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var je;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(je||(je={}));const Ay={debug:je.DEBUG,verbose:je.VERBOSE,info:je.INFO,warn:je.WARN,error:je.ERROR,silent:je.SILENT},Dy=je.INFO,Ry={[je.DEBUG]:"log",[je.VERBOSE]:"log",[je.INFO]:"info",[je.WARN]:"warn",[je.ERROR]:"error"},Py=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=Ry[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class xl{constructor(e){this.name=e,this._logLevel=Dy,this._logHandler=Py,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in je))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ay[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,je.DEBUG,...e),this._logHandler(this,je.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,je.VERBOSE,...e),this._logHandler(this,je.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,je.INFO,...e),this._logHandler(this,je.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,je.WARN,...e),this._logHandler(this,je.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,je.ERROR,...e),this._logHandler(this,je.ERROR,...e)}}const Ny=(t,e)=>e.some(n=>t instanceof n);let Eu,Tu;function Oy(){return Eu||(Eu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ly(){return Tu||(Tu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ip=new WeakMap,rl=new WeakMap,Cp=new WeakMap,La=new WeakMap,Xl=new WeakMap;function My(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(ms(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ip.set(n,t)}).catch(()=>{}),Xl.set(e,t),e}function $y(t){if(rl.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});rl.set(t,e)}let ol={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return rl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Cp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ms(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Uy(t){ol=t(ol)}function Fy(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Ma(this),e,...n);return Cp.set(s,e.sort?e.sort():[e]),ms(s)}:Ly().includes(t)?function(...e){return t.apply(Ma(this),e),ms(Ip.get(this))}:function(...e){return ms(t.apply(Ma(this),e))}}function Vy(t){return typeof t=="function"?Fy(t):(t instanceof IDBTransaction&&$y(t),Ny(t,Oy())?new Proxy(t,ol):t)}function ms(t){if(t instanceof IDBRequest)return My(t);if(La.has(t))return La.get(t);const e=Vy(t);return e!==t&&(La.set(t,e),Xl.set(e,t)),e}const Ma=t=>Xl.get(t);function By(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=ms(o);return s&&o.addEventListener("upgradeneeded",l=>{s(ms(o.result),l.oldVersion,l.newVersion,ms(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const jy=["get","getKey","getAll","getAllKeys","count"],qy=["put","add","delete","clear"],$a=new Map;function Iu(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if($a.get(e))return $a.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=qy.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||jy.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return $a.set(e,r),r}Uy(t=>({...t,get:(e,n,s)=>Iu(e,n)||t.get(e,n,s),has:(e,n)=>!!Iu(e,n)||t.has(e,n)}));/**
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
 */class Hy{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ky(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Ky(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const al="@firebase/app",Cu="0.8.2";/**
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
 */const Hs=new xl("@firebase/app"),zy="@firebase/app-compat",Gy="@firebase/analytics-compat",Wy="@firebase/analytics",Qy="@firebase/app-check-compat",Yy="@firebase/app-check",xy="@firebase/auth",Xy="@firebase/auth-compat",Jy="@firebase/database",Zy="@firebase/database-compat",e0="@firebase/functions",t0="@firebase/functions-compat",n0="@firebase/installations",s0="@firebase/installations-compat",i0="@firebase/messaging",r0="@firebase/messaging-compat",o0="@firebase/performance",a0="@firebase/performance-compat",l0="@firebase/remote-config",c0="@firebase/remote-config-compat",u0="@firebase/storage",h0="@firebase/storage-compat",f0="@firebase/firestore",d0="@firebase/firestore-compat",p0="firebase",m0="9.12.1";/**
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
 */const ll="[DEFAULT]",g0={[al]:"fire-core",[zy]:"fire-core-compat",[Wy]:"fire-analytics",[Gy]:"fire-analytics-compat",[Yy]:"fire-app-check",[Qy]:"fire-app-check-compat",[xy]:"fire-auth",[Xy]:"fire-auth-compat",[Jy]:"fire-rtdb",[Zy]:"fire-rtdb-compat",[e0]:"fire-fn",[t0]:"fire-fn-compat",[n0]:"fire-iid",[s0]:"fire-iid-compat",[i0]:"fire-fcm",[r0]:"fire-fcm-compat",[o0]:"fire-perf",[a0]:"fire-perf-compat",[l0]:"fire-rc",[c0]:"fire-rc-compat",[u0]:"fire-gcs",[h0]:"fire-gcs-compat",[f0]:"fire-fst",[d0]:"fire-fst-compat","fire-js":"fire-js",[p0]:"fire-js-all"};/**
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
 */const vo=new Map,cl=new Map;function _0(t,e){try{t.container.addComponent(e)}catch(n){Hs.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function pi(t){const e=t.name;if(cl.has(e))return Hs.debug(`There were multiple attempts to register component ${e}.`),!1;cl.set(e,t);for(const n of vo.values())_0(n,t);return!0}function Jl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const v0={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},gs=new vr("app","Firebase",v0);/**
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
 */class y0{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new qs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw gs.create("app-deleted",{appName:this._name})}}/**
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
 */const br=m0;function Sp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:ll,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw gs.create("bad-app-name",{appName:String(i)});if(n||(n=py()),!n)throw gs.create("no-options");const r=vo.get(i);if(r){if(_o(n,r.options)&&_o(s,r.config))return r;throw gs.create("duplicate-app",{appName:i})}const o=new Sy(i);for(const l of cl.values())o.addComponent(l);const a=new y0(n,s,o);return vo.set(i,a),a}function Ap(t=ll){const e=vo.get(t);if(!e&&t===ll)return Sp();if(!e)throw gs.create("no-app",{appName:t});return e}function _s(t,e,n){var s;let i=(s=g0[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Hs.warn(a.join(" "));return}pi(new qs(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const b0="firebase-heartbeat-database",w0=1,Xi="firebase-heartbeat-store";let Ua=null;function Dp(){return Ua||(Ua=By(b0,w0,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Xi)}}}).catch(t=>{throw gs.create("idb-open",{originalErrorMessage:t.message})})),Ua}async function k0(t){var e;try{return(await Dp()).transaction(Xi).objectStore(Xi).get(Rp(t))}catch(n){if(n instanceof rs)Hs.warn(n.message);else{const s=gs.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});Hs.warn(s.message)}}}async function Su(t,e){var n;try{const i=(await Dp()).transaction(Xi,"readwrite");return await i.objectStore(Xi).put(e,Rp(t)),i.done}catch(s){if(s instanceof rs)Hs.warn(s.message);else{const i=gs.create("idb-set",{originalErrorMessage:(n=s)===null||n===void 0?void 0:n.message});Hs.warn(i.message)}}}function Rp(t){return`${t.name}!${t.options.appId}`}/**
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
 */const E0=1024,T0=30*24*60*60*1e3;class I0{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new S0(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Au();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=T0}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Au(),{heartbeatsToSend:n,unsentEntries:s}=C0(this._heartbeatsCache.heartbeats),i=go(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Au(){return new Date().toISOString().substring(0,10)}function C0(t,e=E0){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Du(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Du(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class S0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ay()?ly().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await k0(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Su(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Su(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Du(t){return go(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function A0(t){pi(new qs("platform-logger",e=>new Hy(e),"PRIVATE")),pi(new qs("heartbeat",e=>new I0(e),"PRIVATE")),_s(al,Cu,t),_s(al,Cu,"esm2017"),_s("fire-js","")}A0("");var D0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},fe,Zl=Zl||{},Ee=D0||self;function yo(){}function zo(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function wr(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function R0(t){return Object.prototype.hasOwnProperty.call(t,Fa)&&t[Fa]||(t[Fa]=++P0)}var Fa="closure_uid_"+(1e9*Math.random()>>>0),P0=0;function N0(t,e,n){return t.call.apply(t.bind,arguments)}function O0(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Yt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Yt=N0:Yt=O0,Yt.apply(null,arguments)}function Wr(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function zt(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function Cs(){this.s=this.s,this.o=this.o}var L0=0;Cs.prototype.s=!1;Cs.prototype.na=function(){!this.s&&(this.s=!0,this.M(),L0!=0)&&R0(this)};Cs.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Pp=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function ec(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Ru(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(zo(s)){const i=t.length||0,r=s.length||0;t.length=i+r;for(let o=0;o<r;o++)t[i+o]=s[o]}else t.push(s)}}function xt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}xt.prototype.h=function(){this.defaultPrevented=!0};var M0=function(){if(!Ee.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Ee.addEventListener("test",yo,e),Ee.removeEventListener("test",yo,e)}catch{}return t}();function bo(t){return/^[\s\xa0]*$/.test(t)}var Pu=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Va(t,e){return t<e?-1:t>e?1:0}function Go(){var t=Ee.navigator;return t&&(t=t.userAgent)?t:""}function Nn(t){return Go().indexOf(t)!=-1}function tc(t){return tc[" "](t),t}tc[" "]=yo;function $0(t){var e=V0;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var U0=Nn("Opera"),mi=Nn("Trident")||Nn("MSIE"),Np=Nn("Edge"),ul=Np||mi,Op=Nn("Gecko")&&!(Go().toLowerCase().indexOf("webkit")!=-1&&!Nn("Edge"))&&!(Nn("Trident")||Nn("MSIE"))&&!Nn("Edge"),F0=Go().toLowerCase().indexOf("webkit")!=-1&&!Nn("Edge");function Lp(){var t=Ee.document;return t?t.documentMode:void 0}var wo;e:{var Ba="",ja=function(){var t=Go();if(Op)return/rv:([^\);]+)(\)|;)/.exec(t);if(Np)return/Edge\/([\d\.]+)/.exec(t);if(mi)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(F0)return/WebKit\/(\S+)/.exec(t);if(U0)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(ja&&(Ba=ja?ja[1]:""),mi){var qa=Lp();if(qa!=null&&qa>parseFloat(Ba)){wo=String(qa);break e}}wo=Ba}var V0={};function B0(){return $0(function(){let t=0;const e=Pu(String(wo)).split("."),n=Pu("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;t=Va(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||Va(i[2].length==0,r[2].length==0)||Va(i[2],r[2]),i=i[3],r=r[3]}while(t==0)}return 0<=t})}var hl;if(Ee.document&&mi){var Nu=Lp();hl=Nu||parseInt(wo,10)||void 0}else hl=void 0;var j0=hl;function Ji(t,e){if(xt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Op){e:{try{tc(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:q0[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ji.X.h.call(this)}}zt(Ji,xt);var q0={2:"touch",3:"pen",4:"mouse"};Ji.prototype.h=function(){Ji.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var kr="closure_listenable_"+(1e6*Math.random()|0),H0=0;function K0(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=i,this.key=++H0,this.ba=this.ea=!1}function Wo(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function nc(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Mp(t){const e={};for(const n in t)e[n]=t[n];return e}const Ou="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function $p(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<Ou.length;r++)n=Ou[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Qo(t){this.src=t,this.g={},this.h=0}Qo.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=dl(t,e,s,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new K0(e,this.src,r,!!s,i),e.ea=n,t.push(e)),e};function fl(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=Pp(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(Wo(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function dl(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==s)return i}return-1}var sc="closure_lm_"+(1e6*Math.random()|0),Ha={};function Up(t,e,n,s,i){if(s&&s.once)return Vp(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)Up(t,e[r],n,s,i);return null}return n=oc(n),t&&t[kr]?t.N(e,n,wr(s)?!!s.capture:!!s,i):Fp(t,e,n,!1,s,i)}function Fp(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=wr(i)?!!i.capture:!!i,a=rc(t);if(a||(t[sc]=a=new Qo(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=z0(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)M0||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(jp(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function z0(){function t(n){return e.call(t.src,t.listener,n)}const e=G0;return t}function Vp(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)Vp(t,e[r],n,s,i);return null}return n=oc(n),t&&t[kr]?t.O(e,n,wr(s)?!!s.capture:!!s,i):Fp(t,e,n,!0,s,i)}function Bp(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)Bp(t,e[r],n,s,i);else s=wr(s)?!!s.capture:!!s,n=oc(n),t&&t[kr]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=dl(r,n,s,i),-1<n&&(Wo(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=rc(t))&&(e=t.g[e.toString()],t=-1,e&&(t=dl(e,n,s,i)),(n=-1<t?e[t]:null)&&ic(n))}function ic(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[kr])fl(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(jp(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=rc(e))?(fl(n,t),n.h==0&&(n.src=null,e[sc]=null)):Wo(t)}}}function jp(t){return t in Ha?Ha[t]:Ha[t]="on"+t}function G0(t,e){if(t.ba)t=!0;else{e=new Ji(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&ic(t),t=n.call(s,e)}return t}function rc(t){return t=t[sc],t instanceof Qo?t:null}var Ka="__closure_events_fn_"+(1e9*Math.random()>>>0);function oc(t){return typeof t=="function"?t:(t[Ka]||(t[Ka]=function(e){return t.handleEvent(e)}),t[Ka])}function $t(){Cs.call(this),this.i=new Qo(this),this.P=this,this.I=null}zt($t,Cs);$t.prototype[kr]=!0;$t.prototype.removeEventListener=function(t,e,n,s){Bp(this,t,e,n,s)};function Ht(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new xt(e,t);else if(e instanceof xt)e.target=e.target||t;else{var i=e;e=new xt(s,t),$p(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=Qr(o,s,!0,e)&&i}if(o=e.g=t,i=Qr(o,s,!0,e)&&i,i=Qr(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=Qr(o,s,!1,e)&&i}$t.prototype.M=function(){if($t.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Wo(n[s]);delete t.g[e],t.h--}}this.I=null};$t.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};$t.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Qr(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&fl(t.i,o),i=a.call(l,s)!==!1&&i}}return i&&!s.defaultPrevented}var ac=Ee.JSON.stringify;function W0(){var t=Kp;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Q0{constructor(){this.h=this.g=null}add(e,n){const s=qp.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var qp=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Y0,t=>t.reset());class Y0{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function x0(t){Ee.setTimeout(()=>{throw t},0)}function Hp(t,e){pl||X0(),ml||(pl(),ml=!0),Kp.add(t,e)}var pl;function X0(){var t=Ee.Promise.resolve(void 0);pl=function(){t.then(J0)}}var ml=!1,Kp=new Q0;function J0(){for(var t;t=W0();){try{t.h.call(t.g)}catch(n){x0(n)}var e=qp;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}ml=!1}function Yo(t,e){$t.call(this),this.h=t||1,this.g=e||Ee,this.j=Yt(this.lb,this),this.l=Date.now()}zt(Yo,$t);fe=Yo.prototype;fe.ca=!1;fe.R=null;fe.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Ht(this,"tick"),this.ca&&(lc(this),this.start()))}};fe.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function lc(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}fe.M=function(){Yo.X.M.call(this),lc(this),delete this.g};function cc(t,e,n){if(typeof t=="function")n&&(t=Yt(t,n));else if(t&&typeof t.handleEvent=="function")t=Yt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Ee.setTimeout(t,e||0)}function zp(t){t.g=cc(()=>{t.g=null,t.i&&(t.i=!1,zp(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Z0 extends Cs{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:zp(this)}M(){super.M(),this.g&&(Ee.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Zi(t){Cs.call(this),this.h=t,this.g={}}zt(Zi,Cs);var Lu=[];function Gp(t,e,n,s){Array.isArray(n)||(n&&(Lu[0]=n.toString()),n=Lu);for(var i=0;i<n.length;i++){var r=Up(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function Wp(t){nc(t.g,function(e,n){this.g.hasOwnProperty(n)&&ic(e)},t),t.g={}}Zi.prototype.M=function(){Zi.X.M.call(this),Wp(this)};Zi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function xo(){this.g=!0}xo.prototype.Aa=function(){this.g=!1};function e1(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var h=c[0];c=c[1];var f=h.split("_");o=2<=f.length&&f[1]=="type"?o+(h+"="+c+"&"):o+(h+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function t1(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function ii(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+s1(t,n)+(s?" "+s:"")})}function n1(t,e){t.info(function(){return"TIMEOUT: "+e})}xo.prototype.info=function(){};function s1(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return ac(n)}catch{return e}}var xs={},Mu=null;function Xo(){return Mu=Mu||new $t}xs.Pa="serverreachability";function Qp(t){xt.call(this,xs.Pa,t)}zt(Qp,xt);function er(t){const e=Xo();Ht(e,new Qp(e))}xs.STAT_EVENT="statevent";function Yp(t,e){xt.call(this,xs.STAT_EVENT,t),this.stat=e}zt(Yp,xt);function nn(t){const e=Xo();Ht(e,new Yp(e,t))}xs.Qa="timingevent";function xp(t,e){xt.call(this,xs.Qa,t),this.size=e}zt(xp,xt);function Er(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Ee.setTimeout(function(){t()},e)}var Jo={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Xp={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function uc(){}uc.prototype.h=null;function $u(t){return t.h||(t.h=t.i())}function Jp(){}var Tr={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function hc(){xt.call(this,"d")}zt(hc,xt);function fc(){xt.call(this,"c")}zt(fc,xt);var gl;function Zo(){}zt(Zo,uc);Zo.prototype.g=function(){return new XMLHttpRequest};Zo.prototype.i=function(){return{}};gl=new Zo;function Ir(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new Zi(this),this.O=i1,t=ul?125:void 0,this.T=new Yo(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Zp}function Zp(){this.i=null,this.g="",this.h=!1}var i1=45e3,_l={},ko={};fe=Ir.prototype;fe.setTimeout=function(t){this.O=t};function vl(t,e,n){t.K=1,t.v=ta(Zn(e)),t.s=n,t.P=!0,em(t,null)}function em(t,e){t.F=Date.now(),Cr(t),t.A=Zn(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),lm(n.i,"t",s),t.C=0,n=t.l.H,t.h=new Zp,t.g=Dm(t.l,n?e:null,!t.s),0<t.N&&(t.L=new Z0(Yt(t.La,t,t.g),t.N)),Gp(t.S,t.g,"readystatechange",t.ib),e=t.H?Mp(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),er(),e1(t.j,t.u,t.A,t.m,t.U,t.s)}fe.ib=function(t){t=t.target;const e=this.L;e&&Gn(t)==3?e.l():this.La(t)};fe.La=function(t){try{if(t==this.g)e:{const h=Gn(this.g);var e=this.g.Ea();const f=this.g.aa();if(!(3>h)&&(h!=3||ul||this.g&&(this.h.h||this.g.fa()||Bu(this.g)))){this.I||h!=4||e==7||(e==8||0>=f?er(3):er(2)),ea(this);var n=this.g.aa();this.Y=n;t:if(tm(this)){var s=Bu(this.g);t="";var i=s.length,r=Gn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ns(this),Ki(this);var o="";break t}this.h.i=new Ee.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,t1(this.j,this.u,this.A,this.m,this.U,h,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!bo(a)){var c=a;break t}}c=null}if(n=c)ii(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,yl(this,n);else{this.i=!1,this.o=3,nn(12),Ns(this),Ki(this);break e}}this.P?(nm(this,h,o),ul&&this.i&&h==3&&(Gp(this.S,this.T,"tick",this.hb),this.T.start())):(ii(this.j,this.m,o,null),yl(this,o)),h==4&&Ns(this),this.i&&!this.I&&(h==4?Im(this.l,this):(this.i=!1,Cr(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,nn(12)):(this.o=0,nn(13)),Ns(this),Ki(this)}}}catch{}finally{}};function tm(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function nm(t,e,n){let s=!0,i;for(;!t.I&&t.C<n.length;)if(i=r1(t,n),i==ko){e==4&&(t.o=4,nn(14),s=!1),ii(t.j,t.m,null,"[Incomplete Response]");break}else if(i==_l){t.o=4,nn(15),ii(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else ii(t.j,t.m,i,null),yl(t,i);tm(t)&&i!=ko&&i!=_l&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,nn(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),yc(e),e.K=!0,nn(11))):(ii(t.j,t.m,n,"[Invalid Chunked Response]"),Ns(t),Ki(t))}fe.hb=function(){if(this.g){var t=Gn(this.g),e=this.g.fa();this.C<e.length&&(ea(this),nm(this,t,e),this.i&&t!=4&&Cr(this))}};function r1(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?ko:(n=Number(e.substring(n,s)),isNaN(n)?_l:(s+=1,s+n>e.length?ko:(e=e.substr(s,n),t.C=s+n,e)))}fe.cancel=function(){this.I=!0,Ns(this)};function Cr(t){t.V=Date.now()+t.O,sm(t,t.O)}function sm(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Er(Yt(t.gb,t),e)}function ea(t){t.B&&(Ee.clearTimeout(t.B),t.B=null)}fe.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(n1(this.j,this.A),this.K!=2&&(er(),nn(17)),Ns(this),this.o=2,Ki(this)):sm(this,this.V-t)};function Ki(t){t.l.G==0||t.I||Im(t.l,t)}function Ns(t){ea(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,lc(t.T),Wp(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function yl(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||bl(n.h,t))){if(!t.J&&bl(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Io(n),ia(n);else break e;vc(n),nn(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=Er(Yt(n.cb,n),6e3));if(1>=hm(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Os(n,11)}else if((t.J||n.g==t)&&Io(n),!bo(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.T=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.I=c[1],n.ka=c[2];const h=c[3];h!=null&&(n.ma=h,n.j.info("VER="+n.ma));const f=c[4];f!=null&&(n.Ca=f,n.j.info("SVER="+n.Ca));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const m=t.g;if(m){const _=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_){var r=s.h;r.g||_.indexOf("spdy")==-1&&_.indexOf("quic")==-1&&_.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(dc(r,r.h),r.h=null))}if(s.D){const v=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(s.za=v,nt(s.F,s.D,v))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=Am(s,s.H?s.ka:null,s.V),o.J){fm(s.h,o);var a=o,l=s.J;l&&a.setTimeout(l),a.B&&(ea(a),Cr(a)),s.g=o}else Em(s);0<n.i.length&&ra(n)}else c[0]!="stop"&&c[0]!="close"||Os(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Os(n,7):_c(n):c[0]!="noop"&&n.l&&n.l.wa(c),n.A=0)}}er(4)}catch{}}function o1(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(zo(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function a1(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(zo(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function im(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(zo(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=a1(t),s=o1(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}var rm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function l1(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Ms(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Ms){this.h=e!==void 0?e:t.h,Eo(this,t.j),this.s=t.s,this.g=t.g,To(this,t.m),this.l=t.l,e=t.i;var n=new tr;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Uu(this,n),this.o=t.o}else t&&(n=String(t).match(rm))?(this.h=!!e,Eo(this,n[1]||"",!0),this.s=Fi(n[2]||""),this.g=Fi(n[3]||"",!0),To(this,n[4]),this.l=Fi(n[5]||"",!0),Uu(this,n[6]||"",!0),this.o=Fi(n[7]||"")):(this.h=!!e,this.i=new tr(null,this.h))}Ms.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Vi(e,Fu,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Vi(e,Fu,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Vi(n,n.charAt(0)=="/"?h1:u1,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Vi(n,d1)),t.join("")};function Zn(t){return new Ms(t)}function Eo(t,e,n){t.j=n?Fi(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function To(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Uu(t,e,n){e instanceof tr?(t.i=e,p1(t.i,t.h)):(n||(e=Vi(e,f1)),t.i=new tr(e,t.h))}function nt(t,e,n){t.i.set(e,n)}function ta(t){return nt(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Fi(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Vi(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,c1),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function c1(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Fu=/[#\/\?@]/g,u1=/[#\?:]/g,h1=/[#\?]/g,f1=/[#\?@]/g,d1=/#/g;function tr(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ss(t){t.g||(t.g=new Map,t.h=0,t.i&&l1(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}fe=tr.prototype;fe.add=function(t,e){Ss(this),this.i=null,t=Ti(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function om(t,e){Ss(t),e=Ti(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function am(t,e){return Ss(t),e=Ti(t,e),t.g.has(e)}fe.forEach=function(t,e){Ss(this),this.g.forEach(function(n,s){n.forEach(function(i){t.call(e,i,s,this)},this)},this)};fe.oa=function(){Ss(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let r=0;r<i.length;r++)n.push(e[s])}return n};fe.W=function(t){Ss(this);let e=[];if(typeof t=="string")am(this,t)&&(e=e.concat(this.g.get(Ti(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};fe.set=function(t,e){return Ss(this),this.i=null,t=Ti(this,t),am(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};fe.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function lm(t,e,n){om(t,e),0<n.length&&(t.i=null,t.g.set(Ti(t,e),ec(n)),t.h+=n.length)}fe.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};function Ti(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function p1(t,e){e&&!t.j&&(Ss(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(om(this,s),lm(this,i,n))},t)),t.j=e}var m1=class{constructor(t,e){this.h=t,this.g=e}};function cm(t){this.l=t||g1,Ee.PerformanceNavigationTiming?(t=Ee.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Ee.g&&Ee.g.Ga&&Ee.g.Ga()&&Ee.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var g1=10;function um(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function hm(t){return t.h?1:t.g?t.g.size:0}function bl(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function dc(t,e){t.g?t.g.add(e):t.h=e}function fm(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}cm.prototype.cancel=function(){if(this.i=dm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function dm(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return ec(t.i)}function pc(){}pc.prototype.stringify=function(t){return Ee.JSON.stringify(t,void 0)};pc.prototype.parse=function(t){return Ee.JSON.parse(t,void 0)};function _1(){this.g=new pc}function v1(t,e,n){const s=n||"";try{im(t,function(i,r){let o=i;wr(i)&&(o=ac(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function y1(t,e){const n=new xo;if(Ee.Image){const s=new Image;s.onload=Wr(Yr,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Wr(Yr,n,s,"TestLoadImage: error",!1,e),s.onabort=Wr(Yr,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Wr(Yr,n,s,"TestLoadImage: timeout",!1,e),Ee.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Yr(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function Sr(t){this.l=t.ac||null,this.j=t.jb||!1}zt(Sr,uc);Sr.prototype.g=function(){return new na(this.l,this.j)};Sr.prototype.i=function(t){return function(){return t}}({});function na(t,e){$t.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=mc,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}zt(na,$t);var mc=0;fe=na.prototype;fe.open=function(t,e){if(this.readyState!=mc)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,nr(this)};fe.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||Ee).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};fe.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ar(this)),this.readyState=mc};fe.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,nr(this)),this.g&&(this.readyState=3,nr(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof Ee.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;pm(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function pm(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}fe.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ar(this):nr(this),this.readyState==3&&pm(this)}};fe.Va=function(t){this.g&&(this.response=this.responseText=t,Ar(this))};fe.Ua=function(t){this.g&&(this.response=t,Ar(this))};fe.ga=function(){this.g&&Ar(this)};function Ar(t){t.readyState=4,t.l=null,t.j=null,t.A=null,nr(t)}fe.setRequestHeader=function(t,e){this.v.append(t,e)};fe.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};fe.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function nr(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(na.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var b1=Ee.JSON.parse;function ut(t){$t.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=mm,this.K=this.L=!1}zt(ut,$t);var mm="",w1=/^https?$/i,k1=["POST","PUT"];fe=ut.prototype;fe.Ka=function(t){this.L=t};fe.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():gl.g(),this.C=this.u?$u(this.u):$u(gl),this.g.onreadystatechange=Yt(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){Vu(this,r);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=Ee.FormData&&t instanceof Ee.FormData,!(0<=Pp(k1,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{vm(this),0<this.B&&((this.K=E1(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Yt(this.qa,this)):this.A=cc(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){Vu(this,r)}};function E1(t){return mi&&B0()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}fe.qa=function(){typeof Zl<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ht(this,"timeout"),this.abort(8))};function Vu(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,gm(t),sa(t)}function gm(t){t.D||(t.D=!0,Ht(t,"complete"),Ht(t,"error"))}fe.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ht(this,"complete"),Ht(this,"abort"),sa(this))};fe.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),sa(this,!0)),ut.X.M.call(this)};fe.Ha=function(){this.s||(this.F||this.v||this.l?_m(this):this.fb())};fe.fb=function(){_m(this)};function _m(t){if(t.h&&typeof Zl<"u"&&(!t.C[1]||Gn(t)!=4||t.aa()!=2)){if(t.v&&Gn(t)==4)cc(t.Ha,0,t);else if(Ht(t,"readystatechange"),Gn(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var i=String(t.H).match(rm)[1]||null;if(!i&&Ee.self&&Ee.self.location){var r=Ee.self.location.protocol;i=r.substr(0,r.length-1)}s=!w1.test(i?i.toLowerCase():"")}n=s}if(n)Ht(t,"complete"),Ht(t,"success");else{t.m=6;try{var o=2<Gn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",gm(t)}}finally{sa(t)}}}}function sa(t,e){if(t.g){vm(t);const n=t.g,s=t.C[0]?yo:null;t.g=null,t.C=null,e||Ht(t,"ready");try{n.onreadystatechange=s}catch{}}}function vm(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(Ee.clearTimeout(t.A),t.A=null)}function Gn(t){return t.g?t.g.readyState:0}fe.aa=function(){try{return 2<Gn(this)?this.g.status:-1}catch{return-1}};fe.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};fe.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),b1(e)}};function Bu(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case mm:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}fe.Ea=function(){return this.m};fe.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function ym(t){let e="";return nc(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function gc(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=ym(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):nt(t,e,n))}function Oi(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function bm(t){this.Ca=0,this.i=[],this.j=new xo,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Oi("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Oi("baseRetryDelayMs",5e3,t),this.bb=Oi("retryDelaySeedMs",1e4,t),this.$a=Oi("forwardChannelMaxRetries",2,t),this.ta=Oi("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new cm(t&&t.concurrentRequestLimit),this.Fa=new _1,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}fe=bm.prototype;fe.ma=8;fe.G=1;function _c(t){if(wm(t),t.G==3){var e=t.U++,n=Zn(t.F);nt(n,"SID",t.I),nt(n,"RID",e),nt(n,"TYPE","terminate"),Dr(t,n),e=new Ir(t,t.j,e,void 0),e.K=2,e.v=ta(Zn(n)),n=!1,Ee.navigator&&Ee.navigator.sendBeacon&&(n=Ee.navigator.sendBeacon(e.v.toString(),"")),!n&&Ee.Image&&(new Image().src=e.v,n=!0),n||(e.g=Dm(e.l,null),e.g.da(e.v)),e.F=Date.now(),Cr(e)}Sm(t)}function ia(t){t.g&&(yc(t),t.g.cancel(),t.g=null)}function wm(t){ia(t),t.u&&(Ee.clearTimeout(t.u),t.u=null),Io(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&Ee.clearTimeout(t.m),t.m=null)}function ra(t){um(t.h)||t.m||(t.m=!0,Hp(t.Ja,t),t.C=0)}function T1(t,e){return hm(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Er(Yt(t.Ja,t,e),Cm(t,t.C)),t.C++,!0)}fe.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new Ir(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=Mp(r),$p(r,this.S)):r=this.S),this.o!==null||this.N||(i.H=r,r=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=km(this,i,e),n=Zn(this.F),nt(n,"RID",t),nt(n,"CVER",22),this.D&&nt(n,"X-HTTP-Session-Id",this.D),Dr(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(ym(r)))+"&"+e:this.o&&gc(n,this.o,r)),dc(this.h,i),this.Ya&&nt(n,"TYPE","init"),this.O?(nt(n,"$req",e),nt(n,"SID","null"),i.Z=!0,vl(i,n,null)):vl(i,n,e),this.G=2}}else this.G==3&&(t?ju(this,t):this.i.length==0||um(this.h)||ju(this))};function ju(t,e){var n;e?n=e.m:n=t.U++;const s=Zn(t.F);nt(s,"SID",t.I),nt(s,"RID",n),nt(s,"AID",t.T),Dr(t,s),t.o&&t.s&&gc(s,t.o,t.s),n=new Ir(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=km(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),dc(t.h,n),vl(n,s,e)}function Dr(t,e){t.ia&&nc(t.ia,function(n,s){nt(e,s,n)}),t.l&&im({},function(n,s){nt(e,s,n)})}function km(t,e,n){n=Math.min(t.i.length,n);var s=t.l?Yt(t.l.Ra,t.l,t):null;e:{var i=t.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let c=i[l].h;const h=i[l].g;if(c-=r,0>c)r=Math.max(0,i[l].h-100),a=!1;else try{v1(h,o,"req"+c+"_")}catch{s&&s(h)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function Em(t){t.g||t.u||(t.Z=1,Hp(t.Ia,t),t.A=0)}function vc(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Er(Yt(t.Ia,t),Cm(t,t.A)),t.A++,!0)}fe.Ia=function(){if(this.u=null,Tm(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Er(Yt(this.eb,this),t)}};fe.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,nn(10),ia(this),Tm(this))};function yc(t){t.B!=null&&(Ee.clearTimeout(t.B),t.B=null)}function Tm(t){t.g=new Ir(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Zn(t.sa);nt(e,"RID","rpc"),nt(e,"SID",t.I),nt(e,"CI",t.L?"0":"1"),nt(e,"AID",t.T),nt(e,"TYPE","xmlhttp"),Dr(t,e),t.o&&t.s&&gc(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=ta(Zn(e)),n.s=null,n.P=!0,em(n,t)}fe.cb=function(){this.v!=null&&(this.v=null,ia(this),vc(this),nn(19))};function Io(t){t.v!=null&&(Ee.clearTimeout(t.v),t.v=null)}function Im(t,e){var n=null;if(t.g==e){Io(t),yc(t),t.g=null;var s=2}else if(bl(t.h,e))n=e.D,fm(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;s=Xo(),Ht(s,new xp(s,n)),ra(t)}else Em(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(s==1&&T1(t,e)||s==2&&vc(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Os(t,5);break;case 4:Os(t,10);break;case 3:Os(t,6);break;default:Os(t,2)}}}function Cm(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Os(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=Yt(t.kb,t);n||(n=new Ms("//www.google.com/images/cleardot.gif"),Ee.location&&Ee.location.protocol=="http"||Eo(n,"https"),ta(n)),y1(n.toString(),s)}else nn(2);t.G=0,t.l&&t.l.va(e),Sm(t),wm(t)}fe.kb=function(t){t?(this.j.info("Successfully pinged google.com"),nn(2)):(this.j.info("Failed to ping google.com"),nn(1))};function Sm(t){if(t.G=0,t.la=[],t.l){const e=dm(t.h);(e.length!=0||t.i.length!=0)&&(Ru(t.la,e),Ru(t.la,t.i),t.h.i.length=0,ec(t.i),t.i.length=0),t.l.ua()}}function Am(t,e,n){var s=n instanceof Ms?Zn(n):new Ms(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),To(s,s.m);else{var i=Ee.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new Ms(null,void 0);s&&Eo(r,s),e&&(r.g=e),i&&To(r,i),n&&(r.l=n),s=r}return n=t.D,e=t.za,n&&e&&nt(s,n,e),nt(s,"VER",t.ma),Dr(t,s),s}function Dm(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new ut(new Sr({jb:!0})):new ut(t.ra),e.Ka(t.H),e}function Rm(){}fe=Rm.prototype;fe.xa=function(){};fe.wa=function(){};fe.va=function(){};fe.ua=function(){};fe.Ra=function(){};function Co(){if(mi&&!(10<=Number(j0)))throw Error("Environmental error: no available transport.")}Co.prototype.g=function(t,e){return new vn(t,e)};function vn(t,e){$t.call(this),this.g=new bm(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!bo(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!bo(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ii(this)}zt(vn,$t);vn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;nn(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Am(t,null,t.V),ra(t)};vn.prototype.close=function(){_c(this.g)};vn.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=ac(t),t=n);e.i.push(new m1(e.ab++,t)),e.G==3&&ra(e)};vn.prototype.M=function(){this.g.l=null,delete this.j,_c(this.g),delete this.g,vn.X.M.call(this)};function Pm(t){hc.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}zt(Pm,hc);function Nm(){fc.call(this),this.status=1}zt(Nm,fc);function Ii(t){this.g=t}zt(Ii,Rm);Ii.prototype.xa=function(){Ht(this.g,"a")};Ii.prototype.wa=function(t){Ht(this.g,new Pm(t))};Ii.prototype.va=function(t){Ht(this.g,new Nm)};Ii.prototype.ua=function(){Ht(this.g,"b")};Co.prototype.createWebChannel=Co.prototype.g;vn.prototype.send=vn.prototype.u;vn.prototype.open=vn.prototype.m;vn.prototype.close=vn.prototype.close;Jo.NO_ERROR=0;Jo.TIMEOUT=8;Jo.HTTP_ERROR=6;Xp.COMPLETE="complete";Jp.EventType=Tr;Tr.OPEN="a";Tr.CLOSE="b";Tr.ERROR="c";Tr.MESSAGE="d";$t.prototype.listen=$t.prototype.N;ut.prototype.listenOnce=ut.prototype.O;ut.prototype.getLastError=ut.prototype.Oa;ut.prototype.getLastErrorCode=ut.prototype.Ea;ut.prototype.getStatus=ut.prototype.aa;ut.prototype.getResponseJson=ut.prototype.Sa;ut.prototype.getResponseText=ut.prototype.fa;ut.prototype.send=ut.prototype.da;ut.prototype.setWithCredentials=ut.prototype.Ka;var I1=function(){return new Co},C1=function(){return Xo()},za=Jo,S1=Xp,A1=xs,qu={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},D1=Sr,xr=Jp,R1=ut;const Hu="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Ks=new xl("@firebase/firestore");function Ku(){return Ks.logLevel}function pe(t,...e){if(Ks.logLevel<=je.DEBUG){const n=e.map(bc);Ks.debug(`Firestore (${Ci}): ${t}`,...n)}}function es(t,...e){if(Ks.logLevel<=je.ERROR){const n=e.map(bc);Ks.error(`Firestore (${Ci}): ${t}`,...n)}}function wl(t,...e){if(Ks.logLevel<=je.WARN){const n=e.map(bc);Ks.warn(`Firestore (${Ci}): ${t}`,...n)}}function bc(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function Te(t="Unexpected state"){const e=`FIRESTORE (${Ci}) INTERNAL ASSERTION FAILED: `+t;throw es(e),new Error(e)}function et(t,e){t||Te()}function Ce(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const te={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class be extends rs{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Om{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class P1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Wt.UNAUTHENTICATED))}shutdown(){}}class N1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class O1{constructor(e){this.t=e,this.currentUser=Wt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=l=>this.i!==s?(s=this.i,n(l)):Promise.resolve();let r=new vs;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new vs,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{pe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(pe("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new vs)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(pe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(et(typeof s.accessToken=="string"),new Om(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return et(e===null||typeof e=="string"),new Wt(e)}}class L1{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i,this.type="FirstParty",this.user=Wt.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(et(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class M1{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i}getToken(){return Promise.resolve(new L1(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(Wt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class $1{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class U1{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=r=>{r.error!=null&&pe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.A;return this.A=r.token,pe("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{pe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.T.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.T.getImmediate({optional:!0});r?i(r):pe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(et(typeof n.token=="string"),this.A=n.token,new $1(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F1(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=F1(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function Ge(t,e){return t<e?-1:t>e?1:0}function gi(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new be(te.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new be(te.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new be(te.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new be(te.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ct.fromMillis(Date.now())}static fromDate(e){return Ct.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Ct(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ge(this.nanoseconds,e.nanoseconds):Ge(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class sr{constructor(e,n,s){n===void 0?n=0:n>e.length&&Te(),s===void 0?s=e.length-n:s>e.length-n&&Te(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return sr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof sr?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class st extends sr{construct(e,n,s){return new st(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new be(te.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new st(n)}static emptyPath(){return new st([])}}const V1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Qt extends sr{construct(e,n,s){return new Qt(e,n,s)}static isValidIdentifier(e){return V1.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Qt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Qt(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new be(te.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new be(te.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new be(te.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new be(te.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Qt(n)}static emptyPath(){return new Qt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e){this.path=e}static fromPath(e){return new ye(st.fromString(e))}static fromName(e){return new ye(st.fromString(e).popFirst(5))}static empty(){return new ye(st.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&st.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return st.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ye(new st(e.slice()))}}function B1(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=De.fromTimestamp(s===1e9?new Ct(n+1,0):new Ct(n,s));return new Es(i,ye.empty(),e)}function j1(t){return new Es(t.readTime,t.key,-1)}class Es{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Es(De.min(),ye.empty(),-1)}static max(){return new Es(De.max(),ye.empty(),-1)}}function q1(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ye.comparator(t.documentKey,e.documentKey),n!==0?n:Ge(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class K1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rr(t){if(t.code!==te.FAILED_PRECONDITION||t.message!==H1)throw t;pe("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Te(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new ne((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof ne?n:ne.resolve(n)}catch(n){return ne.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):ne.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):ne.reject(n)}static resolve(e){return new ne((n,s)=>{n(e)})}static reject(e){return new ne((n,s)=>{s(e)})}static waitFor(e){return new ne((n,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},l=>s(l))}),o=!0,r===i&&n()})}static or(e){let n=ne.resolve(!1);for(const s of e)n=n.next(i=>i?ne.resolve(i):s());return n}static forEach(e,n){const s=[];return e.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(e,n){return new ne((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let l=0;l<r;l++){const c=l;n(e[c]).next(h=>{o[c]=h,++a,a===r&&s(o)},h=>i(h))}})}static doWhile(e,n){return new ne((s,i)=>{const r=()=>{e()===!0?n().next(()=>{r()},i):s()};r()})}}function Pr(t){return t.name==="IndexedDbTransactionError"}/**
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
 */function zu(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Xs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Mm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */wc.at=-1;class At{constructor(e,n){this.comparator=e,this.root=n||jt.EMPTY}insert(e,n){return new At(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,jt.BLACK,null,null))}remove(e){return new At(this.comparator,this.root.remove(e,this.comparator).copy(null,null,jt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Xr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Xr(this.root,e,this.comparator,!1)}getReverseIterator(){return new Xr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Xr(this.root,e,this.comparator,!0)}}class Xr{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class jt{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s!=null?s:jt.RED,this.left=i!=null?i:jt.EMPTY,this.right=r!=null?r:jt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new jt(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return jt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return jt.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,jt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,jt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Te();const e=this.left.check();if(e!==this.right.check())throw Te();return e+(this.isRed()?0:1)}}jt.EMPTY=null,jt.RED=!0,jt.BLACK=!1;jt.EMPTY=new class{constructor(){this.size=0}get key(){throw Te()}get value(){throw Te()}get color(){throw Te()}get left(){throw Te()}get right(){throw Te()}copy(t,e,n,s,i){return this}insert(t,e,n){return new jt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e){this.comparator=e,this.data=new At(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Gu(this.data.getIterator())}getIteratorFrom(e){return new Gu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof St)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new St(this.comparator);return n.data=e,n}}class Gu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e){this.fields=e,e.sort(Qt.comparator)}static empty(){return new kn([])}unionWith(e){let n=new St(Qt.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new kn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return gi(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Zt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(e);return new Zt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ge(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Zt.EMPTY_BYTE_STRING=new Zt("");const z1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ts(t){if(et(!!t),typeof t=="string"){let e=0;const n=z1.exec(t);if(et(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:wt(t.seconds),nanos:wt(t.nanos)}}function wt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function _i(t){return typeof t=="string"?Zt.fromBase64String(t):Zt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $m(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Um(t){const e=t.mapValue.fields.__previous_value__;return $m(e)?Um(e):e}function ir(t){const e=Ts(t.mapValue.fields.__local_write_time__.timestampValue);return new Ct(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G1{constructor(e,n,s,i,r,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class rr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new rr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof rr&&e.projectId===this.projectId&&e.database===this.database}}function oa(t){return t==null}function So(t){return t===0&&1/t==-1/0}function W1(t){return typeof t=="number"&&Number.isInteger(t)&&!So(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function zs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?$m(t)?4:Q1(t)?9007199254740991:10:Te()}function Fn(t,e){if(t===e)return!0;const n=zs(t);if(n!==zs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ir(t).isEqual(ir(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=Ts(s.timestampValue),o=Ts(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return _i(s.bytesValue).isEqual(_i(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return wt(s.geoPointValue.latitude)===wt(i.geoPointValue.latitude)&&wt(s.geoPointValue.longitude)===wt(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return wt(s.integerValue)===wt(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=wt(s.doubleValue),o=wt(i.doubleValue);return r===o?So(r)===So(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return gi(t.arrayValue.values||[],e.arrayValue.values||[],Fn);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(zu(r)!==zu(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!Fn(r[a],o[a])))return!1;return!0}(t,e);default:return Te()}}function or(t,e){return(t.values||[]).find(n=>Fn(n,e))!==void 0}function vi(t,e){if(t===e)return 0;const n=zs(t),s=zs(e);if(n!==s)return Ge(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ge(t.booleanValue,e.booleanValue);case 2:return function(i,r){const o=wt(i.integerValue||i.doubleValue),a=wt(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Wu(t.timestampValue,e.timestampValue);case 4:return Wu(ir(t),ir(e));case 5:return Ge(t.stringValue,e.stringValue);case 6:return function(i,r){const o=_i(i),a=_i(r);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=Ge(o[l],a[l]);if(c!==0)return c}return Ge(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,r){const o=Ge(wt(i.latitude),wt(r.latitude));return o!==0?o:Ge(wt(i.longitude),wt(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=vi(o[l],a[l]);if(c)return c}return Ge(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,r){if(i===Jr.mapValue&&r===Jr.mapValue)return 0;if(i===Jr.mapValue)return 1;if(r===Jr.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=r.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let h=0;h<a.length&&h<c.length;++h){const f=Ge(a[h],c[h]);if(f!==0)return f;const d=vi(o[a[h]],l[c[h]]);if(d!==0)return d}return Ge(a.length,c.length)}(t.mapValue,e.mapValue);default:throw Te()}}function Wu(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ge(t,e);const n=Ts(t),s=Ts(e),i=Ge(n.seconds,s.seconds);return i!==0?i:Ge(n.nanos,s.nanos)}function li(t){return kl(t)}function kl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const i=Ts(s);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?_i(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,ye.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=kl(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${kl(s.fields[a])}`;return r+"}"}(t.mapValue):Te();var e,n}function El(t){return!!t&&"integerValue"in t}function kc(t){return!!t&&"arrayValue"in t}function Qu(t){return!!t&&"nullValue"in t}function Yu(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function no(t){return!!t&&"mapValue"in t}function zi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Xs(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=zi(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=zi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Q1(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e){this.value=e}static empty(){return new fn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!no(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=zi(n)}setAll(e){let n=Qt.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=zi(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());no(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Fn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];no(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){Xs(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new fn(zi(this.value))}}function Fm(t){const e=[];return Xs(t.fields,(n,s)=>{const i=new Qt([n]);if(no(s)){const r=Fm(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new kn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Y1{constructor(e,n=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.ht=null}}function xu(t,e=null,n=[],s=[],i=null,r=null,o=null){return new Y1(t,e,n,s,i,r,o)}function Ec(t){const e=Ce(t);if(e.ht===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>{return(i=s).field.canonicalString()+i.op.toString()+li(i.value);var i}).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),oa(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>li(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>li(s)).join(",")),e.ht=n}return e.ht}function x1(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${li(s.value)}`;var s}).join(", ")}]`),oa(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>li(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>li(n)).join(",")),`Target(${e})`}function Tc(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!ib(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],s=e.filters[i],n.op!==s.op||!n.field.isEqual(s.field)||!Fn(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ju(t.startAt,e.startAt)&&Ju(t.endAt,e.endAt)}function Tl(t){return ye.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class pn extends class{}{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.lt(e,n,s):new X1(e,n,s):n==="array-contains"?new eb(e,s):n==="in"?new tb(e,s):n==="not-in"?new nb(e,s):n==="array-contains-any"?new sb(e,s):new pn(e,n,s)}static lt(e,n,s){return n==="in"?new J1(e,s):new Z1(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.ft(vi(n,this.value)):n!==null&&zs(this.value)===zs(n)&&this.ft(vi(n,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Te()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class X1 extends pn{constructor(e,n,s){super(e,n,s),this.key=ye.fromName(s.referenceValue)}matches(e){const n=ye.comparator(e.key,this.key);return this.ft(n)}}class J1 extends pn{constructor(e,n){super(e,"in",n),this.keys=Vm("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Z1 extends pn{constructor(e,n){super(e,"not-in",n),this.keys=Vm("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Vm(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>ye.fromName(s.referenceValue))}class eb extends pn{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return kc(n)&&or(n.arrayValue,this.value)}}class tb extends pn{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&or(this.value.arrayValue,n)}}class nb extends pn{constructor(e,n){super(e,"not-in",n)}matches(e){if(or(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!or(this.value.arrayValue,n)}}class sb extends pn{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!kc(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>or(this.value.arrayValue,s))}}class Ao{constructor(e,n){this.position=e,this.inclusive=n}}class Gi{constructor(e,n="asc"){this.field=e,this.dir=n}}function ib(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Xu(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=ye.comparator(ye.fromName(o.referenceValue),n.key):s=vi(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function Ju(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Fn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(e,n=null,s=[],i=[],r=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this._t=null,this.wt=null,this.startAt,this.endAt}}function rb(t,e,n,s,i,r,o,a){return new aa(t,e,n,s,i,r,o,a)}function Ic(t){return new aa(t)}function Zu(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function ob(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function ab(t){for(const e of t.filters)if(e.dt())return e.field;return null}function lb(t){return t.collectionGroup!==null}function ar(t){const e=Ce(t);if(e._t===null){e._t=[];const n=ab(e),s=ob(e);if(n!==null&&s===null)n.isKeyField()||e._t.push(new Gi(n)),e._t.push(new Gi(Qt.keyField(),"asc"));else{let i=!1;for(const r of e.explicitOrderBy)e._t.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new Gi(Qt.keyField(),r))}}}return e._t}function ts(t){const e=Ce(t);if(!e.wt)if(e.limitType==="F")e.wt=xu(e.path,e.collectionGroup,ar(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of ar(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new Gi(r.field,o))}const s=e.endAt?new Ao(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Ao(e.startAt.position,e.startAt.inclusive):null;e.wt=xu(e.path,e.collectionGroup,n,e.filters,e.limit,s,i)}return e.wt}function Il(t,e,n){return new aa(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function la(t,e){return Tc(ts(t),ts(e))&&t.limitType===e.limitType}function Bm(t){return`${Ec(ts(t))}|lt:${t.limitType}`}function Cl(t){return`Query(target=${x1(ts(t))}; limitType=${t.limitType})`}function Cc(t,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):ye.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,s){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=Xu(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,ar(n),s)||n.endAt&&!function(i,r,o){const a=Xu(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,ar(n),s))}(t,e)}function cb(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function jm(t){return(e,n)=>{let s=!1;for(const i of ar(t)){const r=ub(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function ub(t,e,n){const s=t.field.isKeyField()?ye.comparator(e.key,n.key):function(i,r,o){const a=r.data.field(i),l=o.data.field(i);return a!==null&&l!==null?vi(a,l):Te()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return Te()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qm(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:So(e)?"-0":e}}function Hm(t){return{integerValue:""+t}}function hb(t,e){return W1(e)?Hm(e):qm(t,e)}/**
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
 */class ca{constructor(){this._=void 0}}function fb(t,e,n){return t instanceof Do?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,e):t instanceof lr?zm(t,e):t instanceof cr?Gm(t,e):function(s,i){const r=Km(s,i),o=eh(r)+eh(s.yt);return El(r)&&El(s.yt)?Hm(o):qm(s.It,o)}(t,e)}function db(t,e,n){return t instanceof lr?zm(t,e):t instanceof cr?Gm(t,e):n}function Km(t,e){return t instanceof Ro?El(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Do extends ca{}class lr extends ca{constructor(e){super(),this.elements=e}}function zm(t,e){const n=Wm(e);for(const s of t.elements)n.some(i=>Fn(i,s))||n.push(s);return{arrayValue:{values:n}}}class cr extends ca{constructor(e){super(),this.elements=e}}function Gm(t,e){let n=Wm(e);for(const s of t.elements)n=n.filter(i=>!Fn(i,s));return{arrayValue:{values:n}}}class Ro extends ca{constructor(e,n){super(),this.It=e,this.yt=n}}function eh(t){return wt(t.integerValue||t.doubleValue)}function Wm(t){return kc(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function pb(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof lr&&s instanceof lr||n instanceof cr&&s instanceof cr?gi(n.elements,s.elements,Fn):n instanceof Ro&&s instanceof Ro?Fn(n.yt,s.yt):n instanceof Do&&s instanceof Do}(t.transform,e.transform)}class mb{constructor(e,n){this.version=e,this.transformResults=n}}class Tn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Tn}static exists(e){return new Tn(void 0,e)}static updateTime(e){return new Tn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function so(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ua{}function Qm(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Sc(t.key,Tn.none()):new Nr(t.key,t.data,Tn.none());{const n=t.data,s=fn.empty();let i=new St(Qt.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new As(t.key,s,new kn(i.toArray()),Tn.none())}}function gb(t,e,n){t instanceof Nr?function(s,i,r){const o=s.value.clone(),a=nh(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof As?function(s,i,r){if(!so(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=nh(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(Ym(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function Wi(t,e,n,s){return t instanceof Nr?function(i,r,o,a){if(!so(i.precondition,r))return o;const l=i.value.clone(),c=sh(i.fieldTransforms,a,r);return l.setAll(c),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),null}(t,e,n,s):t instanceof As?function(i,r,o,a){if(!so(i.precondition,r))return o;const l=sh(i.fieldTransforms,a,r),c=r.data;return c.setAll(Ym(i)),c.setAll(l),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,s):function(i,r,o){return so(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(t,e,n)}function _b(t,e){let n=null;for(const s of t.fieldTransforms){const i=e.data.field(s.field),r=Km(s.transform,i||null);r!=null&&(n===null&&(n=fn.empty()),n.set(s.field,r))}return n||null}function th(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&gi(n,s,(i,r)=>pb(i,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Nr extends ua{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class As extends ua{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Ym(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function nh(t,e,n){const s=new Map;et(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,db(o,a,n[i]))}return s}function sh(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,fb(r,o,e))}return s}class Sc extends ua{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class vb extends ua{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yb{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var bt,Me;function bb(t){switch(t){default:return Te();case te.CANCELLED:case te.UNKNOWN:case te.DEADLINE_EXCEEDED:case te.RESOURCE_EXHAUSTED:case te.INTERNAL:case te.UNAVAILABLE:case te.UNAUTHENTICATED:return!1;case te.INVALID_ARGUMENT:case te.NOT_FOUND:case te.ALREADY_EXISTS:case te.PERMISSION_DENIED:case te.FAILED_PRECONDITION:case te.ABORTED:case te.OUT_OF_RANGE:case te.UNIMPLEMENTED:case te.DATA_LOSS:return!0}}function xm(t){if(t===void 0)return es("GRPC error has no .code"),te.UNKNOWN;switch(t){case bt.OK:return te.OK;case bt.CANCELLED:return te.CANCELLED;case bt.UNKNOWN:return te.UNKNOWN;case bt.DEADLINE_EXCEEDED:return te.DEADLINE_EXCEEDED;case bt.RESOURCE_EXHAUSTED:return te.RESOURCE_EXHAUSTED;case bt.INTERNAL:return te.INTERNAL;case bt.UNAVAILABLE:return te.UNAVAILABLE;case bt.UNAUTHENTICATED:return te.UNAUTHENTICATED;case bt.INVALID_ARGUMENT:return te.INVALID_ARGUMENT;case bt.NOT_FOUND:return te.NOT_FOUND;case bt.ALREADY_EXISTS:return te.ALREADY_EXISTS;case bt.PERMISSION_DENIED:return te.PERMISSION_DENIED;case bt.FAILED_PRECONDITION:return te.FAILED_PRECONDITION;case bt.ABORTED:return te.ABORTED;case bt.OUT_OF_RANGE:return te.OUT_OF_RANGE;case bt.UNIMPLEMENTED:return te.UNIMPLEMENTED;case bt.DATA_LOSS:return te.DATA_LOSS;default:return Te()}}(Me=bt||(bt={}))[Me.OK=0]="OK",Me[Me.CANCELLED=1]="CANCELLED",Me[Me.UNKNOWN=2]="UNKNOWN",Me[Me.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Me[Me.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Me[Me.NOT_FOUND=5]="NOT_FOUND",Me[Me.ALREADY_EXISTS=6]="ALREADY_EXISTS",Me[Me.PERMISSION_DENIED=7]="PERMISSION_DENIED",Me[Me.UNAUTHENTICATED=16]="UNAUTHENTICATED",Me[Me.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Me[Me.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Me[Me.ABORTED=10]="ABORTED",Me[Me.OUT_OF_RANGE=11]="OUT_OF_RANGE",Me[Me.UNIMPLEMENTED=12]="UNIMPLEMENTED",Me[Me.INTERNAL=13]="INTERNAL",Me[Me.UNAVAILABLE=14]="UNAVAILABLE",Me[Me.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Xs(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return Mm(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wb=new At(ye.comparator);function ns(){return wb}const Xm=new At(ye.comparator);function Bi(...t){let e=Xm;for(const n of t)e=e.insert(n.key,n);return e}function Jm(t){let e=Xm;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Ls(){return Qi()}function Zm(){return Qi()}function Qi(){return new Si(t=>t.toString(),(t,e)=>t.isEqual(e))}const kb=new At(ye.comparator),Eb=new St(ye.comparator);function Oe(...t){let e=Eb;for(const n of t)e=e.add(n);return e}const Tb=new St(Ge);function eg(){return Tb}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const i=new Map;return i.set(e,Or.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new ha(De.min(),i,eg(),ns(),Oe())}}class Or{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Or(s,n,Oe(),Oe(),Oe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(e,n,s,i){this.Tt=e,this.removedTargetIds=n,this.key=s,this.Et=i}}class tg{constructor(e,n){this.targetId=e,this.At=n}}class ng{constructor(e,n,s=Zt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class ih{constructor(){this.Rt=0,this.bt=oh(),this.Pt=Zt.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=Oe(),n=Oe(),s=Oe();return this.bt.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:Te()}}),new Or(this.Pt,this.vt,e,n,s)}Nt(){this.Vt=!1,this.bt=oh()}kt(e,n){this.Vt=!0,this.bt=this.bt.insert(e,n)}Ot(e){this.Vt=!0,this.bt=this.bt.remove(e)}Mt(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class Ib{constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=ns(),this.qt=rh(),this.Kt=new St(Ge)}Gt(e){for(const n of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(n,e.Et):this.jt(n,e.key,e.Et);for(const n of e.removedTargetIds)this.jt(n,e.key,e.Et)}Wt(e){this.forEachTarget(e,n=>{const s=this.zt(n);switch(e.state){case 0:this.Ht(n)&&s.Ct(e.resumeToken);break;case 1:s.Ft(),s.St||s.Nt(),s.Ct(e.resumeToken);break;case 2:s.Ft(),s.St||this.removeTarget(n);break;case 3:this.Ht(n)&&(s.$t(),s.Ct(e.resumeToken));break;case 4:this.Ht(n)&&(this.Jt(n),s.Ct(e.resumeToken));break;default:Te()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Lt.forEach((s,i)=>{this.Ht(i)&&n(i)})}Yt(e){const n=e.targetId,s=e.At.count,i=this.Xt(n);if(i){const r=i.target;if(Tl(r))if(s===0){const o=new ye(r.path);this.jt(n,o,qt.newNoDocument(o,De.min()))}else et(s===1);else this.Zt(n)!==s&&(this.Jt(n),this.Kt=this.Kt.add(n))}}te(e){const n=new Map;this.Lt.forEach((r,o)=>{const a=this.Xt(o);if(a){if(r.current&&Tl(a.target)){const l=new ye(a.target.path);this.Ut.get(l)!==null||this.ee(o,l)||this.jt(o,l,qt.newNoDocument(l,e))}r.Dt&&(n.set(o,r.xt()),r.Nt())}});let s=Oe();this.qt.forEach((r,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Xt(l);return!c||c.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))}),this.Ut.forEach((r,o)=>o.setReadTime(e));const i=new ha(e,n,this.Kt,this.Ut,s);return this.Ut=ns(),this.qt=rh(),this.Kt=new St(Ge),i}Qt(e,n){if(!this.Ht(e))return;const s=this.ee(e,n.key)?2:0;this.zt(e).kt(n.key,s),this.Ut=this.Ut.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ne(n.key).add(e))}jt(e,n,s){if(!this.Ht(e))return;const i=this.zt(e);this.ee(e,n)?i.kt(n,1):i.Ot(n),this.qt=this.qt.insert(n,this.ne(n).delete(e)),s&&(this.Ut=this.Ut.insert(n,s))}removeTarget(e){this.Lt.delete(e)}Zt(e){const n=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Mt(e){this.zt(e).Mt()}zt(e){let n=this.Lt.get(e);return n||(n=new ih,this.Lt.set(e,n)),n}ne(e){let n=this.qt.get(e);return n||(n=new St(Ge),this.qt=this.qt.insert(e,n)),n}Ht(e){const n=this.Xt(e)!==null;return n||pe("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.Lt.get(e);return n&&n.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new ih),this.Bt.getRemoteKeysForTarget(e).forEach(n=>{this.jt(e,n,null)})}ee(e,n){return this.Bt.getRemoteKeysForTarget(e).has(n)}}function rh(){return new At(ye.comparator)}function oh(){return new At(ye.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cb=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Sb=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class Ab{constructor(e,n){this.databaseId=e,this.gt=n}}function Po(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function sg(t,e){return t.gt?e.toBase64():e.toUint8Array()}function Db(t,e){return Po(t,e.toTimestamp())}function Yn(t){return et(!!t),De.fromTimestamp(function(e){const n=Ts(e);return new Ct(n.seconds,n.nanos)}(t))}function Ac(t,e){return function(n){return new st(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function ig(t){const e=st.fromString(t);return et(ag(e)),e}function Sl(t,e){return Ac(t.databaseId,e.path)}function Ga(t,e){const n=ig(e);if(n.get(1)!==t.databaseId.projectId)throw new be(te.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new be(te.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ye(rg(n))}function Al(t,e){return Ac(t.databaseId,e)}function Rb(t){const e=ig(t);return e.length===4?st.emptyPath():rg(e)}function Dl(t){return new st(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function rg(t){return et(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function ah(t,e,n){return{name:Sl(t,e),fields:n.value.mapValue.fields}}function Pb(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:Te()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(l,c){return l.gt?(et(c===void 0||typeof c=="string"),Zt.fromBase64String(c||"")):(et(c===void 0||c instanceof Uint8Array),Zt.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const c=l.code===void 0?te.UNKNOWN:xm(l.code);return new be(c,l.message||"")}(o);n=new ng(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=Ga(t,s.document.name),r=Yn(s.document.updateTime),o=new fn({mapValue:{fields:s.document.fields}}),a=qt.newFoundDocument(i,r,o),l=s.targetIds||[],c=s.removedTargetIds||[];n=new io(l,c,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=Ga(t,s.document),r=s.readTime?Yn(s.readTime):De.min(),o=qt.newNoDocument(i,r),a=s.removedTargetIds||[];n=new io([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=Ga(t,s.document),r=s.removedTargetIds||[];n=new io([],r,i,null)}else{if(!("filter"in e))return Te();{e.filter;const s=e.filter;s.targetId;const i=s.count||0,r=new yb(i),o=s.targetId;n=new tg(o,r)}}return n}function Nb(t,e){let n;if(e instanceof Nr)n={update:ah(t,e.key,e.value)};else if(e instanceof Sc)n={delete:Sl(t,e.key)};else if(e instanceof As)n={update:ah(t,e.key,e.data),updateMask:qb(e.fieldMask)};else{if(!(e instanceof vb))return Te();n={verify:Sl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof Do)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof lr)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof cr)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Ro)return{fieldPath:r.field.canonicalString(),increment:o.yt};throw Te()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Db(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Te()}(t,e.precondition)),n}function Ob(t,e){return t&&t.length>0?(et(e!==void 0),t.map(n=>function(s,i){let r=s.updateTime?Yn(s.updateTime):Yn(i);return r.isEqual(De.min())&&(r=Yn(i)),new mb(r,s.transformResults||[])}(n,e))):[]}function Lb(t,e){return{documents:[Al(t,e.path)]}}function Mb(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Al(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Al(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(l){if(l.length===0)return;const c=l.map(h=>function(f){if(f.op==="=="){if(Yu(f.value))return{unaryFilter:{field:ni(f.field),op:"IS_NAN"}};if(Qu(f.value))return{unaryFilter:{field:ni(f.field),op:"IS_NULL"}}}else if(f.op==="!="){if(Yu(f.value))return{unaryFilter:{field:ni(f.field),op:"IS_NOT_NAN"}};if(Qu(f.value))return{unaryFilter:{field:ni(f.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ni(f.field),op:Vb(f.op),value:f.value}}}(h));return c.length===1?c[0]:{compositeFilter:{op:"AND",filters:c}}}(e.filters);i&&(n.structuredQuery.where=i);const r=function(l){if(l.length!==0)return l.map(c=>function(h){return{field:ni(h.field),direction:Fb(h.dir)}}(c))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(l,c){return l.gt||oa(c)?c:{value:c}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function $b(t){let e=Rb(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){et(s===1);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let r=[];n.where&&(r=og(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(h=>function(f){return new Gi(ri(f.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(f.direction))}(h)));let a=null;n.limit&&(a=function(h){let f;return f=typeof h=="object"?h.value:h,oa(f)?null:f}(n.limit));let l=null;n.startAt&&(l=function(h){const f=!!h.before,d=h.values||[];return new Ao(d,f)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const f=!h.before,d=h.values||[];return new Ao(d,f)}(n.endAt)),rb(e,i,o,r,a,"F",l,c)}function Ub(t,e){const n=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Te()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function og(t){return t?t.unaryFilter!==void 0?[jb(t)]:t.fieldFilter!==void 0?[Bb(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>og(e)).reduce((e,n)=>e.concat(n)):Te():[]}function Fb(t){return Cb[t]}function Vb(t){return Sb[t]}function ni(t){return{fieldPath:t.canonicalString()}}function ri(t){return Qt.fromServerFormat(t.fieldPath)}function Bb(t){return pn.create(ri(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Te()}}(t.fieldFilter.op),t.fieldFilter.value)}function jb(t){switch(t.unaryFilter.op){case"IS_NAN":const e=ri(t.unaryFilter.field);return pn.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=ri(t.unaryFilter.field);return pn.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ri(t.unaryFilter.field);return pn.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=ri(t.unaryFilter.field);return pn.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Te()}}function qb(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function ag(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hb{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&gb(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Wi(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Wi(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Zm();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const l=Qm(o,a);l!==null&&s.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(De.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Oe())}isEqual(e){return this.batchId===e.batchId&&gi(this.mutations,e.mutations,(n,s)=>th(n,s))&&gi(this.baseMutations,e.baseMutations,(n,s)=>th(n,s))}}class Dc{constructor(e,n,s,i){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(e,n,s){et(e.mutations.length===s.length);let i=kb;const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new Dc(e,n,s,i)}}/**
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
 */class Kb{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class $s{constructor(e,n,s,i,r=De.min(),o=De.min(),a=Zt.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new $s(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new $s(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new $s(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zb{constructor(e){this.re=e}}function Gb(t){const e=$b({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Il(e,e.limit,"L"):e}/**
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
 */class Wb{constructor(){this.Ye=new Qb}addToCollectionParentIndex(e,n){return this.Ye.add(n),ne.resolve()}getCollectionParents(e,n){return ne.resolve(this.Ye.getEntries(n))}addFieldIndex(e,n){return ne.resolve()}deleteFieldIndex(e,n){return ne.resolve()}getDocumentsMatchingTarget(e,n){return ne.resolve(null)}getIndexType(e,n){return ne.resolve(0)}getFieldIndexes(e,n){return ne.resolve([])}getNextCollectionGroupToUpdate(e){return ne.resolve(null)}getMinOffset(e,n){return ne.resolve(Es.min())}getMinOffsetFromCollectionGroup(e,n){return ne.resolve(Es.min())}updateCollectionGroup(e,n,s){return ne.resolve()}updateIndexEntries(e,n){return ne.resolve()}}class Qb{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new St(st.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new St(st.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Yb{constructor(){this.changes=new Si(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,qt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?ne.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class xb{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xb{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(s=i,this.getBaseDocument(e,n,s))).next(i=>(s!==null&&Wi(s.mutation,i,kn.empty(),Ct.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,Oe()).next(()=>s))}getLocalViewOfDocuments(e,n,s=Oe()){const i=Ls();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,s).next(r=>{let o=Bi();return r.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Ls();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,Oe()))}populateOverlays(e,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,i){let r=ns();const o=Qi(),a=Qi();return n.forEach((l,c)=>{const h=s.get(c.key);i.has(c.key)&&(h===void 0||h.mutation instanceof As)?r=r.insert(c.key,c):h!==void 0&&(o.set(c.key,h.mutation.getFieldMask()),Wi(h.mutation,c,h.mutation.getFieldMask(),Ct.now()))}),this.recalculateAndSaveOverlays(e,r).next(l=>(l.forEach((c,h)=>o.set(c,h)),n.forEach((c,h)=>{var f;return a.set(c,new xb(h,(f=o.get(c))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const s=Qi();let i=new At((o,a)=>o-a),r=Oe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let h=s.get(l)||kn.empty();h=a.applyToLocalView(c,h),s.set(l,h);const f=(i.get(a.batchId)||Oe()).add(l);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,h=l.value,f=Zm();h.forEach(d=>{if(!r.has(d)){const m=Qm(n.get(d),s.get(d));m!==null&&f.set(d,m),r=r.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return ne.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(i){return ye.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):lb(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):ne.resolve(Ls());let a=-1,l=r;return o.next(c=>ne.forEach(c,(h,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),r.get(h)?ne.resolve():this.getBaseDocument(e,h,f).next(d=>{l=l.insert(h,d)}))).next(()=>this.populateOverlays(e,c,r)).next(()=>this.computeViews(e,l,c,Oe())).next(h=>({batchId:a,changes:Jm(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ye(n)).next(s=>{let i=Bi();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const i=n.collectionGroup;let r=Bi();return this.indexManager.getCollectionParents(e,i).next(o=>ne.forEach(o,a=>{const l=function(c,h){return new aa(h,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,s).next(c=>{c.forEach((h,f)=>{r=r.insert(h,f)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,s){let i;return this.remoteDocumentCache.getAllFromCollection(e,n.path,s).next(r=>(i=r,this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId))).next(r=>{r.forEach((a,l)=>{const c=l.getKey();i.get(c)===null&&(i=i.insert(c,qt.newInvalidDocument(c)))});let o=Bi();return i.forEach((a,l)=>{const c=r.get(a);c!==void 0&&Wi(c.mutation,l,kn.empty(),Ct.now()),Cc(n,l)&&(o=o.insert(a,l))}),o})}getBaseDocument(e,n,s){return s===null||s.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):ne.resolve(qt.newInvalidDocument(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jb{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return ne.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:Yn(s.createTime)}),ne.resolve()}getNamedQuery(e,n){return ne.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(s){return{name:s.name,query:Gb(s.bundledQuery),readTime:Yn(s.readTime)}}(n)),ne.resolve()}}/**
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
 */class Zb{constructor(){this.overlays=new At(ye.comparator),this.es=new Map}getOverlay(e,n){return ne.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Ls();return ne.forEach(n,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((i,r)=>{this.ue(e,n,r)}),ne.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.es.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.es.delete(s)),ne.resolve()}getOverlaysForCollection(e,n,s){const i=Ls(),r=n.length+1,o=new ye(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===r&&l.largestBatchId>s&&i.set(l.getKey(),l)}return ne.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new At((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>s){let h=r.get(c.largestBatchId);h===null&&(h=Ls(),r=r.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const a=Ls(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,h)=>a.set(c,h)),!(a.size()>=i)););return ne.resolve(a)}ue(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.es.get(i.largestBatchId).delete(s.key);this.es.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new Kb(n,s));let r=this.es.get(n);r===void 0&&(r=Oe(),this.es.set(n,r)),this.es.set(n,r.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(){this.ns=new St(Ot.ss),this.rs=new St(Ot.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const s=new Ot(e,n);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.cs(new Ot(e,n))}hs(e,n){e.forEach(s=>this.removeReference(s,n))}ls(e){const n=new ye(new st([])),s=new Ot(n,e),i=new Ot(n,e+1),r=[];return this.rs.forEachInRange([s,i],o=>{this.cs(o),r.push(o.key)}),r}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new ye(new st([])),s=new Ot(n,e),i=new Ot(n,e+1);let r=Oe();return this.rs.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new Ot(e,0),s=this.ns.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Ot{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return ye.comparator(e.key,n.key)||Ge(e._s,n._s)}static os(e,n){return Ge(e._s,n._s)||ye.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ew{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new St(Ot.ss)}checkEmpty(e){return ne.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Hb(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.gs=this.gs.add(new Ot(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return ne.resolve(o)}lookupMutationBatch(e,n){return ne.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.ps(s),r=i<0?0:i;return ne.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return ne.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return ne.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Ot(n,0),i=new Ot(n,Number.POSITIVE_INFINITY),r=[];return this.gs.forEachInRange([s,i],o=>{const a=this.ys(o._s);r.push(a)}),ne.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new St(Ge);return n.forEach(i=>{const r=new Ot(i,0),o=new Ot(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([r,o],a=>{s=s.add(a._s)})}),ne.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;ye.isDocumentKey(r)||(r=r.child(""));const o=new Ot(new ye(r),0);let a=new St(Ge);return this.gs.forEachWhile(l=>{const c=l.key.path;return!!s.isPrefixOf(c)&&(c.length===i&&(a=a.add(l._s)),!0)},o),ne.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(s=>{const i=this.ys(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){et(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return ne.forEach(n.mutations,i=>{const r=new Ot(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.gs=s})}An(e){}containsKey(e,n){const s=new Ot(n,0),i=this.gs.firstAfterOrEqual(s);return ne.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,ne.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tw{constructor(e){this.Es=e,this.docs=new At(ye.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Es(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return ne.resolve(s?s.document.mutableCopy():qt.newInvalidDocument(n))}getEntries(e,n){let s=ns();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():qt.newInvalidDocument(i))}),ne.resolve(s)}getAllFromCollection(e,n,s){let i=ns();const r=new ye(n.child("")),o=this.docs.getIteratorFrom(r);for(;o.hasNext();){const{key:a,value:{document:l}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||q1(j1(l),s)<=0||(i=i.insert(l.key,l.mutableCopy()))}return ne.resolve(i)}getAllFromCollectionGroup(e,n,s,i){Te()}As(e,n){return ne.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new nw(this)}getSize(e){return ne.resolve(this.size)}}class nw extends Yb{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.Yn.addEntry(e,i)):this.Yn.removeEntry(s)}),ne.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sw{constructor(e){this.persistence=e,this.Rs=new Si(n=>Ec(n),Tc),this.lastRemoteSnapshotVersion=De.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Rc,this.targetCount=0,this.vs=yi.Pn()}forEachTarget(e,n){return this.Rs.forEach((s,i)=>n(i)),ne.resolve()}getLastRemoteSnapshotVersion(e){return ne.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return ne.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),ne.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),ne.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new yi(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,ne.resolve()}updateTargetData(e,n){return this.Dn(n),ne.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,ne.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Rs.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),ne.waitFor(r).next(()=>i)}getTargetCount(e){return ne.resolve(this.targetCount)}getTargetData(e,n){const s=this.Rs.get(n)||null;return ne.resolve(s)}addMatchingKeys(e,n,s){return this.Ps.us(n,s),ne.resolve()}removeMatchingKeys(e,n,s){this.Ps.hs(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),ne.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),ne.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Ps.ds(n);return ne.resolve(s)}containsKey(e,n){return ne.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iw{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new wc(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new sw(this),this.indexManager=new Wb,this.remoteDocumentCache=function(s){return new tw(s)}(s=>this.referenceDelegate.xs(s)),this.It=new zb(n),this.Ns=new Jb(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Zb,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Vs[e.toKey()];return s||(s=new ew(n,this.referenceDelegate),this.Vs[e.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,s){pe("MemoryPersistence","Starting transaction:",e);const i=new rw(this.Ss.next());return this.referenceDelegate.ks(),s(i).next(r=>this.referenceDelegate.Os(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Ms(e,n){return ne.or(Object.values(this.Vs).map(s=>()=>s.containsKey(e,n)))}}class rw extends K1{constructor(e){super(),this.currentSequenceNumber=e}}class Pc{constructor(e){this.persistence=e,this.Fs=new Rc,this.$s=null}static Bs(e){return new Pc(e)}get Ls(){if(this.$s)return this.$s;throw Te()}addReference(e,n,s){return this.Fs.addReference(s,n),this.Ls.delete(s.toString()),ne.resolve()}removeReference(e,n,s){return this.Fs.removeReference(s,n),this.Ls.add(s.toString()),ne.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),ne.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(i=>this.Ls.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.Ls.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ne.forEach(this.Ls,s=>{const i=ye.fromPath(s);return this.Us(e,i).next(r=>{r||n.removeEntry(i,De.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.Us(e,n).next(s=>{s?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}Us(e,n){return ne.or([()=>ne.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.Si=s,this.Di=i}static Ci(e,n){let s=Oe(),i=Oe();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new Nc(e,n.fromCache,s,i)}}/**
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
 */class ow{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,s,i){return this.ki(e,n).next(r=>r||this.Oi(e,n,i,s)).next(r=>r||this.Mi(e,n))}ki(e,n){if(Zu(n))return ne.resolve(null);let s=ts(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Il(n,null,"F"),s=ts(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=Oe(...r);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(l=>{const c=this.Fi(n,a);return this.$i(n,c,o,l.readTime)?this.ki(e,Il(n,null,"F")):this.Bi(e,c,n,l)}))})))}Oi(e,n,s,i){return Zu(n)||i.isEqual(De.min())?this.Mi(e,n):this.Ni.getDocuments(e,s).next(r=>{const o=this.Fi(n,r);return this.$i(n,o,s,i)?this.Mi(e,n):(Ku()<=je.DEBUG&&pe("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Cl(n)),this.Bi(e,o,n,B1(i,-1)))})}Fi(e,n){let s=new St(jm(e));return n.forEach((i,r)=>{Cc(e,r)&&(s=s.add(r))}),s}$i(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Mi(e,n){return Ku()<=je.DEBUG&&pe("QueryEngine","Using full collection scan to execute query:",Cl(n)),this.Ni.getDocumentsMatchingQuery(e,n,Es.min())}Bi(e,n,s,i){return this.Ni.getDocumentsMatchingQuery(e,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aw{constructor(e,n,s,i){this.persistence=e,this.Li=n,this.It=i,this.Ui=new At(Ge),this.qi=new Si(r=>Ec(r),Tc),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(s)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Xb(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ui))}}function lw(t,e,n,s){return new aw(t,e,n,s)}async function lg(t,e){const n=Ce(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.Qi(e),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let l=Oe();for(const c of i){o.push(c.batchId);for(const h of c.mutations)l=l.add(h.key)}for(const c of r){a.push(c.batchId);for(const h of c.mutations)l=l.add(h.key)}return n.localDocuments.getDocuments(s,l).next(c=>({ji:c,removedBatchIds:o,addedBatchIds:a}))})})}function cw(t,e){const n=Ce(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,c){const h=l.batch,f=h.keys();let d=ne.resolve();return f.forEach(m=>{d=d.next(()=>c.getEntry(a,m)).next(_=>{const v=l.docVersions.get(m);et(v!==null),_.version.compareTo(v)<0&&(h.applyToRemoteDocument(_,l),_.isValidDocument()&&(_.setReadTime(l.commitVersion),c.addEntry(_)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,h))}(n,s,e,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=Oe();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,i))})}function cg(t){const e=Ce(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function uw(t,e){const n=Ce(t),s=e.snapshotVersion;let i=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.Ui;const a=[];e.targetChanges.forEach((h,f)=>{const d=i.get(f);if(!d)return;a.push(n.Cs.removeMatchingKeys(r,h.removedDocuments,f).next(()=>n.Cs.addMatchingKeys(r,h.addedDocuments,f)));let m=d.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.has(f)?m=m.withResumeToken(Zt.EMPTY_BYTE_STRING,De.min()).withLastLimboFreeSnapshotVersion(De.min()):h.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(h.resumeToken,s)),i=i.insert(f,m),function(_,v,y){return _.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-_.snapshotVersion.toMicroseconds()>=3e8?!0:y.addedDocuments.size+y.modifiedDocuments.size+y.removedDocuments.size>0}(d,m,h)&&a.push(n.Cs.updateTargetData(r,m))});let l=ns(),c=Oe();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,h))}),a.push(hw(r,o,e.documentUpdates).next(h=>{l=h.Wi,c=h.zi})),!s.isEqual(De.min())){const h=n.Cs.getLastRemoteSnapshotVersion(r).next(f=>n.Cs.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(h)}return ne.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,l,c)).next(()=>l)}).then(r=>(n.Ui=i,r))}function hw(t,e,n){let s=Oe(),i=Oe();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let o=ns();return n.forEach((a,l)=>{const c=r.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(De.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):pe("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{Wi:o,zi:i}})}function fw(t,e){const n=Ce(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function dw(t,e){const n=Ce(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Cs.getTargetData(s,e).next(r=>r?(i=r,ne.resolve(i)):n.Cs.allocateTargetId(s).next(o=>(i=new $s(e,o,0,s.currentSequenceNumber),n.Cs.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.Ui.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(s.targetId,s),n.qi.set(e,s.targetId)),s})}async function Rl(t,e,n){const s=Ce(t),i=s.Ui.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Pr(o))throw o;pe("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ui=s.Ui.remove(e),s.qi.delete(i.target)}function lh(t,e,n){const s=Ce(t);let i=De.min(),r=Oe();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,l,c){const h=Ce(a),f=h.qi.get(c);return f!==void 0?ne.resolve(h.Ui.get(f)):h.Cs.getTargetData(l,c)}(s,o,ts(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{r=l})}).next(()=>s.Li.getDocumentsMatchingQuery(o,e,n?i:De.min(),n?r:Oe())).next(a=>(pw(s,cb(e),a),{documents:a,Hi:r})))}function pw(t,e,n){let s=t.Ki.get(e)||De.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),t.Ki.set(e,s)}class ch{constructor(){this.activeTargetIds=eg()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class mw{constructor(){this.Lr=new ch,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,n,s){this.Ur[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new ch,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class gw{qr(e){}shutdown(){}}/**
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
 */class uh{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){pe("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){pe("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _w={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vw{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yw extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,s,i,r){const o=this.ho(e,n);pe("RestConnection","Sending: ",o,s);const a={};return this.lo(a,i,r),this.fo(e,o,a,s).then(l=>(pe("RestConnection","Received: ",l),l),l=>{throw wl("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",s),l})}_o(e,n,s,i,r,o){return this.ao(e,n,s,i,r)}lo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Ci,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>e[r]=i),s&&s.headers.forEach((i,r)=>e[r]=i)}ho(e,n){const s=_w[e];return`${this.oo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,s,i){return new Promise((r,o)=>{const a=new R1;a.setWithCredentials(!0),a.listenOnce(S1.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case za.NO_ERROR:const c=a.getResponseJson();pe("Connection","XHR received:",JSON.stringify(c)),r(c);break;case za.TIMEOUT:pe("Connection",'RPC "'+e+'" timed out'),o(new be(te.DEADLINE_EXCEEDED,"Request time out"));break;case za.HTTP_ERROR:const h=a.getStatus();if(pe("Connection",'RPC "'+e+'" failed with status:',h,"response text:",a.getResponseText()),h>0){const f=a.getResponseJson().error;if(f&&f.status&&f.message){const d=function(m){const _=m.toLowerCase().replace(/_/g,"-");return Object.values(te).indexOf(_)>=0?_:te.UNKNOWN}(f.status);o(new be(d,f.message))}else o(new be(te.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new be(te.UNAVAILABLE,"Connection failed."));break;default:Te()}}finally{pe("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(i);a.send(n,"POST",l,s,15)})}wo(e,n,s){const i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=I1(),o=C1(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new D1({})),this.lo(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const l=i.join("");pe("Connection","Creating WebChannel: "+l,a);const c=r.createWebChannel(l,a);let h=!1,f=!1;const d=new vw({Hr:_=>{f?pe("Connection","Not sending because WebChannel is closed:",_):(h||(pe("Connection","Opening WebChannel transport."),c.open(),h=!0),pe("Connection","WebChannel sending:",_),c.send(_))},Jr:()=>c.close()}),m=(_,v,y)=>{_.listen(v,E=>{try{y(E)}catch(T){setTimeout(()=>{throw T},0)}})};return m(c,xr.EventType.OPEN,()=>{f||pe("Connection","WebChannel transport opened.")}),m(c,xr.EventType.CLOSE,()=>{f||(f=!0,pe("Connection","WebChannel transport closed"),d.io())}),m(c,xr.EventType.ERROR,_=>{f||(f=!0,wl("Connection","WebChannel transport errored:",_),d.io(new be(te.UNAVAILABLE,"The operation could not be completed")))}),m(c,xr.EventType.MESSAGE,_=>{var v;if(!f){const y=_.data[0];et(!!y);const E=y,T=E.error||((v=E[0])===null||v===void 0?void 0:v.error);if(T){pe("Connection","WebChannel received error:",T);const P=T.status;let D=function(K){const N=bt[K];if(N!==void 0)return xm(N)}(P),F=T.message;D===void 0&&(D=te.INTERNAL,F="Unknown error status: "+P+" with message "+T.message),f=!0,d.io(new be(D,F)),c.close()}else pe("Connection","WebChannel received:",y),d.ro(y)}}),m(o,A1.STAT_EVENT,_=>{_.stat===qu.PROXY?pe("Connection","Detected buffering proxy"):_.stat===qu.NOPROXY&&pe("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}function Wa(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fa(t){return new Ab(t,!0)}class ug{constructor(e,n,s=1e3,i=1.5,r=6e4){this.Hs=e,this.timerId=n,this.mo=s,this.yo=i,this.po=r,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-s);i>0&&pe("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hg{constructor(e,n,s,i,r,o,a,l){this.Hs=e,this.vo=s,this.Vo=i,this.So=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Do=0,this.Co=null,this.xo=null,this.stream=null,this.No=new ug(e,n)}ko(){return this.state===1||this.state===5||this.Oo()}Oo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Mo()}async stop(){this.ko()&&await this.close(0)}Fo(){this.state=0,this.No.reset()}$o(){this.Oo()&&this.Co===null&&(this.Co=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.Bo()))}Lo(e){this.Uo(),this.stream.send(e)}async Bo(){if(this.Oo())return this.close(0)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}qo(){this.xo&&(this.xo.cancel(),this.xo=null)}async close(e,n){this.Uo(),this.qo(),this.No.cancel(),this.Do++,e!==4?this.No.reset():n&&n.code===te.RESOURCE_EXHAUSTED?(es(n.toString()),es("Using maximum backoff delay to prevent overloading the backend."),this.No.Ao()):n&&n.code===te.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Ko(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}Ko(){}auth(){this.state=1;const e=this.Go(this.Do),n=this.Do;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Do===n&&this.Qo(s,i)},s=>{e(()=>{const i=new be(te.UNKNOWN,"Fetching auth token failed: "+s.message);return this.jo(i)})})}Qo(e,n){const s=this.Go(this.Do);this.stream=this.Wo(e,n),this.stream.Yr(()=>{s(()=>(this.state=2,this.xo=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.Oo()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{s(()=>this.jo(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Mo(){this.state=5,this.No.Ro(async()=>{this.state=0,this.start()})}jo(e){return pe("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Go(e){return n=>{this.Hs.enqueueAndForget(()=>this.Do===e?n():(pe("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class bw extends hg{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.It=r}Wo(e,n){return this.So.wo("Listen",e,n)}onMessage(e){this.No.reset();const n=Pb(this.It,e),s=function(i){if(!("targetChange"in i))return De.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?De.min():r.readTime?Yn(r.readTime):De.min()}(e);return this.listener.zo(n,s)}Ho(e){const n={};n.database=Dl(this.It),n.addTarget=function(i,r){let o;const a=r.target;return o=Tl(a)?{documents:Lb(i,a)}:{query:Mb(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=sg(i,r.resumeToken):r.snapshotVersion.compareTo(De.min())>0&&(o.readTime=Po(i,r.snapshotVersion.toTimestamp())),o}(this.It,e);const s=Ub(this.It,e);s&&(n.labels=s),this.Lo(n)}Jo(e){const n={};n.database=Dl(this.It),n.removeTarget=e,this.Lo(n)}}class ww extends hg{constructor(e,n,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.It=r,this.Yo=!1}get Xo(){return this.Yo}start(){this.Yo=!1,this.lastStreamToken=void 0,super.start()}Ko(){this.Yo&&this.Zo([])}Wo(e,n){return this.So.wo("Write",e,n)}onMessage(e){if(et(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Yo){this.No.reset();const n=Ob(e.writeResults,e.commitTime),s=Yn(e.commitTime);return this.listener.tu(s,n)}return et(!e.writeResults||e.writeResults.length===0),this.Yo=!0,this.listener.eu()}nu(){const e={};e.database=Dl(this.It),this.Lo(e)}Zo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>Nb(this.It,s))};this.Lo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kw extends class{}{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.So=s,this.It=i,this.su=!1}iu(){if(this.su)throw new be(te.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,s){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.So.ao(e,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===te.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new be(te.UNKNOWN,i.toString())})}_o(e,n,s,i){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.So._o(e,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===te.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new be(te.UNKNOWN,r.toString())})}terminate(){this.su=!0}}class Ew{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ru=0,this.ou=null,this.uu=!0}cu(){this.ru===0&&(this.au("Unknown"),this.ou=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ou=null,this.hu("Backend didn't respond within 10 seconds."),this.au("Offline"),Promise.resolve())))}lu(e){this.state==="Online"?this.au("Unknown"):(this.ru++,this.ru>=1&&(this.fu(),this.hu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.au("Offline")))}set(e){this.fu(),this.ru=0,e==="Online"&&(this.uu=!1),this.au(e)}au(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}hu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.uu?(es(n),this.uu=!1):pe("OnlineStateTracker",n)}fu(){this.ou!==null&&(this.ou.cancel(),this.ou=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tw{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.du=[],this._u=new Map,this.wu=new Set,this.mu=[],this.gu=r,this.gu.qr(o=>{s.enqueueAndForget(async()=>{Js(this)&&(pe("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=Ce(a);l.wu.add(4),await Lr(l),l.yu.set("Unknown"),l.wu.delete(4),await da(l)}(this))})}),this.yu=new Ew(s,i)}}async function da(t){if(Js(t))for(const e of t.mu)await e(!0)}async function Lr(t){for(const e of t.mu)await e(!1)}function fg(t,e){const n=Ce(t);n._u.has(e.targetId)||(n._u.set(e.targetId,e),Mc(n)?Lc(n):Ai(n).Oo()&&Oc(n,e))}function dg(t,e){const n=Ce(t),s=Ai(n);n._u.delete(e),s.Oo()&&pg(n,e),n._u.size===0&&(s.Oo()?s.$o():Js(n)&&n.yu.set("Unknown"))}function Oc(t,e){t.pu.Mt(e.targetId),Ai(t).Ho(e)}function pg(t,e){t.pu.Mt(e),Ai(t).Jo(e)}function Lc(t){t.pu=new Ib({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t._u.get(e)||null}),Ai(t).start(),t.yu.cu()}function Mc(t){return Js(t)&&!Ai(t).ko()&&t._u.size>0}function Js(t){return Ce(t).wu.size===0}function mg(t){t.pu=void 0}async function Iw(t){t._u.forEach((e,n)=>{Oc(t,e)})}async function Cw(t,e){mg(t),Mc(t)?(t.yu.lu(e),Lc(t)):t.yu.set("Unknown")}async function Sw(t,e,n){if(t.yu.set("Online"),e instanceof ng&&e.state===2&&e.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s._u.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s._u.delete(o),s.pu.removeTarget(o))}(t,e)}catch(s){pe("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await No(t,s)}else if(e instanceof io?t.pu.Gt(e):e instanceof tg?t.pu.Yt(e):t.pu.Wt(e),!n.isEqual(De.min()))try{const s=await cg(t.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.pu.te(r);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const c=i._u.get(l);c&&i._u.set(l,c.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const l=i._u.get(a);if(!l)return;i._u.set(a,l.withResumeToken(Zt.EMPTY_BYTE_STRING,l.snapshotVersion)),pg(i,a);const c=new $s(l.target,a,1,l.sequenceNumber);Oc(i,c)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){pe("RemoteStore","Failed to raise snapshot:",s),await No(t,s)}}async function No(t,e,n){if(!Pr(e))throw e;t.wu.add(1),await Lr(t),t.yu.set("Offline"),n||(n=()=>cg(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{pe("RemoteStore","Retrying IndexedDB access"),await n(),t.wu.delete(1),await da(t)})}function gg(t,e){return e().catch(n=>No(t,n,e))}async function pa(t){const e=Ce(t),n=Is(e);let s=e.du.length>0?e.du[e.du.length-1].batchId:-1;for(;Aw(e);)try{const i=await fw(e.localStore,s);if(i===null){e.du.length===0&&n.$o();break}s=i.batchId,Dw(e,i)}catch(i){await No(e,i)}_g(e)&&vg(e)}function Aw(t){return Js(t)&&t.du.length<10}function Dw(t,e){t.du.push(e);const n=Is(t);n.Oo()&&n.Xo&&n.Zo(e.mutations)}function _g(t){return Js(t)&&!Is(t).ko()&&t.du.length>0}function vg(t){Is(t).start()}async function Rw(t){Is(t).nu()}async function Pw(t){const e=Is(t);for(const n of t.du)e.Zo(n.mutations)}async function Nw(t,e,n){const s=t.du.shift(),i=Dc.from(s,e,n);await gg(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await pa(t)}async function Ow(t,e){e&&Is(t).Xo&&await async function(n,s){if(i=s.code,bb(i)&&i!==te.ABORTED){const r=n.du.shift();Is(n).Fo(),await gg(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await pa(n)}var i}(t,e),_g(t)&&vg(t)}async function hh(t,e){const n=Ce(t);n.asyncQueue.verifyOperationInProgress(),pe("RemoteStore","RemoteStore received new credentials");const s=Js(n);n.wu.add(3),await Lr(n),s&&n.yu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.wu.delete(3),await da(n)}async function Lw(t,e){const n=Ce(t);e?(n.wu.delete(2),await da(n)):e||(n.wu.add(2),await Lr(n),n.yu.set("Unknown"))}function Ai(t){return t.Iu||(t.Iu=function(e,n,s){const i=Ce(e);return i.iu(),new bw(n,i.So,i.authCredentials,i.appCheckCredentials,i.It,s)}(t.datastore,t.asyncQueue,{Yr:Iw.bind(null,t),Zr:Cw.bind(null,t),zo:Sw.bind(null,t)}),t.mu.push(async e=>{e?(t.Iu.Fo(),Mc(t)?Lc(t):t.yu.set("Unknown")):(await t.Iu.stop(),mg(t))})),t.Iu}function Is(t){return t.Tu||(t.Tu=function(e,n,s){const i=Ce(e);return i.iu(),new ww(n,i.So,i.authCredentials,i.appCheckCredentials,i.It,s)}(t.datastore,t.asyncQueue,{Yr:Rw.bind(null,t),Zr:Ow.bind(null,t),eu:Pw.bind(null,t),tu:Nw.bind(null,t)}),t.mu.push(async e=>{e?(t.Tu.Fo(),await pa(t)):(await t.Tu.stop(),t.du.length>0&&(pe("RemoteStore",`Stopping write stream with ${t.du.length} pending writes`),t.du=[]))})),t.Tu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new vs,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new $c(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new be(te.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Uc(t,e){if(es("AsyncQueue",`${e}: ${t}`),Pr(t))return new be(te.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(e){this.comparator=e?(n,s)=>e(n,s)||ye.comparator(n.key,s.key):(n,s)=>ye.comparator(n.key,s.key),this.keyedMap=Bi(),this.sortedSet=new At(this.comparator)}static emptySet(e){return new ci(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ci)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new ci;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{constructor(){this.Eu=new At(ye.comparator)}track(e){const n=e.doc.key,s=this.Eu.get(n);s?e.type!==0&&s.type===3?this.Eu=this.Eu.insert(n,e):e.type===3&&s.type!==1?this.Eu=this.Eu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Eu=this.Eu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Eu=this.Eu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Eu=this.Eu.remove(n):e.type===1&&s.type===2?this.Eu=this.Eu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Eu=this.Eu.insert(n,{type:2,doc:e.doc}):Te():this.Eu=this.Eu.insert(n,e)}Au(){const e=[];return this.Eu.inorderTraversal((n,s)=>{e.push(s)}),e}}class bi{constructor(e,n,s,i,r,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,s,i,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new bi(e,n,ci.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&la(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mw{constructor(){this.Ru=void 0,this.listeners=[]}}class $w{constructor(){this.queries=new Si(e=>Bm(e),la),this.onlineState="Unknown",this.bu=new Set}}async function yg(t,e){const n=Ce(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new Mw),i)try{r.Ru=await n.onListen(s)}catch(o){const a=Uc(o,`Initialization of query '${Cl(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,r),r.listeners.push(e),e.Pu(n.onlineState),r.Ru&&e.vu(r.Ru)&&Fc(n)}async function bg(t,e){const n=Ce(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function Uw(t,e){const n=Ce(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.vu(i)&&(s=!0);o.Ru=i}}s&&Fc(n)}function Fw(t,e,n){const s=Ce(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function Fc(t){t.bu.forEach(e=>{e.next()})}class wg{constructor(e,n,s){this.query=e,this.Vu=n,this.Su=!1,this.Du=null,this.onlineState="Unknown",this.options=s||{}}vu(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new bi(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Su?this.Cu(e)&&(this.Vu.next(e),n=!0):this.xu(e,this.onlineState)&&(this.Nu(e),n=!0),this.Du=e,n}onError(e){this.Vu.error(e)}Pu(e){this.onlineState=e;let n=!1;return this.Du&&!this.Su&&this.xu(this.Du,e)&&(this.Nu(this.Du),n=!0),n}xu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.ku||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Cu(e){if(e.docChanges.length>0)return!0;const n=this.Du&&this.Du.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Nu(e){e=bi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Su=!0,this.Vu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{constructor(e){this.key=e}}class Eg{constructor(e){this.key=e}}class Vw{constructor(e,n){this.query=e,this.Uu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=Oe(),this.mutatedKeys=Oe(),this.Gu=jm(e),this.Qu=new ci(this.Gu)}get ju(){return this.Uu}Wu(e,n){const s=n?n.zu:new fh,i=n?n.Qu:this.Qu;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,f)=>{const d=i.get(h),m=Cc(this.query,f)?f:null,_=!!d&&this.mutatedKeys.has(d.key),v=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let y=!1;d&&m?d.data.isEqual(m.data)?_!==v&&(s.track({type:3,doc:m}),y=!0):this.Hu(d,m)||(s.track({type:2,doc:m}),y=!0,(l&&this.Gu(m,l)>0||c&&this.Gu(m,c)<0)&&(a=!0)):!d&&m?(s.track({type:0,doc:m}),y=!0):d&&!m&&(s.track({type:1,doc:d}),y=!0,(l||c)&&(a=!0)),y&&(m?(o=o.add(m),r=v?r.add(h):r.delete(h)):(o=o.delete(h),r=r.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),r=r.delete(h.key),s.track({type:1,doc:h})}return{Qu:o,zu:s,$i:a,mutatedKeys:r}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const i=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const r=e.zu.Au();r.sort((c,h)=>function(f,d){const m=_=>{switch(_){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Te()}};return m(f)-m(d)}(c.type,h.type)||this.Gu(c.doc,h.doc)),this.Ju(s);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,l=a!==this.qu;return this.qu=a,r.length!==0||l?{snapshot:new bi(this.query,e.Qu,i,r,e.mutatedKeys,a===0,l,!1,!!s&&s.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}Pu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new fh,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.Uu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.Uu=this.Uu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Uu=this.Uu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=Oe(),this.Qu.forEach(s=>{this.Zu(s.key)&&(this.Ku=this.Ku.add(s.key))});const n=[];return e.forEach(s=>{this.Ku.has(s)||n.push(new Eg(s))}),this.Ku.forEach(s=>{e.has(s)||n.push(new kg(s))}),n}tc(e){this.Uu=e.Hi,this.Ku=Oe();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return bi.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class Bw{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class jw{constructor(e){this.key=e,this.nc=!1}}class qw{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new Si(a=>Bm(a),la),this.rc=new Map,this.oc=new Set,this.uc=new At(ye.comparator),this.cc=new Map,this.ac=new Rc,this.hc={},this.lc=new Map,this.fc=yi.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function Hw(t,e){const n=Zw(t);let s,i;const r=n.ic.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.ec();else{const o=await dw(n.localStore,ts(e));n.isPrimaryClient&&fg(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await Kw(n,e,s,a==="current",o.resumeToken)}return i}async function Kw(t,e,n,s,i){t._c=(f,d,m)=>async function(_,v,y,E){let T=v.view.Wu(y);T.$i&&(T=await lh(_.localStore,v.query,!1).then(({documents:F})=>v.view.Wu(F,T)));const P=E&&E.targetChanges.get(v.targetId),D=v.view.applyChanges(T,_.isPrimaryClient,P);return ph(_,v.targetId,D.Xu),D.snapshot}(t,f,d,m);const r=await lh(t.localStore,e,!0),o=new Vw(e,r.Hi),a=o.Wu(r.documents),l=Or.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,l);ph(t,n,c.Xu);const h=new Bw(e,n,o);return t.ic.set(e,h),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),c.snapshot}async function zw(t,e){const n=Ce(t),s=n.ic.get(e),i=n.rc.get(s.targetId);if(i.length>1)return n.rc.set(s.targetId,i.filter(r=>!la(r,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Rl(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),dg(n.remoteStore,s.targetId),Pl(n,s.targetId)}).catch(Rr)):(Pl(n,s.targetId),await Rl(n.localStore,s.targetId,!0))}async function Gw(t,e,n){const s=ek(t);try{const i=await function(r,o){const a=Ce(r),l=Ct.now(),c=o.reduce((d,m)=>d.add(m.key),Oe());let h,f;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let m=ns(),_=Oe();return a.Gi.getEntries(d,c).next(v=>{m=v,m.forEach((y,E)=>{E.isValidDocument()||(_=_.add(y))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,m)).next(v=>{h=v;const y=[];for(const E of o){const T=_b(E,h.get(E.key).overlayedDocument);T!=null&&y.push(new As(E.key,T,Fm(T.value.mapValue),Tn.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,y,o)}).next(v=>{f=v;const y=v.applyToLocalDocumentSet(h,_);return a.documentOverlayCache.saveOverlays(d,v.batchId,y)})}).then(()=>({batchId:f.batchId,changes:Jm(h)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let l=r.hc[r.currentUser.toKey()];l||(l=new At(Ge)),l=l.insert(o,a),r.hc[r.currentUser.toKey()]=l}(s,i.batchId,n),await Mr(s,i.changes),await pa(s.remoteStore)}catch(i){const r=Uc(i,"Failed to persist write");n.reject(r)}}async function Tg(t,e){const n=Ce(t);try{const s=await uw(n.localStore,e);e.targetChanges.forEach((i,r)=>{const o=n.cc.get(r);o&&(et(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.nc=!0:i.modifiedDocuments.size>0?et(o.nc):i.removedDocuments.size>0&&(et(o.nc),o.nc=!1))}),await Mr(n,s,e)}catch(s){await Rr(s)}}function dh(t,e,n){const s=Ce(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.ic.forEach((r,o)=>{const a=o.view.Pu(e);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=Ce(r);a.onlineState=o;let l=!1;a.queries.forEach((c,h)=>{for(const f of h.listeners)f.Pu(o)&&(l=!0)}),l&&Fc(a)}(s.eventManager,e),i.length&&s.sc.zo(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Ww(t,e,n){const s=Ce(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.cc.get(e),r=i&&i.key;if(r){let o=new At(ye.comparator);o=o.insert(r,qt.newNoDocument(r,De.min()));const a=Oe().add(r),l=new ha(De.min(),new Map,new St(Ge),o,a);await Tg(s,l),s.uc=s.uc.remove(r),s.cc.delete(e),Vc(s)}else await Rl(s.localStore,e,!1).then(()=>Pl(s,e,n)).catch(Rr)}async function Qw(t,e){const n=Ce(t),s=e.batch.batchId;try{const i=await cw(n.localStore,e);Cg(n,s,null),Ig(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Mr(n,i)}catch(i){await Rr(i)}}async function Yw(t,e,n){const s=Ce(t);try{const i=await function(r,o){const a=Ce(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let c;return a.mutationQueue.lookupMutationBatch(l,o).next(h=>(et(h!==null),c=h.keys(),a.mutationQueue.removeMutationBatch(l,h))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,c,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,c)).next(()=>a.localDocuments.getDocuments(l,c))})}(s.localStore,e);Cg(s,e,n),Ig(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Mr(s,i)}catch(i){await Rr(i)}}function Ig(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function Cg(t,e,n){const s=Ce(t);let i=s.hc[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(n?r.reject(n):r.resolve(),i=i.remove(e)),s.hc[s.currentUser.toKey()]=i}}function Pl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.rc.get(e))t.ic.delete(s),n&&t.sc.wc(s,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(s=>{t.ac.containsKey(s)||Sg(t,s)})}function Sg(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(dg(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),Vc(t))}function ph(t,e,n){for(const s of n)s instanceof kg?(t.ac.addReference(s.key,e),xw(t,s)):s instanceof Eg?(pe("SyncEngine","Document no longer in limbo: "+s.key),t.ac.removeReference(s.key,e),t.ac.containsKey(s.key)||Sg(t,s.key)):Te()}function xw(t,e){const n=e.key,s=n.path.canonicalString();t.uc.get(n)||t.oc.has(s)||(pe("SyncEngine","New document in limbo: "+n),t.oc.add(s),Vc(t))}function Vc(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new ye(st.fromString(e)),s=t.fc.next();t.cc.set(s,new jw(n)),t.uc=t.uc.insert(n,s),fg(t.remoteStore,new $s(ts(Ic(n.path)),s,2,wc.at))}}async function Mr(t,e,n){const s=Ce(t),i=[],r=[],o=[];s.ic.isEmpty()||(s.ic.forEach((a,l)=>{o.push(s._c(l,e,n).then(c=>{if((c||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const h=Nc.Ci(l.targetId,c);r.push(h)}}))}),await Promise.all(o),s.sc.zo(i),await async function(a,l){const c=Ce(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>ne.forEach(l,f=>ne.forEach(f.Si,d=>c.persistence.referenceDelegate.addReference(h,f.targetId,d)).next(()=>ne.forEach(f.Di,d=>c.persistence.referenceDelegate.removeReference(h,f.targetId,d)))))}catch(h){if(!Pr(h))throw h;pe("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const f=h.targetId;if(!h.fromCache){const d=c.Ui.get(f),m=d.snapshotVersion,_=d.withLastLimboFreeSnapshotVersion(m);c.Ui=c.Ui.insert(f,_)}}}(s.localStore,r))}async function Xw(t,e){const n=Ce(t);if(!n.currentUser.isEqual(e)){pe("SyncEngine","User change. New user:",e.toKey());const s=await lg(n.localStore,e);n.currentUser=e,function(i,r){i.lc.forEach(o=>{o.forEach(a=>{a.reject(new be(te.CANCELLED,r))})}),i.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Mr(n,s.ji)}}function Jw(t,e){const n=Ce(t),s=n.cc.get(e);if(s&&s.nc)return Oe().add(s.key);{let i=Oe();const r=n.rc.get(e);if(!r)return i;for(const o of r){const a=n.ic.get(o);i=i.unionWith(a.view.ju)}return i}}function Zw(t){const e=Ce(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Tg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Jw.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Ww.bind(null,e),e.sc.zo=Uw.bind(null,e.eventManager),e.sc.wc=Fw.bind(null,e.eventManager),e}function ek(t){const e=Ce(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Qw.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Yw.bind(null,e),e}class tk{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=fa(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return lw(this.persistence,new ow,e.initialUser,this.It)}yc(e){return new iw(Pc.Bs,this.It)}gc(e){return new mw}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class nk{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>dh(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Xw.bind(null,this.syncEngine),await Lw(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new $w}createDatastore(e){const n=fa(e.databaseInfo.databaseId),s=(i=e.databaseInfo,new yw(i));var i;return function(r,o,a,l){return new kw(r,o,a,l)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,i=e.asyncQueue,r=a=>dh(this.syncEngine,a,0),o=uh.C()?new uh:new gw,new Tw(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(e,n){return function(s,i,r,o,a,l,c){const h=new qw(s,i,r,o,a,l);return c&&(h.dc=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=Ce(e);pe("RemoteStore","RemoteStore shutting down."),n.wu.add(5),await Lr(n),n.gu.shutdown(),n.yu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ag(t,e,n){if(!n)throw new be(te.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function sk(t,e,n,s){if(e===!0&&s===!0)throw new be(te.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function mh(t){if(!ye.isDocumentKey(t))throw new be(te.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function gh(t){if(ye.isDocumentKey(t))throw new be(te.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Bc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Te()}function Ln(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new be(te.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Bc(t);throw new be(te.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _h=new Map;class vh{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new be(te.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new be(te.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,sk("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new vh({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new be(te.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new be(te.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new vh(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new P1;switch(n.type){case"gapi":const s=n.client;return new M1(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new be(te.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=_h.get(e);n&&(pe("ComponentProvider","Removing Datastore"),_h.delete(e),n.terminate())}(this),Promise.resolve()}}function ik(t,e,n,s={}){var i;const r=(t=Ln(t,ma))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==e&&wl("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=Wt.MOCK_USER;else{o=gy(s.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=s.mockUserToken.sub||s.mockUserToken.user_id;if(!l)throw new be(te.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Wt(l)}t._authCredentials=new N1(new Om(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ys(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new mn(this.firestore,e,this._key)}}class $r{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new $r(this.firestore,e,this._query)}}class ys extends $r{constructor(e,n,s){super(e,n,Ic(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new mn(this.firestore,null,new ye(e))}withConverter(e){return new ys(this.firestore,e,this._path)}}function En(t,e,...n){if(t=Jt(t),Ag("collection","path",e),t instanceof ma){const s=st.fromString(e,...n);return gh(s),new ys(t,null,s)}{if(!(t instanceof mn||t instanceof ys))throw new be(te.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(st.fromString(e,...n));return gh(s),new ys(t.firestore,null,s)}}function ss(t,e,...n){if(t=Jt(t),arguments.length===1&&(e=Lm.R()),Ag("doc","path",e),t instanceof ma){const s=st.fromString(e,...n);return mh(s),new mn(t,null,new ye(s))}{if(!(t instanceof mn||t instanceof ys))throw new be(te.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(st.fromString(e,...n));return mh(s),new mn(t.firestore,t instanceof ys?t.converter:null,new ye(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Dg{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):es("Uncaught Error in snapshot listener:",e)}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rk{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=Wt.UNAUTHENTICATED,this.clientId=Lm.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{pe("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(pe("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new be(te.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new vs;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Uc(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function ok(t,e){t.asyncQueue.verifyOperationInProgress(),pe("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await lg(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function ak(t,e){t.asyncQueue.verifyOperationInProgress();const n=await lk(t);pe("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(i=>hh(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,r)=>hh(e.remoteStore,r)),t.onlineComponents=e}async function lk(t){return t.offlineComponents||(pe("FirestoreClient","Using default OfflineComponentProvider"),await ok(t,new tk)),t.offlineComponents}async function Rg(t){return t.onlineComponents||(pe("FirestoreClient","Using default OnlineComponentProvider"),await ak(t,new nk)),t.onlineComponents}function ck(t){return Rg(t).then(e=>e.syncEngine)}async function Nl(t){const e=await Rg(t),n=e.eventManager;return n.onListen=Hw.bind(null,e.syncEngine),n.onUnlisten=zw.bind(null,e.syncEngine),n}function uk(t,e,n={}){const s=new vs;return t.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,l){const c=new Dg({next:f=>{r.enqueueAndForget(()=>bg(i,h)),f.fromCache&&a.source==="server"?l.reject(new be(te.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(f)},error:f=>l.reject(f)}),h=new wg(o,c,{includeMetadataChanges:!0,ku:!0});return yg(i,h)}(await Nl(t),t.asyncQueue,e,n,s)),s.promise}class hk{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.No=new ug(this,"async_queue_retry"),this.Wc=()=>{const n=Wa();n&&pe("AsyncQueue","Visibility state changed to "+n.visibilityState),this.No.Po()};const e=Wa();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.Uc){this.Uc=!0,this.Qc=e||!1;const n=Wa();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.Uc)return new Promise(()=>{});const n=new vs;return this.Hc(()=>this.Uc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.No.reset()}catch(e){if(!Pr(e))throw e;pe("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.No.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(s=>{this.Kc=s,this.Gc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw es("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Gc=!1,s))));return this.Bc=n,n}enqueueAfterDelay(e,n,s){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const i=$c.createAndSchedule(this,e,n,s,r=>this.Yc(r));return this.qc.push(i),i}zc(){this.Kc&&Te()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.qc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.qc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.qc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.qc.indexOf(e);this.qc.splice(n,1)}}function yh(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Gs extends ma{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=new hk,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Pg(this),this._firestoreClient.terminate()}}function fk(t,e){const n=typeof t=="object"?t:Ap(),s=typeof t=="string"?t:e||"(default)",i=Jl(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=dy("firestore");r&&ik(i,...r)}return i}function jc(t){return t._firestoreClient||Pg(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Pg(t){var e;const n=t._freezeSettings(),s=function(i,r,o,a){return new G1(i,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new rk(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class wi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new wi(Zt.fromBase64String(e))}catch(n){throw new be(te.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new wi(Zt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new be(te.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Qt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new be(te.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new be(te.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ge(this._lat,e._lat)||Ge(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dk=/^__.*__$/;class pk{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new As(e,this.data,this.fieldMask,n,this.fieldTransforms):new Nr(e,this.data,n,this.fieldTransforms)}}class Ng{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new As(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Og(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Te()}}class Kc{constructor(e,n,s,i,r,o){this.settings=e,this.databaseId=n,this.It=s,this.ignoreUndefinedProperties=i,r===void 0&&this.na(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new Kc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:s,oa:!1});return i.ua(e),i}ca(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:s,oa:!1});return i.na(),i}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return Oo(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(Og(this.sa)&&dk.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class mk{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.It=s||fa(e)}da(e,n,s,i=!1){return new Kc({sa:e,methodName:n,fa:s,path:Qt.emptyPath(),oa:!1,la:i},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function Lg(t){const e=t._freezeSettings(),n=fa(t._databaseId);return new mk(t._databaseId,!!e.ignoreUndefinedProperties,n)}function gk(t,e,n,s,i,r={}){const o=t.da(r.merge||r.mergeFields?2:0,e,n,i);zc("Data must be an object, but it was:",o,s);const a=Mg(s,o);let l,c;if(r.merge)l=new kn(o.fieldMask),c=o.fieldTransforms;else if(r.mergeFields){const h=[];for(const f of r.mergeFields){const d=Ol(e,f,n);if(!o.contains(d))throw new be(te.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Ug(h,d)||h.push(d)}l=new kn(h),c=o.fieldTransforms.filter(f=>l.covers(f.field))}else l=null,c=o.fieldTransforms;return new pk(new fn(a),l,c)}class _a extends qc{_toFieldTransform(e){if(e.sa!==2)throw e.sa===1?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof _a}}function _k(t,e,n,s){const i=t.da(1,e,n);zc("Data must be an object, but it was:",i,s);const r=[],o=fn.empty();Xs(s,(l,c)=>{const h=Gc(e,l,n);c=Jt(c);const f=i.ca(h);if(c instanceof _a)r.push(h);else{const d=va(c,f);d!=null&&(r.push(h),o.set(h,d))}});const a=new kn(r);return new Ng(o,a,i.fieldTransforms)}function vk(t,e,n,s,i,r){const o=t.da(1,e,n),a=[Ol(e,s,n)],l=[i];if(r.length%2!=0)throw new be(te.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<r.length;d+=2)a.push(Ol(e,r[d])),l.push(r[d+1]);const c=[],h=fn.empty();for(let d=a.length-1;d>=0;--d)if(!Ug(c,a[d])){const m=a[d];let _=l[d];_=Jt(_);const v=o.ca(m);if(_ instanceof _a)c.push(m);else{const y=va(_,v);y!=null&&(c.push(m),h.set(m,y))}}const f=new kn(c);return new Ng(h,f,o.fieldTransforms)}function va(t,e){if($g(t=Jt(t)))return zc("Unsupported field value:",e,t),Mg(t,e);if(t instanceof qc)return function(n,s){if(!Og(s.sa))throw s.ha(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ha(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=va(o,s.aa(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(t,e)}return function(n,s){if((n=Jt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return hb(s.It,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Ct.fromDate(n);return{timestampValue:Po(s.It,i)}}if(n instanceof Ct){const i=new Ct(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Po(s.It,i)}}if(n instanceof Hc)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof wi)return{bytesValue:sg(s.It,n._byteString)};if(n instanceof mn){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s.ha(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Ac(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ha(`Unsupported field value: ${Bc(n)}`)}(t,e)}function Mg(t,e){const n={};return Mm(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Xs(t,(s,i)=>{const r=va(i,e.ra(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function $g(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ct||t instanceof Hc||t instanceof wi||t instanceof mn||t instanceof qc)}function zc(t,e,n){if(!$g(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Bc(n);throw s==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+s)}}function Ol(t,e,n){if((e=Jt(e))instanceof ga)return e._internalPath;if(typeof e=="string")return Gc(t,e);throw Oo("Field path arguments must be of type string or ",t,!1,void 0,n)}const yk=new RegExp("[~\\*/\\[\\]]");function Gc(t,e,n){if(e.search(yk)>=0)throw Oo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ga(...e.split("."))._internalPath}catch{throw Oo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Oo(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${s}`),o&&(l+=` in document ${i}`),l+=")"),new be(te.INVALID_ARGUMENT,a+t+l)}function Ug(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new mn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new bk(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Vg("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class bk extends Fg{data(){return super.data()}}function Vg(t,e){return typeof e=="string"?Gc(t,e):e instanceof ga?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bg(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new be(te.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wk{convertValue(e,n="none"){switch(zs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return wt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(_i(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Te()}}convertObject(e,n){const s={};return Xs(e.fields,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(e){return new Hc(wt(e.latitude),wt(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Um(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(ir(e));default:return null}}convertTimestamp(e){const n=Ts(e);return new Ct(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=st.fromString(e);et(ag(s));const i=new rr(s.get(1),s.get(3)),r=new ye(s.popFirst(5));return i.isEqual(n)||es(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kk(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class jg extends Fg{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ro(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Vg("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class ro extends jg{data(e={}){return super.data(e)}}class qg{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new ji(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new ro(this._firestore,this._userDataWriter,s.key,s,new ji(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new be(te.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>({type:"added",doc:new ro(s._firestore,s._userDataWriter,o.doc.key,o.doc,new ji(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter),oldIndex:-1,newIndex:r++}))}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new ro(s._firestore,s._userDataWriter,o.doc.key,o.doc,new ji(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,c=-1;return o.type!==0&&(l=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),c=r.indexOf(o.doc.key)),{type:Ek(o.type),doc:a,oldIndex:l,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Ek(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Te()}}class Wc extends wk{constructor(e){super(),this.firestore=e}convertBytes(e){return new wi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new mn(this.firestore,null,n)}}function ya(t){t=Ln(t,$r);const e=Ln(t.firestore,Gs),n=jc(e),s=new Wc(e);return Bg(t._query),uk(n,t._query).then(i=>new qg(e,s,t,i))}function ba(t,e,n,...s){t=Ln(t,mn);const i=Ln(t.firestore,Gs),r=Lg(i);let o;return o=typeof(e=Jt(e))=="string"||e instanceof ga?vk(r,"updateDoc",t._key,e,n,s):_k(r,"updateDoc",t._key,e),Qc(i,[o.toMutation(t._key,Tn.exists(!0))])}function wa(t){return Qc(Ln(t.firestore,Gs),[new Sc(t._key,Tn.none())])}function Us(t,e){const n=Ln(t.firestore,Gs),s=ss(t),i=kk(t.converter,e);return Qc(n,[gk(Lg(t.firestore),"addDoc",s._key,i,t.converter!==null,{}).toMutation(s._key,Tn.exists(!1))]).then(()=>s)}function Tk(t,...e){var n,s,i;t=Jt(t);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||yh(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(yh(e[o])){const f=e[o];e[o]=(n=f.next)===null||n===void 0?void 0:n.bind(f),e[o+1]=(s=f.error)===null||s===void 0?void 0:s.bind(f),e[o+2]=(i=f.complete)===null||i===void 0?void 0:i.bind(f)}let l,c,h;if(t instanceof mn)c=Ln(t.firestore,Gs),h=Ic(t._key.path),l={next:f=>{e[o]&&e[o](Ik(c,t,f))},error:e[o+1],complete:e[o+2]};else{const f=Ln(t,$r);c=Ln(f.firestore,Gs),h=f._query;const d=new Wc(c);l={next:m=>{e[o]&&e[o](new qg(c,d,f,m))},error:e[o+1],complete:e[o+2]},Bg(t._query)}return function(f,d,m,_){const v=new Dg(_),y=new wg(d,v,m);return f.asyncQueue.enqueueAndForget(async()=>yg(await Nl(f),y)),()=>{v.bc(),f.asyncQueue.enqueueAndForget(async()=>bg(await Nl(f),y))}}(jc(c),h,a,l)}function Qc(t,e){return function(n,s){const i=new vs;return n.asyncQueue.enqueueAndForget(async()=>Gw(await ck(n),s,i)),i.promise}(jc(t),e)}function Ik(t,e,n){const s=n.docs.get(e._key),i=new Wc(t);return new jg(t,i,e._key,s,new ji(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Ci=n})(br),pi(new qs("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new Gs(new O1(n.getProvider("auth-internal")),new U1(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new be(te.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new rr(a.options.projectId,l)}(r,s),r);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),_s(Hu,"3.7.1",t),_s(Hu,"3.7.1","esm2017")})();var Ck="firebase",Sk="9.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_s(Ck,Sk,"app");function Yc(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function Hg(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ak=Hg,Kg=new vr("auth","Firebase",Hg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bh=new xl("@firebase/auth");function oo(t,...e){bh.logLevel<=je.ERROR&&bh.error(`Auth (${br}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function In(t,...e){throw xc(t,...e)}function Mn(t,...e){return xc(t,...e)}function Dk(t,e,n){const s=Object.assign(Object.assign({},Ak()),{[e]:n});return new vr("auth","Firebase",s).create(e,{appName:t.name})}function xc(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Kg.create(t,...e)}function ke(t,e,...n){if(!t)throw xc(e,...n)}function Wn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw oo(e),new Error(e)}function is(t,e){t||Wn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wh=new Map;function Qn(t){is(t instanceof Function,"Expected a class definition");let e=wh.get(t);return e?(is(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,wh.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rk(t,e){const n=Jl(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(_o(r,e!=null?e:{}))return i;In(i,"already-initialized")}return n.initialize({options:e})}function Pk(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Qn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ll(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Nk(){return kh()==="http:"||kh()==="https:"}function kh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ok(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Nk()||iy()||"connection"in navigator)?navigator.onLine:!0}function Lk(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(e,n){this.shortDelay=e,this.longDelay=n,is(n>e,"Short delay should be less than long delay!"),this.isMobile=sy()||ry()}get(){return Ok()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xc(t,e){is(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Wn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Wn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Wn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $k=new Ur(3e4,6e4);function Fr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Vr(t,e,n,s,i={}){return Gg(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=yr(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),zg.fetch()(Wg(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function Gg(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},Mk),e);try{const i=new Uk(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Zr(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Zr(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Zr(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Zr(t,"user-disabled",o);const h=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Dk(t,h,c);In(t,h)}}catch(i){if(i instanceof rs)throw i;In(t,"network-request-failed")}}async function Br(t,e,n,s,i={}){const r=await Vr(t,e,n,s,i);return"mfaPendingCredential"in r&&In(t,"multi-factor-auth-required",{_serverResponse:r}),r}function Wg(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?Xc(t.config,i):`${t.config.apiScheme}://${i}`}class Uk{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Mn(this.auth,"network-request-failed")),$k.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Zr(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=Mn(t,e,s);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fk(t,e){return Vr(t,"POST","/v1/accounts:delete",e)}async function Vk(t,e){return Vr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yi(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Bk(t,e=!1){const n=Jt(t),s=await n.getIdToken(e),i=Jc(s);ke(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Yi(Qa(i.auth_time)),issuedAtTime:Yi(Qa(i.iat)),expirationTime:Yi(Qa(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Qa(t){return Number(t)*1e3}function Jc(t){var e;const[n,s,i]=t.split(".");if(n===void 0||s===void 0||i===void 0)return oo("JWT malformed, contained fewer than 3 sections"),null;try{const r=kp(s);return r?JSON.parse(r):(oo("Failed to decode base64 JWT payload"),null)}catch(r){return oo("Caught error parsing JWT payload as JSON",(e=r)===null||e===void 0?void 0:e.toString()),null}}function jk(t){const e=Jc(t);return ke(e,"internal-error"),ke(typeof e.exp<"u","internal-error"),ke(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ur(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof rs&&qk(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function qk({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Yi(this.lastLoginAt),this.creationTime=Yi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Lo(t){var e;const n=t.auth,s=await t.getIdToken(),i=await ur(t,Vk(n,{idToken:s}));ke(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?Gk(r.providerUserInfo):[],a=zk(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),h=l?c:!1,f={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Qg(r.createdAt,r.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function Kk(t){const e=Jt(t);await Lo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function zk(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function Gk(t){return t.map(e=>{var{providerId:n}=e,s=Yc(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wk(t,e){const n=await Gg(t,{},async()=>{const s=yr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=Wg(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",zg.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ke(e.idToken,"internal-error"),ke(typeof e.idToken<"u","internal-error"),ke(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):jk(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return ke(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await Wk(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new hr;return s&&(ke(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(ke(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(ke(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new hr,this.toJSON())}_performRefresh(){return Wn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function as(t,e){ke(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Fs{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=Yc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Hk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Qg(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await ur(this,this.stsTokenManager.getToken(this.auth,e));return ke(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Bk(this,e)}reload(){return Kk(this)}_assign(e){this!==e&&(ke(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Fs(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){ke(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Lo(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ur(this,Fk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,h;const f=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,m=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,y=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,E=(c=n.createdAt)!==null&&c!==void 0?c:void 0,T=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:P,emailVerified:D,isAnonymous:F,providerData:K,stsTokenManager:N}=n;ke(P&&N,e,"internal-error");const Y=hr.fromJSON(this.name,N);ke(typeof P=="string",e,"internal-error"),as(f,e.name),as(d,e.name),ke(typeof D=="boolean",e,"internal-error"),ke(typeof F=="boolean",e,"internal-error"),as(m,e.name),as(_,e.name),as(v,e.name),as(y,e.name),as(E,e.name),as(T,e.name);const M=new Fs({uid:P,auth:e,email:d,emailVerified:D,displayName:f,isAnonymous:F,photoURL:_,phoneNumber:m,tenantId:v,stsTokenManager:Y,createdAt:E,lastLoginAt:T});return K&&Array.isArray(K)&&(M.providerData=K.map($=>Object.assign({},$))),y&&(M._redirectEventId=y),M}static async _fromIdTokenResponse(e,n,s=!1){const i=new hr;i.updateFromServerResponse(n);const r=new Fs({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Lo(r),r}}/**
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
 */class Yg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Yg.type="NONE";const Eh=Yg;/**
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
 */function ao(t,e,n){return`firebase:${t}:${e}:${n}`}class ui{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=ao(this.userKey,i.apiKey,r),this.fullPersistenceKey=ao("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Fs._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new ui(Qn(Eh),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||Qn(Eh);const o=ao(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const h=await c._get(o);if(h){const f=Fs._fromJSON(e,h);c!==r&&(a=f),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new ui(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new ui(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Th(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Jg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(xg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(e_(e))return"Blackberry";if(t_(e))return"Webos";if(Zc(e))return"Safari";if((e.includes("chrome/")||Xg(e))&&!e.includes("edge/"))return"Chrome";if(Zg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function xg(t=Xt()){return/firefox\//i.test(t)}function Zc(t=Xt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Xg(t=Xt()){return/crios\//i.test(t)}function Jg(t=Xt()){return/iemobile/i.test(t)}function Zg(t=Xt()){return/android/i.test(t)}function e_(t=Xt()){return/blackberry/i.test(t)}function t_(t=Xt()){return/webos/i.test(t)}function ka(t=Xt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Qk(t=Xt()){var e;return ka(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Yk(){return oy()&&document.documentMode===10}function n_(t=Xt()){return ka(t)||Zg(t)||t_(t)||e_(t)||/windows phone/i.test(t)||Jg(t)}function xk(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s_(t,e=[]){let n;switch(t){case"Browser":n=Th(Xt());break;case"Worker":n=`${Th(Xt())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${br}/${s}`}/**
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
 */class Xk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const s=[];try{for(const i of this.queue)await i(e),i.onAbort&&s.push(i.onAbort)}catch(i){s.reverse();for(const r of s)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jk{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ih(this),this.idTokenSubscription=new Ih(this),this.beforeStateQueue=new Xk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Kg,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Qn(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await ui.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ke(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await Lo(e)}catch(s){if(((n=s)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Lk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Jt(e):null;return n&&ke(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ke(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Qn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new vr("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Qn(e)||this._popupRedirectResolver;ke(n,this,"argument-error"),this.redirectPersistenceManager=await ui.create(this,[Qn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return ke(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ke(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=s_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function jr(t){return Jt(t)}class Ih{constructor(e){this.auth=e,this.observer=null,this.addObserver=wy(n=>this.observer=n)}get next(){return ke(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Zk(t,e,n){const s=jr(t);ke(s._canInitEmulator,s,"emulator-config-failed"),ke(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),r=i_(e),{host:o,port:a}=eE(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||tE()}function i_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function eE(t){const e=i_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:Ch(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:Ch(o)}}}function Ch(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function tE(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Wn("not implemented")}_getIdTokenResponse(e){return Wn("not implemented")}_linkToIdToken(e,n){return Wn("not implemented")}_getReauthenticationResolver(e){return Wn("not implemented")}}async function nE(t,e){return Vr(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sE(t,e){return Br(t,"POST","/v1/accounts:signInWithPassword",Fr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iE(t,e){return Br(t,"POST","/v1/accounts:signInWithEmailLink",Fr(t,e))}async function rE(t,e){return Br(t,"POST","/v1/accounts:signInWithEmailLink",Fr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr extends eu{constructor(e,n,s,i=null){super("password",s),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new fr(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new fr(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return sE(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return iE(e,{email:this._email,oobCode:this._password});default:In(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return nE(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return rE(e,{idToken:n,email:this._email,oobCode:this._password});default:In(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hi(t,e){return Br(t,"POST","/v1/accounts:signInWithIdp",Fr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oE="http://localhost";class Ws extends eu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ws(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):In("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=Yc(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new Ws(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return hi(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,hi(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,hi(e,n)}buildRequest(){const e={requestUri:oE,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=yr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aE(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function lE(t){const e=$i(Ui(t)).link,n=e?$i(Ui(e)).deep_link_id:null,s=$i(Ui(t)).deep_link_id;return(s?$i(Ui(s)).link:null)||s||n||e||t}class tu{constructor(e){var n,s,i,r,o,a;const l=$i(Ui(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,h=(s=l.oobCode)!==null&&s!==void 0?s:null,f=aE((i=l.mode)!==null&&i!==void 0?i:null);ke(c&&h&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=h,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=lE(e);try{return new tu(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(){this.providerId=Di.PROVIDER_ID}static credential(e,n){return fr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=tu.parseLink(n);return ke(s,"argument-error"),fr._fromEmailAndCode(e,s.code,s.tenantId)}}Di.PROVIDER_ID="password";Di.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Di.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class qr extends r_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us extends qr{constructor(){super("facebook.com")}static credential(e){return Ws._fromParams({providerId:us.PROVIDER_ID,signInMethod:us.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return us.credentialFromTaggedObject(e)}static credentialFromError(e){return us.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return us.credential(e.oauthAccessToken)}catch{return null}}}us.FACEBOOK_SIGN_IN_METHOD="facebook.com";us.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs extends qr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ws._fromParams({providerId:hs.PROVIDER_ID,signInMethod:hs.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return hs.credentialFromTaggedObject(e)}static credentialFromError(e){return hs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return hs.credential(n,s)}catch{return null}}}hs.GOOGLE_SIGN_IN_METHOD="google.com";hs.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs extends qr{constructor(){super("github.com")}static credential(e){return Ws._fromParams({providerId:fs.PROVIDER_ID,signInMethod:fs.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fs.credentialFromTaggedObject(e)}static credentialFromError(e){return fs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fs.credential(e.oauthAccessToken)}catch{return null}}}fs.GITHUB_SIGN_IN_METHOD="github.com";fs.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds extends qr{constructor(){super("twitter.com")}static credential(e,n){return Ws._fromParams({providerId:ds.PROVIDER_ID,signInMethod:ds.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ds.credentialFromTaggedObject(e)}static credentialFromError(e){return ds.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return ds.credential(n,s)}catch{return null}}}ds.TWITTER_SIGN_IN_METHOD="twitter.com";ds.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cE(t,e){return Br(t,"POST","/v1/accounts:signUp",Fr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await Fs._fromIdTokenResponse(e,s,i),o=Sh(s);return new Qs({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=Sh(s);return new Qs({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function Sh(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo extends rs{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Mo.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new Mo(e,n,s,i)}}function o_(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Mo._fromErrorAndOperation(t,r,e,s):r})}async function uE(t,e,n=!1){const s=await ur(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Qs._forOperation(t,"link",s)}/**
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
 */async function hE(t,e,n=!1){var s;const{auth:i}=t,r="reauthenticate";try{const o=await ur(t,o_(i,r,e,t),n);ke(o.idToken,i,"internal-error");const a=Jc(o.idToken);ke(a,i,"internal-error");const{sub:l}=a;return ke(t.uid===l,i,"user-mismatch"),Qs._forOperation(t,r,o)}catch(o){throw((s=o)===null||s===void 0?void 0:s.code)==="auth/user-not-found"&&In(i,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function a_(t,e,n=!1){const s="signIn",i=await o_(t,s,e),r=await Qs._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}async function fE(t,e){return a_(jr(t),e)}async function dE(t,e,n){const s=jr(t),i=await cE(s,{returnSecureToken:!0,email:e,password:n}),r=await Qs._fromIdTokenResponse(s,"signIn",i);return await s._updateCurrentUser(r.user),r}function pE(t,e,n){return fE(Jt(t),Di.credential(e,n))}function mE(t,e,n,s){return Jt(t).onIdTokenChanged(e,n,s)}function gE(t,e,n){return Jt(t).beforeAuthStateChanged(e,n)}const $o="__sak";/**
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
 */class l_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem($o,"1"),this.storage.removeItem($o),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _E(){const t=Xt();return Zc(t)||ka(t)}const vE=1e3,yE=10;class c_ extends l_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=_E()&&xk(),this.fallbackToPolling=n_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);Yk()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,yE):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},vE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}c_.type="LOCAL";const bE=c_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_ extends l_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}u_.type="SESSION";const h_=u_;/**
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
 */function wE(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ea{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new Ea(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await wE(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ea.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nu(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class kE{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=nu("",20);i.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(f){const d=f;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(h),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(h),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $n(){return window}function EE(t){$n().location.href=t}/**
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
 */function f_(){return typeof $n().WorkerGlobalScope<"u"&&typeof $n().importScripts=="function"}async function TE(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function IE(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function CE(){return f_()?self:null}/**
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
 */const d_="firebaseLocalStorageDb",SE=1,Uo="firebaseLocalStorage",p_="fbase_key";class Hr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ta(t,e){return t.transaction([Uo],e?"readwrite":"readonly").objectStore(Uo)}function AE(){const t=indexedDB.deleteDatabase(d_);return new Hr(t).toPromise()}function Ml(){const t=indexedDB.open(d_,SE);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Uo,{keyPath:p_})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Uo)?e(s):(s.close(),await AE(),e(await Ml()))})})}async function Ah(t,e,n){const s=Ta(t,!0).put({[p_]:e,value:n});return new Hr(s).toPromise()}async function DE(t,e){const n=Ta(t,!1).get(e),s=await new Hr(n).toPromise();return s===void 0?null:s.value}function Dh(t,e){const n=Ta(t,!0).delete(e);return new Hr(n).toPromise()}const RE=800,PE=3;class m_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ml(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>PE)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return f_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ea._getInstance(CE()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await TE(),!this.activeServiceWorker)return;this.sender=new kE(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);!s||((e=s[0])===null||e===void 0?void 0:e.fulfilled)&&((n=s[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||IE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ml();return await Ah(e,$o,"1"),await Dh(e,$o),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Ah(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>DE(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Dh(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=Ta(i,!1).getAll();return new Hr(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),RE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}m_.type="LOCAL";const NE=m_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OE(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function LE(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=Mn("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",OE().appendChild(s)})}function ME(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Ur(3e4,6e4);/**
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
 */function $E(t,e){return e?Qn(e):(ke(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class su extends eu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return hi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return hi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return hi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function UE(t){return a_(t.auth,new su(t),t.bypassAuthState)}function FE(t){const{auth:e,user:n}=t;return ke(n,e,"internal-error"),hE(n,new su(t),t.bypassAuthState)}async function VE(t){const{auth:e,user:n}=t;return ke(n,e,"internal-error"),uE(n,new su(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return UE;case"linkViaPopup":case"linkViaRedirect":return VE;case"reauthViaPopup":case"reauthViaRedirect":return FE;default:In(this.auth,"internal-error")}}resolve(e){is(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){is(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BE=new Ur(2e3,1e4);class oi extends g_{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,oi.currentPopupAction&&oi.currentPopupAction.cancel(),oi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ke(e,this.auth,"internal-error"),e}async onExecution(){is(this.filter.length===1,"Popup operations only handle one event");const e=nu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Mn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Mn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,oi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Mn(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,BE.get())};e()}}oi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jE="pendingRedirect",lo=new Map;class qE extends g_{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=lo.get(this.auth._key());if(!e){try{const s=await HE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}lo.set(this.auth._key(),e)}return this.bypassAuthState||lo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function HE(t,e){const n=GE(e),s=zE(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function KE(t,e){lo.set(t._key(),e)}function zE(t){return Qn(t._redirectPersistence)}function GE(t){return ao(jE,t.config.apiKey,t.name)}async function WE(t,e,n=!1){const s=jr(t),i=$E(s,e),o=await new qE(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QE=10*60*1e3;class YE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!xE(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!__(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Mn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=QE&&this.cachedEventUids.clear(),this.cachedEventUids.has(Rh(e))}saveEventToCache(e){this.cachedEventUids.add(Rh(e)),this.lastProcessedEventTime=Date.now()}}function Rh(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function __({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function xE(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return __(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XE(t,e={}){return Vr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ZE=/^https?/;async function eT(t){if(t.config.emulator)return;const{authorizedDomains:e}=await XE(t);for(const n of e)try{if(tT(n))return}catch{}In(t,"unauthorized-domain")}function tT(t){const e=Ll(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!ZE.test(n))return!1;if(JE.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const nT=new Ur(3e4,6e4);function Ph(){const t=$n().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function sT(t){return new Promise((e,n)=>{var s,i,r;function o(){Ph(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ph(),n(Mn(t,"network-request-failed"))},timeout:nT.get()})}if(!((i=(s=$n().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=$n().gapi)===null||r===void 0)&&r.load)o();else{const a=ME("iframefcb");return $n()[a]=()=>{gapi.load?o():n(Mn(t,"network-request-failed"))},LE(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw co=null,e})}let co=null;function iT(t){return co=co||sT(t),co}/**
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
 */const rT=new Ur(5e3,15e3),oT="__/auth/iframe",aT="emulator/auth/iframe",lT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},cT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function uT(t){const e=t.config;ke(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Xc(e,aT):`https://${t.config.authDomain}/${oT}`,s={apiKey:e.apiKey,appName:t.name,v:br},i=cT.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${yr(s).slice(1)}`}async function hT(t){const e=await iT(t),n=$n().gapi;return ke(n,t,"internal-error"),e.open({where:document.body,url:uT(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:lT,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=Mn(t,"network-request-failed"),a=$n().setTimeout(()=>{r(o)},rT.get());function l(){$n().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const fT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},dT=500,pT=600,mT="_blank",gT="http://localhost";class Nh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function _T(t,e,n,s=dT,i=pT){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},fT),{width:s.toString(),height:i.toString(),top:r,left:o}),c=Xt().toLowerCase();n&&(a=Xg(c)?mT:n),xg(c)&&(e=e||gT,l.scrollbars="yes");const h=Object.entries(l).reduce((d,[m,_])=>`${d}${m}=${_},`,"");if(Qk(c)&&a!=="_self")return vT(e||"",a),new Nh(null);const f=window.open(e||"",a,h);ke(f,t,"popup-blocked");try{f.focus()}catch{}return new Nh(f)}function vT(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const yT="__/auth/handler",bT="emulator/auth/handler";function Oh(t,e,n,s,i,r){ke(t.config.authDomain,t,"auth-domain-config-required"),ke(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:br,eventId:i};if(e instanceof r_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",by(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(r||{}))o[l]=c}if(e instanceof qr){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${wT(t)}?${yr(a).slice(1)}`}function wT({config:t}){return t.emulator?Xc(t,bT):`https://${t.authDomain}/${yT}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ya="webStorageSupport";class kT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=h_,this._completeRedirectFn=WE,this._overrideRedirectResult=KE}async _openPopup(e,n,s,i){var r;is((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=Oh(e,n,s,Ll(),i);return _T(e,o,nu())}async _openRedirect(e,n,s,i){return await this._originValidation(e),EE(Oh(e,n,s,Ll(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(is(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await hT(e),s=new YE(e);return n.register("authEvent",i=>(ke(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ya,{type:Ya},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[Ya];o!==void 0&&n(!!o),In(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=eT(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return n_()||Zc()||ka()}}const ET=kT;var Lh="@firebase/auth",Mh="0.20.10";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{var i;e(((i=s)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ke(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IT(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function CT(t){pi(new qs("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:r,authDomain:o}=s.options;return((a,l)=>{ke(r&&!r.includes(":"),"invalid-api-key",{appName:a.name}),ke(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const c={apiKey:r,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:s_(t)},h=new Jk(a,l,c);return Pk(h,n),h})(s,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),pi(new qs("auth-internal",e=>{const n=jr(e.getProvider("auth").getImmediate());return(s=>new TT(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),_s(Lh,Mh,IT(t)),_s(Lh,Mh,"esm2017")}/**
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
 */const ST=5*60,AT=Tp("authIdTokenMaxAge")||ST;let $h=null;const DT=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>AT)return;const i=n==null?void 0:n.token;$h!==i&&($h=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function RT(t=Ap()){const e=Jl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Rk(t,{popupRedirectResolver:ET,persistence:[NE,bE,h_]}),s=Tp("authTokenSyncURL");if(s){const r=DT(s);gE(n,r,()=>r(n.currentUser)),mE(n,o=>r(o))}const i=Ep("auth");return i&&Zk(n,`http://${i}`),n}CT("Browser");let dr=[],Fo=[],xn=[],v_=[];const PT={apiKey:"AIzaSyDGi3ndUC1b4SFNstliSSVryu7_ymXEkZc",authDomain:"match-home-7d1f9.firebaseapp.com",databaseURL:"https://match-home-7d1f9-default-rtdb.firebaseio.com",projectId:"match-home-7d1f9",storageBucket:"match-home-7d1f9.appspot.com",messagingSenderId:"747751099607",appId:"1:747751099607:web:29d1e5beda87c847dfb492"},y_=Sp(PT),Tt=fk(y_),b_=RT(y_),NT=t=>Tk(En(Tt,"todos"),t),OT=En(Tt,"binnacles"),LT=En(Tt,"contacts"),MT=En(Tt,"properties"),$T=En(Tt,"todos");ya(OT).then(t=>Fo=t.docs.map(e=>({...e.data(),id:e.id})));ya(LT).then(t=>dr=t.docs.map(e=>({...e.data(),id:e.id})));ya(MT).then(t=>xn=t.docs.map(e=>({...e.data(),id:e.id})));ya($T).then(t=>v_=t.docs.map(e=>({...e.data(),id:e.id})));const w_="/to-deploy-mh/assets/schedule.20f01954.png";function k_(t){const e=t-1;return e*e*e+1}function ki(t){return t===0||t===1?t:t<.5?.5*Math.pow(2,20*t-10):-.5*Math.pow(2,10-t*20)+1}function Vo(t,{delay:e=0,duration:n=400,easing:s=jd}={}){const i=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:s,css:r=>`opacity: ${r*i}`}}function Bo(t,{delay:e=0,duration:n=400,easing:s=k_,x:i=0,y:r=0,opacity:o=0}={}){const a=getComputedStyle(t),l=+a.opacity,c=a.transform==="none"?"":a.transform,h=l*(1-o);return{delay:e,duration:n,easing:s,css:(f,d)=>`
			transform: ${c} translate(${(1-f)*i}px, ${(1-f)*r}px);
			opacity: ${l-h*d}`}}function Ei(t,{delay:e=0,duration:n=400,easing:s=k_,start:i=0,opacity:r=0}={}){const o=getComputedStyle(t),a=+o.opacity,l=o.transform==="none"?"":o.transform,c=1-i,h=a*(1-r);return{delay:e,duration:n,easing:s,css:(f,d)=>`
			transform: ${l} scale(${1-c*d});
			opacity: ${a-h*d}
		`}}const it=Lt(""),$l=Lt([]),E_=Lt([]),Ul=Lt([]),Ze=Lt({typeContact:"",name:"",lastname:"",lastContact:"",telephon:"",email:"",selecMC:"",propCont:"",comContact:"",rangeProp:"",contMode:"",budget:"",numBeds:"",numBaths:"",halfBathroom:"",numParks:"",modePay:"",selecTP:"",contactType:"",contactStage:"",createdAt:"",locaProperty:[],tagsProperty:[],sendedProperties:[]}),Je=Lt({typeProperty:"",typeSaller:"",claveEB:"",claveMH:"",createdAt:"",nameProperty:"",price:"",beds:"",bathroom:"",halfBathroom:"",park:"",areaBuilding:"",areaTotal:"",description:"",urlImage:"",urlProp:"",urlSinergy:"",colonia:"",selecTP:"",selecTO:"",typeOperation:"",tagsProperty:[],locaProperty:[],binnacle:[]}),bn=Lt({task:"",isComplete:"",createdAt:"",endTask:"",timeTask:"",notes:"",user:"",id:""}),UT=["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","S\xE1bado"],FT=["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"];function Kt(t){typeof t=="string"?t=new Date(t):t=new Date(t);let e=t.getDate();e<10&&(e="0"+e);let n=FT[t.getMonth()],s=t.getFullYear();return`${e}/${n}/${s}`}function Uh(t){t=new Date(t);let e=t.getMinutes();e.length<2&&(e="0"+e);let n=t.getHours();return n>12&&(n=n-12),n<10&&(n="0"+n),t.getDate(),`${n}:${e}`}function Fh(t){return t=new Date(+t),`${UT[t.getDay()]}-`}function VT(t){t.sort((e,n)=>new Date(e.endTask)<new Date(n.endTask)?1:new Date(e.endTask)>new Date(n.endTask)?-1:0)}function Vh(t,e,n){const s=t.slice();return s[20]=e[n],s}function Bh(t,e,n){const s=t.slice();return s[20]=e[n],s}function BT(t){let e;return{c(){e=S("Editar")},m(n,s){w(n,e,s)},d(n){n&&b(e)}}}function jT(t){let e;return{c(){e=S("Guardar")},m(n,s){w(n,e,s)},d(n){n&&b(e)}}}function jh(t){let e,n,s;return{c(){e=p("button"),e.textContent="Borrar"},m(i,r){w(i,e,r),n||(s=j(e,"click",t[5]),n=!0)},p:ue,d(i){i&&b(e),n=!1,s()}}}function qh(t){let e,n,s,i,r,o,a,l,c,h,f,d=t[1],m=[];for(let T=0;T<d.length;T+=1)m[T]=Gh(Bh(t,d,T));let _=null;d.length||(_=Hh());let v=t[1],y=[];for(let T=0;T<v.length;T+=1)y[T]=xh(Vh(t,v,T));let E=null;return v.length||(E=Wh()),{c(){e=p("h3"),e.textContent="Tareas",n=k(),s=p("ol");for(let T=0;T<m.length;T+=1)m[T].c();_&&_.c(),i=k(),r=p("p"),r.textContent=`${Xh}`,o=k(),a=p("h3"),a.textContent="Agenda",l=k(),c=p("ol");for(let T=0;T<y.length;T+=1)y[T].c();E&&E.c(),h=k(),f=p("p"),f.textContent=`${Xh}`,g(r,"class","error"),g(f,"class","error")},m(T,P){w(T,e,P),w(T,n,P),w(T,s,P);for(let D=0;D<m.length;D+=1)m[D].m(s,null);_&&_.m(s,null),u(s,i),u(s,r),w(T,o,P),w(T,a,P),w(T,l,P),w(T,c,P);for(let D=0;D<y.length;D+=1)y[D].m(c,null);E&&E.m(c,null),u(c,h),u(c,f)},p(T,P){if(P&18){d=T[1];let D;for(D=0;D<d.length;D+=1){const F=Bh(T,d,D);m[D]?m[D].p(F,P):(m[D]=Gh(F),m[D].c(),m[D].m(s,i))}for(;D<m.length;D+=1)m[D].d(1);m.length=d.length,!d.length&&_?_.p(T,P):d.length?_&&(_.d(1),_=null):(_=Hh(),_.c(),_.m(s,i))}if(P&50){v=T[1];let D;for(D=0;D<v.length;D+=1){const F=Vh(T,v,D);y[D]?y[D].p(F,P):(y[D]=xh(F),y[D].c(),y[D].m(c,h))}for(;D<y.length;D+=1)y[D].d(1);y.length=v.length,!v.length&&E?E.p(T,P):v.length?E&&(E.d(1),E=null):(E=Wh(),E.c(),E.m(c,h))}},d(T){T&&b(e),T&&b(n),T&&b(s),qe(m,T),_&&_.d(),T&&b(o),T&&b(a),T&&b(l),T&&b(c),qe(y,T),E&&E.d()}}}function Hh(t){let e;return{c(){e=p("p"),e.textContent="No Hay Tareas Pendientes"},m(n,s){w(n,e,s)},p:ue,d(n){n&&b(e)}}}function Kh(t){let e,n,s,i,r,o,a,l,c=Kt(t[20].endTask)+"",h,f,d=t[20].task+"",m,_,v,y;function E(){return t[12](t[20])}function T(){return t[13](t[20])}let P=t[20].notes&&zh(t);return{c(){e=p("div"),n=p("li"),s=p("span"),i=p("button"),i.textContent="\u2714",r=k(),o=p("button"),o.textContent="\u2714\u2716",a=k(),l=p("spam"),h=S(c),f=S(` -*-\r
                                 `),m=S(d),_=S(` -*-\r
                                 `),P&&P.c(),g(n,"class","schedule svelte-1e3ab80"),bs(n,"complete",t[20].isComplete)},m(D,F){w(D,e,F),u(e,n),u(n,s),u(s,i),u(s,r),u(s,o),u(n,a),u(n,l),u(l,h),u(l,f),u(l,m),u(l,_),P&&P.m(l,null),v||(y=[j(i,"click",E),j(o,"click",T)],v=!0)},p(D,F){t=D,F&2&&c!==(c=Kt(t[20].endTask)+"")&&ie(h,c),F&2&&d!==(d=t[20].task+"")&&ie(m,d),t[20].notes?P?P.p(t,F):(P=zh(t),P.c(),P.m(l,null)):P&&(P.d(1),P=null),F&2&&bs(n,"complete",t[20].isComplete)},d(D){D&&b(e),P&&P.d(),v=!1,Ye(y)}}}function zh(t){let e=t[20].notes+"",n;return{c(){n=S(e)},m(s,i){w(s,n,i)},p(s,i){i&2&&e!==(e=s[20].notes+"")&&ie(n,e)},d(s){s&&b(n)}}}function Gh(t){let e,n=!t[20].timeTask&&Kh(t);return{c(){n&&n.c(),e=sn()},m(s,i){n&&n.m(s,i),w(s,e,i)},p(s,i){s[20].timeTask?n&&(n.d(1),n=null):n?n.p(s,i):(n=Kh(s),n.c(),n.m(e.parentNode,e))},d(s){n&&n.d(s),s&&b(e)}}}function Wh(t){let e;return{c(){e=p("p"),e.textContent="No Hay Tareas Pendientes"},m(n,s){w(n,e,s)},p:ue,d(n){n&&b(e)}}}function Qh(t){let e,n,s,i,r,o,a,l,c,h,f=t[20].timeTask+"",d,m,_=Kt(t[20].endTask)+"",v,y,E=t[20].task+"",T,P,D,F;function K(){return t[14](t[20])}function N(){return t[15](t[20])}function Y(){return t[16](t[20])}let M=t[20].notes&&Yh(t);return{c(){e=p("div"),n=p("li"),s=p("span"),i=p("button"),i.textContent="\u2714",r=k(),o=p("button"),o.textContent="\u2716",a=k(),l=p("button"),l.textContent="\u2714\u2716",c=k(),h=p("spam"),d=S(f),m=S(` -*-\r
                                 `),v=S(_),y=S(` -*-\r
                                 `),T=S(E),P=S(` -*-\r
                                 `),M&&M.c(),g(n,"class","schedule svelte-1e3ab80"),bs(n,"complete",t[20].isComplete)},m($,U){w($,e,U),u(e,n),u(n,s),u(s,i),u(s,r),u(s,o),u(s,a),u(s,l),u(n,c),u(n,h),u(h,d),u(h,m),u(h,v),u(h,y),u(h,T),u(h,P),M&&M.m(h,null),D||(F=[j(i,"click",K),j(o,"click",N),j(l,"click",Y),j(e,"dblclick",t[17])],D=!0)},p($,U){t=$,U&2&&f!==(f=t[20].timeTask+"")&&ie(d,f),U&2&&_!==(_=Kt(t[20].endTask)+"")&&ie(v,_),U&2&&E!==(E=t[20].task+"")&&ie(T,E),t[20].notes?M?M.p(t,U):(M=Yh(t),M.c(),M.m(h,null)):M&&(M.d(1),M=null),U&2&&bs(n,"complete",t[20].isComplete)},d($){$&&b(e),M&&M.d(),D=!1,Ye(F)}}}function Yh(t){let e=t[20].notes+"",n;return{c(){n=S(e)},m(s,i){w(s,n,i)},p(s,i){i&2&&e!==(e=s[20].notes+"")&&ie(n,e)},d(s){s&&b(n)}}}function xh(t){let e,n=t[20].timeTask&&Qh(t);return{c(){n&&n.c(),e=sn()},m(s,i){n&&n.m(s,i),w(s,e,i)},p(s,i){s[20].timeTask?n?n.p(s,i):(n=Qh(s),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(s){n&&n.d(s),s&&b(e)}}}function qT(t){let e,n,s,i,r,o,a,l,c,h,f,d,m,_,v,y,E,T,P,D,F,K,N,Y,M,$,U,H,Q,Z,G,z,X;function W(J,oe){return J[0]?BT:jT}let C=W(t),O=C(t),L=t[0]&&jh(t),A=!t[0]&&qh(t);return{c(){e=p("div"),n=p("h1"),n.textContent="Agenda",s=k(),i=p("img"),o=k(),a=p("div"),l=p("div"),h=k(),f=p("div"),d=p("div"),m=p("input"),_=k(),v=p("div"),y=p("input"),E=k(),T=p("input"),P=k(),D=p("div"),F=p("textarea"),K=k(),N=p("div"),Y=p("button"),O.c(),M=k(),$=p("button"),$.textContent="Cancelar",U=k(),L&&L.c(),Q=k(),Z=p("div"),A&&A.c(),ct(i.src,r=w_)||g(i,"src",r),g(i,"alt","schedule"),g(i,"class","imgTitle svelte-1e3ab80"),g(l,"class","background"),g(m,"type","text"),g(m,"class","inputTask"),g(m,"cols","56"),g(m,"rows","1"),g(m,"placeholder","Agrega una Tarea o Cita"),g(y,"type","time"),g(y,"class","inputDate"),g(T,"type","date"),g(T,"class","inputDate"),g(v,"class","contDate"),g(F,"name","notes"),g(F,"id",""),g(F,"cols","56"),g(F,"rows","5"),g(F,"placeholder","descripci\xF3n"),g(f,"class","pop-up"),g(a,"class","container"),g(Z,"class","container"),g(e,"class","container")},m(J,oe){w(J,e,oe),u(e,n),u(e,s),u(e,i),u(e,o),u(e,a),u(a,l),u(a,h),u(a,f),u(f,d),u(d,m),de(m,t[2].task),u(f,_),u(f,v),u(v,y),de(y,t[2].timeTask),u(v,E),u(v,T),de(T,t[2].endTask),u(f,P),u(f,D),u(D,F),de(F,t[2].notes),u(f,K),u(f,N),u(N,Y),O.m(Y,null),u(N,M),u(N,$),u(N,U),L&&L.m(N,null),u(e,Q),u(e,Z),A&&A.m(Z,null),G=!0,z||(X=[j(l,"keydown",t[7]),j(m,"input",t[8]),j(m,"input",t[6]),j(y,"input",t[9]),j(T,"input",t[10]),j(F,"input",t[11]),j(Y,"click",t[3]),j($,"click",t[7])],z=!0)},p(J,[oe]){oe&4&&m.value!==J[2].task&&de(m,J[2].task),oe&4&&de(y,J[2].timeTask),oe&4&&de(T,J[2].endTask),oe&4&&de(F,J[2].notes),C!==(C=W(J))&&(O.d(1),O=C(J),O&&(O.c(),O.m(Y,null))),J[0]?L?L.p(J,oe):(L=jh(J),L.c(),L.m(N,null)):L&&(L.d(1),L=null),J[0]?A&&(A.d(1),A=null):A?A.p(J,oe):(A=qh(J),A.c(),A.m(Z,null))},i(J){G||(xe(()=>{c||(c=dn(l,Vo,{},!0)),c.run(1)}),xe(()=>{H||(H=dn(f,Bo,{},!0)),H.run(1)}),G=!0)},o(J){c||(c=dn(l,Vo,{},!1)),c.run(0),H||(H=dn(f,Bo,{},!1)),H.run(0),G=!1},d(J){J&&b(e),J&&c&&c.end(),O.d(),L&&L.d(),J&&H&&H.end(),A&&A.d(),z=!1,Ye(X)}}}let Xh="";function HT(t,e,n){let s,i;Ue(t,Ul,N=>n(1,s=N)),Ue(t,bn,N=>n(2,i=N));const r=Ys();let o=!1,a="addItem";Xe(Ul,s=v_,s),(async()=>NT(N=>{}))();async function l(){a==="deleItem"?confirm("Quieres borrarlo definitivmente?")==!0&&await wa(ss(Tt,"todos",i.id)):a==="editItem"?await ba(ss(Tt,"todos",i.id),i):await Us(En(Tt,"todos"),i),n(0,o=!1),Xe(bn,i={},i)}async function c(N){Xe(bn,i=N,i),a="editItem",n(0,o=!0)}async function h(){n(0,o=!0),a="deleItem",l()}function f(){i.task.length>0&&n(0,o=!0)}function d(){Xe(bn,i=[],i),r("/contactos")}VT(s);function m(){i.task=this.value,bn.set(i)}function _(){i.timeTask=this.value,bn.set(i)}function v(){i.endTask=this.value,bn.set(i)}function y(){i.notes=this.value,bn.set(i)}return[o,s,i,l,c,h,f,d,m,_,v,y,N=>(N.id,void 0),N=>c(N),N=>(N.id,void 0),N=>h(N.id),N=>c(N),()=>c]}class KT extends Qe{constructor(e){super(),We(this,e,HT,qT,He,{})}}function zT(t){let e;return{c(){e=p("h1"),e.textContent="Estas en Sinergias"},m(n,s){w(n,e,s)},p:ue,i:ue,o:ue,d(n){n&&b(e)}}}class GT extends Qe{constructor(e){super(),We(this,e,null,zT,He,{})}}function WT(t){let e;return{c(){e=S("Inicia sesi\xF3n")},m(n,s){w(n,e,s)},d(n){n&&b(e)}}}function QT(t){let e,n,s,i,r,o,a,l,c,h,f,d,m,_,v,y,E,T,P,D,F,K,N,Y,M,$,U,H,Q;return $=new hn({props:{to:"/login",$$slots:{default:[WT]},$$scope:{ctx:t}}}),{c(){e=p("div"),n=p("br"),s=p("br"),i=p("br"),r=k(),o=p("div"),a=p("h1"),a.textContent="Registra tu cuenta",l=k(),c=p("div"),h=p("input"),f=k(),d=p("div"),m=p("input"),_=k(),v=p("br"),y=k(),E=p("div"),T=p("button"),T.textContent="Registrarse",P=k(),D=p("p"),D.textContent="O tambi\xE9n",F=k(),K=p("br"),N=k(),Y=p("p"),M=S("\xBFYa tienes cuenta? "),he($.$$.fragment),g(a,"class","text-center text-login svelte-ftg4em"),g(h,"name","email"),g(h,"type","email"),g(h,"class","input-form svelte-ftg4em"),g(h,"placeholder","Correo"),h.required=!0,g(c,"class","center svelte-ftg4em"),g(m,"name","password"),g(m,"type","password"),g(m,"class","input-form svelte-ftg4em"),g(m,"placeholder","Contrase\xF1a"),g(d,"class","center svelte-ftg4em"),g(T,"class","button-signup fondo-color-signup svelte-ftg4em"),g(E,"class","center svelte-ftg4em"),g(D,"class","text-center svelte-ftg4em"),g(Y,"class","text-center svelte-ftg4em"),g(o,"class","form-signin svelte-ftg4em")},m(Z,G){w(Z,e,G),u(e,n),u(e,s),u(e,i),u(e,r),u(e,o),u(o,a),u(o,l),u(o,c),u(c,h),u(o,f),u(o,d),u(d,m),u(o,_),u(o,v),u(o,y),u(o,E),u(E,T),u(o,P),u(o,D),u(o,F),u(o,K),u(o,N),u(o,Y),u(Y,M),le($,Y,null),U=!0,H||(Q=[j(h,"input",t[2]),j(m,"input",t[3]),j(T,"click",t[1])],H=!0)},p(Z,[G]){const z={};G&64&&(z.$$scope={dirty:G,ctx:Z}),$.$set(z)},i(Z){U||(q($.$$.fragment,Z),U=!0)},o(Z){x($.$$.fragment,Z),U=!1},d(Z){Z&&b(e),ce($),H=!1,Ye(Q)}}}function YT(t){const e=Ys();let n={email:"",password:""};const s=a=>{n={...n,[a.target.name]:a.target.value}};return[s,async()=>{try{await dE(b_,n.email,n.password),e("/")}catch(a){console.log(a)}},a=>s(a),a=>s(a)]}class xT extends Qe{constructor(e){super(),We(this,e,YT,QT,He,{})}}function Jh(t,e,n){const s=t.slice();return s[1]=e[n],s}function Zh(t,e,n){const s=t.slice();return s[1]=e[n],s}function ef(t){let e,n,s=Kt(t[1].endTask)+"",i,r,o=t[1].task+"",a,l,c=t[1].notes&&tf(t);return{c(){e=p("ul"),n=p("li"),i=S(s),r=S(` - -\r
                    `),a=S(o),l=S(` - -\r
                    `),c&&c.c(),bs(n,"complete",t[1].isComplete)},m(h,f){w(h,e,f),u(e,n),u(n,i),u(n,r),u(n,a),u(n,l),c&&c.m(n,null)},p(h,f){f&1&&s!==(s=Kt(h[1].endTask)+"")&&ie(i,s),f&1&&o!==(o=h[1].task+"")&&ie(a,o),h[1].notes?c?c.p(h,f):(c=tf(h),c.c(),c.m(n,null)):c&&(c.d(1),c=null),f&1&&bs(n,"complete",h[1].isComplete)},d(h){h&&b(e),c&&c.d()}}}function tf(t){let e=t[1].notes+"",n;return{c(){n=S(e)},m(s,i){w(s,n,i)},p(s,i){i&1&&e!==(e=s[1].notes+"")&&ie(n,e)},d(s){s&&b(n)}}}function nf(t){let e,n=!t[1].timeTask&&ef(t);return{c(){n&&n.c(),e=sn()},m(s,i){n&&n.m(s,i),w(s,e,i)},p(s,i){s[1].timeTask?n&&(n.d(1),n=null):n?n.p(s,i):(n=ef(s),n.c(),n.m(e.parentNode,e))},d(s){n&&n.d(s),s&&b(e)}}}function sf(t){let e,n,s,i=Fh(t[1].endTask)+"",r,o,a=Uh(t[1].endTask)+"",l,c,h=Kt(t[1].endTask)+"",f,d,m=t[1].task+"",_,v,y=t[1].notes&&rf(t);return{c(){e=p("ul"),n=p("li"),s=p("spam"),r=S(i),o=k(),l=S(a),c=S(` - -\r
                      `),f=S(h),d=k(),_=S(m),v=S(` - -\r
                      `),y&&y.c(),g(s,"type","number"),bs(n,"complete",t[1].isComplete)},m(E,T){w(E,e,T),u(e,n),u(n,s),u(s,r),u(s,o),u(s,l),u(s,c),u(s,f),u(s,d),u(s,_),u(s,v),y&&y.m(s,null)},p(E,T){T&1&&i!==(i=Fh(E[1].endTask)+"")&&ie(r,i),T&1&&a!==(a=Uh(E[1].endTask)+"")&&ie(l,a),T&1&&h!==(h=Kt(E[1].endTask)+"")&&ie(f,h),T&1&&m!==(m=E[1].task+"")&&ie(_,m),E[1].notes?y?y.p(E,T):(y=rf(E),y.c(),y.m(s,null)):y&&(y.d(1),y=null),T&1&&bs(n,"complete",E[1].isComplete)},d(E){E&&b(e),y&&y.d()}}}function rf(t){let e=t[1].notes+"",n;return{c(){n=S(e)},m(s,i){w(s,n,i)},p(s,i){i&1&&e!==(e=s[1].notes+"")&&ie(n,e)},d(s){s&&b(n)}}}function of(t){let e,n=t[1].timeTask&&sf(t);return{c(){n&&n.c(),e=k()},m(s,i){n&&n.m(s,i),w(s,e,i)},p(s,i){s[1].timeTask?n?n.p(s,i):(n=sf(s),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(s){n&&n.d(s),s&&b(e)}}}function XT(t){let e,n,s,i,r,o,a,l,c,h,f=t[0],d=[];for(let v=0;v<f.length;v+=1)d[v]=nf(Zh(t,f,v));let m=t[0],_=[];for(let v=0;v<m.length;v+=1)_[v]=of(Jh(t,m,v));return{c(){e=p("div"),n=p("div"),s=p("div"),i=p("h1"),i.textContent="Agenda",r=k(),o=p("h3"),o.textContent="Tareas",a=k();for(let v=0;v<d.length;v+=1)d[v].c();l=k(),c=p("h3"),c.textContent="Citas",h=k();for(let v=0;v<_.length;v+=1)_[v].c();g(i,"class","title svelte-13rvwi6"),g(o,"class","subtitle svelte-13rvwi6"),g(c,"class","subtitle svelte-13rvwi6"),g(s,"class","schedule"),g(n,"class","container"),g(e,"class","show-home")},m(v,y){w(v,e,y),u(e,n),u(n,s),u(s,i),u(s,r),u(s,o),u(s,a);for(let E=0;E<d.length;E+=1)d[E].m(s,null);u(s,l),u(s,c),u(s,h);for(let E=0;E<_.length;E+=1)_[E].m(s,null)},p(v,[y]){if(y&1){f=v[0];let E;for(E=0;E<f.length;E+=1){const T=Zh(v,f,E);d[E]?d[E].p(T,y):(d[E]=nf(T),d[E].c(),d[E].m(s,l))}for(;E<d.length;E+=1)d[E].d(1);d.length=f.length}if(y&1){m=v[0];let E;for(E=0;E<m.length;E+=1){const T=Jh(v,m,E);_[E]?_[E].p(T,y):(_[E]=of(T),_[E].c(),_[E].m(s,null))}for(;E<_.length;E+=1)_[E].d(1);_.length=m.length}},i:ue,o:ue,d(v){v&&b(e),qe(d,v),qe(_,v)}}}function JT(t,e,n){let s;return Ue(t,Ul,i=>n(0,s=i)),[s]}class ZT extends Qe{constructor(e){super(),We(this,e,JT,XT,He,{})}}function af(t,e,n){const s=t.slice();return s[0]=e[n],s[2]=n,s}function eI(t){let e,n=Kt(t[0].date)+"",s,i,r=t[0].comment+"",o;return{c(){e=p("div"),s=S(n),i=k(),o=S(r),g(e,"class","date-binnacle")},m(a,l){w(a,e,l),u(e,s),u(e,i),u(e,o)},p:ue,d(a){a&&b(e)}}}function lf(t){let e,n,s=t[2]<30&&eI(t);return{c(){e=p("div"),s&&s.c(),n=k(),g(e,"class","int-binnacle")},m(i,r){w(i,e,r),s&&s.m(e,null),u(e,n)},p(i,r){i[2]<30&&s.p(i,r)},d(i){i&&b(e),s&&s.d()}}}function tI(t){let e,n,s,i,r,o,a,l=Fo,c=[];for(let h=0;h<l.length;h+=1)c[h]=lf(af(t,l,h));return{c(){e=S(`a\r
`),n=p("main"),s=p("div"),i=p("div"),r=p("div"),o=p("h1"),o.textContent="Bit\xE1cora",a=k();for(let h=0;h<c.length;h+=1)c[h].c();g(o,"class","title svelte-7lgm1k"),g(r,"class","binnacleHome"),g(i,"class","schedule"),g(s,"class","container")},m(h,f){w(h,e,f),w(h,n,f),u(n,s),u(s,i),u(i,r),u(r,o),u(r,a);for(let d=0;d<c.length;d+=1)c[d].m(r,null)},p(h,[f]){if(f&0){l=Fo;let d;for(d=0;d<l.length;d+=1){const m=af(h,l,d);c[d]?c[d].p(m,f):(c[d]=lf(m),c[d].c(),c[d].m(r,null))}for(;d<c.length;d+=1)c[d].d(1);c.length=l.length}},i:ue,o:ue,d(h){h&&b(e),h&&b(n),qe(c,h)}}}function nI(t){return function(){Fo.sort((e,n)=>e.date<n.date?1:e.date>n.date?-1:0)}(),[]}class sI extends Qe{constructor(e){super(),We(this,e,nI,tI,He,{})}}const T_="/to-deploy-mh/assets/add-user.1bd66bde.png",I_="/to-deploy-mh/assets/house.99302696.png",iI="/to-deploy-mh/assets/team.31fda88c.png",rI=Lt(!1);function oI(t){let e,n,s,i,r,o;return{c(){e=p("div"),n=p("div"),s=p("img"),r=k(),o=p("h1"),o.textContent="Contactos",ct(s.src,i=T_)||g(s,"src",i),g(s,"alt","Buzon"),g(s,"class","profile-img svelte-mxk4x8"),g(o,"class","name svelte-mxk4x8"),g(n,"class","optionCard svelte-mxk4x8"),g(e,"class","container")},m(a,l){w(a,e,l),u(e,n),u(n,s),u(n,r),u(n,o)},p:ue,d(a){a&&b(e)}}}function aI(t){let e,n,s,i,r,o;return{c(){e=p("div"),n=p("div"),s=p("img"),r=k(),o=p("h1"),o.textContent="Propiedades",ct(s.src,i=I_)||g(s,"src",i),g(s,"alt","propiedad"),g(s,"class","profile-img svelte-mxk4x8"),g(o,"class","name svelte-mxk4x8"),g(n,"class","optionCard svelte-mxk4x8"),g(e,"class","container")},m(a,l){w(a,e,l),u(e,n),u(n,s),u(n,r),u(n,o)},p:ue,d(a){a&&b(e)}}}function lI(t){let e,n,s,i,r,o;return{c(){e=p("div"),n=p("div"),s=p("img"),r=k(),o=p("h1"),o.textContent="Agenda",ct(s.src,i=w_)||g(s,"src",i),g(s,"alt","agenda"),g(s,"class","profile-img svelte-mxk4x8"),g(o,"class","name svelte-mxk4x8"),g(n,"class","optionCard svelte-mxk4x8"),g(e,"class","container")},m(a,l){w(a,e,l),u(e,n),u(n,s),u(n,r),u(n,o)},p:ue,d(a){a&&b(e)}}}function cI(t){let e,n,s,i,r,o;return{c(){e=p("div"),n=p("div"),s=p("img"),r=k(),o=p("h1"),o.textContent="Sinergias",ct(s.src,i=iI)||g(s,"src",i),g(s,"alt","sinergias"),g(s,"class","profile-img svelte-mxk4x8"),g(o,"class","name svelte-mxk4x8"),g(n,"class","optionCard svelte-mxk4x8"),g(e,"class","container")},m(a,l){w(a,e,l),u(e,n),u(n,s),u(n,r),u(n,o)},p:ue,d(a){a&&b(e)}}}function uI(t){let e,n,s,i,r,o,a,l;return e=new hn({props:{to:"/contactos",title:"contactos",$$slots:{default:[oI]},$$scope:{ctx:t}}}),s=new hn({props:{to:"/propiedades",title:"propiedades",$$slots:{default:[aI]},$$scope:{ctx:t}}}),r=new hn({props:{to:"/agenda",title:"agenda",class:"s",$$slots:{default:[lI]},$$scope:{ctx:t}}}),a=new hn({props:{to:"/sinergias",title:"sinergias",$$slots:{default:[cI]},$$scope:{ctx:t}}}),{c(){he(e.$$.fragment),n=k(),he(s.$$.fragment),i=k(),he(r.$$.fragment),o=k(),he(a.$$.fragment)},m(c,h){le(e,c,h),w(c,n,h),le(s,c,h),w(c,i,h),le(r,c,h),w(c,o,h),le(a,c,h),l=!0},p(c,h){const f={};h&1&&(f.$$scope={dirty:h,ctx:c}),e.$set(f);const d={};h&1&&(d.$$scope={dirty:h,ctx:c}),s.$set(d);const m={};h&1&&(m.$$scope={dirty:h,ctx:c}),r.$set(m);const _={};h&1&&(_.$$scope={dirty:h,ctx:c}),a.$set(_)},i(c){l||(q(e.$$.fragment,c),q(s.$$.fragment,c),q(r.$$.fragment,c),q(a.$$.fragment,c),l=!0)},o(c){x(e.$$.fragment,c),x(s.$$.fragment,c),x(r.$$.fragment,c),x(a.$$.fragment,c),l=!1},d(c){ce(e,c),c&&b(n),ce(s,c),c&&b(i),ce(r,c),c&&b(o),ce(a,c)}}}function hI(t){let e,n,s,i,r,o,a,l,c;return s=new Ql({props:{$$slots:{default:[uI]},$$scope:{ctx:t}}}),o=new ZT({props:{"(orderTodos)":!0}}),l=new sI({}),{c(){e=p("body"),n=p("div"),he(s.$$.fragment),i=k(),r=p("div"),he(o.$$.fragment),a=k(),he(l.$$.fragment),g(n,"class","wrapper-grid svelte-mxk4x8"),g(r,"class",""),g(e,"class","svelte-mxk4x8")},m(h,f){w(h,e,f),u(e,n),le(s,n,null),u(e,i),u(e,r),le(o,r,null),u(r,a),le(l,r,null),c=!0},p(h,[f]){const d={};f&1&&(d.$$scope={dirty:f,ctx:h}),s.$set(d)},i(h){c||(q(s.$$.fragment,h),q(o.$$.fragment,h),q(l.$$.fragment,h),c=!0)},o(h){x(s.$$.fragment,h),x(o.$$.fragment,h),x(l.$$.fragment,h),c=!1},d(h){h&&b(e),ce(s),ce(o),ce(l)}}}class fI extends Qe{constructor(e){super(),We(this,e,null,hI,He,{})}}function dI(t){let e,n,s,i,r,o,a,l,c,h,f=Kt(t[2])+"",d,m,_,v,y,E,T,P,D,F,K,N,Y,M,$,U,H,Q,Z;return{c(){e=p("div"),n=p("div"),s=p("div"),i=p("h5"),r=S(t[0]),o=k(),a=S(t[1]),l=k(),c=p("h5"),h=S("Alta "),d=S(f),m=k(),_=p("div"),v=p("p"),y=S(t[3]),E=k(),T=p("p"),P=S("tel: "),D=S(t[4]),F=S(" email: "),K=S(t[5]),N=k(),Y=p("p"),M=S("Presupuesto "),$=S(t[6]),U=k(),H=p("p"),Q=S("Rango "),Z=S(t[7]),g(s,"class","namePerson svelte-1thiswe"),g(_,"class","nameDate svelte-1thiswe"),g(n,"class","contactCard"),g(e,"class","container contact svelte-1thiswe")},m(G,z){w(G,e,z),u(e,n),u(n,s),u(s,i),u(i,r),u(i,o),u(i,a),u(s,l),u(s,c),u(c,h),u(c,d),u(n,m),u(n,_),u(_,v),u(v,y),u(_,E),u(_,T),u(T,P),u(T,D),u(T,F),u(T,K),u(_,N),u(_,Y),u(Y,M),u(Y,$),u(_,U),u(_,H),u(H,Q),u(H,Z)},p(G,[z]){z&1&&ie(r,G[0]),z&2&&ie(a,G[1]),z&4&&f!==(f=Kt(G[2])+"")&&ie(d,f),z&8&&ie(y,G[3]),z&16&&ie(D,G[4]),z&32&&ie(K,G[5]),z&64&&ie($,G[6]),z&128&&ie(Z,G[7])},i:ue,o:ue,d(G){G&&b(e)}}}function pI(t,e,n){let{name:s,lastname:i,createdAt:r,contactStage:o,telephon:a,email:l,budget:c,rangeProp:h}=e;return t.$$set=f=>{"name"in f&&n(0,s=f.name),"lastname"in f&&n(1,i=f.lastname),"createdAt"in f&&n(2,r=f.createdAt),"contactStage"in f&&n(3,o=f.contactStage),"telephon"in f&&n(4,a=f.telephon),"email"in f&&n(5,l=f.email),"budget"in f&&n(6,c=f.budget),"rangeProp"in f&&n(7,h=f.rangeProp)},[s,i,r,o,a,l,c,h]}class mI extends Qe{constructor(e){super(),We(this,e,pI,dI,He,{name:0,lastname:1,createdAt:2,contactStage:3,telephon:4,email:5,budget:6,rangeProp:7})}}function gI(t){let e,n,s,i;return{c(){e=p("div"),n=p("input"),g(n,"class","searchInput svelte-6bonih"),g(n,"type","text"),g(n,"id","search-field"),g(n,"placeholder","Enter Search Term"),g(n,"autocomplete","off"),g(e,"id","search-input-cont")},m(r,o){w(r,e,o),u(e,n),de(n,t[0]),s||(i=[j(n,"input",t[2]),j(n,"input",t[1])],s=!0)},p(r,[o]){o&1&&n.value!==r[0]&&de(n,r[0])},i:ue,o:ue,d(r){r&&b(e),s=!1,Ye(i)}}}function _I(t,e,n){let{searchTerm:s}=e;function i(o){G_.call(this,t,o)}function r(){s=this.value,n(0,s)}return t.$$set=o=>{"searchTerm"in o&&n(0,s=o.searchTerm)},[s,i,r]}class iu extends Qe{constructor(e){super(),We(this,e,_I,gI,He,{searchTerm:0})}}async function C_(t,e){if(console.log("estas en la funcion"),t==="todoAdding"){const n=En(Tt,"todos");await Us(n,e)}else t==="todoUpdate"?await ba(ss(Tt,"todos",e.id),e):t==="todoDelete"&&await wa(ss(Tt,"todos",e.id));e=""}function vI(t){let e,n,s,i,r,o,a,l,c,h,f,d,m,_,v,y,E,T,P,D,F,K;return{c(){e=p("div"),s=k(),i=p("div"),r=p("div"),o=p("input"),a=k(),l=p("input"),c=k(),h=p("input"),f=k(),d=p("div"),m=p("textarea"),_=k(),v=p("div"),y=p("button"),y.textContent="Guardar",E=k(),T=p("button"),T.textContent="Cancelar",g(e,"class","background svelte-18c6vp2"),g(o,"type","text"),g(o,"class","inputTask svelte-18c6vp2"),g(o,"placeholder","Agrega una Tarea o Cita"),g(l,"type","time"),g(l,"class","inputDate svelte-18c6vp2"),g(h,"type","date"),g(h,"class","inputDate svelte-18c6vp2"),g(m,"name","notes"),g(m,"cols","40"),g(m,"rows","5"),g(m,"placeholder","descripci\xF3n"),g(y,"class","btnShedule svelte-18c6vp2"),g(T,"class","btnShedule svelte-18c6vp2"),g(i,"class","pop__up svelte-18c6vp2")},m(N,Y){w(N,e,Y),w(N,s,Y),w(N,i,Y),u(i,r),u(r,o),de(o,t[0]),u(i,a),u(i,l),de(l,t[1].timeTask),u(i,c),u(i,h),de(h,t[1].endTask),u(i,f),u(i,d),u(d,m),de(m,t[1].notes),u(i,_),u(i,v),u(v,y),u(v,E),u(v,T),D=!0,F||(K=[j(window,"keydown",t[4]),j(e,"click",t[2]),j(o,"input",t[5]),j(l,"input",t[6]),j(h,"input",t[7]),j(m,"input",t[8]),j(y,"click",t[3]),j(T,"click",t[2])],F=!0)},p(N,[Y]){Y&1&&o.value!==N[0]&&de(o,N[0]),Y&2&&de(l,N[1].timeTask),Y&2&&de(h,N[1].endTask),Y&2&&de(m,N[1].notes)},i(N){D||(xe(()=>{n||(n=dn(e,Vo,{},!0)),n.run(1)}),xe(()=>{P||(P=dn(i,Bo,{},!0)),P.run(1)}),D=!0)},o(N){n||(n=dn(e,Vo,{},!1)),n.run(0),P||(P=dn(i,Bo,{},!1)),P.run(0),D=!1},d(N){N&&b(e),N&&n&&n.end(),N&&b(s),N&&b(i),N&&P&&P.end(),F=!1,Ye(K)}}}function yI(t,e,n){let s,i,r;Ue(t,bn,T=>n(10,s=T)),Ue(t,it,T=>n(11,i=T)),Ue(t,Ze,T=>n(12,r=T));const o=Qd();let a=`${r.name} ${r.lastname}`,l=[],c=[],h;l={task:"",endTask:"",isComplete:"",createdAt:"",timeTask:"",notes:"",user:""};function f(){o("closeIt"),Xe(it,i="contSelect",i),Xe(bn,s="",s)}const d=async()=>{console.log("ests en addTodo"),Xe(it,i="todoAdding",i),console.log(h),c=a,Xe(bn,s={...l,task:c},s),C_(i,s),console.log(s)},m=T=>{T.key==="Enter"&&d()};function _(){a=this.value,n(0,a)}function v(){l.timeTask=this.value,n(1,l)}function y(){l.endTask=this.value,n(1,l)}function E(){l.notes=this.value,n(1,l)}return[a,l,f,d,m,_,v,y,E]}class bI extends Qe{constructor(e){super(),We(this,e,yI,vI,He,{})}}function wI(t){let e,n,s,i,r,o,a,l,c,h,f,d,m,_,v,y,E,T,P,D,F,K,N,Y,M,$,U,H,Q,Z,G,z,X,W,C,O,L,A,J,oe;return{c(){e=p("main"),n=p("section"),s=p("figure"),i=p("img"),o=k(),a=p("div"),l=S(t[1]),c=k(),h=p("figcaption"),f=S(t[2]),d=k(),m=p("section"),_=p("section"),v=p("div"),y=p("div"),E=S(t[3]),T=S(" Rec\xE1maras"),P=k(),D=p("div"),F=S(t[4]),K=S(" Ba\xF1os"),N=k(),Y=p("div"),M=S(t[5]),$=S(" Estacionamientos"),U=k(),H=p("div"),Q=S(t[6]),Z=S(" m2 de Contruccion"),G=k(),z=p("div"),X=S(t[7]),W=S(" m2 de Terreno"),C=k(),O=p("br"),L=k(),A=p("div"),J=S("Precio $: "),oe=S(t[8]),ct(i.src,r=t[0])||g(i,"src",r),g(i,"alt",t[1]),g(i,"class","bkcover svelte-1w1p4eb"),g(a,"class","language svelte-1w1p4eb"),g(h,"class","svelte-1w1p4eb"),g(s,"class","bkcont svelte-1w1p4eb"),g(n,"class","book-top-info svelte-1w1p4eb"),g(v,"class","buy-options-cont svelte-1w1p4eb"),g(_,"class","from-pariyatti available-at svelte-1w1p4eb"),g(m,"class","book-bottom-links svelte-1w1p4eb")},m(Se,me){w(Se,e,me),u(e,n),u(n,s),u(s,i),u(s,o),u(s,a),u(a,l),u(s,c),u(s,h),u(h,f),u(e,d),u(e,m),u(m,_),u(_,v),u(v,y),u(y,E),u(y,T),u(v,P),u(v,D),u(D,F),u(D,K),u(v,N),u(v,Y),u(Y,M),u(Y,$),u(v,U),u(v,H),u(H,Q),u(H,Z),u(v,G),u(v,z),u(z,X),u(z,W),u(v,C),u(v,O),u(v,L),u(v,A),u(A,J),u(A,oe)},p(Se,[me]){me&1&&!ct(i.src,r=Se[0])&&g(i,"src",r),me&2&&g(i,"alt",Se[1]),me&2&&ie(l,Se[1]),me&4&&ie(f,Se[2]),me&8&&ie(E,Se[3]),me&16&&ie(F,Se[4]),me&32&&ie(M,Se[5]),me&64&&ie(Q,Se[6]),me&128&&ie(X,Se[7]),me&256&&ie(oe,Se[8])},i:ue,o:ue,d(Se){Se&&b(e)}}}function kI(t,e,n){let{urlImage:s,claveEB:i,nameProperty:r,beds:o,bathroom:a,park:l,areaBuilding:c,areaTotal:h,price:f}=e;return t.$$set=d=>{"urlImage"in d&&n(0,s=d.urlImage),"claveEB"in d&&n(1,i=d.claveEB),"nameProperty"in d&&n(2,r=d.nameProperty),"beds"in d&&n(3,o=d.beds),"bathroom"in d&&n(4,a=d.bathroom),"park"in d&&n(5,l=d.park),"areaBuilding"in d&&n(6,c=d.areaBuilding),"areaTotal"in d&&n(7,h=d.areaTotal),"price"in d&&n(8,f=d.price)},[s,i,r,o,a,l,c,h,f]}class S_ extends Qe{constructor(e){super(),We(this,e,kI,wI,He,{urlImage:0,claveEB:1,nameProperty:2,beds:3,bathroom:4,park:5,areaBuilding:6,areaTotal:7,price:8})}}let Rs;function A_(t){return t<=1e6?Rs="PRM":t<=25e5?Rs="SGN":t<=5e6?Rs="TRC":t<=8e6?Rs="CRT":t<=12e6?Rs="QNT":t>12e6&&(Rs="SXT"),Rs}let xa,Xa;function EI(t){let e=xn;return e=e.filter(n=>n.selectTP===t.selecTP),console.log("filtraste por tipo de propiedad",e),t.numBeds>0&&(e=e.filter(n=>n.beds>=t.numBeds)),t.numBaths>0&&(e=e.filter(n=>n.bathroom>=t.numBaths)),t.numParks>0&&(e=e.filter(n=>n.park>=t.numParks)),console.log("Por caracteristicas",e),t.budget?(console.log("filtraste por budget"),xa=t.budget*.7,Xa=t.budget*1.1,console.log(xa,Xa),e=e.filter(n=>n.price>=xa&&n.price<=Xa)):(console.log("filtraste por rango"),e=e.filter(n=>A_(n.price)===t.rangeProp)),console.log("filtraste presupuesto",e),t.locaProperty.length>0&&(e=e.filter(n=>t.locaProperty.some(s=>n.locaProperty.includes(s)))),console.log("Filtraste por Ubicacion",e),t.tagsProperty.length>0&&(e=e.filter(n=>t.tagsProperty.every(s=>n.tagsProperty.includes(s)))),console.log("Filtraste por localizacion",e),e.length===0||""+e.length,$l.set(e)}const jo=["Casa","Terreno","Departamento","Casa o Departamento","Local Comercial","Casa de Campo"],cf=["Lona en Propiedad","Propiedades.com","NocNok","Mercado Libre","Vivanuncios","Lamudi","Inmuebles24","Referido","Otro"],uf=["Comprador","Arrendador","Propietario","Agente Asociado","Agente Inmobiliario","Constructor","Inversionista","Otro"],hf=["Contado","Credito Hipotecario","INFONAVIT","COFINAVIT","FOVISSSTE","ALIADOS","Conyugal"],ff=["Venta","Renta"],df=["Rango","PRM","SGN","TRC","CRT","QNT","SXT","SPT"],qo=[0,1,2,3,4,5],wn=[0,1,2,3,4],pf=["Due\xF1o","Familiar","Inmobiliaria","Conocido"];function TI(t){let e,n,s,i,r,o,a,l,c,h,f,d,m,_,v,y,E,T,P,D,F,K,N,Y,M,$,U,H,Q,Z,G,z,X,W,C,O,L,A,J,oe,Se,me,at;return{c(){e=p("div"),n=p("div"),s=p("label"),i=S(`/Norte\\\r
			`),r=p("input"),o=k(),a=p("div"),l=p("label"),c=S(`/Noroeste\r
			`),h=p("input"),f=k(),d=p("label"),m=p("input"),_=S("NorEste\\"),v=k(),y=p("div"),E=p("label"),T=S(`/Oeste\r
			`),P=p("input"),D=k(),F=p("label"),K=S(`Centro Norte\r
			`),N=p("input"),Y=k(),M=p("label"),$=p("input"),U=S("Este\\"),H=k(),Q=p("div"),Z=p("label"),G=S(`Centro Sur\r
			`),z=p("input"),X=k(),W=p("div"),C=p("label"),O=S(`/SurOeste\r
			`),L=p("input"),A=k(),J=p("label"),oe=p("input"),Se=S("SurEste\\"),r.__value="Norte",r.value=r.__value,g(r,"id","north"),g(r,"type","checkbox"),t[2][0].push(r),g(s,"for","north"),g(n,"class","filterLocationOne svelte-1lvjb5r"),h.__value="Noroeste",h.value=h.__value,g(h,"id","northwest"),g(h,"type","checkbox"),t[2][0].push(h),g(l,"for","northwest"),m.__value="Noreste",m.value=m.__value,g(m,"id","northeast"),g(m,"type","checkbox"),t[2][0].push(m),g(d,"for","northeast"),g(a,"class","filterLocationOne svelte-1lvjb5r"),P.__value="Oeste",P.value=P.__value,g(P,"id","west"),g(P,"type","checkbox"),t[2][0].push(P),g(E,"for","west"),N.__value="Centronorte",N.value=N.__value,g(N,"id","townNorth"),g(N,"type","checkbox"),t[2][0].push(N),g(F,"for","townNorth"),$.__value="Este",$.value=$.__value,g($,"id","east"),g($,"type","checkbox"),t[2][0].push($),g(M,"for","east"),g(y,"class","filterLocationOne svelte-1lvjb5r"),z.__value="CentroSur",z.value=z.__value,g(z,"id","townsouth"),g(z,"type","checkbox"),t[2][0].push(z),g(Z,"for","townsouth"),g(Q,"class","filterLocationOne svelte-1lvjb5r"),L.__value="SurOeste",L.value=L.__value,g(L,"id","southwest"),g(L,"type","checkbox"),t[2][0].push(L),g(C,"for","southwest"),oe.__value="SurEste",oe.value=oe.__value,g(oe,"id","southeast"),g(oe,"type","checkbox"),t[2][0].push(oe),g(J,"for","southeast"),g(W,"class","filterLocationOne svelte-1lvjb5r"),g(e,"class","containerUbication svelte-1lvjb5r")},m(ge,Pe){w(ge,e,Pe),u(e,n),u(n,s),u(s,i),u(s,r),r.checked=~t[0].indexOf(r.__value),u(e,o),u(e,a),u(a,l),u(l,c),u(l,h),h.checked=~t[0].indexOf(h.__value),u(a,f),u(a,d),u(d,m),m.checked=~t[0].indexOf(m.__value),u(d,_),u(e,v),u(e,y),u(y,E),u(E,T),u(E,P),P.checked=~t[0].indexOf(P.__value),u(y,D),u(y,F),u(F,K),u(F,N),N.checked=~t[0].indexOf(N.__value),u(y,Y),u(y,M),u(M,$),$.checked=~t[0].indexOf($.__value),u(M,U),u(e,H),u(e,Q),u(Q,Z),u(Z,G),u(Z,z),z.checked=~t[0].indexOf(z.__value),u(e,X),u(e,W),u(W,C),u(C,O),u(C,L),L.checked=~t[0].indexOf(L.__value),u(W,A),u(W,J),u(J,oe),oe.checked=~t[0].indexOf(oe.__value),u(J,Se),me||(at=[j(r,"change",t[1]),j(h,"change",t[3]),j(m,"change",t[4]),j(P,"change",t[5]),j(N,"change",t[6]),j($,"change",t[7]),j(z,"change",t[8]),j(L,"change",t[9]),j(oe,"change",t[10])],me=!0)},p(ge,[Pe]){Pe&1&&(r.checked=~ge[0].indexOf(r.__value)),Pe&1&&(h.checked=~ge[0].indexOf(h.__value)),Pe&1&&(m.checked=~ge[0].indexOf(m.__value)),Pe&1&&(P.checked=~ge[0].indexOf(P.__value)),Pe&1&&(N.checked=~ge[0].indexOf(N.__value)),Pe&1&&($.checked=~ge[0].indexOf($.__value)),Pe&1&&(z.checked=~ge[0].indexOf(z.__value)),Pe&1&&(L.checked=~ge[0].indexOf(L.__value)),Pe&1&&(oe.checked=~ge[0].indexOf(oe.__value))},i:ue,o:ue,d(ge){ge&&b(e),t[2][0].splice(t[2][0].indexOf(r),1),t[2][0].splice(t[2][0].indexOf(h),1),t[2][0].splice(t[2][0].indexOf(m),1),t[2][0].splice(t[2][0].indexOf(P),1),t[2][0].splice(t[2][0].indexOf(N),1),t[2][0].splice(t[2][0].indexOf($),1),t[2][0].splice(t[2][0].indexOf(z),1),t[2][0].splice(t[2][0].indexOf(L),1),t[2][0].splice(t[2][0].indexOf(oe),1),me=!1,Ye(at)}}}function II(t,e,n){let{ubication:s}=e;const i=[[]];function r(){s=Bt(i[0],this.__value,this.checked),n(0,s)}function o(){s=Bt(i[0],this.__value,this.checked),n(0,s)}function a(){s=Bt(i[0],this.__value,this.checked),n(0,s)}function l(){s=Bt(i[0],this.__value,this.checked),n(0,s)}function c(){s=Bt(i[0],this.__value,this.checked),n(0,s)}function h(){s=Bt(i[0],this.__value,this.checked),n(0,s)}function f(){s=Bt(i[0],this.__value,this.checked),n(0,s)}function d(){s=Bt(i[0],this.__value,this.checked),n(0,s)}function m(){s=Bt(i[0],this.__value,this.checked),n(0,s)}return t.$$set=_=>{"ubication"in _&&n(0,s=_.ubication)},[s,r,i,o,a,l,c,h,f,d,m]}class D_ extends Qe{constructor(e){super(),We(this,e,II,TI,He,{ubication:0})}}function CI(t){let e,n,s,i,r,o,a,l,c,h,f,d,m,_,v,y,E,T,P,D,F,K,N,Y,M,$,U,H,Q,Z,G,z,X;return{c(){e=p("section"),n=p("div"),s=p("label"),i=S(`Fracc. Privado\r
		   `),r=p("input"),o=k(),a=p("label"),l=S(`Frente a Parque\r
         `),c=p("input"),h=k(),f=p("label"),d=S(`Una Planta\r
         `),m=p("input"),_=k(),v=p("div"),y=p("label"),E=S(`Recamara en P.B.\r
		`),T=p("input"),P=k(),D=p("label"),F=S(`Patio Amplio\r
   `),K=p("input"),N=k(),Y=p("label"),M=S(`Lista para Habitarse\r
   `),$=p("input"),U=k(),H=p("div"),Q=p("label"),Z=S(`Nueva\r
		`),G=p("input"),g(r,"type","checkbox"),r.__value="Fracc. Privado",r.value=r.__value,t[2][0].push(r),g(c,"type","checkbox"),c.__value="Frente a Parque",c.value=c.__value,t[2][0].push(c),g(m,"type","checkbox"),m.__value="Una Planta",m.value=m.__value,t[2][0].push(m),g(n,"class","svelte-1b9bvt0"),g(T,"type","checkbox"),T.__value="Recamara en PB",T.value=T.__value,t[2][0].push(T),g(K,"type","checkbox"),K.__value="Patio Amplio",K.value=K.__value,t[2][0].push(K),g($,"type","checkbox"),$.__value="Lista Habitarse",$.value=$.__value,t[2][0].push($),g(v,"class","svelte-1b9bvt0"),g(G,"type","checkbox"),G.__value="Nueva",G.value=G.__value,t[2][0].push(G),g(H,"class","svelte-1b9bvt0"),g(e,"class","svelte-1b9bvt0")},m(W,C){w(W,e,C),u(e,n),u(n,s),u(s,i),u(s,r),r.checked=~t[0].indexOf(r.__value),u(n,o),u(n,a),u(a,l),u(a,c),c.checked=~t[0].indexOf(c.__value),u(n,h),u(n,f),u(f,d),u(f,m),m.checked=~t[0].indexOf(m.__value),u(e,_),u(e,v),u(v,y),u(y,E),u(y,T),T.checked=~t[0].indexOf(T.__value),u(v,P),u(v,D),u(D,F),u(D,K),K.checked=~t[0].indexOf(K.__value),u(v,N),u(v,Y),u(Y,M),u(Y,$),$.checked=~t[0].indexOf($.__value),u(e,U),u(e,H),u(H,Q),u(Q,Z),u(Q,G),G.checked=~t[0].indexOf(G.__value),z||(X=[j(r,"change",t[1]),j(c,"change",t[3]),j(m,"change",t[4]),j(T,"change",t[5]),j(K,"change",t[6]),j($,"change",t[7]),j(G,"change",t[8])],z=!0)},p(W,[C]){C&1&&(r.checked=~W[0].indexOf(r.__value)),C&1&&(c.checked=~W[0].indexOf(c.__value)),C&1&&(m.checked=~W[0].indexOf(m.__value)),C&1&&(T.checked=~W[0].indexOf(T.__value)),C&1&&(K.checked=~W[0].indexOf(K.__value)),C&1&&($.checked=~W[0].indexOf($.__value)),C&1&&(G.checked=~W[0].indexOf(G.__value))},i:ue,o:ue,d(W){W&&b(e),t[2][0].splice(t[2][0].indexOf(r),1),t[2][0].splice(t[2][0].indexOf(c),1),t[2][0].splice(t[2][0].indexOf(m),1),t[2][0].splice(t[2][0].indexOf(T),1),t[2][0].splice(t[2][0].indexOf(K),1),t[2][0].splice(t[2][0].indexOf($),1),t[2][0].splice(t[2][0].indexOf(G),1),z=!1,Ye(X)}}}function SI(t,e,n){let{tag:s}=e;const i=[[]];function r(){s=Bt(i[0],this.__value,this.checked),n(0,s)}function o(){s=Bt(i[0],this.__value,this.checked),n(0,s)}function a(){s=Bt(i[0],this.__value,this.checked),n(0,s)}function l(){s=Bt(i[0],this.__value,this.checked),n(0,s)}function c(){s=Bt(i[0],this.__value,this.checked),n(0,s)}function h(){s=Bt(i[0],this.__value,this.checked),n(0,s)}function f(){s=Bt(i[0],this.__value,this.checked),n(0,s)}return t.$$set=d=>{"tag"in d&&n(0,s=d.tag)},[s,r,i,o,a,l,c,h,f]}class R_ extends Qe{constructor(e){super(),We(this,e,SI,CI,He,{tag:0})}}function mf(t,e,n){const s=t.slice();return s[26]=e[n],s}function gf(t,e,n){const s=t.slice();return s[29]=e[n],s}function _f(t,e,n){const s=t.slice();return s[32]=e[n],s}function vf(t,e,n){const s=t.slice();return s[35]=e[n],s}function yf(t,e,n){const s=t.slice();return s[38]=e[n],s}function bf(t,e,n){const s=t.slice();return s[41]=e[n],s}function wf(t,e,n){const s=t.slice();return s[44]=e[n],s}function kf(t,e,n){const s=t.slice();return s[47]=e[n],s}function Ef(t,e,n){const s=t.slice();return s[50]=e[n],s}function Tf(t,e,n){const s=t.slice();return s[53]=e[n],s}function AI(t){let e,n=Kt(t[3].createdAt)+"",s,i,r;return{c(){e=p("h3"),s=S(n),g(e,"class","dataInput svelte-1myljlf")},m(o,a){w(o,e,a),u(e,s),i||(r=j(e,"dblclick",t[4]),i=!0)},p(o,a){a[0]&8&&n!==(n=Kt(o[3].createdAt)+"")&&ie(s,n)},d(o){o&&b(e),i=!1,r()}}}function DI(t){let e,n,s;return{c(){e=p("input"),g(e,"class","dataInput svelte-1myljlf"),g(e,"type","date")},m(i,r){w(i,e,r),de(e,t[3].createdAt),n||(s=j(e,"input",t[6]),n=!0)},p(i,r){r[0]&9&&de(e,i[3].createdAt)},d(i){i&&b(e),n=!1,s()}}}function If(t){let e,n,s;return{c(){e=p("input"),g(e,"class","dataInput svelte-1myljlf"),g(e,"type","email"),g(e,"placeholder","email")},m(i,r){w(i,e,r),de(e,t[3].email),n||(s=j(e,"input",t[10]),n=!0)},p(i,r){r[0]&9&&e.value!==i[3].email&&de(e,i[3].email)},d(i){i&&b(e),n=!1,s()}}}function Cf(t){let e,n=t[53]+"",s,i;return{c(){e=p("option"),s=S(n),g(e,"class","dataInput svelte-1myljlf"),g(e,"type","checkbox"),e.__value=i=t[53],e.value=e.__value},m(r,o){w(r,e,o),u(e,s)},p(r,o){o[0]&1&&n!==(n=r[53]+"")&&ie(s,n),o[0]&1&&i!==(i=r[53])&&(e.__value=i,e.value=e.__value)},d(r){r&&b(e)}}}function Sf(t){let e,n,s;return{c(){e=p("input"),g(e,"class","dataInput svelte-1myljlf"),g(e,"type","number"),g(e,"placeholder","Presupuesto")},m(i,r){w(i,e,r),de(e,t[3].budget),n||(s=j(e,"input",t[12]),n=!0)},p(i,r){r[0]&9&&ps(e.value)!==i[3].budget&&de(e,i[3].budget)},d(i){i&&b(e),n=!1,s()}}}function Af(t){let e,n,s,i,r,o,a,l,c,h,f,d,m,_,v,y,E,T,P,D,F,K,N,Y,M,$,U,H,Q,Z,G,z,X,W,C,O,L=uf,A=[];for(let R=0;R<L.length;R+=1)A[R]=Df(Ef(t,L,R));let J=cf,oe=[];for(let R=0;R<J.length;R+=1)oe[R]=Rf(kf(t,J,R));let Se=hf,me=[];for(let R=0;R<Se.length;R+=1)me[R]=Pf(wf(t,Se,R));let at=jo,ge=[];for(let R=0;R<at.length;R+=1)ge[R]=Nf(bf(t,at,R));let Pe=df,Ne=[];for(let R=0;R<Pe.length;R+=1)Ne[R]=Of(yf(t,Pe,R));let dt=qo,V=[];for(let R=0;R<dt.length;R+=1)V[R]=Lf(vf(t,dt,R));let re=wn,Ke=[];for(let R=0;R<re.length;R+=1)Ke[R]=Mf(_f(t,re,R));let Dt=wn,Le=[];for(let R=0;R<Dt.length;R+=1)Le[R]=$f(gf(t,Dt,R));let ht=wn,Fe=[];for(let R=0;R<ht.length;R+=1)Fe[R]=Uf(mf(t,ht,R));function rn(R){t[23](R)}let ft={};t[3].locaProperty!==void 0&&(ft.ubication=t[3].locaProperty),Q=new D_({props:ft}),Xn.push(()=>Bs(Q,"ubication",rn));function pt(R){t[24](R)}let Ut={};return t[3].tagsProperty!==void 0&&(Ut.tag=t[3].tagsProperty),z=new R_({props:Ut}),Xn.push(()=>Bs(z,"tag",pt)),{c(){e=p("select"),n=p("option"),n.textContent="Tipo de Contacto";for(let R=0;R<A.length;R+=1)A[R].c();s=k(),i=p("select"),r=p("option"),r.textContent="Modo de Contacto";for(let R=0;R<oe.length;R+=1)oe[R].c();o=k(),a=p("select"),l=p("option"),l.textContent="Modo de Pago";for(let R=0;R<me.length;R+=1)me[R].c();c=k(),h=p("select"),f=p("option"),f.textContent="Tipo de Propiedad";for(let R=0;R<ge.length;R+=1)ge[R].c();d=k(),m=p("select"),_=p("option"),_.textContent="Rango de Busqueda";for(let R=0;R<Ne.length;R+=1)Ne[R].c();v=k(),y=p("select"),E=p("option"),E.textContent="# Rec\xE1maras";for(let R=0;R<V.length;R+=1)V[R].c();T=k(),P=p("select"),D=p("option"),D.textContent="# Ba\xF1os";for(let R=0;R<Ke.length;R+=1)Ke[R].c();F=k(),K=p("select"),N=p("option"),N.textContent="# Medios Ba\xF1os";for(let R=0;R<Le.length;R+=1)Le[R].c();Y=k(),M=p("select"),$=p("option"),$.textContent="# Estacionamientos";for(let R=0;R<Fe.length;R+=1)Fe[R].c();U=k(),H=p("div"),he(Q.$$.fragment),G=k(),he(z.$$.fragment),n.disabled=!0,n.selected=!0,n.__value="",n.value=n.__value,g(e,"class","othersInput svelte-1myljlf"),t[3].typeContact===void 0&&xe(()=>t[14].call(e)),r.disabled=!0,r.selected=!0,r.__value="",r.value=r.__value,g(i,"class","othersInput svelte-1myljlf"),t[3].selecMC===void 0&&xe(()=>t[15].call(i)),l.disabled=!0,l.selected=!0,l.__value="",l.value=l.__value,g(a,"class","othersInput svelte-1myljlf"),t[3].modePay===void 0&&xe(()=>t[16].call(a)),f.disabled=!0,f.selected=!0,f.__value="",f.value=f.__value,g(h,"class","othersInput svelte-1myljlf"),g(h,"id","selTP"),g(h,"name","selTP"),t[3].selecTP===void 0&&xe(()=>t[17].call(h)),_.disabled=!0,_.selected=!0,_.__value="",_.value=_.__value,g(m,"class","othersInput svelte-1myljlf"),g(m,"id","ranges"),g(m,"name","ranges"),t[3].rangeProp===void 0&&xe(()=>t[18].call(m)),E.disabled=!0,E.selected=!0,E.__value="",E.value=E.__value,g(y,"class","othersInput svelte-1myljlf"),t[3].numBeds===void 0&&xe(()=>t[19].call(y)),D.disabled=!0,D.selected=!0,D.__value="",D.value=D.__value,g(P,"class","othersInput svelte-1myljlf"),t[3].numBaths===void 0&&xe(()=>t[20].call(P)),N.disabled=!0,N.selected=!0,N.__value="",N.value=N.__value,g(K,"class","othersInput svelte-1myljlf"),t[3].halfBathroom===void 0&&xe(()=>t[21].call(K)),$.disabled=!0,$.selected=!0,$.__value="",$.value=$.__value,g(M,"class","othersInput svelte-1myljlf"),t[3].numParks===void 0&&xe(()=>t[22].call(M)),g(H,"class","ubiTags svelte-1myljlf")},m(R,ae){w(R,e,ae),u(e,n);for(let _e=0;_e<A.length;_e+=1)A[_e].m(e,null);$e(e,t[3].typeContact),w(R,s,ae),w(R,i,ae),u(i,r);for(let _e=0;_e<oe.length;_e+=1)oe[_e].m(i,null);$e(i,t[3].selecMC),w(R,o,ae),w(R,a,ae),u(a,l);for(let _e=0;_e<me.length;_e+=1)me[_e].m(a,null);$e(a,t[3].modePay),w(R,c,ae),w(R,h,ae),u(h,f);for(let _e=0;_e<ge.length;_e+=1)ge[_e].m(h,null);$e(h,t[3].selecTP),w(R,d,ae),w(R,m,ae),u(m,_);for(let _e=0;_e<Ne.length;_e+=1)Ne[_e].m(m,null);$e(m,t[3].rangeProp),w(R,v,ae),w(R,y,ae),u(y,E);for(let _e=0;_e<V.length;_e+=1)V[_e].m(y,null);$e(y,t[3].numBeds),w(R,T,ae),w(R,P,ae),u(P,D);for(let _e=0;_e<Ke.length;_e+=1)Ke[_e].m(P,null);$e(P,t[3].numBaths),w(R,F,ae),w(R,K,ae),u(K,N);for(let _e=0;_e<Le.length;_e+=1)Le[_e].m(K,null);$e(K,t[3].halfBathroom),w(R,Y,ae),w(R,M,ae),u(M,$);for(let _e=0;_e<Fe.length;_e+=1)Fe[_e].m(M,null);$e(M,t[3].numParks),w(R,U,ae),w(R,H,ae),le(Q,H,null),u(H,G),le(z,H,null),W=!0,C||(O=[j(e,"change",t[14]),j(i,"change",t[15]),j(a,"change",t[16]),j(h,"change",t[17]),j(m,"change",t[18]),j(y,"change",t[19]),j(P,"change",t[20]),j(K,"change",t[21]),j(M,"change",t[22])],C=!0)},p(R,ae){if(ae&0){L=uf;let B;for(B=0;B<L.length;B+=1){const we=Ef(R,L,B);A[B]?A[B].p(we,ae):(A[B]=Df(we),A[B].c(),A[B].m(e,null))}for(;B<A.length;B+=1)A[B].d(1);A.length=L.length}if(ae[0]&9&&$e(e,R[3].typeContact),ae&0){J=cf;let B;for(B=0;B<J.length;B+=1){const we=kf(R,J,B);oe[B]?oe[B].p(we,ae):(oe[B]=Rf(we),oe[B].c(),oe[B].m(i,null))}for(;B<oe.length;B+=1)oe[B].d(1);oe.length=J.length}if(ae[0]&9&&$e(i,R[3].selecMC),ae&0){Se=hf;let B;for(B=0;B<Se.length;B+=1){const we=wf(R,Se,B);me[B]?me[B].p(we,ae):(me[B]=Pf(we),me[B].c(),me[B].m(a,null))}for(;B<me.length;B+=1)me[B].d(1);me.length=Se.length}if(ae[0]&9&&$e(a,R[3].modePay),ae&0){at=jo;let B;for(B=0;B<at.length;B+=1){const we=bf(R,at,B);ge[B]?ge[B].p(we,ae):(ge[B]=Nf(we),ge[B].c(),ge[B].m(h,null))}for(;B<ge.length;B+=1)ge[B].d(1);ge.length=at.length}if(ae[0]&9&&$e(h,R[3].selecTP),ae&0){Pe=df;let B;for(B=0;B<Pe.length;B+=1){const we=yf(R,Pe,B);Ne[B]?Ne[B].p(we,ae):(Ne[B]=Of(we),Ne[B].c(),Ne[B].m(m,null))}for(;B<Ne.length;B+=1)Ne[B].d(1);Ne.length=Pe.length}if(ae[0]&9&&$e(m,R[3].rangeProp),ae&0){dt=qo;let B;for(B=0;B<dt.length;B+=1){const we=vf(R,dt,B);V[B]?V[B].p(we,ae):(V[B]=Lf(we),V[B].c(),V[B].m(y,null))}for(;B<V.length;B+=1)V[B].d(1);V.length=dt.length}if(ae[0]&9&&$e(y,R[3].numBeds),ae&0){re=wn;let B;for(B=0;B<re.length;B+=1){const we=_f(R,re,B);Ke[B]?Ke[B].p(we,ae):(Ke[B]=Mf(we),Ke[B].c(),Ke[B].m(P,null))}for(;B<Ke.length;B+=1)Ke[B].d(1);Ke.length=re.length}if(ae[0]&9&&$e(P,R[3].numBaths),ae&0){Dt=wn;let B;for(B=0;B<Dt.length;B+=1){const we=gf(R,Dt,B);Le[B]?Le[B].p(we,ae):(Le[B]=$f(we),Le[B].c(),Le[B].m(K,null))}for(;B<Le.length;B+=1)Le[B].d(1);Le.length=Dt.length}if(ae[0]&9&&$e(K,R[3].halfBathroom),ae&0){ht=wn;let B;for(B=0;B<ht.length;B+=1){const we=mf(R,ht,B);Fe[B]?Fe[B].p(we,ae):(Fe[B]=Uf(we),Fe[B].c(),Fe[B].m(M,null))}for(;B<Fe.length;B+=1)Fe[B].d(1);Fe.length=ht.length}ae[0]&9&&$e(M,R[3].numParks);const _e={};!Z&&ae[0]&8&&(Z=!0,_e.ubication=R[3].locaProperty,Vs(()=>Z=!1)),Q.$set(_e);const rt={};!X&&ae[0]&8&&(X=!0,rt.tag=R[3].tagsProperty,Vs(()=>X=!1)),z.$set(rt)},i(R){W||(q(Q.$$.fragment,R),q(z.$$.fragment,R),W=!0)},o(R){x(Q.$$.fragment,R),x(z.$$.fragment,R),W=!1},d(R){R&&b(e),qe(A,R),R&&b(s),R&&b(i),qe(oe,R),R&&b(o),R&&b(a),qe(me,R),R&&b(c),R&&b(h),qe(ge,R),R&&b(d),R&&b(m),qe(Ne,R),R&&b(v),R&&b(y),qe(V,R),R&&b(T),R&&b(P),qe(Ke,R),R&&b(F),R&&b(K),qe(Le,R),R&&b(Y),R&&b(M),qe(Fe,R),R&&b(U),R&&b(H),ce(Q),ce(z),C=!1,Ye(O)}}}function Df(t){let e,n=t[50]+"",s;return{c(){e=p("option"),s=S(n),g(e,"type","checkbox"),e.__value=t[50],e.value=e.__value},m(i,r){w(i,e,r),u(e,s)},p:ue,d(i){i&&b(e)}}}function Rf(t){let e,n=t[47]+"",s;return{c(){e=p("option"),s=S(n),g(e,"type","checkbox"),e.__value=t[47],e.value=e.__value},m(i,r){w(i,e,r),u(e,s)},p:ue,d(i){i&&b(e)}}}function Pf(t){let e,n=t[44]+"",s;return{c(){e=p("option"),s=S(n),g(e,"type","checkbox"),e.__value=t[44],e.value=e.__value},m(i,r){w(i,e,r),u(e,s)},p:ue,d(i){i&&b(e)}}}function Nf(t){let e,n=t[41]+"",s;return{c(){e=p("option"),s=S(n),g(e,"type","checkbox"),e.__value=t[41],e.value=e.__value},m(i,r){w(i,e,r),u(e,s)},p:ue,d(i){i&&b(e)}}}function Of(t){let e,n=t[38]+"",s;return{c(){e=p("option"),s=S(n),g(e,"type","checkbox"),e.__value=t[38],e.value=e.__value},m(i,r){w(i,e,r),u(e,s)},p:ue,d(i){i&&b(e)}}}function Lf(t){let e,n=t[35]+"",s,i;return{c(){e=p("option"),s=S(n),i=S(" Rec\xE1maras"),g(e,"type","checkbox"),e.__value=t[35],e.value=e.__value},m(r,o){w(r,e,o),u(e,s),u(e,i)},p:ue,d(r){r&&b(e)}}}function Mf(t){let e,n=t[32]+"",s,i;return{c(){e=p("option"),s=S(n),i=S(" ba\xF1os"),g(e,"type","checkbox"),e.__value=t[32],e.value=e.__value},m(r,o){w(r,e,o),u(e,s),u(e,i)},p:ue,d(r){r&&b(e)}}}function $f(t){let e,n=t[29]+"",s,i;return{c(){e=p("option"),s=S(n),i=S(" Medios ba\xF1os"),g(e,"type","checkbox"),e.__value=t[29],e.value=e.__value},m(r,o){w(r,e,o),u(e,s),u(e,i)},p:ue,d(r){r&&b(e)}}}function Uf(t){let e,n=t[26]+"",s,i;return{c(){e=p("option"),s=S(n),i=S(" Estacionamientos"),g(e,"type","checkbox"),e.__value=t[26],e.value=e.__value},m(r,o){w(r,e,o),u(e,s),u(e,i)},p:ue,d(r){r&&b(e)}}}function RI(t){let e,n,s,i,r,o,a,l,c,h,f,d,m,_,v,y,E,T,P,D,F,K,N,Y,M,$,U;function H(O,L){return O[1]?DI:AI}let Q=H(t),Z=Q(t),G=t[2]&&If(t),z=t[0],X=[];for(let O=0;O<z.length;O+=1)X[O]=Cf(Tf(t,z,O));let W=t[2]&&Sf(t),C=t[2]&&Af(t);return{c(){e=p("h1"),e.textContent="Alta Contactos",n=k(),s=p("div"),i=p("div"),Z.c(),r=k(),o=p("div"),a=p("input"),l=k(),c=p("input"),h=k(),f=p("div"),d=p("input"),m=k(),G&&G.c(),_=k(),v=p("div"),y=p("select"),E=p("option"),E.textContent="Propiedad de Contacto";for(let O=0;O<X.length;O+=1)X[O].c();T=k(),W&&W.c(),P=k(),D=p("div"),F=p("input"),K=k(),C&&C.c(),N=k(),Y=p("button"),Y.textContent="Alta Detalles",g(e,"class","sectionTitle"),g(a,"class","dataInput svelte-1myljlf"),g(a,"type","text"),g(a,"placeholder","Nombre"),g(c,"class","dataInput svelte-1myljlf"),g(c,"type","text"),g(c,"placeholder","Apellido"),g(o,"class","contactInput"),g(d,"class","dataInput svelte-1myljlf"),g(d,"type","tel"),g(d,"placeholder","tel\xE9fono"),g(f,"class","contactInput"),g(s,"class",""),E.disabled=!0,E.selected=!0,E.__value="",E.value=E.__value,g(y,"class","dataInput svelte-1myljlf"),g(y,"id","selTP"),g(y,"name","selTP"),t[3].propCont===void 0&&xe(()=>t[11].call(y)),g(v,"class","col"),g(F,"class","textareaInput svelte-1myljlf"),g(F,"type","textarea"),g(F,"placeholder","Comentarios"),g(D,"class","col"),g(Y,"class","btn__save")},m(O,L){w(O,e,L),w(O,n,L),w(O,s,L),u(s,i),Z.m(i,null),u(s,r),u(s,o),u(o,a),de(a,t[3].name),u(o,l),u(o,c),de(c,t[3].lastname),u(s,h),u(s,f),u(f,d),de(d,t[3].telephon),u(f,m),G&&G.m(f,null),w(O,_,L),w(O,v,L),u(v,y),u(y,E);for(let A=0;A<X.length;A+=1)X[A].m(y,null);$e(y,t[3].propCont),u(v,T),W&&W.m(v,null),w(O,P,L),w(O,D,L),u(D,F),de(F,t[3].comContact),w(O,K,L),C&&C.m(O,L),w(O,N,L),w(O,Y,L),M=!0,$||(U=[j(a,"input",t[7]),j(c,"input",t[8]),j(d,"input",t[9]),j(y,"change",t[11]),j(F,"input",t[13]),j(Y,"click",t[5])],$=!0)},p(O,L){if(Q===(Q=H(O))&&Z?Z.p(O,L):(Z.d(1),Z=Q(O),Z&&(Z.c(),Z.m(i,null))),L[0]&9&&a.value!==O[3].name&&de(a,O[3].name),L[0]&9&&c.value!==O[3].lastname&&de(c,O[3].lastname),L[0]&9&&de(d,O[3].telephon),O[2]?G?G.p(O,L):(G=If(O),G.c(),G.m(f,null)):G&&(G.d(1),G=null),L[0]&1){z=O[0];let A;for(A=0;A<z.length;A+=1){const J=Tf(O,z,A);X[A]?X[A].p(J,L):(X[A]=Cf(J),X[A].c(),X[A].m(y,null))}for(;A<X.length;A+=1)X[A].d(1);X.length=z.length}L[0]&9&&$e(y,O[3].propCont),O[2]?W?W.p(O,L):(W=Sf(O),W.c(),W.m(v,null)):W&&(W.d(1),W=null),L[0]&9&&de(F,O[3].comContact),O[2]?C?(C.p(O,L),L[0]&4&&q(C,1)):(C=Af(O),C.c(),q(C,1),C.m(N.parentNode,N)):C&&(kt(),x(C,1,1,()=>{C=null}),Et())},i(O){M||(q(C),M=!0)},o(O){x(C),M=!1},d(O){O&&b(e),O&&b(n),O&&b(s),Z.d(),G&&G.d(),O&&b(_),O&&b(v),qe(X,O),W&&W.d(),O&&b(P),O&&b(D),O&&b(K),C&&C.d(O),O&&b(N),O&&b(Y),$=!1,Ye(U)}}}function PI(t,e,n){let s;Ue(t,Ze,Q=>n(3,s=Q));var i=[];let r=xn,o=!1,a=!1;(()=>{for(let Q of r){let Z=`${Q.nameProperty} ${Q.claveEB} - ${(Q.price/1e6).toFixed(2)}`;n(0,i=[...i,Z])}return n(0,i=i.sort())})();function l(){n(1,o=!0)}function c(){n(2,a=!0)}function h(){s.createdAt=this.value,Ze.set(s),n(0,i)}function f(){s.name=this.value,Ze.set(s),n(0,i)}function d(){s.lastname=this.value,Ze.set(s),n(0,i)}function m(){s.telephon=this.value,Ze.set(s),n(0,i)}function _(){s.email=this.value,Ze.set(s),n(0,i)}function v(){s.propCont=Vt(this),Ze.set(s),n(0,i)}function y(){s.budget=ps(this.value),Ze.set(s),n(0,i)}function E(){s.comContact=this.value,Ze.set(s),n(0,i)}function T(){s.typeContact=Vt(this),Ze.set(s),n(0,i)}function P(){s.selecMC=Vt(this),Ze.set(s),n(0,i)}function D(){s.modePay=Vt(this),Ze.set(s),n(0,i)}function F(){s.selecTP=Vt(this),Ze.set(s),n(0,i)}function K(){s.rangeProp=Vt(this),Ze.set(s),n(0,i)}function N(){s.numBeds=Vt(this),Ze.set(s),n(0,i)}function Y(){s.numBaths=Vt(this),Ze.set(s),n(0,i)}function M(){s.halfBathroom=Vt(this),Ze.set(s),n(0,i)}function $(){s.numParks=Vt(this),Ze.set(s),n(0,i)}function U(Q){t.$$.not_equal(s.locaProperty,Q)&&(s.locaProperty=Q,Ze.set(s))}function H(Q){t.$$.not_equal(s.tagsProperty,Q)&&(s.tagsProperty=Q,Ze.set(s))}return[i,o,a,s,l,c,h,f,d,m,_,v,y,E,T,P,D,F,K,N,Y,M,$,U,H]}class NI extends Qe{constructor(e){super(),We(this,e,PI,RI,He,{},null,[-1,-1])}}function Ff(t,e,n){const s=t.slice();return s[24]=e[n],s}function Vf(t,e,n){const s=t.slice();return s[27]=e[n],s}function Bf(t,e,n){const s=t.slice();return s[30]=e[n],s}function jf(t,e,n){const s=t.slice();return s[33]=e[n],s}function qf(t,e,n){const s=t.slice();return s[36]=e[n],s}function Hf(t,e,n){const s=t.slice();return s[39]=e[n],s}function Kf(t,e,n){const s=t.slice();return s[42]=e[n],s}function OI(t){let e,n=Kt(t[1].createdAt)+"",s,i,r;return{c(){e=p("h3"),s=S(n),g(e,"class","dataInput")},m(o,a){w(o,e,a),u(e,s),i||(r=j(e,"dblclick",t[3]),i=!0)},p(o,a){a[0]&2&&n!==(n=Kt(o[1].createdAt)+"")&&ie(s,n)},d(o){o&&b(e),i=!1,r()}}}function LI(t){let e,n,s;return{c(){e=p("input"),g(e,"class","dataInput"),g(e,"type","date")},m(i,r){w(i,e,r),de(e,t[1].createdAt),n||(s=j(e,"input",t[4]),n=!0)},p(i,r){r[0]&2&&de(e,i[1].createdAt)},d(i){i&&b(e),n=!1,s()}}}function zf(t){let e,n=t[42]+"",s;return{c(){e=p("option"),s=S(n),g(e,"type","checkbox"),e.__value=t[42],e.value=e.__value},m(i,r){w(i,e,r),u(e,s)},p:ue,d(i){i&&b(e)}}}function Gf(t){let e,n=t[39]+"",s,i;return{c(){e=p("option"),s=S(n),i=k(),g(e,"type","checkbox"),e.__value=t[39],e.value=e.__value},m(r,o){w(r,e,o),u(e,s),u(e,i)},p:ue,d(r){r&&b(e)}}}function Wf(t){let e,n=t[36]+"",s,i;return{c(){e=p("option"),s=S(n),i=S(" Rec\xE1maras"),g(e,"type","checkbox"),e.__value=t[36],e.value=e.__value},m(r,o){w(r,e,o),u(e,s),u(e,i)},p:ue,d(r){r&&b(e)}}}function Qf(t){let e,n=t[33]+"",s,i;return{c(){e=p("option"),s=S(n),i=S(" ba\xF1os"),g(e,"type","checkbox"),e.__value=t[33],e.value=e.__value},m(r,o){w(r,e,o),u(e,s),u(e,i)},p:ue,d(r){r&&b(e)}}}function Yf(t){let e,n=t[30]+"",s,i;return{c(){e=p("option"),s=S(n),i=S(" Medios ba\xF1os"),g(e,"type","checkbox"),e.__value=t[30],e.value=e.__value},m(r,o){w(r,e,o),u(e,s),u(e,i)},p:ue,d(r){r&&b(e)}}}function xf(t){let e,n=t[27]+"",s,i;return{c(){e=p("option"),s=S(n),i=S(" Estacionamientos"),g(e,"type","checkbox"),e.__value=t[27],e.value=e.__value},m(r,o){w(r,e,o),u(e,s),u(e,i)},p:ue,d(r){r&&b(e)}}}function Xf(t){let e,n=t[24]+"",s;return{c(){e=p("option"),s=S(n),g(e,"type","checkbox"),e.__value=t[24],e.value=e.__value},m(i,r){w(i,e,r),u(e,s)},p:ue,d(i){i&&b(e)}}}function MI(t){let e,n,s,i,r,o,a,l,c,h,f,d,m,_,v,y,E,T,P,D,F,K,N,Y,M,$,U,H,Q,Z,G,z,X,W,C,O,L,A,J,oe,Se,me,at,ge,Pe,Ne,dt,V,re,Ke,Dt,Le,ht,Fe,rn,ft,pt,Ut,R,ae,_e,rt,B,we,mt,on,lt,Vn,an,gt,Cn,Sn,ln,An;function Dn(I,se){if(I[0])return LI;if(I[2]==="propEditing")return OI}let en=Dn(t),Ve=en&&en(t),tn=jo,Be=[];for(let I=0;I<tn.length;I+=1)Be[I]=zf(Kf(t,tn,I));let Ae=ff,Ie=[];for(let I=0;I<Ae.length;I+=1)Ie[I]=Gf(Hf(t,Ae,I));let Bn=qo,_t=[];for(let I=0;I<Bn.length;I+=1)_t[I]=Wf(qf(t,Bn,I));let jn=wn,Ft=[];for(let I=0;I<jn.length;I+=1)Ft[I]=Qf(jf(t,jn,I));let Rn=wn,vt=[];for(let I=0;I<Rn.length;I+=1)vt[I]=Yf(Bf(t,Rn,I));let qn=wn,yt=[];for(let I=0;I<qn.length;I+=1)yt[I]=xf(Vf(t,qn,I));let yn=pf,tt=[];for(let I=0;I<yn.length;I+=1)tt[I]=Xf(Ff(t,yn,I));function Kr(I){t[22](I)}let os={};t[1].locaProperty!==void 0&&(os.ubication=t[1].locaProperty),lt=new D_({props:os}),Xn.push(()=>Bs(lt,"ubication",Kr));function Ds(I){t[23](I)}let Ri={};return t[1].tagsProperty!==void 0&&(Ri.tag=t[1].tagsProperty),gt=new R_({props:Ri}),Xn.push(()=>Bs(gt,"tag",Ds)),{c(){e=p("div"),Ve&&Ve.c(),n=k(),s=p("select"),i=p("option"),i.textContent="Tipo de Propiedad";for(let I=0;I<Be.length;I+=1)Be[I].c();r=k(),o=p("label"),o.innerHTML=`Titulo
       <input type="text"/>`,a=k(),l=p("label"),c=S(`Colonia\r
        `),h=p("input"),f=k(),d=p("label"),m=S(`Nombre de la Propiead\r
        `),_=p("input"),v=k(),y=p("label"),E=S(`Clave EB\r
        `),T=p("input"),P=k(),D=p("label"),F=S(`Clave MH\r
        `),K=p("input"),N=k(),Y=p("div"),M=p("textarea"),$=k(),U=p("select"),H=p("option"),H.textContent="Tipo de Operaci\xF3n";for(let I=0;I<Ie.length;I+=1)Ie[I].c();Q=k(),Z=p("select"),G=p("option"),G.textContent="# Rec\xE1maras";for(let I=0;I<_t.length;I+=1)_t[I].c();z=k(),X=p("select"),W=p("option"),W.textContent="# Ba\xF1os";for(let I=0;I<Ft.length;I+=1)Ft[I].c();C=k(),O=p("select"),L=p("option"),L.textContent="# Medios Ba\xF1os";for(let I=0;I<vt.length;I+=1)vt[I].c();A=k(),J=p("select"),oe=p("option"),oe.textContent="# Estacionamientos";for(let I=0;I<yt.length;I+=1)yt[I].c();Se=k(),me=p("label"),at=S(`Area de Construcci\xF3n\r
            `),ge=p("input"),Pe=k(),Ne=p("label"),dt=S(`Area de Terreno\r
            `),V=p("input"),re=k(),Ke=p("label"),Dt=S(`Precio\r
            `),Le=p("input"),ht=k(),Fe=p("label"),rn=S(`Link Imgen\r
        `),ft=p("input"),pt=k(),Ut=p("label"),R=S(`Link de la Propiedad\r
        `),ae=p("input"),_e=k(),rt=p("label"),rt.innerHTML=`Propietario
            <input type="text"/>`,B=k(),we=p("select"),mt=p("option"),mt.textContent="Tipo de Encargado";for(let I=0;I<tt.length;I+=1)tt[I].c();on=k(),he(lt.$$.fragment),an=k(),he(gt.$$.fragment),i.disabled=!0,i.selected=!0,i.__value="",i.value=i.__value,g(s,"class","selTP"),g(s,"id","selTP"),g(s,"name","selTP"),t[1].selecTP===void 0&&xe(()=>t[5].call(s)),g(h,"type","text"),g(_,"type","text"),g(T,"type","text"),g(K,"type","text"),g(M,"placeholder","Comentarios"),g(M,"cols","65"),g(M,"rows","5"),g(M,"class","form-control"),g(Y,"class","col"),H.disabled=!0,H.selected=!0,H.__value="",H.value=H.__value,t[1].typeOperation===void 0&&xe(()=>t[11].call(U)),G.disabled=!0,G.selected=!0,G.__value="",G.value=G.__value,t[1].beds===void 0&&xe(()=>t[12].call(Z)),W.disabled=!0,W.selected=!0,W.__value="",W.value=W.__value,t[1].bathroom===void 0&&xe(()=>t[13].call(X)),L.disabled=!0,L.selected=!0,L.__value="",L.value=L.__value,t[1].halfBathroom===void 0&&xe(()=>t[14].call(O)),oe.disabled=!0,oe.selected=!0,oe.__value="",oe.value=oe.__value,t[1].park===void 0&&xe(()=>t[15].call(J)),g(ge,"type","number"),g(V,"type","number"),g(Le,"type","number"),g(ft,"type","text"),g(ae,"type","text"),mt.disabled=!0,mt.selected=!0,mt.__value="",mt.value=mt.__value,g(we,"name","typeSaller"),t[1].typeSaller===void 0&&xe(()=>t[21].call(we))},m(I,se){w(I,e,se),Ve&&Ve.m(e,null),w(I,n,se),w(I,s,se),u(s,i);for(let Re=0;Re<Be.length;Re+=1)Be[Re].m(s,null);$e(s,t[1].selecTP),w(I,r,se),w(I,o,se),w(I,a,se),w(I,l,se),u(l,c),u(l,h),de(h,t[1].colonia),w(I,f,se),w(I,d,se),u(d,m),u(d,_),de(_,t[1].nameProperty),w(I,v,se),w(I,y,se),u(y,E),u(y,T),de(T,t[1].claveEB),w(I,P,se),w(I,D,se),u(D,F),u(D,K),de(K,t[1].claveMH),w(I,N,se),w(I,Y,se),u(Y,M),de(M,t[1].description),w(I,$,se),w(I,U,se),u(U,H);for(let Re=0;Re<Ie.length;Re+=1)Ie[Re].m(U,null);$e(U,t[1].typeOperation),w(I,Q,se),w(I,Z,se),u(Z,G);for(let Re=0;Re<_t.length;Re+=1)_t[Re].m(Z,null);$e(Z,t[1].beds),w(I,z,se),w(I,X,se),u(X,W);for(let Re=0;Re<Ft.length;Re+=1)Ft[Re].m(X,null);$e(X,t[1].bathroom),w(I,C,se),w(I,O,se),u(O,L);for(let Re=0;Re<vt.length;Re+=1)vt[Re].m(O,null);$e(O,t[1].halfBathroom),w(I,A,se),w(I,J,se),u(J,oe);for(let Re=0;Re<yt.length;Re+=1)yt[Re].m(J,null);$e(J,t[1].park),w(I,Se,se),w(I,me,se),u(me,at),u(me,ge),de(ge,t[1].areaBuilding),w(I,Pe,se),w(I,Ne,se),u(Ne,dt),u(Ne,V),de(V,t[1].areaTotal),w(I,re,se),w(I,Ke,se),u(Ke,Dt),u(Ke,Le),de(Le,t[1].price),w(I,ht,se),w(I,Fe,se),u(Fe,rn),u(Fe,ft),de(ft,t[1].urlImage),w(I,pt,se),w(I,Ut,se),u(Ut,R),u(Ut,ae),de(ae,t[1].urlProp),w(I,_e,se),w(I,rt,se),w(I,B,se),w(I,we,se),u(we,mt);for(let Re=0;Re<tt.length;Re+=1)tt[Re].m(we,null);$e(we,t[1].typeSaller),w(I,on,se),le(lt,I,se),w(I,an,se),le(gt,I,se),Sn=!0,ln||(An=[j(s,"change",t[5]),j(h,"input",t[6]),j(_,"input",t[7]),j(T,"input",t[8]),j(K,"input",t[9]),j(M,"input",t[10]),j(U,"change",t[11]),j(Z,"change",t[12]),j(X,"change",t[13]),j(O,"change",t[14]),j(J,"change",t[15]),j(ge,"input",t[16]),j(V,"input",t[17]),j(Le,"input",t[18]),j(ft,"input",t[19]),j(ae,"input",t[20]),j(we,"change",t[21])],ln=!0)},p(I,se){if(en===(en=Dn(I))&&Ve?Ve.p(I,se):(Ve&&Ve.d(1),Ve=en&&en(I),Ve&&(Ve.c(),Ve.m(e,null))),se&0){tn=jo;let ee;for(ee=0;ee<tn.length;ee+=1){const ot=Kf(I,tn,ee);Be[ee]?Be[ee].p(ot,se):(Be[ee]=zf(ot),Be[ee].c(),Be[ee].m(s,null))}for(;ee<Be.length;ee+=1)Be[ee].d(1);Be.length=tn.length}if(se[0]&2&&$e(s,I[1].selecTP),se[0]&2&&h.value!==I[1].colonia&&de(h,I[1].colonia),se[0]&2&&_.value!==I[1].nameProperty&&de(_,I[1].nameProperty),se[0]&2&&T.value!==I[1].claveEB&&de(T,I[1].claveEB),se[0]&2&&K.value!==I[1].claveMH&&de(K,I[1].claveMH),se[0]&2&&de(M,I[1].description),se&0){Ae=ff;let ee;for(ee=0;ee<Ae.length;ee+=1){const ot=Hf(I,Ae,ee);Ie[ee]?Ie[ee].p(ot,se):(Ie[ee]=Gf(ot),Ie[ee].c(),Ie[ee].m(U,null))}for(;ee<Ie.length;ee+=1)Ie[ee].d(1);Ie.length=Ae.length}if(se[0]&2&&$e(U,I[1].typeOperation),se&0){Bn=qo;let ee;for(ee=0;ee<Bn.length;ee+=1){const ot=qf(I,Bn,ee);_t[ee]?_t[ee].p(ot,se):(_t[ee]=Wf(ot),_t[ee].c(),_t[ee].m(Z,null))}for(;ee<_t.length;ee+=1)_t[ee].d(1);_t.length=Bn.length}if(se[0]&2&&$e(Z,I[1].beds),se&0){jn=wn;let ee;for(ee=0;ee<jn.length;ee+=1){const ot=jf(I,jn,ee);Ft[ee]?Ft[ee].p(ot,se):(Ft[ee]=Qf(ot),Ft[ee].c(),Ft[ee].m(X,null))}for(;ee<Ft.length;ee+=1)Ft[ee].d(1);Ft.length=jn.length}if(se[0]&2&&$e(X,I[1].bathroom),se&0){Rn=wn;let ee;for(ee=0;ee<Rn.length;ee+=1){const ot=Bf(I,Rn,ee);vt[ee]?vt[ee].p(ot,se):(vt[ee]=Yf(ot),vt[ee].c(),vt[ee].m(O,null))}for(;ee<vt.length;ee+=1)vt[ee].d(1);vt.length=Rn.length}if(se[0]&2&&$e(O,I[1].halfBathroom),se&0){qn=wn;let ee;for(ee=0;ee<qn.length;ee+=1){const ot=Vf(I,qn,ee);yt[ee]?yt[ee].p(ot,se):(yt[ee]=xf(ot),yt[ee].c(),yt[ee].m(J,null))}for(;ee<yt.length;ee+=1)yt[ee].d(1);yt.length=qn.length}if(se[0]&2&&$e(J,I[1].park),se[0]&2&&ps(ge.value)!==I[1].areaBuilding&&de(ge,I[1].areaBuilding),se[0]&2&&ps(V.value)!==I[1].areaTotal&&de(V,I[1].areaTotal),se[0]&2&&ps(Le.value)!==I[1].price&&de(Le,I[1].price),se[0]&2&&ft.value!==I[1].urlImage&&de(ft,I[1].urlImage),se[0]&2&&ae.value!==I[1].urlProp&&de(ae,I[1].urlProp),se&0){yn=pf;let ee;for(ee=0;ee<yn.length;ee+=1){const ot=Ff(I,yn,ee);tt[ee]?tt[ee].p(ot,se):(tt[ee]=Xf(ot),tt[ee].c(),tt[ee].m(we,null))}for(;ee<tt.length;ee+=1)tt[ee].d(1);tt.length=yn.length}se[0]&2&&$e(we,I[1].typeSaller);const Re={};!Vn&&se[0]&2&&(Vn=!0,Re.ubication=I[1].locaProperty,Vs(()=>Vn=!1)),lt.$set(Re);const Hn={};!Cn&&se[0]&2&&(Cn=!0,Hn.tag=I[1].tagsProperty,Vs(()=>Cn=!1)),gt.$set(Hn)},i(I){Sn||(q(lt.$$.fragment,I),q(gt.$$.fragment,I),Sn=!0)},o(I){x(lt.$$.fragment,I),x(gt.$$.fragment,I),Sn=!1},d(I){I&&b(e),Ve&&Ve.d(),I&&b(n),I&&b(s),qe(Be,I),I&&b(r),I&&b(o),I&&b(a),I&&b(l),I&&b(f),I&&b(d),I&&b(v),I&&b(y),I&&b(P),I&&b(D),I&&b(N),I&&b(Y),I&&b($),I&&b(U),qe(Ie,I),I&&b(Q),I&&b(Z),qe(_t,I),I&&b(z),I&&b(X),qe(Ft,I),I&&b(C),I&&b(O),qe(vt,I),I&&b(A),I&&b(J),qe(yt,I),I&&b(Se),I&&b(me),I&&b(Pe),I&&b(Ne),I&&b(re),I&&b(Ke),I&&b(ht),I&&b(Fe),I&&b(pt),I&&b(Ut),I&&b(_e),I&&b(rt),I&&b(B),I&&b(we),qe(tt,I),I&&b(on),ce(lt,I),I&&b(an),ce(gt,I),ln=!1,Ye(An)}}}function $I(t,e,n){let s,i;Ue(t,Je,U=>n(1,s=U)),Ue(t,it,U=>n(2,i=U));let r=!1;function o(){n(0,r=!0)}function a(){s.createdAt=this.value,Je.set(s)}function l(){s.selecTP=Vt(this),Je.set(s)}function c(){s.colonia=this.value,Je.set(s)}function h(){s.nameProperty=this.value,Je.set(s)}function f(){s.claveEB=this.value,Je.set(s)}function d(){s.claveMH=this.value,Je.set(s)}function m(){s.description=this.value,Je.set(s)}function _(){s.typeOperation=Vt(this),Je.set(s)}function v(){s.beds=Vt(this),Je.set(s)}function y(){s.bathroom=Vt(this),Je.set(s)}function E(){s.halfBathroom=Vt(this),Je.set(s)}function T(){s.park=Vt(this),Je.set(s)}function P(){s.areaBuilding=ps(this.value),Je.set(s)}function D(){s.areaTotal=ps(this.value),Je.set(s)}function F(){s.price=ps(this.value),Je.set(s)}function K(){s.urlImage=this.value,Je.set(s)}function N(){s.urlProp=this.value,Je.set(s)}function Y(){s.typeSaller=Vt(this),Je.set(s)}function M(U){t.$$.not_equal(s.locaProperty,U)&&(s.locaProperty=U,Je.set(s))}function $(U){t.$$.not_equal(s.tagsProperty,U)&&(s.tagsProperty=U,Je.set(s))}return[r,s,i,o,a,l,c,h,f,d,m,_,v,y,E,T,P,D,F,K,N,Y,M,$]}class UI extends Qe{constructor(e){super(),We(this,e,$I,MI,He,{},null,[-1,-1])}}function FI(t){let e;return{c(){e=S("Editar")},m(n,s){w(n,e,s)},d(n){n&&b(e)}}}function VI(t){let e;return{c(){e=S("Guardar")},m(n,s){w(n,e,s)},d(n){n&&b(e)}}}function BI(t){let e,n,s,i,r,o,a,l,c,h;n=new NI({});function f(_,v){return _[0]?FI:VI}let d=f(t),m=d(t);return{c(){e=p("div"),he(n.$$.fragment),s=k(),i=p("div"),r=p("button"),m.c(),o=k(),a=p("button"),a.textContent="Cancel",g(r,"class","btn__save"),g(a,"class","btn__cancel"),g(i,"class","contSavCan svelte-1at07r"),g(e,"class","altaContactos")},m(_,v){w(_,e,v),le(n,e,null),u(e,s),u(e,i),u(i,r),m.m(r,null),u(i,o),u(i,a),l=!0,c||(h=[j(r,"click",t[4]),j(a,"click",t[3])],c=!0)},p(_,[v]){d!==(d=f(_))&&(m.d(1),m=d(_),m&&(m.c(),m.m(r,null)))},i(_){l||(q(n.$$.fragment,_),l=!0)},o(_){x(n.$$.fragment,_),l=!1},d(_){_&&b(e),ce(n),m.d(),c=!1,Ye(h)}}}function jI(t,e,n){let s,i;Ue(t,it,f=>n(6,s=f)),Ue(t,Ze,f=>n(1,i=f));let r=!1,o;async function a(f){if(console.log(s),o=Date.now(),f={...f,createdAt:o},s!="contEditing"){const d=En(Tt,"contacts");await Us(d,f),Xe(it,s="binnAdding",s),l(s,f)}else await ba(ss(Tt,"contacts",f.id),f),l(s,f),n(0,r=!1);f=[],Xe(it,s="contSelect",s)}async function l(f,d){try{if(f==="binnAdding"){let m=`Se le agreg\xF3 a: ${d.name} ${d.lastname} del ${d.telephon}`,_={date:Date.now(),comment:m};console.log(f,_);const v=En(Tt,"binnacles");await Us(v,_)}else{let m=`Se le edit\xF3 a: ${d.name} ${d.lastname} del ${d.telephon}`,_={date:Date.now(),comment:m};console.log(f,_);const v=En(Tt,"binnacles");await Us(v,_)}}catch(m){console.log("error",m)}}function c(){n(0,r=!0),location.href="/"}return[r,i,a,c,()=>a(i)]}class qI extends Qe{constructor(e){super(),We(this,e,jI,BI,He,{})}}const P_="/to-deploy-mh/assets/trash.2d1385a7.svg",N_="/to-deploy-mh/assets/edit.070633c4.svg";function Jf(t,e,n){const s=t.slice();return s[42]=e[n],s}function Zf(t,e,n){const s=t.slice();return s[45]=e[n],s}function ed(t){let e,n,s,i,r,o=t[8].name+"",a,l,c=t[8].lastname+"",h,f,d,m,_=Kt(t[8].createdAt)+"",v,y,E,T,P=t[8].selecTP+"",D,F,K=t[8].numBeds+"",N,Y,M=t[8].numBaths+"",$,U,H=t[8].numParks+"",Q,Z,G,z,X,W,C=t[8].budget+"",O,L,A,J=t[8].selecTP+"",oe,Se,me,at,ge,Pe=t[8].telephon+"",Ne,dt,V,re=t[8].email+"",Ke,Dt,Le,ht,Fe=t[8].tagsProperty.join(",  ")+"",rn,ft,pt,Ut,R=t[8].locaProperty.join(",  ")+"",ae,_e,rt,B,we,mt,on,lt,Vn,an,gt=t[8].contactStage+"",Cn,Sn,ln,An=t[8].comContact+"",Dn,en,Ve,tn,Be,Ae,Ie,Bn,_t,jn,Ft,Rn,vt,qn,yt,yn,tt,Kr,os,Ds,Ri,I,se,Re,Hn,ee,ot,Zs,ru,Ia,Pi,It,Ca,ou,ei=t[8].sendedProperties,cn=[];for(let ve=0;ve<ei.length;ve+=1)cn[ve]=td(Zf(t,ei,ve));let un=t[0]&&nd(t),Rt=t[2]&&sd(t),Pt=t[7]&&id(t),Nt=t[6]&&rd(t);return{c(){e=p("div"),n=p("div"),s=p("h4"),s.textContent="Contacto",i=k(),r=p("h2"),a=S(o),l=k(),h=S(c),f=k(),d=p("p"),m=S("Fecha Alta: "),v=S(_),y=k(),E=p("p"),T=S("Busca  "),D=S(P),F=S(", de "),N=S(K),Y=S(" rec\xE1maras,  "),$=S(M),U=S(" ba\xF1os y "),Q=S(H),Z=S(" estacionamientos"),G=k(),z=p("p"),X=S("Presupuesto tope: "),W=p("strong"),O=S(C),L=S(" : Tipo de propiedad buscada: "),A=p("strong"),oe=S(J),Se=k(),me=p("p"),at=S("Tel\xE9fono: "),ge=p("strong"),Ne=S(Pe),dt=S(" ---- Email: "),V=p("strong"),Ke=S(re),Dt=k(),Le=p("p"),ht=S("Preferencias: "),rn=S(Fe),ft=k(),pt=p("p"),Ut=S("Ubicaciones: "),ae=S(R),_e=k(),rt=p("div"),B=p("p"),B.textContent="Propiedades enviadas:",we=k(),mt=p("div");for(let ve=0;ve<cn.length;ve+=1)cn[ve].c();on=k(),lt=p("div"),un&&un.c(),Vn=k(),an=p("p"),Cn=S(gt),Sn=k(),ln=p("p"),Dn=S(An),en=k(),Ve=p("div"),tn=p("button"),tn.textContent="Programar Evento",Be=k(),Rt&&Rt.c(),Ae=k(),Ie=p("button"),Ie.textContent="Ver Propiedades de Interes",Bn=k(),_t=p("button"),_t.textContent="Buscar Propiedad",jn=k(),Pt&&Pt.c(),Ft=k(),Rn=p("div"),vt=p("button"),vt.textContent="Cancelar",qn=k(),yt=p("div"),yn=p("div"),tt=p("textarea"),Kr=k(),os=p("div"),Ds=p("button"),Ds.textContent="Enviar WhatsApp",Ri=k(),I=p("button"),I.textContent="Guardar Info",se=k(),Re=p("div"),Hn=p("img"),ot=k(),Zs=p("img"),Ia=k(),Nt&&Nt.c(),Pi=sn(),g(mt,"class","mostImage svelte-ce274g"),g(rt,"class","propMost"),g(tn,"class","btnCommon"),g(Ie,"class","btnCommon"),g(_t,"class","btnCommon"),g(vt,"class","btn__cancel"),g(tt,"class","texArea"),g(tt,"cols","65"),g(tt,"rows","5"),g(tt,"placeholder","Ingresa un comentario"),g(Ds,"class","btnCommon btnWhatsApp"),g(I,"class","btnCommon"),ct(Hn.src,ee=N_)||g(Hn,"src",ee),g(Hn,"alt","delete"),ct(Zs.src,ru=P_)||g(Zs,"src",ru),g(Zs,"alt","delete"),g(Re,"class","icon__Content"),g(e,"class","container")},m(ve,ze){w(ve,e,ze),u(e,n),u(n,s),u(n,i),u(n,r),u(r,a),u(r,l),u(r,h),u(n,f),u(n,d),u(d,m),u(d,v),u(n,y),u(n,E),u(E,T),u(E,D),u(E,F),u(E,N),u(E,Y),u(E,$),u(E,U),u(E,Q),u(E,Z),u(n,G),u(n,z),u(z,X),u(z,W),u(W,O),u(z,L),u(z,A),u(A,oe),u(n,Se),u(n,me),u(me,at),u(me,ge),u(ge,Ne),u(me,dt),u(me,V),u(V,Ke),u(n,Dt),u(n,Le),u(Le,ht),u(Le,rn),u(n,ft),u(n,pt),u(pt,Ut),u(pt,ae),u(n,_e),u(n,rt),u(rt,B),u(rt,we),u(rt,mt);for(let Gt=0;Gt<cn.length;Gt+=1)cn[Gt].m(mt,null);u(e,on),u(e,lt),un&&un.m(lt,null),u(e,Vn),u(e,an),u(an,Cn),u(e,Sn),u(e,ln),u(ln,Dn),u(e,en),u(e,Ve),u(Ve,tn),u(Ve,Be),Rt&&Rt.m(Ve,null),u(Ve,Ae),u(Ve,Ie),u(Ve,Bn),u(Ve,_t),u(Ve,jn),Pt&&Pt.m(Ve,null),u(e,Ft),u(e,Rn),u(Rn,vt),u(e,qn),u(e,yt),u(yt,yn),u(yn,tt),de(tt,t[4]),u(yn,Kr),u(yn,os),u(os,Ds),u(os,Ri),u(os,I),u(yt,se),u(yt,Re),u(Re,Hn),u(Re,ot),u(Re,Zs),w(ve,Ia,ze),Nt&&Nt.m(ve,ze),w(ve,Pi,ze),It=!0,Ca||(ou=[j(tn,"click",t[27]),j(Ie,"click",t[28]),j(_t,"click",t[14]),j(vt,"click",t[17]),j(tt,"keypress",t[18]),j(tt,"input",t[30]),j(Ds,"click",t[23]),j(I,"click",t[24]),j(Hn,"click",t[19]),j(Zs,"click",t[20])],Ca=!0)},p(ve,ze){if((!It||ze[0]&256)&&o!==(o=ve[8].name+"")&&ie(a,o),(!It||ze[0]&256)&&c!==(c=ve[8].lastname+"")&&ie(h,c),(!It||ze[0]&256)&&_!==(_=Kt(ve[8].createdAt)+"")&&ie(v,_),(!It||ze[0]&256)&&P!==(P=ve[8].selecTP+"")&&ie(D,P),(!It||ze[0]&256)&&K!==(K=ve[8].numBeds+"")&&ie(N,K),(!It||ze[0]&256)&&M!==(M=ve[8].numBaths+"")&&ie($,M),(!It||ze[0]&256)&&H!==(H=ve[8].numParks+"")&&ie(Q,H),(!It||ze[0]&256)&&C!==(C=ve[8].budget+"")&&ie(O,C),(!It||ze[0]&256)&&J!==(J=ve[8].selecTP+"")&&ie(oe,J),(!It||ze[0]&256)&&Pe!==(Pe=ve[8].telephon+"")&&ie(Ne,Pe),(!It||ze[0]&256)&&re!==(re=ve[8].email+"")&&ie(Ke,re),(!It||ze[0]&256)&&Fe!==(Fe=ve[8].tagsProperty.join(",  ")+"")&&ie(rn,Fe),(!It||ze[0]&256)&&R!==(R=ve[8].locaProperty.join(",  ")+"")&&ie(ae,R),ze[0]&6402){ei=ve[8].sendedProperties;let Gt;for(Gt=0;Gt<ei.length;Gt+=1){const au=Zf(ve,ei,Gt);cn[Gt]?cn[Gt].p(au,ze):(cn[Gt]=td(au),cn[Gt].c(),cn[Gt].m(mt,null))}for(;Gt<cn.length;Gt+=1)cn[Gt].d(1);cn.length=ei.length}ve[0]?un?un.p(ve,ze):(un=nd(ve),un.c(),un.m(lt,null)):un&&(un.d(1),un=null),(!It||ze[0]&256)&&gt!==(gt=ve[8].contactStage+"")&&ie(Cn,gt),(!It||ze[0]&256)&&An!==(An=ve[8].comContact+"")&&ie(Dn,An),ve[2]?Rt?(Rt.p(ve,ze),ze[0]&4&&q(Rt,1)):(Rt=sd(ve),Rt.c(),q(Rt,1),Rt.m(Ve,Ae)):Rt&&(kt(),x(Rt,1,1,()=>{Rt=null}),Et()),ve[7]?Pt?(Pt.p(ve,ze),ze[0]&128&&q(Pt,1)):(Pt=id(ve),Pt.c(),q(Pt,1),Pt.m(Ve,null)):Pt&&(kt(),x(Pt,1,1,()=>{Pt=null}),Et()),ze[0]&16&&de(tt,ve[4]),ve[6]?Nt?(Nt.p(ve,ze),ze[0]&64&&q(Nt,1)):(Nt=rd(ve),Nt.c(),q(Nt,1),Nt.m(Pi.parentNode,Pi)):Nt&&(kt(),x(Nt,1,1,()=>{Nt=null}),Et())},i(ve){It||(q(Rt),q(Pt),q(Nt),It=!0)},o(ve){x(Rt),x(Pt),x(Nt),It=!1},d(ve){ve&&b(e),qe(cn,ve),un&&un.d(),Rt&&Rt.d(),Pt&&Pt.d(),ve&&b(Ia),Nt&&Nt.d(ve),ve&&b(Pi),Ca=!1,Ye(ou)}}}function td(t){let e,n=t[45]+"",s,i,r,o;function a(){return t[25](t[45])}return{c(){e=p("p"),s=S(n),g(e,"value",i=t[45])},m(l,c){w(l,e,c),u(e,s),r||(o=[j(e,"mouseenter",a),j(e,"mouseout",t[12]),j(e,"dblclick",t[26])],r=!0)},p(l,c){t=l,c[0]&256&&n!==(n=t[45]+"")&&ie(s,n),c[0]&256&&i!==(i=t[45])&&g(e,"value",i)},d(l){l&&b(e),r=!1,Ye(o)}}}function nd(t){let e,n=t[1][0].nameProperty+"",s,i,r,o,a;return{c(){e=p("h3"),s=S(n),i=k(),r=p("img"),g(e,"class","svelte-ce274g"),g(r,"class","imgPropContSelect"),g(r,"height","200"),ct(r.src,o=t[1][0].urlImage)||g(r,"src",o),g(r,"alt",a=t[1][0].claveEB)},m(l,c){w(l,e,c),u(e,s),w(l,i,c),w(l,r,c)},p(l,c){c[0]&2&&n!==(n=l[1][0].nameProperty+"")&&ie(s,n),c[0]&2&&!ct(r.src,o=l[1][0].urlImage)&&g(r,"src",o),c[0]&2&&a!==(a=l[1][0].claveEB)&&g(r,"alt",a)},d(l){l&&b(e),l&&b(i),l&&b(r)}}}function sd(t){let e,n;const s=[t[8]];let i={};for(let r=0;r<s.length;r+=1)i=Mt(i,s[r]);return e=new bI({props:i}),e.$on("closeIt",t[21]),{c(){he(e.$$.fragment)},m(r,o){le(e,r,o),n=!0},p(r,o){const a=o[0]&256?_n(s,[Jn(r[8])]):{};e.$set(a)},i(r){n||(q(e.$$.fragment,r),n=!0)},o(r){x(e.$$.fragment,r),n=!1},d(r){ce(e,r)}}}function id(t){let e,n,s;function i(o){t[29](o)}let r={};return t[3]!==void 0&&(r.searchTerm=t[3]),e=new iu({props:r}),Xn.push(()=>Bs(e,"searchTerm",i)),e.$on("input",t[15]),{c(){he(e.$$.fragment)},m(o,a){le(e,o,a),s=!0},p(o,a){const l={};!n&&a[0]&8&&(n=!0,l.searchTerm=o[3],Vs(()=>n=!1)),e.$set(l)},i(o){s||(q(e.$$.fragment,o),s=!0)},o(o){x(e.$$.fragment,o),s=!1},d(o){ce(e,o)}}}function rd(t){let e,n,s,i=t[10].length+"",r,o,a,l,c=t[10],h=[];for(let m=0;m<c.length;m+=1)h[m]=od(Jf(t,c,m));const f=m=>x(h[m],1,1,()=>{h[m]=null});let d=t[10].length===0&&ad();return{c(){e=p("main"),n=p("h3"),s=S("Propiedades encontradas: "),r=S(i),o=k();for(let m=0;m<h.length;m+=1)h[m].c();a=k(),d&&d.c(),g(n,"class","svelte-ce274g"),g(e,"id","bookshelf"),g(e,"class","svelte-ce274g")},m(m,_){w(m,e,_),u(e,n),u(n,s),u(n,r),u(e,o);for(let v=0;v<h.length;v+=1)h[v].m(e,null);u(e,a),d&&d.m(e,null),l=!0},p(m,_){if((!l||_[0]&1024)&&i!==(i=m[10].length+"")&&ie(r,i),_[0]&4195360){c=m[10];let v;for(v=0;v<c.length;v+=1){const y=Jf(m,c,v);h[v]?(h[v].p(y,_),q(h[v],1)):(h[v]=od(y),h[v].c(),q(h[v],1),h[v].m(e,a))}for(kt(),v=c.length;v<h.length;v+=1)f(v);Et()}m[10].length===0?d||(d=ad(),d.c(),d.m(e,null)):d&&(d.d(1),d=null)},i(m){if(!l){for(let _=0;_<c.length;_+=1)q(h[_]);l=!0}},o(m){h=h.filter(Boolean);for(let _=0;_<h.length;_+=1)x(h[_]);l=!1},d(m){m&&b(e),qe(h,m),d&&d.d()}}}function od(t){let e,n,s,i,r,o,a,l,c;const h=[t[42]];let f={};for(let d=0;d<h.length;d+=1)f=Mt(f,h[d]);return r=new S_({props:f}),{c(){e=p("section"),n=p("input"),i=k(),he(r.$$.fragment),g(n,"type","checkbox"),n.__value=s=t[42].urlProp,n.value=n.__value,g(n,"class","form-check"),t[32][0].push(n),g(e,"class","property svelte-ce274g")},m(d,m){w(d,e,m),u(e,n),n.checked=~t[5].indexOf(n.__value),u(e,i),le(r,e,null),a=!0,l||(c=[j(n,"change",t[31]),j(e,"click",t[22])],l=!0)},p(d,m){t=d,(!a||m[0]&1024&&s!==(s=t[42].urlProp))&&(n.__value=s,n.value=n.__value),m[0]&32&&(n.checked=~t[5].indexOf(n.__value));const _=m[0]&1024?_n(h,[Jn(t[42])]):{};r.$set(_)},i(d){a||(q(r.$$.fragment,d),xe(()=>{o||(o=dn(e,Ei,{duration:500,easing:ki},!0)),o.run(1)}),a=!0)},o(d){x(r.$$.fragment,d),o||(o=dn(e,Ei,{duration:500,easing:ki},!1)),o.run(0),a=!1},d(d){d&&b(e),t[32][0].splice(t[32][0].indexOf(n),1),ce(r),d&&o&&o.end(),l=!1,Ye(c)}}}function ad(t){let e;return{c(){e=p("h3"),e.textContent='"No hay Propiedades para este contacto"',g(e,"class","svelte-ce274g")},m(n,s){w(n,e,s)},d(n){n&&b(e)}}}function HI(t){let e,n,s=t[9]==="contSelect"&&ed(t);return{c(){e=p("main"),s&&s.c()},m(i,r){w(i,e,r),s&&s.m(e,null),n=!0},p(i,r){i[9]==="contSelect"?s?(s.p(i,r),r[0]&512&&q(s,1)):(s=ed(i),s.c(),q(s,1),s.m(e,null)):s&&(kt(),x(s,1,1,()=>{s=null}),Et())},i(i){n||(q(s),n=!0)},o(i){x(s),n=!1},d(i){i&&b(e),s&&s.d()}}}function KI(t){window.open(t)}function zI(t,e,n){let s,i,r;Ue(t,Ze,A=>n(8,s=A)),Ue(t,it,A=>n(9,i=A)),Ue(t,$l,A=>n(10,r=A));const o=Ys();let a=!1,l,c=!1,h,f,d=[],m=!1,_=!1;console.log(i);function v(A){n(0,a=!0),n(1,l=xn.filter(J=>J.claveEB===A))}function y(){n(0,a=!1)}function E(){console.log("estas en addSchedule"),n(2,c=!0)}function T(){n(7,_=!0)}const P=()=>(n(6,m=!0),Xe($l,r=xn.filter(A=>(A.nameProperty+" "+A.colonia+" "+A.claveEB).toLowerCase().includes(h.toLowerCase())),r));function D(A){EI(A),n(6,m=!0)}const F=()=>{Xe(Ze,s=[],s),Xe(it,i="start",i)};function K(){}function N(){Xe(it,i="contEditing",i)}async function Y(){confirm("Deseas eleiminar definitivamente al contacto?")&&(await wa(ss(Tt,"contacts",s.id)),M(s),o("/"))}async function M(A){let J=`Se le elimin\xF3a: ${A.name} ${A.lastname} del ${A.telephon}`,oe={date:Date.now(),comment:J};console.log(i,oe);const Se=En(Tt,"binnacles");await Us(Se,oe)}function $(){n(2,c=!1)}function U(){console.log(d)}function H(){console.log(d);let A=`https://api.whatsapp.com/send?phone=52${s.telephon}&text=${d}`;window.open(A),C_()}function Q(){console.log(d)}const Z=[[]],G=A=>v(A),z=()=>KI(l[0].urlProp),X=()=>E(),W=()=>D(s);function C(A){h=A,n(3,h)}function O(){f=this.value,n(4,f)}function L(){d=Bt(Z[0],this.__value,this.checked),n(5,d)}return[a,l,c,h,f,d,m,_,s,i,r,v,y,E,T,P,D,F,K,N,Y,$,U,H,Q,G,z,X,W,C,O,L,Z]}class GI extends Qe{constructor(e){super(),We(this,e,zI,HI,He,{},null,[-1,-1])}}function ld(t,e,n){const s=t.slice();return s[22]=e[n],s[24]=n,s}function cd(t,e,n){const s=t.slice();return s[24]=e[n],s}function ud(t,e,n){const s=t.slice();return s[12]=e[n],s[24]=n,s}function hd(t){let e,n,s,i,r,o,a,l,c,h,f,d,m,_,v,y,E,T,P,D,F,K,N;function Y(C){t[14](C)}let M={};t[3]!==void 0&&(M.searchTerm=t[3]),r=new iu({props:M}),Xn.push(()=>Bs(r,"searchTerm",Y)),r.$on("input",t[11]);let $=t[1],U=[];for(let C=0;C<$.length;C+=1)U[C]=dd(ud(t,$,C));const H=C=>x(U[C],1,1,()=>{U[C]=null});let Q=t[0]>1&&pd(t),Z=[3,2,1],G=[];for(let C=0;C<3;C+=1)G[C]=gd(cd(t,Z,C));let z=Array(3),X=[];for(let C=0;C<z.length;C+=1)X[C]=vd(ld(t,z,C));let W=t[0]<t[5]&&yd(t);return{c(){e=p("h2"),e.textContent=`${dr.length} Contactos a Mostrar`,n=k(),s=p("button"),s.textContent="Alta de Contacto",i=k(),he(r.$$.fragment),a=k(),l=p("div"),c=p("main");for(let C=0;C<U.length;C+=1)U[C].c();h=k(),f=p("div"),d=p("div"),m=p("ul"),Q&&Q.c(),_=k();for(let C=0;C<3;C+=1)G[C].c();v=k(),y=p("li"),E=p("span"),T=S(t[0]),P=k();for(let C=0;C<X.length;C+=1)X[C].c();D=k(),W&&W.c(),g(s,"class","altaContacto svelte-152vhxc"),g(c,"id","bookshelf"),g(m,"class","pagi__options"),g(d,"class","pagi__Item"),g(f,"class","container pagination"),g(l,"class","mosPag container cont__card svelte-152vhxc")},m(C,O){w(C,e,O),w(C,n,O),w(C,s,O),w(C,i,O),le(r,C,O),w(C,a,O),w(C,l,O),u(l,c);for(let L=0;L<U.length;L+=1)U[L].m(c,null);u(l,h),u(l,f),u(f,d),u(d,m),Q&&Q.m(m,null),u(m,_);for(let L=0;L<3;L+=1)G[L].m(m,null);u(m,v),u(m,y),u(y,E),u(E,T),u(m,P);for(let L=0;L<X.length;L+=1)X[L].m(m,null);u(m,D),W&&W.m(m,null),F=!0,K||(N=j(s,"click",t[9]),K=!0)},p(C,O){const L={};if(!o&&O&8&&(o=!0,L.searchTerm=C[3],Vs(()=>o=!1)),r.$set(L),O&1046){$=C[1];let A;for(A=0;A<$.length;A+=1){const J=ud(C,$,A);U[A]?(U[A].p(J,O),q(U[A],1)):(U[A]=dd(J),U[A].c(),q(U[A],1),U[A].m(c,null))}for(kt(),A=$.length;A<U.length;A+=1)H(A);Et()}if(C[0]>1?Q?Q.p(C,O):(Q=pd(C),Q.c(),Q.m(m,_)):Q&&(Q.d(1),Q=null),O&257){Z=[3,2,1];let A;for(A=0;A<3;A+=1){const J=cd(C,Z,A);G[A]?G[A].p(J,O):(G[A]=gd(J),G[A].c(),G[A].m(m,v))}for(;A<3;A+=1)G[A].d(1)}if((!F||O&1)&&ie(T,C[0]),O&289){z=Array(3);let A;for(A=0;A<z.length;A+=1){const J=ld(C,z,A);X[A]?X[A].p(J,O):(X[A]=vd(J),X[A].c(),X[A].m(m,D))}for(;A<X.length;A+=1)X[A].d(1);X.length=z.length}C[0]<C[5]?W?W.p(C,O):(W=yd(C),W.c(),W.m(m,null)):W&&(W.d(1),W=null)},i(C){if(!F){q(r.$$.fragment,C);for(let O=0;O<$.length;O+=1)q(U[O]);F=!0}},o(C){x(r.$$.fragment,C),U=U.filter(Boolean);for(let O=0;O<U.length;O+=1)x(U[O]);F=!1},d(C){C&&b(e),C&&b(n),C&&b(s),C&&b(i),ce(r,C),C&&b(a),C&&b(l),qe(U,C),Q&&Q.d(),qe(G,C),qe(X,C),W&&W.d(),K=!1,N()}}}function fd(t){let e,n,s,i,r,o,a;const l=[t[12]];let c={};for(let f=0;f<l.length;f+=1)c=Mt(c,l[f]);n=new mI({props:c});function h(){return t[15](t[12])}return{c(){e=p("div"),he(n.$$.fragment),s=k(),g(e,"class","selecContact")},m(f,d){w(f,e,d),le(n,e,null),u(e,s),r=!0,o||(a=j(e,"click",h),o=!0)},p(f,d){t=f;const m=d&2?_n(l,[Jn(t[12])]):{};n.$set(m)},i(f){r||(q(n.$$.fragment,f),xe(()=>{i||(i=dn(e,Ei,{duration:500,easing:ki},!0)),i.run(1)}),r=!0)},o(f){x(n.$$.fragment,f),i||(i=dn(e,Ei,{duration:500,easing:ki},!1)),i.run(0),r=!1},d(f){f&&b(e),ce(n),f&&i&&i.end(),o=!1,a()}}}function dd(t){let e,n,s=t[24]>=t[4]&&t[24]<t[2]&&fd(t);return{c(){s&&s.c(),e=sn()},m(i,r){s&&s.m(i,r),w(i,e,r),n=!0},p(i,r){i[24]>=i[4]&&i[24]<i[2]?s?(s.p(i,r),r&20&&q(s,1)):(s=fd(i),s.c(),q(s,1),s.m(e.parentNode,e)):s&&(kt(),x(s,1,1,()=>{s=null}),Et())},i(i){n||(q(s),n=!0)},o(i){x(s),n=!1},d(i){s&&s.d(i),i&&b(e)}}}function pd(t){let e,n,s,i,r,o,a,l,c;return{c(){e=p("li"),n=p("a"),n.textContent="first",s=k(),i=p("li"),r=p("a"),o=S("previous"),g(n,"href","/blog"),g(r,"href",a="/blog/"+(t[0]-1))},m(h,f){w(h,e,f),u(e,n),w(h,s,f),w(h,i,f),u(i,r),u(r,o),l||(c=[j(n,"click",gn(t[16])),j(r,"click",gn(t[17]))],l=!0)},p(h,f){f&1&&a!==(a="/blog/"+(h[0]-1))&&g(r,"href",a)},d(h){h&&b(e),h&&b(s),h&&b(i),l=!1,Ye(c)}}}function md(t){let e,n,s=t[0]-t[24]+"",i,r,o,a;function l(){return t[18](t[24])}return{c(){e=p("li"),n=p("a"),i=S(s),g(n,"href",r="/blog/"+(t[0]-t[24]))},m(c,h){w(c,e,h),u(e,n),u(n,i),o||(a=j(n,"click",gn(l)),o=!0)},p(c,h){t=c,h&1&&s!==(s=t[0]-t[24]+"")&&ie(i,s),h&1&&r!==(r="/blog/"+(t[0]-t[24]))&&g(n,"href",r)},d(c){c&&b(e),o=!1,a()}}}function gd(t){let e,n=t[0]-t[24]>0&&md(t);return{c(){n&&n.c(),e=sn()},m(s,i){n&&n.m(s,i),w(s,e,i)},p(s,i){s[0]-s[24]>0?n?n.p(s,i):(n=md(s),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(s){n&&n.d(s),s&&b(e)}}}function _d(t){let e,n,s=t[0]+(t[24]+1)+"",i,r,o,a;function l(){return t[19](t[24])}return{c(){e=p("li"),n=p("a"),i=S(s),g(n,"href",r="/blog/"+(t[0]+(t[24]+1)))},m(c,h){w(c,e,h),u(e,n),u(n,i),o||(a=j(n,"click",gn(l)),o=!0)},p(c,h){t=c,h&1&&s!==(s=t[0]+(t[24]+1)+"")&&ie(i,s),h&1&&r!==(r="/blog/"+(t[0]+(t[24]+1)))&&g(n,"href",r)},d(c){c&&b(e),o=!1,a()}}}function vd(t){let e,n=t[0]+(t[24]+1)<=t[5]&&_d(t);return{c(){n&&n.c(),e=sn()},m(s,i){n&&n.m(s,i),w(s,e,i)},p(s,i){s[0]+(s[24]+1)<=s[5]?n?n.p(s,i):(n=_d(s),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(s){n&&n.d(s),s&&b(e)}}}function yd(t){let e,n,s,i,r,o,a,l,c,h,f;return{c(){e=p("li"),n=p("a"),s=S("next"),r=k(),o=p("li"),a=p("a"),l=S("last"),g(n,"href",i="/blog/"+(t[0]+1)),g(a,"href",c="/blog/"+t[5])},m(d,m){w(d,e,m),u(e,n),u(n,s),w(d,r,m),w(d,o,m),u(o,a),u(a,l),h||(f=[j(n,"click",gn(t[20])),j(a,"click",gn(t[21]))],h=!0)},p(d,m){m&1&&i!==(i="/blog/"+(d[0]+1))&&g(n,"href",i),m&32&&c!==(c="/blog/"+d[5])&&g(a,"href",c)},d(d){d&&b(e),d&&b(r),d&&b(o),h=!1,Ye(f)}}}function bd(t){let e,n,s;return n=new GI({props:{$contact:t[7]}}),{c(){e=p("div"),he(n.$$.fragment)},m(i,r){w(i,e,r),le(n,e,null),s=!0},p(i,r){const o={};r&128&&(o.$contact=i[7]),n.$set(o)},i(i){s||(q(n.$$.fragment,i),s=!0)},o(i){x(n.$$.fragment,i),s=!1},d(i){i&&b(e),ce(n)}}}function wd(t){let e,n,s,i;const r=[t[7]];let o={};for(let a=0;a<r.length;a+=1)o=Mt(o,r[a]);return s=new qI({props:o}),{c(){e=p("div"),n=p("div"),he(s.$$.fragment),g(n,"class","container")},m(a,l){w(a,e,l),u(e,n),le(s,n,null),i=!0},p(a,l){const c=l&128?_n(r,[Jn(a[7])]):{};s.$set(c)},i(a){i||(q(s.$$.fragment,a),i=!0)},o(a){x(s.$$.fragment,a),i=!1},d(a){a&&b(e),ce(s)}}}function WI(t){let e,n,s,i,r,o,a,l,c,h,f=t[6]==="start"&&hd(t),d=t[6]==="contSelect"&&bd(t),m=(t[6]==="contEditing"||t[6]==="contAdding")&&wd(t);return{c(){e=p("main"),n=p("div"),s=p("h1"),s.textContent="Contactos",i=k(),r=p("img"),a=k(),f&&f.c(),l=k(),d&&d.c(),c=k(),m&&m.c(),ct(r.src,o=T_)||g(r,"src",o),g(r,"alt","contactos"),g(r,"class","svelte-152vhxc"),g(e,"class","container")},m(_,v){w(_,e,v),u(e,n),u(n,s),u(n,i),u(n,r),u(e,a),f&&f.m(e,null),u(e,l),d&&d.m(e,null),u(e,c),m&&m.m(e,null),h=!0},p(_,[v]){_[6]==="start"?f?(f.p(_,v),v&64&&q(f,1)):(f=hd(_),f.c(),q(f,1),f.m(e,l)):f&&(kt(),x(f,1,1,()=>{f=null}),Et()),_[6]==="contSelect"?d?(d.p(_,v),v&64&&q(d,1)):(d=bd(_),d.c(),q(d,1),d.m(e,c)):d&&(kt(),x(d,1,1,()=>{d=null}),Et()),_[6]==="contEditing"||_[6]==="contAdding"?m?(m.p(_,v),v&64&&q(m,1)):(m=wd(_),m.c(),q(m,1),m.m(e,null)):m&&(kt(),x(m,1,1,()=>{m=null}),Et())},i(_){h||(q(f),q(d),q(m),h=!0)},o(_){x(f),x(d),x(m),h=!1},d(_){_&&b(e),f&&f.d(),d&&d.d(),m&&m.d()}}}let Ja=15;function QI(t,e,n){let s,i,r,o,a,l;Ue(t,it,M=>n(6,a=M)),Ue(t,Ze,M=>n(7,l=M));let c;Xe(it,a="start",a);let h,f=1,d=[];const m=M=>{n(0,f=M)},_=()=>{Xe(it,a="contAdding",a)},v=M=>{n(3,c=""),Xe(Ze,l=M,l),Xe(it,a="contSelect",a)};function y(){return n(1,d=dr.filter(M=>(M.name+" "+M.lastname).toLowerCase().includes(c.toLowerCase())))}n(1,d=dr.sort((M,$)=>new Date(M.createdA)<new Date($.createdAt)?1:new Date(M.createdAt)>new Date($.createdAt)?-1:0));function E(M){c=M,n(3,c)}const T=M=>v(M),P=()=>m(1),D=()=>m(f-1),F=M=>m(f-M),K=M=>m(f+(M+1)),N=()=>m(f+1),Y=()=>m(i);return t.$$.update=()=>{t.$$.dirty&2&&n(13,s=d.length),t.$$.dirty&8192&&n(5,i=Math.ceil(s/Ja)),t.$$.dirty&1&&n(2,r=f*Ja),t.$$.dirty&4&&n(4,o=r-Ja)},[f,d,r,c,o,i,a,l,m,_,v,y,h,s,E,T,P,D,F,K,N,Y]}class YI extends Qe{constructor(e){super(),We(this,e,QI,WI,He,{})}}let ls=[],cs=[];function xI(t,e){e=e.filter(n=>n.selecTP===t.selectTP),t.numBeds>0&&(e=e.filter(n=>n.numBeds>=t.beds)),t.numBaths>0&&(e=e.filter(n=>n.numBaths>=t.bathroom)),t.numParks>0&&(e=e.filter(n=>n.numPark>=t.parks));try{e=e.filter(n=>{n.budget?ls=e.filter(s=>s.budget>=t.price*.7&&s.budget<=t.price*1.1):cs=e.filter(s=>s.rangeProp===A_(t.price))})}catch(n){console.log(n)}e=cs.concat(ls),ls=[],cs=[];try{e.filter(n=>{n.locaProperty.length>0?(ls=e.filter(s=>t.locaProperty.some(i=>s.locaProperty.includes(i))),console.log(t.locaProperty)):(cs=e.filter(s=>s.locaProperty.length===0),console.log(t.locaProperty))})}catch(n){console.log(n)}e=cs.concat(ls),ls=[],cs=[];try{e=e.filter(n=>{n.tagsProperty.length>0?ls=e.filter(s=>t.tagsProperty.some(i=>s.tagsProperty.includes(i))):cs=e.filter(s=>s.tagsProperty.length===0)})}catch(n){console.log(n)}return e=cs.concat(ls),console.log(e),E_.set(e)}function kd(t,e,n){const s=t.slice();return s[16]=e[n],s}function Ed(t){let e,n=t[2],s=[];for(let i=0;i<n.length;i+=1)s[i]=Td(kd(t,n,i));return{c(){for(let i=0;i<s.length;i+=1)s[i].c();e=sn()},m(i,r){for(let o=0;o<s.length;o+=1)s[o].m(i,r);w(i,e,r)},p(i,r){if(r&4){n=i[2];let o;for(o=0;o<n.length;o+=1){const a=kd(i,n,o);s[o]?s[o].p(a,r):(s[o]=Td(a),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(i){qe(s,i),i&&b(e)}}}function Td(t){let e,n,s,i,r=t[16].name+"",o,a,l=t[16].lastname+"",c,h,f,d=t[16].locaProperty+"",m,_,v,y=t[16].tagsProperty+"",E,T,P,D=t[16].budget+"",F,K,N,Y=t[16].rangeProp+"",M,$;return{c(){e=p("div"),n=p("input"),s=k(),i=p("div"),o=S(r),a=k(),c=S(l),h=k(),f=p("div"),m=S(d),_=k(),v=p("div"),E=S(y),T=k(),P=p("div"),F=S(D),K=k(),N=p("div"),M=S(Y),$=k(),g(n,"type","checkbox"),g(e,"class","conInt svelte-1s75tnf")},m(U,H){w(U,e,H),u(e,n),u(e,s),u(e,i),u(i,o),u(i,a),u(i,c),u(e,h),u(e,f),u(f,m),u(e,_),u(e,v),u(v,E),u(e,T),u(e,P),u(P,F),u(e,K),u(e,N),u(N,M),u(e,$)},p(U,H){H&4&&r!==(r=U[16].name+"")&&ie(o,r),H&4&&l!==(l=U[16].lastname+"")&&ie(c,l),H&4&&d!==(d=U[16].locaProperty+"")&&ie(m,d),H&4&&y!==(y=U[16].tagsProperty+"")&&ie(E,y),H&4&&D!==(D=U[16].budget+"")&&ie(F,D),H&4&&Y!==(Y=U[16].rangeProp+"")&&ie(M,Y)},d(U){U&&b(e)}}}function XI(t){let e,n,s,i,r,o,a,l,c,h=t[1].claveEB+"",f,d,m=t[1].nameProperty+"",_,v,y,E=t[1].selecTP+"",T,P,D=t[1].colonia+"",F,K,N=t[1].locaProperty+"",Y,M,$,U,H,Q=t[1].price+"",Z,G,z,X,W=t[1].beds+"",C,O,L=t[1].bathroom+"",A,J,oe=t[1].halfBathroom+"",Se,me,at,ge,Pe=t[1].areaBuilding+"",Ne,dt,V=t[1].areaTotal+"",re,Ke,Dt,Le,ht=t[1].description+"",Fe,rn,ft,pt,Ut,R,ae,_e,rt,B,we,mt,on,lt,Vn,an,gt,Cn,Sn,ln,An,Dn,en,Ve,tn,Be=t[0]&&Ed(t);return{c(){e=p("div"),n=p("div"),s=p("div"),i=p("img"),a=k(),l=p("div"),c=p("h4"),f=S(h),d=k(),_=S(m),v=k(),y=p("h5"),T=S(E),P=S(" en Col. "),F=S(D),K=S(" al "),Y=S(N),M=S(" de la ciudad."),$=k(),U=p("h6"),H=S("Precio: "),Z=S(Q),G=k(),z=p("div"),X=p("h6"),C=S(W),O=S(" Recamaras, "),A=S(L),J=S(" Ba\xF1os y "),Se=S(oe),me=S(" Medio Ba\xF1o"),at=k(),ge=p("h6"),Ne=S(Pe),dt=S(" m2 de construcci\xF3n y "),re=S(V),Ke=S(" m2 de terreno"),Dt=k(),Le=p("p"),Fe=S(ht),rn=k(),ft=p("div"),pt=p("a"),Ut=S("Seguir Link en Otra Ventana"),ae=k(),_e=p("div"),rt=p("button"),rt.textContent="Enviar por WhatsApp",B=k(),we=p("button"),we.textContent="Buscar Interesados",mt=k(),on=p("div"),lt=p("button"),lt.textContent="Regresar",Vn=k(),an=p("div"),gt=p("img"),Sn=k(),ln=p("img"),Dn=k(),Be&&Be.c(),en=sn(),ct(i.src,r=t[1].urlImage)||g(i,"src",r),g(i,"alt",o=t[1].nameProperty),g(s,"class","selectImage svelte-1s75tnf"),g(Le,"class","descSelec"),g(l,"class","descSelect"),g(pt,"href",R=t[1].urlProp),g(pt,"target","_blank"),g(ft,"class","folowLink"),g(rt,"class","btnCommon btnWhatsApp"),g(we,"class","btnCommon"),g(_e,"class","optionsSend"),g(lt,"class","btnCommon btnCancel"),g(on,"class","backAnt"),ct(gt.src,Cn=N_)||g(gt,"src",Cn),g(gt,"alt","delete"),ct(ln.src,An=P_)||g(ln,"src",An),g(ln,"alt","delete"),g(an,"class","icon__Content"),g(n,"class","sele__info svelte-1s75tnf"),g(e,"class","sele__Product svelte-1s75tnf")},m(Ae,Ie){w(Ae,e,Ie),u(e,n),u(n,s),u(s,i),u(n,a),u(n,l),u(l,c),u(c,f),u(c,d),u(c,_),u(l,v),u(l,y),u(y,T),u(y,P),u(y,F),u(y,K),u(y,Y),u(y,M),u(l,$),u(l,U),u(U,H),u(U,Z),u(l,G),u(l,z),u(z,X),u(X,C),u(X,O),u(X,A),u(X,J),u(X,Se),u(X,me),u(l,at),u(l,ge),u(ge,Ne),u(ge,dt),u(ge,re),u(ge,Ke),u(l,Dt),u(l,Le),u(Le,Fe),u(n,rn),u(n,ft),u(ft,pt),u(pt,Ut),u(n,ae),u(n,_e),u(_e,rt),u(_e,B),u(_e,we),u(n,mt),u(n,on),u(on,lt),u(n,Vn),u(n,an),u(an,gt),u(an,Sn),u(an,ln),w(Ae,Dn,Ie),Be&&Be.m(Ae,Ie),w(Ae,en,Ie),Ve||(tn=[j(rt,"click",t[8]),j(we,"click",t[6]),j(lt,"click",t[7]),j(gt,"click",t[4]),j(ln,"click",t[5])],Ve=!0)},p(Ae,[Ie]){Ie&2&&!ct(i.src,r=Ae[1].urlImage)&&g(i,"src",r),Ie&2&&o!==(o=Ae[1].nameProperty)&&g(i,"alt",o),Ie&2&&h!==(h=Ae[1].claveEB+"")&&ie(f,h),Ie&2&&m!==(m=Ae[1].nameProperty+"")&&ie(_,m),Ie&2&&E!==(E=Ae[1].selecTP+"")&&ie(T,E),Ie&2&&D!==(D=Ae[1].colonia+"")&&ie(F,D),Ie&2&&N!==(N=Ae[1].locaProperty+"")&&ie(Y,N),Ie&2&&Q!==(Q=Ae[1].price+"")&&ie(Z,Q),Ie&2&&W!==(W=Ae[1].beds+"")&&ie(C,W),Ie&2&&L!==(L=Ae[1].bathroom+"")&&ie(A,L),Ie&2&&oe!==(oe=Ae[1].halfBathroom+"")&&ie(Se,oe),Ie&2&&Pe!==(Pe=Ae[1].areaBuilding+"")&&ie(Ne,Pe),Ie&2&&V!==(V=Ae[1].areaTotal+"")&&ie(re,V),Ie&2&&ht!==(ht=Ae[1].description+"")&&ie(Fe,ht),Ie&2&&R!==(R=Ae[1].urlProp)&&g(pt,"href",R),Ae[0]?Be?Be.p(Ae,Ie):(Be=Ed(Ae),Be.c(),Be.m(en.parentNode,en)):Be&&(Be.d(1),Be=null)},i:ue,o:ue,d(Ae){Ae&&b(e),Ae&&b(Dn),Be&&Be.d(Ae),Ae&&b(en),Ve=!1,Ye(tn)}}}function JI(t,e,n){let s,i,r;Ue(t,it,m=>n(10,s=m)),Ue(t,Je,m=>n(1,i=m)),Ue(t,E_,m=>n(2,r=m)),Ys();let o=[],a=!1;function l(){console.log("propEditing"),Xe(it,s="propEditing",s),console.log("propEditing")}async function c(){confirm("Deseas eleiminar definitivamente la propiedad?")&&(console.log("Borraste al propiedad"),await wa(ss(Tt,"properties",i.id)),Xe(it,s="start",s))}function h(){xI(i,dr),n(0,a=!0)}function f(){Xe(Je,i=[],i),Xe(it,s="start",s)}return[a,i,r,o,l,c,h,f,()=>void 0]}class ZI extends Qe{constructor(e){super(),We(this,e,JI,XI,He,{})}}function eC(t){let e;return{c(){e=S("Editar")},m(n,s){w(n,e,s)},d(n){n&&b(e)}}}function tC(t){let e;return{c(){e=S("Guardar")},m(n,s){w(n,e,s)},d(n){n&&b(e)}}}function nC(t){let e,n,s,i,r,o,a,l,c,h,f,d,m,_,v,y;l=new UI({});function E(D,F){return D[0]==="propAdding"?tC:eC}let T=E(t),P=T(t);return{c(){e=p("form"),n=p("div"),s=p("div"),i=p("img"),a=k(),he(l.$$.fragment),c=k(),h=p("div"),f=p("button"),P.c(),d=k(),m=p("button"),m.textContent="Cancel",ct(i.src,r=t[1].urlImage)||g(i,"src",r),g(i,"alt",o=t[1].nameProperty),g(i,"class","svelte-166hnhc"),g(f,"class","btn-save"),g(m,"class","btn-cancel"),g(h,"class","contSavCan svelte-166hnhc"),g(n,"class","altaContactos"),g(e,"class","propiedad")},m(D,F){w(D,e,F),u(e,n),u(n,s),u(s,i),u(s,a),le(l,s,null),u(n,c),u(n,h),u(h,f),P.m(f,null),u(h,d),u(h,m),_=!0,v||(y=[j(m,"click",t[3]),j(e,"submit",gn(t[2]))],v=!0)},p(D,[F]){(!_||F&2&&!ct(i.src,r=D[1].urlImage))&&g(i,"src",r),(!_||F&2&&o!==(o=D[1].nameProperty))&&g(i,"alt",o),T!==(T=E(D))&&(P.d(1),P=T(D),P&&(P.c(),P.m(f,null)))},i(D){_||(q(l.$$.fragment,D),_=!0)},o(D){x(l.$$.fragment,D),_=!1},d(D){D&&b(e),ce(l),P.d(),v=!1,Ye(y)}}}function sC(t,e,n){let s,i;Ue(t,it,c=>n(0,s=c)),Ue(t,Je,c=>n(1,i=c));let r=0;const o=Ys();async function a(){if(console.log("Estas en add property",s,i),s==="propEditing")console.log("estas dentro de edit property",i.id),await ba(ss(Tt,"properties",i.id),i);else{r=Date.now(),Xe(Je,i={...i,createdAt:r},i),console.log(i);const c=En(Tt,"properties");await Us(c,i)}Xe(it,s="start",s)}return[s,i,a,()=>{o("./")}]}class O_ extends Qe{constructor(e){super(),We(this,e,sC,nC,He,{})}}function Id(t,e,n){const s=t.slice();return s[23]=e[n],s[25]=n,s}function Cd(t,e,n){const s=t.slice();return s[25]=e[n],s}function Sd(t,e,n){const s=t.slice();return s[12]=e[n],s[25]=n,s}function Ad(t){let e,n,s,i,r,o,a,l,c,h,f,d,m,_,v,y,E,T,P,D,F,K,N;function Y(C){t[14](C)}let M={};t[3]!==void 0&&(M.searchTerm=t[3]),r=new iu({props:M}),Xn.push(()=>Bs(r,"searchTerm",Y)),r.$on("input",t[11]);let $=t[1],U=[];for(let C=0;C<$.length;C+=1)U[C]=Rd(Sd(t,$,C));const H=C=>x(U[C],1,1,()=>{U[C]=null});let Q=t[0]>1&&Pd(t),Z=[3,2,1],G=[];for(let C=0;C<3;C+=1)G[C]=Od(Cd(t,Z,C));let z=Array(3),X=[];for(let C=0;C<z.length;C+=1)X[C]=Md(Id(t,z,C));let W=t[0]<t[5]&&$d(t);return{c(){e=p("h2"),e.textContent=`${xn.length} Propiedades a Mostrar`,n=k(),s=p("button"),s.textContent="Alta de Propiedad",i=k(),he(r.$$.fragment),a=k(),l=p("div"),c=p("main");for(let C=0;C<U.length;C+=1)U[C].c();h=k(),f=p("div"),d=p("div"),m=p("ul"),Q&&Q.c(),_=k();for(let C=0;C<3;C+=1)G[C].c();v=k(),y=p("li"),E=p("span"),T=S(t[0]),P=k();for(let C=0;C<X.length;C+=1)X[C].c();D=k(),W&&W.c(),g(c,"id","bookshelf"),g(c,"class","svelte-elvgtg"),g(m,"class","pagi__options"),g(d,"class","pagi__Item"),g(f,"class","container pagination"),g(l,"class","mosPag")},m(C,O){w(C,e,O),w(C,n,O),w(C,s,O),w(C,i,O),le(r,C,O),w(C,a,O),w(C,l,O),u(l,c);for(let L=0;L<U.length;L+=1)U[L].m(c,null);u(l,h),u(l,f),u(f,d),u(d,m),Q&&Q.m(m,null),u(m,_);for(let L=0;L<3;L+=1)G[L].m(m,null);u(m,v),u(m,y),u(y,E),u(E,T),u(m,P);for(let L=0;L<X.length;L+=1)X[L].m(m,null);u(m,D),W&&W.m(m,null),F=!0,K||(N=j(s,"click",t[10]),K=!0)},p(C,O){const L={};if(!o&&O&8&&(o=!0,L.searchTerm=C[3],Vs(()=>o=!1)),r.$set(L),O&534){$=C[1];let A;for(A=0;A<$.length;A+=1){const J=Sd(C,$,A);U[A]?(U[A].p(J,O),q(U[A],1)):(U[A]=Rd(J),U[A].c(),q(U[A],1),U[A].m(c,null))}for(kt(),A=$.length;A<U.length;A+=1)H(A);Et()}if(C[0]>1?Q?Q.p(C,O):(Q=Pd(C),Q.c(),Q.m(m,_)):Q&&(Q.d(1),Q=null),O&257){Z=[3,2,1];let A;for(A=0;A<3;A+=1){const J=Cd(C,Z,A);G[A]?G[A].p(J,O):(G[A]=Od(J),G[A].c(),G[A].m(m,v))}for(;A<3;A+=1)G[A].d(1)}if((!F||O&1)&&ie(T,C[0]),O&289){z=Array(3);let A;for(A=0;A<z.length;A+=1){const J=Id(C,z,A);X[A]?X[A].p(J,O):(X[A]=Md(J),X[A].c(),X[A].m(m,D))}for(;A<X.length;A+=1)X[A].d(1);X.length=z.length}C[0]<C[5]?W?W.p(C,O):(W=$d(C),W.c(),W.m(m,null)):W&&(W.d(1),W=null)},i(C){if(!F){q(r.$$.fragment,C);for(let O=0;O<$.length;O+=1)q(U[O]);F=!0}},o(C){x(r.$$.fragment,C),U=U.filter(Boolean);for(let O=0;O<U.length;O+=1)x(U[O]);F=!1},d(C){C&&b(e),C&&b(n),C&&b(s),C&&b(i),ce(r,C),C&&b(a),C&&b(l),qe(U,C),Q&&Q.d(),qe(G,C),qe(X,C),W&&W.d(),K=!1,N()}}}function Dd(t){let e,n,s,i,r,o,a;const l=[t[12]];let c={};for(let f=0;f<l.length;f+=1)c=Mt(c,l[f]);n=new S_({props:c});function h(){return t[15](t[12])}return{c(){e=p("section"),he(n.$$.fragment),s=k(),g(e,"class","property svelte-elvgtg")},m(f,d){w(f,e,d),le(n,e,null),u(e,s),r=!0,o||(a=j(e,"click",h),o=!0)},p(f,d){t=f;const m=d&2?_n(l,[Jn(t[12])]):{};n.$set(m)},i(f){r||(q(n.$$.fragment,f),xe(()=>{i||(i=dn(e,Ei,{duration:500,easing:ki},!0)),i.run(1)}),r=!0)},o(f){x(n.$$.fragment,f),i||(i=dn(e,Ei,{duration:500,easing:ki},!1)),i.run(0),r=!1},d(f){f&&b(e),ce(n),f&&i&&i.end(),o=!1,a()}}}function Rd(t){let e,n,s=t[25]>=t[4]&&t[25]<t[2]&&Dd(t);return{c(){s&&s.c(),e=sn()},m(i,r){s&&s.m(i,r),w(i,e,r),n=!0},p(i,r){i[25]>=i[4]&&i[25]<i[2]?s?(s.p(i,r),r&20&&q(s,1)):(s=Dd(i),s.c(),q(s,1),s.m(e.parentNode,e)):s&&(kt(),x(s,1,1,()=>{s=null}),Et())},i(i){n||(q(s),n=!0)},o(i){x(s),n=!1},d(i){s&&s.d(i),i&&b(e)}}}function Pd(t){let e,n,s,i,r,o,a,l,c;return{c(){e=p("li"),n=p("a"),n.textContent="first",s=k(),i=p("li"),r=p("a"),o=S("previous"),g(n,"href","/blog"),g(r,"href",a="/blog/"+(t[0]-1))},m(h,f){w(h,e,f),u(e,n),w(h,s,f),w(h,i,f),u(i,r),u(r,o),l||(c=[j(n,"click",gn(t[16])),j(r,"click",gn(t[17]))],l=!0)},p(h,f){f&1&&a!==(a="/blog/"+(h[0]-1))&&g(r,"href",a)},d(h){h&&b(e),h&&b(s),h&&b(i),l=!1,Ye(c)}}}function Nd(t){let e,n,s=t[0]-t[25]+"",i,r,o,a;function l(){return t[18](t[25])}return{c(){e=p("li"),n=p("a"),i=S(s),g(n,"href",r="/blog/"+(t[0]-t[25]))},m(c,h){w(c,e,h),u(e,n),u(n,i),o||(a=j(n,"click",gn(l)),o=!0)},p(c,h){t=c,h&1&&s!==(s=t[0]-t[25]+"")&&ie(i,s),h&1&&r!==(r="/blog/"+(t[0]-t[25]))&&g(n,"href",r)},d(c){c&&b(e),o=!1,a()}}}function Od(t){let e,n=t[0]-t[25]>0&&Nd(t);return{c(){n&&n.c(),e=sn()},m(s,i){n&&n.m(s,i),w(s,e,i)},p(s,i){s[0]-s[25]>0?n?n.p(s,i):(n=Nd(s),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(s){n&&n.d(s),s&&b(e)}}}function Ld(t){let e,n,s=t[0]+(t[25]+1)+"",i,r,o,a;function l(){return t[19](t[25])}return{c(){e=p("li"),n=p("a"),i=S(s),g(n,"href",r="/blog/"+(t[0]+(t[25]+1)))},m(c,h){w(c,e,h),u(e,n),u(n,i),o||(a=j(n,"click",gn(l)),o=!0)},p(c,h){t=c,h&1&&s!==(s=t[0]+(t[25]+1)+"")&&ie(i,s),h&1&&r!==(r="/blog/"+(t[0]+(t[25]+1)))&&g(n,"href",r)},d(c){c&&b(e),o=!1,a()}}}function Md(t){let e,n=t[0]+(t[25]+1)<=t[5]&&Ld(t);return{c(){n&&n.c(),e=sn()},m(s,i){n&&n.m(s,i),w(s,e,i)},p(s,i){s[0]+(s[25]+1)<=s[5]?n?n.p(s,i):(n=Ld(s),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(s){n&&n.d(s),s&&b(e)}}}function $d(t){let e,n,s,i,r,o,a,l,c,h,f;return{c(){e=p("li"),n=p("a"),s=S("next"),r=k(),o=p("li"),a=p("a"),l=S("last"),g(n,"href",i="/blog/"+(t[0]+1)),g(a,"href",c="/blog/"+t[5])},m(d,m){w(d,e,m),u(e,n),u(n,s),w(d,r,m),w(d,o,m),u(o,a),u(a,l),h||(f=[j(n,"click",gn(t[20])),j(a,"click",gn(t[21]))],h=!0)},p(d,m){m&1&&i!==(i="/blog/"+(d[0]+1))&&g(n,"href",i),m&32&&c!==(c="/blog/"+d[5])&&g(a,"href",c)},d(d){d&&b(e),d&&b(r),d&&b(o),h=!1,Ye(f)}}}function Ud(t){let e,n,s;const i=[t[7]];let r={};for(let o=0;o<i.length;o+=1)r=Mt(r,i[o]);return n=new ZI({props:r}),{c(){e=p("div"),he(n.$$.fragment)},m(o,a){w(o,e,a),le(n,e,null),s=!0},p(o,a){const l=a&128?_n(i,[Jn(o[7])]):{};n.$set(l)},i(o){s||(q(n.$$.fragment,o),s=!0)},o(o){x(n.$$.fragment,o),s=!1},d(o){o&&b(e),ce(n)}}}function Fd(t){let e,n,s;const i=[t[7]];let r={};for(let o=0;o<i.length;o+=1)r=Mt(r,i[o]);return n=new O_({props:r}),{c(){e=p("div"),he(n.$$.fragment),g(e,"class","container")},m(o,a){w(o,e,a),le(n,e,null),s=!0},p(o,a){const l=a&128?_n(i,[Jn(o[7])]):{};n.$set(l)},i(o){s||(q(n.$$.fragment,o),s=!0)},o(o){x(n.$$.fragment,o),s=!1},d(o){o&&b(e),ce(n)}}}function Vd(t){let e,n,s;return n=new O_({}),{c(){e=p("div"),he(n.$$.fragment),g(e,"class","container")},m(i,r){w(i,e,r),le(n,e,null),s=!0},i(i){s||(q(n.$$.fragment,i),s=!0)},o(i){x(n.$$.fragment,i),s=!1},d(i){i&&b(e),ce(n)}}}function iC(t){let e,n,s,i,r,o,a,l,c,h,f,d=t[6]==="start"&&Ad(t),m=t[6]==="propSelect"&&Ud(t),_=t[6]==="propEditing"&&Fd(t),v=t[6]==="propAdding"&&Vd();return{c(){e=p("div"),n=p("div"),s=p("h1"),s.textContent="Propiedades",i=k(),r=p("img"),a=k(),d&&d.c(),l=k(),m&&m.c(),c=k(),_&&_.c(),h=k(),v&&v.c(),ct(r.src,o=I_)||g(r,"src",o),g(r,"alt","propiedad"),g(r,"class","imgTitle svelte-elvgtg"),g(e,"class","container")},m(y,E){w(y,e,E),u(e,n),u(n,s),u(n,i),u(n,r),u(e,a),d&&d.m(e,null),u(e,l),m&&m.m(e,null),u(e,c),_&&_.m(e,null),u(e,h),v&&v.m(e,null),f=!0},p(y,[E]){y[6]==="start"?d?(d.p(y,E),E&64&&q(d,1)):(d=Ad(y),d.c(),q(d,1),d.m(e,l)):d&&(kt(),x(d,1,1,()=>{d=null}),Et()),y[6]==="propSelect"?m?(m.p(y,E),E&64&&q(m,1)):(m=Ud(y),m.c(),q(m,1),m.m(e,c)):m&&(kt(),x(m,1,1,()=>{m=null}),Et()),y[6]==="propEditing"?_?(_.p(y,E),E&64&&q(_,1)):(_=Fd(y),_.c(),q(_,1),_.m(e,h)):_&&(kt(),x(_,1,1,()=>{_=null}),Et()),y[6]==="propAdding"?v?E&64&&q(v,1):(v=Vd(),v.c(),q(v,1),v.m(e,null)):v&&(kt(),x(v,1,1,()=>{v=null}),Et())},i(y){f||(q(d),q(m),q(_),q(v),f=!0)},o(y){x(d),x(m),x(_),x(v),f=!1},d(y){y&&b(e),d&&d.d(),m&&m.d(),_&&_.d(),v&&v.d()}}}let Za=20;function rC(t,e,n){let s,i,r,o,a,l,c;Ue(t,it,M=>n(6,l=M)),Ue(t,Je,M=>n(7,c=M));let h,f;Xe(it,l="start",l);let d=1;const m=M=>{n(0,d=M)};function _(M){console.log(M),Xe(Je,c=M,c),Xe(it,l="propSelect",l)}function v(){Xe(it,l="propAdding",l)}function y(){return n(1,s=xn.filter(M=>(M.nameProperty+" "+M.colonia).toLowerCase().includes(h.toLowerCase())))}n(1,s=xn.sort((M,$)=>new Date(M.createdAt)<new Date($.createdAt)?1:new Date(M.createdAt)>new Date($.createdAt)?-1:0));function E(M){h=M,n(3,h)}const T=M=>_(M),P=()=>m(1),D=()=>m(d-1),F=M=>m(d-M),K=M=>m(d+(M+1)),N=()=>m(d+1),Y=()=>m(r);return t.$$.update=()=>{t.$$.dirty&2&&n(13,i=s.length),t.$$.dirty&8192&&n(5,r=Math.ceil(i/Za)),t.$$.dirty&1&&n(2,o=d*Za),t.$$.dirty&4&&n(4,a=o-Za)},n(1,s=xn),[d,s,o,h,a,r,l,c,m,_,v,y,f,i,E,T,P,D,F,K,N,Y]}class oC extends Qe{constructor(e){super(),We(this,e,rC,iC,He,{})}}function aC(t){let e;return{c(){e=p("h1"),e.textContent="Captacion"},m(n,s){w(n,e,s)},p:ue,i:ue,o:ue,d(n){n&&b(e)}}}class lC extends Qe{constructor(e){super(),We(this,e,null,aC,He,{})}}function cC(t){let e,n,s,i,r=t[0].task+"",o;return{c(){e=p("div"),n=p("h1"),n.textContent="Estas en About",s=k(),i=p("h3"),o=S(r),g(e,"class","cont")},m(a,l){w(a,e,l),u(e,n),u(e,s),u(e,i),u(i,o)},p(a,[l]){l&1&&r!==(r=a[0].task+"")&&ie(o,r)},i:ue,o:ue,d(a){a&&b(e)}}}function uC(t,e,n){let s;return Ue(t,bn,i=>n(0,s=i)),[s]}class hC extends Qe{constructor(e){super(),We(this,e,uC,cC,He,{})}}function fC(t){let e,n,s,i;return{c(){e=p("div"),n=p("div"),s=S(t[0]),g(n,"id","snackbar"),g(n,"class",i=cu(t[1]?"animation-in":"not-show")+" svelte-1e3w4r3")},m(r,o){w(r,e,o),u(e,n),u(n,s)},p(r,[o]){o&1&&ie(s,r[0]),o&2&&i!==(i=cu(r[1]?"animation-in":"not-show")+" svelte-1e3w4r3")&&g(n,"class",i)},i:ue,o:ue,d(r){r&&b(e)}}}function dC(t,e,n){let{message:s=""}=e,{show:i=!1}=e;return t.$$set=r=>{"message"in r&&n(0,s=r.message),"show"in r&&n(1,i=r.show)},[s,i]}class pC extends Qe{constructor(e){super(),We(this,e,dC,fC,He,{message:0,show:1})}}function mC(t){let e;return{c(){e=S("Registrarse")},m(n,s){w(n,e,s)},d(n){n&&b(e)}}}function gC(t){let e,n,s,i,r,o,a,l,c,h,f,d,m,_,v,y,E,T,P,D,F,K,N,Y,M,$,U,H,Q,Z,G;return n=new pC({props:{message:t[0],show:t[1]}}),H=new hn({props:{to:"/register",$$slots:{default:[mC]},$$scope:{ctx:t}}}),{c(){e=p("div"),he(n.$$.fragment),s=k(),i=p("br"),r=p("br"),o=p("br"),a=k(),l=p("div"),c=p("h1"),c.textContent="Inicia sesi\xF3n en tu cuenta",h=k(),f=p("div"),d=p("input"),m=k(),_=p("div"),v=p("input"),y=k(),E=p("br"),T=k(),P=p("div"),D=p("button"),D.textContent="Iniciar sesi\xF3n",F=k(),K=p("p"),K.textContent="O tambi\xE9n",N=k(),Y=p("br"),M=k(),$=p("p"),U=S("\xBFA\xFAn no tienes cuenta? "),he(H.$$.fragment),g(c,"class","text-center text-login svelte-ftg4em"),g(d,"name","email"),g(d,"type","text"),g(d,"class","input-form svelte-ftg4em"),g(d,"placeholder","Correo"),g(f,"class","center svelte-ftg4em"),g(v,"name","password"),g(v,"type","password"),g(v,"class","input-form svelte-ftg4em"),g(v,"placeholder","Contrase\xF1a"),g(_,"class","center svelte-ftg4em"),g(D,"class","button-signup fondo-color-signup svelte-ftg4em"),g(P,"class","center svelte-ftg4em"),g(K,"class","text-center svelte-ftg4em"),g($,"class","text-center svelte-ftg4em"),g(l,"class","form-signin svelte-ftg4em")},m(z,X){w(z,e,X),le(n,e,null),u(e,s),u(e,i),u(e,r),u(e,o),u(e,a),u(e,l),u(l,c),u(l,h),u(l,f),u(f,d),u(l,m),u(l,_),u(_,v),u(l,y),u(l,E),u(l,T),u(l,P),u(P,D),u(l,F),u(l,K),u(l,N),u(l,Y),u(l,M),u(l,$),u($,U),le(H,$,null),Q=!0,Z||(G=[j(d,"input",t[4]),j(v,"input",t[5]),j(D,"click",t[3])],Z=!0)},p(z,[X]){const W={};X&1&&(W.message=z[0]),X&2&&(W.show=z[1]),n.$set(W);const C={};X&512&&(C.$$scope={dirty:X,ctx:z}),H.$set(C)},i(z){Q||(q(n.$$.fragment,z),q(H.$$.fragment,z),Q=!0)},o(z){x(n.$$.fragment,z),x(H.$$.fragment,z),Q=!1},d(z){z&&b(e),ce(n),ce(H),Z=!1,Ye(G)}}}function _C(t,e,n){const s=Ys();let i={email:"",password:""},r="",o=!1;const a=d=>{n(0,r=d),n(1,o=!0),setTimeout(()=>{n(1,o=!1)},2800)},l=d=>{i={...i,[d.target.name]:d.target.value}};return[r,o,l,async()=>{try{await pE(b_,i.email,i.password),s("/")}catch(d){d.message==="Firebase: Error (auth/wrong-password)."&&a("Contrase\xF1a incorrecta")}},d=>l(d),d=>l(d)]}class vC extends Qe{constructor(e){super(),We(this,e,_C,gC,He,{})}}class yC extends Qe{constructor(e){super(),We(this,e,null,null,He,{})}}function bC(t){let e;return{c(){e=S("Home")},m(n,s){w(n,e,s)},d(n){n&&b(e)}}}function wC(t){let e;return{c(){e=S("Contactos")},m(n,s){w(n,e,s)},d(n){n&&b(e)}}}function kC(t){let e;return{c(){e=S("Propiedades")},m(n,s){w(n,e,s)},d(n){n&&b(e)}}}function EC(t){let e;return{c(){e=S("Agenda")},m(n,s){w(n,e,s)},d(n){n&&b(e)}}}function TC(t){let e;return{c(){e=S("LogOut")},m(n,s){w(n,e,s)},d(n){n&&b(e)}}}function IC(t){let e;return{c(){e=S("About")},m(n,s){w(n,e,s)},d(n){n&&b(e)}}}function CC(t){let e;return{c(){e=S("Registro")},m(n,s){w(n,e,s)},d(n){n&&b(e)}}}function SC(t){let e;return{c(){e=S("Login")},m(n,s){w(n,e,s)},d(n){n&&b(e)}}}function AC(t){let e,n;return e=new fI({}),{c(){he(e.$$.fragment)},m(s,i){le(e,s,i),n=!0},i(s){n||(q(e.$$.fragment,s),n=!0)},o(s){x(e.$$.fragment,s),n=!1},d(s){ce(e,s)}}}function DC(t){let e,n;return e=new YI({}),{c(){he(e.$$.fragment)},m(s,i){le(e,s,i),n=!0},i(s){n||(q(e.$$.fragment,s),n=!0)},o(s){x(e.$$.fragment,s),n=!1},d(s){ce(e,s)}}}function RC(t){let e,n;return e=new oC({}),{c(){he(e.$$.fragment)},m(s,i){le(e,s,i),n=!0},i(s){n||(q(e.$$.fragment,s),n=!0)},o(s){x(e.$$.fragment,s),n=!1},d(s){ce(e,s)}}}function PC(t){let e,n;return e=new lC({}),{c(){he(e.$$.fragment)},m(s,i){le(e,s,i),n=!0},i(s){n||(q(e.$$.fragment,s),n=!0)},o(s){x(e.$$.fragment,s),n=!1},d(s){ce(e,s)}}}function NC(t){let e,n;return e=new KT({}),{c(){he(e.$$.fragment)},m(s,i){le(e,s,i),n=!0},i(s){n||(q(e.$$.fragment,s),n=!0)},o(s){x(e.$$.fragment,s),n=!1},d(s){ce(e,s)}}}function OC(t){let e,n;return e=new GT({}),{c(){he(e.$$.fragment)},m(s,i){le(e,s,i),n=!0},i(s){n||(q(e.$$.fragment,s),n=!0)},o(s){x(e.$$.fragment,s),n=!1},d(s){ce(e,s)}}}function LC(t){let e,n;return e=new hC({}),{c(){he(e.$$.fragment)},m(s,i){le(e,s,i),n=!0},i(s){n||(q(e.$$.fragment,s),n=!0)},o(s){x(e.$$.fragment,s),n=!1},d(s){ce(e,s)}}}function MC(t){let e,n;return e=new yC({}),{c(){he(e.$$.fragment)},m(s,i){le(e,s,i),n=!0},i(s){n||(q(e.$$.fragment,s),n=!0)},o(s){x(e.$$.fragment,s),n=!1},d(s){ce(e,s)}}}function $C(t){let e,n;return e=new vC({}),{c(){he(e.$$.fragment)},m(s,i){le(e,s,i),n=!0},i(s){n||(q(e.$$.fragment,s),n=!0)},o(s){x(e.$$.fragment,s),n=!1},d(s){ce(e,s)}}}function UC(t){let e,n;return e=new xT({}),{c(){he(e.$$.fragment)},m(s,i){le(e,s,i),n=!0},i(s){n||(q(e.$$.fragment,s),n=!0)},o(s){x(e.$$.fragment,s),n=!1},d(s){ce(e,s)}}}function FC(t){let e,n,s,i,r,o,a,l,c,h,f,d,m,_,v,y,E,T,P,D,F,K,N,Y,M,$,U,H,Q,Z,G,z,X,W,C,O,L,A,J,oe,Se,me,at,ge,Pe,Ne,dt;return d=new hn({props:{to:"/",$$slots:{default:[bC]},$$scope:{ctx:t}}}),_=new hn({props:{to:"contactos",$$slots:{default:[wC]},$$scope:{ctx:t}}}),y=new hn({props:{to:"propiedades",$$slots:{default:[kC]},$$scope:{ctx:t}}}),T=new hn({props:{to:"agenda",$$slots:{default:[EC]},$$scope:{ctx:t}}}),D=new hn({props:{to:"/about",$$slots:{default:[TC]},$$scope:{ctx:t}}}),D.$on("click",BC),K=new hn({props:{to:"about",$$slots:{default:[IC]},$$scope:{ctx:t}}}),Y=new hn({props:{to:"register",$$slots:{default:[CC]},$$scope:{ctx:t}}}),$=new hn({props:{to:"login",$$slots:{default:[SC]},$$scope:{ctx:t}}}),H=new Pn({props:{path:"/",$$slots:{default:[AC]},$$scope:{ctx:t}}}),Z=new Pn({props:{path:"/contactos",$$slots:{default:[DC]},$$scope:{ctx:t}}}),z=new Pn({props:{path:"propiedades",$$slots:{default:[RC]},$$scope:{ctx:t}}}),W=new Pn({props:{path:"captacion",$$slots:{default:[PC]},$$scope:{ctx:t}}}),O=new Pn({props:{path:"agenda",$$slots:{default:[NC]},$$scope:{ctx:t}}}),A=new Pn({props:{path:"sinergias",$$slots:{default:[OC]},$$scope:{ctx:t}}}),oe=new Pn({props:{path:"about",$$slots:{default:[LC]},$$scope:{ctx:t}}}),me=new Pn({props:{path:"logout",$$slots:{default:[MC]},$$scope:{ctx:t}}}),ge=new Pn({props:{path:"login",$$slots:{default:[$C]},$$scope:{ctx:t}}}),Ne=new Pn({props:{path:"register",$$slots:{default:[UC]},$$scope:{ctx:t}}}),{c(){e=p("div"),n=p("img"),i=k(),r=p("label"),o=p("img"),l=k(),c=p("input"),h=k(),f=p("div"),he(d.$$.fragment),m=k(),he(_.$$.fragment),v=k(),he(y.$$.fragment),E=k(),he(T.$$.fragment),P=k(),he(D.$$.fragment),F=k(),he(K.$$.fragment),N=k(),he(Y.$$.fragment),M=k(),he($.$$.fragment),U=k(),he(H.$$.fragment),Q=k(),he(Z.$$.fragment),G=k(),he(z.$$.fragment),X=k(),he(W.$$.fragment),C=k(),he(O.$$.fragment),L=k(),he(A.$$.fragment),J=k(),he(oe.$$.fragment),Se=k(),he(me.$$.fragment),at=k(),he(ge.$$.fragment),Pe=k(),he(Ne.$$.fragment),ct(n.src,s=yp)||g(n,"src",s),g(n,"alt","MatchHome"),g(n,"class","nav__logo svelte-1viw6tr"),ct(o.src,a=ey)||g(o,"src",a),g(o,"class","nav__img svelte-1viw6tr"),g(o,"alt","menu"),g(r,"class","nav__label svelte-1viw6tr"),g(r,"for","menu"),g(c,"type","checkbox"),g(c,"id","menu"),g(c,"class","nav__input svelte-1viw6tr"),g(f,"class","nav__menu svelte-1viw6tr"),g(e,"class","nav__container svelte-1viw6tr")},m(V,re){w(V,e,re),u(e,n),u(e,i),u(e,r),u(r,o),u(e,l),u(e,c),u(e,h),u(e,f),le(d,f,null),u(f,m),le(_,f,null),u(f,v),le(y,f,null),u(f,E),le(T,f,null),u(f,P),le(D,f,null),u(f,F),le(K,f,null),u(f,N),le(Y,f,null),u(f,M),le($,f,null),w(V,U,re),le(H,V,re),w(V,Q,re),le(Z,V,re),w(V,G,re),le(z,V,re),w(V,X,re),le(W,V,re),w(V,C,re),le(O,V,re),w(V,L,re),le(A,V,re),w(V,J,re),le(oe,V,re),w(V,Se,re),le(me,V,re),w(V,at,re),le(ge,V,re),w(V,Pe,re),le(Ne,V,re),dt=!0},p(V,re){const Ke={};re&2&&(Ke.$$scope={dirty:re,ctx:V}),d.$set(Ke);const Dt={};re&2&&(Dt.$$scope={dirty:re,ctx:V}),_.$set(Dt);const Le={};re&2&&(Le.$$scope={dirty:re,ctx:V}),y.$set(Le);const ht={};re&2&&(ht.$$scope={dirty:re,ctx:V}),T.$set(ht);const Fe={};re&2&&(Fe.$$scope={dirty:re,ctx:V}),D.$set(Fe);const rn={};re&2&&(rn.$$scope={dirty:re,ctx:V}),K.$set(rn);const ft={};re&2&&(ft.$$scope={dirty:re,ctx:V}),Y.$set(ft);const pt={};re&2&&(pt.$$scope={dirty:re,ctx:V}),$.$set(pt);const Ut={};re&2&&(Ut.$$scope={dirty:re,ctx:V}),H.$set(Ut);const R={};re&2&&(R.$$scope={dirty:re,ctx:V}),Z.$set(R);const ae={};re&2&&(ae.$$scope={dirty:re,ctx:V}),z.$set(ae);const _e={};re&2&&(_e.$$scope={dirty:re,ctx:V}),W.$set(_e);const rt={};re&2&&(rt.$$scope={dirty:re,ctx:V}),O.$set(rt);const B={};re&2&&(B.$$scope={dirty:re,ctx:V}),A.$set(B);const we={};re&2&&(we.$$scope={dirty:re,ctx:V}),oe.$set(we);const mt={};re&2&&(mt.$$scope={dirty:re,ctx:V}),me.$set(mt);const on={};re&2&&(on.$$scope={dirty:re,ctx:V}),ge.$set(on);const lt={};re&2&&(lt.$$scope={dirty:re,ctx:V}),Ne.$set(lt)},i(V){dt||(q(d.$$.fragment,V),q(_.$$.fragment,V),q(y.$$.fragment,V),q(T.$$.fragment,V),q(D.$$.fragment,V),q(K.$$.fragment,V),q(Y.$$.fragment,V),q($.$$.fragment,V),q(H.$$.fragment,V),q(Z.$$.fragment,V),q(z.$$.fragment,V),q(W.$$.fragment,V),q(O.$$.fragment,V),q(A.$$.fragment,V),q(oe.$$.fragment,V),q(me.$$.fragment,V),q(ge.$$.fragment,V),q(Ne.$$.fragment,V),dt=!0)},o(V){x(d.$$.fragment,V),x(_.$$.fragment,V),x(y.$$.fragment,V),x(T.$$.fragment,V),x(D.$$.fragment,V),x(K.$$.fragment,V),x(Y.$$.fragment,V),x($.$$.fragment,V),x(H.$$.fragment,V),x(Z.$$.fragment,V),x(z.$$.fragment,V),x(W.$$.fragment,V),x(O.$$.fragment,V),x(A.$$.fragment,V),x(oe.$$.fragment,V),x(me.$$.fragment,V),x(ge.$$.fragment,V),x(Ne.$$.fragment,V),dt=!1},d(V){V&&b(e),ce(d),ce(_),ce(y),ce(T),ce(D),ce(K),ce(Y),ce($),V&&b(U),ce(H,V),V&&b(Q),ce(Z,V),V&&b(G),ce(z,V),V&&b(X),ce(W,V),V&&b(C),ce(O,V),V&&b(L),ce(A,V),V&&b(J),ce(oe,V),V&&b(Se),ce(me,V),V&&b(at),ce(ge,V),V&&b(Pe),ce(Ne,V)}}}function VC(t){let e,n,s;return n=new Ql({props:{$$slots:{default:[FC]},$$scope:{ctx:t}}}),{c(){e=p("nav"),he(n.$$.fragment),g(e,"class","nav svelte-1viw6tr")},m(i,r){w(i,e,r),le(n,e,null),s=!0},p(i,[r]){const o={};r&2&&(o.$$scope={dirty:r,ctx:i}),n.$set(o)},i(i){s||(q(n.$$.fragment,i),s=!0)},o(i){x(n.$$.fragment,i),s=!1},d(i){i&&b(e),ce(n)}}}async function BC(){}function jC(t){return rI.subscribe(e=>{}),[]}class qC extends Qe{constructor(e){super(),We(this,e,jC,VC,He,{})}}function Bd(t){let e,n,s,i,r,o,a;return{c(){e=p("div"),n=p("h1"),n.textContent="Bienvendo a",s=k(),i=p("img"),o=k(),a=p("div"),a.innerHTML=`<p class="desc__intro svelte-1kx2964">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod aut aliquam, expedita perferendis consequatur modi omnis! Nostrum iste necessitatibus quisquam numquam, aliquam ipsum. Sit, similique quis. Fuga vitae possimus quisquam quam. Unde accusantium neque veniam reprehenderit, laborum, magni ut quasi asperiores a amet fugiat non, sapiente obcaecati voluptas ab! Nostrum!</p> 
        <p><strong>www.matchhome.net</strong></p>`,g(n,"class","title svelte-1kx2964"),ct(i.src,r=yp)||g(i,"src",r),g(i,"alt","MatchHome"),g(i,"class","svelte-1kx2964"),g(a,"class",""),g(e,"class","intro svelte-1kx2964")},m(l,c){w(l,e,c),u(e,n),u(e,s),u(e,i),u(e,o),u(e,a)},p:ue,d(l){l&&b(e)}}}function HC(t){let e,n,s,i,r;n=new qC({});let o=t[0]&&Bd();return{c(){e=p("nav"),he(n.$$.fragment),s=k(),i=p("body"),o&&o.c(),g(e,"class","navBar")},m(a,l){w(a,e,l),le(n,e,null),w(a,s,l),w(a,i,l),o&&o.m(i,null),r=!0},p(a,[l]){a[0]?o?o.p(a,l):(o=Bd(),o.c(),o.m(i,null)):o&&(o.d(1),o=null)},i(a){r||(q(n.$$.fragment,a),r=!0)},o(a){x(n.$$.fragment,a),r=!1},d(a){a&&b(e),ce(n),a&&b(s),a&&b(i),o&&o.d()}}}function KC(t,e,n){let s=!0;return setTimeout(()=>{n(0,s=!1)},1500),[s]}class zC extends Qe{constructor(e){super(),We(this,e,KC,HC,He,{})}}new zC({target:document.getElementById("app")});
