(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function fe(){}const Xd=t=>t;function Ut(t,e){for(const n in e)t[n]=e[n];return t}function xd(t){return t()}function pu(){return Object.create(null)}function Ze(t){t.forEach(xd)}function Wo(t){return typeof t=="function"}function We(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let Xr;function st(t,e){return Xr||(Xr=document.createElement("a")),Xr.href=e,t===Xr.href}function q_(t){return Object.keys(t).length===0}function Kl(t,...e){if(t==null)return fe;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function pi(t){let e;return Kl(t,n=>e=n)(),e}function Me(t,e,n){t.$$.on_destroy.push(Kl(e,n))}function zl(t,e,n,s){if(t){const i=Jd(t,e,n,s);return t[0](i)}}function Jd(t,e,n,s){return t[1]&&s?Ut(n.ctx.slice(),t[1](s(e))):n.ctx}function Gl(t,e,n,s){if(t[2]&&s){const i=t[2](s(n));if(e.dirty===void 0)return i;if(typeof i=="object"){const r=[],o=Math.max(e.dirty.length,i.length);for(let a=0;a<o;a+=1)r[a]=e.dirty[a]|i[a];return r}return e.dirty|i}return e.dirty}function Wl(t,e,n,s,i,r){if(i){const o=Jd(e,n,s,r);t.p(o,i)}}function Ql(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let s=0;s<n;s++)e[s]=-1;return e}return-1}function go(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function _o(t,e){const n={};e=new Set(e);for(const s in t)!e.has(s)&&s[0]!=="$"&&(n[s]=t[s]);return n}function mu(t){return t==null?"":t}function Ve(t,e,n){return t.set(n),e}const Zd=typeof window<"u";let H_=Zd?()=>window.performance.now():()=>Date.now(),Yl=Zd?t=>requestAnimationFrame(t):fe;const ci=new Set;function ep(t){ci.forEach(e=>{e.c(t)||(ci.delete(e),e.f())}),ci.size!==0&&Yl(ep)}function K_(t){let e;return ci.size===0&&Yl(ep),{promise:new Promise(n=>{ci.add(e={c:t,f:n})}),abort(){ci.delete(e)}}}function u(t,e){t.appendChild(e)}function tp(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function z_(t){const e=p("style");return G_(tp(t),e),e.sheet}function G_(t,e){return u(t.head||t,e),e.sheet}function w(t,e,n){t.insertBefore(e,n||null)}function b(t){t.parentNode.removeChild(t)}function ze(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function p(t){return document.createElement(t)}function S(t){return document.createTextNode(t)}function k(){return S(" ")}function sn(){return S("")}function q(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function vn(t){return function(e){return e.preventDefault(),t.call(this,e)}}function g(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Ln(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const s in e)e[s]==null?t.removeAttribute(s):s==="style"?t.style.cssText=e[s]:s==="__value"?t.value=t[s]=e[s]:n[s]&&n[s].set?t[s]=e[s]:g(t,s,e[s])}function qt(t,e,n){const s=new Set;for(let i=0;i<t.length;i+=1)t[i].checked&&s.add(t[i].__value);return n||s.delete(e),Array.from(s)}function ms(t){return t===""?null:+t}function W_(t){return Array.from(t.childNodes)}function ie(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function ge(t,e){t.value=e==null?"":e}function Fe(t,e){for(let n=0;n<t.options.length;n+=1){const s=t.options[n];if(s.__value===e){s.selected=!0;return}}t.selectedIndex=-1}function jt(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}function ks(t,e,n){t.classList[n?"add":"remove"](e)}function np(t,e,{bubbles:n=!1,cancelable:s=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,s,e),i}function gu(t,e){return new t(e)}const vo=new Map;let yo=0;function Q_(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Y_(t,e){const n={stylesheet:z_(e),rules:{}};return vo.set(t,n),n}function _u(t,e,n,s,i,r,o,a=0){const l=16.666/s;let c=`{
`;for(let y=0;y<=1;y+=l){const E=e+(n-e)*r(y);c+=y*100+`%{${o(E,1-E)}}
`}const h=c+`100% {${o(n,1-n)}}
}`,f=`__svelte_${Q_(h)}_${a}`,d=tp(t),{stylesheet:m,rules:_}=vo.get(d)||Y_(d,t);_[f]||(_[f]=!0,m.insertRule(`@keyframes ${f} ${h}`,m.cssRules.length));const v=t.style.animation||"";return t.style.animation=`${v?`${v}, `:""}${f} ${s}ms linear ${i}ms 1 both`,yo+=1,f}function X_(t,e){const n=(t.style.animation||"").split(", "),s=n.filter(e?r=>r.indexOf(e)<0:r=>r.indexOf("__svelte")===-1),i=n.length-s.length;i&&(t.style.animation=s.join(", "),yo-=i,yo||x_())}function x_(){Yl(()=>{yo||(vo.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&b(e)}),vo.clear())})}let Zi;function zi(t){Zi=t}function vr(){if(!Zi)throw new Error("Function called outside component initialization");return Zi}function J_(t){vr().$$.on_mount.push(t)}function Z_(t){vr().$$.on_destroy.push(t)}function sp(){const t=vr();return(e,n,{cancelable:s=!1}={})=>{const i=t.$$.callbacks[e];if(i){const r=np(e,n,{cancelable:s});return i.slice().forEach(o=>{o.call(t,r)}),!r.defaultPrevented}return!0}}function Gi(t,e){return vr().$$.context.set(t,e),e}function Es(t){return vr().$$.context.get(t)}function ev(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(s=>s.call(this,e))}const Ui=[],Jn=[],ro=[],ol=[],ip=Promise.resolve();let al=!1;function rp(){al||(al=!0,ip.then(op))}function tv(){return rp(),ip}function et(t){ro.push(t)}function Vs(t){ol.push(t)}const Na=new Set;let xr=0;function op(){const t=Zi;do{for(;xr<Ui.length;){const e=Ui[xr];xr++,zi(e),nv(e.$$)}for(zi(null),Ui.length=0,xr=0;Jn.length;)Jn.pop()();for(let e=0;e<ro.length;e+=1){const n=ro[e];Na.has(n)||(Na.add(n),n())}ro.length=0}while(Ui.length);for(;ol.length;)ol.pop()();al=!1,Na.clear(),zi(t)}function nv(t){if(t.fragment!==null){t.update(),Ze(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(et)}}let Mi;function sv(){return Mi||(Mi=Promise.resolve(),Mi.then(()=>{Mi=null})),Mi}function Oa(t,e,n){t.dispatchEvent(np(`${e?"intro":"outro"}${n}`))}const oo=new Set;let Wn;function It(){Wn={r:0,c:[],p:Wn}}function Tt(){Wn.r||Ze(Wn.c),Wn=Wn.p}function H(t,e){t&&t.i&&(oo.delete(t),t.i(e))}function X(t,e,n,s){if(t&&t.o){if(oo.has(t))return;oo.add(t),Wn.c.push(()=>{oo.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}const iv={duration:0};function pn(t,e,n,s){let i=e(t,n),r=s?0:1,o=null,a=null,l=null;function c(){l&&X_(t,l)}function h(d,m){const _=d.b-r;return m*=Math.abs(_),{a:r,b:d.b,d:_,duration:m,start:d.start,end:d.start+m,group:d.group}}function f(d){const{delay:m=0,duration:_=300,easing:v=Xd,tick:y=fe,css:E}=i||iv,I={start:H_()+m,b:d};d||(I.group=Wn,Wn.r+=1),o||a?a=I:(E&&(c(),l=_u(t,r,d,_,m,v,E)),d&&y(0,1),o=h(I,_),et(()=>Oa(t,d,"start")),K_(L=>{if(a&&L>a.start&&(o=h(a,_),a=null,Oa(t,o.b,"start"),E&&(c(),l=_u(t,r,o.b,o.duration,0,v,i.css))),o){if(L>=o.end)y(r=o.b,1-r),Oa(t,o.b,"end"),a||(o.b?c():--o.group.r||Ze(o.group.c)),o=null;else if(L>=o.start){const A=L-o.start;r=o.a+o.d*v(A/o.duration),y(r,1-r)}}return!!(o||a)}))}return{run(d){Wo(i)?sv().then(()=>{i=i(),f(d)}):f(d)},end(){c(),o=a=null}}}function yn(t,e){const n={},s={},i={$$scope:1};let r=t.length;for(;r--;){const o=t[r],a=e[r];if(a){for(const l in o)l in a||(s[l]=1);for(const l in a)i[l]||(n[l]=a[l],i[l]=1);t[r]=a}else for(const l in o)i[l]=1}for(const o in s)o in n||(n[o]=void 0);return n}function Zn(t){return typeof t=="object"&&t!==null?t:{}}function js(t,e,n){const s=t.$$.props[e];s!==void 0&&(t.$$.bound[s]=n,n(t.$$.ctx[s]))}function de(t){t&&t.c()}function ue(t,e,n,s){const{fragment:i,after_update:r}=t.$$;i&&i.m(e,n),s||et(()=>{const o=t.$$.on_mount.map(xd).filter(Wo);t.$$.on_destroy?t.$$.on_destroy.push(...o):Ze(o),t.$$.on_mount=[]}),r.forEach(et)}function he(t,e){const n=t.$$;n.fragment!==null&&(Ze(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function rv(t,e){t.$$.dirty[0]===-1&&(Ui.push(t),rp(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Xe(t,e,n,s,i,r,o,a=[-1]){const l=Zi;zi(t);const c=t.$$={fragment:null,ctx:[],props:r,update:fe,not_equal:i,bound:pu(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:pu(),dirty:a,skip_bound:!1,root:e.target||l.$$.root};o&&o(c.root);let h=!1;if(c.ctx=n?n(t,e.props||{},(f,d,...m)=>{const _=m.length?m[0]:d;return c.ctx&&i(c.ctx[f],c.ctx[f]=_)&&(!c.skip_bound&&c.bound[f]&&c.bound[f](_),h&&rv(t,f)),d}):[],c.update(),h=!0,Ze(c.before_update),c.fragment=s?s(c.ctx):!1,e.target){if(e.hydrate){const f=W_(e.target);c.fragment&&c.fragment.l(f),f.forEach(b)}else c.fragment&&c.fragment.c();e.intro&&H(t.$$.fragment),ue(t,e.target,e.anchor,e.customElement),op()}zi(l)}class xe{$destroy(){he(this,1),this.$destroy=fe}$on(e,n){if(!Wo(n))return fe;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const i=s.indexOf(n);i!==-1&&s.splice(i,1)}}$set(e){this.$$set&&!q_(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const vu=t=>typeof t>"u",ap=t=>typeof t=="function",lp=t=>typeof t=="number";function ov(t){return!t.defaultPrevented&&t.button===0&&!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function cp(){let t=0;return()=>t++}function av(){return Math.random().toString(36).substring(2)}const Is=typeof window>"u";function up(t,e,n){return t.addEventListener(e,n),()=>t.removeEventListener(e,n)}const ll=(t,e)=>t?{}:{style:e},ri=t=>({"aria-hidden":"true",...ll(t,"display:none;")}),si=[];function lv(t,e){return{subscribe:St(t,e).subscribe}}function St(t,e=fe){let n;const s=new Set;function i(a){if(We(t,a)&&(t=a,n)){const l=!si.length;for(const c of s)c[1](),si.push(c,t);if(l){for(let c=0;c<si.length;c+=2)si[c][0](si[c+1]);si.length=0}}}function r(a){i(a(t))}function o(a,l=fe){const c=[a,l];return s.add(c),s.size===1&&(n=e(i)||fe),a(t),()=>{s.delete(c),s.size===0&&(n(),n=null)}}return{set:i,update:r,subscribe:o}}function cv(t,e,n){const s=!Array.isArray(t),i=s?[t]:t,r=e.length<2;return lv(n,o=>{let a=!1;const l=[];let c=0,h=fe;const f=()=>{if(c)return;h();const m=e(s?l[0]:l,o);r?o(m):h=Wo(m)?m:fe},d=i.map((m,_)=>Kl(m,v=>{l[_]=v,c&=~(1<<_),a&&f()},()=>{c|=1<<_}));return a=!0,f(),function(){Ze(d),h()}})}const yr=t=>`@@svnav-ctx__${t}`,cl=yr("LOCATION"),mi=yr("ROUTER"),hp=yr("ROUTE"),uv=yr("ROUTE_PARAMS"),hv=yr("FOCUS_ELEM"),fp=/^:(.+)/,Fi=(t,e,n)=>t.substr(e,n),ul=(t,e)=>Fi(t,0,e.length)===e,fv=t=>t==="",dv=t=>fp.test(t),dp=t=>t[0]==="*",pv=t=>t.replace(/\*.*$/,""),pp=t=>t.replace(/(^\/+|\/+$)/g,"");function Bn(t,e=!1){const n=pp(t).split("/");return e?n.filter(Boolean):n}const La=(t,e)=>t+(e?`?${e}`:""),Xl=t=>`/${pp(t)}`;function br(...t){const e=s=>Bn(s,!0).join("/"),n=t.map(e).join("/");return Xl(n)}const xl=1,Qo=2,qs=3,mv=4,mp=5,gv=6,gp=7,_v=8,vv=9,_p=10,vp=11,yv={[xl]:"Link",[Qo]:"Route",[qs]:"Router",[mv]:"useFocus",[mp]:"useLocation",[gv]:"useMatch",[gp]:"useNavigate",[_v]:"useParams",[vv]:"useResolvable",[_p]:"useResolve",[vp]:"navigate"},Jl=t=>yv[t];function bv(t,e){let n;return t===Qo?n=e.path?`path="${e.path}"`:"default":t===xl?n=`to="${e.to}"`:t===qs&&(n=`basepath="${e.basepath||""}"`),`<${Jl(t)} ${n||""} />`}function wv(t,e,n,s){const i=n&&bv(s||t,n),r=i?`

Occurred in: ${i}`:"",o=Jl(t),a=ap(e)?e(o):e;return`<${o}> ${a}${r}`}const yp=t=>(...e)=>t(wv(...e)),bp=yp(t=>{throw new Error(t)}),bo=yp(console.warn),yu=4,kv=3,Ev=2,Iv=1,Tv=1;function Cv(t,e){const n=t.default?0:Bn(t.fullPath).reduce((s,i)=>{let r=s;return r+=yu,fv(i)?r+=Tv:dv(i)?r+=Ev:dp(i)?r-=yu+Iv:r+=kv,r},0);return{route:t,score:n,index:e}}function Sv(t){return t.map(Cv).sort((e,n)=>e.score<n.score?1:e.score>n.score?-1:e.index-n.index)}function wp(t,e){let n,s;const[i]=e.split("?"),r=Bn(i),o=r[0]==="",a=Sv(t);for(let l=0,c=a.length;l<c;l++){const{route:h}=a[l];let f=!1;const d={},m=E=>({...h,params:d,uri:E});if(h.default){s=m(e);continue}const _=Bn(h.fullPath),v=Math.max(r.length,_.length);let y=0;for(;y<v;y++){const E=_[y],I=r[y];if(!vu(E)&&dp(E)){const A=E==="*"?"*":E.slice(1);d[A]=r.slice(y).map(decodeURIComponent).join("/");break}if(vu(I)){f=!0;break}const L=fp.exec(E);if(L&&!o){const A=decodeURIComponent(I);d[L[1]]=A}else if(E!==I){f=!0;break}}if(!f){n=m(br(...r.slice(0,y)));break}}return n||s||null}function kp(t,e){return wp([t],e)}function Av(t,e){if(ul(t,"/"))return t;const[n,s]=t.split("?"),[i]=e.split("?"),r=Bn(n),o=Bn(i);if(r[0]==="")return La(i,s);if(!ul(r[0],".")){const c=o.concat(r).join("/");return La((i==="/"?"":"/")+c,s)}const a=o.concat(r),l=[];return a.forEach(c=>{c===".."?l.pop():c!=="."&&l.push(c)}),La(`/${l.join("/")}`,s)}function bu(t,e){const{pathname:n,hash:s="",search:i="",state:r}=t,o=Bn(e,!0),a=Bn(n,!0);for(;o.length;)o[0]!==a[0]&&bp(qs,`Invalid state: All locations must begin with the basepath "${e}", found "${n}"`),o.shift(),a.shift();return{pathname:br(...a),hash:s,search:i,state:r}}const wu=t=>t.length===1?"":t,Zl=t=>{const e=t.indexOf("?"),n=t.indexOf("#"),s=e!==-1,i=n!==-1,r=i?wu(Fi(t,n)):"",o=i?Fi(t,0,n):t,a=s?wu(Fi(o,e)):"";return{pathname:(s?Fi(o,0,e):o)||"/",search:a,hash:r}},Dv=t=>{const{pathname:e,search:n,hash:s}=t;return e+n+s};function Pv(t,e,n){return br(n,Av(t,e))}function Rv(t,e){const n=Xl(pv(t)),s=Bn(n,!0),i=Bn(e,!0).slice(0,s.length),r=kp({fullPath:n},br(...i));return r&&r.uri}const Ma="POP",Nv="PUSH",Ov="REPLACE";function $a(t){return{...t.location,pathname:encodeURI(decodeURI(t.location.pathname)),state:t.history.state,_key:t.history.state&&t.history.state._key||"initial"}}function Lv(t){let e=[],n=$a(t),s=Ma;const i=(r=e)=>r.forEach(o=>o({location:n,action:s}));return{get location(){return n},listen(r){e.push(r);const o=()=>{n=$a(t),s=Ma,i([r])};i([r]);const a=up(t,"popstate",o);return()=>{a(),e=e.filter(l=>l!==r)}},navigate(r,o){const{state:a={},replace:l=!1}=o||{};if(s=l?Ov:Nv,lp(r))o&&bo(vp,"Navigation options (state or replace) are not supported, when passing a number as the first argument to navigate. They are ignored."),s=Ma,t.history.go(r);else{const c={...a,_key:av()};try{t.history[l?"replaceState":"pushState"](c,"",r)}catch{t.location[l?"replace":"assign"](r)}}n=$a(t),i()}}}function Ua(t,e){return{...Zl(e),state:t}}function Mv(t="/"){let e=0,n=[Ua(null,t)];return{get entries(){return n},get location(){return n[e]},addEventListener(){},removeEventListener(){},history:{get state(){return n[e].state},pushState(s,i,r){e++,n=n.slice(0,e),n.push(Ua(s,r))},replaceState(s,i,r){n[e]=Ua(s,r)},go(s){const i=e+s;i<0||i>n.length-1||(e=i)}}}}const $v=!!(!Is&&window.document&&window.document.createElement),Uv=!Is&&window.location.origin==="null",Fv=Lv($v&&!Uv?window:Mv());let Gn=null,Ep=!0;function Bv(t,e){const n=document.querySelectorAll("[data-svnav-router]");for(let s=0;s<n.length;s++){const i=n[s],r=Number(i.dataset.svnavRouter);if(r===t)return!0;if(r===e)return!1}return!1}function Vv(t){(!Gn||t.level>Gn.level||t.level===Gn.level&&Bv(t.routerId,Gn.routerId))&&(Gn=t)}function jv(){Gn=null}function qv(){Ep=!1}function ku(t){if(!t)return!1;const e="tabindex";try{if(!t.hasAttribute(e)){t.setAttribute(e,"-1");let n;n=up(t,"blur",()=>{t.removeAttribute(e),n()})}return t.focus(),document.activeElement===t}catch{return!1}}function Hv(t,e){return Number(t.dataset.svnavRouteEnd)===e}function Kv(t){return/^H[1-6]$/i.test(t.tagName)}function Eu(t,e=document){return e.querySelector(t)}function zv(t){let n=Eu(`[data-svnav-route-start="${t}"]`).nextElementSibling;for(;!Hv(n,t);){if(Kv(n))return n;const s=Eu("h1,h2,h3,h4,h5,h6",n);if(s)return s;n=n.nextElementSibling}return null}function Gv(t){Promise.resolve(pi(t.focusElement)).then(e=>{const n=e||zv(t.id);n||bo(qs,`Could not find an element to focus. You should always render a header for accessibility reasons, or set a custom focus element via the "useFocus" hook. If you don't want this Route or Router to manage focus, pass "primary={false}" to it.`,t,Qo),!ku(n)&&ku(document.documentElement)})}const Wv=(t,e,n)=>(s,i)=>tv().then(()=>{if(!Gn||Ep){qv();return}if(s&&Gv(Gn.route),t.announcements&&i){const{path:r,fullPath:o,meta:a,params:l,uri:c}=Gn.route,h=t.createAnnouncement({path:r,fullPath:o,meta:a,params:l,uri:c},pi(n));Promise.resolve(h).then(f=>{e.set(f)})}jv()}),Iu="position:fixed;top:-1px;left:0;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;";function Qv(t){let e,n,s=[{role:"status"},{"aria-atomic":"true"},{"aria-live":"polite"},{"data-svnav-announcer":""},ll(t[6],Iu)],i={};for(let r=0;r<s.length;r+=1)i=Ut(i,s[r]);return{c(){e=p("div"),n=S(t[0]),Ln(e,i)},m(r,o){w(r,e,o),u(e,n)},p(r,o){o[0]&1&&ie(n,r[0]),Ln(e,i=yn(s,[{role:"status"},{"aria-atomic":"true"},{"aria-live":"polite"},{"data-svnav-announcer":""},ll(r[6],Iu)]))},d(r){r&&b(e)}}}function Yv(t){let e,n,s,i,r,o=[ri(t[6]),{"data-svnav-router":t[3]}],a={};for(let f=0;f<o.length;f+=1)a=Ut(a,o[f]);const l=t[22].default,c=zl(l,t,t[21],null);let h=t[2]&&t[4]&&t[1].announcements&&Qv(t);return{c(){e=p("div"),n=k(),c&&c.c(),s=k(),h&&h.c(),i=sn(),Ln(e,a)},m(f,d){w(f,e,d),w(f,n,d),c&&c.m(f,d),w(f,s,d),h&&h.m(f,d),w(f,i,d),r=!0},p(f,d){Ln(e,a=yn(o,[ri(f[6]),{"data-svnav-router":f[3]}])),c&&c.p&&(!r||d[0]&2097152)&&Wl(c,l,f,f[21],r?Gl(l,f[21],d,null):Ql(f[21]),null),f[2]&&f[4]&&f[1].announcements&&h.p(f,d)},i(f){r||(H(c,f),r=!0)},o(f){X(c,f),r=!1},d(f){f&&b(e),f&&b(n),c&&c.d(f),f&&b(s),h&&h.d(f),f&&b(i)}}}const Xv=cp(),Tu="/";function xv(t,e,n){let s,i,r,o,a,{$$slots:l={},$$scope:c}=e,{basepath:h=Tu}=e,{url:f=null}=e,{history:d=Fv}=e,{primary:m=!0}=e,{a11y:_={}}=e,{disableInlineStyles:v=!1}=e;const y={createAnnouncement:N=>`Navigated to ${N.uri}`,announcements:!0,..._},E=h,I=Xl(h),L=Es(cl),A=Es(mi),M=!L,F=Xv(),O=m&&!(A&&!A.manageFocus),z=St("");Me(t,z,N=>n(0,a=N));const $=A?A.disableInlineStyles:v,U=St([]);Me(t,U,N=>n(20,o=N));const j=St(null);Me(t,j,N=>n(18,i=N));let K=!1;const Y=M?0:A.level+1,W=M?St((()=>bu(Is?Zl(f):d.location,I))()):L;Me(t,W,N=>n(17,s=N));const G=St(s);Me(t,G,N=>n(19,r=N));const x=Wv(y,z,W),Q=N=>P=>P.filter(J=>J.id!==N);function C(N){if(Is){if(K)return;const P=kp(N,s.pathname);if(P)return K=!0,P}else U.update(P=>{const J=Q(N.id)(P);return J.push(N),J})}function R(N){U.update(Q(N))}return!M&&h!==Tu&&bo(qs,'Only top-level Routers can have a "basepath" prop. It is ignored.',{basepath:h}),M&&(J_(()=>d.listen(P=>{const J=bu(P.location,I);G.set(s),W.set(J)})),Gi(cl,W)),Gi(mi,{activeRoute:j,registerRoute:C,unregisterRoute:R,manageFocus:O,level:Y,id:F,history:M?d:A.history,basepath:M?I:A.basepath,disableInlineStyles:$}),t.$$set=N=>{"basepath"in N&&n(11,h=N.basepath),"url"in N&&n(12,f=N.url),"history"in N&&n(13,d=N.history),"primary"in N&&n(14,m=N.primary),"a11y"in N&&n(15,_=N.a11y),"disableInlineStyles"in N&&n(16,v=N.disableInlineStyles),"$$scope"in N&&n(21,c=N.$$scope)},t.$$.update=()=>{if(t.$$.dirty[0]&2048&&h!==E&&bo(qs,'You cannot change the "basepath" prop. It is ignored.'),t.$$.dirty[0]&1179648){const N=wp(o,s.pathname);j.set(N)}if(t.$$.dirty[0]&655360&&M){const N=!!s.hash,P=!N&&O,J=!N||s.pathname!==r.pathname;x(P,J)}t.$$.dirty[0]&262144&&O&&i&&i.primary&&Vv({level:Y,routerId:F,route:i})},[a,y,M,F,O,z,$,U,j,W,G,h,f,d,m,_,v,s,i,r,o,c,l]}class ec extends xe{constructor(e){super(),Xe(this,e,xv,Yv,We,{basepath:11,url:12,history:13,primary:14,a11y:15,disableInlineStyles:16},null,[-1,-1])}}function wr(t,e,n=mi,s=qs){Es(n)||bp(t,r=>`You cannot use ${r} outside of a ${Jl(s)}.`,e)}const Jv=t=>{const{subscribe:e}=Es(t);return{subscribe:e}};function Ip(){return wr(mp),Jv(cl)}function Tp(){const{history:t}=Es(mi);return t}function Cp(){const t=Es(hp);return t?cv(t,e=>e.base):St("/")}function Sp(){wr(_p);const t=Cp(),{basepath:e}=Es(mi);return s=>Pv(s,pi(t),e)}function Xs(){wr(gp);const t=Sp(),{navigate:e}=Tp();return(s,i)=>{const r=lp(s)?s:t(s);return e(r,i)}}const Zv=t=>({params:t&16,location:t&8}),Cu=t=>({params:Is?pi(t[10]):t[4],location:t[3],navigate:t[11]});function Su(t){let e,n;return e=new ec({props:{primary:t[1],$$slots:{default:[ny]},$$scope:{ctx:t}}}),{c(){de(e.$$.fragment)},m(s,i){ue(e,s,i),n=!0},p(s,i){const r={};i&2&&(r.primary=s[1]),i&528409&&(r.$$scope={dirty:i,ctx:s}),e.$set(r)},i(s){n||(H(e.$$.fragment,s),n=!0)},o(s){X(e.$$.fragment,s),n=!1},d(s){he(e,s)}}}function ey(t){let e;const n=t[18].default,s=zl(n,t,t[19],Cu);return{c(){s&&s.c()},m(i,r){s&&s.m(i,r),e=!0},p(i,r){s&&s.p&&(!e||r&524312)&&Wl(s,n,i,i[19],e?Gl(n,i[19],r,Zv):Ql(i[19]),Cu)},i(i){e||(H(s,i),e=!0)},o(i){X(s,i),e=!1},d(i){s&&s.d(i)}}}function ty(t){let e,n,s;const i=[{location:t[3]},{navigate:t[11]},Is?pi(t[10]):t[4],t[12]];var r=t[0];function o(a){let l={};for(let c=0;c<i.length;c+=1)l=Ut(l,i[c]);return{props:l}}return r&&(e=gu(r,o())),{c(){e&&de(e.$$.fragment),n=sn()},m(a,l){e&&ue(e,a,l),w(a,n,l),s=!0},p(a,l){const c=l&7192?yn(i,[l&8&&{location:a[3]},l&2048&&{navigate:a[11]},l&1040&&Zn(Is?pi(a[10]):a[4]),l&4096&&Zn(a[12])]):{};if(r!==(r=a[0])){if(e){It();const h=e;X(h.$$.fragment,1,0,()=>{he(h,1)}),Tt()}r?(e=gu(r,o()),de(e.$$.fragment),H(e.$$.fragment,1),ue(e,n.parentNode,n)):e=null}else r&&e.$set(c)},i(a){s||(e&&H(e.$$.fragment,a),s=!0)},o(a){e&&X(e.$$.fragment,a),s=!1},d(a){a&&b(n),e&&he(e,a)}}}function ny(t){let e,n,s,i;const r=[ty,ey],o=[];function a(l,c){return l[0]!==null?0:1}return e=a(t),n=o[e]=r[e](t),{c(){n.c(),s=sn()},m(l,c){o[e].m(l,c),w(l,s,c),i=!0},p(l,c){let h=e;e=a(l),e===h?o[e].p(l,c):(It(),X(o[h],1,1,()=>{o[h]=null}),Tt(),n=o[e],n?n.p(l,c):(n=o[e]=r[e](l),n.c()),H(n,1),n.m(s.parentNode,s))},i(l){i||(H(n),i=!0)},o(l){X(n),i=!1},d(l){o[e].d(l),l&&b(s)}}}function sy(t){let e,n,s,i,r,o=[ri(t[7]),{"data-svnav-route-start":t[5]}],a={};for(let f=0;f<o.length;f+=1)a=Ut(a,o[f]);let l=t[2]&&Su(t),c=[ri(t[7]),{"data-svnav-route-end":t[5]}],h={};for(let f=0;f<c.length;f+=1)h=Ut(h,c[f]);return{c(){e=p("div"),n=k(),l&&l.c(),s=k(),i=p("div"),Ln(e,a),Ln(i,h)},m(f,d){w(f,e,d),w(f,n,d),l&&l.m(f,d),w(f,s,d),w(f,i,d),r=!0},p(f,[d]){Ln(e,a=yn(o,[ri(f[7]),{"data-svnav-route-start":f[5]}])),f[2]?l?(l.p(f,d),d&4&&H(l,1)):(l=Su(f),l.c(),H(l,1),l.m(s.parentNode,s)):l&&(It(),X(l,1,1,()=>{l=null}),Tt()),Ln(i,h=yn(c,[ri(f[7]),{"data-svnav-route-end":f[5]}]))},i(f){r||(H(l),r=!0)},o(f){X(l),r=!1},d(f){f&&b(e),f&&b(n),l&&l.d(f),f&&b(s),f&&b(i)}}}const iy=cp();function ry(t,e,n){let s;const i=["path","component","meta","primary"];let r=_o(e,i),o,a,l,c,{$$slots:h={},$$scope:f}=e,{path:d=""}=e,{component:m=null}=e,{meta:_={}}=e,{primary:v=!0}=e;wr(Qo,e);const y=iy(),{registerRoute:E,unregisterRoute:I,activeRoute:L,disableInlineStyles:A}=Es(mi);Me(t,L,K=>n(16,o=K));const M=Cp();Me(t,M,K=>n(17,l=K));const F=Ip();Me(t,F,K=>n(3,a=K));const O=St(null);let z;const $=St(),U=St({});Me(t,U,K=>n(4,c=K)),Gi(hp,$),Gi(uv,U),Gi(hv,O);const j=Xs();return Is||Z_(()=>I(y)),t.$$set=K=>{n(24,e=Ut(Ut({},e),go(K))),n(12,r=_o(e,i)),"path"in K&&n(13,d=K.path),"component"in K&&n(0,m=K.component),"meta"in K&&n(14,_=K.meta),"primary"in K&&n(1,v=K.primary),"$$scope"in K&&n(19,f=K.$$scope)},t.$$.update=()=>{if(t.$$.dirty&155658){const K=d==="",Y=br(l,d),ee={id:y,path:d,meta:_,default:K,fullPath:K?"":Y,base:K?l:Rv(Y,a.pathname),primary:v,focusElement:O};$.set(ee),n(15,z=E(ee))}if(t.$$.dirty&98304&&n(2,s=!!(z||o&&o.id===y)),t.$$.dirty&98308&&s){const{params:K}=z||o;U.set(K)}},e=go(e),[m,v,s,a,c,y,L,A,M,F,U,j,r,d,_,z,o,l,h,f]}class Nn extends xe{constructor(e){super(),Xe(this,e,ry,sy,We,{path:13,component:0,meta:14,primary:1})}}function oy(t){let e,n,s,i;const r=t[13].default,o=zl(r,t,t[12],null);let a=[{href:t[0]},t[2],t[1]],l={};for(let c=0;c<a.length;c+=1)l=Ut(l,a[c]);return{c(){e=p("a"),o&&o.c(),Ln(e,l)},m(c,h){w(c,e,h),o&&o.m(e,null),n=!0,s||(i=q(e,"click",t[4]),s=!0)},p(c,[h]){o&&o.p&&(!n||h&4096)&&Wl(o,r,c,c[12],n?Gl(r,c[12],h,null):Ql(c[12]),null),Ln(e,l=yn(a,[(!n||h&1)&&{href:c[0]},h&4&&c[2],h&2&&c[1]]))},i(c){n||(H(o,c),n=!0)},o(c){X(o,c),n=!1},d(c){c&&b(e),o&&o.d(c),s=!1,i()}}}function ay(t,e,n){let s,i,r,o,a,l;const c=["to","replace","state","getProps"];let h=_o(e,c),f,{$$slots:d={},$$scope:m}=e,{to:_}=e,{replace:v=!1}=e,{state:y={}}=e,{getProps:E=null}=e;wr(xl,e);const I=Ip();Me(t,I,O=>n(11,f=O));const L=sp(),A=Sp(),{navigate:M}=Tp();function F(O){L("click",O),ov(O)&&(O.preventDefault(),M(s,{state:y,replace:o||v}))}return t.$$set=O=>{n(19,e=Ut(Ut({},e),go(O))),n(18,h=_o(e,c)),"to"in O&&n(5,_=O.to),"replace"in O&&n(6,v=O.replace),"state"in O&&n(7,y=O.state),"getProps"in O&&n(8,E=O.getProps),"$$scope"in O&&n(12,m=O.$$scope)},t.$$.update=()=>{t.$$.dirty&2080&&n(0,s=A(_,f)),t.$$.dirty&2049&&n(10,i=ul(f.pathname,s)),t.$$.dirty&2049&&n(9,r=s===f.pathname),t.$$.dirty&2049&&(o=Zl(s)===Dv(f)),t.$$.dirty&512&&n(2,a=r?{"aria-current":"page"}:{}),n(1,l=(()=>{if(ap(E)){const O=E({location:f,href:s,isPartiallyCurrent:i,isCurrent:r});return{...h,...O}}return h})())},e=go(e),[s,l,a,I,F,_,v,y,E,r,i,f,m,d]}class fn extends xe{constructor(e){super(),Xe(this,e,ay,oy,We,{to:5,replace:6,state:7,getProps:8})}}const Ap="/assets/logoMH.9387adb0.png",ly="/assets/menu.9ddfd9f8.svg";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Dp=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},cy=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Pp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,h=r>>2,f=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,m=c&63;l||(m=64,o||(d=64)),s.push(n[h],n[f],n[d],n[m])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Dp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):cy(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||f==null)throw Error();const d=r<<2|a>>4;if(s.push(d),c!==64){const m=a<<4&240|c>>2;if(s.push(m),f!==64){const _=c<<6&192|f;s.push(_)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},uy=function(t){const e=Dp(t);return Pp.encodeByteArray(e,!0)},wo=function(t){return uy(t).replace(/\./g,"")},Rp=function(t){try{return Pp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function hy(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(xt())}function fy(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function dy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function py(){const t=xt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function my(){return typeof indexedDB=="object"}function gy(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}function _y(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const vy=()=>_y().__FIREBASE_DEFAULTS__,yy=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t=process.env.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},by=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Rp(t[1]);return e&&JSON.parse(e)},tc=()=>{try{return vy()||yy()||by()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Np=t=>{var e,n;return(n=(e=tc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},wy=t=>{const e=Np(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},ky=()=>{var t;return(t=tc())===null||t===void 0?void 0:t.config},Op=t=>{var e;return(e=tc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ey{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Iy(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[wo(JSON.stringify(n)),wo(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ty="FirebaseError";class os extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Ty,Object.setPrototypeOf(this,os.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,kr.prototype.create)}}class kr{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Cy(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new os(i,a,s)}}function Cy(t,e){return t.replace(Sy,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Sy=/\{\$([^}]+)}/g;function Ay(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ko(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Au(r)&&Au(o)){if(!ko(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Au(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Er(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Bi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function Vi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Dy(t,e){const n=new Py(t,e);return n.subscribe.bind(n)}class Py{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Ry(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=Fa),i.error===void 0&&(i.error=Fa),i.complete===void 0&&(i.complete=Fa);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ry(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Fa(){}/**
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
 */function Jt(t){return t&&t._delegate?t._delegate:t}class Hs{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Ny{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Ey;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ly(e))try{this.getOrInitializeService({instanceIdentifier:Os})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Os){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Os){return this.instances.has(e)}getOptions(e=Os){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Oy(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Os){return this.component?this.component.multipleInstances?e:Os:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Oy(t){return t===Os?void 0:t}function Ly(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class My{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Ny(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ge;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ge||(Ge={}));const $y={debug:Ge.DEBUG,verbose:Ge.VERBOSE,info:Ge.INFO,warn:Ge.WARN,error:Ge.ERROR,silent:Ge.SILENT},Uy=Ge.INFO,Fy={[Ge.DEBUG]:"log",[Ge.VERBOSE]:"log",[Ge.INFO]:"info",[Ge.WARN]:"warn",[Ge.ERROR]:"error"},By=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=Fy[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class nc{constructor(e){this.name=e,this._logLevel=Uy,this._logHandler=By,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ge))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?$y[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ge.DEBUG,...e),this._logHandler(this,Ge.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ge.VERBOSE,...e),this._logHandler(this,Ge.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ge.INFO,...e),this._logHandler(this,Ge.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ge.WARN,...e),this._logHandler(this,Ge.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ge.ERROR,...e),this._logHandler(this,Ge.ERROR,...e)}}const Vy=(t,e)=>e.some(n=>t instanceof n);let Du,Pu;function jy(){return Du||(Du=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function qy(){return Pu||(Pu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Lp=new WeakMap,hl=new WeakMap,Mp=new WeakMap,Ba=new WeakMap,sc=new WeakMap;function Hy(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(gs(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Lp.set(n,t)}).catch(()=>{}),sc.set(e,t),e}function Ky(t){if(hl.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});hl.set(t,e)}let fl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return hl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Mp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return gs(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function zy(t){fl=t(fl)}function Gy(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Va(this),e,...n);return Mp.set(s,e.sort?e.sort():[e]),gs(s)}:qy().includes(t)?function(...e){return t.apply(Va(this),e),gs(Lp.get(this))}:function(...e){return gs(t.apply(Va(this),e))}}function Wy(t){return typeof t=="function"?Gy(t):(t instanceof IDBTransaction&&Ky(t),Vy(t,jy())?new Proxy(t,fl):t)}function gs(t){if(t instanceof IDBRequest)return Hy(t);if(Ba.has(t))return Ba.get(t);const e=Wy(t);return e!==t&&(Ba.set(t,e),sc.set(e,t)),e}const Va=t=>sc.get(t);function Qy(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=gs(o);return s&&o.addEventListener("upgradeneeded",l=>{s(gs(o.result),l.oldVersion,l.newVersion,gs(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const Yy=["get","getKey","getAll","getAllKeys","count"],Xy=["put","add","delete","clear"],ja=new Map;function Ru(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ja.get(e))return ja.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Xy.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Yy.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return ja.set(e,r),r}zy(t=>({...t,get:(e,n,s)=>Ru(e,n)||t.get(e,n,s),has:(e,n)=>!!Ru(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xy{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Jy(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Jy(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const dl="@firebase/app",Nu="0.8.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ks=new nc("@firebase/app"),Zy="@firebase/app-compat",e0="@firebase/analytics-compat",t0="@firebase/analytics",n0="@firebase/app-check-compat",s0="@firebase/app-check",i0="@firebase/auth",r0="@firebase/auth-compat",o0="@firebase/database",a0="@firebase/database-compat",l0="@firebase/functions",c0="@firebase/functions-compat",u0="@firebase/installations",h0="@firebase/installations-compat",f0="@firebase/messaging",d0="@firebase/messaging-compat",p0="@firebase/performance",m0="@firebase/performance-compat",g0="@firebase/remote-config",_0="@firebase/remote-config-compat",v0="@firebase/storage",y0="@firebase/storage-compat",b0="@firebase/firestore",w0="@firebase/firestore-compat",k0="firebase",E0="9.12.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pl="[DEFAULT]",I0={[dl]:"fire-core",[Zy]:"fire-core-compat",[t0]:"fire-analytics",[e0]:"fire-analytics-compat",[s0]:"fire-app-check",[n0]:"fire-app-check-compat",[i0]:"fire-auth",[r0]:"fire-auth-compat",[o0]:"fire-rtdb",[a0]:"fire-rtdb-compat",[l0]:"fire-fn",[c0]:"fire-fn-compat",[u0]:"fire-iid",[h0]:"fire-iid-compat",[f0]:"fire-fcm",[d0]:"fire-fcm-compat",[p0]:"fire-perf",[m0]:"fire-perf-compat",[g0]:"fire-rc",[_0]:"fire-rc-compat",[v0]:"fire-gcs",[y0]:"fire-gcs-compat",[b0]:"fire-fst",[w0]:"fire-fst-compat","fire-js":"fire-js",[k0]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eo=new Map,ml=new Map;function T0(t,e){try{t.container.addComponent(e)}catch(n){Ks.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function gi(t){const e=t.name;if(ml.has(e))return Ks.debug(`There were multiple attempts to register component ${e}.`),!1;ml.set(e,t);for(const n of Eo.values())T0(n,t);return!0}function ic(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C0={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},_s=new kr("app","Firebase",C0);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S0{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Hs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw _s.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir=E0;function $p(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:pl,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw _s.create("bad-app-name",{appName:String(i)});if(n||(n=ky()),!n)throw _s.create("no-options");const r=Eo.get(i);if(r){if(ko(n,r.options)&&ko(s,r.config))return r;throw _s.create("duplicate-app",{appName:i})}const o=new My(i);for(const l of ml.values())o.addComponent(l);const a=new S0(n,s,o);return Eo.set(i,a),a}function Up(t=pl){const e=Eo.get(t);if(!e&&t===pl)return $p();if(!e)throw _s.create("no-app",{appName:t});return e}function vs(t,e,n){var s;let i=(s=I0[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ks.warn(a.join(" "));return}gi(new Hs(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const A0="firebase-heartbeat-database",D0=1,er="firebase-heartbeat-store";let qa=null;function Fp(){return qa||(qa=Qy(A0,D0,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(er)}}}).catch(t=>{throw _s.create("idb-open",{originalErrorMessage:t.message})})),qa}async function P0(t){var e;try{return(await Fp()).transaction(er).objectStore(er).get(Bp(t))}catch(n){if(n instanceof os)Ks.warn(n.message);else{const s=_s.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});Ks.warn(s.message)}}}async function Ou(t,e){var n;try{const i=(await Fp()).transaction(er,"readwrite");return await i.objectStore(er).put(e,Bp(t)),i.done}catch(s){if(s instanceof os)Ks.warn(s.message);else{const i=_s.create("idb-set",{originalErrorMessage:(n=s)===null||n===void 0?void 0:n.message});Ks.warn(i.message)}}}function Bp(t){return`${t.name}!${t.options.appId}`}/**
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
 */const R0=1024,N0=30*24*60*60*1e3;class O0{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new M0(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Lu();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=N0}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Lu(),{heartbeatsToSend:n,unsentEntries:s}=L0(this._heartbeatsCache.heartbeats),i=wo(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Lu(){return new Date().toISOString().substring(0,10)}function L0(t,e=R0){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Mu(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Mu(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class M0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return my()?gy().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await P0(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ou(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ou(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Mu(t){return wo(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $0(t){gi(new Hs("platform-logger",e=>new xy(e),"PRIVATE")),gi(new Hs("heartbeat",e=>new O0(e),"PRIVATE")),vs(dl,Nu,t),vs(dl,Nu,"esm2017"),vs("fire-js","")}$0("");var U0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},pe,rc=rc||{},Ie=U0||self;function Io(){}function Yo(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Tr(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function F0(t){return Object.prototype.hasOwnProperty.call(t,Ha)&&t[Ha]||(t[Ha]=++B0)}var Ha="closure_uid_"+(1e9*Math.random()>>>0),B0=0;function V0(t,e,n){return t.call.apply(t.bind,arguments)}function j0(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Yt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Yt=V0:Yt=j0,Yt.apply(null,arguments)}function Jr(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Gt(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function As(){this.s=this.s,this.o=this.o}var q0=0;As.prototype.s=!1;As.prototype.na=function(){!this.s&&(this.s=!0,this.M(),q0!=0)&&F0(this)};As.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Vp=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function oc(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function $u(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Yo(s)){const i=t.length||0,r=s.length||0;t.length=i+r;for(let o=0;o<r;o++)t[i+o]=s[o]}else t.push(s)}}function Xt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Xt.prototype.h=function(){this.defaultPrevented=!0};var H0=function(){if(!Ie.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Ie.addEventListener("test",Io,e),Ie.removeEventListener("test",Io,e)}catch{}return t}();function To(t){return/^[\s\xa0]*$/.test(t)}var Uu=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Ka(t,e){return t<e?-1:t>e?1:0}function Xo(){var t=Ie.navigator;return t&&(t=t.userAgent)?t:""}function On(t){return Xo().indexOf(t)!=-1}function ac(t){return ac[" "](t),t}ac[" "]=Io;function K0(t){var e=W0;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var z0=On("Opera"),_i=On("Trident")||On("MSIE"),jp=On("Edge"),gl=jp||_i,qp=On("Gecko")&&!(Xo().toLowerCase().indexOf("webkit")!=-1&&!On("Edge"))&&!(On("Trident")||On("MSIE"))&&!On("Edge"),G0=Xo().toLowerCase().indexOf("webkit")!=-1&&!On("Edge");function Hp(){var t=Ie.document;return t?t.documentMode:void 0}var Co;e:{var za="",Ga=function(){var t=Xo();if(qp)return/rv:([^\);]+)(\)|;)/.exec(t);if(jp)return/Edge\/([\d\.]+)/.exec(t);if(_i)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(G0)return/WebKit\/(\S+)/.exec(t);if(z0)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Ga&&(za=Ga?Ga[1]:""),_i){var Wa=Hp();if(Wa!=null&&Wa>parseFloat(za)){Co=String(Wa);break e}}Co=za}var W0={};function Q0(){return K0(function(){let t=0;const e=Uu(String(Co)).split("."),n=Uu("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;t=Ka(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||Ka(i[2].length==0,r[2].length==0)||Ka(i[2],r[2]),i=i[3],r=r[3]}while(t==0)}return 0<=t})}var _l;if(Ie.document&&_i){var Fu=Hp();_l=Fu||parseInt(Co,10)||void 0}else _l=void 0;var Y0=_l;function tr(t,e){if(Xt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(qp){e:{try{ac(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:X0[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&tr.X.h.call(this)}}Gt(tr,Xt);var X0={2:"touch",3:"pen",4:"mouse"};tr.prototype.h=function(){tr.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Cr="closure_listenable_"+(1e6*Math.random()|0),x0=0;function J0(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=i,this.key=++x0,this.ba=this.ea=!1}function xo(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function lc(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Kp(t){const e={};for(const n in t)e[n]=t[n];return e}const Bu="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function zp(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<Bu.length;r++)n=Bu[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Jo(t){this.src=t,this.g={},this.h=0}Jo.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=yl(t,e,s,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new J0(e,this.src,r,!!s,i),e.ea=n,t.push(e)),e};function vl(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=Vp(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(xo(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function yl(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==s)return i}return-1}var cc="closure_lm_"+(1e6*Math.random()|0),Qa={};function Gp(t,e,n,s,i){if(s&&s.once)return Qp(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)Gp(t,e[r],n,s,i);return null}return n=fc(n),t&&t[Cr]?t.N(e,n,Tr(s)?!!s.capture:!!s,i):Wp(t,e,n,!1,s,i)}function Wp(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=Tr(i)?!!i.capture:!!i,a=hc(t);if(a||(t[cc]=a=new Jo(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=Z0(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)H0||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(Xp(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Z0(){function t(n){return e.call(t.src,t.listener,n)}const e=e1;return t}function Qp(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)Qp(t,e[r],n,s,i);return null}return n=fc(n),t&&t[Cr]?t.O(e,n,Tr(s)?!!s.capture:!!s,i):Wp(t,e,n,!0,s,i)}function Yp(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)Yp(t,e[r],n,s,i);else s=Tr(s)?!!s.capture:!!s,n=fc(n),t&&t[Cr]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=yl(r,n,s,i),-1<n&&(xo(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=hc(t))&&(e=t.g[e.toString()],t=-1,e&&(t=yl(e,n,s,i)),(n=-1<t?e[t]:null)&&uc(n))}function uc(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Cr])vl(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Xp(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=hc(e))?(vl(n,t),n.h==0&&(n.src=null,e[cc]=null)):xo(t)}}}function Xp(t){return t in Qa?Qa[t]:Qa[t]="on"+t}function e1(t,e){if(t.ba)t=!0;else{e=new tr(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&uc(t),t=n.call(s,e)}return t}function hc(t){return t=t[cc],t instanceof Jo?t:null}var Ya="__closure_events_fn_"+(1e9*Math.random()>>>0);function fc(t){return typeof t=="function"?t:(t[Ya]||(t[Ya]=function(e){return t.handleEvent(e)}),t[Ya])}function Ft(){As.call(this),this.i=new Jo(this),this.P=this,this.I=null}Gt(Ft,As);Ft.prototype[Cr]=!0;Ft.prototype.removeEventListener=function(t,e,n,s){Yp(this,t,e,n,s)};function zt(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new Xt(e,t);else if(e instanceof Xt)e.target=e.target||t;else{var i=e;e=new Xt(s,t),zp(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=Zr(o,s,!0,e)&&i}if(o=e.g=t,i=Zr(o,s,!0,e)&&i,i=Zr(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=Zr(o,s,!1,e)&&i}Ft.prototype.M=function(){if(Ft.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)xo(n[s]);delete t.g[e],t.h--}}this.I=null};Ft.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Ft.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Zr(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&vl(t.i,o),i=a.call(l,s)!==!1&&i}}return i&&!s.defaultPrevented}var dc=Ie.JSON.stringify;function t1(){var t=Zp;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class n1{constructor(){this.h=this.g=null}add(e,n){const s=xp.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var xp=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new s1,t=>t.reset());class s1{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function i1(t){Ie.setTimeout(()=>{throw t},0)}function Jp(t,e){bl||r1(),wl||(bl(),wl=!0),Zp.add(t,e)}var bl;function r1(){var t=Ie.Promise.resolve(void 0);bl=function(){t.then(o1)}}var wl=!1,Zp=new n1;function o1(){for(var t;t=t1();){try{t.h.call(t.g)}catch(n){i1(n)}var e=xp;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}wl=!1}function Zo(t,e){Ft.call(this),this.h=t||1,this.g=e||Ie,this.j=Yt(this.lb,this),this.l=Date.now()}Gt(Zo,Ft);pe=Zo.prototype;pe.ca=!1;pe.R=null;pe.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),zt(this,"tick"),this.ca&&(pc(this),this.start()))}};pe.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function pc(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}pe.M=function(){Zo.X.M.call(this),pc(this),delete this.g};function mc(t,e,n){if(typeof t=="function")n&&(t=Yt(t,n));else if(t&&typeof t.handleEvent=="function")t=Yt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Ie.setTimeout(t,e||0)}function em(t){t.g=mc(()=>{t.g=null,t.i&&(t.i=!1,em(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class a1 extends As{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:em(this)}M(){super.M(),this.g&&(Ie.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function nr(t){As.call(this),this.h=t,this.g={}}Gt(nr,As);var Vu=[];function tm(t,e,n,s){Array.isArray(n)||(n&&(Vu[0]=n.toString()),n=Vu);for(var i=0;i<n.length;i++){var r=Gp(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function nm(t){lc(t.g,function(e,n){this.g.hasOwnProperty(n)&&uc(e)},t),t.g={}}nr.prototype.M=function(){nr.X.M.call(this),nm(this)};nr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ea(){this.g=!0}ea.prototype.Aa=function(){this.g=!1};function l1(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var h=c[0];c=c[1];var f=h.split("_");o=2<=f.length&&f[1]=="type"?o+(h+"="+c+"&"):o+(h+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function c1(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function oi(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+h1(t,n)+(s?" "+s:"")})}function u1(t,e){t.info(function(){return"TIMEOUT: "+e})}ea.prototype.info=function(){};function h1(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return dc(n)}catch{return e}}var xs={},ju=null;function ta(){return ju=ju||new Ft}xs.Pa="serverreachability";function sm(t){Xt.call(this,xs.Pa,t)}Gt(sm,Xt);function sr(t){const e=ta();zt(e,new sm(e))}xs.STAT_EVENT="statevent";function im(t,e){Xt.call(this,xs.STAT_EVENT,t),this.stat=e}Gt(im,Xt);function nn(t){const e=ta();zt(e,new im(e,t))}xs.Qa="timingevent";function rm(t,e){Xt.call(this,xs.Qa,t),this.size=e}Gt(rm,Xt);function Sr(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Ie.setTimeout(function(){t()},e)}var na={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},om={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function gc(){}gc.prototype.h=null;function qu(t){return t.h||(t.h=t.i())}function am(){}var Ar={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function _c(){Xt.call(this,"d")}Gt(_c,Xt);function vc(){Xt.call(this,"c")}Gt(vc,Xt);var kl;function sa(){}Gt(sa,gc);sa.prototype.g=function(){return new XMLHttpRequest};sa.prototype.i=function(){return{}};kl=new sa;function Dr(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new nr(this),this.O=f1,t=gl?125:void 0,this.T=new Zo(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new lm}function lm(){this.i=null,this.g="",this.h=!1}var f1=45e3,El={},So={};pe=Dr.prototype;pe.setTimeout=function(t){this.O=t};function Il(t,e,n){t.K=1,t.v=ra(es(e)),t.s=n,t.P=!0,cm(t,null)}function cm(t,e){t.F=Date.now(),Pr(t),t.A=es(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),_m(n.i,"t",s),t.C=0,n=t.l.H,t.h=new lm,t.g=Fm(t.l,n?e:null,!t.s),0<t.N&&(t.L=new a1(Yt(t.La,t,t.g),t.N)),tm(t.S,t.g,"readystatechange",t.ib),e=t.H?Kp(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),sr(),l1(t.j,t.u,t.A,t.m,t.U,t.s)}pe.ib=function(t){t=t.target;const e=this.L;e&&Qn(t)==3?e.l():this.La(t)};pe.La=function(t){try{if(t==this.g)e:{const h=Qn(this.g);var e=this.g.Ea();const f=this.g.aa();if(!(3>h)&&(h!=3||gl||this.g&&(this.h.h||this.g.fa()||Gu(this.g)))){this.I||h!=4||e==7||(e==8||0>=f?sr(3):sr(2)),ia(this);var n=this.g.aa();this.Y=n;t:if(um(this)){var s=Gu(this.g);t="";var i=s.length,r=Qn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ls(this),Wi(this);var o="";break t}this.h.i=new Ie.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,c1(this.j,this.u,this.A,this.m,this.U,h,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!To(a)){var c=a;break t}}c=null}if(n=c)oi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Tl(this,n);else{this.i=!1,this.o=3,nn(12),Ls(this),Wi(this);break e}}this.P?(hm(this,h,o),gl&&this.i&&h==3&&(tm(this.S,this.T,"tick",this.hb),this.T.start())):(oi(this.j,this.m,o,null),Tl(this,o)),h==4&&Ls(this),this.i&&!this.I&&(h==4?Lm(this.l,this):(this.i=!1,Pr(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,nn(12)):(this.o=0,nn(13)),Ls(this),Wi(this)}}}catch{}finally{}};function um(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function hm(t,e,n){let s=!0,i;for(;!t.I&&t.C<n.length;)if(i=d1(t,n),i==So){e==4&&(t.o=4,nn(14),s=!1),oi(t.j,t.m,null,"[Incomplete Response]");break}else if(i==El){t.o=4,nn(15),oi(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else oi(t.j,t.m,i,null),Tl(t,i);um(t)&&i!=So&&i!=El&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,nn(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Tc(e),e.K=!0,nn(11))):(oi(t.j,t.m,n,"[Invalid Chunked Response]"),Ls(t),Wi(t))}pe.hb=function(){if(this.g){var t=Qn(this.g),e=this.g.fa();this.C<e.length&&(ia(this),hm(this,t,e),this.i&&t!=4&&Pr(this))}};function d1(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?So:(n=Number(e.substring(n,s)),isNaN(n)?El:(s+=1,s+n>e.length?So:(e=e.substr(s,n),t.C=s+n,e)))}pe.cancel=function(){this.I=!0,Ls(this)};function Pr(t){t.V=Date.now()+t.O,fm(t,t.O)}function fm(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Sr(Yt(t.gb,t),e)}function ia(t){t.B&&(Ie.clearTimeout(t.B),t.B=null)}pe.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(u1(this.j,this.A),this.K!=2&&(sr(),nn(17)),Ls(this),this.o=2,Wi(this)):fm(this,this.V-t)};function Wi(t){t.l.G==0||t.I||Lm(t.l,t)}function Ls(t){ia(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,pc(t.T),nm(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Tl(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Cl(n.h,t))){if(!t.J&&Cl(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Po(n),la(n);else break e;Ic(n),nn(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=Sr(Yt(n.cb,n),6e3));if(1>=bm(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Ms(n,11)}else if((t.J||n.g==t)&&Po(n),!To(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.T=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.I=c[1],n.ka=c[2];const h=c[3];h!=null&&(n.ma=h,n.j.info("VER="+n.ma));const f=c[4];f!=null&&(n.Ca=f,n.j.info("SVER="+n.Ca));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const m=t.g;if(m){const _=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_){var r=s.h;r.g||_.indexOf("spdy")==-1&&_.indexOf("quic")==-1&&_.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(yc(r,r.h),r.h=null))}if(s.D){const v=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(s.za=v,ot(s.F,s.D,v))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=Um(s,s.H?s.ka:null,s.V),o.J){wm(s.h,o);var a=o,l=s.J;l&&a.setTimeout(l),a.B&&(ia(a),Pr(a)),s.g=o}else Nm(s);0<n.i.length&&ca(n)}else c[0]!="stop"&&c[0]!="close"||Ms(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Ms(n,7):Ec(n):c[0]!="noop"&&n.l&&n.l.wa(c),n.A=0)}}sr(4)}catch{}}function p1(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Yo(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function m1(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Yo(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function dm(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Yo(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=m1(t),s=p1(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}var pm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function g1(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Us(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Us){this.h=e!==void 0?e:t.h,Ao(this,t.j),this.s=t.s,this.g=t.g,Do(this,t.m),this.l=t.l,e=t.i;var n=new ir;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Hu(this,n),this.o=t.o}else t&&(n=String(t).match(pm))?(this.h=!!e,Ao(this,n[1]||"",!0),this.s=ji(n[2]||""),this.g=ji(n[3]||"",!0),Do(this,n[4]),this.l=ji(n[5]||"",!0),Hu(this,n[6]||"",!0),this.o=ji(n[7]||"")):(this.h=!!e,this.i=new ir(null,this.h))}Us.prototype.toString=function(){var t=[],e=this.j;e&&t.push(qi(e,Ku,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(qi(e,Ku,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(qi(n,n.charAt(0)=="/"?y1:v1,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",qi(n,w1)),t.join("")};function es(t){return new Us(t)}function Ao(t,e,n){t.j=n?ji(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Do(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Hu(t,e,n){e instanceof ir?(t.i=e,k1(t.i,t.h)):(n||(e=qi(e,b1)),t.i=new ir(e,t.h))}function ot(t,e,n){t.i.set(e,n)}function ra(t){return ot(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ji(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function qi(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,_1),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function _1(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Ku=/[#\/\?@]/g,v1=/[#\?:]/g,y1=/[#\?]/g,b1=/[#\?@]/g,w1=/#/g;function ir(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ds(t){t.g||(t.g=new Map,t.h=0,t.i&&g1(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}pe=ir.prototype;pe.add=function(t,e){Ds(this),this.i=null,t=Ci(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function mm(t,e){Ds(t),e=Ci(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function gm(t,e){return Ds(t),e=Ci(t,e),t.g.has(e)}pe.forEach=function(t,e){Ds(this),this.g.forEach(function(n,s){n.forEach(function(i){t.call(e,i,s,this)},this)},this)};pe.oa=function(){Ds(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let r=0;r<i.length;r++)n.push(e[s])}return n};pe.W=function(t){Ds(this);let e=[];if(typeof t=="string")gm(this,t)&&(e=e.concat(this.g.get(Ci(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};pe.set=function(t,e){return Ds(this),this.i=null,t=Ci(this,t),gm(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};pe.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function _m(t,e,n){mm(t,e),0<n.length&&(t.i=null,t.g.set(Ci(t,e),oc(n)),t.h+=n.length)}pe.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};function Ci(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function k1(t,e){e&&!t.j&&(Ds(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(mm(this,s),_m(this,i,n))},t)),t.j=e}var E1=class{constructor(t,e){this.h=t,this.g=e}};function vm(t){this.l=t||I1,Ie.PerformanceNavigationTiming?(t=Ie.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Ie.g&&Ie.g.Ga&&Ie.g.Ga()&&Ie.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var I1=10;function ym(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function bm(t){return t.h?1:t.g?t.g.size:0}function Cl(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function yc(t,e){t.g?t.g.add(e):t.h=e}function wm(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}vm.prototype.cancel=function(){if(this.i=km(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function km(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return oc(t.i)}function bc(){}bc.prototype.stringify=function(t){return Ie.JSON.stringify(t,void 0)};bc.prototype.parse=function(t){return Ie.JSON.parse(t,void 0)};function T1(){this.g=new bc}function C1(t,e,n){const s=n||"";try{dm(t,function(i,r){let o=i;Tr(i)&&(o=dc(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function S1(t,e){const n=new ea;if(Ie.Image){const s=new Image;s.onload=Jr(eo,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Jr(eo,n,s,"TestLoadImage: error",!1,e),s.onabort=Jr(eo,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Jr(eo,n,s,"TestLoadImage: timeout",!1,e),Ie.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function eo(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function Rr(t){this.l=t.ac||null,this.j=t.jb||!1}Gt(Rr,gc);Rr.prototype.g=function(){return new oa(this.l,this.j)};Rr.prototype.i=function(t){return function(){return t}}({});function oa(t,e){Ft.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=wc,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Gt(oa,Ft);var wc=0;pe=oa.prototype;pe.open=function(t,e){if(this.readyState!=wc)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,rr(this)};pe.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||Ie).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};pe.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Nr(this)),this.readyState=wc};pe.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,rr(this)),this.g&&(this.readyState=3,rr(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof Ie.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Em(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function Em(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}pe.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Nr(this):rr(this),this.readyState==3&&Em(this)}};pe.Va=function(t){this.g&&(this.response=this.responseText=t,Nr(this))};pe.Ua=function(t){this.g&&(this.response=t,Nr(this))};pe.ga=function(){this.g&&Nr(this)};function Nr(t){t.readyState=4,t.l=null,t.j=null,t.A=null,rr(t)}pe.setRequestHeader=function(t,e){this.v.append(t,e)};pe.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};pe.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function rr(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(oa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var A1=Ie.JSON.parse;function ht(t){Ft.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Im,this.K=this.L=!1}Gt(ht,Ft);var Im="",D1=/^https?$/i,P1=["POST","PUT"];pe=ht.prototype;pe.Ka=function(t){this.L=t};pe.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():kl.g(),this.C=this.u?qu(this.u):qu(kl),this.g.onreadystatechange=Yt(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){zu(this,r);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=Ie.FormData&&t instanceof Ie.FormData,!(0<=Vp(P1,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Sm(this),0<this.B&&((this.K=R1(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Yt(this.qa,this)):this.A=mc(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){zu(this,r)}};function R1(t){return _i&&Q0()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}pe.qa=function(){typeof rc<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,zt(this,"timeout"),this.abort(8))};function zu(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Tm(t),aa(t)}function Tm(t){t.D||(t.D=!0,zt(t,"complete"),zt(t,"error"))}pe.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,zt(this,"complete"),zt(this,"abort"),aa(this))};pe.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),aa(this,!0)),ht.X.M.call(this)};pe.Ha=function(){this.s||(this.F||this.v||this.l?Cm(this):this.fb())};pe.fb=function(){Cm(this)};function Cm(t){if(t.h&&typeof rc<"u"&&(!t.C[1]||Qn(t)!=4||t.aa()!=2)){if(t.v&&Qn(t)==4)mc(t.Ha,0,t);else if(zt(t,"readystatechange"),Qn(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var i=String(t.H).match(pm)[1]||null;if(!i&&Ie.self&&Ie.self.location){var r=Ie.self.location.protocol;i=r.substr(0,r.length-1)}s=!D1.test(i?i.toLowerCase():"")}n=s}if(n)zt(t,"complete"),zt(t,"success");else{t.m=6;try{var o=2<Qn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",Tm(t)}}finally{aa(t)}}}}function aa(t,e){if(t.g){Sm(t);const n=t.g,s=t.C[0]?Io:null;t.g=null,t.C=null,e||zt(t,"ready");try{n.onreadystatechange=s}catch{}}}function Sm(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(Ie.clearTimeout(t.A),t.A=null)}function Qn(t){return t.g?t.g.readyState:0}pe.aa=function(){try{return 2<Qn(this)?this.g.status:-1}catch{return-1}};pe.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};pe.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),A1(e)}};function Gu(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Im:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}pe.Ea=function(){return this.m};pe.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Am(t){let e="";return lc(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function kc(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=Am(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ot(t,e,n))}function $i(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Dm(t){this.Ca=0,this.i=[],this.j=new ea,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=$i("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=$i("baseRetryDelayMs",5e3,t),this.bb=$i("retryDelaySeedMs",1e4,t),this.$a=$i("forwardChannelMaxRetries",2,t),this.ta=$i("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new vm(t&&t.concurrentRequestLimit),this.Fa=new T1,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}pe=Dm.prototype;pe.ma=8;pe.G=1;function Ec(t){if(Pm(t),t.G==3){var e=t.U++,n=es(t.F);ot(n,"SID",t.I),ot(n,"RID",e),ot(n,"TYPE","terminate"),Or(t,n),e=new Dr(t,t.j,e,void 0),e.K=2,e.v=ra(es(n)),n=!1,Ie.navigator&&Ie.navigator.sendBeacon&&(n=Ie.navigator.sendBeacon(e.v.toString(),"")),!n&&Ie.Image&&(new Image().src=e.v,n=!0),n||(e.g=Fm(e.l,null),e.g.da(e.v)),e.F=Date.now(),Pr(e)}$m(t)}function la(t){t.g&&(Tc(t),t.g.cancel(),t.g=null)}function Pm(t){la(t),t.u&&(Ie.clearTimeout(t.u),t.u=null),Po(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&Ie.clearTimeout(t.m),t.m=null)}function ca(t){ym(t.h)||t.m||(t.m=!0,Jp(t.Ja,t),t.C=0)}function N1(t,e){return bm(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Sr(Yt(t.Ja,t,e),Mm(t,t.C)),t.C++,!0)}pe.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new Dr(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=Kp(r),zp(r,this.S)):r=this.S),this.o!==null||this.N||(i.H=r,r=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Rm(this,i,e),n=es(this.F),ot(n,"RID",t),ot(n,"CVER",22),this.D&&ot(n,"X-HTTP-Session-Id",this.D),Or(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(Am(r)))+"&"+e:this.o&&kc(n,this.o,r)),yc(this.h,i),this.Ya&&ot(n,"TYPE","init"),this.O?(ot(n,"$req",e),ot(n,"SID","null"),i.Z=!0,Il(i,n,null)):Il(i,n,e),this.G=2}}else this.G==3&&(t?Wu(this,t):this.i.length==0||ym(this.h)||Wu(this))};function Wu(t,e){var n;e?n=e.m:n=t.U++;const s=es(t.F);ot(s,"SID",t.I),ot(s,"RID",n),ot(s,"AID",t.T),Or(t,s),t.o&&t.s&&kc(s,t.o,t.s),n=new Dr(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Rm(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),yc(t.h,n),Il(n,s,e)}function Or(t,e){t.ia&&lc(t.ia,function(n,s){ot(e,s,n)}),t.l&&dm({},function(n,s){ot(e,s,n)})}function Rm(t,e,n){n=Math.min(t.i.length,n);var s=t.l?Yt(t.l.Ra,t.l,t):null;e:{var i=t.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let c=i[l].h;const h=i[l].g;if(c-=r,0>c)r=Math.max(0,i[l].h-100),a=!1;else try{C1(h,o,"req"+c+"_")}catch{s&&s(h)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function Nm(t){t.g||t.u||(t.Z=1,Jp(t.Ia,t),t.A=0)}function Ic(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Sr(Yt(t.Ia,t),Mm(t,t.A)),t.A++,!0)}pe.Ia=function(){if(this.u=null,Om(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Sr(Yt(this.eb,this),t)}};pe.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,nn(10),la(this),Om(this))};function Tc(t){t.B!=null&&(Ie.clearTimeout(t.B),t.B=null)}function Om(t){t.g=new Dr(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=es(t.sa);ot(e,"RID","rpc"),ot(e,"SID",t.I),ot(e,"CI",t.L?"0":"1"),ot(e,"AID",t.T),ot(e,"TYPE","xmlhttp"),Or(t,e),t.o&&t.s&&kc(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=ra(es(e)),n.s=null,n.P=!0,cm(n,t)}pe.cb=function(){this.v!=null&&(this.v=null,la(this),Ic(this),nn(19))};function Po(t){t.v!=null&&(Ie.clearTimeout(t.v),t.v=null)}function Lm(t,e){var n=null;if(t.g==e){Po(t),Tc(t),t.g=null;var s=2}else if(Cl(t.h,e))n=e.D,wm(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;s=ta(),zt(s,new rm(s,n)),ca(t)}else Nm(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(s==1&&N1(t,e)||s==2&&Ic(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Ms(t,5);break;case 4:Ms(t,10);break;case 3:Ms(t,6);break;default:Ms(t,2)}}}function Mm(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Ms(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=Yt(t.kb,t);n||(n=new Us("//www.google.com/images/cleardot.gif"),Ie.location&&Ie.location.protocol=="http"||Ao(n,"https"),ra(n)),S1(n.toString(),s)}else nn(2);t.G=0,t.l&&t.l.va(e),$m(t),Pm(t)}pe.kb=function(t){t?(this.j.info("Successfully pinged google.com"),nn(2)):(this.j.info("Failed to ping google.com"),nn(1))};function $m(t){if(t.G=0,t.la=[],t.l){const e=km(t.h);(e.length!=0||t.i.length!=0)&&($u(t.la,e),$u(t.la,t.i),t.h.i.length=0,oc(t.i),t.i.length=0),t.l.ua()}}function Um(t,e,n){var s=n instanceof Us?es(n):new Us(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),Do(s,s.m);else{var i=Ie.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new Us(null,void 0);s&&Ao(r,s),e&&(r.g=e),i&&Do(r,i),n&&(r.l=n),s=r}return n=t.D,e=t.za,n&&e&&ot(s,n,e),ot(s,"VER",t.ma),Or(t,s),s}function Fm(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new ht(new Rr({jb:!0})):new ht(t.ra),e.Ka(t.H),e}function Bm(){}pe=Bm.prototype;pe.xa=function(){};pe.wa=function(){};pe.va=function(){};pe.ua=function(){};pe.Ra=function(){};function Ro(){if(_i&&!(10<=Number(Y0)))throw Error("Environmental error: no available transport.")}Ro.prototype.g=function(t,e){return new bn(t,e)};function bn(t,e){Ft.call(this),this.g=new Dm(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!To(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!To(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Si(this)}Gt(bn,Ft);bn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;nn(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Um(t,null,t.V),ca(t)};bn.prototype.close=function(){Ec(this.g)};bn.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=dc(t),t=n);e.i.push(new E1(e.ab++,t)),e.G==3&&ca(e)};bn.prototype.M=function(){this.g.l=null,delete this.j,Ec(this.g),delete this.g,bn.X.M.call(this)};function Vm(t){_c.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Gt(Vm,_c);function jm(){vc.call(this),this.status=1}Gt(jm,vc);function Si(t){this.g=t}Gt(Si,Bm);Si.prototype.xa=function(){zt(this.g,"a")};Si.prototype.wa=function(t){zt(this.g,new Vm(t))};Si.prototype.va=function(t){zt(this.g,new jm)};Si.prototype.ua=function(){zt(this.g,"b")};Ro.prototype.createWebChannel=Ro.prototype.g;bn.prototype.send=bn.prototype.u;bn.prototype.open=bn.prototype.m;bn.prototype.close=bn.prototype.close;na.NO_ERROR=0;na.TIMEOUT=8;na.HTTP_ERROR=6;om.COMPLETE="complete";am.EventType=Ar;Ar.OPEN="a";Ar.CLOSE="b";Ar.ERROR="c";Ar.MESSAGE="d";Ft.prototype.listen=Ft.prototype.N;ht.prototype.listenOnce=ht.prototype.O;ht.prototype.getLastError=ht.prototype.Oa;ht.prototype.getLastErrorCode=ht.prototype.Ea;ht.prototype.getStatus=ht.prototype.aa;ht.prototype.getResponseJson=ht.prototype.Sa;ht.prototype.getResponseText=ht.prototype.fa;ht.prototype.send=ht.prototype.da;ht.prototype.setWithCredentials=ht.prototype.Ka;var O1=function(){return new Ro},L1=function(){return ta()},Xa=na,M1=om,$1=xs,Qu={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},U1=Rr,to=am,F1=ht;const Yu="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const zs=new nc("@firebase/firestore");function Xu(){return zs.logLevel}function _e(t,...e){if(zs.logLevel<=Ge.DEBUG){const n=e.map(Cc);zs.debug(`Firestore (${Ai}): ${t}`,...n)}}function ts(t,...e){if(zs.logLevel<=Ge.ERROR){const n=e.map(Cc);zs.error(`Firestore (${Ai}): ${t}`,...n)}}function Sl(t,...e){if(zs.logLevel<=Ge.WARN){const n=e.map(Cc);zs.warn(`Firestore (${Ai}): ${t}`,...n)}}function Cc(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function Te(t="Unexpected state"){const e=`FIRESTORE (${Ai}) INTERNAL ASSERTION FAILED: `+t;throw ts(e),new Error(e)}function it(t,e){t||Te()}function Se(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class qm{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class B1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Wt.UNAUTHENTICATED))}shutdown(){}}class V1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class j1{constructor(e){this.t=e,this.currentUser=Wt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=l=>this.i!==s?(s=this.i,n(l)):Promise.resolve();let r=new ys;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new ys,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{_e("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(_e("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new ys)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(_e("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(it(typeof s.accessToken=="string"),new qm(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return it(e===null||typeof e=="string"),new Wt(e)}}class q1{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i,this.type="FirstParty",this.user=Wt.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(it(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class H1{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i}getToken(){return Promise.resolve(new q1(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(Wt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class K1{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class z1{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=r=>{r.error!=null&&_e("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.A;return this.A=r.token,_e("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{_e("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.T.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.T.getImmediate({optional:!0});r?i(r):_e("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(it(typeof n.token=="string"),this.A=n.token,new K1(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G1(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=G1(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function Ye(t,e){return t<e?-1:t>e?1:0}function vi(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new we(te.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new we(te.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new we(te.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new we(te.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return At.fromMillis(Date.now())}static fromDate(e){return At.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new At(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ye(this.nanoseconds,e.nanoseconds):Ye(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Ne(e)}static min(){return new Ne(new At(0,0))}static max(){return new Ne(new At(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e,n,s){n===void 0?n=0:n>e.length&&Te(),s===void 0?s=e.length-n:s>e.length-n&&Te(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return or.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof or?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class at extends or{construct(e,n,s){return new at(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new we(te.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new at(n)}static emptyPath(){return new at([])}}const W1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Qt extends or{construct(e,n,s){return new Qt(e,n,s)}static isValidIdentifier(e){return W1.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Qt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Qt(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new we(te.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new we(te.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new we(te.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new we(te.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Qt(n)}static emptyPath(){return new Qt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e){this.path=e}static fromPath(e){return new be(at.fromString(e))}static fromName(e){return new be(at.fromString(e).popFirst(5))}static empty(){return new be(at.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&at.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return at.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new be(new at(e.slice()))}}function Q1(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=Ne.fromTimestamp(s===1e9?new At(n+1,0):new At(n,s));return new Ts(i,be.empty(),e)}function Y1(t){return new Ts(t.readTime,t.key,-1)}class Ts{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Ts(Ne.min(),be.empty(),-1)}static max(){return new Ts(Ne.max(),be.empty(),-1)}}function X1(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=be.comparator(t.documentKey,e.documentKey),n!==0?n:Ye(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class J1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lr(t){if(t.code!==te.FAILED_PRECONDITION||t.message!==x1)throw t;_e("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function xu(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Js(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Km(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Sc.at=-1;class Pt{constructor(e,n){this.comparator=e,this.root=n||Ht.EMPTY}insert(e,n){return new Pt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ht.BLACK,null,null))}remove(e){return new Pt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ht.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new no(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new no(this.root,e,this.comparator,!1)}getReverseIterator(){return new no(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new no(this.root,e,this.comparator,!0)}}class no{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ht{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s!=null?s:Ht.RED,this.left=i!=null?i:Ht.EMPTY,this.right=r!=null?r:Ht.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new Ht(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ht.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ht.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ht.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ht.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Te();const e=this.left.check();if(e!==this.right.check())throw Te();return e+(this.isRed()?0:1)}}Ht.EMPTY=null,Ht.RED=!0,Ht.BLACK=!1;Ht.EMPTY=new class{constructor(){this.size=0}get key(){throw Te()}get value(){throw Te()}get color(){throw Te()}get left(){throw Te()}get right(){throw Te()}copy(t,e,n,s,i){return this}insert(t,e,n){return new Ht(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.comparator=e,this.data=new Pt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ju(this.data.getIterator())}getIteratorFrom(e){return new Ju(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof Dt)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Dt(this.comparator);return n.data=e,n}}class Ju{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(e){this.fields=e,e.sort(Qt.comparator)}static empty(){return new In([])}unionWith(e){let n=new Dt(Qt.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new In(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return vi(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Zt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(e);return new Zt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ye(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Zt.EMPTY_BYTE_STRING=new Zt("");const Z1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Cs(t){if(it(!!t),typeof t=="string"){let e=0;const n=Z1.exec(t);if(it(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Et(t.seconds),nanos:Et(t.nanos)}}function Et(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function yi(t){return typeof t=="string"?Zt.fromBase64String(t):Zt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zm(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Gm(t){const e=t.mapValue.fields.__previous_value__;return zm(e)?Gm(e):e}function ar(t){const e=Cs(t.mapValue.fields.__local_write_time__.timestampValue);return new At(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eb{constructor(e,n,s,i,r,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class lr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new lr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof lr&&e.projectId===this.projectId&&e.database===this.database}}function ua(t){return t==null}function No(t){return t===0&&1/t==-1/0}function tb(t){return typeof t=="number"&&Number.isInteger(t)&&!No(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const so={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Gs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?zm(t)?4:nb(t)?9007199254740991:10:Te()}function Vn(t,e){if(t===e)return!0;const n=Gs(t);if(n!==Gs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ar(t).isEqual(ar(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=Cs(s.timestampValue),o=Cs(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return yi(s.bytesValue).isEqual(yi(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Et(s.geoPointValue.latitude)===Et(i.geoPointValue.latitude)&&Et(s.geoPointValue.longitude)===Et(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Et(s.integerValue)===Et(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=Et(s.doubleValue),o=Et(i.doubleValue);return r===o?No(r)===No(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return vi(t.arrayValue.values||[],e.arrayValue.values||[],Vn);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(xu(r)!==xu(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!Vn(r[a],o[a])))return!1;return!0}(t,e);default:return Te()}}function cr(t,e){return(t.values||[]).find(n=>Vn(n,e))!==void 0}function bi(t,e){if(t===e)return 0;const n=Gs(t),s=Gs(e);if(n!==s)return Ye(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ye(t.booleanValue,e.booleanValue);case 2:return function(i,r){const o=Et(i.integerValue||i.doubleValue),a=Et(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Zu(t.timestampValue,e.timestampValue);case 4:return Zu(ar(t),ar(e));case 5:return Ye(t.stringValue,e.stringValue);case 6:return function(i,r){const o=yi(i),a=yi(r);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=Ye(o[l],a[l]);if(c!==0)return c}return Ye(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,r){const o=Ye(Et(i.latitude),Et(r.latitude));return o!==0?o:Ye(Et(i.longitude),Et(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=bi(o[l],a[l]);if(c)return c}return Ye(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,r){if(i===so.mapValue&&r===so.mapValue)return 0;if(i===so.mapValue)return 1;if(r===so.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=r.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let h=0;h<a.length&&h<c.length;++h){const f=Ye(a[h],c[h]);if(f!==0)return f;const d=bi(o[a[h]],l[c[h]]);if(d!==0)return d}return Ye(a.length,c.length)}(t.mapValue,e.mapValue);default:throw Te()}}function Zu(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ye(t,e);const n=Cs(t),s=Cs(e),i=Ye(n.seconds,s.seconds);return i!==0?i:Ye(n.nanos,s.nanos)}function ui(t){return Al(t)}function Al(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const i=Cs(s);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?yi(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,be.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=Al(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${Al(s.fields[a])}`;return r+"}"}(t.mapValue):Te();var e,n}function Dl(t){return!!t&&"integerValue"in t}function Ac(t){return!!t&&"arrayValue"in t}function eh(t){return!!t&&"nullValue"in t}function th(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ao(t){return!!t&&"mapValue"in t}function Qi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Js(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Qi(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Qi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function nb(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e){this.value=e}static empty(){return new dn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!ao(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Qi(n)}setAll(e){let n=Qt.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=Qi(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());ao(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Vn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];ao(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){Js(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new dn(Qi(this.value))}}function Wm(t){const e=[];return Js(t.fields,(n,s)=>{const i=new Qt([n]);if(ao(s)){const r=Wm(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new In(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e,n,s,i,r,o){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.data=r,this.documentState=o}static newInvalidDocument(e){return new Kt(e,0,Ne.min(),Ne.min(),dn.empty(),0)}static newFoundDocument(e,n,s){return new Kt(e,1,n,Ne.min(),s,0)}static newNoDocument(e,n){return new Kt(e,2,n,Ne.min(),dn.empty(),0)}static newUnknownDocument(e,n){return new Kt(e,3,n,Ne.min(),dn.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=dn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=dn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ne.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Kt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Kt(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sb{constructor(e,n=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.ht=null}}function nh(t,e=null,n=[],s=[],i=null,r=null,o=null){return new sb(t,e,n,s,i,r,o)}function Dc(t){const e=Se(t);if(e.ht===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>{return(i=s).field.canonicalString()+i.op.toString()+ui(i.value);var i}).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),ua(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>ui(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>ui(s)).join(",")),e.ht=n}return e.ht}function ib(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${ui(s.value)}`;var s}).join(", ")}]`),ua(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>ui(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>ui(n)).join(",")),`Target(${e})`}function Pc(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!fb(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],s=e.filters[i],n.op!==s.op||!n.field.isEqual(s.field)||!Vn(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!ih(t.startAt,e.startAt)&&ih(t.endAt,e.endAt)}function Pl(t){return be.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class mn extends class{}{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.lt(e,n,s):new rb(e,n,s):n==="array-contains"?new lb(e,s):n==="in"?new cb(e,s):n==="not-in"?new ub(e,s):n==="array-contains-any"?new hb(e,s):new mn(e,n,s)}static lt(e,n,s){return n==="in"?new ob(e,s):new ab(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.ft(bi(n,this.value)):n!==null&&Gs(this.value)===Gs(n)&&this.ft(bi(n,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Te()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class rb extends mn{constructor(e,n,s){super(e,n,s),this.key=be.fromName(s.referenceValue)}matches(e){const n=be.comparator(e.key,this.key);return this.ft(n)}}class ob extends mn{constructor(e,n){super(e,"in",n),this.keys=Qm("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class ab extends mn{constructor(e,n){super(e,"not-in",n),this.keys=Qm("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Qm(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>be.fromName(s.referenceValue))}class lb extends mn{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ac(n)&&cr(n.arrayValue,this.value)}}class cb extends mn{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&cr(this.value.arrayValue,n)}}class ub extends mn{constructor(e,n){super(e,"not-in",n)}matches(e){if(cr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!cr(this.value.arrayValue,n)}}class hb extends mn{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ac(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>cr(this.value.arrayValue,s))}}class Oo{constructor(e,n){this.position=e,this.inclusive=n}}class Yi{constructor(e,n="asc"){this.field=e,this.dir=n}}function fb(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function sh(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=be.comparator(be.fromName(o.referenceValue),n.key):s=bi(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function ih(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Vn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(e,n=null,s=[],i=[],r=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this._t=null,this.wt=null,this.startAt,this.endAt}}function db(t,e,n,s,i,r,o,a){return new ha(t,e,n,s,i,r,o,a)}function Rc(t){return new ha(t)}function rh(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function pb(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function mb(t){for(const e of t.filters)if(e.dt())return e.field;return null}function gb(t){return t.collectionGroup!==null}function ur(t){const e=Se(t);if(e._t===null){e._t=[];const n=mb(e),s=pb(e);if(n!==null&&s===null)n.isKeyField()||e._t.push(new Yi(n)),e._t.push(new Yi(Qt.keyField(),"asc"));else{let i=!1;for(const r of e.explicitOrderBy)e._t.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new Yi(Qt.keyField(),r))}}}return e._t}function ns(t){const e=Se(t);if(!e.wt)if(e.limitType==="F")e.wt=nh(e.path,e.collectionGroup,ur(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of ur(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new Yi(r.field,o))}const s=e.endAt?new Oo(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Oo(e.startAt.position,e.startAt.inclusive):null;e.wt=nh(e.path,e.collectionGroup,n,e.filters,e.limit,s,i)}return e.wt}function Rl(t,e,n){return new ha(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function fa(t,e){return Pc(ns(t),ns(e))&&t.limitType===e.limitType}function Ym(t){return`${Dc(ns(t))}|lt:${t.limitType}`}function Nl(t){return`Query(target=${ib(ns(t))}; limitType=${t.limitType})`}function Nc(t,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):be.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,s){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=sh(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,ur(n),s)||n.endAt&&!function(i,r,o){const a=sh(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,ur(n),s))}(t,e)}function _b(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Xm(t){return(e,n)=>{let s=!1;for(const i of ur(t)){const r=vb(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function vb(t,e,n){const s=t.field.isKeyField()?be.comparator(e.key,n.key):function(i,r,o){const a=r.data.field(i),l=o.data.field(i);return a!==null&&l!==null?bi(a,l):Te()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return Te()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xm(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:No(e)?"-0":e}}function Jm(t){return{integerValue:""+t}}function yb(t,e){return tb(e)?Jm(e):xm(t,e)}/**
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
 */class da{constructor(){this._=void 0}}function bb(t,e,n){return t instanceof Lo?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,e):t instanceof hr?eg(t,e):t instanceof fr?tg(t,e):function(s,i){const r=Zm(s,i),o=oh(r)+oh(s.yt);return Dl(r)&&Dl(s.yt)?Jm(o):xm(s.It,o)}(t,e)}function wb(t,e,n){return t instanceof hr?eg(t,e):t instanceof fr?tg(t,e):n}function Zm(t,e){return t instanceof Mo?Dl(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Lo extends da{}class hr extends da{constructor(e){super(),this.elements=e}}function eg(t,e){const n=ng(e);for(const s of t.elements)n.some(i=>Vn(i,s))||n.push(s);return{arrayValue:{values:n}}}class fr extends da{constructor(e){super(),this.elements=e}}function tg(t,e){let n=ng(e);for(const s of t.elements)n=n.filter(i=>!Vn(i,s));return{arrayValue:{values:n}}}class Mo extends da{constructor(e,n){super(),this.It=e,this.yt=n}}function oh(t){return Et(t.integerValue||t.doubleValue)}function ng(t){return Ac(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function kb(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof hr&&s instanceof hr||n instanceof fr&&s instanceof fr?vi(n.elements,s.elements,Vn):n instanceof Mo&&s instanceof Mo?Vn(n.yt,s.yt):n instanceof Lo&&s instanceof Lo}(t.transform,e.transform)}class Eb{constructor(e,n){this.version=e,this.transformResults=n}}class Tn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Tn}static exists(e){return new Tn(void 0,e)}static updateTime(e){return new Tn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function lo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class pa{}function sg(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Oc(t.key,Tn.none()):new $r(t.key,t.data,Tn.none());{const n=t.data,s=dn.empty();let i=new Dt(Qt.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new Ps(t.key,s,new In(i.toArray()),Tn.none())}}function Ib(t,e,n){t instanceof $r?function(s,i,r){const o=s.value.clone(),a=lh(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Ps?function(s,i,r){if(!lo(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=lh(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(ig(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function Xi(t,e,n,s){return t instanceof $r?function(i,r,o,a){if(!lo(i.precondition,r))return o;const l=i.value.clone(),c=ch(i.fieldTransforms,a,r);return l.setAll(c),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),null}(t,e,n,s):t instanceof Ps?function(i,r,o,a){if(!lo(i.precondition,r))return o;const l=ch(i.fieldTransforms,a,r),c=r.data;return c.setAll(ig(i)),c.setAll(l),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,s):function(i,r,o){return lo(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(t,e,n)}function Tb(t,e){let n=null;for(const s of t.fieldTransforms){const i=e.data.field(s.field),r=Zm(s.transform,i||null);r!=null&&(n===null&&(n=dn.empty()),n.set(s.field,r))}return n||null}function ah(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&vi(n,s,(i,r)=>kb(i,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class $r extends pa{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ps extends pa{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function ig(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function lh(t,e,n){const s=new Map;it(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,wb(o,a,n[i]))}return s}function ch(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,bb(r,o,e))}return s}class Oc extends pa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Cb extends pa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sb{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var kt,Ue;function Ab(t){switch(t){default:return Te();case te.CANCELLED:case te.UNKNOWN:case te.DEADLINE_EXCEEDED:case te.RESOURCE_EXHAUSTED:case te.INTERNAL:case te.UNAVAILABLE:case te.UNAUTHENTICATED:return!1;case te.INVALID_ARGUMENT:case te.NOT_FOUND:case te.ALREADY_EXISTS:case te.PERMISSION_DENIED:case te.FAILED_PRECONDITION:case te.ABORTED:case te.OUT_OF_RANGE:case te.UNIMPLEMENTED:case te.DATA_LOSS:return!0}}function rg(t){if(t===void 0)return ts("GRPC error has no .code"),te.UNKNOWN;switch(t){case kt.OK:return te.OK;case kt.CANCELLED:return te.CANCELLED;case kt.UNKNOWN:return te.UNKNOWN;case kt.DEADLINE_EXCEEDED:return te.DEADLINE_EXCEEDED;case kt.RESOURCE_EXHAUSTED:return te.RESOURCE_EXHAUSTED;case kt.INTERNAL:return te.INTERNAL;case kt.UNAVAILABLE:return te.UNAVAILABLE;case kt.UNAUTHENTICATED:return te.UNAUTHENTICATED;case kt.INVALID_ARGUMENT:return te.INVALID_ARGUMENT;case kt.NOT_FOUND:return te.NOT_FOUND;case kt.ALREADY_EXISTS:return te.ALREADY_EXISTS;case kt.PERMISSION_DENIED:return te.PERMISSION_DENIED;case kt.FAILED_PRECONDITION:return te.FAILED_PRECONDITION;case kt.ABORTED:return te.ABORTED;case kt.OUT_OF_RANGE:return te.OUT_OF_RANGE;case kt.UNIMPLEMENTED:return te.UNIMPLEMENTED;case kt.DATA_LOSS:return te.DATA_LOSS;default:return Te()}}(Ue=kt||(kt={}))[Ue.OK=0]="OK",Ue[Ue.CANCELLED=1]="CANCELLED",Ue[Ue.UNKNOWN=2]="UNKNOWN",Ue[Ue.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ue[Ue.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ue[Ue.NOT_FOUND=5]="NOT_FOUND",Ue[Ue.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ue[Ue.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ue[Ue.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ue[Ue.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ue[Ue.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ue[Ue.ABORTED=10]="ABORTED",Ue[Ue.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ue[Ue.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ue[Ue.INTERNAL=13]="INTERNAL",Ue[Ue.UNAVAILABLE=14]="UNAVAILABLE",Ue[Ue.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Js(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return Km(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Db=new Pt(be.comparator);function ss(){return Db}const og=new Pt(be.comparator);function Hi(...t){let e=og;for(const n of t)e=e.insert(n.key,n);return e}function ag(t){let e=og;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function $s(){return xi()}function lg(){return xi()}function xi(){return new Di(t=>t.toString(),(t,e)=>t.isEqual(e))}const Pb=new Pt(be.comparator),Rb=new Dt(be.comparator);function Le(...t){let e=Rb;for(const n of t)e=e.add(n);return e}const Nb=new Dt(Ye);function cg(){return Nb}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const i=new Map;return i.set(e,Ur.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new ma(Ne.min(),i,cg(),ss(),Le())}}class Ur{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Ur(s,n,Le(),Le(),Le())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(e,n,s,i){this.Tt=e,this.removedTargetIds=n,this.key=s,this.Et=i}}class ug{constructor(e,n){this.targetId=e,this.At=n}}class hg{constructor(e,n,s=Zt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class uh{constructor(){this.Rt=0,this.bt=fh(),this.Pt=Zt.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=Le(),n=Le(),s=Le();return this.bt.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:Te()}}),new Ur(this.Pt,this.vt,e,n,s)}Nt(){this.Vt=!1,this.bt=fh()}kt(e,n){this.Vt=!0,this.bt=this.bt.insert(e,n)}Ot(e){this.Vt=!0,this.bt=this.bt.remove(e)}Mt(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class Ob{constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=ss(),this.qt=hh(),this.Kt=new Dt(Ye)}Gt(e){for(const n of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(n,e.Et):this.jt(n,e.key,e.Et);for(const n of e.removedTargetIds)this.jt(n,e.key,e.Et)}Wt(e){this.forEachTarget(e,n=>{const s=this.zt(n);switch(e.state){case 0:this.Ht(n)&&s.Ct(e.resumeToken);break;case 1:s.Ft(),s.St||s.Nt(),s.Ct(e.resumeToken);break;case 2:s.Ft(),s.St||this.removeTarget(n);break;case 3:this.Ht(n)&&(s.$t(),s.Ct(e.resumeToken));break;case 4:this.Ht(n)&&(this.Jt(n),s.Ct(e.resumeToken));break;default:Te()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Lt.forEach((s,i)=>{this.Ht(i)&&n(i)})}Yt(e){const n=e.targetId,s=e.At.count,i=this.Xt(n);if(i){const r=i.target;if(Pl(r))if(s===0){const o=new be(r.path);this.jt(n,o,Kt.newNoDocument(o,Ne.min()))}else it(s===1);else this.Zt(n)!==s&&(this.Jt(n),this.Kt=this.Kt.add(n))}}te(e){const n=new Map;this.Lt.forEach((r,o)=>{const a=this.Xt(o);if(a){if(r.current&&Pl(a.target)){const l=new be(a.target.path);this.Ut.get(l)!==null||this.ee(o,l)||this.jt(o,l,Kt.newNoDocument(l,e))}r.Dt&&(n.set(o,r.xt()),r.Nt())}});let s=Le();this.qt.forEach((r,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Xt(l);return!c||c.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))}),this.Ut.forEach((r,o)=>o.setReadTime(e));const i=new ma(e,n,this.Kt,this.Ut,s);return this.Ut=ss(),this.qt=hh(),this.Kt=new Dt(Ye),i}Qt(e,n){if(!this.Ht(e))return;const s=this.ee(e,n.key)?2:0;this.zt(e).kt(n.key,s),this.Ut=this.Ut.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ne(n.key).add(e))}jt(e,n,s){if(!this.Ht(e))return;const i=this.zt(e);this.ee(e,n)?i.kt(n,1):i.Ot(n),this.qt=this.qt.insert(n,this.ne(n).delete(e)),s&&(this.Ut=this.Ut.insert(n,s))}removeTarget(e){this.Lt.delete(e)}Zt(e){const n=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Mt(e){this.zt(e).Mt()}zt(e){let n=this.Lt.get(e);return n||(n=new uh,this.Lt.set(e,n)),n}ne(e){let n=this.qt.get(e);return n||(n=new Dt(Ye),this.qt=this.qt.insert(e,n)),n}Ht(e){const n=this.Xt(e)!==null;return n||_e("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.Lt.get(e);return n&&n.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new uh),this.Bt.getRemoteKeysForTarget(e).forEach(n=>{this.jt(e,n,null)})}ee(e,n){return this.Bt.getRemoteKeysForTarget(e).has(n)}}function hh(){return new Pt(be.comparator)}function fh(){return new Pt(be.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lb=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Mb=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class $b{constructor(e,n){this.databaseId=e,this.gt=n}}function $o(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function fg(t,e){return t.gt?e.toBase64():e.toUint8Array()}function Ub(t,e){return $o(t,e.toTimestamp())}function xn(t){return it(!!t),Ne.fromTimestamp(function(e){const n=Cs(e);return new At(n.seconds,n.nanos)}(t))}function Lc(t,e){return function(n){return new at(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function dg(t){const e=at.fromString(t);return it(gg(e)),e}function Ol(t,e){return Lc(t.databaseId,e.path)}function xa(t,e){const n=dg(e);if(n.get(1)!==t.databaseId.projectId)throw new we(te.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new we(te.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new be(pg(n))}function Ll(t,e){return Lc(t.databaseId,e)}function Fb(t){const e=dg(t);return e.length===4?at.emptyPath():pg(e)}function Ml(t){return new at(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function pg(t){return it(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function dh(t,e,n){return{name:Ol(t,e),fields:n.value.mapValue.fields}}function Bb(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:Te()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(l,c){return l.gt?(it(c===void 0||typeof c=="string"),Zt.fromBase64String(c||"")):(it(c===void 0||c instanceof Uint8Array),Zt.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const c=l.code===void 0?te.UNKNOWN:rg(l.code);return new we(c,l.message||"")}(o);n=new hg(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=xa(t,s.document.name),r=xn(s.document.updateTime),o=new dn({mapValue:{fields:s.document.fields}}),a=Kt.newFoundDocument(i,r,o),l=s.targetIds||[],c=s.removedTargetIds||[];n=new co(l,c,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=xa(t,s.document),r=s.readTime?xn(s.readTime):Ne.min(),o=Kt.newNoDocument(i,r),a=s.removedTargetIds||[];n=new co([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=xa(t,s.document),r=s.removedTargetIds||[];n=new co([],r,i,null)}else{if(!("filter"in e))return Te();{e.filter;const s=e.filter;s.targetId;const i=s.count||0,r=new Sb(i),o=s.targetId;n=new ug(o,r)}}return n}function Vb(t,e){let n;if(e instanceof $r)n={update:dh(t,e.key,e.value)};else if(e instanceof Oc)n={delete:Ol(t,e.key)};else if(e instanceof Ps)n={update:dh(t,e.key,e.data),updateMask:Xb(e.fieldMask)};else{if(!(e instanceof Cb))return Te();n={verify:Ol(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof Lo)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof hr)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof fr)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Mo)return{fieldPath:r.field.canonicalString(),increment:o.yt};throw Te()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Ub(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Te()}(t,e.precondition)),n}function jb(t,e){return t&&t.length>0?(it(e!==void 0),t.map(n=>function(s,i){let r=s.updateTime?xn(s.updateTime):xn(i);return r.isEqual(Ne.min())&&(r=xn(i)),new Eb(r,s.transformResults||[])}(n,e))):[]}function qb(t,e){return{documents:[Ll(t,e.path)]}}function Hb(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Ll(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Ll(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(l){if(l.length===0)return;const c=l.map(h=>function(f){if(f.op==="=="){if(th(f.value))return{unaryFilter:{field:ii(f.field),op:"IS_NAN"}};if(eh(f.value))return{unaryFilter:{field:ii(f.field),op:"IS_NULL"}}}else if(f.op==="!="){if(th(f.value))return{unaryFilter:{field:ii(f.field),op:"IS_NOT_NAN"}};if(eh(f.value))return{unaryFilter:{field:ii(f.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ii(f.field),op:Wb(f.op),value:f.value}}}(h));return c.length===1?c[0]:{compositeFilter:{op:"AND",filters:c}}}(e.filters);i&&(n.structuredQuery.where=i);const r=function(l){if(l.length!==0)return l.map(c=>function(h){return{field:ii(h.field),direction:Gb(h.dir)}}(c))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(l,c){return l.gt||ua(c)?c:{value:c}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function Kb(t){let e=Fb(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){it(s===1);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let r=[];n.where&&(r=mg(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(h=>function(f){return new Yi(ai(f.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(f.direction))}(h)));let a=null;n.limit&&(a=function(h){let f;return f=typeof h=="object"?h.value:h,ua(f)?null:f}(n.limit));let l=null;n.startAt&&(l=function(h){const f=!!h.before,d=h.values||[];return new Oo(d,f)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const f=!h.before,d=h.values||[];return new Oo(d,f)}(n.endAt)),db(e,i,o,r,a,"F",l,c)}function zb(t,e){const n=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Te()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function mg(t){return t?t.unaryFilter!==void 0?[Yb(t)]:t.fieldFilter!==void 0?[Qb(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>mg(e)).reduce((e,n)=>e.concat(n)):Te():[]}function Gb(t){return Lb[t]}function Wb(t){return Mb[t]}function ii(t){return{fieldPath:t.canonicalString()}}function ai(t){return Qt.fromServerFormat(t.fieldPath)}function Qb(t){return mn.create(ai(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Te()}}(t.fieldFilter.op),t.fieldFilter.value)}function Yb(t){switch(t.unaryFilter.op){case"IS_NAN":const e=ai(t.unaryFilter.field);return mn.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=ai(t.unaryFilter.field);return mn.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ai(t.unaryFilter.field);return mn.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=ai(t.unaryFilter.field);return mn.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Te()}}function Xb(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function gg(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xb{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&Ib(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Xi(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Xi(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=lg();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const l=sg(o,a);l!==null&&s.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(Ne.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Le())}isEqual(e){return this.batchId===e.batchId&&vi(this.mutations,e.mutations,(n,s)=>ah(n,s))&&vi(this.baseMutations,e.baseMutations,(n,s)=>ah(n,s))}}class Mc{constructor(e,n,s,i){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(e,n,s){it(e.mutations.length===s.length);let i=Pb;const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new Mc(e,n,s,i)}}/**
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
 */class Jb{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Fs{constructor(e,n,s,i,r=Ne.min(),o=Ne.min(),a=Zt.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Fs(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Fs(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Fs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zb{constructor(e){this.re=e}}function ew(t){const e=Kb({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Rl(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tw{constructor(){this.Ye=new nw}addToCollectionParentIndex(e,n){return this.Ye.add(n),ne.resolve()}getCollectionParents(e,n){return ne.resolve(this.Ye.getEntries(n))}addFieldIndex(e,n){return ne.resolve()}deleteFieldIndex(e,n){return ne.resolve()}getDocumentsMatchingTarget(e,n){return ne.resolve(null)}getIndexType(e,n){return ne.resolve(0)}getFieldIndexes(e,n){return ne.resolve([])}getNextCollectionGroupToUpdate(e){return ne.resolve(null)}getMinOffset(e,n){return ne.resolve(Ts.min())}getMinOffsetFromCollectionGroup(e,n){return ne.resolve(Ts.min())}updateCollectionGroup(e,n,s){return ne.resolve()}updateIndexEntries(e,n){return ne.resolve()}}class nw{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new Dt(at.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new Dt(at.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class sw{constructor(){this.changes=new Di(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Kt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?ne.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class iw{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rw{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(s=i,this.getBaseDocument(e,n,s))).next(i=>(s!==null&&Xi(s.mutation,i,In.empty(),At.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,Le()).next(()=>s))}getLocalViewOfDocuments(e,n,s=Le()){const i=$s();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,s).next(r=>{let o=Hi();return r.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=$s();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,Le()))}populateOverlays(e,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,i){let r=ss();const o=xi(),a=xi();return n.forEach((l,c)=>{const h=s.get(c.key);i.has(c.key)&&(h===void 0||h.mutation instanceof Ps)?r=r.insert(c.key,c):h!==void 0&&(o.set(c.key,h.mutation.getFieldMask()),Xi(h.mutation,c,h.mutation.getFieldMask(),At.now()))}),this.recalculateAndSaveOverlays(e,r).next(l=>(l.forEach((c,h)=>o.set(c,h)),n.forEach((c,h)=>{var f;return a.set(c,new iw(h,(f=o.get(c))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const s=xi();let i=new Pt((o,a)=>o-a),r=Le();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let h=s.get(l)||In.empty();h=a.applyToLocalView(c,h),s.set(l,h);const f=(i.get(a.batchId)||Le()).add(l);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,h=l.value,f=lg();h.forEach(d=>{if(!r.has(d)){const m=sg(n.get(d),s.get(d));m!==null&&f.set(d,m),r=r.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return ne.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(i){return be.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):gb(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):ne.resolve($s());let a=-1,l=r;return o.next(c=>ne.forEach(c,(h,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),r.get(h)?ne.resolve():this.getBaseDocument(e,h,f).next(d=>{l=l.insert(h,d)}))).next(()=>this.populateOverlays(e,c,r)).next(()=>this.computeViews(e,l,c,Le())).next(h=>({batchId:a,changes:ag(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new be(n)).next(s=>{let i=Hi();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const i=n.collectionGroup;let r=Hi();return this.indexManager.getCollectionParents(e,i).next(o=>ne.forEach(o,a=>{const l=function(c,h){return new ha(h,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,s).next(c=>{c.forEach((h,f)=>{r=r.insert(h,f)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,s){let i;return this.remoteDocumentCache.getAllFromCollection(e,n.path,s).next(r=>(i=r,this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId))).next(r=>{r.forEach((a,l)=>{const c=l.getKey();i.get(c)===null&&(i=i.insert(c,Kt.newInvalidDocument(c)))});let o=Hi();return i.forEach((a,l)=>{const c=r.get(a);c!==void 0&&Xi(c.mutation,l,In.empty(),At.now()),Nc(n,l)&&(o=o.insert(a,l))}),o})}getBaseDocument(e,n,s){return s===null||s.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):ne.resolve(Kt.newInvalidDocument(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ow{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return ne.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:xn(s.createTime)}),ne.resolve()}getNamedQuery(e,n){return ne.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(s){return{name:s.name,query:ew(s.bundledQuery),readTime:xn(s.readTime)}}(n)),ne.resolve()}}/**
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
 */class aw{constructor(){this.overlays=new Pt(be.comparator),this.es=new Map}getOverlay(e,n){return ne.resolve(this.overlays.get(n))}getOverlays(e,n){const s=$s();return ne.forEach(n,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((i,r)=>{this.ue(e,n,r)}),ne.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.es.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.es.delete(s)),ne.resolve()}getOverlaysForCollection(e,n,s){const i=$s(),r=n.length+1,o=new be(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===r&&l.largestBatchId>s&&i.set(l.getKey(),l)}return ne.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new Pt((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>s){let h=r.get(c.largestBatchId);h===null&&(h=$s(),r=r.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const a=$s(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,h)=>a.set(c,h)),!(a.size()>=i)););return ne.resolve(a)}ue(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.es.get(i.largestBatchId).delete(s.key);this.es.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new Jb(n,s));let r=this.es.get(n);r===void 0&&(r=Le(),this.es.set(n,r)),this.es.set(n,r.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(){this.ns=new Dt($t.ss),this.rs=new Dt($t.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const s=new $t(e,n);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.cs(new $t(e,n))}hs(e,n){e.forEach(s=>this.removeReference(s,n))}ls(e){const n=new be(new at([])),s=new $t(n,e),i=new $t(n,e+1),r=[];return this.rs.forEachInRange([s,i],o=>{this.cs(o),r.push(o.key)}),r}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new be(new at([])),s=new $t(n,e),i=new $t(n,e+1);let r=Le();return this.rs.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new $t(e,0),s=this.ns.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class $t{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return be.comparator(e.key,n.key)||Ye(e._s,n._s)}static os(e,n){return Ye(e._s,n._s)||be.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lw{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new Dt($t.ss)}checkEmpty(e){return ne.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new xb(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.gs=this.gs.add(new $t(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return ne.resolve(o)}lookupMutationBatch(e,n){return ne.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.ps(s),r=i<0?0:i;return ne.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return ne.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return ne.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new $t(n,0),i=new $t(n,Number.POSITIVE_INFINITY),r=[];return this.gs.forEachInRange([s,i],o=>{const a=this.ys(o._s);r.push(a)}),ne.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Dt(Ye);return n.forEach(i=>{const r=new $t(i,0),o=new $t(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([r,o],a=>{s=s.add(a._s)})}),ne.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;be.isDocumentKey(r)||(r=r.child(""));const o=new $t(new be(r),0);let a=new Dt(Ye);return this.gs.forEachWhile(l=>{const c=l.key.path;return!!s.isPrefixOf(c)&&(c.length===i&&(a=a.add(l._s)),!0)},o),ne.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(s=>{const i=this.ys(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){it(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return ne.forEach(n.mutations,i=>{const r=new $t(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.gs=s})}An(e){}containsKey(e,n){const s=new $t(n,0),i=this.gs.firstAfterOrEqual(s);return ne.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,ne.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cw{constructor(e){this.Es=e,this.docs=new Pt(be.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Es(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return ne.resolve(s?s.document.mutableCopy():Kt.newInvalidDocument(n))}getEntries(e,n){let s=ss();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():Kt.newInvalidDocument(i))}),ne.resolve(s)}getAllFromCollection(e,n,s){let i=ss();const r=new be(n.child("")),o=this.docs.getIteratorFrom(r);for(;o.hasNext();){const{key:a,value:{document:l}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||X1(Y1(l),s)<=0||(i=i.insert(l.key,l.mutableCopy()))}return ne.resolve(i)}getAllFromCollectionGroup(e,n,s,i){Te()}As(e,n){return ne.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new uw(this)}getSize(e){return ne.resolve(this.size)}}class uw extends sw{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.Yn.addEntry(e,i)):this.Yn.removeEntry(s)}),ne.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hw{constructor(e){this.persistence=e,this.Rs=new Di(n=>Dc(n),Pc),this.lastRemoteSnapshotVersion=Ne.min(),this.highestTargetId=0,this.bs=0,this.Ps=new $c,this.targetCount=0,this.vs=wi.Pn()}forEachTarget(e,n){return this.Rs.forEach((s,i)=>n(i)),ne.resolve()}getLastRemoteSnapshotVersion(e){return ne.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return ne.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),ne.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),ne.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new wi(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,ne.resolve()}updateTargetData(e,n){return this.Dn(n),ne.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,ne.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Rs.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),ne.waitFor(r).next(()=>i)}getTargetCount(e){return ne.resolve(this.targetCount)}getTargetData(e,n){const s=this.Rs.get(n)||null;return ne.resolve(s)}addMatchingKeys(e,n,s){return this.Ps.us(n,s),ne.resolve()}removeMatchingKeys(e,n,s){this.Ps.hs(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),ne.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),ne.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Ps.ds(n);return ne.resolve(s)}containsKey(e,n){return ne.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fw{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new Sc(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new hw(this),this.indexManager=new tw,this.remoteDocumentCache=function(s){return new cw(s)}(s=>this.referenceDelegate.xs(s)),this.It=new Zb(n),this.Ns=new ow(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new aw,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Vs[e.toKey()];return s||(s=new lw(n,this.referenceDelegate),this.Vs[e.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,s){_e("MemoryPersistence","Starting transaction:",e);const i=new dw(this.Ss.next());return this.referenceDelegate.ks(),s(i).next(r=>this.referenceDelegate.Os(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Ms(e,n){return ne.or(Object.values(this.Vs).map(s=>()=>s.containsKey(e,n)))}}class dw extends J1{constructor(e){super(),this.currentSequenceNumber=e}}class Uc{constructor(e){this.persistence=e,this.Fs=new $c,this.$s=null}static Bs(e){return new Uc(e)}get Ls(){if(this.$s)return this.$s;throw Te()}addReference(e,n,s){return this.Fs.addReference(s,n),this.Ls.delete(s.toString()),ne.resolve()}removeReference(e,n,s){return this.Fs.removeReference(s,n),this.Ls.add(s.toString()),ne.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),ne.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(i=>this.Ls.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.Ls.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ne.forEach(this.Ls,s=>{const i=be.fromPath(s);return this.Us(e,i).next(r=>{r||n.removeEntry(i,Ne.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.Us(e,n).next(s=>{s?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}Us(e,n){return ne.or([()=>ne.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class pw{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,s,i){return this.ki(e,n).next(r=>r||this.Oi(e,n,i,s)).next(r=>r||this.Mi(e,n))}ki(e,n){if(rh(n))return ne.resolve(null);let s=ns(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Rl(n,null,"F"),s=ns(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=Le(...r);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(l=>{const c=this.Fi(n,a);return this.$i(n,c,o,l.readTime)?this.ki(e,Rl(n,null,"F")):this.Bi(e,c,n,l)}))})))}Oi(e,n,s,i){return rh(n)||i.isEqual(Ne.min())?this.Mi(e,n):this.Ni.getDocuments(e,s).next(r=>{const o=this.Fi(n,r);return this.$i(n,o,s,i)?this.Mi(e,n):(Xu()<=Ge.DEBUG&&_e("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Nl(n)),this.Bi(e,o,n,Q1(i,-1)))})}Fi(e,n){let s=new Dt(Xm(e));return n.forEach((i,r)=>{Nc(e,r)&&(s=s.add(r))}),s}$i(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Mi(e,n){return Xu()<=Ge.DEBUG&&_e("QueryEngine","Using full collection scan to execute query:",Nl(n)),this.Ni.getDocumentsMatchingQuery(e,n,Ts.min())}Bi(e,n,s,i){return this.Ni.getDocumentsMatchingQuery(e,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mw{constructor(e,n,s,i){this.persistence=e,this.Li=n,this.It=i,this.Ui=new Pt(Ye),this.qi=new Di(r=>Dc(r),Pc),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(s)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new rw(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ui))}}function gw(t,e,n,s){return new mw(t,e,n,s)}async function _g(t,e){const n=Se(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.Qi(e),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let l=Le();for(const c of i){o.push(c.batchId);for(const h of c.mutations)l=l.add(h.key)}for(const c of r){a.push(c.batchId);for(const h of c.mutations)l=l.add(h.key)}return n.localDocuments.getDocuments(s,l).next(c=>({ji:c,removedBatchIds:o,addedBatchIds:a}))})})}function _w(t,e){const n=Se(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,c){const h=l.batch,f=h.keys();let d=ne.resolve();return f.forEach(m=>{d=d.next(()=>c.getEntry(a,m)).next(_=>{const v=l.docVersions.get(m);it(v!==null),_.version.compareTo(v)<0&&(h.applyToRemoteDocument(_,l),_.isValidDocument()&&(_.setReadTime(l.commitVersion),c.addEntry(_)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,h))}(n,s,e,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=Le();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,i))})}function vg(t){const e=Se(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function vw(t,e){const n=Se(t),s=e.snapshotVersion;let i=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.Ui;const a=[];e.targetChanges.forEach((h,f)=>{const d=i.get(f);if(!d)return;a.push(n.Cs.removeMatchingKeys(r,h.removedDocuments,f).next(()=>n.Cs.addMatchingKeys(r,h.addedDocuments,f)));let m=d.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.has(f)?m=m.withResumeToken(Zt.EMPTY_BYTE_STRING,Ne.min()).withLastLimboFreeSnapshotVersion(Ne.min()):h.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(h.resumeToken,s)),i=i.insert(f,m),function(_,v,y){return _.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-_.snapshotVersion.toMicroseconds()>=3e8?!0:y.addedDocuments.size+y.modifiedDocuments.size+y.removedDocuments.size>0}(d,m,h)&&a.push(n.Cs.updateTargetData(r,m))});let l=ss(),c=Le();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,h))}),a.push(yw(r,o,e.documentUpdates).next(h=>{l=h.Wi,c=h.zi})),!s.isEqual(Ne.min())){const h=n.Cs.getLastRemoteSnapshotVersion(r).next(f=>n.Cs.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(h)}return ne.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,l,c)).next(()=>l)}).then(r=>(n.Ui=i,r))}function yw(t,e,n){let s=Le(),i=Le();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let o=ss();return n.forEach((a,l)=>{const c=r.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(Ne.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):_e("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{Wi:o,zi:i}})}function bw(t,e){const n=Se(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function ww(t,e){const n=Se(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Cs.getTargetData(s,e).next(r=>r?(i=r,ne.resolve(i)):n.Cs.allocateTargetId(s).next(o=>(i=new Fs(e,o,0,s.currentSequenceNumber),n.Cs.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.Ui.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(s.targetId,s),n.qi.set(e,s.targetId)),s})}async function $l(t,e,n){const s=Se(t),i=s.Ui.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Mr(o))throw o;_e("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ui=s.Ui.remove(e),s.qi.delete(i.target)}function ph(t,e,n){const s=Se(t);let i=Ne.min(),r=Le();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,l,c){const h=Se(a),f=h.qi.get(c);return f!==void 0?ne.resolve(h.Ui.get(f)):h.Cs.getTargetData(l,c)}(s,o,ns(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{r=l})}).next(()=>s.Li.getDocumentsMatchingQuery(o,e,n?i:Ne.min(),n?r:Le())).next(a=>(kw(s,_b(e),a),{documents:a,Hi:r})))}function kw(t,e,n){let s=t.Ki.get(e)||Ne.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),t.Ki.set(e,s)}class mh{constructor(){this.activeTargetIds=cg()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Ew{constructor(){this.Lr=new mh,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,n,s){this.Ur[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new mh,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iw{qr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){_e("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){_e("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tw={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cw{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sw extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,s,i,r){const o=this.ho(e,n);_e("RestConnection","Sending: ",o,s);const a={};return this.lo(a,i,r),this.fo(e,o,a,s).then(l=>(_e("RestConnection","Received: ",l),l),l=>{throw Sl("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",s),l})}_o(e,n,s,i,r,o){return this.ao(e,n,s,i,r)}lo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Ai,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>e[r]=i),s&&s.headers.forEach((i,r)=>e[r]=i)}ho(e,n){const s=Tw[e];return`${this.oo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,s,i){return new Promise((r,o)=>{const a=new F1;a.setWithCredentials(!0),a.listenOnce(M1.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Xa.NO_ERROR:const c=a.getResponseJson();_e("Connection","XHR received:",JSON.stringify(c)),r(c);break;case Xa.TIMEOUT:_e("Connection",'RPC "'+e+'" timed out'),o(new we(te.DEADLINE_EXCEEDED,"Request time out"));break;case Xa.HTTP_ERROR:const h=a.getStatus();if(_e("Connection",'RPC "'+e+'" failed with status:',h,"response text:",a.getResponseText()),h>0){const f=a.getResponseJson().error;if(f&&f.status&&f.message){const d=function(m){const _=m.toLowerCase().replace(/_/g,"-");return Object.values(te).indexOf(_)>=0?_:te.UNKNOWN}(f.status);o(new we(d,f.message))}else o(new we(te.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new we(te.UNAVAILABLE,"Connection failed."));break;default:Te()}}finally{_e("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(i);a.send(n,"POST",l,s,15)})}wo(e,n,s){const i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=O1(),o=L1(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new U1({})),this.lo(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const l=i.join("");_e("Connection","Creating WebChannel: "+l,a);const c=r.createWebChannel(l,a);let h=!1,f=!1;const d=new Cw({Hr:_=>{f?_e("Connection","Not sending because WebChannel is closed:",_):(h||(_e("Connection","Opening WebChannel transport."),c.open(),h=!0),_e("Connection","WebChannel sending:",_),c.send(_))},Jr:()=>c.close()}),m=(_,v,y)=>{_.listen(v,E=>{try{y(E)}catch(I){setTimeout(()=>{throw I},0)}})};return m(c,to.EventType.OPEN,()=>{f||_e("Connection","WebChannel transport opened.")}),m(c,to.EventType.CLOSE,()=>{f||(f=!0,_e("Connection","WebChannel transport closed"),d.io())}),m(c,to.EventType.ERROR,_=>{f||(f=!0,Sl("Connection","WebChannel transport errored:",_),d.io(new we(te.UNAVAILABLE,"The operation could not be completed")))}),m(c,to.EventType.MESSAGE,_=>{var v;if(!f){const y=_.data[0];it(!!y);const E=y,I=E.error||((v=E[0])===null||v===void 0?void 0:v.error);if(I){_e("Connection","WebChannel received error:",I);const L=I.status;let A=function(F){const O=kt[F];if(O!==void 0)return rg(O)}(L),M=I.message;A===void 0&&(A=te.INTERNAL,M="Unknown error status: "+L+" with message "+I.message),f=!0,d.io(new we(A,M)),c.close()}else _e("Connection","WebChannel received:",y),d.ro(y)}}),m(o,$1.STAT_EVENT,_=>{_.stat===Qu.PROXY?_e("Connection","Detected buffering proxy"):_.stat===Qu.NOPROXY&&_e("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}function Ja(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ga(t){return new $b(t,!0)}class yg{constructor(e,n,s=1e3,i=1.5,r=6e4){this.Hs=e,this.timerId=n,this.mo=s,this.yo=i,this.po=r,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-s);i>0&&_e("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bg{constructor(e,n,s,i,r,o,a,l){this.Hs=e,this.vo=s,this.Vo=i,this.So=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Do=0,this.Co=null,this.xo=null,this.stream=null,this.No=new yg(e,n)}ko(){return this.state===1||this.state===5||this.Oo()}Oo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Mo()}async stop(){this.ko()&&await this.close(0)}Fo(){this.state=0,this.No.reset()}$o(){this.Oo()&&this.Co===null&&(this.Co=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.Bo()))}Lo(e){this.Uo(),this.stream.send(e)}async Bo(){if(this.Oo())return this.close(0)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}qo(){this.xo&&(this.xo.cancel(),this.xo=null)}async close(e,n){this.Uo(),this.qo(),this.No.cancel(),this.Do++,e!==4?this.No.reset():n&&n.code===te.RESOURCE_EXHAUSTED?(ts(n.toString()),ts("Using maximum backoff delay to prevent overloading the backend."),this.No.Ao()):n&&n.code===te.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Ko(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}Ko(){}auth(){this.state=1;const e=this.Go(this.Do),n=this.Do;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Do===n&&this.Qo(s,i)},s=>{e(()=>{const i=new we(te.UNKNOWN,"Fetching auth token failed: "+s.message);return this.jo(i)})})}Qo(e,n){const s=this.Go(this.Do);this.stream=this.Wo(e,n),this.stream.Yr(()=>{s(()=>(this.state=2,this.xo=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.Oo()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{s(()=>this.jo(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Mo(){this.state=5,this.No.Ro(async()=>{this.state=0,this.start()})}jo(e){return _e("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Go(e){return n=>{this.Hs.enqueueAndForget(()=>this.Do===e?n():(_e("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Aw extends bg{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.It=r}Wo(e,n){return this.So.wo("Listen",e,n)}onMessage(e){this.No.reset();const n=Bb(this.It,e),s=function(i){if(!("targetChange"in i))return Ne.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?Ne.min():r.readTime?xn(r.readTime):Ne.min()}(e);return this.listener.zo(n,s)}Ho(e){const n={};n.database=Ml(this.It),n.addTarget=function(i,r){let o;const a=r.target;return o=Pl(a)?{documents:qb(i,a)}:{query:Hb(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=fg(i,r.resumeToken):r.snapshotVersion.compareTo(Ne.min())>0&&(o.readTime=$o(i,r.snapshotVersion.toTimestamp())),o}(this.It,e);const s=zb(this.It,e);s&&(n.labels=s),this.Lo(n)}Jo(e){const n={};n.database=Ml(this.It),n.removeTarget=e,this.Lo(n)}}class Dw extends bg{constructor(e,n,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.It=r,this.Yo=!1}get Xo(){return this.Yo}start(){this.Yo=!1,this.lastStreamToken=void 0,super.start()}Ko(){this.Yo&&this.Zo([])}Wo(e,n){return this.So.wo("Write",e,n)}onMessage(e){if(it(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Yo){this.No.reset();const n=jb(e.writeResults,e.commitTime),s=xn(e.commitTime);return this.listener.tu(s,n)}return it(!e.writeResults||e.writeResults.length===0),this.Yo=!0,this.listener.eu()}nu(){const e={};e.database=Ml(this.It),this.Lo(e)}Zo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>Vb(this.It,s))};this.Lo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pw extends class{}{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.So=s,this.It=i,this.su=!1}iu(){if(this.su)throw new we(te.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,s){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.So.ao(e,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===te.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new we(te.UNKNOWN,i.toString())})}_o(e,n,s,i){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.So._o(e,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===te.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new we(te.UNKNOWN,r.toString())})}terminate(){this.su=!0}}class Rw{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ru=0,this.ou=null,this.uu=!0}cu(){this.ru===0&&(this.au("Unknown"),this.ou=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ou=null,this.hu("Backend didn't respond within 10 seconds."),this.au("Offline"),Promise.resolve())))}lu(e){this.state==="Online"?this.au("Unknown"):(this.ru++,this.ru>=1&&(this.fu(),this.hu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.au("Offline")))}set(e){this.fu(),this.ru=0,e==="Online"&&(this.uu=!1),this.au(e)}au(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}hu(e){const n=`Could not reach Cloud Firestore backend. ${e}
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
 */class Nw{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.du=[],this._u=new Map,this.wu=new Set,this.mu=[],this.gu=r,this.gu.qr(o=>{s.enqueueAndForget(async()=>{Zs(this)&&(_e("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=Se(a);l.wu.add(4),await Fr(l),l.yu.set("Unknown"),l.wu.delete(4),await _a(l)}(this))})}),this.yu=new Rw(s,i)}}async function _a(t){if(Zs(t))for(const e of t.mu)await e(!0)}async function Fr(t){for(const e of t.mu)await e(!1)}function wg(t,e){const n=Se(t);n._u.has(e.targetId)||(n._u.set(e.targetId,e),jc(n)?Vc(n):Pi(n).Oo()&&Bc(n,e))}function kg(t,e){const n=Se(t),s=Pi(n);n._u.delete(e),s.Oo()&&Eg(n,e),n._u.size===0&&(s.Oo()?s.$o():Zs(n)&&n.yu.set("Unknown"))}function Bc(t,e){t.pu.Mt(e.targetId),Pi(t).Ho(e)}function Eg(t,e){t.pu.Mt(e),Pi(t).Jo(e)}function Vc(t){t.pu=new Ob({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t._u.get(e)||null}),Pi(t).start(),t.yu.cu()}function jc(t){return Zs(t)&&!Pi(t).ko()&&t._u.size>0}function Zs(t){return Se(t).wu.size===0}function Ig(t){t.pu=void 0}async function Ow(t){t._u.forEach((e,n)=>{Bc(t,e)})}async function Lw(t,e){Ig(t),jc(t)?(t.yu.lu(e),Vc(t)):t.yu.set("Unknown")}async function Mw(t,e,n){if(t.yu.set("Online"),e instanceof hg&&e.state===2&&e.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s._u.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s._u.delete(o),s.pu.removeTarget(o))}(t,e)}catch(s){_e("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Uo(t,s)}else if(e instanceof co?t.pu.Gt(e):e instanceof ug?t.pu.Yt(e):t.pu.Wt(e),!n.isEqual(Ne.min()))try{const s=await vg(t.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.pu.te(r);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const c=i._u.get(l);c&&i._u.set(l,c.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const l=i._u.get(a);if(!l)return;i._u.set(a,l.withResumeToken(Zt.EMPTY_BYTE_STRING,l.snapshotVersion)),Eg(i,a);const c=new Fs(l.target,a,1,l.sequenceNumber);Bc(i,c)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){_e("RemoteStore","Failed to raise snapshot:",s),await Uo(t,s)}}async function Uo(t,e,n){if(!Mr(e))throw e;t.wu.add(1),await Fr(t),t.yu.set("Offline"),n||(n=()=>vg(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{_e("RemoteStore","Retrying IndexedDB access"),await n(),t.wu.delete(1),await _a(t)})}function Tg(t,e){return e().catch(n=>Uo(t,n,e))}async function va(t){const e=Se(t),n=Ss(e);let s=e.du.length>0?e.du[e.du.length-1].batchId:-1;for(;$w(e);)try{const i=await bw(e.localStore,s);if(i===null){e.du.length===0&&n.$o();break}s=i.batchId,Uw(e,i)}catch(i){await Uo(e,i)}Cg(e)&&Sg(e)}function $w(t){return Zs(t)&&t.du.length<10}function Uw(t,e){t.du.push(e);const n=Ss(t);n.Oo()&&n.Xo&&n.Zo(e.mutations)}function Cg(t){return Zs(t)&&!Ss(t).ko()&&t.du.length>0}function Sg(t){Ss(t).start()}async function Fw(t){Ss(t).nu()}async function Bw(t){const e=Ss(t);for(const n of t.du)e.Zo(n.mutations)}async function Vw(t,e,n){const s=t.du.shift(),i=Mc.from(s,e,n);await Tg(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await va(t)}async function jw(t,e){e&&Ss(t).Xo&&await async function(n,s){if(i=s.code,Ab(i)&&i!==te.ABORTED){const r=n.du.shift();Ss(n).Fo(),await Tg(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await va(n)}var i}(t,e),Cg(t)&&Sg(t)}async function _h(t,e){const n=Se(t);n.asyncQueue.verifyOperationInProgress(),_e("RemoteStore","RemoteStore received new credentials");const s=Zs(n);n.wu.add(3),await Fr(n),s&&n.yu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.wu.delete(3),await _a(n)}async function qw(t,e){const n=Se(t);e?(n.wu.delete(2),await _a(n)):e||(n.wu.add(2),await Fr(n),n.yu.set("Unknown"))}function Pi(t){return t.Iu||(t.Iu=function(e,n,s){const i=Se(e);return i.iu(),new Aw(n,i.So,i.authCredentials,i.appCheckCredentials,i.It,s)}(t.datastore,t.asyncQueue,{Yr:Ow.bind(null,t),Zr:Lw.bind(null,t),zo:Mw.bind(null,t)}),t.mu.push(async e=>{e?(t.Iu.Fo(),jc(t)?Vc(t):t.yu.set("Unknown")):(await t.Iu.stop(),Ig(t))})),t.Iu}function Ss(t){return t.Tu||(t.Tu=function(e,n,s){const i=Se(e);return i.iu(),new Dw(n,i.So,i.authCredentials,i.appCheckCredentials,i.It,s)}(t.datastore,t.asyncQueue,{Yr:Fw.bind(null,t),Zr:jw.bind(null,t),eu:Bw.bind(null,t),tu:Vw.bind(null,t)}),t.mu.push(async e=>{e?(t.Tu.Fo(),await va(t)):(await t.Tu.stop(),t.du.length>0&&(_e("RemoteStore",`Stopping write stream with ${t.du.length} pending writes`),t.du=[]))})),t.Tu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new ys,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new qc(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new we(te.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Hc(t,e){if(ts("AsyncQueue",`${e}: ${t}`),Mr(t))return new we(te.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e){this.comparator=e?(n,s)=>e(n,s)||be.comparator(n.key,s.key):(n,s)=>be.comparator(n.key,s.key),this.keyedMap=Hi(),this.sortedSet=new Pt(this.comparator)}static emptySet(e){return new hi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof hi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class vh{constructor(){this.Eu=new Pt(be.comparator)}track(e){const n=e.doc.key,s=this.Eu.get(n);s?e.type!==0&&s.type===3?this.Eu=this.Eu.insert(n,e):e.type===3&&s.type!==1?this.Eu=this.Eu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Eu=this.Eu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Eu=this.Eu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Eu=this.Eu.remove(n):e.type===1&&s.type===2?this.Eu=this.Eu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Eu=this.Eu.insert(n,{type:2,doc:e.doc}):Te():this.Eu=this.Eu.insert(n,e)}Au(){const e=[];return this.Eu.inorderTraversal((n,s)=>{e.push(s)}),e}}class ki{constructor(e,n,s,i,r,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,s,i,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new ki(e,n,hi.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&fa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hw{constructor(){this.Ru=void 0,this.listeners=[]}}class Kw{constructor(){this.queries=new Di(e=>Ym(e),fa),this.onlineState="Unknown",this.bu=new Set}}async function Ag(t,e){const n=Se(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new Hw),i)try{r.Ru=await n.onListen(s)}catch(o){const a=Hc(o,`Initialization of query '${Nl(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,r),r.listeners.push(e),e.Pu(n.onlineState),r.Ru&&e.vu(r.Ru)&&Kc(n)}async function Dg(t,e){const n=Se(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function zw(t,e){const n=Se(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.vu(i)&&(s=!0);o.Ru=i}}s&&Kc(n)}function Gw(t,e,n){const s=Se(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function Kc(t){t.bu.forEach(e=>{e.next()})}class Pg{constructor(e,n,s){this.query=e,this.Vu=n,this.Su=!1,this.Du=null,this.onlineState="Unknown",this.options=s||{}}vu(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new ki(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Su?this.Cu(e)&&(this.Vu.next(e),n=!0):this.xu(e,this.onlineState)&&(this.Nu(e),n=!0),this.Du=e,n}onError(e){this.Vu.error(e)}Pu(e){this.onlineState=e;let n=!1;return this.Du&&!this.Su&&this.xu(this.Du,e)&&(this.Nu(this.Du),n=!0),n}xu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.ku||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Cu(e){if(e.docChanges.length>0)return!0;const n=this.Du&&this.Du.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Nu(e){e=ki.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Su=!0,this.Vu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg{constructor(e){this.key=e}}class Ng{constructor(e){this.key=e}}class Ww{constructor(e,n){this.query=e,this.Uu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=Le(),this.mutatedKeys=Le(),this.Gu=Xm(e),this.Qu=new hi(this.Gu)}get ju(){return this.Uu}Wu(e,n){const s=n?n.zu:new vh,i=n?n.Qu:this.Qu;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,f)=>{const d=i.get(h),m=Nc(this.query,f)?f:null,_=!!d&&this.mutatedKeys.has(d.key),v=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let y=!1;d&&m?d.data.isEqual(m.data)?_!==v&&(s.track({type:3,doc:m}),y=!0):this.Hu(d,m)||(s.track({type:2,doc:m}),y=!0,(l&&this.Gu(m,l)>0||c&&this.Gu(m,c)<0)&&(a=!0)):!d&&m?(s.track({type:0,doc:m}),y=!0):d&&!m&&(s.track({type:1,doc:d}),y=!0,(l||c)&&(a=!0)),y&&(m?(o=o.add(m),r=v?r.add(h):r.delete(h)):(o=o.delete(h),r=r.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),r=r.delete(h.key),s.track({type:1,doc:h})}return{Qu:o,zu:s,$i:a,mutatedKeys:r}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const i=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const r=e.zu.Au();r.sort((c,h)=>function(f,d){const m=_=>{switch(_){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Te()}};return m(f)-m(d)}(c.type,h.type)||this.Gu(c.doc,h.doc)),this.Ju(s);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,l=a!==this.qu;return this.qu=a,r.length!==0||l?{snapshot:new ki(this.query,e.Qu,i,r,e.mutatedKeys,a===0,l,!1,!!s&&s.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}Pu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new vh,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.Uu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.Uu=this.Uu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Uu=this.Uu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=Le(),this.Qu.forEach(s=>{this.Zu(s.key)&&(this.Ku=this.Ku.add(s.key))});const n=[];return e.forEach(s=>{this.Ku.has(s)||n.push(new Ng(s))}),this.Ku.forEach(s=>{e.has(s)||n.push(new Rg(s))}),n}tc(e){this.Uu=e.Hi,this.Ku=Le();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return ki.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class Qw{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class Yw{constructor(e){this.key=e,this.nc=!1}}class Xw{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new Di(a=>Ym(a),fa),this.rc=new Map,this.oc=new Set,this.uc=new Pt(be.comparator),this.cc=new Map,this.ac=new $c,this.hc={},this.lc=new Map,this.fc=wi.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function xw(t,e){const n=ak(t);let s,i;const r=n.ic.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.ec();else{const o=await ww(n.localStore,ns(e));n.isPrimaryClient&&wg(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await Jw(n,e,s,a==="current",o.resumeToken)}return i}async function Jw(t,e,n,s,i){t._c=(f,d,m)=>async function(_,v,y,E){let I=v.view.Wu(y);I.$i&&(I=await ph(_.localStore,v.query,!1).then(({documents:M})=>v.view.Wu(M,I)));const L=E&&E.targetChanges.get(v.targetId),A=v.view.applyChanges(I,_.isPrimaryClient,L);return bh(_,v.targetId,A.Xu),A.snapshot}(t,f,d,m);const r=await ph(t.localStore,e,!0),o=new Ww(e,r.Hi),a=o.Wu(r.documents),l=Ur.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,l);bh(t,n,c.Xu);const h=new Qw(e,n,o);return t.ic.set(e,h),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),c.snapshot}async function Zw(t,e){const n=Se(t),s=n.ic.get(e),i=n.rc.get(s.targetId);if(i.length>1)return n.rc.set(s.targetId,i.filter(r=>!fa(r,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await $l(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),kg(n.remoteStore,s.targetId),Ul(n,s.targetId)}).catch(Lr)):(Ul(n,s.targetId),await $l(n.localStore,s.targetId,!0))}async function ek(t,e,n){const s=lk(t);try{const i=await function(r,o){const a=Se(r),l=At.now(),c=o.reduce((d,m)=>d.add(m.key),Le());let h,f;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let m=ss(),_=Le();return a.Gi.getEntries(d,c).next(v=>{m=v,m.forEach((y,E)=>{E.isValidDocument()||(_=_.add(y))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,m)).next(v=>{h=v;const y=[];for(const E of o){const I=Tb(E,h.get(E.key).overlayedDocument);I!=null&&y.push(new Ps(E.key,I,Wm(I.value.mapValue),Tn.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,y,o)}).next(v=>{f=v;const y=v.applyToLocalDocumentSet(h,_);return a.documentOverlayCache.saveOverlays(d,v.batchId,y)})}).then(()=>({batchId:f.batchId,changes:ag(h)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let l=r.hc[r.currentUser.toKey()];l||(l=new Pt(Ye)),l=l.insert(o,a),r.hc[r.currentUser.toKey()]=l}(s,i.batchId,n),await Br(s,i.changes),await va(s.remoteStore)}catch(i){const r=Hc(i,"Failed to persist write");n.reject(r)}}async function Og(t,e){const n=Se(t);try{const s=await vw(n.localStore,e);e.targetChanges.forEach((i,r)=>{const o=n.cc.get(r);o&&(it(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.nc=!0:i.modifiedDocuments.size>0?it(o.nc):i.removedDocuments.size>0&&(it(o.nc),o.nc=!1))}),await Br(n,s,e)}catch(s){await Lr(s)}}function yh(t,e,n){const s=Se(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.ic.forEach((r,o)=>{const a=o.view.Pu(e);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=Se(r);a.onlineState=o;let l=!1;a.queries.forEach((c,h)=>{for(const f of h.listeners)f.Pu(o)&&(l=!0)}),l&&Kc(a)}(s.eventManager,e),i.length&&s.sc.zo(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function tk(t,e,n){const s=Se(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.cc.get(e),r=i&&i.key;if(r){let o=new Pt(be.comparator);o=o.insert(r,Kt.newNoDocument(r,Ne.min()));const a=Le().add(r),l=new ma(Ne.min(),new Map,new Dt(Ye),o,a);await Og(s,l),s.uc=s.uc.remove(r),s.cc.delete(e),zc(s)}else await $l(s.localStore,e,!1).then(()=>Ul(s,e,n)).catch(Lr)}async function nk(t,e){const n=Se(t),s=e.batch.batchId;try{const i=await _w(n.localStore,e);Mg(n,s,null),Lg(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Br(n,i)}catch(i){await Lr(i)}}async function sk(t,e,n){const s=Se(t);try{const i=await function(r,o){const a=Se(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let c;return a.mutationQueue.lookupMutationBatch(l,o).next(h=>(it(h!==null),c=h.keys(),a.mutationQueue.removeMutationBatch(l,h))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,c,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,c)).next(()=>a.localDocuments.getDocuments(l,c))})}(s.localStore,e);Mg(s,e,n),Lg(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Br(s,i)}catch(i){await Lr(i)}}function Lg(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function Mg(t,e,n){const s=Se(t);let i=s.hc[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(n?r.reject(n):r.resolve(),i=i.remove(e)),s.hc[s.currentUser.toKey()]=i}}function Ul(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.rc.get(e))t.ic.delete(s),n&&t.sc.wc(s,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(s=>{t.ac.containsKey(s)||$g(t,s)})}function $g(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(kg(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),zc(t))}function bh(t,e,n){for(const s of n)s instanceof Rg?(t.ac.addReference(s.key,e),ik(t,s)):s instanceof Ng?(_e("SyncEngine","Document no longer in limbo: "+s.key),t.ac.removeReference(s.key,e),t.ac.containsKey(s.key)||$g(t,s.key)):Te()}function ik(t,e){const n=e.key,s=n.path.canonicalString();t.uc.get(n)||t.oc.has(s)||(_e("SyncEngine","New document in limbo: "+n),t.oc.add(s),zc(t))}function zc(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new be(at.fromString(e)),s=t.fc.next();t.cc.set(s,new Yw(n)),t.uc=t.uc.insert(n,s),wg(t.remoteStore,new Fs(ns(Rc(n.path)),s,2,Sc.at))}}async function Br(t,e,n){const s=Se(t),i=[],r=[],o=[];s.ic.isEmpty()||(s.ic.forEach((a,l)=>{o.push(s._c(l,e,n).then(c=>{if((c||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const h=Fc.Ci(l.targetId,c);r.push(h)}}))}),await Promise.all(o),s.sc.zo(i),await async function(a,l){const c=Se(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>ne.forEach(l,f=>ne.forEach(f.Si,d=>c.persistence.referenceDelegate.addReference(h,f.targetId,d)).next(()=>ne.forEach(f.Di,d=>c.persistence.referenceDelegate.removeReference(h,f.targetId,d)))))}catch(h){if(!Mr(h))throw h;_e("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const f=h.targetId;if(!h.fromCache){const d=c.Ui.get(f),m=d.snapshotVersion,_=d.withLastLimboFreeSnapshotVersion(m);c.Ui=c.Ui.insert(f,_)}}}(s.localStore,r))}async function rk(t,e){const n=Se(t);if(!n.currentUser.isEqual(e)){_e("SyncEngine","User change. New user:",e.toKey());const s=await _g(n.localStore,e);n.currentUser=e,function(i,r){i.lc.forEach(o=>{o.forEach(a=>{a.reject(new we(te.CANCELLED,r))})}),i.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Br(n,s.ji)}}function ok(t,e){const n=Se(t),s=n.cc.get(e);if(s&&s.nc)return Le().add(s.key);{let i=Le();const r=n.rc.get(e);if(!r)return i;for(const o of r){const a=n.ic.get(o);i=i.unionWith(a.view.ju)}return i}}function ak(t){const e=Se(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Og.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ok.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=tk.bind(null,e),e.sc.zo=zw.bind(null,e.eventManager),e.sc.wc=Gw.bind(null,e.eventManager),e}function lk(t){const e=Se(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=nk.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=sk.bind(null,e),e}class ck{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=ga(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return gw(this.persistence,new pw,e.initialUser,this.It)}yc(e){return new fw(Uc.Bs,this.It)}gc(e){return new Ew}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class uk{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>yh(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=rk.bind(null,this.syncEngine),await qw(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Kw}createDatastore(e){const n=ga(e.databaseInfo.databaseId),s=(i=e.databaseInfo,new Sw(i));var i;return function(r,o,a,l){return new Pw(r,o,a,l)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,i=e.asyncQueue,r=a=>yh(this.syncEngine,a,0),o=gh.C()?new gh:new Iw,new Nw(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(e,n){return function(s,i,r,o,a,l,c){const h=new Xw(s,i,r,o,a,l);return c&&(h.dc=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=Se(e);_e("RemoteStore","RemoteStore shutting down."),n.wu.add(5),await Fr(n),n.gu.shutdown(),n.yu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ug(t,e,n){if(!n)throw new we(te.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function hk(t,e,n,s){if(e===!0&&s===!0)throw new we(te.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function wh(t){if(!be.isDocumentKey(t))throw new we(te.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function kh(t){if(be.isDocumentKey(t))throw new we(te.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Gc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Te()}function Mn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new we(te.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Gc(t);throw new we(te.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eh=new Map;class Ih{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new we(te.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new we(te.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,hk("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ih({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new we(te.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new we(te.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ih(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new B1;switch(n.type){case"gapi":const s=n.client;return new H1(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new we(te.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Eh.get(e);n&&(_e("ComponentProvider","Removing Datastore"),Eh.delete(e),n.terminate())}(this),Promise.resolve()}}function fk(t,e,n,s={}){var i;const r=(t=Mn(t,ya))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==e&&Sl("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=Wt.MOCK_USER;else{o=Iy(s.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=s.mockUserToken.sub||s.mockUserToken.user_id;if(!l)throw new we(te.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Wt(l)}t._authCredentials=new V1(new qm(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new bs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new gn(this.firestore,e,this._key)}}class Vr{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Vr(this.firestore,e,this._query)}}class bs extends Vr{constructor(e,n,s){super(e,n,Rc(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new gn(this.firestore,null,new be(e))}withConverter(e){return new bs(this.firestore,e,this._path)}}function _n(t,e,...n){if(t=Jt(t),Ug("collection","path",e),t instanceof ya){const s=at.fromString(e,...n);return kh(s),new bs(t,null,s)}{if(!(t instanceof gn||t instanceof bs))throw new we(te.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(at.fromString(e,...n));return kh(s),new bs(t.firestore,null,s)}}function is(t,e,...n){if(t=Jt(t),arguments.length===1&&(e=Hm.R()),Ug("doc","path",e),t instanceof ya){const s=at.fromString(e,...n);return wh(s),new gn(t,null,new be(s))}{if(!(t instanceof gn||t instanceof bs))throw new we(te.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(at.fromString(e,...n));return wh(s),new gn(t.firestore,t instanceof bs?t.converter:null,new be(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Fg{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):ts("Uncaught Error in snapshot listener:",e)}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dk{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=Wt.UNAUTHENTICATED,this.clientId=Hm.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{_e("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(_e("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new we(te.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ys;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Hc(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function pk(t,e){t.asyncQueue.verifyOperationInProgress(),_e("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await _g(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function mk(t,e){t.asyncQueue.verifyOperationInProgress();const n=await gk(t);_e("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(i=>_h(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,r)=>_h(e.remoteStore,r)),t.onlineComponents=e}async function gk(t){return t.offlineComponents||(_e("FirestoreClient","Using default OfflineComponentProvider"),await pk(t,new ck)),t.offlineComponents}async function Bg(t){return t.onlineComponents||(_e("FirestoreClient","Using default OnlineComponentProvider"),await mk(t,new uk)),t.onlineComponents}function _k(t){return Bg(t).then(e=>e.syncEngine)}async function Fl(t){const e=await Bg(t),n=e.eventManager;return n.onListen=xw.bind(null,e.syncEngine),n.onUnlisten=Zw.bind(null,e.syncEngine),n}function vk(t,e,n={}){const s=new ys;return t.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,l){const c=new Fg({next:f=>{r.enqueueAndForget(()=>Dg(i,h)),f.fromCache&&a.source==="server"?l.reject(new we(te.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(f)},error:f=>l.reject(f)}),h=new Pg(o,c,{includeMetadataChanges:!0,ku:!0});return Ag(i,h)}(await Fl(t),t.asyncQueue,e,n,s)),s.promise}class yk{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.No=new yg(this,"async_queue_retry"),this.Wc=()=>{const n=Ja();n&&_e("AsyncQueue","Visibility state changed to "+n.visibilityState),this.No.Po()};const e=Ja();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.Uc){this.Uc=!0,this.Qc=e||!1;const n=Ja();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.Uc)return new Promise(()=>{});const n=new ys;return this.Hc(()=>this.Uc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.No.reset()}catch(e){if(!Mr(e))throw e;_e("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.No.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(s=>{this.Kc=s,this.Gc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw ts("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Gc=!1,s))));return this.Bc=n,n}enqueueAfterDelay(e,n,s){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const i=qc.createAndSchedule(this,e,n,s,r=>this.Yc(r));return this.qc.push(i),i}zc(){this.Kc&&Te()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.qc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.qc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.qc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.qc.indexOf(e);this.qc.splice(n,1)}}function Th(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Ws extends ya{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=new yk,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Vg(this),this._firestoreClient.terminate()}}function bk(t,e){const n=typeof t=="object"?t:Up(),s=typeof t=="string"?t:e||"(default)",i=ic(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=wy("firestore");r&&fk(i,...r)}return i}function Wc(t){return t._firestoreClient||Vg(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Vg(t){var e;const n=t._freezeSettings(),s=function(i,r,o,a){return new eb(i,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new dk(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Ei{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ei(Zt.fromBase64String(e))}catch(n){throw new we(te.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ei(Zt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new we(te.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Qt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Yc{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new we(te.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new we(te.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ye(this._lat,e._lat)||Ye(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wk=/^__.*__$/;class kk{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Ps(e,this.data,this.fieldMask,n,this.fieldTransforms):new $r(e,this.data,n,this.fieldTransforms)}}class jg{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new Ps(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function qg(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Te()}}class Xc{constructor(e,n,s,i,r,o){this.settings=e,this.databaseId=n,this.It=s,this.ignoreUndefinedProperties=i,r===void 0&&this.na(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new Xc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:s,oa:!1});return i.ua(e),i}ca(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:s,oa:!1});return i.na(),i}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return Fo(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(qg(this.sa)&&wk.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class Ek{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.It=s||ga(e)}da(e,n,s,i=!1){return new Xc({sa:e,methodName:n,fa:s,path:Qt.emptyPath(),oa:!1,la:i},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function Hg(t){const e=t._freezeSettings(),n=ga(t._databaseId);return new Ek(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Ik(t,e,n,s,i,r={}){const o=t.da(r.merge||r.mergeFields?2:0,e,n,i);xc("Data must be an object, but it was:",o,s);const a=Kg(s,o);let l,c;if(r.merge)l=new In(o.fieldMask),c=o.fieldTransforms;else if(r.mergeFields){const h=[];for(const f of r.mergeFields){const d=Bl(e,f,n);if(!o.contains(d))throw new we(te.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Gg(h,d)||h.push(d)}l=new In(h),c=o.fieldTransforms.filter(f=>l.covers(f.field))}else l=null,c=o.fieldTransforms;return new kk(new dn(a),l,c)}class wa extends Qc{_toFieldTransform(e){if(e.sa!==2)throw e.sa===1?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof wa}}function Tk(t,e,n,s){const i=t.da(1,e,n);xc("Data must be an object, but it was:",i,s);const r=[],o=dn.empty();Js(s,(l,c)=>{const h=Jc(e,l,n);c=Jt(c);const f=i.ca(h);if(c instanceof wa)r.push(h);else{const d=ka(c,f);d!=null&&(r.push(h),o.set(h,d))}});const a=new In(r);return new jg(o,a,i.fieldTransforms)}function Ck(t,e,n,s,i,r){const o=t.da(1,e,n),a=[Bl(e,s,n)],l=[i];if(r.length%2!=0)throw new we(te.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<r.length;d+=2)a.push(Bl(e,r[d])),l.push(r[d+1]);const c=[],h=dn.empty();for(let d=a.length-1;d>=0;--d)if(!Gg(c,a[d])){const m=a[d];let _=l[d];_=Jt(_);const v=o.ca(m);if(_ instanceof wa)c.push(m);else{const y=ka(_,v);y!=null&&(c.push(m),h.set(m,y))}}const f=new In(c);return new jg(h,f,o.fieldTransforms)}function ka(t,e){if(zg(t=Jt(t)))return xc("Unsupported field value:",e,t),Kg(t,e);if(t instanceof Qc)return function(n,s){if(!qg(s.sa))throw s.ha(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ha(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=ka(o,s.aa(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(t,e)}return function(n,s){if((n=Jt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return yb(s.It,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=At.fromDate(n);return{timestampValue:$o(s.It,i)}}if(n instanceof At){const i=new At(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:$o(s.It,i)}}if(n instanceof Yc)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Ei)return{bytesValue:fg(s.It,n._byteString)};if(n instanceof gn){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s.ha(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Lc(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ha(`Unsupported field value: ${Gc(n)}`)}(t,e)}function Kg(t,e){const n={};return Km(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Js(t,(s,i)=>{const r=ka(i,e.ra(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function zg(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof At||t instanceof Yc||t instanceof Ei||t instanceof gn||t instanceof Qc)}function xc(t,e,n){if(!zg(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Gc(n);throw s==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+s)}}function Bl(t,e,n){if((e=Jt(e))instanceof ba)return e._internalPath;if(typeof e=="string")return Jc(t,e);throw Fo("Field path arguments must be of type string or ",t,!1,void 0,n)}const Sk=new RegExp("[~\\*/\\[\\]]");function Jc(t,e,n){if(e.search(Sk)>=0)throw Fo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ba(...e.split("."))._internalPath}catch{throw Fo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Fo(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${s}`),o&&(l+=` in document ${i}`),l+=")"),new we(te.INVALID_ARGUMENT,a+t+l)}function Gg(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new gn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Ak(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Qg("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Ak extends Wg{data(){return super.data()}}function Qg(t,e){return typeof e=="string"?Jc(t,e):e instanceof ba?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yg(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new we(te.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dk{convertValue(e,n="none"){switch(Gs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Et(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(yi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Te()}}convertObject(e,n){const s={};return Js(e.fields,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(e){return new Yc(Et(e.latitude),Et(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Gm(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(ar(e));default:return null}}convertTimestamp(e){const n=Cs(e);return new At(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=at.fromString(e);it(gg(s));const i=new lr(s.get(1),s.get(3)),r=new be(s.popFirst(5));return i.isEqual(n)||ts(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pk(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Xg extends Wg{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new uo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Qg("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class uo extends Xg{data(e={}){return super.data(e)}}class xg{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ki(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new uo(this._firestore,this._userDataWriter,s.key,s,new Ki(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new we(te.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>({type:"added",doc:new uo(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Ki(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter),oldIndex:-1,newIndex:r++}))}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new uo(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Ki(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,c=-1;return o.type!==0&&(l=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),c=r.indexOf(o.doc.key)),{type:Rk(o.type),doc:a,oldIndex:l,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Rk(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Te()}}class Zc extends Dk{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ei(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new gn(this.firestore,null,n)}}function Ea(t){t=Mn(t,Vr);const e=Mn(t.firestore,Ws),n=Wc(e),s=new Zc(e);return Yg(t._query),vk(n,t._query).then(i=>new xg(e,s,t,i))}function Ia(t,e,n,...s){t=Mn(t,gn);const i=Mn(t.firestore,Ws),r=Hg(i);let o;return o=typeof(e=Jt(e))=="string"||e instanceof ba?Ck(r,"updateDoc",t._key,e,n,s):Tk(r,"updateDoc",t._key,e),eu(i,[o.toMutation(t._key,Tn.exists(!0))])}function Ta(t){return eu(Mn(t.firestore,Ws),[new Oc(t._key,Tn.none())])}function ws(t,e){const n=Mn(t.firestore,Ws),s=is(t),i=Pk(t.converter,e);return eu(n,[Ik(Hg(t.firestore),"addDoc",s._key,i,t.converter!==null,{}).toMutation(s._key,Tn.exists(!1))]).then(()=>s)}function Nk(t,...e){var n,s,i;t=Jt(t);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Th(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(Th(e[o])){const f=e[o];e[o]=(n=f.next)===null||n===void 0?void 0:n.bind(f),e[o+1]=(s=f.error)===null||s===void 0?void 0:s.bind(f),e[o+2]=(i=f.complete)===null||i===void 0?void 0:i.bind(f)}let l,c,h;if(t instanceof gn)c=Mn(t.firestore,Ws),h=Rc(t._key.path),l={next:f=>{e[o]&&e[o](Ok(c,t,f))},error:e[o+1],complete:e[o+2]};else{const f=Mn(t,Vr);c=Mn(f.firestore,Ws),h=f._query;const d=new Zc(c);l={next:m=>{e[o]&&e[o](new xg(c,d,f,m))},error:e[o+1],complete:e[o+2]},Yg(t._query)}return function(f,d,m,_){const v=new Fg(_),y=new Pg(d,v,m);return f.asyncQueue.enqueueAndForget(async()=>Ag(await Fl(f),y)),()=>{v.bc(),f.asyncQueue.enqueueAndForget(async()=>Dg(await Fl(f),y))}}(Wc(c),h,a,l)}function eu(t,e){return function(n,s){const i=new ys;return n.asyncQueue.enqueueAndForget(async()=>ek(await _k(n),s,i)),i.promise}(Wc(t),e)}function Ok(t,e,n){const s=n.docs.get(e._key),i=new Zc(t);return new Xg(t,i,e._key,s,new Ki(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Ai=n})(Ir),gi(new Hs("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new Ws(new j1(n.getProvider("auth-internal")),new z1(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new we(te.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new lr(a.options.projectId,l)}(r,s),r);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),vs(Yu,"3.7.1",t),vs(Yu,"3.7.1","esm2017")})();var Lk="firebase",Mk="9.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vs(Lk,Mk,"app");function tu(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function Jg(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const $k=Jg,Zg=new kr("auth","Firebase",Jg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ch=new nc("@firebase/auth");function ho(t,...e){Ch.logLevel<=Ge.ERROR&&Ch.error(`Auth (${Ir}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cn(t,...e){throw nu(t,...e)}function $n(t,...e){return nu(t,...e)}function Uk(t,e,n){const s=Object.assign(Object.assign({},$k()),{[e]:n});return new kr("auth","Firebase",s).create(e,{appName:t.name})}function nu(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Zg.create(t,...e)}function Ee(t,e,...n){if(!t)throw nu(e,...n)}function Yn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ho(e),new Error(e)}function rs(t,e){t||Yn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sh=new Map;function Xn(t){rs(t instanceof Function,"Expected a class definition");let e=Sh.get(t);return e?(rs(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Sh.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fk(t,e){const n=ic(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(ko(r,e!=null?e:{}))return i;Cn(i,"already-initialized")}return n.initialize({options:e})}function Bk(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Xn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Vk(){return Ah()==="http:"||Ah()==="https:"}function Ah(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Vk()||fy()||"connection"in navigator)?navigator.onLine:!0}function qk(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(e,n){this.shortDelay=e,this.longDelay=n,rs(n>e,"Short delay should be less than long delay!"),this.isMobile=hy()||dy()}get(){return jk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function su(t,e){rs(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e_{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Yn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Yn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Yn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kk=new jr(3e4,6e4);function qr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Hr(t,e,n,s,i={}){return t_(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=Er(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),e_.fetch()(n_(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function t_(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},Hk),e);try{const i=new zk(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw io(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw io(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw io(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw io(t,"user-disabled",o);const h=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Uk(t,h,c);Cn(t,h)}}catch(i){if(i instanceof os)throw i;Cn(t,"network-request-failed")}}async function Kr(t,e,n,s,i={}){const r=await Hr(t,e,n,s,i);return"mfaPendingCredential"in r&&Cn(t,"multi-factor-auth-required",{_serverResponse:r}),r}function n_(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?su(t.config,i):`${t.config.apiScheme}://${i}`}class zk{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s($n(this.auth,"network-request-failed")),Kk.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function io(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=$n(t,e,s);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gk(t,e){return Hr(t,"POST","/v1/accounts:delete",e)}async function Wk(t,e){return Hr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ji(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Qk(t,e=!1){const n=Jt(t),s=await n.getIdToken(e),i=iu(s);Ee(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Ji(Za(i.auth_time)),issuedAtTime:Ji(Za(i.iat)),expirationTime:Ji(Za(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Za(t){return Number(t)*1e3}function iu(t){var e;const[n,s,i]=t.split(".");if(n===void 0||s===void 0||i===void 0)return ho("JWT malformed, contained fewer than 3 sections"),null;try{const r=Rp(s);return r?JSON.parse(r):(ho("Failed to decode base64 JWT payload"),null)}catch(r){return ho("Caught error parsing JWT payload as JSON",(e=r)===null||e===void 0?void 0:e.toString()),null}}function Yk(t){const e=iu(t);return Ee(e,"internal-error"),Ee(typeof e.exp<"u","internal-error"),Ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dr(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof os&&Xk(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function Xk({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ji(this.lastLoginAt),this.creationTime=Ji(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bo(t){var e;const n=t.auth,s=await t.getIdToken(),i=await dr(t,Wk(n,{idToken:s}));Ee(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?eE(r.providerUserInfo):[],a=Zk(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),h=l?c:!1,f={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new s_(r.createdAt,r.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function Jk(t){const e=Jt(t);await Bo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Zk(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function eE(t){return t.map(e=>{var{providerId:n}=e,s=tu(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tE(t,e){const n=await t_(t,{},async()=>{const s=Er({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=n_(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",e_.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ee(e.idToken,"internal-error"),Ee(typeof e.idToken<"u","internal-error"),Ee(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Yk(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return Ee(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await tE(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new pr;return s&&(Ee(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(Ee(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(Ee(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new pr,this.toJSON())}_performRefresh(){return Yn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ls(t,e){Ee(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Bs{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=tu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new xk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new s_(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await dr(this,this.stsTokenManager.getToken(this.auth,e));return Ee(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Qk(this,e)}reload(){return Jk(this)}_assign(e){this!==e&&(Ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Bs(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){Ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Bo(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await dr(this,Gk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,h;const f=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,m=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,y=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,E=(c=n.createdAt)!==null&&c!==void 0?c:void 0,I=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:L,emailVerified:A,isAnonymous:M,providerData:F,stsTokenManager:O}=n;Ee(L&&O,e,"internal-error");const z=pr.fromJSON(this.name,O);Ee(typeof L=="string",e,"internal-error"),ls(f,e.name),ls(d,e.name),Ee(typeof A=="boolean",e,"internal-error"),Ee(typeof M=="boolean",e,"internal-error"),ls(m,e.name),ls(_,e.name),ls(v,e.name),ls(y,e.name),ls(E,e.name),ls(I,e.name);const $=new Bs({uid:L,auth:e,email:d,emailVerified:A,displayName:f,isAnonymous:M,photoURL:_,phoneNumber:m,tenantId:v,stsTokenManager:z,createdAt:E,lastLoginAt:I});return F&&Array.isArray(F)&&($.providerData=F.map(U=>Object.assign({},U))),y&&($._redirectEventId=y),$}static async _fromIdTokenResponse(e,n,s=!1){const i=new pr;i.updateFromServerResponse(n);const r=new Bs({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Bo(r),r}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}i_.type="NONE";const Dh=i_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fo(t,e,n){return`firebase:${t}:${e}:${n}`}class fi{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=fo(this.userKey,i.apiKey,r),this.fullPersistenceKey=fo("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Bs._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new fi(Xn(Dh),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||Xn(Dh);const o=fo(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const h=await c._get(o);if(h){const f=Bs._fromJSON(e,h);c!==r&&(a=f),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new fi(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new fi(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ph(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(a_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(r_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(c_(e))return"Blackberry";if(u_(e))return"Webos";if(ru(e))return"Safari";if((e.includes("chrome/")||o_(e))&&!e.includes("edge/"))return"Chrome";if(l_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function r_(t=xt()){return/firefox\//i.test(t)}function ru(t=xt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function o_(t=xt()){return/crios\//i.test(t)}function a_(t=xt()){return/iemobile/i.test(t)}function l_(t=xt()){return/android/i.test(t)}function c_(t=xt()){return/blackberry/i.test(t)}function u_(t=xt()){return/webos/i.test(t)}function Ca(t=xt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function nE(t=xt()){var e;return Ca(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function sE(){return py()&&document.documentMode===10}function h_(t=xt()){return Ca(t)||l_(t)||u_(t)||c_(t)||/windows phone/i.test(t)||a_(t)}function iE(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f_(t,e=[]){let n;switch(t){case"Browser":n=Ph(xt());break;case"Worker":n=`${Ph(xt())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ir}/${s}`}/**
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
 */class rE{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const s=[];try{for(const i of this.queue)await i(e),i.onAbort&&s.push(i.onAbort)}catch(i){s.reverse();for(const r of s)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oE{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Rh(this),this.idTokenSubscription=new Rh(this),this.beforeStateQueue=new rE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Zg,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Xn(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await fi.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await Bo(e)}catch(s){if(((n=s)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=qk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Jt(e):null;return n&&Ee(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Xn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new kr("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Xn(e)||this._popupRedirectResolver;Ee(n,this,"argument-error"),this.redirectPersistenceManager=await fi.create(this,[Xn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return Ee(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=f_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function zr(t){return Jt(t)}class Rh{constructor(e){this.auth=e,this.observer=null,this.addObserver=Dy(n=>this.observer=n)}get next(){return Ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function aE(t,e,n){const s=zr(t);Ee(s._canInitEmulator,s,"emulator-config-failed"),Ee(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),r=d_(e),{host:o,port:a}=lE(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||cE()}function d_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function lE(t){const e=d_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:Nh(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:Nh(o)}}}function Nh(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function cE(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Yn("not implemented")}_getIdTokenResponse(e){return Yn("not implemented")}_linkToIdToken(e,n){return Yn("not implemented")}_getReauthenticationResolver(e){return Yn("not implemented")}}async function uE(t,e){return Hr(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hE(t,e){return Kr(t,"POST","/v1/accounts:signInWithPassword",qr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fE(t,e){return Kr(t,"POST","/v1/accounts:signInWithEmailLink",qr(t,e))}async function dE(t,e){return Kr(t,"POST","/v1/accounts:signInWithEmailLink",qr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr extends ou{constructor(e,n,s,i=null){super("password",s),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new mr(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new mr(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return hE(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return fE(e,{email:this._email,oobCode:this._password});default:Cn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return uE(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return dE(e,{idToken:n,email:this._email,oobCode:this._password});default:Cn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const pE="http://localhost";class Qs extends ou{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Qs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Cn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=tu(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new Qs(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return di(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,di(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,di(e,n)}buildRequest(){const e={requestUri:pE,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Er(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mE(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function gE(t){const e=Bi(Vi(t)).link,n=e?Bi(Vi(e)).deep_link_id:null,s=Bi(Vi(t)).deep_link_id;return(s?Bi(Vi(s)).link:null)||s||n||e||t}class au{constructor(e){var n,s,i,r,o,a;const l=Bi(Vi(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,h=(s=l.oobCode)!==null&&s!==void 0?s:null,f=mE((i=l.mode)!==null&&i!==void 0?i:null);Ee(c&&h&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=h,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=gE(e);try{return new au(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(){this.providerId=Ri.PROVIDER_ID}static credential(e,n){return mr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=au.parseLink(n);return Ee(s,"argument-error"),mr._fromEmailAndCode(e,s.code,s.tenantId)}}Ri.PROVIDER_ID="password";Ri.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ri.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr extends p_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */async function _E(t,e){return Kr(t,"POST","/v1/accounts:signUp",qr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await Bs._fromIdTokenResponse(e,s,i),o=Oh(s);return new Ys({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=Oh(s);return new Ys({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function Oh(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo extends os{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Vo.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new Vo(e,n,s,i)}}function m_(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Vo._fromErrorAndOperation(t,r,e,s):r})}async function vE(t,e,n=!1){const s=await dr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ys._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yE(t,e,n=!1){var s;const{auth:i}=t,r="reauthenticate";try{const o=await dr(t,m_(i,r,e,t),n);Ee(o.idToken,i,"internal-error");const a=iu(o.idToken);Ee(a,i,"internal-error");const{sub:l}=a;return Ee(t.uid===l,i,"user-mismatch"),Ys._forOperation(t,r,o)}catch(o){throw((s=o)===null||s===void 0?void 0:s.code)==="auth/user-not-found"&&Cn(i,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function g_(t,e,n=!1){const s="signIn",i=await m_(t,s,e),r=await Ys._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}async function bE(t,e){return g_(zr(t),e)}async function wE(t,e,n){const s=zr(t),i=await _E(s,{returnSecureToken:!0,email:e,password:n}),r=await Ys._fromIdTokenResponse(s,"signIn",i);return await s._updateCurrentUser(r.user),r}function kE(t,e,n){return bE(Jt(t),Ri.credential(e,n))}function EE(t,e,n,s){return Jt(t).onIdTokenChanged(e,n,s)}function IE(t,e,n){return Jt(t).beforeAuthStateChanged(e,n)}const jo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(jo,"1"),this.storage.removeItem(jo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TE(){const t=xt();return ru(t)||Ca(t)}const CE=1e3,SE=10;class v_ extends __{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=TE()&&iE(),this.fallbackToPolling=h_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);sE()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,SE):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},CE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}v_.type="LOCAL";const AE=v_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y_ extends __{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}y_.type="SESSION";const b_=y_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DE(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new Sa(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await DE(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Sa.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lu(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PE{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=lu("",20);i.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(f){const d=f;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(h),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(h),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Un(){return window}function RE(t){Un().location.href=t}/**
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
 */function w_(){return typeof Un().WorkerGlobalScope<"u"&&typeof Un().importScripts=="function"}async function NE(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function OE(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function LE(){return w_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k_="firebaseLocalStorageDb",ME=1,qo="firebaseLocalStorage",E_="fbase_key";class Wr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Aa(t,e){return t.transaction([qo],e?"readwrite":"readonly").objectStore(qo)}function $E(){const t=indexedDB.deleteDatabase(k_);return new Wr(t).toPromise()}function jl(){const t=indexedDB.open(k_,ME);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(qo,{keyPath:E_})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(qo)?e(s):(s.close(),await $E(),e(await jl()))})})}async function Lh(t,e,n){const s=Aa(t,!0).put({[E_]:e,value:n});return new Wr(s).toPromise()}async function UE(t,e){const n=Aa(t,!1).get(e),s=await new Wr(n).toPromise();return s===void 0?null:s.value}function Mh(t,e){const n=Aa(t,!0).delete(e);return new Wr(n).toPromise()}const FE=800,BE=3;class I_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await jl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>BE)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return w_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Sa._getInstance(LE()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await NE(),!this.activeServiceWorker)return;this.sender=new PE(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);!s||((e=s[0])===null||e===void 0?void 0:e.fulfilled)&&((n=s[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||OE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await jl();return await Lh(e,jo,"1"),await Mh(e,jo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Lh(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>UE(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Mh(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=Aa(i,!1).getAll();return new Wr(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),FE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}I_.type="LOCAL";const VE=I_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jE(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function qE(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=$n("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",jE().appendChild(s)})}function HE(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new jr(3e4,6e4);/**
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
 */function KE(t,e){return e?Xn(e):(Ee(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu extends ou{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return di(e,this._buildIdpRequest())}_linkToIdToken(e,n){return di(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return di(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function zE(t){return g_(t.auth,new cu(t),t.bypassAuthState)}function GE(t){const{auth:e,user:n}=t;return Ee(n,e,"internal-error"),yE(n,new cu(t),t.bypassAuthState)}async function WE(t){const{auth:e,user:n}=t;return Ee(n,e,"internal-error"),vE(n,new cu(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return zE;case"linkViaPopup":case"linkViaRedirect":return WE;case"reauthViaPopup":case"reauthViaRedirect":return GE;default:Cn(this.auth,"internal-error")}}resolve(e){rs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){rs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QE=new jr(2e3,1e4);class li extends T_{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,li.currentPopupAction&&li.currentPopupAction.cancel(),li.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ee(e,this.auth,"internal-error"),e}async onExecution(){rs(this.filter.length===1,"Popup operations only handle one event");const e=lu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject($n(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject($n(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,li.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject($n(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,QE.get())};e()}}li.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YE="pendingRedirect",po=new Map;class XE extends T_{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=po.get(this.auth._key());if(!e){try{const s=await xE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}po.set(this.auth._key(),e)}return this.bypassAuthState||po.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function xE(t,e){const n=eI(e),s=ZE(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function JE(t,e){po.set(t._key(),e)}function ZE(t){return Xn(t._redirectPersistence)}function eI(t){return fo(YE,t.config.apiKey,t.name)}async function tI(t,e,n=!1){const s=zr(t),i=KE(s,e),o=await new XE(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nI=10*60*1e3;class sI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!iI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!C_(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError($n(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=nI&&this.cachedEventUids.clear(),this.cachedEventUids.has($h(e))}saveEventToCache(e){this.cachedEventUids.add($h(e)),this.lastProcessedEventTime=Date.now()}}function $h(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function C_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function iI(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return C_(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rI(t,e={}){return Hr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,aI=/^https?/;async function lI(t){if(t.config.emulator)return;const{authorizedDomains:e}=await rI(t);for(const n of e)try{if(cI(n))return}catch{}Cn(t,"unauthorized-domain")}function cI(t){const e=Vl(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!aI.test(n))return!1;if(oI.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const uI=new jr(3e4,6e4);function Uh(){const t=Un().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function hI(t){return new Promise((e,n)=>{var s,i,r;function o(){Uh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Uh(),n($n(t,"network-request-failed"))},timeout:uI.get()})}if(!((i=(s=Un().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=Un().gapi)===null||r===void 0)&&r.load)o();else{const a=HE("iframefcb");return Un()[a]=()=>{gapi.load?o():n($n(t,"network-request-failed"))},qE(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw mo=null,e})}let mo=null;function fI(t){return mo=mo||hI(t),mo}/**
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
 */const dI=new jr(5e3,15e3),pI="__/auth/iframe",mI="emulator/auth/iframe",gI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},_I=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function vI(t){const e=t.config;Ee(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?su(e,mI):`https://${t.config.authDomain}/${pI}`,s={apiKey:e.apiKey,appName:t.name,v:Ir},i=_I.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${Er(s).slice(1)}`}async function yI(t){const e=await fI(t),n=Un().gapi;return Ee(n,t,"internal-error"),e.open({where:document.body,url:vI(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:gI,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=$n(t,"network-request-failed"),a=Un().setTimeout(()=>{r(o)},dI.get());function l(){Un().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const bI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},wI=500,kI=600,EI="_blank",II="http://localhost";class Fh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function TI(t,e,n,s=wI,i=kI){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},bI),{width:s.toString(),height:i.toString(),top:r,left:o}),c=xt().toLowerCase();n&&(a=o_(c)?EI:n),r_(c)&&(e=e||II,l.scrollbars="yes");const h=Object.entries(l).reduce((d,[m,_])=>`${d}${m}=${_},`,"");if(nE(c)&&a!=="_self")return CI(e||"",a),new Fh(null);const f=window.open(e||"",a,h);Ee(f,t,"popup-blocked");try{f.focus()}catch{}return new Fh(f)}function CI(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const SI="__/auth/handler",AI="emulator/auth/handler";function Bh(t,e,n,s,i,r){Ee(t.config.authDomain,t,"auth-domain-config-required"),Ee(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Ir,eventId:i};if(e instanceof p_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Ay(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(r||{}))o[l]=c}if(e instanceof Gr){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${DI(t)}?${Er(a).slice(1)}`}function DI({config:t}){return t.emulator?su(t,AI):`https://${t.authDomain}/${SI}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const el="webStorageSupport";class PI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=b_,this._completeRedirectFn=tI,this._overrideRedirectResult=JE}async _openPopup(e,n,s,i){var r;rs((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=Bh(e,n,s,Vl(),i);return TI(e,o,lu())}async _openRedirect(e,n,s,i){return await this._originValidation(e),RE(Bh(e,n,s,Vl(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(rs(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await yI(e),s=new sI(e);return n.register("authEvent",i=>(Ee(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(el,{type:el},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[el];o!==void 0&&n(!!o),Cn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=lI(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return h_()||ru()||Ca()}}const RI=PI;var Vh="@firebase/auth",jh="0.20.10";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{var i;e(((i=s)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OI(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function LI(t){gi(new Hs("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:r,authDomain:o}=s.options;return((a,l)=>{Ee(r&&!r.includes(":"),"invalid-api-key",{appName:a.name}),Ee(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const c={apiKey:r,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:f_(t)},h=new oE(a,l,c);return Bk(h,n),h})(s,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),gi(new Hs("auth-internal",e=>{const n=zr(e.getProvider("auth").getImmediate());return(s=>new NI(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),vs(Vh,jh,OI(t)),vs(Vh,jh,"esm2017")}/**
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
 */const MI=5*60,$I=Op("authIdTokenMaxAge")||MI;let qh=null;const UI=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>$I)return;const i=n==null?void 0:n.token;qh!==i&&(qh=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function FI(t=Up()){const e=ic(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Fk(t,{popupRedirectResolver:RI,persistence:[VE,AE,b_]}),s=Op("authTokenSyncURL");if(s){const r=UI(s);IE(n,r,()=>r(n.currentUser)),EE(n,o=>r(o))}const i=Np("auth");return i&&aE(n,`http://${i}`),n}LI("Browser");let gr=[],_r=[],Fn=[],S_=[];const BI={apiKey:"AIzaSyDGi3ndUC1b4SFNstliSSVryu7_ymXEkZc",authDomain:"match-home-7d1f9.firebaseapp.com",databaseURL:"https://match-home-7d1f9-default-rtdb.firebaseio.com",projectId:"match-home-7d1f9",storageBucket:"match-home-7d1f9.appspot.com",messagingSenderId:"747751099607",appId:"1:747751099607:web:29d1e5beda87c847dfb492"},A_=$p(BI),pt=bk(A_),D_=FI(A_),VI=t=>Nk(_n(pt,"todos"),t),jI=_n(pt,"binnacles"),qI=_n(pt,"contacts"),HI=_n(pt,"properties"),KI=_n(pt,"todos");Ea(jI).then(t=>_r=t.docs.map(e=>({...e.data(),id:e.id})));Ea(qI).then(t=>gr=t.docs.map(e=>({...e.data(),id:e.id})));Ea(HI).then(t=>Fn=t.docs.map(e=>({...e.data(),id:e.id})));Ea(KI).then(t=>S_=t.docs.map(e=>({...e.data(),id:e.id})));const P_="/assets/schedule.20f01954.png";function R_(t){const e=t-1;return e*e*e+1}function Ii(t){return t===0||t===1?t:t<.5?.5*Math.pow(2,20*t-10):-.5*Math.pow(2,10-t*20)+1}function Ho(t,{delay:e=0,duration:n=400,easing:s=Xd}={}){const i=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:s,css:r=>`opacity: ${r*i}`}}function Ko(t,{delay:e=0,duration:n=400,easing:s=R_,x:i=0,y:r=0,opacity:o=0}={}){const a=getComputedStyle(t),l=+a.opacity,c=a.transform==="none"?"":a.transform,h=l*(1-o);return{delay:e,duration:n,easing:s,css:(f,d)=>`
			transform: ${c} translate(${(1-f)*i}px, ${(1-f)*r}px);
			opacity: ${l-h*d}`}}function Ti(t,{delay:e=0,duration:n=400,easing:s=R_,start:i=0,opacity:r=0}={}){const o=getComputedStyle(t),a=+o.opacity,l=o.transform==="none"?"":o.transform,c=1-i,h=a*(1-r);return{delay:e,duration:n,easing:s,css:(f,d)=>`
			transform: ${l} scale(${1-c*d});
			opacity: ${a-h*d}
		`}}const nt=St(""),ql=St([]),N_=St([]),Hl=St([]),tt=St({typeContact:"",name:"",lastname:"",lastContact:"",telephon:"",email:"",selecMC:"",propCont:"",comContact:"",rangeProp:"",contMode:"",budget:"",numBeds:"",numBaths:"",halfBathroom:"",numParks:"",modePay:"",selecTP:"",contactType:"",contactStage:"",createdAt:"",locaProperty:[],tagsProperty:[],sendedProperties:[]}),Je=St({typeProperty:"",typeSaller:"",claveEB:"",claveMH:"",createdAt:"",nameProperty:"",price:"",beds:"",bathroom:"",halfBathroom:"",park:"",areaBuilding:"",areaTotal:"",description:"",urlImage:"",urlProp:"",urlSinergy:"",colonia:"",selecTP:"",selecTO:"",typeOperation:"",tagsProperty:[],locaProperty:[],binnacle:[]}),kn=St({task:"",isComplete:"",createdAt:"",endTask:"",timeTask:"",notes:"",user:"",id:""}),tl=St({date:"",commBinnacle:"",action:"",to:""}),zI=["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","S\xE1bado"],GI=["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"];function Rt(t){typeof t=="string"?t=new Date(t):t=new Date(t);let e=t.getDate();e<10&&(e="0"+e);let n=GI[t.getMonth()],s=t.getFullYear();return`${e}/${n}/${s}`}function Hh(t){t=new Date(t);let e=t.getMinutes();e.length<2&&(e="0"+e);let n=t.getHours();return n>12&&(n=n-12),n<10&&(n="0"+n),t.getDate(),`${n}:${e}`}function Kh(t){return t=new Date(+t),`${zI[t.getDay()]}-`}function WI(t){t.sort((e,n)=>new Date(e.endTask)<new Date(n.endTask)?1:new Date(e.endTask)>new Date(n.endTask)?-1:0)}const Da="/assets/edit.070633c4.svg",O_="/assets/calendar_check.3c15b67b.svg";function zh(t,e,n){const s=t.slice();return s[19]=e[n],s}function Gh(t,e,n){const s=t.slice();return s[19]=e[n],s}function QI(t){let e;return{c(){e=S("Editar")},m(n,s){w(n,e,s)},d(n){n&&b(e)}}}function YI(t){let e;return{c(){e=S("Guardar")},m(n,s){w(n,e,s)},d(n){n&&b(e)}}}function Wh(t){let e,n,s;return{c(){e=p("button"),e.textContent="Borrar"},m(i,r){w(i,e,r),n||(s=q(e,"click",t[5]),n=!0)},p:fe,d(i){i&&b(e),n=!1,s()}}}function Qh(t){let e,n,s,i,r,o,a,l,c,h,f,d=t[1],m=[];for(let I=0;I<d.length;I+=1)m[I]=Jh(Gh(t,d,I));let _=null;d.length||(_=Yh());let v=t[1],y=[];for(let I=0;I<v.length;I+=1)y[I]=nf(zh(t,v,I));let E=null;return v.length||(E=Zh()),{c(){e=p("h3"),e.textContent="Tareas",n=k(),s=p("ol");for(let I=0;I<m.length;I+=1)m[I].c();_&&_.c(),i=k(),r=p("p"),r.textContent=`${sf}`,o=k(),a=p("h3"),a.textContent="Agenda",l=k(),c=p("ol");for(let I=0;I<y.length;I+=1)y[I].c();E&&E.c(),h=k(),f=p("p"),f.textContent=`${sf}`,g(r,"class","error"),g(f,"class","error")},m(I,L){w(I,e,L),w(I,n,L),w(I,s,L);for(let A=0;A<m.length;A+=1)m[A].m(s,null);_&&_.m(s,null),u(s,i),u(s,r),w(I,o,L),w(I,a,L),w(I,l,L),w(I,c,L);for(let A=0;A<y.length;A+=1)y[A].m(c,null);E&&E.m(c,null),u(c,h),u(c,f)},p(I,L){if(L&18){d=I[1];let A;for(A=0;A<d.length;A+=1){const M=Gh(I,d,A);m[A]?m[A].p(M,L):(m[A]=Jh(M),m[A].c(),m[A].m(s,i))}for(;A<m.length;A+=1)m[A].d(1);m.length=d.length,!d.length&&_?_.p(I,L):d.length?_&&(_.d(1),_=null):(_=Yh(),_.c(),_.m(s,i))}if(L&18){v=I[1];let A;for(A=0;A<v.length;A+=1){const M=zh(I,v,A);y[A]?y[A].p(M,L):(y[A]=nf(M),y[A].c(),y[A].m(c,h))}for(;A<y.length;A+=1)y[A].d(1);y.length=v.length,!v.length&&E?E.p(I,L):v.length?E&&(E.d(1),E=null):(E=Zh(),E.c(),E.m(c,h))}},d(I){I&&b(e),I&&b(n),I&&b(s),ze(m,I),_&&_.d(),I&&b(o),I&&b(a),I&&b(l),I&&b(c),ze(y,I),E&&E.d()}}}function Yh(t){let e;return{c(){e=p("p"),e.textContent="No Hay Tareas Pendientes"},m(n,s){w(n,e,s)},p:fe,d(n){n&&b(e)}}}function Xh(t){let e,n,s,i,r,o,a,l,c,h,f=Rt(t[19].endTask)+"",d,m,_=t[19].task+"",v,y,E,I;function L(){return t[12](t[19])}function A(){return t[13](t[19])}let M=t[19].notes&&xh(t);return{c(){e=p("div"),n=p("li"),s=p("span"),i=p("img"),o=k(),a=p("img"),c=k(),h=p("spam"),d=S(f),m=S(` -*-\r
                                 `),v=S(_),y=S(` -*-\r
                                 `),M&&M.c(),st(i.src,r=Da)||g(i,"src",r),g(i,"alt","edit"),g(i,"class","iconIMH svelte-156umuq"),st(a.src,l=O_)||g(a,"src",l),g(a,"alt","complete"),g(a,"class","iconIMH svelte-156umuq"),g(n,"class","schedule svelte-156umuq"),ks(n,"complete",t[19].isComplete)},m(F,O){w(F,e,O),u(e,n),u(n,s),u(s,i),u(s,o),u(s,a),u(n,c),u(n,h),u(h,d),u(h,m),u(h,v),u(h,y),M&&M.m(h,null),E||(I=[q(i,"click",L),q(a,"click",A)],E=!0)},p(F,O){t=F,O&2&&f!==(f=Rt(t[19].endTask)+"")&&ie(d,f),O&2&&_!==(_=t[19].task+"")&&ie(v,_),t[19].notes?M?M.p(t,O):(M=xh(t),M.c(),M.m(h,null)):M&&(M.d(1),M=null),O&2&&ks(n,"complete",t[19].isComplete)},d(F){F&&b(e),M&&M.d(),E=!1,Ze(I)}}}function xh(t){let e=t[19].notes+"",n;return{c(){n=S(e)},m(s,i){w(s,n,i)},p(s,i){i&2&&e!==(e=s[19].notes+"")&&ie(n,e)},d(s){s&&b(n)}}}function Jh(t){let e,n=!t[19].timeTask&&Xh(t);return{c(){n&&n.c(),e=sn()},m(s,i){n&&n.m(s,i),w(s,e,i)},p(s,i){s[19].timeTask?n&&(n.d(1),n=null):n?n.p(s,i):(n=Xh(s),n.c(),n.m(e.parentNode,e))},d(s){n&&n.d(s),s&&b(e)}}}function Zh(t){let e;return{c(){e=p("p"),e.textContent="No Hay Tareas Pendientes"},m(n,s){w(n,e,s)},p:fe,d(n){n&&b(e)}}}function ef(t){let e,n,s,i,r,o,a,l,c,h,f=t[19].timeTask+"",d,m,_=Rt(t[19].endTask)+"",v,y,E=t[19].task+"",I,L,A,M;function F(){return t[14](t[19])}function O(){return t[15](t[19])}let z=t[19].notes&&tf(t);return{c(){e=p("div"),n=p("li"),s=p("span"),i=p("img"),o=k(),a=p("img"),c=k(),h=p("spam"),d=S(f),m=S(` -*-\r
                                 `),v=S(_),y=S(` -*-\r
                                 `),I=S(E),L=S(` -*-\r
                                 `),z&&z.c(),st(i.src,r=Da)||g(i,"src",r),g(i,"alt","edit"),g(i,"class","iconIMH svelte-156umuq"),st(a.src,l=O_)||g(a,"src",l),g(a,"alt","complete"),g(a,"class","iconIMH svelte-156umuq"),g(n,"class","schedule svelte-156umuq"),ks(n,"complete",t[19].isComplete)},m($,U){w($,e,U),u(e,n),u(n,s),u(s,i),u(s,o),u(s,a),u(n,c),u(n,h),u(h,d),u(h,m),u(h,v),u(h,y),u(h,I),u(h,L),z&&z.m(h,null),A||(M=[q(i,"click",F),q(a,"click",O),q(e,"dblclick",t[16])],A=!0)},p($,U){t=$,U&2&&f!==(f=t[19].timeTask+"")&&ie(d,f),U&2&&_!==(_=Rt(t[19].endTask)+"")&&ie(v,_),U&2&&E!==(E=t[19].task+"")&&ie(I,E),t[19].notes?z?z.p(t,U):(z=tf(t),z.c(),z.m(h,null)):z&&(z.d(1),z=null),U&2&&ks(n,"complete",t[19].isComplete)},d($){$&&b(e),z&&z.d(),A=!1,Ze(M)}}}function tf(t){let e=t[19].notes+"",n;return{c(){n=S(e)},m(s,i){w(s,n,i)},p(s,i){i&2&&e!==(e=s[19].notes+"")&&ie(n,e)},d(s){s&&b(n)}}}function nf(t){let e,n=t[19].timeTask&&ef(t);return{c(){n&&n.c(),e=sn()},m(s,i){n&&n.m(s,i),w(s,e,i)},p(s,i){s[19].timeTask?n?n.p(s,i):(n=ef(s),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(s){n&&n.d(s),s&&b(e)}}}function XI(t){let e,n,s,i,r,o,a,l,c,h,f,d,m,_,v,y,E,I,L,A,M,F,O,z,$,U,j,K,Y,ee,W,G,x;function Q(J,oe){return J[0]?QI:YI}let C=Q(t),R=C(t),N=t[0]&&Wh(t),P=!t[0]&&Qh(t);return{c(){e=p("div"),n=p("h1"),n.textContent="Agenda",s=k(),i=p("img"),o=k(),a=p("div"),l=p("div"),h=k(),f=p("div"),d=p("div"),m=p("input"),_=k(),v=p("div"),y=p("input"),E=k(),I=p("input"),L=k(),A=p("div"),M=p("textarea"),F=k(),O=p("div"),z=p("button"),R.c(),$=k(),U=p("button"),U.textContent="Cancelar",j=k(),N&&N.c(),Y=k(),ee=p("div"),P&&P.c(),st(i.src,r=P_)||g(i,"src",r),g(i,"alt","schedule"),g(i,"class","imgTitle svelte-156umuq"),g(l,"class","background"),g(m,"type","text"),g(m,"class","inputTask"),g(m,"cols","56"),g(m,"rows","1"),g(m,"placeholder","Agrega una Tarea o Cita"),g(y,"type","time"),g(y,"class","inputDate"),g(I,"type","date"),g(I,"class","inputDate"),g(v,"class","contDate"),g(M,"name","notes"),g(M,"id",""),g(M,"cols","56"),g(M,"rows","5"),g(M,"placeholder","descripci\xF3n"),g(f,"class","pop-up"),g(a,"class","container"),g(ee,"class","container"),g(e,"class","container")},m(J,oe){w(J,e,oe),u(e,n),u(e,s),u(e,i),u(e,o),u(e,a),u(a,l),u(a,h),u(a,f),u(f,d),u(d,m),ge(m,t[2].task),u(f,_),u(f,v),u(v,y),ge(y,t[2].timeTask),u(v,E),u(v,I),ge(I,t[2].endTask),u(f,L),u(f,A),u(A,M),ge(M,t[2].notes),u(f,F),u(f,O),u(O,z),R.m(z,null),u(O,$),u(O,U),u(O,j),N&&N.m(O,null),u(e,Y),u(e,ee),P&&P.m(ee,null),W=!0,G||(x=[q(l,"keydown",t[7]),q(m,"input",t[8]),q(m,"input",t[6]),q(y,"input",t[9]),q(I,"input",t[10]),q(M,"input",t[11]),q(z,"click",t[3]),q(U,"click",t[7])],G=!0)},p(J,[oe]){oe&4&&m.value!==J[2].task&&ge(m,J[2].task),oe&4&&ge(y,J[2].timeTask),oe&4&&ge(I,J[2].endTask),oe&4&&ge(M,J[2].notes),C!==(C=Q(J))&&(R.d(1),R=C(J),R&&(R.c(),R.m(z,null))),J[0]?N?N.p(J,oe):(N=Wh(J),N.c(),N.m(O,null)):N&&(N.d(1),N=null),J[0]?P&&(P.d(1),P=null):P?P.p(J,oe):(P=Qh(J),P.c(),P.m(ee,null))},i(J){W||(et(()=>{c||(c=pn(l,Ho,{},!0)),c.run(1)}),et(()=>{K||(K=pn(f,Ko,{},!0)),K.run(1)}),W=!0)},o(J){c||(c=pn(l,Ho,{},!1)),c.run(0),K||(K=pn(f,Ko,{},!1)),K.run(0),W=!1},d(J){J&&b(e),J&&c&&c.end(),R.d(),N&&N.d(),J&&K&&K.end(),P&&P.d(),G=!1,Ze(x)}}}let sf="";function xI(t,e,n){let s,i;Me(t,Hl,F=>n(1,s=F)),Me(t,kn,F=>n(2,i=F));const r=Xs();let o=!1,a="addItem";Ve(Hl,s=S_,s),(async()=>VI(F=>{}))();async function l(){a==="deleItem"?confirm("Quieres borrarlo definitivmente?")==!0&&await Ta(is(pt,"todos",i.id)):a==="editItem"?await Ia(is(pt,"todos",i.id),i):await ws(_n(pt,"todos"),i),n(0,o=!1),Ve(kn,i={},i)}async function c(F){Ve(kn,i=F,i),a="editItem",n(0,o=!0)}async function h(){n(0,o=!0),a="deleItem",l()}function f(){i.task.length>0&&n(0,o=!0)}function d(){Ve(kn,i=[],i),r("/contactos")}WI(s);function m(){i.task=this.value,kn.set(i)}function _(){i.timeTask=this.value,kn.set(i)}function v(){i.endTask=this.value,kn.set(i)}function y(){i.notes=this.value,kn.set(i)}return[o,s,i,l,c,h,f,d,m,_,v,y,F=>c(F),F=>void 0,F=>c(F),F=>void 0,()=>c]}class JI extends xe{constructor(e){super(),Xe(this,e,xI,XI,We,{})}}function ZI(t){let e;return{c(){e=p("h1"),e.textContent="Estas en Sinergias"},m(n,s){w(n,e,s)},p:fe,i:fe,o:fe,d(n){n&&b(e)}}}class eT extends xe{constructor(e){super(),Xe(this,e,null,ZI,We,{})}}function tT(t){let e;return{c(){e=S("Inicia sesi\xF3n")},m(n,s){w(n,e,s)},d(n){n&&b(e)}}}function nT(t){let e,n,s,i,r,o,a,l,c,h,f,d,m,_,v,y,E,I,L,A,M,F,O,z,$,U,j,K,Y;return U=new fn({props:{to:"/login",$$slots:{default:[tT]},$$scope:{ctx:t}}}),{c(){e=p("div"),n=p("br"),s=p("br"),i=p("br"),r=k(),o=p("div"),a=p("h1"),a.textContent="Registra tu cuenta",l=k(),c=p("div"),h=p("input"),f=k(),d=p("div"),m=p("input"),_=k(),v=p("br"),y=k(),E=p("div"),I=p("button"),I.textContent="Registrarse",L=k(),A=p("p"),A.textContent="O tambi\xE9n",M=k(),F=p("br"),O=k(),z=p("p"),$=S("\xBFYa tienes cuenta? "),de(U.$$.fragment),g(a,"class","text-center text-login svelte-ftg4em"),g(h,"name","email"),g(h,"type","email"),g(h,"class","input-form svelte-ftg4em"),g(h,"placeholder","Correo"),h.required=!0,g(c,"class","center svelte-ftg4em"),g(m,"name","password"),g(m,"type","password"),g(m,"class","input-form svelte-ftg4em"),g(m,"placeholder","Contrase\xF1a"),g(d,"class","center svelte-ftg4em"),g(I,"class","button-signup fondo-color-signup svelte-ftg4em"),g(E,"class","center svelte-ftg4em"),g(A,"class","text-center svelte-ftg4em"),g(z,"class","text-center svelte-ftg4em"),g(o,"class","form-signin svelte-ftg4em")},m(ee,W){w(ee,e,W),u(e,n),u(e,s),u(e,i),u(e,r),u(e,o),u(o,a),u(o,l),u(o,c),u(c,h),u(o,f),u(o,d),u(d,m),u(o,_),u(o,v),u(o,y),u(o,E),u(E,I),u(o,L),u(o,A),u(o,M),u(o,F),u(o,O),u(o,z),u(z,$),ue(U,z,null),j=!0,K||(Y=[q(h,"input",t[2]),q(m,"input",t[3]),q(I,"click",t[1])],K=!0)},p(ee,[W]){const G={};W&64&&(G.$$scope={dirty:W,ctx:ee}),U.$set(G)},i(ee){j||(H(U.$$.fragment,ee),j=!0)},o(ee){X(U.$$.fragment,ee),j=!1},d(ee){ee&&b(e),he(U),K=!1,Ze(Y)}}}function sT(t){const e=Xs();let n={email:"",password:""};const s=a=>{n={...n,[a.target.name]:a.target.value}};return[s,async()=>{try{await wE(D_,n.email,n.password),e("/")}catch(a){console.log(a)}},a=>s(a),a=>s(a)]}class iT extends xe{constructor(e){super(),Xe(this,e,sT,nT,We,{})}}function rf(t,e,n){const s=t.slice();return s[1]=e[n],s}function of(t,e,n){const s=t.slice();return s[1]=e[n],s}function af(t){let e,n,s=Rt(t[1].endTask)+"",i,r,o=t[1].task+"",a,l,c=t[1].notes&&lf(t);return{c(){e=p("ul"),n=p("li"),i=S(s),r=S(` - -\r
                    `),a=S(o),l=S(` - -\r
                    `),c&&c.c(),ks(n,"complete",t[1].isComplete)},m(h,f){w(h,e,f),u(e,n),u(n,i),u(n,r),u(n,a),u(n,l),c&&c.m(n,null)},p(h,f){f&1&&s!==(s=Rt(h[1].endTask)+"")&&ie(i,s),f&1&&o!==(o=h[1].task+"")&&ie(a,o),h[1].notes?c?c.p(h,f):(c=lf(h),c.c(),c.m(n,null)):c&&(c.d(1),c=null),f&1&&ks(n,"complete",h[1].isComplete)},d(h){h&&b(e),c&&c.d()}}}function lf(t){let e=t[1].notes+"",n;return{c(){n=S(e)},m(s,i){w(s,n,i)},p(s,i){i&1&&e!==(e=s[1].notes+"")&&ie(n,e)},d(s){s&&b(n)}}}function cf(t){let e,n=!t[1].timeTask&&af(t);return{c(){n&&n.c(),e=sn()},m(s,i){n&&n.m(s,i),w(s,e,i)},p(s,i){s[1].timeTask?n&&(n.d(1),n=null):n?n.p(s,i):(n=af(s),n.c(),n.m(e.parentNode,e))},d(s){n&&n.d(s),s&&b(e)}}}function uf(t){let e,n,s,i=Kh(t[1].endTask)+"",r,o,a=Hh(t[1].endTask)+"",l,c,h=Rt(t[1].endTask)+"",f,d,m=t[1].task+"",_,v,y=t[1].notes&&hf(t);return{c(){e=p("ul"),n=p("li"),s=p("spam"),r=S(i),o=k(),l=S(a),c=S(` - -\r
                      `),f=S(h),d=k(),_=S(m),v=S(` - -\r
                      `),y&&y.c(),g(s,"type","number"),ks(n,"complete",t[1].isComplete)},m(E,I){w(E,e,I),u(e,n),u(n,s),u(s,r),u(s,o),u(s,l),u(s,c),u(s,f),u(s,d),u(s,_),u(s,v),y&&y.m(s,null)},p(E,I){I&1&&i!==(i=Kh(E[1].endTask)+"")&&ie(r,i),I&1&&a!==(a=Hh(E[1].endTask)+"")&&ie(l,a),I&1&&h!==(h=Rt(E[1].endTask)+"")&&ie(f,h),I&1&&m!==(m=E[1].task+"")&&ie(_,m),E[1].notes?y?y.p(E,I):(y=hf(E),y.c(),y.m(s,null)):y&&(y.d(1),y=null),I&1&&ks(n,"complete",E[1].isComplete)},d(E){E&&b(e),y&&y.d()}}}function hf(t){let e=t[1].notes+"",n;return{c(){n=S(e)},m(s,i){w(s,n,i)},p(s,i){i&1&&e!==(e=s[1].notes+"")&&ie(n,e)},d(s){s&&b(n)}}}function ff(t){let e,n=t[1].timeTask&&uf(t);return{c(){n&&n.c(),e=k()},m(s,i){n&&n.m(s,i),w(s,e,i)},p(s,i){s[1].timeTask?n?n.p(s,i):(n=uf(s),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(s){n&&n.d(s),s&&b(e)}}}function rT(t){let e,n,s,i,r,o,a,l,c,h,f=t[0],d=[];for(let v=0;v<f.length;v+=1)d[v]=cf(of(t,f,v));let m=t[0],_=[];for(let v=0;v<m.length;v+=1)_[v]=ff(rf(t,m,v));return{c(){e=p("div"),n=p("div"),s=p("div"),i=p("h1"),i.textContent="Agenda",r=k(),o=p("h3"),o.textContent="Tareas",a=k();for(let v=0;v<d.length;v+=1)d[v].c();l=k(),c=p("h3"),c.textContent="Citas",h=k();for(let v=0;v<_.length;v+=1)_[v].c();g(i,"class","title svelte-13rvwi6"),g(o,"class","subtitle svelte-13rvwi6"),g(c,"class","subtitle svelte-13rvwi6"),g(s,"class","schedule"),g(n,"class","container"),g(e,"class","show-home")},m(v,y){w(v,e,y),u(e,n),u(n,s),u(s,i),u(s,r),u(s,o),u(s,a);for(let E=0;E<d.length;E+=1)d[E].m(s,null);u(s,l),u(s,c),u(s,h);for(let E=0;E<_.length;E+=1)_[E].m(s,null)},p(v,[y]){if(y&1){f=v[0];let E;for(E=0;E<f.length;E+=1){const I=of(v,f,E);d[E]?d[E].p(I,y):(d[E]=cf(I),d[E].c(),d[E].m(s,l))}for(;E<d.length;E+=1)d[E].d(1);d.length=f.length}if(y&1){m=v[0];let E;for(E=0;E<m.length;E+=1){const I=rf(v,m,E);_[E]?_[E].p(I,y):(_[E]=ff(I),_[E].c(),_[E].m(s,null))}for(;E<_.length;E+=1)_[E].d(1);_.length=m.length}},i:fe,o:fe,d(v){v&&b(e),ze(d,v),ze(_,v)}}}function oT(t,e,n){let s;return Me(t,Hl,i=>n(0,s=i)),[s]}class aT extends xe{constructor(e){super(),Xe(this,e,oT,rT,We,{})}}function df(t,e,n){const s=t.slice();return s[0]=e[n],s[2]=n,s}function lT(t){let e,n=Rt(t[0].date)+"",s,i,r=t[0].comment+"",o;return{c(){e=p("div"),s=S(n),i=k(),o=S(r),g(e,"class","date-binnacle")},m(a,l){w(a,e,l),u(e,s),u(e,i),u(e,o)},p:fe,d(a){a&&b(e)}}}function pf(t){let e,n,s=t[2]<30&&lT(t);return{c(){e=p("div"),s&&s.c(),n=k(),g(e,"class","int-binnacle")},m(i,r){w(i,e,r),s&&s.m(e,null),u(e,n)},p(i,r){i[2]<30&&s.p(i,r)},d(i){i&&b(e),s&&s.d()}}}function cT(t){let e,n,s,i,r,o,a,l=_r,c=[];for(let h=0;h<l.length;h+=1)c[h]=pf(df(t,l,h));return{c(){e=S(`a\r
`),n=p("main"),s=p("div"),i=p("div"),r=p("div"),o=p("h1"),o.textContent="Bit\xE1cora",a=k();for(let h=0;h<c.length;h+=1)c[h].c();g(o,"class","title svelte-7lgm1k"),g(r,"class","binnacleHome"),g(i,"class","schedule"),g(s,"class","container")},m(h,f){w(h,e,f),w(h,n,f),u(n,s),u(s,i),u(i,r),u(r,o),u(r,a);for(let d=0;d<c.length;d+=1)c[d].m(r,null)},p(h,[f]){if(f&0){l=_r;let d;for(d=0;d<l.length;d+=1){const m=df(h,l,d);c[d]?c[d].p(m,f):(c[d]=pf(m),c[d].c(),c[d].m(r,null))}for(;d<c.length;d+=1)c[d].d(1);c.length=l.length}},i:fe,o:fe,d(h){h&&b(e),h&&b(n),ze(c,h)}}}function uT(t){return function(){_r.sort((e,n)=>e.date<n.date?1:e.date>n.date?-1:0)}(),[]}class hT extends xe{constructor(e){super(),Xe(this,e,uT,cT,We,{})}}const L_="/assets/add-user.1bd66bde.png",M_="/assets/house.99302696.png",fT="/assets/team.31fda88c.png",dT=St(!1);function pT(t){let e,n,s,i,r,o;return{c(){e=p("div"),n=p("div"),s=p("img"),r=k(),o=p("h1"),o.textContent="Contactos",st(s.src,i=L_)||g(s,"src",i),g(s,"alt","Buzon"),g(s,"class","profile-img svelte-mxk4x8"),g(o,"class","name svelte-mxk4x8"),g(n,"class","optionCard svelte-mxk4x8"),g(e,"class","container")},m(a,l){w(a,e,l),u(e,n),u(n,s),u(n,r),u(n,o)},p:fe,d(a){a&&b(e)}}}function mT(t){let e,n,s,i,r,o;return{c(){e=p("div"),n=p("div"),s=p("img"),r=k(),o=p("h1"),o.textContent="Propiedades",st(s.src,i=M_)||g(s,"src",i),g(s,"alt","propiedad"),g(s,"class","profile-img svelte-mxk4x8"),g(o,"class","name svelte-mxk4x8"),g(n,"class","optionCard svelte-mxk4x8"),g(e,"class","container")},m(a,l){w(a,e,l),u(e,n),u(n,s),u(n,r),u(n,o)},p:fe,d(a){a&&b(e)}}}function gT(t){let e,n,s,i,r,o;return{c(){e=p("div"),n=p("div"),s=p("img"),r=k(),o=p("h1"),o.textContent="Agenda",st(s.src,i=P_)||g(s,"src",i),g(s,"alt","agenda"),g(s,"class","profile-img svelte-mxk4x8"),g(o,"class","name svelte-mxk4x8"),g(n,"class","optionCard svelte-mxk4x8"),g(e,"class","container")},m(a,l){w(a,e,l),u(e,n),u(n,s),u(n,r),u(n,o)},p:fe,d(a){a&&b(e)}}}function _T(t){let e,n,s,i,r,o;return{c(){e=p("div"),n=p("div"),s=p("img"),r=k(),o=p("h1"),o.textContent="Sinergias",st(s.src,i=fT)||g(s,"src",i),g(s,"alt","sinergias"),g(s,"class","profile-img svelte-mxk4x8"),g(o,"class","name svelte-mxk4x8"),g(n,"class","optionCard svelte-mxk4x8"),g(e,"class","container")},m(a,l){w(a,e,l),u(e,n),u(n,s),u(n,r),u(n,o)},p:fe,d(a){a&&b(e)}}}function vT(t){let e,n,s,i,r,o,a,l;return e=new fn({props:{to:"/contactos",title:"contactos",$$slots:{default:[pT]},$$scope:{ctx:t}}}),s=new fn({props:{to:"/propiedades",title:"propiedades",$$slots:{default:[mT]},$$scope:{ctx:t}}}),r=new fn({props:{to:"/agenda",title:"agenda",class:"s",$$slots:{default:[gT]},$$scope:{ctx:t}}}),a=new fn({props:{to:"/sinergias",title:"sinergias",$$slots:{default:[_T]},$$scope:{ctx:t}}}),{c(){de(e.$$.fragment),n=k(),de(s.$$.fragment),i=k(),de(r.$$.fragment),o=k(),de(a.$$.fragment)},m(c,h){ue(e,c,h),w(c,n,h),ue(s,c,h),w(c,i,h),ue(r,c,h),w(c,o,h),ue(a,c,h),l=!0},p(c,h){const f={};h&1&&(f.$$scope={dirty:h,ctx:c}),e.$set(f);const d={};h&1&&(d.$$scope={dirty:h,ctx:c}),s.$set(d);const m={};h&1&&(m.$$scope={dirty:h,ctx:c}),r.$set(m);const _={};h&1&&(_.$$scope={dirty:h,ctx:c}),a.$set(_)},i(c){l||(H(e.$$.fragment,c),H(s.$$.fragment,c),H(r.$$.fragment,c),H(a.$$.fragment,c),l=!0)},o(c){X(e.$$.fragment,c),X(s.$$.fragment,c),X(r.$$.fragment,c),X(a.$$.fragment,c),l=!1},d(c){he(e,c),c&&b(n),he(s,c),c&&b(i),he(r,c),c&&b(o),he(a,c)}}}function yT(t){let e,n,s,i,r,o,a,l,c;return s=new ec({props:{$$slots:{default:[vT]},$$scope:{ctx:t}}}),o=new aT({props:{"(orderTodos)":!0}}),l=new hT({}),{c(){e=p("body"),n=p("div"),de(s.$$.fragment),i=k(),r=p("div"),de(o.$$.fragment),a=k(),de(l.$$.fragment),g(n,"class","wrapper-grid svelte-mxk4x8"),g(r,"class",""),g(e,"class","svelte-mxk4x8")},m(h,f){w(h,e,f),u(e,n),ue(s,n,null),u(e,i),u(e,r),ue(o,r,null),u(r,a),ue(l,r,null),c=!0},p(h,[f]){const d={};f&1&&(d.$$scope={dirty:f,ctx:h}),s.$set(d)},i(h){c||(H(s.$$.fragment,h),H(o.$$.fragment,h),H(l.$$.fragment,h),c=!0)},o(h){X(s.$$.fragment,h),X(o.$$.fragment,h),X(l.$$.fragment,h),c=!1},d(h){h&&b(e),he(s),he(o),he(l)}}}class bT extends xe{constructor(e){super(),Xe(this,e,null,yT,We,{})}}function wT(t){let e,n,s,i,r,o,a,l,c,h,f=Rt(t[2])+"",d,m,_,v,y,E,I,L,A,M,F,O,z,$,U,j,K,Y,ee;return{c(){e=p("div"),n=p("div"),s=p("div"),i=p("h5"),r=S(t[0]),o=k(),a=S(t[1]),l=k(),c=p("h5"),h=S("Alta "),d=S(f),m=k(),_=p("div"),v=p("p"),y=S(t[3]),E=k(),I=p("p"),L=S("tel: "),A=S(t[4]),M=S(" email: "),F=S(t[5]),O=k(),z=p("p"),$=S("Presupuesto "),U=S(t[6]),j=k(),K=p("p"),Y=S("Rango "),ee=S(t[7]),g(s,"class","namePerson svelte-1thiswe"),g(_,"class","nameDate svelte-1thiswe"),g(n,"class","contactCard"),g(e,"class","container contact svelte-1thiswe")},m(W,G){w(W,e,G),u(e,n),u(n,s),u(s,i),u(i,r),u(i,o),u(i,a),u(s,l),u(s,c),u(c,h),u(c,d),u(n,m),u(n,_),u(_,v),u(v,y),u(_,E),u(_,I),u(I,L),u(I,A),u(I,M),u(I,F),u(_,O),u(_,z),u(z,$),u(z,U),u(_,j),u(_,K),u(K,Y),u(K,ee)},p(W,[G]){G&1&&ie(r,W[0]),G&2&&ie(a,W[1]),G&4&&f!==(f=Rt(W[2])+"")&&ie(d,f),G&8&&ie(y,W[3]),G&16&&ie(A,W[4]),G&32&&ie(F,W[5]),G&64&&ie(U,W[6]),G&128&&ie(ee,W[7])},i:fe,o:fe,d(W){W&&b(e)}}}function kT(t,e,n){let{name:s,lastname:i,createdAt:r,contactStage:o,telephon:a,email:l,budget:c,rangeProp:h}=e;return t.$$set=f=>{"name"in f&&n(0,s=f.name),"lastname"in f&&n(1,i=f.lastname),"createdAt"in f&&n(2,r=f.createdAt),"contactStage"in f&&n(3,o=f.contactStage),"telephon"in f&&n(4,a=f.telephon),"email"in f&&n(5,l=f.email),"budget"in f&&n(6,c=f.budget),"rangeProp"in f&&n(7,h=f.rangeProp)},[s,i,r,o,a,l,c,h]}class ET extends xe{constructor(e){super(),Xe(this,e,kT,wT,We,{name:0,lastname:1,createdAt:2,contactStage:3,telephon:4,email:5,budget:6,rangeProp:7})}}function IT(t){let e,n,s,i;return{c(){e=p("div"),n=p("input"),g(n,"class","searchInput svelte-6bonih"),g(n,"type","text"),g(n,"id","search-field"),g(n,"placeholder","Enter Search Term"),g(n,"autocomplete","off"),g(e,"id","search-input-cont")},m(r,o){w(r,e,o),u(e,n),ge(n,t[0]),s||(i=[q(n,"input",t[2]),q(n,"input",t[1])],s=!0)},p(r,[o]){o&1&&n.value!==r[0]&&ge(n,r[0])},i:fe,o:fe,d(r){r&&b(e),s=!1,Ze(i)}}}function TT(t,e,n){let{searchTerm:s}=e;function i(o){ev.call(this,t,o)}function r(){s=this.value,n(0,s)}return t.$$set=o=>{"searchTerm"in o&&n(0,s=o.searchTerm)},[s,i,r]}class uu extends xe{constructor(e){super(),Xe(this,e,TT,IT,We,{searchTerm:0})}}async function CT(t,e){if(console.log("estas en la funcion"),t==="todoAdding"){const n=_n(pt,"todos");await ws(n,e)}else t==="todoUpdate"?await Ia(is(pt,"todos",e.id),e):t==="todoDelete"&&await Ta(is(pt,"todos",e.id));e=""}function ST(t){let e,n,s,i,r,o,a,l,c,h,f,d,m,_,v,y,E,I,L,A,M,F;return{c(){e=p("div"),s=k(),i=p("div"),r=p("div"),o=p("input"),a=k(),l=p("input"),c=k(),h=p("input"),f=k(),d=p("div"),m=p("textarea"),_=k(),v=p("div"),y=p("button"),y.textContent="Guardar",E=k(),I=p("button"),I.textContent="Cancelar",g(e,"class","background svelte-18c6vp2"),g(o,"type","text"),g(o,"class","inputTask svelte-18c6vp2"),g(o,"placeholder","Agrega una Tarea o Cita"),g(l,"type","time"),g(l,"class","inputDate svelte-18c6vp2"),g(h,"type","date"),g(h,"class","inputDate svelte-18c6vp2"),g(m,"name","notes"),g(m,"cols","40"),g(m,"rows","5"),g(m,"placeholder","descripci\xF3n"),g(y,"class","btnShedule svelte-18c6vp2"),g(I,"class","btnShedule svelte-18c6vp2"),g(i,"class","pop__up svelte-18c6vp2")},m(O,z){w(O,e,z),w(O,s,z),w(O,i,z),u(i,r),u(r,o),ge(o,t[0]),u(i,a),u(i,l),ge(l,t[1].timeTask),u(i,c),u(i,h),ge(h,t[1].endTask),u(i,f),u(i,d),u(d,m),ge(m,t[1].notes),u(i,_),u(i,v),u(v,y),u(v,E),u(v,I),A=!0,M||(F=[q(window,"keydown",t[4]),q(e,"click",t[2]),q(o,"input",t[5]),q(l,"input",t[6]),q(h,"input",t[7]),q(m,"input",t[8]),q(y,"click",t[3]),q(I,"click",t[2])],M=!0)},p(O,[z]){z&1&&o.value!==O[0]&&ge(o,O[0]),z&2&&ge(l,O[1].timeTask),z&2&&ge(h,O[1].endTask),z&2&&ge(m,O[1].notes)},i(O){A||(et(()=>{n||(n=pn(e,Ho,{},!0)),n.run(1)}),et(()=>{L||(L=pn(i,Ko,{},!0)),L.run(1)}),A=!0)},o(O){n||(n=pn(e,Ho,{},!1)),n.run(0),L||(L=pn(i,Ko,{},!1)),L.run(0),A=!1},d(O){O&&b(e),O&&n&&n.end(),O&&b(s),O&&b(i),O&&L&&L.end(),M=!1,Ze(F)}}}function AT(t,e,n){let s,i,r;Me(t,kn,I=>n(10,s=I)),Me(t,nt,I=>n(11,i=I)),Me(t,tt,I=>n(12,r=I));const o=sp();let a=`${r.name} ${r.lastname}`,l=[],c=[],h;l={task:"",endTask:"",isComplete:"",createdAt:"",timeTask:"",notes:"",user:""};function f(){o("closeIt"),Ve(nt,i="contSelect",i),Ve(kn,s="",s)}const d=async()=>{console.log("ests en addTodo"),Ve(nt,i="todoAdding",i),console.log(h),c=a,Ve(kn,s={...l,task:c},s),CT(i,s),console.log(s)},m=I=>{I.key==="Enter"&&d()};function _(){a=this.value,n(0,a)}function v(){l.timeTask=this.value,n(1,l)}function y(){l.endTask=this.value,n(1,l)}function E(){l.notes=this.value,n(1,l)}return[a,l,f,d,m,_,v,y,E]}class DT extends xe{constructor(e){super(),Xe(this,e,AT,ST,We,{})}}function PT(t){let e,n,s,i,r,o,a,l,c,h,f,d,m,_,v,y,E,I,L,A,M,F,O,z,$,U,j,K,Y,ee,W,G,x,Q,C,R,N,P,J,oe;return{c(){e=p("main"),n=p("section"),s=p("figure"),i=p("img"),o=k(),a=p("div"),l=S(t[1]),c=k(),h=p("figcaption"),f=S(t[2]),d=k(),m=p("section"),_=p("section"),v=p("div"),y=p("div"),E=S(t[3]),I=S(" Rec\xE1maras"),L=k(),A=p("div"),M=S(t[4]),F=S(" Ba\xF1os"),O=k(),z=p("div"),$=S(t[5]),U=S(" Estacionamientos"),j=k(),K=p("div"),Y=S(t[6]),ee=S(" m2 de Contruccion"),W=k(),G=p("div"),x=S(t[7]),Q=S(" m2 de Terreno"),C=k(),R=p("br"),N=k(),P=p("div"),J=S("Precio $: "),oe=S(t[8]),st(i.src,r=t[0])||g(i,"src",r),g(i,"alt",t[1]),g(i,"class","bkcover svelte-1w1p4eb"),g(a,"class","language svelte-1w1p4eb"),g(h,"class","svelte-1w1p4eb"),g(s,"class","bkcont svelte-1w1p4eb"),g(n,"class","book-top-info svelte-1w1p4eb"),g(v,"class","buy-options-cont svelte-1w1p4eb"),g(_,"class","from-pariyatti available-at svelte-1w1p4eb"),g(m,"class","book-bottom-links svelte-1w1p4eb")},m(Ae,me){w(Ae,e,me),u(e,n),u(n,s),u(s,i),u(s,o),u(s,a),u(a,l),u(s,c),u(s,h),u(h,f),u(e,d),u(e,m),u(m,_),u(_,v),u(v,y),u(y,E),u(y,I),u(v,L),u(v,A),u(A,M),u(A,F),u(v,O),u(v,z),u(z,$),u(z,U),u(v,j),u(v,K),u(K,Y),u(K,ee),u(v,W),u(v,G),u(G,x),u(G,Q),u(v,C),u(v,R),u(v,N),u(v,P),u(P,J),u(P,oe)},p(Ae,[me]){me&1&&!st(i.src,r=Ae[0])&&g(i,"src",r),me&2&&g(i,"alt",Ae[1]),me&2&&ie(l,Ae[1]),me&4&&ie(f,Ae[2]),me&8&&ie(E,Ae[3]),me&16&&ie(M,Ae[4]),me&32&&ie($,Ae[5]),me&64&&ie(Y,Ae[6]),me&128&&ie(x,Ae[7]),me&256&&ie(oe,Ae[8])},i:fe,o:fe,d(Ae){Ae&&b(e)}}}function RT(t,e,n){let{urlImage:s,claveEB:i,nameProperty:r,beds:o,bathroom:a,park:l,areaBuilding:c,areaTotal:h,price:f}=e;return t.$$set=d=>{"urlImage"in d&&n(0,s=d.urlImage),"claveEB"in d&&n(1,i=d.claveEB),"nameProperty"in d&&n(2,r=d.nameProperty),"beds"in d&&n(3,o=d.beds),"bathroom"in d&&n(4,a=d.bathroom),"park"in d&&n(5,l=d.park),"areaBuilding"in d&&n(6,c=d.areaBuilding),"areaTotal"in d&&n(7,h=d.areaTotal),"price"in d&&n(8,f=d.price)},[s,i,r,o,a,l,c,h,f]}class $_ extends xe{constructor(e){super(),Xe(this,e,RT,PT,We,{urlImage:0,claveEB:1,nameProperty:2,beds:3,bathroom:4,park:5,areaBuilding:6,areaTotal:7,price:8})}}let Ns;function U_(t){return t<=1e6?Ns="PRM":t<=25e5?Ns="SGN":t<=5e6?Ns="TRC":t<=8e6?Ns="CRT":t<=12e6?Ns="QNT":t>12e6&&(Ns="SXT"),Ns}let nl,sl;function NT(t){let e=Fn;return e=e.filter(n=>n.selectTP===t.selecTP),console.log("filtraste por tipo de propiedad",e),t.numBeds>0&&(e=e.filter(n=>n.beds>=t.numBeds)),t.numBaths>0&&(e=e.filter(n=>n.bathroom>=t.numBaths)),t.numParks>0&&(e=e.filter(n=>n.park>=t.numParks)),console.log("Por caracteristicas",e),t.budget?(console.log("filtraste por budget"),nl=t.budget*.7,sl=t.budget*1.1,console.log(nl,sl),e=e.filter(n=>n.price>=nl&&n.price<=sl)):(console.log("filtraste por rango"),e=e.filter(n=>U_(n.price)===t.rangeProp)),console.log("filtraste presupuesto",e),t.locaProperty.length>0&&(e=e.filter(n=>t.locaProperty.some(s=>n.locaProperty.includes(s)))),console.log("Filtraste por Ubicacion",e),t.tagsProperty.length>0&&(e=e.filter(n=>t.tagsProperty.every(s=>n.tagsProperty.includes(s)))),console.log("Filtraste por localizacion",e),e.length===0||""+e.length,ql.set(e)}async function mf(t,e){if(t==="binnAdding"){console.log(e);const n=_n(pt,"binnacles");await ws(n,e)}else t==="binnacleUpdate"?console.log("Se edit\xF3 a: ",e.comment,e.to):t==="binnacleDelete"&&console.log("Se elimin\xF3 a: ",e.to);e=[]}const F_="/assets/trash.2d1385a7.svg",zo=["Casa","Terreno","Departamento","Casa o Departamento","Local Comercial","Casa de Campo"],gf=["Lona en Propiedad","Propiedades.com","NocNok","Mercado Libre","Vivanuncios","Lamudi","Inmuebles24","Referido","Otro"],_f=["Comprador","Arrendador","Propietario","Agente Asociado","Agente Inmobiliario","Constructor","Inversionista","Otro"],vf=["Contado","Credito Hipotecario","INFONAVIT","COFINAVIT","FOVISSSTE","ALIADOS","Conyugal"],yf=["Venta","Renta"],bf=["Rango","PRM","SGN","TRC","CRT","QNT","SXT","SPT"],Go=[0,1,2,3,4,5],En=[0,1,2,3,4],wf=["Due\xF1o","Familiar","Inmobiliaria","Conocido"];function OT(t){let e,n,s,i,r,o,a,l,c,h,f,d,m,_,v,y,E,I,L,A,M,F,O,z,$,U,j,K,Y,ee,W,G,x,Q,C,R,N,P,J,oe,Ae,me,ye;return{c(){e=p("div"),n=p("div"),s=p("label"),i=S(`/Norte\\\r
			`),r=p("input"),o=k(),a=p("div"),l=p("label"),c=S(`/Noroeste\r
			`),h=p("input"),f=k(),d=p("label"),m=p("input"),_=S("NorEste\\"),v=k(),y=p("div"),E=p("label"),I=S(`/Oeste\r
			`),L=p("input"),A=k(),M=p("label"),F=S(`Centro Norte\r
			`),O=p("input"),z=k(),$=p("label"),U=p("input"),j=S("Este\\"),K=k(),Y=p("div"),ee=p("label"),W=S(`Centro Sur\r
			`),G=p("input"),x=k(),Q=p("div"),C=p("label"),R=S(`/SurOeste\r
			`),N=p("input"),P=k(),J=p("label"),oe=p("input"),Ae=S("SurEste\\"),r.__value="Norte",r.value=r.__value,g(r,"id","north"),g(r,"type","checkbox"),t[2][0].push(r),g(s,"for","north"),g(n,"class","filterLocationOne svelte-1lvjb5r"),h.__value="Noroeste",h.value=h.__value,g(h,"id","northwest"),g(h,"type","checkbox"),t[2][0].push(h),g(l,"for","northwest"),m.__value="Noreste",m.value=m.__value,g(m,"id","northeast"),g(m,"type","checkbox"),t[2][0].push(m),g(d,"for","northeast"),g(a,"class","filterLocationOne svelte-1lvjb5r"),L.__value="Oeste",L.value=L.__value,g(L,"id","west"),g(L,"type","checkbox"),t[2][0].push(L),g(E,"for","west"),O.__value="Centronorte",O.value=O.__value,g(O,"id","townNorth"),g(O,"type","checkbox"),t[2][0].push(O),g(M,"for","townNorth"),U.__value="Este",U.value=U.__value,g(U,"id","east"),g(U,"type","checkbox"),t[2][0].push(U),g($,"for","east"),g(y,"class","filterLocationOne svelte-1lvjb5r"),G.__value="CentroSur",G.value=G.__value,g(G,"id","townsouth"),g(G,"type","checkbox"),t[2][0].push(G),g(ee,"for","townsouth"),g(Y,"class","filterLocationOne svelte-1lvjb5r"),N.__value="SurOeste",N.value=N.__value,g(N,"id","southwest"),g(N,"type","checkbox"),t[2][0].push(N),g(C,"for","southwest"),oe.__value="SurEste",oe.value=oe.__value,g(oe,"id","southeast"),g(oe,"type","checkbox"),t[2][0].push(oe),g(J,"for","southeast"),g(Q,"class","filterLocationOne svelte-1lvjb5r"),g(e,"class","containerUbication svelte-1lvjb5r")},m(ce,De){w(ce,e,De),u(e,n),u(n,s),u(s,i),u(s,r),r.checked=~t[0].indexOf(r.__value),u(e,o),u(e,a),u(a,l),u(l,c),u(l,h),h.checked=~t[0].indexOf(h.__value),u(a,f),u(a,d),u(d,m),m.checked=~t[0].indexOf(m.__value),u(d,_),u(e,v),u(e,y),u(y,E),u(E,I),u(E,L),L.checked=~t[0].indexOf(L.__value),u(y,A),u(y,M),u(M,F),u(M,O),O.checked=~t[0].indexOf(O.__value),u(y,z),u(y,$),u($,U),U.checked=~t[0].indexOf(U.__value),u($,j),u(e,K),u(e,Y),u(Y,ee),u(ee,W),u(ee,G),G.checked=~t[0].indexOf(G.__value),u(e,x),u(e,Q),u(Q,C),u(C,R),u(C,N),N.checked=~t[0].indexOf(N.__value),u(Q,P),u(Q,J),u(J,oe),oe.checked=~t[0].indexOf(oe.__value),u(J,Ae),me||(ye=[q(r,"change",t[1]),q(h,"change",t[3]),q(m,"change",t[4]),q(L,"change",t[5]),q(O,"change",t[6]),q(U,"change",t[7]),q(G,"change",t[8]),q(N,"change",t[9]),q(oe,"change",t[10])],me=!0)},p(ce,[De]){De&1&&(r.checked=~ce[0].indexOf(r.__value)),De&1&&(h.checked=~ce[0].indexOf(h.__value)),De&1&&(m.checked=~ce[0].indexOf(m.__value)),De&1&&(L.checked=~ce[0].indexOf(L.__value)),De&1&&(O.checked=~ce[0].indexOf(O.__value)),De&1&&(U.checked=~ce[0].indexOf(U.__value)),De&1&&(G.checked=~ce[0].indexOf(G.__value)),De&1&&(N.checked=~ce[0].indexOf(N.__value)),De&1&&(oe.checked=~ce[0].indexOf(oe.__value))},i:fe,o:fe,d(ce){ce&&b(e),t[2][0].splice(t[2][0].indexOf(r),1),t[2][0].splice(t[2][0].indexOf(h),1),t[2][0].splice(t[2][0].indexOf(m),1),t[2][0].splice(t[2][0].indexOf(L),1),t[2][0].splice(t[2][0].indexOf(O),1),t[2][0].splice(t[2][0].indexOf(U),1),t[2][0].splice(t[2][0].indexOf(G),1),t[2][0].splice(t[2][0].indexOf(N),1),t[2][0].splice(t[2][0].indexOf(oe),1),me=!1,Ze(ye)}}}function LT(t,e,n){let{ubication:s}=e;const i=[[]];function r(){s=qt(i[0],this.__value,this.checked),n(0,s)}function o(){s=qt(i[0],this.__value,this.checked),n(0,s)}function a(){s=qt(i[0],this.__value,this.checked),n(0,s)}function l(){s=qt(i[0],this.__value,this.checked),n(0,s)}function c(){s=qt(i[0],this.__value,this.checked),n(0,s)}function h(){s=qt(i[0],this.__value,this.checked),n(0,s)}function f(){s=qt(i[0],this.__value,this.checked),n(0,s)}function d(){s=qt(i[0],this.__value,this.checked),n(0,s)}function m(){s=qt(i[0],this.__value,this.checked),n(0,s)}return t.$$set=_=>{"ubication"in _&&n(0,s=_.ubication)},[s,r,i,o,a,l,c,h,f,d,m]}class B_ extends xe{constructor(e){super(),Xe(this,e,LT,OT,We,{ubication:0})}}function MT(t){let e,n,s,i,r,o,a,l,c,h,f,d,m,_,v,y,E,I,L,A,M,F,O,z,$,U,j,K,Y,ee,W,G,x;return{c(){e=p("section"),n=p("div"),s=p("label"),i=S(`Fracc. Privado\r
		   `),r=p("input"),o=k(),a=p("label"),l=S(`Frente a Parque\r
         `),c=p("input"),h=k(),f=p("label"),d=S(`Una Planta\r
         `),m=p("input"),_=k(),v=p("div"),y=p("label"),E=S(`Recamara en P.B.\r
		`),I=p("input"),L=k(),A=p("label"),M=S(`Patio Amplio\r
   `),F=p("input"),O=k(),z=p("label"),$=S(`Lista para Habitarse\r
   `),U=p("input"),j=k(),K=p("div"),Y=p("label"),ee=S(`Nueva\r
		`),W=p("input"),g(r,"type","checkbox"),r.__value="Fracc. Privado",r.value=r.__value,t[2][0].push(r),g(c,"type","checkbox"),c.__value="Frente a Parque",c.value=c.__value,t[2][0].push(c),g(m,"type","checkbox"),m.__value="Una Planta",m.value=m.__value,t[2][0].push(m),g(n,"class","svelte-1b9bvt0"),g(I,"type","checkbox"),I.__value="Recamara en PB",I.value=I.__value,t[2][0].push(I),g(F,"type","checkbox"),F.__value="Patio Amplio",F.value=F.__value,t[2][0].push(F),g(U,"type","checkbox"),U.__value="Lista Habitarse",U.value=U.__value,t[2][0].push(U),g(v,"class","svelte-1b9bvt0"),g(W,"type","checkbox"),W.__value="Nueva",W.value=W.__value,t[2][0].push(W),g(K,"class","svelte-1b9bvt0"),g(e,"class","svelte-1b9bvt0")},m(Q,C){w(Q,e,C),u(e,n),u(n,s),u(s,i),u(s,r),r.checked=~t[0].indexOf(r.__value),u(n,o),u(n,a),u(a,l),u(a,c),c.checked=~t[0].indexOf(c.__value),u(n,h),u(n,f),u(f,d),u(f,m),m.checked=~t[0].indexOf(m.__value),u(e,_),u(e,v),u(v,y),u(y,E),u(y,I),I.checked=~t[0].indexOf(I.__value),u(v,L),u(v,A),u(A,M),u(A,F),F.checked=~t[0].indexOf(F.__value),u(v,O),u(v,z),u(z,$),u(z,U),U.checked=~t[0].indexOf(U.__value),u(e,j),u(e,K),u(K,Y),u(Y,ee),u(Y,W),W.checked=~t[0].indexOf(W.__value),G||(x=[q(r,"change",t[1]),q(c,"change",t[3]),q(m,"change",t[4]),q(I,"change",t[5]),q(F,"change",t[6]),q(U,"change",t[7]),q(W,"change",t[8])],G=!0)},p(Q,[C]){C&1&&(r.checked=~Q[0].indexOf(r.__value)),C&1&&(c.checked=~Q[0].indexOf(c.__value)),C&1&&(m.checked=~Q[0].indexOf(m.__value)),C&1&&(I.checked=~Q[0].indexOf(I.__value)),C&1&&(F.checked=~Q[0].indexOf(F.__value)),C&1&&(U.checked=~Q[0].indexOf(U.__value)),C&1&&(W.checked=~Q[0].indexOf(W.__value))},i:fe,o:fe,d(Q){Q&&b(e),t[2][0].splice(t[2][0].indexOf(r),1),t[2][0].splice(t[2][0].indexOf(c),1),t[2][0].splice(t[2][0].indexOf(m),1),t[2][0].splice(t[2][0].indexOf(I),1),t[2][0].splice(t[2][0].indexOf(F),1),t[2][0].splice(t[2][0].indexOf(U),1),t[2][0].splice(t[2][0].indexOf(W),1),G=!1,Ze(x)}}}function $T(t,e,n){let{tag:s}=e;const i=[[]];function r(){s=qt(i[0],this.__value,this.checked),n(0,s)}function o(){s=qt(i[0],this.__value,this.checked),n(0,s)}function a(){s=qt(i[0],this.__value,this.checked),n(0,s)}function l(){s=qt(i[0],this.__value,this.checked),n(0,s)}function c(){s=qt(i[0],this.__value,this.checked),n(0,s)}function h(){s=qt(i[0],this.__value,this.checked),n(0,s)}function f(){s=qt(i[0],this.__value,this.checked),n(0,s)}return t.$$set=d=>{"tag"in d&&n(0,s=d.tag)},[s,r,i,o,a,l,c,h,f]}class V_ extends xe{constructor(e){super(),Xe(this,e,$T,MT,We,{tag:0})}}function kf(t,e,n){const s=t.slice();return s[26]=e[n],s}function Ef(t,e,n){const s=t.slice();return s[29]=e[n],s}function If(t,e,n){const s=t.slice();return s[32]=e[n],s}function Tf(t,e,n){const s=t.slice();return s[35]=e[n],s}function Cf(t,e,n){const s=t.slice();return s[38]=e[n],s}function Sf(t,e,n){const s=t.slice();return s[41]=e[n],s}function Af(t,e,n){const s=t.slice();return s[44]=e[n],s}function Df(t,e,n){const s=t.slice();return s[47]=e[n],s}function Pf(t,e,n){const s=t.slice();return s[50]=e[n],s}function Rf(t,e,n){const s=t.slice();return s[53]=e[n],s}function UT(t){let e,n=Rt(t[3].createdAt)+"",s,i,r;return{c(){e=p("h3"),s=S(n),g(e,"class","dataInput svelte-1myljlf")},m(o,a){w(o,e,a),u(e,s),i||(r=q(e,"dblclick",t[4]),i=!0)},p(o,a){a[0]&8&&n!==(n=Rt(o[3].createdAt)+"")&&ie(s,n)},d(o){o&&b(e),i=!1,r()}}}function FT(t){let e,n,s;return{c(){e=p("input"),g(e,"class","dataInput svelte-1myljlf"),g(e,"type","date")},m(i,r){w(i,e,r),ge(e,t[3].createdAt),n||(s=q(e,"input",t[6]),n=!0)},p(i,r){r[0]&9&&ge(e,i[3].createdAt)},d(i){i&&b(e),n=!1,s()}}}function Nf(t){let e,n,s;return{c(){e=p("input"),g(e,"class","dataInput svelte-1myljlf"),g(e,"type","email"),g(e,"placeholder","email")},m(i,r){w(i,e,r),ge(e,t[3].email),n||(s=q(e,"input",t[10]),n=!0)},p(i,r){r[0]&9&&e.value!==i[3].email&&ge(e,i[3].email)},d(i){i&&b(e),n=!1,s()}}}function Of(t){let e,n=t[53]+"",s,i;return{c(){e=p("option"),s=S(n),g(e,"class","dataInput svelte-1myljlf"),g(e,"type","checkbox"),e.__value=i=t[53],e.value=e.__value},m(r,o){w(r,e,o),u(e,s)},p(r,o){o[0]&1&&n!==(n=r[53]+"")&&ie(s,n),o[0]&1&&i!==(i=r[53])&&(e.__value=i,e.value=e.__value)},d(r){r&&b(e)}}}function Lf(t){let e,n,s;return{c(){e=p("input"),g(e,"class","dataInput svelte-1myljlf"),g(e,"type","number"),g(e,"placeholder","Presupuesto")},m(i,r){w(i,e,r),ge(e,t[3].budget),n||(s=q(e,"input",t[12]),n=!0)},p(i,r){r[0]&9&&ms(e.value)!==i[3].budget&&ge(e,i[3].budget)},d(i){i&&b(e),n=!1,s()}}}function Mf(t){let e,n,s,i,r,o,a,l,c,h,f,d,m,_,v,y,E,I,L,A,M,F,O,z,$,U,j,K,Y,ee,W,G,x,Q,C,R,N=_f,P=[];for(let D=0;D<N.length;D+=1)P[D]=$f(Pf(t,N,D));let J=gf,oe=[];for(let D=0;D<J.length;D+=1)oe[D]=Uf(Df(t,J,D));let Ae=vf,me=[];for(let D=0;D<Ae.length;D+=1)me[D]=Ff(Af(t,Ae,D));let ye=zo,ce=[];for(let D=0;D<ye.length;D+=1)ce[D]=Bf(Sf(t,ye,D));let De=bf,Re=[];for(let D=0;D<De.length;D+=1)Re[D]=Vf(Cf(t,De,D));let mt=Go,B=[];for(let D=0;D<mt.length;D+=1)B[D]=jf(Tf(t,mt,D));let re=En,Qe=[];for(let D=0;D<re.length;D+=1)Qe[D]=qf(If(t,re,D));let Nt=En,$e=[];for(let D=0;D<Nt.length;D+=1)$e[D]=Hf(Ef(t,Nt,D));let ft=En,je=[];for(let D=0;D<ft.length;D+=1)je[D]=Kf(kf(t,ft,D));function rn(D){t[23](D)}let dt={};t[3].locaProperty!==void 0&&(dt.ubication=t[3].locaProperty),Y=new B_({props:dt}),Jn.push(()=>js(Y,"ubication",rn));function gt(D){t[24](D)}let Bt={};return t[3].tagsProperty!==void 0&&(Bt.tag=t[3].tagsProperty),G=new V_({props:Bt}),Jn.push(()=>js(G,"tag",gt)),{c(){e=p("select"),n=p("option"),n.textContent="Tipo de Contacto";for(let D=0;D<P.length;D+=1)P[D].c();s=k(),i=p("select"),r=p("option"),r.textContent="Modo de Contacto";for(let D=0;D<oe.length;D+=1)oe[D].c();o=k(),a=p("select"),l=p("option"),l.textContent="Modo de Pago";for(let D=0;D<me.length;D+=1)me[D].c();c=k(),h=p("select"),f=p("option"),f.textContent="Tipo de Propiedad";for(let D=0;D<ce.length;D+=1)ce[D].c();d=k(),m=p("select"),_=p("option"),_.textContent="Rango de Busqueda";for(let D=0;D<Re.length;D+=1)Re[D].c();v=k(),y=p("select"),E=p("option"),E.textContent="# Rec\xE1maras";for(let D=0;D<B.length;D+=1)B[D].c();I=k(),L=p("select"),A=p("option"),A.textContent="# Ba\xF1os";for(let D=0;D<Qe.length;D+=1)Qe[D].c();M=k(),F=p("select"),O=p("option"),O.textContent="# Medios Ba\xF1os";for(let D=0;D<$e.length;D+=1)$e[D].c();z=k(),$=p("select"),U=p("option"),U.textContent="# Estacionamientos";for(let D=0;D<je.length;D+=1)je[D].c();j=k(),K=p("div"),de(Y.$$.fragment),W=k(),de(G.$$.fragment),n.disabled=!0,n.selected=!0,n.__value="",n.value=n.__value,g(e,"class","othersInput svelte-1myljlf"),t[3].typeContact===void 0&&et(()=>t[14].call(e)),r.disabled=!0,r.selected=!0,r.__value="",r.value=r.__value,g(i,"class","othersInput svelte-1myljlf"),t[3].selecMC===void 0&&et(()=>t[15].call(i)),l.disabled=!0,l.selected=!0,l.__value="",l.value=l.__value,g(a,"class","othersInput svelte-1myljlf"),t[3].modePay===void 0&&et(()=>t[16].call(a)),f.disabled=!0,f.selected=!0,f.__value="",f.value=f.__value,g(h,"class","othersInput svelte-1myljlf"),g(h,"id","selTP"),g(h,"name","selTP"),t[3].selecTP===void 0&&et(()=>t[17].call(h)),_.disabled=!0,_.selected=!0,_.__value="",_.value=_.__value,g(m,"class","othersInput svelte-1myljlf"),g(m,"id","ranges"),g(m,"name","ranges"),t[3].rangeProp===void 0&&et(()=>t[18].call(m)),E.disabled=!0,E.selected=!0,E.__value="",E.value=E.__value,g(y,"class","othersInput svelte-1myljlf"),t[3].numBeds===void 0&&et(()=>t[19].call(y)),A.disabled=!0,A.selected=!0,A.__value="",A.value=A.__value,g(L,"class","othersInput svelte-1myljlf"),t[3].numBaths===void 0&&et(()=>t[20].call(L)),O.disabled=!0,O.selected=!0,O.__value="",O.value=O.__value,g(F,"class","othersInput svelte-1myljlf"),t[3].halfBathroom===void 0&&et(()=>t[21].call(F)),U.disabled=!0,U.selected=!0,U.__value="",U.value=U.__value,g($,"class","othersInput svelte-1myljlf"),t[3].numParks===void 0&&et(()=>t[22].call($)),g(K,"class","ubiTags svelte-1myljlf")},m(D,ae){w(D,e,ae),u(e,n);for(let ve=0;ve<P.length;ve+=1)P[ve].m(e,null);Fe(e,t[3].typeContact),w(D,s,ae),w(D,i,ae),u(i,r);for(let ve=0;ve<oe.length;ve+=1)oe[ve].m(i,null);Fe(i,t[3].selecMC),w(D,o,ae),w(D,a,ae),u(a,l);for(let ve=0;ve<me.length;ve+=1)me[ve].m(a,null);Fe(a,t[3].modePay),w(D,c,ae),w(D,h,ae),u(h,f);for(let ve=0;ve<ce.length;ve+=1)ce[ve].m(h,null);Fe(h,t[3].selecTP),w(D,d,ae),w(D,m,ae),u(m,_);for(let ve=0;ve<Re.length;ve+=1)Re[ve].m(m,null);Fe(m,t[3].rangeProp),w(D,v,ae),w(D,y,ae),u(y,E);for(let ve=0;ve<B.length;ve+=1)B[ve].m(y,null);Fe(y,t[3].numBeds),w(D,I,ae),w(D,L,ae),u(L,A);for(let ve=0;ve<Qe.length;ve+=1)Qe[ve].m(L,null);Fe(L,t[3].numBaths),w(D,M,ae),w(D,F,ae),u(F,O);for(let ve=0;ve<$e.length;ve+=1)$e[ve].m(F,null);Fe(F,t[3].halfBathroom),w(D,z,ae),w(D,$,ae),u($,U);for(let ve=0;ve<je.length;ve+=1)je[ve].m($,null);Fe($,t[3].numParks),w(D,j,ae),w(D,K,ae),ue(Y,K,null),u(K,W),ue(G,K,null),Q=!0,C||(R=[q(e,"change",t[14]),q(i,"change",t[15]),q(a,"change",t[16]),q(h,"change",t[17]),q(m,"change",t[18]),q(y,"change",t[19]),q(L,"change",t[20]),q(F,"change",t[21]),q($,"change",t[22])],C=!0)},p(D,ae){if(ae&0){N=_f;let V;for(V=0;V<N.length;V+=1){const ke=Pf(D,N,V);P[V]?P[V].p(ke,ae):(P[V]=$f(ke),P[V].c(),P[V].m(e,null))}for(;V<P.length;V+=1)P[V].d(1);P.length=N.length}if(ae[0]&9&&Fe(e,D[3].typeContact),ae&0){J=gf;let V;for(V=0;V<J.length;V+=1){const ke=Df(D,J,V);oe[V]?oe[V].p(ke,ae):(oe[V]=Uf(ke),oe[V].c(),oe[V].m(i,null))}for(;V<oe.length;V+=1)oe[V].d(1);oe.length=J.length}if(ae[0]&9&&Fe(i,D[3].selecMC),ae&0){Ae=vf;let V;for(V=0;V<Ae.length;V+=1){const ke=Af(D,Ae,V);me[V]?me[V].p(ke,ae):(me[V]=Ff(ke),me[V].c(),me[V].m(a,null))}for(;V<me.length;V+=1)me[V].d(1);me.length=Ae.length}if(ae[0]&9&&Fe(a,D[3].modePay),ae&0){ye=zo;let V;for(V=0;V<ye.length;V+=1){const ke=Sf(D,ye,V);ce[V]?ce[V].p(ke,ae):(ce[V]=Bf(ke),ce[V].c(),ce[V].m(h,null))}for(;V<ce.length;V+=1)ce[V].d(1);ce.length=ye.length}if(ae[0]&9&&Fe(h,D[3].selecTP),ae&0){De=bf;let V;for(V=0;V<De.length;V+=1){const ke=Cf(D,De,V);Re[V]?Re[V].p(ke,ae):(Re[V]=Vf(ke),Re[V].c(),Re[V].m(m,null))}for(;V<Re.length;V+=1)Re[V].d(1);Re.length=De.length}if(ae[0]&9&&Fe(m,D[3].rangeProp),ae&0){mt=Go;let V;for(V=0;V<mt.length;V+=1){const ke=Tf(D,mt,V);B[V]?B[V].p(ke,ae):(B[V]=jf(ke),B[V].c(),B[V].m(y,null))}for(;V<B.length;V+=1)B[V].d(1);B.length=mt.length}if(ae[0]&9&&Fe(y,D[3].numBeds),ae&0){re=En;let V;for(V=0;V<re.length;V+=1){const ke=If(D,re,V);Qe[V]?Qe[V].p(ke,ae):(Qe[V]=qf(ke),Qe[V].c(),Qe[V].m(L,null))}for(;V<Qe.length;V+=1)Qe[V].d(1);Qe.length=re.length}if(ae[0]&9&&Fe(L,D[3].numBaths),ae&0){Nt=En;let V;for(V=0;V<Nt.length;V+=1){const ke=Ef(D,Nt,V);$e[V]?$e[V].p(ke,ae):($e[V]=Hf(ke),$e[V].c(),$e[V].m(F,null))}for(;V<$e.length;V+=1)$e[V].d(1);$e.length=Nt.length}if(ae[0]&9&&Fe(F,D[3].halfBathroom),ae&0){ft=En;let V;for(V=0;V<ft.length;V+=1){const ke=kf(D,ft,V);je[V]?je[V].p(ke,ae):(je[V]=Kf(ke),je[V].c(),je[V].m($,null))}for(;V<je.length;V+=1)je[V].d(1);je.length=ft.length}ae[0]&9&&Fe($,D[3].numParks);const ve={};!ee&&ae[0]&8&&(ee=!0,ve.ubication=D[3].locaProperty,Vs(()=>ee=!1)),Y.$set(ve);const lt={};!x&&ae[0]&8&&(x=!0,lt.tag=D[3].tagsProperty,Vs(()=>x=!1)),G.$set(lt)},i(D){Q||(H(Y.$$.fragment,D),H(G.$$.fragment,D),Q=!0)},o(D){X(Y.$$.fragment,D),X(G.$$.fragment,D),Q=!1},d(D){D&&b(e),ze(P,D),D&&b(s),D&&b(i),ze(oe,D),D&&b(o),D&&b(a),ze(me,D),D&&b(c),D&&b(h),ze(ce,D),D&&b(d),D&&b(m),ze(Re,D),D&&b(v),D&&b(y),ze(B,D),D&&b(I),D&&b(L),ze(Qe,D),D&&b(M),D&&b(F),ze($e,D),D&&b(z),D&&b($),ze(je,D),D&&b(j),D&&b(K),he(Y),he(G),C=!1,Ze(R)}}}function $f(t){let e,n=t[50]+"",s;return{c(){e=p("option"),s=S(n),g(e,"type","checkbox"),e.__value=t[50],e.value=e.__value},m(i,r){w(i,e,r),u(e,s)},p:fe,d(i){i&&b(e)}}}function Uf(t){let e,n=t[47]+"",s;return{c(){e=p("option"),s=S(n),g(e,"type","checkbox"),e.__value=t[47],e.value=e.__value},m(i,r){w(i,e,r),u(e,s)},p:fe,d(i){i&&b(e)}}}function Ff(t){let e,n=t[44]+"",s;return{c(){e=p("option"),s=S(n),g(e,"type","checkbox"),e.__value=t[44],e.value=e.__value},m(i,r){w(i,e,r),u(e,s)},p:fe,d(i){i&&b(e)}}}function Bf(t){let e,n=t[41]+"",s;return{c(){e=p("option"),s=S(n),g(e,"type","checkbox"),e.__value=t[41],e.value=e.__value},m(i,r){w(i,e,r),u(e,s)},p:fe,d(i){i&&b(e)}}}function Vf(t){let e,n=t[38]+"",s;return{c(){e=p("option"),s=S(n),g(e,"type","checkbox"),e.__value=t[38],e.value=e.__value},m(i,r){w(i,e,r),u(e,s)},p:fe,d(i){i&&b(e)}}}function jf(t){let e,n=t[35]+"",s,i;return{c(){e=p("option"),s=S(n),i=S(" Rec\xE1maras"),g(e,"type","checkbox"),e.__value=t[35],e.value=e.__value},m(r,o){w(r,e,o),u(e,s),u(e,i)},p:fe,d(r){r&&b(e)}}}function qf(t){let e,n=t[32]+"",s,i;return{c(){e=p("option"),s=S(n),i=S(" ba\xF1os"),g(e,"type","checkbox"),e.__value=t[32],e.value=e.__value},m(r,o){w(r,e,o),u(e,s),u(e,i)},p:fe,d(r){r&&b(e)}}}function Hf(t){let e,n=t[29]+"",s,i;return{c(){e=p("option"),s=S(n),i=S(" Medios ba\xF1os"),g(e,"type","checkbox"),e.__value=t[29],e.value=e.__value},m(r,o){w(r,e,o),u(e,s),u(e,i)},p:fe,d(r){r&&b(e)}}}function Kf(t){let e,n=t[26]+"",s,i;return{c(){e=p("option"),s=S(n),i=S(" Estacionamientos"),g(e,"type","checkbox"),e.__value=t[26],e.value=e.__value},m(r,o){w(r,e,o),u(e,s),u(e,i)},p:fe,d(r){r&&b(e)}}}function BT(t){let e,n,s,i,r,o,a,l,c,h,f,d,m,_,v,y,E,I,L,A,M,F,O,z,$,U,j;function K(R,N){return R[1]?FT:UT}let Y=K(t),ee=Y(t),W=t[2]&&Nf(t),G=t[0],x=[];for(let R=0;R<G.length;R+=1)x[R]=Of(Rf(t,G,R));let Q=t[2]&&Lf(t),C=t[2]&&Mf(t);return{c(){e=p("h1"),e.textContent="Alta Contactos",n=k(),s=p("div"),i=p("div"),ee.c(),r=k(),o=p("div"),a=p("input"),l=k(),c=p("input"),h=k(),f=p("div"),d=p("input"),m=k(),W&&W.c(),_=k(),v=p("div"),y=p("select"),E=p("option"),E.textContent="Propiedad de Contacto";for(let R=0;R<x.length;R+=1)x[R].c();I=k(),Q&&Q.c(),L=k(),A=p("div"),M=p("input"),F=k(),C&&C.c(),O=k(),z=p("button"),z.textContent="Alta Detalles",g(e,"class","sectionTitle"),g(a,"class","dataInput svelte-1myljlf"),g(a,"type","text"),g(a,"placeholder","Nombre"),g(c,"class","dataInput svelte-1myljlf"),g(c,"type","text"),g(c,"placeholder","Apellido"),g(o,"class","contactInput"),g(d,"class","dataInput svelte-1myljlf"),g(d,"type","tel"),g(d,"placeholder","tel\xE9fono"),g(f,"class","contactInput"),g(s,"class",""),E.disabled=!0,E.selected=!0,E.__value="",E.value=E.__value,g(y,"class","dataInput svelte-1myljlf"),g(y,"id","selTP"),g(y,"name","selTP"),t[3].propCont===void 0&&et(()=>t[11].call(y)),g(v,"class","col"),g(M,"class","textareaInput svelte-1myljlf"),g(M,"type","textarea"),g(M,"placeholder","Comentarios"),g(A,"class","col"),g(z,"class","btn__save")},m(R,N){w(R,e,N),w(R,n,N),w(R,s,N),u(s,i),ee.m(i,null),u(s,r),u(s,o),u(o,a),ge(a,t[3].name),u(o,l),u(o,c),ge(c,t[3].lastname),u(s,h),u(s,f),u(f,d),ge(d,t[3].telephon),u(f,m),W&&W.m(f,null),w(R,_,N),w(R,v,N),u(v,y),u(y,E);for(let P=0;P<x.length;P+=1)x[P].m(y,null);Fe(y,t[3].propCont),u(v,I),Q&&Q.m(v,null),w(R,L,N),w(R,A,N),u(A,M),ge(M,t[3].comContact),w(R,F,N),C&&C.m(R,N),w(R,O,N),w(R,z,N),$=!0,U||(j=[q(a,"input",t[7]),q(c,"input",t[8]),q(d,"input",t[9]),q(y,"change",t[11]),q(M,"input",t[13]),q(z,"click",t[5])],U=!0)},p(R,N){if(Y===(Y=K(R))&&ee?ee.p(R,N):(ee.d(1),ee=Y(R),ee&&(ee.c(),ee.m(i,null))),N[0]&9&&a.value!==R[3].name&&ge(a,R[3].name),N[0]&9&&c.value!==R[3].lastname&&ge(c,R[3].lastname),N[0]&9&&ge(d,R[3].telephon),R[2]?W?W.p(R,N):(W=Nf(R),W.c(),W.m(f,null)):W&&(W.d(1),W=null),N[0]&1){G=R[0];let P;for(P=0;P<G.length;P+=1){const J=Rf(R,G,P);x[P]?x[P].p(J,N):(x[P]=Of(J),x[P].c(),x[P].m(y,null))}for(;P<x.length;P+=1)x[P].d(1);x.length=G.length}N[0]&9&&Fe(y,R[3].propCont),R[2]?Q?Q.p(R,N):(Q=Lf(R),Q.c(),Q.m(v,null)):Q&&(Q.d(1),Q=null),N[0]&9&&ge(M,R[3].comContact),R[2]?C?(C.p(R,N),N[0]&4&&H(C,1)):(C=Mf(R),C.c(),H(C,1),C.m(O.parentNode,O)):C&&(It(),X(C,1,1,()=>{C=null}),Tt())},i(R){$||(H(C),$=!0)},o(R){X(C),$=!1},d(R){R&&b(e),R&&b(n),R&&b(s),ee.d(),W&&W.d(),R&&b(_),R&&b(v),ze(x,R),Q&&Q.d(),R&&b(L),R&&b(A),R&&b(F),C&&C.d(R),R&&b(O),R&&b(z),U=!1,Ze(j)}}}function VT(t,e,n){let s;Me(t,tt,Y=>n(3,s=Y));var i=[];let r=Fn,o=!1,a=!1;(()=>{for(let Y of r){let ee=`${Y.nameProperty} ${Y.claveEB} - ${(Y.price/1e6).toFixed(2)}`;n(0,i=[...i,ee])}return n(0,i=i.sort())})();function l(){n(1,o=!0)}function c(){n(2,a=!0)}function h(){s.createdAt=this.value,tt.set(s),n(0,i)}function f(){s.name=this.value,tt.set(s),n(0,i)}function d(){s.lastname=this.value,tt.set(s),n(0,i)}function m(){s.telephon=this.value,tt.set(s),n(0,i)}function _(){s.email=this.value,tt.set(s),n(0,i)}function v(){s.propCont=jt(this),tt.set(s),n(0,i)}function y(){s.budget=ms(this.value),tt.set(s),n(0,i)}function E(){s.comContact=this.value,tt.set(s),n(0,i)}function I(){s.typeContact=jt(this),tt.set(s),n(0,i)}function L(){s.selecMC=jt(this),tt.set(s),n(0,i)}function A(){s.modePay=jt(this),tt.set(s),n(0,i)}function M(){s.selecTP=jt(this),tt.set(s),n(0,i)}function F(){s.rangeProp=jt(this),tt.set(s),n(0,i)}function O(){s.numBeds=jt(this),tt.set(s),n(0,i)}function z(){s.numBaths=jt(this),tt.set(s),n(0,i)}function $(){s.halfBathroom=jt(this),tt.set(s),n(0,i)}function U(){s.numParks=jt(this),tt.set(s),n(0,i)}function j(Y){t.$$.not_equal(s.locaProperty,Y)&&(s.locaProperty=Y,tt.set(s))}function K(Y){t.$$.not_equal(s.tagsProperty,Y)&&(s.tagsProperty=Y,tt.set(s))}return[i,o,a,s,l,c,h,f,d,m,_,v,y,E,I,L,A,M,F,O,z,$,U,j,K]}class jT extends xe{constructor(e){super(),Xe(this,e,VT,BT,We,{},null,[-1,-1])}}function zf(t,e,n){const s=t.slice();return s[24]=e[n],s}function Gf(t,e,n){const s=t.slice();return s[27]=e[n],s}function Wf(t,e,n){const s=t.slice();return s[30]=e[n],s}function Qf(t,e,n){const s=t.slice();return s[33]=e[n],s}function Yf(t,e,n){const s=t.slice();return s[36]=e[n],s}function Xf(t,e,n){const s=t.slice();return s[39]=e[n],s}function xf(t,e,n){const s=t.slice();return s[42]=e[n],s}function qT(t){let e,n=Rt(t[1].createdAt)+"",s,i,r;return{c(){e=p("h3"),s=S(n),g(e,"class","dataInput")},m(o,a){w(o,e,a),u(e,s),i||(r=q(e,"dblclick",t[3]),i=!0)},p(o,a){a[0]&2&&n!==(n=Rt(o[1].createdAt)+"")&&ie(s,n)},d(o){o&&b(e),i=!1,r()}}}function HT(t){let e,n,s;return{c(){e=p("input"),g(e,"class","dataInput"),g(e,"type","date")},m(i,r){w(i,e,r),ge(e,t[1].createdAt),n||(s=q(e,"input",t[4]),n=!0)},p(i,r){r[0]&2&&ge(e,i[1].createdAt)},d(i){i&&b(e),n=!1,s()}}}function Jf(t){let e,n=t[42]+"",s;return{c(){e=p("option"),s=S(n),g(e,"type","checkbox"),e.__value=t[42],e.value=e.__value},m(i,r){w(i,e,r),u(e,s)},p:fe,d(i){i&&b(e)}}}function Zf(t){let e,n=t[39]+"",s,i;return{c(){e=p("option"),s=S(n),i=k(),g(e,"type","checkbox"),e.__value=t[39],e.value=e.__value},m(r,o){w(r,e,o),u(e,s),u(e,i)},p:fe,d(r){r&&b(e)}}}function ed(t){let e,n=t[36]+"",s,i;return{c(){e=p("option"),s=S(n),i=S(" Rec\xE1maras"),g(e,"type","checkbox"),e.__value=t[36],e.value=e.__value},m(r,o){w(r,e,o),u(e,s),u(e,i)},p:fe,d(r){r&&b(e)}}}function td(t){let e,n=t[33]+"",s,i;return{c(){e=p("option"),s=S(n),i=S(" ba\xF1os"),g(e,"type","checkbox"),e.__value=t[33],e.value=e.__value},m(r,o){w(r,e,o),u(e,s),u(e,i)},p:fe,d(r){r&&b(e)}}}function nd(t){let e,n=t[30]+"",s,i;return{c(){e=p("option"),s=S(n),i=S(" Medios ba\xF1os"),g(e,"type","checkbox"),e.__value=t[30],e.value=e.__value},m(r,o){w(r,e,o),u(e,s),u(e,i)},p:fe,d(r){r&&b(e)}}}function sd(t){let e,n=t[27]+"",s,i;return{c(){e=p("option"),s=S(n),i=S(" Estacionamientos"),g(e,"type","checkbox"),e.__value=t[27],e.value=e.__value},m(r,o){w(r,e,o),u(e,s),u(e,i)},p:fe,d(r){r&&b(e)}}}function id(t){let e,n=t[24]+"",s;return{c(){e=p("option"),s=S(n),g(e,"type","checkbox"),e.__value=t[24],e.value=e.__value},m(i,r){w(i,e,r),u(e,s)},p:fe,d(i){i&&b(e)}}}function KT(t){let e,n,s,i,r,o,a,l,c,h,f,d,m,_,v,y,E,I,L,A,M,F,O,z,$,U,j,K,Y,ee,W,G,x,Q,C,R,N,P,J,oe,Ae,me,ye,ce,De,Re,mt,B,re,Qe,Nt,$e,ft,je,rn,dt,gt,Bt,D,ae,ve,lt,V,ke,_t,on,ut,jn,an,vt,Sn,An,ln,Dn;function Pn(T,se){if(T[0])return HT;if(T[2]==="propEditing")return qT}let en=Pn(t),qe=en&&en(t),tn=zo,He=[];for(let T=0;T<tn.length;T+=1)He[T]=Jf(xf(t,tn,T));let Pe=yf,Ce=[];for(let T=0;T<Pe.length;T+=1)Ce[T]=Zf(Xf(t,Pe,T));let qn=Go,yt=[];for(let T=0;T<qn.length;T+=1)yt[T]=ed(Yf(t,qn,T));let Hn=En,Vt=[];for(let T=0;T<Hn.length;T+=1)Vt[T]=td(Qf(t,Hn,T));let Rn=En,bt=[];for(let T=0;T<Rn.length;T+=1)bt[T]=nd(Wf(t,Rn,T));let Kn=En,wt=[];for(let T=0;T<Kn.length;T+=1)wt[T]=sd(Gf(t,Kn,T));let wn=wf,rt=[];for(let T=0;T<wn.length;T+=1)rt[T]=id(zf(t,wn,T));function Qr(T){t[22](T)}let as={};t[1].locaProperty!==void 0&&(as.ubication=t[1].locaProperty),ut=new B_({props:as}),Jn.push(()=>js(ut,"ubication",Qr));function Rs(T){t[23](T)}let Ni={};return t[1].tagsProperty!==void 0&&(Ni.tag=t[1].tagsProperty),vt=new V_({props:Ni}),Jn.push(()=>js(vt,"tag",Rs)),{c(){e=p("div"),qe&&qe.c(),n=k(),s=p("select"),i=p("option"),i.textContent="Tipo de Propiedad";for(let T=0;T<He.length;T+=1)He[T].c();r=k(),o=p("label"),o.innerHTML=`Titulo
       <input type="text"/>`,a=k(),l=p("label"),c=S(`Colonia\r
        `),h=p("input"),f=k(),d=p("label"),m=S(`Nombre de la Propiead\r
        `),_=p("input"),v=k(),y=p("label"),E=S(`Clave EB\r
        `),I=p("input"),L=k(),A=p("label"),M=S(`Clave MH\r
        `),F=p("input"),O=k(),z=p("div"),$=p("textarea"),U=k(),j=p("select"),K=p("option"),K.textContent="Tipo de Operaci\xF3n";for(let T=0;T<Ce.length;T+=1)Ce[T].c();Y=k(),ee=p("select"),W=p("option"),W.textContent="# Rec\xE1maras";for(let T=0;T<yt.length;T+=1)yt[T].c();G=k(),x=p("select"),Q=p("option"),Q.textContent="# Ba\xF1os";for(let T=0;T<Vt.length;T+=1)Vt[T].c();C=k(),R=p("select"),N=p("option"),N.textContent="# Medios Ba\xF1os";for(let T=0;T<bt.length;T+=1)bt[T].c();P=k(),J=p("select"),oe=p("option"),oe.textContent="# Estacionamientos";for(let T=0;T<wt.length;T+=1)wt[T].c();Ae=k(),me=p("label"),ye=S(`Area de Construcci\xF3n\r
            `),ce=p("input"),De=k(),Re=p("label"),mt=S(`Area de Terreno\r
            `),B=p("input"),re=k(),Qe=p("label"),Nt=S(`Precio\r
            `),$e=p("input"),ft=k(),je=p("label"),rn=S(`Link Imgen\r
        `),dt=p("input"),gt=k(),Bt=p("label"),D=S(`Link de la Propiedad\r
        `),ae=p("input"),ve=k(),lt=p("label"),lt.innerHTML=`Propietario
            <input type="text"/>`,V=k(),ke=p("select"),_t=p("option"),_t.textContent="Tipo de Encargado";for(let T=0;T<rt.length;T+=1)rt[T].c();on=k(),de(ut.$$.fragment),an=k(),de(vt.$$.fragment),i.disabled=!0,i.selected=!0,i.__value="",i.value=i.__value,g(s,"class","selTP"),g(s,"id","selTP"),g(s,"name","selTP"),t[1].selecTP===void 0&&et(()=>t[5].call(s)),g(h,"type","text"),g(_,"type","text"),g(I,"type","text"),g(F,"type","text"),g($,"placeholder","Comentarios"),g($,"cols","65"),g($,"rows","5"),g($,"class","form-control"),g(z,"class","col"),K.disabled=!0,K.selected=!0,K.__value="",K.value=K.__value,t[1].typeOperation===void 0&&et(()=>t[11].call(j)),W.disabled=!0,W.selected=!0,W.__value="",W.value=W.__value,t[1].beds===void 0&&et(()=>t[12].call(ee)),Q.disabled=!0,Q.selected=!0,Q.__value="",Q.value=Q.__value,t[1].bathroom===void 0&&et(()=>t[13].call(x)),N.disabled=!0,N.selected=!0,N.__value="",N.value=N.__value,t[1].halfBathroom===void 0&&et(()=>t[14].call(R)),oe.disabled=!0,oe.selected=!0,oe.__value="",oe.value=oe.__value,t[1].park===void 0&&et(()=>t[15].call(J)),g(ce,"type","number"),g(B,"type","number"),g($e,"type","number"),g(dt,"type","text"),g(ae,"type","text"),_t.disabled=!0,_t.selected=!0,_t.__value="",_t.value=_t.__value,g(ke,"name","typeSaller"),t[1].typeSaller===void 0&&et(()=>t[21].call(ke))},m(T,se){w(T,e,se),qe&&qe.m(e,null),w(T,n,se),w(T,s,se),u(s,i);for(let Oe=0;Oe<He.length;Oe+=1)He[Oe].m(s,null);Fe(s,t[1].selecTP),w(T,r,se),w(T,o,se),w(T,a,se),w(T,l,se),u(l,c),u(l,h),ge(h,t[1].colonia),w(T,f,se),w(T,d,se),u(d,m),u(d,_),ge(_,t[1].nameProperty),w(T,v,se),w(T,y,se),u(y,E),u(y,I),ge(I,t[1].claveEB),w(T,L,se),w(T,A,se),u(A,M),u(A,F),ge(F,t[1].claveMH),w(T,O,se),w(T,z,se),u(z,$),ge($,t[1].description),w(T,U,se),w(T,j,se),u(j,K);for(let Oe=0;Oe<Ce.length;Oe+=1)Ce[Oe].m(j,null);Fe(j,t[1].typeOperation),w(T,Y,se),w(T,ee,se),u(ee,W);for(let Oe=0;Oe<yt.length;Oe+=1)yt[Oe].m(ee,null);Fe(ee,t[1].beds),w(T,G,se),w(T,x,se),u(x,Q);for(let Oe=0;Oe<Vt.length;Oe+=1)Vt[Oe].m(x,null);Fe(x,t[1].bathroom),w(T,C,se),w(T,R,se),u(R,N);for(let Oe=0;Oe<bt.length;Oe+=1)bt[Oe].m(R,null);Fe(R,t[1].halfBathroom),w(T,P,se),w(T,J,se),u(J,oe);for(let Oe=0;Oe<wt.length;Oe+=1)wt[Oe].m(J,null);Fe(J,t[1].park),w(T,Ae,se),w(T,me,se),u(me,ye),u(me,ce),ge(ce,t[1].areaBuilding),w(T,De,se),w(T,Re,se),u(Re,mt),u(Re,B),ge(B,t[1].areaTotal),w(T,re,se),w(T,Qe,se),u(Qe,Nt),u(Qe,$e),ge($e,t[1].price),w(T,ft,se),w(T,je,se),u(je,rn),u(je,dt),ge(dt,t[1].urlImage),w(T,gt,se),w(T,Bt,se),u(Bt,D),u(Bt,ae),ge(ae,t[1].urlProp),w(T,ve,se),w(T,lt,se),w(T,V,se),w(T,ke,se),u(ke,_t);for(let Oe=0;Oe<rt.length;Oe+=1)rt[Oe].m(ke,null);Fe(ke,t[1].typeSaller),w(T,on,se),ue(ut,T,se),w(T,an,se),ue(vt,T,se),An=!0,ln||(Dn=[q(s,"change",t[5]),q(h,"input",t[6]),q(_,"input",t[7]),q(I,"input",t[8]),q(F,"input",t[9]),q($,"input",t[10]),q(j,"change",t[11]),q(ee,"change",t[12]),q(x,"change",t[13]),q(R,"change",t[14]),q(J,"change",t[15]),q(ce,"input",t[16]),q(B,"input",t[17]),q($e,"input",t[18]),q(dt,"input",t[19]),q(ae,"input",t[20]),q(ke,"change",t[21])],ln=!0)},p(T,se){if(en===(en=Pn(T))&&qe?qe.p(T,se):(qe&&qe.d(1),qe=en&&en(T),qe&&(qe.c(),qe.m(e,null))),se&0){tn=zo;let Z;for(Z=0;Z<tn.length;Z+=1){const ct=xf(T,tn,Z);He[Z]?He[Z].p(ct,se):(He[Z]=Jf(ct),He[Z].c(),He[Z].m(s,null))}for(;Z<He.length;Z+=1)He[Z].d(1);He.length=tn.length}if(se[0]&2&&Fe(s,T[1].selecTP),se[0]&2&&h.value!==T[1].colonia&&ge(h,T[1].colonia),se[0]&2&&_.value!==T[1].nameProperty&&ge(_,T[1].nameProperty),se[0]&2&&I.value!==T[1].claveEB&&ge(I,T[1].claveEB),se[0]&2&&F.value!==T[1].claveMH&&ge(F,T[1].claveMH),se[0]&2&&ge($,T[1].description),se&0){Pe=yf;let Z;for(Z=0;Z<Pe.length;Z+=1){const ct=Xf(T,Pe,Z);Ce[Z]?Ce[Z].p(ct,se):(Ce[Z]=Zf(ct),Ce[Z].c(),Ce[Z].m(j,null))}for(;Z<Ce.length;Z+=1)Ce[Z].d(1);Ce.length=Pe.length}if(se[0]&2&&Fe(j,T[1].typeOperation),se&0){qn=Go;let Z;for(Z=0;Z<qn.length;Z+=1){const ct=Yf(T,qn,Z);yt[Z]?yt[Z].p(ct,se):(yt[Z]=ed(ct),yt[Z].c(),yt[Z].m(ee,null))}for(;Z<yt.length;Z+=1)yt[Z].d(1);yt.length=qn.length}if(se[0]&2&&Fe(ee,T[1].beds),se&0){Hn=En;let Z;for(Z=0;Z<Hn.length;Z+=1){const ct=Qf(T,Hn,Z);Vt[Z]?Vt[Z].p(ct,se):(Vt[Z]=td(ct),Vt[Z].c(),Vt[Z].m(x,null))}for(;Z<Vt.length;Z+=1)Vt[Z].d(1);Vt.length=Hn.length}if(se[0]&2&&Fe(x,T[1].bathroom),se&0){Rn=En;let Z;for(Z=0;Z<Rn.length;Z+=1){const ct=Wf(T,Rn,Z);bt[Z]?bt[Z].p(ct,se):(bt[Z]=nd(ct),bt[Z].c(),bt[Z].m(R,null))}for(;Z<bt.length;Z+=1)bt[Z].d(1);bt.length=Rn.length}if(se[0]&2&&Fe(R,T[1].halfBathroom),se&0){Kn=En;let Z;for(Z=0;Z<Kn.length;Z+=1){const ct=Gf(T,Kn,Z);wt[Z]?wt[Z].p(ct,se):(wt[Z]=sd(ct),wt[Z].c(),wt[Z].m(J,null))}for(;Z<wt.length;Z+=1)wt[Z].d(1);wt.length=Kn.length}if(se[0]&2&&Fe(J,T[1].park),se[0]&2&&ms(ce.value)!==T[1].areaBuilding&&ge(ce,T[1].areaBuilding),se[0]&2&&ms(B.value)!==T[1].areaTotal&&ge(B,T[1].areaTotal),se[0]&2&&ms($e.value)!==T[1].price&&ge($e,T[1].price),se[0]&2&&dt.value!==T[1].urlImage&&ge(dt,T[1].urlImage),se[0]&2&&ae.value!==T[1].urlProp&&ge(ae,T[1].urlProp),se&0){wn=wf;let Z;for(Z=0;Z<wn.length;Z+=1){const ct=zf(T,wn,Z);rt[Z]?rt[Z].p(ct,se):(rt[Z]=id(ct),rt[Z].c(),rt[Z].m(ke,null))}for(;Z<rt.length;Z+=1)rt[Z].d(1);rt.length=wn.length}se[0]&2&&Fe(ke,T[1].typeSaller);const Oe={};!jn&&se[0]&2&&(jn=!0,Oe.ubication=T[1].locaProperty,Vs(()=>jn=!1)),ut.$set(Oe);const zn={};!Sn&&se[0]&2&&(Sn=!0,zn.tag=T[1].tagsProperty,Vs(()=>Sn=!1)),vt.$set(zn)},i(T){An||(H(ut.$$.fragment,T),H(vt.$$.fragment,T),An=!0)},o(T){X(ut.$$.fragment,T),X(vt.$$.fragment,T),An=!1},d(T){T&&b(e),qe&&qe.d(),T&&b(n),T&&b(s),ze(He,T),T&&b(r),T&&b(o),T&&b(a),T&&b(l),T&&b(f),T&&b(d),T&&b(v),T&&b(y),T&&b(L),T&&b(A),T&&b(O),T&&b(z),T&&b(U),T&&b(j),ze(Ce,T),T&&b(Y),T&&b(ee),ze(yt,T),T&&b(G),T&&b(x),ze(Vt,T),T&&b(C),T&&b(R),ze(bt,T),T&&b(P),T&&b(J),ze(wt,T),T&&b(Ae),T&&b(me),T&&b(De),T&&b(Re),T&&b(re),T&&b(Qe),T&&b(ft),T&&b(je),T&&b(gt),T&&b(Bt),T&&b(ve),T&&b(lt),T&&b(V),T&&b(ke),ze(rt,T),T&&b(on),he(ut,T),T&&b(an),he(vt,T),ln=!1,Ze(Dn)}}}function zT(t,e,n){let s,i;Me(t,Je,j=>n(1,s=j)),Me(t,nt,j=>n(2,i=j));let r=!1;function o(){n(0,r=!0)}function a(){s.createdAt=this.value,Je.set(s)}function l(){s.selecTP=jt(this),Je.set(s)}function c(){s.colonia=this.value,Je.set(s)}function h(){s.nameProperty=this.value,Je.set(s)}function f(){s.claveEB=this.value,Je.set(s)}function d(){s.claveMH=this.value,Je.set(s)}function m(){s.description=this.value,Je.set(s)}function _(){s.typeOperation=jt(this),Je.set(s)}function v(){s.beds=jt(this),Je.set(s)}function y(){s.bathroom=jt(this),Je.set(s)}function E(){s.halfBathroom=jt(this),Je.set(s)}function I(){s.park=jt(this),Je.set(s)}function L(){s.areaBuilding=ms(this.value),Je.set(s)}function A(){s.areaTotal=ms(this.value),Je.set(s)}function M(){s.price=ms(this.value),Je.set(s)}function F(){s.urlImage=this.value,Je.set(s)}function O(){s.urlProp=this.value,Je.set(s)}function z(){s.typeSaller=jt(this),Je.set(s)}function $(j){t.$$.not_equal(s.locaProperty,j)&&(s.locaProperty=j,Je.set(s))}function U(j){t.$$.not_equal(s.tagsProperty,j)&&(s.tagsProperty=j,Je.set(s))}return[r,s,i,o,a,l,c,h,f,d,m,_,v,y,E,I,L,A,M,F,O,z,$,U]}class GT extends xe{constructor(e){super(),Xe(this,e,zT,KT,We,{},null,[-1,-1])}}function WT(t){let e;return{c(){e=S("Editar")},m(n,s){w(n,e,s)},d(n){n&&b(e)}}}function QT(t){let e;return{c(){e=S("Guardar")},m(n,s){w(n,e,s)},d(n){n&&b(e)}}}function YT(t){let e,n,s,i,r,o,a,l,c,h;n=new jT({});function f(_,v){return _[0]?WT:QT}let d=f(t),m=d(t);return{c(){e=p("div"),de(n.$$.fragment),s=k(),i=p("div"),r=p("button"),m.c(),o=k(),a=p("button"),a.textContent="Cancel",g(r,"class","btn__save"),g(a,"class","btn__cancel"),g(i,"class","contSavCan svelte-1at07r"),g(e,"class","altaContactos")},m(_,v){w(_,e,v),ue(n,e,null),u(e,s),u(e,i),u(i,r),m.m(r,null),u(i,o),u(i,a),l=!0,c||(h=[q(r,"click",t[4]),q(a,"click",t[3])],c=!0)},p(_,[v]){d!==(d=f(_))&&(m.d(1),m=d(_),m&&(m.c(),m.m(r,null)))},i(_){l||(H(n.$$.fragment,_),l=!0)},o(_){X(n.$$.fragment,_),l=!1},d(_){_&&b(e),he(n),m.d(),c=!1,Ze(h)}}}function XT(t,e,n){let s,i;Me(t,nt,f=>n(6,s=f)),Me(t,tt,f=>n(1,i=f));let r=!1,o;async function a(f){if(console.log(s),o=Date.now(),f={...f,createdAt:o},s!="contEditing"){const d=_n(pt,"contacts");await ws(d,f),Ve(nt,s="binnAdding",s),l(s,f)}else await Ia(is(pt,"contacts",f.id),f),l(s,f),n(0,r=!1);f=[],Ve(nt,s="contSelect",s)}async function l(f,d){try{if(f==="binnAdding"){let m=`Se le agreg\xF3 a: ${d.name} ${d.lastname} del ${d.telephon}`,_={date:Date.now(),comment:m};console.log(f,_);const v=_n(pt,"binnacles");await ws(v,_)}else{let m=`Se le edit\xF3 a: ${d.name} ${d.lastname} del ${d.telephon}`,_={date:Date.now(),comment:m};console.log(f,_);const v=_n(pt,"binnacles");await ws(v,_)}}catch(m){console.log("error",m)}}function c(){n(0,r=!0),location.href="/"}return[r,i,a,c,()=>a(i)]}class xT extends xe{constructor(e){super(),Xe(this,e,XT,YT,We,{})}}function rd(t,e,n){const s=t.slice();return s[12]=e[n],s}function od(t,e,n){const s=t.slice();return s[51]=e[n],s}function ad(t,e,n){const s=t.slice();return s[54]=e[n],s}function ld(t){let e,n,s,i,r,o=t[9].name+"",a,l,c=t[9].lastname+"",h,f,d,m,_=Rt(t[9].createdAt)+"",v,y,E,I,L=t[9].selecTP+"",A,M,F=t[9].numBeds+"",O,z,$=t[9].numBaths+"",U,j,K=t[9].numParks+"",Y,ee,W,G,x,Q,C=t[9].budget+"",R,N,P,J=t[9].selecTP+"",oe,Ae,me,ye,ce,De=t[9].telephon+"",Re,mt,B,re=t[9].email+"",Qe,Nt,$e,ft,je=t[9].tagsProperty.join(",  ")+"",rn,dt,gt,Bt,D=t[9].locaProperty.join(",  ")+"",ae,ve,lt,V,ke,_t,on,ut,jn,an,vt=t[9].contactStage+"",Sn,An,ln,Dn=t[9].comContact+"",Pn,en,qe,tn,He,Pe,Ce,qn,yt,Hn,Vt,Rn,bt,Kn,wt,wn,rt,Qr,as,Rs,Ni,T,se,Oe,zn,Z,ct,ei,hu,fu,Yr,Pa,Oi,Ct,Ra,du,ti=t[9].sendedProperties,cn=[];for(let le=0;le<ti.length;le+=1)cn[le]=cd(ad(t,ti,le));let un=t[0]&&ud(t),Ot=t[2]&&hd(t),Lt=t[7]&&fd(t),ni=t[8],hn=[];for(let le=0;le<ni.length;le+=1)hn[le]=dd(od(t,ni,le));let Mt=t[6]&&pd(t);return{c(){e=p("div"),n=p("div"),s=p("h4"),s.textContent="Contacto",i=k(),r=p("h2"),a=S(o),l=k(),h=S(c),f=k(),d=p("p"),m=S("Fecha Alta: "),v=S(_),y=k(),E=p("p"),I=S("Busca  "),A=S(L),M=S(", de "),O=S(F),z=S(" rec\xE1maras,  "),U=S($),j=S(" ba\xF1os y "),Y=S(K),ee=S(" estacionamientos"),W=k(),G=p("p"),x=S("Presupuesto tope: "),Q=p("strong"),R=S(C),N=S(" : Tipo de propiedad buscada: "),P=p("strong"),oe=S(J),Ae=k(),me=p("p"),ye=S("Tel\xE9fono: "),ce=p("strong"),Re=S(De),mt=S(" ---- Email: "),B=p("strong"),Qe=S(re),Nt=k(),$e=p("p"),ft=S("Preferencias: "),rn=S(je),dt=k(),gt=p("p"),Bt=S("Ubicaciones: "),ae=S(D),ve=k(),lt=p("div"),V=p("p"),V.textContent="Propiedades enviadas:",ke=k(),_t=p("div");for(let le=0;le<cn.length;le+=1)cn[le].c();on=k(),ut=p("div"),un&&un.c(),jn=k(),an=p("p"),Sn=S(vt),An=k(),ln=p("p"),Pn=S(Dn),en=k(),qe=p("div"),tn=p("button"),tn.textContent="Programar Evento",He=k(),Ot&&Ot.c(),Pe=k(),Ce=p("button"),Ce.textContent="Ver Propiedades de Interes",qn=k(),yt=p("button"),yt.textContent="Buscar Propiedad",Hn=k(),Lt&&Lt.c(),Vt=k(),Rn=p("div"),bt=p("button"),bt.textContent="Cancelar",Kn=k(),wt=p("div"),wn=p("div"),rt=p("textarea"),Qr=k(),as=p("div"),Rs=p("button"),Rs.textContent="Enviar WhatsApp",Ni=k(),T=p("button"),T.textContent="Guardar Info",se=k(),Oe=p("div"),zn=p("img"),ct=k(),ei=p("img"),fu=k(),Yr=p("div");for(let le=0;le<hn.length;le+=1)hn[le].c();Pa=k(),Mt&&Mt.c(),Oi=sn(),g(_t,"class","mostImage svelte-ce274g"),g(lt,"class","propMost"),g(tn,"class","btnCommon"),g(Ce,"class","btnCommon"),g(yt,"class","btnCommon"),g(bt,"class","btn__cancel"),g(rt,"class","texArea"),g(rt,"cols","65"),g(rt,"rows","5"),g(rt,"placeholder","Ingresa un comentario"),g(Rs,"class","btnCommon btnWhatsApp"),g(T,"class","btnCommon"),st(zn.src,Z=Da)||g(zn,"src",Z),g(zn,"alt","delete"),st(ei.src,hu=F_)||g(ei,"src",hu),g(ei,"alt","delete"),g(Oe,"class","icon__Content"),g(e,"class","container")},m(le,Ke){w(le,e,Ke),u(e,n),u(n,s),u(n,i),u(n,r),u(r,a),u(r,l),u(r,h),u(n,f),u(n,d),u(d,m),u(d,v),u(n,y),u(n,E),u(E,I),u(E,A),u(E,M),u(E,O),u(E,z),u(E,U),u(E,j),u(E,Y),u(E,ee),u(n,W),u(n,G),u(G,x),u(G,Q),u(Q,R),u(G,N),u(G,P),u(P,oe),u(n,Ae),u(n,me),u(me,ye),u(me,ce),u(ce,Re),u(me,mt),u(me,B),u(B,Qe),u(n,Nt),u(n,$e),u($e,ft),u($e,rn),u(n,dt),u(n,gt),u(gt,Bt),u(gt,ae),u(n,ve),u(n,lt),u(lt,V),u(lt,ke),u(lt,_t);for(let Be=0;Be<cn.length;Be+=1)cn[Be].m(_t,null);u(e,on),u(e,ut),un&&un.m(ut,null),u(e,jn),u(e,an),u(an,Sn),u(e,An),u(e,ln),u(ln,Pn),u(e,en),u(e,qe),u(qe,tn),u(qe,He),Ot&&Ot.m(qe,null),u(qe,Pe),u(qe,Ce),u(qe,qn),u(qe,yt),u(qe,Hn),Lt&&Lt.m(qe,null),u(e,Vt),u(e,Rn),u(Rn,bt),u(e,Kn),u(e,wt),u(wt,wn),u(wn,rt),ge(rt,t[4]),u(wn,Qr),u(wn,as),u(as,Rs),u(as,Ni),u(as,T),u(wt,se),u(wt,Oe),u(Oe,zn),u(Oe,ct),u(Oe,ei),u(e,fu),u(e,Yr);for(let Be=0;Be<hn.length;Be+=1)hn[Be].m(Yr,null);w(le,Pa,Ke),Mt&&Mt.m(le,Ke),w(le,Oi,Ke),Ct=!0,Ra||(du=[q(tn,"click",t[29]),q(Ce,"click",t[30]),q(yt,"click",t[16]),q(bt,"click",t[19]),q(rt,"keypress",t[25]),q(rt,"input",t[32]),q(Rs,"click",t[24]),q(T,"click",t[33]),q(zn,"click",t[20]),q(ei,"click",t[21])],Ra=!0)},p(le,Ke){if((!Ct||Ke[0]&512)&&o!==(o=le[9].name+"")&&ie(a,o),(!Ct||Ke[0]&512)&&c!==(c=le[9].lastname+"")&&ie(h,c),(!Ct||Ke[0]&512)&&_!==(_=Rt(le[9].createdAt)+"")&&ie(v,_),(!Ct||Ke[0]&512)&&L!==(L=le[9].selecTP+"")&&ie(A,L),(!Ct||Ke[0]&512)&&F!==(F=le[9].numBeds+"")&&ie(O,F),(!Ct||Ke[0]&512)&&$!==($=le[9].numBaths+"")&&ie(U,$),(!Ct||Ke[0]&512)&&K!==(K=le[9].numParks+"")&&ie(Y,K),(!Ct||Ke[0]&512)&&C!==(C=le[9].budget+"")&&ie(R,C),(!Ct||Ke[0]&512)&&J!==(J=le[9].selecTP+"")&&ie(oe,J),(!Ct||Ke[0]&512)&&De!==(De=le[9].telephon+"")&&ie(Re,De),(!Ct||Ke[0]&512)&&re!==(re=le[9].email+"")&&ie(Qe,re),(!Ct||Ke[0]&512)&&je!==(je=le[9].tagsProperty.join(",  ")+"")&&ie(rn,je),(!Ct||Ke[0]&512)&&D!==(D=le[9].locaProperty.join(",  ")+"")&&ie(ae,D),Ke[0]&25090){ti=le[9].sendedProperties;let Be;for(Be=0;Be<ti.length;Be+=1){const Li=ad(le,ti,Be);cn[Be]?cn[Be].p(Li,Ke):(cn[Be]=cd(Li),cn[Be].c(),cn[Be].m(_t,null))}for(;Be<cn.length;Be+=1)cn[Be].d(1);cn.length=ti.length}if(le[0]?un?un.p(le,Ke):(un=ud(le),un.c(),un.m(ut,null)):un&&(un.d(1),un=null),(!Ct||Ke[0]&512)&&vt!==(vt=le[9].contactStage+"")&&ie(Sn,vt),(!Ct||Ke[0]&512)&&Dn!==(Dn=le[9].comContact+"")&&ie(Pn,Dn),le[2]?Ot?(Ot.p(le,Ke),Ke[0]&4&&H(Ot,1)):(Ot=hd(le),Ot.c(),H(Ot,1),Ot.m(qe,Pe)):Ot&&(It(),X(Ot,1,1,()=>{Ot=null}),Tt()),le[7]?Lt?(Lt.p(le,Ke),Ke[0]&128&&H(Lt,1)):(Lt=fd(le),Lt.c(),H(Lt,1),Lt.m(qe,null)):Lt&&(It(),X(Lt,1,1,()=>{Lt=null}),Tt()),Ke[0]&16&&ge(rt,le[4]),Ke[0]&256){ni=le[8];let Be;for(Be=0;Be<ni.length;Be+=1){const Li=od(le,ni,Be);hn[Be]?hn[Be].p(Li,Ke):(hn[Be]=dd(Li),hn[Be].c(),hn[Be].m(Yr,null))}for(;Be<hn.length;Be+=1)hn[Be].d(1);hn.length=ni.length}le[6]?Mt?(Mt.p(le,Ke),Ke[0]&64&&H(Mt,1)):(Mt=pd(le),Mt.c(),H(Mt,1),Mt.m(Oi.parentNode,Oi)):Mt&&(It(),X(Mt,1,1,()=>{Mt=null}),Tt())},i(le){Ct||(H(Ot),H(Lt),H(Mt),Ct=!0)},o(le){X(Ot),X(Lt),X(Mt),Ct=!1},d(le){le&&b(e),ze(cn,le),un&&un.d(),Ot&&Ot.d(),Lt&&Lt.d(),ze(hn,le),le&&b(Pa),Mt&&Mt.d(le),le&&b(Oi),Ra=!1,Ze(du)}}}function cd(t){let e,n=t[54]+"",s,i,r,o;function a(){return t[27](t[54])}return{c(){e=p("p"),s=S(n),g(e,"value",i=t[54])},m(l,c){w(l,e,c),u(e,s),r||(o=[q(e,"mouseenter",a),q(e,"mouseout",t[14]),q(e,"dblclick",t[28])],r=!0)},p(l,c){t=l,c[0]&512&&n!==(n=t[54]+"")&&ie(s,n),c[0]&512&&i!==(i=t[54])&&g(e,"value",i)},d(l){l&&b(e),r=!1,Ze(o)}}}function ud(t){let e,n=t[1][0].nameProperty+"",s,i,r,o,a;return{c(){e=p("h3"),s=S(n),i=k(),r=p("img"),g(e,"class","svelte-ce274g"),g(r,"class","imgPropContSelect"),g(r,"height","200"),st(r.src,o=t[1][0].urlImage)||g(r,"src",o),g(r,"alt",a=t[1][0].claveEB)},m(l,c){w(l,e,c),u(e,s),w(l,i,c),w(l,r,c)},p(l,c){c[0]&2&&n!==(n=l[1][0].nameProperty+"")&&ie(s,n),c[0]&2&&!st(r.src,o=l[1][0].urlImage)&&g(r,"src",o),c[0]&2&&a!==(a=l[1][0].claveEB)&&g(r,"alt",a)},d(l){l&&b(e),l&&b(i),l&&b(r)}}}function hd(t){let e,n;const s=[t[9]];let i={};for(let r=0;r<s.length;r+=1)i=Ut(i,s[r]);return e=new DT({props:i}),e.$on("closeIt",t[22]),{c(){de(e.$$.fragment)},m(r,o){ue(e,r,o),n=!0},p(r,o){const a=o[0]&512?yn(s,[Zn(r[9])]):{};e.$set(a)},i(r){n||(H(e.$$.fragment,r),n=!0)},o(r){X(e.$$.fragment,r),n=!1},d(r){he(e,r)}}}function fd(t){let e,n,s;function i(o){t[31](o)}let r={};return t[3]!==void 0&&(r.searchTerm=t[3]),e=new uu({props:r}),Jn.push(()=>js(e,"searchTerm",i)),e.$on("input",t[17]),{c(){de(e.$$.fragment)},m(o,a){ue(e,o,a),s=!0},p(o,a){const l={};!n&&a[0]&8&&(n=!0,l.searchTerm=o[3],Vs(()=>n=!1)),e.$set(l)},i(o){s||(H(e.$$.fragment,o),s=!0)},o(o){X(e.$$.fragment,o),s=!1},d(o){he(e,o)}}}function dd(t){let e,n=Rt(t[51].date)+"",s,i,r=t[51].action+"",o,a,l=t[51].comment+"",c;return{c(){e=p("h4"),s=S(n),i=k(),o=S(r),a=k(),c=S(l)},m(h,f){w(h,e,f),u(e,s),u(e,i),u(e,o),u(e,a),u(e,c)},p(h,f){f[0]&256&&n!==(n=Rt(h[51].date)+"")&&ie(s,n),f[0]&256&&r!==(r=h[51].action+"")&&ie(o,r),f[0]&256&&l!==(l=h[51].comment+"")&&ie(c,l)},d(h){h&&b(e)}}}function pd(t){let e,n,s,i=t[11].length+"",r,o,a,l,c=t[11],h=[];for(let m=0;m<c.length;m+=1)h[m]=md(rd(t,c,m));const f=m=>X(h[m],1,1,()=>{h[m]=null});let d=t[11].length===0&&gd();return{c(){e=p("main"),n=p("h3"),s=S("Propiedades encontradas: "),r=S(i),o=k();for(let m=0;m<h.length;m+=1)h[m].c();a=k(),d&&d.c(),g(n,"class","svelte-ce274g"),g(e,"id","bookshelf"),g(e,"class","svelte-ce274g")},m(m,_){w(m,e,_),u(e,n),u(n,s),u(n,r),u(e,o);for(let v=0;v<h.length;v+=1)h[v].m(e,null);u(e,a),d&&d.m(e,null),l=!0},p(m,_){if((!l||_[0]&2048)&&i!==(i=m[11].length+"")&&ie(r,i),_[0]&8390688){c=m[11];let v;for(v=0;v<c.length;v+=1){const y=rd(m,c,v);h[v]?(h[v].p(y,_),H(h[v],1)):(h[v]=md(y),h[v].c(),H(h[v],1),h[v].m(e,a))}for(It(),v=c.length;v<h.length;v+=1)f(v);Tt()}m[11].length===0?d||(d=gd(),d.c(),d.m(e,null)):d&&(d.d(1),d=null)},i(m){if(!l){for(let _=0;_<c.length;_+=1)H(h[_]);l=!0}},o(m){h=h.filter(Boolean);for(let _=0;_<h.length;_+=1)X(h[_]);l=!1},d(m){m&&b(e),ze(h,m),d&&d.d()}}}function md(t){let e,n,s,i,r,o,a,l,c;const h=[t[12]];let f={};for(let d=0;d<h.length;d+=1)f=Ut(f,h[d]);return r=new $_({props:f}),{c(){e=p("section"),n=p("input"),i=k(),de(r.$$.fragment),g(n,"type","checkbox"),n.__value=s=t[12].urlProp,n.value=n.__value,g(n,"class","form-check"),t[35][0].push(n),g(e,"class","property svelte-ce274g")},m(d,m){w(d,e,m),u(e,n),n.checked=~t[5].indexOf(n.__value),u(e,i),ue(r,e,null),a=!0,l||(c=[q(n,"change",t[34]),q(e,"click",t[23])],l=!0)},p(d,m){t=d,(!a||m[0]&2048&&s!==(s=t[12].urlProp))&&(n.__value=s,n.value=n.__value),m[0]&32&&(n.checked=~t[5].indexOf(n.__value));const _=m[0]&2048?yn(h,[Zn(t[12])]):{};r.$set(_)},i(d){a||(H(r.$$.fragment,d),et(()=>{o||(o=pn(e,Ti,{duration:500,easing:Ii},!0)),o.run(1)}),a=!0)},o(d){X(r.$$.fragment,d),o||(o=pn(e,Ti,{duration:500,easing:Ii},!1)),o.run(0),a=!1},d(d){d&&b(e),t[35][0].splice(t[35][0].indexOf(n),1),he(r),d&&o&&o.end(),l=!1,Ze(c)}}}function gd(t){let e;return{c(){e=p("h3"),e.textContent='"No hay Propiedades para este contacto"',g(e,"class","svelte-ce274g")},m(n,s){w(n,e,s)},d(n){n&&b(e)}}}function JT(t){let e,n,s=t[10]==="contSelect"&&ld(t);return{c(){e=p("main"),s&&s.c()},m(i,r){w(i,e,r),s&&s.m(e,null),n=!0},p(i,r){i[10]==="contSelect"?s?(s.p(i,r),r[0]&1024&&H(s,1)):(s=ld(i),s.c(),H(s,1),s.m(e,null)):s&&(It(),X(s,1,1,()=>{s=null}),Tt())},i(i){n||(H(s),n=!0)},o(i){X(s),n=!1},d(i){i&&b(e),s&&s.d()}}}function ZT(t){window.open(t)}function eC(t,e,n){let s,i,r,o,a;Me(t,tt,ye=>n(9,s=ye)),Me(t,nt,ye=>n(10,i=ye)),Me(t,tl,ye=>n(40,r=ye)),Me(t,Je,ye=>n(12,o=ye)),Me(t,ql,ye=>n(11,a=ye));const l=Xs();let c=!1,h,f=!1,d,m,_=[],v=!1,y=!1,E=[];console.log(i);function I(ye){n(0,c=!0),n(1,h=Fn.filter(ce=>ce.claveEB===ye))}function L(){n(0,c=!1)}function A(){console.log("estas en addSchedule"),n(2,f=!0)}function M(){n(7,y=!0)}const F=()=>(n(6,v=!0),Ve(ql,a=Fn.filter(ye=>(ye.nameProperty+" "+ye.colonia+" "+ye.claveEB).toLowerCase().includes(d.toLowerCase())),a));function O(ye){NT(ye),n(6,v=!0)}const z=()=>{Ve(tt,s=[],s),Ve(nt,i="start",i)};function $(){Ve(nt,i="contEditing",i)}async function U(){confirm("Deseas eleiminar definitivamente al contacto?")&&(await Ta(is(pt,"contacts",s.id)),j(s),l("/"))}async function j(ye){let ce=`Se le elimin\xF3a: ${ye.name} ${ye.lastname} del ${ye.telephon}`,De={date:Date.now(),comment:ce};console.log(i,De);const Re=_n(pt,"binnacles");await ws(Re,De)}function K(){n(2,f=!1)}function Y(){console.log(_)}function ee(){let ye=`https://api.whatsapp.com/send?phone=52${s.telephon}&text=${_}`;window.open(ye),x(_)}function W(){}function G(){Ve(nt,i="binnAdding",i),Ve(tl,r={date:Date.now(),comment:m,to:s.telephon,action:"Nota agregada: "},r),mf(i,r)}function x(ye){Ve(nt,i="binnAdding",i);let ce=Fn.filter(De=>De.urlProp===ye[0]);Ve(Je,o=ce[0],o),Ve(tl,r={date:Date.now(),comment:o.claveEB,to:s.telephon,action:"Propiedad enviada: "},r),mf(i,r)}n(8,E=_r.filter(ye=>ye.to===s.telephon));const Q=[[]],C=ye=>I(ye),R=()=>ZT(h[0].urlProp),N=()=>A(),P=()=>O(s);function J(ye){d=ye,n(3,d)}function oe(){m=this.value,n(4,m)}const Ae=()=>G();function me(){_=qt(Q[0],this.__value,this.checked),n(5,_)}return[c,h,f,d,m,_,v,y,E,s,i,a,o,I,L,A,M,F,O,z,$,U,K,Y,ee,W,G,C,R,N,P,J,oe,Ae,me,Q]}class tC extends xe{constructor(e){super(),Xe(this,e,eC,JT,We,{},null,[-1,-1])}}function _d(t,e,n){const s=t.slice();return s[22]=e[n],s[24]=n,s}function vd(t,e,n){const s=t.slice();return s[24]=e[n],s}function yd(t,e,n){const s=t.slice();return s[12]=e[n],s[24]=n,s}function bd(t){let e,n,s,i,r,o,a,l,c,h,f,d,m,_,v,y,E,I,L,A,M,F,O;function z(C){t[14](C)}let $={};t[3]!==void 0&&($.searchTerm=t[3]),r=new uu({props:$}),Jn.push(()=>js(r,"searchTerm",z)),r.$on("input",t[11]);let U=t[1],j=[];for(let C=0;C<U.length;C+=1)j[C]=kd(yd(t,U,C));const K=C=>X(j[C],1,1,()=>{j[C]=null});let Y=t[0]>1&&Ed(t),ee=[3,2,1],W=[];for(let C=0;C<3;C+=1)W[C]=Td(vd(t,ee,C));let G=Array(3),x=[];for(let C=0;C<G.length;C+=1)x[C]=Sd(_d(t,G,C));let Q=t[0]<t[5]&&Ad(t);return{c(){e=p("h2"),e.textContent=`${gr.length} Contactos a Mostrar`,n=k(),s=p("button"),s.textContent="Alta de Contacto",i=k(),de(r.$$.fragment),a=k(),l=p("div"),c=p("main");for(let C=0;C<j.length;C+=1)j[C].c();h=k(),f=p("div"),d=p("div"),m=p("ul"),Y&&Y.c(),_=k();for(let C=0;C<3;C+=1)W[C].c();v=k(),y=p("li"),E=p("span"),I=S(t[0]),L=k();for(let C=0;C<x.length;C+=1)x[C].c();A=k(),Q&&Q.c(),g(s,"class","altaContacto svelte-152vhxc"),g(c,"id","bookshelf"),g(m,"class","pagi__options"),g(d,"class","pagi__Item"),g(f,"class","container pagination"),g(l,"class","mosPag container cont__card svelte-152vhxc")},m(C,R){w(C,e,R),w(C,n,R),w(C,s,R),w(C,i,R),ue(r,C,R),w(C,a,R),w(C,l,R),u(l,c);for(let N=0;N<j.length;N+=1)j[N].m(c,null);u(l,h),u(l,f),u(f,d),u(d,m),Y&&Y.m(m,null),u(m,_);for(let N=0;N<3;N+=1)W[N].m(m,null);u(m,v),u(m,y),u(y,E),u(E,I),u(m,L);for(let N=0;N<x.length;N+=1)x[N].m(m,null);u(m,A),Q&&Q.m(m,null),M=!0,F||(O=q(s,"click",t[9]),F=!0)},p(C,R){const N={};if(!o&&R&8&&(o=!0,N.searchTerm=C[3],Vs(()=>o=!1)),r.$set(N),R&1046){U=C[1];let P;for(P=0;P<U.length;P+=1){const J=yd(C,U,P);j[P]?(j[P].p(J,R),H(j[P],1)):(j[P]=kd(J),j[P].c(),H(j[P],1),j[P].m(c,null))}for(It(),P=U.length;P<j.length;P+=1)K(P);Tt()}if(C[0]>1?Y?Y.p(C,R):(Y=Ed(C),Y.c(),Y.m(m,_)):Y&&(Y.d(1),Y=null),R&257){ee=[3,2,1];let P;for(P=0;P<3;P+=1){const J=vd(C,ee,P);W[P]?W[P].p(J,R):(W[P]=Td(J),W[P].c(),W[P].m(m,v))}for(;P<3;P+=1)W[P].d(1)}if((!M||R&1)&&ie(I,C[0]),R&289){G=Array(3);let P;for(P=0;P<G.length;P+=1){const J=_d(C,G,P);x[P]?x[P].p(J,R):(x[P]=Sd(J),x[P].c(),x[P].m(m,A))}for(;P<x.length;P+=1)x[P].d(1);x.length=G.length}C[0]<C[5]?Q?Q.p(C,R):(Q=Ad(C),Q.c(),Q.m(m,null)):Q&&(Q.d(1),Q=null)},i(C){if(!M){H(r.$$.fragment,C);for(let R=0;R<U.length;R+=1)H(j[R]);M=!0}},o(C){X(r.$$.fragment,C),j=j.filter(Boolean);for(let R=0;R<j.length;R+=1)X(j[R]);M=!1},d(C){C&&b(e),C&&b(n),C&&b(s),C&&b(i),he(r,C),C&&b(a),C&&b(l),ze(j,C),Y&&Y.d(),ze(W,C),ze(x,C),Q&&Q.d(),F=!1,O()}}}function wd(t){let e,n,s,i,r,o,a;const l=[t[12]];let c={};for(let f=0;f<l.length;f+=1)c=Ut(c,l[f]);n=new ET({props:c});function h(){return t[15](t[12])}return{c(){e=p("div"),de(n.$$.fragment),s=k(),g(e,"class","selecContact")},m(f,d){w(f,e,d),ue(n,e,null),u(e,s),r=!0,o||(a=q(e,"click",h),o=!0)},p(f,d){t=f;const m=d&2?yn(l,[Zn(t[12])]):{};n.$set(m)},i(f){r||(H(n.$$.fragment,f),et(()=>{i||(i=pn(e,Ti,{duration:500,easing:Ii},!0)),i.run(1)}),r=!0)},o(f){X(n.$$.fragment,f),i||(i=pn(e,Ti,{duration:500,easing:Ii},!1)),i.run(0),r=!1},d(f){f&&b(e),he(n),f&&i&&i.end(),o=!1,a()}}}function kd(t){let e,n,s=t[24]>=t[4]&&t[24]<t[2]&&wd(t);return{c(){s&&s.c(),e=sn()},m(i,r){s&&s.m(i,r),w(i,e,r),n=!0},p(i,r){i[24]>=i[4]&&i[24]<i[2]?s?(s.p(i,r),r&20&&H(s,1)):(s=wd(i),s.c(),H(s,1),s.m(e.parentNode,e)):s&&(It(),X(s,1,1,()=>{s=null}),Tt())},i(i){n||(H(s),n=!0)},o(i){X(s),n=!1},d(i){s&&s.d(i),i&&b(e)}}}function Ed(t){let e,n,s,i,r,o,a,l,c;return{c(){e=p("li"),n=p("a"),n.textContent="first",s=k(),i=p("li"),r=p("a"),o=S("previous"),g(n,"href","/blog"),g(r,"href",a="/blog/"+(t[0]-1))},m(h,f){w(h,e,f),u(e,n),w(h,s,f),w(h,i,f),u(i,r),u(r,o),l||(c=[q(n,"click",vn(t[16])),q(r,"click",vn(t[17]))],l=!0)},p(h,f){f&1&&a!==(a="/blog/"+(h[0]-1))&&g(r,"href",a)},d(h){h&&b(e),h&&b(s),h&&b(i),l=!1,Ze(c)}}}function Id(t){let e,n,s=t[0]-t[24]+"",i,r,o,a;function l(){return t[18](t[24])}return{c(){e=p("li"),n=p("a"),i=S(s),g(n,"href",r="/blog/"+(t[0]-t[24]))},m(c,h){w(c,e,h),u(e,n),u(n,i),o||(a=q(n,"click",vn(l)),o=!0)},p(c,h){t=c,h&1&&s!==(s=t[0]-t[24]+"")&&ie(i,s),h&1&&r!==(r="/blog/"+(t[0]-t[24]))&&g(n,"href",r)},d(c){c&&b(e),o=!1,a()}}}function Td(t){let e,n=t[0]-t[24]>0&&Id(t);return{c(){n&&n.c(),e=sn()},m(s,i){n&&n.m(s,i),w(s,e,i)},p(s,i){s[0]-s[24]>0?n?n.p(s,i):(n=Id(s),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(s){n&&n.d(s),s&&b(e)}}}function Cd(t){let e,n,s=t[0]+(t[24]+1)+"",i,r,o,a;function l(){return t[19](t[24])}return{c(){e=p("li"),n=p("a"),i=S(s),g(n,"href",r="/blog/"+(t[0]+(t[24]+1)))},m(c,h){w(c,e,h),u(e,n),u(n,i),o||(a=q(n,"click",vn(l)),o=!0)},p(c,h){t=c,h&1&&s!==(s=t[0]+(t[24]+1)+"")&&ie(i,s),h&1&&r!==(r="/blog/"+(t[0]+(t[24]+1)))&&g(n,"href",r)},d(c){c&&b(e),o=!1,a()}}}function Sd(t){let e,n=t[0]+(t[24]+1)<=t[5]&&Cd(t);return{c(){n&&n.c(),e=sn()},m(s,i){n&&n.m(s,i),w(s,e,i)},p(s,i){s[0]+(s[24]+1)<=s[5]?n?n.p(s,i):(n=Cd(s),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(s){n&&n.d(s),s&&b(e)}}}function Ad(t){let e,n,s,i,r,o,a,l,c,h,f;return{c(){e=p("li"),n=p("a"),s=S("next"),r=k(),o=p("li"),a=p("a"),l=S("last"),g(n,"href",i="/blog/"+(t[0]+1)),g(a,"href",c="/blog/"+t[5])},m(d,m){w(d,e,m),u(e,n),u(n,s),w(d,r,m),w(d,o,m),u(o,a),u(a,l),h||(f=[q(n,"click",vn(t[20])),q(a,"click",vn(t[21]))],h=!0)},p(d,m){m&1&&i!==(i="/blog/"+(d[0]+1))&&g(n,"href",i),m&32&&c!==(c="/blog/"+d[5])&&g(a,"href",c)},d(d){d&&b(e),d&&b(r),d&&b(o),h=!1,Ze(f)}}}function Dd(t){let e,n,s;return n=new tC({props:{$contact:t[7]}}),{c(){e=p("div"),de(n.$$.fragment)},m(i,r){w(i,e,r),ue(n,e,null),s=!0},p(i,r){const o={};r&128&&(o.$contact=i[7]),n.$set(o)},i(i){s||(H(n.$$.fragment,i),s=!0)},o(i){X(n.$$.fragment,i),s=!1},d(i){i&&b(e),he(n)}}}function Pd(t){let e,n,s,i;const r=[t[7]];let o={};for(let a=0;a<r.length;a+=1)o=Ut(o,r[a]);return s=new xT({props:o}),{c(){e=p("div"),n=p("div"),de(s.$$.fragment),g(n,"class","container")},m(a,l){w(a,e,l),u(e,n),ue(s,n,null),i=!0},p(a,l){const c=l&128?yn(r,[Zn(a[7])]):{};s.$set(c)},i(a){i||(H(s.$$.fragment,a),i=!0)},o(a){X(s.$$.fragment,a),i=!1},d(a){a&&b(e),he(s)}}}function nC(t){let e,n,s,i,r,o,a,l,c,h,f=t[6]==="start"&&bd(t),d=t[6]==="contSelect"&&Dd(t),m=(t[6]==="contEditing"||t[6]==="contAdding")&&Pd(t);return{c(){e=p("main"),n=p("div"),s=p("h1"),s.textContent="Contactos",i=k(),r=p("img"),a=k(),f&&f.c(),l=k(),d&&d.c(),c=k(),m&&m.c(),st(r.src,o=L_)||g(r,"src",o),g(r,"alt","contactos"),g(r,"class","svelte-152vhxc"),g(e,"class","container")},m(_,v){w(_,e,v),u(e,n),u(n,s),u(n,i),u(n,r),u(e,a),f&&f.m(e,null),u(e,l),d&&d.m(e,null),u(e,c),m&&m.m(e,null),h=!0},p(_,[v]){_[6]==="start"?f?(f.p(_,v),v&64&&H(f,1)):(f=bd(_),f.c(),H(f,1),f.m(e,l)):f&&(It(),X(f,1,1,()=>{f=null}),Tt()),_[6]==="contSelect"?d?(d.p(_,v),v&64&&H(d,1)):(d=Dd(_),d.c(),H(d,1),d.m(e,c)):d&&(It(),X(d,1,1,()=>{d=null}),Tt()),_[6]==="contEditing"||_[6]==="contAdding"?m?(m.p(_,v),v&64&&H(m,1)):(m=Pd(_),m.c(),H(m,1),m.m(e,null)):m&&(It(),X(m,1,1,()=>{m=null}),Tt())},i(_){h||(H(f),H(d),H(m),h=!0)},o(_){X(f),X(d),X(m),h=!1},d(_){_&&b(e),f&&f.d(),d&&d.d(),m&&m.d()}}}let il=15;function sC(t,e,n){let s,i,r,o,a,l;Me(t,nt,$=>n(6,a=$)),Me(t,tt,$=>n(7,l=$));let c;Ve(nt,a="start",a);let h,f=1,d=[];const m=$=>{n(0,f=$)},_=()=>{Ve(nt,a="contAdding",a)},v=$=>{n(3,c=""),Ve(tt,l=$,l),Ve(nt,a="contSelect",a)};function y(){return n(1,d=gr.filter($=>($.name+" "+$.lastname).toLowerCase().includes(c.toLowerCase())))}n(1,d=gr.sort(($,U)=>new Date($.createdA)<new Date(U.createdAt)?1:new Date($.createdAt)>new Date(U.createdAt)?-1:0));function E($){c=$,n(3,c)}const I=$=>v($),L=()=>m(1),A=()=>m(f-1),M=$=>m(f-$),F=$=>m(f+($+1)),O=()=>m(f+1),z=()=>m(i);return t.$$.update=()=>{t.$$.dirty&2&&n(13,s=d.length),t.$$.dirty&8192&&n(5,i=Math.ceil(s/il)),t.$$.dirty&1&&n(2,r=f*il),t.$$.dirty&4&&n(4,o=r-il)},[f,d,r,c,o,i,a,l,m,_,v,y,h,s,E,I,L,A,M,F,O,z]}class iC extends xe{constructor(e){super(),Xe(this,e,sC,nC,We,{})}}let cs=[],us=[];function rC(t,e){e=e.filter(n=>n.selecTP===t.selectTP),t.numBeds>0&&(e=e.filter(n=>n.numBeds>=t.beds)),t.numBaths>0&&(e=e.filter(n=>n.numBaths>=t.bathroom)),t.numParks>0&&(e=e.filter(n=>n.numPark>=t.parks));try{e=e.filter(n=>{n.budget?cs=e.filter(s=>s.budget>=t.price*.7&&s.budget<=t.price*1.1):us=e.filter(s=>s.rangeProp===U_(t.price))})}catch(n){console.log(n)}e=us.concat(cs),cs=[],us=[];try{e.filter(n=>{n.locaProperty.length>0?(cs=e.filter(s=>t.locaProperty.some(i=>s.locaProperty.includes(i))),console.log(t.locaProperty)):(us=e.filter(s=>s.locaProperty.length===0),console.log(t.locaProperty))})}catch(n){console.log(n)}e=us.concat(cs),cs=[],us=[];try{e=e.filter(n=>{n.tagsProperty.length>0?cs=e.filter(s=>t.tagsProperty.some(i=>s.tagsProperty.includes(i))):us=e.filter(s=>s.tagsProperty.length===0)})}catch(n){console.log(n)}return e=us.concat(cs),console.log(e),N_.set(e)}function Rd(t,e,n){const s=t.slice();return s[16]=e[n],s}function Nd(t){let e,n=t[2],s=[];for(let i=0;i<n.length;i+=1)s[i]=Od(Rd(t,n,i));return{c(){for(let i=0;i<s.length;i+=1)s[i].c();e=sn()},m(i,r){for(let o=0;o<s.length;o+=1)s[o].m(i,r);w(i,e,r)},p(i,r){if(r&4){n=i[2];let o;for(o=0;o<n.length;o+=1){const a=Rd(i,n,o);s[o]?s[o].p(a,r):(s[o]=Od(a),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(i){ze(s,i),i&&b(e)}}}function Od(t){let e,n,s,i,r=t[16].name+"",o,a,l=t[16].lastname+"",c,h,f,d=t[16].locaProperty+"",m,_,v,y=t[16].tagsProperty+"",E,I,L,A=t[16].budget+"",M,F,O,z=t[16].rangeProp+"",$,U;return{c(){e=p("div"),n=p("input"),s=k(),i=p("div"),o=S(r),a=k(),c=S(l),h=k(),f=p("div"),m=S(d),_=k(),v=p("div"),E=S(y),I=k(),L=p("div"),M=S(A),F=k(),O=p("div"),$=S(z),U=k(),g(n,"type","checkbox"),g(e,"class","conInt svelte-1s75tnf")},m(j,K){w(j,e,K),u(e,n),u(e,s),u(e,i),u(i,o),u(i,a),u(i,c),u(e,h),u(e,f),u(f,m),u(e,_),u(e,v),u(v,E),u(e,I),u(e,L),u(L,M),u(e,F),u(e,O),u(O,$),u(e,U)},p(j,K){K&4&&r!==(r=j[16].name+"")&&ie(o,r),K&4&&l!==(l=j[16].lastname+"")&&ie(c,l),K&4&&d!==(d=j[16].locaProperty+"")&&ie(m,d),K&4&&y!==(y=j[16].tagsProperty+"")&&ie(E,y),K&4&&A!==(A=j[16].budget+"")&&ie(M,A),K&4&&z!==(z=j[16].rangeProp+"")&&ie($,z)},d(j){j&&b(e)}}}function oC(t){let e,n,s,i,r,o,a,l,c,h=t[1].claveEB+"",f,d,m=t[1].nameProperty+"",_,v,y,E=t[1].selecTP+"",I,L,A=t[1].colonia+"",M,F,O=t[1].locaProperty+"",z,$,U,j,K,Y=t[1].price+"",ee,W,G,x,Q=t[1].beds+"",C,R,N=t[1].bathroom+"",P,J,oe=t[1].halfBathroom+"",Ae,me,ye,ce,De=t[1].areaBuilding+"",Re,mt,B=t[1].areaTotal+"",re,Qe,Nt,$e,ft=t[1].description+"",je,rn,dt,gt,Bt,D,ae,ve,lt,V,ke,_t,on,ut,jn,an,vt,Sn,An,ln,Dn,Pn,en,qe,tn,He=t[0]&&Nd(t);return{c(){e=p("div"),n=p("div"),s=p("div"),i=p("img"),a=k(),l=p("div"),c=p("h4"),f=S(h),d=k(),_=S(m),v=k(),y=p("h5"),I=S(E),L=S(" en Col. "),M=S(A),F=S(" al "),z=S(O),$=S(" de la ciudad."),U=k(),j=p("h6"),K=S("Precio: "),ee=S(Y),W=k(),G=p("div"),x=p("h6"),C=S(Q),R=S(" Recamaras, "),P=S(N),J=S(" Ba\xF1os y "),Ae=S(oe),me=S(" Medio Ba\xF1o"),ye=k(),ce=p("h6"),Re=S(De),mt=S(" m2 de construcci\xF3n y "),re=S(B),Qe=S(" m2 de terreno"),Nt=k(),$e=p("p"),je=S(ft),rn=k(),dt=p("div"),gt=p("a"),Bt=S("Seguir Link en Otra Ventana"),ae=k(),ve=p("div"),lt=p("button"),lt.textContent="Enviar por WhatsApp",V=k(),ke=p("button"),ke.textContent="Buscar Interesados",_t=k(),on=p("div"),ut=p("button"),ut.textContent="Regresar",jn=k(),an=p("div"),vt=p("img"),An=k(),ln=p("img"),Pn=k(),He&&He.c(),en=sn(),st(i.src,r=t[1].urlImage)||g(i,"src",r),g(i,"alt",o=t[1].nameProperty),g(s,"class","selectImage svelte-1s75tnf"),g($e,"class","descSelec"),g(l,"class","descSelect"),g(gt,"href",D=t[1].urlProp),g(gt,"target","_blank"),g(dt,"class","folowLink"),g(lt,"class","btnCommon btnWhatsApp"),g(ke,"class","btnCommon"),g(ve,"class","optionsSend"),g(ut,"class","btnCommon btnCancel"),g(on,"class","backAnt"),st(vt.src,Sn=Da)||g(vt,"src",Sn),g(vt,"alt","delete"),st(ln.src,Dn=F_)||g(ln,"src",Dn),g(ln,"alt","delete"),g(an,"class","icon__Content"),g(n,"class","sele__info svelte-1s75tnf"),g(e,"class","sele__Product svelte-1s75tnf")},m(Pe,Ce){w(Pe,e,Ce),u(e,n),u(n,s),u(s,i),u(n,a),u(n,l),u(l,c),u(c,f),u(c,d),u(c,_),u(l,v),u(l,y),u(y,I),u(y,L),u(y,M),u(y,F),u(y,z),u(y,$),u(l,U),u(l,j),u(j,K),u(j,ee),u(l,W),u(l,G),u(G,x),u(x,C),u(x,R),u(x,P),u(x,J),u(x,Ae),u(x,me),u(l,ye),u(l,ce),u(ce,Re),u(ce,mt),u(ce,re),u(ce,Qe),u(l,Nt),u(l,$e),u($e,je),u(n,rn),u(n,dt),u(dt,gt),u(gt,Bt),u(n,ae),u(n,ve),u(ve,lt),u(ve,V),u(ve,ke),u(n,_t),u(n,on),u(on,ut),u(n,jn),u(n,an),u(an,vt),u(an,An),u(an,ln),w(Pe,Pn,Ce),He&&He.m(Pe,Ce),w(Pe,en,Ce),qe||(tn=[q(lt,"click",t[8]),q(ke,"click",t[6]),q(ut,"click",t[7]),q(vt,"click",t[4]),q(ln,"click",t[5])],qe=!0)},p(Pe,[Ce]){Ce&2&&!st(i.src,r=Pe[1].urlImage)&&g(i,"src",r),Ce&2&&o!==(o=Pe[1].nameProperty)&&g(i,"alt",o),Ce&2&&h!==(h=Pe[1].claveEB+"")&&ie(f,h),Ce&2&&m!==(m=Pe[1].nameProperty+"")&&ie(_,m),Ce&2&&E!==(E=Pe[1].selecTP+"")&&ie(I,E),Ce&2&&A!==(A=Pe[1].colonia+"")&&ie(M,A),Ce&2&&O!==(O=Pe[1].locaProperty+"")&&ie(z,O),Ce&2&&Y!==(Y=Pe[1].price+"")&&ie(ee,Y),Ce&2&&Q!==(Q=Pe[1].beds+"")&&ie(C,Q),Ce&2&&N!==(N=Pe[1].bathroom+"")&&ie(P,N),Ce&2&&oe!==(oe=Pe[1].halfBathroom+"")&&ie(Ae,oe),Ce&2&&De!==(De=Pe[1].areaBuilding+"")&&ie(Re,De),Ce&2&&B!==(B=Pe[1].areaTotal+"")&&ie(re,B),Ce&2&&ft!==(ft=Pe[1].description+"")&&ie(je,ft),Ce&2&&D!==(D=Pe[1].urlProp)&&g(gt,"href",D),Pe[0]?He?He.p(Pe,Ce):(He=Nd(Pe),He.c(),He.m(en.parentNode,en)):He&&(He.d(1),He=null)},i:fe,o:fe,d(Pe){Pe&&b(e),Pe&&b(Pn),He&&He.d(Pe),Pe&&b(en),qe=!1,Ze(tn)}}}function aC(t,e,n){let s,i,r;Me(t,nt,m=>n(10,s=m)),Me(t,Je,m=>n(1,i=m)),Me(t,N_,m=>n(2,r=m)),Xs();let o=[],a=!1;function l(){console.log("propEditing"),Ve(nt,s="propEditing",s),console.log("propEditing")}async function c(){confirm("Deseas eleiminar definitivamente la propiedad?")&&(console.log("Borraste al propiedad"),await Ta(is(pt,"properties",i.id)),Ve(nt,s="start",s))}function h(){rC(i,gr),n(0,a=!0)}function f(){Ve(Je,i=[],i),Ve(nt,s="start",s)}return[a,i,r,o,l,c,h,f,()=>void 0]}class lC extends xe{constructor(e){super(),Xe(this,e,aC,oC,We,{})}}function cC(t){let e;return{c(){e=S("Editar")},m(n,s){w(n,e,s)},d(n){n&&b(e)}}}function uC(t){let e;return{c(){e=S("Guardar")},m(n,s){w(n,e,s)},d(n){n&&b(e)}}}function hC(t){let e,n,s,i,r,o,a,l,c,h,f,d,m,_,v,y;l=new GT({});function E(A,M){return A[0]==="propAdding"?uC:cC}let I=E(t),L=I(t);return{c(){e=p("form"),n=p("div"),s=p("div"),i=p("img"),a=k(),de(l.$$.fragment),c=k(),h=p("div"),f=p("button"),L.c(),d=k(),m=p("button"),m.textContent="Cancel",st(i.src,r=t[1].urlImage)||g(i,"src",r),g(i,"alt",o=t[1].nameProperty),g(i,"class","svelte-166hnhc"),g(f,"class","btn-save"),g(m,"class","btn-cancel"),g(h,"class","contSavCan svelte-166hnhc"),g(n,"class","altaContactos"),g(e,"class","propiedad")},m(A,M){w(A,e,M),u(e,n),u(n,s),u(s,i),u(s,a),ue(l,s,null),u(n,c),u(n,h),u(h,f),L.m(f,null),u(h,d),u(h,m),_=!0,v||(y=[q(m,"click",t[3]),q(e,"submit",vn(t[2]))],v=!0)},p(A,[M]){(!_||M&2&&!st(i.src,r=A[1].urlImage))&&g(i,"src",r),(!_||M&2&&o!==(o=A[1].nameProperty))&&g(i,"alt",o),I!==(I=E(A))&&(L.d(1),L=I(A),L&&(L.c(),L.m(f,null)))},i(A){_||(H(l.$$.fragment,A),_=!0)},o(A){X(l.$$.fragment,A),_=!1},d(A){A&&b(e),he(l),L.d(),v=!1,Ze(y)}}}function fC(t,e,n){let s,i;Me(t,nt,c=>n(0,s=c)),Me(t,Je,c=>n(1,i=c));let r=0;const o=Xs();async function a(){if(console.log("Estas en add property",s,i),s==="propEditing")console.log("estas dentro de edit property",i.id),await Ia(is(pt,"properties",i.id),i);else{r=Date.now(),Ve(Je,i={...i,createdAt:r},i),console.log(i);const c=_n(pt,"properties");await ws(c,i)}Ve(nt,s="start",s)}return[s,i,a,()=>{o("./")}]}class j_ extends xe{constructor(e){super(),Xe(this,e,fC,hC,We,{})}}function Ld(t,e,n){const s=t.slice();return s[23]=e[n],s[25]=n,s}function Md(t,e,n){const s=t.slice();return s[25]=e[n],s}function $d(t,e,n){const s=t.slice();return s[12]=e[n],s[25]=n,s}function Ud(t){let e,n,s,i,r,o,a,l,c,h,f,d,m,_,v,y,E,I,L,A,M,F,O;function z(C){t[14](C)}let $={};t[3]!==void 0&&($.searchTerm=t[3]),r=new uu({props:$}),Jn.push(()=>js(r,"searchTerm",z)),r.$on("input",t[11]);let U=t[1],j=[];for(let C=0;C<U.length;C+=1)j[C]=Bd($d(t,U,C));const K=C=>X(j[C],1,1,()=>{j[C]=null});let Y=t[0]>1&&Vd(t),ee=[3,2,1],W=[];for(let C=0;C<3;C+=1)W[C]=qd(Md(t,ee,C));let G=Array(3),x=[];for(let C=0;C<G.length;C+=1)x[C]=Kd(Ld(t,G,C));let Q=t[0]<t[5]&&zd(t);return{c(){e=p("h2"),e.textContent=`${Fn.length} Propiedades a Mostrar`,n=k(),s=p("button"),s.textContent="Alta de Propiedad",i=k(),de(r.$$.fragment),a=k(),l=p("div"),c=p("main");for(let C=0;C<j.length;C+=1)j[C].c();h=k(),f=p("div"),d=p("div"),m=p("ul"),Y&&Y.c(),_=k();for(let C=0;C<3;C+=1)W[C].c();v=k(),y=p("li"),E=p("span"),I=S(t[0]),L=k();for(let C=0;C<x.length;C+=1)x[C].c();A=k(),Q&&Q.c(),g(c,"id","bookshelf"),g(c,"class","svelte-elvgtg"),g(m,"class","pagi__options"),g(d,"class","pagi__Item"),g(f,"class","container pagination"),g(l,"class","mosPag")},m(C,R){w(C,e,R),w(C,n,R),w(C,s,R),w(C,i,R),ue(r,C,R),w(C,a,R),w(C,l,R),u(l,c);for(let N=0;N<j.length;N+=1)j[N].m(c,null);u(l,h),u(l,f),u(f,d),u(d,m),Y&&Y.m(m,null),u(m,_);for(let N=0;N<3;N+=1)W[N].m(m,null);u(m,v),u(m,y),u(y,E),u(E,I),u(m,L);for(let N=0;N<x.length;N+=1)x[N].m(m,null);u(m,A),Q&&Q.m(m,null),M=!0,F||(O=q(s,"click",t[10]),F=!0)},p(C,R){const N={};if(!o&&R&8&&(o=!0,N.searchTerm=C[3],Vs(()=>o=!1)),r.$set(N),R&534){U=C[1];let P;for(P=0;P<U.length;P+=1){const J=$d(C,U,P);j[P]?(j[P].p(J,R),H(j[P],1)):(j[P]=Bd(J),j[P].c(),H(j[P],1),j[P].m(c,null))}for(It(),P=U.length;P<j.length;P+=1)K(P);Tt()}if(C[0]>1?Y?Y.p(C,R):(Y=Vd(C),Y.c(),Y.m(m,_)):Y&&(Y.d(1),Y=null),R&257){ee=[3,2,1];let P;for(P=0;P<3;P+=1){const J=Md(C,ee,P);W[P]?W[P].p(J,R):(W[P]=qd(J),W[P].c(),W[P].m(m,v))}for(;P<3;P+=1)W[P].d(1)}if((!M||R&1)&&ie(I,C[0]),R&289){G=Array(3);let P;for(P=0;P<G.length;P+=1){const J=Ld(C,G,P);x[P]?x[P].p(J,R):(x[P]=Kd(J),x[P].c(),x[P].m(m,A))}for(;P<x.length;P+=1)x[P].d(1);x.length=G.length}C[0]<C[5]?Q?Q.p(C,R):(Q=zd(C),Q.c(),Q.m(m,null)):Q&&(Q.d(1),Q=null)},i(C){if(!M){H(r.$$.fragment,C);for(let R=0;R<U.length;R+=1)H(j[R]);M=!0}},o(C){X(r.$$.fragment,C),j=j.filter(Boolean);for(let R=0;R<j.length;R+=1)X(j[R]);M=!1},d(C){C&&b(e),C&&b(n),C&&b(s),C&&b(i),he(r,C),C&&b(a),C&&b(l),ze(j,C),Y&&Y.d(),ze(W,C),ze(x,C),Q&&Q.d(),F=!1,O()}}}function Fd(t){let e,n,s,i,r,o,a;const l=[t[12]];let c={};for(let f=0;f<l.length;f+=1)c=Ut(c,l[f]);n=new $_({props:c});function h(){return t[15](t[12])}return{c(){e=p("section"),de(n.$$.fragment),s=k(),g(e,"class","property svelte-elvgtg")},m(f,d){w(f,e,d),ue(n,e,null),u(e,s),r=!0,o||(a=q(e,"click",h),o=!0)},p(f,d){t=f;const m=d&2?yn(l,[Zn(t[12])]):{};n.$set(m)},i(f){r||(H(n.$$.fragment,f),et(()=>{i||(i=pn(e,Ti,{duration:500,easing:Ii},!0)),i.run(1)}),r=!0)},o(f){X(n.$$.fragment,f),i||(i=pn(e,Ti,{duration:500,easing:Ii},!1)),i.run(0),r=!1},d(f){f&&b(e),he(n),f&&i&&i.end(),o=!1,a()}}}function Bd(t){let e,n,s=t[25]>=t[4]&&t[25]<t[2]&&Fd(t);return{c(){s&&s.c(),e=sn()},m(i,r){s&&s.m(i,r),w(i,e,r),n=!0},p(i,r){i[25]>=i[4]&&i[25]<i[2]?s?(s.p(i,r),r&20&&H(s,1)):(s=Fd(i),s.c(),H(s,1),s.m(e.parentNode,e)):s&&(It(),X(s,1,1,()=>{s=null}),Tt())},i(i){n||(H(s),n=!0)},o(i){X(s),n=!1},d(i){s&&s.d(i),i&&b(e)}}}function Vd(t){let e,n,s,i,r,o,a,l,c;return{c(){e=p("li"),n=p("a"),n.textContent="first",s=k(),i=p("li"),r=p("a"),o=S("previous"),g(n,"href","/blog"),g(r,"href",a="/blog/"+(t[0]-1))},m(h,f){w(h,e,f),u(e,n),w(h,s,f),w(h,i,f),u(i,r),u(r,o),l||(c=[q(n,"click",vn(t[16])),q(r,"click",vn(t[17]))],l=!0)},p(h,f){f&1&&a!==(a="/blog/"+(h[0]-1))&&g(r,"href",a)},d(h){h&&b(e),h&&b(s),h&&b(i),l=!1,Ze(c)}}}function jd(t){let e,n,s=t[0]-t[25]+"",i,r,o,a;function l(){return t[18](t[25])}return{c(){e=p("li"),n=p("a"),i=S(s),g(n,"href",r="/blog/"+(t[0]-t[25]))},m(c,h){w(c,e,h),u(e,n),u(n,i),o||(a=q(n,"click",vn(l)),o=!0)},p(c,h){t=c,h&1&&s!==(s=t[0]-t[25]+"")&&ie(i,s),h&1&&r!==(r="/blog/"+(t[0]-t[25]))&&g(n,"href",r)},d(c){c&&b(e),o=!1,a()}}}function qd(t){let e,n=t[0]-t[25]>0&&jd(t);return{c(){n&&n.c(),e=sn()},m(s,i){n&&n.m(s,i),w(s,e,i)},p(s,i){s[0]-s[25]>0?n?n.p(s,i):(n=jd(s),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(s){n&&n.d(s),s&&b(e)}}}function Hd(t){let e,n,s=t[0]+(t[25]+1)+"",i,r,o,a;function l(){return t[19](t[25])}return{c(){e=p("li"),n=p("a"),i=S(s),g(n,"href",r="/blog/"+(t[0]+(t[25]+1)))},m(c,h){w(c,e,h),u(e,n),u(n,i),o||(a=q(n,"click",vn(l)),o=!0)},p(c,h){t=c,h&1&&s!==(s=t[0]+(t[25]+1)+"")&&ie(i,s),h&1&&r!==(r="/blog/"+(t[0]+(t[25]+1)))&&g(n,"href",r)},d(c){c&&b(e),o=!1,a()}}}function Kd(t){let e,n=t[0]+(t[25]+1)<=t[5]&&Hd(t);return{c(){n&&n.c(),e=sn()},m(s,i){n&&n.m(s,i),w(s,e,i)},p(s,i){s[0]+(s[25]+1)<=s[5]?n?n.p(s,i):(n=Hd(s),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(s){n&&n.d(s),s&&b(e)}}}function zd(t){let e,n,s,i,r,o,a,l,c,h,f;return{c(){e=p("li"),n=p("a"),s=S("next"),r=k(),o=p("li"),a=p("a"),l=S("last"),g(n,"href",i="/blog/"+(t[0]+1)),g(a,"href",c="/blog/"+t[5])},m(d,m){w(d,e,m),u(e,n),u(n,s),w(d,r,m),w(d,o,m),u(o,a),u(a,l),h||(f=[q(n,"click",vn(t[20])),q(a,"click",vn(t[21]))],h=!0)},p(d,m){m&1&&i!==(i="/blog/"+(d[0]+1))&&g(n,"href",i),m&32&&c!==(c="/blog/"+d[5])&&g(a,"href",c)},d(d){d&&b(e),d&&b(r),d&&b(o),h=!1,Ze(f)}}}function Gd(t){let e,n,s;const i=[t[7]];let r={};for(let o=0;o<i.length;o+=1)r=Ut(r,i[o]);return n=new lC({props:r}),{c(){e=p("div"),de(n.$$.fragment)},m(o,a){w(o,e,a),ue(n,e,null),s=!0},p(o,a){const l=a&128?yn(i,[Zn(o[7])]):{};n.$set(l)},i(o){s||(H(n.$$.fragment,o),s=!0)},o(o){X(n.$$.fragment,o),s=!1},d(o){o&&b(e),he(n)}}}function Wd(t){let e,n,s;const i=[t[7]];let r={};for(let o=0;o<i.length;o+=1)r=Ut(r,i[o]);return n=new j_({props:r}),{c(){e=p("div"),de(n.$$.fragment),g(e,"class","container")},m(o,a){w(o,e,a),ue(n,e,null),s=!0},p(o,a){const l=a&128?yn(i,[Zn(o[7])]):{};n.$set(l)},i(o){s||(H(n.$$.fragment,o),s=!0)},o(o){X(n.$$.fragment,o),s=!1},d(o){o&&b(e),he(n)}}}function Qd(t){let e,n,s;return n=new j_({}),{c(){e=p("div"),de(n.$$.fragment),g(e,"class","container")},m(i,r){w(i,e,r),ue(n,e,null),s=!0},i(i){s||(H(n.$$.fragment,i),s=!0)},o(i){X(n.$$.fragment,i),s=!1},d(i){i&&b(e),he(n)}}}function dC(t){let e,n,s,i,r,o,a,l,c,h,f,d=t[6]==="start"&&Ud(t),m=t[6]==="propSelect"&&Gd(t),_=t[6]==="propEditing"&&Wd(t),v=t[6]==="propAdding"&&Qd();return{c(){e=p("div"),n=p("div"),s=p("h1"),s.textContent="Propiedades",i=k(),r=p("img"),a=k(),d&&d.c(),l=k(),m&&m.c(),c=k(),_&&_.c(),h=k(),v&&v.c(),st(r.src,o=M_)||g(r,"src",o),g(r,"alt","propiedad"),g(r,"class","imgTitle svelte-elvgtg"),g(e,"class","container")},m(y,E){w(y,e,E),u(e,n),u(n,s),u(n,i),u(n,r),u(e,a),d&&d.m(e,null),u(e,l),m&&m.m(e,null),u(e,c),_&&_.m(e,null),u(e,h),v&&v.m(e,null),f=!0},p(y,[E]){y[6]==="start"?d?(d.p(y,E),E&64&&H(d,1)):(d=Ud(y),d.c(),H(d,1),d.m(e,l)):d&&(It(),X(d,1,1,()=>{d=null}),Tt()),y[6]==="propSelect"?m?(m.p(y,E),E&64&&H(m,1)):(m=Gd(y),m.c(),H(m,1),m.m(e,c)):m&&(It(),X(m,1,1,()=>{m=null}),Tt()),y[6]==="propEditing"?_?(_.p(y,E),E&64&&H(_,1)):(_=Wd(y),_.c(),H(_,1),_.m(e,h)):_&&(It(),X(_,1,1,()=>{_=null}),Tt()),y[6]==="propAdding"?v?E&64&&H(v,1):(v=Qd(),v.c(),H(v,1),v.m(e,null)):v&&(It(),X(v,1,1,()=>{v=null}),Tt())},i(y){f||(H(d),H(m),H(_),H(v),f=!0)},o(y){X(d),X(m),X(_),X(v),f=!1},d(y){y&&b(e),d&&d.d(),m&&m.d(),_&&_.d(),v&&v.d()}}}let rl=20;function pC(t,e,n){let s,i,r,o,a,l,c;Me(t,nt,$=>n(6,l=$)),Me(t,Je,$=>n(7,c=$));let h,f;Ve(nt,l="start",l);let d=1;const m=$=>{n(0,d=$)};function _($){console.log($),Ve(Je,c=$,c),Ve(nt,l="propSelect",l)}function v(){Ve(nt,l="propAdding",l)}function y(){return n(1,s=Fn.filter($=>($.nameProperty+" "+$.colonia).toLowerCase().includes(h.toLowerCase())))}n(1,s=Fn.sort(($,U)=>new Date($.createdAt)<new Date(U.createdAt)?1:new Date($.createdAt)>new Date(U.createdAt)?-1:0));function E($){h=$,n(3,h)}const I=$=>_($),L=()=>m(1),A=()=>m(d-1),M=$=>m(d-$),F=$=>m(d+($+1)),O=()=>m(d+1),z=()=>m(r);return t.$$.update=()=>{t.$$.dirty&2&&n(13,i=s.length),t.$$.dirty&8192&&n(5,r=Math.ceil(i/rl)),t.$$.dirty&1&&n(2,o=d*rl),t.$$.dirty&4&&n(4,a=o-rl)},n(1,s=Fn),[d,s,o,h,a,r,l,c,m,_,v,y,f,i,E,I,L,A,M,F,O,z]}class mC extends xe{constructor(e){super(),Xe(this,e,pC,dC,We,{})}}function gC(t){let e;return{c(){e=p("h1"),e.textContent="Captacion"},m(n,s){w(n,e,s)},p:fe,i:fe,o:fe,d(n){n&&b(e)}}}class _C extends xe{constructor(e){super(),Xe(this,e,null,gC,We,{})}}function vC(t){let e,n,s,i,r=t[0].task+"",o;return{c(){e=p("div"),n=p("h1"),n.textContent="Estas en About",s=k(),i=p("h3"),o=S(r),g(e,"class","cont")},m(a,l){w(a,e,l),u(e,n),u(e,s),u(e,i),u(i,o)},p(a,[l]){l&1&&r!==(r=a[0].task+"")&&ie(o,r)},i:fe,o:fe,d(a){a&&b(e)}}}function yC(t,e,n){let s;return Me(t,kn,i=>n(0,s=i)),[s]}class bC extends xe{constructor(e){super(),Xe(this,e,yC,vC,We,{})}}function wC(t){let e,n,s,i;return{c(){e=p("div"),n=p("div"),s=S(t[0]),g(n,"id","snackbar"),g(n,"class",i=mu(t[1]?"animation-in":"not-show")+" svelte-1e3w4r3")},m(r,o){w(r,e,o),u(e,n),u(n,s)},p(r,[o]){o&1&&ie(s,r[0]),o&2&&i!==(i=mu(r[1]?"animation-in":"not-show")+" svelte-1e3w4r3")&&g(n,"class",i)},i:fe,o:fe,d(r){r&&b(e)}}}function kC(t,e,n){let{message:s=""}=e,{show:i=!1}=e;return t.$$set=r=>{"message"in r&&n(0,s=r.message),"show"in r&&n(1,i=r.show)},[s,i]}class EC extends xe{constructor(e){super(),Xe(this,e,kC,wC,We,{message:0,show:1})}}function IC(t){let e;return{c(){e=S("Registrarse")},m(n,s){w(n,e,s)},d(n){n&&b(e)}}}function TC(t){let e,n,s,i,r,o,a,l,c,h,f,d,m,_,v,y,E,I,L,A,M,F,O,z,$,U,j,K,Y,ee,W;return n=new EC({props:{message:t[0],show:t[1]}}),K=new fn({props:{to:"/register",$$slots:{default:[IC]},$$scope:{ctx:t}}}),{c(){e=p("div"),de(n.$$.fragment),s=k(),i=p("br"),r=p("br"),o=p("br"),a=k(),l=p("div"),c=p("h1"),c.textContent="Inicia sesi\xF3n en tu cuenta",h=k(),f=p("div"),d=p("input"),m=k(),_=p("div"),v=p("input"),y=k(),E=p("br"),I=k(),L=p("div"),A=p("button"),A.textContent="Iniciar sesi\xF3n",M=k(),F=p("p"),F.textContent="O tambi\xE9n",O=k(),z=p("br"),$=k(),U=p("p"),j=S("\xBFA\xFAn no tienes cuenta? "),de(K.$$.fragment),g(c,"class","text-center text-login svelte-ftg4em"),g(d,"name","email"),g(d,"type","text"),g(d,"class","input-form svelte-ftg4em"),g(d,"placeholder","Correo"),g(f,"class","center svelte-ftg4em"),g(v,"name","password"),g(v,"type","password"),g(v,"class","input-form svelte-ftg4em"),g(v,"placeholder","Contrase\xF1a"),g(_,"class","center svelte-ftg4em"),g(A,"class","button-signup fondo-color-signup svelte-ftg4em"),g(L,"class","center svelte-ftg4em"),g(F,"class","text-center svelte-ftg4em"),g(U,"class","text-center svelte-ftg4em"),g(l,"class","form-signin svelte-ftg4em")},m(G,x){w(G,e,x),ue(n,e,null),u(e,s),u(e,i),u(e,r),u(e,o),u(e,a),u(e,l),u(l,c),u(l,h),u(l,f),u(f,d),u(l,m),u(l,_),u(_,v),u(l,y),u(l,E),u(l,I),u(l,L),u(L,A),u(l,M),u(l,F),u(l,O),u(l,z),u(l,$),u(l,U),u(U,j),ue(K,U,null),Y=!0,ee||(W=[q(d,"input",t[4]),q(v,"input",t[5]),q(A,"click",t[3])],ee=!0)},p(G,[x]){const Q={};x&1&&(Q.message=G[0]),x&2&&(Q.show=G[1]),n.$set(Q);const C={};x&512&&(C.$$scope={dirty:x,ctx:G}),K.$set(C)},i(G){Y||(H(n.$$.fragment,G),H(K.$$.fragment,G),Y=!0)},o(G){X(n.$$.fragment,G),X(K.$$.fragment,G),Y=!1},d(G){G&&b(e),he(n),he(K),ee=!1,Ze(W)}}}function CC(t,e,n){const s=Xs();let i={email:"",password:""},r="",o=!1;const a=d=>{n(0,r=d),n(1,o=!0),setTimeout(()=>{n(1,o=!1)},2800)},l=d=>{i={...i,[d.target.name]:d.target.value}};return[r,o,l,async()=>{try{await kE(D_,i.email,i.password),s("/")}catch(d){d.message==="Firebase: Error (auth/wrong-password)."&&a("Contrase\xF1a incorrecta")}},d=>l(d),d=>l(d)]}class SC extends xe{constructor(e){super(),Xe(this,e,CC,TC,We,{})}}class AC extends xe{constructor(e){super(),Xe(this,e,null,null,We,{})}}function DC(t){let e;return{c(){e=S("Home")},m(n,s){w(n,e,s)},d(n){n&&b(e)}}}function PC(t){let e;return{c(){e=S("Contactos")},m(n,s){w(n,e,s)},d(n){n&&b(e)}}}function RC(t){let e;return{c(){e=S("Propiedades")},m(n,s){w(n,e,s)},d(n){n&&b(e)}}}function NC(t){let e;return{c(){e=S("Agenda")},m(n,s){w(n,e,s)},d(n){n&&b(e)}}}function OC(t){let e;return{c(){e=S("LogOut")},m(n,s){w(n,e,s)},d(n){n&&b(e)}}}function LC(t){let e;return{c(){e=S("About")},m(n,s){w(n,e,s)},d(n){n&&b(e)}}}function MC(t){let e;return{c(){e=S("Registro")},m(n,s){w(n,e,s)},d(n){n&&b(e)}}}function $C(t){let e;return{c(){e=S("Login")},m(n,s){w(n,e,s)},d(n){n&&b(e)}}}function UC(t){let e,n;return e=new bT({}),{c(){de(e.$$.fragment)},m(s,i){ue(e,s,i),n=!0},i(s){n||(H(e.$$.fragment,s),n=!0)},o(s){X(e.$$.fragment,s),n=!1},d(s){he(e,s)}}}function FC(t){let e,n;return e=new iC({}),{c(){de(e.$$.fragment)},m(s,i){ue(e,s,i),n=!0},i(s){n||(H(e.$$.fragment,s),n=!0)},o(s){X(e.$$.fragment,s),n=!1},d(s){he(e,s)}}}function BC(t){let e,n;return e=new mC({}),{c(){de(e.$$.fragment)},m(s,i){ue(e,s,i),n=!0},i(s){n||(H(e.$$.fragment,s),n=!0)},o(s){X(e.$$.fragment,s),n=!1},d(s){he(e,s)}}}function VC(t){let e,n;return e=new _C({}),{c(){de(e.$$.fragment)},m(s,i){ue(e,s,i),n=!0},i(s){n||(H(e.$$.fragment,s),n=!0)},o(s){X(e.$$.fragment,s),n=!1},d(s){he(e,s)}}}function jC(t){let e,n;return e=new JI({}),{c(){de(e.$$.fragment)},m(s,i){ue(e,s,i),n=!0},i(s){n||(H(e.$$.fragment,s),n=!0)},o(s){X(e.$$.fragment,s),n=!1},d(s){he(e,s)}}}function qC(t){let e,n;return e=new eT({}),{c(){de(e.$$.fragment)},m(s,i){ue(e,s,i),n=!0},i(s){n||(H(e.$$.fragment,s),n=!0)},o(s){X(e.$$.fragment,s),n=!1},d(s){he(e,s)}}}function HC(t){let e,n;return e=new bC({}),{c(){de(e.$$.fragment)},m(s,i){ue(e,s,i),n=!0},i(s){n||(H(e.$$.fragment,s),n=!0)},o(s){X(e.$$.fragment,s),n=!1},d(s){he(e,s)}}}function KC(t){let e,n;return e=new AC({}),{c(){de(e.$$.fragment)},m(s,i){ue(e,s,i),n=!0},i(s){n||(H(e.$$.fragment,s),n=!0)},o(s){X(e.$$.fragment,s),n=!1},d(s){he(e,s)}}}function zC(t){let e,n;return e=new SC({}),{c(){de(e.$$.fragment)},m(s,i){ue(e,s,i),n=!0},i(s){n||(H(e.$$.fragment,s),n=!0)},o(s){X(e.$$.fragment,s),n=!1},d(s){he(e,s)}}}function GC(t){let e,n;return e=new iT({}),{c(){de(e.$$.fragment)},m(s,i){ue(e,s,i),n=!0},i(s){n||(H(e.$$.fragment,s),n=!0)},o(s){X(e.$$.fragment,s),n=!1},d(s){he(e,s)}}}function WC(t){let e,n,s,i,r,o,a,l,c,h,f,d,m,_,v,y,E,I,L,A,M,F,O,z,$,U,j,K,Y,ee,W,G,x,Q,C,R,N,P,J,oe,Ae,me,ye,ce,De,Re,mt;return d=new fn({props:{to:"/",$$slots:{default:[DC]},$$scope:{ctx:t}}}),_=new fn({props:{to:"contactos",$$slots:{default:[PC]},$$scope:{ctx:t}}}),y=new fn({props:{to:"propiedades",$$slots:{default:[RC]},$$scope:{ctx:t}}}),I=new fn({props:{to:"agenda",$$slots:{default:[NC]},$$scope:{ctx:t}}}),A=new fn({props:{to:"/about",$$slots:{default:[OC]},$$scope:{ctx:t}}}),A.$on("click",YC),F=new fn({props:{to:"about",$$slots:{default:[LC]},$$scope:{ctx:t}}}),z=new fn({props:{to:"register",$$slots:{default:[MC]},$$scope:{ctx:t}}}),U=new fn({props:{to:"login",$$slots:{default:[$C]},$$scope:{ctx:t}}}),K=new Nn({props:{path:"/",$$slots:{default:[UC]},$$scope:{ctx:t}}}),ee=new Nn({props:{path:"/contactos",$$slots:{default:[FC]},$$scope:{ctx:t}}}),G=new Nn({props:{path:"propiedades",$$slots:{default:[BC]},$$scope:{ctx:t}}}),Q=new Nn({props:{path:"captacion",$$slots:{default:[VC]},$$scope:{ctx:t}}}),R=new Nn({props:{path:"agenda",$$slots:{default:[jC]},$$scope:{ctx:t}}}),P=new Nn({props:{path:"sinergias",$$slots:{default:[qC]},$$scope:{ctx:t}}}),oe=new Nn({props:{path:"about",$$slots:{default:[HC]},$$scope:{ctx:t}}}),me=new Nn({props:{path:"logout",$$slots:{default:[KC]},$$scope:{ctx:t}}}),ce=new Nn({props:{path:"login",$$slots:{default:[zC]},$$scope:{ctx:t}}}),Re=new Nn({props:{path:"register",$$slots:{default:[GC]},$$scope:{ctx:t}}}),{c(){e=p("div"),n=p("img"),i=k(),r=p("label"),o=p("img"),l=k(),c=p("input"),h=k(),f=p("div"),de(d.$$.fragment),m=k(),de(_.$$.fragment),v=k(),de(y.$$.fragment),E=k(),de(I.$$.fragment),L=k(),de(A.$$.fragment),M=k(),de(F.$$.fragment),O=k(),de(z.$$.fragment),$=k(),de(U.$$.fragment),j=k(),de(K.$$.fragment),Y=k(),de(ee.$$.fragment),W=k(),de(G.$$.fragment),x=k(),de(Q.$$.fragment),C=k(),de(R.$$.fragment),N=k(),de(P.$$.fragment),J=k(),de(oe.$$.fragment),Ae=k(),de(me.$$.fragment),ye=k(),de(ce.$$.fragment),De=k(),de(Re.$$.fragment),st(n.src,s=Ap)||g(n,"src",s),g(n,"alt","MatchHome"),g(n,"class","nav__logo svelte-1viw6tr"),st(o.src,a=ly)||g(o,"src",a),g(o,"class","nav__img svelte-1viw6tr"),g(o,"alt","menu"),g(r,"class","nav__label svelte-1viw6tr"),g(r,"for","menu"),g(c,"type","checkbox"),g(c,"id","menu"),g(c,"class","nav__input svelte-1viw6tr"),g(f,"class","nav__menu svelte-1viw6tr"),g(e,"class","nav__container svelte-1viw6tr")},m(B,re){w(B,e,re),u(e,n),u(e,i),u(e,r),u(r,o),u(e,l),u(e,c),u(e,h),u(e,f),ue(d,f,null),u(f,m),ue(_,f,null),u(f,v),ue(y,f,null),u(f,E),ue(I,f,null),u(f,L),ue(A,f,null),u(f,M),ue(F,f,null),u(f,O),ue(z,f,null),u(f,$),ue(U,f,null),w(B,j,re),ue(K,B,re),w(B,Y,re),ue(ee,B,re),w(B,W,re),ue(G,B,re),w(B,x,re),ue(Q,B,re),w(B,C,re),ue(R,B,re),w(B,N,re),ue(P,B,re),w(B,J,re),ue(oe,B,re),w(B,Ae,re),ue(me,B,re),w(B,ye,re),ue(ce,B,re),w(B,De,re),ue(Re,B,re),mt=!0},p(B,re){const Qe={};re&2&&(Qe.$$scope={dirty:re,ctx:B}),d.$set(Qe);const Nt={};re&2&&(Nt.$$scope={dirty:re,ctx:B}),_.$set(Nt);const $e={};re&2&&($e.$$scope={dirty:re,ctx:B}),y.$set($e);const ft={};re&2&&(ft.$$scope={dirty:re,ctx:B}),I.$set(ft);const je={};re&2&&(je.$$scope={dirty:re,ctx:B}),A.$set(je);const rn={};re&2&&(rn.$$scope={dirty:re,ctx:B}),F.$set(rn);const dt={};re&2&&(dt.$$scope={dirty:re,ctx:B}),z.$set(dt);const gt={};re&2&&(gt.$$scope={dirty:re,ctx:B}),U.$set(gt);const Bt={};re&2&&(Bt.$$scope={dirty:re,ctx:B}),K.$set(Bt);const D={};re&2&&(D.$$scope={dirty:re,ctx:B}),ee.$set(D);const ae={};re&2&&(ae.$$scope={dirty:re,ctx:B}),G.$set(ae);const ve={};re&2&&(ve.$$scope={dirty:re,ctx:B}),Q.$set(ve);const lt={};re&2&&(lt.$$scope={dirty:re,ctx:B}),R.$set(lt);const V={};re&2&&(V.$$scope={dirty:re,ctx:B}),P.$set(V);const ke={};re&2&&(ke.$$scope={dirty:re,ctx:B}),oe.$set(ke);const _t={};re&2&&(_t.$$scope={dirty:re,ctx:B}),me.$set(_t);const on={};re&2&&(on.$$scope={dirty:re,ctx:B}),ce.$set(on);const ut={};re&2&&(ut.$$scope={dirty:re,ctx:B}),Re.$set(ut)},i(B){mt||(H(d.$$.fragment,B),H(_.$$.fragment,B),H(y.$$.fragment,B),H(I.$$.fragment,B),H(A.$$.fragment,B),H(F.$$.fragment,B),H(z.$$.fragment,B),H(U.$$.fragment,B),H(K.$$.fragment,B),H(ee.$$.fragment,B),H(G.$$.fragment,B),H(Q.$$.fragment,B),H(R.$$.fragment,B),H(P.$$.fragment,B),H(oe.$$.fragment,B),H(me.$$.fragment,B),H(ce.$$.fragment,B),H(Re.$$.fragment,B),mt=!0)},o(B){X(d.$$.fragment,B),X(_.$$.fragment,B),X(y.$$.fragment,B),X(I.$$.fragment,B),X(A.$$.fragment,B),X(F.$$.fragment,B),X(z.$$.fragment,B),X(U.$$.fragment,B),X(K.$$.fragment,B),X(ee.$$.fragment,B),X(G.$$.fragment,B),X(Q.$$.fragment,B),X(R.$$.fragment,B),X(P.$$.fragment,B),X(oe.$$.fragment,B),X(me.$$.fragment,B),X(ce.$$.fragment,B),X(Re.$$.fragment,B),mt=!1},d(B){B&&b(e),he(d),he(_),he(y),he(I),he(A),he(F),he(z),he(U),B&&b(j),he(K,B),B&&b(Y),he(ee,B),B&&b(W),he(G,B),B&&b(x),he(Q,B),B&&b(C),he(R,B),B&&b(N),he(P,B),B&&b(J),he(oe,B),B&&b(Ae),he(me,B),B&&b(ye),he(ce,B),B&&b(De),he(Re,B)}}}function QC(t){let e,n,s;return n=new ec({props:{$$slots:{default:[WC]},$$scope:{ctx:t}}}),{c(){e=p("nav"),de(n.$$.fragment),g(e,"class","nav svelte-1viw6tr")},m(i,r){w(i,e,r),ue(n,e,null),s=!0},p(i,[r]){const o={};r&2&&(o.$$scope={dirty:r,ctx:i}),n.$set(o)},i(i){s||(H(n.$$.fragment,i),s=!0)},o(i){X(n.$$.fragment,i),s=!1},d(i){i&&b(e),he(n)}}}async function YC(){}function XC(t){return dT.subscribe(e=>{}),[]}class xC extends xe{constructor(e){super(),Xe(this,e,XC,QC,We,{})}}function Yd(t){let e,n,s,i,r,o,a;return{c(){e=p("div"),n=p("h1"),n.textContent="Bienvendo a",s=k(),i=p("img"),o=k(),a=p("div"),a.innerHTML=`<p class="desc__intro svelte-1kx2964">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod aut aliquam, expedita perferendis consequatur modi omnis! Nostrum iste necessitatibus quisquam numquam, aliquam ipsum. Sit, similique quis. Fuga vitae possimus quisquam quam. Unde accusantium neque veniam reprehenderit, laborum, magni ut quasi asperiores a amet fugiat non, sapiente obcaecati voluptas ab! Nostrum!</p> 
        <p><strong>www.matchhome.net</strong></p>`,g(n,"class","title svelte-1kx2964"),st(i.src,r=Ap)||g(i,"src",r),g(i,"alt","MatchHome"),g(i,"class","svelte-1kx2964"),g(a,"class",""),g(e,"class","intro svelte-1kx2964")},m(l,c){w(l,e,c),u(e,n),u(e,s),u(e,i),u(e,o),u(e,a)},p:fe,d(l){l&&b(e)}}}function JC(t){let e,n,s,i,r;n=new xC({});let o=t[0]&&Yd();return{c(){e=p("nav"),de(n.$$.fragment),s=k(),i=p("body"),o&&o.c(),g(e,"class","navBar")},m(a,l){w(a,e,l),ue(n,e,null),w(a,s,l),w(a,i,l),o&&o.m(i,null),r=!0},p(a,[l]){a[0]?o?o.p(a,l):(o=Yd(),o.c(),o.m(i,null)):o&&(o.d(1),o=null)},i(a){r||(H(n.$$.fragment,a),r=!0)},o(a){X(n.$$.fragment,a),r=!1},d(a){a&&b(e),he(n),a&&b(s),a&&b(i),o&&o.d()}}}function ZC(t,e,n){let s=!0;return setTimeout(()=>{n(0,s=!1)},1500),[s]}class eS extends xe{constructor(e){super(),Xe(this,e,ZC,JC,We,{})}}new eS({target:document.getElementById("app")});
