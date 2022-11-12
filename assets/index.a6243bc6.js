(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function he(){}const xd=t=>t;function Ot(t,e){for(const n in e)t[n]=e[n];return t}function Zd(t){return t()}function mu(){return Object.create(null)}function Ze(t){t.forEach(Zd)}function Wo(t){return typeof t=="function"}function Ge(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let Yr;function st(t,e){return Yr||(Yr=document.createElement("a")),Yr.href=e,t===Yr.href}function z_(t){return Object.keys(t).length===0}function Hl(t,...e){if(t==null)return he;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function di(t){let e;return Hl(t,n=>e=n)(),e}function Oe(t,e,n){t.$$.on_destroy.push(Hl(e,n))}function zl(t,e,n,s){if(t){const i=ep(t,e,n,s);return t[0](i)}}function ep(t,e,n,s){return t[1]&&s?Ot(n.ctx.slice(),t[1](s(e))):n.ctx}function Kl(t,e,n,s){if(t[2]&&s){const i=t[2](s(n));if(e.dirty===void 0)return i;if(typeof i=="object"){const r=[],o=Math.max(e.dirty.length,i.length);for(let a=0;a<o;a+=1)r[a]=e.dirty[a]|i[a];return r}return e.dirty|i}return e.dirty}function Gl(t,e,n,s,i,r){if(i){const o=ep(e,n,s,r);t.p(o,i)}}function Wl(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let s=0;s<n;s++)e[s]=-1;return e}return-1}function go(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function _o(t,e){const n={};e=new Set(e);for(const s in t)!e.has(s)&&s[0]!=="$"&&(n[s]=t[s]);return n}function gu(t){return t==null?"":t}function Ce(t,e,n){return t.set(n),e}const tp=typeof window<"u";let K_=tp?()=>window.performance.now():()=>Date.now(),Ql=tp?t=>requestAnimationFrame(t):he;const li=new Set;function np(t){li.forEach(e=>{e.c(t)||(li.delete(e),e.f())}),li.size!==0&&Ql(np)}function G_(t){let e;return li.size===0&&Ql(np),{promise:new Promise(n=>{li.add(e={c:t,f:n})}),abort(){li.delete(e)}}}function u(t,e){t.appendChild(e)}function sp(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function W_(t){const e=p("style");return Q_(sp(t),e),e.sheet}function Q_(t,e){return u(t.head||t,e),e.sheet}function k(t,e,n){t.insertBefore(e,n||null)}function b(t){t.parentNode.removeChild(t)}function Ve(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function p(t){return document.createElement(t)}function S(t){return document.createTextNode(t)}function w(){return S(" ")}function nn(){return S("")}function q(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function gn(t){return function(e){return e.preventDefault(),t.call(this,e)}}function m(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Nn(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const s in e)e[s]==null?t.removeAttribute(s):s==="style"?t.style.cssText=e[s]:s==="__value"?t.value=t[s]=e[s]:n[s]&&n[s].set?t[s]=e[s]:m(t,s,e[s])}function Ft(t,e,n){const s=new Set;for(let i=0;i<t.length;i+=1)t[i].checked&&s.add(t[i].__value);return n||s.delete(e),Array.from(s)}function fs(t){return t===""?null:+t}function Y_(t){return Array.from(t.childNodes)}function re(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function ve(t,e){t.value=e==null?"":e}function Ue(t,e){for(let n=0;n<t.options.length;n+=1){const s=t.options[n];if(s.__value===e){s.selected=!0;return}}t.selectedIndex=-1}function Ut(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}function ys(t,e,n){t.classList[n?"add":"remove"](e)}function ip(t,e,{bubbles:n=!1,cancelable:s=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,s,e),i}function _u(t,e){return new t(e)}const vo=new Map;let yo=0;function X_(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function J_(t,e){const n={stylesheet:W_(e),rules:{}};return vo.set(t,n),n}function vu(t,e,n,s,i,r,o,a=0){const l=16.666/s;let c=`{
`;for(let y=0;y<=1;y+=l){const E=e+(n-e)*r(y);c+=y*100+`%{${o(E,1-E)}}
`}const h=c+`100% {${o(n,1-n)}}
}`,f=`__svelte_${X_(h)}_${a}`,d=sp(t),{stylesheet:g,rules:_}=vo.get(d)||J_(d,t);_[f]||(_[f]=!0,g.insertRule(`@keyframes ${f} ${h}`,g.cssRules.length));const v=t.style.animation||"";return t.style.animation=`${v?`${v}, `:""}${f} ${s}ms linear ${i}ms 1 both`,yo+=1,f}function x_(t,e){const n=(t.style.animation||"").split(", "),s=n.filter(e?r=>r.indexOf(e)<0:r=>r.indexOf("__svelte")===-1),i=n.length-s.length;i&&(t.style.animation=s.join(", "),yo-=i,yo||Z_())}function Z_(){Ql(()=>{yo||(vo.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&b(e)}),vo.clear())})}let Zi;function Ki(t){Zi=t}function gr(){if(!Zi)throw new Error("Function called outside component initialization");return Zi}function ev(t){gr().$$.on_mount.push(t)}function _r(t){gr().$$.on_destroy.push(t)}function rp(){const t=gr();return(e,n,{cancelable:s=!1}={})=>{const i=t.$$.callbacks[e];if(i){const r=ip(e,n,{cancelable:s});return i.slice().forEach(o=>{o.call(t,r)}),!r.defaultPrevented}return!0}}function Gi(t,e){return gr().$$.context.set(t,e),e}function bs(t){return gr().$$.context.get(t)}function tv(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(s=>s.call(this,e))}const Ui=[],Yn=[],ro=[],rl=[],op=Promise.resolve();let ol=!1;function ap(){ol||(ol=!0,op.then(lp))}function nv(){return ap(),op}function xe(t){ro.push(t)}function Bs(t){rl.push(t)}const Pa=new Set;let Xr=0;function lp(){const t=Zi;do{for(;Xr<Ui.length;){const e=Ui[Xr];Xr++,Ki(e),sv(e.$$)}for(Ki(null),Ui.length=0,Xr=0;Yn.length;)Yn.pop()();for(let e=0;e<ro.length;e+=1){const n=ro[e];Pa.has(n)||(Pa.add(n),n())}ro.length=0}while(Ui.length);for(;rl.length;)rl.pop()();ol=!1,Pa.clear(),Ki(t)}function sv(t){if(t.fragment!==null){t.update(),Ze(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(xe)}}let Mi;function iv(){return Mi||(Mi=Promise.resolve(),Mi.then(()=>{Mi=null})),Mi}function Na(t,e,n){t.dispatchEvent(ip(`${e?"intro":"outro"}${n}`))}const oo=new Set;let zn;function bt(){zn={r:0,c:[],p:zn}}function wt(){zn.r||Ze(zn.c),zn=zn.p}function H(t,e){t&&t.i&&(oo.delete(t),t.i(e))}function J(t,e,n,s){if(t&&t.o){if(oo.has(t))return;oo.add(t),zn.c.push(()=>{oo.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}const rv={duration:0};function fn(t,e,n,s){let i=e(t,n),r=s?0:1,o=null,a=null,l=null;function c(){l&&x_(t,l)}function h(d,g){const _=d.b-r;return g*=Math.abs(_),{a:r,b:d.b,d:_,duration:g,start:d.start,end:d.start+g,group:d.group}}function f(d){const{delay:g=0,duration:_=300,easing:v=xd,tick:y=he,css:E}=i||rv,T={start:K_()+g,b:d};d||(T.group=zn,zn.r+=1),o||a?a=T:(E&&(c(),l=vu(t,r,d,_,g,v,E)),d&&y(0,1),o=h(T,_),xe(()=>Na(t,d,"start")),G_(L=>{if(a&&L>a.start&&(o=h(a,_),a=null,Na(t,o.b,"start"),E&&(c(),l=vu(t,r,o.b,o.duration,0,v,i.css))),o){if(L>=o.end)y(r=o.b,1-r),Na(t,o.b,"end"),a||(o.b?c():--o.group.r||Ze(o.group.c)),o=null;else if(L>=o.start){const D=L-o.start;r=o.a+o.d*v(D/o.duration),y(r,1-r)}}return!!(o||a)}))}return{run(d){Wo(i)?iv().then(()=>{i=i(),f(d)}):f(d)},end(){c(),o=a=null}}}function _n(t,e){const n={},s={},i={$$scope:1};let r=t.length;for(;r--;){const o=t[r],a=e[r];if(a){for(const l in o)l in a||(s[l]=1);for(const l in a)i[l]||(n[l]=a[l],i[l]=1);t[r]=a}else for(const l in o)i[l]=1}for(const o in s)o in n||(n[o]=void 0);return n}function Xn(t){return typeof t=="object"&&t!==null?t:{}}function Vs(t,e,n){const s=t.$$.props[e];s!==void 0&&(t.$$.bound[s]=n,n(t.$$.ctx[s]))}function ge(t){t&&t.c()}function fe(t,e,n,s){const{fragment:i,after_update:r}=t.$$;i&&i.m(e,n),s||xe(()=>{const o=t.$$.on_mount.map(Zd).filter(Wo);t.$$.on_destroy?t.$$.on_destroy.push(...o):Ze(o),t.$$.on_mount=[]}),r.forEach(xe)}function de(t,e){const n=t.$$;n.fragment!==null&&(Ze(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ov(t,e){t.$$.dirty[0]===-1&&(Ui.push(t),ap(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ye(t,e,n,s,i,r,o,a=[-1]){const l=Zi;Ki(t);const c=t.$$={fragment:null,ctx:[],props:r,update:he,not_equal:i,bound:mu(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:mu(),dirty:a,skip_bound:!1,root:e.target||l.$$.root};o&&o(c.root);let h=!1;if(c.ctx=n?n(t,e.props||{},(f,d,...g)=>{const _=g.length?g[0]:d;return c.ctx&&i(c.ctx[f],c.ctx[f]=_)&&(!c.skip_bound&&c.bound[f]&&c.bound[f](_),h&&ov(t,f)),d}):[],c.update(),h=!0,Ze(c.before_update),c.fragment=s?s(c.ctx):!1,e.target){if(e.hydrate){const f=Y_(e.target);c.fragment&&c.fragment.l(f),f.forEach(b)}else c.fragment&&c.fragment.c();e.intro&&H(t.$$.fragment),fe(t,e.target,e.anchor,e.customElement),lp()}Ki(l)}class Xe{$destroy(){de(this,1),this.$destroy=he}$on(e,n){if(!Wo(n))return he;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const i=s.indexOf(n);i!==-1&&s.splice(i,1)}}$set(e){this.$$set&&!z_(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const yu=t=>typeof t>"u",cp=t=>typeof t=="function",up=t=>typeof t=="number";function av(t){return!t.defaultPrevented&&t.button===0&&!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function hp(){let t=0;return()=>t++}function lv(){return Math.random().toString(36).substring(2)}const ws=typeof window>"u";function fp(t,e,n){return t.addEventListener(e,n),()=>t.removeEventListener(e,n)}const al=(t,e)=>t?{}:{style:e},ii=t=>({"aria-hidden":"true",...al(t,"display:none;")}),ni=[];function cv(t,e){return{subscribe:yt(t,e).subscribe}}function yt(t,e=he){let n;const s=new Set;function i(a){if(Ge(t,a)&&(t=a,n)){const l=!ni.length;for(const c of s)c[1](),ni.push(c,t);if(l){for(let c=0;c<ni.length;c+=2)ni[c][0](ni[c+1]);ni.length=0}}}function r(a){i(a(t))}function o(a,l=he){const c=[a,l];return s.add(c),s.size===1&&(n=e(i)||he),a(t),()=>{s.delete(c),s.size===0&&(n(),n=null)}}return{set:i,update:r,subscribe:o}}function uv(t,e,n){const s=!Array.isArray(t),i=s?[t]:t,r=e.length<2;return cv(n,o=>{let a=!1;const l=[];let c=0,h=he;const f=()=>{if(c)return;h();const g=e(s?l[0]:l,o);r?o(g):h=Wo(g)?g:he},d=i.map((g,_)=>Hl(g,v=>{l[_]=v,c&=~(1<<_),a&&f()},()=>{c|=1<<_}));return a=!0,f(),function(){Ze(d),h()}})}const vr=t=>`@@svnav-ctx__${t}`,ll=vr("LOCATION"),pi=vr("ROUTER"),dp=vr("ROUTE"),hv=vr("ROUTE_PARAMS"),fv=vr("FOCUS_ELEM"),pp=/^:(.+)/,Fi=(t,e,n)=>t.substr(e,n),cl=(t,e)=>Fi(t,0,e.length)===e,dv=t=>t==="",pv=t=>pp.test(t),mp=t=>t[0]==="*",mv=t=>t.replace(/\*.*$/,""),gp=t=>t.replace(/(^\/+|\/+$)/g,"");function $n(t,e=!1){const n=gp(t).split("/");return e?n.filter(Boolean):n}const Oa=(t,e)=>t+(e?`?${e}`:""),Yl=t=>`/${gp(t)}`;function yr(...t){const e=s=>$n(s,!0).join("/"),n=t.map(e).join("/");return Yl(n)}const Xl=1,Qo=2,js=3,gv=4,_p=5,_v=6,vp=7,vv=8,yv=9,yp=10,bp=11,bv={[Xl]:"Link",[Qo]:"Route",[js]:"Router",[gv]:"useFocus",[_p]:"useLocation",[_v]:"useMatch",[vp]:"useNavigate",[vv]:"useParams",[yv]:"useResolvable",[yp]:"useResolve",[bp]:"navigate"},Jl=t=>bv[t];function wv(t,e){let n;return t===Qo?n=e.path?`path="${e.path}"`:"default":t===Xl?n=`to="${e.to}"`:t===js&&(n=`basepath="${e.basepath||""}"`),`<${Jl(t)} ${n||""} />`}function kv(t,e,n,s){const i=n&&wv(s||t,n),r=i?`

Occurred in: ${i}`:"",o=Jl(t),a=cp(e)?e(o):e;return`<${o}> ${a}${r}`}const wp=t=>(...e)=>t(kv(...e)),kp=wp(t=>{throw new Error(t)}),bo=wp(console.warn),bu=4,Ev=3,Tv=2,Iv=1,Cv=1;function Sv(t,e){const n=t.default?0:$n(t.fullPath).reduce((s,i)=>{let r=s;return r+=bu,dv(i)?r+=Cv:pv(i)?r+=Tv:mp(i)?r-=bu+Iv:r+=Ev,r},0);return{route:t,score:n,index:e}}function Av(t){return t.map(Sv).sort((e,n)=>e.score<n.score?1:e.score>n.score?-1:e.index-n.index)}function Ep(t,e){let n,s;const[i]=e.split("?"),r=$n(i),o=r[0]==="",a=Av(t);for(let l=0,c=a.length;l<c;l++){const{route:h}=a[l];let f=!1;const d={},g=E=>({...h,params:d,uri:E});if(h.default){s=g(e);continue}const _=$n(h.fullPath),v=Math.max(r.length,_.length);let y=0;for(;y<v;y++){const E=_[y],T=r[y];if(!yu(E)&&mp(E)){const D=E==="*"?"*":E.slice(1);d[D]=r.slice(y).map(decodeURIComponent).join("/");break}if(yu(T)){f=!0;break}const L=pp.exec(E);if(L&&!o){const D=decodeURIComponent(T);d[L[1]]=D}else if(E!==T){f=!0;break}}if(!f){n=g(yr(...r.slice(0,y)));break}}return n||s||null}function Tp(t,e){return Ep([t],e)}function Dv(t,e){if(cl(t,"/"))return t;const[n,s]=t.split("?"),[i]=e.split("?"),r=$n(n),o=$n(i);if(r[0]==="")return Oa(i,s);if(!cl(r[0],".")){const c=o.concat(r).join("/");return Oa((i==="/"?"":"/")+c,s)}const a=o.concat(r),l=[];return a.forEach(c=>{c===".."?l.pop():c!=="."&&l.push(c)}),Oa(`/${l.join("/")}`,s)}function wu(t,e){const{pathname:n,hash:s="",search:i="",state:r}=t,o=$n(e,!0),a=$n(n,!0);for(;o.length;)o[0]!==a[0]&&kp(js,`Invalid state: All locations must begin with the basepath "${e}", found "${n}"`),o.shift(),a.shift();return{pathname:yr(...a),hash:s,search:i,state:r}}const ku=t=>t.length===1?"":t,xl=t=>{const e=t.indexOf("?"),n=t.indexOf("#"),s=e!==-1,i=n!==-1,r=i?ku(Fi(t,n)):"",o=i?Fi(t,0,n):t,a=s?ku(Fi(o,e)):"";return{pathname:(s?Fi(o,0,e):o)||"/",search:a,hash:r}},Rv=t=>{const{pathname:e,search:n,hash:s}=t;return e+n+s};function Pv(t,e,n){return yr(n,Dv(t,e))}function Nv(t,e){const n=Yl(mv(t)),s=$n(n,!0),i=$n(e,!0).slice(0,s.length),r=Tp({fullPath:n},yr(...i));return r&&r.uri}const La="POP",Ov="PUSH",Lv="REPLACE";function Ma(t){return{...t.location,pathname:encodeURI(decodeURI(t.location.pathname)),state:t.history.state,_key:t.history.state&&t.history.state._key||"initial"}}function Mv(t){let e=[],n=Ma(t),s=La;const i=(r=e)=>r.forEach(o=>o({location:n,action:s}));return{get location(){return n},listen(r){e.push(r);const o=()=>{n=Ma(t),s=La,i([r])};i([r]);const a=fp(t,"popstate",o);return()=>{a(),e=e.filter(l=>l!==r)}},navigate(r,o){const{state:a={},replace:l=!1}=o||{};if(s=l?Lv:Ov,up(r))o&&bo(bp,"Navigation options (state or replace) are not supported, when passing a number as the first argument to navigate. They are ignored."),s=La,t.history.go(r);else{const c={...a,_key:lv()};try{t.history[l?"replaceState":"pushState"](c,"",r)}catch{t.location[l?"replace":"assign"](r)}}n=Ma(t),i()}}}function $a(t,e){return{...xl(e),state:t}}function $v(t="/"){let e=0,n=[$a(null,t)];return{get entries(){return n},get location(){return n[e]},addEventListener(){},removeEventListener(){},history:{get state(){return n[e].state},pushState(s,i,r){e++,n=n.slice(0,e),n.push($a(s,r))},replaceState(s,i,r){n[e]=$a(s,r)},go(s){const i=e+s;i<0||i>n.length-1||(e=i)}}}}const Uv=!!(!ws&&window.document&&window.document.createElement),Fv=!ws&&window.location.origin==="null",Bv=Mv(Uv&&!Fv?window:$v());let Hn=null,Ip=!0;function Vv(t,e){const n=document.querySelectorAll("[data-svnav-router]");for(let s=0;s<n.length;s++){const i=n[s],r=Number(i.dataset.svnavRouter);if(r===t)return!0;if(r===e)return!1}return!1}function jv(t){(!Hn||t.level>Hn.level||t.level===Hn.level&&Vv(t.routerId,Hn.routerId))&&(Hn=t)}function qv(){Hn=null}function Hv(){Ip=!1}function Eu(t){if(!t)return!1;const e="tabindex";try{if(!t.hasAttribute(e)){t.setAttribute(e,"-1");let n;n=fp(t,"blur",()=>{t.removeAttribute(e),n()})}return t.focus(),document.activeElement===t}catch{return!1}}function zv(t,e){return Number(t.dataset.svnavRouteEnd)===e}function Kv(t){return/^H[1-6]$/i.test(t.tagName)}function Tu(t,e=document){return e.querySelector(t)}function Gv(t){let n=Tu(`[data-svnav-route-start="${t}"]`).nextElementSibling;for(;!zv(n,t);){if(Kv(n))return n;const s=Tu("h1,h2,h3,h4,h5,h6",n);if(s)return s;n=n.nextElementSibling}return null}function Wv(t){Promise.resolve(di(t.focusElement)).then(e=>{const n=e||Gv(t.id);n||bo(js,`Could not find an element to focus. You should always render a header for accessibility reasons, or set a custom focus element via the "useFocus" hook. If you don't want this Route or Router to manage focus, pass "primary={false}" to it.`,t,Qo),!Eu(n)&&Eu(document.documentElement)})}const Qv=(t,e,n)=>(s,i)=>nv().then(()=>{if(!Hn||Ip){Hv();return}if(s&&Wv(Hn.route),t.announcements&&i){const{path:r,fullPath:o,meta:a,params:l,uri:c}=Hn.route,h=t.createAnnouncement({path:r,fullPath:o,meta:a,params:l,uri:c},di(n));Promise.resolve(h).then(f=>{e.set(f)})}qv()}),Iu="position:fixed;top:-1px;left:0;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;";function Yv(t){let e,n,s=[{role:"status"},{"aria-atomic":"true"},{"aria-live":"polite"},{"data-svnav-announcer":""},al(t[6],Iu)],i={};for(let r=0;r<s.length;r+=1)i=Ot(i,s[r]);return{c(){e=p("div"),n=S(t[0]),Nn(e,i)},m(r,o){k(r,e,o),u(e,n)},p(r,o){o[0]&1&&re(n,r[0]),Nn(e,i=_n(s,[{role:"status"},{"aria-atomic":"true"},{"aria-live":"polite"},{"data-svnav-announcer":""},al(r[6],Iu)]))},d(r){r&&b(e)}}}function Xv(t){let e,n,s,i,r,o=[ii(t[6]),{"data-svnav-router":t[3]}],a={};for(let f=0;f<o.length;f+=1)a=Ot(a,o[f]);const l=t[22].default,c=zl(l,t,t[21],null);let h=t[2]&&t[4]&&t[1].announcements&&Yv(t);return{c(){e=p("div"),n=w(),c&&c.c(),s=w(),h&&h.c(),i=nn(),Nn(e,a)},m(f,d){k(f,e,d),k(f,n,d),c&&c.m(f,d),k(f,s,d),h&&h.m(f,d),k(f,i,d),r=!0},p(f,d){Nn(e,a=_n(o,[ii(f[6]),{"data-svnav-router":f[3]}])),c&&c.p&&(!r||d[0]&2097152)&&Gl(c,l,f,f[21],r?Kl(l,f[21],d,null):Wl(f[21]),null),f[2]&&f[4]&&f[1].announcements&&h.p(f,d)},i(f){r||(H(c,f),r=!0)},o(f){J(c,f),r=!1},d(f){f&&b(e),f&&b(n),c&&c.d(f),f&&b(s),h&&h.d(f),f&&b(i)}}}const Jv=hp(),Cu="/";function xv(t,e,n){let s,i,r,o,a,{$$slots:l={},$$scope:c}=e,{basepath:h=Cu}=e,{url:f=null}=e,{history:d=Bv}=e,{primary:g=!0}=e,{a11y:_={}}=e,{disableInlineStyles:v=!1}=e;const y={createAnnouncement:$=>`Navigated to ${$.uri}`,announcements:!0,..._},E=h,T=Yl(h),L=bs(ll),D=bs(pi),U=!L,G=Jv(),N=g&&!(D&&!D.manageFocus),F=yt("");Oe(t,F,$=>n(0,a=$));const K=D?D.disableInlineStyles:v,R=yt([]);Oe(t,R,$=>n(20,o=$));const Q=yt(null);Oe(t,Q,$=>n(18,i=$));let j=!1;const W=U?0:D.level+1,x=U?yt((()=>wu(ws?xl(f):d.location,T))()):L;Oe(t,x,$=>n(17,s=$));const V=yt(s);Oe(t,V,$=>n(19,r=$));const le=Qv(y,F,x),Z=$=>C=>C.filter(M=>M.id!==$);function ce($){if(ws){if(j)return;const C=Tp($,s.pathname);if(C)return j=!0,C}else R.update(C=>{const M=Z($.id)(C);return M.push($),M})}function ie($){R.update(Z($))}return!U&&h!==Cu&&bo(js,'Only top-level Routers can have a "basepath" prop. It is ignored.',{basepath:h}),U&&(ev(()=>d.listen(C=>{const M=wu(C.location,T);V.set(s),x.set(M)})),Gi(ll,x)),Gi(pi,{activeRoute:Q,registerRoute:ce,unregisterRoute:ie,manageFocus:N,level:W,id:G,history:U?d:D.history,basepath:U?T:D.basepath,disableInlineStyles:K}),t.$$set=$=>{"basepath"in $&&n(11,h=$.basepath),"url"in $&&n(12,f=$.url),"history"in $&&n(13,d=$.history),"primary"in $&&n(14,g=$.primary),"a11y"in $&&n(15,_=$.a11y),"disableInlineStyles"in $&&n(16,v=$.disableInlineStyles),"$$scope"in $&&n(21,c=$.$$scope)},t.$$.update=()=>{if(t.$$.dirty[0]&2048&&h!==E&&bo(js,'You cannot change the "basepath" prop. It is ignored.'),t.$$.dirty[0]&1179648){const $=Ep(o,s.pathname);Q.set($)}if(t.$$.dirty[0]&655360&&U){const $=!!s.hash,C=!$&&N,M=!$||s.pathname!==r.pathname;le(C,M)}t.$$.dirty[0]&262144&&N&&i&&i.primary&&jv({level:W,routerId:G,route:i})},[a,y,U,G,N,F,K,R,Q,x,V,h,f,d,g,_,v,s,i,r,o,c,l]}class Zl extends Xe{constructor(e){super(),Ye(this,e,xv,Xv,Ge,{basepath:11,url:12,history:13,primary:14,a11y:15,disableInlineStyles:16},null,[-1,-1])}}function br(t,e,n=pi,s=js){bs(n)||kp(t,r=>`You cannot use ${r} outside of a ${Jl(s)}.`,e)}const Zv=t=>{const{subscribe:e}=bs(t);return{subscribe:e}};function Cp(){return br(_p),Zv(ll)}function Sp(){const{history:t}=bs(pi);return t}function Ap(){const t=bs(dp);return t?uv(t,e=>e.base):yt("/")}function Dp(){br(yp);const t=Ap(),{basepath:e}=bs(pi);return s=>Pv(s,di(t),e)}function Ys(){br(vp);const t=Dp(),{navigate:e}=Sp();return(s,i)=>{const r=up(s)?s:t(s);return e(r,i)}}const ey=t=>({params:t&16,location:t&8}),Su=t=>({params:ws?di(t[10]):t[4],location:t[3],navigate:t[11]});function Au(t){let e,n;return e=new Zl({props:{primary:t[1],$$slots:{default:[sy]},$$scope:{ctx:t}}}),{c(){ge(e.$$.fragment)},m(s,i){fe(e,s,i),n=!0},p(s,i){const r={};i&2&&(r.primary=s[1]),i&528409&&(r.$$scope={dirty:i,ctx:s}),e.$set(r)},i(s){n||(H(e.$$.fragment,s),n=!0)},o(s){J(e.$$.fragment,s),n=!1},d(s){de(e,s)}}}function ty(t){let e;const n=t[18].default,s=zl(n,t,t[19],Su);return{c(){s&&s.c()},m(i,r){s&&s.m(i,r),e=!0},p(i,r){s&&s.p&&(!e||r&524312)&&Gl(s,n,i,i[19],e?Kl(n,i[19],r,ey):Wl(i[19]),Su)},i(i){e||(H(s,i),e=!0)},o(i){J(s,i),e=!1},d(i){s&&s.d(i)}}}function ny(t){let e,n,s;const i=[{location:t[3]},{navigate:t[11]},ws?di(t[10]):t[4],t[12]];var r=t[0];function o(a){let l={};for(let c=0;c<i.length;c+=1)l=Ot(l,i[c]);return{props:l}}return r&&(e=_u(r,o())),{c(){e&&ge(e.$$.fragment),n=nn()},m(a,l){e&&fe(e,a,l),k(a,n,l),s=!0},p(a,l){const c=l&7192?_n(i,[l&8&&{location:a[3]},l&2048&&{navigate:a[11]},l&1040&&Xn(ws?di(a[10]):a[4]),l&4096&&Xn(a[12])]):{};if(r!==(r=a[0])){if(e){bt();const h=e;J(h.$$.fragment,1,0,()=>{de(h,1)}),wt()}r?(e=_u(r,o()),ge(e.$$.fragment),H(e.$$.fragment,1),fe(e,n.parentNode,n)):e=null}else r&&e.$set(c)},i(a){s||(e&&H(e.$$.fragment,a),s=!0)},o(a){e&&J(e.$$.fragment,a),s=!1},d(a){a&&b(n),e&&de(e,a)}}}function sy(t){let e,n,s,i;const r=[ny,ty],o=[];function a(l,c){return l[0]!==null?0:1}return e=a(t),n=o[e]=r[e](t),{c(){n.c(),s=nn()},m(l,c){o[e].m(l,c),k(l,s,c),i=!0},p(l,c){let h=e;e=a(l),e===h?o[e].p(l,c):(bt(),J(o[h],1,1,()=>{o[h]=null}),wt(),n=o[e],n?n.p(l,c):(n=o[e]=r[e](l),n.c()),H(n,1),n.m(s.parentNode,s))},i(l){i||(H(n),i=!0)},o(l){J(n),i=!1},d(l){o[e].d(l),l&&b(s)}}}function iy(t){let e,n,s,i,r,o=[ii(t[7]),{"data-svnav-route-start":t[5]}],a={};for(let f=0;f<o.length;f+=1)a=Ot(a,o[f]);let l=t[2]&&Au(t),c=[ii(t[7]),{"data-svnav-route-end":t[5]}],h={};for(let f=0;f<c.length;f+=1)h=Ot(h,c[f]);return{c(){e=p("div"),n=w(),l&&l.c(),s=w(),i=p("div"),Nn(e,a),Nn(i,h)},m(f,d){k(f,e,d),k(f,n,d),l&&l.m(f,d),k(f,s,d),k(f,i,d),r=!0},p(f,[d]){Nn(e,a=_n(o,[ii(f[7]),{"data-svnav-route-start":f[5]}])),f[2]?l?(l.p(f,d),d&4&&H(l,1)):(l=Au(f),l.c(),H(l,1),l.m(s.parentNode,s)):l&&(bt(),J(l,1,1,()=>{l=null}),wt()),Nn(i,h=_n(c,[ii(f[7]),{"data-svnav-route-end":f[5]}]))},i(f){r||(H(l),r=!0)},o(f){J(l),r=!1},d(f){f&&b(e),f&&b(n),l&&l.d(f),f&&b(s),f&&b(i)}}}const ry=hp();function oy(t,e,n){let s;const i=["path","component","meta","primary"];let r=_o(e,i),o,a,l,c,{$$slots:h={},$$scope:f}=e,{path:d=""}=e,{component:g=null}=e,{meta:_={}}=e,{primary:v=!0}=e;br(Qo,e);const y=ry(),{registerRoute:E,unregisterRoute:T,activeRoute:L,disableInlineStyles:D}=bs(pi);Oe(t,L,j=>n(16,o=j));const U=Ap();Oe(t,U,j=>n(17,l=j));const G=Cp();Oe(t,G,j=>n(3,a=j));const N=yt(null);let F;const K=yt(),R=yt({});Oe(t,R,j=>n(4,c=j)),Gi(dp,K),Gi(hv,R),Gi(fv,N);const Q=Ys();return ws||_r(()=>T(y)),t.$$set=j=>{n(24,e=Ot(Ot({},e),go(j))),n(12,r=_o(e,i)),"path"in j&&n(13,d=j.path),"component"in j&&n(0,g=j.component),"meta"in j&&n(14,_=j.meta),"primary"in j&&n(1,v=j.primary),"$$scope"in j&&n(19,f=j.$$scope)},t.$$.update=()=>{if(t.$$.dirty&155658){const j=d==="",W=yr(l,d),B={id:y,path:d,meta:_,default:j,fullPath:j?"":W,base:j?l:Nv(W,a.pathname),primary:v,focusElement:N};K.set(B),n(15,F=E(B))}if(t.$$.dirty&98304&&n(2,s=!!(F||o&&o.id===y)),t.$$.dirty&98308&&s){const{params:j}=F||o;R.set(j)}},e=go(e),[g,v,s,a,c,y,L,D,U,G,R,Q,r,d,_,F,o,l,h,f]}class Rn extends Xe{constructor(e){super(),Ye(this,e,oy,iy,Ge,{path:13,component:0,meta:14,primary:1})}}function ay(t){let e,n,s,i;const r=t[13].default,o=zl(r,t,t[12],null);let a=[{href:t[0]},t[2],t[1]],l={};for(let c=0;c<a.length;c+=1)l=Ot(l,a[c]);return{c(){e=p("a"),o&&o.c(),Nn(e,l)},m(c,h){k(c,e,h),o&&o.m(e,null),n=!0,s||(i=q(e,"click",t[4]),s=!0)},p(c,[h]){o&&o.p&&(!n||h&4096)&&Gl(o,r,c,c[12],n?Kl(r,c[12],h,null):Wl(c[12]),null),Nn(e,l=_n(a,[(!n||h&1)&&{href:c[0]},h&4&&c[2],h&2&&c[1]]))},i(c){n||(H(o,c),n=!0)},o(c){J(o,c),n=!1},d(c){c&&b(e),o&&o.d(c),s=!1,i()}}}function ly(t,e,n){let s,i,r,o,a,l;const c=["to","replace","state","getProps"];let h=_o(e,c),f,{$$slots:d={},$$scope:g}=e,{to:_}=e,{replace:v=!1}=e,{state:y={}}=e,{getProps:E=null}=e;br(Xl,e);const T=Cp();Oe(t,T,N=>n(11,f=N));const L=rp(),D=Dp(),{navigate:U}=Sp();function G(N){L("click",N),av(N)&&(N.preventDefault(),U(s,{state:y,replace:o||v}))}return t.$$set=N=>{n(19,e=Ot(Ot({},e),go(N))),n(18,h=_o(e,c)),"to"in N&&n(5,_=N.to),"replace"in N&&n(6,v=N.replace),"state"in N&&n(7,y=N.state),"getProps"in N&&n(8,E=N.getProps),"$$scope"in N&&n(12,g=N.$$scope)},t.$$.update=()=>{t.$$.dirty&2080&&n(0,s=D(_,f)),t.$$.dirty&2049&&n(10,i=cl(f.pathname,s)),t.$$.dirty&2049&&n(9,r=s===f.pathname),t.$$.dirty&2049&&(o=xl(s)===Rv(f)),t.$$.dirty&512&&n(2,a=r?{"aria-current":"page"}:{}),n(1,l=(()=>{if(cp(E)){const N=E({location:f,href:s,isPartiallyCurrent:i,isCurrent:r});return{...h,...N}}return h})())},e=go(e),[s,l,a,T,G,_,v,y,E,r,i,f,g,d]}class un extends Xe{constructor(e){super(),Ye(this,e,ly,ay,Ge,{to:5,replace:6,state:7,getProps:8})}}const Rp="/to-deploy-mh/assets/logoMH.9387adb0.png",cy="/to-deploy-mh/assets/menu.9ddfd9f8.svg",Ke=yt(""),ul=yt([]),Pp=yt([]),hl=yt([]),Ua=yt(),et=yt({typeContact:"",name:"",lastname:"",lastContact:"",telephon:"",email:"",selecMC:"",propCont:"",comContact:"",rangeProp:"",contMode:"",budget:"",numBeds:"",numBaths:"",halfBathroom:"",numParks:"",modePay:"",selecTP:"",contactType:"",contactStage:"",createdAt:"",locaProperty:[],tagsProperty:[],sendedProperties:[]}),We=yt({typeProperty:"",typeSaller:"",claveEB:"",claveMH:"",createdAt:"",nameProperty:"",price:"",beds:"",bathroom:"",halfBathroom:"",park:"",areaBuilding:"",areaTotal:"",description:"",urlImage:"",urlProp:"",urlSinergy:"",colonia:"",rangeProp:"",selectTP:"",selecTO:"",typeOperation:"",tagsProperty:[],locaProperty:[],binnacle:[]}),as=yt({task:"",isComplete:"",createdAt:"",endTask:"",timeTask:"",notes:"",user:"",id:""}),Jr=yt({date:"",commBinnacle:"",action:"",to:""}),uy=["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","S\xE1bado"],hy=["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"];function kt(t){t=new Date(t);let e=t.getDate();typeof t!="string"&&(e=e+1),e<10&&(e="0"+e);let n=hy[t.getMonth()],s=t.getFullYear();return`${e}/${n}/${s}`}function Du(t){t=new Date(t);let e=t.getMinutes();e.length<2&&(e="0"+e);let n=t.getHours();return n>12&&(n=n-12),n<10&&(n="0"+n),t.getDate(),`${n}:${e}`}function Ru(t){return t=new Date(+t),`${uy[t.getDay()]}-`}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Np=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},fy=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Op={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,h=r>>2,f=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,g=c&63;l||(g=64,o||(d=64)),s.push(n[h],n[f],n[d],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Np(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):fy(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||f==null)throw Error();const d=r<<2|a>>4;if(s.push(d),c!==64){const g=a<<4&240|c>>2;if(s.push(g),f!==64){const _=c<<6&192|f;s.push(_)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},dy=function(t){const e=Np(t);return Op.encodeByteArray(e,!0)},wo=function(t){return dy(t).replace(/\./g,"")},Lp=function(t){try{return Op.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function py(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Xt())}function my(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function gy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function _y(){const t=Xt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function vy(){return typeof indexedDB=="object"}function yy(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}function by(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const wy=()=>by().__FIREBASE_DEFAULTS__,ky=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t=process.env.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Ey=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Lp(t[1]);return e&&JSON.parse(e)},ec=()=>{try{return wy()||ky()||Ey()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Mp=t=>{var e,n;return(n=(e=ec())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Ty=t=>{const e=Mp(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Iy=()=>{var t;return(t=ec())===null||t===void 0?void 0:t.config},$p=t=>{var e;return(e=ec())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cy{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Sy(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[wo(JSON.stringify(n)),wo(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ay="FirebaseError";class ns extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Ay,Object.setPrototypeOf(this,ns.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,wr.prototype.create)}}class wr{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Dy(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new ns(i,a,s)}}function Dy(t,e){return t.replace(Ry,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Ry=/\{\$([^}]+)}/g;function Py(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ko(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Pu(r)&&Pu(o)){if(!ko(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Pu(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kr(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Bi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function Vi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Ny(t,e){const n=new Oy(t,e);return n.subscribe.bind(n)}class Oy{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Ly(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=Fa),i.error===void 0&&(i.error=Fa),i.complete===void 0&&(i.complete=Fa);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ly(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Fa(){}/**
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
 */class My{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Cy;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Uy(e))try{this.getOrInitializeService({instanceIdentifier:Ps})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Ps){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ps){return this.instances.has(e)}getOptions(e=Ps){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:$y(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ps){return this.component?this.component.multipleInstances?e:Ps:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function $y(t){return t===Ps?void 0:t}function Uy(t){return t.instantiationMode==="EAGER"}/**
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
 */class Fy{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new My(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ze;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ze||(ze={}));const By={debug:ze.DEBUG,verbose:ze.VERBOSE,info:ze.INFO,warn:ze.WARN,error:ze.ERROR,silent:ze.SILENT},Vy=ze.INFO,jy={[ze.DEBUG]:"log",[ze.VERBOSE]:"log",[ze.INFO]:"info",[ze.WARN]:"warn",[ze.ERROR]:"error"},qy=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=jy[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class tc{constructor(e){this.name=e,this._logLevel=Vy,this._logHandler=qy,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ze))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?By[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ze.DEBUG,...e),this._logHandler(this,ze.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ze.VERBOSE,...e),this._logHandler(this,ze.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ze.INFO,...e),this._logHandler(this,ze.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ze.WARN,...e),this._logHandler(this,ze.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ze.ERROR,...e),this._logHandler(this,ze.ERROR,...e)}}const Hy=(t,e)=>e.some(n=>t instanceof n);let Nu,Ou;function zy(){return Nu||(Nu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ky(){return Ou||(Ou=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Up=new WeakMap,fl=new WeakMap,Fp=new WeakMap,Ba=new WeakMap,nc=new WeakMap;function Gy(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(ds(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Up.set(n,t)}).catch(()=>{}),nc.set(e,t),e}function Wy(t){if(fl.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});fl.set(t,e)}let dl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return fl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Fp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ds(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Qy(t){dl=t(dl)}function Yy(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Va(this),e,...n);return Fp.set(s,e.sort?e.sort():[e]),ds(s)}:Ky().includes(t)?function(...e){return t.apply(Va(this),e),ds(Up.get(this))}:function(...e){return ds(t.apply(Va(this),e))}}function Xy(t){return typeof t=="function"?Yy(t):(t instanceof IDBTransaction&&Wy(t),Hy(t,zy())?new Proxy(t,dl):t)}function ds(t){if(t instanceof IDBRequest)return Gy(t);if(Ba.has(t))return Ba.get(t);const e=Xy(t);return e!==t&&(Ba.set(t,e),nc.set(e,t)),e}const Va=t=>nc.get(t);function Jy(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=ds(o);return s&&o.addEventListener("upgradeneeded",l=>{s(ds(o.result),l.oldVersion,l.newVersion,ds(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const xy=["get","getKey","getAll","getAllKeys","count"],Zy=["put","add","delete","clear"],ja=new Map;function Lu(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ja.get(e))return ja.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Zy.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||xy.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return ja.set(e,r),r}Qy(t=>({...t,get:(e,n,s)=>Lu(e,n)||t.get(e,n,s),has:(e,n)=>!!Lu(e,n)||t.has(e,n)}));/**
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
 */class e0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(t0(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function t0(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const pl="@firebase/app",Mu="0.8.2";/**
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
 */const Hs=new tc("@firebase/app"),n0="@firebase/app-compat",s0="@firebase/analytics-compat",i0="@firebase/analytics",r0="@firebase/app-check-compat",o0="@firebase/app-check",a0="@firebase/auth",l0="@firebase/auth-compat",c0="@firebase/database",u0="@firebase/database-compat",h0="@firebase/functions",f0="@firebase/functions-compat",d0="@firebase/installations",p0="@firebase/installations-compat",m0="@firebase/messaging",g0="@firebase/messaging-compat",_0="@firebase/performance",v0="@firebase/performance-compat",y0="@firebase/remote-config",b0="@firebase/remote-config-compat",w0="@firebase/storage",k0="@firebase/storage-compat",E0="@firebase/firestore",T0="@firebase/firestore-compat",I0="firebase",C0="9.12.1";/**
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
 */const ml="[DEFAULT]",S0={[pl]:"fire-core",[n0]:"fire-core-compat",[i0]:"fire-analytics",[s0]:"fire-analytics-compat",[o0]:"fire-app-check",[r0]:"fire-app-check-compat",[a0]:"fire-auth",[l0]:"fire-auth-compat",[c0]:"fire-rtdb",[u0]:"fire-rtdb-compat",[h0]:"fire-fn",[f0]:"fire-fn-compat",[d0]:"fire-iid",[p0]:"fire-iid-compat",[m0]:"fire-fcm",[g0]:"fire-fcm-compat",[_0]:"fire-perf",[v0]:"fire-perf-compat",[y0]:"fire-rc",[b0]:"fire-rc-compat",[w0]:"fire-gcs",[k0]:"fire-gcs-compat",[E0]:"fire-fst",[T0]:"fire-fst-compat","fire-js":"fire-js",[I0]:"fire-js-all"};/**
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
 */const Eo=new Map,gl=new Map;function A0(t,e){try{t.container.addComponent(e)}catch(n){Hs.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function mi(t){const e=t.name;if(gl.has(e))return Hs.debug(`There were multiple attempts to register component ${e}.`),!1;gl.set(e,t);for(const n of Eo.values())A0(n,t);return!0}function sc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const D0={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ps=new wr("app","Firebase",D0);/**
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
 */class R0{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new qs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ps.create("app-deleted",{appName:this._name})}}/**
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
 */const Er=C0;function Bp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:ml,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw ps.create("bad-app-name",{appName:String(i)});if(n||(n=Iy()),!n)throw ps.create("no-options");const r=Eo.get(i);if(r){if(ko(n,r.options)&&ko(s,r.config))return r;throw ps.create("duplicate-app",{appName:i})}const o=new Fy(i);for(const l of gl.values())o.addComponent(l);const a=new R0(n,s,o);return Eo.set(i,a),a}function Vp(t=ml){const e=Eo.get(t);if(!e&&t===ml)return Bp();if(!e)throw ps.create("no-app",{appName:t});return e}function ms(t,e,n){var s;let i=(s=S0[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Hs.warn(a.join(" "));return}mi(new qs(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const P0="firebase-heartbeat-database",N0=1,er="firebase-heartbeat-store";let qa=null;function jp(){return qa||(qa=Jy(P0,N0,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(er)}}}).catch(t=>{throw ps.create("idb-open",{originalErrorMessage:t.message})})),qa}async function O0(t){var e;try{return(await jp()).transaction(er).objectStore(er).get(qp(t))}catch(n){if(n instanceof ns)Hs.warn(n.message);else{const s=ps.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});Hs.warn(s.message)}}}async function $u(t,e){var n;try{const i=(await jp()).transaction(er,"readwrite");return await i.objectStore(er).put(e,qp(t)),i.done}catch(s){if(s instanceof ns)Hs.warn(s.message);else{const i=ps.create("idb-set",{originalErrorMessage:(n=s)===null||n===void 0?void 0:n.message});Hs.warn(i.message)}}}function qp(t){return`${t.name}!${t.options.appId}`}/**
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
 */const L0=1024,M0=30*24*60*60*1e3;class $0{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new F0(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Uu();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=M0}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Uu(),{heartbeatsToSend:n,unsentEntries:s}=U0(this._heartbeatsCache.heartbeats),i=wo(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Uu(){return new Date().toISOString().substring(0,10)}function U0(t,e=L0){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Fu(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Fu(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class F0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return vy()?yy().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await O0(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return $u(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return $u(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Fu(t){return wo(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function B0(t){mi(new qs("platform-logger",e=>new e0(e),"PRIVATE")),mi(new qs("heartbeat",e=>new $0(e),"PRIVATE")),ms(pl,Mu,t),ms(pl,Mu,"esm2017"),ms("fire-js","")}B0("");var V0="firebase",j0="9.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ms(V0,j0,"app");var q0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},_e,ic=ic||{},Te=q0||self;function To(){}function Yo(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Tr(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function H0(t){return Object.prototype.hasOwnProperty.call(t,Ha)&&t[Ha]||(t[Ha]=++z0)}var Ha="closure_uid_"+(1e9*Math.random()>>>0),z0=0;function K0(t,e,n){return t.call.apply(t.bind,arguments)}function G0(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Wt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Wt=K0:Wt=G0,Wt.apply(null,arguments)}function xr(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function qt(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function Cs(){this.s=this.s,this.o=this.o}var W0=0;Cs.prototype.s=!1;Cs.prototype.na=function(){!this.s&&(this.s=!0,this.M(),W0!=0)&&H0(this)};Cs.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Hp=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function rc(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Bu(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Yo(s)){const i=t.length||0,r=s.length||0;t.length=i+r;for(let o=0;o<r;o++)t[i+o]=s[o]}else t.push(s)}}function Qt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Qt.prototype.h=function(){this.defaultPrevented=!0};var Q0=function(){if(!Te.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Te.addEventListener("test",To,e),Te.removeEventListener("test",To,e)}catch{}return t}();function Io(t){return/^[\s\xa0]*$/.test(t)}var Vu=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function za(t,e){return t<e?-1:t>e?1:0}function Xo(){var t=Te.navigator;return t&&(t=t.userAgent)?t:""}function Pn(t){return Xo().indexOf(t)!=-1}function oc(t){return oc[" "](t),t}oc[" "]=To;function Y0(t){var e=x0;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var X0=Pn("Opera"),gi=Pn("Trident")||Pn("MSIE"),zp=Pn("Edge"),_l=zp||gi,Kp=Pn("Gecko")&&!(Xo().toLowerCase().indexOf("webkit")!=-1&&!Pn("Edge"))&&!(Pn("Trident")||Pn("MSIE"))&&!Pn("Edge"),J0=Xo().toLowerCase().indexOf("webkit")!=-1&&!Pn("Edge");function Gp(){var t=Te.document;return t?t.documentMode:void 0}var Co;e:{var Ka="",Ga=function(){var t=Xo();if(Kp)return/rv:([^\);]+)(\)|;)/.exec(t);if(zp)return/Edge\/([\d\.]+)/.exec(t);if(gi)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(J0)return/WebKit\/(\S+)/.exec(t);if(X0)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Ga&&(Ka=Ga?Ga[1]:""),gi){var Wa=Gp();if(Wa!=null&&Wa>parseFloat(Ka)){Co=String(Wa);break e}}Co=Ka}var x0={};function Z0(){return Y0(function(){let t=0;const e=Vu(String(Co)).split("."),n=Vu("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;t=za(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||za(i[2].length==0,r[2].length==0)||za(i[2],r[2]),i=i[3],r=r[3]}while(t==0)}return 0<=t})}var vl;if(Te.document&&gi){var ju=Gp();vl=ju||parseInt(Co,10)||void 0}else vl=void 0;var e1=vl;function tr(t,e){if(Qt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Kp){e:{try{oc(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:t1[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&tr.X.h.call(this)}}qt(tr,Qt);var t1={2:"touch",3:"pen",4:"mouse"};tr.prototype.h=function(){tr.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ir="closure_listenable_"+(1e6*Math.random()|0),n1=0;function s1(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=i,this.key=++n1,this.ba=this.ea=!1}function Jo(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function ac(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Wp(t){const e={};for(const n in t)e[n]=t[n];return e}const qu="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Qp(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<qu.length;r++)n=qu[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function xo(t){this.src=t,this.g={},this.h=0}xo.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=bl(t,e,s,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new s1(e,this.src,r,!!s,i),e.ea=n,t.push(e)),e};function yl(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=Hp(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(Jo(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function bl(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==s)return i}return-1}var lc="closure_lm_"+(1e6*Math.random()|0),Qa={};function Yp(t,e,n,s,i){if(s&&s.once)return Jp(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)Yp(t,e[r],n,s,i);return null}return n=hc(n),t&&t[Ir]?t.N(e,n,Tr(s)?!!s.capture:!!s,i):Xp(t,e,n,!1,s,i)}function Xp(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=Tr(i)?!!i.capture:!!i,a=uc(t);if(a||(t[lc]=a=new xo(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=i1(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)Q0||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(Zp(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function i1(){function t(n){return e.call(t.src,t.listener,n)}const e=r1;return t}function Jp(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)Jp(t,e[r],n,s,i);return null}return n=hc(n),t&&t[Ir]?t.O(e,n,Tr(s)?!!s.capture:!!s,i):Xp(t,e,n,!0,s,i)}function xp(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)xp(t,e[r],n,s,i);else s=Tr(s)?!!s.capture:!!s,n=hc(n),t&&t[Ir]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=bl(r,n,s,i),-1<n&&(Jo(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=uc(t))&&(e=t.g[e.toString()],t=-1,e&&(t=bl(e,n,s,i)),(n=-1<t?e[t]:null)&&cc(n))}function cc(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Ir])yl(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Zp(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=uc(e))?(yl(n,t),n.h==0&&(n.src=null,e[lc]=null)):Jo(t)}}}function Zp(t){return t in Qa?Qa[t]:Qa[t]="on"+t}function r1(t,e){if(t.ba)t=!0;else{e=new tr(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&cc(t),t=n.call(s,e)}return t}function uc(t){return t=t[lc],t instanceof xo?t:null}var Ya="__closure_events_fn_"+(1e9*Math.random()>>>0);function hc(t){return typeof t=="function"?t:(t[Ya]||(t[Ya]=function(e){return t.handleEvent(e)}),t[Ya])}function Lt(){Cs.call(this),this.i=new xo(this),this.P=this,this.I=null}qt(Lt,Cs);Lt.prototype[Ir]=!0;Lt.prototype.removeEventListener=function(t,e,n,s){xp(this,t,e,n,s)};function jt(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new Qt(e,t);else if(e instanceof Qt)e.target=e.target||t;else{var i=e;e=new Qt(s,t),Qp(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=Zr(o,s,!0,e)&&i}if(o=e.g=t,i=Zr(o,s,!0,e)&&i,i=Zr(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=Zr(o,s,!1,e)&&i}Lt.prototype.M=function(){if(Lt.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Jo(n[s]);delete t.g[e],t.h--}}this.I=null};Lt.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Lt.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Zr(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&yl(t.i,o),i=a.call(l,s)!==!1&&i}}return i&&!s.defaultPrevented}var fc=Te.JSON.stringify;function o1(){var t=nm;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class a1{constructor(){this.h=this.g=null}add(e,n){const s=em.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var em=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new l1,t=>t.reset());class l1{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function c1(t){Te.setTimeout(()=>{throw t},0)}function tm(t,e){wl||u1(),kl||(wl(),kl=!0),nm.add(t,e)}var wl;function u1(){var t=Te.Promise.resolve(void 0);wl=function(){t.then(h1)}}var kl=!1,nm=new a1;function h1(){for(var t;t=o1();){try{t.h.call(t.g)}catch(n){c1(n)}var e=em;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}kl=!1}function Zo(t,e){Lt.call(this),this.h=t||1,this.g=e||Te,this.j=Wt(this.lb,this),this.l=Date.now()}qt(Zo,Lt);_e=Zo.prototype;_e.ca=!1;_e.R=null;_e.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),jt(this,"tick"),this.ca&&(dc(this),this.start()))}};_e.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function dc(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}_e.M=function(){Zo.X.M.call(this),dc(this),delete this.g};function pc(t,e,n){if(typeof t=="function")n&&(t=Wt(t,n));else if(t&&typeof t.handleEvent=="function")t=Wt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Te.setTimeout(t,e||0)}function sm(t){t.g=pc(()=>{t.g=null,t.i&&(t.i=!1,sm(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class f1 extends Cs{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:sm(this)}M(){super.M(),this.g&&(Te.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function nr(t){Cs.call(this),this.h=t,this.g={}}qt(nr,Cs);var Hu=[];function im(t,e,n,s){Array.isArray(n)||(n&&(Hu[0]=n.toString()),n=Hu);for(var i=0;i<n.length;i++){var r=Yp(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function rm(t){ac(t.g,function(e,n){this.g.hasOwnProperty(n)&&cc(e)},t),t.g={}}nr.prototype.M=function(){nr.X.M.call(this),rm(this)};nr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ea(){this.g=!0}ea.prototype.Aa=function(){this.g=!1};function d1(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var h=c[0];c=c[1];var f=h.split("_");o=2<=f.length&&f[1]=="type"?o+(h+"="+c+"&"):o+(h+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function p1(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function ri(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+g1(t,n)+(s?" "+s:"")})}function m1(t,e){t.info(function(){return"TIMEOUT: "+e})}ea.prototype.info=function(){};function g1(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return fc(n)}catch{return e}}var Xs={},zu=null;function ta(){return zu=zu||new Lt}Xs.Pa="serverreachability";function om(t){Qt.call(this,Xs.Pa,t)}qt(om,Qt);function sr(t){const e=ta();jt(e,new om(e))}Xs.STAT_EVENT="statevent";function am(t,e){Qt.call(this,Xs.STAT_EVENT,t),this.stat=e}qt(am,Qt);function tn(t){const e=ta();jt(e,new am(e,t))}Xs.Qa="timingevent";function lm(t,e){Qt.call(this,Xs.Qa,t),this.size=e}qt(lm,Qt);function Cr(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Te.setTimeout(function(){t()},e)}var na={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},cm={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function mc(){}mc.prototype.h=null;function Ku(t){return t.h||(t.h=t.i())}function um(){}var Sr={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function gc(){Qt.call(this,"d")}qt(gc,Qt);function _c(){Qt.call(this,"c")}qt(_c,Qt);var El;function sa(){}qt(sa,mc);sa.prototype.g=function(){return new XMLHttpRequest};sa.prototype.i=function(){return{}};El=new sa;function Ar(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new nr(this),this.O=_1,t=_l?125:void 0,this.T=new Zo(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new hm}function hm(){this.i=null,this.g="",this.h=!1}var _1=45e3,Tl={},So={};_e=Ar.prototype;_e.setTimeout=function(t){this.O=t};function Il(t,e,n){t.K=1,t.v=ra(Jn(e)),t.s=n,t.P=!0,fm(t,null)}function fm(t,e){t.F=Date.now(),Dr(t),t.A=Jn(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),bm(n.i,"t",s),t.C=0,n=t.l.H,t.h=new hm,t.g=jm(t.l,n?e:null,!t.s),0<t.N&&(t.L=new f1(Wt(t.La,t,t.g),t.N)),im(t.S,t.g,"readystatechange",t.ib),e=t.H?Wp(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),sr(),d1(t.j,t.u,t.A,t.m,t.U,t.s)}_e.ib=function(t){t=t.target;const e=this.L;e&&Kn(t)==3?e.l():this.La(t)};_e.La=function(t){try{if(t==this.g)e:{const h=Kn(this.g);var e=this.g.Ea();const f=this.g.aa();if(!(3>h)&&(h!=3||_l||this.g&&(this.h.h||this.g.fa()||Yu(this.g)))){this.I||h!=4||e==7||(e==8||0>=f?sr(3):sr(2)),ia(this);var n=this.g.aa();this.Y=n;t:if(dm(this)){var s=Yu(this.g);t="";var i=s.length,r=Kn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ns(this),Wi(this);var o="";break t}this.h.i=new Te.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,p1(this.j,this.u,this.A,this.m,this.U,h,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Io(a)){var c=a;break t}}c=null}if(n=c)ri(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Cl(this,n);else{this.i=!1,this.o=3,tn(12),Ns(this),Wi(this);break e}}this.P?(pm(this,h,o),_l&&this.i&&h==3&&(im(this.S,this.T,"tick",this.hb),this.T.start())):(ri(this.j,this.m,o,null),Cl(this,o)),h==4&&Ns(this),this.i&&!this.I&&(h==4?Um(this.l,this):(this.i=!1,Dr(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,tn(12)):(this.o=0,tn(13)),Ns(this),Wi(this)}}}catch{}finally{}};function dm(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function pm(t,e,n){let s=!0,i;for(;!t.I&&t.C<n.length;)if(i=v1(t,n),i==So){e==4&&(t.o=4,tn(14),s=!1),ri(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Tl){t.o=4,tn(15),ri(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else ri(t.j,t.m,i,null),Cl(t,i);dm(t)&&i!=So&&i!=Tl&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,tn(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Tc(e),e.K=!0,tn(11))):(ri(t.j,t.m,n,"[Invalid Chunked Response]"),Ns(t),Wi(t))}_e.hb=function(){if(this.g){var t=Kn(this.g),e=this.g.fa();this.C<e.length&&(ia(this),pm(this,t,e),this.i&&t!=4&&Dr(this))}};function v1(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?So:(n=Number(e.substring(n,s)),isNaN(n)?Tl:(s+=1,s+n>e.length?So:(e=e.substr(s,n),t.C=s+n,e)))}_e.cancel=function(){this.I=!0,Ns(this)};function Dr(t){t.V=Date.now()+t.O,mm(t,t.O)}function mm(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Cr(Wt(t.gb,t),e)}function ia(t){t.B&&(Te.clearTimeout(t.B),t.B=null)}_e.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(m1(this.j,this.A),this.K!=2&&(sr(),tn(17)),Ns(this),this.o=2,Wi(this)):mm(this,this.V-t)};function Wi(t){t.l.G==0||t.I||Um(t.l,t)}function Ns(t){ia(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,dc(t.T),rm(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Cl(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Sl(n.h,t))){if(!t.J&&Sl(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Ro(n),la(n);else break e;Ec(n),tn(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=Cr(Wt(n.cb,n),6e3));if(1>=Em(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Os(n,11)}else if((t.J||n.g==t)&&Ro(n),!Io(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.T=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.I=c[1],n.ka=c[2];const h=c[3];h!=null&&(n.ma=h,n.j.info("VER="+n.ma));const f=c[4];f!=null&&(n.Ca=f,n.j.info("SVER="+n.Ca));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const g=t.g;if(g){const _=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_){var r=s.h;r.g||_.indexOf("spdy")==-1&&_.indexOf("quic")==-1&&_.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(vc(r,r.h),r.h=null))}if(s.D){const v=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(s.za=v,it(s.F,s.D,v))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=Vm(s,s.H?s.ka:null,s.V),o.J){Tm(s.h,o);var a=o,l=s.J;l&&a.setTimeout(l),a.B&&(ia(a),Dr(a)),s.g=o}else Mm(s);0<n.i.length&&ca(n)}else c[0]!="stop"&&c[0]!="close"||Os(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Os(n,7):kc(n):c[0]!="noop"&&n.l&&n.l.wa(c),n.A=0)}}sr(4)}catch{}}function y1(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Yo(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function b1(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Yo(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function gm(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Yo(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=b1(t),s=y1(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}var _m=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function w1(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Ms(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Ms){this.h=e!==void 0?e:t.h,Ao(this,t.j),this.s=t.s,this.g=t.g,Do(this,t.m),this.l=t.l,e=t.i;var n=new ir;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Gu(this,n),this.o=t.o}else t&&(n=String(t).match(_m))?(this.h=!!e,Ao(this,n[1]||"",!0),this.s=ji(n[2]||""),this.g=ji(n[3]||"",!0),Do(this,n[4]),this.l=ji(n[5]||"",!0),Gu(this,n[6]||"",!0),this.o=ji(n[7]||"")):(this.h=!!e,this.i=new ir(null,this.h))}Ms.prototype.toString=function(){var t=[],e=this.j;e&&t.push(qi(e,Wu,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(qi(e,Wu,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(qi(n,n.charAt(0)=="/"?T1:E1,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",qi(n,C1)),t.join("")};function Jn(t){return new Ms(t)}function Ao(t,e,n){t.j=n?ji(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Do(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Gu(t,e,n){e instanceof ir?(t.i=e,S1(t.i,t.h)):(n||(e=qi(e,I1)),t.i=new ir(e,t.h))}function it(t,e,n){t.i.set(e,n)}function ra(t){return it(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ji(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function qi(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,k1),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function k1(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Wu=/[#\/\?@]/g,E1=/[#\?:]/g,T1=/[#\?]/g,I1=/[#\?@]/g,C1=/#/g;function ir(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ss(t){t.g||(t.g=new Map,t.h=0,t.i&&w1(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}_e=ir.prototype;_e.add=function(t,e){Ss(this),this.i=null,t=Ci(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function vm(t,e){Ss(t),e=Ci(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function ym(t,e){return Ss(t),e=Ci(t,e),t.g.has(e)}_e.forEach=function(t,e){Ss(this),this.g.forEach(function(n,s){n.forEach(function(i){t.call(e,i,s,this)},this)},this)};_e.oa=function(){Ss(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let r=0;r<i.length;r++)n.push(e[s])}return n};_e.W=function(t){Ss(this);let e=[];if(typeof t=="string")ym(this,t)&&(e=e.concat(this.g.get(Ci(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};_e.set=function(t,e){return Ss(this),this.i=null,t=Ci(this,t),ym(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};_e.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function bm(t,e,n){vm(t,e),0<n.length&&(t.i=null,t.g.set(Ci(t,e),rc(n)),t.h+=n.length)}_e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};function Ci(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function S1(t,e){e&&!t.j&&(Ss(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(vm(this,s),bm(this,i,n))},t)),t.j=e}var A1=class{constructor(t,e){this.h=t,this.g=e}};function wm(t){this.l=t||D1,Te.PerformanceNavigationTiming?(t=Te.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Te.g&&Te.g.Ga&&Te.g.Ga()&&Te.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var D1=10;function km(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Em(t){return t.h?1:t.g?t.g.size:0}function Sl(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function vc(t,e){t.g?t.g.add(e):t.h=e}function Tm(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}wm.prototype.cancel=function(){if(this.i=Im(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Im(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return rc(t.i)}function yc(){}yc.prototype.stringify=function(t){return Te.JSON.stringify(t,void 0)};yc.prototype.parse=function(t){return Te.JSON.parse(t,void 0)};function R1(){this.g=new yc}function P1(t,e,n){const s=n||"";try{gm(t,function(i,r){let o=i;Tr(i)&&(o=fc(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function N1(t,e){const n=new ea;if(Te.Image){const s=new Image;s.onload=xr(eo,n,s,"TestLoadImage: loaded",!0,e),s.onerror=xr(eo,n,s,"TestLoadImage: error",!1,e),s.onabort=xr(eo,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=xr(eo,n,s,"TestLoadImage: timeout",!1,e),Te.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function eo(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function Rr(t){this.l=t.ac||null,this.j=t.jb||!1}qt(Rr,mc);Rr.prototype.g=function(){return new oa(this.l,this.j)};Rr.prototype.i=function(t){return function(){return t}}({});function oa(t,e){Lt.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=bc,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}qt(oa,Lt);var bc=0;_e=oa.prototype;_e.open=function(t,e){if(this.readyState!=bc)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,rr(this)};_e.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||Te).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};_e.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Pr(this)),this.readyState=bc};_e.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,rr(this)),this.g&&(this.readyState=3,rr(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof Te.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Cm(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function Cm(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}_e.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Pr(this):rr(this),this.readyState==3&&Cm(this)}};_e.Va=function(t){this.g&&(this.response=this.responseText=t,Pr(this))};_e.Ua=function(t){this.g&&(this.response=t,Pr(this))};_e.ga=function(){this.g&&Pr(this)};function Pr(t){t.readyState=4,t.l=null,t.j=null,t.A=null,rr(t)}_e.setRequestHeader=function(t,e){this.v.append(t,e)};_e.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};_e.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function rr(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(oa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var O1=Te.JSON.parse;function ct(t){Lt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Sm,this.K=this.L=!1}qt(ct,Lt);var Sm="",L1=/^https?$/i,M1=["POST","PUT"];_e=ct.prototype;_e.Ka=function(t){this.L=t};_e.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():El.g(),this.C=this.u?Ku(this.u):Ku(El),this.g.onreadystatechange=Wt(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){Qu(this,r);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=Te.FormData&&t instanceof Te.FormData,!(0<=Hp(M1,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Rm(this),0<this.B&&((this.K=$1(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Wt(this.qa,this)):this.A=pc(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){Qu(this,r)}};function $1(t){return gi&&Z0()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}_e.qa=function(){typeof ic<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,jt(this,"timeout"),this.abort(8))};function Qu(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Am(t),aa(t)}function Am(t){t.D||(t.D=!0,jt(t,"complete"),jt(t,"error"))}_e.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,jt(this,"complete"),jt(this,"abort"),aa(this))};_e.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),aa(this,!0)),ct.X.M.call(this)};_e.Ha=function(){this.s||(this.F||this.v||this.l?Dm(this):this.fb())};_e.fb=function(){Dm(this)};function Dm(t){if(t.h&&typeof ic<"u"&&(!t.C[1]||Kn(t)!=4||t.aa()!=2)){if(t.v&&Kn(t)==4)pc(t.Ha,0,t);else if(jt(t,"readystatechange"),Kn(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var i=String(t.H).match(_m)[1]||null;if(!i&&Te.self&&Te.self.location){var r=Te.self.location.protocol;i=r.substr(0,r.length-1)}s=!L1.test(i?i.toLowerCase():"")}n=s}if(n)jt(t,"complete"),jt(t,"success");else{t.m=6;try{var o=2<Kn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",Am(t)}}finally{aa(t)}}}}function aa(t,e){if(t.g){Rm(t);const n=t.g,s=t.C[0]?To:null;t.g=null,t.C=null,e||jt(t,"ready");try{n.onreadystatechange=s}catch{}}}function Rm(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(Te.clearTimeout(t.A),t.A=null)}function Kn(t){return t.g?t.g.readyState:0}_e.aa=function(){try{return 2<Kn(this)?this.g.status:-1}catch{return-1}};_e.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};_e.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),O1(e)}};function Yu(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Sm:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}_e.Ea=function(){return this.m};_e.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Pm(t){let e="";return ac(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function wc(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=Pm(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):it(t,e,n))}function $i(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Nm(t){this.Ca=0,this.i=[],this.j=new ea,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=$i("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=$i("baseRetryDelayMs",5e3,t),this.bb=$i("retryDelaySeedMs",1e4,t),this.$a=$i("forwardChannelMaxRetries",2,t),this.ta=$i("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new wm(t&&t.concurrentRequestLimit),this.Fa=new R1,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}_e=Nm.prototype;_e.ma=8;_e.G=1;function kc(t){if(Om(t),t.G==3){var e=t.U++,n=Jn(t.F);it(n,"SID",t.I),it(n,"RID",e),it(n,"TYPE","terminate"),Nr(t,n),e=new Ar(t,t.j,e,void 0),e.K=2,e.v=ra(Jn(n)),n=!1,Te.navigator&&Te.navigator.sendBeacon&&(n=Te.navigator.sendBeacon(e.v.toString(),"")),!n&&Te.Image&&(new Image().src=e.v,n=!0),n||(e.g=jm(e.l,null),e.g.da(e.v)),e.F=Date.now(),Dr(e)}Bm(t)}function la(t){t.g&&(Tc(t),t.g.cancel(),t.g=null)}function Om(t){la(t),t.u&&(Te.clearTimeout(t.u),t.u=null),Ro(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&Te.clearTimeout(t.m),t.m=null)}function ca(t){km(t.h)||t.m||(t.m=!0,tm(t.Ja,t),t.C=0)}function U1(t,e){return Em(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Cr(Wt(t.Ja,t,e),Fm(t,t.C)),t.C++,!0)}_e.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new Ar(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=Wp(r),Qp(r,this.S)):r=this.S),this.o!==null||this.N||(i.H=r,r=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Lm(this,i,e),n=Jn(this.F),it(n,"RID",t),it(n,"CVER",22),this.D&&it(n,"X-HTTP-Session-Id",this.D),Nr(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(Pm(r)))+"&"+e:this.o&&wc(n,this.o,r)),vc(this.h,i),this.Ya&&it(n,"TYPE","init"),this.O?(it(n,"$req",e),it(n,"SID","null"),i.Z=!0,Il(i,n,null)):Il(i,n,e),this.G=2}}else this.G==3&&(t?Xu(this,t):this.i.length==0||km(this.h)||Xu(this))};function Xu(t,e){var n;e?n=e.m:n=t.U++;const s=Jn(t.F);it(s,"SID",t.I),it(s,"RID",n),it(s,"AID",t.T),Nr(t,s),t.o&&t.s&&wc(s,t.o,t.s),n=new Ar(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Lm(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),vc(t.h,n),Il(n,s,e)}function Nr(t,e){t.ia&&ac(t.ia,function(n,s){it(e,s,n)}),t.l&&gm({},function(n,s){it(e,s,n)})}function Lm(t,e,n){n=Math.min(t.i.length,n);var s=t.l?Wt(t.l.Ra,t.l,t):null;e:{var i=t.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let c=i[l].h;const h=i[l].g;if(c-=r,0>c)r=Math.max(0,i[l].h-100),a=!1;else try{P1(h,o,"req"+c+"_")}catch{s&&s(h)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function Mm(t){t.g||t.u||(t.Z=1,tm(t.Ia,t),t.A=0)}function Ec(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Cr(Wt(t.Ia,t),Fm(t,t.A)),t.A++,!0)}_e.Ia=function(){if(this.u=null,$m(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Cr(Wt(this.eb,this),t)}};_e.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,tn(10),la(this),$m(this))};function Tc(t){t.B!=null&&(Te.clearTimeout(t.B),t.B=null)}function $m(t){t.g=new Ar(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Jn(t.sa);it(e,"RID","rpc"),it(e,"SID",t.I),it(e,"CI",t.L?"0":"1"),it(e,"AID",t.T),it(e,"TYPE","xmlhttp"),Nr(t,e),t.o&&t.s&&wc(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=ra(Jn(e)),n.s=null,n.P=!0,fm(n,t)}_e.cb=function(){this.v!=null&&(this.v=null,la(this),Ec(this),tn(19))};function Ro(t){t.v!=null&&(Te.clearTimeout(t.v),t.v=null)}function Um(t,e){var n=null;if(t.g==e){Ro(t),Tc(t),t.g=null;var s=2}else if(Sl(t.h,e))n=e.D,Tm(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;s=ta(),jt(s,new lm(s,n)),ca(t)}else Mm(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(s==1&&U1(t,e)||s==2&&Ec(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Os(t,5);break;case 4:Os(t,10);break;case 3:Os(t,6);break;default:Os(t,2)}}}function Fm(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Os(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=Wt(t.kb,t);n||(n=new Ms("//www.google.com/images/cleardot.gif"),Te.location&&Te.location.protocol=="http"||Ao(n,"https"),ra(n)),N1(n.toString(),s)}else tn(2);t.G=0,t.l&&t.l.va(e),Bm(t),Om(t)}_e.kb=function(t){t?(this.j.info("Successfully pinged google.com"),tn(2)):(this.j.info("Failed to ping google.com"),tn(1))};function Bm(t){if(t.G=0,t.la=[],t.l){const e=Im(t.h);(e.length!=0||t.i.length!=0)&&(Bu(t.la,e),Bu(t.la,t.i),t.h.i.length=0,rc(t.i),t.i.length=0),t.l.ua()}}function Vm(t,e,n){var s=n instanceof Ms?Jn(n):new Ms(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),Do(s,s.m);else{var i=Te.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new Ms(null,void 0);s&&Ao(r,s),e&&(r.g=e),i&&Do(r,i),n&&(r.l=n),s=r}return n=t.D,e=t.za,n&&e&&it(s,n,e),it(s,"VER",t.ma),Nr(t,s),s}function jm(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new ct(new Rr({jb:!0})):new ct(t.ra),e.Ka(t.H),e}function qm(){}_e=qm.prototype;_e.xa=function(){};_e.wa=function(){};_e.va=function(){};_e.ua=function(){};_e.Ra=function(){};function Po(){if(gi&&!(10<=Number(e1)))throw Error("Environmental error: no available transport.")}Po.prototype.g=function(t,e){return new vn(t,e)};function vn(t,e){Lt.call(this),this.g=new Nm(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Io(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Io(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Si(this)}qt(vn,Lt);vn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;tn(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Vm(t,null,t.V),ca(t)};vn.prototype.close=function(){kc(this.g)};vn.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=fc(t),t=n);e.i.push(new A1(e.ab++,t)),e.G==3&&ca(e)};vn.prototype.M=function(){this.g.l=null,delete this.j,kc(this.g),delete this.g,vn.X.M.call(this)};function Hm(t){gc.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}qt(Hm,gc);function zm(){_c.call(this),this.status=1}qt(zm,_c);function Si(t){this.g=t}qt(Si,qm);Si.prototype.xa=function(){jt(this.g,"a")};Si.prototype.wa=function(t){jt(this.g,new Hm(t))};Si.prototype.va=function(t){jt(this.g,new zm)};Si.prototype.ua=function(){jt(this.g,"b")};Po.prototype.createWebChannel=Po.prototype.g;vn.prototype.send=vn.prototype.u;vn.prototype.open=vn.prototype.m;vn.prototype.close=vn.prototype.close;na.NO_ERROR=0;na.TIMEOUT=8;na.HTTP_ERROR=6;cm.COMPLETE="complete";um.EventType=Sr;Sr.OPEN="a";Sr.CLOSE="b";Sr.ERROR="c";Sr.MESSAGE="d";Lt.prototype.listen=Lt.prototype.N;ct.prototype.listenOnce=ct.prototype.O;ct.prototype.getLastError=ct.prototype.Oa;ct.prototype.getLastErrorCode=ct.prototype.Ea;ct.prototype.getStatus=ct.prototype.aa;ct.prototype.getResponseJson=ct.prototype.Sa;ct.prototype.getResponseText=ct.prototype.fa;ct.prototype.send=ct.prototype.da;ct.prototype.setWithCredentials=ct.prototype.Ka;var F1=function(){return new Po},B1=function(){return ta()},Xa=na,V1=cm,j1=Xs,Ju={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},q1=Rr,to=um,H1=ct;const xu="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let Ai="9.12.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zs=new tc("@firebase/firestore");function Zu(){return zs.logLevel}function ye(t,...e){if(zs.logLevel<=ze.DEBUG){const n=e.map(Ic);zs.debug(`Firestore (${Ai}): ${t}`,...n)}}function xn(t,...e){if(zs.logLevel<=ze.ERROR){const n=e.map(Ic);zs.error(`Firestore (${Ai}): ${t}`,...n)}}function Al(t,...e){if(zs.logLevel<=ze.WARN){const n=e.map(Ic);zs.warn(`Firestore (${Ai}): ${t}`,...n)}}function Ic(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function Ie(t="Unexpected state"){const e=`FIRESTORE (${Ai}) INTERNAL ASSERTION FAILED: `+t;throw xn(e),new Error(e)}function tt(t,e){t||Ie()}function Se(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const te={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ke extends ns{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Km{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class z1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Kt.UNAUTHENTICATED))}shutdown(){}}class K1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class G1{constructor(e){this.t=e,this.currentUser=Kt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=l=>this.i!==s?(s=this.i,n(l)):Promise.resolve();let r=new gs;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new gs,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{ye("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(ye("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new gs)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(ye("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(tt(typeof s.accessToken=="string"),new Km(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return tt(e===null||typeof e=="string"),new Kt(e)}}class W1{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i,this.type="FirstParty",this.user=Kt.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(tt(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class Q1{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i}getToken(){return Promise.resolve(new W1(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(Kt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Y1{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class X1{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=r=>{r.error!=null&&ye("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.A;return this.A=r.token,ye("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{ye("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.T.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.T.getImmediate({optional:!0});r?i(r):ye("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(tt(typeof n.token=="string"),this.A=n.token,new Y1(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J1(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=J1(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function Qe(t,e){return t<e?-1:t>e?1:0}function _i(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ke(te.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ke(te.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new ke(te.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ke(te.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Tt.fromMillis(Date.now())}static fromDate(e){return Tt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Tt(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Qe(this.nanoseconds,e.nanoseconds):Qe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class or{constructor(e,n,s){n===void 0?n=0:n>e.length&&Ie(),s===void 0?s=e.length-n:s>e.length-n&&Ie(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return or.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof or?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class rt extends or{construct(e,n,s){return new rt(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new ke(te.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new rt(n)}static emptyPath(){return new rt([])}}const x1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Gt extends or{construct(e,n,s){return new Gt(e,n,s)}static isValidIdentifier(e){return x1.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Gt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Gt(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new ke(te.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new ke(te.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new ke(te.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new ke(te.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Gt(n)}static emptyPath(){return new Gt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e){this.path=e}static fromPath(e){return new we(rt.fromString(e))}static fromName(e){return new we(rt.fromString(e).popFirst(5))}static empty(){return new we(rt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&rt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return rt.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new we(new rt(e.slice()))}}function Z1(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=Re.fromTimestamp(s===1e9?new Tt(n+1,0):new Tt(n,s));return new ks(i,we.empty(),e)}function eb(t){return new ks(t.readTime,t.key,-1)}class ks{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new ks(Re.min(),we.empty(),-1)}static max(){return new ks(Re.max(),we.empty(),-1)}}function tb(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=we.comparator(t.documentKey,e.documentKey),n!==0?n:Qe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class sb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Or(t){if(t.code!==te.FAILED_PRECONDITION||t.message!==nb)throw t;ye("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Ie(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new ne((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof ne?n:ne.resolve(n)}catch(n){return ne.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):ne.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):ne.reject(n)}static resolve(e){return new ne((n,s)=>{n(e)})}static reject(e){return new ne((n,s)=>{s(e)})}static waitFor(e){return new ne((n,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},l=>s(l))}),o=!0,r===i&&n()})}static or(e){let n=ne.resolve(!1);for(const s of e)n=n.next(i=>i?ne.resolve(i):s());return n}static forEach(e,n){const s=[];return e.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(e,n){return new ne((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let l=0;l<r;l++){const c=l;n(e[c]).next(h=>{o[c]=h,++a,a===r&&s(o)},h=>i(h))}})}static doWhile(e,n){return new ne((s,i)=>{const r=()=>{e()===!0?n().next(()=>{r()},i):s()};r()})}}function Lr(t){return t.name==="IndexedDbTransactionError"}/**
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
 */function eh(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Js(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Wm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Cc.at=-1;class Ct{constructor(e,n){this.comparator=e,this.root=n||Bt.EMPTY}insert(e,n){return new Ct(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Bt.BLACK,null,null))}remove(e){return new Ct(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Bt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new no(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new no(this.root,e,this.comparator,!1)}getReverseIterator(){return new no(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new no(this.root,e,this.comparator,!0)}}class no{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Bt{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s!=null?s:Bt.RED,this.left=i!=null?i:Bt.EMPTY,this.right=r!=null?r:Bt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new Bt(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Bt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Bt.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Bt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Bt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Ie();const e=this.left.check();if(e!==this.right.check())throw Ie();return e+(this.isRed()?0:1)}}Bt.EMPTY=null,Bt.RED=!0,Bt.BLACK=!1;Bt.EMPTY=new class{constructor(){this.size=0}get key(){throw Ie()}get value(){throw Ie()}get color(){throw Ie()}get left(){throw Ie()}get right(){throw Ie()}copy(t,e,n,s,i){return this}insert(t,e,n){return new Bt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.comparator=e,this.data=new Ct(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new th(this.data.getIterator())}getIteratorFrom(e){return new th(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof It)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new It(this.comparator);return n.data=e,n}}class th{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e){this.fields=e,e.sort(Gt.comparator)}static empty(){return new kn([])}unionWith(e){let n=new It(Gt.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new kn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return _i(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new xt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(e);return new xt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Qe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}xt.EMPTY_BYTE_STRING=new xt("");const ib=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Es(t){if(tt(!!t),typeof t=="string"){let e=0;const n=ib.exec(t);if(tt(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:vt(t.seconds),nanos:vt(t.nanos)}}function vt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function vi(t){return typeof t=="string"?xt.fromBase64String(t):xt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qm(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Ym(t){const e=t.mapValue.fields.__previous_value__;return Qm(e)?Ym(e):e}function ar(t){const e=Es(t.mapValue.fields.__local_write_time__.timestampValue);return new Tt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rb{constructor(e,n,s,i,r,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class lr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new lr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof lr&&e.projectId===this.projectId&&e.database===this.database}}function ua(t){return t==null}function No(t){return t===0&&1/t==-1/0}function ob(t){return typeof t=="number"&&Number.isInteger(t)&&!No(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const so={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ks(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Qm(t)?4:ab(t)?9007199254740991:10:Ie()}function Un(t,e){if(t===e)return!0;const n=Ks(t);if(n!==Ks(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ar(t).isEqual(ar(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=Es(s.timestampValue),o=Es(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return vi(s.bytesValue).isEqual(vi(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return vt(s.geoPointValue.latitude)===vt(i.geoPointValue.latitude)&&vt(s.geoPointValue.longitude)===vt(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return vt(s.integerValue)===vt(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=vt(s.doubleValue),o=vt(i.doubleValue);return r===o?No(r)===No(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return _i(t.arrayValue.values||[],e.arrayValue.values||[],Un);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(eh(r)!==eh(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!Un(r[a],o[a])))return!1;return!0}(t,e);default:return Ie()}}function cr(t,e){return(t.values||[]).find(n=>Un(n,e))!==void 0}function yi(t,e){if(t===e)return 0;const n=Ks(t),s=Ks(e);if(n!==s)return Qe(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Qe(t.booleanValue,e.booleanValue);case 2:return function(i,r){const o=vt(i.integerValue||i.doubleValue),a=vt(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return nh(t.timestampValue,e.timestampValue);case 4:return nh(ar(t),ar(e));case 5:return Qe(t.stringValue,e.stringValue);case 6:return function(i,r){const o=vi(i),a=vi(r);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=Qe(o[l],a[l]);if(c!==0)return c}return Qe(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,r){const o=Qe(vt(i.latitude),vt(r.latitude));return o!==0?o:Qe(vt(i.longitude),vt(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=yi(o[l],a[l]);if(c)return c}return Qe(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,r){if(i===so.mapValue&&r===so.mapValue)return 0;if(i===so.mapValue)return 1;if(r===so.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=r.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let h=0;h<a.length&&h<c.length;++h){const f=Qe(a[h],c[h]);if(f!==0)return f;const d=yi(o[a[h]],l[c[h]]);if(d!==0)return d}return Qe(a.length,c.length)}(t.mapValue,e.mapValue);default:throw Ie()}}function nh(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Qe(t,e);const n=Es(t),s=Es(e),i=Qe(n.seconds,s.seconds);return i!==0?i:Qe(n.nanos,s.nanos)}function ci(t){return Dl(t)}function Dl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const i=Es(s);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?vi(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,we.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=Dl(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${Dl(s.fields[a])}`;return r+"}"}(t.mapValue):Ie();var e,n}function Rl(t){return!!t&&"integerValue"in t}function Sc(t){return!!t&&"arrayValue"in t}function sh(t){return!!t&&"nullValue"in t}function ih(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ao(t){return!!t&&"mapValue"in t}function Qi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Js(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Qi(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Qi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function ab(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e){this.value=e}static empty(){return new hn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!ao(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Qi(n)}setAll(e){let n=Gt.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=Qi(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());ao(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Un(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];ao(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){Js(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new hn(Qi(this.value))}}function Xm(t){const e=[];return Js(t.fields,(n,s)=>{const i=new Gt([n]);if(ao(s)){const r=Xm(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new kn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class lb{constructor(e,n=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.ht=null}}function rh(t,e=null,n=[],s=[],i=null,r=null,o=null){return new lb(t,e,n,s,i,r,o)}function Ac(t){const e=Se(t);if(e.ht===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>{return(i=s).field.canonicalString()+i.op.toString()+ci(i.value);var i}).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),ua(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>ci(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>ci(s)).join(",")),e.ht=n}return e.ht}function cb(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${ci(s.value)}`;var s}).join(", ")}]`),ua(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>ci(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>ci(n)).join(",")),`Target(${e})`}function Dc(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!_b(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],s=e.filters[i],n.op!==s.op||!n.field.isEqual(s.field)||!Un(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!ah(t.startAt,e.startAt)&&ah(t.endAt,e.endAt)}function Pl(t){return we.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class dn extends class{}{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.lt(e,n,s):new ub(e,n,s):n==="array-contains"?new db(e,s):n==="in"?new pb(e,s):n==="not-in"?new mb(e,s):n==="array-contains-any"?new gb(e,s):new dn(e,n,s)}static lt(e,n,s){return n==="in"?new hb(e,s):new fb(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.ft(yi(n,this.value)):n!==null&&Ks(this.value)===Ks(n)&&this.ft(yi(n,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ie()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class ub extends dn{constructor(e,n,s){super(e,n,s),this.key=we.fromName(s.referenceValue)}matches(e){const n=we.comparator(e.key,this.key);return this.ft(n)}}class hb extends dn{constructor(e,n){super(e,"in",n),this.keys=Jm("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class fb extends dn{constructor(e,n){super(e,"not-in",n),this.keys=Jm("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Jm(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>we.fromName(s.referenceValue))}class db extends dn{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Sc(n)&&cr(n.arrayValue,this.value)}}class pb extends dn{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&cr(this.value.arrayValue,n)}}class mb extends dn{constructor(e,n){super(e,"not-in",n)}matches(e){if(cr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!cr(this.value.arrayValue,n)}}class gb extends dn{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Sc(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>cr(this.value.arrayValue,s))}}class Oo{constructor(e,n){this.position=e,this.inclusive=n}}class Yi{constructor(e,n="asc"){this.field=e,this.dir=n}}function _b(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function oh(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=we.comparator(we.fromName(o.referenceValue),n.key):s=yi(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function ah(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Un(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(e,n=null,s=[],i=[],r=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this._t=null,this.wt=null,this.startAt,this.endAt}}function vb(t,e,n,s,i,r,o,a){return new ha(t,e,n,s,i,r,o,a)}function Rc(t){return new ha(t)}function lh(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function yb(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function bb(t){for(const e of t.filters)if(e.dt())return e.field;return null}function wb(t){return t.collectionGroup!==null}function ur(t){const e=Se(t);if(e._t===null){e._t=[];const n=bb(e),s=yb(e);if(n!==null&&s===null)n.isKeyField()||e._t.push(new Yi(n)),e._t.push(new Yi(Gt.keyField(),"asc"));else{let i=!1;for(const r of e.explicitOrderBy)e._t.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new Yi(Gt.keyField(),r))}}}return e._t}function Zn(t){const e=Se(t);if(!e.wt)if(e.limitType==="F")e.wt=rh(e.path,e.collectionGroup,ur(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of ur(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new Yi(r.field,o))}const s=e.endAt?new Oo(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Oo(e.startAt.position,e.startAt.inclusive):null;e.wt=rh(e.path,e.collectionGroup,n,e.filters,e.limit,s,i)}return e.wt}function Nl(t,e,n){return new ha(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function fa(t,e){return Dc(Zn(t),Zn(e))&&t.limitType===e.limitType}function xm(t){return`${Ac(Zn(t))}|lt:${t.limitType}`}function Ol(t){return`Query(target=${cb(Zn(t))}; limitType=${t.limitType})`}function Pc(t,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):we.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,s){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=oh(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,ur(n),s)||n.endAt&&!function(i,r,o){const a=oh(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,ur(n),s))}(t,e)}function kb(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Zm(t){return(e,n)=>{let s=!1;for(const i of ur(t)){const r=Eb(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function Eb(t,e,n){const s=t.field.isKeyField()?we.comparator(e.key,n.key):function(i,r,o){const a=r.data.field(i),l=o.data.field(i);return a!==null&&l!==null?yi(a,l):Ie()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return Ie()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eg(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:No(e)?"-0":e}}function tg(t){return{integerValue:""+t}}function Tb(t,e){return ob(e)?tg(e):eg(t,e)}/**
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
 */class da{constructor(){this._=void 0}}function Ib(t,e,n){return t instanceof Lo?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,e):t instanceof hr?sg(t,e):t instanceof fr?ig(t,e):function(s,i){const r=ng(s,i),o=ch(r)+ch(s.yt);return Rl(r)&&Rl(s.yt)?tg(o):eg(s.It,o)}(t,e)}function Cb(t,e,n){return t instanceof hr?sg(t,e):t instanceof fr?ig(t,e):n}function ng(t,e){return t instanceof Mo?Rl(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Lo extends da{}class hr extends da{constructor(e){super(),this.elements=e}}function sg(t,e){const n=rg(e);for(const s of t.elements)n.some(i=>Un(i,s))||n.push(s);return{arrayValue:{values:n}}}class fr extends da{constructor(e){super(),this.elements=e}}function ig(t,e){let n=rg(e);for(const s of t.elements)n=n.filter(i=>!Un(i,s));return{arrayValue:{values:n}}}class Mo extends da{constructor(e,n){super(),this.It=e,this.yt=n}}function ch(t){return vt(t.integerValue||t.doubleValue)}function rg(t){return Sc(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Sb(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof hr&&s instanceof hr||n instanceof fr&&s instanceof fr?_i(n.elements,s.elements,Un):n instanceof Mo&&s instanceof Mo?Un(n.yt,s.yt):n instanceof Lo&&s instanceof Lo}(t.transform,e.transform)}class Ab{constructor(e,n){this.version=e,this.transformResults=n}}class En{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new En}static exists(e){return new En(void 0,e)}static updateTime(e){return new En(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function lo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class pa{}function og(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Nc(t.key,En.none()):new Mr(t.key,t.data,En.none());{const n=t.data,s=hn.empty();let i=new It(Gt.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new As(t.key,s,new kn(i.toArray()),En.none())}}function Db(t,e,n){t instanceof Mr?function(s,i,r){const o=s.value.clone(),a=hh(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof As?function(s,i,r){if(!lo(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=hh(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(ag(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function Xi(t,e,n,s){return t instanceof Mr?function(i,r,o,a){if(!lo(i.precondition,r))return o;const l=i.value.clone(),c=fh(i.fieldTransforms,a,r);return l.setAll(c),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),null}(t,e,n,s):t instanceof As?function(i,r,o,a){if(!lo(i.precondition,r))return o;const l=fh(i.fieldTransforms,a,r),c=r.data;return c.setAll(ag(i)),c.setAll(l),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,s):function(i,r,o){return lo(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(t,e,n)}function Rb(t,e){let n=null;for(const s of t.fieldTransforms){const i=e.data.field(s.field),r=ng(s.transform,i||null);r!=null&&(n===null&&(n=hn.empty()),n.set(s.field,r))}return n||null}function uh(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&_i(n,s,(i,r)=>Sb(i,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Mr extends pa{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class As extends pa{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function ag(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function hh(t,e,n){const s=new Map;tt(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,Cb(o,a,n[i]))}return s}function fh(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,Ib(r,o,e))}return s}class Nc extends pa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Pb extends pa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nb{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _t,$e;function Ob(t){switch(t){default:return Ie();case te.CANCELLED:case te.UNKNOWN:case te.DEADLINE_EXCEEDED:case te.RESOURCE_EXHAUSTED:case te.INTERNAL:case te.UNAVAILABLE:case te.UNAUTHENTICATED:return!1;case te.INVALID_ARGUMENT:case te.NOT_FOUND:case te.ALREADY_EXISTS:case te.PERMISSION_DENIED:case te.FAILED_PRECONDITION:case te.ABORTED:case te.OUT_OF_RANGE:case te.UNIMPLEMENTED:case te.DATA_LOSS:return!0}}function lg(t){if(t===void 0)return xn("GRPC error has no .code"),te.UNKNOWN;switch(t){case _t.OK:return te.OK;case _t.CANCELLED:return te.CANCELLED;case _t.UNKNOWN:return te.UNKNOWN;case _t.DEADLINE_EXCEEDED:return te.DEADLINE_EXCEEDED;case _t.RESOURCE_EXHAUSTED:return te.RESOURCE_EXHAUSTED;case _t.INTERNAL:return te.INTERNAL;case _t.UNAVAILABLE:return te.UNAVAILABLE;case _t.UNAUTHENTICATED:return te.UNAUTHENTICATED;case _t.INVALID_ARGUMENT:return te.INVALID_ARGUMENT;case _t.NOT_FOUND:return te.NOT_FOUND;case _t.ALREADY_EXISTS:return te.ALREADY_EXISTS;case _t.PERMISSION_DENIED:return te.PERMISSION_DENIED;case _t.FAILED_PRECONDITION:return te.FAILED_PRECONDITION;case _t.ABORTED:return te.ABORTED;case _t.OUT_OF_RANGE:return te.OUT_OF_RANGE;case _t.UNIMPLEMENTED:return te.UNIMPLEMENTED;case _t.DATA_LOSS:return te.DATA_LOSS;default:return Ie()}}($e=_t||(_t={}))[$e.OK=0]="OK",$e[$e.CANCELLED=1]="CANCELLED",$e[$e.UNKNOWN=2]="UNKNOWN",$e[$e.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",$e[$e.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",$e[$e.NOT_FOUND=5]="NOT_FOUND",$e[$e.ALREADY_EXISTS=6]="ALREADY_EXISTS",$e[$e.PERMISSION_DENIED=7]="PERMISSION_DENIED",$e[$e.UNAUTHENTICATED=16]="UNAUTHENTICATED",$e[$e.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",$e[$e.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",$e[$e.ABORTED=10]="ABORTED",$e[$e.OUT_OF_RANGE=11]="OUT_OF_RANGE",$e[$e.UNIMPLEMENTED=12]="UNIMPLEMENTED",$e[$e.INTERNAL=13]="INTERNAL",$e[$e.UNAVAILABLE=14]="UNAVAILABLE",$e[$e.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Js(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return Wm(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lb=new Ct(we.comparator);function es(){return Lb}const cg=new Ct(we.comparator);function Hi(...t){let e=cg;for(const n of t)e=e.insert(n.key,n);return e}function ug(t){let e=cg;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Ls(){return Ji()}function hg(){return Ji()}function Ji(){return new Di(t=>t.toString(),(t,e)=>t.isEqual(e))}const Mb=new Ct(we.comparator),$b=new It(we.comparator);function Le(...t){let e=$b;for(const n of t)e=e.add(n);return e}const Ub=new It(Qe);function fg(){return Ub}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const i=new Map;return i.set(e,$r.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new ma(Re.min(),i,fg(),es(),Le())}}class $r{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new $r(s,n,Le(),Le(),Le())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(e,n,s,i){this.Tt=e,this.removedTargetIds=n,this.key=s,this.Et=i}}class dg{constructor(e,n){this.targetId=e,this.At=n}}class pg{constructor(e,n,s=xt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class dh{constructor(){this.Rt=0,this.bt=mh(),this.Pt=xt.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=Le(),n=Le(),s=Le();return this.bt.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:Ie()}}),new $r(this.Pt,this.vt,e,n,s)}Nt(){this.Vt=!1,this.bt=mh()}kt(e,n){this.Vt=!0,this.bt=this.bt.insert(e,n)}Ot(e){this.Vt=!0,this.bt=this.bt.remove(e)}Mt(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class Fb{constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=es(),this.qt=ph(),this.Kt=new It(Qe)}Gt(e){for(const n of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(n,e.Et):this.jt(n,e.key,e.Et);for(const n of e.removedTargetIds)this.jt(n,e.key,e.Et)}Wt(e){this.forEachTarget(e,n=>{const s=this.zt(n);switch(e.state){case 0:this.Ht(n)&&s.Ct(e.resumeToken);break;case 1:s.Ft(),s.St||s.Nt(),s.Ct(e.resumeToken);break;case 2:s.Ft(),s.St||this.removeTarget(n);break;case 3:this.Ht(n)&&(s.$t(),s.Ct(e.resumeToken));break;case 4:this.Ht(n)&&(this.Jt(n),s.Ct(e.resumeToken));break;default:Ie()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Lt.forEach((s,i)=>{this.Ht(i)&&n(i)})}Yt(e){const n=e.targetId,s=e.At.count,i=this.Xt(n);if(i){const r=i.target;if(Pl(r))if(s===0){const o=new we(r.path);this.jt(n,o,Vt.newNoDocument(o,Re.min()))}else tt(s===1);else this.Zt(n)!==s&&(this.Jt(n),this.Kt=this.Kt.add(n))}}te(e){const n=new Map;this.Lt.forEach((r,o)=>{const a=this.Xt(o);if(a){if(r.current&&Pl(a.target)){const l=new we(a.target.path);this.Ut.get(l)!==null||this.ee(o,l)||this.jt(o,l,Vt.newNoDocument(l,e))}r.Dt&&(n.set(o,r.xt()),r.Nt())}});let s=Le();this.qt.forEach((r,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Xt(l);return!c||c.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))}),this.Ut.forEach((r,o)=>o.setReadTime(e));const i=new ma(e,n,this.Kt,this.Ut,s);return this.Ut=es(),this.qt=ph(),this.Kt=new It(Qe),i}Qt(e,n){if(!this.Ht(e))return;const s=this.ee(e,n.key)?2:0;this.zt(e).kt(n.key,s),this.Ut=this.Ut.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ne(n.key).add(e))}jt(e,n,s){if(!this.Ht(e))return;const i=this.zt(e);this.ee(e,n)?i.kt(n,1):i.Ot(n),this.qt=this.qt.insert(n,this.ne(n).delete(e)),s&&(this.Ut=this.Ut.insert(n,s))}removeTarget(e){this.Lt.delete(e)}Zt(e){const n=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Mt(e){this.zt(e).Mt()}zt(e){let n=this.Lt.get(e);return n||(n=new dh,this.Lt.set(e,n)),n}ne(e){let n=this.qt.get(e);return n||(n=new It(Qe),this.qt=this.qt.insert(e,n)),n}Ht(e){const n=this.Xt(e)!==null;return n||ye("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.Lt.get(e);return n&&n.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new dh),this.Bt.getRemoteKeysForTarget(e).forEach(n=>{this.jt(e,n,null)})}ee(e,n){return this.Bt.getRemoteKeysForTarget(e).has(n)}}function ph(){return new Ct(we.comparator)}function mh(){return new Ct(we.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bb=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Vb=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class jb{constructor(e,n){this.databaseId=e,this.gt=n}}function $o(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function mg(t,e){return t.gt?e.toBase64():e.toUint8Array()}function qb(t,e){return $o(t,e.toTimestamp())}function Qn(t){return tt(!!t),Re.fromTimestamp(function(e){const n=Es(e);return new Tt(n.seconds,n.nanos)}(t))}function Oc(t,e){return function(n){return new rt(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function gg(t){const e=rt.fromString(t);return tt(yg(e)),e}function Ll(t,e){return Oc(t.databaseId,e.path)}function Ja(t,e){const n=gg(e);if(n.get(1)!==t.databaseId.projectId)throw new ke(te.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ke(te.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new we(_g(n))}function Ml(t,e){return Oc(t.databaseId,e)}function Hb(t){const e=gg(t);return e.length===4?rt.emptyPath():_g(e)}function $l(t){return new rt(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function _g(t){return tt(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function gh(t,e,n){return{name:Ll(t,e),fields:n.value.mapValue.fields}}function zb(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:Ie()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(l,c){return l.gt?(tt(c===void 0||typeof c=="string"),xt.fromBase64String(c||"")):(tt(c===void 0||c instanceof Uint8Array),xt.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const c=l.code===void 0?te.UNKNOWN:lg(l.code);return new ke(c,l.message||"")}(o);n=new pg(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=Ja(t,s.document.name),r=Qn(s.document.updateTime),o=new hn({mapValue:{fields:s.document.fields}}),a=Vt.newFoundDocument(i,r,o),l=s.targetIds||[],c=s.removedTargetIds||[];n=new co(l,c,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=Ja(t,s.document),r=s.readTime?Qn(s.readTime):Re.min(),o=Vt.newNoDocument(i,r),a=s.removedTargetIds||[];n=new co([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=Ja(t,s.document),r=s.removedTargetIds||[];n=new co([],r,i,null)}else{if(!("filter"in e))return Ie();{e.filter;const s=e.filter;s.targetId;const i=s.count||0,r=new Nb(i),o=s.targetId;n=new dg(o,r)}}return n}function Kb(t,e){let n;if(e instanceof Mr)n={update:gh(t,e.key,e.value)};else if(e instanceof Nc)n={delete:Ll(t,e.key)};else if(e instanceof As)n={update:gh(t,e.key,e.data),updateMask:tw(e.fieldMask)};else{if(!(e instanceof Pb))return Ie();n={verify:Ll(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof Lo)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof hr)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof fr)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Mo)return{fieldPath:r.field.canonicalString(),increment:o.yt};throw Ie()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:qb(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Ie()}(t,e.precondition)),n}function Gb(t,e){return t&&t.length>0?(tt(e!==void 0),t.map(n=>function(s,i){let r=s.updateTime?Qn(s.updateTime):Qn(i);return r.isEqual(Re.min())&&(r=Qn(i)),new Ab(r,s.transformResults||[])}(n,e))):[]}function Wb(t,e){return{documents:[Ml(t,e.path)]}}function Qb(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Ml(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Ml(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(l){if(l.length===0)return;const c=l.map(h=>function(f){if(f.op==="=="){if(ih(f.value))return{unaryFilter:{field:si(f.field),op:"IS_NAN"}};if(sh(f.value))return{unaryFilter:{field:si(f.field),op:"IS_NULL"}}}else if(f.op==="!="){if(ih(f.value))return{unaryFilter:{field:si(f.field),op:"IS_NOT_NAN"}};if(sh(f.value))return{unaryFilter:{field:si(f.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:si(f.field),op:xb(f.op),value:f.value}}}(h));return c.length===1?c[0]:{compositeFilter:{op:"AND",filters:c}}}(e.filters);i&&(n.structuredQuery.where=i);const r=function(l){if(l.length!==0)return l.map(c=>function(h){return{field:si(h.field),direction:Jb(h.dir)}}(c))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(l,c){return l.gt||ua(c)?c:{value:c}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function Yb(t){let e=Hb(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){tt(s===1);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let r=[];n.where&&(r=vg(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(h=>function(f){return new Yi(oi(f.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(f.direction))}(h)));let a=null;n.limit&&(a=function(h){let f;return f=typeof h=="object"?h.value:h,ua(f)?null:f}(n.limit));let l=null;n.startAt&&(l=function(h){const f=!!h.before,d=h.values||[];return new Oo(d,f)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const f=!h.before,d=h.values||[];return new Oo(d,f)}(n.endAt)),vb(e,i,o,r,a,"F",l,c)}function Xb(t,e){const n=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Ie()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function vg(t){return t?t.unaryFilter!==void 0?[ew(t)]:t.fieldFilter!==void 0?[Zb(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>vg(e)).reduce((e,n)=>e.concat(n)):Ie():[]}function Jb(t){return Bb[t]}function xb(t){return Vb[t]}function si(t){return{fieldPath:t.canonicalString()}}function oi(t){return Gt.fromServerFormat(t.fieldPath)}function Zb(t){return dn.create(oi(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Ie()}}(t.fieldFilter.op),t.fieldFilter.value)}function ew(t){switch(t.unaryFilter.op){case"IS_NAN":const e=oi(t.unaryFilter.field);return dn.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=oi(t.unaryFilter.field);return dn.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=oi(t.unaryFilter.field);return dn.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=oi(t.unaryFilter.field);return dn.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Ie()}}function tw(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function yg(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nw{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&Db(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Xi(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Xi(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=hg();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const l=og(o,a);l!==null&&s.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(Re.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Le())}isEqual(e){return this.batchId===e.batchId&&_i(this.mutations,e.mutations,(n,s)=>uh(n,s))&&_i(this.baseMutations,e.baseMutations,(n,s)=>uh(n,s))}}class Lc{constructor(e,n,s,i){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(e,n,s){tt(e.mutations.length===s.length);let i=Mb;const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new Lc(e,n,s,i)}}/**
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
 */class sw{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class $s{constructor(e,n,s,i,r=Re.min(),o=Re.min(),a=xt.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new $s(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new $s(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new $s(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iw{constructor(e){this.re=e}}function rw(t){const e=Yb({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Nl(e,e.limit,"L"):e}/**
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
 */class ow{constructor(){this.Ye=new aw}addToCollectionParentIndex(e,n){return this.Ye.add(n),ne.resolve()}getCollectionParents(e,n){return ne.resolve(this.Ye.getEntries(n))}addFieldIndex(e,n){return ne.resolve()}deleteFieldIndex(e,n){return ne.resolve()}getDocumentsMatchingTarget(e,n){return ne.resolve(null)}getIndexType(e,n){return ne.resolve(0)}getFieldIndexes(e,n){return ne.resolve([])}getNextCollectionGroupToUpdate(e){return ne.resolve(null)}getMinOffset(e,n){return ne.resolve(ks.min())}getMinOffsetFromCollectionGroup(e,n){return ne.resolve(ks.min())}updateCollectionGroup(e,n,s){return ne.resolve()}updateIndexEntries(e,n){return ne.resolve()}}class aw{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new It(rt.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new It(rt.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new bi(0)}static vn(){return new bi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lw{constructor(){this.changes=new Di(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Vt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?ne.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class cw{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uw{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(s=i,this.getBaseDocument(e,n,s))).next(i=>(s!==null&&Xi(s.mutation,i,kn.empty(),Tt.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,Le()).next(()=>s))}getLocalViewOfDocuments(e,n,s=Le()){const i=Ls();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,s).next(r=>{let o=Hi();return r.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Ls();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,Le()))}populateOverlays(e,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,i){let r=es();const o=Ji(),a=Ji();return n.forEach((l,c)=>{const h=s.get(c.key);i.has(c.key)&&(h===void 0||h.mutation instanceof As)?r=r.insert(c.key,c):h!==void 0&&(o.set(c.key,h.mutation.getFieldMask()),Xi(h.mutation,c,h.mutation.getFieldMask(),Tt.now()))}),this.recalculateAndSaveOverlays(e,r).next(l=>(l.forEach((c,h)=>o.set(c,h)),n.forEach((c,h)=>{var f;return a.set(c,new cw(h,(f=o.get(c))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const s=Ji();let i=new Ct((o,a)=>o-a),r=Le();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let h=s.get(l)||kn.empty();h=a.applyToLocalView(c,h),s.set(l,h);const f=(i.get(a.batchId)||Le()).add(l);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,h=l.value,f=hg();h.forEach(d=>{if(!r.has(d)){const g=og(n.get(d),s.get(d));g!==null&&f.set(d,g),r=r.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return ne.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(i){return we.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):wb(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):ne.resolve(Ls());let a=-1,l=r;return o.next(c=>ne.forEach(c,(h,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),r.get(h)?ne.resolve():this.getBaseDocument(e,h,f).next(d=>{l=l.insert(h,d)}))).next(()=>this.populateOverlays(e,c,r)).next(()=>this.computeViews(e,l,c,Le())).next(h=>({batchId:a,changes:ug(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new we(n)).next(s=>{let i=Hi();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const i=n.collectionGroup;let r=Hi();return this.indexManager.getCollectionParents(e,i).next(o=>ne.forEach(o,a=>{const l=function(c,h){return new ha(h,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,s).next(c=>{c.forEach((h,f)=>{r=r.insert(h,f)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,s){let i;return this.remoteDocumentCache.getAllFromCollection(e,n.path,s).next(r=>(i=r,this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId))).next(r=>{r.forEach((a,l)=>{const c=l.getKey();i.get(c)===null&&(i=i.insert(c,Vt.newInvalidDocument(c)))});let o=Hi();return i.forEach((a,l)=>{const c=r.get(a);c!==void 0&&Xi(c.mutation,l,kn.empty(),Tt.now()),Pc(n,l)&&(o=o.insert(a,l))}),o})}getBaseDocument(e,n,s){return s===null||s.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):ne.resolve(Vt.newInvalidDocument(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hw{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return ne.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:Qn(s.createTime)}),ne.resolve()}getNamedQuery(e,n){return ne.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(s){return{name:s.name,query:rw(s.bundledQuery),readTime:Qn(s.readTime)}}(n)),ne.resolve()}}/**
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
 */class fw{constructor(){this.overlays=new Ct(we.comparator),this.es=new Map}getOverlay(e,n){return ne.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Ls();return ne.forEach(n,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((i,r)=>{this.ue(e,n,r)}),ne.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.es.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.es.delete(s)),ne.resolve()}getOverlaysForCollection(e,n,s){const i=Ls(),r=n.length+1,o=new we(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===r&&l.largestBatchId>s&&i.set(l.getKey(),l)}return ne.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new Ct((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>s){let h=r.get(c.largestBatchId);h===null&&(h=Ls(),r=r.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const a=Ls(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,h)=>a.set(c,h)),!(a.size()>=i)););return ne.resolve(a)}ue(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.es.get(i.largestBatchId).delete(s.key);this.es.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new sw(n,s));let r=this.es.get(n);r===void 0&&(r=Le(),this.es.set(n,r)),this.es.set(n,r.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(){this.ns=new It(Nt.ss),this.rs=new It(Nt.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const s=new Nt(e,n);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.cs(new Nt(e,n))}hs(e,n){e.forEach(s=>this.removeReference(s,n))}ls(e){const n=new we(new rt([])),s=new Nt(n,e),i=new Nt(n,e+1),r=[];return this.rs.forEachInRange([s,i],o=>{this.cs(o),r.push(o.key)}),r}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new we(new rt([])),s=new Nt(n,e),i=new Nt(n,e+1);let r=Le();return this.rs.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new Nt(e,0),s=this.ns.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Nt{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return we.comparator(e.key,n.key)||Qe(e._s,n._s)}static os(e,n){return Qe(e._s,n._s)||we.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dw{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new It(Nt.ss)}checkEmpty(e){return ne.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new nw(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.gs=this.gs.add(new Nt(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return ne.resolve(o)}lookupMutationBatch(e,n){return ne.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.ps(s),r=i<0?0:i;return ne.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return ne.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return ne.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Nt(n,0),i=new Nt(n,Number.POSITIVE_INFINITY),r=[];return this.gs.forEachInRange([s,i],o=>{const a=this.ys(o._s);r.push(a)}),ne.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new It(Qe);return n.forEach(i=>{const r=new Nt(i,0),o=new Nt(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([r,o],a=>{s=s.add(a._s)})}),ne.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;we.isDocumentKey(r)||(r=r.child(""));const o=new Nt(new we(r),0);let a=new It(Qe);return this.gs.forEachWhile(l=>{const c=l.key.path;return!!s.isPrefixOf(c)&&(c.length===i&&(a=a.add(l._s)),!0)},o),ne.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(s=>{const i=this.ys(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){tt(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return ne.forEach(n.mutations,i=>{const r=new Nt(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.gs=s})}An(e){}containsKey(e,n){const s=new Nt(n,0),i=this.gs.firstAfterOrEqual(s);return ne.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,ne.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pw{constructor(e){this.Es=e,this.docs=new Ct(we.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Es(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return ne.resolve(s?s.document.mutableCopy():Vt.newInvalidDocument(n))}getEntries(e,n){let s=es();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():Vt.newInvalidDocument(i))}),ne.resolve(s)}getAllFromCollection(e,n,s){let i=es();const r=new we(n.child("")),o=this.docs.getIteratorFrom(r);for(;o.hasNext();){const{key:a,value:{document:l}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||tb(eb(l),s)<=0||(i=i.insert(l.key,l.mutableCopy()))}return ne.resolve(i)}getAllFromCollectionGroup(e,n,s,i){Ie()}As(e,n){return ne.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new mw(this)}getSize(e){return ne.resolve(this.size)}}class mw extends lw{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.Yn.addEntry(e,i)):this.Yn.removeEntry(s)}),ne.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gw{constructor(e){this.persistence=e,this.Rs=new Di(n=>Ac(n),Dc),this.lastRemoteSnapshotVersion=Re.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Mc,this.targetCount=0,this.vs=bi.Pn()}forEachTarget(e,n){return this.Rs.forEach((s,i)=>n(i)),ne.resolve()}getLastRemoteSnapshotVersion(e){return ne.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return ne.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),ne.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),ne.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new bi(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,ne.resolve()}updateTargetData(e,n){return this.Dn(n),ne.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,ne.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Rs.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),ne.waitFor(r).next(()=>i)}getTargetCount(e){return ne.resolve(this.targetCount)}getTargetData(e,n){const s=this.Rs.get(n)||null;return ne.resolve(s)}addMatchingKeys(e,n,s){return this.Ps.us(n,s),ne.resolve()}removeMatchingKeys(e,n,s){this.Ps.hs(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),ne.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),ne.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Ps.ds(n);return ne.resolve(s)}containsKey(e,n){return ne.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _w{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new Cc(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new gw(this),this.indexManager=new ow,this.remoteDocumentCache=function(s){return new pw(s)}(s=>this.referenceDelegate.xs(s)),this.It=new iw(n),this.Ns=new hw(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new fw,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Vs[e.toKey()];return s||(s=new dw(n,this.referenceDelegate),this.Vs[e.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,s){ye("MemoryPersistence","Starting transaction:",e);const i=new vw(this.Ss.next());return this.referenceDelegate.ks(),s(i).next(r=>this.referenceDelegate.Os(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Ms(e,n){return ne.or(Object.values(this.Vs).map(s=>()=>s.containsKey(e,n)))}}class vw extends sb{constructor(e){super(),this.currentSequenceNumber=e}}class $c{constructor(e){this.persistence=e,this.Fs=new Mc,this.$s=null}static Bs(e){return new $c(e)}get Ls(){if(this.$s)return this.$s;throw Ie()}addReference(e,n,s){return this.Fs.addReference(s,n),this.Ls.delete(s.toString()),ne.resolve()}removeReference(e,n,s){return this.Fs.removeReference(s,n),this.Ls.add(s.toString()),ne.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),ne.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(i=>this.Ls.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.Ls.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ne.forEach(this.Ls,s=>{const i=we.fromPath(s);return this.Us(e,i).next(r=>{r||n.removeEntry(i,Re.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.Us(e,n).next(s=>{s?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}Us(e,n){return ne.or([()=>ne.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.Si=s,this.Di=i}static Ci(e,n){let s=Le(),i=Le();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new Uc(e,n.fromCache,s,i)}}/**
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
 */class yw{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,s,i){return this.ki(e,n).next(r=>r||this.Oi(e,n,i,s)).next(r=>r||this.Mi(e,n))}ki(e,n){if(lh(n))return ne.resolve(null);let s=Zn(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Nl(n,null,"F"),s=Zn(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=Le(...r);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(l=>{const c=this.Fi(n,a);return this.$i(n,c,o,l.readTime)?this.ki(e,Nl(n,null,"F")):this.Bi(e,c,n,l)}))})))}Oi(e,n,s,i){return lh(n)||i.isEqual(Re.min())?this.Mi(e,n):this.Ni.getDocuments(e,s).next(r=>{const o=this.Fi(n,r);return this.$i(n,o,s,i)?this.Mi(e,n):(Zu()<=ze.DEBUG&&ye("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ol(n)),this.Bi(e,o,n,Z1(i,-1)))})}Fi(e,n){let s=new It(Zm(e));return n.forEach((i,r)=>{Pc(e,r)&&(s=s.add(r))}),s}$i(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Mi(e,n){return Zu()<=ze.DEBUG&&ye("QueryEngine","Using full collection scan to execute query:",Ol(n)),this.Ni.getDocumentsMatchingQuery(e,n,ks.min())}Bi(e,n,s,i){return this.Ni.getDocumentsMatchingQuery(e,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bw{constructor(e,n,s,i){this.persistence=e,this.Li=n,this.It=i,this.Ui=new Ct(Qe),this.qi=new Di(r=>Ac(r),Dc),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(s)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new uw(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ui))}}function ww(t,e,n,s){return new bw(t,e,n,s)}async function bg(t,e){const n=Se(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.Qi(e),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let l=Le();for(const c of i){o.push(c.batchId);for(const h of c.mutations)l=l.add(h.key)}for(const c of r){a.push(c.batchId);for(const h of c.mutations)l=l.add(h.key)}return n.localDocuments.getDocuments(s,l).next(c=>({ji:c,removedBatchIds:o,addedBatchIds:a}))})})}function kw(t,e){const n=Se(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,c){const h=l.batch,f=h.keys();let d=ne.resolve();return f.forEach(g=>{d=d.next(()=>c.getEntry(a,g)).next(_=>{const v=l.docVersions.get(g);tt(v!==null),_.version.compareTo(v)<0&&(h.applyToRemoteDocument(_,l),_.isValidDocument()&&(_.setReadTime(l.commitVersion),c.addEntry(_)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,h))}(n,s,e,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=Le();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,i))})}function wg(t){const e=Se(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function Ew(t,e){const n=Se(t),s=e.snapshotVersion;let i=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.Ui;const a=[];e.targetChanges.forEach((h,f)=>{const d=i.get(f);if(!d)return;a.push(n.Cs.removeMatchingKeys(r,h.removedDocuments,f).next(()=>n.Cs.addMatchingKeys(r,h.addedDocuments,f)));let g=d.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.has(f)?g=g.withResumeToken(xt.EMPTY_BYTE_STRING,Re.min()).withLastLimboFreeSnapshotVersion(Re.min()):h.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(h.resumeToken,s)),i=i.insert(f,g),function(_,v,y){return _.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-_.snapshotVersion.toMicroseconds()>=3e8?!0:y.addedDocuments.size+y.modifiedDocuments.size+y.removedDocuments.size>0}(d,g,h)&&a.push(n.Cs.updateTargetData(r,g))});let l=es(),c=Le();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,h))}),a.push(Tw(r,o,e.documentUpdates).next(h=>{l=h.Wi,c=h.zi})),!s.isEqual(Re.min())){const h=n.Cs.getLastRemoteSnapshotVersion(r).next(f=>n.Cs.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(h)}return ne.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,l,c)).next(()=>l)}).then(r=>(n.Ui=i,r))}function Tw(t,e,n){let s=Le(),i=Le();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let o=es();return n.forEach((a,l)=>{const c=r.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(Re.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):ye("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{Wi:o,zi:i}})}function Iw(t,e){const n=Se(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function Cw(t,e){const n=Se(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Cs.getTargetData(s,e).next(r=>r?(i=r,ne.resolve(i)):n.Cs.allocateTargetId(s).next(o=>(i=new $s(e,o,0,s.currentSequenceNumber),n.Cs.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.Ui.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(s.targetId,s),n.qi.set(e,s.targetId)),s})}async function Ul(t,e,n){const s=Se(t),i=s.Ui.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Lr(o))throw o;ye("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ui=s.Ui.remove(e),s.qi.delete(i.target)}function _h(t,e,n){const s=Se(t);let i=Re.min(),r=Le();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,l,c){const h=Se(a),f=h.qi.get(c);return f!==void 0?ne.resolve(h.Ui.get(f)):h.Cs.getTargetData(l,c)}(s,o,Zn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{r=l})}).next(()=>s.Li.getDocumentsMatchingQuery(o,e,n?i:Re.min(),n?r:Le())).next(a=>(Sw(s,kb(e),a),{documents:a,Hi:r})))}function Sw(t,e,n){let s=t.Ki.get(e)||Re.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),t.Ki.set(e,s)}class vh{constructor(){this.activeTargetIds=fg()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Aw{constructor(){this.Lr=new vh,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,n,s){this.Ur[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new vh,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Dw{qr(e){}shutdown(){}}/**
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
 */class yh{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){ye("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){ye("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rw={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pw{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nw extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,s,i,r){const o=this.ho(e,n);ye("RestConnection","Sending: ",o,s);const a={};return this.lo(a,i,r),this.fo(e,o,a,s).then(l=>(ye("RestConnection","Received: ",l),l),l=>{throw Al("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",s),l})}_o(e,n,s,i,r,o){return this.ao(e,n,s,i,r)}lo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Ai,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>e[r]=i),s&&s.headers.forEach((i,r)=>e[r]=i)}ho(e,n){const s=Rw[e];return`${this.oo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,s,i){return new Promise((r,o)=>{const a=new H1;a.setWithCredentials(!0),a.listenOnce(V1.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Xa.NO_ERROR:const c=a.getResponseJson();ye("Connection","XHR received:",JSON.stringify(c)),r(c);break;case Xa.TIMEOUT:ye("Connection",'RPC "'+e+'" timed out'),o(new ke(te.DEADLINE_EXCEEDED,"Request time out"));break;case Xa.HTTP_ERROR:const h=a.getStatus();if(ye("Connection",'RPC "'+e+'" failed with status:',h,"response text:",a.getResponseText()),h>0){const f=a.getResponseJson().error;if(f&&f.status&&f.message){const d=function(g){const _=g.toLowerCase().replace(/_/g,"-");return Object.values(te).indexOf(_)>=0?_:te.UNKNOWN}(f.status);o(new ke(d,f.message))}else o(new ke(te.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new ke(te.UNAVAILABLE,"Connection failed."));break;default:Ie()}}finally{ye("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(i);a.send(n,"POST",l,s,15)})}wo(e,n,s){const i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=F1(),o=B1(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new q1({})),this.lo(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const l=i.join("");ye("Connection","Creating WebChannel: "+l,a);const c=r.createWebChannel(l,a);let h=!1,f=!1;const d=new Pw({Hr:_=>{f?ye("Connection","Not sending because WebChannel is closed:",_):(h||(ye("Connection","Opening WebChannel transport."),c.open(),h=!0),ye("Connection","WebChannel sending:",_),c.send(_))},Jr:()=>c.close()}),g=(_,v,y)=>{_.listen(v,E=>{try{y(E)}catch(T){setTimeout(()=>{throw T},0)}})};return g(c,to.EventType.OPEN,()=>{f||ye("Connection","WebChannel transport opened.")}),g(c,to.EventType.CLOSE,()=>{f||(f=!0,ye("Connection","WebChannel transport closed"),d.io())}),g(c,to.EventType.ERROR,_=>{f||(f=!0,Al("Connection","WebChannel transport errored:",_),d.io(new ke(te.UNAVAILABLE,"The operation could not be completed")))}),g(c,to.EventType.MESSAGE,_=>{var v;if(!f){const y=_.data[0];tt(!!y);const E=y,T=E.error||((v=E[0])===null||v===void 0?void 0:v.error);if(T){ye("Connection","WebChannel received error:",T);const L=T.status;let D=function(G){const N=_t[G];if(N!==void 0)return lg(N)}(L),U=T.message;D===void 0&&(D=te.INTERNAL,U="Unknown error status: "+L+" with message "+T.message),f=!0,d.io(new ke(D,U)),c.close()}else ye("Connection","WebChannel received:",y),d.ro(y)}}),g(o,j1.STAT_EVENT,_=>{_.stat===Ju.PROXY?ye("Connection","Detected buffering proxy"):_.stat===Ju.NOPROXY&&ye("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}function xa(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ga(t){return new jb(t,!0)}class kg{constructor(e,n,s=1e3,i=1.5,r=6e4){this.Hs=e,this.timerId=n,this.mo=s,this.yo=i,this.po=r,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-s);i>0&&ye("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg{constructor(e,n,s,i,r,o,a,l){this.Hs=e,this.vo=s,this.Vo=i,this.So=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Do=0,this.Co=null,this.xo=null,this.stream=null,this.No=new kg(e,n)}ko(){return this.state===1||this.state===5||this.Oo()}Oo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Mo()}async stop(){this.ko()&&await this.close(0)}Fo(){this.state=0,this.No.reset()}$o(){this.Oo()&&this.Co===null&&(this.Co=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.Bo()))}Lo(e){this.Uo(),this.stream.send(e)}async Bo(){if(this.Oo())return this.close(0)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}qo(){this.xo&&(this.xo.cancel(),this.xo=null)}async close(e,n){this.Uo(),this.qo(),this.No.cancel(),this.Do++,e!==4?this.No.reset():n&&n.code===te.RESOURCE_EXHAUSTED?(xn(n.toString()),xn("Using maximum backoff delay to prevent overloading the backend."),this.No.Ao()):n&&n.code===te.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Ko(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}Ko(){}auth(){this.state=1;const e=this.Go(this.Do),n=this.Do;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Do===n&&this.Qo(s,i)},s=>{e(()=>{const i=new ke(te.UNKNOWN,"Fetching auth token failed: "+s.message);return this.jo(i)})})}Qo(e,n){const s=this.Go(this.Do);this.stream=this.Wo(e,n),this.stream.Yr(()=>{s(()=>(this.state=2,this.xo=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.Oo()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{s(()=>this.jo(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Mo(){this.state=5,this.No.Ro(async()=>{this.state=0,this.start()})}jo(e){return ye("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Go(e){return n=>{this.Hs.enqueueAndForget(()=>this.Do===e?n():(ye("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Ow extends Eg{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.It=r}Wo(e,n){return this.So.wo("Listen",e,n)}onMessage(e){this.No.reset();const n=zb(this.It,e),s=function(i){if(!("targetChange"in i))return Re.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?Re.min():r.readTime?Qn(r.readTime):Re.min()}(e);return this.listener.zo(n,s)}Ho(e){const n={};n.database=$l(this.It),n.addTarget=function(i,r){let o;const a=r.target;return o=Pl(a)?{documents:Wb(i,a)}:{query:Qb(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=mg(i,r.resumeToken):r.snapshotVersion.compareTo(Re.min())>0&&(o.readTime=$o(i,r.snapshotVersion.toTimestamp())),o}(this.It,e);const s=Xb(this.It,e);s&&(n.labels=s),this.Lo(n)}Jo(e){const n={};n.database=$l(this.It),n.removeTarget=e,this.Lo(n)}}class Lw extends Eg{constructor(e,n,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.It=r,this.Yo=!1}get Xo(){return this.Yo}start(){this.Yo=!1,this.lastStreamToken=void 0,super.start()}Ko(){this.Yo&&this.Zo([])}Wo(e,n){return this.So.wo("Write",e,n)}onMessage(e){if(tt(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Yo){this.No.reset();const n=Gb(e.writeResults,e.commitTime),s=Qn(e.commitTime);return this.listener.tu(s,n)}return tt(!e.writeResults||e.writeResults.length===0),this.Yo=!0,this.listener.eu()}nu(){const e={};e.database=$l(this.It),this.Lo(e)}Zo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>Kb(this.It,s))};this.Lo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mw extends class{}{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.So=s,this.It=i,this.su=!1}iu(){if(this.su)throw new ke(te.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,s){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.So.ao(e,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===te.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ke(te.UNKNOWN,i.toString())})}_o(e,n,s,i){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.So._o(e,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===te.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new ke(te.UNKNOWN,r.toString())})}terminate(){this.su=!0}}class $w{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ru=0,this.ou=null,this.uu=!0}cu(){this.ru===0&&(this.au("Unknown"),this.ou=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ou=null,this.hu("Backend didn't respond within 10 seconds."),this.au("Offline"),Promise.resolve())))}lu(e){this.state==="Online"?this.au("Unknown"):(this.ru++,this.ru>=1&&(this.fu(),this.hu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.au("Offline")))}set(e){this.fu(),this.ru=0,e==="Online"&&(this.uu=!1),this.au(e)}au(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}hu(e){const n=`Could not reach Cloud Firestore backend. ${e}
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
 */class Uw{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.du=[],this._u=new Map,this.wu=new Set,this.mu=[],this.gu=r,this.gu.qr(o=>{s.enqueueAndForget(async()=>{xs(this)&&(ye("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=Se(a);l.wu.add(4),await Ur(l),l.yu.set("Unknown"),l.wu.delete(4),await _a(l)}(this))})}),this.yu=new $w(s,i)}}async function _a(t){if(xs(t))for(const e of t.mu)await e(!0)}async function Ur(t){for(const e of t.mu)await e(!1)}function Tg(t,e){const n=Se(t);n._u.has(e.targetId)||(n._u.set(e.targetId,e),Vc(n)?Bc(n):Ri(n).Oo()&&Fc(n,e))}function Ig(t,e){const n=Se(t),s=Ri(n);n._u.delete(e),s.Oo()&&Cg(n,e),n._u.size===0&&(s.Oo()?s.$o():xs(n)&&n.yu.set("Unknown"))}function Fc(t,e){t.pu.Mt(e.targetId),Ri(t).Ho(e)}function Cg(t,e){t.pu.Mt(e),Ri(t).Jo(e)}function Bc(t){t.pu=new Fb({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t._u.get(e)||null}),Ri(t).start(),t.yu.cu()}function Vc(t){return xs(t)&&!Ri(t).ko()&&t._u.size>0}function xs(t){return Se(t).wu.size===0}function Sg(t){t.pu=void 0}async function Fw(t){t._u.forEach((e,n)=>{Fc(t,e)})}async function Bw(t,e){Sg(t),Vc(t)?(t.yu.lu(e),Bc(t)):t.yu.set("Unknown")}async function Vw(t,e,n){if(t.yu.set("Online"),e instanceof pg&&e.state===2&&e.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s._u.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s._u.delete(o),s.pu.removeTarget(o))}(t,e)}catch(s){ye("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Uo(t,s)}else if(e instanceof co?t.pu.Gt(e):e instanceof dg?t.pu.Yt(e):t.pu.Wt(e),!n.isEqual(Re.min()))try{const s=await wg(t.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.pu.te(r);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const c=i._u.get(l);c&&i._u.set(l,c.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const l=i._u.get(a);if(!l)return;i._u.set(a,l.withResumeToken(xt.EMPTY_BYTE_STRING,l.snapshotVersion)),Cg(i,a);const c=new $s(l.target,a,1,l.sequenceNumber);Fc(i,c)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){ye("RemoteStore","Failed to raise snapshot:",s),await Uo(t,s)}}async function Uo(t,e,n){if(!Lr(e))throw e;t.wu.add(1),await Ur(t),t.yu.set("Offline"),n||(n=()=>wg(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ye("RemoteStore","Retrying IndexedDB access"),await n(),t.wu.delete(1),await _a(t)})}function Ag(t,e){return e().catch(n=>Uo(t,n,e))}async function va(t){const e=Se(t),n=Ts(e);let s=e.du.length>0?e.du[e.du.length-1].batchId:-1;for(;jw(e);)try{const i=await Iw(e.localStore,s);if(i===null){e.du.length===0&&n.$o();break}s=i.batchId,qw(e,i)}catch(i){await Uo(e,i)}Dg(e)&&Rg(e)}function jw(t){return xs(t)&&t.du.length<10}function qw(t,e){t.du.push(e);const n=Ts(t);n.Oo()&&n.Xo&&n.Zo(e.mutations)}function Dg(t){return xs(t)&&!Ts(t).ko()&&t.du.length>0}function Rg(t){Ts(t).start()}async function Hw(t){Ts(t).nu()}async function zw(t){const e=Ts(t);for(const n of t.du)e.Zo(n.mutations)}async function Kw(t,e,n){const s=t.du.shift(),i=Lc.from(s,e,n);await Ag(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await va(t)}async function Gw(t,e){e&&Ts(t).Xo&&await async function(n,s){if(i=s.code,Ob(i)&&i!==te.ABORTED){const r=n.du.shift();Ts(n).Fo(),await Ag(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await va(n)}var i}(t,e),Dg(t)&&Rg(t)}async function bh(t,e){const n=Se(t);n.asyncQueue.verifyOperationInProgress(),ye("RemoteStore","RemoteStore received new credentials");const s=xs(n);n.wu.add(3),await Ur(n),s&&n.yu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.wu.delete(3),await _a(n)}async function Ww(t,e){const n=Se(t);e?(n.wu.delete(2),await _a(n)):e||(n.wu.add(2),await Ur(n),n.yu.set("Unknown"))}function Ri(t){return t.Iu||(t.Iu=function(e,n,s){const i=Se(e);return i.iu(),new Ow(n,i.So,i.authCredentials,i.appCheckCredentials,i.It,s)}(t.datastore,t.asyncQueue,{Yr:Fw.bind(null,t),Zr:Bw.bind(null,t),zo:Vw.bind(null,t)}),t.mu.push(async e=>{e?(t.Iu.Fo(),Vc(t)?Bc(t):t.yu.set("Unknown")):(await t.Iu.stop(),Sg(t))})),t.Iu}function Ts(t){return t.Tu||(t.Tu=function(e,n,s){const i=Se(e);return i.iu(),new Lw(n,i.So,i.authCredentials,i.appCheckCredentials,i.It,s)}(t.datastore,t.asyncQueue,{Yr:Hw.bind(null,t),Zr:Gw.bind(null,t),eu:zw.bind(null,t),tu:Kw.bind(null,t)}),t.mu.push(async e=>{e?(t.Tu.Fo(),await va(t)):(await t.Tu.stop(),t.du.length>0&&(ye("RemoteStore",`Stopping write stream with ${t.du.length} pending writes`),t.du=[]))})),t.Tu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new gs,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new jc(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ke(te.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function qc(t,e){if(xn("AsyncQueue",`${e}: ${t}`),Lr(t))return new ke(te.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e){this.comparator=e?(n,s)=>e(n,s)||we.comparator(n.key,s.key):(n,s)=>we.comparator(n.key,s.key),this.keyedMap=Hi(),this.sortedSet=new Ct(this.comparator)}static emptySet(e){return new ui(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ui)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new ui;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{constructor(){this.Eu=new Ct(we.comparator)}track(e){const n=e.doc.key,s=this.Eu.get(n);s?e.type!==0&&s.type===3?this.Eu=this.Eu.insert(n,e):e.type===3&&s.type!==1?this.Eu=this.Eu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Eu=this.Eu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Eu=this.Eu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Eu=this.Eu.remove(n):e.type===1&&s.type===2?this.Eu=this.Eu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Eu=this.Eu.insert(n,{type:2,doc:e.doc}):Ie():this.Eu=this.Eu.insert(n,e)}Au(){const e=[];return this.Eu.inorderTraversal((n,s)=>{e.push(s)}),e}}class wi{constructor(e,n,s,i,r,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,s,i,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new wi(e,n,ui.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&fa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qw{constructor(){this.Ru=void 0,this.listeners=[]}}class Yw{constructor(){this.queries=new Di(e=>xm(e),fa),this.onlineState="Unknown",this.bu=new Set}}async function Pg(t,e){const n=Se(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new Qw),i)try{r.Ru=await n.onListen(s)}catch(o){const a=qc(o,`Initialization of query '${Ol(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,r),r.listeners.push(e),e.Pu(n.onlineState),r.Ru&&e.vu(r.Ru)&&Hc(n)}async function Ng(t,e){const n=Se(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function Xw(t,e){const n=Se(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.vu(i)&&(s=!0);o.Ru=i}}s&&Hc(n)}function Jw(t,e,n){const s=Se(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function Hc(t){t.bu.forEach(e=>{e.next()})}class Og{constructor(e,n,s){this.query=e,this.Vu=n,this.Su=!1,this.Du=null,this.onlineState="Unknown",this.options=s||{}}vu(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new wi(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Su?this.Cu(e)&&(this.Vu.next(e),n=!0):this.xu(e,this.onlineState)&&(this.Nu(e),n=!0),this.Du=e,n}onError(e){this.Vu.error(e)}Pu(e){this.onlineState=e;let n=!1;return this.Du&&!this.Su&&this.xu(this.Du,e)&&(this.Nu(this.Du),n=!0),n}xu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.ku||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Cu(e){if(e.docChanges.length>0)return!0;const n=this.Du&&this.Du.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Nu(e){e=wi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Su=!0,this.Vu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lg{constructor(e){this.key=e}}class Mg{constructor(e){this.key=e}}class xw{constructor(e,n){this.query=e,this.Uu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=Le(),this.mutatedKeys=Le(),this.Gu=Zm(e),this.Qu=new ui(this.Gu)}get ju(){return this.Uu}Wu(e,n){const s=n?n.zu:new wh,i=n?n.Qu:this.Qu;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,f)=>{const d=i.get(h),g=Pc(this.query,f)?f:null,_=!!d&&this.mutatedKeys.has(d.key),v=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let y=!1;d&&g?d.data.isEqual(g.data)?_!==v&&(s.track({type:3,doc:g}),y=!0):this.Hu(d,g)||(s.track({type:2,doc:g}),y=!0,(l&&this.Gu(g,l)>0||c&&this.Gu(g,c)<0)&&(a=!0)):!d&&g?(s.track({type:0,doc:g}),y=!0):d&&!g&&(s.track({type:1,doc:d}),y=!0,(l||c)&&(a=!0)),y&&(g?(o=o.add(g),r=v?r.add(h):r.delete(h)):(o=o.delete(h),r=r.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),r=r.delete(h.key),s.track({type:1,doc:h})}return{Qu:o,zu:s,$i:a,mutatedKeys:r}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const i=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const r=e.zu.Au();r.sort((c,h)=>function(f,d){const g=_=>{switch(_){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ie()}};return g(f)-g(d)}(c.type,h.type)||this.Gu(c.doc,h.doc)),this.Ju(s);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,l=a!==this.qu;return this.qu=a,r.length!==0||l?{snapshot:new wi(this.query,e.Qu,i,r,e.mutatedKeys,a===0,l,!1,!!s&&s.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}Pu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new wh,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.Uu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.Uu=this.Uu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Uu=this.Uu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=Le(),this.Qu.forEach(s=>{this.Zu(s.key)&&(this.Ku=this.Ku.add(s.key))});const n=[];return e.forEach(s=>{this.Ku.has(s)||n.push(new Mg(s))}),this.Ku.forEach(s=>{e.has(s)||n.push(new Lg(s))}),n}tc(e){this.Uu=e.Hi,this.Ku=Le();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return wi.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class Zw{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class ek{constructor(e){this.key=e,this.nc=!1}}class tk{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new Di(a=>xm(a),fa),this.rc=new Map,this.oc=new Set,this.uc=new Ct(we.comparator),this.cc=new Map,this.ac=new Mc,this.hc={},this.lc=new Map,this.fc=bi.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function nk(t,e){const n=fk(t);let s,i;const r=n.ic.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.ec();else{const o=await Cw(n.localStore,Zn(e));n.isPrimaryClient&&Tg(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await sk(n,e,s,a==="current",o.resumeToken)}return i}async function sk(t,e,n,s,i){t._c=(f,d,g)=>async function(_,v,y,E){let T=v.view.Wu(y);T.$i&&(T=await _h(_.localStore,v.query,!1).then(({documents:U})=>v.view.Wu(U,T)));const L=E&&E.targetChanges.get(v.targetId),D=v.view.applyChanges(T,_.isPrimaryClient,L);return Eh(_,v.targetId,D.Xu),D.snapshot}(t,f,d,g);const r=await _h(t.localStore,e,!0),o=new xw(e,r.Hi),a=o.Wu(r.documents),l=$r.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,l);Eh(t,n,c.Xu);const h=new Zw(e,n,o);return t.ic.set(e,h),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),c.snapshot}async function ik(t,e){const n=Se(t),s=n.ic.get(e),i=n.rc.get(s.targetId);if(i.length>1)return n.rc.set(s.targetId,i.filter(r=>!fa(r,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Ul(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Ig(n.remoteStore,s.targetId),Fl(n,s.targetId)}).catch(Or)):(Fl(n,s.targetId),await Ul(n.localStore,s.targetId,!0))}async function rk(t,e,n){const s=dk(t);try{const i=await function(r,o){const a=Se(r),l=Tt.now(),c=o.reduce((d,g)=>d.add(g.key),Le());let h,f;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let g=es(),_=Le();return a.Gi.getEntries(d,c).next(v=>{g=v,g.forEach((y,E)=>{E.isValidDocument()||(_=_.add(y))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,g)).next(v=>{h=v;const y=[];for(const E of o){const T=Rb(E,h.get(E.key).overlayedDocument);T!=null&&y.push(new As(E.key,T,Xm(T.value.mapValue),En.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,y,o)}).next(v=>{f=v;const y=v.applyToLocalDocumentSet(h,_);return a.documentOverlayCache.saveOverlays(d,v.batchId,y)})}).then(()=>({batchId:f.batchId,changes:ug(h)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let l=r.hc[r.currentUser.toKey()];l||(l=new Ct(Qe)),l=l.insert(o,a),r.hc[r.currentUser.toKey()]=l}(s,i.batchId,n),await Fr(s,i.changes),await va(s.remoteStore)}catch(i){const r=qc(i,"Failed to persist write");n.reject(r)}}async function $g(t,e){const n=Se(t);try{const s=await Ew(n.localStore,e);e.targetChanges.forEach((i,r)=>{const o=n.cc.get(r);o&&(tt(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.nc=!0:i.modifiedDocuments.size>0?tt(o.nc):i.removedDocuments.size>0&&(tt(o.nc),o.nc=!1))}),await Fr(n,s,e)}catch(s){await Or(s)}}function kh(t,e,n){const s=Se(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.ic.forEach((r,o)=>{const a=o.view.Pu(e);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=Se(r);a.onlineState=o;let l=!1;a.queries.forEach((c,h)=>{for(const f of h.listeners)f.Pu(o)&&(l=!0)}),l&&Hc(a)}(s.eventManager,e),i.length&&s.sc.zo(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function ok(t,e,n){const s=Se(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.cc.get(e),r=i&&i.key;if(r){let o=new Ct(we.comparator);o=o.insert(r,Vt.newNoDocument(r,Re.min()));const a=Le().add(r),l=new ma(Re.min(),new Map,new It(Qe),o,a);await $g(s,l),s.uc=s.uc.remove(r),s.cc.delete(e),zc(s)}else await Ul(s.localStore,e,!1).then(()=>Fl(s,e,n)).catch(Or)}async function ak(t,e){const n=Se(t),s=e.batch.batchId;try{const i=await kw(n.localStore,e);Fg(n,s,null),Ug(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Fr(n,i)}catch(i){await Or(i)}}async function lk(t,e,n){const s=Se(t);try{const i=await function(r,o){const a=Se(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let c;return a.mutationQueue.lookupMutationBatch(l,o).next(h=>(tt(h!==null),c=h.keys(),a.mutationQueue.removeMutationBatch(l,h))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,c,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,c)).next(()=>a.localDocuments.getDocuments(l,c))})}(s.localStore,e);Fg(s,e,n),Ug(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Fr(s,i)}catch(i){await Or(i)}}function Ug(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function Fg(t,e,n){const s=Se(t);let i=s.hc[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(n?r.reject(n):r.resolve(),i=i.remove(e)),s.hc[s.currentUser.toKey()]=i}}function Fl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.rc.get(e))t.ic.delete(s),n&&t.sc.wc(s,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(s=>{t.ac.containsKey(s)||Bg(t,s)})}function Bg(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(Ig(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),zc(t))}function Eh(t,e,n){for(const s of n)s instanceof Lg?(t.ac.addReference(s.key,e),ck(t,s)):s instanceof Mg?(ye("SyncEngine","Document no longer in limbo: "+s.key),t.ac.removeReference(s.key,e),t.ac.containsKey(s.key)||Bg(t,s.key)):Ie()}function ck(t,e){const n=e.key,s=n.path.canonicalString();t.uc.get(n)||t.oc.has(s)||(ye("SyncEngine","New document in limbo: "+n),t.oc.add(s),zc(t))}function zc(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new we(rt.fromString(e)),s=t.fc.next();t.cc.set(s,new ek(n)),t.uc=t.uc.insert(n,s),Tg(t.remoteStore,new $s(Zn(Rc(n.path)),s,2,Cc.at))}}async function Fr(t,e,n){const s=Se(t),i=[],r=[],o=[];s.ic.isEmpty()||(s.ic.forEach((a,l)=>{o.push(s._c(l,e,n).then(c=>{if((c||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const h=Uc.Ci(l.targetId,c);r.push(h)}}))}),await Promise.all(o),s.sc.zo(i),await async function(a,l){const c=Se(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>ne.forEach(l,f=>ne.forEach(f.Si,d=>c.persistence.referenceDelegate.addReference(h,f.targetId,d)).next(()=>ne.forEach(f.Di,d=>c.persistence.referenceDelegate.removeReference(h,f.targetId,d)))))}catch(h){if(!Lr(h))throw h;ye("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const f=h.targetId;if(!h.fromCache){const d=c.Ui.get(f),g=d.snapshotVersion,_=d.withLastLimboFreeSnapshotVersion(g);c.Ui=c.Ui.insert(f,_)}}}(s.localStore,r))}async function uk(t,e){const n=Se(t);if(!n.currentUser.isEqual(e)){ye("SyncEngine","User change. New user:",e.toKey());const s=await bg(n.localStore,e);n.currentUser=e,function(i,r){i.lc.forEach(o=>{o.forEach(a=>{a.reject(new ke(te.CANCELLED,r))})}),i.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Fr(n,s.ji)}}function hk(t,e){const n=Se(t),s=n.cc.get(e);if(s&&s.nc)return Le().add(s.key);{let i=Le();const r=n.rc.get(e);if(!r)return i;for(const o of r){const a=n.ic.get(o);i=i.unionWith(a.view.ju)}return i}}function fk(t){const e=Se(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=$g.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=hk.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ok.bind(null,e),e.sc.zo=Xw.bind(null,e.eventManager),e.sc.wc=Jw.bind(null,e.eventManager),e}function dk(t){const e=Se(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ak.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=lk.bind(null,e),e}class pk{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=ga(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return ww(this.persistence,new yw,e.initialUser,this.It)}yc(e){return new _w($c.Bs,this.It)}gc(e){return new Aw}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class mk{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>kh(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=uk.bind(null,this.syncEngine),await Ww(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Yw}createDatastore(e){const n=ga(e.databaseInfo.databaseId),s=(i=e.databaseInfo,new Nw(i));var i;return function(r,o,a,l){return new Mw(r,o,a,l)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,i=e.asyncQueue,r=a=>kh(this.syncEngine,a,0),o=yh.C()?new yh:new Dw,new Uw(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(e,n){return function(s,i,r,o,a,l,c){const h=new tk(s,i,r,o,a,l);return c&&(h.dc=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=Se(e);ye("RemoteStore","RemoteStore shutting down."),n.wu.add(5),await Ur(n),n.gu.shutdown(),n.yu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vg(t,e,n){if(!n)throw new ke(te.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function gk(t,e,n,s){if(e===!0&&s===!0)throw new ke(te.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Th(t){if(!we.isDocumentKey(t))throw new ke(te.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ih(t){if(we.isDocumentKey(t))throw new ke(te.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Kc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Ie()}function On(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ke(te.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Kc(t);throw new ke(te.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ch=new Map;class Sh{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new ke(te.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ke(te.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,gk("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Sh({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new ke(te.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new ke(te.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Sh(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new z1;switch(n.type){case"gapi":const s=n.client;return new Q1(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new ke(te.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Ch.get(e);n&&(ye("ComponentProvider","Removing Datastore"),Ch.delete(e),n.terminate())}(this),Promise.resolve()}}function _k(t,e,n,s={}){var i;const r=(t=On(t,ya))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==e&&Al("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=Kt.MOCK_USER;else{o=Sy(s.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=s.mockUserToken.sub||s.mockUserToken.user_id;if(!l)throw new ke(te.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Kt(l)}t._authCredentials=new K1(new Km(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new _s(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new mn(this.firestore,e,this._key)}}class Br{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Br(this.firestore,e,this._query)}}class _s extends Br{constructor(e,n,s){super(e,n,Rc(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new mn(this.firestore,null,new we(e))}withConverter(e){return new _s(this.firestore,e,this._path)}}function Yt(t,e,...n){if(t=Jt(t),Vg("collection","path",e),t instanceof ya){const s=rt.fromString(e,...n);return Ih(s),new _s(t,null,s)}{if(!(t instanceof mn||t instanceof _s))throw new ke(te.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(rt.fromString(e,...n));return Ih(s),new _s(t.firestore,null,s)}}function Is(t,e,...n){if(t=Jt(t),arguments.length===1&&(e=Gm.R()),Vg("doc","path",e),t instanceof ya){const s=rt.fromString(e,...n);return Th(s),new mn(t,null,new we(s))}{if(!(t instanceof mn||t instanceof _s))throw new ke(te.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(rt.fromString(e,...n));return Th(s),new mn(t.firestore,t instanceof _s?t.converter:null,new we(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class jg{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):xn("Uncaught Error in snapshot listener:",e)}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vk{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=Kt.UNAUTHENTICATED,this.clientId=Gm.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{ye("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(ye("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ke(te.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new gs;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=qc(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function yk(t,e){t.asyncQueue.verifyOperationInProgress(),ye("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await bg(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function bk(t,e){t.asyncQueue.verifyOperationInProgress();const n=await wk(t);ye("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(i=>bh(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,r)=>bh(e.remoteStore,r)),t.onlineComponents=e}async function wk(t){return t.offlineComponents||(ye("FirestoreClient","Using default OfflineComponentProvider"),await yk(t,new pk)),t.offlineComponents}async function qg(t){return t.onlineComponents||(ye("FirestoreClient","Using default OnlineComponentProvider"),await bk(t,new mk)),t.onlineComponents}function kk(t){return qg(t).then(e=>e.syncEngine)}async function Bl(t){const e=await qg(t),n=e.eventManager;return n.onListen=nk.bind(null,e.syncEngine),n.onUnlisten=ik.bind(null,e.syncEngine),n}function Ek(t,e,n={}){const s=new gs;return t.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,l){const c=new jg({next:f=>{r.enqueueAndForget(()=>Ng(i,h)),f.fromCache&&a.source==="server"?l.reject(new ke(te.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(f)},error:f=>l.reject(f)}),h=new Og(o,c,{includeMetadataChanges:!0,ku:!0});return Pg(i,h)}(await Bl(t),t.asyncQueue,e,n,s)),s.promise}class Tk{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.No=new kg(this,"async_queue_retry"),this.Wc=()=>{const n=xa();n&&ye("AsyncQueue","Visibility state changed to "+n.visibilityState),this.No.Po()};const e=xa();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.Uc){this.Uc=!0,this.Qc=e||!1;const n=xa();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.Uc)return new Promise(()=>{});const n=new gs;return this.Hc(()=>this.Uc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.No.reset()}catch(e){if(!Lr(e))throw e;ye("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.No.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(s=>{this.Kc=s,this.Gc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw xn("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Gc=!1,s))));return this.Bc=n,n}enqueueAfterDelay(e,n,s){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const i=jc.createAndSchedule(this,e,n,s,r=>this.Yc(r));return this.qc.push(i),i}zc(){this.Kc&&Ie()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.qc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.qc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.qc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.qc.indexOf(e);this.qc.splice(n,1)}}function Ah(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Gs extends ya{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=new Tk,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Hg(this),this._firestoreClient.terminate()}}function Ik(t,e){const n=typeof t=="object"?t:Vp(),s=typeof t=="string"?t:e||"(default)",i=sc(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=Ty("firestore");r&&_k(i,...r)}return i}function Gc(t){return t._firestoreClient||Hg(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Hg(t){var e;const n=t._freezeSettings(),s=function(i,r,o,a){return new rb(i,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new vk(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ki{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ki(xt.fromBase64String(e))}catch(n){throw new ke(te.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ki(xt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ke(te.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Gt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ke(te.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ke(te.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Qe(this._lat,e._lat)||Qe(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ck=/^__.*__$/;class Sk{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new As(e,this.data,this.fieldMask,n,this.fieldTransforms):new Mr(e,this.data,n,this.fieldTransforms)}}class zg{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new As(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Kg(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ie()}}class Yc{constructor(e,n,s,i,r,o){this.settings=e,this.databaseId=n,this.It=s,this.ignoreUndefinedProperties=i,r===void 0&&this.na(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new Yc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:s,oa:!1});return i.ua(e),i}ca(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:s,oa:!1});return i.na(),i}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return Fo(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(Kg(this.sa)&&Ck.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class Ak{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.It=s||ga(e)}da(e,n,s,i=!1){return new Yc({sa:e,methodName:n,fa:s,path:Gt.emptyPath(),oa:!1,la:i},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function Gg(t){const e=t._freezeSettings(),n=ga(t._databaseId);return new Ak(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Dk(t,e,n,s,i,r={}){const o=t.da(r.merge||r.mergeFields?2:0,e,n,i);Xc("Data must be an object, but it was:",o,s);const a=Wg(s,o);let l,c;if(r.merge)l=new kn(o.fieldMask),c=o.fieldTransforms;else if(r.mergeFields){const h=[];for(const f of r.mergeFields){const d=Vl(e,f,n);if(!o.contains(d))throw new ke(te.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Yg(h,d)||h.push(d)}l=new kn(h),c=o.fieldTransforms.filter(f=>l.covers(f.field))}else l=null,c=o.fieldTransforms;return new Sk(new hn(a),l,c)}class wa extends Wc{_toFieldTransform(e){if(e.sa!==2)throw e.sa===1?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof wa}}function Rk(t,e,n,s){const i=t.da(1,e,n);Xc("Data must be an object, but it was:",i,s);const r=[],o=hn.empty();Js(s,(l,c)=>{const h=Jc(e,l,n);c=Jt(c);const f=i.ca(h);if(c instanceof wa)r.push(h);else{const d=ka(c,f);d!=null&&(r.push(h),o.set(h,d))}});const a=new kn(r);return new zg(o,a,i.fieldTransforms)}function Pk(t,e,n,s,i,r){const o=t.da(1,e,n),a=[Vl(e,s,n)],l=[i];if(r.length%2!=0)throw new ke(te.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<r.length;d+=2)a.push(Vl(e,r[d])),l.push(r[d+1]);const c=[],h=hn.empty();for(let d=a.length-1;d>=0;--d)if(!Yg(c,a[d])){const g=a[d];let _=l[d];_=Jt(_);const v=o.ca(g);if(_ instanceof wa)c.push(g);else{const y=ka(_,v);y!=null&&(c.push(g),h.set(g,y))}}const f=new kn(c);return new zg(h,f,o.fieldTransforms)}function ka(t,e){if(Qg(t=Jt(t)))return Xc("Unsupported field value:",e,t),Wg(t,e);if(t instanceof Wc)return function(n,s){if(!Kg(s.sa))throw s.ha(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ha(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=ka(o,s.aa(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(t,e)}return function(n,s){if((n=Jt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Tb(s.It,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Tt.fromDate(n);return{timestampValue:$o(s.It,i)}}if(n instanceof Tt){const i=new Tt(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:$o(s.It,i)}}if(n instanceof Qc)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof ki)return{bytesValue:mg(s.It,n._byteString)};if(n instanceof mn){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s.ha(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Oc(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ha(`Unsupported field value: ${Kc(n)}`)}(t,e)}function Wg(t,e){const n={};return Wm(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Js(t,(s,i)=>{const r=ka(i,e.ra(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function Qg(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Tt||t instanceof Qc||t instanceof ki||t instanceof mn||t instanceof Wc)}function Xc(t,e,n){if(!Qg(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Kc(n);throw s==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+s)}}function Vl(t,e,n){if((e=Jt(e))instanceof ba)return e._internalPath;if(typeof e=="string")return Jc(t,e);throw Fo("Field path arguments must be of type string or ",t,!1,void 0,n)}const Nk=new RegExp("[~\\*/\\[\\]]");function Jc(t,e,n){if(e.search(Nk)>=0)throw Fo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ba(...e.split("."))._internalPath}catch{throw Fo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Fo(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${s}`),o&&(l+=` in document ${i}`),l+=")"),new ke(te.INVALID_ARGUMENT,a+t+l)}function Yg(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new mn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Ok(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Jg("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Ok extends Xg{data(){return super.data()}}function Jg(t,e){return typeof e=="string"?Jc(t,e):e instanceof ba?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xg(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ke(te.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lk{convertValue(e,n="none"){switch(Ks(e)){case 0:return null;case 1:return e.booleanValue;case 2:return vt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(vi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Ie()}}convertObject(e,n){const s={};return Js(e.fields,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(e){return new Qc(vt(e.latitude),vt(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Ym(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(ar(e));default:return null}}convertTimestamp(e){const n=Es(e);return new Tt(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=rt.fromString(e);tt(yg(s));const i=new lr(s.get(1),s.get(3)),r=new we(s.popFirst(5));return i.isEqual(n)||xn(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mk(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Zg extends Xg{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new uo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Jg("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class uo extends Zg{data(e={}){return super.data(e)}}class e_{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new zi(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new uo(this._firestore,this._userDataWriter,s.key,s,new zi(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ke(te.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>({type:"added",doc:new uo(s._firestore,s._userDataWriter,o.doc.key,o.doc,new zi(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter),oldIndex:-1,newIndex:r++}))}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new uo(s._firestore,s._userDataWriter,o.doc.key,o.doc,new zi(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,c=-1;return o.type!==0&&(l=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),c=r.indexOf(o.doc.key)),{type:$k(o.type),doc:a,oldIndex:l,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function $k(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ie()}}class xc extends Lk{constructor(e){super(),this.firestore=e}convertBytes(e){return new ki(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new mn(this.firestore,null,n)}}function Zc(t){t=On(t,Br);const e=On(t.firestore,Gs),n=Gc(e),s=new xc(e);return xg(t._query),Ek(n,t._query).then(i=>new e_(e,s,t,i))}function eu(t,e,n,...s){t=On(t,mn);const i=On(t.firestore,Gs),r=Gg(i);let o;return o=typeof(e=Jt(e))=="string"||e instanceof ba?Pk(r,"updateDoc",t._key,e,n,s):Rk(r,"updateDoc",t._key,e),tu(i,[o.toMutation(t._key,En.exists(!0))])}function Ea(t){return tu(On(t.firestore,Gs),[new Nc(t._key,En.none())])}function vs(t,e){const n=On(t.firestore,Gs),s=Is(t),i=Mk(t.converter,e);return tu(n,[Dk(Gg(t.firestore),"addDoc",s._key,i,t.converter!==null,{}).toMutation(s._key,En.exists(!1))]).then(()=>s)}function Ta(t,...e){var n,s,i;t=Jt(t);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Ah(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(Ah(e[o])){const f=e[o];e[o]=(n=f.next)===null||n===void 0?void 0:n.bind(f),e[o+1]=(s=f.error)===null||s===void 0?void 0:s.bind(f),e[o+2]=(i=f.complete)===null||i===void 0?void 0:i.bind(f)}let l,c,h;if(t instanceof mn)c=On(t.firestore,Gs),h=Rc(t._key.path),l={next:f=>{e[o]&&e[o](Uk(c,t,f))},error:e[o+1],complete:e[o+2]};else{const f=On(t,Br);c=On(f.firestore,Gs),h=f._query;const d=new xc(c);l={next:g=>{e[o]&&e[o](new e_(c,d,f,g))},error:e[o+1],complete:e[o+2]},xg(t._query)}return function(f,d,g,_){const v=new jg(_),y=new Og(d,v,g);return f.asyncQueue.enqueueAndForget(async()=>Pg(await Bl(f),y)),()=>{v.bc(),f.asyncQueue.enqueueAndForget(async()=>Ng(await Bl(f),y))}}(Gc(c),h,a,l)}function tu(t,e){return function(n,s){const i=new gs;return n.asyncQueue.enqueueAndForget(async()=>rk(await kk(n),s,i)),i.promise}(Gc(t),e)}function Uk(t,e,n){const s=n.docs.get(e._key),i=new xc(t);return new Zg(t,i,e._key,s,new zi(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Ai=n})(Er),mi(new qs("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new Gs(new G1(n.getProvider("auth-internal")),new X1(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new ke(te.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new lr(a.options.projectId,l)}(r,s),r);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),ms(xu,"3.7.1",t),ms(xu,"3.7.1","esm2017")})();function nu(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function t_(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Fk=t_,n_=new wr("auth","Firebase",t_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dh=new tc("@firebase/auth");function ho(t,...e){Dh.logLevel<=ze.ERROR&&Dh.error(`Auth (${Er}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(t,...e){throw su(t,...e)}function Ln(t,...e){return su(t,...e)}function Bk(t,e,n){const s=Object.assign(Object.assign({},Fk()),{[e]:n});return new wr("auth","Firebase",s).create(e,{appName:t.name})}function su(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return n_.create(t,...e)}function Ee(t,e,...n){if(!t)throw su(e,...n)}function Gn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ho(e),new Error(e)}function ts(t,e){t||Gn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Vk(t,e){const n=sc(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(ko(r,e!=null?e:{}))return i;Tn(i,"already-initialized")}return n.initialize({options:e})}function jk(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Wn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function qk(){return Ph()==="http:"||Ph()==="https:"}function Ph(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(qk()||my()||"connection"in navigator)?navigator.onLine:!0}function zk(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(e,n){this.shortDelay=e,this.longDelay=n,ts(n>e,"Short delay should be less than long delay!"),this.isMobile=py()||gy()}get(){return Hk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iu(t,e){ts(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Gn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Gn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Gn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gk=new Vr(3e4,6e4);function jr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function qr(t,e,n,s,i={}){return i_(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=kr(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),s_.fetch()(r_(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function i_(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},Kk),e);try{const i=new Wk(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw io(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw io(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw io(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw io(t,"user-disabled",o);const h=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Bk(t,h,c);Tn(t,h)}}catch(i){if(i instanceof ns)throw i;Tn(t,"network-request-failed")}}async function Hr(t,e,n,s,i={}){const r=await qr(t,e,n,s,i);return"mfaPendingCredential"in r&&Tn(t,"multi-factor-auth-required",{_serverResponse:r}),r}function r_(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?iu(t.config,i):`${t.config.apiScheme}://${i}`}class Wk{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Ln(this.auth,"network-request-failed")),Gk.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function io(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=Ln(t,e,s);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qk(t,e){return qr(t,"POST","/v1/accounts:delete",e)}async function Yk(t,e){return qr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xi(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Xk(t,e=!1){const n=Jt(t),s=await n.getIdToken(e),i=ru(s);Ee(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:xi(Za(i.auth_time)),issuedAtTime:xi(Za(i.iat)),expirationTime:xi(Za(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Za(t){return Number(t)*1e3}function ru(t){var e;const[n,s,i]=t.split(".");if(n===void 0||s===void 0||i===void 0)return ho("JWT malformed, contained fewer than 3 sections"),null;try{const r=Lp(s);return r?JSON.parse(r):(ho("Failed to decode base64 JWT payload"),null)}catch(r){return ho("Caught error parsing JWT payload as JSON",(e=r)===null||e===void 0?void 0:e.toString()),null}}function Jk(t){const e=ru(t);return Ee(e,"internal-error"),Ee(typeof e.exp<"u","internal-error"),Ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dr(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof ns&&xk(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function xk({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=xi(this.lastLoginAt),this.creationTime=xi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Bo(t){var e;const n=t.auth,s=await t.getIdToken(),i=await dr(t,Yk(n,{idToken:s}));Ee(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?nE(r.providerUserInfo):[],a=tE(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),h=l?c:!1,f={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new o_(r.createdAt,r.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function eE(t){const e=Jt(t);await Bo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function tE(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function nE(t){return t.map(e=>{var{providerId:n}=e,s=nu(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sE(t,e){const n=await i_(t,{},async()=>{const s=kr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=r_(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",s_.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ee(e.idToken,"internal-error"),Ee(typeof e.idToken<"u","internal-error"),Ee(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Jk(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return Ee(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await sE(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new pr;return s&&(Ee(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(Ee(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(Ee(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new pr,this.toJSON())}_performRefresh(){return Gn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function is(t,e){Ee(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Us{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=nu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Zk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new o_(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await dr(this,this.stsTokenManager.getToken(this.auth,e));return Ee(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Xk(this,e)}reload(){return eE(this)}_assign(e){this!==e&&(Ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Us(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){Ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Bo(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await dr(this,Qk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,h;const f=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,g=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,y=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,E=(c=n.createdAt)!==null&&c!==void 0?c:void 0,T=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:L,emailVerified:D,isAnonymous:U,providerData:G,stsTokenManager:N}=n;Ee(L&&N,e,"internal-error");const F=pr.fromJSON(this.name,N);Ee(typeof L=="string",e,"internal-error"),is(f,e.name),is(d,e.name),Ee(typeof D=="boolean",e,"internal-error"),Ee(typeof U=="boolean",e,"internal-error"),is(g,e.name),is(_,e.name),is(v,e.name),is(y,e.name),is(E,e.name),is(T,e.name);const K=new Us({uid:L,auth:e,email:d,emailVerified:D,displayName:f,isAnonymous:U,photoURL:_,phoneNumber:g,tenantId:v,stsTokenManager:F,createdAt:E,lastLoginAt:T});return G&&Array.isArray(G)&&(K.providerData=G.map(R=>Object.assign({},R))),y&&(K._redirectEventId=y),K}static async _fromIdTokenResponse(e,n,s=!1){const i=new pr;i.updateFromServerResponse(n);const r=new Us({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Bo(r),r}}/**
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
 */class a_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}a_.type="NONE";const Nh=a_;/**
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
 */function fo(t,e,n){return`firebase:${t}:${e}:${n}`}class hi{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=fo(this.userKey,i.apiKey,r),this.fullPersistenceKey=fo("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Us._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new hi(Wn(Nh),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||Wn(Nh);const o=fo(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const h=await c._get(o);if(h){const f=Us._fromJSON(e,h);c!==r&&(a=f),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new hi(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new hi(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oh(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(u_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(l_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(f_(e))return"Blackberry";if(d_(e))return"Webos";if(ou(e))return"Safari";if((e.includes("chrome/")||c_(e))&&!e.includes("edge/"))return"Chrome";if(h_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function l_(t=Xt()){return/firefox\//i.test(t)}function ou(t=Xt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function c_(t=Xt()){return/crios\//i.test(t)}function u_(t=Xt()){return/iemobile/i.test(t)}function h_(t=Xt()){return/android/i.test(t)}function f_(t=Xt()){return/blackberry/i.test(t)}function d_(t=Xt()){return/webos/i.test(t)}function Ia(t=Xt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function iE(t=Xt()){var e;return Ia(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function rE(){return _y()&&document.documentMode===10}function p_(t=Xt()){return Ia(t)||h_(t)||d_(t)||f_(t)||/windows phone/i.test(t)||u_(t)}function oE(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m_(t,e=[]){let n;switch(t){case"Browser":n=Oh(Xt());break;case"Worker":n=`${Oh(Xt())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Er}/${s}`}/**
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
 */class aE{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const s=[];try{for(const i of this.queue)await i(e),i.onAbort&&s.push(i.onAbort)}catch(i){s.reverse();for(const r of s)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Lh(this),this.idTokenSubscription=new Lh(this),this.beforeStateQueue=new aE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=n_,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Wn(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await hi.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await Bo(e)}catch(s){if(((n=s)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=zk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Jt(e):null;return n&&Ee(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Wn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new wr("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Wn(e)||this._popupRedirectResolver;Ee(n,this,"argument-error"),this.redirectPersistenceManager=await hi.create(this,[Wn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return Ee(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=m_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function zr(t){return Jt(t)}class Lh{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ny(n=>this.observer=n)}get next(){return Ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function cE(t,e,n){const s=zr(t);Ee(s._canInitEmulator,s,"emulator-config-failed"),Ee(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),r=g_(e),{host:o,port:a}=uE(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||hE()}function g_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function uE(t){const e=g_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:Mh(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:Mh(o)}}}function Mh(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function hE(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Gn("not implemented")}_getIdTokenResponse(e){return Gn("not implemented")}_linkToIdToken(e,n){return Gn("not implemented")}_getReauthenticationResolver(e){return Gn("not implemented")}}async function fE(t,e){return qr(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dE(t,e){return Hr(t,"POST","/v1/accounts:signInWithPassword",jr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pE(t,e){return Hr(t,"POST","/v1/accounts:signInWithEmailLink",jr(t,e))}async function mE(t,e){return Hr(t,"POST","/v1/accounts:signInWithEmailLink",jr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr extends au{constructor(e,n,s,i=null){super("password",s),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new mr(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new mr(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return dE(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return pE(e,{email:this._email,oobCode:this._password});default:Tn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return fE(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return mE(e,{idToken:n,email:this._email,oobCode:this._password});default:Tn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fi(t,e){return Hr(t,"POST","/v1/accounts:signInWithIdp",jr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gE="http://localhost";class Ws extends au{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ws(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Tn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=nu(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new Ws(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return fi(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,fi(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,fi(e,n)}buildRequest(){const e={requestUri:gE,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=kr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _E(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function vE(t){const e=Bi(Vi(t)).link,n=e?Bi(Vi(e)).deep_link_id:null,s=Bi(Vi(t)).deep_link_id;return(s?Bi(Vi(s)).link:null)||s||n||e||t}class lu{constructor(e){var n,s,i,r,o,a;const l=Bi(Vi(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,h=(s=l.oobCode)!==null&&s!==void 0?s:null,f=_E((i=l.mode)!==null&&i!==void 0?i:null);Ee(c&&h&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=h,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=vE(e);try{return new lu(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(){this.providerId=Pi.PROVIDER_ID}static credential(e,n){return mr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=lu.parseLink(n);return Ee(s,"argument-error"),mr._fromEmailAndCode(e,s.code,s.tenantId)}}Pi.PROVIDER_ID="password";Pi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Pi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Kr extends __{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls extends Kr{constructor(){super("facebook.com")}static credential(e){return Ws._fromParams({providerId:ls.PROVIDER_ID,signInMethod:ls.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ls.credentialFromTaggedObject(e)}static credentialFromError(e){return ls.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ls.credential(e.oauthAccessToken)}catch{return null}}}ls.FACEBOOK_SIGN_IN_METHOD="facebook.com";ls.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs extends Kr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ws._fromParams({providerId:cs.PROVIDER_ID,signInMethod:cs.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return cs.credentialFromTaggedObject(e)}static credentialFromError(e){return cs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return cs.credential(n,s)}catch{return null}}}cs.GOOGLE_SIGN_IN_METHOD="google.com";cs.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us extends Kr{constructor(){super("github.com")}static credential(e){return Ws._fromParams({providerId:us.PROVIDER_ID,signInMethod:us.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return us.credentialFromTaggedObject(e)}static credentialFromError(e){return us.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return us.credential(e.oauthAccessToken)}catch{return null}}}us.GITHUB_SIGN_IN_METHOD="github.com";us.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs extends Kr{constructor(){super("twitter.com")}static credential(e,n){return Ws._fromParams({providerId:hs.PROVIDER_ID,signInMethod:hs.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return hs.credentialFromTaggedObject(e)}static credentialFromError(e){return hs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return hs.credential(n,s)}catch{return null}}}hs.TWITTER_SIGN_IN_METHOD="twitter.com";hs.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yE(t,e){return Hr(t,"POST","/v1/accounts:signUp",jr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await Us._fromIdTokenResponse(e,s,i),o=$h(s);return new Qs({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=$h(s);return new Qs({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function $h(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo extends ns{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Vo.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new Vo(e,n,s,i)}}function v_(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Vo._fromErrorAndOperation(t,r,e,s):r})}async function bE(t,e,n=!1){const s=await dr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Qs._forOperation(t,"link",s)}/**
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
 */async function wE(t,e,n=!1){var s;const{auth:i}=t,r="reauthenticate";try{const o=await dr(t,v_(i,r,e,t),n);Ee(o.idToken,i,"internal-error");const a=ru(o.idToken);Ee(a,i,"internal-error");const{sub:l}=a;return Ee(t.uid===l,i,"user-mismatch"),Qs._forOperation(t,r,o)}catch(o){throw((s=o)===null||s===void 0?void 0:s.code)==="auth/user-not-found"&&Tn(i,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function y_(t,e,n=!1){const s="signIn",i=await v_(t,s,e),r=await Qs._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}async function kE(t,e){return y_(zr(t),e)}async function EE(t,e,n){const s=zr(t),i=await yE(s,{returnSecureToken:!0,email:e,password:n}),r=await Qs._fromIdTokenResponse(s,"signIn",i);return await s._updateCurrentUser(r.user),r}function TE(t,e,n){return kE(Jt(t),Pi.credential(e,n))}function IE(t,e,n,s){return Jt(t).onIdTokenChanged(e,n,s)}function CE(t,e,n){return Jt(t).beforeAuthStateChanged(e,n)}const jo="__sak";/**
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
 */class b_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(jo,"1"),this.storage.removeItem(jo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SE(){const t=Xt();return ou(t)||Ia(t)}const AE=1e3,DE=10;class w_ extends b_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=SE()&&oE(),this.fallbackToPolling=p_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);rE()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,DE):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},AE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}w_.type="LOCAL";const RE=w_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k_ extends b_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}k_.type="SESSION";const E_=k_;/**
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
 */function PE(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ca{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new Ca(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await PE(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ca.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cu(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class NE{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=cu("",20);i.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(f){const d=f;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(h),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(h),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mn(){return window}function OE(t){Mn().location.href=t}/**
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
 */function T_(){return typeof Mn().WorkerGlobalScope<"u"&&typeof Mn().importScripts=="function"}async function LE(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ME(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function $E(){return T_()?self:null}/**
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
 */const I_="firebaseLocalStorageDb",UE=1,qo="firebaseLocalStorage",C_="fbase_key";class Gr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Sa(t,e){return t.transaction([qo],e?"readwrite":"readonly").objectStore(qo)}function FE(){const t=indexedDB.deleteDatabase(I_);return new Gr(t).toPromise()}function ql(){const t=indexedDB.open(I_,UE);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(qo,{keyPath:C_})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(qo)?e(s):(s.close(),await FE(),e(await ql()))})})}async function Uh(t,e,n){const s=Sa(t,!0).put({[C_]:e,value:n});return new Gr(s).toPromise()}async function BE(t,e){const n=Sa(t,!1).get(e),s=await new Gr(n).toPromise();return s===void 0?null:s.value}function Fh(t,e){const n=Sa(t,!0).delete(e);return new Gr(n).toPromise()}const VE=800,jE=3;class S_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ql(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>jE)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return T_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ca._getInstance($E()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await LE(),!this.activeServiceWorker)return;this.sender=new NE(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);!s||((e=s[0])===null||e===void 0?void 0:e.fulfilled)&&((n=s[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ME()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ql();return await Uh(e,jo,"1"),await Fh(e,jo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Uh(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>BE(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Fh(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=Sa(i,!1).getAll();return new Gr(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),VE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}S_.type="LOCAL";const qE=S_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HE(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function zE(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=Ln("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",HE().appendChild(s)})}function KE(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Vr(3e4,6e4);/**
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
 */function GE(t,e){return e?Wn(e):(Ee(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class uu extends au{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return fi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return fi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return fi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function WE(t){return y_(t.auth,new uu(t),t.bypassAuthState)}function QE(t){const{auth:e,user:n}=t;return Ee(n,e,"internal-error"),wE(n,new uu(t),t.bypassAuthState)}async function YE(t){const{auth:e,user:n}=t;return Ee(n,e,"internal-error"),bE(n,new uu(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A_{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return WE;case"linkViaPopup":case"linkViaRedirect":return YE;case"reauthViaPopup":case"reauthViaRedirect":return QE;default:Tn(this.auth,"internal-error")}}resolve(e){ts(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ts(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XE=new Vr(2e3,1e4);class ai extends A_{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,ai.currentPopupAction&&ai.currentPopupAction.cancel(),ai.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ee(e,this.auth,"internal-error"),e}async onExecution(){ts(this.filter.length===1,"Popup operations only handle one event");const e=cu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ln(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ln(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ai.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ln(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,XE.get())};e()}}ai.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JE="pendingRedirect",po=new Map;class xE extends A_{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=po.get(this.auth._key());if(!e){try{const s=await ZE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}po.set(this.auth._key(),e)}return this.bypassAuthState||po.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ZE(t,e){const n=nT(e),s=tT(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function eT(t,e){po.set(t._key(),e)}function tT(t){return Wn(t._redirectPersistence)}function nT(t){return fo(JE,t.config.apiKey,t.name)}async function sT(t,e,n=!1){const s=zr(t),i=GE(s,e),o=await new xE(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iT=10*60*1e3;class rT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!oT(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!D_(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Ln(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=iT&&this.cachedEventUids.clear(),this.cachedEventUids.has(Bh(e))}saveEventToCache(e){this.cachedEventUids.add(Bh(e)),this.lastProcessedEventTime=Date.now()}}function Bh(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function D_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function oT(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return D_(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aT(t,e={}){return qr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,cT=/^https?/;async function uT(t){if(t.config.emulator)return;const{authorizedDomains:e}=await aT(t);for(const n of e)try{if(hT(n))return}catch{}Tn(t,"unauthorized-domain")}function hT(t){const e=jl(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!cT.test(n))return!1;if(lT.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const fT=new Vr(3e4,6e4);function Vh(){const t=Mn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function dT(t){return new Promise((e,n)=>{var s,i,r;function o(){Vh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Vh(),n(Ln(t,"network-request-failed"))},timeout:fT.get()})}if(!((i=(s=Mn().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=Mn().gapi)===null||r===void 0)&&r.load)o();else{const a=KE("iframefcb");return Mn()[a]=()=>{gapi.load?o():n(Ln(t,"network-request-failed"))},zE(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw mo=null,e})}let mo=null;function pT(t){return mo=mo||dT(t),mo}/**
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
 */const mT=new Vr(5e3,15e3),gT="__/auth/iframe",_T="emulator/auth/iframe",vT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},yT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function bT(t){const e=t.config;Ee(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?iu(e,_T):`https://${t.config.authDomain}/${gT}`,s={apiKey:e.apiKey,appName:t.name,v:Er},i=yT.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${kr(s).slice(1)}`}async function wT(t){const e=await pT(t),n=Mn().gapi;return Ee(n,t,"internal-error"),e.open({where:document.body,url:bT(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:vT,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=Ln(t,"network-request-failed"),a=Mn().setTimeout(()=>{r(o)},mT.get());function l(){Mn().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const kT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ET=500,TT=600,IT="_blank",CT="http://localhost";class jh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ST(t,e,n,s=ET,i=TT){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},kT),{width:s.toString(),height:i.toString(),top:r,left:o}),c=Xt().toLowerCase();n&&(a=c_(c)?IT:n),l_(c)&&(e=e||CT,l.scrollbars="yes");const h=Object.entries(l).reduce((d,[g,_])=>`${d}${g}=${_},`,"");if(iE(c)&&a!=="_self")return AT(e||"",a),new jh(null);const f=window.open(e||"",a,h);Ee(f,t,"popup-blocked");try{f.focus()}catch{}return new jh(f)}function AT(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const DT="__/auth/handler",RT="emulator/auth/handler";function qh(t,e,n,s,i,r){Ee(t.config.authDomain,t,"auth-domain-config-required"),Ee(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Er,eventId:i};if(e instanceof __){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Py(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(r||{}))o[l]=c}if(e instanceof Kr){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${PT(t)}?${kr(a).slice(1)}`}function PT({config:t}){return t.emulator?iu(t,RT):`https://${t.authDomain}/${DT}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const el="webStorageSupport";class NT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=E_,this._completeRedirectFn=sT,this._overrideRedirectResult=eT}async _openPopup(e,n,s,i){var r;ts((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=qh(e,n,s,jl(),i);return ST(e,o,cu())}async _openRedirect(e,n,s,i){return await this._originValidation(e),OE(qh(e,n,s,jl(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(ts(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await wT(e),s=new rT(e);return n.register("authEvent",i=>(Ee(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(el,{type:el},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[el];o!==void 0&&n(!!o),Tn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=uT(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return p_()||ou()||Ia()}}const OT=NT;var Hh="@firebase/auth",zh="0.20.10";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{var i;e(((i=s)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MT(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function $T(t){mi(new qs("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:r,authDomain:o}=s.options;return((a,l)=>{Ee(r&&!r.includes(":"),"invalid-api-key",{appName:a.name}),Ee(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const c={apiKey:r,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:m_(t)},h=new lE(a,l,c);return jk(h,n),h})(s,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),mi(new qs("auth-internal",e=>{const n=zr(e.getProvider("auth").getImmediate());return(s=>new LT(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ms(Hh,zh,MT(t)),ms(Hh,zh,"esm2017")}/**
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
 */const UT=5*60,FT=$p("authIdTokenMaxAge")||UT;let Kh=null;const BT=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>FT)return;const i=n==null?void 0:n.token;Kh!==i&&(Kh=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function VT(t=Vp()){const e=sc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Vk(t,{popupRedirectResolver:OT,persistence:[qE,RE,E_]}),s=$p("authTokenSyncURL");if(s){const r=BT(s);CE(n,r,()=>r(n.currentUser)),IE(n,o=>r(o))}const i=Mp("auth");return i&&cE(n,`http://${i}`),n}$T("Browser");let Ei=[],R_=[],Fs=[];const jT={apiKey:"AIzaSyDGi3ndUC1b4SFNstliSSVryu7_ymXEkZc",authDomain:"match-home-7d1f9.firebaseapp.com",databaseURL:"https://match-home-7d1f9-default-rtdb.firebaseio.com",projectId:"match-home-7d1f9",storageBucket:"match-home-7d1f9.appspot.com",messagingSenderId:"747751099607",appId:"1:747751099607:web:29d1e5beda87c847dfb492"},P_=Bp(jT),lt=Ik(P_),N_=VT(P_),qT=Yt(lt,"binnacles"),HT=Yt(lt,"contacts"),zT=Yt(lt,"properties");Yt(lt,"todos");Zc(qT).then(t=>R_=t.docs.map(e=>({...e.data(),id:e.id})));Zc(HT).then(t=>Ei=t.docs.map(e=>({...e.data(),id:e.id})));Zc(zT).then(t=>Fs=t.docs.map(e=>({...e.data(),id:e.id})));function Gh(t,e,n){const s=t.slice();return s[1]=e[n],s}function Wh(t,e,n){const s=t.slice();return s[1]=e[n],s}function Qh(t){let e,n,s=kt(t[1].endTask)+"",i,r,o=t[1].task+"",a,l,c=t[1].notes&&Yh(t);return{c(){e=p("ul"),n=p("li"),i=S(s),r=S(` - -\r
                    `),a=S(o),l=S(` - -\r
                    `),c&&c.c(),ys(n,"complete",t[1].isComplete)},m(h,f){k(h,e,f),u(e,n),u(n,i),u(n,r),u(n,a),u(n,l),c&&c.m(n,null)},p(h,f){f&1&&s!==(s=kt(h[1].endTask)+"")&&re(i,s),f&1&&o!==(o=h[1].task+"")&&re(a,o),h[1].notes?c?c.p(h,f):(c=Yh(h),c.c(),c.m(n,null)):c&&(c.d(1),c=null),f&1&&ys(n,"complete",h[1].isComplete)},d(h){h&&b(e),c&&c.d()}}}function Yh(t){let e=t[1].notes+"",n;return{c(){n=S(e)},m(s,i){k(s,n,i)},p(s,i){i&1&&e!==(e=s[1].notes+"")&&re(n,e)},d(s){s&&b(n)}}}function Xh(t){let e,n=!t[1].timeTask&&Qh(t);return{c(){n&&n.c(),e=nn()},m(s,i){n&&n.m(s,i),k(s,e,i)},p(s,i){s[1].timeTask?n&&(n.d(1),n=null):n?n.p(s,i):(n=Qh(s),n.c(),n.m(e.parentNode,e))},d(s){n&&n.d(s),s&&b(e)}}}function Jh(t){let e,n,s,i=Ru(t[1].endTask)+"",r,o,a=Du(t[1].endTask)+"",l,c,h=kt(t[1].endTask)+"",f,d,g=t[1].task+"",_,v,y=t[1].notes&&xh(t);return{c(){e=p("ul"),n=p("li"),s=p("spam"),r=S(i),o=w(),l=S(a),c=S(` - -\r
                      `),f=S(h),d=w(),_=S(g),v=S(` - -\r
                      `),y&&y.c(),m(s,"type","number"),ys(n,"complete",t[1].isComplete)},m(E,T){k(E,e,T),u(e,n),u(n,s),u(s,r),u(s,o),u(s,l),u(s,c),u(s,f),u(s,d),u(s,_),u(s,v),y&&y.m(s,null)},p(E,T){T&1&&i!==(i=Ru(E[1].endTask)+"")&&re(r,i),T&1&&a!==(a=Du(E[1].endTask)+"")&&re(l,a),T&1&&h!==(h=kt(E[1].endTask)+"")&&re(f,h),T&1&&g!==(g=E[1].task+"")&&re(_,g),E[1].notes?y?y.p(E,T):(y=xh(E),y.c(),y.m(s,null)):y&&(y.d(1),y=null),T&1&&ys(n,"complete",E[1].isComplete)},d(E){E&&b(e),y&&y.d()}}}function xh(t){let e=t[1].notes+"",n;return{c(){n=S(e)},m(s,i){k(s,n,i)},p(s,i){i&1&&e!==(e=s[1].notes+"")&&re(n,e)},d(s){s&&b(n)}}}function Zh(t){let e,n=t[1].timeTask&&Jh(t);return{c(){n&&n.c(),e=w()},m(s,i){n&&n.m(s,i),k(s,e,i)},p(s,i){s[1].timeTask?n?n.p(s,i):(n=Jh(s),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(s){n&&n.d(s),s&&b(e)}}}function KT(t){let e,n,s,i,r,o,a,l,c,h,f=t[0],d=[];for(let v=0;v<f.length;v+=1)d[v]=Xh(Wh(t,f,v));let g=t[0],_=[];for(let v=0;v<g.length;v+=1)_[v]=Zh(Gh(t,g,v));return{c(){e=p("div"),n=p("div"),s=p("div"),i=p("h1"),i.textContent="Agenda",r=w(),o=p("h3"),o.textContent="Tareas",a=w();for(let v=0;v<d.length;v+=1)d[v].c();l=w(),c=p("h3"),c.textContent="Citas",h=w();for(let v=0;v<_.length;v+=1)_[v].c();m(i,"class","title svelte-13rvwi6"),m(o,"class","subtitle svelte-13rvwi6"),m(c,"class","subtitle svelte-13rvwi6"),m(s,"class","schedule"),m(n,"class","container"),m(e,"class","show-home")},m(v,y){k(v,e,y),u(e,n),u(n,s),u(s,i),u(s,r),u(s,o),u(s,a);for(let E=0;E<d.length;E+=1)d[E].m(s,null);u(s,l),u(s,c),u(s,h);for(let E=0;E<_.length;E+=1)_[E].m(s,null)},p(v,[y]){if(y&1){f=v[0];let E;for(E=0;E<f.length;E+=1){const T=Wh(v,f,E);d[E]?d[E].p(T,y):(d[E]=Xh(T),d[E].c(),d[E].m(s,l))}for(;E<d.length;E+=1)d[E].d(1);d.length=f.length}if(y&1){g=v[0];let E;for(E=0;E<g.length;E+=1){const T=Gh(v,g,E);_[E]?_[E].p(T,y):(_[E]=Zh(T),_[E].c(),_[E].m(s,null))}for(;E<_.length;E+=1)_[E].d(1);_.length=g.length}},i:he,o:he,d(v){v&&b(e),Ve(d,v),Ve(_,v)}}}function GT(t,e,n){let s;return Oe(t,hl,i=>n(0,s=i)),[s]}class WT extends Xe{constructor(e){super(),Ye(this,e,GT,KT,Ge,{})}}function ef(t,e,n){const s=t.slice();return s[2]=e[n],s[4]=n,s}function QT(t){let e,n=kt(t[2].date)+"",s,i,r=t[2].comment+"",o;return{c(){e=p("div"),s=S(n),i=w(),o=S(r),m(e,"class","date-binnacle")},m(a,l){k(a,e,l),u(e,s),u(e,i),u(e,o)},p(a,l){l&1&&n!==(n=kt(a[2].date)+"")&&re(s,n),l&1&&r!==(r=a[2].comment+"")&&re(o,r)},d(a){a&&b(e)}}}function tf(t){let e,n,s=t[4]<20&&QT(t);return{c(){e=p("div"),s&&s.c(),n=w(),m(e,"class","int-binnacle")},m(i,r){k(i,e,r),s&&s.m(e,null),u(e,n)},p(i,r){i[4]<20&&s.p(i,r)},d(i){i&&b(e),s&&s.d()}}}function YT(t){let e,n,s,i,r,o,a,l=t[0],c=[];for(let h=0;h<l.length;h+=1)c[h]=tf(ef(t,l,h));return{c(){e=S(`a\r
`),n=p("main"),s=p("div"),i=p("div"),r=p("div"),o=p("h1"),o.textContent="Bit\xE1cora",a=w();for(let h=0;h<c.length;h+=1)c[h].c();m(o,"class","title svelte-7lgm1k"),m(r,"class","binnacleHome"),m(i,"class","schedule"),m(s,"class","container")},m(h,f){k(h,e,f),k(h,n,f),u(n,s),u(s,i),u(i,r),u(r,o),u(r,a);for(let d=0;d<c.length;d+=1)c[d].m(r,null)},p(h,[f]){if(f&1){l=h[0];let d;for(d=0;d<l.length;d+=1){const g=ef(h,l,d);c[d]?c[d].p(g,f):(c[d]=tf(g),c[d].c(),c[d].m(r,null))}for(;d<c.length;d+=1)c[d].d(1);c.length=l.length}},i:he,o:he,d(h){h&&b(e),h&&b(n),Ve(c,h)}}}function XT(t){t.sort((e,n)=>new Date(e.date)<new Date(n.date)?1:new Date(e.date)>new Date(n.date)?-1:0)}function JT(t,e,n){let s=[];const i=Ta(Yt(lt,"binnacles"),r=>{n(0,s=r.docs.map(o=>({...o.data(),id:o.id}))),XT(s),console.log(s)},r=>{console.log(r)});return _r(i),[s]}class xT extends Xe{constructor(e){super(),Ye(this,e,JT,YT,Ge,{})}}const O_="/to-deploy-mh/assets/add-user.1bd66bde.png",L_="/to-deploy-mh/assets/house.99302696.png",M_="/to-deploy-mh/assets/schedule.20f01954.png",ZT="/to-deploy-mh/assets/team.31fda88c.png",eI=yt(!1);function tI(t){let e;return{c(){e=S("Inicia sesi\xF3n")},m(n,s){k(n,e,s)},d(n){n&&b(e)}}}function nI(t){let e,n,s,i,r,o,a,l,c,h,f,d,g,_,v,y,E,T,L,D,U,G,N,F,K,R,Q,j,W;return R=new un({props:{to:"/login",$$slots:{default:[tI]},$$scope:{ctx:t}}}),{c(){e=p("div"),n=p("br"),s=p("br"),i=p("br"),r=w(),o=p("div"),a=p("h1"),a.textContent="Registra tu cuenta",l=w(),c=p("div"),h=p("input"),f=w(),d=p("div"),g=p("input"),_=w(),v=p("br"),y=w(),E=p("div"),T=p("button"),T.textContent="Registrarse",L=w(),D=p("p"),D.textContent="O tambi\xE9n",U=w(),G=p("br"),N=w(),F=p("p"),K=S("\xBFYa tienes cuenta? "),ge(R.$$.fragment),m(a,"class","text-center text-login svelte-ftg4em"),m(h,"name","email"),m(h,"type","email"),m(h,"class","input-form svelte-ftg4em"),m(h,"placeholder","Correo"),h.required=!0,m(c,"class","center svelte-ftg4em"),m(g,"name","password"),m(g,"type","password"),m(g,"class","input-form svelte-ftg4em"),m(g,"placeholder","Contrase\xF1a"),m(d,"class","center svelte-ftg4em"),m(T,"class","button-signup fondo-color-signup svelte-ftg4em"),m(E,"class","center svelte-ftg4em"),m(D,"class","text-center svelte-ftg4em"),m(F,"class","text-center svelte-ftg4em"),m(o,"class","form-signin svelte-ftg4em")},m(B,x){k(B,e,x),u(e,n),u(e,s),u(e,i),u(e,r),u(e,o),u(o,a),u(o,l),u(o,c),u(c,h),u(o,f),u(o,d),u(d,g),u(o,_),u(o,v),u(o,y),u(o,E),u(E,T),u(o,L),u(o,D),u(o,U),u(o,G),u(o,N),u(o,F),u(F,K),fe(R,F,null),Q=!0,j||(W=[q(h,"input",t[2]),q(g,"input",t[3]),q(T,"click",t[1])],j=!0)},p(B,[x]){const V={};x&64&&(V.$$scope={dirty:x,ctx:B}),R.$set(V)},i(B){Q||(H(R.$$.fragment,B),Q=!0)},o(B){J(R.$$.fragment,B),Q=!1},d(B){B&&b(e),de(R),j=!1,Ze(W)}}}function sI(t){const e=Ys();let n={email:"",password:""};const s=a=>{n={...n,[a.target.name]:a.target.value}};return[s,async()=>{try{await EE(N_,n.email,n.password),e("/")}catch(a){console.log(a)}},a=>s(a),a=>s(a)]}class iI extends Xe{constructor(e){super(),Ye(this,e,sI,nI,Ge,{})}}function $_(t){const e=t-1;return e*e*e+1}function Ti(t){return t===0||t===1?t:t<.5?.5*Math.pow(2,20*t-10):-.5*Math.pow(2,10-t*20)+1}function Ho(t,{delay:e=0,duration:n=400,easing:s=xd}={}){const i=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:s,css:r=>`opacity: ${r*i}`}}function zo(t,{delay:e=0,duration:n=400,easing:s=$_,x:i=0,y:r=0,opacity:o=0}={}){const a=getComputedStyle(t),l=+a.opacity,c=a.transform==="none"?"":a.transform,h=l*(1-o);return{delay:e,duration:n,easing:s,css:(f,d)=>`
			transform: ${c} translate(${(1-f)*i}px, ${(1-f)*r}px);
			opacity: ${l-h*d}`}}function Ii(t,{delay:e=0,duration:n=400,easing:s=$_,start:i=0,opacity:r=0}={}){const o=getComputedStyle(t),a=+o.opacity,l=o.transform==="none"?"":o.transform,c=1-i,h=a*(1-r);return{delay:e,duration:n,easing:s,css:(f,d)=>`
			transform: ${l} scale(${1-c*d});
			opacity: ${a-h*d}
		`}}function rI(t){t.sort((e,n)=>new Date(e.endTask)<new Date(n.endTask)?1:new Date(e.endTask)>new Date(n.endTask)?-1:0)}const Aa="/to-deploy-mh/assets/edit.070633c4.svg",U_="/to-deploy-mh/assets/calendar_check.3c15b67b.svg";function nf(t,e,n){const s=t.slice();return s[22]=e[n],s}function sf(t,e,n){const s=t.slice();return s[22]=e[n],s}function oI(t){let e;return{c(){e=S("Editar")},m(n,s){k(n,e,s)},d(n){n&&b(e)}}}function aI(t){let e;return{c(){e=S("Guardar")},m(n,s){k(n,e,s)},d(n){n&&b(e)}}}function rf(t){let e,n,s;return{c(){e=p("button"),e.textContent="Borrar"},m(i,r){k(i,e,r),n||(s=q(e,"click",t[6]),n=!0)},p:he,d(i){i&&b(e),n=!1,s()}}}function of(t){let e,n,s,i,r,o,a,l,c,h,f,d=t[3],g=[];for(let T=0;T<d.length;T+=1)g[T]=uf(sf(t,d,T));let _=null;d.length||(_=af());let v=t[3],y=[];for(let T=0;T<v.length;T+=1)y[T]=pf(nf(t,v,T));let E=null;return v.length||(E=hf()),{c(){e=p("h3"),e.textContent="Tareas",n=w(),s=p("ol");for(let T=0;T<g.length;T+=1)g[T].c();_&&_.c(),i=w(),r=p("p"),r.textContent=`${mf}`,o=w(),a=p("h3"),a.textContent="Agenda",l=w(),c=p("ol");for(let T=0;T<y.length;T+=1)y[T].c();E&&E.c(),h=w(),f=p("p"),f.textContent=`${mf}`,m(r,"class","error"),m(f,"class","error")},m(T,L){k(T,e,L),k(T,n,L),k(T,s,L);for(let D=0;D<g.length;D+=1)g[D].m(s,null);_&&_.m(s,null),u(s,i),u(s,r),k(T,o,L),k(T,a,L),k(T,l,L),k(T,c,L);for(let D=0;D<y.length;D+=1)y[D].m(c,null);E&&E.m(c,null),u(c,h),u(c,f)},p(T,L){if(L&40){d=T[3];let D;for(D=0;D<d.length;D+=1){const U=sf(T,d,D);g[D]?g[D].p(U,L):(g[D]=uf(U),g[D].c(),g[D].m(s,i))}for(;D<g.length;D+=1)g[D].d(1);g.length=d.length,!d.length&&_?_.p(T,L):d.length?_&&(_.d(1),_=null):(_=af(),_.c(),_.m(s,i))}if(L&40){v=T[3];let D;for(D=0;D<v.length;D+=1){const U=nf(T,v,D);y[D]?y[D].p(U,L):(y[D]=pf(U),y[D].c(),y[D].m(c,h))}for(;D<y.length;D+=1)y[D].d(1);y.length=v.length,!v.length&&E?E.p(T,L):v.length?E&&(E.d(1),E=null):(E=hf(),E.c(),E.m(c,h))}},d(T){T&&b(e),T&&b(n),T&&b(s),Ve(g,T),_&&_.d(),T&&b(o),T&&b(a),T&&b(l),T&&b(c),Ve(y,T),E&&E.d()}}}function af(t){let e;return{c(){e=p("p"),e.textContent="No Hay Tareas Pendientes"},m(n,s){k(n,e,s)},p:he,d(n){n&&b(e)}}}function lf(t){let e,n,s,i,r,o,a,l,c,h,f=kt(t[22].endTask)+"",d,g,_=t[22].task+"",v,y,E,T;function L(){return t[13](t[22])}function D(){return t[14](t[22])}let U=t[22].notes&&cf(t);return{c(){e=p("div"),n=p("li"),s=p("span"),i=p("img"),o=w(),a=p("img"),c=w(),h=p("spam"),d=S(f),g=S(` -*-\r
                                 `),v=S(_),y=S(` -*-\r
                                 `),U&&U.c(),st(i.src,r=Aa)||m(i,"src",r),m(i,"alt","edit"),m(i,"class","iconIMH svelte-156umuq"),st(a.src,l=U_)||m(a,"src",l),m(a,"alt","complete"),m(a,"class","iconIMH svelte-156umuq"),m(n,"class","schedule svelte-156umuq"),ys(n,"complete",t[22].isComplete)},m(G,N){k(G,e,N),u(e,n),u(n,s),u(s,i),u(s,o),u(s,a),u(n,c),u(n,h),u(h,d),u(h,g),u(h,v),u(h,y),U&&U.m(h,null),E||(T=[q(i,"click",L),q(a,"click",D)],E=!0)},p(G,N){t=G,N&8&&f!==(f=kt(t[22].endTask)+"")&&re(d,f),N&8&&_!==(_=t[22].task+"")&&re(v,_),t[22].notes?U?U.p(t,N):(U=cf(t),U.c(),U.m(h,null)):U&&(U.d(1),U=null),N&8&&ys(n,"complete",t[22].isComplete)},d(G){G&&b(e),U&&U.d(),E=!1,Ze(T)}}}function cf(t){let e=t[22].notes+"",n;return{c(){n=S(e)},m(s,i){k(s,n,i)},p(s,i){i&8&&e!==(e=s[22].notes+"")&&re(n,e)},d(s){s&&b(n)}}}function uf(t){let e,n=!t[22].timeTask&&lf(t);return{c(){n&&n.c(),e=nn()},m(s,i){n&&n.m(s,i),k(s,e,i)},p(s,i){s[22].timeTask?n&&(n.d(1),n=null):n?n.p(s,i):(n=lf(s),n.c(),n.m(e.parentNode,e))},d(s){n&&n.d(s),s&&b(e)}}}function hf(t){let e;return{c(){e=p("p"),e.textContent="No Hay Tareas Pendientes"},m(n,s){k(n,e,s)},p:he,d(n){n&&b(e)}}}function ff(t){let e,n,s,i,r,o,a,l,c,h,f=t[22].timeTask+"",d,g,_=kt(t[22].endTask)+"",v,y,E=t[22].task+"",T,L,D,U;function G(){return t[15](t[22])}function N(){return t[16](t[22])}let F=t[22].notes&&df(t);return{c(){e=p("div"),n=p("li"),s=p("span"),i=p("img"),o=w(),a=p("img"),c=w(),h=p("spam"),d=S(f),g=S(` -*-\r
                                 `),v=S(_),y=S(` -*-\r
                                 `),T=S(E),L=S(` -*-\r
                                 `),F&&F.c(),st(i.src,r=Aa)||m(i,"src",r),m(i,"alt","edit"),m(i,"class","iconIMH svelte-156umuq"),st(a.src,l=U_)||m(a,"src",l),m(a,"alt","complete"),m(a,"class","iconIMH svelte-156umuq"),m(n,"class","schedule svelte-156umuq"),ys(n,"complete",t[22].isComplete)},m(K,R){k(K,e,R),u(e,n),u(n,s),u(s,i),u(s,o),u(s,a),u(n,c),u(n,h),u(h,d),u(h,g),u(h,v),u(h,y),u(h,T),u(h,L),F&&F.m(h,null),D||(U=[q(i,"click",G),q(a,"click",N),q(e,"dblclick",t[17])],D=!0)},p(K,R){t=K,R&8&&f!==(f=t[22].timeTask+"")&&re(d,f),R&8&&_!==(_=kt(t[22].endTask)+"")&&re(v,_),R&8&&E!==(E=t[22].task+"")&&re(T,E),t[22].notes?F?F.p(t,R):(F=df(t),F.c(),F.m(h,null)):F&&(F.d(1),F=null),R&8&&ys(n,"complete",t[22].isComplete)},d(K){K&&b(e),F&&F.d(),D=!1,Ze(U)}}}function df(t){let e=t[22].notes+"",n;return{c(){n=S(e)},m(s,i){k(s,n,i)},p(s,i){i&8&&e!==(e=s[22].notes+"")&&re(n,e)},d(s){s&&b(n)}}}function pf(t){let e,n=t[22].timeTask&&ff(t);return{c(){n&&n.c(),e=nn()},m(s,i){n&&n.m(s,i),k(s,e,i)},p(s,i){s[22].timeTask?n?n.p(s,i):(n=ff(s),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(s){n&&n.d(s),s&&b(e)}}}function lI(t){let e,n,s,i,r,o,a,l,c,h,f,d,g,_,v,y,E,T,L,D,U,G,N,F,K,R,Q,j,W,B,x,V,le;function Z(M,X){return M[0]?oI:aI}let ce=Z(t),ie=ce(t),$=t[0]&&rf(t),C=t[2]==="start"&&of(t);return{c(){e=p("div"),n=p("h1"),n.textContent="Agenda",s=w(),i=p("img"),o=w(),a=p("div"),l=p("div"),h=w(),f=p("div"),d=p("div"),g=p("input"),_=w(),v=p("div"),y=p("input"),E=w(),T=p("input"),L=w(),D=p("div"),U=p("textarea"),G=w(),N=p("div"),F=p("button"),ie.c(),K=w(),R=p("button"),R.textContent="Cancelar",Q=w(),$&&$.c(),W=w(),B=p("div"),C&&C.c(),st(i.src,r=M_)||m(i,"src",r),m(i,"alt","schedule"),m(i,"class","imgTitle svelte-156umuq"),m(l,"class","background"),m(g,"type","text"),m(g,"class","inputTask"),m(g,"cols","56"),m(g,"rows","1"),m(g,"placeholder","Agrega una Tarea o Cita"),m(y,"type","time"),m(y,"class","inputDate"),m(T,"type","date"),m(T,"class","inputDate"),m(v,"class","contDate"),m(U,"name","notes"),m(U,"id",""),m(U,"cols","56"),m(U,"rows","5"),m(U,"placeholder","descripci\xF3n"),m(f,"class","pop-up"),m(a,"class","container"),m(B,"class","container"),m(e,"class","container")},m(M,X){k(M,e,X),u(e,n),u(e,s),u(e,i),u(e,o),u(e,a),u(a,l),u(a,h),u(a,f),u(f,d),u(d,g),ve(g,t[1].task),u(f,_),u(f,v),u(v,y),ve(y,t[1].timeTask),u(v,E),u(v,T),ve(T,t[1].endTask),u(f,L),u(f,D),u(D,U),ve(U,t[1].notes),u(f,G),u(f,N),u(N,F),ie.m(F,null),u(N,K),u(N,R),u(N,Q),$&&$.m(N,null),u(e,W),u(e,B),C&&C.m(B,null),x=!0,V||(le=[q(l,"keydown",t[8]),q(g,"input",t[9]),q(g,"input",t[7]),q(y,"input",t[10]),q(T,"input",t[11]),q(U,"input",t[12]),q(F,"click",t[4]),q(R,"click",t[8])],V=!0)},p(M,[X]){X&2&&g.value!==M[1].task&&ve(g,M[1].task),X&2&&ve(y,M[1].timeTask),X&2&&ve(T,M[1].endTask),X&2&&ve(U,M[1].notes),ce!==(ce=Z(M))&&(ie.d(1),ie=ce(M),ie&&(ie.c(),ie.m(F,null))),M[0]?$?$.p(M,X):($=rf(M),$.c(),$.m(N,null)):$&&($.d(1),$=null),M[2]==="start"?C?C.p(M,X):(C=of(M),C.c(),C.m(B,null)):C&&(C.d(1),C=null)},i(M){x||(xe(()=>{c||(c=fn(l,Ho,{},!0)),c.run(1)}),xe(()=>{j||(j=fn(f,zo,{},!0)),j.run(1)}),x=!0)},o(M){c||(c=fn(l,Ho,{},!1)),c.run(0),j||(j=fn(f,zo,{},!1)),j.run(0),x=!1},d(M){M&&b(e),M&&c&&c.end(),ie.d(),$&&$.d(),M&&j&&j.end(),C&&C.d(),V=!1,Ze(le)}}}let mf="";function cI(t,e,n){let s,i,r;Oe(t,as,K=>n(19,s=K)),Oe(t,Ke,K=>n(2,i=K)),Oe(t,hl,K=>n(3,r=K));const o=Ys();let a=!1,l="addItem";Ce(Ke,i="start",i);let c={task:"",isComplete:"",createdAt:"",endTask:"",timeTask:"",notes:"",user:"",id:""};const h=Ta(Yt(lt,"todos"),K=>{Ce(hl,r=K.docs.map(R=>({...R.data(),id:R.id})),r),rI(r)},K=>{console.log(K)});_r(h);async function f(){Ce(as,s=c,s);let K=new Date(s.endTask).getTime();Ce(as,s={...s,endTask:K},s),l==="deleItem"?confirm("Quieres borrarlo definitivmente?")===!0&&await Ea(Is(lt,"todos",s.id)):l==="editItem"||await vs(Yt(lt,"todos"),s),n(0,a=!1),Ce(as,s={},s),n(1,c={}),Ce(Ke,i="start",i)}async function d(K){n(1,c=K),console.log(K),l="editItem",n(0,a=!0)}async function g(){n(0,a=!0),l="deleItem",f()}function _(){c.task.length>0&&Ce(Ke,i="typing",i)}function v(){Ce(as,s=[],s),o("/contactos")}function y(){c.task=this.value,n(1,c)}function E(){c.timeTask=this.value,n(1,c)}function T(){c.endTask=this.value,n(1,c)}function L(){c.notes=this.value,n(1,c)}return[a,c,i,r,f,d,g,_,v,y,E,T,L,K=>d(K),K=>void 0,K=>d(K),K=>void 0,()=>d]}class uI extends Xe{constructor(e){super(),Ye(this,e,cI,lI,Ge,{})}}function hI(t){let e;return{c(){e=p("h1"),e.textContent="Estas en Sinergias"},m(n,s){k(n,e,s)},p:he,i:he,o:he,d(n){n&&b(e)}}}class fI extends Xe{constructor(e){super(),Ye(this,e,null,hI,Ge,{})}}function dI(t){let e,n,s,i,r,o;return{c(){e=p("div"),n=p("div"),s=p("img"),r=w(),o=p("h1"),o.textContent="Contactos",st(s.src,i=O_)||m(s,"src",i),m(s,"alt","Buzon"),m(s,"class","profile-img svelte-obs5po"),m(o,"class","name svelte-obs5po"),m(n,"class","optionCard svelte-obs5po"),m(e,"class","container")},m(a,l){k(a,e,l),u(e,n),u(n,s),u(n,r),u(n,o)},p:he,d(a){a&&b(e)}}}function pI(t){let e,n,s,i,r,o;return{c(){e=p("div"),n=p("div"),s=p("img"),r=w(),o=p("h1"),o.textContent="Propiedades",st(s.src,i=L_)||m(s,"src",i),m(s,"alt","propiedad"),m(s,"class","profile-img svelte-obs5po"),m(o,"class","name svelte-obs5po"),m(n,"class","optionCard svelte-obs5po"),m(e,"class","container")},m(a,l){k(a,e,l),u(e,n),u(n,s),u(n,r),u(n,o)},p:he,d(a){a&&b(e)}}}function mI(t){let e,n,s,i,r,o;return{c(){e=p("div"),n=p("div"),s=p("img"),r=w(),o=p("h1"),o.textContent="Agenda",st(s.src,i=M_)||m(s,"src",i),m(s,"alt","agenda"),m(s,"class","profile-img svelte-obs5po"),m(o,"class","name svelte-obs5po"),m(n,"class","optionCard svelte-obs5po"),m(e,"class","container")},m(a,l){k(a,e,l),u(e,n),u(n,s),u(n,r),u(n,o)},p:he,d(a){a&&b(e)}}}function gI(t){let e,n,s,i,r,o;return{c(){e=p("div"),n=p("div"),s=p("img"),r=w(),o=p("h1"),o.textContent="Sinergias",st(s.src,i=ZT)||m(s,"src",i),m(s,"alt","sinergias"),m(s,"class","profile-img svelte-obs5po"),m(o,"class","name svelte-obs5po"),m(n,"class","optionCard svelte-obs5po"),m(e,"class","container")},m(a,l){k(a,e,l),u(e,n),u(n,s),u(n,r),u(n,o)},p:he,d(a){a&&b(e)}}}function _I(t){let e,n,s,i,r,o,a,l;return e=new un({props:{to:"/contactos",title:"contactos",$$slots:{default:[dI]},$$scope:{ctx:t}}}),s=new un({props:{to:"/propiedades",title:"propiedades",$$slots:{default:[pI]},$$scope:{ctx:t}}}),r=new un({props:{to:"/agenda",title:"agenda",class:"s",$$slots:{default:[mI]},$$scope:{ctx:t}}}),a=new un({props:{to:"/sinergias",title:"sinergias",$$slots:{default:[gI]},$$scope:{ctx:t}}}),{c(){ge(e.$$.fragment),n=w(),ge(s.$$.fragment),i=w(),ge(r.$$.fragment),o=w(),ge(a.$$.fragment)},m(c,h){fe(e,c,h),k(c,n,h),fe(s,c,h),k(c,i,h),fe(r,c,h),k(c,o,h),fe(a,c,h),l=!0},p(c,h){const f={};h&1&&(f.$$scope={dirty:h,ctx:c}),e.$set(f);const d={};h&1&&(d.$$scope={dirty:h,ctx:c}),s.$set(d);const g={};h&1&&(g.$$scope={dirty:h,ctx:c}),r.$set(g);const _={};h&1&&(_.$$scope={dirty:h,ctx:c}),a.$set(_)},i(c){l||(H(e.$$.fragment,c),H(s.$$.fragment,c),H(r.$$.fragment,c),H(a.$$.fragment,c),l=!0)},o(c){J(e.$$.fragment,c),J(s.$$.fragment,c),J(r.$$.fragment,c),J(a.$$.fragment,c),l=!1},d(c){de(e,c),c&&b(n),de(s,c),c&&b(i),de(r,c),c&&b(o),de(a,c)}}}function vI(t){let e,n,s,i,r,o,a,l,c;return s=new Zl({props:{$$slots:{default:[_I]},$$scope:{ctx:t}}}),o=new WT({props:{"(orderTodos)":!0}}),l=new xT({}),{c(){e=p("body"),n=p("div"),ge(s.$$.fragment),i=w(),r=p("div"),ge(o.$$.fragment),a=w(),ge(l.$$.fragment),m(n,"class","wrapper-grid svelte-obs5po"),m(r,"class",""),m(e,"class","svelte-obs5po")},m(h,f){k(h,e,f),u(e,n),fe(s,n,null),u(e,i),u(e,r),fe(o,r,null),u(r,a),fe(l,r,null),c=!0},p(h,[f]){const d={};f&1&&(d.$$scope={dirty:f,ctx:h}),s.$set(d)},i(h){c||(H(s.$$.fragment,h),H(o.$$.fragment,h),H(l.$$.fragment,h),c=!0)},o(h){J(s.$$.fragment,h),J(o.$$.fragment,h),J(l.$$.fragment,h),c=!1},d(h){h&&b(e),de(s),de(o),de(l)}}}class yI extends Xe{constructor(e){super(),Ye(this,e,null,vI,Ge,{})}}function bI(t){let e,n,s,i,r,o,a,l,c,h,f=kt(t[2])+"",d,g,_,v,y,E,T,L,D,U,G,N,F,K,R,Q,j,W,B;return{c(){e=p("div"),n=p("div"),s=p("div"),i=p("h5"),r=S(t[0]),o=w(),a=S(t[1]),l=w(),c=p("h5"),h=S("Alta "),d=S(f),g=w(),_=p("div"),v=p("p"),y=S(t[3]),E=w(),T=p("p"),L=S("tel: "),D=S(t[4]),U=S(" email: "),G=S(t[5]),N=w(),F=p("p"),K=S("Presupuesto "),R=S(t[6]),Q=w(),j=p("p"),W=S("Rango "),B=S(t[7]),m(s,"class","namePerson svelte-s0ws0m"),m(_,"class","nameDate svelte-s0ws0m"),m(n,"class","contactCard"),m(e,"class","container contact svelte-s0ws0m")},m(x,V){k(x,e,V),u(e,n),u(n,s),u(s,i),u(i,r),u(i,o),u(i,a),u(s,l),u(s,c),u(c,h),u(c,d),u(n,g),u(n,_),u(_,v),u(v,y),u(_,E),u(_,T),u(T,L),u(T,D),u(T,U),u(T,G),u(_,N),u(_,F),u(F,K),u(F,R),u(_,Q),u(_,j),u(j,W),u(j,B)},p(x,[V]){V&1&&re(r,x[0]),V&2&&re(a,x[1]),V&4&&f!==(f=kt(x[2])+"")&&re(d,f),V&8&&re(y,x[3]),V&16&&re(D,x[4]),V&32&&re(G,x[5]),V&64&&re(R,x[6]),V&128&&re(B,x[7])},i:he,o:he,d(x){x&&b(e)}}}function wI(t,e,n){let{name:s,lastname:i,createdAt:r,contactStage:o,telephon:a,email:l,budget:c,rangeProp:h}=e;return t.$$set=f=>{"name"in f&&n(0,s=f.name),"lastname"in f&&n(1,i=f.lastname),"createdAt"in f&&n(2,r=f.createdAt),"contactStage"in f&&n(3,o=f.contactStage),"telephon"in f&&n(4,a=f.telephon),"email"in f&&n(5,l=f.email),"budget"in f&&n(6,c=f.budget),"rangeProp"in f&&n(7,h=f.rangeProp)},[s,i,r,o,a,l,c,h]}class kI extends Xe{constructor(e){super(),Ye(this,e,wI,bI,Ge,{name:0,lastname:1,createdAt:2,contactStage:3,telephon:4,email:5,budget:6,rangeProp:7})}}function EI(t){let e,n,s,i;return{c(){e=p("div"),n=p("input"),m(n,"class","searchInput svelte-1d4ha5n"),m(n,"type","text"),m(n,"id","search-field"),m(n,"placeholder","Enter Search Term"),m(n,"autocomplete","off"),m(e,"id","search-input-cont")},m(r,o){k(r,e,o),u(e,n),ve(n,t[0]),s||(i=[q(n,"input",t[2]),q(n,"input",t[1])],s=!0)},p(r,[o]){o&1&&n.value!==r[0]&&ve(n,r[0])},i:he,o:he,d(r){r&&b(e),s=!1,Ze(i)}}}function TI(t,e,n){let{searchTerm:s}=e;function i(o){tv.call(this,t,o)}function r(){s=this.value,n(0,s)}return t.$$set=o=>{"searchTerm"in o&&n(0,s=o.searchTerm)},[s,i,r]}class hu extends Xe{constructor(e){super(),Ye(this,e,TI,EI,Ge,{searchTerm:0})}}async function II(t,e){if(console.log("estas en la funcion"),t==="todoAdding"){const n=Yt(lt,"todos");await vs(n,e)}else t==="todoUpdate"?await eu(Is(lt,"todos",e.id),e):t==="todoDelete"&&await Ea(Is(lt,"todos",e.id));e=""}function CI(t){let e,n,s,i,r,o,a,l,c,h,f,d,g,_,v,y,E,T,L,D,U,G;return{c(){e=p("div"),s=w(),i=p("div"),r=p("div"),o=p("input"),a=w(),l=p("input"),c=w(),h=p("input"),f=w(),d=p("div"),g=p("textarea"),_=w(),v=p("div"),y=p("button"),y.textContent="Guardar",E=w(),T=p("button"),T.textContent="Cancelar",m(e,"class","background svelte-18c6vp2"),m(o,"type","text"),m(o,"class","inputTask svelte-18c6vp2"),m(o,"placeholder","Agrega una Tarea o Cita"),m(l,"type","time"),m(l,"class","inputDate svelte-18c6vp2"),m(l,"placeholder","Hora"),m(h,"type","date"),m(h,"class","inputDate svelte-18c6vp2"),m(h,"placeholder","Fecha"),m(g,"name","notes"),m(g,"cols","40"),m(g,"rows","5"),m(g,"placeholder","descripci\xF3n"),m(y,"class","btnShedule svelte-18c6vp2"),m(T,"class","btnShedule svelte-18c6vp2"),m(i,"class","pop__up svelte-18c6vp2")},m(N,F){k(N,e,F),k(N,s,F),k(N,i,F),u(i,r),u(r,o),ve(o,t[0]),u(i,a),u(i,l),ve(l,t[1].timeTask),u(i,c),u(i,h),ve(h,t[1].endTask),u(i,f),u(i,d),u(d,g),ve(g,t[1].notes),u(i,_),u(i,v),u(v,y),u(v,E),u(v,T),D=!0,U||(G=[q(window,"keydown",t[4]),q(e,"click",t[2]),q(o,"input",t[5]),q(l,"input",t[6]),q(h,"input",t[7]),q(g,"input",t[8]),q(y,"click",t[3]),q(T,"click",t[2])],U=!0)},p(N,[F]){F&1&&o.value!==N[0]&&ve(o,N[0]),F&2&&ve(l,N[1].timeTask),F&2&&ve(h,N[1].endTask),F&2&&ve(g,N[1].notes)},i(N){D||(xe(()=>{n||(n=fn(e,Ho,{},!0)),n.run(1)}),xe(()=>{L||(L=fn(i,zo,{},!0)),L.run(1)}),D=!0)},o(N){n||(n=fn(e,Ho,{},!1)),n.run(0),L||(L=fn(i,zo,{},!1)),L.run(0),D=!1},d(N){N&&b(e),N&&n&&n.end(),N&&b(s),N&&b(i),N&&L&&L.end(),U=!1,Ze(G)}}}function SI(t,e,n){let s,i,r;Oe(t,as,T=>n(10,s=T)),Oe(t,Ke,T=>n(11,i=T)),Oe(t,et,T=>n(12,r=T));const o=rp();let a=`${r.name} ${r.lastname}`,l=[],c=[],h;l={task:"",endTask:"",isComplete:"",createdAt:"",timeTask:"",notes:"",user:""};function f(){o("closeIt"),Ce(Ke,i="contSelect",i),Ce(as,s="",s)}const d=async()=>{console.log("ests en addTodo"),Ce(Ke,i="todoAdding",i),console.log(h),c=a,Ce(as,s={...l,task:c},s),II(i,s),console.log(s)},g=T=>{T.key==="Enter"&&d()};function _(){a=this.value,n(0,a)}function v(){l.timeTask=this.value,n(1,l)}function y(){l.endTask=this.value,n(1,l)}function E(){l.notes=this.value,n(1,l)}return[a,l,f,d,g,_,v,y,E]}class AI extends Xe{constructor(e){super(),Ye(this,e,SI,CI,Ge,{})}}function DI(t){let e,n,s,i,r,o,a,l,c,h,f,d,g,_,v,y,E,T,L,D,U,G,N,F,K,R,Q,j,W,B,x,V,le,Z,ce,ie,$,C,M,X;return{c(){e=p("main"),n=p("section"),s=p("figure"),i=p("img"),o=w(),a=p("div"),l=S(t[1]),c=w(),h=p("figcaption"),f=S(t[2]),d=w(),g=p("section"),_=p("section"),v=p("div"),y=p("div"),E=S(t[3]),T=S(" Rec\xE1maras"),L=w(),D=p("div"),U=S(t[4]),G=S(" Ba\xF1os"),N=w(),F=p("div"),K=S(t[5]),R=S(" Estacionamientos"),Q=w(),j=p("div"),W=S(t[6]),B=S(" m2 de Contruccion"),x=w(),V=p("div"),le=S(t[7]),Z=S(" m2 de Terreno"),ce=w(),ie=p("br"),$=w(),C=p("div"),M=S("Precio $: "),X=S(t[8]),st(i.src,r=t[0])||m(i,"src",r),m(i,"alt",t[1]),m(i,"class","bkcover svelte-1w1p4eb"),m(a,"class","language svelte-1w1p4eb"),m(h,"class","svelte-1w1p4eb"),m(s,"class","bkcont svelte-1w1p4eb"),m(n,"class","book-top-info svelte-1w1p4eb"),m(v,"class","buy-options-cont svelte-1w1p4eb"),m(_,"class","from-pariyatti available-at svelte-1w1p4eb"),m(g,"class","book-bottom-links svelte-1w1p4eb")},m(O,se){k(O,e,se),u(e,n),u(n,s),u(s,i),u(s,o),u(s,a),u(a,l),u(s,c),u(s,h),u(h,f),u(e,d),u(e,g),u(g,_),u(_,v),u(v,y),u(y,E),u(y,T),u(v,L),u(v,D),u(D,U),u(D,G),u(v,N),u(v,F),u(F,K),u(F,R),u(v,Q),u(v,j),u(j,W),u(j,B),u(v,x),u(v,V),u(V,le),u(V,Z),u(v,ce),u(v,ie),u(v,$),u(v,C),u(C,M),u(C,X)},p(O,[se]){se&1&&!st(i.src,r=O[0])&&m(i,"src",r),se&2&&m(i,"alt",O[1]),se&2&&re(l,O[1]),se&4&&re(f,O[2]),se&8&&re(E,O[3]),se&16&&re(U,O[4]),se&32&&re(K,O[5]),se&64&&re(W,O[6]),se&128&&re(le,O[7]),se&256&&re(X,O[8])},i:he,o:he,d(O){O&&b(e)}}}function RI(t,e,n){let{urlImage:s,claveEB:i,nameProperty:r,beds:o,bathroom:a,park:l,areaBuilding:c,areaTotal:h,price:f}=e;return t.$$set=d=>{"urlImage"in d&&n(0,s=d.urlImage),"claveEB"in d&&n(1,i=d.claveEB),"nameProperty"in d&&n(2,r=d.nameProperty),"beds"in d&&n(3,o=d.beds),"bathroom"in d&&n(4,a=d.bathroom),"park"in d&&n(5,l=d.park),"areaBuilding"in d&&n(6,c=d.areaBuilding),"areaTotal"in d&&n(7,h=d.areaTotal),"price"in d&&n(8,f=d.price)},[s,i,r,o,a,l,c,h,f]}class F_ extends Xe{constructor(e){super(),Ye(this,e,RI,DI,Ge,{urlImage:0,claveEB:1,nameProperty:2,beds:3,bathroom:4,park:5,areaBuilding:6,areaTotal:7,price:8})}}let Rs;function B_(t){return t<=1e6?Rs="PRM":t<=25e5?Rs="SGN":t<=5e6?Rs="TRC":t<=8e6?Rs="CRT":t<=12e6?Rs="QNT":t>12e6&&(Rs="SXT"),Rs}let tl,nl;function PI(t){console.log(t);let e=Fs;return e=e.filter(n=>n.selectTP===t.selecTP),console.log("filtraste por tipo de propiedad",e),t.numBeds>0&&(e=e.filter(n=>n.beds>=t.numBeds)),t.numBaths>0&&(e=e.filter(n=>n.bathroom>=t.numBaths)),t.numParks>0&&(e=e.filter(n=>n.park>=t.numParks)),console.log("Por caracteristicas",e),!t.budget&&t.rangeProp!=""&&(t.budget?(console.log("filtraste por rango",t.budget),tl=t.budget*.7,nl=t.budget*1.1,console.log(tl,nl),e=e.filter(n=>n.price>=tl&&n.price<=nl)):(console.log("filtraste por rango",t.rangeProp),e=e.filter(n=>B_(n.price)===t.rangeProp)),console.log("filtraste presupuesto",e)),t.locaProperty.length>0&&(e=e.filter(n=>t.locaProperty.some(s=>n.locaProperty.includes(s)))),console.log("Filtraste por Ubicacion",e),t.tagsProperty.length>0&&(e=e.filter(n=>t.tagsProperty.every(s=>n.tagsProperty.exludes(s)))),console.log("Filtraste por localizacion",e),e.length===0||""+e.length,ul.set(e)}async function gf(t,e){if(t==="binnAdding"){console.log(e);const n=Yt(lt,"binnacles");await vs(n,e)}else t==="binnacleUpdate"?console.log("Se edit\xF3 a: ",e.comment,e.to):t==="binnacleDelete"&&console.log("Se elimin\xF3 a: ",e.to);e=[]}const V_="/to-deploy-mh/assets/trash.2d1385a7.svg";function _f(t,e,n){const s=t.slice();return s[10]=e[n],s}function vf(t,e,n){const s=t.slice();return s[50]=e[n],s}function yf(t,e,n){const s=t.slice();return s[53]=e[n],s}function bf(t){let e,n,s,i,r,o=t[7].name+"",a,l,c=t[7].lastname+"",h,f,d,g,_=kt(t[7].createdAt)+"",v,y,E,T,L=t[7].selecTP+"",D,U,G=t[7].numBeds+"",N,F,K=t[7].numBaths+"",R,Q,j=t[7].numParks+"",W,B,x,V,le,Z,ce=t[7].budget+"",ie,$,C,M=t[7].selecTP+"",X,O,se,De,P,ue=t[7].telephon+"",be,qe,A,Y=t[7].email+"",Me,z,pe,oe,Je=t[7].tagsProperty.join(",  ")+"",yn,St,At,sn,Zt=t[7].locaProperty.join(",  ")+"",Mt,Ht,ut,pn,ot,ht,rn,ft,Fn,on,dt=t[7].contactStage+"",In,Cn,an,Sn=t[7].comContact+"",An,zt,Fe,en,je,Pe,Ae,Bn,pt,Vn,$t,Dn,mt,jn,gt,bn,nt,Wr,ss,Ds,Ni,I,ae,Ne,qn,ee,at,Zs,fu,du,Qr,Da,Oi,Et,Ra,pu,ei=t[11],ln=[];for(let me=0;me<ei.length;me+=1)ln[me]=wf(yf(t,ei,me));let Dt=t[0]&&kf(t),Rt=t[5]&&Ef(t),ti=t[6],cn=[];for(let me=0;me<ti.length;me+=1)cn[me]=Tf(vf(t,ti,me));let Pt=t[4]&&If(t);return{c(){e=p("div"),n=p("div"),s=p("h4"),s.textContent="Contacto",i=w(),r=p("h2"),a=S(o),l=w(),h=S(c),f=w(),d=p("p"),g=S("Fecha Alta: "),v=S(_),y=w(),E=p("p"),T=S("Busca  "),D=S(L),U=S(", de "),N=S(G),F=S(" rec\xE1maras,  "),R=S(K),Q=S(" ba\xF1os y "),W=S(j),B=S(" estacionamientos"),x=w(),V=p("p"),le=S("Presupuesto tope: "),Z=p("strong"),ie=S(ce),$=S(" : Tipo de propiedad buscada: "),C=p("strong"),X=S(M),O=w(),se=p("p"),De=S("Tel\xE9fono: "),P=p("strong"),be=S(ue),qe=S(" ---- Email: "),A=p("strong"),Me=S(Y),z=w(),pe=p("p"),oe=S("Preferencias: "),yn=S(Je),St=w(),At=p("p"),sn=S("Ubicaciones: "),Mt=S(Zt),Ht=w(),ut=p("div"),pn=p("p"),pn.textContent="Propiedades enviadas:",ot=w(),ht=p("div");for(let me=0;me<ln.length;me+=1)ln[me].c();rn=w(),ft=p("div"),Fn=w(),on=p("p"),In=S(dt),Cn=w(),an=p("p"),An=S(Sn),zt=w(),Fe=p("div"),en=p("button"),en.textContent="Programar Evento",je=w(),Dt&&Dt.c(),Pe=w(),Ae=p("button"),Ae.textContent="Ver Propiedades de Interes",Bn=w(),pt=p("button"),pt.textContent="Buscar Propiedad",Vn=w(),Rt&&Rt.c(),$t=w(),Dn=p("div"),mt=p("button"),mt.textContent="Cancelar",jn=w(),gt=p("div"),bn=p("div"),nt=p("textarea"),Wr=w(),ss=p("div"),Ds=p("button"),Ds.textContent="Enviar WhatsApp",Ni=w(),I=p("button"),I.textContent="Guardar Info",ae=w(),Ne=p("div"),qn=p("img"),at=w(),Zs=p("img"),du=w(),Qr=p("div");for(let me=0;me<cn.length;me+=1)cn[me].c();Da=w(),Pt&&Pt.c(),Oi=nn(),m(ht,"class","mostImage svelte-xmrcvl"),m(ut,"class","propMost"),m(en,"class","btn__common"),m(Ae,"class","btn__common"),m(pt,"class","btn__common"),m(Fe,"class","btn__actions svelte-xmrcvl"),m(mt,"class","btn__cancel"),m(nt,"class","texArea"),m(nt,"cols","65"),m(nt,"rows","5"),m(nt,"placeholder","Ingresa un comentario"),m(Ds,"class","btn__WhatsApp"),m(I,"class","btn__saveNote"),st(qn.src,ee=Aa)||m(qn,"src",ee),m(qn,"alt","delete"),st(Zs.src,fu=V_)||m(Zs,"src",fu),m(Zs,"alt","delete"),m(Ne,"class","icon__Content"),m(e,"class","container")},m(me,He){k(me,e,He),u(e,n),u(n,s),u(n,i),u(n,r),u(r,a),u(r,l),u(r,h),u(n,f),u(n,d),u(d,g),u(d,v),u(n,y),u(n,E),u(E,T),u(E,D),u(E,U),u(E,N),u(E,F),u(E,R),u(E,Q),u(E,W),u(E,B),u(n,x),u(n,V),u(V,le),u(V,Z),u(Z,ie),u(V,$),u(V,C),u(C,X),u(n,O),u(n,se),u(se,De),u(se,P),u(P,be),u(se,qe),u(se,A),u(A,Me),u(n,z),u(n,pe),u(pe,oe),u(pe,yn),u(n,St),u(n,At),u(At,sn),u(At,Mt),u(n,Ht),u(n,ut),u(ut,pn),u(ut,ot),u(ut,ht);for(let Be=0;Be<ln.length;Be+=1)ln[Be].m(ht,null);u(e,rn),u(e,ft),u(e,Fn),u(e,on),u(on,In),u(e,Cn),u(e,an),u(an,An),u(e,zt),u(e,Fe),u(Fe,en),u(Fe,je),Dt&&Dt.m(Fe,null),u(Fe,Pe),u(Fe,Ae),u(Fe,Bn),u(Fe,pt),u(Fe,Vn),Rt&&Rt.m(Fe,null),u(e,$t),u(e,Dn),u(Dn,mt),u(e,jn),u(e,gt),u(gt,bn),u(bn,nt),ve(nt,t[2]),u(bn,Wr),u(bn,ss),u(ss,Ds),u(ss,Ni),u(ss,I),u(gt,ae),u(gt,Ne),u(Ne,qn),u(Ne,at),u(Ne,Zs),u(e,du),u(e,Qr);for(let Be=0;Be<cn.length;Be+=1)cn[Be].m(Qr,null);k(me,Da,He),Pt&&Pt.m(me,He),k(me,Oi,He),Et=!0,Ra||(pu=[q(en,"click",t[25]),q(Ae,"click",t[26]),q(pt,"click",t[14]),q(mt,"click",t[17]),q(nt,"keypress",t[23]),q(nt,"input",t[28]),q(Ds,"click",t[22]),q(I,"click",t[29]),q(qn,"click",t[18]),q(Zs,"click",t[19])],Ra=!0)},p(me,He){if((!Et||He[0]&128)&&o!==(o=me[7].name+"")&&re(a,o),(!Et||He[0]&128)&&c!==(c=me[7].lastname+"")&&re(h,c),(!Et||He[0]&128)&&_!==(_=kt(me[7].createdAt)+"")&&re(v,_),(!Et||He[0]&128)&&L!==(L=me[7].selecTP+"")&&re(D,L),(!Et||He[0]&128)&&G!==(G=me[7].numBeds+"")&&re(N,G),(!Et||He[0]&128)&&K!==(K=me[7].numBaths+"")&&re(R,K),(!Et||He[0]&128)&&j!==(j=me[7].numParks+"")&&re(W,j),(!Et||He[0]&128)&&ce!==(ce=me[7].budget+"")&&re(ie,ce),(!Et||He[0]&128)&&M!==(M=me[7].selecTP+"")&&re(X,M),(!Et||He[0]&128)&&ue!==(ue=me[7].telephon+"")&&re(be,ue),(!Et||He[0]&128)&&Y!==(Y=me[7].email+"")&&re(Me,Y),(!Et||He[0]&128)&&Je!==(Je=me[7].tagsProperty.join(",  ")+"")&&re(yn,Je),(!Et||He[0]&128)&&Zt!==(Zt=me[7].locaProperty.join(",  ")+"")&&re(Mt,Zt),He[0]&6144){ei=me[11];let Be;for(Be=0;Be<ei.length;Be+=1){const Li=yf(me,ei,Be);ln[Be]?ln[Be].p(Li,He):(ln[Be]=wf(Li),ln[Be].c(),ln[Be].m(ht,null))}for(;Be<ln.length;Be+=1)ln[Be].d(1);ln.length=ei.length}if((!Et||He[0]&128)&&dt!==(dt=me[7].contactStage+"")&&re(In,dt),(!Et||He[0]&128)&&Sn!==(Sn=me[7].comContact+"")&&re(An,Sn),me[0]?Dt?(Dt.p(me,He),He[0]&1&&H(Dt,1)):(Dt=kf(me),Dt.c(),H(Dt,1),Dt.m(Fe,Pe)):Dt&&(bt(),J(Dt,1,1,()=>{Dt=null}),wt()),me[5]?Rt?(Rt.p(me,He),He[0]&32&&H(Rt,1)):(Rt=Ef(me),Rt.c(),H(Rt,1),Rt.m(Fe,null)):Rt&&(bt(),J(Rt,1,1,()=>{Rt=null}),wt()),He[0]&4&&ve(nt,me[2]),He[0]&64){ti=me[6];let Be;for(Be=0;Be<ti.length;Be+=1){const Li=vf(me,ti,Be);cn[Be]?cn[Be].p(Li,He):(cn[Be]=Tf(Li),cn[Be].c(),cn[Be].m(Qr,null))}for(;Be<cn.length;Be+=1)cn[Be].d(1);cn.length=ti.length}me[4]?Pt?(Pt.p(me,He),He[0]&16&&H(Pt,1)):(Pt=If(me),Pt.c(),H(Pt,1),Pt.m(Oi.parentNode,Oi)):Pt&&(bt(),J(Pt,1,1,()=>{Pt=null}),wt())},i(me){Et||(H(Dt),H(Rt),H(Pt),Et=!0)},o(me){J(Dt),J(Rt),J(Pt),Et=!1},d(me){me&&b(e),Ve(ln,me),Dt&&Dt.d(),Rt&&Rt.d(),Ve(cn,me),me&&b(Da),Pt&&Pt.d(me),me&&b(Oi),Ra=!1,Ze(pu)}}}function wf(t){let e,n,s=t[53]+"",i,r,o,a,l;return{c(){e=p("div"),n=p("p"),i=S(s),r=w(),o=p("img"),l=w(),m(o,"class","imgPropContSelect"),m(o,"height","100"),st(o.src,a=t[12](t[53]))||m(o,"src",a),m(o,"alt",t[53]),m(e,"class","prop__sent svelte-xmrcvl")},m(c,h){k(c,e,h),u(e,n),u(n,i),u(e,r),u(e,o),u(e,l)},p:he,d(c){c&&b(e)}}}function kf(t){let e,n;const s=[t[7]];let i={};for(let r=0;r<s.length;r+=1)i=Ot(i,s[r]);return e=new AI({props:i}),e.$on("closeIt",t[20]),{c(){ge(e.$$.fragment)},m(r,o){fe(e,r,o),n=!0},p(r,o){const a=o[0]&128?_n(s,[Xn(r[7])]):{};e.$set(a)},i(r){n||(H(e.$$.fragment,r),n=!0)},o(r){J(e.$$.fragment,r),n=!1},d(r){de(e,r)}}}function Ef(t){let e,n,s;function i(o){t[27](o)}let r={};return t[1]!==void 0&&(r.searchTerm=t[1]),e=new hu({props:r}),Yn.push(()=>Vs(e,"searchTerm",i)),e.$on("input",t[15]),{c(){ge(e.$$.fragment)},m(o,a){fe(e,o,a),s=!0},p(o,a){const l={};!n&&a[0]&2&&(n=!0,l.searchTerm=o[1],Bs(()=>n=!1)),e.$set(l)},i(o){s||(H(e.$$.fragment,o),s=!0)},o(o){J(e.$$.fragment,o),s=!1},d(o){de(e,o)}}}function Tf(t){let e,n=kt(t[50].date)+"",s,i,r=t[50].action+"",o,a,l=t[50].comment+"",c;return{c(){e=p("h4"),s=S(n),i=w(),o=S(r),a=w(),c=S(l)},m(h,f){k(h,e,f),u(e,s),u(e,i),u(e,o),u(e,a),u(e,c)},p(h,f){f[0]&64&&n!==(n=kt(h[50].date)+"")&&re(s,n),f[0]&64&&r!==(r=h[50].action+"")&&re(o,r),f[0]&64&&l!==(l=h[50].comment+"")&&re(c,l)},d(h){h&&b(e)}}}function If(t){let e,n,s,i=t[9].length+"",r,o,a,l,c=t[9],h=[];for(let g=0;g<c.length;g+=1)h[g]=Cf(_f(t,c,g));const f=g=>J(h[g],1,1,()=>{h[g]=null});let d=t[9].length===0&&Sf();return{c(){e=p("main"),n=p("h3"),s=S("Propiedades encontradas: "),r=S(i),o=w();for(let g=0;g<h.length;g+=1)h[g].c();a=w(),d&&d.c(),m(n,"class","svelte-xmrcvl"),m(e,"id","bookshelf"),m(e,"class","svelte-xmrcvl")},m(g,_){k(g,e,_),u(e,n),u(n,s),u(n,r),u(e,o);for(let v=0;v<h.length;v+=1)h[v].m(e,null);u(e,a),d&&d.m(e,null),l=!0},p(g,_){if((!l||_[0]&512)&&i!==(i=g[9].length+"")&&re(r,i),_[0]&2097672){c=g[9];let v;for(v=0;v<c.length;v+=1){const y=_f(g,c,v);h[v]?(h[v].p(y,_),H(h[v],1)):(h[v]=Cf(y),h[v].c(),H(h[v],1),h[v].m(e,a))}for(bt(),v=c.length;v<h.length;v+=1)f(v);wt()}g[9].length===0?d||(d=Sf(),d.c(),d.m(e,null)):d&&(d.d(1),d=null)},i(g){if(!l){for(let _=0;_<c.length;_+=1)H(h[_]);l=!0}},o(g){h=h.filter(Boolean);for(let _=0;_<h.length;_+=1)J(h[_]);l=!1},d(g){g&&b(e),Ve(h,g),d&&d.d()}}}function Cf(t){let e,n,s,i,r,o,a,l,c;const h=[t[10]];let f={};for(let d=0;d<h.length;d+=1)f=Ot(f,h[d]);return r=new F_({props:f}),{c(){e=p("section"),n=p("input"),i=w(),ge(r.$$.fragment),m(n,"type","checkbox"),n.__value=s=t[10].urlProp,n.value=n.__value,m(n,"class","form-check"),t[31][0].push(n),m(e,"class","property svelte-xmrcvl")},m(d,g){k(d,e,g),u(e,n),n.checked=~t[3].indexOf(n.__value),u(e,i),fe(r,e,null),a=!0,l||(c=[q(n,"change",t[30]),q(e,"click",t[21])],l=!0)},p(d,g){t=d,(!a||g[0]&512&&s!==(s=t[10].urlProp))&&(n.__value=s,n.value=n.__value),g[0]&8&&(n.checked=~t[3].indexOf(n.__value));const _=g[0]&512?_n(h,[Xn(t[10])]):{};r.$set(_)},i(d){a||(H(r.$$.fragment,d),xe(()=>{o||(o=fn(e,Ii,{duration:500,easing:Ti},!0)),o.run(1)}),a=!0)},o(d){J(r.$$.fragment,d),o||(o=fn(e,Ii,{duration:500,easing:Ti},!1)),o.run(0),a=!1},d(d){d&&b(e),t[31][0].splice(t[31][0].indexOf(n),1),de(r),d&&o&&o.end(),l=!1,Ze(c)}}}function Sf(t){let e;return{c(){e=p("h3"),e.textContent='"No hay Propiedades para este contacto"',m(e,"class","svelte-xmrcvl")},m(n,s){k(n,e,s)},d(n){n&&b(e)}}}function NI(t){let e,n,s=t[8]==="contSelect"&&bf(t);return{c(){e=p("main"),s&&s.c()},m(i,r){k(i,e,r),s&&s.m(e,null),n=!0},p(i,r){i[8]==="contSelect"?s?(s.p(i,r),r[0]&256&&H(s,1)):(s=bf(i),s.c(),H(s,1),s.m(e,null)):s&&(bt(),J(s,1,1,()=>{s=null}),wt())},i(i){n||(H(s),n=!0)},o(i){J(s),n=!1},d(i){i&&b(e),s&&s.d()}}}function OI(t,e,n){let s,i,r,o,a,l;Oe(t,et,O=>n(7,s=O)),Oe(t,Ke,O=>n(8,i=O)),Oe(t,Ua,O=>n(38,r=O)),Oe(t,Jr,O=>n(39,o=O)),Oe(t,We,O=>n(10,a=O)),Oe(t,ul,O=>n(9,l=O));const c=Ys();let h,f=!1,d,g,_=[],v=!1,y=!1,E=[],T=[];function L(O){return h=Fs.filter(se=>se.claveEB===O),h[0].urlImage}function D(){console.log("estas en addSchedule"),n(0,f=!0)}function U(){n(5,y=!0)}const G=()=>(n(4,v=!0),Ce(ul,l=Fs.filter(O=>(O.nameProperty+" "+O.colonia+" "+O.claveEB).toLowerCase().includes(d.toLowerCase())),l));function N(O){PI(O),n(4,v=!0)}const F=()=>{Ce(et,s=[],s),Ce(Ke,i="start",i)};function K(){Ce(Ke,i="contEditing",i)}async function R(){confirm("Deseas eleiminar definitivamente al contacto?")&&(await Ea(Is(lt,"contacts",s.id)),Q(s),c("/"))}async function Q(O){let se=`Se le elimin\xF3a: ${O.name} ${O.lastname} del ${O.telephon}`,De={date:Date.now(),comment:se};console.log(i,De);const P=Yt(lt,"binnacles");await vs(P,De)}function j(){n(0,f=!1)}function W(){console.log(_)}function B(){g&&(n(3,_=g),Ce(Ua,r="sendMsg",r));let O=`https://api.whatsapp.com/send?phone=52${s.telephon}&text=${_}`;window.open(O),le(_)}function x(){}function V(){Ce(Ke,i="binnAdding",i),Ce(Jr,o={date:Date.now(),comment:g,to:s.telephon,action:"Nota agregada: "},o),gf(i,o)}function le(O){Ce(Ke,i="binnAdding",i);let se=Fs.filter(De=>De.urlProp===O[0]);Ce(We,a=se[0],a),r==="sendMsg"?Ce(Jr,o={date:Date.now(),comment:O,to:s.telephon,action:"Mensaje enviado: "},o):Ce(Jr,o={date:Date.now(),comment:a.claveEB,to:s.telephon,action:"Propiedad enviada: "},o),gf(i,o),Ce(Ua,r="",r),Ce(Ke,i="contSelect",i)}n(6,E=R_.filter(se=>se.to===s.telephon)),E.filter(se=>se.action==="Propiedad enviada: ").forEach(se=>T.push(se.comment));const Z=[[]],ce=()=>D(),ie=()=>N(s);function $(O){d=O,n(1,d)}function C(){g=this.value,n(2,g)}const M=()=>V();function X(){_=Ft(Z[0],this.__value,this.checked),n(3,_)}return[f,d,g,_,v,y,E,s,i,l,a,T,L,D,U,G,N,F,K,R,j,W,B,x,V,ce,ie,$,C,M,X,Z]}class LI extends Xe{constructor(e){super(),Ye(this,e,OI,NI,Ge,{},null,[-1,-1])}}const Ko=["Casa","Terreno","Departamento","Casa o Departamento","Local Comercial","Casa de Campo"],Af=["Lona en Propiedad","Propiedades.com","NocNok","Mercado Libre","Vivanuncios","Lamudi","Inmuebles24","Referido","Otro"],Df=["Comprador","Arrendador","Propietario","Agente Asociado","Agente Inmobiliario","Constructor","Inversionista","Otro"],Rf=["Contado","Credito Hipotecario","INFONAVIT","COFINAVIT","FOVISSSTE","ALIADOS","Conyugal"],Pf=["Venta","Renta"],Nf=["Rango","PRM","SGN","TRC","CRT","QNT","SXT","SPT"],Go=[0,1,2,3,4,5],wn=[0,1,2,3,4],Of=["Due\xF1o","Familiar","Inmobiliaria","Conocido"];function MI(t){let e,n,s,i,r,o,a,l,c,h,f,d,g,_,v,y,E,T,L,D,U,G,N,F,K,R,Q,j,W,B,x,V,le,Z,ce,ie,$,C,M,X,O,se,De;return{c(){e=p("div"),n=p("div"),s=p("label"),i=S(`/Norte\\\r
			`),r=p("input"),o=w(),a=p("div"),l=p("label"),c=S(`/Noroeste\r
			`),h=p("input"),f=w(),d=p("label"),g=p("input"),_=S("NorEste\\"),v=w(),y=p("div"),E=p("label"),T=S(`/Oeste\r
			`),L=p("input"),D=w(),U=p("label"),G=S(`Centro Norte\r
			`),N=p("input"),F=w(),K=p("label"),R=p("input"),Q=S("Este\\"),j=w(),W=p("div"),B=p("label"),x=S(`Centro Sur\r
			`),V=p("input"),le=w(),Z=p("div"),ce=p("label"),ie=S(`/SurOeste\r
			`),$=p("input"),C=w(),M=p("label"),X=p("input"),O=S("SurEste\\"),r.__value="Norte",r.value=r.__value,m(r,"id","north"),m(r,"type","checkbox"),t[2][0].push(r),m(s,"for","north"),m(n,"class","filterLocationOne svelte-1lvjb5r"),h.__value="Noroeste",h.value=h.__value,m(h,"id","northwest"),m(h,"type","checkbox"),t[2][0].push(h),m(l,"for","northwest"),g.__value="Noreste",g.value=g.__value,m(g,"id","northeast"),m(g,"type","checkbox"),t[2][0].push(g),m(d,"for","northeast"),m(a,"class","filterLocationOne svelte-1lvjb5r"),L.__value="Oeste",L.value=L.__value,m(L,"id","west"),m(L,"type","checkbox"),t[2][0].push(L),m(E,"for","west"),N.__value="Centronorte",N.value=N.__value,m(N,"id","townNorth"),m(N,"type","checkbox"),t[2][0].push(N),m(U,"for","townNorth"),R.__value="Este",R.value=R.__value,m(R,"id","east"),m(R,"type","checkbox"),t[2][0].push(R),m(K,"for","east"),m(y,"class","filterLocationOne svelte-1lvjb5r"),V.__value="CentroSur",V.value=V.__value,m(V,"id","townsouth"),m(V,"type","checkbox"),t[2][0].push(V),m(B,"for","townsouth"),m(W,"class","filterLocationOne svelte-1lvjb5r"),$.__value="SurOeste",$.value=$.__value,m($,"id","southwest"),m($,"type","checkbox"),t[2][0].push($),m(ce,"for","southwest"),X.__value="SurEste",X.value=X.__value,m(X,"id","southeast"),m(X,"type","checkbox"),t[2][0].push(X),m(M,"for","southeast"),m(Z,"class","filterLocationOne svelte-1lvjb5r"),m(e,"class","containerUbication svelte-1lvjb5r")},m(P,ue){k(P,e,ue),u(e,n),u(n,s),u(s,i),u(s,r),r.checked=~t[0].indexOf(r.__value),u(e,o),u(e,a),u(a,l),u(l,c),u(l,h),h.checked=~t[0].indexOf(h.__value),u(a,f),u(a,d),u(d,g),g.checked=~t[0].indexOf(g.__value),u(d,_),u(e,v),u(e,y),u(y,E),u(E,T),u(E,L),L.checked=~t[0].indexOf(L.__value),u(y,D),u(y,U),u(U,G),u(U,N),N.checked=~t[0].indexOf(N.__value),u(y,F),u(y,K),u(K,R),R.checked=~t[0].indexOf(R.__value),u(K,Q),u(e,j),u(e,W),u(W,B),u(B,x),u(B,V),V.checked=~t[0].indexOf(V.__value),u(e,le),u(e,Z),u(Z,ce),u(ce,ie),u(ce,$),$.checked=~t[0].indexOf($.__value),u(Z,C),u(Z,M),u(M,X),X.checked=~t[0].indexOf(X.__value),u(M,O),se||(De=[q(r,"change",t[1]),q(h,"change",t[3]),q(g,"change",t[4]),q(L,"change",t[5]),q(N,"change",t[6]),q(R,"change",t[7]),q(V,"change",t[8]),q($,"change",t[9]),q(X,"change",t[10])],se=!0)},p(P,[ue]){ue&1&&(r.checked=~P[0].indexOf(r.__value)),ue&1&&(h.checked=~P[0].indexOf(h.__value)),ue&1&&(g.checked=~P[0].indexOf(g.__value)),ue&1&&(L.checked=~P[0].indexOf(L.__value)),ue&1&&(N.checked=~P[0].indexOf(N.__value)),ue&1&&(R.checked=~P[0].indexOf(R.__value)),ue&1&&(V.checked=~P[0].indexOf(V.__value)),ue&1&&($.checked=~P[0].indexOf($.__value)),ue&1&&(X.checked=~P[0].indexOf(X.__value))},i:he,o:he,d(P){P&&b(e),t[2][0].splice(t[2][0].indexOf(r),1),t[2][0].splice(t[2][0].indexOf(h),1),t[2][0].splice(t[2][0].indexOf(g),1),t[2][0].splice(t[2][0].indexOf(L),1),t[2][0].splice(t[2][0].indexOf(N),1),t[2][0].splice(t[2][0].indexOf(R),1),t[2][0].splice(t[2][0].indexOf(V),1),t[2][0].splice(t[2][0].indexOf($),1),t[2][0].splice(t[2][0].indexOf(X),1),se=!1,Ze(De)}}}function $I(t,e,n){let{ubication:s}=e;const i=[[]];function r(){s=Ft(i[0],this.__value,this.checked),n(0,s)}function o(){s=Ft(i[0],this.__value,this.checked),n(0,s)}function a(){s=Ft(i[0],this.__value,this.checked),n(0,s)}function l(){s=Ft(i[0],this.__value,this.checked),n(0,s)}function c(){s=Ft(i[0],this.__value,this.checked),n(0,s)}function h(){s=Ft(i[0],this.__value,this.checked),n(0,s)}function f(){s=Ft(i[0],this.__value,this.checked),n(0,s)}function d(){s=Ft(i[0],this.__value,this.checked),n(0,s)}function g(){s=Ft(i[0],this.__value,this.checked),n(0,s)}return t.$$set=_=>{"ubication"in _&&n(0,s=_.ubication)},[s,r,i,o,a,l,c,h,f,d,g]}class j_ extends Xe{constructor(e){super(),Ye(this,e,$I,MI,Ge,{ubication:0})}}function UI(t){let e,n,s,i,r,o,a,l,c,h,f,d,g,_,v,y,E,T,L,D,U,G,N,F,K,R,Q,j,W,B,x,V,le;return{c(){e=p("section"),n=p("div"),s=p("label"),i=S(`Fracc. Privado\r
		   `),r=p("input"),o=w(),a=p("label"),l=S(`Frente a Parque\r
         `),c=p("input"),h=w(),f=p("label"),d=S(`Una Planta\r
         `),g=p("input"),_=w(),v=p("div"),y=p("label"),E=S(`Recamara en P.B.\r
		`),T=p("input"),L=w(),D=p("label"),U=S(`Patio Amplio\r
   `),G=p("input"),N=w(),F=p("label"),K=S(`Lista para Habitarse\r
   `),R=p("input"),Q=w(),j=p("div"),W=p("label"),B=S(`Nueva\r
		`),x=p("input"),m(r,"type","checkbox"),r.__value="Fracc. Privado",r.value=r.__value,t[2][0].push(r),m(c,"type","checkbox"),c.__value="Frente a Parque",c.value=c.__value,t[2][0].push(c),m(g,"type","checkbox"),g.__value="Una Planta",g.value=g.__value,t[2][0].push(g),m(n,"class","svelte-1b9bvt0"),m(T,"type","checkbox"),T.__value="Recamara en PB",T.value=T.__value,t[2][0].push(T),m(G,"type","checkbox"),G.__value="Patio Amplio",G.value=G.__value,t[2][0].push(G),m(R,"type","checkbox"),R.__value="Lista Habitarse",R.value=R.__value,t[2][0].push(R),m(v,"class","svelte-1b9bvt0"),m(x,"type","checkbox"),x.__value="Nueva",x.value=x.__value,t[2][0].push(x),m(j,"class","svelte-1b9bvt0"),m(e,"class","svelte-1b9bvt0")},m(Z,ce){k(Z,e,ce),u(e,n),u(n,s),u(s,i),u(s,r),r.checked=~t[0].indexOf(r.__value),u(n,o),u(n,a),u(a,l),u(a,c),c.checked=~t[0].indexOf(c.__value),u(n,h),u(n,f),u(f,d),u(f,g),g.checked=~t[0].indexOf(g.__value),u(e,_),u(e,v),u(v,y),u(y,E),u(y,T),T.checked=~t[0].indexOf(T.__value),u(v,L),u(v,D),u(D,U),u(D,G),G.checked=~t[0].indexOf(G.__value),u(v,N),u(v,F),u(F,K),u(F,R),R.checked=~t[0].indexOf(R.__value),u(e,Q),u(e,j),u(j,W),u(W,B),u(W,x),x.checked=~t[0].indexOf(x.__value),V||(le=[q(r,"change",t[1]),q(c,"change",t[3]),q(g,"change",t[4]),q(T,"change",t[5]),q(G,"change",t[6]),q(R,"change",t[7]),q(x,"change",t[8])],V=!0)},p(Z,[ce]){ce&1&&(r.checked=~Z[0].indexOf(r.__value)),ce&1&&(c.checked=~Z[0].indexOf(c.__value)),ce&1&&(g.checked=~Z[0].indexOf(g.__value)),ce&1&&(T.checked=~Z[0].indexOf(T.__value)),ce&1&&(G.checked=~Z[0].indexOf(G.__value)),ce&1&&(R.checked=~Z[0].indexOf(R.__value)),ce&1&&(x.checked=~Z[0].indexOf(x.__value))},i:he,o:he,d(Z){Z&&b(e),t[2][0].splice(t[2][0].indexOf(r),1),t[2][0].splice(t[2][0].indexOf(c),1),t[2][0].splice(t[2][0].indexOf(g),1),t[2][0].splice(t[2][0].indexOf(T),1),t[2][0].splice(t[2][0].indexOf(G),1),t[2][0].splice(t[2][0].indexOf(R),1),t[2][0].splice(t[2][0].indexOf(x),1),V=!1,Ze(le)}}}function FI(t,e,n){let{tag:s}=e;const i=[[]];function r(){s=Ft(i[0],this.__value,this.checked),n(0,s)}function o(){s=Ft(i[0],this.__value,this.checked),n(0,s)}function a(){s=Ft(i[0],this.__value,this.checked),n(0,s)}function l(){s=Ft(i[0],this.__value,this.checked),n(0,s)}function c(){s=Ft(i[0],this.__value,this.checked),n(0,s)}function h(){s=Ft(i[0],this.__value,this.checked),n(0,s)}function f(){s=Ft(i[0],this.__value,this.checked),n(0,s)}return t.$$set=d=>{"tag"in d&&n(0,s=d.tag)},[s,r,i,o,a,l,c,h,f]}class q_ extends Xe{constructor(e){super(),Ye(this,e,FI,UI,Ge,{tag:0})}}function Lf(t,e,n){const s=t.slice();return s[26]=e[n],s}function Mf(t,e,n){const s=t.slice();return s[29]=e[n],s}function $f(t,e,n){const s=t.slice();return s[32]=e[n],s}function Uf(t,e,n){const s=t.slice();return s[35]=e[n],s}function Ff(t,e,n){const s=t.slice();return s[38]=e[n],s}function Bf(t,e,n){const s=t.slice();return s[41]=e[n],s}function Vf(t,e,n){const s=t.slice();return s[44]=e[n],s}function jf(t,e,n){const s=t.slice();return s[47]=e[n],s}function qf(t,e,n){const s=t.slice();return s[50]=e[n],s}function Hf(t,e,n){const s=t.slice();return s[53]=e[n],s}function BI(t){let e,n=kt(t[3].createdAt)+"",s,i,r;return{c(){e=p("h3"),s=S(n),m(e,"class","dataInput svelte-1myljlf")},m(o,a){k(o,e,a),u(e,s),i||(r=q(e,"dblclick",t[4]),i=!0)},p(o,a){a[0]&8&&n!==(n=kt(o[3].createdAt)+"")&&re(s,n)},d(o){o&&b(e),i=!1,r()}}}function VI(t){let e,n,s;return{c(){e=p("input"),m(e,"class","dataInput svelte-1myljlf"),m(e,"type","date")},m(i,r){k(i,e,r),ve(e,t[3].createdAt),n||(s=q(e,"input",t[6]),n=!0)},p(i,r){r[0]&9&&ve(e,i[3].createdAt)},d(i){i&&b(e),n=!1,s()}}}function zf(t){let e,n,s;return{c(){e=p("input"),m(e,"class","dataInput svelte-1myljlf"),m(e,"type","email"),m(e,"placeholder","email")},m(i,r){k(i,e,r),ve(e,t[3].email),n||(s=q(e,"input",t[10]),n=!0)},p(i,r){r[0]&9&&e.value!==i[3].email&&ve(e,i[3].email)},d(i){i&&b(e),n=!1,s()}}}function Kf(t){let e,n=t[53]+"",s,i;return{c(){e=p("option"),s=S(n),m(e,"class","dataInput svelte-1myljlf"),m(e,"type","checkbox"),e.__value=i=t[53],e.value=e.__value},m(r,o){k(r,e,o),u(e,s)},p(r,o){o[0]&1&&n!==(n=r[53]+"")&&re(s,n),o[0]&1&&i!==(i=r[53])&&(e.__value=i,e.value=e.__value)},d(r){r&&b(e)}}}function Gf(t){let e,n,s;return{c(){e=p("input"),m(e,"class","dataInput svelte-1myljlf"),m(e,"type","number"),m(e,"placeholder","Presupuesto")},m(i,r){k(i,e,r),ve(e,t[3].budget),n||(s=q(e,"input",t[12]),n=!0)},p(i,r){r[0]&9&&fs(e.value)!==i[3].budget&&ve(e,i[3].budget)},d(i){i&&b(e),n=!1,s()}}}function Wf(t){let e,n=t[50]+"",s;return{c(){e=p("option"),s=S(n),m(e,"type","checkbox"),e.__value=t[50],e.value=e.__value},m(i,r){k(i,e,r),u(e,s)},p:he,d(i){i&&b(e)}}}function Qf(t){let e,n=t[47]+"",s;return{c(){e=p("option"),s=S(n),m(e,"type","checkbox"),e.__value=t[47],e.value=e.__value},m(i,r){k(i,e,r),u(e,s)},p:he,d(i){i&&b(e)}}}function Yf(t){let e,n=t[44]+"",s;return{c(){e=p("option"),s=S(n),m(e,"type","checkbox"),e.__value=t[44],e.value=e.__value},m(i,r){k(i,e,r),u(e,s)},p:he,d(i){i&&b(e)}}}function Xf(t){let e,n,s,i,r,o,a,l,c,h,f,d,g,_,v,y,E,T,L,D,U,G,N,F,K,R,Q,j=Rf,W=[];for(let P=0;P<j.length;P+=1)W[P]=Jf(Bf(t,j,P));let B=Nf,x=[];for(let P=0;P<B.length;P+=1)x[P]=xf(Ff(t,B,P));let V=Go,le=[];for(let P=0;P<V.length;P+=1)le[P]=Zf(Uf(t,V,P));let Z=wn,ce=[];for(let P=0;P<Z.length;P+=1)ce[P]=ed($f(t,Z,P));let ie=wn,$=[];for(let P=0;P<ie.length;P+=1)$[P]=td(Mf(t,ie,P));let C=wn,M=[];for(let P=0;P<C.length;P+=1)M[P]=nd(Lf(t,C,P));function X(P){t[23](P)}let O={};t[3].locaProperty!==void 0&&(O.ubication=t[3].locaProperty),D=new j_({props:O}),Yn.push(()=>Vs(D,"ubication",X));function se(P){t[24](P)}let De={};return t[3].tagsProperty!==void 0&&(De.tag=t[3].tagsProperty),N=new q_({props:De}),Yn.push(()=>Vs(N,"tag",se)),{c(){e=p("select"),n=p("option"),n.textContent="Modo de Pago";for(let P=0;P<W.length;P+=1)W[P].c();s=w(),i=p("select"),r=p("option"),r.textContent="Rango de Busqueda";for(let P=0;P<x.length;P+=1)x[P].c();o=w(),a=p("select"),l=p("option"),l.textContent="# Rec\xE1maras";for(let P=0;P<le.length;P+=1)le[P].c();c=w(),h=p("select"),f=p("option"),f.textContent="# Ba\xF1os";for(let P=0;P<ce.length;P+=1)ce[P].c();d=w(),g=p("select"),_=p("option"),_.textContent="# Medios Ba\xF1os";for(let P=0;P<$.length;P+=1)$[P].c();v=w(),y=p("select"),E=p("option"),E.textContent="# Estacionamientos";for(let P=0;P<M.length;P+=1)M[P].c();T=w(),L=p("div"),ge(D.$$.fragment),G=w(),ge(N.$$.fragment),n.disabled=!0,n.selected=!0,n.__value="",n.value=n.__value,m(e,"class","othersInput svelte-1myljlf"),t[3].modePay===void 0&&xe(()=>t[17].call(e)),r.disabled=!0,r.selected=!0,r.__value="",r.value=r.__value,m(i,"class","othersInput svelte-1myljlf"),m(i,"id","ranges"),m(i,"name","ranges"),t[3].rangeProp===void 0&&xe(()=>t[18].call(i)),l.disabled=!0,l.selected=!0,l.__value="",l.value=l.__value,m(a,"class","othersInput svelte-1myljlf"),t[3].numBeds===void 0&&xe(()=>t[19].call(a)),f.disabled=!0,f.selected=!0,f.__value="",f.value=f.__value,m(h,"class","othersInput svelte-1myljlf"),t[3].numBaths===void 0&&xe(()=>t[20].call(h)),_.disabled=!0,_.selected=!0,_.__value="",_.value=_.__value,m(g,"class","othersInput svelte-1myljlf"),t[3].halfBathroom===void 0&&xe(()=>t[21].call(g)),E.disabled=!0,E.selected=!0,E.__value="",E.value=E.__value,m(y,"class","othersInput svelte-1myljlf"),t[3].numParks===void 0&&xe(()=>t[22].call(y)),m(L,"class","ubiTags svelte-1myljlf")},m(P,ue){k(P,e,ue),u(e,n);for(let be=0;be<W.length;be+=1)W[be].m(e,null);Ue(e,t[3].modePay),k(P,s,ue),k(P,i,ue),u(i,r);for(let be=0;be<x.length;be+=1)x[be].m(i,null);Ue(i,t[3].rangeProp),k(P,o,ue),k(P,a,ue),u(a,l);for(let be=0;be<le.length;be+=1)le[be].m(a,null);Ue(a,t[3].numBeds),k(P,c,ue),k(P,h,ue),u(h,f);for(let be=0;be<ce.length;be+=1)ce[be].m(h,null);Ue(h,t[3].numBaths),k(P,d,ue),k(P,g,ue),u(g,_);for(let be=0;be<$.length;be+=1)$[be].m(g,null);Ue(g,t[3].halfBathroom),k(P,v,ue),k(P,y,ue),u(y,E);for(let be=0;be<M.length;be+=1)M[be].m(y,null);Ue(y,t[3].numParks),k(P,T,ue),k(P,L,ue),fe(D,L,null),u(L,G),fe(N,L,null),K=!0,R||(Q=[q(e,"change",t[17]),q(i,"change",t[18]),q(a,"change",t[19]),q(h,"change",t[20]),q(g,"change",t[21]),q(y,"change",t[22])],R=!0)},p(P,ue){if(ue&0){j=Rf;let A;for(A=0;A<j.length;A+=1){const Y=Bf(P,j,A);W[A]?W[A].p(Y,ue):(W[A]=Jf(Y),W[A].c(),W[A].m(e,null))}for(;A<W.length;A+=1)W[A].d(1);W.length=j.length}if(ue[0]&9&&Ue(e,P[3].modePay),ue&0){B=Nf;let A;for(A=0;A<B.length;A+=1){const Y=Ff(P,B,A);x[A]?x[A].p(Y,ue):(x[A]=xf(Y),x[A].c(),x[A].m(i,null))}for(;A<x.length;A+=1)x[A].d(1);x.length=B.length}if(ue[0]&9&&Ue(i,P[3].rangeProp),ue&0){V=Go;let A;for(A=0;A<V.length;A+=1){const Y=Uf(P,V,A);le[A]?le[A].p(Y,ue):(le[A]=Zf(Y),le[A].c(),le[A].m(a,null))}for(;A<le.length;A+=1)le[A].d(1);le.length=V.length}if(ue[0]&9&&Ue(a,P[3].numBeds),ue&0){Z=wn;let A;for(A=0;A<Z.length;A+=1){const Y=$f(P,Z,A);ce[A]?ce[A].p(Y,ue):(ce[A]=ed(Y),ce[A].c(),ce[A].m(h,null))}for(;A<ce.length;A+=1)ce[A].d(1);ce.length=Z.length}if(ue[0]&9&&Ue(h,P[3].numBaths),ue&0){ie=wn;let A;for(A=0;A<ie.length;A+=1){const Y=Mf(P,ie,A);$[A]?$[A].p(Y,ue):($[A]=td(Y),$[A].c(),$[A].m(g,null))}for(;A<$.length;A+=1)$[A].d(1);$.length=ie.length}if(ue[0]&9&&Ue(g,P[3].halfBathroom),ue&0){C=wn;let A;for(A=0;A<C.length;A+=1){const Y=Lf(P,C,A);M[A]?M[A].p(Y,ue):(M[A]=nd(Y),M[A].c(),M[A].m(y,null))}for(;A<M.length;A+=1)M[A].d(1);M.length=C.length}ue[0]&9&&Ue(y,P[3].numParks);const be={};!U&&ue[0]&8&&(U=!0,be.ubication=P[3].locaProperty,Bs(()=>U=!1)),D.$set(be);const qe={};!F&&ue[0]&8&&(F=!0,qe.tag=P[3].tagsProperty,Bs(()=>F=!1)),N.$set(qe)},i(P){K||(H(D.$$.fragment,P),H(N.$$.fragment,P),K=!0)},o(P){J(D.$$.fragment,P),J(N.$$.fragment,P),K=!1},d(P){P&&b(e),Ve(W,P),P&&b(s),P&&b(i),Ve(x,P),P&&b(o),P&&b(a),Ve(le,P),P&&b(c),P&&b(h),Ve(ce,P),P&&b(d),P&&b(g),Ve($,P),P&&b(v),P&&b(y),Ve(M,P),P&&b(T),P&&b(L),de(D),de(N),R=!1,Ze(Q)}}}function Jf(t){let e,n=t[41]+"",s;return{c(){e=p("option"),s=S(n),m(e,"type","checkbox"),e.__value=t[41],e.value=e.__value},m(i,r){k(i,e,r),u(e,s)},p:he,d(i){i&&b(e)}}}function xf(t){let e,n=t[38]+"",s;return{c(){e=p("option"),s=S(n),m(e,"type","checkbox"),e.__value=t[38],e.value=e.__value},m(i,r){k(i,e,r),u(e,s)},p:he,d(i){i&&b(e)}}}function Zf(t){let e,n=t[35]+"",s,i;return{c(){e=p("option"),s=S(n),i=S(" Rec\xE1maras"),m(e,"type","checkbox"),e.__value=t[35],e.value=e.__value},m(r,o){k(r,e,o),u(e,s),u(e,i)},p:he,d(r){r&&b(e)}}}function ed(t){let e,n=t[32]+"",s,i;return{c(){e=p("option"),s=S(n),i=S(" ba\xF1os"),m(e,"type","checkbox"),e.__value=t[32],e.value=e.__value},m(r,o){k(r,e,o),u(e,s),u(e,i)},p:he,d(r){r&&b(e)}}}function td(t){let e,n=t[29]+"",s,i;return{c(){e=p("option"),s=S(n),i=S(" Medios ba\xF1os"),m(e,"type","checkbox"),e.__value=t[29],e.value=e.__value},m(r,o){k(r,e,o),u(e,s),u(e,i)},p:he,d(r){r&&b(e)}}}function nd(t){let e,n=t[26]+"",s,i;return{c(){e=p("option"),s=S(n),i=S(" Estacionamientos"),m(e,"type","checkbox"),e.__value=t[26],e.value=e.__value},m(r,o){k(r,e,o),u(e,s),u(e,i)},p:he,d(r){r&&b(e)}}}function jI(t){let e,n,s,i,r,o,a,l,c,h,f,d,g,_,v,y,E,T,L,D,U,G,N,F,K,R,Q,j,W,B,x,V,le,Z,ce,ie;function $(z,pe){return z[1]?VI:BI}let C=$(t),M=C(t),X=t[2]&&zf(t),O=t[0],se=[];for(let z=0;z<O.length;z+=1)se[z]=Kf(Hf(t,O,z));let De=t[2]&&Gf(t),P=Df,ue=[];for(let z=0;z<P.length;z+=1)ue[z]=Wf(qf(t,P,z));let be=Af,qe=[];for(let z=0;z<be.length;z+=1)qe[z]=Qf(jf(t,be,z));let A=Ko,Y=[];for(let z=0;z<A.length;z+=1)Y[z]=Yf(Vf(t,A,z));let Me=t[2]&&Xf(t);return{c(){e=p("h1"),e.textContent="Alta Contactos",n=w(),s=p("div"),i=p("div"),M.c(),r=w(),o=p("div"),a=p("input"),l=w(),c=p("input"),h=w(),f=p("div"),d=p("input"),g=w(),X&&X.c(),_=w(),v=p("div"),y=p("select"),E=p("option"),E.textContent="Propiedad de Contacto";for(let z=0;z<se.length;z+=1)se[z].c();T=w(),De&&De.c(),L=w(),D=p("div"),U=p("input"),G=w(),N=p("select"),F=p("option"),F.textContent="Tipo de Contacto";for(let z=0;z<ue.length;z+=1)ue[z].c();K=w(),R=p("select"),Q=p("option"),Q.textContent="Modo de Contacto";for(let z=0;z<qe.length;z+=1)qe[z].c();j=w(),W=p("select"),B=p("option"),B.textContent="Tipo de Propiedad";for(let z=0;z<Y.length;z+=1)Y[z].c();x=w(),Me&&Me.c(),V=w(),le=p("button"),le.textContent="Alta Detalles",m(e,"class","sectionTitle"),m(a,"class","dataInput svelte-1myljlf"),m(a,"type","text"),m(a,"placeholder","Nombre"),a.required=!0,m(c,"class","dataInput svelte-1myljlf"),m(c,"type","text"),m(c,"placeholder","Apellido"),m(o,"class","contactInput"),m(d,"class","dataInput svelte-1myljlf"),m(d,"type","tel"),m(d,"placeholder","tel\xE9fono"),d.required=!0,m(f,"class","contactInput"),m(s,"class",""),E.disabled=!0,E.selected=!0,E.__value="",E.value=E.__value,m(y,"class","dataInput svelte-1myljlf"),m(y,"id","selTP"),m(y,"name","selTP"),t[3].propCont===void 0&&xe(()=>t[11].call(y)),m(v,"class","col"),m(U,"class","textareaInput svelte-1myljlf"),m(U,"type","textarea"),m(U,"placeholder","Comentarios"),m(D,"class","col"),F.disabled=!0,F.selected=!0,F.__value="",F.value=F.__value,m(N,"class","othersInput svelte-1myljlf"),t[3].typeContact===void 0&&xe(()=>t[14].call(N)),Q.disabled=!0,Q.selected=!0,Q.__value="",Q.value=Q.__value,m(R,"class","othersInput svelte-1myljlf"),t[3].selecMC===void 0&&xe(()=>t[15].call(R)),B.disabled=!0,B.selected=!0,B.__value="",B.value=B.__value,m(W,"class","othersInput svelte-1myljlf"),m(W,"id","selTP"),m(W,"name","selTP"),t[3].selecTP===void 0&&xe(()=>t[16].call(W)),m(le,"class","btn__save")},m(z,pe){k(z,e,pe),k(z,n,pe),k(z,s,pe),u(s,i),M.m(i,null),u(s,r),u(s,o),u(o,a),ve(a,t[3].name),u(o,l),u(o,c),ve(c,t[3].lastname),u(s,h),u(s,f),u(f,d),ve(d,t[3].telephon),u(f,g),X&&X.m(f,null),k(z,_,pe),k(z,v,pe),u(v,y),u(y,E);for(let oe=0;oe<se.length;oe+=1)se[oe].m(y,null);Ue(y,t[3].propCont),u(v,T),De&&De.m(v,null),k(z,L,pe),k(z,D,pe),u(D,U),ve(U,t[3].comContact),k(z,G,pe),k(z,N,pe),u(N,F);for(let oe=0;oe<ue.length;oe+=1)ue[oe].m(N,null);Ue(N,t[3].typeContact),k(z,K,pe),k(z,R,pe),u(R,Q);for(let oe=0;oe<qe.length;oe+=1)qe[oe].m(R,null);Ue(R,t[3].selecMC),k(z,j,pe),k(z,W,pe),u(W,B);for(let oe=0;oe<Y.length;oe+=1)Y[oe].m(W,null);Ue(W,t[3].selecTP),k(z,x,pe),Me&&Me.m(z,pe),k(z,V,pe),k(z,le,pe),Z=!0,ce||(ie=[q(a,"input",t[7]),q(c,"input",t[8]),q(d,"input",t[9]),q(y,"change",t[11]),q(U,"input",t[13]),q(N,"change",t[14]),q(R,"change",t[15]),q(W,"change",t[16]),q(le,"click",t[5])],ce=!0)},p(z,pe){if(C===(C=$(z))&&M?M.p(z,pe):(M.d(1),M=C(z),M&&(M.c(),M.m(i,null))),pe[0]&9&&a.value!==z[3].name&&ve(a,z[3].name),pe[0]&9&&c.value!==z[3].lastname&&ve(c,z[3].lastname),pe[0]&9&&ve(d,z[3].telephon),z[2]?X?X.p(z,pe):(X=zf(z),X.c(),X.m(f,null)):X&&(X.d(1),X=null),pe[0]&1){O=z[0];let oe;for(oe=0;oe<O.length;oe+=1){const Je=Hf(z,O,oe);se[oe]?se[oe].p(Je,pe):(se[oe]=Kf(Je),se[oe].c(),se[oe].m(y,null))}for(;oe<se.length;oe+=1)se[oe].d(1);se.length=O.length}if(pe[0]&9&&Ue(y,z[3].propCont),z[2]?De?De.p(z,pe):(De=Gf(z),De.c(),De.m(v,null)):De&&(De.d(1),De=null),pe[0]&9&&ve(U,z[3].comContact),pe&0){P=Df;let oe;for(oe=0;oe<P.length;oe+=1){const Je=qf(z,P,oe);ue[oe]?ue[oe].p(Je,pe):(ue[oe]=Wf(Je),ue[oe].c(),ue[oe].m(N,null))}for(;oe<ue.length;oe+=1)ue[oe].d(1);ue.length=P.length}if(pe[0]&9&&Ue(N,z[3].typeContact),pe&0){be=Af;let oe;for(oe=0;oe<be.length;oe+=1){const Je=jf(z,be,oe);qe[oe]?qe[oe].p(Je,pe):(qe[oe]=Qf(Je),qe[oe].c(),qe[oe].m(R,null))}for(;oe<qe.length;oe+=1)qe[oe].d(1);qe.length=be.length}if(pe[0]&9&&Ue(R,z[3].selecMC),pe&0){A=Ko;let oe;for(oe=0;oe<A.length;oe+=1){const Je=Vf(z,A,oe);Y[oe]?Y[oe].p(Je,pe):(Y[oe]=Yf(Je),Y[oe].c(),Y[oe].m(W,null))}for(;oe<Y.length;oe+=1)Y[oe].d(1);Y.length=A.length}pe[0]&9&&Ue(W,z[3].selecTP),z[2]?Me?(Me.p(z,pe),pe[0]&4&&H(Me,1)):(Me=Xf(z),Me.c(),H(Me,1),Me.m(V.parentNode,V)):Me&&(bt(),J(Me,1,1,()=>{Me=null}),wt())},i(z){Z||(H(Me),Z=!0)},o(z){J(Me),Z=!1},d(z){z&&b(e),z&&b(n),z&&b(s),M.d(),X&&X.d(),z&&b(_),z&&b(v),Ve(se,z),De&&De.d(),z&&b(L),z&&b(D),z&&b(G),z&&b(N),Ve(ue,z),z&&b(K),z&&b(R),Ve(qe,z),z&&b(j),z&&b(W),Ve(Y,z),z&&b(x),Me&&Me.d(z),z&&b(V),z&&b(le),ce=!1,Ze(ie)}}}function qI(t,e,n){let s;Oe(t,et,W=>n(3,s=W));var i=[];let r=Fs,o=!1,a=!1;(()=>{for(let W of r){let B=`${W.nameProperty} - ${(W.price/1e6).toFixed(2)} (${W.claveEB.slice(-2)})`;n(0,i=[...i,B])}return n(0,i=i.sort())})();function l(){n(1,o=!0)}function c(){n(2,a=!0)}function h(){s.createdAt=this.value,et.set(s),n(0,i)}function f(){s.name=this.value,et.set(s),n(0,i)}function d(){s.lastname=this.value,et.set(s),n(0,i)}function g(){s.telephon=this.value,et.set(s),n(0,i)}function _(){s.email=this.value,et.set(s),n(0,i)}function v(){s.propCont=Ut(this),et.set(s),n(0,i)}function y(){s.budget=fs(this.value),et.set(s),n(0,i)}function E(){s.comContact=this.value,et.set(s),n(0,i)}function T(){s.typeContact=Ut(this),et.set(s),n(0,i)}function L(){s.selecMC=Ut(this),et.set(s),n(0,i)}function D(){s.selecTP=Ut(this),et.set(s),n(0,i)}function U(){s.modePay=Ut(this),et.set(s),n(0,i)}function G(){s.rangeProp=Ut(this),et.set(s),n(0,i)}function N(){s.numBeds=Ut(this),et.set(s),n(0,i)}function F(){s.numBaths=Ut(this),et.set(s),n(0,i)}function K(){s.halfBathroom=Ut(this),et.set(s),n(0,i)}function R(){s.numParks=Ut(this),et.set(s),n(0,i)}function Q(W){t.$$.not_equal(s.locaProperty,W)&&(s.locaProperty=W,et.set(s))}function j(W){t.$$.not_equal(s.tagsProperty,W)&&(s.tagsProperty=W,et.set(s))}return[i,o,a,s,l,c,h,f,d,g,_,v,y,E,T,L,D,U,G,N,F,K,R,Q,j]}class HI extends Xe{constructor(e){super(),Ye(this,e,qI,jI,Ge,{},null,[-1,-1])}}function zI(t){let e;return{c(){e=S("Editar")},m(n,s){k(n,e,s)},d(n){n&&b(e)}}}function KI(t){let e;return{c(){e=S("Guardar")},m(n,s){k(n,e,s)},d(n){n&&b(e)}}}function GI(t){let e,n,s,i,r,o,a,l,c,h;n=new HI({});function f(_,v){return _[0]?zI:KI}let d=f(t),g=d(t);return{c(){e=p("div"),ge(n.$$.fragment),s=w(),i=p("div"),r=p("button"),g.c(),o=w(),a=p("button"),a.textContent="Cancel",m(r,"class","btn__save"),m(a,"class","btn__cancel"),m(i,"class","contSavCan svelte-1at07r"),m(e,"class","altaContactos")},m(_,v){k(_,e,v),fe(n,e,null),u(e,s),u(e,i),u(i,r),g.m(r,null),u(i,o),u(i,a),l=!0,c||(h=[q(r,"click",t[4]),q(a,"click",t[3])],c=!0)},p(_,[v]){d!==(d=f(_))&&(g.d(1),g=d(_),g&&(g.c(),g.m(r,null)))},i(_){l||(H(n.$$.fragment,_),l=!0)},o(_){J(n.$$.fragment,_),l=!1},d(_){_&&b(e),de(n),g.d(),c=!1,Ze(h)}}}function WI(t,e,n){let s,i;Oe(t,Ke,f=>n(6,s=f)),Oe(t,et,f=>n(1,i=f));let r=!1,o;async function a(f){if(s!="contEditing"){o=Date.now(),f={...f,createdAt:o};const d=Yt(lt,"contacts");await vs(d,f),Ce(Ke,s="binnAdding",s),l(s,f)}else await eu(Is(lt,"contacts",f.id),f),l(s,f),n(0,r=!1);f=[],Ce(Ke,s="contSelect",s)}async function l(f,d){try{if(f==="binnAdding"){let g=`Se le agreg\xF3 a: ${d.name} ${d.lastname} del ${d.telephon}`,_={date:Date.now(),comment:g};const v=Yt(lt,"binnacles");await vs(v,_)}else{let g=`Se le edit\xF3 a: ${d.name} ${d.lastname} del ${d.telephon}`,_={date:Date.now(),comment:g};const v=Yt(lt,"binnacles");await vs(v,_)}}catch(g){console.log("error",g)}}function c(){n(0,r=!0),location.href="/"}return[r,i,a,c,()=>a(i)]}class QI extends Xe{constructor(e){super(),Ye(this,e,WI,GI,Ge,{})}}function sd(t,e,n){const s=t.slice();return s[23]=e[n],s[25]=n,s}function id(t,e,n){const s=t.slice();return s[25]=e[n],s}function rd(t,e,n){const s=t.slice();return s[28]=e[n],s[25]=n,s}function od(t){let e,n=t[1].length+"",s,i,r,o,a,l,c,h,f,d,g,_,v,y,E,T,L,D,U,G,N,F,K,R;function Q(C){t[13](C)}let j={};t[3]!==void 0&&(j.searchTerm=t[3]),l=new hu({props:j}),Yn.push(()=>Vs(l,"searchTerm",Q)),l.$on("input",t[11]);let W=t[1],B=[];for(let C=0;C<W.length;C+=1)B[C]=ld(rd(t,W,C));const x=C=>J(B[C],1,1,()=>{B[C]=null});let V=t[0]>1&&cd(t),le=[3,2,1],Z=[];for(let C=0;C<3;C+=1)Z[C]=hd(id(t,le,C));let ce=Array(3),ie=[];for(let C=0;C<ce.length;C+=1)ie[C]=dd(sd(t,ce,C));let $=t[0]<t[5]&&pd(t);return{c(){e=p("h2"),s=S(n),i=S(" Contactos a Mostrar"),r=w(),o=p("button"),o.textContent="Alta de Contacto",a=w(),ge(l.$$.fragment),h=w(),f=p("div"),d=p("main");for(let C=0;C<B.length;C+=1)B[C].c();g=w(),_=p("div"),v=p("div"),y=p("ul"),V&&V.c(),E=w();for(let C=0;C<3;C+=1)Z[C].c();T=w(),L=p("li"),D=p("span"),U=S(t[0]),G=w();for(let C=0;C<ie.length;C+=1)ie[C].c();N=w(),$&&$.c(),m(o,"class","altaContacto svelte-1o9z7a3"),m(d,"id","bookshelf"),m(y,"class","pagi__options"),m(v,"class","pagi__Item"),m(_,"class","container pagination"),m(f,"class","mosPag cont__card svelte-1o9z7a3")},m(C,M){k(C,e,M),u(e,s),u(e,i),k(C,r,M),k(C,o,M),k(C,a,M),fe(l,C,M),k(C,h,M),k(C,f,M),u(f,d);for(let X=0;X<B.length;X+=1)B[X].m(d,null);u(f,g),u(f,_),u(_,v),u(v,y),V&&V.m(y,null),u(y,E);for(let X=0;X<3;X+=1)Z[X].m(y,null);u(y,T),u(y,L),u(L,D),u(D,U),u(y,G);for(let X=0;X<ie.length;X+=1)ie[X].m(y,null);u(y,N),$&&$.m(y,null),F=!0,K||(R=q(o,"click",t[9]),K=!0)},p(C,M){(!F||M&2)&&n!==(n=C[1].length+"")&&re(s,n);const X={};if(!c&&M&8&&(c=!0,X.searchTerm=C[3],Bs(()=>c=!1)),l.$set(X),M&1046){W=C[1];let O;for(O=0;O<W.length;O+=1){const se=rd(C,W,O);B[O]?(B[O].p(se,M),H(B[O],1)):(B[O]=ld(se),B[O].c(),H(B[O],1),B[O].m(d,null))}for(bt(),O=W.length;O<B.length;O+=1)x(O);wt()}if(C[0]>1?V?V.p(C,M):(V=cd(C),V.c(),V.m(y,E)):V&&(V.d(1),V=null),M&257){le=[3,2,1];let O;for(O=0;O<3;O+=1){const se=id(C,le,O);Z[O]?Z[O].p(se,M):(Z[O]=hd(se),Z[O].c(),Z[O].m(y,T))}for(;O<3;O+=1)Z[O].d(1)}if((!F||M&1)&&re(U,C[0]),M&289){ce=Array(3);let O;for(O=0;O<ce.length;O+=1){const se=sd(C,ce,O);ie[O]?ie[O].p(se,M):(ie[O]=dd(se),ie[O].c(),ie[O].m(y,N))}for(;O<ie.length;O+=1)ie[O].d(1);ie.length=ce.length}C[0]<C[5]?$?$.p(C,M):($=pd(C),$.c(),$.m(y,null)):$&&($.d(1),$=null)},i(C){if(!F){H(l.$$.fragment,C);for(let M=0;M<W.length;M+=1)H(B[M]);F=!0}},o(C){J(l.$$.fragment,C),B=B.filter(Boolean);for(let M=0;M<B.length;M+=1)J(B[M]);F=!1},d(C){C&&b(e),C&&b(r),C&&b(o),C&&b(a),de(l,C),C&&b(h),C&&b(f),Ve(B,C),V&&V.d(),Ve(Z,C),Ve(ie,C),$&&$.d(),K=!1,R()}}}function ad(t){let e,n,s,i,r,o,a;const l=[t[28]];let c={};for(let f=0;f<l.length;f+=1)c=Ot(c,l[f]);n=new kI({props:c});function h(){return t[14](t[28])}return{c(){e=p("div"),ge(n.$$.fragment),s=w(),m(e,"class","selecContact")},m(f,d){k(f,e,d),fe(n,e,null),u(e,s),r=!0,o||(a=q(e,"click",h),o=!0)},p(f,d){t=f;const g=d&2?_n(l,[Xn(t[28])]):{};n.$set(g)},i(f){r||(H(n.$$.fragment,f),xe(()=>{i||(i=fn(e,Ii,{duration:500,easing:Ti},!0)),i.run(1)}),r=!0)},o(f){J(n.$$.fragment,f),i||(i=fn(e,Ii,{duration:500,easing:Ti},!1)),i.run(0),r=!1},d(f){f&&b(e),de(n),f&&i&&i.end(),o=!1,a()}}}function ld(t){let e,n,s=t[25]>=t[4]&&t[25]<t[2]&&ad(t);return{c(){s&&s.c(),e=nn()},m(i,r){s&&s.m(i,r),k(i,e,r),n=!0},p(i,r){i[25]>=i[4]&&i[25]<i[2]?s?(s.p(i,r),r&20&&H(s,1)):(s=ad(i),s.c(),H(s,1),s.m(e.parentNode,e)):s&&(bt(),J(s,1,1,()=>{s=null}),wt())},i(i){n||(H(s),n=!0)},o(i){J(s),n=!1},d(i){s&&s.d(i),i&&b(e)}}}function cd(t){let e,n,s,i,r,o,a,l,c;return{c(){e=p("li"),n=p("a"),n.textContent="first",s=w(),i=p("li"),r=p("a"),o=S("previous"),m(n,"href","/blog"),m(r,"href",a="/blog/"+(t[0]-1))},m(h,f){k(h,e,f),u(e,n),k(h,s,f),k(h,i,f),u(i,r),u(r,o),l||(c=[q(n,"click",gn(t[15])),q(r,"click",gn(t[16]))],l=!0)},p(h,f){f&1&&a!==(a="/blog/"+(h[0]-1))&&m(r,"href",a)},d(h){h&&b(e),h&&b(s),h&&b(i),l=!1,Ze(c)}}}function ud(t){let e,n,s=t[0]-t[25]+"",i,r,o,a;function l(){return t[17](t[25])}return{c(){e=p("li"),n=p("a"),i=S(s),m(n,"href",r="/blog/"+(t[0]-t[25]))},m(c,h){k(c,e,h),u(e,n),u(n,i),o||(a=q(n,"click",gn(l)),o=!0)},p(c,h){t=c,h&1&&s!==(s=t[0]-t[25]+"")&&re(i,s),h&1&&r!==(r="/blog/"+(t[0]-t[25]))&&m(n,"href",r)},d(c){c&&b(e),o=!1,a()}}}function hd(t){let e,n=t[0]-t[25]>0&&ud(t);return{c(){n&&n.c(),e=nn()},m(s,i){n&&n.m(s,i),k(s,e,i)},p(s,i){s[0]-s[25]>0?n?n.p(s,i):(n=ud(s),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(s){n&&n.d(s),s&&b(e)}}}function fd(t){let e,n,s=t[0]+(t[25]+1)+"",i,r,o,a;function l(){return t[18](t[25])}return{c(){e=p("li"),n=p("a"),i=S(s),m(n,"href",r="/blog/"+(t[0]+(t[25]+1)))},m(c,h){k(c,e,h),u(e,n),u(n,i),o||(a=q(n,"click",gn(l)),o=!0)},p(c,h){t=c,h&1&&s!==(s=t[0]+(t[25]+1)+"")&&re(i,s),h&1&&r!==(r="/blog/"+(t[0]+(t[25]+1)))&&m(n,"href",r)},d(c){c&&b(e),o=!1,a()}}}function dd(t){let e,n=t[0]+(t[25]+1)<=t[5]&&fd(t);return{c(){n&&n.c(),e=nn()},m(s,i){n&&n.m(s,i),k(s,e,i)},p(s,i){s[0]+(s[25]+1)<=s[5]?n?n.p(s,i):(n=fd(s),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(s){n&&n.d(s),s&&b(e)}}}function pd(t){let e,n,s,i,r,o,a,l,c,h,f;return{c(){e=p("li"),n=p("a"),s=S("next"),r=w(),o=p("li"),a=p("a"),l=S("last"),m(n,"href",i="/blog/"+(t[0]+1)),m(a,"href",c="/blog/"+t[5])},m(d,g){k(d,e,g),u(e,n),u(n,s),k(d,r,g),k(d,o,g),u(o,a),u(a,l),h||(f=[q(n,"click",gn(t[19])),q(a,"click",gn(t[20]))],h=!0)},p(d,g){g&1&&i!==(i="/blog/"+(d[0]+1))&&m(n,"href",i),g&32&&c!==(c="/blog/"+d[5])&&m(a,"href",c)},d(d){d&&b(e),d&&b(r),d&&b(o),h=!1,Ze(f)}}}function md(t){let e,n,s;return n=new LI({props:{$contact:t[7]}}),{c(){e=p("div"),ge(n.$$.fragment)},m(i,r){k(i,e,r),fe(n,e,null),s=!0},p(i,r){const o={};r&128&&(o.$contact=i[7]),n.$set(o)},i(i){s||(H(n.$$.fragment,i),s=!0)},o(i){J(n.$$.fragment,i),s=!1},d(i){i&&b(e),de(n)}}}function gd(t){let e,n,s,i;const r=[t[7]];let o={};for(let a=0;a<r.length;a+=1)o=Ot(o,r[a]);return s=new QI({props:o}),{c(){e=p("div"),n=p("div"),ge(s.$$.fragment),m(n,"class","container")},m(a,l){k(a,e,l),u(e,n),fe(s,n,null),i=!0},p(a,l){const c=l&128?_n(r,[Xn(a[7])]):{};s.$set(c)},i(a){i||(H(s.$$.fragment,a),i=!0)},o(a){J(s.$$.fragment,a),i=!1},d(a){a&&b(e),de(s)}}}function YI(t){let e,n,s,i,r,o,a,l,c,h,f=t[6]==="start"&&od(t),d=t[6]==="contSelect"&&md(t),g=(t[6]==="contEditing"||t[6]==="contAdding")&&gd(t);return{c(){e=p("main"),n=p("div"),s=p("h1"),s.textContent="Contactos",i=w(),r=p("img"),a=w(),f&&f.c(),l=w(),d&&d.c(),c=w(),g&&g.c(),st(r.src,o=O_)||m(r,"src",o),m(r,"alt","contactos"),m(r,"class","svelte-1o9z7a3"),m(e,"class","container")},m(_,v){k(_,e,v),u(e,n),u(n,s),u(n,i),u(n,r),u(e,a),f&&f.m(e,null),u(e,l),d&&d.m(e,null),u(e,c),g&&g.m(e,null),h=!0},p(_,[v]){_[6]==="start"?f?(f.p(_,v),v&64&&H(f,1)):(f=od(_),f.c(),H(f,1),f.m(e,l)):f&&(bt(),J(f,1,1,()=>{f=null}),wt()),_[6]==="contSelect"?d?(d.p(_,v),v&64&&H(d,1)):(d=md(_),d.c(),H(d,1),d.m(e,c)):d&&(bt(),J(d,1,1,()=>{d=null}),wt()),_[6]==="contEditing"||_[6]==="contAdding"?g?(g.p(_,v),v&64&&H(g,1)):(g=gd(_),g.c(),H(g,1),g.m(e,null)):g&&(bt(),J(g,1,1,()=>{g=null}),wt())},i(_){h||(H(f),H(d),H(g),h=!0)},o(_){J(f),J(d),J(g),h=!1},d(_){_&&b(e),f&&f.d(),d&&d.d(),g&&g.d()}}}let sl=15;function XI(t,e,n){let s,i,r,o,a,l;Oe(t,Ke,R=>n(6,a=R)),Oe(t,et,R=>n(7,l=R));let c;Ce(Ke,a="start",a);let h=1,f=[];const d=R=>{n(0,h=R)},g=Ta(Yt(lt,"contacts"),R=>{n(1,f=R.docs.map(Q=>({...Q.data(),id:Q.id}))),E()},R=>{console.log(R)});_r(g);const _=()=>{Ce(Ke,a="contAdding",a)},v=R=>{n(3,c=""),Ce(et,l=R,l),Ce(Ke,a="contSelect",a)};function y(){return n(1,f=f.filter(R=>(R.name+" "+R.lastname).toLowerCase().includes(c.toLowerCase())))}function E(){f.sort((R,Q)=>new Date(R.createdAt)<new Date(Q.createdAt)?1:new Date(R.createdAt)>new Date(Q.createdAt)?-1:0)}function T(R){c=R,n(3,c)}const L=R=>v(R),D=()=>d(1),U=()=>d(h-1),G=R=>d(h-R),N=R=>d(h+(R+1)),F=()=>d(h+1),K=()=>d(i);return t.$$.update=()=>{t.$$.dirty&2&&n(12,s=f.length),t.$$.dirty&4096&&n(5,i=Math.ceil(s/sl)),t.$$.dirty&1&&n(2,r=h*sl),t.$$.dirty&4&&n(4,o=r-sl)},[h,f,r,c,o,i,a,l,d,_,v,y,s,T,L,D,U,G,N,F,K]}class JI extends Xe{constructor(e){super(),Ye(this,e,XI,YI,Ge,{})}}let rs=[],os=[];function xI(t,e){e=e.filter(n=>n.selecTP===t.selectTP),t.numBeds>0&&(e=e.filter(n=>n.numBeds>=t.beds)),t.numBaths>0&&(e=e.filter(n=>n.numBaths>=t.bathroom)),t.numParks>0&&(e=e.filter(n=>n.numPark>=t.parks));try{e=e.filter(n=>{n.budget?rs=e.filter(s=>s.budget>=t.price*.7&&s.budget<=t.price*1.1):os=e.filter(s=>s.rangeProp===B_(t.price))})}catch(n){console.log(n)}e=os.concat(rs),rs=[],os=[];try{e.filter(n=>{n.locaProperty.length>0?rs=e.filter(s=>t.locaProperty.some(i=>s.locaProperty.includes(i))):os=e.filter(s=>s.locaProperty.length===0)})}catch(n){console.log(n)}e=os.concat(rs),rs=[],os=[];try{e=e.filter(n=>{n.tagsProperty.length>0?rs=e.filter(s=>t.tagsProperty.some(i=>s.tagsProperty.includes(i))):os=e.filter(s=>s.tagsProperty.length===0)})}catch(n){console.log(n)}return e=os.concat(rs),Pp.set(e)}function _d(t,e,n){const s=t.slice();return s[16]=e[n],s}function vd(t){let e,n=t[2],s=[];for(let i=0;i<n.length;i+=1)s[i]=yd(_d(t,n,i));return{c(){for(let i=0;i<s.length;i+=1)s[i].c();e=nn()},m(i,r){for(let o=0;o<s.length;o+=1)s[o].m(i,r);k(i,e,r)},p(i,r){if(r&4){n=i[2];let o;for(o=0;o<n.length;o+=1){const a=_d(i,n,o);s[o]?s[o].p(a,r):(s[o]=yd(a),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(i){Ve(s,i),i&&b(e)}}}function yd(t){let e,n,s,i,r=t[16].name+"",o,a,l=t[16].lastname+"",c,h,f,d=t[16].locaProperty+"",g,_,v,y=t[16].tagsProperty+"",E,T,L,D=t[16].budget+"",U,G,N,F=t[16].rangeProp+"",K,R;return{c(){e=p("div"),n=p("input"),s=w(),i=p("h3"),o=S(r),a=w(),c=S(l),h=w(),f=p("h4"),g=S(d),_=w(),v=p("h4"),E=S(y),T=w(),L=p("div"),U=S(D),G=w(),N=p("div"),K=S(F),R=w(),m(n,"type","checkbox"),m(e,"class","conInt svelte-6z8m3z")},m(Q,j){k(Q,e,j),u(e,n),u(e,s),u(e,i),u(i,o),u(i,a),u(i,c),u(e,h),u(e,f),u(f,g),u(e,_),u(e,v),u(v,E),u(e,T),u(e,L),u(L,U),u(e,G),u(e,N),u(N,K),u(e,R)},p(Q,j){j&4&&r!==(r=Q[16].name+"")&&re(o,r),j&4&&l!==(l=Q[16].lastname+"")&&re(c,l),j&4&&d!==(d=Q[16].locaProperty+"")&&re(g,d),j&4&&y!==(y=Q[16].tagsProperty+"")&&re(E,y),j&4&&D!==(D=Q[16].budget+"")&&re(U,D),j&4&&F!==(F=Q[16].rangeProp+"")&&re(K,F)},d(Q){Q&&b(e)}}}function ZI(t){let e,n,s,i,r,o,a,l,c,h=t[1].claveEB+"",f,d,g=t[1].nameProperty+"",_,v,y,E=t[1].selectTP+"",T,L,D=t[1].colonia+"",U,G,N=t[1].locaProperty+"",F,K,R,Q,j,W=t[1].price+"",B,x,V,le,Z=t[1].beds+"",ce,ie,$=t[1].bathroom+"",C,M,X=t[1].halfBathroom+"",O,se,De,P,ue=t[1].areaBuilding+"",be,qe,A=t[1].areaTotal+"",Y,Me,z,pe,oe=t[1].description+"",Je,yn,St,At,sn,Zt,Mt,Ht,ut,pn,ot,ht,rn,ft,Fn,on,dt,In,Cn,an,Sn,An,zt,Fe,en,je=t[0]&&vd(t);return{c(){e=p("div"),n=p("div"),s=p("div"),i=p("img"),a=w(),l=p("div"),c=p("h4"),f=S(h),d=w(),_=S(g),v=w(),y=p("h5"),T=S(E),L=S(" en Col. "),U=S(D),G=S(" al "),F=S(N),K=S(" de la ciudad."),R=w(),Q=p("h6"),j=S("Precio: "),B=S(W),x=w(),V=p("div"),le=p("h6"),ce=S(Z),ie=S(" Recamaras, "),C=S($),M=S(" Ba\xF1os y "),O=S(X),se=S(" Medio Ba\xF1o"),De=w(),P=p("h6"),be=S(ue),qe=S(" m2 de construcci\xF3n y "),Y=S(A),Me=S(" m2 de terreno"),z=w(),pe=p("p"),Je=S(oe),yn=w(),St=p("div"),At=p("a"),sn=S("Seguir Link en Otra Ventana"),Mt=w(),Ht=p("div"),ut=p("button"),ut.textContent="Enviar por WhatsApp",pn=w(),ot=p("button"),ot.textContent="Buscar Interesados",ht=w(),rn=p("div"),ft=p("button"),ft.textContent="Regresar",Fn=w(),on=p("div"),dt=p("img"),Cn=w(),an=p("img"),An=w(),zt=p("div"),je&&je.c(),st(i.src,r=t[1].urlImage)||m(i,"src",r),m(i,"alt",o=t[1].nameProperty),m(s,"class","selectImage svelte-6z8m3z"),m(pe,"class","descSelec"),m(l,"class","descSelect"),m(At,"href",Zt=t[1].urlProp),m(At,"target","_blank"),m(St,"class","folowLink"),m(ut,"class","btnCommon btnWhatsApp"),m(ot,"class","btnCommon"),m(Ht,"class","optionsSend"),m(ft,"class","btnCommon btnCancel"),m(rn,"class","backAnt"),st(dt.src,In=Aa)||m(dt,"src",In),m(dt,"alt","delete"),st(an.src,Sn=V_)||m(an,"src",Sn),m(an,"alt","delete"),m(on,"class","icon__Content"),m(n,"class","sele__info svelte-6z8m3z"),m(e,"class","sele__Product svelte-6z8m3z"),m(zt,"class","container cont__interest svelte-6z8m3z")},m(Pe,Ae){k(Pe,e,Ae),u(e,n),u(n,s),u(s,i),u(n,a),u(n,l),u(l,c),u(c,f),u(c,d),u(c,_),u(l,v),u(l,y),u(y,T),u(y,L),u(y,U),u(y,G),u(y,F),u(y,K),u(l,R),u(l,Q),u(Q,j),u(Q,B),u(l,x),u(l,V),u(V,le),u(le,ce),u(le,ie),u(le,C),u(le,M),u(le,O),u(le,se),u(l,De),u(l,P),u(P,be),u(P,qe),u(P,Y),u(P,Me),u(l,z),u(l,pe),u(pe,Je),u(n,yn),u(n,St),u(St,At),u(At,sn),u(n,Mt),u(n,Ht),u(Ht,ut),u(Ht,pn),u(Ht,ot),u(n,ht),u(n,rn),u(rn,ft),u(n,Fn),u(n,on),u(on,dt),u(on,Cn),u(on,an),k(Pe,An,Ae),k(Pe,zt,Ae),je&&je.m(zt,null),Fe||(en=[q(ut,"click",t[8]),q(ot,"click",t[6]),q(ft,"click",t[7]),q(dt,"click",t[4]),q(an,"click",t[5])],Fe=!0)},p(Pe,[Ae]){Ae&2&&!st(i.src,r=Pe[1].urlImage)&&m(i,"src",r),Ae&2&&o!==(o=Pe[1].nameProperty)&&m(i,"alt",o),Ae&2&&h!==(h=Pe[1].claveEB+"")&&re(f,h),Ae&2&&g!==(g=Pe[1].nameProperty+"")&&re(_,g),Ae&2&&E!==(E=Pe[1].selectTP+"")&&re(T,E),Ae&2&&D!==(D=Pe[1].colonia+"")&&re(U,D),Ae&2&&N!==(N=Pe[1].locaProperty+"")&&re(F,N),Ae&2&&W!==(W=Pe[1].price+"")&&re(B,W),Ae&2&&Z!==(Z=Pe[1].beds+"")&&re(ce,Z),Ae&2&&$!==($=Pe[1].bathroom+"")&&re(C,$),Ae&2&&X!==(X=Pe[1].halfBathroom+"")&&re(O,X),Ae&2&&ue!==(ue=Pe[1].areaBuilding+"")&&re(be,ue),Ae&2&&A!==(A=Pe[1].areaTotal+"")&&re(Y,A),Ae&2&&oe!==(oe=Pe[1].description+"")&&re(Je,oe),Ae&2&&Zt!==(Zt=Pe[1].urlProp)&&m(At,"href",Zt),Pe[0]?je?je.p(Pe,Ae):(je=vd(Pe),je.c(),je.m(zt,null)):je&&(je.d(1),je=null)},i:he,o:he,d(Pe){Pe&&b(e),Pe&&b(An),Pe&&b(zt),je&&je.d(),Fe=!1,Ze(en)}}}function eC(t,e,n){let s,i,r;Oe(t,Ke,g=>n(10,s=g)),Oe(t,We,g=>n(1,i=g)),Oe(t,Pp,g=>n(2,r=g)),Ys();let o=[],a=!1;function l(){console.log("propEditing"),Ce(Ke,s="propEditing",s),console.log("propEditing")}async function c(){confirm("Deseas eleiminar definitivamente la propiedad?")&&(console.log("Borraste al propiedad"),await Ea(Is(lt,"properties",i.id)),Ce(Ke,s="start",s))}function h(){xI(i,Ei),n(0,a=!0)}function f(){Ce(We,i=[],i),Ce(Ke,s="start",s)}return[a,i,r,o,l,c,h,f,()=>void 0]}class tC extends Xe{constructor(e){super(),Ye(this,e,eC,ZI,Ge,{})}}function bd(t,e,n){const s=t.slice();return s[24]=e[n],s}function wd(t,e,n){const s=t.slice();return s[27]=e[n],s}function kd(t,e,n){const s=t.slice();return s[30]=e[n],s}function Ed(t,e,n){const s=t.slice();return s[33]=e[n],s}function Td(t,e,n){const s=t.slice();return s[36]=e[n],s}function Id(t,e,n){const s=t.slice();return s[39]=e[n],s}function Cd(t,e,n){const s=t.slice();return s[42]=e[n],s}function nC(t){let e,n=kt(t[1].createdAt)+"",s,i,r;return{c(){e=p("h3"),s=S(n),m(e,"class","dataInput")},m(o,a){k(o,e,a),u(e,s),i||(r=q(e,"dblclick",t[3]),i=!0)},p(o,a){a[0]&2&&n!==(n=kt(o[1].createdAt)+"")&&re(s,n)},d(o){o&&b(e),i=!1,r()}}}function sC(t){let e,n,s;return{c(){e=p("input"),m(e,"class","dataInput"),m(e,"type","date")},m(i,r){k(i,e,r),ve(e,t[1].createdAt),n||(s=q(e,"input",t[4]),n=!0)},p(i,r){r[0]&2&&ve(e,i[1].createdAt)},d(i){i&&b(e),n=!1,s()}}}function Sd(t){let e,n=t[42]+"",s;return{c(){e=p("option"),s=S(n),m(e,"type","checkbox"),e.__value=t[42],e.value=e.__value},m(i,r){k(i,e,r),u(e,s)},p:he,d(i){i&&b(e)}}}function Ad(t){let e,n=t[39]+"",s,i;return{c(){e=p("option"),s=S(n),i=w(),m(e,"type","checkbox"),e.__value=t[39],e.value=e.__value},m(r,o){k(r,e,o),u(e,s),u(e,i)},p:he,d(r){r&&b(e)}}}function Dd(t){let e,n=t[36]+"",s,i;return{c(){e=p("option"),s=S(n),i=S(" Rec\xE1maras"),m(e,"type","checkbox"),e.__value=t[36],e.value=e.__value},m(r,o){k(r,e,o),u(e,s),u(e,i)},p:he,d(r){r&&b(e)}}}function Rd(t){let e,n=t[33]+"",s,i;return{c(){e=p("option"),s=S(n),i=S(" ba\xF1os"),m(e,"type","checkbox"),e.__value=t[33],e.value=e.__value},m(r,o){k(r,e,o),u(e,s),u(e,i)},p:he,d(r){r&&b(e)}}}function Pd(t){let e,n=t[30]+"",s,i;return{c(){e=p("option"),s=S(n),i=S(" Medios ba\xF1os"),m(e,"type","checkbox"),e.__value=t[30],e.value=e.__value},m(r,o){k(r,e,o),u(e,s),u(e,i)},p:he,d(r){r&&b(e)}}}function Nd(t){let e,n=t[27]+"",s,i;return{c(){e=p("option"),s=S(n),i=S(" Estacionamientos"),m(e,"type","checkbox"),e.__value=t[27],e.value=e.__value},m(r,o){k(r,e,o),u(e,s),u(e,i)},p:he,d(r){r&&b(e)}}}function Od(t){let e,n=t[24]+"",s;return{c(){e=p("option"),s=S(n),m(e,"type","checkbox"),e.__value=t[24],e.value=e.__value},m(i,r){k(i,e,r),u(e,s)},p:he,d(i){i&&b(e)}}}function iC(t){let e,n,s,i,r,o,a,l,c,h,f,d,g,_,v,y,E,T,L,D,U,G,N,F,K,R,Q,j,W,B,x,V,le,Z,ce,ie,$,C,M,X,O,se,De,P,ue,be,qe,A,Y,Me,z,pe,oe,Je,yn,St,At,sn,Zt,Mt,Ht,ut,pn,ot,ht,rn,ft,Fn,on,dt,In,Cn,an,Sn;function An(I,ae){if(I[0])return sC;if(I[2]==="propEditing")return nC}let zt=An(t),Fe=zt&&zt(t),en=Ko,je=[];for(let I=0;I<en.length;I+=1)je[I]=Sd(Cd(t,en,I));let Pe=Pf,Ae=[];for(let I=0;I<Pe.length;I+=1)Ae[I]=Ad(Id(t,Pe,I));let Bn=Go,pt=[];for(let I=0;I<Bn.length;I+=1)pt[I]=Dd(Td(t,Bn,I));let Vn=wn,$t=[];for(let I=0;I<Vn.length;I+=1)$t[I]=Rd(Ed(t,Vn,I));let Dn=wn,mt=[];for(let I=0;I<Dn.length;I+=1)mt[I]=Pd(kd(t,Dn,I));let jn=wn,gt=[];for(let I=0;I<jn.length;I+=1)gt[I]=Nd(wd(t,jn,I));let bn=Of,nt=[];for(let I=0;I<bn.length;I+=1)nt[I]=Od(bd(t,bn,I));function Wr(I){t[22](I)}let ss={};t[1].locaProperty!==void 0&&(ss.ubication=t[1].locaProperty),ft=new j_({props:ss}),Yn.push(()=>Vs(ft,"ubication",Wr));function Ds(I){t[23](I)}let Ni={};return t[1].tagsProperty!==void 0&&(Ni.tag=t[1].tagsProperty),dt=new q_({props:Ni}),Yn.push(()=>Vs(dt,"tag",Ds)),{c(){e=p("div"),Fe&&Fe.c(),n=w(),s=p("select"),i=p("option"),i.textContent="Tipo de Propiedad";for(let I=0;I<je.length;I+=1)je[I].c();r=w(),o=p("label"),o.innerHTML=`Titulo
       <input type="text"/>`,a=w(),l=p("label"),c=S(`Colonia\r
        `),h=p("input"),f=w(),d=p("label"),g=S(`Nombre de la Propiead\r
        `),_=p("input"),v=w(),y=p("label"),E=S(`Clave EB\r
        `),T=p("input"),L=w(),D=p("label"),U=S(`Clave MH\r
        `),G=p("input"),N=w(),F=p("div"),K=p("textarea"),R=w(),Q=p("select"),j=p("option"),j.textContent="Tipo de Operaci\xF3n";for(let I=0;I<Ae.length;I+=1)Ae[I].c();W=w(),B=p("select"),x=p("option"),x.textContent="# Rec\xE1maras";for(let I=0;I<pt.length;I+=1)pt[I].c();V=w(),le=p("select"),Z=p("option"),Z.textContent="# Ba\xF1os";for(let I=0;I<$t.length;I+=1)$t[I].c();ce=w(),ie=p("select"),$=p("option"),$.textContent="# Medios Ba\xF1os";for(let I=0;I<mt.length;I+=1)mt[I].c();C=w(),M=p("select"),X=p("option"),X.textContent="# Estacionamientos";for(let I=0;I<gt.length;I+=1)gt[I].c();O=w(),se=p("label"),De=S(`Area de Construcci\xF3n\r
            `),P=p("input"),ue=w(),be=p("label"),qe=S(`Area de Terreno\r
            `),A=p("input"),Y=w(),Me=p("label"),z=S(`Precio\r
            `),pe=p("input"),oe=w(),Je=p("label"),yn=S(`Link Imgen\r
        `),St=p("input"),At=w(),sn=p("label"),Zt=S(`Link de la Propiedad\r
        `),Mt=p("input"),Ht=w(),ut=p("label"),ut.innerHTML=`Propietario
            <input type="text"/>`,pn=w(),ot=p("select"),ht=p("option"),ht.textContent="Tipo de Encargado";for(let I=0;I<nt.length;I+=1)nt[I].c();rn=w(),ge(ft.$$.fragment),on=w(),ge(dt.$$.fragment),i.disabled=!0,i.selected=!0,i.__value="",i.value=i.__value,m(s,"class","selTP"),m(s,"id","selTP"),m(s,"name","selTP"),t[1].selectTP===void 0&&xe(()=>t[5].call(s)),m(h,"type","text"),m(_,"type","text"),m(T,"type","text"),m(G,"type","text"),m(K,"placeholder","Comentarios"),m(K,"cols","65"),m(K,"rows","5"),m(K,"class","form-control"),m(F,"class","col"),j.disabled=!0,j.selected=!0,j.__value="",j.value=j.__value,t[1].typeOperation===void 0&&xe(()=>t[11].call(Q)),x.disabled=!0,x.selected=!0,x.__value="",x.value=x.__value,t[1].beds===void 0&&xe(()=>t[12].call(B)),Z.disabled=!0,Z.selected=!0,Z.__value="",Z.value=Z.__value,t[1].bathroom===void 0&&xe(()=>t[13].call(le)),$.disabled=!0,$.selected=!0,$.__value="",$.value=$.__value,t[1].halfBathroom===void 0&&xe(()=>t[14].call(ie)),X.disabled=!0,X.selected=!0,X.__value="",X.value=X.__value,t[1].park===void 0&&xe(()=>t[15].call(M)),m(P,"type","number"),m(A,"type","number"),m(pe,"type","number"),m(St,"type","text"),m(Mt,"type","text"),ht.disabled=!0,ht.selected=!0,ht.__value="",ht.value=ht.__value,m(ot,"name","typeSaller"),t[1].typeSaller===void 0&&xe(()=>t[21].call(ot))},m(I,ae){k(I,e,ae),Fe&&Fe.m(e,null),k(I,n,ae),k(I,s,ae),u(s,i);for(let Ne=0;Ne<je.length;Ne+=1)je[Ne].m(s,null);Ue(s,t[1].selectTP),k(I,r,ae),k(I,o,ae),k(I,a,ae),k(I,l,ae),u(l,c),u(l,h),ve(h,t[1].colonia),k(I,f,ae),k(I,d,ae),u(d,g),u(d,_),ve(_,t[1].nameProperty),k(I,v,ae),k(I,y,ae),u(y,E),u(y,T),ve(T,t[1].claveEB),k(I,L,ae),k(I,D,ae),u(D,U),u(D,G),ve(G,t[1].claveMH),k(I,N,ae),k(I,F,ae),u(F,K),ve(K,t[1].description),k(I,R,ae),k(I,Q,ae),u(Q,j);for(let Ne=0;Ne<Ae.length;Ne+=1)Ae[Ne].m(Q,null);Ue(Q,t[1].typeOperation),k(I,W,ae),k(I,B,ae),u(B,x);for(let Ne=0;Ne<pt.length;Ne+=1)pt[Ne].m(B,null);Ue(B,t[1].beds),k(I,V,ae),k(I,le,ae),u(le,Z);for(let Ne=0;Ne<$t.length;Ne+=1)$t[Ne].m(le,null);Ue(le,t[1].bathroom),k(I,ce,ae),k(I,ie,ae),u(ie,$);for(let Ne=0;Ne<mt.length;Ne+=1)mt[Ne].m(ie,null);Ue(ie,t[1].halfBathroom),k(I,C,ae),k(I,M,ae),u(M,X);for(let Ne=0;Ne<gt.length;Ne+=1)gt[Ne].m(M,null);Ue(M,t[1].park),k(I,O,ae),k(I,se,ae),u(se,De),u(se,P),ve(P,t[1].areaBuilding),k(I,ue,ae),k(I,be,ae),u(be,qe),u(be,A),ve(A,t[1].areaTotal),k(I,Y,ae),k(I,Me,ae),u(Me,z),u(Me,pe),ve(pe,t[1].price),k(I,oe,ae),k(I,Je,ae),u(Je,yn),u(Je,St),ve(St,t[1].urlImage),k(I,At,ae),k(I,sn,ae),u(sn,Zt),u(sn,Mt),ve(Mt,t[1].urlProp),k(I,Ht,ae),k(I,ut,ae),k(I,pn,ae),k(I,ot,ae),u(ot,ht);for(let Ne=0;Ne<nt.length;Ne+=1)nt[Ne].m(ot,null);Ue(ot,t[1].typeSaller),k(I,rn,ae),fe(ft,I,ae),k(I,on,ae),fe(dt,I,ae),Cn=!0,an||(Sn=[q(s,"change",t[5]),q(h,"input",t[6]),q(_,"input",t[7]),q(T,"input",t[8]),q(G,"input",t[9]),q(K,"input",t[10]),q(Q,"change",t[11]),q(B,"change",t[12]),q(le,"change",t[13]),q(ie,"change",t[14]),q(M,"change",t[15]),q(P,"input",t[16]),q(A,"input",t[17]),q(pe,"input",t[18]),q(St,"input",t[19]),q(Mt,"input",t[20]),q(ot,"change",t[21])],an=!0)},p(I,ae){if(zt===(zt=An(I))&&Fe?Fe.p(I,ae):(Fe&&Fe.d(1),Fe=zt&&zt(I),Fe&&(Fe.c(),Fe.m(e,null))),ae&0){en=Ko;let ee;for(ee=0;ee<en.length;ee+=1){const at=Cd(I,en,ee);je[ee]?je[ee].p(at,ae):(je[ee]=Sd(at),je[ee].c(),je[ee].m(s,null))}for(;ee<je.length;ee+=1)je[ee].d(1);je.length=en.length}if(ae[0]&2&&Ue(s,I[1].selectTP),ae[0]&2&&h.value!==I[1].colonia&&ve(h,I[1].colonia),ae[0]&2&&_.value!==I[1].nameProperty&&ve(_,I[1].nameProperty),ae[0]&2&&T.value!==I[1].claveEB&&ve(T,I[1].claveEB),ae[0]&2&&G.value!==I[1].claveMH&&ve(G,I[1].claveMH),ae[0]&2&&ve(K,I[1].description),ae&0){Pe=Pf;let ee;for(ee=0;ee<Pe.length;ee+=1){const at=Id(I,Pe,ee);Ae[ee]?Ae[ee].p(at,ae):(Ae[ee]=Ad(at),Ae[ee].c(),Ae[ee].m(Q,null))}for(;ee<Ae.length;ee+=1)Ae[ee].d(1);Ae.length=Pe.length}if(ae[0]&2&&Ue(Q,I[1].typeOperation),ae&0){Bn=Go;let ee;for(ee=0;ee<Bn.length;ee+=1){const at=Td(I,Bn,ee);pt[ee]?pt[ee].p(at,ae):(pt[ee]=Dd(at),pt[ee].c(),pt[ee].m(B,null))}for(;ee<pt.length;ee+=1)pt[ee].d(1);pt.length=Bn.length}if(ae[0]&2&&Ue(B,I[1].beds),ae&0){Vn=wn;let ee;for(ee=0;ee<Vn.length;ee+=1){const at=Ed(I,Vn,ee);$t[ee]?$t[ee].p(at,ae):($t[ee]=Rd(at),$t[ee].c(),$t[ee].m(le,null))}for(;ee<$t.length;ee+=1)$t[ee].d(1);$t.length=Vn.length}if(ae[0]&2&&Ue(le,I[1].bathroom),ae&0){Dn=wn;let ee;for(ee=0;ee<Dn.length;ee+=1){const at=kd(I,Dn,ee);mt[ee]?mt[ee].p(at,ae):(mt[ee]=Pd(at),mt[ee].c(),mt[ee].m(ie,null))}for(;ee<mt.length;ee+=1)mt[ee].d(1);mt.length=Dn.length}if(ae[0]&2&&Ue(ie,I[1].halfBathroom),ae&0){jn=wn;let ee;for(ee=0;ee<jn.length;ee+=1){const at=wd(I,jn,ee);gt[ee]?gt[ee].p(at,ae):(gt[ee]=Nd(at),gt[ee].c(),gt[ee].m(M,null))}for(;ee<gt.length;ee+=1)gt[ee].d(1);gt.length=jn.length}if(ae[0]&2&&Ue(M,I[1].park),ae[0]&2&&fs(P.value)!==I[1].areaBuilding&&ve(P,I[1].areaBuilding),ae[0]&2&&fs(A.value)!==I[1].areaTotal&&ve(A,I[1].areaTotal),ae[0]&2&&fs(pe.value)!==I[1].price&&ve(pe,I[1].price),ae[0]&2&&St.value!==I[1].urlImage&&ve(St,I[1].urlImage),ae[0]&2&&Mt.value!==I[1].urlProp&&ve(Mt,I[1].urlProp),ae&0){bn=Of;let ee;for(ee=0;ee<bn.length;ee+=1){const at=bd(I,bn,ee);nt[ee]?nt[ee].p(at,ae):(nt[ee]=Od(at),nt[ee].c(),nt[ee].m(ot,null))}for(;ee<nt.length;ee+=1)nt[ee].d(1);nt.length=bn.length}ae[0]&2&&Ue(ot,I[1].typeSaller);const Ne={};!Fn&&ae[0]&2&&(Fn=!0,Ne.ubication=I[1].locaProperty,Bs(()=>Fn=!1)),ft.$set(Ne);const qn={};!In&&ae[0]&2&&(In=!0,qn.tag=I[1].tagsProperty,Bs(()=>In=!1)),dt.$set(qn)},i(I){Cn||(H(ft.$$.fragment,I),H(dt.$$.fragment,I),Cn=!0)},o(I){J(ft.$$.fragment,I),J(dt.$$.fragment,I),Cn=!1},d(I){I&&b(e),Fe&&Fe.d(),I&&b(n),I&&b(s),Ve(je,I),I&&b(r),I&&b(o),I&&b(a),I&&b(l),I&&b(f),I&&b(d),I&&b(v),I&&b(y),I&&b(L),I&&b(D),I&&b(N),I&&b(F),I&&b(R),I&&b(Q),Ve(Ae,I),I&&b(W),I&&b(B),Ve(pt,I),I&&b(V),I&&b(le),Ve($t,I),I&&b(ce),I&&b(ie),Ve(mt,I),I&&b(C),I&&b(M),Ve(gt,I),I&&b(O),I&&b(se),I&&b(ue),I&&b(be),I&&b(Y),I&&b(Me),I&&b(oe),I&&b(Je),I&&b(At),I&&b(sn),I&&b(Ht),I&&b(ut),I&&b(pn),I&&b(ot),Ve(nt,I),I&&b(rn),de(ft,I),I&&b(on),de(dt,I),an=!1,Ze(Sn)}}}function rC(t,e,n){let s,i;Oe(t,We,Q=>n(1,s=Q)),Oe(t,Ke,Q=>n(2,i=Q));let r=!1;function o(){n(0,r=!0)}function a(){s.createdAt=this.value,We.set(s)}function l(){s.selectTP=Ut(this),We.set(s)}function c(){s.colonia=this.value,We.set(s)}function h(){s.nameProperty=this.value,We.set(s)}function f(){s.claveEB=this.value,We.set(s)}function d(){s.claveMH=this.value,We.set(s)}function g(){s.description=this.value,We.set(s)}function _(){s.typeOperation=Ut(this),We.set(s)}function v(){s.beds=Ut(this),We.set(s)}function y(){s.bathroom=Ut(this),We.set(s)}function E(){s.halfBathroom=Ut(this),We.set(s)}function T(){s.park=Ut(this),We.set(s)}function L(){s.areaBuilding=fs(this.value),We.set(s)}function D(){s.areaTotal=fs(this.value),We.set(s)}function U(){s.price=fs(this.value),We.set(s)}function G(){s.urlImage=this.value,We.set(s)}function N(){s.urlProp=this.value,We.set(s)}function F(){s.typeSaller=Ut(this),We.set(s)}function K(Q){t.$$.not_equal(s.locaProperty,Q)&&(s.locaProperty=Q,We.set(s))}function R(Q){t.$$.not_equal(s.tagsProperty,Q)&&(s.tagsProperty=Q,We.set(s))}return[r,s,i,o,a,l,c,h,f,d,g,_,v,y,E,T,L,D,U,G,N,F,K,R]}class oC extends Xe{constructor(e){super(),Ye(this,e,rC,iC,Ge,{},null,[-1,-1])}}function aC(t){let e;return{c(){e=S("Editar")},m(n,s){k(n,e,s)},d(n){n&&b(e)}}}function lC(t){let e;return{c(){e=S("Guardar")},m(n,s){k(n,e,s)},d(n){n&&b(e)}}}function cC(t){let e,n,s,i,r,o,a,l,c,h,f,d,g,_,v,y;l=new oC({});function E(D,U){return D[0]==="propAdding"?lC:aC}let T=E(t),L=T(t);return{c(){e=p("form"),n=p("div"),s=p("div"),i=p("img"),a=w(),ge(l.$$.fragment),c=w(),h=p("div"),f=p("button"),L.c(),d=w(),g=p("button"),g.textContent="Cancel",st(i.src,r=t[1].urlImage)||m(i,"src",r),m(i,"alt",o=t[1].nameProperty),m(i,"class","svelte-166hnhc"),m(f,"class","btn-save"),m(g,"class","btn-cancel"),m(h,"class","contSavCan svelte-166hnhc"),m(n,"class","altaContactos"),m(e,"class","propiedad")},m(D,U){k(D,e,U),u(e,n),u(n,s),u(s,i),u(s,a),fe(l,s,null),u(n,c),u(n,h),u(h,f),L.m(f,null),u(h,d),u(h,g),_=!0,v||(y=[q(g,"click",t[3]),q(e,"submit",gn(t[2]))],v=!0)},p(D,[U]){(!_||U&2&&!st(i.src,r=D[1].urlImage))&&m(i,"src",r),(!_||U&2&&o!==(o=D[1].nameProperty))&&m(i,"alt",o),T!==(T=E(D))&&(L.d(1),L=T(D),L&&(L.c(),L.m(f,null)))},i(D){_||(H(l.$$.fragment,D),_=!0)},o(D){J(l.$$.fragment,D),_=!1},d(D){D&&b(e),de(l),L.d(),v=!1,Ze(y)}}}function uC(t,e,n){let s,i;Oe(t,Ke,c=>n(0,s=c)),Oe(t,We,c=>n(1,i=c));let r=0;const o=Ys();async function a(){if(console.log("Estas en add property",s,i),s==="propEditing")console.log("estas dentro de edit property",i.id),await eu(Is(lt,"properties",i.id),i);else{r=Date.now(),Ce(We,i={...i,createdAt:r},i),console.log(i);const c=Yt(lt,"properties");await vs(c,i)}Ce(Ke,s="start",s),Ce(We,i="",i)}return[s,i,a,()=>{o("./")}]}class H_ extends Xe{constructor(e){super(),Ye(this,e,uC,cC,Ge,{})}}function Ld(t,e,n){const s=t.slice();return s[24]=e[n],s[26]=n,s}function Md(t,e,n){const s=t.slice();return s[26]=e[n],s}function $d(t,e,n){const s=t.slice();return s[12]=e[n],s[26]=n,s}function Ud(t){let e,n=t[0].length+"",s,i,r,o,a,l,c,h,f,d,g,_,v,y,E,T,L,D,U,G,N,F,K,R;function Q(C){t[14](C)}let j={};t[3]!==void 0&&(j.searchTerm=t[3]),l=new hu({props:j}),Yn.push(()=>Vs(l,"searchTerm",Q)),l.$on("input",t[11]);let W=t[0],B=[];for(let C=0;C<W.length;C+=1)B[C]=Bd($d(t,W,C));const x=C=>J(B[C],1,1,()=>{B[C]=null});let V=t[1]>1&&Vd(t),le=[3,2,1],Z=[];for(let C=0;C<3;C+=1)Z[C]=qd(Md(t,le,C));let ce=Array(3),ie=[];for(let C=0;C<ce.length;C+=1)ie[C]=zd(Ld(t,ce,C));let $=t[1]<t[5]&&Kd(t);return{c(){e=p("h2"),s=S(n),i=S(" Propiedades a Mostrar"),r=w(),o=p("button"),o.textContent="Alta de Propiedad",a=w(),ge(l.$$.fragment),h=w(),f=p("div"),d=p("main");for(let C=0;C<B.length;C+=1)B[C].c();g=w(),_=p("div"),v=p("div"),y=p("ul"),V&&V.c(),E=w();for(let C=0;C<3;C+=1)Z[C].c();T=w(),L=p("li"),D=p("span"),U=S(t[1]),G=w();for(let C=0;C<ie.length;C+=1)ie[C].c();N=w(),$&&$.c(),m(d,"id","bookshelf"),m(d,"class","svelte-nygjwm"),m(y,"class","pagi__options"),m(v,"class","pagi__Item"),m(_,"class","container pagination"),m(f,"class","mosPag")},m(C,M){k(C,e,M),u(e,s),u(e,i),k(C,r,M),k(C,o,M),k(C,a,M),fe(l,C,M),k(C,h,M),k(C,f,M),u(f,d);for(let X=0;X<B.length;X+=1)B[X].m(d,null);u(f,g),u(f,_),u(_,v),u(v,y),V&&V.m(y,null),u(y,E);for(let X=0;X<3;X+=1)Z[X].m(y,null);u(y,T),u(y,L),u(L,D),u(D,U),u(y,G);for(let X=0;X<ie.length;X+=1)ie[X].m(y,null);u(y,N),$&&$.m(y,null),F=!0,K||(R=q(o,"click",t[10]),K=!0)},p(C,M){(!F||M&1)&&n!==(n=C[0].length+"")&&re(s,n);const X={};if(!c&&M&8&&(c=!0,X.searchTerm=C[3],Bs(()=>c=!1)),l.$set(X),M&533){W=C[0];let O;for(O=0;O<W.length;O+=1){const se=$d(C,W,O);B[O]?(B[O].p(se,M),H(B[O],1)):(B[O]=Bd(se),B[O].c(),H(B[O],1),B[O].m(d,null))}for(bt(),O=W.length;O<B.length;O+=1)x(O);wt()}if(C[1]>1?V?V.p(C,M):(V=Vd(C),V.c(),V.m(y,E)):V&&(V.d(1),V=null),M&258){le=[3,2,1];let O;for(O=0;O<3;O+=1){const se=Md(C,le,O);Z[O]?Z[O].p(se,M):(Z[O]=qd(se),Z[O].c(),Z[O].m(y,T))}for(;O<3;O+=1)Z[O].d(1)}if((!F||M&2)&&re(U,C[1]),M&290){ce=Array(3);let O;for(O=0;O<ce.length;O+=1){const se=Ld(C,ce,O);ie[O]?ie[O].p(se,M):(ie[O]=zd(se),ie[O].c(),ie[O].m(y,N))}for(;O<ie.length;O+=1)ie[O].d(1);ie.length=ce.length}C[1]<C[5]?$?$.p(C,M):($=Kd(C),$.c(),$.m(y,null)):$&&($.d(1),$=null)},i(C){if(!F){H(l.$$.fragment,C);for(let M=0;M<W.length;M+=1)H(B[M]);F=!0}},o(C){J(l.$$.fragment,C),B=B.filter(Boolean);for(let M=0;M<B.length;M+=1)J(B[M]);F=!1},d(C){C&&b(e),C&&b(r),C&&b(o),C&&b(a),de(l,C),C&&b(h),C&&b(f),Ve(B,C),V&&V.d(),Ve(Z,C),Ve(ie,C),$&&$.d(),K=!1,R()}}}function Fd(t){let e,n,s,i,r,o,a;const l=[t[12]];let c={};for(let f=0;f<l.length;f+=1)c=Ot(c,l[f]);n=new F_({props:c});function h(){return t[15](t[12])}return{c(){e=p("section"),ge(n.$$.fragment),s=w(),m(e,"class","property svelte-nygjwm")},m(f,d){k(f,e,d),fe(n,e,null),u(e,s),r=!0,o||(a=q(e,"click",h),o=!0)},p(f,d){t=f;const g=d&1?_n(l,[Xn(t[12])]):{};n.$set(g)},i(f){r||(H(n.$$.fragment,f),xe(()=>{i||(i=fn(e,Ii,{duration:500,easing:Ti},!0)),i.run(1)}),r=!0)},o(f){J(n.$$.fragment,f),i||(i=fn(e,Ii,{duration:500,easing:Ti},!1)),i.run(0),r=!1},d(f){f&&b(e),de(n),f&&i&&i.end(),o=!1,a()}}}function Bd(t){let e,n,s=t[26]>=t[4]&&t[26]<t[2]&&Fd(t);return{c(){s&&s.c(),e=nn()},m(i,r){s&&s.m(i,r),k(i,e,r),n=!0},p(i,r){i[26]>=i[4]&&i[26]<i[2]?s?(s.p(i,r),r&20&&H(s,1)):(s=Fd(i),s.c(),H(s,1),s.m(e.parentNode,e)):s&&(bt(),J(s,1,1,()=>{s=null}),wt())},i(i){n||(H(s),n=!0)},o(i){J(s),n=!1},d(i){s&&s.d(i),i&&b(e)}}}function Vd(t){let e,n,s,i,r,o,a,l,c;return{c(){e=p("li"),n=p("a"),n.textContent="first",s=w(),i=p("li"),r=p("a"),o=S("previous"),m(n,"href","/blog"),m(r,"href",a="/blog/"+(t[1]-1))},m(h,f){k(h,e,f),u(e,n),k(h,s,f),k(h,i,f),u(i,r),u(r,o),l||(c=[q(n,"click",gn(t[16])),q(r,"click",gn(t[17]))],l=!0)},p(h,f){f&2&&a!==(a="/blog/"+(h[1]-1))&&m(r,"href",a)},d(h){h&&b(e),h&&b(s),h&&b(i),l=!1,Ze(c)}}}function jd(t){let e,n,s=t[1]-t[26]+"",i,r,o,a;function l(){return t[18](t[26])}return{c(){e=p("li"),n=p("a"),i=S(s),m(n,"href",r="/blog/"+(t[1]-t[26]))},m(c,h){k(c,e,h),u(e,n),u(n,i),o||(a=q(n,"click",gn(l)),o=!0)},p(c,h){t=c,h&2&&s!==(s=t[1]-t[26]+"")&&re(i,s),h&2&&r!==(r="/blog/"+(t[1]-t[26]))&&m(n,"href",r)},d(c){c&&b(e),o=!1,a()}}}function qd(t){let e,n=t[1]-t[26]>0&&jd(t);return{c(){n&&n.c(),e=nn()},m(s,i){n&&n.m(s,i),k(s,e,i)},p(s,i){s[1]-s[26]>0?n?n.p(s,i):(n=jd(s),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(s){n&&n.d(s),s&&b(e)}}}function Hd(t){let e,n,s=t[1]+(t[26]+1)+"",i,r,o,a;function l(){return t[19](t[26])}return{c(){e=p("li"),n=p("a"),i=S(s),m(n,"href",r="/blog/"+(t[1]+(t[26]+1)))},m(c,h){k(c,e,h),u(e,n),u(n,i),o||(a=q(n,"click",gn(l)),o=!0)},p(c,h){t=c,h&2&&s!==(s=t[1]+(t[26]+1)+"")&&re(i,s),h&2&&r!==(r="/blog/"+(t[1]+(t[26]+1)))&&m(n,"href",r)},d(c){c&&b(e),o=!1,a()}}}function zd(t){let e,n=t[1]+(t[26]+1)<=t[5]&&Hd(t);return{c(){n&&n.c(),e=nn()},m(s,i){n&&n.m(s,i),k(s,e,i)},p(s,i){s[1]+(s[26]+1)<=s[5]?n?n.p(s,i):(n=Hd(s),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(s){n&&n.d(s),s&&b(e)}}}function Kd(t){let e,n,s,i,r,o,a,l,c,h,f;return{c(){e=p("li"),n=p("a"),s=S("next"),r=w(),o=p("li"),a=p("a"),l=S("last"),m(n,"href",i="/blog/"+(t[1]+1)),m(a,"href",c="/blog/"+t[5])},m(d,g){k(d,e,g),u(e,n),u(n,s),k(d,r,g),k(d,o,g),u(o,a),u(a,l),h||(f=[q(n,"click",gn(t[20])),q(a,"click",gn(t[21]))],h=!0)},p(d,g){g&2&&i!==(i="/blog/"+(d[1]+1))&&m(n,"href",i),g&32&&c!==(c="/blog/"+d[5])&&m(a,"href",c)},d(d){d&&b(e),d&&b(r),d&&b(o),h=!1,Ze(f)}}}function Gd(t){let e,n,s;const i=[t[7]];let r={};for(let o=0;o<i.length;o+=1)r=Ot(r,i[o]);return n=new tC({props:r}),{c(){e=p("div"),ge(n.$$.fragment)},m(o,a){k(o,e,a),fe(n,e,null),s=!0},p(o,a){const l=a&128?_n(i,[Xn(o[7])]):{};n.$set(l)},i(o){s||(H(n.$$.fragment,o),s=!0)},o(o){J(n.$$.fragment,o),s=!1},d(o){o&&b(e),de(n)}}}function Wd(t){let e,n,s;const i=[t[7]];let r={};for(let o=0;o<i.length;o+=1)r=Ot(r,i[o]);return n=new H_({props:r}),{c(){e=p("div"),ge(n.$$.fragment),m(e,"class","container")},m(o,a){k(o,e,a),fe(n,e,null),s=!0},p(o,a){const l=a&128?_n(i,[Xn(o[7])]):{};n.$set(l)},i(o){s||(H(n.$$.fragment,o),s=!0)},o(o){J(n.$$.fragment,o),s=!1},d(o){o&&b(e),de(n)}}}function Qd(t){let e,n,s;return n=new H_({}),{c(){e=p("div"),ge(n.$$.fragment),m(e,"class","container")},m(i,r){k(i,e,r),fe(n,e,null),s=!0},i(i){s||(H(n.$$.fragment,i),s=!0)},o(i){J(n.$$.fragment,i),s=!1},d(i){i&&b(e),de(n)}}}function hC(t){let e,n,s,i,r,o,a,l,c,h,f,d=t[6]==="start"&&Ud(t),g=t[6]==="propSelect"&&Gd(t),_=t[6]==="propEditing"&&Wd(t),v=t[6]==="propAdding"&&Qd();return{c(){e=p("div"),n=p("div"),s=p("h1"),s.textContent="Propiedades",i=w(),r=p("img"),a=w(),d&&d.c(),l=w(),g&&g.c(),c=w(),_&&_.c(),h=w(),v&&v.c(),st(r.src,o=L_)||m(r,"src",o),m(r,"alt","propiedad"),m(r,"class","imgTitle svelte-nygjwm"),m(e,"class","container")},m(y,E){k(y,e,E),u(e,n),u(n,s),u(n,i),u(n,r),u(e,a),d&&d.m(e,null),u(e,l),g&&g.m(e,null),u(e,c),_&&_.m(e,null),u(e,h),v&&v.m(e,null),f=!0},p(y,[E]){y[6]==="start"?d?(d.p(y,E),E&64&&H(d,1)):(d=Ud(y),d.c(),H(d,1),d.m(e,l)):d&&(bt(),J(d,1,1,()=>{d=null}),wt()),y[6]==="propSelect"?g?(g.p(y,E),E&64&&H(g,1)):(g=Gd(y),g.c(),H(g,1),g.m(e,c)):g&&(bt(),J(g,1,1,()=>{g=null}),wt()),y[6]==="propEditing"?_?(_.p(y,E),E&64&&H(_,1)):(_=Wd(y),_.c(),H(_,1),_.m(e,h)):_&&(bt(),J(_,1,1,()=>{_=null}),wt()),y[6]==="propAdding"?v?E&64&&H(v,1):(v=Qd(),v.c(),H(v,1),v.m(e,null)):v&&(bt(),J(v,1,1,()=>{v=null}),wt())},i(y){f||(H(d),H(g),H(_),H(v),f=!0)},o(y){J(d),J(g),J(_),J(v),f=!1},d(y){y&&b(e),d&&d.d(),g&&g.d(),_&&_.d(),v&&v.d()}}}let il=20;function fC(t){t.sort((e,n)=>new Date(e.createdAt)<new Date(n.createdAt)?1:new Date(e.createdAt)>new Date(n.createdAt)?-1:0)}function dC(t,e,n){let s,i,r,o,a,l;Oe(t,Ke,R=>n(6,a=R)),Oe(t,We,R=>n(7,l=R));let c,h=[],f;Ce(Ke,a="start",a);let d=1;const g=R=>{n(1,d=R)},_=Ta(Yt(lt,"properties"),R=>{n(0,h=R.docs.map(Q=>({...Q.data(),id:Q.id}))),fC(h)},R=>{console.log(R)});_r(_);function v(R){console.log(R),Ce(We,l=R,l),Ce(Ke,a="propSelect",a)}function y(){Ce(Ke,a="propAdding",a)}function E(){return n(0,h=Fs.filter(R=>(R.nameProperty+" "+R.colonia).toLowerCase().includes(c.toLowerCase())))}function T(R){c=R,n(3,c)}const L=R=>v(R),D=()=>g(1),U=()=>g(d-1),G=R=>g(d-R),N=R=>g(d+(R+1)),F=()=>g(d+1),K=()=>g(i);return t.$$.update=()=>{t.$$.dirty&1&&n(13,s=h.length),t.$$.dirty&8192&&n(5,i=Math.ceil(s/il)),t.$$.dirty&2&&n(2,r=d*il),t.$$.dirty&4&&n(4,o=r-il)},[h,d,r,c,o,i,a,l,g,v,y,E,f,s,T,L,D,U,G,N,F,K]}class pC extends Xe{constructor(e){super(),Ye(this,e,dC,hC,Ge,{})}}function mC(t){let e;return{c(){e=p("h1"),e.textContent="Captacion"},m(n,s){k(n,e,s)},p:he,i:he,o:he,d(n){n&&b(e)}}}class gC extends Xe{constructor(e){super(),Ye(this,e,null,mC,Ge,{})}}function Yd(t,e,n){const s=t.slice();return s[0]=e[n],s}function _C(t){let e,n=t[0].id+"",s;return{c(){e=p("h3"),s=S(n)},m(i,r){k(i,e,r),u(e,s)},p:he,d(i){i&&b(e)}}}function Xd(t){let e,n=!t[0].selecTP&&_C(t);return{c(){n&&n.c(),e=nn()},m(s,i){n&&n.m(s,i),k(s,e,i)},p(s,i){s[0].selecTP||n.p(s,i)},d(s){n&&n.d(s),s&&b(e)}}}function vC(t){let e,n,s,i=Ei,r=[];for(let o=0;o<i.length;o+=1)r[o]=Xd(Yd(t,i,o));return{c(){e=p("div"),n=p("h1"),n.textContent="Estas en About",s=w();for(let o=0;o<r.length;o+=1)r[o].c();m(e,"class","cont")},m(o,a){k(o,e,a),u(e,n),u(e,s);for(let l=0;l<r.length;l+=1)r[l].m(e,null)},p(o,[a]){if(a&0){i=Ei;let l;for(l=0;l<i.length;l+=1){const c=Yd(o,i,l);r[l]?r[l].p(c,a):(r[l]=Xd(c),r[l].c(),r[l].m(e,null))}for(;l<r.length;l+=1)r[l].d(1);r.length=i.length}},i:he,o:he,d(o){o&&b(e),Ve(r,o)}}}function yC(t){return console.log(Ei),Ei.forEach(e=>{e.selecTP||console.log(e.name,e.lastname)}),[]}class bC extends Xe{constructor(e){super(),Ye(this,e,yC,vC,Ge,{})}}function wC(t){let e,n,s,i;return{c(){e=p("div"),n=p("div"),s=S(t[0]),m(n,"id","snackbar"),m(n,"class",i=gu(t[1]?"animation-in":"not-show")+" svelte-1e3w4r3")},m(r,o){k(r,e,o),u(e,n),u(n,s)},p(r,[o]){o&1&&re(s,r[0]),o&2&&i!==(i=gu(r[1]?"animation-in":"not-show")+" svelte-1e3w4r3")&&m(n,"class",i)},i:he,o:he,d(r){r&&b(e)}}}function kC(t,e,n){let{message:s=""}=e,{show:i=!1}=e;return t.$$set=r=>{"message"in r&&n(0,s=r.message),"show"in r&&n(1,i=r.show)},[s,i]}class EC extends Xe{constructor(e){super(),Ye(this,e,kC,wC,Ge,{message:0,show:1})}}function TC(t){let e;return{c(){e=S("Registrarse")},m(n,s){k(n,e,s)},d(n){n&&b(e)}}}function IC(t){let e,n,s,i,r,o,a,l,c,h,f,d,g,_,v,y,E,T,L,D,U,G,N,F,K,R,Q,j,W,B,x;return n=new EC({props:{message:t[0],show:t[1]}}),j=new un({props:{to:"/register",$$slots:{default:[TC]},$$scope:{ctx:t}}}),{c(){e=p("div"),ge(n.$$.fragment),s=w(),i=p("br"),r=p("br"),o=p("br"),a=w(),l=p("div"),c=p("h1"),c.textContent="Inicia sesi\xF3n en tu cuenta",h=w(),f=p("div"),d=p("input"),g=w(),_=p("div"),v=p("input"),y=w(),E=p("br"),T=w(),L=p("div"),D=p("button"),D.textContent="Iniciar sesi\xF3n",U=w(),G=p("p"),G.textContent="O tambi\xE9n",N=w(),F=p("br"),K=w(),R=p("p"),Q=S("\xBFA\xFAn no tienes cuenta? "),ge(j.$$.fragment),m(c,"class","text-center text-login svelte-ftg4em"),m(d,"name","email"),m(d,"type","text"),m(d,"class","input-form svelte-ftg4em"),m(d,"placeholder","Correo"),m(f,"class","center svelte-ftg4em"),m(v,"name","password"),m(v,"type","password"),m(v,"class","input-form svelte-ftg4em"),m(v,"placeholder","Contrase\xF1a"),m(_,"class","center svelte-ftg4em"),m(D,"class","button-signup fondo-color-signup svelte-ftg4em"),m(L,"class","center svelte-ftg4em"),m(G,"class","text-center svelte-ftg4em"),m(R,"class","text-center svelte-ftg4em"),m(l,"class","form-signin svelte-ftg4em")},m(V,le){k(V,e,le),fe(n,e,null),u(e,s),u(e,i),u(e,r),u(e,o),u(e,a),u(e,l),u(l,c),u(l,h),u(l,f),u(f,d),u(l,g),u(l,_),u(_,v),u(l,y),u(l,E),u(l,T),u(l,L),u(L,D),u(l,U),u(l,G),u(l,N),u(l,F),u(l,K),u(l,R),u(R,Q),fe(j,R,null),W=!0,B||(x=[q(d,"input",t[4]),q(v,"input",t[5]),q(D,"click",t[3])],B=!0)},p(V,[le]){const Z={};le&1&&(Z.message=V[0]),le&2&&(Z.show=V[1]),n.$set(Z);const ce={};le&512&&(ce.$$scope={dirty:le,ctx:V}),j.$set(ce)},i(V){W||(H(n.$$.fragment,V),H(j.$$.fragment,V),W=!0)},o(V){J(n.$$.fragment,V),J(j.$$.fragment,V),W=!1},d(V){V&&b(e),de(n),de(j),B=!1,Ze(x)}}}function CC(t,e,n){const s=Ys();let i={email:"",password:""},r="",o=!1;const a=d=>{n(0,r=d),n(1,o=!0),setTimeout(()=>{n(1,o=!1)},2800)},l=d=>{i={...i,[d.target.name]:d.target.value}};return[r,o,l,async()=>{try{await TE(N_,i.email,i.password),s("/")}catch(d){d.message==="Firebase: Error (auth/wrong-password)."&&a("Contrase\xF1a incorrecta")}},d=>l(d),d=>l(d)]}class SC extends Xe{constructor(e){super(),Ye(this,e,CC,IC,Ge,{})}}class AC extends Xe{constructor(e){super(),Ye(this,e,null,null,Ge,{})}}function DC(t){let e;return{c(){e=S("Home")},m(n,s){k(n,e,s)},d(n){n&&b(e)}}}function RC(t){let e;return{c(){e=S("Contactos")},m(n,s){k(n,e,s)},d(n){n&&b(e)}}}function PC(t){let e;return{c(){e=S("Propiedades")},m(n,s){k(n,e,s)},d(n){n&&b(e)}}}function NC(t){let e;return{c(){e=S("Agenda")},m(n,s){k(n,e,s)},d(n){n&&b(e)}}}function OC(t){let e;return{c(){e=S("LogOut")},m(n,s){k(n,e,s)},d(n){n&&b(e)}}}function LC(t){let e;return{c(){e=S("About")},m(n,s){k(n,e,s)},d(n){n&&b(e)}}}function MC(t){let e;return{c(){e=S("Registro")},m(n,s){k(n,e,s)},d(n){n&&b(e)}}}function $C(t){let e;return{c(){e=S("Login")},m(n,s){k(n,e,s)},d(n){n&&b(e)}}}function UC(t){let e,n;return e=new yI({}),{c(){ge(e.$$.fragment)},m(s,i){fe(e,s,i),n=!0},i(s){n||(H(e.$$.fragment,s),n=!0)},o(s){J(e.$$.fragment,s),n=!1},d(s){de(e,s)}}}function FC(t){let e,n;return e=new JI({}),{c(){ge(e.$$.fragment)},m(s,i){fe(e,s,i),n=!0},i(s){n||(H(e.$$.fragment,s),n=!0)},o(s){J(e.$$.fragment,s),n=!1},d(s){de(e,s)}}}function BC(t){let e,n;return e=new pC({}),{c(){ge(e.$$.fragment)},m(s,i){fe(e,s,i),n=!0},i(s){n||(H(e.$$.fragment,s),n=!0)},o(s){J(e.$$.fragment,s),n=!1},d(s){de(e,s)}}}function VC(t){let e,n;return e=new gC({}),{c(){ge(e.$$.fragment)},m(s,i){fe(e,s,i),n=!0},i(s){n||(H(e.$$.fragment,s),n=!0)},o(s){J(e.$$.fragment,s),n=!1},d(s){de(e,s)}}}function jC(t){let e,n;return e=new uI({}),{c(){ge(e.$$.fragment)},m(s,i){fe(e,s,i),n=!0},i(s){n||(H(e.$$.fragment,s),n=!0)},o(s){J(e.$$.fragment,s),n=!1},d(s){de(e,s)}}}function qC(t){let e,n;return e=new fI({}),{c(){ge(e.$$.fragment)},m(s,i){fe(e,s,i),n=!0},i(s){n||(H(e.$$.fragment,s),n=!0)},o(s){J(e.$$.fragment,s),n=!1},d(s){de(e,s)}}}function HC(t){let e,n;return e=new bC({}),{c(){ge(e.$$.fragment)},m(s,i){fe(e,s,i),n=!0},i(s){n||(H(e.$$.fragment,s),n=!0)},o(s){J(e.$$.fragment,s),n=!1},d(s){de(e,s)}}}function zC(t){let e,n;return e=new AC({}),{c(){ge(e.$$.fragment)},m(s,i){fe(e,s,i),n=!0},i(s){n||(H(e.$$.fragment,s),n=!0)},o(s){J(e.$$.fragment,s),n=!1},d(s){de(e,s)}}}function KC(t){let e,n;return e=new SC({}),{c(){ge(e.$$.fragment)},m(s,i){fe(e,s,i),n=!0},i(s){n||(H(e.$$.fragment,s),n=!0)},o(s){J(e.$$.fragment,s),n=!1},d(s){de(e,s)}}}function GC(t){let e,n;return e=new iI({}),{c(){ge(e.$$.fragment)},m(s,i){fe(e,s,i),n=!0},i(s){n||(H(e.$$.fragment,s),n=!0)},o(s){J(e.$$.fragment,s),n=!1},d(s){de(e,s)}}}function WC(t){let e,n,s,i,r,o,a,l,c,h,f,d,g,_,v,y,E,T,L,D,U,G,N,F,K,R,Q,j,W,B,x,V,le,Z,ce,ie,$,C,M,X,O,se,De,P,ue,be,qe;return d=new un({props:{to:"/",$$slots:{default:[DC]},$$scope:{ctx:t}}}),_=new un({props:{to:"contactos",$$slots:{default:[RC]},$$scope:{ctx:t}}}),y=new un({props:{to:"propiedades",$$slots:{default:[PC]},$$scope:{ctx:t}}}),T=new un({props:{to:"agenda",$$slots:{default:[NC]},$$scope:{ctx:t}}}),D=new un({props:{to:"/about",$$slots:{default:[OC]},$$scope:{ctx:t}}}),D.$on("click",YC),G=new un({props:{to:"about",$$slots:{default:[LC]},$$scope:{ctx:t}}}),F=new un({props:{to:"register",$$slots:{default:[MC]},$$scope:{ctx:t}}}),R=new un({props:{to:"login",$$slots:{default:[$C]},$$scope:{ctx:t}}}),j=new Rn({props:{path:"/",$$slots:{default:[UC]},$$scope:{ctx:t}}}),B=new Rn({props:{path:"/contactos",$$slots:{default:[FC]},$$scope:{ctx:t}}}),V=new Rn({props:{path:"propiedades",$$slots:{default:[BC]},$$scope:{ctx:t}}}),Z=new Rn({props:{path:"captacion",$$slots:{default:[VC]},$$scope:{ctx:t}}}),ie=new Rn({props:{path:"agenda",$$slots:{default:[jC]},$$scope:{ctx:t}}}),C=new Rn({props:{path:"sinergias",$$slots:{default:[qC]},$$scope:{ctx:t}}}),X=new Rn({props:{path:"about",$$slots:{default:[HC]},$$scope:{ctx:t}}}),se=new Rn({props:{path:"logout",$$slots:{default:[zC]},$$scope:{ctx:t}}}),P=new Rn({props:{path:"login",$$slots:{default:[KC]},$$scope:{ctx:t}}}),be=new Rn({props:{path:"register",$$slots:{default:[GC]},$$scope:{ctx:t}}}),{c(){e=p("div"),n=p("img"),i=w(),r=p("label"),o=p("img"),l=w(),c=p("input"),h=w(),f=p("div"),ge(d.$$.fragment),g=w(),ge(_.$$.fragment),v=w(),ge(y.$$.fragment),E=w(),ge(T.$$.fragment),L=w(),ge(D.$$.fragment),U=w(),ge(G.$$.fragment),N=w(),ge(F.$$.fragment),K=w(),ge(R.$$.fragment),Q=w(),ge(j.$$.fragment),W=w(),ge(B.$$.fragment),x=w(),ge(V.$$.fragment),le=w(),ge(Z.$$.fragment),ce=w(),ge(ie.$$.fragment),$=w(),ge(C.$$.fragment),M=w(),ge(X.$$.fragment),O=w(),ge(se.$$.fragment),De=w(),ge(P.$$.fragment),ue=w(),ge(be.$$.fragment),st(n.src,s=Rp)||m(n,"src",s),m(n,"alt","MatchHome"),m(n,"class","nav__logo svelte-1viw6tr"),st(o.src,a=cy)||m(o,"src",a),m(o,"class","nav__img svelte-1viw6tr"),m(o,"alt","menu"),m(r,"class","nav__label svelte-1viw6tr"),m(r,"for","menu"),m(c,"type","checkbox"),m(c,"id","menu"),m(c,"class","nav__input svelte-1viw6tr"),m(f,"class","nav__menu svelte-1viw6tr"),m(e,"class","nav__container svelte-1viw6tr")},m(A,Y){k(A,e,Y),u(e,n),u(e,i),u(e,r),u(r,o),u(e,l),u(e,c),u(e,h),u(e,f),fe(d,f,null),u(f,g),fe(_,f,null),u(f,v),fe(y,f,null),u(f,E),fe(T,f,null),u(f,L),fe(D,f,null),u(f,U),fe(G,f,null),u(f,N),fe(F,f,null),u(f,K),fe(R,f,null),k(A,Q,Y),fe(j,A,Y),k(A,W,Y),fe(B,A,Y),k(A,x,Y),fe(V,A,Y),k(A,le,Y),fe(Z,A,Y),k(A,ce,Y),fe(ie,A,Y),k(A,$,Y),fe(C,A,Y),k(A,M,Y),fe(X,A,Y),k(A,O,Y),fe(se,A,Y),k(A,De,Y),fe(P,A,Y),k(A,ue,Y),fe(be,A,Y),qe=!0},p(A,Y){const Me={};Y&2&&(Me.$$scope={dirty:Y,ctx:A}),d.$set(Me);const z={};Y&2&&(z.$$scope={dirty:Y,ctx:A}),_.$set(z);const pe={};Y&2&&(pe.$$scope={dirty:Y,ctx:A}),y.$set(pe);const oe={};Y&2&&(oe.$$scope={dirty:Y,ctx:A}),T.$set(oe);const Je={};Y&2&&(Je.$$scope={dirty:Y,ctx:A}),D.$set(Je);const yn={};Y&2&&(yn.$$scope={dirty:Y,ctx:A}),G.$set(yn);const St={};Y&2&&(St.$$scope={dirty:Y,ctx:A}),F.$set(St);const At={};Y&2&&(At.$$scope={dirty:Y,ctx:A}),R.$set(At);const sn={};Y&2&&(sn.$$scope={dirty:Y,ctx:A}),j.$set(sn);const Zt={};Y&2&&(Zt.$$scope={dirty:Y,ctx:A}),B.$set(Zt);const Mt={};Y&2&&(Mt.$$scope={dirty:Y,ctx:A}),V.$set(Mt);const Ht={};Y&2&&(Ht.$$scope={dirty:Y,ctx:A}),Z.$set(Ht);const ut={};Y&2&&(ut.$$scope={dirty:Y,ctx:A}),ie.$set(ut);const pn={};Y&2&&(pn.$$scope={dirty:Y,ctx:A}),C.$set(pn);const ot={};Y&2&&(ot.$$scope={dirty:Y,ctx:A}),X.$set(ot);const ht={};Y&2&&(ht.$$scope={dirty:Y,ctx:A}),se.$set(ht);const rn={};Y&2&&(rn.$$scope={dirty:Y,ctx:A}),P.$set(rn);const ft={};Y&2&&(ft.$$scope={dirty:Y,ctx:A}),be.$set(ft)},i(A){qe||(H(d.$$.fragment,A),H(_.$$.fragment,A),H(y.$$.fragment,A),H(T.$$.fragment,A),H(D.$$.fragment,A),H(G.$$.fragment,A),H(F.$$.fragment,A),H(R.$$.fragment,A),H(j.$$.fragment,A),H(B.$$.fragment,A),H(V.$$.fragment,A),H(Z.$$.fragment,A),H(ie.$$.fragment,A),H(C.$$.fragment,A),H(X.$$.fragment,A),H(se.$$.fragment,A),H(P.$$.fragment,A),H(be.$$.fragment,A),qe=!0)},o(A){J(d.$$.fragment,A),J(_.$$.fragment,A),J(y.$$.fragment,A),J(T.$$.fragment,A),J(D.$$.fragment,A),J(G.$$.fragment,A),J(F.$$.fragment,A),J(R.$$.fragment,A),J(j.$$.fragment,A),J(B.$$.fragment,A),J(V.$$.fragment,A),J(Z.$$.fragment,A),J(ie.$$.fragment,A),J(C.$$.fragment,A),J(X.$$.fragment,A),J(se.$$.fragment,A),J(P.$$.fragment,A),J(be.$$.fragment,A),qe=!1},d(A){A&&b(e),de(d),de(_),de(y),de(T),de(D),de(G),de(F),de(R),A&&b(Q),de(j,A),A&&b(W),de(B,A),A&&b(x),de(V,A),A&&b(le),de(Z,A),A&&b(ce),de(ie,A),A&&b($),de(C,A),A&&b(M),de(X,A),A&&b(O),de(se,A),A&&b(De),de(P,A),A&&b(ue),de(be,A)}}}function QC(t){let e,n,s;return n=new Zl({props:{$$slots:{default:[WC]},$$scope:{ctx:t}}}),{c(){e=p("nav"),ge(n.$$.fragment),m(e,"class","nav svelte-1viw6tr")},m(i,r){k(i,e,r),fe(n,e,null),s=!0},p(i,[r]){const o={};r&2&&(o.$$scope={dirty:r,ctx:i}),n.$set(o)},i(i){s||(H(n.$$.fragment,i),s=!0)},o(i){J(n.$$.fragment,i),s=!1},d(i){i&&b(e),de(n)}}}async function YC(){}function XC(t){return eI.subscribe(e=>{}),[]}class JC extends Xe{constructor(e){super(),Ye(this,e,XC,QC,Ge,{})}}function Jd(t){let e,n,s,i,r,o,a;return{c(){e=p("div"),n=p("h1"),n.textContent="Bienvendo a",s=w(),i=p("img"),o=w(),a=p("div"),a.innerHTML=`<p class="desc__intro svelte-1kx2964">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod aut aliquam, expedita perferendis consequatur modi omnis! Nostrum iste necessitatibus quisquam numquam, aliquam ipsum. Sit, similique quis. Fuga vitae possimus quisquam quam. Unde accusantium neque veniam reprehenderit, laborum, magni ut quasi asperiores a amet fugiat non, sapiente obcaecati voluptas ab! Nostrum!</p> 
        <p><strong>www.matchhome.net</strong></p>`,m(n,"class","title svelte-1kx2964"),st(i.src,r=Rp)||m(i,"src",r),m(i,"alt","MatchHome"),m(i,"class","svelte-1kx2964"),m(a,"class",""),m(e,"class","intro svelte-1kx2964")},m(l,c){k(l,e,c),u(e,n),u(e,s),u(e,i),u(e,o),u(e,a)},p:he,d(l){l&&b(e)}}}function xC(t){let e,n,s,i,r;n=new JC({});let o=t[0]&&Jd();return{c(){e=p("nav"),ge(n.$$.fragment),s=w(),i=p("body"),o&&o.c(),m(e,"class","navBar")},m(a,l){k(a,e,l),fe(n,e,null),k(a,s,l),k(a,i,l),o&&o.m(i,null),r=!0},p(a,[l]){a[0]?o?o.p(a,l):(o=Jd(),o.c(),o.m(i,null)):o&&(o.d(1),o=null)},i(a){r||(H(n.$$.fragment,a),r=!0)},o(a){J(n.$$.fragment,a),r=!1},d(a){a&&b(e),de(n),a&&b(s),a&&b(i),o&&o.d()}}}function ZC(t,e,n){let s=!0;return setTimeout(()=>{n(0,s=!1)},1500),[s]}class eS extends Xe{constructor(e){super(),Ye(this,e,ZC,xC,Ge,{})}}new eS({target:document.getElementById("app")});
