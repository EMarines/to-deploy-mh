(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function fe(){}const tp=t=>t;function Ot(t,e){for(const n in e)t[n]=e[n];return t}function np(t){return t()}function _u(){return Object.create(null)}function Je(t){t.forEach(np)}function Qo(t){return typeof t=="function"}function Ge(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let Xr;function tt(t,e){return Xr||(Xr=document.createElement("a")),Xr.href=e,t===Xr.href}function G_(t){return Object.keys(t).length===0}function zl(t,...e){if(t==null)return fe;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function pi(t){let e;return zl(t,n=>e=n)(),e}function Ne(t,e,n){t.$$.on_destroy.push(zl(e,n))}function Kl(t,e,n,s){if(t){const i=sp(t,e,n,s);return t[0](i)}}function sp(t,e,n,s){return t[1]&&s?Ot(n.ctx.slice(),t[1](s(e))):n.ctx}function Gl(t,e,n,s){if(t[2]&&s){const i=t[2](s(n));if(e.dirty===void 0)return i;if(typeof i=="object"){const r=[],o=Math.max(e.dirty.length,i.length);for(let a=0;a<o;a+=1)r[a]=e.dirty[a]|i[a];return r}return e.dirty|i}return e.dirty}function Wl(t,e,n,s,i,r){if(i){const o=sp(e,n,s,r);t.p(o,i)}}function Ql(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let s=0;s<n;s++)e[s]=-1;return e}return-1}function _o(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function vo(t,e){const n={};e=new Set(e);for(const s in t)!e.has(s)&&s[0]!=="$"&&(n[s]=t[s]);return n}function vu(t){return t==null?"":t}function Ce(t,e,n){return t.set(n),e}const ip=typeof window<"u";let W_=ip?()=>window.performance.now():()=>Date.now(),Yl=ip?t=>requestAnimationFrame(t):fe;const ci=new Set;function rp(t){ci.forEach(e=>{e.c(t)||(ci.delete(e),e.f())}),ci.size!==0&&Yl(rp)}function Q_(t){let e;return ci.size===0&&Yl(rp),{promise:new Promise(n=>{ci.add(e={c:t,f:n})}),abort(){ci.delete(e)}}}function u(t,e){t.appendChild(e)}function op(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Y_(t){const e=p("style");return X_(op(t),e),e.sheet}function X_(t,e){return u(t.head||t,e),e.sheet}function w(t,e,n){t.insertBefore(e,n||null)}function b(t){t.parentNode.removeChild(t)}function Ve(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function p(t){return document.createElement(t)}function S(t){return document.createTextNode(t)}function k(){return S(" ")}function nn(){return S("")}function j(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function _n(t){return function(e){return e.preventDefault(),t.call(this,e)}}function m(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function On(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const s in e)e[s]==null?t.removeAttribute(s):s==="style"?t.style.cssText=e[s]:s==="__value"?t.value=t[s]=e[s]:n[s]&&n[s].set?t[s]=e[s]:m(t,s,e[s])}function Ft(t,e,n){const s=new Set;for(let i=0;i<t.length;i+=1)t[i].checked&&s.add(t[i].__value);return n||s.delete(e),Array.from(s)}function ds(t){return t===""?null:+t}function x_(t){return Array.from(t.childNodes)}function re(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function ye(t,e){t.value=e==null?"":e}function Ue(t,e){for(let n=0;n<t.options.length;n+=1){const s=t.options[n];if(s.__value===e){s.selected=!0;return}}t.selectedIndex=-1}function Ut(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}function bs(t,e,n){t.classList[n?"add":"remove"](e)}function ap(t,e,{bubbles:n=!1,cancelable:s=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,s,e),i}function yu(t,e){return new t(e)}const yo=new Map;let bo=0;function J_(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Z_(t,e){const n={stylesheet:Y_(e),rules:{}};return yo.set(t,n),n}function bu(t,e,n,s,i,r,o,a=0){const l=16.666/s;let c=`{
`;for(let y=0;y<=1;y+=l){const E=e+(n-e)*r(y);c+=y*100+`%{${o(E,1-E)}}
`}const h=c+`100% {${o(n,1-n)}}
}`,f=`__svelte_${J_(h)}_${a}`,d=op(t),{stylesheet:g,rules:_}=yo.get(d)||Z_(d,t);_[f]||(_[f]=!0,g.insertRule(`@keyframes ${f} ${h}`,g.cssRules.length));const v=t.style.animation||"";return t.style.animation=`${v?`${v}, `:""}${f} ${s}ms linear ${i}ms 1 both`,bo+=1,f}function ev(t,e){const n=(t.style.animation||"").split(", "),s=n.filter(e?r=>r.indexOf(e)<0:r=>r.indexOf("__svelte")===-1),i=n.length-s.length;i&&(t.style.animation=s.join(", "),bo-=i,bo||tv())}function tv(){Yl(()=>{bo||(yo.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&b(e)}),yo.clear())})}let er;function Gi(t){er=t}function vr(){if(!er)throw new Error("Function called outside component initialization");return er}function nv(t){vr().$$.on_mount.push(t)}function Yo(t){vr().$$.on_destroy.push(t)}function lp(){const t=vr();return(e,n,{cancelable:s=!1}={})=>{const i=t.$$.callbacks[e];if(i){const r=ap(e,n,{cancelable:s});return i.slice().forEach(o=>{o.call(t,r)}),!r.defaultPrevented}return!0}}function Wi(t,e){return vr().$$.context.set(t,e),e}function ws(t){return vr().$$.context.get(t)}function sv(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(s=>s.call(this,e))}const Fi=[],Xn=[],oo=[],ol=[],cp=Promise.resolve();let al=!1;function up(){al||(al=!0,cp.then(hp))}function iv(){return up(),cp}function Ze(t){oo.push(t)}function Vs(t){ol.push(t)}const Na=new Set;let xr=0;function hp(){const t=er;do{for(;xr<Fi.length;){const e=Fi[xr];xr++,Gi(e),rv(e.$$)}for(Gi(null),Fi.length=0,xr=0;Xn.length;)Xn.pop()();for(let e=0;e<oo.length;e+=1){const n=oo[e];Na.has(n)||(Na.add(n),n())}oo.length=0}while(Fi.length);for(;ol.length;)ol.pop()();al=!1,Na.clear(),Gi(t)}function rv(t){if(t.fragment!==null){t.update(),Je(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Ze)}}let $i;function ov(){return $i||($i=Promise.resolve(),$i.then(()=>{$i=null})),$i}function Oa(t,e,n){t.dispatchEvent(ap(`${e?"intro":"outro"}${n}`))}const ao=new Set;let Kn;function bt(){Kn={r:0,c:[],p:Kn}}function wt(){Kn.r||Je(Kn.c),Kn=Kn.p}function H(t,e){t&&t.i&&(ao.delete(t),t.i(e))}function x(t,e,n,s){if(t&&t.o){if(ao.has(t))return;ao.add(t),Kn.c.push(()=>{ao.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}const av={duration:0};function dn(t,e,n,s){let i=e(t,n),r=s?0:1,o=null,a=null,l=null;function c(){l&&ev(t,l)}function h(d,g){const _=d.b-r;return g*=Math.abs(_),{a:r,b:d.b,d:_,duration:g,start:d.start,end:d.start+g,group:d.group}}function f(d){const{delay:g=0,duration:_=300,easing:v=tp,tick:y=fe,css:E}=i||av,T={start:W_()+g,b:d};d||(T.group=Kn,Kn.r+=1),o||a?a=T:(E&&(c(),l=bu(t,r,d,_,g,v,E)),d&&y(0,1),o=h(T,_),Ze(()=>Oa(t,d,"start")),Q_(O=>{if(a&&O>a.start&&(o=h(a,_),a=null,Oa(t,o.b,"start"),E&&(c(),l=bu(t,r,o.b,o.duration,0,v,i.css))),o){if(O>=o.end)y(r=o.b,1-r),Oa(t,o.b,"end"),a||(o.b?c():--o.group.r||Je(o.group.c)),o=null;else if(O>=o.start){const P=O-o.start;r=o.a+o.d*v(P/o.duration),y(r,1-r)}}return!!(o||a)}))}return{run(d){Qo(i)?ov().then(()=>{i=i(),f(d)}):f(d)},end(){c(),o=a=null}}}function vn(t,e){const n={},s={},i={$$scope:1};let r=t.length;for(;r--;){const o=t[r],a=e[r];if(a){for(const l in o)l in a||(s[l]=1);for(const l in a)i[l]||(n[l]=a[l],i[l]=1);t[r]=a}else for(const l in o)i[l]=1}for(const o in s)o in n||(n[o]=void 0);return n}function xn(t){return typeof t=="object"&&t!==null?t:{}}function js(t,e,n){const s=t.$$.props[e];s!==void 0&&(t.$$.bound[s]=n,n(t.$$.ctx[s]))}function ge(t){t&&t.c()}function de(t,e,n,s){const{fragment:i,after_update:r}=t.$$;i&&i.m(e,n),s||Ze(()=>{const o=t.$$.on_mount.map(np).filter(Qo);t.$$.on_destroy?t.$$.on_destroy.push(...o):Je(o),t.$$.on_mount=[]}),r.forEach(Ze)}function pe(t,e){const n=t.$$;n.fragment!==null&&(Je(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function lv(t,e){t.$$.dirty[0]===-1&&(Fi.push(t),up(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ye(t,e,n,s,i,r,o,a=[-1]){const l=er;Gi(t);const c=t.$$={fragment:null,ctx:[],props:r,update:fe,not_equal:i,bound:_u(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:_u(),dirty:a,skip_bound:!1,root:e.target||l.$$.root};o&&o(c.root);let h=!1;if(c.ctx=n?n(t,e.props||{},(f,d,...g)=>{const _=g.length?g[0]:d;return c.ctx&&i(c.ctx[f],c.ctx[f]=_)&&(!c.skip_bound&&c.bound[f]&&c.bound[f](_),h&&lv(t,f)),d}):[],c.update(),h=!0,Je(c.before_update),c.fragment=s?s(c.ctx):!1,e.target){if(e.hydrate){const f=x_(e.target);c.fragment&&c.fragment.l(f),f.forEach(b)}else c.fragment&&c.fragment.c();e.intro&&H(t.$$.fragment),de(t,e.target,e.anchor,e.customElement),hp()}Gi(l)}class Xe{$destroy(){pe(this,1),this.$destroy=fe}$on(e,n){if(!Qo(n))return fe;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const i=s.indexOf(n);i!==-1&&s.splice(i,1)}}$set(e){this.$$set&&!G_(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const wu=t=>typeof t>"u",fp=t=>typeof t=="function",dp=t=>typeof t=="number";function cv(t){return!t.defaultPrevented&&t.button===0&&!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function pp(){let t=0;return()=>t++}function uv(){return Math.random().toString(36).substring(2)}const ks=typeof window>"u";function mp(t,e,n){return t.addEventListener(e,n),()=>t.removeEventListener(e,n)}const ll=(t,e)=>t?{}:{style:e},ri=t=>({"aria-hidden":"true",...ll(t,"display:none;")}),si=[];function hv(t,e){return{subscribe:yt(t,e).subscribe}}function yt(t,e=fe){let n;const s=new Set;function i(a){if(Ge(t,a)&&(t=a,n)){const l=!si.length;for(const c of s)c[1](),si.push(c,t);if(l){for(let c=0;c<si.length;c+=2)si[c][0](si[c+1]);si.length=0}}}function r(a){i(a(t))}function o(a,l=fe){const c=[a,l];return s.add(c),s.size===1&&(n=e(i)||fe),a(t),()=>{s.delete(c),s.size===0&&(n(),n=null)}}return{set:i,update:r,subscribe:o}}function fv(t,e,n){const s=!Array.isArray(t),i=s?[t]:t,r=e.length<2;return hv(n,o=>{let a=!1;const l=[];let c=0,h=fe;const f=()=>{if(c)return;h();const g=e(s?l[0]:l,o);r?o(g):h=Qo(g)?g:fe},d=i.map((g,_)=>zl(g,v=>{l[_]=v,c&=~(1<<_),a&&f()},()=>{c|=1<<_}));return a=!0,f(),function(){Je(d),h()}})}const yr=t=>`@@svnav-ctx__${t}`,cl=yr("LOCATION"),mi=yr("ROUTER"),gp=yr("ROUTE"),dv=yr("ROUTE_PARAMS"),pv=yr("FOCUS_ELEM"),_p=/^:(.+)/,Bi=(t,e,n)=>t.substr(e,n),ul=(t,e)=>Bi(t,0,e.length)===e,mv=t=>t==="",gv=t=>_p.test(t),vp=t=>t[0]==="*",_v=t=>t.replace(/\*.*$/,""),yp=t=>t.replace(/(^\/+|\/+$)/g,"");function Un(t,e=!1){const n=yp(t).split("/");return e?n.filter(Boolean):n}const La=(t,e)=>t+(e?`?${e}`:""),Xl=t=>`/${yp(t)}`;function br(...t){const e=s=>Un(s,!0).join("/"),n=t.map(e).join("/");return Xl(n)}const xl=1,Xo=2,qs=3,vv=4,bp=5,yv=6,wp=7,bv=8,wv=9,kp=10,Ep=11,kv={[xl]:"Link",[Xo]:"Route",[qs]:"Router",[vv]:"useFocus",[bp]:"useLocation",[yv]:"useMatch",[wp]:"useNavigate",[bv]:"useParams",[wv]:"useResolvable",[kp]:"useResolve",[Ep]:"navigate"},Jl=t=>kv[t];function Ev(t,e){let n;return t===Xo?n=e.path?`path="${e.path}"`:"default":t===xl?n=`to="${e.to}"`:t===qs&&(n=`basepath="${e.basepath||""}"`),`<${Jl(t)} ${n||""} />`}function Tv(t,e,n,s){const i=n&&Ev(s||t,n),r=i?`

Occurred in: ${i}`:"",o=Jl(t),a=fp(e)?e(o):e;return`<${o}> ${a}${r}`}const Tp=t=>(...e)=>t(Tv(...e)),Ip=Tp(t=>{throw new Error(t)}),wo=Tp(console.warn),ku=4,Iv=3,Cv=2,Sv=1,Av=1;function Dv(t,e){const n=t.default?0:Un(t.fullPath).reduce((s,i)=>{let r=s;return r+=ku,mv(i)?r+=Av:gv(i)?r+=Cv:vp(i)?r-=ku+Sv:r+=Iv,r},0);return{route:t,score:n,index:e}}function Pv(t){return t.map(Dv).sort((e,n)=>e.score<n.score?1:e.score>n.score?-1:e.index-n.index)}function Cp(t,e){let n,s;const[i]=e.split("?"),r=Un(i),o=r[0]==="",a=Pv(t);for(let l=0,c=a.length;l<c;l++){const{route:h}=a[l];let f=!1;const d={},g=E=>({...h,params:d,uri:E});if(h.default){s=g(e);continue}const _=Un(h.fullPath),v=Math.max(r.length,_.length);let y=0;for(;y<v;y++){const E=_[y],T=r[y];if(!wu(E)&&vp(E)){const P=E==="*"?"*":E.slice(1);d[P]=r.slice(y).map(decodeURIComponent).join("/");break}if(wu(T)){f=!0;break}const O=_p.exec(E);if(O&&!o){const P=decodeURIComponent(T);d[O[1]]=P}else if(E!==T){f=!0;break}}if(!f){n=g(br(...r.slice(0,y)));break}}return n||s||null}function Sp(t,e){return Cp([t],e)}function Rv(t,e){if(ul(t,"/"))return t;const[n,s]=t.split("?"),[i]=e.split("?"),r=Un(n),o=Un(i);if(r[0]==="")return La(i,s);if(!ul(r[0],".")){const c=o.concat(r).join("/");return La((i==="/"?"":"/")+c,s)}const a=o.concat(r),l=[];return a.forEach(c=>{c===".."?l.pop():c!=="."&&l.push(c)}),La(`/${l.join("/")}`,s)}function Eu(t,e){const{pathname:n,hash:s="",search:i="",state:r}=t,o=Un(e,!0),a=Un(n,!0);for(;o.length;)o[0]!==a[0]&&Ip(qs,`Invalid state: All locations must begin with the basepath "${e}", found "${n}"`),o.shift(),a.shift();return{pathname:br(...a),hash:s,search:i,state:r}}const Tu=t=>t.length===1?"":t,Zl=t=>{const e=t.indexOf("?"),n=t.indexOf("#"),s=e!==-1,i=n!==-1,r=i?Tu(Bi(t,n)):"",o=i?Bi(t,0,n):t,a=s?Tu(Bi(o,e)):"";return{pathname:(s?Bi(o,0,e):o)||"/",search:a,hash:r}},Nv=t=>{const{pathname:e,search:n,hash:s}=t;return e+n+s};function Ov(t,e,n){return br(n,Rv(t,e))}function Lv(t,e){const n=Xl(_v(t)),s=Un(n,!0),i=Un(e,!0).slice(0,s.length),r=Sp({fullPath:n},br(...i));return r&&r.uri}const Ma="POP",Mv="PUSH",$v="REPLACE";function $a(t){return{...t.location,pathname:encodeURI(decodeURI(t.location.pathname)),state:t.history.state,_key:t.history.state&&t.history.state._key||"initial"}}function Uv(t){let e=[],n=$a(t),s=Ma;const i=(r=e)=>r.forEach(o=>o({location:n,action:s}));return{get location(){return n},listen(r){e.push(r);const o=()=>{n=$a(t),s=Ma,i([r])};i([r]);const a=mp(t,"popstate",o);return()=>{a(),e=e.filter(l=>l!==r)}},navigate(r,o){const{state:a={},replace:l=!1}=o||{};if(s=l?$v:Mv,dp(r))o&&wo(Ep,"Navigation options (state or replace) are not supported, when passing a number as the first argument to navigate. They are ignored."),s=Ma,t.history.go(r);else{const c={...a,_key:uv()};try{t.history[l?"replaceState":"pushState"](c,"",r)}catch{t.location[l?"replace":"assign"](r)}}n=$a(t),i()}}}function Ua(t,e){return{...Zl(e),state:t}}function Fv(t="/"){let e=0,n=[Ua(null,t)];return{get entries(){return n},get location(){return n[e]},addEventListener(){},removeEventListener(){},history:{get state(){return n[e].state},pushState(s,i,r){e++,n=n.slice(0,e),n.push(Ua(s,r))},replaceState(s,i,r){n[e]=Ua(s,r)},go(s){const i=e+s;i<0||i>n.length-1||(e=i)}}}}const Bv=!!(!ks&&window.document&&window.document.createElement),Vv=!ks&&window.location.origin==="null",jv=Uv(Bv&&!Vv?window:Fv());let zn=null,Ap=!0;function qv(t,e){const n=document.querySelectorAll("[data-svnav-router]");for(let s=0;s<n.length;s++){const i=n[s],r=Number(i.dataset.svnavRouter);if(r===t)return!0;if(r===e)return!1}return!1}function Hv(t){(!zn||t.level>zn.level||t.level===zn.level&&qv(t.routerId,zn.routerId))&&(zn=t)}function zv(){zn=null}function Kv(){Ap=!1}function Iu(t){if(!t)return!1;const e="tabindex";try{if(!t.hasAttribute(e)){t.setAttribute(e,"-1");let n;n=mp(t,"blur",()=>{t.removeAttribute(e),n()})}return t.focus(),document.activeElement===t}catch{return!1}}function Gv(t,e){return Number(t.dataset.svnavRouteEnd)===e}function Wv(t){return/^H[1-6]$/i.test(t.tagName)}function Cu(t,e=document){return e.querySelector(t)}function Qv(t){let n=Cu(`[data-svnav-route-start="${t}"]`).nextElementSibling;for(;!Gv(n,t);){if(Wv(n))return n;const s=Cu("h1,h2,h3,h4,h5,h6",n);if(s)return s;n=n.nextElementSibling}return null}function Yv(t){Promise.resolve(pi(t.focusElement)).then(e=>{const n=e||Qv(t.id);n||wo(qs,`Could not find an element to focus. You should always render a header for accessibility reasons, or set a custom focus element via the "useFocus" hook. If you don't want this Route or Router to manage focus, pass "primary={false}" to it.`,t,Xo),!Iu(n)&&Iu(document.documentElement)})}const Xv=(t,e,n)=>(s,i)=>iv().then(()=>{if(!zn||Ap){Kv();return}if(s&&Yv(zn.route),t.announcements&&i){const{path:r,fullPath:o,meta:a,params:l,uri:c}=zn.route,h=t.createAnnouncement({path:r,fullPath:o,meta:a,params:l,uri:c},pi(n));Promise.resolve(h).then(f=>{e.set(f)})}zv()}),Su="position:fixed;top:-1px;left:0;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;";function xv(t){let e,n,s=[{role:"status"},{"aria-atomic":"true"},{"aria-live":"polite"},{"data-svnav-announcer":""},ll(t[6],Su)],i={};for(let r=0;r<s.length;r+=1)i=Ot(i,s[r]);return{c(){e=p("div"),n=S(t[0]),On(e,i)},m(r,o){w(r,e,o),u(e,n)},p(r,o){o[0]&1&&re(n,r[0]),On(e,i=vn(s,[{role:"status"},{"aria-atomic":"true"},{"aria-live":"polite"},{"data-svnav-announcer":""},ll(r[6],Su)]))},d(r){r&&b(e)}}}function Jv(t){let e,n,s,i,r,o=[ri(t[6]),{"data-svnav-router":t[3]}],a={};for(let f=0;f<o.length;f+=1)a=Ot(a,o[f]);const l=t[22].default,c=Kl(l,t,t[21],null);let h=t[2]&&t[4]&&t[1].announcements&&xv(t);return{c(){e=p("div"),n=k(),c&&c.c(),s=k(),h&&h.c(),i=nn(),On(e,a)},m(f,d){w(f,e,d),w(f,n,d),c&&c.m(f,d),w(f,s,d),h&&h.m(f,d),w(f,i,d),r=!0},p(f,d){On(e,a=vn(o,[ri(f[6]),{"data-svnav-router":f[3]}])),c&&c.p&&(!r||d[0]&2097152)&&Wl(c,l,f,f[21],r?Gl(l,f[21],d,null):Ql(f[21]),null),f[2]&&f[4]&&f[1].announcements&&h.p(f,d)},i(f){r||(H(c,f),r=!0)},o(f){x(c,f),r=!1},d(f){f&&b(e),f&&b(n),c&&c.d(f),f&&b(s),h&&h.d(f),f&&b(i)}}}const Zv=pp(),Au="/";function ey(t,e,n){let s,i,r,o,a,{$$slots:l={},$$scope:c}=e,{basepath:h=Au}=e,{url:f=null}=e,{history:d=jv}=e,{primary:g=!0}=e,{a11y:_={}}=e,{disableInlineStyles:v=!1}=e;const y={createAnnouncement:M=>`Navigated to ${M.uri}`,announcements:!0,..._},E=h,T=Xl(h),O=ws(cl),P=ws(mi),$=!O,G=Zv(),N=g&&!(P&&!P.manageFocus),U=yt("");Ne(t,U,M=>n(0,a=M));const K=P?P.disableInlineStyles:v,R=yt([]);Ne(t,R,M=>n(20,o=M));const Q=yt(null);Ne(t,Q,M=>n(18,i=M));let q=!1;const W=$?0:P.level+1,J=$?yt((()=>Eu(ks?Zl(f):d.location,T))()):O;Ne(t,J,M=>n(17,s=M));const V=yt(s);Ne(t,V,M=>n(19,r=M));const le=Xv(y,U,J),Z=M=>C=>C.filter(L=>L.id!==M);function ce(M){if(ks){if(q)return;const C=Sp(M,s.pathname);if(C)return q=!0,C}else R.update(C=>{const L=Z(M.id)(C);return L.push(M),L})}function ie(M){R.update(Z(M))}return!$&&h!==Au&&wo(qs,'Only top-level Routers can have a "basepath" prop. It is ignored.',{basepath:h}),$&&(nv(()=>d.listen(C=>{const L=Eu(C.location,T);V.set(s),J.set(L)})),Wi(cl,J)),Wi(mi,{activeRoute:Q,registerRoute:ce,unregisterRoute:ie,manageFocus:N,level:W,id:G,history:$?d:P.history,basepath:$?T:P.basepath,disableInlineStyles:K}),t.$$set=M=>{"basepath"in M&&n(11,h=M.basepath),"url"in M&&n(12,f=M.url),"history"in M&&n(13,d=M.history),"primary"in M&&n(14,g=M.primary),"a11y"in M&&n(15,_=M.a11y),"disableInlineStyles"in M&&n(16,v=M.disableInlineStyles),"$$scope"in M&&n(21,c=M.$$scope)},t.$$.update=()=>{if(t.$$.dirty[0]&2048&&h!==E&&wo(qs,'You cannot change the "basepath" prop. It is ignored.'),t.$$.dirty[0]&1179648){const M=Cp(o,s.pathname);Q.set(M)}if(t.$$.dirty[0]&655360&&$){const M=!!s.hash,C=!M&&N,L=!M||s.pathname!==r.pathname;le(C,L)}t.$$.dirty[0]&262144&&N&&i&&i.primary&&Hv({level:W,routerId:G,route:i})},[a,y,$,G,N,U,K,R,Q,J,V,h,f,d,g,_,v,s,i,r,o,c,l]}class ec extends Xe{constructor(e){super(),Ye(this,e,ey,Jv,Ge,{basepath:11,url:12,history:13,primary:14,a11y:15,disableInlineStyles:16},null,[-1,-1])}}function wr(t,e,n=mi,s=qs){ws(n)||Ip(t,r=>`You cannot use ${r} outside of a ${Jl(s)}.`,e)}const ty=t=>{const{subscribe:e}=ws(t);return{subscribe:e}};function Dp(){return wr(bp),ty(cl)}function Pp(){const{history:t}=ws(mi);return t}function Rp(){const t=ws(gp);return t?fv(t,e=>e.base):yt("/")}function Np(){wr(kp);const t=Rp(),{basepath:e}=ws(mi);return s=>Ov(s,pi(t),e)}function Xs(){wr(wp);const t=Np(),{navigate:e}=Pp();return(s,i)=>{const r=dp(s)?s:t(s);return e(r,i)}}const ny=t=>({params:t&16,location:t&8}),Du=t=>({params:ks?pi(t[10]):t[4],location:t[3],navigate:t[11]});function Pu(t){let e,n;return e=new ec({props:{primary:t[1],$$slots:{default:[ry]},$$scope:{ctx:t}}}),{c(){ge(e.$$.fragment)},m(s,i){de(e,s,i),n=!0},p(s,i){const r={};i&2&&(r.primary=s[1]),i&528409&&(r.$$scope={dirty:i,ctx:s}),e.$set(r)},i(s){n||(H(e.$$.fragment,s),n=!0)},o(s){x(e.$$.fragment,s),n=!1},d(s){pe(e,s)}}}function sy(t){let e;const n=t[18].default,s=Kl(n,t,t[19],Du);return{c(){s&&s.c()},m(i,r){s&&s.m(i,r),e=!0},p(i,r){s&&s.p&&(!e||r&524312)&&Wl(s,n,i,i[19],e?Gl(n,i[19],r,ny):Ql(i[19]),Du)},i(i){e||(H(s,i),e=!0)},o(i){x(s,i),e=!1},d(i){s&&s.d(i)}}}function iy(t){let e,n,s;const i=[{location:t[3]},{navigate:t[11]},ks?pi(t[10]):t[4],t[12]];var r=t[0];function o(a){let l={};for(let c=0;c<i.length;c+=1)l=Ot(l,i[c]);return{props:l}}return r&&(e=yu(r,o())),{c(){e&&ge(e.$$.fragment),n=nn()},m(a,l){e&&de(e,a,l),w(a,n,l),s=!0},p(a,l){const c=l&7192?vn(i,[l&8&&{location:a[3]},l&2048&&{navigate:a[11]},l&1040&&xn(ks?pi(a[10]):a[4]),l&4096&&xn(a[12])]):{};if(r!==(r=a[0])){if(e){bt();const h=e;x(h.$$.fragment,1,0,()=>{pe(h,1)}),wt()}r?(e=yu(r,o()),ge(e.$$.fragment),H(e.$$.fragment,1),de(e,n.parentNode,n)):e=null}else r&&e.$set(c)},i(a){s||(e&&H(e.$$.fragment,a),s=!0)},o(a){e&&x(e.$$.fragment,a),s=!1},d(a){a&&b(n),e&&pe(e,a)}}}function ry(t){let e,n,s,i;const r=[iy,sy],o=[];function a(l,c){return l[0]!==null?0:1}return e=a(t),n=o[e]=r[e](t),{c(){n.c(),s=nn()},m(l,c){o[e].m(l,c),w(l,s,c),i=!0},p(l,c){let h=e;e=a(l),e===h?o[e].p(l,c):(bt(),x(o[h],1,1,()=>{o[h]=null}),wt(),n=o[e],n?n.p(l,c):(n=o[e]=r[e](l),n.c()),H(n,1),n.m(s.parentNode,s))},i(l){i||(H(n),i=!0)},o(l){x(n),i=!1},d(l){o[e].d(l),l&&b(s)}}}function oy(t){let e,n,s,i,r,o=[ri(t[7]),{"data-svnav-route-start":t[5]}],a={};for(let f=0;f<o.length;f+=1)a=Ot(a,o[f]);let l=t[2]&&Pu(t),c=[ri(t[7]),{"data-svnav-route-end":t[5]}],h={};for(let f=0;f<c.length;f+=1)h=Ot(h,c[f]);return{c(){e=p("div"),n=k(),l&&l.c(),s=k(),i=p("div"),On(e,a),On(i,h)},m(f,d){w(f,e,d),w(f,n,d),l&&l.m(f,d),w(f,s,d),w(f,i,d),r=!0},p(f,[d]){On(e,a=vn(o,[ri(f[7]),{"data-svnav-route-start":f[5]}])),f[2]?l?(l.p(f,d),d&4&&H(l,1)):(l=Pu(f),l.c(),H(l,1),l.m(s.parentNode,s)):l&&(bt(),x(l,1,1,()=>{l=null}),wt()),On(i,h=vn(c,[ri(f[7]),{"data-svnav-route-end":f[5]}]))},i(f){r||(H(l),r=!0)},o(f){x(l),r=!1},d(f){f&&b(e),f&&b(n),l&&l.d(f),f&&b(s),f&&b(i)}}}const ay=pp();function ly(t,e,n){let s;const i=["path","component","meta","primary"];let r=vo(e,i),o,a,l,c,{$$slots:h={},$$scope:f}=e,{path:d=""}=e,{component:g=null}=e,{meta:_={}}=e,{primary:v=!0}=e;wr(Xo,e);const y=ay(),{registerRoute:E,unregisterRoute:T,activeRoute:O,disableInlineStyles:P}=ws(mi);Ne(t,O,q=>n(16,o=q));const $=Rp();Ne(t,$,q=>n(17,l=q));const G=Dp();Ne(t,G,q=>n(3,a=q));const N=yt(null);let U;const K=yt(),R=yt({});Ne(t,R,q=>n(4,c=q)),Wi(gp,K),Wi(dv,R),Wi(pv,N);const Q=Xs();return ks||Yo(()=>T(y)),t.$$set=q=>{n(24,e=Ot(Ot({},e),_o(q))),n(12,r=vo(e,i)),"path"in q&&n(13,d=q.path),"component"in q&&n(0,g=q.component),"meta"in q&&n(14,_=q.meta),"primary"in q&&n(1,v=q.primary),"$$scope"in q&&n(19,f=q.$$scope)},t.$$.update=()=>{if(t.$$.dirty&155658){const q=d==="",W=br(l,d),F={id:y,path:d,meta:_,default:q,fullPath:q?"":W,base:q?l:Lv(W,a.pathname),primary:v,focusElement:N};K.set(F),n(15,U=E(F))}if(t.$$.dirty&98304&&n(2,s=!!(U||o&&o.id===y)),t.$$.dirty&98308&&s){const{params:q}=U||o;R.set(q)}},e=_o(e),[g,v,s,a,c,y,O,P,$,G,R,Q,r,d,_,U,o,l,h,f]}class Rn extends Xe{constructor(e){super(),Ye(this,e,ly,oy,Ge,{path:13,component:0,meta:14,primary:1})}}function cy(t){let e,n,s,i;const r=t[13].default,o=Kl(r,t,t[12],null);let a=[{href:t[0]},t[2],t[1]],l={};for(let c=0;c<a.length;c+=1)l=Ot(l,a[c]);return{c(){e=p("a"),o&&o.c(),On(e,l)},m(c,h){w(c,e,h),o&&o.m(e,null),n=!0,s||(i=j(e,"click",t[4]),s=!0)},p(c,[h]){o&&o.p&&(!n||h&4096)&&Wl(o,r,c,c[12],n?Gl(r,c[12],h,null):Ql(c[12]),null),On(e,l=vn(a,[(!n||h&1)&&{href:c[0]},h&4&&c[2],h&2&&c[1]]))},i(c){n||(H(o,c),n=!0)},o(c){x(o,c),n=!1},d(c){c&&b(e),o&&o.d(c),s=!1,i()}}}function uy(t,e,n){let s,i,r,o,a,l;const c=["to","replace","state","getProps"];let h=vo(e,c),f,{$$slots:d={},$$scope:g}=e,{to:_}=e,{replace:v=!1}=e,{state:y={}}=e,{getProps:E=null}=e;wr(xl,e);const T=Dp();Ne(t,T,N=>n(11,f=N));const O=lp(),P=Np(),{navigate:$}=Pp();function G(N){O("click",N),cv(N)&&(N.preventDefault(),$(s,{state:y,replace:o||v}))}return t.$$set=N=>{n(19,e=Ot(Ot({},e),_o(N))),n(18,h=vo(e,c)),"to"in N&&n(5,_=N.to),"replace"in N&&n(6,v=N.replace),"state"in N&&n(7,y=N.state),"getProps"in N&&n(8,E=N.getProps),"$$scope"in N&&n(12,g=N.$$scope)},t.$$.update=()=>{t.$$.dirty&2080&&n(0,s=P(_,f)),t.$$.dirty&2049&&n(10,i=ul(f.pathname,s)),t.$$.dirty&2049&&n(9,r=s===f.pathname),t.$$.dirty&2049&&(o=Zl(s)===Nv(f)),t.$$.dirty&512&&n(2,a=r?{"aria-current":"page"}:{}),n(1,l=(()=>{if(fp(E)){const N=E({location:f,href:s,isPartiallyCurrent:i,isCurrent:r});return{...h,...N}}return h})())},e=_o(e),[s,l,a,T,G,_,v,y,E,r,i,f,g,d]}class hn extends Xe{constructor(e){super(),Ye(this,e,uy,cy,Ge,{to:5,replace:6,state:7,getProps:8})}}const Op="/to-deploy-mh/assets/logoMH.9387adb0.png",hy="/to-deploy-mh/assets/menu.9ddfd9f8.svg";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Lp=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},fy=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Mp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,h=r>>2,f=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,g=c&63;l||(g=64,o||(d=64)),s.push(n[h],n[f],n[d],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Lp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):fy(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||f==null)throw Error();const d=r<<2|a>>4;if(s.push(d),c!==64){const g=a<<4&240|c>>2;if(s.push(g),f!==64){const _=c<<6&192|f;s.push(_)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},dy=function(t){const e=Lp(t);return Mp.encodeByteArray(e,!0)},ko=function(t){return dy(t).replace(/\./g,"")},$p=function(t){try{return Mp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function py(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Yt())}function my(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function gy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function _y(){const t=Yt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function vy(){return typeof indexedDB=="object"}function yy(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}function by(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const wy=()=>by().__FIREBASE_DEFAULTS__,ky=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t=process.env.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Ey=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&$p(t[1]);return e&&JSON.parse(e)},tc=()=>{try{return wy()||ky()||Ey()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Up=t=>{var e,n;return(n=(e=tc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Ty=t=>{const e=Up(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Iy=()=>{var t;return(t=tc())===null||t===void 0?void 0:t.config},Fp=t=>{var e;return(e=tc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Sy(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[ko(JSON.stringify(n)),ko(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ay="FirebaseError";class ss extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Ay,Object.setPrototypeOf(this,ss.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,kr.prototype.create)}}class kr{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Dy(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new ss(i,a,s)}}function Dy(t,e){return t.replace(Py,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Py=/\{\$([^}]+)}/g;function Ry(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Eo(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Ru(r)&&Ru(o)){if(!Eo(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Ru(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Er(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Vi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function ji(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Ny(t,e){const n=new Oy(t,e);return n.subscribe.bind(n)}class Oy{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Ly(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=Fa),i.error===void 0&&(i.error=Fa),i.complete===void 0&&(i.complete=Fa);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ly(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Fa(){}/**
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
 */function Xt(t){return t&&t._delegate?t._delegate:t}class Hs{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ns="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class My{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Cy;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Uy(e))try{this.getOrInitializeService({instanceIdentifier:Ns})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Ns){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ns){return this.instances.has(e)}getOptions(e=Ns){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:$y(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ns){return this.component?this.component.multipleInstances?e:Ns:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function $y(t){return t===Ns?void 0:t}function Uy(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */var ze;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ze||(ze={}));const By={debug:ze.DEBUG,verbose:ze.VERBOSE,info:ze.INFO,warn:ze.WARN,error:ze.ERROR,silent:ze.SILENT},Vy=ze.INFO,jy={[ze.DEBUG]:"log",[ze.VERBOSE]:"log",[ze.INFO]:"info",[ze.WARN]:"warn",[ze.ERROR]:"error"},qy=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=jy[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class nc{constructor(e){this.name=e,this._logLevel=Vy,this._logHandler=qy,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ze))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?By[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ze.DEBUG,...e),this._logHandler(this,ze.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ze.VERBOSE,...e),this._logHandler(this,ze.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ze.INFO,...e),this._logHandler(this,ze.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ze.WARN,...e),this._logHandler(this,ze.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ze.ERROR,...e),this._logHandler(this,ze.ERROR,...e)}}const Hy=(t,e)=>e.some(n=>t instanceof n);let Nu,Ou;function zy(){return Nu||(Nu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ky(){return Ou||(Ou=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Bp=new WeakMap,hl=new WeakMap,Vp=new WeakMap,Ba=new WeakMap,sc=new WeakMap;function Gy(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(ps(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Bp.set(n,t)}).catch(()=>{}),sc.set(e,t),e}function Wy(t){if(hl.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});hl.set(t,e)}let fl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return hl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Vp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ps(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Qy(t){fl=t(fl)}function Yy(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Va(this),e,...n);return Vp.set(s,e.sort?e.sort():[e]),ps(s)}:Ky().includes(t)?function(...e){return t.apply(Va(this),e),ps(Bp.get(this))}:function(...e){return ps(t.apply(Va(this),e))}}function Xy(t){return typeof t=="function"?Yy(t):(t instanceof IDBTransaction&&Wy(t),Hy(t,zy())?new Proxy(t,fl):t)}function ps(t){if(t instanceof IDBRequest)return Gy(t);if(Ba.has(t))return Ba.get(t);const e=Xy(t);return e!==t&&(Ba.set(t,e),sc.set(e,t)),e}const Va=t=>sc.get(t);function xy(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=ps(o);return s&&o.addEventListener("upgradeneeded",l=>{s(ps(o.result),l.oldVersion,l.newVersion,ps(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const Jy=["get","getKey","getAll","getAllKeys","count"],Zy=["put","add","delete","clear"],ja=new Map;function Lu(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ja.get(e))return ja.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Zy.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Jy.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return ja.set(e,r),r}Qy(t=>({...t,get:(e,n,s)=>Lu(e,n)||t.get(e,n,s),has:(e,n)=>!!Lu(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(t0(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function t0(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const dl="@firebase/app",Mu="0.8.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zs=new nc("@firebase/app"),n0="@firebase/app-compat",s0="@firebase/analytics-compat",i0="@firebase/analytics",r0="@firebase/app-check-compat",o0="@firebase/app-check",a0="@firebase/auth",l0="@firebase/auth-compat",c0="@firebase/database",u0="@firebase/database-compat",h0="@firebase/functions",f0="@firebase/functions-compat",d0="@firebase/installations",p0="@firebase/installations-compat",m0="@firebase/messaging",g0="@firebase/messaging-compat",_0="@firebase/performance",v0="@firebase/performance-compat",y0="@firebase/remote-config",b0="@firebase/remote-config-compat",w0="@firebase/storage",k0="@firebase/storage-compat",E0="@firebase/firestore",T0="@firebase/firestore-compat",I0="firebase",C0="9.12.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pl="[DEFAULT]",S0={[dl]:"fire-core",[n0]:"fire-core-compat",[i0]:"fire-analytics",[s0]:"fire-analytics-compat",[o0]:"fire-app-check",[r0]:"fire-app-check-compat",[a0]:"fire-auth",[l0]:"fire-auth-compat",[c0]:"fire-rtdb",[u0]:"fire-rtdb-compat",[h0]:"fire-fn",[f0]:"fire-fn-compat",[d0]:"fire-iid",[p0]:"fire-iid-compat",[m0]:"fire-fcm",[g0]:"fire-fcm-compat",[_0]:"fire-perf",[v0]:"fire-perf-compat",[y0]:"fire-rc",[b0]:"fire-rc-compat",[w0]:"fire-gcs",[k0]:"fire-gcs-compat",[E0]:"fire-fst",[T0]:"fire-fst-compat","fire-js":"fire-js",[I0]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const To=new Map,ml=new Map;function A0(t,e){try{t.container.addComponent(e)}catch(n){zs.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function gi(t){const e=t.name;if(ml.has(e))return zs.debug(`There were multiple attempts to register component ${e}.`),!1;ml.set(e,t);for(const n of To.values())A0(n,t);return!0}function ic(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D0={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ms=new kr("app","Firebase",D0);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P0{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Hs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ms.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tr=C0;function jp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:pl,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw ms.create("bad-app-name",{appName:String(i)});if(n||(n=Iy()),!n)throw ms.create("no-options");const r=To.get(i);if(r){if(Eo(n,r.options)&&Eo(s,r.config))return r;throw ms.create("duplicate-app",{appName:i})}const o=new Fy(i);for(const l of ml.values())o.addComponent(l);const a=new P0(n,s,o);return To.set(i,a),a}function qp(t=pl){const e=To.get(t);if(!e&&t===pl)return jp();if(!e)throw ms.create("no-app",{appName:t});return e}function gs(t,e,n){var s;let i=(s=S0[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),zs.warn(a.join(" "));return}gi(new Hs(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const R0="firebase-heartbeat-database",N0=1,tr="firebase-heartbeat-store";let qa=null;function Hp(){return qa||(qa=xy(R0,N0,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(tr)}}}).catch(t=>{throw ms.create("idb-open",{originalErrorMessage:t.message})})),qa}async function O0(t){var e;try{return(await Hp()).transaction(tr).objectStore(tr).get(zp(t))}catch(n){if(n instanceof ss)zs.warn(n.message);else{const s=ms.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});zs.warn(s.message)}}}async function $u(t,e){var n;try{const i=(await Hp()).transaction(tr,"readwrite");return await i.objectStore(tr).put(e,zp(t)),i.done}catch(s){if(s instanceof ss)zs.warn(s.message);else{const i=ms.create("idb-set",{originalErrorMessage:(n=s)===null||n===void 0?void 0:n.message});zs.warn(i.message)}}}function zp(t){return`${t.name}!${t.options.appId}`}/**
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
 */const L0=1024,M0=30*24*60*60*1e3;class $0{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new F0(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Uu();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=M0}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Uu(),{heartbeatsToSend:n,unsentEntries:s}=U0(this._heartbeatsCache.heartbeats),i=ko(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Uu(){return new Date().toISOString().substring(0,10)}function U0(t,e=L0){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Fu(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Fu(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class F0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return vy()?yy().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await O0(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return $u(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return $u(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Fu(t){return ko(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B0(t){gi(new Hs("platform-logger",e=>new e0(e),"PRIVATE")),gi(new Hs("heartbeat",e=>new $0(e),"PRIVATE")),gs(dl,Mu,t),gs(dl,Mu,"esm2017"),gs("fire-js","")}B0("");var V0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ve,rc=rc||{},Te=V0||self;function Io(){}function xo(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ir(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function j0(t){return Object.prototype.hasOwnProperty.call(t,Ha)&&t[Ha]||(t[Ha]=++q0)}var Ha="closure_uid_"+(1e9*Math.random()>>>0),q0=0;function H0(t,e,n){return t.call.apply(t.bind,arguments)}function z0(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Wt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Wt=H0:Wt=z0,Wt.apply(null,arguments)}function Jr(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function qt(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function Ss(){this.s=this.s,this.o=this.o}var K0=0;Ss.prototype.s=!1;Ss.prototype.na=function(){!this.s&&(this.s=!0,this.M(),K0!=0)&&j0(this)};Ss.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Kp=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function oc(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Bu(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(xo(s)){const i=t.length||0,r=s.length||0;t.length=i+r;for(let o=0;o<r;o++)t[i+o]=s[o]}else t.push(s)}}function Qt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Qt.prototype.h=function(){this.defaultPrevented=!0};var G0=function(){if(!Te.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Te.addEventListener("test",Io,e),Te.removeEventListener("test",Io,e)}catch{}return t}();function Co(t){return/^[\s\xa0]*$/.test(t)}var Vu=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function za(t,e){return t<e?-1:t>e?1:0}function Jo(){var t=Te.navigator;return t&&(t=t.userAgent)?t:""}function Nn(t){return Jo().indexOf(t)!=-1}function ac(t){return ac[" "](t),t}ac[" "]=Io;function W0(t){var e=X0;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var Q0=Nn("Opera"),_i=Nn("Trident")||Nn("MSIE"),Gp=Nn("Edge"),gl=Gp||_i,Wp=Nn("Gecko")&&!(Jo().toLowerCase().indexOf("webkit")!=-1&&!Nn("Edge"))&&!(Nn("Trident")||Nn("MSIE"))&&!Nn("Edge"),Y0=Jo().toLowerCase().indexOf("webkit")!=-1&&!Nn("Edge");function Qp(){var t=Te.document;return t?t.documentMode:void 0}var So;e:{var Ka="",Ga=function(){var t=Jo();if(Wp)return/rv:([^\);]+)(\)|;)/.exec(t);if(Gp)return/Edge\/([\d\.]+)/.exec(t);if(_i)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Y0)return/WebKit\/(\S+)/.exec(t);if(Q0)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Ga&&(Ka=Ga?Ga[1]:""),_i){var Wa=Qp();if(Wa!=null&&Wa>parseFloat(Ka)){So=String(Wa);break e}}So=Ka}var X0={};function x0(){return W0(function(){let t=0;const e=Vu(String(So)).split("."),n=Vu("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;t=za(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||za(i[2].length==0,r[2].length==0)||za(i[2],r[2]),i=i[3],r=r[3]}while(t==0)}return 0<=t})}var _l;if(Te.document&&_i){var ju=Qp();_l=ju||parseInt(So,10)||void 0}else _l=void 0;var J0=_l;function nr(t,e){if(Qt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Wp){e:{try{ac(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Z0[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&nr.X.h.call(this)}}qt(nr,Qt);var Z0={2:"touch",3:"pen",4:"mouse"};nr.prototype.h=function(){nr.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Cr="closure_listenable_"+(1e6*Math.random()|0),e1=0;function t1(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=i,this.key=++e1,this.ba=this.ea=!1}function Zo(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function lc(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Yp(t){const e={};for(const n in t)e[n]=t[n];return e}const qu="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Xp(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<qu.length;r++)n=qu[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function ea(t){this.src=t,this.g={},this.h=0}ea.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=yl(t,e,s,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new t1(e,this.src,r,!!s,i),e.ea=n,t.push(e)),e};function vl(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=Kp(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(Zo(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function yl(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==s)return i}return-1}var cc="closure_lm_"+(1e6*Math.random()|0),Qa={};function xp(t,e,n,s,i){if(s&&s.once)return Zp(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)xp(t,e[r],n,s,i);return null}return n=fc(n),t&&t[Cr]?t.N(e,n,Ir(s)?!!s.capture:!!s,i):Jp(t,e,n,!1,s,i)}function Jp(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=Ir(i)?!!i.capture:!!i,a=hc(t);if(a||(t[cc]=a=new ea(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=n1(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)G0||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(tm(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function n1(){function t(n){return e.call(t.src,t.listener,n)}const e=s1;return t}function Zp(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)Zp(t,e[r],n,s,i);return null}return n=fc(n),t&&t[Cr]?t.O(e,n,Ir(s)?!!s.capture:!!s,i):Jp(t,e,n,!0,s,i)}function em(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)em(t,e[r],n,s,i);else s=Ir(s)?!!s.capture:!!s,n=fc(n),t&&t[Cr]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=yl(r,n,s,i),-1<n&&(Zo(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=hc(t))&&(e=t.g[e.toString()],t=-1,e&&(t=yl(e,n,s,i)),(n=-1<t?e[t]:null)&&uc(n))}function uc(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Cr])vl(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(tm(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=hc(e))?(vl(n,t),n.h==0&&(n.src=null,e[cc]=null)):Zo(t)}}}function tm(t){return t in Qa?Qa[t]:Qa[t]="on"+t}function s1(t,e){if(t.ba)t=!0;else{e=new nr(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&uc(t),t=n.call(s,e)}return t}function hc(t){return t=t[cc],t instanceof ea?t:null}var Ya="__closure_events_fn_"+(1e9*Math.random()>>>0);function fc(t){return typeof t=="function"?t:(t[Ya]||(t[Ya]=function(e){return t.handleEvent(e)}),t[Ya])}function Lt(){Ss.call(this),this.i=new ea(this),this.P=this,this.I=null}qt(Lt,Ss);Lt.prototype[Cr]=!0;Lt.prototype.removeEventListener=function(t,e,n,s){em(this,t,e,n,s)};function jt(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new Qt(e,t);else if(e instanceof Qt)e.target=e.target||t;else{var i=e;e=new Qt(s,t),Xp(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=Zr(o,s,!0,e)&&i}if(o=e.g=t,i=Zr(o,s,!0,e)&&i,i=Zr(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=Zr(o,s,!1,e)&&i}Lt.prototype.M=function(){if(Lt.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Zo(n[s]);delete t.g[e],t.h--}}this.I=null};Lt.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Lt.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Zr(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&vl(t.i,o),i=a.call(l,s)!==!1&&i}}return i&&!s.defaultPrevented}var dc=Te.JSON.stringify;function i1(){var t=im;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class r1{constructor(){this.h=this.g=null}add(e,n){const s=nm.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var nm=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new o1,t=>t.reset());class o1{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function a1(t){Te.setTimeout(()=>{throw t},0)}function sm(t,e){bl||l1(),wl||(bl(),wl=!0),im.add(t,e)}var bl;function l1(){var t=Te.Promise.resolve(void 0);bl=function(){t.then(c1)}}var wl=!1,im=new r1;function c1(){for(var t;t=i1();){try{t.h.call(t.g)}catch(n){a1(n)}var e=nm;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}wl=!1}function ta(t,e){Lt.call(this),this.h=t||1,this.g=e||Te,this.j=Wt(this.lb,this),this.l=Date.now()}qt(ta,Lt);ve=ta.prototype;ve.ca=!1;ve.R=null;ve.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),jt(this,"tick"),this.ca&&(pc(this),this.start()))}};ve.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function pc(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}ve.M=function(){ta.X.M.call(this),pc(this),delete this.g};function mc(t,e,n){if(typeof t=="function")n&&(t=Wt(t,n));else if(t&&typeof t.handleEvent=="function")t=Wt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Te.setTimeout(t,e||0)}function rm(t){t.g=mc(()=>{t.g=null,t.i&&(t.i=!1,rm(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class u1 extends Ss{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:rm(this)}M(){super.M(),this.g&&(Te.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function sr(t){Ss.call(this),this.h=t,this.g={}}qt(sr,Ss);var Hu=[];function om(t,e,n,s){Array.isArray(n)||(n&&(Hu[0]=n.toString()),n=Hu);for(var i=0;i<n.length;i++){var r=xp(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function am(t){lc(t.g,function(e,n){this.g.hasOwnProperty(n)&&uc(e)},t),t.g={}}sr.prototype.M=function(){sr.X.M.call(this),am(this)};sr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function na(){this.g=!0}na.prototype.Aa=function(){this.g=!1};function h1(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var h=c[0];c=c[1];var f=h.split("_");o=2<=f.length&&f[1]=="type"?o+(h+"="+c+"&"):o+(h+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function f1(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function oi(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+p1(t,n)+(s?" "+s:"")})}function d1(t,e){t.info(function(){return"TIMEOUT: "+e})}na.prototype.info=function(){};function p1(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return dc(n)}catch{return e}}var xs={},zu=null;function sa(){return zu=zu||new Lt}xs.Pa="serverreachability";function lm(t){Qt.call(this,xs.Pa,t)}qt(lm,Qt);function ir(t){const e=sa();jt(e,new lm(e))}xs.STAT_EVENT="statevent";function cm(t,e){Qt.call(this,xs.STAT_EVENT,t),this.stat=e}qt(cm,Qt);function en(t){const e=sa();jt(e,new cm(e,t))}xs.Qa="timingevent";function um(t,e){Qt.call(this,xs.Qa,t),this.size=e}qt(um,Qt);function Sr(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Te.setTimeout(function(){t()},e)}var ia={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},hm={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function gc(){}gc.prototype.h=null;function Ku(t){return t.h||(t.h=t.i())}function fm(){}var Ar={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function _c(){Qt.call(this,"d")}qt(_c,Qt);function vc(){Qt.call(this,"c")}qt(vc,Qt);var kl;function ra(){}qt(ra,gc);ra.prototype.g=function(){return new XMLHttpRequest};ra.prototype.i=function(){return{}};kl=new ra;function Dr(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new sr(this),this.O=m1,t=gl?125:void 0,this.T=new ta(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new dm}function dm(){this.i=null,this.g="",this.h=!1}var m1=45e3,El={},Ao={};ve=Dr.prototype;ve.setTimeout=function(t){this.O=t};function Tl(t,e,n){t.K=1,t.v=aa(Jn(e)),t.s=n,t.P=!0,pm(t,null)}function pm(t,e){t.F=Date.now(),Pr(t),t.A=Jn(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),km(n.i,"t",s),t.C=0,n=t.l.H,t.h=new dm,t.g=Hm(t.l,n?e:null,!t.s),0<t.N&&(t.L=new u1(Wt(t.La,t,t.g),t.N)),om(t.S,t.g,"readystatechange",t.ib),e=t.H?Yp(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),ir(),h1(t.j,t.u,t.A,t.m,t.U,t.s)}ve.ib=function(t){t=t.target;const e=this.L;e&&Gn(t)==3?e.l():this.La(t)};ve.La=function(t){try{if(t==this.g)e:{const h=Gn(this.g);var e=this.g.Ea();const f=this.g.aa();if(!(3>h)&&(h!=3||gl||this.g&&(this.h.h||this.g.fa()||Yu(this.g)))){this.I||h!=4||e==7||(e==8||0>=f?ir(3):ir(2)),oa(this);var n=this.g.aa();this.Y=n;t:if(mm(this)){var s=Yu(this.g);t="";var i=s.length,r=Gn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Os(this),Qi(this);var o="";break t}this.h.i=new Te.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,f1(this.j,this.u,this.A,this.m,this.U,h,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Co(a)){var c=a;break t}}c=null}if(n=c)oi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Il(this,n);else{this.i=!1,this.o=3,en(12),Os(this),Qi(this);break e}}this.P?(gm(this,h,o),gl&&this.i&&h==3&&(om(this.S,this.T,"tick",this.hb),this.T.start())):(oi(this.j,this.m,o,null),Il(this,o)),h==4&&Os(this),this.i&&!this.I&&(h==4?Bm(this.l,this):(this.i=!1,Pr(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,en(12)):(this.o=0,en(13)),Os(this),Qi(this)}}}catch{}finally{}};function mm(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function gm(t,e,n){let s=!0,i;for(;!t.I&&t.C<n.length;)if(i=g1(t,n),i==Ao){e==4&&(t.o=4,en(14),s=!1),oi(t.j,t.m,null,"[Incomplete Response]");break}else if(i==El){t.o=4,en(15),oi(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else oi(t.j,t.m,i,null),Il(t,i);mm(t)&&i!=Ao&&i!=El&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,en(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ic(e),e.K=!0,en(11))):(oi(t.j,t.m,n,"[Invalid Chunked Response]"),Os(t),Qi(t))}ve.hb=function(){if(this.g){var t=Gn(this.g),e=this.g.fa();this.C<e.length&&(oa(this),gm(this,t,e),this.i&&t!=4&&Pr(this))}};function g1(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Ao:(n=Number(e.substring(n,s)),isNaN(n)?El:(s+=1,s+n>e.length?Ao:(e=e.substr(s,n),t.C=s+n,e)))}ve.cancel=function(){this.I=!0,Os(this)};function Pr(t){t.V=Date.now()+t.O,_m(t,t.O)}function _m(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Sr(Wt(t.gb,t),e)}function oa(t){t.B&&(Te.clearTimeout(t.B),t.B=null)}ve.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(d1(this.j,this.A),this.K!=2&&(ir(),en(17)),Os(this),this.o=2,Qi(this)):_m(this,this.V-t)};function Qi(t){t.l.G==0||t.I||Bm(t.l,t)}function Os(t){oa(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,pc(t.T),am(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Il(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Cl(n.h,t))){if(!t.J&&Cl(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Ro(n),ua(n);else break e;Tc(n),en(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=Sr(Wt(n.cb,n),6e3));if(1>=Im(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Ls(n,11)}else if((t.J||n.g==t)&&Ro(n),!Co(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.T=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.I=c[1],n.ka=c[2];const h=c[3];h!=null&&(n.ma=h,n.j.info("VER="+n.ma));const f=c[4];f!=null&&(n.Ca=f,n.j.info("SVER="+n.Ca));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const g=t.g;if(g){const _=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_){var r=s.h;r.g||_.indexOf("spdy")==-1&&_.indexOf("quic")==-1&&_.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(yc(r,r.h),r.h=null))}if(s.D){const v=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(s.za=v,it(s.F,s.D,v))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=qm(s,s.H?s.ka:null,s.V),o.J){Cm(s.h,o);var a=o,l=s.J;l&&a.setTimeout(l),a.B&&(oa(a),Pr(a)),s.g=o}else Um(s);0<n.i.length&&ha(n)}else c[0]!="stop"&&c[0]!="close"||Ls(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Ls(n,7):Ec(n):c[0]!="noop"&&n.l&&n.l.wa(c),n.A=0)}}ir(4)}catch{}}function _1(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(xo(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function v1(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(xo(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function vm(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(xo(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=v1(t),s=_1(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}var ym=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function y1(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function $s(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof $s){this.h=e!==void 0?e:t.h,Do(this,t.j),this.s=t.s,this.g=t.g,Po(this,t.m),this.l=t.l,e=t.i;var n=new rr;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Gu(this,n),this.o=t.o}else t&&(n=String(t).match(ym))?(this.h=!!e,Do(this,n[1]||"",!0),this.s=qi(n[2]||""),this.g=qi(n[3]||"",!0),Po(this,n[4]),this.l=qi(n[5]||"",!0),Gu(this,n[6]||"",!0),this.o=qi(n[7]||"")):(this.h=!!e,this.i=new rr(null,this.h))}$s.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Hi(e,Wu,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Hi(e,Wu,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Hi(n,n.charAt(0)=="/"?k1:w1,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Hi(n,T1)),t.join("")};function Jn(t){return new $s(t)}function Do(t,e,n){t.j=n?qi(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Po(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Gu(t,e,n){e instanceof rr?(t.i=e,I1(t.i,t.h)):(n||(e=Hi(e,E1)),t.i=new rr(e,t.h))}function it(t,e,n){t.i.set(e,n)}function aa(t){return it(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function qi(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Hi(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,b1),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function b1(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Wu=/[#\/\?@]/g,w1=/[#\?:]/g,k1=/[#\?]/g,E1=/[#\?@]/g,T1=/#/g;function rr(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function As(t){t.g||(t.g=new Map,t.h=0,t.i&&y1(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}ve=rr.prototype;ve.add=function(t,e){As(this),this.i=null,t=Si(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function bm(t,e){As(t),e=Si(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function wm(t,e){return As(t),e=Si(t,e),t.g.has(e)}ve.forEach=function(t,e){As(this),this.g.forEach(function(n,s){n.forEach(function(i){t.call(e,i,s,this)},this)},this)};ve.oa=function(){As(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let r=0;r<i.length;r++)n.push(e[s])}return n};ve.W=function(t){As(this);let e=[];if(typeof t=="string")wm(this,t)&&(e=e.concat(this.g.get(Si(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};ve.set=function(t,e){return As(this),this.i=null,t=Si(this,t),wm(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};ve.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function km(t,e,n){bm(t,e),0<n.length&&(t.i=null,t.g.set(Si(t,e),oc(n)),t.h+=n.length)}ve.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};function Si(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function I1(t,e){e&&!t.j&&(As(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(bm(this,s),km(this,i,n))},t)),t.j=e}var C1=class{constructor(t,e){this.h=t,this.g=e}};function Em(t){this.l=t||S1,Te.PerformanceNavigationTiming?(t=Te.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Te.g&&Te.g.Ga&&Te.g.Ga()&&Te.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var S1=10;function Tm(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Im(t){return t.h?1:t.g?t.g.size:0}function Cl(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function yc(t,e){t.g?t.g.add(e):t.h=e}function Cm(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Em.prototype.cancel=function(){if(this.i=Sm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Sm(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return oc(t.i)}function bc(){}bc.prototype.stringify=function(t){return Te.JSON.stringify(t,void 0)};bc.prototype.parse=function(t){return Te.JSON.parse(t,void 0)};function A1(){this.g=new bc}function D1(t,e,n){const s=n||"";try{vm(t,function(i,r){let o=i;Ir(i)&&(o=dc(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function P1(t,e){const n=new na;if(Te.Image){const s=new Image;s.onload=Jr(eo,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Jr(eo,n,s,"TestLoadImage: error",!1,e),s.onabort=Jr(eo,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Jr(eo,n,s,"TestLoadImage: timeout",!1,e),Te.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function eo(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function Rr(t){this.l=t.ac||null,this.j=t.jb||!1}qt(Rr,gc);Rr.prototype.g=function(){return new la(this.l,this.j)};Rr.prototype.i=function(t){return function(){return t}}({});function la(t,e){Lt.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=wc,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}qt(la,Lt);var wc=0;ve=la.prototype;ve.open=function(t,e){if(this.readyState!=wc)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,or(this)};ve.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||Te).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};ve.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Nr(this)),this.readyState=wc};ve.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,or(this)),this.g&&(this.readyState=3,or(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof Te.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Am(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function Am(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}ve.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Nr(this):or(this),this.readyState==3&&Am(this)}};ve.Va=function(t){this.g&&(this.response=this.responseText=t,Nr(this))};ve.Ua=function(t){this.g&&(this.response=t,Nr(this))};ve.ga=function(){this.g&&Nr(this)};function Nr(t){t.readyState=4,t.l=null,t.j=null,t.A=null,or(t)}ve.setRequestHeader=function(t,e){this.v.append(t,e)};ve.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};ve.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function or(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(la.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var R1=Te.JSON.parse;function ut(t){Lt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Dm,this.K=this.L=!1}qt(ut,Lt);var Dm="",N1=/^https?$/i,O1=["POST","PUT"];ve=ut.prototype;ve.Ka=function(t){this.L=t};ve.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():kl.g(),this.C=this.u?Ku(this.u):Ku(kl),this.g.onreadystatechange=Wt(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){Qu(this,r);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=Te.FormData&&t instanceof Te.FormData,!(0<=Kp(O1,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Nm(this),0<this.B&&((this.K=L1(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Wt(this.qa,this)):this.A=mc(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){Qu(this,r)}};function L1(t){return _i&&x0()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}ve.qa=function(){typeof rc<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,jt(this,"timeout"),this.abort(8))};function Qu(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Pm(t),ca(t)}function Pm(t){t.D||(t.D=!0,jt(t,"complete"),jt(t,"error"))}ve.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,jt(this,"complete"),jt(this,"abort"),ca(this))};ve.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ca(this,!0)),ut.X.M.call(this)};ve.Ha=function(){this.s||(this.F||this.v||this.l?Rm(this):this.fb())};ve.fb=function(){Rm(this)};function Rm(t){if(t.h&&typeof rc<"u"&&(!t.C[1]||Gn(t)!=4||t.aa()!=2)){if(t.v&&Gn(t)==4)mc(t.Ha,0,t);else if(jt(t,"readystatechange"),Gn(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var i=String(t.H).match(ym)[1]||null;if(!i&&Te.self&&Te.self.location){var r=Te.self.location.protocol;i=r.substr(0,r.length-1)}s=!N1.test(i?i.toLowerCase():"")}n=s}if(n)jt(t,"complete"),jt(t,"success");else{t.m=6;try{var o=2<Gn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",Pm(t)}}finally{ca(t)}}}}function ca(t,e){if(t.g){Nm(t);const n=t.g,s=t.C[0]?Io:null;t.g=null,t.C=null,e||jt(t,"ready");try{n.onreadystatechange=s}catch{}}}function Nm(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(Te.clearTimeout(t.A),t.A=null)}function Gn(t){return t.g?t.g.readyState:0}ve.aa=function(){try{return 2<Gn(this)?this.g.status:-1}catch{return-1}};ve.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};ve.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),R1(e)}};function Yu(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Dm:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}ve.Ea=function(){return this.m};ve.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Om(t){let e="";return lc(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function kc(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=Om(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):it(t,e,n))}function Ui(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Lm(t){this.Ca=0,this.i=[],this.j=new na,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Ui("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Ui("baseRetryDelayMs",5e3,t),this.bb=Ui("retryDelaySeedMs",1e4,t),this.$a=Ui("forwardChannelMaxRetries",2,t),this.ta=Ui("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Em(t&&t.concurrentRequestLimit),this.Fa=new A1,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}ve=Lm.prototype;ve.ma=8;ve.G=1;function Ec(t){if(Mm(t),t.G==3){var e=t.U++,n=Jn(t.F);it(n,"SID",t.I),it(n,"RID",e),it(n,"TYPE","terminate"),Or(t,n),e=new Dr(t,t.j,e,void 0),e.K=2,e.v=aa(Jn(n)),n=!1,Te.navigator&&Te.navigator.sendBeacon&&(n=Te.navigator.sendBeacon(e.v.toString(),"")),!n&&Te.Image&&(new Image().src=e.v,n=!0),n||(e.g=Hm(e.l,null),e.g.da(e.v)),e.F=Date.now(),Pr(e)}jm(t)}function ua(t){t.g&&(Ic(t),t.g.cancel(),t.g=null)}function Mm(t){ua(t),t.u&&(Te.clearTimeout(t.u),t.u=null),Ro(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&Te.clearTimeout(t.m),t.m=null)}function ha(t){Tm(t.h)||t.m||(t.m=!0,sm(t.Ja,t),t.C=0)}function M1(t,e){return Im(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Sr(Wt(t.Ja,t,e),Vm(t,t.C)),t.C++,!0)}ve.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new Dr(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=Yp(r),Xp(r,this.S)):r=this.S),this.o!==null||this.N||(i.H=r,r=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=$m(this,i,e),n=Jn(this.F),it(n,"RID",t),it(n,"CVER",22),this.D&&it(n,"X-HTTP-Session-Id",this.D),Or(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(Om(r)))+"&"+e:this.o&&kc(n,this.o,r)),yc(this.h,i),this.Ya&&it(n,"TYPE","init"),this.O?(it(n,"$req",e),it(n,"SID","null"),i.Z=!0,Tl(i,n,null)):Tl(i,n,e),this.G=2}}else this.G==3&&(t?Xu(this,t):this.i.length==0||Tm(this.h)||Xu(this))};function Xu(t,e){var n;e?n=e.m:n=t.U++;const s=Jn(t.F);it(s,"SID",t.I),it(s,"RID",n),it(s,"AID",t.T),Or(t,s),t.o&&t.s&&kc(s,t.o,t.s),n=new Dr(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=$m(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),yc(t.h,n),Tl(n,s,e)}function Or(t,e){t.ia&&lc(t.ia,function(n,s){it(e,s,n)}),t.l&&vm({},function(n,s){it(e,s,n)})}function $m(t,e,n){n=Math.min(t.i.length,n);var s=t.l?Wt(t.l.Ra,t.l,t):null;e:{var i=t.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let c=i[l].h;const h=i[l].g;if(c-=r,0>c)r=Math.max(0,i[l].h-100),a=!1;else try{D1(h,o,"req"+c+"_")}catch{s&&s(h)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function Um(t){t.g||t.u||(t.Z=1,sm(t.Ia,t),t.A=0)}function Tc(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Sr(Wt(t.Ia,t),Vm(t,t.A)),t.A++,!0)}ve.Ia=function(){if(this.u=null,Fm(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Sr(Wt(this.eb,this),t)}};ve.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,en(10),ua(this),Fm(this))};function Ic(t){t.B!=null&&(Te.clearTimeout(t.B),t.B=null)}function Fm(t){t.g=new Dr(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Jn(t.sa);it(e,"RID","rpc"),it(e,"SID",t.I),it(e,"CI",t.L?"0":"1"),it(e,"AID",t.T),it(e,"TYPE","xmlhttp"),Or(t,e),t.o&&t.s&&kc(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=aa(Jn(e)),n.s=null,n.P=!0,pm(n,t)}ve.cb=function(){this.v!=null&&(this.v=null,ua(this),Tc(this),en(19))};function Ro(t){t.v!=null&&(Te.clearTimeout(t.v),t.v=null)}function Bm(t,e){var n=null;if(t.g==e){Ro(t),Ic(t),t.g=null;var s=2}else if(Cl(t.h,e))n=e.D,Cm(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;s=sa(),jt(s,new um(s,n)),ha(t)}else Um(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(s==1&&M1(t,e)||s==2&&Tc(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Ls(t,5);break;case 4:Ls(t,10);break;case 3:Ls(t,6);break;default:Ls(t,2)}}}function Vm(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Ls(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=Wt(t.kb,t);n||(n=new $s("//www.google.com/images/cleardot.gif"),Te.location&&Te.location.protocol=="http"||Do(n,"https"),aa(n)),P1(n.toString(),s)}else en(2);t.G=0,t.l&&t.l.va(e),jm(t),Mm(t)}ve.kb=function(t){t?(this.j.info("Successfully pinged google.com"),en(2)):(this.j.info("Failed to ping google.com"),en(1))};function jm(t){if(t.G=0,t.la=[],t.l){const e=Sm(t.h);(e.length!=0||t.i.length!=0)&&(Bu(t.la,e),Bu(t.la,t.i),t.h.i.length=0,oc(t.i),t.i.length=0),t.l.ua()}}function qm(t,e,n){var s=n instanceof $s?Jn(n):new $s(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),Po(s,s.m);else{var i=Te.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new $s(null,void 0);s&&Do(r,s),e&&(r.g=e),i&&Po(r,i),n&&(r.l=n),s=r}return n=t.D,e=t.za,n&&e&&it(s,n,e),it(s,"VER",t.ma),Or(t,s),s}function Hm(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new ut(new Rr({jb:!0})):new ut(t.ra),e.Ka(t.H),e}function zm(){}ve=zm.prototype;ve.xa=function(){};ve.wa=function(){};ve.va=function(){};ve.ua=function(){};ve.Ra=function(){};function No(){if(_i&&!(10<=Number(J0)))throw Error("Environmental error: no available transport.")}No.prototype.g=function(t,e){return new yn(t,e)};function yn(t,e){Lt.call(this),this.g=new Lm(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Co(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Co(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ai(this)}qt(yn,Lt);yn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;en(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=qm(t,null,t.V),ha(t)};yn.prototype.close=function(){Ec(this.g)};yn.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=dc(t),t=n);e.i.push(new C1(e.ab++,t)),e.G==3&&ha(e)};yn.prototype.M=function(){this.g.l=null,delete this.j,Ec(this.g),delete this.g,yn.X.M.call(this)};function Km(t){_c.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}qt(Km,_c);function Gm(){vc.call(this),this.status=1}qt(Gm,vc);function Ai(t){this.g=t}qt(Ai,zm);Ai.prototype.xa=function(){jt(this.g,"a")};Ai.prototype.wa=function(t){jt(this.g,new Km(t))};Ai.prototype.va=function(t){jt(this.g,new Gm)};Ai.prototype.ua=function(){jt(this.g,"b")};No.prototype.createWebChannel=No.prototype.g;yn.prototype.send=yn.prototype.u;yn.prototype.open=yn.prototype.m;yn.prototype.close=yn.prototype.close;ia.NO_ERROR=0;ia.TIMEOUT=8;ia.HTTP_ERROR=6;hm.COMPLETE="complete";fm.EventType=Ar;Ar.OPEN="a";Ar.CLOSE="b";Ar.ERROR="c";Ar.MESSAGE="d";Lt.prototype.listen=Lt.prototype.N;ut.prototype.listenOnce=ut.prototype.O;ut.prototype.getLastError=ut.prototype.Oa;ut.prototype.getLastErrorCode=ut.prototype.Ea;ut.prototype.getStatus=ut.prototype.aa;ut.prototype.getResponseJson=ut.prototype.Sa;ut.prototype.getResponseText=ut.prototype.fa;ut.prototype.send=ut.prototype.da;ut.prototype.setWithCredentials=ut.prototype.Ka;var $1=function(){return new No},U1=function(){return sa()},Xa=ia,F1=hm,B1=xs,xu={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},V1=Rr,to=fm,j1=ut;const Ju="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let Di="9.12.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ks=new nc("@firebase/firestore");function Zu(){return Ks.logLevel}function be(t,...e){if(Ks.logLevel<=ze.DEBUG){const n=e.map(Cc);Ks.debug(`Firestore (${Di}): ${t}`,...n)}}function Zn(t,...e){if(Ks.logLevel<=ze.ERROR){const n=e.map(Cc);Ks.error(`Firestore (${Di}): ${t}`,...n)}}function Sl(t,...e){if(Ks.logLevel<=ze.WARN){const n=e.map(Cc);Ks.warn(`Firestore (${Di}): ${t}`,...n)}}function Cc(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function Ie(t="Unexpected state"){const e=`FIRESTORE (${Di}) INTERNAL ASSERTION FAILED: `+t;throw Zn(e),new Error(e)}function nt(t,e){t||Ie()}function Se(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const te={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ke extends ss{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Wm{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class q1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Kt.UNAUTHENTICATED))}shutdown(){}}class H1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class z1{constructor(e){this.t=e,this.currentUser=Kt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=l=>this.i!==s?(s=this.i,n(l)):Promise.resolve();let r=new _s;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new _s,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{be("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(be("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new _s)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(be("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(nt(typeof s.accessToken=="string"),new Wm(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return nt(e===null||typeof e=="string"),new Kt(e)}}class K1{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i,this.type="FirstParty",this.user=Kt.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(nt(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class G1{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i}getToken(){return Promise.resolve(new K1(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(Kt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class W1{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Q1{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=r=>{r.error!=null&&be("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.A;return this.A=r.token,be("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{be("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.T.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.T.getImmediate({optional:!0});r?i(r):be("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(nt(typeof n.token=="string"),this.A=n.token,new W1(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y1(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qm{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=Y1(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function Qe(t,e){return t<e?-1:t>e?1:0}function vi(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ke(te.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ke(te.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new ke(te.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ke(te.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Et.fromMillis(Date.now())}static fromDate(e){return Et.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Et(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Qe(this.nanoseconds,e.nanoseconds):Qe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e){this.timestamp=e}static fromTimestamp(e){return new De(e)}static min(){return new De(new Et(0,0))}static max(){return new De(new Et(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(e,n,s){n===void 0?n=0:n>e.length&&Ie(),s===void 0?s=e.length-n:s>e.length-n&&Ie(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return ar.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ar?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class rt extends ar{construct(e,n,s){return new rt(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new ke(te.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new rt(n)}static emptyPath(){return new rt([])}}const X1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Gt extends ar{construct(e,n,s){return new Gt(e,n,s)}static isValidIdentifier(e){return X1.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Gt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Gt(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new ke(te.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new ke(te.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new ke(te.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new ke(te.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Gt(n)}static emptyPath(){return new Gt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e){this.path=e}static fromPath(e){return new we(rt.fromString(e))}static fromName(e){return new we(rt.fromString(e).popFirst(5))}static empty(){return new we(rt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&rt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return rt.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new we(new rt(e.slice()))}}function x1(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=De.fromTimestamp(s===1e9?new Et(n+1,0):new Et(n,s));return new Es(i,we.empty(),e)}function J1(t){return new Es(t.readTime,t.key,-1)}class Es{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Es(De.min(),we.empty(),-1)}static max(){return new Es(De.max(),we.empty(),-1)}}function Z1(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=we.comparator(t.documentKey,e.documentKey),n!==0?n:Qe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class tb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lr(t){if(t.code!==te.FAILED_PRECONDITION||t.message!==eb)throw t;be("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Ie(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new ne((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof ne?n:ne.resolve(n)}catch(n){return ne.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):ne.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):ne.reject(n)}static resolve(e){return new ne((n,s)=>{n(e)})}static reject(e){return new ne((n,s)=>{s(e)})}static waitFor(e){return new ne((n,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},l=>s(l))}),o=!0,r===i&&n()})}static or(e){let n=ne.resolve(!1);for(const s of e)n=n.next(i=>i?ne.resolve(i):s());return n}static forEach(e,n){const s=[];return e.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(e,n){return new ne((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let l=0;l<r;l++){const c=l;n(e[c]).next(h=>{o[c]=h,++a,a===r&&s(o)},h=>i(h))}})}static doWhile(e,n){return new ne((s,i)=>{const r=()=>{e()===!0?n().next(()=>{r()},i):s()};r()})}}function Mr(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Sc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eh(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Js(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Ym(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Sc.at=-1;class It{constructor(e,n){this.comparator=e,this.root=n||Bt.EMPTY}insert(e,n){return new It(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Bt.BLACK,null,null))}remove(e){return new It(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Bt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new no(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new no(this.root,e,this.comparator,!1)}getReverseIterator(){return new no(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new no(this.root,e,this.comparator,!0)}}class no{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Bt{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s!=null?s:Bt.RED,this.left=i!=null?i:Bt.EMPTY,this.right=r!=null?r:Bt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new Bt(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Bt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Bt.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Bt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Bt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Ie();const e=this.left.check();if(e!==this.right.check())throw Ie();return e+(this.isRed()?0:1)}}Bt.EMPTY=null,Bt.RED=!0,Bt.BLACK=!1;Bt.EMPTY=new class{constructor(){this.size=0}get key(){throw Ie()}get value(){throw Ie()}get color(){throw Ie()}get left(){throw Ie()}get right(){throw Ie()}copy(t,e,n,s,i){return this}insert(t,e,n){return new Bt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e){this.comparator=e,this.data=new It(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new th(this.data.getIterator())}getIteratorFrom(e){return new th(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof Tt)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Tt(this.comparator);return n.data=e,n}}class th{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(e){this.fields=e,e.sort(Gt.comparator)}static empty(){return new En([])}unionWith(e){let n=new Tt(Gt.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new En(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return vi(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new xt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(e);return new xt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Qe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}xt.EMPTY_BYTE_STRING=new xt("");const nb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ts(t){if(nt(!!t),typeof t=="string"){let e=0;const n=nb.exec(t);if(nt(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:vt(t.seconds),nanos:vt(t.nanos)}}function vt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function yi(t){return typeof t=="string"?xt.fromBase64String(t):xt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xm(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function xm(t){const e=t.mapValue.fields.__previous_value__;return Xm(e)?xm(e):e}function lr(t){const e=Ts(t.mapValue.fields.__local_write_time__.timestampValue);return new Et(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sb{constructor(e,n,s,i,r,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class cr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new cr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof cr&&e.projectId===this.projectId&&e.database===this.database}}function fa(t){return t==null}function Oo(t){return t===0&&1/t==-1/0}function ib(t){return typeof t=="number"&&Number.isInteger(t)&&!Oo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const so={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Gs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Xm(t)?4:rb(t)?9007199254740991:10:Ie()}function Fn(t,e){if(t===e)return!0;const n=Gs(t);if(n!==Gs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return lr(t).isEqual(lr(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=Ts(s.timestampValue),o=Ts(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return yi(s.bytesValue).isEqual(yi(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return vt(s.geoPointValue.latitude)===vt(i.geoPointValue.latitude)&&vt(s.geoPointValue.longitude)===vt(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return vt(s.integerValue)===vt(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=vt(s.doubleValue),o=vt(i.doubleValue);return r===o?Oo(r)===Oo(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return vi(t.arrayValue.values||[],e.arrayValue.values||[],Fn);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(eh(r)!==eh(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!Fn(r[a],o[a])))return!1;return!0}(t,e);default:return Ie()}}function ur(t,e){return(t.values||[]).find(n=>Fn(n,e))!==void 0}function bi(t,e){if(t===e)return 0;const n=Gs(t),s=Gs(e);if(n!==s)return Qe(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Qe(t.booleanValue,e.booleanValue);case 2:return function(i,r){const o=vt(i.integerValue||i.doubleValue),a=vt(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return nh(t.timestampValue,e.timestampValue);case 4:return nh(lr(t),lr(e));case 5:return Qe(t.stringValue,e.stringValue);case 6:return function(i,r){const o=yi(i),a=yi(r);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=Qe(o[l],a[l]);if(c!==0)return c}return Qe(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,r){const o=Qe(vt(i.latitude),vt(r.latitude));return o!==0?o:Qe(vt(i.longitude),vt(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=bi(o[l],a[l]);if(c)return c}return Qe(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,r){if(i===so.mapValue&&r===so.mapValue)return 0;if(i===so.mapValue)return 1;if(r===so.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=r.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let h=0;h<a.length&&h<c.length;++h){const f=Qe(a[h],c[h]);if(f!==0)return f;const d=bi(o[a[h]],l[c[h]]);if(d!==0)return d}return Qe(a.length,c.length)}(t.mapValue,e.mapValue);default:throw Ie()}}function nh(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Qe(t,e);const n=Ts(t),s=Ts(e),i=Qe(n.seconds,s.seconds);return i!==0?i:Qe(n.nanos,s.nanos)}function ui(t){return Al(t)}function Al(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const i=Ts(s);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?yi(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,we.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=Al(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${Al(s.fields[a])}`;return r+"}"}(t.mapValue):Ie();var e,n}function Dl(t){return!!t&&"integerValue"in t}function Ac(t){return!!t&&"arrayValue"in t}function sh(t){return!!t&&"nullValue"in t}function ih(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function lo(t){return!!t&&"mapValue"in t}function Yi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Js(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Yi(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Yi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function rb(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e){this.value=e}static empty(){return new fn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!lo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Yi(n)}setAll(e){let n=Gt.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=Yi(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());lo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Fn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];lo(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){Js(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new fn(Yi(this.value))}}function Jm(t){const e=[];return Js(t.fields,(n,s)=>{const i=new Gt([n]);if(lo(s)){const r=Jm(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new En(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e,n,s,i,r,o){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.data=r,this.documentState=o}static newInvalidDocument(e){return new Vt(e,0,De.min(),De.min(),fn.empty(),0)}static newFoundDocument(e,n,s){return new Vt(e,1,n,De.min(),s,0)}static newNoDocument(e,n){return new Vt(e,2,n,De.min(),fn.empty(),0)}static newUnknownDocument(e,n){return new Vt(e,3,n,De.min(),fn.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=fn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=fn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=De.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Vt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Vt(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ob{constructor(e,n=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.ht=null}}function rh(t,e=null,n=[],s=[],i=null,r=null,o=null){return new ob(t,e,n,s,i,r,o)}function Dc(t){const e=Se(t);if(e.ht===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>{return(i=s).field.canonicalString()+i.op.toString()+ui(i.value);var i}).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),fa(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>ui(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>ui(s)).join(",")),e.ht=n}return e.ht}function ab(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${ui(s.value)}`;var s}).join(", ")}]`),fa(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>ui(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>ui(n)).join(",")),`Target(${e})`}function Pc(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!mb(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],s=e.filters[i],n.op!==s.op||!n.field.isEqual(s.field)||!Fn(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!ah(t.startAt,e.startAt)&&ah(t.endAt,e.endAt)}function Pl(t){return we.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class pn extends class{}{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.lt(e,n,s):new lb(e,n,s):n==="array-contains"?new hb(e,s):n==="in"?new fb(e,s):n==="not-in"?new db(e,s):n==="array-contains-any"?new pb(e,s):new pn(e,n,s)}static lt(e,n,s){return n==="in"?new cb(e,s):new ub(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.ft(bi(n,this.value)):n!==null&&Gs(this.value)===Gs(n)&&this.ft(bi(n,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ie()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class lb extends pn{constructor(e,n,s){super(e,n,s),this.key=we.fromName(s.referenceValue)}matches(e){const n=we.comparator(e.key,this.key);return this.ft(n)}}class cb extends pn{constructor(e,n){super(e,"in",n),this.keys=Zm("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class ub extends pn{constructor(e,n){super(e,"not-in",n),this.keys=Zm("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Zm(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>we.fromName(s.referenceValue))}class hb extends pn{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ac(n)&&ur(n.arrayValue,this.value)}}class fb extends pn{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ur(this.value.arrayValue,n)}}class db extends pn{constructor(e,n){super(e,"not-in",n)}matches(e){if(ur(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ur(this.value.arrayValue,n)}}class pb extends pn{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ac(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>ur(this.value.arrayValue,s))}}class Lo{constructor(e,n){this.position=e,this.inclusive=n}}class Xi{constructor(e,n="asc"){this.field=e,this.dir=n}}function mb(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function oh(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=we.comparator(we.fromName(o.referenceValue),n.key):s=bi(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function ah(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Fn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(e,n=null,s=[],i=[],r=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this._t=null,this.wt=null,this.startAt,this.endAt}}function gb(t,e,n,s,i,r,o,a){return new da(t,e,n,s,i,r,o,a)}function Rc(t){return new da(t)}function lh(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function _b(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function vb(t){for(const e of t.filters)if(e.dt())return e.field;return null}function yb(t){return t.collectionGroup!==null}function hr(t){const e=Se(t);if(e._t===null){e._t=[];const n=vb(e),s=_b(e);if(n!==null&&s===null)n.isKeyField()||e._t.push(new Xi(n)),e._t.push(new Xi(Gt.keyField(),"asc"));else{let i=!1;for(const r of e.explicitOrderBy)e._t.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new Xi(Gt.keyField(),r))}}}return e._t}function es(t){const e=Se(t);if(!e.wt)if(e.limitType==="F")e.wt=rh(e.path,e.collectionGroup,hr(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of hr(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new Xi(r.field,o))}const s=e.endAt?new Lo(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Lo(e.startAt.position,e.startAt.inclusive):null;e.wt=rh(e.path,e.collectionGroup,n,e.filters,e.limit,s,i)}return e.wt}function Rl(t,e,n){return new da(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function pa(t,e){return Pc(es(t),es(e))&&t.limitType===e.limitType}function eg(t){return`${Dc(es(t))}|lt:${t.limitType}`}function Nl(t){return`Query(target=${ab(es(t))}; limitType=${t.limitType})`}function Nc(t,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):we.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,s){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=oh(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,hr(n),s)||n.endAt&&!function(i,r,o){const a=oh(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,hr(n),s))}(t,e)}function bb(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function tg(t){return(e,n)=>{let s=!1;for(const i of hr(t)){const r=wb(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function wb(t,e,n){const s=t.field.isKeyField()?we.comparator(e.key,n.key):function(i,r,o){const a=r.data.field(i),l=o.data.field(i);return a!==null&&l!==null?bi(a,l):Ie()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return Ie()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ng(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Oo(e)?"-0":e}}function sg(t){return{integerValue:""+t}}function kb(t,e){return ib(e)?sg(e):ng(t,e)}/**
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
 */class ma{constructor(){this._=void 0}}function Eb(t,e,n){return t instanceof Mo?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,e):t instanceof fr?rg(t,e):t instanceof dr?og(t,e):function(s,i){const r=ig(s,i),o=ch(r)+ch(s.yt);return Dl(r)&&Dl(s.yt)?sg(o):ng(s.It,o)}(t,e)}function Tb(t,e,n){return t instanceof fr?rg(t,e):t instanceof dr?og(t,e):n}function ig(t,e){return t instanceof $o?Dl(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Mo extends ma{}class fr extends ma{constructor(e){super(),this.elements=e}}function rg(t,e){const n=ag(e);for(const s of t.elements)n.some(i=>Fn(i,s))||n.push(s);return{arrayValue:{values:n}}}class dr extends ma{constructor(e){super(),this.elements=e}}function og(t,e){let n=ag(e);for(const s of t.elements)n=n.filter(i=>!Fn(i,s));return{arrayValue:{values:n}}}class $o extends ma{constructor(e,n){super(),this.It=e,this.yt=n}}function ch(t){return vt(t.integerValue||t.doubleValue)}function ag(t){return Ac(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Ib(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof fr&&s instanceof fr||n instanceof dr&&s instanceof dr?vi(n.elements,s.elements,Fn):n instanceof $o&&s instanceof $o?Fn(n.yt,s.yt):n instanceof Mo&&s instanceof Mo}(t.transform,e.transform)}class Cb{constructor(e,n){this.version=e,this.transformResults=n}}class Tn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Tn}static exists(e){return new Tn(void 0,e)}static updateTime(e){return new Tn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function co(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ga{}function lg(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Oc(t.key,Tn.none()):new $r(t.key,t.data,Tn.none());{const n=t.data,s=fn.empty();let i=new Tt(Gt.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new Ds(t.key,s,new En(i.toArray()),Tn.none())}}function Sb(t,e,n){t instanceof $r?function(s,i,r){const o=s.value.clone(),a=hh(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Ds?function(s,i,r){if(!co(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=hh(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(cg(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function xi(t,e,n,s){return t instanceof $r?function(i,r,o,a){if(!co(i.precondition,r))return o;const l=i.value.clone(),c=fh(i.fieldTransforms,a,r);return l.setAll(c),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),null}(t,e,n,s):t instanceof Ds?function(i,r,o,a){if(!co(i.precondition,r))return o;const l=fh(i.fieldTransforms,a,r),c=r.data;return c.setAll(cg(i)),c.setAll(l),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,s):function(i,r,o){return co(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(t,e,n)}function Ab(t,e){let n=null;for(const s of t.fieldTransforms){const i=e.data.field(s.field),r=ig(s.transform,i||null);r!=null&&(n===null&&(n=fn.empty()),n.set(s.field,r))}return n||null}function uh(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&vi(n,s,(i,r)=>Ib(i,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class $r extends ga{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ds extends ga{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function cg(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function hh(t,e,n){const s=new Map;nt(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,Tb(o,a,n[i]))}return s}function fh(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,Eb(r,o,e))}return s}class Oc extends ga{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Db extends ga{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pb{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _t,$e;function Rb(t){switch(t){default:return Ie();case te.CANCELLED:case te.UNKNOWN:case te.DEADLINE_EXCEEDED:case te.RESOURCE_EXHAUSTED:case te.INTERNAL:case te.UNAVAILABLE:case te.UNAUTHENTICATED:return!1;case te.INVALID_ARGUMENT:case te.NOT_FOUND:case te.ALREADY_EXISTS:case te.PERMISSION_DENIED:case te.FAILED_PRECONDITION:case te.ABORTED:case te.OUT_OF_RANGE:case te.UNIMPLEMENTED:case te.DATA_LOSS:return!0}}function ug(t){if(t===void 0)return Zn("GRPC error has no .code"),te.UNKNOWN;switch(t){case _t.OK:return te.OK;case _t.CANCELLED:return te.CANCELLED;case _t.UNKNOWN:return te.UNKNOWN;case _t.DEADLINE_EXCEEDED:return te.DEADLINE_EXCEEDED;case _t.RESOURCE_EXHAUSTED:return te.RESOURCE_EXHAUSTED;case _t.INTERNAL:return te.INTERNAL;case _t.UNAVAILABLE:return te.UNAVAILABLE;case _t.UNAUTHENTICATED:return te.UNAUTHENTICATED;case _t.INVALID_ARGUMENT:return te.INVALID_ARGUMENT;case _t.NOT_FOUND:return te.NOT_FOUND;case _t.ALREADY_EXISTS:return te.ALREADY_EXISTS;case _t.PERMISSION_DENIED:return te.PERMISSION_DENIED;case _t.FAILED_PRECONDITION:return te.FAILED_PRECONDITION;case _t.ABORTED:return te.ABORTED;case _t.OUT_OF_RANGE:return te.OUT_OF_RANGE;case _t.UNIMPLEMENTED:return te.UNIMPLEMENTED;case _t.DATA_LOSS:return te.DATA_LOSS;default:return Ie()}}($e=_t||(_t={}))[$e.OK=0]="OK",$e[$e.CANCELLED=1]="CANCELLED",$e[$e.UNKNOWN=2]="UNKNOWN",$e[$e.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",$e[$e.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",$e[$e.NOT_FOUND=5]="NOT_FOUND",$e[$e.ALREADY_EXISTS=6]="ALREADY_EXISTS",$e[$e.PERMISSION_DENIED=7]="PERMISSION_DENIED",$e[$e.UNAUTHENTICATED=16]="UNAUTHENTICATED",$e[$e.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",$e[$e.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",$e[$e.ABORTED=10]="ABORTED",$e[$e.OUT_OF_RANGE=11]="OUT_OF_RANGE",$e[$e.UNIMPLEMENTED=12]="UNIMPLEMENTED",$e[$e.INTERNAL=13]="INTERNAL",$e[$e.UNAVAILABLE=14]="UNAVAILABLE",$e[$e.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Js(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return Ym(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nb=new It(we.comparator);function ts(){return Nb}const hg=new It(we.comparator);function zi(...t){let e=hg;for(const n of t)e=e.insert(n.key,n);return e}function fg(t){let e=hg;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Ms(){return Ji()}function dg(){return Ji()}function Ji(){return new Pi(t=>t.toString(),(t,e)=>t.isEqual(e))}const Ob=new It(we.comparator),Lb=new Tt(we.comparator);function Oe(...t){let e=Lb;for(const n of t)e=e.add(n);return e}const Mb=new Tt(Qe);function pg(){return Mb}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const i=new Map;return i.set(e,Ur.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new _a(De.min(),i,pg(),ts(),Oe())}}class Ur{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Ur(s,n,Oe(),Oe(),Oe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e,n,s,i){this.Tt=e,this.removedTargetIds=n,this.key=s,this.Et=i}}class mg{constructor(e,n){this.targetId=e,this.At=n}}class gg{constructor(e,n,s=xt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class dh{constructor(){this.Rt=0,this.bt=mh(),this.Pt=xt.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=Oe(),n=Oe(),s=Oe();return this.bt.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:Ie()}}),new Ur(this.Pt,this.vt,e,n,s)}Nt(){this.Vt=!1,this.bt=mh()}kt(e,n){this.Vt=!0,this.bt=this.bt.insert(e,n)}Ot(e){this.Vt=!0,this.bt=this.bt.remove(e)}Mt(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class $b{constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=ts(),this.qt=ph(),this.Kt=new Tt(Qe)}Gt(e){for(const n of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(n,e.Et):this.jt(n,e.key,e.Et);for(const n of e.removedTargetIds)this.jt(n,e.key,e.Et)}Wt(e){this.forEachTarget(e,n=>{const s=this.zt(n);switch(e.state){case 0:this.Ht(n)&&s.Ct(e.resumeToken);break;case 1:s.Ft(),s.St||s.Nt(),s.Ct(e.resumeToken);break;case 2:s.Ft(),s.St||this.removeTarget(n);break;case 3:this.Ht(n)&&(s.$t(),s.Ct(e.resumeToken));break;case 4:this.Ht(n)&&(this.Jt(n),s.Ct(e.resumeToken));break;default:Ie()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Lt.forEach((s,i)=>{this.Ht(i)&&n(i)})}Yt(e){const n=e.targetId,s=e.At.count,i=this.Xt(n);if(i){const r=i.target;if(Pl(r))if(s===0){const o=new we(r.path);this.jt(n,o,Vt.newNoDocument(o,De.min()))}else nt(s===1);else this.Zt(n)!==s&&(this.Jt(n),this.Kt=this.Kt.add(n))}}te(e){const n=new Map;this.Lt.forEach((r,o)=>{const a=this.Xt(o);if(a){if(r.current&&Pl(a.target)){const l=new we(a.target.path);this.Ut.get(l)!==null||this.ee(o,l)||this.jt(o,l,Vt.newNoDocument(l,e))}r.Dt&&(n.set(o,r.xt()),r.Nt())}});let s=Oe();this.qt.forEach((r,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Xt(l);return!c||c.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))}),this.Ut.forEach((r,o)=>o.setReadTime(e));const i=new _a(e,n,this.Kt,this.Ut,s);return this.Ut=ts(),this.qt=ph(),this.Kt=new Tt(Qe),i}Qt(e,n){if(!this.Ht(e))return;const s=this.ee(e,n.key)?2:0;this.zt(e).kt(n.key,s),this.Ut=this.Ut.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ne(n.key).add(e))}jt(e,n,s){if(!this.Ht(e))return;const i=this.zt(e);this.ee(e,n)?i.kt(n,1):i.Ot(n),this.qt=this.qt.insert(n,this.ne(n).delete(e)),s&&(this.Ut=this.Ut.insert(n,s))}removeTarget(e){this.Lt.delete(e)}Zt(e){const n=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Mt(e){this.zt(e).Mt()}zt(e){let n=this.Lt.get(e);return n||(n=new dh,this.Lt.set(e,n)),n}ne(e){let n=this.qt.get(e);return n||(n=new Tt(Qe),this.qt=this.qt.insert(e,n)),n}Ht(e){const n=this.Xt(e)!==null;return n||be("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.Lt.get(e);return n&&n.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new dh),this.Bt.getRemoteKeysForTarget(e).forEach(n=>{this.jt(e,n,null)})}ee(e,n){return this.Bt.getRemoteKeysForTarget(e).has(n)}}function ph(){return new It(we.comparator)}function mh(){return new It(we.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ub=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Fb=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class Bb{constructor(e,n){this.databaseId=e,this.gt=n}}function Uo(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function _g(t,e){return t.gt?e.toBase64():e.toUint8Array()}function Vb(t,e){return Uo(t,e.toTimestamp())}function Yn(t){return nt(!!t),De.fromTimestamp(function(e){const n=Ts(e);return new Et(n.seconds,n.nanos)}(t))}function Lc(t,e){return function(n){return new rt(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function vg(t){const e=rt.fromString(t);return nt(wg(e)),e}function Ol(t,e){return Lc(t.databaseId,e.path)}function xa(t,e){const n=vg(e);if(n.get(1)!==t.databaseId.projectId)throw new ke(te.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ke(te.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new we(yg(n))}function Ll(t,e){return Lc(t.databaseId,e)}function jb(t){const e=vg(t);return e.length===4?rt.emptyPath():yg(e)}function Ml(t){return new rt(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function yg(t){return nt(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function gh(t,e,n){return{name:Ol(t,e),fields:n.value.mapValue.fields}}function qb(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:Ie()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(l,c){return l.gt?(nt(c===void 0||typeof c=="string"),xt.fromBase64String(c||"")):(nt(c===void 0||c instanceof Uint8Array),xt.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const c=l.code===void 0?te.UNKNOWN:ug(l.code);return new ke(c,l.message||"")}(o);n=new gg(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=xa(t,s.document.name),r=Yn(s.document.updateTime),o=new fn({mapValue:{fields:s.document.fields}}),a=Vt.newFoundDocument(i,r,o),l=s.targetIds||[],c=s.removedTargetIds||[];n=new uo(l,c,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=xa(t,s.document),r=s.readTime?Yn(s.readTime):De.min(),o=Vt.newNoDocument(i,r),a=s.removedTargetIds||[];n=new uo([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=xa(t,s.document),r=s.removedTargetIds||[];n=new uo([],r,i,null)}else{if(!("filter"in e))return Ie();{e.filter;const s=e.filter;s.targetId;const i=s.count||0,r=new Pb(i),o=s.targetId;n=new mg(o,r)}}return n}function Hb(t,e){let n;if(e instanceof $r)n={update:gh(t,e.key,e.value)};else if(e instanceof Oc)n={delete:Ol(t,e.key)};else if(e instanceof Ds)n={update:gh(t,e.key,e.data),updateMask:Zb(e.fieldMask)};else{if(!(e instanceof Db))return Ie();n={verify:Ol(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof Mo)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof fr)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof dr)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof $o)return{fieldPath:r.field.canonicalString(),increment:o.yt};throw Ie()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Vb(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Ie()}(t,e.precondition)),n}function zb(t,e){return t&&t.length>0?(nt(e!==void 0),t.map(n=>function(s,i){let r=s.updateTime?Yn(s.updateTime):Yn(i);return r.isEqual(De.min())&&(r=Yn(i)),new Cb(r,s.transformResults||[])}(n,e))):[]}function Kb(t,e){return{documents:[Ll(t,e.path)]}}function Gb(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Ll(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Ll(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(l){if(l.length===0)return;const c=l.map(h=>function(f){if(f.op==="=="){if(ih(f.value))return{unaryFilter:{field:ii(f.field),op:"IS_NAN"}};if(sh(f.value))return{unaryFilter:{field:ii(f.field),op:"IS_NULL"}}}else if(f.op==="!="){if(ih(f.value))return{unaryFilter:{field:ii(f.field),op:"IS_NOT_NAN"}};if(sh(f.value))return{unaryFilter:{field:ii(f.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ii(f.field),op:Xb(f.op),value:f.value}}}(h));return c.length===1?c[0]:{compositeFilter:{op:"AND",filters:c}}}(e.filters);i&&(n.structuredQuery.where=i);const r=function(l){if(l.length!==0)return l.map(c=>function(h){return{field:ii(h.field),direction:Yb(h.dir)}}(c))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(l,c){return l.gt||fa(c)?c:{value:c}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function Wb(t){let e=jb(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){nt(s===1);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let r=[];n.where&&(r=bg(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(h=>function(f){return new Xi(ai(f.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(f.direction))}(h)));let a=null;n.limit&&(a=function(h){let f;return f=typeof h=="object"?h.value:h,fa(f)?null:f}(n.limit));let l=null;n.startAt&&(l=function(h){const f=!!h.before,d=h.values||[];return new Lo(d,f)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const f=!h.before,d=h.values||[];return new Lo(d,f)}(n.endAt)),gb(e,i,o,r,a,"F",l,c)}function Qb(t,e){const n=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Ie()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function bg(t){return t?t.unaryFilter!==void 0?[Jb(t)]:t.fieldFilter!==void 0?[xb(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>bg(e)).reduce((e,n)=>e.concat(n)):Ie():[]}function Yb(t){return Ub[t]}function Xb(t){return Fb[t]}function ii(t){return{fieldPath:t.canonicalString()}}function ai(t){return Gt.fromServerFormat(t.fieldPath)}function xb(t){return pn.create(ai(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Ie()}}(t.fieldFilter.op),t.fieldFilter.value)}function Jb(t){switch(t.unaryFilter.op){case"IS_NAN":const e=ai(t.unaryFilter.field);return pn.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=ai(t.unaryFilter.field);return pn.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ai(t.unaryFilter.field);return pn.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=ai(t.unaryFilter.field);return pn.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Ie()}}function Zb(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function wg(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ew{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&Sb(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=xi(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=xi(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=dg();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const l=lg(o,a);l!==null&&s.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(De.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Oe())}isEqual(e){return this.batchId===e.batchId&&vi(this.mutations,e.mutations,(n,s)=>uh(n,s))&&vi(this.baseMutations,e.baseMutations,(n,s)=>uh(n,s))}}class Mc{constructor(e,n,s,i){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(e,n,s){nt(e.mutations.length===s.length);let i=Ob;const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new Mc(e,n,s,i)}}/**
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
 */class tw{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Us{constructor(e,n,s,i,r=De.min(),o=De.min(),a=xt.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Us(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Us(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Us(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nw{constructor(e){this.re=e}}function sw(t){const e=Wb({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Rl(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iw{constructor(){this.Ye=new rw}addToCollectionParentIndex(e,n){return this.Ye.add(n),ne.resolve()}getCollectionParents(e,n){return ne.resolve(this.Ye.getEntries(n))}addFieldIndex(e,n){return ne.resolve()}deleteFieldIndex(e,n){return ne.resolve()}getDocumentsMatchingTarget(e,n){return ne.resolve(null)}getIndexType(e,n){return ne.resolve(0)}getFieldIndexes(e,n){return ne.resolve([])}getNextCollectionGroupToUpdate(e){return ne.resolve(null)}getMinOffset(e,n){return ne.resolve(Es.min())}getMinOffsetFromCollectionGroup(e,n){return ne.resolve(Es.min())}updateCollectionGroup(e,n,s){return ne.resolve()}updateIndexEntries(e,n){return ne.resolve()}}class rw{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new Tt(rt.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new Tt(rt.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new wi(0)}static vn(){return new wi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ow{constructor(){this.changes=new Pi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Vt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?ne.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class aw{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lw{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(s=i,this.getBaseDocument(e,n,s))).next(i=>(s!==null&&xi(s.mutation,i,En.empty(),Et.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,Oe()).next(()=>s))}getLocalViewOfDocuments(e,n,s=Oe()){const i=Ms();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,s).next(r=>{let o=zi();return r.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Ms();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,Oe()))}populateOverlays(e,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,i){let r=ts();const o=Ji(),a=Ji();return n.forEach((l,c)=>{const h=s.get(c.key);i.has(c.key)&&(h===void 0||h.mutation instanceof Ds)?r=r.insert(c.key,c):h!==void 0&&(o.set(c.key,h.mutation.getFieldMask()),xi(h.mutation,c,h.mutation.getFieldMask(),Et.now()))}),this.recalculateAndSaveOverlays(e,r).next(l=>(l.forEach((c,h)=>o.set(c,h)),n.forEach((c,h)=>{var f;return a.set(c,new aw(h,(f=o.get(c))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const s=Ji();let i=new It((o,a)=>o-a),r=Oe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let h=s.get(l)||En.empty();h=a.applyToLocalView(c,h),s.set(l,h);const f=(i.get(a.batchId)||Oe()).add(l);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,h=l.value,f=dg();h.forEach(d=>{if(!r.has(d)){const g=lg(n.get(d),s.get(d));g!==null&&f.set(d,g),r=r.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return ne.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(i){return we.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):yb(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):ne.resolve(Ms());let a=-1,l=r;return o.next(c=>ne.forEach(c,(h,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),r.get(h)?ne.resolve():this.getBaseDocument(e,h,f).next(d=>{l=l.insert(h,d)}))).next(()=>this.populateOverlays(e,c,r)).next(()=>this.computeViews(e,l,c,Oe())).next(h=>({batchId:a,changes:fg(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new we(n)).next(s=>{let i=zi();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const i=n.collectionGroup;let r=zi();return this.indexManager.getCollectionParents(e,i).next(o=>ne.forEach(o,a=>{const l=function(c,h){return new da(h,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,s).next(c=>{c.forEach((h,f)=>{r=r.insert(h,f)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,s){let i;return this.remoteDocumentCache.getAllFromCollection(e,n.path,s).next(r=>(i=r,this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId))).next(r=>{r.forEach((a,l)=>{const c=l.getKey();i.get(c)===null&&(i=i.insert(c,Vt.newInvalidDocument(c)))});let o=zi();return i.forEach((a,l)=>{const c=r.get(a);c!==void 0&&xi(c.mutation,l,En.empty(),Et.now()),Nc(n,l)&&(o=o.insert(a,l))}),o})}getBaseDocument(e,n,s){return s===null||s.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):ne.resolve(Vt.newInvalidDocument(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cw{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return ne.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:Yn(s.createTime)}),ne.resolve()}getNamedQuery(e,n){return ne.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(s){return{name:s.name,query:sw(s.bundledQuery),readTime:Yn(s.readTime)}}(n)),ne.resolve()}}/**
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
 */class uw{constructor(){this.overlays=new It(we.comparator),this.es=new Map}getOverlay(e,n){return ne.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Ms();return ne.forEach(n,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((i,r)=>{this.ue(e,n,r)}),ne.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.es.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.es.delete(s)),ne.resolve()}getOverlaysForCollection(e,n,s){const i=Ms(),r=n.length+1,o=new we(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===r&&l.largestBatchId>s&&i.set(l.getKey(),l)}return ne.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new It((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>s){let h=r.get(c.largestBatchId);h===null&&(h=Ms(),r=r.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const a=Ms(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,h)=>a.set(c,h)),!(a.size()>=i)););return ne.resolve(a)}ue(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.es.get(i.largestBatchId).delete(s.key);this.es.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new tw(n,s));let r=this.es.get(n);r===void 0&&(r=Oe(),this.es.set(n,r)),this.es.set(n,r.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(){this.ns=new Tt(Nt.ss),this.rs=new Tt(Nt.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const s=new Nt(e,n);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.cs(new Nt(e,n))}hs(e,n){e.forEach(s=>this.removeReference(s,n))}ls(e){const n=new we(new rt([])),s=new Nt(n,e),i=new Nt(n,e+1),r=[];return this.rs.forEachInRange([s,i],o=>{this.cs(o),r.push(o.key)}),r}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new we(new rt([])),s=new Nt(n,e),i=new Nt(n,e+1);let r=Oe();return this.rs.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new Nt(e,0),s=this.ns.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Nt{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return we.comparator(e.key,n.key)||Qe(e._s,n._s)}static os(e,n){return Qe(e._s,n._s)||we.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hw{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new Tt(Nt.ss)}checkEmpty(e){return ne.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new ew(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.gs=this.gs.add(new Nt(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return ne.resolve(o)}lookupMutationBatch(e,n){return ne.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.ps(s),r=i<0?0:i;return ne.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return ne.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return ne.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Nt(n,0),i=new Nt(n,Number.POSITIVE_INFINITY),r=[];return this.gs.forEachInRange([s,i],o=>{const a=this.ys(o._s);r.push(a)}),ne.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Tt(Qe);return n.forEach(i=>{const r=new Nt(i,0),o=new Nt(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([r,o],a=>{s=s.add(a._s)})}),ne.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;we.isDocumentKey(r)||(r=r.child(""));const o=new Nt(new we(r),0);let a=new Tt(Qe);return this.gs.forEachWhile(l=>{const c=l.key.path;return!!s.isPrefixOf(c)&&(c.length===i&&(a=a.add(l._s)),!0)},o),ne.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(s=>{const i=this.ys(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){nt(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return ne.forEach(n.mutations,i=>{const r=new Nt(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.gs=s})}An(e){}containsKey(e,n){const s=new Nt(n,0),i=this.gs.firstAfterOrEqual(s);return ne.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,ne.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fw{constructor(e){this.Es=e,this.docs=new It(we.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Es(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return ne.resolve(s?s.document.mutableCopy():Vt.newInvalidDocument(n))}getEntries(e,n){let s=ts();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():Vt.newInvalidDocument(i))}),ne.resolve(s)}getAllFromCollection(e,n,s){let i=ts();const r=new we(n.child("")),o=this.docs.getIteratorFrom(r);for(;o.hasNext();){const{key:a,value:{document:l}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||Z1(J1(l),s)<=0||(i=i.insert(l.key,l.mutableCopy()))}return ne.resolve(i)}getAllFromCollectionGroup(e,n,s,i){Ie()}As(e,n){return ne.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new dw(this)}getSize(e){return ne.resolve(this.size)}}class dw extends ow{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.Yn.addEntry(e,i)):this.Yn.removeEntry(s)}),ne.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pw{constructor(e){this.persistence=e,this.Rs=new Pi(n=>Dc(n),Pc),this.lastRemoteSnapshotVersion=De.min(),this.highestTargetId=0,this.bs=0,this.Ps=new $c,this.targetCount=0,this.vs=wi.Pn()}forEachTarget(e,n){return this.Rs.forEach((s,i)=>n(i)),ne.resolve()}getLastRemoteSnapshotVersion(e){return ne.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return ne.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),ne.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),ne.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new wi(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,ne.resolve()}updateTargetData(e,n){return this.Dn(n),ne.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,ne.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Rs.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),ne.waitFor(r).next(()=>i)}getTargetCount(e){return ne.resolve(this.targetCount)}getTargetData(e,n){const s=this.Rs.get(n)||null;return ne.resolve(s)}addMatchingKeys(e,n,s){return this.Ps.us(n,s),ne.resolve()}removeMatchingKeys(e,n,s){this.Ps.hs(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),ne.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),ne.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Ps.ds(n);return ne.resolve(s)}containsKey(e,n){return ne.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mw{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new Sc(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new pw(this),this.indexManager=new iw,this.remoteDocumentCache=function(s){return new fw(s)}(s=>this.referenceDelegate.xs(s)),this.It=new nw(n),this.Ns=new cw(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new uw,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Vs[e.toKey()];return s||(s=new hw(n,this.referenceDelegate),this.Vs[e.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,s){be("MemoryPersistence","Starting transaction:",e);const i=new gw(this.Ss.next());return this.referenceDelegate.ks(),s(i).next(r=>this.referenceDelegate.Os(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Ms(e,n){return ne.or(Object.values(this.Vs).map(s=>()=>s.containsKey(e,n)))}}class gw extends tb{constructor(e){super(),this.currentSequenceNumber=e}}class Uc{constructor(e){this.persistence=e,this.Fs=new $c,this.$s=null}static Bs(e){return new Uc(e)}get Ls(){if(this.$s)return this.$s;throw Ie()}addReference(e,n,s){return this.Fs.addReference(s,n),this.Ls.delete(s.toString()),ne.resolve()}removeReference(e,n,s){return this.Fs.removeReference(s,n),this.Ls.add(s.toString()),ne.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),ne.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(i=>this.Ls.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.Ls.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ne.forEach(this.Ls,s=>{const i=we.fromPath(s);return this.Us(e,i).next(r=>{r||n.removeEntry(i,De.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.Us(e,n).next(s=>{s?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}Us(e,n){return ne.or([()=>ne.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.Si=s,this.Di=i}static Ci(e,n){let s=Oe(),i=Oe();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new Fc(e,n.fromCache,s,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _w{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,s,i){return this.ki(e,n).next(r=>r||this.Oi(e,n,i,s)).next(r=>r||this.Mi(e,n))}ki(e,n){if(lh(n))return ne.resolve(null);let s=es(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Rl(n,null,"F"),s=es(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=Oe(...r);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(l=>{const c=this.Fi(n,a);return this.$i(n,c,o,l.readTime)?this.ki(e,Rl(n,null,"F")):this.Bi(e,c,n,l)}))})))}Oi(e,n,s,i){return lh(n)||i.isEqual(De.min())?this.Mi(e,n):this.Ni.getDocuments(e,s).next(r=>{const o=this.Fi(n,r);return this.$i(n,o,s,i)?this.Mi(e,n):(Zu()<=ze.DEBUG&&be("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Nl(n)),this.Bi(e,o,n,x1(i,-1)))})}Fi(e,n){let s=new Tt(tg(e));return n.forEach((i,r)=>{Nc(e,r)&&(s=s.add(r))}),s}$i(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Mi(e,n){return Zu()<=ze.DEBUG&&be("QueryEngine","Using full collection scan to execute query:",Nl(n)),this.Ni.getDocumentsMatchingQuery(e,n,Es.min())}Bi(e,n,s,i){return this.Ni.getDocumentsMatchingQuery(e,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vw{constructor(e,n,s,i){this.persistence=e,this.Li=n,this.It=i,this.Ui=new It(Qe),this.qi=new Pi(r=>Dc(r),Pc),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(s)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new lw(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ui))}}function yw(t,e,n,s){return new vw(t,e,n,s)}async function kg(t,e){const n=Se(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.Qi(e),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let l=Oe();for(const c of i){o.push(c.batchId);for(const h of c.mutations)l=l.add(h.key)}for(const c of r){a.push(c.batchId);for(const h of c.mutations)l=l.add(h.key)}return n.localDocuments.getDocuments(s,l).next(c=>({ji:c,removedBatchIds:o,addedBatchIds:a}))})})}function bw(t,e){const n=Se(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,c){const h=l.batch,f=h.keys();let d=ne.resolve();return f.forEach(g=>{d=d.next(()=>c.getEntry(a,g)).next(_=>{const v=l.docVersions.get(g);nt(v!==null),_.version.compareTo(v)<0&&(h.applyToRemoteDocument(_,l),_.isValidDocument()&&(_.setReadTime(l.commitVersion),c.addEntry(_)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,h))}(n,s,e,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=Oe();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,i))})}function Eg(t){const e=Se(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function ww(t,e){const n=Se(t),s=e.snapshotVersion;let i=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.Ui;const a=[];e.targetChanges.forEach((h,f)=>{const d=i.get(f);if(!d)return;a.push(n.Cs.removeMatchingKeys(r,h.removedDocuments,f).next(()=>n.Cs.addMatchingKeys(r,h.addedDocuments,f)));let g=d.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.has(f)?g=g.withResumeToken(xt.EMPTY_BYTE_STRING,De.min()).withLastLimboFreeSnapshotVersion(De.min()):h.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(h.resumeToken,s)),i=i.insert(f,g),function(_,v,y){return _.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-_.snapshotVersion.toMicroseconds()>=3e8?!0:y.addedDocuments.size+y.modifiedDocuments.size+y.removedDocuments.size>0}(d,g,h)&&a.push(n.Cs.updateTargetData(r,g))});let l=ts(),c=Oe();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,h))}),a.push(kw(r,o,e.documentUpdates).next(h=>{l=h.Wi,c=h.zi})),!s.isEqual(De.min())){const h=n.Cs.getLastRemoteSnapshotVersion(r).next(f=>n.Cs.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(h)}return ne.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,l,c)).next(()=>l)}).then(r=>(n.Ui=i,r))}function kw(t,e,n){let s=Oe(),i=Oe();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let o=ts();return n.forEach((a,l)=>{const c=r.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(De.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):be("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{Wi:o,zi:i}})}function Ew(t,e){const n=Se(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function Tw(t,e){const n=Se(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Cs.getTargetData(s,e).next(r=>r?(i=r,ne.resolve(i)):n.Cs.allocateTargetId(s).next(o=>(i=new Us(e,o,0,s.currentSequenceNumber),n.Cs.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.Ui.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(s.targetId,s),n.qi.set(e,s.targetId)),s})}async function $l(t,e,n){const s=Se(t),i=s.Ui.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Mr(o))throw o;be("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ui=s.Ui.remove(e),s.qi.delete(i.target)}function _h(t,e,n){const s=Se(t);let i=De.min(),r=Oe();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,l,c){const h=Se(a),f=h.qi.get(c);return f!==void 0?ne.resolve(h.Ui.get(f)):h.Cs.getTargetData(l,c)}(s,o,es(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{r=l})}).next(()=>s.Li.getDocumentsMatchingQuery(o,e,n?i:De.min(),n?r:Oe())).next(a=>(Iw(s,bb(e),a),{documents:a,Hi:r})))}function Iw(t,e,n){let s=t.Ki.get(e)||De.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),t.Ki.set(e,s)}class vh{constructor(){this.activeTargetIds=pg()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Cw{constructor(){this.Lr=new vh,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,n,s){this.Ur[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new vh,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sw{qr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){be("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){be("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aw={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dw{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pw extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,s,i,r){const o=this.ho(e,n);be("RestConnection","Sending: ",o,s);const a={};return this.lo(a,i,r),this.fo(e,o,a,s).then(l=>(be("RestConnection","Received: ",l),l),l=>{throw Sl("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",s),l})}_o(e,n,s,i,r,o){return this.ao(e,n,s,i,r)}lo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Di,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>e[r]=i),s&&s.headers.forEach((i,r)=>e[r]=i)}ho(e,n){const s=Aw[e];return`${this.oo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,s,i){return new Promise((r,o)=>{const a=new j1;a.setWithCredentials(!0),a.listenOnce(F1.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Xa.NO_ERROR:const c=a.getResponseJson();be("Connection","XHR received:",JSON.stringify(c)),r(c);break;case Xa.TIMEOUT:be("Connection",'RPC "'+e+'" timed out'),o(new ke(te.DEADLINE_EXCEEDED,"Request time out"));break;case Xa.HTTP_ERROR:const h=a.getStatus();if(be("Connection",'RPC "'+e+'" failed with status:',h,"response text:",a.getResponseText()),h>0){const f=a.getResponseJson().error;if(f&&f.status&&f.message){const d=function(g){const _=g.toLowerCase().replace(/_/g,"-");return Object.values(te).indexOf(_)>=0?_:te.UNKNOWN}(f.status);o(new ke(d,f.message))}else o(new ke(te.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new ke(te.UNAVAILABLE,"Connection failed."));break;default:Ie()}}finally{be("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(i);a.send(n,"POST",l,s,15)})}wo(e,n,s){const i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=$1(),o=U1(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new V1({})),this.lo(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const l=i.join("");be("Connection","Creating WebChannel: "+l,a);const c=r.createWebChannel(l,a);let h=!1,f=!1;const d=new Dw({Hr:_=>{f?be("Connection","Not sending because WebChannel is closed:",_):(h||(be("Connection","Opening WebChannel transport."),c.open(),h=!0),be("Connection","WebChannel sending:",_),c.send(_))},Jr:()=>c.close()}),g=(_,v,y)=>{_.listen(v,E=>{try{y(E)}catch(T){setTimeout(()=>{throw T},0)}})};return g(c,to.EventType.OPEN,()=>{f||be("Connection","WebChannel transport opened.")}),g(c,to.EventType.CLOSE,()=>{f||(f=!0,be("Connection","WebChannel transport closed"),d.io())}),g(c,to.EventType.ERROR,_=>{f||(f=!0,Sl("Connection","WebChannel transport errored:",_),d.io(new ke(te.UNAVAILABLE,"The operation could not be completed")))}),g(c,to.EventType.MESSAGE,_=>{var v;if(!f){const y=_.data[0];nt(!!y);const E=y,T=E.error||((v=E[0])===null||v===void 0?void 0:v.error);if(T){be("Connection","WebChannel received error:",T);const O=T.status;let P=function(G){const N=_t[G];if(N!==void 0)return ug(N)}(O),$=T.message;P===void 0&&(P=te.INTERNAL,$="Unknown error status: "+O+" with message "+T.message),f=!0,d.io(new ke(P,$)),c.close()}else be("Connection","WebChannel received:",y),d.ro(y)}}),g(o,B1.STAT_EVENT,_=>{_.stat===xu.PROXY?be("Connection","Detected buffering proxy"):_.stat===xu.NOPROXY&&be("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}function Ja(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function va(t){return new Bb(t,!0)}class Tg{constructor(e,n,s=1e3,i=1.5,r=6e4){this.Hs=e,this.timerId=n,this.mo=s,this.yo=i,this.po=r,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-s);i>0&&be("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ig{constructor(e,n,s,i,r,o,a,l){this.Hs=e,this.vo=s,this.Vo=i,this.So=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Do=0,this.Co=null,this.xo=null,this.stream=null,this.No=new Tg(e,n)}ko(){return this.state===1||this.state===5||this.Oo()}Oo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Mo()}async stop(){this.ko()&&await this.close(0)}Fo(){this.state=0,this.No.reset()}$o(){this.Oo()&&this.Co===null&&(this.Co=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.Bo()))}Lo(e){this.Uo(),this.stream.send(e)}async Bo(){if(this.Oo())return this.close(0)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}qo(){this.xo&&(this.xo.cancel(),this.xo=null)}async close(e,n){this.Uo(),this.qo(),this.No.cancel(),this.Do++,e!==4?this.No.reset():n&&n.code===te.RESOURCE_EXHAUSTED?(Zn(n.toString()),Zn("Using maximum backoff delay to prevent overloading the backend."),this.No.Ao()):n&&n.code===te.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Ko(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}Ko(){}auth(){this.state=1;const e=this.Go(this.Do),n=this.Do;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Do===n&&this.Qo(s,i)},s=>{e(()=>{const i=new ke(te.UNKNOWN,"Fetching auth token failed: "+s.message);return this.jo(i)})})}Qo(e,n){const s=this.Go(this.Do);this.stream=this.Wo(e,n),this.stream.Yr(()=>{s(()=>(this.state=2,this.xo=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.Oo()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{s(()=>this.jo(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Mo(){this.state=5,this.No.Ro(async()=>{this.state=0,this.start()})}jo(e){return be("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Go(e){return n=>{this.Hs.enqueueAndForget(()=>this.Do===e?n():(be("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Rw extends Ig{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.It=r}Wo(e,n){return this.So.wo("Listen",e,n)}onMessage(e){this.No.reset();const n=qb(this.It,e),s=function(i){if(!("targetChange"in i))return De.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?De.min():r.readTime?Yn(r.readTime):De.min()}(e);return this.listener.zo(n,s)}Ho(e){const n={};n.database=Ml(this.It),n.addTarget=function(i,r){let o;const a=r.target;return o=Pl(a)?{documents:Kb(i,a)}:{query:Gb(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=_g(i,r.resumeToken):r.snapshotVersion.compareTo(De.min())>0&&(o.readTime=Uo(i,r.snapshotVersion.toTimestamp())),o}(this.It,e);const s=Qb(this.It,e);s&&(n.labels=s),this.Lo(n)}Jo(e){const n={};n.database=Ml(this.It),n.removeTarget=e,this.Lo(n)}}class Nw extends Ig{constructor(e,n,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.It=r,this.Yo=!1}get Xo(){return this.Yo}start(){this.Yo=!1,this.lastStreamToken=void 0,super.start()}Ko(){this.Yo&&this.Zo([])}Wo(e,n){return this.So.wo("Write",e,n)}onMessage(e){if(nt(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Yo){this.No.reset();const n=zb(e.writeResults,e.commitTime),s=Yn(e.commitTime);return this.listener.tu(s,n)}return nt(!e.writeResults||e.writeResults.length===0),this.Yo=!0,this.listener.eu()}nu(){const e={};e.database=Ml(this.It),this.Lo(e)}Zo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>Hb(this.It,s))};this.Lo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ow extends class{}{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.So=s,this.It=i,this.su=!1}iu(){if(this.su)throw new ke(te.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,s){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.So.ao(e,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===te.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ke(te.UNKNOWN,i.toString())})}_o(e,n,s,i){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.So._o(e,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===te.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new ke(te.UNKNOWN,r.toString())})}terminate(){this.su=!0}}class Lw{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ru=0,this.ou=null,this.uu=!0}cu(){this.ru===0&&(this.au("Unknown"),this.ou=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ou=null,this.hu("Backend didn't respond within 10 seconds."),this.au("Offline"),Promise.resolve())))}lu(e){this.state==="Online"?this.au("Unknown"):(this.ru++,this.ru>=1&&(this.fu(),this.hu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.au("Offline")))}set(e){this.fu(),this.ru=0,e==="Online"&&(this.uu=!1),this.au(e)}au(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}hu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.uu?(Zn(n),this.uu=!1):be("OnlineStateTracker",n)}fu(){this.ou!==null&&(this.ou.cancel(),this.ou=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mw{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.du=[],this._u=new Map,this.wu=new Set,this.mu=[],this.gu=r,this.gu.qr(o=>{s.enqueueAndForget(async()=>{Zs(this)&&(be("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=Se(a);l.wu.add(4),await Fr(l),l.yu.set("Unknown"),l.wu.delete(4),await ya(l)}(this))})}),this.yu=new Lw(s,i)}}async function ya(t){if(Zs(t))for(const e of t.mu)await e(!0)}async function Fr(t){for(const e of t.mu)await e(!1)}function Cg(t,e){const n=Se(t);n._u.has(e.targetId)||(n._u.set(e.targetId,e),jc(n)?Vc(n):Ri(n).Oo()&&Bc(n,e))}function Sg(t,e){const n=Se(t),s=Ri(n);n._u.delete(e),s.Oo()&&Ag(n,e),n._u.size===0&&(s.Oo()?s.$o():Zs(n)&&n.yu.set("Unknown"))}function Bc(t,e){t.pu.Mt(e.targetId),Ri(t).Ho(e)}function Ag(t,e){t.pu.Mt(e),Ri(t).Jo(e)}function Vc(t){t.pu=new $b({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t._u.get(e)||null}),Ri(t).start(),t.yu.cu()}function jc(t){return Zs(t)&&!Ri(t).ko()&&t._u.size>0}function Zs(t){return Se(t).wu.size===0}function Dg(t){t.pu=void 0}async function $w(t){t._u.forEach((e,n)=>{Bc(t,e)})}async function Uw(t,e){Dg(t),jc(t)?(t.yu.lu(e),Vc(t)):t.yu.set("Unknown")}async function Fw(t,e,n){if(t.yu.set("Online"),e instanceof gg&&e.state===2&&e.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s._u.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s._u.delete(o),s.pu.removeTarget(o))}(t,e)}catch(s){be("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Fo(t,s)}else if(e instanceof uo?t.pu.Gt(e):e instanceof mg?t.pu.Yt(e):t.pu.Wt(e),!n.isEqual(De.min()))try{const s=await Eg(t.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.pu.te(r);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const c=i._u.get(l);c&&i._u.set(l,c.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const l=i._u.get(a);if(!l)return;i._u.set(a,l.withResumeToken(xt.EMPTY_BYTE_STRING,l.snapshotVersion)),Ag(i,a);const c=new Us(l.target,a,1,l.sequenceNumber);Bc(i,c)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){be("RemoteStore","Failed to raise snapshot:",s),await Fo(t,s)}}async function Fo(t,e,n){if(!Mr(e))throw e;t.wu.add(1),await Fr(t),t.yu.set("Offline"),n||(n=()=>Eg(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{be("RemoteStore","Retrying IndexedDB access"),await n(),t.wu.delete(1),await ya(t)})}function Pg(t,e){return e().catch(n=>Fo(t,n,e))}async function ba(t){const e=Se(t),n=Is(e);let s=e.du.length>0?e.du[e.du.length-1].batchId:-1;for(;Bw(e);)try{const i=await Ew(e.localStore,s);if(i===null){e.du.length===0&&n.$o();break}s=i.batchId,Vw(e,i)}catch(i){await Fo(e,i)}Rg(e)&&Ng(e)}function Bw(t){return Zs(t)&&t.du.length<10}function Vw(t,e){t.du.push(e);const n=Is(t);n.Oo()&&n.Xo&&n.Zo(e.mutations)}function Rg(t){return Zs(t)&&!Is(t).ko()&&t.du.length>0}function Ng(t){Is(t).start()}async function jw(t){Is(t).nu()}async function qw(t){const e=Is(t);for(const n of t.du)e.Zo(n.mutations)}async function Hw(t,e,n){const s=t.du.shift(),i=Mc.from(s,e,n);await Pg(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await ba(t)}async function zw(t,e){e&&Is(t).Xo&&await async function(n,s){if(i=s.code,Rb(i)&&i!==te.ABORTED){const r=n.du.shift();Is(n).Fo(),await Pg(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await ba(n)}var i}(t,e),Rg(t)&&Ng(t)}async function bh(t,e){const n=Se(t);n.asyncQueue.verifyOperationInProgress(),be("RemoteStore","RemoteStore received new credentials");const s=Zs(n);n.wu.add(3),await Fr(n),s&&n.yu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.wu.delete(3),await ya(n)}async function Kw(t,e){const n=Se(t);e?(n.wu.delete(2),await ya(n)):e||(n.wu.add(2),await Fr(n),n.yu.set("Unknown"))}function Ri(t){return t.Iu||(t.Iu=function(e,n,s){const i=Se(e);return i.iu(),new Rw(n,i.So,i.authCredentials,i.appCheckCredentials,i.It,s)}(t.datastore,t.asyncQueue,{Yr:$w.bind(null,t),Zr:Uw.bind(null,t),zo:Fw.bind(null,t)}),t.mu.push(async e=>{e?(t.Iu.Fo(),jc(t)?Vc(t):t.yu.set("Unknown")):(await t.Iu.stop(),Dg(t))})),t.Iu}function Is(t){return t.Tu||(t.Tu=function(e,n,s){const i=Se(e);return i.iu(),new Nw(n,i.So,i.authCredentials,i.appCheckCredentials,i.It,s)}(t.datastore,t.asyncQueue,{Yr:jw.bind(null,t),Zr:zw.bind(null,t),eu:qw.bind(null,t),tu:Hw.bind(null,t)}),t.mu.push(async e=>{e?(t.Tu.Fo(),await ba(t)):(await t.Tu.stop(),t.du.length>0&&(be("RemoteStore",`Stopping write stream with ${t.du.length} pending writes`),t.du=[]))})),t.Tu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new _s,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new qc(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ke(te.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Hc(t,e){if(Zn("AsyncQueue",`${e}: ${t}`),Mr(t))return new ke(te.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e){this.comparator=e?(n,s)=>e(n,s)||we.comparator(n.key,s.key):(n,s)=>we.comparator(n.key,s.key),this.keyedMap=zi(),this.sortedSet=new It(this.comparator)}static emptySet(e){return new hi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof hi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new hi;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{constructor(){this.Eu=new It(we.comparator)}track(e){const n=e.doc.key,s=this.Eu.get(n);s?e.type!==0&&s.type===3?this.Eu=this.Eu.insert(n,e):e.type===3&&s.type!==1?this.Eu=this.Eu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Eu=this.Eu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Eu=this.Eu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Eu=this.Eu.remove(n):e.type===1&&s.type===2?this.Eu=this.Eu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Eu=this.Eu.insert(n,{type:2,doc:e.doc}):Ie():this.Eu=this.Eu.insert(n,e)}Au(){const e=[];return this.Eu.inorderTraversal((n,s)=>{e.push(s)}),e}}class ki{constructor(e,n,s,i,r,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,s,i,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new ki(e,n,hi.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&pa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gw{constructor(){this.Ru=void 0,this.listeners=[]}}class Ww{constructor(){this.queries=new Pi(e=>eg(e),pa),this.onlineState="Unknown",this.bu=new Set}}async function Og(t,e){const n=Se(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new Gw),i)try{r.Ru=await n.onListen(s)}catch(o){const a=Hc(o,`Initialization of query '${Nl(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,r),r.listeners.push(e),e.Pu(n.onlineState),r.Ru&&e.vu(r.Ru)&&zc(n)}async function Lg(t,e){const n=Se(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function Qw(t,e){const n=Se(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.vu(i)&&(s=!0);o.Ru=i}}s&&zc(n)}function Yw(t,e,n){const s=Se(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function zc(t){t.bu.forEach(e=>{e.next()})}class Mg{constructor(e,n,s){this.query=e,this.Vu=n,this.Su=!1,this.Du=null,this.onlineState="Unknown",this.options=s||{}}vu(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new ki(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Su?this.Cu(e)&&(this.Vu.next(e),n=!0):this.xu(e,this.onlineState)&&(this.Nu(e),n=!0),this.Du=e,n}onError(e){this.Vu.error(e)}Pu(e){this.onlineState=e;let n=!1;return this.Du&&!this.Su&&this.xu(this.Du,e)&&(this.Nu(this.Du),n=!0),n}xu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.ku||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Cu(e){if(e.docChanges.length>0)return!0;const n=this.Du&&this.Du.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Nu(e){e=ki.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Su=!0,this.Vu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{constructor(e){this.key=e}}class Ug{constructor(e){this.key=e}}class Xw{constructor(e,n){this.query=e,this.Uu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=Oe(),this.mutatedKeys=Oe(),this.Gu=tg(e),this.Qu=new hi(this.Gu)}get ju(){return this.Uu}Wu(e,n){const s=n?n.zu:new wh,i=n?n.Qu:this.Qu;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,f)=>{const d=i.get(h),g=Nc(this.query,f)?f:null,_=!!d&&this.mutatedKeys.has(d.key),v=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let y=!1;d&&g?d.data.isEqual(g.data)?_!==v&&(s.track({type:3,doc:g}),y=!0):this.Hu(d,g)||(s.track({type:2,doc:g}),y=!0,(l&&this.Gu(g,l)>0||c&&this.Gu(g,c)<0)&&(a=!0)):!d&&g?(s.track({type:0,doc:g}),y=!0):d&&!g&&(s.track({type:1,doc:d}),y=!0,(l||c)&&(a=!0)),y&&(g?(o=o.add(g),r=v?r.add(h):r.delete(h)):(o=o.delete(h),r=r.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),r=r.delete(h.key),s.track({type:1,doc:h})}return{Qu:o,zu:s,$i:a,mutatedKeys:r}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const i=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const r=e.zu.Au();r.sort((c,h)=>function(f,d){const g=_=>{switch(_){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ie()}};return g(f)-g(d)}(c.type,h.type)||this.Gu(c.doc,h.doc)),this.Ju(s);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,l=a!==this.qu;return this.qu=a,r.length!==0||l?{snapshot:new ki(this.query,e.Qu,i,r,e.mutatedKeys,a===0,l,!1,!!s&&s.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}Pu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new wh,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.Uu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.Uu=this.Uu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Uu=this.Uu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=Oe(),this.Qu.forEach(s=>{this.Zu(s.key)&&(this.Ku=this.Ku.add(s.key))});const n=[];return e.forEach(s=>{this.Ku.has(s)||n.push(new Ug(s))}),this.Ku.forEach(s=>{e.has(s)||n.push(new $g(s))}),n}tc(e){this.Uu=e.Hi,this.Ku=Oe();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return ki.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class xw{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class Jw{constructor(e){this.key=e,this.nc=!1}}class Zw{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new Pi(a=>eg(a),pa),this.rc=new Map,this.oc=new Set,this.uc=new It(we.comparator),this.cc=new Map,this.ac=new $c,this.hc={},this.lc=new Map,this.fc=wi.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function ek(t,e){const n=uk(t);let s,i;const r=n.ic.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.ec();else{const o=await Tw(n.localStore,es(e));n.isPrimaryClient&&Cg(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await tk(n,e,s,a==="current",o.resumeToken)}return i}async function tk(t,e,n,s,i){t._c=(f,d,g)=>async function(_,v,y,E){let T=v.view.Wu(y);T.$i&&(T=await _h(_.localStore,v.query,!1).then(({documents:$})=>v.view.Wu($,T)));const O=E&&E.targetChanges.get(v.targetId),P=v.view.applyChanges(T,_.isPrimaryClient,O);return Eh(_,v.targetId,P.Xu),P.snapshot}(t,f,d,g);const r=await _h(t.localStore,e,!0),o=new Xw(e,r.Hi),a=o.Wu(r.documents),l=Ur.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,l);Eh(t,n,c.Xu);const h=new xw(e,n,o);return t.ic.set(e,h),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),c.snapshot}async function nk(t,e){const n=Se(t),s=n.ic.get(e),i=n.rc.get(s.targetId);if(i.length>1)return n.rc.set(s.targetId,i.filter(r=>!pa(r,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await $l(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Sg(n.remoteStore,s.targetId),Ul(n,s.targetId)}).catch(Lr)):(Ul(n,s.targetId),await $l(n.localStore,s.targetId,!0))}async function sk(t,e,n){const s=hk(t);try{const i=await function(r,o){const a=Se(r),l=Et.now(),c=o.reduce((d,g)=>d.add(g.key),Oe());let h,f;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let g=ts(),_=Oe();return a.Gi.getEntries(d,c).next(v=>{g=v,g.forEach((y,E)=>{E.isValidDocument()||(_=_.add(y))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,g)).next(v=>{h=v;const y=[];for(const E of o){const T=Ab(E,h.get(E.key).overlayedDocument);T!=null&&y.push(new Ds(E.key,T,Jm(T.value.mapValue),Tn.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,y,o)}).next(v=>{f=v;const y=v.applyToLocalDocumentSet(h,_);return a.documentOverlayCache.saveOverlays(d,v.batchId,y)})}).then(()=>({batchId:f.batchId,changes:fg(h)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let l=r.hc[r.currentUser.toKey()];l||(l=new It(Qe)),l=l.insert(o,a),r.hc[r.currentUser.toKey()]=l}(s,i.batchId,n),await Br(s,i.changes),await ba(s.remoteStore)}catch(i){const r=Hc(i,"Failed to persist write");n.reject(r)}}async function Fg(t,e){const n=Se(t);try{const s=await ww(n.localStore,e);e.targetChanges.forEach((i,r)=>{const o=n.cc.get(r);o&&(nt(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.nc=!0:i.modifiedDocuments.size>0?nt(o.nc):i.removedDocuments.size>0&&(nt(o.nc),o.nc=!1))}),await Br(n,s,e)}catch(s){await Lr(s)}}function kh(t,e,n){const s=Se(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.ic.forEach((r,o)=>{const a=o.view.Pu(e);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=Se(r);a.onlineState=o;let l=!1;a.queries.forEach((c,h)=>{for(const f of h.listeners)f.Pu(o)&&(l=!0)}),l&&zc(a)}(s.eventManager,e),i.length&&s.sc.zo(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function ik(t,e,n){const s=Se(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.cc.get(e),r=i&&i.key;if(r){let o=new It(we.comparator);o=o.insert(r,Vt.newNoDocument(r,De.min()));const a=Oe().add(r),l=new _a(De.min(),new Map,new Tt(Qe),o,a);await Fg(s,l),s.uc=s.uc.remove(r),s.cc.delete(e),Kc(s)}else await $l(s.localStore,e,!1).then(()=>Ul(s,e,n)).catch(Lr)}async function rk(t,e){const n=Se(t),s=e.batch.batchId;try{const i=await bw(n.localStore,e);Vg(n,s,null),Bg(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Br(n,i)}catch(i){await Lr(i)}}async function ok(t,e,n){const s=Se(t);try{const i=await function(r,o){const a=Se(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let c;return a.mutationQueue.lookupMutationBatch(l,o).next(h=>(nt(h!==null),c=h.keys(),a.mutationQueue.removeMutationBatch(l,h))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,c,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,c)).next(()=>a.localDocuments.getDocuments(l,c))})}(s.localStore,e);Vg(s,e,n),Bg(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Br(s,i)}catch(i){await Lr(i)}}function Bg(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function Vg(t,e,n){const s=Se(t);let i=s.hc[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(n?r.reject(n):r.resolve(),i=i.remove(e)),s.hc[s.currentUser.toKey()]=i}}function Ul(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.rc.get(e))t.ic.delete(s),n&&t.sc.wc(s,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(s=>{t.ac.containsKey(s)||jg(t,s)})}function jg(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(Sg(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),Kc(t))}function Eh(t,e,n){for(const s of n)s instanceof $g?(t.ac.addReference(s.key,e),ak(t,s)):s instanceof Ug?(be("SyncEngine","Document no longer in limbo: "+s.key),t.ac.removeReference(s.key,e),t.ac.containsKey(s.key)||jg(t,s.key)):Ie()}function ak(t,e){const n=e.key,s=n.path.canonicalString();t.uc.get(n)||t.oc.has(s)||(be("SyncEngine","New document in limbo: "+n),t.oc.add(s),Kc(t))}function Kc(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new we(rt.fromString(e)),s=t.fc.next();t.cc.set(s,new Jw(n)),t.uc=t.uc.insert(n,s),Cg(t.remoteStore,new Us(es(Rc(n.path)),s,2,Sc.at))}}async function Br(t,e,n){const s=Se(t),i=[],r=[],o=[];s.ic.isEmpty()||(s.ic.forEach((a,l)=>{o.push(s._c(l,e,n).then(c=>{if((c||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const h=Fc.Ci(l.targetId,c);r.push(h)}}))}),await Promise.all(o),s.sc.zo(i),await async function(a,l){const c=Se(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>ne.forEach(l,f=>ne.forEach(f.Si,d=>c.persistence.referenceDelegate.addReference(h,f.targetId,d)).next(()=>ne.forEach(f.Di,d=>c.persistence.referenceDelegate.removeReference(h,f.targetId,d)))))}catch(h){if(!Mr(h))throw h;be("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const f=h.targetId;if(!h.fromCache){const d=c.Ui.get(f),g=d.snapshotVersion,_=d.withLastLimboFreeSnapshotVersion(g);c.Ui=c.Ui.insert(f,_)}}}(s.localStore,r))}async function lk(t,e){const n=Se(t);if(!n.currentUser.isEqual(e)){be("SyncEngine","User change. New user:",e.toKey());const s=await kg(n.localStore,e);n.currentUser=e,function(i,r){i.lc.forEach(o=>{o.forEach(a=>{a.reject(new ke(te.CANCELLED,r))})}),i.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Br(n,s.ji)}}function ck(t,e){const n=Se(t),s=n.cc.get(e);if(s&&s.nc)return Oe().add(s.key);{let i=Oe();const r=n.rc.get(e);if(!r)return i;for(const o of r){const a=n.ic.get(o);i=i.unionWith(a.view.ju)}return i}}function uk(t){const e=Se(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Fg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ck.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ik.bind(null,e),e.sc.zo=Qw.bind(null,e.eventManager),e.sc.wc=Yw.bind(null,e.eventManager),e}function hk(t){const e=Se(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=rk.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ok.bind(null,e),e}class fk{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=va(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return yw(this.persistence,new _w,e.initialUser,this.It)}yc(e){return new mw(Uc.Bs,this.It)}gc(e){return new Cw}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class dk{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>kh(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=lk.bind(null,this.syncEngine),await Kw(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Ww}createDatastore(e){const n=va(e.databaseInfo.databaseId),s=(i=e.databaseInfo,new Pw(i));var i;return function(r,o,a,l){return new Ow(r,o,a,l)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,i=e.asyncQueue,r=a=>kh(this.syncEngine,a,0),o=yh.C()?new yh:new Sw,new Mw(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(e,n){return function(s,i,r,o,a,l,c){const h=new Zw(s,i,r,o,a,l);return c&&(h.dc=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=Se(e);be("RemoteStore","RemoteStore shutting down."),n.wu.add(5),await Fr(n),n.gu.shutdown(),n.yu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qg(t,e,n){if(!n)throw new ke(te.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function pk(t,e,n,s){if(e===!0&&s===!0)throw new ke(te.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Th(t){if(!we.isDocumentKey(t))throw new ke(te.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ih(t){if(we.isDocumentKey(t))throw new ke(te.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Gc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Ie()}function Ln(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ke(te.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Gc(t);throw new ke(te.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ch=new Map;class Sh{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new ke(te.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ke(te.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,pk("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Sh({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new ke(te.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new ke(te.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Sh(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new q1;switch(n.type){case"gapi":const s=n.client;return new G1(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new ke(te.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Ch.get(e);n&&(be("ComponentProvider","Removing Datastore"),Ch.delete(e),n.terminate())}(this),Promise.resolve()}}function mk(t,e,n,s={}){var i;const r=(t=Ln(t,wa))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==e&&Sl("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=Kt.MOCK_USER;else{o=Sy(s.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=s.mockUserToken.sub||s.mockUserToken.user_id;if(!l)throw new ke(te.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Kt(l)}t._authCredentials=new H1(new Wm(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new vs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new gn(this.firestore,e,this._key)}}class Vr{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Vr(this.firestore,e,this._query)}}class vs extends Vr{constructor(e,n,s){super(e,n,Rc(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new gn(this.firestore,null,new we(e))}withConverter(e){return new vs(this.firestore,e,this._path)}}function tn(t,e,...n){if(t=Xt(t),qg("collection","path",e),t instanceof wa){const s=rt.fromString(e,...n);return Ih(s),new vs(t,null,s)}{if(!(t instanceof gn||t instanceof vs))throw new ke(te.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(rt.fromString(e,...n));return Ih(s),new vs(t.firestore,null,s)}}function Cs(t,e,...n){if(t=Xt(t),arguments.length===1&&(e=Qm.R()),qg("doc","path",e),t instanceof wa){const s=rt.fromString(e,...n);return Th(s),new gn(t,null,new we(s))}{if(!(t instanceof gn||t instanceof vs))throw new ke(te.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(rt.fromString(e,...n));return Th(s),new gn(t.firestore,t instanceof vs?t.converter:null,new we(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Hg{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):Zn("Uncaught Error in snapshot listener:",e)}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gk{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=Kt.UNAUTHENTICATED,this.clientId=Qm.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{be("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(be("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ke(te.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new _s;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Hc(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function _k(t,e){t.asyncQueue.verifyOperationInProgress(),be("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await kg(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function vk(t,e){t.asyncQueue.verifyOperationInProgress();const n=await yk(t);be("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(i=>bh(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,r)=>bh(e.remoteStore,r)),t.onlineComponents=e}async function yk(t){return t.offlineComponents||(be("FirestoreClient","Using default OfflineComponentProvider"),await _k(t,new fk)),t.offlineComponents}async function zg(t){return t.onlineComponents||(be("FirestoreClient","Using default OnlineComponentProvider"),await vk(t,new dk)),t.onlineComponents}function bk(t){return zg(t).then(e=>e.syncEngine)}async function Fl(t){const e=await zg(t),n=e.eventManager;return n.onListen=ek.bind(null,e.syncEngine),n.onUnlisten=nk.bind(null,e.syncEngine),n}function wk(t,e,n={}){const s=new _s;return t.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,l){const c=new Hg({next:f=>{r.enqueueAndForget(()=>Lg(i,h)),f.fromCache&&a.source==="server"?l.reject(new ke(te.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(f)},error:f=>l.reject(f)}),h=new Mg(o,c,{includeMetadataChanges:!0,ku:!0});return Og(i,h)}(await Fl(t),t.asyncQueue,e,n,s)),s.promise}class kk{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.No=new Tg(this,"async_queue_retry"),this.Wc=()=>{const n=Ja();n&&be("AsyncQueue","Visibility state changed to "+n.visibilityState),this.No.Po()};const e=Ja();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.Uc){this.Uc=!0,this.Qc=e||!1;const n=Ja();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.Uc)return new Promise(()=>{});const n=new _s;return this.Hc(()=>this.Uc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.No.reset()}catch(e){if(!Mr(e))throw e;be("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.No.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(s=>{this.Kc=s,this.Gc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw Zn("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Gc=!1,s))));return this.Bc=n,n}enqueueAfterDelay(e,n,s){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const i=qc.createAndSchedule(this,e,n,s,r=>this.Yc(r));return this.qc.push(i),i}zc(){this.Kc&&Ie()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.qc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.qc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.qc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.qc.indexOf(e);this.qc.splice(n,1)}}function Ah(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Ws extends wa{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=new kk,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Kg(this),this._firestoreClient.terminate()}}function Ek(t,e){const n=typeof t=="object"?t:qp(),s=typeof t=="string"?t:e||"(default)",i=ic(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=Ty("firestore");r&&mk(i,...r)}return i}function Wc(t){return t._firestoreClient||Kg(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Kg(t){var e;const n=t._freezeSettings(),s=function(i,r,o,a){return new sb(i,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new gk(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Ei{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ei(xt.fromBase64String(e))}catch(n){throw new ke(te.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ei(xt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ke(te.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Gt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Yc{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ke(te.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ke(te.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Qe(this._lat,e._lat)||Qe(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tk=/^__.*__$/;class Ik{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Ds(e,this.data,this.fieldMask,n,this.fieldTransforms):new $r(e,this.data,n,this.fieldTransforms)}}class Gg{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new Ds(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Wg(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ie()}}class Xc{constructor(e,n,s,i,r,o){this.settings=e,this.databaseId=n,this.It=s,this.ignoreUndefinedProperties=i,r===void 0&&this.na(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new Xc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:s,oa:!1});return i.ua(e),i}ca(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:s,oa:!1});return i.na(),i}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return Bo(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(Wg(this.sa)&&Tk.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class Ck{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.It=s||va(e)}da(e,n,s,i=!1){return new Xc({sa:e,methodName:n,fa:s,path:Gt.emptyPath(),oa:!1,la:i},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function Qg(t){const e=t._freezeSettings(),n=va(t._databaseId);return new Ck(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Sk(t,e,n,s,i,r={}){const o=t.da(r.merge||r.mergeFields?2:0,e,n,i);xc("Data must be an object, but it was:",o,s);const a=Yg(s,o);let l,c;if(r.merge)l=new En(o.fieldMask),c=o.fieldTransforms;else if(r.mergeFields){const h=[];for(const f of r.mergeFields){const d=Bl(e,f,n);if(!o.contains(d))throw new ke(te.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);xg(h,d)||h.push(d)}l=new En(h),c=o.fieldTransforms.filter(f=>l.covers(f.field))}else l=null,c=o.fieldTransforms;return new Ik(new fn(a),l,c)}class Ea extends Qc{_toFieldTransform(e){if(e.sa!==2)throw e.sa===1?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ea}}function Ak(t,e,n,s){const i=t.da(1,e,n);xc("Data must be an object, but it was:",i,s);const r=[],o=fn.empty();Js(s,(l,c)=>{const h=Jc(e,l,n);c=Xt(c);const f=i.ca(h);if(c instanceof Ea)r.push(h);else{const d=Ta(c,f);d!=null&&(r.push(h),o.set(h,d))}});const a=new En(r);return new Gg(o,a,i.fieldTransforms)}function Dk(t,e,n,s,i,r){const o=t.da(1,e,n),a=[Bl(e,s,n)],l=[i];if(r.length%2!=0)throw new ke(te.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<r.length;d+=2)a.push(Bl(e,r[d])),l.push(r[d+1]);const c=[],h=fn.empty();for(let d=a.length-1;d>=0;--d)if(!xg(c,a[d])){const g=a[d];let _=l[d];_=Xt(_);const v=o.ca(g);if(_ instanceof Ea)c.push(g);else{const y=Ta(_,v);y!=null&&(c.push(g),h.set(g,y))}}const f=new En(c);return new Gg(h,f,o.fieldTransforms)}function Ta(t,e){if(Xg(t=Xt(t)))return xc("Unsupported field value:",e,t),Yg(t,e);if(t instanceof Qc)return function(n,s){if(!Wg(s.sa))throw s.ha(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ha(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=Ta(o,s.aa(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(t,e)}return function(n,s){if((n=Xt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return kb(s.It,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Et.fromDate(n);return{timestampValue:Uo(s.It,i)}}if(n instanceof Et){const i=new Et(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Uo(s.It,i)}}if(n instanceof Yc)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Ei)return{bytesValue:_g(s.It,n._byteString)};if(n instanceof gn){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s.ha(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Lc(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ha(`Unsupported field value: ${Gc(n)}`)}(t,e)}function Yg(t,e){const n={};return Ym(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Js(t,(s,i)=>{const r=Ta(i,e.ra(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function Xg(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Et||t instanceof Yc||t instanceof Ei||t instanceof gn||t instanceof Qc)}function xc(t,e,n){if(!Xg(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Gc(n);throw s==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+s)}}function Bl(t,e,n){if((e=Xt(e))instanceof ka)return e._internalPath;if(typeof e=="string")return Jc(t,e);throw Bo("Field path arguments must be of type string or ",t,!1,void 0,n)}const Pk=new RegExp("[~\\*/\\[\\]]");function Jc(t,e,n){if(e.search(Pk)>=0)throw Bo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ka(...e.split("."))._internalPath}catch{throw Bo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Bo(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${s}`),o&&(l+=` in document ${i}`),l+=")"),new ke(te.INVALID_ARGUMENT,a+t+l)}function xg(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jg{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new gn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Rk(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Zg("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Rk extends Jg{data(){return super.data()}}function Zg(t,e){return typeof e=="string"?Jc(t,e):e instanceof ka?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e_(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ke(te.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nk{convertValue(e,n="none"){switch(Gs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return vt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(yi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Ie()}}convertObject(e,n){const s={};return Js(e.fields,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(e){return new Yc(vt(e.latitude),vt(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=xm(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(lr(e));default:return null}}convertTimestamp(e){const n=Ts(e);return new Et(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=rt.fromString(e);nt(wg(s));const i=new cr(s.get(1),s.get(3)),r=new we(s.popFirst(5));return i.isEqual(n)||Zn(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ok(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class t_ extends Jg{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ho(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Zg("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class ho extends t_{data(e={}){return super.data(e)}}class n_{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ki(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new ho(this._firestore,this._userDataWriter,s.key,s,new Ki(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ke(te.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>({type:"added",doc:new ho(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Ki(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter),oldIndex:-1,newIndex:r++}))}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new ho(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Ki(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,c=-1;return o.type!==0&&(l=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),c=r.indexOf(o.doc.key)),{type:Lk(o.type),doc:a,oldIndex:l,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Lk(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ie()}}class Zc extends Nk{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ei(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new gn(this.firestore,null,n)}}function eu(t){t=Ln(t,Vr);const e=Ln(t.firestore,Ws),n=Wc(e),s=new Zc(e);return e_(t._query),wk(n,t._query).then(i=>new n_(e,s,t,i))}function tu(t,e,n,...s){t=Ln(t,gn);const i=Ln(t.firestore,Ws),r=Qg(i);let o;return o=typeof(e=Xt(e))=="string"||e instanceof ka?Dk(r,"updateDoc",t._key,e,n,s):Ak(r,"updateDoc",t._key,e),su(i,[o.toMutation(t._key,Tn.exists(!0))])}function Ia(t){return su(Ln(t.firestore,Ws),[new Oc(t._key,Tn.none())])}function ys(t,e){const n=Ln(t.firestore,Ws),s=Cs(t),i=Ok(t.converter,e);return su(n,[Sk(Qg(t.firestore),"addDoc",s._key,i,t.converter!==null,{}).toMutation(s._key,Tn.exists(!1))]).then(()=>s)}function nu(t,...e){var n,s,i;t=Xt(t);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Ah(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(Ah(e[o])){const f=e[o];e[o]=(n=f.next)===null||n===void 0?void 0:n.bind(f),e[o+1]=(s=f.error)===null||s===void 0?void 0:s.bind(f),e[o+2]=(i=f.complete)===null||i===void 0?void 0:i.bind(f)}let l,c,h;if(t instanceof gn)c=Ln(t.firestore,Ws),h=Rc(t._key.path),l={next:f=>{e[o]&&e[o](Mk(c,t,f))},error:e[o+1],complete:e[o+2]};else{const f=Ln(t,Vr);c=Ln(f.firestore,Ws),h=f._query;const d=new Zc(c);l={next:g=>{e[o]&&e[o](new n_(c,d,f,g))},error:e[o+1],complete:e[o+2]},e_(t._query)}return function(f,d,g,_){const v=new Hg(_),y=new Mg(d,v,g);return f.asyncQueue.enqueueAndForget(async()=>Og(await Fl(f),y)),()=>{v.bc(),f.asyncQueue.enqueueAndForget(async()=>Lg(await Fl(f),y))}}(Wc(c),h,a,l)}function su(t,e){return function(n,s){const i=new _s;return n.asyncQueue.enqueueAndForget(async()=>sk(await bk(n),s,i)),i.promise}(Wc(t),e)}function Mk(t,e,n){const s=n.docs.get(e._key),i=new Zc(t);return new t_(t,i,e._key,s,new Ki(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Di=n})(Tr),gi(new Hs("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new Ws(new z1(n.getProvider("auth-internal")),new Q1(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new ke(te.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new cr(a.options.projectId,l)}(r,s),r);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),gs(Ju,"3.7.1",t),gs(Ju,"3.7.1","esm2017")})();var $k="firebase",Uk="9.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */gs($k,Uk,"app");function iu(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function s_(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Fk=s_,i_=new kr("auth","Firebase",s_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dh=new nc("@firebase/auth");function fo(t,...e){Dh.logLevel<=ze.ERROR&&Dh.error(`Auth (${Tr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function In(t,...e){throw ru(t,...e)}function Mn(t,...e){return ru(t,...e)}function Bk(t,e,n){const s=Object.assign(Object.assign({},Fk()),{[e]:n});return new kr("auth","Firebase",s).create(e,{appName:t.name})}function ru(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return i_.create(t,...e)}function Ee(t,e,...n){if(!t)throw ru(e,...n)}function Wn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw fo(e),new Error(e)}function ns(t,e){t||Wn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ph=new Map;function Qn(t){ns(t instanceof Function,"Expected a class definition");let e=Ph.get(t);return e?(ns(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ph.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vk(t,e){const n=ic(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(Eo(r,e!=null?e:{}))return i;In(i,"already-initialized")}return n.initialize({options:e})}function jk(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Qn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function qk(){return Rh()==="http:"||Rh()==="https:"}function Rh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class jr{constructor(e,n){this.shortDelay=e,this.longDelay=n,ns(n>e,"Short delay should be less than long delay!"),this.isMobile=py()||gy()}get(){return Hk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ou(t,e){ns(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Wn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Wn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Wn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Gk=new jr(3e4,6e4);function qr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Hr(t,e,n,s,i={}){return o_(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=Er(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),r_.fetch()(a_(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function o_(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},Kk),e);try{const i=new Wk(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw io(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw io(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw io(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw io(t,"user-disabled",o);const h=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Bk(t,h,c);In(t,h)}}catch(i){if(i instanceof ss)throw i;In(t,"network-request-failed")}}async function zr(t,e,n,s,i={}){const r=await Hr(t,e,n,s,i);return"mfaPendingCredential"in r&&In(t,"multi-factor-auth-required",{_serverResponse:r}),r}function a_(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?ou(t.config,i):`${t.config.apiScheme}://${i}`}class Wk{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Mn(this.auth,"network-request-failed")),Gk.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function io(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=Mn(t,e,s);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qk(t,e){return Hr(t,"POST","/v1/accounts:delete",e)}async function Yk(t,e){return Hr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zi(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Xk(t,e=!1){const n=Xt(t),s=await n.getIdToken(e),i=au(s);Ee(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Zi(Za(i.auth_time)),issuedAtTime:Zi(Za(i.iat)),expirationTime:Zi(Za(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Za(t){return Number(t)*1e3}function au(t){var e;const[n,s,i]=t.split(".");if(n===void 0||s===void 0||i===void 0)return fo("JWT malformed, contained fewer than 3 sections"),null;try{const r=$p(s);return r?JSON.parse(r):(fo("Failed to decode base64 JWT payload"),null)}catch(r){return fo("Caught error parsing JWT payload as JSON",(e=r)===null||e===void 0?void 0:e.toString()),null}}function xk(t){const e=au(t);return Ee(e,"internal-error"),Ee(typeof e.exp<"u","internal-error"),Ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pr(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof ss&&Jk(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function Jk({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class l_{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Zi(this.lastLoginAt),this.creationTime=Zi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vo(t){var e;const n=t.auth,s=await t.getIdToken(),i=await pr(t,Yk(n,{idToken:s}));Ee(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?nE(r.providerUserInfo):[],a=tE(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),h=l?c:!1,f={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new l_(r.createdAt,r.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function eE(t){const e=Xt(t);await Vo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function tE(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function nE(t){return t.map(e=>{var{providerId:n}=e,s=iu(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sE(t,e){const n=await o_(t,{},async()=>{const s=Er({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=a_(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",r_.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ee(e.idToken,"internal-error"),Ee(typeof e.idToken<"u","internal-error"),Ee(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):xk(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return Ee(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await sE(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new mr;return s&&(Ee(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(Ee(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(Ee(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new mr,this.toJSON())}_performRefresh(){return Wn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rs(t,e){Ee(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Fs{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=iu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Zk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new l_(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await pr(this,this.stsTokenManager.getToken(this.auth,e));return Ee(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Xk(this,e)}reload(){return eE(this)}_assign(e){this!==e&&(Ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Fs(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){Ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Vo(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await pr(this,Qk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,h;const f=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,g=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,y=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,E=(c=n.createdAt)!==null&&c!==void 0?c:void 0,T=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:O,emailVerified:P,isAnonymous:$,providerData:G,stsTokenManager:N}=n;Ee(O&&N,e,"internal-error");const U=mr.fromJSON(this.name,N);Ee(typeof O=="string",e,"internal-error"),rs(f,e.name),rs(d,e.name),Ee(typeof P=="boolean",e,"internal-error"),Ee(typeof $=="boolean",e,"internal-error"),rs(g,e.name),rs(_,e.name),rs(v,e.name),rs(y,e.name),rs(E,e.name),rs(T,e.name);const K=new Fs({uid:O,auth:e,email:d,emailVerified:P,displayName:f,isAnonymous:$,photoURL:_,phoneNumber:g,tenantId:v,stsTokenManager:U,createdAt:E,lastLoginAt:T});return G&&Array.isArray(G)&&(K.providerData=G.map(R=>Object.assign({},R))),y&&(K._redirectEventId=y),K}static async _fromIdTokenResponse(e,n,s=!1){const i=new mr;i.updateFromServerResponse(n);const r=new Fs({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Vo(r),r}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}c_.type="NONE";const Nh=c_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function po(t,e,n){return`firebase:${t}:${e}:${n}`}class fi{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=po(this.userKey,i.apiKey,r),this.fullPersistenceKey=po("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Fs._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new fi(Qn(Nh),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||Qn(Nh);const o=po(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const h=await c._get(o);if(h){const f=Fs._fromJSON(e,h);c!==r&&(a=f),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new fi(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new fi(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oh(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(f_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(u_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(p_(e))return"Blackberry";if(m_(e))return"Webos";if(lu(e))return"Safari";if((e.includes("chrome/")||h_(e))&&!e.includes("edge/"))return"Chrome";if(d_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function u_(t=Yt()){return/firefox\//i.test(t)}function lu(t=Yt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function h_(t=Yt()){return/crios\//i.test(t)}function f_(t=Yt()){return/iemobile/i.test(t)}function d_(t=Yt()){return/android/i.test(t)}function p_(t=Yt()){return/blackberry/i.test(t)}function m_(t=Yt()){return/webos/i.test(t)}function Ca(t=Yt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function iE(t=Yt()){var e;return Ca(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function rE(){return _y()&&document.documentMode===10}function g_(t=Yt()){return Ca(t)||d_(t)||m_(t)||p_(t)||/windows phone/i.test(t)||f_(t)}function oE(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function __(t,e=[]){let n;switch(t){case"Browser":n=Oh(Yt());break;case"Worker":n=`${Oh(Yt())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Tr}/${s}`}/**
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
 */class lE{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Lh(this),this.idTokenSubscription=new Lh(this),this.beforeStateQueue=new aE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=i_,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Qn(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await fi.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await Vo(e)}catch(s){if(((n=s)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=zk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Xt(e):null;return n&&Ee(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Qn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new kr("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Qn(e)||this._popupRedirectResolver;Ee(n,this,"argument-error"),this.redirectPersistenceManager=await fi.create(this,[Qn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return Ee(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=__(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function Kr(t){return Xt(t)}class Lh{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ny(n=>this.observer=n)}get next(){return Ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function cE(t,e,n){const s=Kr(t);Ee(s._canInitEmulator,s,"emulator-config-failed"),Ee(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),r=v_(e),{host:o,port:a}=uE(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||hE()}function v_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function uE(t){const e=v_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:Mh(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:Mh(o)}}}function Mh(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function hE(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Wn("not implemented")}_getIdTokenResponse(e){return Wn("not implemented")}_linkToIdToken(e,n){return Wn("not implemented")}_getReauthenticationResolver(e){return Wn("not implemented")}}async function fE(t,e){return Hr(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dE(t,e){return zr(t,"POST","/v1/accounts:signInWithPassword",qr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pE(t,e){return zr(t,"POST","/v1/accounts:signInWithEmailLink",qr(t,e))}async function mE(t,e){return zr(t,"POST","/v1/accounts:signInWithEmailLink",qr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr extends cu{constructor(e,n,s,i=null){super("password",s),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new gr(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new gr(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return dE(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return pE(e,{email:this._email,oobCode:this._password});default:In(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return fE(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return mE(e,{idToken:n,email:this._email,oobCode:this._password});default:In(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function di(t,e){return zr(t,"POST","/v1/accounts:signInWithIdp",qr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gE="http://localhost";class Qs extends cu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Qs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):In("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=iu(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new Qs(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return di(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,di(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,di(e,n)}buildRequest(){const e={requestUri:gE,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Er(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _E(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function vE(t){const e=Vi(ji(t)).link,n=e?Vi(ji(e)).deep_link_id:null,s=Vi(ji(t)).deep_link_id;return(s?Vi(ji(s)).link:null)||s||n||e||t}class uu{constructor(e){var n,s,i,r,o,a;const l=Vi(ji(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,h=(s=l.oobCode)!==null&&s!==void 0?s:null,f=_E((i=l.mode)!==null&&i!==void 0?i:null);Ee(c&&h&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=h,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=vE(e);try{return new uu(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(){this.providerId=Ni.PROVIDER_ID}static credential(e,n){return gr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=uu.parseLink(n);return Ee(s,"argument-error"),gr._fromEmailAndCode(e,s.code,s.tenantId)}}Ni.PROVIDER_ID="password";Ni.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ni.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr extends y_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls extends Gr{constructor(){super("facebook.com")}static credential(e){return Qs._fromParams({providerId:ls.PROVIDER_ID,signInMethod:ls.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ls.credentialFromTaggedObject(e)}static credentialFromError(e){return ls.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ls.credential(e.oauthAccessToken)}catch{return null}}}ls.FACEBOOK_SIGN_IN_METHOD="facebook.com";ls.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs extends Gr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Qs._fromParams({providerId:cs.PROVIDER_ID,signInMethod:cs.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return cs.credentialFromTaggedObject(e)}static credentialFromError(e){return cs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return cs.credential(n,s)}catch{return null}}}cs.GOOGLE_SIGN_IN_METHOD="google.com";cs.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us extends Gr{constructor(){super("github.com")}static credential(e){return Qs._fromParams({providerId:us.PROVIDER_ID,signInMethod:us.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return us.credentialFromTaggedObject(e)}static credentialFromError(e){return us.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return us.credential(e.oauthAccessToken)}catch{return null}}}us.GITHUB_SIGN_IN_METHOD="github.com";us.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs extends Gr{constructor(){super("twitter.com")}static credential(e,n){return Qs._fromParams({providerId:hs.PROVIDER_ID,signInMethod:hs.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return hs.credentialFromTaggedObject(e)}static credentialFromError(e){return hs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return hs.credential(n,s)}catch{return null}}}hs.TWITTER_SIGN_IN_METHOD="twitter.com";hs.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yE(t,e){return zr(t,"POST","/v1/accounts:signUp",qr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await Fs._fromIdTokenResponse(e,s,i),o=$h(s);return new Ys({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=$h(s);return new Ys({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function $h(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo extends ss{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,jo.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new jo(e,n,s,i)}}function b_(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?jo._fromErrorAndOperation(t,r,e,s):r})}async function bE(t,e,n=!1){const s=await pr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ys._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wE(t,e,n=!1){var s;const{auth:i}=t,r="reauthenticate";try{const o=await pr(t,b_(i,r,e,t),n);Ee(o.idToken,i,"internal-error");const a=au(o.idToken);Ee(a,i,"internal-error");const{sub:l}=a;return Ee(t.uid===l,i,"user-mismatch"),Ys._forOperation(t,r,o)}catch(o){throw((s=o)===null||s===void 0?void 0:s.code)==="auth/user-not-found"&&In(i,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function w_(t,e,n=!1){const s="signIn",i=await b_(t,s,e),r=await Ys._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}async function kE(t,e){return w_(Kr(t),e)}async function EE(t,e,n){const s=Kr(t),i=await yE(s,{returnSecureToken:!0,email:e,password:n}),r=await Ys._fromIdTokenResponse(s,"signIn",i);return await s._updateCurrentUser(r.user),r}function TE(t,e,n){return kE(Xt(t),Ni.credential(e,n))}function IE(t,e,n,s){return Xt(t).onIdTokenChanged(e,n,s)}function CE(t,e,n){return Xt(t).beforeAuthStateChanged(e,n)}const qo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(qo,"1"),this.storage.removeItem(qo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SE(){const t=Yt();return lu(t)||Ca(t)}const AE=1e3,DE=10;class E_ extends k_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=SE()&&oE(),this.fallbackToPolling=g_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);rE()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,DE):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},AE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}E_.type="LOCAL";const PE=E_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_ extends k_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}T_.type="SESSION";const I_=T_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RE(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new Sa(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await RE(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Sa.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hu(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NE{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=hu("",20);i.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(f){const d=f;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(h),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(h),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $n(){return window}function OE(t){$n().location.href=t}/**
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
 */function C_(){return typeof $n().WorkerGlobalScope<"u"&&typeof $n().importScripts=="function"}async function LE(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ME(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function $E(){return C_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S_="firebaseLocalStorageDb",UE=1,Ho="firebaseLocalStorage",A_="fbase_key";class Wr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Aa(t,e){return t.transaction([Ho],e?"readwrite":"readonly").objectStore(Ho)}function FE(){const t=indexedDB.deleteDatabase(S_);return new Wr(t).toPromise()}function jl(){const t=indexedDB.open(S_,UE);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Ho,{keyPath:A_})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Ho)?e(s):(s.close(),await FE(),e(await jl()))})})}async function Uh(t,e,n){const s=Aa(t,!0).put({[A_]:e,value:n});return new Wr(s).toPromise()}async function BE(t,e){const n=Aa(t,!1).get(e),s=await new Wr(n).toPromise();return s===void 0?null:s.value}function Fh(t,e){const n=Aa(t,!0).delete(e);return new Wr(n).toPromise()}const VE=800,jE=3;class D_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await jl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>jE)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return C_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Sa._getInstance($E()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await LE(),!this.activeServiceWorker)return;this.sender=new NE(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);!s||((e=s[0])===null||e===void 0?void 0:e.fulfilled)&&((n=s[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ME()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await jl();return await Uh(e,qo,"1"),await Fh(e,qo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Uh(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>BE(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Fh(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=Aa(i,!1).getAll();return new Wr(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),VE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}D_.type="LOCAL";const qE=D_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HE(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function zE(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=Mn("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",HE().appendChild(s)})}function KE(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new jr(3e4,6e4);/**
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
 */function GE(t,e){return e?Qn(e):(Ee(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu extends cu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return di(e,this._buildIdpRequest())}_linkToIdToken(e,n){return di(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return di(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function WE(t){return w_(t.auth,new fu(t),t.bypassAuthState)}function QE(t){const{auth:e,user:n}=t;return Ee(n,e,"internal-error"),wE(n,new fu(t),t.bypassAuthState)}async function YE(t){const{auth:e,user:n}=t;return Ee(n,e,"internal-error"),bE(n,new fu(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return WE;case"linkViaPopup":case"linkViaRedirect":return YE;case"reauthViaPopup":case"reauthViaRedirect":return QE;default:In(this.auth,"internal-error")}}resolve(e){ns(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ns(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XE=new jr(2e3,1e4);class li extends P_{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,li.currentPopupAction&&li.currentPopupAction.cancel(),li.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ee(e,this.auth,"internal-error"),e}async onExecution(){ns(this.filter.length===1,"Popup operations only handle one event");const e=hu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Mn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Mn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,li.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Mn(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,XE.get())};e()}}li.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xE="pendingRedirect",mo=new Map;class JE extends P_{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=mo.get(this.auth._key());if(!e){try{const s=await ZE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}mo.set(this.auth._key(),e)}return this.bypassAuthState||mo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ZE(t,e){const n=nT(e),s=tT(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function eT(t,e){mo.set(t._key(),e)}function tT(t){return Qn(t._redirectPersistence)}function nT(t){return po(xE,t.config.apiKey,t.name)}async function sT(t,e,n=!1){const s=Kr(t),i=GE(s,e),o=await new JE(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iT=10*60*1e3;class rT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!oT(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!R_(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Mn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=iT&&this.cachedEventUids.clear(),this.cachedEventUids.has(Bh(e))}saveEventToCache(e){this.cachedEventUids.add(Bh(e)),this.lastProcessedEventTime=Date.now()}}function Bh(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function R_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function oT(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return R_(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aT(t,e={}){return Hr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,cT=/^https?/;async function uT(t){if(t.config.emulator)return;const{authorizedDomains:e}=await aT(t);for(const n of e)try{if(hT(n))return}catch{}In(t,"unauthorized-domain")}function hT(t){const e=Vl(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!cT.test(n))return!1;if(lT.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const fT=new jr(3e4,6e4);function Vh(){const t=$n().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function dT(t){return new Promise((e,n)=>{var s,i,r;function o(){Vh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Vh(),n(Mn(t,"network-request-failed"))},timeout:fT.get()})}if(!((i=(s=$n().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=$n().gapi)===null||r===void 0)&&r.load)o();else{const a=KE("iframefcb");return $n()[a]=()=>{gapi.load?o():n(Mn(t,"network-request-failed"))},zE(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw go=null,e})}let go=null;function pT(t){return go=go||dT(t),go}/**
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
 */const mT=new jr(5e3,15e3),gT="__/auth/iframe",_T="emulator/auth/iframe",vT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},yT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function bT(t){const e=t.config;Ee(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ou(e,_T):`https://${t.config.authDomain}/${gT}`,s={apiKey:e.apiKey,appName:t.name,v:Tr},i=yT.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${Er(s).slice(1)}`}async function wT(t){const e=await pT(t),n=$n().gapi;return Ee(n,t,"internal-error"),e.open({where:document.body,url:bT(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:vT,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=Mn(t,"network-request-failed"),a=$n().setTimeout(()=>{r(o)},mT.get());function l(){$n().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const kT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ET=500,TT=600,IT="_blank",CT="http://localhost";class jh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ST(t,e,n,s=ET,i=TT){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},kT),{width:s.toString(),height:i.toString(),top:r,left:o}),c=Yt().toLowerCase();n&&(a=h_(c)?IT:n),u_(c)&&(e=e||CT,l.scrollbars="yes");const h=Object.entries(l).reduce((d,[g,_])=>`${d}${g}=${_},`,"");if(iE(c)&&a!=="_self")return AT(e||"",a),new jh(null);const f=window.open(e||"",a,h);Ee(f,t,"popup-blocked");try{f.focus()}catch{}return new jh(f)}function AT(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const DT="__/auth/handler",PT="emulator/auth/handler";function qh(t,e,n,s,i,r){Ee(t.config.authDomain,t,"auth-domain-config-required"),Ee(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Tr,eventId:i};if(e instanceof y_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Ry(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(r||{}))o[l]=c}if(e instanceof Gr){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${RT(t)}?${Er(a).slice(1)}`}function RT({config:t}){return t.emulator?ou(t,PT):`https://${t.authDomain}/${DT}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const el="webStorageSupport";class NT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=I_,this._completeRedirectFn=sT,this._overrideRedirectResult=eT}async _openPopup(e,n,s,i){var r;ns((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=qh(e,n,s,Vl(),i);return ST(e,o,hu())}async _openRedirect(e,n,s,i){return await this._originValidation(e),OE(qh(e,n,s,Vl(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(ns(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await wT(e),s=new rT(e);return n.register("authEvent",i=>(Ee(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(el,{type:el},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[el];o!==void 0&&n(!!o),In(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=uT(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return g_()||lu()||Ca()}}const OT=NT;var Hh="@firebase/auth",zh="0.20.10";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function MT(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function $T(t){gi(new Hs("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:r,authDomain:o}=s.options;return((a,l)=>{Ee(r&&!r.includes(":"),"invalid-api-key",{appName:a.name}),Ee(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const c={apiKey:r,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:__(t)},h=new lE(a,l,c);return jk(h,n),h})(s,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),gi(new Hs("auth-internal",e=>{const n=Kr(e.getProvider("auth").getImmediate());return(s=>new LT(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),gs(Hh,zh,MT(t)),gs(Hh,zh,"esm2017")}/**
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
 */const UT=5*60,FT=Fp("authIdTokenMaxAge")||UT;let Kh=null;const BT=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>FT)return;const i=n==null?void 0:n.token;Kh!==i&&(Kh=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function VT(t=qp()){const e=ic(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Vk(t,{popupRedirectResolver:OT,persistence:[qE,PE,I_]}),s=Fp("authTokenSyncURL");if(s){const r=BT(s);CE(n,r,()=>r(n.currentUser)),IE(n,o=>r(o))}const i=Up("auth");return i&&cE(n,`http://${i}`),n}$T("Browser");let Ti=[],_r=[],Bs=[];const jT={apiKey:"AIzaSyDGi3ndUC1b4SFNstliSSVryu7_ymXEkZc",authDomain:"match-home-7d1f9.firebaseapp.com",databaseURL:"https://match-home-7d1f9-default-rtdb.firebaseio.com",projectId:"match-home-7d1f9",storageBucket:"match-home-7d1f9.appspot.com",messagingSenderId:"747751099607",appId:"1:747751099607:web:29d1e5beda87c847dfb492"},N_=jp(jT),ct=Ek(N_),O_=VT(N_),qT=tn(ct,"binnacles"),HT=tn(ct,"contacts"),zT=tn(ct,"properties");tn(ct,"todos");eu(qT).then(t=>_r=t.docs.map(e=>({...e.data(),id:e.id})));eu(HT).then(t=>Ti=t.docs.map(e=>({...e.data(),id:e.id})));eu(zT).then(t=>Bs=t.docs.map(e=>({...e.data(),id:e.id})));const L_="/to-deploy-mh/assets/schedule.20f01954.png";function M_(t){const e=t-1;return e*e*e+1}function Ii(t){return t===0||t===1?t:t<.5?.5*Math.pow(2,20*t-10):-.5*Math.pow(2,10-t*20)+1}function zo(t,{delay:e=0,duration:n=400,easing:s=tp}={}){const i=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:s,css:r=>`opacity: ${r*i}`}}function Ko(t,{delay:e=0,duration:n=400,easing:s=M_,x:i=0,y:r=0,opacity:o=0}={}){const a=getComputedStyle(t),l=+a.opacity,c=a.transform==="none"?"":a.transform,h=l*(1-o);return{delay:e,duration:n,easing:s,css:(f,d)=>`
			transform: ${c} translate(${(1-f)*i}px, ${(1-f)*r}px);
			opacity: ${l-h*d}`}}function Ci(t,{delay:e=0,duration:n=400,easing:s=M_,start:i=0,opacity:r=0}={}){const o=getComputedStyle(t),a=+o.opacity,l=o.transform==="none"?"":o.transform,c=1-i,h=a*(1-r);return{delay:e,duration:n,easing:s,css:(f,d)=>`
			transform: ${l} scale(${1-c*d});
			opacity: ${a-h*d}
		`}}const Ke=yt(""),ql=yt([]),$_=yt([]),Hl=yt([]),tl=yt(),et=yt({typeContact:"",name:"",lastname:"",lastContact:"",telephon:"",email:"",selecMC:"",propCont:"",comContact:"",rangeProp:"",contMode:"",budget:"",numBeds:"",numBaths:"",halfBathroom:"",numParks:"",modePay:"",selecTP:"",contactType:"",contactStage:"",createdAt:"",locaProperty:[],tagsProperty:[],sendedProperties:[]}),We=yt({typeProperty:"",typeSaller:"",claveEB:"",claveMH:"",createdAt:"",nameProperty:"",price:"",beds:"",bathroom:"",halfBathroom:"",park:"",areaBuilding:"",areaTotal:"",description:"",urlImage:"",urlProp:"",urlSinergy:"",colonia:"",rangeProp:"",selectTP:"",selecTO:"",typeOperation:"",tagsProperty:[],locaProperty:[],binnacle:[]}),fs=yt({task:"",isComplete:"",createdAt:"",endTask:"",timeTask:"",notes:"",user:"",id:""}),ro=yt({date:"",commBinnacle:"",action:"",to:""}),KT=["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","S\xE1bado"],GT=["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"];function Ct(t){t=new Date(t);let e=t.getDate();typeof t!="string"&&(e=e+1),e<10&&(e="0"+e);let n=GT[t.getMonth()],s=t.getFullYear();return`${e}/${n}/${s}`}function Gh(t){t=new Date(t);let e=t.getMinutes();e.length<2&&(e="0"+e);let n=t.getHours();return n>12&&(n=n-12),n<10&&(n="0"+n),t.getDate(),`${n}:${e}`}function Wh(t){return t=new Date(+t),`${KT[t.getDay()]}-`}function WT(t){t.sort((e,n)=>new Date(e.endTask)<new Date(n.endTask)?1:new Date(e.endTask)>new Date(n.endTask)?-1:0)}const Da="/to-deploy-mh/assets/edit.070633c4.svg",U_="/to-deploy-mh/assets/calendar_check.3c15b67b.svg";function Qh(t,e,n){const s=t.slice();return s[22]=e[n],s}function Yh(t,e,n){const s=t.slice();return s[22]=e[n],s}function QT(t){let e;return{c(){e=S("Editar")},m(n,s){w(n,e,s)},d(n){n&&b(e)}}}function YT(t){let e;return{c(){e=S("Guardar")},m(n,s){w(n,e,s)},d(n){n&&b(e)}}}function Xh(t){let e,n,s;return{c(){e=p("button"),e.textContent="Borrar"},m(i,r){w(i,e,r),n||(s=j(e,"click",t[6]),n=!0)},p:fe,d(i){i&&b(e),n=!1,s()}}}function xh(t){let e,n,s,i,r,o,a,l,c,h,f,d=t[3],g=[];for(let T=0;T<d.length;T+=1)g[T]=tf(Yh(t,d,T));let _=null;d.length||(_=Jh());let v=t[3],y=[];for(let T=0;T<v.length;T+=1)y[T]=of(Qh(t,v,T));let E=null;return v.length||(E=nf()),{c(){e=p("h3"),e.textContent="Tareas",n=k(),s=p("ol");for(let T=0;T<g.length;T+=1)g[T].c();_&&_.c(),i=k(),r=p("p"),r.textContent=`${af}`,o=k(),a=p("h3"),a.textContent="Agenda",l=k(),c=p("ol");for(let T=0;T<y.length;T+=1)y[T].c();E&&E.c(),h=k(),f=p("p"),f.textContent=`${af}`,m(r,"class","error"),m(f,"class","error")},m(T,O){w(T,e,O),w(T,n,O),w(T,s,O);for(let P=0;P<g.length;P+=1)g[P].m(s,null);_&&_.m(s,null),u(s,i),u(s,r),w(T,o,O),w(T,a,O),w(T,l,O),w(T,c,O);for(let P=0;P<y.length;P+=1)y[P].m(c,null);E&&E.m(c,null),u(c,h),u(c,f)},p(T,O){if(O&40){d=T[3];let P;for(P=0;P<d.length;P+=1){const $=Yh(T,d,P);g[P]?g[P].p($,O):(g[P]=tf($),g[P].c(),g[P].m(s,i))}for(;P<g.length;P+=1)g[P].d(1);g.length=d.length,!d.length&&_?_.p(T,O):d.length?_&&(_.d(1),_=null):(_=Jh(),_.c(),_.m(s,i))}if(O&40){v=T[3];let P;for(P=0;P<v.length;P+=1){const $=Qh(T,v,P);y[P]?y[P].p($,O):(y[P]=of($),y[P].c(),y[P].m(c,h))}for(;P<y.length;P+=1)y[P].d(1);y.length=v.length,!v.length&&E?E.p(T,O):v.length?E&&(E.d(1),E=null):(E=nf(),E.c(),E.m(c,h))}},d(T){T&&b(e),T&&b(n),T&&b(s),Ve(g,T),_&&_.d(),T&&b(o),T&&b(a),T&&b(l),T&&b(c),Ve(y,T),E&&E.d()}}}function Jh(t){let e;return{c(){e=p("p"),e.textContent="No Hay Tareas Pendientes"},m(n,s){w(n,e,s)},p:fe,d(n){n&&b(e)}}}function Zh(t){let e,n,s,i,r,o,a,l,c,h,f=Ct(t[22].endTask)+"",d,g,_=t[22].task+"",v,y,E,T;function O(){return t[13](t[22])}function P(){return t[14](t[22])}let $=t[22].notes&&ef(t);return{c(){e=p("div"),n=p("li"),s=p("span"),i=p("img"),o=k(),a=p("img"),c=k(),h=p("spam"),d=S(f),g=S(` -*-\r
                                 `),v=S(_),y=S(` -*-\r
                                 `),$&&$.c(),tt(i.src,r=Da)||m(i,"src",r),m(i,"alt","edit"),m(i,"class","iconIMH svelte-156umuq"),tt(a.src,l=U_)||m(a,"src",l),m(a,"alt","complete"),m(a,"class","iconIMH svelte-156umuq"),m(n,"class","schedule svelte-156umuq"),bs(n,"complete",t[22].isComplete)},m(G,N){w(G,e,N),u(e,n),u(n,s),u(s,i),u(s,o),u(s,a),u(n,c),u(n,h),u(h,d),u(h,g),u(h,v),u(h,y),$&&$.m(h,null),E||(T=[j(i,"click",O),j(a,"click",P)],E=!0)},p(G,N){t=G,N&8&&f!==(f=Ct(t[22].endTask)+"")&&re(d,f),N&8&&_!==(_=t[22].task+"")&&re(v,_),t[22].notes?$?$.p(t,N):($=ef(t),$.c(),$.m(h,null)):$&&($.d(1),$=null),N&8&&bs(n,"complete",t[22].isComplete)},d(G){G&&b(e),$&&$.d(),E=!1,Je(T)}}}function ef(t){let e=t[22].notes+"",n;return{c(){n=S(e)},m(s,i){w(s,n,i)},p(s,i){i&8&&e!==(e=s[22].notes+"")&&re(n,e)},d(s){s&&b(n)}}}function tf(t){let e,n=!t[22].timeTask&&Zh(t);return{c(){n&&n.c(),e=nn()},m(s,i){n&&n.m(s,i),w(s,e,i)},p(s,i){s[22].timeTask?n&&(n.d(1),n=null):n?n.p(s,i):(n=Zh(s),n.c(),n.m(e.parentNode,e))},d(s){n&&n.d(s),s&&b(e)}}}function nf(t){let e;return{c(){e=p("p"),e.textContent="No Hay Tareas Pendientes"},m(n,s){w(n,e,s)},p:fe,d(n){n&&b(e)}}}function sf(t){let e,n,s,i,r,o,a,l,c,h,f=t[22].timeTask+"",d,g,_=Ct(t[22].endTask)+"",v,y,E=t[22].task+"",T,O,P,$;function G(){return t[15](t[22])}function N(){return t[16](t[22])}let U=t[22].notes&&rf(t);return{c(){e=p("div"),n=p("li"),s=p("span"),i=p("img"),o=k(),a=p("img"),c=k(),h=p("spam"),d=S(f),g=S(` -*-\r
                                 `),v=S(_),y=S(` -*-\r
                                 `),T=S(E),O=S(` -*-\r
                                 `),U&&U.c(),tt(i.src,r=Da)||m(i,"src",r),m(i,"alt","edit"),m(i,"class","iconIMH svelte-156umuq"),tt(a.src,l=U_)||m(a,"src",l),m(a,"alt","complete"),m(a,"class","iconIMH svelte-156umuq"),m(n,"class","schedule svelte-156umuq"),bs(n,"complete",t[22].isComplete)},m(K,R){w(K,e,R),u(e,n),u(n,s),u(s,i),u(s,o),u(s,a),u(n,c),u(n,h),u(h,d),u(h,g),u(h,v),u(h,y),u(h,T),u(h,O),U&&U.m(h,null),P||($=[j(i,"click",G),j(a,"click",N),j(e,"dblclick",t[17])],P=!0)},p(K,R){t=K,R&8&&f!==(f=t[22].timeTask+"")&&re(d,f),R&8&&_!==(_=Ct(t[22].endTask)+"")&&re(v,_),R&8&&E!==(E=t[22].task+"")&&re(T,E),t[22].notes?U?U.p(t,R):(U=rf(t),U.c(),U.m(h,null)):U&&(U.d(1),U=null),R&8&&bs(n,"complete",t[22].isComplete)},d(K){K&&b(e),U&&U.d(),P=!1,Je($)}}}function rf(t){let e=t[22].notes+"",n;return{c(){n=S(e)},m(s,i){w(s,n,i)},p(s,i){i&8&&e!==(e=s[22].notes+"")&&re(n,e)},d(s){s&&b(n)}}}function of(t){let e,n=t[22].timeTask&&sf(t);return{c(){n&&n.c(),e=nn()},m(s,i){n&&n.m(s,i),w(s,e,i)},p(s,i){s[22].timeTask?n?n.p(s,i):(n=sf(s),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(s){n&&n.d(s),s&&b(e)}}}function XT(t){let e,n,s,i,r,o,a,l,c,h,f,d,g,_,v,y,E,T,O,P,$,G,N,U,K,R,Q,q,W,F,J,V,le;function Z(L,X){return L[0]?QT:YT}let ce=Z(t),ie=ce(t),M=t[0]&&Xh(t),C=t[2]==="start"&&xh(t);return{c(){e=p("div"),n=p("h1"),n.textContent="Agenda",s=k(),i=p("img"),o=k(),a=p("div"),l=p("div"),h=k(),f=p("div"),d=p("div"),g=p("input"),_=k(),v=p("div"),y=p("input"),E=k(),T=p("input"),O=k(),P=p("div"),$=p("textarea"),G=k(),N=p("div"),U=p("button"),ie.c(),K=k(),R=p("button"),R.textContent="Cancelar",Q=k(),M&&M.c(),W=k(),F=p("div"),C&&C.c(),tt(i.src,r=L_)||m(i,"src",r),m(i,"alt","schedule"),m(i,"class","imgTitle svelte-156umuq"),m(l,"class","background"),m(g,"type","text"),m(g,"class","inputTask"),m(g,"cols","56"),m(g,"rows","1"),m(g,"placeholder","Agrega una Tarea o Cita"),m(y,"type","time"),m(y,"class","inputDate"),m(T,"type","date"),m(T,"class","inputDate"),m(v,"class","contDate"),m($,"name","notes"),m($,"id",""),m($,"cols","56"),m($,"rows","5"),m($,"placeholder","descripci\xF3n"),m(f,"class","pop-up"),m(a,"class","container"),m(F,"class","container"),m(e,"class","container")},m(L,X){w(L,e,X),u(e,n),u(e,s),u(e,i),u(e,o),u(e,a),u(a,l),u(a,h),u(a,f),u(f,d),u(d,g),ye(g,t[1].task),u(f,_),u(f,v),u(v,y),ye(y,t[1].timeTask),u(v,E),u(v,T),ye(T,t[1].endTask),u(f,O),u(f,P),u(P,$),ye($,t[1].notes),u(f,G),u(f,N),u(N,U),ie.m(U,null),u(N,K),u(N,R),u(N,Q),M&&M.m(N,null),u(e,W),u(e,F),C&&C.m(F,null),J=!0,V||(le=[j(l,"keydown",t[8]),j(g,"input",t[9]),j(g,"input",t[7]),j(y,"input",t[10]),j(T,"input",t[11]),j($,"input",t[12]),j(U,"click",t[4]),j(R,"click",t[8])],V=!0)},p(L,[X]){X&2&&g.value!==L[1].task&&ye(g,L[1].task),X&2&&ye(y,L[1].timeTask),X&2&&ye(T,L[1].endTask),X&2&&ye($,L[1].notes),ce!==(ce=Z(L))&&(ie.d(1),ie=ce(L),ie&&(ie.c(),ie.m(U,null))),L[0]?M?M.p(L,X):(M=Xh(L),M.c(),M.m(N,null)):M&&(M.d(1),M=null),L[2]==="start"?C?C.p(L,X):(C=xh(L),C.c(),C.m(F,null)):C&&(C.d(1),C=null)},i(L){J||(Ze(()=>{c||(c=dn(l,zo,{},!0)),c.run(1)}),Ze(()=>{q||(q=dn(f,Ko,{},!0)),q.run(1)}),J=!0)},o(L){c||(c=dn(l,zo,{},!1)),c.run(0),q||(q=dn(f,Ko,{},!1)),q.run(0),J=!1},d(L){L&&b(e),L&&c&&c.end(),ie.d(),M&&M.d(),L&&q&&q.end(),C&&C.d(),V=!1,Je(le)}}}let af="";function xT(t,e,n){let s,i,r;Ne(t,fs,K=>n(19,s=K)),Ne(t,Ke,K=>n(2,i=K)),Ne(t,Hl,K=>n(3,r=K));const o=Xs();let a=!1,l="addItem";Ce(Ke,i="start",i);let c={task:"",isComplete:"",createdAt:"",endTask:"",timeTask:"",notes:"",user:"",id:""};const h=nu(tn(ct,"todos"),K=>{Ce(Hl,r=K.docs.map(R=>({...R.data(),id:R.id})),r),WT(r)},K=>{console.log(K)});Yo(h);async function f(){Ce(fs,s=c,s);let K=new Date(s.endTask).getTime();Ce(fs,s={...s,endTask:K},s),l==="deleItem"?confirm("Quieres borrarlo definitivmente?")===!0&&await Ia(Cs(ct,"todos",s.id)):l==="editItem"||await ys(tn(ct,"todos"),s),n(0,a=!1),Ce(fs,s={},s),n(1,c={}),Ce(Ke,i="start",i)}async function d(K){n(1,c=K),console.log(K),l="editItem",n(0,a=!0)}async function g(){n(0,a=!0),l="deleItem",f()}function _(){c.task.length>0&&Ce(Ke,i="typing",i)}function v(){Ce(fs,s=[],s),o("/contactos")}function y(){c.task=this.value,n(1,c)}function E(){c.timeTask=this.value,n(1,c)}function T(){c.endTask=this.value,n(1,c)}function O(){c.notes=this.value,n(1,c)}return[a,c,i,r,f,d,g,_,v,y,E,T,O,K=>d(K),K=>void 0,K=>d(K),K=>void 0,()=>d]}class JT extends Xe{constructor(e){super(),Ye(this,e,xT,XT,Ge,{})}}function ZT(t){let e;return{c(){e=p("h1"),e.textContent="Estas en Sinergias"},m(n,s){w(n,e,s)},p:fe,i:fe,o:fe,d(n){n&&b(e)}}}class eI extends Xe{constructor(e){super(),Ye(this,e,null,ZT,Ge,{})}}function tI(t){let e;return{c(){e=S("Inicia sesi\xF3n")},m(n,s){w(n,e,s)},d(n){n&&b(e)}}}function nI(t){let e,n,s,i,r,o,a,l,c,h,f,d,g,_,v,y,E,T,O,P,$,G,N,U,K,R,Q,q,W;return R=new hn({props:{to:"/login",$$slots:{default:[tI]},$$scope:{ctx:t}}}),{c(){e=p("div"),n=p("br"),s=p("br"),i=p("br"),r=k(),o=p("div"),a=p("h1"),a.textContent="Registra tu cuenta",l=k(),c=p("div"),h=p("input"),f=k(),d=p("div"),g=p("input"),_=k(),v=p("br"),y=k(),E=p("div"),T=p("button"),T.textContent="Registrarse",O=k(),P=p("p"),P.textContent="O tambi\xE9n",$=k(),G=p("br"),N=k(),U=p("p"),K=S("\xBFYa tienes cuenta? "),ge(R.$$.fragment),m(a,"class","text-center text-login svelte-ftg4em"),m(h,"name","email"),m(h,"type","email"),m(h,"class","input-form svelte-ftg4em"),m(h,"placeholder","Correo"),h.required=!0,m(c,"class","center svelte-ftg4em"),m(g,"name","password"),m(g,"type","password"),m(g,"class","input-form svelte-ftg4em"),m(g,"placeholder","Contrase\xF1a"),m(d,"class","center svelte-ftg4em"),m(T,"class","button-signup fondo-color-signup svelte-ftg4em"),m(E,"class","center svelte-ftg4em"),m(P,"class","text-center svelte-ftg4em"),m(U,"class","text-center svelte-ftg4em"),m(o,"class","form-signin svelte-ftg4em")},m(F,J){w(F,e,J),u(e,n),u(e,s),u(e,i),u(e,r),u(e,o),u(o,a),u(o,l),u(o,c),u(c,h),u(o,f),u(o,d),u(d,g),u(o,_),u(o,v),u(o,y),u(o,E),u(E,T),u(o,O),u(o,P),u(o,$),u(o,G),u(o,N),u(o,U),u(U,K),de(R,U,null),Q=!0,q||(W=[j(h,"input",t[2]),j(g,"input",t[3]),j(T,"click",t[1])],q=!0)},p(F,[J]){const V={};J&64&&(V.$$scope={dirty:J,ctx:F}),R.$set(V)},i(F){Q||(H(R.$$.fragment,F),Q=!0)},o(F){x(R.$$.fragment,F),Q=!1},d(F){F&&b(e),pe(R),q=!1,Je(W)}}}function sI(t){const e=Xs();let n={email:"",password:""};const s=a=>{n={...n,[a.target.name]:a.target.value}};return[s,async()=>{try{await EE(O_,n.email,n.password),e("/")}catch(a){console.log(a)}},a=>s(a),a=>s(a)]}class iI extends Xe{constructor(e){super(),Ye(this,e,sI,nI,Ge,{})}}function lf(t,e,n){const s=t.slice();return s[1]=e[n],s}function cf(t,e,n){const s=t.slice();return s[1]=e[n],s}function uf(t){let e,n,s=Ct(t[1].endTask)+"",i,r,o=t[1].task+"",a,l,c=t[1].notes&&hf(t);return{c(){e=p("ul"),n=p("li"),i=S(s),r=S(` - -\r
                    `),a=S(o),l=S(` - -\r
                    `),c&&c.c(),bs(n,"complete",t[1].isComplete)},m(h,f){w(h,e,f),u(e,n),u(n,i),u(n,r),u(n,a),u(n,l),c&&c.m(n,null)},p(h,f){f&1&&s!==(s=Ct(h[1].endTask)+"")&&re(i,s),f&1&&o!==(o=h[1].task+"")&&re(a,o),h[1].notes?c?c.p(h,f):(c=hf(h),c.c(),c.m(n,null)):c&&(c.d(1),c=null),f&1&&bs(n,"complete",h[1].isComplete)},d(h){h&&b(e),c&&c.d()}}}function hf(t){let e=t[1].notes+"",n;return{c(){n=S(e)},m(s,i){w(s,n,i)},p(s,i){i&1&&e!==(e=s[1].notes+"")&&re(n,e)},d(s){s&&b(n)}}}function ff(t){let e,n=!t[1].timeTask&&uf(t);return{c(){n&&n.c(),e=nn()},m(s,i){n&&n.m(s,i),w(s,e,i)},p(s,i){s[1].timeTask?n&&(n.d(1),n=null):n?n.p(s,i):(n=uf(s),n.c(),n.m(e.parentNode,e))},d(s){n&&n.d(s),s&&b(e)}}}function df(t){let e,n,s,i=Wh(t[1].endTask)+"",r,o,a=Gh(t[1].endTask)+"",l,c,h=Ct(t[1].endTask)+"",f,d,g=t[1].task+"",_,v,y=t[1].notes&&pf(t);return{c(){e=p("ul"),n=p("li"),s=p("spam"),r=S(i),o=k(),l=S(a),c=S(` - -\r
                      `),f=S(h),d=k(),_=S(g),v=S(` - -\r
                      `),y&&y.c(),m(s,"type","number"),bs(n,"complete",t[1].isComplete)},m(E,T){w(E,e,T),u(e,n),u(n,s),u(s,r),u(s,o),u(s,l),u(s,c),u(s,f),u(s,d),u(s,_),u(s,v),y&&y.m(s,null)},p(E,T){T&1&&i!==(i=Wh(E[1].endTask)+"")&&re(r,i),T&1&&a!==(a=Gh(E[1].endTask)+"")&&re(l,a),T&1&&h!==(h=Ct(E[1].endTask)+"")&&re(f,h),T&1&&g!==(g=E[1].task+"")&&re(_,g),E[1].notes?y?y.p(E,T):(y=pf(E),y.c(),y.m(s,null)):y&&(y.d(1),y=null),T&1&&bs(n,"complete",E[1].isComplete)},d(E){E&&b(e),y&&y.d()}}}function pf(t){let e=t[1].notes+"",n;return{c(){n=S(e)},m(s,i){w(s,n,i)},p(s,i){i&1&&e!==(e=s[1].notes+"")&&re(n,e)},d(s){s&&b(n)}}}function mf(t){let e,n=t[1].timeTask&&df(t);return{c(){n&&n.c(),e=k()},m(s,i){n&&n.m(s,i),w(s,e,i)},p(s,i){s[1].timeTask?n?n.p(s,i):(n=df(s),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(s){n&&n.d(s),s&&b(e)}}}function rI(t){let e,n,s,i,r,o,a,l,c,h,f=t[0],d=[];for(let v=0;v<f.length;v+=1)d[v]=ff(cf(t,f,v));let g=t[0],_=[];for(let v=0;v<g.length;v+=1)_[v]=mf(lf(t,g,v));return{c(){e=p("div"),n=p("div"),s=p("div"),i=p("h1"),i.textContent="Agenda",r=k(),o=p("h3"),o.textContent="Tareas",a=k();for(let v=0;v<d.length;v+=1)d[v].c();l=k(),c=p("h3"),c.textContent="Citas",h=k();for(let v=0;v<_.length;v+=1)_[v].c();m(i,"class","title svelte-13rvwi6"),m(o,"class","subtitle svelte-13rvwi6"),m(c,"class","subtitle svelte-13rvwi6"),m(s,"class","schedule"),m(n,"class","container"),m(e,"class","show-home")},m(v,y){w(v,e,y),u(e,n),u(n,s),u(s,i),u(s,r),u(s,o),u(s,a);for(let E=0;E<d.length;E+=1)d[E].m(s,null);u(s,l),u(s,c),u(s,h);for(let E=0;E<_.length;E+=1)_[E].m(s,null)},p(v,[y]){if(y&1){f=v[0];let E;for(E=0;E<f.length;E+=1){const T=cf(v,f,E);d[E]?d[E].p(T,y):(d[E]=ff(T),d[E].c(),d[E].m(s,l))}for(;E<d.length;E+=1)d[E].d(1);d.length=f.length}if(y&1){g=v[0];let E;for(E=0;E<g.length;E+=1){const T=lf(v,g,E);_[E]?_[E].p(T,y):(_[E]=mf(T),_[E].c(),_[E].m(s,null))}for(;E<_.length;E+=1)_[E].d(1);_.length=g.length}},i:fe,o:fe,d(v){v&&b(e),Ve(d,v),Ve(_,v)}}}function oI(t,e,n){let s;return Ne(t,Hl,i=>n(0,s=i)),[s]}class aI extends Xe{constructor(e){super(),Ye(this,e,oI,rI,Ge,{})}}function gf(t,e,n){const s=t.slice();return s[0]=e[n],s[2]=n,s}function lI(t){let e,n=Ct(t[0].date)+"",s,i,r=t[0].comment+"",o;return{c(){e=p("div"),s=S(n),i=k(),o=S(r),m(e,"class","date-binnacle")},m(a,l){w(a,e,l),u(e,s),u(e,i),u(e,o)},p:fe,d(a){a&&b(e)}}}function _f(t){let e,n,s=t[2]<30&&lI(t);return{c(){e=p("div"),s&&s.c(),n=k(),m(e,"class","int-binnacle")},m(i,r){w(i,e,r),s&&s.m(e,null),u(e,n)},p(i,r){i[2]<30&&s.p(i,r)},d(i){i&&b(e),s&&s.d()}}}function cI(t){let e,n,s,i,r,o,a,l=_r,c=[];for(let h=0;h<l.length;h+=1)c[h]=_f(gf(t,l,h));return{c(){e=S(`a\r
`),n=p("main"),s=p("div"),i=p("div"),r=p("div"),o=p("h1"),o.textContent="Bit\xE1cora",a=k();for(let h=0;h<c.length;h+=1)c[h].c();m(o,"class","title svelte-7lgm1k"),m(r,"class","binnacleHome"),m(i,"class","schedule"),m(s,"class","container")},m(h,f){w(h,e,f),w(h,n,f),u(n,s),u(s,i),u(i,r),u(r,o),u(r,a);for(let d=0;d<c.length;d+=1)c[d].m(r,null)},p(h,[f]){if(f&0){l=_r;let d;for(d=0;d<l.length;d+=1){const g=gf(h,l,d);c[d]?c[d].p(g,f):(c[d]=_f(g),c[d].c(),c[d].m(r,null))}for(;d<c.length;d+=1)c[d].d(1);c.length=l.length}},i:fe,o:fe,d(h){h&&b(e),h&&b(n),Ve(c,h)}}}function uI(t){return function(){_r.sort((e,n)=>e.date<n.date?1:e.date>n.date?-1:0)}(),[]}class hI extends Xe{constructor(e){super(),Ye(this,e,uI,cI,Ge,{})}}const F_="/to-deploy-mh/assets/add-user.1bd66bde.png",B_="/to-deploy-mh/assets/house.99302696.png",fI="/to-deploy-mh/assets/team.31fda88c.png",dI=yt(!1);function pI(t){let e,n,s,i,r,o;return{c(){e=p("div"),n=p("div"),s=p("img"),r=k(),o=p("h1"),o.textContent="Contactos",tt(s.src,i=F_)||m(s,"src",i),m(s,"alt","Buzon"),m(s,"class","profile-img svelte-mxk4x8"),m(o,"class","name svelte-mxk4x8"),m(n,"class","optionCard svelte-mxk4x8"),m(e,"class","container")},m(a,l){w(a,e,l),u(e,n),u(n,s),u(n,r),u(n,o)},p:fe,d(a){a&&b(e)}}}function mI(t){let e,n,s,i,r,o;return{c(){e=p("div"),n=p("div"),s=p("img"),r=k(),o=p("h1"),o.textContent="Propiedades",tt(s.src,i=B_)||m(s,"src",i),m(s,"alt","propiedad"),m(s,"class","profile-img svelte-mxk4x8"),m(o,"class","name svelte-mxk4x8"),m(n,"class","optionCard svelte-mxk4x8"),m(e,"class","container")},m(a,l){w(a,e,l),u(e,n),u(n,s),u(n,r),u(n,o)},p:fe,d(a){a&&b(e)}}}function gI(t){let e,n,s,i,r,o;return{c(){e=p("div"),n=p("div"),s=p("img"),r=k(),o=p("h1"),o.textContent="Agenda",tt(s.src,i=L_)||m(s,"src",i),m(s,"alt","agenda"),m(s,"class","profile-img svelte-mxk4x8"),m(o,"class","name svelte-mxk4x8"),m(n,"class","optionCard svelte-mxk4x8"),m(e,"class","container")},m(a,l){w(a,e,l),u(e,n),u(n,s),u(n,r),u(n,o)},p:fe,d(a){a&&b(e)}}}function _I(t){let e,n,s,i,r,o;return{c(){e=p("div"),n=p("div"),s=p("img"),r=k(),o=p("h1"),o.textContent="Sinergias",tt(s.src,i=fI)||m(s,"src",i),m(s,"alt","sinergias"),m(s,"class","profile-img svelte-mxk4x8"),m(o,"class","name svelte-mxk4x8"),m(n,"class","optionCard svelte-mxk4x8"),m(e,"class","container")},m(a,l){w(a,e,l),u(e,n),u(n,s),u(n,r),u(n,o)},p:fe,d(a){a&&b(e)}}}function vI(t){let e,n,s,i,r,o,a,l;return e=new hn({props:{to:"/contactos",title:"contactos",$$slots:{default:[pI]},$$scope:{ctx:t}}}),s=new hn({props:{to:"/propiedades",title:"propiedades",$$slots:{default:[mI]},$$scope:{ctx:t}}}),r=new hn({props:{to:"/agenda",title:"agenda",class:"s",$$slots:{default:[gI]},$$scope:{ctx:t}}}),a=new hn({props:{to:"/sinergias",title:"sinergias",$$slots:{default:[_I]},$$scope:{ctx:t}}}),{c(){ge(e.$$.fragment),n=k(),ge(s.$$.fragment),i=k(),ge(r.$$.fragment),o=k(),ge(a.$$.fragment)},m(c,h){de(e,c,h),w(c,n,h),de(s,c,h),w(c,i,h),de(r,c,h),w(c,o,h),de(a,c,h),l=!0},p(c,h){const f={};h&1&&(f.$$scope={dirty:h,ctx:c}),e.$set(f);const d={};h&1&&(d.$$scope={dirty:h,ctx:c}),s.$set(d);const g={};h&1&&(g.$$scope={dirty:h,ctx:c}),r.$set(g);const _={};h&1&&(_.$$scope={dirty:h,ctx:c}),a.$set(_)},i(c){l||(H(e.$$.fragment,c),H(s.$$.fragment,c),H(r.$$.fragment,c),H(a.$$.fragment,c),l=!0)},o(c){x(e.$$.fragment,c),x(s.$$.fragment,c),x(r.$$.fragment,c),x(a.$$.fragment,c),l=!1},d(c){pe(e,c),c&&b(n),pe(s,c),c&&b(i),pe(r,c),c&&b(o),pe(a,c)}}}function yI(t){let e,n,s,i,r,o,a,l,c;return s=new ec({props:{$$slots:{default:[vI]},$$scope:{ctx:t}}}),o=new aI({props:{"(orderTodos)":!0}}),l=new hI({}),{c(){e=p("body"),n=p("div"),ge(s.$$.fragment),i=k(),r=p("div"),ge(o.$$.fragment),a=k(),ge(l.$$.fragment),m(n,"class","wrapper-grid svelte-mxk4x8"),m(r,"class",""),m(e,"class","svelte-mxk4x8")},m(h,f){w(h,e,f),u(e,n),de(s,n,null),u(e,i),u(e,r),de(o,r,null),u(r,a),de(l,r,null),c=!0},p(h,[f]){const d={};f&1&&(d.$$scope={dirty:f,ctx:h}),s.$set(d)},i(h){c||(H(s.$$.fragment,h),H(o.$$.fragment,h),H(l.$$.fragment,h),c=!0)},o(h){x(s.$$.fragment,h),x(o.$$.fragment,h),x(l.$$.fragment,h),c=!1},d(h){h&&b(e),pe(s),pe(o),pe(l)}}}class bI extends Xe{constructor(e){super(),Ye(this,e,null,yI,Ge,{})}}function wI(t){let e,n,s,i,r,o,a,l,c,h,f=Ct(t[2])+"",d,g,_,v,y,E,T,O,P,$,G,N,U,K,R,Q,q,W,F;return{c(){e=p("div"),n=p("div"),s=p("div"),i=p("h5"),r=S(t[0]),o=k(),a=S(t[1]),l=k(),c=p("h5"),h=S("Alta "),d=S(f),g=k(),_=p("div"),v=p("p"),y=S(t[3]),E=k(),T=p("p"),O=S("tel: "),P=S(t[4]),$=S(" email: "),G=S(t[5]),N=k(),U=p("p"),K=S("Presupuesto "),R=S(t[6]),Q=k(),q=p("p"),W=S("Rango "),F=S(t[7]),m(s,"class","namePerson svelte-s0ws0m"),m(_,"class","nameDate svelte-s0ws0m"),m(n,"class","contactCard"),m(e,"class","container contact svelte-s0ws0m")},m(J,V){w(J,e,V),u(e,n),u(n,s),u(s,i),u(i,r),u(i,o),u(i,a),u(s,l),u(s,c),u(c,h),u(c,d),u(n,g),u(n,_),u(_,v),u(v,y),u(_,E),u(_,T),u(T,O),u(T,P),u(T,$),u(T,G),u(_,N),u(_,U),u(U,K),u(U,R),u(_,Q),u(_,q),u(q,W),u(q,F)},p(J,[V]){V&1&&re(r,J[0]),V&2&&re(a,J[1]),V&4&&f!==(f=Ct(J[2])+"")&&re(d,f),V&8&&re(y,J[3]),V&16&&re(P,J[4]),V&32&&re(G,J[5]),V&64&&re(R,J[6]),V&128&&re(F,J[7])},i:fe,o:fe,d(J){J&&b(e)}}}function kI(t,e,n){let{name:s,lastname:i,createdAt:r,contactStage:o,telephon:a,email:l,budget:c,rangeProp:h}=e;return t.$$set=f=>{"name"in f&&n(0,s=f.name),"lastname"in f&&n(1,i=f.lastname),"createdAt"in f&&n(2,r=f.createdAt),"contactStage"in f&&n(3,o=f.contactStage),"telephon"in f&&n(4,a=f.telephon),"email"in f&&n(5,l=f.email),"budget"in f&&n(6,c=f.budget),"rangeProp"in f&&n(7,h=f.rangeProp)},[s,i,r,o,a,l,c,h]}class EI extends Xe{constructor(e){super(),Ye(this,e,kI,wI,Ge,{name:0,lastname:1,createdAt:2,contactStage:3,telephon:4,email:5,budget:6,rangeProp:7})}}function TI(t){let e,n,s,i;return{c(){e=p("div"),n=p("input"),m(n,"class","searchInput svelte-1d4ha5n"),m(n,"type","text"),m(n,"id","search-field"),m(n,"placeholder","Enter Search Term"),m(n,"autocomplete","off"),m(e,"id","search-input-cont")},m(r,o){w(r,e,o),u(e,n),ye(n,t[0]),s||(i=[j(n,"input",t[2]),j(n,"input",t[1])],s=!0)},p(r,[o]){o&1&&n.value!==r[0]&&ye(n,r[0])},i:fe,o:fe,d(r){r&&b(e),s=!1,Je(i)}}}function II(t,e,n){let{searchTerm:s}=e;function i(o){sv.call(this,t,o)}function r(){s=this.value,n(0,s)}return t.$$set=o=>{"searchTerm"in o&&n(0,s=o.searchTerm)},[s,i,r]}class du extends Xe{constructor(e){super(),Ye(this,e,II,TI,Ge,{searchTerm:0})}}async function CI(t,e){if(console.log("estas en la funcion"),t==="todoAdding"){const n=tn(ct,"todos");await ys(n,e)}else t==="todoUpdate"?await tu(Cs(ct,"todos",e.id),e):t==="todoDelete"&&await Ia(Cs(ct,"todos",e.id));e=""}function SI(t){let e,n,s,i,r,o,a,l,c,h,f,d,g,_,v,y,E,T,O,P,$,G;return{c(){e=p("div"),s=k(),i=p("div"),r=p("div"),o=p("input"),a=k(),l=p("input"),c=k(),h=p("input"),f=k(),d=p("div"),g=p("textarea"),_=k(),v=p("div"),y=p("button"),y.textContent="Guardar",E=k(),T=p("button"),T.textContent="Cancelar",m(e,"class","background svelte-18c6vp2"),m(o,"type","text"),m(o,"class","inputTask svelte-18c6vp2"),m(o,"placeholder","Agrega una Tarea o Cita"),m(l,"type","time"),m(l,"class","inputDate svelte-18c6vp2"),m(l,"placeholder","Hora"),m(h,"type","date"),m(h,"class","inputDate svelte-18c6vp2"),m(h,"placeholder","Fecha"),m(g,"name","notes"),m(g,"cols","40"),m(g,"rows","5"),m(g,"placeholder","descripci\xF3n"),m(y,"class","btnShedule svelte-18c6vp2"),m(T,"class","btnShedule svelte-18c6vp2"),m(i,"class","pop__up svelte-18c6vp2")},m(N,U){w(N,e,U),w(N,s,U),w(N,i,U),u(i,r),u(r,o),ye(o,t[0]),u(i,a),u(i,l),ye(l,t[1].timeTask),u(i,c),u(i,h),ye(h,t[1].endTask),u(i,f),u(i,d),u(d,g),ye(g,t[1].notes),u(i,_),u(i,v),u(v,y),u(v,E),u(v,T),P=!0,$||(G=[j(window,"keydown",t[4]),j(e,"click",t[2]),j(o,"input",t[5]),j(l,"input",t[6]),j(h,"input",t[7]),j(g,"input",t[8]),j(y,"click",t[3]),j(T,"click",t[2])],$=!0)},p(N,[U]){U&1&&o.value!==N[0]&&ye(o,N[0]),U&2&&ye(l,N[1].timeTask),U&2&&ye(h,N[1].endTask),U&2&&ye(g,N[1].notes)},i(N){P||(Ze(()=>{n||(n=dn(e,zo,{},!0)),n.run(1)}),Ze(()=>{O||(O=dn(i,Ko,{},!0)),O.run(1)}),P=!0)},o(N){n||(n=dn(e,zo,{},!1)),n.run(0),O||(O=dn(i,Ko,{},!1)),O.run(0),P=!1},d(N){N&&b(e),N&&n&&n.end(),N&&b(s),N&&b(i),N&&O&&O.end(),$=!1,Je(G)}}}function AI(t,e,n){let s,i,r;Ne(t,fs,T=>n(10,s=T)),Ne(t,Ke,T=>n(11,i=T)),Ne(t,et,T=>n(12,r=T));const o=lp();let a=`${r.name} ${r.lastname}`,l=[],c=[],h;l={task:"",endTask:"",isComplete:"",createdAt:"",timeTask:"",notes:"",user:""};function f(){o("closeIt"),Ce(Ke,i="contSelect",i),Ce(fs,s="",s)}const d=async()=>{console.log("ests en addTodo"),Ce(Ke,i="todoAdding",i),console.log(h),c=a,Ce(fs,s={...l,task:c},s),CI(i,s),console.log(s)},g=T=>{T.key==="Enter"&&d()};function _(){a=this.value,n(0,a)}function v(){l.timeTask=this.value,n(1,l)}function y(){l.endTask=this.value,n(1,l)}function E(){l.notes=this.value,n(1,l)}return[a,l,f,d,g,_,v,y,E]}class DI extends Xe{constructor(e){super(),Ye(this,e,AI,SI,Ge,{})}}function PI(t){let e,n,s,i,r,o,a,l,c,h,f,d,g,_,v,y,E,T,O,P,$,G,N,U,K,R,Q,q,W,F,J,V,le,Z,ce,ie,M,C,L,X;return{c(){e=p("main"),n=p("section"),s=p("figure"),i=p("img"),o=k(),a=p("div"),l=S(t[1]),c=k(),h=p("figcaption"),f=S(t[2]),d=k(),g=p("section"),_=p("section"),v=p("div"),y=p("div"),E=S(t[3]),T=S(" Rec\xE1maras"),O=k(),P=p("div"),$=S(t[4]),G=S(" Ba\xF1os"),N=k(),U=p("div"),K=S(t[5]),R=S(" Estacionamientos"),Q=k(),q=p("div"),W=S(t[6]),F=S(" m2 de Contruccion"),J=k(),V=p("div"),le=S(t[7]),Z=S(" m2 de Terreno"),ce=k(),ie=p("br"),M=k(),C=p("div"),L=S("Precio $: "),X=S(t[8]),tt(i.src,r=t[0])||m(i,"src",r),m(i,"alt",t[1]),m(i,"class","bkcover svelte-1w1p4eb"),m(a,"class","language svelte-1w1p4eb"),m(h,"class","svelte-1w1p4eb"),m(s,"class","bkcont svelte-1w1p4eb"),m(n,"class","book-top-info svelte-1w1p4eb"),m(v,"class","buy-options-cont svelte-1w1p4eb"),m(_,"class","from-pariyatti available-at svelte-1w1p4eb"),m(g,"class","book-bottom-links svelte-1w1p4eb")},m(B,ue){w(B,e,ue),u(e,n),u(n,s),u(s,i),u(s,o),u(s,a),u(a,l),u(s,c),u(s,h),u(h,f),u(e,d),u(e,g),u(g,_),u(_,v),u(v,y),u(y,E),u(y,T),u(v,O),u(v,P),u(P,$),u(P,G),u(v,N),u(v,U),u(U,K),u(U,R),u(v,Q),u(v,q),u(q,W),u(q,F),u(v,J),u(v,V),u(V,le),u(V,Z),u(v,ce),u(v,ie),u(v,M),u(v,C),u(C,L),u(C,X)},p(B,[ue]){ue&1&&!tt(i.src,r=B[0])&&m(i,"src",r),ue&2&&m(i,"alt",B[1]),ue&2&&re(l,B[1]),ue&4&&re(f,B[2]),ue&8&&re(E,B[3]),ue&16&&re($,B[4]),ue&32&&re(K,B[5]),ue&64&&re(W,B[6]),ue&128&&re(le,B[7]),ue&256&&re(X,B[8])},i:fe,o:fe,d(B){B&&b(e)}}}function RI(t,e,n){let{urlImage:s,claveEB:i,nameProperty:r,beds:o,bathroom:a,park:l,areaBuilding:c,areaTotal:h,price:f}=e;return t.$$set=d=>{"urlImage"in d&&n(0,s=d.urlImage),"claveEB"in d&&n(1,i=d.claveEB),"nameProperty"in d&&n(2,r=d.nameProperty),"beds"in d&&n(3,o=d.beds),"bathroom"in d&&n(4,a=d.bathroom),"park"in d&&n(5,l=d.park),"areaBuilding"in d&&n(6,c=d.areaBuilding),"areaTotal"in d&&n(7,h=d.areaTotal),"price"in d&&n(8,f=d.price)},[s,i,r,o,a,l,c,h,f]}class V_ extends Xe{constructor(e){super(),Ye(this,e,RI,PI,Ge,{urlImage:0,claveEB:1,nameProperty:2,beds:3,bathroom:4,park:5,areaBuilding:6,areaTotal:7,price:8})}}let Rs;function j_(t){return t<=1e6?Rs="PRM":t<=25e5?Rs="SGN":t<=5e6?Rs="TRC":t<=8e6?Rs="CRT":t<=12e6?Rs="QNT":t>12e6&&(Rs="SXT"),Rs}let nl,sl;function NI(t){console.log(t);let e=Bs;return e=e.filter(n=>n.selectTP===t.selecTP),console.log("filtraste por tipo de propiedad",e),t.numBeds>0&&(e=e.filter(n=>n.beds>=t.numBeds)),t.numBaths>0&&(e=e.filter(n=>n.bathroom>=t.numBaths)),t.numParks>0&&(e=e.filter(n=>n.park>=t.numParks)),console.log("Por caracteristicas",e),!t.budget&&t.rangeProp!=""&&(t.budget?(console.log("filtraste por rango",t.budget),nl=t.budget*.7,sl=t.budget*1.1,console.log(nl,sl),e=e.filter(n=>n.price>=nl&&n.price<=sl)):(console.log("filtraste por rango",t.rangeProp),e=e.filter(n=>j_(n.price)===t.rangeProp)),console.log("filtraste presupuesto",e)),t.locaProperty.length>0&&(e=e.filter(n=>t.locaProperty.some(s=>n.locaProperty.includes(s)))),console.log("Filtraste por Ubicacion",e),t.tagsProperty.length>0&&(e=e.filter(n=>t.tagsProperty.every(s=>n.tagsProperty.includes(s)))),console.log("Filtraste por localizacion",e),e.length===0||""+e.length,ql.set(e)}async function vf(t,e){if(t==="binnAdding"){console.log(e);const n=tn(ct,"binnacles");await ys(n,e)}else t==="binnacleUpdate"?console.log("Se edit\xF3 a: ",e.comment,e.to):t==="binnacleDelete"&&console.log("Se elimin\xF3 a: ",e.to);e=[]}const q_="/to-deploy-mh/assets/trash.2d1385a7.svg",Go=["Casa","Terreno","Departamento","Casa o Departamento","Local Comercial","Casa de Campo"],yf=["Lona en Propiedad","Propiedades.com","NocNok","Mercado Libre","Vivanuncios","Lamudi","Inmuebles24","Referido","Otro"],bf=["Comprador","Arrendador","Propietario","Agente Asociado","Agente Inmobiliario","Constructor","Inversionista","Otro"],wf=["Contado","Credito Hipotecario","INFONAVIT","COFINAVIT","FOVISSSTE","ALIADOS","Conyugal"],kf=["Venta","Renta"],Ef=["Rango","PRM","SGN","TRC","CRT","QNT","SXT","SPT"],Wo=[0,1,2,3,4,5],kn=[0,1,2,3,4],Tf=["Due\xF1o","Familiar","Inmobiliaria","Conocido"];function OI(t){let e,n,s,i,r,o,a,l,c,h,f,d,g,_,v,y,E,T,O,P,$,G,N,U,K,R,Q,q,W,F,J,V,le,Z,ce,ie,M,C,L,X,B,ue,Le;return{c(){e=p("div"),n=p("div"),s=p("label"),i=S(`/Norte\\\r
			`),r=p("input"),o=k(),a=p("div"),l=p("label"),c=S(`/Noroeste\r
			`),h=p("input"),f=k(),d=p("label"),g=p("input"),_=S("NorEste\\"),v=k(),y=p("div"),E=p("label"),T=S(`/Oeste\r
			`),O=p("input"),P=k(),$=p("label"),G=S(`Centro Norte\r
			`),N=p("input"),U=k(),K=p("label"),R=p("input"),Q=S("Este\\"),q=k(),W=p("div"),F=p("label"),J=S(`Centro Sur\r
			`),V=p("input"),le=k(),Z=p("div"),ce=p("label"),ie=S(`/SurOeste\r
			`),M=p("input"),C=k(),L=p("label"),X=p("input"),B=S("SurEste\\"),r.__value="Norte",r.value=r.__value,m(r,"id","north"),m(r,"type","checkbox"),t[2][0].push(r),m(s,"for","north"),m(n,"class","filterLocationOne svelte-1lvjb5r"),h.__value="Noroeste",h.value=h.__value,m(h,"id","northwest"),m(h,"type","checkbox"),t[2][0].push(h),m(l,"for","northwest"),g.__value="Noreste",g.value=g.__value,m(g,"id","northeast"),m(g,"type","checkbox"),t[2][0].push(g),m(d,"for","northeast"),m(a,"class","filterLocationOne svelte-1lvjb5r"),O.__value="Oeste",O.value=O.__value,m(O,"id","west"),m(O,"type","checkbox"),t[2][0].push(O),m(E,"for","west"),N.__value="Centronorte",N.value=N.__value,m(N,"id","townNorth"),m(N,"type","checkbox"),t[2][0].push(N),m($,"for","townNorth"),R.__value="Este",R.value=R.__value,m(R,"id","east"),m(R,"type","checkbox"),t[2][0].push(R),m(K,"for","east"),m(y,"class","filterLocationOne svelte-1lvjb5r"),V.__value="CentroSur",V.value=V.__value,m(V,"id","townsouth"),m(V,"type","checkbox"),t[2][0].push(V),m(F,"for","townsouth"),m(W,"class","filterLocationOne svelte-1lvjb5r"),M.__value="SurOeste",M.value=M.__value,m(M,"id","southwest"),m(M,"type","checkbox"),t[2][0].push(M),m(ce,"for","southwest"),X.__value="SurEste",X.value=X.__value,m(X,"id","southeast"),m(X,"type","checkbox"),t[2][0].push(X),m(L,"for","southeast"),m(Z,"class","filterLocationOne svelte-1lvjb5r"),m(e,"class","containerUbication svelte-1lvjb5r")},m(D,se){w(D,e,se),u(e,n),u(n,s),u(s,i),u(s,r),r.checked=~t[0].indexOf(r.__value),u(e,o),u(e,a),u(a,l),u(l,c),u(l,h),h.checked=~t[0].indexOf(h.__value),u(a,f),u(a,d),u(d,g),g.checked=~t[0].indexOf(g.__value),u(d,_),u(e,v),u(e,y),u(y,E),u(E,T),u(E,O),O.checked=~t[0].indexOf(O.__value),u(y,P),u(y,$),u($,G),u($,N),N.checked=~t[0].indexOf(N.__value),u(y,U),u(y,K),u(K,R),R.checked=~t[0].indexOf(R.__value),u(K,Q),u(e,q),u(e,W),u(W,F),u(F,J),u(F,V),V.checked=~t[0].indexOf(V.__value),u(e,le),u(e,Z),u(Z,ce),u(ce,ie),u(ce,M),M.checked=~t[0].indexOf(M.__value),u(Z,C),u(Z,L),u(L,X),X.checked=~t[0].indexOf(X.__value),u(L,B),ue||(Le=[j(r,"change",t[1]),j(h,"change",t[3]),j(g,"change",t[4]),j(O,"change",t[5]),j(N,"change",t[6]),j(R,"change",t[7]),j(V,"change",t[8]),j(M,"change",t[9]),j(X,"change",t[10])],ue=!0)},p(D,[se]){se&1&&(r.checked=~D[0].indexOf(r.__value)),se&1&&(h.checked=~D[0].indexOf(h.__value)),se&1&&(g.checked=~D[0].indexOf(g.__value)),se&1&&(O.checked=~D[0].indexOf(O.__value)),se&1&&(N.checked=~D[0].indexOf(N.__value)),se&1&&(R.checked=~D[0].indexOf(R.__value)),se&1&&(V.checked=~D[0].indexOf(V.__value)),se&1&&(M.checked=~D[0].indexOf(M.__value)),se&1&&(X.checked=~D[0].indexOf(X.__value))},i:fe,o:fe,d(D){D&&b(e),t[2][0].splice(t[2][0].indexOf(r),1),t[2][0].splice(t[2][0].indexOf(h),1),t[2][0].splice(t[2][0].indexOf(g),1),t[2][0].splice(t[2][0].indexOf(O),1),t[2][0].splice(t[2][0].indexOf(N),1),t[2][0].splice(t[2][0].indexOf(R),1),t[2][0].splice(t[2][0].indexOf(V),1),t[2][0].splice(t[2][0].indexOf(M),1),t[2][0].splice(t[2][0].indexOf(X),1),ue=!1,Je(Le)}}}function LI(t,e,n){let{ubication:s}=e;const i=[[]];function r(){s=Ft(i[0],this.__value,this.checked),n(0,s)}function o(){s=Ft(i[0],this.__value,this.checked),n(0,s)}function a(){s=Ft(i[0],this.__value,this.checked),n(0,s)}function l(){s=Ft(i[0],this.__value,this.checked),n(0,s)}function c(){s=Ft(i[0],this.__value,this.checked),n(0,s)}function h(){s=Ft(i[0],this.__value,this.checked),n(0,s)}function f(){s=Ft(i[0],this.__value,this.checked),n(0,s)}function d(){s=Ft(i[0],this.__value,this.checked),n(0,s)}function g(){s=Ft(i[0],this.__value,this.checked),n(0,s)}return t.$$set=_=>{"ubication"in _&&n(0,s=_.ubication)},[s,r,i,o,a,l,c,h,f,d,g]}class H_ extends Xe{constructor(e){super(),Ye(this,e,LI,OI,Ge,{ubication:0})}}function MI(t){let e,n,s,i,r,o,a,l,c,h,f,d,g,_,v,y,E,T,O,P,$,G,N,U,K,R,Q,q,W,F,J,V,le;return{c(){e=p("section"),n=p("div"),s=p("label"),i=S(`Fracc. Privado\r
		   `),r=p("input"),o=k(),a=p("label"),l=S(`Frente a Parque\r
         `),c=p("input"),h=k(),f=p("label"),d=S(`Una Planta\r
         `),g=p("input"),_=k(),v=p("div"),y=p("label"),E=S(`Recamara en P.B.\r
		`),T=p("input"),O=k(),P=p("label"),$=S(`Patio Amplio\r
   `),G=p("input"),N=k(),U=p("label"),K=S(`Lista para Habitarse\r
   `),R=p("input"),Q=k(),q=p("div"),W=p("label"),F=S(`Nueva\r
		`),J=p("input"),m(r,"type","checkbox"),r.__value="Fracc. Privado",r.value=r.__value,t[2][0].push(r),m(c,"type","checkbox"),c.__value="Frente a Parque",c.value=c.__value,t[2][0].push(c),m(g,"type","checkbox"),g.__value="Una Planta",g.value=g.__value,t[2][0].push(g),m(n,"class","svelte-1b9bvt0"),m(T,"type","checkbox"),T.__value="Recamara en PB",T.value=T.__value,t[2][0].push(T),m(G,"type","checkbox"),G.__value="Patio Amplio",G.value=G.__value,t[2][0].push(G),m(R,"type","checkbox"),R.__value="Lista Habitarse",R.value=R.__value,t[2][0].push(R),m(v,"class","svelte-1b9bvt0"),m(J,"type","checkbox"),J.__value="Nueva",J.value=J.__value,t[2][0].push(J),m(q,"class","svelte-1b9bvt0"),m(e,"class","svelte-1b9bvt0")},m(Z,ce){w(Z,e,ce),u(e,n),u(n,s),u(s,i),u(s,r),r.checked=~t[0].indexOf(r.__value),u(n,o),u(n,a),u(a,l),u(a,c),c.checked=~t[0].indexOf(c.__value),u(n,h),u(n,f),u(f,d),u(f,g),g.checked=~t[0].indexOf(g.__value),u(e,_),u(e,v),u(v,y),u(y,E),u(y,T),T.checked=~t[0].indexOf(T.__value),u(v,O),u(v,P),u(P,$),u(P,G),G.checked=~t[0].indexOf(G.__value),u(v,N),u(v,U),u(U,K),u(U,R),R.checked=~t[0].indexOf(R.__value),u(e,Q),u(e,q),u(q,W),u(W,F),u(W,J),J.checked=~t[0].indexOf(J.__value),V||(le=[j(r,"change",t[1]),j(c,"change",t[3]),j(g,"change",t[4]),j(T,"change",t[5]),j(G,"change",t[6]),j(R,"change",t[7]),j(J,"change",t[8])],V=!0)},p(Z,[ce]){ce&1&&(r.checked=~Z[0].indexOf(r.__value)),ce&1&&(c.checked=~Z[0].indexOf(c.__value)),ce&1&&(g.checked=~Z[0].indexOf(g.__value)),ce&1&&(T.checked=~Z[0].indexOf(T.__value)),ce&1&&(G.checked=~Z[0].indexOf(G.__value)),ce&1&&(R.checked=~Z[0].indexOf(R.__value)),ce&1&&(J.checked=~Z[0].indexOf(J.__value))},i:fe,o:fe,d(Z){Z&&b(e),t[2][0].splice(t[2][0].indexOf(r),1),t[2][0].splice(t[2][0].indexOf(c),1),t[2][0].splice(t[2][0].indexOf(g),1),t[2][0].splice(t[2][0].indexOf(T),1),t[2][0].splice(t[2][0].indexOf(G),1),t[2][0].splice(t[2][0].indexOf(R),1),t[2][0].splice(t[2][0].indexOf(J),1),V=!1,Je(le)}}}function $I(t,e,n){let{tag:s}=e;const i=[[]];function r(){s=Ft(i[0],this.__value,this.checked),n(0,s)}function o(){s=Ft(i[0],this.__value,this.checked),n(0,s)}function a(){s=Ft(i[0],this.__value,this.checked),n(0,s)}function l(){s=Ft(i[0],this.__value,this.checked),n(0,s)}function c(){s=Ft(i[0],this.__value,this.checked),n(0,s)}function h(){s=Ft(i[0],this.__value,this.checked),n(0,s)}function f(){s=Ft(i[0],this.__value,this.checked),n(0,s)}return t.$$set=d=>{"tag"in d&&n(0,s=d.tag)},[s,r,i,o,a,l,c,h,f]}class z_ extends Xe{constructor(e){super(),Ye(this,e,$I,MI,Ge,{tag:0})}}function If(t,e,n){const s=t.slice();return s[26]=e[n],s}function Cf(t,e,n){const s=t.slice();return s[29]=e[n],s}function Sf(t,e,n){const s=t.slice();return s[32]=e[n],s}function Af(t,e,n){const s=t.slice();return s[35]=e[n],s}function Df(t,e,n){const s=t.slice();return s[38]=e[n],s}function Pf(t,e,n){const s=t.slice();return s[41]=e[n],s}function Rf(t,e,n){const s=t.slice();return s[44]=e[n],s}function Nf(t,e,n){const s=t.slice();return s[47]=e[n],s}function Of(t,e,n){const s=t.slice();return s[50]=e[n],s}function Lf(t,e,n){const s=t.slice();return s[53]=e[n],s}function UI(t){let e,n=Ct(t[3].createdAt)+"",s,i,r;return{c(){e=p("h3"),s=S(n),m(e,"class","dataInput svelte-1myljlf")},m(o,a){w(o,e,a),u(e,s),i||(r=j(e,"dblclick",t[4]),i=!0)},p(o,a){a[0]&8&&n!==(n=Ct(o[3].createdAt)+"")&&re(s,n)},d(o){o&&b(e),i=!1,r()}}}function FI(t){let e,n,s;return{c(){e=p("input"),m(e,"class","dataInput svelte-1myljlf"),m(e,"type","date")},m(i,r){w(i,e,r),ye(e,t[3].createdAt),n||(s=j(e,"input",t[6]),n=!0)},p(i,r){r[0]&9&&ye(e,i[3].createdAt)},d(i){i&&b(e),n=!1,s()}}}function Mf(t){let e,n,s;return{c(){e=p("input"),m(e,"class","dataInput svelte-1myljlf"),m(e,"type","email"),m(e,"placeholder","email")},m(i,r){w(i,e,r),ye(e,t[3].email),n||(s=j(e,"input",t[10]),n=!0)},p(i,r){r[0]&9&&e.value!==i[3].email&&ye(e,i[3].email)},d(i){i&&b(e),n=!1,s()}}}function $f(t){let e,n=t[53]+"",s,i;return{c(){e=p("option"),s=S(n),m(e,"class","dataInput svelte-1myljlf"),m(e,"type","checkbox"),e.__value=i=t[53],e.value=e.__value},m(r,o){w(r,e,o),u(e,s)},p(r,o){o[0]&1&&n!==(n=r[53]+"")&&re(s,n),o[0]&1&&i!==(i=r[53])&&(e.__value=i,e.value=e.__value)},d(r){r&&b(e)}}}function Uf(t){let e,n,s;return{c(){e=p("input"),m(e,"class","dataInput svelte-1myljlf"),m(e,"type","number"),m(e,"placeholder","Presupuesto")},m(i,r){w(i,e,r),ye(e,t[3].budget),n||(s=j(e,"input",t[12]),n=!0)},p(i,r){r[0]&9&&ds(e.value)!==i[3].budget&&ye(e,i[3].budget)},d(i){i&&b(e),n=!1,s()}}}function Ff(t){let e,n=t[50]+"",s;return{c(){e=p("option"),s=S(n),m(e,"type","checkbox"),e.__value=t[50],e.value=e.__value},m(i,r){w(i,e,r),u(e,s)},p:fe,d(i){i&&b(e)}}}function Bf(t){let e,n=t[47]+"",s;return{c(){e=p("option"),s=S(n),m(e,"type","checkbox"),e.__value=t[47],e.value=e.__value},m(i,r){w(i,e,r),u(e,s)},p:fe,d(i){i&&b(e)}}}function Vf(t){let e,n=t[44]+"",s;return{c(){e=p("option"),s=S(n),m(e,"type","checkbox"),e.__value=t[44],e.value=e.__value},m(i,r){w(i,e,r),u(e,s)},p:fe,d(i){i&&b(e)}}}function jf(t){let e,n,s,i,r,o,a,l,c,h,f,d,g,_,v,y,E,T,O,P,$,G,N,U,K,R,Q,q=wf,W=[];for(let D=0;D<q.length;D+=1)W[D]=qf(Pf(t,q,D));let F=Ef,J=[];for(let D=0;D<F.length;D+=1)J[D]=Hf(Df(t,F,D));let V=Wo,le=[];for(let D=0;D<V.length;D+=1)le[D]=zf(Af(t,V,D));let Z=kn,ce=[];for(let D=0;D<Z.length;D+=1)ce[D]=Kf(Sf(t,Z,D));let ie=kn,M=[];for(let D=0;D<ie.length;D+=1)M[D]=Gf(Cf(t,ie,D));let C=kn,L=[];for(let D=0;D<C.length;D+=1)L[D]=Wf(If(t,C,D));function X(D){t[23](D)}let B={};t[3].locaProperty!==void 0&&(B.ubication=t[3].locaProperty),P=new H_({props:B}),Xn.push(()=>js(P,"ubication",X));function ue(D){t[24](D)}let Le={};return t[3].tagsProperty!==void 0&&(Le.tag=t[3].tagsProperty),N=new z_({props:Le}),Xn.push(()=>js(N,"tag",ue)),{c(){e=p("select"),n=p("option"),n.textContent="Modo de Pago";for(let D=0;D<W.length;D+=1)W[D].c();s=k(),i=p("select"),r=p("option"),r.textContent="Rango de Busqueda";for(let D=0;D<J.length;D+=1)J[D].c();o=k(),a=p("select"),l=p("option"),l.textContent="# Rec\xE1maras";for(let D=0;D<le.length;D+=1)le[D].c();c=k(),h=p("select"),f=p("option"),f.textContent="# Ba\xF1os";for(let D=0;D<ce.length;D+=1)ce[D].c();d=k(),g=p("select"),_=p("option"),_.textContent="# Medios Ba\xF1os";for(let D=0;D<M.length;D+=1)M[D].c();v=k(),y=p("select"),E=p("option"),E.textContent="# Estacionamientos";for(let D=0;D<L.length;D+=1)L[D].c();T=k(),O=p("div"),ge(P.$$.fragment),G=k(),ge(N.$$.fragment),n.disabled=!0,n.selected=!0,n.__value="",n.value=n.__value,m(e,"class","othersInput svelte-1myljlf"),t[3].modePay===void 0&&Ze(()=>t[17].call(e)),r.disabled=!0,r.selected=!0,r.__value="",r.value=r.__value,m(i,"class","othersInput svelte-1myljlf"),m(i,"id","ranges"),m(i,"name","ranges"),t[3].rangeProp===void 0&&Ze(()=>t[18].call(i)),l.disabled=!0,l.selected=!0,l.__value="",l.value=l.__value,m(a,"class","othersInput svelte-1myljlf"),t[3].numBeds===void 0&&Ze(()=>t[19].call(a)),f.disabled=!0,f.selected=!0,f.__value="",f.value=f.__value,m(h,"class","othersInput svelte-1myljlf"),t[3].numBaths===void 0&&Ze(()=>t[20].call(h)),_.disabled=!0,_.selected=!0,_.__value="",_.value=_.__value,m(g,"class","othersInput svelte-1myljlf"),t[3].halfBathroom===void 0&&Ze(()=>t[21].call(g)),E.disabled=!0,E.selected=!0,E.__value="",E.value=E.__value,m(y,"class","othersInput svelte-1myljlf"),t[3].numParks===void 0&&Ze(()=>t[22].call(y)),m(O,"class","ubiTags svelte-1myljlf")},m(D,se){w(D,e,se),u(e,n);for(let _e=0;_e<W.length;_e+=1)W[_e].m(e,null);Ue(e,t[3].modePay),w(D,s,se),w(D,i,se),u(i,r);for(let _e=0;_e<J.length;_e+=1)J[_e].m(i,null);Ue(i,t[3].rangeProp),w(D,o,se),w(D,a,se),u(a,l);for(let _e=0;_e<le.length;_e+=1)le[_e].m(a,null);Ue(a,t[3].numBeds),w(D,c,se),w(D,h,se),u(h,f);for(let _e=0;_e<ce.length;_e+=1)ce[_e].m(h,null);Ue(h,t[3].numBaths),w(D,d,se),w(D,g,se),u(g,_);for(let _e=0;_e<M.length;_e+=1)M[_e].m(g,null);Ue(g,t[3].halfBathroom),w(D,v,se),w(D,y,se),u(y,E);for(let _e=0;_e<L.length;_e+=1)L[_e].m(y,null);Ue(y,t[3].numParks),w(D,T,se),w(D,O,se),de(P,O,null),u(O,G),de(N,O,null),K=!0,R||(Q=[j(e,"change",t[17]),j(i,"change",t[18]),j(a,"change",t[19]),j(h,"change",t[20]),j(g,"change",t[21]),j(y,"change",t[22])],R=!0)},p(D,se){if(se&0){q=wf;let A;for(A=0;A<q.length;A+=1){const Y=Pf(D,q,A);W[A]?W[A].p(Y,se):(W[A]=qf(Y),W[A].c(),W[A].m(e,null))}for(;A<W.length;A+=1)W[A].d(1);W.length=q.length}if(se[0]&9&&Ue(e,D[3].modePay),se&0){F=Ef;let A;for(A=0;A<F.length;A+=1){const Y=Df(D,F,A);J[A]?J[A].p(Y,se):(J[A]=Hf(Y),J[A].c(),J[A].m(i,null))}for(;A<J.length;A+=1)J[A].d(1);J.length=F.length}if(se[0]&9&&Ue(i,D[3].rangeProp),se&0){V=Wo;let A;for(A=0;A<V.length;A+=1){const Y=Af(D,V,A);le[A]?le[A].p(Y,se):(le[A]=zf(Y),le[A].c(),le[A].m(a,null))}for(;A<le.length;A+=1)le[A].d(1);le.length=V.length}if(se[0]&9&&Ue(a,D[3].numBeds),se&0){Z=kn;let A;for(A=0;A<Z.length;A+=1){const Y=Sf(D,Z,A);ce[A]?ce[A].p(Y,se):(ce[A]=Kf(Y),ce[A].c(),ce[A].m(h,null))}for(;A<ce.length;A+=1)ce[A].d(1);ce.length=Z.length}if(se[0]&9&&Ue(h,D[3].numBaths),se&0){ie=kn;let A;for(A=0;A<ie.length;A+=1){const Y=Cf(D,ie,A);M[A]?M[A].p(Y,se):(M[A]=Gf(Y),M[A].c(),M[A].m(g,null))}for(;A<M.length;A+=1)M[A].d(1);M.length=ie.length}if(se[0]&9&&Ue(g,D[3].halfBathroom),se&0){C=kn;let A;for(A=0;A<C.length;A+=1){const Y=If(D,C,A);L[A]?L[A].p(Y,se):(L[A]=Wf(Y),L[A].c(),L[A].m(y,null))}for(;A<L.length;A+=1)L[A].d(1);L.length=C.length}se[0]&9&&Ue(y,D[3].numParks);const _e={};!$&&se[0]&8&&($=!0,_e.ubication=D[3].locaProperty,Vs(()=>$=!1)),P.$set(_e);const Fe={};!U&&se[0]&8&&(U=!0,Fe.tag=D[3].tagsProperty,Vs(()=>U=!1)),N.$set(Fe)},i(D){K||(H(P.$$.fragment,D),H(N.$$.fragment,D),K=!0)},o(D){x(P.$$.fragment,D),x(N.$$.fragment,D),K=!1},d(D){D&&b(e),Ve(W,D),D&&b(s),D&&b(i),Ve(J,D),D&&b(o),D&&b(a),Ve(le,D),D&&b(c),D&&b(h),Ve(ce,D),D&&b(d),D&&b(g),Ve(M,D),D&&b(v),D&&b(y),Ve(L,D),D&&b(T),D&&b(O),pe(P),pe(N),R=!1,Je(Q)}}}function qf(t){let e,n=t[41]+"",s;return{c(){e=p("option"),s=S(n),m(e,"type","checkbox"),e.__value=t[41],e.value=e.__value},m(i,r){w(i,e,r),u(e,s)},p:fe,d(i){i&&b(e)}}}function Hf(t){let e,n=t[38]+"",s;return{c(){e=p("option"),s=S(n),m(e,"type","checkbox"),e.__value=t[38],e.value=e.__value},m(i,r){w(i,e,r),u(e,s)},p:fe,d(i){i&&b(e)}}}function zf(t){let e,n=t[35]+"",s,i;return{c(){e=p("option"),s=S(n),i=S(" Rec\xE1maras"),m(e,"type","checkbox"),e.__value=t[35],e.value=e.__value},m(r,o){w(r,e,o),u(e,s),u(e,i)},p:fe,d(r){r&&b(e)}}}function Kf(t){let e,n=t[32]+"",s,i;return{c(){e=p("option"),s=S(n),i=S(" ba\xF1os"),m(e,"type","checkbox"),e.__value=t[32],e.value=e.__value},m(r,o){w(r,e,o),u(e,s),u(e,i)},p:fe,d(r){r&&b(e)}}}function Gf(t){let e,n=t[29]+"",s,i;return{c(){e=p("option"),s=S(n),i=S(" Medios ba\xF1os"),m(e,"type","checkbox"),e.__value=t[29],e.value=e.__value},m(r,o){w(r,e,o),u(e,s),u(e,i)},p:fe,d(r){r&&b(e)}}}function Wf(t){let e,n=t[26]+"",s,i;return{c(){e=p("option"),s=S(n),i=S(" Estacionamientos"),m(e,"type","checkbox"),e.__value=t[26],e.value=e.__value},m(r,o){w(r,e,o),u(e,s),u(e,i)},p:fe,d(r){r&&b(e)}}}function BI(t){let e,n,s,i,r,o,a,l,c,h,f,d,g,_,v,y,E,T,O,P,$,G,N,U,K,R,Q,q,W,F,J,V,le,Z,ce,ie;function M(z,me){return z[1]?FI:UI}let C=M(t),L=C(t),X=t[2]&&Mf(t),B=t[0],ue=[];for(let z=0;z<B.length;z+=1)ue[z]=$f(Lf(t,B,z));let Le=t[2]&&Uf(t),D=bf,se=[];for(let z=0;z<D.length;z+=1)se[z]=Ff(Of(t,D,z));let _e=yf,Fe=[];for(let z=0;z<_e.length;z+=1)Fe[z]=Bf(Nf(t,_e,z));let A=Go,Y=[];for(let z=0;z<A.length;z+=1)Y[z]=Vf(Rf(t,A,z));let Me=t[2]&&jf(t);return{c(){e=p("h1"),e.textContent="Alta Contactos",n=k(),s=p("div"),i=p("div"),L.c(),r=k(),o=p("div"),a=p("input"),l=k(),c=p("input"),h=k(),f=p("div"),d=p("input"),g=k(),X&&X.c(),_=k(),v=p("div"),y=p("select"),E=p("option"),E.textContent="Propiedad de Contacto";for(let z=0;z<ue.length;z+=1)ue[z].c();T=k(),Le&&Le.c(),O=k(),P=p("div"),$=p("input"),G=k(),N=p("select"),U=p("option"),U.textContent="Tipo de Contacto";for(let z=0;z<se.length;z+=1)se[z].c();K=k(),R=p("select"),Q=p("option"),Q.textContent="Modo de Contacto";for(let z=0;z<Fe.length;z+=1)Fe[z].c();q=k(),W=p("select"),F=p("option"),F.textContent="Tipo de Propiedad";for(let z=0;z<Y.length;z+=1)Y[z].c();J=k(),Me&&Me.c(),V=k(),le=p("button"),le.textContent="Alta Detalles",m(e,"class","sectionTitle"),m(a,"class","dataInput svelte-1myljlf"),m(a,"type","text"),m(a,"placeholder","Nombre"),a.required=!0,m(c,"class","dataInput svelte-1myljlf"),m(c,"type","text"),m(c,"placeholder","Apellido"),m(o,"class","contactInput"),m(d,"class","dataInput svelte-1myljlf"),m(d,"type","tel"),m(d,"placeholder","tel\xE9fono"),d.required=!0,m(f,"class","contactInput"),m(s,"class",""),E.disabled=!0,E.selected=!0,E.__value="",E.value=E.__value,m(y,"class","dataInput svelte-1myljlf"),m(y,"id","selTP"),m(y,"name","selTP"),t[3].propCont===void 0&&Ze(()=>t[11].call(y)),m(v,"class","col"),m($,"class","textareaInput svelte-1myljlf"),m($,"type","textarea"),m($,"placeholder","Comentarios"),m(P,"class","col"),U.disabled=!0,U.selected=!0,U.__value="",U.value=U.__value,m(N,"class","othersInput svelte-1myljlf"),t[3].typeContact===void 0&&Ze(()=>t[14].call(N)),Q.disabled=!0,Q.selected=!0,Q.__value="",Q.value=Q.__value,m(R,"class","othersInput svelte-1myljlf"),t[3].selecMC===void 0&&Ze(()=>t[15].call(R)),F.disabled=!0,F.selected=!0,F.__value="",F.value=F.__value,m(W,"class","othersInput svelte-1myljlf"),m(W,"id","selTP"),m(W,"name","selTP"),t[3].selecTP===void 0&&Ze(()=>t[16].call(W)),m(le,"class","btn__save")},m(z,me){w(z,e,me),w(z,n,me),w(z,s,me),u(s,i),L.m(i,null),u(s,r),u(s,o),u(o,a),ye(a,t[3].name),u(o,l),u(o,c),ye(c,t[3].lastname),u(s,h),u(s,f),u(f,d),ye(d,t[3].telephon),u(f,g),X&&X.m(f,null),w(z,_,me),w(z,v,me),u(v,y),u(y,E);for(let oe=0;oe<ue.length;oe+=1)ue[oe].m(y,null);Ue(y,t[3].propCont),u(v,T),Le&&Le.m(v,null),w(z,O,me),w(z,P,me),u(P,$),ye($,t[3].comContact),w(z,G,me),w(z,N,me),u(N,U);for(let oe=0;oe<se.length;oe+=1)se[oe].m(N,null);Ue(N,t[3].typeContact),w(z,K,me),w(z,R,me),u(R,Q);for(let oe=0;oe<Fe.length;oe+=1)Fe[oe].m(R,null);Ue(R,t[3].selecMC),w(z,q,me),w(z,W,me),u(W,F);for(let oe=0;oe<Y.length;oe+=1)Y[oe].m(W,null);Ue(W,t[3].selecTP),w(z,J,me),Me&&Me.m(z,me),w(z,V,me),w(z,le,me),Z=!0,ce||(ie=[j(a,"input",t[7]),j(c,"input",t[8]),j(d,"input",t[9]),j(y,"change",t[11]),j($,"input",t[13]),j(N,"change",t[14]),j(R,"change",t[15]),j(W,"change",t[16]),j(le,"click",t[5])],ce=!0)},p(z,me){if(C===(C=M(z))&&L?L.p(z,me):(L.d(1),L=C(z),L&&(L.c(),L.m(i,null))),me[0]&9&&a.value!==z[3].name&&ye(a,z[3].name),me[0]&9&&c.value!==z[3].lastname&&ye(c,z[3].lastname),me[0]&9&&ye(d,z[3].telephon),z[2]?X?X.p(z,me):(X=Mf(z),X.c(),X.m(f,null)):X&&(X.d(1),X=null),me[0]&1){B=z[0];let oe;for(oe=0;oe<B.length;oe+=1){const xe=Lf(z,B,oe);ue[oe]?ue[oe].p(xe,me):(ue[oe]=$f(xe),ue[oe].c(),ue[oe].m(y,null))}for(;oe<ue.length;oe+=1)ue[oe].d(1);ue.length=B.length}if(me[0]&9&&Ue(y,z[3].propCont),z[2]?Le?Le.p(z,me):(Le=Uf(z),Le.c(),Le.m(v,null)):Le&&(Le.d(1),Le=null),me[0]&9&&ye($,z[3].comContact),me&0){D=bf;let oe;for(oe=0;oe<D.length;oe+=1){const xe=Of(z,D,oe);se[oe]?se[oe].p(xe,me):(se[oe]=Ff(xe),se[oe].c(),se[oe].m(N,null))}for(;oe<se.length;oe+=1)se[oe].d(1);se.length=D.length}if(me[0]&9&&Ue(N,z[3].typeContact),me&0){_e=yf;let oe;for(oe=0;oe<_e.length;oe+=1){const xe=Nf(z,_e,oe);Fe[oe]?Fe[oe].p(xe,me):(Fe[oe]=Bf(xe),Fe[oe].c(),Fe[oe].m(R,null))}for(;oe<Fe.length;oe+=1)Fe[oe].d(1);Fe.length=_e.length}if(me[0]&9&&Ue(R,z[3].selecMC),me&0){A=Go;let oe;for(oe=0;oe<A.length;oe+=1){const xe=Rf(z,A,oe);Y[oe]?Y[oe].p(xe,me):(Y[oe]=Vf(xe),Y[oe].c(),Y[oe].m(W,null))}for(;oe<Y.length;oe+=1)Y[oe].d(1);Y.length=A.length}me[0]&9&&Ue(W,z[3].selecTP),z[2]?Me?(Me.p(z,me),me[0]&4&&H(Me,1)):(Me=jf(z),Me.c(),H(Me,1),Me.m(V.parentNode,V)):Me&&(bt(),x(Me,1,1,()=>{Me=null}),wt())},i(z){Z||(H(Me),Z=!0)},o(z){x(Me),Z=!1},d(z){z&&b(e),z&&b(n),z&&b(s),L.d(),X&&X.d(),z&&b(_),z&&b(v),Ve(ue,z),Le&&Le.d(),z&&b(O),z&&b(P),z&&b(G),z&&b(N),Ve(se,z),z&&b(K),z&&b(R),Ve(Fe,z),z&&b(q),z&&b(W),Ve(Y,z),z&&b(J),Me&&Me.d(z),z&&b(V),z&&b(le),ce=!1,Je(ie)}}}function VI(t,e,n){let s;Ne(t,et,W=>n(3,s=W));var i=[];let r=Bs,o=!1,a=!1;(()=>{for(let W of r){let F=`${W.nameProperty} - ${(W.price/1e6).toFixed(2)} (${W.claveEB.slice(-2)})`;n(0,i=[...i,F])}return n(0,i=i.sort())})();function l(){n(1,o=!0)}function c(){n(2,a=!0)}function h(){s.createdAt=this.value,et.set(s),n(0,i)}function f(){s.name=this.value,et.set(s),n(0,i)}function d(){s.lastname=this.value,et.set(s),n(0,i)}function g(){s.telephon=this.value,et.set(s),n(0,i)}function _(){s.email=this.value,et.set(s),n(0,i)}function v(){s.propCont=Ut(this),et.set(s),n(0,i)}function y(){s.budget=ds(this.value),et.set(s),n(0,i)}function E(){s.comContact=this.value,et.set(s),n(0,i)}function T(){s.typeContact=Ut(this),et.set(s),n(0,i)}function O(){s.selecMC=Ut(this),et.set(s),n(0,i)}function P(){s.selecTP=Ut(this),et.set(s),n(0,i)}function $(){s.modePay=Ut(this),et.set(s),n(0,i)}function G(){s.rangeProp=Ut(this),et.set(s),n(0,i)}function N(){s.numBeds=Ut(this),et.set(s),n(0,i)}function U(){s.numBaths=Ut(this),et.set(s),n(0,i)}function K(){s.halfBathroom=Ut(this),et.set(s),n(0,i)}function R(){s.numParks=Ut(this),et.set(s),n(0,i)}function Q(W){t.$$.not_equal(s.locaProperty,W)&&(s.locaProperty=W,et.set(s))}function q(W){t.$$.not_equal(s.tagsProperty,W)&&(s.tagsProperty=W,et.set(s))}return[i,o,a,s,l,c,h,f,d,g,_,v,y,E,T,O,P,$,G,N,U,K,R,Q,q]}class jI extends Xe{constructor(e){super(),Ye(this,e,VI,BI,Ge,{},null,[-1,-1])}}function qI(t){let e;return{c(){e=S("Editar")},m(n,s){w(n,e,s)},d(n){n&&b(e)}}}function HI(t){let e;return{c(){e=S("Guardar")},m(n,s){w(n,e,s)},d(n){n&&b(e)}}}function zI(t){let e,n,s,i,r,o,a,l,c,h;n=new jI({});function f(_,v){return _[0]?qI:HI}let d=f(t),g=d(t);return{c(){e=p("div"),ge(n.$$.fragment),s=k(),i=p("div"),r=p("button"),g.c(),o=k(),a=p("button"),a.textContent="Cancel",m(r,"class","btn__save"),m(a,"class","btn__cancel"),m(i,"class","contSavCan svelte-1at07r"),m(e,"class","altaContactos")},m(_,v){w(_,e,v),de(n,e,null),u(e,s),u(e,i),u(i,r),g.m(r,null),u(i,o),u(i,a),l=!0,c||(h=[j(r,"click",t[4]),j(a,"click",t[3])],c=!0)},p(_,[v]){d!==(d=f(_))&&(g.d(1),g=d(_),g&&(g.c(),g.m(r,null)))},i(_){l||(H(n.$$.fragment,_),l=!0)},o(_){x(n.$$.fragment,_),l=!1},d(_){_&&b(e),pe(n),g.d(),c=!1,Je(h)}}}function KI(t,e,n){let s,i;Ne(t,Ke,f=>n(6,s=f)),Ne(t,et,f=>n(1,i=f));let r=!1,o;async function a(f){if(s!="contEditing"){o=Date.now(),f={...f,createdAt:o};const d=tn(ct,"contacts");await ys(d,f),Ce(Ke,s="binnAdding",s),l(s,f)}else await tu(Cs(ct,"contacts",f.id),f),l(s,f),n(0,r=!1);f=[],Ce(Ke,s="contSelect",s)}async function l(f,d){try{if(f==="binnAdding"){let g=`Se le agreg\xF3 a: ${d.name} ${d.lastname} del ${d.telephon}`,_={date:Date.now(),comment:g};const v=tn(ct,"binnacles");await ys(v,_)}else{let g=`Se le edit\xF3 a: ${d.name} ${d.lastname} del ${d.telephon}`,_={date:Date.now(),comment:g};const v=tn(ct,"binnacles");await ys(v,_)}}catch(g){console.log("error",g)}}function c(){n(0,r=!0),location.href="/"}return[r,i,a,c,()=>a(i)]}class GI extends Xe{constructor(e){super(),Ye(this,e,KI,zI,Ge,{})}}function Qf(t,e,n){const s=t.slice();return s[12]=e[n],s}function Yf(t,e,n){const s=t.slice();return s[52]=e[n],s}function Xf(t,e,n){const s=t.slice();return s[55]=e[n],s}function xf(t){let e,n,s,i,r,o=t[9].name+"",a,l,c=t[9].lastname+"",h,f,d,g,_=Ct(t[9].createdAt)+"",v,y,E,T,O=t[9].selecTP+"",P,$,G=t[9].numBeds+"",N,U,K=t[9].numBaths+"",R,Q,q=t[9].numParks+"",W,F,J,V,le,Z,ce=t[9].budget+"",ie,M,C,L=t[9].selecTP+"",X,B,ue,Le,D,se=t[9].telephon+"",_e,Fe,A,Y=t[9].email+"",Me,z,me,oe,xe=t[9].tagsProperty.join(",  ")+"",bn,St,At,sn,Jt=t[9].locaProperty.join(",  ")+"",Mt,Ht,ht,mn,ot,ft,rn,lt,Bn,on,dt=t[9].contactStage+"",Cn,Sn,an,An=t[9].comContact+"",Dn,zt,je,Zt,qe,Pe,Ae,Vn,pt,jn,$t,Pn,mt,qn,gt,wn,st,Qr,is,Ps,Oi,I,ae,Re,Hn,ee,at,ei,pu,mu,Yr,Pa,Li,kt,Ra,gu,ti=t[9].sendedProperties,ln=[];for(let he=0;he<ti.length;he+=1)ln[he]=Jf(Xf(t,ti,he));let cn=t[0]&&Zf(t),Dt=t[2]&&ed(t),Pt=t[7]&&td(t),ni=t[8],un=[];for(let he=0;he<ni.length;he+=1)un[he]=nd(Yf(t,ni,he));let Rt=t[6]&&sd(t);return{c(){e=p("div"),n=p("div"),s=p("h4"),s.textContent="Contacto",i=k(),r=p("h2"),a=S(o),l=k(),h=S(c),f=k(),d=p("p"),g=S("Fecha Alta: "),v=S(_),y=k(),E=p("p"),T=S("Busca  "),P=S(O),$=S(", de "),N=S(G),U=S(" rec\xE1maras,  "),R=S(K),Q=S(" ba\xF1os y "),W=S(q),F=S(" estacionamientos"),J=k(),V=p("p"),le=S("Presupuesto tope: "),Z=p("strong"),ie=S(ce),M=S(" : Tipo de propiedad buscada: "),C=p("strong"),X=S(L),B=k(),ue=p("p"),Le=S("Tel\xE9fono: "),D=p("strong"),_e=S(se),Fe=S(" ---- Email: "),A=p("strong"),Me=S(Y),z=k(),me=p("p"),oe=S("Preferencias: "),bn=S(xe),St=k(),At=p("p"),sn=S("Ubicaciones: "),Mt=S(Jt),Ht=k(),ht=p("div"),mn=p("p"),mn.textContent="Propiedades enviadas:",ot=k(),ft=p("div");for(let he=0;he<ln.length;he+=1)ln[he].c();rn=k(),lt=p("div"),cn&&cn.c(),Bn=k(),on=p("p"),Cn=S(dt),Sn=k(),an=p("p"),Dn=S(An),zt=k(),je=p("div"),Zt=p("button"),Zt.textContent="Programar Evento",qe=k(),Dt&&Dt.c(),Pe=k(),Ae=p("button"),Ae.textContent="Ver Propiedades de Interes",Vn=k(),pt=p("button"),pt.textContent="Buscar Propiedad",jn=k(),Pt&&Pt.c(),$t=k(),Pn=p("div"),mt=p("button"),mt.textContent="Cancelar",qn=k(),gt=p("div"),wn=p("div"),st=p("textarea"),Qr=k(),is=p("div"),Ps=p("button"),Ps.textContent="Enviar WhatsApp",Oi=k(),I=p("button"),I.textContent="Guardar Info",ae=k(),Re=p("div"),Hn=p("img"),at=k(),ei=p("img"),mu=k(),Yr=p("div");for(let he=0;he<un.length;he+=1)un[he].c();Pa=k(),Rt&&Rt.c(),Li=nn(),m(ft,"class","mostImage svelte-ce274g"),m(ht,"class","propMost"),m(Zt,"class","btn__common"),m(Ae,"class","btn__common"),m(pt,"class","btn__common"),m(mt,"class","btn__cancel"),m(st,"class","texArea"),m(st,"cols","65"),m(st,"rows","5"),m(st,"placeholder","Ingresa un comentario"),m(Ps,"class","btn__WhatsApp"),m(I,"class","btn__saveNote"),tt(Hn.src,ee=Da)||m(Hn,"src",ee),m(Hn,"alt","delete"),tt(ei.src,pu=q_)||m(ei,"src",pu),m(ei,"alt","delete"),m(Re,"class","icon__Content"),m(e,"class","container")},m(he,He){w(he,e,He),u(e,n),u(n,s),u(n,i),u(n,r),u(r,a),u(r,l),u(r,h),u(n,f),u(n,d),u(d,g),u(d,v),u(n,y),u(n,E),u(E,T),u(E,P),u(E,$),u(E,N),u(E,U),u(E,R),u(E,Q),u(E,W),u(E,F),u(n,J),u(n,V),u(V,le),u(V,Z),u(Z,ie),u(V,M),u(V,C),u(C,X),u(n,B),u(n,ue),u(ue,Le),u(ue,D),u(D,_e),u(ue,Fe),u(ue,A),u(A,Me),u(n,z),u(n,me),u(me,oe),u(me,bn),u(n,St),u(n,At),u(At,sn),u(At,Mt),u(n,Ht),u(n,ht),u(ht,mn),u(ht,ot),u(ht,ft);for(let Be=0;Be<ln.length;Be+=1)ln[Be].m(ft,null);u(e,rn),u(e,lt),cn&&cn.m(lt,null),u(e,Bn),u(e,on),u(on,Cn),u(e,Sn),u(e,an),u(an,Dn),u(e,zt),u(e,je),u(je,Zt),u(je,qe),Dt&&Dt.m(je,null),u(je,Pe),u(je,Ae),u(je,Vn),u(je,pt),u(je,jn),Pt&&Pt.m(je,null),u(e,$t),u(e,Pn),u(Pn,mt),u(e,qn),u(e,gt),u(gt,wn),u(wn,st),ye(st,t[4]),u(wn,Qr),u(wn,is),u(is,Ps),u(is,Oi),u(is,I),u(gt,ae),u(gt,Re),u(Re,Hn),u(Re,at),u(Re,ei),u(e,mu),u(e,Yr);for(let Be=0;Be<un.length;Be+=1)un[Be].m(Yr,null);w(he,Pa,He),Rt&&Rt.m(he,He),w(he,Li,He),kt=!0,Ra||(gu=[j(Zt,"click",t[29]),j(Ae,"click",t[30]),j(pt,"click",t[16]),j(mt,"click",t[19]),j(st,"keypress",t[25]),j(st,"input",t[32]),j(Ps,"click",t[24]),j(I,"click",t[33]),j(Hn,"click",t[20]),j(ei,"click",t[21])],Ra=!0)},p(he,He){if((!kt||He[0]&512)&&o!==(o=he[9].name+"")&&re(a,o),(!kt||He[0]&512)&&c!==(c=he[9].lastname+"")&&re(h,c),(!kt||He[0]&512)&&_!==(_=Ct(he[9].createdAt)+"")&&re(v,_),(!kt||He[0]&512)&&O!==(O=he[9].selecTP+"")&&re(P,O),(!kt||He[0]&512)&&G!==(G=he[9].numBeds+"")&&re(N,G),(!kt||He[0]&512)&&K!==(K=he[9].numBaths+"")&&re(R,K),(!kt||He[0]&512)&&q!==(q=he[9].numParks+"")&&re(W,q),(!kt||He[0]&512)&&ce!==(ce=he[9].budget+"")&&re(ie,ce),(!kt||He[0]&512)&&L!==(L=he[9].selecTP+"")&&re(X,L),(!kt||He[0]&512)&&se!==(se=he[9].telephon+"")&&re(_e,se),(!kt||He[0]&512)&&Y!==(Y=he[9].email+"")&&re(Me,Y),(!kt||He[0]&512)&&xe!==(xe=he[9].tagsProperty.join(",  ")+"")&&re(bn,xe),(!kt||He[0]&512)&&Jt!==(Jt=he[9].locaProperty.join(",  ")+"")&&re(Mt,Jt),He[0]&25090){ti=he[9].sendedProperties;let Be;for(Be=0;Be<ti.length;Be+=1){const Mi=Xf(he,ti,Be);ln[Be]?ln[Be].p(Mi,He):(ln[Be]=Jf(Mi),ln[Be].c(),ln[Be].m(ft,null))}for(;Be<ln.length;Be+=1)ln[Be].d(1);ln.length=ti.length}if(he[0]?cn?cn.p(he,He):(cn=Zf(he),cn.c(),cn.m(lt,null)):cn&&(cn.d(1),cn=null),(!kt||He[0]&512)&&dt!==(dt=he[9].contactStage+"")&&re(Cn,dt),(!kt||He[0]&512)&&An!==(An=he[9].comContact+"")&&re(Dn,An),he[2]?Dt?(Dt.p(he,He),He[0]&4&&H(Dt,1)):(Dt=ed(he),Dt.c(),H(Dt,1),Dt.m(je,Pe)):Dt&&(bt(),x(Dt,1,1,()=>{Dt=null}),wt()),he[7]?Pt?(Pt.p(he,He),He[0]&128&&H(Pt,1)):(Pt=td(he),Pt.c(),H(Pt,1),Pt.m(je,null)):Pt&&(bt(),x(Pt,1,1,()=>{Pt=null}),wt()),He[0]&16&&ye(st,he[4]),He[0]&256){ni=he[8];let Be;for(Be=0;Be<ni.length;Be+=1){const Mi=Yf(he,ni,Be);un[Be]?un[Be].p(Mi,He):(un[Be]=nd(Mi),un[Be].c(),un[Be].m(Yr,null))}for(;Be<un.length;Be+=1)un[Be].d(1);un.length=ni.length}he[6]?Rt?(Rt.p(he,He),He[0]&64&&H(Rt,1)):(Rt=sd(he),Rt.c(),H(Rt,1),Rt.m(Li.parentNode,Li)):Rt&&(bt(),x(Rt,1,1,()=>{Rt=null}),wt())},i(he){kt||(H(Dt),H(Pt),H(Rt),kt=!0)},o(he){x(Dt),x(Pt),x(Rt),kt=!1},d(he){he&&b(e),Ve(ln,he),cn&&cn.d(),Dt&&Dt.d(),Pt&&Pt.d(),Ve(un,he),he&&b(Pa),Rt&&Rt.d(he),he&&b(Li),Ra=!1,Je(gu)}}}function Jf(t){let e,n=t[55]+"",s,i,r,o;function a(){return t[27](t[55])}return{c(){e=p("p"),s=S(n),m(e,"value",i=t[55])},m(l,c){w(l,e,c),u(e,s),r||(o=[j(e,"mouseenter",a),j(e,"mouseout",t[14]),j(e,"dblclick",t[28])],r=!0)},p(l,c){t=l,c[0]&512&&n!==(n=t[55]+"")&&re(s,n),c[0]&512&&i!==(i=t[55])&&m(e,"value",i)},d(l){l&&b(e),r=!1,Je(o)}}}function Zf(t){let e,n=t[1][0].nameProperty+"",s,i,r,o,a;return{c(){e=p("h3"),s=S(n),i=k(),r=p("img"),m(e,"class","svelte-ce274g"),m(r,"class","imgPropContSelect"),m(r,"height","200"),tt(r.src,o=t[1][0].urlImage)||m(r,"src",o),m(r,"alt",a=t[1][0].claveEB)},m(l,c){w(l,e,c),u(e,s),w(l,i,c),w(l,r,c)},p(l,c){c[0]&2&&n!==(n=l[1][0].nameProperty+"")&&re(s,n),c[0]&2&&!tt(r.src,o=l[1][0].urlImage)&&m(r,"src",o),c[0]&2&&a!==(a=l[1][0].claveEB)&&m(r,"alt",a)},d(l){l&&b(e),l&&b(i),l&&b(r)}}}function ed(t){let e,n;const s=[t[9]];let i={};for(let r=0;r<s.length;r+=1)i=Ot(i,s[r]);return e=new DI({props:i}),e.$on("closeIt",t[22]),{c(){ge(e.$$.fragment)},m(r,o){de(e,r,o),n=!0},p(r,o){const a=o[0]&512?vn(s,[xn(r[9])]):{};e.$set(a)},i(r){n||(H(e.$$.fragment,r),n=!0)},o(r){x(e.$$.fragment,r),n=!1},d(r){pe(e,r)}}}function td(t){let e,n,s;function i(o){t[31](o)}let r={};return t[3]!==void 0&&(r.searchTerm=t[3]),e=new du({props:r}),Xn.push(()=>js(e,"searchTerm",i)),e.$on("input",t[17]),{c(){ge(e.$$.fragment)},m(o,a){de(e,o,a),s=!0},p(o,a){const l={};!n&&a[0]&8&&(n=!0,l.searchTerm=o[3],Vs(()=>n=!1)),e.$set(l)},i(o){s||(H(e.$$.fragment,o),s=!0)},o(o){x(e.$$.fragment,o),s=!1},d(o){pe(e,o)}}}function nd(t){let e,n=Ct(t[52].date)+"",s,i,r=t[52].action+"",o,a,l=t[52].comment+"",c;return{c(){e=p("h4"),s=S(n),i=k(),o=S(r),a=k(),c=S(l)},m(h,f){w(h,e,f),u(e,s),u(e,i),u(e,o),u(e,a),u(e,c)},p(h,f){f[0]&256&&n!==(n=Ct(h[52].date)+"")&&re(s,n),f[0]&256&&r!==(r=h[52].action+"")&&re(o,r),f[0]&256&&l!==(l=h[52].comment+"")&&re(c,l)},d(h){h&&b(e)}}}function sd(t){let e,n,s,i=t[11].length+"",r,o,a,l,c=t[11],h=[];for(let g=0;g<c.length;g+=1)h[g]=id(Qf(t,c,g));const f=g=>x(h[g],1,1,()=>{h[g]=null});let d=t[11].length===0&&rd();return{c(){e=p("main"),n=p("h3"),s=S("Propiedades encontradas: "),r=S(i),o=k();for(let g=0;g<h.length;g+=1)h[g].c();a=k(),d&&d.c(),m(n,"class","svelte-ce274g"),m(e,"id","bookshelf"),m(e,"class","svelte-ce274g")},m(g,_){w(g,e,_),u(e,n),u(n,s),u(n,r),u(e,o);for(let v=0;v<h.length;v+=1)h[v].m(e,null);u(e,a),d&&d.m(e,null),l=!0},p(g,_){if((!l||_[0]&2048)&&i!==(i=g[11].length+"")&&re(r,i),_[0]&8390688){c=g[11];let v;for(v=0;v<c.length;v+=1){const y=Qf(g,c,v);h[v]?(h[v].p(y,_),H(h[v],1)):(h[v]=id(y),h[v].c(),H(h[v],1),h[v].m(e,a))}for(bt(),v=c.length;v<h.length;v+=1)f(v);wt()}g[11].length===0?d||(d=rd(),d.c(),d.m(e,null)):d&&(d.d(1),d=null)},i(g){if(!l){for(let _=0;_<c.length;_+=1)H(h[_]);l=!0}},o(g){h=h.filter(Boolean);for(let _=0;_<h.length;_+=1)x(h[_]);l=!1},d(g){g&&b(e),Ve(h,g),d&&d.d()}}}function id(t){let e,n,s,i,r,o,a,l,c;const h=[t[12]];let f={};for(let d=0;d<h.length;d+=1)f=Ot(f,h[d]);return r=new V_({props:f}),{c(){e=p("section"),n=p("input"),i=k(),ge(r.$$.fragment),m(n,"type","checkbox"),n.__value=s=t[12].urlProp,n.value=n.__value,m(n,"class","form-check"),t[35][0].push(n),m(e,"class","property svelte-ce274g")},m(d,g){w(d,e,g),u(e,n),n.checked=~t[5].indexOf(n.__value),u(e,i),de(r,e,null),a=!0,l||(c=[j(n,"change",t[34]),j(e,"click",t[23])],l=!0)},p(d,g){t=d,(!a||g[0]&2048&&s!==(s=t[12].urlProp))&&(n.__value=s,n.value=n.__value),g[0]&32&&(n.checked=~t[5].indexOf(n.__value));const _=g[0]&2048?vn(h,[xn(t[12])]):{};r.$set(_)},i(d){a||(H(r.$$.fragment,d),Ze(()=>{o||(o=dn(e,Ci,{duration:500,easing:Ii},!0)),o.run(1)}),a=!0)},o(d){x(r.$$.fragment,d),o||(o=dn(e,Ci,{duration:500,easing:Ii},!1)),o.run(0),a=!1},d(d){d&&b(e),t[35][0].splice(t[35][0].indexOf(n),1),pe(r),d&&o&&o.end(),l=!1,Je(c)}}}function rd(t){let e;return{c(){e=p("h3"),e.textContent='"No hay Propiedades para este contacto"',m(e,"class","svelte-ce274g")},m(n,s){w(n,e,s)},d(n){n&&b(e)}}}function WI(t){let e,n,s=t[10]==="contSelect"&&xf(t);return{c(){e=p("main"),s&&s.c()},m(i,r){w(i,e,r),s&&s.m(e,null),n=!0},p(i,r){i[10]==="contSelect"?s?(s.p(i,r),r[0]&1024&&H(s,1)):(s=xf(i),s.c(),H(s,1),s.m(e,null)):s&&(bt(),x(s,1,1,()=>{s=null}),wt())},i(i){n||(H(s),n=!0)},o(i){x(s),n=!1},d(i){i&&b(e),s&&s.d()}}}function QI(t){window.open(t)}function YI(t,e,n){let s,i,r,o,a,l;Ne(t,et,D=>n(9,s=D)),Ne(t,Ke,D=>n(10,i=D)),Ne(t,tl,D=>n(40,r=D)),Ne(t,ro,D=>n(41,o=D)),Ne(t,We,D=>n(12,a=D)),Ne(t,ql,D=>n(11,l=D));const c=Xs();let h=!1,f,d=!1,g,_,v=[],y=!1,E=!1,T=[];function O(D){n(0,h=!0),n(1,f=Bs.filter(se=>se.claveEB===D))}function P(){n(0,h=!1)}function $(){console.log("estas en addSchedule"),n(2,d=!0)}function G(){n(7,E=!0)}const N=()=>(n(6,y=!0),Ce(ql,l=Bs.filter(D=>(D.nameProperty+" "+D.colonia+" "+D.claveEB).toLowerCase().includes(g.toLowerCase())),l));function U(D){NI(D),n(6,y=!0)}const K=()=>{Ce(et,s=[],s),Ce(Ke,i="start",i)};function R(){Ce(Ke,i="contEditing",i)}async function Q(){confirm("Deseas eleiminar definitivamente al contacto?")&&(await Ia(Cs(ct,"contacts",s.id)),q(s),c("/"))}async function q(D){let se=`Se le elimin\xF3a: ${D.name} ${D.lastname} del ${D.telephon}`,_e={date:Date.now(),comment:se};console.log(i,_e);const Fe=tn(ct,"binnacles");await ys(Fe,_e)}function W(){n(2,d=!1)}function F(){console.log(v)}function J(){_&&(n(5,v=_),Ce(tl,r="sendMsg",r));let D=`https://api.whatsapp.com/send?phone=52${s.telephon}&text=${v}`;window.open(D),Z(v)}function V(){}function le(){Ce(Ke,i="binnAdding",i),Ce(ro,o={date:Date.now(),comment:_,to:s.telephon,action:"Nota agregada: "},o),vf(i,o)}function Z(D){Ce(Ke,i="binnAdding",i);let se=Bs.filter(_e=>_e.urlProp===D[0]);Ce(We,a=se[0],a),r==="sendMsg"?Ce(ro,o={date:Date.now(),comment:D,to:s.telephon,action:"Mensaje enviado: "},o):Ce(ro,o={date:Date.now(),comment:a.claveEB,to:s.telephon,action:"Propiedad enviada: "},o),vf(i,o),Ce(tl,r="",r),Ce(Ke,i="contSelect",i)}n(8,T=_r.filter(D=>D.to===s.telephon));const ce=[[]],ie=D=>O(D),M=()=>QI(f[0].urlProp),C=()=>$(),L=()=>U(s);function X(D){g=D,n(3,g)}function B(){_=this.value,n(4,_)}const ue=()=>le();function Le(){v=Ft(ce[0],this.__value,this.checked),n(5,v)}return[h,f,d,g,_,v,y,E,T,s,i,l,a,O,P,$,G,N,U,K,R,Q,W,F,J,V,le,ie,M,C,L,X,B,ue,Le,ce]}class XI extends Xe{constructor(e){super(),Ye(this,e,YI,WI,Ge,{},null,[-1,-1])}}function od(t,e,n){const s=t.slice();return s[23]=e[n],s[25]=n,s}function ad(t,e,n){const s=t.slice();return s[25]=e[n],s}function ld(t,e,n){const s=t.slice();return s[28]=e[n],s[25]=n,s}function cd(t){let e,n=t[1].length+"",s,i,r,o,a,l,c,h,f,d,g,_,v,y,E,T,O,P,$,G,N,U,K,R;function Q(C){t[13](C)}let q={};t[3]!==void 0&&(q.searchTerm=t[3]),l=new du({props:q}),Xn.push(()=>js(l,"searchTerm",Q)),l.$on("input",t[11]);let W=t[1],F=[];for(let C=0;C<W.length;C+=1)F[C]=hd(ld(t,W,C));const J=C=>x(F[C],1,1,()=>{F[C]=null});let V=t[0]>1&&fd(t),le=[3,2,1],Z=[];for(let C=0;C<3;C+=1)Z[C]=pd(ad(t,le,C));let ce=Array(3),ie=[];for(let C=0;C<ce.length;C+=1)ie[C]=gd(od(t,ce,C));let M=t[0]<t[5]&&_d(t);return{c(){e=p("h2"),s=S(n),i=S(" Contactos a Mostrar"),r=k(),o=p("button"),o.textContent="Alta de Contacto",a=k(),ge(l.$$.fragment),h=k(),f=p("div"),d=p("main");for(let C=0;C<F.length;C+=1)F[C].c();g=k(),_=p("div"),v=p("div"),y=p("ul"),V&&V.c(),E=k();for(let C=0;C<3;C+=1)Z[C].c();T=k(),O=p("li"),P=p("span"),$=S(t[0]),G=k();for(let C=0;C<ie.length;C+=1)ie[C].c();N=k(),M&&M.c(),m(o,"class","altaContacto svelte-1o9z7a3"),m(d,"id","bookshelf"),m(y,"class","pagi__options"),m(v,"class","pagi__Item"),m(_,"class","container pagination"),m(f,"class","mosPag cont__card svelte-1o9z7a3")},m(C,L){w(C,e,L),u(e,s),u(e,i),w(C,r,L),w(C,o,L),w(C,a,L),de(l,C,L),w(C,h,L),w(C,f,L),u(f,d);for(let X=0;X<F.length;X+=1)F[X].m(d,null);u(f,g),u(f,_),u(_,v),u(v,y),V&&V.m(y,null),u(y,E);for(let X=0;X<3;X+=1)Z[X].m(y,null);u(y,T),u(y,O),u(O,P),u(P,$),u(y,G);for(let X=0;X<ie.length;X+=1)ie[X].m(y,null);u(y,N),M&&M.m(y,null),U=!0,K||(R=j(o,"click",t[9]),K=!0)},p(C,L){(!U||L&2)&&n!==(n=C[1].length+"")&&re(s,n);const X={};if(!c&&L&8&&(c=!0,X.searchTerm=C[3],Vs(()=>c=!1)),l.$set(X),L&1046){W=C[1];let B;for(B=0;B<W.length;B+=1){const ue=ld(C,W,B);F[B]?(F[B].p(ue,L),H(F[B],1)):(F[B]=hd(ue),F[B].c(),H(F[B],1),F[B].m(d,null))}for(bt(),B=W.length;B<F.length;B+=1)J(B);wt()}if(C[0]>1?V?V.p(C,L):(V=fd(C),V.c(),V.m(y,E)):V&&(V.d(1),V=null),L&257){le=[3,2,1];let B;for(B=0;B<3;B+=1){const ue=ad(C,le,B);Z[B]?Z[B].p(ue,L):(Z[B]=pd(ue),Z[B].c(),Z[B].m(y,T))}for(;B<3;B+=1)Z[B].d(1)}if((!U||L&1)&&re($,C[0]),L&289){ce=Array(3);let B;for(B=0;B<ce.length;B+=1){const ue=od(C,ce,B);ie[B]?ie[B].p(ue,L):(ie[B]=gd(ue),ie[B].c(),ie[B].m(y,N))}for(;B<ie.length;B+=1)ie[B].d(1);ie.length=ce.length}C[0]<C[5]?M?M.p(C,L):(M=_d(C),M.c(),M.m(y,null)):M&&(M.d(1),M=null)},i(C){if(!U){H(l.$$.fragment,C);for(let L=0;L<W.length;L+=1)H(F[L]);U=!0}},o(C){x(l.$$.fragment,C),F=F.filter(Boolean);for(let L=0;L<F.length;L+=1)x(F[L]);U=!1},d(C){C&&b(e),C&&b(r),C&&b(o),C&&b(a),pe(l,C),C&&b(h),C&&b(f),Ve(F,C),V&&V.d(),Ve(Z,C),Ve(ie,C),M&&M.d(),K=!1,R()}}}function ud(t){let e,n,s,i,r,o,a;const l=[t[28]];let c={};for(let f=0;f<l.length;f+=1)c=Ot(c,l[f]);n=new EI({props:c});function h(){return t[14](t[28])}return{c(){e=p("div"),ge(n.$$.fragment),s=k(),m(e,"class","selecContact")},m(f,d){w(f,e,d),de(n,e,null),u(e,s),r=!0,o||(a=j(e,"click",h),o=!0)},p(f,d){t=f;const g=d&2?vn(l,[xn(t[28])]):{};n.$set(g)},i(f){r||(H(n.$$.fragment,f),Ze(()=>{i||(i=dn(e,Ci,{duration:500,easing:Ii},!0)),i.run(1)}),r=!0)},o(f){x(n.$$.fragment,f),i||(i=dn(e,Ci,{duration:500,easing:Ii},!1)),i.run(0),r=!1},d(f){f&&b(e),pe(n),f&&i&&i.end(),o=!1,a()}}}function hd(t){let e,n,s=t[25]>=t[4]&&t[25]<t[2]&&ud(t);return{c(){s&&s.c(),e=nn()},m(i,r){s&&s.m(i,r),w(i,e,r),n=!0},p(i,r){i[25]>=i[4]&&i[25]<i[2]?s?(s.p(i,r),r&20&&H(s,1)):(s=ud(i),s.c(),H(s,1),s.m(e.parentNode,e)):s&&(bt(),x(s,1,1,()=>{s=null}),wt())},i(i){n||(H(s),n=!0)},o(i){x(s),n=!1},d(i){s&&s.d(i),i&&b(e)}}}function fd(t){let e,n,s,i,r,o,a,l,c;return{c(){e=p("li"),n=p("a"),n.textContent="first",s=k(),i=p("li"),r=p("a"),o=S("previous"),m(n,"href","/blog"),m(r,"href",a="/blog/"+(t[0]-1))},m(h,f){w(h,e,f),u(e,n),w(h,s,f),w(h,i,f),u(i,r),u(r,o),l||(c=[j(n,"click",_n(t[15])),j(r,"click",_n(t[16]))],l=!0)},p(h,f){f&1&&a!==(a="/blog/"+(h[0]-1))&&m(r,"href",a)},d(h){h&&b(e),h&&b(s),h&&b(i),l=!1,Je(c)}}}function dd(t){let e,n,s=t[0]-t[25]+"",i,r,o,a;function l(){return t[17](t[25])}return{c(){e=p("li"),n=p("a"),i=S(s),m(n,"href",r="/blog/"+(t[0]-t[25]))},m(c,h){w(c,e,h),u(e,n),u(n,i),o||(a=j(n,"click",_n(l)),o=!0)},p(c,h){t=c,h&1&&s!==(s=t[0]-t[25]+"")&&re(i,s),h&1&&r!==(r="/blog/"+(t[0]-t[25]))&&m(n,"href",r)},d(c){c&&b(e),o=!1,a()}}}function pd(t){let e,n=t[0]-t[25]>0&&dd(t);return{c(){n&&n.c(),e=nn()},m(s,i){n&&n.m(s,i),w(s,e,i)},p(s,i){s[0]-s[25]>0?n?n.p(s,i):(n=dd(s),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(s){n&&n.d(s),s&&b(e)}}}function md(t){let e,n,s=t[0]+(t[25]+1)+"",i,r,o,a;function l(){return t[18](t[25])}return{c(){e=p("li"),n=p("a"),i=S(s),m(n,"href",r="/blog/"+(t[0]+(t[25]+1)))},m(c,h){w(c,e,h),u(e,n),u(n,i),o||(a=j(n,"click",_n(l)),o=!0)},p(c,h){t=c,h&1&&s!==(s=t[0]+(t[25]+1)+"")&&re(i,s),h&1&&r!==(r="/blog/"+(t[0]+(t[25]+1)))&&m(n,"href",r)},d(c){c&&b(e),o=!1,a()}}}function gd(t){let e,n=t[0]+(t[25]+1)<=t[5]&&md(t);return{c(){n&&n.c(),e=nn()},m(s,i){n&&n.m(s,i),w(s,e,i)},p(s,i){s[0]+(s[25]+1)<=s[5]?n?n.p(s,i):(n=md(s),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(s){n&&n.d(s),s&&b(e)}}}function _d(t){let e,n,s,i,r,o,a,l,c,h,f;return{c(){e=p("li"),n=p("a"),s=S("next"),r=k(),o=p("li"),a=p("a"),l=S("last"),m(n,"href",i="/blog/"+(t[0]+1)),m(a,"href",c="/blog/"+t[5])},m(d,g){w(d,e,g),u(e,n),u(n,s),w(d,r,g),w(d,o,g),u(o,a),u(a,l),h||(f=[j(n,"click",_n(t[19])),j(a,"click",_n(t[20]))],h=!0)},p(d,g){g&1&&i!==(i="/blog/"+(d[0]+1))&&m(n,"href",i),g&32&&c!==(c="/blog/"+d[5])&&m(a,"href",c)},d(d){d&&b(e),d&&b(r),d&&b(o),h=!1,Je(f)}}}function vd(t){let e,n,s;return n=new XI({props:{$contact:t[7]}}),{c(){e=p("div"),ge(n.$$.fragment)},m(i,r){w(i,e,r),de(n,e,null),s=!0},p(i,r){const o={};r&128&&(o.$contact=i[7]),n.$set(o)},i(i){s||(H(n.$$.fragment,i),s=!0)},o(i){x(n.$$.fragment,i),s=!1},d(i){i&&b(e),pe(n)}}}function yd(t){let e,n,s,i;const r=[t[7]];let o={};for(let a=0;a<r.length;a+=1)o=Ot(o,r[a]);return s=new GI({props:o}),{c(){e=p("div"),n=p("div"),ge(s.$$.fragment),m(n,"class","container")},m(a,l){w(a,e,l),u(e,n),de(s,n,null),i=!0},p(a,l){const c=l&128?vn(r,[xn(a[7])]):{};s.$set(c)},i(a){i||(H(s.$$.fragment,a),i=!0)},o(a){x(s.$$.fragment,a),i=!1},d(a){a&&b(e),pe(s)}}}function xI(t){let e,n,s,i,r,o,a,l,c,h,f=t[6]==="start"&&cd(t),d=t[6]==="contSelect"&&vd(t),g=(t[6]==="contEditing"||t[6]==="contAdding")&&yd(t);return{c(){e=p("main"),n=p("div"),s=p("h1"),s.textContent="Contactos",i=k(),r=p("img"),a=k(),f&&f.c(),l=k(),d&&d.c(),c=k(),g&&g.c(),tt(r.src,o=F_)||m(r,"src",o),m(r,"alt","contactos"),m(r,"class","svelte-1o9z7a3"),m(e,"class","container")},m(_,v){w(_,e,v),u(e,n),u(n,s),u(n,i),u(n,r),u(e,a),f&&f.m(e,null),u(e,l),d&&d.m(e,null),u(e,c),g&&g.m(e,null),h=!0},p(_,[v]){_[6]==="start"?f?(f.p(_,v),v&64&&H(f,1)):(f=cd(_),f.c(),H(f,1),f.m(e,l)):f&&(bt(),x(f,1,1,()=>{f=null}),wt()),_[6]==="contSelect"?d?(d.p(_,v),v&64&&H(d,1)):(d=vd(_),d.c(),H(d,1),d.m(e,c)):d&&(bt(),x(d,1,1,()=>{d=null}),wt()),_[6]==="contEditing"||_[6]==="contAdding"?g?(g.p(_,v),v&64&&H(g,1)):(g=yd(_),g.c(),H(g,1),g.m(e,null)):g&&(bt(),x(g,1,1,()=>{g=null}),wt())},i(_){h||(H(f),H(d),H(g),h=!0)},o(_){x(f),x(d),x(g),h=!1},d(_){_&&b(e),f&&f.d(),d&&d.d(),g&&g.d()}}}let il=15;function JI(t,e,n){let s,i,r,o,a,l;Ne(t,Ke,R=>n(6,a=R)),Ne(t,et,R=>n(7,l=R));let c;Ce(Ke,a="start",a);let h=1,f=[];const d=R=>{n(0,h=R)},g=nu(tn(ct,"contacts"),R=>{n(1,f=R.docs.map(Q=>({...Q.data(),id:Q.id}))),console.log(f),E()},R=>{console.log(R)});Yo(g);const _=()=>{Ce(Ke,a="contAdding",a)},v=R=>{n(3,c=""),Ce(et,l=R,l),Ce(Ke,a="contSelect",a)};function y(){return n(1,f=f.filter(R=>(R.name+" "+R.lastname).toLowerCase().includes(c.toLowerCase())))}function E(){f.sort((R,Q)=>new Date(R.createdAt)<new Date(Q.createdAt)?1:new Date(R.createdAt)>new Date(Q.createdAt)?-1:0)}function T(R){c=R,n(3,c)}const O=R=>v(R),P=()=>d(1),$=()=>d(h-1),G=R=>d(h-R),N=R=>d(h+(R+1)),U=()=>d(h+1),K=()=>d(i);return t.$$.update=()=>{t.$$.dirty&2&&n(12,s=f.length),t.$$.dirty&4096&&n(5,i=Math.ceil(s/il)),t.$$.dirty&1&&n(2,r=h*il),t.$$.dirty&4&&n(4,o=r-il)},[h,f,r,c,o,i,a,l,d,_,v,y,s,T,O,P,$,G,N,U,K]}class ZI extends Xe{constructor(e){super(),Ye(this,e,JI,xI,Ge,{})}}let os=[],as=[];function eC(t,e){e=e.filter(n=>n.selecTP===t.selectTP),t.numBeds>0&&(e=e.filter(n=>n.numBeds>=t.beds)),t.numBaths>0&&(e=e.filter(n=>n.numBaths>=t.bathroom)),t.numParks>0&&(e=e.filter(n=>n.numPark>=t.parks));try{e=e.filter(n=>{n.budget?os=e.filter(s=>s.budget>=t.price*.7&&s.budget<=t.price*1.1):as=e.filter(s=>s.rangeProp===j_(t.price))})}catch(n){console.log(n)}e=as.concat(os),os=[],as=[];try{e.filter(n=>{n.locaProperty.length>0?os=e.filter(s=>t.locaProperty.some(i=>s.locaProperty.includes(i))):as=e.filter(s=>s.locaProperty.length===0)})}catch(n){console.log(n)}e=as.concat(os),os=[],as=[];try{e=e.filter(n=>{n.tagsProperty.length>0?os=e.filter(s=>t.tagsProperty.some(i=>s.tagsProperty.includes(i))):as=e.filter(s=>s.tagsProperty.length===0)})}catch(n){console.log(n)}return e=as.concat(os),$_.set(e)}function bd(t,e,n){const s=t.slice();return s[16]=e[n],s}function wd(t){let e,n=t[2],s=[];for(let i=0;i<n.length;i+=1)s[i]=kd(bd(t,n,i));return{c(){for(let i=0;i<s.length;i+=1)s[i].c();e=nn()},m(i,r){for(let o=0;o<s.length;o+=1)s[o].m(i,r);w(i,e,r)},p(i,r){if(r&4){n=i[2];let o;for(o=0;o<n.length;o+=1){const a=bd(i,n,o);s[o]?s[o].p(a,r):(s[o]=kd(a),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(i){Ve(s,i),i&&b(e)}}}function kd(t){let e,n,s,i,r=t[16].name+"",o,a,l=t[16].lastname+"",c,h,f,d=t[16].locaProperty+"",g,_,v,y=t[16].tagsProperty+"",E,T,O,P=t[16].budget+"",$,G,N,U=t[16].rangeProp+"",K,R;return{c(){e=p("div"),n=p("input"),s=k(),i=p("h3"),o=S(r),a=k(),c=S(l),h=k(),f=p("h4"),g=S(d),_=k(),v=p("h4"),E=S(y),T=k(),O=p("div"),$=S(P),G=k(),N=p("div"),K=S(U),R=k(),m(n,"type","checkbox"),m(e,"class","conInt svelte-6z8m3z")},m(Q,q){w(Q,e,q),u(e,n),u(e,s),u(e,i),u(i,o),u(i,a),u(i,c),u(e,h),u(e,f),u(f,g),u(e,_),u(e,v),u(v,E),u(e,T),u(e,O),u(O,$),u(e,G),u(e,N),u(N,K),u(e,R)},p(Q,q){q&4&&r!==(r=Q[16].name+"")&&re(o,r),q&4&&l!==(l=Q[16].lastname+"")&&re(c,l),q&4&&d!==(d=Q[16].locaProperty+"")&&re(g,d),q&4&&y!==(y=Q[16].tagsProperty+"")&&re(E,y),q&4&&P!==(P=Q[16].budget+"")&&re($,P),q&4&&U!==(U=Q[16].rangeProp+"")&&re(K,U)},d(Q){Q&&b(e)}}}function tC(t){let e,n,s,i,r,o,a,l,c,h=t[1].claveEB+"",f,d,g=t[1].nameProperty+"",_,v,y,E=t[1].selectTP+"",T,O,P=t[1].colonia+"",$,G,N=t[1].locaProperty+"",U,K,R,Q,q,W=t[1].price+"",F,J,V,le,Z=t[1].beds+"",ce,ie,M=t[1].bathroom+"",C,L,X=t[1].halfBathroom+"",B,ue,Le,D,se=t[1].areaBuilding+"",_e,Fe,A=t[1].areaTotal+"",Y,Me,z,me,oe=t[1].description+"",xe,bn,St,At,sn,Jt,Mt,Ht,ht,mn,ot,ft,rn,lt,Bn,on,dt,Cn,Sn,an,An,Dn,zt,je,Zt,qe=t[0]&&wd(t);return{c(){e=p("div"),n=p("div"),s=p("div"),i=p("img"),a=k(),l=p("div"),c=p("h4"),f=S(h),d=k(),_=S(g),v=k(),y=p("h5"),T=S(E),O=S(" en Col. "),$=S(P),G=S(" al "),U=S(N),K=S(" de la ciudad."),R=k(),Q=p("h6"),q=S("Precio: "),F=S(W),J=k(),V=p("div"),le=p("h6"),ce=S(Z),ie=S(" Recamaras, "),C=S(M),L=S(" Ba\xF1os y "),B=S(X),ue=S(" Medio Ba\xF1o"),Le=k(),D=p("h6"),_e=S(se),Fe=S(" m2 de construcci\xF3n y "),Y=S(A),Me=S(" m2 de terreno"),z=k(),me=p("p"),xe=S(oe),bn=k(),St=p("div"),At=p("a"),sn=S("Seguir Link en Otra Ventana"),Mt=k(),Ht=p("div"),ht=p("button"),ht.textContent="Enviar por WhatsApp",mn=k(),ot=p("button"),ot.textContent="Buscar Interesados",ft=k(),rn=p("div"),lt=p("button"),lt.textContent="Regresar",Bn=k(),on=p("div"),dt=p("img"),Sn=k(),an=p("img"),Dn=k(),zt=p("div"),qe&&qe.c(),tt(i.src,r=t[1].urlImage)||m(i,"src",r),m(i,"alt",o=t[1].nameProperty),m(s,"class","selectImage svelte-6z8m3z"),m(me,"class","descSelec"),m(l,"class","descSelect"),m(At,"href",Jt=t[1].urlProp),m(At,"target","_blank"),m(St,"class","folowLink"),m(ht,"class","btnCommon btnWhatsApp"),m(ot,"class","btnCommon"),m(Ht,"class","optionsSend"),m(lt,"class","btnCommon btnCancel"),m(rn,"class","backAnt"),tt(dt.src,Cn=Da)||m(dt,"src",Cn),m(dt,"alt","delete"),tt(an.src,An=q_)||m(an,"src",An),m(an,"alt","delete"),m(on,"class","icon__Content"),m(n,"class","sele__info svelte-6z8m3z"),m(e,"class","sele__Product svelte-6z8m3z"),m(zt,"class","container cont__interest svelte-6z8m3z")},m(Pe,Ae){w(Pe,e,Ae),u(e,n),u(n,s),u(s,i),u(n,a),u(n,l),u(l,c),u(c,f),u(c,d),u(c,_),u(l,v),u(l,y),u(y,T),u(y,O),u(y,$),u(y,G),u(y,U),u(y,K),u(l,R),u(l,Q),u(Q,q),u(Q,F),u(l,J),u(l,V),u(V,le),u(le,ce),u(le,ie),u(le,C),u(le,L),u(le,B),u(le,ue),u(l,Le),u(l,D),u(D,_e),u(D,Fe),u(D,Y),u(D,Me),u(l,z),u(l,me),u(me,xe),u(n,bn),u(n,St),u(St,At),u(At,sn),u(n,Mt),u(n,Ht),u(Ht,ht),u(Ht,mn),u(Ht,ot),u(n,ft),u(n,rn),u(rn,lt),u(n,Bn),u(n,on),u(on,dt),u(on,Sn),u(on,an),w(Pe,Dn,Ae),w(Pe,zt,Ae),qe&&qe.m(zt,null),je||(Zt=[j(ht,"click",t[8]),j(ot,"click",t[6]),j(lt,"click",t[7]),j(dt,"click",t[4]),j(an,"click",t[5])],je=!0)},p(Pe,[Ae]){Ae&2&&!tt(i.src,r=Pe[1].urlImage)&&m(i,"src",r),Ae&2&&o!==(o=Pe[1].nameProperty)&&m(i,"alt",o),Ae&2&&h!==(h=Pe[1].claveEB+"")&&re(f,h),Ae&2&&g!==(g=Pe[1].nameProperty+"")&&re(_,g),Ae&2&&E!==(E=Pe[1].selectTP+"")&&re(T,E),Ae&2&&P!==(P=Pe[1].colonia+"")&&re($,P),Ae&2&&N!==(N=Pe[1].locaProperty+"")&&re(U,N),Ae&2&&W!==(W=Pe[1].price+"")&&re(F,W),Ae&2&&Z!==(Z=Pe[1].beds+"")&&re(ce,Z),Ae&2&&M!==(M=Pe[1].bathroom+"")&&re(C,M),Ae&2&&X!==(X=Pe[1].halfBathroom+"")&&re(B,X),Ae&2&&se!==(se=Pe[1].areaBuilding+"")&&re(_e,se),Ae&2&&A!==(A=Pe[1].areaTotal+"")&&re(Y,A),Ae&2&&oe!==(oe=Pe[1].description+"")&&re(xe,oe),Ae&2&&Jt!==(Jt=Pe[1].urlProp)&&m(At,"href",Jt),Pe[0]?qe?qe.p(Pe,Ae):(qe=wd(Pe),qe.c(),qe.m(zt,null)):qe&&(qe.d(1),qe=null)},i:fe,o:fe,d(Pe){Pe&&b(e),Pe&&b(Dn),Pe&&b(zt),qe&&qe.d(),je=!1,Je(Zt)}}}function nC(t,e,n){let s,i,r;Ne(t,Ke,g=>n(10,s=g)),Ne(t,We,g=>n(1,i=g)),Ne(t,$_,g=>n(2,r=g)),Xs();let o=[],a=!1;function l(){console.log("propEditing"),Ce(Ke,s="propEditing",s),console.log("propEditing")}async function c(){confirm("Deseas eleiminar definitivamente la propiedad?")&&(console.log("Borraste al propiedad"),await Ia(Cs(ct,"properties",i.id)),Ce(Ke,s="start",s))}function h(){eC(i,Ti),n(0,a=!0)}function f(){Ce(We,i=[],i),Ce(Ke,s="start",s)}return[a,i,r,o,l,c,h,f,()=>void 0]}class sC extends Xe{constructor(e){super(),Ye(this,e,nC,tC,Ge,{})}}function Ed(t,e,n){const s=t.slice();return s[24]=e[n],s}function Td(t,e,n){const s=t.slice();return s[27]=e[n],s}function Id(t,e,n){const s=t.slice();return s[30]=e[n],s}function Cd(t,e,n){const s=t.slice();return s[33]=e[n],s}function Sd(t,e,n){const s=t.slice();return s[36]=e[n],s}function Ad(t,e,n){const s=t.slice();return s[39]=e[n],s}function Dd(t,e,n){const s=t.slice();return s[42]=e[n],s}function iC(t){let e,n=Ct(t[1].createdAt)+"",s,i,r;return{c(){e=p("h3"),s=S(n),m(e,"class","dataInput")},m(o,a){w(o,e,a),u(e,s),i||(r=j(e,"dblclick",t[3]),i=!0)},p(o,a){a[0]&2&&n!==(n=Ct(o[1].createdAt)+"")&&re(s,n)},d(o){o&&b(e),i=!1,r()}}}function rC(t){let e,n,s;return{c(){e=p("input"),m(e,"class","dataInput"),m(e,"type","date")},m(i,r){w(i,e,r),ye(e,t[1].createdAt),n||(s=j(e,"input",t[4]),n=!0)},p(i,r){r[0]&2&&ye(e,i[1].createdAt)},d(i){i&&b(e),n=!1,s()}}}function Pd(t){let e,n=t[42]+"",s;return{c(){e=p("option"),s=S(n),m(e,"type","checkbox"),e.__value=t[42],e.value=e.__value},m(i,r){w(i,e,r),u(e,s)},p:fe,d(i){i&&b(e)}}}function Rd(t){let e,n=t[39]+"",s,i;return{c(){e=p("option"),s=S(n),i=k(),m(e,"type","checkbox"),e.__value=t[39],e.value=e.__value},m(r,o){w(r,e,o),u(e,s),u(e,i)},p:fe,d(r){r&&b(e)}}}function Nd(t){let e,n=t[36]+"",s,i;return{c(){e=p("option"),s=S(n),i=S(" Rec\xE1maras"),m(e,"type","checkbox"),e.__value=t[36],e.value=e.__value},m(r,o){w(r,e,o),u(e,s),u(e,i)},p:fe,d(r){r&&b(e)}}}function Od(t){let e,n=t[33]+"",s,i;return{c(){e=p("option"),s=S(n),i=S(" ba\xF1os"),m(e,"type","checkbox"),e.__value=t[33],e.value=e.__value},m(r,o){w(r,e,o),u(e,s),u(e,i)},p:fe,d(r){r&&b(e)}}}function Ld(t){let e,n=t[30]+"",s,i;return{c(){e=p("option"),s=S(n),i=S(" Medios ba\xF1os"),m(e,"type","checkbox"),e.__value=t[30],e.value=e.__value},m(r,o){w(r,e,o),u(e,s),u(e,i)},p:fe,d(r){r&&b(e)}}}function Md(t){let e,n=t[27]+"",s,i;return{c(){e=p("option"),s=S(n),i=S(" Estacionamientos"),m(e,"type","checkbox"),e.__value=t[27],e.value=e.__value},m(r,o){w(r,e,o),u(e,s),u(e,i)},p:fe,d(r){r&&b(e)}}}function $d(t){let e,n=t[24]+"",s;return{c(){e=p("option"),s=S(n),m(e,"type","checkbox"),e.__value=t[24],e.value=e.__value},m(i,r){w(i,e,r),u(e,s)},p:fe,d(i){i&&b(e)}}}function oC(t){let e,n,s,i,r,o,a,l,c,h,f,d,g,_,v,y,E,T,O,P,$,G,N,U,K,R,Q,q,W,F,J,V,le,Z,ce,ie,M,C,L,X,B,ue,Le,D,se,_e,Fe,A,Y,Me,z,me,oe,xe,bn,St,At,sn,Jt,Mt,Ht,ht,mn,ot,ft,rn,lt,Bn,on,dt,Cn,Sn,an,An;function Dn(I,ae){if(I[0])return rC;if(I[2]==="propEditing")return iC}let zt=Dn(t),je=zt&&zt(t),Zt=Go,qe=[];for(let I=0;I<Zt.length;I+=1)qe[I]=Pd(Dd(t,Zt,I));let Pe=kf,Ae=[];for(let I=0;I<Pe.length;I+=1)Ae[I]=Rd(Ad(t,Pe,I));let Vn=Wo,pt=[];for(let I=0;I<Vn.length;I+=1)pt[I]=Nd(Sd(t,Vn,I));let jn=kn,$t=[];for(let I=0;I<jn.length;I+=1)$t[I]=Od(Cd(t,jn,I));let Pn=kn,mt=[];for(let I=0;I<Pn.length;I+=1)mt[I]=Ld(Id(t,Pn,I));let qn=kn,gt=[];for(let I=0;I<qn.length;I+=1)gt[I]=Md(Td(t,qn,I));let wn=Tf,st=[];for(let I=0;I<wn.length;I+=1)st[I]=$d(Ed(t,wn,I));function Qr(I){t[22](I)}let is={};t[1].locaProperty!==void 0&&(is.ubication=t[1].locaProperty),lt=new H_({props:is}),Xn.push(()=>js(lt,"ubication",Qr));function Ps(I){t[23](I)}let Oi={};return t[1].tagsProperty!==void 0&&(Oi.tag=t[1].tagsProperty),dt=new z_({props:Oi}),Xn.push(()=>js(dt,"tag",Ps)),{c(){e=p("div"),je&&je.c(),n=k(),s=p("select"),i=p("option"),i.textContent="Tipo de Propiedad";for(let I=0;I<qe.length;I+=1)qe[I].c();r=k(),o=p("label"),o.innerHTML=`Titulo
       <input type="text"/>`,a=k(),l=p("label"),c=S(`Colonia\r
        `),h=p("input"),f=k(),d=p("label"),g=S(`Nombre de la Propiead\r
        `),_=p("input"),v=k(),y=p("label"),E=S(`Clave EB\r
        `),T=p("input"),O=k(),P=p("label"),$=S(`Clave MH\r
        `),G=p("input"),N=k(),U=p("div"),K=p("textarea"),R=k(),Q=p("select"),q=p("option"),q.textContent="Tipo de Operaci\xF3n";for(let I=0;I<Ae.length;I+=1)Ae[I].c();W=k(),F=p("select"),J=p("option"),J.textContent="# Rec\xE1maras";for(let I=0;I<pt.length;I+=1)pt[I].c();V=k(),le=p("select"),Z=p("option"),Z.textContent="# Ba\xF1os";for(let I=0;I<$t.length;I+=1)$t[I].c();ce=k(),ie=p("select"),M=p("option"),M.textContent="# Medios Ba\xF1os";for(let I=0;I<mt.length;I+=1)mt[I].c();C=k(),L=p("select"),X=p("option"),X.textContent="# Estacionamientos";for(let I=0;I<gt.length;I+=1)gt[I].c();B=k(),ue=p("label"),Le=S(`Area de Construcci\xF3n\r
            `),D=p("input"),se=k(),_e=p("label"),Fe=S(`Area de Terreno\r
            `),A=p("input"),Y=k(),Me=p("label"),z=S(`Precio\r
            `),me=p("input"),oe=k(),xe=p("label"),bn=S(`Link Imgen\r
        `),St=p("input"),At=k(),sn=p("label"),Jt=S(`Link de la Propiedad\r
        `),Mt=p("input"),Ht=k(),ht=p("label"),ht.innerHTML=`Propietario
            <input type="text"/>`,mn=k(),ot=p("select"),ft=p("option"),ft.textContent="Tipo de Encargado";for(let I=0;I<st.length;I+=1)st[I].c();rn=k(),ge(lt.$$.fragment),on=k(),ge(dt.$$.fragment),i.disabled=!0,i.selected=!0,i.__value="",i.value=i.__value,m(s,"class","selTP"),m(s,"id","selTP"),m(s,"name","selTP"),t[1].selectTP===void 0&&Ze(()=>t[5].call(s)),m(h,"type","text"),m(_,"type","text"),m(T,"type","text"),m(G,"type","text"),m(K,"placeholder","Comentarios"),m(K,"cols","65"),m(K,"rows","5"),m(K,"class","form-control"),m(U,"class","col"),q.disabled=!0,q.selected=!0,q.__value="",q.value=q.__value,t[1].typeOperation===void 0&&Ze(()=>t[11].call(Q)),J.disabled=!0,J.selected=!0,J.__value="",J.value=J.__value,t[1].beds===void 0&&Ze(()=>t[12].call(F)),Z.disabled=!0,Z.selected=!0,Z.__value="",Z.value=Z.__value,t[1].bathroom===void 0&&Ze(()=>t[13].call(le)),M.disabled=!0,M.selected=!0,M.__value="",M.value=M.__value,t[1].halfBathroom===void 0&&Ze(()=>t[14].call(ie)),X.disabled=!0,X.selected=!0,X.__value="",X.value=X.__value,t[1].park===void 0&&Ze(()=>t[15].call(L)),m(D,"type","number"),m(A,"type","number"),m(me,"type","number"),m(St,"type","text"),m(Mt,"type","text"),ft.disabled=!0,ft.selected=!0,ft.__value="",ft.value=ft.__value,m(ot,"name","typeSaller"),t[1].typeSaller===void 0&&Ze(()=>t[21].call(ot))},m(I,ae){w(I,e,ae),je&&je.m(e,null),w(I,n,ae),w(I,s,ae),u(s,i);for(let Re=0;Re<qe.length;Re+=1)qe[Re].m(s,null);Ue(s,t[1].selectTP),w(I,r,ae),w(I,o,ae),w(I,a,ae),w(I,l,ae),u(l,c),u(l,h),ye(h,t[1].colonia),w(I,f,ae),w(I,d,ae),u(d,g),u(d,_),ye(_,t[1].nameProperty),w(I,v,ae),w(I,y,ae),u(y,E),u(y,T),ye(T,t[1].claveEB),w(I,O,ae),w(I,P,ae),u(P,$),u(P,G),ye(G,t[1].claveMH),w(I,N,ae),w(I,U,ae),u(U,K),ye(K,t[1].description),w(I,R,ae),w(I,Q,ae),u(Q,q);for(let Re=0;Re<Ae.length;Re+=1)Ae[Re].m(Q,null);Ue(Q,t[1].typeOperation),w(I,W,ae),w(I,F,ae),u(F,J);for(let Re=0;Re<pt.length;Re+=1)pt[Re].m(F,null);Ue(F,t[1].beds),w(I,V,ae),w(I,le,ae),u(le,Z);for(let Re=0;Re<$t.length;Re+=1)$t[Re].m(le,null);Ue(le,t[1].bathroom),w(I,ce,ae),w(I,ie,ae),u(ie,M);for(let Re=0;Re<mt.length;Re+=1)mt[Re].m(ie,null);Ue(ie,t[1].halfBathroom),w(I,C,ae),w(I,L,ae),u(L,X);for(let Re=0;Re<gt.length;Re+=1)gt[Re].m(L,null);Ue(L,t[1].park),w(I,B,ae),w(I,ue,ae),u(ue,Le),u(ue,D),ye(D,t[1].areaBuilding),w(I,se,ae),w(I,_e,ae),u(_e,Fe),u(_e,A),ye(A,t[1].areaTotal),w(I,Y,ae),w(I,Me,ae),u(Me,z),u(Me,me),ye(me,t[1].price),w(I,oe,ae),w(I,xe,ae),u(xe,bn),u(xe,St),ye(St,t[1].urlImage),w(I,At,ae),w(I,sn,ae),u(sn,Jt),u(sn,Mt),ye(Mt,t[1].urlProp),w(I,Ht,ae),w(I,ht,ae),w(I,mn,ae),w(I,ot,ae),u(ot,ft);for(let Re=0;Re<st.length;Re+=1)st[Re].m(ot,null);Ue(ot,t[1].typeSaller),w(I,rn,ae),de(lt,I,ae),w(I,on,ae),de(dt,I,ae),Sn=!0,an||(An=[j(s,"change",t[5]),j(h,"input",t[6]),j(_,"input",t[7]),j(T,"input",t[8]),j(G,"input",t[9]),j(K,"input",t[10]),j(Q,"change",t[11]),j(F,"change",t[12]),j(le,"change",t[13]),j(ie,"change",t[14]),j(L,"change",t[15]),j(D,"input",t[16]),j(A,"input",t[17]),j(me,"input",t[18]),j(St,"input",t[19]),j(Mt,"input",t[20]),j(ot,"change",t[21])],an=!0)},p(I,ae){if(zt===(zt=Dn(I))&&je?je.p(I,ae):(je&&je.d(1),je=zt&&zt(I),je&&(je.c(),je.m(e,null))),ae&0){Zt=Go;let ee;for(ee=0;ee<Zt.length;ee+=1){const at=Dd(I,Zt,ee);qe[ee]?qe[ee].p(at,ae):(qe[ee]=Pd(at),qe[ee].c(),qe[ee].m(s,null))}for(;ee<qe.length;ee+=1)qe[ee].d(1);qe.length=Zt.length}if(ae[0]&2&&Ue(s,I[1].selectTP),ae[0]&2&&h.value!==I[1].colonia&&ye(h,I[1].colonia),ae[0]&2&&_.value!==I[1].nameProperty&&ye(_,I[1].nameProperty),ae[0]&2&&T.value!==I[1].claveEB&&ye(T,I[1].claveEB),ae[0]&2&&G.value!==I[1].claveMH&&ye(G,I[1].claveMH),ae[0]&2&&ye(K,I[1].description),ae&0){Pe=kf;let ee;for(ee=0;ee<Pe.length;ee+=1){const at=Ad(I,Pe,ee);Ae[ee]?Ae[ee].p(at,ae):(Ae[ee]=Rd(at),Ae[ee].c(),Ae[ee].m(Q,null))}for(;ee<Ae.length;ee+=1)Ae[ee].d(1);Ae.length=Pe.length}if(ae[0]&2&&Ue(Q,I[1].typeOperation),ae&0){Vn=Wo;let ee;for(ee=0;ee<Vn.length;ee+=1){const at=Sd(I,Vn,ee);pt[ee]?pt[ee].p(at,ae):(pt[ee]=Nd(at),pt[ee].c(),pt[ee].m(F,null))}for(;ee<pt.length;ee+=1)pt[ee].d(1);pt.length=Vn.length}if(ae[0]&2&&Ue(F,I[1].beds),ae&0){jn=kn;let ee;for(ee=0;ee<jn.length;ee+=1){const at=Cd(I,jn,ee);$t[ee]?$t[ee].p(at,ae):($t[ee]=Od(at),$t[ee].c(),$t[ee].m(le,null))}for(;ee<$t.length;ee+=1)$t[ee].d(1);$t.length=jn.length}if(ae[0]&2&&Ue(le,I[1].bathroom),ae&0){Pn=kn;let ee;for(ee=0;ee<Pn.length;ee+=1){const at=Id(I,Pn,ee);mt[ee]?mt[ee].p(at,ae):(mt[ee]=Ld(at),mt[ee].c(),mt[ee].m(ie,null))}for(;ee<mt.length;ee+=1)mt[ee].d(1);mt.length=Pn.length}if(ae[0]&2&&Ue(ie,I[1].halfBathroom),ae&0){qn=kn;let ee;for(ee=0;ee<qn.length;ee+=1){const at=Td(I,qn,ee);gt[ee]?gt[ee].p(at,ae):(gt[ee]=Md(at),gt[ee].c(),gt[ee].m(L,null))}for(;ee<gt.length;ee+=1)gt[ee].d(1);gt.length=qn.length}if(ae[0]&2&&Ue(L,I[1].park),ae[0]&2&&ds(D.value)!==I[1].areaBuilding&&ye(D,I[1].areaBuilding),ae[0]&2&&ds(A.value)!==I[1].areaTotal&&ye(A,I[1].areaTotal),ae[0]&2&&ds(me.value)!==I[1].price&&ye(me,I[1].price),ae[0]&2&&St.value!==I[1].urlImage&&ye(St,I[1].urlImage),ae[0]&2&&Mt.value!==I[1].urlProp&&ye(Mt,I[1].urlProp),ae&0){wn=Tf;let ee;for(ee=0;ee<wn.length;ee+=1){const at=Ed(I,wn,ee);st[ee]?st[ee].p(at,ae):(st[ee]=$d(at),st[ee].c(),st[ee].m(ot,null))}for(;ee<st.length;ee+=1)st[ee].d(1);st.length=wn.length}ae[0]&2&&Ue(ot,I[1].typeSaller);const Re={};!Bn&&ae[0]&2&&(Bn=!0,Re.ubication=I[1].locaProperty,Vs(()=>Bn=!1)),lt.$set(Re);const Hn={};!Cn&&ae[0]&2&&(Cn=!0,Hn.tag=I[1].tagsProperty,Vs(()=>Cn=!1)),dt.$set(Hn)},i(I){Sn||(H(lt.$$.fragment,I),H(dt.$$.fragment,I),Sn=!0)},o(I){x(lt.$$.fragment,I),x(dt.$$.fragment,I),Sn=!1},d(I){I&&b(e),je&&je.d(),I&&b(n),I&&b(s),Ve(qe,I),I&&b(r),I&&b(o),I&&b(a),I&&b(l),I&&b(f),I&&b(d),I&&b(v),I&&b(y),I&&b(O),I&&b(P),I&&b(N),I&&b(U),I&&b(R),I&&b(Q),Ve(Ae,I),I&&b(W),I&&b(F),Ve(pt,I),I&&b(V),I&&b(le),Ve($t,I),I&&b(ce),I&&b(ie),Ve(mt,I),I&&b(C),I&&b(L),Ve(gt,I),I&&b(B),I&&b(ue),I&&b(se),I&&b(_e),I&&b(Y),I&&b(Me),I&&b(oe),I&&b(xe),I&&b(At),I&&b(sn),I&&b(Ht),I&&b(ht),I&&b(mn),I&&b(ot),Ve(st,I),I&&b(rn),pe(lt,I),I&&b(on),pe(dt,I),an=!1,Je(An)}}}function aC(t,e,n){let s,i;Ne(t,We,Q=>n(1,s=Q)),Ne(t,Ke,Q=>n(2,i=Q));let r=!1;function o(){n(0,r=!0)}function a(){s.createdAt=this.value,We.set(s)}function l(){s.selectTP=Ut(this),We.set(s)}function c(){s.colonia=this.value,We.set(s)}function h(){s.nameProperty=this.value,We.set(s)}function f(){s.claveEB=this.value,We.set(s)}function d(){s.claveMH=this.value,We.set(s)}function g(){s.description=this.value,We.set(s)}function _(){s.typeOperation=Ut(this),We.set(s)}function v(){s.beds=Ut(this),We.set(s)}function y(){s.bathroom=Ut(this),We.set(s)}function E(){s.halfBathroom=Ut(this),We.set(s)}function T(){s.park=Ut(this),We.set(s)}function O(){s.areaBuilding=ds(this.value),We.set(s)}function P(){s.areaTotal=ds(this.value),We.set(s)}function $(){s.price=ds(this.value),We.set(s)}function G(){s.urlImage=this.value,We.set(s)}function N(){s.urlProp=this.value,We.set(s)}function U(){s.typeSaller=Ut(this),We.set(s)}function K(Q){t.$$.not_equal(s.locaProperty,Q)&&(s.locaProperty=Q,We.set(s))}function R(Q){t.$$.not_equal(s.tagsProperty,Q)&&(s.tagsProperty=Q,We.set(s))}return[r,s,i,o,a,l,c,h,f,d,g,_,v,y,E,T,O,P,$,G,N,U,K,R]}class lC extends Xe{constructor(e){super(),Ye(this,e,aC,oC,Ge,{},null,[-1,-1])}}function cC(t){let e;return{c(){e=S("Editar")},m(n,s){w(n,e,s)},d(n){n&&b(e)}}}function uC(t){let e;return{c(){e=S("Guardar")},m(n,s){w(n,e,s)},d(n){n&&b(e)}}}function hC(t){let e,n,s,i,r,o,a,l,c,h,f,d,g,_,v,y;l=new lC({});function E(P,$){return P[0]==="propAdding"?uC:cC}let T=E(t),O=T(t);return{c(){e=p("form"),n=p("div"),s=p("div"),i=p("img"),a=k(),ge(l.$$.fragment),c=k(),h=p("div"),f=p("button"),O.c(),d=k(),g=p("button"),g.textContent="Cancel",tt(i.src,r=t[1].urlImage)||m(i,"src",r),m(i,"alt",o=t[1].nameProperty),m(i,"class","svelte-166hnhc"),m(f,"class","btn-save"),m(g,"class","btn-cancel"),m(h,"class","contSavCan svelte-166hnhc"),m(n,"class","altaContactos"),m(e,"class","propiedad")},m(P,$){w(P,e,$),u(e,n),u(n,s),u(s,i),u(s,a),de(l,s,null),u(n,c),u(n,h),u(h,f),O.m(f,null),u(h,d),u(h,g),_=!0,v||(y=[j(g,"click",t[3]),j(e,"submit",_n(t[2]))],v=!0)},p(P,[$]){(!_||$&2&&!tt(i.src,r=P[1].urlImage))&&m(i,"src",r),(!_||$&2&&o!==(o=P[1].nameProperty))&&m(i,"alt",o),T!==(T=E(P))&&(O.d(1),O=T(P),O&&(O.c(),O.m(f,null)))},i(P){_||(H(l.$$.fragment,P),_=!0)},o(P){x(l.$$.fragment,P),_=!1},d(P){P&&b(e),pe(l),O.d(),v=!1,Je(y)}}}function fC(t,e,n){let s,i;Ne(t,Ke,c=>n(0,s=c)),Ne(t,We,c=>n(1,i=c));let r=0;const o=Xs();async function a(){if(console.log("Estas en add property",s,i),s==="propEditing")console.log("estas dentro de edit property",i.id),await tu(Cs(ct,"properties",i.id),i);else{r=Date.now(),Ce(We,i={...i,createdAt:r},i),console.log(i);const c=tn(ct,"properties");await ys(c,i)}Ce(Ke,s="start",s),Ce(We,i="",i)}return[s,i,a,()=>{o("./")}]}class K_ extends Xe{constructor(e){super(),Ye(this,e,fC,hC,Ge,{})}}function Ud(t,e,n){const s=t.slice();return s[24]=e[n],s[26]=n,s}function Fd(t,e,n){const s=t.slice();return s[26]=e[n],s}function Bd(t,e,n){const s=t.slice();return s[12]=e[n],s[26]=n,s}function Vd(t){let e,n=t[0].length+"",s,i,r,o,a,l,c,h,f,d,g,_,v,y,E,T,O,P,$,G,N,U,K,R;function Q(C){t[14](C)}let q={};t[3]!==void 0&&(q.searchTerm=t[3]),l=new du({props:q}),Xn.push(()=>js(l,"searchTerm",Q)),l.$on("input",t[11]);let W=t[0],F=[];for(let C=0;C<W.length;C+=1)F[C]=qd(Bd(t,W,C));const J=C=>x(F[C],1,1,()=>{F[C]=null});let V=t[1]>1&&Hd(t),le=[3,2,1],Z=[];for(let C=0;C<3;C+=1)Z[C]=Kd(Fd(t,le,C));let ce=Array(3),ie=[];for(let C=0;C<ce.length;C+=1)ie[C]=Wd(Ud(t,ce,C));let M=t[1]<t[5]&&Qd(t);return{c(){e=p("h2"),s=S(n),i=S(" Propiedades a Mostrar"),r=k(),o=p("button"),o.textContent="Alta de Propiedad",a=k(),ge(l.$$.fragment),h=k(),f=p("div"),d=p("main");for(let C=0;C<F.length;C+=1)F[C].c();g=k(),_=p("div"),v=p("div"),y=p("ul"),V&&V.c(),E=k();for(let C=0;C<3;C+=1)Z[C].c();T=k(),O=p("li"),P=p("span"),$=S(t[1]),G=k();for(let C=0;C<ie.length;C+=1)ie[C].c();N=k(),M&&M.c(),m(d,"id","bookshelf"),m(d,"class","svelte-nygjwm"),m(y,"class","pagi__options"),m(v,"class","pagi__Item"),m(_,"class","container pagination"),m(f,"class","mosPag")},m(C,L){w(C,e,L),u(e,s),u(e,i),w(C,r,L),w(C,o,L),w(C,a,L),de(l,C,L),w(C,h,L),w(C,f,L),u(f,d);for(let X=0;X<F.length;X+=1)F[X].m(d,null);u(f,g),u(f,_),u(_,v),u(v,y),V&&V.m(y,null),u(y,E);for(let X=0;X<3;X+=1)Z[X].m(y,null);u(y,T),u(y,O),u(O,P),u(P,$),u(y,G);for(let X=0;X<ie.length;X+=1)ie[X].m(y,null);u(y,N),M&&M.m(y,null),U=!0,K||(R=j(o,"click",t[10]),K=!0)},p(C,L){(!U||L&1)&&n!==(n=C[0].length+"")&&re(s,n);const X={};if(!c&&L&8&&(c=!0,X.searchTerm=C[3],Vs(()=>c=!1)),l.$set(X),L&533){W=C[0];let B;for(B=0;B<W.length;B+=1){const ue=Bd(C,W,B);F[B]?(F[B].p(ue,L),H(F[B],1)):(F[B]=qd(ue),F[B].c(),H(F[B],1),F[B].m(d,null))}for(bt(),B=W.length;B<F.length;B+=1)J(B);wt()}if(C[1]>1?V?V.p(C,L):(V=Hd(C),V.c(),V.m(y,E)):V&&(V.d(1),V=null),L&258){le=[3,2,1];let B;for(B=0;B<3;B+=1){const ue=Fd(C,le,B);Z[B]?Z[B].p(ue,L):(Z[B]=Kd(ue),Z[B].c(),Z[B].m(y,T))}for(;B<3;B+=1)Z[B].d(1)}if((!U||L&2)&&re($,C[1]),L&290){ce=Array(3);let B;for(B=0;B<ce.length;B+=1){const ue=Ud(C,ce,B);ie[B]?ie[B].p(ue,L):(ie[B]=Wd(ue),ie[B].c(),ie[B].m(y,N))}for(;B<ie.length;B+=1)ie[B].d(1);ie.length=ce.length}C[1]<C[5]?M?M.p(C,L):(M=Qd(C),M.c(),M.m(y,null)):M&&(M.d(1),M=null)},i(C){if(!U){H(l.$$.fragment,C);for(let L=0;L<W.length;L+=1)H(F[L]);U=!0}},o(C){x(l.$$.fragment,C),F=F.filter(Boolean);for(let L=0;L<F.length;L+=1)x(F[L]);U=!1},d(C){C&&b(e),C&&b(r),C&&b(o),C&&b(a),pe(l,C),C&&b(h),C&&b(f),Ve(F,C),V&&V.d(),Ve(Z,C),Ve(ie,C),M&&M.d(),K=!1,R()}}}function jd(t){let e,n,s,i,r,o,a;const l=[t[12]];let c={};for(let f=0;f<l.length;f+=1)c=Ot(c,l[f]);n=new V_({props:c});function h(){return t[15](t[12])}return{c(){e=p("section"),ge(n.$$.fragment),s=k(),m(e,"class","property svelte-nygjwm")},m(f,d){w(f,e,d),de(n,e,null),u(e,s),r=!0,o||(a=j(e,"click",h),o=!0)},p(f,d){t=f;const g=d&1?vn(l,[xn(t[12])]):{};n.$set(g)},i(f){r||(H(n.$$.fragment,f),Ze(()=>{i||(i=dn(e,Ci,{duration:500,easing:Ii},!0)),i.run(1)}),r=!0)},o(f){x(n.$$.fragment,f),i||(i=dn(e,Ci,{duration:500,easing:Ii},!1)),i.run(0),r=!1},d(f){f&&b(e),pe(n),f&&i&&i.end(),o=!1,a()}}}function qd(t){let e,n,s=t[26]>=t[4]&&t[26]<t[2]&&jd(t);return{c(){s&&s.c(),e=nn()},m(i,r){s&&s.m(i,r),w(i,e,r),n=!0},p(i,r){i[26]>=i[4]&&i[26]<i[2]?s?(s.p(i,r),r&20&&H(s,1)):(s=jd(i),s.c(),H(s,1),s.m(e.parentNode,e)):s&&(bt(),x(s,1,1,()=>{s=null}),wt())},i(i){n||(H(s),n=!0)},o(i){x(s),n=!1},d(i){s&&s.d(i),i&&b(e)}}}function Hd(t){let e,n,s,i,r,o,a,l,c;return{c(){e=p("li"),n=p("a"),n.textContent="first",s=k(),i=p("li"),r=p("a"),o=S("previous"),m(n,"href","/blog"),m(r,"href",a="/blog/"+(t[1]-1))},m(h,f){w(h,e,f),u(e,n),w(h,s,f),w(h,i,f),u(i,r),u(r,o),l||(c=[j(n,"click",_n(t[16])),j(r,"click",_n(t[17]))],l=!0)},p(h,f){f&2&&a!==(a="/blog/"+(h[1]-1))&&m(r,"href",a)},d(h){h&&b(e),h&&b(s),h&&b(i),l=!1,Je(c)}}}function zd(t){let e,n,s=t[1]-t[26]+"",i,r,o,a;function l(){return t[18](t[26])}return{c(){e=p("li"),n=p("a"),i=S(s),m(n,"href",r="/blog/"+(t[1]-t[26]))},m(c,h){w(c,e,h),u(e,n),u(n,i),o||(a=j(n,"click",_n(l)),o=!0)},p(c,h){t=c,h&2&&s!==(s=t[1]-t[26]+"")&&re(i,s),h&2&&r!==(r="/blog/"+(t[1]-t[26]))&&m(n,"href",r)},d(c){c&&b(e),o=!1,a()}}}function Kd(t){let e,n=t[1]-t[26]>0&&zd(t);return{c(){n&&n.c(),e=nn()},m(s,i){n&&n.m(s,i),w(s,e,i)},p(s,i){s[1]-s[26]>0?n?n.p(s,i):(n=zd(s),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(s){n&&n.d(s),s&&b(e)}}}function Gd(t){let e,n,s=t[1]+(t[26]+1)+"",i,r,o,a;function l(){return t[19](t[26])}return{c(){e=p("li"),n=p("a"),i=S(s),m(n,"href",r="/blog/"+(t[1]+(t[26]+1)))},m(c,h){w(c,e,h),u(e,n),u(n,i),o||(a=j(n,"click",_n(l)),o=!0)},p(c,h){t=c,h&2&&s!==(s=t[1]+(t[26]+1)+"")&&re(i,s),h&2&&r!==(r="/blog/"+(t[1]+(t[26]+1)))&&m(n,"href",r)},d(c){c&&b(e),o=!1,a()}}}function Wd(t){let e,n=t[1]+(t[26]+1)<=t[5]&&Gd(t);return{c(){n&&n.c(),e=nn()},m(s,i){n&&n.m(s,i),w(s,e,i)},p(s,i){s[1]+(s[26]+1)<=s[5]?n?n.p(s,i):(n=Gd(s),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(s){n&&n.d(s),s&&b(e)}}}function Qd(t){let e,n,s,i,r,o,a,l,c,h,f;return{c(){e=p("li"),n=p("a"),s=S("next"),r=k(),o=p("li"),a=p("a"),l=S("last"),m(n,"href",i="/blog/"+(t[1]+1)),m(a,"href",c="/blog/"+t[5])},m(d,g){w(d,e,g),u(e,n),u(n,s),w(d,r,g),w(d,o,g),u(o,a),u(a,l),h||(f=[j(n,"click",_n(t[20])),j(a,"click",_n(t[21]))],h=!0)},p(d,g){g&2&&i!==(i="/blog/"+(d[1]+1))&&m(n,"href",i),g&32&&c!==(c="/blog/"+d[5])&&m(a,"href",c)},d(d){d&&b(e),d&&b(r),d&&b(o),h=!1,Je(f)}}}function Yd(t){let e,n,s;const i=[t[7]];let r={};for(let o=0;o<i.length;o+=1)r=Ot(r,i[o]);return n=new sC({props:r}),{c(){e=p("div"),ge(n.$$.fragment)},m(o,a){w(o,e,a),de(n,e,null),s=!0},p(o,a){const l=a&128?vn(i,[xn(o[7])]):{};n.$set(l)},i(o){s||(H(n.$$.fragment,o),s=!0)},o(o){x(n.$$.fragment,o),s=!1},d(o){o&&b(e),pe(n)}}}function Xd(t){let e,n,s;const i=[t[7]];let r={};for(let o=0;o<i.length;o+=1)r=Ot(r,i[o]);return n=new K_({props:r}),{c(){e=p("div"),ge(n.$$.fragment),m(e,"class","container")},m(o,a){w(o,e,a),de(n,e,null),s=!0},p(o,a){const l=a&128?vn(i,[xn(o[7])]):{};n.$set(l)},i(o){s||(H(n.$$.fragment,o),s=!0)},o(o){x(n.$$.fragment,o),s=!1},d(o){o&&b(e),pe(n)}}}function xd(t){let e,n,s;return n=new K_({}),{c(){e=p("div"),ge(n.$$.fragment),m(e,"class","container")},m(i,r){w(i,e,r),de(n,e,null),s=!0},i(i){s||(H(n.$$.fragment,i),s=!0)},o(i){x(n.$$.fragment,i),s=!1},d(i){i&&b(e),pe(n)}}}function dC(t){let e,n,s,i,r,o,a,l,c,h,f,d=t[6]==="start"&&Vd(t),g=t[6]==="propSelect"&&Yd(t),_=t[6]==="propEditing"&&Xd(t),v=t[6]==="propAdding"&&xd();return{c(){e=p("div"),n=p("div"),s=p("h1"),s.textContent="Propiedades",i=k(),r=p("img"),a=k(),d&&d.c(),l=k(),g&&g.c(),c=k(),_&&_.c(),h=k(),v&&v.c(),tt(r.src,o=B_)||m(r,"src",o),m(r,"alt","propiedad"),m(r,"class","imgTitle svelte-nygjwm"),m(e,"class","container")},m(y,E){w(y,e,E),u(e,n),u(n,s),u(n,i),u(n,r),u(e,a),d&&d.m(e,null),u(e,l),g&&g.m(e,null),u(e,c),_&&_.m(e,null),u(e,h),v&&v.m(e,null),f=!0},p(y,[E]){y[6]==="start"?d?(d.p(y,E),E&64&&H(d,1)):(d=Vd(y),d.c(),H(d,1),d.m(e,l)):d&&(bt(),x(d,1,1,()=>{d=null}),wt()),y[6]==="propSelect"?g?(g.p(y,E),E&64&&H(g,1)):(g=Yd(y),g.c(),H(g,1),g.m(e,c)):g&&(bt(),x(g,1,1,()=>{g=null}),wt()),y[6]==="propEditing"?_?(_.p(y,E),E&64&&H(_,1)):(_=Xd(y),_.c(),H(_,1),_.m(e,h)):_&&(bt(),x(_,1,1,()=>{_=null}),wt()),y[6]==="propAdding"?v?E&64&&H(v,1):(v=xd(),v.c(),H(v,1),v.m(e,null)):v&&(bt(),x(v,1,1,()=>{v=null}),wt())},i(y){f||(H(d),H(g),H(_),H(v),f=!0)},o(y){x(d),x(g),x(_),x(v),f=!1},d(y){y&&b(e),d&&d.d(),g&&g.d(),_&&_.d(),v&&v.d()}}}let rl=20;function pC(t){t.sort((e,n)=>new Date(e.createdAt)<new Date(n.createdAt)?1:new Date(e.createdAt)>new Date(n.createdAt)?-1:0)}function mC(t,e,n){let s,i,r,o,a,l;Ne(t,Ke,R=>n(6,a=R)),Ne(t,We,R=>n(7,l=R));let c,h=[],f;Ce(Ke,a="start",a);let d=1;const g=R=>{n(1,d=R)},_=nu(tn(ct,"properties"),R=>{n(0,h=R.docs.map(Q=>({...Q.data(),id:Q.id}))),pC(h)},R=>{console.log(R)});Yo(_);function v(R){console.log(R),Ce(We,l=R,l),Ce(Ke,a="propSelect",a)}function y(){Ce(Ke,a="propAdding",a)}function E(){return n(0,h=Bs.filter(R=>(R.nameProperty+" "+R.colonia).toLowerCase().includes(c.toLowerCase())))}function T(R){c=R,n(3,c)}const O=R=>v(R),P=()=>g(1),$=()=>g(d-1),G=R=>g(d-R),N=R=>g(d+(R+1)),U=()=>g(d+1),K=()=>g(i);return t.$$.update=()=>{t.$$.dirty&1&&n(13,s=h.length),t.$$.dirty&8192&&n(5,i=Math.ceil(s/rl)),t.$$.dirty&2&&n(2,r=d*rl),t.$$.dirty&4&&n(4,o=r-rl)},[h,d,r,c,o,i,a,l,g,v,y,E,f,s,T,O,P,$,G,N,U,K]}class gC extends Xe{constructor(e){super(),Ye(this,e,mC,dC,Ge,{})}}function _C(t){let e;return{c(){e=p("h1"),e.textContent="Captacion"},m(n,s){w(n,e,s)},p:fe,i:fe,o:fe,d(n){n&&b(e)}}}class vC extends Xe{constructor(e){super(),Ye(this,e,null,_C,Ge,{})}}function Jd(t,e,n){const s=t.slice();return s[0]=e[n],s}function yC(t){let e,n=t[0].id+"",s;return{c(){e=p("h3"),s=S(n)},m(i,r){w(i,e,r),u(e,s)},p:fe,d(i){i&&b(e)}}}function Zd(t){let e,n=!t[0].selecTP&&yC(t);return{c(){n&&n.c(),e=nn()},m(s,i){n&&n.m(s,i),w(s,e,i)},p(s,i){s[0].selecTP||n.p(s,i)},d(s){n&&n.d(s),s&&b(e)}}}function bC(t){let e,n,s,i=Ti,r=[];for(let o=0;o<i.length;o+=1)r[o]=Zd(Jd(t,i,o));return{c(){e=p("div"),n=p("h1"),n.textContent="Estas en About",s=k();for(let o=0;o<r.length;o+=1)r[o].c();m(e,"class","cont")},m(o,a){w(o,e,a),u(e,n),u(e,s);for(let l=0;l<r.length;l+=1)r[l].m(e,null)},p(o,[a]){if(a&0){i=Ti;let l;for(l=0;l<i.length;l+=1){const c=Jd(o,i,l);r[l]?r[l].p(c,a):(r[l]=Zd(c),r[l].c(),r[l].m(e,null))}for(;l<r.length;l+=1)r[l].d(1);r.length=i.length}},i:fe,o:fe,d(o){o&&b(e),Ve(r,o)}}}function wC(t){return console.log(Ti),Ti.forEach(e=>{e.selecTP||console.log(e.name,e.lastname)}),[]}class kC extends Xe{constructor(e){super(),Ye(this,e,wC,bC,Ge,{})}}function EC(t){let e,n,s,i;return{c(){e=p("div"),n=p("div"),s=S(t[0]),m(n,"id","snackbar"),m(n,"class",i=vu(t[1]?"animation-in":"not-show")+" svelte-1e3w4r3")},m(r,o){w(r,e,o),u(e,n),u(n,s)},p(r,[o]){o&1&&re(s,r[0]),o&2&&i!==(i=vu(r[1]?"animation-in":"not-show")+" svelte-1e3w4r3")&&m(n,"class",i)},i:fe,o:fe,d(r){r&&b(e)}}}function TC(t,e,n){let{message:s=""}=e,{show:i=!1}=e;return t.$$set=r=>{"message"in r&&n(0,s=r.message),"show"in r&&n(1,i=r.show)},[s,i]}class IC extends Xe{constructor(e){super(),Ye(this,e,TC,EC,Ge,{message:0,show:1})}}function CC(t){let e;return{c(){e=S("Registrarse")},m(n,s){w(n,e,s)},d(n){n&&b(e)}}}function SC(t){let e,n,s,i,r,o,a,l,c,h,f,d,g,_,v,y,E,T,O,P,$,G,N,U,K,R,Q,q,W,F,J;return n=new IC({props:{message:t[0],show:t[1]}}),q=new hn({props:{to:"/register",$$slots:{default:[CC]},$$scope:{ctx:t}}}),{c(){e=p("div"),ge(n.$$.fragment),s=k(),i=p("br"),r=p("br"),o=p("br"),a=k(),l=p("div"),c=p("h1"),c.textContent="Inicia sesi\xF3n en tu cuenta",h=k(),f=p("div"),d=p("input"),g=k(),_=p("div"),v=p("input"),y=k(),E=p("br"),T=k(),O=p("div"),P=p("button"),P.textContent="Iniciar sesi\xF3n",$=k(),G=p("p"),G.textContent="O tambi\xE9n",N=k(),U=p("br"),K=k(),R=p("p"),Q=S("\xBFA\xFAn no tienes cuenta? "),ge(q.$$.fragment),m(c,"class","text-center text-login svelte-ftg4em"),m(d,"name","email"),m(d,"type","text"),m(d,"class","input-form svelte-ftg4em"),m(d,"placeholder","Correo"),m(f,"class","center svelte-ftg4em"),m(v,"name","password"),m(v,"type","password"),m(v,"class","input-form svelte-ftg4em"),m(v,"placeholder","Contrase\xF1a"),m(_,"class","center svelte-ftg4em"),m(P,"class","button-signup fondo-color-signup svelte-ftg4em"),m(O,"class","center svelte-ftg4em"),m(G,"class","text-center svelte-ftg4em"),m(R,"class","text-center svelte-ftg4em"),m(l,"class","form-signin svelte-ftg4em")},m(V,le){w(V,e,le),de(n,e,null),u(e,s),u(e,i),u(e,r),u(e,o),u(e,a),u(e,l),u(l,c),u(l,h),u(l,f),u(f,d),u(l,g),u(l,_),u(_,v),u(l,y),u(l,E),u(l,T),u(l,O),u(O,P),u(l,$),u(l,G),u(l,N),u(l,U),u(l,K),u(l,R),u(R,Q),de(q,R,null),W=!0,F||(J=[j(d,"input",t[4]),j(v,"input",t[5]),j(P,"click",t[3])],F=!0)},p(V,[le]){const Z={};le&1&&(Z.message=V[0]),le&2&&(Z.show=V[1]),n.$set(Z);const ce={};le&512&&(ce.$$scope={dirty:le,ctx:V}),q.$set(ce)},i(V){W||(H(n.$$.fragment,V),H(q.$$.fragment,V),W=!0)},o(V){x(n.$$.fragment,V),x(q.$$.fragment,V),W=!1},d(V){V&&b(e),pe(n),pe(q),F=!1,Je(J)}}}function AC(t,e,n){const s=Xs();let i={email:"",password:""},r="",o=!1;const a=d=>{n(0,r=d),n(1,o=!0),setTimeout(()=>{n(1,o=!1)},2800)},l=d=>{i={...i,[d.target.name]:d.target.value}};return[r,o,l,async()=>{try{await TE(O_,i.email,i.password),s("/")}catch(d){d.message==="Firebase: Error (auth/wrong-password)."&&a("Contrase\xF1a incorrecta")}},d=>l(d),d=>l(d)]}class DC extends Xe{constructor(e){super(),Ye(this,e,AC,SC,Ge,{})}}class PC extends Xe{constructor(e){super(),Ye(this,e,null,null,Ge,{})}}function RC(t){let e;return{c(){e=S("Home")},m(n,s){w(n,e,s)},d(n){n&&b(e)}}}function NC(t){let e;return{c(){e=S("Contactos")},m(n,s){w(n,e,s)},d(n){n&&b(e)}}}function OC(t){let e;return{c(){e=S("Propiedades")},m(n,s){w(n,e,s)},d(n){n&&b(e)}}}function LC(t){let e;return{c(){e=S("Agenda")},m(n,s){w(n,e,s)},d(n){n&&b(e)}}}function MC(t){let e;return{c(){e=S("LogOut")},m(n,s){w(n,e,s)},d(n){n&&b(e)}}}function $C(t){let e;return{c(){e=S("About")},m(n,s){w(n,e,s)},d(n){n&&b(e)}}}function UC(t){let e;return{c(){e=S("Registro")},m(n,s){w(n,e,s)},d(n){n&&b(e)}}}function FC(t){let e;return{c(){e=S("Login")},m(n,s){w(n,e,s)},d(n){n&&b(e)}}}function BC(t){let e,n;return e=new bI({}),{c(){ge(e.$$.fragment)},m(s,i){de(e,s,i),n=!0},i(s){n||(H(e.$$.fragment,s),n=!0)},o(s){x(e.$$.fragment,s),n=!1},d(s){pe(e,s)}}}function VC(t){let e,n;return e=new ZI({}),{c(){ge(e.$$.fragment)},m(s,i){de(e,s,i),n=!0},i(s){n||(H(e.$$.fragment,s),n=!0)},o(s){x(e.$$.fragment,s),n=!1},d(s){pe(e,s)}}}function jC(t){let e,n;return e=new gC({}),{c(){ge(e.$$.fragment)},m(s,i){de(e,s,i),n=!0},i(s){n||(H(e.$$.fragment,s),n=!0)},o(s){x(e.$$.fragment,s),n=!1},d(s){pe(e,s)}}}function qC(t){let e,n;return e=new vC({}),{c(){ge(e.$$.fragment)},m(s,i){de(e,s,i),n=!0},i(s){n||(H(e.$$.fragment,s),n=!0)},o(s){x(e.$$.fragment,s),n=!1},d(s){pe(e,s)}}}function HC(t){let e,n;return e=new JT({}),{c(){ge(e.$$.fragment)},m(s,i){de(e,s,i),n=!0},i(s){n||(H(e.$$.fragment,s),n=!0)},o(s){x(e.$$.fragment,s),n=!1},d(s){pe(e,s)}}}function zC(t){let e,n;return e=new eI({}),{c(){ge(e.$$.fragment)},m(s,i){de(e,s,i),n=!0},i(s){n||(H(e.$$.fragment,s),n=!0)},o(s){x(e.$$.fragment,s),n=!1},d(s){pe(e,s)}}}function KC(t){let e,n;return e=new kC({}),{c(){ge(e.$$.fragment)},m(s,i){de(e,s,i),n=!0},i(s){n||(H(e.$$.fragment,s),n=!0)},o(s){x(e.$$.fragment,s),n=!1},d(s){pe(e,s)}}}function GC(t){let e,n;return e=new PC({}),{c(){ge(e.$$.fragment)},m(s,i){de(e,s,i),n=!0},i(s){n||(H(e.$$.fragment,s),n=!0)},o(s){x(e.$$.fragment,s),n=!1},d(s){pe(e,s)}}}function WC(t){let e,n;return e=new DC({}),{c(){ge(e.$$.fragment)},m(s,i){de(e,s,i),n=!0},i(s){n||(H(e.$$.fragment,s),n=!0)},o(s){x(e.$$.fragment,s),n=!1},d(s){pe(e,s)}}}function QC(t){let e,n;return e=new iI({}),{c(){ge(e.$$.fragment)},m(s,i){de(e,s,i),n=!0},i(s){n||(H(e.$$.fragment,s),n=!0)},o(s){x(e.$$.fragment,s),n=!1},d(s){pe(e,s)}}}function YC(t){let e,n,s,i,r,o,a,l,c,h,f,d,g,_,v,y,E,T,O,P,$,G,N,U,K,R,Q,q,W,F,J,V,le,Z,ce,ie,M,C,L,X,B,ue,Le,D,se,_e,Fe;return d=new hn({props:{to:"/",$$slots:{default:[RC]},$$scope:{ctx:t}}}),_=new hn({props:{to:"contactos",$$slots:{default:[NC]},$$scope:{ctx:t}}}),y=new hn({props:{to:"propiedades",$$slots:{default:[OC]},$$scope:{ctx:t}}}),T=new hn({props:{to:"agenda",$$slots:{default:[LC]},$$scope:{ctx:t}}}),P=new hn({props:{to:"/about",$$slots:{default:[MC]},$$scope:{ctx:t}}}),P.$on("click",xC),G=new hn({props:{to:"about",$$slots:{default:[$C]},$$scope:{ctx:t}}}),U=new hn({props:{to:"register",$$slots:{default:[UC]},$$scope:{ctx:t}}}),R=new hn({props:{to:"login",$$slots:{default:[FC]},$$scope:{ctx:t}}}),q=new Rn({props:{path:"/",$$slots:{default:[BC]},$$scope:{ctx:t}}}),F=new Rn({props:{path:"/contactos",$$slots:{default:[VC]},$$scope:{ctx:t}}}),V=new Rn({props:{path:"propiedades",$$slots:{default:[jC]},$$scope:{ctx:t}}}),Z=new Rn({props:{path:"captacion",$$slots:{default:[qC]},$$scope:{ctx:t}}}),ie=new Rn({props:{path:"agenda",$$slots:{default:[HC]},$$scope:{ctx:t}}}),C=new Rn({props:{path:"sinergias",$$slots:{default:[zC]},$$scope:{ctx:t}}}),X=new Rn({props:{path:"about",$$slots:{default:[KC]},$$scope:{ctx:t}}}),ue=new Rn({props:{path:"logout",$$slots:{default:[GC]},$$scope:{ctx:t}}}),D=new Rn({props:{path:"login",$$slots:{default:[WC]},$$scope:{ctx:t}}}),_e=new Rn({props:{path:"register",$$slots:{default:[QC]},$$scope:{ctx:t}}}),{c(){e=p("div"),n=p("img"),i=k(),r=p("label"),o=p("img"),l=k(),c=p("input"),h=k(),f=p("div"),ge(d.$$.fragment),g=k(),ge(_.$$.fragment),v=k(),ge(y.$$.fragment),E=k(),ge(T.$$.fragment),O=k(),ge(P.$$.fragment),$=k(),ge(G.$$.fragment),N=k(),ge(U.$$.fragment),K=k(),ge(R.$$.fragment),Q=k(),ge(q.$$.fragment),W=k(),ge(F.$$.fragment),J=k(),ge(V.$$.fragment),le=k(),ge(Z.$$.fragment),ce=k(),ge(ie.$$.fragment),M=k(),ge(C.$$.fragment),L=k(),ge(X.$$.fragment),B=k(),ge(ue.$$.fragment),Le=k(),ge(D.$$.fragment),se=k(),ge(_e.$$.fragment),tt(n.src,s=Op)||m(n,"src",s),m(n,"alt","MatchHome"),m(n,"class","nav__logo svelte-1viw6tr"),tt(o.src,a=hy)||m(o,"src",a),m(o,"class","nav__img svelte-1viw6tr"),m(o,"alt","menu"),m(r,"class","nav__label svelte-1viw6tr"),m(r,"for","menu"),m(c,"type","checkbox"),m(c,"id","menu"),m(c,"class","nav__input svelte-1viw6tr"),m(f,"class","nav__menu svelte-1viw6tr"),m(e,"class","nav__container svelte-1viw6tr")},m(A,Y){w(A,e,Y),u(e,n),u(e,i),u(e,r),u(r,o),u(e,l),u(e,c),u(e,h),u(e,f),de(d,f,null),u(f,g),de(_,f,null),u(f,v),de(y,f,null),u(f,E),de(T,f,null),u(f,O),de(P,f,null),u(f,$),de(G,f,null),u(f,N),de(U,f,null),u(f,K),de(R,f,null),w(A,Q,Y),de(q,A,Y),w(A,W,Y),de(F,A,Y),w(A,J,Y),de(V,A,Y),w(A,le,Y),de(Z,A,Y),w(A,ce,Y),de(ie,A,Y),w(A,M,Y),de(C,A,Y),w(A,L,Y),de(X,A,Y),w(A,B,Y),de(ue,A,Y),w(A,Le,Y),de(D,A,Y),w(A,se,Y),de(_e,A,Y),Fe=!0},p(A,Y){const Me={};Y&2&&(Me.$$scope={dirty:Y,ctx:A}),d.$set(Me);const z={};Y&2&&(z.$$scope={dirty:Y,ctx:A}),_.$set(z);const me={};Y&2&&(me.$$scope={dirty:Y,ctx:A}),y.$set(me);const oe={};Y&2&&(oe.$$scope={dirty:Y,ctx:A}),T.$set(oe);const xe={};Y&2&&(xe.$$scope={dirty:Y,ctx:A}),P.$set(xe);const bn={};Y&2&&(bn.$$scope={dirty:Y,ctx:A}),G.$set(bn);const St={};Y&2&&(St.$$scope={dirty:Y,ctx:A}),U.$set(St);const At={};Y&2&&(At.$$scope={dirty:Y,ctx:A}),R.$set(At);const sn={};Y&2&&(sn.$$scope={dirty:Y,ctx:A}),q.$set(sn);const Jt={};Y&2&&(Jt.$$scope={dirty:Y,ctx:A}),F.$set(Jt);const Mt={};Y&2&&(Mt.$$scope={dirty:Y,ctx:A}),V.$set(Mt);const Ht={};Y&2&&(Ht.$$scope={dirty:Y,ctx:A}),Z.$set(Ht);const ht={};Y&2&&(ht.$$scope={dirty:Y,ctx:A}),ie.$set(ht);const mn={};Y&2&&(mn.$$scope={dirty:Y,ctx:A}),C.$set(mn);const ot={};Y&2&&(ot.$$scope={dirty:Y,ctx:A}),X.$set(ot);const ft={};Y&2&&(ft.$$scope={dirty:Y,ctx:A}),ue.$set(ft);const rn={};Y&2&&(rn.$$scope={dirty:Y,ctx:A}),D.$set(rn);const lt={};Y&2&&(lt.$$scope={dirty:Y,ctx:A}),_e.$set(lt)},i(A){Fe||(H(d.$$.fragment,A),H(_.$$.fragment,A),H(y.$$.fragment,A),H(T.$$.fragment,A),H(P.$$.fragment,A),H(G.$$.fragment,A),H(U.$$.fragment,A),H(R.$$.fragment,A),H(q.$$.fragment,A),H(F.$$.fragment,A),H(V.$$.fragment,A),H(Z.$$.fragment,A),H(ie.$$.fragment,A),H(C.$$.fragment,A),H(X.$$.fragment,A),H(ue.$$.fragment,A),H(D.$$.fragment,A),H(_e.$$.fragment,A),Fe=!0)},o(A){x(d.$$.fragment,A),x(_.$$.fragment,A),x(y.$$.fragment,A),x(T.$$.fragment,A),x(P.$$.fragment,A),x(G.$$.fragment,A),x(U.$$.fragment,A),x(R.$$.fragment,A),x(q.$$.fragment,A),x(F.$$.fragment,A),x(V.$$.fragment,A),x(Z.$$.fragment,A),x(ie.$$.fragment,A),x(C.$$.fragment,A),x(X.$$.fragment,A),x(ue.$$.fragment,A),x(D.$$.fragment,A),x(_e.$$.fragment,A),Fe=!1},d(A){A&&b(e),pe(d),pe(_),pe(y),pe(T),pe(P),pe(G),pe(U),pe(R),A&&b(Q),pe(q,A),A&&b(W),pe(F,A),A&&b(J),pe(V,A),A&&b(le),pe(Z,A),A&&b(ce),pe(ie,A),A&&b(M),pe(C,A),A&&b(L),pe(X,A),A&&b(B),pe(ue,A),A&&b(Le),pe(D,A),A&&b(se),pe(_e,A)}}}function XC(t){let e,n,s;return n=new ec({props:{$$slots:{default:[YC]},$$scope:{ctx:t}}}),{c(){e=p("nav"),ge(n.$$.fragment),m(e,"class","nav svelte-1viw6tr")},m(i,r){w(i,e,r),de(n,e,null),s=!0},p(i,[r]){const o={};r&2&&(o.$$scope={dirty:r,ctx:i}),n.$set(o)},i(i){s||(H(n.$$.fragment,i),s=!0)},o(i){x(n.$$.fragment,i),s=!1},d(i){i&&b(e),pe(n)}}}async function xC(){}function JC(t){return dI.subscribe(e=>{}),[]}class ZC extends Xe{constructor(e){super(),Ye(this,e,JC,XC,Ge,{})}}function ep(t){let e,n,s,i,r,o,a;return{c(){e=p("div"),n=p("h1"),n.textContent="Bienvendo a",s=k(),i=p("img"),o=k(),a=p("div"),a.innerHTML=`<p class="desc__intro svelte-1kx2964">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod aut aliquam, expedita perferendis consequatur modi omnis! Nostrum iste necessitatibus quisquam numquam, aliquam ipsum. Sit, similique quis. Fuga vitae possimus quisquam quam. Unde accusantium neque veniam reprehenderit, laborum, magni ut quasi asperiores a amet fugiat non, sapiente obcaecati voluptas ab! Nostrum!</p> 
        <p><strong>www.matchhome.net</strong></p>`,m(n,"class","title svelte-1kx2964"),tt(i.src,r=Op)||m(i,"src",r),m(i,"alt","MatchHome"),m(i,"class","svelte-1kx2964"),m(a,"class",""),m(e,"class","intro svelte-1kx2964")},m(l,c){w(l,e,c),u(e,n),u(e,s),u(e,i),u(e,o),u(e,a)},p:fe,d(l){l&&b(e)}}}function eS(t){let e,n,s,i,r;n=new ZC({});let o=t[0]&&ep();return{c(){e=p("nav"),ge(n.$$.fragment),s=k(),i=p("body"),o&&o.c(),m(e,"class","navBar")},m(a,l){w(a,e,l),de(n,e,null),w(a,s,l),w(a,i,l),o&&o.m(i,null),r=!0},p(a,[l]){a[0]?o?o.p(a,l):(o=ep(),o.c(),o.m(i,null)):o&&(o.d(1),o=null)},i(a){r||(H(n.$$.fragment,a),r=!0)},o(a){x(n.$$.fragment,a),r=!1},d(a){a&&b(e),pe(n),a&&b(s),a&&b(i),o&&o.d()}}}function tS(t,e,n){let s=!0;return setTimeout(()=>{n(0,s=!1)},1500),[s]}class nS extends Xe{constructor(e){super(),Ye(this,e,tS,eS,Ge,{})}}new nS({target:document.getElementById("app")});
