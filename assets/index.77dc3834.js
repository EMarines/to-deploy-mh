(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function fe(){}const xd=t=>t;function Ot(t,e){for(const n in e)t[n]=e[n];return t}function Jd(t){return t()}function mu(){return Object.create(null)}function Xe(t){t.forEach(Jd)}function Qo(t){return typeof t=="function"}function ze(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let Xr;function et(t,e){return Xr||(Xr=document.createElement("a")),Xr.href=e,t===Xr.href}function H_(t){return Object.keys(t).length===0}function zl(t,...e){if(t==null)return fe;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function pi(t){let e;return zl(t,n=>e=n)(),e}function Oe(t,e,n){t.$$.on_destroy.push(zl(e,n))}function Gl(t,e,n,s){if(t){const i=Zd(t,e,n,s);return t[0](i)}}function Zd(t,e,n,s){return t[1]&&s?Ot(n.ctx.slice(),t[1](s(e))):n.ctx}function Wl(t,e,n,s){if(t[2]&&s){const i=t[2](s(n));if(e.dirty===void 0)return i;if(typeof i=="object"){const r=[],o=Math.max(e.dirty.length,i.length);for(let a=0;a<o;a+=1)r[a]=e.dirty[a]|i[a];return r}return e.dirty|i}return e.dirty}function Ql(t,e,n,s,i,r){if(i){const o=Zd(e,n,s,r);t.p(o,i)}}function Yl(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let s=0;s<n;s++)e[s]=-1;return e}return-1}function _o(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function vo(t,e){const n={};e=new Set(e);for(const s in t)!e.has(s)&&s[0]!=="$"&&(n[s]=t[s]);return n}function gu(t){return t==null?"":t}function Le(t,e,n){return t.set(n),e}const ep=typeof window<"u";let K_=ep?()=>window.performance.now():()=>Date.now(),Xl=ep?t=>requestAnimationFrame(t):fe;const ci=new Set;function tp(t){ci.forEach(e=>{e.c(t)||(ci.delete(e),e.f())}),ci.size!==0&&Xl(tp)}function z_(t){let e;return ci.size===0&&Xl(tp),{promise:new Promise(n=>{ci.add(e={c:t,f:n})}),abort(){ci.delete(e)}}}function u(t,e){t.appendChild(e)}function np(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function G_(t){const e=p("style");return W_(np(t),e),e.sheet}function W_(t,e){return u(t.head||t,e),e.sheet}function w(t,e,n){t.insertBefore(e,n||null)}function b(t){t.parentNode.removeChild(t)}function qe(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function p(t){return document.createElement(t)}function S(t){return document.createTextNode(t)}function k(){return S(" ")}function tn(){return S("")}function V(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function _n(t){return function(e){return e.preventDefault(),t.call(this,e)}}function g(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Ln(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const s in e)e[s]==null?t.removeAttribute(s):s==="style"?t.style.cssText=e[s]:s==="__value"?t.value=t[s]=e[s]:n[s]&&n[s].set?t[s]=e[s]:g(t,s,e[s])}function Ft(t,e,n){const s=new Set;for(let i=0;i<t.length;i+=1)t[i].checked&&s.add(t[i].__value);return n||s.delete(e),Array.from(s)}function ms(t){return t===""?null:+t}function Q_(t){return Array.from(t.childNodes)}function ae(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function ge(t,e){t.value=e==null?"":e}function Ue(t,e){for(let n=0;n<t.options.length;n+=1){const s=t.options[n];if(s.__value===e){s.selected=!0;return}}t.selectedIndex=-1}function Ut(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}function ks(t,e,n){t.classList[n?"add":"remove"](e)}function sp(t,e,{bubbles:n=!1,cancelable:s=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,s,e),i}function _u(t,e){return new t(e)}const yo=new Map;let bo=0;function Y_(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function X_(t,e){const n={stylesheet:G_(e),rules:{}};return yo.set(t,n),n}function vu(t,e,n,s,i,r,o,a=0){const l=16.666/s;let c=`{
`;for(let y=0;y<=1;y+=l){const E=e+(n-e)*r(y);c+=y*100+`%{${o(E,1-E)}}
`}const h=c+`100% {${o(n,1-n)}}
}`,f=`__svelte_${Y_(h)}_${a}`,d=np(t),{stylesheet:m,rules:_}=yo.get(d)||X_(d,t);_[f]||(_[f]=!0,m.insertRule(`@keyframes ${f} ${h}`,m.cssRules.length));const v=t.style.animation||"";return t.style.animation=`${v?`${v}, `:""}${f} ${s}ms linear ${i}ms 1 both`,bo+=1,f}function x_(t,e){const n=(t.style.animation||"").split(", "),s=n.filter(e?r=>r.indexOf(e)<0:r=>r.indexOf("__svelte")===-1),i=n.length-s.length;i&&(t.style.animation=s.join(", "),bo-=i,bo||J_())}function J_(){Xl(()=>{bo||(yo.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&b(e)}),yo.clear())})}let Zi;function zi(t){Zi=t}function vr(){if(!Zi)throw new Error("Function called outside component initialization");return Zi}function Z_(t){vr().$$.on_mount.push(t)}function ev(t){vr().$$.on_destroy.push(t)}function ip(){const t=vr();return(e,n,{cancelable:s=!1}={})=>{const i=t.$$.callbacks[e];if(i){const r=sp(e,n,{cancelable:s});return i.slice().forEach(o=>{o.call(t,r)}),!r.defaultPrevented}return!0}}function Gi(t,e){return vr().$$.context.set(t,e),e}function Es(t){return vr().$$.context.get(t)}function tv(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(s=>s.call(this,e))}const Ui=[],Jn=[],oo=[],al=[],rp=Promise.resolve();let ll=!1;function op(){ll||(ll=!0,rp.then(ap))}function nv(){return op(),rp}function xe(t){oo.push(t)}function Vs(t){al.push(t)}const Oa=new Set;let xr=0;function ap(){const t=Zi;do{for(;xr<Ui.length;){const e=Ui[xr];xr++,zi(e),sv(e.$$)}for(zi(null),Ui.length=0,xr=0;Jn.length;)Jn.pop()();for(let e=0;e<oo.length;e+=1){const n=oo[e];Oa.has(n)||(Oa.add(n),n())}oo.length=0}while(Ui.length);for(;al.length;)al.pop()();ll=!1,Oa.clear(),zi(t)}function sv(t){if(t.fragment!==null){t.update(),Xe(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(xe)}}let Mi;function iv(){return Mi||(Mi=Promise.resolve(),Mi.then(()=>{Mi=null})),Mi}function La(t,e,n){t.dispatchEvent(sp(`${e?"intro":"outro"}${n}`))}const ao=new Set;let Wn;function bt(){Wn={r:0,c:[],p:Wn}}function wt(){Wn.r||Xe(Wn.c),Wn=Wn.p}function K(t,e){t&&t.i&&(ao.delete(t),t.i(e))}function Z(t,e,n,s){if(t&&t.o){if(ao.has(t))return;ao.add(t),Wn.c.push(()=>{ao.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}const rv={duration:0};function fn(t,e,n,s){let i=e(t,n),r=s?0:1,o=null,a=null,l=null;function c(){l&&x_(t,l)}function h(d,m){const _=d.b-r;return m*=Math.abs(_),{a:r,b:d.b,d:_,duration:m,start:d.start,end:d.start+m,group:d.group}}function f(d){const{delay:m=0,duration:_=300,easing:v=xd,tick:y=fe,css:E}=i||rv,I={start:K_()+m,b:d};d||(I.group=Wn,Wn.r+=1),o||a?a=I:(E&&(c(),l=vu(t,r,d,_,m,v,E)),d&&y(0,1),o=h(I,_),xe(()=>La(t,d,"start")),z_(O=>{if(a&&O>a.start&&(o=h(a,_),a=null,La(t,o.b,"start"),E&&(c(),l=vu(t,r,o.b,o.duration,0,v,i.css))),o){if(O>=o.end)y(r=o.b,1-r),La(t,o.b,"end"),a||(o.b?c():--o.group.r||Xe(o.group.c)),o=null;else if(O>=o.start){const D=O-o.start;r=o.a+o.d*v(D/o.duration),y(r,1-r)}}return!!(o||a)}))}return{run(d){Qo(i)?iv().then(()=>{i=i(),f(d)}):f(d)},end(){c(),o=a=null}}}function vn(t,e){const n={},s={},i={$$scope:1};let r=t.length;for(;r--;){const o=t[r],a=e[r];if(a){for(const l in o)l in a||(s[l]=1);for(const l in a)i[l]||(n[l]=a[l],i[l]=1);t[r]=a}else for(const l in o)i[l]=1}for(const o in s)o in n||(n[o]=void 0);return n}function Zn(t){return typeof t=="object"&&t!==null?t:{}}function js(t,e,n){const s=t.$$.props[e];s!==void 0&&(t.$$.bound[s]=n,n(t.$$.ctx[s]))}function de(t){t&&t.c()}function ue(t,e,n,s){const{fragment:i,after_update:r}=t.$$;i&&i.m(e,n),s||xe(()=>{const o=t.$$.on_mount.map(Jd).filter(Qo);t.$$.on_destroy?t.$$.on_destroy.push(...o):Xe(o),t.$$.on_mount=[]}),r.forEach(xe)}function he(t,e){const n=t.$$;n.fragment!==null&&(Xe(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ov(t,e){t.$$.dirty[0]===-1&&(Ui.push(t),op(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function We(t,e,n,s,i,r,o,a=[-1]){const l=Zi;zi(t);const c=t.$$={fragment:null,ctx:[],props:r,update:fe,not_equal:i,bound:mu(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:mu(),dirty:a,skip_bound:!1,root:e.target||l.$$.root};o&&o(c.root);let h=!1;if(c.ctx=n?n(t,e.props||{},(f,d,...m)=>{const _=m.length?m[0]:d;return c.ctx&&i(c.ctx[f],c.ctx[f]=_)&&(!c.skip_bound&&c.bound[f]&&c.bound[f](_),h&&ov(t,f)),d}):[],c.update(),h=!0,Xe(c.before_update),c.fragment=s?s(c.ctx):!1,e.target){if(e.hydrate){const f=Q_(e.target);c.fragment&&c.fragment.l(f),f.forEach(b)}else c.fragment&&c.fragment.c();e.intro&&K(t.$$.fragment),ue(t,e.target,e.anchor,e.customElement),ap()}zi(l)}class Qe{$destroy(){he(this,1),this.$destroy=fe}$on(e,n){if(!Qo(n))return fe;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const i=s.indexOf(n);i!==-1&&s.splice(i,1)}}$set(e){this.$$set&&!H_(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const yu=t=>typeof t>"u",lp=t=>typeof t=="function",cp=t=>typeof t=="number";function av(t){return!t.defaultPrevented&&t.button===0&&!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function up(){let t=0;return()=>t++}function lv(){return Math.random().toString(36).substring(2)}const Is=typeof window>"u";function hp(t,e,n){return t.addEventListener(e,n),()=>t.removeEventListener(e,n)}const cl=(t,e)=>t?{}:{style:e},ri=t=>({"aria-hidden":"true",...cl(t,"display:none;")}),si=[];function cv(t,e){return{subscribe:yt(t,e).subscribe}}function yt(t,e=fe){let n;const s=new Set;function i(a){if(ze(t,a)&&(t=a,n)){const l=!si.length;for(const c of s)c[1](),si.push(c,t);if(l){for(let c=0;c<si.length;c+=2)si[c][0](si[c+1]);si.length=0}}}function r(a){i(a(t))}function o(a,l=fe){const c=[a,l];return s.add(c),s.size===1&&(n=e(i)||fe),a(t),()=>{s.delete(c),s.size===0&&(n(),n=null)}}return{set:i,update:r,subscribe:o}}function uv(t,e,n){const s=!Array.isArray(t),i=s?[t]:t,r=e.length<2;return cv(n,o=>{let a=!1;const l=[];let c=0,h=fe;const f=()=>{if(c)return;h();const m=e(s?l[0]:l,o);r?o(m):h=Qo(m)?m:fe},d=i.map((m,_)=>zl(m,v=>{l[_]=v,c&=~(1<<_),a&&f()},()=>{c|=1<<_}));return a=!0,f(),function(){Xe(d),h()}})}const yr=t=>`@@svnav-ctx__${t}`,ul=yr("LOCATION"),mi=yr("ROUTER"),fp=yr("ROUTE"),hv=yr("ROUTE_PARAMS"),fv=yr("FOCUS_ELEM"),dp=/^:(.+)/,Fi=(t,e,n)=>t.substr(e,n),hl=(t,e)=>Fi(t,0,e.length)===e,dv=t=>t==="",pv=t=>dp.test(t),pp=t=>t[0]==="*",mv=t=>t.replace(/\*.*$/,""),mp=t=>t.replace(/(^\/+|\/+$)/g,"");function Bn(t,e=!1){const n=mp(t).split("/");return e?n.filter(Boolean):n}const Ma=(t,e)=>t+(e?`?${e}`:""),xl=t=>`/${mp(t)}`;function br(...t){const e=s=>Bn(s,!0).join("/"),n=t.map(e).join("/");return xl(n)}const Jl=1,Yo=2,qs=3,gv=4,gp=5,_v=6,_p=7,vv=8,yv=9,vp=10,yp=11,bv={[Jl]:"Link",[Yo]:"Route",[qs]:"Router",[gv]:"useFocus",[gp]:"useLocation",[_v]:"useMatch",[_p]:"useNavigate",[vv]:"useParams",[yv]:"useResolvable",[vp]:"useResolve",[yp]:"navigate"},Zl=t=>bv[t];function wv(t,e){let n;return t===Yo?n=e.path?`path="${e.path}"`:"default":t===Jl?n=`to="${e.to}"`:t===qs&&(n=`basepath="${e.basepath||""}"`),`<${Zl(t)} ${n||""} />`}function kv(t,e,n,s){const i=n&&wv(s||t,n),r=i?`

Occurred in: ${i}`:"",o=Zl(t),a=lp(e)?e(o):e;return`<${o}> ${a}${r}`}const bp=t=>(...e)=>t(kv(...e)),wp=bp(t=>{throw new Error(t)}),wo=bp(console.warn),bu=4,Ev=3,Iv=2,Tv=1,Cv=1;function Sv(t,e){const n=t.default?0:Bn(t.fullPath).reduce((s,i)=>{let r=s;return r+=bu,dv(i)?r+=Cv:pv(i)?r+=Iv:pp(i)?r-=bu+Tv:r+=Ev,r},0);return{route:t,score:n,index:e}}function Av(t){return t.map(Sv).sort((e,n)=>e.score<n.score?1:e.score>n.score?-1:e.index-n.index)}function kp(t,e){let n,s;const[i]=e.split("?"),r=Bn(i),o=r[0]==="",a=Av(t);for(let l=0,c=a.length;l<c;l++){const{route:h}=a[l];let f=!1;const d={},m=E=>({...h,params:d,uri:E});if(h.default){s=m(e);continue}const _=Bn(h.fullPath),v=Math.max(r.length,_.length);let y=0;for(;y<v;y++){const E=_[y],I=r[y];if(!yu(E)&&pp(E)){const D=E==="*"?"*":E.slice(1);d[D]=r.slice(y).map(decodeURIComponent).join("/");break}if(yu(I)){f=!0;break}const O=dp.exec(E);if(O&&!o){const D=decodeURIComponent(I);d[O[1]]=D}else if(E!==I){f=!0;break}}if(!f){n=m(br(...r.slice(0,y)));break}}return n||s||null}function Ep(t,e){return kp([t],e)}function Dv(t,e){if(hl(t,"/"))return t;const[n,s]=t.split("?"),[i]=e.split("?"),r=Bn(n),o=Bn(i);if(r[0]==="")return Ma(i,s);if(!hl(r[0],".")){const c=o.concat(r).join("/");return Ma((i==="/"?"":"/")+c,s)}const a=o.concat(r),l=[];return a.forEach(c=>{c===".."?l.pop():c!=="."&&l.push(c)}),Ma(`/${l.join("/")}`,s)}function wu(t,e){const{pathname:n,hash:s="",search:i="",state:r}=t,o=Bn(e,!0),a=Bn(n,!0);for(;o.length;)o[0]!==a[0]&&wp(qs,`Invalid state: All locations must begin with the basepath "${e}", found "${n}"`),o.shift(),a.shift();return{pathname:br(...a),hash:s,search:i,state:r}}const ku=t=>t.length===1?"":t,ec=t=>{const e=t.indexOf("?"),n=t.indexOf("#"),s=e!==-1,i=n!==-1,r=i?ku(Fi(t,n)):"",o=i?Fi(t,0,n):t,a=s?ku(Fi(o,e)):"";return{pathname:(s?Fi(o,0,e):o)||"/",search:a,hash:r}},Pv=t=>{const{pathname:e,search:n,hash:s}=t;return e+n+s};function Rv(t,e,n){return br(n,Dv(t,e))}function Nv(t,e){const n=xl(mv(t)),s=Bn(n,!0),i=Bn(e,!0).slice(0,s.length),r=Ep({fullPath:n},br(...i));return r&&r.uri}const $a="POP",Ov="PUSH",Lv="REPLACE";function Ua(t){return{...t.location,pathname:encodeURI(decodeURI(t.location.pathname)),state:t.history.state,_key:t.history.state&&t.history.state._key||"initial"}}function Mv(t){let e=[],n=Ua(t),s=$a;const i=(r=e)=>r.forEach(o=>o({location:n,action:s}));return{get location(){return n},listen(r){e.push(r);const o=()=>{n=Ua(t),s=$a,i([r])};i([r]);const a=hp(t,"popstate",o);return()=>{a(),e=e.filter(l=>l!==r)}},navigate(r,o){const{state:a={},replace:l=!1}=o||{};if(s=l?Lv:Ov,cp(r))o&&wo(yp,"Navigation options (state or replace) are not supported, when passing a number as the first argument to navigate. They are ignored."),s=$a,t.history.go(r);else{const c={...a,_key:lv()};try{t.history[l?"replaceState":"pushState"](c,"",r)}catch{t.location[l?"replace":"assign"](r)}}n=Ua(t),i()}}}function Fa(t,e){return{...ec(e),state:t}}function $v(t="/"){let e=0,n=[Fa(null,t)];return{get entries(){return n},get location(){return n[e]},addEventListener(){},removeEventListener(){},history:{get state(){return n[e].state},pushState(s,i,r){e++,n=n.slice(0,e),n.push(Fa(s,r))},replaceState(s,i,r){n[e]=Fa(s,r)},go(s){const i=e+s;i<0||i>n.length-1||(e=i)}}}}const Uv=!!(!Is&&window.document&&window.document.createElement),Fv=!Is&&window.location.origin==="null",Bv=Mv(Uv&&!Fv?window:$v());let Gn=null,Ip=!0;function Vv(t,e){const n=document.querySelectorAll("[data-svnav-router]");for(let s=0;s<n.length;s++){const i=n[s],r=Number(i.dataset.svnavRouter);if(r===t)return!0;if(r===e)return!1}return!1}function jv(t){(!Gn||t.level>Gn.level||t.level===Gn.level&&Vv(t.routerId,Gn.routerId))&&(Gn=t)}function qv(){Gn=null}function Hv(){Ip=!1}function Eu(t){if(!t)return!1;const e="tabindex";try{if(!t.hasAttribute(e)){t.setAttribute(e,"-1");let n;n=hp(t,"blur",()=>{t.removeAttribute(e),n()})}return t.focus(),document.activeElement===t}catch{return!1}}function Kv(t,e){return Number(t.dataset.svnavRouteEnd)===e}function zv(t){return/^H[1-6]$/i.test(t.tagName)}function Iu(t,e=document){return e.querySelector(t)}function Gv(t){let n=Iu(`[data-svnav-route-start="${t}"]`).nextElementSibling;for(;!Kv(n,t);){if(zv(n))return n;const s=Iu("h1,h2,h3,h4,h5,h6",n);if(s)return s;n=n.nextElementSibling}return null}function Wv(t){Promise.resolve(pi(t.focusElement)).then(e=>{const n=e||Gv(t.id);n||wo(qs,`Could not find an element to focus. You should always render a header for accessibility reasons, or set a custom focus element via the "useFocus" hook. If you don't want this Route or Router to manage focus, pass "primary={false}" to it.`,t,Yo),!Eu(n)&&Eu(document.documentElement)})}const Qv=(t,e,n)=>(s,i)=>nv().then(()=>{if(!Gn||Ip){Hv();return}if(s&&Wv(Gn.route),t.announcements&&i){const{path:r,fullPath:o,meta:a,params:l,uri:c}=Gn.route,h=t.createAnnouncement({path:r,fullPath:o,meta:a,params:l,uri:c},pi(n));Promise.resolve(h).then(f=>{e.set(f)})}qv()}),Tu="position:fixed;top:-1px;left:0;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;";function Yv(t){let e,n,s=[{role:"status"},{"aria-atomic":"true"},{"aria-live":"polite"},{"data-svnav-announcer":""},cl(t[6],Tu)],i={};for(let r=0;r<s.length;r+=1)i=Ot(i,s[r]);return{c(){e=p("div"),n=S(t[0]),Ln(e,i)},m(r,o){w(r,e,o),u(e,n)},p(r,o){o[0]&1&&ae(n,r[0]),Ln(e,i=vn(s,[{role:"status"},{"aria-atomic":"true"},{"aria-live":"polite"},{"data-svnav-announcer":""},cl(r[6],Tu)]))},d(r){r&&b(e)}}}function Xv(t){let e,n,s,i,r,o=[ri(t[6]),{"data-svnav-router":t[3]}],a={};for(let f=0;f<o.length;f+=1)a=Ot(a,o[f]);const l=t[22].default,c=Gl(l,t,t[21],null);let h=t[2]&&t[4]&&t[1].announcements&&Yv(t);return{c(){e=p("div"),n=k(),c&&c.c(),s=k(),h&&h.c(),i=tn(),Ln(e,a)},m(f,d){w(f,e,d),w(f,n,d),c&&c.m(f,d),w(f,s,d),h&&h.m(f,d),w(f,i,d),r=!0},p(f,d){Ln(e,a=vn(o,[ri(f[6]),{"data-svnav-router":f[3]}])),c&&c.p&&(!r||d[0]&2097152)&&Ql(c,l,f,f[21],r?Wl(l,f[21],d,null):Yl(f[21]),null),f[2]&&f[4]&&f[1].announcements&&h.p(f,d)},i(f){r||(K(c,f),r=!0)},o(f){Z(c,f),r=!1},d(f){f&&b(e),f&&b(n),c&&c.d(f),f&&b(s),h&&h.d(f),f&&b(i)}}}const xv=up(),Cu="/";function Jv(t,e,n){let s,i,r,o,a,{$$slots:l={},$$scope:c}=e,{basepath:h=Cu}=e,{url:f=null}=e,{history:d=Bv}=e,{primary:m=!0}=e,{a11y:_={}}=e,{disableInlineStyles:v=!1}=e;const y={createAnnouncement:L=>`Navigated to ${L.uri}`,announcements:!0,..._},E=h,I=xl(h),O=Es(ul),D=Es(mi),$=!O,F=xv(),N=m&&!(D&&!D.manageFocus),q=yt("");Oe(t,q,L=>n(0,a=L));const B=D?D.disableInlineStyles:v,M=yt([]);Oe(t,M,L=>n(20,o=L));const U=yt(null);Oe(t,U,L=>n(18,i=L));let z=!1;const J=$?0:D.level+1,Q=$?yt((()=>wu(Is?ec(f):d.location,I))()):O;Oe(t,Q,L=>n(17,s=L));const G=yt(s);Oe(t,G,L=>n(19,r=L));const se=Qv(y,q,Q),W=L=>R=>R.filter(Y=>Y.id!==L);function A(L){if(Is){if(z)return;const R=Ep(L,s.pathname);if(R)return z=!0,R}else M.update(R=>{const Y=W(L.id)(R);return Y.push(L),Y})}function j(L){M.update(W(L))}return!$&&h!==Cu&&wo(qs,'Only top-level Routers can have a "basepath" prop. It is ignored.',{basepath:h}),$&&(Z_(()=>d.listen(R=>{const Y=wu(R.location,I);G.set(s),Q.set(Y)})),Gi(ul,Q)),Gi(mi,{activeRoute:U,registerRoute:A,unregisterRoute:j,manageFocus:N,level:J,id:F,history:$?d:D.history,basepath:$?I:D.basepath,disableInlineStyles:B}),t.$$set=L=>{"basepath"in L&&n(11,h=L.basepath),"url"in L&&n(12,f=L.url),"history"in L&&n(13,d=L.history),"primary"in L&&n(14,m=L.primary),"a11y"in L&&n(15,_=L.a11y),"disableInlineStyles"in L&&n(16,v=L.disableInlineStyles),"$$scope"in L&&n(21,c=L.$$scope)},t.$$.update=()=>{if(t.$$.dirty[0]&2048&&h!==E&&wo(qs,'You cannot change the "basepath" prop. It is ignored.'),t.$$.dirty[0]&1179648){const L=kp(o,s.pathname);U.set(L)}if(t.$$.dirty[0]&655360&&$){const L=!!s.hash,R=!L&&N,Y=!L||s.pathname!==r.pathname;se(R,Y)}t.$$.dirty[0]&262144&&N&&i&&i.primary&&jv({level:J,routerId:F,route:i})},[a,y,$,F,N,q,B,M,U,Q,G,h,f,d,m,_,v,s,i,r,o,c,l]}class tc extends Qe{constructor(e){super(),We(this,e,Jv,Xv,ze,{basepath:11,url:12,history:13,primary:14,a11y:15,disableInlineStyles:16},null,[-1,-1])}}function wr(t,e,n=mi,s=qs){Es(n)||wp(t,r=>`You cannot use ${r} outside of a ${Zl(s)}.`,e)}const Zv=t=>{const{subscribe:e}=Es(t);return{subscribe:e}};function Tp(){return wr(gp),Zv(ul)}function Cp(){const{history:t}=Es(mi);return t}function Sp(){const t=Es(fp);return t?uv(t,e=>e.base):yt("/")}function Ap(){wr(vp);const t=Sp(),{basepath:e}=Es(mi);return s=>Rv(s,pi(t),e)}function Xs(){wr(_p);const t=Ap(),{navigate:e}=Cp();return(s,i)=>{const r=cp(s)?s:t(s);return e(r,i)}}const ey=t=>({params:t&16,location:t&8}),Su=t=>({params:Is?pi(t[10]):t[4],location:t[3],navigate:t[11]});function Au(t){let e,n;return e=new tc({props:{primary:t[1],$$slots:{default:[sy]},$$scope:{ctx:t}}}),{c(){de(e.$$.fragment)},m(s,i){ue(e,s,i),n=!0},p(s,i){const r={};i&2&&(r.primary=s[1]),i&528409&&(r.$$scope={dirty:i,ctx:s}),e.$set(r)},i(s){n||(K(e.$$.fragment,s),n=!0)},o(s){Z(e.$$.fragment,s),n=!1},d(s){he(e,s)}}}function ty(t){let e;const n=t[18].default,s=Gl(n,t,t[19],Su);return{c(){s&&s.c()},m(i,r){s&&s.m(i,r),e=!0},p(i,r){s&&s.p&&(!e||r&524312)&&Ql(s,n,i,i[19],e?Wl(n,i[19],r,ey):Yl(i[19]),Su)},i(i){e||(K(s,i),e=!0)},o(i){Z(s,i),e=!1},d(i){s&&s.d(i)}}}function ny(t){let e,n,s;const i=[{location:t[3]},{navigate:t[11]},Is?pi(t[10]):t[4],t[12]];var r=t[0];function o(a){let l={};for(let c=0;c<i.length;c+=1)l=Ot(l,i[c]);return{props:l}}return r&&(e=_u(r,o())),{c(){e&&de(e.$$.fragment),n=tn()},m(a,l){e&&ue(e,a,l),w(a,n,l),s=!0},p(a,l){const c=l&7192?vn(i,[l&8&&{location:a[3]},l&2048&&{navigate:a[11]},l&1040&&Zn(Is?pi(a[10]):a[4]),l&4096&&Zn(a[12])]):{};if(r!==(r=a[0])){if(e){bt();const h=e;Z(h.$$.fragment,1,0,()=>{he(h,1)}),wt()}r?(e=_u(r,o()),de(e.$$.fragment),K(e.$$.fragment,1),ue(e,n.parentNode,n)):e=null}else r&&e.$set(c)},i(a){s||(e&&K(e.$$.fragment,a),s=!0)},o(a){e&&Z(e.$$.fragment,a),s=!1},d(a){a&&b(n),e&&he(e,a)}}}function sy(t){let e,n,s,i;const r=[ny,ty],o=[];function a(l,c){return l[0]!==null?0:1}return e=a(t),n=o[e]=r[e](t),{c(){n.c(),s=tn()},m(l,c){o[e].m(l,c),w(l,s,c),i=!0},p(l,c){let h=e;e=a(l),e===h?o[e].p(l,c):(bt(),Z(o[h],1,1,()=>{o[h]=null}),wt(),n=o[e],n?n.p(l,c):(n=o[e]=r[e](l),n.c()),K(n,1),n.m(s.parentNode,s))},i(l){i||(K(n),i=!0)},o(l){Z(n),i=!1},d(l){o[e].d(l),l&&b(s)}}}function iy(t){let e,n,s,i,r,o=[ri(t[7]),{"data-svnav-route-start":t[5]}],a={};for(let f=0;f<o.length;f+=1)a=Ot(a,o[f]);let l=t[2]&&Au(t),c=[ri(t[7]),{"data-svnav-route-end":t[5]}],h={};for(let f=0;f<c.length;f+=1)h=Ot(h,c[f]);return{c(){e=p("div"),n=k(),l&&l.c(),s=k(),i=p("div"),Ln(e,a),Ln(i,h)},m(f,d){w(f,e,d),w(f,n,d),l&&l.m(f,d),w(f,s,d),w(f,i,d),r=!0},p(f,[d]){Ln(e,a=vn(o,[ri(f[7]),{"data-svnav-route-start":f[5]}])),f[2]?l?(l.p(f,d),d&4&&K(l,1)):(l=Au(f),l.c(),K(l,1),l.m(s.parentNode,s)):l&&(bt(),Z(l,1,1,()=>{l=null}),wt()),Ln(i,h=vn(c,[ri(f[7]),{"data-svnav-route-end":f[5]}]))},i(f){r||(K(l),r=!0)},o(f){Z(l),r=!1},d(f){f&&b(e),f&&b(n),l&&l.d(f),f&&b(s),f&&b(i)}}}const ry=up();function oy(t,e,n){let s;const i=["path","component","meta","primary"];let r=vo(e,i),o,a,l,c,{$$slots:h={},$$scope:f}=e,{path:d=""}=e,{component:m=null}=e,{meta:_={}}=e,{primary:v=!0}=e;wr(Yo,e);const y=ry(),{registerRoute:E,unregisterRoute:I,activeRoute:O,disableInlineStyles:D}=Es(mi);Oe(t,O,z=>n(16,o=z));const $=Sp();Oe(t,$,z=>n(17,l=z));const F=Tp();Oe(t,F,z=>n(3,a=z));const N=yt(null);let q;const B=yt(),M=yt({});Oe(t,M,z=>n(4,c=z)),Gi(fp,B),Gi(hv,M),Gi(fv,N);const U=Xs();return Is||ev(()=>I(y)),t.$$set=z=>{n(24,e=Ot(Ot({},e),_o(z))),n(12,r=vo(e,i)),"path"in z&&n(13,d=z.path),"component"in z&&n(0,m=z.component),"meta"in z&&n(14,_=z.meta),"primary"in z&&n(1,v=z.primary),"$$scope"in z&&n(19,f=z.$$scope)},t.$$.update=()=>{if(t.$$.dirty&155658){const z=d==="",J=br(l,d),ie={id:y,path:d,meta:_,default:z,fullPath:z?"":J,base:z?l:Nv(J,a.pathname),primary:v,focusElement:N};B.set(ie),n(15,q=E(ie))}if(t.$$.dirty&98304&&n(2,s=!!(q||o&&o.id===y)),t.$$.dirty&98308&&s){const{params:z}=q||o;M.set(z)}},e=_o(e),[m,v,s,a,c,y,O,D,$,F,M,U,r,d,_,q,o,l,h,f]}class Nn extends Qe{constructor(e){super(),We(this,e,oy,iy,ze,{path:13,component:0,meta:14,primary:1})}}function ay(t){let e,n,s,i;const r=t[13].default,o=Gl(r,t,t[12],null);let a=[{href:t[0]},t[2],t[1]],l={};for(let c=0;c<a.length;c+=1)l=Ot(l,a[c]);return{c(){e=p("a"),o&&o.c(),Ln(e,l)},m(c,h){w(c,e,h),o&&o.m(e,null),n=!0,s||(i=V(e,"click",t[4]),s=!0)},p(c,[h]){o&&o.p&&(!n||h&4096)&&Ql(o,r,c,c[12],n?Wl(r,c[12],h,null):Yl(c[12]),null),Ln(e,l=vn(a,[(!n||h&1)&&{href:c[0]},h&4&&c[2],h&2&&c[1]]))},i(c){n||(K(o,c),n=!0)},o(c){Z(o,c),n=!1},d(c){c&&b(e),o&&o.d(c),s=!1,i()}}}function ly(t,e,n){let s,i,r,o,a,l;const c=["to","replace","state","getProps"];let h=vo(e,c),f,{$$slots:d={},$$scope:m}=e,{to:_}=e,{replace:v=!1}=e,{state:y={}}=e,{getProps:E=null}=e;wr(Jl,e);const I=Tp();Oe(t,I,N=>n(11,f=N));const O=ip(),D=Ap(),{navigate:$}=Cp();function F(N){O("click",N),av(N)&&(N.preventDefault(),$(s,{state:y,replace:o||v}))}return t.$$set=N=>{n(19,e=Ot(Ot({},e),_o(N))),n(18,h=vo(e,c)),"to"in N&&n(5,_=N.to),"replace"in N&&n(6,v=N.replace),"state"in N&&n(7,y=N.state),"getProps"in N&&n(8,E=N.getProps),"$$scope"in N&&n(12,m=N.$$scope)},t.$$.update=()=>{t.$$.dirty&2080&&n(0,s=D(_,f)),t.$$.dirty&2049&&n(10,i=hl(f.pathname,s)),t.$$.dirty&2049&&n(9,r=s===f.pathname),t.$$.dirty&2049&&(o=ec(s)===Pv(f)),t.$$.dirty&512&&n(2,a=r?{"aria-current":"page"}:{}),n(1,l=(()=>{if(lp(E)){const N=E({location:f,href:s,isPartiallyCurrent:i,isCurrent:r});return{...h,...N}}return h})())},e=_o(e),[s,l,a,I,F,_,v,y,E,r,i,f,m,d]}class un extends Qe{constructor(e){super(),We(this,e,ly,ay,ze,{to:5,replace:6,state:7,getProps:8})}}const Dp="/to-deploy-mh/assets/logoMH.9387adb0.png",cy="/to-deploy-mh/assets/menu.9ddfd9f8.svg";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Pp=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},uy=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Rp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,h=r>>2,f=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,m=c&63;l||(m=64,o||(d=64)),s.push(n[h],n[f],n[d],n[m])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Pp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):uy(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||f==null)throw Error();const d=r<<2|a>>4;if(s.push(d),c!==64){const m=a<<4&240|c>>2;if(s.push(m),f!==64){const _=c<<6&192|f;s.push(_)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},hy=function(t){const e=Pp(t);return Rp.encodeByteArray(e,!0)},ko=function(t){return hy(t).replace(/\./g,"")},Np=function(t){try{return Rp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function fy(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Qt())}function dy(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function py(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function my(){const t=Qt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function gy(){return typeof indexedDB=="object"}function _y(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}function vy(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const yy=()=>vy().__FIREBASE_DEFAULTS__,by=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t=process.env.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},wy=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Np(t[1]);return e&&JSON.parse(e)},nc=()=>{try{return yy()||by()||wy()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Op=t=>{var e,n;return(n=(e=nc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},ky=t=>{const e=Op(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Ey=()=>{var t;return(t=nc())===null||t===void 0?void 0:t.config},Lp=t=>{var e;return(e=nc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iy{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Ty(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[ko(JSON.stringify(n)),ko(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cy="FirebaseError";class os extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Cy,Object.setPrototypeOf(this,os.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,kr.prototype.create)}}class kr{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Sy(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new os(i,a,s)}}function Sy(t,e){return t.replace(Ay,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Ay=/\{\$([^}]+)}/g;function Dy(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Eo(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Du(r)&&Du(o)){if(!Eo(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Du(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Er(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Bi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function Vi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Py(t,e){const n=new Ry(t,e);return n.subscribe.bind(n)}class Ry{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Ny(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=Ba),i.error===void 0&&(i.error=Ba),i.complete===void 0&&(i.complete=Ba);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ny(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ba(){}/**
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
 */function Yt(t){return t&&t._delegate?t._delegate:t}class Hs{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Oy{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Iy;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(My(e))try{this.getOrInitializeService({instanceIdentifier:Os})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Os){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Os){return this.instances.has(e)}getOptions(e=Os){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Ly(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Os){return this.component?this.component.multipleInstances?e:Os:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ly(t){return t===Os?void 0:t}function My(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $y{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Oy(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ke;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ke||(Ke={}));const Uy={debug:Ke.DEBUG,verbose:Ke.VERBOSE,info:Ke.INFO,warn:Ke.WARN,error:Ke.ERROR,silent:Ke.SILENT},Fy=Ke.INFO,By={[Ke.DEBUG]:"log",[Ke.VERBOSE]:"log",[Ke.INFO]:"info",[Ke.WARN]:"warn",[Ke.ERROR]:"error"},Vy=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=By[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class sc{constructor(e){this.name=e,this._logLevel=Fy,this._logHandler=Vy,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ke))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Uy[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ke.DEBUG,...e),this._logHandler(this,Ke.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ke.VERBOSE,...e),this._logHandler(this,Ke.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ke.INFO,...e),this._logHandler(this,Ke.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ke.WARN,...e),this._logHandler(this,Ke.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ke.ERROR,...e),this._logHandler(this,Ke.ERROR,...e)}}const jy=(t,e)=>e.some(n=>t instanceof n);let Pu,Ru;function qy(){return Pu||(Pu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Hy(){return Ru||(Ru=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Mp=new WeakMap,fl=new WeakMap,$p=new WeakMap,Va=new WeakMap,ic=new WeakMap;function Ky(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(gs(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Mp.set(n,t)}).catch(()=>{}),ic.set(e,t),e}function zy(t){if(fl.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});fl.set(t,e)}let dl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return fl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||$p.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return gs(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Gy(t){dl=t(dl)}function Wy(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(ja(this),e,...n);return $p.set(s,e.sort?e.sort():[e]),gs(s)}:Hy().includes(t)?function(...e){return t.apply(ja(this),e),gs(Mp.get(this))}:function(...e){return gs(t.apply(ja(this),e))}}function Qy(t){return typeof t=="function"?Wy(t):(t instanceof IDBTransaction&&zy(t),jy(t,qy())?new Proxy(t,dl):t)}function gs(t){if(t instanceof IDBRequest)return Ky(t);if(Va.has(t))return Va.get(t);const e=Qy(t);return e!==t&&(Va.set(t,e),ic.set(e,t)),e}const ja=t=>ic.get(t);function Yy(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=gs(o);return s&&o.addEventListener("upgradeneeded",l=>{s(gs(o.result),l.oldVersion,l.newVersion,gs(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const Xy=["get","getKey","getAll","getAllKeys","count"],xy=["put","add","delete","clear"],qa=new Map;function Nu(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(qa.get(e))return qa.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=xy.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Xy.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return qa.set(e,r),r}Gy(t=>({...t,get:(e,n,s)=>Nu(e,n)||t.get(e,n,s),has:(e,n)=>!!Nu(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jy{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Zy(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Zy(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const pl="@firebase/app",Ou="0.8.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ks=new sc("@firebase/app"),e0="@firebase/app-compat",t0="@firebase/analytics-compat",n0="@firebase/analytics",s0="@firebase/app-check-compat",i0="@firebase/app-check",r0="@firebase/auth",o0="@firebase/auth-compat",a0="@firebase/database",l0="@firebase/database-compat",c0="@firebase/functions",u0="@firebase/functions-compat",h0="@firebase/installations",f0="@firebase/installations-compat",d0="@firebase/messaging",p0="@firebase/messaging-compat",m0="@firebase/performance",g0="@firebase/performance-compat",_0="@firebase/remote-config",v0="@firebase/remote-config-compat",y0="@firebase/storage",b0="@firebase/storage-compat",w0="@firebase/firestore",k0="@firebase/firestore-compat",E0="firebase",I0="9.12.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ml="[DEFAULT]",T0={[pl]:"fire-core",[e0]:"fire-core-compat",[n0]:"fire-analytics",[t0]:"fire-analytics-compat",[i0]:"fire-app-check",[s0]:"fire-app-check-compat",[r0]:"fire-auth",[o0]:"fire-auth-compat",[a0]:"fire-rtdb",[l0]:"fire-rtdb-compat",[c0]:"fire-fn",[u0]:"fire-fn-compat",[h0]:"fire-iid",[f0]:"fire-iid-compat",[d0]:"fire-fcm",[p0]:"fire-fcm-compat",[m0]:"fire-perf",[g0]:"fire-perf-compat",[_0]:"fire-rc",[v0]:"fire-rc-compat",[y0]:"fire-gcs",[b0]:"fire-gcs-compat",[w0]:"fire-fst",[k0]:"fire-fst-compat","fire-js":"fire-js",[E0]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Io=new Map,gl=new Map;function C0(t,e){try{t.container.addComponent(e)}catch(n){Ks.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function gi(t){const e=t.name;if(gl.has(e))return Ks.debug(`There were multiple attempts to register component ${e}.`),!1;gl.set(e,t);for(const n of Io.values())C0(n,t);return!0}function rc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S0={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},_s=new kr("app","Firebase",S0);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A0{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Hs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw _s.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir=I0;function Up(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:ml,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw _s.create("bad-app-name",{appName:String(i)});if(n||(n=Ey()),!n)throw _s.create("no-options");const r=Io.get(i);if(r){if(Eo(n,r.options)&&Eo(s,r.config))return r;throw _s.create("duplicate-app",{appName:i})}const o=new $y(i);for(const l of gl.values())o.addComponent(l);const a=new A0(n,s,o);return Io.set(i,a),a}function Fp(t=ml){const e=Io.get(t);if(!e&&t===ml)return Up();if(!e)throw _s.create("no-app",{appName:t});return e}function vs(t,e,n){var s;let i=(s=T0[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ks.warn(a.join(" "));return}gi(new Hs(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const D0="firebase-heartbeat-database",P0=1,er="firebase-heartbeat-store";let Ha=null;function Bp(){return Ha||(Ha=Yy(D0,P0,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(er)}}}).catch(t=>{throw _s.create("idb-open",{originalErrorMessage:t.message})})),Ha}async function R0(t){var e;try{return(await Bp()).transaction(er).objectStore(er).get(Vp(t))}catch(n){if(n instanceof os)Ks.warn(n.message);else{const s=_s.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});Ks.warn(s.message)}}}async function Lu(t,e){var n;try{const i=(await Bp()).transaction(er,"readwrite");return await i.objectStore(er).put(e,Vp(t)),i.done}catch(s){if(s instanceof os)Ks.warn(s.message);else{const i=_s.create("idb-set",{originalErrorMessage:(n=s)===null||n===void 0?void 0:n.message});Ks.warn(i.message)}}}function Vp(t){return`${t.name}!${t.options.appId}`}/**
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
 */const N0=1024,O0=30*24*60*60*1e3;class L0{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new $0(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Mu();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=O0}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Mu(),{heartbeatsToSend:n,unsentEntries:s}=M0(this._heartbeatsCache.heartbeats),i=ko(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Mu(){return new Date().toISOString().substring(0,10)}function M0(t,e=N0){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),$u(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),$u(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class $0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return gy()?_y().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await R0(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Lu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Lu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function $u(t){return ko(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U0(t){gi(new Hs("platform-logger",e=>new Jy(e),"PRIVATE")),gi(new Hs("heartbeat",e=>new L0(e),"PRIVATE")),vs(pl,Ou,t),vs(pl,Ou,"esm2017"),vs("fire-js","")}U0("");var F0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},pe,oc=oc||{},Ie=F0||self;function To(){}function Xo(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Tr(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function B0(t){return Object.prototype.hasOwnProperty.call(t,Ka)&&t[Ka]||(t[Ka]=++V0)}var Ka="closure_uid_"+(1e9*Math.random()>>>0),V0=0;function j0(t,e,n){return t.call.apply(t.bind,arguments)}function q0(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Gt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Gt=j0:Gt=q0,Gt.apply(null,arguments)}function Jr(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function qt(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function As(){this.s=this.s,this.o=this.o}var H0=0;As.prototype.s=!1;As.prototype.na=function(){!this.s&&(this.s=!0,this.M(),H0!=0)&&B0(this)};As.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const jp=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function ac(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Uu(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Xo(s)){const i=t.length||0,r=s.length||0;t.length=i+r;for(let o=0;o<r;o++)t[i+o]=s[o]}else t.push(s)}}function Wt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Wt.prototype.h=function(){this.defaultPrevented=!0};var K0=function(){if(!Ie.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Ie.addEventListener("test",To,e),Ie.removeEventListener("test",To,e)}catch{}return t}();function Co(t){return/^[\s\xa0]*$/.test(t)}var Fu=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function za(t,e){return t<e?-1:t>e?1:0}function xo(){var t=Ie.navigator;return t&&(t=t.userAgent)?t:""}function On(t){return xo().indexOf(t)!=-1}function lc(t){return lc[" "](t),t}lc[" "]=To;function z0(t){var e=Q0;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var G0=On("Opera"),_i=On("Trident")||On("MSIE"),qp=On("Edge"),_l=qp||_i,Hp=On("Gecko")&&!(xo().toLowerCase().indexOf("webkit")!=-1&&!On("Edge"))&&!(On("Trident")||On("MSIE"))&&!On("Edge"),W0=xo().toLowerCase().indexOf("webkit")!=-1&&!On("Edge");function Kp(){var t=Ie.document;return t?t.documentMode:void 0}var So;e:{var Ga="",Wa=function(){var t=xo();if(Hp)return/rv:([^\);]+)(\)|;)/.exec(t);if(qp)return/Edge\/([\d\.]+)/.exec(t);if(_i)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(W0)return/WebKit\/(\S+)/.exec(t);if(G0)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Wa&&(Ga=Wa?Wa[1]:""),_i){var Qa=Kp();if(Qa!=null&&Qa>parseFloat(Ga)){So=String(Qa);break e}}So=Ga}var Q0={};function Y0(){return z0(function(){let t=0;const e=Fu(String(So)).split("."),n=Fu("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;t=za(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||za(i[2].length==0,r[2].length==0)||za(i[2],r[2]),i=i[3],r=r[3]}while(t==0)}return 0<=t})}var vl;if(Ie.document&&_i){var Bu=Kp();vl=Bu||parseInt(So,10)||void 0}else vl=void 0;var X0=vl;function tr(t,e){if(Wt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Hp){e:{try{lc(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:x0[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&tr.X.h.call(this)}}qt(tr,Wt);var x0={2:"touch",3:"pen",4:"mouse"};tr.prototype.h=function(){tr.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Cr="closure_listenable_"+(1e6*Math.random()|0),J0=0;function Z0(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=i,this.key=++J0,this.ba=this.ea=!1}function Jo(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function cc(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function zp(t){const e={};for(const n in t)e[n]=t[n];return e}const Vu="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Gp(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<Vu.length;r++)n=Vu[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Zo(t){this.src=t,this.g={},this.h=0}Zo.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=bl(t,e,s,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new Z0(e,this.src,r,!!s,i),e.ea=n,t.push(e)),e};function yl(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=jp(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(Jo(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function bl(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==s)return i}return-1}var uc="closure_lm_"+(1e6*Math.random()|0),Ya={};function Wp(t,e,n,s,i){if(s&&s.once)return Yp(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)Wp(t,e[r],n,s,i);return null}return n=dc(n),t&&t[Cr]?t.N(e,n,Tr(s)?!!s.capture:!!s,i):Qp(t,e,n,!1,s,i)}function Qp(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=Tr(i)?!!i.capture:!!i,a=fc(t);if(a||(t[uc]=a=new Zo(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=e1(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)K0||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(xp(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function e1(){function t(n){return e.call(t.src,t.listener,n)}const e=t1;return t}function Yp(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)Yp(t,e[r],n,s,i);return null}return n=dc(n),t&&t[Cr]?t.O(e,n,Tr(s)?!!s.capture:!!s,i):Qp(t,e,n,!0,s,i)}function Xp(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)Xp(t,e[r],n,s,i);else s=Tr(s)?!!s.capture:!!s,n=dc(n),t&&t[Cr]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=bl(r,n,s,i),-1<n&&(Jo(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=fc(t))&&(e=t.g[e.toString()],t=-1,e&&(t=bl(e,n,s,i)),(n=-1<t?e[t]:null)&&hc(n))}function hc(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Cr])yl(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(xp(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=fc(e))?(yl(n,t),n.h==0&&(n.src=null,e[uc]=null)):Jo(t)}}}function xp(t){return t in Ya?Ya[t]:Ya[t]="on"+t}function t1(t,e){if(t.ba)t=!0;else{e=new tr(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&hc(t),t=n.call(s,e)}return t}function fc(t){return t=t[uc],t instanceof Zo?t:null}var Xa="__closure_events_fn_"+(1e9*Math.random()>>>0);function dc(t){return typeof t=="function"?t:(t[Xa]||(t[Xa]=function(e){return t.handleEvent(e)}),t[Xa])}function Lt(){As.call(this),this.i=new Zo(this),this.P=this,this.I=null}qt(Lt,As);Lt.prototype[Cr]=!0;Lt.prototype.removeEventListener=function(t,e,n,s){Xp(this,t,e,n,s)};function jt(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new Wt(e,t);else if(e instanceof Wt)e.target=e.target||t;else{var i=e;e=new Wt(s,t),Gp(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=Zr(o,s,!0,e)&&i}if(o=e.g=t,i=Zr(o,s,!0,e)&&i,i=Zr(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=Zr(o,s,!1,e)&&i}Lt.prototype.M=function(){if(Lt.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Jo(n[s]);delete t.g[e],t.h--}}this.I=null};Lt.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Lt.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Zr(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&yl(t.i,o),i=a.call(l,s)!==!1&&i}}return i&&!s.defaultPrevented}var pc=Ie.JSON.stringify;function n1(){var t=em;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class s1{constructor(){this.h=this.g=null}add(e,n){const s=Jp.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Jp=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new i1,t=>t.reset());class i1{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function r1(t){Ie.setTimeout(()=>{throw t},0)}function Zp(t,e){wl||o1(),kl||(wl(),kl=!0),em.add(t,e)}var wl;function o1(){var t=Ie.Promise.resolve(void 0);wl=function(){t.then(a1)}}var kl=!1,em=new s1;function a1(){for(var t;t=n1();){try{t.h.call(t.g)}catch(n){r1(n)}var e=Jp;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}kl=!1}function ea(t,e){Lt.call(this),this.h=t||1,this.g=e||Ie,this.j=Gt(this.lb,this),this.l=Date.now()}qt(ea,Lt);pe=ea.prototype;pe.ca=!1;pe.R=null;pe.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),jt(this,"tick"),this.ca&&(mc(this),this.start()))}};pe.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function mc(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}pe.M=function(){ea.X.M.call(this),mc(this),delete this.g};function gc(t,e,n){if(typeof t=="function")n&&(t=Gt(t,n));else if(t&&typeof t.handleEvent=="function")t=Gt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Ie.setTimeout(t,e||0)}function tm(t){t.g=gc(()=>{t.g=null,t.i&&(t.i=!1,tm(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class l1 extends As{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:tm(this)}M(){super.M(),this.g&&(Ie.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function nr(t){As.call(this),this.h=t,this.g={}}qt(nr,As);var ju=[];function nm(t,e,n,s){Array.isArray(n)||(n&&(ju[0]=n.toString()),n=ju);for(var i=0;i<n.length;i++){var r=Wp(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function sm(t){cc(t.g,function(e,n){this.g.hasOwnProperty(n)&&hc(e)},t),t.g={}}nr.prototype.M=function(){nr.X.M.call(this),sm(this)};nr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ta(){this.g=!0}ta.prototype.Aa=function(){this.g=!1};function c1(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var h=c[0];c=c[1];var f=h.split("_");o=2<=f.length&&f[1]=="type"?o+(h+"="+c+"&"):o+(h+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function u1(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function oi(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+f1(t,n)+(s?" "+s:"")})}function h1(t,e){t.info(function(){return"TIMEOUT: "+e})}ta.prototype.info=function(){};function f1(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return pc(n)}catch{return e}}var xs={},qu=null;function na(){return qu=qu||new Lt}xs.Pa="serverreachability";function im(t){Wt.call(this,xs.Pa,t)}qt(im,Wt);function sr(t){const e=na();jt(e,new im(e))}xs.STAT_EVENT="statevent";function rm(t,e){Wt.call(this,xs.STAT_EVENT,t),this.stat=e}qt(rm,Wt);function en(t){const e=na();jt(e,new rm(e,t))}xs.Qa="timingevent";function om(t,e){Wt.call(this,xs.Qa,t),this.size=e}qt(om,Wt);function Sr(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Ie.setTimeout(function(){t()},e)}var sa={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},am={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function _c(){}_c.prototype.h=null;function Hu(t){return t.h||(t.h=t.i())}function lm(){}var Ar={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function vc(){Wt.call(this,"d")}qt(vc,Wt);function yc(){Wt.call(this,"c")}qt(yc,Wt);var El;function ia(){}qt(ia,_c);ia.prototype.g=function(){return new XMLHttpRequest};ia.prototype.i=function(){return{}};El=new ia;function Dr(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new nr(this),this.O=d1,t=_l?125:void 0,this.T=new ea(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new cm}function cm(){this.i=null,this.g="",this.h=!1}var d1=45e3,Il={},Ao={};pe=Dr.prototype;pe.setTimeout=function(t){this.O=t};function Tl(t,e,n){t.K=1,t.v=oa(es(e)),t.s=n,t.P=!0,um(t,null)}function um(t,e){t.F=Date.now(),Pr(t),t.A=es(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),vm(n.i,"t",s),t.C=0,n=t.l.H,t.h=new cm,t.g=Bm(t.l,n?e:null,!t.s),0<t.N&&(t.L=new l1(Gt(t.La,t,t.g),t.N)),nm(t.S,t.g,"readystatechange",t.ib),e=t.H?zp(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),sr(),c1(t.j,t.u,t.A,t.m,t.U,t.s)}pe.ib=function(t){t=t.target;const e=this.L;e&&Qn(t)==3?e.l():this.La(t)};pe.La=function(t){try{if(t==this.g)e:{const h=Qn(this.g);var e=this.g.Ea();const f=this.g.aa();if(!(3>h)&&(h!=3||_l||this.g&&(this.h.h||this.g.fa()||Wu(this.g)))){this.I||h!=4||e==7||(e==8||0>=f?sr(3):sr(2)),ra(this);var n=this.g.aa();this.Y=n;t:if(hm(this)){var s=Wu(this.g);t="";var i=s.length,r=Qn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ls(this),Wi(this);var o="";break t}this.h.i=new Ie.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,u1(this.j,this.u,this.A,this.m,this.U,h,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Co(a)){var c=a;break t}}c=null}if(n=c)oi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Cl(this,n);else{this.i=!1,this.o=3,en(12),Ls(this),Wi(this);break e}}this.P?(fm(this,h,o),_l&&this.i&&h==3&&(nm(this.S,this.T,"tick",this.hb),this.T.start())):(oi(this.j,this.m,o,null),Cl(this,o)),h==4&&Ls(this),this.i&&!this.I&&(h==4?Mm(this.l,this):(this.i=!1,Pr(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,en(12)):(this.o=0,en(13)),Ls(this),Wi(this)}}}catch{}finally{}};function hm(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function fm(t,e,n){let s=!0,i;for(;!t.I&&t.C<n.length;)if(i=p1(t,n),i==Ao){e==4&&(t.o=4,en(14),s=!1),oi(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Il){t.o=4,en(15),oi(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else oi(t.j,t.m,i,null),Cl(t,i);hm(t)&&i!=Ao&&i!=Il&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,en(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Cc(e),e.K=!0,en(11))):(oi(t.j,t.m,n,"[Invalid Chunked Response]"),Ls(t),Wi(t))}pe.hb=function(){if(this.g){var t=Qn(this.g),e=this.g.fa();this.C<e.length&&(ra(this),fm(this,t,e),this.i&&t!=4&&Pr(this))}};function p1(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Ao:(n=Number(e.substring(n,s)),isNaN(n)?Il:(s+=1,s+n>e.length?Ao:(e=e.substr(s,n),t.C=s+n,e)))}pe.cancel=function(){this.I=!0,Ls(this)};function Pr(t){t.V=Date.now()+t.O,dm(t,t.O)}function dm(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Sr(Gt(t.gb,t),e)}function ra(t){t.B&&(Ie.clearTimeout(t.B),t.B=null)}pe.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(h1(this.j,this.A),this.K!=2&&(sr(),en(17)),Ls(this),this.o=2,Wi(this)):dm(this,this.V-t)};function Wi(t){t.l.G==0||t.I||Mm(t.l,t)}function Ls(t){ra(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,mc(t.T),sm(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Cl(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Sl(n.h,t))){if(!t.J&&Sl(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Ro(n),ca(n);else break e;Tc(n),en(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=Sr(Gt(n.cb,n),6e3));if(1>=wm(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Ms(n,11)}else if((t.J||n.g==t)&&Ro(n),!Co(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.T=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.I=c[1],n.ka=c[2];const h=c[3];h!=null&&(n.ma=h,n.j.info("VER="+n.ma));const f=c[4];f!=null&&(n.Ca=f,n.j.info("SVER="+n.Ca));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const m=t.g;if(m){const _=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_){var r=s.h;r.g||_.indexOf("spdy")==-1&&_.indexOf("quic")==-1&&_.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(bc(r,r.h),r.h=null))}if(s.D){const v=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(s.za=v,st(s.F,s.D,v))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=Fm(s,s.H?s.ka:null,s.V),o.J){km(s.h,o);var a=o,l=s.J;l&&a.setTimeout(l),a.B&&(ra(a),Pr(a)),s.g=o}else Om(s);0<n.i.length&&ua(n)}else c[0]!="stop"&&c[0]!="close"||Ms(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Ms(n,7):Ic(n):c[0]!="noop"&&n.l&&n.l.wa(c),n.A=0)}}sr(4)}catch{}}function m1(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Xo(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function g1(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Xo(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function pm(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Xo(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=g1(t),s=m1(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}var mm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function _1(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Us(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Us){this.h=e!==void 0?e:t.h,Do(this,t.j),this.s=t.s,this.g=t.g,Po(this,t.m),this.l=t.l,e=t.i;var n=new ir;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Ku(this,n),this.o=t.o}else t&&(n=String(t).match(mm))?(this.h=!!e,Do(this,n[1]||"",!0),this.s=ji(n[2]||""),this.g=ji(n[3]||"",!0),Po(this,n[4]),this.l=ji(n[5]||"",!0),Ku(this,n[6]||"",!0),this.o=ji(n[7]||"")):(this.h=!!e,this.i=new ir(null,this.h))}Us.prototype.toString=function(){var t=[],e=this.j;e&&t.push(qi(e,zu,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(qi(e,zu,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(qi(n,n.charAt(0)=="/"?b1:y1,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",qi(n,k1)),t.join("")};function es(t){return new Us(t)}function Do(t,e,n){t.j=n?ji(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Po(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Ku(t,e,n){e instanceof ir?(t.i=e,E1(t.i,t.h)):(n||(e=qi(e,w1)),t.i=new ir(e,t.h))}function st(t,e,n){t.i.set(e,n)}function oa(t){return st(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ji(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function qi(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,v1),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function v1(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var zu=/[#\/\?@]/g,y1=/[#\?:]/g,b1=/[#\?]/g,w1=/[#\?@]/g,k1=/#/g;function ir(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ds(t){t.g||(t.g=new Map,t.h=0,t.i&&_1(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}pe=ir.prototype;pe.add=function(t,e){Ds(this),this.i=null,t=Ci(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function gm(t,e){Ds(t),e=Ci(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function _m(t,e){return Ds(t),e=Ci(t,e),t.g.has(e)}pe.forEach=function(t,e){Ds(this),this.g.forEach(function(n,s){n.forEach(function(i){t.call(e,i,s,this)},this)},this)};pe.oa=function(){Ds(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let r=0;r<i.length;r++)n.push(e[s])}return n};pe.W=function(t){Ds(this);let e=[];if(typeof t=="string")_m(this,t)&&(e=e.concat(this.g.get(Ci(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};pe.set=function(t,e){return Ds(this),this.i=null,t=Ci(this,t),_m(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};pe.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function vm(t,e,n){gm(t,e),0<n.length&&(t.i=null,t.g.set(Ci(t,e),ac(n)),t.h+=n.length)}pe.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};function Ci(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function E1(t,e){e&&!t.j&&(Ds(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(gm(this,s),vm(this,i,n))},t)),t.j=e}var I1=class{constructor(t,e){this.h=t,this.g=e}};function ym(t){this.l=t||T1,Ie.PerformanceNavigationTiming?(t=Ie.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Ie.g&&Ie.g.Ga&&Ie.g.Ga()&&Ie.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var T1=10;function bm(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function wm(t){return t.h?1:t.g?t.g.size:0}function Sl(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function bc(t,e){t.g?t.g.add(e):t.h=e}function km(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}ym.prototype.cancel=function(){if(this.i=Em(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Em(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return ac(t.i)}function wc(){}wc.prototype.stringify=function(t){return Ie.JSON.stringify(t,void 0)};wc.prototype.parse=function(t){return Ie.JSON.parse(t,void 0)};function C1(){this.g=new wc}function S1(t,e,n){const s=n||"";try{pm(t,function(i,r){let o=i;Tr(i)&&(o=pc(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function A1(t,e){const n=new ta;if(Ie.Image){const s=new Image;s.onload=Jr(eo,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Jr(eo,n,s,"TestLoadImage: error",!1,e),s.onabort=Jr(eo,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Jr(eo,n,s,"TestLoadImage: timeout",!1,e),Ie.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function eo(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function Rr(t){this.l=t.ac||null,this.j=t.jb||!1}qt(Rr,_c);Rr.prototype.g=function(){return new aa(this.l,this.j)};Rr.prototype.i=function(t){return function(){return t}}({});function aa(t,e){Lt.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=kc,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}qt(aa,Lt);var kc=0;pe=aa.prototype;pe.open=function(t,e){if(this.readyState!=kc)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,rr(this)};pe.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||Ie).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};pe.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Nr(this)),this.readyState=kc};pe.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,rr(this)),this.g&&(this.readyState=3,rr(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof Ie.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Im(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function Im(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}pe.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Nr(this):rr(this),this.readyState==3&&Im(this)}};pe.Va=function(t){this.g&&(this.response=this.responseText=t,Nr(this))};pe.Ua=function(t){this.g&&(this.response=t,Nr(this))};pe.ga=function(){this.g&&Nr(this)};function Nr(t){t.readyState=4,t.l=null,t.j=null,t.A=null,rr(t)}pe.setRequestHeader=function(t,e){this.v.append(t,e)};pe.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};pe.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function rr(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(aa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var D1=Ie.JSON.parse;function ct(t){Lt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Tm,this.K=this.L=!1}qt(ct,Lt);var Tm="",P1=/^https?$/i,R1=["POST","PUT"];pe=ct.prototype;pe.Ka=function(t){this.L=t};pe.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():El.g(),this.C=this.u?Hu(this.u):Hu(El),this.g.onreadystatechange=Gt(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){Gu(this,r);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=Ie.FormData&&t instanceof Ie.FormData,!(0<=jp(R1,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Am(this),0<this.B&&((this.K=N1(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Gt(this.qa,this)):this.A=gc(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){Gu(this,r)}};function N1(t){return _i&&Y0()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}pe.qa=function(){typeof oc<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,jt(this,"timeout"),this.abort(8))};function Gu(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Cm(t),la(t)}function Cm(t){t.D||(t.D=!0,jt(t,"complete"),jt(t,"error"))}pe.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,jt(this,"complete"),jt(this,"abort"),la(this))};pe.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),la(this,!0)),ct.X.M.call(this)};pe.Ha=function(){this.s||(this.F||this.v||this.l?Sm(this):this.fb())};pe.fb=function(){Sm(this)};function Sm(t){if(t.h&&typeof oc<"u"&&(!t.C[1]||Qn(t)!=4||t.aa()!=2)){if(t.v&&Qn(t)==4)gc(t.Ha,0,t);else if(jt(t,"readystatechange"),Qn(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var i=String(t.H).match(mm)[1]||null;if(!i&&Ie.self&&Ie.self.location){var r=Ie.self.location.protocol;i=r.substr(0,r.length-1)}s=!P1.test(i?i.toLowerCase():"")}n=s}if(n)jt(t,"complete"),jt(t,"success");else{t.m=6;try{var o=2<Qn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",Cm(t)}}finally{la(t)}}}}function la(t,e){if(t.g){Am(t);const n=t.g,s=t.C[0]?To:null;t.g=null,t.C=null,e||jt(t,"ready");try{n.onreadystatechange=s}catch{}}}function Am(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(Ie.clearTimeout(t.A),t.A=null)}function Qn(t){return t.g?t.g.readyState:0}pe.aa=function(){try{return 2<Qn(this)?this.g.status:-1}catch{return-1}};pe.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};pe.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),D1(e)}};function Wu(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Tm:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}pe.Ea=function(){return this.m};pe.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Dm(t){let e="";return cc(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Ec(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=Dm(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):st(t,e,n))}function $i(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Pm(t){this.Ca=0,this.i=[],this.j=new ta,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=$i("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=$i("baseRetryDelayMs",5e3,t),this.bb=$i("retryDelaySeedMs",1e4,t),this.$a=$i("forwardChannelMaxRetries",2,t),this.ta=$i("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new ym(t&&t.concurrentRequestLimit),this.Fa=new C1,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}pe=Pm.prototype;pe.ma=8;pe.G=1;function Ic(t){if(Rm(t),t.G==3){var e=t.U++,n=es(t.F);st(n,"SID",t.I),st(n,"RID",e),st(n,"TYPE","terminate"),Or(t,n),e=new Dr(t,t.j,e,void 0),e.K=2,e.v=oa(es(n)),n=!1,Ie.navigator&&Ie.navigator.sendBeacon&&(n=Ie.navigator.sendBeacon(e.v.toString(),"")),!n&&Ie.Image&&(new Image().src=e.v,n=!0),n||(e.g=Bm(e.l,null),e.g.da(e.v)),e.F=Date.now(),Pr(e)}Um(t)}function ca(t){t.g&&(Cc(t),t.g.cancel(),t.g=null)}function Rm(t){ca(t),t.u&&(Ie.clearTimeout(t.u),t.u=null),Ro(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&Ie.clearTimeout(t.m),t.m=null)}function ua(t){bm(t.h)||t.m||(t.m=!0,Zp(t.Ja,t),t.C=0)}function O1(t,e){return wm(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Sr(Gt(t.Ja,t,e),$m(t,t.C)),t.C++,!0)}pe.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new Dr(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=zp(r),Gp(r,this.S)):r=this.S),this.o!==null||this.N||(i.H=r,r=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Nm(this,i,e),n=es(this.F),st(n,"RID",t),st(n,"CVER",22),this.D&&st(n,"X-HTTP-Session-Id",this.D),Or(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(Dm(r)))+"&"+e:this.o&&Ec(n,this.o,r)),bc(this.h,i),this.Ya&&st(n,"TYPE","init"),this.O?(st(n,"$req",e),st(n,"SID","null"),i.Z=!0,Tl(i,n,null)):Tl(i,n,e),this.G=2}}else this.G==3&&(t?Qu(this,t):this.i.length==0||bm(this.h)||Qu(this))};function Qu(t,e){var n;e?n=e.m:n=t.U++;const s=es(t.F);st(s,"SID",t.I),st(s,"RID",n),st(s,"AID",t.T),Or(t,s),t.o&&t.s&&Ec(s,t.o,t.s),n=new Dr(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Nm(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),bc(t.h,n),Tl(n,s,e)}function Or(t,e){t.ia&&cc(t.ia,function(n,s){st(e,s,n)}),t.l&&pm({},function(n,s){st(e,s,n)})}function Nm(t,e,n){n=Math.min(t.i.length,n);var s=t.l?Gt(t.l.Ra,t.l,t):null;e:{var i=t.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let c=i[l].h;const h=i[l].g;if(c-=r,0>c)r=Math.max(0,i[l].h-100),a=!1;else try{S1(h,o,"req"+c+"_")}catch{s&&s(h)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function Om(t){t.g||t.u||(t.Z=1,Zp(t.Ia,t),t.A=0)}function Tc(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Sr(Gt(t.Ia,t),$m(t,t.A)),t.A++,!0)}pe.Ia=function(){if(this.u=null,Lm(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Sr(Gt(this.eb,this),t)}};pe.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,en(10),ca(this),Lm(this))};function Cc(t){t.B!=null&&(Ie.clearTimeout(t.B),t.B=null)}function Lm(t){t.g=new Dr(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=es(t.sa);st(e,"RID","rpc"),st(e,"SID",t.I),st(e,"CI",t.L?"0":"1"),st(e,"AID",t.T),st(e,"TYPE","xmlhttp"),Or(t,e),t.o&&t.s&&Ec(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=oa(es(e)),n.s=null,n.P=!0,um(n,t)}pe.cb=function(){this.v!=null&&(this.v=null,ca(this),Tc(this),en(19))};function Ro(t){t.v!=null&&(Ie.clearTimeout(t.v),t.v=null)}function Mm(t,e){var n=null;if(t.g==e){Ro(t),Cc(t),t.g=null;var s=2}else if(Sl(t.h,e))n=e.D,km(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;s=na(),jt(s,new om(s,n)),ua(t)}else Om(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(s==1&&O1(t,e)||s==2&&Tc(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Ms(t,5);break;case 4:Ms(t,10);break;case 3:Ms(t,6);break;default:Ms(t,2)}}}function $m(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Ms(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=Gt(t.kb,t);n||(n=new Us("//www.google.com/images/cleardot.gif"),Ie.location&&Ie.location.protocol=="http"||Do(n,"https"),oa(n)),A1(n.toString(),s)}else en(2);t.G=0,t.l&&t.l.va(e),Um(t),Rm(t)}pe.kb=function(t){t?(this.j.info("Successfully pinged google.com"),en(2)):(this.j.info("Failed to ping google.com"),en(1))};function Um(t){if(t.G=0,t.la=[],t.l){const e=Em(t.h);(e.length!=0||t.i.length!=0)&&(Uu(t.la,e),Uu(t.la,t.i),t.h.i.length=0,ac(t.i),t.i.length=0),t.l.ua()}}function Fm(t,e,n){var s=n instanceof Us?es(n):new Us(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),Po(s,s.m);else{var i=Ie.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new Us(null,void 0);s&&Do(r,s),e&&(r.g=e),i&&Po(r,i),n&&(r.l=n),s=r}return n=t.D,e=t.za,n&&e&&st(s,n,e),st(s,"VER",t.ma),Or(t,s),s}function Bm(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new ct(new Rr({jb:!0})):new ct(t.ra),e.Ka(t.H),e}function Vm(){}pe=Vm.prototype;pe.xa=function(){};pe.wa=function(){};pe.va=function(){};pe.ua=function(){};pe.Ra=function(){};function No(){if(_i&&!(10<=Number(X0)))throw Error("Environmental error: no available transport.")}No.prototype.g=function(t,e){return new yn(t,e)};function yn(t,e){Lt.call(this),this.g=new Pm(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Co(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Co(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Si(this)}qt(yn,Lt);yn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;en(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Fm(t,null,t.V),ua(t)};yn.prototype.close=function(){Ic(this.g)};yn.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=pc(t),t=n);e.i.push(new I1(e.ab++,t)),e.G==3&&ua(e)};yn.prototype.M=function(){this.g.l=null,delete this.j,Ic(this.g),delete this.g,yn.X.M.call(this)};function jm(t){vc.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}qt(jm,vc);function qm(){yc.call(this),this.status=1}qt(qm,yc);function Si(t){this.g=t}qt(Si,Vm);Si.prototype.xa=function(){jt(this.g,"a")};Si.prototype.wa=function(t){jt(this.g,new jm(t))};Si.prototype.va=function(t){jt(this.g,new qm)};Si.prototype.ua=function(){jt(this.g,"b")};No.prototype.createWebChannel=No.prototype.g;yn.prototype.send=yn.prototype.u;yn.prototype.open=yn.prototype.m;yn.prototype.close=yn.prototype.close;sa.NO_ERROR=0;sa.TIMEOUT=8;sa.HTTP_ERROR=6;am.COMPLETE="complete";lm.EventType=Ar;Ar.OPEN="a";Ar.CLOSE="b";Ar.ERROR="c";Ar.MESSAGE="d";Lt.prototype.listen=Lt.prototype.N;ct.prototype.listenOnce=ct.prototype.O;ct.prototype.getLastError=ct.prototype.Oa;ct.prototype.getLastErrorCode=ct.prototype.Ea;ct.prototype.getStatus=ct.prototype.aa;ct.prototype.getResponseJson=ct.prototype.Sa;ct.prototype.getResponseText=ct.prototype.fa;ct.prototype.send=ct.prototype.da;ct.prototype.setWithCredentials=ct.prototype.Ka;var L1=function(){return new No},M1=function(){return na()},xa=sa,$1=am,U1=xs,Yu={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},F1=Rr,to=lm,B1=ct;const Xu="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const zs=new sc("@firebase/firestore");function xu(){return zs.logLevel}function _e(t,...e){if(zs.logLevel<=Ke.DEBUG){const n=e.map(Sc);zs.debug(`Firestore (${Ai}): ${t}`,...n)}}function ts(t,...e){if(zs.logLevel<=Ke.ERROR){const n=e.map(Sc);zs.error(`Firestore (${Ai}): ${t}`,...n)}}function Al(t,...e){if(zs.logLevel<=Ke.WARN){const n=e.map(Sc);zs.warn(`Firestore (${Ai}): ${t}`,...n)}}function Sc(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function Te(t="Unexpected state"){const e=`FIRESTORE (${Ai}) INTERNAL ASSERTION FAILED: `+t;throw ts(e),new Error(e)}function tt(t,e){t||Te()}function Ae(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const te={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class we extends os{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class V1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Kt.UNAUTHENTICATED))}shutdown(){}}class j1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class q1{constructor(e){this.t=e,this.currentUser=Kt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=l=>this.i!==s?(s=this.i,n(l)):Promise.resolve();let r=new ys;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new ys,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{_e("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(_e("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new ys)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(_e("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(tt(typeof s.accessToken=="string"),new Hm(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return tt(e===null||typeof e=="string"),new Kt(e)}}class H1{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i,this.type="FirstParty",this.user=Kt.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(tt(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class K1{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i}getToken(){return Promise.resolve(new H1(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(Kt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class z1{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class G1{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=r=>{r.error!=null&&_e("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.A;return this.A=r.token,_e("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{_e("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.T.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.T.getImmediate({optional:!0});r?i(r):_e("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(tt(typeof n.token=="string"),this.A=n.token,new z1(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W1(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Km{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=W1(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function Ge(t,e){return t<e?-1:t>e?1:0}function vi(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new we(te.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new we(te.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new we(te.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new we(te.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Et.fromMillis(Date.now())}static fromDate(e){return Et.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Et(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ge(this.nanoseconds,e.nanoseconds):Ge(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Re(e)}static min(){return new Re(new Et(0,0))}static max(){return new Re(new Et(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e,n,s){n===void 0?n=0:n>e.length&&Te(),s===void 0?s=e.length-n:s>e.length-n&&Te(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return or.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof or?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class it extends or{construct(e,n,s){return new it(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new we(te.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new it(n)}static emptyPath(){return new it([])}}const Q1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class zt extends or{construct(e,n,s){return new zt(e,n,s)}static isValidIdentifier(e){return Q1.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),zt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new zt(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new we(te.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new we(te.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new we(te.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new we(te.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new zt(n)}static emptyPath(){return new zt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e){this.path=e}static fromPath(e){return new be(it.fromString(e))}static fromName(e){return new be(it.fromString(e).popFirst(5))}static empty(){return new be(it.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&it.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return it.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new be(new it(e.slice()))}}function Y1(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=Re.fromTimestamp(s===1e9?new Et(n+1,0):new Et(n,s));return new Ts(i,be.empty(),e)}function X1(t){return new Ts(t.readTime,t.key,-1)}class Ts{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Ts(Re.min(),be.empty(),-1)}static max(){return new Ts(Re.max(),be.empty(),-1)}}function x1(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=be.comparator(t.documentKey,e.documentKey),n!==0?n:Ge(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Z1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lr(t){if(t.code!==te.FAILED_PRECONDITION||t.message!==J1)throw t;_e("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Te(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new ne((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof ne?n:ne.resolve(n)}catch(n){return ne.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):ne.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):ne.reject(n)}static resolve(e){return new ne((n,s)=>{n(e)})}static reject(e){return new ne((n,s)=>{s(e)})}static waitFor(e){return new ne((n,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},l=>s(l))}),o=!0,r===i&&n()})}static or(e){let n=ne.resolve(!1);for(const s of e)n=n.next(i=>i?ne.resolve(i):s());return n}static forEach(e,n){const s=[];return e.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(e,n){return new ne((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let l=0;l<r;l++){const c=l;n(e[c]).next(h=>{o[c]=h,++a,a===r&&s(o)},h=>i(h))}})}static doWhile(e,n){return new ne((s,i)=>{const r=()=>{e()===!0?n().next(()=>{r()},i):s()};r()})}}function Mr(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Ac{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ju(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Js(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function zm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ac.at=-1;class Tt{constructor(e,n){this.comparator=e,this.root=n||Bt.EMPTY}insert(e,n){return new Tt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Bt.BLACK,null,null))}remove(e){return new Tt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Bt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new no(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new no(this.root,e,this.comparator,!1)}getReverseIterator(){return new no(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new no(this.root,e,this.comparator,!0)}}class no{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Bt{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s!=null?s:Bt.RED,this.left=i!=null?i:Bt.EMPTY,this.right=r!=null?r:Bt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new Bt(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Bt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Bt.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Bt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Bt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Te();const e=this.left.check();if(e!==this.right.check())throw Te();return e+(this.isRed()?0:1)}}Bt.EMPTY=null,Bt.RED=!0,Bt.BLACK=!1;Bt.EMPTY=new class{constructor(){this.size=0}get key(){throw Te()}get value(){throw Te()}get color(){throw Te()}get left(){throw Te()}get right(){throw Te()}copy(t,e,n,s,i){return this}insert(t,e,n){return new Bt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.comparator=e,this.data=new Tt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Zu(this.data.getIterator())}getIteratorFrom(e){return new Zu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof It)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new It(this.comparator);return n.data=e,n}}class Zu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(e){this.fields=e,e.sort(zt.comparator)}static empty(){return new In([])}unionWith(e){let n=new It(zt.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new In(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return vi(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Xt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(e);return new Xt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ge(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Xt.EMPTY_BYTE_STRING=new Xt("");const eb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Cs(t){if(tt(!!t),typeof t=="string"){let e=0;const n=eb.exec(t);if(tt(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:vt(t.seconds),nanos:vt(t.nanos)}}function vt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function yi(t){return typeof t=="string"?Xt.fromBase64String(t):Xt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gm(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Wm(t){const e=t.mapValue.fields.__previous_value__;return Gm(e)?Wm(e):e}function ar(t){const e=Cs(t.mapValue.fields.__local_write_time__.timestampValue);return new Et(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tb{constructor(e,n,s,i,r,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class lr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new lr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof lr&&e.projectId===this.projectId&&e.database===this.database}}function ha(t){return t==null}function Oo(t){return t===0&&1/t==-1/0}function nb(t){return typeof t=="number"&&Number.isInteger(t)&&!Oo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const so={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Gs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Gm(t)?4:sb(t)?9007199254740991:10:Te()}function Vn(t,e){if(t===e)return!0;const n=Gs(t);if(n!==Gs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ar(t).isEqual(ar(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=Cs(s.timestampValue),o=Cs(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return yi(s.bytesValue).isEqual(yi(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return vt(s.geoPointValue.latitude)===vt(i.geoPointValue.latitude)&&vt(s.geoPointValue.longitude)===vt(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return vt(s.integerValue)===vt(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=vt(s.doubleValue),o=vt(i.doubleValue);return r===o?Oo(r)===Oo(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return vi(t.arrayValue.values||[],e.arrayValue.values||[],Vn);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(Ju(r)!==Ju(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!Vn(r[a],o[a])))return!1;return!0}(t,e);default:return Te()}}function cr(t,e){return(t.values||[]).find(n=>Vn(n,e))!==void 0}function bi(t,e){if(t===e)return 0;const n=Gs(t),s=Gs(e);if(n!==s)return Ge(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ge(t.booleanValue,e.booleanValue);case 2:return function(i,r){const o=vt(i.integerValue||i.doubleValue),a=vt(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return eh(t.timestampValue,e.timestampValue);case 4:return eh(ar(t),ar(e));case 5:return Ge(t.stringValue,e.stringValue);case 6:return function(i,r){const o=yi(i),a=yi(r);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=Ge(o[l],a[l]);if(c!==0)return c}return Ge(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,r){const o=Ge(vt(i.latitude),vt(r.latitude));return o!==0?o:Ge(vt(i.longitude),vt(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=bi(o[l],a[l]);if(c)return c}return Ge(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,r){if(i===so.mapValue&&r===so.mapValue)return 0;if(i===so.mapValue)return 1;if(r===so.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=r.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let h=0;h<a.length&&h<c.length;++h){const f=Ge(a[h],c[h]);if(f!==0)return f;const d=bi(o[a[h]],l[c[h]]);if(d!==0)return d}return Ge(a.length,c.length)}(t.mapValue,e.mapValue);default:throw Te()}}function eh(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ge(t,e);const n=Cs(t),s=Cs(e),i=Ge(n.seconds,s.seconds);return i!==0?i:Ge(n.nanos,s.nanos)}function ui(t){return Dl(t)}function Dl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const i=Cs(s);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?yi(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,be.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=Dl(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${Dl(s.fields[a])}`;return r+"}"}(t.mapValue):Te();var e,n}function Pl(t){return!!t&&"integerValue"in t}function Dc(t){return!!t&&"arrayValue"in t}function th(t){return!!t&&"nullValue"in t}function nh(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function lo(t){return!!t&&"mapValue"in t}function Qi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Js(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Qi(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Qi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function sb(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e){this.value=e}static empty(){return new hn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!lo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Qi(n)}setAll(e){let n=zt.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=Qi(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());lo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Vn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];lo(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){Js(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new hn(Qi(this.value))}}function Qm(t){const e=[];return Js(t.fields,(n,s)=>{const i=new zt([n]);if(lo(s)){const r=Qm(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new In(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ib{constructor(e,n=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.ht=null}}function sh(t,e=null,n=[],s=[],i=null,r=null,o=null){return new ib(t,e,n,s,i,r,o)}function Pc(t){const e=Ae(t);if(e.ht===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>{return(i=s).field.canonicalString()+i.op.toString()+ui(i.value);var i}).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),ha(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>ui(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>ui(s)).join(",")),e.ht=n}return e.ht}function rb(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${ui(s.value)}`;var s}).join(", ")}]`),ha(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>ui(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>ui(n)).join(",")),`Target(${e})`}function Rc(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!db(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],s=e.filters[i],n.op!==s.op||!n.field.isEqual(s.field)||!Vn(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!rh(t.startAt,e.startAt)&&rh(t.endAt,e.endAt)}function Rl(t){return be.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class dn extends class{}{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.lt(e,n,s):new ob(e,n,s):n==="array-contains"?new cb(e,s):n==="in"?new ub(e,s):n==="not-in"?new hb(e,s):n==="array-contains-any"?new fb(e,s):new dn(e,n,s)}static lt(e,n,s){return n==="in"?new ab(e,s):new lb(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.ft(bi(n,this.value)):n!==null&&Gs(this.value)===Gs(n)&&this.ft(bi(n,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Te()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class ob extends dn{constructor(e,n,s){super(e,n,s),this.key=be.fromName(s.referenceValue)}matches(e){const n=be.comparator(e.key,this.key);return this.ft(n)}}class ab extends dn{constructor(e,n){super(e,"in",n),this.keys=Ym("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class lb extends dn{constructor(e,n){super(e,"not-in",n),this.keys=Ym("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Ym(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>be.fromName(s.referenceValue))}class cb extends dn{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Dc(n)&&cr(n.arrayValue,this.value)}}class ub extends dn{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&cr(this.value.arrayValue,n)}}class hb extends dn{constructor(e,n){super(e,"not-in",n)}matches(e){if(cr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!cr(this.value.arrayValue,n)}}class fb extends dn{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Dc(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>cr(this.value.arrayValue,s))}}class Lo{constructor(e,n){this.position=e,this.inclusive=n}}class Yi{constructor(e,n="asc"){this.field=e,this.dir=n}}function db(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function ih(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=be.comparator(be.fromName(o.referenceValue),n.key):s=bi(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function rh(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Vn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{constructor(e,n=null,s=[],i=[],r=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this._t=null,this.wt=null,this.startAt,this.endAt}}function pb(t,e,n,s,i,r,o,a){return new fa(t,e,n,s,i,r,o,a)}function Nc(t){return new fa(t)}function oh(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function mb(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function gb(t){for(const e of t.filters)if(e.dt())return e.field;return null}function _b(t){return t.collectionGroup!==null}function ur(t){const e=Ae(t);if(e._t===null){e._t=[];const n=gb(e),s=mb(e);if(n!==null&&s===null)n.isKeyField()||e._t.push(new Yi(n)),e._t.push(new Yi(zt.keyField(),"asc"));else{let i=!1;for(const r of e.explicitOrderBy)e._t.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new Yi(zt.keyField(),r))}}}return e._t}function ns(t){const e=Ae(t);if(!e.wt)if(e.limitType==="F")e.wt=sh(e.path,e.collectionGroup,ur(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of ur(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new Yi(r.field,o))}const s=e.endAt?new Lo(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Lo(e.startAt.position,e.startAt.inclusive):null;e.wt=sh(e.path,e.collectionGroup,n,e.filters,e.limit,s,i)}return e.wt}function Nl(t,e,n){return new fa(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function da(t,e){return Rc(ns(t),ns(e))&&t.limitType===e.limitType}function Xm(t){return`${Pc(ns(t))}|lt:${t.limitType}`}function Ol(t){return`Query(target=${rb(ns(t))}; limitType=${t.limitType})`}function Oc(t,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):be.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,s){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=ih(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,ur(n),s)||n.endAt&&!function(i,r,o){const a=ih(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,ur(n),s))}(t,e)}function vb(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function xm(t){return(e,n)=>{let s=!1;for(const i of ur(t)){const r=yb(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function yb(t,e,n){const s=t.field.isKeyField()?be.comparator(e.key,n.key):function(i,r,o){const a=r.data.field(i),l=o.data.field(i);return a!==null&&l!==null?bi(a,l):Te()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return Te()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jm(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Oo(e)?"-0":e}}function Zm(t){return{integerValue:""+t}}function bb(t,e){return nb(e)?Zm(e):Jm(t,e)}/**
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
 */class pa{constructor(){this._=void 0}}function wb(t,e,n){return t instanceof Mo?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,e):t instanceof hr?tg(t,e):t instanceof fr?ng(t,e):function(s,i){const r=eg(s,i),o=ah(r)+ah(s.yt);return Pl(r)&&Pl(s.yt)?Zm(o):Jm(s.It,o)}(t,e)}function kb(t,e,n){return t instanceof hr?tg(t,e):t instanceof fr?ng(t,e):n}function eg(t,e){return t instanceof $o?Pl(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Mo extends pa{}class hr extends pa{constructor(e){super(),this.elements=e}}function tg(t,e){const n=sg(e);for(const s of t.elements)n.some(i=>Vn(i,s))||n.push(s);return{arrayValue:{values:n}}}class fr extends pa{constructor(e){super(),this.elements=e}}function ng(t,e){let n=sg(e);for(const s of t.elements)n=n.filter(i=>!Vn(i,s));return{arrayValue:{values:n}}}class $o extends pa{constructor(e,n){super(),this.It=e,this.yt=n}}function ah(t){return vt(t.integerValue||t.doubleValue)}function sg(t){return Dc(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Eb(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof hr&&s instanceof hr||n instanceof fr&&s instanceof fr?vi(n.elements,s.elements,Vn):n instanceof $o&&s instanceof $o?Vn(n.yt,s.yt):n instanceof Mo&&s instanceof Mo}(t.transform,e.transform)}class Ib{constructor(e,n){this.version=e,this.transformResults=n}}class Tn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Tn}static exists(e){return new Tn(void 0,e)}static updateTime(e){return new Tn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function co(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ma{}function ig(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Lc(t.key,Tn.none()):new $r(t.key,t.data,Tn.none());{const n=t.data,s=hn.empty();let i=new It(zt.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new Ps(t.key,s,new In(i.toArray()),Tn.none())}}function Tb(t,e,n){t instanceof $r?function(s,i,r){const o=s.value.clone(),a=ch(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Ps?function(s,i,r){if(!co(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=ch(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(rg(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function Xi(t,e,n,s){return t instanceof $r?function(i,r,o,a){if(!co(i.precondition,r))return o;const l=i.value.clone(),c=uh(i.fieldTransforms,a,r);return l.setAll(c),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),null}(t,e,n,s):t instanceof Ps?function(i,r,o,a){if(!co(i.precondition,r))return o;const l=uh(i.fieldTransforms,a,r),c=r.data;return c.setAll(rg(i)),c.setAll(l),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,s):function(i,r,o){return co(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(t,e,n)}function Cb(t,e){let n=null;for(const s of t.fieldTransforms){const i=e.data.field(s.field),r=eg(s.transform,i||null);r!=null&&(n===null&&(n=hn.empty()),n.set(s.field,r))}return n||null}function lh(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&vi(n,s,(i,r)=>Eb(i,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class $r extends ma{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ps extends ma{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function rg(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function ch(t,e,n){const s=new Map;tt(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,kb(o,a,n[i]))}return s}function uh(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,wb(r,o,e))}return s}class Lc extends ma{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Sb extends ma{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ab{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _t,$e;function Db(t){switch(t){default:return Te();case te.CANCELLED:case te.UNKNOWN:case te.DEADLINE_EXCEEDED:case te.RESOURCE_EXHAUSTED:case te.INTERNAL:case te.UNAVAILABLE:case te.UNAUTHENTICATED:return!1;case te.INVALID_ARGUMENT:case te.NOT_FOUND:case te.ALREADY_EXISTS:case te.PERMISSION_DENIED:case te.FAILED_PRECONDITION:case te.ABORTED:case te.OUT_OF_RANGE:case te.UNIMPLEMENTED:case te.DATA_LOSS:return!0}}function og(t){if(t===void 0)return ts("GRPC error has no .code"),te.UNKNOWN;switch(t){case _t.OK:return te.OK;case _t.CANCELLED:return te.CANCELLED;case _t.UNKNOWN:return te.UNKNOWN;case _t.DEADLINE_EXCEEDED:return te.DEADLINE_EXCEEDED;case _t.RESOURCE_EXHAUSTED:return te.RESOURCE_EXHAUSTED;case _t.INTERNAL:return te.INTERNAL;case _t.UNAVAILABLE:return te.UNAVAILABLE;case _t.UNAUTHENTICATED:return te.UNAUTHENTICATED;case _t.INVALID_ARGUMENT:return te.INVALID_ARGUMENT;case _t.NOT_FOUND:return te.NOT_FOUND;case _t.ALREADY_EXISTS:return te.ALREADY_EXISTS;case _t.PERMISSION_DENIED:return te.PERMISSION_DENIED;case _t.FAILED_PRECONDITION:return te.FAILED_PRECONDITION;case _t.ABORTED:return te.ABORTED;case _t.OUT_OF_RANGE:return te.OUT_OF_RANGE;case _t.UNIMPLEMENTED:return te.UNIMPLEMENTED;case _t.DATA_LOSS:return te.DATA_LOSS;default:return Te()}}($e=_t||(_t={}))[$e.OK=0]="OK",$e[$e.CANCELLED=1]="CANCELLED",$e[$e.UNKNOWN=2]="UNKNOWN",$e[$e.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",$e[$e.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",$e[$e.NOT_FOUND=5]="NOT_FOUND",$e[$e.ALREADY_EXISTS=6]="ALREADY_EXISTS",$e[$e.PERMISSION_DENIED=7]="PERMISSION_DENIED",$e[$e.UNAUTHENTICATED=16]="UNAUTHENTICATED",$e[$e.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",$e[$e.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",$e[$e.ABORTED=10]="ABORTED",$e[$e.OUT_OF_RANGE=11]="OUT_OF_RANGE",$e[$e.UNIMPLEMENTED=12]="UNIMPLEMENTED",$e[$e.INTERNAL=13]="INTERNAL",$e[$e.UNAVAILABLE=14]="UNAVAILABLE",$e[$e.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Js(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return zm(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pb=new Tt(be.comparator);function ss(){return Pb}const ag=new Tt(be.comparator);function Hi(...t){let e=ag;for(const n of t)e=e.insert(n.key,n);return e}function lg(t){let e=ag;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function $s(){return xi()}function cg(){return xi()}function xi(){return new Di(t=>t.toString(),(t,e)=>t.isEqual(e))}const Rb=new Tt(be.comparator),Nb=new It(be.comparator);function Me(...t){let e=Nb;for(const n of t)e=e.add(n);return e}const Ob=new It(Ge);function ug(){return Ob}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const i=new Map;return i.set(e,Ur.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new ga(Re.min(),i,ug(),ss(),Me())}}class Ur{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Ur(s,n,Me(),Me(),Me())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e,n,s,i){this.Tt=e,this.removedTargetIds=n,this.key=s,this.Et=i}}class hg{constructor(e,n){this.targetId=e,this.At=n}}class fg{constructor(e,n,s=Xt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class hh{constructor(){this.Rt=0,this.bt=dh(),this.Pt=Xt.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=Me(),n=Me(),s=Me();return this.bt.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:Te()}}),new Ur(this.Pt,this.vt,e,n,s)}Nt(){this.Vt=!1,this.bt=dh()}kt(e,n){this.Vt=!0,this.bt=this.bt.insert(e,n)}Ot(e){this.Vt=!0,this.bt=this.bt.remove(e)}Mt(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class Lb{constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=ss(),this.qt=fh(),this.Kt=new It(Ge)}Gt(e){for(const n of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(n,e.Et):this.jt(n,e.key,e.Et);for(const n of e.removedTargetIds)this.jt(n,e.key,e.Et)}Wt(e){this.forEachTarget(e,n=>{const s=this.zt(n);switch(e.state){case 0:this.Ht(n)&&s.Ct(e.resumeToken);break;case 1:s.Ft(),s.St||s.Nt(),s.Ct(e.resumeToken);break;case 2:s.Ft(),s.St||this.removeTarget(n);break;case 3:this.Ht(n)&&(s.$t(),s.Ct(e.resumeToken));break;case 4:this.Ht(n)&&(this.Jt(n),s.Ct(e.resumeToken));break;default:Te()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Lt.forEach((s,i)=>{this.Ht(i)&&n(i)})}Yt(e){const n=e.targetId,s=e.At.count,i=this.Xt(n);if(i){const r=i.target;if(Rl(r))if(s===0){const o=new be(r.path);this.jt(n,o,Vt.newNoDocument(o,Re.min()))}else tt(s===1);else this.Zt(n)!==s&&(this.Jt(n),this.Kt=this.Kt.add(n))}}te(e){const n=new Map;this.Lt.forEach((r,o)=>{const a=this.Xt(o);if(a){if(r.current&&Rl(a.target)){const l=new be(a.target.path);this.Ut.get(l)!==null||this.ee(o,l)||this.jt(o,l,Vt.newNoDocument(l,e))}r.Dt&&(n.set(o,r.xt()),r.Nt())}});let s=Me();this.qt.forEach((r,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Xt(l);return!c||c.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))}),this.Ut.forEach((r,o)=>o.setReadTime(e));const i=new ga(e,n,this.Kt,this.Ut,s);return this.Ut=ss(),this.qt=fh(),this.Kt=new It(Ge),i}Qt(e,n){if(!this.Ht(e))return;const s=this.ee(e,n.key)?2:0;this.zt(e).kt(n.key,s),this.Ut=this.Ut.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ne(n.key).add(e))}jt(e,n,s){if(!this.Ht(e))return;const i=this.zt(e);this.ee(e,n)?i.kt(n,1):i.Ot(n),this.qt=this.qt.insert(n,this.ne(n).delete(e)),s&&(this.Ut=this.Ut.insert(n,s))}removeTarget(e){this.Lt.delete(e)}Zt(e){const n=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Mt(e){this.zt(e).Mt()}zt(e){let n=this.Lt.get(e);return n||(n=new hh,this.Lt.set(e,n)),n}ne(e){let n=this.qt.get(e);return n||(n=new It(Ge),this.qt=this.qt.insert(e,n)),n}Ht(e){const n=this.Xt(e)!==null;return n||_e("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.Lt.get(e);return n&&n.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new hh),this.Bt.getRemoteKeysForTarget(e).forEach(n=>{this.jt(e,n,null)})}ee(e,n){return this.Bt.getRemoteKeysForTarget(e).has(n)}}function fh(){return new Tt(be.comparator)}function dh(){return new Tt(be.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mb=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),$b=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class Ub{constructor(e,n){this.databaseId=e,this.gt=n}}function Uo(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function dg(t,e){return t.gt?e.toBase64():e.toUint8Array()}function Fb(t,e){return Uo(t,e.toTimestamp())}function xn(t){return tt(!!t),Re.fromTimestamp(function(e){const n=Cs(e);return new Et(n.seconds,n.nanos)}(t))}function Mc(t,e){return function(n){return new it(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function pg(t){const e=it.fromString(t);return tt(_g(e)),e}function Ll(t,e){return Mc(t.databaseId,e.path)}function Ja(t,e){const n=pg(e);if(n.get(1)!==t.databaseId.projectId)throw new we(te.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new we(te.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new be(mg(n))}function Ml(t,e){return Mc(t.databaseId,e)}function Bb(t){const e=pg(t);return e.length===4?it.emptyPath():mg(e)}function $l(t){return new it(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function mg(t){return tt(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function ph(t,e,n){return{name:Ll(t,e),fields:n.value.mapValue.fields}}function Vb(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:Te()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(l,c){return l.gt?(tt(c===void 0||typeof c=="string"),Xt.fromBase64String(c||"")):(tt(c===void 0||c instanceof Uint8Array),Xt.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const c=l.code===void 0?te.UNKNOWN:og(l.code);return new we(c,l.message||"")}(o);n=new fg(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=Ja(t,s.document.name),r=xn(s.document.updateTime),o=new hn({mapValue:{fields:s.document.fields}}),a=Vt.newFoundDocument(i,r,o),l=s.targetIds||[],c=s.removedTargetIds||[];n=new uo(l,c,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=Ja(t,s.document),r=s.readTime?xn(s.readTime):Re.min(),o=Vt.newNoDocument(i,r),a=s.removedTargetIds||[];n=new uo([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=Ja(t,s.document),r=s.removedTargetIds||[];n=new uo([],r,i,null)}else{if(!("filter"in e))return Te();{e.filter;const s=e.filter;s.targetId;const i=s.count||0,r=new Ab(i),o=s.targetId;n=new hg(o,r)}}return n}function jb(t,e){let n;if(e instanceof $r)n={update:ph(t,e.key,e.value)};else if(e instanceof Lc)n={delete:Ll(t,e.key)};else if(e instanceof Ps)n={update:ph(t,e.key,e.data),updateMask:xb(e.fieldMask)};else{if(!(e instanceof Sb))return Te();n={verify:Ll(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof Mo)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof hr)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof fr)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof $o)return{fieldPath:r.field.canonicalString(),increment:o.yt};throw Te()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Fb(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Te()}(t,e.precondition)),n}function qb(t,e){return t&&t.length>0?(tt(e!==void 0),t.map(n=>function(s,i){let r=s.updateTime?xn(s.updateTime):xn(i);return r.isEqual(Re.min())&&(r=xn(i)),new Ib(r,s.transformResults||[])}(n,e))):[]}function Hb(t,e){return{documents:[Ml(t,e.path)]}}function Kb(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Ml(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Ml(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(l){if(l.length===0)return;const c=l.map(h=>function(f){if(f.op==="=="){if(nh(f.value))return{unaryFilter:{field:ii(f.field),op:"IS_NAN"}};if(th(f.value))return{unaryFilter:{field:ii(f.field),op:"IS_NULL"}}}else if(f.op==="!="){if(nh(f.value))return{unaryFilter:{field:ii(f.field),op:"IS_NOT_NAN"}};if(th(f.value))return{unaryFilter:{field:ii(f.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ii(f.field),op:Qb(f.op),value:f.value}}}(h));return c.length===1?c[0]:{compositeFilter:{op:"AND",filters:c}}}(e.filters);i&&(n.structuredQuery.where=i);const r=function(l){if(l.length!==0)return l.map(c=>function(h){return{field:ii(h.field),direction:Wb(h.dir)}}(c))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(l,c){return l.gt||ha(c)?c:{value:c}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function zb(t){let e=Bb(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){tt(s===1);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let r=[];n.where&&(r=gg(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(h=>function(f){return new Yi(ai(f.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(f.direction))}(h)));let a=null;n.limit&&(a=function(h){let f;return f=typeof h=="object"?h.value:h,ha(f)?null:f}(n.limit));let l=null;n.startAt&&(l=function(h){const f=!!h.before,d=h.values||[];return new Lo(d,f)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const f=!h.before,d=h.values||[];return new Lo(d,f)}(n.endAt)),pb(e,i,o,r,a,"F",l,c)}function Gb(t,e){const n=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Te()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function gg(t){return t?t.unaryFilter!==void 0?[Xb(t)]:t.fieldFilter!==void 0?[Yb(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>gg(e)).reduce((e,n)=>e.concat(n)):Te():[]}function Wb(t){return Mb[t]}function Qb(t){return $b[t]}function ii(t){return{fieldPath:t.canonicalString()}}function ai(t){return zt.fromServerFormat(t.fieldPath)}function Yb(t){return dn.create(ai(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Te()}}(t.fieldFilter.op),t.fieldFilter.value)}function Xb(t){switch(t.unaryFilter.op){case"IS_NAN":const e=ai(t.unaryFilter.field);return dn.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=ai(t.unaryFilter.field);return dn.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ai(t.unaryFilter.field);return dn.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=ai(t.unaryFilter.field);return dn.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Te()}}function xb(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function _g(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jb{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&Tb(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Xi(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Xi(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=cg();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const l=ig(o,a);l!==null&&s.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(Re.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Me())}isEqual(e){return this.batchId===e.batchId&&vi(this.mutations,e.mutations,(n,s)=>lh(n,s))&&vi(this.baseMutations,e.baseMutations,(n,s)=>lh(n,s))}}class $c{constructor(e,n,s,i){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(e,n,s){tt(e.mutations.length===s.length);let i=Rb;const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new $c(e,n,s,i)}}/**
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
 */class Zb{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Fs{constructor(e,n,s,i,r=Re.min(),o=Re.min(),a=Xt.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Fs(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Fs(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Fs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ew{constructor(e){this.re=e}}function tw(t){const e=zb({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Nl(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nw{constructor(){this.Ye=new sw}addToCollectionParentIndex(e,n){return this.Ye.add(n),ne.resolve()}getCollectionParents(e,n){return ne.resolve(this.Ye.getEntries(n))}addFieldIndex(e,n){return ne.resolve()}deleteFieldIndex(e,n){return ne.resolve()}getDocumentsMatchingTarget(e,n){return ne.resolve(null)}getIndexType(e,n){return ne.resolve(0)}getFieldIndexes(e,n){return ne.resolve([])}getNextCollectionGroupToUpdate(e){return ne.resolve(null)}getMinOffset(e,n){return ne.resolve(Ts.min())}getMinOffsetFromCollectionGroup(e,n){return ne.resolve(Ts.min())}updateCollectionGroup(e,n,s){return ne.resolve()}updateIndexEntries(e,n){return ne.resolve()}}class sw{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new It(it.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new It(it.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class iw{constructor(){this.changes=new Di(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Vt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?ne.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class rw{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ow{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(s=i,this.getBaseDocument(e,n,s))).next(i=>(s!==null&&Xi(s.mutation,i,In.empty(),Et.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,Me()).next(()=>s))}getLocalViewOfDocuments(e,n,s=Me()){const i=$s();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,s).next(r=>{let o=Hi();return r.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=$s();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,Me()))}populateOverlays(e,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,i){let r=ss();const o=xi(),a=xi();return n.forEach((l,c)=>{const h=s.get(c.key);i.has(c.key)&&(h===void 0||h.mutation instanceof Ps)?r=r.insert(c.key,c):h!==void 0&&(o.set(c.key,h.mutation.getFieldMask()),Xi(h.mutation,c,h.mutation.getFieldMask(),Et.now()))}),this.recalculateAndSaveOverlays(e,r).next(l=>(l.forEach((c,h)=>o.set(c,h)),n.forEach((c,h)=>{var f;return a.set(c,new rw(h,(f=o.get(c))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const s=xi();let i=new Tt((o,a)=>o-a),r=Me();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let h=s.get(l)||In.empty();h=a.applyToLocalView(c,h),s.set(l,h);const f=(i.get(a.batchId)||Me()).add(l);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,h=l.value,f=cg();h.forEach(d=>{if(!r.has(d)){const m=ig(n.get(d),s.get(d));m!==null&&f.set(d,m),r=r.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return ne.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(i){return be.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):_b(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):ne.resolve($s());let a=-1,l=r;return o.next(c=>ne.forEach(c,(h,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),r.get(h)?ne.resolve():this.getBaseDocument(e,h,f).next(d=>{l=l.insert(h,d)}))).next(()=>this.populateOverlays(e,c,r)).next(()=>this.computeViews(e,l,c,Me())).next(h=>({batchId:a,changes:lg(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new be(n)).next(s=>{let i=Hi();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const i=n.collectionGroup;let r=Hi();return this.indexManager.getCollectionParents(e,i).next(o=>ne.forEach(o,a=>{const l=function(c,h){return new fa(h,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,s).next(c=>{c.forEach((h,f)=>{r=r.insert(h,f)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,s){let i;return this.remoteDocumentCache.getAllFromCollection(e,n.path,s).next(r=>(i=r,this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId))).next(r=>{r.forEach((a,l)=>{const c=l.getKey();i.get(c)===null&&(i=i.insert(c,Vt.newInvalidDocument(c)))});let o=Hi();return i.forEach((a,l)=>{const c=r.get(a);c!==void 0&&Xi(c.mutation,l,In.empty(),Et.now()),Oc(n,l)&&(o=o.insert(a,l))}),o})}getBaseDocument(e,n,s){return s===null||s.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):ne.resolve(Vt.newInvalidDocument(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aw{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return ne.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:xn(s.createTime)}),ne.resolve()}getNamedQuery(e,n){return ne.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(s){return{name:s.name,query:tw(s.bundledQuery),readTime:xn(s.readTime)}}(n)),ne.resolve()}}/**
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
 */class lw{constructor(){this.overlays=new Tt(be.comparator),this.es=new Map}getOverlay(e,n){return ne.resolve(this.overlays.get(n))}getOverlays(e,n){const s=$s();return ne.forEach(n,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((i,r)=>{this.ue(e,n,r)}),ne.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.es.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.es.delete(s)),ne.resolve()}getOverlaysForCollection(e,n,s){const i=$s(),r=n.length+1,o=new be(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===r&&l.largestBatchId>s&&i.set(l.getKey(),l)}return ne.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new Tt((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>s){let h=r.get(c.largestBatchId);h===null&&(h=$s(),r=r.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const a=$s(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,h)=>a.set(c,h)),!(a.size()>=i)););return ne.resolve(a)}ue(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.es.get(i.largestBatchId).delete(s.key);this.es.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new Zb(n,s));let r=this.es.get(n);r===void 0&&(r=Me(),this.es.set(n,r)),this.es.set(n,r.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(){this.ns=new It(Nt.ss),this.rs=new It(Nt.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const s=new Nt(e,n);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.cs(new Nt(e,n))}hs(e,n){e.forEach(s=>this.removeReference(s,n))}ls(e){const n=new be(new it([])),s=new Nt(n,e),i=new Nt(n,e+1),r=[];return this.rs.forEachInRange([s,i],o=>{this.cs(o),r.push(o.key)}),r}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new be(new it([])),s=new Nt(n,e),i=new Nt(n,e+1);let r=Me();return this.rs.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new Nt(e,0),s=this.ns.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Nt{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return be.comparator(e.key,n.key)||Ge(e._s,n._s)}static os(e,n){return Ge(e._s,n._s)||be.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cw{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new It(Nt.ss)}checkEmpty(e){return ne.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Jb(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.gs=this.gs.add(new Nt(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return ne.resolve(o)}lookupMutationBatch(e,n){return ne.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.ps(s),r=i<0?0:i;return ne.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return ne.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return ne.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Nt(n,0),i=new Nt(n,Number.POSITIVE_INFINITY),r=[];return this.gs.forEachInRange([s,i],o=>{const a=this.ys(o._s);r.push(a)}),ne.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new It(Ge);return n.forEach(i=>{const r=new Nt(i,0),o=new Nt(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([r,o],a=>{s=s.add(a._s)})}),ne.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;be.isDocumentKey(r)||(r=r.child(""));const o=new Nt(new be(r),0);let a=new It(Ge);return this.gs.forEachWhile(l=>{const c=l.key.path;return!!s.isPrefixOf(c)&&(c.length===i&&(a=a.add(l._s)),!0)},o),ne.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(s=>{const i=this.ys(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){tt(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return ne.forEach(n.mutations,i=>{const r=new Nt(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.gs=s})}An(e){}containsKey(e,n){const s=new Nt(n,0),i=this.gs.firstAfterOrEqual(s);return ne.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,ne.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uw{constructor(e){this.Es=e,this.docs=new Tt(be.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Es(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return ne.resolve(s?s.document.mutableCopy():Vt.newInvalidDocument(n))}getEntries(e,n){let s=ss();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():Vt.newInvalidDocument(i))}),ne.resolve(s)}getAllFromCollection(e,n,s){let i=ss();const r=new be(n.child("")),o=this.docs.getIteratorFrom(r);for(;o.hasNext();){const{key:a,value:{document:l}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||x1(X1(l),s)<=0||(i=i.insert(l.key,l.mutableCopy()))}return ne.resolve(i)}getAllFromCollectionGroup(e,n,s,i){Te()}As(e,n){return ne.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new hw(this)}getSize(e){return ne.resolve(this.size)}}class hw extends iw{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.Yn.addEntry(e,i)):this.Yn.removeEntry(s)}),ne.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fw{constructor(e){this.persistence=e,this.Rs=new Di(n=>Pc(n),Rc),this.lastRemoteSnapshotVersion=Re.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Uc,this.targetCount=0,this.vs=wi.Pn()}forEachTarget(e,n){return this.Rs.forEach((s,i)=>n(i)),ne.resolve()}getLastRemoteSnapshotVersion(e){return ne.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return ne.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),ne.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),ne.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new wi(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,ne.resolve()}updateTargetData(e,n){return this.Dn(n),ne.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,ne.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Rs.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),ne.waitFor(r).next(()=>i)}getTargetCount(e){return ne.resolve(this.targetCount)}getTargetData(e,n){const s=this.Rs.get(n)||null;return ne.resolve(s)}addMatchingKeys(e,n,s){return this.Ps.us(n,s),ne.resolve()}removeMatchingKeys(e,n,s){this.Ps.hs(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),ne.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),ne.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Ps.ds(n);return ne.resolve(s)}containsKey(e,n){return ne.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dw{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new Ac(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new fw(this),this.indexManager=new nw,this.remoteDocumentCache=function(s){return new uw(s)}(s=>this.referenceDelegate.xs(s)),this.It=new ew(n),this.Ns=new aw(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new lw,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Vs[e.toKey()];return s||(s=new cw(n,this.referenceDelegate),this.Vs[e.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,s){_e("MemoryPersistence","Starting transaction:",e);const i=new pw(this.Ss.next());return this.referenceDelegate.ks(),s(i).next(r=>this.referenceDelegate.Os(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Ms(e,n){return ne.or(Object.values(this.Vs).map(s=>()=>s.containsKey(e,n)))}}class pw extends Z1{constructor(e){super(),this.currentSequenceNumber=e}}class Fc{constructor(e){this.persistence=e,this.Fs=new Uc,this.$s=null}static Bs(e){return new Fc(e)}get Ls(){if(this.$s)return this.$s;throw Te()}addReference(e,n,s){return this.Fs.addReference(s,n),this.Ls.delete(s.toString()),ne.resolve()}removeReference(e,n,s){return this.Fs.removeReference(s,n),this.Ls.add(s.toString()),ne.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),ne.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(i=>this.Ls.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.Ls.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ne.forEach(this.Ls,s=>{const i=be.fromPath(s);return this.Us(e,i).next(r=>{r||n.removeEntry(i,Re.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.Us(e,n).next(s=>{s?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}Us(e,n){return ne.or([()=>ne.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.Si=s,this.Di=i}static Ci(e,n){let s=Me(),i=Me();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new Bc(e,n.fromCache,s,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mw{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,s,i){return this.ki(e,n).next(r=>r||this.Oi(e,n,i,s)).next(r=>r||this.Mi(e,n))}ki(e,n){if(oh(n))return ne.resolve(null);let s=ns(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Nl(n,null,"F"),s=ns(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=Me(...r);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(l=>{const c=this.Fi(n,a);return this.$i(n,c,o,l.readTime)?this.ki(e,Nl(n,null,"F")):this.Bi(e,c,n,l)}))})))}Oi(e,n,s,i){return oh(n)||i.isEqual(Re.min())?this.Mi(e,n):this.Ni.getDocuments(e,s).next(r=>{const o=this.Fi(n,r);return this.$i(n,o,s,i)?this.Mi(e,n):(xu()<=Ke.DEBUG&&_e("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ol(n)),this.Bi(e,o,n,Y1(i,-1)))})}Fi(e,n){let s=new It(xm(e));return n.forEach((i,r)=>{Oc(e,r)&&(s=s.add(r))}),s}$i(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Mi(e,n){return xu()<=Ke.DEBUG&&_e("QueryEngine","Using full collection scan to execute query:",Ol(n)),this.Ni.getDocumentsMatchingQuery(e,n,Ts.min())}Bi(e,n,s,i){return this.Ni.getDocumentsMatchingQuery(e,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gw{constructor(e,n,s,i){this.persistence=e,this.Li=n,this.It=i,this.Ui=new Tt(Ge),this.qi=new Di(r=>Pc(r),Rc),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(s)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ow(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ui))}}function _w(t,e,n,s){return new gw(t,e,n,s)}async function vg(t,e){const n=Ae(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.Qi(e),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let l=Me();for(const c of i){o.push(c.batchId);for(const h of c.mutations)l=l.add(h.key)}for(const c of r){a.push(c.batchId);for(const h of c.mutations)l=l.add(h.key)}return n.localDocuments.getDocuments(s,l).next(c=>({ji:c,removedBatchIds:o,addedBatchIds:a}))})})}function vw(t,e){const n=Ae(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,c){const h=l.batch,f=h.keys();let d=ne.resolve();return f.forEach(m=>{d=d.next(()=>c.getEntry(a,m)).next(_=>{const v=l.docVersions.get(m);tt(v!==null),_.version.compareTo(v)<0&&(h.applyToRemoteDocument(_,l),_.isValidDocument()&&(_.setReadTime(l.commitVersion),c.addEntry(_)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,h))}(n,s,e,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=Me();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,i))})}function yg(t){const e=Ae(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function yw(t,e){const n=Ae(t),s=e.snapshotVersion;let i=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.Ui;const a=[];e.targetChanges.forEach((h,f)=>{const d=i.get(f);if(!d)return;a.push(n.Cs.removeMatchingKeys(r,h.removedDocuments,f).next(()=>n.Cs.addMatchingKeys(r,h.addedDocuments,f)));let m=d.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.has(f)?m=m.withResumeToken(Xt.EMPTY_BYTE_STRING,Re.min()).withLastLimboFreeSnapshotVersion(Re.min()):h.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(h.resumeToken,s)),i=i.insert(f,m),function(_,v,y){return _.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-_.snapshotVersion.toMicroseconds()>=3e8?!0:y.addedDocuments.size+y.modifiedDocuments.size+y.removedDocuments.size>0}(d,m,h)&&a.push(n.Cs.updateTargetData(r,m))});let l=ss(),c=Me();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,h))}),a.push(bw(r,o,e.documentUpdates).next(h=>{l=h.Wi,c=h.zi})),!s.isEqual(Re.min())){const h=n.Cs.getLastRemoteSnapshotVersion(r).next(f=>n.Cs.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(h)}return ne.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,l,c)).next(()=>l)}).then(r=>(n.Ui=i,r))}function bw(t,e,n){let s=Me(),i=Me();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let o=ss();return n.forEach((a,l)=>{const c=r.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(Re.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):_e("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{Wi:o,zi:i}})}function ww(t,e){const n=Ae(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function kw(t,e){const n=Ae(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Cs.getTargetData(s,e).next(r=>r?(i=r,ne.resolve(i)):n.Cs.allocateTargetId(s).next(o=>(i=new Fs(e,o,0,s.currentSequenceNumber),n.Cs.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.Ui.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(s.targetId,s),n.qi.set(e,s.targetId)),s})}async function Ul(t,e,n){const s=Ae(t),i=s.Ui.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Mr(o))throw o;_e("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ui=s.Ui.remove(e),s.qi.delete(i.target)}function mh(t,e,n){const s=Ae(t);let i=Re.min(),r=Me();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,l,c){const h=Ae(a),f=h.qi.get(c);return f!==void 0?ne.resolve(h.Ui.get(f)):h.Cs.getTargetData(l,c)}(s,o,ns(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{r=l})}).next(()=>s.Li.getDocumentsMatchingQuery(o,e,n?i:Re.min(),n?r:Me())).next(a=>(Ew(s,vb(e),a),{documents:a,Hi:r})))}function Ew(t,e,n){let s=t.Ki.get(e)||Re.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),t.Ki.set(e,s)}class gh{constructor(){this.activeTargetIds=ug()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Iw{constructor(){this.Lr=new gh,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,n,s){this.Ur[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new gh,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tw{qr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){_e("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){_e("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cw={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sw{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aw extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,s,i,r){const o=this.ho(e,n);_e("RestConnection","Sending: ",o,s);const a={};return this.lo(a,i,r),this.fo(e,o,a,s).then(l=>(_e("RestConnection","Received: ",l),l),l=>{throw Al("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",s),l})}_o(e,n,s,i,r,o){return this.ao(e,n,s,i,r)}lo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Ai,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>e[r]=i),s&&s.headers.forEach((i,r)=>e[r]=i)}ho(e,n){const s=Cw[e];return`${this.oo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,s,i){return new Promise((r,o)=>{const a=new B1;a.setWithCredentials(!0),a.listenOnce($1.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case xa.NO_ERROR:const c=a.getResponseJson();_e("Connection","XHR received:",JSON.stringify(c)),r(c);break;case xa.TIMEOUT:_e("Connection",'RPC "'+e+'" timed out'),o(new we(te.DEADLINE_EXCEEDED,"Request time out"));break;case xa.HTTP_ERROR:const h=a.getStatus();if(_e("Connection",'RPC "'+e+'" failed with status:',h,"response text:",a.getResponseText()),h>0){const f=a.getResponseJson().error;if(f&&f.status&&f.message){const d=function(m){const _=m.toLowerCase().replace(/_/g,"-");return Object.values(te).indexOf(_)>=0?_:te.UNKNOWN}(f.status);o(new we(d,f.message))}else o(new we(te.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new we(te.UNAVAILABLE,"Connection failed."));break;default:Te()}}finally{_e("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(i);a.send(n,"POST",l,s,15)})}wo(e,n,s){const i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=L1(),o=M1(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new F1({})),this.lo(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const l=i.join("");_e("Connection","Creating WebChannel: "+l,a);const c=r.createWebChannel(l,a);let h=!1,f=!1;const d=new Sw({Hr:_=>{f?_e("Connection","Not sending because WebChannel is closed:",_):(h||(_e("Connection","Opening WebChannel transport."),c.open(),h=!0),_e("Connection","WebChannel sending:",_),c.send(_))},Jr:()=>c.close()}),m=(_,v,y)=>{_.listen(v,E=>{try{y(E)}catch(I){setTimeout(()=>{throw I},0)}})};return m(c,to.EventType.OPEN,()=>{f||_e("Connection","WebChannel transport opened.")}),m(c,to.EventType.CLOSE,()=>{f||(f=!0,_e("Connection","WebChannel transport closed"),d.io())}),m(c,to.EventType.ERROR,_=>{f||(f=!0,Al("Connection","WebChannel transport errored:",_),d.io(new we(te.UNAVAILABLE,"The operation could not be completed")))}),m(c,to.EventType.MESSAGE,_=>{var v;if(!f){const y=_.data[0];tt(!!y);const E=y,I=E.error||((v=E[0])===null||v===void 0?void 0:v.error);if(I){_e("Connection","WebChannel received error:",I);const O=I.status;let D=function(F){const N=_t[F];if(N!==void 0)return og(N)}(O),$=I.message;D===void 0&&(D=te.INTERNAL,$="Unknown error status: "+O+" with message "+I.message),f=!0,d.io(new we(D,$)),c.close()}else _e("Connection","WebChannel received:",y),d.ro(y)}}),m(o,U1.STAT_EVENT,_=>{_.stat===Yu.PROXY?_e("Connection","Detected buffering proxy"):_.stat===Yu.NOPROXY&&_e("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}function Za(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _a(t){return new Ub(t,!0)}class bg{constructor(e,n,s=1e3,i=1.5,r=6e4){this.Hs=e,this.timerId=n,this.mo=s,this.yo=i,this.po=r,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-s);i>0&&_e("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{constructor(e,n,s,i,r,o,a,l){this.Hs=e,this.vo=s,this.Vo=i,this.So=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Do=0,this.Co=null,this.xo=null,this.stream=null,this.No=new bg(e,n)}ko(){return this.state===1||this.state===5||this.Oo()}Oo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Mo()}async stop(){this.ko()&&await this.close(0)}Fo(){this.state=0,this.No.reset()}$o(){this.Oo()&&this.Co===null&&(this.Co=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.Bo()))}Lo(e){this.Uo(),this.stream.send(e)}async Bo(){if(this.Oo())return this.close(0)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}qo(){this.xo&&(this.xo.cancel(),this.xo=null)}async close(e,n){this.Uo(),this.qo(),this.No.cancel(),this.Do++,e!==4?this.No.reset():n&&n.code===te.RESOURCE_EXHAUSTED?(ts(n.toString()),ts("Using maximum backoff delay to prevent overloading the backend."),this.No.Ao()):n&&n.code===te.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Ko(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}Ko(){}auth(){this.state=1;const e=this.Go(this.Do),n=this.Do;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Do===n&&this.Qo(s,i)},s=>{e(()=>{const i=new we(te.UNKNOWN,"Fetching auth token failed: "+s.message);return this.jo(i)})})}Qo(e,n){const s=this.Go(this.Do);this.stream=this.Wo(e,n),this.stream.Yr(()=>{s(()=>(this.state=2,this.xo=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.Oo()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{s(()=>this.jo(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Mo(){this.state=5,this.No.Ro(async()=>{this.state=0,this.start()})}jo(e){return _e("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Go(e){return n=>{this.Hs.enqueueAndForget(()=>this.Do===e?n():(_e("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Dw extends wg{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.It=r}Wo(e,n){return this.So.wo("Listen",e,n)}onMessage(e){this.No.reset();const n=Vb(this.It,e),s=function(i){if(!("targetChange"in i))return Re.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?Re.min():r.readTime?xn(r.readTime):Re.min()}(e);return this.listener.zo(n,s)}Ho(e){const n={};n.database=$l(this.It),n.addTarget=function(i,r){let o;const a=r.target;return o=Rl(a)?{documents:Hb(i,a)}:{query:Kb(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=dg(i,r.resumeToken):r.snapshotVersion.compareTo(Re.min())>0&&(o.readTime=Uo(i,r.snapshotVersion.toTimestamp())),o}(this.It,e);const s=Gb(this.It,e);s&&(n.labels=s),this.Lo(n)}Jo(e){const n={};n.database=$l(this.It),n.removeTarget=e,this.Lo(n)}}class Pw extends wg{constructor(e,n,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.It=r,this.Yo=!1}get Xo(){return this.Yo}start(){this.Yo=!1,this.lastStreamToken=void 0,super.start()}Ko(){this.Yo&&this.Zo([])}Wo(e,n){return this.So.wo("Write",e,n)}onMessage(e){if(tt(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Yo){this.No.reset();const n=qb(e.writeResults,e.commitTime),s=xn(e.commitTime);return this.listener.tu(s,n)}return tt(!e.writeResults||e.writeResults.length===0),this.Yo=!0,this.listener.eu()}nu(){const e={};e.database=$l(this.It),this.Lo(e)}Zo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>jb(this.It,s))};this.Lo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rw extends class{}{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.So=s,this.It=i,this.su=!1}iu(){if(this.su)throw new we(te.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,s){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.So.ao(e,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===te.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new we(te.UNKNOWN,i.toString())})}_o(e,n,s,i){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.So._o(e,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===te.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new we(te.UNKNOWN,r.toString())})}terminate(){this.su=!0}}class Nw{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ru=0,this.ou=null,this.uu=!0}cu(){this.ru===0&&(this.au("Unknown"),this.ou=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ou=null,this.hu("Backend didn't respond within 10 seconds."),this.au("Offline"),Promise.resolve())))}lu(e){this.state==="Online"?this.au("Unknown"):(this.ru++,this.ru>=1&&(this.fu(),this.hu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.au("Offline")))}set(e){this.fu(),this.ru=0,e==="Online"&&(this.uu=!1),this.au(e)}au(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}hu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.uu?(ts(n),this.uu=!1):_e("OnlineStateTracker",n)}fu(){this.ou!==null&&(this.ou.cancel(),this.ou=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ow{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.du=[],this._u=new Map,this.wu=new Set,this.mu=[],this.gu=r,this.gu.qr(o=>{s.enqueueAndForget(async()=>{Zs(this)&&(_e("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=Ae(a);l.wu.add(4),await Fr(l),l.yu.set("Unknown"),l.wu.delete(4),await va(l)}(this))})}),this.yu=new Nw(s,i)}}async function va(t){if(Zs(t))for(const e of t.mu)await e(!0)}async function Fr(t){for(const e of t.mu)await e(!1)}function kg(t,e){const n=Ae(t);n._u.has(e.targetId)||(n._u.set(e.targetId,e),qc(n)?jc(n):Pi(n).Oo()&&Vc(n,e))}function Eg(t,e){const n=Ae(t),s=Pi(n);n._u.delete(e),s.Oo()&&Ig(n,e),n._u.size===0&&(s.Oo()?s.$o():Zs(n)&&n.yu.set("Unknown"))}function Vc(t,e){t.pu.Mt(e.targetId),Pi(t).Ho(e)}function Ig(t,e){t.pu.Mt(e),Pi(t).Jo(e)}function jc(t){t.pu=new Lb({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t._u.get(e)||null}),Pi(t).start(),t.yu.cu()}function qc(t){return Zs(t)&&!Pi(t).ko()&&t._u.size>0}function Zs(t){return Ae(t).wu.size===0}function Tg(t){t.pu=void 0}async function Lw(t){t._u.forEach((e,n)=>{Vc(t,e)})}async function Mw(t,e){Tg(t),qc(t)?(t.yu.lu(e),jc(t)):t.yu.set("Unknown")}async function $w(t,e,n){if(t.yu.set("Online"),e instanceof fg&&e.state===2&&e.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s._u.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s._u.delete(o),s.pu.removeTarget(o))}(t,e)}catch(s){_e("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Fo(t,s)}else if(e instanceof uo?t.pu.Gt(e):e instanceof hg?t.pu.Yt(e):t.pu.Wt(e),!n.isEqual(Re.min()))try{const s=await yg(t.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.pu.te(r);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const c=i._u.get(l);c&&i._u.set(l,c.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const l=i._u.get(a);if(!l)return;i._u.set(a,l.withResumeToken(Xt.EMPTY_BYTE_STRING,l.snapshotVersion)),Ig(i,a);const c=new Fs(l.target,a,1,l.sequenceNumber);Vc(i,c)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){_e("RemoteStore","Failed to raise snapshot:",s),await Fo(t,s)}}async function Fo(t,e,n){if(!Mr(e))throw e;t.wu.add(1),await Fr(t),t.yu.set("Offline"),n||(n=()=>yg(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{_e("RemoteStore","Retrying IndexedDB access"),await n(),t.wu.delete(1),await va(t)})}function Cg(t,e){return e().catch(n=>Fo(t,n,e))}async function ya(t){const e=Ae(t),n=Ss(e);let s=e.du.length>0?e.du[e.du.length-1].batchId:-1;for(;Uw(e);)try{const i=await ww(e.localStore,s);if(i===null){e.du.length===0&&n.$o();break}s=i.batchId,Fw(e,i)}catch(i){await Fo(e,i)}Sg(e)&&Ag(e)}function Uw(t){return Zs(t)&&t.du.length<10}function Fw(t,e){t.du.push(e);const n=Ss(t);n.Oo()&&n.Xo&&n.Zo(e.mutations)}function Sg(t){return Zs(t)&&!Ss(t).ko()&&t.du.length>0}function Ag(t){Ss(t).start()}async function Bw(t){Ss(t).nu()}async function Vw(t){const e=Ss(t);for(const n of t.du)e.Zo(n.mutations)}async function jw(t,e,n){const s=t.du.shift(),i=$c.from(s,e,n);await Cg(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await ya(t)}async function qw(t,e){e&&Ss(t).Xo&&await async function(n,s){if(i=s.code,Db(i)&&i!==te.ABORTED){const r=n.du.shift();Ss(n).Fo(),await Cg(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await ya(n)}var i}(t,e),Sg(t)&&Ag(t)}async function vh(t,e){const n=Ae(t);n.asyncQueue.verifyOperationInProgress(),_e("RemoteStore","RemoteStore received new credentials");const s=Zs(n);n.wu.add(3),await Fr(n),s&&n.yu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.wu.delete(3),await va(n)}async function Hw(t,e){const n=Ae(t);e?(n.wu.delete(2),await va(n)):e||(n.wu.add(2),await Fr(n),n.yu.set("Unknown"))}function Pi(t){return t.Iu||(t.Iu=function(e,n,s){const i=Ae(e);return i.iu(),new Dw(n,i.So,i.authCredentials,i.appCheckCredentials,i.It,s)}(t.datastore,t.asyncQueue,{Yr:Lw.bind(null,t),Zr:Mw.bind(null,t),zo:$w.bind(null,t)}),t.mu.push(async e=>{e?(t.Iu.Fo(),qc(t)?jc(t):t.yu.set("Unknown")):(await t.Iu.stop(),Tg(t))})),t.Iu}function Ss(t){return t.Tu||(t.Tu=function(e,n,s){const i=Ae(e);return i.iu(),new Pw(n,i.So,i.authCredentials,i.appCheckCredentials,i.It,s)}(t.datastore,t.asyncQueue,{Yr:Bw.bind(null,t),Zr:qw.bind(null,t),eu:Vw.bind(null,t),tu:jw.bind(null,t)}),t.mu.push(async e=>{e?(t.Tu.Fo(),await ya(t)):(await t.Tu.stop(),t.du.length>0&&(_e("RemoteStore",`Stopping write stream with ${t.du.length} pending writes`),t.du=[]))})),t.Tu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new ys,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new Hc(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new we(te.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Kc(t,e){if(ts("AsyncQueue",`${e}: ${t}`),Mr(t))return new we(te.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e){this.comparator=e?(n,s)=>e(n,s)||be.comparator(n.key,s.key):(n,s)=>be.comparator(n.key,s.key),this.keyedMap=Hi(),this.sortedSet=new Tt(this.comparator)}static emptySet(e){return new hi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof hi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class yh{constructor(){this.Eu=new Tt(be.comparator)}track(e){const n=e.doc.key,s=this.Eu.get(n);s?e.type!==0&&s.type===3?this.Eu=this.Eu.insert(n,e):e.type===3&&s.type!==1?this.Eu=this.Eu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Eu=this.Eu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Eu=this.Eu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Eu=this.Eu.remove(n):e.type===1&&s.type===2?this.Eu=this.Eu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Eu=this.Eu.insert(n,{type:2,doc:e.doc}):Te():this.Eu=this.Eu.insert(n,e)}Au(){const e=[];return this.Eu.inorderTraversal((n,s)=>{e.push(s)}),e}}class ki{constructor(e,n,s,i,r,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,s,i,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new ki(e,n,hi.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&da(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kw{constructor(){this.Ru=void 0,this.listeners=[]}}class zw{constructor(){this.queries=new Di(e=>Xm(e),da),this.onlineState="Unknown",this.bu=new Set}}async function Dg(t,e){const n=Ae(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new Kw),i)try{r.Ru=await n.onListen(s)}catch(o){const a=Kc(o,`Initialization of query '${Ol(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,r),r.listeners.push(e),e.Pu(n.onlineState),r.Ru&&e.vu(r.Ru)&&zc(n)}async function Pg(t,e){const n=Ae(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function Gw(t,e){const n=Ae(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.vu(i)&&(s=!0);o.Ru=i}}s&&zc(n)}function Ww(t,e,n){const s=Ae(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function zc(t){t.bu.forEach(e=>{e.next()})}class Rg{constructor(e,n,s){this.query=e,this.Vu=n,this.Su=!1,this.Du=null,this.onlineState="Unknown",this.options=s||{}}vu(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new ki(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Su?this.Cu(e)&&(this.Vu.next(e),n=!0):this.xu(e,this.onlineState)&&(this.Nu(e),n=!0),this.Du=e,n}onError(e){this.Vu.error(e)}Pu(e){this.onlineState=e;let n=!1;return this.Du&&!this.Su&&this.xu(this.Du,e)&&(this.Nu(this.Du),n=!0),n}xu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.ku||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Cu(e){if(e.docChanges.length>0)return!0;const n=this.Du&&this.Du.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Nu(e){e=ki.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Su=!0,this.Vu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ng{constructor(e){this.key=e}}class Og{constructor(e){this.key=e}}class Qw{constructor(e,n){this.query=e,this.Uu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=Me(),this.mutatedKeys=Me(),this.Gu=xm(e),this.Qu=new hi(this.Gu)}get ju(){return this.Uu}Wu(e,n){const s=n?n.zu:new yh,i=n?n.Qu:this.Qu;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,f)=>{const d=i.get(h),m=Oc(this.query,f)?f:null,_=!!d&&this.mutatedKeys.has(d.key),v=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let y=!1;d&&m?d.data.isEqual(m.data)?_!==v&&(s.track({type:3,doc:m}),y=!0):this.Hu(d,m)||(s.track({type:2,doc:m}),y=!0,(l&&this.Gu(m,l)>0||c&&this.Gu(m,c)<0)&&(a=!0)):!d&&m?(s.track({type:0,doc:m}),y=!0):d&&!m&&(s.track({type:1,doc:d}),y=!0,(l||c)&&(a=!0)),y&&(m?(o=o.add(m),r=v?r.add(h):r.delete(h)):(o=o.delete(h),r=r.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),r=r.delete(h.key),s.track({type:1,doc:h})}return{Qu:o,zu:s,$i:a,mutatedKeys:r}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const i=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const r=e.zu.Au();r.sort((c,h)=>function(f,d){const m=_=>{switch(_){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Te()}};return m(f)-m(d)}(c.type,h.type)||this.Gu(c.doc,h.doc)),this.Ju(s);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,l=a!==this.qu;return this.qu=a,r.length!==0||l?{snapshot:new ki(this.query,e.Qu,i,r,e.mutatedKeys,a===0,l,!1,!!s&&s.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}Pu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new yh,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.Uu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.Uu=this.Uu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Uu=this.Uu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=Me(),this.Qu.forEach(s=>{this.Zu(s.key)&&(this.Ku=this.Ku.add(s.key))});const n=[];return e.forEach(s=>{this.Ku.has(s)||n.push(new Og(s))}),this.Ku.forEach(s=>{e.has(s)||n.push(new Ng(s))}),n}tc(e){this.Uu=e.Hi,this.Ku=Me();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return ki.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class Yw{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class Xw{constructor(e){this.key=e,this.nc=!1}}class xw{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new Di(a=>Xm(a),da),this.rc=new Map,this.oc=new Set,this.uc=new Tt(be.comparator),this.cc=new Map,this.ac=new Uc,this.hc={},this.lc=new Map,this.fc=wi.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function Jw(t,e){const n=lk(t);let s,i;const r=n.ic.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.ec();else{const o=await kw(n.localStore,ns(e));n.isPrimaryClient&&kg(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await Zw(n,e,s,a==="current",o.resumeToken)}return i}async function Zw(t,e,n,s,i){t._c=(f,d,m)=>async function(_,v,y,E){let I=v.view.Wu(y);I.$i&&(I=await mh(_.localStore,v.query,!1).then(({documents:$})=>v.view.Wu($,I)));const O=E&&E.targetChanges.get(v.targetId),D=v.view.applyChanges(I,_.isPrimaryClient,O);return wh(_,v.targetId,D.Xu),D.snapshot}(t,f,d,m);const r=await mh(t.localStore,e,!0),o=new Qw(e,r.Hi),a=o.Wu(r.documents),l=Ur.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,l);wh(t,n,c.Xu);const h=new Yw(e,n,o);return t.ic.set(e,h),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),c.snapshot}async function ek(t,e){const n=Ae(t),s=n.ic.get(e),i=n.rc.get(s.targetId);if(i.length>1)return n.rc.set(s.targetId,i.filter(r=>!da(r,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Ul(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Eg(n.remoteStore,s.targetId),Fl(n,s.targetId)}).catch(Lr)):(Fl(n,s.targetId),await Ul(n.localStore,s.targetId,!0))}async function tk(t,e,n){const s=ck(t);try{const i=await function(r,o){const a=Ae(r),l=Et.now(),c=o.reduce((d,m)=>d.add(m.key),Me());let h,f;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let m=ss(),_=Me();return a.Gi.getEntries(d,c).next(v=>{m=v,m.forEach((y,E)=>{E.isValidDocument()||(_=_.add(y))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,m)).next(v=>{h=v;const y=[];for(const E of o){const I=Cb(E,h.get(E.key).overlayedDocument);I!=null&&y.push(new Ps(E.key,I,Qm(I.value.mapValue),Tn.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,y,o)}).next(v=>{f=v;const y=v.applyToLocalDocumentSet(h,_);return a.documentOverlayCache.saveOverlays(d,v.batchId,y)})}).then(()=>({batchId:f.batchId,changes:lg(h)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let l=r.hc[r.currentUser.toKey()];l||(l=new Tt(Ge)),l=l.insert(o,a),r.hc[r.currentUser.toKey()]=l}(s,i.batchId,n),await Br(s,i.changes),await ya(s.remoteStore)}catch(i){const r=Kc(i,"Failed to persist write");n.reject(r)}}async function Lg(t,e){const n=Ae(t);try{const s=await yw(n.localStore,e);e.targetChanges.forEach((i,r)=>{const o=n.cc.get(r);o&&(tt(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.nc=!0:i.modifiedDocuments.size>0?tt(o.nc):i.removedDocuments.size>0&&(tt(o.nc),o.nc=!1))}),await Br(n,s,e)}catch(s){await Lr(s)}}function bh(t,e,n){const s=Ae(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.ic.forEach((r,o)=>{const a=o.view.Pu(e);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=Ae(r);a.onlineState=o;let l=!1;a.queries.forEach((c,h)=>{for(const f of h.listeners)f.Pu(o)&&(l=!0)}),l&&zc(a)}(s.eventManager,e),i.length&&s.sc.zo(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function nk(t,e,n){const s=Ae(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.cc.get(e),r=i&&i.key;if(r){let o=new Tt(be.comparator);o=o.insert(r,Vt.newNoDocument(r,Re.min()));const a=Me().add(r),l=new ga(Re.min(),new Map,new It(Ge),o,a);await Lg(s,l),s.uc=s.uc.remove(r),s.cc.delete(e),Gc(s)}else await Ul(s.localStore,e,!1).then(()=>Fl(s,e,n)).catch(Lr)}async function sk(t,e){const n=Ae(t),s=e.batch.batchId;try{const i=await vw(n.localStore,e);$g(n,s,null),Mg(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Br(n,i)}catch(i){await Lr(i)}}async function ik(t,e,n){const s=Ae(t);try{const i=await function(r,o){const a=Ae(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let c;return a.mutationQueue.lookupMutationBatch(l,o).next(h=>(tt(h!==null),c=h.keys(),a.mutationQueue.removeMutationBatch(l,h))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,c,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,c)).next(()=>a.localDocuments.getDocuments(l,c))})}(s.localStore,e);$g(s,e,n),Mg(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Br(s,i)}catch(i){await Lr(i)}}function Mg(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function $g(t,e,n){const s=Ae(t);let i=s.hc[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(n?r.reject(n):r.resolve(),i=i.remove(e)),s.hc[s.currentUser.toKey()]=i}}function Fl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.rc.get(e))t.ic.delete(s),n&&t.sc.wc(s,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(s=>{t.ac.containsKey(s)||Ug(t,s)})}function Ug(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(Eg(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),Gc(t))}function wh(t,e,n){for(const s of n)s instanceof Ng?(t.ac.addReference(s.key,e),rk(t,s)):s instanceof Og?(_e("SyncEngine","Document no longer in limbo: "+s.key),t.ac.removeReference(s.key,e),t.ac.containsKey(s.key)||Ug(t,s.key)):Te()}function rk(t,e){const n=e.key,s=n.path.canonicalString();t.uc.get(n)||t.oc.has(s)||(_e("SyncEngine","New document in limbo: "+n),t.oc.add(s),Gc(t))}function Gc(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new be(it.fromString(e)),s=t.fc.next();t.cc.set(s,new Xw(n)),t.uc=t.uc.insert(n,s),kg(t.remoteStore,new Fs(ns(Nc(n.path)),s,2,Ac.at))}}async function Br(t,e,n){const s=Ae(t),i=[],r=[],o=[];s.ic.isEmpty()||(s.ic.forEach((a,l)=>{o.push(s._c(l,e,n).then(c=>{if((c||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const h=Bc.Ci(l.targetId,c);r.push(h)}}))}),await Promise.all(o),s.sc.zo(i),await async function(a,l){const c=Ae(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>ne.forEach(l,f=>ne.forEach(f.Si,d=>c.persistence.referenceDelegate.addReference(h,f.targetId,d)).next(()=>ne.forEach(f.Di,d=>c.persistence.referenceDelegate.removeReference(h,f.targetId,d)))))}catch(h){if(!Mr(h))throw h;_e("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const f=h.targetId;if(!h.fromCache){const d=c.Ui.get(f),m=d.snapshotVersion,_=d.withLastLimboFreeSnapshotVersion(m);c.Ui=c.Ui.insert(f,_)}}}(s.localStore,r))}async function ok(t,e){const n=Ae(t);if(!n.currentUser.isEqual(e)){_e("SyncEngine","User change. New user:",e.toKey());const s=await vg(n.localStore,e);n.currentUser=e,function(i,r){i.lc.forEach(o=>{o.forEach(a=>{a.reject(new we(te.CANCELLED,r))})}),i.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Br(n,s.ji)}}function ak(t,e){const n=Ae(t),s=n.cc.get(e);if(s&&s.nc)return Me().add(s.key);{let i=Me();const r=n.rc.get(e);if(!r)return i;for(const o of r){const a=n.ic.get(o);i=i.unionWith(a.view.ju)}return i}}function lk(t){const e=Ae(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Lg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ak.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=nk.bind(null,e),e.sc.zo=Gw.bind(null,e.eventManager),e.sc.wc=Ww.bind(null,e.eventManager),e}function ck(t){const e=Ae(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=sk.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ik.bind(null,e),e}class uk{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=_a(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return _w(this.persistence,new mw,e.initialUser,this.It)}yc(e){return new dw(Fc.Bs,this.It)}gc(e){return new Iw}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class hk{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>bh(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=ok.bind(null,this.syncEngine),await Hw(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new zw}createDatastore(e){const n=_a(e.databaseInfo.databaseId),s=(i=e.databaseInfo,new Aw(i));var i;return function(r,o,a,l){return new Rw(r,o,a,l)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,i=e.asyncQueue,r=a=>bh(this.syncEngine,a,0),o=_h.C()?new _h:new Tw,new Ow(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(e,n){return function(s,i,r,o,a,l,c){const h=new xw(s,i,r,o,a,l);return c&&(h.dc=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=Ae(e);_e("RemoteStore","RemoteStore shutting down."),n.wu.add(5),await Fr(n),n.gu.shutdown(),n.yu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fg(t,e,n){if(!n)throw new we(te.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function fk(t,e,n,s){if(e===!0&&s===!0)throw new we(te.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function kh(t){if(!be.isDocumentKey(t))throw new we(te.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Eh(t){if(be.isDocumentKey(t))throw new we(te.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Wc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Te()}function Mn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new we(te.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Wc(t);throw new we(te.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ih=new Map;class Th{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new we(te.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new we(te.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,fk("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Th({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new we(te.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new we(te.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Th(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new V1;switch(n.type){case"gapi":const s=n.client;return new K1(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new we(te.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Ih.get(e);n&&(_e("ComponentProvider","Removing Datastore"),Ih.delete(e),n.terminate())}(this),Promise.resolve()}}function dk(t,e,n,s={}){var i;const r=(t=Mn(t,ba))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==e&&Al("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=Kt.MOCK_USER;else{o=Ty(s.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=s.mockUserToken.sub||s.mockUserToken.user_id;if(!l)throw new we(te.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Kt(l)}t._authCredentials=new j1(new Hm(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new bs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new mn(this.firestore,e,this._key)}}class Vr{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Vr(this.firestore,e,this._query)}}class bs extends Vr{constructor(e,n,s){super(e,n,Nc(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new mn(this.firestore,null,new be(e))}withConverter(e){return new bs(this.firestore,e,this._path)}}function gn(t,e,...n){if(t=Yt(t),Fg("collection","path",e),t instanceof ba){const s=it.fromString(e,...n);return Eh(s),new bs(t,null,s)}{if(!(t instanceof mn||t instanceof bs))throw new we(te.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(it.fromString(e,...n));return Eh(s),new bs(t.firestore,null,s)}}function is(t,e,...n){if(t=Yt(t),arguments.length===1&&(e=Km.R()),Fg("doc","path",e),t instanceof ba){const s=it.fromString(e,...n);return kh(s),new mn(t,null,new be(s))}{if(!(t instanceof mn||t instanceof bs))throw new we(te.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(it.fromString(e,...n));return kh(s),new mn(t.firestore,t instanceof bs?t.converter:null,new be(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Bg{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):ts("Uncaught Error in snapshot listener:",e)}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pk{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=Kt.UNAUTHENTICATED,this.clientId=Km.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{_e("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(_e("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new we(te.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ys;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Kc(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function mk(t,e){t.asyncQueue.verifyOperationInProgress(),_e("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await vg(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function gk(t,e){t.asyncQueue.verifyOperationInProgress();const n=await _k(t);_e("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(i=>vh(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,r)=>vh(e.remoteStore,r)),t.onlineComponents=e}async function _k(t){return t.offlineComponents||(_e("FirestoreClient","Using default OfflineComponentProvider"),await mk(t,new uk)),t.offlineComponents}async function Vg(t){return t.onlineComponents||(_e("FirestoreClient","Using default OnlineComponentProvider"),await gk(t,new hk)),t.onlineComponents}function vk(t){return Vg(t).then(e=>e.syncEngine)}async function Bl(t){const e=await Vg(t),n=e.eventManager;return n.onListen=Jw.bind(null,e.syncEngine),n.onUnlisten=ek.bind(null,e.syncEngine),n}function yk(t,e,n={}){const s=new ys;return t.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,l){const c=new Bg({next:f=>{r.enqueueAndForget(()=>Pg(i,h)),f.fromCache&&a.source==="server"?l.reject(new we(te.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(f)},error:f=>l.reject(f)}),h=new Rg(o,c,{includeMetadataChanges:!0,ku:!0});return Dg(i,h)}(await Bl(t),t.asyncQueue,e,n,s)),s.promise}class bk{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.No=new bg(this,"async_queue_retry"),this.Wc=()=>{const n=Za();n&&_e("AsyncQueue","Visibility state changed to "+n.visibilityState),this.No.Po()};const e=Za();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.Uc){this.Uc=!0,this.Qc=e||!1;const n=Za();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.Uc)return new Promise(()=>{});const n=new ys;return this.Hc(()=>this.Uc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.No.reset()}catch(e){if(!Mr(e))throw e;_e("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.No.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(s=>{this.Kc=s,this.Gc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw ts("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Gc=!1,s))));return this.Bc=n,n}enqueueAfterDelay(e,n,s){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const i=Hc.createAndSchedule(this,e,n,s,r=>this.Yc(r));return this.qc.push(i),i}zc(){this.Kc&&Te()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.qc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.qc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.qc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.qc.indexOf(e);this.qc.splice(n,1)}}function Ch(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Ws extends ba{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=new bk,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||jg(this),this._firestoreClient.terminate()}}function wk(t,e){const n=typeof t=="object"?t:Fp(),s=typeof t=="string"?t:e||"(default)",i=rc(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=ky("firestore");r&&dk(i,...r)}return i}function Qc(t){return t._firestoreClient||jg(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function jg(t){var e;const n=t._freezeSettings(),s=function(i,r,o,a){return new tb(i,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new pk(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Ei{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ei(Xt.fromBase64String(e))}catch(n){throw new we(te.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ei(Xt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new we(te.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new zt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new we(te.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new we(te.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ge(this._lat,e._lat)||Ge(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kk=/^__.*__$/;class Ek{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Ps(e,this.data,this.fieldMask,n,this.fieldTransforms):new $r(e,this.data,n,this.fieldTransforms)}}class qg{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new Ps(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Hg(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Te()}}class xc{constructor(e,n,s,i,r,o){this.settings=e,this.databaseId=n,this.It=s,this.ignoreUndefinedProperties=i,r===void 0&&this.na(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new xc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:s,oa:!1});return i.ua(e),i}ca(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:s,oa:!1});return i.na(),i}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return Bo(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(Hg(this.sa)&&kk.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class Ik{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.It=s||_a(e)}da(e,n,s,i=!1){return new xc({sa:e,methodName:n,fa:s,path:zt.emptyPath(),oa:!1,la:i},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function Kg(t){const e=t._freezeSettings(),n=_a(t._databaseId);return new Ik(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Tk(t,e,n,s,i,r={}){const o=t.da(r.merge||r.mergeFields?2:0,e,n,i);Jc("Data must be an object, but it was:",o,s);const a=zg(s,o);let l,c;if(r.merge)l=new In(o.fieldMask),c=o.fieldTransforms;else if(r.mergeFields){const h=[];for(const f of r.mergeFields){const d=Vl(e,f,n);if(!o.contains(d))throw new we(te.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Wg(h,d)||h.push(d)}l=new In(h),c=o.fieldTransforms.filter(f=>l.covers(f.field))}else l=null,c=o.fieldTransforms;return new Ek(new hn(a),l,c)}class ka extends Yc{_toFieldTransform(e){if(e.sa!==2)throw e.sa===1?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ka}}function Ck(t,e,n,s){const i=t.da(1,e,n);Jc("Data must be an object, but it was:",i,s);const r=[],o=hn.empty();Js(s,(l,c)=>{const h=Zc(e,l,n);c=Yt(c);const f=i.ca(h);if(c instanceof ka)r.push(h);else{const d=Ea(c,f);d!=null&&(r.push(h),o.set(h,d))}});const a=new In(r);return new qg(o,a,i.fieldTransforms)}function Sk(t,e,n,s,i,r){const o=t.da(1,e,n),a=[Vl(e,s,n)],l=[i];if(r.length%2!=0)throw new we(te.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<r.length;d+=2)a.push(Vl(e,r[d])),l.push(r[d+1]);const c=[],h=hn.empty();for(let d=a.length-1;d>=0;--d)if(!Wg(c,a[d])){const m=a[d];let _=l[d];_=Yt(_);const v=o.ca(m);if(_ instanceof ka)c.push(m);else{const y=Ea(_,v);y!=null&&(c.push(m),h.set(m,y))}}const f=new In(c);return new qg(h,f,o.fieldTransforms)}function Ea(t,e){if(Gg(t=Yt(t)))return Jc("Unsupported field value:",e,t),zg(t,e);if(t instanceof Yc)return function(n,s){if(!Hg(s.sa))throw s.ha(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ha(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=Ea(o,s.aa(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(t,e)}return function(n,s){if((n=Yt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return bb(s.It,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Et.fromDate(n);return{timestampValue:Uo(s.It,i)}}if(n instanceof Et){const i=new Et(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Uo(s.It,i)}}if(n instanceof Xc)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Ei)return{bytesValue:dg(s.It,n._byteString)};if(n instanceof mn){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s.ha(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Mc(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ha(`Unsupported field value: ${Wc(n)}`)}(t,e)}function zg(t,e){const n={};return zm(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Js(t,(s,i)=>{const r=Ea(i,e.ra(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function Gg(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Et||t instanceof Xc||t instanceof Ei||t instanceof mn||t instanceof Yc)}function Jc(t,e,n){if(!Gg(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Wc(n);throw s==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+s)}}function Vl(t,e,n){if((e=Yt(e))instanceof wa)return e._internalPath;if(typeof e=="string")return Zc(t,e);throw Bo("Field path arguments must be of type string or ",t,!1,void 0,n)}const Ak=new RegExp("[~\\*/\\[\\]]");function Zc(t,e,n){if(e.search(Ak)>=0)throw Bo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new wa(...e.split("."))._internalPath}catch{throw Bo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Bo(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${s}`),o&&(l+=` in document ${i}`),l+=")"),new we(te.INVALID_ARGUMENT,a+t+l)}function Wg(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new mn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Dk(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Yg("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Dk extends Qg{data(){return super.data()}}function Yg(t,e){return typeof e=="string"?Zc(t,e):e instanceof wa?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xg(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new we(te.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pk{convertValue(e,n="none"){switch(Gs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return vt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(yi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Te()}}convertObject(e,n){const s={};return Js(e.fields,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(e){return new Xc(vt(e.latitude),vt(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Wm(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(ar(e));default:return null}}convertTimestamp(e){const n=Cs(e);return new Et(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=it.fromString(e);tt(_g(s));const i=new lr(s.get(1),s.get(3)),r=new be(s.popFirst(5));return i.isEqual(n)||ts(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rk(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class xg extends Qg{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ho(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Yg("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class ho extends xg{data(e={}){return super.data(e)}}class Jg{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ki(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new ho(this._firestore,this._userDataWriter,s.key,s,new Ki(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new we(te.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>({type:"added",doc:new ho(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Ki(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter),oldIndex:-1,newIndex:r++}))}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new ho(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Ki(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,c=-1;return o.type!==0&&(l=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),c=r.indexOf(o.doc.key)),{type:Nk(o.type),doc:a,oldIndex:l,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Nk(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Te()}}class eu extends Pk{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ei(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new mn(this.firestore,null,n)}}function Ia(t){t=Mn(t,Vr);const e=Mn(t.firestore,Ws),n=Qc(e),s=new eu(e);return Xg(t._query),yk(n,t._query).then(i=>new Jg(e,s,t,i))}function Ta(t,e,n,...s){t=Mn(t,mn);const i=Mn(t.firestore,Ws),r=Kg(i);let o;return o=typeof(e=Yt(e))=="string"||e instanceof wa?Sk(r,"updateDoc",t._key,e,n,s):Ck(r,"updateDoc",t._key,e),tu(i,[o.toMutation(t._key,Tn.exists(!0))])}function Ca(t){return tu(Mn(t.firestore,Ws),[new Lc(t._key,Tn.none())])}function ws(t,e){const n=Mn(t.firestore,Ws),s=is(t),i=Rk(t.converter,e);return tu(n,[Tk(Kg(t.firestore),"addDoc",s._key,i,t.converter!==null,{}).toMutation(s._key,Tn.exists(!1))]).then(()=>s)}function Ok(t,...e){var n,s,i;t=Yt(t);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Ch(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(Ch(e[o])){const f=e[o];e[o]=(n=f.next)===null||n===void 0?void 0:n.bind(f),e[o+1]=(s=f.error)===null||s===void 0?void 0:s.bind(f),e[o+2]=(i=f.complete)===null||i===void 0?void 0:i.bind(f)}let l,c,h;if(t instanceof mn)c=Mn(t.firestore,Ws),h=Nc(t._key.path),l={next:f=>{e[o]&&e[o](Lk(c,t,f))},error:e[o+1],complete:e[o+2]};else{const f=Mn(t,Vr);c=Mn(f.firestore,Ws),h=f._query;const d=new eu(c);l={next:m=>{e[o]&&e[o](new Jg(c,d,f,m))},error:e[o+1],complete:e[o+2]},Xg(t._query)}return function(f,d,m,_){const v=new Bg(_),y=new Rg(d,v,m);return f.asyncQueue.enqueueAndForget(async()=>Dg(await Bl(f),y)),()=>{v.bc(),f.asyncQueue.enqueueAndForget(async()=>Pg(await Bl(f),y))}}(Qc(c),h,a,l)}function tu(t,e){return function(n,s){const i=new ys;return n.asyncQueue.enqueueAndForget(async()=>tk(await vk(n),s,i)),i.promise}(Qc(t),e)}function Lk(t,e,n){const s=n.docs.get(e._key),i=new eu(t);return new xg(t,i,e._key,s,new Ki(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Ai=n})(Ir),gi(new Hs("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new Ws(new q1(n.getProvider("auth-internal")),new G1(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new we(te.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new lr(a.options.projectId,l)}(r,s),r);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),vs(Xu,"3.7.1",t),vs(Xu,"3.7.1","esm2017")})();var Mk="firebase",$k="9.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vs(Mk,$k,"app");function nu(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function Zg(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Uk=Zg,e_=new kr("auth","Firebase",Zg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sh=new sc("@firebase/auth");function fo(t,...e){Sh.logLevel<=Ke.ERROR&&Sh.error(`Auth (${Ir}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cn(t,...e){throw su(t,...e)}function $n(t,...e){return su(t,...e)}function Fk(t,e,n){const s=Object.assign(Object.assign({},Uk()),{[e]:n});return new kr("auth","Firebase",s).create(e,{appName:t.name})}function su(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return e_.create(t,...e)}function Ee(t,e,...n){if(!t)throw su(e,...n)}function Yn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw fo(e),new Error(e)}function rs(t,e){t||Yn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ah=new Map;function Xn(t){rs(t instanceof Function,"Expected a class definition");let e=Ah.get(t);return e?(rs(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ah.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bk(t,e){const n=rc(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(Eo(r,e!=null?e:{}))return i;Cn(i,"already-initialized")}return n.initialize({options:e})}function Vk(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Xn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function jk(){return Dh()==="http:"||Dh()==="https:"}function Dh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(jk()||dy()||"connection"in navigator)?navigator.onLine:!0}function Hk(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(e,n){this.shortDelay=e,this.longDelay=n,rs(n>e,"Short delay should be less than long delay!"),this.isMobile=fy()||py()}get(){return qk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iu(t,e){rs(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Yn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Yn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Yn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const zk=new jr(3e4,6e4);function qr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Hr(t,e,n,s,i={}){return n_(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=Er(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),t_.fetch()(s_(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function n_(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},Kk),e);try{const i=new Gk(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw io(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw io(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw io(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw io(t,"user-disabled",o);const h=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Fk(t,h,c);Cn(t,h)}}catch(i){if(i instanceof os)throw i;Cn(t,"network-request-failed")}}async function Kr(t,e,n,s,i={}){const r=await Hr(t,e,n,s,i);return"mfaPendingCredential"in r&&Cn(t,"multi-factor-auth-required",{_serverResponse:r}),r}function s_(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?iu(t.config,i):`${t.config.apiScheme}://${i}`}class Gk{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s($n(this.auth,"network-request-failed")),zk.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function io(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=$n(t,e,s);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wk(t,e){return Hr(t,"POST","/v1/accounts:delete",e)}async function Qk(t,e){return Hr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ji(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Yk(t,e=!1){const n=Yt(t),s=await n.getIdToken(e),i=ru(s);Ee(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Ji(el(i.auth_time)),issuedAtTime:Ji(el(i.iat)),expirationTime:Ji(el(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function el(t){return Number(t)*1e3}function ru(t){var e;const[n,s,i]=t.split(".");if(n===void 0||s===void 0||i===void 0)return fo("JWT malformed, contained fewer than 3 sections"),null;try{const r=Np(s);return r?JSON.parse(r):(fo("Failed to decode base64 JWT payload"),null)}catch(r){return fo("Caught error parsing JWT payload as JSON",(e=r)===null||e===void 0?void 0:e.toString()),null}}function Xk(t){const e=ru(t);return Ee(e,"internal-error"),Ee(typeof e.exp<"u","internal-error"),Ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dr(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof os&&xk(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function xk({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ji(this.lastLoginAt),this.creationTime=Ji(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vo(t){var e;const n=t.auth,s=await t.getIdToken(),i=await dr(t,Qk(n,{idToken:s}));Ee(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?tE(r.providerUserInfo):[],a=eE(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),h=l?c:!1,f={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new i_(r.createdAt,r.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function Zk(t){const e=Yt(t);await Vo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function eE(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function tE(t){return t.map(e=>{var{providerId:n}=e,s=nu(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nE(t,e){const n=await n_(t,{},async()=>{const s=Er({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=s_(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",t_.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ee(e.idToken,"internal-error"),Ee(typeof e.idToken<"u","internal-error"),Ee(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Xk(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return Ee(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await nE(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new pr;return s&&(Ee(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(Ee(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(Ee(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new pr,this.toJSON())}_performRefresh(){return Yn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ls(t,e){Ee(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Bs{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=nu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Jk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new i_(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await dr(this,this.stsTokenManager.getToken(this.auth,e));return Ee(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Yk(this,e)}reload(){return Zk(this)}_assign(e){this!==e&&(Ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Bs(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){Ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Vo(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await dr(this,Wk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,h;const f=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,m=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,y=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,E=(c=n.createdAt)!==null&&c!==void 0?c:void 0,I=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:O,emailVerified:D,isAnonymous:$,providerData:F,stsTokenManager:N}=n;Ee(O&&N,e,"internal-error");const q=pr.fromJSON(this.name,N);Ee(typeof O=="string",e,"internal-error"),ls(f,e.name),ls(d,e.name),Ee(typeof D=="boolean",e,"internal-error"),Ee(typeof $=="boolean",e,"internal-error"),ls(m,e.name),ls(_,e.name),ls(v,e.name),ls(y,e.name),ls(E,e.name),ls(I,e.name);const B=new Bs({uid:O,auth:e,email:d,emailVerified:D,displayName:f,isAnonymous:$,photoURL:_,phoneNumber:m,tenantId:v,stsTokenManager:q,createdAt:E,lastLoginAt:I});return F&&Array.isArray(F)&&(B.providerData=F.map(M=>Object.assign({},M))),y&&(B._redirectEventId=y),B}static async _fromIdTokenResponse(e,n,s=!1){const i=new pr;i.updateFromServerResponse(n);const r=new Bs({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Vo(r),r}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}r_.type="NONE";const Ph=r_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function po(t,e,n){return`firebase:${t}:${e}:${n}`}class fi{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=po(this.userKey,i.apiKey,r),this.fullPersistenceKey=po("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Bs._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new fi(Xn(Ph),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||Xn(Ph);const o=po(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const h=await c._get(o);if(h){const f=Bs._fromJSON(e,h);c!==r&&(a=f),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new fi(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new fi(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rh(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(l_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(o_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(u_(e))return"Blackberry";if(h_(e))return"Webos";if(ou(e))return"Safari";if((e.includes("chrome/")||a_(e))&&!e.includes("edge/"))return"Chrome";if(c_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function o_(t=Qt()){return/firefox\//i.test(t)}function ou(t=Qt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function a_(t=Qt()){return/crios\//i.test(t)}function l_(t=Qt()){return/iemobile/i.test(t)}function c_(t=Qt()){return/android/i.test(t)}function u_(t=Qt()){return/blackberry/i.test(t)}function h_(t=Qt()){return/webos/i.test(t)}function Sa(t=Qt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function sE(t=Qt()){var e;return Sa(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function iE(){return my()&&document.documentMode===10}function f_(t=Qt()){return Sa(t)||c_(t)||h_(t)||u_(t)||/windows phone/i.test(t)||l_(t)}function rE(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d_(t,e=[]){let n;switch(t){case"Browser":n=Rh(Qt());break;case"Worker":n=`${Rh(Qt())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ir}/${s}`}/**
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
 */class oE{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const s=[];try{for(const i of this.queue)await i(e),i.onAbort&&s.push(i.onAbort)}catch(i){s.reverse();for(const r of s)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aE{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Nh(this),this.idTokenSubscription=new Nh(this),this.beforeStateQueue=new oE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=e_,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Xn(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await fi.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await Vo(e)}catch(s){if(((n=s)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Hk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Yt(e):null;return n&&Ee(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Xn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new kr("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Xn(e)||this._popupRedirectResolver;Ee(n,this,"argument-error"),this.redirectPersistenceManager=await fi.create(this,[Xn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return Ee(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=d_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function zr(t){return Yt(t)}class Nh{constructor(e){this.auth=e,this.observer=null,this.addObserver=Py(n=>this.observer=n)}get next(){return Ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function lE(t,e,n){const s=zr(t);Ee(s._canInitEmulator,s,"emulator-config-failed"),Ee(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),r=p_(e),{host:o,port:a}=cE(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||uE()}function p_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function cE(t){const e=p_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:Oh(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:Oh(o)}}}function Oh(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function uE(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Yn("not implemented")}_getIdTokenResponse(e){return Yn("not implemented")}_linkToIdToken(e,n){return Yn("not implemented")}_getReauthenticationResolver(e){return Yn("not implemented")}}async function hE(t,e){return Hr(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fE(t,e){return Kr(t,"POST","/v1/accounts:signInWithPassword",qr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dE(t,e){return Kr(t,"POST","/v1/accounts:signInWithEmailLink",qr(t,e))}async function pE(t,e){return Kr(t,"POST","/v1/accounts:signInWithEmailLink",qr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr extends au{constructor(e,n,s,i=null){super("password",s),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new mr(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new mr(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return fE(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return dE(e,{email:this._email,oobCode:this._password});default:Cn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return hE(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return pE(e,{idToken:n,email:this._email,oobCode:this._password});default:Cn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function di(t,e){return Kr(t,"POST","/v1/accounts:signInWithIdp",qr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mE="http://localhost";class Qs extends au{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Qs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Cn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=nu(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new Qs(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return di(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,di(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,di(e,n)}buildRequest(){const e={requestUri:mE,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Er(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gE(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function _E(t){const e=Bi(Vi(t)).link,n=e?Bi(Vi(e)).deep_link_id:null,s=Bi(Vi(t)).deep_link_id;return(s?Bi(Vi(s)).link:null)||s||n||e||t}class lu{constructor(e){var n,s,i,r,o,a;const l=Bi(Vi(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,h=(s=l.oobCode)!==null&&s!==void 0?s:null,f=gE((i=l.mode)!==null&&i!==void 0?i:null);Ee(c&&h&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=h,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=_E(e);try{return new lu(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(){this.providerId=Ri.PROVIDER_ID}static credential(e,n){return mr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=lu.parseLink(n);return Ee(s,"argument-error"),mr._fromEmailAndCode(e,s.code,s.tenantId)}}Ri.PROVIDER_ID="password";Ri.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ri.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr extends m_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs extends Gr{constructor(){super("facebook.com")}static credential(e){return Qs._fromParams({providerId:hs.PROVIDER_ID,signInMethod:hs.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hs.credentialFromTaggedObject(e)}static credentialFromError(e){return hs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hs.credential(e.oauthAccessToken)}catch{return null}}}hs.FACEBOOK_SIGN_IN_METHOD="facebook.com";hs.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs extends Gr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Qs._fromParams({providerId:fs.PROVIDER_ID,signInMethod:fs.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return fs.credentialFromTaggedObject(e)}static credentialFromError(e){return fs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return fs.credential(n,s)}catch{return null}}}fs.GOOGLE_SIGN_IN_METHOD="google.com";fs.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds extends Gr{constructor(){super("github.com")}static credential(e){return Qs._fromParams({providerId:ds.PROVIDER_ID,signInMethod:ds.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ds.credentialFromTaggedObject(e)}static credentialFromError(e){return ds.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ds.credential(e.oauthAccessToken)}catch{return null}}}ds.GITHUB_SIGN_IN_METHOD="github.com";ds.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps extends Gr{constructor(){super("twitter.com")}static credential(e,n){return Qs._fromParams({providerId:ps.PROVIDER_ID,signInMethod:ps.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ps.credentialFromTaggedObject(e)}static credentialFromError(e){return ps.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return ps.credential(n,s)}catch{return null}}}ps.TWITTER_SIGN_IN_METHOD="twitter.com";ps.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vE(t,e){return Kr(t,"POST","/v1/accounts:signUp",qr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await Bs._fromIdTokenResponse(e,s,i),o=Lh(s);return new Ys({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=Lh(s);return new Ys({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function Lh(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo extends os{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,jo.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new jo(e,n,s,i)}}function g_(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?jo._fromErrorAndOperation(t,r,e,s):r})}async function yE(t,e,n=!1){const s=await dr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ys._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bE(t,e,n=!1){var s;const{auth:i}=t,r="reauthenticate";try{const o=await dr(t,g_(i,r,e,t),n);Ee(o.idToken,i,"internal-error");const a=ru(o.idToken);Ee(a,i,"internal-error");const{sub:l}=a;return Ee(t.uid===l,i,"user-mismatch"),Ys._forOperation(t,r,o)}catch(o){throw((s=o)===null||s===void 0?void 0:s.code)==="auth/user-not-found"&&Cn(i,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function __(t,e,n=!1){const s="signIn",i=await g_(t,s,e),r=await Ys._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}async function wE(t,e){return __(zr(t),e)}async function kE(t,e,n){const s=zr(t),i=await vE(s,{returnSecureToken:!0,email:e,password:n}),r=await Ys._fromIdTokenResponse(s,"signIn",i);return await s._updateCurrentUser(r.user),r}function EE(t,e,n){return wE(Yt(t),Ri.credential(e,n))}function IE(t,e,n,s){return Yt(t).onIdTokenChanged(e,n,s)}function TE(t,e,n){return Yt(t).beforeAuthStateChanged(e,n)}const qo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(qo,"1"),this.storage.removeItem(qo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CE(){const t=Qt();return ou(t)||Sa(t)}const SE=1e3,AE=10;class y_ extends v_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=CE()&&rE(),this.fallbackToPolling=f_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);iE()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,AE):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},SE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}y_.type="LOCAL";const DE=y_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_ extends v_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}b_.type="SESSION";const w_=b_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Aa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new Aa(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await PE(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Aa.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class RE{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=cu("",20);i.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(f){const d=f;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(h),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(h),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Un(){return window}function NE(t){Un().location.href=t}/**
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
 */function k_(){return typeof Un().WorkerGlobalScope<"u"&&typeof Un().importScripts=="function"}async function OE(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function LE(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function ME(){return k_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E_="firebaseLocalStorageDb",$E=1,Ho="firebaseLocalStorage",I_="fbase_key";class Wr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Da(t,e){return t.transaction([Ho],e?"readwrite":"readonly").objectStore(Ho)}function UE(){const t=indexedDB.deleteDatabase(E_);return new Wr(t).toPromise()}function ql(){const t=indexedDB.open(E_,$E);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Ho,{keyPath:I_})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Ho)?e(s):(s.close(),await UE(),e(await ql()))})})}async function Mh(t,e,n){const s=Da(t,!0).put({[I_]:e,value:n});return new Wr(s).toPromise()}async function FE(t,e){const n=Da(t,!1).get(e),s=await new Wr(n).toPromise();return s===void 0?null:s.value}function $h(t,e){const n=Da(t,!0).delete(e);return new Wr(n).toPromise()}const BE=800,VE=3;class T_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ql(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>VE)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return k_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Aa._getInstance(ME()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await OE(),!this.activeServiceWorker)return;this.sender=new RE(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);!s||((e=s[0])===null||e===void 0?void 0:e.fulfilled)&&((n=s[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||LE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ql();return await Mh(e,qo,"1"),await $h(e,qo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Mh(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>FE(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>$h(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=Da(i,!1).getAll();return new Wr(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),BE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}T_.type="LOCAL";const jE=T_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qE(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function HE(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=$n("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",qE().appendChild(s)})}function KE(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new jr(3e4,6e4);/**
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
 */function zE(t,e){return e?Xn(e):(Ee(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu extends au{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return di(e,this._buildIdpRequest())}_linkToIdToken(e,n){return di(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return di(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function GE(t){return __(t.auth,new uu(t),t.bypassAuthState)}function WE(t){const{auth:e,user:n}=t;return Ee(n,e,"internal-error"),bE(n,new uu(t),t.bypassAuthState)}async function QE(t){const{auth:e,user:n}=t;return Ee(n,e,"internal-error"),yE(n,new uu(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return GE;case"linkViaPopup":case"linkViaRedirect":return QE;case"reauthViaPopup":case"reauthViaRedirect":return WE;default:Cn(this.auth,"internal-error")}}resolve(e){rs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){rs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YE=new jr(2e3,1e4);class li extends C_{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,li.currentPopupAction&&li.currentPopupAction.cancel(),li.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ee(e,this.auth,"internal-error"),e}async onExecution(){rs(this.filter.length===1,"Popup operations only handle one event");const e=cu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject($n(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject($n(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,li.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject($n(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,YE.get())};e()}}li.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XE="pendingRedirect",mo=new Map;class xE extends C_{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=mo.get(this.auth._key());if(!e){try{const s=await JE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}mo.set(this.auth._key(),e)}return this.bypassAuthState||mo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function JE(t,e){const n=tI(e),s=eI(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function ZE(t,e){mo.set(t._key(),e)}function eI(t){return Xn(t._redirectPersistence)}function tI(t){return po(XE,t.config.apiKey,t.name)}async function nI(t,e,n=!1){const s=zr(t),i=zE(s,e),o=await new xE(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sI=10*60*1e3;class iI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!rI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!S_(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError($n(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=sI&&this.cachedEventUids.clear(),this.cachedEventUids.has(Uh(e))}saveEventToCache(e){this.cachedEventUids.add(Uh(e)),this.lastProcessedEventTime=Date.now()}}function Uh(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function S_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function rI(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return S_(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oI(t,e={}){return Hr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,lI=/^https?/;async function cI(t){if(t.config.emulator)return;const{authorizedDomains:e}=await oI(t);for(const n of e)try{if(uI(n))return}catch{}Cn(t,"unauthorized-domain")}function uI(t){const e=jl(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!lI.test(n))return!1;if(aI.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const hI=new jr(3e4,6e4);function Fh(){const t=Un().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function fI(t){return new Promise((e,n)=>{var s,i,r;function o(){Fh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Fh(),n($n(t,"network-request-failed"))},timeout:hI.get()})}if(!((i=(s=Un().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=Un().gapi)===null||r===void 0)&&r.load)o();else{const a=KE("iframefcb");return Un()[a]=()=>{gapi.load?o():n($n(t,"network-request-failed"))},HE(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw go=null,e})}let go=null;function dI(t){return go=go||fI(t),go}/**
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
 */const pI=new jr(5e3,15e3),mI="__/auth/iframe",gI="emulator/auth/iframe",_I={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},vI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function yI(t){const e=t.config;Ee(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?iu(e,gI):`https://${t.config.authDomain}/${mI}`,s={apiKey:e.apiKey,appName:t.name,v:Ir},i=vI.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${Er(s).slice(1)}`}async function bI(t){const e=await dI(t),n=Un().gapi;return Ee(n,t,"internal-error"),e.open({where:document.body,url:yI(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:_I,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=$n(t,"network-request-failed"),a=Un().setTimeout(()=>{r(o)},pI.get());function l(){Un().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const wI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},kI=500,EI=600,II="_blank",TI="http://localhost";class Bh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function CI(t,e,n,s=kI,i=EI){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},wI),{width:s.toString(),height:i.toString(),top:r,left:o}),c=Qt().toLowerCase();n&&(a=a_(c)?II:n),o_(c)&&(e=e||TI,l.scrollbars="yes");const h=Object.entries(l).reduce((d,[m,_])=>`${d}${m}=${_},`,"");if(sE(c)&&a!=="_self")return SI(e||"",a),new Bh(null);const f=window.open(e||"",a,h);Ee(f,t,"popup-blocked");try{f.focus()}catch{}return new Bh(f)}function SI(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const AI="__/auth/handler",DI="emulator/auth/handler";function Vh(t,e,n,s,i,r){Ee(t.config.authDomain,t,"auth-domain-config-required"),Ee(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Ir,eventId:i};if(e instanceof m_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Dy(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(r||{}))o[l]=c}if(e instanceof Gr){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${PI(t)}?${Er(a).slice(1)}`}function PI({config:t}){return t.emulator?iu(t,DI):`https://${t.authDomain}/${AI}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tl="webStorageSupport";class RI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=w_,this._completeRedirectFn=nI,this._overrideRedirectResult=ZE}async _openPopup(e,n,s,i){var r;rs((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=Vh(e,n,s,jl(),i);return CI(e,o,cu())}async _openRedirect(e,n,s,i){return await this._originValidation(e),NE(Vh(e,n,s,jl(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(rs(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await bI(e),s=new iI(e);return n.register("authEvent",i=>(Ee(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(tl,{type:tl},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[tl];o!==void 0&&n(!!o),Cn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=cI(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return f_()||ou()||Sa()}}const NI=RI;var jh="@firebase/auth",qh="0.20.10";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{var i;e(((i=s)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LI(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function MI(t){gi(new Hs("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:r,authDomain:o}=s.options;return((a,l)=>{Ee(r&&!r.includes(":"),"invalid-api-key",{appName:a.name}),Ee(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const c={apiKey:r,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:d_(t)},h=new aE(a,l,c);return Vk(h,n),h})(s,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),gi(new Hs("auth-internal",e=>{const n=zr(e.getProvider("auth").getImmediate());return(s=>new OI(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),vs(jh,qh,LI(t)),vs(jh,qh,"esm2017")}/**
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
 */const $I=5*60,UI=Lp("authIdTokenMaxAge")||$I;let Hh=null;const FI=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>UI)return;const i=n==null?void 0:n.token;Hh!==i&&(Hh=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function BI(t=Fp()){const e=rc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Bk(t,{popupRedirectResolver:NI,persistence:[jE,DE,w_]}),s=Lp("authTokenSyncURL");if(s){const r=FI(s);TE(n,r,()=>r(n.currentUser)),IE(n,o=>r(o))}const i=Op("auth");return i&&lE(n,`http://${i}`),n}MI("Browser");let gr=[],_r=[],Fn=[],A_=[];const VI={apiKey:"AIzaSyDGi3ndUC1b4SFNstliSSVryu7_ymXEkZc",authDomain:"match-home-7d1f9.firebaseapp.com",databaseURL:"https://match-home-7d1f9-default-rtdb.firebaseio.com",projectId:"match-home-7d1f9",storageBucket:"match-home-7d1f9.appspot.com",messagingSenderId:"747751099607",appId:"1:747751099607:web:29d1e5beda87c847dfb492"},D_=Up(VI),ut=wk(D_),P_=BI(D_),jI=t=>Ok(gn(ut,"todos"),t),qI=gn(ut,"binnacles"),HI=gn(ut,"contacts"),KI=gn(ut,"properties"),zI=gn(ut,"todos");Ia(qI).then(t=>_r=t.docs.map(e=>({...e.data(),id:e.id})));Ia(HI).then(t=>gr=t.docs.map(e=>({...e.data(),id:e.id})));Ia(KI).then(t=>Fn=t.docs.map(e=>({...e.data(),id:e.id})));Ia(zI).then(t=>A_=t.docs.map(e=>({...e.data(),id:e.id})));const R_="/to-deploy-mh/assets/schedule.20f01954.png";function N_(t){const e=t-1;return e*e*e+1}function Ii(t){return t===0||t===1?t:t<.5?.5*Math.pow(2,20*t-10):-.5*Math.pow(2,10-t*20)+1}function Ko(t,{delay:e=0,duration:n=400,easing:s=xd}={}){const i=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:s,css:r=>`opacity: ${r*i}`}}function zo(t,{delay:e=0,duration:n=400,easing:s=N_,x:i=0,y:r=0,opacity:o=0}={}){const a=getComputedStyle(t),l=+a.opacity,c=a.transform==="none"?"":a.transform,h=l*(1-o);return{delay:e,duration:n,easing:s,css:(f,d)=>`
			transform: ${c} translate(${(1-f)*i}px, ${(1-f)*r}px);
			opacity: ${l-h*d}`}}function Ti(t,{delay:e=0,duration:n=400,easing:s=N_,start:i=0,opacity:r=0}={}){const o=getComputedStyle(t),a=+o.opacity,l=o.transform==="none"?"":o.transform,c=1-i,h=a*(1-r);return{delay:e,duration:n,easing:s,css:(f,d)=>`
			transform: ${l} scale(${1-c*d});
			opacity: ${a-h*d}
		`}}const Ze=yt(""),Hl=yt([]),O_=yt([]),Kl=yt([]),nl=yt(),Je=yt({typeContact:"",name:"",lastname:"",lastContact:"",telephon:"",email:"",selecMC:"",propCont:"",comContact:"",rangeProp:"",contMode:"",budget:"",numBeds:"",numBaths:"",halfBathroom:"",numParks:"",modePay:"",selecTP:"",contactType:"",contactStage:"",createdAt:"",locaProperty:[],tagsProperty:[],sendedProperties:[]}),Ye=yt({typeProperty:"",typeSaller:"",claveEB:"",claveMH:"",createdAt:"",nameProperty:"",price:"",beds:"",bathroom:"",halfBathroom:"",park:"",areaBuilding:"",areaTotal:"",description:"",urlImage:"",urlProp:"",urlSinergy:"",colonia:"",selecTP:"",selecTO:"",typeOperation:"",tagsProperty:[],locaProperty:[],binnacle:[]}),kn=yt({task:"",isComplete:"",createdAt:"",endTask:"",timeTask:"",notes:"",user:"",id:""}),ro=yt({date:"",commBinnacle:"",action:"",to:""}),GI=["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","S\xE1bado"],WI=["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"];function Ct(t){typeof t=="string"?t=new Date(t):t=new Date(t);let e=t.getDate();e<10&&(e="0"+e);let n=WI[t.getMonth()],s=t.getFullYear();return`${e}/${n}/${s}`}function Kh(t){t=new Date(t);let e=t.getMinutes();e.length<2&&(e="0"+e);let n=t.getHours();return n>12&&(n=n-12),n<10&&(n="0"+n),t.getDate(),`${n}:${e}`}function zh(t){return t=new Date(+t),`${GI[t.getDay()]}-`}function QI(t){t.sort((e,n)=>new Date(e.endTask)<new Date(n.endTask)?1:new Date(e.endTask)>new Date(n.endTask)?-1:0)}const Pa="/to-deploy-mh/assets/edit.070633c4.svg",L_="/to-deploy-mh/assets/calendar_check.3c15b67b.svg";function Gh(t,e,n){const s=t.slice();return s[19]=e[n],s}function Wh(t,e,n){const s=t.slice();return s[19]=e[n],s}function YI(t){let e;return{c(){e=S("Editar")},m(n,s){w(n,e,s)},d(n){n&&b(e)}}}function XI(t){let e;return{c(){e=S("Guardar")},m(n,s){w(n,e,s)},d(n){n&&b(e)}}}function Qh(t){let e,n,s;return{c(){e=p("button"),e.textContent="Borrar"},m(i,r){w(i,e,r),n||(s=V(e,"click",t[5]),n=!0)},p:fe,d(i){i&&b(e),n=!1,s()}}}function Yh(t){let e,n,s,i,r,o,a,l,c,h,f,d=t[1],m=[];for(let I=0;I<d.length;I+=1)m[I]=Zh(Wh(t,d,I));let _=null;d.length||(_=Xh());let v=t[1],y=[];for(let I=0;I<v.length;I+=1)y[I]=sf(Gh(t,v,I));let E=null;return v.length||(E=ef()),{c(){e=p("h3"),e.textContent="Tareas",n=k(),s=p("ol");for(let I=0;I<m.length;I+=1)m[I].c();_&&_.c(),i=k(),r=p("p"),r.textContent=`${rf}`,o=k(),a=p("h3"),a.textContent="Agenda",l=k(),c=p("ol");for(let I=0;I<y.length;I+=1)y[I].c();E&&E.c(),h=k(),f=p("p"),f.textContent=`${rf}`,g(r,"class","error"),g(f,"class","error")},m(I,O){w(I,e,O),w(I,n,O),w(I,s,O);for(let D=0;D<m.length;D+=1)m[D].m(s,null);_&&_.m(s,null),u(s,i),u(s,r),w(I,o,O),w(I,a,O),w(I,l,O),w(I,c,O);for(let D=0;D<y.length;D+=1)y[D].m(c,null);E&&E.m(c,null),u(c,h),u(c,f)},p(I,O){if(O&18){d=I[1];let D;for(D=0;D<d.length;D+=1){const $=Wh(I,d,D);m[D]?m[D].p($,O):(m[D]=Zh($),m[D].c(),m[D].m(s,i))}for(;D<m.length;D+=1)m[D].d(1);m.length=d.length,!d.length&&_?_.p(I,O):d.length?_&&(_.d(1),_=null):(_=Xh(),_.c(),_.m(s,i))}if(O&18){v=I[1];let D;for(D=0;D<v.length;D+=1){const $=Gh(I,v,D);y[D]?y[D].p($,O):(y[D]=sf($),y[D].c(),y[D].m(c,h))}for(;D<y.length;D+=1)y[D].d(1);y.length=v.length,!v.length&&E?E.p(I,O):v.length?E&&(E.d(1),E=null):(E=ef(),E.c(),E.m(c,h))}},d(I){I&&b(e),I&&b(n),I&&b(s),qe(m,I),_&&_.d(),I&&b(o),I&&b(a),I&&b(l),I&&b(c),qe(y,I),E&&E.d()}}}function Xh(t){let e;return{c(){e=p("p"),e.textContent="No Hay Tareas Pendientes"},m(n,s){w(n,e,s)},p:fe,d(n){n&&b(e)}}}function xh(t){let e,n,s,i,r,o,a,l,c,h,f=Ct(t[19].endTask)+"",d,m,_=t[19].task+"",v,y,E,I;function O(){return t[12](t[19])}function D(){return t[13](t[19])}let $=t[19].notes&&Jh(t);return{c(){e=p("div"),n=p("li"),s=p("span"),i=p("img"),o=k(),a=p("img"),c=k(),h=p("spam"),d=S(f),m=S(` -*-\r
                                 `),v=S(_),y=S(` -*-\r
                                 `),$&&$.c(),et(i.src,r=Pa)||g(i,"src",r),g(i,"alt","edit"),g(i,"class","iconIMH svelte-156umuq"),et(a.src,l=L_)||g(a,"src",l),g(a,"alt","complete"),g(a,"class","iconIMH svelte-156umuq"),g(n,"class","schedule svelte-156umuq"),ks(n,"complete",t[19].isComplete)},m(F,N){w(F,e,N),u(e,n),u(n,s),u(s,i),u(s,o),u(s,a),u(n,c),u(n,h),u(h,d),u(h,m),u(h,v),u(h,y),$&&$.m(h,null),E||(I=[V(i,"click",O),V(a,"click",D)],E=!0)},p(F,N){t=F,N&2&&f!==(f=Ct(t[19].endTask)+"")&&ae(d,f),N&2&&_!==(_=t[19].task+"")&&ae(v,_),t[19].notes?$?$.p(t,N):($=Jh(t),$.c(),$.m(h,null)):$&&($.d(1),$=null),N&2&&ks(n,"complete",t[19].isComplete)},d(F){F&&b(e),$&&$.d(),E=!1,Xe(I)}}}function Jh(t){let e=t[19].notes+"",n;return{c(){n=S(e)},m(s,i){w(s,n,i)},p(s,i){i&2&&e!==(e=s[19].notes+"")&&ae(n,e)},d(s){s&&b(n)}}}function Zh(t){let e,n=!t[19].timeTask&&xh(t);return{c(){n&&n.c(),e=tn()},m(s,i){n&&n.m(s,i),w(s,e,i)},p(s,i){s[19].timeTask?n&&(n.d(1),n=null):n?n.p(s,i):(n=xh(s),n.c(),n.m(e.parentNode,e))},d(s){n&&n.d(s),s&&b(e)}}}function ef(t){let e;return{c(){e=p("p"),e.textContent="No Hay Tareas Pendientes"},m(n,s){w(n,e,s)},p:fe,d(n){n&&b(e)}}}function tf(t){let e,n,s,i,r,o,a,l,c,h,f=t[19].timeTask+"",d,m,_=Ct(t[19].endTask)+"",v,y,E=t[19].task+"",I,O,D,$;function F(){return t[14](t[19])}function N(){return t[15](t[19])}let q=t[19].notes&&nf(t);return{c(){e=p("div"),n=p("li"),s=p("span"),i=p("img"),o=k(),a=p("img"),c=k(),h=p("spam"),d=S(f),m=S(` -*-\r
                                 `),v=S(_),y=S(` -*-\r
                                 `),I=S(E),O=S(` -*-\r
                                 `),q&&q.c(),et(i.src,r=Pa)||g(i,"src",r),g(i,"alt","edit"),g(i,"class","iconIMH svelte-156umuq"),et(a.src,l=L_)||g(a,"src",l),g(a,"alt","complete"),g(a,"class","iconIMH svelte-156umuq"),g(n,"class","schedule svelte-156umuq"),ks(n,"complete",t[19].isComplete)},m(B,M){w(B,e,M),u(e,n),u(n,s),u(s,i),u(s,o),u(s,a),u(n,c),u(n,h),u(h,d),u(h,m),u(h,v),u(h,y),u(h,I),u(h,O),q&&q.m(h,null),D||($=[V(i,"click",F),V(a,"click",N),V(e,"dblclick",t[16])],D=!0)},p(B,M){t=B,M&2&&f!==(f=t[19].timeTask+"")&&ae(d,f),M&2&&_!==(_=Ct(t[19].endTask)+"")&&ae(v,_),M&2&&E!==(E=t[19].task+"")&&ae(I,E),t[19].notes?q?q.p(t,M):(q=nf(t),q.c(),q.m(h,null)):q&&(q.d(1),q=null),M&2&&ks(n,"complete",t[19].isComplete)},d(B){B&&b(e),q&&q.d(),D=!1,Xe($)}}}function nf(t){let e=t[19].notes+"",n;return{c(){n=S(e)},m(s,i){w(s,n,i)},p(s,i){i&2&&e!==(e=s[19].notes+"")&&ae(n,e)},d(s){s&&b(n)}}}function sf(t){let e,n=t[19].timeTask&&tf(t);return{c(){n&&n.c(),e=tn()},m(s,i){n&&n.m(s,i),w(s,e,i)},p(s,i){s[19].timeTask?n?n.p(s,i):(n=tf(s),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(s){n&&n.d(s),s&&b(e)}}}function xI(t){let e,n,s,i,r,o,a,l,c,h,f,d,m,_,v,y,E,I,O,D,$,F,N,q,B,M,U,z,J,ie,Q,G,se;function W(Y,re){return Y[0]?YI:XI}let A=W(t),j=A(t),L=t[0]&&Qh(t),R=!t[0]&&Yh(t);return{c(){e=p("div"),n=p("h1"),n.textContent="Agenda",s=k(),i=p("img"),o=k(),a=p("div"),l=p("div"),h=k(),f=p("div"),d=p("div"),m=p("input"),_=k(),v=p("div"),y=p("input"),E=k(),I=p("input"),O=k(),D=p("div"),$=p("textarea"),F=k(),N=p("div"),q=p("button"),j.c(),B=k(),M=p("button"),M.textContent="Cancelar",U=k(),L&&L.c(),J=k(),ie=p("div"),R&&R.c(),et(i.src,r=R_)||g(i,"src",r),g(i,"alt","schedule"),g(i,"class","imgTitle svelte-156umuq"),g(l,"class","background"),g(m,"type","text"),g(m,"class","inputTask"),g(m,"cols","56"),g(m,"rows","1"),g(m,"placeholder","Agrega una Tarea o Cita"),g(y,"type","time"),g(y,"class","inputDate"),g(I,"type","date"),g(I,"class","inputDate"),g(v,"class","contDate"),g($,"name","notes"),g($,"id",""),g($,"cols","56"),g($,"rows","5"),g($,"placeholder","descripci\xF3n"),g(f,"class","pop-up"),g(a,"class","container"),g(ie,"class","container"),g(e,"class","container")},m(Y,re){w(Y,e,re),u(e,n),u(e,s),u(e,i),u(e,o),u(e,a),u(a,l),u(a,h),u(a,f),u(f,d),u(d,m),ge(m,t[2].task),u(f,_),u(f,v),u(v,y),ge(y,t[2].timeTask),u(v,E),u(v,I),ge(I,t[2].endTask),u(f,O),u(f,D),u(D,$),ge($,t[2].notes),u(f,F),u(f,N),u(N,q),j.m(q,null),u(N,B),u(N,M),u(N,U),L&&L.m(N,null),u(e,J),u(e,ie),R&&R.m(ie,null),Q=!0,G||(se=[V(l,"keydown",t[7]),V(m,"input",t[8]),V(m,"input",t[6]),V(y,"input",t[9]),V(I,"input",t[10]),V($,"input",t[11]),V(q,"click",t[3]),V(M,"click",t[7])],G=!0)},p(Y,[re]){re&4&&m.value!==Y[2].task&&ge(m,Y[2].task),re&4&&ge(y,Y[2].timeTask),re&4&&ge(I,Y[2].endTask),re&4&&ge($,Y[2].notes),A!==(A=W(Y))&&(j.d(1),j=A(Y),j&&(j.c(),j.m(q,null))),Y[0]?L?L.p(Y,re):(L=Qh(Y),L.c(),L.m(N,null)):L&&(L.d(1),L=null),Y[0]?R&&(R.d(1),R=null):R?R.p(Y,re):(R=Yh(Y),R.c(),R.m(ie,null))},i(Y){Q||(xe(()=>{c||(c=fn(l,Ko,{},!0)),c.run(1)}),xe(()=>{z||(z=fn(f,zo,{},!0)),z.run(1)}),Q=!0)},o(Y){c||(c=fn(l,Ko,{},!1)),c.run(0),z||(z=fn(f,zo,{},!1)),z.run(0),Q=!1},d(Y){Y&&b(e),Y&&c&&c.end(),j.d(),L&&L.d(),Y&&z&&z.end(),R&&R.d(),G=!1,Xe(se)}}}let rf="";function JI(t,e,n){let s,i;Oe(t,Kl,F=>n(1,s=F)),Oe(t,kn,F=>n(2,i=F));const r=Xs();let o=!1,a="addItem";Le(Kl,s=A_,s),(async()=>jI(F=>{}))();async function l(){a==="deleItem"?confirm("Quieres borrarlo definitivmente?")==!0&&await Ca(is(ut,"todos",i.id)):a==="editItem"?await Ta(is(ut,"todos",i.id),i):await ws(gn(ut,"todos"),i),n(0,o=!1),Le(kn,i={},i)}async function c(F){Le(kn,i=F,i),a="editItem",n(0,o=!0)}async function h(){n(0,o=!0),a="deleItem",l()}function f(){i.task.length>0&&n(0,o=!0)}function d(){Le(kn,i=[],i),r("/contactos")}QI(s);function m(){i.task=this.value,kn.set(i)}function _(){i.timeTask=this.value,kn.set(i)}function v(){i.endTask=this.value,kn.set(i)}function y(){i.notes=this.value,kn.set(i)}return[o,s,i,l,c,h,f,d,m,_,v,y,F=>c(F),F=>void 0,F=>c(F),F=>void 0,()=>c]}class ZI extends Qe{constructor(e){super(),We(this,e,JI,xI,ze,{})}}function eT(t){let e;return{c(){e=p("h1"),e.textContent="Estas en Sinergias"},m(n,s){w(n,e,s)},p:fe,i:fe,o:fe,d(n){n&&b(e)}}}class tT extends Qe{constructor(e){super(),We(this,e,null,eT,ze,{})}}function nT(t){let e;return{c(){e=S("Inicia sesi\xF3n")},m(n,s){w(n,e,s)},d(n){n&&b(e)}}}function sT(t){let e,n,s,i,r,o,a,l,c,h,f,d,m,_,v,y,E,I,O,D,$,F,N,q,B,M,U,z,J;return M=new un({props:{to:"/login",$$slots:{default:[nT]},$$scope:{ctx:t}}}),{c(){e=p("div"),n=p("br"),s=p("br"),i=p("br"),r=k(),o=p("div"),a=p("h1"),a.textContent="Registra tu cuenta",l=k(),c=p("div"),h=p("input"),f=k(),d=p("div"),m=p("input"),_=k(),v=p("br"),y=k(),E=p("div"),I=p("button"),I.textContent="Registrarse",O=k(),D=p("p"),D.textContent="O tambi\xE9n",$=k(),F=p("br"),N=k(),q=p("p"),B=S("\xBFYa tienes cuenta? "),de(M.$$.fragment),g(a,"class","text-center text-login svelte-ftg4em"),g(h,"name","email"),g(h,"type","email"),g(h,"class","input-form svelte-ftg4em"),g(h,"placeholder","Correo"),h.required=!0,g(c,"class","center svelte-ftg4em"),g(m,"name","password"),g(m,"type","password"),g(m,"class","input-form svelte-ftg4em"),g(m,"placeholder","Contrase\xF1a"),g(d,"class","center svelte-ftg4em"),g(I,"class","button-signup fondo-color-signup svelte-ftg4em"),g(E,"class","center svelte-ftg4em"),g(D,"class","text-center svelte-ftg4em"),g(q,"class","text-center svelte-ftg4em"),g(o,"class","form-signin svelte-ftg4em")},m(ie,Q){w(ie,e,Q),u(e,n),u(e,s),u(e,i),u(e,r),u(e,o),u(o,a),u(o,l),u(o,c),u(c,h),u(o,f),u(o,d),u(d,m),u(o,_),u(o,v),u(o,y),u(o,E),u(E,I),u(o,O),u(o,D),u(o,$),u(o,F),u(o,N),u(o,q),u(q,B),ue(M,q,null),U=!0,z||(J=[V(h,"input",t[2]),V(m,"input",t[3]),V(I,"click",t[1])],z=!0)},p(ie,[Q]){const G={};Q&64&&(G.$$scope={dirty:Q,ctx:ie}),M.$set(G)},i(ie){U||(K(M.$$.fragment,ie),U=!0)},o(ie){Z(M.$$.fragment,ie),U=!1},d(ie){ie&&b(e),he(M),z=!1,Xe(J)}}}function iT(t){const e=Xs();let n={email:"",password:""};const s=a=>{n={...n,[a.target.name]:a.target.value}};return[s,async()=>{try{await kE(P_,n.email,n.password),e("/")}catch(a){console.log(a)}},a=>s(a),a=>s(a)]}class rT extends Qe{constructor(e){super(),We(this,e,iT,sT,ze,{})}}function of(t,e,n){const s=t.slice();return s[1]=e[n],s}function af(t,e,n){const s=t.slice();return s[1]=e[n],s}function lf(t){let e,n,s=Ct(t[1].endTask)+"",i,r,o=t[1].task+"",a,l,c=t[1].notes&&cf(t);return{c(){e=p("ul"),n=p("li"),i=S(s),r=S(` - -\r
                    `),a=S(o),l=S(` - -\r
                    `),c&&c.c(),ks(n,"complete",t[1].isComplete)},m(h,f){w(h,e,f),u(e,n),u(n,i),u(n,r),u(n,a),u(n,l),c&&c.m(n,null)},p(h,f){f&1&&s!==(s=Ct(h[1].endTask)+"")&&ae(i,s),f&1&&o!==(o=h[1].task+"")&&ae(a,o),h[1].notes?c?c.p(h,f):(c=cf(h),c.c(),c.m(n,null)):c&&(c.d(1),c=null),f&1&&ks(n,"complete",h[1].isComplete)},d(h){h&&b(e),c&&c.d()}}}function cf(t){let e=t[1].notes+"",n;return{c(){n=S(e)},m(s,i){w(s,n,i)},p(s,i){i&1&&e!==(e=s[1].notes+"")&&ae(n,e)},d(s){s&&b(n)}}}function uf(t){let e,n=!t[1].timeTask&&lf(t);return{c(){n&&n.c(),e=tn()},m(s,i){n&&n.m(s,i),w(s,e,i)},p(s,i){s[1].timeTask?n&&(n.d(1),n=null):n?n.p(s,i):(n=lf(s),n.c(),n.m(e.parentNode,e))},d(s){n&&n.d(s),s&&b(e)}}}function hf(t){let e,n,s,i=zh(t[1].endTask)+"",r,o,a=Kh(t[1].endTask)+"",l,c,h=Ct(t[1].endTask)+"",f,d,m=t[1].task+"",_,v,y=t[1].notes&&ff(t);return{c(){e=p("ul"),n=p("li"),s=p("spam"),r=S(i),o=k(),l=S(a),c=S(` - -\r
                      `),f=S(h),d=k(),_=S(m),v=S(` - -\r
                      `),y&&y.c(),g(s,"type","number"),ks(n,"complete",t[1].isComplete)},m(E,I){w(E,e,I),u(e,n),u(n,s),u(s,r),u(s,o),u(s,l),u(s,c),u(s,f),u(s,d),u(s,_),u(s,v),y&&y.m(s,null)},p(E,I){I&1&&i!==(i=zh(E[1].endTask)+"")&&ae(r,i),I&1&&a!==(a=Kh(E[1].endTask)+"")&&ae(l,a),I&1&&h!==(h=Ct(E[1].endTask)+"")&&ae(f,h),I&1&&m!==(m=E[1].task+"")&&ae(_,m),E[1].notes?y?y.p(E,I):(y=ff(E),y.c(),y.m(s,null)):y&&(y.d(1),y=null),I&1&&ks(n,"complete",E[1].isComplete)},d(E){E&&b(e),y&&y.d()}}}function ff(t){let e=t[1].notes+"",n;return{c(){n=S(e)},m(s,i){w(s,n,i)},p(s,i){i&1&&e!==(e=s[1].notes+"")&&ae(n,e)},d(s){s&&b(n)}}}function df(t){let e,n=t[1].timeTask&&hf(t);return{c(){n&&n.c(),e=k()},m(s,i){n&&n.m(s,i),w(s,e,i)},p(s,i){s[1].timeTask?n?n.p(s,i):(n=hf(s),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(s){n&&n.d(s),s&&b(e)}}}function oT(t){let e,n,s,i,r,o,a,l,c,h,f=t[0],d=[];for(let v=0;v<f.length;v+=1)d[v]=uf(af(t,f,v));let m=t[0],_=[];for(let v=0;v<m.length;v+=1)_[v]=df(of(t,m,v));return{c(){e=p("div"),n=p("div"),s=p("div"),i=p("h1"),i.textContent="Agenda",r=k(),o=p("h3"),o.textContent="Tareas",a=k();for(let v=0;v<d.length;v+=1)d[v].c();l=k(),c=p("h3"),c.textContent="Citas",h=k();for(let v=0;v<_.length;v+=1)_[v].c();g(i,"class","title svelte-13rvwi6"),g(o,"class","subtitle svelte-13rvwi6"),g(c,"class","subtitle svelte-13rvwi6"),g(s,"class","schedule"),g(n,"class","container"),g(e,"class","show-home")},m(v,y){w(v,e,y),u(e,n),u(n,s),u(s,i),u(s,r),u(s,o),u(s,a);for(let E=0;E<d.length;E+=1)d[E].m(s,null);u(s,l),u(s,c),u(s,h);for(let E=0;E<_.length;E+=1)_[E].m(s,null)},p(v,[y]){if(y&1){f=v[0];let E;for(E=0;E<f.length;E+=1){const I=af(v,f,E);d[E]?d[E].p(I,y):(d[E]=uf(I),d[E].c(),d[E].m(s,l))}for(;E<d.length;E+=1)d[E].d(1);d.length=f.length}if(y&1){m=v[0];let E;for(E=0;E<m.length;E+=1){const I=of(v,m,E);_[E]?_[E].p(I,y):(_[E]=df(I),_[E].c(),_[E].m(s,null))}for(;E<_.length;E+=1)_[E].d(1);_.length=m.length}},i:fe,o:fe,d(v){v&&b(e),qe(d,v),qe(_,v)}}}function aT(t,e,n){let s;return Oe(t,Kl,i=>n(0,s=i)),[s]}class lT extends Qe{constructor(e){super(),We(this,e,aT,oT,ze,{})}}function pf(t,e,n){const s=t.slice();return s[0]=e[n],s[2]=n,s}function cT(t){let e,n=Ct(t[0].date)+"",s,i,r=t[0].comment+"",o;return{c(){e=p("div"),s=S(n),i=k(),o=S(r),g(e,"class","date-binnacle")},m(a,l){w(a,e,l),u(e,s),u(e,i),u(e,o)},p:fe,d(a){a&&b(e)}}}function mf(t){let e,n,s=t[2]<30&&cT(t);return{c(){e=p("div"),s&&s.c(),n=k(),g(e,"class","int-binnacle")},m(i,r){w(i,e,r),s&&s.m(e,null),u(e,n)},p(i,r){i[2]<30&&s.p(i,r)},d(i){i&&b(e),s&&s.d()}}}function uT(t){let e,n,s,i,r,o,a,l=_r,c=[];for(let h=0;h<l.length;h+=1)c[h]=mf(pf(t,l,h));return{c(){e=S(`a\r
`),n=p("main"),s=p("div"),i=p("div"),r=p("div"),o=p("h1"),o.textContent="Bit\xE1cora",a=k();for(let h=0;h<c.length;h+=1)c[h].c();g(o,"class","title svelte-7lgm1k"),g(r,"class","binnacleHome"),g(i,"class","schedule"),g(s,"class","container")},m(h,f){w(h,e,f),w(h,n,f),u(n,s),u(s,i),u(i,r),u(r,o),u(r,a);for(let d=0;d<c.length;d+=1)c[d].m(r,null)},p(h,[f]){if(f&0){l=_r;let d;for(d=0;d<l.length;d+=1){const m=pf(h,l,d);c[d]?c[d].p(m,f):(c[d]=mf(m),c[d].c(),c[d].m(r,null))}for(;d<c.length;d+=1)c[d].d(1);c.length=l.length}},i:fe,o:fe,d(h){h&&b(e),h&&b(n),qe(c,h)}}}function hT(t){return function(){_r.sort((e,n)=>e.date<n.date?1:e.date>n.date?-1:0)}(),[]}class fT extends Qe{constructor(e){super(),We(this,e,hT,uT,ze,{})}}const M_="/to-deploy-mh/assets/add-user.1bd66bde.png",$_="/to-deploy-mh/assets/house.99302696.png",dT="/to-deploy-mh/assets/team.31fda88c.png",pT=yt(!1);function mT(t){let e,n,s,i,r,o;return{c(){e=p("div"),n=p("div"),s=p("img"),r=k(),o=p("h1"),o.textContent="Contactos",et(s.src,i=M_)||g(s,"src",i),g(s,"alt","Buzon"),g(s,"class","profile-img svelte-mxk4x8"),g(o,"class","name svelte-mxk4x8"),g(n,"class","optionCard svelte-mxk4x8"),g(e,"class","container")},m(a,l){w(a,e,l),u(e,n),u(n,s),u(n,r),u(n,o)},p:fe,d(a){a&&b(e)}}}function gT(t){let e,n,s,i,r,o;return{c(){e=p("div"),n=p("div"),s=p("img"),r=k(),o=p("h1"),o.textContent="Propiedades",et(s.src,i=$_)||g(s,"src",i),g(s,"alt","propiedad"),g(s,"class","profile-img svelte-mxk4x8"),g(o,"class","name svelte-mxk4x8"),g(n,"class","optionCard svelte-mxk4x8"),g(e,"class","container")},m(a,l){w(a,e,l),u(e,n),u(n,s),u(n,r),u(n,o)},p:fe,d(a){a&&b(e)}}}function _T(t){let e,n,s,i,r,o;return{c(){e=p("div"),n=p("div"),s=p("img"),r=k(),o=p("h1"),o.textContent="Agenda",et(s.src,i=R_)||g(s,"src",i),g(s,"alt","agenda"),g(s,"class","profile-img svelte-mxk4x8"),g(o,"class","name svelte-mxk4x8"),g(n,"class","optionCard svelte-mxk4x8"),g(e,"class","container")},m(a,l){w(a,e,l),u(e,n),u(n,s),u(n,r),u(n,o)},p:fe,d(a){a&&b(e)}}}function vT(t){let e,n,s,i,r,o;return{c(){e=p("div"),n=p("div"),s=p("img"),r=k(),o=p("h1"),o.textContent="Sinergias",et(s.src,i=dT)||g(s,"src",i),g(s,"alt","sinergias"),g(s,"class","profile-img svelte-mxk4x8"),g(o,"class","name svelte-mxk4x8"),g(n,"class","optionCard svelte-mxk4x8"),g(e,"class","container")},m(a,l){w(a,e,l),u(e,n),u(n,s),u(n,r),u(n,o)},p:fe,d(a){a&&b(e)}}}function yT(t){let e,n,s,i,r,o,a,l;return e=new un({props:{to:"/contactos",title:"contactos",$$slots:{default:[mT]},$$scope:{ctx:t}}}),s=new un({props:{to:"/propiedades",title:"propiedades",$$slots:{default:[gT]},$$scope:{ctx:t}}}),r=new un({props:{to:"/agenda",title:"agenda",class:"s",$$slots:{default:[_T]},$$scope:{ctx:t}}}),a=new un({props:{to:"/sinergias",title:"sinergias",$$slots:{default:[vT]},$$scope:{ctx:t}}}),{c(){de(e.$$.fragment),n=k(),de(s.$$.fragment),i=k(),de(r.$$.fragment),o=k(),de(a.$$.fragment)},m(c,h){ue(e,c,h),w(c,n,h),ue(s,c,h),w(c,i,h),ue(r,c,h),w(c,o,h),ue(a,c,h),l=!0},p(c,h){const f={};h&1&&(f.$$scope={dirty:h,ctx:c}),e.$set(f);const d={};h&1&&(d.$$scope={dirty:h,ctx:c}),s.$set(d);const m={};h&1&&(m.$$scope={dirty:h,ctx:c}),r.$set(m);const _={};h&1&&(_.$$scope={dirty:h,ctx:c}),a.$set(_)},i(c){l||(K(e.$$.fragment,c),K(s.$$.fragment,c),K(r.$$.fragment,c),K(a.$$.fragment,c),l=!0)},o(c){Z(e.$$.fragment,c),Z(s.$$.fragment,c),Z(r.$$.fragment,c),Z(a.$$.fragment,c),l=!1},d(c){he(e,c),c&&b(n),he(s,c),c&&b(i),he(r,c),c&&b(o),he(a,c)}}}function bT(t){let e,n,s,i,r,o,a,l,c;return s=new tc({props:{$$slots:{default:[yT]},$$scope:{ctx:t}}}),o=new lT({props:{"(orderTodos)":!0}}),l=new fT({}),{c(){e=p("body"),n=p("div"),de(s.$$.fragment),i=k(),r=p("div"),de(o.$$.fragment),a=k(),de(l.$$.fragment),g(n,"class","wrapper-grid svelte-mxk4x8"),g(r,"class",""),g(e,"class","svelte-mxk4x8")},m(h,f){w(h,e,f),u(e,n),ue(s,n,null),u(e,i),u(e,r),ue(o,r,null),u(r,a),ue(l,r,null),c=!0},p(h,[f]){const d={};f&1&&(d.$$scope={dirty:f,ctx:h}),s.$set(d)},i(h){c||(K(s.$$.fragment,h),K(o.$$.fragment,h),K(l.$$.fragment,h),c=!0)},o(h){Z(s.$$.fragment,h),Z(o.$$.fragment,h),Z(l.$$.fragment,h),c=!1},d(h){h&&b(e),he(s),he(o),he(l)}}}class wT extends Qe{constructor(e){super(),We(this,e,null,bT,ze,{})}}function kT(t){let e,n,s,i,r,o,a,l,c,h,f=Ct(t[2])+"",d,m,_,v,y,E,I,O,D,$,F,N,q,B,M,U,z,J,ie;return{c(){e=p("div"),n=p("div"),s=p("div"),i=p("h5"),r=S(t[0]),o=k(),a=S(t[1]),l=k(),c=p("h5"),h=S("Alta "),d=S(f),m=k(),_=p("div"),v=p("p"),y=S(t[3]),E=k(),I=p("p"),O=S("tel: "),D=S(t[4]),$=S(" email: "),F=S(t[5]),N=k(),q=p("p"),B=S("Presupuesto "),M=S(t[6]),U=k(),z=p("p"),J=S("Rango "),ie=S(t[7]),g(s,"class","namePerson svelte-1thiswe"),g(_,"class","nameDate svelte-1thiswe"),g(n,"class","contactCard"),g(e,"class","container contact svelte-1thiswe")},m(Q,G){w(Q,e,G),u(e,n),u(n,s),u(s,i),u(i,r),u(i,o),u(i,a),u(s,l),u(s,c),u(c,h),u(c,d),u(n,m),u(n,_),u(_,v),u(v,y),u(_,E),u(_,I),u(I,O),u(I,D),u(I,$),u(I,F),u(_,N),u(_,q),u(q,B),u(q,M),u(_,U),u(_,z),u(z,J),u(z,ie)},p(Q,[G]){G&1&&ae(r,Q[0]),G&2&&ae(a,Q[1]),G&4&&f!==(f=Ct(Q[2])+"")&&ae(d,f),G&8&&ae(y,Q[3]),G&16&&ae(D,Q[4]),G&32&&ae(F,Q[5]),G&64&&ae(M,Q[6]),G&128&&ae(ie,Q[7])},i:fe,o:fe,d(Q){Q&&b(e)}}}function ET(t,e,n){let{name:s,lastname:i,createdAt:r,contactStage:o,telephon:a,email:l,budget:c,rangeProp:h}=e;return t.$$set=f=>{"name"in f&&n(0,s=f.name),"lastname"in f&&n(1,i=f.lastname),"createdAt"in f&&n(2,r=f.createdAt),"contactStage"in f&&n(3,o=f.contactStage),"telephon"in f&&n(4,a=f.telephon),"email"in f&&n(5,l=f.email),"budget"in f&&n(6,c=f.budget),"rangeProp"in f&&n(7,h=f.rangeProp)},[s,i,r,o,a,l,c,h]}class IT extends Qe{constructor(e){super(),We(this,e,ET,kT,ze,{name:0,lastname:1,createdAt:2,contactStage:3,telephon:4,email:5,budget:6,rangeProp:7})}}function TT(t){let e,n,s,i;return{c(){e=p("div"),n=p("input"),g(n,"class","searchInput svelte-6bonih"),g(n,"type","text"),g(n,"id","search-field"),g(n,"placeholder","Enter Search Term"),g(n,"autocomplete","off"),g(e,"id","search-input-cont")},m(r,o){w(r,e,o),u(e,n),ge(n,t[0]),s||(i=[V(n,"input",t[2]),V(n,"input",t[1])],s=!0)},p(r,[o]){o&1&&n.value!==r[0]&&ge(n,r[0])},i:fe,o:fe,d(r){r&&b(e),s=!1,Xe(i)}}}function CT(t,e,n){let{searchTerm:s}=e;function i(o){tv.call(this,t,o)}function r(){s=this.value,n(0,s)}return t.$$set=o=>{"searchTerm"in o&&n(0,s=o.searchTerm)},[s,i,r]}class hu extends Qe{constructor(e){super(),We(this,e,CT,TT,ze,{searchTerm:0})}}async function ST(t,e){if(console.log("estas en la funcion"),t==="todoAdding"){const n=gn(ut,"todos");await ws(n,e)}else t==="todoUpdate"?await Ta(is(ut,"todos",e.id),e):t==="todoDelete"&&await Ca(is(ut,"todos",e.id));e=""}function AT(t){let e,n,s,i,r,o,a,l,c,h,f,d,m,_,v,y,E,I,O,D,$,F;return{c(){e=p("div"),s=k(),i=p("div"),r=p("div"),o=p("input"),a=k(),l=p("input"),c=k(),h=p("input"),f=k(),d=p("div"),m=p("textarea"),_=k(),v=p("div"),y=p("button"),y.textContent="Guardar",E=k(),I=p("button"),I.textContent="Cancelar",g(e,"class","background svelte-18c6vp2"),g(o,"type","text"),g(o,"class","inputTask svelte-18c6vp2"),g(o,"placeholder","Agrega una Tarea o Cita"),g(l,"type","time"),g(l,"class","inputDate svelte-18c6vp2"),g(h,"type","date"),g(h,"class","inputDate svelte-18c6vp2"),g(m,"name","notes"),g(m,"cols","40"),g(m,"rows","5"),g(m,"placeholder","descripci\xF3n"),g(y,"class","btnShedule svelte-18c6vp2"),g(I,"class","btnShedule svelte-18c6vp2"),g(i,"class","pop__up svelte-18c6vp2")},m(N,q){w(N,e,q),w(N,s,q),w(N,i,q),u(i,r),u(r,o),ge(o,t[0]),u(i,a),u(i,l),ge(l,t[1].timeTask),u(i,c),u(i,h),ge(h,t[1].endTask),u(i,f),u(i,d),u(d,m),ge(m,t[1].notes),u(i,_),u(i,v),u(v,y),u(v,E),u(v,I),D=!0,$||(F=[V(window,"keydown",t[4]),V(e,"click",t[2]),V(o,"input",t[5]),V(l,"input",t[6]),V(h,"input",t[7]),V(m,"input",t[8]),V(y,"click",t[3]),V(I,"click",t[2])],$=!0)},p(N,[q]){q&1&&o.value!==N[0]&&ge(o,N[0]),q&2&&ge(l,N[1].timeTask),q&2&&ge(h,N[1].endTask),q&2&&ge(m,N[1].notes)},i(N){D||(xe(()=>{n||(n=fn(e,Ko,{},!0)),n.run(1)}),xe(()=>{O||(O=fn(i,zo,{},!0)),O.run(1)}),D=!0)},o(N){n||(n=fn(e,Ko,{},!1)),n.run(0),O||(O=fn(i,zo,{},!1)),O.run(0),D=!1},d(N){N&&b(e),N&&n&&n.end(),N&&b(s),N&&b(i),N&&O&&O.end(),$=!1,Xe(F)}}}function DT(t,e,n){let s,i,r;Oe(t,kn,I=>n(10,s=I)),Oe(t,Ze,I=>n(11,i=I)),Oe(t,Je,I=>n(12,r=I));const o=ip();let a=`${r.name} ${r.lastname}`,l=[],c=[],h;l={task:"",endTask:"",isComplete:"",createdAt:"",timeTask:"",notes:"",user:""};function f(){o("closeIt"),Le(Ze,i="contSelect",i),Le(kn,s="",s)}const d=async()=>{console.log("ests en addTodo"),Le(Ze,i="todoAdding",i),console.log(h),c=a,Le(kn,s={...l,task:c},s),ST(i,s),console.log(s)},m=I=>{I.key==="Enter"&&d()};function _(){a=this.value,n(0,a)}function v(){l.timeTask=this.value,n(1,l)}function y(){l.endTask=this.value,n(1,l)}function E(){l.notes=this.value,n(1,l)}return[a,l,f,d,m,_,v,y,E]}class PT extends Qe{constructor(e){super(),We(this,e,DT,AT,ze,{})}}function RT(t){let e,n,s,i,r,o,a,l,c,h,f,d,m,_,v,y,E,I,O,D,$,F,N,q,B,M,U,z,J,ie,Q,G,se,W,A,j,L,R,Y,re;return{c(){e=p("main"),n=p("section"),s=p("figure"),i=p("img"),o=k(),a=p("div"),l=S(t[1]),c=k(),h=p("figcaption"),f=S(t[2]),d=k(),m=p("section"),_=p("section"),v=p("div"),y=p("div"),E=S(t[3]),I=S(" Rec\xE1maras"),O=k(),D=p("div"),$=S(t[4]),F=S(" Ba\xF1os"),N=k(),q=p("div"),B=S(t[5]),M=S(" Estacionamientos"),U=k(),z=p("div"),J=S(t[6]),ie=S(" m2 de Contruccion"),Q=k(),G=p("div"),se=S(t[7]),W=S(" m2 de Terreno"),A=k(),j=p("br"),L=k(),R=p("div"),Y=S("Precio $: "),re=S(t[8]),et(i.src,r=t[0])||g(i,"src",r),g(i,"alt",t[1]),g(i,"class","bkcover svelte-1w1p4eb"),g(a,"class","language svelte-1w1p4eb"),g(h,"class","svelte-1w1p4eb"),g(s,"class","bkcont svelte-1w1p4eb"),g(n,"class","book-top-info svelte-1w1p4eb"),g(v,"class","buy-options-cont svelte-1w1p4eb"),g(_,"class","from-pariyatti available-at svelte-1w1p4eb"),g(m,"class","book-bottom-links svelte-1w1p4eb")},m(ke,le){w(ke,e,le),u(e,n),u(n,s),u(s,i),u(s,o),u(s,a),u(a,l),u(s,c),u(s,h),u(h,f),u(e,d),u(e,m),u(m,_),u(_,v),u(v,y),u(y,E),u(y,I),u(v,O),u(v,D),u(D,$),u(D,F),u(v,N),u(v,q),u(q,B),u(q,M),u(v,U),u(v,z),u(z,J),u(z,ie),u(v,Q),u(v,G),u(G,se),u(G,W),u(v,A),u(v,j),u(v,L),u(v,R),u(R,Y),u(R,re)},p(ke,[le]){le&1&&!et(i.src,r=ke[0])&&g(i,"src",r),le&2&&g(i,"alt",ke[1]),le&2&&ae(l,ke[1]),le&4&&ae(f,ke[2]),le&8&&ae(E,ke[3]),le&16&&ae($,ke[4]),le&32&&ae(B,ke[5]),le&64&&ae(J,ke[6]),le&128&&ae(se,ke[7]),le&256&&ae(re,ke[8])},i:fe,o:fe,d(ke){ke&&b(e)}}}function NT(t,e,n){let{urlImage:s,claveEB:i,nameProperty:r,beds:o,bathroom:a,park:l,areaBuilding:c,areaTotal:h,price:f}=e;return t.$$set=d=>{"urlImage"in d&&n(0,s=d.urlImage),"claveEB"in d&&n(1,i=d.claveEB),"nameProperty"in d&&n(2,r=d.nameProperty),"beds"in d&&n(3,o=d.beds),"bathroom"in d&&n(4,a=d.bathroom),"park"in d&&n(5,l=d.park),"areaBuilding"in d&&n(6,c=d.areaBuilding),"areaTotal"in d&&n(7,h=d.areaTotal),"price"in d&&n(8,f=d.price)},[s,i,r,o,a,l,c,h,f]}class U_ extends Qe{constructor(e){super(),We(this,e,NT,RT,ze,{urlImage:0,claveEB:1,nameProperty:2,beds:3,bathroom:4,park:5,areaBuilding:6,areaTotal:7,price:8})}}let Ns;function F_(t){return t<=1e6?Ns="PRM":t<=25e5?Ns="SGN":t<=5e6?Ns="TRC":t<=8e6?Ns="CRT":t<=12e6?Ns="QNT":t>12e6&&(Ns="SXT"),Ns}let sl,il;function OT(t){let e=Fn;return e=e.filter(n=>n.selectTP===t.selecTP),console.log("filtraste por tipo de propiedad",e),t.numBeds>0&&(e=e.filter(n=>n.beds>=t.numBeds)),t.numBaths>0&&(e=e.filter(n=>n.bathroom>=t.numBaths)),t.numParks>0&&(e=e.filter(n=>n.park>=t.numParks)),console.log("Por caracteristicas",e),t.budget?(console.log("filtraste por budget"),sl=t.budget*.7,il=t.budget*1.1,console.log(sl,il),e=e.filter(n=>n.price>=sl&&n.price<=il)):(console.log("filtraste por rango"),e=e.filter(n=>F_(n.price)===t.rangeProp)),console.log("filtraste presupuesto",e),t.locaProperty.length>0&&(e=e.filter(n=>t.locaProperty.some(s=>n.locaProperty.includes(s)))),console.log("Filtraste por Ubicacion",e),t.tagsProperty.length>0&&(e=e.filter(n=>t.tagsProperty.every(s=>n.tagsProperty.includes(s)))),console.log("Filtraste por localizacion",e),e.length===0||""+e.length,Hl.set(e)}async function gf(t,e){if(t==="binnAdding"){console.log(e);const n=gn(ut,"binnacles");await ws(n,e)}else t==="binnacleUpdate"?console.log("Se edit\xF3 a: ",e.comment,e.to):t==="binnacleDelete"&&console.log("Se elimin\xF3 a: ",e.to);e=[]}const B_="/to-deploy-mh/assets/trash.2d1385a7.svg",Go=["Casa","Terreno","Departamento","Casa o Departamento","Local Comercial","Casa de Campo"],_f=["Lona en Propiedad","Propiedades.com","NocNok","Mercado Libre","Vivanuncios","Lamudi","Inmuebles24","Referido","Otro"],vf=["Comprador","Arrendador","Propietario","Agente Asociado","Agente Inmobiliario","Constructor","Inversionista","Otro"],yf=["Contado","Credito Hipotecario","INFONAVIT","COFINAVIT","FOVISSSTE","ALIADOS","Conyugal"],bf=["Venta","Renta"],wf=["Rango","PRM","SGN","TRC","CRT","QNT","SXT","SPT"],Wo=[0,1,2,3,4,5],En=[0,1,2,3,4],kf=["Due\xF1o","Familiar","Inmobiliaria","Conocido"];function LT(t){let e,n,s,i,r,o,a,l,c,h,f,d,m,_,v,y,E,I,O,D,$,F,N,q,B,M,U,z,J,ie,Q,G,se,W,A,j,L,R,Y,re,ke,le,He;return{c(){e=p("div"),n=p("div"),s=p("label"),i=S(`/Norte\\\r
			`),r=p("input"),o=k(),a=p("div"),l=p("label"),c=S(`/Noroeste\r
			`),h=p("input"),f=k(),d=p("label"),m=p("input"),_=S("NorEste\\"),v=k(),y=p("div"),E=p("label"),I=S(`/Oeste\r
			`),O=p("input"),D=k(),$=p("label"),F=S(`Centro Norte\r
			`),N=p("input"),q=k(),B=p("label"),M=p("input"),U=S("Este\\"),z=k(),J=p("div"),ie=p("label"),Q=S(`Centro Sur\r
			`),G=p("input"),se=k(),W=p("div"),A=p("label"),j=S(`/SurOeste\r
			`),L=p("input"),R=k(),Y=p("label"),re=p("input"),ke=S("SurEste\\"),r.__value="Norte",r.value=r.__value,g(r,"id","north"),g(r,"type","checkbox"),t[2][0].push(r),g(s,"for","north"),g(n,"class","filterLocationOne svelte-1lvjb5r"),h.__value="Noroeste",h.value=h.__value,g(h,"id","northwest"),g(h,"type","checkbox"),t[2][0].push(h),g(l,"for","northwest"),m.__value="Noreste",m.value=m.__value,g(m,"id","northeast"),g(m,"type","checkbox"),t[2][0].push(m),g(d,"for","northeast"),g(a,"class","filterLocationOne svelte-1lvjb5r"),O.__value="Oeste",O.value=O.__value,g(O,"id","west"),g(O,"type","checkbox"),t[2][0].push(O),g(E,"for","west"),N.__value="Centronorte",N.value=N.__value,g(N,"id","townNorth"),g(N,"type","checkbox"),t[2][0].push(N),g($,"for","townNorth"),M.__value="Este",M.value=M.__value,g(M,"id","east"),g(M,"type","checkbox"),t[2][0].push(M),g(B,"for","east"),g(y,"class","filterLocationOne svelte-1lvjb5r"),G.__value="CentroSur",G.value=G.__value,g(G,"id","townsouth"),g(G,"type","checkbox"),t[2][0].push(G),g(ie,"for","townsouth"),g(J,"class","filterLocationOne svelte-1lvjb5r"),L.__value="SurOeste",L.value=L.__value,g(L,"id","southwest"),g(L,"type","checkbox"),t[2][0].push(L),g(A,"for","southwest"),re.__value="SurEste",re.value=re.__value,g(re,"id","southeast"),g(re,"type","checkbox"),t[2][0].push(re),g(Y,"for","southeast"),g(W,"class","filterLocationOne svelte-1lvjb5r"),g(e,"class","containerUbication svelte-1lvjb5r")},m(X,me){w(X,e,me),u(e,n),u(n,s),u(s,i),u(s,r),r.checked=~t[0].indexOf(r.__value),u(e,o),u(e,a),u(a,l),u(l,c),u(l,h),h.checked=~t[0].indexOf(h.__value),u(a,f),u(a,d),u(d,m),m.checked=~t[0].indexOf(m.__value),u(d,_),u(e,v),u(e,y),u(y,E),u(E,I),u(E,O),O.checked=~t[0].indexOf(O.__value),u(y,D),u(y,$),u($,F),u($,N),N.checked=~t[0].indexOf(N.__value),u(y,q),u(y,B),u(B,M),M.checked=~t[0].indexOf(M.__value),u(B,U),u(e,z),u(e,J),u(J,ie),u(ie,Q),u(ie,G),G.checked=~t[0].indexOf(G.__value),u(e,se),u(e,W),u(W,A),u(A,j),u(A,L),L.checked=~t[0].indexOf(L.__value),u(W,R),u(W,Y),u(Y,re),re.checked=~t[0].indexOf(re.__value),u(Y,ke),le||(He=[V(r,"change",t[1]),V(h,"change",t[3]),V(m,"change",t[4]),V(O,"change",t[5]),V(N,"change",t[6]),V(M,"change",t[7]),V(G,"change",t[8]),V(L,"change",t[9]),V(re,"change",t[10])],le=!0)},p(X,[me]){me&1&&(r.checked=~X[0].indexOf(r.__value)),me&1&&(h.checked=~X[0].indexOf(h.__value)),me&1&&(m.checked=~X[0].indexOf(m.__value)),me&1&&(O.checked=~X[0].indexOf(O.__value)),me&1&&(N.checked=~X[0].indexOf(N.__value)),me&1&&(M.checked=~X[0].indexOf(M.__value)),me&1&&(G.checked=~X[0].indexOf(G.__value)),me&1&&(L.checked=~X[0].indexOf(L.__value)),me&1&&(re.checked=~X[0].indexOf(re.__value))},i:fe,o:fe,d(X){X&&b(e),t[2][0].splice(t[2][0].indexOf(r),1),t[2][0].splice(t[2][0].indexOf(h),1),t[2][0].splice(t[2][0].indexOf(m),1),t[2][0].splice(t[2][0].indexOf(O),1),t[2][0].splice(t[2][0].indexOf(N),1),t[2][0].splice(t[2][0].indexOf(M),1),t[2][0].splice(t[2][0].indexOf(G),1),t[2][0].splice(t[2][0].indexOf(L),1),t[2][0].splice(t[2][0].indexOf(re),1),le=!1,Xe(He)}}}function MT(t,e,n){let{ubication:s}=e;const i=[[]];function r(){s=Ft(i[0],this.__value,this.checked),n(0,s)}function o(){s=Ft(i[0],this.__value,this.checked),n(0,s)}function a(){s=Ft(i[0],this.__value,this.checked),n(0,s)}function l(){s=Ft(i[0],this.__value,this.checked),n(0,s)}function c(){s=Ft(i[0],this.__value,this.checked),n(0,s)}function h(){s=Ft(i[0],this.__value,this.checked),n(0,s)}function f(){s=Ft(i[0],this.__value,this.checked),n(0,s)}function d(){s=Ft(i[0],this.__value,this.checked),n(0,s)}function m(){s=Ft(i[0],this.__value,this.checked),n(0,s)}return t.$$set=_=>{"ubication"in _&&n(0,s=_.ubication)},[s,r,i,o,a,l,c,h,f,d,m]}class V_ extends Qe{constructor(e){super(),We(this,e,MT,LT,ze,{ubication:0})}}function $T(t){let e,n,s,i,r,o,a,l,c,h,f,d,m,_,v,y,E,I,O,D,$,F,N,q,B,M,U,z,J,ie,Q,G,se;return{c(){e=p("section"),n=p("div"),s=p("label"),i=S(`Fracc. Privado\r
		   `),r=p("input"),o=k(),a=p("label"),l=S(`Frente a Parque\r
         `),c=p("input"),h=k(),f=p("label"),d=S(`Una Planta\r
         `),m=p("input"),_=k(),v=p("div"),y=p("label"),E=S(`Recamara en P.B.\r
		`),I=p("input"),O=k(),D=p("label"),$=S(`Patio Amplio\r
   `),F=p("input"),N=k(),q=p("label"),B=S(`Lista para Habitarse\r
   `),M=p("input"),U=k(),z=p("div"),J=p("label"),ie=S(`Nueva\r
		`),Q=p("input"),g(r,"type","checkbox"),r.__value="Fracc. Privado",r.value=r.__value,t[2][0].push(r),g(c,"type","checkbox"),c.__value="Frente a Parque",c.value=c.__value,t[2][0].push(c),g(m,"type","checkbox"),m.__value="Una Planta",m.value=m.__value,t[2][0].push(m),g(n,"class","svelte-1b9bvt0"),g(I,"type","checkbox"),I.__value="Recamara en PB",I.value=I.__value,t[2][0].push(I),g(F,"type","checkbox"),F.__value="Patio Amplio",F.value=F.__value,t[2][0].push(F),g(M,"type","checkbox"),M.__value="Lista Habitarse",M.value=M.__value,t[2][0].push(M),g(v,"class","svelte-1b9bvt0"),g(Q,"type","checkbox"),Q.__value="Nueva",Q.value=Q.__value,t[2][0].push(Q),g(z,"class","svelte-1b9bvt0"),g(e,"class","svelte-1b9bvt0")},m(W,A){w(W,e,A),u(e,n),u(n,s),u(s,i),u(s,r),r.checked=~t[0].indexOf(r.__value),u(n,o),u(n,a),u(a,l),u(a,c),c.checked=~t[0].indexOf(c.__value),u(n,h),u(n,f),u(f,d),u(f,m),m.checked=~t[0].indexOf(m.__value),u(e,_),u(e,v),u(v,y),u(y,E),u(y,I),I.checked=~t[0].indexOf(I.__value),u(v,O),u(v,D),u(D,$),u(D,F),F.checked=~t[0].indexOf(F.__value),u(v,N),u(v,q),u(q,B),u(q,M),M.checked=~t[0].indexOf(M.__value),u(e,U),u(e,z),u(z,J),u(J,ie),u(J,Q),Q.checked=~t[0].indexOf(Q.__value),G||(se=[V(r,"change",t[1]),V(c,"change",t[3]),V(m,"change",t[4]),V(I,"change",t[5]),V(F,"change",t[6]),V(M,"change",t[7]),V(Q,"change",t[8])],G=!0)},p(W,[A]){A&1&&(r.checked=~W[0].indexOf(r.__value)),A&1&&(c.checked=~W[0].indexOf(c.__value)),A&1&&(m.checked=~W[0].indexOf(m.__value)),A&1&&(I.checked=~W[0].indexOf(I.__value)),A&1&&(F.checked=~W[0].indexOf(F.__value)),A&1&&(M.checked=~W[0].indexOf(M.__value)),A&1&&(Q.checked=~W[0].indexOf(Q.__value))},i:fe,o:fe,d(W){W&&b(e),t[2][0].splice(t[2][0].indexOf(r),1),t[2][0].splice(t[2][0].indexOf(c),1),t[2][0].splice(t[2][0].indexOf(m),1),t[2][0].splice(t[2][0].indexOf(I),1),t[2][0].splice(t[2][0].indexOf(F),1),t[2][0].splice(t[2][0].indexOf(M),1),t[2][0].splice(t[2][0].indexOf(Q),1),G=!1,Xe(se)}}}function UT(t,e,n){let{tag:s}=e;const i=[[]];function r(){s=Ft(i[0],this.__value,this.checked),n(0,s)}function o(){s=Ft(i[0],this.__value,this.checked),n(0,s)}function a(){s=Ft(i[0],this.__value,this.checked),n(0,s)}function l(){s=Ft(i[0],this.__value,this.checked),n(0,s)}function c(){s=Ft(i[0],this.__value,this.checked),n(0,s)}function h(){s=Ft(i[0],this.__value,this.checked),n(0,s)}function f(){s=Ft(i[0],this.__value,this.checked),n(0,s)}return t.$$set=d=>{"tag"in d&&n(0,s=d.tag)},[s,r,i,o,a,l,c,h,f]}class j_ extends Qe{constructor(e){super(),We(this,e,UT,$T,ze,{tag:0})}}function Ef(t,e,n){const s=t.slice();return s[26]=e[n],s}function If(t,e,n){const s=t.slice();return s[29]=e[n],s}function Tf(t,e,n){const s=t.slice();return s[32]=e[n],s}function Cf(t,e,n){const s=t.slice();return s[35]=e[n],s}function Sf(t,e,n){const s=t.slice();return s[38]=e[n],s}function Af(t,e,n){const s=t.slice();return s[41]=e[n],s}function Df(t,e,n){const s=t.slice();return s[44]=e[n],s}function Pf(t,e,n){const s=t.slice();return s[47]=e[n],s}function Rf(t,e,n){const s=t.slice();return s[50]=e[n],s}function Nf(t,e,n){const s=t.slice();return s[53]=e[n],s}function FT(t){let e,n=Ct(t[3].createdAt)+"",s,i,r;return{c(){e=p("h3"),s=S(n),g(e,"class","dataInput svelte-1myljlf")},m(o,a){w(o,e,a),u(e,s),i||(r=V(e,"dblclick",t[4]),i=!0)},p(o,a){a[0]&8&&n!==(n=Ct(o[3].createdAt)+"")&&ae(s,n)},d(o){o&&b(e),i=!1,r()}}}function BT(t){let e,n,s;return{c(){e=p("input"),g(e,"class","dataInput svelte-1myljlf"),g(e,"type","date")},m(i,r){w(i,e,r),ge(e,t[3].createdAt),n||(s=V(e,"input",t[6]),n=!0)},p(i,r){r[0]&9&&ge(e,i[3].createdAt)},d(i){i&&b(e),n=!1,s()}}}function Of(t){let e,n,s;return{c(){e=p("input"),g(e,"class","dataInput svelte-1myljlf"),g(e,"type","email"),g(e,"placeholder","email")},m(i,r){w(i,e,r),ge(e,t[3].email),n||(s=V(e,"input",t[10]),n=!0)},p(i,r){r[0]&9&&e.value!==i[3].email&&ge(e,i[3].email)},d(i){i&&b(e),n=!1,s()}}}function Lf(t){let e,n=t[53]+"",s,i;return{c(){e=p("option"),s=S(n),g(e,"class","dataInput svelte-1myljlf"),g(e,"type","checkbox"),e.__value=i=t[53],e.value=e.__value},m(r,o){w(r,e,o),u(e,s)},p(r,o){o[0]&1&&n!==(n=r[53]+"")&&ae(s,n),o[0]&1&&i!==(i=r[53])&&(e.__value=i,e.value=e.__value)},d(r){r&&b(e)}}}function Mf(t){let e,n,s;return{c(){e=p("input"),g(e,"class","dataInput svelte-1myljlf"),g(e,"type","number"),g(e,"placeholder","Presupuesto")},m(i,r){w(i,e,r),ge(e,t[3].budget),n||(s=V(e,"input",t[12]),n=!0)},p(i,r){r[0]&9&&ms(e.value)!==i[3].budget&&ge(e,i[3].budget)},d(i){i&&b(e),n=!1,s()}}}function $f(t){let e,n=t[50]+"",s;return{c(){e=p("option"),s=S(n),g(e,"type","checkbox"),e.__value=t[50],e.value=e.__value},m(i,r){w(i,e,r),u(e,s)},p:fe,d(i){i&&b(e)}}}function Uf(t){let e,n=t[47]+"",s;return{c(){e=p("option"),s=S(n),g(e,"type","checkbox"),e.__value=t[47],e.value=e.__value},m(i,r){w(i,e,r),u(e,s)},p:fe,d(i){i&&b(e)}}}function Ff(t){let e,n,s,i,r,o,a,l,c,h,f,d,m,_,v,y,E,I,O,D,$,F,N,q,B,M,U,z,J,ie,Q=yf,G=[];for(let C=0;C<Q.length;C+=1)G[C]=Bf(Df(t,Q,C));let se=Go,W=[];for(let C=0;C<se.length;C+=1)W[C]=Vf(Af(t,se,C));let A=wf,j=[];for(let C=0;C<A.length;C+=1)j[C]=jf(Sf(t,A,C));let L=Wo,R=[];for(let C=0;C<L.length;C+=1)R[C]=qf(Cf(t,L,C));let Y=En,re=[];for(let C=0;C<Y.length;C+=1)re[C]=Hf(Tf(t,Y,C));let ke=En,le=[];for(let C=0;C<ke.length;C+=1)le[C]=Kf(If(t,ke,C));let He=En,X=[];for(let C=0;C<He.length;C+=1)X[C]=zf(Ef(t,He,C));function me(C){t[23](C)}let H={};t[3].locaProperty!==void 0&&(H.ubication=t[3].locaProperty),N=new V_({props:H}),Jn.push(()=>js(N,"ubication",me));function ye(C){t[24](C)}let P={};return t[3].tagsProperty!==void 0&&(P.tag=t[3].tagsProperty),M=new j_({props:P}),Jn.push(()=>js(M,"tag",ye)),{c(){e=p("select"),n=p("option"),n.textContent="Modo de Pago";for(let C=0;C<G.length;C+=1)G[C].c();s=k(),i=p("select"),r=p("option"),r.textContent="Tipo de Propiedad";for(let C=0;C<W.length;C+=1)W[C].c();o=k(),a=p("select"),l=p("option"),l.textContent="Rango de Busqueda";for(let C=0;C<j.length;C+=1)j[C].c();c=k(),h=p("select"),f=p("option"),f.textContent="# Rec\xE1maras";for(let C=0;C<R.length;C+=1)R[C].c();d=k(),m=p("select"),_=p("option"),_.textContent="# Ba\xF1os";for(let C=0;C<re.length;C+=1)re[C].c();v=k(),y=p("select"),E=p("option"),E.textContent="# Medios Ba\xF1os";for(let C=0;C<le.length;C+=1)le[C].c();I=k(),O=p("select"),D=p("option"),D.textContent="# Estacionamientos";for(let C=0;C<X.length;C+=1)X[C].c();$=k(),F=p("div"),de(N.$$.fragment),B=k(),de(M.$$.fragment),n.disabled=!0,n.selected=!0,n.__value="",n.value=n.__value,g(e,"class","othersInput svelte-1myljlf"),t[3].modePay===void 0&&xe(()=>t[16].call(e)),r.disabled=!0,r.selected=!0,r.__value="",r.value=r.__value,g(i,"class","othersInput svelte-1myljlf"),g(i,"id","selTP"),g(i,"name","selTP"),t[3].selecTP===void 0&&xe(()=>t[17].call(i)),l.disabled=!0,l.selected=!0,l.__value="",l.value=l.__value,g(a,"class","othersInput svelte-1myljlf"),g(a,"id","ranges"),g(a,"name","ranges"),t[3].rangeProp===void 0&&xe(()=>t[18].call(a)),f.disabled=!0,f.selected=!0,f.__value="",f.value=f.__value,g(h,"class","othersInput svelte-1myljlf"),t[3].numBeds===void 0&&xe(()=>t[19].call(h)),_.disabled=!0,_.selected=!0,_.__value="",_.value=_.__value,g(m,"class","othersInput svelte-1myljlf"),t[3].numBaths===void 0&&xe(()=>t[20].call(m)),E.disabled=!0,E.selected=!0,E.__value="",E.value=E.__value,g(y,"class","othersInput svelte-1myljlf"),t[3].halfBathroom===void 0&&xe(()=>t[21].call(y)),D.disabled=!0,D.selected=!0,D.__value="",D.value=D.__value,g(O,"class","othersInput svelte-1myljlf"),t[3].numParks===void 0&&xe(()=>t[22].call(O)),g(F,"class","ubiTags svelte-1myljlf")},m(C,ve){w(C,e,ve),u(e,n);for(let Ce=0;Ce<G.length;Ce+=1)G[Ce].m(e,null);Ue(e,t[3].modePay),w(C,s,ve),w(C,i,ve),u(i,r);for(let Ce=0;Ce<W.length;Ce+=1)W[Ce].m(i,null);Ue(i,t[3].selecTP),w(C,o,ve),w(C,a,ve),u(a,l);for(let Ce=0;Ce<j.length;Ce+=1)j[Ce].m(a,null);Ue(a,t[3].rangeProp),w(C,c,ve),w(C,h,ve),u(h,f);for(let Ce=0;Ce<R.length;Ce+=1)R[Ce].m(h,null);Ue(h,t[3].numBeds),w(C,d,ve),w(C,m,ve),u(m,_);for(let Ce=0;Ce<re.length;Ce+=1)re[Ce].m(m,null);Ue(m,t[3].numBaths),w(C,v,ve),w(C,y,ve),u(y,E);for(let Ce=0;Ce<le.length;Ce+=1)le[Ce].m(y,null);Ue(y,t[3].halfBathroom),w(C,I,ve),w(C,O,ve),u(O,D);for(let Ce=0;Ce<X.length;Ce+=1)X[Ce].m(O,null);Ue(O,t[3].numParks),w(C,$,ve),w(C,F,ve),ue(N,F,null),u(F,B),ue(M,F,null),z=!0,J||(ie=[V(e,"change",t[16]),V(i,"change",t[17]),V(a,"change",t[18]),V(h,"change",t[19]),V(m,"change",t[20]),V(y,"change",t[21]),V(O,"change",t[22])],J=!0)},p(C,ve){if(ve&0){Q=yf;let x;for(x=0;x<Q.length;x+=1){const Pe=Df(C,Q,x);G[x]?G[x].p(Pe,ve):(G[x]=Bf(Pe),G[x].c(),G[x].m(e,null))}for(;x<G.length;x+=1)G[x].d(1);G.length=Q.length}if(ve[0]&9&&Ue(e,C[3].modePay),ve&0){se=Go;let x;for(x=0;x<se.length;x+=1){const Pe=Af(C,se,x);W[x]?W[x].p(Pe,ve):(W[x]=Vf(Pe),W[x].c(),W[x].m(i,null))}for(;x<W.length;x+=1)W[x].d(1);W.length=se.length}if(ve[0]&9&&Ue(i,C[3].selecTP),ve&0){A=wf;let x;for(x=0;x<A.length;x+=1){const Pe=Sf(C,A,x);j[x]?j[x].p(Pe,ve):(j[x]=jf(Pe),j[x].c(),j[x].m(a,null))}for(;x<j.length;x+=1)j[x].d(1);j.length=A.length}if(ve[0]&9&&Ue(a,C[3].rangeProp),ve&0){L=Wo;let x;for(x=0;x<L.length;x+=1){const Pe=Cf(C,L,x);R[x]?R[x].p(Pe,ve):(R[x]=qf(Pe),R[x].c(),R[x].m(h,null))}for(;x<R.length;x+=1)R[x].d(1);R.length=L.length}if(ve[0]&9&&Ue(h,C[3].numBeds),ve&0){Y=En;let x;for(x=0;x<Y.length;x+=1){const Pe=Tf(C,Y,x);re[x]?re[x].p(Pe,ve):(re[x]=Hf(Pe),re[x].c(),re[x].m(m,null))}for(;x<re.length;x+=1)re[x].d(1);re.length=Y.length}if(ve[0]&9&&Ue(m,C[3].numBaths),ve&0){ke=En;let x;for(x=0;x<ke.length;x+=1){const Pe=If(C,ke,x);le[x]?le[x].p(Pe,ve):(le[x]=Kf(Pe),le[x].c(),le[x].m(y,null))}for(;x<le.length;x+=1)le[x].d(1);le.length=ke.length}if(ve[0]&9&&Ue(y,C[3].halfBathroom),ve&0){He=En;let x;for(x=0;x<He.length;x+=1){const Pe=Ef(C,He,x);X[x]?X[x].p(Pe,ve):(X[x]=zf(Pe),X[x].c(),X[x].m(O,null))}for(;x<X.length;x+=1)X[x].d(1);X.length=He.length}ve[0]&9&&Ue(O,C[3].numParks);const Ce={};!q&&ve[0]&8&&(q=!0,Ce.ubication=C[3].locaProperty,Vs(()=>q=!1)),N.$set(Ce);const rt={};!U&&ve[0]&8&&(U=!0,rt.tag=C[3].tagsProperty,Vs(()=>U=!1)),M.$set(rt)},i(C){z||(K(N.$$.fragment,C),K(M.$$.fragment,C),z=!0)},o(C){Z(N.$$.fragment,C),Z(M.$$.fragment,C),z=!1},d(C){C&&b(e),qe(G,C),C&&b(s),C&&b(i),qe(W,C),C&&b(o),C&&b(a),qe(j,C),C&&b(c),C&&b(h),qe(R,C),C&&b(d),C&&b(m),qe(re,C),C&&b(v),C&&b(y),qe(le,C),C&&b(I),C&&b(O),qe(X,C),C&&b($),C&&b(F),he(N),he(M),J=!1,Xe(ie)}}}function Bf(t){let e,n=t[44]+"",s;return{c(){e=p("option"),s=S(n),g(e,"type","checkbox"),e.__value=t[44],e.value=e.__value},m(i,r){w(i,e,r),u(e,s)},p:fe,d(i){i&&b(e)}}}function Vf(t){let e,n=t[41]+"",s;return{c(){e=p("option"),s=S(n),g(e,"type","checkbox"),e.__value=t[41],e.value=e.__value},m(i,r){w(i,e,r),u(e,s)},p:fe,d(i){i&&b(e)}}}function jf(t){let e,n=t[38]+"",s;return{c(){e=p("option"),s=S(n),g(e,"type","checkbox"),e.__value=t[38],e.value=e.__value},m(i,r){w(i,e,r),u(e,s)},p:fe,d(i){i&&b(e)}}}function qf(t){let e,n=t[35]+"",s,i;return{c(){e=p("option"),s=S(n),i=S(" Rec\xE1maras"),g(e,"type","checkbox"),e.__value=t[35],e.value=e.__value},m(r,o){w(r,e,o),u(e,s),u(e,i)},p:fe,d(r){r&&b(e)}}}function Hf(t){let e,n=t[32]+"",s,i;return{c(){e=p("option"),s=S(n),i=S(" ba\xF1os"),g(e,"type","checkbox"),e.__value=t[32],e.value=e.__value},m(r,o){w(r,e,o),u(e,s),u(e,i)},p:fe,d(r){r&&b(e)}}}function Kf(t){let e,n=t[29]+"",s,i;return{c(){e=p("option"),s=S(n),i=S(" Medios ba\xF1os"),g(e,"type","checkbox"),e.__value=t[29],e.value=e.__value},m(r,o){w(r,e,o),u(e,s),u(e,i)},p:fe,d(r){r&&b(e)}}}function zf(t){let e,n=t[26]+"",s,i;return{c(){e=p("option"),s=S(n),i=S(" Estacionamientos"),g(e,"type","checkbox"),e.__value=t[26],e.value=e.__value},m(r,o){w(r,e,o),u(e,s),u(e,i)},p:fe,d(r){r&&b(e)}}}function VT(t){let e,n,s,i,r,o,a,l,c,h,f,d,m,_,v,y,E,I,O,D,$,F,N,q,B,M,U,z,J,ie,Q,G,se;function W(H,ye){return H[1]?BT:FT}let A=W(t),j=A(t),L=t[2]&&Of(t),R=t[0],Y=[];for(let H=0;H<R.length;H+=1)Y[H]=Lf(Nf(t,R,H));let re=t[2]&&Mf(t),ke=vf,le=[];for(let H=0;H<ke.length;H+=1)le[H]=$f(Rf(t,ke,H));let He=_f,X=[];for(let H=0;H<He.length;H+=1)X[H]=Uf(Pf(t,He,H));let me=t[2]&&Ff(t);return{c(){e=p("h1"),e.textContent="Alta Contactos",n=k(),s=p("div"),i=p("div"),j.c(),r=k(),o=p("div"),a=p("input"),l=k(),c=p("input"),h=k(),f=p("div"),d=p("input"),m=k(),L&&L.c(),_=k(),v=p("div"),y=p("select"),E=p("option"),E.textContent="Propiedad de Contacto";for(let H=0;H<Y.length;H+=1)Y[H].c();I=k(),re&&re.c(),O=k(),D=p("div"),$=p("input"),F=k(),N=p("select"),q=p("option"),q.textContent="Tipo de Contacto";for(let H=0;H<le.length;H+=1)le[H].c();B=k(),M=p("select"),U=p("option"),U.textContent="Modo de Contacto";for(let H=0;H<X.length;H+=1)X[H].c();z=k(),me&&me.c(),J=k(),ie=p("button"),ie.textContent="Alta Detalles",g(e,"class","sectionTitle"),g(a,"class","dataInput svelte-1myljlf"),g(a,"type","text"),g(a,"placeholder","Nombre"),g(c,"class","dataInput svelte-1myljlf"),g(c,"type","text"),g(c,"placeholder","Apellido"),g(o,"class","contactInput"),g(d,"class","dataInput svelte-1myljlf"),g(d,"type","tel"),g(d,"placeholder","tel\xE9fono"),g(f,"class","contactInput"),g(s,"class",""),E.disabled=!0,E.selected=!0,E.__value="",E.value=E.__value,g(y,"class","dataInput svelte-1myljlf"),g(y,"id","selTP"),g(y,"name","selTP"),t[3].propCont===void 0&&xe(()=>t[11].call(y)),g(v,"class","col"),g($,"class","textareaInput svelte-1myljlf"),g($,"type","textarea"),g($,"placeholder","Comentarios"),g(D,"class","col"),q.disabled=!0,q.selected=!0,q.__value="",q.value=q.__value,g(N,"class","othersInput svelte-1myljlf"),t[3].typeContact===void 0&&xe(()=>t[14].call(N)),U.disabled=!0,U.selected=!0,U.__value="",U.value=U.__value,g(M,"class","othersInput svelte-1myljlf"),t[3].selecMC===void 0&&xe(()=>t[15].call(M)),g(ie,"class","btn__save")},m(H,ye){w(H,e,ye),w(H,n,ye),w(H,s,ye),u(s,i),j.m(i,null),u(s,r),u(s,o),u(o,a),ge(a,t[3].name),u(o,l),u(o,c),ge(c,t[3].lastname),u(s,h),u(s,f),u(f,d),ge(d,t[3].telephon),u(f,m),L&&L.m(f,null),w(H,_,ye),w(H,v,ye),u(v,y),u(y,E);for(let P=0;P<Y.length;P+=1)Y[P].m(y,null);Ue(y,t[3].propCont),u(v,I),re&&re.m(v,null),w(H,O,ye),w(H,D,ye),u(D,$),ge($,t[3].comContact),w(H,F,ye),w(H,N,ye),u(N,q);for(let P=0;P<le.length;P+=1)le[P].m(N,null);Ue(N,t[3].typeContact),w(H,B,ye),w(H,M,ye),u(M,U);for(let P=0;P<X.length;P+=1)X[P].m(M,null);Ue(M,t[3].selecMC),w(H,z,ye),me&&me.m(H,ye),w(H,J,ye),w(H,ie,ye),Q=!0,G||(se=[V(a,"input",t[7]),V(c,"input",t[8]),V(d,"input",t[9]),V(y,"change",t[11]),V($,"input",t[13]),V(N,"change",t[14]),V(M,"change",t[15]),V(ie,"click",t[5])],G=!0)},p(H,ye){if(A===(A=W(H))&&j?j.p(H,ye):(j.d(1),j=A(H),j&&(j.c(),j.m(i,null))),ye[0]&9&&a.value!==H[3].name&&ge(a,H[3].name),ye[0]&9&&c.value!==H[3].lastname&&ge(c,H[3].lastname),ye[0]&9&&ge(d,H[3].telephon),H[2]?L?L.p(H,ye):(L=Of(H),L.c(),L.m(f,null)):L&&(L.d(1),L=null),ye[0]&1){R=H[0];let P;for(P=0;P<R.length;P+=1){const C=Nf(H,R,P);Y[P]?Y[P].p(C,ye):(Y[P]=Lf(C),Y[P].c(),Y[P].m(y,null))}for(;P<Y.length;P+=1)Y[P].d(1);Y.length=R.length}if(ye[0]&9&&Ue(y,H[3].propCont),H[2]?re?re.p(H,ye):(re=Mf(H),re.c(),re.m(v,null)):re&&(re.d(1),re=null),ye[0]&9&&ge($,H[3].comContact),ye&0){ke=vf;let P;for(P=0;P<ke.length;P+=1){const C=Rf(H,ke,P);le[P]?le[P].p(C,ye):(le[P]=$f(C),le[P].c(),le[P].m(N,null))}for(;P<le.length;P+=1)le[P].d(1);le.length=ke.length}if(ye[0]&9&&Ue(N,H[3].typeContact),ye&0){He=_f;let P;for(P=0;P<He.length;P+=1){const C=Pf(H,He,P);X[P]?X[P].p(C,ye):(X[P]=Uf(C),X[P].c(),X[P].m(M,null))}for(;P<X.length;P+=1)X[P].d(1);X.length=He.length}ye[0]&9&&Ue(M,H[3].selecMC),H[2]?me?(me.p(H,ye),ye[0]&4&&K(me,1)):(me=Ff(H),me.c(),K(me,1),me.m(J.parentNode,J)):me&&(bt(),Z(me,1,1,()=>{me=null}),wt())},i(H){Q||(K(me),Q=!0)},o(H){Z(me),Q=!1},d(H){H&&b(e),H&&b(n),H&&b(s),j.d(),L&&L.d(),H&&b(_),H&&b(v),qe(Y,H),re&&re.d(),H&&b(O),H&&b(D),H&&b(F),H&&b(N),qe(le,H),H&&b(B),H&&b(M),qe(X,H),H&&b(z),me&&me.d(H),H&&b(J),H&&b(ie),G=!1,Xe(se)}}}function jT(t,e,n){let s;Oe(t,Je,J=>n(3,s=J));var i=[];let r=Fn,o=!1,a=!1;(()=>{for(let J of r){let ie=`${J.nameProperty} - ${(J.price/1e6).toFixed(2)} (${J.claveEB.slice(-2)})`;n(0,i=[...i,ie])}return n(0,i=i.sort())})();function l(){n(1,o=!0)}function c(){n(2,a=!0)}function h(){s.createdAt=this.value,Je.set(s),n(0,i)}function f(){s.name=this.value,Je.set(s),n(0,i)}function d(){s.lastname=this.value,Je.set(s),n(0,i)}function m(){s.telephon=this.value,Je.set(s),n(0,i)}function _(){s.email=this.value,Je.set(s),n(0,i)}function v(){s.propCont=Ut(this),Je.set(s),n(0,i)}function y(){s.budget=ms(this.value),Je.set(s),n(0,i)}function E(){s.comContact=this.value,Je.set(s),n(0,i)}function I(){s.typeContact=Ut(this),Je.set(s),n(0,i)}function O(){s.selecMC=Ut(this),Je.set(s),n(0,i)}function D(){s.modePay=Ut(this),Je.set(s),n(0,i)}function $(){s.selecTP=Ut(this),Je.set(s),n(0,i)}function F(){s.rangeProp=Ut(this),Je.set(s),n(0,i)}function N(){s.numBeds=Ut(this),Je.set(s),n(0,i)}function q(){s.numBaths=Ut(this),Je.set(s),n(0,i)}function B(){s.halfBathroom=Ut(this),Je.set(s),n(0,i)}function M(){s.numParks=Ut(this),Je.set(s),n(0,i)}function U(J){t.$$.not_equal(s.locaProperty,J)&&(s.locaProperty=J,Je.set(s))}function z(J){t.$$.not_equal(s.tagsProperty,J)&&(s.tagsProperty=J,Je.set(s))}return[i,o,a,s,l,c,h,f,d,m,_,v,y,E,I,O,D,$,F,N,q,B,M,U,z]}class qT extends Qe{constructor(e){super(),We(this,e,jT,VT,ze,{},null,[-1,-1])}}function Gf(t,e,n){const s=t.slice();return s[24]=e[n],s}function Wf(t,e,n){const s=t.slice();return s[27]=e[n],s}function Qf(t,e,n){const s=t.slice();return s[30]=e[n],s}function Yf(t,e,n){const s=t.slice();return s[33]=e[n],s}function Xf(t,e,n){const s=t.slice();return s[36]=e[n],s}function xf(t,e,n){const s=t.slice();return s[39]=e[n],s}function Jf(t,e,n){const s=t.slice();return s[42]=e[n],s}function HT(t){let e,n=Ct(t[1].createdAt)+"",s,i,r;return{c(){e=p("h3"),s=S(n),g(e,"class","dataInput")},m(o,a){w(o,e,a),u(e,s),i||(r=V(e,"dblclick",t[3]),i=!0)},p(o,a){a[0]&2&&n!==(n=Ct(o[1].createdAt)+"")&&ae(s,n)},d(o){o&&b(e),i=!1,r()}}}function KT(t){let e,n,s;return{c(){e=p("input"),g(e,"class","dataInput"),g(e,"type","date")},m(i,r){w(i,e,r),ge(e,t[1].createdAt),n||(s=V(e,"input",t[4]),n=!0)},p(i,r){r[0]&2&&ge(e,i[1].createdAt)},d(i){i&&b(e),n=!1,s()}}}function Zf(t){let e,n=t[42]+"",s;return{c(){e=p("option"),s=S(n),g(e,"type","checkbox"),e.__value=t[42],e.value=e.__value},m(i,r){w(i,e,r),u(e,s)},p:fe,d(i){i&&b(e)}}}function ed(t){let e,n=t[39]+"",s,i;return{c(){e=p("option"),s=S(n),i=k(),g(e,"type","checkbox"),e.__value=t[39],e.value=e.__value},m(r,o){w(r,e,o),u(e,s),u(e,i)},p:fe,d(r){r&&b(e)}}}function td(t){let e,n=t[36]+"",s,i;return{c(){e=p("option"),s=S(n),i=S(" Rec\xE1maras"),g(e,"type","checkbox"),e.__value=t[36],e.value=e.__value},m(r,o){w(r,e,o),u(e,s),u(e,i)},p:fe,d(r){r&&b(e)}}}function nd(t){let e,n=t[33]+"",s,i;return{c(){e=p("option"),s=S(n),i=S(" ba\xF1os"),g(e,"type","checkbox"),e.__value=t[33],e.value=e.__value},m(r,o){w(r,e,o),u(e,s),u(e,i)},p:fe,d(r){r&&b(e)}}}function sd(t){let e,n=t[30]+"",s,i;return{c(){e=p("option"),s=S(n),i=S(" Medios ba\xF1os"),g(e,"type","checkbox"),e.__value=t[30],e.value=e.__value},m(r,o){w(r,e,o),u(e,s),u(e,i)},p:fe,d(r){r&&b(e)}}}function id(t){let e,n=t[27]+"",s,i;return{c(){e=p("option"),s=S(n),i=S(" Estacionamientos"),g(e,"type","checkbox"),e.__value=t[27],e.value=e.__value},m(r,o){w(r,e,o),u(e,s),u(e,i)},p:fe,d(r){r&&b(e)}}}function rd(t){let e,n=t[24]+"",s;return{c(){e=p("option"),s=S(n),g(e,"type","checkbox"),e.__value=t[24],e.value=e.__value},m(i,r){w(i,e,r),u(e,s)},p:fe,d(i){i&&b(e)}}}function zT(t){let e,n,s,i,r,o,a,l,c,h,f,d,m,_,v,y,E,I,O,D,$,F,N,q,B,M,U,z,J,ie,Q,G,se,W,A,j,L,R,Y,re,ke,le,He,X,me,H,ye,P,C,ve,Ce,rt,x,Pe,bn,St,At,nn,xt,Mt,Ht,ht,pn,ot,ft,sn,lt,jn,rn,dt,Sn,An,on,Dn;function Pn(T,oe){if(T[0])return KT;if(T[2]==="propEditing")return HT}let Jt=Pn(t),Be=Jt&&Jt(t),Zt=Go,Ve=[];for(let T=0;T<Zt.length;T+=1)Ve[T]=Zf(Jf(t,Zt,T));let De=bf,Se=[];for(let T=0;T<De.length;T+=1)Se[T]=ed(xf(t,De,T));let qn=Wo,pt=[];for(let T=0;T<qn.length;T+=1)pt[T]=td(Xf(t,qn,T));let Hn=En,$t=[];for(let T=0;T<Hn.length;T+=1)$t[T]=nd(Yf(t,Hn,T));let Rn=En,mt=[];for(let T=0;T<Rn.length;T+=1)mt[T]=sd(Qf(t,Rn,T));let Kn=En,gt=[];for(let T=0;T<Kn.length;T+=1)gt[T]=id(Wf(t,Kn,T));let wn=kf,nt=[];for(let T=0;T<wn.length;T+=1)nt[T]=rd(Gf(t,wn,T));function Qr(T){t[22](T)}let as={};t[1].locaProperty!==void 0&&(as.ubication=t[1].locaProperty),lt=new V_({props:as}),Jn.push(()=>js(lt,"ubication",Qr));function Rs(T){t[23](T)}let Ni={};return t[1].tagsProperty!==void 0&&(Ni.tag=t[1].tagsProperty),dt=new j_({props:Ni}),Jn.push(()=>js(dt,"tag",Rs)),{c(){e=p("div"),Be&&Be.c(),n=k(),s=p("select"),i=p("option"),i.textContent="Tipo de Propiedad";for(let T=0;T<Ve.length;T+=1)Ve[T].c();r=k(),o=p("label"),o.innerHTML=`Titulo
       <input type="text"/>`,a=k(),l=p("label"),c=S(`Colonia\r
        `),h=p("input"),f=k(),d=p("label"),m=S(`Nombre de la Propiead\r
        `),_=p("input"),v=k(),y=p("label"),E=S(`Clave EB\r
        `),I=p("input"),O=k(),D=p("label"),$=S(`Clave MH\r
        `),F=p("input"),N=k(),q=p("div"),B=p("textarea"),M=k(),U=p("select"),z=p("option"),z.textContent="Tipo de Operaci\xF3n";for(let T=0;T<Se.length;T+=1)Se[T].c();J=k(),ie=p("select"),Q=p("option"),Q.textContent="# Rec\xE1maras";for(let T=0;T<pt.length;T+=1)pt[T].c();G=k(),se=p("select"),W=p("option"),W.textContent="# Ba\xF1os";for(let T=0;T<$t.length;T+=1)$t[T].c();A=k(),j=p("select"),L=p("option"),L.textContent="# Medios Ba\xF1os";for(let T=0;T<mt.length;T+=1)mt[T].c();R=k(),Y=p("select"),re=p("option"),re.textContent="# Estacionamientos";for(let T=0;T<gt.length;T+=1)gt[T].c();ke=k(),le=p("label"),He=S(`Area de Construcci\xF3n\r
            `),X=p("input"),me=k(),H=p("label"),ye=S(`Area de Terreno\r
            `),P=p("input"),C=k(),ve=p("label"),Ce=S(`Precio\r
            `),rt=p("input"),x=k(),Pe=p("label"),bn=S(`Link Imgen\r
        `),St=p("input"),At=k(),nn=p("label"),xt=S(`Link de la Propiedad\r
        `),Mt=p("input"),Ht=k(),ht=p("label"),ht.innerHTML=`Propietario
            <input type="text"/>`,pn=k(),ot=p("select"),ft=p("option"),ft.textContent="Tipo de Encargado";for(let T=0;T<nt.length;T+=1)nt[T].c();sn=k(),de(lt.$$.fragment),rn=k(),de(dt.$$.fragment),i.disabled=!0,i.selected=!0,i.__value="",i.value=i.__value,g(s,"class","selTP"),g(s,"id","selTP"),g(s,"name","selTP"),t[1].selecTP===void 0&&xe(()=>t[5].call(s)),g(h,"type","text"),g(_,"type","text"),g(I,"type","text"),g(F,"type","text"),g(B,"placeholder","Comentarios"),g(B,"cols","65"),g(B,"rows","5"),g(B,"class","form-control"),g(q,"class","col"),z.disabled=!0,z.selected=!0,z.__value="",z.value=z.__value,t[1].typeOperation===void 0&&xe(()=>t[11].call(U)),Q.disabled=!0,Q.selected=!0,Q.__value="",Q.value=Q.__value,t[1].beds===void 0&&xe(()=>t[12].call(ie)),W.disabled=!0,W.selected=!0,W.__value="",W.value=W.__value,t[1].bathroom===void 0&&xe(()=>t[13].call(se)),L.disabled=!0,L.selected=!0,L.__value="",L.value=L.__value,t[1].halfBathroom===void 0&&xe(()=>t[14].call(j)),re.disabled=!0,re.selected=!0,re.__value="",re.value=re.__value,t[1].park===void 0&&xe(()=>t[15].call(Y)),g(X,"type","number"),g(P,"type","number"),g(rt,"type","number"),g(St,"type","text"),g(Mt,"type","text"),ft.disabled=!0,ft.selected=!0,ft.__value="",ft.value=ft.__value,g(ot,"name","typeSaller"),t[1].typeSaller===void 0&&xe(()=>t[21].call(ot))},m(T,oe){w(T,e,oe),Be&&Be.m(e,null),w(T,n,oe),w(T,s,oe),u(s,i);for(let Ne=0;Ne<Ve.length;Ne+=1)Ve[Ne].m(s,null);Ue(s,t[1].selecTP),w(T,r,oe),w(T,o,oe),w(T,a,oe),w(T,l,oe),u(l,c),u(l,h),ge(h,t[1].colonia),w(T,f,oe),w(T,d,oe),u(d,m),u(d,_),ge(_,t[1].nameProperty),w(T,v,oe),w(T,y,oe),u(y,E),u(y,I),ge(I,t[1].claveEB),w(T,O,oe),w(T,D,oe),u(D,$),u(D,F),ge(F,t[1].claveMH),w(T,N,oe),w(T,q,oe),u(q,B),ge(B,t[1].description),w(T,M,oe),w(T,U,oe),u(U,z);for(let Ne=0;Ne<Se.length;Ne+=1)Se[Ne].m(U,null);Ue(U,t[1].typeOperation),w(T,J,oe),w(T,ie,oe),u(ie,Q);for(let Ne=0;Ne<pt.length;Ne+=1)pt[Ne].m(ie,null);Ue(ie,t[1].beds),w(T,G,oe),w(T,se,oe),u(se,W);for(let Ne=0;Ne<$t.length;Ne+=1)$t[Ne].m(se,null);Ue(se,t[1].bathroom),w(T,A,oe),w(T,j,oe),u(j,L);for(let Ne=0;Ne<mt.length;Ne+=1)mt[Ne].m(j,null);Ue(j,t[1].halfBathroom),w(T,R,oe),w(T,Y,oe),u(Y,re);for(let Ne=0;Ne<gt.length;Ne+=1)gt[Ne].m(Y,null);Ue(Y,t[1].park),w(T,ke,oe),w(T,le,oe),u(le,He),u(le,X),ge(X,t[1].areaBuilding),w(T,me,oe),w(T,H,oe),u(H,ye),u(H,P),ge(P,t[1].areaTotal),w(T,C,oe),w(T,ve,oe),u(ve,Ce),u(ve,rt),ge(rt,t[1].price),w(T,x,oe),w(T,Pe,oe),u(Pe,bn),u(Pe,St),ge(St,t[1].urlImage),w(T,At,oe),w(T,nn,oe),u(nn,xt),u(nn,Mt),ge(Mt,t[1].urlProp),w(T,Ht,oe),w(T,ht,oe),w(T,pn,oe),w(T,ot,oe),u(ot,ft);for(let Ne=0;Ne<nt.length;Ne+=1)nt[Ne].m(ot,null);Ue(ot,t[1].typeSaller),w(T,sn,oe),ue(lt,T,oe),w(T,rn,oe),ue(dt,T,oe),An=!0,on||(Dn=[V(s,"change",t[5]),V(h,"input",t[6]),V(_,"input",t[7]),V(I,"input",t[8]),V(F,"input",t[9]),V(B,"input",t[10]),V(U,"change",t[11]),V(ie,"change",t[12]),V(se,"change",t[13]),V(j,"change",t[14]),V(Y,"change",t[15]),V(X,"input",t[16]),V(P,"input",t[17]),V(rt,"input",t[18]),V(St,"input",t[19]),V(Mt,"input",t[20]),V(ot,"change",t[21])],on=!0)},p(T,oe){if(Jt===(Jt=Pn(T))&&Be?Be.p(T,oe):(Be&&Be.d(1),Be=Jt&&Jt(T),Be&&(Be.c(),Be.m(e,null))),oe&0){Zt=Go;let ee;for(ee=0;ee<Zt.length;ee+=1){const at=Jf(T,Zt,ee);Ve[ee]?Ve[ee].p(at,oe):(Ve[ee]=Zf(at),Ve[ee].c(),Ve[ee].m(s,null))}for(;ee<Ve.length;ee+=1)Ve[ee].d(1);Ve.length=Zt.length}if(oe[0]&2&&Ue(s,T[1].selecTP),oe[0]&2&&h.value!==T[1].colonia&&ge(h,T[1].colonia),oe[0]&2&&_.value!==T[1].nameProperty&&ge(_,T[1].nameProperty),oe[0]&2&&I.value!==T[1].claveEB&&ge(I,T[1].claveEB),oe[0]&2&&F.value!==T[1].claveMH&&ge(F,T[1].claveMH),oe[0]&2&&ge(B,T[1].description),oe&0){De=bf;let ee;for(ee=0;ee<De.length;ee+=1){const at=xf(T,De,ee);Se[ee]?Se[ee].p(at,oe):(Se[ee]=ed(at),Se[ee].c(),Se[ee].m(U,null))}for(;ee<Se.length;ee+=1)Se[ee].d(1);Se.length=De.length}if(oe[0]&2&&Ue(U,T[1].typeOperation),oe&0){qn=Wo;let ee;for(ee=0;ee<qn.length;ee+=1){const at=Xf(T,qn,ee);pt[ee]?pt[ee].p(at,oe):(pt[ee]=td(at),pt[ee].c(),pt[ee].m(ie,null))}for(;ee<pt.length;ee+=1)pt[ee].d(1);pt.length=qn.length}if(oe[0]&2&&Ue(ie,T[1].beds),oe&0){Hn=En;let ee;for(ee=0;ee<Hn.length;ee+=1){const at=Yf(T,Hn,ee);$t[ee]?$t[ee].p(at,oe):($t[ee]=nd(at),$t[ee].c(),$t[ee].m(se,null))}for(;ee<$t.length;ee+=1)$t[ee].d(1);$t.length=Hn.length}if(oe[0]&2&&Ue(se,T[1].bathroom),oe&0){Rn=En;let ee;for(ee=0;ee<Rn.length;ee+=1){const at=Qf(T,Rn,ee);mt[ee]?mt[ee].p(at,oe):(mt[ee]=sd(at),mt[ee].c(),mt[ee].m(j,null))}for(;ee<mt.length;ee+=1)mt[ee].d(1);mt.length=Rn.length}if(oe[0]&2&&Ue(j,T[1].halfBathroom),oe&0){Kn=En;let ee;for(ee=0;ee<Kn.length;ee+=1){const at=Wf(T,Kn,ee);gt[ee]?gt[ee].p(at,oe):(gt[ee]=id(at),gt[ee].c(),gt[ee].m(Y,null))}for(;ee<gt.length;ee+=1)gt[ee].d(1);gt.length=Kn.length}if(oe[0]&2&&Ue(Y,T[1].park),oe[0]&2&&ms(X.value)!==T[1].areaBuilding&&ge(X,T[1].areaBuilding),oe[0]&2&&ms(P.value)!==T[1].areaTotal&&ge(P,T[1].areaTotal),oe[0]&2&&ms(rt.value)!==T[1].price&&ge(rt,T[1].price),oe[0]&2&&St.value!==T[1].urlImage&&ge(St,T[1].urlImage),oe[0]&2&&Mt.value!==T[1].urlProp&&ge(Mt,T[1].urlProp),oe&0){wn=kf;let ee;for(ee=0;ee<wn.length;ee+=1){const at=Gf(T,wn,ee);nt[ee]?nt[ee].p(at,oe):(nt[ee]=rd(at),nt[ee].c(),nt[ee].m(ot,null))}for(;ee<nt.length;ee+=1)nt[ee].d(1);nt.length=wn.length}oe[0]&2&&Ue(ot,T[1].typeSaller);const Ne={};!jn&&oe[0]&2&&(jn=!0,Ne.ubication=T[1].locaProperty,Vs(()=>jn=!1)),lt.$set(Ne);const zn={};!Sn&&oe[0]&2&&(Sn=!0,zn.tag=T[1].tagsProperty,Vs(()=>Sn=!1)),dt.$set(zn)},i(T){An||(K(lt.$$.fragment,T),K(dt.$$.fragment,T),An=!0)},o(T){Z(lt.$$.fragment,T),Z(dt.$$.fragment,T),An=!1},d(T){T&&b(e),Be&&Be.d(),T&&b(n),T&&b(s),qe(Ve,T),T&&b(r),T&&b(o),T&&b(a),T&&b(l),T&&b(f),T&&b(d),T&&b(v),T&&b(y),T&&b(O),T&&b(D),T&&b(N),T&&b(q),T&&b(M),T&&b(U),qe(Se,T),T&&b(J),T&&b(ie),qe(pt,T),T&&b(G),T&&b(se),qe($t,T),T&&b(A),T&&b(j),qe(mt,T),T&&b(R),T&&b(Y),qe(gt,T),T&&b(ke),T&&b(le),T&&b(me),T&&b(H),T&&b(C),T&&b(ve),T&&b(x),T&&b(Pe),T&&b(At),T&&b(nn),T&&b(Ht),T&&b(ht),T&&b(pn),T&&b(ot),qe(nt,T),T&&b(sn),he(lt,T),T&&b(rn),he(dt,T),on=!1,Xe(Dn)}}}function GT(t,e,n){let s,i;Oe(t,Ye,U=>n(1,s=U)),Oe(t,Ze,U=>n(2,i=U));let r=!1;function o(){n(0,r=!0)}function a(){s.createdAt=this.value,Ye.set(s)}function l(){s.selecTP=Ut(this),Ye.set(s)}function c(){s.colonia=this.value,Ye.set(s)}function h(){s.nameProperty=this.value,Ye.set(s)}function f(){s.claveEB=this.value,Ye.set(s)}function d(){s.claveMH=this.value,Ye.set(s)}function m(){s.description=this.value,Ye.set(s)}function _(){s.typeOperation=Ut(this),Ye.set(s)}function v(){s.beds=Ut(this),Ye.set(s)}function y(){s.bathroom=Ut(this),Ye.set(s)}function E(){s.halfBathroom=Ut(this),Ye.set(s)}function I(){s.park=Ut(this),Ye.set(s)}function O(){s.areaBuilding=ms(this.value),Ye.set(s)}function D(){s.areaTotal=ms(this.value),Ye.set(s)}function $(){s.price=ms(this.value),Ye.set(s)}function F(){s.urlImage=this.value,Ye.set(s)}function N(){s.urlProp=this.value,Ye.set(s)}function q(){s.typeSaller=Ut(this),Ye.set(s)}function B(U){t.$$.not_equal(s.locaProperty,U)&&(s.locaProperty=U,Ye.set(s))}function M(U){t.$$.not_equal(s.tagsProperty,U)&&(s.tagsProperty=U,Ye.set(s))}return[r,s,i,o,a,l,c,h,f,d,m,_,v,y,E,I,O,D,$,F,N,q,B,M]}class WT extends Qe{constructor(e){super(),We(this,e,GT,zT,ze,{},null,[-1,-1])}}function QT(t){let e;return{c(){e=S("Editar")},m(n,s){w(n,e,s)},d(n){n&&b(e)}}}function YT(t){let e;return{c(){e=S("Guardar")},m(n,s){w(n,e,s)},d(n){n&&b(e)}}}function XT(t){let e,n,s,i,r,o,a,l,c,h;n=new qT({});function f(_,v){return _[0]?QT:YT}let d=f(t),m=d(t);return{c(){e=p("div"),de(n.$$.fragment),s=k(),i=p("div"),r=p("button"),m.c(),o=k(),a=p("button"),a.textContent="Cancel",g(r,"class","btn__save"),g(a,"class","btn__cancel"),g(i,"class","contSavCan svelte-1at07r"),g(e,"class","altaContactos")},m(_,v){w(_,e,v),ue(n,e,null),u(e,s),u(e,i),u(i,r),m.m(r,null),u(i,o),u(i,a),l=!0,c||(h=[V(r,"click",t[4]),V(a,"click",t[3])],c=!0)},p(_,[v]){d!==(d=f(_))&&(m.d(1),m=d(_),m&&(m.c(),m.m(r,null)))},i(_){l||(K(n.$$.fragment,_),l=!0)},o(_){Z(n.$$.fragment,_),l=!1},d(_){_&&b(e),he(n),m.d(),c=!1,Xe(h)}}}function xT(t,e,n){let s,i;Oe(t,Ze,f=>n(6,s=f)),Oe(t,Je,f=>n(1,i=f));let r=!1,o;async function a(f){if(s!="contEditing"){o=Date.now(),f={...f,createdAt:o};const d=gn(ut,"contacts");await ws(d,f),Le(Ze,s="binnAdding",s),l(s,f)}else await Ta(is(ut,"contacts",f.id),f),l(s,f),n(0,r=!1);f=[],Le(Ze,s="contSelect",s)}async function l(f,d){try{if(f==="binnAdding"){let m=`Se le agreg\xF3 a: ${d.name} ${d.lastname} del ${d.telephon}`,_={date:Date.now(),comment:m};console.log(f,_);const v=gn(ut,"binnacles");await ws(v,_)}else{let m=`Se le edit\xF3 a: ${d.name} ${d.lastname} del ${d.telephon}`,_={date:Date.now(),comment:m};console.log(f,_);const v=gn(ut,"binnacles");await ws(v,_)}}catch(m){console.log("error",m)}}function c(){n(0,r=!0),location.href="/"}return[r,i,a,c,()=>a(i)]}class JT extends Qe{constructor(e){super(),We(this,e,xT,XT,ze,{})}}function od(t,e,n){const s=t.slice();return s[12]=e[n],s}function ad(t,e,n){const s=t.slice();return s[52]=e[n],s}function ld(t,e,n){const s=t.slice();return s[55]=e[n],s}function cd(t){let e,n,s,i,r,o=t[9].name+"",a,l,c=t[9].lastname+"",h,f,d,m,_=Ct(t[9].createdAt)+"",v,y,E,I,O=t[9].selecTP+"",D,$,F=t[9].numBeds+"",N,q,B=t[9].numBaths+"",M,U,z=t[9].numParks+"",J,ie,Q,G,se,W,A=t[9].budget+"",j,L,R,Y=t[9].selecTP+"",re,ke,le,He,X,me=t[9].telephon+"",H,ye,P,C=t[9].email+"",ve,Ce,rt,x,Pe=t[9].tagsProperty.join(",  ")+"",bn,St,At,nn,xt=t[9].locaProperty.join(",  ")+"",Mt,Ht,ht,pn,ot,ft,sn,lt,jn,rn,dt=t[9].contactStage+"",Sn,An,on,Dn=t[9].comContact+"",Pn,Jt,Be,Zt,Ve,De,Se,qn,pt,Hn,$t,Rn,mt,Kn,gt,wn,nt,Qr,as,Rs,Ni,T,oe,Ne,zn,ee,at,ei,fu,du,Yr,Ra,Oi,kt,Na,pu,ti=t[9].sendedProperties,an=[];for(let ce=0;ce<ti.length;ce+=1)an[ce]=ud(ld(t,ti,ce));let ln=t[0]&&hd(t),Dt=t[2]&&fd(t),Pt=t[7]&&dd(t),ni=t[8],cn=[];for(let ce=0;ce<ni.length;ce+=1)cn[ce]=pd(ad(t,ni,ce));let Rt=t[6]&&md(t);return{c(){e=p("div"),n=p("div"),s=p("h4"),s.textContent="Contacto",i=k(),r=p("h2"),a=S(o),l=k(),h=S(c),f=k(),d=p("p"),m=S("Fecha Alta: "),v=S(_),y=k(),E=p("p"),I=S("Busca  "),D=S(O),$=S(", de "),N=S(F),q=S(" rec\xE1maras,  "),M=S(B),U=S(" ba\xF1os y "),J=S(z),ie=S(" estacionamientos"),Q=k(),G=p("p"),se=S("Presupuesto tope: "),W=p("strong"),j=S(A),L=S(" : Tipo de propiedad buscada: "),R=p("strong"),re=S(Y),ke=k(),le=p("p"),He=S("Tel\xE9fono: "),X=p("strong"),H=S(me),ye=S(" ---- Email: "),P=p("strong"),ve=S(C),Ce=k(),rt=p("p"),x=S("Preferencias: "),bn=S(Pe),St=k(),At=p("p"),nn=S("Ubicaciones: "),Mt=S(xt),Ht=k(),ht=p("div"),pn=p("p"),pn.textContent="Propiedades enviadas:",ot=k(),ft=p("div");for(let ce=0;ce<an.length;ce+=1)an[ce].c();sn=k(),lt=p("div"),ln&&ln.c(),jn=k(),rn=p("p"),Sn=S(dt),An=k(),on=p("p"),Pn=S(Dn),Jt=k(),Be=p("div"),Zt=p("button"),Zt.textContent="Programar Evento",Ve=k(),Dt&&Dt.c(),De=k(),Se=p("button"),Se.textContent="Ver Propiedades de Interes",qn=k(),pt=p("button"),pt.textContent="Buscar Propiedad",Hn=k(),Pt&&Pt.c(),$t=k(),Rn=p("div"),mt=p("button"),mt.textContent="Cancelar",Kn=k(),gt=p("div"),wn=p("div"),nt=p("textarea"),Qr=k(),as=p("div"),Rs=p("button"),Rs.textContent="Enviar WhatsApp",Ni=k(),T=p("button"),T.textContent="Guardar Info",oe=k(),Ne=p("div"),zn=p("img"),at=k(),ei=p("img"),du=k(),Yr=p("div");for(let ce=0;ce<cn.length;ce+=1)cn[ce].c();Ra=k(),Rt&&Rt.c(),Oi=tn(),g(ft,"class","mostImage svelte-ce274g"),g(ht,"class","propMost"),g(Zt,"class","btnCommon"),g(Se,"class","btnCommon"),g(pt,"class","btnCommon"),g(mt,"class","btn__cancel"),g(nt,"class","texArea"),g(nt,"cols","65"),g(nt,"rows","5"),g(nt,"placeholder","Ingresa un comentario"),g(Rs,"class","btnCommon btnWhatsApp"),g(T,"class","btnCommon"),et(zn.src,ee=Pa)||g(zn,"src",ee),g(zn,"alt","delete"),et(ei.src,fu=B_)||g(ei,"src",fu),g(ei,"alt","delete"),g(Ne,"class","icon__Content"),g(e,"class","container")},m(ce,je){w(ce,e,je),u(e,n),u(n,s),u(n,i),u(n,r),u(r,a),u(r,l),u(r,h),u(n,f),u(n,d),u(d,m),u(d,v),u(n,y),u(n,E),u(E,I),u(E,D),u(E,$),u(E,N),u(E,q),u(E,M),u(E,U),u(E,J),u(E,ie),u(n,Q),u(n,G),u(G,se),u(G,W),u(W,j),u(G,L),u(G,R),u(R,re),u(n,ke),u(n,le),u(le,He),u(le,X),u(X,H),u(le,ye),u(le,P),u(P,ve),u(n,Ce),u(n,rt),u(rt,x),u(rt,bn),u(n,St),u(n,At),u(At,nn),u(At,Mt),u(n,Ht),u(n,ht),u(ht,pn),u(ht,ot),u(ht,ft);for(let Fe=0;Fe<an.length;Fe+=1)an[Fe].m(ft,null);u(e,sn),u(e,lt),ln&&ln.m(lt,null),u(e,jn),u(e,rn),u(rn,Sn),u(e,An),u(e,on),u(on,Pn),u(e,Jt),u(e,Be),u(Be,Zt),u(Be,Ve),Dt&&Dt.m(Be,null),u(Be,De),u(Be,Se),u(Be,qn),u(Be,pt),u(Be,Hn),Pt&&Pt.m(Be,null),u(e,$t),u(e,Rn),u(Rn,mt),u(e,Kn),u(e,gt),u(gt,wn),u(wn,nt),ge(nt,t[4]),u(wn,Qr),u(wn,as),u(as,Rs),u(as,Ni),u(as,T),u(gt,oe),u(gt,Ne),u(Ne,zn),u(Ne,at),u(Ne,ei),u(e,du),u(e,Yr);for(let Fe=0;Fe<cn.length;Fe+=1)cn[Fe].m(Yr,null);w(ce,Ra,je),Rt&&Rt.m(ce,je),w(ce,Oi,je),kt=!0,Na||(pu=[V(Zt,"click",t[29]),V(Se,"click",t[30]),V(pt,"click",t[16]),V(mt,"click",t[19]),V(nt,"keypress",t[25]),V(nt,"input",t[32]),V(Rs,"click",t[24]),V(T,"click",t[33]),V(zn,"click",t[20]),V(ei,"click",t[21])],Na=!0)},p(ce,je){if((!kt||je[0]&512)&&o!==(o=ce[9].name+"")&&ae(a,o),(!kt||je[0]&512)&&c!==(c=ce[9].lastname+"")&&ae(h,c),(!kt||je[0]&512)&&_!==(_=Ct(ce[9].createdAt)+"")&&ae(v,_),(!kt||je[0]&512)&&O!==(O=ce[9].selecTP+"")&&ae(D,O),(!kt||je[0]&512)&&F!==(F=ce[9].numBeds+"")&&ae(N,F),(!kt||je[0]&512)&&B!==(B=ce[9].numBaths+"")&&ae(M,B),(!kt||je[0]&512)&&z!==(z=ce[9].numParks+"")&&ae(J,z),(!kt||je[0]&512)&&A!==(A=ce[9].budget+"")&&ae(j,A),(!kt||je[0]&512)&&Y!==(Y=ce[9].selecTP+"")&&ae(re,Y),(!kt||je[0]&512)&&me!==(me=ce[9].telephon+"")&&ae(H,me),(!kt||je[0]&512)&&C!==(C=ce[9].email+"")&&ae(ve,C),(!kt||je[0]&512)&&Pe!==(Pe=ce[9].tagsProperty.join(",  ")+"")&&ae(bn,Pe),(!kt||je[0]&512)&&xt!==(xt=ce[9].locaProperty.join(",  ")+"")&&ae(Mt,xt),je[0]&25090){ti=ce[9].sendedProperties;let Fe;for(Fe=0;Fe<ti.length;Fe+=1){const Li=ld(ce,ti,Fe);an[Fe]?an[Fe].p(Li,je):(an[Fe]=ud(Li),an[Fe].c(),an[Fe].m(ft,null))}for(;Fe<an.length;Fe+=1)an[Fe].d(1);an.length=ti.length}if(ce[0]?ln?ln.p(ce,je):(ln=hd(ce),ln.c(),ln.m(lt,null)):ln&&(ln.d(1),ln=null),(!kt||je[0]&512)&&dt!==(dt=ce[9].contactStage+"")&&ae(Sn,dt),(!kt||je[0]&512)&&Dn!==(Dn=ce[9].comContact+"")&&ae(Pn,Dn),ce[2]?Dt?(Dt.p(ce,je),je[0]&4&&K(Dt,1)):(Dt=fd(ce),Dt.c(),K(Dt,1),Dt.m(Be,De)):Dt&&(bt(),Z(Dt,1,1,()=>{Dt=null}),wt()),ce[7]?Pt?(Pt.p(ce,je),je[0]&128&&K(Pt,1)):(Pt=dd(ce),Pt.c(),K(Pt,1),Pt.m(Be,null)):Pt&&(bt(),Z(Pt,1,1,()=>{Pt=null}),wt()),je[0]&16&&ge(nt,ce[4]),je[0]&256){ni=ce[8];let Fe;for(Fe=0;Fe<ni.length;Fe+=1){const Li=ad(ce,ni,Fe);cn[Fe]?cn[Fe].p(Li,je):(cn[Fe]=pd(Li),cn[Fe].c(),cn[Fe].m(Yr,null))}for(;Fe<cn.length;Fe+=1)cn[Fe].d(1);cn.length=ni.length}ce[6]?Rt?(Rt.p(ce,je),je[0]&64&&K(Rt,1)):(Rt=md(ce),Rt.c(),K(Rt,1),Rt.m(Oi.parentNode,Oi)):Rt&&(bt(),Z(Rt,1,1,()=>{Rt=null}),wt())},i(ce){kt||(K(Dt),K(Pt),K(Rt),kt=!0)},o(ce){Z(Dt),Z(Pt),Z(Rt),kt=!1},d(ce){ce&&b(e),qe(an,ce),ln&&ln.d(),Dt&&Dt.d(),Pt&&Pt.d(),qe(cn,ce),ce&&b(Ra),Rt&&Rt.d(ce),ce&&b(Oi),Na=!1,Xe(pu)}}}function ud(t){let e,n=t[55]+"",s,i,r,o;function a(){return t[27](t[55])}return{c(){e=p("p"),s=S(n),g(e,"value",i=t[55])},m(l,c){w(l,e,c),u(e,s),r||(o=[V(e,"mouseenter",a),V(e,"mouseout",t[14]),V(e,"dblclick",t[28])],r=!0)},p(l,c){t=l,c[0]&512&&n!==(n=t[55]+"")&&ae(s,n),c[0]&512&&i!==(i=t[55])&&g(e,"value",i)},d(l){l&&b(e),r=!1,Xe(o)}}}function hd(t){let e,n=t[1][0].nameProperty+"",s,i,r,o,a;return{c(){e=p("h3"),s=S(n),i=k(),r=p("img"),g(e,"class","svelte-ce274g"),g(r,"class","imgPropContSelect"),g(r,"height","200"),et(r.src,o=t[1][0].urlImage)||g(r,"src",o),g(r,"alt",a=t[1][0].claveEB)},m(l,c){w(l,e,c),u(e,s),w(l,i,c),w(l,r,c)},p(l,c){c[0]&2&&n!==(n=l[1][0].nameProperty+"")&&ae(s,n),c[0]&2&&!et(r.src,o=l[1][0].urlImage)&&g(r,"src",o),c[0]&2&&a!==(a=l[1][0].claveEB)&&g(r,"alt",a)},d(l){l&&b(e),l&&b(i),l&&b(r)}}}function fd(t){let e,n;const s=[t[9]];let i={};for(let r=0;r<s.length;r+=1)i=Ot(i,s[r]);return e=new PT({props:i}),e.$on("closeIt",t[22]),{c(){de(e.$$.fragment)},m(r,o){ue(e,r,o),n=!0},p(r,o){const a=o[0]&512?vn(s,[Zn(r[9])]):{};e.$set(a)},i(r){n||(K(e.$$.fragment,r),n=!0)},o(r){Z(e.$$.fragment,r),n=!1},d(r){he(e,r)}}}function dd(t){let e,n,s;function i(o){t[31](o)}let r={};return t[3]!==void 0&&(r.searchTerm=t[3]),e=new hu({props:r}),Jn.push(()=>js(e,"searchTerm",i)),e.$on("input",t[17]),{c(){de(e.$$.fragment)},m(o,a){ue(e,o,a),s=!0},p(o,a){const l={};!n&&a[0]&8&&(n=!0,l.searchTerm=o[3],Vs(()=>n=!1)),e.$set(l)},i(o){s||(K(e.$$.fragment,o),s=!0)},o(o){Z(e.$$.fragment,o),s=!1},d(o){he(e,o)}}}function pd(t){let e,n=Ct(t[52].date)+"",s,i,r=t[52].action+"",o,a,l=t[52].comment+"",c;return{c(){e=p("h4"),s=S(n),i=k(),o=S(r),a=k(),c=S(l)},m(h,f){w(h,e,f),u(e,s),u(e,i),u(e,o),u(e,a),u(e,c)},p(h,f){f[0]&256&&n!==(n=Ct(h[52].date)+"")&&ae(s,n),f[0]&256&&r!==(r=h[52].action+"")&&ae(o,r),f[0]&256&&l!==(l=h[52].comment+"")&&ae(c,l)},d(h){h&&b(e)}}}function md(t){let e,n,s,i=t[11].length+"",r,o,a,l,c=t[11],h=[];for(let m=0;m<c.length;m+=1)h[m]=gd(od(t,c,m));const f=m=>Z(h[m],1,1,()=>{h[m]=null});let d=t[11].length===0&&_d();return{c(){e=p("main"),n=p("h3"),s=S("Propiedades encontradas: "),r=S(i),o=k();for(let m=0;m<h.length;m+=1)h[m].c();a=k(),d&&d.c(),g(n,"class","svelte-ce274g"),g(e,"id","bookshelf"),g(e,"class","svelte-ce274g")},m(m,_){w(m,e,_),u(e,n),u(n,s),u(n,r),u(e,o);for(let v=0;v<h.length;v+=1)h[v].m(e,null);u(e,a),d&&d.m(e,null),l=!0},p(m,_){if((!l||_[0]&2048)&&i!==(i=m[11].length+"")&&ae(r,i),_[0]&8390688){c=m[11];let v;for(v=0;v<c.length;v+=1){const y=od(m,c,v);h[v]?(h[v].p(y,_),K(h[v],1)):(h[v]=gd(y),h[v].c(),K(h[v],1),h[v].m(e,a))}for(bt(),v=c.length;v<h.length;v+=1)f(v);wt()}m[11].length===0?d||(d=_d(),d.c(),d.m(e,null)):d&&(d.d(1),d=null)},i(m){if(!l){for(let _=0;_<c.length;_+=1)K(h[_]);l=!0}},o(m){h=h.filter(Boolean);for(let _=0;_<h.length;_+=1)Z(h[_]);l=!1},d(m){m&&b(e),qe(h,m),d&&d.d()}}}function gd(t){let e,n,s,i,r,o,a,l,c;const h=[t[12]];let f={};for(let d=0;d<h.length;d+=1)f=Ot(f,h[d]);return r=new U_({props:f}),{c(){e=p("section"),n=p("input"),i=k(),de(r.$$.fragment),g(n,"type","checkbox"),n.__value=s=t[12].urlProp,n.value=n.__value,g(n,"class","form-check"),t[35][0].push(n),g(e,"class","property svelte-ce274g")},m(d,m){w(d,e,m),u(e,n),n.checked=~t[5].indexOf(n.__value),u(e,i),ue(r,e,null),a=!0,l||(c=[V(n,"change",t[34]),V(e,"click",t[23])],l=!0)},p(d,m){t=d,(!a||m[0]&2048&&s!==(s=t[12].urlProp))&&(n.__value=s,n.value=n.__value),m[0]&32&&(n.checked=~t[5].indexOf(n.__value));const _=m[0]&2048?vn(h,[Zn(t[12])]):{};r.$set(_)},i(d){a||(K(r.$$.fragment,d),xe(()=>{o||(o=fn(e,Ti,{duration:500,easing:Ii},!0)),o.run(1)}),a=!0)},o(d){Z(r.$$.fragment,d),o||(o=fn(e,Ti,{duration:500,easing:Ii},!1)),o.run(0),a=!1},d(d){d&&b(e),t[35][0].splice(t[35][0].indexOf(n),1),he(r),d&&o&&o.end(),l=!1,Xe(c)}}}function _d(t){let e;return{c(){e=p("h3"),e.textContent='"No hay Propiedades para este contacto"',g(e,"class","svelte-ce274g")},m(n,s){w(n,e,s)},d(n){n&&b(e)}}}function ZT(t){let e,n,s=t[10]==="contSelect"&&cd(t);return{c(){e=p("main"),s&&s.c()},m(i,r){w(i,e,r),s&&s.m(e,null),n=!0},p(i,r){i[10]==="contSelect"?s?(s.p(i,r),r[0]&1024&&K(s,1)):(s=cd(i),s.c(),K(s,1),s.m(e,null)):s&&(bt(),Z(s,1,1,()=>{s=null}),wt())},i(i){n||(K(s),n=!0)},o(i){Z(s),n=!1},d(i){i&&b(e),s&&s.d()}}}function eC(t){window.open(t)}function tC(t,e,n){let s,i,r,o,a,l;Oe(t,Je,X=>n(9,s=X)),Oe(t,nl,X=>n(40,i=X)),Oe(t,Ze,X=>n(10,r=X)),Oe(t,ro,X=>n(41,o=X)),Oe(t,Ye,X=>n(12,a=X)),Oe(t,Hl,X=>n(11,l=X));const c=Xs();let h=!1,f,d=!1,m,_,v=[],y=!1,E=!1,I=[];console.log(r);function O(X){n(0,h=!0),n(1,f=Fn.filter(me=>me.claveEB===X))}function D(){n(0,h=!1)}function $(){console.log("estas en addSchedule"),n(2,d=!0)}function F(){n(7,E=!0)}const N=()=>(n(6,y=!0),Le(Hl,l=Fn.filter(X=>(X.nameProperty+" "+X.colonia+" "+X.claveEB).toLowerCase().includes(m.toLowerCase())),l));function q(X){OT(X),n(6,y=!0)}const B=()=>{Le(Je,s=[],s),Le(Ze,r="start",r)};function M(){Le(Ze,r="contEditing",r)}async function U(){confirm("Deseas eleiminar definitivamente al contacto?")&&(await Ca(is(ut,"contacts",s.id)),z(s),c("/"))}async function z(X){let me=`Se le elimin\xF3a: ${X.name} ${X.lastname} del ${X.telephon}`,H={date:Date.now(),comment:me};console.log(r,H);const ye=gn(ut,"binnacles");await ws(ye,H)}function J(){n(2,d=!1)}function ie(){console.log(v)}function Q(){_.length>0&&(n(5,v=_),Le(nl,i="sendMsg",i));let X=`https://api.whatsapp.com/send?phone=52${s.telephon}&text=${v}`;window.open(X),W(v)}function G(){}function se(){Le(Ze,r="binnAdding",r),Le(ro,o={date:Date.now(),comment:_,to:s.telephon,action:"Nota agregada: "},o),gf(r,o)}function W(X){console.log(i),Le(Ze,r="binnAdding",r);let me=Fn.filter(H=>H.urlProp===X[0]);Le(Ye,a=me[0],a),i==="sendMsg"?Le(ro,o={date:Date.now(),comment:X,to:s.telephon,action:"Mensaje enviado: "},o):Le(ro,o={date:Date.now(),comment:a.claveEB,to:s.telephon,action:"Propiedad enviada: "},o),gf(r,o),Le(nl,i="",i)}n(8,I=_r.filter(X=>X.to===s.telephon));const A=[[]],j=X=>O(X),L=()=>eC(f[0].urlProp),R=()=>$(),Y=()=>q(s);function re(X){m=X,n(3,m)}function ke(){_=this.value,n(4,_)}const le=()=>se();function He(){v=Ft(A[0],this.__value,this.checked),n(5,v)}return[h,f,d,m,_,v,y,E,I,s,r,l,a,O,D,$,F,N,q,B,M,U,J,ie,Q,G,se,j,L,R,Y,re,ke,le,He,A]}class nC extends Qe{constructor(e){super(),We(this,e,tC,ZT,ze,{},null,[-1,-1])}}function vd(t,e,n){const s=t.slice();return s[22]=e[n],s[24]=n,s}function yd(t,e,n){const s=t.slice();return s[24]=e[n],s}function bd(t,e,n){const s=t.slice();return s[12]=e[n],s[24]=n,s}function wd(t){let e,n,s,i,r,o,a,l,c,h,f,d,m,_,v,y,E,I,O,D,$,F,N;function q(A){t[14](A)}let B={};t[3]!==void 0&&(B.searchTerm=t[3]),r=new hu({props:B}),Jn.push(()=>js(r,"searchTerm",q)),r.$on("input",t[11]);let M=t[1],U=[];for(let A=0;A<M.length;A+=1)U[A]=Ed(bd(t,M,A));const z=A=>Z(U[A],1,1,()=>{U[A]=null});let J=t[0]>1&&Id(t),ie=[3,2,1],Q=[];for(let A=0;A<3;A+=1)Q[A]=Cd(yd(t,ie,A));let G=Array(3),se=[];for(let A=0;A<G.length;A+=1)se[A]=Ad(vd(t,G,A));let W=t[0]<t[5]&&Dd(t);return{c(){e=p("h2"),e.textContent=`${gr.length} Contactos a Mostrar`,n=k(),s=p("button"),s.textContent="Alta de Contacto",i=k(),de(r.$$.fragment),a=k(),l=p("div"),c=p("main");for(let A=0;A<U.length;A+=1)U[A].c();h=k(),f=p("div"),d=p("div"),m=p("ul"),J&&J.c(),_=k();for(let A=0;A<3;A+=1)Q[A].c();v=k(),y=p("li"),E=p("span"),I=S(t[0]),O=k();for(let A=0;A<se.length;A+=1)se[A].c();D=k(),W&&W.c(),g(s,"class","altaContacto svelte-1qv5ujx"),g(c,"id","bookshelf"),g(m,"class","pagi__options"),g(d,"class","pagi__Item"),g(f,"class","container pagination"),g(l,"class","mosPag cont__card svelte-1qv5ujx")},m(A,j){w(A,e,j),w(A,n,j),w(A,s,j),w(A,i,j),ue(r,A,j),w(A,a,j),w(A,l,j),u(l,c);for(let L=0;L<U.length;L+=1)U[L].m(c,null);u(l,h),u(l,f),u(f,d),u(d,m),J&&J.m(m,null),u(m,_);for(let L=0;L<3;L+=1)Q[L].m(m,null);u(m,v),u(m,y),u(y,E),u(E,I),u(m,O);for(let L=0;L<se.length;L+=1)se[L].m(m,null);u(m,D),W&&W.m(m,null),$=!0,F||(N=V(s,"click",t[9]),F=!0)},p(A,j){const L={};if(!o&&j&8&&(o=!0,L.searchTerm=A[3],Vs(()=>o=!1)),r.$set(L),j&1046){M=A[1];let R;for(R=0;R<M.length;R+=1){const Y=bd(A,M,R);U[R]?(U[R].p(Y,j),K(U[R],1)):(U[R]=Ed(Y),U[R].c(),K(U[R],1),U[R].m(c,null))}for(bt(),R=M.length;R<U.length;R+=1)z(R);wt()}if(A[0]>1?J?J.p(A,j):(J=Id(A),J.c(),J.m(m,_)):J&&(J.d(1),J=null),j&257){ie=[3,2,1];let R;for(R=0;R<3;R+=1){const Y=yd(A,ie,R);Q[R]?Q[R].p(Y,j):(Q[R]=Cd(Y),Q[R].c(),Q[R].m(m,v))}for(;R<3;R+=1)Q[R].d(1)}if((!$||j&1)&&ae(I,A[0]),j&289){G=Array(3);let R;for(R=0;R<G.length;R+=1){const Y=vd(A,G,R);se[R]?se[R].p(Y,j):(se[R]=Ad(Y),se[R].c(),se[R].m(m,D))}for(;R<se.length;R+=1)se[R].d(1);se.length=G.length}A[0]<A[5]?W?W.p(A,j):(W=Dd(A),W.c(),W.m(m,null)):W&&(W.d(1),W=null)},i(A){if(!$){K(r.$$.fragment,A);for(let j=0;j<M.length;j+=1)K(U[j]);$=!0}},o(A){Z(r.$$.fragment,A),U=U.filter(Boolean);for(let j=0;j<U.length;j+=1)Z(U[j]);$=!1},d(A){A&&b(e),A&&b(n),A&&b(s),A&&b(i),he(r,A),A&&b(a),A&&b(l),qe(U,A),J&&J.d(),qe(Q,A),qe(se,A),W&&W.d(),F=!1,N()}}}function kd(t){let e,n,s,i,r,o,a;const l=[t[12]];let c={};for(let f=0;f<l.length;f+=1)c=Ot(c,l[f]);n=new IT({props:c});function h(){return t[15](t[12])}return{c(){e=p("div"),de(n.$$.fragment),s=k(),g(e,"class","selecContact")},m(f,d){w(f,e,d),ue(n,e,null),u(e,s),r=!0,o||(a=V(e,"click",h),o=!0)},p(f,d){t=f;const m=d&2?vn(l,[Zn(t[12])]):{};n.$set(m)},i(f){r||(K(n.$$.fragment,f),xe(()=>{i||(i=fn(e,Ti,{duration:500,easing:Ii},!0)),i.run(1)}),r=!0)},o(f){Z(n.$$.fragment,f),i||(i=fn(e,Ti,{duration:500,easing:Ii},!1)),i.run(0),r=!1},d(f){f&&b(e),he(n),f&&i&&i.end(),o=!1,a()}}}function Ed(t){let e,n,s=t[24]>=t[4]&&t[24]<t[2]&&kd(t);return{c(){s&&s.c(),e=tn()},m(i,r){s&&s.m(i,r),w(i,e,r),n=!0},p(i,r){i[24]>=i[4]&&i[24]<i[2]?s?(s.p(i,r),r&20&&K(s,1)):(s=kd(i),s.c(),K(s,1),s.m(e.parentNode,e)):s&&(bt(),Z(s,1,1,()=>{s=null}),wt())},i(i){n||(K(s),n=!0)},o(i){Z(s),n=!1},d(i){s&&s.d(i),i&&b(e)}}}function Id(t){let e,n,s,i,r,o,a,l,c;return{c(){e=p("li"),n=p("a"),n.textContent="first",s=k(),i=p("li"),r=p("a"),o=S("previous"),g(n,"href","/blog"),g(r,"href",a="/blog/"+(t[0]-1))},m(h,f){w(h,e,f),u(e,n),w(h,s,f),w(h,i,f),u(i,r),u(r,o),l||(c=[V(n,"click",_n(t[16])),V(r,"click",_n(t[17]))],l=!0)},p(h,f){f&1&&a!==(a="/blog/"+(h[0]-1))&&g(r,"href",a)},d(h){h&&b(e),h&&b(s),h&&b(i),l=!1,Xe(c)}}}function Td(t){let e,n,s=t[0]-t[24]+"",i,r,o,a;function l(){return t[18](t[24])}return{c(){e=p("li"),n=p("a"),i=S(s),g(n,"href",r="/blog/"+(t[0]-t[24]))},m(c,h){w(c,e,h),u(e,n),u(n,i),o||(a=V(n,"click",_n(l)),o=!0)},p(c,h){t=c,h&1&&s!==(s=t[0]-t[24]+"")&&ae(i,s),h&1&&r!==(r="/blog/"+(t[0]-t[24]))&&g(n,"href",r)},d(c){c&&b(e),o=!1,a()}}}function Cd(t){let e,n=t[0]-t[24]>0&&Td(t);return{c(){n&&n.c(),e=tn()},m(s,i){n&&n.m(s,i),w(s,e,i)},p(s,i){s[0]-s[24]>0?n?n.p(s,i):(n=Td(s),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(s){n&&n.d(s),s&&b(e)}}}function Sd(t){let e,n,s=t[0]+(t[24]+1)+"",i,r,o,a;function l(){return t[19](t[24])}return{c(){e=p("li"),n=p("a"),i=S(s),g(n,"href",r="/blog/"+(t[0]+(t[24]+1)))},m(c,h){w(c,e,h),u(e,n),u(n,i),o||(a=V(n,"click",_n(l)),o=!0)},p(c,h){t=c,h&1&&s!==(s=t[0]+(t[24]+1)+"")&&ae(i,s),h&1&&r!==(r="/blog/"+(t[0]+(t[24]+1)))&&g(n,"href",r)},d(c){c&&b(e),o=!1,a()}}}function Ad(t){let e,n=t[0]+(t[24]+1)<=t[5]&&Sd(t);return{c(){n&&n.c(),e=tn()},m(s,i){n&&n.m(s,i),w(s,e,i)},p(s,i){s[0]+(s[24]+1)<=s[5]?n?n.p(s,i):(n=Sd(s),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(s){n&&n.d(s),s&&b(e)}}}function Dd(t){let e,n,s,i,r,o,a,l,c,h,f;return{c(){e=p("li"),n=p("a"),s=S("next"),r=k(),o=p("li"),a=p("a"),l=S("last"),g(n,"href",i="/blog/"+(t[0]+1)),g(a,"href",c="/blog/"+t[5])},m(d,m){w(d,e,m),u(e,n),u(n,s),w(d,r,m),w(d,o,m),u(o,a),u(a,l),h||(f=[V(n,"click",_n(t[20])),V(a,"click",_n(t[21]))],h=!0)},p(d,m){m&1&&i!==(i="/blog/"+(d[0]+1))&&g(n,"href",i),m&32&&c!==(c="/blog/"+d[5])&&g(a,"href",c)},d(d){d&&b(e),d&&b(r),d&&b(o),h=!1,Xe(f)}}}function Pd(t){let e,n,s;return n=new nC({props:{$contact:t[7]}}),{c(){e=p("div"),de(n.$$.fragment)},m(i,r){w(i,e,r),ue(n,e,null),s=!0},p(i,r){const o={};r&128&&(o.$contact=i[7]),n.$set(o)},i(i){s||(K(n.$$.fragment,i),s=!0)},o(i){Z(n.$$.fragment,i),s=!1},d(i){i&&b(e),he(n)}}}function Rd(t){let e,n,s,i;const r=[t[7]];let o={};for(let a=0;a<r.length;a+=1)o=Ot(o,r[a]);return s=new JT({props:o}),{c(){e=p("div"),n=p("div"),de(s.$$.fragment),g(n,"class","container")},m(a,l){w(a,e,l),u(e,n),ue(s,n,null),i=!0},p(a,l){const c=l&128?vn(r,[Zn(a[7])]):{};s.$set(c)},i(a){i||(K(s.$$.fragment,a),i=!0)},o(a){Z(s.$$.fragment,a),i=!1},d(a){a&&b(e),he(s)}}}function sC(t){let e,n,s,i,r,o,a,l,c,h,f=t[6]==="start"&&wd(t),d=t[6]==="contSelect"&&Pd(t),m=(t[6]==="contEditing"||t[6]==="contAdding")&&Rd(t);return{c(){e=p("main"),n=p("div"),s=p("h1"),s.textContent="Contactos",i=k(),r=p("img"),a=k(),f&&f.c(),l=k(),d&&d.c(),c=k(),m&&m.c(),et(r.src,o=M_)||g(r,"src",o),g(r,"alt","contactos"),g(r,"class","svelte-1qv5ujx"),g(e,"class","container")},m(_,v){w(_,e,v),u(e,n),u(n,s),u(n,i),u(n,r),u(e,a),f&&f.m(e,null),u(e,l),d&&d.m(e,null),u(e,c),m&&m.m(e,null),h=!0},p(_,[v]){_[6]==="start"?f?(f.p(_,v),v&64&&K(f,1)):(f=wd(_),f.c(),K(f,1),f.m(e,l)):f&&(bt(),Z(f,1,1,()=>{f=null}),wt()),_[6]==="contSelect"?d?(d.p(_,v),v&64&&K(d,1)):(d=Pd(_),d.c(),K(d,1),d.m(e,c)):d&&(bt(),Z(d,1,1,()=>{d=null}),wt()),_[6]==="contEditing"||_[6]==="contAdding"?m?(m.p(_,v),v&64&&K(m,1)):(m=Rd(_),m.c(),K(m,1),m.m(e,null)):m&&(bt(),Z(m,1,1,()=>{m=null}),wt())},i(_){h||(K(f),K(d),K(m),h=!0)},o(_){Z(f),Z(d),Z(m),h=!1},d(_){_&&b(e),f&&f.d(),d&&d.d(),m&&m.d()}}}let rl=15;function iC(t,e,n){let s,i,r,o,a,l;Oe(t,Ze,B=>n(6,a=B)),Oe(t,Je,B=>n(7,l=B));let c;Le(Ze,a="start",a);let h,f=1,d=[];const m=B=>{n(0,f=B)},_=()=>{Le(Ze,a="contAdding",a)},v=B=>{n(3,c=""),Le(Je,l=B,l),Le(Ze,a="contSelect",a)};function y(){return n(1,d=gr.filter(B=>(B.name+" "+B.lastname).toLowerCase().includes(c.toLowerCase())))}n(1,d=gr.sort((B,M)=>new Date(B.createdA)<new Date(M.createdAt)?1:new Date(B.createdAt)>new Date(M.createdAt)?-1:0));function E(B){c=B,n(3,c)}const I=B=>v(B),O=()=>m(1),D=()=>m(f-1),$=B=>m(f-B),F=B=>m(f+(B+1)),N=()=>m(f+1),q=()=>m(i);return t.$$.update=()=>{t.$$.dirty&2&&n(13,s=d.length),t.$$.dirty&8192&&n(5,i=Math.ceil(s/rl)),t.$$.dirty&1&&n(2,r=f*rl),t.$$.dirty&4&&n(4,o=r-rl)},[f,d,r,c,o,i,a,l,m,_,v,y,h,s,E,I,O,D,$,F,N,q]}class rC extends Qe{constructor(e){super(),We(this,e,iC,sC,ze,{})}}let cs=[],us=[];function oC(t,e){e=e.filter(n=>n.selecTP===t.selectTP),t.numBeds>0&&(e=e.filter(n=>n.numBeds>=t.beds)),t.numBaths>0&&(e=e.filter(n=>n.numBaths>=t.bathroom)),t.numParks>0&&(e=e.filter(n=>n.numPark>=t.parks));try{e=e.filter(n=>{n.budget?cs=e.filter(s=>s.budget>=t.price*.7&&s.budget<=t.price*1.1):us=e.filter(s=>s.rangeProp===F_(t.price))})}catch(n){console.log(n)}e=us.concat(cs),cs=[],us=[];try{e.filter(n=>{n.locaProperty.length>0?(cs=e.filter(s=>t.locaProperty.some(i=>s.locaProperty.includes(i))),console.log(t.locaProperty)):(us=e.filter(s=>s.locaProperty.length===0),console.log(t.locaProperty))})}catch(n){console.log(n)}e=us.concat(cs),cs=[],us=[];try{e=e.filter(n=>{n.tagsProperty.length>0?cs=e.filter(s=>t.tagsProperty.some(i=>s.tagsProperty.includes(i))):us=e.filter(s=>s.tagsProperty.length===0)})}catch(n){console.log(n)}return e=us.concat(cs),console.log(e),O_.set(e)}function Nd(t,e,n){const s=t.slice();return s[16]=e[n],s}function Od(t){let e,n=t[2],s=[];for(let i=0;i<n.length;i+=1)s[i]=Ld(Nd(t,n,i));return{c(){for(let i=0;i<s.length;i+=1)s[i].c();e=tn()},m(i,r){for(let o=0;o<s.length;o+=1)s[o].m(i,r);w(i,e,r)},p(i,r){if(r&4){n=i[2];let o;for(o=0;o<n.length;o+=1){const a=Nd(i,n,o);s[o]?s[o].p(a,r):(s[o]=Ld(a),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(i){qe(s,i),i&&b(e)}}}function Ld(t){let e,n,s,i,r=t[16].name+"",o,a,l=t[16].lastname+"",c,h,f,d=t[16].locaProperty+"",m,_,v,y=t[16].tagsProperty+"",E,I,O,D=t[16].budget+"",$,F,N,q=t[16].rangeProp+"",B,M;return{c(){e=p("div"),n=p("input"),s=k(),i=p("div"),o=S(r),a=k(),c=S(l),h=k(),f=p("div"),m=S(d),_=k(),v=p("div"),E=S(y),I=k(),O=p("div"),$=S(D),F=k(),N=p("div"),B=S(q),M=k(),g(n,"type","checkbox"),g(e,"class","conInt svelte-1s75tnf")},m(U,z){w(U,e,z),u(e,n),u(e,s),u(e,i),u(i,o),u(i,a),u(i,c),u(e,h),u(e,f),u(f,m),u(e,_),u(e,v),u(v,E),u(e,I),u(e,O),u(O,$),u(e,F),u(e,N),u(N,B),u(e,M)},p(U,z){z&4&&r!==(r=U[16].name+"")&&ae(o,r),z&4&&l!==(l=U[16].lastname+"")&&ae(c,l),z&4&&d!==(d=U[16].locaProperty+"")&&ae(m,d),z&4&&y!==(y=U[16].tagsProperty+"")&&ae(E,y),z&4&&D!==(D=U[16].budget+"")&&ae($,D),z&4&&q!==(q=U[16].rangeProp+"")&&ae(B,q)},d(U){U&&b(e)}}}function aC(t){let e,n,s,i,r,o,a,l,c,h=t[1].claveEB+"",f,d,m=t[1].nameProperty+"",_,v,y,E=t[1].selecTP+"",I,O,D=t[1].colonia+"",$,F,N=t[1].locaProperty+"",q,B,M,U,z,J=t[1].price+"",ie,Q,G,se,W=t[1].beds+"",A,j,L=t[1].bathroom+"",R,Y,re=t[1].halfBathroom+"",ke,le,He,X,me=t[1].areaBuilding+"",H,ye,P=t[1].areaTotal+"",C,ve,Ce,rt,x=t[1].description+"",Pe,bn,St,At,nn,xt,Mt,Ht,ht,pn,ot,ft,sn,lt,jn,rn,dt,Sn,An,on,Dn,Pn,Jt,Be,Zt,Ve=t[0]&&Od(t);return{c(){e=p("div"),n=p("div"),s=p("div"),i=p("img"),a=k(),l=p("div"),c=p("h4"),f=S(h),d=k(),_=S(m),v=k(),y=p("h5"),I=S(E),O=S(" en Col. "),$=S(D),F=S(" al "),q=S(N),B=S(" de la ciudad."),M=k(),U=p("h6"),z=S("Precio: "),ie=S(J),Q=k(),G=p("div"),se=p("h6"),A=S(W),j=S(" Recamaras, "),R=S(L),Y=S(" Ba\xF1os y "),ke=S(re),le=S(" Medio Ba\xF1o"),He=k(),X=p("h6"),H=S(me),ye=S(" m2 de construcci\xF3n y "),C=S(P),ve=S(" m2 de terreno"),Ce=k(),rt=p("p"),Pe=S(x),bn=k(),St=p("div"),At=p("a"),nn=S("Seguir Link en Otra Ventana"),Mt=k(),Ht=p("div"),ht=p("button"),ht.textContent="Enviar por WhatsApp",pn=k(),ot=p("button"),ot.textContent="Buscar Interesados",ft=k(),sn=p("div"),lt=p("button"),lt.textContent="Regresar",jn=k(),rn=p("div"),dt=p("img"),An=k(),on=p("img"),Pn=k(),Ve&&Ve.c(),Jt=tn(),et(i.src,r=t[1].urlImage)||g(i,"src",r),g(i,"alt",o=t[1].nameProperty),g(s,"class","selectImage svelte-1s75tnf"),g(rt,"class","descSelec"),g(l,"class","descSelect"),g(At,"href",xt=t[1].urlProp),g(At,"target","_blank"),g(St,"class","folowLink"),g(ht,"class","btnCommon btnWhatsApp"),g(ot,"class","btnCommon"),g(Ht,"class","optionsSend"),g(lt,"class","btnCommon btnCancel"),g(sn,"class","backAnt"),et(dt.src,Sn=Pa)||g(dt,"src",Sn),g(dt,"alt","delete"),et(on.src,Dn=B_)||g(on,"src",Dn),g(on,"alt","delete"),g(rn,"class","icon__Content"),g(n,"class","sele__info svelte-1s75tnf"),g(e,"class","sele__Product svelte-1s75tnf")},m(De,Se){w(De,e,Se),u(e,n),u(n,s),u(s,i),u(n,a),u(n,l),u(l,c),u(c,f),u(c,d),u(c,_),u(l,v),u(l,y),u(y,I),u(y,O),u(y,$),u(y,F),u(y,q),u(y,B),u(l,M),u(l,U),u(U,z),u(U,ie),u(l,Q),u(l,G),u(G,se),u(se,A),u(se,j),u(se,R),u(se,Y),u(se,ke),u(se,le),u(l,He),u(l,X),u(X,H),u(X,ye),u(X,C),u(X,ve),u(l,Ce),u(l,rt),u(rt,Pe),u(n,bn),u(n,St),u(St,At),u(At,nn),u(n,Mt),u(n,Ht),u(Ht,ht),u(Ht,pn),u(Ht,ot),u(n,ft),u(n,sn),u(sn,lt),u(n,jn),u(n,rn),u(rn,dt),u(rn,An),u(rn,on),w(De,Pn,Se),Ve&&Ve.m(De,Se),w(De,Jt,Se),Be||(Zt=[V(ht,"click",t[8]),V(ot,"click",t[6]),V(lt,"click",t[7]),V(dt,"click",t[4]),V(on,"click",t[5])],Be=!0)},p(De,[Se]){Se&2&&!et(i.src,r=De[1].urlImage)&&g(i,"src",r),Se&2&&o!==(o=De[1].nameProperty)&&g(i,"alt",o),Se&2&&h!==(h=De[1].claveEB+"")&&ae(f,h),Se&2&&m!==(m=De[1].nameProperty+"")&&ae(_,m),Se&2&&E!==(E=De[1].selecTP+"")&&ae(I,E),Se&2&&D!==(D=De[1].colonia+"")&&ae($,D),Se&2&&N!==(N=De[1].locaProperty+"")&&ae(q,N),Se&2&&J!==(J=De[1].price+"")&&ae(ie,J),Se&2&&W!==(W=De[1].beds+"")&&ae(A,W),Se&2&&L!==(L=De[1].bathroom+"")&&ae(R,L),Se&2&&re!==(re=De[1].halfBathroom+"")&&ae(ke,re),Se&2&&me!==(me=De[1].areaBuilding+"")&&ae(H,me),Se&2&&P!==(P=De[1].areaTotal+"")&&ae(C,P),Se&2&&x!==(x=De[1].description+"")&&ae(Pe,x),Se&2&&xt!==(xt=De[1].urlProp)&&g(At,"href",xt),De[0]?Ve?Ve.p(De,Se):(Ve=Od(De),Ve.c(),Ve.m(Jt.parentNode,Jt)):Ve&&(Ve.d(1),Ve=null)},i:fe,o:fe,d(De){De&&b(e),De&&b(Pn),Ve&&Ve.d(De),De&&b(Jt),Be=!1,Xe(Zt)}}}function lC(t,e,n){let s,i,r;Oe(t,Ze,m=>n(10,s=m)),Oe(t,Ye,m=>n(1,i=m)),Oe(t,O_,m=>n(2,r=m)),Xs();let o=[],a=!1;function l(){console.log("propEditing"),Le(Ze,s="propEditing",s),console.log("propEditing")}async function c(){confirm("Deseas eleiminar definitivamente la propiedad?")&&(console.log("Borraste al propiedad"),await Ca(is(ut,"properties",i.id)),Le(Ze,s="start",s))}function h(){oC(i,gr),n(0,a=!0)}function f(){Le(Ye,i=[],i),Le(Ze,s="start",s)}return[a,i,r,o,l,c,h,f,()=>void 0]}class cC extends Qe{constructor(e){super(),We(this,e,lC,aC,ze,{})}}function uC(t){let e;return{c(){e=S("Editar")},m(n,s){w(n,e,s)},d(n){n&&b(e)}}}function hC(t){let e;return{c(){e=S("Guardar")},m(n,s){w(n,e,s)},d(n){n&&b(e)}}}function fC(t){let e,n,s,i,r,o,a,l,c,h,f,d,m,_,v,y;l=new WT({});function E(D,$){return D[0]==="propAdding"?hC:uC}let I=E(t),O=I(t);return{c(){e=p("form"),n=p("div"),s=p("div"),i=p("img"),a=k(),de(l.$$.fragment),c=k(),h=p("div"),f=p("button"),O.c(),d=k(),m=p("button"),m.textContent="Cancel",et(i.src,r=t[1].urlImage)||g(i,"src",r),g(i,"alt",o=t[1].nameProperty),g(i,"class","svelte-166hnhc"),g(f,"class","btn-save"),g(m,"class","btn-cancel"),g(h,"class","contSavCan svelte-166hnhc"),g(n,"class","altaContactos"),g(e,"class","propiedad")},m(D,$){w(D,e,$),u(e,n),u(n,s),u(s,i),u(s,a),ue(l,s,null),u(n,c),u(n,h),u(h,f),O.m(f,null),u(h,d),u(h,m),_=!0,v||(y=[V(m,"click",t[3]),V(e,"submit",_n(t[2]))],v=!0)},p(D,[$]){(!_||$&2&&!et(i.src,r=D[1].urlImage))&&g(i,"src",r),(!_||$&2&&o!==(o=D[1].nameProperty))&&g(i,"alt",o),I!==(I=E(D))&&(O.d(1),O=I(D),O&&(O.c(),O.m(f,null)))},i(D){_||(K(l.$$.fragment,D),_=!0)},o(D){Z(l.$$.fragment,D),_=!1},d(D){D&&b(e),he(l),O.d(),v=!1,Xe(y)}}}function dC(t,e,n){let s,i;Oe(t,Ze,c=>n(0,s=c)),Oe(t,Ye,c=>n(1,i=c));let r=0;const o=Xs();async function a(){if(console.log("Estas en add property",s,i),s==="propEditing")console.log("estas dentro de edit property",i.id),await Ta(is(ut,"properties",i.id),i);else{r=Date.now(),Le(Ye,i={...i,createdAt:r},i),console.log(i);const c=gn(ut,"properties");await ws(c,i)}Le(Ze,s="start",s)}return[s,i,a,()=>{o("./")}]}class q_ extends Qe{constructor(e){super(),We(this,e,dC,fC,ze,{})}}function Md(t,e,n){const s=t.slice();return s[23]=e[n],s[25]=n,s}function $d(t,e,n){const s=t.slice();return s[25]=e[n],s}function Ud(t,e,n){const s=t.slice();return s[12]=e[n],s[25]=n,s}function Fd(t){let e,n,s,i,r,o,a,l,c,h,f,d,m,_,v,y,E,I,O,D,$,F,N;function q(A){t[14](A)}let B={};t[3]!==void 0&&(B.searchTerm=t[3]),r=new hu({props:B}),Jn.push(()=>js(r,"searchTerm",q)),r.$on("input",t[11]);let M=t[1],U=[];for(let A=0;A<M.length;A+=1)U[A]=Vd(Ud(t,M,A));const z=A=>Z(U[A],1,1,()=>{U[A]=null});let J=t[0]>1&&jd(t),ie=[3,2,1],Q=[];for(let A=0;A<3;A+=1)Q[A]=Hd($d(t,ie,A));let G=Array(3),se=[];for(let A=0;A<G.length;A+=1)se[A]=zd(Md(t,G,A));let W=t[0]<t[5]&&Gd(t);return{c(){e=p("h2"),e.textContent=`${Fn.length} Propiedades a Mostrar`,n=k(),s=p("button"),s.textContent="Alta de Propiedad",i=k(),de(r.$$.fragment),a=k(),l=p("div"),c=p("main");for(let A=0;A<U.length;A+=1)U[A].c();h=k(),f=p("div"),d=p("div"),m=p("ul"),J&&J.c(),_=k();for(let A=0;A<3;A+=1)Q[A].c();v=k(),y=p("li"),E=p("span"),I=S(t[0]),O=k();for(let A=0;A<se.length;A+=1)se[A].c();D=k(),W&&W.c(),g(c,"id","bookshelf"),g(c,"class","svelte-elvgtg"),g(m,"class","pagi__options"),g(d,"class","pagi__Item"),g(f,"class","container pagination"),g(l,"class","mosPag")},m(A,j){w(A,e,j),w(A,n,j),w(A,s,j),w(A,i,j),ue(r,A,j),w(A,a,j),w(A,l,j),u(l,c);for(let L=0;L<U.length;L+=1)U[L].m(c,null);u(l,h),u(l,f),u(f,d),u(d,m),J&&J.m(m,null),u(m,_);for(let L=0;L<3;L+=1)Q[L].m(m,null);u(m,v),u(m,y),u(y,E),u(E,I),u(m,O);for(let L=0;L<se.length;L+=1)se[L].m(m,null);u(m,D),W&&W.m(m,null),$=!0,F||(N=V(s,"click",t[10]),F=!0)},p(A,j){const L={};if(!o&&j&8&&(o=!0,L.searchTerm=A[3],Vs(()=>o=!1)),r.$set(L),j&534){M=A[1];let R;for(R=0;R<M.length;R+=1){const Y=Ud(A,M,R);U[R]?(U[R].p(Y,j),K(U[R],1)):(U[R]=Vd(Y),U[R].c(),K(U[R],1),U[R].m(c,null))}for(bt(),R=M.length;R<U.length;R+=1)z(R);wt()}if(A[0]>1?J?J.p(A,j):(J=jd(A),J.c(),J.m(m,_)):J&&(J.d(1),J=null),j&257){ie=[3,2,1];let R;for(R=0;R<3;R+=1){const Y=$d(A,ie,R);Q[R]?Q[R].p(Y,j):(Q[R]=Hd(Y),Q[R].c(),Q[R].m(m,v))}for(;R<3;R+=1)Q[R].d(1)}if((!$||j&1)&&ae(I,A[0]),j&289){G=Array(3);let R;for(R=0;R<G.length;R+=1){const Y=Md(A,G,R);se[R]?se[R].p(Y,j):(se[R]=zd(Y),se[R].c(),se[R].m(m,D))}for(;R<se.length;R+=1)se[R].d(1);se.length=G.length}A[0]<A[5]?W?W.p(A,j):(W=Gd(A),W.c(),W.m(m,null)):W&&(W.d(1),W=null)},i(A){if(!$){K(r.$$.fragment,A);for(let j=0;j<M.length;j+=1)K(U[j]);$=!0}},o(A){Z(r.$$.fragment,A),U=U.filter(Boolean);for(let j=0;j<U.length;j+=1)Z(U[j]);$=!1},d(A){A&&b(e),A&&b(n),A&&b(s),A&&b(i),he(r,A),A&&b(a),A&&b(l),qe(U,A),J&&J.d(),qe(Q,A),qe(se,A),W&&W.d(),F=!1,N()}}}function Bd(t){let e,n,s,i,r,o,a;const l=[t[12]];let c={};for(let f=0;f<l.length;f+=1)c=Ot(c,l[f]);n=new U_({props:c});function h(){return t[15](t[12])}return{c(){e=p("section"),de(n.$$.fragment),s=k(),g(e,"class","property svelte-elvgtg")},m(f,d){w(f,e,d),ue(n,e,null),u(e,s),r=!0,o||(a=V(e,"click",h),o=!0)},p(f,d){t=f;const m=d&2?vn(l,[Zn(t[12])]):{};n.$set(m)},i(f){r||(K(n.$$.fragment,f),xe(()=>{i||(i=fn(e,Ti,{duration:500,easing:Ii},!0)),i.run(1)}),r=!0)},o(f){Z(n.$$.fragment,f),i||(i=fn(e,Ti,{duration:500,easing:Ii},!1)),i.run(0),r=!1},d(f){f&&b(e),he(n),f&&i&&i.end(),o=!1,a()}}}function Vd(t){let e,n,s=t[25]>=t[4]&&t[25]<t[2]&&Bd(t);return{c(){s&&s.c(),e=tn()},m(i,r){s&&s.m(i,r),w(i,e,r),n=!0},p(i,r){i[25]>=i[4]&&i[25]<i[2]?s?(s.p(i,r),r&20&&K(s,1)):(s=Bd(i),s.c(),K(s,1),s.m(e.parentNode,e)):s&&(bt(),Z(s,1,1,()=>{s=null}),wt())},i(i){n||(K(s),n=!0)},o(i){Z(s),n=!1},d(i){s&&s.d(i),i&&b(e)}}}function jd(t){let e,n,s,i,r,o,a,l,c;return{c(){e=p("li"),n=p("a"),n.textContent="first",s=k(),i=p("li"),r=p("a"),o=S("previous"),g(n,"href","/blog"),g(r,"href",a="/blog/"+(t[0]-1))},m(h,f){w(h,e,f),u(e,n),w(h,s,f),w(h,i,f),u(i,r),u(r,o),l||(c=[V(n,"click",_n(t[16])),V(r,"click",_n(t[17]))],l=!0)},p(h,f){f&1&&a!==(a="/blog/"+(h[0]-1))&&g(r,"href",a)},d(h){h&&b(e),h&&b(s),h&&b(i),l=!1,Xe(c)}}}function qd(t){let e,n,s=t[0]-t[25]+"",i,r,o,a;function l(){return t[18](t[25])}return{c(){e=p("li"),n=p("a"),i=S(s),g(n,"href",r="/blog/"+(t[0]-t[25]))},m(c,h){w(c,e,h),u(e,n),u(n,i),o||(a=V(n,"click",_n(l)),o=!0)},p(c,h){t=c,h&1&&s!==(s=t[0]-t[25]+"")&&ae(i,s),h&1&&r!==(r="/blog/"+(t[0]-t[25]))&&g(n,"href",r)},d(c){c&&b(e),o=!1,a()}}}function Hd(t){let e,n=t[0]-t[25]>0&&qd(t);return{c(){n&&n.c(),e=tn()},m(s,i){n&&n.m(s,i),w(s,e,i)},p(s,i){s[0]-s[25]>0?n?n.p(s,i):(n=qd(s),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(s){n&&n.d(s),s&&b(e)}}}function Kd(t){let e,n,s=t[0]+(t[25]+1)+"",i,r,o,a;function l(){return t[19](t[25])}return{c(){e=p("li"),n=p("a"),i=S(s),g(n,"href",r="/blog/"+(t[0]+(t[25]+1)))},m(c,h){w(c,e,h),u(e,n),u(n,i),o||(a=V(n,"click",_n(l)),o=!0)},p(c,h){t=c,h&1&&s!==(s=t[0]+(t[25]+1)+"")&&ae(i,s),h&1&&r!==(r="/blog/"+(t[0]+(t[25]+1)))&&g(n,"href",r)},d(c){c&&b(e),o=!1,a()}}}function zd(t){let e,n=t[0]+(t[25]+1)<=t[5]&&Kd(t);return{c(){n&&n.c(),e=tn()},m(s,i){n&&n.m(s,i),w(s,e,i)},p(s,i){s[0]+(s[25]+1)<=s[5]?n?n.p(s,i):(n=Kd(s),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(s){n&&n.d(s),s&&b(e)}}}function Gd(t){let e,n,s,i,r,o,a,l,c,h,f;return{c(){e=p("li"),n=p("a"),s=S("next"),r=k(),o=p("li"),a=p("a"),l=S("last"),g(n,"href",i="/blog/"+(t[0]+1)),g(a,"href",c="/blog/"+t[5])},m(d,m){w(d,e,m),u(e,n),u(n,s),w(d,r,m),w(d,o,m),u(o,a),u(a,l),h||(f=[V(n,"click",_n(t[20])),V(a,"click",_n(t[21]))],h=!0)},p(d,m){m&1&&i!==(i="/blog/"+(d[0]+1))&&g(n,"href",i),m&32&&c!==(c="/blog/"+d[5])&&g(a,"href",c)},d(d){d&&b(e),d&&b(r),d&&b(o),h=!1,Xe(f)}}}function Wd(t){let e,n,s;const i=[t[7]];let r={};for(let o=0;o<i.length;o+=1)r=Ot(r,i[o]);return n=new cC({props:r}),{c(){e=p("div"),de(n.$$.fragment)},m(o,a){w(o,e,a),ue(n,e,null),s=!0},p(o,a){const l=a&128?vn(i,[Zn(o[7])]):{};n.$set(l)},i(o){s||(K(n.$$.fragment,o),s=!0)},o(o){Z(n.$$.fragment,o),s=!1},d(o){o&&b(e),he(n)}}}function Qd(t){let e,n,s;const i=[t[7]];let r={};for(let o=0;o<i.length;o+=1)r=Ot(r,i[o]);return n=new q_({props:r}),{c(){e=p("div"),de(n.$$.fragment),g(e,"class","container")},m(o,a){w(o,e,a),ue(n,e,null),s=!0},p(o,a){const l=a&128?vn(i,[Zn(o[7])]):{};n.$set(l)},i(o){s||(K(n.$$.fragment,o),s=!0)},o(o){Z(n.$$.fragment,o),s=!1},d(o){o&&b(e),he(n)}}}function Yd(t){let e,n,s;return n=new q_({}),{c(){e=p("div"),de(n.$$.fragment),g(e,"class","container")},m(i,r){w(i,e,r),ue(n,e,null),s=!0},i(i){s||(K(n.$$.fragment,i),s=!0)},o(i){Z(n.$$.fragment,i),s=!1},d(i){i&&b(e),he(n)}}}function pC(t){let e,n,s,i,r,o,a,l,c,h,f,d=t[6]==="start"&&Fd(t),m=t[6]==="propSelect"&&Wd(t),_=t[6]==="propEditing"&&Qd(t),v=t[6]==="propAdding"&&Yd();return{c(){e=p("div"),n=p("div"),s=p("h1"),s.textContent="Propiedades",i=k(),r=p("img"),a=k(),d&&d.c(),l=k(),m&&m.c(),c=k(),_&&_.c(),h=k(),v&&v.c(),et(r.src,o=$_)||g(r,"src",o),g(r,"alt","propiedad"),g(r,"class","imgTitle svelte-elvgtg"),g(e,"class","container")},m(y,E){w(y,e,E),u(e,n),u(n,s),u(n,i),u(n,r),u(e,a),d&&d.m(e,null),u(e,l),m&&m.m(e,null),u(e,c),_&&_.m(e,null),u(e,h),v&&v.m(e,null),f=!0},p(y,[E]){y[6]==="start"?d?(d.p(y,E),E&64&&K(d,1)):(d=Fd(y),d.c(),K(d,1),d.m(e,l)):d&&(bt(),Z(d,1,1,()=>{d=null}),wt()),y[6]==="propSelect"?m?(m.p(y,E),E&64&&K(m,1)):(m=Wd(y),m.c(),K(m,1),m.m(e,c)):m&&(bt(),Z(m,1,1,()=>{m=null}),wt()),y[6]==="propEditing"?_?(_.p(y,E),E&64&&K(_,1)):(_=Qd(y),_.c(),K(_,1),_.m(e,h)):_&&(bt(),Z(_,1,1,()=>{_=null}),wt()),y[6]==="propAdding"?v?E&64&&K(v,1):(v=Yd(),v.c(),K(v,1),v.m(e,null)):v&&(bt(),Z(v,1,1,()=>{v=null}),wt())},i(y){f||(K(d),K(m),K(_),K(v),f=!0)},o(y){Z(d),Z(m),Z(_),Z(v),f=!1},d(y){y&&b(e),d&&d.d(),m&&m.d(),_&&_.d(),v&&v.d()}}}let ol=20;function mC(t,e,n){let s,i,r,o,a,l,c;Oe(t,Ze,B=>n(6,l=B)),Oe(t,Ye,B=>n(7,c=B));let h,f;Le(Ze,l="start",l);let d=1;const m=B=>{n(0,d=B)};function _(B){console.log(B),Le(Ye,c=B,c),Le(Ze,l="propSelect",l)}function v(){Le(Ze,l="propAdding",l)}function y(){return n(1,s=Fn.filter(B=>(B.nameProperty+" "+B.colonia).toLowerCase().includes(h.toLowerCase())))}n(1,s=Fn.sort((B,M)=>new Date(B.createdAt)<new Date(M.createdAt)?1:new Date(B.createdAt)>new Date(M.createdAt)?-1:0));function E(B){h=B,n(3,h)}const I=B=>_(B),O=()=>m(1),D=()=>m(d-1),$=B=>m(d-B),F=B=>m(d+(B+1)),N=()=>m(d+1),q=()=>m(r);return t.$$.update=()=>{t.$$.dirty&2&&n(13,i=s.length),t.$$.dirty&8192&&n(5,r=Math.ceil(i/ol)),t.$$.dirty&1&&n(2,o=d*ol),t.$$.dirty&4&&n(4,a=o-ol)},n(1,s=Fn),[d,s,o,h,a,r,l,c,m,_,v,y,f,i,E,I,O,D,$,F,N,q]}class gC extends Qe{constructor(e){super(),We(this,e,mC,pC,ze,{})}}function _C(t){let e;return{c(){e=p("h1"),e.textContent="Captacion"},m(n,s){w(n,e,s)},p:fe,i:fe,o:fe,d(n){n&&b(e)}}}class vC extends Qe{constructor(e){super(),We(this,e,null,_C,ze,{})}}function yC(t){let e,n,s,i,r=t[0].task+"",o;return{c(){e=p("div"),n=p("h1"),n.textContent="Estas en About",s=k(),i=p("h3"),o=S(r),g(e,"class","cont")},m(a,l){w(a,e,l),u(e,n),u(e,s),u(e,i),u(i,o)},p(a,[l]){l&1&&r!==(r=a[0].task+"")&&ae(o,r)},i:fe,o:fe,d(a){a&&b(e)}}}function bC(t,e,n){let s;return Oe(t,kn,i=>n(0,s=i)),[s]}class wC extends Qe{constructor(e){super(),We(this,e,bC,yC,ze,{})}}function kC(t){let e,n,s,i;return{c(){e=p("div"),n=p("div"),s=S(t[0]),g(n,"id","snackbar"),g(n,"class",i=gu(t[1]?"animation-in":"not-show")+" svelte-1e3w4r3")},m(r,o){w(r,e,o),u(e,n),u(n,s)},p(r,[o]){o&1&&ae(s,r[0]),o&2&&i!==(i=gu(r[1]?"animation-in":"not-show")+" svelte-1e3w4r3")&&g(n,"class",i)},i:fe,o:fe,d(r){r&&b(e)}}}function EC(t,e,n){let{message:s=""}=e,{show:i=!1}=e;return t.$$set=r=>{"message"in r&&n(0,s=r.message),"show"in r&&n(1,i=r.show)},[s,i]}class IC extends Qe{constructor(e){super(),We(this,e,EC,kC,ze,{message:0,show:1})}}function TC(t){let e;return{c(){e=S("Registrarse")},m(n,s){w(n,e,s)},d(n){n&&b(e)}}}function CC(t){let e,n,s,i,r,o,a,l,c,h,f,d,m,_,v,y,E,I,O,D,$,F,N,q,B,M,U,z,J,ie,Q;return n=new IC({props:{message:t[0],show:t[1]}}),z=new un({props:{to:"/register",$$slots:{default:[TC]},$$scope:{ctx:t}}}),{c(){e=p("div"),de(n.$$.fragment),s=k(),i=p("br"),r=p("br"),o=p("br"),a=k(),l=p("div"),c=p("h1"),c.textContent="Inicia sesi\xF3n en tu cuenta",h=k(),f=p("div"),d=p("input"),m=k(),_=p("div"),v=p("input"),y=k(),E=p("br"),I=k(),O=p("div"),D=p("button"),D.textContent="Iniciar sesi\xF3n",$=k(),F=p("p"),F.textContent="O tambi\xE9n",N=k(),q=p("br"),B=k(),M=p("p"),U=S("\xBFA\xFAn no tienes cuenta? "),de(z.$$.fragment),g(c,"class","text-center text-login svelte-ftg4em"),g(d,"name","email"),g(d,"type","text"),g(d,"class","input-form svelte-ftg4em"),g(d,"placeholder","Correo"),g(f,"class","center svelte-ftg4em"),g(v,"name","password"),g(v,"type","password"),g(v,"class","input-form svelte-ftg4em"),g(v,"placeholder","Contrase\xF1a"),g(_,"class","center svelte-ftg4em"),g(D,"class","button-signup fondo-color-signup svelte-ftg4em"),g(O,"class","center svelte-ftg4em"),g(F,"class","text-center svelte-ftg4em"),g(M,"class","text-center svelte-ftg4em"),g(l,"class","form-signin svelte-ftg4em")},m(G,se){w(G,e,se),ue(n,e,null),u(e,s),u(e,i),u(e,r),u(e,o),u(e,a),u(e,l),u(l,c),u(l,h),u(l,f),u(f,d),u(l,m),u(l,_),u(_,v),u(l,y),u(l,E),u(l,I),u(l,O),u(O,D),u(l,$),u(l,F),u(l,N),u(l,q),u(l,B),u(l,M),u(M,U),ue(z,M,null),J=!0,ie||(Q=[V(d,"input",t[4]),V(v,"input",t[5]),V(D,"click",t[3])],ie=!0)},p(G,[se]){const W={};se&1&&(W.message=G[0]),se&2&&(W.show=G[1]),n.$set(W);const A={};se&512&&(A.$$scope={dirty:se,ctx:G}),z.$set(A)},i(G){J||(K(n.$$.fragment,G),K(z.$$.fragment,G),J=!0)},o(G){Z(n.$$.fragment,G),Z(z.$$.fragment,G),J=!1},d(G){G&&b(e),he(n),he(z),ie=!1,Xe(Q)}}}function SC(t,e,n){const s=Xs();let i={email:"",password:""},r="",o=!1;const a=d=>{n(0,r=d),n(1,o=!0),setTimeout(()=>{n(1,o=!1)},2800)},l=d=>{i={...i,[d.target.name]:d.target.value}};return[r,o,l,async()=>{try{await EE(P_,i.email,i.password),s("/")}catch(d){d.message==="Firebase: Error (auth/wrong-password)."&&a("Contrase\xF1a incorrecta")}},d=>l(d),d=>l(d)]}class AC extends Qe{constructor(e){super(),We(this,e,SC,CC,ze,{})}}class DC extends Qe{constructor(e){super(),We(this,e,null,null,ze,{})}}function PC(t){let e;return{c(){e=S("Home")},m(n,s){w(n,e,s)},d(n){n&&b(e)}}}function RC(t){let e;return{c(){e=S("Contactos")},m(n,s){w(n,e,s)},d(n){n&&b(e)}}}function NC(t){let e;return{c(){e=S("Propiedades")},m(n,s){w(n,e,s)},d(n){n&&b(e)}}}function OC(t){let e;return{c(){e=S("Agenda")},m(n,s){w(n,e,s)},d(n){n&&b(e)}}}function LC(t){let e;return{c(){e=S("LogOut")},m(n,s){w(n,e,s)},d(n){n&&b(e)}}}function MC(t){let e;return{c(){e=S("About")},m(n,s){w(n,e,s)},d(n){n&&b(e)}}}function $C(t){let e;return{c(){e=S("Registro")},m(n,s){w(n,e,s)},d(n){n&&b(e)}}}function UC(t){let e;return{c(){e=S("Login")},m(n,s){w(n,e,s)},d(n){n&&b(e)}}}function FC(t){let e,n;return e=new wT({}),{c(){de(e.$$.fragment)},m(s,i){ue(e,s,i),n=!0},i(s){n||(K(e.$$.fragment,s),n=!0)},o(s){Z(e.$$.fragment,s),n=!1},d(s){he(e,s)}}}function BC(t){let e,n;return e=new rC({}),{c(){de(e.$$.fragment)},m(s,i){ue(e,s,i),n=!0},i(s){n||(K(e.$$.fragment,s),n=!0)},o(s){Z(e.$$.fragment,s),n=!1},d(s){he(e,s)}}}function VC(t){let e,n;return e=new gC({}),{c(){de(e.$$.fragment)},m(s,i){ue(e,s,i),n=!0},i(s){n||(K(e.$$.fragment,s),n=!0)},o(s){Z(e.$$.fragment,s),n=!1},d(s){he(e,s)}}}function jC(t){let e,n;return e=new vC({}),{c(){de(e.$$.fragment)},m(s,i){ue(e,s,i),n=!0},i(s){n||(K(e.$$.fragment,s),n=!0)},o(s){Z(e.$$.fragment,s),n=!1},d(s){he(e,s)}}}function qC(t){let e,n;return e=new ZI({}),{c(){de(e.$$.fragment)},m(s,i){ue(e,s,i),n=!0},i(s){n||(K(e.$$.fragment,s),n=!0)},o(s){Z(e.$$.fragment,s),n=!1},d(s){he(e,s)}}}function HC(t){let e,n;return e=new tT({}),{c(){de(e.$$.fragment)},m(s,i){ue(e,s,i),n=!0},i(s){n||(K(e.$$.fragment,s),n=!0)},o(s){Z(e.$$.fragment,s),n=!1},d(s){he(e,s)}}}function KC(t){let e,n;return e=new wC({}),{c(){de(e.$$.fragment)},m(s,i){ue(e,s,i),n=!0},i(s){n||(K(e.$$.fragment,s),n=!0)},o(s){Z(e.$$.fragment,s),n=!1},d(s){he(e,s)}}}function zC(t){let e,n;return e=new DC({}),{c(){de(e.$$.fragment)},m(s,i){ue(e,s,i),n=!0},i(s){n||(K(e.$$.fragment,s),n=!0)},o(s){Z(e.$$.fragment,s),n=!1},d(s){he(e,s)}}}function GC(t){let e,n;return e=new AC({}),{c(){de(e.$$.fragment)},m(s,i){ue(e,s,i),n=!0},i(s){n||(K(e.$$.fragment,s),n=!0)},o(s){Z(e.$$.fragment,s),n=!1},d(s){he(e,s)}}}function WC(t){let e,n;return e=new rT({}),{c(){de(e.$$.fragment)},m(s,i){ue(e,s,i),n=!0},i(s){n||(K(e.$$.fragment,s),n=!0)},o(s){Z(e.$$.fragment,s),n=!1},d(s){he(e,s)}}}function QC(t){let e,n,s,i,r,o,a,l,c,h,f,d,m,_,v,y,E,I,O,D,$,F,N,q,B,M,U,z,J,ie,Q,G,se,W,A,j,L,R,Y,re,ke,le,He,X,me,H,ye;return d=new un({props:{to:"/",$$slots:{default:[PC]},$$scope:{ctx:t}}}),_=new un({props:{to:"contactos",$$slots:{default:[RC]},$$scope:{ctx:t}}}),y=new un({props:{to:"propiedades",$$slots:{default:[NC]},$$scope:{ctx:t}}}),I=new un({props:{to:"agenda",$$slots:{default:[OC]},$$scope:{ctx:t}}}),D=new un({props:{to:"/about",$$slots:{default:[LC]},$$scope:{ctx:t}}}),D.$on("click",XC),F=new un({props:{to:"about",$$slots:{default:[MC]},$$scope:{ctx:t}}}),q=new un({props:{to:"register",$$slots:{default:[$C]},$$scope:{ctx:t}}}),M=new un({props:{to:"login",$$slots:{default:[UC]},$$scope:{ctx:t}}}),z=new Nn({props:{path:"/",$$slots:{default:[FC]},$$scope:{ctx:t}}}),ie=new Nn({props:{path:"/contactos",$$slots:{default:[BC]},$$scope:{ctx:t}}}),G=new Nn({props:{path:"propiedades",$$slots:{default:[VC]},$$scope:{ctx:t}}}),W=new Nn({props:{path:"captacion",$$slots:{default:[jC]},$$scope:{ctx:t}}}),j=new Nn({props:{path:"agenda",$$slots:{default:[qC]},$$scope:{ctx:t}}}),R=new Nn({props:{path:"sinergias",$$slots:{default:[HC]},$$scope:{ctx:t}}}),re=new Nn({props:{path:"about",$$slots:{default:[KC]},$$scope:{ctx:t}}}),le=new Nn({props:{path:"logout",$$slots:{default:[zC]},$$scope:{ctx:t}}}),X=new Nn({props:{path:"login",$$slots:{default:[GC]},$$scope:{ctx:t}}}),H=new Nn({props:{path:"register",$$slots:{default:[WC]},$$scope:{ctx:t}}}),{c(){e=p("div"),n=p("img"),i=k(),r=p("label"),o=p("img"),l=k(),c=p("input"),h=k(),f=p("div"),de(d.$$.fragment),m=k(),de(_.$$.fragment),v=k(),de(y.$$.fragment),E=k(),de(I.$$.fragment),O=k(),de(D.$$.fragment),$=k(),de(F.$$.fragment),N=k(),de(q.$$.fragment),B=k(),de(M.$$.fragment),U=k(),de(z.$$.fragment),J=k(),de(ie.$$.fragment),Q=k(),de(G.$$.fragment),se=k(),de(W.$$.fragment),A=k(),de(j.$$.fragment),L=k(),de(R.$$.fragment),Y=k(),de(re.$$.fragment),ke=k(),de(le.$$.fragment),He=k(),de(X.$$.fragment),me=k(),de(H.$$.fragment),et(n.src,s=Dp)||g(n,"src",s),g(n,"alt","MatchHome"),g(n,"class","nav__logo svelte-1viw6tr"),et(o.src,a=cy)||g(o,"src",a),g(o,"class","nav__img svelte-1viw6tr"),g(o,"alt","menu"),g(r,"class","nav__label svelte-1viw6tr"),g(r,"for","menu"),g(c,"type","checkbox"),g(c,"id","menu"),g(c,"class","nav__input svelte-1viw6tr"),g(f,"class","nav__menu svelte-1viw6tr"),g(e,"class","nav__container svelte-1viw6tr")},m(P,C){w(P,e,C),u(e,n),u(e,i),u(e,r),u(r,o),u(e,l),u(e,c),u(e,h),u(e,f),ue(d,f,null),u(f,m),ue(_,f,null),u(f,v),ue(y,f,null),u(f,E),ue(I,f,null),u(f,O),ue(D,f,null),u(f,$),ue(F,f,null),u(f,N),ue(q,f,null),u(f,B),ue(M,f,null),w(P,U,C),ue(z,P,C),w(P,J,C),ue(ie,P,C),w(P,Q,C),ue(G,P,C),w(P,se,C),ue(W,P,C),w(P,A,C),ue(j,P,C),w(P,L,C),ue(R,P,C),w(P,Y,C),ue(re,P,C),w(P,ke,C),ue(le,P,C),w(P,He,C),ue(X,P,C),w(P,me,C),ue(H,P,C),ye=!0},p(P,C){const ve={};C&2&&(ve.$$scope={dirty:C,ctx:P}),d.$set(ve);const Ce={};C&2&&(Ce.$$scope={dirty:C,ctx:P}),_.$set(Ce);const rt={};C&2&&(rt.$$scope={dirty:C,ctx:P}),y.$set(rt);const x={};C&2&&(x.$$scope={dirty:C,ctx:P}),I.$set(x);const Pe={};C&2&&(Pe.$$scope={dirty:C,ctx:P}),D.$set(Pe);const bn={};C&2&&(bn.$$scope={dirty:C,ctx:P}),F.$set(bn);const St={};C&2&&(St.$$scope={dirty:C,ctx:P}),q.$set(St);const At={};C&2&&(At.$$scope={dirty:C,ctx:P}),M.$set(At);const nn={};C&2&&(nn.$$scope={dirty:C,ctx:P}),z.$set(nn);const xt={};C&2&&(xt.$$scope={dirty:C,ctx:P}),ie.$set(xt);const Mt={};C&2&&(Mt.$$scope={dirty:C,ctx:P}),G.$set(Mt);const Ht={};C&2&&(Ht.$$scope={dirty:C,ctx:P}),W.$set(Ht);const ht={};C&2&&(ht.$$scope={dirty:C,ctx:P}),j.$set(ht);const pn={};C&2&&(pn.$$scope={dirty:C,ctx:P}),R.$set(pn);const ot={};C&2&&(ot.$$scope={dirty:C,ctx:P}),re.$set(ot);const ft={};C&2&&(ft.$$scope={dirty:C,ctx:P}),le.$set(ft);const sn={};C&2&&(sn.$$scope={dirty:C,ctx:P}),X.$set(sn);const lt={};C&2&&(lt.$$scope={dirty:C,ctx:P}),H.$set(lt)},i(P){ye||(K(d.$$.fragment,P),K(_.$$.fragment,P),K(y.$$.fragment,P),K(I.$$.fragment,P),K(D.$$.fragment,P),K(F.$$.fragment,P),K(q.$$.fragment,P),K(M.$$.fragment,P),K(z.$$.fragment,P),K(ie.$$.fragment,P),K(G.$$.fragment,P),K(W.$$.fragment,P),K(j.$$.fragment,P),K(R.$$.fragment,P),K(re.$$.fragment,P),K(le.$$.fragment,P),K(X.$$.fragment,P),K(H.$$.fragment,P),ye=!0)},o(P){Z(d.$$.fragment,P),Z(_.$$.fragment,P),Z(y.$$.fragment,P),Z(I.$$.fragment,P),Z(D.$$.fragment,P),Z(F.$$.fragment,P),Z(q.$$.fragment,P),Z(M.$$.fragment,P),Z(z.$$.fragment,P),Z(ie.$$.fragment,P),Z(G.$$.fragment,P),Z(W.$$.fragment,P),Z(j.$$.fragment,P),Z(R.$$.fragment,P),Z(re.$$.fragment,P),Z(le.$$.fragment,P),Z(X.$$.fragment,P),Z(H.$$.fragment,P),ye=!1},d(P){P&&b(e),he(d),he(_),he(y),he(I),he(D),he(F),he(q),he(M),P&&b(U),he(z,P),P&&b(J),he(ie,P),P&&b(Q),he(G,P),P&&b(se),he(W,P),P&&b(A),he(j,P),P&&b(L),he(R,P),P&&b(Y),he(re,P),P&&b(ke),he(le,P),P&&b(He),he(X,P),P&&b(me),he(H,P)}}}function YC(t){let e,n,s;return n=new tc({props:{$$slots:{default:[QC]},$$scope:{ctx:t}}}),{c(){e=p("nav"),de(n.$$.fragment),g(e,"class","nav svelte-1viw6tr")},m(i,r){w(i,e,r),ue(n,e,null),s=!0},p(i,[r]){const o={};r&2&&(o.$$scope={dirty:r,ctx:i}),n.$set(o)},i(i){s||(K(n.$$.fragment,i),s=!0)},o(i){Z(n.$$.fragment,i),s=!1},d(i){i&&b(e),he(n)}}}async function XC(){}function xC(t){return pT.subscribe(e=>{}),[]}class JC extends Qe{constructor(e){super(),We(this,e,xC,YC,ze,{})}}function Xd(t){let e,n,s,i,r,o,a;return{c(){e=p("div"),n=p("h1"),n.textContent="Bienvendo a",s=k(),i=p("img"),o=k(),a=p("div"),a.innerHTML=`<p class="desc__intro svelte-1kx2964">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod aut aliquam, expedita perferendis consequatur modi omnis! Nostrum iste necessitatibus quisquam numquam, aliquam ipsum. Sit, similique quis. Fuga vitae possimus quisquam quam. Unde accusantium neque veniam reprehenderit, laborum, magni ut quasi asperiores a amet fugiat non, sapiente obcaecati voluptas ab! Nostrum!</p> 
        <p><strong>www.matchhome.net</strong></p>`,g(n,"class","title svelte-1kx2964"),et(i.src,r=Dp)||g(i,"src",r),g(i,"alt","MatchHome"),g(i,"class","svelte-1kx2964"),g(a,"class",""),g(e,"class","intro svelte-1kx2964")},m(l,c){w(l,e,c),u(e,n),u(e,s),u(e,i),u(e,o),u(e,a)},p:fe,d(l){l&&b(e)}}}function ZC(t){let e,n,s,i,r;n=new JC({});let o=t[0]&&Xd();return{c(){e=p("nav"),de(n.$$.fragment),s=k(),i=p("body"),o&&o.c(),g(e,"class","navBar")},m(a,l){w(a,e,l),ue(n,e,null),w(a,s,l),w(a,i,l),o&&o.m(i,null),r=!0},p(a,[l]){a[0]?o?o.p(a,l):(o=Xd(),o.c(),o.m(i,null)):o&&(o.d(1),o=null)},i(a){r||(K(n.$$.fragment,a),r=!0)},o(a){Z(n.$$.fragment,a),r=!1},d(a){a&&b(e),he(n),a&&b(s),a&&b(i),o&&o.d()}}}function eS(t,e,n){let s=!0;return setTimeout(()=>{n(0,s=!1)},1500),[s]}class tS extends Qe{constructor(e){super(),We(this,e,eS,ZC,ze,{})}}new tS({target:document.getElementById("app")});
